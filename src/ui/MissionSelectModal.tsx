import React from 'react';
import { ScenarioDef } from '../sim/types';
import { sounds } from '../utils/audio';
import {
  Layers,
  CheckCircle2,
  Lock,
  ArrowRight,
  Shield,
  Server,
  Code2,
  X,
  Play,
} from 'lucide-react';

interface MissionSelectModalProps {
  currentScenarioId: string;
  allScenarios: ScenarioDef[];
  completedIds: string[];
  onSelect: (scenarioId: string) => void;
  onClose: () => void;
}

export const MissionSelectModal: React.FC<MissionSelectModalProps> = ({
  currentScenarioId,
  allScenarios,
  completedIds,
  onSelect,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="max-w-2xl w-full rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 text-slate-200">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Campaign Mission Catalog</h2>
              <p className="text-xs text-slate-400">CCNA Networking & Cyber Security Simulator</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mission Cards List */}
        <div className="space-y-3.5">
          {allScenarios.map((scen, idx) => {
            const isCompleted = completedIds.includes(scen.id);
            const isCurrent = scen.id === currentScenarioId;
            // Unlocked if first mission or previous completed
            const isUnlocked = idx === 0 || completedIds.includes(allScenarios[idx - 1].id) || isCurrent;

            return (
              <div
                key={scen.id}
                onClick={() => {
                  if (isUnlocked) {
                    sounds.playKeyClick();
                    onSelect(scen.id);
                    onClose();
                  }
                }}
                className={`p-4 rounded-xl border transition-all flex items-center justify-between ${
                  isCurrent
                    ? 'bg-cyan-950/40 border-cyan-500/80 shadow-lg shadow-cyan-950/50'
                    : isUnlocked
                    ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40 cursor-pointer'
                    : 'bg-slate-950/30 border-slate-900 opacity-50 cursor-not-allowed'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 ${
                      isCompleted
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : isCurrent
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                        : isUnlocked
                        ? 'bg-slate-800 text-slate-300 border border-slate-700'
                        : 'bg-slate-900 text-slate-600'
                    }`}
                  >
                    M{scen.sequence}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white text-sm">{scen.title}</h3>
                      {isCompleted && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Solved
                        </span>
                      )}
                      {isCurrent && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 font-medium">
                          Active
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                      {scen.briefing}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 ml-4">
                  {isUnlocked ? (
                    <button className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-cyan-600 hover:text-white text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition">
                      <Play className="w-3 h-3 fill-current" />
                      <span>{isCurrent ? 'Continue' : 'Launch'}</span>
                    </button>
                  ) : (
                    <div className="p-2 rounded-xl bg-slate-900 text-slate-600">
                      <Lock className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
