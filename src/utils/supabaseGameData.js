// src/utils/supabaseGameData.js
// Version: 3.3.0
// Build: 2026-02-04 12:00
// Migration: Spécialités au choix et Alertes Admin pour UIDs orphelins.

import { supabase } from '../config/supabase';

// ============================================================================
// LOGIQUE DE RÉSOLUTION ET ALERTES
// ============================================================================

/**
 * Crée une Map d'indexage UUID -> Nom.
 * Alerte l'admin via la console si des compétences sont mal configurées.
 */
const createCompetenceLookup = async () => {
  const { data, error } = await supabase.from('competences').select('id, name');
  if (error) {
    console.error('[ADMIN] Erreur critique de lecture des compétences:', error);
    return new Map();
  }
  return new Map(data.map(c => [c.id, c.name]));
};

/**
 * Vérifie l'intégrité d'une prédilection et génère une alerte si l'UID est introuvable.
 */
const resolveAndValidate = (id, lookup, fairyName, context) => {
  const name = lookup.get(id);
  if (!name && id) {
    console.warn(`[ADMIN ALERT] ID Compétence orphelin détecté pour la fée "${fairyName}" dans ${context}. ID: ${id}`);
    return `!! ERREUR ID !!`; // Marqueur visuel pour l'interface
  }
  return name;
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
// TYPES DE FÉES (RESOLUTION V3.3.0)
// ============================================================================

export const loadFairyTypes = async () => {
  try {
    const [lookup, { data: types, error: tErr }] = await Promise.all([
      createCompetenceLookup(),
      supabase.from('fairy_types').select('*').order('name')
    ]);

    if (tErr) throw tErr;

    const { data: allCompPred } = await supabase
      .from('fairy_competences_predilection')
      .select('*');

    const { data: allCompFutPred } = await supabase
      .from('fairy_competences_futiles_predilection')
      .select('fairy_type_id, is_choice, choice_options, competence_futile:competence_futile_id (name)');

    const compPredByFairy = {};
    const compFutPredByFairy = {};

    // Mapping Prédilections UTILES avec Validation
    allCompPred?.forEach(cp => {
      if (!compPredByFairy[cp.fairy_type_id]) compPredByFairy[cp.fairy_type_id] = [];
      
      const fairyName = types.find(t => t.id === cp.fairy_type_id)?.name || "Inconnue";

      compPredByFairy[cp.fairy_type_id].push({
        nom: cp.is_choice ? null : resolveAndValidate(cp.competence_id, lookup, fairyName, "Prédilection fixe"),
        specialite: cp.specialite,
        isChoix: cp.is_choice,
        options: cp.is_choice ? cp.choice_ids.map(id => resolveAndValidate(id, lookup, fairyName, "Choix multiple")) : [],
        isSpecialiteChoix: cp.is_specialite_choice,
        specialiteOptions: cp.specialite_options || []
      });
    });

    // Mapping Prédilections FUTILES
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

/**
 * Détails d'une fée avec résolution spécifique des choix de spécialité.
 */
export const loadFairyDetails = async (fairyName) => {
  try {
    const lookup = await createCompetenceLookup();
    const { data: fairy, error: fErr } = await supabase.from('fairy_types').select('*').eq('name', fairyName).single();
    if (fErr) throw fErr;

    const [compPred, compFut, capacites, pouvoirs] = await Promise.all([
      supabase.from('fairy_competences_predilection').select('*').eq('fairy_type_id', fairy.id),
      supabase.from('fairy_competences_futiles_predilection').select('is_choice, choice_options, competence_futile:competence_futile_id(name)').eq('fairy_type_id', fairy.id),
      supabase.from('fairy_capacites').select('capacite_type, nom, description, bonus').eq('fairy_type_id', fairy.id),
      supabase.from('fairy_pouvoirs').select('nom, description, bonus').eq('fairy_type_id', fairy.id)
    ]);

    return {
      id: fairy.id,
      description: fairy.description,
      caracteristiques: {
        agilite: { min: fairy.agilite_min, max: fairy.agilite_max },
        constitution: { min: fairy.constitution_min, max: fairy.constitution_max },
        force: { min: fairy.force_min, max: fairy.force_max },
        precision: { min: fairy.precision_min, max: fairy.precision_max },
        esprit: { min: fairy.esprit_min, max: fairy.esprit_max },
        perception: { min: fairy.perception_min, max: fairy.perception_max },
        prestance: { min: fairy.prestance_min, max: fairy.prestance_max },
        sangFroid: { min: fairy.sang_froid_min, max: fairy.sang_f_max }
      },
      competencesPredilection: compPred.data?.map(cp => ({
        nom: cp.is_choice ? null : resolveAndValidate(cp.competence_id, lookup, fairyName, "Détails fixes"),
        specialite: cp.specialite,
        isChoix: cp.is_choice,
        options: cp.is_choice ? cp.choice_ids.map(id => resolveAndValidate(id, lookup, fairyName, "Détails choix multiple")) : [],
        isSpecialiteChoix: cp.is_specialite_choice,
        specialiteOptions: cp.specialite_options || []
      })) || [],
      // ... reste du code (capacités, pouvoirs) identique à v3.2.0
    };
  } catch (error) {
    console.error(`Erreur loadFairyDetails ${fairyName}:`, error);
    return null;
  }
};

// ... loadAllGameData et invalidateAllCaches identiques à v3.2.0