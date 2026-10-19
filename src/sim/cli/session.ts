import { Device } from '../devices/device';
import { CliMode, CliResult, DeviceType, ShellAction } from '../types';
import { tokenize, matchKeyword } from './tokenizer';
import {
  formatRunningConfig,
  formatIpInterfaceBrief,
  formatVlanBrief,
  formatCiscoPing,
  formatWindowsPing,
} from './formatters';
import { normalizeInterfaceName, isSubinterfaceName } from '../net/ifname';
import { isValidIpv4, isValidMask } from '../net/ipv4';

export class CliSession {
  device: Device;
  mode: CliMode = CliMode.USER_EXEC;
  currentInterface: string | null = null;
  currentVlan: number | null = null;
  history: string[] = [];
  historyIndex: number = -1;

  // Callback to simulate ping across the network
  private pingHandler: (srcId: string, dstIp: string) => { success: boolean; hops: string[] };

  // Callback to simulate http request (curl)
  private httpHandler?: (srcId: string, url: string) => { ok: boolean; status: number; body: string };

  constructor(
    device: Device,
    pingHandler: (srcId: string, dstIp: string) => { success: boolean; hops: string[] },
    httpHandler?: (srcId: string, url: string) => { ok: boolean; status: number; body: string }
  ) {
    this.device = device;
    this.pingHandler = pingHandler;
    this.httpHandler = httpHandler;

    if (this.device.type === DeviceType.ROUTER || this.device.type === DeviceType.SWITCH) {
      this.mode = CliMode.USER_EXEC;
    }
  }

  getPrompt(): string {
    if (this.device.type === DeviceType.HOST) {
      return 'C:\\Users\\User>';
    }
    if (this.device.type === DeviceType.SERVER) {
      return `root@${this.device.hostname}:~# `;
    }

    const host = this.device.hostname;
    switch (this.mode) {
      case CliMode.USER_EXEC:
        return `${host}>`;
      case CliMode.PRIV_EXEC:
        return `${host}#`;
      case CliMode.GLOBAL_CONFIG:
        return `${host}(config)#`;
      case CliMode.INTERFACE_CONFIG:
        return `${host}(config-if)#`;
      case CliMode.VLAN_CONFIG:
        return `${host}(config-vlan)#`;
      case CliMode.LINE_CONFIG:
        return `${host}(config-line)#`;
      default:
        return `${host}#`;
    }
  }

  execute(rawCommand: string): CliResult {
    const trimmed = rawCommand.trim();
    if (!trimmed) {
      return { output: '', ok: true, action: ShellAction.NONE };
    }

    this.history.push(rawCommand);
    this.historyIndex = this.history.length;

    if (this.device.type === DeviceType.HOST) {
      return this.executePcShell(trimmed);
    }
    if (this.device.type === DeviceType.SERVER) {
      return this.executeServerShell(trimmed);
    }

    return this.executeIos(trimmed);
  }

  // --- PC MINI SHELL ---
  private executePcShell(cmd: string): CliResult {
    const tokens = tokenize(cmd);
    const verb = tokens[0].toLowerCase();

    if (verb === 'cls') {
      return { output: '\x1b[2J\x1b[0;0H', ok: true, action: ShellAction.NONE };
    }

    if (verb === 'help') {
      const out = [
        'Available commands:',
        '  ipconfig                  Display current IP configuration',
        '  ipconfig /set <ip> <mask> <gw>  Set IP address, subnet mask, and gateway',
        '  ping <ip>                 Send ICMP Echo requests to destination IP',
        '  curl <url>                Send simulated HTTP GET request',
        '  cls                       Clear console screen',
      ].join('\n');
      return { output: out, ok: true, action: ShellAction.NONE };
    }

    if (verb === 'ipconfig') {
      if (tokens.length > 1 && tokens[1].toLowerCase() === '/set') {
        if (this.device.locked) {
          return {
            output: 'Access is denied. Network settings are managed by IT.',
            ok: false,
            action: ShellAction.NONE,
          };
        }
        if (tokens.length < 5) {
          return {
            output: 'Syntax: ipconfig /set <ip> <subnet_mask> <default_gateway>',
            ok: false,
            action: ShellAction.NONE,
          };
        }
        const newIp = tokens[2];
        const newMask = tokens[3];
        const newGw = tokens[4];

        if (!isValidIpv4(newIp) || !isValidMask(newMask) || !isValidIpv4(newGw)) {
          return { output: 'Error: Invalid IPv4 address or subnet mask.', ok: false, action: ShellAction.NONE };
        }

        this.device.ip = newIp;
        this.device.mask = newMask;
        this.device.gateway = newGw;

        const nic = this.device.getInterface('Ethernet0');
        if (nic) {
          nic.ip = newIp;
          nic.mask = newMask;
        }

        return { output: 'IP configuration updated successfully.', ok: true, action: ShellAction.NONE };
      }

      // Display config
      const out = [
        'Windows IP Configuration',
        '',
        'Ethernet adapter Ethernet0:',
        `   IPv4 Address. . . . . . . . . . . : ${this.device.ip || '0.0.0.0'}`,
        `   Subnet Mask . . . . . . . . . . . : ${this.device.mask || '0.0.0.0'}`,
        `   Default Gateway . . . . . . . . . : ${this.device.gateway || '0.0.0.0'}`,
      ].join('\n');
      return { output: out, ok: true, action: ShellAction.NONE };
    }

    if (verb === 'ping') {
      if (tokens.length < 2) {
        return { output: 'Usage: ping [-t] target_name', ok: false, action: ShellAction.NONE };
      }
      const targetIp = tokens[1];
      const res = this.pingHandler(this.device.id, targetIp);
      return { output: formatWindowsPing(targetIp, res.success), ok: res.success, action: ShellAction.NONE };
    }

    if (verb === 'curl') {
      if (tokens.length < 2) {
        return { output: 'curl: try \'curl --help\' for more information', ok: false, action: ShellAction.NONE };
      }
      const url = tokens[1];
      if (!this.httpHandler) {
        return { output: 'curl: HTTP client service unavailable', ok: false, action: ShellAction.NONE };
      }
      const res = this.httpHandler(this.device.id, url);
      return { output: res.body, ok: res.ok, action: ShellAction.NONE };
    }

    return {
      output: `'${tokens[0]}' is not recognized as an internal or external command, operable program or batch file.`,
      ok: false,
      action: ShellAction.NONE,
    };
  }

  // --- SERVER MINI SHELL ---
  private executeServerShell(cmd: string): CliResult {
    const tokens = tokenize(cmd);
    const verb = tokens[0].toLowerCase();

    if (verb === 'help') {
      const out = [
        'Linux Server Shell commands:',
        '  ls [path]                 List directory contents',
        '  cat <file>                Print file contents',
        '  grep [-i] <pattern> <file> Search for pattern in file',
        '  tail [-n N] <file>        Output the last part of files',
        '  edit <file>               Open file in code patch editor',
        '  service <name> status     Check status of a system service',
        '  clear                     Clear screen',
      ].join('\n');
      return { output: out, ok: true, action: ShellAction.NONE };
    }

    if (verb === 'clear') {
      return { output: '\x1b[2J\x1b[0;0H', ok: true, action: ShellAction.NONE };
    }

    if (verb === 'ls') {
      const paths = Array.from(this.device.files.keys());
      if (paths.length === 0) return { output: '', ok: true, action: ShellAction.NONE };
      return { output: paths.join('  '), ok: true, action: ShellAction.NONE };
    }

    if (verb === 'cat') {
      if (tokens.length < 2) {
        return { output: 'cat: missing file operand', ok: false, action: ShellAction.NONE };
      }
      const filePath = tokens[1];
      const content = this.device.files.get(filePath);
      if (content === undefined) {
        return { output: `cat: ${filePath}: No such file or directory`, ok: false, action: ShellAction.NONE };
      }
      return { output: content, ok: true, action: ShellAction.NONE };
    }

    if (verb === 'tail') {
      let n = 10;
      let filePath = '';
      if (tokens[1] === '-n' && tokens[2]) {
        n = parseInt(tokens[2], 10) || 10;
        filePath = tokens[3] || '';
      } else {
        filePath = tokens[1] || '';
      }
      if (!filePath) {
        return { output: 'tail: missing file operand', ok: false, action: ShellAction.NONE };
      }
      const content = this.device.files.get(filePath);
      if (content === undefined) {
        return { output: `tail: cannot open '${filePath}' for reading: No such file or directory`, ok: false, action: ShellAction.NONE };
      }
      const lines = content.split('\n');
      const tailLines = lines.slice(-n);
      return { output: tailLines.join('\n'), ok: true, action: ShellAction.NONE };
    }

    if (verb === 'grep') {
      let caseInsensitive = false;
      let pattern = '';
      let filePath = '';
      let idx = 1;
      if (tokens[idx] === '-i') {
        caseInsensitive = true;
        idx++;
      }
      pattern = tokens[idx++] || '';
      filePath = tokens[idx++] || '';

      if (!pattern || !filePath) {
        return { output: 'Usage: grep [-i] <pattern> <file>', ok: false, action: ShellAction.NONE };
      }

      const content = this.device.files.get(filePath);
      if (content === undefined) {
        return { output: `grep: ${filePath}: No such file or directory`, ok: false, action: ShellAction.NONE };
      }

      const lines = content.split('\n');
      const matched = lines.filter((line) => {
        if (caseInsensitive) {
          return line.toLowerCase().includes(pattern.toLowerCase());
        }
        return line.includes(pattern);
      });

      return { output: matched.join('\n'), ok: true, action: ShellAction.NONE };
    }

    if (verb === 'edit') {
      if (tokens.length < 2) {
        return { output: 'edit: missing file operand', ok: false, action: ShellAction.NONE };
      }
      const filePath = tokens[1];
      if (!this.device.files.has(filePath)) {
        return { output: `edit: ${filePath}: No such file or directory`, ok: false, action: ShellAction.NONE };
      }
      return {
        output: `Opening patch editor for ${filePath}...`,
        ok: true,
        action: ShellAction.OPEN_EDITOR,
        actionArg: `${this.device.id}:${filePath}`,
      };
    }

    if (verb === 'service') {
      const svcName = tokens[1];
      const action = tokens[2];
      if (action === 'status') {
        const found = this.device.services.find((s) => s.id === svcName);
        if (found) {
          return {
            output: `● ${svcName}.service - Apache/Nginx Web Service\n   Loaded: loaded\n   Active: active (running) on port ${found.port}`,
            ok: true,
            action: ShellAction.NONE,
          };
        }
        return {
          output: `Unit ${svcName}.service could not be found.`,
          ok: false,
          action: ShellAction.NONE,
        };
      }
      return { output: `Usage: service <name> status`, ok: false, action: ShellAction.NONE };
    }

    return {
      output: `bash: ${tokens[0]}: command not found`,
      ok: false,
      action: ShellAction.NONE,
    };
  }

  // --- CISCO IOS CLI ---
  private executeIos(cmd: string): CliResult {
    let tokens = tokenize(cmd);
    if (tokens.length === 0) {
      return { output: '', ok: true, action: ShellAction.NONE };
    }

    // Support 'do <cmd>' from config modes
    if (tokens[0].toLowerCase() === 'do' && this.mode !== CliMode.USER_EXEC && this.mode !== CliMode.PRIV_EXEC) {
      const prevMode = this.mode;
      this.mode = CliMode.PRIV_EXEC;
      const res = this.executeIos(tokens.slice(1).join(' '));
      this.mode = prevMode;
      return res;
    }

    // Handle 'end' / Ctrl+Z from any config mode
    if (tokens[0].toLowerCase() === 'end') {
      if (this.mode !== CliMode.USER_EXEC && this.mode !== CliMode.PRIV_EXEC) {
        this.mode = CliMode.PRIV_EXEC;
        this.currentInterface = null;
        this.currentVlan = null;
        return { output: '', ok: true, action: ShellAction.NONE };
      }
    }

    // Handle 'exit'
    if (tokens[0].toLowerCase() === 'exit') {
      return this.handleExit();
    }

    // Match command by mode
    switch (this.mode) {
      case CliMode.USER_EXEC:
        return this.handleUserExec(tokens, cmd);
      case CliMode.PRIV_EXEC:
        return this.handlePrivExec(tokens, cmd);
      case CliMode.GLOBAL_CONFIG:
        return this.handleGlobalConfig(tokens, cmd);
      case CliMode.INTERFACE_CONFIG:
        return this.handleInterfaceConfig(tokens, cmd);
      case CliMode.VLAN_CONFIG:
        return this.handleVlanConfig(tokens, cmd);
      default:
        return { output: '% Invalid mode', ok: false, action: ShellAction.NONE };
    }
  }

  private handleExit(): CliResult {
    switch (this.mode) {
      case CliMode.USER_EXEC:
        return { output: '', ok: true, action: ShellAction.CLOSE_SESSION };
      case CliMode.PRIV_EXEC:
        this.mode = CliMode.USER_EXEC;
        return { output: '', ok: true, action: ShellAction.NONE };
      case CliMode.GLOBAL_CONFIG:
        this.mode = CliMode.PRIV_EXEC;
        return { output: '', ok: true, action: ShellAction.NONE };
      case CliMode.INTERFACE_CONFIG:
        this.mode = CliMode.GLOBAL_CONFIG;
        this.currentInterface = null;
        return { output: '', ok: true, action: ShellAction.NONE };
      case CliMode.VLAN_CONFIG:
        this.mode = CliMode.GLOBAL_CONFIG;
        this.currentVlan = null;
        return { output: '', ok: true, action: ShellAction.NONE };
      default:
        this.mode = CliMode.PRIV_EXEC;
        return { output: '', ok: true, action: ShellAction.NONE };
    }
  }

  private handleUserExec(tokens: string[], raw: string): CliResult {
    const verb = matchKeyword(tokens[0], ['enable', 'show', 'ping', 'exit']);
    if (verb.ambiguous) return { output: `% Ambiguous command:  "${raw}"`, ok: false, action: ShellAction.NONE };
    if (!verb.match) {
      return {
        output: `Translating "${tokens[0]}"... % Unknown command or computer name, or unable to find computer address`,
        ok: false,
        action: ShellAction.NONE,
      };
    }

    if (verb.match === 'enable') {
      this.mode = CliMode.PRIV_EXEC;
      return { output: '', ok: true, action: ShellAction.NONE };
    }

    if (verb.match === 'ping') {
      return this.handlePing(tokens.slice(1));
    }

    if (verb.match === 'show') {
      return this.handleShow(tokens.slice(1));
    }

    return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };
  }

  private handlePrivExec(tokens: string[], raw: string): CliResult {
    const verb = matchKeyword(tokens[0], ['disable', 'configure', 'show', 'ping', 'exit']);
    if (verb.ambiguous) return { output: `% Ambiguous command:  "${raw}"`, ok: false, action: ShellAction.NONE };
    if (!verb.match) {
      return {
        output: `Translating "${tokens[0]}"... % Unknown command or computer name, or unable to find computer address`,
        ok: false,
        action: ShellAction.NONE,
      };
    }

    if (verb.match === 'disable') {
      this.mode = CliMode.USER_EXEC;
      return { output: '', ok: true, action: ShellAction.NONE };
    }

    if (verb.match === 'configure') {
      if (tokens.length < 2) return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };
      const sub = matchKeyword(tokens[1], ['terminal', 'memory']);
      if (sub.match === 'terminal') {
        this.mode = CliMode.GLOBAL_CONFIG;
        return { output: 'Enter configuration commands, one per line.  End with CNTL/Z.', ok: true, action: ShellAction.NONE };
      }
      return { output: "% Invalid input detected at '^' marker.", ok: false, action: ShellAction.NONE };
    }

    if (verb.match === 'show') {
      return this.handleShow(tokens.slice(1));
    }

    if (verb.match === 'ping') {
      return this.handlePing(tokens.slice(1));
    }

    return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };
  }

  private handleGlobalConfig(tokens: string[], raw: string): CliResult {
    const verb = matchKeyword(tokens[0], ['hostname', 'interface', 'vlan', 'no', 'ip', 'line', 'exit', 'end']);
    if (verb.ambiguous) return { output: `% Ambiguous command:  "${raw}"`, ok: false, action: ShellAction.NONE };
    if (!verb.match) return { output: "% Invalid input detected at '^' marker.", ok: false, action: ShellAction.NONE };

    if (verb.match === 'hostname') {
      if (tokens.length < 2) return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };
      this.device.hostname = tokens[1];
      return { output: '', ok: true, action: ShellAction.NONE };
    }

    if (verb.match === 'interface') {
      if (tokens.length < 2) return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };
      const ifArg = tokens[1];
      const canonical = normalizeInterfaceName(ifArg);

      if (isSubinterfaceName(canonical)) {
        if (this.device.type !== DeviceType.ROUTER) {
          return { output: '% Subinterfaces are not supported on this device type.', ok: false, action: ShellAction.NONE };
        }
        const subIf = this.device.ensureSubinterface(canonical);
        if (!subIf) {
          return { output: `% Invalid subinterface "${ifArg}".`, ok: false, action: ShellAction.NONE };
        }
        this.currentInterface = canonical;
        this.mode = CliMode.INTERFACE_CONFIG;
        return { output: '', ok: true, action: ShellAction.NONE };
      }

      const iface = this.device.getInterface(canonical);
      if (!iface) {
        return { output: `% Interface "${ifArg}" does not exist.`, ok: false, action: ShellAction.NONE };
      }

      this.currentInterface = canonical;
      this.mode = CliMode.INTERFACE_CONFIG;
      return { output: '', ok: true, action: ShellAction.NONE };
    }

    if (verb.match === 'vlan') {
      if (this.device.type !== DeviceType.SWITCH) {
        return { output: '% VLAN configuration is only supported on switches.', ok: false, action: ShellAction.NONE };
      }
      if (tokens.length < 2) return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };
      const vlanId = parseInt(tokens[1], 10);
      if (isNaN(vlanId) || vlanId < 1 || vlanId > 4094) {
        return { output: '% Invalid VLAN ID. Range: 1-4094.', ok: false, action: ShellAction.NONE };
      }
      if (!this.device.vlans.has(vlanId)) {
        this.device.vlans.set(vlanId, `VLAN${vlanId.toString().padStart(4, '0')}`);
      }
      this.currentVlan = vlanId;
      this.mode = CliMode.VLAN_CONFIG;
      return { output: '', ok: true, action: ShellAction.NONE };
    }

    return { output: "% Invalid input detected at '^' marker.", ok: false, action: ShellAction.NONE };
  }

  private handleInterfaceConfig(tokens: string[], raw: string): CliResult {
    if (!this.currentInterface) {
      this.mode = CliMode.GLOBAL_CONFIG;
      return { output: '', ok: true, action: ShellAction.NONE };
    }

    const iface = this.device.getInterface(this.currentInterface);
    if (!iface) {
      this.mode = CliMode.GLOBAL_CONFIG;
      return { output: '', ok: true, action: ShellAction.NONE };
    }

    // Direct interface switch: 'interface <name>' from config-if
    const directIfMatch = matchKeyword(tokens[0], ['interface']);
    if (directIfMatch.match === 'interface') {
      return this.handleGlobalConfig(tokens, raw);
    }

    const isNo = tokens[0].toLowerCase() === 'no';
    const remainingTokens = isNo ? tokens.slice(1) : tokens;
    if (remainingTokens.length === 0) return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };

    const verb = matchKeyword(remainingTokens[0], ['shutdown', 'ip', 'switchport', 'encapsulation']);
    if (verb.ambiguous) return { output: `% Ambiguous command:  "${raw}"`, ok: false, action: ShellAction.NONE };
    if (!verb.match) return { output: "% Invalid input detected at '^' marker.", ok: false, action: ShellAction.NONE };

    if (verb.match === 'shutdown') {
      iface.adminUp = isNo; // 'shutdown' sets false, 'no shutdown' sets true
      return { output: '', ok: true, action: ShellAction.NONE };
    }

    if (verb.match === 'encapsulation') {
      if (!iface.isSubinterface) {
        return { output: '% Encapsulation can only be set on subinterfaces.', ok: false, action: ShellAction.NONE };
      }
      if (remainingTokens.length < 3) return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };
      const proto = matchKeyword(remainingTokens[1], ['dot1Q']);
      if (!proto.match) return { output: "% Invalid input detected at '^' marker.", ok: false, action: ShellAction.NONE };

      const vlanId = parseInt(remainingTokens[2], 10);
      if (isNaN(vlanId) || vlanId < 1 || vlanId > 4094) {
        return { output: '% Invalid VLAN ID.', ok: false, action: ShellAction.NONE };
      }

      iface.dot1qVlan = vlanId;
      return { output: '', ok: true, action: ShellAction.NONE };
    }

    if (verb.match === 'ip') {
      if (remainingTokens.length < 2) return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };
      const sub = matchKeyword(remainingTokens[1], ['address']);
      if (sub.match === 'address') {
        if (isNo) {
          iface.ip = null;
          iface.mask = null;
          return { output: '', ok: true, action: ShellAction.NONE };
        }
        if (remainingTokens.length < 4) return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };
        const ip = remainingTokens[2];
        const mask = remainingTokens[3];
        if (!isValidIpv4(ip) || !isValidMask(mask)) {
          return { output: '% Invalid IP address or subnet mask.', ok: false, action: ShellAction.NONE };
        }
        iface.ip = ip;
        iface.mask = mask;
        return { output: '', ok: true, action: ShellAction.NONE };
      }
      return { output: "% Invalid input detected at '^' marker.", ok: false, action: ShellAction.NONE };
    }

    if (verb.match === 'switchport') {
      if (this.device.type !== DeviceType.SWITCH) {
        return { output: '% switchport commands are only valid on switches.', ok: false, action: ShellAction.NONE };
      }
      if (remainingTokens.length < 2) return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };
      const sub = matchKeyword(remainingTokens[1], ['mode', 'access']);

      if (sub.match === 'mode') {
        if (remainingTokens.length < 3) return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };
        const modeChoice = matchKeyword(remainingTokens[2], ['access', 'trunk']);
        if (!modeChoice.match) return { output: "% Invalid input detected at '^' marker.", ok: false, action: ShellAction.NONE };
        iface.mode = modeChoice.match as 'access' | 'trunk';
        return { output: '', ok: true, action: ShellAction.NONE };
      }

      if (sub.match === 'access') {
        if (remainingTokens.length < 4) return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };
        const vlanKeyword = matchKeyword(remainingTokens[2], ['vlan']);
        if (!vlanKeyword.match) return { output: "% Invalid input detected at '^' marker.", ok: false, action: ShellAction.NONE };

        const vlanId = parseInt(remainingTokens[3], 10);
        if (isNaN(vlanId) || vlanId < 1 || vlanId > 4094) {
          return { output: '% Invalid VLAN ID.', ok: false, action: ShellAction.NONE };
        }
        iface.accessVlan = vlanId;
        return { output: '', ok: true, action: ShellAction.NONE };
      }

      return { output: "% Invalid input detected at '^' marker.", ok: false, action: ShellAction.NONE };
    }

    return { output: "% Invalid input detected at '^' marker.", ok: false, action: ShellAction.NONE };
  }

  private handleVlanConfig(tokens: string[], raw: string): CliResult {
    if (this.currentVlan === null) {
      this.mode = CliMode.GLOBAL_CONFIG;
      return { output: '', ok: true, action: ShellAction.NONE };
    }

    const verb = matchKeyword(tokens[0], ['name', 'exit', 'end']);
    if (verb.match === 'name') {
      if (tokens.length < 2) return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };
      this.device.vlans.set(this.currentVlan, tokens[1].toUpperCase());
      return { output: '', ok: true, action: ShellAction.NONE };
    }

    return { output: "% Invalid input detected at '^' marker.", ok: false, action: ShellAction.NONE };
  }

  private handleShow(tokens: string[]): CliResult {
    if (tokens.length === 0) return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };

    const first = matchKeyword(tokens[0], ['running-config', 'ip', 'vlan']);
    if (first.match === 'running-config') {
      return { output: formatRunningConfig(this.device), ok: true, action: ShellAction.NONE };
    }

    if (first.match === 'ip') {
      if (tokens.length < 2) return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };
      const second = matchKeyword(tokens[1], ['interface']);
      if (second.match === 'interface') {
        if (tokens.length >= 3) {
          const third = matchKeyword(tokens[2], ['brief']);
          if (third.match === 'brief') {
            return { output: formatIpInterfaceBrief(this.device), ok: true, action: ShellAction.NONE };
          }
        }
      }
      return { output: "% Invalid input detected at '^' marker.", ok: false, action: ShellAction.NONE };
    }

    if (first.match === 'vlan') {
      if (tokens.length >= 2) {
        const second = matchKeyword(tokens[1], ['brief']);
        if (second.match === 'brief') {
          return { output: formatVlanBrief(this.device), ok: true, action: ShellAction.NONE };
        }
      }
      return { output: formatVlanBrief(this.device), ok: true, action: ShellAction.NONE };
    }

    return { output: "% Invalid input detected at '^' marker.", ok: false, action: ShellAction.NONE };
  }

  private handlePing(tokens: string[]): CliResult {
    if (tokens.length === 0) return { output: '% Incomplete command.', ok: false, action: ShellAction.NONE };
    const dstIp = tokens[0];
    if (!isValidIpv4(dstIp)) {
      return { output: '% Invalid IP address.', ok: false, action: ShellAction.NONE };
    }
    const res = this.pingHandler(this.device.id, dstIp);
    return { output: formatCiscoPing(dstIp, res.success, res.hops.length), ok: res.success, action: ShellAction.NONE };
  }
}
