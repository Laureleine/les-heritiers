// scripts/fix_feerie_indices.js
// Les indices 8-13 de l'élément Avalon appartiennent à l'élément Féérie (PDF p.9).
// Ils ont été mal attribués lors du seeding initial.
// Ce script les déplace vers element_nom='Féérie', ordre 1-6.
const { Client } = require('pg');
const fs = require('fs');
const lines = fs.readFileSync('.env', 'utf8').split('\n');
const env = {};
for (const l of lines) {
  const i = l.indexOf('=');
  if (i > 0) env[l.slice(0, i).trim()] = l.slice(i + 1).trim();
}
const client = new Client({ connectionString: env.SUPABASE_DB_URL });

client.connect().then(async () => {
  console.log('✓ Connecté');

  // Vérification préalable
  const { rows: before } = await client.query(
    "SELECT ordre, left(texte, 70) AS t FROM public.indices_verites WHERE element_nom = 'Avalon' AND ordre >= 8 ORDER BY ordre"
  );
  console.log(`\nItems à déplacer (${before.length}) :`);
  before.forEach(r => console.log(`  Avalon #${r.ordre} → Féérie #${r.ordre - 7} | ${r.t}`));

  if (before.length !== 6) {
    console.error(`\n⚠️  Attendu 6 items, trouvé ${before.length}. Abandon.`);
    await client.end(); process.exit(1);
  }

  // Déplacement : element_nom + réordonnancement
  for (const row of before) {
    await client.query(
      "UPDATE public.indices_verites SET element_nom = 'Féérie', element_type = 'concept', ordre = $1 WHERE element_nom = 'Avalon' AND ordre = $2",
      [row.ordre - 7, row.ordre]
    );
  }

  // Confirmation
  const { rows: after } = await client.query(
    "SELECT type, ordre, left(texte, 70) AS t FROM public.indices_verites WHERE element_nom = 'Féérie' ORDER BY type, ordre"
  );
  console.log(`\nÉtat Féérie après fix (${after.length} items) :`);
  after.forEach(r => console.log(`  ${r.type.padEnd(18)} #${r.ordre} | ${r.t}`));

  const { rows: avalon } = await client.query(
    "SELECT COUNT(*) AS n FROM public.indices_verites WHERE element_nom = 'Avalon'"
  );
  console.log(`\nAvalon : ${avalon[0].n} items restants`);

  console.log('\n✅ Fix appliqué — indices Féérie correctement rattachés.');
  await client.end();
}).catch(e => { console.error('❌', e.message); process.exit(1); });
