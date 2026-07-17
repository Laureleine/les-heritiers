// Date: 1900-08-15
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-08-15 (Version Restaurée, 44 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "Le code de l'enfance",
    "summary": "La réforme de la majorité pénale et l'abandon des colonies pénitentiaires au profit de l'éducation correctionnelle sont préconisés pour enrayer la hausse préoccupante de la délinquance juvénile en France.",
    "paragraphs": [
      "Il n'est pas de question plus délicate que celle de la répression des crimes et délits commis par l'enfance. Le Code pénal actuel, à travers ses articles 66 à 69, semble en retard sur le progrès des mœurs et les nécessités de l'heure.",
      "Des spécialistes, comme M. Louis Albanel, juge d'instruction au tribunal de la Seine, proposent des réformes profondes. Il suggère notamment de reculer la limite de la majorité pénale à dix-huit ans et de remplacer les colonies pénitentiaires par des établissements de réforme ou d'éducation correctionnelle, privilégiant le placement familial.",
      "L'armée du crime juvénile ne cesse d'augmenter, ce qui rend urgente la modification de cette législation pour passer de la simple répression à la prophylaxie."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "L'Immolée",
    "summary": "Le secret de Jeannine est percé à jour. Le docteur de Pellenoux confirme à André, le maître de forges, l'état de grossesse de la jeune fille, provoquant une fureur vengeresse envers le lieutenant Pierre.",
    "paragraphs": [
      "Jeannine, revenue au château, est en proie à un secret grave. Le docteur, après l'avoir examinée, soupçonne un état délicat qu'il dissimule à son entourage pour ne pas les effrayer.",
      "André, le maître de forges, tourmenté par le comportement du médecin, décide de consulter un autre praticien, le docteur de Pellenoux. Celui-ci confirme cruellement la grossesse de la jeune fille.",
      "André, ivre de fureur, se prépare à annoncer la terrible nouvelle au lieutenant Pierre, l'amoureux de Jeannine."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des ministres",
    "summary": "Sous la présidence de M. Loubet, le conseil des ministres s'est réuni à l'Élysée pour délibérer sur les questions diplomatiques concernant la Chine et l'organisation des prochaines festivités officielles.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin à l'Élysée sous la présidence de M. Loubet pour traiter des affaires de Chine et des prochaines fêtes officielles."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "L'état de la politique",
    "summary": "Après la session parlementaire, une accalmie politique s'installe. Le gouvernement consolide sa popularité autour de l'Exposition universelle et d'une gestion ferme de la crise en Extrême-Orient.",
    "paragraphs": [
      "Depuis la fin de la session parlementaire, une détente des esprits semble s'opérer. Le pays se concentre désormais sur deux axes majeurs : le succès de l'Exposition universelle et la gestion de la crise en Extrême-Orient.",
      "L'attitude ferme du gouvernement en Chine et la solidarité affichée entre l'armée et la nation lors des cérémonies à Marseille ont renforcé la popularité du Président Loubet et désarmé les critiques réactionnaires."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits divers",
    "title": "Accident de chemin de fer",
    "summary": "Un déraillement de train omnibus survenu à Persan-Beaumont cause onze blessés. Les secours sont organisés tandis qu'une enquête est diligentée pour déterminer les causes de cet accident ferroviaire.",
    "paragraphs": [
      "Un grave accident s'est produit hier après-midi sur la ligne du Nord, à Persan-Beaumont, lorsqu'un train omnibus en provenance de Creil a déraillé. On dénombre onze blessés, dont six sérieusement atteints.",
      "Les secours, menés par les autorités municipales et la Compagnie du Nord, ont transporté les victimes à l'hôpital de Beaumont. L'enquête est en cours pour déterminer les causes exactes du déraillement."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Actualité internationale",
    "title": "Le naufrage de la Framée",
    "summary": "La marine française est en deuil suite au naufrage du contre-torpilleur « La Framée », survenu après une collision accidentelle avec le cuirassé « Brennus ». Les nations étrangères témoignent de leur solidarité.",
    "paragraphs": [
      "La marine française est en deuil après le naufrage du contre-torpilleur « La Framée », survenu dans la nuit du 10 au 11 août, à la suite d'une collision accidentelle avec le cuirassé « Brennus ». Le drame a coûté la vie à une grande partie de l'équipage, malgré le courage héroïque dont ont fait preuve les officiers.",
      "Des témoignages de condoléances affluent de toute l'Europe, notamment d'Angleterre, de Russie, de Suède et du Japon, pour marquer leur profonde sympathie envers la France."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Actualité internationale",
    "title": "Les événements de Chine",
    "summary": "La progression des troupes alliées vers Pékin se poursuit. La situation des légations étrangères reste critique, alors que les vivres viennent à manquer et que les combats se multiplient.",
    "paragraphs": [
      "Les troupes alliées sont en marche vers Pékin. Les dernières dépêches indiquent qu'elles se trouvent à présent à proximité immédiate de la capitale. La situation des légations étrangères demeure préoccupante, avec des vivres presque épuisés et des combats incessants."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Diplomatie",
    "title": "L'Attitude des États-Unis vis-à-vis de la Chine",
    "summary": "Washington conditionne toute négociation avec la Chine à la sécurité des ministres étrangers et à l'accès libre des troupes de secours à Pékin, exigeant des mesures immédiates.",
    "paragraphs": [
      "Washington, 14 août. Les États-Unis ont répondu à la Chine de la manière suivante : « Les États-Unis apprennent avec plaisir la nomination de Li-Hung-Chang comme envoyé plénipotentiaire pour négocier avec les puissances. »",
      "« Ils entameront de leur côté lesdites négociations avec le désir de continuer les relations amicales qui existent depuis si longtemps entre les deux pays, mais il est évident qu'il ne saurait y avoir de négociation générale entre la Chine et les puissances tant que les ministres étrangers et leurs protégés restent dans la situation actuelle d'inquiétude et de danger. »",
      "« Les plus hautes considérations d'honneur imposent aux puissances, pour délivrer leurs représentants, des efforts qu'elles ne peuvent interrompre que si des dispositions efficaces sont prises pour effectuer pacifiquement cette délivrance. »",
      "« Nous sommes prêts à un arrangement pour la cessation des hostilités entre la Chine et les puissances, à la condition qu'il soit permis à une expédition de secours suffisante d'entrer à Pékin sans être molestée et d'escorter les étrangers jusqu'à Tien-Tsin. »",
      "« Les généraux commandant les troupes en Chine seraient chargés de prendre eux-mêmes toutes les dispositions à cet effet. » La réponse des États-Unis a été communiquée au corps diplomatique et envoyée aux représentants américains à l'étranger pour être communiquée aux différents gouvernements."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Guerre en Chine",
    "title": "Le Combat de Peï-Tsang",
    "summary": "Les forces alliées ont remporté une victoire éclatante à Peï-Tsang. Après avoir affronté 25 000 soldats chinois, les alliés ont capturé le camp ennemi et treize canons au terme d'une lutte acharnée.",
    "paragraphs": [
      "Saint-Pétersbourg, 14 août. Le ministère de la Guerre a reçu la dépêche suivante du général Linevitch, relative à la marche en avant des alliés sur Pékin (colonne expéditionnaire, 5 août) :",
      "« À la suite d'un arrangement, les troupes alliées, sous mes ordres en qualité d'officier le plus ancien de grade, ont commencé à attaquer Peï-Tsang ce matin, 5 août, au lever du jour. »",
      "« La position ennemie était bien retranchée et les Chinois étaient au nombre de 25 000 hommes, sous les ordres du vice-roi Chung-To-Chu. »",
      "« À dix heures du matin, le flanc gauche de la position ennemie et deux ponts ont été occupés et capturés par les troupes russes, tandis que les Japonais, les Anglais et les Américains, appuyés par la brigade sibérienne du général Stoessel, tournaient le flanc droit et emportaient d'assaut la position de Peï-Tsang. »",
      "« Les Chinois, étant contraints de se retirer rapidement, n'ont pas pu détruire le pont de bateaux. Les troupes russes, anglaises et japonaises ont été dépêchées à la poursuite de l'ennemi. Nos pertes ont été de 6 hommes. Les Japonais ont perdu plus de 200 hommes ; les Anglais et les Américains, environ 20. Les pertes chinoises ont été sérieuses. Treize canons ont été pris et tout le camp a été capturé. »"
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre en Chine",
    "title": "L'Occupation de Yang-Tsun",
    "summary": "Après la victoire de Peï-Tsang, les forces alliées ont conquis Yang-Tsun. Malgré une chaleur extrême et une vive résistance, les troupes occupent désormais la ville et bivouaquent sur place.",
    "paragraphs": [
      "Dans une seconde dépêche, le lieutenant-général Linevitch rapporte, pour la colonne expéditionnaire, en date du 6 août :",
      "« Ce matin, à quatre heures, les Russes, conjointement avec les troupes alliées, ont continué leur marche en avant de Peï-Tsang sur Yang-Tsun, le long de la rivière. »",
      "« Après une marche de 20 verstes (environ 21 kilomètres) par une température de plus de 100 degrés Fahrenheit, les fortifications et la ville de Yang-Tsun ont été prises d'assaut. »",
      "« Notre avant-garde, sous le commandement du colonel Modi, a attaqué le flanc droit de l'ennemi et, après une résistance opiniâtre qui a duré trois heures, s'est rendue maîtresse de la situation. Les Anglais, les Japonais et les Américains ont coopéré à une attaque de front de l'ennemi. Leurs pertes, jusqu'ici, sont inconnues. Nos pertes ont été de 2 officiers et 116 hommes blessés. Les Chinois, qui étaient environ 20 000, ont subi de grosses pertes. Nos troupes bivouaquent à Yang-Tsun et sont en excellente santé. »"
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Explosion d'une poudrière à Shanghaï",
    "summary": "Une explosion survenue dans une poudrière indigène à Shanghaï s'est révélée sans gravité, les ouvriers ayant quitté les lieux avant l'accident.",
    "paragraphs": [
      "Shanghaï, 14 août. Une poudrière indigène a fait explosion hier soir.",
      "Dernière heure : L'explosion qui a eu lieu à la poudrière indigène est sans importance. Un petit nombre seulement de cartouches ont été détruites. Il n'y a aucune victime, car les ouvriers avaient quitté les ateliers avant l'explosion."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Les intentions de Guillaume II concernant la Chine",
    "summary": "Dans une harangue à ses troupes, l'empereur Guillaume II réclame la répression de l'insurrection en Chine tout en s'opposant fermement au partage de l'Empire.",
    "paragraphs": [
      "Berlin, 14 août. Le Lokal-Anzeiger publie des extraits d'une lettre écrite par un officier actuellement en route pour la Chine, reproduisant l'allocution qu'a adressée l'empereur aux officiers des navires qui transportent les troupes.",
      "Dans cette harangue, l'empereur a déclaré que les rapports avec la Chine étaient devenus extrêmement tendus, contre sa volonté. Cet état des relations avait pour cause le fait qu'on n'estimait pas l'adversaire à sa juste valeur. Les officiers ne devaient pas se reposer avant que l'adversaire fût écrasé et demandât grâce à genoux.",
      "En ce qui concerne ses intentions politiques, l'empereur a déclaré qu'elles pouvaient se résumer ainsi : répression de l'insurrection, punition exemplaire des rebelles, établissement d'un gouvernement puissant offrant les garanties écrites nécessaires pour que de tels faits ne se reproduisent plus. Il s'opposera résolument au partage de l'empire chinois.",
      "L'empereur a ensuite exhorté les troupes à ne pas dédaigner l'ennemi, mais à le traiter avec fermeté. Finalement, l'empereur a dit que, dans les relations avec les officiers des autres puissances, tout sentiment politique devait naturellement disparaître : tous combattent le même ennemi pour le maintien de la civilisation."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Le rôle du Comte de Waldersee",
    "summary": "À Saint-Pétersbourg, les autorités clarifient que le rôle du maréchal de Waldersee est purement stratégique et exclut toute compétence diplomatique directe.",
    "paragraphs": [
      "Saint-Pétersbourg, 14 août. Conformément à l'opinion formulée ce matin par le Journal de Saint-Pétersbourg, on estime dans les milieux officiels russes compétents que les journaux allemands ont exagéré le rôle dévolu au maréchal de Waldersee.",
      "Il n'aura absolument aucun caractère diplomatique et devra se borner à exercer la direction stratégique, ainsi qu'à unifier l'action des troupes internationales comme une sorte de président du conseil des généraux, en laissant aux commandants des troupes de chaque pays la direction autonome et les opérations concertées avec le commandant en chef."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Colonial",
    "title": "La fièvre jaune au Sénégal",
    "summary": "Face à l'épidémie de fièvre jaune sévissant au Sénégal, le ministère de la Marine suspend l'envoi de troupes et reporte la relève pour le Soudan au mois de novembre prochain.",
    "paragraphs": [
      "Le ministre de la Marine communique la note suivante : En raison de l'épidémie de fièvre jaune qui sévit actuellement au Sénégal, tout envoi de troupes dans cette région sera suspendu jusqu'à nouvel avis.",
      "Par suite, la relève du Soudan n'aura lieu que vers le mois de novembre prochain. Le ministre a décidé que le personnel désigné pour servir dans cette possession sera réintégré aux corps de provenance, sauf pour les officiers désignés pour occuper des fonctions politiques et administratives."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Dépêches du front sud-africain",
    "summary": "Le conflit en Afrique du Sud s'intensifie avec des réoccupations de positions par les Boërs et des opérations de poursuite actives menées par les forces britanniques.",
    "paragraphs": [
      "Londres, 14 août. On télégraphie de Durban au Standard, à la date du 13, que les Transvaaliens ont réoccupé Heilbron et Klerksdorp.",
      "Une dépêche de Prétoria rapporte que les Boërs, en même temps qu'ils faisaient prisonnière la garnison d'Elands-River, ont capturé le convoi qui allait ravitailler cette place.",
      "Lord Roberts télégraphie de Pretoria à la date du 13 août que Methuen et Kitchener continuent à poursuivre De Wet et Steijn. Buller a occupé Ermelo le 11 août sans opposition. Un fieldcornet et 182 burghers se sont rendus au général Clery.",
      "Mafeking, 13 août. Les détails reçus au sujet de la tentative du général Carrington pour secourir la garnison d'Elands-River indiquent qu'après un violent combat contre les Boërs, les Anglais furent obligés de se replier sous un feu nourri, avant d'atteindre Zeerust le 7 août."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Lord Salisbury en convalescence",
    "summary": "Sur recommandation médicale, Lord Salisbury gagne les Vosges pour un séjour d'un mois à la Schlucht, tout en maintenant une liaison télégraphique permanente avec le Foreign Office.",
    "paragraphs": [
      "Londres, 14 août. Lord Salisbury est parti pour les Vosges, sur le conseil de ses médecins. Il séjournera un mois à la Schlucht, près de Gérardmer, où il sera en communication constante avec le Foreign Office."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Crime à Andenne",
    "summary": "Un meurtre sanglant a été perpétré à Andenne, près de Namur. La victime, Frédéric Dubuisson, a succombé à douze coups de poignard. Le ministre de la Justice ordonne une surveillance accrue des établissements.",
    "paragraphs": [
      "Bruxelles, 14 août. Au cours d'une bagarre survenue à Andenne, près de Namur, le nommé Frédéric Dubuisson a été frappé de douze coups de poignard et a succombé peu après. L'assassin a pris la fuite. M. Van den Heuvel, ministre de la Justice, a ordonné une surveillance accrue sur les hôtels."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Placards anarchistes à Anvers",
    "summary": "Des affiches anarchistes appelant à la sédition ont été apposées à Anvers. Un individu a été appréhendé en flagrant délit alors qu'il placardait ces proclamations sur une chapelle.",
    "paragraphs": [
      "Bruxelles, 14 août. Des placards anarchistes ont été affichés à Anvers, invitant le peuple à détruire les tyrans et les lois. Un individu a été arrêté au moment où il apposait l'une de ces proclamations sur la porte d'une chapelle."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Économie",
    "title": "Le change en Espagne",
    "summary": "État des cours des devises en Espagne en date du 14 août : le change est coté à 30,83 à Madrid et à 30,86 à Séville.",
    "paragraphs": [
      "Madrid, 14 août. Le change à Madrid est à 30,83 et à Séville à 30,86."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Santé Publique",
    "title": "L'épidémie de choléra aux Indes",
    "summary": "Bilan officiel de l'épidémie de choléra aux Indes, du 25 juillet au 4 août : une mortalité élevée enregistrée dans les districts touchés par la famine et au sein des États indigènes.",
    "paragraphs": [
      "Bombay, 14 août. Voici les chiffres officiels de l'épidémie de choléra du 25 juillet au 4 août : dans les districts atteints par la famine, 3 881 cas et 4 261 décès ; dans les États indigènes, 5 114 cas et 3 954 décès. Le nombre des indigènes secourus gratuitement augmente."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Social",
    "title": "Grève des chauffeurs et marins",
    "summary": "Le mouvement de grève des chauffeurs et marins, après Dunkerque, Le Havre et Marseille, paralyse le trafic maritime, retardant dangereusement le départ des troupes coloniales vers la Chine.",
    "paragraphs": [
      "Suivant l'exemple du Havre et de Marseille, les chauffeurs de Dunkerque se sont mis en grève. Les marins font cause commune.",
      "À Toulon, le « Polyphème » a quitté le port avec des remplaçants pour Marseille. Dans cette dernière ville, les grévistes exigent le programme intégral de leurs revendications et le port demeure paralysé ; le départ des troupes pour la Chine s'en trouve retardé.",
      "Au Havre, les journaliers du port ont obtenu la journée de huit heures, mettant ainsi fin au conflit."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Nouvelles de l'Exposition",
    "summary": "L'organisation de l'Exposition Universelle règle les accès pour les nécessiteux et officialise le palmarès des nations, où la France s'illustre avec plus de 150 grands prix.",
    "paragraphs": [
      "Difficultés d'accès : Des lenteurs ont été signalées pour l'entrée des hospitalisés de l'asile de Brévannes. M. Alfred Picard a été sollicité pour garantir le libre accès aux indigents.",
      "Palmarès : Le jury supérieur a nommé une commission provisoire pour examiner les protestations. La France remporte environ 150 grands prix, la Belgique 100 et l'Autriche de 50 à 60.",
      "Récompenses : Plusieurs institutions d'enseignement ont été distinguées. Des fêtes sont prévues pour honorer les délégués des services des postes et télégraphes."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits Divers",
    "title": "Asphyxie dans un puits",
    "summary": "Drame tragique à Courtomer : un puisatier a péri asphyxié par des émanations toxiques, entraînant dans la mort le courageux journalier qui tentait de lui porter secours.",
    "paragraphs": [
      "Alençon, 14 août. Un puisatier nommé Vallée, âgé de 52 ans, a péri asphyxié dans un puits situé à Courtomer. Un courageux journalier, Auguste Locart, a tenté de le sauver, mais a lui-même succombé aux émanations de gaz toxiques."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Visite du général Brugère",
    "summary": "Le général Brugère effectuera demain une reconnaissance aux environs de Chartres afin de déterminer l'emplacement stratégique de la revue de clôture des grandes manœuvres.",
    "paragraphs": [
      "Chartres. Le général Brugère visitera demain les environs de Chartres afin de choisir l'emplacement définitif pour la revue de clôture des grandes manœuvres."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Congrès",
    "title": "Congrès des sténographes et dactylographes",
    "summary": "Clôture solennelle du congrès des sténographes sous la présidence de M. Lourties, marquée par la remise d'un prix d'excellence à M. Viatlet pour sa performance remarquable.",
    "paragraphs": [
      "Le congrès des sténographes et dactylographes vient de prendre fin. Sa dernière séance solennelle a été présidée par M. Lourties, sénateur et ancien ministre, qui a prononcé un discours remarqué.",
      "Les intéressants travaux du congrès ont ensuite fait l'objet d'un rapport documenté de M. Dyon, sténographe en chef du Sénat.",
      "La distribution des récompenses aux auteurs les plus méritants a eu lieu. Le premier prix, d'une valeur de 100 francs, offert par la Chambre de commerce de Paris, a été remporté par M. Viatlet, pour avoir réalisé, en trois minutes, une dictée à la cadence de 180 mots par minute."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Étranger",
    "title": "Établissement hydrothérapique à San Francisco",
    "summary": "Inauguration à San Francisco d'un établissement hydrothérapique grandiose, conçu par le milliardaire M. Sutro sur le modèle des thermes romains, pouvant accueillir 20 000 baigneurs dans un confort moderne.",
    "paragraphs": [
      "Le plus grand établissement hydrothérapique du monde vient d'être inauguré à San Francisco.",
      "Les hautes falaises de la côte du Pacifique sont, en cet endroit, percées de nombreux canaux qui alimentent d'eau de mer un vaste réservoir souterrain. C'est là que M. Sutro, le milliardaire californien, a eu l'idée de faire établir des piscines gratuites sur le modèle des thermes de Dioclétien, à Rome.",
      "Dans ce but, la falaise a été entièrement minée et le réservoir naturel a été aménagé en sept grandes piscines à eau chaude et à eau froide, destinées aux hommes, aux femmes et aux enfants. Quatre séries de générateurs servent à chauffer les milliers de litres d'eau et maintiennent constamment trois des réservoirs à une température de 30 degrés centigrades.",
      "La piscine principale mesure 300 pieds de long sur 150 de large. L'eau s'y renouvelle nuit et jour, et la profondeur atteint, en certains points, quatre mètres.",
      "Vingt mille personnes peuvent se baigner et circuler à l'aise dans cet immense établissement souterrain, éclairé à l'électricité, dont la construction et l'aménagement ont coûté à leur créateur pas moins de 800 000 dollars."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Agriculture",
    "title": "L'élevage des canards en Australie",
    "summary": "L'élevage industriel des canards se développe rapidement en Australie, notamment près de Sydney, où des méthodes modernes et l'exportation réfrigérée vers Londres assurent un essor économique notable.",
    "paragraphs": [
      "L'élevage des canards est une industrie relativement nouvelle en Australie, mais elle a pris depuis quelques mois une extension si considérable que nous croyons intéressant de donner à nos lecteurs quelques détails inédits sur la principale « duck-farm » du continent australien.",
      "L'établissement en question couvre, aux environs de Sydney, une superficie de trois hectares, divisés en quinze enclos différents contenant chacun une race spéciale de palmipèdes.",
      "Les femelles sont l'objet de soins tout particuliers. Leurs œufs, au fur et à mesure de la ponte, sont placés dans des couveuses mécaniques au nombre de trente.",
      "Les mâles, généralement impropres à l'exportation, sont engraissés et vendus localement. Au contraire, les canes, surtout celles de la race Aylesbury, sont envoyées en Angleterre dans des bateaux munis d'appareils réfrigérants. Certains de ces navires transportent à Londres, pendant la saison, des cargaisons importantes. On compte déjà plusieurs centaines de ces fermes avicoles dans le New South Wales."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Entre deux flâneurs",
    "summary": "Un court dialogue ironique soulignant l'absurdité administrative concernant l'interdiction probable des camelots aux abords de l'Exposition universelle.",
    "paragraphs": [
      "Il est question d'interdire aux camelots les abords de l'Exposition.",
      "Bah ! Pourquoi cela ?",
      "On s'est aperçu qu'ils crient « tickets ».",
      "Horrible !"
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Social",
    "title": "La grève des cochers",
    "summary": "État des lieux du mouvement de grève des cochers parisiens : persistance du conflit à la Compagnie générale et début d'accord prometteur pour la Compagnie l'Urbaine.",
    "paragraphs": [
      "À la Compagnie générale, on comptait hier sur une reprise du travail, mais les prévisions ne se sont pas réalisées. La grève est restée générale.",
      "Un certain nombre de cochers, voyant la situation se prolonger, ont pris le parti de retourner au pays. Les cinq délégués se sont rendus au siège de la Compagnie. M. Bixio, chargé par la direction, a mis le secrétaire général de la société de secours mutuels à la disposition des cochers pour fournir des explications sur la situation financière.",
      "Les délégués ont demandé la convocation d'une assemblée générale des cochers et vont soumettre les statuts au conseil judiciaire de la Bourse du travail.",
      "Pour la Compagnie l'Urbaine, les choses sont en voie d'arrangement. L'accord s'est fait sur le chiffre de 16 francs pour la moyenne quotidienne, applicable pour la seconde quinzaine d'août."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide d'un soldat",
    "summary": "Un jeune engagé volontaire de 23 ans s'est donné la mort par arme à feu dans une chambre d'hôtel du passage de l'Industrie, vraisemblablement atteint de neurasthénie.",
    "paragraphs": [
      "M. Durand, commissaire de police, a été appelé hier matin à constater le suicide du soldat Marius Renaudon, engagé volontaire de 23 ans, dans une chambre d'hôtel du passage de l'Industrie.",
      "L'enquête a révélé qu'il avait passé la veille à l'Exposition avec une compagne avant de se donner la mort par arme à feu. Il a laissé une lettre adressée à son père, instituteur, exprimant un dégoût profond de l'existence. Il était apparemment atteint de neurasthénie."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une étrange affaire",
    "summary": "M. Leydet, juge d'instruction, instruit une affaire de supposition d'enfant où une femme a tenté de s'approprier un nouveau-né de l'Hôtel-Dieu pour précipiter son mariage avec son compagnon.",
    "paragraphs": [
      "M. Leydet, juge d'instruction, est actuellement saisi d'une délicate affaire de supposition d'enfant. Une demoiselle, cherchant par tous les moyens à se faire épouser par son compagnon, avait eu l'audace de faire passer pour sien un nourrisson né à l'Hôtel-Dieu.",
      "La véritable mère, une veuve, ayant réclamé son enfant après six mois de séparation forcée, le conflit a été porté devant les tribunaux, révélant les manœuvres frauduleuses de la prévenue."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de meurtre",
    "summary": "Une vive altercation boulevard de la Bastille a causé de graves blessures à l'inspecteur Lour, frappé d'un coup-de-poing américain alors qu'il tentait de s'interposer contre une agression.",
    "paragraphs": [
      "Une bagarre a éclaté hier, boulevard de la Bastille, au sujet d'une femme. L'inspecteur de la sûreté, Lour, a été grièvement blessé au visage par un malfaiteur utilisant un coup-de-poing américain, alors qu'il tentait courageusement d'intervenir contre une agression à l'arme blanche.",
      "M. Cochefert, chef de la sûreté, a aussitôt ordonné des recherches actives afin d'appréhender les coupables qui ont pris la fuite après leur forfait."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "La bagarre de la rue Didot",
    "summary": "Un violent affrontement a opposé, dans le 14e arrondissement, des membres de la Jeunesse socialiste aux forces de police, occasionnant de nombreux blessés par arme à feu et projectiles.",
    "paragraphs": [
      "Un affrontement tumultueux a eu lieu dans le 14e arrondissement entre des membres de la Jeunesse socialiste et des agents de police. Les versions des faits demeurent divergentes : tandis que les agents affirment avoir été assaillis sous une pluie de pierres et de coups de bâton, les manifestants soutiennent que les forces de l'ordre ont chargé sabre au clair.",
      "Plusieurs blessés sont à déplorer dans les deux camps, notamment parmi les personnes atteintes par des coups de feu tirés durant la confusion."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le secrétaire d'une Altesse",
    "summary": "M. P., secrétaire d'un prince étranger, a été arrêté à Paris pour escroquerie. Son gouvernement réclame son extradition pour le vol présumé de documents officiels de l'État.",
    "paragraphs": [
      "M. P., secrétaire d'un prince étranger, a été arrêté à Paris sous l'inculpation d'escroquerie. Son gouvernement sollicite avec insistance son extradition, l'accusant d'avoir dérobé des papiers d'État d'une haute importance.",
      "Son défenseur, M. Jamier, conteste devant les tribunaux la validité juridique de la demande d'extradition formulée par les autorités étrangères."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drames conjugaux",
    "summary": "La chronique parisienne rapporte trois violentes agressions conjugales impliquant des armes blanches et des objets contondants dans divers quartiers de la capitale.",
    "paragraphs": [
      "La série noire des drames domestiques se poursuit : M. Cornevin a été grièvement blessé par son épouse qui l'a frappé violemment avec une bouteille. Par ailleurs, M. Lagoutte a fait feu sur sa femme et son amant rue Moreau.",
      "Enfin, une fleuriste, prénommée Henriette Dequet, a été sauvagement blessée au couteau par son compagnon, rue Julien-Lacroix."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Infanticides",
    "summary": "Deux tragiques affaires d'infanticide ont été révélées : Élisa Bircar a été arrêtée après la découverte de son enfant, et un nourrisson a été retrouvé mort sous le tunnel du parc Montsouris.",
    "paragraphs": [
      "Deux cas d'infanticide ont été découverts : une jeune femme, Élisa Bircar, a été arrêtée après la découverte du cadavre de son nouveau-né dans sa malle, et un autre nourrisson a été retrouvé étranglé sous le tunnel du parc Montsouris."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Distinctions",
    "title": "Nomination de M. Orsatti",
    "summary": "Le commissaire divisionnaire M. Orsatti a été nommé chevalier de la Légion d'honneur pour ses services remarquables et sa modération exemplaire lors de manifestations publiques.",
    "paragraphs": [
      "M. Orsatti, commissaire divisionnaire, a été nommé chevalier de la Légion d'honneur pour ses états de service exemplaires et son attitude conciliante lors de manifestations publiques."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Actualité",
    "title": "Les événements de Chine",
    "summary": "Port-Saïd, le 14 août. Le navire Le Redoutable est arrivé ce matin ; l'amiral Pottier fait route vers Takou tandis que les renforts russes et allemands convergent vers la zone.",
    "paragraphs": [
      "Port-Saïd, 14 août : Le Redoutable est arrivé ce matin. L'amiral Pottier a hissé son pavillon à bord pour partir vers Takou. Des renforts russes et allemands font également mouvement vers la zone."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Chronique",
    "title": "Histoire de la sténographie",
    "summary": "Une rétrospective sur l'évolution de la sténographie, depuis ses origines médiévales jusqu'aux méthodes modernes de Prévost et Duployé, devenues indispensables à l'administration et au commerce.",
    "paragraphs": [
      "Il fallut fort longtemps pour débrouiller les obscurités d'un texte écrit de la sorte. On s'en servit pourtant jusque dans les premiers siècles du Moyen-Âge.",
      "Il semble qu'à la longue l'usage de cette sténographie primitive ait fini par se perdre. Il faut arriver jusqu'au dix-septième siècle pour retrouver les sténographes à l'œuvre. L'abbé Jacques Cossard publia sa méthode pour écrire aussi vite qu'on parle.",
      "Quelques années plus tard, le chevalier Ramsay présente à Louis XIV une tachéographie fondée sur un principe plus ingénieux, décomposant les consonnes par des traits simples.",
      "Au dix-huitième siècle, les essais se multiplient. Les méthodes modernes d'Hippolyte Prévost et des frères Duployé sont celles en usage aujourd'hui.",
      "Si les greffiers de nos cours ont perdu l'habitude de rédiger sténographiquement, l'art tachygraphique occupe une place importante dans les débats des assemblées parlementaires. Aujourd'hui, la Chambre occupe un chef sténographe, un chef adjoint, six réviseurs, onze sténographes rouleurs et quatre auxiliaires.",
      "Les applications courantes sont nombreuses. Beaucoup de chefs de maisons importantes dictent leur correspondance à un secrétaire qui la sténographie, pour ensuite la transcrire à la machine à écrire."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Feuilleton",
    "title": "Main Gauche - Troisième partie : Vers l'inconnu",
    "summary": "Le récit suit les intrigues judiciaires entourant le comte de Terrique et Jean Rédal, alors que des témoins se croisent devant le juge d'instruction Vandenesse.",
    "paragraphs": [
      "Jean Rédal, au moment où l'on prononçait son nom au bureau, n'était pas encore entré dans le cabinet du juge d'instruction. Vers trois heures, deux dames arrivèrent élégamment mises.",
      "Rédal n'avait rencontré que rarement mademoiselle Duhalier. Le jour même de son mariage, il la regardait à peine. Aucun pressentiment ne lui dit que l'épouse du comte de Terrique se trouvait avec sa compagne à l'autre extrémité du banc.",
      "La jeune femme avait remis sous pli un mot pour son mari, le juge d'instruction Vandenesse, mais le garçon lui affirma qu'il ne pouvait être en ce moment dérangé.",
      "Le juge d'instruction Vandenesse, une fois par semaine, de neuf heures à une heure du matin, se rendait chez Madame, où il se faisait servir par M. Jean. À cette révélation, la voisine de l'homme fut prise d'un tressaillement violent et devint d'une pâleur livide."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Faits Divers",
    "title": "Le capitaine de France",
    "summary": "Contrairement aux craintes initiales, le capitaine de France, porté disparu dans les précipices du Galibiès, a été localisé sain et sauf en villégiature à La Bérarde, dans les Hautes-Alpes.",
    "paragraphs": [
      "On se souvient que nous avons parlé, à plusieurs reprises, de la disparition du capitaine de France, que l'on a vainement cherché dans les précipices et les ravins du Galibiès.",
      "Cet officier, d'après les renseignements fournis par deux journaux locaux, ne serait point mort, ainsi qu'on l'avait craint. Il serait simplement en villégiature dans un pays fort pittoresque, à La Bérarde, département des Hautes-Alpes."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Nouvelles Judiciaires",
    "title": "Condamnation du cafetier Charleux",
    "summary": "Le cafetier Charleux, figure des grèves du Creusot, a été condamné à huit jours de prison pour injures envers les gardes de l'usine. Il demeure incarcéré pour répondre d'autres faits plus graves.",
    "paragraphs": [
      "Le cafetier Charleux, du Creusot, ancien ouvrier aux usines, qui a joué un rôle considérable pendant les grèves, a été condamné, hier, à huit jours de prison par le tribunal correctionnel d'Autun, pour insultes aux gardes de l'usine.",
      "Après l'audience, Charleux a été arrêté et conduit en prison pour répondre de faits plus graves au sujet des derniers événements."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Programme des matinées et spectacles",
    "summary": "La Comédie-Française prépare une matinée littéraire au Trocadéro, tandis que Mme Marie-Louise Marsy démissionne. Les Bouffes-Parisiens annoncent, eux, leur nouvelle direction.",
    "paragraphs": [
      "Samedi prochain, en la salle des Fêtes du Trocadéro, aura lieu une matinée littéraire et dramatique, donnée par la Comédie-Française, avec au programme des extraits de Marivaux, Voltaire, Favart et Beaumarchais.",
      "Mme Marie-Louise Marsy vient d'adresser au comité de la Comédie-Française sa lettre de démission, invoquant des raisons de santé.",
      "C'est par « L'Enfant prodigue », l'exquis petit chef-d'œuvre de Michel Carré et André Wormser, que MM. de Vildreux et Peuni inaugureront leur direction du théâtre des Bouffes-Parisiens."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Sports",
    "title": "Les championnats du monde",
    "summary": "Le Vélodrome du Parc des Princes accueille les championnats du monde de cyclisme. Les préparatifs pour les prochains concours internationaux d'aviron s'accélèrent avec de nombreuses nations représentées.",
    "paragraphs": [
      "Seconde réunion des Championnats du monde aujourd'hui au Vélodrome du Parc des Princes. Le programme comporte la finale du Championnat du monde sur terre et le championnat de 100 kilomètres amateurs.",
      "Les concours d'aviron approchent ; c'est en effet les 25 et 26 août qu'ils se disputeront. Les États-Unis, la Hollande, la Belgique, l'Italie et l'Angleterre y seront représentés."
    ]
  }
];
