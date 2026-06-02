require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('❌ Variables de configuration manquantes');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

async function run() {
  console.log('🔄 Application des corrections sur les espèces féériques...');

  // 1. Correction de Ogre (ID: à trouver par nom)
  const { data: ogreData } = await supabase.from('fairy_types').select('id, name, traits').eq('name', 'Ogre');
  if (ogreData && ogreData.length > 0) {
    const newTraits = ogreData[0].traits.map(t => t === 'Bourrue/Bourru' ? 'Bourru/Bourrue' : t);
    await supabase.from('fairy_types').update({ traits: newTraits }).eq('id', ogreData[0].id);
    console.log('✅ Ogre corrigé : [Bourru/Bourrue]');
  }

  // 2. Correction de Orc
  const { data: orcData } = await supabase.from('fairy_types').select('id, name, traits').eq('name', 'Orc');
  if (orcData && orcData.length > 0) {
    const newTraits = orcData[0].traits.map(t => {
      if (t === 'Intransigeante/Intransigeant') return 'Intransigeant/Intransigeante';
      if (t === 'Loyale/Loyal') return 'Loyal/Loyale';
      if (t === 'Vindicative/Vindicatif') return 'Vindicatif/Vindicative';
      return t;
    });
    await supabase.from('fairy_types').update({ traits: newTraits }).eq('id', orcData[0].id);
    console.log('✅ Orc corrigé : [Intransigeant/Intransigeante, Loyal/Loyale, Vindicatif/Vindicative]');
  }

  // 3. Correction de Protys
  const { data: protysData } = await supabase.from('fairy_types').select('id, name, traits').eq('name', 'Protys');
  if (protysData && protysData.length > 0) {
    const newTraits = protysData[0].traits.map(t => t === 'Imaginative/Imaginatif' ? 'Imaginatif/Imaginative' : t);
    await supabase.from('fairy_types').update({ traits: newTraits }).eq('id', protysData[0].id);
    console.log('✅ Protys corrigé : [Imaginatif/Imaginative]');
  }

  console.log('\n🌟 Toutes les corrections d\'espèces féériques ont été gravées dans le marbre !');
}

run();
