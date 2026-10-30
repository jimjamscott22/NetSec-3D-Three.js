import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { NetworkSim } from './sim/core/network_sim';
import { ALL_SCENARIOS, SCENARIO_M1 } from './sim/scenario/scenarios';
import { ObjectiveState, ScenarioDef } from './sim/types';
import { ServerRoom3D } from './world/ServerRoom3D';
import { TerminalConsole } from './ui/TerminalConsole';
import { MissionHud } from './ui/MissionHud';
import { LogViewerThreatMap } from './ui/LogViewerThreatMap';
import { CodePatchEditor } from './ui/CodePatchEditor';
import { MissionSelectModal } from './ui/MissionSelectModal';
import { ContextualHintModal } from './ui/ContextualHintModal';
import { sounds } from './utils/audio';
import {
  Shield,
  Terminal,
  Layers,
  FileText,
  Code2,
  Volume2,
  VolumeX,
  RotateCcw,
  Sparkles,
  Lightbulb,
} from 'lucide-react';

export const App: React.FC = () => {
  // Load the first mission immediately so the 3D room's first build sees its devices.
  const sim = useMemo(() => {
    const s = new NetworkSim();
    s.loadScenario(ALL_SCENARIOS[0]);
    return s;
  }, []);

  const [currentScenarioId, setCurrentScenarioId] = useState<string>(ALL_SCENARIOS[0].id);
  const [objectives, setObjectives] = useState<ObjectiveState[]>([]);
  const [completedMissionIds, setCompletedMissionIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('netsec_completed_missions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI Modals & Panels state
  const [activeTerminalDevice, setActiveTerminalDevice] = useState<string | null>(null);
  const [selectedPort, setSelectedPort] = useState<string | null>(null);
  const [isLogViewerOpen, setIsLogViewerOpen] = useState(false);
  const [isCodeEditorOpen, setIsCodeEditorOpen] = useState(false);
  const [codeEditorInitialFile, setCodeEditorInitialFile] = useState('/var/www/login.php');
  const [isMissionSelectOpen, setIsMissionSelectOpen] = useState(false);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Get current scenario definition
  const currentScenario: ScenarioDef = useMemo(() => {
    return ALL_SCENARIOS.find((s) => s.id === currentScenarioId) || SCENARIO_M1;
  }, [currentScenarioId]);

  // Load Scenario into sim
  const loadScenario = useCallback(
    (scenarioId: string) => {
      const scen = ALL_SCENARIOS.find((s) => s.id === scenarioId) || SCENARIO_M1;
      setCurrentScenarioId(scen.id);
      setSelectedPort(null);
      setIsLogViewerOpen(false);
      setIsCodeEditorOpen(false);
      setIsHintModalOpen(false);

      sim.loadScenario(scen);
      setObjectives(sim.objectiveStates());

      // Auto open the relevant console so each mission starts with an actionable next step.
      if (scen.id === 'm0_orientation') {
        setActiveTerminalDevice('PC-A');
        setIsHintModalOpen(true);
      } else if (scen.id === 'm1_vlan_ping') {
        setActiveTerminalDevice('R1');
      } else if (scen.id === 'm2_log_triage') {
        setActiveTerminalDevice('SOC-PC');
      } else if (scen.id === 'm3_web_patch') {
        setActiveTerminalDevice('PC-1');
      }
    },
    [sim]
  );

  // Initial mount: wire sim callbacks first, then load the starting mission.
  // Runs once; later loads go through loadScenario() directly.
  useEffect(() => {
    sim.onObjectiveUpdated = (newObjectives) => {
      setObjectives([...newObjectives]);
    };

    sim.onMissionCompleted = (scenId) => {
      sounds.playSuccessBeep();
      setCompletedMissionIds((prev) => {
        if (!prev.includes(scenId)) {
          const updated = [...prev, scenId];
          try {
            localStorage.setItem('netsec_completed_missions', JSON.stringify(updated));
          } catch {}
          return updated;
        }
        return prev;
      });
    };

    loadScenario(currentScenarioId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sim]);

  const handleOpenTerminal = useCallback((devId: string) => setActiveTerminalDevice(devId), []);
  const handleOpenThreatMap = useCallback(() => setIsLogViewerOpen(true), []);

  // Keyboard shortcut listener ('H' for contextual step guidance)
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        setIsHintModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 font-sans flex flex-col">
      {/* Top Application Navigation Bar */}
      <header className="h-12 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md px-4 flex items-center justify-between z-30 select-none">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/20">
              <Shield className="w-4 h-4 fill-current" />
            </div>
            <div>
              <span className="font-bold text-white text-sm tracking-tight flex items-center gap-1.5">
                <span>NetSec 3D Simulator</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800 font-mono font-semibold">
                  v1.0
                </span>
              </span>
            </div>
          </div>

          {/* Mission Selector Button */}
          <button
            onClick={() => {
              sounds.playKeyClick();
              setIsMissionSelectOpen(true);
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 transition"
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>M{currentScenario.sequence}: {currentScenario.title}</span>
          </button>
        </div>

        {/* Global Action Tools */}
        <div className="flex items-center gap-2">
          {/* Quick Terminal Launch */}
          <button
            onClick={() => {
              sounds.playKeyClick();
              if (activeTerminalDevice) {
                setActiveTerminalDevice(null);
              } else {
                const firstDev = Array.from(sim.devices.keys())[0] || 'R1';
                setActiveTerminalDevice(firstDev);
              }
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
              activeTerminalDevice
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI Terminal</span>
          </button>

          {/* M2 SOC Log Triage / Threat Map */}
          {currentScenario.id === 'm2_log_triage' && (
            <button
              onClick={() => {
                sounds.playKeyClick();
                setIsLogViewerOpen(true);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-950 hover:bg-sky-900 border border-sky-700 text-sky-300 text-xs font-semibold transition"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>SOC Logs & Threat Map</span>
            </button>
          )}

          {/* M3 Web Code Patch Editor */}
          {currentScenario.id === 'm3_web_patch' && (
            <button
              onClick={() => {
                sounds.playKeyClick();
                setIsCodeEditorOpen(true);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-950 hover:bg-indigo-900 border border-indigo-700 text-indigo-300 text-xs font-semibold transition"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Patch Editor</span>
            </button>
          )}

          {/* Contextual Step Guidance Button */}
          <button
            onClick={() => {
              sounds.playKeyClick();
              setIsHintModalOpen((prev) => !prev);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition ${
              isHintModalOpen
                ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border-amber-500/40'
            }`}
            title="Contextual Step-by-Step Guidance (Press 'H')"
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
            <span>Guidance (H)</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              const next = !soundEnabled;
              setSoundEnabled(next);
              sounds.enabled = next;
            }}
            title={soundEnabled ? 'Mute Audio' : 'Unmute Audio'}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 transition"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Viewport: 3D Server Room */}
      <main className="relative flex-1 w-full h-full overflow-hidden">
        <ServerRoom3D
          sim={sim}
          scenarioId={currentScenarioId}
          simRevision={objectives}
          onOpenTerminal={handleOpenTerminal}
          selectedPort={selectedPort}
          onSelectPort={setSelectedPort}
          onOpenThreatMap={handleOpenThreatMap}
          onOpenCodeEditor={(devAndPath) => {
            const parts = devAndPath.split(':');
            if (parts[1]) setCodeEditorInitialFile(parts[1]);
            setIsCodeEditorOpen(true);
          }}
        />

        {/* Live Mission Objectives HUD */}
        <MissionHud
          sim={sim}
          scenario={currentScenario}
          objectives={objectives}
          onOpenReport={() => setIsLogViewerOpen(true)}
          onOpenCodeEditor={() => setIsCodeEditorOpen(true)}
          onOpenHint={() => setIsHintModalOpen(true)}
          onSelectMission={loadScenario}
          onRestartMission={() => loadScenario(currentScenario.id)}
          allScenarios={ALL_SCENARIOS}
        />

        {/* Floating Monospace Terminal Console */}
        {activeTerminalDevice && (
          <TerminalConsole
            sim={sim}
            deviceId={activeTerminalDevice}
            onClose={() => setActiveTerminalDevice(null)}
            onSwitchDevice={(devId) => setActiveTerminalDevice(devId)}
            onOpenCodeEditor={(devAndPath) => {
              const parts = devAndPath.split(':');
              if (parts[1]) setCodeEditorInitialFile(parts[1]);
              setIsCodeEditorOpen(true);
            }}
          />
        )}

        {/* Contextual Step-by-Step Guidance Modal (Triggered by 'H' or Hint button) */}
        <ContextualHintModal
          scenario={currentScenario}
          objectives={objectives}
          isOpen={isHintModalOpen}
          onClose={() => setIsHintModalOpen(false)}
          onOpenTerminal={(devId) => setActiveTerminalDevice(devId)}
          onOpenReport={() => setIsLogViewerOpen(true)}
          onOpenCodeEditor={() => setIsCodeEditorOpen(true)}
        />

        {/* Mission 2: Log Viewer & Threat Map Modal */}
        {isLogViewerOpen && (
          <LogViewerThreatMap
            sim={sim}
            onClose={() => setIsLogViewerOpen(false)}
          />
        )}

        {/* Mission 3: Guided Code Patch Editor Modal */}
        {isCodeEditorOpen && (
          <CodePatchEditor
            sim={sim}
            initialFile={codeEditorInitialFile}
            onClose={() => setIsCodeEditorOpen(false)}
          />
        )}

        {/* Mission Select Modal */}
        {isMissionSelectOpen && (
          <MissionSelectModal
            currentScenarioId={currentScenario.id}
            allScenarios={ALL_SCENARIOS}
            completedIds={completedMissionIds}
            onSelect={(id) => loadScenario(id)}
            onClose={() => setIsMissionSelectOpen(false)}
          />
        )}
      </main>
    </div>
  );
};
