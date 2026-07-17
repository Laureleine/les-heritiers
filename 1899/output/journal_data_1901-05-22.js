// Date: 1901-05-22
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-05-22 (Version Restaurée, 42 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique Extérieure",
    "title": "Nos écoles en Chine",
    "summary": "Face à la prédominance historique des missions, la France développe en Chine un enseignement moderne et laïque, dont le succès est désormais éprouvé par les méthodes de l'école de Shanghaï.",
    "paragraphs": [
      "La Chine n'a eu, pendant trois siècles, d'autres intermédiaires avec l'Europe, et particulièrement avec la France, que les missionnaires institués pour l'évangélisation et l'éducation des peuples d'Extrême-Orient.",
      "À cette époque, nos agents diplomatiques et consulaires ont reconnu qu'il y avait lieu de créer en Chine un enseignement nouveau, plus strictement moderne et national, bref, un enseignement franco-chinois à côté de l'ancien enseignement catholico-chinois.",
      "Le caractère confessionnel de l'enseignement des missions effrayait et éloignait nombre de familles chinoises qui, autrement, désiraient faire donner à leurs enfants une instruction moderne.",
      "L'école de Shanghaï peut servir de type. Elle n'a pas moins de 260 élèves, sur lesquels 30 au plus sont chrétiens. L'enseignement y est tout à fait laïque. Les parents paient une piastre par mois et par élève.",
      "Comme le dit M. Georges Weulersse, le nouvel enseignement franco-chinois à base laïque est donc fondé, ses principes établis, ses méthodes éprouvées, son succès assuré."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Secret d'Odette (Deuxième partie)",
    "summary": "Odette, traquée par ses créanciers, se laisse entraîner dans un guet-apens machiavélique par la marchande de modes, madame Legros, sous couvert d'une transaction commerciale.",
    "paragraphs": [
      "Odette était seule, tournant bêtement dans son logis, n'ayant envie ni de sortir, ni de faire quoi que ce soit, tremblant d'entendre un coup de sonnette lui annonçant un créancier.",
      "Un coup de sonnette, discret, la fit tressaillir. La bonne fit entrer madame Legros, la marchande à la toilette de la rue de Provence.",
      "La marchande pressait Odette de lui vendre un bijou et, par un stratagème, finit par entraîner la jeune femme dans son magasin de la rue de Provence.",
      "Sous un prétexte fallacieux, madame Legros fit boire du thé à Odette, qui se sentit soudain prise d'une lourdeur et d'une torpeur inexplicables.",
      "Le guet-apens se referme alors que la pauvre Odette, droguée, réalise trop tard la trahison de la marchande."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des ministres",
    "summary": "Réuni sous la présidence de M. Loubet, le Conseil des ministres a entériné la délimitation du quartier diplomatique de Pékin et débattu de la lutte contre la tuberculose.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin, à l'Élysée, sous la présidence de M. Loubet.",
      "Le ministre des Affaires étrangères a avisé le Conseil qu'en exécution d'une des clauses de la note collective, les plénipotentiaires chinois ont accepté les limites du quartier diplomatique de Pékin.",
      "M. Waldeck-Rousseau a entretenu le Conseil de la loi sur la santé publique, dont le Sénat va reprendre la discussion, en insistant sur la lutte contre la tuberculose."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Social",
    "title": "Les accidents du travail",
    "summary": "La loi sur les accidents du travail confirme son succès pratique. Des réformes démocratiques sont désormais envisagées pour élargir le nombre d'ouvriers bénéficiaires de cette protection sociale.",
    "paragraphs": [
      "Lorsque la loi sur les accidents du travail a été votée, elle apportait aux ouvriers des espérances de justice sociale. Actuellement, elle se présente avec un passé qui permet d'affirmer son réel succès pratique.",
      "Il faudra faire subir à la loi des modifications assez importantes pour lui faire rendre son plein effet dans le sens démocratique, notamment en étendant le nombre d'ouvriers bénéficiaires."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Nouvelles coloniales",
    "title": "L'Institut colonial et les affaires d'Outre-mer",
    "summary": "M. Decrais inaugure l'Institut colonial de Bordeaux, tandis que l'actualité coloniale est dominée par l'enquête sur les troubles de Margueritte et l'arrestation des suspects du marquis de Morès.",
    "paragraphs": [
      "M. Decrais, ministre des Colonies, a solennellement inauguré l'Institut colonial à Bordeaux.",
      "Sur les assassins du marquis de Morès, l'arrestation de deux suspects, Mohamed ben Amed et son frère Mahmed, semble confirmée après une bataille à l'Oued-Mimoun.",
      "Concernant les troubles de Margueritte, l'enquête administrative cherche à établir la responsabilité des administrateurs, notamment celle de l'adjoint Monteils, accusé d'avoir manqué de sang-froid."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un drame dans une blanchisserie",
    "summary": "Un drame conjugal a éclaté rue François-de-Neufchâteau : un serrurier, en proie à une crise de folie, a poignardé son épouse avant de tenter de se donner la mort. Leur état inspire de vives inquiétudes.",
    "paragraphs": [
      "Un drame familial s'est déroulé rue François-de-Neufchâteau. Jean-Louis Tessier, un ouvrier serrurier sujet à des troubles nerveux, a poignardé sa femme, Mme Tessier, au cours d'une dispute d'une violence extrême.",
      "Après avoir perpétré cet acte, le mari a tenté de se suicider en se tailladant la gorge. Transportés d'urgence à l'hôpital Saint-Antoine, les deux époux se trouvent dans un état jugé très grave."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le crime de Corancez",
    "summary": "L'instruction sur le meurtre de Corancez progresse : la découverte d'une boucle d'oreille appartenant à la petite Flora dans les dépendances de Brierre constitue une pièce à conviction accablante pour l'inculpé.",
    "paragraphs": [
      "Les gendarmes de La Bourdinière poursuivent activement leurs recherches concernant le crime commis par Brierre. De nouvelles fouilles minutieuses ont été effectuées dans les dépendances de la propriété.",
      "La découverte fortuite d'une boucle d'oreille, identifiée comme appartenant à la petite Flora et trouvée à proximité immédiate du lieu où fut dissimulé le cadavre, constitue un élément capital pour l'accusation."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Idylle tragique à Argenteuil",
    "summary": "Au Cabaret artistique d'Argenteuil, un pacte de suicide a brisé une jeune vie : Jules Chapelle a succombé à ses blessures par balle, laissant sa compagne, Adrienne L., dans un état désespéré.",
    "paragraphs": [
      "Un jeune couple, composé de Jules Chapelle et d'Adrienne L., a tenté de mettre fin à ses jours au sein du Cabaret artistique d'Argenteuil. Le jeune homme a succombé peu après à ses blessures par balle, tandis que la jeune fille demeure dans un état jugé désespéré.",
      "Une missive retrouvée sur les lieux éclaire le mobile de ce geste fatal, révélant que les familles respectives s'opposaient farouchement à leur union, invoquant le trop jeune âge de M. Chapelle."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Affaire d'espionnage à Montluçon",
    "summary": "L'instruction contre Givonnet, accusé de livrer des secrets industriels à l'usine Krupp, se poursuit. Le prévenu persiste à nier toute remise de plans ou d'échantillons de ferro-chrome.",
    "paragraphs": [
      "L'interrogatoire du nommé Givonnet se poursuit avec rigueur concernant les soupçons d'espionnage industriel qui pèsent sur lui au profit des établissements Krupp. Le prévenu maintient ses dénégations, niant formellement avoir jamais transmis de plans confidentiels ou d'échantillons de ferro-chrome."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Fuite d'un fonctionnaire",
    "summary": "Le receveur de l'enregistrement de Vincennes, Élisée Laurent, a pris la fuite après avoir détourné des deniers publics. Ruiné par ses dettes de jeu, il laisse ses créanciers dans un profond désarroi.",
    "paragraphs": [
      "Le receveur de l'enregistrement de Vincennes, Élisée Laurent, a mystérieusement pris la fuite après la découverte de détournements de fonds publics, commis afin d'assouvir sa passion ruineuse pour le jeu et de couvrir diverses escroqueries.",
      "L'homme, qui entretenait un train de vie fastueux bien au-dessus de ses moyens, laisse derrière lui une situation financière obérée et de nombreuses créances impayées auprès de ses concitoyens de Vincennes."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Les détournements du fonctionnaire Laurent",
    "summary": "Un fonctionnaire, M. Laurent, a détourné les fonds publics. Malgré les alertes, il a mené grand train jusqu'à sa soudaine disparition, laissant présager un suicide avant une fête familiale.",
    "paragraphs": [
      "Le Petit Parisien rapporte qu'un fonctionnaire trouva facilement des dupes. Ne pouvant faire face aux engagements pris, il mit la main sur la caisse qui lui était confiée.",
      "Les détournements, commis peu de temps après son entrée en fonctions, furent pour la plupart dissimulés sur les droits de succession, très importants et fréquents dans le pays.",
      "À différentes reprises, des plaintes parvinrent au parquet contre le fonctionnaire, mais il n'y fut point donné suite. Il y a huit jours, une dénonciation précise fut faite à l'administration qui se décida à ouvrir une enquête.",
      "M. Laurent tint tête à l'orage et ne changea rien à ses habitudes. Mardi, il assistait à la revue de Vincennes, et mercredi, quand le contrôleur des finances arriva à son bureau, il tenait la banque dans une partie de baccara au cercle des Négociants. Rien, à ce moment, ne faisait croire à sa fuite.",
      "On croit ici que le fonctionnaire indélicat s'est suicidé. Son fils aîné fait aujourd'hui sa première communion et une fête avait été projetée à cette occasion."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Informations Politiques",
    "title": "Chambre des Députés : Tirage au sort des bureaux",
    "summary": "La séance de la Chambre des députés, présidée par M. Paul Deschanel, a été exclusivement consacrée au tirage au sort des bureaux chargés de l'élection de la commission du budget.",
    "paragraphs": [
      "La séance d'hier, ouverte à une heure sous la présidence de M. Paul Deschanel, n'a pas eu d'autre objet que le tirage au sort des bureaux qui doivent élire la commission du budget.",
      "Après la lecture du procès-verbal, ce tirage au sort a été effectué. M. le président a levé ensuite, à une heure cinq, la séance, qui a été renvoyée à jeudi."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "L'Affaire de Lur-Saluces",
    "summary": "Le Président de la République n'aura pas besoin de décret pour la Haute Cour concernant M. de Lur-Saluces. M. Fallières est habilité à la convoquer pour juger cette affaire liée au complot précédent.",
    "paragraphs": [
      "Selon les prévisions que nous avons données, le Président de la République n'aura pas à rendre de décret instituant une nouvelle Haute Cour pour juger M. de Lur-Saluces.",
      "Cette affaire n'étant que la suite du complot jugé par le Sénat, M. Fallières a qualité pour convoquer la Haute Cour sans décret du Président de la République.",
      "La Haute Cour comprendrait environ 157 membres. On s'abstiendrait de convoquer les sénateurs exclus au mois de janvier dernier. Par contre, les sénateurs exclus par suite d'absence, dont Marcel Habert, seraient admis au débat et au jugement devant la Haute Cour. M. Fallières s'occuperait officiellement de l'affaire par un rapport.",
      "Il laisserait alors les délais strictement nécessaires à la citation des témoins et la préparation de l'acte d'accusation et de la défense, laissant au procureur général et à ses substituts le soin de la Justice."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Ministère de la Marine : Démenti de conflit",
    "summary": "Le ministère de la Marine dément formellement les rumeurs de conflit entre le ministre et le chef d'état-major général. L'incident lié à une lettre confidentielle n'était qu'une simple question de service.",
    "paragraphs": [
      "Certains journaux ont annoncé qu'un conflit aurait surgi entre le ministre de la Marine et le chef d'état-major général au sujet d'une lettre trouvée dans le courrier. De conflit, il n'en a pas eu et il ne pouvait y en avoir.",
      "Une enveloppe portant l'adresse du ministre contenait une seconde enveloppe avec cette mention : « à ouvrir par le chef d'état-major seul ». Cette seconde enveloppe fut ouverte par le chef d'état-major général en présence du ministre ; elle renfermait une lettre adressée au ministre sur une question de service.",
      "Les bruits de démission du chef d'état-major se trouvent démentis par le simple exposé des faits."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "La Nouvelle Commission du Budget",
    "summary": "La Chambre a élu sa commission du budget pour 1901. M. Caillaux propose des mesures pour couvrir 43 millions de dépenses, tout en évitant les réformes complexes, tandis que des économies sont prônées.",
    "paragraphs": [
      "Après une courte séance pour la formation des onze bureaux de la Chambre, les députés ont élu les trente-trois membres de la commission qui aura pour mandat d'examiner le budget de 1901.",
      "La discussion dans les bureaux a porté sur les dispositions générales présentées par le ministre des Finances, M. Caillaux. Le cabinet a écarté toute réforme complexe pour éviter les douzièmes provisoires.",
      "Le budget comprend 43 millions de dépenses supplémentaires dues à l'application des lois récentes, notamment pour la défense navale, coloniale, et les crédits aux compagnies de chemins de fer.",
      "Pour faire face à ces dépenses, le cabinet escompte des plus-values de contributions indirectes et propose une taxe sur les raffineurs de pétrole brut.",
      "La commission comprend dix-sept nouveaux membres. La plupart des commissaires se sont prononcés pour l'ensemble des dispositions du nouveau budget, laissant la question de l'impôt sur le revenu à une commission spéciale présidée par M. Bouvier.",
      "Selon M. Mesureur, ancien président de la commission, la seule politique de la commission doit être une politique d'économies."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Sénat",
    "title": "Séance du mardi 21 mai 1901",
    "summary": "Le Sénat a poursuivi l'examen du projet de loi sur la santé publique, validant les mesures de vaccination et débattant de la salubrité de l'eau distribuée par la Compagnie des eaux de Suresnes.",
    "paragraphs": [
      "La séance est ouverte à trois heures sous la présidence de M. Fallières pour la suite du projet de loi sur la protection de la santé publique.",
      "Les articles 6 à 9, relatifs à la vaccination et à la désinfection, sont adoptés. MM. Strauss et Bassinet présentent un amendement portant sur le droit des communes à se pourvoir contre les décisions des conseils d'hygiène départementaux.",
      "M. Strauss attire l'attention sur la situation sanitaire de certaines communes alimentées en eau potable par la Compagnie des eaux de Suresnes, dont il juge l'eau polluée. Il demande la révision des contrats.",
      "M. Waldeck-Rousseau, président du Conseil, répond que la loi ne peut modifier les contrats existants et que les communes doivent recourir aux tribunaux. M. Strauss retire finalement son amendement.",
      "Le Sénat discute ensuite de la condition des chiffonniers et des modalités d'exécution de la loi sanitaire. La suite de la discussion est renvoyée à jeudi."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Mort du général de Launay et mouvements de troupes",
    "summary": "Le général baron de Launay est décédé. Parallèlement, les autorités militaires poursuivent leurs tournées d'inspection à Reims et le déploiement de troupes alpines dans le massif de l'Authion.",
    "paragraphs": [
      "Le général de division en retraite, baron de Launay, est mort hier à l'âge de soixante-treize ans. Il était grand-officier de la Légion d'honneur. Ses obsèques auront lieu samedi à l'église de la Madeleine.",
      "À Reims, le général Kessler a effectué une tournée d'inspection et mené des manœuvres avec la garnison.",
      "Dans les Alpes, le 23e bataillon de chasseurs alpins a quitté Grasse pour la haute montagne. Divers détachements se mettent en route, notamment pour occuper la caserne de Peira, située dans le massif de l'Authion."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "International",
    "title": "Guerre au Transvaal",
    "summary": "Les hostilités persistent au Transvaal : entre engagements dans le Namaqualand, activités des commandos boërs et bilan officiel des opérations britanniques communiqué par le général Kitchener.",
    "paragraphs": [
      "Une série d'engagements est signalée. Dans le Namaqualand, les Boërs ont attaqué des patrouilles anglaises à Kenhardt. À Doornkop, le commando de Malan a fait prisonnier une partie d'un détachement anglais.",
      "Dans l'est de la colonie du Cap, les Boërs ont été renforcés par le commando de Kruitzinger. Le bruit court que Dewet est à leur tête.",
      "Le général Kitchener télégraphie les résultats des opérations de la semaine passée : 19 Boërs tués, 14 blessés, 114 prisonniers et la saisie de nombreux fusils et chevaux.",
      "Les pertes anglaises incluent deux artilleurs tués et neuf blessés lors d'une explosion accidentelle à Boshof."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "International",
    "title": "Crise en Chine",
    "summary": "Les négociations diplomatiques sur l'indemnité chinoise sont temporairement suspendues, tandis que le gouvernement impérial procède à une réorganisation de ses structures administratives.",
    "paragraphs": [
      "Les négociations sur l'indemnité sont interrompues en attendant les instructions des gouvernements. Les ministres espèrent une issue favorable pour la fin juin.",
      "Le gouvernement chinois réforme le Tsoung-Li-Yamen en un conseil des affaires étrangères. Par ailleurs, des rumeurs font état d'une proposition de division de la Chine en cinq royaumes, attribuée à l'Angleterre."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "International",
    "title": "Troubles et élections en Espagne",
    "summary": "L'Espagne connaît une période d'agitation sociale marquée par des grèves à Barcelone et des violences locales, alors que les résultats électoraux confirment la prédominance des libéraux.",
    "paragraphs": [
      "Des troubles sont signalés à Jerez de los Caballeros, Carmona et Looches, avec des incidents violents contre les autorités locales.",
      "Les résultats électoraux donnent une majorité aux libéraux avec 184 sièges, suivis des conservateurs (70 sièges) et d'autres fractions politiques.",
      "À Barcelone, des grèves et des collisions entre ouvriers sont rapportées."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie du couvent des Dames de l'Assomption à Saint-Dizier",
    "summary": "Un incendie dévastateur a détruit le couvent des Dames de l'Assomption à Saint-Dizier. Si aucune victime n'est à déplorer parmi les élèves, les dégâts matériels sur la toiture et la chapelle atteignent 500 000 francs.",
    "paragraphs": [
      "Un incendie a complètement détruit, ce matin, le couvent des Dames de l'Assomption à Saint-Dizier. Le feu a pris naissance dans les cuisines avant de se propager rapidement à toute la toiture du bâtiment.",
      "Fort heureusement, toutes les élèves ont pu être sauvées à temps et recueillies par les habitants des maisons voisines. La chapelle, quant à elle, a été sérieusement endommagée. Le préjudice matériel est estimé à 500 000 francs."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Social",
    "title": "Exposition canine aux Tuileries",
    "summary": "La Société centrale pour l'amélioration des races de chiens en France expose 1 300 spécimens aux Tuileries. L'événement confirme les progrès de l'élevage français, rivalisant désormais avec la sélection anglaise.",
    "paragraphs": [
      "Plus de 1 300 chiens de toute race sont actuellement exposés sur la terrasse de l'Orangerie du jardin des Tuileries par la Société centrale pour l'amélioration des races de chiens en France.",
      "L'exposition souligne les progrès remarquables de l'élevage français, notamment pour le chien de berger, devenu un animal particulièrement prisé et titré. Des races comme l'épagneul de Pont-Audemer, les braques et les bassets sont également mises à l'honneur.",
      "Les éleveurs français commencent aujourd'hui à rivaliser avec leurs homologues anglais, bien que ces derniers dominent encore le marché du luxe canin. L'événement attire une foule de visiteurs curieux de découvrir cette diversité, des plus grandes races aux plus petites."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Arts et Spectacles",
    "title": "Théâtre : Critiques des représentations",
    "summary": "Les scènes parisiennes connaissent un vif succès avec « Amoureuse », « Mon enfant » et « La Coupable ». M. Ambroise Janvier est toutefois questionné sur ses choix dramaturgiques complexes.",
    "paragraphs": [
      "Au Théâtre Français, on joue avec succès « Amoureuse » et « Mon enfant ». Au Gymnase, c'est « La Coupable » qui est à l'affiche. La presse salue unanimement la qualité du jeu des acteurs, particulièrement dans les rôles principaux.",
      "M. Ambroise Janvier, auteur de « Murniau » et « Mon enfant », est toutefois critiqué pour son penchant à mettre en scène des caractères d'exception, parfois trop complexes ou énigmatiques, au détriment de personnages plus naturels."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Chronique Théâtrale",
    "title": "Critique théâtrale de Montcomet",
    "summary": "La nouvelle œuvre de M. Janvier peine à convaincre le critique. Entre intrigue politique et passions, l'éparpillement du récit et le jeu terne des interprètes dessinent une vision bien sombre du monde.",
    "paragraphs": [
      "M. Janvier nous présente une pièce où l'homme de lettres et le compositeur Legru gravitent autour de la duchesse de Villeguérac et de l'artiste peintre Mme Hélène Sterck. L'intrigue mélange passions, trahisons, élections politiques et jalousies amoureuses.",
      "La meilleure preuve que ces deux actions parallèles ne se confondent pas harmonieusement, c'est qu'il est possible de les raconter séparément. L'intérêt, par suite, se dissémine et s'éparpille. M. Janvier manifeste une tendance constante à ne voir partout que le vice.",
      "Les interprètes, je dois le dire, n'ont guère servi l'auteur. Ils ont joué mollement, enterrés, las, fatigués. Ne nommons personne, cela vaudra mieux."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "Référendum des Prévoyants de l'Avenir",
    "summary": "Le référendum des Prévoyants de l'Avenir confirme une nette avance pour le projet Chatelus. Avec 17 125 voix contre 4 128, il devance largement le projet Houtteville dans les 524 sections dépouillées.",
    "paragraphs": [
      "La journée d'hier n'a apporté aucune modification notable dans les résultats partiels du référendum des Prévoyants de l'Avenir. Les partisans du projet Chatelus conservent une avance considérable ; les partisans du projet Houtteville ne représentent à peine que le cinquième des votants.",
      "À minuit, les résultats du scrutin étaient connus dans 524 sections. Sur l'ensemble des suffrages exprimés, le projet Chatelus a recueilli 17 125 voix contre seulement 4 128 voix accordées au projet Houtteville."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Double meurtre entre beaux-frères à Nauroy",
    "summary": "À Nauroy, l'épicier Eugène Berlemont a abattu ses deux beaux-frères, Léon et Émile Bas, lors d'une violente dispute d'intérêt. Émile est mort sur le coup, Léon est grièvement blessé. Le meurtrier s'est livré à la gendarmerie.",
    "paragraphs": [
      "Un double meurtre a été commis avant-hier soir à Nauroy. Un épicier, Eugène Berlemont, originaire de la commune, s'est rendu dans cette localité pour demander à ses beaux-frères, Léon et Émile Bas, avec qui il vivait en mauvaise intelligence, des explications sur des questions d'intérêt financier.",
      "Il rencontra Léon Bas dans un estaminet. Après un violent corps-à-corps, Berlemont sortit un revolver, tira sur Léon, puis sur Émile qui venait lui reprocher le crime. Émile Bas fut tué sur le coup et Léon demeure dans un état très grave. Le meurtrier s'est constitué prisonnier à la gendarmerie peu après les faits."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Meurtre mystérieux de deux septuagénaires à Prignac-et-Marcamps",
    "summary": "Le mystère demeure entier sur l'assassinat des époux Renard à Prignac-et-Marcamps. La piste du vol est privilégiée par les autorités, mais les recherches de l'assassin, qui n'a laissé aucune trace, restent pour l'heure infructueuses.",
    "paragraphs": [
      "Le plus profond mystère continue à planer sur le meurtre de Prignac-et-Marcamps. On croit, sans toutefois en avoir la certitude, qu'une importante somme en billets de banque aurait disparu, faisant du vol le mobile probable de l'assassinat des époux Renard.",
      "L'assassin semble avoir agi seul, prenant toutes les précautions nécessaires pour ne laisser aucune trace derrière lui. Les recherches restent, pour l'instant, sans résultat concret et les époux Renard ont été inhumés ce matin."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Chronique Échos",
    "title": "Échos et nouvelles diverses",
    "summary": "Le Président de la République honore le quarantenaire du Jardin d'Acclimatation. Mme Loubet visite la crèche Charles Floquet, tandis que le Cercle Parisien annonce la date de son prochain banquet annuel.",
    "paragraphs": [
      "Le Président de la République assistera aujourd'hui au quarantenaire de la fondation du Jardin d'Acclimatation.",
      "Mme Loubet a visité hier après-midi la crèche Charles Floquet, où elle a aimablement distribué des jouets aux enfants.",
      "Le banquet annuel du Cercle Parisien de la Ligue française de l'enseignement aura lieu le jeudi 23 mai prochain au restaurant de la Terrasse."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Victime de son courage dans la rue des Bourdonnais",
    "summary": "Rue des Bourdonnais, la marchande Sophie Heymann a été mortellement blessée en tentant de désarmer un forcené qui tirait sur des passants. L'agresseur, l'ébéniste Émile Husson, a été appréhendé par les autorités.",
    "paragraphs": [
      "L'agent de la sûreté Lecointe, ayant entendu un coup de feu rue des Bourdonnais, a découvert un individu tirant sur un groupe de porteurs. Mme Sophie Heymann, dite Rozier, marchande des quatre-saisons, s'est courageusement jetée sur l'agresseur pour tenter de le désarmer.",
      "L'individu a alors tiré un troisième coup qui a atteint mortellement la malheureuse femme. Le forcené, un ouvrier ébéniste nommé Émile Husson, a été arrêté et aussitôt conduit au dépôt."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un fou dangereux arrêté rue Bolivar",
    "summary": "L'individu Paul Leroyer, récemment sorti d'un asile d'aliénés, a été appréhendé rue Bolivar après avoir menacé des gardiens de la paix avec un revolver. Il a été conduit à l'infirmerie du dépôt.",
    "paragraphs": [
      "Un individu, Paul Leroyer, a abordé des gardiens de la paix en affirmant avec incohérence qu'un homme venait de se pendre. Il a soudainement sorti un revolver et proféré des menaces avant d'être prestement désarmé par les agents.",
      "Il a été établi que Leroyer sortait depuis huit jours à peine d'un asile d'aliénés. Il a été dirigé sur l'infirmerie spéciale du dépôt pour y recevoir les soins nécessaires."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide d'une mère à Bercy",
    "summary": "À Bercy, l'épouse d'un ouvrier mécanicien, en proie à un délire de persécution, a mis fin à ses jours par pendaison en l'absence de ses enfants. Le mari n'a pu que constater le drame à son retour.",
    "paragraphs": [
      "Madame D., épouse d'un ouvrier mécanicien, souffrait depuis quelque temps de troubles nerveux manifestés par un délire de persécution. Hier, profitant de l'absence de ses enfants, elle s'est pendue dans sa chambre.",
      "Son mari, rentrant à son domicile, a découvert l'horrible scène et a tenté en vain de ranimer la malheureuse. Les enfants, témoins traumatisés de cette disparition, ont été confiés à des voisins dans une profonde douleur."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'homme coupé en morceaux à Saint-Ouen",
    "summary": "L'enquête sur le meurtre atroce de Saint-Ouen progresse. La police judiciaire, par l'intermédiaire de M. Cochefert, vérifie les déclarations d'un enfant de sept ans témoin d'un assassinat brutal.",
    "paragraphs": [
      "La justice a repris l'enquête sur l'affaire de l'homme coupé en morceaux, suite à la déclaration singulière d'un enfant de sept ans à Saint-Ouen, affirmant avoir assisté à un assassinat commis à coups de battoir.",
      "M. Cochefert s'est rendu sur les lieux hier soir afin de vérifier la véracité des dires de l'enfant et recueillir d'éventuels indices supplémentaires sur ce crime macabre."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide au pont des Buttes-Chaumont",
    "summary": "Un homme s'est donné la mort en se jetant du pont des Buttes-Chaumont. Aucun document n'a permis d'identifier le suicidé, dont le corps a été transféré à la Morgue par les autorités.",
    "paragraphs": [
      "Hier matin, un homme s'est précipité dans le vide depuis le pont de briques du parc des Buttes-Chaumont. La mort fut instantanée. Aucun papier permettant son identification n'ayant été trouvé sur le défunt, le corps a été transporté à la Morgue."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vol confondu par un bouton",
    "summary": "Trois malfaiteurs ont été appréhendés pour le cambriolage du domicile de Mme Deroudelle. La culpabilité de l'un d'eux, Clovis Pelier, a été établie grâce à un bouton de veston retrouvé sur les lieux.",
    "paragraphs": [
      "Trois individus ont été arrêtés pour le vol commis chez Mme Deroudelle, artiste peintre. L'un d'eux, nommé Clovis Pelier, a été formellement confondu par un bouton de veston identique à celui retrouvé sous le coffre-fort éventré par M. Thierry, secrétaire du commissariat."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Nouvelles de la banlieue parisienne",
    "summary": "Une série d'accidents et de méfaits frappe la banlieue : incendie à Courbevoie, chute mortelle à Clichy, agression sanglante et cambriolages au Vésinet et à Chatou témoignent d'une actualité chargée.",
    "paragraphs": [
      "À Courbevoie, un incendie dans les ateliers de nettoyage Phion et Cie a causé des dégâts matériels importants après l'explosion accidentelle d'un récipient de benzine.",
      "À Clichy, un ouvrier maçon, Auguste Mestres, est tombé d'un échafaudage boulevard Victor-Hugo et s'est fracturé le crâne. Par ailleurs, une jeune femme de dix-sept ans, Julie Lemonnier, a blessé son amant d'un coup de couteau au cours d'une dispute.",
      "Au Vésinet, des malfaiteurs ont cambriolé une propriété inhabitée boulevard Carnot. À Chatou, des cambrioleurs ont dérobé de l'argent et un dentier en or dans un établissement de la commune."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Faits divers",
    "title": "Accident mortel d'un enfant à Villers-Cotterêts",
    "summary": "À Villers-Cotterêts, le jeune Henri Soupaut, âgé de six ans, est mort tragiquement après qu'un tonneau d'eau sur roues, avec lequel il s'amusait, a basculé sur lui lors d'un chantier de construction.",
    "paragraphs": [
      "Un enfant de six ans, le petit Henri Soupaut, jouait avec sa sœur près d'un tonneau monté sur roues, servant au transport de l'eau sur un chantier de construction, quand, soudain, le tonneau bascula et tomba sur le pauvre petit.",
      "On le releva les jambes brisées et les intestins perforés ; deux heures après, il succombait."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Faits divers",
    "title": "Suicide d'un cordonnier à Amiens",
    "summary": "Menacé d'expulsion, Louis Tabary, cordonnier à Amiens, a tenté d'incendier son logement avant de mettre fin à ses jours par arme à feu. Les secours ont découvert son corps lors de l'extinction du sinistre.",
    "paragraphs": [
      "Un commencement d'incendie se déclarait, cette nuit, au domicile du nommé Louis Tabary, âgé de soixante-deux ans, cordonnier, rue du Général-Priant.",
      "Au cours de l'extinction du feu, les pompiers ont découvert le corps inanimé de Tabary, qui s'était fait sauter la cervelle avec un vieux pistolet.",
      "Avant de se suicider, le cordonnier avait allumé trois foyers dans son habitation, mais les secours, arrivés rapidement, ont empêché la destruction totale des lieux. L'homme venait d'être condamné à quitter son logement à la suite d'un non-paiement de loyer."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Sports",
    "title": "La course Paris-Amiens",
    "summary": "La quatrième édition de la course cycliste Paris-Amiens aura lieu dimanche prochain, jour de la Pentecôte. L'épreuve est ouverte aux bicyclettes et tandems, sans entraîneurs.",
    "paragraphs": [
      "Pour la quatrième fois, la course Paris-Amiens se courra dimanche prochain, jour de la Pentecôte. Il est inutile d'insister sur le succès que remporte cette épreuve de longue haleine auprès des amateurs qui ont ainsi leur petit Paris-Roubaix.",
      "Notons, en félicitant les organisateurs, que le montant des engagements a été ramené cette année au prix de 1 franc pour les bicyclettes et de 5 francs par équipe pour le critérium de tandems.",
      "Considérant les efforts tentés par le Cyclo-Club de Paris pour mener à bien l'organisation d'une épreuve aussi importante et pour prouver l'intérêt qu'il porte aux amateurs, le comité directeur de l'U.V.P. a, dans sa dernière séance, voté une somme de 100 francs pour l'achat d'un objet d'art à attribuer au vainqueur de Paris-Amiens.",
      "Les autres coureurs auront à choisir d'après leur classement à l'arrivée parmi les nombreux prix offerts par le Cyclo-Club. Cette course comprendra deux catégories : bicyclettes et tandems. Elle se fera sans entraîneurs."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Éducation",
    "title": "Une école de wattmen à New-York",
    "summary": "New-York a ouvert une école spécialisée pour la formation des conducteurs de tramways électriques. Dirigée par un ingénieur, elle dispense une instruction technique rigoureuse sur voie d'essai.",
    "paragraphs": [
      "C'est aux États-Unis que revient l'idée d'avoir organisé la première école de conducteurs électriciens, et quand on pense au formidable développement des street railways (tramways à traction mécanique) depuis quelques années en Amérique, on est plutôt étonné d'apprendre que l'institution dont il s'agit a été ouverte seulement il y a trois mois.",
      "Elle se trouve à New-York, et rien n'a été négligé pour que l'instruction qu'y reçoivent les futurs wattmen soit aussi complète que possible. Le directeur de l'école, M. Kane, un ingénieur fort distingué, appartient à la Metropolitan Street Railway Company, qui possède les trois quarts du réseau urbain de New-York.",
      "Les cours ont lieu deux fois par semaine et durent en général un mois et demi. Avant d'être admis à l'école des wattmen, les jeunes gens, âgés de dix-sept ans au minimum, doivent subir un examen d'aptitude physique extrêmement minutieux. Une voie d'essai, avec aiguillages, courbes et croisements, a été disposée dans une vaste cour voisine, où circulent des moteurs de différents modèles. Enfin, un atelier sert aux cours pratiques de démontage et de réparation."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Courrier des théâtres",
    "title": "Actualités théâtrales parisiennes",
    "summary": "Au programme : reprise de Falstaff à l'Opéra-Comique, préparatifs du centenaire de Victor Hugo aux Burgraves, visite de l'ambassadeur de Chine au Châtelet et décès de l'artiste M. Cobalet.",
    "paragraphs": [
      "La reprise de Falstaff aura lieu, à l'Opéra-Comique, samedi prochain. À l'occasion de cette reprise, le spectacle se terminera par une cérémonie en l'honneur de Verdi. Une pièce de vers, écrite spécialement pour la circonstance par M. Edmond Haraucourt, sera dite par Mme Segond-Weber, de la Comédie-Française.",
      "La reprise des Burgraves à la Comédie-Française paraît arrêtée pour le 26 février à l'occasion du centenaire de la naissance de Victor Hugo. MM. Jules Claretie et Paul Meurice s'occupent d'ores et déjà de la distribution.",
      "Hier soir, au Châtelet, l'ambassadeur de Chine à Paris assistait à la représentation du Tour du Monde. Les deux fils de l'ambassadeur manifestèrent le désir de visiter les coulisses et demandèrent à complimenter le joyeux Passe-Partout-Pougaud, qu'ils ont appelé le fong-chouë (bon génie) du Châtelet.",
      "On annonce la mort de M. Cobalet, artiste ayant longtemps fait partie de la troupe de l'Opéra-Comique. Cobalet créa le rôle de Nikalanta dans Lakmé, de Léo Delibes. Il meurt âgé seulement de quarante-sept ans."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Chronique culturelle",
    "title": "Activités au Petit Palais",
    "summary": "Le Petit Palais confirme son succès auprès du jeune public avec des auditions musicales et des représentations chorégraphiques de haut vol, portées par de jeunes virtuoses et les élèves de l'Opéra.",
    "paragraphs": [
      "L'affluence des enfants augmente de jour en jour au Petit Palais. Beaucoup d'entre eux prennent part à des concours et à des auditions musicales.",
      "Aujourd'hui, deux bambins de sept ans, Kun Arpard, le violoniste prodige, et Madeleine Garudet, se feront entendre dans la galerie des Fêtes, et la petite classe de l'Opéra dansera, sous la direction de Mme Bernay, le divertissement de la Source. Pendant ce temps, au théâtre du rez-de-chaussée, Mme Chéné dirigera un concert exécuté par de jeunes artistes."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Courrier orphéonique",
    "title": "Festivals et concours musicaux",
    "summary": "Le calendrier des festivités musicales s'ajuste : festival à Bagnolet, modifications à Soulac-sur-Mer, annulation du concours de Douai et célébration du cinquantenaire de la chorale clermontoise.",
    "paragraphs": [
      "Dimanche prochain aura lieu à Bagnolet (Seine) un festival de musiques d'harmonie et de fanfares. Des modifications ont été apportées au règlement du concours ouvert à Soulac-sur-Mer (Gironde) les 7 et 8 juillet.",
      "Le concours international projeté à Douai pour les 7 et 8 juillet n'aura pas lieu, le comité n'ayant réuni qu'un nombre d'adhésions insuffisant.",
      "L'Union musicale de Charly (Rhône) organise pour le dimanche 30 juin un festival musical et de gymnastique. La chorale clermontoise vient de fêter son cinquantenaire avec la participation du Cercle orphéonique d'Amiens et du Groupe de Paris."
    ]
  }
];
