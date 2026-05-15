/**
 * 📓 Script de Migration : Synchronisation des Contacts → Grimoire Personnel
 *
 * Ce script parcourt tous les personnages et synchronise les contacts
 * achetés dans la Vie Sociale vers le Grimoire Personnel (heritier_notes).
 *
 * Usage : node scripts/sync-contacts-to-grimoire.js [--dry-run]
 *
 * Options :
 *   --dry-run   Affiche ce qui serait fait sans modifier la base
 */

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Variables d\'environnement manquantes : REACT_APP_SUPABASE_URL et/ou SUPABASE_SERVICE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const DRY_RUN = process.argv.includes('--dry-run');

async function main() {
  console.log('📓 Synchronisation des Contacts vers les Grimoires Personnels');
  console.log(DRY_RUN ? '🔍 Mode DRY-RUN : aucune modification ne sera effectuée\n' : '⚡ Mode LIVE : les données seront modifiées\n');

  // 1. Récupérer le catalogue des social_items (contacts uniquement)
  console.log('📦 Chargement du catalogue des contacts...');
  const { data: socialItems, error: socialError } = await supabase
    .from('social_items')
    .select('id, nom, description, categorie')
    .eq('categorie', 'contact');

  if (socialError) {
    console.error('❌ Erreur lors du chargement des social_items:', socialError.message);
    process.exit(1);
  }

  // Créer un index par ID pour recherche rapide
  const contactsIndex = {};
  for (const item of socialItems) {
    contactsIndex[item.id] = item;
  }

  console.log(`   ${socialItems.length} contacts trouvés dans le catalogue\n`);

  // 2. Récupérer tous les personnages avec leur vie_sociale
  const { data: characters, error: charError } = await supabase
    .from('characters')
    .select('id, nom, user_id, vie_sociale')
    .not('vie_sociale', 'is', null);

  if (charError) {
    console.error('❌ Erreur lors de la récupération des personnages:', charError.message);
    process.exit(1);
  }

  console.log(`📋 ${characters.length} personnages avec Vie Sociale trouvés\n`);

  let totalContactsFound = 0;
  let totalContactsCreated = 0;
  let totalContactsSkipped = 0;

  for (const char of characters) {
    const vieSociale = char.vie_sociale;
    if (!vieSociale || typeof vieSociale !== 'object') continue;

    // Extraire tous les UUIDs achetés (excluant allocationsContacts qui n'est pas un profil)
    const allItemIds = [];
    for (const [profilKey, profilData] of Object.entries(vieSociale)) {
      if (profilKey === 'allocationsContacts') continue; // Ignorer les métadonnées
      if (Array.isArray(profilData)) {
        allItemIds.push(...profilData);
      }
    }

    // Filtrer pour ne garder que les contacts
    const contactsAchetes = allItemIds
      .map(id => contactsIndex[id])
      .filter(Boolean);

    if (contactsAchetes.length === 0) continue;

    totalContactsFound += contactsAchetes.length;
    console.log(`\n👤 ${char.nom} (${char.id.slice(0, 8)}...) — ${contactsAchetes.length} contact(s) acheté(s)`);

    // Récupérer les contacts déjà dans le Grimoire
    const { data: existingNotes, error: notesError } = await supabase
      .from('heritier_notes')
      .select('id, content')
      .eq('character_id', char.id)
      .eq('type', 'contact');

    if (notesError) {
      console.error(`   ❌ Erreur récupération notes:`, notesError.message);
      continue;
    }

    const existingTitles = new Set(
      (existingNotes || []).map(n => n.content?.nom?.toLowerCase())
    );

    // Créer les contacts manquants
    for (const contact of contactsAchetes) {
      const titleLower = contact.nom.toLowerCase();

      if (existingTitles.has(titleLower)) {
        console.log(`   ⏭️  "${contact.nom}" — déjà présent`);
        totalContactsSkipped++;
        continue;
      }

      const payload = {
        character_id: char.id,
        cercle_id: null,
        player_id: char.user_id,
        type: 'contact',
        content: {
          nom: contact.nom,
          localisation: '',
          statut_relation: 'Neutre',
          description: contact.description || '',
          notes: '',
          date_creation: new Date().toISOString(),
          source: 'migration_vie_sociale'
        },
        is_shared: false
      };

      if (DRY_RUN) {
        console.log(`   📝 [DRY-RUN] Créerait: "${contact.nom}"`);
        totalContactsCreated++;
      } else {
        const { error: insertError } = await supabase
          .from('heritier_notes')
          .insert([payload]);

        if (insertError) {
          console.error(`   ❌ Erreur création "${contact.nom}":`, insertError.message);
        } else {
          console.log(`   ✅ Créé: "${contact.nom}"`);
          totalContactsCreated++;
        }
      }

      // Ajouter au set pour éviter les doublons dans cette même exécution
      existingTitles.add(titleLower);
    }
  }

  // Résumé final
  console.log('\n' + '═'.repeat(60));
  console.log('📊 RÉSUMÉ DE LA SYNCHRONISATION');
  console.log('═'.repeat(60));
  console.log(`   Contacts achetés trouvés : ${totalContactsFound}`);
  console.log(`   Contacts déjà présents   : ${totalContactsSkipped}`);
  if (DRY_RUN) {
    console.log(`   Contacts à créer         : ${totalContactsCreated}`);
    console.log('\n💡 Relancez sans --dry-run pour appliquer les modifications.');
  } else {
    console.log(`   Contacts créés           : ${totalContactsCreated}`);
    console.log('\n✨ Synchronisation terminée !');
  }
}

main().catch(err => {
  console.error('❌ Erreur fatale:', err);
  process.exit(1);
});
