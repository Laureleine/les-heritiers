// Date: 1900-06-06
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-06-06 (Version Restaurée, 41 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "La visite du pavillon du Canada",
    "summary": "Le Commissaire général a captivé son auditoire en retraçant l'histoire et la prospérité du Canada, avant de convier ses invités à une visite détaillée des galeries du pavillon national au sein de l'Exposition.",
    "paragraphs": [
      "Le commissaire général de l'exposition du Canada a su faire, en deux heures, un exposé complet des ressources de son pays. Il a retracé l'émouvante histoire de l'immense contrée septentrionale, depuis l'époque française jusqu'à nos jours. Il a fait applaudir les noms vénérés de Montcalm, de Champlain et de Frontenac, sans oublier de fournir à ses auditeurs, sous forme d'éloquente péroraison, l'explication de la prospérité actuelle de la nation canadienne.",
      "La conférence a été suivie d'une promenade à travers les galeries du pavillon du Canada sous la conduite du sous-commissaire, le lieutenant-colonel Gourdeau, et de ses collaborateurs."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Actualité internationale",
    "title": "Une mission tonkinoise à Paris",
    "summary": "Trois hauts mandarins tonkinois sont arrivés à Paris, envoyés par M. Doumer pour étudier les institutions, les arts et l'industrie de la métropole avant de visiter l'Exposition universelle.",
    "paragraphs": [
      "La première mission tonkinoise est arrivée hier soir à Paris. Cette mission, qui se compose de trois hauts mandarins, MM. Vu-Quaud-Nha, Tranh-Dinh-Luong et Hoang-Froug-Phu, a été envoyée en France par M. Doumer pour étudier l'organisation des diverses écoles d'art, de sciences et de lettres, et pour examiner en détail les procédés et les produits industriels et agricoles de la métropole.",
      "Les hauts mandarins sont accompagnés de M. Lemira, président du comité du Tonkin, et de M. Holtz, député, ancien chef de cabinet du gouverneur général du Tonkin. Ils ont été conduits dès leur arrivée au Grand-Hôtel, où leurs appartements avaient été retenus. Dans quelques jours, dès qu'ils seront remis de leurs fatigues, les envoyés de M. Doumer commenceront leurs visites à travers l'Exposition universelle."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Congrès de l'Exposition",
    "summary": "Sous la présidence de M. Caillaux, le congrès des valeurs mobilières a ouvert ses travaux, tandis que le congrès de sylviculture, dirigé par M. Fétét, a également entamé ses sessions.",
    "paragraphs": [
      "M. Caillaux, ministre des Finances, a présidé hier après-midi l'ouverture solennelle du congrès des valeurs mobilières. M. Cochery, député, président de la commission d'organisation, a établi l'ordre du jour des travaux. La première séance a été consacrée à la statistique des valeurs mobilières. MM. Rouvier, Peytral et Ribot, anciens ministres des Finances, ont pris part aux délibérations.",
      "Le congrès de sylviculture a tenu sa première séance. Il a constitué son bureau, puis a commencé ses travaux sous la présidence de M. Fétét, administrateur des eaux et forêts."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Programme des visites et congrès",
    "summary": "Le Président de la République poursuit sa visite des sections de l'Exposition, tandis que le congrès de la mutualité se prépare à ouvrir ses portes ce soir sous la présidence de M. Lourtie.",
    "paragraphs": [
      "Le Président de la République visitera ce matin, sous la conduite du ministre du Commerce et de M. Alfred Picard, commissaire général, les sections française et étrangère des palais du Champ-de-Mars. Demain, M. Loubet visitera les sections étrangères du Trocadéro.",
      "Un des plus importants congrès organisés à l'Exposition, celui de la mutualité, ouvrira ce soir, à neuf heures, ses séances dans le palais du cours la Reine, sous la présidence de M. Lourtie, ancien ministre du Commerce."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Bilan des entrées",
    "summary": "Le bilan des fêtes de la Pentecôte affiche un succès populaire majeur avec plus d'un million de visiteurs en deux jours. Le cours des tickets, quant à lui, demeure stable malgré la concurrence des camelots.",
    "paragraphs": [
      "Plus d'un million de visiteurs en deux jours, tel est le bilan des fêtes de la Pentecôte. Le chiffre général des entrées a été, en effet, égal à celui de la veille.",
      "Les tickets ont regagné leur cours de 60 centimes et s'y maintenaient hier encore, toutefois quelques camelots les vendaient à prix réduits."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Les troubles de Jersey",
    "summary": "À Saint-Hélier, l'assemblée communale a rejeté les demandes d'indemnisation réclamées pour les dégâts subis lors des récents troubles survenus dans l'île.",
    "paragraphs": [
      "Saint-Hélier, 5 juin : L'assemblée communale a repoussé diverses réclamations s'élevant à plusieurs livres sterling, présentées en compensation des dégâts causés pendant les derniers troubles survenus dans l'île."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Nouvelles du Maroc",
    "summary": "Selon le Daily Mail, Mouley-Mohammed, frère du sultan, a été arrêté, enchaîné et transféré vers la ville de Mequinez sur ordre souverain.",
    "paragraphs": [
      "Londres, 5 juin : On télégraphie de Tanger au Daily Mail que Mouley-Mohammed est enchaîné par ordre de son frère, le sultan, et interné à Mequinez."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un curieux phénomène en Belgique",
    "summary": "Une invasion massive d'insectes ailés, semblables à des libellules, a provoqué l'émoi des habitants à Anvers et Bruxelles, où une chasse improvisée a été organisée par les gamins.",
    "paragraphs": [
      "Un phénomène assez rare s'est produit en Belgique aujourd'hui. Des nuées de gros insectes ailés, de l'apparence des libellules, se sont abattues par centaines de milliers en certains endroits.",
      "À Anvers, notamment, les habitants étaient obligés de se garantir le visage pour éviter le contact de ces insectes. À Bruxelles, les gamins ont organisé une véritable chasse avec des filets à papillons."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Désordres à Gand",
    "summary": "À Gand, une rixe sanglante entre ouvriers débardeurs a nécessité l'intervention de la police. Le bilan fait état d'un gréviste tué par arme à feu et de plusieurs blessés.",
    "paragraphs": [
      "Gand, 5 juin : Depuis quelque temps, les débardeurs socialistes empêchaient les ouvriers débardeurs libéraux de procéder au débarquement des marchandises.",
      "Une violente bagarre s'est produite hier après-midi. Un des libéraux a été frappé d'un coup de couteau. La police ayant dû charger et faire feu, l'un des grévistes a été tué et plusieurs autres ont été blessés."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Soldats attaqués à Bruges",
    "summary": "Deux lanciers en garnison à Bruges ont été sauvagement agressés à coups de couteau par des individus. Leur état est jugé désespéré par les médecins de l'hôpital militaire.",
    "paragraphs": [
      "Bruges, 5 juin : Deux soldats appartenant au régiment des lanciers en garnison à Bruges ont été attaqués par des paysans.",
      "Ils ont été criblés de coups de couteau et leur état est si grave qu'il a fallu les transporter d'urgence à l'hôpital militaire. On désespère de les sauver. Les coupables sont pour l'heure inconnus."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Agression sur le quai",
    "summary": "Bruges, 5 juin : Deux agents de police ont été grièvement blessés lors d'une agression sauvage sur les quais. Le coupable, auteur d'un coup de poignard, a été arrêté.",
    "paragraphs": [
      "Bruges, 5 juin : Deux agents qui patrouillaient le long du quai rencontrèrent un repris de justice. Ce dernier se retourna soudainement et, frappant l'un d'eux d'un coup de poignard, puis tournant sa rage contre le second agent, il les terrassa tous deux. L'état des deux victimes est des plus graves. Le coupable a été arrêté."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Naufrage en mer",
    "summary": "Une collision maritime entre les steamers Tang et Gri-Tringana, à soixante milles de Singapour, a provoqué le naufrage du premier navire, causant la mort de trente passagers.",
    "paragraphs": [
      "Anvers, 5 juin : Une dépêche annonce qu'une collision s'est produite entre les steamers Tang et Gri-Tringana, à soixante milles de Singapour. Le premier steamer a coulé à pic. Trente passagers ont péri ; les autres ont réussi à se sauver et ont été recueillis par un autre navire deux jours plus tard."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Grave accident à Budapest",
    "summary": "À Budapest, le déraillement d'une voiture du chemin de fer électrique, causé par une probable défaillance des freins, a fait quatre morts et neuf blessés.",
    "paragraphs": [
      "Buda-Pesth, 5 juin : Une voiture du chemin de fer électrique a déraillé hier et s'est renversée. Quatre personnes ont été tuées et neuf blessées. Le frein a probablement été desserré par suite de la cohue, la voiture ayant pris une vitesse rapide sur un terrain en pente."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique étrangère",
    "title": "L'occupation de Pretoria",
    "summary": "L'armée de lord Roberts a pris possession de Pretoria après une campagne éprouvante. Le War Office confirme que l'entrée officielle des troupes britanniques a eu lieu ce 5 juin.",
    "paragraphs": [
      "Une dépêche officielle annonce l'occupation de Pretoria par les Anglais. Depuis son départ de Johannesburg, l'armée de lord Roberts a eu à soutenir de rudes combats. Les Boërs ont sauvé l'honneur, mais la résistance n'a pu empêcher l'occupation.",
      "Le War Office a affiché une dépêche de lord Roberts confirmant que l'entrée officielle a eu lieu à deux heures cet après-midi, le 5 juin."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Scènes de liesse et violences à Londres",
    "summary": "L'annonce de la chute de Pretoria a déclenché une liesse populaire à Londres, rapidement entachée par des pillages et des violences nécessitant une intervention policière.",
    "paragraphs": [
      "À la nouvelle de l'occupation de Pretoria, une foule énorme s'est formée devant Mansion-House à Londres. Des scènes d'enthousiasme se sont transformées en violences lorsque des bandes de voyous ont commencé à piller et attaquer les passants. La police est intervenue vers trois heures pour disperser les agresseurs."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Détails militaires sur la prise de Pretoria",
    "summary": "Le maréchal Lord Roberts télégraphie les détails de la marche sur Pretoria. Après avoir forcé les lignes boërs, les troupes britanniques sont arrivées aux portes de la capitale, où la brigade des gardes s'est établie.",
    "paragraphs": [
      "Lord Roberts télégraphie les détails de la marche sur Pretoria. Après avoir repoussé l'ennemi sur plusieurs positions et comblé le vide entre les colonnes britanniques, nos forces ont atteint Pretoria. La brigade des gardes se trouve désormais à proximité immédiate de la ville."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique étrangère",
    "title": "La situation au Transvaal",
    "summary": "La fabrique de Modder-Fontein est occupée par les troupes britanniques. Le président Krüger demeure à Lydenburg, tandis que le général Botha affiche sa résolution de poursuivre la lutte sans ordonner la retraite.",
    "paragraphs": [
      "On annonce que la fabrique de Modder-Fontein a été occupée par un régiment anglais. Le président Krüger est en communication constante avec Pretoria et se trouverait actuellement à Lydenburg. Le général Botha a formellement déclaré qu'il ne fallait point songer à battre en retraite."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Mécontentement des volontaires étrangers",
    "summary": "À Lourenço-Marquez, les volontaires étrangers ayant combattu pour les Boërs manifestent leur vive amertume face à l'absence de solde et à l'indifférence des autorités après huit mois de service actif.",
    "paragraphs": [
      "Lourenço-Marquez, 4 juin : Cette ville est actuellement envahie par les volontaires étrangers qui avaient prêté main-forte aux Boërs. Plusieurs d'entre eux expriment un vif mécontentement concernant le traitement qu'ils subissent, se plaignant de l'absence totale de reconnaissance de la part des autorités boërs ainsi que du défaut de rémunération après huit mois de service."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Actualité navale",
    "title": "État du navire anglais Belle-Ile",
    "summary": "Le vaisseau de guerre britannique Belle-Ile a été renfloué après avoir reçu treize cents projectiles en dix minutes, prouvant la vulnérabilité des structures légères face à l'artillerie navale moderne.",
    "paragraphs": [
      "Une dépêche de Londres apprend que le Belle-Ile, vaisseau de guerre anglais, a été renfloué. Les autorités ont constaté avec effroi que le navire avait essuyé treize cents projectiles en moins de dix minutes. Le bilan montre que tout ce qui n'est pas en fer sur un navire est condamné à être pulvérisé ou incendié rapidement sous un feu moderne."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Un raid de cavalerie française",
    "summary": "Des lieutenants du 3e hussards ont accompli un exploit remarquable en couvrant 170 kilomètres entre Verdun et Sedan en seulement vingt et une heures, faisant preuve d'une excellente endurance.",
    "paragraphs": [
      "Des lieutenants du 3e hussards ont effectué un raid de 170 kilomètres entre Verdun et Sedan en vingt et une heures. Les chevaux et les cavaliers ont été vivement félicités pour leur excellente condition physique, malgré la durée de l'épreuve et les conditions météorologiques rigoureuses rencontrées sur le trajet."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Diplomatie",
    "title": "Rencontre militaire franco-russe",
    "summary": "À Besançon, le colonel russe Kounay, commandant le 60e régiment d'infanterie, a reçu un accueil enthousiaste. Les effusions fraternelles entre les officiers ont marqué cette journée de liesse populaire.",
    "paragraphs": [
      "À Besançon, une délégation française a accueilli avec un enthousiasme débordant le colonel russe Kounay, commandant le 60e régiment d'infanterie, arrivé de Paris. Dans un élan de fraternité, les deux officiers se sont embrassés chaleureusement sous les acclamations nourries de la foule."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Science",
    "title": "La télégraphie par la Seine",
    "summary": "Rappel d'une audacieuse tentative scientifique durant le siège de Paris en 1870-71 : M. Bourbouze et M. d'Almeida voulurent faire de la Seine un conducteur pour transmettre des dépêches en province.",
    "paragraphs": [
      "Retour historique sur l'utilisation singulière de la Seine en tant que conducteur électrique pour la transmission des dépêches durant le siège de Paris en 1870-71. M. Bourbouze avait préconisé l'usage des eaux du fleuve pour établir une communication télégraphique entre Paris et la province, une entreprise scientifique d'une rare audace dirigée par M. d'Almeida."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame de l'adultère à Montpellier",
    "summary": "Un drame passionnel s'est noué à Montpellier : Madeleine Millon s'est donné la mort en se poignardant devant son amant, suite à la rupture brutale imposée par la découverte de son mariage.",
    "paragraphs": [
      "Un drame atroce s'est déroulé à Montpellier : la dame Madeleine Millon s'est donné la mort après que son amant, ayant découvert son état de femme mariée, eut résolu de rompre leur liaison. Malgré les tentatives de conciliation, le désespoir a poussé la malheureuse à se poignarder mortellement sous les yeux de son amant."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Sport",
    "title": "Fête fédérale de gymnastique",
    "summary": "La forêt de Saint-Germain a été le théâtre de la vingt-sixième fête fédérale de gymnastique. Un événement marqué par un banquet convivial et la remise des prix au gymnase Voltaire à Paris.",
    "paragraphs": [
      "Plusieurs milliers de gymnastes ont célébré leur vingt-sixième fête fédérale au cœur de la forêt de Saint-Germain. Après le banquet traditionnel et une promenade dans les bois, la journée s'est clôturée solennellement par la distribution des récompenses au gymnase Voltaire, à Paris."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Social",
    "title": "Conseil supérieur du travail",
    "summary": "M. Millerand, ministre du Commerce, a inauguré le nouveau Conseil supérieur du travail, insistant sur la nécessité d'une documentation rigoureuse pour légiférer efficacement sur le sort des ouvriers.",
    "paragraphs": [
      "M. Millerand, ministre du Commerce, a présidé avec autorité la séance d'ouverture du nouveau Conseil supérieur du travail. Dans son allocution, il a insisté sur l'impérieuse nécessité de fournir au législateur une documentation précise et impartiale afin d'améliorer durablement les conditions du monde ouvrier."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Social",
    "title": "Grève à Alais",
    "summary": "Les mineurs du puits Fontanes, à Alais, ont cessé le travail. Le sous-préfet et les forces de gendarmerie sont intervenus promptement sur les lieux afin d'assurer le maintien de l'ordre public.",
    "paragraphs": [
      "On mande d'Alais que les mineurs du puits Fontanes se sont mis en grève. Le sous-préfet et la gendarmerie se sont rendus sur les lieux pour maintenir l'ordre."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Échos et nouvelles",
    "title": "Réception diplomatique et congrès",
    "summary": "Le ministre de l'Agriculture a offert une réception au corps diplomatique, tandis que le 36e congrès des sociétés savantes s'est ouvert à la Sorbonne sous la présidence de M. Levasseur.",
    "paragraphs": [
      "Le ministre de l'Agriculture a offert un dîner aux membres du corps diplomatique. Par ailleurs, le 36e congrès des sociétés savantes a tenu sa réunion à la Sorbonne sous la présidence de M. Levasseur."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Échos",
    "title": "Les hôtes de la France",
    "summary": "Plusieurs illustres personnalités de l'aristocratie européenne, dont le prince Léopold de Bavière et le prince de Furstenberg, sont arrivées à Paris hier matin et ont pris leurs quartiers dans les grands hôtels.",
    "paragraphs": [
      "Hier matin, sont arrivés à Paris, venant de Munich par le train de 5 h 30, le prince Léopold de Bavière, inspecteur général d'armée, et sa femme, la princesse de Bavière, fille de l'empereur d'Autriche, voyageant sous le nom de comte et comtesse Elpen.",
      "Le prince et la princesse, qui sont accompagnés de leur fils Georges et d'une suite de sept personnes, sont descendus à l'hôtel Meurice.",
      "Dans le même train se trouvaient les princes bavarois Oettingen-Spielberg et Oettingen-Wallenstein, tous deux membres héréditaires de la Chambre de Bavière et grands-maîtres de la cour.",
      "Le prince et la princesse de Furstenberg sont également arrivés hier matin en gare de l'Est, venant de Vienne. Ils sont descendus au Grand-Hôtel."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Échos",
    "title": "Arrivées de personnalités indiennes",
    "summary": "Le maharadjah de Baroda, accompagné de sa suite, est arrivé à Paris en provenance de Bombay via Marseille. La princesse Maharani Baroda Dharika Shitea est également arrivée et loge au Trocadéro.",
    "paragraphs": [
      "Avant-hier matin est arrivé à Paris, venant de Bombay par Marseille, le maharadjah de Baroda, accompagné d'une suite nombreuse.",
      "Quelques heures après, arrivait à son tour la princesse indienne Maharani Baroda Dharika Shitea qui est descendue à l'hôtel du Trocadéro."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Nécrologie",
    "title": "Décès de M. Jarry",
    "summary": "Le décès de M. Jarry, recteur de l'Académie de Rennes, est annoncé. Âgé de soixante-sept ans, il occupait ses fonctions depuis vingt-huit ans. Les obsèques auront lieu jeudi, en présence de M. Liard.",
    "paragraphs": [
      "On annonce de Rennes la mort de M. Jarry, recteur d'Académie, âgé de soixante-sept ans.",
      "Les obsèques du défunt seront célébrées jeudi et M. Liard, directeur de l'enseignement, y assistera.",
      "M. Jarry était recteur de l'Académie de Rennes depuis vingt-huit ans."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Sport",
    "title": "Les Courses : Grande Course de Haies",
    "summary": "La grande course de haies de ce mercredi 6 juin promet une lutte acharnée. Parmi les partants, le favori Général Peace devra s'imposer face à une concurrence sérieuse, notamment Hiawathieh et Sémiramis.",
    "paragraphs": [
      "La grande course de haies, dotée d'une prime importante, se tient aujourd'hui, mercredi 6 juin.",
      "Parmi les partants figurent Général Peace, Spook, Le Guide, Hiawathieh, Kint d'Or, Cannes, Sémiramis et Lorient.",
      "Nous pensons que la victoire restera à Général Peace et nous voyons Hiawathieh et Sémiramis pour les places d'honneur."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un abordage en Seine",
    "summary": "Les travaux de renflouement du bateau parisien n° 11, ayant sombré près du pont Alexandre III, ont débuté sous l'autorité de M. Lépine. L'enquête est close et l'épave sera rapidement dégagée.",
    "paragraphs": [
      "Sur l'ordre de M. Lépine, préfet de police, les travaux de renflouement du bateau parisien n° 11, coulé avant-hier soir près du pont Alexandre III après sa collision avec les pontons, ont commencé hier matin.",
      "L'enquête administrative est terminée et les responsabilités nettement établies. L'épave devrait être enlevée rapidement pour rendre libre la navigation fluviale."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un conflit dans la boucherie",
    "summary": "Le mouvement des bouchers du XVIIIe arrondissement pour la fermeture dominicale engendre des troubles. La police est intervenue rue des Abbesses sur instruction de M. Lépine pour maintenir l'ordre.",
    "paragraphs": [
      "Les bouchers du XVIIIe arrondissement ont décidé de fermer leurs boutiques les dimanches et jours fériés à compter de six heures du matin.",
      "Cette mesure a entraîné des manifestations violentes devant les établissements récalcitrants. La police a dû intervenir à plusieurs reprises et deux arrestations ont été opérées rue des Abbesses.",
      "M. Lépine, préfet de police, dûment informé du conflit, a donné des ordres spéciaux aux officiers de paix afin de prévenir l'extension du mouvement."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tué dans un ascenseur",
    "summary": "Un accident mortel est survenu aux pompes élévatoires du port de la Cunette. L'employé Tony Springer a succombé à une chute de trente mètres dans la cage d'un ascenseur en mouvement.",
    "paragraphs": [
      "Un accident mortel s'est produit hier matin aux pompes élévatoires Worthington, installées au port de la Cunette, près du Champ-de-Mars.",
      "L'employé Tony Springer, voulant sortir de l'ascenseur en marche suite à un bruit suspect provenant du contrepoids, a fait une chute de trente mètres dans la cage de l'appareil. Le médecin de service n'a pu que constater le décès par fracture de la base du crâne."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une chasse au renard",
    "summary": "Une alerte à la bête fauve dans le quartier des Invalides a semé l'émoi. Il s'agissait en réalité d'un renard inoffensif, débusqué dans des décombres rue Vaneau, mettant fin aux craintes des riverains.",
    "paragraphs": [
      "Un particulier a alerté la police de l'avenue de Breteuil pour signaler une bête fauve échappée d'une ménagerie aux abords des Invalides. Il s'agissait en réalité d'un renard, qui s'était terré dans des décombres rue Vaneau.",
      "Le propriétaire de la ménagerie ayant formellement affirmé que l'animal était inoffensif, le calme est revenu dans le quartier."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de meurtre",
    "summary": "Un différend dans un débit de vins quai de Seine a tourné au drame : Henri Weber a grièvement blessé Auguste Palatin d'un coup de couteau à la nuque. L'agresseur a été immédiatement appréhendé.",
    "paragraphs": [
      "Hier soir, lors d'une altercation survenue dans un débit de vins du quai de Seine, Henri Weber a frappé Auguste Palatin d'un violent coup de couteau à la nuque.",
      "La victime a été transportée d'urgence à l'hôpital Lariboisière, tandis que l'agresseur a été arrêté par les autorités."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une chute mortelle",
    "summary": "Louis Favre, un journalier de vingt-huit ans, a trouvé la mort près de la porte de Clignancourt après avoir succombé à un étourdissement qui l'a fait chuter du haut des fortifications.",
    "paragraphs": [
      "Louis Favre, un journalier de vingt-huit ans, est décédé après avoir fait une chute mortelle depuis une bordure en pierre sur les fortifications, près de la porte de Clignancourt, à la suite d'un étourdissement soudain."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Faits Divers",
    "title": "Drame en Corse : Le triple meurtre de Cuneo",
    "summary": "Une embuscade sur le plateau de Cuneo a décimé la famille Marcellesi. Malgré la gravité des faits et l'accusation portée contre quatre membres de la parenté, le jury a prononcé un acquittement général.",
    "paragraphs": [
      "Une famille, composée de Don-Jacques Marcellesi et de ses deux fils, François et Jacques, parcourait le plateau de Cuneo lorsqu'ils furent la cible de détonations provenant d'un mamelon rocheux. Don-Jacques fut blessé, tandis que ses deux fils furent frappés à mort par des tirs d'une précision redoutable.",
      "Malgré ses blessures, Don-Jacques se releva et reconnut quatre individus en fuite, dont deux de ses neveux, Jacques-Antoine Marcellesi et Jacques-Antoine Cucchi. Il parvint, au prix d'efforts surhumains, à transporter les corps de ses fils jusqu'au hameau de Vignalella où il fut recueilli par son beau-frère.",
      "Lors du procès devant la cour d'assises, les nommés Jacques-Antoine Marcellesi et Jacques-Antoine Cucchi furent accusés de meurtre volontaire avec préméditation, tandis que Don-Paul Marcellesi et Jean-Augustin Marcellesi étaient accusés d'en être les instigateurs. Après un réquisitoire sévère, le jury a rendu un verdict négatif et les quatre accusés ont été remis en liberté."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Feuilleton",
    "title": "Mariage Secret - Quatrième Partie : Par l'Amour (Chapitre XVI)",
    "summary": "Le commandant de Queyrel se rend à l'hôtel d'Aspremont pour une entrevue mystérieuse. Il y découvre une assemblée stupéfaite, où le malfaiteur Delorme se voit pris au piège par une présence inattendue.",
    "paragraphs": [
      "Quoique fort étonné, le commandant de Queyrel n'avait pas douté de la réalité de ce rendez-vous. Il s'était dit, dans sa lassitude de volonté et d'initiative : « Il paraît qu'il a besoin que j'aille là-bas. C'est évidemment dans l'intérêt des dames d'Aspremont. »",
      "Il était arrivé devant la porte monumentale de l'hôtel d'Aspremont, où un étrange défilé de visiteurs s'opérait depuis le matin. Le concierge, bien que troublé par ces mouvements mystérieux et l'arrivée de personnages tels que le docteur Lecoutellier, observait l'entrée successive des membres de la famille et des alliés.",
      "Lorsque le commandant fut introduit dans le cabinet du baron, ce fut un étrange coup de théâtre. Le baron de Lorgerac et le docteur Lecoutellier s'étaient levés stupéfaits, tandis que Delorme, le malfaiteur, reculait avec un regard affolé, se sentant pris au piège par l'arrivée inattendue du père de Ludovic de Queyrel."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales et mondaines",
    "summary": "Célébration de Corneille, succès financier d'Edmond Rostand et mouvements dans le monde lyrique : panorama des scènes parisiennes et des projets artistiques en ce jour anniversaire.",
    "paragraphs": [
      "Ce soir, à l'occasion de l'anniversaire de la naissance de Corneille, des représentations spéciales sont prévues à la Comédie-Française et à l'Odéon.",
      "Un statisticien a calculé que « L'Aiglon » et « Cyrano de Bergerac » rapporteraient cette année à leur auteur, Edmond Rostand, une somme considérable.",
      "Au théâtre Sarah-Bernhardt, une fête internationale de bienfaisance a lieu en matinée au profit de diverses sociétés charitables.",
      "Mme Rose Caron abandonnerait la carrière lyrique pour rejoindre la Comédie-Française. Par ailleurs, l'Opéra-Comique prépare « L'Ouragan », poème d'Émile Zola sur une musique d'Alfred Bruneau."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Sports",
    "title": "Résultats des concours d'escrime et courses sportives",
    "summary": "Le tournoi international d'escrime aux Tuileries s'est poursuivi hier. Parallèlement, le cycliste Cordang prépare Bordeaux-Paris, M. Levegh s'impose en automobile, et Lepoutre remporte les 24 heures de Lille.",
    "paragraphs": [
      "Hier a eu lieu la suite du tournoi international d'escrime à l'épée aux Tuileries, dont les résultats des quatre poules disputées ont été enregistrés.",
      "Dans le domaine cycliste, le stayer hollandais Cordang est arrivé à Paris pour prendre part à l'épreuve Bordeaux-Paris. Par ailleurs, le classement général de la course d'automobiles Bordeaux-Périgueux-Angoulême-Bordeaux a été publié, consacrant la victoire de M. Levegh dans la catégorie des voitures.",
      "Enfin, la course des 24 heures de Lille s'est achevée par la victoire du coureur Lepoutre."
    ]
  }
];
