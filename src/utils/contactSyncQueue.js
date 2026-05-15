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

    for (const { item, action, isMultiple, itemType = 'contact' } of queue) {
        try {
            if (action === 'add') {
                if (!isMultiple) {
                    const { data: existing } = await supabase
                        .from('heritier_notes')
                        .select('id')
                        .eq('character_id', characterId)
                        .eq('type', itemType)
                        .eq('content->>nom', item.nom)
                        .limit(1);

                    if (existing && existing.length > 0) continue;
                }

                const content = itemType === 'possession'
                    ? {
                        nom: item.nom,
                        description: item.description || '',
                        date_creation: new Date().toISOString(),
                        source_social_item_id: item.id
                    }
                    : {
                        nom: item.nom,
                        description: item.description || '',
                        localisation: '',
                        statut_relation: 'Contact',
                        date_creation: new Date().toISOString(),
                        source_social_item_id: item.id
                    };

                await supabase.from('heritier_notes').insert([{
                    character_id: characterId,
                    player_id: userId,
                    cercle_id: null,
                    type: itemType,
                    content,
                    is_shared: false
                }]);

            } else if (action === 'remove') {
                const { data: toDelete } = await supabase
                    .from('heritier_notes')
                    .select('id')
                    .eq('character_id', characterId)
                    .eq('type', itemType)
                    .eq('content->>nom', item.nom)
                    .limit(1);

                if (toDelete && toDelete.length > 0) {
                    await supabase.from('heritier_notes').delete().eq('id', toDelete[0].id);
                }
            }
        } catch (error) {
            console.error('Erreur sync grimoire:', error);
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
