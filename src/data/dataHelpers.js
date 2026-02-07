// src/data/dataHelpers.js
// Version: 3.5.1
// Build: 2026-02-05 14:30
// Correction: Restauration des fonctions pour les compétences futiles (Fix import error).

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
 * Calcule les stats de combat (Masqué et Démasqué) selon p.115-116.
 */
export const calculateCombatStats = (character, skills) => {
  const getS = (nom) => skills[nom] || 0;
  const agi = character.caracteristiques?.agilite || 0;
  const sf = character.caracteristiques?.sangFroid || 0;
  const esp = character.caracteristiques?.esprit || 0;
  const con = character.caracteristiques?.constitution || 0;

  const hasSpec = (compNom, specNom) => {
    const data = character.competencesLibres?.[compNom];
    return data?.specialites?.includes(specNom) || data?.specialiteBase === specNom;
  };

  const specEsquive = hasSpec('Mouvement', 'Esquive') ? 1 : 0;
  const specParade = (character.competencesLibres?.['Mêlée']?.specialites?.length > 0 || 
                      character.competencesLibres?.['Mêlée']?.specialiteBase) ? 1 : 0;

  const statsMasque = {
    esquive: getS('Mouvement') + agi + 5 + specEsquive,
    parade: getS('Mêlée') + agi + 5 + specParade,
    resistancePhysique: getS('Ressort') + con + 5,
    resistancePsychique: getS('Fortitude') + esp + 5,
    initiative: getS('Art de la guerre') + sf
  };

  const hasAccrue = (stat) => character.capaciteChoisie === `${stat} accrue`;
  const agiD = agi + (hasAccrue('Agilité') ? 1 : 0);
  const conD = con + (hasAccrue('Constitution') ? 1 : 0);
  const sfD = sf + (hasAccrue('Sang-froid') ? 1 : 0);

  const statsDemasque = {
    esquive: getS('Mouvement') + agiD + 5 + specEsquive,
    parade: getS('Mêlée') + agiD + 5 + specParade,
    resistancePhysique: getS('Ressort') + conD + 5,
    resistancePsychique: statsMasque.resistancePsychique,
    initiative: getS('Art de la guerre') + sfD
  };

  return { masque: statsMasque, demasque: statsDemasque };
};

/**
 * Calcule les Points de Vie : (3 * Constitution) + 9 (Source p.128).
 */
export const calculateMaxHP = (constitution) => (3 * (parseInt(constitution) || 0)) + 9;

/**
 * Calcule le budget total de PP (Source p.130).
 */
export const calculateTotalPP = (character, skills) => {
  let total = 0;
  if (character.profils?.majeur?.nom) total += 8;
  if (character.profils?.mineur?.nom) total += 4;

  const profils = ['Aventurier', 'Combattant', 'Érudit', 'Gentleman', 'Roublard', 'Savant'];
  const mapping = {
    'Aventurier': ['Conduite', 'Mouvement', 'Ressort', 'Survie'],
    'Combattant': ['Art de la guerre', 'Autorité', 'Mêlée', 'Tir'],
    'Érudit': ['Culture', 'Fortitude', 'Occultisme', 'Rhétorique'],
    'Gentleman': ['Classe', 'Entregent', 'Séduction', 'Sensibilité'],
    'Roublard': ['Comédie', 'Larcin', 'Discrétion', 'Monde du crime'],
    'Savant': ['Habiletés', 'Médecine', 'Observation', 'Sciences']
  };

  profils.forEach(p => {
    const somme = mapping[p].reduce((acc, comp) => acc + (skills[comp] || 0), 0);
    total += Math.floor(somme / 4);
  });

  return total;
};
