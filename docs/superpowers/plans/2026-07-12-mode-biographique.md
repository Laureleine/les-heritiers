# Mode Biographique — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter un troisième mode "Biographique" au générateur de PNJ, produisant un historique en 9 étapes (origines, culture, statut social, famille, naissance, événements, parents, jeunesse) suivi de la génération de personnalité classique.

**Architecture:** Deux nouveaux fichiers (`pnjTablesBio.js` et `pnjGeneratorBio.js`) encapsulent la logique biographique. `pnjGenerator.js` délègue au pipeline bio quand `mode === 'biographique'`, puis enchaîne la génération de personnalité existante. L'UI dans `PnjGenerateur.jsx` ajoute un bouton de mode et un bloc accordéon `SectionHistorique`.

**Tech Stack:** React 18, Vitest (tests : `npm test`), imports ES modules, Tailwind CSS.

## Global Constraints

- Jamais de référence à "Central Casting" dans le code, les noms de variables, les labels UI, ou les commentaires.
- Zéro appel réseau dans les nouveaux fichiers (tout est local).
- Pas de nouvelle table Supabase : l'historique est stocké dans le champ `data` JSON existant de `figures`.
- Tests avec `npm test` (vitest run). Jamais `npx jest` ni `react-scripts test`.
- Nommage des fonctions utilitaires de tirage : `tirage()` et `tiragePondere()` depuis `pnjTables.js` — ne pas dupliquer.
- En mode biographique, `sexe` et `nationalite` sont **toujours dérivés** du pipeline — jamais fixés manuellement.

---

## Cartographie des fichiers

| Fichier | Action | Responsabilité |
|---|---|---|
| `src/data/pnjTablesBio.js` | **Créer** | Tables et fonctions de résolution biographiques |
| `src/utils/pnjGeneratorBio.js` | **Créer** | Pipeline `genererHistorique()` (9 étapes) |
| `src/utils/pnjGenerator.js` | **Modifier** | Branche biographique dans `genererPnj()`, `rerollChamp()`, `pnjVersPayloadFigure()` |
| `src/components/PnjGenerateur.jsx` | **Modifier** | Bouton mode + `SectionHistorique` |
| `src/data/__tests__/pnjTablesBio.test.js` | **Créer** | Tests des tables et fonctions de résolution |
| `src/utils/__tests__/pnjGeneratorBio.test.js` | **Créer** | Tests du pipeline `genererHistorique()` |
| `src/utils/__tests__/pnjGenerator.biographique.test.js` | **Créer** | Tests d'intégration mode biographique |

---

## Task 1 : Tables biographiques

**Files:**
- Create: `src/data/pnjTablesBio.js`
- Test: `src/data/__tests__/pnjTablesBio.test.js`

**Interfaces:**
- Produit : `DEMOGRAPHIE_PARIS_1899`, `NATIONALITES_EXOTIQUES_1899`, `bonusNiveauTech(roll)`, `NIVEAUX_TECH`, `techLevelFromMod(tekMod)`, `typeCultureFromScore(score)`, `TABLE_TYPES_CULTURE`, `statutSocialFromScore(score)`, `TABLE_STATUT_SOCIAL`, `TITRES_NOBLESSE`, `configFoyerFromDe(de20)`, `TABLE_CONFIGURATION_FOYER`, `LIEUX_NAISSANCE_INHABITUELS`, `evenementNaissanceFromScore(score)`, `TABLE_EVENEMENTS_NAISSANCE`, `configParentsFromDe(de20)`, `TRAITS_NOTABLES_PARENTS`, `chronologieJeunesseFromScore(score)`, `TABLE_CHRONOLOGIE_JEUNESSE`, `TABLE_EVENEMENTS_SPECIAL_JEUNESSE`

- [ ] **Étape 1 : Écrire le test**

```js
// src/data/__tests__/pnjTablesBio.test.js
import {
  bonusNiveauTech, techLevelFromMod,
  typeCultureFromScore, statutSocialFromScore,
  configFoyerFromDe, evenementNaissanceFromScore,
  configParentsFromDe, chronologieJeunesseFromScore,
  DEMOGRAPHIE_PARIS_1899, NATIONALITES_EXOTIQUES_1899,
  NIVEAUX_TECH, TITRES_NOBLESSE, TRAITS_NOTABLES_PARENTS,
  TABLE_EVENEMENTS_SPECIAL_JEUNESSE,
} from '../pnjTablesBio';

describe('bonusNiveauTech', () => {
  it('retourne 0 pour un jet ≤ 30', () => expect(bonusNiveauTech(15)).toBe(0));
  it('retourne 1 pour un jet de 31', () => expect(bonusNiveauTech(31)).toBe(1));
  it('retourne 4 pour un jet de 130', () => expect(bonusNiveauTech(130)).toBe(4));
  it('retourne 7 pour un jet > 210', () => expect(bonusNiveauTech(250)).toBe(7));
});

describe('techLevelFromMod', () => {
  it('retourne "stone" pour TekMod ≤ 1', () => {
    expect(techLevelFromMod(0)).toBe('stone');
    expect(techLevelFromMod(1)).toBe('stone');
  });
  it('retourne "industrial" pour TekMod 6', () => expect(techLevelFromMod(6)).toBe('industrial'));
  it('retourne "engineering" pour TekMod ≥ 7', () => {
    expect(techLevelFromMod(7)).toBe('engineering');
    expect(techLevelFromMod(10)).toBe('engineering');
  });
});

describe('typeCultureFromScore', () => {
  it('retourne "developing" pour score 50', () => expect(typeCultureFromScore(50).id).toBe('developing'));
  it('retourne "dynamic" pour score 80', () => expect(typeCultureFromScore(80).id).toBe('dynamic'));
  it('retourne "decadent" pour score 200', () => expect(typeCultureFromScore(200).id).toBe('decadent'));
  it('chaque entrée a cuMod, survieTotal, edDice()', () => {
    const e = typeCultureFromScore(50);
    expect(typeof e.cuMod).toBe('number');
    expect(typeof e.survieTotal).toBe('number');
    expect(typeof e.edDice()).toBe('number');
  });
});

describe('statutSocialFromScore', () => {
  it('retourne "comfortable" pour score 40', () => expect(statutSocialFromScore(40).id).toBe('comfortable'));
  it('retourne "nobility" pour score 99', () => expect(statutSocialFromScore(99).id).toBe('nobility'));
  it('retourne "destitute" pour score 5', () => expect(statutSocialFromScore(5).id).toBe('destitute'));
});

describe('configFoyerFromDe', () => {
  it('retourne une string non vide pour tout d20', () => {
    for (let i = 1; i <= 20; i++) {
      expect(typeof configFoyerFromDe(i).resoudre()).toBe('string');
    }
  });
  it('entrée 17 a flagRue', () => expect(configFoyerFromDe(17).flagRue).toBe(true));
  it('entrée 18 a flagOrphelinat', () => expect(configFoyerFromDe(18).flagOrphelinat).toBe(true));
});

describe('evenementNaissanceFromScore', () => {
  it('score 10 a moneyModMult', () => expect(evenementNaissanceFromScore(10).moneyModMult).toBe(2));
  it('score 48 a flagCurse', () => expect(evenementNaissanceFromScore(48).flagCurse).toBe(true));
  it('score 82 a pool (tableau)', () => expect(Array.isArray(evenementNaissanceFromScore(82).pool)).toBe(true));
  it('score > 120 a pool (tableau)', () => expect(Array.isArray(evenementNaissanceFromScore(150).pool)).toBe(true));
});

describe('configParentsFromDe', () => {
  it('retourne une string label pour tout d20', () => {
    for (let i = 1; i <= 20; i++) {
      expect(typeof configParentsFromDe(i).label).toBe('string');
    }
  });
});

describe('chronologieJeunesseFromScore', () => {
  it('score 5 a fn drame_ou_miracle', () => expect(chronologieJeunesseFromScore(5).fn).toBe('drame_ou_miracle'));
  it('score 8 a fn table_speciale', () => expect(chronologieJeunesseFromScore(8).fn).toBe('table_speciale'));
  it('score 20 a texte non vide', () => expect(chronologieJeunesseFromScore(20).texte.length).toBeGreaterThan(0));
});

describe('DEMOGRAPHIE_PARIS_1899', () => {
  it('a 8 entrées', () => expect(DEMOGRAPHIE_PARIS_1899).toHaveLength(8));
  it('Française a poids 80', () => {
    const fr = DEMOGRAPHIE_PARIS_1899.find(n => n.id === 'francaise');
    expect(fr.weight).toBe(80);
    expect(fr.TekMod).toBe(3);
  });
  it('chaque entrée a weight et TekMod', () => {
    DEMOGRAPHIE_PARIS_1899.forEach(n => {
      expect(typeof n.weight).toBe('number');
      expect(typeof n.TekMod).toBe('number');
    });
  });
});

describe('NATIONALITES_EXOTIQUES_1899', () => {
  it('a au moins 10 entrées', () => expect(NATIONALITES_EXOTIQUES_1899.length).toBeGreaterThanOrEqual(10));
  it('chaque entrée a id, label, TekMod, langue', () => {
    NATIONALITES_EXOTIQUES_1899.forEach(n => {
      expect(n).toHaveProperty('id');
      expect(n).toHaveProperty('label');
      expect(typeof n.TekMod).toBe('number');
      expect(typeof n.langue).toBe('string');
    });
  });
});

describe('NIVEAUX_TECH', () => {
  it('contient les 7 niveaux attendus', () => {
    const ids = ['stone','bronze','iron','medieval','renaissance','industrial','engineering'];
    ids.forEach(id => expect(NIVEAUX_TECH).toHaveProperty(id));
  });
  it('engineering a les plus hauts pointsDeBase', () => {
    expect(NIVEAUX_TECH.engineering.pointsDeBase).toBeGreaterThan(NIVEAUX_TECH.stone.pointsDeBase);
  });
});

describe('TABLE_EVENEMENTS_SPECIAL_JEUNESSE', () => {
  it('a les clés enfance et adolescence', () => {
    expect(Array.isArray(TABLE_EVENEMENTS_SPECIAL_JEUNESSE.enfance)).toBe(true);
    expect(Array.isArray(TABLE_EVENEMENTS_SPECIAL_JEUNESSE.adolescence)).toBe(true);
  });
});
```

- [ ] **Étape 2 : Lancer le test — vérifier qu'il échoue**

```
npm test -- --reporter=verbose src/data/__tests__/pnjTablesBio.test.js
```
Attendu : FAIL (module introuvable)

- [ ] **Étape 3 : Créer `src/data/pnjTablesBio.js`**

```js
// src/data/pnjTablesBio.js

function d(n) { return Math.floor(Math.random() * n) + 1; }

// ─── DÉMOGRAPHIE ─────────────────────────────────────────────────────────────

export const DEMOGRAPHIE_PARIS_1899 = [
  { id: 'francaise',        label: 'Française',        weight: 80, TekMod: 3, langue: 'Français' },
  { id: 'italienne',        label: 'Italienne',        weight: 5,  TekMod: 3, langue: 'Italien' },
  { id: 'britannique',      label: 'Britannique',      weight: 4,  TekMod: 4, langue: 'Anglais' },
  { id: 'russe',            label: 'Russe',            weight: 3,  TekMod: 2, langue: 'Russe' },
  { id: 'austro_hongroise', label: 'Austro-Hongroise', weight: 3,  TekMod: 3, langue: 'Allemand' },
  { id: 'allemande',        label: 'Allemande',        weight: 2,  TekMod: 4, langue: 'Allemand' },
  { id: 'americaine',       label: 'Américaine',       weight: 2,  TekMod: 4, langue: 'Anglais' },
  { id: 'autre',            label: 'Autre',            weight: 1,  TekMod: 2, langue: null },
];

export const NATIONALITES_EXOTIQUES_1899 = [
  { id: 'algerienne',  label: 'Algérienne',  TekMod: 1, langue: 'Arabe' },
  { id: 'belge',       label: 'Belge',       TekMod: 3, langue: 'Français' },
  { id: 'suisse',      label: 'Suisse',      TekMod: 4, langue: 'Français' },
  { id: 'espagnole',   label: 'Espagnole',   TekMod: 2, langue: 'Espagnol' },
  { id: 'portugaise',  label: 'Portugaise',  TekMod: 2, langue: 'Portugais' },
  { id: 'polonaise',   label: 'Polonaise',   TekMod: 2, langue: 'Polonais' },
  { id: 'grecque',     label: 'Grecque',     TekMod: 2, langue: 'Grec' },
  { id: 'ottomane',    label: 'Ottomane',    TekMod: 2, langue: 'Turc' },
  { id: 'japonaise',   label: 'Japonaise',   TekMod: 3, langue: 'Japonais' },
  { id: 'chinoise',    label: 'Chinoise',    TekMod: 2, langue: 'Mandarin' },
  { id: 'indienne',    label: 'Indienne',    TekMod: 2, langue: 'Hindi' },
  { id: 'marocaine',   label: 'Marocaine',   TekMod: 1, langue: 'Arabe' },
  { id: 'bresilienne', label: 'Brésilienne', TekMod: 2, langue: 'Portugais' },
  { id: 'roumaine',    label: 'Roumaine',    TekMod: 2, langue: 'Roumain' },
  { id: 'scandinave',  label: 'Scandinave',  TekMod: 3, langue: 'Suédois' },
];

// ─── TABLE 102A : BONUS TECH ──────────────────────────────────────────────────

export function bonusNiveauTech(roll) {
  if (roll <= 30)  return 0;
  if (roll <= 50)  return 1;
  if (roll <= 65)  return 2;
  if (roll <= 80)  return 3;
  if (roll <= 130) return 4;
  if (roll <= 198) return 5;
  if (roll <= 210) return 6;
  return 7;
}

// ─── TABLE 102B : TECH LEVEL ──────────────────────────────────────────────────

export const NIVEAUX_TECH = {
  stone:       { label: 'Âge de Pierre',       pointsDeBase: 4,  literacy: 5  },
  bronze:      { label: 'Âge du Bronze',       pointsDeBase: 6,  literacy: 20 },
  iron:        { label: 'Âge du Fer',          pointsDeBase: 8,  literacy: 30 },
  medieval:    { label: 'Moyen Âge',           pointsDeBase: 4,  literacy: 10 },
  renaissance: { label: 'Renaissance',         pointsDeBase: 10, literacy: 35 },
  industrial:  { label: 'Ère industrielle',    pointsDeBase: 10, literacy: 40 },
  engineering: { label: "Ère de l'ingénierie", pointsDeBase: 12, literacy: 60 },
};

export function techLevelFromMod(tekMod) {
  if (tekMod <= 1) return 'stone';
  if (tekMod === 2) return 'bronze';
  if (tekMod === 3) return 'iron';
  if (tekMod === 4) return 'medieval';
  if (tekMod === 5) return 'renaissance';
  if (tekMod === 6) return 'industrial';
  return 'engineering';
}

// ─── TABLE 102C : TYPES DE CULTURE ────────────────────────────────────────────

export const TABLE_TYPES_CULTURE = [
  { max: 5,        id: 'degenerate',    label: 'Dégénérée',        cuMod: 0,  survieTotal: 6, edDice: () => d(4) },
  { max: 12,       id: 'primitive',     label: 'Primitive',        cuMod: 0,  survieTotal: 7, edDice: () => d(4) },
  { max: 15,       id: 'retrogressive', label: 'Rétrograde',       cuMod: 2,  survieTotal: 6, edDice: () => d(4) },
  { max: 20,       id: 'nomadic',       label: 'Nomade',           cuMod: 6,  survieTotal: 7, edDice: () => d(4) + d(4) },
  { max: 30,       id: 'barbaric',      label: 'Barbare',          cuMod: 2,  survieTotal: 6, edDice: () => d(4) },
  { max: 60,       id: 'developing',    label: 'En développement', cuMod: 6,  survieTotal: 6, edDice: () => d(4) + d(4) + d(4) },
  { max: 101,      id: 'dynamic',       label: 'Dynamique',        cuMod: 10, survieTotal: 7, edDice: () => d(4) + d(4) + d(4) + d(4) },
  { max: 105,      id: 'stagnant',      label: 'Stagnante',        cuMod: 4,  survieTotal: 4, edDice: () => d(6) },
  { max: Infinity, id: 'decadent',      label: 'Décadente',        cuMod: 8,  survieTotal: 5, edDice: () => d(6) + d(6) },
];

export function typeCultureFromScore(score) {
  return TABLE_TYPES_CULTURE.find(r => score <= r.max) ?? TABLE_TYPES_CULTURE[TABLE_TYPES_CULTURE.length - 1];
}

// ─── TABLE 103 : STATUT SOCIAL ────────────────────────────────────────────────

export const TABLE_STATUT_SOCIAL = [
  { max: 5,        id: 'destitute',  label: 'Misérable',  solMod: 0, edMod: -10, moneyMod: 0.1 },
  { max: 15,       id: 'poor',       label: 'Pauvre',     solMod: 2, edMod: -4,  moneyMod: 0.5 },
  { max: 70,       id: 'comfortable',label: 'Confortable',solMod: 4, edMod: 0,   moneyMod: 1.0 },
  { max: 90,       id: 'well_to_do', label: 'Aisé',       solMod: 5, edMod: 4,   moneyMod: 1.5 },
  { max: 98,       id: 'wealthy',    label: 'Fortune',    solMod: 7, edMod: 8,   moneyMod: 3.0 },
  { max: Infinity, id: 'nobility',   label: 'Noblesse',   solMod: 5, edMod: 6,   moneyMod: 1.5 },
];

export function statutSocialFromScore(score) {
  return TABLE_STATUT_SOCIAL.find(r => score <= r.max) ?? TABLE_STATUT_SOCIAL[TABLE_STATUT_SOCIAL.length - 1];
}

export const TITRES_NOBLESSE = [
  { labelM: 'Duc',       labelF: 'Duchesse',    TiMod: 30 },
  { labelM: 'Marquis',   labelF: 'Marquise',    TiMod: 20 },
  { labelM: 'Comte',     labelF: 'Comtesse',    TiMod: 15 },
  { labelM: 'Vicomte',   labelF: 'Vicomtesse',  TiMod: 10 },
  { labelM: 'Baron',     labelF: 'Baronne',     TiMod: 5  },
  { labelM: 'Chevalier', labelF: 'Dame',        TiMod: 0  },
];

// ─── TABLE 104B : CONFIGURATION DU FOYER ─────────────────────────────────────

export const TABLE_CONFIGURATION_FOYER = [
  { max: 7,        resoudre: () => 'Élevé par ses deux parents' },
  { max: 10,       resoudre: () => `Élevé par un parent unique (${Math.random() < 0.5 ? 'la mère' : 'le père'})` },
  { max: 11,       resoudre: () => 'Élevé dans une crèche communautaire' },
  { max: 12,       resoudre: () => "Élevé dans un établissement d'État" },
  { max: 13,       resoudre: () => "Élevé par un oncle et une tante" },
  { max: 14,       resoudre: () => `Élevé par la fratrie (${Math.random() < 0.5 ? 'un frère aîné' : 'une sœur aînée'})` },
  { max: 15,       resoudre: () => 'Élevé par ses grands-parents' },
  { max: 16,       resoudre: () => 'Élevé par un tuteur légal' },
  { max: 17,       resoudre: () => 'Aucun proche connu — livré à lui-même dans la rue', flagRue: true },
  { max: 18,       resoudre: () => 'Élevé dans un orphelinat public ou religieux', flagOrphelinat: true },
  { max: Infinity, resoudre: () => 'Famille élargie ou tuteurs multiples' },
];

export function configFoyerFromDe(de20) {
  return TABLE_CONFIGURATION_FOYER.find(r => de20 <= r.max) ?? TABLE_CONFIGURATION_FOYER[TABLE_CONFIGURATION_FOYER.length - 1];
}

// ─── TABLE 105B : LIEUX DE NAISSANCE INHABITUELS ──────────────────────────────

export const LIEUX_NAISSANCE_INHABITUELS = [
  { label: 'Dans une cellule de la Sûreté',                              biMod: 10 },
  { label: "Dans le laboratoire secret d'un savant excentrique",         biMod: 20 },
  { label: "Dans l'enceinte d'une église honorable",                     biMod: 15 },
  { label: "Dans les bureaux d'une grande manufacture",                  biMod: 5  },
  { label: "Sur les pavés d'une ruelle sombre de Paris",                 biMod: 5  },
  { label: "Dans les salons discrets d'une maison close",                biMod: 5  },
  { label: "Dans un palais d'apparat ou une ambassade",                  biMod: 5  },
  { label: "Derrière les rideaux d'un théâtre de boulevard",             biMod: 10 },
  { label: "Dans un lieu d'intense activité éthérique réputée",          biMod: 10 },
  { label: "Dans l'arrière-salle d'un cabaret montmartrois",             biMod: 5  },
  { label: "Au fond des galeries des égouts de Paris",                   biMod: 10 },
  { label: "Dans le repaire clandestin d'une bande de malfrats",         biMod: 5  },
  { label: "En présence fortuite d'une créature indicible",              biMod: 15 },
  { label: "Dans le sanctuaire secret d'un culte interdit",              biMod: 20 },
];

// ─── TABLE 106 : ÉVÉNEMENTS DE NAISSANCE ─────────────────────────────────────

export const TABLE_EVENEMENTS_NAISSANCE = [
  { max: 4,        texte: "Le père biologique est convaincu que l'enfant n'est pas le sien." },
  { max: 7,        texte: "Phénomène météorologique impossible pour la saison le jour de la naissance." },
  { max: 8,        texte: "Éclipse totale ou assombrissement mystérieux au moment exact de l'accouchement." },
  { max: 10,       texte: "Un fonds anonyme a été ouvert pour l'enfant — l'argent de départ est doublé.", moneyModMult: 2 },
  { max: 16,       texte: "Une personnalité notable meurt au moment de la naissance. Certains murmurent une réincarnation." },
  { max: 20,       texte: "La naissance fait grand bruit dans la presse locale." },
  { max: 21,       texte: "Accouchement supervisé par un chirurgien de génie. (+5 en Chance)", bonusLuck: 5 },
  { max: 23,       texte: "La mère biologique meurt pendant l'accouchement." },
  { max: 28,       texte: "Complications graves — l'enfant frôle la mort mais survit. (+1 Constitution)", bonusCon: 1 },
  { max: 29,       texte: "Mort tragique d'un jumeau pendant le travail." },
  { max: 34,       texte: "Naissance d'un jumeau identique, immédiatement séparé pour des motifs obscurs." },
  { max: 48,       texte: "Un occultiste déclare l'enfant frappé d'une ancienne malédiction familiale.", flagCurse: true },
  { max: 49,       texte: "Secret de naissance majeur — réservé au MJ.", flagGmSecret: true },
  { max: 62,       texte: "Aucun registre officiel n'a consigné la naissance. Le PNJ n'existe pas administrativement." },
  { max: 81,       texte: "Né avec une marque de naissance mystérieuse évoquant un symbole occulte." },
  { max: 82,       pool: [
    "Empreintes de pas qui ne coïncident pas avec la direction marchée.",
    "Peau qui reflète la lumière à l'envers selon l'inclinaison du soleil.",
    "Ombre portée qui ne correspond jamais tout à fait à la silhouette réelle.",
    "Yeux de couleurs changeantes selon ce qu'ils fixent.",
  ]},
  { max: 120,      texte: "Un mystérieux étranger dépose un présent de grande valeur dans le berceau avant de disparaître." },
  { max: Infinity, pool: [
    "Avait un jumeau à la naissance, mais celui-ci s'est enfui par la fenêtre dès les premières minutes de vie.",
    "Les animaux à un kilomètre à la ronde ont péri d'effroi le jour de sa naissance.",
    "Des spectres ont entouré le berceau le soir de l'accouchement.",
    "Seul survivant inexpliqué d'un désastre ayant rasé son lieu de naissance.",
    "Reçoit une lettre anonyme prédisant un drame à chacun de ses anniversaires.",
  ]},
];

export function evenementNaissanceFromScore(score) {
  return TABLE_EVENEMENTS_NAISSANCE.find(r => score <= r.max) ?? TABLE_EVENEMENTS_NAISSANCE[TABLE_EVENEMENTS_NAISSANCE.length - 1];
}

// ─── TABLE 107 : PARENTS ──────────────────────────────────────────────────────

export const TABLE_CONFIG_PARENTS = [
  { max: 12,       label: 'Le chef de famille possède une seule occupation à plein temps.' },
  { max: 14,       label: 'Le chef de famille cumule un emploi principal et un emploi secondaire.' },
  { max: 16,       label: "Le chef de famille ne travaille pas — c'est l'autre parent qui subvient aux besoins." },
  { max: 18,       label: 'Les deux parents travaillent à plein temps.' },
  { max: 19,       label: "Le chef de famille était un aventurier ou franc-tireur de l'ombre." },
  { max: Infinity, label: "Pas d'occupation apparente — l'argent semble mystérieusement disponible." },
];

export function configParentsFromDe(de20) {
  return TABLE_CONFIG_PARENTS.find(r => de20 <= r.max) ?? TABLE_CONFIG_PARENTS[TABLE_CONFIG_PARENTS.length - 1];
}

export const TRAITS_NOTABLES_PARENTS = [
  "Marqué par un trait de tempérament extrême ou une excentricité notable.",
  "A lui-même connu une naissance entourée de mystère.",
  "Voue son existence à une collection ou un passe-temps dévorant.",
  "Détient un artefact ou un héritage ancien jalousement gardé.",
  "A survécu autrefois à un événement métaphysique inexpliqué.",
  "Frappé par une névrose ou une obsession psychologique lourde.",
  "Dissimule une double identité dans les salons de Paris.",
  "Rend des comptes en secret à un puissant commanditaire clandestin.",
  "Vétéran des campagnes coloniales ou de la guerre de 1870.",
  "Poursuivi par la rancune d'un ennemi mortel.",
];

// ─── TABLE 208 : CHRONOLOGIE DE LA JEUNESSE ───────────────────────────────────

export const TABLE_CHRONOLOGIE_JEUNESSE = [
  { max: 2,        bracket: 'R', texte: "Conflit politique impactant le foyer — la famille s'implique dans des soulèvements parisiens." },
  { max: 3,        bracket: 'L', texte: "Trouve un objet étrange ou une relique oubliée dans des ruines de la capitale." },
  { max: 4,        bracket: 'D', texte: "Manque l'école de façon répétée. Perte d'opportunités intellectuelles.", penaliteEd: 2 },
  { max: 5,        bracket: 'D', texte: "Glisse vers le milieu criminel parisien." },
  { max: 7,        bracket: null, fn: 'drame_ou_miracle' },
  { max: 8,        bracket: 'N', fn: 'table_speciale' },
  { max: 9,        bracket: 'N', texte: "Entre en apprentissage précoce — apprend le métier de ses tuteurs." },
  { max: 10,       bracket: 'R', texte: "Fugue du domicile familial, vit d'expédients pendant plusieurs mois." },
  { max: 11,       bracket: 'R', texte: "Rencontre ou expérience mystique lors d'une veillée ésotérique clandestine." },
  { max: 13,       bracket: 'L', texte: "Dynamique de foyer stricte mais aimante — les tuteurs soutiennent ses ambitions." },
  { max: 15,       bracket: 'L', texte: "Reçoit une dotation financière anticipée (+25% argent de départ)." },
  { max: 18,       bracket: 'R', texte: "Bouleversement économique — la famille déménage et change de quartier à Paris." },
  { max: Infinity, bracket: 'L', texte: "Éducation mondaine — fréquente les salons littéraires et scientifiques de la rive gauche." },
];

export function chronologieJeunesseFromScore(score) {
  return TABLE_CHRONOLOGIE_JEUNESSE.find(r => score <= r.max) ?? TABLE_CHRONOLOGIE_JEUNESSE[TABLE_CHRONOLOGIE_JEUNESSE.length - 1];
}

export const TABLE_EVENEMENTS_SPECIAL_JEUNESSE = {
  enfance: [
    "Développe un attachement maladif envers une vieille relique d'enfance qu'il ne quitte jamais.",
    "Amitié fusionnelle avec un animal de gouttière parisien qui semble le guider.",
    "Témoin direct d'un incident mystérieux lié aux forces secrètes de l'univers.",
  ],
  adolescence: [
    "Décroche une bourse d'excellence académique grâce à des dispositions mémorielles précoces.",
    "S'éprend d'un amour de jeunesse secret qui influencera sa philosophie future.",
    "Se fait embrigader temporairement dans un club politique clandestin ou une faction d'étudiants radicaux.",
  ],
};
```

- [ ] **Étape 4 : Lancer le test — vérifier qu'il passe**

```
npm test -- --reporter=verbose src/data/__tests__/pnjTablesBio.test.js
```
Attendu : PASS (tous les tests verts)

- [ ] **Étape 5 : Commit**

```bash
git add src/data/pnjTablesBio.js src/data/__tests__/pnjTablesBio.test.js
git commit -m "feat(pnj): tables biographiques (démographie, culture, statut, naissance, jeunesse)"
```

---

## Task 2 : Pipeline biographique

**Files:**
- Create: `src/utils/pnjGeneratorBio.js`
- Test: `src/utils/__tests__/pnjGeneratorBio.test.js`

**Interfaces:**
- Consomme : `DEMOGRAPHIE_PARIS_1899`, `NATIONALITES_EXOTIQUES_1899`, `bonusNiveauTech`, `NIVEAUX_TECH`, `techLevelFromMod`, `typeCultureFromScore`, `statutSocialFromScore`, `TITRES_NOBLESSE`, `configFoyerFromDe`, `LIEUX_NAISSANCE_INHABITUELS`, `evenementNaissanceFromScore`, `configParentsFromDe`, `TRAITS_NOTABLES_PARENTS`, `chronologieJeunesseFromScore`, `TABLE_EVENEMENTS_SPECIAL_JEUNESSE` (de `pnjTablesBio.js`) + `tirage`, `tiragePondere`, `NOMS_PAR_NATIONALITE` (de `pnjTables.js`)
- Produit : `genererHistorique()` → `{ sexeId: string, nationaliteId: string, historique: Historique }`

Structure `Historique` :
```
{
  origines:  { nationalite, langue, maitriseFrancais, languesParlees, raisonPresence, estImmigre },
  formation: { techLevel, culture, estAlphabete, educationPoints, survie },
  milieu:    { statutSocial, titreNoble, legitime, structureFoyer, nombreFreresSoeurs, rangNaissance },
  naissance: { lieuPrecis, evenements },
  parents:   { configurationMetier, faitsNotables },
  jeunesse:  { enfance, adolescence },
  flags:     { aCurse, gmSecret },
}
```

- [ ] **Étape 1 : Écrire le test**

```js
// src/utils/__tests__/pnjGeneratorBio.test.js
import { genererHistorique } from '../pnjGeneratorBio';

describe('genererHistorique', () => {
  it('retourne { sexeId, nationaliteId, historique }', () => {
    const result = genererHistorique();
    expect(result).toHaveProperty('sexeId');
    expect(result).toHaveProperty('nationaliteId');
    expect(result).toHaveProperty('historique');
  });

  it('sexeId est masculin ou feminin', () => {
    for (let i = 0; i < 20; i++) {
      expect(['masculin', 'feminin']).toContain(genererHistorique().sexeId);
    }
  });

  it('historique contient les 7 sections', () => {
    const { historique } = genererHistorique();
    ['origines', 'formation', 'milieu', 'naissance', 'parents', 'jeunesse', 'flags'].forEach(k =>
      expect(historique).toHaveProperty(k)
    );
  });

  it('origines.nationalite est une chaîne non vide', () => {
    const { historique } = genererHistorique();
    expect(typeof historique.origines.nationalite).toBe('string');
    expect(historique.origines.nationalite.length).toBeGreaterThan(0);
  });

  it('formation.techLevel est une chaîne non vide', () => {
    const { historique } = genererHistorique();
    expect(typeof historique.formation.techLevel).toBe('string');
    expect(historique.formation.techLevel.length).toBeGreaterThan(0);
  });

  it('naissance.evenements est un tableau', () => {
    const { historique } = genererHistorique();
    expect(Array.isArray(historique.naissance.evenements)).toBe(true);
  });

  it('jeunesse.enfance et adolescence sont des tableaux', () => {
    const { historique } = genererHistorique();
    expect(Array.isArray(historique.jeunesse.enfance)).toBe(true);
    expect(Array.isArray(historique.jeunesse.adolescence)).toBe(true);
  });

  it('flags est un objet avec aCurse et gmSecret', () => {
    const { historique } = genererHistorique();
    expect(typeof historique.flags.aCurse).toBe('boolean');
    expect(typeof historique.flags.gmSecret).toBe('boolean');
  });

  it('génère des PNJ Français dans ~80% des cas (tolérance ±20%)', () => {
    const results = Array.from({ length: 100 }, () => genererHistorique());
    const frCount = results.filter(r => r.nationaliteId === 'francaise').length;
    expect(frCount).toBeGreaterThan(50);
    expect(frCount).toBeLessThan(98);
  });

  it('milieu.structureFoyer est une chaîne non vide', () => {
    const { historique } = genererHistorique();
    expect(typeof historique.milieu.structureFoyer).toBe('string');
    expect(historique.milieu.structureFoyer.length).toBeGreaterThan(0);
  });
});
```

- [ ] **Étape 2 : Lancer le test — vérifier qu'il échoue**

```
npm test -- --reporter=verbose src/utils/__tests__/pnjGeneratorBio.test.js
```
Attendu : FAIL (module introuvable)

- [ ] **Étape 3 : Créer `src/utils/pnjGeneratorBio.js`**

```js
// src/utils/pnjGeneratorBio.js
import {
  DEMOGRAPHIE_PARIS_1899, NATIONALITES_EXOTIQUES_1899,
  bonusNiveauTech, NIVEAUX_TECH, techLevelFromMod,
  typeCultureFromScore, statutSocialFromScore, TITRES_NOBLESSE,
  configFoyerFromDe, LIEUX_NAISSANCE_INHABITUELS,
  evenementNaissanceFromScore,
  configParentsFromDe, TRAITS_NOTABLES_PARENTS,
  chronologieJeunesseFromScore, TABLE_EVENEMENTS_SPECIAL_JEUNESSE,
} from '../data/pnjTablesBio';
import { tirage, tiragePondere, NOMS_PAR_NATIONALITE } from '../data/pnjTables';

const ANNEE_JEU = 99;
const BONUS_GENRE_HORREUR = 5;  // Les Héritiers est un univers de genre horreur/merveilleux
const BONUS_NAISSANCE_HORREUR = 20;

function d(n) { return Math.floor(Math.random() * n) + 1; }

// ─── ÉTAPE 1 : ORIGINES ───────────────────────────────────────────────────────

function _resolveOrigines(state) {
  state.sexeId = Math.random() < 0.5 ? 'masculin' : 'feminin';

  const categorie = tiragePondere(DEMOGRAPHIE_PARIS_1899);
  state.nationalite = categorie.id === 'autre'
    ? tirage(NATIONALITES_EXOTIQUES_1899)
    : categorie;

  state.modificateurs.TekMod = state.nationalite.TekMod ?? 3;
  state.flags.estImmigre = state.nationalite.id !== 'francaise';

  if (!state.flags.estImmigre) {
    state.langues = ['Français'];
    state.maitriseFrancais = 'natif';
    state.raisonPresence = null;
  } else {
    state.langues = [state.nationalite.langue].filter(Boolean);
    state.maitriseFrancais = 'en_attente_evaluation';
    const poolRaisons = NOMS_PAR_NATIONALITE[state.nationalite.id]?.raisonsPresence;
    state.raisonPresence = poolRaisons
      ? tirage(poolRaisons)
      : "Visiteur pour l'Exposition Universelle de 1900";
  }
  return state;
}

// ─── ÉTAPE 2 : CULTURE & TECH LEVEL ──────────────────────────────────────────

function _resolveCulture(state) {
  const rollTech = d(100) + ANNEE_JEU;
  state.modificateurs.TekMod += bonusNiveauTech(rollTech);
  const techId = techLevelFromMod(state.modificateurs.TekMod);
  const tech = NIVEAUX_TECH[techId];
  state.techLevelId = techId;
  state.education.pointsDeBase = tech.pointsDeBase;
  state.literacyBase = tech.literacy;

  const rollCulture = d(100) + state.modificateurs.TekMod;
  const culture = typeCultureFromScore(rollCulture);
  state.cultureId = culture.id;
  state.cultureLabel = culture.label;
  state.modificateurs.CuMod = culture.cuMod;
  state.education.pointsBonus = culture.edDice();
  state.education.totalPoints = state.education.pointsDeBase + state.education.pointsBonus;

  const total = culture.survieTotal;
  if (state.flags.estImmigre && ['primitive', 'nomadic'].includes(culture.id)) {
    state.competences.survieWilderness = Math.floor(total * 0.6);
    state.competences.survieRural = total - state.competences.survieWilderness;
  } else {
    state.competences.survieUrban = Math.floor(total * 0.7);
    state.competences.survieRural = total - state.competences.survieUrban;
  }
  return state;
}

// ─── ÉTAPE 3 : STATUT SOCIAL ──────────────────────────────────────────────────

function _resolveStatutSocial(state) {
  const rollSocial = d(100) + state.modificateurs.CuMod;
  const statut = statutSocialFromScore(rollSocial);

  if (statut.id === 'wealthy' && d(100) <= 15) {
    state.statutId = 'extremely_wealthy';
    state.statutLabel = 'Extrêmement riche';
    state.modificateurs.SolMod = 10;
    state.education.totalPoints = Math.max(0, state.education.totalPoints + 12);
    state.moneyMod = 20;
  } else if (statut.id === 'nobility') {
    const titre = tirage(TITRES_NOBLESSE);
    state.titreNoble = state.sexeId === 'feminin' ? titre.labelF : titre.labelM;
    const rollFortune = d(100) + titre.TiMod;
    const fortuneLabel = rollFortune <= 20 ? 'Titre ruiné' : rollFortune <= 70 ? 'Confortable' : 'Fortune immense';
    const solBonus   = rollFortune <= 20 ? 2 : rollFortune <= 70 ? 5 : 10;
    state.statutId = 'nobility';
    state.statutLabel = `Noblesse (${state.titreNoble} — ${fortuneLabel})`;
    state.modificateurs.SolMod = Math.min(15, statut.solMod + solBonus);
    state.education.totalPoints = Math.max(0, state.education.totalPoints + statut.edMod);
    state.moneyMod = statut.moneyMod;
  } else {
    state.statutId = statut.id;
    state.statutLabel = statut.label;
    state.modificateurs.SolMod = statut.solMod;
    state.education.totalPoints = Math.max(0, state.education.totalPoints + statut.edMod);
    state.moneyMod = statut.moneyMod;
  }

  let chanceAlpha = state.literacyBase ?? 40;
  if (state.statutId === 'destitute') chanceAlpha -= 30;
  else if (state.statutId === 'poor') chanceAlpha -= 15;
  else if (state.statutId === 'well_to_do') chanceAlpha += 30;
  else if (['wealthy', 'extremely_wealthy', 'nobility'].includes(state.statutId)) chanceAlpha += 50;
  state.estAlphabete = d(100) <= Math.min(95, Math.max(5, chanceAlpha));

  if (state.flags.estImmigre && state.maitriseFrancais === 'en_attente_evaluation') {
    const aise = ['well_to_do', 'wealthy', 'extremely_wealthy', 'nobility'].includes(state.statutId);
    if (aise || state.titreNoble) {
      state.maitriseFrancais = 'parfait';
      if (!state.langues.includes('Français')) state.langues.push('Français');
    } else {
      state.maitriseFrancais = Math.random() < 0.6 ? 'baragouine' : 'aucun';
    }
  }
  return state;
}

// ─── ÉTAPE 4 : FAMILLE & LÉGITIMITÉ ──────────────────────────────────────────

function _resolveFamille(state) {
  state.legitime = d(20) < 19;
  if (!state.legitime) {
    state.modificateurs.SolMod = Math.max(0, state.modificateurs.SolMod - d(4));
  }

  const config = configFoyerFromDe(d(20));
  state.structureFoyer = config.resoudre();
  if (config.flagRue) {
    state.statutId = 'destitute';
    state.statutLabel = 'Misérable';
    state.modificateurs.SolMod = 0;
    state.competences.survieUrban += 3;
  }
  if (config.flagOrphelinat) {
    state.modificateurs.SolMod = Math.min(state.modificateurs.SolMod, 2);
  }

  const nSiblings = Math.max(0, d(6) - 1);
  state.nombreFreresSoeurs = nSiblings;
  if (nSiblings === 0 || config.flagRue) {
    state.rangNaissance = nSiblings === 0 ? 'Enfant unique' : 'Inconnu';
  } else {
    const deRang = d(6);
    if (deRang < nSiblings) {
      state.rangNaissance = 'Enfant du milieu';
    } else if (Math.random() < 0.5) {
      state.rangNaissance = 'Premier-né (Aîné)';
    } else {
      state.rangNaissance = 'Dernier-né (Cadet)';
    }
  }
  return state;
}

// ─── ÉTAPE 5 : LIEU DE NAISSANCE ─────────────────────────────────────────────

function _resolveNaissance(state) {
  const roll = d(20) + BONUS_GENRE_HORREUR;
  if (roll <= 4) {
    state.lieuNaissance = 'En plein champ, à découvert';
    state.biModTotal = 5;
  } else if (roll <= 7) {
    state.lieuNaissance = 'Au domicile de la famille';
    state.biModTotal = 0;
  } else if (roll <= 9) {
    state.lieuNaissance = "Dans un établissement hospitalier ordinaire";
    state.biModTotal = 0;
  } else if (roll <= 11) {
    state.lieuNaissance = `En terre étrangère (${state.nationalite.label})`;
    state.biModTotal = 5;
  } else if (roll <= 13) {
    const vehicule = tirage(['une calèche ou un fiacre', 'un omnibus', 'un navire ou une péniche', 'un ballon dirigeable']);
    state.lieuNaissance = `Dans un véhicule en mouvement — ${vehicule}`;
    state.biModTotal = 5;
  } else {
    const exotique = tirage(LIEUX_NAISSANCE_INHABITUELS);
    state.lieuNaissance = exotique.label;
    state.biModTotal = exotique.biMod;
  }
  return state;
}

// ─── ÉTAPE 6 : ÉVÉNEMENTS DE NAISSANCE ───────────────────────────────────────

function _resolveEvenementsNaissance(state) {
  state.evenementsNaissance = [];
  const score106 = d(100) + state.biModTotal + BONUS_NAISSANCE_HORREUR;
  let nombre = 0;
  let forcePlus20 = false;
  if      (score106 <= 50)  { nombre = 0; }
  else if (score106 <= 75)  { nombre = 1; }
  else if (score106 === 76) { nombre = 1; forcePlus20 = true; }
  else if (score106 <= 94)  { nombre = 2; }
  else if (score106 <= 100) { nombre = 3; forcePlus20 = true; }
  else if (score106 <= 124) { nombre = 4; forcePlus20 = true; }
  else                      { nombre = 5; forcePlus20 = true; }

  for (let i = 0; i < nombre; i++) {
    const roll = d(100) + state.biModTotal + BONUS_NAISSANCE_HORREUR + (forcePlus20 ? 20 : 0);
    const entree = evenementNaissanceFromScore(roll);
    const texte = entree.pool ? tirage(entree.pool) : entree.texte;
    if (entree.flagCurse) state.flags.aCurse = true;
    if (entree.flagGmSecret) state.flags.gmSecret = true;
    if (texte && !state.evenementsNaissance.includes(texte)) {
      state.evenementsNaissance.push(texte);
    }
  }
  return state;
}

// ─── ÉTAPE 7 : PARENTS ───────────────────────────────────────────────────────

function _resolveParents(state) {
  state.configParents = configParentsFromDe(d(20)).label;
  state.traitsNotablesParents = [];
  const n = d(3);
  for (let i = 0; i < n; i++) {
    const trait = tirage(TRAITS_NOTABLES_PARENTS);
    if (!state.traitsNotablesParents.includes(trait)) state.traitsNotablesParents.push(trait);
  }
  return state;
}

// ─── ÉTAPES 8 & 9 : JEUNESSE ─────────────────────────────────────────────────

function _texteEvenementJeunesse(score, periode, state) {
  const entree = chronologieJeunesseFromScore(score);
  if (entree.fn === 'drame_ou_miracle') {
    return Math.random() < 0.5
      ? "Tragédie familiale — un accident ou incendie frappe un proche."
      : "Événement merveilleux — un coup de chance inattendu change son regard sur le monde.";
  }
  if (entree.fn === 'table_speciale') {
    const pool = TABLE_EVENEMENTS_SPECIAL_JEUNESSE[periode] ?? TABLE_EVENEMENTS_SPECIAL_JEUNESSE.enfance;
    return tirage(pool);
  }
  if (entree.penaliteEd) {
    state.education.totalPoints = Math.max(0, state.education.totalPoints - entree.penaliteEd);
  }
  return entree.texte ?? '';
}

function _resolveJeunesse(state) {
  state.evenementsEnfance = [];
  state.evenementsAdolescence = [];
  state.bracketsPersonality = [];

  const nEnfance = d(3);
  for (let i = 0; i < nEnfance; i++) {
    const age = d(12);
    const score = d(20) + state.modificateurs.SolMod;
    const entree = chronologieJeunesseFromScore(score);
    const texte = _texteEvenementJeunesse(score, 'enfance', state);
    if (texte) state.evenementsEnfance.push(`[Âge ${age}] ${texte}`);
    if (entree.bracket) state.bracketsPersonality.push(entree.bracket);
  }

  const nAdolescence = d(3);
  for (let i = 0; i < nAdolescence; i++) {
    const age = d(6) + 12;
    const score = d(20) + state.modificateurs.SolMod;
    const entree = chronologieJeunesseFromScore(score);
    const texte = _texteEvenementJeunesse(score, 'adolescence', state);
    if (texte) state.evenementsAdolescence.push(`[Âge ${age}] ${texte}`);
    if (entree.bracket) state.bracketsPersonality.push(entree.bracket);
  }
  return state;
}

// ─── GÉNÉRATION PRINCIPALE ────────────────────────────────────────────────────

export function genererHistorique() {
  let state = {
    sexeId: null,
    nationalite: null,
    modificateurs: { TekMod: 3, CuMod: 0, SolMod: 0 },
    flags: { estImmigre: false, aCurse: false, gmSecret: false },
    education: { pointsDeBase: 0, pointsBonus: 0, totalPoints: 0 },
    competences: { survieWilderness: 0, survieRural: 0, survieUrban: 0 },
    langues: [], maitriseFrancais: 'natif', raisonPresence: null,
    techLevelId: 'industrial', cultureId: 'dynamic', cultureLabel: 'Dynamique',
    statutId: 'comfortable', statutLabel: 'Confortable', titreNoble: null,
    legitime: true, structureFoyer: '', nombreFreresSoeurs: 0, rangNaissance: 'Enfant unique',
    moneyMod: 1.0, literacyBase: 40, estAlphabete: true,
    lieuNaissance: '', biModTotal: 0, evenementsNaissance: [],
    configParents: '', traitsNotablesParents: [],
    evenementsEnfance: [], evenementsAdolescence: [], bracketsPersonality: [],
  };

  state = _resolveOrigines(state);
  state = _resolveCulture(state);
  state = _resolveStatutSocial(state);
  state = _resolveFamille(state);
  state = _resolveNaissance(state);
  state = _resolveEvenementsNaissance(state);
  state = _resolveParents(state);
  state = _resolveJeunesse(state);

  const historique = {
    origines: {
      nationalite:     state.nationalite.label,
      langue:          state.nationalite.langue ?? 'Français',
      maitriseFrancais:state.maitriseFrancais,
      languesParlees:  state.langues,
      raisonPresence:  state.raisonPresence,
      estImmigre:      state.flags.estImmigre,
    },
    formation: {
      techLevel:      NIVEAUX_TECH[state.techLevelId]?.label ?? state.techLevelId,
      culture:        state.cultureLabel,
      estAlphabete:   state.estAlphabete,
      educationPoints:state.education.totalPoints,
      survie:         { ...state.competences },
    },
    milieu: {
      statutSocial:       state.statutLabel,
      titreNoble:         state.titreNoble,
      legitime:           state.legitime,
      structureFoyer:     state.structureFoyer,
      nombreFreresSoeurs: state.nombreFreresSoeurs,
      rangNaissance:      state.rangNaissance,
    },
    naissance: {
      lieuPrecis: state.lieuNaissance,
      evenements: state.evenementsNaissance,
    },
    parents: {
      configurationMetier: state.configParents,
      faitsNotables:       state.traitsNotablesParents,
    },
    jeunesse: {
      enfance:     state.evenementsEnfance,
      adolescence: state.evenementsAdolescence,
    },
    flags: { ...state.flags },
  };

  return { sexeId: state.sexeId, nationaliteId: state.nationalite.id, historique };
}
```

- [ ] **Étape 4 : Lancer le test — vérifier qu'il passe**

```
npm test -- --reporter=verbose src/utils/__tests__/pnjGeneratorBio.test.js
```
Attendu : PASS

- [ ] **Étape 5 : Commit**

```bash
git add src/utils/pnjGeneratorBio.js src/utils/__tests__/pnjGeneratorBio.test.js
git commit -m "feat(pnj): pipeline biographique en 9 étapes (genererHistorique)"
```

---

## Task 3 : Intégration dans pnjGenerator.js

**Files:**
- Modify: `src/utils/pnjGenerator.js`
- Test: `src/utils/__tests__/pnjGenerator.biographique.test.js`

**Interfaces:**
- Consomme : `genererHistorique` de `pnjGeneratorBio.js`
- `genererPnj({ mode: 'biographique' })` → pnj standard + champ `historique` + `mode: 'biographique'`
- `rerollChamp(pnj, 'sexe')` en mode biographique → régénère l'historique entier
- `pnjVersPayloadFigure(pnj)` avec `pnj.historique` → description incluant le passé biographique

- [ ] **Étape 1 : Écrire le test**

```js
// src/utils/__tests__/pnjGenerator.biographique.test.js
import { genererPnj, rerollChamp, pnjVersPayloadFigure } from '../pnjGenerator';

describe('genererPnj({ mode: "biographique" })', () => {
  it('retourne mode = "biographique"', () => {
    expect(genererPnj({ mode: 'biographique' }).mode).toBe('biographique');
  });

  it('retourne un historique avec 7 sections', () => {
    const pnj = genererPnj({ mode: 'biographique' });
    expect(pnj.historique).toBeDefined();
    ['origines','formation','milieu','naissance','parents','jeunesse','flags'].forEach(k =>
      expect(pnj.historique).toHaveProperty(k)
    );
  });

  it('retourne les champs de personnalité (traits, secret, apparence)', () => {
    const pnj = genererPnj({ mode: 'biographique' });
    expect(Array.isArray(pnj.traits)).toBe(true);
    expect(typeof pnj.secret).toBe('string');
    expect(typeof pnj.apparence).toBe('string');
  });

  it('sexe est masculin ou feminin', () => {
    const pnj = genererPnj({ mode: 'biographique' });
    expect(['masculin', 'feminin']).toContain(pnj.sexe);
  });
});

describe('rerollChamp mode biographique', () => {
  it('reroll de sexe régénère l\'historique (mode reste biographique)', () => {
    const pnj = genererPnj({ mode: 'biographique' });
    const pnjR = rerollChamp(pnj, 'sexe');
    expect(pnjR.mode).toBe('biographique');
    expect(pnjR.historique).toBeDefined();
  });

  it('reroll de nationalite régénère l\'historique', () => {
    const pnj = genererPnj({ mode: 'biographique' });
    const pnjR = rerollChamp(pnj, 'nationalite');
    expect(pnjR.mode).toBe('biographique');
    expect(pnjR.historique).toBeDefined();
  });

  it('reroll d\'apparence ne touche pas l\'historique (référence identique)', () => {
    const pnj = genererPnj({ mode: 'biographique' });
    const ref = pnj.historique;
    const pnjR = rerollChamp(pnj, 'apparence');
    expect(pnjR.historique).toBe(ref);
  });
});

describe('pnjVersPayloadFigure mode biographique', () => {
  it('data contient historique', () => {
    const pnj = genererPnj({ mode: 'biographique' });
    const payload = pnjVersPayloadFigure(pnj);
    expect(payload.data.historique).toBeDefined();
  });

  it('description contient la nationalité', () => {
    const pnj = genererPnj({ mode: 'biographique' });
    const payload = pnjVersPayloadFigure(pnj);
    expect(payload.description).toContain(pnj.historique.origines.nationalite);
  });
});
```

- [ ] **Étape 2 : Lancer le test — vérifier qu'il échoue**

```
npm test -- --reporter=verbose src/utils/__tests__/pnjGenerator.biographique.test.js
```
Attendu : FAIL (mode biographique non reconnu)

- [ ] **Étape 3 : Modifier `src/utils/pnjGenerator.js`**

**3a — Ajouter l'import en tête de fichier** (après les imports existants) :

```js
import { genererHistorique } from './pnjGeneratorBio';
```

**3b — Dans `genererPnj()`, ajouter la branche biographique au tout début de la fonction**, juste avant la ligne `const sexe = options.sexe || ...` :

```js
if (mode === 'biographique') {
  const { sexeId, nationaliteId, historique } = genererHistorique();
  const pnjReel = genererPnj(
    { ...options, mode: 'reel', sexe: sexeId, nationalite: nationaliteId },
    dbEntries
  );
  return { ...pnjReel, mode: 'biographique', historique };
}
```

**3c — Dans `rerollChamp()`, ajouter au tout début de la fonction** (avant le switch) :

```js
if (pnj.mode === 'biographique' && (champ === 'sexe' || champ === 'nationalite')) {
  const { sexeId, nationaliteId, historique } = genererHistorique();
  const newPrenom = getPrenom(sexeId, 'reel', nationaliteId, null);
  const newNom    = getNom('reel', nationaliteId, null);
  const newMetier = getMetier('reel', pnj.trancheAge, null, sexeId, dbEntries);
  return { ...pnj, sexe: sexeId, nationalite: nationaliteId,
           prenom: newPrenom, nom: newNom, metier: newMetier, historique };
}
```

**3d — Dans `pnjVersPayloadFigure()`, ajouter le bloc historique** juste avant `lignes.push(`Métier : ...`)` :

```js
if (pnj.historique) {
  const h = pnj.historique;
  const maitrise = {
    natif: 'natif', parfait: 'parfait',
    baragouine: 'baragouine', aucun: 'aucun',
  }[h.origines.maitriseFrancais] ?? h.origines.maitriseFrancais;

  lignes.push('── Historique ──');
  lignes.push(`Origines : ${h.origines.nationalite} — ${h.formation.culture} — ${h.formation.techLevel}`);
  if (h.origines.estImmigre) {
    lignes.push(`Français : ${maitrise}${h.origines.raisonPresence ? ` — ${h.origines.raisonPresence}` : ''}`);
  }
  lignes.push(`Milieu : ${h.milieu.statutSocial} — ${h.milieu.structureFoyer} — ${h.milieu.rangNaissance}`);
  if (!h.milieu.legitime) lignes.push('Naissance illégitime.');
  lignes.push(`Naissance : ${h.naissance.lieuPrecis}`);
  h.naissance.evenements.forEach(e => lignes.push(`  → ${e}`));
  lignes.push(`Parents : ${h.parents.configurationMetier}`);
  h.parents.faitsNotables.forEach(f => lignes.push(`  → ${f}`));
  if (h.jeunesse.enfance.length > 0) {
    lignes.push('Enfance :');
    h.jeunesse.enfance.forEach(e => lignes.push(`  ${e}`));
  }
  if (h.jeunesse.adolescence.length > 0) {
    lignes.push('Adolescence :');
    h.jeunesse.adolescence.forEach(e => lignes.push(`  ${e}`));
  }
  lignes.push('');
}
```

Et dans l'objet `data` retourné, ajouter :

```js
historique: pnj.historique ?? null,
```

- [ ] **Étape 4 : Lancer le test — vérifier qu'il passe**

```
npm test -- --reporter=verbose src/utils/__tests__/pnjGenerator.biographique.test.js
```
Attendu : PASS

- [ ] **Étape 5 : Lancer toute la suite de tests pour détecter les régressions**

```
npm test
```
Attendu : tous les tests verts (le branchement sur mode='biographique' n'impacte pas les modes reel/merveilleux)

- [ ] **Étape 6 : Commit**

```bash
git add src/utils/pnjGenerator.js src/utils/__tests__/pnjGenerator.biographique.test.js
git commit -m "feat(pnj): intégration du mode biographique dans genererPnj, rerollChamp et pnjVersPayloadFigure"
```

---

## Task 4 : Interface — bouton de mode + SectionHistorique

**Files:**
- Modify: `src/components/PnjGenerateur.jsx`

Pas de nouveau fichier : `SectionHistorique` est un sous-composant inline dans le même fichier, cohérent avec `ChampPnj`, `SelectOuAleatoire`, etc.

**Interfaces:**
- Consomme : `pnj.historique` (objet `Historique` défini en Task 2)
- Pas de nouveau test (composant UI visuel — vérification manuelle)

- [ ] **Étape 1 : Ajouter le bouton mode "Biographique"**

Localiser le tableau des modes (vers la ligne 744). Remplacer :

```jsx
{[
  { id: 'reel',        label: '🌍 Réel',       desc: 'Parisien·ne Belle Époque' },
  { id: 'merveilleux', label: '✨ Merveilleux', desc: 'Créature féérique' },
].map(opt => (
```

Par :

```jsx
{[
  { id: 'reel',          label: '🌍 Réel',          desc: 'Parisien·ne Belle Époque' },
  { id: 'merveilleux',   label: '✨ Merveilleux',   desc: 'Créature féérique' },
  { id: 'biographique',  label: '📜 Biographique',  desc: 'Avec historique complet' },
].map(opt => (
```

- [ ] **Étape 2 : Masquer les sélecteurs Sexe et Nationalité en mode biographique**

Le sélecteur Sexe se trouve vers la ligne 802 (avant `SelectOuAleatoire label="Genre"`). L'envelopper :

```jsx
{mode !== 'biographique' && (
  <SelectOuAleatoire
    label="Sexe"
    options={SEXES}
    value={options.sexe}
    onChange={v => setOptions(o => ({ ...o, sexe: v }))}
  />
)}
```

Le sélecteur Nationalité est déjà conditionnel (`{mode === 'reel' && ...}`). Le modifier pour afficher aussi en biographique mais en lecture seule (ou simplement le garder caché) — le plus simple est de le laisser caché (`mode === 'reel'` reste inchangé).

- [ ] **Étape 3 : Ajouter la note informationnelle en mode biographique**

Juste après la fermeture du bloc type de fée (`{mode === 'merveilleux' && ...}`), ajouter :

```jsx
{mode === 'biographique' && (
  <div className="bg-stone-50 rounded-xl border border-stone-200 px-4 py-3">
    <p className="text-xs text-stone-500 font-serif">
      En mode biographique, la nationalité et le sexe sont tirés automatiquement par le générateur d'historique.
    </p>
  </div>
)}
```

- [ ] **Étape 4 : Ajouter le sous-composant `SectionHistorique`**

Ajouter ce composant dans la zone des sous-composants (vers la ligne 150, après `ChampPnj`) :

```jsx
const LABELS_MAITRISE = {
  natif:     'français natif',
  parfait:   'français parfait',
  baragouine:'baragouine le français',
  aucun:     'ne parle pas français',
};

function SectionHistorique({ historique }) {
  const [open, setOpen] = React.useState(null);
  const toggle = (id) => setOpen(o => o === id ? null : id);
  const h = historique;

  const sections = [
    {
      id: 'origines',
      titre: 'Origines',
      lignes: [
        h.origines.nationalite,
        h.origines.estImmigre && LABELS_MAITRISE[h.origines.maitriseFrancais],
        h.origines.estImmigre && h.origines.raisonPresence && `Raison : ${h.origines.raisonPresence}`,
        h.formation.culture,
        h.formation.techLevel,
        h.formation.estAlphabete ? 'Alphabétisé(e)' : 'Non alphabétisé(e)',
      ].filter(Boolean),
    },
    {
      id: 'milieu',
      titre: 'Milieu familial',
      lignes: [
        h.milieu.statutSocial,
        h.milieu.titreNoble && `Titre : ${h.milieu.titreNoble}`,
        !h.milieu.legitime && 'Naissance illégitime',
        h.milieu.structureFoyer,
        h.milieu.nombreFreresSoeurs > 0
          ? `${h.milieu.nombreFreresSoeurs} frère(s)/sœur(s) — ${h.milieu.rangNaissance}`
          : h.milieu.rangNaissance,
      ].filter(Boolean),
    },
    {
      id: 'naissance',
      titre: 'Naissance',
      lignes: [
        h.naissance.lieuPrecis,
        ...h.naissance.evenements.map(e => `→ ${e}`),
      ].filter(Boolean),
    },
    {
      id: 'parents',
      titre: 'Parents',
      lignes: [
        h.parents.configurationMetier,
        ...h.parents.faitsNotables.map(f => `→ ${f}`),
      ].filter(Boolean),
    },
    {
      id: 'jeunesse',
      titre: 'Jeunesse',
      lignes: [
        ...h.jeunesse.enfance,
        ...h.jeunesse.adolescence,
      ].filter(Boolean),
    },
  ];

  return (
    <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden">
      <p className="px-5 py-3 text-xs font-bold text-stone-400 uppercase tracking-wider border-b border-stone-200">
        Historique
      </p>
      {sections.map(section => (
        <div key={section.id} className="border-b border-stone-100 last:border-0">
          <button
            onClick={() => toggle(section.id)}
            className="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-stone-100 transition-colors"
          >
            <span className="text-sm font-bold font-serif text-stone-700">{section.titre}</span>
            <ChevronDown
              size={14}
              className={`text-stone-400 transition-transform ${open === section.id ? 'rotate-180' : ''}`}
            />
          </button>
          {open === section.id && (
            <div className="px-5 pb-4 space-y-1">
              {section.lignes.map((ligne, i) => (
                <p key={i} className="text-sm font-serif text-stone-600 leading-snug">
                  {ligne}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Étape 5 : Insérer `<SectionHistorique>` dans le rendu du PNJ**

Localiser le commentaire `{/* Grille des attributs */}` (vers la ligne 912). Insérer juste avant :

```jsx
{pnj.historique && (
  <SectionHistorique historique={pnj.historique} />
)}
```

- [ ] **Étape 6 : Corriger les conditions mode-dépendantes existantes**

La section Phobie/Hobby/Comportement (vers la ligne 936) vérifie `mode === 'reel'`. Mettre à jour :

```jsx
{(mode === 'reel' || mode === 'biographique') && (pnj.phobie || pnj.hobby || pnj.comportement) && (
```

- [ ] **Étape 7 : Lancer les tests complets**

```
npm test
```
Attendu : tous les tests verts

- [ ] **Étape 8 : Commit final**

```bash
git add src/components/PnjGenerateur.jsx
git commit -m "feat(pnj): mode Biographique — bouton de mode + SectionHistorique accordéon"
```
