// scripts/fix_rpc_xp_negative_valeur.js
// Corrige award_xp et distribute_session_xp :
// valeur = p_amount plantait sur les montants négatifs (contrainte xp_transaction_veleur_check).
// Fix : valeur = ABS(p_amount), le code différencie gain/retrait.
const { Client } = require('pg');
require('dotenv').config();

async function fix() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();
  console.log('✓ Connecté à la base de données');

  try {
    await client.query(`
      CREATE OR REPLACE FUNCTION public.award_xp(
        p_character_id uuid,
        p_amount integer,
        p_motif text DEFAULT ''
      ) RETURNS void
      LANGUAGE plpgsql
      SECURITY DEFINER
      SET search_path TO 'public'
      AS $$
      DECLARE
        v_user_id uuid;
        v_character_nom text;
      BEGIN
        SELECT user_id, nom INTO v_user_id, v_character_nom FROM characters WHERE id = p_character_id;
        IF NOT FOUND THEN
          RAISE EXCEPTION 'Personnage introuvable.';
        END IF;

        IF NOT EXISTS (
          SELECT 1 FROM cercle_membres cm
          JOIN cercles c ON c.id = cm.cercle_id
          WHERE cm.character_id = p_character_id AND c.docte_id = auth.uid()
        ) THEN
          RAISE EXCEPTION 'Seul le Docte du Cercle peut attribuer des XP à cet Héritier.';
        END IF;

        IF p_amount = 0 THEN RETURN; END IF;

        UPDATE characters SET xp_total = xp_total + p_amount WHERE id = p_character_id;

        INSERT INTO xp_transactions (character_id, type, code, label, valeur, date_mouvement)
        VALUES (
          p_character_id,
          'GAIN',
          CASE WHEN p_amount > 0 THEN 'XP_GAIN' ELSE 'XP_AJUSTEMENT' END,
          p_motif,
          ABS(p_amount),
          NOW()
        );
      END;
      $$
    `);
    console.log('✓ award_xp mis à jour (ABS + code XP_AJUSTEMENT pour retraits)');

    await client.query(`
      CREATE OR REPLACE FUNCTION public.distribute_session_xp(
        p_session_id    UUID,
        p_character_ids UUID[],
        p_amount        INTEGER,
        p_label         TEXT DEFAULT ''
      ) RETURNS void
      LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public'
      AS $$
      DECLARE
        v_cercle_id UUID;
        v_char_id   UUID;
      BEGIN
        SELECT cercle_id INTO v_cercle_id FROM sessions_jeu WHERE id = p_session_id;
        IF NOT FOUND THEN RAISE EXCEPTION 'Session introuvable.'; END IF;

        IF NOT (
          EXISTS (SELECT 1 FROM cercle_membres WHERE cercle_id = v_cercle_id AND user_id = auth.uid())
          OR EXISTS (SELECT 1 FROM cercles WHERE id = v_cercle_id AND docte_id = auth.uid())
        ) THEN
          RAISE EXCEPTION 'Accès refusé : vous n''êtes pas membre de ce Cercle.';
        END IF;

        IF p_amount = 0 THEN RETURN; END IF;

        FOREACH v_char_id IN ARRAY p_character_ids LOOP
          UPDATE characters SET xp_total = xp_total + p_amount WHERE id = v_char_id;
          INSERT INTO xp_transactions (character_id, type, code, label, valeur, date_mouvement)
          VALUES (
            v_char_id,
            'GAIN',
            CASE WHEN p_amount > 0 THEN 'SESSION_XP' ELSE 'SESSION_XP_CORRECTION' END,
            p_label,
            ABS(p_amount),
            NOW()
          );
        END LOOP;

        UPDATE sessions_jeu SET xp_attribue = true, updated_at = NOW() WHERE id = p_session_id;
      END;
      $$
    `);
    console.log('✓ distribute_session_xp mis à jour (ABS + code SESSION_XP_CORRECTION pour corrections négatives)');

    console.log('\n✅ Fix appliqué — retrait d\'XP par le Docte opérationnel.');
  } catch (err) {
    console.error('❌ Erreur :', err.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

fix();
