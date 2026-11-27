import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { NetworkSim } from './sim/core/network_sim';
import { ALL_SCENARIOS, SCENARIO_M1 } from './sim/scenario/scenarios';
import { ObjectiveState, ScenarioDef, SimSnapshot, TerminalTranscriptLine } from './sim/types';
import { ServerRoom3D } from './world/ServerRoom3D';
import { TerminalConsole } from './ui/TerminalConsole';
import { MissionHud } from './ui/MissionHud';
import { LogViewerThreatMap } from './ui/LogViewerThreatMap';
import { CodePatchEditor } from './ui/CodePatchEditor';
import { MissionSelectModal } from './ui/MissionSelectModal';
import { ContextualHintModal } from './ui/ContextualHintModal';
import { SessionManagerModal } from './ui/SessionManagerModal';
import { sessionApi, SavedSessionRecord, SavedSessionSummary } from './services/sessionApi';
import { sounds } from './utils/audio';
import { Database } from 'lucide-react';
import { GameToolbar } from './ui/GameToolbar';

export const App: React.FC = () => {
  // Load the first mission immediately so the 3D room's first build sees its devices.
  const sim = useMemo(() => {
    const s = new NetworkSim();
    s.loadScenario(ALL_SCENARIOS[0]);
    return s;
  }, []);

  const [currentScenarioId, setCurrentScenarioId] = useState<string>(ALL_SCENARIOS[0].id);
  const [missionRun, setMissionRun] = useState(0);
  const [objectives, setObjectives] = useState<ObjectiveState[]>([]);
  const [simRevision, setSimRevision] = useState<number>(0);
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
  const [terminalTranscripts, setTerminalTranscripts] = useState<Record<string, TerminalTranscriptLine[]>>({});
  const [selectedPort, setSelectedPort] = useState<string | null>(null);
  const [isLogViewerOpen, setIsLogViewerOpen] = useState(false);
  const [isCodeEditorOpen, setIsCodeEditorOpen] = useState(false);
  const [codeEditorInitialFile, setCodeEditorInitialFile] = useState('/var/www/login.php');
  const [isMissionSelectOpen, setIsMissionSelectOpen] = useState(false);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [isSessionModalOpen, setIsSessionModalOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // SQLite Session & Progress state
  const [savedSessions, setSavedSessions] = useState<SavedSessionSummary[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [isSessionBusy, setIsSessionBusy] = useState(false);
  const [saveStatusText, setSaveStatusText] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [sessionBanner, setSessionBanner] = useState<string | null>(null);

  const hydratedRef = useRef(false);
  const autosaveTimerRef = useRef<number | null>(null);
  const bannerTimerRef = useRef<number | null>(null);
  const activeTerminalDeviceRef = useRef<string | null>(null);
  const terminalTranscriptsRef = useRef<Record<string, TerminalTranscriptLine[]>>({});
  const completedMissionsRef = useRef<string[]>(completedMissionIds);

  useEffect(() => {
    activeTerminalDeviceRef.current = activeTerminalDevice;
  }, [activeTerminalDevice]);

  useEffect(() => {
    terminalTranscriptsRef.current = terminalTranscripts;
  }, [terminalTranscripts]);

  useEffect(() => {
    completedMissionsRef.current = completedMissionIds;
  }, [completedMissionIds]);

  const showBanner = useCallback((msg: string) => {
    setSessionBanner(msg);
    if (bannerTimerRef.current) {
      window.clearTimeout(bannerTimerRef.current);
    }
    bannerTimerRef.current = window.setTimeout(() => {
      setSessionBanner(null);
    }, 3500);
  }, []);

  // Get current scenario definition
  const currentScenario: ScenarioDef = useMemo(() => {
    return ALL_SCENARIOS.find((s) => s.id === currentScenarioId) || SCENARIO_M1;
  }, [currentScenarioId]);

  const buildCurrentSnapshot = useCallback((): SimSnapshot => {
    const snap = sim.exportSnapshot();
    snap.activeTerminalDevice = activeTerminalDeviceRef.current;
    snap.terminalTranscripts = terminalTranscriptsRef.current;
    return snap;
  }, [sim]);

  const refreshSessionsList = useCallback(async () => {
    const list = await sessionApi.listSessions();
    setSavedSessions(list);
  }, []);

  const performAutosave = useCallback(async () => {
    if (!hydratedRef.current || !sim.currentScenario) return;
    try {
      setSaveStatusText('saving');
      const scen = sim.currentScenario;
      const objStates = sim.objectiveStates();
      const passed = objStates.filter((o) => o.passed).length;
      const saved = await sessionApi.saveSession({
        id: 'autosave',
        name: 'Auto-Save Checkpoint',
        scenarioId: scen.id,
        scenarioTitle: scen.title,
        scenarioSequence: scen.sequence,
        objectivesPassed: passed,
        objectivesTotal: objStates.length,
        isAutosave: true,
        snapshot: buildCurrentSnapshot(),
        setActive: true,
      });
      setActiveSessionId(saved.id);
      setSaveStatusText('saved');
    } catch {
      setSaveStatusText('error');
    }
  }, [sim, buildCurrentSnapshot]);

  const scheduleAutosave = useCallback(() => {
    if (!hydratedRef.current) return;
    if (autosaveTimerRef.current) {
      window.clearTimeout(autosaveTimerRef.current);
    }
    autosaveTimerRef.current = window.setTimeout(() => {
      performAutosave();
    }, 700);
  }, [performAutosave]);

  const restoreSessionRecord = useCallback(
    (record: SavedSessionRecord) => {
      const snap = record.snapshot;
      const scen = ALL_SCENARIOS.find((s) => s.id === snap?.scenarioId) || ALL_SCENARIOS[0];
      setMissionRun((run) => run + 1);
      setCurrentScenarioId(scen.id);
      setSelectedPort(null);
      setIsLogViewerOpen(false);
      setIsCodeEditorOpen(false);
      setIsHintModalOpen(false);

      const res = sim.importSnapshot(snap, scen);
      if (res.ok) {
        setTerminalTranscripts(snap.terminalTranscripts || {});
        setActiveTerminalDevice(snap.activeTerminalDevice ?? null);
        setObjectives(sim.objectiveStates());
        setSimRevision((r) => r + 1);
        setActiveSessionId(record.id);
        setSaveStatusText('saved');
        showBanner(`Session restored: ${record.name}`);
      } else {
        sim.loadScenario(scen);
        setObjectives(sim.objectiveStates());
        setSimRevision((r) => r + 1);
      }
    },
    [sim, showBanner]
  );

  // Load Scenario into sim (fresh start for that mission, preserving completed missions)
  const loadScenario = useCallback(
    (scenarioId: string, options?: { skipAutosave?: boolean }) => {
      const scen = ALL_SCENARIOS.find((s) => s.id === scenarioId) || SCENARIO_M1;
      setMissionRun((run) => run + 1);
      setCurrentScenarioId(scen.id);
      setSelectedPort(null);
      setIsLogViewerOpen(false);
      setIsCodeEditorOpen(false);
      setIsHintModalOpen(false);
      setTerminalTranscripts({});
      setActiveTerminalDevice(null);

      sim.loadScenario(scen);
      setObjectives(sim.objectiveStates());
      setSimRevision((r) => r + 1);

      if (!options?.skipAutosave && hydratedRef.current) {
        scheduleAutosave();
      }
    },
    [sim, scheduleAutosave]
  );

  // Initial mount: wire sim callbacks, hydrate progress & active session from SQLite
  useEffect(() => {
    let cancelled = false;

    sim.onObjectiveUpdated = (newObjectives) => {
      setObjectives([...newObjectives]);
      setSimRevision((r) => r + 1);
      scheduleAutosave();
    };

    sim.onLinkChanged = () => {
      setSimRevision((r) => r + 1);
      scheduleAutosave();
    };

    sim.onConfigChanged = () => {
      setSimRevision((r) => r + 1);
      scheduleAutosave();
    };

    sim.onMissionCompleted = (scenId) => {
      sounds.playSuccessBeep();
      setCompletedMissionIds((prev) => {
        if (!prev.includes(scenId)) {
          const updated = [...prev, scenId];
          try {
            localStorage.setItem('netsec_completed_missions', JSON.stringify(updated));
          } catch {}
          sessionApi.updateProgress(updated).catch(() => {});
          return updated;
        }
        return prev;
      });
      scheduleAutosave();
    };

    async function initFromSqlite() {
      try {
        const [progress, sessions] = await Promise.all([
          sessionApi.getProgress(),
          sessionApi.listSessions(),
        ]);
        if (cancelled) return;

        // Merge any legacy localStorage completions into SQLite
        let localCompleted: string[] = [];
        try {
          const saved = localStorage.getItem('netsec_completed_missions');
          if (saved) localCompleted = JSON.parse(saved);
        } catch {}

        const mergedCompleted = Array.from(
          new Set([...(progress.completedMissionIds || []), ...localCompleted])
        );
        setCompletedMissionIds(mergedCompleted);
        try {
          localStorage.setItem('netsec_completed_missions', JSON.stringify(mergedCompleted));
        } catch {}

        if (mergedCompleted.length !== (progress.completedMissionIds || []).length) {
          sessionApi.updateProgress(mergedCompleted, progress.activeSessionId).catch(() => {});
        }

        setSavedSessions(sessions);

        if (progress.activeSession && progress.activeSession.snapshot) {
          restoreSessionRecord(progress.activeSession);
        } else {
          loadScenario(ALL_SCENARIOS[0].id, { skipAutosave: true });
        }
      } catch {
        // Fallback to clean start if backend unavailable
        if (!cancelled) {
          loadScenario(ALL_SCENARIOS[0].id, { skipAutosave: true });
        }
      } finally {
        if (!cancelled) {
          hydratedRef.current = true;
        }
      }
    }

    initFromSqlite();

    return () => {
      cancelled = true;
      if (autosaveTimerRef.current) {
        window.clearTimeout(autosaveTimerRef.current);
      }
      if (bannerTimerRef.current) {
        window.clearTimeout(bannerTimerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sim]);

  const handleQuickSave = useCallback(async () => {
    if (!sim.currentScenario) return;
    sounds.playKeyClick();
    setIsSessionBusy(true);
    setSaveStatusText('saving');
    try {
      const scen = sim.currentScenario;
      const objStates = sim.objectiveStates();
      const passed = objStates.filter((o) => o.passed).length;
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const saved = await sessionApi.saveSession({
        name: `M${scen.sequence}: ${scen.title} (${timestamp})`,
        scenarioId: scen.id,
        scenarioTitle: scen.title,
        scenarioSequence: scen.sequence,
        objectivesPassed: passed,
        objectivesTotal: objStates.length,
        isAutosave: false,
        snapshot: buildCurrentSnapshot(),
        setActive: true,
      });
      setActiveSessionId(saved.id);
      setSaveStatusText('saved');
      sounds.playSuccessBeep();
      await refreshSessionsList();
      showBanner(`Saved session "${saved.name}" to SQLite.`);
    } catch {
      setSaveStatusText('error');
      sounds.playErrorBeep();
    } finally {
      setIsSessionBusy(false);
    }
  }, [sim, buildCurrentSnapshot, refreshSessionsList, showBanner]);

  const handleSaveNewSession = useCallback(
    async (name: string) => {
      if (!sim.currentScenario) return;
      setIsSessionBusy(true);
      try {
        const scen = sim.currentScenario;
        const objStates = sim.objectiveStates();
        const passed = objStates.filter((o) => o.passed).length;
        const saved = await sessionApi.saveSession({
          name,
          scenarioId: scen.id,
          scenarioTitle: scen.title,
          scenarioSequence: scen.sequence,
          objectivesPassed: passed,
          objectivesTotal: objStates.length,
          isAutosave: false,
          snapshot: buildCurrentSnapshot(),
          setActive: true,
        });
        setActiveSessionId(saved.id);
        setSaveStatusText('saved');
        await refreshSessionsList();
      } finally {
        setIsSessionBusy(false);
      }
    },
    [sim, buildCurrentSnapshot, refreshSessionsList]
  );

  const handleOverwriteSession = useCallback(
    async (sessionId: string, name: string) => {
      if (!sim.currentScenario) return;
      setIsSessionBusy(true);
      try {
        const scen = sim.currentScenario;
        const objStates = sim.objectiveStates();
        const passed = objStates.filter((o) => o.passed).length;
        const saved = await sessionApi.saveSession({
          id: sessionId,
          name,
          scenarioId: scen.id,
          scenarioTitle: scen.title,
          scenarioSequence: scen.sequence,
          objectivesPassed: passed,
          objectivesTotal: objStates.length,
          isAutosave: sessionId === 'autosave',
          snapshot: buildCurrentSnapshot(),
          setActive: true,
        });
        setActiveSessionId(saved.id);
        setSaveStatusText('saved');
        await refreshSessionsList();
      } finally {
        setIsSessionBusy(false);
      }
    },
    [sim, buildCurrentSnapshot, refreshSessionsList]
  );

  const handleLoadSession = useCallback(
    async (sessionId: string) => {
      setIsSessionBusy(true);
      try {
        const record = await sessionApi.getSession(sessionId);
        await sessionApi.markSessionActive(sessionId);
        restoreSessionRecord(record);
        await refreshSessionsList();
      } finally {
        setIsSessionBusy(false);
      }
    },
    [restoreSessionRecord, refreshSessionsList]
  );

  const handleDeleteSession = useCallback(
    async (sessionId: string) => {
      setIsSessionBusy(true);
      try {
        await sessionApi.deleteSession(sessionId);
        if (activeSessionId === sessionId) {
          setActiveSessionId(null);
        }
        await refreshSessionsList();
      } finally {
        setIsSessionBusy(false);
      }
    },
    [activeSessionId, refreshSessionsList]
  );

  const handleRestartFreshMission = useCallback(async () => {
    setIsSessionBusy(true);
    try {
      if (autosaveTimerRef.current) {
        window.clearTimeout(autosaveTimerRef.current);
      }
      await sessionApi.clearActiveSession().catch(() => {});
      setActiveSessionId(null);
      loadScenario(currentScenario.id, { skipAutosave: true });
      setSaveStatusText('idle');
      showBanner(`Restarted M${currentScenario.sequence} (saved slots & solved missions kept).`);
      await refreshSessionsList().catch(() => {});
    } finally {
      setIsSessionBusy(false);
    }
  }, [currentScenario.id, currentScenario.sequence, loadScenario, refreshSessionsList, showBanner]);

  const handleResetCampaign = useCallback(
    async (keepSavedSessions: boolean) => {
      setIsSessionBusy(true);
      try {
        if (autosaveTimerRef.current) {
          window.clearTimeout(autosaveTimerRef.current);
        }
        await sessionApi.resetCampaign(keepSavedSessions);
        setCompletedMissionIds([]);
        try {
          localStorage.removeItem('netsec_completed_missions');
        } catch {}
        setActiveSessionId(null);
        loadScenario(ALL_SCENARIOS[0].id, { skipAutosave: true });
        setSaveStatusText('idle');
        await refreshSessionsList().catch(() => {});
        showBanner('Campaign progress reset.');
      } finally {
        setIsSessionBusy(false);
      }
    },
    [loadScenario, refreshSessionsList, showBanner]
  );

  const handleOpenTerminal = useCallback((devId: string) => {
    setActiveTerminalDevice(devId);
    scheduleAutosave();
  }, [scheduleAutosave]);

  const handleOpenThreatMap = useCallback(() => setIsLogViewerOpen(true), []);

  const handleUpdateTranscript = useCallback(
    (devId: string, lines: TerminalTranscriptLine[]) => {
      setTerminalTranscripts((prev) => ({ ...prev, [devId]: lines }));
    },
    []
  );

  // Keyboard shortcut listener ('H' for contextual step guidance)
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.isComposing || e.repeat || e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.target instanceof HTMLElement && e.target.closest('input, textarea, select, [contenteditable]')) return;
      if (isSessionModalOpen || isLogViewerOpen || isCodeEditorOpen || document.querySelector('dialog[open]')) return;
      if (e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        setIsHintModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, [isSessionModalOpen, isLogViewerOpen, isCodeEditorOpen]);

  const toggleAudio = () => {
    sounds.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
  };

  return (
    <div className="game-shell">
      <GameToolbar
        soundEnabled={soundEnabled}
        terminalOpen={!!activeTerminalDevice}
        guideOpen={isHintModalOpen}
        saveStatus={saveStatusText}
        saveDisabled={isSessionBusy}
        onMissions={() => { sounds.playKeyClick(); setIsMissionSelectOpen(true); }}
        onSave={handleQuickSave}
        onSessions={() => { sounds.playKeyClick(); setIsSessionModalOpen(true); }}
        onTerminal={() => {
          sounds.playKeyClick();
          const deviceId = sim.devices.keys().next().value;
          setActiveTerminalDevice(activeTerminalDevice ? null : deviceId ?? null);
          scheduleAutosave();
        }}
        onGuide={() => setIsHintModalOpen((open) => !open)}
        onSound={toggleAudio}
      />

      {/* Main Viewport: 3D Server Room */}
      <main className="game-stage">
        {/* Live Mission Objectives HUD */}
        <MissionHud
          key={missionRun}
          scenario={currentScenario}
          objectives={objectives}
          debrief={sim.debriefView()?.debrief || currentScenario.debrief || 'All mission objectives were verified.'}
          nextScenario={ALL_SCENARIOS[ALL_SCENARIOS.indexOf(currentScenario) + 1]}
          onOpenReport={() => setIsLogViewerOpen(true)}
          onOpenCodeEditor={() => setIsCodeEditorOpen(true)}
          onOpenTerminal={handleOpenTerminal}
          onSelectMission={loadScenario}
          onRestartMission={handleRestartFreshMission}
          isRestartBusy={isSessionBusy}
        />
        <ServerRoom3D
          sim={sim}
          scenarioId={currentScenarioId}
          simRevision={simRevision}
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

        {/* SQLite Save / Restore Notification Pill */}
        <div className="game-notification" role="status">
          {sessionBanner && <span><Database aria-hidden="true" />{sessionBanner}</span>}
        </div>

        {/* Floating Monospace Terminal Console */}
        {activeTerminalDevice && (
          <TerminalConsole
            sim={sim}
            deviceId={activeTerminalDevice}
            soundEnabled={soundEnabled}
            onToggleSound={toggleAudio}
            onClose={() => {
              setActiveTerminalDevice(null);
              scheduleAutosave();
            }}
            onSwitchDevice={(devId) => {
              setActiveTerminalDevice(devId);
              scheduleAutosave();
            }}
            onOpenCodeEditor={(devAndPath) => {
              const parts = devAndPath.split(':');
              if (parts[1]) setCodeEditorInitialFile(parts[1]);
              setIsCodeEditorOpen(true);
            }}
            transcripts={terminalTranscripts}
            onUpdateTranscript={handleUpdateTranscript}
            onCommandExecuted={scheduleAutosave}
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

        {/* SQLite Session & Progress Vault Modal */}
        <SessionManagerModal
          isOpen={isSessionModalOpen}
          onClose={() => setIsSessionModalOpen(false)}
          currentScenario={currentScenario}
          objectives={objectives}
          completedMissionIds={completedMissionIds}
          sessions={savedSessions}
          activeSessionId={activeSessionId}
          isBusy={isSessionBusy}
          onRefreshSessions={refreshSessionsList}
          onSaveNewSession={handleSaveNewSession}
          onOverwriteSession={handleOverwriteSession}
          onLoadSession={handleLoadSession}
          onDeleteSession={handleDeleteSession}
          onRestartFreshMission={handleRestartFreshMission}
          onResetCampaign={handleResetCampaign}
        />
      </main>
    </div>
  );
};
