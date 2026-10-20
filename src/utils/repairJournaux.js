// src/utils/repairJournaux.js
// Utilitaire de réparation du journal des flux d'XP (xp_transactions).
//
// Contexte : historique_xp (JSONB) a été supprimé. xp_transactions est la source
// unique du détail. journalNeedsRepair compare les DEPENSE dans xp_transactions
// au scalaire xp_depense. buildRepairedJournal reconstruit les entrées manquantes
// pour les insérer dans xp_transactions.
//
// Stratégie de merge :
//   - On CONSERVE les entrées GAIN dans xp_transactions
//   - On REMPLACE toutes les DEPENSE/REMBOURSEMENT par la reconstruction

import { reconstructHistory } from './historyReconstructor';
import { isCharacterScelle } from './lockUtils';

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
 * Retourne true si xp_transactions est incomplet pour ce personnage :
 * - Il est scellé ET a des stats_scellees (reconstruction possible)
 * - ET les DEPENSE nettes dans xp_transactions sont < xp_depense (scalaire)
 *
 * @param {object} character
 * @param {Array} xpTransactions - Transactions depuis la table xp_transactions pour ce personnage
 */
export function journalNeedsRepair(character, xpTransactions = []) {
    if (!isCharacterScelle(character)) return false;
    if (!character.data?.stats_scellees) return false;

    const netDepense = xpTransactions.reduce((acc, tx) => {
        if (tx.type === 'DEPENSE')       return acc + (tx.valeur || 0);
        if (tx.type === 'REMBOURSEMENT') return acc - (tx.valeur || 0);
        return acc;
    }, 0);

    return (character.xp_depense || 0) > 0 && netDepense < (character.xp_depense || 0);
}

// ============================================================================
// 🛠️ CONSTRUCTION DU JOURNAL RÉPARÉ
// ============================================================================

/**
 * Construit un journal complet depuis xp_transactions + reconstruction :
 *   - Les GAIN existants dans xpTransactions (conservés tels quels)
 *   - Les DEPENSE/REMBOURSEMENT reconstruits depuis stats_scellees
 *
 * @param {object} character      - Personnage au format client
 * @param {object} gameData       - { fairyData, atouts, socialItems }
 * @param {Array}  xpTransactions - Transactions depuis la table xp_transactions
 * @returns {Array} Journal fusionné, trié chronologiquement, ou null si réparation impossible
 */
export function buildRepairedJournal(character, gameData, xpTransactions = []) {
    if (!isCharacterScelle(character)) return null;
    if (!character.data?.stats_scellees) return null;

    const gainEntries = xpTransactions.filter(tx => tx.type === 'GAIN');
    const reconEntries = reconstructHistory(character, gameData);

    return [...gainEntries, ...reconEntries].sort(
        (a, b) => new Date(a.date_mouvement) - new Date(b.date_mouvement)
    );
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
