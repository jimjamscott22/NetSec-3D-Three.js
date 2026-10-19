import React, { useState, useEffect } from 'react';
import { ObjectiveState, ScenarioDef } from '../sim/types';
import { sounds } from '../utils/audio';
import {
  HelpCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Terminal,
  Cable,
  FileText,
  Code2,
  Copy,
  Check,
  CheckCircle2,
  AlertCircle,
  Circle,
  Lightbulb,
  ExternalLink,
  BookOpen,
  Keyboard,
} from 'lucide-react';

interface ContextualHintModalProps {
  scenario: ScenarioDef;
  objectives: ObjectiveState[];
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal?: (deviceId: string) => void;
  onOpenReport?: () => void;
  onOpenCodeEditor?: () => void;
}

export const ContextualHintModal: React.FC<ContextualHintModalProps> = ({
  scenario,
  objectives,
  isOpen,
  onClose,
  onOpenTerminal,
  onOpenReport,
  onOpenCodeEditor,
}) => {
  // Find index of the first incomplete and unlocked objective
  const activeIdx = objectives.findIndex((o) => !o.passed && !o.locked);
  const initialIdx = activeIdx !== -1 ? activeIdx : 0;

  const [selectedIdx, setSelectedIdx] = useState<number>(initialIdx);
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  // Sync to active objective when modal opens
  useEffect(() => {
    if (isOpen) {
      const idx = objectives.findIndex((o) => !o.passed && !o.locked);
      setSelectedIdx(idx !== -1 ? idx : 0);
      sounds.playKeyClick();
    }
  }, [isOpen, objectives]);

  // Handle keyboard navigation within the modal (Left/Right to browse, Esc to close)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setSelectedIdx((prev) => Math.max(0, prev - 1));
        sounds.playKeyClick();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setSelectedIdx((prev) => Math.min(objectives.length - 1, prev + 1));
        sounds.playKeyClick();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, objectives.length, onClose]);

  if (!isOpen || objectives.length === 0) return null;

  const currentObj = objectives[selectedIdx] || objectives[0];
  const guidance = currentObj.guidance;

  const handleCopyCommand = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    sounds.playKeyClick();
    setTimeout(() => {
      setCopiedCmd(null);
    }, 2000);
  };

  const handleActionClick = () => {
    sounds.playKeyClick();
    onClose();

    if (guidance?.actionType === 'terminal' && guidance.targetDevice && onOpenTerminal) {
      onOpenTerminal(guidance.targetDevice);
    } else if (guidance?.actionType === 'report' && onOpenReport) {
      onOpenReport();
    } else if (guidance?.actionType === 'editor' && onOpenCodeEditor) {
      onOpenCodeEditor();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-amber-500/50 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/80 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-white tracking-wide">Contextual Guidance & Step-by-Step Hint</h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-950 text-amber-300 border border-amber-800">
                  Shortcut: [H]
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Step-by-step walk-through for: <strong className="text-slate-200">{scenario.title}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
            title="Close [Esc or H]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Objective Stepper Tab Selector */}
        <div className="px-6 py-2.5 bg-slate-900/60 border-b border-slate-800/80 flex items-center justify-between text-xs overflow-x-auto gap-2">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                setSelectedIdx((prev) => Math.max(0, prev - 1));
                sounds.playKeyClick();
              }}
              disabled={selectedIdx === 0}
              className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300"
              title="Previous objective (←)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="font-mono text-slate-300 px-2 font-semibold text-[11px]">
              Step {selectedIdx + 1} of {objectives.length}
            </span>

            <button
              onClick={() => {
                setSelectedIdx((prev) => Math.min(objectives.length - 1, prev + 1));
                sounds.playKeyClick();
              }}
              disabled={selectedIdx === objectives.length - 1}
              className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-slate-300"
              title="Next objective (→)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Stepper Dots */}
          <div className="flex items-center gap-1.5">
            {objectives.map((obj, i) => (
              <button
                key={obj.id}
                onClick={() => {
                  setSelectedIdx(i);
                  sounds.playKeyClick();
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === selectedIdx
                    ? 'w-6 bg-amber-400'
                    : obj.passed
                    ? 'bg-emerald-500'
                    : obj.locked
                    ? 'bg-slate-700'
                    : 'bg-slate-500 hover:bg-amber-400/60'
                }`}
                title={`Objective ${i + 1}: ${obj.description}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            {currentObj.passed ? (
              <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800 text-[11px] font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Completed
              </span>
            ) : currentObj.locked ? (
              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 text-[11px] font-medium">
                Prerequisite Locked
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-700 text-[11px] font-semibold flex items-center gap-1 animate-pulse">
                <Circle className="w-2.5 h-2.5 fill-current" /> Active Target
              </span>
            )}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5 text-xs text-slate-200">
          {/* Objective Title Banner */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start justify-between gap-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                <span>Objective Goal:</span>
              </div>
              <h3 className="text-sm font-semibold text-white leading-snug">{currentObj.description}</h3>
              {currentObj.detail && (
                <div className="text-[11px] text-amber-300/90 font-mono mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Current Status: {currentObj.detail}</span>
                </div>
              )}
            </div>

            {/* Quick Action Button */}
            {guidance && (
              <button
                onClick={handleActionClick}
                className="shrink-0 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition"
              >
                {guidance.actionType === 'terminal' && <Terminal className="w-4 h-4" />}
                {guidance.actionType === 'cable' && <Cable className="w-4 h-4" />}
                {guidance.actionType === 'report' && <FileText className="w-4 h-4" />}
                {guidance.actionType === 'editor' && <Code2 className="w-4 h-4" />}
                <span>
                  {guidance.actionType === 'terminal'
                    ? `Open ${guidance.targetDevice || 'Device'} Console`
                    : guidance.actionType === 'report'
                    ? 'Open Incident Report'
                    : guidance.actionType === 'editor'
                    ? 'Open Patch Editor'
                    : 'Jump to Cabling'}
                </span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
              </button>
            )}
          </div>

          {/* Step-by-Step Instructions */}
          {guidance && guidance.steps.length > 0 ? (
            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3">
              <div className="font-bold text-slate-100 flex items-center gap-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Step-by-Step Instructions:</span>
              </div>

              <div className="space-y-2.5">
                {guidance.steps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed flex-1">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-400">
              {currentObj.hint || 'Review the mission briefing for requirements on this step.'}
            </div>
          )}

          {/* Suggested Command Snippet */}
          {guidance?.suggestedCommands && guidance.suggestedCommands.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-950/95 border border-slate-800/90">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Command Sequence ({guidance.targetDevice || 'Console'}):</span>
                </span>

                <button
                  onClick={() => handleCopyCommand(guidance.suggestedCommands!.join('\n'))}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-medium transition"
                >
                  {copiedCmd ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCmd ? 'Copied!' : 'Copy Commands'}</span>
                </button>
              </div>

              <pre className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-emerald-300 font-mono text-xs overflow-x-auto leading-relaxed select-text">
                {guidance.suggestedCommands.join('\n')}
              </pre>
            </div>
          )}

          {/* Technical Explanation / CCNA Concept Box */}
          {guidance?.explanation && (
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/30 text-slate-300 text-xs">
              <div className="font-bold text-sky-400 mb-1 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Under the Hood & CCNA Concepts:</span>
              </div>
              <p className="leading-relaxed text-slate-300">{guidance.explanation}</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-3 text-[11px]">
            <span className="flex items-center gap-1">
              <Keyboard className="w-3.5 h-3.5 text-slate-500" />
              <span>Press <strong className="text-slate-300">H</strong> or <strong className="text-slate-300">Esc</strong> to close</span>
            </span>
            <span>•</span>
            <span>Use <strong className="text-slate-300">← / →</strong> keys to navigate steps</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
