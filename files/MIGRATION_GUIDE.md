# Guide de Migration des Composants v2.0
**Date:** 30 janvier 2025  

## 📋 Modifications à apporter aux composants

Chaque fichier de composant doit être mis à jour avec:
1. **Versioning** en en-tête
2. **Imports mis à jour** (depuis les nouveaux fichiers consolidés)

---

## 🔄 Template de versioning

Ajouter en haut de chaque fichier:

```javascript
// Version: 2.0
// Description: [Description du composant]
// Dernière modification: 2025-01-30
```

---

## 📦 Changements d'imports par composant

### **Auth.js**
```javascript
// ❌ ANCIEN (v1.0)
import { supabase } from '../config/supabase';

// ✅ NOUVEAU (v2.0)  
import { supabase } from '../config/supabase'; // Pas de changement

// + Ajouter versioning en en-tête
// Version: 2.0
// Description: Composant d'authentification (connexion/inscription)
// Dernière modification: 2025-01-30
```

---

### **CharacterList.js**
```javascript
// ❌ ANCIEN (v1.0)
import { getUserCharacters, getPublicCharacters, deleteCharacterFromSupabase, toggleCharacterVisibility } from '../utils/supabaseStorage';
import { exportCharacter, importCharacter } from '../utils/characterStorage';
import { exportToPDF } from '../utils/pdfExport';

// ✅ NOUVEAU (v2.0)
import { 
  getUserCharacters, 
  getPublicCharacters, 
  deleteCharacterFromSupabase, 
  toggleCharacterVisibility,
  exportCharacter, 
  importCharacter,
  exportToPDF 
} from '../utils/utils';

// + Ajouter versioning en en-tête
// Version: 2.0
// Description: Liste des personnages (mes personnages + publics)
// Dernière modification: 2025-01-30
```

---

### **Step1.js**
```javascript
// ❌ ANCIEN (v1.0)
import { fairyTypesByAge } from '../data/fairyData';

// ✅ NOUVEAU (v2.0)
import { fairyTypesByAge } from '../data/data';

// + Ajouter versioning en en-tête
// Version: 2.0
// Description: Étape 1 - Nom, sexe et type de fée
// Dernière modification: 2025-01-30
```

---

### **Step2.js**
```javascript
// ❌ ANCIEN (v1.0)
// Pas d'imports data spécifiques

// ✅ NOUVEAU (v2.0)
// Pas de changement d'imports

// + Ajouter versioning en en-tête
// Version: 2.0
// Description: Étape 2 (Step 6 dans la séquence) - Choix de capacité
// Dernière modification: 2025-01-30
```

---

### **Step3.js**
```javascript
// ❌ ANCIEN (v1.0)
// Pas d'imports data spécifiques

// ✅ NOUVEAU (v2.0)
// Pas de changement d'imports

// + Ajouter versioning en en-tête
// Version: 2.0
// Description: Étape 3 (Step 7 dans la séquence) - Choix de 3 pouvoirs
// Dernière modification: 2025-01-30
```

---

### **StepCaracteristiques.js**
```javascript
// ❌ ANCIEN (v1.0)
// Pas d'imports data spécifiques

// ✅ NOUVEAU (v2.0)
// Pas de changement d'imports

// + Ajouter versioning en en-tête
// Version: 2.0
// Description: Étape 2 (Step 2 dans la séquence) - Répartition des caractéristiques
// Dernière modification: 2025-01-30
```

---

### **StepCompetencesFutiles.js**
```javascript
// ❌ ANCIEN (v1.0)
import { competencesFutilesBase, getAllCompetencesFutiles } from '../data/competencesFutilesData';

// ✅ NOUVEAU (v2.0)
import { competencesFutilesBase, getAllCompetencesFutiles } from '../data/data';

// + Ajouter versioning en en-tête
// Version: 2.0
// Description: Étape 5 (Step 5 dans la séquence) - Compétences futiles (10 points)
// Dernière modification: 2025-01-30
```

---

### **StepCompetencesLibres.js**
```javascript
// ❌ ANCIEN (v1.0)
import { competences, competenceNames } from '../data/competencesData';
import { profils } from '../data/profilsData';

// ✅ NOUVEAU (v2.0)
import { competences, competenceNames, profils } from '../data/data';

// + Ajouter versioning en en-tête
// Version: 2.0
// Description: Étape 4 (Step 4 dans la séquence) - Compétences libres (15 points)
// Dernière modification: 2025-01-30
```

---

### **StepProfils.js**
```javascript
// ❌ ANCIEN (v1.0)
import { profils, profilNames } from '../data/profilsData';

// ✅ NOUVEAU (v2.0)
import { profils, profilNames } from '../data/data';

// + Ajouter versioning en en-tête
// Version: 2.0
// Description: Étape 3 (Step 3 dans la séquence) - Choix des profils majeur et mineur
// Dernière modification: 2025-01-30
```

---

### **StepRecapitulatif.js**
```javascript
// ❌ ANCIEN (v1.0)
import { profils } from '../data/profilsData';

// ✅ NOUVEAU (v2.0)
import { profils } from '../data/data';

// + Ajouter versioning en en-tête
// Version: 2.0
// Description: Étape 8 - Récapitulatif final du personnage
// Dernière modification: 2025-01-30
```

---

## 🚀 Script de migration automatique

Vous pouvez utiliser ce script bash pour mettre à jour automatiquement tous les imports:

```bash
#!/bin/bash

# Répertoire des composants
COMPONENTS_DIR="./src/components"

# Fonction pour ajouter le versioning
add_versioning() {
    local file=$1
    local desc=$2
    
    # Créer le header de version
    local header="// Version: 2.0
// Description: $desc
// Dernière modification: 2025-01-30

"
    
    # Ajouter le header au début du fichier
    echo "$header$(cat $file)" > $file
}

# Mettre à jour les imports
sed -i "s|from '../data/fairyData'|from '../data/data'|g" $COMPONENTS_DIR/*.js
sed -i "s|from '../data/competencesData'|from '../data/data'|g" $COMPONENTS_DIR/*.js
sed -i "s|from '../data/competencesFutilesData'|from '../data/data'|g" $COMPONENTS_DIR/*.js
sed -i "s|from '../data/profilsData'|from '../data/data'|g" $COMPONENTS_DIR/*.js
sed -i "s|from '../utils/supabaseStorage'|from '../utils/utils'|g" $COMPONENTS_DIR/*.js
sed -i "s|from '../utils/characterStorage'|from '../utils/utils'|g" $COMPONENTS_DIR/*.js
sed -i "s|from '../utils/pdfExport'|from '../utils/utils'|g" $COMPONENTS_DIR/*.js

# Ajouter le versioning (à adapter selon vos besoins)
add_versioning "$COMPONENTS_DIR/Auth.js" "Composant d'authentification (connexion/inscription)"
add_versioning "$COMPONENTS_DIR/CharacterList.js" "Liste des personnages (mes personnages + publics)"
add_versioning "$COMPONENTS_DIR/Step1.js" "Étape 1 - Nom, sexe et type de fée"
# ... etc pour les autres composants

echo "Migration terminée !"
```

---

## ✅ Checklist de migration

- [ ] Mettre à jour les imports dans **Auth.js**
- [ ] Mettre à jour les imports dans **CharacterList.js**
- [ ] Mettre à jour les imports dans **Step1.js**
- [ ] Mettre à jour les imports dans **Step2.js**
- [ ] Mettre à jour les imports dans **Step3.js**
- [ ] Mettre à jour les imports dans **StepCaracteristiques.js**
- [ ] Mettre à jour les imports dans **StepCompetencesFutiles.js**
- [ ] Mettre à jour les imports dans **StepCompetencesLibres.js**
- [ ] Mettre à jour les imports dans **StepProfils.js**
- [ ] Mettre à jour les imports dans **StepRecapitulatif.js**
- [ ] Ajouter le versioning à tous les fichiers
- [ ] Tester l'application
- [ ] Supprimer les anciens fichiers de données (fairyData.js, competencesData.js, etc.)

---

## 📊 Résumé des changements

| Fichier | Changements d'imports | Versioning |
|---------|----------------------|-----------|
| Auth.js | ✓ Aucun | ✓ Ajouté |
| CharacterList.js | ✓ utils consolidés | ✓ Ajouté |
| Step1.js | ✓ data.js | ✓ Ajouté |
| Step2.js | ✓ Aucun | ✓ Ajouté |
| Step3.js | ✓ Aucun | ✓ Ajouté |
| StepCaracteristiques.js | ✓ Aucun | ✓ Ajouté |
| StepCompetencesFutiles.js | ✓ data.js | ✓ Ajouté |
| StepCompetencesLibres.js | ✓ data.js | ✓ Ajouté |
| StepProfils.js | ✓ data.js | ✓ Ajouté |
| StepRecapitulatif.js | ✓ data.js | ✓ Ajouté |

---

## 🎯 Prochaines étapes recommandées

1. **Tester l'application** avec les nouveaux imports
2. **Vérifier** que tout fonctionne correctement
3. **Commiter** les changements avec un message clair : "Migration v2.0 - Consolidation et versioning"
4. **Supprimer** les anciens fichiers une fois que tout est testé
5. **Documenter** les changements dans votre CHANGELOG

---

## 💡 Conseils

- **Testez étape par étape** : Ne migrez pas tout d'un coup
- **Gardez une sauvegarde** des anciens fichiers
- **Utilisez Git** pour pouvoir revenir en arrière si nécessaire
- **Vérifiez la console** du navigateur pour détecter les erreurs d'import
