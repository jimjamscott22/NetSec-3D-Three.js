import { ArrowRight, Check, Lock, Play } from 'lucide-react';
import type { ScenarioDef } from '../sim/types';
import { sounds } from '../utils/audio';
import { GameDialog } from './GameDialog';

interface MissionSelectModalProps {
  currentScenarioId: string;
  allScenarios: ScenarioDef[];
  completedIds: string[];
  onSelect: (scenarioId: string) => void;
  onClose: () => void;
}

export function MissionSelectModal({ currentScenarioId, allScenarios, completedIds, onSelect, onClose }: MissionSelectModalProps) {
  const verified = allScenarios.filter((scenario) => completedIds.includes(scenario.id)).length;

  return (
    <GameDialog title="Mission catalog" eyebrow="NetSec 3D / Campaign" onClose={onClose} className="game-dialog-wide">
      <p className="catalog-count"><Check aria-hidden="true" /> <span className="tabular-nums">{verified} / {allScenarios.length}</span> missions verified</p>
      <ol className="catalog-list">
        {allScenarios.map((scenario, index) => {
          const isCurrent = scenario.id === currentScenarioId;
          const isVerified = completedIds.includes(scenario.id);
          const isUnlocked = isCurrent || index === 0 || completedIds.includes(allScenarios[index - 1].id);
          const state = isCurrent ? 'active' : isVerified ? 'verified' : isUnlocked ? 'available' : 'locked';
          return (
            <li key={scenario.id} className="catalog-mission" data-state={state} aria-current={isCurrent ? 'step' : undefined}>
              <span className="catalog-index" aria-hidden="true">M{scenario.sequence}</span>
              <div className="min-w-0">
                <p className="ops-label catalog-status">{isCurrent ? 'Current mission' : isVerified ? 'Verified' : isUnlocked ? 'Ready to launch' : `Locked · verify mission ${allScenarios[index - 1].sequence}`}</p>
                <h3>{scenario.title}</h3>
              </div>
              {isUnlocked ? (
                <button type="button" className="ops-button" aria-label={`${isCurrent ? 'Resume' : 'Launch'}: ${scenario.title}`} onClick={() => {
                  sounds.playKeyClick();
                  if (!isCurrent) onSelect(scenario.id);
                  onClose();
                }}>
                  {isCurrent ? <Play aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}<span>{isCurrent ? 'Resume' : 'Launch'}</span>
                </button>
              ) : <Lock className="catalog-lock" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </GameDialog>
  );
}
