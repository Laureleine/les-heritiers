// scripts/fix_eubage_specialite.js
// Corrige le rattachement de "Connaissance du druidisme" :
// elle appartient à Occultisme (spécialité d'Occultisme), pas à Druidisme.
import 'dotenv/config';
import pg from 'pg';

const { Client } = pg;
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

async function run() {
  await client.connect();
  console.log('Connecté à la base.');

  const { rows: occ } = await client.query(
    `SELECT id FROM public.competences WHERE name = 'Occultisme'`
  );
  if (!occ.length) throw new Error('Compétence Occultisme introuvable.');
  const occId = occ[0].id;
  console.log('✓ Occultisme id :', occId);

  const { rowCount } = await client.query(
    `UPDATE public.specialites
     SET competence_id = $1
     WHERE nom = 'Connaissance du druidisme'`,
    [occId]
  );
  console.log(`✓ ${rowCount} spécialité(s) mises à jour → Occultisme.`);

  await client.end();
  console.log('\nCorrection terminée.');
}

run().catch(err => { console.error(err); process.exit(1); });
