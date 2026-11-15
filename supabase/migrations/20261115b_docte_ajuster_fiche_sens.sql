-- v18.2.1 : le journal distingue retrait et ajout (DOCTE_RETRAIT / DOCTE_AJOUT) au lieu de DOCTE_AJUSTEMENT.
-- Ajustement d'une fiche par le Docte du cercle (spec : docs/superpowers/specs/2026-11-15-ajustements-sous-socle.md)
-- Le Docte n'a pas le droit UPDATE sur characters (RLS) : cette fonction vérifie
-- qu'il est docte_id d'un cercle contenant le personnage, puis applique l'ajustement,
-- abaisse/relève le socle de scellement, écrit le journal XP et la notification joueur.
--
-- p_kind     : 'carac' | 'comp' | 'futile' | 'fortune'
-- p_xp_mode  : 'aucun' (perte sèche / ajout offert) | 'rembourse' (retrait, XP rendue) | 'paye' (ajout payé par l'XP du joueur)
-- p_label    : description courte calculée par le client, ex. « Fortune 5 → 3 »

CREATE OR REPLACE FUNCTION public.docte_ajuster_fiche(
  p_character_id uuid,
  p_kind text,
  p_key text,
  p_new_value int,
  p_motif text,
  p_xp_mode text,
  p_xp_valeur int,
  p_label text
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_char characters%ROWTYPE;
  v_old int;
  v_socle_path text[];
  v_socle int;
  v_data jsonb;
  v_valeur int := GREATEST(0, LEAST(COALESCE(p_xp_valeur, 0), 1000));
  v_tx_type text;
  v_label text;
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM cercle_membres cm JOIN cercles c ON c.id = cm.cercle_id
    WHERE cm.character_id = p_character_id AND c.docte_id = auth.uid()
  ) THEN
    RAISE EXCEPTION 'Seul le Docte du cercle peut ajuster cette fiche';
  END IF;

  IF p_motif IS NULL OR btrim(p_motif) = '' THEN
    RAISE EXCEPTION 'Le motif est obligatoire';
  END IF;
  IF p_kind NOT IN ('carac', 'comp', 'futile', 'fortune') THEN
    RAISE EXCEPTION 'Type de valeur inconnu : %', p_kind;
  END IF;
  IF p_xp_mode NOT IN ('aucun', 'rembourse', 'paye') THEN
    RAISE EXCEPTION 'Mode XP inconnu : %', p_xp_mode;
  END IF;
  IF p_new_value < (CASE WHEN p_kind = 'carac' THEN 1 ELSE 0 END)
     OR (p_kind = 'fortune' AND p_new_value > 15) THEN
    RAISE EXCEPTION 'Valeur hors bornes : %', p_new_value;
  END IF;

  SELECT * INTO v_char FROM characters WHERE id = p_character_id FOR UPDATE;
  v_data := COALESCE(v_char.data, '{}'::jsonb);

  -- 1. Valeur actuelle + nouvelle valeur
  IF p_kind = 'carac' THEN
    v_old := COALESCE((v_char.caracteristiques ->> p_key)::int, 0);
    v_char.caracteristiques := COALESCE(v_char.caracteristiques, '{}'::jsonb) || jsonb_build_object(p_key, p_new_value);
    v_socle_path := ARRAY['caracteristiques', p_key];
  ELSIF p_kind = 'comp' THEN
    v_old := COALESCE((v_char.competences_libres -> 'rangs' ->> p_key)::int, 0);
    v_char.competences_libres := COALESCE(v_char.competences_libres, '{}'::jsonb)
      || jsonb_build_object('rangs', COALESCE(v_char.competences_libres -> 'rangs', '{}'::jsonb) || jsonb_build_object(p_key, p_new_value));
    v_socle_path := ARRAY['competencesLibres', 'rangs', p_key];
  ELSIF p_kind = 'futile' THEN
    v_old := COALESCE((v_char.competences_futiles -> 'rangs' ->> p_key)::int, 0);
    v_char.competences_futiles := COALESCE(v_char.competences_futiles, '{}'::jsonb)
      || jsonb_build_object('rangs', COALESCE(v_char.competences_futiles -> 'rangs', '{}'::jsonb) || jsonb_build_object(p_key, p_new_value));
    v_socle_path := ARRAY['competencesFutiles', 'rangs', p_key];
  ELSE
    v_old := COALESCE(v_char.fortune, 0);
    v_char.fortune := p_new_value;
    v_socle_path := ARRAY['fortune'];
  END IF;

  IF p_new_value = v_old THEN
    RAISE EXCEPTION 'Aucun changement';
  END IF;

  -- 2. Socle de scellement : suit une baisse ; un ajout offert le relève (non remboursable)
  IF v_data ? 'stats_scellees' THEN
    v_socle := COALESCE((v_data -> 'stats_scellees' #>> v_socle_path)::int, 0);
    IF (p_new_value < v_socle) OR (p_new_value > v_old AND p_xp_mode = 'aucun' AND p_new_value > v_socle) THEN
      IF p_kind IN ('comp', 'futile') AND NOT (v_data -> 'stats_scellees' ? v_socle_path[1]) THEN
        v_data := jsonb_set(v_data, ARRAY['stats_scellees', v_socle_path[1]], '{"rangs":{}}'::jsonb, true);
      END IF;
      IF p_kind IN ('comp', 'futile') AND NOT (v_data -> 'stats_scellees' -> v_socle_path[1] ? 'rangs') THEN
        v_data := jsonb_set(v_data, ARRAY['stats_scellees', v_socle_path[1], 'rangs'], '{}'::jsonb, true);
      END IF;
      v_data := jsonb_set(v_data, ARRAY['stats_scellees'] || v_socle_path, to_jsonb(p_new_value), true);
    END IF;
  END IF;

  -- 3. XP
  IF p_xp_mode = 'paye' THEN
    IF p_new_value < v_old THEN RAISE EXCEPTION 'Un retrait ne se paie pas en XP'; END IF;
    IF COALESCE(v_char.xp_total, 0) - COALESCE(v_char.xp_depense, 0) < v_valeur THEN
      RAISE EXCEPTION 'XP insuffisante pour ce joueur';
    END IF;
    v_char.xp_depense := COALESCE(v_char.xp_depense, 0) + v_valeur;
    v_tx_type := 'DEPENSE';
  ELSIF p_xp_mode = 'rembourse' THEN
    IF p_new_value > v_old THEN RAISE EXCEPTION 'Un ajout ne se rembourse pas'; END IF;
    v_char.xp_total := COALESCE(v_char.xp_total, 0) + v_valeur;
    v_tx_type := 'GAIN';
  ELSE
    v_valeur := 0;
    v_tx_type := 'GAIN';
  END IF;

  v_label := 'Ajustement du Docte : ' || p_label || ' — ' || btrim(p_motif);

  -- 4. Notification joueur
  v_data := jsonb_set(v_data, '{ajustements_docte_non_vus}',
    COALESCE(v_data -> 'ajustements_docte_non_vus', '[]'::jsonb)
      || jsonb_build_array(jsonb_build_object('label', p_label, 'motif', btrim(p_motif), 'xp_mode', p_xp_mode, 'xp', v_valeur, 'date', now())),
    true);

  UPDATE characters SET
    caracteristiques    = v_char.caracteristiques,
    competences_libres  = v_char.competences_libres,
    competences_futiles = v_char.competences_futiles,
    fortune             = v_char.fortune,
    xp_total            = v_char.xp_total,
    xp_depense          = v_char.xp_depense,
    data                = v_data,
    updated_at          = now()
  WHERE id = p_character_id;

  INSERT INTO xp_transactions (character_id, type, code, label, valeur, rang_final, date_mouvement)
  VALUES (p_character_id, v_tx_type, CASE WHEN p_new_value < v_old THEN 'DOCTE_RETRAIT' ELSE 'DOCTE_AJOUT' END, v_label, v_valeur, p_new_value, clock_timestamp());

  RETURN jsonb_build_object('ancienne_valeur', v_old, 'nouvelle_valeur', p_new_value, 'xp', v_valeur, 'type', v_tx_type);
END;
$$;

REVOKE ALL ON FUNCTION public.docte_ajuster_fiche(uuid, text, text, int, text, text, int, text) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.docte_ajuster_fiche(uuid, text, text, int, text, text, int, text) TO authenticated;
