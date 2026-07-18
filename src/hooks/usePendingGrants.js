// src/hooks/usePendingGrants.js
import { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';

const SESSION_KEY = 'pending_grants_dismissed';

export function usePendingGrants(userProfile) {
    const [pendingGrants, setPendingGrants] = useState([]);
    const [dismissed, setDismissed] = useState(() => sessionStorage.getItem(SESSION_KEY) === '1');

    useEffect(() => {
        const userId = userProfile?.id;
        if (!userId || dismissed) return;
        supabase
            .from('personal_card_grants')
            .select('id, card_id, card_type, cost_xp, cost_fortune, cost_pp, hide_effects_until_accepted')
            .eq('granted_to', userId)
            .eq('status', 'pending')
            .then(({ data }) => { if (data?.length) setPendingGrants(data); });
    }, [userProfile, dismissed]);

    const dismiss = () => { sessionStorage.setItem(SESSION_KEY, '1'); setDismissed(true); };
    const isVisible = !dismissed && pendingGrants.length > 0;

    return { pendingGrants, pendingCount: pendingGrants.length, isVisible, dismiss, setPendingGrants };
}
