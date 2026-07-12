-- script/create_rpc_award_xp.sql
-- À exécuter dans le dashboard Supabase → SQL Editor
-- Crée la fonction d'attribution d'XP par le Docte d'un Cercle

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

  -- Vérification : l'appelant doit être le Docte d'un Cercle contenant ce personnage
  IF NOT EXISTS (
    SELECT 1 FROM cercle_membres cm
    JOIN cercles c ON c.id = cm.cercle_id
    WHERE cm.character_id = p_character_id AND c.docte_id = auth.uid()
  ) THEN
    RAISE EXCEPTION 'Seul le Docte du Cercle peut attribuer des XP à cet Héritier.';
  END IF;

  IF p_amount = 0 THEN RETURN; END IF;

  UPDATE characters SET xp_total = xp_total + p_amount WHERE id = p_character_id;

  -- valeur doit être positive (contrainte xp_transaction_veleur_check) ;
  -- le code distingue gain (XP_GAIN) de retrait (XP_AJUSTEMENT).
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
$$;

REVOKE EXECUTE ON FUNCTION public.award_xp(uuid, integer, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.award_xp(uuid, integer, text) TO authenticated;
