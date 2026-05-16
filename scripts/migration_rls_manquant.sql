-- ============================================================================
-- MIGRATION : Politiques RLS manquantes
-- Tables concernées : registre_forge, profiles
-- À appliquer dans Supabase SQL Editor (ou via supabase db push)
-- ============================================================================

-- ============================================================================
-- TABLE : registre_forge
-- Règles :
--   - Tout utilisateur authentifié peut lire les entrées non masquées
--   - Les initiés peuvent voir les entrées is_initie_only
--   - Chaque utilisateur peut insérer pour lui-même
--   - Seul l'auteur peut modifier ses propres entrées (statut, ordre, votes)
--   - Seuls super_admin et gardien peuvent modifier le statut, archiver, rejeter
-- ============================================================================

ALTER TABLE registre_forge ENABLE ROW LEVEL SECURITY;

-- Lecture : entrées publiques (non masquées) lisibles par tous les authentifiés
CREATE POLICY "forge_select_public"
ON registre_forge FOR SELECT
TO authenticated
USING (
    is_masque = false
    AND (
        is_initie_only = false
        OR EXISTS (
            SELECT 1 FROM profiles
            WHERE profiles.id = auth.uid()
            AND (profiles.is_initiated = true OR profiles.role IN ('super_admin', 'gardien', 'docte'))
        )
    )
);

-- Lecture admin : super_admin et gardien voient tout (y compris masqués)
CREATE POLICY "forge_select_admin"
ON registre_forge FOR SELECT
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM profiles
        WHERE profiles.id = auth.uid()
        AND profiles.role IN ('super_admin', 'gardien')
    )
);

-- Insertion : tout utilisateur authentifié peut soumettre pour lui-même
CREATE POLICY "forge_insert_own"
ON registre_forge FOR INSERT
TO authenticated
WITH CHECK (user_id = auth.uid());

-- Mise à jour votes : l'auteur peut modifier ses votes (colonne votes uniquement géré côté app)
-- Mise à jour admin (statut, ordre, archivage, rejet) : super_admin et gardien uniquement
CREATE POLICY "forge_update_admin"
ON registre_forge FOR UPDATE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM profiles
        WHERE profiles.id = auth.uid()
        AND profiles.role IN ('super_admin', 'gardien')
    )
);

-- Suppression : super_admin uniquement
CREATE POLICY "forge_delete_admin"
ON registre_forge FOR DELETE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM profiles
        WHERE profiles.id = auth.uid()
        AND profiles.role = 'super_admin'
    )
);

-- ============================================================================
-- TABLE : profiles
-- Règles :
--   - Tout utilisateur authentifié peut lire tous les profils (nécessaire pour les cercles)
--   - Chaque utilisateur peut modifier uniquement son propre profil
--   - super_admin peut modifier n'importe quel profil (attribution de rôles)
-- ============================================================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Lecture : tous les profils sont lisibles par les utilisateurs authentifiés
CREATE POLICY "profiles_select_authenticated"
ON profiles FOR SELECT
TO authenticated
USING (true);

-- Mise à jour : chaque utilisateur ne peut modifier que le sien
CREATE POLICY "profiles_update_own"
ON profiles FOR UPDATE
TO authenticated
USING (id = auth.uid())
WITH CHECK (id = auth.uid());

-- Mise à jour admin : super_admin peut modifier n'importe quel profil (rôles, droits)
CREATE POLICY "profiles_update_admin"
ON profiles FOR UPDATE
TO authenticated
USING (
    EXISTS (
        SELECT 1 FROM profiles p
        WHERE p.id = auth.uid()
        AND p.role = 'super_admin'
    )
);

-- Insertion : normalement géré par le trigger Supabase Auth (handle_new_user)
-- Si absent, laisser les utilisateurs créer leur propre profil
CREATE POLICY "profiles_insert_own"
ON profiles FOR INSERT
TO authenticated
WITH CHECK (id = auth.uid());

-- ============================================================================
-- VÉRIFICATION
-- ============================================================================

DO $$
DECLARE
    tbl TEXT;
    cnt INTEGER;
BEGIN
    FOREACH tbl IN ARRAY ARRAY['registre_forge', 'profiles'] LOOP
        SELECT COUNT(*) INTO cnt FROM pg_policies WHERE tablename = tbl;
        RAISE NOTICE '✓ Table "%" : % politiques RLS créées', tbl, cnt;
    END LOOP;
END $$;
