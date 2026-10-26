import { ScenarioDef, FailReason } from '../types';

export const SCENARIO_TUTORIAL: ScenarioDef = {
  schema_version: 1,
  id: 'm0_orientation',
  sequence: 0,
  title: 'Orientation: First Connection',
  briefing:
    'Welcome to the server room. This short tutorial teaches the core loop: use camera presets to find equipment, click a device to open its console, run a command, and read the objective panel for your next step. Start in the PC-A console, then ping PC-B.',
  devices: [
    {
      id: 'PC-A',
      type: 'host',
      model: 'pc',
      hostname: 'PC-A',
      desk: 'desk_1',
      config: { ip: '192.168.1.10', mask: '255.255.255.0', gateway: '192.168.1.1' },
    },
    {
      id: 'PC-B',
      type: 'host',
      model: 'pc',
      hostname: 'PC-B',
      desk: 'desk_2',
      config: { ip: '192.168.1.20', mask: '255.255.255.0', gateway: '192.168.1.1' },
    },
  ],
  links: [
    { a: 'PC-A:Eth0', b: 'PC-B:Eth0', locked: true },
  ],
  spare_cables: 0,
  objectives: [
    {
      id: 'tutorial_ping',
      type: 'ping',
      from: 'PC-A',
      to_ip: '192.168.1.20',
      to_device: 'PC-B',
      description: 'From PC-A, ping PC-B at 192.168.1.20',
      guidance: {
        targetDevice: 'PC-A',
        actionType: 'terminal',
        summary: 'Open the PC-A terminal and run one ping.',
        steps: [
          'Use the Desk 1 camera angle to locate PC-A, or use the already-open PC-A console.',
          'Click inside the terminal input at the bottom of the console.',
          'Type ping 192.168.1.20 and press Enter.',
          'A successful reply marks the tutorial complete. The objective panel on the left tracks your progress.',
        ],
        suggestedCommands: ['ping 192.168.1.20'],
        explanation: 'The 3D room is the workspace, while the terminal and objective panel are your primary tools. You do not need to interact with every rack object—only the highlighted device or port required by the active objective.',
      },
    },
  ],
  hints: [
    { reason: FailReason.HOST_UNREACHABLE, text: 'This tutorial is already wired. Open the PC-A console and run ping 192.168.1.20.' },
  ],
  debrief: 'You have learned the core interaction loop: choose a camera angle, identify the named device, open its console, perform the requested action, and use the objective panel to confirm progress. Mission 1 adds cabling and switch/router configuration.',
};

export const SCENARIO_M1: ScenarioDef = {
  schema_version: 1,
  id: 'm1_vlan_ping',
  sequence: 1,
  title: 'Day One: Get Them Talking',
  briefing:
    "Accounting (PC-A) and Sales (PC-B) can't reach each other. The router is racked and cabled to the switch. Cable up PC-B, configure VLANs and a Router-on-a-Stick trunk, and make PC-A ping PC-B.",
  devices: [
    {
      id: 'R1',
      type: 'router',
      model: 'router_2port',
      hostname: 'Router',
      rack: 'rack_a',
      slot: 1,
      config: {},
    },
    {
      id: 'S1',
      type: 'switch',
      model: 'switch_24',
      hostname: 'Switch',
      rack: 'rack_a',
      slot: 3,
      config: {
        vlans: { 10: 'ACCOUNTING' },
        interfaces: {
          'Fa0/1': { mode: 'access', accessVlan: 10 },
        },
      },
    },
    {
      id: 'PC-A',
      type: 'host',
      model: 'pc',
      hostname: 'PC-A',
      desk: 'desk_1',
      config: {
        ip: '192.168.10.10',
        mask: '255.255.255.0',
        gateway: '192.168.10.1',
        locked: true,
      },
    },
    {
      id: 'PC-B',
      type: 'host',
      model: 'pc',
      hostname: 'PC-B',
      desk: 'desk_2',
      config: {
        ip: '192.168.20.10',
        mask: '255.255.255.0',
        gateway: '192.168.20.1',
        locked: true,
      },
    },
  ],
  links: [
    { a: 'R1:Gi0/0', b: 'S1:Gi0/1', locked: true },
    { a: 'S1:Fa0/1', b: 'PC-A:Eth0', locked: true },
  ],
  spare_cables: 1,
  reserved_ports: ['R1:Gi0/1'],
  objectives: [
    {
      id: 'cable_pc_b',
      type: 'config',
      device: 'S1',
      path: ['interfaces', 'Fa0/2', 'peer'],
      equals: 'PC-B:Eth0',
      description: 'Connect spare cable from S1 Fa0/2 to PC-B Eth0',
    },
    {
      id: 'vlan20_port',
      type: 'config',
      device: 'S1',
      path: ['interfaces', 'Fa0/2', 'accessVlan'],
      equals: 20,
      description: 'Configure S1 Fa0/2 in VLAN 20 (Sales)',
    },
    {
      id: 'trunk',
      type: 'config',
      device: 'S1',
      path: ['interfaces', 'Gi0/1', 'mode'],
      equals: 'trunk',
      description: 'Configure S1 Gi0/1 as an 802.1Q trunk port',
    },
    {
      id: 'r1_no_shut',
      type: 'config',
      device: 'R1',
      path: ['interfaces', 'Gi0/0', 'adminUp'],
      equals: true,
      description: 'Enable R1 physical interface (no shutdown on Gi0/0)',
    },
    {
      id: 'sub10',
      type: 'config',
      device: 'R1',
      path: ['interfaces', 'Gi0/0.10'],
      equals: { dot1qVlan: 10, ip: '192.168.10.1', mask: '255.255.255.0' },
      description: 'Configure R1 Gi0/0.10: encapsulation dot1Q 10, IP 192.168.10.1/24',
    },
    {
      id: 'sub20',
      type: 'config',
      device: 'R1',
      path: ['interfaces', 'Gi0/0.20'],
      equals: { dot1qVlan: 20, ip: '192.168.20.1', mask: '255.255.255.0' },
      description: 'Configure R1 Gi0/0.20: encapsulation dot1Q 20, IP 192.168.20.1/24',
    },
    {
      id: 'parent_noip',
      type: 'config',
      device: 'R1',
      path: ['interfaces', 'Gi0/0', 'ip'],
      equals: null,
      description: 'Ensure Gi0/0 parent interface has no IP address assigned',
    },
    {
      id: 'ping_ab',
      type: 'ping',
      from: 'PC-A',
      to_ip: '192.168.20.10',
      to_device: 'PC-B',
      via: 'R1',
      description: 'Verify PC-A can ping PC-B (192.168.20.10) through router R1',
    },
  ],
  hints: [
    { reason: FailReason.NO_LINK, text: "PC-B isn't cabled to anything yet. Grab a cable from your inventory and plug it into S1 Fa0/2." },
    { reason: FailReason.ADMIN_DOWN, text: "The physical interface Gi0/0 on R1 is shut down. Enter config-if on R1 and execute 'no shutdown'." },
    { reason: FailReason.NO_GATEWAY, text: 'Hosts in different subnets require a default gateway to communicate.' },
    { reason: FailReason.VLAN_MISMATCH, text: "Check which VLAN each switch port is in, and verify that S1 Gi0/1 is set to 'switchport mode trunk'." },
    { reason: FailReason.NO_ROUTE, text: 'R1 cannot find a route for the subnet. Make sure subinterfaces Gi0/0.10 and Gi0/0.20 are configured.' },
  ],
  debrief:
    'Outstanding work! You set up a classic Router-on-a-Stick (ROAS) architecture. Subinterfaces Gi0/0.10 and Gi0/0.20 act as default gateways for VLANs 10 and 20, routing frames tagged with 802.1Q across the Gi0/1 trunk link.',
  solution: [
    { link: { a: 'S1:Fa0/2', b: 'PC-B:Eth0' } },
    {
      device: 'S1',
      commands: [
        'enable',
        'conf t',
        'vlan 20',
        'name SALES',
        'exit',
        'interface fa0/2',
        'switchport mode access',
        'switchport access vlan 20',
        'exit',
        'interface gi0/1',
        'switchport mode trunk',
        'end',
      ],
    },
    {
      device: 'R1',
      commands: [
        'enable',
        'conf t',
        'interface gi0/0',
        'no shutdown',
        'exit',
        'interface gi0/0.10',
        'encapsulation dot1Q 10',
        'ip address 192.168.10.1 255.255.255.0',
        'exit',
        'interface gi0/0.20',
        'encapsulation dot1Q 20',
        'ip address 192.168.20.1 255.255.255.0',
        'end',
      ],
    },
  ],
};

export const SCENARIO_M2: ScenarioDef = {
  schema_version: 1,
  id: 'm2_log_triage',
  sequence: 2,
  title: 'Who Knocked?',
  briefing:
    'Security Operations alert: Suspicious unauthorized login activity detected on production server WEB1. Investigate the system authentication logs, correlate threat intel on the SOC monitor, and file an incident triage report.',
  devices: [
    {
      id: 'WEB1',
      type: 'server',
      model: 'server',
      hostname: 'web1',
      rack: 'rack_a',
      slot: 5,
      config: {
        ip: '10.0.10.5',
        mask: '255.255.255.0',
        gateway: '10.0.10.1',
      },
    },
    {
      id: 'S1',
      type: 'switch',
      model: 'switch_24',
      hostname: 'Switch',
      rack: 'rack_a',
      slot: 3,
      config: {
        vlans: { 10: 'DMZ' },
        interfaces: {
          'Fa0/1': { mode: 'access', accessVlan: 10 },
          'Fa0/5': { mode: 'access', accessVlan: 10 },
        },
      },
    },
    {
      id: 'SOC-PC',
      type: 'host',
      model: 'pc',
      hostname: 'SOC-PC',
      desk: 'desk_1',
      config: {
        ip: '10.0.10.50',
        mask: '255.255.255.0',
        gateway: '10.0.10.1',
      },
    },
  ],
  links: [
    { a: 'S1:Fa0/1', b: 'SOC-PC:Eth0', locked: true },
    { a: 'S1:Fa0/5', b: 'WEB1:Eth0', locked: true },
  ],
  spare_cables: 0,
  logs: [
    {
      source: 'WEB1',
      file: '/var/log/auth.log',
      lines: [
        { t: '2026-03-14T01:45:10Z', text: 'systemd[1]: Started OpenSSH server daemon.' },
        { t: '2026-03-14T01:52:03Z', text: 'sshd[702]: Accepted publickey for admin from 10.0.10.50 port 54102 ssh2' },
        { t: '2026-03-14T01:52:15Z', text: 'sudo[708]: admin : TTY=pts/0 ; PWD=/home/admin ; USER=root ; COMMAND=/usr/bin/apt update' },
        { t: '2026-03-14T02:05:12Z', text: 'sshd[750]: Received disconnect from 198.51.100.12 port 41100: 11: Normal Shutdown', src_ip: '198.51.100.12', geo: 'CN' },
        { t: '2026-03-14T02:11:05Z', text: 'sshd[811]: Failed password for invalid user root from 203.0.113.45 port 51122 ssh2', src_ip: '203.0.113.45', geo: 'NL' },
        { t: '2026-03-14T02:11:07Z', text: 'sshd[813]: Failed password for invalid user admin from 203.0.113.45 port 51124 ssh2', src_ip: '203.0.113.45', geo: 'NL' },
        { t: '2026-03-14T02:11:10Z', text: 'sshd[815]: Failed password for invalid user test from 203.0.113.45 port 51126 ssh2', src_ip: '203.0.113.45', geo: 'NL' },
        { t: '2026-03-14T02:11:12Z', text: 'sshd[817]: Failed password for invalid user oracle from 203.0.113.45 port 51128 ssh2', src_ip: '203.0.113.45', geo: 'NL' },
        { t: '2026-03-14T02:11:15Z', text: 'sshd[820]: Failed password for invalid user postgres from 203.0.113.45 port 51130 ssh2', src_ip: '203.0.113.45', geo: 'NL' },
        { t: '2026-03-14T02:11:18Z', text: 'sshd[823]: Failed password for invalid user ubuntu from 203.0.113.45 port 51132 ssh2', src_ip: '203.0.113.45', geo: 'NL' },
        { t: '2026-03-14T02:11:21Z', text: 'sshd[826]: Failed password for invalid user git from 203.0.113.45 port 51134 ssh2', src_ip: '203.0.113.45', geo: 'NL' },
        { t: '2026-03-14T02:11:25Z', text: 'sshd[829]: Failed password for invalid user backup from 203.0.113.45 port 51136 ssh2', src_ip: '203.0.113.45', geo: 'NL' },
        { t: '2026-03-14T02:11:29Z', text: 'sshd[832]: Failed password for deploy from 203.0.113.45 port 51138 ssh2', src_ip: '203.0.113.45', geo: 'NL' },
        { t: '2026-03-14T02:11:32Z', text: 'sshd[835]: Failed password for deploy from 203.0.113.45 port 51140 ssh2', src_ip: '203.0.113.45', geo: 'NL' },
        { t: '2026-03-14T02:11:36Z', text: 'sshd[840]: Accepted password for deploy from 203.0.113.45 port 51142 ssh2', src_ip: '203.0.113.45', geo: 'NL' },
        { t: '2026-03-14T02:11:37Z', text: 'systemd-logind[412]: New session 42 of user deploy.', src_ip: '203.0.113.45', geo: 'NL' },
        { t: '2026-03-14T02:15:01Z', text: 'CRON[901]: (root) CMD (/usr/local/bin/backup-sync.sh >/dev/null 2>&1)' },
        { t: '2026-03-14T02:22:40Z', text: 'sshd[950]: Connection closed by authenticating user root 185.220.101.5 port 49201 [preauth]', src_ip: '185.220.101.5', geo: 'RU' },
      ],
    },
  ],
  report: {
    max_attempts: 3,
    fields: [
      {
        id: 'attacker_ip',
        label: 'Attacker IP Address',
        kind: 'ipv4',
        evidence: [{ source: 'WEB1', file: '/var/log/auth.log', line: 15 }],
      },
      {
        id: 'attack_type',
        label: 'Attack Vector',
        kind: 'choice',
        options: ['Brute force', 'SQL injection', 'Port scan', 'Phishing'],
        evidence: [{ source: 'WEB1', file: '/var/log/auth.log', line: 5 }],
      },
      {
        id: 'compromised_user',
        label: 'Compromised User Account',
        kind: 'text',
        evidence: [{ source: 'WEB1', file: '/var/log/auth.log', line: 15 }],
      },
    ],
  },
  objectives: [
    {
      id: 'report_attacker_ip',
      type: 'report',
      field: 'attacker_ip',
      equals: '203.0.113.45',
      description: 'Identify and submit the external Attacker IP address',
    },
    {
      id: 'report_attack_type',
      type: 'report',
      field: 'attack_type',
      equals: 'Brute force',
      description: 'Classify the attack vector (Brute force dictionary attack)',
    },
    {
      id: 'report_compromised_user',
      type: 'report',
      field: 'compromised_user',
      equals: 'deploy',
      description: 'Determine which user account credentials were breached',
    },
  ],
  debrief:
    "Incident Report accepted! You spotted the sustained SSH dictionary attack from 203.0.113.45 (Netherlands) testing common service usernames before successfully compromising 'deploy' via password authentication. Recommended hardening: disable password auth in /etc/ssh/sshd_config (PasswordAuthentication no), enforce public key auth, and install Fail2ban.",
  solution: [
    { field: 'attacker_ip', value: '203.0.113.45' },
    { field: 'attack_type', value: 'Brute force' },
    { field: 'compromised_user', value: 'deploy' },
  ],
};

export const SCENARIO_M3: ScenarioDef = {
  schema_version: 1,
  id: 'm3_web_patch',
  sequence: 3,
  title: 'Patch Tuesday',
  briefing:
    'Security auditing discovered two critical flaws on WEB1: an unauthenticated SQL Injection in login.php and Reflected XSS in search.php. Prove each exploit with curl from your PC, patch the code in the editor, and verify the attack is neutralized.',
  devices: [
    {
      id: 'WEB1',
      type: 'server',
      model: 'server',
      hostname: 'web1',
      rack: 'rack_a',
      slot: 5,
      config: {
        ip: '10.0.10.5',
        mask: '255.255.255.0',
        gateway: '10.0.10.1',
        files: {
          '/var/www/login.php': `<?php
function check_login($db) {
  $user = $_POST['user'];
  $q = "SELECT * FROM users WHERE name = '" . $user . "'";
  $res = $db->query($q);
  return $res->fetch();
}
`,
          '/var/www/search.php': `<?php
function handle_search() {
  $q = $_GET['q'];
  echo "<div class='results'>Results for: " . $q . "</div>";
}
`,
        },
        services: [{ id: 'http', port: 80, root: '/var/www' }],
        vulns: [
          {
            id: 'sqli_login',
            kind: 'sqli',
            service: 'http',
            route: '/login.php',
            region: {
              file: '/var/www/login.php',
              firstLine: 4,
              lastLine: 5,
            },
            accept: [
              `\\$res=\\$db->prepare\\((["'])SELECT \\* FROM users WHERE name = \\?\\1\\);\\$res->execute\\((\\[\\$user\\]|array\\(\\$user\\))\\);`,
              `\\$stmt=\\$db->prepare\\((["'])SELECT \\* FROM users WHERE name = \\?\\1\\);\\$stmt->execute\\((\\[\\$user\\]|array\\(\\$user\\))\\);\\$res=\\$stmt;`,
            ],
            hint: 'Use a prepared statement with a parameter placeholder: $res = $db->prepare("SELECT * FROM users WHERE name = ?"); $res->execute([$user]);',
            exploit: {
              param: 'user',
              payload: "' OR '1'='1",
              vulnerableBody: 'HTTP/1.1 200 OK\n\n<h1>Welcome, admin!</h1><p>Authentication bypass successful.</p>',
              patchedBody: 'HTTP/1.1 401 Unauthorized\n\n<h1>Login failed.</h1><p>Invalid credentials.</p>',
            },
          },
          {
            id: 'xss_search',
            kind: 'xss',
            service: 'http',
            route: '/search.php',
            region: {
              file: '/var/www/search.php',
              firstLine: 4,
              lastLine: 4,
            },
            accept: [
              `echo "<div class='results'>Results for: "\\.htmlspecialchars\\(\\$q,ENT_QUOTES,['"]UTF-8['"]\\)\\."</div>";`,
              `echo "<div class='results'>Results for: "\\.htmlspecialchars\\(\\$q\\)\\."</div>";`,
              `\\$safe=htmlspecialchars\\(\\$q\\);echo "<div class='results'>Results for: "\\.\\$safe\\."</div>";`,
            ],
            hint: 'Sanitize output using htmlspecialchars: echo "<div class=\'results\'>Results for: " . htmlspecialchars($q, ENT_QUOTES, \'UTF-8\') . "</div>";',
            exploit: {
              param: 'q',
              payload: '<script>alert(1)</script>',
              vulnerableBody: 'HTTP/1.1 200 OK\n\n<div class=\'results\'>Results for: <script>alert(1)</script></div>',
              patchedBody: 'HTTP/1.1 200 OK\n\n<div class=\'results\'>Results for: &lt;script&gt;alert(1)&lt;/script&gt;</div>',
            },
          },
        ],
      },
    },
    {
      id: 'S1',
      type: 'switch',
      model: 'switch_24',
      hostname: 'Switch',
      rack: 'rack_a',
      slot: 3,
      config: {
        vlans: { 10: 'DMZ' },
        interfaces: {
          'Fa0/1': { mode: 'access', accessVlan: 10 },
          'Fa0/5': { mode: 'access', accessVlan: 10 },
        },
      },
    },
    {
      id: 'PC-1',
      type: 'host',
      model: 'pc',
      hostname: 'PC-1',
      desk: 'desk_1',
      config: {
        ip: '10.0.10.50',
        mask: '255.255.255.0',
        gateway: '10.0.10.1',
      },
    },
  ],
  links: [
    { a: 'S1:Fa0/1', b: 'PC-1:Eth0', locked: true },
    { a: 'S1:Fa0/5', b: 'WEB1:Eth0', locked: true },
  ],
  spare_cables: 0,
  objectives: [
    {
      id: 'test_sqli_vuln',
      type: 'exploit_test',
      from: 'PC-1',
      device: 'WEB1',
      vuln: 'sqli_login',
      expect: 'vulnerable',
      order: 1,
      description: 'Execute SQLi test curl "http://10.0.10.5/login.php?user=\' OR \'1\'=\'1" on PC-1 to confirm vulnerability',
    },
    {
      id: 'patch_sqli',
      type: 'vuln_patched',
      device: 'WEB1',
      vuln: 'sqli_login',
      order: 2,
      description: 'Patch login.php using PDO prepared statements in the code editor',
    },
    {
      id: 'test_sqli_patched',
      type: 'exploit_test',
      from: 'PC-1',
      device: 'WEB1',
      vuln: 'sqli_login',
      expect: 'patched',
      order: 3,
      description: 'Re-run SQLi test curl on PC-1 to verify attack fails (401 Unauthorized)',
    },
    {
      id: 'test_xss_vuln',
      type: 'exploit_test',
      from: 'PC-1',
      device: 'WEB1',
      vuln: 'xss_search',
      expect: 'vulnerable',
      order: 1,
      description: 'Execute XSS test curl "http://10.0.10.5/search.php?q=<script>alert(1)</script>" on PC-1',
    },
    {
      id: 'patch_xss',
      type: 'vuln_patched',
      device: 'WEB1',
      vuln: 'xss_search',
      order: 2,
      description: 'Patch search.php with htmlspecialchars() to escape user output',
    },
    {
      id: 'test_xss_patched',
      type: 'exploit_test',
      from: 'PC-1',
      device: 'WEB1',
      vuln: 'xss_search',
      expect: 'patched',
      order: 3,
      description: 'Re-run XSS test curl on PC-1 to verify HTML special characters are escaped',
    },
  ],
  debrief:
    'Security patches deployed successfully! Parameterized queries (prepared statements) neutralize SQL injection by separating code from data, completely neutralizing quotes and SQL syntax hijacking. htmlspecialchars() neutralizes Reflected XSS by converting sensitive characters (<, >, &, \', ") to HTML entities before output.',
};

export const ALL_SCENARIOS: ScenarioDef[] = [SCENARIO_TUTORIAL, SCENARIO_M1, SCENARIO_M2, SCENARIO_M3];
