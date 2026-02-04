// src/utils/supabaseStorage.js
// Version: 3.0.3
// Build: 2026-02-04 04:15
// Description: Gestion du stockage des personnages dans Supabase

import { supabase } from '../config/supabase';

/**
 * Récupère tous les personnages de l'utilisateur connecté
 */
export const getUserCharacters = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await supabase
      .from('characters')
      .select('*')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Erreur getUserCharacters:', error);
    return [];
  }
};

/**
 * Récupère tous les personnages publics
 */
export const getPublicCharacters = async () => {
  try {
    const { data, error } = await supabase
      .from('characters')
      .select('*')
      .eq('is_public', true)
      .order('updated_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Erreur getPublicCharacters:', error);
    return [];
  }
};

/**
 * Sauvegarde un personnage dans Supabase
 */
export const saveCharacterToSupabase = async (character) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Utilisateur non connecté');

    const characterData = {
      ...character,
      user_id: user.id,
      updated_at: new Date().toISOString()
    };

    // Si le personnage a un ID, on fait un update, sinon un insert
    if (character.id) {
      const { data, error } = await supabase
        .from('characters')
        .update(characterData)
        .eq('id', character.id)
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } else {
      const { data, error } = await supabase
        .from('characters')
        .insert([characterData])
        .select()
        .single();

      if (error) throw error;
      return data;
    }
  } catch (error) {
    console.error('Erreur saveCharacterToSupabase:', error);
    throw error;
  }
};

/**
 * Supprime un personnage de Supabase
 */
export const deleteCharacterFromSupabase = async (characterId) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Utilisateur non connecté');

    const { error } = await supabase
      .from('characters')
      .delete()
      .eq('id', characterId)
      .eq('user_id', user.id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Erreur deleteCharacterFromSupabase:', error);
    throw error;
  }
};

/**
 * Change la visibilité d'un personnage (public/privé)
 */
export const toggleCharacterVisibility = async (characterId, isPublic) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Utilisateur non connecté');

    const { data, error } = await supabase
      .from('characters')
      .update({ 
        is_public: isPublic,
        updated_at: new Date().toISOString()
      })
      .eq('id', characterId)
      .eq('user_id', user.id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erreur toggleCharacterVisibility:', error);
    throw error;
  }
};

/**
 * Récupère un personnage spécifique par son ID
 */
export const getCharacterById = async (characterId) => {
  try {
    const { data, error } = await supabase
      .from('characters')
      .select('*')
      .eq('id', characterId)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erreur getCharacterById:', error);
    throw error;
  }
};
