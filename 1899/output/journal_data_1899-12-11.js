// Date: 1899-12-11
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-12-11 (Version Restaurée, 9 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "L'assistance publique aux enfants",
    "summary": "",
    "paragraphs": [
      "L'administration générale de l'Assistance publique a coutume d'imprimer chaque année le compte rendu des services des enfants assistés et moralement abandonnés. Celui du dernier exercice est d'autant plus intéressant qu'il énonce et commente les différentes réformes introduites dans cette branche importante de la philanthropie officielle.",
      "L'organisation charitable actuelle remonte à l'an VIII. L'Etat est devenu le tuteur des enfants trouvés, orphelins et abandonnés, leur assurant un nom, une protection et une instruction. Avec le progrès des idées, la vigilance publique s'est étendue aux enfants privés de toute sécurité familiale, ceux que l'on nomme les moralement abandonnés.",
      "La puissance tutélaire de l'Etat a crû considérablement : en 1874, les crédits pour le seul budget de la Seine étaient de 3 millions de francs, ils s'élèvent aujourd'hui à plus de 11 millions. Le fonctionnement de ce mécanisme de l'assistance est complexe, impliquant la gestion des nourrices, des placements et des soins médicaux.",
      "Malgré les difficultés, l'Assistance publique s'améliore, comme en témoigne la baisse de la mortalité dans les hospices. Des écoles spéciales ont été créées à Villepreux, Montévrain, Yzeure, Port-Hallan et Belle-Ile-en-Mer pour accueillir des milliers d'enfants. L'engagement des autorités et du personnel médical dans cet apostolat est une œuvre salutaire pour la société."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions",
    "summary": "",
    "paragraphs": [
      "Le voyageur, un jeune homme à l'allure élégante et romantique, descend du train à Caudebec. Il engage la conversation avec un conducteur d'omnibus, révélant qu'il se nomme Paul Tavernier, qu'il est avocat, peintre et artiste, mais qu'il vit de ses rentes, en homme indépendant.",
      "Il se rend à Villequier chez un ami, Georges-Aimé-Lucien Duchesne, qui doit prochainement se marier. La discussion entre les deux hommes sur la route révèle le caractère insouciant et bohème du voyageur, ainsi que son absence totale de attaches familiales, ayant perdu sa mère à la naissance et n'ayant jamais connu son père."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Étranger",
    "title": "L'amiral Fournier à Sébastopol",
    "summary": "",
    "paragraphs": [
      "Un déjeuner a été offert par l'amiral Fournier au Club de la marine à Sébastopol, suivi d'un bal. À quatre heures, le croiseur Cosmao a levé l'ancre sous les acclamations du public et au son de l'hymne national russe et de la Marseillaise, accompagné par une flottille russe."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Marine",
    "title": "Les sous-marins",
    "summary": "",
    "paragraphs": [
      "L'agence Havas dément les rumeurs selon lesquelles le ministère de la Marine aurait abandonné la construction des sous-marins. Les travaux sur les navires Français et Algérien se poursuivent, tandis que le submersible Narval est en phase d'essais. De plus, quatre nouveaux sous-marins, le Farfadet, le Korrigan, le Gnome et le Lutin, ont été mis en chantier à Rochefort."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Catastrophe de chemin de fer entre Savone et Albenga",
    "summary": "",
    "paragraphs": [
      "Une collision entre deux trains de voyageurs s'est produite sous le tunnel de Bergeggi, près d'Albenga. Le choc a été terrible, causant quatre morts et de nombreux blessés. Les secours s'organisent depuis Gênes et Vintimille. Le trafic ferroviaire est fortement perturbé et les détails restent encore flous sur le nombre exact de victimes."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Guerre",
    "title": "La guerre au Transvaal",
    "summary": "",
    "paragraphs": [
      "Les nouvelles du théâtre de la guerre font état d'un engagement aux alentours de Ladysmith entre les troupes du général White et les forces Boërs. Les Anglais auraient réussi à détruire quelques obusiers ennemis par un coup de main audacieux, mais sans pour autant rompre l'investissement de la ville.",
      "Le général Gatacre a subi un sérieux échec lors d'une offensive vers Stormberg, contraint de battre en retraite après avoir été surpris par les Boërs. Pendant ce temps, le renforcement des positions Boërs se poursuit à Spytfontein, tandis que la situation reste tendue dans le Griqualand et la colonie du Cap."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Les écumeurs de la Plaine",
    "summary": "",
    "paragraphs": [
      "M. Boutelier, commissaire de police d'Aubervilliers, a réussi à démanteler une bande de malfaiteurs baptisée Les écumeurs de la Plaine. Ces individus terrorisaient Aubervilliers et la Plaine-Saint-Denis depuis un mois, agressant des passants et des ouvriers pour les dépouiller de leur paie.",
      "Grâce à une surveillance étroite et une intervention méthodique, les autorités ont capturé les membres de la bande : Pierre Gerfjen, Jules Kehl et Ernest Pruvost. Plusieurs objets dérobés ont été retrouvés lors de l'arrestation."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Double suicide à Paris",
    "summary": "",
    "paragraphs": [
      "Un drame familial a secoué la ville de Paris : un père et son fils ont été retrouvés morts. Les causes semblent liées à des mésententes fréquentes et à des désaccords profonds qui les ont poussés à mettre fin à leurs jours."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "La vengeance d'un mari",
    "summary": "",
    "paragraphs": [
      "Un musicien de l'orchestre de Paris, trompé par sa femme qui entretenait une relation avec un autre homme, a exercé une vengeance sanglante. Il a utilisé deux chiens dressés à l'attaque pour agresser le couple sur la voie publique, causant d'horribles blessures avant que les forces de l'ordre n'interviennent."
    ]
  }
];
