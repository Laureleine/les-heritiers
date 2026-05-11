// src/hooks/useCorrectionCheck.js
// Détecte les personnages nécessitant une correction et gère les autorisations
import { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { getFairyLore } from '../data/FairyLore';
import { showInAppNotification } from '../utils/SystemeServices';

/**
 * Détecte automatiquement si un personnage présente un problème connu
 * (fée sans fiche Docte, champs obligatoires manquants, etc.)
 */
export function detectCharacterIssue(character) {
    if (!character?.type_fee) return null;

    // Vérification 1 : la fée n'a pas de fiche Docte dans FairyLore.js
    const lore = getFairyLore(character.type_fee);
    if (!lore) {
        return `Le journal féérique de ${character.type_fee} est incomplet ou indisponible.`;
    }

    return null; // Aucun problème détecté
}

/**
 * Hook principal pour le système de correction.
 *
 * Côté joueur  : retourne les personnages du joueur qui nécessitent une réponse.
 *                Notifie si un personnage vient d'être corrigé par le Docte.
 * Côté admin   : retourne la liste des personnages autorisés à corriger.
 */
export function useCorrectionCheck(userProfile) {
    const [pendingCorrections, setPendingCorrections] = useState([]);
    const [adminQueue, setAdminQueue] = useState([]);
    const [loading, setLoading] = useState(false);

    const userId = userProfile?.id;
    const isAdmin = userProfile?.profile?.role === 'super_admin';

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

                // ── 3. AUTO-DÉTECTION sur les personnages scellés ────────────────────
                // On récupère aussi correction_done pour exclure les persos déjà traités
                const { data: sealed } = await supabase
                    .from('characters')
                    .select('id, nom, type_fee, needs_correction, correction_authorized, correction_done')
                    .eq('user_id', userId)
                    .eq('statut', 'scelle');

                const autoDetected = (sealed || []).filter(c => {
                    if (c.needs_correction)  return false; // déjà signalé
                    if (c.correction_done)   return false; // déjà corrigé → ne pas re-signaler
                    return detectCharacterIssue(c) !== null;
                });

                // Signaler les auto-détectés en DB
                for (const char of autoDetected) {
                    const reason = detectCharacterIssue(char);
                    await supabase.from('characters').update({
                        needs_correction: true,
                        correction_reason: reason,
                    }).eq('id', char.id);
                    char.correction_reason = reason;
                }

                setPendingCorrections([
                    ...(myChars || []),
                    ...autoDetected,
                ]);

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
