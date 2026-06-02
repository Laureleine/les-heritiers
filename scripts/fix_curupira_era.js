const { Client } = require('pg');
require('dotenv').config();

(async () => {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  const { rows } = await client.query(
    "SELECT new_data FROM public.data_change_requests WHERE id = $1",
    ['7bc6233f-6333-4e97-bed7-819b3af6e0a9']
  );
  const nd = rows[0].new_data;
  nd.era = 'traditionnelle';

  await client.query(
    "UPDATE public.data_change_requests SET new_data = $1::jsonb WHERE id = $2",
    [JSON.stringify(nd), '7bc6233f-6333-4e97-bed7-819b3af6e0a9']
  );

  console.log('✅ era: traditionnelle ajouté au Curupira !');
  await client.end();
})().catch(e => {
  console.error('Erreur:', e.message);
  process.exit(1);
});
