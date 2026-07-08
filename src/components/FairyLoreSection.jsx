// src/components/FairyLoreSection.jsx
// Fiche complète du type de fée — réservé aux Initiés (données Supabase)
import React, { useState } from 'react';
import { useGameDataContext } from '../context/GameDataContext';

const Section = ({ titre, children, defaultOpen = false }) => {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <div className="border border-amber-200 rounded-lg overflow-hidden mb-2">
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full flex justify-between items-center px-3 py-2 bg-amber-50 hover:bg-amber-100 transition-colors text-left"
            >
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">{titre}</span>
                <span className="text-amber-600 text-xs">{open ? '▲' : '▼'}</span>
            </button>
            {open && <div className="px-3 py-2 text-xs text-stone-700 leading-relaxed bg-white">{children}</div>}
        </div>
    );
};

const Bloc = ({ label, children }) => (
    <div className="mb-2">
        {label && <span className="font-bold text-amber-900">{label} </span>}
        <span>{children}</span>
    </div>
);

export default function FairyLoreSection({ fairyName }) {
    const { gameData } = useGameDataContext();
    const fairy = gameData.fairyTypes?.find(f => f.name === fairyName);

    const hasLore = fairy && (
        fairy.lore_apparence || fairy.lore_taille || fairy.lore_mode_reproduction ||
        fairy.lore_habitat || fairy.lore_caractere || fairy.lore_note_docte ||
        fairy.lore_personnages_celebres?.length > 0
    );

    if (!hasLore) return (
        <div className="mt-4 p-3 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-400 italic text-center">
            Fiche complète non disponible pour ce type.
        </div>
    );

    return (
        <div className="mt-4 border-t-2 border-amber-300 pt-4">
            <div className="flex items-center gap-2 mb-3">
                <span className="text-amber-500" aria-hidden="true">🗝️</span>
                <h4 className="text-xs font-bold uppercase tracking-widest text-amber-700">
                    Fiche du Docte — Cercle des Initiés
                </h4>
                <div className="flex-1 h-px bg-amber-200" />
            </div>

            {(fairy.lore_apparence || fairy.lore_taille || fairy.lore_mode_reproduction || fairy.lore_habitat) && (
                <Section titre="Apparence & Nature" defaultOpen={true}>
                    {fairy.lore_apparence && <Bloc label="Apparence :">{fairy.lore_apparence}</Bloc>}
                    {fairy.lore_taille && <Bloc label="Taille :">{fairy.lore_taille}</Bloc>}
                    {fairy.lore_mode_reproduction && <Bloc label="Reproduction :">{fairy.lore_mode_reproduction}</Bloc>}
                    {fairy.lore_habitat && <Bloc label="Habitat :">{fairy.lore_habitat}</Bloc>}
                </Section>
            )}

            {fairy.lore_caractere && (
                <Section titre="Caractère">
                    <p>{fairy.lore_caractere}</p>
                    {fairy.lore_personnages_celebres?.length > 0 && (
                        <p className="mt-2 text-stone-500 italic">
                            <strong className="text-stone-600 not-italic">Personnages célèbres :</strong>{' '}
                            {fairy.lore_personnages_celebres.join(' • ')}
                        </p>
                    )}
                </Section>
            )}

            {fairy.lore_note_docte && (
                <div className="mt-2 p-2 bg-amber-50 border-l-2 border-amber-400 text-xs italic text-stone-600 rounded-r">
                    <span className="font-bold text-amber-700 not-italic">Note du Docte : </span>
                    {fairy.lore_note_docte}
                </div>
            )}
        </div>
    );
}
