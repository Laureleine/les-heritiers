// src/components/AdminCorrectionWidget.jsx
// Widget flottant pour le Docte (super_admin) : liste des personnages autorisés à corriger
import React, { useState } from 'react';
import { Crown, CheckCircle, X } from '../config/icons';

export default function AdminCorrectionWidget({ adminQueue, onMarkCorrected }) {
    const [open, setOpen] = useState(false);

    if (!adminQueue || adminQueue.length === 0) return null;

    return (
        <>
            {/* Bouton flottant avec badge */}
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-24 right-4 z-[100] bg-amber-700 hover:bg-amber-800 text-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 transition-all border-2 border-amber-500 animate-fade-in"
                title="Corrections autorisées en attente"
            >
                <Crown size={18} className="text-amber-200" />
                <span className="font-serif font-bold text-sm">Corrections</span>
                <span className="bg-red-500 text-white text-xs font-black rounded-full w-5 h-5 flex items-center justify-center leading-none">
                    {adminQueue.length}
                </span>
            </button>

            {/* Panneau détail */}
            {open && (
                <div className="fixed inset-0 z-[150] flex items-center justify-center bg-stone-900/60 backdrop-blur-sm p-4 animate-fade-in">
                    <div className="bg-[#fdfbf7] max-w-md w-full rounded-2xl shadow-2xl border-2 border-amber-800/30 overflow-hidden animate-fade-in-up">

                        {/* En-tête */}
                        <div className="bg-amber-900 text-amber-50 px-5 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Crown size={18} className="text-amber-300" />
                                <div>
                                    <h3 className="font-serif font-bold">File des Corrections</h3>
                                    <p className="text-amber-300 text-xs italic mt-0.5">
                                        Personnages dont les joueurs ont accordé l'accès
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="hover:text-red-400 bg-amber-800/50 p-1.5 rounded-lg transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Liste */}
                        <div className="divide-y divide-amber-100 max-h-96 overflow-y-auto custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                            {adminQueue.map(char => (
                                <div key={char.id} className="px-5 py-4 flex items-start gap-3">
                                    <div className="flex-1 min-w-0">
                                        <p className="font-serif font-bold text-amber-900 truncate">
                                            {char.nom || 'Sans nom'}
                                        </p>
                                        <p className="text-xs text-stone-500 mt-0.5">
                                            <span className="font-medium text-stone-600">
                                                {char.profiles?.username || 'Joueur inconnu'}
                                            </span>
                                            {char.type_fee && (
                                                <> · <span className="italic">{char.type_fee}</span></>
                                            )}
                                        </p>
                                        {char.correction_reason && (
                                            <p className="text-xs text-stone-500 mt-1 italic line-clamp-2">
                                                {char.correction_reason}
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => onMarkCorrected(char.id)}
                                        className="shrink-0 flex items-center gap-1.5 text-xs font-bold text-green-700 hover:text-green-900 bg-green-50 hover:bg-green-100 border border-green-200 px-2.5 py-1.5 rounded-lg transition-all"
                                        title="Marquer comme corrigé"
                                    >
                                        <CheckCircle size={13} /> Corrigé
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="px-5 py-3 bg-amber-50 border-t border-amber-200 text-xs text-amber-700 italic text-center">
                            Cliquez sur «&nbsp;Corrigé&nbsp;» après avoir édité le personnage en base.
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
