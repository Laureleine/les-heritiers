// src/components/ConfirmModal.js

import React from 'react';
import { HelpCircle, X, Check, AlertTriangle, AlertCircle } from '../config/icons';

/**
 * Modale de confirmation générique.
 *
 * Props optionnelles pour le scellage (et tout autre usage) :
 *   errors   {string[]} — Erreurs bloquantes. Quand présentes : bouton "Confirmer" masqué.
 *   warnings {string[]} — Avertissements non-bloquants. Affichés en jaune, confirmation toujours possible.
 */
export default function ConfirmModal({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel,
    confirmText = "Confirmer",
    cancelText  = "Annuler",
    errors      = [],
    warnings    = [],
}) {
    if (!isOpen) return null;

    const hasErrors   = errors.length > 0;
    const hasWarnings = warnings.length > 0;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-[#fdfbf7] max-w-md w-full rounded-xl shadow-2xl border-2 border-amber-900/20 overflow-hidden transform animate-fade-in-up">

                {/* En-tête */}
                <div className={`text-amber-50 p-4 flex items-center gap-3 border-b-4 ${hasErrors ? 'bg-red-800 border-red-700' : 'bg-amber-900 border-amber-700'}`}>
                    {hasErrors
                        ? <AlertCircle size={24} className="text-red-300" />
                        : <HelpCircle size={24} className="text-amber-300" />
                    }
                    <h3 className="font-serif font-bold text-lg">{title || "Requête des Gardiens"}</h3>
                </div>

                <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto">

                    {/* Liste des erreurs bloquantes */}
                    {hasErrors && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3 space-y-1.5">
                            <p className="text-xs font-black text-red-700 uppercase tracking-widest flex items-center gap-1.5">
                                <AlertCircle size={13} /> Corrections requises
                            </p>
                            <ul className="space-y-1">
                                {errors.map((e, i) => (
                                    <li key={i} className="text-sm text-red-800 flex items-start gap-2">
                                        <span className="shrink-0 mt-0.5 text-red-500">✗</span>
                                        {e}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Liste des avertissements */}
                    {hasWarnings && (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 space-y-1.5">
                            <p className="text-xs font-black text-amber-700 uppercase tracking-widest flex items-center gap-1.5">
                                <AlertTriangle size={13} /> Attention
                            </p>
                            <ul className="space-y-1">
                                {warnings.map((w, i) => (
                                    <li key={i} className="text-sm text-amber-800 flex items-start gap-2">
                                        <span className="shrink-0 mt-0.5 text-amber-500">⚠</span>
                                        {w}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Message principal */}
                    {message && (
                        <p className="font-serif text-stone-700 text-center text-lg leading-relaxed whitespace-pre-wrap">
                            {message}
                        </p>
                    )}
                </div>

                {/* Boutons */}
                <div className="flex justify-end gap-3 p-4 bg-stone-100 border-t border-stone-200">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 flex items-center gap-2 text-stone-600 hover:bg-stone-200 rounded-lg font-bold transition-colors font-serif uppercase tracking-wide text-sm"
                    >
                        <X size={16} /> {hasErrors ? 'Corriger' : cancelText}
                    </button>
                    {!hasErrors && (
                        <button
                            onClick={onConfirm}
                            className="px-4 py-2 flex items-center gap-2 bg-amber-700 text-white hover:bg-amber-800 rounded-lg font-bold shadow-md transition-colors font-serif uppercase tracking-wide text-sm"
                        >
                            <Check size={16} /> {confirmText}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
