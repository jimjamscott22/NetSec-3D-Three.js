import React, { useState } from 'react';
import { NetworkSim } from '../sim/core/network_sim';
import { ObjectiveState, ScenarioDef, DebriefView } from '../sim/types';
import { sounds } from '../utils/audio';
import {
  CheckCircle2,
  Circle,
  AlertCircle,
  HelpCircle,
  Lock,
  ChevronDown,
  ChevronUp,
  Award,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  FileText,
  Code2,
  Terminal,
  Lightbulb,
} from 'lucide-react';

interface MissionHudProps {
  sim: NetworkSim;
  scenario: ScenarioDef;
  objectives: ObjectiveState[];
  onOpenReport?: () => void;
  onOpenCodeEditor?: () => void;
  onOpenHint?: () => void;
  onSelectMission: (scenarioId: string) => void;
  onRestartMission: () => void;
  allScenarios: ScenarioDef[];
}

export const MissionHud: React.FC<MissionHudProps> = ({
  sim,
  scenario,
  objectives,
  onOpenReport,
  onOpenCodeEditor,
  onOpenHint,
  onSelectMission,
  onRestartMission,
  allScenarios,
}) => {
  const [isBriefingOpen, setIsBriefingOpen] = useState(false);
  const [activeHint, setActiveHint] = useState<string | null>(null);
  const [showDebrief, setShowDebrief] = useState(false);

  // Check if all completed
  const allPassed = objectives.length > 0 && objectives.every((o) => o.passed);

  const handleRevealHint = () => {
    sounds.playKeyClick();
    if (onOpenHint) {
      onOpenHint();
      return;
    }
    // Find first failing objective that has a hint
    const failingWithHint = objectives.find((o) => !o.passed && !o.locked && o.hint);
    if (failingWithHint) {
      setActiveHint(failingWithHint.hint);
    } else {
      // General hint
      const general = scenario.hints?.[0]?.text || 'Review network configurations and interface IP assignments.';
      setActiveHint(general);
    }
  };

  const debriefData = sim.debriefView();

  return (
    <>
      {/* Top Center Mission HUD Bar */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center max-w-xl w-[92%] sm:w-auto">
        <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-md bg-cyan-950 text-cyan-400 font-mono text-xs font-bold border border-cyan-800/80">
              M{scenario.sequence}
            </span>
            <span className="font-bold text-slate-100 text-sm">{scenario.title}</span>
          </div>

          <button
            onClick={() => setIsBriefingOpen(!isBriefingOpen)}
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-300 transition pl-2 border-l border-slate-700"
          >
            <span>Briefing</span>
            {isBriefingOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={handleRevealHint}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 text-xs font-medium transition"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Hint (H)</span>
          </button>

          {scenario.id === 'm2_log_triage' && onOpenReport && (
            <button
              onClick={onOpenReport}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 text-xs font-medium transition"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Incident Report</span>
            </button>
          )}

          {scenario.id === 'm3_web_patch' && onOpenCodeEditor && (
            <button
              onClick={onOpenCodeEditor}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 text-xs font-medium transition"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Code Editor</span>
            </button>
          )}

          {allPassed && (
            <button
              onClick={() => setShowDebrief(true)}
              className="flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs animate-pulse shadow-lg shadow-emerald-500/20 transition"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Debrief</span>
            </button>
          )}
        </div>

        {/* Briefing Card Popup */}
        {isBriefingOpen && (
          <div className="mt-2 p-4 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-700 shadow-2xl text-xs text-slate-300 max-w-lg animate-fade-in">
            <div className="font-semibold text-cyan-400 mb-1 flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> Mission Ticket & Briefing
            </div>
            <p className="leading-relaxed text-slate-300">{scenario.briefing}</p>
          </div>
        )}

        {/* Hint Notification Card */}
        {activeHint && (
          <div className="mt-2 p-3.5 rounded-xl bg-amber-950/90 backdrop-blur-xl border border-amber-600/50 shadow-2xl text-xs text-amber-200 max-w-lg flex items-start gap-2.5 animate-fade-in">
            <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-bold text-amber-300 mb-0.5">Diagnostic Hint:</div>
              <p className="leading-relaxed">{activeHint}</p>
            </div>
            <button
              onClick={() => setActiveHint(null)}
              className="text-amber-400 hover:text-white text-xs px-1.5 py-0.5"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Left Objectives HUD Drawer */}
      <div className="absolute top-20 left-4 z-20 w-80 max-h-[calc(100vh-140px)] flex flex-col rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 shadow-2xl overflow-hidden">
        <div className="px-3.5 py-2.5 bg-slate-800/80 border-b border-slate-700/60 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Mission Objectives</span>
          </span>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-700">
            {objectives.filter((o) => o.passed).length} / {objectives.length}
          </span>
        </div>

        <div className="p-3 space-y-2.5 overflow-y-auto text-xs">
          {objectives.map((obj) => (
            <div
              key={obj.id}
              className={`p-2.5 rounded-xl border transition-all ${
                obj.passed
                  ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                  : obj.locked
                  ? 'bg-slate-950/40 border-slate-800 text-slate-500 opacity-60'
                  : 'bg-slate-950/60 border-slate-800 text-slate-300'
              }`}
            >
              <div className="flex items-start gap-2">
                {obj.passed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : obj.locked ? (
                  <Lock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                )}

                <div className="flex-1">
                  <div className="leading-snug">{obj.description}</div>
                  {obj.detail && !obj.passed && !obj.locked && (
                    <div className="text-[11px] text-amber-400/90 font-mono mt-1">Status: {obj.detail}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HUD Footer Quick Action */}
        <div className="px-3 py-2 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <button
            onClick={onRestartMission}
            className="flex items-center gap-1 hover:text-red-400 transition"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Restart</span>
          </button>

          {onOpenHint && (
            <button
              onClick={() => {
                sounds.playKeyClick();
                onOpenHint();
              }}
              className="text-amber-400/90 hover:text-amber-300 flex items-center gap-1 font-medium transition"
            >
              <Lightbulb className="w-3 h-3 text-amber-400" />
              <span>Step Guidance [H]</span>
            </button>
          )}
        </div>
      </div>

      {/* Debrief Modal Card */}
      {showDebrief && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="max-w-xl w-full rounded-2xl bg-slate-900 border border-emerald-500/50 shadow-2xl p-6 text-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Mission Accomplished!</h2>
                <p className="text-xs text-emerald-400 font-mono">{scenario.title} — Verified</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs leading-relaxed text-slate-300 mb-5">
              <h3 className="font-semibold text-cyan-400 mb-1">Debrief & Technical Takeaways:</h3>
              <p>{debriefData?.debrief || scenario.debrief}</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800">
              <button
                onClick={() => setShowDebrief(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"
              >
                Close & Explore
              </button>

              {scenario.sequence < allScenarios.length ? (
                <button
                  onClick={() => {
                    const next = allScenarios.find((s) => s.sequence === scenario.sequence + 1);
                    if (next) onSelectMission(next.id);
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 transition"
                >
                  <span>Next: Mission {scenario.sequence + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <span className="text-xs text-emerald-400 font-semibold">Campaign Complete! 🎉</span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
