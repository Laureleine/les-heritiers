/**
 * Script de Migration : Synchronisation des Possessions → Grimoire Personnel
 *
 * Parcourt tous les personnages et synchronise les objets achetés dans
 * la Vie Sociale (categorie='objet') vers le Grimoire Personnel (heritier_notes).
 *
 * Usage : node scripts/sync-possessions-to-grimoire.js [--dry-run]
 */

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Variables manquantes : REACT_APP_SUPABASE_URL et/ou SUPABASE_SERVICE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const DRY_RUN = process.argv.includes('--dry-run');

async function main() {
  console.log('📦 Synchronisation des Possessions vers les Grimoires Personnels');
  console.log(DRY_RUN ? '🔍 Mode DRY-RUN : aucune modification ne sera effectuée\n' : '⚡ Mode LIVE : les données seront modifiées\n');

  const { data: socialItems, error: socialError } = await supabase
    .from('social_items')
    .select('id, nom, description, categorie')
    .eq('categorie', 'objet');

  if (socialError) {
    console.error('❌ Erreur catalogue:', socialError.message);
    process.exit(1);
  }

  const objetsIndex = {};
  for (const item of socialItems) objetsIndex[item.id] = item;
  console.log(`📦 ${socialItems.length} objets trouvés dans le catalogue\n`);

  const { data: characters, error: charError } = await supabase
    .from('characters')
    .select('id, nom, user_id, vie_sociale')
    .not('vie_sociale', 'is', null);

  if (charError) {
    console.error('❌ Erreur personnages:', charError.message);
    process.exit(1);
  }

  console.log(`📋 ${characters.length} personnages avec Vie Sociale trouvés\n`);

  let totalFound = 0;
  let totalCreated = 0;
  let totalSkipped = 0;

  for (const char of characters) {
    const vieSociale = char.vie_sociale;
    if (!vieSociale || typeof vieSociale !== 'object') continue;

    const allItemIds = [];
    for (const [profilKey, profilData] of Object.entries(vieSociale)) {
      if (profilKey === 'allocationsContacts') continue;
      if (Array.isArray(profilData)) allItemIds.push(...profilData);
    }

    const objetsAchetes = allItemIds.map(id => objetsIndex[id]).filter(Boolean);
    if (objetsAchetes.length === 0) continue;

    totalFound += objetsAchetes.length;
    console.log(`\n👤 ${char.nom} (${char.id.slice(0, 8)}...) — ${objetsAchetes.length} objet(s) acheté(s)`);

    const { data: existingNotes, error: notesError } = await supabase
      .from('heritier_notes')
      .select('id, content')
      .eq('character_id', char.id)
      .eq('type', 'possession');

    if (notesError) {
      console.error(`   ❌ Erreur récupération:`, notesError.message);
      continue;
    }

    const existingNoms = new Set(
      (existingNotes || []).map(n => n.content?.nom?.toLowerCase())
    );

    for (const objet of objetsAchetes) {
      const nomLower = objet.nom.toLowerCase();

      if (existingNoms.has(nomLower)) {
        console.log(`   ⏭️  "${objet.nom}" — déjà présent`);
        totalSkipped++;
        continue;
      }

      const payload = {
        character_id: char.id,
        cercle_id: null,
        player_id: char.user_id,
        type: 'possession',
        content: {
          nom: objet.nom,
          description: objet.description || '',
          date_creation: new Date().toISOString(),
          source: 'migration_vie_sociale'
        },
        is_shared: false
      };

      if (DRY_RUN) {
        console.log(`   📝 [DRY-RUN] Créerait: "${objet.nom}"`);
        totalCreated++;
      } else {
        const { error: insertError } = await supabase
          .from('heritier_notes')
          .insert([payload]);

        if (insertError) {
          console.error(`   ❌ Erreur "${objet.nom}":`, insertError.message);
        } else {
          console.log(`   ✅ Créé: "${objet.nom}"`);
          totalCreated++;
        }
      }

      existingNoms.add(nomLower);
    }
  }

  console.log('\n' + '═'.repeat(60));
  console.log('📊 RÉSUMÉ');
  console.log('═'.repeat(60));
  console.log(`   Objets achetés trouvés : ${totalFound}`);
  console.log(`   Déjà présents          : ${totalSkipped}`);
  if (DRY_RUN) {
    console.log(`   À créer                : ${totalCreated}`);
    console.log('\n💡 Relancez sans --dry-run pour appliquer.');
  } else {
    console.log(`   Créés                  : ${totalCreated}`);
    console.log('\n✨ Synchronisation terminée !');
  }
}

main().catch(err => {
  console.error('❌ Erreur fatale:', err);
  process.exit(1);
});
