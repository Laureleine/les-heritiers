// scripts/create_holidays_tables.js
const { Client } = require('pg');
require('dotenv').config();

const connectionString = process.env.SUPABASE_DB_URL;

if (!connectionString) {
  console.error("❌ La variable d'environnement SUPABASE_DB_URL est manquante dans le fichier .env");
  process.exit(1);
}

const client = new Client({ connectionString });

const sql = `
-- Table des fêtes et traditions (journal)
CREATE TABLE IF NOT EXISTS public.journal_holidays (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL CHECK (type IN ('chrétien', 'celtique')),
    description TEXT,
    traditions TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.journal_holidays ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public select for journal_holidays" ON public.journal_holidays;

CREATE POLICY "Allow public select for journal_holidays" ON public.journal_holidays
    FOR SELECT TO public USING (true);
`;

async function main() {
  try {
    console.log("🔌 Connexion à PostgreSQL...");
    await client.connect();
    console.log("⚙️ Création de la table journal_holidays...");
    await client.query(sql);
    console.log("🎉 Table public.journal_holidays créée avec succès !");
  } catch (err) {
    console.error("❌ Une erreur est survenue :", err);
  } finally {
    await client.end();
  }
}

main();
