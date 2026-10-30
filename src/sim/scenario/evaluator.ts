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
import { getGuidanceForObjective } from './guidance';
import { normalizePortId } from '../net/ifname';

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
  hints: Array<{ reason: FailReason; text: string }> = [],
  playerPings: Array<{ srcId: string; dstIp: string; success: boolean }> = []
): { states: ObjectiveState[]; allCompleted: boolean; hasFailed: boolean } {
  const states: ObjectiveState[] = [];

  for (const def of definitions) {
    let passed = false;
    let failed = false;
    let reason = FailReason.NONE;
    let detail = '';

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
        if (ok && def.require_run) {
          const ran = playerPings.some((p) => p.srcId === def.from && p.dstIp === def.to_ip && p.success);
          if (!ran) {
            ok = false;
            detail = `Run the ping from ${def.from} to complete this step`;
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
        const lastSeg = pathArr[pathArr.length - 1];
        if (typeof def.equals === 'object' && def.equals !== null) {
          passed = matchesObject(val, def.equals);
        } else if (lastSeg === 'peer' && typeof def.equals === 'string') {
          // Cable ends may be written with short or long interface names.
          passed = typeof val === 'string' && normalizePortId(val) === normalizePortId(def.equals);
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
      locked: false,
      passed,
      failed,
      failReason: reason,
      hint: hintText,
      detail,
      guidance: def.guidance || getGuidanceForObjective(def.id) || undefined,
    });
  }

  // An objective with `order: n` is locked until every objective with a lower
  // order passes. Done after evaluating all of them so list position doesn't matter.
  const rawPassed = new Map(states.map((st) => [st.id, st.passed]));
  for (const st of states) {
    if (!st.order || st.order <= 1) continue;
    st.locked = definitions.some((d) => d.order !== undefined && d.order < st.order! && !rawPassed.get(d.id));
    if (st.locked) {
      st.passed = false;
      st.failed = false;
    }
  }

  const allCompleted = states.length > 0 && states.every((s) => s.passed);
  const hasFailed = states.some((s) => s.failed);

  return { states, allCompleted, hasFailed };
}

function resolvePropertyPath(obj: any, path: string[]): any {
  if (path.length === 0) return obj;

  let curr = obj;
  for (let i = 0; i < path.length; i++) {
    const seg = path[i];
    if (curr === null || curr === undefined) return undefined;

    // Handle device interfaces mapping cleanly
    if (seg === 'interfaces' && typeof curr.getInterface === 'function') {
      const dev = curr;
      if (i + 1 < path.length) {
        const ifName = path[i + 1];
        i++; // skip interface name segment since we resolve it via dev.getInterface
        curr = dev.getInterface(ifName);
        continue;
      }
    }

    if (curr instanceof Map) {
      const val = curr.get(seg);
      curr = val !== undefined ? val : curr.get(Number(seg));
    } else if (typeof curr.get === 'function') {
      const val = curr.get(seg);
      curr = val !== undefined ? val : curr.get(Number(seg));
    } else {
      curr = curr[seg];
    }
  }
  return curr;
}

function matchesObject(actual: any, expected: Record<string, any>): boolean {
  if (typeof actual !== 'object' || actual === null) return false;
  for (const [k, v] of Object.entries(expected)) {
    const altKey = k === 'dot1q_vlan' ? 'dot1qVlan' : k === 'dot1qVlan' ? 'dot1q_vlan' : k;
    const actualVal = actual[k] !== undefined ? actual[k] : actual[altKey];
    if (actualVal !== v) return false;
  }
  return true;
}
