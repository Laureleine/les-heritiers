// src/utils/authUtils.js
// Utilitaires DRY pour l'authentification Supabase — centralisent le pattern
// `supabase.auth.getUser()` répété dans 7 fichiers du projet.

import { supabase } from '../config/supabase';

/**
 * Retourne l'utilisateur Supabase connecté, ou null s'il n'y en a pas.
 * Version silencieuse — à utiliser quand l'absence d'utilisateur est un cas normal.
 *
 * @returns {Promise<User|null>}
 */
export const getCurrentUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    return user || null;
};

/**
 * Retourne l'utilisateur connecté, ou lève une erreur si absent.
 * Version stricte — à utiliser dans les actions qui exigent une authentification.
 *
 * @param {string} [errorMsg] - Message d'erreur personnalisé
 * @returns {Promise<User>}
 * @throws {Error} Si l'utilisateur n'est pas connecté
 */
export const requireCurrentUser = async (errorMsg) => {
    const user = await getCurrentUser();
    if (!user) throw new Error(errorMsg || 'Vous devez être connecté pour effectuer cette action.');
    return user;
};
