// src/components/CorrectionRequestModal.jsx
// Modale affichée au joueur quand l'un de ses personnages présente un problème
import React, { useState } from 'react';
import { Crown, CheckCircle, X } from '../config/icons';

export default function CorrectionRequestModal({ corrections, onRespond }) {
    const [current, setCurrent] = useState(0);
    const [responding, setResponding] = useState(false);

    if (!corrections || corrections.length === 0) return null;

    const character = corrections[current];

    const handleRespond = async (authorized) => {
        setResponding(true);
        await onRespond(character.id, authorized);
        setResponding(false);

        // S'il reste des personnages à traiter, passer au suivant
        // (le parent retirera ce perso de la liste, donc current restera correct
        //  ou passera hors bornes → le composant disparaîtra)
        setCurrent(0);
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-stone-900/70 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-[#fdfbf7] max-w-lg w-full rounded-2xl shadow-2xl border-2 border-amber-800/30 overflow-hidden animate-fade-in-up">

                {/* En-tête */}
                <div className="bg-amber-900 text-amber-50 px-6 py-4 flex items-center gap-3">
                    <Crown size={22} className="text-amber-300 shrink-0" />
                    <div>
                        <h2 className="font-serif font-bold text-lg leading-tight">
                            Message du Docte
                        </h2>
                        <p className="text-amber-300 text-xs mt-0.5 italic">
                            Cercle des Initiés · Communication confidentielle
                        </p>
                    </div>
                    {corrections.length > 1 && (
                        <span className="ml-auto bg-amber-700 text-amber-100 text-xs font-bold px-2 py-0.5 rounded-full">
                            {current + 1} / {corrections.length}
                        </span>
                    )}
                </div>

                {/* Corps */}
                <div className="p-6 space-y-5 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">

                    <p className="text-stone-700 font-serif text-sm leading-relaxed italic border-l-4 border-amber-400 pl-4 py-1 bg-amber-50 rounded-r">
                        « Votre serviteur a examiné les archives de votre Héritier{' '}
                        <strong className="font-bold not-italic text-amber-900">
                            {character.nom || 'Sans nom'}
                        </strong>{' '}
                        et y a découvert une irrégularité qui mérite correction. »
                    </p>

                    <div className="bg-stone-100 rounded-xl p-4 border border-stone-200">
                        <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
                            Nature du problème
                        </p>
                        <p className="text-sm text-stone-700 leading-relaxed">
                            {character.correction_reason ||
                                'Une anomalie a été détectée dans la constitution de ce personnage.'}
                        </p>
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed">
                        Le Docte demande humblement l'autorisation d'intervenir sur la fiche de{' '}
                        <span className="font-semibold text-amber-900">{character.nom || 'votre Héritier'}</span>{' '}
                        afin de rétablir l'équilibre des Sceaux. Votre consentement est requis.
                    </p>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800 italic">
                        🗝️ Le Docte s'engage à ne modifier que ce qui est strictement nécessaire,
                        sans altérer l'âme ni l'histoire de votre Héritier.
                    </div>
                </div>

                {/* Pied de page — boutons */}
                <div className="px-6 pb-6 flex gap-3">
                    <button
                        onClick={() => handleRespond(false)}
                        disabled={responding}
                        className="flex-1 py-2.5 rounded-xl border-2 border-stone-300 text-stone-600 font-bold text-sm hover:border-stone-400 hover:bg-stone-50 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        <X size={16} /> Refuser pour l'instant
                    </button>
                    <button
                        onClick={() => handleRespond(true)}
                        disabled={responding}
                        className="flex-1 py-2.5 rounded-xl bg-amber-700 text-white font-bold text-sm hover:bg-amber-800 transition-all disabled:opacity-50 shadow-md flex items-center justify-center gap-2"
                    >
                        <CheckCircle size={16} /> Autoriser la correction
                    </button>
                </div>
            </div>
        </div>
    );
}
