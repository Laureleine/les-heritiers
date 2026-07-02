# Générateur de Poche — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a new "Générateur de Poche" tool (random pocket-content generator for a searched NPC, Paris 1899) to the GM Tools hub, with all table content living entirely in Supabase (canon + community entries) instead of hardcoded JS.

**Architecture:** A dedicated Supabase table `poche_table_entries` (mirrors the proven `pnj_table_entries` model) holds every entry — both author-written ("canon", `is_official=true`) and player-submitted (pending moderation). A hook fetches approved entries once on page mount; a pure generator function (`genererInventaire`) draws from them in memory using the existing weighted-draw/gender-resolution utilities already exported by `src/data/pnjTables.js`. No new hardcoded data file is created.

**Tech Stack:** React 18 (JSX), react-router-dom, Supabase (Postgres + RLS), `pg` for migrations, Vitest for tests.

## Global Constraints

- Reuse `tirage`, `tiragePondere`, `resolveText` exported from `src/data/pnjTables.js` — do not duplicate this logic. Do not modify `pnjTables.js` or any existing PNJ file.
- Never use `mcp__claude_ai_Supabase__apply_migration` or `mcp__claude_ai_Supabase__execute_sql` on this project. All schema changes go through a Node script using `pg` + `process.env.SUPABASE_DB_URL` (see `scripts/migrate_pnj_table_entries.js` for the established pattern).
- Test runner is Vitest: `npm test` (= `vitest run`). Never use `npx jest`.
- Status values for `poche_table_entries` are English (`pending`/`approved`/`rejected`), matching `pnj_table_entries` — not the French values used by `menu_plats`.
- Icon imports come from `../config/icons` (barrel file) — confirmed available: `Package, ArrowLeft, RotateCcw, ChevronDown, Clock, CheckCircle, XCircle, Edit, Plus`.
- Run `node scripts/backup_supabase.js` before any destructive DB operation (already done this session; re-run if resuming later).

---

### Task 1: Supabase table `poche_table_entries` + canon seed data

**Files:**
- Create: `scripts/migrate_poche_table_entries.js`

**Interfaces:**
- Produces: table `public.poche_table_entries` with columns `id, table_name, saison, value_m, value_f, weight, is_official, status, reject_reason, created_by, created_at, approved_by, approved_at`, RLS enabled, 3 policies (`poche_entries_select`, `poche_entries_insert`, `poche_entries_update_admin`). Seeded with canon rows (`is_official = true, status = 'approved'`).
- Consumed by: Task 3 (`usePocheTableEntries.js` queries this table).

- [ ] **Step 1: Write the migration + seed script**

```js
// scripts/migrate_poche_table_entries.js
// Crée la table poche_table_entries (RLS) et insère les objets canon —
// Générateur de Poche. Mirror de scripts/migrate_pnj_table_entries.js.
require('dotenv').config();
const { Client } = require('pg');

const SEED = [
  // --- fouille_ordinaire ---
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Une boîte d'allumettes de contrebande en bois de peuplier (humides).", value_f: null },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Un mouchoir en coton rêche maculé de suie ou de tabac.", value_f: null },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Une pipe en terre cuite culottée avec un reste de tabac gris (Caporal).", value_f: "Un flacon de sel de menthe pour les maux de tête ou les migraines." },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Un couteau de poche usé de type 'Opinel'.", value_f: "Une paire de petits ciseaux de couture à broder en acier." },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Un ticket froissé pour l'Exposition Universelle ou l'Omnibus.", value_f: null },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Un peigne en corne à qui il manque plusieurs dents.", value_f: "Deux épingles à chapeau longues et acérées en acier poli." },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Un cure-oreille ou un cure-ongle artisanal en os poli.", value_f: null },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Une ficelle de chanvre poisseuse de plusieurs mètres enroulée.", value_f: null },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Un quignon de pain rassis enveloppé dans un vieux morceau de journal.", value_f: null },
  { table_name: 'fouille_ordinaire', saison: null, weight: 10, value_m: "Une clé en fer forgé banale (sans indication de serrure).", value_f: null },

  // --- fouille_mondaine ---
  { table_name: 'fouille_mondaine', saison: null, weight: 12, value_m: "Un flacon de sels de pâmoison ou une fiole d'éther pur dans un étui de velours.", value_f: null },
  { table_name: 'fouille_mondaine', saison: null, weight: 13, value_m: "Un étui à cigares en argent ciselé contenant trois Havanes parfumés.", value_f: "Un poudrier en vermeil ciselé avec une petite houpette en cygne." },
  { table_name: 'fouille_mondaine', saison: null, weight: 13, value_m: "Un mouchoir en soie blanche brodé de ses initiales.", value_f: "Un flacon de sels ou de parfum de violette dissimulé dans un manchon." },
  { table_name: 'fouille_mondaine', saison: null, weight: 12, value_m: "Un agenda de poche en maroquin avec son crayon de plomb.", value_f: "Un carnet de bal miniature en ivoire avec sa chaînette d'or." },
  { table_name: 'fouille_mondaine', saison: null, weight: 12, value_m: "Un coupe-papier d'écaille de tortue.", value_f: "Un petit flacon de sels de vinaigre aromatique contre les étourdissements." },
  { table_name: 'fouille_mondaine', saison: null, weight: 13, value_m: "Une tabatière en émail contenant du tabac à priser mentholé.", value_f: null },
  { table_name: 'fouille_mondaine', saison: null, weight: 13, value_m: "Un flacon d'eau de Cologne fine de chez Guerlain.", value_f: null },
  { table_name: 'fouille_mondaine', saison: null, weight: 12, value_m: "Un coupe-chou manche en nacre dans son étui.", value_f: "Une paire de gants de chevreau blanc à peine froissés." },

  // --- fouille_secrets ---
  { table_name: 'fouille_secrets', saison: null, weight: 20, value_m: "Un billet doux très parfumé signé d'une actrice des Folies Bergère, fixant un rendez-vous secret.", value_f: null },
  { table_name: 'fouille_secrets', saison: null, weight: 20, value_m: "Une fiole de laudanum frelaté ou d'arsenic dissimulée dans une fausse boîte de pastilles contre la toux.", value_f: null },
  { table_name: 'fouille_secrets', saison: null, weight: 20, value_m: "Un mot d'ordre codé d'une bande d'Apaches ('Rendez-vous aux Fortifs à minuit sous la lune').", value_f: null },
  { table_name: 'fouille_secrets', saison: null, weight: 20, value_m: "Un tract anarchiste clandestin imprimé sur du papier rouge de mauvaise qualité.", value_f: null },
  { table_name: 'fouille_secrets', saison: null, weight: 15, value_m: "Un pli cacheté à la cire noire contenant une menace de chantage financier.", value_f: null },
  { table_name: 'fouille_secrets', saison: null, weight: 5, value_m: "Un petit morceau de parchemin portant un pentacle runique dessiné au sang éthérique.", value_f: null },

  // --- fouille_horreur ---
  { table_name: 'fouille_horreur', saison: null, weight: 20, value_m: "Un flacon d'Éther scellé au plomb, étiqueté pour des recherches 'médicales et spirituelles'.", value_f: null },
  { table_name: 'fouille_horreur', saison: null, weight: 20, value_m: "Un carnet de notes jauni décrivant les variations du fluide éthérique près des lignes du métropolitain.", value_f: null },
  { table_name: 'fouille_horreur', saison: null, weight: 20, value_m: "Un petit miroir de poche en obsidienne noire dont le tain semble légèrement déformé.", value_f: null },
  { table_name: 'fouille_horreur', saison: null, weight: 20, value_m: "Une boîte de pilules de laudanum marquée du sceau d'un aliéniste de l'asile Sainte-Anne.", value_f: null },
  { table_name: 'fouille_horreur', saison: null, weight: 20, value_m: "Un fragment de roche cristalline étrange qui pulse d'une lueur invisible à l'œil nu.", value_f: null },

  // --- fouille_espionnage ---
  { table_name: 'fouille_espionnage', saison: null, weight: 25, value_m: "Une grille de décryptage alphabétique (chiffre de Saint-Cyr) dissimulée dans un étui de montre.", value_f: null },
  { table_name: 'fouille_espionnage', saison: null, weight: 25, value_m: "Une micro-dépêche sur papier pelure enroulée serrée, rédigée en allemand ou en cyrillique.", value_f: null },
  { table_name: 'fouille_espionnage', saison: null, weight: 25, value_m: "Une fiole d'encre sympathique (invisible à l'œil nu) camouflée en flacon de parfum.", value_f: null },
  { table_name: 'fouille_espionnage', saison: null, weight: 25, value_m: "Une liste nominative d'employés des postes et télégraphes avec des annotations de surveillance.", value_f: null },

  // --- fouille_pulp ---
  { table_name: 'fouille_pulp', saison: null, weight: 25, value_m: "Un poing américain en laiton massif poli par l'usage.", value_f: null },
  { table_name: 'fouille_pulp', saison: null, weight: 25, value_m: "Un plan griffonné à la hâte des galeries de ventilation de la Banque de France.", value_f: null },
  { table_name: 'fouille_pulp', saison: null, weight: 25, value_m: "Un couteau à cran d'arrêt (un 'Surin') avec une marque d'Apache gravée sur le manche.", value_f: null },
  { table_name: 'fouille_pulp', saison: null, weight: 25, value_m: "Un sifflet de police ou de cocher en métal argenté (idéal pour donner l'alerte).", value_f: null },

  // --- fouille_saisonniere / hiver ---
  { table_name: 'fouille_saisonniere', saison: 'hiver', weight: 25, value_m: "Une chaufferette de poche métallique portative, tiède, fonctionnant au charbon.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'hiver', weight: 25, value_m: "Une boîte en fer blanc de pastilles de réglisse ou de menthol contre la toux.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'hiver', weight: 25, value_m: "Une petite flasque en étain contenant un reste de goutte (eau-de-vie forte).", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'hiver', weight: 25, value_m: "Un morceau de suif ou de cire pour imperméabiliser les coutures des bottines.", value_f: null },

  // --- fouille_saisonniere / printemps ---
  { table_name: 'fouille_saisonniere', saison: 'printemps', weight: 25, value_m: "Un flacon d'eau de mélisse des Carmes pour apaiser les migraines printanières.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'printemps', weight: 25, value_m: "Un carnet de poésies ou de croquis de fleurs printanières à peine entamé.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'printemps', weight: 25, value_m: "Un sachet de toile contenant de la lavande séchée pour masquer les odeurs de sueur.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'printemps', weight: 25, value_m: "Un chiffon doux en flanelle pour essuyer la boue des bas de pantalons.", value_f: null },

  // --- fouille_saisonniere / ete ---
  { table_name: 'fouille_saisonniere', saison: 'ete', weight: 33, value_m: "Une paire de lunettes fumées primitives à monture d'acier contre la réverbération.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'ete', weight: 33, value_m: "Un canotier miniature en paille tressée replié ou une lanière de chapeau.", value_f: "Un petit éventail de poche pliable en bois de rose ou en dentelle." },
  { table_name: 'fouille_saisonniere', saison: 'ete', weight: 34, value_m: "Un flacon d'eau de Cologne légère de chez l'apothicaire pour se rafraîchir le cou.", value_f: null },

  // --- fouille_saisonniere / automne ---
  { table_name: 'fouille_saisonniere', saison: 'automne', weight: 25, value_m: "Une boîte d'allumettes parfaitement sèches gardée dans un étui étanche en cuir.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'automne', weight: 25, value_m: "Un journal de la semaine passée utilisé comme doublure imperméable improvisée.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'automne', weight: 25, value_m: "Quelques marrons d'Inde ramassés au pied des marronniers, glissés là comme porte-bonheur.", value_f: null },
  { table_name: 'fouille_saisonniere', saison: 'automne', weight: 25, value_m: "Une fiole d'huile camphrée pour frictionner les membres engourdis par l'humidité.", value_f: null },
];

async function main() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS public.poche_table_entries (
      id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
      table_name    TEXT        NOT NULL CHECK (table_name IN (
                                  'fouille_ordinaire','fouille_mondaine','fouille_secrets',
                                  'fouille_horreur','fouille_espionnage','fouille_pulp','fouille_saisonniere')),
      saison        TEXT        CHECK (saison IN ('hiver','printemps','ete','automne') OR saison IS NULL),
      value_m       TEXT        NOT NULL,
      value_f       TEXT,
      weight        INTEGER     NOT NULL DEFAULT 1,
      is_official   BOOLEAN     NOT NULL DEFAULT false,
      status        TEXT        NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
      reject_reason TEXT,
      created_by    UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
      created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
      approved_by   UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
      approved_at   TIMESTAMPTZ,
      CONSTRAINT saisonniere_need_saison CHECK (table_name != 'fouille_saisonniere' OR saison IS NOT NULL),
      CONSTRAINT non_saisonniere_no_saison CHECK (table_name = 'fouille_saisonniere' OR saison IS NULL)
    );
  `);
  console.log('✓ Table poche_table_entries créée');

  await client.query(`CREATE INDEX IF NOT EXISTS idx_poche_entries_status
    ON public.poche_table_entries(status);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_poche_entries_table_status
    ON public.poche_table_entries(table_name, saison, status);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_poche_entries_creator
    ON public.poche_table_entries(created_by);`);
  console.log('✓ Index créés');

  await client.query(`ALTER TABLE public.poche_table_entries ENABLE ROW LEVEL SECURITY;`);

  const policies = [
    {
      name: 'poche_entries_select',
      sql: `CREATE POLICY "poche_entries_select"
            ON public.poche_table_entries FOR SELECT TO authenticated
            USING (status = 'approved' OR created_by = auth.uid());`,
    },
    {
      name: 'poche_entries_insert',
      sql: `CREATE POLICY "poche_entries_insert"
            ON public.poche_table_entries FOR INSERT TO authenticated
            WITH CHECK (created_by = auth.uid());`,
    },
    {
      name: 'poche_entries_update_admin',
      sql: `CREATE POLICY "poche_entries_update_admin"
            ON public.poche_table_entries FOR UPDATE TO authenticated
            USING (
              EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('super_admin','gardien'))
            );`,
    },
  ];

  for (const p of policies) {
    const { rows } = await client.query(
      `SELECT 1 FROM pg_policies WHERE tablename = 'poche_table_entries' AND policyname = $1`,
      [p.name]
    );
    if (rows.length === 0) {
      await client.query(p.sql);
      console.log(`✓ Policy ${p.name} créée`);
    } else {
      console.log(`  Policy ${p.name} déjà existante`);
    }
  }

  const { rows: existing } = await client.query(
    `SELECT count(*)::int AS n FROM public.poche_table_entries WHERE is_official = true`
  );
  if (existing[0].n === 0) {
    for (const row of SEED) {
      await client.query(
        `INSERT INTO public.poche_table_entries
           (table_name, saison, value_m, value_f, weight, is_official, status, created_by)
         VALUES ($1, $2, $3, $4, $5, true, 'approved', NULL)`,
        [row.table_name, row.saison, row.value_m, row.value_f, row.weight]
      );
    }
    console.log(`✓ ${SEED.length} entrées canon insérées`);
  } else {
    console.log(`  ${existing[0].n} entrées canon déjà présentes, seed ignoré`);
  }

  const { rows: counts } = await client.query(
    `SELECT table_name, saison, count(*)::int AS n FROM public.poche_table_entries
     GROUP BY table_name, saison ORDER BY table_name, saison`
  );
  console.table(counts);

  await client.end();
  console.log('\n✓ Migration poche_table_entries terminée.');
}

main().catch(e => { console.error(e); process.exit(1); });
```

- [ ] **Step 2: Run the migration**

Run: `node scripts/migrate_poche_table_entries.js`
Expected: Console shows table/index/policy creation (or "déjà existante" if re-run), `✓ 52 entrées canon insérées`, and a table listing counts per `table_name`/`saison` (10 for `fouille_ordinaire`, 8 for `fouille_mondaine`, 6 for `fouille_secrets`, 5 for `fouille_horreur`, 4 each for `fouille_espionnage`/`fouille_pulp`, 4 each for the 4 `fouille_saisonniere` seasons).

- [ ] **Step 3: Commit**

```bash
git add scripts/migrate_poche_table_entries.js
git commit -m "feat(poche): table poche_table_entries + seed des objets canon"
```

---

### Task 2: `pocheGenerator.js` — pure generation logic (TDD)

**Files:**
- Create: `src/utils/pocheGenerator.js`
- Test: `src/utils/__tests__/pocheGenerator.test.js`

**Interfaces:**
- Consumes: `tirage`, `tiragePondere`, `resolveText` from `../data/pnjTables` (existing, unmodified — signatures: `tiragePondere(tableau) -> item`, `resolveText(entree, sexe) -> string`, entries shaped `{ weight, m, f? }`).
- Produces: `genererInventaire(config, dbEntries) -> string[]`, where `config = { sexe, classeSociale, moralite, genre, saison, forceSecret }` (all optional, defaults applied) and `dbEntries` is keyed by `fouille_ordinaire`, `fouille_mondaine`, `fouille_secrets`, `fouille_horreur`, `fouille_espionnage`, `fouille_pulp`, `fouille_saisonniere_hiver`, `fouille_saisonniere_printemps`, `fouille_saisonniere_ete`, `fouille_saisonniere_automne` — each an array of `{ weight, m, f? }`. Consumed by Task 4 (`PocheGenerateur.jsx`).

- [ ] **Step 1: Write the failing tests**

```js
// src/utils/__tests__/pocheGenerator.test.js
import { genererInventaire } from '../pocheGenerator';

const poolNeutre = (label) => [{ weight: 1, m: `${label} neutre` }];
const poolGenre = (label) => [{ weight: 1, m: `${label} masculin`, f: `${label} féminin` }];

function dbEntriesFixture() {
  return {
    fouille_ordinaire: poolNeutre('objet ordinaire'),
    fouille_mondaine: poolGenre('objet mondain'),
    fouille_secrets: poolNeutre('secret'),
    fouille_horreur: poolNeutre('horreur'),
    fouille_espionnage: poolNeutre('espionnage'),
    fouille_pulp: poolNeutre('pulp'),
    fouille_saisonniere_hiver: poolGenre('hiver'),
    fouille_saisonniere_printemps: poolNeutre('printemps'),
    fouille_saisonniere_ete: poolNeutre('ete'),
    fouille_saisonniere_automne: poolNeutre('automne'),
  };
}

describe('genererInventaire', () => {
  it('injecte toujours un objet saisonnier préfixé par la saison', () => {
    const inv = genererInventaire({ saison: 'hiver' }, dbEntriesFixture());
    expect(inv.some((o) => o.startsWith('[Météo / HIVER]'))).toBe(true);
  });

  it('résout la forme féminine quand sexe = feminin', () => {
    const inv = genererInventaire({ sexe: 'feminin', saison: 'hiver' }, dbEntriesFixture());
    expect(inv.some((o) => o.includes('hiver féminin'))).toBe(true);
  });

  it('résout la forme masculine par défaut', () => {
    const inv = genererInventaire({ sexe: 'masculin', saison: 'hiver' }, dbEntriesFixture());
    expect(inv.some((o) => o.includes('hiver masculin'))).toBe(true);
  });

  it('déclenche toujours un secret quand forceSecret est vrai', () => {
    const inv = genererInventaire({ forceSecret: true, genre: 'standard' }, dbEntriesFixture());
    expect(inv.some((o) => o.startsWith('[Secret]'))).toBe(true);
  });

  it('pioche dans le pool du genre littéraire choisi quand un secret est forcé', () => {
    const inv = genererInventaire({ forceSecret: true, genre: 'horror' }, dbEntriesFixture());
    expect(inv.some((o) => o.startsWith('[Étrange / Merveilleux]'))).toBe(true);
  });

  it('calcule une bourse populaire en sous', () => {
    const inv = genererInventaire({ classeSociale: 'populaire' }, dbEntriesFixture());
    expect(inv.some((o) => /sous au fond des poches/.test(o))).toBe(true);
  });

  it('calcule une bourse aisée en Louis et Francs', () => {
    const inv = genererInventaire({ classeSociale: 'aisee' }, dbEntriesFixture());
    expect(inv.some((o) => /Louis d'or/.test(o))).toBe(true);
  });

  it('ne plante pas quand les tables sont vides', () => {
    const inv = genererInventaire({ saison: 'hiver' }, {});
    expect(Array.isArray(inv)).toBe(true);
  });

  it('respecte les poids sur un grand nombre de tirages', () => {
    const dbEntries = {
      ...dbEntriesFixture(),
      fouille_ordinaire: [
        { weight: 90, m: 'fréquent' },
        { weight: 10, m: 'rare' },
      ],
    };
    let frequent = 0;
    const total = 500;
    for (let i = 0; i < total; i++) {
      const inv = genererInventaire({ classeSociale: 'populaire' }, dbEntries);
      if (inv.includes('fréquent')) frequent++;
    }
    expect(frequent / total).toBeGreaterThan(0.5);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test -- pocheGenerator`
Expected: FAIL — `Cannot find module '../pocheGenerator'` (file doesn't exist yet).

- [ ] **Step 3: Write the implementation**

```js
// src/utils/pocheGenerator.js
// Générateur d'inventaire de poche (objets trouvés sur un PNJ fouillé) — Paris 1899.
// Toutes les tables viennent de Supabase (poche_table_entries) — pas de données hardcodées.
import { tiragePondere, resolveText } from '../data/pnjTables';

function pool(dbEntries, key) {
  return (dbEntries && dbEntries[key]) || [];
}

/**
 * @param {Object} config
 * @param {'masculin'|'feminin'} config.sexe
 * @param {'populaire'|'moyenne'|'aisee'} config.classeSociale
 * @param {'honnete'|'louche'} config.moralite
 * @param {'standard'|'horror'|'espionage'|'pulp'} config.genre
 * @param {'hiver'|'printemps'|'ete'|'automne'} config.saison
 * @param {boolean} config.forceSecret
 * @param {Object} dbEntries - entrées approuvées groupées par table (voir usePocheTableEntries)
 * @returns {string[]}
 */
export function genererInventaire(config = {}, dbEntries = {}) {
  const sexe = config.sexe || 'masculin';
  const classeSociale = config.classeSociale || 'moyenne';
  const moralite = config.moralite || 'honnete';
  const genre = config.genre || 'standard';
  const saison = config.saison || 'hiver';
  const forceSecret = config.forceSecret || false;

  const poolOrdinaire = pool(dbEntries, 'fouille_ordinaire');
  const poolMondaine = pool(dbEntries, 'fouille_mondaine');

  const inventaire = [];
  const nombreObjets = Math.floor(Math.random() * 2) + 2;

  for (let i = 0; i < nombreObjets; i++) {
    let ligneTiree;
    if (classeSociale === 'aisee') {
      ligneTiree = Math.random() < 0.75 ? tiragePondere(poolMondaine) : tiragePondere(poolOrdinaire);
    } else if (classeSociale === 'populaire') {
      ligneTiree = tiragePondere(poolOrdinaire);
    } else {
      ligneTiree = Math.random() < 0.5 ? tiragePondere(poolMondaine) : tiragePondere(poolOrdinaire);
    }
    if (!ligneTiree) continue;
    const nomObjet = resolveText(ligneTiree, sexe);
    if (nomObjet && !inventaire.includes(nomObjet)) inventaire.push(nomObjet);
  }

  const rowSaison = tiragePondere(pool(dbEntries, `fouille_saisonniere_${saison}`));
  if (rowSaison) {
    inventaire.push(`[Météo / ${saison.toUpperCase()}] ${resolveText(rowSaison, sexe)}`);
  }

  let bourse;
  if (classeSociale === 'populaire') {
    const sous = Math.floor(Math.random() * 12) + 2;
    bourse = `Quelques pièces de bronze sales (${sous} sous au fond des poches).`;
  } else if (classeSociale === 'aisee') {
    const louis = Math.floor(Math.random() * 4) + 1;
    const francs = Math.floor(Math.random() * 15) + 5;
    bourse = `Un porte-monnaie en cuir fin contenant ${louis} Louis d'or et ${francs} Francs de germinal.`;
  } else {
    const francs = Math.floor(Math.random() * 8) + 2;
    bourse = `Une bourse en toile contenant ${francs} Francs et quelques centimes de cuivre.`;
  }
  inventaire.push(bourse);

  const declencherSecret = forceSecret || (moralite === 'louche' && Math.random() < 0.5) || Math.random() < 0.15;
  if (declencherSecret) {
    let poolGenreChoisi;
    let prefixe;
    if (genre === 'horror') {
      poolGenreChoisi = pool(dbEntries, 'fouille_horreur');
      prefixe = '[Étrange / Merveilleux]';
    } else if (genre === 'espionage') {
      poolGenreChoisi = pool(dbEntries, 'fouille_espionnage');
      prefixe = '[Compromettant / Espionnage]';
    } else if (genre === 'pulp') {
      poolGenreChoisi = pool(dbEntries, 'fouille_pulp');
      prefixe = '[Milieu / Interlope]';
    } else {
      poolGenreChoisi = pool(dbEntries, 'fouille_secrets');
      prefixe = '[Secret]';
    }
    const ligneGenre = tiragePondere(poolGenreChoisi);
    if (ligneGenre) inventaire.push(`${prefixe} ${resolveText(ligneGenre, sexe)}`);
  }

  return inventaire;
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test -- pocheGenerator`
Expected: PASS — 9 tests green.

- [ ] **Step 5: Commit**

```bash
git add src/utils/pocheGenerator.js src/utils/__tests__/pocheGenerator.test.js
git commit -m "feat(poche): logique de génération d'inventaire (tirage pondéré, résolution genrée)"
```

---

### Task 3: `usePocheTableEntries` hook

**Files:**
- Create: `src/hooks/usePocheTableEntries.js`

**Interfaces:**
- Consumes: `supabase` client from `../config/supabase`; table `poche_table_entries` (Task 1).
- Produces: `usePocheTableEntries(session) -> { dbEntries, myProposals, loaded, submitting, proposer, reload }`.
  - `dbEntries`: object keyed like the fixture in Task 2 (e.g. `fouille_ordinaire`, `fouille_saisonniere_hiver`), each value an array of `{ _dbId, weight, m, f? }`.
  - `myProposals`: array of raw rows `{ id, table_name, saison, value_m, value_f, weight, status, reject_reason, created_at }` for the current user, excluding approved ones.
  - `loaded`: boolean, true after the first fetch completes.
  - `proposer({ tableName, saison, valueM, valueF, weight }) -> Promise<{ error }>`.
- Consumed by: Task 4 (`PocheGenerateur.jsx`). Note: Task 5's admin tab does NOT use this hook — like `TabMenuPropositions.js`, it queries `poche_table_entries` directly (own edit/approve/reject logic), matching the established codebase convention where the community hook only serves the generator page.

- [ ] **Step 1: Write the hook**

```js
// src/hooks/usePocheTableEntries.js
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';

function groupApproved(rows) {
  const grouped = {};
  for (const row of rows) {
    const key = row.table_name === 'fouille_saisonniere' ? `fouille_saisonniere_${row.saison}` : row.table_name;
    if (!grouped[key]) grouped[key] = [];
    const entry = { _dbId: row.id, weight: row.weight ?? 1, m: row.value_m };
    if (row.value_f) entry.f = row.value_f;
    grouped[key].push(entry);
  }
  return grouped;
}

export function usePocheTableEntries(session) {
  const [dbEntries, setDbEntries] = useState({});
  const [myProposals, setMyProposals] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const reload = useCallback(async () => {
    if (!session?.user) return;

    const [{ data: approved }, { data: mine }] = await Promise.all([
      supabase
        .from('poche_table_entries')
        .select('id, table_name, saison, value_m, value_f, weight')
        .eq('status', 'approved'),
      supabase
        .from('poche_table_entries')
        .select('id, table_name, saison, value_m, value_f, weight, status, reject_reason, created_at')
        .eq('created_by', session.user.id)
        .neq('status', 'approved')
        .order('created_at', { ascending: false }),
    ]);

    if (approved) setDbEntries(groupApproved(approved));
    if (mine) setMyProposals(mine);
    setLoaded(true);
  }, [session]);

  useEffect(() => { reload(); }, [reload]);

  const proposer = useCallback(async ({ tableName, saison, valueM, valueF, weight }) => {
    if (!session?.user) return { error: { message: 'Non connecté' } };
    setSubmitting(true);
    const { error } = await supabase.from('poche_table_entries').insert({
      table_name: tableName,
      saison: tableName === 'fouille_saisonniere' ? saison : null,
      value_m: valueM,
      value_f: valueF || null,
      weight: weight ?? 1,
      created_by: session.user.id,
    });
    setSubmitting(false);
    if (!error) await reload();
    return { error };
  }, [session, reload]);

  return { dbEntries, myProposals, loaded, submitting, proposer, reload };
}
```

- [ ] **Step 2: Commit**

```bash
git add src/hooks/usePocheTableEntries.js
git commit -m "feat(poche): hook usePocheTableEntries (fetch + proposer + updateEntry)"
```

---

### Task 4: `PocheGenerateur.jsx` + hub/router wiring (reachable end-to-end)

**Files:**
- Create: `src/components/PocheGenerateur.jsx`
- Modify: `src/components/OutilsHub.jsx`
- Modify: `src/AppRouter.jsx`

**Interfaces:**
- Consumes: `usePocheTableEntries` (Task 3), `genererInventaire` (Task 2).
- Produces: route `/poche` rendering `<PocheGenerateur onBack session userProfile />`; `OutilsHub` gains an `onOpenPoche` prop wired to a new card.

- [ ] **Step 1: Create the component**

```jsx
// src/components/PocheGenerateur.jsx
import React, { useState } from 'react';
import { ArrowLeft, Package, RotateCcw, ChevronDown, Clock, CheckCircle, XCircle } from '../config/icons';
import { usePocheTableEntries } from '../hooks/usePocheTableEntries';
import { genererInventaire } from '../utils/pocheGenerator';

const SEXES = [
  { id: 'masculin', label: 'Masculin' },
  { id: 'feminin', label: 'Féminin' },
];

const CLASSES = [
  { id: 'populaire', label: 'Populaire' },
  { id: 'moyenne', label: 'Moyenne' },
  { id: 'aisee', label: 'Aisée' },
];

const MORALITES = [
  { id: 'honnete', label: 'Honnête' },
  { id: 'louche', label: 'Louche' },
];

const GENRES = [
  { id: 'standard', label: 'Standard' },
  { id: 'horror', label: 'Étrange / Merveilleux' },
  { id: 'espionage', label: 'Espionnage' },
  { id: 'pulp', label: 'Pulp / Interlope' },
];

const SAISONS = [
  { id: 'hiver', label: 'Hiver' },
  { id: 'printemps', label: 'Printemps' },
  { id: 'ete', label: 'Été' },
  { id: 'automne', label: 'Automne' },
];

const TABLES_CIBLES = [
  { id: 'fouille_ordinaire', label: 'Fouille ordinaire' },
  { id: 'fouille_mondaine', label: 'Fouille mondaine' },
  { id: 'fouille_secrets', label: 'Secrets génériques' },
  { id: 'fouille_horreur', label: 'Étrange / Merveilleux' },
  { id: 'fouille_espionnage', label: 'Espionnage' },
  { id: 'fouille_pulp', label: 'Pulp / Interlope' },
  { id: 'fouille_saisonniere', label: 'Objet saisonnier' },
];

function Select({ label, value, onChange, options }) {
  return (
    <label className="flex flex-col gap-1 text-sm font-serif text-stone-600">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-stone-200 rounded-lg px-2 py-1.5 bg-white"
      >
        {options.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
      </select>
    </label>
  );
}

function ProposerObjet({ session, proposer, myProposals, submitting }) {
  const [open, setOpen] = useState(false);
  const [tableName, setTableName] = useState('fouille_ordinaire');
  const [saison, setSaison] = useState('hiver');
  const [valueM, setValueM] = useState('');
  const [valueF, setValueF] = useState('');
  const [weight, setWeight] = useState(10);
  const [msg, setMsg] = useState(null);

  if (!session?.user) return null;

  const submit = async (e) => {
    e.preventDefault();
    if (!valueM.trim()) return;
    const { error } = await proposer({ tableName, saison, valueM: valueM.trim(), valueF: valueF.trim(), weight: Number(weight) || 1 });
    if (error) {
      setMsg({ type: 'error', text: error.message });
    } else {
      setMsg({ type: 'success', text: 'Proposition envoyée, en attente de validation.' });
      setValueM('');
      setValueF('');
    }
  };

  return (
    <div className="mt-8 border-t border-stone-200 pt-6">
      <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-2 text-sm font-bold text-teal-700">
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        Proposer un objet
      </button>

      {open && (
        <div className="mt-4 space-y-4">
          <form onSubmit={submit} className="grid gap-3 sm:grid-cols-2">
            <Select label="Table cible" value={tableName} onChange={setTableName} options={TABLES_CIBLES} />
            {tableName === 'fouille_saisonniere' && (
              <Select label="Saison" value={saison} onChange={setSaison} options={SAISONS} />
            )}
            <label className="flex flex-col gap-1 text-sm font-serif text-stone-600 sm:col-span-2">
              Texte (masculin / neutre)
              <input value={valueM} onChange={(e) => setValueM(e.target.value)} className="border border-stone-200 rounded-lg px-2 py-1.5" required />
            </label>
            <label className="flex flex-col gap-1 text-sm font-serif text-stone-600 sm:col-span-2">
              Texte féminin (optionnel — laisser vide si neutre)
              <input value={valueF} onChange={(e) => setValueF(e.target.value)} className="border border-stone-200 rounded-lg px-2 py-1.5" />
            </label>
            <label className="flex flex-col gap-1 text-sm font-serif text-stone-600">
              Poids
              <input type="number" min="1" value={weight} onChange={(e) => setWeight(e.target.value)} className="border border-stone-200 rounded-lg px-2 py-1.5" />
            </label>
            <div className="sm:col-span-2">
              <button type="submit" disabled={submitting} className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-lg font-bold text-sm disabled:opacity-50">
                {submitting ? '…' : 'Proposer'}
              </button>
            </div>
          </form>

          {msg && <p className={`text-sm ${msg.type === 'error' ? 'text-red-600' : 'text-emerald-600'}`}>{msg.text}</p>}

          {myProposals.length > 0 && (
            <div className="space-y-1.5">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Mes propositions</p>
              {myProposals.map((p) => (
                <div key={p.id} className="text-sm flex items-center gap-2 text-stone-600">
                  {p.status === 'pending' && <Clock size={14} className="text-amber-500" />}
                  {p.status === 'approved' && <CheckCircle size={14} className="text-emerald-500" />}
                  {p.status === 'rejected' && <XCircle size={14} className="text-red-500" />}
                  <span>{p.value_m}</span>
                  {p.status === 'rejected' && p.reject_reason && <span className="text-xs text-red-400">— {p.reject_reason}</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function PocheGenerateur({ onBack, session }) {
  const { dbEntries, myProposals, loaded, submitting, proposer } = usePocheTableEntries(session);
  const [config, setConfig] = useState({
    sexe: 'masculin', classeSociale: 'moyenne', moralite: 'honnete', genre: 'standard', saison: 'hiver', forceSecret: false,
  });
  const [inventaire, setInventaire] = useState(null);

  const set = (champ) => (valeur) => setConfig((c) => ({ ...c, [champ]: valeur }));

  const fouiller = () => setInventaire(genererInventaire(config, dbEntries));

  return (
    <div className="min-h-screen bg-[#f5f0e8] animate-fade-in">
      <header className="sticky top-0 z-40 bg-[#1a0f0a] border-b border-amber-900/30 shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={onBack} className="p-2 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-all">
            <ArrowLeft size={18} />
          </button>
          <h1 className="font-serif font-bold text-amber-100 text-lg">Générateur de Poche</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <p className="text-stone-500 font-serif italic mb-6 text-sm">
          Tirez au sort le contenu des poches d'un PNJ fouillé — Paris, 1899.
        </p>

        <div className="bg-white rounded-2xl border-2 border-stone-200 p-5 shadow-sm">
          <div className="grid gap-3 sm:grid-cols-2">
            <Select label="Sexe" value={config.sexe} onChange={set('sexe')} options={SEXES} />
            <Select label="Classe sociale" value={config.classeSociale} onChange={set('classeSociale')} options={CLASSES} />
            <Select label="Moralité" value={config.moralite} onChange={set('moralite')} options={MORALITES} />
            <Select label="Genre littéraire" value={config.genre} onChange={set('genre')} options={GENRES} />
            <Select label="Saison" value={config.saison} onChange={set('saison')} options={SAISONS} />
            <label className="flex items-center gap-2 text-sm font-serif text-stone-600 mt-5">
              <input type="checkbox" checked={config.forceSecret} onChange={(e) => set('forceSecret')(e.target.checked)} />
              Forcer un objet de secret
            </label>
          </div>

          <button
            onClick={fouiller}
            disabled={!loaded}
            className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-700 hover:bg-teal-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-bold transition-colors"
          >
            <Package size={18} /> {loaded ? 'Fouiller les poches' : 'Chargement des tables…'}
          </button>

          {inventaire && (
            <div className="mt-5 space-y-2">
              {inventaire.map((objet, i) => (
                <div key={i} className="flex items-start gap-2 text-sm font-serif text-stone-800 bg-stone-50 rounded-lg px-3 py-2 border border-stone-100">
                  <span>•</span><span>{objet}</span>
                </div>
              ))}
              <button onClick={fouiller} className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-teal-700 mt-2">
                <RotateCcw size={12} /> Refaire un tirage
              </button>
            </div>
          )}
        </div>

        <ProposerObjet session={session} proposer={proposer} myProposals={myProposals} submitting={submitting} />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Wire the card into `OutilsHub.jsx`**

In `src/components/OutilsHub.jsx`, change the icon import line:

```js
import { ArrowLeft, Globe, Map, Dices, UtensilsCrossed, Package } from '../config/icons';
```

Add a new entry to the `OUTILS` array (after the `menu` entry):

```js
  {
    id: 'poche',
    titre: 'Générateur de Poche',
    description: "Tirez au sort le contenu des poches d'un PNJ fouillé — objets, secrets et bourse selon son rang.",
    icon: Package,
    couleur: 'amber',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    hover: 'hover:bg-amber-100 hover:border-amber-300',
    iconColor: 'text-amber-700',
  },
```

Update the component signature and handlers map:

```js
export default function OutilsHub({ onBack, onOpenActualite, onOpenCarte, onOpenGenerateur, onOpenMenu, onOpenPoche }) {
  const handlers = { actualite: onOpenActualite, carte: onOpenCarte, generateur: onOpenGenerateur, menu: onOpenMenu, poche: onOpenPoche };
```

- [ ] **Step 3: Wire the route into `AppRouter.jsx`**

Add the lazy import after `GenerateurMenu`:

```js
const PocheGenerateur = lazy(() => import('./components/PocheGenerateur'));
```

Add `onOpenPoche` to the `OutilsHub` route:

```jsx
        <Route path="/outils" element={
          <OutilsHub
            onBack={() => navigate('/')}
            onOpenActualite={() => navigate('/actualite')}
            onOpenCarte={() => navigate('/carte')}
            onOpenGenerateur={() => navigate('/generateur')}
            onOpenMenu={() => navigate('/menu')}
            onOpenPoche={() => navigate('/poche')}
          />
        } />
```

Add the new route after `/menu`:

```jsx
        <Route path="/poche" element={<PocheGenerateur onBack={() => navigate('/outils')} userProfile={userProfile} session={session} />} />
```

- [ ] **Step 4: Manual smoke test in the browser**

Run: `npm run dev`
Then in a browser: navigate to the app, open **Outils du Maître de Jeu**, confirm the new "Générateur de Poche" card appears, click it, confirm it lands on `/poche`, wait for "Fouiller les poches" to become enabled (table data loaded), click it, confirm a list of items appears including a `[Météo / ...]` line and a bourse line. Open "Proposer un objet", submit one, confirm it appears under "Mes propositions" with a pending-clock icon.

- [ ] **Step 5: Commit**

```bash
git add src/components/PocheGenerateur.jsx src/components/OutilsHub.jsx src/AppRouter.jsx
git commit -m "feat(poche): page du générateur de poche + intégration au Hub Outils"
```

---

### Task 5: Admin tab `TabPochePropositions.js`

**Files:**
- Create: `src/components/admin/TabPochePropositions.js`
- Modify: `src/components/AdminDashboard.js`

**Interfaces:**
- Consumes: `supabase` from `../../config/supabase` directly (same pattern as `TabMenuPropositions.js` — does not go through the `usePocheTableEntries` hook, which is scoped to the generator page).
- Produces: an admin tab reachable at `/admin_dashboard` under a "Poche" tab, supporting approve/reject of pending proposals, inline edit of approved entries, and direct creation of new canon (`is_official=true`) entries.

- [ ] **Step 1: Create the admin tab component**

```jsx
// src/components/admin/TabPochePropositions.js
import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../config/supabase';
import { CheckCircle, XCircle, Clock, Edit, Plus } from '../../config/icons';

const TABLE_LABELS = {
  fouille_ordinaire: 'Fouille ordinaire',
  fouille_mondaine: 'Fouille mondaine',
  fouille_secrets: 'Secrets génériques',
  fouille_horreur: 'Étrange / Merveilleux',
  fouille_espionnage: 'Espionnage',
  fouille_pulp: 'Pulp / Interlope',
  fouille_saisonniere: 'Objet saisonnier',
};

const STATUS_TABS = [
  { id: 'pending', label: 'En attente', icon: Clock, color: 'text-amber-600 border-amber-500' },
  { id: 'approved', label: 'Approuvés', icon: CheckCircle, color: 'text-emerald-600 border-emerald-500' },
  { id: 'rejected', label: 'Refusés', icon: XCircle, color: 'text-red-600 border-red-500' },
];

const emptyForm = { table_name: 'fouille_ordinaire', saison: 'hiver', value_m: '', value_f: '', weight: 10 };

export default function TabPochePropositions({ session }) {
  const [statusFilter, setStatusFilter] = useState('pending');
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [rejectReasonFor, setRejectReasonFor] = useState(null);
  const [rejectReason, setRejectReason] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(emptyForm);
  const [creating, setCreating] = useState(false);
  const [createForm, setCreateForm] = useState(emptyForm);

  const load = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from('poche_table_entries')
      .select('id, table_name, saison, value_m, value_f, weight, is_official, status, reject_reason, created_at')
      .eq('status', statusFilter)
      .order('created_at', { ascending: statusFilter === 'pending' });
    setEntries(data || []);
    setLoading(false);
  }, [statusFilter]);

  useEffect(() => { load(); }, [load]);

  const approuver = async (entry) => {
    await supabase.from('poche_table_entries')
      .update({ status: 'approved', approved_by: session?.user?.id, approved_at: new Date().toISOString() })
      .eq('id', entry.id);
    load();
  };

  const rejeter = async (entry, motif) => {
    await supabase.from('poche_table_entries').update({ status: 'rejected', reject_reason: motif || null }).eq('id', entry.id);
    setRejectReasonFor(null);
    setRejectReason('');
    load();
  };

  const commencerEdition = (entry) => {
    setEditingId(entry.id);
    setEditForm({
      table_name: entry.table_name,
      saison: entry.saison || 'hiver',
      value_m: entry.value_m,
      value_f: entry.value_f || '',
      weight: entry.weight,
    });
  };

  const enregistrerEdition = async (id) => {
    await supabase.from('poche_table_entries').update({
      value_m: editForm.value_m.trim(),
      value_f: editForm.value_f.trim() || null,
      weight: Number(editForm.weight) || 1,
    }).eq('id', id);
    setEditingId(null);
    load();
  };

  const creerDirectement = async () => {
    if (!createForm.value_m.trim()) return;
    await supabase.from('poche_table_entries').insert({
      table_name: createForm.table_name,
      saison: createForm.table_name === 'fouille_saisonniere' ? createForm.saison : null,
      value_m: createForm.value_m.trim(),
      value_f: createForm.value_f.trim() || null,
      weight: Number(createForm.weight) || 1,
      is_official: true,
      status: 'approved',
      created_by: session?.user?.id,
      approved_by: session?.user?.id,
      approved_at: new Date().toISOString(),
    });
    setCreating(false);
    setCreateForm(emptyForm);
    if (statusFilter === 'approved') load();
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4 border-b border-stone-200">
        <div className="flex gap-4">
          {STATUS_TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setStatusFilter(id)}
              className={`pb-2.5 text-sm font-bold uppercase tracking-wide flex items-center gap-1.5 border-b-2 transition-colors ${statusFilter === id ? STATUS_TABS.find((t) => t.id === id).color : 'text-stone-400 border-transparent hover:text-stone-600'}`}
            >
              <Icon size={15} /> {label}
            </button>
          ))}
        </div>
        <button onClick={() => setCreating((v) => !v)} className="mb-2 flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-teal-700 hover:bg-teal-800 text-white rounded-lg">
          <Plus size={14} /> Ajouter un objet
        </button>
      </div>

      {creating && (
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 grid gap-3 sm:grid-cols-2">
          <select value={createForm.table_name} onChange={(e) => setCreateForm((f) => ({ ...f, table_name: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1.5 text-sm">
            {Object.entries(TABLE_LABELS).map(([id, label]) => <option key={id} value={id}>{label}</option>)}
          </select>
          {createForm.table_name === 'fouille_saisonniere' && (
            <select value={createForm.saison} onChange={(e) => setCreateForm((f) => ({ ...f, saison: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1.5 text-sm">
              {['hiver', 'printemps', 'ete', 'automne'].map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          )}
          <input placeholder="Texte masculin/neutre" value={createForm.value_m} onChange={(e) => setCreateForm((f) => ({ ...f, value_m: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1.5 text-sm sm:col-span-2" />
          <input placeholder="Texte féminin (optionnel)" value={createForm.value_f} onChange={(e) => setCreateForm((f) => ({ ...f, value_f: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1.5 text-sm sm:col-span-2" />
          <input type="number" min="1" placeholder="Poids" value={createForm.weight} onChange={(e) => setCreateForm((f) => ({ ...f, weight: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1.5 text-sm" />
          <button onClick={creerDirectement} className="text-sm font-bold bg-teal-700 hover:bg-teal-800 text-white rounded-lg px-3 py-1.5">Créer</button>
        </div>
      )}

      {loading && <p className="text-sm text-stone-400 font-serif">Chargement…</p>}
      {!loading && entries.length === 0 && <p className="text-sm text-stone-400 font-serif text-center py-8">Aucun objet dans cette catégorie.</p>}

      {!loading && entries.length > 0 && (
        <div className="space-y-2">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-white border border-stone-200 rounded-xl px-4 py-3">
              {editingId === entry.id ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  <input value={editForm.value_m} onChange={(e) => setEditForm((f) => ({ ...f, value_m: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1 text-sm sm:col-span-2" />
                  <input value={editForm.value_f} onChange={(e) => setEditForm((f) => ({ ...f, value_f: e.target.value }))} placeholder="Texte féminin (optionnel)" className="border border-stone-200 rounded-lg px-2 py-1 text-sm sm:col-span-2" />
                  <input type="number" min="1" value={editForm.weight} onChange={(e) => setEditForm((f) => ({ ...f, weight: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1 text-sm" />
                  <div className="flex gap-2">
                    <button onClick={() => enregistrerEdition(entry.id)} className="text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded px-3 py-1.5">Enregistrer</button>
                    <button onClick={() => setEditingId(null)} className="text-xs text-stone-400 hover:text-stone-600 px-2">Annuler</button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                        {TABLE_LABELS[entry.table_name]}{entry.saison ? ` · ${entry.saison}` : ''} · poids {entry.weight}
                      </span>
                      {entry.is_official && <span className="text-xs text-teal-600 font-bold">Canon</span>}
                    </div>
                    <p className="font-serif text-stone-800 mt-0.5">{entry.value_m}</p>
                    {entry.value_f && <p className="font-serif text-stone-500 text-sm">{entry.value_f}</p>}
                    {entry.status === 'rejected' && entry.reject_reason && (
                      <p className="text-xs text-red-500 mt-1">{entry.reject_reason}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 flex-shrink-0">
                    {statusFilter === 'pending' && (
                      <>
                        <button onClick={() => approuver(entry)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">
                          <CheckCircle size={13} /> Approuver
                        </button>
                        {rejectReasonFor === entry.id ? (
                          <div className="flex flex-col gap-1.5">
                            <input autoFocus value={rejectReason} onChange={(e) => setRejectReason(e.target.value)} placeholder="Raison (optionnel)" className="text-xs border border-stone-200 rounded px-2 py-1" />
                            <div className="flex gap-1">
                              <button onClick={() => rejeter(entry, rejectReason)} className="flex-1 text-xs font-bold bg-red-600 hover:bg-red-700 text-white rounded px-2 py-1">Confirmer</button>
                              <button onClick={() => setRejectReasonFor(null)} className="text-xs text-stone-400 hover:text-stone-600 px-2">✕</button>
                            </div>
                          </div>
                        ) : (
                          <button onClick={() => setRejectReasonFor(entry.id)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-stone-100 hover:bg-red-50 text-red-600 border border-stone-200 rounded-lg">
                            <XCircle size={13} /> Refuser
                          </button>
                        )}
                      </>
                    )}
                    {statusFilter === 'approved' && (
                      <button onClick={() => commencerEdition(entry)} className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-stone-100 hover:bg-teal-50 text-teal-700 border border-stone-200 rounded-lg">
                        <Edit size={13} /> Éditer
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Wire the tab into `AdminDashboard.js`**

Update the icon import line:

```js
import { Shield, ArrowLeft, Crown, BarChart2, Award, Wrench, Bell, Dices, UtensilsCrossed, Package } from '../config/icons';
```

Add the component import after `TabMenuPropositions`:

```js
import TabPochePropositions from './admin/TabPochePropositions';
```

Add the tab button after the "Menus" button (inside the tab bar `div`):

```jsx
                <button onClick={() => setActiveTab('poche')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'poche' ? 'text-amber-900 border-amber-600' : 'text-gray-400 border-transparent hover:text-gray-700'}`}>
                    <Package size={18} /> Poche
                </button>
```

Add the render line after the `menu` one:

```jsx
            {activeTab === 'poche' && <TabPochePropositions session={session} />}
```

- [ ] **Step 3: Manual smoke test in the browser**

With `npm run dev` still running: log in as an admin (super_admin or gardien), go to `/admin_dashboard`, click the new "Poche" tab, confirm "Approuvés" shows the 52 seeded canon entries, click "Éditer" on one, change its weight, save, confirm it persists on reload. Switch to "En attente", confirm the test proposal submitted in Task 4 appears, approve it, confirm it moves to "Approuvés".

- [ ] **Step 4: Commit**

```bash
git add src/components/admin/TabPochePropositions.js src/components/AdminDashboard.js
git commit -m "feat(poche): onglet admin de modération/édition des objets de poche"
```

---

### Task 6: Full verification pass

**Files:** none (verification only)

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: all tests pass, including the 9 new `pocheGenerator` tests, with 0 regressions on existing suites.

- [ ] **Step 2: Re-run the migration script idempotently**

Run: `node scripts/migrate_poche_table_entries.js`
Expected: all "déjà existante" / "déjà présentes" messages (no duplicate rows, no errors) — confirms the script is safe to re-run.

- [ ] **Step 3: End-to-end manual pass**

With `npm run dev` running, repeat the full user journey once more: Hub → Générateur de Poche → fouiller (several times, vary sexe/classe/saison/genre/forceSecret to visually confirm variety) → proposer un objet → Admin → Poche → approuver/éditer. Confirm no console errors in the browser dev tools.

- [ ] **Step 4: Final commit (if anything was adjusted during verification)**

```bash
git add -A
git commit -m "chore(poche): ajustements post-vérification"
```
(Skip this step if verification found nothing to fix.)
