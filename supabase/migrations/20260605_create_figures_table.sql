-- ============================================================================
-- Migration : Table `figures` — Personnages & Figures de l'Encyclopédie
-- Date : 2026-06-05
-- Description : Ajoute une table dédiée aux figures/NPCs avec support des
--              faux-semblants, titres, clans et double apparence (masquée/démasquée).
-- ============================================================================

CREATE TABLE IF NOT EXISTS public.figures (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    faux_semblant BOOLEAN DEFAULT false,
    faux_semblant_type_fee TEXT,
    titre TEXT,
    clan TEXT,
    apparence_masquee TEXT,
    apparence_demasquee TEXT,
    description TEXT,
    is_official BOOLEAN DEFAULT true,
    is_sealed BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.figures ENABLE ROW LEVEL SECURITY;

-- Everyone can read figures (Encyclopedie publique)
CREATE POLICY "Everyone can read figures"
    ON public.figures FOR SELECT
    USING (true);
