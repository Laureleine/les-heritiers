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
 * Mappage Base de données -> Application.
 * Assure la structure des choix de prédilections [4].
 */
const mapDatabaseToCharacter = (char) => ({
  id: char.id,
  nom: char.nom,
  sexe: char.sexe,
  typeFee: char.type_fee,
  anciennete: char.anciennete,
  caracteristiques: char.caracteristiques || {},
  profils: char.profils || { majeur: { nom: '', trait: '' }, mineur: { nom: '', trait: '' } },
  competencesLibres: {
    rangs: char.competences_libres?.rangs || {},
    choixPredilection: char.competences_libres?.choixPredilection || {},
    choixSpecialite: char.competences_libres?.choixSpecialite || {}
  },
  competencesFutiles: char.competences_futiles || { rangs: {}, personnalisees: [] },
  capaciteChoisie: char.capacite_choisie,
  pouvoirs: char.pouvoirs || [],
  is_public: char.is_public,
  created_at: char.created_at,
  updated_at: char.updated_at
});

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