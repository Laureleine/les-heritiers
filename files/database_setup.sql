-- ============================================================================
-- LES HÉRITIERS - Script de création de base de données Supabase
-- Version: 2.0
-- Description: Script SQL complet pour créer/recréer la base de données
-- Dernière modification: 2025-01-30
-- ============================================================================

-- ATTENTION: Ce script supprime et recrée toutes les tables
-- Utilisez-le uniquement pour initialiser ou réinitialiser la base de données

-- ============================================================================
-- SUPPRESSION DES OBJETS EXISTANTS
-- ============================================================================

-- Supprimer les politiques RLS (Row Level Security)
DROP POLICY IF EXISTS "Users can view their own characters" ON characters;
DROP POLICY IF EXISTS "Users can insert their own characters" ON characters;
DROP POLICY IF EXISTS "Users can update their own characters" ON characters;
DROP POLICY IF EXISTS "Users can delete their own characters" ON characters;
DROP POLICY IF EXISTS "Public characters are viewable by everyone" ON characters;

-- Supprimer les index
DROP INDEX IF EXISTS idx_characters_user_id;
DROP INDEX IF EXISTS idx_characters_is_public;
DROP INDEX IF EXISTS idx_characters_type_fee;
DROP INDEX IF EXISTS idx_characters_created_at;

-- Supprimer les triggers
DROP TRIGGER IF EXISTS set_timestamp ON characters;

-- Supprimer les fonctions
DROP FUNCTION IF EXISTS trigger_set_timestamp();

-- Supprimer les tables
DROP TABLE IF EXISTS characters CASCADE;

-- ============================================================================
-- FONCTION UTILITAIRE - Mise à jour automatique du timestamp
-- ============================================================================

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- TABLE PRINCIPALE - CHARACTERS
-- ============================================================================

CREATE TABLE characters (
  -- Identifiants et métadonnées
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  
  -- Informations de base du personnage
  nom VARCHAR(255) NOT NULL,
  sexe VARCHAR(50) NOT NULL,
  type_fee VARCHAR(100) NOT NULL,
  anciennete VARCHAR(50),
  
  -- Caractéristiques (JSON)
  caracteristiques JSONB DEFAULT '{}',
  
  -- Profils (JSON)
  profils JSONB DEFAULT '{
    "majeur": {"nom": "", "trait": "", "competences": []},
    "mineur": {"nom": "", "trait": "", "competences": []}
  }',
  
  -- Compétences libres (JSON)
  competences_libres JSONB DEFAULT '{}',
  
  -- Compétences futiles (JSON)
  competences_futiles JSONB DEFAULT '{
    "rangs": {},
    "personnalisees": []
  }',
  
  -- Capacités et pouvoirs
  capacite_choisie VARCHAR(255),
  pouvoirs JSONB DEFAULT '[]',
  
  -- Visibilité
  is_public BOOLEAN DEFAULT false,
  
  -- Données complètes (backup JSON de tout le personnage)
  data JSONB DEFAULT '{}'
);

-- ============================================================================
-- COMMENTAIRES SUR LA TABLE ET LES COLONNES
-- ============================================================================

COMMENT ON TABLE characters IS 'Table principale stockant tous les personnages créés par les utilisateurs';

COMMENT ON COLUMN characters.id IS 'Identifiant unique du personnage (UUID)';
COMMENT ON COLUMN characters.user_id IS 'Référence à l''utilisateur propriétaire (auth.users)';
COMMENT ON COLUMN characters.created_at IS 'Date et heure de création du personnage';
COMMENT ON COLUMN characters.updated_at IS 'Date et heure de dernière modification';
COMMENT ON COLUMN characters.nom IS 'Nom du personnage';
COMMENT ON COLUMN characters.sexe IS 'Sexe du personnage (Homme, Femme, Androgyne)';
COMMENT ON COLUMN characters.type_fee IS 'Type de fée (ex: Ange, Bastet, Elfe, etc.)';
COMMENT ON COLUMN characters.anciennete IS 'Ancienneté de la fée (ancienne ou moderne)';
COMMENT ON COLUMN characters.caracteristiques IS 'Caractéristiques du personnage (agilité, force, etc.) au format JSON';
COMMENT ON COLUMN characters.profils IS 'Profils majeur et mineur avec traits et compétences au format JSON';
COMMENT ON COLUMN characters.competences_libres IS 'Compétences libres avec rangs et spécialités au format JSON';
COMMENT ON COLUMN characters.competences_futiles IS 'Compétences futiles avec rangs et compétences personnalisées au format JSON';
COMMENT ON COLUMN characters.capacite_choisie IS 'Nom de la capacité choisie parmi les 3 options';
COMMENT ON COLUMN characters.pouvoirs IS 'Liste des 3 pouvoirs choisis au format JSON';
COMMENT ON COLUMN characters.is_public IS 'Indique si le personnage est visible publiquement';
COMMENT ON COLUMN characters.data IS 'Copie complète de toutes les données du personnage au format JSON (backup)';

-- ============================================================================
-- INDEX POUR OPTIMISER LES PERFORMANCES
-- ============================================================================

-- Index sur user_id pour retrouver rapidement les personnages d'un utilisateur
CREATE INDEX idx_characters_user_id ON characters(user_id);

-- Index sur is_public pour lister rapidement les personnages publics
CREATE INDEX idx_characters_is_public ON characters(is_public) WHERE is_public = true;

-- Index sur type_fee pour filtrer par type de fée
CREATE INDEX idx_characters_type_fee ON characters(type_fee);

-- Index sur created_at pour trier par date de création
CREATE INDEX idx_characters_created_at ON characters(created_at DESC);

-- Index GIN sur les colonnes JSONB pour des recherches efficaces
CREATE INDEX idx_characters_data ON characters USING GIN(data);
CREATE INDEX idx_characters_caracteristiques ON characters USING GIN(caracteristiques);
CREATE INDEX idx_characters_competences_libres ON characters USING GIN(competences_libres);

-- ============================================================================
-- TRIGGER - Mise à jour automatique de updated_at
-- ============================================================================

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON characters
FOR EACH ROW
EXECUTE FUNCTION trigger_set_timestamp();

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) - Sécurité au niveau des lignes
-- ============================================================================

-- Activer RLS sur la table
ALTER TABLE characters ENABLE ROW LEVEL SECURITY;

-- Politique 1: Les utilisateurs peuvent voir leurs propres personnages
CREATE POLICY "Users can view their own characters"
ON characters
FOR SELECT
USING (auth.uid() = user_id);

-- Politique 2: Les utilisateurs peuvent créer leurs propres personnages
CREATE POLICY "Users can insert their own characters"
ON characters
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Politique 3: Les utilisateurs peuvent modifier leurs propres personnages
CREATE POLICY "Users can update their own characters"
ON characters
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Politique 4: Les utilisateurs peuvent supprimer leurs propres personnages
CREATE POLICY "Users can delete their own characters"
ON characters
FOR DELETE
USING (auth.uid() = user_id);

-- Politique 5: Tout le monde peut voir les personnages publics
CREATE POLICY "Public characters are viewable by everyone"
ON characters
FOR SELECT
USING (is_public = true);

-- ============================================================================
-- DONNÉES DE TEST (OPTIONNEL - Commenter si non nécessaire)
-- ============================================================================

-- Décommenter les lignes ci-dessous pour créer des personnages de test
-- ATTENTION: Nécessite d'avoir un utilisateur créé dans auth.users

/*
-- Remplacer 'YOUR_USER_ID' par un vrai UUID d'utilisateur
INSERT INTO characters (
  user_id,
  nom,
  sexe,
  type_fee,
  anciennete,
  caracteristiques,
  profils,
  capacite_choisie,
  pouvoirs,
  is_public,
  data
) VALUES (
  'YOUR_USER_ID',
  'Aether le Lumineux',
  'Homme',
  'Ange',
  'ancienne',
  '{
    "agilite": 3,
    "constitution": 4,
    "force": 2,
    "precision": 3,
    "esprit": 5,
    "perception": 4,
    "prestance": 6,
    "sangFroid": 4
  }',
  '{
    "majeur": {
      "nom": "Érudit / Érudite",
      "trait": "Cultivé",
      "competences": ["Histoire", "Littérature", "Langues", "Culture générale"]
    },
    "mineur": {
      "nom": "Gentleman / Lady",
      "trait": "Charismatique",
      "competences": ["Étiquette", "Éloquence", "Danse", "Relations mondaines"]
    }
  }',
  'Vision divine',
  '["Bénédiction", "Chant Céleste", "Inspiration Divine"]',
  true,
  '{
    "nom": "Aether le Lumineux",
    "sexe": "Homme",
    "typeFee": "Ange",
    "description": "Un ange gardien déchu qui cherche la rédemption dans les rues de Paris"
  }'
);
*/

-- ============================================================================
-- VUES UTILES (OPTIONNEL)
-- ============================================================================

-- Vue pour obtenir des statistiques sur les personnages
CREATE OR REPLACE VIEW character_stats AS
SELECT 
  type_fee,
  anciennete,
  COUNT(*) as total,
  COUNT(CASE WHEN is_public THEN 1 END) as public_count,
  COUNT(DISTINCT user_id) as unique_users
FROM characters
GROUP BY type_fee, anciennete
ORDER BY total DESC;

COMMENT ON VIEW character_stats IS 'Statistiques sur les personnages par type et ancienneté';

-- Vue pour lister les personnages publics avec informations de base
CREATE OR REPLACE VIEW public_characters AS
SELECT 
  id,
  nom,
  sexe,
  type_fee,
  anciennete,
  caracteristiques,
  created_at,
  updated_at
FROM characters
WHERE is_public = true
ORDER BY updated_at DESC;

COMMENT ON VIEW public_characters IS 'Liste des personnages publics avec informations de base';

-- ============================================================================
-- FONCTIONS UTILITAIRES (OPTIONNEL)
-- ============================================================================

-- Fonction pour obtenir le nombre de personnages d'un utilisateur
CREATE OR REPLACE FUNCTION get_user_character_count(p_user_id UUID)
RETURNS INTEGER AS $$
BEGIN
  RETURN (
    SELECT COUNT(*)
    FROM characters
    WHERE user_id = p_user_id
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON FUNCTION get_user_character_count IS 'Retourne le nombre de personnages créés par un utilisateur';

-- Fonction pour obtenir les types de fées les plus populaires
CREATE OR REPLACE FUNCTION get_popular_fairy_types(limit_count INTEGER DEFAULT 10)
RETURNS TABLE(type_fee VARCHAR, count BIGINT) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    c.type_fee,
    COUNT(*) as count
  FROM characters c
  GROUP BY c.type_fee
  ORDER BY count DESC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON FUNCTION get_popular_fairy_types IS 'Retourne les types de fées les plus utilisés';

-- Fonction pour obtenir les membres d'un cercle avec leurs personnages
-- SECURITY DEFINER permet de bypasser RLS pour lire les personnages des autres membres
CREATE OR REPLACE FUNCTION get_cercle_members(p_cercle_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
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
          'typeFee', c.type_fee
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
$$;

COMMENT ON FUNCTION get_cercle_members IS 'Retourne les membres d''un cercle avec leurs profils et personnages (contourne RLS)';

-- ============================================================================
-- GRANTS - Permissions (si nécessaire)
-- ============================================================================

-- Donner les permissions nécessaires aux utilisateurs authentifiés
-- GRANT SELECT, INSERT, UPDATE, DELETE ON characters TO authenticated;
-- GRANT USAGE ON SEQUENCE characters_id_seq TO authenticated;

-- ============================================================================
-- VÉRIFICATIONS FINALES
-- ============================================================================

-- Vérifier que la table a été créée correctement
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'characters') THEN
    RAISE NOTICE '✓ Table "characters" créée avec succès';
  ELSE
    RAISE EXCEPTION '✗ Erreur: Table "characters" non créée';
  END IF;
  
  -- Vérifier que RLS est activé
  IF EXISTS (
    SELECT 1 FROM pg_tables 
    WHERE tablename = 'characters' 
    AND rowsecurity = true
  ) THEN
    RAISE NOTICE '✓ Row Level Security (RLS) activé';
  ELSE
    RAISE WARNING '⚠ RLS non activé sur la table characters';
  END IF;
  
  -- Compter les politiques
  DECLARE
    policy_count INTEGER;
  BEGIN
    SELECT COUNT(*) INTO policy_count
    FROM pg_policies
    WHERE tablename = 'characters';
    
    RAISE NOTICE '✓ % politiques RLS créées', policy_count;
  END;
  
  -- Compter les index
  DECLARE
    index_count INTEGER;
  BEGIN
    SELECT COUNT(*) INTO index_count
    FROM pg_indexes
    WHERE tablename = 'characters';
    
    RAISE NOTICE '✓ % index créés', index_count;
  END;
END $$;

-- ============================================================================
-- FIN DU SCRIPT
-- ============================================================================

-- Afficher un message de confirmation
SELECT 
  '🎉 Base de données "Les Héritiers" créée avec succès!' as message,
  NOW() as timestamp;

-- Instructions pour tester la base de données:
-- 1. Créer un compte utilisateur dans Supabase Auth
-- 2. Utiliser l'application pour créer un personnage
-- 3. Vérifier que le personnage apparaît dans la table characters
-- 4. Tester les permissions RLS en se connectant avec différents utilisateurs
