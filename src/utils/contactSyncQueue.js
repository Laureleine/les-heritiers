// src/utils/contactSyncQueue.js
// Module de synchronisation des contacts vers le Grimoire Personnel
// Permet de stocker les actions en attente et de les exécuter à la sauvegarde

import { supabase } from '../config/supabase';
import { showInAppNotification } from './SystemeServices';

// Queue globale des actions en attente
let pendingQueue = [];

/**
 * Ajoute une action de synchronisation à la queue
 * @param {Object} item - L'item contact
 * @param {string} action - 'add' ou 'remove'
 * @param {boolean} isMultiple - Si le contact est un achat multiple
 */
export const queueContactSync = (item, action, isMultiple = false, itemType = 'contact') => {
    pendingQueue.push({ item, action, isMultiple, itemType });

    if (action === 'add') {
        showInAppNotification(`📓 ${item.nom} sera ajouté au Grimoire à la sauvegarde`, "info");
    } else {
        showInAppNotification(`📓 ${item.nom} sera retiré du Grimoire à la sauvegarde`, "info");
    }
};

/**
 * Exécute toutes les actions en attente et vide la queue
 * @param {string} characterId - ID du personnage
 * @param {string} userId - ID de l'utilisateur
 */
export const flushContactsToGrimoire = async (characterId, userId) => {
    if (!characterId || !userId) return;

    const queue = [...pendingQueue];
    pendingQueue = []; // On vide la queue

    if (queue.length === 0) return;

    const adds = queue.filter(({ action }) => action === 'add');
    const removes = queue.filter(({ action }) => action === 'remove');

    // ── BATCH ADD ───────────────────────────────────────────────────────────
    if (adds.length > 0) {
        try {
            const singlesToCheck = adds.filter(({ isMultiple }) => !isMultiple);

            // Vérifier tous les doublons en une requête
            const existingNames = new Set();
            if (singlesToCheck.length > 0) {
                const names = singlesToCheck.map(({ item }) => item.nom);
                const { data: existing } = await supabase
                    .from('heritier_notes')
                    .select('id, type, content->>nom')
                    .eq('character_id', characterId)
                    .in('content->>nom', names);

                if (existing) {
                    existing.forEach(e => existingNames.add(`${e.type}:${e.nom}`));
                }
            }

            const toInsert = adds
                .filter(({ item, isMultiple, itemType = 'contact' }) =>
                    isMultiple || !existingNames.has(`${itemType}:${item.nom}`)
                )
                .map(({ item, itemType = 'contact' }) => ({
                    character_id: characterId,
                    player_id: userId,
                    cercle_id: null,
                    type: itemType,
                    content: itemType === 'possession'
                        ? { nom: item.nom, description: item.description || '', date_creation: new Date().toISOString(), source_social_item_id: item.id }
                        : {
                            nom: item.nom, description: item.description || '',
                            localisation: { texte: '', rue: '', quartier: '', ville: '', pays: '' },
                            relations: [{ categorie: 'Neutre', sous_categorie: 'Contact', visibilite: 'prive' }],
                            faux_semblant: { actif: false, type_fee: '', publie: [], realite: [] },
                            date_creation: new Date().toISOString(), source_social_item_id: item.id
                          },
                    is_shared: false,
                }));

            if (toInsert.length > 0) {
                const { error } = await supabase.from('heritier_notes').insert(toInsert);
                if (error) console.error('Erreur batch insert grimoire:', error);
            }
        } catch (error) {
            console.error('Erreur batch add grimoire:', error);
        }
    }

    // ── BATCH REMOVE ────────────────────────────────────────────────────────
    if (removes.length > 0) {
        try {
            // Trouver tous les IDs à supprimer en une requête par type
            const byType = {};
            removes.forEach(({ item, itemType = 'contact' }) => {
                if (!byType[itemType]) byType[itemType] = [];
                byType[itemType].push(item.nom);
            });

            const idsToDelete = [];
            for (const [type, noms] of Object.entries(byType)) {
                const { data: matches } = await supabase
                    .from('heritier_notes')
                    .select('id')
                    .eq('character_id', characterId)
                    .eq('type', type)
                    .in('content->>nom', noms);

                if (matches) idsToDelete.push(...matches.map(d => d.id));
            }

            if (idsToDelete.length > 0) {
                const { error } = await supabase.from('heritier_notes').delete().in('id', idsToDelete);
                if (error) console.error('Erreur batch delete grimoire:', error);
            }
        } catch (error) {
            console.error('Erreur batch remove grimoire:', error);
        }
    }

    showInAppNotification(`📓 Grimoire synchronisé (${queue.length} contact${queue.length > 1 ? 's' : ''})`, "success");
};

/**
 * Vide la queue sans exécuter (en cas d'annulation)
 */
export const clearContactSyncQueue = () => {
    pendingQueue = [];
};

/**
 * Retourne le nombre d'actions en attente
 */
export const getPendingCount = () => pendingQueue.length;
