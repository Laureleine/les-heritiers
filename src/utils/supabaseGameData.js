// src/utils/supabaseGameData.js
// Version: 3.0.0
// Build: 2026-02-04 01:30
// Description: Fonctions pour charger toutes les données du jeu depuis Supabase
// Migration v3.0.0 : Suppression de tous les fallbacks vers data.js

import { supabase } from '../config/supabase';

// ============================================================================
// COMPÉTENCES FUTILES
// ============================================================================

/**
 * Charge toutes les compétences futiles depuis Supabase
 * @returns {Promise<Array>} Liste des compétences futiles [{id, nom, description}]
 */
export const loadCompetencesFutiles = async () => {
  try {
    const { data, error } = await supabase
      .from('competences_futiles')
      .select('id, name, description')
      .order('name');

    if (error) throw error;

    // Transformer pour correspondre au format de data.js + ajouter ID
    return data.map(comp => ({
      id: comp.id,           // UUID pour références
      nom: comp.name,
      description: comp.description
    }));
  } catch (error) {
    console.error('Erreur chargement compétences futiles:', error);
    // Retourner tableau vide en cas d'erreur
    return [];
  }
};

/**
 * Récupère l'UUID d'une compétence futile par son nom
 * @param {string} name - Nom de la compétence
 * @returns {Promise<string|null>} UUID ou null si non trouvée
 */
export const getCompetenceFutileIdByName = async (name) => {
  try {
    const { data, error } = await supabase
      .from('competences_futiles')
      .select('id')
      .eq('name', name)
      .single();

    if (error) throw error;
    return data.id;
  } catch (error) {
    console.warn(`Compétence futile non trouvée: ${name}`);
    return null;
  }
};

/**
 * Récupère les infos d'une compétence futile par UUID
 * @param {string} id - UUID de la compétence
 * @returns {Promise<Object|null>} {id, nom, description} ou null
 */
export const getCompetenceFutileById = async (id) => {
  try {
    const { data, error } = await supabase
      .from('competences_futiles')
      .select('id, name, description')
      .eq('id', id)
      .single();

    if (error) throw error;
    return {
      id: data.id,
      nom: data.name,
      description: data.description
    };
  } catch (error) {
    console.error('Erreur récupération compétence futile:', error);
    return null;
  }
};

/**
 * Ajoute une nouvelle compétence futile
 * @param {string} name - Nom de la compétence
 * @param {string} description - Description
 * @returns {Promise<Object>} La compétence créée avec UUID
 */
export const addCompetenceFutile = async (name, description) => {
  const { data, error } = await supabase
    .from('competences_futiles')
    .insert([{ name, description }])
    .select()
    .single();

  if (error) throw error;
  return {
    id: data.id,
    nom: data.name,
    description: data.description
  };
};

/**
 * Modifie une compétence futile par UUID
 * @param {string} id - UUID de la compétence
 * @param {string} newName - Nouveau nom
 * @param {string} description - Description
 * @returns {Promise<Object>} La compétence modifiée
 */
export const updateCompetenceFutile = async (id, newName, description) => {
  const { data, error } = await supabase
    .from('competences_futiles')
    .update({ name: newName, description })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return {
    id: data.id,
    nom: data.name,
    description: data.description
  };
};

/**
 * Supprime une compétence futile par UUID
 * @param {string} id - UUID de la compétence à supprimer
 * @returns {Promise<void>}
 */
export const deleteCompetenceFutile = async (id) => {
  const { error } = await supabase
    .from('competences_futiles')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

// ============================================================================
// CACHE LOCAL
// ============================================================================

let cachedCompetencesFutiles = null;

/**
 * Charge les compétences futiles avec cache
 * @param {boolean} forceRefresh - Force le rechargement
 * @returns {Promise<Array>}
 */
export const getCompetencesFutiles = async (forceRefresh = false) => {
  if (!cachedCompetencesFutiles || forceRefresh) {
    cachedCompetencesFutiles = await loadCompetencesFutiles();
  }
  return cachedCompetencesFutiles;
};

/**
 * Invalide le cache (après modification)
 */
export const invalidateCompetencesFutilesCache = () => {
  cachedCompetencesFutiles = null;
};

// ============================================================================
// VALIDATION DES PRÉDILECTIONS
// ============================================================================

/**
 * Valide que toutes les compétences de prédilection existent dans la BDD
 * @param {Array} predilectionNames - Liste des noms de compétences
 * @returns {Promise<Object>} {valid: [], invalid: [], mapping: {name: id}}
 */
export const validateCompetencesPredilection = async (predilectionNames) => {
  const result = {
    valid: [],
    invalid: [],
    mapping: {}  // {name: uuid}
  };

  const allCompetences = await getCompetencesFutiles();
  
  for (const name of predilectionNames) {
    const comp = allCompetences.find(c => c.nom === name);
    if (comp) {
      result.valid.push(name);
      result.mapping[name] = comp.id;
    } else {
      result.invalid.push(name);
      console.warn(`⚠️  Compétence futile de prédilection non trouvée: "${name}"`);
    }
  }

  return result;
};

/**
 * Récupère les compétences futiles d'un type de fée par UUID
 * @param {string} fairyTypeId - UUID du type de fée
 * @returns {Promise<Array>} Liste des compétences avec choix
 */
export const getFairyCompetencesFutilesPredilection = async (fairyTypeId) => {
  try {
    const { data, error } = await supabase
      .from('fairy_competences_futiles_predilection')
      .select(`
        id,
        is_choice,
        choice_options,
        competence_futile:competence_futile_id (
          id,
          name,
          description
        )
      `)
      .eq('fairy_type_id', fairyTypeId);

    if (error) throw error;

    return data.map(item => ({
      id: item.id,
      isChoice: item.is_choice,
      choiceOptions: item.choice_options,
      competence: item.competence_futile ? {
        id: item.competence_futile.id,
        nom: item.competence_futile.name,
        description: item.competence_futile.description
      } : null
    }));
  } catch (error) {
    console.error('Erreur chargement compétences futiles prédilection:', error);
    return [];
  }
};

// ============================================================================
// PROFILS
// ============================================================================

/**
 * Charge tous les profils depuis Supabase
 * @returns {Promise<Array>} Liste des profils
 */
export const loadProfils = async () => {
  try {
    const { data, error } = await supabase
      .from('profils')
      .select('*')
      .order('name_masculine');

    if (error) throw error;

    return data.map(profil => ({
      id: profil.id,
      nom: profil.name_masculine,
      nomFeminin: profil.name_feminine,
      description: profil.description,
      traits: profil.traits || [],
      icon: profil.icon || '👤'
    }));
  } catch (error) {
    console.error('Erreur chargement profils:', error);
    return [];
  }
};

// ============================================================================
// COMPÉTENCES
// ============================================================================

/**
 * Charge toutes les compétences avec leurs profils
 * @returns {Promise<Object>} Object avec compétences par profil et toutes les compétences
 */
export const loadCompetences = async () => {
  try {
    const { data, error } = await supabase
      .from('competences')
      .select(`
        id,
        name,
        description,
        has_specialites,
        specialites,
        profil:profil_id (
          id,
          name_masculine
        )
      `)
      .order('name');

    if (error) throw error;

    // Format pour compatibilité avec data.js
    const competences = {};
    const competencesParProfil = {};

    data.forEach(comp => {
      const competence = {
        id: comp.id,
        nom: comp.name,
        description: comp.description,
        hasSpecialites: comp.has_specialites,
        specialites: comp.specialites || [],
        profil: comp.profil?.name_masculine
      };

      // Index par nom pour accès direct
      competences[comp.name] = competence;

      // Grouper par profil
      const profilName = comp.profil?.name_masculine;
      if (profilName) {
        if (!competencesParProfil[profilName]) {
          competencesParProfil[profilName] = [];
        }
        competencesParProfil[profilName].push(competence);
      }
    });

    return {
      competences,
      competencesParProfil
    };
  } catch (error) {
    console.error('Erreur chargement compétences:', error);
    return { competences: {}, competencesParProfil: {} };
  }
};

/**
 * Récupère une compétence par son nom
 * @param {string} name - Nom de la compétence
 * @returns {Promise<Object|null>}
 */
export const getCompetenceByName = async (name) => {
  try {
    const { data, error } = await supabase
      .from('competences')
      .select(`
        id,
        name,
        description,
        has_specialites,
        specialites,
        profil:profil_id (name_masculine)
      `)
      .eq('name', name)
      .single();

    if (error) throw error;

    return {
      id: data.id,
      nom: data.name,
      description: data.description,
      hasSpecialites: data.has_specialites,
      specialites: data.specialites || [],
      profil: data.profil?.name_masculine
    };
  } catch (error) {
    console.warn(`Compétence non trouvée: ${name}`);
    return null;
  }
};

// ============================================================================
// TYPES DE FÉES
// ============================================================================

/**
 * Charge tous les types de fées depuis Supabase
 * @returns {Promise<Object>} Object avec fairyData, fairyTypes, fairyTypesByAge
 */
export const loadFairyTypes = async () => {
  try {
    const { data, error } = await supabase
      .from('fairy_types')
      .select('*')
      .order('name');

    if (error) throw error;

    // Format pour compatibilité avec data.js
    const fairyData = {};
    const fairyTypesByAge = {
      traditionnelles: [],
      modernes: []
    };

    data.forEach(fairy => {
      const fairyInfo = {
        id: fairy.id,
        anciennete: fairy.era,
        description: fairy.description,
        caracteristiques: {
          agilite: { min: fairy.agilite_min, max: fairy.agilite_max },
          constitution: { min: fairy.constitution_min, max: fairy.constitution_max },
          force: { min: fairy.force_min, max: fairy.force_max },
          precision: { min: fairy.precision_min, max: fairy.precision_max },
          esprit: { min: fairy.esprit_min, max: fairy.esprit_max },
          perception: { min: fairy.perception_min, max: fairy.perception_max },
          prestance: { min: fairy.prestance_min, max: fairy.prestance_max },
          sangFroid: { min: fairy.sang_froid_min, max: fairy.sang_froid_max }
        },
        // Ces données seront chargées séparément si nécessaire
        competencesPredilection: [],
        competencesFutilesPredilection: [],
        capacites: { fixe1: null, fixe2: null, choix: [] },
        pouvoirs: []
      };

      fairyData[fairy.name] = fairyInfo;

      // Grouper par âge
      if (fairy.era === 'traditionnelle') {
        fairyTypesByAge.traditionnelles.push(fairy.name);
      } else {
        fairyTypesByAge.modernes.push(fairy.name);
      }
    });

    const fairyTypes = [...fairyTypesByAge.traditionnelles, ...fairyTypesByAge.modernes];

    return {
      fairyData,
      fairyTypes,
      fairyTypesByAge
    };
  } catch (error) {
    console.error('Erreur chargement types de fées:', error);
    return {
      fairyData: {},
      fairyTypes: [],
      fairyTypesByAge: { traditionnelles: [], modernes: [] }
    };
  }
};

/**
 * Charge les détails complets d'un type de fée (avec compétences, capacités, pouvoirs)
 * @param {string} fairyName - Nom du type de fée
 * @returns {Promise<Object>}
 */
export const loadFairyDetails = async (fairyName) => {
  try {
    // Récupérer le type de fée
    const { data: fairy, error: fairyError } = await supabase
      .from('fairy_types')
      .select('*')
      .eq('name', fairyName)
      .single();

    if (fairyError) throw fairyError;

    // Charger compétences de prédilection
    const { data: compPred, error: compPredError } = await supabase
      .from('fairy_competences_predilection')
      .select('competence_name, specialite')
      .eq('fairy_type_id', fairy.id);

    // Charger compétences futiles de prédilection
    const { data: compFutPred, error: compFutPredError } = await supabase
      .from('fairy_competences_futiles_predilection')
      .select(`
        is_choice,
        choice_options,
        competence_futile:competence_futile_id (name)
      `)
      .eq('fairy_type_id', fairy.id);

    // Charger capacités
    const { data: capacites, error: capacitesError } = await supabase
      .from('fairy_capacites')
      .select('capacite_type, nom, description')
      .eq('fairy_type_id', fairy.id);

    // Charger pouvoirs
    const { data: pouvoirs, error: pouvoirsError } = await supabase
      .from('fairy_pouvoirs')
      .select('nom, description')
      .eq('fairy_type_id', fairy.id);

    // Formatter les données
    const fairyDetails = {
      id: fairy.id,
      anciennete: fairy.era,
      description: fairy.description,
      caracteristiques: {
        agilite: { min: fairy.agilite_min, max: fairy.agilite_max },
        constitution: { min: fairy.constitution_min, max: fairy.constitution_max },
        force: { min: fairy.force_min, max: fairy.force_max },
        precision: { min: fairy.precision_min, max: fairy.precision_max },
        esprit: { min: fairy.esprit_min, max: fairy.esprit_max },
        perception: { min: fairy.perception_min, max: fairy.perception_max },
        prestance: { min: fairy.prestance_min, max: fairy.prestance_max },
        sangFroid: { min: fairy.sang_froid_min, max: fairy.sang_froid_max }
      },
      competencesPredilection: compPred?.map(cp => ({
        nom: cp.competence_name,
        specialite: cp.specialite
      })) || [],
      competencesFutilesPredilection: compFutPred?.map(cfp => {
        if (cfp.is_choice) {
          return {
            isChoix: true,
            options: cfp.choice_options
          };
        }
        return cfp.competence_futile?.name;
      }) || [],
      capacites: {
        fixe1: capacites?.find(c => c.capacite_type === 'fixe1') || null,
        fixe2: capacites?.find(c => c.capacite_type === 'fixe2') || null,
        choix: capacites?.filter(c => c.capacite_type === 'choix') || []
      },
      pouvoirs: pouvoirs || []
    };

    return fairyDetails;
  } catch (error) {
    console.error(`Erreur chargement détails fée ${fairyName}:`, error);
    return null;
  }
};

// ============================================================================
// CACHE GLOBAL
// ============================================================================

let cachedProfils = null;
let cachedCompetences = null;
let cachedFairyTypes = null;

/**
 * Charge toutes les données du jeu avec cache
 * @param {boolean} forceRefresh - Force le rechargement
 * @returns {Promise<Object>}
 */
export const loadAllGameData = async (forceRefresh = false) => {
  if (!forceRefresh && cachedProfils && cachedCompetences && cachedFairyTypes) {
    return {
      profils: cachedProfils,
      competences: cachedCompetences.competences,
      competencesParProfil: cachedCompetences.competencesParProfil,
      competencesFutiles: cachedCompetencesFutiles,
      fairyData: cachedFairyTypes.fairyData,
      fairyTypes: cachedFairyTypes.fairyTypes,
      fairyTypesByAge: cachedFairyTypes.fairyTypesByAge
    };
  }

  // Charger toutes les données en parallèle
  const [profils, competencesData, fairyTypesData, competencesFutiles] = await Promise.all([
    loadProfils(),
    loadCompetences(),
    loadFairyTypes(),
    getCompetencesFutiles()
  ]);

  // Mettre en cache
  cachedProfils = profils;
  cachedCompetences = competencesData;
  cachedFairyTypes = fairyTypesData;
  cachedCompetencesFutiles = competencesFutiles;

  return {
    profils,
    competences: competencesData.competences,
    competencesParProfil: competencesData.competencesParProfil,
    competencesFutiles,
    fairyData: fairyTypesData.fairyData,
    fairyTypes: fairyTypesData.fairyTypes,
    fairyTypesByAge: fairyTypesData.fairyTypesByAge
  };
};

/**
 * Invalide tous les caches
 */
export const invalidateAllCaches = () => {
  cachedProfils = null;
  cachedCompetences = null;
  cachedFairyTypes = null;
  cachedCompetencesFutiles = null;
};
