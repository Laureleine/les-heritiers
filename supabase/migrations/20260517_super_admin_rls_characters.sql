-- ============================================================================
-- Migration : Super_admin peut modifier TOUS les personnages
-- Date : 2026-05-17
-- Description : Ajoute une RLS policy permettant aux super_admin de
--              contourner les restrictions de propriétaire sur la table
--              `characters` (UPDATE, DELETE, SELECT).
--              Ajoute aussi une fonction utilitaire get_user_role().
-- ============================================================================

-- 1. Fonction utilitaire : récupérer le rôle d'un utilisateur
CREATE OR REPLACE FUNCTION public.get_user_role(user_id UUID)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_role TEXT;
BEGIN
  SELECT role INTO user_role FROM profiles WHERE id = user_id;
  RETURN COALESCE(user_role, 'user');
END;
$$;

-- 2. Super_admin peut modifier tous les personnages (UPDATE)
CREATE POLICY "Super admin can update all characters"
ON characters
FOR UPDATE
USING (
  auth.uid() = user_id
  OR
  public.get_user_role(auth.uid()) = 'super_admin'
)
WITH CHECK (
  auth.uid() = user_id
  OR
  public.get_user_role(auth.uid()) = 'super_admin'
);

-- 3. Super_admin peut supprimer tous les personnages (DELETE)
CREATE POLICY "Super admin can delete all characters"
ON characters
FOR DELETE
USING (
  auth.uid() = user_id
  OR
  public.get_user_role(auth.uid()) = 'super_admin'
);

-- 4. Super_admin peut voir tous les personnages (SELECT)
CREATE POLICY "Super admin can view all characters"
ON characters
FOR SELECT
USING (
  auth.uid() = user_id
  OR
  public.get_user_role(auth.uid()) = 'super_admin'
);
