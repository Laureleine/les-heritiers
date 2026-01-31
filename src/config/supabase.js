// src/config/supabase.js
// Version: 2.0
// Description: Configuration Supabase
// Dernière modification: 2025-01-30

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uvckugcixiugysnsbekb.supabase.co';
const supabaseAnonKey = 'sb_publishable_B_Jd-7oDWrRQkt4EW6Ikgw_9EFseDRb';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
