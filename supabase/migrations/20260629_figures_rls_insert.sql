-- Migration : Policy RLS INSERT sur figures pour les utilisateurs connectés
-- Permet au générateur de PNJ de sauvegarder dans l'Encyclopédie.
-- Date : 2026-06-29

CREATE POLICY "Authenticated users can insert figures"
ON public.figures
FOR INSERT
TO authenticated
WITH CHECK (true);
