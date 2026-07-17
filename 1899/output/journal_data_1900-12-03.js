// Date: 1900-12-03
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-12-03 (Version Restaurée, 24 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique",
    "title": "Réformes navales",
    "summary": "M. Fleury-Ravarin expose à la Chambre des propositions de réformes majeures pour le budget de la Marine, visant à moderniser les arsenaux et à restaurer durablement la puissance navale française.",
    "paragraphs": [
      "La lecture du rapport sur le budget du ministère de la Marine, déposé par M. Fleury-Ravarin au nom de la commission du budget, est fort intéressante. On y trouve des propositions de réformes capitales pour le développement et l'utilisation de nos forces navales ; la Chambre s'inspirera certainement de ce travail pour trancher les questions multiples qui lui sont soumises par le ministre.",
      "Après les événements de 1870, où notre flotte n'a pas eu à combattre, on avait réduit d'un quart le budget de la Marine, en oubliant que commander la mer, c'est commander les routes universelles.",
      "Le rapporteur propose des réformes sur les réserves, le cadre des officiers, le recrutement des mécaniciens et l'amélioration des écoles de marine. Il souligne également l'importance d'augmenter les moyens de nos arsenaux maritimes pour répondre aux exigences des escadres modernes.",
      "Nous ne saurions trop souhaiter que la Chambre apporte toute son attention à ces questions, car une puissance navale ne s'obtient qu'avec de la suite, du temps et de la volonté."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans-Famille - Marie-Madeleine",
    "summary": "Le comte Maurice de Rambert confronte les sombres secrets de son passé. Les aveux révèlent la trahison de Rose et le crime odieux commis par le meurtrier de son frère.",
    "paragraphs": [
      "Confession de Maurice : Oui, je suis le comte Maurice de Rambert. Demandez la vérité à tous les échos du pays.",
      "Cette lettre m'attestait seulement un fait qui m'était connu. Rose était perdue et la qualité de son séducteur rendait la faute plus odieuse.",
      "Le père de l'enfant de Louise était aussi le meurtrier de son frère. La baronne d'Orvillière a surpris les aveux de Pierre Broudin, révélant la sombre vengeance qui a détruit la famille."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "International",
    "title": "La maladie du Tsar",
    "summary": "Le bulletin de santé de l'empereur de Russie est encourageant. Le souverain recouvre l'appétit et ses forces vitales, marquant une amélioration notable de son état général.",
    "paragraphs": [
      "Voici le dernier bulletin concernant l'état de santé de l'empereur de Russie : Sa Majesté a très bien passé la journée et la nuit d'hier. Ce matin, il se trouve très bien. L'appétit lui revient et ses forces se rétablissent peu à peu.",
      "Les nouvelles de la santé du Tsar sont aujourd'hui excellentes. La dernière cause d'inquiétude est maintenant dissipée par l'abaissement de la température et le retour des forces."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique étrangère",
    "title": "Au Parlement anglais",
    "summary": "À l'ouverture du Parlement britannique, de vifs débats s'annoncent. L'opposition compte interpeller le gouvernement sur la conduite de la guerre sud-africaine et les intérêts financiers de M. Chamberlain.",
    "paragraphs": [
      "C'est aujourd'hui 3 décembre que le Parlement britannique doit rouvrir sa session. On escompte de très vifs débats, d'abord sur la guerre sud-africaine, ensuite sur le cas particulier de M. Chamberlain.",
      "L'opposition reprochera au gouvernement le manque de préparatifs pour la guerre, le défaut d'humanité de lord Roberts et le coût exagéré de l'expédition.",
      "Il est fort probable que le ministère l'emporte, mais sa majorité pourrait être ébranlée par ces révélations sur les intérêts financiers de M. Chamberlain dans les marchés militaires."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Élections",
    "title": "Résultats des élections du 2 décembre",
    "summary": "Synthèse des résultats électoraux : M. Louis Martin est élu député socialiste à Toulon, tandis que les opérations de vote se poursuivent dans le Pas-de-Calais.",
    "paragraphs": [
      "Dans la Nièvre, M. le candidat est élu. Dans la deuxième circonscription de Toulon, M. Louis Martin, socialiste, est élu avec 9 183 voix en remplacement de M. Cluseret.",
      "Dans le Pas-de-Calais, arrondissement de Saint-Pol, les résultats sont incomplets, mais M. Vallée, républicain, est en tête."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "International",
    "title": "Le Président Krüger",
    "summary": "Acclamé en Belgique et en Allemagne, le président Krüger modifie son itinéraire après avoir appris que l'empereur Guillaume ne peut le recevoir. Il se rend en Hollande en attendant la suite des événements.",
    "paragraphs": [
      "Le grand vieillard que Paris tout entier salua a retrouvé en Belgique et en Allemagne des acclamations. Toutefois, un fait vient modifier brusquement son voyage : à Cologne, un émissaire a informé M. Krüger que l'empereur Guillaume ne pourrait actuellement le recevoir.",
      "Le président Krüger a donc pris la décision de ne pas aller à Berlin et de se rendre directement en Hollande, où il attendra les événements."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Guerre au Transvaal",
    "title": "La poursuite de Dewet",
    "summary": "Lord Kitchener confirme des engagements militaires avec l'arrière-garde de Dewet. Si le général Settle a battu le commando de Herzog, le War Office précise qu'aucune capture de Dewet n'est confirmée.",
    "paragraphs": [
      "Une dépêche de lord Kitchener confirme les engagements du général Knox avec l'arrière-garde de Dewet, qui s'est replié au sud. Le général Settle a occupé Luckhoff après avoir battu le commando de Herzog.",
      "Le War Office annonce cependant qu'aucune confirmation n'a été reçue concernant une prise imminente de Dewet."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accidents de chemins de fer",
    "summary": "Deux accidents ferroviaires ont été signalés : un tamponnement de train de marchandises sans victime à Lisieux, et une collision d'un train omnibus avec un convoi de marchandises à Saint-Clément.",
    "paragraphs": [
      "À Lisieux, un train de marchandises s'est détaché et a tamponné une locomotive en gare. Les dégâts matériels sont considérables, mais heureusement sans victimes.",
      "À Saint-Clément, le train omnibus de Lunéville à Saint-Dié a heurté un train de marchandises. Deux voyageurs ont été contusionnés."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Social",
    "title": "La catastrophe d'Anichin",
    "summary": "Une rumeur concernant le décès d'un ouvrier blessé, Decarpent, circule après la catastrophe d'Anichin. Les autorités judiciaires et militaires ont entamé une enquête à la fosse Pénelon.",
    "paragraphs": [
      "Le bruit a couru que Decarpent, l'un des ouvriers les plus grièvement blessés, était mort cette nuit. Le juge d'instruction et le capitaine de gendarmerie sont descendus à la fosse Pénelon pour l'enquête, qui pour l'heure n'a pas donné de résultat."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Armée",
    "title": "Les soldats ordonnances",
    "summary": "Le ministre de la Guerre accorde un soldat d'ordonnance aux officiers d'administration. Une réforme est à l'étude pour mettre fin aux abus de domestication constatés par le Parlement.",
    "paragraphs": [
      "Le ministre de la Guerre a décidé que les officiers d'administration auraient droit à un soldat d'ordonnance, comme les autres officiers de l'armée. Une réforme plus profonde est à l'étude pour éviter que ces soldats ne soient employés comme domestiques, afin de mettre fin aux abus signalés au Parlement."
    ]
  },
  {
    "id": 11,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'Agression de la rue Eugène-Sue",
    "summary": "Hier matin, rue Eugène-Sue, un employé de commerce de trente-cinq ans a été violemment agressé et poignardé par une bande dissimulée sous une porte cochère. Une enquête est en cours.",
    "paragraphs": [
      "Hier matin, un employé de commerce, âgé de trente-cinq ans, passait rue Eugène-Sue, lorsqu'il fut assailli par plusieurs individus qui se dissimulaient sous une porte cochère.",
      "L'infâme bande, après avoir frappé leur victime à coups de couteau et de poings, a pris la fuite. Malgré une vive résistance, l'employé fut sérieusement blessé.",
      "Le commissaire de police du quartier a ouvert une enquête et les agresseurs sont activement recherchés."
    ]
  },
  {
    "id": 12,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un Meurtrier à la rue Haybi",
    "summary": "M. Raynaut, après avoir quitté son établissement rue Haybi, a été grièvement blessé d'un coup de couteau au cou par un ouvrier nommé Louis Bournet. Une enquête a été ouverte par M. Bottu.",
    "paragraphs": [
      "M. Raynaut, qui venait de quitter son établissement, a été frappé d'un coup de couteau au cou par un ouvrier de trente-trois ans.",
      "Le meurtrier, Louis Bournet, a pris la fuite après avoir poignardé sa victime. M. Raynaut est dans un état des plus inquiétants.",
      "Une enquête a été ouverte par M. Bottu, commissaire de police, pour retrouver l'auteur de ce crime."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Faits Divers",
    "title": "Odieuse Agression à Saint-Denis",
    "summary": "M. Alexandre Barraud, âgé de soixante-dix ans, a été victime d'une violente agression à Saint-Denis. Roué de coups par des inconnus, il n'a pu fournir aucun signalement aux autorités.",
    "paragraphs": [
      "M. Alexandre Barraud, âgé de soixante-dix ans, fut victime d'une agression terrible. Des individus se sont jetés sur lui pour le rouer de coups.",
      "Le pauvre vieillard n'a pu donner aucun signalement précis aux inspecteurs de la Sûreté."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Faits Divers",
    "title": "Autour de Paris",
    "summary": "Chronique des faits divers en banlieue parisienne : découvertes de cadavres à Courbevoie et Clichy, arrestation d'un rôdeur à Saint-Denis et agression violente à Pantin. Les autorités multiplient les enquêtes.",
    "paragraphs": [
      "Le commissaire de police de la Porte Dauphine a ordonné l'ouverture d'une enquête suite à la découverte d'un individu pendu dans la forêt.",
      "À Courbevoie, les employés du chemin de fer ont trouvé le cadavre d'un homme d'une trentaine d'années. Un billet trouvé sur lui indique qu'il a résolu de se donner la mort.",
      "À Clichy, on a retrouvé le cadavre d'Alexandre Delany dans la Seine. M. Honreaux, commissaire de police, a ordonné le transport du corps à la morgue.",
      "À Saint-Denis, deux gardiens de la paix ont arrêté un rôdeur, Léon Prolot, après une vive résistance de ses complices. Il a été conduit au dépôt.",
      "À Pantin, le courtier M. Gustave Patureaux a été violemment agressé par un conducteur de tramway à la suite d'une discussion. Une plainte a été déposée."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un Drame de l'Ivresse",
    "summary": "À Anvers, un ouvrier nommé Vanhante, sous l'emprise de l'ivresse, a poignardé son patron, M. Franck Vankelen, après une réprimande. Le coupable a été arrêté et la victime est dans un état désespéré.",
    "paragraphs": [
      "À Anvers, un ouvrier nommé Vanhante, ivre, a poignardé son patron, M. Franck Vankelen, au cou après une réprimande.",
      "L'état de la victime est désespéré et le coupable a été arrêté par les forces de l'ordre."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tué par un bœuf",
    "summary": "M. Broutouly, un cultivateur de soixante-dix-huit ans, a trouvé la mort dans son champ après avoir été violemment renversé par un bœuf devenu furieux alors qu'il tentait de maîtriser le troupeau.",
    "paragraphs": [
      "M. Broutouly, un cultivateur âgé de soixante-dix-huit ans, a trouvé une mort tragique dans son champ. Alors qu'il tentait de calmer le troupeau sous sa garde, il fut soudainement pris à partie par un bœuf rendu furieux.",
      "Renversé avec une force brutale par l'animal, le malheureux vieillard a succombé peu après à ses blessures, ayant subi des fractures multiples aux côtes ainsi qu'une lésion fatale à la colonne vertébrale."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Sports",
    "title": "Match de rugby : Racing-Club contre Stade Bordelais",
    "summary": "Le Racing-Club de France a remporté une victoire nette de 8 points à 0 face au Stade Bordelais lors d'une rencontre de rugby disputée au Parc des Princes, marquée par une lutte acharnée.",
    "paragraphs": [
      "Un match de rugby s'est disputé sur le terrain du Parc des Princes entre le Racing-Club de France et le Stade Bordelais.",
      "Le Racing-Club a remporté la victoire par 8 points à 0 dans une rencontre acharnée qui a tenu les spectateurs en haleine jusqu'au coup de sifflet final."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Sports",
    "title": "Lutte : Match Pons contre Pierre",
    "summary": "À New-York, le lutteur Paul Pons a fait montre d'une supériorité technique indiscutable face à Pierre, s'imposant en deux manches lors d'un combat qui a attiré une assistance nombreuse.",
    "paragraphs": [
      "Le match de lutte opposant Paul Pons à Pierre a été disputé à New-York devant une assistance considérable.",
      "Pons a triomphé dans les deux manches, s'affirmant bien plus puissant et plus scientifique que son rival."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Chronique Théâtrale",
    "title": "Spectacles de la semaine",
    "summary": "Actualités des scènes parisiennes : la Comédie-Française joue Hernani avec Mme Ségard-Vober, la Scala affiche le drame de M. Ferdinand Bloch et les Folies-Bergère présentent le dompteur Seeth.",
    "paragraphs": [
      "La Comédie-Française reprend « Hernani » pour les débuts de Mme Ségard-Vober.",
      "La Scala propose un drame réaliste intitulé « C'est papa » de M. Ferdinand Bloch, qui connaît un franc succès.",
      "Les Folies-Bergère présentent le dompteur Seeth et ses vingt lions, un spectacle extraordinaire et angoissant."
    ]
  },
  {
    "id": 20,
    "page": 4,
    "category": "Transports",
    "title": "Départs et Arrivées des Paquebots",
    "summary": "Mouvements maritimes de fin novembre 1899 : état des arrivées et départs des paquebots des Messageries Maritimes, de la C.G.T. et des Chargeurs Réunis dans les ports français et internationaux.",
    "paragraphs": [
      "Le paquebot Ville-de-la-Ciotat (M. M.), en route pour l'Australie et la Nouvelle-Calédonie, a quitté King George's Sound le 10 novembre, à 6 heures du matin.",
      "Le paquebot L'Aquitaine (C. G. T.), en provenance de New-York, est arrivé au Havre le 30 novembre.",
      "Le paquebot La Normandie (C. G. T.), venant de Vera-Cruz et ses escales, est arrivé à Saint-Nazaire le 29 novembre, à 11 heures du matin.",
      "Le paquebot Paranagua (C. R.), venant du Havre, est arrivé à Pernambuco le 29 novembre, faisant route vers Bahia, Rio-de-Janeiro et Santos.",
      "Le paquebot Cachua (C. R.), en provenance de Pauillac, est arrivé à Montevideo le 30 novembre, en route pour La Plata.",
      "Le paquebot Ville-de-San-Nicolas (C. R.), venant du Brésil, est rentré au Havre le 30 novembre.",
      "Le paquebot Ville-de-Maranhao (C. R.), venant du Sud, est parti de Libreville le 30 novembre à destination de Cotonou, Londres et le Havre.",
      "Le paquebot Pampa (C. R.), en provenance de Buenos-Ayres, est parti de Montevideo le 30 novembre, faisant route vers Dunkerque."
    ]
  },
  {
    "id": 21,
    "page": 4,
    "category": "Économie",
    "title": "Causerie financière",
    "summary": "La Bourse observe un changement stratégique des investisseurs qui délaissent les placements industriels, autrefois prisés, pour se concentrer sur les valeurs à revenu fixe et les fonds d'État en forte hausse.",
    "paragraphs": [
      "La longue période de stagnation et presque de malaise que vient de traverser la Bourse avait évidemment des causes plus profondes que quelques excès de spéculation. La véritable raison de cette attitude hésitante apparaît clairement aujourd'hui : c'est un revirement complet des dispositions de l'épargne. Les capitaux tendent de plus en plus à négliger les placements industriels, qui, depuis trois ans, jouissaient de toute la faveur du public, pour se porter de nouveau vers les valeurs à revenu fixe.",
      "La hausse rapide de nos fonds nationaux est un des indices les plus sûrs du mouvement qui se prépare. Le 3 %, après être resté longtemps stationnaire, s'est élevé en quelques jours à 101,40. L'Amortissable sort également de sa torpeur, tandis que les fonds d'État étrangers ont montré pour la plupart de très fermes dispositions."
    ]
  },
  {
    "id": 22,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Faute de Vernier (Suite)",
    "summary": "André, le maître de forges, vient en aide au vieux Guérin avant de poursuivre sa marche solitaire. Accompagné de ses chiens, il s'enfonce dans les bois, en proie à une mélancolie profonde sous le brouillard.",
    "paragraphs": [
      "André ajouta : « Je suis passé, mon brave, pour vous remettre ceci. » Il s'était approché du vieillard et lui glissait un billet dans la main. « Mais, mais, bégaya Guérin, pourquoi, monsieur ? »",
      "Le maître de forges reprit son chemin, n'écoutant pas les remerciements. Le brouillard s'appesantissait, et ses chiens, Fox et Martineau, tournaient vers lui leurs têtes intelligentes, comme pour lui demander leur liberté.",
      "L'événement survint dans le bois alors qu'il tentait de se frayer un passage à travers un fossé encombré de ronces, le fusil à la main, dans un moment de désespoir et de résignation mystérieuse."
    ]
  },
  {
    "id": 23,
    "page": 4,
    "category": "Littérature",
    "title": "Le Supplice de Tantale",
    "summary": "M. Gustave Strobel, habitant de Rouen, vit une situation tragique rappelant le mythe de Tantale : atteint d'une dyspepsie sévère, il contemple l'abondance du marché sans pouvoir y goûter, prisonnier de ses tourments.",
    "paragraphs": [
      "Tout le monde connaît cette fable grecque : Tantale, fils de Jupiter, fut condamné à un châtiment cruel, plongé dans un lac dont l'eau lui montait jusqu'au cou mais s'enfuyait de ses lèvres, et sous des fruits qui disparaissaient dès qu'il voulait les saisir. Nous pouvons aisément imaginer les tourments de ce personnage.",
      "Avoir faim et soif au milieu d'abondantes provisions de bouche sans pouvoir en profiter est une torture semblable. C'est précisément ce qu'a vécu M. Gustave Strobel, de Rouen, qui, gravement dyspeptique, observait le marché depuis sa fenêtre, incapable de consommer les aliments qui pourtant éveillaient son appétit."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Économie",
    "title": "Bourse et Marchés",
    "summary": "Le stock d'or de la Banque de France s'accroît, atteignant 2,325 milliards. Si les recettes ferroviaires marquent le pas après l'Exposition, le marché reste globalement stable malgré un tassement des cours des actions.",
    "paragraphs": [
      "L'or continue à affluer dans les caisses de la Banque de France, dont le stock de métal jaune atteint actuellement deux milliards trois cent vingt-cinq millions.",
      "La clôture de l'Exposition a eu une répercussion immédiate sur les recettes des chemins de fer, avec une maigre plus-value de 86 000 francs. Le marché des actions a manqué d'animation et les cours se sont un peu tassés.",
      "Les affaires sur les sucres ont été sans activité pendant la semaine et les prix ont peu varié. Les houblons d'Amérique affluent à Londres, tandis que le marché de New York demeure ferme."
    ]
  }
];
