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
