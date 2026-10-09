require('dotenv').config();
const { Client } = require('pg');
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
client.connect().then(async () => {
  const { rows } = await client.query(
    "SELECT tablename, policyname, cmd, qual FROM pg_policies WHERE tablename IN ('xp_transactions', 'characters') ORDER BY tablename, cmd"
  );
  for (const r of rows) {
    console.log(`\n[${r.tablename}] ${r.policyname} (${r.cmd}):`);
    console.log('  USING:', r.qual);
  }
  await client.end();
}).catch(e => { console.error(e.message); process.exit(1); });
