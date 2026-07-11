// scripts/migrate_outil_usage.js
// Crée la table outil_usage pour tracer les utilisations des outils du Docte.
// Usage : node scripts/migrate_outil_usage.js
import 'dotenv/config';
import pg from 'pg';

const { Client } = pg;
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

async function run() {
    await client.connect();
    console.log('Connecté à la base.\n');

    await client.query(`
        CREATE TABLE IF NOT EXISTS public.outil_usage (
            id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
            outil      TEXT NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT now()
        );
    `);
    console.log('✓ Table outil_usage créée (ou déjà existante).');

    await client.query(`CREATE INDEX IF NOT EXISTS idx_outil_usage_outil ON public.outil_usage (outil, created_at);`);
    await client.query(`CREATE INDEX IF NOT EXISTS idx_outil_usage_user  ON public.outil_usage (user_id, created_at);`);
    console.log('✓ Index créés.');

    await client.query(`ALTER TABLE public.outil_usage ENABLE ROW LEVEL SECURITY;`);

    await client.query(`
        DO $$ BEGIN
            IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'outil_usage' AND policyname = 'Insert own usage') THEN
                CREATE POLICY "Insert own usage" ON public.outil_usage
                    FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
            END IF;
        END $$;
    `);
    await client.query(`
        DO $$ BEGIN
            IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'outil_usage' AND policyname = 'Read all usage') THEN
                CREATE POLICY "Read all usage" ON public.outil_usage
                    FOR SELECT TO authenticated USING (true);
            END IF;
        END $$;
    `);
    console.log('✓ RLS + policies créées.');

    await client.end();
    console.log('\nMigration outil_usage terminée.');
}

run().catch(err => { console.error(err); process.exit(1); });
