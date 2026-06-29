-- Migration : Ajoute colonne data JSONB sur la table figures
-- Utilisée par le générateur aléatoire de PNJ pour stocker les attributs étendus.
-- Date : 2026-06-29

ALTER TABLE public.figures ADD COLUMN IF NOT EXISTS data JSONB DEFAULT '{}';
