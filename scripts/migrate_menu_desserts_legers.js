// scripts/migrate_menu_desserts_legers.js
// Ajout additif (idempotent) de desserts légers d'apparat — nécessaires pour que
// la règle de non-doublon entremets/dessert dispose de vrais candidats en
// catégorie 'dessert' (corbeille de fruits, macarons, chocolats fins, petits fours).
require('dotenv').config();
const { Client } = require('pg');

const NIVEAUX_BOURG_HAUT = ['bourgeois', 'grande_bourgeoisie', 'aristocratie'];
const TOUTES_SAISONS = ['printemps', 'ete', 'automne', 'hiver'];

const nouveauxDesserts = [
  {
    nom: 'Corbeille de fruits de saison',
    description_narrative: "Une pyramide de fruits choisis, posée sur un lit de feuilles de vigne.",
    description_reussite_critique: "Les fruits, choisis un à un par le maître d'hôtel, composent une pyramide d'une fraîcheur parfaite.",
    description_echec_partiel: "Quelques fruits de la corbeille manquent un peu de maturité.",
    description_echec_critique: "Les fruits n'étaient pas de la première fraîcheur et gâtent toute la corbeille.",
  },
  {
    nom: 'Assortiment de macarons',
    description_narrative: "De petites coques colorées, présentées en pyramide sur un plat d'argent.",
    description_reussite_critique: "Les macarons, lisses et craquelés comme il se doit, offrent un assortiment de couleurs et de parfums ravissant.",
    description_echec_partiel: "Quelques coques sont un peu fragiles.",
    description_echec_critique: "Les coques n'ont pas formé de collerette et restent plates et fissurées.",
  },
  {
    nom: 'Chocolats fins',
    description_narrative: "Une petite boîte de chocolats, chacun nappé d'un glaçage différent.",
    description_reussite_critique: "Chaque chocolat, soigneusement garni, fond délicatement sur la langue.",
    description_echec_partiel: "Le glaçage de quelques chocolats est un peu terne.",
    description_echec_critique: "Le chocolat a blanchi à la conservation et perd tout son brillant.",
  },
  {
    nom: 'Petits fours secs',
    description_narrative: "Un assortiment de bouchées sucrées miniatures, dressé en étages.",
    description_reussite_critique: "L'assortiment, varié et délicat, ravit l'œil autant que le palais.",
    description_echec_partiel: "Quelques petits fours sont un peu trop cuits sur les bords.",
    description_echec_critique: "Les petits fours ont trop séché et s'effritent au moindre contact.",
  },
];

async function main() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  const { rows: superAdminRows } = await client.query(
    `SELECT u.id FROM auth.users u JOIN public.profiles p ON p.id = u.id WHERE p.role = 'super_admin' ORDER BY u.created_at LIMIT 1;`
  );
  const auteurId = superAdminRows[0]?.id || null;

  for (const d of nouveauxDesserts) {
    const { rows: existants } = await client.query(
      `SELECT id FROM public.menu_plats WHERE categorie = 'dessert' AND nom = $1;`,
      [d.nom]
    );
    if (existants.length > 0) {
      console.log(`  "${d.nom}" déjà présent, ignoré`);
      continue;
    }
    await client.query(
      `INSERT INTO public.menu_plats
         (nom, categorie, niveaux, saisons, difficulte, accord_vin,
          description_narrative, description_reussite_critique, description_echec_partiel, description_echec_critique,
          statut, auteur_id)
       VALUES ($1, 'dessert', $2, $3, 1, NULL, $4, $5, $6, $7, 'approuve', $8);`,
      [
        d.nom, NIVEAUX_BOURG_HAUT, TOUTES_SAISONS,
        d.description_narrative, d.description_reussite_critique, d.description_echec_partiel, d.description_echec_critique,
        auteurId,
      ]
    );
    console.log(`✓ "${d.nom}" ajouté`);
  }

  await client.end();
  console.log('\n✓ Migration desserts légers terminée.');
}

main().catch((e) => { console.error(e); process.exit(1); });
