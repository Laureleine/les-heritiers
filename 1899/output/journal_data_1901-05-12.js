// Date: 1901-05-12
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-05-12 (Version Restaurée, 43 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Science et Aérostation",
    "title": "Les Aérostiers Militaires",
    "summary": "M. de La Vaulx prépare une traversée de la Méditerranée en ballon, alors que l'École d'aérostation de Chalais-Meudon confirme ses progrès constants dans la maîtrise de l'hydrogène et du vol libre.",
    "paragraphs": [
      "Il est question d'un projet de traversée de la Méditerranée en ballon. C'est l'un des aéronautes dont les ascensions ont été les plus remarquées ces derniers temps, tant par leur durée que par leur direction, M. de La Vaulx, qui va se livrer à cette audacieuse entreprise.",
      "M. le commandant Renard, sous-directeur de l'École d'aérostation militaire de Chalais-Meudon, a fait, ces jours-ci, au Conservatoire des Arts et Métiers, une conférence relative aux longs voyages à travers les airs.",
      "Le vent restera toujours le maître de l'air. On ne peut avoir l'espoir d'arriver à lutter victorieusement contre lui. En conséquence, ce qu'il y a de mieux à faire, c'est encore de l'utiliser.",
      "L'École d'aérostation de Chalais-Meudon, on le voit, ne s'arrête pas dans ses études. Elle n'a que quinze ans d'existence officielle, et les progrès qu'on lui doit sont déjà très grands.",
      "Deux systèmes de ballons sont employés : le ballon captif et le ballon libre. Actuellement, l'hydrogène tout préparé est emmagasiné dans des réservoirs où il a été refoulé sous une pression de 200 atmosphères.",
      "Nos aérostiers militaires ont fait déjà leurs preuves au Tonkin et à Madagascar. Il faut aussi une forte dose de courage pour ne pas s'émouvoir quand, par un vent d'ouragan, le ballon est violemment secoué par les rafales."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Secret de Bohème",
    "summary": "Au milieu de l'agitation parisienne, Odette dissimule sa mélancolie derrière un enjouement feint, le regard déjà tourné vers les incertitudes et les espoirs de l'avenir.",
    "paragraphs": [
      "Elle ne lui annonçait pas encore complètement la chose. « Allons, viens-tu ? » fit-elle, d'un ton à la fois très affectueux et très impératif.",
      "Mais, avec le plus charmant enjouement, Odette déclara qu'on ne fait pas de ces folies tous les soirs.",
      "Le lendemain, quand le tapage parisien l'éveilla de très bonne heure, elle ne put se défendre d'une grande tristesse, mais elle devait être toute à l'avenir."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame de la Porte Saint-Martin",
    "summary": "Un drame passionnel a éclaté près de la Porte Saint-Martin : Léon Degoix a gravement blessé son rival, Édouard Valette, d'un coup de rasoir, avant de se constituer prisonnier.",
    "paragraphs": [
      "Un drame sanglant s'est déroulé hier soir, près de la Porte Saint-Martin ; le mobile n'en semble pas encore très nettement établi, bien que l'on sache qu'il s'agit d'une vengeance d'amant éconduit.",
      "Un ouvrier en valises, Léon Degoix, a frappé d'un coup de rasoir à la gorge un nommé Édouard Valette. Le blessé a été transporté dans un état désespéré à l'hôpital Saint-Louis.",
      "Léon Degoix s'est rendu lui-même aux autorités, se constituant prisonnier auprès d'un gardien de la paix sur le boulevard Sébastopol.",
      "La déposition de Mme Fabre, qui avait rompu avec le blessé pour se lier avec l'agresseur avant de vouloir retourner auprès de son premier amant, a permis de reconstituer les phases du drame."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Social",
    "title": "Les Retraites Ouvrières",
    "summary": "Un accord a été conclu entre le gouvernement et la commission sociale concernant les retraites ouvrières, consacrant le principe de protection malgré les difficultés financières persistantes.",
    "paragraphs": [
      "L'accord s'est heureusement fait au sujet du projet de loi sur les retraites ouvrières entre le gouvernement et la commission d'assurance et de prévoyance sociales.",
      "Les divergences qui s'étaient produites tenaient uniquement à des considérations financières. Le jour où la terre se trouve écrasée par les contributions, on voit les propriétaires qui laissent leur sol inculte.",
      "Les aspirations des travailleurs ne seront pas satisfaites telles qu'il faudrait pouvoir les contenter, mais la porte est ouverte, le principe va être consacré."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "La Rentrée des Chambres",
    "summary": "La session parlementaire reprendra le mardi 14 courant. Le Sénat et la Chambre se pencheront en priorité sur le projet concernant les associations et celui relatif aux retraites ouvrières.",
    "paragraphs": [
      "La session du Parlement, interrompue vers la fin du mois de mars, sera reprise après-demain mardi, 14 courant. En fait, il semble certain que, suivant l'usage, elle se prolongera jusque vers le 11 juillet.",
      "Le Sénat et la Chambre ont, en effet, à s'occuper, avant les grandes vacances, de questions particulièrement importantes, notamment le projet sur les associations.",
      "Un autre projet important, celui des retraites ouvrières, est à l'ordre du jour de la Chambre."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le Crime de Corancez",
    "summary": "L'enquête sur le crime de Corancez progresse : la découverte d'un coutre de charrue ensanglanté et d'une musette maculée dans la ferme de Brierre confirme les soupçons pesant sur le fermier.",
    "paragraphs": [
      "La nouvelle de la découverte d'un instrument taché de sang dans les dépendances de la ferme de Brierre est confirmée.",
      "Cet instrument est un coutre de charrue dont le dos de l'énorme lame de fer est encore ensanglanté. Les gendarmes ont également trouvé une sorte de musette en toile rayée de bleu portant de nombreuses traces de sang.",
      "Brierre a déclaré que ces objets avaient en effet appartenu à son exploitation, mais il n'a pu justifier les raisons de leur enfouissement."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Terrible accident à la poudrerie de Sevran-Livry",
    "summary": "Un grave accident est survenu à la poudrerie de Sevran-Livry : l'explosion d'un obus a grièvement blessé l'ingénieur Louis-Albert Lheurie, contraint à l'amputation, et l'ouvrier Alexandre Coistant.",
    "paragraphs": [
      "Un très grave accident s'est produit hier après-midi dans un champ d'essai dépendant de la poudrerie de Sevran-Livry. M. Louis-Albert Lheurie, ingénieur, et l'ouvrier Alexandre Coistant ont été très grièvement blessés lors de l'explosion d'un obus.",
      "M. Lheurie a dû subir l'amputation de l'avant-bras et son état est jugé désespéré."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Politique militaire",
    "title": "Un projet de service de deux ans",
    "summary": "La Revue politique et parlementaire expose le projet du général X. concernant le service militaire de deux ans, préconisant la suppression des dispenses pour garantir une instruction suffisante.",
    "paragraphs": [
      "La Revue politique et parlementaire publie, sous la signature du général X., un projet de réorganisation du service de deux ans, appelé à retenir l'attention.",
      "Le général est opposé au service d'un an, jugeant qu'il ne permettrait pas une instruction suffisante des hommes. Il propose de supprimer toutes les dispenses pour le service de deux ans, tout en allouant des secours aux familles des appelés."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique",
    "title": "La réforme du service militaire",
    "summary": "Analyse chiffrée de la réforme militaire : le passage au service de deux ans nécessiterait, pour compenser la réduction de durée, le recrutement de 50 000 rengagés supplémentaires.",
    "paragraphs": [
      "Selon les estimations, le service de deux ans pourrait être entièrement appliqué. Cette solution est déduite de chiffres qui semblent précis : le service de trois ans donne 575 200 hommes, contre 525 200 pour le service de deux ans.",
      "En somme, il faudrait 50 000 rengagés en plus des 22 000 actuels pour maintenir les effectifs."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Opérations militaires en Afrique du Sud",
    "summary": "Le point sur les escarmouches en Afrique du Sud : entre engagements Boers et mouvements des colonels Knox et Rimmington, les troupes britanniques poursuivent leurs opérations de saisie de provisions et de bétail.",
    "paragraphs": [
      "Un détachement anglais de soixante hommes a attaqué les Boers à Bultels-hoek, mais, par suite de l'arrivée de renforts, il a dû battre en retraite. On croit que les Boers ont eu quatre tués et six blessés.",
      "Un autre engagement a eu lieu près de Garnahock entre un corps anglais et le commando de Scheefer. Dans cette affaire, les Anglais ont eu deux blessés.",
      "Le général Knox opère au sud-est d'Heidelberg. Il a été en contact continuel avec les Boers ces jours derniers et a capturé plusieurs milliers de bêtes à cornes et de moutons.",
      "Le colonel Rimmington a capturé 28 wagons et une grande quantité de provisions à l'est de Standerton. Le colonel Bullock continue sa marche vers le Nord et est entré en contact avec les Boers, causant des pertes des deux côtés.",
      "Des coloniaux ont eu deux engagements à l'ouest de Mortimer avec des Boers. Les coloniaux ont eu trois blessés et un homme fait prisonnier. Un autre détachement anglais a surpris les Boers près de Vaal-hoek."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "International",
    "title": "Dépêches internationales",
    "summary": "La peste bubonique sévit au Cap, touchant désormais la population européenne. Parallèlement, un violent incendie, suspecté d'être criminel, ravage un quartier de la ville de Vladivostok.",
    "paragraphs": [
      "Le Cap, 11 mai : On signale aujourd'hui sept nouveaux cas de peste bubonique, dont trois parmi les Européens.",
      "Londres, 11 mai : Tout un quartier de Vladivostok est en proie aux flammes. Les pompiers sont impuissants à combattre l'incendie, qu'on attribue à la malveillance de la part des Chinois."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Un discours de M. Chamberlain",
    "summary": "Dans un discours à Birmingham, M. Chamberlain justifie avec fermeté la guerre contre les Boërs, défend les mesures fiscales du gouvernement et balaie les critiques de l'opposition à la Chambre des communes.",
    "paragraphs": [
      "Birmingham, 11 mai : M. Chamberlain a prononcé hier un grand discours devant l'assemblée des libéraux-unionistes de Birmingham. Il a déclaré que la guerre actuelle était juste, inévitable et imposée par les provocations des Boërs.",
      "Il a fait ensuite l'apologie des mesures financières prises par le gouvernement et a affirmé que la nouvelle taxe sur les charbons serait payée par l'étranger.",
      "En ce qui concerne l'opposition que le gouvernement rencontre à la Chambre des communes, M. Chamberlain a déclaré qu'il n'y avait pas lieu d'en tenir compte."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Économie",
    "title": "Les événements de Chine",
    "summary": "M. Beau, nouveau ministre de France, poursuit sa route vers Pékin, tandis que les négociations sur le règlement des indemnités chinoises s'orientent vers un prélèvement sur les droits de douane.",
    "paragraphs": [
      "Shanghaï, 11 mai : M. Beau, le nouveau ministre de France, est arrivé, en route pour Pékin. Des dispositions sont prises pour faire rentrer immédiatement dans l'Inde le régiment d'infanterie actuellement stationné à Tien-Tsin.",
      "Londres, 11 mai : Plusieurs journaux publient une dépêche de Pékin selon laquelle Li-Hung-Chang aurait reçu de la Cour un message précisant que les indemnités devront être réglées sur les revenus des droits de douane."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Onze hommes noyés au large de Penmarch",
    "summary": "Un drame maritime endeuille le Guilvinec : la chaloupe de pêche Marengo a fait naufrage au large des Étocs, entraînant la disparition tragique de tout son équipage de onze marins.",
    "paragraphs": [
      "La préfecture maritime vient d'être informée d'un terrible malheur qui laisse sept veuves et seize orphelins. La chaloupe de pêche Marengo, du port de Guilvinec, s'est perdue corps et biens au large des Étocs, près de Penmarch.",
      "Les onze hommes d'équipage ont disparu. L'émotion est extrême sur toute la côte."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Une bataille de trusts à New-York",
    "summary": "Une lutte d'influence financière oppose les groupes Gould-Rockefeller aux intérêts Vanderbilt-Morgan à New-York, soulevant de vives inquiétudes quant à la stabilité économique des États-Unis.",
    "paragraphs": [
      "Deux trusts, dirigés par les Gould et Rockefeller d'une part, et les Vanderbilt et Morgan d'autre part, ont engagé à New-York une bataille boursière mémorable.",
      "La folie des spéculations a été telle que les pouvoirs publics s'en sont préoccupés. On se demande si cette lutte financière n'exercera pas une répercussion sur la condition économique générale des États-Unis."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie au Métropolitain",
    "summary": "Hier soir, face à la gare de Lyon, un incendie causé par une bougie oubliée à proximité de bidons d'essence a provoqué l'interruption du service du Métropolitain. Aucune victime n'est heureusement à déplorer.",
    "paragraphs": [
      "Un incendie s'est déclaré hier soir dans la station du chemin de fer métropolitain, située en face de la gare de Lyon. Une bougie allumée, imprudemment oubliée à proximité de bidons d'essence, est à l'origine du sinistre.",
      "La station s'est promptement emplie d'une fumée âcre. Le service du Métropolitain a dû être interrompu pendant trois heures, mais aucun blessé grave n'est à déplorer malgré la frayeur causée aux voyageurs."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrestation de faux monnayeurs",
    "summary": "Léon Bérard et Jean Boninot ont été appréhendés alors qu'ils écoulaient de fausses pièces de 20 francs dans les commerces du boulevard Saint-Germain. Ils ont dénoncé le fabricant de la monnaie contrefaite.",
    "paragraphs": [
      "Deux individus, nommés Léon Bérard et Jean Boninot, ont été arrêtés alors qu'ils écoulaient de fausses pièces de 20 francs dans les magasins du boulevard Saint-Germain.",
      "Conduits au commissariat, les deux hommes ont fini par passer aux aveux et ont formellement dénoncé l'auteur du trafic, à savoir le fabricant même de la monnaie contrefaite."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un mauvais fils",
    "summary": "Louis Balzingue a été interpellé par les gardiens de la paix après avoir violemment saccagé le domicile de ses parents et exercé des sévices sur eux, suite à un refus de leur part de lui remettre de l'argent.",
    "paragraphs": [
      "Louis Balzingue, un fils à la conduite violente, a dévasté le logement de ses parents vieillards après que ces derniers lui eurent refusé la remise d'une somme d'argent. Il leur a porté des coups avant d'être appréhendé par les gardiens de la paix."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vol et arrestation à Paris",
    "summary": "Un individu du 13e arrondissement a été arrêté en possession de 380 francs volés et de 510 francs d'objets dérobés. Il a avoué avoir commis ces vols afin de festoyer pendant trois jours.",
    "paragraphs": [
      "Le Petit Parisien rapporte l'arrestation d'un individu demeurant rue de la Pointe-d'Ivry, dans le treizième arrondissement, après qu'une perquisition a permis de découvrir une somme de 380 francs dissimulée dans un bonnet de nuit.",
      "L'homme, pressé de questions, a avoué avoir volé cet argent dans le but de festoyer pendant trois jours. Dans son armoire, les agents ont également retrouvé des objets volés pour une valeur estimée à 510 francs. Le coupable a été conduit à la préfecture."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incident de chasse à Suresnes",
    "summary": "À Suresnes, M. Louis Duteil, demeurant rue des Menus, a abattu par mégarde un chien errant qui s'était introduit dans le couloir d'une habitation privée.",
    "paragraphs": [
      "À Suresnes, M. Louis Duteil, domicilié rue des Menus, a tué accidentellement un chien errant d'un coup de fusil, alors que l'animal s'était introduit dans le couloir d'une maison privée."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de bétail à Suresnes",
    "summary": "Aux abords du pont de Suresnes, un tramway a percuté un troupeau de quarante moutons. Le choc fut terrible : neuf bêtes sont mortes sur le coup et six autres ont été grièvement blessées.",
    "paragraphs": [
      "Près du pont de Suresnes, un troupeau de quarante moutons a été heurté par un tramway. Quinze bêtes ont été atteintes par le choc, dont neuf ont été tuées net."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Collision fluviale sur la Seine",
    "summary": "Une collision violente est survenue entre une péniche chargée de matériaux et le remorqueur « Saint-Magnan ». La péniche, gravement endommagée, a évité le naufrage grâce à une prompte intervention.",
    "paragraphs": [
      "Une collision a eu lieu hier matin entre une péniche chargée de matériaux de construction et le remorqueur « Saint-Magnan ». Le bâtiment, durement éprouvé par le choc, a évité une submersion complète grâce à l'intervention prompte des secours."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de travail à Paris",
    "summary": "Un charretier de quarante-deux ans, demeurant boulevard de Grenelle, a été victime d'un grave accident avenue de la Défense : mordu violemment par son cheval, il a eu le bras droit broyé.",
    "paragraphs": [
      "Un charretier de quarante-deux ans, demeurant boulevard de Grenelle, a été grièvement mordu par l'un de ses chevaux avenue de la Défense ; il a eu le bras droit broyé. Il a été transporté d'urgence à l'hôpital pour y recevoir les soins que son état nécessite."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de la voie publique",
    "summary": "M. Rainier, victime d'une chute après un emportement de sa monture, a été violemment projeté contre une borne en fonte. Le malheureux a subi des fractures à la mâchoire et à la jambe droite.",
    "paragraphs": [
      "M. Rainier a été violemment projeté contre une borne en fonte après que le cheval qu'il montait s'est emporté. Il a eu la mâchoire et la jambe droite fracturées dans cette chute brutale."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Chute mortelle d'un ouvrier à Colombes",
    "summary": "À Colombes, l'ouvrier plombier Auguste Razen a fait une chute tragique depuis un toit. Souffrant d'une double fracture des membres inférieurs, il a été dirigé d'urgence vers l'hôpital Beaujon.",
    "paragraphs": [
      "À Colombes, Auguste Razen, un ouvrier plombier de vingt-neuf ans, a fait une chute d'un toit alors qu'il travaillait. Il s'est fracturé les deux jambes et a été transporté d'urgence à l'hôpital Beaujon."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vol à Maisons-Laffitte",
    "summary": "M. Jules Ducasse, moteur-vérificateur, a été victime du vol de son portefeuille contenant 700 francs et sa carte d'électeur sur l'hippodrome de Maisons-Laffitte. Plainte déposée à Saint-Germain-en-Laye.",
    "paragraphs": [
      "M. Jules Ducasse, moteur-vérificateur, s'est fait dérober son portefeuille, contenant une somme de 700 francs ainsi que sa carte d'électeur, alors qu'il circulait sur la pelouse du champ de courses de Maisons-Laffitte.",
      "La victime s'est immédiatement rendue au commissariat de police de Saint-Germain-en-Laye pour y déposer une plainte contre les auteurs de ce vol."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Vie Municipale",
    "title": "Nouveau marché au Pré-Saint-Gervais",
    "summary": "La municipalité du Pré-Saint-Gervais annonce l'ouverture officielle d'un nouveau marché alimentaire. Celui-ci se tiendra dorénavant place des Écoles, les mardis, jeudis et dimanches.",
    "paragraphs": [
      "La municipalité du Pré-Saint-Gervais a officiellement autorisé l'ouverture d'un marché alimentaire destiné aux habitants.",
      "Celui-ci se tiendra désormais place des Écoles, trois fois par semaine, soit les mardis, jeudis et dimanches."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression à Aubervilliers",
    "summary": "M. Louis Lejuno, garçon boucher, a été agressé et dépouillé par trois malfaiteurs rue du Mauvin. Grâce à son signalement, le commissaire Marie a procédé à l'arrestation des trois individus.",
    "paragraphs": [
      "M. Louis Lejuno, garçon boucher, a été assailli rue du Mauvin par trois individus malintentionnés qui, après l'avoir frappé, l'ont totalement dévalisé.",
      "Grâce au signalement précis fourni par la victime, M. le commissaire Marie a pu procéder rapidement à l'arrestation des trois coupables, qui ont été immédiatement conduits au dépôt."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Escroquerie à Saint-Mandé et Vincennes",
    "summary": "Une série d'escroqueries frappe Saint-Mandé et Vincennes : un individu se faisant passer pour un agent de la Compagnie du gaz extorque indûment dix francs aux résidents.",
    "paragraphs": [
      "Depuis quinze jours, les habitants de Saint-Mandé et de Vincennes sont la cible d'un escroc audacieux se faisant passer pour un contrôleur de la Compagnie du gaz.",
      "Sous ce faux prétexte, l'individu réclame aux administrés la somme de dix francs pour des frais de mutation imaginaires."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Bande organisée à Vincennes",
    "summary": "Marius Delanne, employé aux chemins de fer, a été arrêté pour vols de colis. L'enquête du commissaire Retnadin confirme l'existence d'un réseau criminel structuré au sein des gares de marchandises.",
    "paragraphs": [
      "Marius Delanne, employé à la Compagnie des chemins de fer L.-M., a été appréhendé dans le cadre d'une vaste affaire de vols de colis.",
      "L'enquête minutieusement menée par le commissaire Retnadin a permis de mettre au jour l'existence d'une bande organisée opérant au sein même des gares de marchandises."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Chute à Fontenay-sous-Bois",
    "summary": "Le peintre Henri Feli, âgé de trente-cinq ans, a été victime d'une chute grave depuis le deuxième étage d'un immeuble de l'avenue de la Dame-Blanche. Son état a nécessité son transfert à l'hôpital Saint-Antoine.",
    "paragraphs": [
      "Un grave accident s'est produit à Fontenay-sous-Bois. Le nommé Henri Feli, âgé de trente-cinq ans, exerçant la profession de peintre, a fait une chute terrible du deuxième étage alors qu'il travaillait à l'entretien d'une fenêtre sise avenue de la Dame-Blanche. Le malheureux a été immédiatement transporté à l'hôpital Saint-Antoine, où son état inspire de vives inquiétudes."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide à Fontainebleau",
    "summary": "Mme Anne Cornichon, trente-six ans, a mis fin à ses jours à son domicile de Fontainebleau. Une lettre manuscrite retrouvée sur les lieux laisse présumer que des chagrins de famille ont motivé ce geste fatal.",
    "paragraphs": [
      "On nous signale un drame intime à Fontainebleau. Mme Anne Cornichon, âgée de trente-six ans, a été découverte pendue dans son domicile. Sur une table voisine, un papier portait ces mots poignants : « Vous ne me chercherez pas, je dors en paix ». Tout porte à croire que ce désespoir trouve sa source dans de profonds chagrins de famille."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident à Claye-Souilly",
    "summary": "Le jeune Maxime Ranvier, âgé de quinze ans, a été grièvement blessé lors d'un accident à Claye-Souilly. L'enfant a chuté sous les roues d'un chariot chargé de paille qui circulait dans la commune.",
    "paragraphs": [
      "Un accident regrettable est survenu à Claye-Souilly. Le jeune Maxime Ranvier, âgé de quinze ans, a été renversé alors qu'il circulait sur la voie publique. Il a malheureusement fait une chute brutale sous les roues d'un lourd chariot chargé de paille, subissant des blessures de la plus haute gravité qui ont nécessité des soins urgents."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de tramway à Versailles",
    "summary": "En pleine animation de la foire, M. Eugène Richard, quarante et un ans, a été heurté et violemment projeté par un tramway électrique avenue de Saint-Cloud, subissant des blessures sérieuses.",
    "paragraphs": [
      "Versailles a été le théâtre d'un accident spectaculaire avenue de Saint-Cloud, en pleine période de foire. M. Eugène Richard, âgé de quarante et un ans, a été violemment heurté par un tramway électrique. Projeté avec force sur la chaussée, il a été relevé avec des blessures jugées préoccupantes par les témoins du drame."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident à Rambouillet",
    "summary": "M. Désiré Lhomme a été grièvement blessé à Clairefontaine après un emballage spectaculaire de son cheval. La voiture a basculé, et le malheureux a été écrasé par une roue durant l'incident.",
    "paragraphs": [
      "À Clairefontaine, près de Rambouillet, M. Désiré Lhomme, âgé de trente-sept ans, a été victime d'un accident de voiture. Son cheval s'étant subitement emballé, l'attelage est devenu incontrôlable et s'est renversé. Projeté violemment, M. Lhomme a été renversé par une roue de sa propre voiture, occasionnant des blessures sérieuses nécessitant une prompte assistance médicale."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Actualités",
    "title": "Incendie à Amiens",
    "summary": "Un terrible incendie a ravagé ce matin la teinturerie de velours de Mme veuve Lavaltard à Amiens. Le sinistre cause 800 000 francs de dégâts et laisse quatre-vingts ouvriers sans emploi.",
    "paragraphs": [
      "Un incendie d'une violence inouïe a détruit, ce matin, la teinturerie de velours de Mme veuve Lavaltard. Les pertes s'élèvent à 800 000 francs et quatre-vingts ouvriers se trouvent désormais au chômage."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Explosion à Poitiers",
    "summary": "Le quartier de la Poste, à Poitiers, fut secoué cette nuit par un attentat à la bombe déposée sur une fenêtre. Les autorités judiciaires ont immédiatement ouvert une enquête pour appréhender les coupables.",
    "paragraphs": [
      "Le quartier de la Poste, à Poitiers, a été secoué cette nuit par l'explosion d'une bombe placée sur une fenêtre. La police recherche activement les auteurs de cet acte criminel."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents mortels à Compiègne et Beaujeu",
    "summary": "Deux tragédies endeuillent ces localités : le jeune François Bonnard a été écrasé par un bloc de pierre, tandis que le couvreur Jalon Dequivre a succombé suite à une chute mortelle depuis un toit.",
    "paragraphs": [
      "François Bonnard, âgé de vingt-quatre ans, a été écrasé par un bloc de pierre alors qu'il s'abritait de la pluie sous un chariot.",
      "Par ailleurs, un jeune couvreur de quatorze ans, nommé Jalon Dequivre, est mort des suites d'une chute accidentelle depuis un toit."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Tribunaux",
    "title": "Condamnations judiciaires",
    "summary": "La justice a statué sur plusieurs affaires : réduction de peine pour Élodie Wathier, règlement d'un legs important pour des œuvres charitables, et condamnation des époux Kirtz pour chantage.",
    "paragraphs": [
      "Élodie Wathier a vu sa peine réduite à huit mois de prison pour des menaces proférées à l'encontre du grand chancelier de la Légion d'honneur.",
      "Le tribunal a également statué sur le legs de 500 000 francs de M. Louis, réparti entre l'hospice des enfants tuberculeux et diverses œuvres charitables.",
      "Enfin, une affaire de chantage visant M. Delorme a conduit les époux Kirtz, accompagnés de leur complice Raimbold, à être incarcérés."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Tribunaux",
    "title": "Condamnation pour vol",
    "summary": "Le déménageur Arsène Duke a été condamné à trois ans de prison ferme pour avoir détourné, à l'occasion de ses fonctions professionnelles, des titres de valeur totalisant 32 000 francs.",
    "paragraphs": [
      "Arsène Duke, exerçant la profession de déménageur, a été condamné à trois ans de prison pour avoir détourné des titres d'une valeur de 32 000 francs à l'occasion d'un déménagement."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Éditorial",
    "title": "Seconde Communication sur le Canal de Panama",
    "summary": "Un plaidoyer pour la poursuite des travaux du canal de Panama. L'auteur réfute la viabilité du projet nicaraguayen, souligne la simplicité technique de l'achèvement et prédit une prospérité financière colossale pour la France.",
    "paragraphs": [
      "Depuis le jour récent où j'ai adressé un appel à tous ceux, petits ou grands, qui comprennent de quoi est fait l'honneur d'une grande nation, j'ai reçu de tous les points du territoire des lettres émouvantes. J'ai résolu de répondre non pas individuellement à chacun, mais à la masse silencieuse dont ils ont exprimé la pensée.",
      "Mon premier appel a été inspiré par le désir ardent de protéger la petite épargne engagée dans l'œuvre de Panama, de déchirer la page écrite par la calomnie et d'enlever à notre histoire future le remords d'avoir abandonné une œuvre de vitalité française.",
      "Je repousse l'épithète de généreux concernant ma souscription de deux millions ; ce n'est pas une offrande, mais un placement avisé et fructueux pour le plus clairvoyant des hommes d'affaires.",
      "Examinons les conditions de réussite de Panama. Il faut un monopole absolu, des dépenses de construction précisées et une clientèle suffisante. Y a-t-il danger de concurrence ? Le passage par l'isthme de Nicaragua est techniquement impossible, dangereux du fait de l'activité volcanique et des tremblements de terre, et économiquement moins viable que Panama.",
      "Pour le coût de l'achèvement, les travaux restants sont simples et usuels. Avec 600 millions, le canal peut être terminé. Les évaluations actuelles sont garanties par la simplicité de ce qu'il reste à réaliser.",
      "Concernant les profits, le trafic futur, porté par le développement de l'Ouest américain et les relations avec l'Asie, promet des rendements colossaux, bien supérieurs à ceux de Suez.",
      "La création immédiate avec 600 millions d'une valeur de 1 600 millions est réalisable. Mon intime conviction est que le canal vaudra une dizaine de milliards trente ans après son ouverture.",
      "Que chacun exprime sa préférence, mais ne laissons pas mourir cette grande œuvre. J'aurai, quoi qu'il advienne, satisfait ma conscience."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Informations de transport",
    "title": "Départs et Arrivées des Paquebots",
    "summary": "Bulletin maritime du 14 mai 1899 : mouvements des paquebots Saint-Simon, Ville-de-Maceio et Canada dans les ports du Havre, de Conakry et de Pointe-à-Pitre.",
    "paragraphs": [
      "Le paquebot Saint-Simon, venant de La Plata, est arrivé au Havre le 14 mai.",
      "Le paquebot Ville-de-Maceio, venant de Grand-Bassam, est arrivé à Conakry le 10 mai, en route pour Dakar.",
      "Le paquebot Canada, venant de Bordeaux et Santander, est arrivé à Pointe-à-Pitre le 11 mai, en route pour Colon et escales."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Annonces de services",
    "title": "Informations de la Compagnie des Chemins de fer",
    "summary": "La Compagnie des chemins de fer de l'Est propose des billets à tarif réduit pour les familles souhaitant visiter la vallée de la Marne jusqu'au 31 octobre.",
    "paragraphs": [
      "La Compagnie des chemins de fer de l'Est rappelle au public qu'elle délivre des billets spéciaux à prix réduit pour faciliter les excursions et les promenades dans la vallée de la Marne.",
      "Ces billets d'aller et retour, valables pendant 30 jours, sont délivrés jusqu'au 31 octobre pour les familles d'au moins trois personnes voyageant ensemble."
    ]
  }
];
