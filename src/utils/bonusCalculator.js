// src/utils/bonusCalculator.js
// Version: 3.0.6
// Build: 2026-02-04 07:00
// Description: Calcul des bonus apportés par les capacités et pouvoirs

/**
 * Trouve une capacité par son nom dans les données du jeu
 */
const findCapacite = (nom, gameData, typeFee) => {
    const feeData = gameData.fairyData?.[typeFee];
    if (!feeData?.capacites) return null;

    // La logique reste valide car nous avons recréé la structure attendue :
    if (feeData.capacites.fixe1?.nom === nom) return feeData.capacites.fixe1;
    if (feeData.capacites.fixe2?.nom === nom) return feeData.capacites.fixe2;
    
    const capaciteChoix = feeData.capacites.choix?.find(c => c.nom === nom);
    if (capaciteChoix) return capaciteChoix;

    return null;
};

/**
 * Trouve un pouvoir par son nom dans les données du jeu
 */
const findPouvoir = (nom, gameData, typeFee) => {
  const feeData = gameData.fairyData?.[typeFee];
  if (!feeData?.pouvoirs) return null;

  return feeData.pouvoirs.find(p => p.nom === nom);
};

/**
 * Calcule tous les bonus actifs d'un personnage
 * @param {Object} character - Le personnage
 * @param {Object} gameData - Les données du jeu
 * @returns {Object} Statistiques avec bonus appliqués
 */
export const calculateCharacterStats = (character, gameData) => {
  // Initialiser les résultats
  const result = {
    caracteristiques: {
      base: { ...character.caracteristiques },
      bonus: {},        // { agilite: [{ source: 'Pattes', value: 1, masque: true }] }
      masques: {},      // { agilite: 1 }
      visibles: {},     // { force: 2 }
      final: { ...character.caracteristiques }
    },
    competences: {
      bonus: {}         // { Combat: [{ source: 'Instinct', value: 1 }] }
    },
    specialites: {
      gratuites: {}     // { Combat: [{ source: 'Maître', specialite: 'Corps à corps' }] }
    }
  };

  // Collecter tous les bonus actifs
  const activeBonusSources = [];

  // Bonus de la capacité choisie
  if (character.capaciteChoisie) {
    const capacite = findCapacite(character.capaciteChoisie, gameData, character.typeFee);
    if (capacite?.bonus) {
      activeBonusSources.push({ source: capacite.nom, bonus: capacite.bonus });
    }
  }

  // Bonus des pouvoirs
  if (character.pouvoirs && Array.isArray(character.pouvoirs)) {
    character.pouvoirs.forEach(pouvoirNom => {
      const pouvoir = findPouvoir(pouvoirNom, gameData, character.typeFee);
      if (pouvoir?.bonus) {
        activeBonusSources.push({ source: pouvoir.nom, bonus: pouvoir.bonus });
      }
    });
  }

  // Appliquer tous les bonus (cumul)
  activeBonusSources.forEach(({ source, bonus }) => {
    // 1. BONUS CARACTÉRISTIQUES
    if (bonus.caracteristiques) {
      Object.entries(bonus.caracteristiques).forEach(([stat, bonusData]) => {
        // Gérer format simple (number) ou complexe (object avec masque)
        const value = typeof bonusData === 'number' ? bonusData : bonusData.value;
        const masque = typeof bonusData === 'object' ? bonusData.masque : false;

        if (!result.caracteristiques.bonus[stat]) {
          result.caracteristiques.bonus[stat] = [];
        }

        result.caracteristiques.bonus[stat].push({ source, value, masque });

        // Ajouter au total
        result.caracteristiques.final[stat] = (result.caracteristiques.final[stat] || 0) + value;

        // Séparer masqués et visibles
        if (masque) {
          result.caracteristiques.masques[stat] = (result.caracteristiques.masques[stat] || 0) + value;
        } else {
          result.caracteristiques.visibles[stat] = (result.caracteristiques.visibles[stat] || 0) + value;
        }
      });
    }

    // 2. BONUS COMPÉTENCES
    if (bonus.competences) {
      Object.entries(bonus.competences).forEach(([comp, value]) => {
        if (!result.competences.bonus[comp]) {
          result.competences.bonus[comp] = [];
        }
        result.competences.bonus[comp].push({ source, value });
      });
    }

    // 3. SPÉCIALITÉS GRATUITES
    if (bonus.specialites) {
      Object.entries(bonus.specialites).forEach(([comp, specialites]) => {
        if (!result.specialites.gratuites[comp]) {
          result.specialites.gratuites[comp] = [];
        }
        specialites.forEach(specialite => {
          result.specialites.gratuites[comp].push({ source, specialite });
        });
      });
    }
  });

  return result;
};

/**
 * Formate l'affichage d'une caractéristique avec ses bonus
 * @param {string} nom - Nom de la caractéristique
 * @param {Object} stats - Résultat de calculateCharacterStats
 * @returns {string} Texte formaté
 */
export const formatCaracteristique = (nom, stats) => {
  const base = stats.caracteristiques.base[nom] || 0;
  const final = stats.caracteristiques.final[nom] || 0;
  const bonus = stats.caracteristiques.bonus[nom] || [];
  const masque = stats.caracteristiques.masques[nom] || 0;

  if (bonus.length === 0) {
    // Pas de bonus
    return `${final}`;
  }

  // Construire le texte des bonus
  const bonusText = bonus.map(b => `${b.value > 0 ? '+' : ''}${b.value} ${b.source}`).join(', ');

  if (masque > 0) {
    // Format: "6 / 7 (+1 Pattes de Velours)"
    return `${base} / ${final} (${bonusText})`;
  } else {
    // Format: "14 (+2 Force du Titan)"
    return `${final} (${bonusText})`;
  }
};

/**
 * Vérifie si une compétence a des bonus
 * @param {string} competence - Nom de la compétence
 * @param {Object} stats - Résultat de calculateCharacterStats
 * @returns {Object|null} { total, sources } ou null
 */
export const getCompetenceBonus = (competence, stats) => {
  const bonus = stats.competences.bonus[competence];
  if (!bonus || bonus.length === 0) return null;

  const total = bonus.reduce((sum, b) => sum + b.value, 0);
  const sources = bonus.map(b => b.source);

  return { total, sources };
};

/**
 * Récupère les spécialités gratuites d'une compétence
 * @param {string} competence - Nom de la compétence
 * @param {Object} stats - Résultat de calculateCharacterStats
 * @returns {Array} [{ source, specialite }, ...]
 */
export const getSpecialitesGratuites = (competence, stats) => {
  return stats.specialites.gratuites[competence] || [];
};
