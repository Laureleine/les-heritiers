// src/components/FairyLoreSection.jsx
// Fiche complète du type de fée — réservé aux Initiés
import React, { useState } from 'react';
import { getFairyLore } from '../data/FairyLore';

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

const Liste = ({ items }) => (
    <ul className="list-none space-y-1.5">
        {(items || []).map((item, i) => (
            <li key={i} className="flex gap-1.5">
                <span className="text-amber-500 mt-0.5 shrink-0">◆</span>
                <span>{typeof item === 'object' ? (
                    <><strong className="text-stone-800">{item.nom}</strong> : {item.texte}</>
                ) : item}</span>
            </li>
        ))}
    </ul>
);

export default function FairyLoreSection({ fairyName }) {
    const lore = getFairyLore(fairyName);

    if (!lore) return (
        <div className="mt-4 p-3 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-400 italic text-center">
            Fiche complète non disponible pour ce type.
        </div>
    );

    return (
        <div className="mt-4 border-t-2 border-amber-300 pt-4">
            {/* En-tête Initiés */}
            <div className="flex items-center gap-2 mb-3">
                <span className="text-amber-500">🗝️</span>
                <h4 className="text-xs font-bold uppercase tracking-widest text-amber-700">
                    Fiche du Docte — Cercle des Initiés
                </h4>
                <div className="flex-1 h-px bg-amber-200" />
            </div>

            {/* Description narrative */}
            {lore.apparence && (
                <Section titre="Apparence & Nature" defaultOpen={true}>
                    <Bloc label="Apparence :">{lore.apparence}</Bloc>
                    {lore.taille && <Bloc label="Taille :">{lore.taille}</Bloc>}
                    {lore.modeReproduction && <Bloc label="Reproduction :">{lore.modeReproduction}</Bloc>}
                    {lore.habitat && <Bloc label="Habitat :">{lore.habitat}</Bloc>}
                </Section>
            )}

            {lore.caractere && (
                <Section titre="Caractère">
                    <p>{lore.caractere}</p>
                    {lore.personnagesCelebres?.length > 0 && (
                        <p className="mt-2 text-stone-500 italic">
                            <strong className="text-stone-600 not-italic">Personnages célèbres :</strong>{' '}
                            {lore.personnagesCelebres.join(' • ')}
                        </p>
                    )}
                </Section>
            )}

            {/* Capacités naturelles */}
            {lore.capacites?.length > 0 && (
                <Section titre="Capacités naturelles (démasqué)">
                    <Liste items={lore.capacites} />
                </Section>
            )}

            {/* Pouvoirs */}
            {lore.pouvoirs && (
                <Section titre="Pouvoirs féériques">
                    {lore.pouvoirs.masques?.length > 0 && (
                        <Bloc label="Masqués :">
                            {lore.pouvoirs.masques.join(', ')}
                        </Bloc>
                    )}
                    {lore.pouvoirs.demasques?.length > 0 && (
                        <Bloc label="Démasqués :">
                            {lore.pouvoirs.demasques.join(', ')}
                        </Bloc>
                    )}
                    {lore.pouvoirs.profond && (
                        <Bloc label="Pouvoir profond :">
                            <span className="text-purple-700 font-semibold">{lore.pouvoirs.profond}</span>
                        </Bloc>
                    )}
                    {lore.pouvoirs.legendaire && (
                        <Bloc label="Pouvoir légendaire :">
                            <span className="text-red-700 font-semibold">{lore.pouvoirs.legendaire}</span>
                        </Bloc>
                    )}
                </Section>
            )}

            {/* Atouts féériques */}
            {lore.atouts?.length > 0 && (
                <Section titre="Atouts féériques">
                    <Liste items={lore.atouts} />
                </Section>
            )}

            {/* Compétences de prédilection */}
            {(lore.competencesUtiles || lore.competencesFutiles) && (
                <Section titre="Compétences de prédilection">
                    {lore.competencesUtiles?.length > 0 && (
                        <Bloc label="Utiles :">
                            {lore.competencesUtiles.join(', ')}
                        </Bloc>
                    )}
                    {lore.competencesFutiles?.length > 0 && (
                        <Bloc label="Futiles :">
                            {lore.competencesFutiles.join(', ')}
                        </Bloc>
                    )}
                </Section>
            )}

            {/* Note du Docte */}
            {lore.noteDocte && (
                <div className="mt-2 p-2 bg-amber-50 border-l-2 border-amber-400 text-xs italic text-stone-600 rounded-r">
                    <span className="font-bold text-amber-700 not-italic">Note du Docte : </span>
                    {lore.noteDocte}
                </div>
            )}
        </div>
    );
}
