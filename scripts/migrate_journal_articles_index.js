// Migration : index partiel sur journal_articles(date) pour get_article_dates
// La requête SELECT DISTINCT date WHERE category NOT IN ('Météo','Lune','Meteo')
// scannait 79k+ lignes sans index sur category. L'index partiel réduit le scan
// aux seules lignes pertinentes.
require("dotenv").config();
const { Client } = require("pg");
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
client.connect().then(async () => {
  console.log("Création de l'index (peut prendre quelques secondes sur 79k lignes)...");
  await client.query(`
    CREATE INDEX IF NOT EXISTS idx_journal_articles_date_non_meteo
    ON journal_articles (date)
    WHERE category NOT IN ('Météo', 'Lune', 'Meteo')
  `);
  console.log("✓ Index idx_journal_articles_date_non_meteo créé");

  // Vérification
  const { rows } = await client.query(`
    SELECT indexname FROM pg_indexes
    WHERE tablename = 'journal_articles' AND indexname = 'idx_journal_articles_date_non_meteo'
  `);
  console.log(rows.length > 0 ? "✅ Migration appliquée avec succès." : "❌ Index absent après création !");
  client.end();
}).catch(e => { console.error("❌ Erreur :", e.message); process.exit(1); });
