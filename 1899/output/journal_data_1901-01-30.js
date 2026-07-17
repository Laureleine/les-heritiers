// Date: 1901-01-30
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-01-30 (Version Restaurée, 45 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Feuilleton",
    "title": "Miss Tempête",
    "summary": "Le Petit Parisien annonce la parution imminente de 'Miss Tempête', roman inédit de Paul Bertnay. Une œuvre dramatique explorant les tourments de l'innocence face à la faute et la puissance du dévouement féminin.",
    "paragraphs": [
      "Le Petit Parisien commencera prochainement la publication de Miss Tempête, grand roman inédit écrit par Paul Bertnay.",
      "Miss Tempête constitue une étude profondément dramatique des suites funestes d'une faute retombant sur un innocent.",
      "Le récit est porté par des figures de femmes admirables qui y insufflent l'amour, la passion, la tendresse et, par-dessus tout, un dévouement héroïque."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Chronique",
    "title": "Les Théâtres du Peuple",
    "summary": "Jean Frollo retrace l'éveil du théâtre populaire à Paris, soulignant la nécessité pour cette initiative privée de se détacher des structures étatiques et des comités pour privilégier l'action concrète.",
    "paragraphs": [
      "Il y a un peu plus d'un an, quelques jeunes gens conçurent l'audacieux projet d'ouvrir à Paris un théâtre populaire, c'est-à-dire une scène qui coopérât tout ensemble à l'éducation du peuple et à son délassement.",
      "Les promoteurs du futur théâtre populaire ont fini par le comprendre : ils ne peuvent plus compter que sur eux-mêmes.",
      "L'un des plus ardents défenseurs de cette cause, M. Lucien Besnard, déclarait : « Que les jeunes partisans du théâtre populaire renoncent donc aux comités, aux vastes pensées, aux combinaisons savamment agencées ; qu'ils perdent le préjugé du théâtre modèle, de cette œuvre définitive sortant toute armée de leurs cerveaux orgueilleux ; qu'ils travaillent obscurément. »",
      "Le théâtre populaire, que quelques idéalistes rêvaient de voir consacrer par la tutelle de l'État et qui doit demeurer une œuvre d'initiative privée, de libre et spontané développement, n'a pas attendu, pour se manifester en province comme à Paris, que l'estampille officielle lui soit accordée.",
      "Jean Frollo."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille",
    "summary": "Dans un cadre printanier, la baronne de Prayssac, femme charmante et soucieuse, reçoit la visite de son vieil ami, l'abbé d'Aulnay, au sein de sa demeure.",
    "paragraphs": [
      "La baronne de Prayssac n'était plus une toute jeune femme, mais, à l'instar de Rosé Broudin, elle demeurait une femme jeune encore.",
      "Elle n'était pas simplement belle ; elle était mieux que cela : elle était charmante.",
      "Elle était alors sous l'empire d'une vive préoccupation qui l'absorbait tout entière.",
      "Au bout d'un instant, elle se leva et alla se poster à la fenêtre donnant sur son jardin, frais et beau de toute la jeunesse de son printemps.",
      "M. l'abbé d'Aulnay, vieil ami de la famille, apparut alors devant elle."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des Ministres",
    "summary": "Sous la présidence de M. Loubet, le Conseil des ministres a examiné la loi sur les associations et validé le dépôt de projets relatifs à la taxe du pain et à l'enseignement agricole.",
    "paragraphs": [
      "Les ministres se sont réunis, hier matin, à l'Élysée, sous la présidence de M. Loubet.",
      "Le conseil s'est entretenu de la discussion relative à la loi sur les associations, actuellement en cours à la Chambre.",
      "Le ministre de l'Agriculture a été autorisé à déposer un projet de loi portant sur la taxe du pain, ainsi qu'un autre projet concernant l'enseignement départemental et spécial de l'agriculture."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "International",
    "title": "En Angleterre - Funérailles de la Reine",
    "summary": "Le Roi est arrivé à Londres. En hommage à la défunte reine Victoria, le 2 février, jour des funérailles, sera marqué par une suspension totale des activités bancaires et commerciales.",
    "paragraphs": [
      "Le Roi est arrivé à Londres-Victoria à trois heures, accompagné des ducs de Cambridge et de Teck.",
      "Par ordre de Sa Majesté, toutes les banques seront fermées et les affaires seront suspendues le 2 février, jour fixé pour les funérailles de la reine Victoria.",
      "L'élaboration du programme des obsèques se poursuit activement. Le cortège funèbre, partant d'Osborne-House pour rejoindre le quai de Trinity-House, quittera la résidence d'Osborne par la porte réservée à la famille royale."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "International",
    "title": "Le Président du Reichstag",
    "summary": "Le comte Ballestrem, président du Reichstag, exprime son vive émotion suite aux reproches de l'empereur concernant le maintien de la séance parlementaire au lendemain du décès de la reine d'Angleterre.",
    "paragraphs": [
      "Le président du Reichstag, le comte Ballestrem, a été très sensible aux reproches de l'empereur, motivés par le fait que le Reichstag, au lendemain de la mort de la reine d'Angleterre, n'a pas cru devoir lever la séance."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Nécrologie",
    "title": "Mort de M. Henri de Bornier",
    "summary": "Le poète et académicien Henri de Bornier, célèbre auteur de « La Fille de Roland », est décédé dans sa soixante-seizième année, emporté par une grippe contractée deux semaines auparavant.",
    "paragraphs": [
      "M. Henri de Bornier est mort dans la nuit de lundi à mardi, emporté par la grippe qui, depuis deux semaines environ, l'avait obligé à cesser tout travail.",
      "Henri de Bornier était né le 25 décembre 1825 à Lunel, dans le département de l'Hérault. Il était entré, depuis un mois, dans sa soixante-seizième année.",
      "Le nom du vicomte Henri de Bornier, poète et académicien, est surtout connu par le grand succès de la Fille de Roland."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Naufrage d'une Barque de Pêche",
    "summary": "Une violente tempête dans le golfe de Gascogne a causé la mort de vingt et un pêcheurs, plongeant de nombreuses familles dans le deuil avec seize veuves et quarante orphelins.",
    "paragraphs": [
      "Un épouvantable malheur vient de fondre sur nos vaillantes populations maritimes. Vingt et un pêcheurs ont trouvé une mort affreuse dans les flots soulevés par la violente tempête qui fait rage dans tout le golfe de Gascogne.",
      "Ce sinistre maritime fait, d'un coup, seize veuves et quarante orphelins."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Tentative d'assassinat à Tours",
    "summary": "M. Verger, un rentier de Saint-Pierre-des-Corps, a été violemment agressé à son domicile par deux individus. Malgré la gravité des blessures, ses jours ne sont heureusement pas en danger.",
    "paragraphs": [
      "Une nouvelle tentative d'assassinat vient d'être commise aux portes de Tours, dans la commune de Saint-Pierre-des-Corps. Un rentier de cette localité, M. Verger, a été assailli dans sa maison par deux individus.",
      "Les blessures de la victime, quoique très graves, ne mettent pas ses jours en danger."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Guerre",
    "title": "La Guerre au Transvaal",
    "summary": "Le roi Édouard VII a été proclamé seigneur suprême du Transvaal à Pretoria, une décision qui paraît singulière alors que les Boërs menacent le Natal et Capetown.",
    "paragraphs": [
      "Une dépêche de Pretoria, datée du 28 janvier, nous apprend que le roi Édouard VII a été proclamé dans cette ville seigneur suprême du Transvaal.",
      "Cette proclamation, venant au moment même où les Boërs menacent Capetown et envahissent le Natal, territoires anglais, paraîtra au moins bizarre aux esprits impartiaux."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Social",
    "title": "Grève des employés du Métropolitain",
    "summary": "La grève des employés du Métropolitain, décidée cette nuit, paralyse le réseau. Malgré une délégation envoyée auprès de la direction de la Compagnie, aucun accord n'a pu être trouvé avec MM. Maréchal et Desnard.",
    "paragraphs": [
      "La grève des employés du Métropolitain a été décidée la nuit dernière. Ce mouvement a privé les Parisiens d'un moyen de transport ayant conquis rapidement son droit de cité.",
      "La délégation avait été reçue samedi matin par MM. Maréchal, directeur de la Compagnie, et Desnard, président du conseil d'administration."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Social",
    "title": "Grève des employés du Métropolitain : constitution du syndicat et premières décisions",
    "summary": "Le syndicat est constitué et une commission exécutive nommée. Sur 731 votants, 505 se sont prononcés pour la grève. Le mouvement est désormais officiellement organisé pour soutenir les revendications du personnel.",
    "paragraphs": [
      "Le bureau définitif du syndicat se trouve constitué de la façon suivante : MM. Poignant, Giraud, Tesche, Guéguen, Le Leroy, Mouly, Imbert, Roussel, Simonin, Bergeron, Blanchard, Coste, Boguet et Mme Thiéfault. Tous sont élus à la presque unanimité.",
      "MM. Hatton, Gojperty, Laiftoaj, Forment et Juerre sont désignés pour former la commission de contrôle.",
      "Sur 731 votants, il y a eu 668 suffrages exprimés ; pour la grève 505 voix, contre 163, blancs et nuls. Le sort en est jeté et la résistance s'organise ; une commission exécutive de douze membres est nommée par acclamation.",
      "Les ouvriers et employés du Métropolitain de Paris, réunis dans la nuit du 28 au 29 janvier au nombre de 731, remercient les camarades Guérard, Devitte, Vrhemin et Moreau ainsi que les membres de la presse."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Social",
    "title": "Conséquences directes de la grève",
    "summary": "L'arrêt total du Métropolitain provoque un report massif des usagers vers les tramways et omnibus. Déjà surchargés, ces modes de transport subissent un encombrement critique sur toutes les lignes parisiennes.",
    "paragraphs": [
      "Par petits groupes, les employés du Métropolitain rentrent chez eux sans incident après plus de vingt-quatre heures sur pied.",
      "Dès les premières heures du jour, la compagnie avait fait apposer à l'entrée des gares une petite affiche manuscrite annonçant que les services étaient momentanément interrompus. En réalité, aucun train n'a circulé dans la journée d'hier.",
      "Tramways et omnibus ont été littéralement pris d'assaut par les voyageurs privés de ce moyen de locomotion. L'encombrement a été d'autant plus grand que les services des lignes Hôtel de Ville-Porte Maillot, Étoile-Palais-Royal, gare de Lyon-Saint-Philippe du Roule, Montreuil-Châtelet et Vincennes-Louvre étaient déjà réduits."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Social",
    "title": "Un manifeste des employés",
    "summary": "Face aux méthodes administratives jugées excessives de la Compagnie et devant le refus de toute négociation, le personnel du Métropolitain a voté la grève générale jusqu'à la satisfaction totale de ses demandes.",
    "paragraphs": [
      "La commission exécutive a rédigé un appel affiché dans la soirée. Dans une première réunion tenue le 26 janvier, diverses revendications avaient été formulées suite à des procédés excessifs de la part de l'administration.",
      "En présence du refus formel de la compagnie, le personnel a voté la grève générale qui sera maintenue jusqu'à acceptation des conditions posées. Les employés expriment leurs regrets de priver la population parisienne de ce moyen de locomotion."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Social",
    "title": "La réunion de l'après-midi des grévistes",
    "summary": "Réunis à la Bourse du travail, les grévistes ont formulé quatre exigences : commissionnement, retraites, avancement régulier et prime pour l'Exposition universelle. Des délégations ont été dépêchées auprès des autorités.",
    "paragraphs": [
      "À deux heures, les employés se retrouvent à la Bourse du travail. On commente la perquisition pratiquée au domicile de M. Hache, contrôleur de route, qui s'est révélée infondée.",
      "L'assemblée décide d'envoyer une délégation auprès du conseil d'administration et une autre auprès du conseil municipal et du préfet de la Seine.",
      "La délégation de l'Hôtel de Ville, reçue par M. Escudier, vice-président du conseil municipal, annonce une promesse d'intervention officieuse. Les revendications sont résumées en quatre points : commissionnement, inscription à la caisse des retraites, réglementation de l'avancement et allocation supplémentaire pour l'Exposition."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Social",
    "title": "Débats en soirée sur les propositions de la Compagnie",
    "summary": "Malgré l'ouverture de la Compagnie du Métropolitain, qui reconnaît le syndicat et concède certaines avancées, la grève se poursuit, les ouvriers ayant repoussé toute reprise immédiate du travail en fin de soirée.",
    "paragraphs": [
      "En soirée, les délégués ont rencontré MM. Besnard et Maréchal, représentants de la compagnie. La direction reconnaît désormais le syndicat, abaisse la durée du stage à un an et accepte le paiement des heures supplémentaires.",
      "Cependant, la grève est maintenue, ces propositions ne satisfaisant pas entièrement les ouvriers. La reprise du travail a été finalement repoussée par l'assemblée."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique",
    "title": "Une question au Préfet de la Seine",
    "summary": "M. Labusquière s'apprête à interpeller le préfet de la Seine concernant les causes de la grève et l'absence de réquisition du personnel pour assurer l'exploitation en régie du service.",
    "paragraphs": [
      "M. Labusquière va questionner le préfet de la Seine sur les causes profondes de la grève et demander pourquoi le personnel n'a pas été réquisitionné afin d'assurer l'exploitation en régie du service."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Économie",
    "title": "La position de la Compagnie du Métropolitain",
    "summary": "La Compagnie du Métropolitain durcit sa position : elle menace de licenciement les grévistes n'ayant pas repris leur poste sous vingt-quatre heures et organise activement le recrutement de remplaçants.",
    "paragraphs": [
      "La compagnie se montre optimiste et menace de considérer comme démissionnaires les employés n'ayant pas repris leur travail sous vingt-quatre heures. Elle envisage de recruter parmi les employés des tramways ou les anciens agents des transports de l'Exposition, ayant déjà reçu plus de douze cents demandes."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Marine",
    "title": "Écoles professionnelles de la Marine",
    "summary": "Le ministre de la Marine instaure des écoles professionnelles afin de former des mécaniciens et canonniers qualifiés, en recrutant dès l'âge de treize ans les enfants des gens de mer.",
    "paragraphs": [
      "Le ministre de la Marine a signé un décret pour l'organisation d'écoles professionnelles maritimes visant à former des mécaniciens, des torpilleurs et des canonniers dûment instruits.",
      "Le recrutement actuel ne fournissant pas un personnel suffisamment qualifié en physique et en mécanique, la Marine créera des écoles accueillant des enfants dès treize ou quinze ans, prioritairement issus de familles de marins ou d'ouvriers des arsenaux."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Marine",
    "title": "Le sous-marin « Le Français »",
    "summary": "Le nouveau sous-marin « Le Français », long de trente-six mètres et doté d'une propulsion électrique, a été mis à l'eau avec succès à Cherbourg pour un coût total de 400 000 francs.",
    "paragraphs": [
      "Le sous-marin « Le Français » a été mis à l'eau à Cherbourg avec succès. Long de trente-six mètres, il est propulsé par un moteur électrique et doté d'un périscope. Son coût de revient s'élève à 400 000 francs."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Nouvelles militaires : Camp d'Avord",
    "summary": "Une épidémie de grippe au camp d'Avord entraîne des permissions. Les bruits de fièvre typhoïde circulant à Bourges sont officiellement démentis : il ne s'agit que de cas isolés de scarlatine.",
    "paragraphs": [
      "Suite à une épidémie de grippe sévissant au camp d'Avord, des permissions ont été accordées aux militaires. Les rumeurs faisant état de fièvre typhoïde à Bourges ont été formellement démenties ; il ne s'agit, en réalité, que de quelques cas de scarlatine sans gravité particulière."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "International",
    "title": "Les événements de Chine",
    "summary": "Li-Hung-Chang rejette les neuf conditions de paix imposées par la Russie concernant la Mandchourie, qui incluaient notamment la reddition des fortifications et un contrôle administratif accru.",
    "paragraphs": [
      "Li-Hung-Chang a communiqué les neuf conditions de paix proposées par la Russie pour la Mandchourie. Ces exigences incluaient notamment le contrôle administratif russe de la région ainsi que la reddition des fortifications. Le général tartare a formellement rejeté ces propositions."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Politique",
    "title": "Séance au Sénat sur les droits de succession",
    "summary": "Le Sénat a adopté le projet de réforme des droits de succession. Malgré les vives oppositions soulevées par la question de l'impôt progressif, les derniers articles ont été votés sans modification.",
    "paragraphs": [
      "Le Sénat a adopté le projet de réforme relatif aux droits de succession, nonobstant les débats nourris concernant l'application de l'impôt progressif. Les derniers articles du texte ont été votés sans qu'aucune modification ne soit apportée."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Politique",
    "title": "Débats à la Chambre sur le contrat d'association",
    "summary": "La Chambre poursuit ses travaux sur la loi relative au contrat d'association. M. Waldeck-Rousseau exhorte au rejet des contre-projets afin de concentrer les débats sur le projet gouvernemental.",
    "paragraphs": [
      "La Chambre des députés a poursuivi la discussion sur la loi concernant le contrat d'association. M. Waldeck-Rousseau a invité l'assemblée à rejeter les divers contre-projets déposés, afin de permettre une discussion constructive et ordonnée sur les articles du projet présenté par le gouvernement."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Faits Divers",
    "title": "Attentats et crimes en Belgique",
    "summary": "Vague de criminalité en Belgique : un règlement de comptes au vitriol à Senefte, un meurtre à Monceau-sur-Sambre, et un incendie dévastateur ravage les entrepôts du port de Gand.",
    "paragraphs": [
      "À Senefte, un homme a été sauvagement aspergé de vitriol et son compagnon a été blessé par un coup de feu. À Monceau-sur-Sambre, un nommé Émile Capouillet a été tué par balle ; son assassin, le dénommé Arthur Mathieu, a été arrêté par les forces de l'ordre.",
      "Par ailleurs, à Gand, un incendie d'une ampleur considérable a ravagé les entrepôts de coton et de grains situés dans l'enceinte du port."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "La souris primée",
    "summary": "À Londres, le Mouse Fanciers' Club organise un concours annuel récompensant les plus belles souris. Les spécimens rares, dont certains atteignent des prix records, passionnent une élite de collectionneurs anglais.",
    "paragraphs": [
      "Le « Fat Fancy », qui a remporté le prix d'honneur à l'exposition annuelle du Mouse Fanciers' Club, témoigne que, sous les auspices de cette société, un véritable concours de souris a lieu tous les ans dans l'un des faubourgs de la métropole. Plusieurs petits quadrupèdes rongeurs y prennent part d'habitude, et, naturellement, les plus belles bêtes sont primées, leurs propriétaires recevant des médailles et parfois même des prix en espèces assez élevés.",
      "La souris, achetée vingt-cinq livres sterling par M. Whiteson, devait être un animal très extraordinaire si nous en croyons le journal spécial auquel nous empruntons ces détails. Jusqu'alors, en effet, le record de la valeur était détenu par une souris hollandaise à longs poils, payée sept livres sterling l'année dernière.",
      "Il y a, paraît-il, environ quatre cent cinquante variétés plus ou moins rares de souris, que les collectionneurs anglais se disputent à prix d'or, depuis une demi-couronne jusqu'à vingt-cinq livres."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Éditorial",
    "title": "Les justiciers et le danger des erreurs judiciaires",
    "summary": "L'éditorialiste dénonce la violence aveugle des justiciers improvisés, dont les erreurs tragiques rappellent l'affaire Lesurques. Une mise en garde nécessaire contre la vengeance personnelle et les ressemblances fortuites.",
    "paragraphs": [
      "Les justiciers deviennent très inquiétants. Non seulement ils jouent du revolver et du flacon de vitriol avec une désinvolture qui rappelle les anciennes vendettas du maquis corse, mais ils se trompent volontiers de victime, blessant ou tuant même des personnes qu'ils ont prises pour d'autres et contre lesquelles ils seraient fort embarrassés de formuler le moindre grief.",
      "Il y a, en ce moment, à Paris, gémissant sur leur lit d'hôpital, plusieurs malheureux que la colère de ces égarés a frappés par erreur et mis dans l'état le plus pitoyable. Le sans-gêne des névrosés qui clament leur vengeance et, à un moment donné, voient rouge, est intolérable.",
      "Mais c'est l'histoire de Lesurques que les justiciers ne cessent de recommencer ; de Lesurques qui fut guillotiné parce qu'il ressemblait à Dubosc, l'homme à la perruque blonde. Très allègrement, sans y regarder de près, ils expédient dans l'autre monde le premier passant venu qui a le tort de leur rappeler, par un air de tête ou la coupe de la barbe, quelque grincheux dont ils ont eu à se plaindre.",
      "Peu ou prou, nous sommes tous les sosies de plusieurs autres. Chacun est plus ou moins le double de quelqu'un. Il y a toujours, traversant les mêmes rues que nous, fréquentant les mêmes milieux, des êtres pourvus des mêmes organes qui nous ressemblent comme des frères."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Les Tribunaux",
    "title": "Arrêt de principe sur les accidents du travail",
    "summary": "La Cour de cassation précise la jurisprudence : les décisions des juges de paix sur les accidents du travail, rendues en dernier ressort selon la loi, ne peuvent être frappées de pourvoi qu'en cas d'excès de pouvoir.",
    "paragraphs": [
      "La chambre civile de la Cour de cassation, présidée par le premier président Ballot-Beaupré, vient de rendre, en matière d'accidents du travail, un arrêt de principe qu'il convient de signaler.",
      "La loi de 1898 sur les accidents du travail attribue aux juges de paix compétence pour statuer en dernier ressort sur les indemnités temporaires. La cour suprême a déclaré irrecevable le pourvoi, en posant en principe que les jugements des juges de paix, rendus en dernier ressort par application de la loi, ne peuvent être l'objet d'un pourvoi en cassation que lorsqu'il y a excès de pouvoir."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Les Tribunaux",
    "title": "Décommande d'un dîner de noce",
    "summary": "La justice se prononce : annuler une commande de dîner de noce quelques heures après sa réservation, sans causer de préjudice matériel au restaurateur, n'ouvre pas droit à une indemnité pour ce dernier.",
    "paragraphs": [
      "Peut-on, sans s'exposer à des dommages-intérêts, décommander un dîner de noce de quarante-cinq couverts, à raison de 25 francs par tête ? Telle était la question soumise hier aux magistrats de la septième chambre du tribunal. Ceux-ci ont décidé que si la décommande a lieu quelques heures seulement après la commande, celle-ci ne causant aucun dommage matériel au restaurateur, ce dernier n'a pas le droit de réclamer d'indemnité."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Procès de Félix Fallet",
    "summary": "La cour d'assises de l'Allier a condamné Félix Fallet, boulanger de cinquante ans, à huit ans de travaux forcés pour des faux commis sous l'influence de sa concubine.",
    "paragraphs": [
      "Hier a comparu devant la cour d'assises de l'Allier le nommé Félix Fallet, âgé de cinquante ans, boulanger, originaire de Saint-Leu. Marié et père de cinq enfants, il a quitté sa femme pour vivre avec une concubine qui l'a poussé à commettre des faux. Poursuivi pour ce motif, Fallet a été condamné à huit ans de travaux forcés et à dix ans d'interdiction de séjour."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mystère de la rue des Plâtrières",
    "summary": "Le mystère de la rue des Plâtrières s'éclaircit : M. Cochfert, chef de la Sûreté, a fait arrêter sept membres d'une bande de cambrioleurs ainsi que leurs receleurs. La victime était liée à cette association criminelle.",
    "paragraphs": [
      "Le profond mystère qui plane toujours sur l'affaire de la rue des Plâtrières serait-il sur le point d'être éclairci ? M. Cochfert, chef de la Sûreté, a lancé ses agents sur la piste signalée à M. André, juge d'instruction.",
      "Sept individus, faisant partie d'une bande de cambrioleurs, ainsi que les époux X. qui leur servaient de receleurs, ont été mis en état d'arrestation et sont actuellement sous les verrous. La victime de la rue des Plâtrières appartenait bien à cette association de malfaiteurs."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Gardien de la paix blessé",
    "summary": "Un gardien de la paix, le nommé Beaufils, a été grièvement blessé boulevard de Sébastopol alors qu'il tentait de maîtriser un cheval de laitier emballé. Il a été transporté d'urgence à l'hôpital Saint-Louis.",
    "paragraphs": [
      "Une voiture de laitier était arrêtée hier matin, boulevard de Sébastopol, quand le cheval prit peur et s'emballa. Le gardien de la paix Beaufils se jeta courageusement à la tête de l'animal, mais fut heurté violemment et jeté à terre sous les roues de la voiture.",
      "Grièvement blessé lors de l'accident, le brave agent a dû être transporté d'urgence à l'hôpital Saint-Louis pour y recevoir des soins."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Débris humains à Montmartre",
    "summary": "Une macabre découverte a été faite par un chiffonnier passage de l'Elysée-des-Beaux-Arts : des restes humains sciés ont été trouvés dans une boîte à ordures. La police du quartier a ouvert une enquête.",
    "paragraphs": [
      "Dans la matinée d'hier, un chiffonnier a fait une découverte macabre : deux mains et deux pieds humains étaient déposés dans une boîte à ordures du passage de l'Elysée-des-Beaux-Arts.",
      "Le commissaire de police du quartier des Grandes-Carrières a immédiatement ouvert une enquête. Selon toute vraisemblance, il s'agit de débris anatomiques ayant été sciés proprement aux jointures."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'escroquerie du trésor caché",
    "summary": "Deux commerçants de Vanves ont été victimes d'une escroquerie. Un individu nommé Antonio leur a soutiré de l'argent en leur promettant de découvrir un trésor imaginaire enterré dans le bois de Clamart.",
    "paragraphs": [
      "Deux commerçants, les époux X., marchands de vins à Vanves, viennent d'être victimes d'une singulière escroquerie. Un certain Antonio leur a promis, moyennant une somme d'argent, de leur faire découvrir un trésor enterré dans le bois de Clamart.",
      "Après plusieurs tentatives de fouilles infructueuses et l'intervention nécessaire du garde champêtre, les époux, réalisant la supercherie, ont porté plainte auprès du juge."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un cambrioleur",
    "summary": "Un individu a été surpris en flagrant délit de cambriolage rue Saint-Martin. Porteur de fausses clefs et refusant de justifier de son domicile, il a été conduit au dépôt.",
    "paragraphs": [
      "Hier après-midi, rue Saint-Martin, des propriétaires ont surpris un individu en train de fracturer la porte de leur logement.",
      "Conduit au commissariat, il a été trouvé porteur de fausses clefs et d'instruments de cambriolage. Comme il a refusé de décliner son domicile, il a été envoyé au dépôt pour y être interrogé."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accidents divers et faits divers en banlieue",
    "summary": "Une série d'accidents et de drames endeuille la banlieue parisienne : corps repêchés à Boulogne, drames passionnels à Courbevoie et accidents du travail aux conséquences graves à Levallois et La Garenne.",
    "paragraphs": [
      "À Boulogne-sur-Seine, le corps d'un homme a été retiré de la Seine. À Courbevoie, un individu s'est tiré un coup de revolver par désespoir amoureux. À Levallois-Perret et à La Garenne-Colombes, deux ouvriers ont été grièvement blessés dans des accidents du travail.",
      "À Gennevilliers, un journalier en proie à la folie a été maîtrisé après avoir saccagé une loge de concierge. Enfin, à Nanterre et à Livry, des accidents de tramway ont causé de graves blessures à des usagers de la voie publique."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Rixe à Charenton",
    "summary": "Une violente rixe a éclaté à Charenton. Un étudiant de l'école vétérinaire et sa complice ont été arrêtés après avoir blessé plusieurs agents, dont l'état de M. Jacqnot est jugé préoccupant.",
    "paragraphs": [
      "Une rixe sanglante a eu lieu avant-hier soir à Charenton. Après avoir blessé plusieurs agents, un étudiant de l'école vétérinaire a été arrêté en compagnie de sa complice. L'état de santé de l'un des agents, le nommé Jacqnot, est jugé grave."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Bulletin Financier",
    "title": "État de la Bourse",
    "summary": "Après une ouverture incertaine, la Bourse de Paris affiche une réelle animation, portée par la fermeté des valeurs de crédit et une reprise des mines d'or, tandis que les fonds extérieurs restent stables.",
    "paragraphs": [
      "La Bourse présente une réelle animation après un début incertain. Les valeurs de crédit sont fermes, tandis que les mines d'or retrouvent le niveau des cours d'hier. Les fonds extérieurs et les titres de la Banque Ottomane montrent des variations légères."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Faits Divers",
    "title": "Suicide à Joigny",
    "summary": "Le corps de M. Clovis Benoit, jardinier disparu depuis le 23 janvier, a été découvert pendu près de Fleury. Le malheureux, âgé de cinquante-trois ans et père de six enfants, aurait succombé à des chagrins intimes.",
    "paragraphs": [
      "JOIGNY (Yonne). M. Clovis Benoit, jardinier disparu depuis le 23 janvier dernier, vient d'être trouvé pendu dans un grenier du vieux moulin, situé au lieu-dit « Vauban », à peu de distance de Fleury.",
      "On attribue cet acte de désespoir à des chagrins intimes. Le malheureux, père de six enfants, était âgé de cinquante-trois ans."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Éditorial / Société",
    "title": "Les Droits d'Auteurs au Théâtre",
    "summary": "La disparition récente d'auteurs dramatiques remet en lumière l'évolution historique des droits d'auteur, de la précarité sous l'Ancien Régime à la protection juridique instaurée par la Révolution et la SACD.",
    "paragraphs": [
      "La mort toute récente de M. Henri de Bornier et celle de M. Jules Barbier, qui s'était fait une spécialité de fournir aux meilleurs musiciens de notre temps d'excellentes adaptations lyriques des chefs-d'œuvre du théâtre, redonnent quelque actualité à cette question des droits d'auteurs et de la propriété littéraire.",
      "De telles idées, fort éloignées des nôtres, se comprenaient sous l'Ancien Régime, dans une société où le travail productif était peu considéré. En fait, ceux que la fortune n'avait pas avantagés ne pouvaient guère compter pour subsister que sur les pensions royales ou les libéralités intéressées des grands.",
      "Sous Louis XIV, les auteurs dramatiques étaient alors à la solde des comédiens. Le prix était alors minime. On payait quelquefois une pièce jusqu'à 100 écus, mais cela était bien rare.",
      "Cet abus devint si criant que vers la fin du siècle, un arrêté royal établit une sorte de droit proportionnel. Tous les frais ordinaires journaliers déduits, les comédiens devaient payer le neuvième de la recette pour une pièce en cinq actes, le douzième pour une pièce en trois actes.",
      "Pendant tout le XVIIIe siècle, les auteurs luttèrent avec plus ou moins de succès pour obtenir des conditions plus avantageuses et surtout plus sûres.",
      "Une loi de 1791, en pleine Révolution, donna enfin satisfaction à Beaumarchais, et cette loi, souvent remaniée depuis pour s'adapter aux circonstances, est encore celle qui régit de nos jours la matière.",
      "La Société des auteurs et compositeurs dramatiques, fondée à l'instigation d'Eugène Scribe et constituée en société civile en 1837, est venue donner aux auteurs le point d'appui qui leur manquait.",
      "Pour saisir pleinement les avantages de ce groupement, il suffirait de comparer les droits perçus par les auteurs français depuis que la société fonctionne avec ceux qu'ils touchaient auparavant."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Social",
    "title": "La Grève de Montceau-les-Mines",
    "summary": "La grève des mineurs de Montceau-les-Mines perdure sans heurts. Malgré une entrevue avec le directeur M. Coste, aucun accord n'a été trouvé ; le dossier est désormais transmis à l'arbitrage du juge de paix.",
    "paragraphs": [
      "Montceau-les-Mines, 29 janvier. La grève des mineurs de Montceau-les-Mines se poursuit sans incident.",
      "Une délégation du comité de grève, composée de seize membres, a tenu une entrevue hier soir avec M. Coste, directeur des mines. L'entretien a duré trois heures, mais aucune décision définitive n'a été arrêtée.",
      "M. Coste se rend aujourd'hui à Paris pour présenter les revendications au conseil d'administration des mines de Blanzy, dont la réunion est fixée à demain.",
      "Lors d'une seconde entrevue, la réponse de M. Coste fut un refus d'entrer en pourparlers avec le comité. Les membres du comité ont alors dû résigner leur mandat au bureau syndical pour charger ce dernier de nouvelles négociations.",
      "Rappelons que c'est jeudi que M. Chevalier, juge de paix, doit être saisi de la proposition d'arbitrage."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Politique Étrangère",
    "title": "Les Colonies Allemandes",
    "summary": "Selon un rapport du consul de France à Hambourg, les colonies allemandes déçoivent par leur faible rendement économique, affichant des déficits budgétaires malgré les investissements consentis par l'Empire.",
    "paragraphs": [
      "Les colonies allemandes sont loin d'avoir acquis l'importance économique qu'on leur attribue parfois. Il résulte d'un rapport adressé au gouvernement par le consul de France à Hambourg que leurs exportations totales n'ont pas dépassé, en 1899, 18 millions de francs.",
      "Le budget colonial de l'Empire n'est guère en équilibre. La plupart des dépendances ont accusé, en 1899, des déficits, particulièrement le Sud-Ouest africain.",
      "Au total, l'expansion coloniale de l'Allemagne, que Bismarck envisageait plutôt avec regret, n'a pas justifié les sacrifices qu'elle a coûtés."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Culture",
    "title": "Courrier des Théâtres",
    "summary": "L'agenda culturel s'anime : l'Opéra-Comique prépare un gala de charité, le Châtelet honore Mendelssohn lors d'un concert, et la Comédie-Française sollicite Mme Duse pour le monument Dumas.",
    "paragraphs": [
      "Le programme de la matinée que l'Opéra-Comique organise pour le jeudi 7 février, au bénéfice de la caisse des retraites du personnel du théâtre, promet d'être des plus brillants. Mme Sybil-Sanderson chantera plusieurs mélodies de Massenet et Mme Judic a également accepté de se faire entendre.",
      "Dimanche prochain, 3 février, au Châtelet, le concert Colonne sera consacré à la mémoire de Mendelssohn.",
      "À la Comédie-Française, M. Jules Claretie a prié Mme Eleonora Duse de prêter son concours à une représentation de gala qui sera donnée au profit du monument d'Alexandre Dumas."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Culture",
    "title": "La longévité chez les compositeurs",
    "summary": "Bien que le grand Verdi ne soit pas parvenu à égaler le record de longévité d'Auber, cette réflexion souligne la vertu de la musique, qui adoucirait les mœurs tout en prolongeant l'existence.",
    "paragraphs": [
      "Verdi n'aura pas détenu le record qu'il semblait devoir disputer à Auber. Il meurt à quatre-vingt-sept ans, soit deux années plus tôt que l'aimable vieillard à l'éternelle jeunesse.",
      "En résumé, la musique, en même temps qu'elle adoucit les mœurs, paraît plutôt prolonger l'existence."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Sports",
    "title": "Les Sports automobiles et cyclistes",
    "summary": "La saison sportive est lancée avec la préparation des courses automobiles Paris-Bordeaux et Paris-Berlin, tandis que la classique cycliste Paris-Roubaix enregistre déjà ses premiers engagements de renom.",
    "paragraphs": [
      "La course d'automobiles Paris-Bordeaux comportera cette année quatre catégories. On s'occupe déjà de la course Paris-Berlin qui empruntera probablement l'itinéraire Luxembourg.",
      "La première course cycliste sur route de la saison, Paris-Roubaix, qui se disputera le 8 avril prochain, a déjà réuni quelques engagements, notamment ceux de Foureaux, Fischer, Aucouturier, Watelier, Lepoûtre et Ambroise Garin."
    ]
  }
];
