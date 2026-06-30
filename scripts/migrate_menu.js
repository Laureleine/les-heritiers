// scripts/migrate_menu.js
// Crée les tables menu_plats, menu_structures, menu_sauvegardes avec RLS,
// puis insère le corpus de bootstrap (scripts/menu_seed_data.js).
require('dotenv').config();
const { Client } = require('pg');
const { plats, structures } = require('./menu_seed_data');

const CATEGORIES = [
  'boisson_chaude', 'viennoiserie', 'potage', 'hors_d_oeuvre', 'poisson',
  'viande', 'volaille', 'gibier', 'abats', 'legume', 'entremets',
  'fromage', 'dessert', 'patisserie',
];

async function createSchema(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS public.menu_plats (
      id                             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
      nom                            TEXT        NOT NULL,
      categorie                      TEXT        NOT NULL CHECK (categorie IN (${CATEGORIES.map(c => `'${c}'`).join(',')})),
      niveaux                        TEXT[]      NOT NULL DEFAULT '{}',
      saisons                        TEXT[]      NOT NULL DEFAULT '{}',
      nb_convives_min                INT,
      nb_convives_max                INT,
      difficulte                     INT         NOT NULL CHECK (difficulte BETWEEN 1 AND 5),
      accord_vin                     TEXT,
      description_narrative          TEXT,
      description_reussite_critique  TEXT,
      description_echec_partiel      TEXT,
      description_echec_critique     TEXT,
      statut                         TEXT        NOT NULL DEFAULT 'en_attente' CHECK (statut IN ('en_attente','approuve','refuse')),
      auteur_id                      UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
      validateur_id                  UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
      motif_refus                    TEXT,
      created_at                     TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
  console.log('✓ Table menu_plats créée');

  await client.query(`
    CREATE TABLE IF NOT EXISTS public.menu_structures (
      id                UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
      type_repas        TEXT        NOT NULL CHECK (type_repas IN ('petit_dejeuner','dejeuner','diner','souper','gouter','banquet')),
      niveau_financier  TEXT        NOT NULL CHECK (niveau_financier IN ('populaire','bourgeois','grande_bourgeoisie','aristocratie')),
      tranche_convives  TEXT        NOT NULL CHECK (tranche_convives IN ('intime','tablee','banquet')),
      services          JSONB       NOT NULL,
      textes_intro      TEXT[]      NOT NULL DEFAULT '{}',
      created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
  console.log('✓ Table menu_structures créée');

  await client.query(`
    CREATE TABLE IF NOT EXISTS public.menu_sauvegardes (
      id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
      utilisateur_id  UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
      titre           TEXT,
      parametres      JSONB       NOT NULL,
      menu_genere     JSONB       NOT NULL,
      created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
  console.log('✓ Table menu_sauvegardes créée');

  await client.query(`CREATE INDEX IF NOT EXISTS idx_menu_plats_statut ON public.menu_plats(statut);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_menu_plats_categorie ON public.menu_plats(categorie);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_menu_plats_auteur ON public.menu_plats(auteur_id);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_menu_structures_lookup
    ON public.menu_structures(type_repas, niveau_financier, tranche_convives);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_menu_sauvegardes_utilisateur ON public.menu_sauvegardes(utilisateur_id);`);
  console.log('✓ Index créés');
}

async function enableRls(client) {
  await client.query(`ALTER TABLE public.menu_plats ENABLE ROW LEVEL SECURITY;`);
  await client.query(`ALTER TABLE public.menu_structures ENABLE ROW LEVEL SECURITY;`);
  await client.query(`ALTER TABLE public.menu_sauvegardes ENABLE ROW LEVEL SECURITY;`);

  const isGardien = `EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('super_admin','gardien'))`;

  const policies = [
    {
      table: 'menu_plats', name: 'menu_plats_select',
      sql: `CREATE POLICY "menu_plats_select" ON public.menu_plats FOR SELECT TO authenticated
            USING (statut = 'approuve' OR auteur_id = auth.uid());`,
    },
    {
      table: 'menu_plats', name: 'menu_plats_insert',
      sql: `CREATE POLICY "menu_plats_insert" ON public.menu_plats FOR INSERT TO authenticated
            WITH CHECK (auteur_id = auth.uid() AND (statut = 'en_attente' OR ${isGardien}));`,
    },
    {
      table: 'menu_plats', name: 'menu_plats_update_admin',
      sql: `CREATE POLICY "menu_plats_update_admin" ON public.menu_plats FOR UPDATE TO authenticated
            USING (${isGardien});`,
    },
    {
      table: 'menu_structures', name: 'menu_structures_select',
      sql: `CREATE POLICY "menu_structures_select" ON public.menu_structures FOR SELECT TO authenticated
            USING (true);`,
    },
    {
      table: 'menu_structures', name: 'menu_structures_insert_admin',
      sql: `CREATE POLICY "menu_structures_insert_admin" ON public.menu_structures FOR INSERT TO authenticated
            WITH CHECK (${isGardien});`,
    },
    {
      table: 'menu_structures', name: 'menu_structures_update_admin',
      sql: `CREATE POLICY "menu_structures_update_admin" ON public.menu_structures FOR UPDATE TO authenticated
            USING (${isGardien});`,
    },
    {
      table: 'menu_sauvegardes', name: 'menu_sauvegardes_select',
      sql: `CREATE POLICY "menu_sauvegardes_select" ON public.menu_sauvegardes FOR SELECT TO authenticated
            USING (utilisateur_id = auth.uid());`,
    },
    {
      table: 'menu_sauvegardes', name: 'menu_sauvegardes_insert',
      sql: `CREATE POLICY "menu_sauvegardes_insert" ON public.menu_sauvegardes FOR INSERT TO authenticated
            WITH CHECK (utilisateur_id = auth.uid());`,
    },
    {
      table: 'menu_sauvegardes', name: 'menu_sauvegardes_delete',
      sql: `CREATE POLICY "menu_sauvegardes_delete" ON public.menu_sauvegardes FOR DELETE TO authenticated
            USING (utilisateur_id = auth.uid());`,
    },
  ];

  for (const p of policies) {
    const { rows } = await client.query(
      `SELECT 1 FROM pg_policies WHERE tablename = $1 AND policyname = $2`,
      [p.table, p.name]
    );
    if (rows.length === 0) {
      await client.query(p.sql);
      console.log(`✓ Policy ${p.name} créée`);
    } else {
      console.log(`  Policy ${p.name} déjà existante`);
    }
  }
}

async function seedData(client) {
  const { rows: superAdminRows } = await client.query(
    `SELECT u.id FROM auth.users u JOIN public.profiles p ON p.id = u.id WHERE p.role = 'super_admin' ORDER BY u.created_at LIMIT 1;`
  );
  const auteurId = superAdminRows[0]?.id || null;

  const { rows: existingStructures } = await client.query(`SELECT COUNT(*)::int AS n FROM public.menu_structures;`);
  if (existingStructures[0].n === 0) {
    for (const s of structures) {
      await client.query(
        `INSERT INTO public.menu_structures (type_repas, niveau_financier, tranche_convives, services, textes_intro)
         VALUES ($1, $2, $3, $4, $5);`,
        [s.type_repas, s.niveau_financier, s.tranche_convives, JSON.stringify(s.services), s.textes_intro]
      );
    }
    console.log(`✓ ${structures.length} structures insérées`);
  } else {
    console.log(`  menu_structures déjà peuplée (${existingStructures[0].n} lignes), bootstrap ignoré`);
  }

  const { rows: existingPlats } = await client.query(`SELECT COUNT(*)::int AS n FROM public.menu_plats;`);
  if (existingPlats[0].n === 0) {
    for (const p of plats) {
      await client.query(
        `INSERT INTO public.menu_plats
           (nom, categorie, niveaux, saisons, nb_convives_min, nb_convives_max, difficulte, accord_vin,
            description_narrative, description_reussite_critique, description_echec_partiel, description_echec_critique,
            statut, auteur_id)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,'approuve',$13);`,
        [
          p.nom, p.categorie, p.niveaux, p.saisons, p.nb_convives_min ?? null, p.nb_convives_max ?? null,
          p.difficulte, p.accord_vin ?? null, p.description_narrative ?? null,
          p.description_reussite_critique ?? null, p.description_echec_partiel ?? null,
          p.description_echec_critique ?? null, auteurId,
        ]
      );
    }
    console.log(`✓ ${plats.length} plats insérés`);
  } else {
    console.log(`  menu_plats déjà peuplée (${existingPlats[0].n} lignes), bootstrap ignoré`);
  }
}

async function main() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  await createSchema(client);
  await enableRls(client);
  await seedData(client);

  await client.end();
  console.log('\n✓ Migration menu terminée.');
}

main().catch(e => { console.error(e); process.exit(1); });
