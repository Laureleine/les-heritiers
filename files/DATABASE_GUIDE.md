# Guide d'utilisation des Scripts SQL - Les Héritiers
**Version:** 2.0  
**Date:** 30 janvier 2025

## 📋 Fichiers disponibles

### 1. `database_setup.sql` (Complet)
**Taille:** ~400 lignes  
**Contenu:**
- ✅ Suppression sécurisée (DROP TABLE IF EXISTS)
- ✅ Création de la table `characters`
- ✅ Index optimisés
- ✅ Triggers
- ✅ Row Level Security (RLS)
- ✅ Commentaires détaillés
- ✅ Vues utilitaires
- ✅ Fonctions SQL
- ✅ Vérifications automatiques
- ✅ Exemple de données de test (commenté)

**À utiliser pour:** Mise en production complète avec toutes les fonctionnalités

---

### 2. `database_setup_minimal.sql` (Simplifié)
**Taille:** ~100 lignes  
**Contenu:**
- ✅ Suppression sécurisée (DROP TABLE IF EXISTS)
- ✅ Création de la table `characters`
- ✅ Index essentiels
- ✅ Trigger de mise à jour
- ✅ Row Level Security (RLS)

**À utiliser pour:** Développement et tests rapides

---

## 🚀 Installation dans Supabase

### Méthode 1: Via l'interface Supabase (Recommandée)

1. **Connectez-vous à Supabase**
   - Allez sur https://supabase.com
   - Connectez-vous à votre compte
   - Sélectionnez votre projet

2. **Ouvrez l'éditeur SQL**
   - Dans le menu latéral, cliquez sur **"SQL Editor"**
   - Ou cliquez sur **"New query"**

3. **Copiez le script**
   - Ouvrez `database_setup.sql` (ou `database_setup_minimal.sql`)
   - Copiez tout le contenu

4. **Collez et exécutez**
   - Collez le script dans l'éditeur SQL
   - Cliquez sur **"Run"** (ou Ctrl+Enter)

5. **Vérifiez les résultats**
   - Vous devriez voir les messages de confirmation
   - Vérifiez qu'aucune erreur n'est apparue

---

### Méthode 2: Via la CLI Supabase

```bash
# 1. Installez la CLI Supabase (si pas déjà fait)
npm install -g supabase

# 2. Connectez-vous à votre projet
supabase login
supabase link --project-ref YOUR_PROJECT_REF

# 3. Exécutez le script
supabase db push --file database_setup.sql

# Ou pour le script minimal
supabase db push --file database_setup_minimal.sql
```

---

### Méthode 3: Via psql (Avancé)

```bash
# Récupérez votre connection string depuis Supabase
# Settings > Database > Connection string

psql "votre_connection_string" -f database_setup.sql
```

---

## ⚠️ ATTENTION - Réinitialisation

**CES SCRIPTS SUPPRIMENT TOUTES LES DONNÉES EXISTANTES !**

Les scripts contiennent:
```sql
DROP TABLE IF EXISTS characters CASCADE;
```

Cela signifie que:
- ❌ Toutes les données de la table `characters` seront **SUPPRIMÉES**
- ❌ Tous les personnages créés seront **PERDUS**
- ❌ Cette action est **IRRÉVERSIBLE**

### ⚡ Utilisation sécurisée

**Pour une PREMIÈRE installation:**
✅ Utilisez le script sans problème

**Pour une MISE À JOUR:**
⚠️ **SAUVEGARDEZ VOS DONNÉES AVANT !**

```sql
-- Sauvegarde avant réinitialisation
CREATE TABLE characters_backup AS 
SELECT * FROM characters;

-- Ensuite exécutez le script
-- ...

-- Pour restaurer si besoin
INSERT INTO characters 
SELECT * FROM characters_backup;
```

---

## 📊 Vérification après installation

### 1. Vérifier que la table existe

```sql
SELECT table_name, table_type
FROM information_schema.tables
WHERE table_name = 'characters';
```

**Résultat attendu:**
```
 table_name | table_type 
------------+------------
 characters | BASE TABLE
```

---

### 2. Vérifier les colonnes

```sql
SELECT column_name, data_type, is_nullable
FROM information_schema.columns
WHERE table_name = 'characters'
ORDER BY ordinal_position;
```

**Colonnes attendues:**
- id (uuid)
- user_id (uuid)
- created_at (timestamp with time zone)
- updated_at (timestamp with time zone)
- nom (character varying)
- sexe (character varying)
- type_fee (character varying)
- anciennete (character varying)
- caracteristiques (jsonb)
- profils (jsonb)
- competences_libres (jsonb)
- competences_futiles (jsonb)
- capacite_choisie (character varying)
- pouvoirs (jsonb)
- is_public (boolean)
- data (jsonb)

---

### 3. Vérifier les politiques RLS

```sql
SELECT policyname, cmd, qual
FROM pg_policies
WHERE tablename = 'characters';
```

**Résultat attendu:** 5 politiques
1. Users can view their own characters
2. Users can insert their own characters
3. Users can update their own characters
4. Users can delete their own characters
5. Public characters are viewable by everyone

---

### 4. Vérifier les index

```sql
SELECT indexname, indexdef
FROM pg_indexes
WHERE tablename = 'characters';
```

**Index attendus:**
- characters_pkey (PRIMARY KEY)
- idx_characters_user_id
- idx_characters_is_public
- idx_characters_type_fee
- idx_characters_created_at

---

## 🧪 Test de la base de données

### 1. Créer un utilisateur de test

Dans l'interface Supabase:
- Allez dans **Authentication > Users**
- Cliquez sur **"Add user"**
- Créez un utilisateur test
- Notez son UUID

### 2. Insérer un personnage de test

```sql
-- Remplacez 'YOUR_USER_UUID' par l'UUID de votre utilisateur test
INSERT INTO characters (
  user_id,
  nom,
  sexe,
  type_fee,
  anciennete,
  is_public
) VALUES (
  'YOUR_USER_UUID',
  'Test Personnage',
  'Homme',
  'Ange',
  'ancienne',
  false
);
```

### 3. Vérifier l'insertion

```sql
SELECT id, nom, sexe, type_fee, created_at
FROM characters
ORDER BY created_at DESC
LIMIT 5;
```

### 4. Tester RLS

```sql
-- Cette requête devrait retourner 0 si RLS fonctionne
-- (car vous n'êtes pas connecté en tant qu'utilisateur)
SELECT COUNT(*) 
FROM characters 
WHERE is_public = false;

-- Cette requête devrait fonctionner
SELECT COUNT(*) 
FROM characters 
WHERE is_public = true;
```

---

## 🔧 Dépannage

### Erreur: "relation already exists"

**Cause:** La table existe déjà  
**Solution:** Le script contient `DROP TABLE IF EXISTS`, ré-exécutez-le

### Erreur: "permission denied"

**Cause:** Permissions insuffisantes  
**Solution:** Vérifiez que vous êtes connecté en tant qu'administrateur du projet

### Erreur: "auth.users does not exist"

**Cause:** Le schéma auth n'est pas configuré  
**Solution:** Activez l'authentification dans votre projet Supabase

### Les politiques RLS ne fonctionnent pas

**Solution:**
```sql
-- Vérifier si RLS est activé
SELECT relname, relrowsecurity
FROM pg_class
WHERE relname = 'characters';

-- Si relrowsecurity = false, activer RLS
ALTER TABLE characters ENABLE ROW LEVEL SECURITY;
```

---

## 📝 Personnalisation

### Ajouter une colonne

```sql
ALTER TABLE characters
ADD COLUMN nouvelle_colonne VARCHAR(100);
```

### Modifier une politique RLS

```sql
-- Supprimer l'ancienne
DROP POLICY "Users can view their own characters" ON characters;

-- Créer la nouvelle
CREATE POLICY "Users can view their own characters"
ON characters FOR SELECT
USING (auth.uid() = user_id OR is_public = true);
```

### Ajouter un index

```sql
CREATE INDEX idx_characters_nom ON characters(nom);
```

---

## 🎯 Checklist de mise en production

- [ ] Sauvegarde des données existantes (si applicable)
- [ ] Script SQL vérifié et testé en développement
- [ ] Connexion à l'environnement de production
- [ ] Exécution du script
- [ ] Vérification de la création de la table
- [ ] Vérification des politiques RLS
- [ ] Vérification des index
- [ ] Test d'insertion de données
- [ ] Test des permissions utilisateur
- [ ] Test de l'application avec la nouvelle base
- [ ] Surveillance des logs pour détecter les erreurs
- [ ] Documentation de la version déployée

---

## 📞 Support

En cas de problème:
1. Vérifiez les logs d'erreur dans Supabase (Logs > Database)
2. Consultez la documentation Supabase: https://supabase.com/docs
3. Vérifiez les messages d'erreur PostgreSQL

---

## 🔄 Mise à jour de la structure

Si vous devez modifier la structure de la base de données:

1. **Ne jamais** exécuter directement `DROP TABLE` en production
2. Utilisez des migrations SQL incrémentales
3. Testez toujours en développement d'abord
4. Gardez une sauvegarde avant toute modification

**Exemple de migration:**
```sql
-- migration_001_add_column.sql
ALTER TABLE characters
ADD COLUMN IF NOT EXISTS new_field VARCHAR(255);
```

---

## ✅ Résumé

| Script | Utilisation | Avantages |
|--------|-------------|-----------|
| `database_setup.sql` | Production | Complet, documenté, vues et fonctions |
| `database_setup_minimal.sql` | Dev/Test | Rapide, essentiel uniquement |

**Recommandation:**
- 🟢 Développement: `database_setup_minimal.sql`
- 🔵 Production: `database_setup.sql`
