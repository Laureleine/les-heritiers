const { Client } = require('pg');
require('dotenv').config();

(async () => {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  const { rows } = await client.query(
    `SELECT column_name, is_nullable, column_default 
     FROM information_schema.columns 
     WHERE table_name = 'fairy_types' 
     ORDER BY ordinal_position`
  );

  console.log('Colonnes NOT NULL sans défaut:');
  rows.forEach(r => {
    if (r.is_nullable === 'NO' && r.column_default === null) {
      console.log('  ⚠️ ' + r.column_name);
    }
  });
  console.log();

  rows.forEach(r => {
    console.log('  ' + r.column_name + ' (' + r.is_nullable + ', default: ' + (r.column_default || '-') + ')');
  });

  await client.end();
})().catch(e => { console.error(e); process.exit(1); });
