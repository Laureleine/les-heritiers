// Date: 1900-05-21
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-05-21 (Version Restaurée, 29 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Colonie",
    "title": "La mise en valeur du Laos",
    "summary": "Analyse du potentiel économique du Laos, protectorat français depuis 1893. Entre richesses agricoles et élevage, l'auteur souligne la nécessité d'un apport de capitaux pour développer cette province d'Annam.",
    "paragraphs": [
      "Je parlais hier de l'organisation du service militaire aux colonies et des ressources trop longtemps inemployées que nos possessions d'outre-mer mettent, à ce point de vue, à notre disposition.",
      "Le Laos est une province de l'empire d'Annam. La France, malgré le protectorat qu'elle avait imposé, avait d'abord laissé faire le Siam dans cette région. Il y a dix ans, la situation se modifia. Les Laotiens faisaient appel à notre protection.",
      "L'inspecteur de milice envoyé par nous au Laos, M. Grosgurin, fut assassiné et son escorte massacrée. Le 3 octobre 1893, un traité consacra notre victoire et le Laos fut placé sous la souveraineté de l'Annam et le protectorat de la France.",
      "Que valait cette province nouvelle ? Les Laotiens sont de véritables enfants ; ils ont une douceur inépuisable, faite d'indolence et de paresse. Ils craignent l'effort et dédaignent le profit. C'est un peuple fait pour l'obéissance, un instrument commode pour la colonisation.",
      "La plus accessible et la plus féconde des ressources est l'élevage. Les buffles sont très nombreux sur les plateaux. L'agriculture serait, elle aussi, susceptible d'un progrès rapide : riz, tabac, canne à sucre, coton, caoutchouc.",
      "L'heure est donc proche où toutes ces richesses seront connues. Les ressources naturelles existent, la main-d'œuvre est toute prête, le capital seul fait défaut ; la France n'aura pas de peine à le trouver."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le secret du docteur - Deuxième Partie (XIV)",
    "summary": "Drame chez le docteur Barrère : un coup de feu éclate. Hélène découvre le corps inanimé du médecin et deux documents capitaux : la preuve de l'innocence de Michel Gérard et le testament en faveur de Gabrielle.",
    "paragraphs": [
      "Elle prit le long corridor dallé de pierres où, en toutes saisons, suintait et pleurait l'humidité éternelle des vieilles maisons de province. Elle ne marchait pas, elle volait, heureuse d'avoir aperçu le bon visage de son ami, néanmoins le cœur serré d'une inconsciente angoisse.",
      "En haut, un coup de feu retentit. En bas, Gabrielle a poussé un cri de suprême douleur. Blanche comme un suaire, elle tombe sur les marches, balbutiant, éperdue : « Il s'est tué, mon Dieu ! il s'est tué. »",
      "Hélène est vaillante, surtout pratique. Elle s'élance, franchissant d'un bond les marches. En haut, elle veut ouvrir la porte, mais les verrous sont mis par derrière. Elles réunissent leurs efforts ; Hélène saisit un morceau de bois et frappe. Le panneau vole en éclats.",
      "En travers de son bureau, le docteur Barrère est étendu, ne donnant plus signe de vie. Hélène découvre deux papiers. L'un décharge Michel Gérard de l'assassinat du duc d'Argile, l'autre lègue à Gabrielle de Saint-Amand la gestion de ses affaires et de ses papiers.",
      "Gabrielle pleure, Hélène examine la plaie. Le docteur Constantin arrive enfin, constatant le malheur."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "La fièvre jaune au Sénégal",
    "summary": "Apparition de six cas mortels de fièvre jaune à Dakar. Si les troupes demeurent épargnées, la commission sanitaire impose une mesure de quarantaine de neuf jours pour les provenances du deuxième arrondissement.",
    "paragraphs": [
      "Six cas douteux de fièvre jaune ont été constatés à Dakar. Ils ont tous été suivis de décès. Toutefois, la fièvre ne s'est pas propagée à Rufisque. Les troupes sont indemnes et l'état sanitaire de la colonie est satisfaisant.",
      "La commission sanitaire a décidé d'imposer une quarantaine de neuf jours aux provenances du deuxième arrondissement, par terre et par eau."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Économie",
    "title": "La fortune publique",
    "summary": "Réflexion sur le projet d'impôt sur le revenu. L'auteur soutient que les dépenses du budget français maintiennent la richesse au sein du pays, assurant ainsi la prospérité nationale sans dépendre de l'étranger.",
    "paragraphs": [
      "Le projet d'impôt sur le revenu, qui va être déposé par le ministre des Finances, sera l'objet de sérieuses discussions. Mais il convient de faire remarquer que les résolutions prises ne sauraient toucher, quelles qu'elles soient, la fortune de la France.",
      "Le budget français atteint trois milliards et demi, mais tous ces millions restent en France ; ils ne vont pas enrichir les étrangers. L'État prend d'une main et il restitue de l'autre en faisant fructifier le commerce et l'industrie.",
      "La fertilité de notre sol et nos lois sur les tarifs douaniers permettent à la France de vivre sur son propre fond. Elle n'est pas obligée, comme l'Angleterre, d'acheter sa subsistance au dehors."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Exposition",
    "title": "À l'Exposition universelle",
    "summary": "L'Exposition universelle connaît une affluence record. Les restaurants sont pris d'assaut et les visiteurs réclament une signalétique claire pour les objets exposés dans la rétrospective des transports.",
    "paragraphs": [
      "Le public s'est porté en foule, hier matin, à l'Exposition universelle. Les restaurants étaient complets et les jardins envahis par des visiteurs mangeant sur les bancs.",
      "Beaucoup de visiteurs ont été désappointés de trouver des objets exposés sans la moindre désignation. Un lecteur suggère de placer au pied de chaque objet de l'exposition rétrospective des moyens de transport une petite pancarte explicative."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Armée",
    "title": "Les armées en campagne",
    "summary": "Démonstration d'équipements militaires innovants : une ambulance volante hautement désinfectable et des fours boulangers mobiles assurant l'autonomie et le ravitaillement des troupes en marche.",
    "paragraphs": [
      "Non loin du pavillon de l'Union des femmes de France s'élève une vaste tente qui renferme l'installation d'une ambulance volante et trois boulangeries militaires de campagne.",
      "Ces fours, très légers et faciles à transporter, peuvent fournir de douze à quinze cents pains par jour. Il existe également des fours montés sur roues qui permettent à une armée en marche de cuire son pain en route sans se préoccuper du ravitaillement.",
      "Quant à l'ambulance, elle comporte les derniers perfectionnements et est revêtue d'un bois très dur, poli et verni, ce qui la rend aisément désinfectable."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un drame à Alger",
    "summary": "Un drame familial a frappé Alger ce matin : le vétérinaire Auguste Borgnon a assassiné son épouse avant de se suicider, un geste tragique attribué à une maladie cérébrale.",
    "paragraphs": [
      "Ce matin, vers huit heures et demie, le nommé Auguste Borgnon, âgé de quarante-huit ans, vétérinaire, a tué sa femme, née Jeanne Bardel, de deux coups de revolver et s'est ensuite suicidé en se logeant une balle dans le cœur.",
      "Les époux Borgnon laissent une jeune fille de dix-neuf ans. On attribue ce crime à une maladie cérébrale dont souffrait Borgnon."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le cadavre d'Aubervilliers",
    "summary": "Le corps mutilé d'un ouvrier mécanicien a été découvert sur la voie du tramway électrique à Aubervilliers. L'enquête judiciaire devra déterminer les circonstances tragiques de ce décès.",
    "paragraphs": [
      "Des gardiens de la paix d'Aubervilliers ont trouvé, sur la voie du tramway électrique, le cadavre d'un individu lamentablement mutilé.",
      "Il s'agissait d'un ouvrier mécanicien nommé Jean-Baptiste-Amédée Servan, âgé de trente et un ans. Le magistrat cherche à établir les circonstances exactes du décès, Servan ayant pu être attaqué ou étendu sur la voie."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections cantonales",
    "summary": "Synthèse des résultats électoraux pour les cantons de la banlieue parisienne, marqués par de nombreuses victoires et un ballottage notable à Saint-Maur-des-Fossés.",
    "paragraphs": [
      "Canton de Neuilly-sur-Seine : M. Cherest est élu avec 2 679 voix.",
      "Canton de Noisy-le-Sec : M. Coliardeau est élu.",
      "Canton de Pantin : M. Jaequemin est élu avec 4 267 voix.",
      "Canton de Saint-Denis : M. Péron est élu.",
      "Canton de Saint-Ouen : M. Basbet est élu.",
      "Canton de Charenton : M. Chenal est élu.",
      "Canton d'Ivry : M. Lévêque est élu.",
      "Canton de Montreuil-sous-Bois : M. Héward est élu.",
      "Canton de Nogent-sur-Marne : M. Blanghon est élu.",
      "Canton de Saint-Maur-des-Fossés : Ballottage, M. Rioss est en tête avec 1 008 voix.",
      "Canton de Sceaux : M. Darmignac est élu avec 2 249 voix.",
      "Canton de Vanves : M. Dupont est élu avec 4 351 voix.",
      "Canton de Villejuif : M. Thomas est élu.",
      "Canton de Vincennes : M. Gibert est élu."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "La situation au Transvaal",
    "summary": "Tandis que l'Angleterre célèbre le déblocage de Mafeking, le conflit au Transvaal s'intensifie. Des manœuvres militaires décisives se préparent et des pourparlers diplomatiques sont initiés.",
    "paragraphs": [
      "La joie bruyante et disproportionnée de l'Angleterre suite au déblocage de Mafeking semble indécente. Sept cents hommes ont été libérés, mais cette explosion d'ivresse masque une réalité militaire complexe.",
      "Plus grave pour les Boërs que la libération de Mafeking, le général Buller et le général Dundonald sont arrivés à Laing's-Neck. Voici venue l'heure des combats décisifs.",
      "Le général Rundle est arrivé à Trommel. Le commando d'Olivier surveille les mouvements des troupes anglaises. Le gouvernement du Transvaal a proposé à Lord Roberts un échange de prisonniers.",
      "À Washington, le délégué boër M. Fischer a déclaré croire en la possibilité d'arrêter l'effusion de sang par l'intermédiaire du gouvernement américain."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un vieux crime découvert à Bruxelles",
    "summary": "Lors de travaux rue Saint-Lazare à Bruxelles, la découverte d'un squelette féminin sous les fondations d'une maison relance l'enquête sur la disparition mystérieuse de la servante Joséphine Lebrun, survenue en 1884.",
    "paragraphs": [
      "Lors de fouilles entreprises dans une demeure de la rue Saint-Lazare à Bruxelles, des ouvriers ont mis au jour le squelette d'une jeune femme dissimulé sous les fondations.",
      "Les recherches effectuées dans les registres de l'état civil permettent de supposer qu'il pourrait s'agir de Joséphine Lebrun, une servante dont la trace avait été perdue en 1884. L'instruction judiciaire se poursuit activement afin de confirmer cette identité et d'élucider les circonstances de ce crime ancien."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Société",
    "title": "Professions féminines et études",
    "summary": "L'accroissement du nombre de femmes dans l'enseignement supérieur à la Sorbonne témoigne d'une évolution des mœurs. Aux États-Unis, la liberté professionnelle permet désormais aux femmes d'accéder à des carrières variées.",
    "paragraphs": [
      "Une étude statistique récente souligne l'accroissement notable du nombre de femmes fréquentant les facultés. À la Sorbonne, trente-sept étudiantes suivent désormais les cours de lettres, tandis que plus de cent trente-trois femmes sont inscrites aux amphithéâtres de la faculté de médecine.",
      "Outre-Atlantique, la liberté professionnelle est bien plus large, permettant aux femmes d'accéder à des carrières diverses, du barreau aux fonctions de shérif, ou même à l'exercice de métiers manuels, tels que celui de décolleteuse."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Social",
    "title": "Congrès de la Mutualité Commerciale",
    "summary": "M. Paul Deschanel a présidé à la Sorbonne le congrès de la Mutualité Commerciale. Il a insisté sur l'importance de la solidarité et de l'enseignement technique pour améliorer la condition des travailleurs français.",
    "paragraphs": [
      "L'association de la Mutualité Commerciale a tenu ses assises à la Sorbonne sous la haute présidence de M. Paul Deschanel. Plus de trois mille adhérents, venus de tous horizons, étaient présents pour cet événement.",
      "Dans une allocution remarquée, M. Deschanel a salué l'œuvre de solidarité accomplie par l'association, insistant sur le rôle crucial de la mutualité dans l'amélioration de la condition ouvrière ainsi que dans le développement indispensable de l'enseignement technique en France."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Élections locales dans la banlieue et Seine-et-Oise",
    "summary": "Les récentes élections municipales ont vu le renouvellement des administrations locales dans de nombreuses communes de la proche banlieue parisienne et du département de Seine-et-Oise.",
    "paragraphs": [
      "Dans la proche banlieue, de nouveaux maires ont été proclamés élus à Arcueil-Cachan, Alfortville, Fontenay-aux-Roses, Saint-Maur, Saint-Mandé, Antony, Les Lilas et Bagnolet.",
      "En Seine-et-Oise, des élections municipales ont également été célébrées avec vigueur, notamment à Versailles, Sèvres et Saint-Ouen-l'Aumône, où les nouveaux conseils municipaux ont désormais pris leurs fonctions."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Politique",
    "title": "Élections municipales en France",
    "summary": "Ce bilan officiel des élections municipales détaille les résultats, les réélections et les changements d'administration au sein de diverses communes, dont Reims, Nantes, Lyon et Alger.",
    "paragraphs": [
      "Le présent relevé recense les résultats officiels des élections municipales pour de nombreuses communes réparties à travers divers départements. Ce compte-rendu détaille les maires réélus, les adjoints nouvellement nommés ainsi que les changements de municipalité survenus, notamment dans les villes de Reims, Nantes, Lyon et Alger."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Exposition Universelle",
    "title": "Incident au pavillon des Indes françaises",
    "summary": "Une vive tension a éclaté hier à l'Exposition Universelle : les concessionnaires du pavillon des Indes, opposés aux mesures du commissariat, ont tenté de forcer l'accès en arrachant les palissades de protection.",
    "paragraphs": [
      "Une vive tension a éclaté hier à l'Exposition Universelle. Les concessionnaires du pavillon des Indes françaises ont tenté de pénétrer de force dans leur espace en arrachant la palissade installée par le commissariat général.",
      "M. Prélat, commissaire de police, est intervenu séance tenante pour dresser des contraventions à l'encontre de chaque concessionnaire présent sur les lieux."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident mortel à la mairie du XVIIIe arrondissement",
    "summary": "Drame rue Ordener : Henri Renault, un jeune peintre de vingt ans, a succombé à ses blessures après une chute de sept mètres à travers une toiture vitrée au sein de la mairie du XVIIIe.",
    "paragraphs": [
      "Un ouvrier peintre, Henri Renault, âgé de vingt ans, a fait une chute mortelle de sept mètres alors qu'il travaillait dans les combles de la mairie du XVIIIe arrondissement, rue Ordener.",
      "Il a traversé une toiture vitrée avant de tomber lourdement au sol. Transporté d'urgence dans une pharmacie voisine, son état ne laissait malheureusement aucun espoir aux médecins."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents et incendies dans les départements",
    "summary": "La journée a été marquée par de multiples sinistres : incendies à Asnières, Versailles et Poissy, accident de travail grave à Gennevilliers et un tragique suicide ferroviaire à Epiais-Flins.",
    "paragraphs": [
      "À Gennevilliers, le livreur Alphonse Delbouy a été grièvement brûlé à la poitrine et au visage suite à l'éclatement d'une bonbonne d'acide sulfurique.",
      "À Asnières, un incendie causé par une fuite de gaz a entièrement détruit le chalet situé à l'angle des rues Saint-Denis et de la Concorde.",
      "À Versailles, un incendie dans un bois situé près de la gare de triage a nécessité trois heures d'intervention acharnée des pompiers.",
      "À Poissy, un violent incendie dans les greniers de l'Épicerie parisienne a causé pour trente mille francs de dégâts matériels.",
      "À Pontoise, le journalier Delphin Callot s'est suicidé en se jetant sous un train à Epiais-Flins, possiblement désespéré par des chagrins d'amour.",
      "À Étampes, M. Alfred Delzance a été tué accidentellement par son attelage lors de travaux à Milly."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Sports",
    "title": "Résultats des courses hippiques",
    "summary": "Compte-rendu des épreuves hippiques de Vincennes et Chantilly. Le prestigieux Prix de Diane a été remporté par Semeudria, monté par le jockey W. Pratt, pour les couleurs du baron de Schickler.",
    "paragraphs": [
      "Compte-rendu détaillé des courses hippiques tenues à Vincennes et à Chantilly, incluant le prestigieux Prix de Diane remporté par Semeudria, appartenant au baron de Schickler, sous la monte du jockey W. Pratt."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Social",
    "title": "Distribution de prix de la Société pour l'instruction des sourds-muets",
    "summary": "Cérémonie philanthropique à l'Hôtel des Sociétés : remise de prix et bourses pour les élèves sourds-muets, saluée par un discours de M. Bouchor sur l'importance cruciale de l'insertion professionnelle.",
    "paragraphs": [
      "Une cérémonie a eu lieu à l'Hôtel des Sociétés pour la remise des prix aux élèves sourds-muets. M. Bouchor a prononcé un discours saluant le but éminemment philanthropique de l'institution.",
      "La société a récompensé les élèves méritants, les enseignants et a octroyé des bourses pour favoriser l'insertion professionnelle des anciens élèves au sein de la cité."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Éducation",
    "title": "Distribution des récompenses à l'école professionnelle du papier",
    "summary": "La distribution solennelle des prix de l'école professionnelle du papier s'est tenue au Trocadéro, en présence de M. Delmas, représentant le ministre du Commerce, pour honorer le mérite des apprentis.",
    "paragraphs": [
      "La distribution des prix des concours annuels de l'école professionnelle du papier s'est déroulée dans la salle du Trocadéro, en présence de M. Delmas, représentant le ministre du Commerce et de l'Industrie.",
      "Plusieurs médailles et diplômes ont été décernés aux apprentis et professeurs, notamment à MM. Charles Bonheur et Jules Huguet, dont les travaux ont été particulièrement remarqués par le jury pour la qualité de leur formation technique."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Sports",
    "title": "Concours d'élégance automobile au bois de Vincennes",
    "summary": "Le bois de Vincennes a été le théâtre d'un brillant concours d'élégance automobile, où de nombreux véhicules ont rivalisé de vitesse et de maniabilité devant une assistance mondaine.",
    "paragraphs": [
      "Un concours d'élégance automobile a été organisé au bois de Vincennes, attirant un public nombreux et distingué parmi lequel on remarquait plusieurs personnalités du monde des sports.",
      "Les véhicules ont pris part à diverses épreuves de maniabilité, de vitesse et d'élégance pure, confirmant une fois de plus l'engouement croissant du public parisien pour les progrès de l'automobilisme."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Théâtre",
    "title": "Courrier des théâtres",
    "summary": "Le programme théâtral de la semaine s'annonce particulièrement riche avec les représentations à l'Opéra et à la Comédie-Française, marquées par la reprise attendue du 'Juif polonais' à la Gaîté.",
    "paragraphs": [
      "La semaine théâtrale s'ouvre sur les programmes renouvelés de l'Opéra, de la Comédie-Française et de l'Odéon. Le public attend avec intérêt la reprise de la célèbre pièce « Le Juif polonais » qui sera donnée à la Gaîté."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Finances et Bourse",
    "title": "Bourse et vie économique",
    "summary": "La Bourse affiche une vitalité certaine malgré une activité concentrée sur les augmentations de capital. Les valeurs minières se raffermissent grâce aux succès militaires anglais en Afrique du Sud.",
    "paragraphs": [
      "Le Petit Parisien rappelle aux actionnaires le droit préférentiel de souscrire aux actions nouvelles au prix de 500 francs, une opportunité jugée avantageuse par le marché.",
      "L'augmentation de capital du Comptoir d'escompte a rencontré un plein succès ; les souscriptions seront réductibles au-dessus de vingt actions.",
      "La Banque de Paris et des Pays-Bas progresse, tout comme la Société générale, la Banque internationale et la Banque ottomane. Les cours demeurent fermes dans l'ensemble.",
      "Les recettes des six grands réseaux de chemin de fer continuent leur ascension, avec une hausse enregistrée de 1 365 000 francs entre le 30 avril et le 6 mai, portant l'augmentation totale de l'exercice à 12 808 000 francs.",
      "Le marché des actions a été moins animé cette semaine, l'épargne étant détournée vers les augmentations de capital des établissements de crédit, mais les cours restent bien tenus.",
      "La plupart des valeurs électriques subissent le contrecoup de la faiblesse des actions de la Traction, bien que la Bourse les maintienne au-dessus des plus bas cours. La Société parisienne électrique reste toutefois bien cotée.",
      "La compagnie des Wagons-Lits se maintient à 738 francs, les résultats financiers présentés au bilan du 31 décembre 1899 étant jugés très satisfaisants.",
      "La Volga-Vichera va subir une réorganisation pour se concentrer sur l'exploitation forestière et minière, après une séparation actée de ses activités d'exploitation.",
      "Le Rio a été attaqué par les vendeurs en raison d'un fléchissement du cours du cuivre, mais la statistique de quinzaine révèle une diminution du stock, permettant une légère reprise.",
      "La Huelva Central Copper se maintient à 270 francs grâce à une activité soutenue.",
      "Le marché des mines d'or retrouve de l'animation à la suite des succès des armes anglaises, laissant espérer une paix prochaine, ce qui profite aux titres Rand Mines et Goldfields."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Chronique industrielle",
    "title": "Mouvements de la Compagnie Générale de Traction",
    "summary": "Malgré un repli technique des actions de la Compagnie Générale de Traction, la situation financière reste robuste avec plus de 4 millions de francs de bénéfices réalisés sur l'exercice.",
    "paragraphs": [
      "Les actions de la Compagnie Générale de Traction ont subi un recul cette semaine, tombant à 280 francs avant d'amorcer une remontée partielle. Cette baisse s'explique par les besoins de liquidités de certains porteurs en vue de la souscription aux actions nouvelles.",
      "La situation de la Compagnie demeure prospère avec des bénéfices dépassant 4 millions de francs, permettant une distribution régulière aux actionnaires malgré l'augmentation du nombre de titres à rémunérer."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Variétés",
    "title": "Un usage à Babylone",
    "summary": "Une réflexion historique sur les pratiques médicales babyloniennes, où l'exposition publique des malades servait de consultation collective, illustrée par le récit d'une guérison personnelle exemplaire.",
    "paragraphs": [
      "Il était d'usage à Babylone d'exposer les malades sur la place publique afin que les passants pussent suggérer des remèdes. Un roi ayant été gravement mordu par un lion, les magiciens tentèrent de le guérir avec un serpent sacré, ce qui ne fit qu'aggraver son état.",
      "Le récit se poursuit à travers l'expérience de Mme Rosalie Rault, qui témoigne de ses propres souffrances après des couches laborieuses, critiquant l'inefficacité des remèdes classiques et magiciens, avant de trouver enfin le soulagement dans un traitement moderne."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Feuilleton",
    "title": "Mariage secret",
    "summary": "Le baron de Lorgerac reçoit le docteur Lecoutellier, précipitant le dénouement pour Rolande et Henri. Une entrevue décisive qui permet aux jeunes gens d'être enfin introduits auprès du père.",
    "paragraphs": [
      "Le baron de Lorgerac, dans son cabinet, reçoit le docteur Lecoutellier pour mettre fin à une situation familiale tendue. Pendant ce temps, Rolande et Henri attendent anxieusement devant l'hôtel.",
      "Le valet de chambre Joseph annonce enfin à Henri et Rolande que le baron les autorise à entrer. La scène de réconciliation, bien que marquée par une émotion nerveuse, permet aux deux jeunes gens d'être introduits auprès du père."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Mines et Industrie Russe",
    "title": "Développement des Forges Russes et nouvelles sociétés",
    "summary": "Analyse du développement industriel dans le bassin du Donetz, marquée par l'émission d'obligations de la Société Générale de Hauts Fourneaux et la création de la Compagnie Générale de Charbonnages.",
    "paragraphs": [
      "L'émission d'obligations de la Société Générale de Hauts Fourneaux, Forges et Aciéries en Russie attire vivement l'attention des capitalistes. Les usines, situées dans le bassin du Donetz, présentent des résultats de production prometteurs.",
      "Une nouvelle entreprise, la Compagnie Générale de Charbonnages, est fondée pour exploiter les mines du Donetz, avec des perspectives de rendement annuel des plus importantes."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Spectacles",
    "title": "Programme des théâtres du 21 mai",
    "summary": "Programme des représentations théâtrales parisiennes pour le dimanche 21 mai, incluant l'Opéra, la Comédie-Française, l'Olympia et les Folies-Bergère.",
    "paragraphs": [
      "La liste des représentations théâtrales à Paris pour le dimanche 21 mai inclut des pièces à l'Opéra, avec la représentation de Salammbô, à la Comédie-Française, ainsi que dans divers autres théâtres et salles de variétés tels que l'Olympia et les Folies-Bergère."
    ]
  }
];
