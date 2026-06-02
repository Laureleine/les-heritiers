const { Client } = require('pg');
require('dotenv').config();

(async () => {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  const { rows: dates } = await client.query(
    "SELECT date::text, COUNT(*) as count FROM public.journal_articles WHERE date >= '1890-01-01' AND date < '1891-01-01' GROUP BY date ORDER BY date"
  );
  
  if (dates.length === 0) {
    console.log('Aucun article en 1890.');
    await client.end();
    return;
  }

  console.log('Articles trouvés en 1890 :');
  let total = 0;
  dates.forEach(r => {
    console.log('  ' + r.date + ': ' + r.count + ' articles');
    total += parseInt(r.count);
  });
  console.log('Total: ' + total + ' articles');

  const res = await client.query("DELETE FROM public.journal_articles WHERE date >= '1890-01-01' AND date < '1891-01-01'");
  console.log('✅ ' + res.rowCount + ' articles supprimés de journal_articles.');

  const res2 = await client.query("DELETE FROM public.historical_events WHERE date >= '1890-01-01' AND date < '1891-01-01'");
  console.log('✅ ' + res2.rowCount + ' événements historiques supprimés.');

  await client.end();
})().catch(e => { console.error('Erreur:', e.message); process.exit(1); });
