// src/config/supabase.js
// Version: 2.3
// Description: Configuration Supabase sécurisée (fix session)
// Dernière modification: 2026-02-21

import { createClient } from '@supabase/supabase-js';
  
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL ou Key manquante. Vérifiez votre fichier .env');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,           // ✅ Renouvellement automatique
    persistSession: true,             // ✅ Garde la session
    detectSessionInUrl: true,         // ✅ Pour "Mot de passe oublié"
    storage: window.localStorage,     // ✅ Stockage explicite
    // ❌ PAS de storageKey personnalisé !
    // Laisse Supabase gérer ses propres clés
    flowType: 'pkce'                  // ✅ Sécurité PKCE activée
  }
});