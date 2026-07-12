// scripts/migrate_sessions_jeu.js
// Crée les tables sessions_jeu et session_presents avec RLS + RPC distribute_session_xp
const { Client } = require('pg');
require('dotenv').config();

async function migrate() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();
  console.log('✓ Connecté à la base de données');

  try {
    // ─── Tables ────────────────────────────────────────────────────────────────

    await client.query(`
      CREATE TABLE IF NOT EXISTS public.sessions_jeu (
        id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
        cercle_id    UUID        NOT NULL REFERENCES public.cercles(id) ON DELETE CASCADE,
        titre        TEXT        NOT NULL,
        date_partie  DATE        NOT NULL DEFAULT CURRENT_DATE,
        resume       TEXT,
        xp_distribue INTEGER     NOT NULL DEFAULT 0,
        is_public    BOOLEAN     NOT NULL DEFAULT false,
        xp_auto      BOOLEAN     NOT NULL DEFAULT true,
        xp_scope     TEXT        NOT NULL DEFAULT 'membres' CHECK (xp_scope IN ('membres', 'presents')),
        xp_attribue  BOOLEAN     NOT NULL DEFAULT false,
        created_by   UUID        NOT NULL REFERENCES auth.users(id),
        created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `);
    console.log('✓ Table sessions_jeu créée');

    await client.query(`
      CREATE TABLE IF NOT EXISTS public.session_presents (
        id           UUID    PRIMARY KEY DEFAULT gen_random_uuid(),
        session_id   UUID    NOT NULL REFERENCES public.sessions_jeu(id) ON DELETE CASCADE,
        character_id UUID    NOT NULL REFERENCES public.characters(id) ON DELETE CASCADE,
        present      BOOLEAN NOT NULL DEFAULT true,
        UNIQUE(session_id, character_id)
      )
    `);
    console.log('✓ Table session_presents créée');

    // ─── RLS sessions_jeu ──────────────────────────────────────────────────────

    await client.query('ALTER TABLE public.sessions_jeu ENABLE ROW LEVEL SECURITY');

    const policiesSessions = [
      {
        name: 'sessions_jeu_select',
        sql: `CREATE POLICY sessions_jeu_select ON public.sessions_jeu FOR SELECT USING (
          is_public = true
          OR EXISTS (SELECT 1 FROM public.cercles c WHERE c.id = sessions_jeu.cercle_id AND c.docte_id = auth.uid())
          OR EXISTS (SELECT 1 FROM public.cercle_membres cm WHERE cm.cercle_id = sessions_jeu.cercle_id AND cm.user_id = auth.uid())
        )`,
      },
      {
        name: 'sessions_jeu_insert',
        sql: `CREATE POLICY sessions_jeu_insert ON public.sessions_jeu FOR INSERT WITH CHECK (
          created_by = auth.uid()
          AND (
            EXISTS (SELECT 1 FROM public.cercles c WHERE c.id = sessions_jeu.cercle_id AND c.docte_id = auth.uid())
            OR EXISTS (SELECT 1 FROM public.cercle_membres cm WHERE cm.cercle_id = sessions_jeu.cercle_id AND cm.user_id = auth.uid())
          )
        )`,
      },
      {
        name: 'sessions_jeu_update',
        sql: `CREATE POLICY sessions_jeu_update ON public.sessions_jeu FOR UPDATE USING (
          created_by = auth.uid()
          OR EXISTS (SELECT 1 FROM public.cercles c WHERE c.id = sessions_jeu.cercle_id AND c.docte_id = auth.uid())
        )`,
      },
      {
        name: 'sessions_jeu_delete',
        sql: `CREATE POLICY sessions_jeu_delete ON public.sessions_jeu FOR DELETE USING (
          created_by = auth.uid()
          OR EXISTS (SELECT 1 FROM public.cercles c WHERE c.id = sessions_jeu.cercle_id AND c.docte_id = auth.uid())
        )`,
      },
    ];

    for (const { name, sql } of policiesSessions) {
      await client.query(`DROP POLICY IF EXISTS ${name} ON public.sessions_jeu`);
      await client.query(sql);
    }
    console.log('✓ RLS sessions_jeu configuré (4 policies)');

    // ─── RLS session_presents ──────────────────────────────────────────────────

    await client.query('ALTER TABLE public.session_presents ENABLE ROW LEVEL SECURITY');

    const canSeeSession = `EXISTS (
      SELECT 1 FROM public.sessions_jeu sj
      WHERE sj.id = session_presents.session_id
        AND (
          sj.is_public = true
          OR sj.created_by = auth.uid()
          OR EXISTS (SELECT 1 FROM public.cercles c WHERE c.id = sj.cercle_id AND c.docte_id = auth.uid())
          OR EXISTS (SELECT 1 FROM public.cercle_membres cm WHERE cm.cercle_id = sj.cercle_id AND cm.user_id = auth.uid())
        )
    )`;

    const isCreatorOrDocte = `EXISTS (
      SELECT 1 FROM public.sessions_jeu sj
      JOIN public.cercles c ON c.id = sj.cercle_id
      WHERE sj.id = session_presents.session_id
        AND (sj.created_by = auth.uid() OR c.docte_id = auth.uid())
    )`;

    const policiesPresents = [
      { name: 'session_presents_select', sql: `CREATE POLICY session_presents_select ON public.session_presents FOR SELECT USING (${canSeeSession})` },
      { name: 'session_presents_insert', sql: `CREATE POLICY session_presents_insert ON public.session_presents FOR INSERT WITH CHECK (${isCreatorOrDocte})` },
      { name: 'session_presents_update', sql: `CREATE POLICY session_presents_update ON public.session_presents FOR UPDATE USING (${isCreatorOrDocte})` },
      { name: 'session_presents_delete', sql: `CREATE POLICY session_presents_delete ON public.session_presents FOR DELETE USING (${isCreatorOrDocte})` },
    ];

    for (const { name, sql } of policiesPresents) {
      await client.query(`DROP POLICY IF EXISTS ${name} ON public.session_presents`);
      await client.query(sql);
    }
    console.log('✓ RLS session_presents configuré (4 policies)');

    // ─── RPC distribute_session_xp ─────────────────────────────────────────────

    await client.query(`
      CREATE OR REPLACE FUNCTION public.distribute_session_xp(
        p_session_id  UUID,
        p_character_ids UUID[],
        p_amount      INTEGER,
        p_label       TEXT DEFAULT ''
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

    await client.query(`
      REVOKE EXECUTE ON FUNCTION public.distribute_session_xp(UUID, UUID[], INTEGER, TEXT) FROM PUBLIC;
      GRANT  EXECUTE ON FUNCTION public.distribute_session_xp(UUID, UUID[], INTEGER, TEXT) TO authenticated;
    `);
    console.log('✓ RPC distribute_session_xp créé');

    console.log('\n✅ Migration sessions_jeu terminée !');
  } catch (err) {
    console.error('❌ Erreur :', err.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

migrate();
