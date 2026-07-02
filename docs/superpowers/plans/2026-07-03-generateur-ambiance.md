# Générateur d'Ambiance Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Générateur d'Ambiance" tool (street/travel ambiance generator — décor, météo, événement, intrigue) to the GM Tools hub, entirely Supabase-backed like the Générateur de Poche.

**Architecture:** A dedicated Supabase table `ambiance_table_entries` (table_name + generic `variante` column, since all 4 categories here need a sub-key, unlike Poche where only one did) holds every entry — canon (`is_official=true`) and community-submitted. A hook fetches approved entries once on page mount; a pure generator function (`genererAmbianceVoyage`) draws from them in memory using `tiragePondere` from `src/data/pnjTables.js`. No `resolveText`/gendered forms — this content has no gender axis, so a single `value` column replaces `value_m`/`value_f`.

**Tech Stack:** React 18 (JSX), react-router-dom, Supabase (Postgres + RLS), `pg` for migrations, Vitest for tests.

## Global Constraints

- Reuse `tiragePondere` exported from `src/data/pnjTables.js` — do not duplicate this logic. Do not modify `pnjTables.js`.
- Never use `mcp__claude_ai_Supabase__apply_migration` or `mcp__claude_ai_Supabase__execute_sql`. All schema changes go through a Node script using `pg` + `process.env.SUPABASE_DB_URL` (see `scripts/migrate_poche_table_entries.js` for the established pattern).
- Test runner is Vitest: `npm test` (= `vitest run`). Never use `npx jest`.
- Status values are English (`pending`/`approved`/`rejected`), matching `poche_table_entries`/`pnj_table_entries`.
- Icon imports come from `../config/icons` — confirmed available: `Route, ArrowLeft, RotateCcw, ChevronDown, Clock, CheckCircle, XCircle, Edit, Plus`.
- No `value_f`/gender resolution in this generator — content has no gender axis.

---

### Task 1: Supabase table `ambiance_table_entries` + canon seed data

**Files:**
- Create: `scripts/migrate_ambiance_table_entries.js`

**Interfaces:**
- Produces: table `public.ambiance_table_entries` with columns `id, table_name, variante, value, weight, is_official, status, reject_reason, created_by, created_at, approved_by, approved_at`, RLS enabled, 3 policies (`ambiance_entries_select`, `ambiance_entries_insert`, `ambiance_entries_update_admin`). Seeded with 44 canon rows (`is_official=true, status='approved'`).
- Consumed by: Task 3 (`useAmbianceTableEntries.js`).

- [ ] **Step 1: Write the migration + seed script**

```js
// scripts/migrate_ambiance_table_entries.js
// Crée la table ambiance_table_entries (RLS) et insère les éléments canon —
// Générateur d'Ambiance. Mirror de scripts/migrate_poche_table_entries.js.
require('dotenv').config();
const { Client } = require('pg');

const SEED = [
  // --- decor / paris_populaire ---
  { table_name: 'decor', variante: 'paris_populaire', weight: 25, value: "Une ruelle pavée étroite où s'alignent des façades sombres aux fenêtres chargées de linge qui sèche." },
  { table_name: 'decor', variante: 'paris_populaire', weight: 25, value: "Un carrefour bruyant près d'un chantier, dominé par l'odeur de purin, de charbon et de poussière de plâtre." },
  { table_name: 'decor', variante: 'paris_populaire', weight: 25, value: "Une place de faubourg ceinturée de fortifications en ruine, de cabanes de chiffonniers et d'estaminets borgnes." },
  { table_name: 'decor', variante: 'paris_populaire', weight: 25, value: "Un quai de Seine encombré de péniches de charbon, où l'eau claque contre les pontons sous les sifflets des usines." },

  // --- decor / paris_riche ---
  { table_name: 'decor', variante: 'paris_riche', weight: 25, value: "Un large boulevard haussmannien bordé d'arbres majestueux et de grilles en fer forgé étincelantes." },
  { table_name: 'decor', variante: 'paris_riche', weight: 25, value: "Une place feutrée aux arcades de pierre, où les vitrines des grands magasins exposent des tissus précieux." },
  { table_name: 'decor', variante: 'paris_riche', weight: 25, value: "Une avenue résidentielle ou une allée verdoyante, bordée de belles propriétés privées ou d'hôtels particuliers aux lourdes portes cochères." },
  { table_name: 'decor', variante: 'paris_riche', weight: 25, value: "Les abords d'un grand théâtre, d'un opéra ou d'un pavillon de villégiature, éclairés par les reflets blancs et froids des premières lampes électriques." },

  // --- decor / banlieue_industrielle ---
  { table_name: 'decor', variante: 'banlieue_industrielle', weight: 33, value: "Une plaine désolée où de gigantesques cheminées d'usines en briques rouges crachent un panache noir continu sur le ciel." },
  { table_name: 'decor', variante: 'banlieue_industrielle', weight: 33, value: "Un chemin boueux longeant des voies ferrées de triage, bordé d'entrepôts de tôle et de terrains vagues jonchés de ferraille." },
  { table_name: 'decor', variante: 'banlieue_industrielle', weight: 34, value: "Une rue ouvrière aux petites maisons identiques en brique, écrasée par le bourdonnement mécanique des ateliers de mécanique." },

  // --- decor / campagne_rurale ---
  { table_name: 'decor', variante: 'campagne_rurale', weight: 33, value: "Un chemin de terre battue bordé de haies vives et de vieux saules, serpentant entre des champs de blé à perte de vue." },
  { table_name: 'decor', variante: 'campagne_rurale', weight: 33, value: "La place principale d'un petit village endormi, articulée autour d'un vieux puits en pierre, d'une église romane et d'un abreuvoir." },
  { table_name: 'decor', variante: 'campagne_rurale', weight: 34, value: "Un sous-bois brumeux aux arbres séculaires, où l'épais tapis de mousse étouffe le moindre bruit de pas." },

  // --- evenement / paris_jour ---
  { table_name: 'evenement', variante: 'paris_jour', weight: 20, value: "Un marchand ambulant crie à plein poumons pour vendre ses journaux du matin ('Le Petit Journal !')." },
  { table_name: 'evenement', variante: 'paris_jour', weight: 20, value: "Un embouteillage de fiacres et d'omnibus à chevaux crée un vacarme de jurons et de sabots sur le pavé." },
  { table_name: 'evenement', variante: 'paris_jour', weight: 20, value: "Un gamin de Paris (un titi) court entre les jambes des passants en sifflant, poursuivi par un cocher en colère." },
  { table_name: 'evenement', variante: 'paris_jour', weight: 20, value: "Un rémouleur ambulant fait crisser sa meule sur le trottoir, projetant des gerbes d'étincelles en affûtant un couteau." },
  { table_name: 'evenement', variante: 'paris_jour', weight: 20, value: "Une colonne de grévistes en blouses de travail défile en chantant des refrains révolutionnaires, encadrée de loin par des sergents de ville." },

  // --- evenement / paris_nuit ---
  { table_name: 'evenement', variante: 'paris_nuit', weight: 20, value: "Un allumeur de réverbères termine sa tournée, laissant une lueur vacillante et jaunâtre percer la brume." },
  { table_name: 'evenement', variante: 'paris_nuit', weight: 20, value: "Une silhouette pressée s'engouffre dans un porche sombre en jetant un regard nerveux derrière elle." },
  { table_name: 'evenement', variante: 'paris_nuit', weight: 20, value: "Des rires étouffés et des éclats de musique s'échappent de l'arrière-salle close d'un estaminet." },
  { table_name: 'evenement', variante: 'paris_nuit', weight: 20, value: "Une patrouille de nuit de la Sûreté en pèlerine noire scrute les angles morts des rues, le sifflet au poing." },
  { table_name: 'evenement', variante: 'paris_nuit', weight: 20, value: "Un chiffonnier courbe l'échine sous sa hotte, fouillant les tas d'ordures à la lueur d'une lanterne aveugle." },

  // --- evenement / banlieue_industrielle (surcharge fixe d'origine) ---
  { table_name: 'evenement', variante: 'banlieue_industrielle_jour', weight: 1, value: "La chaussée tremble au passage d'un fardier lourdement chargé de poutrelles d'acier, tandis que retentit la sirène stridente d'une filature textile." },
  { table_name: 'evenement', variante: 'banlieue_industrielle_nuit', weight: 1, value: "Les équipes de nuit des usines sortent de leur faction, le visage noirci par la suie de charbon, croisant les silhouettes louches des rôdeurs de terrains vagues." },

  // --- evenement / campagne_rurale (surcharge fixe d'origine) ---
  { table_name: 'evenement', variante: 'campagne_rurale_jour', weight: 1, value: "Un paysan guidant une lourde charrette à foin avance au pas de ses bœufs, saluant lentement les rares voyageurs." },
  { table_name: 'evenement', variante: 'campagne_rurale_nuit', weight: 1, value: "Au loin, le hurlement des chiens de garde brise le silence total de la nuit rurale, tandis qu'aucune lueur ne filtre des fermes isolées." },

  // --- meteo (une entrée par saison) ---
  { table_name: 'meteo', variante: 'hiver', weight: 1, value: "Les passants marchent tête baissée, emmitouflés dans de lourds pardessus, fuyant un vent glacial qui fait grincer les enseignes en tôle." },
  { table_name: 'meteo', variante: 'printemps', weight: 1, value: "Une pluie fine et soudaine fait briller les pavés comme des miroirs, obligeant la foule à déployer un océan de parapluies noirs." },
  { table_name: 'meteo', variante: 'ete', weight: 1, value: "L'air est lourd, imprégné d'une odeur de poussière chaude et d'asphalte qui fond, tandis que les terrasses des cafés affichent complet." },
  { table_name: 'meteo', variante: 'automne', weight: 1, value: "Des feuilles mortes tourbillonnent dans les courants d'air sous un ciel bas couleur plomb, alors que la nuit tombe de façon précoce." },

  // --- intrigue / horror ---
  { table_name: 'intrigue', variante: 'horror', weight: 25, value: "Un attroupement muet entoure une flaque de sang noir sur le trottoir. Les policiers semblent terrifiés par la forme des morsures." },
  { table_name: 'intrigue', variante: 'horror', weight: 25, value: "Les becs de gaz vacillent tous en même temps et s'éteignent pendant quelques secondes, laissant planer une fraîcheur surnaturelle." },
  { table_name: 'intrigue', variante: 'horror', weight: 25, value: "Un chat de gouttière hurle de terreur en fixant une zone vide, ses poils hérissés par une présence invisible que l'on devine dans l'ombre." },
  { table_name: 'intrigue', variante: 'horror', weight: 25, value: "Une rumeur court parmi les locaux : les rats fuiraient en masse les sous-sols ou les granges, comme pour échapper à un réveil souterrain." },

  // --- intrigue / espionage ---
  { table_name: 'intrigue', variante: 'espionage', weight: 25, value: "Un homme en redingote feint de lire son journal contre un arbre, mais ses yeux suivent précisément les moindres mouvements du groupe." },
  { table_name: 'intrigue', variante: 'espionage', weight: 25, value: "Une vitre s'entrouvre brusquement au premier étage d'un immeuble, et un pli de papier froissé tombe sur le sol juste devant vous." },
  { table_name: 'intrigue', variante: 'espionage', weight: 25, value: "Un télégramme diplomatique codé glisse du sac d'un coursier cycliste pressé qui bouscule un passant sans s'arrêter." },
  { table_name: 'intrigue', variante: 'espionage', weight: 25, value: "Dans le brouhaha du lieu, deux voix feutrées échangent des chiffres secrets en allemand avant de se taire net à votre approche." },

  // --- intrigue / pulp ---
  { table_name: 'intrigue', variante: 'pulp', weight: 25, value: "Une violente altercation éclate : deux Apaches armés de surins encerclent un bourgeois qui appelle désespérément à l'aide." },
  { table_name: 'intrigue', variante: 'pulp', weight: 25, value: "Un prototype de machine ou omnibus à vapeur pétarade et lâche une immense colonne de fumée noire en frôlant de peu les étals." },
  { table_name: 'intrigue', variante: 'pulp', weight: 25, value: "Un pickpocket vif comme l'éclair détrousse un passant et s'enfuit en bondissant par-dessus les tonneaux d'une charrette renversée." },
  { table_name: 'intrigue', variante: 'pulp', weight: 25, value: "Une course-poursuite rocambolesque traverse la rue : un individu s'accroche à l'arrière d'un fiacre lancé au galop." },
];

async function main() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS public.ambiance_table_entries (
      id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
      table_name    TEXT        NOT NULL CHECK (table_name IN ('decor','evenement','meteo','intrigue')),
      variante      TEXT        NOT NULL,
      value         TEXT        NOT NULL,
      weight        INTEGER     NOT NULL DEFAULT 1,
      is_official   BOOLEAN     NOT NULL DEFAULT false,
      status        TEXT        NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
      reject_reason TEXT,
      created_by    UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
      created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
      approved_by   UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
      approved_at   TIMESTAMPTZ,
      CONSTRAINT variante_valide CHECK (
        (table_name = 'decor'     AND variante IN ('paris_populaire','paris_riche','banlieue_industrielle','campagne_rurale')) OR
        (table_name = 'evenement' AND variante IN ('paris_jour','paris_nuit','banlieue_industrielle_jour','banlieue_industrielle_nuit','campagne_rurale_jour','campagne_rurale_nuit')) OR
        (table_name = 'meteo'     AND variante IN ('hiver','printemps','ete','automne')) OR
        (table_name = 'intrigue'  AND variante IN ('horror','espionage','pulp'))
      )
    );
  `);
  console.log('✓ Table ambiance_table_entries créée');

  await client.query(`CREATE INDEX IF NOT EXISTS idx_ambiance_entries_status
    ON public.ambiance_table_entries(status);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_ambiance_entries_table_status
    ON public.ambiance_table_entries(table_name, variante, status);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_ambiance_entries_creator
    ON public.ambiance_table_entries(created_by);`);
  console.log('✓ Index créés');

  await client.query(`ALTER TABLE public.ambiance_table_entries ENABLE ROW LEVEL SECURITY;`);

  const policies = [
    {
      name: 'ambiance_entries_select',
      sql: `CREATE POLICY "ambiance_entries_select"
            ON public.ambiance_table_entries FOR SELECT TO authenticated
            USING (status = 'approved' OR created_by = auth.uid());`,
    },
    {
      name: 'ambiance_entries_insert',
      sql: `CREATE POLICY "ambiance_entries_insert"
            ON public.ambiance_table_entries FOR INSERT TO authenticated
            WITH CHECK (created_by = auth.uid());`,
    },
    {
      name: 'ambiance_entries_update_admin',
      sql: `CREATE POLICY "ambiance_entries_update_admin"
            ON public.ambiance_table_entries FOR UPDATE TO authenticated
            USING (
              EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('super_admin','gardien'))
            );`,
    },
  ];

  for (const p of policies) {
    const { rows } = await client.query(
      `SELECT 1 FROM pg_policies WHERE tablename = 'ambiance_table_entries' AND policyname = $1`,
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
    `SELECT count(*)::int AS n FROM public.ambiance_table_entries WHERE is_official = true`
  );
  if (existing[0].n === 0) {
    for (const row of SEED) {
      await client.query(
        `INSERT INTO public.ambiance_table_entries
           (table_name, variante, value, weight, is_official, status, created_by)
         VALUES ($1, $2, $3, $4, true, 'approved', NULL)`,
        [row.table_name, row.variante, row.value, row.weight]
      );
    }
    console.log(`✓ ${SEED.length} entrées canon insérées`);
  } else {
    console.log(`  ${existing[0].n} entrées canon déjà présentes, seed ignoré`);
  }

  const { rows: counts } = await client.query(
    `SELECT table_name, variante, count(*)::int AS n FROM public.ambiance_table_entries
     GROUP BY table_name, variante ORDER BY table_name, variante`
  );
  console.table(counts);

  await client.end();
  console.log('\n✓ Migration ambiance_table_entries terminée.');
}

main().catch(e => { console.error(e); process.exit(1); });
```

- [ ] **Step 2: Run the migration**

Run: `node scripts/migrate_ambiance_table_entries.js`
Expected: table/index/policy creation confirmations, `✓ 44 entrées canon insérées`, and a table listing counts per `table_name`/`variante` (4 for `paris_populaire`/`paris_riche`, 3 for `banlieue_industrielle`/`campagne_rurale` decor; 5 for `paris_jour`/`paris_nuit`, 1 each for the 4 override evenement variantes; 1 each for the 4 meteo variantes; 4 each for the 3 intrigue variantes).

- [ ] **Step 3: Commit**

```bash
git add scripts/migrate_ambiance_table_entries.js
git commit -m "feat(ambiance): table ambiance_table_entries + seed des éléments canon"
```

---

### Task 2: `ambianceGenerator.js` — pure generation logic (TDD)

**Files:**
- Create: `src/utils/ambianceGenerator.js`
- Test: `src/utils/__tests__/ambianceGenerator.test.js`

**Interfaces:**
- Consumes: `tiragePondere` from `../data/pnjTables` (existing, unmodified — signature: `tiragePondere(tableau) -> item`, entries shaped `{ weight, value }`).
- Produces: `genererAmbianceVoyage(config, dbEntries) -> string[]`, where `config = { zone, moment, saison, genre }` (all optional, defaults applied) and `dbEntries` is keyed by `decor_${zone}`, `evenement_${groupe}_${moment}` (groupe = `'paris'` for `paris_populaire`/`paris_riche`, else the zone itself), `meteo_${saison}`, `intrigue_${genre}` — each an array of `{ weight, value }`. Consumed by Task 4 (`AmbianceGenerateur.jsx`).

- [ ] **Step 1: Write the failing tests**

```js
// src/utils/__tests__/ambianceGenerator.test.js
import { genererAmbianceVoyage } from '../ambianceGenerator';

const pool = (label) => [{ weight: 1, value: label }];

function dbEntriesFixture() {
  return {
    decor_paris_populaire: pool('decor paris populaire'),
    decor_paris_riche: pool('decor paris riche'),
    decor_banlieue_industrielle: pool('decor banlieue'),
    decor_campagne_rurale: pool('decor campagne'),
    evenement_paris_jour: pool('evenement paris jour'),
    evenement_paris_nuit: pool('evenement paris nuit'),
    evenement_banlieue_industrielle_jour: pool('evenement banlieue jour'),
    evenement_banlieue_industrielle_nuit: pool('evenement banlieue nuit'),
    evenement_campagne_rurale_jour: pool('evenement campagne jour'),
    evenement_campagne_rurale_nuit: pool('evenement campagne nuit'),
    meteo_hiver: pool('meteo hiver'),
    meteo_printemps: pool('meteo printemps'),
    meteo_ete: pool('meteo ete'),
    meteo_automne: pool('meteo automne'),
    intrigue_horror: pool('intrigue horror'),
    intrigue_espionage: pool('intrigue espionage'),
    intrigue_pulp: pool('intrigue pulp'),
  };
}

describe('genererAmbianceVoyage', () => {
  it('inclut toujours un élément [CADRE], [MÉTÉO] et [VIE]', () => {
    const scene = genererAmbianceVoyage({}, dbEntriesFixture());
    expect(scene.some((e) => e.startsWith('[CADRE]'))).toBe(true);
    expect(scene.some((e) => e.startsWith('[MÉTÉO]'))).toBe(true);
    expect(scene.some((e) => e.startsWith('[VIE]'))).toBe(true);
  });

  it('tire le décor de la zone demandée', () => {
    const scene = genererAmbianceVoyage({ zone: 'campagne_rurale' }, dbEntriesFixture());
    expect(scene.some((e) => e.includes('decor campagne'))).toBe(true);
  });

  it('regroupe paris_populaire et paris_riche sur le même pool événement', () => {
    const scenePopulaire = genererAmbianceVoyage({ zone: 'paris_populaire', moment: 'jour' }, dbEntriesFixture());
    const sceneRiche = genererAmbianceVoyage({ zone: 'paris_riche', moment: 'jour' }, dbEntriesFixture());
    expect(scenePopulaire.some((e) => e.includes('evenement paris jour'))).toBe(true);
    expect(sceneRiche.some((e) => e.includes('evenement paris jour'))).toBe(true);
  });

  it('utilise le pool événement dédié à la banlieue industrielle', () => {
    const scene = genererAmbianceVoyage({ zone: 'banlieue_industrielle', moment: 'nuit' }, dbEntriesFixture());
    expect(scene.some((e) => e.includes('evenement banlieue nuit'))).toBe(true);
  });

  it("ne déclenche pas d'intrigue quand genre = standard", () => {
    const scene = genererAmbianceVoyage({ genre: 'standard' }, dbEntriesFixture());
    expect(scene.some((e) => e.startsWith('[INTRIGUE'))).toBe(false);
  });

  it("déclenche l'intrigue du genre choisi quand genre !== standard", () => {
    const scene = genererAmbianceVoyage({ genre: 'pulp' }, dbEntriesFixture());
    expect(scene.some((e) => e.startsWith('[INTRIGUE') && e.includes('intrigue pulp'))).toBe(true);
  });

  it('ne plante pas quand les tables sont vides', () => {
    const scene = genererAmbianceVoyage({}, {});
    expect(Array.isArray(scene)).toBe(true);
  });

  it('respecte les poids sur un grand nombre de tirages', () => {
    const dbEntries = {
      ...dbEntriesFixture(),
      decor_paris_populaire: [
        { weight: 90, value: 'fréquent' },
        { weight: 10, value: 'rare' },
      ],
    };
    let frequent = 0;
    const total = 500;
    for (let i = 0; i < total; i++) {
      const scene = genererAmbianceVoyage({ zone: 'paris_populaire' }, dbEntries);
      if (scene.some((e) => e.includes('fréquent'))) frequent++;
    }
    expect(frequent / total).toBeGreaterThan(0.5);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test -- ambianceGenerator`
Expected: FAIL — `Cannot find module '../ambianceGenerator'` (file doesn't exist yet).

- [ ] **Step 3: Write the implementation**

```js
// src/utils/ambianceGenerator.js
// Générateur d'ambiance de rue/voyage (décor, météo, événement, intrigue) — Paris et alentours 1899.
// Toutes les tables viennent de Supabase (ambiance_table_entries) — pas de données hardcodées.
import { tiragePondere } from '../data/pnjTables';

function pool(dbEntries, key) {
  return (dbEntries && dbEntries[key]) || [];
}

function groupeEvenement(zone) {
  return (zone === 'paris_populaire' || zone === 'paris_riche') ? 'paris' : zone;
}

/**
 * @param {Object} config
 * @param {'paris_populaire'|'paris_riche'|'banlieue_industrielle'|'campagne_rurale'} config.zone
 * @param {'jour'|'nuit'} config.moment
 * @param {'hiver'|'printemps'|'ete'|'automne'} config.saison
 * @param {'standard'|'horror'|'espionage'|'pulp'} config.genre
 * @param {Object} dbEntries - entrées approuvées groupées par table (voir useAmbianceTableEntries)
 * @returns {string[]}
 */
export function genererAmbianceVoyage(config = {}, dbEntries = {}) {
  const zone = config.zone || 'paris_populaire';
  const moment = config.moment || 'jour';
  const saison = config.saison || 'printemps';
  const genre = config.genre || 'standard';

  const scene = [];

  const decor = tiragePondere(pool(dbEntries, `decor_${zone}`));
  if (decor) scene.push(`[CADRE] ${decor.value}`);

  const groupe = groupeEvenement(zone);
  const evenement = tiragePondere(pool(dbEntries, `evenement_${groupe}_${moment}`));
  if (evenement) scene.push(`[VIE] ${evenement.value}`);

  const meteo = tiragePondere(pool(dbEntries, `meteo_${saison}`));
  if (meteo) scene.push(`[MÉTÉO] ${meteo.value}`);

  if (genre !== 'standard') {
    const intrigue = tiragePondere(pool(dbEntries, `intrigue_${genre}`));
    if (intrigue) scene.push(`[INTRIGUE - ${genre.toUpperCase()}] ${intrigue.value}`);
  }

  return scene;
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npm test -- ambianceGenerator`
Expected: PASS — 8 tests green.

- [ ] **Step 5: Commit**

```bash
git add src/utils/ambianceGenerator.js src/utils/__tests__/ambianceGenerator.test.js
git commit -m "feat(ambiance): logique de génération de scène (décor, météo, événement, intrigue)"
```

---

### Task 3: `useAmbianceTableEntries` hook

**Files:**
- Create: `src/hooks/useAmbianceTableEntries.js`

**Interfaces:**
- Consumes: `supabase` client from `../config/supabase`; table `ambiance_table_entries` (Task 1).
- Produces: `useAmbianceTableEntries(session) -> { dbEntries, myProposals, loaded, submitting, proposer, reload }`.
  - `dbEntries`: object keyed like the fixture in Task 2 (e.g. `decor_paris_populaire`, `evenement_paris_jour`), each value an array of `{ _dbId, weight, value }`.
  - `myProposals`: array of raw rows `{ id, table_name, variante, value, weight, status, reject_reason, created_at }` for the current user, excluding approved ones.
  - `loaded`: boolean, true after the first fetch completes.
  - `proposer({ tableName, variante, value, weight }) -> Promise<{ error }>`.
- Consumed by: Task 4 (`AmbianceGenerateur.jsx`). Note: Task 5's admin tab does NOT use this hook — like `TabPochePropositions.js`, it queries `ambiance_table_entries` directly.

- [ ] **Step 1: Write the hook**

```js
// src/hooks/useAmbianceTableEntries.js
import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../config/supabase';

function groupApproved(rows) {
  const grouped = {};
  for (const row of rows) {
    const key = `${row.table_name}_${row.variante}`;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push({ _dbId: row.id, weight: row.weight ?? 1, value: row.value });
  }
  return grouped;
}

export function useAmbianceTableEntries(session) {
  const [dbEntries, setDbEntries] = useState({});
  const [myProposals, setMyProposals] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const reload = useCallback(async () => {
    if (!session?.user) return;

    const [{ data: approved }, { data: mine }] = await Promise.all([
      supabase
        .from('ambiance_table_entries')
        .select('id, table_name, variante, value, weight')
        .eq('status', 'approved'),
      supabase
        .from('ambiance_table_entries')
        .select('id, table_name, variante, value, weight, status, reject_reason, created_at')
        .eq('created_by', session.user.id)
        .neq('status', 'approved')
        .order('created_at', { ascending: false }),
    ]);

    if (approved) setDbEntries(groupApproved(approved));
    if (mine) setMyProposals(mine);
    setLoaded(true);
  }, [session]);

  useEffect(() => { reload(); }, [reload]);

  const proposer = useCallback(async ({ tableName, variante, value, weight }) => {
    if (!session?.user) return { error: { message: 'Non connecté' } };
    setSubmitting(true);
    const { error } = await supabase.from('ambiance_table_entries').insert({
      table_name: tableName,
      variante,
      value,
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
git add src/hooks/useAmbianceTableEntries.js
git commit -m "feat(ambiance): hook useAmbianceTableEntries (fetch + proposer)"
```

---

### Task 4: `AmbianceGenerateur.jsx` + hub/router wiring (reachable end-to-end)

**Files:**
- Create: `src/components/AmbianceGenerateur.jsx`
- Modify: `src/components/OutilsHub.jsx`
- Modify: `src/AppRouter.jsx`

**Interfaces:**
- Consumes: `useAmbianceTableEntries` (Task 3), `genererAmbianceVoyage` (Task 2).
- Produces: route `/ambiance` rendering `<AmbianceGenerateur onBack session userProfile />`; `OutilsHub` gains an `onOpenAmbiance` prop wired to a new card.

- [ ] **Step 1: Create the component**

```jsx
// src/components/AmbianceGenerateur.jsx
import React, { useState } from 'react';
import { ArrowLeft, Route, RotateCcw, ChevronDown, Clock, CheckCircle, XCircle } from '../config/icons';
import { useAmbianceTableEntries } from '../hooks/useAmbianceTableEntries';
import { genererAmbianceVoyage } from '../utils/ambianceGenerator';

const ZONES = [
  { id: 'paris_populaire', label: 'Paris populaire' },
  { id: 'paris_riche', label: 'Paris riche' },
  { id: 'banlieue_industrielle', label: 'Banlieue industrielle' },
  { id: 'campagne_rurale', label: 'Campagne rurale' },
];

const MOMENTS = [
  { id: 'jour', label: 'Jour' },
  { id: 'nuit', label: 'Nuit' },
];

const SAISONS = [
  { id: 'hiver', label: 'Hiver' },
  { id: 'printemps', label: 'Printemps' },
  { id: 'ete', label: 'Été' },
  { id: 'automne', label: 'Automne' },
];

const GENRES = [
  { id: 'standard', label: 'Standard' },
  { id: 'horror', label: 'Étrange / Merveilleux' },
  { id: 'espionage', label: 'Espionnage' },
  { id: 'pulp', label: 'Pulp / Interlope' },
];

const TABLES_CIBLES = [
  { id: 'decor', label: 'Décor' },
  { id: 'evenement', label: 'Événement' },
  { id: 'meteo', label: 'Météo' },
  { id: 'intrigue', label: 'Intrigue' },
];

const VARIANTES_PAR_TABLE = {
  decor: ZONES,
  evenement: [
    { id: 'paris_jour', label: 'Paris — Jour' },
    { id: 'paris_nuit', label: 'Paris — Nuit' },
    { id: 'banlieue_industrielle_jour', label: 'Banlieue industrielle — Jour' },
    { id: 'banlieue_industrielle_nuit', label: 'Banlieue industrielle — Nuit' },
    { id: 'campagne_rurale_jour', label: 'Campagne rurale — Jour' },
    { id: 'campagne_rurale_nuit', label: 'Campagne rurale — Nuit' },
  ],
  meteo: SAISONS,
  intrigue: [
    { id: 'horror', label: 'Étrange / Merveilleux' },
    { id: 'espionage', label: 'Espionnage' },
    { id: 'pulp', label: 'Pulp / Interlope' },
  ],
};

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

function ProposerElement({ session, proposer, myProposals, submitting }) {
  const [open, setOpen] = useState(false);
  const [tableName, setTableName] = useState('decor');
  const [variante, setVariante] = useState(VARIANTES_PAR_TABLE.decor[0].id);
  const [value, setValue] = useState('');
  const [weight, setWeight] = useState(25);
  const [msg, setMsg] = useState(null);

  if (!session?.user) return null;

  const changerTable = (t) => {
    setTableName(t);
    setVariante(VARIANTES_PAR_TABLE[t][0].id);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    const { error } = await proposer({ tableName, variante, value: value.trim(), weight: Number(weight) || 1 });
    if (error) {
      setMsg({ type: 'error', text: error.message });
    } else {
      setMsg({ type: 'success', text: 'Proposition envoyée, en attente de validation.' });
      setValue('');
    }
  };

  return (
    <div className="mt-8 border-t border-stone-200 pt-6">
      <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-2 text-sm font-bold text-teal-700">
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
        Proposer un élément
      </button>

      {open && (
        <div className="mt-4 space-y-4">
          <form onSubmit={submit} className="grid gap-3 sm:grid-cols-2">
            <Select label="Table cible" value={tableName} onChange={changerTable} options={TABLES_CIBLES} />
            <Select label="Variante" value={variante} onChange={setVariante} options={VARIANTES_PAR_TABLE[tableName]} />
            <label className="flex flex-col gap-1 text-sm font-serif text-stone-600 sm:col-span-2">
              Texte
              <input value={value} onChange={(e) => setValue(e.target.value)} className="border border-stone-200 rounded-lg px-2 py-1.5" required />
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
                  <span>{p.value}</span>
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

export default function AmbianceGenerateur({ onBack, session }) {
  const { dbEntries, myProposals, loaded, submitting, proposer } = useAmbianceTableEntries(session);
  const [config, setConfig] = useState({
    zone: 'paris_populaire', moment: 'jour', saison: 'printemps', genre: 'standard',
  });
  const [scene, setScene] = useState(null);

  const set = (champ) => (valeur) => setConfig((c) => ({ ...c, [champ]: valeur }));

  const generer = () => setScene(genererAmbianceVoyage(config, dbEntries));

  return (
    <div className="min-h-screen bg-[#f5f0e8] animate-fade-in">
      <header className="sticky top-0 z-40 bg-[#1a0f0a] border-b border-amber-900/30 shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={onBack} className="p-2 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-all">
            <ArrowLeft size={18} />
          </button>
          <h1 className="font-serif font-bold text-amber-100 text-lg">Générateur d'Ambiance</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <p className="text-stone-500 font-serif italic mb-6 text-sm">
          Décor, météo et vie de rue pour planter une scène — Paris et alentours, 1899.
        </p>

        <div className="bg-white rounded-2xl border-2 border-stone-200 p-5 shadow-sm">
          <div className="grid gap-3 sm:grid-cols-2">
            <Select label="Zone" value={config.zone} onChange={set('zone')} options={ZONES} />
            <Select label="Moment" value={config.moment} onChange={set('moment')} options={MOMENTS} />
            <Select label="Saison" value={config.saison} onChange={set('saison')} options={SAISONS} />
            <Select label="Genre littéraire" value={config.genre} onChange={set('genre')} options={GENRES} />
          </div>

          <button
            onClick={generer}
            disabled={!loaded}
            className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-700 hover:bg-teal-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-bold transition-colors"
          >
            <Route size={18} /> {loaded ? "Générer l'ambiance" : 'Chargement des tables…'}
          </button>

          {scene && (
            <div className="mt-5 space-y-2">
              {scene.map((element, i) => (
                <div key={i} className="flex items-start gap-2 text-sm font-serif text-stone-800 bg-stone-50 rounded-lg px-3 py-2 border border-stone-100">
                  <span>•</span><span>{element}</span>
                </div>
              ))}
              <button onClick={generer} className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-teal-700 mt-2">
                <RotateCcw size={12} /> Refaire un tirage
              </button>
            </div>
          )}
        </div>

        <ProposerElement session={session} proposer={proposer} myProposals={myProposals} submitting={submitting} />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Wire the card into `OutilsHub.jsx`**

In `src/components/OutilsHub.jsx`, add `Route` to the icon import line (keep existing `Package` import from the Poche integration):

```js
import { ArrowLeft, Globe, Map, Dices, UtensilsCrossed, Package, Route } from '../config/icons';
```

Add a new entry to the `OUTILS` array (after the `poche` entry):

```js
  {
    id: 'ambiance',
    titre: "Générateur d'Ambiance",
    description: "Décor, météo et vie de rue pour planter une scène en un clic — Paris et alentours, 1899.",
    icon: Route,
    couleur: 'sky',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    hover: 'hover:bg-sky-100 hover:border-sky-300',
    iconColor: 'text-sky-700',
  },
```

Update the component signature and handlers map:

```js
export default function OutilsHub({ onBack, onOpenActualite, onOpenCarte, onOpenGenerateur, onOpenMenu, onOpenPoche, onOpenAmbiance }) {
  const handlers = { actualite: onOpenActualite, carte: onOpenCarte, generateur: onOpenGenerateur, menu: onOpenMenu, poche: onOpenPoche, ambiance: onOpenAmbiance };
```

- [ ] **Step 3: Wire the route into `AppRouter.jsx`**

Add the lazy import after `PocheGenerateur`:

```js
const AmbianceGenerateur = lazy(() => import('./components/AmbianceGenerateur'));
```

Add `onOpenAmbiance` to the `OutilsHub` route:

```jsx
        <Route path="/outils" element={
          <OutilsHub
            onBack={() => navigate('/')}
            onOpenActualite={() => navigate('/actualite')}
            onOpenCarte={() => navigate('/carte')}
            onOpenGenerateur={() => navigate('/generateur')}
            onOpenMenu={() => navigate('/menu')}
            onOpenPoche={() => navigate('/poche')}
            onOpenAmbiance={() => navigate('/ambiance')}
          />
        } />
```

Add the new route after `/poche`:

```jsx
        <Route path="/ambiance" element={<AmbianceGenerateur onBack={() => navigate('/outils')} userProfile={userProfile} session={session} />} />
```

- [ ] **Step 4: Manual smoke test in the browser**

Run: `npm start` (this project uses `start`, not `dev`)
Then in a browser: navigate to the app, open **Outils du Maître de Jeu**, confirm the new "Générateur d'Ambiance" card appears, click it, confirm it lands on `/ambiance`, wait for "Générer l'ambiance" to become enabled, click it, confirm `[CADRE]`, `[MÉTÉO]`, `[VIE]` lines appear. Switch genre to something other than "Standard" and regenerate — confirm an `[INTRIGUE - ...]` line appears. Open "Proposer un élément", submit one, confirm it appears under "Mes propositions" with a pending-clock icon.

- [ ] **Step 5: Commit**

```bash
git add src/components/AmbianceGenerateur.jsx src/components/OutilsHub.jsx src/AppRouter.jsx
git commit -m "feat(ambiance): page du générateur d'ambiance + intégration au Hub Outils"
```

---

### Task 5: Admin tab `TabAmbiancePropositions.js`

**Files:**
- Create: `src/components/admin/TabAmbiancePropositions.js`
- Modify: `src/components/AdminDashboard.js`

**Interfaces:**
- Consumes: `supabase` from `../../config/supabase` directly (same pattern as `TabPochePropositions.js` — does not go through `useAmbianceTableEntries`).
- Produces: an admin tab reachable at `/admin_dashboard` under an "Ambiance" tab, supporting approve/reject of pending proposals, inline edit of approved entries, and direct creation of new canon (`is_official=true`) entries.

- [ ] **Step 1: Create the admin tab component**

```jsx
// src/components/admin/TabAmbiancePropositions.js
import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../../config/supabase';
import { CheckCircle, XCircle, Clock, Edit, Plus } from '../../config/icons';

const TABLE_LABELS = {
  decor: 'Décor',
  evenement: 'Événement',
  meteo: 'Météo',
  intrigue: 'Intrigue',
};

const VARIANTES_PAR_TABLE = {
  decor: ['paris_populaire', 'paris_riche', 'banlieue_industrielle', 'campagne_rurale'],
  evenement: ['paris_jour', 'paris_nuit', 'banlieue_industrielle_jour', 'banlieue_industrielle_nuit', 'campagne_rurale_jour', 'campagne_rurale_nuit'],
  meteo: ['hiver', 'printemps', 'ete', 'automne'],
  intrigue: ['horror', 'espionage', 'pulp'],
};

const STATUS_TABS = [
  { id: 'pending', label: 'En attente', icon: Clock, color: 'text-amber-600 border-amber-500' },
  { id: 'approved', label: 'Approuvés', icon: CheckCircle, color: 'text-emerald-600 border-emerald-500' },
  { id: 'rejected', label: 'Refusés', icon: XCircle, color: 'text-red-600 border-red-500' },
];

const emptyForm = { table_name: 'decor', variante: 'paris_populaire', value: '', weight: 25 };

export default function TabAmbiancePropositions({ session }) {
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
      .from('ambiance_table_entries')
      .select('id, table_name, variante, value, weight, is_official, status, reject_reason, created_at')
      .eq('status', statusFilter)
      .order('created_at', { ascending: statusFilter === 'pending' });
    setEntries(data || []);
    setLoading(false);
  }, [statusFilter]);

  useEffect(() => { load(); }, [load]);

  const approuver = async (entry) => {
    await supabase.from('ambiance_table_entries')
      .update({ status: 'approved', approved_by: session?.user?.id, approved_at: new Date().toISOString() })
      .eq('id', entry.id);
    load();
  };

  const rejeter = async (entry, motif) => {
    await supabase.from('ambiance_table_entries').update({ status: 'rejected', reject_reason: motif || null }).eq('id', entry.id);
    setRejectReasonFor(null);
    setRejectReason('');
    load();
  };

  const commencerEdition = (entry) => {
    setEditingId(entry.id);
    setEditForm({ table_name: entry.table_name, variante: entry.variante, value: entry.value, weight: entry.weight });
  };

  const enregistrerEdition = async (id) => {
    await supabase.from('ambiance_table_entries').update({
      value: editForm.value.trim(),
      weight: Number(editForm.weight) || 1,
    }).eq('id', id);
    setEditingId(null);
    load();
  };

  const creerDirectement = async () => {
    if (!createForm.value.trim()) return;
    await supabase.from('ambiance_table_entries').insert({
      table_name: createForm.table_name,
      variante: createForm.variante,
      value: createForm.value.trim(),
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
          <Plus size={14} /> Ajouter un élément
        </button>
      </div>

      {creating && (
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 grid gap-3 sm:grid-cols-2">
          <select
            value={createForm.table_name}
            onChange={(e) => setCreateForm((f) => ({ ...f, table_name: e.target.value, variante: VARIANTES_PAR_TABLE[e.target.value][0] }))}
            className="border border-stone-200 rounded-lg px-2 py-1.5 text-sm"
          >
            {Object.entries(TABLE_LABELS).map(([id, label]) => <option key={id} value={id}>{label}</option>)}
          </select>
          <select value={createForm.variante} onChange={(e) => setCreateForm((f) => ({ ...f, variante: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1.5 text-sm">
            {VARIANTES_PAR_TABLE[createForm.table_name].map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
          <input placeholder="Texte" value={createForm.value} onChange={(e) => setCreateForm((f) => ({ ...f, value: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1.5 text-sm sm:col-span-2" />
          <input type="number" min="1" placeholder="Poids" value={createForm.weight} onChange={(e) => setCreateForm((f) => ({ ...f, weight: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1.5 text-sm" />
          <button onClick={creerDirectement} className="text-sm font-bold bg-teal-700 hover:bg-teal-800 text-white rounded-lg px-3 py-1.5">Créer</button>
        </div>
      )}

      {loading && <p className="text-sm text-stone-400 font-serif">Chargement…</p>}
      {!loading && entries.length === 0 && <p className="text-sm text-stone-400 font-serif text-center py-8">Aucun élément dans cette catégorie.</p>}

      {!loading && entries.length > 0 && (
        <div className="space-y-2">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-white border border-stone-200 rounded-xl px-4 py-3">
              {editingId === entry.id ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  <input value={editForm.value} onChange={(e) => setEditForm((f) => ({ ...f, value: e.target.value }))} className="border border-stone-200 rounded-lg px-2 py-1 text-sm sm:col-span-2" />
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
                        {TABLE_LABELS[entry.table_name]} · {entry.variante} · poids {entry.weight}
                      </span>
                      {entry.is_official && <span className="text-xs text-teal-600 font-bold">Canon</span>}
                    </div>
                    <p className="font-serif text-stone-800 mt-0.5">{entry.value}</p>
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

Update the icon import line (keep existing `Package` from the Poche integration):

```js
import { Shield, ArrowLeft, Crown, BarChart2, Award, Wrench, Bell, Dices, UtensilsCrossed, Package, Route } from '../config/icons';
```

Add the component import after `TabPochePropositions`:

```js
import TabAmbiancePropositions from './admin/TabAmbiancePropositions';
```

Add the tab button after the "Poche" button (inside the tab bar `div`):

```jsx
                <button onClick={() => setActiveTab('ambiance')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'ambiance' ? 'text-amber-900 border-amber-600' : 'text-gray-400 border-transparent hover:text-gray-700'}`}>
                    <Route size={18} /> Ambiance
                </button>
```

Add the render line after the `poche` one:

```jsx
            {activeTab === 'ambiance' && <TabAmbiancePropositions session={session} />}
```

- [ ] **Step 3: Manual smoke test in the browser**

With `npm start` still running: as an admin, go to `/admin_dashboard`, click the new "Ambiance" tab, confirm "Approuvés" shows the 44 seeded canon entries, click "Éditer" on one, change its weight, save, confirm it persists on reload (then revert the weight back). Switch to "En attente", confirm the test proposal from Task 4 appears, approve it, confirm it moves to "Approuvés".

- [ ] **Step 4: Commit**

```bash
git add src/components/admin/TabAmbiancePropositions.js src/components/AdminDashboard.js
git commit -m "feat(ambiance): onglet admin de modération/édition des éléments d'ambiance"
```

---

### Task 6: Full verification pass

**Files:** none (verification only)

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: all tests pass, including the 8 new `ambianceGenerator` tests, with 0 regressions on existing suites.

- [ ] **Step 2: Re-run the migration script idempotently**

Run: `node scripts/migrate_ambiance_table_entries.js`
Expected: all "déjà existante" / "déjà présentes" messages (no duplicate rows, no errors).

- [ ] **Step 3: Clean up any test artifacts created during manual verification**

If a test proposal was submitted and approved during Task 4/5 smoke tests, delete it so production data stays clean:

```bash
node -e "
require('dotenv').config();
const { Client } = require('pg');
(async () => {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();
  const { rowCount } = await client.query(\"DELETE FROM public.ambiance_table_entries WHERE is_official = false AND status = 'approved'\");
  console.log('Lignes de test supprimées:', rowCount);
  await client.end();
})();
"
```

- [ ] **Step 4: Final commit (if anything was adjusted during verification)**

```bash
git add -A
git commit -m "chore(ambiance): ajustements post-vérification"
```
(Skip this step if verification found nothing to fix.)

---

### Task 7: Version bump + ship

**Files:**
- Modify: `src/version.js`
- Create: `message_heritiers_17_4_35.md`
- Modify: `REX.md`

- [ ] **Step 1: Add the new version entry**

Insert at the top of `VERSION_HISTORY` in `src/version.js` (matching the existing style — check the current top entry's version number first, since Task 1-6 of this plan may run after other unrelated version bumps):

```js
  {
    version: "17.4.35 - \"Les Rues de la Belle Époque 🌆🚶\"",
    date: "3 Juillet 2026",
    description: "Un second outil rejoint la besace du Maître de Jeu : le Générateur d'Ambiance plante en un clic le décor d'une rue, d'une banlieue industrielle ou d'un chemin de campagne — avec sa météo de saison, sa vie de rue et, sur demande, une pointe d'intrigue (étrange, espionnage ou interlope).",
    changes: [
      "🌆 **Générateur d'Ambiance :** Nouvel outil accessible depuis la page Outils. Compose une scène de rue selon la zone (Paris populaire, Paris riche, banlieue industrielle, campagne), le moment du jour, la saison et un éventuel genre littéraire.",
      "🌦️ **Météo de saison :** Chaque scène reçoit sa touche météorologique, du vent glacial d'hiver à l'air lourd d'été.",
      "🕵️ **Une pointe d'intrigue, sur demande :** Choisir un genre littéraire (étrange, espionnage, interlope) ajoute un détail dramatique à la scène généré.",
      "📮 **Là aussi, la communauté peut enrichir :** Comme pour la Poche, chaque Héritier peut proposer un nouvel élément de décor, de météo ou d'événement ; les Gardiens valident, éditent ou ajoutent directement depuis un nouvel onglet *Ambiance* du tableau de bord.",
      "🧪 **414 Sentinelles — toujours en faction, aucune régression (8 nouvelles sentinelles pour le tirage d'ambiance).**",
    ]
  },
```

- [ ] **Step 2: Write the Discord message**

```markdown
✨ **17.4.35 — Les Rues de la Belle Époque** ✨

Chers Héritiers,

Un second outil rejoint la besace du Maître de Jeu : le **Générateur d'Ambiance** plante en un clic le décor d'une scène !

🌆 Paris populaire, Paris riche, banlieue industrielle ou campagne rurale — chaque zone a son propre décor, sa vie de rue selon le jour ou la nuit, et sa météo de saison.

🕵️ Et sur demande, une pointe d'intrigue vient parfumer la scène — étrange, espionnage, ou milieu interlope.

📮 Comme pour la Poche, chaque Héritier peut proposer un nouvel élément au corpus commun ; les Gardiens valident, éditent ou ajoutent directement depuis le tableau de bord.

Que vos routes soient toujours pittoresques ! 🌆🚶
```

Save to `message_heritiers_17_4_35.md`.

- [ ] **Step 3: Add a REX entry**

Prepend to `REX.md` (before the existing top entry):

```markdown
# REX — Session 3 Juillet 2026 — v17.4.35 « Les Rues de la Belle Époque »

## Contexte

Deuxième générateur du même type dans la même session (après Poche). L'autrice a explicitement demandé "implémente et version tout d'un coup sans me poser de question" — moins de questions nécessaires cette fois car l'architecture 100% DB + is_official + édition admin était déjà validée en amont.

## Décision de conception notable

Contrairement à Poche (une seule table sur 7 avait une sous-clé), les 4 tables de ce générateur (décor/événement/météo/intrigue) en ont toutes une — une colonne générique `variante` a donc remplacé les colonnes dédiées (`saison`) du modèle Poche. Généraliser la conception dès qu'une majorité des tables d'un nouveau générateur partage le même besoin est plus propre que de dupliquer le nommage table par table.

## Écart assumé à la convention « poids + masculin/féminin »

Ce contenu (décor, météo) ne décrit jamais une personne — aucune entrée n'a de variante genrée. Une seule colonne `value` remplace `value_m`/`value_f`, plutôt que de forcer un champ toujours vide par cohérence mécanique avec les autres générateurs. La convention doit s'appliquer quand elle a un sens, pas par automatisme.

## Leçon reprise de la session précédente

Le rituel "version" committant sur `main` reste en tension avec la règle de session (job en arrière-plan, jamais de merge/push sur `main` sans autorisation explicite) — cette fois anticipée par une autorisation préalable de l'autrice, évitant l'interruption de la session précédente.

---

```

- [ ] **Step 4: Commit and push**

```bash
git add src/version.js message_heritiers_17_4_35.md REX.md
git commit -m "chore(version): 17.4.35 — Les Rues de la Belle Époque"
git push -u origin worktree-generateur-ambiance
```
