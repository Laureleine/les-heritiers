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
  try {
    const { data, error } = await supabase
      .from('competences')
      .select(`
        id,
        name,
        description,
        has_specialites,
        profil:profil_id (id, name_masculine),
        specialites_ref:specialites (id, nom, is_official) 
      `)
      .order('name');

    if (error) throw error;

    const competences = {};
    const competencesParProfil = {};

    data.forEach(comp => {
      // Transformation des données pour l'app
      // On trie : officielles d'abord, puis alphabétique
      const rawSpecs = comp.specialites_ref || [];
      const formattedSpecs = rawSpecs.sort((a, b) => {
          if (a.is_official !== b.is_official) return a.is_official ? -1 : 1;
          return a.nom.localeCompare(b.nom);
      });

      const competence = {
        id: comp.id,
        nom: comp.name,
        description: comp.description,
        hasSpecialites: comp.has_specialites,
        // On garde la structure attendue par l'UI mais avec des objets
        specialites: formattedSpecs, 
        profil: comp.profil?.name_masculine
      };

      competences[comp.name] = competence;

      const profilName = comp.profil?.name_masculine;
      if (profilName) {
        if (!competencesParProfil[profilName]) competencesParProfil[profilName] = [];
        competencesParProfil[profilName].push(competence);
      }
    });

    return { competences, competencesParProfil };

  } catch (error) {
    console.error('Erreur chargement compétences:', error);
    return { competences: {}, competencesParProfil: {} };
  }
};

// ============================================================================
// TYPES DE FÉES (RÉSOLUTION ET CHOIX MULTIPLES)
// ============================================================================
export const loadFairyTypes = async () => {
  try {
    // --- ÉTAPE PRÉLIMINAIRE : Charger le dictionnaire des compétences (ID -> Nom) ---
    // Indispensable pour traduire les choice_ids en noms affichables
    const { data: allCompsRef, error: compsRefError } = await supabase
      .from('competences')
      .select('id, name');
    
    if (compsRefError) throw compsRefError;

    // Création d'un Map pour un accès rapide :  "uuid" => "Nom Compétence"
    const compNameMap = {};
    allCompsRef.forEach(c => {
        compNameMap[c.id] = c.name;
    });

    // --------------------------------------------------------------------------------

    // 1. Charger les types de fées
    const { data, error } = await supabase
      .from('fairy_types')
      .select('*')
      .order('name');

    if (error) throw error;

    // 2. Charger les compétences de prédilection (UTILES)
    // CORRECTION : On récupère choice_ids (tableau d'UUIDs)
    const { data: allCompPred, error: compPredError } = await supabase
      .from('fairy_competences_predilection')
      .select(`
        fairy_type_id,
        specialite,
        is_choice,
        is_specialite_choice,
        choice_ids,      
        choice_options,  
        competence:competences ( name ) 
      `);

    if (compPredError) throw compPredError;

    // 3. Charger les compétences de prédilection (FUTILES)
    const { data: allCompFutPred, error: compFutPredError } = await supabase
      .from('fairy_competences_futiles_predilection')
      .select(`
        fairy_type_id,
        is_choice,
        choice_options,
        competence_futile:competence_futile_id ( name )
      `);

    if (compFutPredError) throw compFutPredError;

    // --- Organisation des données ---

    const compPredByFairy = {};
    const compFutPredByFairy = {};

    // A. Traitement des Compétences UTILES
    if (allCompPred) {
      allCompPred.forEach(cp => {
        if (!compPredByFairy[cp.fairy_type_id]) {
          compPredByFairy[cp.fairy_type_id] = [];
        }

        // CAS A : Choix de Compétence (ex: Orc -> Mêlée OU Tir)
        if (cp.is_choice) {
            // CORRECTION MAJEURE : Traduction des IDs en Noms
            let optionsNoms = [];
            
            if (cp.choice_ids && Array.isArray(cp.choice_ids)) {
                // On mappe les IDs vers les noms grâce au dictionnaire chargé au début
                optionsNoms = cp.choice_ids
                    .map(uuid => compNameMap[uuid])
                    .filter(Boolean); // On retire les éventuels nulls si ID non trouvé
            } 
            // Fallback : si choice_ids vide, on regarde choice_options (compatibilité)
            else if (cp.choice_options && Array.isArray(cp.choice_options)) {
                optionsNoms = cp.choice_options;
            }

            compPredByFairy[cp.fairy_type_id].push({
                isChoix: true,
                options: optionsNoms // Le front recevra bien ["Mêlée", "Tir"]
            });
        } 
        // CAS B : Compétence Fixe (ex: Gargouille -> Art de la guerre)
        else {
            const nomCompetence = cp.competence?.name;
            
            if (nomCompetence) {
                // Pour les spécialités, on garde choice_options (souvent du texte simple)
                // Sauf si vous utilisez aussi des IDs pour les spécialités, mais c'est rare ici
                const specOptionsArray = Array.isArray(cp.choice_options) ? cp.choice_options : [];

                compPredByFairy[cp.fairy_type_id].push({
                    nom: nomCompetence,
                    specialite: cp.specialite,
                    isSpecialiteChoix: cp.is_specialite_choice,
                    options: specOptionsArray 
                });
            }
        }
      });
    }

    // B. Traitement des Compétences FUTILES
    if (allCompFutPred) {
      allCompFutPred.forEach(cfp => {
        if (!compFutPredByFairy[cfp.fairy_type_id]) {
          compFutPredByFairy[cfp.fairy_type_id] = [];
        }
        if (cfp.is_choice) {
          compFutPredByFairy[cfp.fairy_type_id].push({
            isChoix: true,
            options: cfp.choice_options || []
          });
        } else {
          const nomCompFutile = cfp.competence_futile?.name;
          if (nomCompFutile) {
             compFutPredByFairy[cfp.fairy_type_id].push(nomCompFutile);
          }
        }
      });
    }

    // --- Construction de l'objet final (Reste inchangé) ---    // 6. Formatage final de l'objet fairyData
    const fairyData = {};
    const fairyTypesByAge = { traditionnelles: [], modernes: [] };

    data.forEach(fairy => {
      const fairyInfo = {
        id: fairy.id,
		nameMasculine: fairy.name_masculine || fairy.name, // Fallback sur le nom de base
        nameFeminine: fairy.name_feminine || fairy.name,   // Fallback sur le nom de base
        allowedGenders: fairy.allowed_genders || ['Homme', 'Femme'],		
        anciennete: fairy.era,
        description: fairy.description,
        avantages: fairy.avantages || [],       // Charge le tableau ou vide par défaut
        desavantages: fairy.desavantages || [], // Charge le tableau ou vide par défaut
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

/**
 * Ajoute une spécialité publique à une compétence existante
 * @param {string} competenceId - UUID de la compétence
 * @param {string} newSpeciality - Nom de la nouvelle spécialité
 * @returns {Promise<Array>} La nouvelle liste des spécialités
 */
export const addGlobalSpeciality = async (competenceId, newSpeciality) => {
  try {
    // Insertion dans la nouvelle table
    const { data, error } = await supabase
      .from('specialites')
      .insert([{
        competence_id: competenceId,
        nom: newSpeciality,
        is_official: false // C'est une création communautaire
      }])
      .select()
      .single();

    if (error) {
        // Gestion erreur doublon (code 23505 en postgre)
        if (error.code === '23505') throw new Error("Cette spécialité existe déjà.");
        throw error;
    }

    // On retourne l'objet formaté pour mise à jour locale immédiate
    return {
        id: data.id,
        nom: data.nom,
        is_official: data.is_official
    };

  } catch (error) {
    console.error("Erreur ajout spécialité:", error);
    throw error;
  }
};