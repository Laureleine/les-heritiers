// scripts/backfill_fairy_lore.mjs
// Peuple les colonnes lore_* de fairy_types depuis FairyLore.js
// Usage : node scripts/backfill_fairy_lore.mjs

import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import FAIRY_LORE from '../src/data/FairyLore.js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// Correspondance entre le nom en base et la clé dans FAIRY_LORE
const DB_NAME_TO_LORE_KEY = {
  'Ange':                 'ange',
  'Bastet':               'bastet',
  'Elfe':                 'elfe',
  'Farfadet':             'farfadet',
  'Faux-Semblant enfoui': 'faux_semblant_enfoui',
  'Fée électricité':      'fee_electricite',
  'Fleur de métal':       'fleur_de_metal',
  'Fouinard':             'fouinard',
  'Gargouille':           'gargouille',
  'Gnome':                'gnome',
  'Gobelin':              'gobelin',
  'Golem':                'golem',
  'Gremelin':             'gremelin',
  'Korrigan':             'korrigan',
  'Léporide':             'leporide',
  'Loup-Garou':           'loup_garou',
  'Ogre':                 'ogre',
  'Ondine':               'ondine',
  'Orc':                  'orc',
  'Phénix':               'phenix',
  'Protys':               'protys',
  'Smog':                 'smog',
  'Succube/Incube':       'succube',
  'Sylve':                'sylve',
  'Troll':                'troll',
  'Vampyr':               'vampyr',
};

let ok = 0, skip = 0, err = 0;

for (const [dbName, loreKey] of Object.entries(DB_NAME_TO_LORE_KEY)) {
  const lore = FAIRY_LORE[loreKey];
  if (!lore) {
    console.warn(`⚠️  Clé introuvable dans FairyLore.js : ${loreKey}`);
    skip++;
    continue;
  }

  const { error } = await supabase
    .from('fairy_types')
    .update({
      lore_apparence:           lore.apparence            ?? null,
      lore_taille:              lore.taille               ?? null,
      lore_mode_reproduction:   lore.modeReproduction     ?? null,
      lore_habitat:             lore.habitat              ?? null,
      lore_caractere:           lore.caractere            ?? null,
      lore_personnages_celebres: lore.personnagesCelebres?.length
                                  ? lore.personnagesCelebres
                                  : null,
      lore_note_docte:          lore.noteDocte            ?? null,
    })
    .eq('name', dbName);

  if (error) {
    console.error(`❌ ${dbName} :`, error.message);
    err++;
  } else {
    console.log(`✓  ${dbName}`);
    ok++;
  }
}

console.log(`\nRésultat : ${ok} mis à jour, ${skip} ignorés, ${err} erreurs.`);
if (err > 0) process.exit(1);
