import { Device } from '../devices/device';
import {
  ObjectiveDef,
  ObjectiveState,
  FailReason,
  PingResult,
  ReportFieldState,
  HttpOutcome,
} from '../types';
import { matchesAcceptPatterns } from '../web/patch_matcher';

export interface HttpLogEntry {
  srcId: string;
  dstDevice: string;
  vulnId: string;
  patchRev: number;
  outcome: HttpOutcome;
}

export function evaluateObjectives(
  definitions: ObjectiveDef[],
  devices: Map<string, Device>,
  pingResolver: (srcId: string, dstIp: string) => PingResult,
  reportStates: Map<string, ReportFieldState>,
  httpLogs: HttpLogEntry[],
  hints: Array<{ reason: FailReason; text: string }> = []
): { states: ObjectiveState[]; allCompleted: boolean; hasFailed: boolean } {
  const states: ObjectiveState[] = [];

  for (const def of definitions) {
    let passed = false;
    let failed = false;
    let reason = FailReason.NONE;
    let detail = '';

    // Check order prerequisites
    let locked = false;
    if (def.order && def.order > 1) {
      for (const otherDef of definitions) {
        if (otherDef.order && otherDef.order < def.order) {
          const otherState = states.find((s) => s.id === otherDef.id);
          if (!otherState || !otherState.passed) {
            locked = true;
            break;
          }
        }
      }
    }

    if (def.type === 'ping' && def.from && def.to_ip) {
      const pingRes = pingResolver(def.from, def.to_ip);
      reason = pingRes.failReason;

      if (pingRes.success) {
        let ok = true;
        if (def.to_device) {
          const lastHop = pingRes.hops[pingRes.hops.length - 1];
          if (lastHop !== def.to_device) {
            ok = false;
            detail = `Reached, but last hop was ${lastHop} instead of ${def.to_device}`;
          }
        }
        if (ok && def.via) {
          if (!pingRes.hops.includes(def.via)) {
            ok = false;
            detail = `Reached, but did not route through ${def.via}`;
          }
        }
        passed = ok;
      } else {
        passed = false;
        detail = pingRes.failAt ? `Failed at ${pingRes.failAt}` : '';
      }
    } else if (def.type === 'config' && def.device && def.path) {
      const dev = devices.get(def.device);
      if (!dev) {
        passed = false;
      } else {
        const pathArr = Array.isArray(def.path) ? def.path : [def.path];
        const val = resolvePropertyPath(dev, pathArr);
        if (typeof def.equals === 'object' && def.equals !== null) {
          passed = matchesObject(val, def.equals);
        } else {
          passed = val === def.equals;
        }
      }
    } else if (def.type === 'report' && def.field) {
      const rep = reportStates.get(def.field);
      if (rep) {
        if (rep.solved) {
          passed = true;
        } else if (rep.attemptsLeft <= 0) {
          failed = true;
          detail = 'Out of attempts';
        } else {
          detail = `${rep.attemptsLeft} attempts remaining`;
        }
      }
    } else if (def.type === 'vuln_patched' && def.device && def.vuln) {
      const dev = devices.get(def.device);
      const vuln = dev?.vulns.find((v) => v.id === def.vuln);
      if (dev && vuln) {
        const fileContent = dev.files.get(vuln.region.file);
        if (fileContent) {
          const lines = fileContent.split('\n');
          const regionLines = lines.slice(vuln.region.firstLine - 1, vuln.region.lastLine);
          const regionText = regionLines.join('\n');
          passed = matchesAcceptPatterns(regionText, vuln.accept);
        }
      }
    } else if (def.type === 'exploit_test' && def.from && def.device && def.vuln && def.expect) {
      const dev = devices.get(def.device);
      const vuln = dev?.vulns.find((v) => v.id === def.vuln);
      const currentRev = dev?.patchRevs.get(def.vuln) || 0;

      if (def.expect === 'vulnerable') {
        // Did we see at least one VULNERABLE outcome from this source?
        const match = httpLogs.find(
          (log) => log.srcId === def.from && log.dstDevice === def.device && log.vulnId === def.vuln && log.outcome === HttpOutcome.VULNERABLE
        );
        passed = !!match;
      } else if (def.expect === 'patched') {
        // Is it currently patched?
        let isCodePatched = false;
        if (dev && vuln) {
          const fileContent = dev.files.get(vuln.region.file) || '';
          const lines = fileContent.split('\n');
          const regionText = lines.slice(vuln.region.firstLine - 1, vuln.region.lastLine).join('\n');
          isCodePatched = matchesAcceptPatterns(regionText, vuln.accept);
        }

        // And was the latest request tested on the current revision with PATCHED outcome?
        const logsForVuln = httpLogs.filter((log) => log.srcId === def.from && log.dstDevice === def.device && log.vulnId === def.vuln);
        const lastLog = logsForVuln[logsForVuln.length - 1];

        passed = isCodePatched && !!lastLog && lastLog.outcome === HttpOutcome.PATCHED && lastLog.patchRev === currentRev;
      }
    }

    // Resolve hint
    let hintText = '';
    if (reason !== FailReason.NONE) {
      const matchedHint = hints.find((h) => h.reason === reason);
      if (matchedHint) hintText = matchedHint.text;
    }

    states.push({
      id: def.id,
      type: def.type,
      description: def.description,
      order: def.order,
      locked,
      passed: !locked && passed,
      failed: !locked && failed,
      failReason: reason,
      hint: hintText,
      detail,
    });
  }

  const allCompleted = states.length > 0 && states.every((s) => s.passed);
  const hasFailed = states.some((s) => s.failed);

  return { states, allCompleted, hasFailed };
}

function resolvePropertyPath(obj: any, path: string[]): any {
  let curr = obj;
  for (const seg of path) {
    if (curr === null || curr === undefined) return undefined;
    if (curr instanceof Map) {
      curr = curr.get(seg);
    } else if (typeof curr.getInterface === 'function' && seg === 'interfaces') {
      // Specialized handling for device interfaces
      curr = {
        get: (ifName: string) => curr.getInterface(ifName),
      };
    } else if (typeof curr.get === 'function') {
      curr = curr.get(seg);
    } else {
      curr = curr[seg];
    }
  }
  return curr;
}

function matchesObject(actual: any, expected: Record<string, any>): boolean {
  if (typeof actual !== 'object' || actual === null) return false;
  for (const [k, v] of Object.entries(expected)) {
    if (actual[k] !== v) return false;
  }
  return true;
}
