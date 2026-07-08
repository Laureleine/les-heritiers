// scripts/migrate_chroniques.js
// Migration : Chroniques d'Héritage + Conséquences de l'Ombre
const { Client } = require('pg');
require('dotenv').config();

async function migrate() {
  const client = new Client({ connectionString: process.env.SUPABASE_DB_URL });
  await client.connect();
  console.log('🔗 Connexion établie...');

  try {
    // ── Tables ──────────────────────────────────────────────────────────────
    await client.query(`
      CREATE TABLE IF NOT EXISTS public.chroniques_heritiers (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        character_id UUID NOT NULL REFERENCES public.characters(id) ON DELETE CASCADE,
        session_id    UUID REFERENCES public.sessions_jeu(id) ON DELETE SET NULL,
        titre         TEXT NOT NULL,
        date_session  DATE NOT NULL DEFAULT CURRENT_DATE,
        memoire_des_faits      TEXT,
        cicatrices_et_honneurs TEXT,
        indices_et_verites     JSONB NOT NULL DEFAULT '[]',
        xp_acquis     INTEGER NOT NULL DEFAULT 0,
        created_by    UUID NOT NULL REFERENCES auth.users(id),
        created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

      ALTER TABLE public.chroniques_heritiers ENABLE ROW LEVEL SECURITY;

      CREATE TABLE IF NOT EXISTS public.ombre_consequences (
        id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        character_id UUID NOT NULL REFERENCES public.characters(id) ON DELETE CASCADE,
        cercle_id    UUID NOT NULL REFERENCES public.cercles(id) ON DELETE CASCADE,
        session_id   UUID REFERENCES public.sessions_jeu(id) ON DELETE SET NULL,
        contenu      TEXT NOT NULL,
        est_revelee  BOOLEAN NOT NULL DEFAULT false,
        revelee_at   TIMESTAMPTZ,
        created_by   UUID NOT NULL REFERENCES auth.users(id),
        created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

      ALTER TABLE public.ombre_consequences ENABLE ROW LEVEL SECURITY;
    `);
    console.log('✓ Tables créées');

    // ── RLS chroniques_heritiers ─────────────────────────────────────────────
    // SELECT : propriétaire OU Docte d'un cercle dont le joueur est membre
    await client.query(`
      DROP POLICY IF EXISTS "chroniques_select" ON public.chroniques_heritiers;
      CREATE POLICY "chroniques_select" ON public.chroniques_heritiers FOR SELECT
        USING (
          created_by = auth.uid()
          OR EXISTS (
            SELECT 1 FROM public.cercles c
            INNER JOIN public.cercle_membres cm ON cm.cercle_id = c.id
            INNER JOIN public.characters ch ON ch.id = chroniques_heritiers.character_id
            WHERE c.docte_id = auth.uid()
              AND cm.user_id = ch.user_id
          )
        );
    `);

    await client.query(`
      DROP POLICY IF EXISTS "chroniques_insert" ON public.chroniques_heritiers;
      CREATE POLICY "chroniques_insert" ON public.chroniques_heritiers FOR INSERT
        WITH CHECK (created_by = auth.uid());
    `);

    await client.query(`
      DROP POLICY IF EXISTS "chroniques_update" ON public.chroniques_heritiers;
      CREATE POLICY "chroniques_update" ON public.chroniques_heritiers FOR UPDATE
        USING (created_by = auth.uid());
    `);

    await client.query(`
      DROP POLICY IF EXISTS "chroniques_delete" ON public.chroniques_heritiers;
      CREATE POLICY "chroniques_delete" ON public.chroniques_heritiers FOR DELETE
        USING (created_by = auth.uid());
    `);
    console.log('✓ RLS chroniques_heritiers');

    // ── RLS ombre_consequences ───────────────────────────────────────────────
    // SELECT : auteur (Docte) OU propriétaire du personnage si est_revelee = true
    await client.query(`
      DROP POLICY IF EXISTS "ombre_select" ON public.ombre_consequences;
      CREATE POLICY "ombre_select" ON public.ombre_consequences FOR SELECT
        USING (
          created_by = auth.uid()
          OR (
            est_revelee = true
            AND EXISTS (
              SELECT 1 FROM public.characters ch
              WHERE ch.id = ombre_consequences.character_id
                AND ch.user_id = auth.uid()
            )
          )
        );
    `);

    // INSERT : seul un Docte du cercle concerné peut écrire
    await client.query(`
      DROP POLICY IF EXISTS "ombre_insert" ON public.ombre_consequences;
      CREATE POLICY "ombre_insert" ON public.ombre_consequences FOR INSERT
        WITH CHECK (
          created_by = auth.uid()
          AND EXISTS (
            SELECT 1 FROM public.cercles c
            WHERE c.id = ombre_consequences.cercle_id
              AND c.docte_id = auth.uid()
          )
        );
    `);

    await client.query(`
      DROP POLICY IF EXISTS "ombre_update" ON public.ombre_consequences;
      CREATE POLICY "ombre_update" ON public.ombre_consequences FOR UPDATE
        USING (created_by = auth.uid());
    `);

    await client.query(`
      DROP POLICY IF EXISTS "ombre_delete" ON public.ombre_consequences;
      CREATE POLICY "ombre_delete" ON public.ombre_consequences FOR DELETE
        USING (created_by = auth.uid());
    `);
    console.log('✓ RLS ombre_consequences');

    // ── RPC reveal_ombre_consequence ─────────────────────────────────────────
    await client.query(`
      CREATE OR REPLACE FUNCTION public.reveal_ombre_consequence(p_consequence_id UUID)
      RETURNS JSONB
      LANGUAGE plpgsql
      SECURITY DEFINER
      SET search_path = public
      AS $$
      DECLARE
        v_ombre    RECORD;
        v_char     RECORD;
        v_joueur_id UUID;
        v_docte_id  UUID;
        v_channel_id UUID;
        v_titre_chronique TEXT;
      BEGIN
        v_docte_id := auth.uid();

        SELECT * INTO v_ombre FROM public.ombre_consequences WHERE id = p_consequence_id;
        IF NOT FOUND THEN RAISE EXCEPTION 'Conséquence introuvable'; END IF;
        IF v_ombre.created_by <> v_docte_id THEN RAISE EXCEPTION 'Non autorisé'; END IF;
        IF v_ombre.est_revelee THEN RAISE EXCEPTION 'Déjà révélée'; END IF;

        SELECT ch.*, u.id AS joueur_id INTO v_char
        FROM public.characters ch
        INNER JOIN auth.users u ON u.id = ch.user_id
        WHERE ch.id = v_ombre.character_id;

        IF NOT FOUND THEN RAISE EXCEPTION 'Personnage introuvable'; END IF;
        v_joueur_id := v_char.joueur_id;

        -- Titre de la session si dispo
        SELECT titre INTO v_titre_chronique
        FROM public.sessions_jeu
        WHERE id = v_ombre.session_id
        LIMIT 1;

        -- Révèle
        UPDATE public.ombre_consequences
          SET est_revelee = true, revelee_at = NOW()
        WHERE id = p_consequence_id;

        -- Trouve ou crée le canal privé Docte ↔ Joueur
        SELECT id INTO v_channel_id FROM public.chat_channels
        WHERE type = 'private'
          AND (
            (participant_1 = v_docte_id AND participant_2 = v_joueur_id)
            OR (participant_1 = v_joueur_id AND participant_2 = v_docte_id)
          )
        LIMIT 1;

        IF v_channel_id IS NULL THEN
          DECLARE v_username TEXT;
          BEGIN
            SELECT username INTO v_username FROM public.profiles WHERE id = v_joueur_id;
            INSERT INTO public.chat_channels (type, name, participant_1, participant_2, last_message_at)
            VALUES (
              'private',
              COALESCE('Correspondance avec ' || v_username, 'Canal privé'),
              v_docte_id,
              v_joueur_id,
              NOW()
            )
            RETURNING id INTO v_channel_id;
          END;
        END IF;

        -- Message Télégraphe
        INSERT INTO public.chat_messages (channel_id, user_id, message, is_admin)
        VALUES (
          v_channel_id,
          v_docte_id,
          '🌑 Une Conséquence de l''Ombre vient d''être révélée'
            || CASE WHEN v_titre_chronique IS NOT NULL THEN ' pour la session « ' || v_titre_chronique || ' »' ELSE '' END
            || '. Consultez vos Chroniques d''Héritage pour en lire le détail.',
          false
        );

        UPDATE public.chat_channels SET last_message_at = NOW() WHERE id = v_channel_id;

        RETURN jsonb_build_object('success', true, 'channel_id', v_channel_id);
      END;
      $$;
    `);
    console.log('✓ RPC reveal_ombre_consequence');

    console.log('\n✅ Migration chroniques_heritiers terminée !');
  } catch (err) {
    console.error('\n❌ Erreur :', err.message);
    process.exit(1);
  } finally {
    await client.end();
  }
}

migrate();
