import { describe, it, expect } from 'vitest';
import { NetworkSim } from '../src/sim/core/network_sim';
import {
  SCENARIO_M1,
  SCENARIO_M2,
  SCENARIO_M3,
} from '../src/sim/scenario/scenarios';
import { NetSecDatabase } from '../server/db';
import { CliMode } from '../src/sim/types';

function run(sim: NetworkSim, deviceId: string, commands: string[]) {
  const sess = sim.openSession(deviceId);
  return commands.map((c) => {
    const res = sess.execute(c);
    sim.notifyObjectives();
    return res;
  });
}

describe('NetworkSim snapshot export/import', () => {
  it('restores M1 cabling, router subinterfaces, switch VLANs, and CLI mode/history', () => {
    const sim = new NetworkSim();
    sim.loadScenario(SCENARIO_M1);

    expect(sim.connectLink('S1:FastEthernet0/2', 'PC-B:Ethernet0').ok).toBe(true);
    run(sim, 'R1', [
      'enable',
      'configure terminal',
      'interface gi0/0',
      'no shutdown',
      'exit',
      'interface gi0/0.10',
      'encapsulation dot1Q 10',
      'ip address 192.168.10.1 255.255.255.0',
    ]);

    const snapshot = sim.exportSnapshot();
    expect(snapshot.spareCablesCount).toBe(0);

    const restoredSim = new NetworkSim();
    const res = restoredSim.importSnapshot(snapshot, SCENARIO_M1);
    expect(res.ok).toBe(true);
    expect(restoredSim.spareCablesCount).toBe(0);
    expect(restoredSim.links.some((l) => l.a === 'S1:FastEthernet0/2' && l.b === 'PC-B:Ethernet0')).toBe(true);

    const r1 = restoredSim.devices.get('R1')!;
    const sub10 = r1.getInterface('GigabitEthernet0/0.10');
    expect(sub10?.ip).toBe('192.168.10.1');
    expect(sub10?.dot1qVlan).toBe(10);

    const r1Session = restoredSim.openSession('R1');
    expect(r1Session.mode).toBe(CliMode.INTERFACE_CONFIG);
    expect(r1Session.currentInterface).toBe('GigabitEthernet0/0.10');
    expect(r1Session.history).toContain('encapsulation dot1Q 10');
  });

  it('restores M2 partial incident report progress and remaining attempts', () => {
    const sim = new NetworkSim();
    sim.loadScenario(SCENARIO_M2);
    expect(sim.submitReport('attacker_ip', '203.0.113.45').correct).toBe(true);
    expect(sim.submitReport('compromised_user', 'wrong_user').correct).toBe(false);

    const snapshot = sim.exportSnapshot();

    const restoredSim = new NetworkSim();
    restoredSim.importSnapshot(snapshot, SCENARIO_M2);
    expect(restoredSim.reportStates.get('attacker_ip')?.solved).toBe(true);
    expect(restoredSim.reportStates.get('attacker_ip')?.lastValue).toBe('203.0.113.45');
    expect(restoredSim.reportStates.get('compromised_user')?.attemptsLeft).toBe(2);
    expect(restoredSim.objectiveStates().find((o) => o.id === 'report_attacker_ip')?.passed).toBe(true);
    expect(restoredSim.objectiveStates().find((o) => o.id === 'report_compromised_user')?.passed).toBe(false);
  });

  it('restores M3 patched code, line boundaries, and http exploit logs', () => {
    const sim = new NetworkSim();
    sim.loadScenario(SCENARIO_M3);
    run(sim, 'PC-1', [
      `curl "http://10.0.10.5/login.php?user=' OR '1'='1"`,
      `curl "http://10.0.10.5/search.php?q=<script>alert(1)</script>"`,
    ]);
    sim.writePatch(
      'WEB1',
      'sqli_login',
      `  $res = $db->prepare("SELECT * FROM users WHERE name = ?");\n  $res->execute([$user]);`
    );

    const snapshot = sim.exportSnapshot();
    const restoredSim = new NetworkSim();
    restoredSim.importSnapshot(snapshot, SCENARIO_M3);

    const states = restoredSim.objectiveStates();
    expect(states.find((o) => o.id === 'test_sqli_vuln')?.passed).toBe(true);
    expect(states.find((o) => o.id === 'test_xss_vuln')?.passed).toBe(true);
    expect(states.find((o) => o.id === 'patch_sqli')?.passed).toBe(true);
    expect(restoredSim.readFile('WEB1', '/var/www/login.php')).toContain('$db->prepare');
  });
});

describe('NetSecDatabase SQLite persistence', () => {
  it('persists campaign progress and saved sessions, and supports restart without losing progress', () => {
    const db = new NetSecDatabase(':memory:');
    try {
      const initial = db.getCampaignProgress();
      expect(initial.completedMissionIds).toEqual([]);
      expect(initial.activeSessionId).toBeNull();

      const sim = new NetworkSim();
      sim.loadScenario(SCENARIO_M1);
      sim.connectLink('S1:FastEthernet0/2', 'PC-B:Ethernet0');
      const snapshot = sim.exportSnapshot();

      const saved = db.upsertSession({
        id: 'slot-1',
        name: 'M1 Checkpoint',
        scenarioId: SCENARIO_M1.id,
        scenarioTitle: SCENARIO_M1.title,
        scenarioSequence: SCENARIO_M1.sequence,
        objectivesPassed: 1,
        objectivesTotal: 7,
        isAutosave: false,
        snapshot,
        setActive: true,
      });

      expect(saved.id).toBe('slot-1');
      db.updateCampaignProgress(['m0_orientation']);

      const progress = db.getCampaignProgress();
      expect(progress.completedMissionIds).toEqual(['m0_orientation']);
      expect(progress.activeSessionId).toBe('slot-1');

      const sessions = db.listSessions();
      expect(sessions).toHaveLength(1);
      expect(sessions[0].name).toBe('M1 Checkpoint');

      // Starting mission again clears active pointer but keeps solved missions & manual save slots
      db.setActiveSessionId(null);
      const afterRestart = db.getCampaignProgress();
      expect(afterRestart.activeSessionId).toBeNull();
      expect(afterRestart.completedMissionIds).toEqual(['m0_orientation']);
      expect(db.getSession('slot-1')?.snapshot).toEqual(snapshot);

      // Deleting session removes it cleanly
      expect(db.deleteSession('slot-1')).toBe(true);
      expect(db.listSessions()).toHaveLength(0);
    } finally {
      db.close();
    }
  });
});
