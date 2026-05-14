-- Ajoute statut, xp_total et xp_depense au retour de get_cercle_members
-- Permet au Docte de voir si un personnage est scellé ou non

CREATE OR REPLACE FUNCTION public.get_cercle_members(p_cercle_id uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  result JSONB;
BEGIN
  SELECT COALESCE(JSONB_AGG(
    JSONB_BUILD_OBJECT(
      'id', cm.id,
      'user_id', cm.user_id,
      'joined_at', cm.joined_at,
      'profiles', JSONB_BUILD_OBJECT(
        'username', p.username,
        'unlocked_fairies', p.unlocked_fairies
      ),
      'characters', CASE WHEN c.id IS NOT NULL THEN
        JSONB_BUILD_OBJECT(
          'id', c.id,
          'nom', c.nom,
          'sexe', c.sexe,
          'apparence', c.apparence,
          'genreHumain', c.genre_humain,
          'typeFee', c.type_fee,
          'statut', c.statut,
          'xp_total', c.xp_total,
          'xp_depense', c.xp_depense
        )
      ELSE NULL END
    )
    ORDER BY cm.joined_at
  ), '[]'::JSONB) INTO result
  FROM cercle_membres cm
  LEFT JOIN profiles p ON p.id = cm.user_id
  LEFT JOIN characters c ON c.id = cm.character_id
  WHERE cm.cercle_id = p_cercle_id;
  RETURN result;
END;
$function$;

REVOKE ALL ON FUNCTION public.get_cercle_members(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_cercle_members(uuid) TO authenticated;
