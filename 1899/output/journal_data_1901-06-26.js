// Date: 1901-06-26
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-06-26 (Version Restaurée, 31 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "L'image à l'école",
    "summary": "Le ministre de l'Instruction publique, M. Leygues, soutenu par M. Bayet, instaure l'usage de l'art et de l'image dans les écoles pour favoriser l'éveil concret de l'enfant et dépasser l'abstraction scolaire traditionnelle.",
    "paragraphs": [
      "On a dit de l'école qu'elle devait être la maison de l'enfance. Voilà une définition qui aurait bien surpris nos pères, du temps où Montaigne comparait à des geôles les rares établissements d'instruction publique qui fonctionnaient en France.",
      "C'est une opinion dont on commence à revenir. M. Leygues, ministre de l'Instruction publique, a décidé d'ouvrir aux chefs-d'œuvre de l'art les salles de nos écoles pour leur haute valeur éducative.",
      "M. Bayet, directeur de l'enseignement primaire, préconise l'usage d'images — livres illustrés sans texte, puis images murales — pour développer l'analyse visuelle et le langage avant d'aborder l'apprentissage formel de la lecture et de l'écriture.",
      "Le but des nouvelles méthodes est de substituer le concret à l'abstrait. Il faut que le génie artistique français pénètre la leçon du maître pour utiliser l'attrait du beau."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les deux aimées",
    "summary": "La marquise de Juversac et Mme de Baudreuil scellent leur réconciliation. Au milieu des retrouvailles, le portrait d'une mystérieuse orpheline nommée Arlette suscite l'admiration de la jeune Madeleine.",
    "paragraphs": [
      "La marquise de Juversac, accompagnée de Madeleine, arrive chez madame de Baudreuil pour remercier sa bienfaitrice. Philippe, ému, accueille sa mère et sa sœur.",
      "Une réconciliation touchante a lieu entre la marquise et madame de Baudreuil. Cette dernière présente Sybille à la marquise, scellant ainsi l'union et le bonheur futur des familles.",
      "Le dialogue révèle également l'existence d'une mystérieuse orpheline recueillie par le père de Madeleine, nommée Arlette, dont la beauté et la bonté sont décrites avec admiration par la jeune fille."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Marine",
    "title": "Les manœuvres navales",
    "summary": "L'amiral Gervais dirigera dès juillet des manœuvres navales majeures. Le programme prévoit des exercices de défense du littoral suivis d'une concentration de la flotte à Toulon pour les festivités du 14 juillet.",
    "paragraphs": [
      "Les manœuvres navales se dérouleront en deux périodes : du 3 au 9 juillet, des exercices à double action, suivis du 17 au 29 juillet par des manœuvres d'armée navale sous le commandement de l'amiral Gervais.",
      "Le thème de la première période consiste en la défense du littoral français contre deux forces navales ennemies. L'escadre française, basée en Méditerranée, aura pour tâche de surveiller et de contrer ces attaques.",
      "Après une concentration aux Salins-d'Hyères, les forces navales se rendront à Toulon pour la fête nationale, avant de reprendre la mer pour les exercices de fin juillet sur les côtes de Provence et de Corse."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Attaque en train",
    "summary": "Un ingénieur hollandais a été agressé dans un train près de Hautmont. Un des deux assaillants est mort en tentant de fuir le convoi en marche, tandis que le second a été appréhendé par les autorités.",
    "paragraphs": [
      "Dans la nuit, une agression violente a eu lieu dans un train entre Mons et Paris, à hauteur de la bifurcation de Hautmont. M. Sébald Saba, ingénieur hollandais, a été grièvement blessé par deux individus alors qu'il se trouvait dans un wagon de deuxième classe.",
      "La victime a réussi à tirer le signal d'alarme. L'un des agresseurs est mort en sautant du train en marche, tandis que le second a été arrêté. Il semble qu'il s'agisse d'une tentative de meurtre commise par des suspects potentiellement anarchistes, porteurs de faux billets."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Mort enragée",
    "summary": "Antoine Mandon, employé de la compagnie de l'Est, est décédé à Rosny-sous-Bois après avoir succombé à la rage, suite à l'interruption prématurée de son traitement à l'Institut Pasteur.",
    "paragraphs": [
      "Antoine Mandon, employé de la compagnie de l'Est, est décédé après une crise de rage furieuse. Mordu par un chien errant en février dernier, il avait interrompu son traitement à l'Institut Pasteur.",
      "Pris d'un malaise, il a brisé son mobilier avant de bondir par la fenêtre de son appartement à Rosny-sous-Bois. Maîtrisé par la gendarmerie, il est mort lors de son transfert vers l'infirmerie."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Le débat sur la révision constitutionnelle en Belgique",
    "summary": "À la Chambre des représentants, un débat animé oppose libéraux et socialistes au gouvernement catholique. L'enjeu porte sur la révision constitutionnelle et la suppression du suffrage plural.",
    "paragraphs": [
      "Un grand débat politique s'est ouvert à la Chambre des représentants de Belgique concernant la révision de la loi constitutionnelle et l'institution du suffrage universel.",
      "Le système électoral actuel, combinant suffrage plural et représentation proportionnelle, est vivement contesté par les libéraux et les socialistes qui réclament la suppression du suffrage plural. Les catholiques, au pouvoir, redoutent cette réforme qui favoriserait la gauche."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le procès de Richetto, le dépeceur de femmes",
    "summary": "La cour d'assises du Rhône a entamé le procès de Richetto. Accusé d'assassinats atroces, l'homme nie les faits face à une salle comble, alors que plus de cent témoins doivent être entendus cette semaine.",
    "paragraphs": [
      "La cour d'assises du Rhône a ouvert le procès de Richetto, accusé d'assassinats atroces. La salle est comble et les pièces à conviction, incluant une malle ayant contenu un cadavre, témoignent de la cruauté des crimes reprochés.",
      "L'accusé, âgé d'une cinquantaine d'années, a nié les faits et a tenté de contester les antécédents présentés par le président de la cour. Le procès, impliquant plus de cent témoins, devrait durer toute la semaine."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Faits Divers",
    "title": "Procès de Richetto : Interrogatoire sur les crimes de la rue Montesquieu",
    "summary": "L'interrogatoire de Richetto se concentre sur ses liens avec Planial. Le président de la cour confronte l'accusé à des preuves matérielles et des témoignages accablants, que l'inculpé nie avec véhémence.",
    "paragraphs": [
      "M. le Président interroge Richetto sur ses liens avec Planial. Richetto nie les faits malgré les preuves présentées par le Président, qui mentionne un témoin ayant vu Richetto à la porte du magasin le jour du crime, le 18 décembre 1894.",
      "L'interrogatoire se poursuit sur la période passée chez les frères Camilliens. Le Président souligne que Richetto, malgré ses faibles revenus, vivait dans une loge remplie d'objets hétéroclites, incluant du matériel de faux-monnayeur, ce que l'accusé conteste vivement."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le procès de Richetto : Manipulations et méthodes de l'accusé",
    "summary": "La justice examine les méthodes de manipulation employées par Richetto pour extorquer de l'argent à ses victimes, dont Mme veuve Noack et sa bonne, Marie Renaud, sous des prétextes fallacieux.",
    "paragraphs": [
      "Le Président met en lumière la stratégie de Richetto pour se faire passer pour une personne instruite, notamment auprès de Mme veuve Noack et de sa bonne, Marie Renaud.",
      "Il est question d'une somme de quatre cents francs que Richetto aurait extorquée à Marie Renaud. Bien que Richetto prétende avoir eu l'intention de les rendre, le Président affirme que Marie Renaud est convaincue qu'elle aurait subi le même sort que ses autres victimes si elle ne s'était pas exécutée."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incident à l'audience : L'oubli de Richetto",
    "summary": "Un incident insolite a retardé la reprise du procès de Richetto : l'accusé ayant été oublié par le personnel carcéral au moment du déjeuner, la séance n'a pu reprendre qu'à trois heures moins vingt.",
    "paragraphs": [
      "L'audience, prévue pour reprendre à deux heures, est retardée. On apprend que l'accusé, Richetto, n'a pas déjeuné car il a été oublié par le personnel carcéral. La séance ne peut reprendre qu'à trois heures moins vingt."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Reprise de l'audience : Les crimes des veuves Delorme et Catinot",
    "summary": "Le président Breuillac interroge Richetto sur les meurtres des veuves Delorme et Catinot. L'accusé persiste à nier, malgré la découverte de journaux compromettants le liant aux cadavres.",
    "paragraphs": [
      "Le président Breuillac a repris l'interrogatoire en abordant les crimes atroces des veuves Delorme et Catinot, ainsi que la macabre découverte faite par Mme Voirin dans la mare de la propriété de Mme veuve Noack.",
      "Richetto nie avec opiniâtreté toute implication, en dépit des éléments matériels troublants présentés par l'accusation, notamment des journaux trouvés à son domicile qui complètent précisément ceux retrouvés auprès des cadavres."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Chambre des Députés",
    "title": "Séances sur la loi des retraites ouvrières",
    "summary": "La Chambre des députés a débattu du projet sur les retraites ouvrières. M. Caillaux, ministre des Finances, a défendu le système de capitalisation contre les contre-projets. Reprise des débats jeudi.",
    "paragraphs": [
      "La Chambre a consacré ses séances de la matinée et de l'après-midi à la discussion du projet de loi sur les retraites ouvrières, rejetant les divers contre-projets déposés par plusieurs députés.",
      "Le ministre des Finances, M. Caillaux, a vigoureusement combattu le système de répartition au profit de celui de la capitalisation. Les débats doivent se poursuivre jeudi matin."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Événements de Chine",
    "summary": "Le ministre de la Marine annonce le départ du Rinh-Long vers Toulon. En Chine, l'avancée de Tung-Puh-Siang sur Taï-Yuen-Fu alarme le gouverneur du Chan-Si qui réclame l'aide des puissances.",
    "paragraphs": [
      "Le ministre de la Marine a reçu une dépêche du général Voyron annonçant le départ du navire Rinh-Long vers Toulon, transportant un grand nombre de gradés et de troupes.",
      "Des nouvelles de Tien-Tsin indiquent que Tung-Puh-Siang marcherait sur Taï-Yuen-Fu et que le gouverneur du Chan-Si réclamerait instamment l'assistance des puissances étrangères."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Dépêches de l'étranger",
    "title": "Grèves et incidents internationaux",
    "summary": "L'actualité est marquée par une grève violente au Simplon, un incendie criminel en Espagne et la faillite de la Leipziger Bank, conséquence directe de la crise financière de Dresde.",
    "paragraphs": [
      "Une grève a éclaté parmi les ouvriers du Simplon, marquée par des attaques contre les baraquements et nécessitant l'intervention des forces de gendarmerie. À Arguelles Siero, en Espagne, une église a été détruite par un incendie volontaire.",
      "En Allemagne, la Leipziger Bank a dû suspendre ses paiements, entraînée par la débâcle financière de la Creditanstalt de Dresde."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Haute Cour",
    "title": "Procès de M. de Lur-Saluces",
    "summary": "Le procès de M. de Lur-Saluces se poursuit avec l'audition de témoins sur les ligues patriotiques. Le procureur général Bernard a requis l'application stricte de la loi.",
    "paragraphs": [
      "Les débats du procès de M. de Lur-Saluces se sont poursuivis dans le calme. L'accusé, fidèle à son attitude, a laissé ses défenseurs faciliter la tâche de la Cour.",
      "Plusieurs témoins, dont le général Zurlinden et des commissaires de police, ont été entendus sur les événements entourant les obsèques de Félix Faure et les activités des ligues patriotiques. Le procureur général Bernard a ensuite prononcé son réquisitoire, demandant l'application pure et simple de la loi."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Informations politiques et sociales",
    "summary": "La commission sénatoriale de l'armée se prononce pour une réduction du service militaire à deux ans, tandis que les agents de chemins de fer sollicitent une nouvelle réglementation du travail.",
    "paragraphs": [
      "La commission sénatoriale de l'armée a exprimé l'avis qu'il y avait lieu de réduire la durée du service militaire à deux ans.",
      "Par ailleurs, une délégation des agents des chemins de fer a demandé au groupe parlementaire la reprise de la proposition de M. Bertaux sur la réglementation du travail."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Chronique Politique",
    "title": "Le réquisitoire contre M. de Lur-Saluces",
    "summary": "Le ministère public fustige l'activisme royaliste de M. de Lur-Saluces et requiert une condamnation exemplaire, soulignant la responsabilité de l'accusé dans l'agitation politique du pays.",
    "paragraphs": [
      "La correspondance de l'accusé prouve qu'il est plus loyaliste que le roi. Il se plaint de la mollesse du prétendant qu'il pousse à la guerre civile. Les plus compromettants appels envoyés au prince, le suppliant de se rapprocher de la frontière, sont de lui ; les manifestations royalistes les plus violentes ont été organisées par lui.",
      "Vous condamnerez M. de Lur-Saluces à la peine que vous trouverez juste. Je m'en rapporte à votre sagesse pour la quotité de la peine. Mais un exemple est nécessaire. Il ne serait pas juste de faire bénéficier M. de Lur-Saluces du calme dont nous jouissons, bien malgré lui.",
      "Les intérêts les plus sacrés de notre pays exigent une condamnation ; la garde de la République est en vos mains et ne peut être en de meilleures mains. J'attends avec confiance votre verdict. M. Jacquier demande le renvoi de l'audience à demain pour la plaidoirie qu'il doit prononcer en faveur de M. de Lur-Saluces. Cette demande est agréée par le président.",
      "L'audience est fixée à aujourd'hui, à deux heures, et, conformément aux ordres des magistrats, M. de Lur-Saluces a été, comme hier, reconduit à la prison de la Santé."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "La Foire aux cheveux de Limoges",
    "summary": "La foire aux cheveux de Limoges enregistre une hausse des cours cette année, portée par une demande internationale soutenue, les teintes claires restant les plus prisées des acheteurs.",
    "paragraphs": [
      "La foire aux cheveux traditionnelle s'est tenue hier matin, à Limoges.",
      "Des acheteurs venus des États-Unis et de Belgique se rendent chaque année à cette foire où le total des transactions atteint souvent 100 000 francs.",
      "Cette année, il y a eu hausse sur le prix des cheveux, augmentation que l'on attribue aux changements récents de coiffures.",
      "On sait que les cheveux noirs sont ceux qui ont le moins de valeur, tandis que les blancs atteignent le prix le plus élevé. Le cours a été une fois de plus réglé sur cette base et le kilogramme de cheveux, suivant la couleur et la longueur, s'est vendu de 60 à 100 francs et au-dessus."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Bulletin du travail",
    "title": "Interdiction du blanc de céruse par le ministère des Travaux publics",
    "summary": "M. Pierre Baudin interdit l'usage du blanc de céruse sur les chantiers de l'État, privilégiant le blanc de zinc pour des raisons d'hygiène et de santé publique.",
    "paragraphs": [
      "M. Pierre Baudin, ministre des Travaux publics, vient d'adresser aux préfets une circulaire concernant les dangers pour la santé des ouvriers liés à l'usage des couleurs à base de céruse.",
      "Il ressort de l'enquête que la substitution du blanc de zinc au blanc de céruse est souhaitable au point de vue de l'hygiène et réalisable techniquement. J'ai en conséquence décidé que, dans tous les travaux exécutés pour le compte de mon administration, il sera désormais interdit de faire usage de couleurs ou enduits à base de blanc de céruse.",
      "Les marchés à passer pour l'exécution de ces travaux devront mentionner cette interdiction dans une clause spéciale des cahiers des charges."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Social",
    "title": "Congrès du personnel civil des établissements militaires",
    "summary": "Le personnel civil de l'artillerie et du génie réclame une revalorisation salariale et une réforme des retraites, avec une délégation dépêchée auprès du ministre de la Guerre.",
    "paragraphs": [
      "Dans la matinée d'hier, le congrès du personnel civil des établissements de l'artillerie et du génie a décidé de réclamer pour les manœuvres un salaire minimum de 50 centimes de l'heure pour la Seine et Seine-et-Oise et de 40 centimes dans les autres départements.",
      "La séance de l'après-midi a été consacrée à la question des retraites. Le congrès demande que la retraite proportionnelle soit basée sur des annuités précises pour les hommes et les femmes.",
      "Une délégation sera reçue aujourd'hui par le groupe parlementaire de la Chambre et par le ministre de la Guerre."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame au Palais de Justice : les complices de Bourcelet",
    "summary": "L'enquête de la Sûreté révèle que l'arme utilisée par Bourcelet contre son ancienne maîtresse lui fut fournie en prison par son complice, Carlinet, désormais écroué suite à la découverte de lettres incriminantes.",
    "paragraphs": [
      "L'enquête menée par M. Cochefert, chef de la Sûreté, a établi que l'arme ayant servi à Bourcelet pour frapper son ancienne maîtresse, Camille Feuillat, lui avait été remise à la prison de la Santé par un ami nommé Carlinet.",
      "Une perquisition effectuée au domicile de Carlinet a permis la découverte de lettres échangées entre le prisonnier et son complice, faisant état de leurs projets homicides. Carlinet a été arrêté et écroué au dépôt."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Décès par erreur d'étiquette pharmaceutique",
    "summary": "Tragique accident domestique : le jeune Charles Boyon, dix ans, a succombé après avoir absorbé de l'alcool à 90 degrés, confondu avec une potion calmante par suite d'une erreur d'étiquetage en pharmacie.",
    "paragraphs": [
      "Une erreur d'étiquette sur un flacon contenant une potion pharmaceutique a causé la mort d'un jeune garçon, Charles Boyon, âgé de dix ans et demi.",
      "L'élève en pharmacie s'était trompé de bouteille lors de l'étiquetage, et le jeune malade a absorbé de l'alcool à 90 degrés au lieu de la potion calmante prescrite. M. Carpin, commissaire de police du quartier Clignancourt, a reçu la déclaration et a immédiatement avisé le parquet."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Explosion dans une caserne",
    "summary": "Une explosion inattendue à la caserne de Latour-Maubourg, provoquée par des rats ayant renversé une vieille gamelle contenant des culots de cartouches à tir réduit chargés de fulminate.",
    "paragraphs": [
      "M. Albanel, juge d'instruction, s'est rendu à la caserne de Latour-Maubourg afin d'enquêter sur une explosion survenue dans les locaux. Il a été découvert que des culots de cartouches à tir réduit, contenant du fulminate, avaient été déposés dans une vieille gamelle. L'ustensile, renversé par le passage de rats, a provoqué la détonation."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression de la rue de Mulhouse",
    "summary": "Deux repris de justice, Léon Petit et Henri Winter, ont été appréhendés par des agents cyclistes après avoir agressé et dépouillé un ouvrier plombier dans la rue de Mulhouse.",
    "paragraphs": [
      "Un ouvrier plombier a été attiré par deux individus dans la rue de Mulhouse, puis roué de coups et dévalisé. Fort heureusement, deux agents cyclistes sont intervenus à temps pour arrêter les coupables, identifiés comme étant Léon Petit et Henri Winter, deux repris de justice bien connus des services."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Fusillade dans la rue de Tourtille",
    "summary": "Une violente altercation dans un débit de vin de la rue de Tourtille a tourné à la fusillade. Deux ouvriers ont été grièvement blessés par une bande d'agresseurs ; l'état de l'un d'eux est jugé alarmant.",
    "paragraphs": [
      "Trois ouvriers ont été attaqués par une dizaine d'individus dans un débit de vin. Suite à une querelle, les agresseurs ont fait usage de revolvers. M. Drouin a été atteint par un projectile à la cuisse, tandis que M. Georges a reçu un coup de couteau dans les reins. L'état de M. Drouin est jugé alarmant par les médecins."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Courageux soldat",
    "summary": "Place de la Nation, le soldat Alphonse Jouhort, du 9e régiment d'infanterie, a maîtrisé un cheval emballé après une course de 150 mètres, évitant un accident grave malgré quelques contusions.",
    "paragraphs": [
      "Le cheval d'un cocher s'étant emballé place de la Nation, le soldat Alphonse Jouhort, du 9e régiment d'infanterie, a réussi à maîtriser l'animal après une course de 150 mètres, évitant tout accident malgré des contusions subies."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie d'un chaland",
    "summary": "Un incendie a ravagé hier soir le chaland 'Oise 2' sur le canal de l'Ourcq. Les pompiers ont lutté deux heures pour maîtriser le sinistre touchant une cargaison de tissus, de cacao et de poivre.",
    "paragraphs": [
      "Un incendie s'est déclaré hier soir à bord du chaland 'Oise 2', amarré dans le canal de l'Ourcq, chargé de tissus caoutchoutés, de cacao et de poivre. Les pompiers ont lutté pendant deux heures pour maîtriser le sinistre."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Faits Divers",
    "title": "Décès tragique de M. Devoyod",
    "summary": "Le chanteur lyrique M. Devoyod, ancien élève du Conservatoire, a été terrassé par une paralysie du cœur en pleine scène, lors d'une représentation de Rigoletto, après le duo du troisième acte.",
    "paragraphs": [
      "M. Devoyod chantait le rôle de Rigoletto quand une paralysie du cœur le foudroya en scène, après le duo du troisième acte.",
      "La représentation fut interrompue, mais les médecins ne purent que constater le décès.",
      "M. Devoyod était sorti en 1866 du Conservatoire de Paris avec un premier prix d'opéra. Il fit longtemps partie de notre Académie nationale de musique, puis, ayant choisi la carrière italienne, il quitta la France pour aller remporter à l'étranger de brillants et fructueux succès."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Concerts et divertissements",
    "title": "Revue à Marigny et répétitions à Parisiana",
    "summary": "La revue 'Paris-Frou-Frou' de Marigny éblouit par ses tableaux sur la femme moderne, tandis que Louis Varney dirige activement les répétitions de l'opérette 'Le Papa de Francine' à Parisiana.",
    "paragraphs": [
      "La journée d'une Parisienne au vingtième siècle, tel est le titre et le sujet du second tableau de Paris-Frou-Frou, la merveilleuse revue de Marigny. Tandis que Mme Germaine Gallois chante d'exquis couplets, on voit défiler successivement, représentés par de jolies femmes en des costumes d'un goût et d'une richesse extrêmes, tous les accessoires de toilette de la femme. Mlle Eugénie Fougère, la chanteuse excentrique, n'est pas un des moindres attraits du programme de Marigny.",
      "Le maître Louis Varney dirige les dernières répétitions à l'orchestre du Papa de Francine à Parisiana. Il a réglé lui-même la mise en scène qui sera des plus curieuses. Tous ces détails, ainsi que le nom des interprètes, feront de la reprise de l'amusante opérette un événement dont on parlera."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Concerts et orphéons",
    "title": "Programme musical du mercredi 26 juin",
    "summary": "Ce mercredi, les régiments de ligne proposeront des concerts au Palais-Royal et au square de Vaugirard, interprétant des œuvres de Rossini, Léo Delibes et d'autres maîtres de la musique.",
    "paragraphs": [
      "Palais-Royal : Régiment de ligne. Chef : M. Suzanne. Au programme : Le Tout-Paris, A. Loyer. Les Deux Fiancés, G. Jarès. Musettes et clairons, Pénavaire. Lakmé, Léo Delibes. Gracieux Sourire, Furgeot.",
      "Square de Vaugirard : Régiment de ligne. Chef : M. Thiriet. Au programme : Thiriet, Guillaume Tell, Rossini."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Secret du Bonheur - Partie 3 (VII)",
    "summary": "Lors d'une réception à Bon-Abri, Robert retrouve l'héritière qu'il a sauvée. Entre confidences et complicité naissante, la jeune femme exprime son mépris pour les courtisans intéressés qui l'entourent.",
    "paragraphs": [
      "Et ce ne fut qu'un peu plus loin qu'il dit : « Bonjour, mademoiselle. Et grand merci de la faveur dont vous m'honorez, quoique je pense bien que je la doive plutôt à votre besoin de vous débarrasser de tous ces frelons. »",
      "« Ah ! que vous les avez bien nommés », s'écria-t-elle en éclatant de rire. « Et que vous les verriez moins empressés, si, au lieu d'habiter cette belle propriété, je vivais en une maisonnette, et si, au lieu d'être la fille de mon père, j'appartenais à une modeste famille. »",
      "« De la plus belle fleur ? » interrompit Robert, tout gai de se sentir si vite en si bonne amitié, en telle confiance avec elle.",
      "« Ah ! mon cher monsieur », répliqua-t-elle avec une pointe de mélancolique dédain, « de la plus riche, surtout ! » Mais, d'un petit geste, elle balayait tous ces inutiles et fixait le plus engageant regard sur Robert, semblant lui dire : « Laissons tout cela, et occupons-nous de nous. »",
      "« Aujourd'hui, monsieur, ce n'est pas mon père qui nous donne une fête, c'est ma tante. Et il a fallu cela, et même, paraît-il, un peu d'insistance de la part de mon père, pour qu'on revoie, à Bon-Abri, le courageux cycliste à qui je dois la vie. »"
    ]
  }
];
