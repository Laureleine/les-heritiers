import React, { useRef } from 'react';
import { X } from '../../config/icons';
import { useFocusTrap } from '../../hooks/useFocusTrap';

export function ModalHeader({ title, icon, onClose, id = 'modal-title' }) {
  return (
    <div className="bg-amber-900 text-amber-50 p-4 flex justify-between items-center shadow-md z-10 shrink-0">
      <h3 id={id} className="font-serif font-bold text-lg flex items-center gap-2">
        {icon && <span className="text-amber-300">{icon}</span>}
        {title}
      </h3>
      {onClose && (
        <button onClick={onClose} className="hover:text-red-400 bg-amber-800/50 p-1.5 rounded-lg transition-colors" aria-label="Fermer">
          <X size={18} />
        </button>
      )}
    </div>
  );
}

export default function ModalShell({ children, onClose, maxWidth = 'max-w-2xl', compact = false, className = '', labelledBy = 'modal-title' }) {
  const modalRef = useRef(null);
  useFocusTrap(modalRef, true);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={`bg-[#fdfbf7] w-full ${maxWidth} ${compact ? '' : 'max-h-[85vh]'} rounded-2xl shadow-2xl border-2 border-amber-900/20 flex flex-col overflow-hidden transform ${className}`}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
