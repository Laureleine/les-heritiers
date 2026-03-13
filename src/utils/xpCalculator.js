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
 * Règle : (Rang à atteindre x 2) - (Rang de Classe ou Sciences).
 * Minimum : 5 XP. Maximum absolu de la Fortune : 15.
 */
export const getFortuneCost = (currentRank, characterStats) => {
  const nextRank = currentRank + 1;
  if (nextRank > 15) return null;

  // On extrait les scores totaux des compétences sociales utiles pour la réduction
  const rangClasse = characterStats?.competencesTotal?.['Classe'] || 0;
  const rangSciences = characterStats?.competencesTotal?.['Sciences'] || 0;
  
  // La règle de base permet de déduire la meilleure des deux compétences
  const reduction = Math.max(rangClasse, rangSciences);

  const rawCost = (nextRank * 2) - reduction;
  return Math.max(5, rawCost);
};

/**
 * Dictionnaire des coûts fixes pour les acquisitions uniques (Atouts, Spécialités).
 */
export const FIXED_XP_COSTS = {
  specialite_utile: 8,
  specialite_futile: 3,
  nouvel_atout: 8
};