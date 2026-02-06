// src/utils/supabaseStorage.js
// Version: 3.3.0
// Build: 2026-02-04 20:00
// Migration: Mode Hors-ligne (PWA) via LocalStorage, Nettoyage auto et Optimistic Locking.

import { supabase } from '../config/supabase';

// ============================================================================
// CONFIGURATION ET CACHE
// ============================================================================
const OFFLINE_STORAGE_KEY = 'heritiers_character_cache';
let userCharactersCache = null;

/**
 * Nettoie les données (suppression des rangs à 0) pour optimiser le JSONB.
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
 * Mappage Base de données (snake_case) -> Application (camelCase)
 * Assure la présence des nouvelles structures de choix [Source 642, 657].
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
  isPublic: char.is_public,
  created_at: char.created_at,
  updated_at: char.updated_at
});

// ============================================================================
// GESTION DU MODE HORS-LIGNE (PWA)
// ============================================================================

const updateOfflineMirror = (characters) => {
  try {
    localStorage.setItem(OFFLINE_STORAGE_KEY, JSON.stringify(characters));
  } catch (e) {
    console.error('Erreur LocalStorage (Cache plein ?):', e);
  }
};

const getOfflineMirror = () => {
  const stored = localStorage.getItem(OFFLINE_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

// ============================================================================
// RÉCUPÉRATION DES PERSONNAGES
// ============================================================================

export const getUserCharacters = async (forceRefresh = false) => {
  try {
    if (userCharactersCache && !forceRefresh) return userCharactersCache;

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return getOfflineMirror(); // Mode consultation hors-ligne

    const { data, error } = await supabase
      .from('characters')
      .select('*')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false });

    if (error) throw error;
    
    const mappedData = (data || []).map(mapDatabaseToCharacter);
    
    // Mise à jour des caches
    userCharactersCache = mappedData;
    updateOfflineMirror(mappedData);
    
    return mappedData;
  } catch (error) {
    console.warn('Utilisation du mode hors-ligne (Erreur réseau ou déconnecté)');
    return getOfflineMirror();
  }
};

// ============================================================================
// SAUVEGARDE ET GESTION DES CONFLITS
// ============================================================================

export const saveCharacterToSupabase = async (character) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Action impossible en mode hors-ligne');

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

    // VÉRIFICATION DE CONFLIT (Optimistic Locking)
    if (character.id) {
      const { data: remote } = await supabase.from('characters').select('updated_at').eq('id', character.id).single();
      if (remote && remote.updated_at !== character.updated_at) {
        throw new Error('CONFLIT : Ce personnage a été modifié ailleurs. Veuillez copier vos changements et rafraîchir.');
      }
    }

    const { data, error } = character.id 
      ? await supabase.from('characters').update(characterData).eq('id', character.id).select().single()
      : await supabase.from('characters').insert([characterData]).select().single();

    if (error) throw error;

    const finalChar = mapDatabaseToCharacter(data);
    
    // Rafraîchissement forcé du cache global
    userCharactersCache = null; 
    await getUserCharacters(true); 

    return finalChar;
  } catch (error) {
    console.error('Erreur sauvegarde:', error);
    throw error;
  }
};

// TODO: Implémenter Compression (v3.4) et Historique (v4.0)

export const deleteCharacterFromSupabase = async (characterId) => {
  const { error } = await supabase.from('characters').delete().eq('id', characterId);
  if (error) throw error;
  userCharactersCache = null;
  await getUserCharacters(true);
  return true;
};