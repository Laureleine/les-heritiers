# REX — Session du 5 Juin 2026

## Nouveau : Onglet Figures dans l'Encyclopédie (v17.4.0)

### Ce qui a été fait
- Nouvelle table `figures` Supabase avec migration SQL versionnée
- Nouvel onglet "Figures" dans l'Encyclopédie (7e onglet)
- `FigureForm.js` : formulaire complet (nom, titre, clan, faux-semblant toggle, type de fée avec datalist, double apparence, description)
- Intégration complète dans le système de propositions et modération existant
- Vue détaillée dans `EncyclopediaViewModal.js` avec sections Titre/Clan et Faux-Semblant
- Badges spécifiques dans `EncyclopediaCard.js` (faux-semblant, titre, clan)
- Moteur de différences dans `encyclopediaEngine.js` pour les champs figures

## Session précédente : Système de Relations & Faux-semblants (v17.3.0)

### Ce qui a été fait
- Nouveau champ `relations[]` dans `heritier_notes.content` (JSONB) — remplace l'ancien `statut_relation` string
- Helper `relationsHelper.js` avec migration automatique des anciens contacts
- Barre de recherche + filtres dans l'onglet Visages Rencontrés
- Édition enrichie : relations multiples, localisation structurée (ville/pays), visibilité par relation
- Faux-semblants : toggle, type de fée (parmi les espèces connues + saisie libre), double-face publié/réalité
- Mode Docte : bouton "Voir la réalité" qui révèle les vraies catégories

### Enseignements
1. **Toujours streamer la sortie des sous-processus** : `capture_output=True` sans streaming donne l'impression que le script bloque — l'utilisateur ne voit pas la progression. Passer à `Popen` + threads résout le problème.
2. **Ne pas oublier `stdin=subprocess.DEVNULL`** : un sous-processus peut hériter du stdin du parent et appeler `input()`, ce qui bloque le batch. Toujours le passer.
3. **Timeout sur les appels API** : `model.generate_content()` sans timeout peut bloquer indéfiniment. Un wrapper `ThreadPoolExecutor` avec `future.result(timeout=...)` est la solution la plus portable (marche quelle que soit la version de la librairie).
4. **Migration silencieuse** : quand on change un format de données, laisser l'ancien format fonctionner et le migrer au chargement plutôt qu'en base — zéro downtime, zéro script de migration.
5. **Tests d'abord** : les 22 tests de `relationsHelper.test.js` ont été écrits avant le déploiement de l'UI — ça a permis de détecter un edge case sur la localisation objet partiel immédiatement.
6. **Copier le pattern existant** : pour ajouter un nouvel onglet Encyclopédie, il faut modifier 7 fichiers exactement (Encyclopedia.js, useEncyclopedia.js, EncyclopediaCard.js, EncyclopediaViewModal.js, EncyclopediaModal.js, encyclopediaEngine.js + créer le formulaire). Le pattern est très cohérent — suivre les imports et les routages existants suffit, pas besoin de refactoring profond.
