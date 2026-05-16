// src/hooks/useCorrectionCheck.js
// Gère les autorisations de correction de personnages
import { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';
import { isSuperAdmin } from '../utils/authRoles';

export function useCorrectionCheck(userProfile) {
    const [pendingCorrections, setPendingCorrections] = useState([]);
    const [adminQueue, setAdminQueue] = useState([]);
    const [loading, setLoading] = useState(false);

    const userId = userProfile?.id;
    const isAdmin = isSuperAdmin(userProfile);

    useEffect(() => {
        if (!userId) return;

        const checkCorrections = async () => {
            setLoading(true);
            try {

                // ── 1. NOTIFICATION : personnages récemment corrigés par le Docte ──────
                // correction_done = true signale que le Docte vient de corriger.
                // On consomme le flag immédiatement pour ne notifier qu'une seule fois.
                const { data: corrected } = await supabase
                    .from('characters')
                    .select('id, nom')
                    .eq('user_id', userId)
                    .eq('correction_done', true);

                if (corrected?.length > 0) {
                    // Notifier le joueur pour chaque personnage corrigé
                    corrected.forEach(c => {
                        showInAppNotification(
                            `✨ Bonne nouvelle ! "${c.nom}" a été corrigé par le Docte.`,
                            'success'
                        );
                    });
                    // Consommer le flag (ne plus montrer la notification au prochain login)
                    await supabase
                        .from('characters')
                        .update({ correction_done: false })
                        .in('id', corrected.map(c => c.id));
                }

                // ── 2. CORRECTIONS EN ATTENTE DE RÉPONSE du joueur ───────────────────
                const { data: myChars } = await supabase
                    .from('characters')
                    .select('id, nom, type_fee, correction_reason')
                    .eq('user_id', userId)
                    .eq('needs_correction', true)
                    .is('correction_authorized', null);

                setPendingCorrections(myChars || []);

                // ── 4. FILE D'ATTENTE ADMIN ───────────────────────────────────────────
                if (isAdmin) {
                    const { data: queue } = await supabase
                        .from('characters')
                        .select('id, nom, type_fee, correction_reason, profiles(username)')
                        .eq('needs_correction', true)
                        .eq('correction_authorized', true);

                    setAdminQueue(queue || []);
                }

            } catch (err) {
                console.error('❌ useCorrectionCheck :', err);
            } finally {
                setLoading(false);
            }
        };

        checkCorrections();
    }, [userId, isAdmin]);

    /** Le joueur répond : true = autorise, false = refuse pour l'instant */
    const respondToCorrection = async (characterId, authorized) => {
        await supabase.from('characters').update({
            correction_authorized: authorized,
            correction_responded_at: new Date().toISOString(),
        }).eq('id', characterId);

        setPendingCorrections(prev => prev.filter(c => c.id !== characterId));
    };

    /**
     * Le Docte marque un personnage comme corrigé.
     * → remet tous les flags à zéro
     * → lève correction_done = true pour déclencher la notification joueur au prochain login
     */
    const markCorrected = async (characterId) => {
        await supabase.from('characters').update({
            needs_correction: false,
            correction_reason: null,
            correction_authorized: null,
            correction_responded_at: null,
            correction_done: true,   // ← le joueur sera notifié à son prochain login
        }).eq('id', characterId);

        setAdminQueue(prev => prev.filter(c => c.id !== characterId));
    };

    /** Le Docte signale manuellement un personnage */
    const flagCharacter = async (characterId, reason) => {
        await supabase.from('characters').update({
            needs_correction: true,
            correction_reason: reason,
            correction_authorized: null,
            correction_responded_at: null,
            correction_done: false,
        }).eq('id', characterId);
    };

    return {
        pendingCorrections,
        adminQueue,
        loading,
        respondToCorrection,
        markCorrected,
        flagCharacter,
    };
}
