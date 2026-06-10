// src/config/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Variables Supabase manquantes — vérifiez vos Environment Variables.');
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

  