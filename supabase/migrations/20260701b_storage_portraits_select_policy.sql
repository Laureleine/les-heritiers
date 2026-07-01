-- Migration : policy SELECT manquante sur storage.objects pour le bucket "portraits"
--
-- Root cause : uploadPortrait (src/components/personnalisation/usePersonnalisation.js)
-- appelle .upload(path, file, { upsert: true }), ce qui se traduit en
-- INSERT ... ON CONFLICT (bucket_id, name) DO UPDATE côté Postgres. Ce type de requête
-- exige une policy SELECT (en plus des policies INSERT/UPDATE déjà en place depuis la
-- migration 20260701_storage_rls_portraits_bugcaptures.sql) pour que le moteur puisse
-- vérifier l'absence de conflit — même quand aucune ligne ne rentre réellement en
-- conflit (premier portrait jamais déposé). Sans cette policy, l'upsert échoue avec
-- "new row violates row-level security policy", peu importe que INSERT/UPDATE seuls
-- soient corrects.
--
-- Confirmé par simulation directe (rôle authenticated, JWT réel) : un INSERT simple
-- réussit, le même INSERT avec ON CONFLICT DO UPDATE échoue tant que cette policy
-- SELECT est absente.
--
-- Date : 2026-07-01

CREATE POLICY "portraits_select_own_folder"
ON storage.objects FOR SELECT
TO authenticated
USING (
    bucket_id = 'portraits'
    AND (storage.foldername(name))[1] = auth.uid()::text
);

-- Vérification
DO $$
DECLARE
    cnt INTEGER;
BEGIN
    SELECT COUNT(*) INTO cnt FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects';
    RAISE NOTICE '✓ % politiques RLS sur storage.objects après migration', cnt;
END $$;
