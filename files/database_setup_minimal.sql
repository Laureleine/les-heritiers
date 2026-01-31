-- ============================================================================
-- LES HÉRITIERS - Script SQL MINIMAL de création de base de données
-- Version: 2.0
-- Description: Script simplifié pour une mise en place rapide
-- Dernière modification: 2025-01-30
-- ============================================================================

-- ============================================================================
-- NETTOYAGE
-- ============================================================================

DROP POLICY IF EXISTS "Users can view their own characters" ON characters;
DROP POLICY IF EXISTS "Users can insert their own characters" ON characters;
DROP POLICY IF EXISTS "Users can update their own characters" ON characters;
DROP POLICY IF EXISTS "Users can delete their own characters" ON characters;
DROP POLICY IF EXISTS "Public characters are viewable by everyone" ON characters;
DROP TRIGGER IF EXISTS set_timestamp ON characters;
DROP FUNCTION IF EXISTS trigger_set_timestamp() CASCADE;
DROP TABLE IF EXISTS characters CASCADE;

-- ============================================================================
-- FONCTION DE MISE À JOUR DU TIMESTAMP
-- ============================================================================

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- TABLE CHARACTERS
-- ============================================================================

CREATE TABLE characters (
  -- IDs et timestamps
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  
  -- Données du personnage
  nom VARCHAR(255) NOT NULL,
  sexe VARCHAR(50) NOT NULL,
  type_fee VARCHAR(100) NOT NULL,
  anciennete VARCHAR(50),
  caracteristiques JSONB DEFAULT '{}',
  profils JSONB DEFAULT '{"majeur": {"nom": "", "trait": ""}, "mineur": {"nom": "", "trait": ""}}',
  competences_libres JSONB DEFAULT '{}',
  competences_futiles JSONB DEFAULT '{"rangs": {}, "personnalisees": []}',
  capacite_choisie VARCHAR(255),
  pouvoirs JSONB DEFAULT '[]',
  is_public BOOLEAN DEFAULT false,
  data JSONB DEFAULT '{}'
);

-- ============================================================================
-- INDEX
-- ============================================================================

CREATE INDEX idx_characters_user_id ON characters(user_id);
CREATE INDEX idx_characters_is_public ON characters(is_public) WHERE is_public = true;
CREATE INDEX idx_characters_type_fee ON characters(type_fee);
CREATE INDEX idx_characters_created_at ON characters(created_at DESC);

-- ============================================================================
-- TRIGGER
-- ============================================================================

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON characters
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();

-- ============================================================================
-- ROW LEVEL SECURITY
-- ============================================================================

ALTER TABLE characters ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own characters"
ON characters FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own characters"
ON characters FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own characters"
ON characters FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own characters"
ON characters FOR DELETE
USING (auth.uid() = user_id);

CREATE POLICY "Public characters are viewable by everyone"
ON characters FOR SELECT
USING (is_public = true);

-- ============================================================================
-- FIN
-- ============================================================================

SELECT '✓ Base de données créée avec succès!' as status;
