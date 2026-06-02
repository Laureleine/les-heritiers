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

  // Set defaults for all NOT NULL stat columns missing from the request
  const defaults = {
    constitution_min: 1,
    force_min: 1,
    precision_max: 6,
    esprit_max: 6,
    perception_max: 6,
    prestance_max: 6,
    sang_froid_max: 6,
    taille_categorie: 'Moyenne',
  };

  for (const [key, val] of Object.entries(defaults)) {
    if (!(key in nd)) {
      nd[key] = val;
      console.log('  + ' + key + ': ' + val);
    }
  }

  await client.query(
    "UPDATE public.data_change_requests SET new_data = $1::jsonb WHERE id = $2",
    [JSON.stringify(nd), '7bc6233f-6333-4e97-bed7-819b3af6e0a9']
  );

  console.log('✅ Curupira mis à jour avec toutes les stats manquantes !');
  await client.end();
})().catch(e => { console.error('Erreur:', e.message); process.exit(1); });
