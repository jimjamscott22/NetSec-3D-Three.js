import { useId, useLayoutEffect, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';

interface GameDialogProps {
  title: string;
  eyebrow: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  tone?: 'complete' | 'caution';
}

export function GameDialog({ title, eyebrow, onClose, children, footer, className = '', tone }: GameDialogProps) {
  const titleId = useId();
  const ref = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);

  return (
    <dialog
      ref={ref}
      className={`game-dialog ${className}`}
      data-tone={tone}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <header className="game-dialog-heading">
        <div className="min-w-0">
          <p className="ops-label">{eyebrow}</p>
          <h2 id={titleId}>{title}</h2>
        </div>
        <button type="button" className="ops-button ops-icon" onClick={onClose} aria-label="Close dialog" autoFocus>
          <X aria-hidden="true" />
        </button>
      </header>
      <div className="game-dialog-body">{children}</div>
      {footer && <footer className="game-dialog-footer">{footer}</footer>}
    </dialog>
  );
}
