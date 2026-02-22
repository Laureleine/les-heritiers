// src/config/supabase.js
// Version: 2.5
// Description: Configuration Supabase avec nouvelles API keys (sb_publishable_)
// Dernière modification: 2026-02-22

import { createClient } from '@supabase/supabase-js';
  
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

// Logs de debug
console.log('🔧 Initialisation Supabase...');
console.log('URL:', supabaseUrl ? '✅' : '❌');
console.log('Key:', supabaseAnonKey ? `✅ ${supabaseAnonKey.substring(0, 20)}...` : '❌');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Variables Supabase manquantes !');
  console.error('Vérifiez vos Environment Variables Vercel');
}

// Créer le client avec config moderne pour nouvelles clés
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder',
  {
	auth: {
	  flowType: 'pkce',
	  autoRefreshToken: true,
	  persistSession: true,
	  detectSessionInUrl: true,
	  
	  // ✅ FIX : Ancien storageKey pour récupérer session
	  storageKey: undefined,  // ← RÉCUPÈRE VOS TOKENS
	  storage: typeof window !== 'undefined' ? localStorage : null,
	  
	  debug: process.env.NODE_ENV === 'development'
	},
    
    // ✅ Config globale
    global: {
      headers: {
        'x-client-info': 'les-heritiers-app'
      }
    }
  }
);

// Debug global (temporaire)
if (typeof window !== 'undefined') {
  window.__supabase__ = supabase;
  window.__supabaseConfig__ = {
    url: supabaseUrl,
    hasKey: !!supabaseAnonKey,
    keyType: supabaseAnonKey?.startsWith('sb_publishable_') ? 'new-api' : 'legacy',
    version: require('@supabase/supabase-js/package.json').version
  };
  console.log('✅ Supabase exposé globalement:', window.__supabaseConfig__);
}

// Test rapide de connexion au chargement
supabase.auth.getSession()
  .then(({ data, error }) => {
    if (error) {
      console.error('❌ Erreur getSession:', error);
    } else {
      console.log('✅ Supabase connecté:', data.session ? 'Session active' : 'Pas de session');
    }
  })
  .catch(err => {
    console.error('❌ Exception Supabase:', err);
  });
  