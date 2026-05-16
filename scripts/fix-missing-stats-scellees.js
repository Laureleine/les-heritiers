/**
 * Script de Migration : Reconstruction du Plancher de Verre (stats_scellees)
 *
 * Pour les personnages scellés dont stats_scellees est absent (bug « Sans plancher »).
 * Reconstruit stats_scellees depuis l'état actuel du personnage.
 *
 * Usage : node scripts/fix-missing-stats-scellees.js [--dry-run]
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
  console.log('🔧 Reconstruction du Plancher de Verre (stats_scellees)');
  console.log(DRY_RUN ? '🔍 Mode DRY-RUN : aucune modification\n' : '⚡ Mode LIVE\n');

  const { data: chars, error } = await supabase
    .from('characters')
    .select('id, nom, statut, data, caracteristiques, atouts, competences_libres, competences_futiles, fortune, pouvoirs')
    .in('statut', ['scelle', 'scellé']);

  if (error) {
    console.error('❌ Erreur de chargement :', error.message);
    process.exit(1);
  }

  console.log(`📋 ${chars.length} personnages scellés trouvés\n`);

  let fixed = 0;
  let skipped = 0;

  for (const c of chars) {
    const data = c.data || {};

    if (data.stats_scellees) {
      console.log(`⏭️  ${c.nom} — déjà un plancher, ignoré.`);
      skipped++;
      continue;
    }

    const cl = c.competences_libres || {};

    const stats_scellees = {
      caracteristiques: c.caracteristiques || {},
      atouts: c.atouts || [],
      competencesLibres: {
        rangs:               { ...(cl.rangs || {}) },
        choixSpecialiteUser: JSON.parse(JSON.stringify(cl.choix_specialite_user || cl.choixSpecialiteUser || {})),
        choixPredilection:   { ...(cl.choix_predilection || cl.choixPredilection || {}) },
        specialiteMetier:    cl.specialite_metier || cl.specialiteMetier || null,
      },
      competencesFutiles: {
        rangs: { ...((c.competences_futiles || {}).rangs || {}) },
      },
      fortune: c.fortune || 0,
      pouvoirs: c.pouvoirs || [],
    };

    if (DRY_RUN) {
      console.log(`✅ [DRY RUN] ${c.nom} — plancher prêt à être écrit.`);
      fixed++;
      continue;
    }

    const newData = { ...data, stats_scellees };
    const { error: saveError } = await supabase
      .from('characters')
      .update({ data: newData, updated_at: new Date().toISOString() })
      .eq('id', c.id);

    if (saveError) {
      console.log(`❌ ${c.nom} — erreur : ${saveError.message}`);
    } else {
      console.log(`✅ ${c.nom} — plancher reconstruit et sauvegardé.`);
      fixed++;
    }
  }

  console.log(`\n🏁 Terminé : ${fixed} réparés, ${skipped} ignorés.`);
  if (DRY_RUN) {
    console.log('⚠️  Mode dry-run — aucune modification en base. Relancer sans --dry-run pour appliquer.');
  }
}

main().catch(console.error);
