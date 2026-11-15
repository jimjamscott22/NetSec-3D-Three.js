import { Device } from '../devices/device';
import {
  ScenarioDef,
  Link,
  PingResult,
  ObjectiveState,
  ReportFieldState,
  LogLine,
  HttpResult,
  HttpOutcome,
  PatchView,
  DebriefView,
  DeviceType,
  FailReason,
  SimSnapshot,
  DeviceSnapshot,
} from '../types';
import { ConnectivityResolver } from '../net/resolver';
import { CliSession } from '../cli/session';
import { evaluateObjectives, HttpLogEntry } from '../scenario/evaluator';
import { normalizePortId } from '../net/ifname';
import { matchesAcceptPatterns } from '../web/patch_matcher';

export class NetworkSim {
  currentScenario: ScenarioDef | null = null;
  devices: Map<string, Device> = new Map();
  links: Link[] = [];
  spareCablesCount: number = 0;
  reservedPorts: Set<string> = new Set();

  reportStates: Map<string, ReportFieldState> = new Map();
  reportAnswers: Map<string, string> = new Map();

  httpLogs: HttpLogEntry[] = [];

  // Pings the player actually ran from a terminal (src device id + destination ip).
  playerPings: Array<{ srcId: string; dstIp: string; success: boolean }> = [];

  private missionCompleteNotified = false;

  private resolver: ConnectivityResolver;
  private sessions: Map<string, CliSession> = new Map();

  // Event callbacks
  onLinkChanged?: (a: string, b: string, connected: boolean) => void;
  onConfigChanged?: (deviceId: string) => void;
  onObjectiveUpdated?: (states: ObjectiveState[]) => void;
  onMissionCompleted?: (scenarioId: string) => void;
  onMissionFailed?: (scenarioId: string) => void;

  constructor() {
    this.resolver = new ConnectivityResolver(this.devices);
  }

  loadScenario(scenario: ScenarioDef): { ok: boolean; errors: string[] } {
    this.currentScenario = scenario;
    this.devices.clear();
    this.links = [];
    this.sessions.clear();
    this.reportStates.clear();
    this.reportAnswers.clear();
    this.httpLogs = [];
    this.playerPings = [];
    this.missionCompleteNotified = false;
    this.spareCablesCount = scenario.spare_cables || 0;
    this.reservedPorts = new Set((scenario.reserved_ports || []).map(normalizePortId));

    // 1. Instantiate devices
    for (const devDef of scenario.devices) {
      const dev = new Device(devDef.id, devDef.type as DeviceType, devDef.model, devDef.hostname);
      dev.rack = devDef.rack;
      dev.slot = devDef.slot;
      dev.desk = devDef.desk;

      const cfg = devDef.config || {};
      if (cfg.ip) dev.ip = cfg.ip;
      if (cfg.mask) dev.mask = cfg.mask;
      if (cfg.gateway) dev.gateway = cfg.gateway;
      if (cfg.locked !== undefined) dev.locked = cfg.locked;

      if (cfg.vlans) {
        for (const [vid, name] of Object.entries(cfg.vlans)) {
          dev.vlans.set(Number(vid), String(name));
        }
      }

      if (cfg.interfaces) {
        for (const [ifName, ifCfg] of Object.entries(cfg.interfaces as Record<string, any>)) {
          const iface = dev.getInterface(ifName) || dev.ensureSubinterface(ifName);
          if (iface) {
            if (ifCfg.mode) iface.mode = ifCfg.mode;
            if (ifCfg.accessVlan !== undefined) iface.accessVlan = ifCfg.accessVlan;
            if (ifCfg.trunkAllowed) iface.trunkAllowed = ifCfg.trunkAllowed;
            if (ifCfg.adminUp !== undefined) iface.adminUp = ifCfg.adminUp;
            if (ifCfg.ip) iface.ip = ifCfg.ip;
            if (ifCfg.mask) iface.mask = ifCfg.mask;
            if (ifCfg.dot1qVlan !== undefined) iface.dot1qVlan = ifCfg.dot1qVlan;
          }
        }
      }

      if (cfg.files) {
        for (const [filePath, content] of Object.entries(cfg.files as Record<string, string>)) {
          dev.files.set(filePath, content);
        }
      }

      if (cfg.services) {
        dev.services = [...cfg.services];
      }

      if (cfg.vulns) {
        // Deep copy: writePatch() mutates vuln regions, and restarting a mission
        // must not inherit the previous attempt's line ranges.
        dev.vulns = JSON.parse(JSON.stringify(cfg.vulns));
      }

      this.devices.set(dev.id, dev);
    }

    // 2. Instantiate links
    for (const link of scenario.links) {
      this.applyLink(link.a, link.b, link.locked ?? false);
    }

    // 3. Setup reports
    if (scenario.report && scenario.report.fields) {
      const maxAtt = scenario.report.max_attempts || 3;
      for (const field of scenario.report.fields) {
        this.reportStates.set(field.id, {
          id: field.id,
          label: field.label,
          kind: field.kind,
          options: field.options,
          attemptsLeft: maxAtt,
          lastValue: null,
          solved: false,
          maxAttempts: maxAtt,
        });
      }

      // Populate answers from solution if available
      if (scenario.solution) {
        for (const step of scenario.solution) {
          if (step.field && step.value) {
            this.reportAnswers.set(step.field, step.value);
          }
        }
      }
    }

    // 4. Update initial oper status
    this.resolver.refreshAllOperStatuses();
    this.notifyObjectives();

    return { ok: true, errors: [] };
  }

  private applyLink(rawA: string, rawB: string, locked: boolean = false): boolean {
    const aPort = normalizePortId(rawA);
    const bPort = normalizePortId(rawB);
    const [devAId, ifAName] = aPort.split(':');
    const [devBId, ifBName] = bPort.split(':');

    const devA = this.devices.get(devAId);
    const devB = this.devices.get(devBId);
    if (!devA || !devB) return false;

    const ifA = devA.getInterface(ifAName);
    const ifB = devB.getInterface(ifBName);
    if (!ifA || !ifB) return false;

    ifA.peer = bPort;
    ifB.peer = aPort;

    this.links.push({ a: aPort, b: bPort, locked });
    this.resolver.refreshAllOperStatuses();
    return true;
  }

  connectLink(rawA: string, rawB: string): { ok: boolean; reason?: string } {
    const aPort = normalizePortId(rawA);
    const bPort = normalizePortId(rawB);
    if (this.spareCablesCount <= 0) {
      return { ok: false, reason: 'No spare cables remaining in inventory.' };
    }

    if (this.reservedPorts.has(aPort)) {
      return { ok: false, reason: `Port ${aPort} is reserved (dust cap attached).` };
    }
    if (this.reservedPorts.has(bPort)) {
      return { ok: false, reason: `Port ${bPort} is reserved (dust cap attached).` };
    }

    const [devAId, ifAName] = aPort.split(':');
    const [devBId, ifBName] = bPort.split(':');
    if (devAId === devBId) {
      return { ok: false, reason: 'Cannot connect a cable to the same device.' };
    }

    const devA = this.devices.get(devAId);
    const devB = this.devices.get(devBId);
    if (!devA || !devB) {
      return { ok: false, reason: 'Target device not found.' };
    }

    const ifA = devA.getInterface(ifAName);
    const ifB = devB.getInterface(ifBName);
    if (!ifA || !ifB) {
      return { ok: false, reason: 'Interface not found.' };
    }

    if (ifA.peer) {
      return { ok: false, reason: `Port ${aPort} is already in use.` };
    }
    if (ifB.peer) {
      return { ok: false, reason: `Port ${bPort} is already in use.` };
    }

    this.applyLink(aPort, bPort, false);
    this.spareCablesCount--;

    if (this.onLinkChanged) {
      this.onLinkChanged(aPort, bPort, true);
    }
    this.notifyObjectives();

    return { ok: true };
  }

  disconnectLink(rawPort: string): { ok: boolean; reason?: string } {
    const port = normalizePortId(rawPort);
    const linkIdx = this.links.findIndex((l) => l.a === port || l.b === port);
    if (linkIdx === -1) {
      return { ok: false, reason: 'No link connected to this port.' };
    }

    const link = this.links[linkIdx];
    if (link.locked) {
      return { ok: false, reason: 'This cable is locked by facility security.' };
    }

    const [devAId, ifAName] = link.a.split(':');
    const [devBId, ifBName] = link.b.split(':');

    const devA = this.devices.get(devAId);
    const devB = this.devices.get(devBId);
    if (devA) {
      const ifA = devA.getInterface(ifAName);
      if (ifA) ifA.peer = null;
    }
    if (devB) {
      const ifB = devB.getInterface(ifBName);
      if (ifB) ifB.peer = null;
    }

    this.links.splice(linkIdx, 1);
    this.spareCablesCount++;
    this.resolver.refreshAllOperStatuses();

    if (this.onLinkChanged) {
      this.onLinkChanged(link.a, link.b, false);
    }
    this.notifyObjectives();

    return { ok: true };
  }

  ping(srcId: string, dstIp: string): PingResult {
    return this.resolver.resolvePing(srcId, dstIp);
  }

  /** A ping typed by the player in a terminal. Recorded so objectives can require it. */
  playerPing(srcId: string, dstIp: string): PingResult {
    const res = this.ping(srcId, dstIp);
    this.playerPings.push({ srcId, dstIp, success: res.success });
    return res;
  }

  httpRequest(srcId: string, url: string): HttpResult {
    // Parse URL: http://<ip>[:port]/<route>[?<query>]
    const match = url.match(/^http:\/\/([^/:]+)(?::(\d+))?(\/[^?]*)(?:\?(.*))?$/);
    if (!match) {
      return { ok: false, status: 400, body: `curl: (3) URL malformed: ${url}`, outcome: HttpOutcome.ERROR };
    }

    const dstIp = match[1];
    const port = match[2] ? parseInt(match[2], 10) : 80;
    const route = match[3] || '/';
    const query = match[4] || '';

    // Check L3 connectivity
    const pingRes = this.ping(srcId, dstIp);
    if (!pingRes.success) {
      return {
        ok: false,
        status: 0,
        body: `curl: (7) Failed to connect to ${dstIp} port ${port}: Connection refused`,
        outcome: HttpOutcome.ERROR,
      };
    }

    // Find destination device
    let dstDev: Device | null = null;
    for (const dev of this.devices.values()) {
      if (dev.ip === dstIp) {
        dstDev = dev;
        break;
      }
    }

    if (!dstDev) {
      return {
        ok: false,
        status: 0,
        body: `curl: (7) Failed to connect to ${dstIp} port ${port}: No response`,
        outcome: HttpOutcome.ERROR,
      };
    }

    // Check service on port
    const svc = dstDev.services.find((s) => s.port === port);
    if (!svc) {
      return {
        ok: false,
        status: 0,
        body: `curl: (7) Failed to connect to ${dstIp} port ${port}: Port closed`,
        outcome: HttpOutcome.ERROR,
      };
    }

    // Check matching vuln route
    const vuln = dstDev.vulns.find((v) => v.route === route);
    if (vuln) {
      // Decode query param
      const searchParams = new URLSearchParams(query);
      const userValue = searchParams.get(vuln.exploit.param) || '';
      let payloadDecoded = userValue.trim();
      try {
        payloadDecoded = decodeURIComponent(payloadDecoded);
      } catch {
        // Already decoded by URLSearchParams; a stray '%' must not crash curl.
      }

      // Check current patch status
      const fileContent = dstDev.files.get(vuln.region.file) || '';
      const lines = fileContent.split('\n');
      const regionText = lines.slice(vuln.region.firstLine - 1, vuln.region.lastLine).join('\n');
      const isPatched = matchesAcceptPatterns(regionText, vuln.accept);

      const currentRev = dstDev.patchRevs.get(vuln.id) || 0;

      if (payloadDecoded === vuln.exploit.payload) {
        const outcome = isPatched ? HttpOutcome.PATCHED : HttpOutcome.VULNERABLE;
        const body = isPatched ? vuln.exploit.patchedBody : vuln.exploit.vulnerableBody;
        const status = isPatched ? 401 : 200;

        this.httpLogs.push({
          srcId,
          dstDevice: dstDev.id,
          vulnId: vuln.id,
          patchRev: currentRev,
          outcome,
        });

        this.notifyObjectives();
        return { ok: isPatched, status, body, outcome };
      }
    }

    return {
      ok: true,
      status: 200,
      body: 'HTTP/1.1 200 OK\n\n<html><body><h1>It Works!</h1></body></html>',
      outcome: HttpOutcome.NORMAL,
    };
  }

  submitReport(fieldId: string, value: string): { ok: boolean; correct: boolean; attemptsLeft: number } {
    const field = this.reportStates.get(fieldId);
    if (!field || field.attemptsLeft <= 0) {
      return { ok: false, correct: false, attemptsLeft: 0 };
    }

    // Match with expected answer from scenario objectives
    let expected = '';
    const obj = this.currentScenario?.objectives.find((o) => o.type === 'report' && o.field === fieldId);
    if (obj) {
      expected = String(obj.equals || '');
    } else if (this.reportAnswers.has(fieldId)) {
      expected = this.reportAnswers.get(fieldId)!;
    }

    const trimmedInput = value.trim().toLowerCase();
    const trimmedExpected = expected.trim().toLowerCase();
    const isCorrect = trimmedInput === trimmedExpected;

    field.lastValue = value.trim();
    if (isCorrect) {
      field.solved = true;
    } else {
      field.attemptsLeft--;
    }

    this.notifyObjectives();

    return {
      ok: true,
      correct: isCorrect,
      attemptsLeft: field.attemptsLeft,
    };
  }

  readFile(deviceId: string, filePath: string): string | null {
    const dev = this.devices.get(deviceId);
    if (!dev) return null;
    return dev.files.get(filePath) ?? null;
  }

  patchViews(deviceId: string, filePath: string): PatchView[] {
    const dev = this.devices.get(deviceId);
    if (!dev) return [];
    const views: PatchView[] = [];

    for (const vuln of dev.vulns) {
      if (vuln.region.file === filePath) {
        const fileContent = dev.files.get(filePath) || '';
        const lines = fileContent.split('\n');
        const regionText = lines.slice(vuln.region.firstLine - 1, vuln.region.lastLine).join('\n');
        const isPatched = matchesAcceptPatterns(regionText, vuln.accept);

        views.push({
          vulnId: vuln.id,
          file: filePath,
          firstLine: vuln.region.firstLine,
          lastLine: vuln.region.lastLine,
          hint: vuln.hint,
          isPatched,
        });
      }
    }

    return views;
  }

  writePatch(deviceId: string, vulnId: string, newText: string): { ok: boolean; accepted: boolean; hint?: string } {
    const dev = this.devices.get(deviceId);
    if (!dev) return { ok: false, accepted: false };

    const vuln = dev.vulns.find((v) => v.id === vulnId);
    if (!vuln) return { ok: false, accepted: false };

    const oldFile = dev.files.get(vuln.region.file);
    if (!oldFile) return { ok: false, accepted: false };

    const lines = oldFile.split('\n');
    const prefix = lines.slice(0, vuln.region.firstLine - 1);
    const suffix = lines.slice(vuln.region.lastLine);

    const newPatchLines = newText.split('\n');
    const updatedLines = [...prefix, ...newPatchLines, ...suffix];
    dev.files.set(vuln.region.file, updatedLines.join('\n'));

    // Update region line boundaries
    vuln.region.lastLine = vuln.region.firstLine + newPatchLines.length - 1;

    // Bump patch rev
    const rev = (dev.patchRevs.get(vulnId) || 0) + 1;
    dev.patchRevs.set(vulnId, rev);

    const accepted = matchesAcceptPatterns(newText, vuln.accept);
    this.notifyObjectives();

    return { ok: true, accepted, hint: accepted ? undefined : vuln.hint };
  }

  openSession(deviceId: string): CliSession {
    if (this.sessions.has(deviceId)) {
      return this.sessions.get(deviceId)!;
    }
    const dev = this.devices.get(deviceId);
    if (!dev) throw new Error(`Device ${deviceId} not found`);

    const session = new CliSession(
      dev,
      (src, dst) => this.playerPing(src, dst),
      (src, url) => this.httpRequest(src, url)
    );
    this.sessions.set(deviceId, session);
    return session;
  }

  notifyObjectives(): void {
    if (!this.currentScenario) return;

    const evalResult = evaluateObjectives(
      this.currentScenario.objectives,
      this.devices,
      (s, d) => this.ping(s, d),
      this.reportStates,
      this.httpLogs,
      this.currentScenario.hints,
      this.playerPings
    );

    if (this.onObjectiveUpdated) {
      this.onObjectiveUpdated(evalResult.states);
    }

    if (evalResult.allCompleted) {
      // Fire once per attempt, not on every later command.
      if (!this.missionCompleteNotified) {
        this.missionCompleteNotified = true;
        this.onMissionCompleted?.(this.currentScenario.id);
      }
    } else if (evalResult.hasFailed && this.onMissionFailed) {
      this.onMissionFailed(this.currentScenario.id);
    }
  }

  objectiveStates(): ObjectiveState[] {
    if (!this.currentScenario) return [];
    return evaluateObjectives(
      this.currentScenario.objectives,
      this.devices,
      (s, d) => this.ping(s, d),
      this.reportStates,
      this.httpLogs,
      this.currentScenario.hints,
      this.playerPings
    ).states;
  }

  debriefView(): DebriefView | null {
    if (!this.currentScenario) return null;
    const states = this.objectiveStates();

    const reportAnswersOut: Record<string, any> = {};
    if (this.currentScenario.report && this.currentScenario.report.fields) {
      for (const field of this.currentScenario.report.fields) {
        const obj = this.currentScenario.objectives.find((o) => o.type === 'report' && o.field === field.id);
        const ans = String(obj?.equals || '');
        const evLines: Array<{ source: string; file: string; line: number; text: string }> = [];

        if (field.evidence) {
          for (const ev of field.evidence) {
            const logEntry = this.currentScenario.logs?.find((l) => l.source === ev.source && l.file === ev.file);
            const lineObj = logEntry?.lines[ev.line - 1];
            if (lineObj) {
              evLines.push({
                source: ev.source,
                file: ev.file,
                line: ev.line,
                text: lineObj.text,
              });
            }
          }
        }

        reportAnswersOut[field.id] = {
          answer: ans,
          evidence: evLines,
        };
      }
    }

    return {
      debrief: this.currentScenario.debrief || 'Mission completed successfully!',
      objectives: states,
      reportAnswers: reportAnswersOut,
    };
  }

  exportSnapshot(): SimSnapshot {
    if (!this.currentScenario) {
      throw new Error('Cannot export snapshot without an active scenario.');
    }

    const devices: DeviceSnapshot[] = Array.from(this.devices.values()).map((dev) => ({
      id: dev.id,
      hostname: dev.hostname,
      ip: dev.ip,
      mask: dev.mask,
      gateway: dev.gateway,
      locked: dev.locked,
      enableSecret: dev.enableSecret,
      users: Array.from(dev.users.entries()),
      domainName: dev.domainName,
      hasRsaKey: dev.hasRsaKey,
      vlans: Array.from(dev.vlans.entries()),
      routes: JSON.parse(JSON.stringify(dev.routes)),
      natRules: JSON.parse(JSON.stringify(dev.natRules)),
      acls: JSON.parse(JSON.stringify(dev.acls)),
      ipRouting: dev.ipRouting,
      interfaces: Array.from(dev.interfaces.entries()).map(([k, v]) => [k, JSON.parse(JSON.stringify(v))]),
      files: Array.from(dev.files.entries()),
      vulns: JSON.parse(JSON.stringify(dev.vulns)),
      patchRevs: Array.from(dev.patchRevs.entries()),
    }));

    const cliSessions = Array.from(this.sessions.entries()).map(([deviceId, sess]) => ({
      deviceId,
      mode: sess.mode,
      currentInterface: sess.currentInterface,
      currentVlan: sess.currentVlan,
      history: [...sess.history],
    }));

    return {
      version: 1,
      scenarioId: this.currentScenario.id,
      spareCablesCount: this.spareCablesCount,
      links: JSON.parse(JSON.stringify(this.links)),
      devices,
      reportStates: Array.from(this.reportStates.entries()).map(([k, v]) => [k, JSON.parse(JSON.stringify(v))]),
      httpLogs: JSON.parse(JSON.stringify(this.httpLogs)),
      playerPings: JSON.parse(JSON.stringify(this.playerPings)),
      missionCompleteNotified: this.missionCompleteNotified,
      cliSessions,
    };
  }

  importSnapshot(snapshot: SimSnapshot, scenario: ScenarioDef): { ok: boolean; errors: string[] } {
    if (!snapshot || snapshot.version !== 1 || snapshot.scenarioId !== scenario.id) {
      return { ok: false, errors: ['Snapshot does not match target scenario.'] };
    }

    // 1. Initialize baseline scenario objects cleanly
    this.loadScenario(scenario);

    // 2. Restore links & spare cable count
    this.links = [];
    for (const dev of this.devices.values()) {
      for (const iface of dev.interfaces.values()) {
        iface.peer = null;
      }
    }

    // 3. Restore device configurations, interfaces, files, vulns
    for (const devSnap of snapshot.devices || []) {
      const dev = this.devices.get(devSnap.id);
      if (!dev) continue;

      dev.hostname = devSnap.hostname;
      dev.ip = devSnap.ip;
      dev.mask = devSnap.mask;
      dev.gateway = devSnap.gateway;
      dev.locked = devSnap.locked;
      dev.enableSecret = devSnap.enableSecret || '';
      dev.users = new Map(devSnap.users || []);
      dev.domainName = devSnap.domainName || '';
      dev.hasRsaKey = Boolean(devSnap.hasRsaKey);
      dev.vlans = new Map(devSnap.vlans || []);
      dev.routes = JSON.parse(JSON.stringify(devSnap.routes || []));
      dev.natRules = JSON.parse(JSON.stringify(devSnap.natRules || []));
      dev.acls = JSON.parse(JSON.stringify(devSnap.acls || []));
      dev.ipRouting = devSnap.ipRouting !== undefined ? devSnap.ipRouting : true;

      if (Array.isArray(devSnap.interfaces)) {
        dev.interfaces.clear();
        for (const [ifKey, ifState] of devSnap.interfaces) {
          dev.interfaces.set(ifKey, JSON.parse(JSON.stringify(ifState)));
        }
      }

      if (Array.isArray(devSnap.files)) {
        dev.files = new Map(devSnap.files);
      }
      if (Array.isArray(devSnap.vulns)) {
        dev.vulns = JSON.parse(JSON.stringify(devSnap.vulns));
      }
      if (Array.isArray(devSnap.patchRevs)) {
        dev.patchRevs = new Map(devSnap.patchRevs);
      }
    }

    // 4. Re-apply saved links (overwriting peers cleanly)
    for (const link of snapshot.links || []) {
      this.applyLink(link.a, link.b, link.locked ?? false);
    }
    this.spareCablesCount = snapshot.spareCablesCount;

    // 5. Restore reports, HTTP logs, player pings, and notification flag
    if (Array.isArray(snapshot.reportStates)) {
      this.reportStates = new Map(
        snapshot.reportStates.map(([k, v]) => [k, JSON.parse(JSON.stringify(v))])
      );
    }
    this.httpLogs = JSON.parse(JSON.stringify(snapshot.httpLogs || []));
    this.playerPings = JSON.parse(JSON.stringify(snapshot.playerPings || []));
    this.missionCompleteNotified = Boolean(snapshot.missionCompleteNotified);

    // 6. Restore CLI sessions (mode, sub-context, and command history)
    this.sessions.clear();
    for (const sessSnap of snapshot.cliSessions || []) {
      if (!this.devices.has(sessSnap.deviceId)) continue;
      const sess = this.openSession(sessSnap.deviceId);
      sess.mode = sessSnap.mode;
      sess.currentInterface = sessSnap.currentInterface;
      sess.currentVlan = sessSnap.currentVlan;
      sess.history = [...(sessSnap.history || [])];
      sess.historyIndex = sess.history.length;
    }

    this.resolver.refreshAllOperStatuses();
    this.notifyObjectives();

    return { ok: true, errors: [] };
  }
}
