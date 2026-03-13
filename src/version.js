// src/version.js

import buildInfo from './build-info.json'; 

export const APP_VERSION = buildInfo.version;
export const BUILD_DATE = buildInfo.buildDate;
export const VERSION_HISTORY = [
 {
    version: '13.6.1',
    date: '13 Mars 2026',
    changes: [
      '🐛 **Génétique Féérique (Correction) :** Rétropédalage sur la règle des limites. La capacité "Caractéristique accrue" ne repousse plus le plafond d\'investissement lors de la répartition des points. Elle redevient un pur "Bonus" appliqué post-création par le moteur de jeu, évitant ainsi le cumul (double bonus) qui permettait de briser l\'équilibrage.'
    ]
  },
  {
    version: '13.6.0',
    date: '13 Mars 2026',
    changes: [
      '🐛 **Génétique Féérique (Limites raciales) :** Correction d\'une faille permettant aux Héritiers de dépasser les plafonds physiologiques de leur espèce à la création (ex: Un Elfe est désormais strictement bloqué à 3 en Force).',
      '🧬 **Caractéristiques accrues :** Le moteur de jeu détecte désormais si l\'Héritier possède une "Caractéristique accrue" pour repousser intelligemment son plafond racial de +1 point.'
    ]
  },
  {
    version: '13.5.0',
    date: '13 Mars 2026',
    changes: [
      '🧬 **Le Puits des Âmes (Évolution) :** Début du grand chantier de la Boutique d\'Expérience (XP). Création du moteur mathématique centralisant scrupuleusement tous les coûts d\'évolution prescrits par le Livre de Base (Caractéristiques, Masque, Féérie, Utiles, Futiles, Fortune, Atouts et Spécialités).'
    ]
  },
  {
    version: '13.4.0',
    date: '12 Mars 2026',
    changes: [
      '🛠️ **Mémoire de la Vie Sociale :** Le système de chargement du Nuage a été corrigé. Le douanier laisse désormais passer la Spécialité gratuite offerte par le métier, qui était bien sauvegardée en base mais effacée de la mémoire au rechargement de la fiche.',
      '👥 **Sociabilité Féérique :** Ajout d\'une interface de contact direct dans la liste de la Communauté. Les joueurs peuvent désormais initier l\'envoi d\'une missive pneumatique d\'un simple clic sur le profil d\'un autre Héritier.',
      '📡 **Révolution Pneumatique :** Refonte totale de l\'architecture de communication du Grimoire. Le Télégraphe abandonne son statut de simple outil de support pour devenir un véritable Hub Social.',
      '💬 **Canaux Universels :** Infrastructures permettant d\'héberger des salons globaux, des discussions privées par "Cercles" de jeu, et des correspondances directes entre Héritiers.',
      '⚙️ **Tiroir Pneumatique :** Épuration de l\'interface du Télégraphe. L\'option permettant de basculer entre l\'affichage par "Onglets" et "Flux Unifié" est désormais rangée dans un élégant panneau de configuration interne, accessible via l\'engrenage de l\'en-tête.',
      '🛠️ **Fondations Modulaires :** Ce nouveau panneau de réglages internes prépare le terrain pour de futures options de confort (comme la gestion des alertes sonores du Télégraphe).'	  
    ]
  },
  {
    version: '13.3.0',
    date: '12 Mars 2026',
    changes: [
      '👥 **Transparence Communautaire :** Le tableau de bord d\'administration est désormais publiquement accessible sous le nom de "Communauté". Tous les Héritiers peuvent y consulter la liste des membres, leurs titres honorifiques et les métriques d\'activité du serveur.',
      '🛡️ **Privilèges Restreints :** Bien que l\'affichage soit public, les pouvoirs de promotion au rang de Gardien et l\'octroi de badges restent techniquement et visuellement verrouillés par le Super Administrateur.',
      '📝 **Moteur Grammatical :** Le système d\'accord des textes reconnaît désormais parfaitement le sexe de votre Faux-Semblant dans l\'étape des Compétences Utiles et dans la Boutique (Équipements & Vie Sociale). Finis les Savants et les Aventuriers quand on incarne une Lady ou une Érudite !'
    ]
  },
  {
    version: '13.2.0',
    date: '12 Mars 2026',
    changes: [
      '👯 **Clonage d\'Héritiers :** Il est désormais possible de dupliquer n\'importe quel personnage depuis le tableau de bord en un clic. Idéal pour concevoir des variantes ou expérimenter sans risquer d\'altérer la fiche originale !',
      '🛡️ **Intégrité de la Copie :** Lors du clonage, l\'Héritier généré perd automatiquement tout Sceau de validation pour reprendre le statut d\'un Brouillon modifiable.',
      '🎁 **Le Don des Héritiers (Parchemin Scellé) :** Les joueurs (et particulièrement les Doctes) peuvent désormais céder la propriété d\'un de leurs personnages à un autre membre de la communauté.',
      '💌 **Système de Codes Sécurisés :** Le transfert se fait via un code secret unique (ex: `DON-A7X9`), garantissant que seul le destinataire choisi puisse adopter le personnage dans son propre Grimoire.'
    ]
  },
  {
    version: '13.1.0',
    date: '12 Mars 2026',
    changes: [
      '🛡️ **Le Grand Bouclier d\'Aegis (Audit d\'Infrastructure) :** Renforcement total et purification de la base de données. Verrouillage absolu contre les failles d\'injection (Search Path Poisoning, incantations SQL du Conseil), nettoyage des reliques obsolètes, pose de contraintes mathématiques et temporelles (Cohérence de l\'XP, Statuts, Triggers), et blindage intelligent des portiques de sécurité communautaires (RLS).',
      '⚖️ **Lois de la Magie (Anomalie Féérique) :** L\'encart de l\'Anomalie Féérique a été révisé par le Conseil. Il est désormais impossible pour un jeune Héritier de contourner les règles en s\'appropriant les dangereux Pouvoirs Profonds ou Légendaires appartenant aux autres espèces.',
      '🔒 **Le Sceau des Héritiers :** Le statut de la fiche de personnage (brouillon, validé, scellé) est désormais parfaitement mémorisé et restitué par le système de sauvegarde du Nuage.',
      '🛡️ **Verrouillage Automatique :** L\'ouverture d\'un personnage scellé ou validé active instantanément le bouclier de sécurité de l\'application (Mode Lecture Seule), figeant ainsi l\'intégralité des champs modifiables.',
      '👁️ **Conseil des Gardiens :** Restauration de l\'interface visuelle pour le format "Chirurgical". Les Gardiens voient à nouveau précisément les ajouts (vert) et les retraits (rouge) concernant les Atouts, Pouvoirs et Capacités.'
    ]
  },
  {
    version: '13.0.4',
    date: '11 Mars 2026',
    changes: [
      '🐛 **Hémorragie Mémorielle (Futiles) :** Résolution d\'une perte de données silencieuse lors de la sauvegarde d\'une Fée dans l\'Encyclopédie. Un conflit de nomenclature (franglais) entre `name` et `nom` provoquait la suppression des compétences futiles fixes dans la base de données.'
    ]
  },
  {
    version: '13.0.3',
    date: '11 Mars 2026',
    changes: [
      '🧠 **Spécialités Féériques (Livre de Base) :** L\'Encyclopédie permet désormais aux Gardiens d\'utiliser la brique dorée ("Spécialité Offerte") sur une Fée pour octroyer une spécialité hors-prédilection (ex: "Langue juive" pour le Golem ou "Nage" pour l\'Ondine).',
      '🛡️ **Moteur de Jeu (Cheval de Troie) :** Le super-calculateur différencie désormais strictement les Prédilections (octroyant un bonus de base de +2) des Spécialités Pures inhérentes aux Fées, résolvant les incohérences de statistiques sur la feuille de personnage.'
    ]
  },
  {
    version: '13.0.2',
    date: '11 Mars 2026',
    changes: [
      '📠 **Mécanique Pneumatique :** Résolution du défaut d\'affichage des très longues missives. Le Télégraphe force désormais le retour à la ligne des mots interminables et intègre un ascenseur vertical (barre de défilement) natif et permanent grâce à une structure Flexbox rigoureuse (`min-h-0`).'
    ]
  },
  {
    version: '13.0.1',
    date: '11 Mars 2026',
    changes: [
      '🧹 **L\'Affaire du Gobelin (Purification) :** Nettoyage majeur de l\'éditeur de Fées dans l\'Encyclopédie. Résolution des conflits de nommage qui empêchaient le constructeur visuel (Lego) de charger correctement les compétences complexes (ex: Conduite) et les compétences futiles.',
      '✨ **Restructuration Mémorielle :** Suppression des adaptateurs de données complexes et obsolètes. Le système lit désormais la base de données de manière pure et directe, garantissant le chargement instantané de l\'identité de la fée et de ses potentiels (min/max) stricts.',
      '📠 **Mécanique Pneumatique :** Résolution du défaut d\'affichage des très longues missives. Le Télégraphe force désormais le retour à la ligne des mots interminables et intègre un ascenseur vertical (barre de défilement) natif et permanent grâce à une structure Flexbox rigoureuse (`min-h-0`).'
    ]
  },
  {
    version: '13.0.0',
    date: '10 Mars 2026',
    changes: [
      '🧬 **Système d\'Expérience (Phase 1) :** Ajout d\'une machine à états dans la base de données (`statut`, `xp_total`, `xp_depense`) pour préparer la transition entre la "Création de Personnage" et "L\'Évolution en Jeu".',
      '🛡️ **Le Sceau de l\'Héritier :** Intégration d\'un monumental système de verrouillage à la fin du Récapitulatif. Les joueurs peuvent désormais "Sceller" leur personnage une fois la création terminée pour débloquer l\'affichage de leur jauge d\'XP.',
      '🛡️ **La Douane du Cerbère :** Impossible de sceller un Héritier incomplet ! Le Récapitulatif scanne désormais mathématiquement l\'intégralité de la fiche (Caractéristiques, Utiles, Futiles, Bonus d\'Esprit). Tout oubli de dépense bloque le scellage et est signalé au joueur.',
      '🎁 **Atout du Métier :** Intégration de la règle du Livre de Base offrant une Spécialité gratuite liée à l\'Activité Principale. Le joueur peut désormais définir son métier et choisir sa spécialité directement depuis la page de Personnalisation.',
      '🖨️ **Imprimerie Connectée :** La fiche PDF imprime désormais le véritable texte saisi par le joueur pour son "Métier" (au lieu d\'une estimation), et inscrit clairement sa spécialité offerte avec la mention "(Métier)" à côté de la compétence.',
      '🧠 **Métiers Intelligents :** Le choix de l\'Activité Principale à l\'Étape 10 (Personnalisation) lit désormais dynamiquement l\'inventaire du joueur pour proposer un menu déroulant des métiers réellement acquis lors de l\'Étape 9 (Vie Sociale).',
      '✍️ **Précision Narrative :** Ajout d\'un champ "Texte Libre" permettant de colorer narrativement le métier sélectionné (ex: "Chirurgien" pour le domaine "Médecin"), parfaitement répercuté sur le Bilan et le PDF.',
      '🐛 **Mémoire de l\'Encyclopédie :** Résolution d\'une anomalie qui vidait le constructeur de compétences (Utiles et Futiles) lors de l\'édition d\'une fée existante. La modale puise désormais directement ces informations dans la mémoire du jeu (Nuage) au lieu de faire une lecture incomplète de la base de données.'
    ]
  },
  {
    version: '12.6.0',
    date: '10 Mars 2026',
    changes: [
      '🐛 **Traduction des Archives (Bilan & PDF) :** Les atouts sélectionnés affichent de nouveau leur nom lisible (et non plus leur code technique UUID) dans la page de récapitulatif et sur les fiches PDF générées, assurant la rétrocompatibilité parfaite entre les anciens et nouveaux personnages.',
      '🐛 **Moteur Grammatical :** Résolution d\'un crash critique (TypeError) lié à la fonction d\'accord des textes. Le système tentait d\'appliquer un nettoyage de texte (.trim) sur un tableau entier au lieu de cibler la valeur masculine.'
    ]
  },
{
    version: '12.5.0',
    date: '10 Mars 2026',
    changes: [
      '🪄 **L\'Anomalie Féérique :** Refonte de l\'Étape 3 (Pouvoirs) avec l\'ajout d\'un encart secret permettant de déclencher le fameux atout "Anomalie Féérique". Il permet d\'assimiler de façon fluide et visuelle un pouvoir appartenant à une autre espèce.',
      '👻 **Atout Fantôme :** L\'acquisition d\'une Anomalie déduit intelligemment et automatiquement un point dans la jauge des Atouts de l\'Étape 4 en arrière-plan, permettant de garder une interface parfaitement claire.',
      '🐛 **Câblage de l\'Encyclopédie :** Résolution d\'une anomalie empêchant l\'affichage des Compétences Futiles dans le constructeur de bonus (Lego) lors de l\'édition des Atouts, Pouvoirs et Capacités.',
      '✨ **Artisanat à la volée :** Intégration d\'un système de "Creatable Select" dans le constructeur de bonus (Lego). Il est désormais possible de forger une nouvelle Compétence Futile directement depuis le menu déroulant sans quitter l\'éditeur.'
    ]
  },
  {
    version: '12.4.0',
    date: '10 Mars 2026',
    changes: [
      '🖨️ **Imprimerie Connectée :** Le générateur PDF a été solidement branché sur le catalogue de "Vie Sociale" du jeu. L\'équipement, les armes, les véhicules et les contacts s\'impriment désormais parfaitement dans leurs encarts respectifs en traduisant les ID du Nuage en noms lisibles.',
      '🖨️ **Imprimerie Globale :** L\'exportation PDF depuis la page d\'accueil (Liste des Personnages) transmet désormais correctement l\'intégralité du catalogue du jeu à l\'imprimeur. Fini l\'équipement fantôme !',
      '🔍 **Audit du Conseil :** Ajout d\'une sonde de débogage visuelle sur la fonction de rejet du Conseil des Gardiens pour intercepter et afficher les erreurs bloquant silencieusement les requêtes.',
      '🐛 **Fluidité du Conseil :** Harmonisation des boutons de rejet (standards et escaladés) pour qu\'ils transmettent l\'intégralité des données de la proposition au Télégraphe Pneumatique, résolvant ainsi l\'erreur d\'identifiant UUID.'
    ]
  },
  {
    version: '12.3.0',
    date: '10 Mars 2026',
    changes: [
      '📠 **Alertes Pneumatiques (Temps Réel) :** L\'application affiche désormais une notification volante instantanée lorsqu\'une nouvelle missive arrive dans votre Télégraphe, évitant de rater une réponse du Conseil.',
      '🔴 **Pastille d\'Activité :** L\'icône du Télégraphe bénéficie désormais d\'une pastille rouge bondissante pour signaler les messages non lus aux Héritiers (et plus seulement aux Gardiens).',
      '⚙️ **Contrôle Total :** Un nouvel interrupteur a été ajouté dans la page "Mon Grimoire" (Immersion) pour permettre aux joueurs de désactiver ces alertes volantes s\'ils préfèrent ne pas être dérangés.',
      '🖨️ **Forge PDF (Imprimerie) :** Amélioration du moteur de rendu CSS pour l\'exportation PDF. Les textes longs (Apparence, Pouvoirs) sur la deuxième page s\'adaptent désormais intelligemment sans superposer les éléments visuels.'
    ]
  },
{
    version: '12.2.0',
    date: '10 Mars 2026',
    changes: [
      '🎨 **Ergonomie Communautaire :** Le suivi des propositions personnelles ("Mes Propositions") est désormais scindé en 4 onglets dynamiques (En attente, Pré-validés, En ligne, Rejetés) pour une lecture infiniment plus claire.',
      '📠 **Connexion Télégraphique :** Le rejet d\'une proposition par le Conseil des Gardiens génère désormais automatiquement un ticket et une missive détaillée dans le Télégraphe Pneumatique de l\'Héritier concerné.',
      '💌 **Immersion Narrative :** La justification du refus est directement intégrée dans le message sous les traits d\'une réponse officielle de l\'administration féérique.',
      '🪂 **Filet de Sécurité SQL :** Si une requête approuvée par les Gardiens échoue dans la base de données (ex: erreur de syntaxe), elle n\'est plus perdue. Elle passe désormais au statut "Escaladé".',
      '🚨 **Sas d\'Intervention :** Création d\'un onglet "Escalades" réservé au Super Administrateur permettant de lire le rapport de crash SQL et d\'intervenir manuellement sur la proposition.',
      '📠 **Dépêches d\'Urgence :** Lors d\'un crash d\'incantation, le Télégraphe Pneumatique alerte instantanément l\'auteur de la proposition, le Gardien qui a tenté la validation, ainsi que le Super Admin.'
  ]
  },
  {
    version: '12.1.0',
    date: '10 Mars 2026',
    changes: [
      '🛡️ **Stabilité du Conseil (Gardiens) :** Résolution d\'un crash SQL critique (`check_predilection_type`). Le générateur de requêtes filtre désormais intelligemment les blocs de compétences vides laissés par erreur dans le constructeur visuel avant de les envoyer à la base de données.',
      '🛡️ **Protection des Saisies (Gardiens) :** L\'éditeur de fées de l\'Encyclopédie (BonusBuilder) utilise désormais des menus déroulants stricts pour l\'assignation des compétences de prédilection. Cela éradique définitivement les erreurs SQL causées par des fautes de frappe (ex: "Habilités" au lieu de "Habiletés").',
      '👥 **Transparence Communautaire :** Création d\'un espace "Mes Propositions" dans l\'Encyclopédie. Les joueurs peuvent désormais suivre en temps réel l\'état de leurs requêtes (En attente, Pré-validé, En ligne, Rejeté).',
      '⚖️ **Justice des Gardiens :** Lorsqu\'un Gardien du Savoir rejette une proposition, il doit désormais obligatoirement rédiger un motif de refus. Cette justification est directement visible par le joueur concerné dans son espace personnel.'
    ]
  },
  {
    version: '12.0.0',
    date: '9 Mars 2026',
    changes: [
      '🧹 **Nettoyage de Printemps (Version Majeure) :** Purification des sources. Suppression des fonctions orphelines et des mouchards de débogage obsolètes dans la synchronisation du Nuage pour alléger la console du navigateur.',
      '🧠 **Architecture Pure (React) :** Refonte de la page "Mon Grimoire" via le principe de "Lifting State Up". Éradication des "Refs" impératives complexes : le composant parent centralise désormais la mémoire globale et la sauvegarde des préférences.',
      '🗺️ **Système de Navigation (React Router) :** Refonte totale du routage de l\'application. Abandon de la navigation par état ("God Component") au profit d\'un véritable système d\'URLs (`/encyclopedia`, `/creator`, etc.).',
      '⏪ **Confort Utilisateur :** L\'utilisation des boutons "Précédent/Suivant" du navigateur et le rechargement de page (F5) fonctionnent désormais parfaitement sans éjecter le joueur à l\'accueil.',
      '🏎️ **Fluidité Absolue (Anti-Lag) :** Optimisation majeure du moteur de jeu (`characterEngine`). Le super-calculateur ne se déclenche plus inutilement lors de la saisie des champs narratifs (Nom, Apparence, Taille, etc.), garantissant une frappe au clavier parfaitement fluide, même sur les anciens téléphones.'	  
    ]
  },
  {
    version: '11.4.0',
    date: '8 Mars 2026',
    changes: [
      '⚙️ **Performance et Accessibilité :** Ajout d\'une option "Physique 3D Expérimentale" dans les paramètres d\'Immersion. Cette option permettra de basculer vers un futur moteur de lancer de dés très gourmand, tout en préservant les anciens smartphones.',
      '👁️ **Lisibilité des Gardiens :** Suppression du texte barré dans la colonne des anciennes valeurs du Delta (Conseil des Gardiens). Le code couleur rouge se suffit à lui-même et rend la relecture beaucoup plus agréable.',
      '🎲 **La Forge Tridimensionnelle :** Intégration du moteur physique `3d-dice` permettant de véritables lancers de dés WebGL soumis à la gravité, avec des modèles polygonaux texturés.'
  ]
  },
  {
    version: '11.3.0',
    date: '8 Mars 2026',
    changes: [
      '⚙️ **Automatisation des Requêtes (Gardiens) :** Les administrateurs n\'ont plus besoin d\'exécuter manuellement le code SQL. Un simple clic exécute désormais la transaction en toute sécurité !',
      '🛡️ **Traçabilité du Conseil :** Le système mémorise de façon permanente l\'identité du Gardien ayant validé la proposition ainsi que l\'heure exacte de l\'approbation.',
      '🛑 **Filet de Sécurité SQL :** En cas d\'erreur d\'exécution en base de données, la procédure s\'interrompt et la proposition est préservée (non archivée).',
      '👁️ **Principe des Quatre Yeux :** Le Conseil des Gardiens détecte désormais si un membre tente de valider sa propre proposition. Un avertissement immersif lui est alors présenté pour l\'encourager à solliciter la relecture d\'un pair.'
    ]
  },
  {
    version: '11.2.2',
    date: '7 Mars 2026',
    changes: [
      '🐛 **Hub Multijoueur :** Les joueurs voient désormais correctement la liste de leurs Héritiers pour rejoindre un Cercle.',
      '🚪 **Sortie de Table :** Les Héritiers peuvent désormais quitter librement un Cercle de jeu. Les Doctes gagnent le pouvoir de dissoudre complètement une campagne terminée ou abandonnée.'

    ]
  },
  {
    version: '11.2.0',
    date: '7 Mars 2026',
    changes: [
      '🔍 **Encyclopédie Intelligente :** Ajout d\'un filtre croisé permettant de trier instantanément les Capacités, Pouvoirs et Atouts selon l\'espèce féérique à laquelle ils appartiennent.',
      '🔓 **Édition Libre :** Déverrouillage des champs de Titre dans l\'Encyclopédie. Il est désormais possible de suggérer une modification ou une correction orthographique sur le nom d\'une Fée, d\'une Capacité, d\'un Pouvoir ou d\'un Atout.'
    ]
  },
  {
    version: '11.1.0',
    date: '7 Mars 2026',
    changes: [
      '🐛 **Câblage du Corbeau Messager :** Rebranchement de la ligne télégraphique interne. Les préférences de notification (abonnements aux mises à jour) sont de nouveau correctement sauvegardées lors de la mise à jour du Grimoire.',
      '♻️ **Ergonomie (Étape 5) :** Ajout d\'un bouton de réinitialisation rapide sur la page des Caractéristiques permettant de redistribuer facilement ses 10 points sans effacer le reste du personnage.',
      '🎨 **Harmonie Visuelle (Étape 2) :** Les descriptions des Capacités Naturelles s\'affichent désormais en clair par défaut (comme pour les Pouvoirs et Atouts), évitant la confusion liée à l\'ancien bouton d\'information rétractable.',
      '🗄️ **Fondations des Cercles :** Création de l\'architecture Supabase pour le Hub multijoueur (Cercles et Membres).',
      '👁️ **L\'Éveil Permanent :** Le Docte peut initier ses joueurs aux fées secrètes (Orientales et/ou autres) de manière permanente sur leur profil.',
      '🔒 **Loi du Silence :** L\'Encyclopédie reste pour le moment verrouillée pour les simples Héritiers.',
      '🧹 **Épuration de l\'Interface :** Retrait de la fonction d\'importation de fiches JSON. L\'interface des personnages gagne en clarté, la sauvegarde dans le Nuage (Supabase) se suffisant désormais à elle-même.',
      '🏛️ **Le Hub Multijoueur :** Déploiement de la grande interface "Mes Cercles" centrée sur les campagnes. Un onglet par aventure, s\'adaptant magiquement au rôle du joueur (Docte ou Héritier).',
      '🎭 **L\'Illusion du Masque :** À la table virtuelle, les joueurs ne voient que l\'identité sociale des autres personnages pour préserver le mystère des Faux-Semblants (le Docte a une vue complète).',
      '➕ **Ergonomie Naturelle :** Système de création et d\'invitation par code accessible via un bouton "+" très web-friendly.',
      '🔒 **Le Sceau des Origines :** Fermeture par défaut de toutes les fées étendues. Seules les 24 fées (et le Faux-Semblant enfoui) issues du Livre de Base sont désormais accessibles publiquement à la création.'
	]
  },
  {
    version: '11.0.0',
    date: '7 Mars 2026',
    changes: [
      '👑 **Le Choix des Voies :** Déclaration de votre statut ("Joueur" ou "Docte") dans les paramètres du compte. Les Doctes ont un accès total, tandis que les Joueurs se voient appliquer la Loi du Silence.',
      '🔒 **Le Sceau du Silence :** L\'Encyclopédie est désormais majestueusement verrouillée pour les Joueurs afin de préserver les lourds secrets de l\'univers des Héritiers (Accessibilité réservée aux Doctes).',
      '💎 **Titre de Noblesse (Mécène) :** Création d\'un badge honorifique étincelant pour remercier les premiers et généreux donateurs (Ko-Fi) qui soutiennent l\'entretien du Grimoire.'
    ]
  },
  {
    version: '10.10.0',
    date: '7 Mars 2026',
    changes: [
      '🛡️ **Chirurgie SQL (Générateur) :** Le moteur de validation des Gardiens du Savoir fait désormais la différence entre les Objets JSON et les Tableaux (Arrays) lors de la création d\'une nouvelle Fée, évitant ainsi l\'erreur PostgreSQL `42804` lors de l\'insertion des Traits ou Avantages.'
    ]
  },
  {
    version: '10.9.0',
    date: '7 Mars 2026',
    changes: [
      '🧚 **Éducation Féérique :** Pixie a appris de nouveaux tours ! Son cerveau cognitif analyse désormais l\'ancienneté de votre Fée, votre Profil Majeur, et scrute même votre équipement (armes à feu, véhicules, titres de noblesse) pour y réagir en direct !',
      '📱 **Guérison Mobile (iOS) :** Le catalogue des Compétences Futiles s\'affiche désormais instantanément et sans bug sur iPhone (Safari/Chrome). L\'étape est désormais branchée directement sur le Nuage au lieu de subir les coupures réseau silencieuses d\'Apple.',
      '📱 **Immunité Mobile (iOS) :** Le gigantesque catalogue de l\'Équipement (Étape 9) est désormais chargé à la racine de l\'application dans le Nuage. Finis les écrans blancs et les crashs de requêtes capricieuses sur iPhone et Safari !',
      '⚡ **Vitesse Fulgurante :** L\'Étape 9 s\'affiche désormais instantanément sans le moindre temps de chargement des étals.',
      '📱 **Bouclier iOS (Encyclopédie) :** Le Conseil des Gardiens et l\'éditeur de Fées sont désormais immunisés contre les pannes de chargement sur iPhone et Safari.',
      '⚡ **Vitesse Absolue :** Les listes de Pouvoirs, Atouts, Capacités et Compétences n\'ont plus besoin d\'être téléchargées à l\'ouverture des modales. Elles sont directement propulsées par le Nuage Central !',
      '🐛 **Clarté Féérique (Étape 2) :** L\'interface affiche désormais fièrement les deux Capacités Naturelles innées de votre Héritier (celles qui sont acquises d\'office), au-dessus de la troisième capacité à choisir.',
      '🐛 **Illusion d\'Optique (Étape 3) :** Résolution d\'une faille linguistique hilarante où l\'ordinateur considérait les pouvoirs "Démasqués" comme "Masqués" (parce que le mot "dé-masqué" contient la racine "masque"). Les bonnes icônes 🎭 et 🔥 sont de retour !',
      '🐛 **Guérison Fatale (Écran Blanc) :** Résolution d\'un crash critique empêchant les personnages masculins d\'accéder à l\'Étape du Bilan. Le moteur grammatical tentait de manipuler un tableau de mots comme s\'il s\'agissait d\'un texte unique.'
    ]
  },
   {
    version: '10.8.0',
    date: '6 Mars 2026',
    changes: [
      '🧱 **Le Grand Œuvre :** L\'interface de création des Fées dans l\'Encyclopédie utilise désormais le Constructeur Lego universel pour forger les Compétences Utiles et Futiles.',
      '🧹 **Purification du Code :** Suppression de centaines de lignes d\'interfaces complexes "faites main" devenues obsolètes grâce à la puissance du `BonusBuilder`.',
      '🤖 **Moteur de Traduction :** Le générateur des propositions traduit désormais intelligemment les noms des briques futiles en Identifiants (UUID) valides pour la base de données.',
      '🐛 **Connexion Rétablie (Étape 1) :** Restauration des câblages permettant de sauvegarder l\'Héritage (Fée) et le Sexe, qui avaient disparu lors de la grande migration vers le Nuage de données.',
      '📜 **Immersion Renforcée :** Éradication définitive des popups `alert()` natifs du navigateur lors de la création de personnage. Le Grimoire utilise désormais ses propres bannières magiques pour vous rappeler de remplir votre Nom, Sexe et Héritage !',
      '🐛 **Synchronisation des Atouts (Étape 4) :** Résolution d\'une anomalie bloquant la sélection visuelle des Atouts Féériques en modification de personnage (l\'interface tentait de lire des UUID là où la mémoire de l\'Héritier conservait des Noms).',
      '🔮 **Nuances Magiques :** Les Pouvoirs Profonds et Légendaires peuvent désormais être spécifiés comme "Masqués" ou "Démasqués", respectant scrupuleusement les règles du Livre de Base.',
      '🏷️ **Badges Combinés :** L\'Encyclopédie génère des badges intelligents combinant le Niveau (Profond/Légendaire) et la Visibilité (Masqué/Démasqué) d\'un pouvoir.'
    ]
  },
  {
    version: '10.7.0',
    date: '6 Mars 2026',
    changes: [
      '📱 **Accessibilité Mobile (iOS) :** La proposition d\'installation du Grimoire sur iPhone s\'affiche désormais fièrement au premier plan et n\'est plus bloquée par la toile de fond.',
      '🛡️ **Sécurité Narrative :** Les mystérieuses erreurs techniques (RLS) dues à une expiration de session en arrière-plan sont désormais traduites en un message immersif guidant l\'Héritier.',
      '🩹 **Stabilisation du Nuage :** Restauration des variables de mémorisation perdues lors de la grande migration pour la création de Compétences Futiles sur-mesure.',
      '🧠 **Profils Indépendants :** L\'étape des Profils est désormais 100% autonome et blindée contre les crashs de chargement grâce à un filet de sécurité.',
      '📖 **Pierre de Rosette (Gardiens) :** Le système de différences relationnelles (Delta) traduit désormais magiquement les codes informatiques complexes en noms lisibles (Fées, Atouts, Pouvoirs).',
      '📱 **Fluidité Mobile :** Éradication des popups d\'alerte natives du navigateur lors de l\'édition de l\'Encyclopédie. Les messages bloquants s\'affichent désormais de manière élégante et visible sur téléphone.',
      '🛡️ **Traduction Étendue :** Le traducteur d\'anomalies est désormais connecté aux propositions de l\'Encyclopédie, guidant mieux les joueurs si leur session expire en plein vol.',
      '🛡️ **Fluidité du Conseil :** La modale de confirmation des Gardiens du Savoir se referme désormais avec élégance et instantanément après la validation d\'une requête.',
      '🔍 **Audit Visuel Amélioré :** Le Conseil des Gardiens affiche désormais les différences de textes sous forme d\'un tableau à deux colonnes (Nouveau à gauche, Ancien rayé à droite) pour une relecture infiniment plus aisée !',
      '✨ **Typographie Naturelle (Gardiens) :** Lors de la création d\'un élément, l\'encart du Delta affiche désormais les étiquettes et les textes "en ligne". Les paragraphes s\'écoulent naturellement avec un retour à la marge propre, façon livre.'
    ]
  },
{
    version: '10.6.0',
    date: '5 Mars 2026',
    changes: [
      '☁️ **Le Nuage de Données (Context API) :** Création du `CharacterContext`. Le Grimoire possède désormais un esprit centralisé accessible de partout. Adieu le "Composant Dieu" !',
      '🧹 **Purge Architecturale :** Nettoyage massif d\'`App.js` et de toutes les étapes de création (`Step1` à `Step11`). Suppression de l\'envoi manuel des données (Prop Drilling).',
      '🧠 **Étapes Autonomes :** Chaque page du créateur de personnage est désormais indépendante, intelligente, et puise directement sa magie dans le Nuage.',
      '🛡️ **Stabilité Renforcée :** Sécurisation du rendu des Profils, des Caractéristiques et des Compétences Futiles contre les erreurs de chargement à vide.'
    ]
  },
  {
    version: '10.5.0',
    date: '5 Mars 2026',
    changes: [
      '👑 **Administration Unifiée :** Fusion élégante des registres d\'utilisateurs et des métriques du Grimoire au sein d\'un unique Tableau de Bord interactif (système d\'onglets).',
      '📖 **Registre Magique :** Le Journal des Mises à jour s\'ouvre désormais sous forme d\'une magnifique modale superposée d\'un simple clic sur le numéro de version (Adieu l\'ancienne page dédiée !).',
      '🛡️ **Chirurgie SQL :** L\'immense logique de génération des requêtes du Conseil des Gardiens a été extraite vers un moteur dédié (`sqlGenerator.js`), purifiant l\'interface visuelle.',
      '🖼️ **Toile de Fond :** Allègement drastique du cœur de l\'application (`App.js`) en déplaçant les lourdes décorations vectorielles (engrenages, astrolabes) dans une toile indépendante.',
      '🪶 **Corbeau Messager :** Le système de préférences de notifications a trouvé sa place naturelle en fusionnant définitivement au sein de la page "Mon Grimoire".'
    ]
  },
  {
    version: '10.4.0',
    date: '5 Mars 2026',
    changes: [
      '🧹 **Architecture Maîtresse (Refactoring) :** Le code du Grimoire a subi une purification majeure. Centralisation des services système et séparation stricte entre l\'interface visuelle et la logique pure.',
      '🧠 **Cerveau Indépendant :** Le colossal moteur mathématique de calcul des statistiques (Entregent, PP, Rangs) a été extrait de l\'application principale vers son propre noyau dédié.',
      '📄 **Forge PDF Isolée :** L\'immense machinerie générant les feuilles de personnages a été déplacée dans sa propre usine pour alléger drastiquement les utilitaires de base.',
      '🪄 **Magie Unifiée :** Les étapes d\'Héritage Féérique (Capacités, Pouvoirs et Atouts) ont fusionné sous un seul et même toit pour une maintenance parfaite.',
      '🐛 **Guérison de l\'Amnésie :** Les joueurs conservent désormais précieusement leurs Traits Dominants lorsqu\'ils explorent différentes fées dans le menu à l\'Étape 1.'
    ]
  },
  {
    version: '10.3.0',
    date: '5 Mars 2026',
    changes: [
      '🧱 **Constructeur "Lego" Universel :** Refonte totale du moteur de règles de l\'Encyclopédie. Les Gardiens peuvent désormais configurer des effets techniques complexes en assemblant des briques visuelles colorées (Bonus, Compétences, Fortune).',
      '🔀 **Règles Féériques Flexibles :** Intégration d\'un système d\'étiquettes (tags) pour gérer parfaitement les mécaniques de "Choix" de l\'univers (ex: "Mêlée OU Tir" ou "Spécialité au choix").',
      '📚 **Spécialités Intelligentes :** Le nouveau constructeur trie automatiquement les spécialités (Officielles vs Communauté) et permet d\'en forger de nouvelles à la volée depuis la modale.',
      '🐛 **Correctif Grimoire :** Rétablissement du chargement du catalogue des compétences lors de l\'édition des Pouvoirs et des Capacités.'
    ]
  },
  {
    version: '10.2.0',
    date: '4 Mars 2026',
    changes: [
      '🎩 **Le Salon VIP "Mon Grimoire" :** Refonte totale de la page Compte transformée en un véritable tableau de bord (Identité, Immersion, Notifications, Mécénat).',
      '🎖️ **Titres Honorifiques :** Sélectionnez votre Badge favori comme "Titre Actif". Il s\'affichera désormais en grand au sommet de l\'application pour asseoir votre prestige !',
      '🎲 **Immersion 3D :** Personnalisez l\'esthétique de vos jets de dés (Laiton Steampunk, Ivoire Ancien, Améthyste, Sang) directement depuis vos préférences.',
      '💎 **Soutien & Mécénat :** Intégration d\'un encart dédié au soutien du projet (Ko-Fi) avec la possibilité de débloquer le titre exclusif de "Mécène".',
      '💾 **Sauvegarde Unifiée :** Les préférences de Profil et du Corbeau Messager (Notifications) sont désormais synchronisées de façon transparente sous un seul grand bouton de sauvegarde.',
      '🛡️ **Administration & Sécurité :** Mise en évidence du titre actif des joueurs dans le registre des Gardiens et sécurisation complète (RLS) des préférences de notifications en base de données.'
    ]
  },
 {
    version: '10.1.0',
    date: '4 Mars 2026',
    changes: [
      '📱 **Application Native (PWA) :** Intégration d\'une invitation intelligente et non-intrusive incitant les joueurs à installer le Grimoire sur leur appareil (PC, Android, iOS) pour une immersion hors-ligne optimale.',
      '📝 **Moteur Grammatical Universel :** L\'application accorde désormais magiquement les textes (Traits, Noms de Profils, Métiers) en fonction du sexe biologique de votre personnage grâce à une norme pragmatique côté base de données.',
      '🛡️ **Chirurgie SQL (Gardiens) :** L\'éditeur de l\'Encyclopédie ne réécrit plus tout l\'historique d\'une Fée. Il calcule désormais un "Delta" ultra-précis des relations (Ajouts/Retraits) pour une sécurité absolue de la base.',
      '👁️ **Audit Visuel :** Le Conseil des Gardiens profite d\'un nouvel encart générant des badges verts (+) et rouges (-) pour comprendre les intentions de requêtes communautaires en un clin d\'œil.',
      '✨ **Clarification du Flux :** L\'Étape du Masque (Identité) et l\'Étape du Bilan (Tableau de bord final en lecture seule) ont été proprement scindées pour rendre l\'expérience utilisateur encore plus limpide.'
    ]
  },
	  {
		version: '9.11.0',
		date: '3 Mars 2026',
		changes: [
		  '🧠 **Super-Calculateur (DRY) :** Centralisation absolue des mathématiques du jeu (Scores de compétences, Rangs, Budgets PP). Le moteur principal calcule tout, garantissant une cohérence parfaite sur tous les écrans.',
		  '🧚 **Le Cerveau de Pixie :** Pixie prend vie ! Elle possède désormais plus d\'une centaine de répliques intelligentes, réagit à vos erreurs, s\'émerveille de vos atouts et papote sur le lore de la Belle Époque.',
		  '📄 **Fiche PDF Intelligente :** Les statistiques de combat imprimées (Esquive, Parade, Initiative) prennent désormais en compte *tous* vos modificateurs magiques (Atouts, Prédilections, Profils).',
		  '🛠️ **Constructeur Universel :** Le puissant Constructeur Visuel de Bonus de l\'Encyclopédie a été modularisé et étendu aux Pouvoirs et aux Capacités.',
		  '✨ **Ergonomie :** Affichage immédiat des potentiels (Min/Max) lors de la répartition des caractéristiques, et utilisation de votre vrai pseudo dans l\'interface de compte.'
		]
	  },
	  {
		version: '9.10.0',
		date: '2 Mars 2026',
		changes: [
		  '🐛 **Correctifs (Hotfix) :** Résolution d\'erreurs de syntaxe, nettoyage de variables orphelines et correction de chevauchements lors de la navigation.',
		  '⚙️ **Stabilité :** Optimisation des imports et consolidation des composants React pour éviter les plantages d\'interface.'
		]
	  },
   {
      version: '9.7.0',
      date: '2 Mars 2026',
      changes: [
        ' La Lanterne de Pixie : Pour les Héritiers ayant besoin de calme et de concentration, il est désormais possible de renvoyer Pixie dormir dans sa lanterne ! Un bouton d\'action rapide a été ajouté sur sa bulle.',
        ' Accessibilité & Préférences : Ajout d\'une section dédiée dans les Paramètres du Compte pour réveiller ou rendormir Pixie. Votre choix est sauvegardé sur votre profil.',
        ' Nouveaux Honneurs : La société féérique s\'enrichit de nouveaux badges honorifiques et personnalisés (Tricheuse, Gardien de la Lanterne...) pour récompenser les faits d\'armes et l\'implication des joueurs.'
      ]
    },
    {
      version: '9.6.0',
      date: '2 Mars 2026',
      changes: [
        '🛡️ **Savoir Scellé (Grimoire) :** Les Gardiens du Savoir peuvent désormais "sceller" définitivement une entrée de l\'Encyclopédie, la protégeant ainsi contre toute proposition de modification future.',
        '📜 **Modales Immersives :** Éradication définitive des vilaines fenêtres de confirmation grises du navigateur ("localhost indique..."). Chaque demande critique s\'affiche désormais sur un élégant parchemin (Conseil, Réinitialisations, etc.).',
        '🪄 **Traducteur d\'Anomalies :** Fini les messages d\'erreur en anglais technique ! Les erreurs de la base de données et de connexion sont désormais traduites en alertes narratives intégrées à l\'univers.',
        '⚡ **Sécurité Absolue :** Le scellage des savoirs traverse le bouclier de sécurité (RLS) de manière invisible grâce à l\'intégration de fonctions RPC directement sur le serveur.'
      ]
    },
    {
      version: '9.5.0',
      date: '1er Mars 2026',
      changes: [
        '🎲 **Piste de Lancer 3D :** Intégration d\'un lanceur virtuel complet pour le Système 3D (D8 Prudent, D10 Aventureux, D12 Panache) avec calcul automatique des malus (-3 et -5).',
        '👑 **Mécaniques de Tricherie :** Dépensez 1 point pour lancer les 3 dés d\'un coup (avec détection instantanée des Suites et des Triples) !',
        '📐 **Topologie Réaliste :** La triche à 2 points permet de pivoter le dé. Le système utilise un moteur mathématique calqué sur les arêtes d\'un véritable set de dés physiques.',
        '🌟 **Barre de Progression Magique :** L\'austère numérotation des étapes a été remplacée par de superbes icônes thématiques, des infobulles et une jauge dorée dynamique.'
      ]
    },
    {
      version: '9.4.0',
      date: '1er Mars 2026',
      changes: [
        '🪄 **Constructeur Visuel d\'Atouts :** Refonte de l\'éditeur dans l\'Encyclopédie. Les Gardiens peuvent désormais configurer les bonus techniques (Caractéristiques, Compétences, Spécialités) via une interface intuitive sans taper de code JSON.',
        '📚 **Spécialités Globales :** Le constructeur d\'Atouts est connecté à la base de données. Il permet de sélectionner des spécialités existantes ou d\'en créer de nouvelles à la volée pour toute la communauté.',
        '⚙️ **Moteur de Jeu Amélioré :** Le calculateur intègre désormais de façon native les bonus de rangs bruts et de caractéristiques provenant des Atouts (ce qui ajuste automatiquement les Points de Vie maximums).',
        '🧚‍♀️ **Pixie Intelligente :** L\'assistante Pixie est désormais dotée d\'un véritable "cerveau" (pixieBrain). Elle scrute vos choix à chaque étape (aura d\'alerte colorée) et fournit des conseils contextuels dynamiques.',
        '🐛 **Stabilité :** Résolution de divers bugs de balisage JSX et optimisation du rendu de l\'Encyclopédie.'
      ]
    },
    {
      version: '9.3.0',
      date: '1er Mars 2026',
      changes: [
        '👑 **Titres & Statuts :** Création d\'une toute nouvelle catégorie dans la boutique de Vie Sociale (Étape 9) permettant d\'acquérir des titres de noblesse et d\'intégrer des factions secrètes (Monarchomaques, Sicaires, Technologues, etc.).',
        '✨ **Titres de Prestige :** Intégration des titres ultimes d\'archétypes (Légende vivante, Polémarque, Technarque, Hiérophante...) octroyant un bonus direct de +1 en Fortune.',
        '🛍️ **Inventaire Complet :** Ajout massif de tout l\'équipement avancé manquant (laboratoires, dirigeables, montgolfières, réseaux de contrebande) et des Contacts illustres de l\'univers (PNJs nommés).',
        '⏳ **Économie Temporelle :** Le coût d\'achat des familles féériques nobles et de certains statuts s\'ajuste désormais dynamiquement si votre Fée est "Moderne".',
        '🛠️ **Architecture :** Mise à jour des contraintes de la base de données Supabase pour supporter la nouvelle catégorie "titre".'
      ]
    },
	{
    version: '9.2.0',
    date: '28 Février 2026',
    changes: [
      '🧚 **Assistante Virtuelle :** Arrivée de Pixie, la petite fée interactive qui vole sur votre écran et réagit à vos choix de création de personnage !',
      '🎖️ **Nouveau Badge :** Ajout du titre de "Pionnier Pneumatique 📠" pour récompenser les premiers testeurs du Télégraphe.',
      '🎨 **Ergonomie :** Les boutons de navigation (Suivant/Précédent) ne flottent plus mais sont désormais élégamment intégrés au cœur du grimoire.',
      '📱 **Interface :** Optimisation de l\'en-tête principal pour compacter le titre et gagner un maximum d\'espace de lecture sur tous les écrans.'
    ]
  },
  {
    version: '9.0.0',
    date: '27 Février 2026',
    changes: [
      '📠 **Télégraphe Pneumatique :** Déploiement officiel du système de communication ! Échangez des dépêches avec les autres joueurs connectés et l\'équipe d\'administration.',
      '📡 **Traqueur d\'Activité :** Détection automatique des Héritiers en ligne et de leur dernière connexion pour faciliter les échanges.'
    ]
  },  
  {
    version: '8.33.0',
    date: '27 Février 2026',
    changes: [
      '📖 **Encyclopédie Dynamique :** Remplacement de l\'ancien format texte par un magnifique Constructeur Visuel pour les Compétences Utiles, directement branché sur la base de données.',
      '🛡️ **Conseil des Gardiens :** Réparation et sécurisation de la génération du code SQL pour les nouvelles tables relationnelles.',
      '♻️ **Création de Personnage :** Ajout d\'un bouton de Réinitialisation rapide pour l\'étape des Compétences Futiles.',
      '🎭 **Jokers Féériques :** Intégration transparente des compétences "Au choix" (ex: Compétence artistique) exclusives à certaines Fées avec champs de précision.',
      '🛠️ **Optimisation (Refactoring) :** Centralisation globale pour un code plus propre et robuste.',
      '🧹 **Nettoyage Sécurité :** Suppression définitive de vieilles données en dur.'
    ]
  },
 {
    version: '8.0.0',
    date: '21 Février 2026',
    changes: [
      '🛡️ **Conseil des Gardiens :** Nouvelle interface secrète permettant aux Gardiens du Savoir et Admins de valider ou rejeter les propositions de la communauté.',
      '🛍️ **Vie Sociale (Étape 9) :** Fin des données de test ! Le catalogue est désormais connecté en temps réel à la base de données.',
      '⚙️ **Métiers Intelligents :** Remplacement automatique de l\'ancien métier principal lors d\'un nouvel achat, et cumul possible pour les activités secondaires.',
      '💰 **Fortune Dynamique :** La jauge de Fortune se calcule toute seule en prenant la valeur la plus haute et en y additionnant les bonus d\'objets (limite de 15).',
      '📖 **Grimoire (Encyclopédie) :** Ajout des onglets Pouvoirs et Capacités. Possibilité d\'attacher/détacher ces éléments directement sur la fiche d\'une Fée.',
      '🛡️ **Administration :** Activation de l\'interface de Rôles pour permettre au Super Admin de nommer les "Gardiens du Savoir".',
      '🐛 **Stabilité Absolue :** Éradication des blocages de cache du navigateur et fluidité de connexion retrouvée.'
    ]
  },
    {
        version: '7.2.0',
        date: '18 Février 2026',
		changes: [
		  '🛍️ **Nouveau (Étape 9) :** "Vie Sociale & Équipement". Dépensez vos Points de Personnage (PP) dans des boutiques dédiées à chaque profil.',
		  '💰 **Fortune Dynamique :** Jauge de Fortune en temps réel.',
		  '✨ **Nouveau (Étape 8) :** "Atouts Féériques". Système complet avec gestion des atouts universels et spécifiques.',
		  '🎁 **Bonus Intelligents :** Les Atouts débloquent automatiquement des spécialités "dorées" gratuites dans les compétences.',
		  '⚡ **Pouvoirs :** Filtrage des pouvoirs accessibles à la création (Masqué/Démasqué uniquement).',
		  '🎨 **UI/UX :** Nouveau design "Magasin" pour l\'équipement et badges distinctifs pour les bonus.'
		]
    },
    {
        version: '7.1.0',
        date: '16 Février 2026',
		changes: [
		  '✨ Feat : Activation complète des Pouvoirs Féériques (Tri Masqué/Démasqué).',
		  '🌟 Feat : Ajout de l\'étape "Atouts Féériques" (Universels et Spécifiques).',
		  '🎨 UI : Amélioration visuelle des cartes de sélection avec badges dynamiques.'
		]
    },
    {
        version: '7.0.1',
        date: '16 Février 2026',
		changes: [
		  '🌍 UI : Ajout d\'une icône Globe pour identifier instantanément les personnages publics.',
		  '👁️ Feat : Possibilité de basculer le statut Public/Privé directement depuis la liste des personnages.'
		]
    },
    {
        version: '7.0.0',
        date: '16 Février 2026',
        changes: [
            "🎭 ROLEPLAY : Ajout de la sélection des Traits de Caractère dominants (1 ou 2) à la création.",
			"📏 RÈGLES : Intégration de la Taille (Petite/Grande/Très Grande) et application automatique du modificateur d'Esquive."
        ]
    },
    {
        version: '6.0.0',
        date: '14 Février 2026',
        changes: [
            "✨ VERSION 6.0.0 MAJEURE",
            "🛠 SYSTEME : La date de build est maintenant synchronisée automatiquement avec la date réelle du déploiement.",
            "🔄 UPDATE : Système de mise à jour automatique actif.",
            "👤 SOCIAL : Affichage du créateur sur les cartes publiques.",
            "🔒 SÉCURITÉ : Pseudo obligatoire et protection des routes."
        ]
    },
	{
        version: '5.1.0',
        date: '8 Février 2026',
        changes: [
            '🧠 Compétences (Step 4) : Gestion parallèle des budgets (Vert = Standard / Violet = Esprit).',
            '👤 Identité (Step 1) : Retour de la saisie Nom/Sexe et sélecteur de fées vertical.',
            '🔓 Navigation : Mode "Création Libre" activé (les étapes ne sont plus bloquantes).',
            '🔘 Ergonomie : Les cercles de la barre de progression sont maintenant cliquables.',
            '🎨 Caractéristiques : Correction de l\'alignement visuel des bonus.',
            '🛠️ Technique : Résolution du conflit lors des sauvegardes successives.'
        ]
    },
    {
        version: '5.0.0',
        date: '7 Février 2026',
        changes: [
            "Refonte majeure de l'interface (Design 'Livre').",
            "Intégration du système de notifications Push.",
            "Ajout de la gestion des préférences utilisateur."
        ]
    },	
    {
        version: '4.8.0',
        date: '7 Février 2026',
        changes: [
            '✨ Ajout du calcul automatique du bonus d\'Esprit pour les compétences de Savant/Érudit.',
            '🖼️ Amélioration visuelle du sélecteur de fées.'
        ]
    },
    {
        version: '4.7.2',
        date: '6 Février 2026',
        changes: [
            '📌 UI : Bandeau de score "Flottant" (Sticky) amélioré.',
            '🚗 Règles : Gestion automatique de la gratuité pour la compétence Conduite.',
            '🔒 Data : Séparation stricte des données masquées et démasquées.'
        ]
    },
    {
    version: '4.0.0',
    date: '2026-02-07',
    changes: [
      '✨ Nouveau Sélecteur de Fée (Étape 1) : Interface "A/B Testing" (Vue Liste vs Vue Catalogue).',
      '👤 Gestion de Compte : Ajout du "Nom d\'utilisateur" et modification de mot de passe.',
      '🛡️ Administration : Vue "Liste des Utilisateurs" pour suivre l\'activité des créateurs.',
      '🎨 Harmonisation Design : Refonte complète de la Liste des Personnages (CharacterList) selon le style "Ok.png".',
      '📖 Données : Intégration des descriptions riches et stats Min/Max dans la sélection de fée.'
    ]
  },
  {
    version: '3.9.9',
    date: '2026-02-07',
    changes: [
      '🎨 Design Final "Ok.png" : Stabilisation de la charte graphique (Titre centré > Actions > Contenu).',
      '🛠️ Navigation : Barre de progression hybride (Puces + Lignes) sans bug d\'affichage.',
      '🐛 Correctif Lisibilité : Résolution du problème "Blanc sur Blanc" des étapes futures.'
    ]
  },
  {
    version: '3.9.8',
    date: '2026-02-07',
    changes: [
      '🐛 Correctif Critique : Réparation du bug "-7" dans la barre de progression.',
      '🛠️ Syntaxe : Rétablissement du tableau explicite pour la navigation séquentielle.'
    ]
  },
  {
    version: '3.9.6',
    date: '2026-02-07',
    changes: [
      '🎨 Ergonomie : Suppression du "Sticky Header" intrusif au profit d\'un flux naturel.',
      '✨ Interface : Intégration des notifications de sauvegarde directement dans le contenu.',
      '🔙 Retour Design : Restauration de la structure validée par l\'utilisateur.'
    ]
  },
  {
    version: '3.9.5',
    date: '2026-02-07',
    changes: [
      '✨ Compétences Futiles : Chargement dynamique de la liste complète depuis la base de données.',
      '🛠️ Dépense de Points : Possibilité d\'investir les points restants dans n\'importe quelle compétence futile.',
      '➕ Création : Ajout de la fonctionnalité de création de compétence futile personnalisée ("Custom").',
      '✨ Ajout de la règle "Bonus Esprit" : Points gratuits pour les compétences Érudit/Savant si Esprit > 3.',
      '🛠️ Support complet des choix de prédilection complexes (Compétences au choix OU Spécialités au choix).'
    ]
  },
  {
    version: '3.9.1',
    date: '2026-02-05',
    changes: [
      '🎨 Refonte design Étape 4 (Compétences Libres) : En-têtes clairs avec calcul des PP.',
      '✨ Calcul automatique des Rangs de Profil (Moyenne des compétences).',
      '🐛 Correctif : Calcul des scores de base (+2 Majeur, +1 Mineur).'
    ]
  },
  {
    version: '3.9.0',
    date: '2026-02-07',
    changes: [
      '✨ Ajout de la règle "Bonus Esprit" : Points gratuits pour les compétences Érudit/Savant si Esprit > 3.',
      '🛠️ Support complet des choix de prédilection complexes (Compétences au choix OU Spécialités au choix).',
      '🐛 Correction : Affichage des menus déroulants pour l\'Ange (Mêlée/Tir) et la Gargouille (Occultisme).',
      '💾 Mise à jour de la structure de base de données pour gérer les IDs de choix multiples.',
      '🎨 Intégration visuelle des compteurs séparés (Budget Général vs Bonus Esprit) dans l\'étape 4.'
    ]
  },
  {
    version: '3.8.5',
    date: '2026-02-05',
    changes: [
      '🎨 Refonte design Étape 4 (Compétences Libres) : En-têtes clairs avec calcul des PP.',
      '✨ Calcul automatique des Rangs de Profil (Moyenne des compétences).',
      '🐛 Correctif : Calcul des scores de base (+2 Majeur, +1 Mineur).'
    ]
  },
  {
    version: '3.8.4',
    date: '2026-02-04',
    changes: [
      '✨ Nouvelle interface de liste des personnages avec onglets (Moi / Public / Admin).',
      '🔒 Sécurisation des accès et nettoyage des doublons.'
    ]
  },
  {
    version: "3.7.5",
    date: "2026-02-07",
    type: "patch",
    changes: [
      "Retour au style visuel v2.5 (Design épuré et clair)",
      "Suppression des bandeaux sombres et restauration des boutons outline",
      "Correction des conflits de style dans l'en-tête"
    ]
  },
  {
    version: "3.7.0",
    date: "2026-02-06",
    type: "minor",
    changes: [
      "Ajout du mode Lecture Seule pour les visiteurs",
      "Activation du Panel Admin pour la visualisation globale",
      "Activation du bouton 'Changements' vers le journal des versions"
    ]
  },
  {
    version: "3.6.5",
    date: "2026-02-06",
    type: "patch",
    changes: [
      "Blocage strict des caractéristiques à 5 maximum",
      "Ajout du calcul visuel des Points de Personnage (Rang + Bonus)"
    ]
  },
  {
    version: "3.6.0",
    date: "2026-02-05",
    type: "minor",
    changes: [
      "Ajout de l'équation visuelle pour les Points de Personnage (Rang + Bonus = Total)",
      "Calcul automatique des Rangs de Profil (Moyenne des compétences / 4)",
      "Restauration de l'achat de Spécialités manuelles",
      "Affichage automatique des Spécialités de Prédilection (ex: Bastet, Ondine)"
    ]
  },
  {
    version: "3.5.5",
    date: "2026-02-05",
    type: "patch",
    changes: [
      "Gestion des choix multiples pour les fées complexes (ex: Ange : choix Mêlée ou Tir)",
      "Correction des doublons dans le chargement des prédilections"
    ]
  },
  {
    version: "3.5.0",
    date: "2026-02-05",
    type: "major",
    changes: [
      "Retour au design 'Fiche Intégrée' (Style v2.15) pour une expérience type papier",
      "Intégration de la navigation et du header dans le flux principal",
      "Refonte de la gestion des données via Supabase pour les choix féériques"
    ]
  },
  {
    version: "3.4.0",
    date: "2026-02-04",
    type: "patch",
    changes: [
      "Correction de l'export de 'loadAllGameData' pour la compilation",
      "Renforcement de la validation de l'étape 4 (choix de prédilections)",
      "Optimisation du cache global pour le premier chargement"
    ]
  },
  {
    version: "3.3.0",
    date: "2026-02-04",
    type: "minor",
    changes: [
      "Implémentation du mode Hors-ligne (PWA) via LocalStorage",
      "Ajout du verrouillage optimiste (Optimistic Locking) contre les conflits de sauvegarde",
      "Nettoyage automatique des données (rangs à 0) avant enregistrement",
      "Gestion des alertes administrateur pour les identifiants orphelins"
    ]
  },
  {
    version: "3.2.0",
    date: "2026-02-04",
    type: "minor",
    changes: [
      "Gestion des spécialités au choix pour les prédilections (ex: Gnome, Gargouille)",
      "Intégration de la dualité Forme Humaine / Forme Démasquée (🎭) dans le moteur de stats",
      "Détection automatique des spécialités d'armes pour les bonus de Parade et d'Esquive",
      "Calcul dynamique du nombre de langues basées sur la Culture"
    ]
  },
  {
    version: "3.1.0",
    date: "2026-02-04",
    type: "minor",
    changes: [
      "Centralisation du moteur de règles Système 3D (dataHelpers.js)",
      "Calcul automatique des valeurs de Défense, Résistance et Initiative",
      "Calcul du budget de Points de Personnage (PP) pour l'étape de personnalisation",
      "Mise à jour de l'export PDF avec les statistiques de combat calculées"
    ]
  },
  {
    version: "3.0.0",
    date: "2026-02-03",
    type: "major",
    changes: [
      "Migration complète vers Supabase (PostgreSQL)",
      "Passage d'une structure de données statique vers une base dynamique",
      "Gestion des identifiants (UIDs) pour les compétences et types de fées",
      "Refonte de l'initialisation de l'état du personnage"
    ]
  },
  {
    version: "2.15.0",
    date: "2026-02-02",
    type: "patch",
    changes: [
      "Version initiale de transition avant la migration Supabase"
    ]
  }
];