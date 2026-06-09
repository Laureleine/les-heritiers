# REX — Session du 9 Juin 2026

## Feature : Humain pur dans le créateur (v17.4.3)

### Ce qui a été fait
- Nouveau champ `typePersonnage: 'fee' | 'humain'` + `rangHumain: 'larbin' | 'acolyte' | 'pointure' | 'cador'` en base et dans l'état du personnage
- Constante `HUMAIN_RANGS` dans `DictionnaireJeu.js` (4 rangs × 3 budgets : carac/utiles/futiles)
- Step 1 : bouton "Humain pur" + sélecteur de rang, les fées masquées quand humain sélectionné
- Steps 2/3/4 (Capacités/Pouvoirs/Atouts) sautés automatiquement via `HUMAN_SKIPPED_STEPS = [2, 3, 4]` avec while-loop dans nextStep/prevStep
- `StepCaracteristiques.js` : 8 caractéristiques seulement (sans Féerie/Masque/Tricherie), budget `rangHumainData.carac`
- `useCompetencesLibres.js` : budget utiles depuis `rangHumainData.utiles`
- `StepCompetencesFutiles.js` : budget futiles depuis `rangHumainData.futiles`
- 14 tests de non-régression dans `humainRangs.test.js`

### Enseignements
10. **Champ `typePersonnage` plutôt que polluer `fairy_types`** : quand un nouveau type de personnage ne partage pas les données d'un type existant, créer un champ discriminant séparé. L'hydration de `characterEngine.js` gardait déjà `newState.typeFee` — les humains (typeFee vide) le court-circuitent naturellement.
11. **`HUMAN_SKIPPED_STEPS` + while-loop** : pattern propre pour sauter plusieurs étapes non-contiguës à la navigation. Tester les 4 cas (next depuis avant, next depuis dernier skippé, prev depuis après, prev depuis premier non-skippé) en tests unitaires — pas besoin de monter le composant.
12. **Trois budgets dans trois fichiers** : quand une feature touche à un "budget" partagé, chercher tous les endroits où ce budget est consommé (`StepCaracteristiques`, `useCompetencesLibres`, `StepCompetencesFutiles`). Grep sur `POINTS_TOTAUX` / `pointsFutiles` avant de commencer.
13. **`Edit` tool : toujours lire avant** : l'outil Edit échoue avec "File has not been read yet" si le fichier n'a pas été lu dans la session courante — même si on connaît le contenu. Après une recompaction de contexte, relire les fichiers clés avant d'éditer.
14. **JSX conditionnel `{!isHumain && <div>...</div>}` : fermer avec `</div>}` pas `</div>\n</div>`** : la balise `}` ferme l'expression JSX et remplace un `</div>` — ne pas doubler.

# REX — Session du 5 Juin 2026

## Hotfix : Points verts & Corrections (v17.4.1)

### Ce qui a été fait
- **Mini calendrier réparé** : remplacement de `.select('date, category').limit(3000)` par `rpc('get_article_dates')` — fonction SQL `SELECT DISTINCT date WHERE category NOT IN (...)` qui retourne les 129 dates en 129 lignes au lieu de 4849.
- **Figures en base** : exécution de la migration SQL `CREATE TABLE figures` dans Supabase + mise à jour de la whitelist de `toggle_item_seal`.
- **setData([]) au changement d'onglet** : empêche l'affichage de données périmées quand une requête échoue.
- **Build fix** : description et changelog de 17.4.0 restaurés après un `edit` trop large dans version.js.

### Enseignements
7. **`edit` trop large** : en réécrivant un bloc de version.js, le `oldString` a capturé tout l'objet 17.4.0 mais le `newString` n'en a réécrit que l'en-tête → perte de `description` et `changes`. Vérifier toujours la sortie de `npm run build` après une édition.
8. **RPC vs rows** : quand une requête `.select()` avec `.limit()` ne peut pas garantir de ramener toutes les lignes, la bonne solution est une fonction SQL `SELECT DISTINCT` retournant uniquement les données nécessaires. Plus propre, plus performant, pas de limite à configurer.
9. **Accès DB direct** : `node -e "new Client({connectionString: SUPABASE_DB_URL})"` permet d'exécuter du SQL arbitraire (migrations, RPC, whitelist) sans passer par le dashboard Supabase.

## Précédent : Onglet Figures dans l'Encyclopédie (v17.4.0)

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
