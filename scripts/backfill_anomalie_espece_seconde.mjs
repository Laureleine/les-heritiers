// scripts/backfill_anomalie_espece_seconde.mjs
// Renseigne character.data.anomalie_espece_seconde pour les personnages ayant
// déjà l'atout "Anomalie féérique" mais pas encore ce champ, en dérivant
// l'espèce depuis le pouvoir étranger déjà choisi — UNIQUEMENT quand ce
// pouvoir n'appartient (en masqué/démasqué) qu'à une seule autre espèce.
// Les cas ambigus ou non résolubles sont listés, jamais devinés.
//
// Usage :
//   node scripts/backfill_anomalie_espece_seconde.mjs           (dry-run, aucune écriture)
//   node scripts/backfill_anomalie_espece_seconde.mjs --apply   (applique les cas résolus)

import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const APPLY = process.argv.includes('--apply');

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// 1. Construire les tables de correspondance pouvoir <-> espèce(s)
const { data: fairyTypes, error: ftErr } = await supabase.from('fairy_types').select('id, name');
if (ftErr) { console.error('❌ fairy_types:', ftErr.message); process.exit(1); }

const { data: links, error: linkErr } = await supabase
  .from('fairy_type_powers')
  .select('fairy_type_id, power:fairy_powers(nom, type_pouvoir)');
if (linkErr) { console.error('❌ fairy_type_powers:', linkErr.message); process.exit(1); }

const idToName = {};
fairyTypes.forEach(f => { idToName[f.id] = f.name; });

const speciesOwnPowers = {};   // espèce -> Set(nom de pouvoir), TOUS types confondus
const powerToSpecies = {};     // nom de pouvoir -> Set(espèce), masqué/démasqué UNIQUEMENT

links.forEach(l => {
  const speciesName = idToName[l.fairy_type_id];
  const powerName = l.power?.nom;
  const type = l.power?.type_pouvoir;
  if (!speciesName || !powerName) return;

  if (!speciesOwnPowers[speciesName]) speciesOwnPowers[speciesName] = new Set();
  speciesOwnPowers[speciesName].add(powerName);

  if (type === 'masque' || type === 'demasque') {
    if (!powerToSpecies[powerName]) powerToSpecies[powerName] = new Set();
    powerToSpecies[powerName].add(speciesName);
  }
});

// 2. Charger tous les personnages, filtrer en mémoire (évite les soucis de
//    typage jsonb avec l'opérateur .contains() de PostgREST)
const { data: allCharacters, error: charErr } = await supabase
  .from('characters')
  .select('id, nom, type_fee, pouvoirs, atouts, data');
if (charErr) { console.error('❌ characters:', charErr.message); process.exit(1); }

const characters = allCharacters.filter(c => (c.atouts || []).includes('Anomalie féérique'));
const candidats = characters.filter(c => !c.data?.anomalie_espece_seconde);

console.log(`ℹ️  ${characters.length} personnage(s) avec Anomalie féérique, ${candidats.length} sans anomalie_espece_seconde déjà renseigné.\n`);

const resolus = [];
const nonResolus = [];

for (const c of candidats) {
  const ownPowers = speciesOwnPowers[c.type_fee] || new Set();
  const pouvoirsEtrangers = (c.pouvoirs || []).filter(p => !ownPowers.has(p));

  if (pouvoirsEtrangers.length === 0) {
    nonResolus.push({ id: c.id, nom: c.nom, typeFee: c.type_fee, raison: "a l'atout mais aucun pouvoir étranger identifiable dans sa liste de pouvoirs" });
    continue;
  }

  const especesTrouvees = new Set();
  const details = [];
  let ambigu = false;

  for (const pouvoirNom of pouvoirsEtrangers) {
    const especes = powerToSpecies[pouvoirNom];
    if (!especes || especes.size === 0) {
      details.push(`"${pouvoirNom}" : aucune espèce ne le possède en masqué/démasqué`);
      ambigu = true;
    } else if (especes.size > 1) {
      details.push(`"${pouvoirNom}" : ambigu, possédé par ${[...especes].join(', ')}`);
      ambigu = true;
    } else {
      especesTrouvees.add([...especes][0]);
    }
  }

  if (ambigu || especesTrouvees.size !== 1) {
    nonResolus.push({
      id: c.id,
      nom: c.nom,
      typeFee: c.type_fee,
      pouvoirsEtrangers,
      raison: especesTrouvees.size > 1
        ? `pouvoirs étrangers pointant vers des espèces différentes (${[...especesTrouvees].join(', ')})`
        : details.join(' ; '),
    });
    continue;
  }

  resolus.push({ id: c.id, nom: c.nom, typeFee: c.type_fee, especeSeconde: [...especesTrouvees][0], pouvoirsEtrangers });
}

console.log(`✅ Résolus sans ambiguïté : ${resolus.length}`);
resolus.forEach(r => console.log(`   - ${r.nom} (${r.typeFee}) → ${r.especeSeconde} [pouvoir(s): ${r.pouvoirsEtrangers.join(', ')}]`));

console.log(`\n⚠️  Non résolus : ${nonResolus.length}`);
nonResolus.forEach(r => console.log(`   - ${r.nom} (${r.typeFee}, id ${r.id}) : ${r.raison}`));

if (!APPLY) {
  console.log('\n(mode simulation — relancer avec --apply pour écrire en base)');
  process.exit(0);
}

console.log('\n✍️  Application des cas résolus...');
let ok = 0, err = 0;
for (const r of resolus) {
  const character = candidats.find(c => c.id === r.id);
  const { error } = await supabase
    .from('characters')
    .update({ data: { ...(character.data || {}), anomalie_espece_seconde: r.especeSeconde } })
    .eq('id', r.id);
  if (error) {
    console.error(`❌ ${r.nom} :`, error.message);
    err++;
  } else {
    ok++;
  }
}
console.log(`\nRésultat : ${ok} mis à jour, ${err} erreurs.`);
if (err > 0) process.exit(1);
