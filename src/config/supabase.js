// src/config/supabase.js
// Version: 2.2
// Description: Configuration Supabase sécurisée
// Dernière modification: 2026-02-21

import { createClient } from '@supabase/supabase-js';
  
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL ou Key manquante. Vérifiez votre fichier .env');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,      // ✅ Renouvellement auto avant expiration
    persistSession: true,        // ✅ Garde la session entre rechargements
    detectSessionInUrl: true,    // ✅ NÉCESSAIRE pour "Mot de passe oublié"
    storage: window.localStorage,// ✅ Stockage local forcé
    storageKey: 'supabase.auth.token' // ✅ Clé prévisible
  }
});