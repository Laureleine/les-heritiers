// src/hooks/usePendingGrants.js
import { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';

export function usePendingGrants(userProfile) {
    const [pendingGrants, setPendingGrants] = useState([]);

    useEffect(() => {
        const userId = userProfile?.id;
        if (!userId) return;
        supabase
            .from('personal_card_grants')
            .select('id, card_id, card_type, cost_xp, cost_fortune, cost_pp, hide_effects_until_accepted, cercle_id')
            .eq('granted_to', userId)
            .eq('status', 'pending')
            .then(({ data }) => { setPendingGrants(data || []); });
    }, [userProfile]);

    return { pendingGrants, pendingCount: pendingGrants.length, setPendingGrants };
}
