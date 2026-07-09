const { Client } = require('pg');
const fs = require('fs');

const envLines = fs.readFileSync('.env', 'utf8').split('\n');
const env = {};
envLines.forEach(line => {
  const idx = line.indexOf('=');
  if (idx > 0) env[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
});

const client = new Client({ connectionString: env.SUPABASE_DB_URL });
client.connect().then(async () => {
  const res = await client.query(`
    SELECT routine_name, routine_definition
    FROM information_schema.routines
    WHERE routine_schema = 'public'
    AND routine_name = ANY(ARRAY['get_admin_stats','get_community_stats_detail','get_users_to_notify'])
    ORDER BY routine_name
  `);
  res.rows.forEach(r => {
    console.log('=== ' + r.routine_name + ' ===');
    console.log(r.routine_definition ? r.routine_definition.slice(0, 800) : '(vide)');
    console.log('');
  });
  await client.end();
}).catch(e => { console.error(e.message); process.exit(1); });
