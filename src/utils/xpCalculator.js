// src/utils/xpCalculator.js
// 13.5.0

/**
 * Calcule le coût en XP pour passer à la Caractéristique ou au Masque supérieur.
 * Règle : (Rang à atteindre x 4), avec un coût minimum incompressible de 12 XP.
 */
export const getCaracCost = (currentRank) => {
  const nextRank = currentRank + 1;
  // Limite théorique fixée à 10 pour éviter les crashs (bien que l'excellence humaine soit 6 ou 7)
  if (nextRank > 10) return null; 
  return Math.max(12, nextRank * 4);
};

/**
 * Calcule le coût en XP pour augmenter la Féérie.
 * Règle : (Rang à atteindre x 5).
 */
export const getFeerieCost = (currentRank) => {
  const nextRank = currentRank + 1;
  if (nextRank > 10) return null;
  return nextRank * 5;
};

/**
 * Calcule le coût en XP pour augmenter une Compétence Utile.
 * Règle : (Rang à atteindre x 3).
 */
export const getUtileCost = (currentRank) => {
  const nextRank = currentRank + 1;
  return nextRank * 3;
};

/**
 * Calcule le coût en XP pour augmenter une Compétence Futile.
 * Règle : (Rang à atteindre x 1).
 */
export const getFutileCost = (currentRank) => {
  const nextRank = currentRank + 1;
  return nextRank * 1;
};

/**
 * Calcule le coût en XP pour augmenter la Fortune.
 * Règle : (Rang à atteindre x 2) - réduction sociale.
 *   - La réduction Classe ne s'applique QUE si le personnage a la spécialité "Argent".
 *   - La réduction Sciences ne s'applique QUE si le personnage a la spécialité "Finance".
 * Minimum : 5 XP. Maximum absolu de la Fortune : 15.
 *
 * @param {number} currentRank - Rang actuel de Fortune
 * @param {object} characterStats - computedStats du personnage
 * @param {object} [specialites] - Spécialités pertinentes { Classe?: string[], Sciences?: string[] }
 */
export const getFortuneCost = (currentRank, characterStats, specialites) => {
  const nextRank = currentRank + 1;
  if (nextRank > 15) return null;

  // Le rang ne réduit le coût QUE si la spécialité conditionnelle est possédée.
  const hasArgent  = specialites?.Classe?.includes('Argent');
  const hasFinance = specialites?.Sciences?.includes('Finance');

  const rangClasse   = hasArgent  ? (characterStats?.competencesTotal?.['Classe']    || 0) : 0;
  const rangSciences = hasFinance ? (characterStats?.competencesTotal?.['Sciences']   || 0) : 0;

  const reduction = Math.max(rangClasse, rangSciences);

  const rawCost = (nextRank * 2) - reduction;
  return Math.max(5, rawCost);
};

/**
 * Extrait les spécialités pertinentes pour le calcul du coût de Fortune
 * (Argent pour Classe, Finance pour Sciences) depuis un personnage.
 *
 * @param {object} character - Le personnage complet
 * @returns {object} { Classe?: string[], Sciences?: string[] }
 */
export const getFortuneSpecialites = (character) => {
  const specialites = {};

  const check = (comp, specName) => {
    if (character.competencesLibres?.choixSpecialiteUser?.[comp]?.includes(specName)) return true;
    if (character.computedStats?.specialites?.gratuites?.[comp]?.some(s => s.specialite === specName)) return true;
    const metier = character.competencesLibres?.specialiteMetier;
    if (metier?.comp === comp && metier?.nom === specName) return true;
    return false;
  };

  if (check('Classe', 'Argent')) specialites.Classe = ['Argent'];
  if (check('Sciences', 'Finance')) specialites.Sciences = ['Finance'];

  return specialites;
};

/**
 * Dictionnaire des coûts fixes pour les acquisitions uniques (Atouts, Spécialités).
 */
export const FIXED_XP_COSTS = {
  specialite_utile: 8,
  specialite_futile: 3,
  nouvel_atout: 8
};