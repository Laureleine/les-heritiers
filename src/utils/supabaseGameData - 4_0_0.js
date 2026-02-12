// src/utils/supabaseGameData.js
// Version: 3.5.2
// Description: Moteur de données Supabase avec cache et résolution d'identifiants.
// Correction: Déduplication stricte des prédilections pour éviter le bug "3x Mêlée ou Tir".
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

/*
export const loadFairyTypes = async () => {
  try {
    // 1. Charger les types de fées
    const { data, error } = await supabase
      .from('fairy_types')
      .select('*')
      .order('name');

    if (error) throw error;

    // 2. Charger TOUTES les compétences de prédilection (UTILES)
    // MODIFICATION CRITIQUE : On récupère LES DEUX types de choix (Compétence ET Spécialité)
    const { data: allCompPred, error: compPredError } = await supabase
      .from('fairy_competences_predilection')
      .select(`
        fairy_type_id, 
        specialite,
        is_specialite_choix,
        specialite_options,
        is_choix,
        choix_options,
        competence:competence_id ( name )
      `);

    // 3. Charger les compétences futiles (Code inchangé)
    const { data: allCompFutPred } = await supabase
      .from('fairy_competences_futiles_predilection')
      .select(`
        fairy_type_id,
        is_choice,
        choice_options,
        competence_futile:competence_futile_id (name)
      `);

    // 4. Organisation des données
    const compPredByFairy = {};
    const compFutPredByFairy = {};

    // Traitement des Compétences UTILES
    if (allCompPred) {
      allCompPred.forEach(cp => {
        if (!compPredByFairy[cp.fairy_type_id]) {
          compPredByFairy[cp.fairy_type_id] = [];
        }
        
        // Cas A : C'est un CHOIX DE COMPÉTENCE (Ex: Ange "Mêlée ou Tir")
        // Il n'y a pas de competence_id fixe, mais des options.
        if (cp.is_choix) {
             compPredByFairy[cp.fairy_type_id].push({
                isChoix: true,
                options: cp.choix_options, // ex: ['Mêlée', 'Tir']
                nom: 'Choix' // Placeholder
             });
        } 
        // Cas B : C'est une compétence FIXE (Ex: Gargouille "Occultisme")
        // Elle peut avoir une spécialité fixe OU un choix de spécialité
        else {
            const nomCompetence = cp.competence?.name || 'Inconnue';
            
            compPredByFairy[cp.fairy_type_id].push({
                nom: nomCompetence,
                specialite: cp.specialite,
                // Gestion du choix de spécialité (Gargouille)
                isSpecialiteChoix: cp.is_specialite_choix,
                optionsSpecialite: cp.specialite_options
            });
        }
      });
    }

    // Traitement des Compétences FUTILES (Code inchangé)
    if (allCompFutPred) {
      allCompFutPred.forEach(cfp => {
        if (!compFutPredByFairy[cfp.fairy_type_id]) compFutPredByFairy[cfp.fairy_type_id] = [];
        
        if (cfp.is_choice) {
          compFutPredByFairy[cfp.fairy_type_id].push({ isChoix: true, options: cfp.choice_options });
        } else {
          compFutPredByFairy[cfp.fairy_type_id].push(cfp.competence_futile?.name);
        }
      });
    }

    // 5. Formatage final
    const fairyData = {};
    const fairyTypesByAge = { traditionnelles: [], modernes: [] };

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
        competencesPredilection: compPredByFairy[fairy.id] || [],
        competencesFutilesPredilection: compFutPredByFairy[fairy.id] || [],
        capacites: { fixe1: null, fixe2: null, choix: [] },
        pouvoirs: []
      };

      fairyData[fairy.name] = fairyInfo;
      if (fairy.era === 'traditionnelle') fairyTypesByAge.traditionnelles.push(fairy.name);
      else fairyTypesByAge.modernes.push(fairy.name);
    });

    return { fairyData, fairyTypes: [...fairyTypesByAge.traditionnelles, ...fairyTypesByAge.modernes], fairyTypesByAge };

  } catch (error) {
    console.error('Erreur chargement types de fées:', error);
    return { fairyData: {}, fairyTypes: [], fairyTypesByAge: { traditionnelles: [], modernes: [] } };
  }
};
*/

export const loadFairyTypes = async () => {
  try {
    // 1. Charger les types de fées
    const { data, error } = await supabase
      .from('fairy_types')
      .select('*')
      .order('name');

    if (error) throw error;

    // 2. Charger une "Map" de référence (ID -> Nom) pour toutes les compétences
    // C'est indispensable pour traduire les choice_ids de l'Ange
    const { data: compList } = await supabase
      .from('competences')
      .select('id, name');
    
    const compMap = {};
    if (compList) {
        compList.forEach(c => compMap[c.id] = c.name);
    }

    // 3. Charger TOUTES les compétences de prédilection (UTILES)
    // Notez bien les noms de colonnes qui correspondent à votre schéma SQL
    const { data: allCompPred, error: compPredError } = await supabase
      .from('fairy_competences_predilection')
      .select(`
        fairy_type_id, 
        competence_id,
        specialite,
        is_choice,            
        choice_ids,       
        is_specialite_choix, 
        specialite_options,  
        competence:competence_id ( name )
      `);

    // 4. Charger les compétences futiles
    const { data: allCompFutPred } = await supabase
      .from('fairy_competences_futiles_predilection')
      .select(`
        fairy_type_id,
        is_choice,
        choice_options,
        competence_futile:competence_futile_id (name)
      `);

    // 5. Organisation des données
    const compPredByFairy = {};
    const compFutPredByFairy = {};

    // --- TRAITEMENT DES COMPÉTENCES UTILES ---
    if (allCompPred) {
      allCompPred.forEach(cp => {
        if (!compPredByFairy[cp.fairy_type_id]) {
          compPredByFairy[cp.fairy_type_id] = [];
        }
        
        // CAS A : Choix de Compétence (ex: Ange -> Mêlée ou Tir)
        // La BDD donne un tableau d'UUIDs (choice_ids). On les traduit en noms via compMap.
        if (cp.is_choice && cp.choice_ids && cp.choice_ids.length > 0) {
             const optionsNoms = cp.choice_ids.map(id => compMap[id]).filter(Boolean);
             
             compPredByFairy[cp.fairy_type_id].push({
                isChoix: true,
                options: optionsNoms, // On envoie ['Mêlée', 'Tir'] au front
                nom: 'Choix' 
             });
        } 
        // CAS B : Compétence Fixe (ex: Gargouille, Ondine)
        // Peut avoir un choix de spécialité
        else {
            const nomCompetence = cp.competence?.name;
            
            if (nomCompetence) {
                compPredByFairy[cp.fairy_type_id].push({
                    nom: nomCompetence,
                    specialite: cp.specialite,
                    // Gestion du Choix de SPÉCIALITÉ (Gargouille)
                    isSpecialiteChoix: cp.is_specialite_choix,
                    optionsSpecialite: cp.specialite_options || []
                });
            }
        }
      });
    }

    // --- Traitement des Compétences FUTILES ---
    if (allCompFutPred) {
      allCompFutPred.forEach(cfp => {
        if (!compFutPredByFairy[cfp.fairy_type_id]) compFutPredByFairy[cfp.fairy_type_id] = [];
        
        if (cfp.is_choice) {
          compFutPredByFairy[cfp.fairy_type_id].push({ isChoix: true, options: cfp.choice_options });
        } else {
          compFutPredByFairy[cfp.fairy_type_id].push(cfp.competence_futile?.name);
        }
      });
    }

    // 6. Formatage final de l'objet fairyData
    const fairyData = {};
    const fairyTypesByAge = { traditionnelles: [], modernes: [] };

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
        competencesPredilection: compPredByFairy[fairy.id] || [],
        competencesFutilesPredilection: compFutPredByFairy[fairy.id] || [],
        capacites: { fixe1: null, fixe2: null, choix: [] },
        pouvoirs: []
      };

      fairyData[fairy.name] = fairyInfo;
      
      if (fairy.era === 'traditionnelle') fairyTypesByAge.traditionnelles.push(fairy.name);
      else fairyTypesByAge.modernes.push(fairy.name);
    });

    return { 
        fairyData, 
        fairyTypes: [...fairyTypesByAge.traditionnelles, ...fairyTypesByAge.modernes], 
        fairyTypesByAge 
    };

  } catch (error) {
    console.error('Erreur chargement types de fées:', error);
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