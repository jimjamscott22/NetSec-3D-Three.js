import React, { useState, useMemo } from 'react';
import { NetworkSim } from '../sim/core/network_sim';
import { LogLine, ReportFieldState } from '../sim/types';
import { sounds } from '../utils/audio';
import {
  FileText,
  Search,
  Globe2,
  AlertTriangle,
  X,
  CheckCircle2,
  Send,
  ShieldAlert,
  MapPin,
} from 'lucide-react';

interface LogViewerThreatMapProps {
  sim: NetworkSim;
  onClose: () => void;
  reportOnly?: boolean;
}

export const LogViewerThreatMap: React.FC<LogViewerThreatMapProps> = ({
  sim,
  onClose,
  reportOnly = false,
}) => {
  const [activeTab, setActiveTab] = useState<'logs' | 'threatmap' | 'report'>(
    reportOnly ? 'report' : 'logs'
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGeoFilter, setSelectedGeoFilter] = useState<string | null>(null);

  // Report Form State
  const [reportInputs, setReportInputs] = useState<Record<string, string>>({
    attacker_ip: '',
    attack_type: 'Brute force',
    compromised_user: '',
  });
  const [submissionFeedback, setSubmissionFeedback] = useState<Record<string, { correct: boolean; msg: string }>>({});

  const scenario = sim.currentScenario;
  const logEntries = scenario?.logs || [];
  const authLog = logEntries.find((l) => l.file.includes('auth.log')) || logEntries[0];
  const allLines: LogLine[] = authLog ? authLog.lines : [];

  // Filtered log lines
  const filteredLines = useMemo(() => {
    return allLines.filter((line) => {
      if (selectedGeoFilter && line.geo !== selectedGeoFilter) {
        return false;
      }
      if (!searchTerm) return true;
      const lower = searchTerm.toLowerCase();
      return (
        line.text.toLowerCase().includes(lower) ||
        (line.src_ip && line.src_ip.includes(lower)) ||
        (line.geo && line.geo.toLowerCase().includes(lower))
      );
    });
  }, [allLines, searchTerm, selectedGeoFilter]);

  // Unique threat origins for Threat Map
  const threatOrigins = useMemo(() => {
    const origins = new Map<string, { ip: string; geo: string; count: number; x: number; y: number; name: string }>();

    // Approximate SVG coords for countries on standard Equirectangular projection (0..100% scale)
    const geoCoords: Record<string, { x: number; y: number; name: string }> = {
      NL: { x: 50, y: 32, name: 'Netherlands (NL)' },
      CN: { x: 78, y: 42, name: 'China (CN)' },
      RU: { x: 72, y: 26, name: 'Russia (RU)' },
      US: { x: 24, y: 38, name: 'United States (US)' },
    };

    for (const line of allLines) {
      if (line.src_ip && line.geo && geoCoords[line.geo]) {
        const key = line.geo;
        const existing = origins.get(key);
        if (existing) {
          existing.count++;
        } else {
          origins.set(key, {
            ip: line.src_ip,
            geo: line.geo,
            count: 1,
            x: geoCoords[line.geo].x,
            y: geoCoords[line.geo].y,
            name: geoCoords[line.geo].name,
          });
        }
      }
    }

    return Array.from(origins.values());
  }, [allLines]);

  const handleReportSubmit = (fieldId: string) => {
    const val = reportInputs[fieldId] || '';
    if (!val.trim()) return;

    sounds.playKeyClick();
    const res = sim.submitReport(fieldId, val);

    if (res.correct) {
      sounds.playSuccessBeep();
      setSubmissionFeedback((prev) => ({
        ...prev,
        [fieldId]: { correct: true, msg: 'Verified Correct!' },
      }));
    } else {
      sounds.playErrorBeep();
      setSubmissionFeedback((prev) => ({
        ...prev,
        [fieldId]: {
          correct: false,
          msg: `Incorrect answer. ${res.attemptsLeft} attempts remaining.`,
        },
      }));
    }
  };

  return (
    <div className="fixed inset-4 z-40 flex flex-col rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-slate-700 shadow-2xl overflow-hidden animate-fade-in">
      {/* Top Header & Tab Navigation */}
      <div className="flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/40">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <span>SOC Security Analytics & Incident Response</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                WEB1 Target
              </span>
            </h2>
            <p className="text-xs text-slate-400">Log triage, geographic threat correlation, and formal reporting</p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
          <button
            onClick={() => setActiveTab('logs')}
            className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${
              activeTab === 'logs'
                ? 'bg-sky-500 text-slate-950 font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Auth Logs</span>
          </button>
          <button
            onClick={() => setActiveTab('threatmap')}
            className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${
              activeTab === 'threatmap'
                ? 'bg-sky-500 text-slate-950 font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Globe2 className="w-3.5 h-3.5" />
            <span>Threat Map</span>
          </button>
          <button
            onClick={() => setActiveTab('report')}
            className={`px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 font-medium ${
              activeTab === 'report'
                ? 'bg-sky-500 text-slate-950 font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Send className="w-3.5 h-3.5" />
            <span>Incident Report</span>
          </button>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-xl bg-slate-800 hover:bg-red-950/80 text-slate-400 hover:text-red-400 transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* TAB 1: LOG VIEWER */}
        {activeTab === 'logs' && (
          <div className="flex-1 flex flex-col p-4 overflow-hidden">
            {/* Search Filter Bar */}
            <div className="flex items-center gap-3 mb-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by keyword (e.g., 'Failed', 'deploy', IP address, 'sshd')..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-slate-200 outline-none focus:border-sky-500 transition"
                />
              </div>

              {selectedGeoFilter && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-950 border border-sky-800 text-xs text-sky-300">
                  <span>Filtered: {selectedGeoFilter}</span>
                  <button onClick={() => setSelectedGeoFilter(null)} className="hover:text-white ml-1">
                    ✕
                  </button>
                </div>
              )}

              <div className="text-xs font-mono text-slate-400 px-2">
                Showing {filteredLines.length} of {allLines.length} entries
              </div>
            </div>

            {/* Monospace Log Lines Stream */}
            <div className="flex-1 rounded-xl bg-slate-900/90 border border-slate-800 p-4 font-mono text-xs overflow-y-auto leading-relaxed select-text space-y-1 crt-screen">
              {filteredLines.map((line, idx) => {
                const isFail = line.text.includes('Failed password');
                const isAccept = line.text.includes('Accepted password');
                const isSudo = line.text.includes('sudo');

                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 py-0.5 px-2 rounded hover:bg-slate-800/60 transition ${
                      isFail
                        ? 'text-red-400/90 bg-red-950/15'
                        : isAccept
                        ? 'text-emerald-400 bg-emerald-950/20 font-bold'
                        : isSudo
                        ? 'text-amber-300'
                        : 'text-slate-300'
                    }`}
                  >
                    <span className="text-slate-500 select-none shrink-0">{line.t}</span>
                    <span className="flex-1 break-all">{line.text}</span>
                    {line.geo && (
                      <span className="px-1.5 py-0.2 rounded bg-sky-950/80 text-sky-300 text-[10px] border border-sky-800 shrink-0 font-bold">
                        {line.geo}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: 2D INTERACTIVE THREAT MAP */}
        {activeTab === 'threatmap' && (
          <div className="flex-1 flex flex-col p-6 overflow-hidden">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-sky-400" />
                  <span>Geographic Origin of Authentication Inbound Requests</span>
                </h3>
                <p className="text-xs text-slate-400">Click any country threat node to filter associated logs</p>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="flex items-center gap-1.5 text-red-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  <span>Active Attack Origin</span>
                </span>
              </div>
            </div>

            {/* SVG Interactive World Map */}
            <div className="relative flex-1 rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center p-4">
              <svg className="w-full h-full max-w-4xl max-h-[460px]" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid meet">
                {/* World Map Graticules */}
                <path d="M 0 30 L 100 30" stroke="#1e293b" strokeWidth="0.3" strokeDasharray="1,1" />
                <path d="M 50 0 L 50 60" stroke="#1e293b" strokeWidth="0.3" strokeDasharray="1,1" />

                {/* Continental Simplified Silhouette outlines */}
                {/* North America */}
                <path d="M 12 16 L 28 14 L 32 28 L 22 40 L 14 30 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.4" opacity="0.6" />
                {/* South America */}
                <path d="M 24 38 L 34 38 L 30 54 L 25 50 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.4" opacity="0.6" />
                {/* Europe */}
                <path d="M 46 16 L 56 16 L 58 28 L 48 28 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.4" opacity="0.6" />
                {/* Africa */}
                <path d="M 46 30 L 60 30 L 56 50 L 50 48 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.4" opacity="0.6" />
                {/* Asia */}
                <path d="M 60 14 L 88 16 L 84 40 L 62 36 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.4" opacity="0.6" />
                {/* Australia */}
                <path d="M 80 44 L 92 44 L 90 54 L 82 52 Z" fill="#1e293b" stroke="#334155" strokeWidth="0.4" opacity="0.6" />

                {/* Target Server Location: Our DC (US East) at (25, 30) */}
                <circle cx="25" cy="30" r="1.4" fill="#0284c7" />
                <circle cx="25" cy="30" r="3" fill="none" stroke="#0284c7" strokeWidth="0.3" opacity="0.7">
                  <animate attributeName="r" values="1.5;4;1.5" dur="3s" repeatCount="indefinite" />
                </circle>
                <text x="25" y="34" fontSize="1.8" fill="#38bdf8" textAnchor="middle" fontWeight="bold">
                  WEB1 (DC)
                </text>

                {/* Threat Nodes and Attack Arcs */}
                {threatOrigins.map((origin) => {
                  const isAttacker = origin.geo === 'NL';
                  const arcStroke = isAttacker ? '#ef4444' : '#64748b';
                  const arcWidth = isAttacker ? 0.8 : 0.4;

                  // Curved quadratic bezier arc to WEB1 target at (25, 30)
                  const midX = (origin.x + 25) / 2;
                  const midY = Math.min(origin.y, 30) - 8;

                  return (
                    <g
                      key={origin.geo}
                      onClick={() => {
                        sounds.playKeyClick();
                        setSelectedGeoFilter(origin.geo);
                        setActiveTab('logs');
                      }}
                      className="cursor-pointer group"
                    >
                      {/* Attack Flight Arc */}
                      <path
                        d={`M ${origin.x} ${origin.y} Q ${midX} ${midY} 25 30`}
                        fill="none"
                        stroke={arcStroke}
                        strokeWidth={arcWidth}
                        strokeDasharray={isAttacker ? '1.5,1' : 'none'}
                      >
                        {isAttacker && <animate attributeName="stroke-dashoffset" values="20;0" dur="1.2s" repeatCount="indefinite" />}
                      </path>

                      {/* Origin Pin */}
                      <circle cx={origin.x} cy={origin.y} r={isAttacker ? 1.6 : 1.1} fill={isAttacker ? '#ef4444' : '#94a3b8'} />
                      {isAttacker && (
                        <circle cx={origin.x} cy={origin.y} r="3" fill="none" stroke="#ef4444" strokeWidth="0.4">
                          <animate attributeName="r" values="1.5;4.5;1.5" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                      )}

                      <text
                        x={origin.x}
                        y={origin.y - 2.5}
                        fontSize="2.0"
                        fill={isAttacker ? '#f87171' : '#cbd5e1'}
                        textAnchor="middle"
                        fontWeight="bold"
                      >
                        {origin.name} ({origin.count} events)
                      </text>
                      <text x={origin.x} y={origin.y + 3.6} fontSize="1.6" fill="#94a3b8" textAnchor="middle" fontFamily="monospace">
                        {origin.ip}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        )}

        {/* TAB 3: INCIDENT REPORT SUBMISSION */}
        {activeTab === 'report' && (
          <div className="flex-1 flex flex-col p-6 overflow-y-auto max-w-2xl mx-auto w-full">
            <div className="mb-6">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-sky-400" />
                <span>Incident Triage & Threat Report</span>
              </h3>
              <p className="text-xs text-slate-400">
                Submit validated intelligence based on your log analysis. You have a maximum of 3 attempts per field.
              </p>
            </div>

            <div className="space-y-6">
              {/* Field 1: Attacker IP */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <label className="block text-xs font-bold text-slate-200 mb-1">
                  1. Attacker External IPv4 Address
                </label>
                <p className="text-[11px] text-slate-400 mb-2">
                  The IP address responsible for repeated failed login attempts.
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. 203.0.113.45"
                    value={reportInputs.attacker_ip}
                    onChange={(e) => setReportInputs({ ...reportInputs, attacker_ip: e.target.value })}
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-slate-100 outline-none focus:border-sky-500"
                  />
                  <button
                    onClick={() => handleReportSubmit('attacker_ip')}
                    className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition"
                  >
                    Submit
                  </button>
                </div>
                {submissionFeedback.attacker_ip && (
                  <div
                    className={`mt-2 text-xs font-medium flex items-center gap-1.5 ${
                      submissionFeedback.attacker_ip.correct ? 'text-emerald-400' : 'text-red-400'
                    }`}
                  >
                    {submissionFeedback.attacker_ip.correct ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : (
                      <AlertTriangle className="w-3.5 h-3.5" />
                    )}
                    <span>{submissionFeedback.attacker_ip.msg}</span>
                  </div>
                )}
              </div>

              {/* Field 2: Attack Vector */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <label className="block text-xs font-bold text-slate-200 mb-1">
                  2. Attack Classification Vector
                </label>
                <p className="text-[11px] text-slate-400 mb-2">
                  The methodology observed in the authentication log patterns.
                </p>
                <div className="flex gap-2">
                  <select
                    value={reportInputs.attack_type}
                    onChange={(e) => setReportInputs({ ...reportInputs, attack_type: e.target.value })}
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-100 outline-none focus:border-sky-500"
                  >
                    <option value="Brute force">Brute force (Dictionary / Credential stuffing)</option>
                    <option value="SQL injection">SQL injection</option>
                    <option value="Port scan">Port scan</option>
                    <option value="Phishing">Phishing</option>
                  </select>
                  <button
                    onClick={() => handleReportSubmit('attack_type')}
                    className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition"
                  >
                    Submit
                  </button>
                </div>
                {submissionFeedback.attack_type && (
                  <div
                    className={`mt-2 text-xs font-medium flex items-center gap-1.5 ${
                      submissionFeedback.attack_type.correct ? 'text-emerald-400' : 'text-red-400'
                    }`}
                  >
                    {submissionFeedback.attack_type.correct ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : (
                      <AlertTriangle className="w-3.5 h-3.5" />
                    )}
                    <span>{submissionFeedback.attack_type.msg}</span>
                  </div>
                )}
              </div>

              {/* Field 3: Compromised Account */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <label className="block text-xs font-bold text-slate-200 mb-1">
                  3. Compromised User Account
                </label>
                <p className="text-[11px] text-slate-400 mb-2">
                  The specific username that resulted in 'Accepted password' and an open session.
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. deploy"
                    value={reportInputs.compromised_user}
                    onChange={(e) => setReportInputs({ ...reportInputs, compromised_user: e.target.value })}
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-slate-100 outline-none focus:border-sky-500"
                  />
                  <button
                    onClick={() => handleReportSubmit('compromised_user')}
                    className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition"
                  >
                    Submit
                  </button>
                </div>
                {submissionFeedback.compromised_user && (
                  <div
                    className={`mt-2 text-xs font-medium flex items-center gap-1.5 ${
                      submissionFeedback.compromised_user.correct ? 'text-emerald-400' : 'text-red-400'
                    }`}
                  >
                    {submissionFeedback.compromised_user.correct ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : (
                      <AlertTriangle className="w-3.5 h-3.5" />
                    )}
                    <span>{submissionFeedback.compromised_user.msg}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
