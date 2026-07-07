// scripts/migrate_eubage.js
// Ajoute la compétence Druidisme, sa spécialité et l'item social Eubage.
// Usage : node scripts/migrate_eubage.js
import 'dotenv/config';
import pg from 'pg';

const { Client } = pg;
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

async function run() {
  await client.connect();
  console.log('Connecté à la base.');

  // 1. Compétence Druidisme (sans profil)
  const existingComp = await client.query(
    `SELECT id FROM public.competences WHERE name = 'Druidisme'`
  );
  let druidismeId;
  if (existingComp.rows.length > 0) {
    druidismeId = existingComp.rows[0].id;
    console.log('✓ Compétence Druidisme déjà présente :', druidismeId);
  } else {
    const { rows } = await client.query(`
      INSERT INTO public.competences (name, description, has_specialites)
      VALUES (
        'Druidisme',
        'Art sacré des druides — maîtrise des forces naturelles, des cercles magiques et des savoirs celtiques anciens.',
        true
      )
      RETURNING id;
    `);
    druidismeId = rows[0].id;
    console.log('✓ Compétence Druidisme créée :', druidismeId);
  }

  // 2. Spécialité "Connaissance du druidisme"
  const existingSpec = await client.query(
    `SELECT id FROM public.specialites WHERE nom = 'Connaissance du druidisme' AND competence_id = $1`,
    [druidismeId]
  );
  if (existingSpec.rows.length > 0) {
    console.log('✓ Spécialité "Connaissance du druidisme" déjà présente.');
  } else {
    await client.query(`
      INSERT INTO public.specialites (nom, competence_id, is_official)
      VALUES ('Connaissance du druidisme', $1, true);
    `, [druidismeId]);
    console.log('✓ Spécialité "Connaissance du druidisme" créée.');
  }

  // 3. Item social "Eubage (Druide novice)"
  const existingItem = await client.query(
    `SELECT id FROM public.social_items WHERE nom = 'Eubage (Druide novice)'`
  );
  if (existingItem.rows.length > 0) {
    console.log('✓ Item "Eubage (Druide novice)" déjà présent.');
  } else {
    await client.query(`
      INSERT INTO public.social_items
        (nom, description, cout, categorie, profils_autorises, effets_techniques, is_choix_multiple)
      VALUES (
        'Eubage (Druide novice)',
        'Initiation druidique. Exige le profil majeur Érudit ou Aventurier, Survie ≥ 4 et Occultisme ≥ 4. Transfère les 2 rangs automatiques d''une compétence de profil majeur vers Druidisme. Confère gratuitement la spécialité Connaissance du druidisme.',
        5,
        'titre',
        '["Érudit", "Aventurier"]',
        '{"profil_majeur_requis": ["Érudit", "Aventurier"], "prereqs_competences": {"Survie": 4, "Occultisme": 4}}',
        false
      );
    `);
    console.log('✓ Item "Eubage (Druide novice)" créé.');
  }

  await client.end();
  console.log('\nMigration Eubage terminée avec succès.');
}

run().catch(err => { console.error(err); process.exit(1); });
