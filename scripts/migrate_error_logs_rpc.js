require('dotenv').config();
const { Client } = require('pg');
const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

async function main() {
    await client.connect();

    // Fonction RPC pour l'upsert complet avec incrément atomique
    await client.query(`
        CREATE OR REPLACE FUNCTION upsert_error_log(
            p_type            TEXT,
            p_message         TEXT,
            p_stack           TEXT,
            p_component_stack TEXT,
            p_fingerprint     TEXT,
            p_user_id         UUID,
            p_character_id    UUID,
            p_cercle_id       UUID,
            p_url             TEXT,
            p_user_agent      TEXT,
            p_extra           JSONB
        ) RETURNS void
        LANGUAGE plpgsql SECURITY DEFINER AS $$
        BEGIN
            INSERT INTO error_logs (
                type, message, stack, component_stack, fingerprint,
                user_id, character_id, cercle_id, url, user_agent, extra,
                occurrence_count, last_seen_at, created_at
            ) VALUES (
                p_type, p_message, p_stack, p_component_stack, p_fingerprint,
                p_user_id, p_character_id, p_cercle_id, p_url, p_user_agent, p_extra,
                1, now(), now()
            )
            ON CONFLICT (fingerprint) DO UPDATE SET
                occurrence_count = error_logs.occurrence_count + 1,
                last_seen_at     = now(),
                -- Met à jour le contexte avec la dernière occurrence
                user_id          = COALESCE(p_user_id, error_logs.user_id),
                character_id     = COALESCE(p_character_id, error_logs.character_id),
                cercle_id        = COALESCE(p_cercle_id, error_logs.cercle_id),
                url              = p_url,
                extra            = COALESCE(p_extra, error_logs.extra);
        END;
        $$;
    `);
    console.log('✓ Fonction upsert_error_log créée');

    await client.end();
    console.log('✅ Migration RPC terminée.');
}

main().catch(e => { console.error(e); process.exit(1); });
