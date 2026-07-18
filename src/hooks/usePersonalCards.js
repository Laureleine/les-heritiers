// src/hooks/usePersonalCards.js
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../config/supabase';

async function fetchCards(table, grants) {
    if (!grants.length) return [];
    const ids = grants.map(g => g.card_id);
    const { data } = await supabase.from(table).select('*').in('id', ids);
    return (data || []).map(card => ({
        ...card,
        _grant: grants.find(g => g.card_id === card.id),
    }));
}

async function fetchPersonalCards(userId) {
    if (!userId) return { assets: [], powers: [], capacites: [], socialItems: [] };

    const { data: grants } = await supabase
        .from('personal_card_grants')
        .select('id, card_id, card_type, cost_xp, cost_fortune, cost_pp, granted_by')
        .eq('granted_to', userId)
        .eq('status', 'accepted');

    if (!grants?.length) return { assets: [], powers: [], capacites: [], socialItems: [] };

    const byType = { fairy_assets: [], fairy_powers: [], fairy_capacites: [], social_items: [] };
    grants.forEach(g => { if (byType[g.card_type]) byType[g.card_type].push(g); });

    const [assets, powers, capacites, socialItems] = await Promise.all([
        fetchCards('fairy_assets', byType.fairy_assets),
        fetchCards('fairy_powers', byType.fairy_powers),
        fetchCards('fairy_capacites', byType.fairy_capacites),
        fetchCards('social_items', byType.social_items),
    ]);

    return { assets, powers, capacites, socialItems };
}

export function usePersonalCards(userId) {
    return useQuery({
        queryKey: ['personalCards', userId],
        queryFn: () => fetchPersonalCards(userId),
        enabled: !!userId,
        staleTime: 5 * 60 * 1000,
        gcTime: 15 * 60 * 1000,
    });
}
