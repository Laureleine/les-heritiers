// src/components/cercle/TabCartesPerso.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../../config/supabase';
import DistributeCardModal from './DistributeCardModal';
import { Send } from '../../config/icons';

const CARD_TABLES = [
    { key: 'fairy_assets', label: 'Atouts' },
    { key: 'fairy_powers', label: 'Pouvoirs' },
    { key: 'fairy_capacites', label: 'Capacités' },
    { key: 'social_items', label: 'Vie Sociale' },
];

export default function TabCartesPerso({ docteId, cercleId, activeMembers }) {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [distributing, setDistributing] = useState(null); // { card, cardType }

    useEffect(() => {
        if (!docteId) return;
        const fetchAll = async () => {
            setLoading(true);
            const results = await Promise.all(
                CARD_TABLES.map(async ({ key, label }) => {
                    const { data } = await supabase
                        .from(key)
                        .select('id, nom, name, description, effets')
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
                <div key={`${card._type}-${card.id}`} className="bg-white border border-violet-100 rounded-xl p-4 flex items-start justify-between gap-3 shadow-sm hover:border-violet-300 transition-colors">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-violet-100 text-violet-700 border border-violet-200 font-bold uppercase tracking-wide">
                                ✦ {card._typeLabel}
                            </span>
                        </div>
                        <h4 className="font-serif font-bold text-stone-800 text-sm">{card.nom || card.name}</h4>
                        {card.description && (
                            <p className="text-xs text-stone-500 mt-0.5 line-clamp-2">{card.description}</p>
                        )}
                    </div>
                    <button
                        onClick={() => setDistributing({ card, cardType: card._type })}
                        className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                    >
                        <Send size={12} /> Distribuer
                    </button>
                </div>
            ))}

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
