import { describe, it, expect } from 'vitest';
import { NetworkSim } from '../src/sim/core/network_sim';
import {
  SCENARIO_TUTORIAL,
  SCENARIO_M1,
  SCENARIO_M2,
  SCENARIO_M3,
} from '../src/sim/scenario/scenarios';

function allPassed(sim: NetworkSim) {
  return sim.objectiveStates().every((s) => s.passed);
}

function failing(sim: NetworkSim) {
  return sim
    .objectiveStates()
    .filter((s) => !s.passed)
    .map((s) => s.id);
}

function run(sim: NetworkSim, deviceId: string, commands: string[]) {
  const sess = sim.openSession(deviceId);
  return commands.map((c) => {
    const res = sess.execute(c);
    sim.notifyObjectives();
    return res;
  });
}

describe('M0 orientation', () => {
  it('draws the pre-wired PC-A <-> PC-B cable with the port ids the 3D room uses', () => {
    const sim = new NetworkSim();
    sim.loadScenario(SCENARIO_TUTORIAL);
    // The 3D room identifies ports by their full interface names.
    expect(sim.links.map((l) => [l.a, l.b])).toEqual([['PC-A:Ethernet0', 'PC-B:Ethernet0']]);
  });

  it('is not complete until the player runs the ping, then completes', () => {
    const sim = new NetworkSim();
    let completed = 0;
    sim.onMissionCompleted = () => completed++;
    sim.loadScenario(SCENARIO_TUTORIAL);
    expect(allPassed(sim)).toBe(false);

    const [res] = run(sim, 'PC-A', ['ping 192.168.1.20']);
    expect(res.ok).toBe(true);
    expect(allPassed(sim)).toBe(true);
    expect(completed).toBe(1);

    // Further commands must not re-fire completion.
    run(sim, 'PC-A', ['ipconfig']);
    expect(completed).toBe(1);
  });

  it('pre-wired locked cable cannot be unplugged', () => {
    const sim = new NetworkSim();
    sim.loadScenario(SCENARIO_TUTORIAL);
    const res = sim.disconnectLink('PC-B:Ethernet0');
    expect(res.ok).toBe(false);
    expect(res.reason).toMatch(/locked/);
  });
});

describe('M1 VLANs + router-on-a-stick', () => {
  it('accepts the spare cable between S1 Fa0/2 and PC-B using 3D marker ids', () => {
    const sim = new NetworkSim();
    sim.loadScenario(SCENARIO_M1);
    // Exactly the ids the 3D room passes on click.
    const res = sim.connectLink('S1:FastEthernet0/2', 'PC-B:Ethernet0');
    expect(res).toEqual({ ok: true });
    const cable = sim.objectiveStates().find((s) => s.id === 'cable_pc_b');
    expect(cable?.passed).toBe(true);
  });

  it('accepts the cable in either click order', () => {
    const sim = new NetworkSim();
    sim.loadScenario(SCENARIO_M1);
    expect(sim.connectLink('PC-B:Ethernet0', 'S1:FastEthernet0/2').ok).toBe(true);
    expect(sim.objectiveStates().find((s) => s.id === 'cable_pc_b')?.passed).toBe(true);
  });

  it('blocks the reserved R1 Gi0/1 port regardless of name style', () => {
    const sim = new NetworkSim();
    sim.loadScenario(SCENARIO_M1);
    const res = sim.connectLink('R1:GigabitEthernet0/1', 'PC-B:Ethernet0');
    expect(res.ok).toBe(false);
    expect(res.reason).toMatch(/reserved/);
  });

  it('can be completed with the scenario solution', () => {
    const sim = new NetworkSim();
    sim.loadScenario(SCENARIO_M1);
    expect(sim.ping('PC-A', '192.168.20.10').success).toBe(false);

    for (const step of SCENARIO_M1.solution!) {
      if (step.link) {
        expect(sim.connectLink(step.link.a, step.link.b).ok).toBe(true);
      } else if (step.device && step.commands) {
        const results = run(sim, step.device, step.commands);
        for (const r of results) expect(r.ok, r.output).toBe(true);
      }
    }

    expect(failing(sim)).toEqual([]);
    const ping = sim.ping('PC-A', '192.168.20.10');
    expect(ping.success).toBe(true);
    expect(ping.hops).toContain('R1');
  });

  it('unplugging returns the cable to inventory and breaks the objective', () => {
    const sim = new NetworkSim();
    sim.loadScenario(SCENARIO_M1);
    sim.connectLink('S1:FastEthernet0/2', 'PC-B:Ethernet0');
    expect(sim.spareCablesCount).toBe(0);
    expect(sim.disconnectLink('PC-B:Ethernet0').ok).toBe(true);
    expect(sim.spareCablesCount).toBe(1);
    expect(sim.objectiveStates().find((s) => s.id === 'cable_pc_b')?.passed).toBe(false);
  });
});

describe('M2 log triage', () => {
  it('can be completed by filing the report', () => {
    const sim = new NetworkSim();
    sim.loadScenario(SCENARIO_M2);
    expect(sim.submitReport('attacker_ip', '203.0.113.45').correct).toBe(true);
    expect(sim.submitReport('attack_type', 'Brute force').correct).toBe(true);
    expect(sim.submitReport('compromised_user', 'deploy').correct).toBe(true);
    expect(failing(sim)).toEqual([]);
  });

  it('SOC-PC can reach WEB1', () => {
    const sim = new NetworkSim();
    sim.loadScenario(SCENARIO_M2);
    expect(sim.ping('SOC-PC', '10.0.10.5').success).toBe(true);
  });
});

describe('M3 web patch', () => {
  const SQLI = `curl "http://10.0.10.5/login.php?user=' OR '1'='1"`;
  const XSS = `curl "http://10.0.10.5/search.php?q=<script>alert(1)</script>"`;

  function play(sim: NetworkSim) {
    let [r] = run(sim, 'PC-1', [SQLI]);
    expect(r.output).toContain('Authentication bypass');
    [r] = run(sim, 'PC-1', [XSS]);
    expect(r.output).toContain('<script>alert(1)</script>');

    const sqliPatch = sim.writePatch(
      'WEB1',
      'sqli_login',
      `  $res = $db->prepare("SELECT * FROM users WHERE name = ?");\n  $res->execute([$user]);`
    );
    expect(sqliPatch.accepted).toBe(true);
    const xssPatch = sim.writePatch(
      'WEB1',
      'xss_search',
      `  echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`
    );
    expect(xssPatch.accepted).toBe(true);

    [r] = run(sim, 'PC-1', [SQLI]);
    expect(r.output).toContain('401');
    [r] = run(sim, 'PC-1', [XSS]);
    expect(r.output).toContain('&lt;script&gt;');
  }

  it('can be completed: exploit, patch, re-test', () => {
    const sim = new NetworkSim();
    sim.loadScenario(SCENARIO_M3);
    play(sim);
    expect(failing(sim)).toEqual([]);
  });

  it('restarting the mission resets patches (scenario data is not mutated)', () => {
    const sim = new NetworkSim();
    sim.loadScenario(SCENARIO_M3);
    // A 3-line patch changes the region length.
    sim.writePatch('WEB1', 'sqli_login', 'a\nb\nc');
    sim.loadScenario(SCENARIO_M3);
    const vuln = sim.devices.get('WEB1')!.vulns.find((v) => v.id === 'sqli_login')!;
    expect(vuln.region.lastLine).toBe(5);
    play(sim);
    expect(failing(sim)).toEqual([]);
  });

  it('curl with a stray % does not crash', () => {
    const sim = new NetworkSim();
    sim.loadScenario(SCENARIO_M3);
    expect(() => run(sim, 'PC-1', ['curl http://10.0.10.5/login.php?user=%E0%A4%A'])).not.toThrow();
  });
});
