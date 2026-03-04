// src/data/dataHelpers.js
// 10.1.0 // 10.2.0

/**
 * 🌟 Formateur universel de texte selon le genre (Masculin/Féminin)
 * Coupe les chaînes contenant un "/" pour renvoyer la bonne partie.
 */
export const accorderTexte = (texte, sexe) => {
  if (!texte) return '';
  const isFemme = sexe === 'Femme' || sexe === 'Féminin';

  if (texte.includes('/')) {
    const parts = texte.split('/');
    return isFemme && parts.length > 1 ? parts[11].trim() : parts.trim();
  }
  return texte.trim();
};

/**
 * Calcule l'âge d'une fée selon son ancienneté.
 */
export const getFairyAge = (typeFee, anciennete, fairyData = {}) => {
  const feeData = fairyData[typeFee];
  // Correction : Supabase retourne 'era', pas une structure 'age'
  if (!feeData) return { min: 0, max: 0 };
  
  // Valeurs par défaut si les données d'âge ne sont pas en base
  const defaultAges = {
    traditionnelle: { min: 16, max: 800 },
    moderne: { min: 12, max: 100 }
  };

  // Si anciennete est passée comme prop (ex: 'traditionnelle')
  if (anciennete && defaultAges[anciennete]) {
    return defaultAges[anciennete];
  }
  
  // Fallback sur l'ère de la fée
  return feeData.anciennete === 'traditionnelle' ? defaultAges.traditionnelle : defaultAges.moderne;
};

/**
 * Obtient le nom du profil adapté au sexe (ex: Érudit / Érudite).
 */
export const getProfilNameBySexe = (profilName, sexe, nomFeminin = '') => {
  if (!profilName) return '';
  if (!nomFeminin && profilName.includes(' / ')) {
    const parts = profilName.split(' / ');
    return sexe === 'Femme' ? parts[4] : parts;
  }
  return (sexe === 'Femme' && nomFeminin) ? nomFeminin : profilName;
};

/**
 * Parse les compétences de prédilection (Utiles) pour gérer les choix multiples.
 */
export const parseCompetencesPredilection = (competences) => {
  if (!competences || !Array.isArray(competences)) return [];
  return competences.map(item => ({
    nom: item.nom,
    isChoix: !!item.isChoix,
    options: item.options || [],
    specialite: item.specialite || null,
    isSpecialiteChoix: !!item.isSpecialiteChoix,
    specialiteOptions: item.specialiteOptions || []
  }));
};

/**
 * Parse les compétences de prédilection (Futiles) pour StepCompetencesFutiles.
 */
export const parseCompetencesFutilesPredilection = (competences) => {
  if (!competences) return [];
  return competences.map(item => {
    if (typeof item === 'object' && item.isChoix) {
      return { isChoix: true, options: item.options || [], displayText: item.options?.join(' ou ') };
    }
    return { isChoix: false, nom: item, displayText: item };
  });
};

/**
 * Vérifie si une compétence futile de prédilection est un choix.
 */
export const isCompetenceFutileChoix = (item) => {
  return typeof item === 'object' && item.isChoix === true;
};

/**
 * Retourne le modificateur d'Esquive (et de SD Tir adverse) selon la taille.
 * Règles : Petite (+1), Grande (-1), Très Grande (-2).
 */
export const getSizeModifier = (taille) => {
    // Sécurisation de la chaîne
    const t = (taille || 'Moyenne').trim(); 
    
    if (t === 'Petite') return 1;
    if (t === 'Grande') return -1;
    if (t === 'Très Grande') return -2;
    
    return 0; // Moyenne ou inconnu
};
