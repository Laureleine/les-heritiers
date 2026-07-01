-- Migration : Policies RLS manquantes sur storage.objects (buckets "portraits" et "bug_captures")
--
-- Root cause : lors de la migration vers le nouveau projet Supabase (session du 28 juin 2026,
-- voir REX.md), les fichiers des buckets ont été copiés via la clé service_role (qui contourne
-- la RLS). Les policies RLS de storage.objects, elles, n'ont jamais été recréées sur le nouveau
-- projet. RLS est actif sur storage.objects mais sans aucune policy (0 résultat sur
-- pg_policies), donc tout upload authentifié (INSERT/UPDATE) est refusé par défaut :
-- "new row violates row-level security policy for table objects".
--
-- Date : 2026-07-01

-- Bucket "portraits" : chemin de stockage = {user_id}/{character_id}/{type}.{ext}
-- (voir src/components/personnalisation/usePersonnalisation.js, uploadPortrait).
-- Chaque utilisateur ne peut déposer/remplacer que dans son propre dossier.
CREATE POLICY "portraits_insert_own_folder"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
    bucket_id = 'portraits'
    AND (storage.foldername(name))[1] = auth.uid()::text
);

CREATE POLICY "portraits_update_own_folder"
ON storage.objects FOR UPDATE
TO authenticated
USING (
    bucket_id = 'portraits'
    AND (storage.foldername(name))[1] = auth.uid()::text
)
WITH CHECK (
    bucket_id = 'portraits'
    AND (storage.foldername(name))[1] = auth.uid()::text
);

-- Bucket "bug_captures" : nom de fichier plat "{timestamp}_{nomfichier}" sans dossier par
-- utilisateur (voir src/context/ForgeContext.jsx, soumettreEntree). Tout utilisateur
-- authentifié peut déposer une capture d'écran de signalement.
CREATE POLICY "bug_captures_insert_authenticated"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'bug_captures');

-- Vérification
DO $$
DECLARE
    cnt INTEGER;
BEGIN
    SELECT COUNT(*) INTO cnt FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects';
    RAISE NOTICE '✓ % politiques RLS sur storage.objects après migration', cnt;
END $$;
