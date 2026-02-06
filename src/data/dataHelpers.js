// src/data/dataHelpers.js
// Version: 3.4.1
// Build: 2026-02-04 23:45
// Description: Moteur de règles pur pour le Système 3D.
// Correction: Suppression des tokens de citation erronés provoquant la SyntaxError.

/**
 * Calcule l'âge d'une fée selon son ancienneté.
 */
export const getFairyAge = (typeFee, anciennete, fairyData = {}) => {
  const feeData = fairyData[typeFee];
  if (!feeData || !feeData.age) return { min: 0, max: 0 };
  return anciennete === 'traditionnelle' ? feeData.age.ancienne : feeData.age.moderne;
};

/**
 * Obtient le nom du profil adapté au sexe.
 */
export const getProfilNameBySexe = (profilName, sexe, nomFeminin = '') => {
  if (!profilName) return '';
  if (!nomFeminin && profilName.includes(' / ')) {
    const parts = profilName.split(' / ');
    return sexe === 'Femme' ? parts[2] : parts;
  }
  return (sexe === 'Femme' && nomFeminin) ? nomFeminin : profilName;
};

/**
 * Parse les compétences de prédilection (Utiles).
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
 * Parse les compétences de prédilection (Futiles).
 */
export const parseCompetencesFutilesPredilection = (competences) => {
  if (!competences) return [];
  return competences.map(item => {
    if (typeof item === 'object' && item.isChoix) {
      return { isChoix: true, options: item.options || [] };
    }
    return { isChoix: false, nom: item };
  });
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
 * Calcule les Points de Vie : (3 * Constitution) + 9.
 */
export const calculateMaxHP = (constitution) => (3 * (parseInt(constitution) || 0)) + 9;

/**
 * Calcule le budget total de PP (Étape 6).
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

export const getMaxRank = (isPredilection) => isPredilection ? 5 : 4;