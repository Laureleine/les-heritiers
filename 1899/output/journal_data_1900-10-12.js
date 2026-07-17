// Date: 1900-10-12
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-10-12 (Version Restaurée, 52 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique",
    "title": "La Chasse",
    "summary": "Plaidoyer pour la préservation de la chasse, sport national et héritage historique français, menacé par la disparition du gibier et la hausse des prix. L'union des chasseurs est appelée à agir pour sauver cette tradition.",
    "paragraphs": [
      "Ce n'est pas sans un certain déplaisir que j'ai vu partout se produire les doléances des chasseurs, et que j'ai pu constater l'augmentation du prix du gibier sur nos marchés. Mais je trouve que si, pour une raison ou pour une autre, le gibier venait à disparaître du sol de France, et si la chasse n'était plus possible, il disparaîtrait en même temps l'un des plaisirs, l'un des sports qui sont bien de notre pays.",
      "C'est sur le sol gaulois, chez nos ancêtres, qu'est née d'abord la véritable chasse à courre, la vénerie proprement dite, qui consiste à forcer et à prendre la bête sans aucune espèce d'appareil ou d'engin.",
      "Mais c'est le XVIe siècle qui peut être considéré comme l'époque classique de la chasse. François Ier est salué comme le père des veneurs.",
      "Aussi bien, à la fin du XVIe siècle, l'invention de la grenaille de plomb était venue révolutionner la chasse, en mettant à la portée de tous un plaisir réservé jusque-là aux possesseurs de grands équipages. C'est de là qu'est sortie la chasse moderne, la chasse à tir.",
      "La vraie chasse, c'est celle du chasseur isolé qui part à l'aube avec un seul chien et qui passe la journée au grand air, dans les champs, sous bois, à la recherche d'un gibier. Voilà le vrai sport, le sport national. Il faut préserver la chasse, il faut la sauver. Syndiquez-vous, messieurs les chasseurs, et vous sauverez votre gibier."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Fruit Défendu",
    "summary": "Dans une scène dramatique, Jérôme tente d'imposer son affection à une enfant, provoquant chez les témoins une terreur indicible et le sentiment profond qu'un sacrilège vient d'être commis.",
    "paragraphs": [
      "Jérôme sourit et, les yeux brouillés de larmes, dit à sa fille : « Viens que je t'embrasse. » Il est obligé de l'arracher à Régine. Une lutte de caresses s'engage, au milieu de laquelle Rose-Manon demeure immobile, anéantie, comme frappée par la foudre.",
      "Un double cri étouffé, d'angoisse et de terreur, échappe à Rose et à Marianne. Régine, qui tient l'enfant au-dessus de sa tête et lui fait des grimaces, entend bien leur cri et s'y méprend. Sans même tourner la tête, il dit : « N'ayez donc pas peur ! Je ne lui ferai point de mal. Les gosses, ça me connaît, que diable, puisque voilà mon troisième. »",
      "Folle d'épouvante, Rose murmure dans les bras de Marianne : « Maman, c'est horrible, c'est un sacrilège ! Il ne faut pas lui laisser croire. »"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Le Voyage en Corse et en Tunisie",
    "summary": "Arrivés à Toulon, les ministres de la Guerre et de la Marine, M. de Lanessan en tête, préparent la réorganisation de l'armée coloniale et le départ d'une division navale vers la Corse et la Tunisie.",
    "paragraphs": [
      "Les ministres de la Marine et de la Guerre sont arrivés à Toulon hier matin. Après un court échange de souhaits de bienvenue, le cortège s'est rendu à l'hôtel de la préfecture maritime.",
      "Au cours de cette réception, M. de Lanessan, parlant aux officiers des 4e et 8e régiments d'infanterie de marine, a annoncé, comme devant se produire sous peu, le rattachement des troupes de la marine aux troupes de la Guerre pour la constitution définitive de l'armée coloniale.",
      "La division navale accompagnant les ministres en Corse et en Tunisie est composée comme suit : cuirassés Saint-Louis, Charlemagne et Bouvet ; croiseurs Chanzy et Galilée, et le contre-torpilleur Hallebarde."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique étrangère",
    "title": "Un succès diplomatique",
    "summary": "Par une note diplomatique alliant fermeté et modération, M. Delcassé réussit à unifier les puissances face à la crise chinoise, confirmant ainsi le rôle de meneur et l'influence internationale de la France.",
    "paragraphs": [
      "Depuis que la question chinoise s'est imposée aux préoccupations et aux alarmes, l'accord entre les grandes puissances a été le principal souci de la diplomatie. C'est alors que M. Delcassé a adressé aux diverses puissances une note nouvelle présentant les choses sous le double aspect de l'énergie et de la modération.",
      "Toutes les puissances ont envoyé leur adhésion. À la voix de la France, l'accord s'est manifesté. Une fois de plus, notre pays a montré la route et est suivi."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Attentat contre un commissaire de police",
    "summary": "Un drame s'est produit au commissariat de la gare de l'Est : un adolescent de seize ans a tiré à cinq reprises sur M. Maillard, commissaire adjoint, après s'être vu refuser sa demande d'être reconnu comme fils.",
    "paragraphs": [
      "Un attentat a été commis avant-hier matin au commissariat de la gare de l'Est. M. Maillard, commissaire adjoint, se trouvait vers dix heures du matin à son bureau lorsqu'on lui annonça deux visiteurs : Mlle C. et son fils Henri, âgé de seize ans.",
      "S'adressant alors à M. Maillard, le jeune homme demanda brusquement : « Voulez-vous me reconnaître pour votre fils ? » Sur une réponse négative du magistrat, l'individu sortit de sa poche un revolver et fit feu à cinq reprises sur celui-ci. La mère et le fils ont comparu hier devant le juge d'instruction."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Pris d'assaut",
    "summary": "Un tramway reliant la place Saint-Sulpice à Auteuil a été violemment pris d'assaut par une quinzaine d'individus. Le personnel a été frappé et la recette en partie dérobée malgré la résistance d'un voyageur.",
    "paragraphs": [
      "Un tramway a été arrêté hier soir et pris d'assaut par une quinzaine d'individus qui, en présence des voyageurs absolument terrorisés, ont frappé le cocher et le conducteur, emportant même une partie de la recette.",
      "Le tramway 591, faisant le service entre la place Saint-Sulpice et Auteuil, a été pris d'assaut. Jean-Marie Baup, âgé de trente-cinq ans, voulut s'opposer à l'invasion, mais les agresseurs étaient nombreux. Les quinze malandrins rouèrent les victimes de coups et n'abandonnèrent leurs proies qu'à l'arrivée des gardiens de la paix."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Mort de la rage",
    "summary": "Le photographe Joseph Canac a succombé à la rage à Perpignan. Il aurait été contaminé quatre mois plus tôt par son caniche, mort d'hydrophobie, qui lui aurait transmis le virus en léchant sa main.",
    "paragraphs": [
      "M. Joseph Canac, âgé de trente-neuf ans, photographe jouissant ici d'une notoriété assez grande, vient de mourir de la rage à Perpignan.",
      "Il y a quatre mois, un caniche que possédait M. Canac fut atteint d'hydrophobie et succomba. On suppose que le chien aura léché la main de son maître, lui communiquant ainsi le virus fatal."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Terrible accident de chasse",
    "summary": "Un tragique accident de chasse a coûté la vie à un vieillard de soixante-quinze ans près de Wassy. Le maire de la commune, M. Collin, l'a mortellement blessé par mégarde, le confondant avec un sanglier.",
    "paragraphs": [
      "Dans l'après-midi d'hier, un horrible accident de chasse est arrivé à Wassy, à la limite du bois Franchey. M. Collin, maire de Wassy, étant à la chasse, a tué raide, à dix pas de lui, un vieillard de Mertrud nommé Masson, âgé de soixante-quinze ans environ, qui rapportait du bois mort.",
      "M. Collin, croyant apercevoir un sanglier qui se dérobait dans le fourré, tira au jugé et causa ce déplorable malheur."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "International",
    "title": "La guerre au Transvaal",
    "summary": "Les Boers multiplient les succès contre les Britanniques, sabotant les trains et annihilant les colonnes de secours, en contradiction avec les rapports optimistes du général Roberts.",
    "paragraphs": [
      "Les Boers viennent, une fois de plus, d'infliger un sanglant démenti aux dépêches optimistes du général Roberts. Non seulement ils font dérailler les trains et tuent ou capturent leurs défenseurs, mais ils annihilent également les troupes envoyées à leur secours."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Opérations militaires en Chine",
    "summary": "Les forces alliées préparent une jonction stratégique près de Pao-Ting-Fou. Les troupes françaises se tiennent prêtes, tandis que les commandants restent vigilants face à une possible résistance chinoise.",
    "paragraphs": [
      "Des détachements italiens, sous les ordres du général Baiond, quittent Tien-Tsin pour opérer leur jonction près de Pao-Ting-Fou avec une colonne de même force venant de Pékin, sous le commandement du général Gaselee.",
      "Quatre bataillons de troupes françaises, qui ont quitté Yung-Tsun le 4 octobre pour former une expédition indépendante, ont reçu l'ordre de faire halte pour attendre le corps principal.",
      "Les Américains, les Russes et les Japonais ne prendront pas part à cette expédition.",
      "Malgré les assurances contraires données par les Chinois, les commandants s'attendent à rencontrer de la résistance."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Un gouverneur en disgrâce",
    "summary": "Le gouverneur du Chan-Si subit la disgrâce impériale après la révélation que ses effectifs militaires étaient largement inférieurs aux prévisions lors de la répression liée au mouvement des Boxers.",
    "paragraphs": [
      "Le correspondant du Standard à Shanghaï télégraphie que le gouverneur du Chan-Si a été puni pour sa participation au mouvement des Boxers. Les Chinois racontent qu'il est tombé en disgrâce lorsque l'Impératrice a appris qu'il n'avait sous ses ordres que 10 000 soldats au lieu des 50 000 qu'elle lui supposait."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "La Cour impériale",
    "summary": "La progression de la cour impériale chinoise se poursuit avec son arrivée officielle à Chao-Cheng, dans le sud-est de la province du Chang-Si.",
    "paragraphs": [
      "La cour impériale est arrivée, le 6, à Chao-Cheng, dans le sud-est du Chang-Si."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Mouvements des rebelles en Chine",
    "summary": "Des affrontements opposent les troupes impériales aux Triades près de la concession britannique de Kowloon, alors que les rebelles renforcent leurs positions militaires.",
    "paragraphs": [
      "Quelques journaux publient une dépêche de Shanghaï rapportant que les Triades ont battu les troupes impériales dans plusieurs rencontres près du territoire de la concession britannique de Kowloon.",
      "Une dépêche de Hong-Kong au Daily Mail annonce que les rebelles se sont fortement retranchés à Mong-Kong et à Sany-Andin."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Protestations à Shanghaï",
    "summary": "Le tao-tai de Shanghaï et le vice-roi de Nankin contestent la démonstration de force des troupes étrangères, alors qu'une concentration importante de troupes chinoises stationne aux abords de la ville.",
    "paragraphs": [
      "Une dépêche de Shanghaï au Morning Post rapporte que le tao-tai de Shanghaï et le vice-roi de Nankin ont protesté contre la récente démonstration des troupes étrangères à Shanghaï.",
      "Le même correspondant ajoute que 30 000 hommes de troupes chinoises sont stationnés à Shanghaï et à Wu-Sung, tandis que 15 000 autres se trouvent à une journée de marche de la ville."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Expédition américaine dans les mines",
    "summary": "Les autorités américaines dépêchent une mission d'enquête mercredi prochain afin d'évaluer le potentiel productif et le rendement des mines situées dans les collines de l'Ouest.",
    "paragraphs": [
      "Les Américains vont envoyer une petite expédition dans le district des mines des collines de l'Ouest. Cette mission partira mercredi et sera chargée de mener une enquête sur le rendement des mines de ce district."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Situation à Hong-Kong",
    "summary": "Arrivée de bâtiments de guerre à Hong-Kong et mouvements de troupes chinoises près de la frontière. Les autorités craignent une insurrection organisée dans les provinces du Sud pour le mois de novembre.",
    "paragraphs": [
      "Le transport français Véi-Ho, un bâtiment de guerre japonais et un transport anglais sont arrivés à Hong-Kong. La canonnière allemande Iltis est partie pour Canton.",
      "Cinq cents soldats chinois sont arrivés à Sam-Chun hier, d'autres sont attendus aujourd'hui. La frontière anglaise demeure tranquille, bien que des troupes de l'Inde aient été réquisitionnées pour Hong-Kong.",
      "On assure que les autorités ont été informées qu'un soulèvement général dans les provinces du Sud serait organisé pour le mois de novembre."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Changement de commandement pour le corps expéditionnaire de Chine",
    "summary": "Le général Bouguié, inspecteur général adjoint de l'infanterie de marine, est nommé commandant de la brigade de marine du corps expéditionnaire de Chine, succédant au général Frey qui regagne la France.",
    "paragraphs": [
      "Le général Bouguié, inspecteur général adjoint de l'infanterie de marine, est désigné pour commander la brigade de la marine du corps expéditionnaire de Chine, en remplacement de M. le général Frey, qui rentre en France.",
      "M. le général Bouguié prendra passage sur le paquebot partant de Marseille le 3 novembre, à destination de l'Extrême-Orient."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique",
    "title": "Crédits pour le corps expéditionnaire",
    "summary": "Le gouvernement sollicite l'ouverture d'un crédit extraordinaire de 7 millions de francs afin de couvrir les frais du corps expéditionnaire en Chine jusqu'à la fin de l'exercice annuel.",
    "paragraphs": [
      "Le gouvernement vient d'envoyer au Conseil d'État un décret ayant pour objet d'ouvrir, en l'absence des Chambres, un crédit extraordinaire de 7 millions de francs pour les dépenses du corps expéditionnaire en Chine.",
      "L'ensemble des crédits s'élève donc à 68 millions, somme jugée nécessaire pour couvrir les dépenses courantes jusqu'à la fin de l'année."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le combat de Sahela-Metarfa",
    "summary": "Lors d'une mission topographique fin août, une colonne française a essuyé de lourdes pertes face aux Berabers. Le capitaine Jacques figure parmi les victimes de ces affrontements sanglants.",
    "paragraphs": [
      "Partis le 26 août, trois pelotons de la compagnie entraient en action le 30 avec les Berabers dans les environs de Metarfa, alors que notre convoi escortait une mission topographique.",
      "Le 31 août, le lieutenant Depardieu et les sergents Kromer et Heitz sont tombés en tête de leur section. Dans ce combat, le capitaine Jacques fut tué, ainsi que plusieurs hommes de troupe.",
      "L'action ayant recommencé le 5 septembre, il apparut que l'ennemi était plus nombreux qu'on ne le croyait, contraignant la colonne à se retirer."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Mort de l'adjudant Jacques",
    "summary": "Annonce du décès de l'adjudant Jacques, engagé volontaire et vétéran de la campagne de Madagascar, décoré de la médaille militaire. Ses proches ont été informés par le ministère de la Guerre.",
    "paragraphs": [
      "Nous apprenons la mort de l'adjudant Jacques. Engagé volontaire aux tirailleurs, il comptait quinze ans de services et avait pris part à la campagne de Madagascar, où il avait obtenu la médaille militaire.",
      "Ses parents, qui habitent Mussidan, dans la Dordogne, ont été avisés de la funèbre nouvelle par les soins du ministère de la Guerre."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Secours mutuels entre marins",
    "summary": "Le ministre de la Marine autorise désormais les associations mixtes de marins à bénéficier des avantages de la loi du 1er avril 1898 pour leur protection sociale et matérielle.",
    "paragraphs": [
      "Le ministre de la Marine permet désormais aux associations mixtes, assurant les marins et leurs familles contre la maladie ainsi que contre les pertes de matériel de pêche, de jouir des avantages de la loi du 1er avril 1898."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Campagne du Duguay-Trouin",
    "summary": "Le bâtiment-école Duguay-Trouin, sous le commandement de M. Rouette, entame sa grande campagne annuelle avec une série d'escales internationales couvrant l'Atlantique, des Canaries aux Amériques.",
    "paragraphs": [
      "Le Duguay-Trouin, bâtiment-école des aspirants de 2e classe, sous le commandement de M. Rouette, a appareillé pour sa campagne annuelle. Il visitera successivement Madère, Ténériffe, les Canaries, le Cap-Vert, Lisbonne, Montevideo, Rio-de-Janeiro, Fort-de-France, Cuba, New-York et les Açores, pour un retour prévu en juillet."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "La mission Roulet",
    "summary": "Le Journal officiel honore le capitaine Roulet et ses troupes pour leur bravoure lors de la mission dans le Bahr-el-Ghazal, malgré les épreuves sanitaires et climatiques extrêmes.",
    "paragraphs": [
      "Le Journal officiel porte à l'inscription au tableau d'avancement, pour faits de guerre, le capitaine Roulet ainsi que plusieurs sous-officiers et tirailleurs ayant opéré dans le Bahr-el-Ghazal.",
      "La mission Roulet avait été chargée en 1898 de renforcer celle du capitaine Marchand, mais fut bloquée par les eaux et la maladie, menant une lutte d'abnégation pour établir des postes et maintenir la présence française.",
      "L'évacuation s'est effectuée avec difficulté en raison de la sécheresse, mais la mission a pu atteindre Banghi, Brazzaville et enfin la France en août."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Échos de l'Étranger",
    "title": "Le Musée de l'Empire allemand",
    "summary": "L'empereur et l'impératrice d'Allemagne ont présidé la pose de la première pierre du musée de l'Empire à Saalbourg, célébrant la mémoire de Frédéric et l'avenir de la nation.",
    "paragraphs": [
      "La cérémonie de la pose de la première pierre du musée de l'Empire, située sur le plateau de Saalbourg, a eu lieu en présence de l'empereur et de l'impératrice.",
      "L'empereur a consacré cette pierre à la mémoire de Frédéric, à la jeunesse allemande ainsi qu'à l'avenir de la patrie, souhaitant ardemment qu'elle devienne un jour aussi puissante que l'empire romain."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Faits Divers",
    "title": "Ouvriers ensevelis à Helmet",
    "summary": "Un tragique accident de chantier à Helmet, près de Bruxelles, a causé la mort par asphyxie de l'ouvrier Victor Vandevelde à la suite d'un éboulement.",
    "paragraphs": [
      "À Helmet, près de Bruxelles, trois ouvriers ont été ensevelis lors d'un éboulement dans une tranchée. Deux ont été retirés blessés ; le troisième, Victor Vandevelde, a succombé à l'asphyxie."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Faits Divers",
    "title": "Inhumation du toréador Dominguez",
    "summary": "Le toréador Dominguez, victime d'un accident mortel lors d'une corrida au cirque de Barcelone, a été conduit à sa dernière demeure à Madrid, suivi par une foule immense venue lui rendre un ultime hommage.",
    "paragraphs": [
      "Le toréador Dominguez, qui trouva la mort dimanche dernier au cirque de Barcelone, a été inhumé aujourd'hui à Madrid. Une foule compacte, forte de plusieurs milliers de personnes, a tenu à suivre le cortège funèbre pour saluer la dépouille de l'infortuné matador."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Faits Divers",
    "title": "Déraillement à Grosswardein",
    "summary": "Un tragique accident ferroviaire est survenu sur la ligne reliant Vienne à Grosswardein. Le déraillement du convoi a causé la mort de trois voyageurs et a occasionné des blessures graves à huit autres passagers.",
    "paragraphs": [
      "Un grave accident de chemin de fer s'est produit sur la ligne de Vienne à Grosswardein. Un train, pour des raisons encore à déterminer, a quitté les rails dans sa course. Le bilan s'établit à trois voyageurs tués sur le coup, tandis que huit autres personnes ont été retirées des décombres grièvement blessées."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie de tissages à Armentières",
    "summary": "Un violent sinistre a ravagé les entrepôts et séchoirs des établissements Dubois, Charvet-Colombier, Cardon et Fauvergue à Armentières, occasionnant des pertes s'élevant à plusieurs centaines de milliers de francs.",
    "paragraphs": [
      "Un violent incendie a éclaté cette nuit, détruisant intégralement les séchoirs et les magasins de la maison Dubois et Charvet-Colombier à Armentières. Les flammes se sont propagées aux ateliers de MM. Cardon et Fauvergue, causant des ravages considérables. Les pertes matérielles sont d'ores et déjà estimées à plusieurs centaines de milliers de francs."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Succès de la fête nautique",
    "summary": "Malgré l'incertitude du ciel, la fête nautique organisée sur la Seine dans le cadre de l'Exposition Universelle a triomphé, ravissant la foule venue admirer la pantomime sur l'eau.",
    "paragraphs": [
      "La grande fête nautique organisée sur la Seine, dont le clou fut une pantomime des plus remarquables, a attiré une affluence considérable au sein de l'Exposition. Bien que le ciel menaçant ait pu faire craindre le pire, le soleil a finalement favorisé le spectacle, assurant ainsi un succès éclatant à cette manifestation."
    ]
  },
  {
    "id": 30,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Faits divers mondains et administratifs",
    "summary": "Chasse présidentielle à Marly, réceptions diplomatiques, mariages mondains et célébrations professionnelles marquent l'actualité administrative et sociale de cette journée parisienne.",
    "paragraphs": [
      "Le Président de la République s'est rendu à Marly pour une partie de chasse. Parallèlement, M. Delcassé a tenu à offrir un déjeuner de travail aux membres éminents de la commission des primes sur les sucres.",
      "Le mariage de Mlle Madeleine Méline avec M. Antoine a été célébré avec éclat en l'église Saint-Thomas d'Aquin, au milieu d'une assistance distinguée.",
      "M. Charles Vapereau, qui occupe les fonctions de commissaire général de la Chine à l'Exposition, vient d'être promu au grade d'officier de la Légion d'honneur.",
      "Un grand banquet réunissant les syndicats de la boucherie s'est tenu au palais d'Orsay afin de célébrer la clôture officielle de leur congrès professionnel."
    ]
  },
  {
    "id": 31,
    "page": 2,
    "category": "Faits Divers",
    "title": "Grève des bourreaux à Canton",
    "summary": "Les quatorze bourreaux de Canton ont cessé leurs fonctions. Ils réclament une revalorisation de leurs honoraires, jugeant le tarif actuel de 1,25 franc par exécution dérisoire au regard de la baisse des condamnations.",
    "paragraphs": [
      "Les quatorze bourreaux de Canton se sont mis en grève, réclamant une augmentation de leurs émoluments, jugeant le tarif actuel, soit environ 1,25 franc par exécution, insuffisant compte tenu de la diminution des condamnations."
    ]
  },
  {
    "id": 32,
    "page": 2,
    "category": "Justice",
    "title": "La bande des voleurs masqués",
    "summary": "La cour juge actuellement une bande de malfaiteurs dite des « voleurs masqués », composée de sept individus accusés de nombreux méfaits commis notamment dans la commune de Montreuil.",
    "paragraphs": [
      "La cour juge la bande des « voleurs masqués », composée de Joseph Frérot, Georges et Jules Prunier, Armand Gilbert, Ferdinand Cui, Jeanne Lemansois et Jeanne Gilbert, accusés de multiples méfaits, notamment à Montreuil."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Justice",
    "title": "Procès d'une bande de malfaiteurs",
    "summary": "Le procès d'une bande de malfaiteurs, responsables de vingt-sept vols à Montreuil et Bagnolet, s'est ouvert. Les accusés tentent vainement de se renvoyer la responsabilité de leurs crimes devant la justice.",
    "paragraphs": [
      "Plusieurs des coupables avaient été vus, la veille, aux alentours de la maison Popps.",
      "Ces indications furent le point de départ de nouvelles recherches et l'instruction put établir l'existence de toute une bande de malfaiteurs à la charge desquels elle a relevé, soit comme auteurs, soit comme complices, vingt-sept vols qualifiés.",
      "La justice fut secondée dans sa tâche par les révélations de Copin, qui figure parmi les accusés.",
      "L'acte d'accusation expose ensuite chacun de ces vingt-sept vols commis tant à Montreuil qu'à Bagnolet.",
      "L'attitude des accusés, dont la culpabilité n'est même plus mise en doute, consiste à se rejeter les uns sur les autres la plus grande part de responsabilité. Les frères Lemansois sont loin d'avoir les allures que leur brillant nom semble cacher. Ce sont de véritables rôdeurs de barrière parlant le plus bas argot.",
      "Les débats sont inscrits pour trois jours; mais il est probable qu'ils n'occuperont que deux audiences."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Condamnation du soldat Worms",
    "summary": "Le conseil de guerre de Tunis a prononcé une peine de mort par contumace à l'encontre du soldat Worms, du 4e régiment de tirailleurs, reconnu coupable de révolte et de violences envers un supérieur.",
    "paragraphs": [
      "Le conseil de guerre de Tunis a condamné à mort par contumace le soldat Worms, du 4e régiment de tirailleurs, pour révolte et coups portés à un supérieur."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le feu au Métropolitain",
    "summary": "Un début d'incendie dans un wagon du Métropolitain à la gare des Tuileries a semé l'émoi hier. Un jeune homme inanimé a été secouru et transporté d'urgence à l'Hôtel-Dieu ; le trafic a été rétabli dans la soirée.",
    "paragraphs": [
      "Les nombreux voyageurs qui se pressaient hier sur les quais de la gare des Tuileries ont eu, vers sept heures, un moment de vive émotion.",
      "Au moment où l'un des employés ouvrait la porte de sortie d'un wagon, une gerbe de flammes jaillit au dehors, accompagnée d'une épaisse fumée. L'intérieur du wagon était en feu. On ouvrit immédiatement l'autre porte ; au même instant, un voyageur pénétra dans le véhicule et s'aperçut qu'un jeune homme, âgé de vingt ans environ, était étendu sans connaissance.",
      "Il transporta le malheureux sur le quai où on lui donna les premiers soins. De là, on le conduisit à l'infirmerie où, malgré les moyens énergiques employés, on ne put le faire revenir à lui.",
      "Le pauvre garçon a été conduit, dans une voiture d'ambulance mandée en toute hâte, à l'Hôtel-Dieu, où il a été admis d'urgence. On ne connaît pas son identité, aucun des papiers trouvés sur lui n'ayant pu servir à l'établir.",
      "Le feu a été éteint par les pompiers après une heure de travail. À huit heures et demie, la circulation des trains était rétablie."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide d'un Adjoint au Maire",
    "summary": "M. Gabriel Patureau, adjoint au maire du 18e arrondissement, a mis fin à ses jours. Criblé de dettes à la suite de spéculations hasardeuses, il s'est suicidé par arme à feu à son domicile, laissant son jeune fils dans le désarroi.",
    "paragraphs": [
      "Dans la matinée d'hier, vers huit heures, M. Gabriel Patureau, âgé de quarante-deux ans, adjoint au maire du dix-huitième arrondissement, a été trouvé mort dans son domicile situé rue Ordener.",
      "Le malheureux s'était tiré un coup de revolver dans la région du cœur et la mort avait dû être instantanée.",
      "En outre de ses fonctions municipales, M. Gabriel Patureau était directeur d'une usine à Lille et propriétaire d'une fabrique de carton, rue du Poteau. Il paraissait être satisfait de ses affaires commerciales, mais d'après certains bruits, cette satisfaction n'était qu'apparente, et la cause de son suicide serait la non-réussite d'aventureuses spéculations.",
      "M. Gabriel Patureau vivait en compagnie de son fils âgé d'une dizaine d'années et c'est ce dernier qui a trouvé le malheureux étendu sur son lit, le corps déjà froid au milieu des draps ensanglantés, tenant encore dans sa main droite crispée le revolver du calibre de 7 millimètres dont il avait fait usage.",
      "M. Patureau jouissait de l'estime générale et son suicide, que rien ne faisait prévoir, a causé une très vive émotion."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un Meurtrier",
    "summary": "Georges Wenger, auteur de l'agression sanglante commise contre la jeune Eugénie Paiçoix boulevard Richard-Lenoir, a été appréhendé par la sûreté alors qu'il rôdait près de chez lui. Il a avoué ses crimes.",
    "paragraphs": [
      "Nous avons raconté, hier matin, le meurtre commis la nuit précédente, boulevard Richard-Lenoir, par un individu nommé Georges Wenger, qui avait frappé de deux coups de couteau une jeune femme, Eugénie Paiçoix. Cette dernière, grièvement blessée, avait été transportée dans un état fort alarmant à l'hôpital Saint-Antoine.",
      "Le meurtrier, qui avait réussi à prendre la fuite, a été arrêté hier matin par deux agents de la sûreté, au moment où il rôdait autour de son domicile, rue Crozatier.",
      "Mis immédiatement à la disposition de M. Guicheteau, commissaire de police, Wenger, interrogé par ce magistrat, a fait les aveux les plus complets. Il a été dirigé sur le dépôt."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame de l'ivresse",
    "summary": "Pris de boisson, l'ouvrier charron Louis Bernard a poignardé un comptable, M. Hippolyte Tomprier, rue d'Allemagne, après avoir importuné des passantes. La victime a été conduite à l'hôpital dans un état grave.",
    "paragraphs": [
      "Un ouvrier charron, Louis Bernard, âgé de vingt-deux ans, demeurant rue de Nantes, a le défaut de boire plus que de raison, et lorsqu'il est ivre, il se livre non seulement à des excentricités, mais aussi à des voies de fait.",
      "Hier soir, vers dix heures, il rentrait chez lui en titubant et passait rue d'Allemagne, quand il croisa soudain un groupe de quatre personnes parmi lesquelles se trouvaient deux jeunes femmes. L'ivrogne, trop galant, voulut embrasser ces dernières et s'attira l'indignation générale. Les compagnons des jeunes femmes lui firent tout d'abord des observations, mais comme il n'en tenait aucun compte, ils se mirent en devoir de lui administrer une sévère correction.",
      "Louis Bernard, furieux, proféra des menaces terribles qu'il devait malheureusement mettre sur-le-champ à exécution. Soudain, en effet, il s'arma d'un couteau et en frappa M. Hippolyte Tomprier, âgé de trente-quatre ans, comptable, demeurant rue du Département, qui, atteint au-dessous du sein gauche, roula sur le sol.",
      "Le meurtrier fut immédiatement désarmé et conduit au poste de police de la rue de Flandre au milieu d'une foule très surexcitée qui voulait lui faire un mauvais parti.",
      "Quant à la victime, dont la blessure est très grave, elle a été immédiatement transportée à l'hôpital Saint-Louis."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vols à la gare du Nord",
    "summary": "Quatre malfaiteurs, spécialisés dans le vol de bagages à la gare du Nord, ont été appréhendés. Une perquisition à leur domicile de la rue de Meaux a permis de retrouver une grande quantité d'objets dérobés aux voyageurs.",
    "paragraphs": [
      "Depuis quelque temps, de nombreux vols de bagages étaient commis à la gare du Nord dans les salles d'attente, sur les quais de départ et dans les wagons, sans qu'on puisse jamais en découvrir les auteurs.",
      "La police a effectué une surveillance active et, après deux jours d'observation, les inspecteurs ont arrêté quatre individus : Philippe Cognagoli (25 ans), Wilhelm Haack (18 ans), Jacob Gesswen (19 ans) et Albert Fleuret (20 ans).",
      "Au domicile qu'ils occupaient, rue de Meaux, on a trouvé quantité d'objets, valises, sacs et nécessaires de voyage, provenant des nombreux vols qu'ils avaient commis."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Faits Divers",
    "title": "Confiance mal placée",
    "summary": "Un employé de commerce, M. Ernest D., a tenté de mettre fin à ses jours après avoir découvert que son épouse l'avait trompé. Le mari bafoué a engagé une procédure de divorce après cet événement tragique.",
    "paragraphs": [
      "Un employé de commerce, M. Ernest D., demeurant rue du Poteau, avait été quitté par sa femme qui lui annonçait par lettre son départ pour Melun afin de soigner son père malade, tout en emportant 300 francs.",
      "Hier matin, l'employé aperçut sa femme à une fenêtre voisine en compagnie d'un ami, Lucien R., âgé de vingt ans. Il acquit ainsi la conviction qu'il était trompé.",
      "Le mari bafoué fut si douloureusement affecté qu'il tenta de s'asphyxier. Son état a nécessité son transport à l'hôpital Lariboisière. M. D. a désormais intenté une action en divorce."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Faits Divers",
    "title": "La Haine des Automobiles",
    "summary": "M. Lucien Arnould, mécanicien, a été blessé après le renversement de son automobile, délibérément déviée par une femme cherchant à se venger des chauffeurs ayant causé un accident à son fils.",
    "paragraphs": [
      "Un mécanicien, M. Lucien Arnould, circulait en voiture automobile rue Édouard-Robert, lorsqu'une femme, Mme Lucienne Helger, lança brusquement une chaise devant le véhicule pour le contraindre à l'arrêt.",
      "Pour éviter l'obstacle, le conducteur fit un écart brutal et l'automobile se renversa. Le mécanicien a été contusionné dans l'accident.",
      "Conduite devant le commissaire, Mme Helger a déclaré qu'elle vouait une haine implacable aux cyclistes et aux chauffeurs depuis que son fils avait été grièvement blessé par l'un d'eux, et qu'elle cherchait dès lors à se venger."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents divers",
    "summary": "La capitale est endeuillée par plusieurs accidents graves : un enfant a été renversé rue des Amandiers et quatre chevaux de trait se sont noyés dans la Seine près du quai de la Gare.",
    "paragraphs": [
      "Un garçonnet de neuf ans, Lucien Yvert, a été renversé par une voiture de liquoriste rue des Amandiers. Son état est jugé très grave par les médecins.",
      "Un fardier attelé de quatre chevaux a basculé dans la Seine au niveau du quai de la Gare. Les quatre bêtes n'ont pu être sauvées et ont été noyées."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Faits Divers",
    "title": "Fratricide à Vézelois",
    "summary": "Un drame familial sanglant a frappé la commune de Vézelois : François Touchot a abattu sa sœur Virginie d'un coup de fusil à la suite d'un différend concernant des terres communes.",
    "paragraphs": [
      "La commune de Vézelois vient d'être ensanglantée par un terrible drame. François Touchot, âgé de quarante-trois ans, était en conflit prolongé avec sa sœur Virginie au sujet du partage de terrains communs.",
      "Ce matin, alors que la victime se dirigeait vers une grange, elle a été abattue d'un coup de fusil de chasse par son propre frère, qui s'était embusqué à la lucarne d'un grenier.",
      "Le misérable a pris la fuite immédiatement après son forfait ; une battue est actuellement organisée par les autorités pour le retrouver."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Chroniques de banlieue",
    "summary": "La banlieue parisienne connaît une série d'incidents tragiques : effondrements d'immeubles, accidents industriels, agressions violentes et drames domestiques marquent l'actualité locale.",
    "paragraphs": [
      "Suresnes : Les plafonds d'une maison située place d'Armes se sont effondrés. L'immeuble, menaçant ruine, a dû être évacué d'urgence.",
      "Levallois-Perret : Un enfant de huit ans, Auguste Glautier, est mort écrasé par un tuyau de fonte rue de la Révolte.",
      "Bécon-les-Bruyères : Plusieurs enfants ont été blessés par l'explosion d'un tuyau de décharge qu'ils avaient, par imprudence, transformé en canon après l'avoir rempli de poudre.",
      "Pantin : Un ouvrier a été agressé par une bande aux Quatre-Chemins. Les agresseurs ont été appréhendés par les forces de l'ordre.",
      "Charenton : Une femme a été percutée par un train et tuée sur le coup.",
      "Saint-Ouen : M. Golbiche a été accidentellement blessé par un revolver manipulé par un camarade.",
      "Joinville-le-Pont : Une veuve, Mme Virginie A., s'est asphyxiée au charbon dans son domicile."
    ]
  },
  {
    "id": 45,
    "page": 3,
    "category": "Départements",
    "title": "Faits divers en province",
    "summary": "Chronique des accidents en province : le corps sans vie d'un homme a été repêché à Chartres et un grave accident de travail survenu à Villiers-le-Bel a causé des blessures atroces à un employé.",
    "paragraphs": [
      "Chartres : Le corps de Joseph Emangeard a été retiré des eaux de la rivière.",
      "Villiers-le-Bel : Un employé a eu les bras broyés par une locomotive alors qu'il procédait à une manœuvre."
    ]
  },
  {
    "id": 46,
    "page": 3,
    "category": "Théâtre",
    "title": "Courrier des Théâtres",
    "summary": "Le Laboratoire municipal teste l'incombustibilité du bois pour les théâtres, tandis que l'Odéon, l'Ambigu et les Variétés finalisent leurs distributions et projets pour la saison.",
    "paragraphs": [
      "Le Laboratoire municipal a procédé à des essais rigoureux sur divers procédés destinés à assurer l'incombustibilité du bois dans les établissements de spectacles.",
      "Le théâtre de l'Odéon annonce officiellement la mise en répétition de la pièce « La Guerre en dentelles ».",
      "La direction de l'Ambigu confirme l'engagement de M. Modot et de M. Eugène Lassalle pour ses prochaines productions.",
      "Les Variétés préparent activement une nouvelle comédie-opérette, avec une distribution prestigieuse comprenant MM. Baron, Brasseur et Mlle Lavallière."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Miettes du Bonheur",
    "summary": "Un médecin, en proie au doute face à l'imprévisibilité de la vie, cherche à valider ses théories scientifiques en sauvant l'enfant qu'il soigne avec détermination.",
    "paragraphs": [
      "Il se disait cela et pourtant, une inquiétude persistante demeurait en lui.",
      "La science n'a pas toujours le dernier mot dans le combat incessant qui se livre entre la mort et la vie.",
      "« Il faut que j'accomplisse définitivement le miracle », murmurait-il, « que je rende l'enfant sauvé, sain et fort, à la mère qui me l'a confié. »",
      "« Je me dois cela à moi-même. »",
      "Et j'escompte déjà ce résultat qui affirmera, une fois de plus et d'une façon irréfutable, la justesse des nouvelles théories scientifiques que j'ai émises."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Chronique Médicale",
    "title": "Pourquoi les marins sont-ils si robustes",
    "summary": "La tradition attribue la vigueur des marins aux émanations de goudron. M. Guyot propose désormais ce bienfait sous forme concentrée, idéale pour combattre rhumes et bronchites.",
    "paragraphs": [
      "Vous avez admiré la robuste santé des marins et des pêcheurs. Ils vivent sur la mer, au milieu des vents et des flots, et vous les voyez toujours la poitrine nue ; malgré cela, nul n'est moins sujet qu'eux aux rhumes, aux bronchites et aux catarrhes.",
      "Pourquoi cela ? La raison en est connue depuis la plus haute antiquité. De tout temps, les médecins ont attribué ce fait à ce que les marins respirent constamment les émanations du goudron dont sont enduits les navires.",
      "Aujourd'hui, grâce à un pharmacien distingué de Paris, M. Guyot, qui a réussi à rendre le goudron soluble, on trouve dans toutes les pharmacies, sous le nom de « Goudron de Guyot », une liqueur très concentrée qui permet de préparer instantanément une eau de goudron limpide et efficace.",
      "L'usage du Goudron de Guyot, pris à tous les repas, à la dose d'une cuillerée à café par verre d'eau, suffit pour guérir en peu de temps le rhume le plus opiniâtre et la bronchite la plus invétérée."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Main Gauche",
    "summary": "Une explication tendue entre deux anciens fiancés révèle des regrets et l'amertume d'une séparation où les promesses d'enfance n'ont pu résister aux circonstances.",
    "paragraphs": [
      "Elle se tourna vers son fiancé de jadis : « Mon pauvre ami, nos promesses étaient des promesses d'enfants. Tu aurais pu y manquer, et j'aurais pu souffrir ; je me serais dit : il est libre, et libre je t'aurais laissé. »",
      "Le jeune homme devint tout à coup très sombre. À son tour, il reprit sa place, devant la table chargée de vaisselle, de bouteilles et de débris de victuailles.",
      "« Je vois bien que ton amitié n'est pas revenue... tu ne m'as jamais aimé. »",
      "« En camarades. Comme un camarade je t'aime toujours », dit-il en levant la main, désespéré.",
      "« Parlons peu, fit-il, mais parlons bien. Pourquoi nous as-tu dit son nom ? »",
      "« Parce que les circonstances, l'histoire que vous m'avez racontée, ne me permettaient plus de la cacher. »"
    ]
  },
  {
    "id": 50,
    "page": 4,
    "category": "Récit",
    "title": "Le docteur Henri Lipray et son patient",
    "summary": "Après une course effrénée, le docteur Henri Lipray examine le petit Armand et rassure sa mère : l'enfant triomphera bientôt de la fièvre qui le tourmente.",
    "paragraphs": [
      "Stimulé par l'appât du bon pourboire, le cocher ne cessait d'activer à coups de fouet l'ardeur de son cheval. En un quart d'heure à peine, la voiture gagna le boulevard Rochechouart.",
      "Deux minutes plus tard, il était penché sur le berceau du petit Armand. Le docteur saisit son frêle poignet et fut rassuré : le petit garçon n'en aurait plus pour longtemps à souffrir de la fièvre.",
      "Un soupir de soulagement glissa entre les lèvres du médecin. Il ne s'était pas trompé dans ses pronostics optimistes. Ce ne serait rien.",
      "« Rosalie, vous pouvez vous mettre au lit et dormir sans crainte. Demain matin, cet enfant ne se ressentira plus de rien. »"
    ]
  },
  {
    "id": 51,
    "page": 4,
    "category": "Vie de Château",
    "title": "Chronique de Pontsevrin",
    "summary": "Au château de Terrique, le calme règne. Dans le salon, Solange de Boffront fait la lecture à la baronne de Pontsevrin, avant de lui remettre une missive bouleversante expédiée depuis l'Amérique.",
    "paragraphs": [
      "Au château de Terrique, fenêtres et portes sont closes. La maison basse du concierge, qui était en même temps le jardinier, est la seule demeure habitée.",
      "À Pontsevrin, la vieille demeure n'avait pas changé d'aspect. La baronne, cette matinée, suivant son habitude, se trouvait assise près d'une des hautes fenêtres du salon, tricotant un court jupon de laine grise pour quelque petit paysan.",
      "En face de M. de Pontsevrin, sur une chaise un peu basse, Solange de Boffront faisait la lecture. Politique, nouvelles du pays, tout y était passé.",
      "« C'est de lui ? » fit la jeune fille, plus émue qu'elle ne voulait le paraître. « C'est de lui », dit Solange essoufflée en tendant la lettre timbrée d'Amérique."
    ]
  },
  {
    "id": 52,
    "page": 4,
    "category": "Informations Financières",
    "title": "Dépêches et Paquebots",
    "summary": "Mouvements maritimes d'octobre 1899 : le paquebot Chili et la Plata sont arrivés à Lisbonne, tandis que le Ville-de-la-Ciotat et le Djennah poursuivent leurs escales en provenance d'Australie et de Madagascar.",
    "paragraphs": [
      "Le paquebot Chili (M. M.), venant de la Plata et du Brésil, est arrivé à Lisbonne le 10 octobre.",
      "Le paquebot la Plata (M. M.), allant au Brésil, est arrivé à Lisbonne le 9 octobre.",
      "Le paquebot Ville-de-la-Ciotat (M. M.), venant d'Australie, a quitté Port-Saïd le 7 octobre.",
      "Le paquebot Djennah (M. M.), venant de Madagascar, a quitté Suez le 8 octobre."
    ]
  }
];
