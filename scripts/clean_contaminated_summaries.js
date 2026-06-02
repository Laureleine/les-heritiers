require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('❌ Variables de configuration manquantes');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

function cleanSummary(summary) {
  if (!summary || typeof summary !== 'string') return summary;

  // 1) Enlever les lignes qui ne contiennent QUE des métadonnées (// Date: ... ou // Restauration Pass: ...)
  //    Ces lignes se terminent par un saut de ligne — le vrai résumé est sur la ligne suivante.
  let cleaned = summary
    .split('\n')
    .filter(line => !line.match(/^\s*\/\/\s*(Date|Restauration\s+Pass)/))
    .join('\n');

  // 2) Nettoyer le cas où les métadonnées sont sur la MÊME ligne que le résumé
  //    Format: "// Date: 1899-11-27 // Restauration Pass: 1 Vrai résumé ici."
  cleaned = cleaned.replace(/^\/\/\s*Date:\s*\S+\s*\/\/\s*Restauration\s+Pass:\s*\d+[.\s]*/i, '');
  cleaned = cleaned.replace(/^\/\/\s*Date:\s*\S+\s*/i, '');
  cleaned = cleaned.replace(/^\/\/\s*Restauration\s+Pass:\s*\d+[.\s]*/i, '');

  // Si après nettoyage il ne reste que de la ponctuation ou vide, retourner null
  cleaned = cleaned.trim();
  if (!cleaned || cleaned === '.' || cleaned === '…') return null;

  return cleaned;
}

async function run() {
  console.log('🔍 Recherche des articles contaminés...\n');

  const { data: articles, error } = await supabase
    .from('journal_articles')
    .select('id, date, title, summary')
    .ilike('summary', '%// Date:%')
    .order('date');

  if (error) {
    console.error('❌ Erreur requête :', error.message);
    process.exit(1);
  }

  if (!articles || articles.length === 0) {
    console.log('✅ Aucun article contaminé trouvé.');
    return;
  }

  console.log(`📋 ${articles.length} articles contaminés trouvés.\n`);

  let fixCount = 0;
  let emptyCount = 0;

  for (const article of articles) {
    const originalSummary = article.summary;
    const cleaned = cleanSummary(originalSummary);

    if (cleaned === originalSummary) continue; // Pas de changement

    if (cleaned === null) {
      // Plus de résumé après nettoyage → on utilise le titre comme fallback
      const fallback = `Article du ${article.date} — ${article.title}`;
      console.log(`  ⚠️  [#${article.id}] ${article.date} — "${article.title?.slice(0, 60)}"`);
      console.log(`      Résumé perdu, fallback → "${fallback.slice(0, 80)}..."`);
      const { error: upErr } = await supabase
        .from('journal_articles')
        .update({ summary: fallback })
        .eq('id', article.id);
      if (upErr) console.error(`      ❌ ${upErr.message}`);
      else emptyCount++;
    } else {
      console.log(`  ✅ [#${article.id}] ${article.date} — ${article.title?.slice(0, 50)}`);
      const { error: upErr } = await supabase
        .from('journal_articles')
        .update({ summary: cleaned })
        .eq('id', article.id);
      if (upErr) console.error(`      ❌ ${upErr.message}`);
      else fixCount++;
    }
  }

  console.log(`\n🌟 Terminé : ${fixCount} résumés nettoyés, ${emptyCount} remplacés par fallback.`);
}

run();
