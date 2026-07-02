# Générateur d'Ambiance — Design

_Date : 3 juillet 2026_

## Objectif

Ajouter un nouvel outil au Hub Outils du Maître de Jeu : un générateur d'ambiance de rue/voyage (décor, météo, événement de vie, éventuelle intrigue), Paris et alentours 1899. Nouvelle carte indépendante dans `OutilsHub.jsx`, route `/ambiance`, icône `Route`.

Suit le même modèle que le Générateur de Poche : entièrement piloté par Supabase (canon + communautaire, `is_official`), aucune donnée hardcodée dans le code, admin avec édition en place.

## Convention réutilisée

`tirage`/`tiragePondere` exportés par `src/data/pnjTables.js`, réutilisés tels quels. **Pas de `resolveText`** : contrairement à PNJ/Poche, aucune entrée de ce générateur n'a de variante genrée (ce sont des descriptions de décor/événement, pas des objets ou traits liés à une personne). Écart assumé par rapport à la convention `value_m`/`value_f` : une seule colonne `value` TEXT.

## Stockage — tout en base

### Table `ambiance_table_entries`

```sql
CREATE TABLE public.ambiance_table_entries (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name    TEXT NOT NULL CHECK (table_name IN ('decor','evenement','meteo','intrigue')),
  variante      TEXT NOT NULL,
  value         TEXT NOT NULL,
  weight        INTEGER NOT NULL DEFAULT 1,
  is_official   BOOLEAN NOT NULL DEFAULT false,
  status        TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  reject_reason TEXT,
  created_by    UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  approved_by   UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  approved_at   TIMESTAMPTZ,
  CONSTRAINT variante_valide CHECK (
    (table_name = 'decor'     AND variante IN ('paris_populaire','paris_riche','banlieue_industrielle','campagne_rurale')) OR
    (table_name = 'evenement' AND variante IN ('paris_jour','paris_nuit','banlieue_industrielle_jour','banlieue_industrielle_nuit','campagne_rurale_jour','campagne_rurale_nuit')) OR
    (table_name = 'meteo'     AND variante IN ('hiver','printemps','ete','automne')) OR
    (table_name = 'intrigue'  AND variante IN ('horror','espionage','pulp'))
  )
);
```

RLS identique au modèle éprouvé `pnj_table_entries`/`poche_table_entries` : SELECT (`status='approved' OR created_by=auth.uid()`), INSERT (`created_by=auth.uid()`), UPDATE (admin : `super_admin`/`gardien`).

### Seed (46 entrées canon, `is_official=true`, `status='approved'`)

- `decor` : 4 variantes × 4 entrées (poids = largeur d'intervalle d'origine) = 16 lignes.
- `evenement` : `paris_jour`/`paris_nuit` (5 entrées pondérées chacun, texte original des tables jour/nuit — Paris populaire et riche partagent ce pool générique) + `banlieue_industrielle_jour`/`_nuit` et `campagne_rurale_jour`/`_nuit` (1 entrée fixe chacune, le texte de surcharge original, poids arbitraire — extensible plus tard sans code) = 14 lignes.
- `meteo` : 4 variantes (une par saison), 1 entrée chacune (le texte original) = 4 lignes.
- `intrigue` : 3 variantes (horror/espionage/pulp), 4 entrées pondérées chacune = 12 lignes.

Migration + seed : `scripts/migrate_ambiance_table_entries.js` (pg + `SUPABASE_DB_URL`, idempotent comme les scripts précédents).

## Génération

### `src/hooks/useAmbianceTableEntries.js`

Mirror de `usePocheTableEntries.js` : `reload()` (fetch approuvées groupées par `${table_name}_${variante}`, + mes propositions), `proposer({ tableName, variante, value, weight })`. Pas de résolution de genre à porter (pas de `value_f`).

### `src/utils/ambianceGenerator.js`

```
genererAmbianceVoyage(config, dbEntries) -> string[]
config = { zone, moment, saison, genre }
```
- Tire `decor_${zone}` → `[CADRE] ...`
- Calcule la clé de groupe événement : `paris` si zone ∈ {paris_populaire, paris_riche}, sinon la zone elle-même ; tire `evenement_${groupe}_${moment}` → `[VIE] ...`
- Tire `meteo_${saison}` → `[MÉTÉO] ...`
- Si `genre !== 'standard'`, tire `intrigue_${genre}` → `[INTRIGUE - GENRE] ...`
- Toujours via `tiragePondere` (pas de min/max, pas de résolution genrée).

## UI

### `src/components/AmbianceGenerateur.jsx`

Carte indépendante dans `OutilsHub.jsx` (icône `Route`), route `/ambiance`.
- Contrôles : zone, moment, saison, genre littéraire.
- Bouton "Générer l'ambiance" désactivé tant que les tables ne sont pas chargées.
- Résultat : liste des éléments de scène (`[CADRE]`, `[MÉTÉO]`, `[VIE]`, `[INTRIGUE]` le cas échéant).
- Section "Proposer un élément" (même UX que Poche) : table cible, variante (menu dépendant de la table cible), texte, poids.

### `src/components/admin/TabAmbiancePropositions.js`

Mirror de `TabPochePropositions.js` : onglets En attente/Approuvés/Refusés, édition en place d'une entrée approuvée, ajout direct d'un élément canon. Enregistré dans `AdminDashboard.js`.

### Routing (`src/AppRouter.jsx`)

Lazy import + route `/ambiance`, `onOpenAmbiance` sur `OutilsHub`.

## Tests de non-régression

Tests unitaires sur `ambianceGenerator.js` : présence systématique de `[CADRE]`/`[MÉTÉO]`/`[VIE]`, regroupement Paris correct (populaire et riche tirent dans le même pool événement), déclenchement de l'intrigue uniquement si `genre !== 'standard'`, comportement gracieux quand une table est vide, respect des poids sur un grand nombre de tirages.

## Hors périmètre

- Pas d'intégration à la Carte de Paris (carte indépendante uniquement, décision prise en session).
- Pas de `value_f`/résolution de genre (contenu non genré par nature).
