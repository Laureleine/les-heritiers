require('dotenv').config();
const { Client } = require('pg');

const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });

client.connect().then(async () => {
    console.log('✅ Connexion OK');

    // 1. Ajouter les colonnes de coût par défaut dans fairy_assets
    await client.query(`
        ALTER TABLE fairy_assets
            ADD COLUMN IF NOT EXISTS cost_xp        integer NOT NULL DEFAULT 0,
            ADD COLUMN IF NOT EXISTS cost_fortune   integer NOT NULL DEFAULT 0,
            ADD COLUMN IF NOT EXISTS cost_pp        jsonb   NOT NULL DEFAULT '{}',
            ADD COLUMN IF NOT EXISTS hide_effects_until_accepted boolean NOT NULL DEFAULT false
    `);
    console.log('✅ Colonnes ajoutées dans fairy_assets');

    // 2. Mettre à jour le RPC upsert_personal_fairy_asset pour inclure ces colonnes
    await client.query(`
        CREATE OR REPLACE FUNCTION upsert_personal_fairy_asset(p_id uuid, p_data jsonb)
        RETURNS jsonb
        LANGUAGE plpgsql
        SECURITY DEFINER
        SET search_path = public
        AS $$
        DECLARE
          v_existing fairy_assets%ROWTYPE;
          v_result   fairy_assets%ROWTYPE;
        BEGIN
          IF auth.uid() IS NULL THEN
            RAISE EXCEPTION 'Non authentifié';
          END IF;

          SELECT * INTO v_existing FROM fairy_assets WHERE id = p_id;

          IF FOUND THEN
            -- Modification : vérifier propriété et que la carte est encore personnelle
            IF v_existing.creator_id IS DISTINCT FROM auth.uid() THEN
              RAISE EXCEPTION 'Accès refusé : vous n''êtes pas le créateur de cette carte';
            END IF;
            IF v_existing.is_official = true THEN
              RAISE EXCEPTION 'Cette carte est officielle, la modification directe est bloquée';
            END IF;

            UPDATE fairy_assets SET
              nom              = COALESCE(p_data->>'nom',              nom),
              description      = CASE WHEN p_data ? 'description'
                                      THEN p_data->>'description'
                                      ELSE description END,
              effets           = COALESCE(p_data->>'effets',           effets),
              effets_techniques = CASE WHEN p_data ? 'effets_techniques'
                                       THEN p_data->'effets_techniques'
                                       ELSE effets_techniques END,
              cost_xp          = CASE WHEN p_data ? 'cost_xp'
                                      THEN (p_data->>'cost_xp')::integer
                                      ELSE cost_xp END,
              cost_fortune     = CASE WHEN p_data ? 'cost_fortune'
                                      THEN (p_data->>'cost_fortune')::integer
                                      ELSE cost_fortune END,
              cost_pp          = CASE WHEN p_data ? 'cost_pp'
                                      THEN p_data->'cost_pp'
                                      ELSE cost_pp END,
              hide_effects_until_accepted = CASE WHEN p_data ? 'hide_effects_until_accepted'
                                                 THEN (p_data->>'hide_effects_until_accepted')::boolean
                                                 ELSE hide_effects_until_accepted END
            WHERE id = p_id
            RETURNING * INTO v_result;
          ELSE
            -- Création
            INSERT INTO fairy_assets (
              id, nom, description, effets, effets_techniques,
              creator_id, is_official, is_sealed,
              cost_xp, cost_fortune, cost_pp, hide_effects_until_accepted
            )
            VALUES (
              p_id,
              p_data->>'nom',
              p_data->>'description',
              p_data->>'effets',
              p_data->'effets_techniques',
              auth.uid(),
              false,
              false,
              COALESCE((p_data->>'cost_xp')::integer,   0),
              COALESCE((p_data->>'cost_fortune')::integer, 0),
              COALESCE(p_data->'cost_pp', '{}'),
              COALESCE((p_data->>'hide_effects_until_accepted')::boolean, false)
            )
            RETURNING * INTO v_result;
          END IF;

          RETURN row_to_json(v_result)::jsonb;
        END;
        $$;
    `);
    console.log('✅ RPC upsert_personal_fairy_asset mis à jour');

    await client.end();
    console.log('🎉 Migration terminée');
}).catch(e => {
    console.error('❌ Erreur :', e.message);
    client.end();
    process.exit(1);
});
