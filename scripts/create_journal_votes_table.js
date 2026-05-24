// scripts/create_journal_votes_table.js
const { Client } = require('pg');
require('dotenv').config();

const connectionString = process.env.SUPABASE_DB_URL;

if (!connectionString) {
  console.error("❌ La variable d'environnement SUPABASE_DB_URL est manquante dans le fichier .env");
  process.exit(1);
}

const client = new Client({ connectionString });

const sql = `
-- 1. Table des votes pour les journées à charger
CREATE TABLE IF NOT EXISTS public.journal_votes (
    date DATE PRIMARY KEY,
    votes_count INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Activation RLS
ALTER TABLE public.journal_votes ENABLE ROW LEVEL SECURITY;

-- 3. Suppression des anciennes politiques si existantes
DROP POLICY IF EXISTS "Allow public select for journal_votes" ON public.journal_votes;
DROP POLICY IF EXISTS "Allow public insert for journal_votes" ON public.journal_votes;
DROP POLICY IF EXISTS "Allow public update for journal_votes" ON public.journal_votes;

-- 4. Création des politiques d'accès publique
CREATE POLICY "Allow public select for journal_votes" ON public.journal_votes
    FOR SELECT TO public USING (true);

CREATE POLICY "Allow public insert for journal_votes" ON public.journal_votes
    FOR INSERT TO public WITH CHECK (true);

CREATE POLICY "Allow public update for journal_votes" ON public.journal_votes
    FOR UPDATE TO public USING (true) WITH CHECK (true);
`;

async function main() {
  try {
    console.log("🔌 Connexion à PostgreSQL...");
    await client.connect();
    console.log("⚙️ Création de la table public.journal_votes...");
    await client.query(sql);
    console.log("🎉 Table public.journal_votes créée avec succès !");
  } catch (err) {
    console.error("❌ Une erreur est survenue lors de l'exécution :", err);
  } finally {
    await client.end();
  }
}

main();
