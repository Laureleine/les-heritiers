// src/utils/xpActions.js
// Utilitaires DRY pour les opérations XP — centralisent les patterns répétés
// dans 6+ composants et hooks (StepAtouts, StepPouvoirs, StepCaracteristiques,
// StepCompetencesFutiles, useCompetencesLibres, AnomalieFeeriqueWidget, useVieSociale).

/**
 * Extrait l'état XP du personnage.
 * Remplace le triple boilerplate répété partout :
 *   const xpTotal = character.xp_total || 0;
 *   const xpDepense = character.xp_depense || 0;
 *   const xpDispo = xpTotal - xpDepense;
 *
 * @param {object} character - L'état du personnage
 * @returns {{ xpTotal: number, xpDepense: number, xpDispo: number }}
 */
export const getXpState = (character) => {
    const xpTotal = character.xp_total || 0;
    const xpDepense = character.xp_depense || 0;
    return {
        xpTotal,
        xpDepense,
        xpDispo: xpTotal - xpDepense
    };
};

/**
 * Calcule le nouveau montant de XP dépensés après un achat.
 *
 * @param {number} xpDepense - XP actuellement dépensés
 * @param {number} cost - Coût de l'action
 * @returns {number}
 */
export const spendXp = (xpDepense, cost) => xpDepense + cost;

/**
 * Calcule le nouveau montant de XP dépensés après un remboursement.
 * Garantit de ne jamais descendre sous 0 (plancher de sécurité).
 *
 * @param {number} xpDepense - XP actuellement dépensés
 * @param {number} refund - Montant à rembourser
 * @returns {number}
 */
export const refundXp = (xpDepense, refund) => Math.max(0, xpDepense - refund);
