Le Dogme de l'Héritier
1. LA RÈGLE D'OR (LE DOGME)
AUCUNE ELLIPSE : Il est strictement interdit d'utiliser des commentaires de type // ... reste du code ou /* même chose qu'avant */.

CODE INTÉGRAL : Tout composant ou fichier demandé doit être réécrit dans son intégralité, de la première ligne d'import à la dernière ligne d'export.

PRÉSERVATION DES BLOCS : Même si une modification ne concerne qu'un petit détail, tous les autres blocs (Identité, Caractéristiques, Compétences, Combat, Magie, Inventaire) doivent être maintenus et inchangés.

2. RÉFÉRENCES VISUELLES OBLIGATOIRES
Le design doit scrupuleusement respecter les captures fournies :

Caractéristiques (image_c5cc76.png) :

Titre sur bandeau marron (#92400e).

Grille de 4 colonnes, boîtes blanches avec bordure beige et ombre légère.

Label en petites majuscules, score en police Playfair Display (22-26px).

Spécialités (image_c5c54f.png) :

Une étoile orange (★) doit apparaître à côté du nom de la compétence si elle est en prédilection.

Les spécialités doivent apparaître à la suite du nom de la compétence, en italique, séparées par des points médians (•).

Origine des spécialités : "Inné", "Métier", "Atout".

Avantages / Désavantages (image_c567cf.png) :

LISTE STRICTE : Un seul avantage/désavantage par ligne.

Précédé d'une puce (•).

Fond teinté (Vert pour Avantages, Rouge pour Désavantages).

3. ARCHITECTURE TECHNIQUE
Hook de référence : useCerbere.js. Il centralise le character, feeData et les fonctions de scellage/snapshots.

Moteur de calcul : rulesEngine.js. Il contient les formules calculateSkillScore (incluant les bonus de profil Aventurier, Combattant, etc.) et calculateFullCombatStats.

Composant de sortie : StepRecapitulatif.js. C'est le miroir exact du PDF imprimable, divisé en deux pages A4 (210mm x 297mm).

4. DICTIONNAIRE ET LOGIQUE DE JEU
Accords : Toujours utiliser accorderTexte(valeur, genre).

Combat :

Esquive Démusquée = Toujours en rouge (danger).

PV Max = (3 * Constitution) + 9.

Profils : Respecter les 6 archétypes (Aventurier, Combattant, Érudit, Gentleman, Roublard, Savant) et leurs compétences associées pour les bonus de +2 (Majeur) / +1 (Mineur).

5. PROTOCOLE DE VÉRIFICATION AVANT RÉPONSE
Avant de générer un code, l'IA doit valider :

Est-ce que j'ai inclus TOUS les imports ?

Est-ce que les variables correspondent au hook useCerbere (ex: liveCombatStats) ?

Est-ce que j'ai bien mis une ligne par avantage ?

Est-ce qu'il y a des ellipses ? (Si oui, supprimer et réécrire).