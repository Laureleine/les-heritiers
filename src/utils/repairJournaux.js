// src/utils/repairJournaux.js
// Utilitaire de réparation du journal des flux d'XP (historique_xp).
//
// Contexte : Le journaling des dépenses a été introduit progressivement.
// Les anciens personnages scellés ont des GAIN dans leur journal (auto-attribués
// par les joueurs) mais aucune DEPENSE enregistrée. Le reconstructeur peut
// déduire les dépenses depuis stats_scellees vs état actuel.
//
// Stratégie de merge :
//   - On CONSERVE les entrées GAIN (attributions XP joueur — irreconstruisibles)
//   - On REMPLACE toutes les DEPENSE/REMBOURSEMENT par la reconstruction
//     (élimine les entrées partielles et évite les doublons)

import { reconstructHistory } from './historyReconstructor';
import { isCharacterScelle } from './lockUtils';
import { XP_CODES } from './xpActions';

// ============================================================================
// 🔁 MAPPING DB → FORMAT RECONSTRUCTION
// ============================================================================

/**
 * Convertit un enregistrement DB brut (snake_case, JSONB aplati)
 * en objet character attendu par reconstructHistory().
 */
export function mapDbCharForReconstruction(dbChar) {
    // Même logique que mapDatabaseToCharacter dans supabaseStorage.js
    const source = { ...(dbChar.data || {}), ...dbChar };
    return {
        id: dbChar.id,
        nom: dbChar.nom,
        statut: dbChar.statut,
        typeFee: dbChar.type_fee,
        xp_total: dbChar.xp_total || 0,
        xp_depense: dbChar.xp_depense || 0,
        caracteristiques: source.caracteristiques || {},
        atouts: source.atouts || [],
        competencesLibres: source.competences_libres || source.competencesLibres || {},
        competencesFutiles: source.competences_futiles || source.competencesFutiles || {},
        fortune: source.fortune || 0,
        vieSociale: source.vie_sociale || source.vieSociale || {},
        data: dbChar.data || {},
    };
}

// ============================================================================
// 🔍 DÉTECTION : UN PERSONNAGE NÉCESSITE-T-IL UNE RÉPARATION ?
// ============================================================================

/**
 * Retourne true si le journal du personnage est probablement incomplet :
 * - Il est scellé ET a des stats_scellees (reconstruction possible)
 * - ET les DEPENSE nettes dans le journal sont < xp_depense (cache)
 */
export function journalNeedsRepair(character) {
    if (!isCharacterScelle(character)) return false;
    if (!character.data?.stats_scellees) return false;

    const journal = character.data?.historique_xp || [];
    const netDepenseJournal = journal.reduce((acc, tx) => {
        if (tx.type === 'DEPENSE')      return acc + (tx.valeur || 0);
        if (tx.type === 'REMBOURSEMENT') return acc - (tx.valeur || 0);
        return acc;
    }, 0);

    // Si les dépenses journalisées sont inférieures au cache xp_depense → incomplet
    return (character.xp_depense || 0) > 0 && netDepenseJournal < (character.xp_depense || 0);
}

// ============================================================================
// 🛠️ CONSTRUCTION DU JOURNAL RÉPARÉ
// ============================================================================

/**
 * Construit un nouveau journal complet en fusionnant :
 *   - Les entrées GAIN existantes (conservées telles quelles)
 *   - Les entrées DEPENSE reconstruites depuis stats_scellees
 *
 * @param {object} character - Personnage au format client (après mapDbCharForReconstruction)
 * @param {object} gameData  - { fairyData, atouts, socialItems }
 * @returns {Array} Journal fusionné, trié chronologiquement, ou null si réparation impossible
 */
export function buildRepairedJournal(character, gameData) {
    if (!isCharacterScelle(character)) return null;
    if (!character.data?.stats_scellees) return null;

    const existingJournal = character.data?.historique_xp || [];

    // On ne garde que les attributions XP manuelles (les joueurs se les attribuent eux-mêmes)
    const gainEntries = existingJournal.filter(tx => tx.type === 'GAIN');

    // La reconstruction déduit toutes les DEPENSE depuis stats_scellees vs état actuel
    const reconEntries = reconstructHistory(character, gameData);

    // Réconciliation : si la somme reconstruite ≠ xp_depense en base,
    // on ajoute un SOLDE pour que computeXpDepenseFromJournal() retombe
    // exactement sur xp_depense — évite de violer check_xp_coherence (xp_depense ≤ xp_total).
    const sumReconstructed = reconEntries.reduce((acc, tx) => acc + (tx.valeur || 0), 0);
    const pastDepense = character.xp_depense || 0;
    if (sumReconstructed !== pastDepense) {
        const difference = pastDepense - sumReconstructed;
        const anchor = character.created_at
            ? new Date(character.created_at).getTime()
            : new Date('2026-01-01T00:00:00.000Z').getTime();
        reconEntries.push({
            type:           difference > 0 ? 'DEPENSE' : 'REMBOURSEMENT',
            code:           XP_CODES.XP_SOLDE,
            label:          difference > 0 ? 'Ajustements manuels antérieurs (Passif)' : 'Remboursements antérieurs (Passif)',
            valeur:         Math.abs(difference),
            rang_final:     null,
            date_mouvement: new Date(anchor - 500).toISOString(),
        });
    }

    // Fusion et tri chronologique
    const merged = [...gainEntries, ...reconEntries].sort(
        (a, b) => new Date(a.date_mouvement) - new Date(b.date_mouvement)
    );

    return merged;
}

// ============================================================================
// 💾 CALCUL DU NOUVEAU xp_depense DEPUIS UN JOURNAL
// ============================================================================

/**
 * Recalcule xp_depense depuis un journal réparé.
 * C'est la même logique que getXpState(), mais appliquée au journal final.
 */
export function computeXpDepenseFromJournal(journal) {
    return Math.max(0, journal.reduce((acc, tx) => {
        if (tx.type === 'DEPENSE')      return acc + (tx.valeur || 0);
        if (tx.type === 'REMBOURSEMENT') return acc - (tx.valeur || 0);
        return acc;
    }, 0));
}
