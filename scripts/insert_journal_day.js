// scripts/insert_journal_day.js
const fs = require('fs');
const path = require('path');
const { Client } = require('pg');
require('dotenv').config();

const connectionString = process.env.SUPABASE_DB_URL;
if (!connectionString) {
  console.error("❌ La variable d'environnement SUPABASE_DB_URL est manquante dans .env");
  process.exit(1);
}

// Fonction utilitaire pour extraire le JSON d'un fichier JS
function extractJsonFromJsFileContent(content, varName) {
  try {
    // ✨ Précision : Supprime uniquement les lignes de commentaires (qui commencent par //)
    // sans toucher aux chaînes de caractères contenant des double-slashs (ex: "summary": "// Date:...")
    let clean = content.replace(/^\s*\/\/.*/gm, '').trim();
    const regex = new RegExp(`const\\s+${varName}\\s*=`);
    const match = clean.match(regex);
    if (!match) return null;
    const startIndex = match.index + match[0].length;
    let jsonStr = clean.substring(startIndex).trim();
    if (jsonStr.endsWith(';')) {
      jsonStr = jsonStr.substring(0, jsonStr.length - 1).trim();
    }
    
    return JSON.parse(jsonStr);
  } catch (e) {
    console.error(`❌ Erreur lors de l'extraction de la variable ${varName} :`, e);
    return null;
  }
}

// --- Connexion PostgreSQL ---
async function getDbClient() {
  const client = new Client({ connectionString });
  await client.connect();
  return client;
}

// --- Importation d'une date spécifique ---
async function importDay(client, dateStr) {
  console.log(`\n⏳ Début de l'importation en base de données pour la date : ${dateStr}...`);
  
  // 1. Lire et importer les articles de presse
  let articlesPath = path.join(__dirname, '..', '1899', 'output', `journal_data_${dateStr}.js`);
  if (!fs.existsSync(articlesPath)) {
    // Fallbacks possibles
    if (dateStr === '1899-11-26' || dateStr === '1899-11-27') {
      articlesPath = path.join(__dirname, '..', '1899', 'output', `journal_data.js`);
    }
  }

  if (fs.existsSync(articlesPath)) {
    const content = fs.readFileSync(articlesPath, 'utf8');
    const articles = extractJsonFromJsFileContent(content, 'JOURNAL_ARTICLES');
    
    if (articles && Array.isArray(articles)) {
      console.log(`📰 ${articles.length} articles trouvés. Insertion / Mise à jour dans public.journal_articles...`);
      
      const query = `
        INSERT INTO public.journal_articles (article_index, date, page, category, title, summary, paragraphs)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (date, article_index)
        DO UPDATE SET
          page = EXCLUDED.page,
          category = EXCLUDED.category,
          title = EXCLUDED.title,
          summary = EXCLUDED.summary,
          paragraphs = EXCLUDED.paragraphs;
      `;

      for (const art of articles) {
        // Enlève l'id d'origine pour éviter les conflits et utilise l'index de l'article pour le conflit unique
        const index = art.id;
        const page = art.page;
        const category = art.category || 'Actualités';
        const title = art.title || 'Sans titre';
        const summary = art.summary || '';
        const paragraphs = JSON.stringify(art.paragraphs || []);
        
        await client.query(query, [index, dateStr, page, category, title, summary, paragraphs]);
      }
      console.log(`✅ Articles importés avec succès !`);
    } else {
      console.log(`⚠️ Fichier d'articles trouvé mais format non valide.`);
    }
  } else {
    console.log(`⚠️ Aucun fichier d'articles trouvé pour le ${dateStr} à l'emplacement : ${articlesPath}`);
  }

  // 2. Lire et importer l'événement du jour
  let dayEvent = null;
  const eventDayPath = path.join(__dirname, '..', '1899', 'output', `event_day_${dateStr}.json`);
  if (fs.existsSync(eventDayPath)) {
    try {
      const content = fs.readFileSync(eventDayPath, 'utf8');
      dayEvent = JSON.parse(content);
      console.log(`🏛️ Événements historiques individuels trouvés pour le ${dateStr} dans ${eventDayPath}.`);
    } catch (e) {
      console.error(`❌ Erreur lors du chargement de event_day_${dateStr}.json :`, e);
    }
  }

  if (!dayEvent) {
    const eventsPath = path.join(__dirname, '..', '1899', 'output', 'events_data.js');
    if (fs.existsSync(eventsPath)) {
      const content = fs.readFileSync(eventsPath, 'utf8');
      const eventsMap = extractJsonFromJsFileContent(content, 'EVENTS_DATA');
      if (eventsMap && eventsMap[dateStr]) {
        dayEvent = eventsMap[dateStr];
        console.log(`🏛️ Événements historiques trouvés dans events_data.js pour le ${dateStr}.`);
      }
    }
  }

  if (dayEvent) {
    console.log(`🏛️ Insertion / Mise à jour dans public.historical_events pour le ${dateStr}...`);
    const query = `
      INSERT INTO public.historical_events (date, paris, france, monde)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (date)
      DO UPDATE SET
        paris = EXCLUDED.paris,
        france = EXCLUDED.france,
        monde = EXCLUDED.monde;
    `;
    await client.query(query, [dateStr, dayEvent.paris || '', dayEvent.france || '', dayEvent.monde || '']);
    console.log(`✅ Événements importés avec succès !`);
  } else {
    console.log(`⚠️ Aucun événement historique trouvé pour le ${dateStr}.`);
  }
}

// --- Importation complète de tout events_data.js ---
async function importAllEvents(client) {
  const eventsPath = path.join(__dirname, '..', '1899', 'output', 'events_data.js');
  if (!fs.existsSync(eventsPath)) {
    console.error("❌ Fichier events_data.js introuvable.");
    return;
  }

  const content = fs.readFileSync(eventsPath, 'utf8');
  const eventsMap = extractJsonFromJsFileContent(content, 'EVENTS_DATA');

  if (eventsMap) {
    console.log(`\n⚙️ Importation en masse de tous les événements de events_data.js...`);
    const query = `
      INSERT INTO public.historical_events (date, paris, france, monde)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT (date)
      DO UPDATE SET
        paris = EXCLUDED.paris,
        france = EXCLUDED.france,
        monde = EXCLUDED.monde;
    `;

    let count = 0;
    for (const [dateStr, ev] of Object.entries(eventsMap)) {
      await client.query(query, [dateStr, ev.paris || '', ev.france || '', ev.monde || '']);
      count++;
    }
    console.log(`✅ ${count} dates d'événements historiques importées !`);
  }
}

// --- Importation complète de tous les journaux générés ---
async function importBulk(client) {
  console.log("📂 Démarrage de l'importation globale (Bulk)...");
  
  // 1. Importer d'abord tous les événements
  await importAllEvents(client);

  // 2. Chercher tous les fichiers journal_data_*.js dans 1899/output/
  const outputDir = path.join(__dirname, '..', '1899', 'output');
  if (!fs.existsSync(outputDir)) {
    console.error("❌ Dossier 1899/output introuvable.");
    return;
  }

  const files = fs.readdirSync(outputDir);
  const journalFiles = files.filter(f => f.startsWith('journal_data_') && f.endsWith('.js'));
  
  console.log(`📁 ${journalFiles.length} fichiers d'articles quotidiens détectés.`);
  
  for (const file of journalFiles) {
    const match = file.match(/journal_data_(\d{4}-\d{2}-\d{2})\.js/);
    if (match) {
      const dateStr = match[1];
      await importDay(client, dateStr);
    }
  }

  // Fallback spécial pour journal_data.js (qui est le 1899-11-27 par défaut)
  if (fs.existsSync(path.join(outputDir, 'journal_data.js'))) {
    await importDay(client, '1899-11-27');
  }

  console.log("\n🎉 Importation globale (Bulk) terminée avec succès !");
}

// --- Point d'entrée principal ---
async function main() {
  const args = process.argv.slice(2);
  const isBulk = args.includes('--bulk');
  const dateArgIdx = args.indexOf('--date');
  const dateStr = dateArgIdx !== -1 ? args[dateArgIdx + 1] : null;

  if (!isBulk && !dateStr) {
    console.log("ℹ️ Usage :");
    console.log("  node scripts/insert_journal_day.js --date YYYY-MM-DD  (Importer un jour précis)");
    console.log("  node scripts/insert_journal_day.js --bulk            (Importer en masse toutes les données compilées)");
    process.exit(0);
  }

  let client;
  try {
    client = await getDbClient();
    if (isBulk) {
      await importBulk(client);
    } else {
      await importDay(client, dateStr);
    }
  } catch (err) {
    console.error("❌ Une erreur critique est survenue :", err);
  } finally {
    if (client) {
      await client.end();
    }
  }
}

main();
