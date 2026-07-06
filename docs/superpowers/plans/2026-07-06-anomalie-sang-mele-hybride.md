# Anomalie féérique — Sang-mêlé et Hybride Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the two advanced tiers of the Anomalie féérique rule — Sang-mêlé and Hybride — so evolving (scellé) characters can acquire a second and third foreign pouvoir from the same locked second species, and Hybrides can permanently swap a Capacité naturelle and unlock the second species' Pouvoir profond at Féérie rank 8.

**Architecture:** Extend the existing `AnomalieFeeriqueWidget.jsx` into a 3-tier sequential widget (Anomalie féérique → Sang-mêlé → Hybride) backed by a new pure, testable module `src/utils/anomalieChaining.js`. Sang-mêlé/Hybride become real `fairy_assets` rows (seeded once via script) linked to the same species as Anomalie féérique. The locked second species and the Hybride Capacité swap live in the existing `characters.data` jsonb column — no schema migration.

**Tech Stack:** React 18, Vitest, Supabase (Postgres + supabase-js), existing `CharacterContext` reducer (`characterEngine.js`).

## Global Constraints

- Sang-mêlé et Hybride ne sont achetables qu'en mode évolution (`isCharacterScelle(character) === true`), jamais à la création.
- Coût fixe : 8 XP chacun (`FIXED_XP_COSTS.nouvel_atout`, aucune nouvelle constante).
- Codes XP distincts : `ANOMALIE_SANG_MELE`, `ANOMALIE_HYBRIDE`.
- Le pouvoir étranger de chaque palier doit venir de la MÊME espèce que celle verrouillée au palier 1 (`character.data.anomalie_espece_seconde`).
- Aucune migration de schéma sur `characters` : tout nouveau champ passe par la colonne `data` (jsonb) existante.
- Toute purge est réversible (rembourse l'XP), y compris l'échange de Capacité naturelle de l'Hybride, malgré le mot « définitivement » du manuel.
- Jamais d'appel à `mcp__claude_ai_Supabase__apply_migration` ni `execute_sql` sur le projet de prod (`cijtzdfwrmbftmwookac`) — toute écriture en base passe par un script Node (`supabase-js` + `SUPABASE_SERVICE_KEY`, sur le modèle de `scripts/backfill_fairy_lore.mjs`).
- Suivre les conventions Vitest existantes (`describe`/`it`/`expect` globaux, pas d'import de `vitest` — voir `src/utils/__tests__/xpActions.test.js`).

---

## Task 1: Nouveaux codes XP

**Files:**
- Modify: `src/utils/xpActions.js:18-20`
- Test: `src/utils/__tests__/xpActions.test.js`

**Interfaces:**
- Produces: `XP_CODES.ANOMALIE_SANG_MELE` (string `'ANOMALIE_SANG_MELE'`), `XP_CODES.ANOMALIE_HYBRIDE` (string `'ANOMALIE_HYBRIDE'`).

- [ ] **Step 1: Écrire le test qui échoue**

Ajouter à la fin de `src/utils/__tests__/xpActions.test.js` :

```js
describe('XP_CODES — paliers Anomalie féérique', () => {
  it('expose des codes distincts pour Anomalie féérique, Sang-mêlé et Hybride', () => {
    expect(XP_CODES.ANOMALIE_FEERIQUE).toBe('ANOMALIE_FEERIQUE');
    expect(XP_CODES.ANOMALIE_SANG_MELE).toBe('ANOMALIE_SANG_MELE');
    expect(XP_CODES.ANOMALIE_HYBRIDE).toBe('ANOMALIE_HYBRIDE');
    const codes = [XP_CODES.ANOMALIE_FEERIQUE, XP_CODES.ANOMALIE_SANG_MELE, XP_CODES.ANOMALIE_HYBRIDE];
    expect(new Set(codes).size).toBe(3);
  });
});
```

- [ ] **Step 2: Lancer le test pour vérifier qu'il échoue**

Run: `npm test -- xpActions`
Expected: FAIL — `XP_CODES.ANOMALIE_SANG_MELE` est `undefined`.

- [ ] **Step 3: Ajouter les deux codes**

Dans `src/utils/xpActions.js`, remplacer :

```js
    // --- Atouts & Pouvoirs ---
    ATOUT_ACQUISITION:     'ATOUT_ACQUISITION',      // Atout acquis/désappris
    ANOMALIE_FEERIQUE:     'ANOMALIE_FEERIQUE',      // Anomalie Féérique activée/purgée
```

par :

```js
    // --- Atouts & Pouvoirs ---
    ATOUT_ACQUISITION:     'ATOUT_ACQUISITION',      // Atout acquis/désappris
    ANOMALIE_FEERIQUE:     'ANOMALIE_FEERIQUE',      // Anomalie Féérique activée/purgée
    ANOMALIE_SANG_MELE:    'ANOMALIE_SANG_MELE',     // Sang-mêlé activé/purgé
    ANOMALIE_HYBRIDE:      'ANOMALIE_HYBRIDE',       // Hybride activé/purgé
```

- [ ] **Step 4: Lancer le test pour vérifier qu'il passe**

Run: `npm test -- xpActions`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add src/utils/xpActions.js src/utils/__tests__/xpActions.test.js
git commit -m "feat(xp): ajoute les codes ANOMALIE_SANG_MELE et ANOMALIE_HYBRIDE"
```

---

## Task 2: Module pur `anomalieChaining.js`

**Files:**
- Create: `src/utils/anomalieChaining.js`
- Test: `src/utils/__tests__/anomalieChaining.test.js`

**Interfaces:**
- Consumes: rien (module pur, aucune dépendance interne).
- Produces (utilisé par les Tasks 4, 5, 6) :
  - `computeExteriorPowers(fairyData, typeFee) → Array<{ nom, type_pouvoir, description, origine }>`
  - `deriveEspeceSeconde(character, exteriorPowers) → string | null`
  - `hasAnomalieActive(character) → boolean`
  - `hasSangMeleActive(character) → boolean`
  - `hasHybrideActive(character) → boolean`
  - `canPurchaseSangMele(character) → boolean`
  - `canPurchaseHybride(character) → boolean`
  - `canPurgeAnomalie(character) → boolean`
  - `canPurgeSangMele(character) → boolean`
  - `isOwnSpeciesPowerAvailable(typePouvoir, currentFeerie, { isHybride }) → boolean`
  - `isSecondSpeciesProfondPowerAvailable(typePouvoir, currentFeerie) → boolean`

- [ ] **Step 1: Écrire le fichier de test complet (il échoue car le module n'existe pas)**

Créer `src/utils/__tests__/anomalieChaining.test.js` :

```js
import {
  computeExteriorPowers,
  deriveEspeceSeconde,
  hasAnomalieActive,
  hasSangMeleActive,
  hasHybrideActive,
  canPurchaseSangMele,
  canPurchaseHybride,
  canPurgeAnomalie,
  canPurgeSangMele,
  isOwnSpeciesPowerAvailable,
  isSecondSpeciesProfondPowerAvailable,
} from '../anomalieChaining';

const FAIRY_DATA = {
  Phenix: {
    pouvoirs: [
      { nom: 'Souffle enflammé', type_pouvoir: 'masque' },
      { nom: 'Renaissance', type_pouvoir: 'demasque' },
    ],
  },
  Succube: {
    pouvoirs: [
      { nom: 'Pensées impures', type_pouvoir: 'masque' },
      { nom: 'Regard hypnotique', type_pouvoir: 'demasque' },
      { nom: 'Désir profond', type_pouvoir: 'profond_masque' },
    ],
  },
  Ondine: {
    pouvoirs: [
      { nom: 'Liquéfaction', type_pouvoir: 'masque' },
    ],
  },
};

describe('computeExteriorPowers', () => {
  it('retourne les pouvoirs masqués/démasqués des autres espèces, triés par nom', () => {
    const result = computeExteriorPowers(FAIRY_DATA, 'Phenix');
    expect(result.map(p => p.nom)).toEqual(['Liquéfaction', 'Pensées impures', 'Regard hypnotique']);
  });

  it('exclut les pouvoirs profond/légendaire des autres espèces', () => {
    const result = computeExteriorPowers(FAIRY_DATA, 'Phenix');
    expect(result.some(p => p.nom === 'Désir profond')).toBe(false);
  });

  it("attache l'origine de chaque pouvoir", () => {
    const result = computeExteriorPowers(FAIRY_DATA, 'Phenix');
    expect(result.find(p => p.nom === 'Pensées impures').origine).toBe('Succube');
  });

  it('retourne un tableau vide sans fairyData ou typeFee', () => {
    expect(computeExteriorPowers(null, 'Phenix')).toEqual([]);
    expect(computeExteriorPowers(FAIRY_DATA, null)).toEqual([]);
  });
});

describe('deriveEspeceSeconde', () => {
  const exteriorPowers = computeExteriorPowers(FAIRY_DATA, 'Phenix');

  it("retourne le champ persisté s'il existe", () => {
    const character = { data: { anomalie_espece_seconde: 'Ondine' }, pouvoirs: [] };
    expect(deriveEspeceSeconde(character, exteriorPowers)).toBe('Ondine');
  });

  it("dérive l'espèce depuis le pouvoir étranger choisi si le champ est absent (personnage existant)", () => {
    const character = { data: {}, pouvoirs: ['Pensées impures'] };
    expect(deriveEspeceSeconde(character, exteriorPowers)).toBe('Succube');
  });

  it("retourne null si aucun pouvoir étranger n'est choisi", () => {
    const character = { data: {}, pouvoirs: [] };
    expect(deriveEspeceSeconde(character, exteriorPowers)).toBeNull();
  });
});

describe('flags atouts', () => {
  it('détecte chaque palier actif indépendamment', () => {
    expect(hasAnomalieActive({ atouts: ['Anomalie féérique'] })).toBe(true);
    expect(hasSangMeleActive({ atouts: [] })).toBe(false);
    expect(hasHybrideActive({ atouts: ['Hybride'] })).toBe(true);
  });
});

describe('gating des paliers', () => {
  it("Sang-mêlé nécessite Anomalie féérique et n'est pas déjà actif", () => {
    expect(canPurchaseSangMele({ atouts: [] })).toBe(false);
    expect(canPurchaseSangMele({ atouts: ['Anomalie féérique'] })).toBe(true);
    expect(canPurchaseSangMele({ atouts: ['Anomalie féérique', 'Sang-mêlé'] })).toBe(false);
  });

  it("Hybride nécessite Sang-mêlé et n'est pas déjà actif", () => {
    expect(canPurchaseHybride({ atouts: ['Anomalie féérique'] })).toBe(false);
    expect(canPurchaseHybride({ atouts: ['Anomalie féérique', 'Sang-mêlé'] })).toBe(true);
    expect(canPurchaseHybride({ atouts: ['Anomalie féérique', 'Sang-mêlé', 'Hybride'] })).toBe(false);
  });

  it("purger l'Anomalie féérique est bloqué tant que Sang-mêlé est actif", () => {
    expect(canPurgeAnomalie({ atouts: ['Anomalie féérique', 'Sang-mêlé'] })).toBe(false);
    expect(canPurgeAnomalie({ atouts: ['Anomalie féérique'] })).toBe(true);
  });

  it("purger Sang-mêlé est bloqué tant qu'Hybride est actif", () => {
    expect(canPurgeSangMele({ atouts: ['Sang-mêlé', 'Hybride'] })).toBe(false);
    expect(canPurgeSangMele({ atouts: ['Sang-mêlé'] })).toBe(true);
  });
});

describe('isOwnSpeciesPowerAvailable', () => {
  it('masque/démasque toujours disponibles', () => {
    expect(isOwnSpeciesPowerAvailable('masque', 3)).toBe(true);
    expect(isOwnSpeciesPowerAvailable('demasque', 1)).toBe(true);
  });

  it('profond disponible à partir de Féérie 7', () => {
    expect(isOwnSpeciesPowerAvailable('profond_masque', 6)).toBe(false);
    expect(isOwnSpeciesPowerAvailable('profond_masque', 7)).toBe(true);
  });

  it('légendaire disponible à Féérie 8 pour un personnage normal', () => {
    expect(isOwnSpeciesPowerAvailable('legendaire_masque', 7)).toBe(false);
    expect(isOwnSpeciesPowerAvailable('legendaire_masque', 8)).toBe(true);
  });

  it('légendaire jamais disponible pour un Hybride, même à Féérie 8', () => {
    expect(isOwnSpeciesPowerAvailable('legendaire_masque', 8, { isHybride: true })).toBe(false);
  });
});

describe('isSecondSpeciesProfondPowerAvailable', () => {
  it('disponible seulement à Féérie 8 et seulement pour les types profond', () => {
    expect(isSecondSpeciesProfondPowerAvailable('profond_masque', 8)).toBe(true);
    expect(isSecondSpeciesProfondPowerAvailable('profond_masque', 7)).toBe(false);
    expect(isSecondSpeciesProfondPowerAvailable('masque', 8)).toBe(false);
    expect(isSecondSpeciesProfondPowerAvailable('legendaire_masque', 8)).toBe(false);
  });
});
```

- [ ] **Step 2: Lancer les tests pour vérifier qu'ils échouent**

Run: `npm test -- anomalieChaining`
Expected: FAIL — `Cannot find module '../anomalieChaining'`

- [ ] **Step 3: Créer le module**

Créer `src/utils/anomalieChaining.js` :

```js
// src/utils/anomalieChaining.js
// Logique pure pour la chaîne Anomalie féérique → Sang-mêlé → Hybride.
// Extrait pour être testable sans monter de composants React ; consommé par
// AnomalieFeeriqueWidget.jsx, StepCapacites.js et StepPouvoirs.js.

export function computeExteriorPowers(fairyData, typeFee) {
  if (!fairyData || !typeFee) return [];
  const others = [];
  const myFairyPowers = fairyData[typeFee]?.pouvoirs?.map(p => p.nom) || [];

  Object.keys(fairyData).forEach(fName => {
    if (fName === typeFee) return;
    const fData = fairyData[fName];
    if (!fData?.pouvoirs) return;
    fData.pouvoirs.forEach(p => {
      const isStandard = p.type_pouvoir === 'masque' || p.type_pouvoir === 'demasque';
      if (isStandard && !myFairyPowers.includes(p.nom) && !others.some(ex => ex.nom === p.nom)) {
        others.push({ ...p, origine: fName });
      }
    });
  });

  return others.sort((a, b) => a.nom.localeCompare(b.nom));
}

export function deriveEspeceSeconde(character, exteriorPowers) {
  const stored = character?.data?.anomalie_espece_seconde;
  if (stored) return stored;

  const chosenNom = (character?.pouvoirs || []).find(pNom =>
    exteriorPowers.some(ep => ep.nom === pNom)
  );
  if (!chosenNom) return null;

  const match = exteriorPowers.find(ep => ep.nom === chosenNom);
  return match ? match.origine : null;
}

export function hasAnomalieActive(character) {
  return (character?.atouts || []).includes('Anomalie féérique');
}

export function hasSangMeleActive(character) {
  return (character?.atouts || []).includes('Sang-mêlé');
}

export function hasHybrideActive(character) {
  return (character?.atouts || []).includes('Hybride');
}

export function canPurchaseSangMele(character) {
  return hasAnomalieActive(character) && !hasSangMeleActive(character);
}

export function canPurchaseHybride(character) {
  return hasSangMeleActive(character) && !hasHybrideActive(character);
}

export function canPurgeAnomalie(character) {
  return !hasSangMeleActive(character);
}

export function canPurgeSangMele(character) {
  return !hasHybrideActive(character);
}

export function isOwnSpeciesPowerAvailable(typePouvoir, currentFeerie, { isHybride = false } = {}) {
  const type = typePouvoir || '';
  if (type.includes('legendaire') || type.includes('légendaire')) {
    return isHybride ? false : currentFeerie >= 8;
  }
  if (type.includes('profond')) return currentFeerie >= 7;
  return type === 'masque' || type === 'demasque';
}

export function isSecondSpeciesProfondPowerAvailable(typePouvoir, currentFeerie) {
  const type = typePouvoir || '';
  const isProfond = type === 'profond_masque' || type === 'profond_demasque';
  return isProfond && currentFeerie >= 8;
}
```

- [ ] **Step 4: Lancer les tests pour vérifier qu'ils passent**

Run: `npm test -- anomalieChaining`
Expected: PASS (17 tests)

- [ ] **Step 5: Commit**

```bash
git add src/utils/anomalieChaining.js src/utils/__tests__/anomalieChaining.test.js
git commit -m "feat(anomalie): ajoute le module pur de chaînage Anomalie/Sang-mêlé/Hybride"
```

---

## Task 3: Script de seed des atouts Sang-mêlé et Hybride en base

**Files:**
- Create: `scripts/seed_sang_mele_hybride.mjs`

**Interfaces:**
- Consumes: `VITE_SUPABASE_URL`, `SUPABASE_SERVICE_KEY` (`.env`, comme `scripts/backfill_fairy_lore.mjs`).
- Produces : 2 lignes dans `fairy_assets` (`Sang-mêlé`, `Hybride`) + leurs liens `fairy_type_assets` vers les mêmes espèces que `Anomalie féérique` (31 aujourd'hui). Utilisé par Task 4 (`StepAtouts.js`) pour l'affichage en lecture seule dans la grille d'atouts.

- [ ] **Step 1: Créer le script**

Créer `scripts/seed_sang_mele_hybride.mjs` :

```js
// scripts/seed_sang_mele_hybride.mjs
// Ajoute les atouts "Sang-mêlé" et "Hybride" en base, liés aux mêmes espèces
// que "Anomalie féérique". Idempotent : ignore les atouts/liaisons déjà présents.
// Usage : node scripts/seed_sang_mele_hybride.mjs

import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const NEW_ASSETS = [
  {
    nom: 'Sang-mêlé',
    description: "Permet de choisir un second Pouvoir de la même espèce étrangère que l'Anomalie féérique, à la place d'un pouvoir standard. Requiert d'avoir déjà l'Anomalie féérique.",
    effets: "Accès à 1 pouvoir hors liste supplémentaire (même espèce que l'Anomalie féérique)",
  },
  {
    nom: 'Hybride',
    description: "Permet de choisir un troisième Pouvoir de la même espèce étrangère que l'Anomalie féérique et le Sang-mêlé, et d'échanger une Capacité naturelle contre une de cette seconde espèce. Requiert d'avoir déjà Sang-mêlé. Un Hybride n'a jamais accès au Pouvoir légendaire (ni de son espèce d'origine, ni de la seconde) ; son 8e pouvoir est un Pouvoir profond de la seconde espèce.",
    effets: "Accès à 1 pouvoir hors liste supplémentaire + échange définitif d'une Capacité naturelle",
  },
];

let ok = 0, err = 0;

const { data: anomalieAsset, error: anomalieErr } = await supabase
  .from('fairy_assets')
  .select('id, fairy_type_assets(fairy_type_id)')
  .eq('nom', 'Anomalie féérique')
  .single();

if (anomalieErr || !anomalieAsset) {
  console.error("❌ Impossible de trouver l'atout 'Anomalie féérique' :", anomalieErr?.message);
  process.exit(1);
}

const linkedFairyTypeIds = anomalieAsset.fairy_type_assets.map(l => l.fairy_type_id);
console.log(`ℹ️  ${linkedFairyTypeIds.length} espèces liées à Anomalie féérique.`);

for (const asset of NEW_ASSETS) {
  const { data: existing } = await supabase
    .from('fairy_assets')
    .select('id')
    .eq('nom', asset.nom)
    .maybeSingle();

  let assetId = existing?.id;

  if (!assetId) {
    const { data: inserted, error: insertErr } = await supabase
      .from('fairy_assets')
      .insert({ nom: asset.nom, description: asset.description, effets: asset.effets, is_official: true })
      .select('id')
      .single();

    if (insertErr) {
      console.error(`❌ Insertion "${asset.nom}" :`, insertErr.message);
      err++;
      continue;
    }
    assetId = inserted.id;
    console.log(`✓  Atout créé : ${asset.nom}`);
  } else {
    console.log(`↷  Atout déjà présent : ${asset.nom}`);
  }

  const { data: existingLinks } = await supabase
    .from('fairy_type_assets')
    .select('fairy_type_id')
    .eq('asset_id', assetId);

  const alreadyLinkedIds = new Set((existingLinks || []).map(l => l.fairy_type_id));
  const toLink = linkedFairyTypeIds
    .filter(id => !alreadyLinkedIds.has(id))
    .map(fairy_type_id => ({ fairy_type_id, asset_id: assetId }));

  if (toLink.length > 0) {
    const { error: linkErr } = await supabase.from('fairy_type_assets').insert(toLink);
    if (linkErr) {
      console.error(`❌ Liaison espèces pour "${asset.nom}" :`, linkErr.message);
      err++;
      continue;
    }
    console.log(`✓  ${toLink.length} liaisons créées pour ${asset.nom}`);
  } else {
    console.log(`↷  Toutes les liaisons existent déjà pour ${asset.nom}`);
  }
  ok++;
}

console.log(`\nRésultat : ${ok} atouts traités, ${err} erreurs.`);
if (err > 0) process.exit(1);
```

- [ ] **Step 2: Exécuter le script contre la base réelle**

Run: `node scripts/seed_sang_mele_hybride.mjs`
Expected: sortie se terminant par `Résultat : 2 atouts traités, 0 erreurs.`

⚠️ Ce script écrit dans la base Supabase de production (`cijtzdfwrmbftmwookac`). Il est idempotent (peut être relancé sans dupliquer), mais doit être exécuté une seule fois pour de vrai, en confirmant d'abord avec l'utilisatrice si ce n'est pas déjà fait dans le cadre de ce chantier.

- [ ] **Step 3: Vérifier en base**

Run (dans un script Node jetable utilisant `pg` + `SUPABASE_DB_URL`, jamais les outils MCP Supabase sur ce projet) :

```sql
SELECT nom, (SELECT count(*) FROM fairy_type_assets WHERE asset_id = fairy_assets.id) AS nb_liens
FROM fairy_assets WHERE nom IN ('Sang-mêlé', 'Hybride');
```

Expected: 2 lignes, chacune avec `nb_liens = 31` (ou le nombre courant d'espèces liées à Anomalie féérique).

- [ ] **Step 4: Commit**

```bash
git add scripts/seed_sang_mele_hybride.mjs
git commit -m "feat(db): script de seed des atouts Sang-mêlé et Hybride"
```

---

## Task 4: `StepAtouts.js` — généraliser le cas spécial des atouts chaînés

**Files:**
- Modify: `src/components/StepAtouts.js:137,147-150`

**Interfaces:**
- Consumes: rien de nouveau (pas de dépendance à `anomalieChaining.js` ici — la liste est statique, ces 3 atouts ne sont jamais togglables directement dans cette grille).

- [ ] **Step 1: Remplacer la détection du cas spécial**

Dans `src/components/StepAtouts.js`, ajouter la constante juste après les imports (après la ligne `const MAX_ATOUTS_GLOBAL = 2;`) :

```js
// Atouts gérés exclusivement depuis le widget de l'Étape 3 (Pouvoirs) —
// jamais togglables directement dans cette grille.
const CHAINED_ATOUTS = ['Anomalie féérique', 'Sang-mêlé', 'Hybride'];
```

Puis remplacer :

```js
          const isAnomalie = atout.nom === 'Anomalie féérique';
```

par :

```js
          const isAnomalie = CHAINED_ATOUTS.includes(atout.nom);
```

- [ ] **Step 2: Vérifier que les tests existants passent toujours**

Run: `npm test`
Expected: PASS (aucun test ne ciblait `StepAtouts.js` directement, aucune régression attendue)

- [ ] **Step 3: Commit**

```bash
git add src/components/StepAtouts.js
git commit -m "refactor(atouts): généralise le cas spécial Anomalie féérique à Sang-mêlé et Hybride"
```

---

## Task 5: `AnomalieFeeriqueWidget.jsx` — widget à 3 paliers

**Files:**
- Modify: `src/components/AnomalieFeeriqueWidget.jsx` (réécriture complète)

**Interfaces:**
- Consumes: tout `src/utils/anomalieChaining.js` (Task 2), `XP_CODES.ANOMALIE_SANG_MELE`/`ANOMALIE_HYBRIDE` (Task 1).
- Produces: écrit `character.atouts` (`'Sang-mêlé'`, `'Hybride'`), `character.pouvoirs` (jusqu'à 2 pouvoirs étrangers supplémentaires), `character.data.anomalie_espece_seconde`. Lu par Task 6 (`StepCapacites.js`) et Task 7 (`StepPouvoirs.js`) via `character.atouts`/`character.data.anomalie_espece_seconde`.

- [ ] **Step 1: Remplacer le fichier entier**

Remplacer tout le contenu de `src/components/AnomalieFeeriqueWidget.jsx` par :

```jsx
// src/components/AnomalieFeeriqueWidget.jsx

import React, { useState, useMemo, useEffect } from 'react';
import { Sparkles, Check } from '../config/icons';
import { useCharacter } from '../context/CharacterContext';
import { useGameDataContext } from '../context/GameDataContext';
import { showInAppNotification } from '../utils/SystemeServices';
import { FIXED_XP_COSTS } from '../utils/xpCalculator';
import { isCharacterScelle } from '../utils/lockUtils';
import { getXpState, XP_CODES } from '../utils/xpActions';
import {
  computeExteriorPowers,
  deriveEspeceSeconde,
  hasAnomalieActive,
  hasSangMeleActive,
  hasHybrideActive,
  canPurchaseSangMele,
  canPurchaseHybride,
  canPurgeAnomalie,
  canPurgeSangMele,
} from '../utils/anomalieChaining';

const MAX_ATOUTS_GLOBAL = 2;

const TIER_CONFIG = {
  sangMele: { atout: 'Sang-mêlé', code: XP_CODES.ANOMALIE_SANG_MELE, label: 'Sang-mêlé' },
  hybride: { atout: 'Hybride', code: XP_CODES.ANOMALIE_HYBRIDE, label: 'Hybride' },
};

export default function AnomalieFeeriqueWidget() {
  const { character, dispatchCharacter, isReadOnly } = useCharacter();
  const { gameData } = useGameDataContext();
  const [showCatalog, setShowCatalog] = useState(null); // null | 'anomalie' | 'sangMele' | 'hybride'
  const [draftEspece, setDraftEspece] = useState(null); // espèce choisie pendant la sélection du palier 1

  const fairyData = gameData.fairyData;
  const data = fairyData && character.typeFee ? fairyData[character.typeFee] : null;

  const isScelle = isCharacterScelle(character);
  const innatePouvoirs = character.data?.stats_scellees?.pouvoirs || [];

  const currentFeerie = character.caracteristiques?.feerie || 3;
  const maxPouvoirs = currentFeerie;
  const countAtouts = character.atouts?.length || 0;

  const { xpDispo } = getXpState(character);

  const anomalieAtout = data?.atouts?.find(a => a.nom === 'Anomalie féérique');
  const anomalieId = anomalieAtout ? anomalieAtout.id : 'Anomalie féérique';
  const hasAnomalie = hasAnomalieActive(character);
  const hasSangMele = hasSangMeleActive(character);
  const hasHybride = hasHybrideActive(character);

  const exteriorPowers = useMemo(
    () => computeExteriorPowers(fairyData, character.typeFee),
    [fairyData, character.typeFee]
  );

  const chosenExteriorPowers = useMemo(
    () => (character.pouvoirs || []).filter(p => exteriorPowers.some(ep => ep.nom === p)),
    [character.pouvoirs, exteriorPowers]
  );

  const tier1Pouvoir = chosenExteriorPowers[0] || null;
  const tier2Pouvoir = chosenExteriorPowers[1] || null;
  const tier3Pouvoir = chosenExteriorPowers[2] || null;

  const especeSeconde = useMemo(
    () => deriveEspeceSeconde(character, exteriorPowers),
    [character, exteriorPowers]
  );

  // 🩹 AUTO-GUÉRISON : les personnages ayant déjà l'Anomalie féérique avant
  // l'introduction du champ `anomalie_espece_seconde` le reçoivent au premier rendu.
  useEffect(() => {
    if (tier1Pouvoir && especeSeconde && !character.data?.anomalie_espece_seconde) {
      dispatchCharacter({
        type: 'UPDATE_MULTIPLE',
        payload: { data: { ...(character.data || {}), anomalie_espece_seconde: especeSeconde } },
        gameData,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tier1Pouvoir, especeSeconde]);

  const especesDisponibles = useMemo(
    () => [...new Set(exteriorPowers.map(p => p.origine))].sort(),
    [exteriorPowers]
  );

  const speciesPowerChoices = useMemo(
    () => exteriorPowers.filter(p => p.origine === (especeSeconde || draftEspece)),
    [exteriorPowers, especeSeconde, draftEspece]
  );

  // ⚡ PALIER 1 : ANOMALIE FÉÉRIQUE
  const handleAnomalieToggle = (pouvoirNom) => {
    if (isReadOnly) return;

    const isSelected = tier1Pouvoir === pouvoirNom;

    if (isScelle && isSelected && innatePouvoirs.includes(pouvoirNom)) {
      showInAppNotification("Cette Anomalie fait partie de votre Sceau originel. Impossible de la purger !", "warning");
      return;
    }

    if (isSelected && !canPurgeAnomalie(character)) {
      showInAppNotification("Retirez d'abord Sang-mêlé avant de purger l'Anomalie féérique.", "error");
      return;
    }

    let newPouvoirs = character.pouvoirs ? [...character.pouvoirs] : [];
    let newAtouts = character.atouts ? [...character.atouts] : [];
    let newData = { ...(character.data || {}) };
    let xpTransactionPayload = null;

    if (isSelected) {
      newPouvoirs = newPouvoirs.filter(p => p !== pouvoirNom);
      newAtouts = newAtouts.filter(a => a !== anomalieId && a !== 'Anomalie féérique');
      delete newData.anomalie_espece_seconde;

      const innateAtouts = character.data?.stats_scellees?.atouts || [];
      const isAtoutInnate = innateAtouts.includes(anomalieId) || innateAtouts.includes('Anomalie féérique');

      if (isScelle && !isAtoutInnate) {
        xpTransactionPayload = { type: 'REMBOURSEMENT', code: XP_CODES.ANOMALIE_FEERIQUE, label: 'Acquisition : Atout Anomalie féérique', valeur: FIXED_XP_COSTS.nouvel_atout };
        showInAppNotification(`Anomalie purgée : +${FIXED_XP_COSTS.nouvel_atout} XP récupérés !`, "success");
      }
    } else {
      if (newPouvoirs.length >= maxPouvoirs) {
        showInAppNotification("Vous avez atteint votre limite de pouvoirs maîtrisés.", "error");
        return;
      }

      if (!hasAnomalie) {
        if (isScelle) {
          if (xpDispo < FIXED_XP_COSTS.nouvel_atout) {
            showInAppNotification(`L'Anomalie consomme un emplacement d'Atout. Il vous faut ${FIXED_XP_COSTS.nouvel_atout} XP !`, "error");
            return;
          }
          xpTransactionPayload = { type: 'DEPENSE', code: XP_CODES.ANOMALIE_FEERIQUE, label: 'Acquisition : Atout Anomalie féérique', valeur: FIXED_XP_COSTS.nouvel_atout };
          showInAppNotification(`Anomalie activée pour ${FIXED_XP_COSTS.nouvel_atout} XP !`, "success");
        } else {
          if (countAtouts >= MAX_ATOUTS_GLOBAL) {
            showInAppNotification(`Vous avez déjà ${MAX_ATOUTS_GLOBAL} Atouts.`, "error");
            return;
          }
        }
      }
      newPouvoirs.push(pouvoirNom);
      if (!newAtouts.includes(anomalieId)) newAtouts.push(anomalieId);
      const chosenPower = exteriorPowers.find(p => p.nom === pouvoirNom);
      if (chosenPower) newData.anomalie_espece_seconde = chosenPower.origine;
      setShowCatalog(null);
      setDraftEspece(null);
    }

    dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { pouvoirs: newPouvoirs, atouts: newAtouts, data: newData }, gameData });
    if (xpTransactionPayload) {
      dispatchCharacter({ type: 'LOG_XP_TRANSACTION', transaction: xpTransactionPayload, gameData });
    }
  };

  // ⚡ PALIERS 2 & 3 : SANG-MÊLÉ ET HYBRIDE
  const handleTierToggle = (tierKey, pouvoirNom) => {
    if (isReadOnly) return;
    const config = TIER_CONFIG[tierKey];
    const currentTierPouvoir = tierKey === 'sangMele' ? tier2Pouvoir : tier3Pouvoir;
    const isSelected = currentTierPouvoir === pouvoirNom;

    if (isSelected && isScelle && innatePouvoirs.includes(pouvoirNom)) {
      showInAppNotification("Ce pouvoir fait partie de votre Sceau originel. Impossible de le purger !", "warning");
      return;
    }

    if (isSelected) {
      if (tierKey === 'sangMele' && !canPurgeSangMele(character)) {
        showInAppNotification("Retirez d'abord Hybride avant de purger Sang-mêlé.", "error");
        return;
      }

      const newPouvoirs = (character.pouvoirs || []).filter(p => p !== pouvoirNom);
      const newAtouts = (character.atouts || []).filter(a => a !== config.atout);
      const newData = { ...(character.data || {}) };
      if (tierKey === 'hybride') delete newData.hybride_capacite;

      dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { pouvoirs: newPouvoirs, atouts: newAtouts, data: newData }, gameData });
      dispatchCharacter({
        type: 'LOG_XP_TRANSACTION',
        transaction: { type: 'REMBOURSEMENT', code: config.code, label: `Acquisition : Atout ${config.label}`, valeur: FIXED_XP_COSTS.nouvel_atout },
        gameData,
      });
      showInAppNotification(`${config.label} purgé : +${FIXED_XP_COSTS.nouvel_atout} XP récupérés !${tierKey === 'hybride' ? " L'échange de Capacité naturelle a été annulé." : ''}`, "success");
      return;
    }

    const canPurchase = tierKey === 'sangMele' ? canPurchaseSangMele(character) : canPurchaseHybride(character);
    if (!canPurchase) return;

    if ((character.pouvoirs?.length || 0) >= maxPouvoirs) {
      showInAppNotification("Vous avez atteint votre limite de pouvoirs maîtrisés.", "error");
      return;
    }
    if (xpDispo < FIXED_XP_COSTS.nouvel_atout) {
      showInAppNotification(`Il vous faut ${FIXED_XP_COSTS.nouvel_atout} XP pour débloquer ${config.label} !`, "error");
      return;
    }

    const newPouvoirs = [...(character.pouvoirs || []), pouvoirNom];
    const newAtouts = [...(character.atouts || []), config.atout];

    dispatchCharacter({ type: 'UPDATE_MULTIPLE', payload: { pouvoirs: newPouvoirs, atouts: newAtouts }, gameData });
    dispatchCharacter({
      type: 'LOG_XP_TRANSACTION',
      transaction: { type: 'DEPENSE', code: config.code, label: `Acquisition : Atout ${config.label}`, valeur: FIXED_XP_COSTS.nouvel_atout },
      gameData,
    });
    showInAppNotification(`${config.label} activé pour ${FIXED_XP_COSTS.nouvel_atout} XP !`, "success");
    setShowCatalog(null);
  };

  const renderTierPanel = (tierKey, title, description, chosenPouvoir, canOpen) => {
    const config = TIER_CONFIG[tierKey];
    const catalogKey = tierKey;
    const alreadyChosenNoms = chosenExteriorPowers.filter(p => p !== chosenPouvoir);
    const choices = speciesPowerChoices.filter(p => !alreadyChosenNoms.includes(p.nom));

    return (
      <div className="mt-6 border-t-2 border-dashed border-fuchsia-200 pt-6">
        <div className="bg-gradient-to-r from-fuchsia-50 to-purple-50 border border-fuchsia-200 p-5 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h4 className="font-serif font-bold text-fuchsia-900 flex items-center gap-2 text-lg">
                <Sparkles size={20} className="text-fuchsia-600" />
                {title}
              </h4>
              <p className="text-sm text-fuchsia-800 mt-1">{description}</p>
            </div>

            {chosenPouvoir ? (
              <button
                onClick={() => handleTierToggle(tierKey, chosenPouvoir)}
                className="px-4 py-2 rounded-lg font-bold text-sm transition-colors border shrink-0 bg-red-100 text-red-700 hover:bg-red-200 border-red-200"
              >
                Purger {config.label}
              </button>
            ) : canOpen ? (
              <button
                onClick={() => setShowCatalog(showCatalog === catalogKey ? null : catalogKey)}
                disabled={xpDispo < FIXED_XP_COSTS.nouvel_atout}
                className="px-5 py-2 bg-fuchsia-600 text-white rounded-lg font-bold text-sm hover:bg-fuchsia-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md shrink-0"
              >
                {showCatalog === catalogKey ? 'Refermer le catalogue' : `Débloquer ${config.label} (${FIXED_XP_COSTS.nouvel_atout} XP)`}
              </button>
            ) : null}
          </div>

          {chosenPouvoir && (
            <div className="mt-4 p-4 bg-white rounded-xl border border-fuchsia-300 shadow-inner flex items-start gap-3 animate-fade-in">
              <div className="bg-fuchsia-100 p-2 rounded-lg text-fuchsia-600 shrink-0"><Check size={20} /></div>
              <div>
                <div className="font-bold text-fuchsia-900 text-lg">{chosenPouvoir}</div>
                <div className="text-xs text-fuchsia-600 font-bold uppercase tracking-wider mb-1">Pouvoir assimilé — {config.label}</div>
                <div className="text-sm text-stone-600 leading-relaxed">
                  {exteriorPowers.find(p => p.nom === chosenPouvoir)?.description}
                </div>
              </div>
            </div>
          )}

          {showCatalog === catalogKey && !chosenPouvoir && (
            <div className="mt-4 max-h-80 overflow-y-auto custom-scrollbar bg-white/60 rounded-xl border border-fuchsia-200 p-2 grid grid-cols-1 md:grid-cols-2 gap-3 shadow-inner animate-fade-in-up">
              {choices.map((pow, idx) => (
                <div
                  key={idx}
                  onClick={() => handleTierToggle(tierKey, pow.nom)}
                  className="p-3 bg-white border border-stone-200 rounded-lg cursor-pointer hover:border-fuchsia-400 hover:shadow-md transition-all"
                >
                  <div className="font-bold font-serif text-gray-800">{pow.nom}</div>
                  <div className="text-xs text-gray-600 leading-relaxed line-clamp-3 mt-1">{pow.description}</div>
                </div>
              ))}
            </div>
          )}

          {tierKey === 'hybride' && chosenPouvoir && (
            <div className="mt-4 text-xs text-fuchsia-800 font-bold bg-fuchsia-50 p-2 rounded border border-fuchsia-200">
              🧬 Cela a débloqué l'échange définitif d'une Capacité naturelle de votre espèce d'origine contre une de {especeSeconde} — rendez-vous à l'Étape 2 (Capacités).
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-8 border-t-2 border-dashed border-amber-200 pt-6">
      <div className="bg-gradient-to-r from-fuchsia-50 to-purple-50 border border-fuchsia-200 p-5 rounded-xl shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h4 className="font-serif font-bold text-fuchsia-900 flex items-center gap-2 text-lg">
              <Sparkles size={20} className="text-fuchsia-600" />
              Anomalie Féérique
            </h4>
            <p className="text-sm text-fuchsia-800 mt-1">
              Permet d'assimiler un pouvoir appartenant à une autre espèce. <br />
              <span className="font-bold text-fuchsia-900">(Coûte 1 emplacement d'Atout)</span>
            </p>
          </div>

          {(() => {
            const isAnomalieInnate = isScelle && innatePouvoirs.includes(tier1Pouvoir);
            if (tier1Pouvoir) {
              return (
                <button
                  onClick={() => handleAnomalieToggle(tier1Pouvoir)}
                  className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors border shrink-0 ${isAnomalieInnate ? 'bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed' : 'bg-red-100 text-red-700 hover:bg-red-200 border-red-200'}`}
                >
                  {isAnomalieInnate ? '🔒 Purge Impossible' : "Purger l'Anomalie"}
                </button>
              );
            } else {
              return (
                <button
                  onClick={() => {
                    const next = showCatalog === 'anomalie' ? null : 'anomalie';
                    setShowCatalog(next);
                    if (next === null) setDraftEspece(null);
                  }}
                  disabled={(character.pouvoirs?.length || 0) >= maxPouvoirs || (!isScelle && !hasAnomalie && countAtouts >= MAX_ATOUTS_GLOBAL)}
                  className="px-5 py-2 bg-fuchsia-600 text-white rounded-lg font-bold text-sm hover:bg-fuchsia-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md shrink-0"
                >
                  {showCatalog === 'anomalie' ? 'Refermer le catalogue' : "Déclencher l'Anomalie"}
                </button>
              );
            }
          })()}
        </div>

        {!tier1Pouvoir && !hasAnomalie && !isScelle && countAtouts >= MAX_ATOUTS_GLOBAL && (
          <div className="text-xs text-red-600 font-bold mt-3 bg-red-50 p-2 rounded border border-red-100 animate-fade-in">
            Vous avez déjà sélectionné tous vos Atouts ({MAX_ATOUTS_GLOBAL}/{MAX_ATOUTS_GLOBAL}) à l'étape suivante. Libérez de la place pour pouvoir déclencher cette anomalie !
          </div>
        )}

        {!tier1Pouvoir && !hasAnomalie && isScelle && (
          <div className="text-xs text-fuchsia-800 font-bold mt-3 bg-fuchsia-50 p-2 rounded border border-fuchsia-200 animate-fade-in">
            🪄 L'activation de l'Anomalie consommera un nouvel emplacement d'Atout et coûtera {FIXED_XP_COSTS.nouvel_atout} XP.
          </div>
        )}

        {tier1Pouvoir && (
          <div className="mt-4 p-4 bg-white rounded-xl border border-fuchsia-300 shadow-inner flex items-start gap-3 animate-fade-in">
            <div className="bg-fuchsia-100 p-2 rounded-lg text-fuchsia-600 shrink-0"><Check size={20} /></div>
            <div>
              <div className="font-bold text-fuchsia-900 text-lg flex items-center gap-2">
                {tier1Pouvoir}
                {isScelle && innatePouvoirs.includes(tier1Pouvoir) && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-600 uppercase" title="Sceau de Création">🔒 Inné</span>
                )}
              </div>
              <div className="text-xs text-fuchsia-600 font-bold uppercase tracking-wider mb-1">Pouvoir assimilé par Anomalie — {especeSeconde}</div>
              <div className="text-sm text-stone-600 leading-relaxed">
                {exteriorPowers.find(p => p.nom === tier1Pouvoir)?.description}
              </div>
            </div>
          </div>
        )}

        {showCatalog === 'anomalie' && !tier1Pouvoir && !draftEspece && (
          <div className="mt-4 bg-white/60 rounded-xl border border-fuchsia-200 p-3 shadow-inner animate-fade-in-up">
            <div className="text-xs font-bold text-fuchsia-900 uppercase tracking-wider mb-2">
              Choisissez d'abord l'espèce féérique étrangère (ce choix sera verrouillé pour les pouvoirs suivants) :
            </div>
            <div className="flex flex-wrap gap-2">
              {especesDisponibles.map(espece => (
                <button
                  key={espece}
                  onClick={() => setDraftEspece(espece)}
                  className="px-3 py-2 rounded-lg border-2 border-stone-200 bg-white text-sm font-bold text-gray-700 hover:border-fuchsia-300 transition-colors"
                >
                  {espece}
                </button>
              ))}
            </div>
          </div>
        )}

        {showCatalog === 'anomalie' && !tier1Pouvoir && draftEspece && (
          <div className="mt-4 max-h-80 overflow-y-auto custom-scrollbar bg-white/60 rounded-xl border border-fuchsia-200 p-2 grid grid-cols-1 md:grid-cols-2 gap-3 shadow-inner animate-fade-in-up">
            {speciesPowerChoices.map((pow, idx) => (
              <div
                key={idx}
                onClick={() => handleAnomalieToggle(pow.nom)}
                className="p-3 bg-white border border-stone-200 rounded-lg cursor-pointer hover:border-fuchsia-400 hover:shadow-md transition-all"
              >
                <div className="font-bold font-serif text-gray-800">{pow.nom}</div>
                <div className="text-[10px] uppercase font-bold text-fuchsia-600 mt-1 mb-1 bg-fuchsia-50 inline-block px-2 py-0.5 rounded">
                  Origine : {pow.origine}
                </div>
                <div className="text-xs text-gray-600 leading-relaxed line-clamp-3">{pow.description}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sang-mêlé/Hybride sont réservés au mode évolution (isScelle) — jamais
          affichés à la création, même si l'Anomalie féérique de base l'est. */}
      {isScelle && hasAnomalie && tier1Pouvoir && renderTierPanel(
        'sangMele',
        'Sang-mêlé',
        `Un second pouvoir de ${especeSeconde}, à la place d'un pouvoir standard.`,
        tier2Pouvoir,
        canPurchaseSangMele(character)
      )}

      {isScelle && hasSangMele && tier2Pouvoir && renderTierPanel(
        'hybride',
        'Hybride',
        `Un troisième pouvoir de ${especeSeconde}, à la place d'un pouvoir standard.`,
        tier3Pouvoir,
        canPurchaseHybride(character)
      )}
    </div>
  );
}
```

- [ ] **Step 2: Lancer toute la suite de tests pour vérifier l'absence de régression**

Run: `npm test`
Expected: PASS (aucun test ne monte ce composant ; vérifie que les autres suites ne référencent rien de cassé)

- [ ] **Step 3: Vérification manuelle dans l'application**

Run: `npm run dev`, ouvrir un personnage scellé (mode évolution), aller à l'Étape 3 (Pouvoirs) :
1. Cliquer « Déclencher l'Anomalie » → un sélecteur d'espèces apparaît (pas de liste de pouvoirs directement).
2. Choisir une espèce → la liste de pouvoirs de CETTE espèce apparaît, choisir un pouvoir → le panneau « Sang-mêlé » apparaît en dessous.
3. Cliquer « Débloquer Sang-mêlé (8 XP) » → seuls les pouvoirs de la même espèce (moins celui déjà pris) sont proposés.
4. Après Sang-mêlé, le panneau « Hybride » apparaît ; l'acquérir affiche le message renvoyant à l'Étape 2.
5. Purger Hybride avant Sang-mêlé doit être refusé ; purger dans l'ordre Hybride → Sang-mêlé → Anomalie doit fonctionner et rembourser 8 XP à chaque fois.
6. Sur un personnage en cours de CRÉATION (pas encore scellé) ayant choisi Anomalie féérique comme atout de base : vérifier qu'aucun panneau Sang-mêlé/Hybride n'apparaît (réservés au mode évolution).

Expected: comportement conforme aux 6 points ci-dessus, sans erreur console.

- [ ] **Step 4: Commit**

```bash
git add src/components/AnomalieFeeriqueWidget.jsx
git commit -m "feat(anomalie): widget à 3 paliers (Anomalie féérique, Sang-mêlé, Hybride)"
```

---

## Task 6: `StepCapacites.js` — échange de Capacité naturelle (Hybride)

**Files:**
- Modify: `src/components/StepCapacites.js` (réécriture complète)

**Interfaces:**
- Consumes: `computeExteriorPowers`, `deriveEspeceSeconde`, `hasHybrideActive` (Task 2).
- Produces: écrit `character.data.hybride_capacite = { slot, capacite }`.

- [ ] **Step 1: Remplacer le fichier entier**

Remplacer tout le contenu de `src/components/StepCapacites.js` par :

```jsx
import React from 'react';
import { Check, Sparkles } from '../config/icons';
import { useCharacter } from '../context/CharacterContext';
import { useGameDataContext } from '../context/GameDataContext';
import { showInAppNotification } from '../utils/SystemeServices';
import { isCharacterScelle } from '../utils/lockUtils';
import { computeExteriorPowers, deriveEspeceSeconde, hasHybrideActive } from '../utils/anomalieChaining';

// ============================================================================
// --- ÉTAPE 2 : CAPACITÉS ---
// ============================================================================

const CAPACITE_SLOTS = ['fixe1', 'fixe2', 'choix'];

export default function StepCapacites() {
  const { character, dispatchCharacter, isReadOnly } = useCharacter();
  const { gameData } = useGameDataContext();
  const fairyData = gameData?.fairyData;
  const data = fairyData && character.typeFee ? fairyData[character.typeFee] : null;

  const isScelle = isCharacterScelle(character);
  const isHybride = hasHybrideActive(character);

  const exteriorPowers = fairyData && character.typeFee
    ? computeExteriorPowers(fairyData, character.typeFee)
    : [];
  const especeSeconde = isHybride ? deriveEspeceSeconde(character, exteriorPowers) : null;
  const secondSpeciesData = especeSeconde ? fairyData[especeSeconde] : null;

  const hybrideCapacite = character.data?.hybride_capacite || null;

  if (!data) {
    return (
      <div className="text-center py-8">
        <p className="text-amber-800 italic">
          Les capacités pour {character.typeFee} n'ont pas encore été définies.
        </p>
      </div>
    );
  }

  if (data.isEnfoui && (character.caracteristiques?.feerie || 3) < 3) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3">
          <Sparkles className="text-amber-600 shrink-0 mt-1" size={20} />
          <div>
            <h2 className="font-serif font-bold text-amber-900">Capacités Naturelles</h2>
            <p className="text-sm text-amber-800">
              Le Faux-Semblant enfoui n'a pas de capacités naturelles pour le moment. Elles se révèleront lorsque la Féérie atteindra 3.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleCapaciteChoice = (c) => {
    if (isReadOnly) return;
    if (isScelle) {
      showInAppNotification("Votre Capacité a été scellée à la création. Impossible d'en changer !", "warning");
      return;
    }
    const foundCap = data.capacites?.choix?.find(cap => cap.nom === c);
    if (foundCap && foundCap.is_official === false) {
      if (!window.confirm(`⚠️ "${c}" est une capacité non-officielle, créée par la Communauté.\n\nSouhaitez-vous vraiment l'utiliser ?`)) return;
    }
    dispatchCharacter({ type: 'UPDATE_FIELD', field: 'capaciteChoisie', value: c, gameData });
  };

  const handleHybrideSlotChoice = (slot) => {
    if (isReadOnly) return;
    const newHybrideCapacite = { slot, capacite: hybrideCapacite?.capacite || null };
    dispatchCharacter({
      type: 'UPDATE_MULTIPLE',
      payload: { data: { ...(character.data || {}), hybride_capacite: newHybrideCapacite } },
      gameData,
    });
  };

  const handleHybrideCapaciteChoice = (capaciteNom) => {
    if (isReadOnly || !hybrideCapacite?.slot) return;
    dispatchCharacter({
      type: 'UPDATE_MULTIPLE',
      payload: { data: { ...(character.data || {}), hybride_capacite: { ...hybrideCapacite, capacite: capaciteNom } } },
      gameData,
    });
    showInAppNotification(`Capacité naturelle échangée contre "${capaciteNom}" (${especeSeconde}) !`, "success");
  };

  const ownSlotLabel = {
    fixe1: data.capacites?.fixe1?.nom,
    fixe2: data.capacites?.fixe2?.nom,
    choix: character.capaciteChoisie,
  };

  const secondSpeciesChoices = secondSpeciesData
    ? [secondSpeciesData.capacites?.fixe1, secondSpeciesData.capacites?.fixe2, ...(secondSpeciesData.capacites?.choix || [])]
        .filter(c => c && c.nom && c.nom !== 'Inconnu')
    : [];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg flex items-start gap-3">
        <Sparkles className="text-amber-600 shrink-0 mt-1" size={20} />
        <div>
          <h3 className="font-serif font-bold text-amber-900">Capacités Naturelles</h3>
          <p className="text-sm text-amber-800">
            Voici les capacités inhérentes à votre nature. Vous devez choisir une 3ème capacité spécifique.
            {isScelle && " (Choix scellé)"}
          </p>
        </div>
      </div>

      <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider mt-6 mb-2">Capacités Innées (Acquises)</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { slot: 'fixe1', cap: data.capacites?.fixe1 },
          { slot: 'fixe2', cap: data.capacites?.fixe2 },
        ].filter(({ cap }) => cap && cap.nom && cap.nom !== 'Inconnu').map(({ slot, cap }) => {
          const isSwapped = hybrideCapacite?.slot === slot && hybrideCapacite?.capacite;
          const displayCap = isSwapped
            ? secondSpeciesChoices.find(c => c.nom === hybrideCapacite.capacite) || cap
            : cap;
          return (
            <div key={`fixe-${slot}`} className="p-4 rounded-xl border-2 border-amber-200 bg-amber-100/50">
              <div className="flex items-center justify-between mb-2">
                <div className="font-bold font-serif text-amber-900 flex items-center gap-2">
                  <Check size={16} className="text-amber-600" />
                  {displayCap.nom}
                </div>
                {isSwapped ? (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-fuchsia-200 text-fuchsia-800 uppercase" title="Échange Hybride">
                    🧬 Hybride — {especeSeconde}
                  </span>
                ) : (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200/50 text-amber-800 uppercase">
                    Fixe
                  </span>
                )}
              </div>
              <p className="text-sm text-amber-800 text-left mt-2 leading-relaxed">
                {displayCap.description || "Aucune description."}
              </p>
            </div>
          );
        })}
      </div>

      <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider mt-6 mb-2">Capacité Optionnelle (À choisir)</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.capacites?.choix?.map((cap, idx) => {
          const isSelected = character.capaciteChoisie === cap.nom;
          const isDisabled = (isReadOnly || isScelle) && !isSelected;
          const isSwapped = hybrideCapacite?.slot === 'choix' && hybrideCapacite?.capacite && isSelected;
          const displayCap = isSwapped
            ? secondSpeciesChoices.find(c => c.nom === hybrideCapacite.capacite) || cap
            : cap;

          return (
            <div key={idx} className="flex flex-col gap-2">
              <button
                disabled={isReadOnly || isScelle}
                onClick={() => handleCapaciteChoice(cap.nom)}
                className={`p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'border-amber-500 bg-amber-50 ring-2 ring-amber-200 ring-offset-2'
                    : isDisabled
                    ? 'border-stone-200 bg-stone-50 opacity-50 cursor-not-allowed'
                    : 'border-stone-200 bg-white hover:border-amber-300 hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className={`font-bold font-serif flex items-center gap-2 ${isSelected ? 'text-amber-900' : 'text-gray-800'}`}>
                    {isSelected && <Check size={16} className="text-amber-600" />}
                    {displayCap.nom}
                  </div>
                  {isSwapped ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-fuchsia-200 text-fuchsia-800 uppercase" title="Échange Hybride">
                      🧬 Hybride — {especeSeconde}
                    </span>
                  ) : isSelected && isScelle && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-200 text-stone-600 uppercase" title="Sceau de Création">
                      🔒 Inné
                    </span>
                  )}
                </div>
                <p className={`text-sm text-left mt-2 leading-relaxed ${isSelected ? 'text-amber-800' : 'text-gray-600'}`}>
                  {displayCap.description || "Aucune description."}
                </p>
              </button>
            </div>
          );
        })}
      </div>

      {isHybride && (
        <div className="mt-8 border-t-2 border-dashed border-fuchsia-200 pt-6">
          <div className="bg-gradient-to-r from-fuchsia-50 to-purple-50 border border-fuchsia-200 p-5 rounded-xl shadow-sm">
            <h4 className="font-serif font-bold text-fuchsia-900 flex items-center gap-2 text-lg">
              <Sparkles size={20} className="text-fuchsia-600" />
              Échange Hybride — Capacité naturelle
            </h4>
            <p className="text-sm text-fuchsia-800 mt-1">
              Choisissez la Capacité naturelle de votre espèce d'origine à remplacer, puis celle de{' '}
              <strong>{especeSeconde || 'votre seconde espèce'}</strong> qui la remplace.
            </p>

            <div className="mt-4">
              <div className="text-xs font-bold text-fuchsia-900 uppercase tracking-wider mb-2">1. Capacité à remplacer</div>
              <div className="flex flex-wrap gap-2">
                {CAPACITE_SLOTS.filter(slot => ownSlotLabel[slot]).map(slot => (
                  <button
                    key={slot}
                    disabled={isReadOnly}
                    onClick={() => handleHybrideSlotChoice(slot)}
                    className={`px-3 py-2 rounded-lg border-2 text-sm font-bold transition-colors ${
                      hybrideCapacite?.slot === slot
                        ? 'border-fuchsia-600 bg-fuchsia-100 text-fuchsia-900'
                        : 'border-stone-200 bg-white text-gray-700 hover:border-fuchsia-300'
                    }`}
                  >
                    {ownSlotLabel[slot]}
                  </button>
                ))}
              </div>
            </div>

            {hybrideCapacite?.slot && (
              <div className="mt-4">
                <div className="text-xs font-bold text-fuchsia-900 uppercase tracking-wider mb-2">
                  2. Capacité de remplacement ({especeSeconde || '…'})
                </div>
                <div className="flex flex-wrap gap-2">
                  {secondSpeciesChoices.map((cap, idx) => (
                    <button
                      key={idx}
                      disabled={isReadOnly}
                      onClick={() => handleHybrideCapaciteChoice(cap.nom)}
                      className={`px-3 py-2 rounded-lg border-2 text-sm font-bold transition-colors ${
                        hybrideCapacite?.capacite === cap.nom
                          ? 'border-fuchsia-600 bg-fuchsia-100 text-fuchsia-900'
                          : 'border-stone-200 bg-white text-gray-700 hover:border-fuchsia-300'
                      }`}
                    >
                      {cap.nom}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Lancer toute la suite de tests pour vérifier l'absence de régression**

Run: `npm test`
Expected: PASS

- [ ] **Step 3: Vérification manuelle**

Avec un personnage ayant Hybride actif (suite à la vérification manuelle de la Task 5) : aller à l'Étape 2 (Capacités), vérifier que la section « Échange Hybride » apparaît, choisir un slot puis une capacité de la seconde espèce, vérifier que le slot affiché change avec le badge « Hybride — origine ». Purger Hybride depuis l'Étape 3 et revenir à l'Étape 2 : la capacité d'origine doit être réaffichée.

Expected: comportement conforme, aucune erreur console.

- [ ] **Step 4: Commit**

```bash
git add src/components/StepCapacites.js
git commit -m "feat(capacites): échange de Capacité naturelle pour l'Hybride"
```

---

## Task 7: `StepPouvoirs.js` — règle Féérie 8 pour l'Hybride

**Files:**
- Modify: `src/components/StepPouvoirs.js:1-19,120-129,251-256`

**Interfaces:**
- Consumes: `computeExteriorPowers`, `deriveEspeceSeconde`, `hasHybrideActive`, `isOwnSpeciesPowerAvailable`, `isSecondSpeciesProfondPowerAvailable` (Task 2).

- [ ] **Step 1: Ajouter l'import**

Dans `src/components/StepPouvoirs.js`, remplacer :

```js
import { isCharacterScelle } from '../utils/lockUtils';
import { getMagicBadges } from '../data/DictionnaireJeu';
import AnomalieFeeriqueWidget from './AnomalieFeeriqueWidget';
```

par :

```js
import { isCharacterScelle } from '../utils/lockUtils';
import { getMagicBadges } from '../data/DictionnaireJeu';
import AnomalieFeeriqueWidget from './AnomalieFeeriqueWidget';
import {
    computeExteriorPowers,
    deriveEspeceSeconde,
    hasHybrideActive,
    isOwnSpeciesPowerAvailable,
    isSecondSpeciesProfondPowerAvailable,
} from '../utils/anomalieChaining';
```

- [ ] **Step 2: Remplacer `getAvailablePowers`**

Remplacer :

```js
    const getAvailablePowers = () => {
        if (!data?.pouvoirs) return [];
        return data.pouvoirs.filter(p => {
            const type = p.type_pouvoir || '';
            // Déblocage progressif selon la Féérie
            if (type.includes('profond')) return currentFeerie >= 7;
            if (type.includes('legendaire') || type.includes('légendaire')) return currentFeerie >= 8;
            return type === 'masque' || type === 'demasque';
        });
    };
```

par :

```js
    const isHybride = hasHybrideActive(character);
    const exteriorPowers = fairyData && character.typeFee
        ? computeExteriorPowers(fairyData, character.typeFee)
        : [];
    const especeSeconde = isHybride ? deriveEspeceSeconde(character, exteriorPowers) : null;

    const getAvailablePowers = () => {
        if (!data?.pouvoirs) return [];
        const ownSpecies = data.pouvoirs.filter(p =>
            isOwnSpeciesPowerAvailable(p.type_pouvoir, currentFeerie, { isHybride })
        );
        if (!isHybride || !especeSeconde) return ownSpecies;

        const secondSpeciesData = fairyData[especeSeconde];
        const secondSpeciesPowers = (secondSpeciesData?.pouvoirs || [])
            .filter(p => isSecondSpeciesProfondPowerAvailable(p.type_pouvoir, currentFeerie))
            .filter(p => !ownSpecies.some(op => op.nom === p.nom))
            .map(p => ({ ...p, origineSeconde: especeSeconde }));

        return [...ownSpecies, ...secondSpeciesPowers];
    };
```

- [ ] **Step 3: Ajouter le badge d'origine seconde espèce dans la grille**

Remplacer :

```jsx
                                    {/* ✨ LE FIX DRY : Affichage dynamique des deux badges magiques ! */}
                                    {getMagicBadges(pouvoir.type_pouvoir).map((badge, idx) => (
                                        <span key={idx} className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shadow-sm border ${badge.color}`}>
                                            {badge.label}
                                        </span>
                                    ))}
```

par :

```jsx
                                    {/* ✨ LE FIX DRY : Affichage dynamique des deux badges magiques ! */}
                                    {getMagicBadges(pouvoir.type_pouvoir).map((badge, idx) => (
                                        <span key={idx} className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shadow-sm border ${badge.color}`}>
                                            {badge.label}
                                        </span>
                                    ))}
                                    {pouvoir.origineSeconde && (
                                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shadow-sm border bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300">
                                            {pouvoir.origineSeconde}
                                        </span>
                                    )}
```

- [ ] **Step 4: Lancer toute la suite de tests pour vérifier l'absence de régression**

Run: `npm test`
Expected: PASS

- [ ] **Step 5: Vérification manuelle**

Avec un personnage Hybride, faire monter la Féérie à 8 (mode évolution) : vérifier que le Pouvoir légendaire de l'espèce d'origine n'apparaît PAS dans la grille, et que les pouvoirs `profond` de la seconde espèce apparaissent avec le badge portant le nom de cette espèce. Vérifier qu'un personnage NON Hybride à Féérie 8 voit toujours son Pouvoir légendaire normalement (pas de régression).

Expected: comportement conforme, aucune erreur console.

- [ ] **Step 6: Commit**

```bash
git add src/components/StepPouvoirs.js
git commit -m "feat(pouvoirs): règle Féérie 8 pour l'Hybride (profond seconde espèce, jamais légendaire)"
```

---

## Task 8: Vérification de bout en bout et exécution complète des tests

**Files:** aucun (vérification uniquement)

- [ ] **Step 1: Lancer toute la suite de tests**

Run: `npm test`
Expected: PASS (0 échec)

- [ ] **Step 2: Parcours complet manuel**

Sur un personnage scellé (évolution) avec suffisamment d'XP :
1. Étape 3 : Anomalie féérique → choisir une espèce → choisir un pouvoir.
2. Débloquer Sang-mêlé → choisir un second pouvoir de la même espèce.
3. Débloquer Hybride → choisir un troisième pouvoir de la même espèce.
4. Étape 2 : effectuer l'échange de Capacité naturelle Hybride.
5. Monter la Féérie jusqu'à 8 (si budget XP suffisant) : vérifier le pouvoir profond de la seconde espèce au lieu du légendaire.
6. Purger dans l'ordre Hybride → Sang-mêlé → Anomalie féérique : vérifier le remboursement XP à chaque étape et la réapparition de la Capacité naturelle d'origine après la purge d'Hybride.
7. Recharger la fiche (`F5`) après chaque étape clé pour vérifier la persistance en base.

Expected: tous les points ci-dessus se comportent comme décrit, sans erreur console, et l'état persiste après rechargement.

- [ ] **Step 3: Commit final (si des ajustements ont été faits pendant la vérification)**

```bash
git add -A
git commit -m "fix(anomalie): ajustements suite à la vérification de bout en bout"
```

(Ne committer que s'il y a effectivement des changements — sinon, passer directement à l'ouverture de la Pull Request.)
