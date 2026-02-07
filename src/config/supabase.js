// src/config/supabase.js
// Version: 2.1
// Description: Configuration Supabase
// Dernière modification: 2026-01-30

import { createClient } from '@supabase/supabase-js';
  
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL ou Key manquante. Vérifiez votre fichier .env');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);