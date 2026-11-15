import React, { useState, useEffect } from 'react';
import {
  Database,
  Save,
  Play,
  Trash2,
  RotateCcw,
  X,
  Clock,
  CheckCircle2,
  RefreshCw,
  AlertTriangle,
  Plus,
} from 'lucide-react';
import { SavedSessionSummary } from '../services/sessionApi';
import { ObjectiveState, ScenarioDef } from '../sim/types';
import { sounds } from '../utils/audio';

interface SessionManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentScenario: ScenarioDef;
  objectives: ObjectiveState[];
  completedMissionIds: string[];
  sessions: SavedSessionSummary[];
  activeSessionId: string | null;
  isBusy: boolean;
  onRefreshSessions: () => Promise<void>;
  onSaveNewSession: (name: string) => Promise<void>;
  onOverwriteSession: (sessionId: string, name: string) => Promise<void>;
  onLoadSession: (sessionId: string) => Promise<void>;
  onDeleteSession: (sessionId: string) => Promise<void>;
  onRestartFreshMission: () => Promise<void>;
  onResetCampaign: (keepSavedSessions: boolean) => Promise<void>;
}

function formatTimestamp(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleString(undefined, {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return iso;
  }
}

export const SessionManagerModal: React.FC<SessionManagerModalProps> = ({
  isOpen,
  onClose,
  currentScenario,
  objectives,
  completedMissionIds,
  sessions,
  activeSessionId,
  isBusy,
  onRefreshSessions,
  onSaveNewSession,
  onOverwriteSession,
  onLoadSession,
  onDeleteSession,
  onRestartFreshMission,
  onResetCampaign,
}) => {
  const defaultSaveName = `M${currentScenario.sequence}: ${currentScenario.title}`;
  const [saveName, setSaveName] = useState(defaultSaveName);
  const [confirmReset, setConfirmReset] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [statusBanner, setStatusBanner] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSaveName(`M${currentScenario.sequence}: ${currentScenario.title}`);
      setConfirmReset(false);
      setDeleteTargetId(null);
      setStatusBanner(null);
      onRefreshSessions().catch(() => {});
    }
  }, [isOpen, currentScenario.sequence, currentScenario.title, onRefreshSessions]);

  if (!isOpen) return null;

  const passedCount = objectives.filter((o) => o.passed).length;
  const totalCount = objectives.length;

  const handleSaveNew = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = saveName.trim();
    if (!trimmed) return;
    sounds.playKeyClick();
    try {
      await onSaveNewSession(trimmed);
      sounds.playSuccessBeep();
      setStatusBanner({ type: 'ok', text: `Saved "${trimmed}" to SQLite database.` });
    } catch (err) {
      sounds.playErrorBeep();
      setStatusBanner({
        type: 'err',
        text: err instanceof Error ? err.message : 'Failed to save session.',
      });
    }
  };

  const handleLoad = async (sess: SavedSessionSummary) => {
    sounds.playKeyClick();
    try {
      await onLoadSession(sess.id);
      sounds.playSuccessBeep();
      onClose();
    } catch (err) {
      sounds.playErrorBeep();
      setStatusBanner({
        type: 'err',
        text: err instanceof Error ? err.message : 'Failed to restore session.',
      });
    }
  };

  const handleOverwrite = async (sess: SavedSessionSummary) => {
    sounds.playKeyClick();
    try {
      await onOverwriteSession(sess.id, sess.name);
      sounds.playSuccessBeep();
      setStatusBanner({ type: 'ok', text: `Updated "${sess.name}" with current progress.` });
    } catch (err) {
      sounds.playErrorBeep();
      setStatusBanner({
        type: 'err',
        text: err instanceof Error ? err.message : 'Failed to update session.',
      });
    }
  };

  const handleDelete = async (id: string) => {
    sounds.playKeyClick();
    try {
      await onDeleteSession(id);
      setDeleteTargetId(null);
      setStatusBanner({ type: 'ok', text: 'Saved session deleted.' });
    } catch (err) {
      sounds.playErrorBeep();
      setStatusBanner({
        type: 'err',
        text: err instanceof Error ? err.message : 'Failed to delete session.',
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="max-w-2xl w-full max-h-[90vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl text-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/95">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/40">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <span>Session &amp; Progress Vault</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  SQLite
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Save snapshots, resume in-progress labs, or start fresh while keeping completed missions
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
            aria-label="Close Session Manager"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {statusBanner && (
            <div
              className={`px-3.5 py-2.5 rounded-xl border text-xs flex items-center gap-2 ${
                statusBanner.type === 'ok'
                  ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-300'
                  : 'bg-red-950/50 border-red-500/40 text-red-300'
              }`}
            >
              {statusBanner.type === 'ok' ? (
                <CheckCircle2 className="w-4 h-4 shrink-0" />
              ) : (
                <AlertTriangle className="w-4 h-4 shrink-0" />
              )}
              <span>{statusBanner.text}</span>
            </div>
          )}

          {/* Current Session Overview + Save New Slot */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono text-xs font-bold">
                  M{currentScenario.sequence}
                </span>
                <span className="text-sm font-semibold text-white">{currentScenario.title}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                <span>
                  Objectives: <strong className="text-cyan-400">{passedCount}/{totalCount}</strong>
                </span>
                <span>
                  Campaign Solved: <strong className="text-emerald-400">{completedMissionIds.length}/4</strong>
                </span>
              </div>
            </div>

            <form onSubmit={handleSaveNew} className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={saveName}
                onChange={(e) => setSaveName(e.target.value)}
                placeholder="Enter save slot name..."
                maxLength={80}
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none focus:border-cyan-500 transition"
              />
              <button
                type="submit"
                disabled={isBusy || !saveName.trim()}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition shrink-0"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Save New Slot</span>
              </button>
            </form>
          </div>

          {/* Saved Sessions List */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Saved Sessions ({sessions.length})
              </h3>
              <button
                onClick={() => onRefreshSessions()}
                disabled={isBusy}
                className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition"
              >
                <RefreshCw className={`w-3 h-3 ${isBusy ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>

            {sessions.length === 0 ? (
              <div className="p-6 rounded-xl bg-slate-950/40 border border-slate-800/80 text-center text-xs text-slate-500">
                No saved sessions yet. Your progress auto-saves as you work, or create a named checkpoint above.
              </div>
            ) : (
              <div className="space-y-2.5">
                {sessions.map((sess) => {
                  const isCurrentActive = activeSessionId === sess.id;
                  const pct =
                    sess.objectivesTotal > 0
                      ? Math.round((sess.objectivesPassed / sess.objectivesTotal) * 100)
                      : 0;

                  return (
                    <div
                      key={sess.id}
                      className={`p-3.5 rounded-xl border transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isCurrentActive
                          ? 'bg-cyan-950/25 border-cyan-500/60'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono text-[11px] font-bold border border-slate-700">
                            M{sess.scenarioSequence}
                          </span>
                          <span className="font-semibold text-sm text-white truncate">{sess.name}</span>
                          {sess.isAutosave && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-700/60 font-mono">
                              AUTO
                            </span>
                          )}
                          {isCurrentActive && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-700/60 font-mono">
                              ACTIVE
                            </span>
                          )}
                        </div>

                        <div className="mt-1.5 flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {formatTimestamp(sess.updatedAt)}
                          </span>
                          <span className="font-mono">
                            {sess.objectivesPassed}/{sess.objectivesTotal} objectives ({pct}%)
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => handleLoad(sess)}
                          disabled={isBusy}
                          className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 hover:text-slate-950 text-emerald-300 border border-emerald-500/40 text-xs font-semibold flex items-center gap-1 transition"
                          title="Restore this saved state"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Resume</span>
                        </button>

                        {!sess.isAutosave && (
                          <button
                            onClick={() => handleOverwrite(sess)}
                            disabled={isBusy}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-700 transition"
                            title="Overwrite this slot with current progress"
                          >
                            <Save className="w-3.5 h-3.5" />
                          </button>
                        )}

                        {deleteTargetId === sess.id ? (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleDelete(sess.id)}
                              disabled={isBusy}
                              className="px-2 py-1 rounded-lg bg-red-500 text-white text-[11px] font-bold hover:bg-red-400 transition"
                            >
                              Confirm
                            </button>
                            <button
                              onClick={() => setDeleteTargetId(null)}
                              className="px-2 py-1 rounded-lg bg-slate-800 text-slate-300 text-[11px] hover:bg-slate-700 transition"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteTargetId(sess.id)}
                            disabled={isBusy}
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-950/80 text-slate-400 hover:text-red-400 border border-slate-700 transition"
                            title="Delete saved session"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Footer: Start Again Controls */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={async () => {
                sounds.playKeyClick();
                await onRestartFreshMission();
                onClose();
              }}
              disabled={isBusy}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition"
              title="Reset current mission devices & cables while keeping completed missions and saved slots"
            >
              <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
              <span>Start Mission Again (Keep Progress)</span>
            </button>

            {!confirmReset ? (
              <button
                onClick={() => setConfirmReset(true)}
                disabled={isBusy}
                className="px-3 py-2 rounded-xl bg-red-950/40 hover:bg-red-950/80 text-red-300 border border-red-800/50 text-xs font-medium transition"
              >
                Reset Campaign History
              </button>
            ) : (
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-red-950/70 border border-red-600/60">
                <span className="text-[11px] text-red-200">Clear solved missions?</span>
                <button
                  onClick={async () => {
                    sounds.playKeyClick();
                    await onResetCampaign(true);
                    setConfirmReset(false);
                    onClose();
                  }}
                  className="px-2 py-0.5 rounded bg-red-500 hover:bg-red-400 text-white text-[11px] font-bold"
                >
                  Keep Saves
                </button>
                <button
                  onClick={async () => {
                    sounds.playKeyClick();
                    await onResetCampaign(false);
                    setConfirmReset(false);
                    onClose();
                  }}
                  className="px-2 py-0.5 rounded bg-red-700 hover:bg-red-600 text-white text-[11px] font-bold"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setConfirmReset(false)}
                  className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
