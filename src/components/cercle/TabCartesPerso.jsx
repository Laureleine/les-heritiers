// src/components/cercle/TabCartesPerso.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../../config/supabase';
import DistributeCardModal from './DistributeCardModal';
import { Send, X } from '../../config/icons';

const CARD_TABLES = [
    { key: 'fairy_assets',    label: 'Atouts',      extraCols: ', effets, cost_xp, cost_fortune, cost_pp, hide_effects_until_accepted, creator_id' },
    { key: 'fairy_powers',    label: 'Pouvoirs',    extraCols: ', creator_id' },
    { key: 'fairy_capacites', label: 'Capacités',   extraCols: ', creator_id' },
    { key: 'social_items',    label: 'Vie Sociale', extraCols: ', creator_id' },
];

function CardDetailModal({ card, onClose }) {
    return (
        <div className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden" onClick={e => e.stopPropagation()}>
                <div className="p-5 border-b border-stone-100 flex justify-between items-center bg-violet-50">
                    <div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-violet-100 text-violet-700 border border-violet-200 font-bold uppercase tracking-wide">
                            ✦ {card._typeLabel}
                        </span>
                        <h2 className="text-lg font-serif font-bold text-violet-900 mt-1">{card.nom}</h2>
                    </div>
                    <button onClick={onClose} className="text-stone-400 hover:text-stone-600 p-1"><X size={20} /></button>
                </div>
                <div className="p-5 space-y-3">
                    {card.description && (
                        <p className="text-sm text-stone-600 italic">{card.description}</p>
                    )}
                    {card.effets && (
                        <div className="bg-violet-50 border border-violet-200 rounded-lg p-3">
                            <p className="text-xs font-bold text-violet-700 uppercase tracking-wide mb-1">Effets</p>
                            <p className="text-sm text-stone-700 whitespace-pre-wrap">{card.effets}</p>
                        </div>
                    )}
                    {!card.description && !card.effets && (
                        <p className="text-sm text-stone-400 italic">Aucun effet renseigné.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function TabCartesPerso({ docteId, cercleId, activeMembers }) {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [distributing, setDistributing] = useState(null);
    const [viewing, setViewing] = useState(null);

    useEffect(() => {
        if (!docteId) return;
        const fetchAll = async () => {
            setLoading(true);
            const results = await Promise.all(
                CARD_TABLES.map(async ({ key, label, extraCols }) => {
                    const { data } = await supabase
                        .from(key)
                        .select(`id, nom, description${extraCols}`)
                        .eq('creator_id', docteId);
                    return (data || []).map(c => ({ ...c, _type: key, _typeLabel: label }));
                })
            );
            setCards(results.flat());
            setLoading(false);
        };
        fetchAll();
    }, [docteId]);

    if (loading) return <p className="text-sm text-stone-400 italic p-4">Chargement de vos cartes...</p>;
    if (cards.length === 0) return (
        <div className="p-6 text-center">
            <p className="text-stone-500 text-sm italic">Vous n'avez pas encore créé de cartes personnelles.</p>
            <p className="text-xs text-stone-400 mt-1">Forgez-en une dans l'Encyclopédie en activant le mode ✦ Carte Personnelle.</p>
        </div>
    );

    return (
        <div className="space-y-3">
            {cards.map(card => (
                <div
                    key={`${card._type}-${card.id}`}
                    className="bg-white border border-violet-100 rounded-xl p-4 flex items-start justify-between gap-3 shadow-sm hover:border-violet-300 transition-colors cursor-pointer"
                    onClick={() => setViewing(card)}
                >
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-violet-100 text-violet-700 border border-violet-200 font-bold uppercase tracking-wide">
                                ✦ {card._typeLabel}
                            </span>
                        </div>
                        <h4 className="font-serif font-bold text-stone-800 text-sm">{card.nom}</h4>
                        {card.description && (
                            <p className="text-xs text-stone-500 mt-0.5 line-clamp-2">{card.description}</p>
                        )}
                    </div>
                    <button
                        onClick={e => { e.stopPropagation(); setDistributing({ card, cardType: card._type }); }}
                        className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                    >
                        <Send size={12} /> Distribuer
                    </button>
                </div>
            ))}

            {viewing && (
                <CardDetailModal card={viewing} onClose={() => setViewing(null)} />
            )}

            {distributing && (
                <DistributeCardModal
                    card={distributing.card}
                    cardType={distributing.cardType}
                    cercleId={cercleId}
                    members={activeMembers}
                    onClose={() => setDistributing(null)}
                    onSuccess={() => setDistributing(null)}
                />
            )}
        </div>
    );
}
