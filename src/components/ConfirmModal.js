// src/components/ConfirmModal.js
// 9.6.0
// 14.3.0

import React from 'react';
import { HelpCircle, X, Check } from 'lucide-react';

export default function ConfirmModal({ isOpen, title, message, onConfirm, onCancel, confirmText = "Confirmer", cancelText = "Annuler" }) {
  if (!isOpen) return null;

  return (
    // ✨ UX NOTE : Pas de 'onClick={onCancel}' sur l'overlay sombre (fond) de manière délibérée !
    // Cela force l'utilisateur à choisir consciemment une action et évite les annulations accidentelles.
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-[#fdfbf7] max-w-md w-full rounded-xl shadow-2xl border-2 border-amber-900/20 overflow-hidden transform animate-fade-in-up">
        
        {/* En-tête de la modale */}
        <div className="bg-amber-900 text-amber-50 p-4 flex items-center gap-3 border-b-4 border-amber-700">
          <HelpCircle size={24} className="text-amber-300" />
          <h3 className="font-serif font-bold text-lg">{title || "Requête des Gardiens"}</h3>
        </div>

        {/* Message */}
        <div className="p-6 font-serif text-stone-700 text-center text-lg leading-relaxed">
          {/* ✨ FIX : whitespace-pre-wrap permet au HTML d'interpréter les sauts de ligne (\n) natifs du texte ! */}
          <p className="whitespace-pre-wrap">{message}</p>
        </div>
        
        {/* Boutons */}
        <div className="flex justify-end gap-3 p-4 bg-stone-100 border-t border-stone-200">
          <button 
            onClick={onCancel} 
            className="px-4 py-2 flex items-center gap-2 text-stone-600 hover:bg-stone-200 rounded-lg font-bold transition-colors font-serif uppercase tracking-wide text-sm"
          >
            <X size={16} /> {cancelText}
          </button>
          <button 
            onClick={onConfirm} 
            className="px-4 py-2 flex items-center gap-2 bg-amber-700 text-white hover:bg-amber-800 rounded-lg font-bold shadow-md transition-colors font-serif uppercase tracking-wide text-sm"
          >
            <Check size={16} /> {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}