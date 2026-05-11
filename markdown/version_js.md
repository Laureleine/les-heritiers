// src/version.js

export const VERSION_HISTORY = [
  {
    version: '15.16.42 - "L\'Éclair Pneumatique ⚡"',
    date: '11 Mai 2026',
    description: 'Hotfix de la réactivité du Télégraphe (pastille rouge).',
    changes: [
      '⚡ **Réactivité Instantanée :** Correction d\'un conflit de vitesse (Race Condition) qui empêchait la pastille rouge de notification du Télégraphe de s\'allumer avant un rafraîchissement manuel de la page. Les nouveaux messages mettent désormais à jour la liste instantanément de manière "optimiste", sans attendre les validations de la base de données.'
    ]
  },  {
    version: '15.16.41 - "L\'Aiguilleur Précis 🧭"',
    date: '11 Mai 2026',
    description: 'Refonte intégrale de la mémoire des messages non-lus du Télégraphe.',
    changes: [
      '🧭 **Pastille Rouge par Canal (Télégraphe) :** Le système de notification a été entièrement réécrit pour mémoriser votre lecture *canal par canal*. Ouvrir l\'interface du Télégraphe n\'efface plus aveuglément les notifications de vos conversations privées si vous ne les avez pas consultées.',
      '🔴 **Indicateur Visuel Intra-Liste :** Une nouvelle puce rouge clignotante apparaît désormais directement sur l\'onglet et à côté du nom de la conversation qui contient les messages non lus.',
      '💾 **Curseur Temporel Multiples :** Le `localStorage` sauvegarde désormais la date précise de dernière ouverture de chaque salon de discussion individuellement, garantissant une remontée d\'information parfaite au redémarrage du Grimoire, sans alourdir les requêtes de la base de données.'
    ]
  },    {
    version: '15.16.40 - "Le Voyant Rouge 🔴"',
    date: '10 Mai 2026',
    description: 'Fix de la pastille de notification du Télégraphe.',
    changes: [
      '🔴 **Pastille de Notification (Télégraphe) :** Le voyant d\'alerte de l\'icône du Télégraphe signale désormais tous les messages privés ou de cercle en attente, et n\'est plus limité aux seuls tickets de support de l\'administration.',
      '💾 **Curseur Temporel Hors-Ligne :** Le système mémorise intelligemment le moment exact de votre dernière lecture (via `localStorage`) pour réafficher la pastille rouge lors de votre prochaine connexion si un message a été reçu pendant votre absence (sans surcharger Supabase).'
    ]
  },{
        version: '15.16.39 - "Le Daguerréotype Fidèle 📸"',
        date: '2026-05-08',
        description: 'Fix : changement de portrait impossible après 1er upload',
        changes: [
            '🐛 **Fix changement de portrait bloqué (La Nature Profonde & L\'Apparence Sociale) :** Une fois un portrait chargé, il était impossible d\'en sélectionner un nouveau — le premier restait figé. Deux causes combinées : le champ de fichier HTML conservait la valeur de la sélection précédente (empêchant le déclenchement de l\'événement si on re-sélectionnait le même fichier), et l\'URL Supabase étant identique après remplacement, le navigateur affichait son cache sans recharger. Corrigé via reset du champ après chaque sélection + cache-busting `?t=timestamp` sur l\'URL stockée.',
        ]
    },
    {
        version: '15.16.38 - "Le Filtre du Marchande 🪙"',
        date: '2026-05-08',
        description: 'Vie sociale : filtre par budget PP restant',
        changes: [
            '🪙 **Filtre "budget restant" dans la boutique :** Un bouton compact (≤ PP) s\'affiche désormais sur la même ligne que la barre de recherche dans chaque boutique de vie sociale. Actif, il masque tous les items que tu ne peux pas te payer avec tes PP restants. Le chiffre exact de PP disponibles s\'affiche dans le bouton quand le filtre est actif.',
        ]
    },
    {
        version: '15.16.37 - "La Brique Noire 🖤"',
        date: '2026-05-08',
        description: 'Brique noire : coût affiché, chargement effets, homonymes',
        changes: [
            '🏷️ **Coût affiché dans la liste déroulante :** La brique noire du constructeur affiche désormais le prix de base à côté de chaque item dans la liste déroulante (ex : "Capitaine d\'industrie (5 PP)"). Le prix proposé s\'initialise automatiquement avec ce coût de base dès la sélection.',
            '🔑 **Items homonymes avec prix différents :** Deux items portant le même nom mais avec des coûts différents sont maintenant distingués par leur prix dans la clé de stockage ("Nom (X PP)"). Le moteur de jeu supporte les deux formats (nouveau + legacy) pour la rétrocompatibilité.',
            '🐛 **Fix chargement des effets techniques :** Quand on revenait éditer un item existant dans l\'Encyclopédie, les effets compilés n\'apparaissaient plus dans le BonusBuilder. Le formulaire lisait `techData` (absent de la DB) au lieu de `effets_techniques`. Corrigé avec un fallback `techData ?? effets_techniques` dans `EncyclopediaModal`, `SocialItemForm` et `EntityForm`.',
        ]
    },
    {
        version: '15.16.36 - "La Plume du Docte 🖋️"',
        date: '2026-05-08',
        description: 'Fix notification correction joueur + CheckCheck icône',
        changes: [
            '🔔 **Notification de correction au joueur :** Quand le Docte marque un personnage comme "Corrigé", le joueur reçoit désormais un toast de succès au prochain login (✨ "Bonne nouvelle ! X a été corrigé par le Docte."). La notification est consommée automatiquement après affichage.',
            '🔁 **Fix re-détection après correction :** Un flag `correction_done` empêche l\'auto-détection de re-signaler indéfiniment les mêmes personnages après qu\'ils ont été traités par le Docte.',
            '🔧 **Fix icône CheckCheck manquante :** L\'icône de double coche du Télégraphe (`CheckCheck`) était absente du hub d\'icônes centralisé — ajoutée dans `config/icons.js`, la compilation ne plante plus.',
        ]
    },
    {
        version: '15.16.35 - "Le Sceau des Lectures ✉️"',
        date: '2026-05-08',
        description: 'Read receipts, corrections, filtres, bug XP repair',
        changes: [
            '✅ **Coches de lecture (Télégraphe) :** Les messages privés et de groupe affichent désormais des accusés de réception style WhatsApp — ✓ gris = envoyé, ✓✓ amber = lu. Pour les salons de groupe, un compteur indique combien de membres ont lu. Désactivé sur le salon public global.',
            '🛠️ **Système de correction de personnages :** Quand un personnage présente un problème (fée sans fiche Docte, données incohérentes), le joueur voit une modale au login demandant l\'autorisation de corriger. Le Docte reçoit une notification avec la liste des personnages autorisés à corriger.',
            '🔧 **Correction filtre Communauté & Métriques :** Les filtres par type d\'utilisateur (Super Admin, Gardien, Initié, Héritier) dans l\'onglet Utilisateurs fonctionnent à nouveau — le code traitait un ancien mode "staff" qui n\'existait plus dans le menu.',
            '⚡ **Fix crash réparation XP :** La reconstruction du journal ne plante plus avec l\'erreur `check_xp_coherence`. Quand les dépenses reconstruites dépassent le XP total enregistré, le total est automatiquement relevé — affiché clairement dans la modale de confirmation.',
            '✨ **Fiches Docte dans la Galerie des Fées :** Les Initiés voient maintenant la fiche complète (apparence, caractère, capacités, pouvoirs, atouts) de chaque type de fée directement dans l\'étape 1 de création.',
        ]
    },
    {
        version: '15.16.34 - "Le Grimoire du Docte 📖"',
        date: '2026-05-08',
        description: 'Indexation du Manuel du Joueur — lore & règles documentés',
        changes: [
            '📖 **Lecture complète du Manuel du Joueur (280 p.) :** Le PDF a été extrait et indexé en intégralité — 26 types de fées, 6 étapes de création, toutes les formules de jeu.',
            '📋 **REGLES_INDEX.md :** Fichier mémoire technique créé : types de fées, coûts XP, formules de combat, vérification de l\'implémentation code vs règles.',
            '🌿 **LORE_HERITIERS.md :** Fichier mémoire lore créé : univers Belle Époque, vocabulaire féérique, personnalités par type de fée, formules de messages suggérées.',
            '✅ **Vérification implémentation :** Toutes les formules XP, combat et stats ont été comparées au manuel — conformité 100% confirmée (xpCalculator.js, rulesEngine.js).',
        ]
    },
    {
        version: '15.16.33 - "La Vitrine de l\'Héritier 🃏"',
        date: '2026-05-08',
        description: 'Cartes personnages : réparation XP, télégraphe, filtre, XP lisibles',
        changes: [
            '🔧 **Badges réparation XP sur les cartes :** Le statut du journal XP (⏳ À réparer, ✅ Complet, ✨ Réparé…) est affiché directement sur chaque carte, visible uniquement par l\'admin. Le badge est cliquable pour lancer la reconstruction, avec modale de confirmation avant/après.',
            '🗑️ **Suppression du bouton "Reconstruire" redondant :** La puce de statut devient elle-même le déclencheur — plus économe en espace.',
            '💬 **Bouton Télégraphe dans le footer des cartes :** Une icône MessageCircle discrète apparaît à côté du pseudo du joueur sur les cartes qui ne m\'appartiennent pas, pour ouvrir une missive privée directement.',
            '🔍 **Filtre de recherche par onglet :** Un champ de recherche persiste entre les onglets (Mes personnages / Publics / Admin) et filtre par nom, nature féerique ou pseudo du joueur. Le compteur d\'onglet reflète les résultats filtrés.',
            '✨ **XP lisible sur les cartes :** Le badge XP affiche désormais `✨ restants / total XP` en un seul badge bicolore — les XP disponibles en amber, le total acquis en vert.',
        ]
    },
    {
        version: '15.16.32 - "L\'Œil du Docte 🔍"',
        date: '7 Mai 2026',
        changes: [
            '🐛 **Fix — Fiche inconnue dans les Cercles :** Un joueur qui crée un personnage après avoir rejoint un cercle voyait sa fiche affichée comme "Inconnue" pour le Docte, qui ne pouvait pas l\'ouvrir. Cause : `cercle_membres.character_id` pointait vers l\'ancien perso. Fix en deux volets : UI défensive (carte orange + badge "Fiche non liée" + bouton "En attente…" désactivé côté Docte) et nouvelle feature permettant au joueur de changer son Héritier directement depuis la table virtuelle via un sélecteur.',
            '✨ **Changer d\'Héritier dans un Cercle :** Sur sa propre carte, un joueur voit maintenant "Mon Héritier : [nom]" et un menu déroulant "Changer d\'Héritier…" qui met à jour `cercle_membres` en un clic et recharge la vue.',
            '📊 **Audit des index BDD :** Analyse complète des 32 tables — identification de 2 doublons d\'index (admin_settings, cercle_membres), 3 index GIN lourds inutiles sur characters (data, caracteristiques, competences_libres), et ~15 FK sans index (character_snapshots, chat_messages, chat_channels, heritier_notes, registre_forge…). Migration recommandée prête à appliquer.',
            '🚨 **Alerte sécurité identifiée :** RLS désactivé sur chat_channels, chat_messages et bug_reports — exposées publiquement. SQL de remédiation préparé, en attente de validation des politiques.',
        ]
    },
    {
        version: '15.16.31 - "Le Gardien du Seuil 🛡️"',
        date: '7 Mai 2026',
        changes: [
            '🛡️ **Validation pré-scellage complète :** `sealValidation.js` introduit un système de gardes multicouches avant l\'apposition du Sceau. Erreurs bloquantes (A→F) : type féérique reconnu, caractéristiques complètes, profils majeur ET mineur définis, 2 atouts féériques choisis, capacité féérique sélectionnée, pouvoirs = rang de Féérie (1 par rang), toutes les prédilections utiles/futiles au choix remplies.',
            '⚠️ **Avertissements non-bloquants (G) :** Si des points restent non dépensés à la création (utiles verts, rangs gratuits Esprit 🧠, loisirs futiles), le joueur en est averti dans la modale de confirmation — il peut quand même sceller en connaissance de cause.',
            '🎨 **ConfirmModal enrichie :** Nouvelle prop `errors[]` (liste rouge, bouton Confirmer masqué) et `warnings[]` (encart jaune, confirmation toujours possible). En-tête rouge si erreurs bloquantes, amber sinon. Rétrocompatible — aucun autre usage impacté.',
            '🔧 **Fix — Atouts indépendants de Féérie :** La validation atouts utilise le constant `MAX_ATOUTS = 2` (fixe), sans lien avec le rang de Féérie. La Féérie détermine uniquement le nombre de Pouvoirs.',
        ]
    },
    {
        version: '15.16.30 - "L\'Archiviste du Passé 🔧"',
        date: '7 Mai 2026',
        changes: [
            '🧠 **Bonus Esprit post-scellage :** Les points d\'Esprit achetés avec des XP après le scellage débloquent désormais des rangs gratuits dans les compétences d\'Érudit et de Savant (comme à la création). Le calcul compare `esprit_actuel` vs `esprit_scellé` et attribue les rangs via `bonusEspritXP` − `investPost`.',
            '📓 **Journalisation des rangs gratuits (Esprit) :** Chaque rang gratuit est tracé dans le journal avec le nouveau code `ESPRIT_BONUS_UTILE` et `valeur: 0`. Affichage "🧠 Gratuit" dans le Journal des Flux de l\'Âme au lieu d\'une valeur XP nulle invisible.',
            '👁️ **Fix — Journal incomplet en lecture seule :** Quand un personnage scellé est ouvert en lecture seule (par un autre joueur ou depuis les Cercles), le journal était tronqué si `historique_xp` en base était partiel (condition `length === 0` jamais déclenchée). On force désormais la reconstruction client-side avant le `LOAD_CHARACTER`, comme le fait `handleAppropriate`.',
            '📜 **Nouveau — `CHARACTER_SCHEMA.md` :** Document vivant décrivant l\'intégralité du schéma personnage : colonnes Supabase, structure JSONB `data{}`, sous-schémas (`caracteristiques`, `competencesLibres`, `vieSociale`, `stats_scellees`, `computedStats`), tableau des origines de spécialités, flow de chargement, pièges connus.',
            '🔒 **Refactor — Action `SEAL_CHARACTER` :** Le scellage est désormais une action dédiée dans `characterReducer` (remplace l\'intercept `UPDATE_FIELD`). Capture atomique et exhaustive de `stats_scellees` : caractéristiques, atouts, compétences libres, futiles, fortune, pouvoirs.',
            '🛠️ **Nouveau — Outil admin de reconstruction des journaux :** `TabRepairJournaux` (super_admin uniquement) liste tous les personnages scellés, détecte les journaux incomplets, et permet de reconstruire les `DEPENSE` depuis `stats_scellees` — tout en préservant les `GAIN` existants. Recherche par nom, filtre "À réparer / Tous", et modale de confirmation avec tableau avant/après.',
            '🔍 **Audit Supabase — 20 personnages identifiés :** Requête SQL d\'analyse sur l\'intégralité des personnages scellés : classification en "journal vide", "GAIN uniquement", "partiel" et "complet". Emet, Alafard, Louise Dubois, Maudierne, Una et ~15 autres bénéficieront de la reconstruction.',
        ]
    },
    {
        version: '15.16.29 - "Le Parchemin Complet 📜"',
        date: '7 Mai 2026',
        changes: [
            '🐛 **Fix critique — Fiches des autres joueurs incomplètes :** Les onglets "Public" et "Admin" de `CharacterList` passaient le personnage light (13 colonnes) à `onSelectCharacter` au lieu de charger la fiche complète via `getFullCharacter()`. Résultat : compétences, atouts, pouvoirs, data et stats manquaient dans le récap et le PDF. Corrigé en routant ces deux onglets via `handleSelectCharacter` comme l\'onglet "Mes personnages".',
            '✨ **Fix — Détail futiles (bonus magique) :** `getFutileBreakdown` ne comptabilisait pas les bonus magiques issus d\'atouts/pouvoirs sur les compétences futiles, causant un écart entre la valeur affichée et la somme de la décomposition. Ajout de `bonusMagique` et `bonusMagLabel` dans le breakdown.',
            '✨ **Fix — Origines des spécialités en mode détaillé :** `allSpecialties` stocke désormais des objets `{nom, origine}` au lieu de simples strings. Les spécialités sont taguées Créa / XP / Métier / Inné / magique avec les couleurs correspondantes dans la vue détaillée.',
            '🔒 **Fix — Snapshot scellage (futiles + fortune) :** Le reducer `UPDATE_FIELD` intercepte désormais le premier scellage pour capturer `competencesFutiles.rangs` et `fortune` dans `stats_scellees`. Les anciens personnages d\'Emet ont été corrigés rétroactivement en base.',
            '🔍 **Fix — Ressort:1 d\'Emet à la création :** Preuve mathématique via XP_SOLDE, puis correction SQL de `stats_scellees.competencesLibres.rangs.Ressort` pour les copies d\'Emet.',
            '🔙 **Fix — Retour aux Cercles :** Depuis un profil vu dans un Cercle, le bouton "Retour" ramène maintenant au Cercle (via `location.state.from`) au lieu des Archives. Le libellé s\'adapte dynamiquement.',
        ]
    },
    {
        version: '15.16.28 - "La Source Unique 🏛️"',
        date: '7 Mai 2026',
        changes: [
            '🏛️ **Refactor — Source unique de vérité (XP) :** `getXpState()` calcule désormais `xp_depense` depuis `historique_xp` (somme algébrique du journal) au lieu de lire le champ `xp_depense` en base. Le journal fait foi ; le champ DB n\'est plus qu\'un cache dérivé mis à jour à chaque sauvegarde.',
            '🔕 **Refactor — Fin de la double-écriture :** `LOG_XP_TRANSACTION` dans le moteur ne mute plus `xp_depense` en mémoire. Un seul save → un seul calcul → une valeur cohérente.',
            '🏷️ **Nouvelle fonctionnalité — Codes canoniques XP :** Chaque transaction possède désormais un champ `code` (ex: `CARAC_AUGMENTATION`, `FORTUNE_ELEVATION`, `ATOUT_ACQUISITION`…) permettant un filtrage programmatique sans fragile correspondance de strings. 15 codes définis dans `XP_CODES`.',
            '📊 **Nouveau — Table SQL `xp_transactions` :** Miroir queryable de `historique_xp` (JSONB) synchronisé à chaque sauvegarde. Permet analytics cross-personnages, filtrage SQL par code/type, vues de synthèse (`xp_summary`). Architecture write-to-both : le JSONB reste source primaire.',
            '🔧 **Nouveau — `adminMigration.js` :** Utilitaire one-shot `migrateXpHistories(gameData)` pour peupler `historique_xp` en base pour tous les anciens personnages scellés qui n\'en ont pas encore. Supporte mode `dryRun` et callbacks de progression.',
            '🧹 **Nettoyage — Consumers XP :** `CharacterCreator.jsx`, `FortuneController.js` et `pixieBrain.js` utilisent maintenant `getXpState()` au lieu de calculer `(xp_total - xp_depense)` manuellement.'
        ]
    },
    {
        version: '15.16.27 - "Le Grand Livre des Âmes 📒"',
        date: '7 Mai 2026',
        changes: [
            '🏗️ **Refactor majeur — Journal des Âmes (XP) :** Toutes les dépenses et remboursements d\'XP passent désormais par `LOG_XP_TRANSACTION` au lieu de muter `xp_depense` directement. 6 composants migrés : `StepPouvoirs`, `StepAtouts`, `AnomalieFeeriqueWidget`, `useCompetencesLibres`, `StepCompetencesFutiles`, `useVieSociale`. Le journal peut désormais reconstituer fidèlement l\'historique complet d\'un personnage.',
            '🐛 **Fix — historyReconstructor (Fortune fantôme) :** La Fortune accordée par le métier/la Vie Sociale ne génère plus de fausses entrées XP dans le journal. Le plancher de Fortune est maintenant calculé depuis les achats réels (`fortune_score` + `fortune_bonus` des items).',
            '🐛 **Fix — historyReconstructor (Fortune coût) :** Remplacement du coût fixe `10 XP` par la vraie formule `getFortuneCost()` (tenant compte des rangs Classe et Sciences).',
            '🐛 **Fix — historyReconstructor (Futiles .rangs) :** La reconstruction lisait `competencesFutiles` (objet parent) au lieu de `competencesFutiles.rangs`, ce qui produisait un écart d\'1 XP. Corrigé avec `?.rangs`.',
            '✨ **Fix — Journal des Âmes (Groupement) :** Les entrées consécutives de même nature dans le journal sont désormais fusionnées en une seule ligne avec un badge `×N`, pour une lecture plus claire.',
            '🔒 **Fix — Dupliquer / Adopter un héritage :** Ces deux actions préservent maintenant le statut `scellé` d\'un personnage si l\'original l\'était. L\'historique XP est également forcé en reconstruction complète pour garantir un journal cohérent.',
            '🎨 **Fix — Paramètres (Notifications) :** Suppression du décalage visuel (`ml-8`) sur les boîtes de réglages de notifications dans `AccountSettings.js`.'
        ]
    },
    {
        version: '15.16.26 - "Le Polyglotte Corrigé 🌍"',
        date: '6 Mai 2026',
        changes: [
            '🐛 **Fix — Érudition & Langues (PDF & Fiche) :** Correction d\'un bug dans `WidgetLangues.js` où la suppression de la langue maternelle stockait le tableau entier `["Français","Anglais","Italien"]` au lieu d\'une string. Résultat visible : `FrançaisAnglaisItalien (Maternelle) • Français • Anglais • Italien` sur la fiche et le PDF. Fix : `newLangues[0]` au lieu de `newLangues`. Requête SQL de migration fournie pour corriger les personnages déjà corrompus en base.'
        ]
    },
    {
        version: '15.16.25 - "Le Grand Ménage de Printemps 🧹"',
        date: '6 Mai 2026',
        changes: [
            '🗂️ **Refactoring — Extraction de sous-composants :** Trois composants enfants colocalisés avec leur parent ont été extraits dans leurs propres fichiers : `CharacterCard` (depuis `CharacterList`), `ChangeCard` (depuis `ValidationsPendantes`), `ActiveCercleView` (depuis `CerclesDashboard`). Les fichiers passent de 534–666 lignes à ~350–390 lignes chacun.',
            '📜 **Refactoring — Archivage du changelog :** Les entrées historiques de `version.js` (versions 2.x à 15.11.x) ont été déplacées dans `version.legacy.js`, non importé par l\'application. Le fichier principal passe de 1639 à 162 lignes — économie directe de tokens à chaque session.',
            '🗺️ **Infrastructure — Carte du projet :** Création de `PROJECT_MAP.md` dans le dossier mémoire de l\'assistant : architecture par zones, responsabilités des fichiers clés, et catalogue des pièges non-évidents. Mise à jour de `MEMORY.md` pour le référencer en premier.'
        ]
    },
    {
        version: '15.16.24 - "Le Grimoire Illustré 📖"',
        date: '6 Mai 2026',
        changes: [
            '🖼️ **Parchemin PDF — Portraits :** Les deux portraits du personnage (masqué et démasqué) apparaissent désormais sur le PDF exporté. Le portrait masqué orne l\'en-tête de la page 1, le portrait féérique s\'affiche en haut de la page 2.',
            '⚔️ **Parchemin PDF — Stats de combat :** Les statistiques de combat affichées sur le PDF sont maintenant calculées en temps réel via le moteur de règles, garantissant une cohérence parfaite avec le Bilan. Compétences futiles, équipement et contacts s\'affichent correctement (ils étaient vides auparavant).',
            '📐 **Parchemin PDF — Compression A4 :** La page 1 du PDF a été resserrée (tailles de police, marges, espacements) pour tenir confortablement sur une feuille A4 à l\'impression.',
            '🎛️ **Encyclopédie — Spécialités (UI) :** Le bouton "Vue groupée" est remplacé par un élégant slider CSS sans texte. Le bouton "Catalogue de référence" est remplacé par le bouton standard "Suggérer une modification".',
            '✏️ **Encyclopédie — Spécialités (Édition) :** Les spécialités sont désormais éditables ! La modale de proposition s\'ouvre correctement, avec un formulaire adapté : nom, description, et sélecteur de compétence parente (BonusBuilder et sélecteur de fées masqués, non pertinents ici).',
            '🔧 **Refactoring DRY — Icônes :** Migration de 39 fichiers depuis les imports directs `lucide-react` vers le hub centralisé `src/config/icons.js`. Correction des erreurs ESLint associées (icône `Print` inexistante, BOM Unicode, imports inutilisés).'
        ]
    },
    {
        version: '15.16.23 - "Le Daguerréotype Double 🖼️"',
        date: '5 Mai 2026',
        changes: [
            '🖼️ **Personnalisation du Masque (Nouvelle Fonctionnalité) :** L\'étape 10 de création de personnage dispose désormais d\'un encart "Le Daguerréotype Double". Deux zones d\'import d\'image distinctes permettent d\'associer un portrait humain (L\'Apparence Sociale) et un portrait féérique (La Nature Profonde) à chaque Héritier.',
            '👁️ **Loi du Silence :** Un bouton de bascule permet au joueur de choisir si sa véritable nature féérique est visible par les autres membres du Cercle, ou gardée secrète.',
            '🗄️ **Architecture (Migration DB) :** Trois nouvelles colonnes dédiées sur la table `characters` (`portrait_masked_url`, `portrait_unmasked_url`, `is_unmasked_revealed`) et un bucket Supabase Storage sécurisé (`portraits`) accueillent désormais les images. Les RLS protègent les uploads de chaque joueur.'
        ]
    },
    {
        version: '15.16.22 - "Le Notaire Réparé 📜"',
        date: '5 Mai 2026',
        changes: [
            '🐛 **Don de personnage (Bloquant) :** Correction d\'un bug introduit lors d\'une refonte antérieure — le code de don était écrit uniquement dans le JSONB `data`, alors que la RPC `claim_character_by_code` le cherche dans la colonne dédiée `transfer_code`. Le code est désormais écrit dans les deux emplacements simultanément. Les dons fonctionnent à nouveau normalement.'
        ]
    },
    {
        version: '15.16.21 - "Le Voile Levé 👁️"',
        date: '4 Mai 2026',
        changes: [
            '👁️ **Connexion (UX) :** Le formulaire d\'authentification dispose désormais d\'un bouton Œil permettant de révéler ou masquer le mot de passe saisi. Fonctionne en mode Connexion comme en mode Inscription.'
        ]
    },    {
        version: '15.16.20 - "Le Filtre du Marchand 🔍"',
        date: '4 Mai 2026',
        changes: [
            '🔍 **Vie Sociale & Équipement (UX) :** La boutique d\'équipement dispose désormais d\'un champ de recherche instantané. Tapez quelques lettres pour filtrer dynamiquement l\'ensemble du catalogue du profil actif, toutes catégories confondues. Une croix de réinitialisation apparaît dès qu\'un filtre est actif.'
        ]
    },    {
        version: '15.16.19 - "L\'Ombre des Sicaires 🗡️"',
        date: '2 Mai 2026',
        changes: [
            '🗡️ **Vie Sociale & Équipement (Hotfix) :** L\'algorithme de la boutique lit désormais parfaitement la nouvelle architecture de la base de données permettant à un Contact (ou un objet) d\'appartenir à de multiples Profils professionnels. Les réductions octroyées par vos statuts secrets (comme Membre des Sicaires) s\'appliquent désormais avec une tolérance intelligente, même si le nom de l\'objet diffère légèrement selon votre métier.',
            '🧠 **Forge (Constructeur Visuel) :** Le champ "Ajustement Prix Boutique" bénéficie dorénavant d\'un système d\'autocomplétion natif. Les Gardiens du Savoir peuvent désormais rechercher dynamiquement un objet ou un contact existant au fur et à mesure de leur frappe, éradiquant les erreurs d\'orthographe.'
        ]
    },    {
        version: '15.16.18 - "L\'Inquisiteur et le Masque 🎭"',
        date: '1 Mai 2026',
        changes: [
            '🎭 **Attributs & Parchemins (Évolution) :** Suite au signalement de Chninkel, la caractéristique "Masque" possède désormais son propre contrôleur d\'expérience à l\'Étape 3 (Pouvoirs). De plus, le triptyque magique sacré (Féérie, Masque, Tricherie) s\'imprime enfin fièrement au sommet de la deuxième page de vos fiches PDF.',
            '👻 **Purification du Code (Architecture) :** Une immense traque des fantômes algorithmiques a été menée par notre Inquisiteur syntaxique sur l\'ensemble du Grimoire. Les mémoires orphelines, imports inutilisés et dépendances asynchrones ont été purgés. Bonus : Le Grimoire Personnel profite désormais d\'un écran de déchiffrage fluide et immersif à son ouverture.'
        ]
    },    {
        version: '15.16.16 - "Le Sang Bleu Révélé 🩸"',
        date: '1 Mai 2026',
        changes: [
            '👑 **Parchemins (PDF & Bilan) :** L\'encart des titres honorifiques s\'intitule désormais "Familles, Titres & Statuts" pour correspondre scrupuleusement à la terminologie officielle du Livre de Base.',
            '🧠 **Cerveau Central (Filtre d\'Export) :** L\'algorithme de génération de la Bible Autonome capture désormais correctement les objets sociaux de catégorie "statut". Vos appartenances aux sociétés secrètes et vos ascendances nobles ne seront plus jamais noyées au milieu de l\'équipement matériel commun.'
        ]
    },    {
        version: '15.16.15 - "La Douane Linguistique 🌍"',
        date: '1 Mai 2026',
        changes: [
            '🌍 **Langues & Érudition (Hotfix) :** L\'Étape 10 de personnalisation scanne de nouveau correctement l\'intégralité des achats multiples effectués dans la boutique. Il est dorénavant possible de débloquer plusieurs dialectes rares ou européens sans que le système n\'en compte qu\'un seul.'
        ]
    },    {
        version: '15.16.14 - "La Diète de l\'Imprimeur 🖨️"',
        date: '30 Avril 2026',
        changes: [
            '🖨️ **Imprimerie (PDF) :** Résolution des sauts de page disgracieux sur la fiche de personnage exportée. Le bloc "Combat & Santé" a été rendu techniquement insécable, garantissant que son titre ne se retrouve plus jamais séparé de ses cercles de statistiques.',
            '📏 **Mise en page (CSS) :** Application d\'une cure d\'amaigrissement stricte sur les marges d\'impression de la première page. Cette récupération de quelques millimètres précieux permet d\'aspirer le bloc de combat vers le haut et d\'éviter la création intempestive d\'une page blanche.'
        ]
    },    {
        version: '15.16.13 - "L\'Inventaire Déployé 🎒"',
        date: '30 Avril 2026',
        changes: [
            '📄 **Parchemins (Bilan & PDF) :** Le bloc fourre-tout "Détails & Inventaire" a été entièrement démantelé. Les Compétences Futiles, l\'Équipement, les Contacts, les Langues et les Titres disposent désormais chacun de leur propre encart dédié.',
            '📏 **Mise en page (UX) :** Ces nouveaux encarts s\'étendent désormais sur toute la largeur de la feuille de personnage, offrant une bien meilleure lisibilité et résolvant les problèmes de textes tronqués pour les Héritiers possédant de vastes inventaires.'
        ]
    },    {
        version: '15.16.12 - "L\'Héritage Révélé 🧬"',
        date: '30 Avril 2026',
        changes: [
            '👁️ **Encyclopédie (Consultation) :** Résolution de l\'anomalie rendant invisible la Magie et l\'Héritage Inné des espèces féériques lors de leur simple consultation dans la base de données.',
            '🧠 **Cerveau Séparé (Hook) :** Alignement strict des alias de la requête SQL du composant `useEncyclopedia` sur ceux du moteur central (`supabaseGameData`). L\'interface visuelle parvient désormais à lire et afficher correctement les Capacités, Pouvoirs et Atouts de chaque fée explorée.'
        ]
    },    {
        version: '15.16.11 - "La Vitrine aux Trophées 🏆"',
        date: '30 Avril 2026',
        changes: [
            '🏆 **Communauté (Forge des Titres) :** La section d\'édition des badges honorifiques est dorénavant protégée par le sceau de l\'Architecte. Les joueurs peuvent y admirer l\'ensemble des trophées existants pour connaître les accomplissements à débloquer, mais l\'enclume de création et les pouvoirs de destruction restent l\'apanage exclusif du Super Administrateur.'
        ]
    },    {
        version: '15.16.10 - "L\'Échelle de l\'Évolution 🪜"',
        date: '30 Avril 2026',
        changes: [
            '📈 **Moteur de Jeu (Évolution) :** Application stricte de la règle du Livre de Base sur la progression des Profils. Lors d\'une dépense d\'expérience, l\'augmentation du Rang de Profil n\'octroie plus une simple addition linéaire, mais un cumul dynamique (le passage au Rang 3 offre 3 PP, et le passage ultérieur au Rang 4 offre 4 PP additionnels).',
            '🧠 **Cerveau Central (Conscience Temporelle) :** Le super-calculateur a été doté d\'une mémoire absolue. Il analyse la photographie de votre Héritier au moment exact de son scellage (`stats_scellees`), puis la compare avec son niveau de maîtrise actuel post-dépenses d\'XP pour calculer et distribuer les budgets de Points de Personnage sans la moindre erreur.'
        ]
    },    {
        version: '15.16.7 - "Le Carrefour des Spécialités 🛤️"',
        date: '29 Avril 2026',
        changes: [
            '🛤️ **Forge (BonusBuilder) :** La brique rose "Choix de Spécialité" a été totalement refondue. Les Gardiens peuvent désormais proposer un choix entre des spécialités appartenant à des compétences mères totalement différentes (ex: *Mêlée: Épée* OU *Tir: Pistolet*). La migration des anciennes briques vers le nouveau format se fait automatiquement à l\'ouverture de l\'outil.',
            '🧠 **Cerveau Central (Cerbère) :** Le moteur d\'analyse du personnage a appris à scinder dynamiquement les chaînes composites (grâce au séparateur `:`) pour affecter la spécialité choisie à la bonne compétence de base dans le Bilan.',
            '🖨️ **Parchemins (PDF & JSON) :** La Bible Autonome et le générateur PDF ont été recâblés sur ce nouveau format universel, garantissant que ces choix croisés s\'impriment correctement sur la feuille de personnage finale.'
        ]
    },    {
        version: '15.16.1 - "Le Tri Social 👔"',
        date: '29 Avril 2026',
        changes: [
            '👔 **Ergonomie (Vie Sociale) :** Remplacement intelligent du filtre de l\'Encyclopédie. L\'onglet de Vie Sociale et d\'Équipement ne propose plus de filtrer par Espèce Féérique, mais propose dorénavant un tri logique par "Profils Autorisés" (Aventurier, Savant, Gentleman...).',
            '🧠 **Cerveau Séparé :** Optimisation du hook `useEncyclopedia`. Le moteur de recherche (useMemo) englobe désormais la matrice de filtrage des profils, et nettoie automatiquement les listes affichées à l\'écran sans le moindre temps de latence.'
        ]
    },    {
        version: '15.15.0 - "La Fée Indépendante 🧚‍♀️"',
        date: '27 Avril 2026',
        changes: [
            '✂️ **Architecture (Découpage) :** Exorcisme majeur de l\'Étape 1. Le panneau des détails de la fée a été extrait vers un composant visuel autonome (`FairyDetailsPanel.js`), allégeant drastiquement le chef d\'orchestre principal.',
            '🧹 **Purification (Code Mort) :** Nettoyage par le vide des variables orphelines, des imports d\'icônes inutilisés et de l\'ancien code de bascule pour le sexe biologique de la fée.',
            '🧠 **Performances (React) :** Sécurisation absolue des Hooks (`useCallback`, `useEffect`) sur l\'assistant Pixie et sur la piste de dés tridimensionnelle pour éviter les re-rendus infinis et satisfaire les règles strictes de compilation.'
        ]
    },
    {
        version: '15.14.0 - "La Magie Décomposée 🔮"',
        date: '27 Avril 2026',
        changes: [
            '🔮 **Lisibilité (Magie) :** Le statut des Pouvoirs n\'est plus résumé sur une seule étiquette étouffante. Chaque pouvoir affiche désormais fièrement deux sceaux distincts : son Niveau (Standard, Profond, Légendaire) et sa Visibilité (Masqué, Démasqué).',
            '♻️ **Architecture (DRY) :** Centralisation du moteur de badges magiques dans le Dictionnaire du Jeu. Les composants de l\'Encyclopédie et de la Création de personnage se délestent de dizaines de lignes de code redondantes.',
            '🎨 **Design System :** Application d\'une charte colorimétrique claire pour les nouveaux doubles badges : Émeraude pour le Standard, Indigo pour le Profond, et Doré pour le Légendaire.'
        ]
    },    {
        version: '15.13.0 - "La Mémoire Intacte 🧠"',
        date: '27 Avril 2026',
        changes: [
            '🛡️ **Stabilité Temporelle (Anti-Amnésie) :** Vos brouillons de personnages et signalements de bugs sont désormais en sécurité. Le noyau du jeu ne se réinitialise plus inutilement lorsque vous basculez d\'un onglet à l\'autre (ex: pour lire vos PDF).',
            '🧠 **Architecture (Cerveau Séparé) :** Exorcisme majeur de la Modale de l\'Encyclopédie. Toute l\'énorme machinerie traduisant les données brutes de la base de données vers l\'interface visuelle a été isolée dans un Hook autonome (`useEncyclopediaModal`).',
            '🧲 **Ergonomie (Tri Magnétique) :** Lors de l\'édition d\'une Fée, les Atouts, Pouvoirs et Capacités déjà acquis sont dorénavant aimantés au sommet de la liste, classés par ordre alphabétique, évitant de longues recherches.',
            '✨ **Éditeur Narratif (Auto-Formateur) :** Finies les longues lignes condensées et illisibles ! Les Avantages et Désavantages s\'affichent sous forme de puces élégantes, et l\'éditeur ajoute dynamiquement la puce suivante via la touche Entrée.',
            '🧹 **Nettoyage (Console) :** Purge des fonctions génératrices de clés (UUID) obsolètes dans le moteur de l\'Encyclopédie pour apaiser le compilateur.'
        ]
    },    {
        version: '15.12.0 - "La Fontaine du DRY ⛲"',
        date: '26 Avril 2026',
        changes: [
            '🧠 **Architecture (Cerveau Centralisé) :** Éradication totale des calculs de combat en doublon. Le moteur central (Reducer) compile désormais de manière autonome l\'Esquive, la Parade et les Points de Vie dès qu\'une compétence évolue, devenant l\'unique dépositaire de la Vérité Absolue.',
            '☁️ **Base de Données (Purge) :** Le compacteur de sauvegarde vers Supabase a été allégé de ses redondances mathématiques. Il photographie dorénavant l\'état exact du Cerveau sans recalculer le combat, garantissant une intégrité absolue des données JSONB.',
            '📜 **Parchemin (Pureté Front-End) :** La page du Bilan Visuel a été délestée de son usine à gaz algorithmique. Elle redevient une interface React pure (JSX/Tailwind) qui se contente d\'afficher les statistiques pré-calculées, supprimant toute divergence entre l\'affichage à l\'écran et le PDF imprimé.'
        ]
    }
];

// ✨ EXTRACTION DYNAMIQUE (Le Parseur est sécurisé !)
// On coupe la chaîne sur le tiret pour récupérer juste le numéro pour l'UI,
// tout en conservant le nom complet dans la modale des archives.
export const APP_VERSION = VERSION_HISTORY[0].version.split(' - ')[0] || VERSION_HISTORY[0].version;
export const BUILD_DATE = VERSION_HISTORY[0].date;
