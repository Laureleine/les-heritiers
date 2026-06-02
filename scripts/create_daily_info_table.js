const { Client } = require('pg');
require('dotenv').config();

(async () => {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  // Création de la table journal_daily_info
  await client.query(`
    CREATE TABLE IF NOT EXISTS public.journal_daily_info (
      date date PRIMARY KEY,
      sunrise time NOT NULL,
      sunset time NOT NULL,
      moon_phase text NOT NULL,
      moon_visible text NOT NULL,
      moon_aspect text NOT NULL,
      moon_desc text NOT NULL,
      moon_icon text NOT NULL,
      weather_condition text NOT NULL,
      weather_tmin numeric,
      weather_tmax numeric,
      weather_precip_mm numeric,
      weather_wind_kmh numeric,
      weather_icon text NOT NULL,
      weather_desc text NOT NULL,
      daily_summary text,
      created_at timestamptz NOT NULL DEFAULT now(),
      updated_at timestamptz NOT NULL DEFAULT now()
    );
  `);
  console.log('✅ Table journal_daily_info créée.');

  // RLS : lecture publique, écriture restreinte
  await client.query('ALTER TABLE public.journal_daily_info ENABLE ROW LEVEL SECURITY;');
  await client.query(`
    DROP POLICY IF EXISTS "lecture_publique" ON public.journal_daily_info;
    CREATE POLICY "lecture_publique" ON public.journal_daily_info
      FOR SELECT USING (true);
  `);
  console.log('✅ RLS configurée.');

  await client.end();
})().catch(e => { console.error(e); process.exit(1); });
