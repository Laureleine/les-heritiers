require('dotenv').config();
const { Client } = require('pg');
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

async function main() {
    await client.connect();

    await client.query(`
        CREATE TABLE IF NOT EXISTS error_logs (
            id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id          UUID REFERENCES auth.users(id) ON DELETE SET NULL,
            type             TEXT NOT NULL CHECK (type IN ('crash', 'error', 'warn', 'unhandled_promise')),
            message          TEXT NOT NULL,
            stack            TEXT,
            component_stack  TEXT,
            url              TEXT,
            user_agent       TEXT,
            character_id     UUID,
            cercle_id        UUID,
            extra            JSONB,
            fingerprint      TEXT NOT NULL,
            occurrence_count INT NOT NULL DEFAULT 1,
            last_seen_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
            transmitted_at   TIMESTAMPTZ,
            resolved_at      TIMESTAMPTZ,
            created_at       TIMESTAMPTZ NOT NULL DEFAULT now()
        );
    `);
    console.log('✓ Table error_logs créée');

    await client.query(`
        CREATE UNIQUE INDEX IF NOT EXISTS error_logs_fingerprint_idx ON error_logs (fingerprint);
    `);
    console.log('✓ Index fingerprint créé');

    await client.query(`
        CREATE INDEX IF NOT EXISTS error_logs_created_at_idx ON error_logs (created_at DESC);
    `);
    console.log('✓ Index created_at créé');

    // RLS
    await client.query(`ALTER TABLE error_logs ENABLE ROW LEVEL SECURITY;`);

    await client.query(`
        DROP POLICY IF EXISTS "error_logs_insert" ON error_logs;
        CREATE POLICY "error_logs_insert" ON error_logs
            FOR INSERT TO authenticated
            WITH CHECK (true);
    `);
    console.log('✓ Policy INSERT (tout utilisateur authentifié)');

    await client.query(`
        DROP POLICY IF EXISTS "error_logs_select_admin" ON error_logs;
        CREATE POLICY "error_logs_select_admin" ON error_logs
            FOR SELECT TO authenticated
            USING (
                EXISTS (
                    SELECT 1 FROM profiles
                    WHERE profiles.id = auth.uid()
                    AND profiles.role IN ('super_admin', 'gardien')
                )
            );
    `);
    console.log('✓ Policy SELECT (admins uniquement)');

    await client.query(`
        DROP POLICY IF EXISTS "error_logs_update_admin" ON error_logs;
        CREATE POLICY "error_logs_update_admin" ON error_logs
            FOR UPDATE TO authenticated
            USING (
                EXISTS (
                    SELECT 1 FROM profiles
                    WHERE profiles.id = auth.uid()
                    AND profiles.role IN ('super_admin', 'gardien')
                )
            );
    `);
    console.log('✓ Policy UPDATE (admins uniquement)');

    await client.end();
    console.log('\n✅ Migration error_logs terminée.');
}

main().catch(e => { console.error(e); process.exit(1); });
