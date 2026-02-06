// src/utils/supabaseGameData.js
// Version: 3.4.1
// Build: 2026-02-04 23:30
// Description: Moteur de données Supabase avec cache et résolution d'identifiants.
// Correction: Restauration des exports 'getCompetencesFutiles' et 'invalidateCompetencesFutilesCache'.

import { supabase } from '../config/supabase';

// ============================================================================
// LOGIQUE DE RÉSOLUTION ET ALERTES (POUR ADMINISTRATEUR)
// ============================================================================

const createCompetenceLookup = async () => {
  const { data, error } = await supabase.from('competences').select('id, name');
  if (error) {
    console.error('[ADMIN ALERT] Erreur critique de lecture des compétences:', error);
    return new Map();
  }
  return new Map(data.map(c => [c.id, c.name]));
};

const resolveAndValidate = (id, lookup, fairyName, context) => {
  const name = lookup.get(id);
  if (!name && id) {
    console.warn(`[ADMIN ALERT] ID Compétence orphelin détecté pour "${fairyName}" (${context}). ID: ${id}`);
    return `!! ERREUR ID !!`;
  }
  return name;
};

// ============================================================================
// COMPÉTENCES FUTILES (RESTAURATION V3.4.1)
// ============================================================================

let cachedCompetencesFutiles = null;

export const loadCompetencesFutiles = async () => {
  try {
    const { data, error } = await supabase
      .from('competences_futiles')
      .select('id, name, description')
      .order('name');
    if (error) throw error;
    return data.map(comp => ({
      id: comp.id,
      nom: comp.name,
      description: comp.description
    }));
  } catch (error) {
    console.error('Erreur chargement compétences futiles:', error);
    return [];
  }
};

/**
 * RECTIFICATION : Exportation pour StepCompetencesFutiles.js
 */
export const getCompetencesFutiles = async (forceRefresh = false) => {
  if (!cachedCompetencesFutiles || forceRefresh) {
    cachedCompetencesFutiles = await loadCompetencesFutiles();
  }
  return cachedCompetencesFutiles;
};

export const invalidateCompetencesFutilesCache = () => {
  cachedCompetencesFutiles = null;
};

export const getCompetenceFutileIdByName = async (name) => {
  const { data } = await supabase.from('competences_futiles').select('id').eq('name', name).single();
  return data?.id || null;
};

export const addCompetenceFutile = async (name, description) => {
  const { data, error } = await supabase
    .from('competences_futiles')
    .insert([{ name, description }])
    .select().single();
  if (error) throw error;
  return { id: data.id, nom: data.name, description: data.description };
};

// ============================================================================
// PROFILS ET COMPÉTENCES UTILES
// ============================================================================

export const loadProfils = async () => {
  const { data, error } = await supabase.from('profils').select('*').order('name_masculine');
  if (error) return [];
  return data.map(p => ({
    id: p.id, nom: p.name_masculine, nomFeminin: p.name_feminine,
    description: p.description, traits: p.traits || [], icon: p.icon || '👤'
  }));
};

export const loadCompetences = async () => {
  const { data, error } = await supabase
    .from('competences')
    .select(`id, name, description, has_specialites, specialites, profil:profil_id (id, name_masculine)`)
    .order('name');
  
  if (error) return { competences: {}, competencesParProfil: {} };

  const competences = {};
  const competencesParProfil = {};

  data.forEach(comp => {
    const competence = {
      id: comp.id, nom: comp.name, description: comp.description,
      hasSpecialites: comp.has_specialites, specialites: comp.specialites || [],
      profil: comp.profil?.name_masculine
    };
    competences[comp.name] = competence;
    const pName = comp.profil?.name_masculine;
    if (pName) {
      if (!competencesParProfil[pName]) competencesParProfil[pName] = [];
      competencesParProfil[pName].push(competence);
    }
  });

  return { competences, competencesParProfil };
};

// ============================================================================
// TYPES DE FÉES (RÉSOLUTION ET CHOIX MULTIPLES)
// ============================================================================

export const loadFairyTypes = async () => {
  try {
    const [lookup, { data: types, error: tErr }] = await Promise.all([
      createCompetenceLookup(),
      supabase.from('fairy_types').select('*').order('name')
    ]);

    if (tErr) throw tErr;

    const { data: allCompPred } = await supabase.from('fairy_competences_predilection').select('*');
    const { data: allCompFutPred } = await supabase
      .from('fairy_competences_futiles_predilection')
      .select('fairy_type_id, is_choice, choice_options, competence_futile:competence_futile_id (name)');

    const compPredByFairy = {};
    const compFutPredByFairy = {};

    allCompPred?.forEach(cp => {
      if (!compPredByFairy[cp.fairy_type_id]) compPredByFairy[cp.fairy_type_id] = [];
      const fName = types.find(t => t.id === cp.fairy_type_id)?.name || "Inconnue";
      
      compPredByFairy[cp.fairy_type_id].push({
        nom: cp.is_choice ? null : resolveAndValidate(cp.competence_id, lookup, fName, "Fixe"),
        specialite: cp.specialite,
        isChoix: cp.is_choice,
        options: cp.is_choice ? cp.choice_ids.map(id => resolveAndValidate(id, lookup, fName, "Choix")) : [],
        isSpecialiteChoix: cp.is_specialite_choice,
        specialiteOptions: cp.specialite_options || []
      });
    });

    allCompFutPred?.forEach(cfp => {
      if (!compFutPredByFairy[cfp.fairy_type_id]) compFutPredByFairy[cfp.fairy_type_id] = [];
      if (cfp.is_choice) {
        compFutPredByFairy[cfp.fairy_type_id].push({ isChoix: true, options: cfp.choice_options });
      } else {
        compFutPredByFairy[cfp.fairy_type_id].push(cfp.competence_futile?.name);
      }
    });

    const fairyData = {};
    const fairyTypesByAge = { traditionnelles: [], modernes: [] };

    types.forEach(f => {
      fairyData[f.name] = {
        id: f.id, anciennete: f.era, description: f.description,
        caracteristiques: {
          agilite: { min: f.agilite_min, max: f.agilite_max },
          constitution: { min: f.constitution_min, max: f.constitution_max },
          force: { min: f.force_min, max: f.force_max },
          precision: { min: f.precision_min, max: f.precision_max },
          esprit: { min: f.esprit_min, max: f.esprit_max },
          perception: { min: f.perception_min, max: f.perception_max },
          prestance: { min: f.prestance_min, max: f.prestance_max },
          sangFroid: { min: f.sang_f_min, max: f.sang_f_max }
        },
        competencesPredilection: compPredByFairy[f.id] || [],
        competencesFutilesPredilection: compFutPredByFairy[f.id] || [],
        capacites: { fixe1: null, fixe2: null, choix: [] },
        pouvoirs: []
      };
      if (f.era === 'traditionnelle') fairyTypesByAge.traditionnelles.push(f.name);
      else fairyTypesByAge.modernes.push(f.name);
    });

    return { fairyData, fairyTypes: types.map(t => t.name), fairyTypesByAge };
  } catch (error) {
    console.error('Erreur loadFairyTypes:', error);
    return { fairyData: {}, fairyTypes: [], fairyTypesByAge: { traditionnelles: [], modernes: [] } };
  }
};

// ============================================================================
// CACHE GLOBAL ET ORCHESTRATION
// ============================================================================

let cachedProfils = null;
let cachedCompetences = null;
let cachedFairyTypes = null;

export const loadAllGameData = async (forceRefresh = false) => {
  if (!forceRefresh && cachedProfils && cachedCompetences && cachedFairyTypes && cachedCompetencesFutiles) {
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

  const [p, c, f, fut] = await Promise.all([
    loadProfils(), loadCompetences(), loadFairyTypes(), getCompetencesFutiles(forceRefresh)
  ]);

  cachedProfils = p; cachedCompetences = c; cachedFairyTypes = f; 

  return {
    profils: p, 
    competences: c.competences, 
    competencesParProfil: c.competencesParProfil,
    competencesFutiles: fut, 
    fairyData: f.fairyData, 
    fairyTypes: f.fairyTypes,
    fairyTypesByAge: f.fairyTypesByAge
  };
};

export const invalidateAllCaches = () => {
  cachedProfils = null; cachedCompetences = null; cachedFairyTypes = null; cachedCompetencesFutiles = null;
};