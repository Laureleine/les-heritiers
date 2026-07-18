// src/components/PendingValidationsAlert.jsx
import React from 'react';
import { ShieldCheck, X, ExternalLink } from '../config/icons';

export default function PendingValidationsAlert({ count, onNavigate, onDismiss }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4">
      <div className="bg-[#fdfbf7] max-w-sm w-full rounded-2xl shadow-2xl border-2 border-amber-900/20 overflow-hidden">

        {/* En-tête */}
        <div className="bg-amber-900 text-amber-50 px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck size={22} className="text-amber-300" />
            <span className="font-serif font-bold text-lg">Bureau des Validations</span>
          </div>
          <button
            onClick={onDismiss}
            className="hover:text-red-300 transition-colors p-1 rounded"
            aria-label="Fermer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Corps */}
        <div className="px-6 py-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-300 mb-4">
            <span className="text-3xl font-bold text-amber-900 font-serif">{count}</span>
          </div>
          <p className="text-stone-700 font-serif text-base leading-relaxed">
            {count === 1
              ? 'Une proposition attend votre jugement.'
              : `${count} propositions attendent votre jugement.`}
          </p>
          <p className="text-stone-400 text-sm mt-1 italic">
            Les Héritiers patientent, Gardien.
          </p>
        </div>

        {/* Boutons */}
        <div className="px-6 pb-6 flex flex-col gap-3">
          <button
            onClick={onNavigate}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-800 hover:bg-amber-900 text-white font-bold font-serif rounded-xl shadow transition-colors"
          >
            <ExternalLink size={16} /> Aller aux Validations
          </button>
          <button
            onClick={onDismiss}
            className="w-full px-4 py-2 text-stone-500 hover:text-stone-700 hover:bg-stone-100 rounded-xl text-sm font-medium transition-colors"
          >
            Plus tard
          </button>
        </div>

      </div>
    </div>
  );
}
