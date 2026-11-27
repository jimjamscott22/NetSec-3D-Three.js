import { useState, type ReactNode } from 'react';
import { ArrowRight, BookOpen, Check, ChevronDown, Circle, Code2, FileText, ListChecks, Lock, RotateCcw, Terminal } from 'lucide-react';
import type { ObjectiveState, ScenarioDef } from '../sim/types';
import { GameDialog } from './GameDialog';

interface MissionHudProps {
  scenario: ScenarioDef;
  objectives: ObjectiveState[];
  debrief: string;
  nextScenario?: ScenarioDef;
  onOpenReport: () => void;
  onOpenCodeEditor: () => void;
  onOpenTerminal: (id: string) => void;
  onSelectMission: (scenarioId: string) => void;
  onRestartMission: () => Promise<void>;
  isRestartBusy: boolean;
}

export function MissionHud({ scenario, objectives, debrief, nextScenario, onOpenReport, onOpenCodeEditor, onOpenTerminal, onSelectMission, onRestartMission, isRestartBusy }: MissionHudProps) {
  const [expanded, setExpanded] = useState(false);
  const [dialog, setDialog] = useState<'briefing' | 'restart' | 'debrief' | null>(null);
  const passed = objectives.filter((objective) => objective.passed).length;
  const verified = objectives.length > 0 && passed === objectives.length;
  const next = objectives.find((objective) => !objective.passed && !objective.locked);
  const guidance = next?.guidance;
  const closeDialog = () => setDialog(null);

  const deviceId = guidance?.actionType === 'terminal' ? guidance.targetDevice : undefined;
  const missionToolClass = deviceId || verified ? 'ops-button' : 'ops-button ops-button-accent';
  let missionTool: ReactNode;
  if (scenario.id === 'm2_log_triage') {
    missionTool = <button type="button" className={missionToolClass} onClick={onOpenReport}><FileText aria-hidden="true" /> Incident report</button>;
  } else if (scenario.id === 'm3_web_patch') {
    missionTool = <button type="button" className={missionToolClass} onClick={onOpenCodeEditor}><Code2 aria-hidden="true" /> Patch editor</button>;
  }

  return (
    <>
      <aside className="mission-hud ops-panel" aria-label="Mission objectives" data-complete={verified}>
        <div className="mission-summary">
          <div className="mission-kicker">
            <span className="ops-label">Mission <span className="tabular-nums">{String(scenario.sequence).padStart(2, '0')}</span></span>
            <span className="mission-status"><span aria-hidden="true" />{verified ? 'Verified' : objectives.length ? 'In progress' : 'Initializing'}</span>
          </div>
          <h1>{scenario.title}</h1>
          <div className="mission-progress-label">
            <span>Objectives verified</span>
            <span className="tabular-nums" aria-live="polite">{passed} / {objectives.length}</span>
          </div>
          <div className="mission-meter" aria-hidden="true">
            {objectives.map((objective) => <span key={objective.id} data-passed={objective.passed} data-current={objective.id === next?.id} />)}
          </div>
        </div>

        <div className="mission-next">
          {verified ? <Check className="mission-next-icon" aria-hidden="true" /> : <ListChecks className="mission-next-icon" aria-hidden="true" />}
          <div className="min-w-0">
            <p className="ops-label">{verified ? 'Mission complete' : 'Next objective'}</p>
            <p className="mission-next-text">{verified ? 'All objectives verified. Your debrief is ready.' : next?.description ?? (objectives.length ? 'Complete the prerequisites to unlock the next objective.' : 'Preparing the mission workspace…')}</p>
            {next?.detail && <p className="mission-detail">{next.detail}</p>}
          </div>
        </div>

        <div className="mission-tools">
          {verified ? (
            <button type="button" className="ops-button ops-button-complete" onClick={() => setDialog('debrief')}>View debrief <ArrowRight aria-hidden="true" /></button>
          ) : deviceId && (
            <button type="button" className="ops-button ops-button-accent" onClick={() => onOpenTerminal(deviceId)}><Terminal aria-hidden="true" /> {deviceId} console</button>
          )}
          {missionTool}
          <button type="button" className="ops-button" onClick={() => setDialog('briefing')}><BookOpen aria-hidden="true" /> Briefing</button>
        </div>

        {expanded && (
          <ol className="mission-checklist" id="mission-checklist" aria-label="All objectives">
            {objectives.map((objective) => (
              <li key={objective.id} data-state={objective.passed ? 'verified' : objective.locked ? 'locked' : objective.id === next?.id ? 'current' : 'open'}>
                {objective.passed ? <Check aria-hidden="true" /> : objective.locked ? <Lock aria-hidden="true" /> : <Circle aria-hidden="true" />}
                <span><span className="sr-only">{objective.passed ? 'Verified: ' : objective.locked ? 'Locked: ' : objective.id === next?.id ? 'Current: ' : 'Open: '}</span>{objective.description}</span>
              </li>
            ))}
          </ol>
        )}

        <div className="mission-footer">
          <button type="button" className="ops-button" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} aria-controls={expanded ? 'mission-checklist' : undefined} disabled={!objectives.length}>
            Checklist <ChevronDown className={expanded ? 'rotate-180' : undefined} aria-hidden="true" />
          </button>
          <button type="button" className="ops-button" onClick={() => setDialog('restart')} disabled={isRestartBusy}><RotateCcw aria-hidden="true" /> Restart</button>
        </div>
      </aside>

      {dialog === 'briefing' && (
        <GameDialog title={scenario.title} eyebrow={`Mission ${String(scenario.sequence).padStart(2, '0')} / Briefing`} onClose={closeDialog} footer={<button type="button" className="ops-button ops-button-accent" onClick={closeDialog}>Back to mission <ArrowRight aria-hidden="true" /></button>}>
          <p>{scenario.briefing}</p>
        </GameDialog>
      )}
      {dialog === 'restart' && (
        <GameDialog title="Restart this mission?" eyebrow="Reset workspace" tone="caution" onClose={closeDialog} footer={<>
          <button type="button" className="ops-button" onClick={closeDialog}>Keep playing</button>
          <button type="button" className="ops-button ops-button-caution" disabled={isRestartBusy} onClick={onRestartMission}><RotateCcw aria-hidden="true" /> {isRestartBusy ? 'Restarting…' : 'Restart mission'}</button>
        </>}>
          <p>The current mission returns to its starting state. Saved sessions and completed missions are kept.</p>
        </GameDialog>
      )}
      {dialog === 'debrief' && verified && (
        <GameDialog title={nextScenario ? 'Mission verified' : 'Campaign complete'} eyebrow={`Mission ${String(scenario.sequence).padStart(2, '0')} / Debrief`} tone="complete" onClose={closeDialog} footer={<>
          <button type="button" className="ops-button" onClick={closeDialog}>Return to room</button>
          {nextScenario && <button type="button" className="ops-button ops-button-complete" onClick={() => onSelectMission(nextScenario.id)}>Launch mission {nextScenario.sequence} <ArrowRight aria-hidden="true" /></button>}
        </>}>
          <h3 className="mb-2 font-semibold text-white">{scenario.title}</h3>
          <p>{debrief}</p>
        </GameDialog>
      )}
    </>
  );
}
