# Traducteur d'Argot 1899 + Suivi Tokens Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rename "Outils du Maître de Jeu" to "Outils pour les Doctes" (label only, access unchanged), add a new "Traducteur d'Argot 1899" tool backed by Gemini via a Supabase Edge Function, and track every LLM call's token usage in a new table with a super-admin-only cost dashboard.

**Architecture:** The translator has no client-side AI SDK — the browser calls a Supabase Edge Function (`translate-argot`, `verify_jwt: true`) which holds the `GEMINI_API_KEY` secret, calls Gemini, and logs token counts to `public.llm_usage_log` using the service-role key (bypassing RLS). A new super-admin-only admin tab reads that table directly (RLS: `SELECT` restricted to `role = 'super_admin'`) and computes an estimated EUR cost at display time from a small pricing table, so historical rows stay meaningful even if pricing constants are updated later.

**Tech Stack:** React 18 (JSX), Supabase (Postgres + RLS + Edge Functions, Deno), `@google/genai` (Deno `npm:` import, server-side only), Vitest.

## Global Constraints

- Never use `mcp__claude_ai_Supabase__apply_migration` or `mcp__claude_ai_Supabase__execute_sql` on this project. Schema changes go through a Node script using `pg` + `process.env.SUPABASE_DB_URL` (see `scripts/migrate_poche_table_entries.js` for the pattern).
- Edge Functions are deployed with `mcp__claude_ai_Supabase__deploy_edge_function`, not written to `supabase/functions/` and left undeployed — the repo copy and the deployed copy must both exist and match.
- Test runner is Vitest: `npm test` (= `vitest run`). Never use `npx jest`.
- `llm_usage_log` SELECT is restricted to `role = 'super_admin'` **exactly** — not the broader `isAdmin`/`gardien` group used elsewhere in this app. No INSERT policy exists for regular users; only the Edge Function (service role) writes rows.
- Icons come from `../config/icons` (barrel file) — confirmed available for this plan: `Feather, Coins, ArrowLeft, Copy`.
- The frontend (`package.json`) must NOT gain `@google/genai` as a dependency — it only runs inside the Deno Edge Function, imported via `npm:@google/genai`.
- No code change makes this feature usable end-to-end without a manual step: the project owner must create a Gemini API key (https://aistudio.google.com/apikey) and set it as the `GEMINI_API_KEY` secret on the Supabase project. This plan calls that out explicitly where it blocks testing.

---

### Task 1: Rename "Outils du Maître de Jeu" → "Outils pour les Doctes"

**Files:**
- Modify: `src/components/OutilsHub.jsx:87`
- Modify: `src/components/CharacterList.js:539`

**Interfaces:** None — pure label change, no props or behavior affected.

- [ ] **Step 1: Update the Hub header**

In `src/components/OutilsHub.jsx`, change:

```jsx
          <h1 className="font-serif font-bold text-amber-100 text-lg">Outils du Maître de Jeu</h1>
```

to:

```jsx
          <h1 className="font-serif font-bold text-amber-100 text-lg">Outils pour les Doctes</h1>
```

- [ ] **Step 2: Update the nav button tooltip**

In `src/components/CharacterList.js`, change:

```jsx
          <button onClick={onOpenOutils} className="flex-shrink-0 flex items-center space-x-1 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-stone-100 text-stone-800 border-2 border-stone-200 rounded-lg hover:bg-stone-200 hover:border-stone-300 transition-all font-serif font-bold text-xs sm:text-sm shadow-sm" title="Outils du Maître de Jeu">
```

to:

```jsx
          <button onClick={onOpenOutils} className="flex-shrink-0 flex items-center space-x-1 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-stone-100 text-stone-800 border-2 border-stone-200 rounded-lg hover:bg-stone-200 hover:border-stone-300 transition-all font-serif font-bold text-xs sm:text-sm shadow-sm" title="Outils pour les Doctes">
```

- [ ] **Step 3: Confirm no test references the old string**

Run: `grep -rn "Outils du Maître de Jeu" src/`
Expected: no output (already confirmed empty before writing this plan — this step just guards against drift).

- [ ] **Step 4: Commit**

```bash
git add src/components/OutilsHub.jsx src/components/CharacterList.js
git commit -m "chore(outils): renomme le Hub en \"Outils pour les Doctes\""
```

---

### Task 2: Supabase table `llm_usage_log`

**Files:**
- Create: `scripts/migrate_llm_usage_log.js`

**Interfaces:**
- Produces: table `public.llm_usage_log` with columns `id, call_type, model, prompt_tokens, completion_tokens, total_tokens, user_id, created_at`. RLS enabled: `SELECT` policy `llm_usage_log_select_super_admin` (role = 'super_admin' only). No INSERT/UPDATE/DELETE policies for authenticated users.
- Consumed by: Task 3 (Edge Function inserts via service role, bypassing RLS) and Task 5 (`TabUsageIA.js` reads via `SELECT`).

- [ ] **Step 1: Write the migration script**

```js
// scripts/migrate_llm_usage_log.js
// Crée la table llm_usage_log (RLS) — suivi de consommation de tokens LLM,
// générique pour tout futur outil IA (call_type distingue chaque usage).
require('dotenv').config();
const { Client } = require('pg');

async function main() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();

  await client.query(`
    CREATE TABLE IF NOT EXISTS public.llm_usage_log (
      id                UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
      call_type         TEXT        NOT NULL,
      model             TEXT        NOT NULL,
      prompt_tokens     INTEGER     NOT NULL,
      completion_tokens INTEGER     NOT NULL,
      total_tokens      INTEGER     NOT NULL,
      user_id           UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
      created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
  console.log('✓ Table llm_usage_log créée');

  await client.query(`CREATE INDEX IF NOT EXISTS idx_llm_usage_log_created_at
    ON public.llm_usage_log(created_at);`);
  await client.query(`CREATE INDEX IF NOT EXISTS idx_llm_usage_log_call_type
    ON public.llm_usage_log(call_type);`);
  console.log('✓ Index créés');

  await client.query(`ALTER TABLE public.llm_usage_log ENABLE ROW LEVEL SECURITY;`);

  const { rows } = await client.query(
    `SELECT 1 FROM pg_policies WHERE tablename = 'llm_usage_log' AND policyname = 'llm_usage_log_select_super_admin'`
  );
  if (rows.length === 0) {
    await client.query(`
      CREATE POLICY "llm_usage_log_select_super_admin"
      ON public.llm_usage_log FOR SELECT TO authenticated
      USING (
        EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'super_admin')
      );
    `);
    console.log('✓ Policy llm_usage_log_select_super_admin créée');
  } else {
    console.log('  Policy llm_usage_log_select_super_admin déjà existante');
  }
  // Volontairement aucune policy INSERT/UPDATE/DELETE : seule la fonction Edge
  // (clé service role, qui contourne RLS) doit pouvoir écrire dans cette table.

  const { rows: count } = await client.query(`SELECT count(*)::int AS n FROM public.llm_usage_log`);
  console.log(`  ${count[0].n} lignes existantes dans llm_usage_log`);

  await client.end();
  console.log('\n✓ Migration llm_usage_log terminée.');
}

main().catch(e => { console.error(e); process.exit(1); });
```

- [ ] **Step 2: Run the migration**

Run: `node scripts/migrate_llm_usage_log.js`
Expected: `✓ Table llm_usage_log créée`, `✓ Index créés`, `✓ Policy llm_usage_log_select_super_admin créée`, `0 lignes existantes dans llm_usage_log`.

- [ ] **Step 3: Commit**

```bash
git add scripts/migrate_llm_usage_log.js
git commit -m "feat(ia): table llm_usage_log (RLS super_admin) pour le suivi de tokens"
```

---

### Task 3: Edge Function `translate-argot`

**Files:**
- Create: `supabase/functions/translate-argot/index.ts`

**Interfaces:**
- Consumes: table `public.llm_usage_log` (Task 2).
- Produces: a deployed Supabase Edge Function `translate-argot`, `verify_jwt: true`, accepting `POST { texte: string, style: 'bourgeois'|'apache'|'ouvrier'|'louchebem' }` and returning `{ traduction: string }` on success or `{ error: string }` with a non-200 status on failure. Consumed by Task 4 (`TraducteurArgot.jsx` via `supabase.functions.invoke('translate-argot', { body: { texte, style } })`).

- [ ] **Step 1: Write the function**

```ts
// supabase/functions/translate-argot/index.ts
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from "npm:@supabase/supabase-js@2"
import { GoogleGenAI } from "npm:@google/genai"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform',
}

const MODEL = 'gemini-1.5-flash'

const PROMPTS_LANGAGE: Record<string, string> = {
  bourgeois:
    "Tu es un traducteur expert pour le JDR 'Les Héritiers'. Réécris la phrase de l'utilisateur dans le jargon bourgeois, snob, précieux et méprisant des salons parisiens de 1899 (la 'langue verte des salons'). Utilise des anglicismes chics (smart, shocking, rastaquouère), des métaphores mondaines et un ton condescendant. Renvie UNIQUEMENT la phrase traduite.",

  apache:
    "Tu es un traducteur pour le JDR 'Les Héritiers'. Réécris la phrase dans l'argot des Apaches, des voyous et du milieu interlope des barrières de Paris en 1899. Utilise la langue verte des truands (surin pour couteau, piaste/thune pour argent, creuse pour estomac, amand de cœur). Le ton est menaçant, sec, argotique et féroce. Renvie UNIQUEMENT la phrase traduite.",

  ouvrier:
    "Tu es un traducteur pour le JDR 'Les Héritiers'. Réécris la phrase dans la langue populaire, gouailleuse et frondeuse des ouvriers et des titi parisiens des faubourgs en 1899. C'est le parler de Belleville ou de Ménilmontant : direct, imagé, un peu rouspéteur mais chaleureux, utilisant le vocabulaire du travail et de la rue (bosser, la thune, le loufoque, pinter un verre). Renvie UNIQUEMENT la phrase traduite.",

  louchebem:
    "Tu es un traducteur expert pour le JDR 'Les Héritiers'. Réécris la phrase dans le véritable LOUCHEBEM (l'argot secret des bouchers des abattoirs de la Villette et des Halles en 1899). Applique strictement la règle : la consonne initiale est remplacée par un 'L', renvoyée à la fin du mot, avec un suffixe comme -em, -oque, -ic, -uche (ex: boucher -> louchebem, fou -> loufoque, gamin -> laminic, patron -> latronem, merci -> lercime, femme -> lamfe, gigot -> ligotic). Reste lisible pour le MJ mais très typé. Renvie UNIQUEMENT la phrase traduite.",
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { texte, style } = await req.json()

    if (!texte || typeof texte !== 'string' || !texte.trim()) {
      return new Response(JSON.stringify({ error: 'Texte manquant' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const instructionSysteme = PROMPTS_LANGAGE[style] || PROMPTS_LANGAGE.bourgeois

    const apiKey = Deno.env.get('GEMINI_API_KEY')
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Clé Gemini manquante' }), {
        status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const ai = new GoogleGenAI({ apiKey })
    const response = await ai.models.generateContent({
      model: MODEL,
      config: {
        systemInstruction: instructionSysteme,
        temperature: 0.7,
        maxOutputTokens: 150,
      },
      contents: texte,
    })

    const traduction = response.text.trim()

    // Journalisation de la consommation — best-effort, ne doit jamais faire
    // échouer la traduction si l'insertion échoue.
    try {
      const usage = response.usageMetadata || {}
      const promptTokens = usage.promptTokenCount ?? 0
      const completionTokens = usage.candidatesTokenCount ?? 0
      const totalTokens = usage.totalTokenCount ?? (promptTokens + completionTokens)

      const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
      const anonKey = Deno.env.get('SUPABASE_ANON_KEY') ?? ''
      const serviceKey = Deno.env.get('SERVICE_ROLE_KEY') ?? Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

      let userId: string | null = null
      const authHeader = req.headers.get('Authorization') ?? ''
      const authRes = await fetch(`${supabaseUrl}/auth/v1/user`, {
        headers: { 'Authorization': authHeader, 'apikey': anonKey }
      })
      const authData = await authRes.json()
      if (authRes.ok && authData?.id) userId = authData.id

      if (serviceKey) {
        const admin = createClient(supabaseUrl, serviceKey)
        await admin.from('llm_usage_log').insert({
          call_type: 'translate-argot',
          model: MODEL,
          prompt_tokens: promptTokens,
          completion_tokens: completionTokens,
          total_tokens: totalTokens,
          user_id: userId,
        })
      }
    } catch (logError) {
      console.error('Erreur journalisation llm_usage_log:', logError)
    }

    return new Response(JSON.stringify({ traduction }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
```

- [ ] **Step 2: Deploy the function**

Use `mcp__claude_ai_Supabase__deploy_edge_function` with:
- `project_id`: the project id resolved from `.env`'s `VITE_SUPABASE_URL` (the `https://<project_id>.supabase.co` host)
- `name`: `translate-argot`
- `entrypoint_path`: `index.ts`
- `verify_jwt`: `true`
- `files`: `[{ name: "index.ts", content: <contents of supabase/functions/translate-argot/index.ts> }]`

Expected: deployment succeeds, function appears with `status: "ACTIVE"` in `mcp__claude_ai_Supabase__list_edge_functions`.

- [ ] **Step 3: Flag the manual secret step (cannot be automated)**

The project owner must set `GEMINI_API_KEY` as a secret on this Edge Function before it can work (Supabase Dashboard → Edge Functions → Secrets, or `supabase secrets set GEMINI_API_KEY=... --project-ref <ref>` if the CLI is linked). Do not ask for the raw key value in chat — it must be entered directly in the Dashboard/CLI. Note this blocker in the final report; end-to-end testing of this function is blocked until it's set.

- [ ] **Step 4: Commit the repo copy of the function**

```bash
git add supabase/functions/translate-argot/index.ts
git commit -m "feat(ia): fonction Edge translate-argot (Gemini + journalisation tokens)"
```

---

### Task 4: `TraducteurArgot.jsx` page + hub/router wiring

**Files:**
- Create: `src/components/TraducteurArgot.jsx`
- Modify: `src/components/OutilsHub.jsx`
- Modify: `src/AppRouter.jsx`

**Interfaces:**
- Consumes: Edge Function `translate-argot` (Task 3) via `supabase.functions.invoke`.
- Produces: route `/argot` rendering `<TraducteurArgot onBack session />`; `OutilsHub` gains a new card wired to `onOpenArgot`.

- [ ] **Step 1: Create the component**

```jsx
// src/components/TraducteurArgot.jsx
import React, { useState } from 'react';
import { ArrowLeft, Feather, Copy } from '../config/icons';
import { supabase } from '../config/supabase';

const STYLES = [
  { id: 'bourgeois', label: 'Bourgeois', description: 'Le jargon snob et précieux des salons parisiens.' },
  { id: 'apache', label: 'Apache', description: "L'argot menaçant des voyous des barrières." },
  { id: 'ouvrier', label: 'Ouvrier', description: 'Le parler gouailleur des faubourgs.' },
  { id: 'louchebem', label: 'Louchebem', description: "L'argot secret des bouchers de la Villette." },
];

export default function TraducteurArgot({ onBack }) {
  const [texte, setTexte] = useState('');
  const [style, setStyle] = useState('bourgeois');
  const [resultat, setResultat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState(null);
  const [copieMsg, setCopieMsg] = useState(null);

  const traduire = async () => {
    if (!texte.trim() || loading) return;
    setLoading(true);
    setErreur(null);
    setResultat(null);
    try {
      const { data, error } = await supabase.functions.invoke('translate-argot', {
        body: { texte: texte.trim(), style },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setResultat(data.traduction);
    } catch (e) {
      setErreur("La traduction a échoué. Réessayez dans un instant.");
    } finally {
      setLoading(false);
    }
  };

  const copier = async () => {
    if (!resultat) return;
    await navigator.clipboard.writeText(resultat);
    setCopieMsg('Copié !');
    setTimeout(() => setCopieMsg(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8] animate-fade-in">
      <header className="sticky top-0 z-40 bg-[#1a0f0a] border-b border-amber-900/30 shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
          <button onClick={onBack} className="p-2 rounded-lg text-amber-200/70 hover:text-amber-100 hover:bg-white/10 transition-all">
            <ArrowLeft size={18} />
          </button>
          <h1 className="font-serif font-bold text-amber-100 text-lg">Traducteur d'Argot 1899</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <p className="text-stone-500 font-serif italic mb-6 text-sm">
          Réécrivez une phrase moderne dans le parler d'époque de votre choix.
        </p>

        <div className="bg-white rounded-2xl border-2 border-stone-200 p-5 shadow-sm">
          <label className="flex flex-col gap-1 text-sm font-serif text-stone-600 mb-4">
            Phrase à traduire
            <textarea
              value={texte}
              onChange={(e) => setTexte(e.target.value)}
              rows={3}
              className="border border-stone-200 rounded-lg px-3 py-2 font-sans"
              placeholder="Ex : Range ton arme, on ne veut pas d'ennuis."
            />
          </label>

          <div className="grid gap-2 sm:grid-cols-2 mb-4">
            {STYLES.map((s) => (
              <button
                key={s.id}
                onClick={() => setStyle(s.id)}
                className={`text-left p-3 rounded-xl border-2 transition-colors ${
                  style === s.id ? 'bg-teal-50 border-teal-400' : 'bg-white border-stone-200 hover:border-stone-300'
                }`}
              >
                <p className="font-serif font-bold text-stone-800 text-sm">{s.label}</p>
                <p className="text-xs text-stone-500">{s.description}</p>
              </button>
            ))}
          </div>

          <button
            onClick={traduire}
            disabled={!texte.trim() || loading}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-700 hover:bg-teal-800 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-bold transition-colors"
          >
            <Feather size={18} /> {loading ? 'Traduction en cours…' : 'Traduire'}
          </button>

          {erreur && <p className="mt-4 text-sm text-red-600">{erreur}</p>}

          {resultat && (
            <div className="mt-5">
              <div className="flex items-start justify-between gap-3 bg-stone-50 border border-stone-100 rounded-lg px-4 py-3">
                <p className="font-serif text-stone-800 italic">{resultat}</p>
                <button
                  onClick={copier}
                  className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-sans font-bold bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-700 rounded-lg transition-colors"
                >
                  <Copy size={13} /> {copieMsg || 'Copier'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Wire the card into `OutilsHub.jsx`**

Update the icon import line:

```js
import { ArrowLeft, Globe, Map, Dices, UtensilsCrossed, Package, Route, Feather } from '../config/icons';
```

Add a new entry to the `OUTILS` array (after the `ambiance` entry):

```js
  {
    id: 'argot',
    titre: "Traducteur d'Argot 1899",
    description: "Réécrivez une phrase dans le parler bourgeois, apache, ouvrier ou louchebem de l'époque.",
    icon: Feather,
    couleur: 'violet',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    hover: 'hover:bg-violet-100 hover:border-violet-300',
    iconColor: 'text-violet-700',
  },
```

Update the component signature and handlers map:

```js
export default function OutilsHub({ onBack, onOpenActualite, onOpenCarte, onOpenGenerateur, onOpenMenu, onOpenPoche, onOpenAmbiance, onOpenArgot }) {
  const handlers = { actualite: onOpenActualite, carte: onOpenCarte, generateur: onOpenGenerateur, menu: onOpenMenu, poche: onOpenPoche, ambiance: onOpenAmbiance, argot: onOpenArgot };
```

- [ ] **Step 3: Wire the route into `AppRouter.jsx`**

Add the lazy import after `AmbianceGenerateur`:

```js
const TraducteurArgot = lazy(() => import('./components/TraducteurArgot'));
```

Add `onOpenArgot` to the `OutilsHub` route:

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
            onOpenArgot={() => navigate('/argot')}
          />
        } />
```

Add the new route after `/ambiance`:

```jsx
        <Route path="/argot" element={<TraducteurArgot onBack={() => navigate('/outils')} userProfile={userProfile} session={session} />} />
```

- [ ] **Step 4: Manual smoke test in the browser (blocked until `GEMINI_API_KEY` is set — see Task 3 Step 3)**

Run: `npm start`
Then: navigate to Outils → confirm the "Traducteur d'Argot 1899" card appears and its title reads correctly, open it, type a sentence, pick a style, click "Traduire". If the secret isn't set yet, expect the red error message ("La traduction a échoué…") — that's the expected failure mode until the secret is configured, not a code bug. Once the secret is set, confirm a translated sentence appears and "Copier" works.

- [ ] **Step 5: Commit**

```bash
git add src/components/TraducteurArgot.jsx src/components/OutilsHub.jsx src/AppRouter.jsx
git commit -m "feat(ia): page Traducteur d'Argot 1899 + intégration au Hub Outils"
```

---

### Task 5: Admin tab `TabUsageIA.js` (super-admin only)

**Files:**
- Create: `src/components/admin/TabUsageIA.js`
- Test: `src/components/admin/__tests__/TabUsageIA.test.js`
- Modify: `src/components/AdminDashboard.js`

**Interfaces:**
- Consumes: table `public.llm_usage_log` (Task 2), read via `supabase.from('llm_usage_log').select(...)`.
- Produces: `coutEstime(model, promptTokens, completionTokens) -> number` (named export, EUR estimate), an admin tab rendered only when `isSuperAdmin` is true (mirrors the existing `repair`/`notifications` tabs).

- [ ] **Step 1: Write the failing test for the pure pricing function**

```js
// src/components/admin/__tests__/TabUsageIA.test.js
import { coutEstime } from '../TabUsageIA';

describe('coutEstime', () => {
  it('calcule un coût nul pour zéro token', () => {
    expect(coutEstime('gemini-1.5-flash', 0, 0)).toBe(0);
  });

  it('calcule un coût positif proportionnel aux tokens prompt et completion', () => {
    const petit = coutEstime('gemini-1.5-flash', 1000, 1000);
    const grand = coutEstime('gemini-1.5-flash', 10000, 10000);
    expect(petit).toBeGreaterThan(0);
    expect(grand).toBeGreaterThan(petit);
  });

  it('retourne 0 pour un modèle inconnu plutôt que de planter', () => {
    expect(coutEstime('modele-inexistant', 1000, 1000)).toBe(0);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- TabUsageIA`
Expected: FAIL — `Cannot find module '../TabUsageIA'` (file doesn't exist yet).

- [ ] **Step 3: Write the component**

```jsx
// src/components/admin/TabUsageIA.js
import React, { useState, useEffect, useMemo } from 'react';
import { supabase } from '../../config/supabase';

// Tarifs approximatifs (USD par 1M tokens) — à ajuster si la grille Google change.
// Source de vérité : https://ai.google.dev/gemini-api/docs/pricing
const TARIFS_USD_PAR_MILLION = {
  'gemini-1.5-flash': { prompt: 0.075, completion: 0.30 },
};

// Taux de conversion approximatif, à ajuster périodiquement.
const USD_VERS_EUR = 0.92;

export function coutEstime(model, promptTokens, completionTokens) {
  const tarif = TARIFS_USD_PAR_MILLION[model];
  if (!tarif) return 0;
  const coutUsd = (promptTokens / 1_000_000) * tarif.prompt + (completionTokens / 1_000_000) * tarif.completion;
  return coutUsd * USD_VERS_EUR;
}

export default function TabUsageIA() {
  const [loading, setLoading] = useState(true);
  const [lignes, setLignes] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data } = await supabase
        .from('llm_usage_log')
        .select('call_type, model, prompt_tokens, completion_tokens, total_tokens, created_at')
        .order('created_at', { ascending: false })
        .limit(2000);
      setLignes(data || []);
      setLoading(false);
    })();
  }, []);

  const groupesParJour = useMemo(() => {
    const parJour = {};
    for (const l of lignes) {
      const jour = new Date(l.created_at).toLocaleDateString('fr-FR');
      if (!parJour[jour]) parJour[jour] = {};
      if (!parJour[jour][l.call_type]) {
        parJour[jour][l.call_type] = { promptTokens: 0, completionTokens: 0, totalTokens: 0, cout: 0 };
      }
      const g = parJour[jour][l.call_type];
      g.promptTokens += l.prompt_tokens;
      g.completionTokens += l.completion_tokens;
      g.totalTokens += l.total_tokens;
      g.cout += coutEstime(l.model, l.prompt_tokens, l.completion_tokens);
    }
    return Object.entries(parJour).sort((a, b) => (a[0] < b[0] ? 1 : -1));
  }, [lignes]);

  if (loading) return <p className="text-sm text-stone-400 font-serif">Chargement…</p>;

  if (groupesParJour.length === 0) {
    return <p className="text-sm text-stone-400 font-serif text-center py-8">Aucun appel IA enregistré pour l'instant.</p>;
  }

  return (
    <div className="space-y-4">
      {groupesParJour.map(([jour, parType]) => {
        const totalJour = Object.values(parType).reduce((acc, g) => ({
          totalTokens: acc.totalTokens + g.totalTokens,
          cout: acc.cout + g.cout,
        }), { totalTokens: 0, cout: 0 });

        return (
          <div key={jour} className="bg-white border border-stone-200 rounded-xl px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <p className="font-serif font-bold text-stone-800">{jour}</p>
              <p className="text-xs font-bold text-stone-500">{totalJour.totalTokens.toLocaleString('fr-FR')} tokens · {totalJour.cout.toFixed(4)} €</p>
            </div>
            <div className="space-y-1">
              {Object.entries(parType).map(([callType, g]) => (
                <div key={callType} className="flex items-center justify-between text-sm text-stone-600 font-sans">
                  <span>{callType} <span className="text-xs text-stone-400">(prompt {g.promptTokens.toLocaleString('fr-FR')} · completion {g.completionTokens.toLocaleString('fr-FR')})</span></span>
                  <span className="font-bold">{g.totalTokens.toLocaleString('fr-FR')} tokens · {g.cout.toFixed(4)} €</span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- TabUsageIA`
Expected: PASS — 3 tests green.

- [ ] **Step 5: Wire the tab into `AdminDashboard.js`**

Update the icon import line:

```js
import { Shield, ArrowLeft, Crown, BarChart2, Award, Wrench, Bell, Dices, UtensilsCrossed, Package, Route, Coins } from '../config/icons';
```

Add the component import after `TabAmbiancePropositions`:

```js
import TabUsageIA from './admin/TabUsageIA';
```

Find this exact block (the `notifications` tab button, the last of the super-admin-only buttons before the always-visible `pnj` button):

```jsx
                {isSuperAdmin && (
                    <button onClick={() => setActiveTab('notifications')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'notifications' ? 'text-green-900 border-green-600' : 'text-gray-400 border-transparent hover:text-gray-700'}`}>
                        <Bell size={18} /> Notifications
                    </button>
                )}
                <button onClick={() => setActiveTab('pnj')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'pnj' ? 'text-amber-900 border-amber-600' : 'text-gray-400 border-transparent hover:text-gray-700'}`}>
```

Insert a new guarded button between the two, so the block becomes:

```jsx
                {isSuperAdmin && (
                    <button onClick={() => setActiveTab('notifications')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'notifications' ? 'text-green-900 border-green-600' : 'text-gray-400 border-transparent hover:text-gray-700'}`}>
                        <Bell size={18} /> Notifications
                    </button>
                )}
                {isSuperAdmin && (
                    <button onClick={() => setActiveTab('usage_ia')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'usage_ia' ? 'text-amber-900 border-amber-600' : 'text-gray-400 border-transparent hover:text-gray-700'}`}>
                        <Coins size={18} /> Usage IA
                    </button>
                )}
                <button onClick={() => setActiveTab('pnj')} className={`pb-3 font-bold text-sm uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'pnj' ? 'text-amber-900 border-amber-600' : 'text-gray-400 border-transparent hover:text-gray-700'}`}>
```

Find this exact block (the last `activeTab ===` render line, for `ambiance`):

```jsx
            {activeTab === 'ambiance' && <TabAmbiancePropositions session={session} />}
```

Add the new render line right after it:

```jsx
            {activeTab === 'ambiance' && <TabAmbiancePropositions session={session} />}
            {activeTab === 'usage_ia' && isSuperAdmin && <TabUsageIA />}
```

- [ ] **Step 6: Manual smoke test in the browser**

With `npm start` running, log in as super admin, go to `/admin_dashboard`, confirm the new "Usage IA" tab appears (only for super admin — log in as a `gardien`-only account if one is available, and confirm it's absent there). Click it: if no Gemini calls have been made yet, expect "Aucun appel IA enregistré pour l'instant." Once a real translation succeeds (after Task 3's secret is set and Task 4 is smoke-tested), reload this tab and confirm a row appears for today's date with `call_type: translate-argot` and non-zero tokens/cost.

- [ ] **Step 7: Commit**

```bash
git add src/components/admin/TabUsageIA.js src/components/admin/__tests__/TabUsageIA.test.js src/components/AdminDashboard.js
git commit -m "feat(ia): onglet admin Usage IA (super admin uniquement) — tokens et coût estimé par jour et type d'appel"
```

---

### Task 6: Full verification pass

**Files:** none (verification only)

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: all tests pass, including the 3 new `TabUsageIA` tests, with 0 regressions on existing suites.

- [ ] **Step 2: Re-run the `llm_usage_log` migration idempotently**

Run: `node scripts/migrate_llm_usage_log.js`
Expected: `Policy llm_usage_log_select_super_admin déjà existante` (no errors, no duplicate policy creation).

- [ ] **Step 3: Confirm the Edge Function is live**

Use `mcp__claude_ai_Supabase__list_edge_functions` and confirm `translate-argot` is present with `status: "ACTIVE"`.

- [ ] **Step 4: Report the outstanding manual blocker**

In the final summary to the user, explicitly state: end-to-end testing of the translator and of real cost data in "Usage IA" is blocked until `GEMINI_API_KEY` is set as a secret on the Supabase project (Task 3 Step 3). Everything else (migration, RLS, Edge Function code and deployment, frontend, admin tab, tests) is complete independent of that step.

- [ ] **Step 5: Final commit (if anything was adjusted during verification)**

```bash
git add -A
git commit -m "chore(ia): ajustements post-vérification"
```
(Skip this step if verification found nothing to fix.)
