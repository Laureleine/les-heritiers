// scripts/create_newspaper_tables.js
const { Client } = require('pg');
require('dotenv').config();

const connectionString = process.env.SUPABASE_DB_URL;

if (!connectionString) {
  console.error("❌ La variable d'environnement SUPABASE_DB_URL est manquante dans le fichier .env");
  process.exit(1);
}

const client = new Client({ connectionString });

const sql = `
-- 1. Table des articles de presse
CREATE TABLE IF NOT EXISTS public.journal_articles (
    id SERIAL PRIMARY KEY,
    article_index INT NOT NULL,
    date DATE NOT NULL,
    page INT NOT NULL,
    category VARCHAR(255),
    title TEXT NOT NULL,
    summary TEXT,
    paragraphs JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    CONSTRAINT unique_date_article_index UNIQUE (date, article_index)
);

-- 2. Table des événements chronologiques
CREATE TABLE IF NOT EXISTS public.historical_events (
    date DATE PRIMARY KEY,
    paris TEXT,
    france TEXT,
    monde TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Activation RLS
ALTER TABLE public.journal_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.historical_events ENABLE ROW LEVEL SECURITY;

-- 4. Suppression des anciennes politiques si existantes pour éviter les doublons
DROP POLICY IF EXISTS "Allow public select for journal_articles" ON public.journal_articles;
DROP POLICY IF EXISTS "Allow public select for historical_events" ON public.historical_events;

-- 5. Création des politiques d'accès en lecture publique
CREATE POLICY "Allow public select for journal_articles" ON public.journal_articles
    FOR SELECT TO public USING (true);

CREATE POLICY "Allow public select for historical_events" ON public.historical_events
    FOR SELECT TO public USING (true);
`;

async function main() {
  try {
    console.log("🔌 Connexion à PostgreSQL...");
    await client.connect();
    console.log("⚙️ Création des tables de la Gazette (1899)...");
    await client.query(sql);
    console.log("🎉 Tables public.journal_articles et public.historical_events créées avec succès !");
  } catch (err) {
    console.error("❌ Une erreur est survenue lors de l'exécution :", err);
  } finally {
    await client.end();
  }
}

main();
