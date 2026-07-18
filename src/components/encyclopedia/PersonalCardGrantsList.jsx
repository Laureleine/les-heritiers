// src/components/encyclopedia/PersonalCardGrantsList.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../../config/supabase';

const STATUS_LABEL = { pending: 'En attente', accepted: 'Accepté', rejected: 'Refusé' };
const STATUS_COLOR = {
    pending: 'bg-amber-50 text-amber-700 border-amber-200',
    accepted: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    rejected: 'bg-red-50 text-red-600 border-red-200',
};

export default function PersonalCardGrantsList({ cardId, cardType }) {
    const [grants, setGrants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!cardId || !cardType) return;
        supabase
            .from('personal_card_grants')
            .select('*, profiles:granted_to(username)')
            .eq('card_id', cardId)
            .eq('card_type', cardType)
            .order('created_at', { ascending: false })
            .then(({ data }) => { setGrants(data || []); setLoading(false); });
    }, [cardId, cardType]);

    if (loading) return <p className="text-xs text-stone-400 italic">Chargement des distributions...</p>;
    if (grants.length === 0) return <p className="text-xs text-stone-400 italic">Aucune distribution pour l'instant.</p>;

    return (
        <div className="space-y-2">
            {grants.map(g => (
                <div key={g.id} className="flex items-center justify-between gap-2 text-sm">
                    <span className="font-bold text-stone-700">{g.profiles?.username || '—'}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase tracking-wide ${STATUS_COLOR[g.status] || 'bg-stone-50 text-stone-500 border-stone-200'}`}>
                        {STATUS_LABEL[g.status] || g.status}
                    </span>
                </div>
            ))}
        </div>
    );
}
