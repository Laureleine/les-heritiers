const { Client } = require('pg');
require('dotenv').config();

(async () => {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  // Check historical_events columns
  const { rows: histCols } = await client.query(
    `SELECT column_name, data_type, is_nullable
     FROM information_schema.columns
     WHERE table_name = 'historical_events'
     ORDER BY ordinal_position`
  );
  console.log('=== historical_events ===');
  histCols.forEach(r => console.log('  ' + r.column_name + ' (' + r.data_type + ', ' + r.is_nullable + ')'));

  // Check journal_articles columns
  const { rows: artCols } = await client.query(
    `SELECT column_name, data_type, is_nullable
     FROM information_schema.columns
     WHERE table_name = 'journal_articles'
     ORDER BY ordinal_position`
  );
  console.log('\n=== journal_articles ===');
  artCols.forEach(r => console.log('  ' + r.column_name + ' (' + r.data_type + ', ' + r.is_nullable + ')'));

  // Check if any weather/moon data exists in historical_events
  const { rows: histSample } = await client.query(
    "SELECT * FROM public.historical_events LIMIT 2"
  );
  console.log('\n=== Échantillon historical_events ===');
  console.log(JSON.stringify(histSample, null, 2));

  // Check if journal_articles has weather/lune categories
  const { rows: luneArts } = await client.query(
    "SELECT category, COUNT(*) FROM public.journal_articles WHERE category IN ('Météo','Lune','Meteo') GROUP BY category"
  );
  console.log('\n=== Articles Météo/Lune en base ===');
  luneArts.forEach(r => console.log('  ' + r.category + ': ' + r.count));

  await client.end();
})().catch(e => { console.error(e); process.exit(1); });
