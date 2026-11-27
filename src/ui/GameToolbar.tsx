import { Check, Database, Layers, Lightbulb, Save, Shield, Terminal, Volume2, VolumeX } from 'lucide-react';

interface GameToolbarProps {
  soundEnabled: boolean;
  terminalOpen: boolean;
  guideOpen: boolean;
  saveStatus: 'idle' | 'saving' | 'saved' | 'error';
  saveDisabled: boolean;
  onMissions: () => void;
  onSave: () => void;
  onSessions: () => void;
  onTerminal: () => void;
  onGuide: () => void;
  onSound: () => void;
}

export function GameToolbar({ soundEnabled, terminalOpen, guideOpen, saveStatus, saveDisabled, onMissions, onSave, onSessions, onTerminal, onGuide, onSound }: GameToolbarProps) {
  const saveLabel = saveStatus === 'saving' ? 'Saving…' : saveStatus === 'error' ? 'Retry save' : 'Save checkpoint';
  return (
    <header className="game-toolbar">
      <div className="game-brand">
        <div className="game-mark" aria-hidden="true"><Shield /></div>
        <div><p>NETSEC<span> 3D</span></p><span className="ops-label">Simulation lab</span></div>
      </div>
      <button type="button" className="ops-button ops-button-accent game-missions" onClick={onMissions} aria-haspopup="dialog"><Layers aria-hidden="true" /> Missions</button>
      <nav className="game-actions" aria-label="Game tools">
        <button type="button" className="ops-button" onClick={onTerminal} aria-pressed={terminalOpen} aria-label="Terminal" title="Terminal"><Terminal aria-hidden="true" /><span className="game-action-name">Terminal</span></button>
        <button type="button" className="ops-button game-guide" onClick={onGuide} aria-haspopup="dialog" aria-expanded={guideOpen} aria-keyshortcuts="H" aria-label="Guidance" title="Guidance (H)"><Lightbulb aria-hidden="true" /><span className="game-action-name">Guidance</span><kbd aria-hidden="true">H</kbd></button>
        <button type="button" className="ops-button game-save" onClick={onSave} disabled={saveDisabled} aria-label={saveLabel} title={saveLabel} data-state={saveStatus}>{saveStatus === 'saved' ? <Check aria-hidden="true" /> : <Save aria-hidden="true" />}<span className="game-action-name">{saveStatus === 'saving' ? 'Saving…' : saveStatus === 'error' ? 'Retry save' : 'Save'}</span></button>
        <button type="button" className="ops-button" onClick={onSessions} aria-haspopup="dialog" aria-label="Saved sessions" title="Saved sessions"><Database aria-hidden="true" /><span className="game-action-name">Sessions</span></button>
        <button type="button" className="ops-button ops-icon" onClick={onSound} aria-label="Game audio" aria-pressed={soundEnabled} title={soundEnabled ? 'Mute audio' : 'Enable audio'}>{soundEnabled ? <Volume2 aria-hidden="true" /> : <VolumeX aria-hidden="true" />}</button>
      </nav>
    </header>
  );
}
