import React, { useState, useEffect } from 'react';
import { NetworkSim } from '../sim/core/network_sim';
import { sounds } from '../utils/audio';
import {
  Code2,
  Lock,
  Save,
  CheckCircle2,
  AlertTriangle,
  X,
  HelpCircle,
  FileCode,
  ShieldCheck,
} from 'lucide-react';

interface CodePatchEditorProps {
  sim: NetworkSim;
  onClose: () => void;
  initialFile?: string;
}

export const CodePatchEditor: React.FC<CodePatchEditorProps> = ({
  sim,
  onClose,
  initialFile = '/var/www/login.php',
}) => {
  const [selectedFile, setSelectedFile] = useState(initialFile);
  const [patchText, setPatchText] = useState('');
  const [feedback, setFeedback] = useState<{ accepted: boolean; hint?: string } | null>(null);

  const deviceId = 'WEB1';
  const dev = sim.devices.get(deviceId);
  const patchViews = sim.patchViews(deviceId, selectedFile);
  const currentVuln = dev?.vulns.find((v) => v.region.file === selectedFile);

  const fullContent = sim.readFile(deviceId, selectedFile) || '';
  const lines = fullContent.split('\n');

  // Prefix lines (read only)
  const prefixLines = currentVuln ? lines.slice(0, currentVuln.region.firstLine - 1) : [];
  // Suffix lines (read only)
  const suffixLines = currentVuln ? lines.slice(currentVuln.region.lastLine) : [];

  // Initialize patch text from current editable region
  useEffect(() => {
    if (currentVuln) {
      const regionLines = lines.slice(currentVuln.region.firstLine - 1, currentVuln.region.lastLine);
      setPatchText(regionLines.join('\n'));
      setFeedback(null);
    }
  }, [selectedFile, currentVuln]);

  const handleSavePatch = () => {
    if (!currentVuln) return;
    sounds.playKeyClick();

    const res = sim.writePatch(deviceId, currentVuln.id, patchText);
    if (res.accepted) {
      sounds.playSuccessBeep();
      setFeedback({ accepted: true });
    } else {
      sounds.playErrorBeep();
      setFeedback({ accepted: false, hint: res.hint || currentVuln.hint });
    }
  };

  const handleInsertTemplate = () => {
    if (selectedFile === '/var/www/login.php') {
      setPatchText(
        `  $res = $db->prepare("SELECT * FROM users WHERE name = ?");\n  $res->execute([$user]);`
      );
    } else if (selectedFile === '/var/www/search.php') {
      setPatchText(
        `  echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`
      );
    }
  };

  return (
    <div className="fixed inset-4 z-40 flex flex-col rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-indigo-500/50 shadow-2xl overflow-hidden animate-fade-in">
      {/* Titlebar */}
      <div className="flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/40">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <span>Security Code Patch Editor</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                {deviceId}:{selectedFile}
              </span>
            </h2>
            <p className="text-xs text-slate-400">Fix vulnerabilities using secure coding standards</p>
          </div>
        </div>

        {/* File Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
          <button
            onClick={() => setSelectedFile('/var/www/login.php')}
            className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${
              selectedFile === '/var/www/login.php'
                ? 'bg-indigo-500 text-white font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>login.php (SQLi)</span>
          </button>
          <button
            onClick={() => setSelectedFile('/var/www/search.php')}
            className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${
              selectedFile === '/var/www/search.php'
                ? 'bg-indigo-500 text-white font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>search.php (XSS)</span>
          </button>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-slate-800 hover:bg-red-950/80 text-slate-400 hover:text-red-400 transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Editor Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* Code Canvas Area */}
        <div className="flex-1 flex flex-col p-4 overflow-y-auto font-mono text-xs leading-relaxed select-text">
          {/* Read-only Prefix Block */}
          <div className="bg-slate-900/50 p-3 rounded-t-xl border border-slate-800/80 text-slate-500 select-none">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mb-2 font-sans font-semibold uppercase tracking-wider">
              <Lock className="w-3 h-3" /> Read-Only Header (Lines 1 - {prefixLines.length})
            </div>
            {prefixLines.map((line, idx) => (
              <div key={idx} className="flex">
                <span className="w-8 text-slate-600 select-none text-right pr-3">{idx + 1}</span>
                <span className="text-slate-400">{line}</span>
              </div>
            ))}
          </div>

          {/* Editable Patch Region */}
          <div className="p-3 bg-indigo-950/20 border-x-2 border-indigo-500/80 bg-slate-900 relative">
            <div className="flex items-center justify-between text-[11px] text-indigo-300 mb-2 font-sans font-bold">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <span>Editable Patch Region (Lines {currentVuln?.region.firstLine} - {currentVuln?.region.lastLine})</span>
              </div>
              <button
                onClick={handleInsertTemplate}
                className="text-xs px-2 py-0.5 rounded bg-indigo-900/60 hover:bg-indigo-800 text-indigo-200 border border-indigo-700/60 transition"
              >
                Insert Secure Pattern
              </button>
            </div>

            <textarea
              value={patchText}
              onChange={(e) => {
                setPatchText(e.target.value);
                setFeedback(null);
              }}
              rows={4}
              className="w-full bg-slate-950 border border-indigo-500/60 rounded-lg p-3 text-emerald-300 font-mono text-xs outline-none focus:border-indigo-400 caret-cyan-400 resize-none shadow-inner"
              spellCheck={false}
            />
          </div>

          {/* Read-only Suffix Block */}
          <div className="bg-slate-900/50 p-3 rounded-b-xl border border-slate-800/80 text-slate-500 select-none">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mb-2 font-sans font-semibold uppercase tracking-wider">
              <Lock className="w-3 h-3" /> Read-Only Footer
            </div>
            {suffixLines.map((line, idx) => (
              <div key={idx} className="flex">
                <span className="w-8 text-slate-600 select-none text-right pr-3">
                  {(currentVuln?.region.lastLine || 0) + idx + 1}
                </span>
                <span className="text-slate-400">{line}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Help & Validation Sidebar */}
        <div className="w-80 border-l border-slate-800 bg-slate-900/70 p-5 flex flex-col justify-between text-xs">
          <div>
            <h3 className="font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Vulnerability Analysis</span>
            </h3>

            {selectedFile === '/var/www/login.php' ? (
              <div className="space-y-3 text-slate-300">
                <p className="leading-relaxed">
                  <strong className="text-indigo-300">CWE-89: SQL Injection</strong> in user authentication query.
                </p>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                  <div className="font-semibold text-slate-200 mb-1">Expected Secure Pattern:</div>
                  Use PDO prepared statements with parameter placeholders (<code className="text-emerald-400">?</code>):
                  <pre className="mt-1.5 p-1.5 rounded bg-slate-900 text-emerald-300 overflow-x-auto">
                    {`$res = $db->prepare("SELECT * FROM users WHERE name = ?");\n$res->execute([$user]);`}
                  </pre>
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-slate-300">
                <p className="leading-relaxed">
                  <strong className="text-indigo-300">CWE-79: Reflected XSS</strong> in search result rendering.
                </p>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                  <div className="font-semibold text-slate-200 mb-1">Expected Secure Pattern:</div>
                  Escape HTML characters with <code className="text-emerald-400">htmlspecialchars()</code>:
                  <pre className="mt-1.5 p-1.5 rounded bg-slate-900 text-emerald-300 overflow-x-auto">
                    {`echo "<div class='results'>Results for: " . htmlspecialchars($q, ENT_QUOTES, 'UTF-8') . "</div>";`}
                  </pre>
                </div>
              </div>
            )}

            {/* Validation Feedback */}
            {feedback && (
              <div
                className={`mt-4 p-3.5 rounded-xl border flex items-start gap-2.5 ${
                  feedback.accepted
                    ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300'
                    : 'bg-amber-950/40 border-amber-500/60 text-amber-300'
                }`}
              >
                {feedback.accepted ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                )}
                <div>
                  <div className="font-bold">
                    {feedback.accepted ? 'Patch Verified & Accepted!' : 'Patch Needs Adjustment'}
                  </div>
                  {feedback.hint && <p className="text-[11px] mt-1 leading-snug">{feedback.hint}</p>}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={handleSavePatch}
              className="w-full py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 transition"
            >
              <Save className="w-4 h-4" />
              <span>Save & Verify Patch</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
