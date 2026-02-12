// src/utils/supabaseStorage.js
// Version: 3.3.1
// Build: 2026-02-04 23:00
// Migration: Correction de l'export 'getPublicCharacters' et consolidation du mode PWA.

import { supabase } from '../config/supabase';

// ============================================================================
// CONFIGURATION ET CACHE HORS-LIGNE
// ============================================================================
const OFFLINE_STORAGE_KEY = 'heritiers_character_cache';
let userCharactersCache = null;

/**
 * Nettoie les données pour optimiser le stockage JSONB.
 */
const cleanupCharacterData = (char) => {
  const cleanRangs = (rangs) => 
    Object.fromEntries(Object.entries(rangs || {}).filter(([_, v]) => v > 0));

  return {
    ...char,
    competencesLibres: {
      ...char.competencesLibres,
      rangs: cleanRangs(char.competencesLibres?.rangs)
    },
    competencesFutiles: {
      ...char.competencesFutiles,
      rangs: cleanRangs(char.competencesFutiles?.rangs)
    }
  };
};

/**
 * Mappage Universel : Gère les colonnes SQL (snake_case) ET les vieux JSON (camelCase).
 */
const mapDatabaseToCharacter = (char) => {
  // 1. Sécurité : On essaie de récupérer les données, qu'elles soient à la racine ou dans un champ 'data'
  // Cela permet de récupérer les infos des personnages créés avec d'anciennes versions.
  const source = { ...char.data, ...char };

  // 2. Extraction permissive des blocs de compétences (snake_case OU camelCase)
  const cLibres = source.competences_libres || source.competencesLibres || {};
  const cFutiles = source.competences_futiles || source.competencesFutiles || {};

  return {
    id: source.id,
	userId: source.user_id, // <--- AJOUT CRUCIAL : Permet d'identifier le créateur
    nom: source.nom || 'Sans nom',
    sexe: source.sexe || '',
    
    // Tente de lire type_fee (base) ou typeFee (vieux JSON)
    typeFee: source.type_fee || source.typeFee || '', 
    anciennete: source.anciennete || '',

    caracteristiques: source.caracteristiques || {},

    profils: source.profils || { 
        majeur: { nom: '', trait: '', competences: [] }, 
        mineur: { nom: '', trait: '', competences: [] } 
    },

    competencesLibres: {
        rangs: cLibres.rangs || {},
        choixPredilection: cLibres.choixPredilection || {},
        choixSpecialite: cLibres.choixSpecialite || {},
        // C'est souvent ici que ça casse pour les vieux persos : on met {} par défaut
        choixSpecialiteUser: cLibres.choixSpecialiteUser || {} 
    },

    competencesFutiles: {
        rangs: cFutiles.rangs || {},
        choixPredilection: cFutiles.choixPredilection || {},
        personnalisees: cFutiles.personnalisees || []
    },

    capaciteChoisie: source.capacite_choisie || source.capaciteChoisie || '',
    pouvoirs: source.pouvoirs || [],
    
    isPublic: source.is_public || source.isPublic || false,
    
    // Dates : Gestion souple
    created_at: source.created_at || new Date().toISOString(),
    updated_at: source.updated_at || new Date().toISOString()
  };
};

// ============================================================================
// GESTION DU MODE PWA (LOCALSTORAGE)
// ============================================================================

const updateOfflineMirror = (characters) => {
  try {
    localStorage.setItem(OFFLINE_STORAGE_KEY, JSON.stringify(characters));
  } catch (e) {
    console.error('Erreur LocalStorage cache:', e);
  }
};

const getOfflineMirror = () => {
  const stored = localStorage.getItem(OFFLINE_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// ============================================================================
// RÉCUPÉRATION ET PERSISTANCE
// ============================================================================

export const getUserCharacters = async (forceRefresh = false) => {
  try {
    if (userCharactersCache && !forceRefresh) return userCharactersCache;

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return getOfflineMirror();

    const { data, error } = await supabase
      .from('characters')
      .select('*')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false });

    if (error) throw error;
    
    const mappedData = (data || []).map(mapDatabaseToCharacter);
    userCharactersCache = mappedData;
    updateOfflineMirror(mappedData);
    return mappedData;
  } catch (error) {
    return getOfflineMirror();
  }
};

/**
 * RÉSOLUTION DE L'ERREUR : Exportation explicite pour CharacterList.js [1, 2].
 */
export const getPublicCharacters = async () => {
  try {
    const { data, error } = await supabase
      .from('characters')
      .select('*')
      .eq('is_public', true)
      .order('updated_at', { ascending: false });

    if (error) throw error;
    return (data || []).map(mapDatabaseToCharacter);
  } catch (error) {
    console.error('Erreur getPublicCharacters:', error);
    return [];
  }
};

export const saveCharacterToSupabase = async (character) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Utilisateur non connecté');

    const cleaned = cleanupCharacterData(character);
    const characterData = {
      user_id: user.id,
      nom: cleaned.nom,
      sexe: cleaned.sexe,
      type_fee: cleaned.typeFee,
      anciennete: cleaned.anciennete,
      caracteristiques: cleaned.caracteristiques,
      profils: cleaned.profils,
      competences_libres: cleaned.competencesLibres,
      competences_futiles: cleaned.competencesFutiles,
      capacite_choisie: cleaned.capaciteChoisie,
      pouvoirs: cleaned.pouvoirs,
      is_public: cleaned.isPublic || false,
      updated_at: new Date().toISOString()
    };

    // VÉRIFICATION DE CONFLIT [Conversation History]
    if (character.id) {
      const { data: remote } = await supabase.from('characters').select('updated_at').eq('id', character.id).single();
      if (remote && remote.updated_at !== character.updated_at) {
        throw new Error('CONFLIT : Ce personnage a été modifié ailleurs.');
      }
    }

    const { data, error } = character.id 
      ? await supabase.from('characters').update(characterData).eq('id', character.id).select().single()
      : await supabase.from('characters').insert([characterData]).select().single();

    if (error) throw error;
    userCharactersCache = null; 
    return mapDatabaseToCharacter(data);
  } catch (error) {
    throw error;
  }
};

export const deleteCharacterFromSupabase = async (characterId) => {
  const { error } = await supabase.from('characters').delete().eq('id', characterId);
  if (error) throw error;
  userCharactersCache = null;
  return true;
};

/**
 * Récupère TOUS les personnages (Fonction Admin)
 */
export const getAllCharactersAdmin = async () => {
  try {
    const { data, error } = await supabase
      .from('characters')
      .select('*') // Pas de filtre user_id ou is_public
      .order('updated_at', { ascending: false });

    if (error) throw error;

    // Mapping identique à getPublicCharacters
    return (data || []).map(char => ({
      id: char.id,
      nom: char.nom,
      sexe: char.sexe,
      typeFee: char.type_fee,
      anciennete: char.anciennete,
      caracteristiques: char.caracteristiques,
      profils: char.profils,
      competencesLibres: char.competences_libres,
      competencesFutiles: char.competences_futiles,
      capaciteChoisie: char.capacite_choisie,
      pouvoirs: char.pouvoirs,
      isPublic: char.is_public,
      userId: char.user_id, // Important pour vérifier la propriété
      created_at: char.created_at,
      updated_at: char.updated_at
    }));
  } catch (error) {
    console.error('Erreur Admin getAllCharacters:', error);
    return [];
  }
};

export const toggleCharacterVisibility = async (characterId, isPublic) => {
  const { data, error } = await supabase
    .from('characters')
    .update({ is_public: isPublic, updated_at: new Date().toISOString() })
    .eq('id', characterId)
    .select().single();
  if (error) throw error;
  userCharactersCache = null;
  return mapDatabaseToCharacter(data);
};

