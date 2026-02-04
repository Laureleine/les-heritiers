// src/data/dataHelpers.js
// Version: 2.9.0
// Build: 2026-01-31 20:30
// Description: Fonctions utilitaires pour manipuler les données du jeu

import { fairyData, profils, competences, competencesFutilesBase } from './data';

// ============================================================================
// FONCTIONS UTILITAIRES - FÉES
// ============================================================================

/**
 * Calcule l'âge d'une fée selon son ancienneté
 */
export const getFairyAge = (typeFee, anciennete) => {
  const feeData = fairyData[typeFee];
  if (!feeData) return { min: 0, max: 0 };
  
  const ages = feeData.age;
  if (!ages) return { min: 0, max: 0 };
  
  return anciennete === 'traditionnelle' ? ages.ancienne : ages.moderne;
};

// ============================================================================
// FONCTIONS UTILITAIRES - PROFILS
// ============================================================================

export const profilNames = Object.keys(profils);

export const getProfilCompetences = (profilName) => {
  return profils[profilName]?.competences || [];
};

export const getProfilTraits = (profilName) => {
  return profils[profilName]?.traits || [];
};

/**
 * Obtient le nom du profil adapté au sexe
 * @param {string} profilName - Nom du profil (ex: "Aventurier / Aventurière")
 * @param {string} sexe - "Homme", "Femme", ou "Androgyne"
 * @returns {string} Nom adapté au sexe
 */
export const getProfilNameBySexe = (profilName, sexe) => {
  if (!profilName) return '';
  
  const parts = profilName.split(' / ');
  if (parts.length !== 2) return profilName;
  
  // Par défaut féminin pour androgyne
  if (sexe === 'Homme') return parts[0];
  return parts[1]; // Femme ou Androgyne
};

/**
 * Calcule le rang d'un profil
 * Rang = floor(somme des compétences du profil / 4)
 * Si somme < 4, rang = 0
 * @param {object} competencesBase - Map des compétences de base
 * @param {object} competencesLibres - Compétences libres investies
 * @param {array} profilCompetences - Liste des compétences du profil
 * @returns {number} Rang du profil
 */
export const calculateProfilRang = (competencesBase, competencesLibres, profilCompetences) => {
  if (!profilCompetences || profilCompetences.length === 0) return 0;
  
  const total = profilCompetences.reduce((sum, compName) => {
    const base = competencesBase.get(compName)?.scoreBase || 0;
    const libre = competencesLibres[compName]?.rangsSupplementaires || 0;
    return sum + base + libre;
  }, 0);
  
  return total < 4 ? 0 : Math.floor(total / 4);
};

// ============================================================================
// FONCTIONS UTILITAIRES - COMPÉTENCES
// ============================================================================

export const competenceNames = Object.keys(competences);

// ============================================================================
// FONCTIONS UTILITAIRES - COMPÉTENCES FUTILES
// ============================================================================

/**
 * Vérifie si une compétence futile est un choix ou une valeur fixe
 */
export const isCompetenceFutileChoix = (comp) => {
  return typeof comp === 'object' && comp.choix && Array.isArray(comp.choix);
};

/**
 * Parse la liste de compétences futiles de prédilection pour l'affichage UI
 */
export const parseCompetencesFutilesPredilection = (competencesList) => {
  if (!competencesList || !Array.isArray(competencesList)) return [];
  
  return competencesList.map(comp => {
    if (isCompetenceFutileChoix(comp)) {
      return {
        type: 'choix',
        options: comp.choix,
        selected: null
      };
    }
    return {
      type: 'fixe',
      nom: comp
    };
  });
};

/**
 * Compte le nombre total de compétences futiles de prédilection (incluant les choix)
 */
export const getCompetencesFutilesPredilectionCount = (competencesList) => {
  if (!competencesList || !Array.isArray(competencesList)) return 0;
  return competencesList.length;
};

/**
 * Valide qu'une sélection de choix est valide
 */
export const isValidCompetenceFutileChoice = (choix, selection) => {
  if (!choix || !choix.choix || !Array.isArray(choix.choix)) return false;
  return choix.choix.includes(selection);
};

/**
 * Obtient toutes les compétences futiles (base + personnalisées)
 */
export const getAllCompetencesFutiles = (competencesPersonnalisees = []) => {
  return [
    ...competencesFutilesBase,
    ...competencesPersonnalisees
  ];
};

/**
 * Crée une compétence futile personnalisée
 */
export const createCustomCompetenceFutile = (nom, description = '') => {
  return {
    nom,
    description,
    personnalisee: true
  };
};
