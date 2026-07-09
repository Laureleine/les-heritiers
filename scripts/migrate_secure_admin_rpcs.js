const { Client } = require('pg');
const fs = require('fs');

const envLines = fs.readFileSync('.env', 'utf8').split('\n');
const env = {};
envLines.forEach(line => {
  const idx = line.indexOf('=');
  if (idx > 0) env[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
});

const client = new Client({ connectionString: env.SUPABASE_DB_URL });

const migrations = [
  {
    name: 'get_admin_stats — ajout check rôle admin',
    sql: `
CREATE OR REPLACE FUNCTION public.get_admin_stats()
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  caller_role TEXT;
  result json;
BEGIN
  SELECT role INTO caller_role FROM profiles WHERE id = auth.uid();
  IF caller_role NOT IN ('super_admin', 'gardien') THEN
    RAISE EXCEPTION 'Accès refusé';
  END IF;

  SELECT json_build_object(
    'total_profiles', (SELECT count(*) FROM profiles),
    'total_characters', (SELECT count(*) FROM characters),
    'total_sealed', (SELECT count(*) FROM characters WHERE statut = 'scelle'),
    'total_cercles', (SELECT count(*) FROM cercles)
  ) INTO result;
  RETURN result;
END;
$$;`
  },
  {
    name: 'get_community_stats_detail — ajout check rôle admin',
    sql: `
CREATE OR REPLACE FUNCTION public.get_community_stats_detail()
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  caller_role TEXT;
  thirty_days_ago timestamptz := NOW() - INTERVAL '30 days';
  result json;
BEGIN
  SELECT role INTO caller_role FROM profiles WHERE id = auth.uid();
  IF caller_role NOT IN ('super_admin', 'gardien') THEN
    RAISE EXCEPTION 'Accès refusé';
  END IF;

  SELECT json_build_object(
    'fees', (
      SELECT json_agg(row_to_json(t) ORDER BY t.count DESC)
      FROM (
        SELECT type_fee, COUNT(*)::int AS count
        FROM characters WHERE type_fee IS NOT NULL
        GROUP BY type_fee
      ) t
    ),
    'profils_majeurs', (
      SELECT json_agg(row_to_json(t) ORDER BY t.count DESC)
      FROM (
        SELECT profils->'majeur'->>'nom' AS nom, COUNT(*)::int AS count
        FROM characters WHERE profils->'majeur'->>'nom' IS NOT NULL
        GROUP BY profils->'majeur'->>'nom'
      ) t
    ),
    'profils_mineurs', (
      SELECT json_agg(row_to_json(t) ORDER BY t.count DESC)
      FROM (
        SELECT profils->'mineur'->>'nom' AS nom, COUNT(*)::int AS count
        FROM characters WHERE profils->'mineur'->>'nom' IS NOT NULL
        GROUP BY profils->'mineur'->>'nom'
      ) t
    ),
    'active_users', (
      SELECT COUNT(DISTINCT user_id)::int FROM characters
      WHERE updated_at > thirty_days_ago
    )
  ) INTO result;
  RETURN result;
END;
$$;`
  }
];

client.connect().then(async () => {
  for (const m of migrations) {
    console.log('Migration : ' + m.name);
    await client.query(m.sql);
    console.log('  ✅ OK');
  }
  await client.end();
  console.log('\nToutes les migrations appliquées.');
}).catch(e => { console.error('❌ ' + e.message); process.exit(1); });
