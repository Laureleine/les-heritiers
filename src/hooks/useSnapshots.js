// src/hooks/useSnapshots.js
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';
import { showInAppNotification } from '../utils/SystemeServices';

export function useSnapshots(characterId, userId) {
    const [snapshots, setSnapshots] = useState([]);
    const [loadingSnapshots, setLoadingSnapshots] = useState(false);

    const fetchSnapshots = useCallback(async () => {
        if (!characterId) return;
        setLoadingSnapshots(true);
        try {
            const { data, error } = await supabase
                .from('character_snapshots')
                .select('*')
                .eq('character_id', characterId)
                .order('created_at', { ascending: false });
            if (error) throw error;
            setSnapshots(data || []);
        } catch (err) {
            console.error("Erreur chargement snapshots:", err);
        } finally {
            setLoadingSnapshots(false);
        }
    }, [characterId]);

    useEffect(() => {
        fetchSnapshots();
    }, [fetchSnapshots]);

    const handleTakeSnapshot = async (photoTitle, character) => {
        if (!photoTitle) {
            showInAppNotification("Veuillez donner un titre à cette archive.", "warning");
            return false;
        }
        try {
            const snapshotData = {
                character_id: character.id,
                user_id: character.userId || character.user_id,
                titre: photoTitle,
                data_snapshot: character.data || {},
                stats_snapshot: {
                    caracteristiques: character.caracteristiques,
                    competencesLibres: character.competencesLibres,
                    competencesFutiles: character.competencesFutiles,
                    pouvoirs: character.pouvoirs,
                    atouts: character.atouts,
                    vieSociale: character.vieSociale,
                    fortune: character.fortune
                }
            };
            const { error } = await supabase.from('character_snapshots').insert([snapshotData]);
            if (error) throw error;
            
            showInAppNotification(`L'archive "${photoTitle}" a été gravée dans le marbre.`, "success");
            await fetchSnapshots();
            return true;
        } catch (err) {
            showInAppNotification("Erreur lors de l'archivage temporel : " + err.message, "error");
            return false;
        }
    };

    const handleCloneSnapshot = async (snapshotId, snapshotTitre, characterNom) => {
        try {
            const { error } = await supabase.rpc('clone_snapshot_to_character', {
                p_snapshot_id: snapshotId,
                p_new_name: `${characterNom} (Archive : ${snapshotTitre})`
            });
            if (error) throw error;
            showInAppNotification(`✨ L'archive temporelle "${snapshotTitre}" a été ressuscitée !`, "success");
            return true;
        } catch (err) {
            showInAppNotification("Erreur lors de la résurrection de l'archive : " + err.message, "error");
            return false;
        }
    };

    return {
        snapshots,
        loadingSnapshots,
        fetchSnapshots,
        handleTakeSnapshot,
        handleCloneSnapshot
    };
}