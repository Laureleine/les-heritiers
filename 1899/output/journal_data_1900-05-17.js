// Date: 1900-05-17
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-05-17 (Version Restaurée, 24 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Visite Princière au pavillon portugais",
    "summary": "Le duc d'Oporto, frère du roi de Portugal, a visité le pavillon officiel de son pays à l'Exposition universelle, saluant l'originalité architecturale et la gestion exemplaire des galeries par la commission portugaise.",
    "paragraphs": [
      "Le duc d'Oporto, frère du roi Louis de Portugal et haut protecteur de la délégation portugaise à l'Exposition universelle, a visité hier matin le pavillon officiel construit dans la rue des Nations par ses compatriotes, ainsi que les diverses annexes de la section, situées aux Invalides.",
      "Le duc était accompagné du personnel de la légation de Paris et de plusieurs hauts dignitaires de la cour de Lisbonne, formant sa suite durant son séjour dans la capitale.",
      "Guidé par les présidents de la commission d'organisation, le conseiller royal Urbano Garcia et le commissaire général, vicomte de Kaira, il a pu juger favorablement l'excellente tenue des galeries portugaises.",
      "Après avoir félicité chaleureusement les exposants, le duc a exprimé sa satisfaction entière quant aux résultats obtenus par les commissaires. Il s'est montré particulièrement sensible à l'originalité architecturale du pavillon officiel. Après une incursion rapide dans les palais de l'Italie et des États-Unis, il a terminé cette première visite par une courte promenade à travers les grands palais des Beaux-Arts."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Les concerts officiels de l'Exposition",
    "summary": "La commission des auditions musicales a fixé le programme des concerts officiels au Trocadéro : trente séances, incluant orchestre, orgue et musique de chambre, accessibles au public à des tarifs modérés.",
    "paragraphs": [
      "La commission des auditions musicales de l'Exposition vient d'arrêter définitivement la liste des grands concerts officiels qui seront donnés dans la salle des fêtes du Trocadéro pendant la durée de l'Exposition.",
      "Ces concerts sont divisés en trois séries : dix grands concerts avec orchestre, dix concerts d'orgue et dix séances de musique de chambre.",
      "Ces concerts ne seront pas gratuits, car il est impossible de demander aux musiciens et artistes de prêter gracieusement leur concours à ces solennités artistiques. Néanmoins, les prix des places seront à la portée de toutes les bourses."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Le Jury des Récompenses",
    "summary": "Le Journal officiel a publié hier la composition intégrale du jury des récompenses de l'Exposition Universelle, répartissant les experts dans les divers groupes et classes de cette vaste manifestation.",
    "paragraphs": [
      "Le Journal officiel a publié, dans son édition d'hier, la composition complète du jury des récompenses pour l'Exposition Universelle. Les membres de cet important jury sont extrêmement nombreux et ont été répartis avec soin en divers groupes et classes, couvrant un champ d'action allant de l'éducation nationale jusqu'aux services des armées de terre et de mer."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Réception au Pavillon allemand",
    "summary": "M. le docteur Richter, commissaire général de l'Empire allemand, a convié l'élite de la colonie germanique de Paris à une réception brillante tenue hier soir dans les salons du pavillon national.",
    "paragraphs": [
      "M. le docteur Richter a donné hier une fête extrêmement brillante aux notabilités de la colonie allemande de Paris. La réception, offerte par le commissaire général de l'Empire allemand, a commencé à neuf heures du soir.",
      "Les nombreux invités se sont pressés devant les chefs-d'œuvre de Lancret, de Watteau et de Chardin, exposés dans le grand salon d'honneur, puis se sont répandus dans les autres salles décorées avec un soin particulier."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Actualités Internationales",
    "title": "La chute de Mafeking et la guerre des Boërs",
    "summary": "Une dépêche de Lourenço-Marques confirme la reddition du colonel Baden-Powell et la capitulation de la garnison de Mafeking aux mains des troupes boërs, alors que lord Roberts prépare son offensive sur Johannesburg.",
    "paragraphs": [
      "Une dépêche de Lourenço-Marques annonce que la ville de Mafeking a capitulé dimanche et que la garnison, composée de neuf cents hommes, a été faite prisonnière par les Boërs.",
      "C'est un succès pour les Boërs, mais un succès destiné à n'avoir que peu de portée sur la série des opérations qui se poursuivent dans l'État libre et le Transvaal. Lord Roberts se prépare à marcher sur Johannesburg.",
      "Les bulletins publiés à Pretoria confirment que le colonel Baden-Powell, après avoir demandé un armistice, a capitulé dimanche matin."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Actualités Internationales",
    "title": "La marche du général Buller",
    "summary": "Le général Buller annonce l'occupation de Glencoe par les troupes britanniques, tandis que les commandos du Transvaal se replient vers le Nord en évacuant le Biggar's Berg avec onze pièces d'artillerie.",
    "paragraphs": [
      "Le général Buller télégraphie de Dundee que les troupes anglaises ont occupé Glencoe. Les Transvaaliens ont évacué le Biggar's Berg et les commandos se sont dirigés vers le Nord, emportant avec eux onze pièces d'artillerie."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Faits Divers",
    "title": "Une femme soldat découverte au front",
    "summary": "Une jeune femme a été démasquée parmi les rangs du commando de Johannesburg. Déguisée en homme pour suivre son époux au combat, elle s'est distinguée à Spion-Kop avant son renvoi vers ses foyers.",
    "paragraphs": [
      "Parmi les soldats du commando de Johannesburg campé à Glencoe, une jeune femme vient d'être découverte. Son mari étant parti pour la guerre, elle s'était travestie en homme pour s'enrôler. Elle a combattu avec énergie à Spion-Kop, jusqu'à ce que son sexe soit révélé et qu'elle soit renvoyée dans ses foyers."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Actualités Internationales",
    "title": "La délégation Boër à New-York",
    "summary": "Les délégués boers ont été chaleureusement accueillis à New-York. M. Fischer a plaidé auprès du peuple américain pour une paix juste, réaffirmant la détermination farouche de son peuple.",
    "paragraphs": [
      "Les délégués boers ont été cordialement reçus à New-York. M. Fischer a déclaré que la délégation souhaitait en appeler aux sentiments et au bon sens du peuple américain pour favoriser une issue pacifique, tout en affirmant que les Boers ne se laisseraient point égorger sans résistance."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Dissolution du parlement italien",
    "summary": "Malgré la persistance des rumeurs concernant une dissolution de la Chambre et l'organisation d'élections générales en Italie, le gouvernement n'aurait encore arrêté aucune décision définitive.",
    "paragraphs": [
      "Bien que le bruit ait couru d'une dissolution imminente de la Chambre et d'élections générales en Italie, on déclarait dans les cercles les mieux informés que le gouvernement n'avait encore pris aucune décision définitive."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Révolte au Congo belge",
    "summary": "Une mutinerie a éclaté au fort de Chinkakassa, près de Boma. Cent cinquante soldats insurgés, retranchés dans l'édifice, ont pilonné la ville avant d'être délogés par les troupes de l'État après un vif combat.",
    "paragraphs": [
      "Une mutinerie a éclaté dans le fort de Chinkakassa, près de Boma. Cent cinquante soldats s'y étaient retranchés et ont canonné la ville. Le fort a finalement été repris par les troupes de l'État après un vif combat."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Sextuple asphyxie accidentelle",
    "summary": "Une famille de six personnes, rue Saint-Antoine, a été victime d'une grave asphyxie durant la nuit. L'accident a été provoqué par un calorifère défectueux dont la bouche est restée malencontreusement ouverte.",
    "paragraphs": [
      "Une famille entière, composée de M. René Goussin, de sa femme, de son frère et de ses trois enfants, a failli périr asphyxiée à son domicile du 109, rue Saint-Antoine. L'accident était dû au mauvais fonctionnement d'un calorifère dont l'une des bouches avait été imprudemment laissée ouverte durant la nuit."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un fils dénaturé",
    "summary": "Un ouvrier serrurier, Gustave Guillet, a été arrêté pour avoir violemment agressé sa mère sexagénaire. Ivre, il a dû être maîtrisé par les voisins après avoir frappé sa parente avec un verre à pied.",
    "paragraphs": [
      "Un ouvrier serrurier nommé Gustave Guillet a été arrêté après avoir brutalisé sa mère, âgée de soixante-huit ans. Connu pour ses penchants pour l'ivrognerie et sa paresse, il a frappé sa parente avec un verre à pied avant d'être finalement maîtrisé par l'intervention des voisins."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Justice",
    "title": "Procès des coureurs cyclistes",
    "summary": "La justice de paix de Corbeil a statué sur l'accident survenu lors de la course Paris-Roubaix à la Croix-de-Noailles. Si certains prévenus furent acquittés, les autres ont écopé d'une amende de deux francs.",
    "paragraphs": [
      "La justice de paix de Corbeil a rendu son verdict concernant l'affaire des coureurs cyclistes, à la suite de l'accident survenu à la Croix-de-Noailles lors de la course Paris-Roubaix. M. Didier Nauts et Mlle Léa Lemoine ont été acquittés, tandis que de nombreux autres participants ont été condamnés à une amende de deux francs."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Faits Divers",
    "title": "Violent incendie à Montargis",
    "summary": "Un incendie accidentel a ravagé les ateliers de M. Gaston Lecomte, industriel à Courtenay. Le sinistre a causé des pertes matérielles importantes, heureusement couvertes par les polices d'assurance.",
    "paragraphs": [
      "Un violent incendie, dont la cause paraît accidentelle, vient de détruire complètement les ateliers de construction d'ustensiles de laiterie et de machines agricoles appartenant à M. Gaston Lecomte, industriel à Courtenay.",
      "Les pertes pour les bâtiments, marchandises et outillage sont estimées à plusieurs milliers de francs ; elles sont, heureusement, couvertes par une assurance."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame familial à Chantilly",
    "summary": "Un terrible accident domestique a coûté la vie à un enfant de trois ans, le petit Dumont, à Vineuil-Saint-Firmin. Ses vêtements ayant pris feu au contact d'un poêle, il a succombé à ses graves brûlures.",
    "paragraphs": [
      "Un bébé de trois ans, le petit Dumont, habitant avec ses parents à Vineuil-Saint-Firmin, a mis le feu à ses vêtements en s'approchant trop près d'un poêle.",
      "Il a été si profondément atteint que le malheureux enfant est mort peu après des suites de ses brûlures."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide à Montdidier",
    "summary": "Mme Garcerand, épouse du docteur de Rollot, a mis fin à ses jours par asphyxie. Ce drame s'inscrit dans un contexte de troubles mentaux, l'intéressée ayant déjà tenté de se donner la mort par arme à feu en 1889.",
    "paragraphs": [
      "Mme Garcerand, femme du docteur de Rollot, s'est donné la mort par asphyxie. Ce suicide est attribué à des dérangements cérébraux persistants.",
      "Mme Garcerand, qui avait été internée à deux reprises à l'asile d'aliénés de Dury, avait déjà tenté de se suicider en 1889 en se tirant une balle dans la tête, projectile qui n'avait jamais pu être extrait."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Social",
    "title": "Inscription des chevaux de trois ans au Bulletin officiel",
    "summary": "Le Bulletin officiel invite les propriétaires de chevaux trotteurs de trois ans à régulariser leurs dossiers avant le 10 mai, une démarche gratuite garantissant une meilleure valorisation sportive de l'animal.",
    "paragraphs": [
      "Au sujet des chevaux trotteurs de trois ans, nous ne saurions trop recommander aux propriétaires de faire inscrire leurs papiers au Bulletin officiel, sis 12, rue de l'Arcade, à Paris.",
      "Cette formalité, à la fois indispensable et gratuite, confère une plus-value aux chevaux en leur permettant de participer à des épreuves auxquelles ils ne pourraient prétendre sans cette inscription préalable.",
      "Les dossiers d'origine des chevaux de trois ans doivent être transmis avant le 10 mai, date de clôture. Les documents seront restitués ultérieurement à leurs propriétaires sous pli recommandé."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Littérature",
    "title": "La Grande Encyclopédie",
    "summary": "Le tome XXVII de la Grande Encyclopédie est désormais disponible, clôturant la lettre P, couvrant la lettre Q et entamant la lettre R avec une rigueur scientifique et typographique exemplaire.",
    "paragraphs": [
      "La parution de chaque volume de la Grande Encyclopédie constitue un véritable événement littéraire, marquant une progression notable vers l'achèvement de cette œuvre monumentale.",
      "Le tome XXVII, qui vient d'être mis en vente, achève la lettre P, contient l'intégralité de la lettre Q et aborde le début de la lettre R. Les connaissances scientifiques les plus récentes, enrichies par les découvertes modernes, y sont exposées avec clarté et précision.",
      "Cet ouvrage forme un recueil substantiel de notions fiables et un répertoire de référence, bénéficiant d'une exécution typographique particulièrement soignée."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Théâtre",
    "title": "Reprise de Cyrano de Bergerac",
    "summary": "Le théâtre de la Porte-Saint-Martin affiche une reprise remarquée de Cyrano de Bergerac, où Mlle Yahne incarne Roxane avec une grâce spirituelle et une finesse parfaitement adaptées au style de l'œuvre.",
    "paragraphs": [
      "Le théâtre de la Porte-Saint-Martin a offert hier soir une brillante reprise de Cyrano de Bergerac, servie par une mise en scène pittoresque et une interprétation de grande qualité.",
      "Mlle Yahne, remplaçant Mlle Legault dans le rôle de Roxane, y déploie ses qualités de grâce spirituelle, parfois empreinte d'une recherche qui sied fort bien au ton précieux et au style caractéristique de la pièce."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Feuilleton",
    "title": "Mariage Secret",
    "summary": "Dans ce nouvel épisode du roman Mariage Secret, les protagonistes évoquent des préoccupations familiales et épistolaires, tandis que Claude apporte des nouvelles rassurantes d'un proche exilé en Algérie.",
    "paragraphs": [
      "La suite du grand roman intitulé Mariage Secret se poursuit aujourd'hui.",
      "Claude et la jeune fille s'entretiennent des soucis de santé de la mère de cette dernière, ainsi que d'une lettre mystérieuse dont le post-scriptum a suscité une vive émotion chez la jeune femme.",
      "Par ailleurs, Claude lui communique des nouvelles rassurantes concernant un proche parti travailler dans les mines de phosphates de Tébessa, en Algérie, afin d'y acquérir l'expérience du labeur et l'indépendance."
    ]
  },
  {
    "id": 21,
    "page": 4,
    "category": "Santé et témoignages",
    "title": "Guérison de M. Dehert par le Charbon de Belloc",
    "summary": "M. Dehert, vétérinaire à Lunéville, témoigne de sa guérison spectaculaire d'une constipation opiniâtre et de crampes d'estomac persistantes grâce à l'usage du célèbre Charbon de Belloc.",
    "paragraphs": [
      "M. Dehert, vétérinaire à Lunéville, souffrait depuis dix-huit mois d'une constipation opiniâtre et de crampes d'estomac persistantes. Après avoir vainement tenté divers remèdes, il s'en remit au Charbon de Belloc sur recommandation.",
      "Le soulagement fut quasi immédiat. Dès le lendemain, les douleurs disparurent et le transit se régularisa. Il attribue aujourd'hui sa guérison complète à l'efficacité remarquable de ce produit.",
      "L'usage du Charbon de Belloc est souverain pour traiter les maladies intestinales, favoriser la digestion et supprimer les affections nerveuses de l'estomac."
    ]
  },
  {
    "id": 22,
    "page": 4,
    "category": "Roman-feuilleton",
    "title": "La fuite de Henri de Lorgerac",
    "summary": "Le docteur Claude expose à Rolande les raisons du départ de Henri de Lorgerac, affirmant que ce sacrifice visait à protéger leur avenir commun avant l'annonce imminente de son retour.",
    "paragraphs": [
      "Le docteur Claude discute avec Rolande des raisons profondes du départ de Henri de Lorgerac. Bien que la cause du différend familial soit liée à Rolande, Claude insiste sur le fait que Henri est parti pour protéger leur avenir et parce qu'il est désormais démuni.",
      "Rolande exprime son indifférence face à la fortune et espère ardemment le retour de Henri. Claude tente de la rassurer en affirmant que le bonheur reviendra malgré l'épreuve de la pauvreté.",
      "Finalement, Claude révèle que Henri est en chemin et qu'il arrive bientôt, provoquant une immense émotion chez la jeune femme."
    ]
  },
  {
    "id": 23,
    "page": 4,
    "category": "Actualités agricoles",
    "title": "Sommaire de L'Agriculture Nouvelle",
    "summary": "Aperçu des thématiques de la semaine pour L'Agriculture Nouvelle, couvrant les enjeux techniques des semailles d'automne, les phosphates et les conseils avisés sur la viticulture et l'élevage.",
    "paragraphs": [
      "Cette semaine, L'Agriculture Nouvelle propose des articles sur : les phosphates algériens, les prévisions du temps, les semailles d'automne et les sels azotés.",
      "On y trouve également des conseils pratiques sur la viticulture, la conservation du vin, l'horticulture, l'élevage du cheval trotteur ainsi que les dernières actualités sur les Halles et les marchés."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Transports maritimes",
    "title": "Départs et arrivées des paquebots",
    "summary": "Relevé des mouvements maritimes : le Chili a quitté Pernambouc, le Natal est parti de Djibouti, tandis que le Djemnah et le Paraguay ont respectivement atteint Marseille et Le Havre.",
    "paragraphs": [
      "Le paquebot Chili (Messageries Maritimes), venant de la Plata et du Brésil, a quitté Pernambouc le 14 mai.",
      "Le paquebot Natal (Messageries Maritimes), venant de Madagascar, a quitté Djibouti le 15 mai.",
      "Le paquebot Djemnah (Messageries Maritimes), venant de Madagascar, est arrivé à Marseille le 15 mai au matin.",
      "Le paquebot Paraguay (Compagnie Royale), venant de la Plata, est entré au Havre le 14 mai."
    ]
  }
];
