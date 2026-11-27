import React, { useState, useEffect, useRef } from 'react';
import { NetworkSim } from '../sim/core/network_sim';
import { CliSession } from '../sim/cli/session';
import { ShellAction, DeviceType, TerminalTranscriptLine } from '../sim/types';
import { sounds } from '../utils/audio';
import {
  Terminal as TerminalIcon,
  X,
  Maximize2,
  Minimize2,
  HelpCircle,
  Volume2,
  VolumeX,
  ChevronRight,
  BookOpen,
} from 'lucide-react';

interface TerminalConsoleProps {
  sim: NetworkSim;
  deviceId: string;
  onClose: () => void;
  onSwitchDevice: (deviceId: string) => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenCodeEditor?: (deviceAndPath: string) => void;
  transcripts?: Record<string, TerminalTranscriptLine[]>;
  onUpdateTranscript?: (deviceId: string, lines: TerminalTranscriptLine[]) => void;
  onCommandExecuted?: () => void;
}

export const TerminalConsole: React.FC<TerminalConsoleProps> = ({
  sim,
  deviceId,
  onClose,
  onSwitchDevice,
  soundEnabled,
  onToggleSound,
  onOpenCodeEditor,
  transcripts,
  onUpdateTranscript,
  onCommandExecuted,
}) => {
  const [session, setSession] = useState<CliSession | null>(null);
  const [historyLines, setHistoryLines] = useState<TerminalTranscriptLine[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [showCheatsheet, setShowCheatsheet] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize session on device change
  useEffect(() => {
    try {
      const sess = sim.openSession(deviceId);
      setSession(sess);

      const existingTranscript = transcripts?.[deviceId];
      if (existingTranscript && existingTranscript.length > 0) {
        setHistoryLines(existingTranscript);
      } else {
        // Welcome header
        const dev = sess.device;
        let header = '';
        if (dev.type === DeviceType.ROUTER || dev.type === DeviceType.SWITCH) {
          header = `Cisco IOS Software, C2900 Software (C2900-UNIVERSALK9-M), Version 15.2(4)M5, RELEASE SOFTWARE (fc2)\nTechnical Support: http://www.cisco.com/techsupport\nCompiled Fri 12-Sep-14 17:02 by prod_rel_team\n\nPress RETURN to get started!`;
        } else if (dev.type === DeviceType.HOST) {
          header = `Microsoft Windows [Version 10.0.19045.3803]\n(c) Microsoft Corporation. All rights reserved.\nType "help" for available commands.`;
        } else if (dev.type === DeviceType.SERVER) {
          header = `Linux ${dev.hostname} 5.15.0-89-generic #99-Ubuntu SMP x86_64\n\nThe programs included with the Ubuntu system are free software.\nType "help" for available commands.`;
        }

        const initialLines: TerminalTranscriptLine[] = [
          { type: 'system', text: header },
          { type: 'output', text: '' },
        ];
        setHistoryLines(initialLines);
        onUpdateTranscript?.(deviceId, initialLines);
      }
      setInputVal('');
      setHistoryIdx(-1);
    } catch (e) {
      console.error(e);
    }
  }, [sim, deviceId]);

  useEffect(() => {
    if (!window.matchMedia('(pointer: coarse)').matches) inputRef.current?.focus();
  }, [session]);

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [historyLines]);

  if (!session) return null;

  const currentPrompt = session.getPrompt();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (soundEnabled) {
      sounds.playKeyClick();
    }

    // Enter
    if (e.key === 'Enter') {
      if (e.nativeEvent.isComposing || e.keyCode === 229) return;
      e.preventDefault();
      const cmd = inputVal;
      const res = session.execute(cmd);
      // Config changes and pings can complete objectives; re-evaluate after every command.
      sim.notifyObjectives();

      const nextLines: TerminalTranscriptLine[] = [
        ...historyLines,
        { type: 'input', text: cmd, prompt: currentPrompt },
        ...(res.output ? [{ type: 'output' as const, text: res.output }] : []),
      ];
      setHistoryLines(nextLines);
      onUpdateTranscript?.(deviceId, nextLines);
      onCommandExecuted?.();

      setInputVal('');
      setHistoryIdx(-1);

      if (res.action === ShellAction.CLOSE_SESSION) {
        onClose();
        return;
      }

      if (res.action === ShellAction.OPEN_EDITOR && res.actionArg && onOpenCodeEditor) {
        onOpenCodeEditor(res.actionArg);
      }
      return;
    }

    // Up Arrow (history previous)
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const hist = session.history;
      if (hist.length === 0) return;

      const nextIdx = historyIdx === -1 ? hist.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInputVal(hist[nextIdx] || '');
      return;
    }

    // Down Arrow (history next)
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const hist = session.history;
      if (hist.length === 0 || historyIdx === -1) return;

      const nextIdx = historyIdx + 1;
      if (nextIdx >= hist.length) {
        setHistoryIdx(-1);
        setInputVal('');
      } else {
        setHistoryIdx(nextIdx);
        setInputVal(hist[nextIdx] || '');
      }
      return;
    }

    // Tab (Auto-completion for IOS and shells)
    if (e.key === 'Tab') {
      e.preventDefault();
      handleTabCompletion();
      return;
    }

    // ? help key for IOS
    if (e.key === '?' && (session.device.type === DeviceType.ROUTER || session.device.type === DeviceType.SWITCH)) {
      e.preventDefault();
      handleQuestionHelp();
      return;
    }

    // Ctrl+Z maps to 'end'
    if (e.ctrlKey && e.key === 'z') {
      e.preventDefault();
      const res = session.execute('end');
      sim.notifyObjectives();
      const nextLines: TerminalTranscriptLine[] = [
        ...historyLines,
        { type: 'input', text: '^Z', prompt: currentPrompt },
        ...(res.output ? [{ type: 'output' as const, text: res.output }] : []),
      ];
      setHistoryLines(nextLines);
      onUpdateTranscript?.(deviceId, nextLines);
      onCommandExecuted?.();
      setInputVal('');
      return;
    }

    // Ctrl+C abort
    if (e.ctrlKey && e.key === 'c') {
      e.preventDefault();
      setHistoryLines((prev) => [...prev, { type: 'input', text: '^C', prompt: currentPrompt }]);
      setInputVal('');
      return;
    }
  };

  const handleTabCompletion = () => {
    const trimmed = inputVal.trimStart();
    const tokens = trimmed.split(' ');
    const lastToken = tokens[tokens.length - 1];
    if (!lastToken) return;

    let candidates: string[] = [];
    if (session.device.type === DeviceType.ROUTER || session.device.type === DeviceType.SWITCH) {
      candidates = [
        'enable',
        'disable',
        'configure',
        'terminal',
        'interface',
        'shutdown',
        'no',
        'ip',
        'address',
        'vlan',
        'name',
        'switchport',
        'mode',
        'access',
        'trunk',
        'encapsulation',
        'dot1Q',
        'show',
        'running-config',
        'brief',
        'ping',
        'exit',
        'end',
      ];
    } else if (session.device.type === DeviceType.HOST) {
      candidates = ['ipconfig', 'ping', 'curl', 'help', 'cls'];
    } else {
      candidates = ['ls', 'cat', 'grep', 'tail', 'edit', 'service', 'status', 'help', 'clear'];
    }

    const matches = candidates.filter((c) => c.toLowerCase().startsWith(lastToken.toLowerCase()));
    if (matches.length === 1) {
      tokens[tokens.length - 1] = matches[0];
      setInputVal(tokens.join(' ') + ' ');
    }
  };

  const handleQuestionHelp = () => {
    const helpOutput = [
      'Exec & Config Commands:',
      '  enable          Turn on privileged commands',
      '  disable         Turn off privileged commands',
      '  configure       Enter configuration mode',
      '  hostname        Set system network name',
      '  interface       Select an interface to configure',
      '  vlan            Configure VLAN parameters',
      '  switchport      Set switching characteristics of the interface',
      '  encapsulation   Set encapsulation method (e.g. dot1Q)',
      '  ip              Global IP configuration subcommands',
      '  shutdown        Shutdown the selected interface',
      '  show            Show running system information',
      '  ping            Send echo messages',
      '  exit            Exit from the EXEC',
      '  end             Exit to privileged EXEC mode',
    ].join('\n');

    setHistoryLines((prev) => [
      ...prev,
      { type: 'input', text: `${inputVal}?`, prompt: currentPrompt },
      { type: 'output', text: helpOutput },
    ]);
  };

  return (
    <div
      role="region"
      aria-label={`${session.device.id} terminal`}
      className="terminal-window flex flex-col bg-slate-950/95 backdrop-blur-xl border border-slate-700 shadow-2xl rounded-xl"
      data-maximized={isMaximized}
    >
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between gap-2 px-2 sm:px-3 py-1 bg-slate-900 border-b border-slate-800 rounded-t-xl">
        <label className="flex min-w-0 items-center gap-1.5 text-cyan-300">
          <TerminalIcon className="size-4 shrink-0" aria-hidden="true" />
          <span className="sr-only">Terminal device</span>
          <select className="min-w-0 min-h-11 rounded border border-slate-700 bg-slate-950 px-2 text-xs font-mono" value={deviceId} onChange={(event) => onSwitchDevice(event.currentTarget.value)}>
            {Array.from(sim.devices.values()).map((device) => <option key={device.id} value={device.id}>{device.hostname || device.id}</option>)}
          </select>
        </label>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 text-slate-400">
          <button
            onClick={() => setShowCheatsheet(!showCheatsheet)}
            title="Command Cheatsheet"
            className={`p-1.5 rounded-lg hover:bg-slate-800 hover:text-cyan-300 transition ${
              showCheatsheet ? 'text-cyan-400 bg-slate-800' : ''
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onToggleSound}
            aria-label="Terminal audio"
            aria-pressed={soundEnabled}
            title={soundEnabled ? 'Mute Audio' : 'Enable Audio'}
            className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-slate-200 transition"
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            title={isMaximized ? 'Restore' : 'Maximize'}
            className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-slate-200 transition"
          >
            {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={onClose}
            title="Close Terminal (Esc)"
            className="p-1.5 rounded-lg hover:bg-red-950/80 hover:text-red-400 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Terminal Body */}
      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden sm:flex-row">
        {/* Monospace Output Screen */}
        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 font-mono text-xs overflow-y-auto leading-relaxed select-text crt-screen"
        >
          {historyLines.map((line, idx) => (
            <div key={idx} className="whitespace-pre-wrap break-all">
              {line.type === 'input' && (
                <div className="flex items-start text-emerald-400 font-semibold mt-1">
                  <span className="text-slate-400 mr-2 select-none">{line.prompt}</span>
                  <span>{line.text}</span>
                </div>
              )}
              {line.type === 'output' && <div className="text-slate-300 ml-1 mb-1">{line.text}</div>}
              {line.type === 'system' && <div className="text-slate-500 mb-2">{line.text}</div>}
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center text-emerald-400 font-semibold mt-1">
            <span className="text-slate-400 mr-2 select-none">{currentPrompt}</span>
            <div className="relative flex-1 flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-label="Terminal command"
                enterKeyHint="send"
                className="w-full bg-transparent outline-none text-emerald-400 font-mono caret-cyan-400 text-base sm:text-xs"
                spellCheck={false}
                autoCapitalize="off"
                autoComplete="off"
              />
            </div>
          </div>
        </div>

        {/* Command Cheatsheet Side Drawer */}
        {showCheatsheet && (
          <div className="w-full max-h-[46%] shrink-0 border-t sm:border-t-0 sm:border-l sm:max-h-none sm:w-64 border-slate-800 bg-slate-900/90 p-3 text-xs overflow-y-auto font-mono text-slate-300">
            <div className="font-sans font-bold text-cyan-400 mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Cheatsheet
            </div>

            {session.device.type === DeviceType.ROUTER && (
              <div className="space-y-3 text-[11px]">
                <div>
                  <div className="font-bold text-slate-200">1. Enable & Global Config:</div>
                  <div className="text-emerald-400">enable</div>
                  <div className="text-emerald-400">configure terminal</div>
                </div>
                <div>
                  <div className="font-bold text-slate-200">2. Bring physical interface up:</div>
                  <div className="text-emerald-400">interface gi0/0</div>
                  <div className="text-emerald-400">no shutdown</div>
                  <div className="text-emerald-400">exit</div>
                </div>
                <div>
                  <div className="font-bold text-slate-200">3. Router-on-a-Stick subinterface:</div>
                  <div className="text-emerald-400">interface gi0/0.10</div>
                  <div className="text-emerald-400">encapsulation dot1Q 10</div>
                  <div className="text-emerald-400">ip address 192.168.10.1 255.255.255.0</div>
                </div>
                <div>
                  <div className="font-bold text-slate-200">4. Verification:</div>
                  <div className="text-cyan-400">show ip interface brief</div>
                  <div className="text-cyan-400">show running-config</div>
                </div>
              </div>
            )}

            {session.device.type === DeviceType.SWITCH && (
              <div className="space-y-3 text-[11px]">
                <div>
                  <div className="font-bold text-slate-200">1. Create VLAN:</div>
                  <div className="text-emerald-400">vlan 20</div>
                  <div className="text-emerald-400">name SALES</div>
                  <div className="text-emerald-400">exit</div>
                </div>
                <div>
                  <div className="font-bold text-slate-200">2. Assign Access Port:</div>
                  <div className="text-emerald-400">interface fa0/2</div>
                  <div className="text-emerald-400">switchport mode access</div>
                  <div className="text-emerald-400">switchport access vlan 20</div>
                </div>
                <div>
                  <div className="font-bold text-slate-200">3. Configure 802.1Q Trunk:</div>
                  <div className="text-emerald-400">interface gi0/1</div>
                  <div className="text-emerald-400">switchport mode trunk</div>
                </div>
                <div>
                  <div className="font-bold text-slate-200">4. Verification:</div>
                  <div className="text-cyan-400">show vlan brief</div>
                </div>
              </div>
            )}

            {session.device.type === DeviceType.HOST && (
              <div className="space-y-3 text-[11px]">
                <div>
                  <div className="font-bold text-slate-200">Check IP Configuration:</div>
                  <div className="text-emerald-400">ipconfig</div>
                </div>
                <div>
                  <div className="font-bold text-slate-200">Test Connectivity:</div>
                  <div className="text-emerald-400">ping 192.168.20.10</div>
                </div>
                <div>
                  <div className="font-bold text-slate-200">Test Web Service:</div>
                  <div className="text-emerald-400">curl "http://10.0.10.5/login.php?user=' OR '1'='1"</div>
                </div>
              </div>
            )}

            {session.device.type === DeviceType.SERVER && (
              <div className="space-y-3 text-[11px]">
                <div>
                  <div className="font-bold text-slate-200">Inspect Code / Logs:</div>
                  <div className="text-emerald-400">cat /var/www/login.php</div>
                  <div className="text-emerald-400">tail -n 20 /var/log/auth.log</div>
                </div>
                <div>
                  <div className="font-bold text-slate-200">Open Patch Editor:</div>
                  <div className="text-emerald-400">edit /var/www/login.php</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-4 py-1.5 bg-slate-900/90 border-t border-slate-800 rounded-b-2xl flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-3">
          <span>Tab: Auto-complete</span>
          <span>?: Help list</span>
          <span>Ctrl+Z: Exit config</span>
          <span>Up/Down: History</span>
        </div>
        <div className="text-slate-500 font-mono">CCNA IOS Terminal Engine</div>
      </div>
    </div>
  );
};
