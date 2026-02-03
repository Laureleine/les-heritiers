// src/data/dataHelpers.js
// Version: 3.0.0
// Build: 2026-02-04 01:35
// Description: Fonctions utilitaires PURES - Sans import de données
// Migration: Toutes les fonctions prennent les données en paramètres

// ============================================================================
// FONCTIONS UTILITAIRES - FÉES
// ============================================================================

/**
 * Calcule l'âge d'une fée selon son ancienneté
 * @param {string} typeFee - Type de fée
 * @param {string} anciennete - 'traditionnelle' ou 'moderne'
 * @param {Object} fairyData - Données des fées (optionnel pour compatibilité)
 */
export const getFairyAge = (typeFee, anciennete, fairyData = {}) => {
  const feeData = fairyData[typeFee];
  if (!feeData) return { min: 0, max: 0 };
  
  const ages = feeData.age;
  if (!ages) return { min: 0, max: 0 };
  
  return anciennete === 'traditionnelle' ? ages.ancienne : ages.moderne;
};

// ============================================================================
// FONCTIONS UTILITAIRES - PROFILS
// ============================================================================

/**
 * Obtient le nom du profil adapté au sexe
 * @param {string} profilName - Nom du profil masculin (ex: "Aventurier")
 * @param {string} sexe - "Homme", "Femme", ou "Androgyne"
 * @param {string} nomFeminin - Nom féminin du profil (ex: "Aventurière")
 * @returns {string} Nom adapté au sexe
 */
export const getProfilNameBySexe = (profilName, sexe, nomFeminin = '') => {
  if (!profilName) return '';
  
  // Si pas de nom féminin fourni, essayer de parser "Nom / Nom"
  if (!nomFeminin && profilName.includes(' / ')) {
    const parts = profilName.split(' / ');
    return sexe === 'Femme' ? parts[1] : parts[0];
  }
  
  // Utiliser le nom féminin si fourni et si sexe féminin
  if (sexe === 'Femme' && nomFeminin) {
    return nomFeminin;
  }
  
  // Par défaut retourner le nom masculin
  return profilName;
};

/**
 * Calcule le rang d'un profil (majeur = 3, mineur = 2)
 * @param {string} type - 'majeur' ou 'mineur'
 * @returns {number} Le rang
 */
export const calculateProfilRang = (type) => {
  return type === 'majeur' ? 3 : 2;
};

// ============================================================================
// FONCTIONS UTILITAIRES - COMPÉTENCES FUTILES
// ============================================================================

/**
 * Parse les compétences futiles de prédilection pour gérer les choix
 * @param {Array} competencesPredilection - Tableau des compétences de prédilection
 * @returns {Array} Tableau parsé avec indication des choix
 */
export const parseCompetencesFutilesPredilection = (competencesPredilection) => {
  if (!competencesPredilection) return [];
  
  return competencesPredilection.map(item => {
    // Si c'est un objet avec isChoix
    if (typeof item === 'object' && item.isChoix) {
      return {
        isChoix: true,
        options: item.options || []
      };
    }
    
    // Si c'est une string simple
    if (typeof item === 'string') {
      return {
        isChoix: false,
        nom: item
      };
    }
    
    // Sinon retourner tel quel
    return item;
  });
};

/**
 * Vérifie si une compétence futile de prédilection est un choix
 * @param {any} item - Item de compétence futile
 * @returns {boolean}
 */
export const isCompetenceFutileChoix = (item) => {
  return typeof item === 'object' && item.isChoix === true;
};

// ============================================================================
// FONCTIONS UTILITAIRES - VALIDATION
// ============================================================================

/**
 * Valide qu'un personnage a toutes les données requises
 * @param {Object} character - Personnage à valider
 * @returns {Object} { valid: boolean, errors: string[] }
 */
export const validateCharacter = (character) => {
  const errors = [];
  
  if (!character.nom?.trim()) {
    errors.push('Le nom est requis');
  }
  
  if (!character.sexe) {
    errors.push('Le sexe est requis');
  }
  
  if (!character.typeFee) {
    errors.push('Le type de fée est requis');
  }
  
  if (!character.caracteristiques || Object.keys(character.caracteristiques).length === 0) {
    errors.push('Les caractéristiques sont requises');
  }
  
  if (!character.profils?.majeur?.nom || !character.profils?.mineur?.nom) {
    errors.push('Les profils majeur et mineur sont requis');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

/**
 * Calcule le total de points dépensés dans les compétences libres
 * @param {Object} competencesLibres - Object des compétences libres
 * @returns {number} Total de points dépensés
 */
export const calculateCompetencesLibresPoints = (competencesLibres = {}) => {
  return Object.entries(competencesLibres).reduce((sum, [comp, data]) => {
    let points = data.rangsSupplementaires || 0;
    if (data.specialites) {
      points += data.specialites.length;
    }
    return sum + points;
  }, 0);
};

/**
 * Calcule le total de points dépensés dans les compétences futiles
 * @param {Object} competencesFutiles - Object des compétences futiles
 * @returns {number} Total de points dépensés
 */
export const calculateCompetencesFutilesPoints = (competencesFutiles = {}) => {
  return Object.values(competencesFutiles.rangs || {}).reduce((sum, rangs) => sum + rangs, 0);
};

// ============================================================================
// EXPORTS LEGACY (pour compatibilité)
// ============================================================================

// Constantes vides pour compatibilité (les vraies données viennent de Supabase)
export const profilNames = [];
export const getProfilCompetences = () => [];
export const getProfilTraits = () => [];
