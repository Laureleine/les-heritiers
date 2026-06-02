require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('❌ Variables de configuration manquantes');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

const CORRECTIONS = {
  'Fleur de métal': {
    old: ['Froide', 'Insolente', 'Magnétique', 'Retorse'],
    new: ['Froid/Froide', 'Insolent/Insolente', 'Magnétique', 'Retors/Retorse'],
  },
  'Gorgone': {
    old: ['Sournoise', 'Studieuse', 'Solitaire', 'Impitoyable'],
    new: ['Sournois/Sournoise', 'Studieux/Studieuse', 'Solitaire', 'Impitoyable'],
  },
  'Succube/Incube': {
    old: ['Cruelle', 'Désenchantée', 'Langoureuse', 'Manipulatrice'],
    new: ['Cruel/Cruelle', 'Désenchanté/Désenchantée', 'Langoureux/Langoureuse', 'Manipulateur/Manipulatrice'],
  },
};

async function run() {
  console.log('🔍 Vérification et correction des traits féériques...\n');

  for (const [name, { old, new: newTraits }] of Object.entries(CORRECTIONS)) {
    const { data, error } = await supabase
      .from('fairy_types')
      .select('id, name, traits')
      .eq('name', name);

    if (error) {
      console.error(`❌ Erreur ${name} :`, error.message);
      continue;
    }

    if (!data || data.length === 0) {
      console.log(`⚠️  ${name} introuvable`);
      continue;
    }

    const species = data[0];
    const currentTraits = species.traits;

    console.log(`📋 ${name} (id=${species.id}) — traits actuels :`, JSON.stringify(currentTraits));

    // Vérifier si la correction est déjà appliquée
    const needsFix = old.some(t => currentTraits.includes(t)) && !newTraits.every(t => currentTraits.includes(t));

    if (!needsFix) {
      console.log(`   ✅ Déjà correct`);
      continue;
    }

    const { error: updateError } = await supabase
      .from('fairy_types')
      .update({ traits: newTraits })
      .eq('id', species.id);

    if (updateError) {
      console.error(`   ❌ Échec mise à jour :`, updateError.message);
    } else {
      console.log(`   ✅ Corrigé → ${JSON.stringify(newTraits)}`);
    }
    console.log('');
  }

  console.log('\n🌟 Correction terminée !');
}

run();
