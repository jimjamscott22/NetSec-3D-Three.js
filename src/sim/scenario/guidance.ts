import { StepGuidance } from '../types';

export const OBJECTIVE_GUIDANCE_MAP: Record<string, StepGuidance> = {
  // --- MISSION 1: Day One: Get Them Talking ---
  cable_pc_b: {
    targetDevice: 'PC-B',
    actionType: 'cable',
    summary: 'Cable PC-B on Desk 2 to switch S1 port FastEthernet0/2.',
    steps: [
      'Look at Switch S1 in Rack A (slot 3) or click camera preset "Rack A (Gear)".',
      'Click on free port socket S1:Fa0/2 (the second FastEthernet port from the left).',
      'You are now holding an Ethernet cable from S1:Fa0/2 (see status banner).',
      'Turn towards Desk 2 and click PC-B:Eth0 (or click the PC-B tower).',
      'The cable will connect and appear in 3D. The port LED will turn amber, awaiting VLAN configuration.',
    ],
    suggestedCommands: ['Click S1:Fa0/2 ➜ Click PC-B:Eth0'],
    explanation:
      'PC-B was completely uncabled. Establishing physical Layer 1 connectivity to switch S1 is the first step before configuring Layer 2 VLANs.',
  },

  vlan20_port: {
    targetDevice: 'S1',
    actionType: 'terminal',
    summary: 'Create VLAN 20 (SALES) on S1 and assign Fa0/2 as an access port.',
    steps: [
      'Open the console for Switch S1 (click S1 in Rack A, or click "CLI Terminal" and select S1).',
      'Enter Privileged EXEC mode: type "enable".',
      'Enter Global Configuration mode: type "configure terminal" (or "conf t").',
      'Create and name the Sales VLAN: type "vlan 20", then "name SALES", then "exit".',
      'Enter interface configuration for port Fa0/2: type "interface fa0/2".',
      'Configure the port for access mode: type "switchport mode access".',
      'Assign the port to VLAN 20: type "switchport access vlan 20", then "exit".',
      'Verify with: "do show vlan brief".',
    ],
    suggestedCommands: [
      'enable',
      'configure terminal',
      'vlan 20',
      'name SALES',
      'exit',
      'interface fa0/2',
      'switchport mode access',
      'switchport access vlan 20',
      'end',
    ],
    explanation:
      'All switch ports default to VLAN 1. Placing Fa0/2 into VLAN 20 isolates PC-B into its own broadcast domain separate from Accounting (VLAN 10).',
  },

  trunk: {
    targetDevice: 'S1',
    actionType: 'terminal',
    summary: 'Configure uplink interface Gi0/1 on S1 as an 802.1Q trunk port.',
    steps: [
      'In the Switch S1 terminal, enter configuration mode: "enable", then "configure terminal".',
      'Select the Gigabit uplink interface connected to Router R1: "interface gi0/1".',
      'Enable 802.1Q trunking: "switchport mode trunk".',
      'Exit configuration: "end".',
      'Verify your trunk interface with: "show running-config" or "show ip interface brief".',
    ],
    suggestedCommands: [
      'enable',
      'conf t',
      'interface gi0/1',
      'switchport mode trunk',
      'end',
    ],
    explanation:
      'Standard access ports carry untagged traffic for only a single VLAN. A trunk port tags Ethernet frames with an 802.1Q header, allowing traffic from both VLAN 10 and VLAN 20 to share the single physical link to Router R1.',
  },

  r1_no_shut: {
    targetDevice: 'R1',
    actionType: 'terminal',
    summary: 'Administratively enable physical interface GigabitEthernet0/0 on Router R1.',
    steps: [
      'Open the console for Router R1 (click R1 in Rack A or select R1 from the terminal device switcher).',
      'Enter Privileged EXEC: type "enable".',
      'Enter Global Configuration: type "configure terminal" (or "conf t").',
      'Select the physical interface: type "interface gi0/0".',
      'Enable the interface: type "no shutdown".',
      'Notice the R1 Gi0/0 LED turns green on the router faceplate in the 3D room!',
    ],
    suggestedCommands: [
      'enable',
      'conf t',
      'interface gi0/0',
      'no shutdown',
      'exit',
    ],
    explanation:
      'On Cisco IOS routers, physical interfaces are administratively shut down by default upon booting. They must be explicitly brought up with "no shutdown".',
  },

  sub10: {
    targetDevice: 'R1',
    actionType: 'terminal',
    summary: 'Configure subinterface Gi0/0.10 as the default gateway for Accounting (VLAN 10).',
    steps: [
      'In the Router R1 configuration terminal ("conf t"), create the logical subinterface: "interface gi0/0.10".',
      'Set 802.1Q encapsulation for VLAN 10: "encapsulation dot1Q 10".',
      'Assign the gateway IP address and subnet mask: "ip address 192.168.10.1 255.255.255.0".',
      'Subinterfaces on Cisco IOS are automatically admin-up once the parent interface is enabled.',
    ],
    suggestedCommands: [
      'interface gi0/0.10',
      'encapsulation dot1Q 10',
      'ip address 192.168.10.1 255.255.255.0',
      'exit',
    ],
    explanation:
      'Router-on-a-Stick creates virtual subinterfaces on a single physical cable. Subinterface Gi0/0.10 acts as the default gateway for PC-A (192.168.10.10).',
  },

  sub20: {
    targetDevice: 'R1',
    actionType: 'terminal',
    summary: 'Configure subinterface Gi0/0.20 as the default gateway for Sales (VLAN 20).',
    steps: [
      'In Router R1 configuration mode ("conf t"), create the second subinterface: "interface gi0/0.20".',
      'Set 802.1Q encapsulation for VLAN 20: "encapsulation dot1Q 20".',
      'Assign the gateway IP address and subnet mask: "ip address 192.168.20.1 255.255.255.0".',
      'Exit configuration with "end".',
    ],
    suggestedCommands: [
      'interface gi0/0.20',
      'encapsulation dot1Q 20',
      'ip address 192.168.20.1 255.255.255.0',
      'end',
    ],
    explanation:
      'Subinterface Gi0/0.20 acts as the default gateway (192.168.20.1) for PC-B (192.168.20.10), completing the routing bridge between the two subnets.',
  },

  parent_noip: {
    targetDevice: 'R1',
    actionType: 'terminal',
    summary: 'Ensure parent physical interface Gi0/0 has no IP address assigned.',
    steps: [
      'If you accidentally assigned an IP address directly to the physical interface "gi0/0", remove it: "interface gi0/0" followed by "no ip address".',
      'Verify with "show ip interface brief" that GigabitEthernet0/0 shows "unassigned".',
    ],
    suggestedCommands: ['interface gi0/0', 'no ip address', 'exit'],
    explanation:
      'In a Router-on-a-Stick setup, IP addresses belong on the dot1Q subinterfaces, while the parent physical interface acts strictly as the raw trunk transport.',
  },

  ping_ab: {
    targetDevice: 'PC-A',
    actionType: 'terminal',
    summary: 'Verify end-to-end connectivity by pinging PC-B from PC-A through R1.',
    steps: [
      'Switch the terminal to PC-A (Desk 1).',
      'Verify PC-A network settings with: "ipconfig".',
      'Ping PC-B: type "ping 192.168.20.10".',
      'Verify 4 successful ICMP echo replies: "Reply from 192.168.20.10: bytes=32 time=2ms TTL=128".',
    ],
    suggestedCommands: ['ipconfig', 'ping 192.168.20.10'],
    explanation:
      'Packets leave PC-A (192.168.10.10), travel across S1, up the 802.1Q trunk to R1 Gi0/0.10, get routed to Gi0/0.20, and back down to PC-B (192.168.20.10).',
  },

  // --- MISSION 2: Who Knocked? ---
  report_attacker_ip: {
    targetDevice: 'SOC-PC',
    actionType: 'report',
    summary: 'Identify the external attacker IP address in the authentication logs.',
    steps: [
      'Click "SOC Logs & Threat Map" in the top bar (or click the SOC monitor on the wall).',
      'In the "Auth Logs" tab, look for repeated red lines: "sshd: Failed password for invalid user ...".',
      'Check the Threat Map tab to see the red animated attack arc originating from Netherlands (NL).',
      'Note the source IP address: 203.0.113.45.',
      'Open the "Incident Report" tab, enter "203.0.113.45" in Field 1, and click Submit.',
    ],
    suggestedCommands: ['grep "Failed password" /var/log/auth.log'],
    explanation:
      'Dozens of failed login attempts in quick succession from an external address indicates an automated brute force scanner targeting SSH.',
  },

  report_attack_type: {
    targetDevice: 'SOC-PC',
    actionType: 'report',
    summary: 'Classify the attack vector observed in the authentication logs.',
    steps: [
      'Inspect the usernames tested in the logs: root, admin, test, oracle, postgres, ubuntu, git, backup, deploy.',
      'Notice the rapid cadence of common administrative dictionary words.',
      'In the Incident Report tab, select "Brute force" in the Attack Classification dropdown and submit.',
    ],
    explanation:
      'Rapidly attempting passwords against known or common usernames is a classic Dictionary / Credential Stuffing Brute Force attack.',
  },

  report_compromised_user: {
    targetDevice: 'SOC-PC',
    actionType: 'report',
    summary: 'Identify which user account credentials were breached.',
    steps: [
      'In the Log Viewer, search for "Accepted password" or filter by "deploy".',
      'At 02:11:36Z, observe: "sshd[840]: Accepted password for deploy from 203.0.113.45 port 51142 ssh2".',
      'Followed by: "systemd-logind: New session 42 of user deploy".',
      'In the Incident Report tab, enter "deploy" in Field 3 and click Submit.',
    ],
    suggestedCommands: ['grep "Accepted password" /var/log/auth.log'],
    explanation:
      'The attacker successfully guessed the password for user "deploy", opening an interactive shell session on the production server.',
  },

  // --- MISSION 3: Patch Tuesday ---
  test_sqli_vuln: {
    targetDevice: 'PC-1',
    actionType: 'terminal',
    summary: 'Prove the SQL injection vulnerability on WEB1 by executing curl on PC-1.',
    steps: [
      'Open the console for PC-1 on Desk 1.',
      'Execute the test payload in curl: curl "http://10.0.10.5/login.php?user=\' OR \'1\'=\'1"',
      'Observe the response: "HTTP/1.1 200 OK - Welcome, admin! Authentication bypass successful."',
      'This proves that unescaped single quotes alter the query logic and bypass authentication.',
    ],
    suggestedCommands: ['curl "http://10.0.10.5/login.php?user=\' OR \'1\'=\'1"'],
    explanation:
      'The payload "\' OR \'1\'=\'1" closes the SQL string literal and injects an always-true condition, returning the first record (admin) without password validation.',
  },

  patch_sqli: {
    targetDevice: 'WEB1',
    actionType: 'editor',
    summary: 'Patch login.php using PDO prepared statements with parameterized queries.',
    steps: [
      'Click "Patch Editor" in the top bar, and ensure "login.php" is selected.',
      'Notice the vulnerable code in the editable region concatenates $user directly into SQL.',
      'Replace the editable region with a secure prepared statement:',
      '  $res = $db->prepare("SELECT * FROM users WHERE name = ?");',
      '  $res->execute([$user]);',
      'Click "Save & Verify Patch" to apply and validate your fix.',
    ],
    suggestedCommands: [
      '$res = $db->prepare("SELECT * FROM users WHERE name = ?");',
      '$res->execute([$user]);',
    ],
    explanation:
      'Prepared statements ensure user input is sent to the database engine separately as parameter data, making it impossible for input characters to alter SQL syntax.',
  },

  test_sqli_patched: {
    targetDevice: 'PC-1',
    actionType: 'terminal',
    summary: 'Re-run the SQL injection test on PC-1 to verify the vulnerability is mitigated.',
    steps: [
      'Switch back to the PC-1 terminal on Desk 1.',
      'Re-run: curl "http://10.0.10.5/login.php?user=\' OR \'1\'=\'1"',
      'Verify the server now returns: "HTTP/1.1 401 Unauthorized - Login failed."',
    ],
    suggestedCommands: ['curl "http://10.0.10.5/login.php?user=\' OR \'1\'=\'1"'],
    explanation:
      'With prepared statements active, the input "\' OR \'1\'=\'1" is searched literally as a username, which does not exist, correctly rejecting the login attempt.',
  },

  test_xss_vuln: {
    targetDevice: 'PC-1',
    actionType: 'terminal',
    summary: 'Prove Reflected XSS vulnerability in search.php using curl on PC-1.',
    steps: [
      'In the PC-1 terminal, send an XSS probe with a script tag:',
      'curl "http://10.0.10.5/search.php?q=<script>alert(1)</script>"',
      'Observe that the server echoes the raw "<script>alert(1)</script>" directly in HTML.',
    ],
    suggestedCommands: ['curl "http://10.0.10.5/search.php?q=<script>alert(1)</script>"'],
    explanation:
      'Reflected XSS occurs when an application receives untrusted data in an HTTP request and echoes it back in an immediate response without escaping HTML entities.',
  },

  patch_xss: {
    targetDevice: 'WEB1',
    actionType: 'editor',
    summary: 'Patch search.php with htmlspecialchars() to escape user output.',
    steps: [
      'Open the "Patch Editor" and select the "search.php (XSS)" tab.',
      'Notice line 4 directly concatenates $q into HTML output.',
      'Replace the editable patch region with:',
      '  echo "<div class=\'results\'>Results for: " . htmlspecialchars($q, ENT_QUOTES, \'UTF-8\') . "</div>";',
      'Click "Save & Verify Patch".',
    ],
    suggestedCommands: [
      'echo "<div class=\'results\'>Results for: " . htmlspecialchars($q, ENT_QUOTES, \'UTF-8\') . "</div>";',
    ],
    explanation:
      'htmlspecialchars() converts HTML special characters (&, <, >, ", \') into safe HTML entities (&amp;, &lt;, &gt;, etc.), preventing the browser from interpreting them as executable tags.',
  },

  test_xss_patched: {
    targetDevice: 'PC-1',
    actionType: 'terminal',
    summary: 'Re-run the XSS test on PC-1 to confirm script tags are safely escaped.',
    steps: [
      'In the PC-1 terminal, re-run:',
      'curl "http://10.0.10.5/search.php?q=<script>alert(1)</script>"',
      'Verify the response now contains escaped entities: "&lt;script&gt;alert(1)&lt;/script&gt;".',
    ],
    suggestedCommands: ['curl "http://10.0.10.5/search.php?q=<script>alert(1)</script>"'],
    explanation:
      'The probe string is now neutralized into harmless text rather than an executable JavaScript payload.',
  },
};

export function getGuidanceForObjective(objectiveId: string): StepGuidance | null {
  return OBJECTIVE_GUIDANCE_MAP[objectiveId] || null;
}
