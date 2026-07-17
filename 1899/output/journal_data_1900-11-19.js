// Date: 1900-11-19
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-11-19 (Version Restaurée, 36 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique Artistique",
    "title": "Au Luxembourg : nécessité de réformes et d'agrandissements",
    "summary": "Le musée du Luxembourg, à l'exiguïté chronique, réclame des réformes. M. Georges Berger préconise une extension rue Auguste-Comte pour pallier l'encombrement critique des collections nationales.",
    "paragraphs": [
      "Chaque année, quand la Chambre aborde la discussion du budget des Beaux-Arts, le ministre, le rapporteur, les députés, tout le monde enfin est d'accord pour reconnaître la nécessité de larges réformes dans l'organisation de nos musées nationaux.",
      "Au Luxembourg, l'urgence des agrandissements est plus manifeste encore. C'est par un véritable tour de force que l'administration parvient à conserver, dans un local ridiculement exigu, des collections qui s'accroissent sans cesse.",
      "Le musée du Luxembourg, installé dans le palais de Marie de Médicis, a été ouvert en 1750. Il a été progressivement transformé en musée des arts contemporains sous la direction de M. Léonce Bénédite.",
      "La situation actuelle est critique : manque de magasins, d'ateliers, de vestiaires et de logements pour le conservateur. Les salles sont encombrées et les œuvres sont exposées de façon précaire.",
      "Il est temps d'agir. M. Georges Berger, chargé du rapport du budget, préconise une construction nouvelle le long de la rue Auguste-Comte, en face du petit lycée Louis-le-Grand."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille - Marie Madeleine",
    "summary": "Maurice de Rambert, regagnant son pavillon, médite avec une amertume teintée de nostalgie sur son escapade rurale et la séduction de la paysanne Rose, souvenir d'un caprice vieux de quatre ans.",
    "paragraphs": [
      "En arrivant à la porte du coquet pavillon qu'il occupait à l'hôtel de son père, Maurice de Rambert n'eut pas besoin d'avertir le concierge : il était à son poste.",
      "Le maître passa dans son cabinet, le seul appartement qu'il occupât avec sa chambre à coucher. Les trois quarts de son existence se passaient au dehors, au cercle, dans les restaurants en vogue ou dans le monde.",
      "Quatre années entières depuis le petit roman rural, depuis cette églogue champêtre, depuis cette conquête qui lui laissait des souvenirs si doux et si amers à la fois. Maurice ne pouvait s'empêcher de regretter la paysanne Rose, qu'il s'était acharné à séduire pour la satisfaction d'un caprice."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Élections",
    "title": "Élection municipale à Paris - Premier arrondissement",
    "summary": "Dans le quartier des Halles, M. Quentin est élu conseiller municipal en remplacement de M. Lamouroux, décédé.",
    "paragraphs": [
      "Quartier des Halles. Inscrits 6 586. M. Quentin est élu. Cette élection avait lieu en remplacement de M. Lamouroux, décédé."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Élections",
    "title": "Élection législative du 18 novembre - Var",
    "summary": "Suite au décès de M. Cluseret, un ballottage est ouvert dans la deuxième circonscription de Toulon, où M. A. Grébaoval se place en tête des suffrages.",
    "paragraphs": [
      "Deuxième circonscription de Toulon. Inscrits 18 778. M. A. Grébaoval est en tête. Il y a ballottage. L'élection avait lieu en remplacement de M. Cluseret, républicain, décédé."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "Le Président Kruger",
    "summary": "La France se prépare à accueillir le président Kruger. Si le vieil homme incarne la liberté d'un peuple héroïque, la nation n'oublie pas que le Transvaal reste sous l'ombre de la défaite britannique.",
    "paragraphs": [
      "L'arrivée du président Kruger est imminente. La France, on peut même dire l'Europe, lui fera certainement un accueil en rapport avec l'admiration inspirée par le peuple héroïque dont il est la personnification.",
      "Sur son passage, toutes les têtes se découvriront avec respect, et chacun saluera la vivante image de la liberté d'un peuple ; mais on n'oubliera pas que cet illustre vieillard est un vaincu.",
      "Au point de vue diplomatique, la République du Transvaal, État indépendant reconnu tel par tous les gouvernements, n'a pas cessé d'exister en théorie, malgré l'occupation militaire britannique."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Réception du Président Kruger à Marseille et Dijon",
    "summary": "Le comité d'organisation de Marseille finalise le programme de réception du Président Kruger. À Dijon, on a décidé d'une réception par les anciens maires pour éviter toute exploitation politique de l'événement.",
    "paragraphs": [
      "À Marseille, le comité d'organisation a arrêté les derniers points du programme. Les discours seront réservés pour le banquet qui aura lieu le soir aux salons Pain.",
      "À Dijon, il a été décidé, afin d'éviter tout caractère politique, que ce seraient tous les anciens maires de Dijon et le maire actuel qui recevraient le président de la République du Transvaal à sa descente du train."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Suite du déraillement du Sud-Express",
    "summary": "L'enquête sur le déraillement du Sud-Express privilégie les pistes d'un affaissement de voie ou d'une défectuosité matérielle. L'amiral Canevaro est arrivé à Dax pour assister aux obsèques des siens.",
    "paragraphs": [
      "Les enquêtes administrative et judiciaire se poursuivent activement. La catastrophe est due soit à un affaissement de la voie produit par les pluies, soit à la corruption intérieure d'une ou plusieurs traverses.",
      "Le directeur des chemins de fer du Midi est allé visiter les blessés à Bayonne. Mme Canevaro paraît être absolument hors de danger.",
      "Les corps des victimes ont été pour la plupart réclamés. L'amiral Canevaro est arrivé à Dax pour les démarches funèbres relatives aux membres de sa famille."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Social",
    "title": "Les internés de Calvi",
    "summary": "Le nouveau gouverneur général de l'Algérie examine les dossiers des indigènes internés à Calvi depuis l'insurrection de 1871 afin d'envisager d'éventuelles mesures de clémence.",
    "paragraphs": [
      "Une dépêche a annoncé que le nouveau gouverneur général de l'Algérie s'est fait représenter les papiers des indigènes internés à Calvi en vue de déterminer les mesures de clémence dont ces indigènes seraient susceptibles d'être l'objet.",
      "Calvi sert, depuis l'insurrection de 1871, de lieu d'internement pour les Arabes, condamnés politiques pour la plupart. Ils vivent dans une liberté relative, mais éloignés du sol natal."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Santé",
    "title": "La maladie du Tsar",
    "summary": "Le bulletin de santé officiel publié à Livadia ce 18 novembre confirme que l'Empereur a passé une nuit calme et que son état général demeure satisfaisant.",
    "paragraphs": [
      "Livadia, 18 novembre. Le bulletin suivant a été publié à onze heures du matin : L'Empereur a bien passé la journée d'hier et a un peu dormi. L'état général est satisfaisant."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame dans le Grand Monde - L'affaire Cornulier",
    "summary": "M. de Cornulier doit être entendu ce jour par le juge d'instruction sur le drame de la rue de Provence. L'inculpé espère convaincre le jury qu'il n'avait aucune intention homicide envers son épouse.",
    "paragraphs": [
      "M. de Cornulier, le triste héros du drame sanglant qui s'est passé rue de Provence, n'a pas été interrogé hier par M. André, juge d'instruction, en raison du repos dominical. C'est aujourd'hui qu'il sera amené en présence du magistrat.",
      "M. de Cornulier compte sur un acquittement. Il espère prouver au jury de la Seine qu'il n'avait nullement l'intention de tuer sa femme et qu'il voulait seulement provoquer un gros scandale et faire constater l'adultère."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits divers",
    "title": "L'assassinat de la rue de Provence",
    "summary": "M. Leroux, ancien avoué, dément formellement les accusations du comte de Cornulier. Ce dernier, cherchant à s'approprier la fortune de son épouse, a tenté de salir la mémoire de la défunte par des allégations calomnieuses.",
    "paragraphs": [
      "M. Leroux, ancien avoué, a été entendu dans le cadre de l'interrogatoire sur le meurtre de la comtesse de Cornulier. Il réfute les allégations de M. de Cornulier, qui l'accuse d'avoir été l'amant de sa femme afin de ternir la mémoire de celle-ci.",
      "Le mariage entre M. de Cornulier et Mlle Geneviève Pineau, vicomtesse de Viennay, fut marqué par une mésintelligence profonde, née de caractères incompatibles. Après une séparation de corps prononcée il y a deux ans, la garde des enfants fut confiée à la comtesse.",
      "L'arrêt rendu par la Cour d'appel en août 1899 a accru la fureur du comte, qui ne cherchait qu'à s'approprier la fortune de son épouse. Le jour du crime, la comtesse était venue chez M. Leroux pour affaires et fut assassinée peu après sa sortie."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits divers",
    "title": "La déposition du père de la victime",
    "summary": "M. Pineau de Viennay, père de la comtesse, a témoigné devant le juge d'instruction, confirmant l'honorabilité de M. Leroux et dénonçant la conduite criminelle de son ex-gendre.",
    "paragraphs": [
      "M. Pineau de Viennay, père de la comtesse, est arrivé à Paris et a déposé devant le juge d'instruction, confirmant l'honorabilité de M. Leroux.",
      "M. de Viennay a fermement démenti les rumeurs de relations galantes entre sa fille et son conseil, qualifiant l'acte de son ex-gendre de criminel et condamnant avec vigueur sa conduite habituelle."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits divers",
    "title": "Les objets retrouvés sur le meurtrier",
    "summary": "Lors de la saisie, M. le commissaire Tanguy a découvert sur M. de Cornulier non seulement le revolver du crime, mais aussi un testament et des objets de piété attestant d'une dévotion religieuse affirmée.",
    "paragraphs": [
      "M. Tanguy, commissaire de police, a transmis la procédure au parquet. Outre le revolver ayant servi au crime, M. de Cornulier possédait un couteau de chasse, un chapelet et des médailles religieuses.",
      "Il portait également un testament rédigé depuis plusieurs années, témoignant d'une dévotion religieuse affirmée, dans lequel il affirmait vouloir mourir dans la religion de ses pères."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Nouvelles maritimes",
    "title": "L'Escadre du Nord",
    "summary": "Changements de commandement au sein de l'Escadre du Nord : le contre-amiral Touehard cède sa place au contre-amiral de Bausset, avec une réorganisation annoncée en deux divisions distinctes.",
    "paragraphs": [
      "Le contre-amiral Touehard, arrivé au terme de son commandement, amènera son pavillon à bord du Foudre. Le contre-amiral de Bausset le remplacera sur le Bouvines.",
      "L'Escadre du Nord sera prochainement réorganisée en deux divisions : celle des garde-côtes et celle des croiseurs."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Décoration du 1er régiment d'infanterie de marine",
    "summary": "Sur la demande du général Lambert, le drapeau du 1er régiment d'infanterie de marine recevra la croix de la Légion d'honneur en hommage à son héroïque conduite lors de la bataille de Bazeilles.",
    "paragraphs": [
      "Le ministre de la Marine a répondu favorablement à M. le général Lambert concernant la demande de décoration du drapeau du 1er régiment d'infanterie de marine pour sa conduite héroïque lors de la guerre de 1870, notamment à Bazeilles.",
      "Le ministre s'est engagé à prendre les mesures nécessaires pour que la croix de la Légion d'honneur soit remise à ce corps d'élite."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Chronique militaire",
    "title": "La réforme de la justice militaire",
    "summary": "Le ministère de la Guerre élabore trois projets majeurs de réforme visant à moderniser le code de justice militaire, les prisons et les parquets, en introduisant notamment le principe des circonstances atténuantes.",
    "paragraphs": [
      "Le ministère de la Guerre prépare actuellement trois projets de réforme : une refonte du code de justice militaire, une révision du règlement des prisons et une réorganisation des parquets militaires.",
      "Il s'agit de mettre les lois en conformité avec les mœurs actuelles, notamment en supprimant certaines peines disproportionnées, comme la peine de mort pour des faits mineurs, et en introduisant le principe des circonstances atténuantes."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Interview du docteur Bestchoff",
    "summary": "De retour du Transvaal, le docteur Paul-Serge Bestchoff décrit les conditions sanitaires précaires sur le front et souligne le découragement des troupes britanniques face aux tactiques de guérilla des Boers.",
    "paragraphs": [
      "Le docteur Paul-Serge Bestchoff, qui a servi comme médecin au Transvaal, témoigne des conditions difficiles dans les ambulances, marquées par un manque criant de matériel et des soins prodigués dans des circonstances précaires.",
      "Il souligne également le découragement des troupes anglaises face aux tactiques des Boers et l'incertitude persistante quant à la durée de ce conflit."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Dépêches étrangères",
    "title": "Nouvelles de Chine",
    "summary": "L'arrestation des princes Tuan et Yu-Hsien marque un tournant dans les troubles en Chine. À Pékin, le maréchal de Waldersee intensifie les pourparlers pour assurer la sécurité des troupes alliées.",
    "paragraphs": [
      "Des dépêches signalent l'arrestation des princes Tuan et Yu-Hsien, instigateurs supposés des troubles, alors qu'ils tentaient de fuir.",
      "À Pékin, le maréchal de Waldersee a reçu le prince Ching et Li-Hung-Chang, exigeant le retrait immédiat des troupes chinoises à proximité des forces alliées."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits divers",
    "title": "Incidents en Europe",
    "summary": "L'actualité européenne est marquée par divers incidents, incluant un drame personnel à Malines, une tentative d'attentat déjouée à Berlin et une collision maritime dans le port de Kiel.",
    "paragraphs": [
      "À Malines, une femme atteinte d'aliénation mentale a mis fin à ses jours. À Berlin, l'Empereur a ordonné de ne pas donner suite à une tentative d'attentat commise par une femme souffrant de délire de persécution.",
      "Par ailleurs, une collision mineure s'est produite dans le port de Kiel entre deux cuirassés allemands, l'Empereur-Frédéric-III et l'Empereur-Guillaume-II."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Social",
    "title": "Inauguration de l'hôtel de ville de Versailles",
    "summary": "Le nouvel hôtel de ville de Versailles a été inauguré par M. Henry Roujon, directeur des Beaux-Arts. La cérémonie a été marquée par une architecture unanimement saluée et des remises de décorations.",
    "paragraphs": [
      "La cérémonie d'inauguration du nouvel hôtel de ville de Versailles s'est tenue en présence de M. Henry Roujon, directeur des Beaux-Arts, et de nombreuses personnalités.",
      "L'édifice a été unanimement salué pour son architecture harmonieuse. À cette occasion, des décorations ont été remises à plusieurs membres du personnel et agents de la municipalité."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Vie professionnelle",
    "title": "Défilé des compagnons charpentiers",
    "summary": "Les compagnons charpentiers du Devoir ont défilé solennellement dans Paris pour exposer leurs chefs-d'œuvre destinés à l'Exposition universelle de 1900, acclamés par une foule nombreuse jusqu'à l'Hôtel de Ville.",
    "paragraphs": [
      "Les compagnons charpentiers du Devoir ont organisé, hier, un défilé solennel à travers les rues de Paris, afin de présenter au public leurs chefs-d'œuvre destinés à l'Exposition universelle de 1900.",
      "Le cortège, déployé avec ordre, a parcouru les grands boulevards dans une atmosphère empreinte de fierté corporative avant d'atteindre l'Hôtel de Ville, suscitant, tout au long du trajet, l'admiration enthousiaste de la foule parisienne."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Social",
    "title": "Les employés de l'octroi",
    "summary": "La ligue des employés de l'octroi a tenu sa fête annuelle aux salons de la Porte-Dorée. Présidée par M. Jullié, la cérémonie fut ponctuée d'un concert et d'un bal très suivis par les invités.",
    "paragraphs": [
      "La dernière des fêtes organisées par la ligue des employés de l'octroi a été célébrée hier après-midi, avec grand succès, dans les salons de la Porte-Dorée, avenue Daumesnil.",
      "M. Jullié, conseiller municipal, présidait cette manifestation qui, à l'instar des deux précédentes, s'est prolongée par un concert brillant suivi d'un bal de nuit. Les invités, fort nombreux, furent accueillis avec distinction par le président de la ligue, M. Cornet."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Social",
    "title": "Les Aveyronnais de Paris",
    "summary": "La société des Aveyronnais de Paris a célébré sa quatrième fête annuelle au restaurant Vaatter. M. Maruéjouls, député, a honoré de sa présence ce banquet marqué par des toasts à la solidarité provinciale.",
    "paragraphs": [
      "La société des Aveyronnais de Paris donnait, hier soir, au restaurant Vaatter, avenue de Clichy, sa quatrième fête annuelle, réunissant les ressortissants de ce département dans une ambiance cordiale.",
      "Au cours du banquet, des toasts furent portés par MM. Maruéjouls, député, et Hejambe, célébrant les liens de solidarité provinciale. Un poète local a également fait les honneurs de la fête, déclamant des vers en l'honneur du Rouergue."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Désespoir d'une abandonnée",
    "summary": "Une jeune femme, enceinte et lâchement abandonnée par son fiancé, a été transportée à l'hôpital dans un état grave après avoir tenté de mettre fin à ses jours au dépôt de la police.",
    "paragraphs": [
      "Une scène poignante s'est déroulée au dépôt de la police. Une jeune femme, trouvée dans un état désespéré, a été transportée d'urgence à l'hôpital.",
      "Selon les premières constatations, la malheureuse aurait cherché à mettre fin à ses jours après avoir été ignominieusement abandonnée par son fiancé, alors qu'elle se trouvait dans une situation de grossesse avancée."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame mystérieux au pont Notre-Dame",
    "summary": "Une femme d'environ vingt-cinq ans s'est jetée dans la Seine depuis le pont Notre-Dame. Malgré le courage d'un marinier, la victime a sombré ; une enquête est en cours pour identifier l'inconnue.",
    "paragraphs": [
      "Un drame s'est produit hier au pont Notre-Dame. Une femme, paraissant âgée d'environ vingt-cinq ans, s'est soudainement précipitée dans les eaux glacées de la Seine.",
      "Malgré les efforts immédiats et courageux d'un marinier qui a tenté de lui porter secours, la victime a été emportée par le courant. Une enquête de police a été ouverte afin de déterminer les causes de cet acte désespéré et d'identifier la malheureuse."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une voleuse de secours",
    "summary": "Reine Gilard, malade et indigente, a été dévalisée par sa voisine Adrienne Moreau, qui a subtilisé dix francs envoyés par l'enfant de la victime. La coupable a été arrêtée par les autorités.",
    "paragraphs": [
      "Reine Gilard, femme souffrante et indigente, a été victime d'un vol odieux. Une voisine indélicate, nommée Adrienne Moreau, a profité de l'état de faiblesse de la malheureuse pour subtiliser la somme de dix francs qui venait de lui être envoyée par son enfant.",
      "Informée de ce méfait, la police a procédé à l'arrestation immédiate de la coupable, qui devra répondre de cet acte devant la justice."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame au dépôt de Belleville",
    "summary": "Un tragique accident est survenu au dépôt de Belleville : le nommé Deblanfrey, âgé de quarante ans, a trouvé une mort instantanée après avoir été violemment frappé par un cheval lors de son service.",
    "paragraphs": [
      "Un tragique accident s'est produit au dépôt de Belleville. Le nommé Deblanfrey, âgé de quarante ans, a été frappé violemment par un cheval au cours de son service.",
      "La mort du malheureux fut instantanée, ne laissant aucune chance aux secours dépêchés sur les lieux."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'ami du maître de lavoir",
    "summary": "Un vol de linge rue de Meaux a été déjoué grâce à la vigilance d'un témoin. Si les complices ont pu s'enfuir, le principal auteur des faits, le nommé « Grand Henry », est activement recherché par la police.",
    "paragraphs": [
      "Un vol de linge a été fort heureusement déjoué rue de Meaux. M. M., ayant l'œil ouvert, a surpris en flagrant délit plusieurs individus qui tentaient de transporter le linge appartenant à son ami, M. Giton, maître de lavoir.",
      "Si les complices ont pu s'éclipser, le principal auteur des faits, un individu surnommé le « Grand Henry », est actuellement activement recherché par les services de police."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers régionaux",
    "summary": "La banlieue parisienne est marquée par une série de drames et d'incidents : accidents mortels à Joinville et Mantes, vols à Argenteuil, troubles électoraux à Choisy-le-Roi et divers accidents de la voie publique.",
    "paragraphs": [
      "À Bois-Colombes, Mme Lucienne Vinnettes a été relevée grièvement blessée après une chute accidentelle dont les circonstances restent à préciser.",
      "À Argenteuil, M. Blanc, commissaire de police, a procédé à l'arrestation d'une fillette de treize ans, prénommée Jeanne Marche, reconnue coupable d'une série de vols commis chez plusieurs commerçants du quartier.",
      "À Joinville-le-Pont, un drame s'est produit au port : M. Bouchard s'y est noyé alors qu'il tentait désespérément de récupérer une amarre.",
      "À Choisy-le-Roi, des élections partielles sont organisées suite à la démission collective de neuf membres du conseil municipal, provoquant une agitation locale.",
      "À Vanves, une dame a été renversée et blessée par un tramway, nécessitant des soins urgents.",
      "À Mantes, un ouvrier couvreur a trouvé la mort dans l'exercice de ses fonctions après une chute mortelle depuis un toit."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Bulletin du travail",
    "title": "La grève des tramways de Lyon",
    "summary": "La grève des employés de la Compagnie des omnibus et tramways de Lyon se poursuit. Des tensions sont apparues devant la Bourse du travail, nécessitant l'intervention des forces de l'ordre.",
    "paragraphs": [
      "Le mouvement de grève qui agite les employés de la Compagnie des omnibus et tramways de Lyon se poursuit, motivé par des revendications relatives à la discipline interne et aux conditions de travail.",
      "La situation s'est tendue devant la Bourse du travail, où les forces de police ont dû intervenir pour disperser une foule nombreuse et contenir les débordements des grévistes."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Sports",
    "title": "Résultats sportifs",
    "summary": "Le Racing-Club de France triomphe du Catford de Londres en football-rugby par 3 points à 0, tandis que le championnat de lutte au Casino de Paris poursuit ses épreuves incertaines.",
    "paragraphs": [
      "Le match de football-rugby qui opposait, hier, le Catford de Londres au Racing-Club de France s'est soldé par une victoire nette des Parisiens, par 3 points à 0.",
      "Quant au championnat de lutte qui se tient actuellement au Casino de Paris, les épreuves se poursuivent avec acharnement sans qu'aucun résultat définitif ne puisse encore être prononcé."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Chronique financière",
    "title": "Causerie financière",
    "summary": "Le marché financier maintient une allure calme et une grande liquidité. L'intérêt des capitaux se porte particulièrement vers les emprunts russes, dans un contexte de résultats contrastés pour les mines et chemins de fer.",
    "paragraphs": [
      "Le marché financier demeure empreint d'un calme relatif, soutenu par une abondance notable de capitaux disponibles. Les valeurs industrielles, notamment les mines et les chemins de fer, présentent des résultats contrastés au gré des séances.",
      "Toutefois, l'attention des investisseurs se porte avec un intérêt soutenu vers les développements récents concernant les emprunts russes, qui demeurent le point focal des transactions."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Feuilleton",
    "title": "LE FRUIT DÉFENDU - LA REVANCHE DE ROSE-MANON",
    "summary": "Après la découverte d'un crime chez lui, un homme s'interroge sur les raisons mystérieuses de la présence de Rose-Manon. Entre lâcheté et peur de l'opprobre, il hésite à regagner son domicile.",
    "paragraphs": [
      "En plein mystère, il remonta lentement. La vérité, c'est qu'il avait peur, une peur terrible. Il était lâche. Il eût donné la moitié de sa fortune pour que cet événement ne fût pas arrivé chez lui.",
      "Chez lui ! Tout était là. Si Rose eût succombé chez un autre, il s'en fût fort peu soucié. Il n'osait pas regagner l'hôtel. À la fin pourtant, il se dit qu'on interpréterait mal son épouvante et qu'on lui demanderait peut-être compte de son absence.",
      "Il remonta du Bois vers l'avenue Kléber. Allait-il, au milieu des fleurs, retrouver le cadavre ensanglanté ? Mais qu'était venue faire Rose-Manon chez lui ? Comment l'avait-on laissée entrer ? Pourquoi ? Que voulait-elle ? Jadis, aux visites de Rose, il avait vaguement redouté quelque piège. Qui l'avait tuée ?"
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Faits Divers",
    "title": "EN TRAVAILLANT A LA MACHINE A COUDRE",
    "summary": "Récit d'un incident de guerre survenu en Amérique, suivi d'un témoignage domestique de Mme Taupin à Vendôme en décembre 1899, illustrant la fragilité de la vie humaine.",
    "paragraphs": [
      "À la bataille des Sept Pins, pendant la rébellion américaine, une balle de fusil traversa la coiffure de l'auteur à un pouce à peine du crâne. Ce chapeau de feutre noir et mou est encore en ma possession. Lorsque vous viendrez me voir, je vous montrerai les deux trous que le projectile y a pratiqués.",
      "Voilà une belle affaire, direz-vous. Vous avez raison, c'est pourquoi je ne m'en vante point. De tels dangers imminents sont communs dans toutes les grandes batailles, et personne ne s'en préoccupe, excepté dans les cas où les balles laissent derrière elles des preuves irréfutables.",
      "« J'ai été à deux doigts de la mort », écrivait madame Taupin le 15 décembre 1899. Tout récemment, elle m'entretenait de ce sujet au 8, rue du Mail, à Vendôme. Elle était assise au premier étage, donnant sur la rue, et travaillait à sa machine à coudre. Par la fenêtre, nous pouvions voir la petite rivière qui coule au pied des peupliers."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Feuilleton",
    "title": "LES MIETTES DU BONHEUR - SOUS LE MASQUE",
    "summary": "Sous la pression de l'officier, le légionnaire Berthiot craque. La perspective d'une guérison pour la femme aimée le contraint à révéler son identité secrète : il est René Buel.",
    "paragraphs": [
      "Confiée aux soins habiles d'un spécialiste dont les cures merveilleuses ne se comptent plus, cette malheureuse, depuis deux ans, est cependant restée dans le même état. Berthiot se taisait toujours. Placé en face de l'officier, il tenait le guéridon de ses deux mains si fortement contractées que ses ongles pénétraient dans le bois.",
      "M. de Courtial acheva : « Elle peut guérir cependant. Mais cette guérison est subordonnée à la découverte d'un homme que l'on croit perdu. Cet homme aima la malheureuse et fut aimé d'elle. Il a disparu. Le docteur qui soigne la folle affirme que s'il trouvait cet homme, il ramènerait la lucidité dans le cerveau de l'infortunée. »",
      "Il se tut. Quelques secondes de silence s'écoulèrent, que troubla seulement le bruit de la respiration saccadée du légionnaire. Il était visible qu'il faisait un effort immense pour se dominer, pour ne pas crier les mots qui devaient lui monter aux lèvres.",
      "Mais tout a des bornes. Soudain, d'entre ses paupières, deux larmes filtrèrent lentement, puis s'échappèrent et glissèrent sur ses joues. En silence, l'officier le considérait, pris d'une pitié profonde et saisi de respect.",
      "Tout à coup, le légionnaire parut s'arracher à sa douleur. « Oh, pardon, mon capitaine, l'épreuve est trop forte. Mon courage s'en est allé d'un coup tout entier. » « Vous avouez enfin ? » « Oui, j'avoue. Vous ne vous nommez pas Berthiot. Votre vrai nom est René Buel ? » « Oui, mon capitaine. »"
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Chronique Judiciaire",
    "title": "L'INTERROGATOIRE DE VILLAURIER",
    "summary": "Face aux soupçons pesant sur lui après la mort d'une jeune fille, Villaurier tente de se justifier au commissariat. M. de Courtial confronte l'homme à la gravité de son infamie lors d'un échange tendu.",
    "paragraphs": [
      "Le père Brûlot prit la parole : « Vous pensez bien, Monsieur, que vous avez des renseignements à donner à la justice sur cette jeune fille. Vous aviez jugé bon de prendre la fuite. En attendant votre retour, nous deux, avec le père Christian, nous gardions votre domicile pour qu'on ne touche à rien. »",
      "Villaurier comprit que cet homme avait raison. Il essaya pourtant de faire contenance : « Je suppose que vous n'avez pas la prétention de vouloir m'arrêter ? » Le père Brûlot répliqua : « Si on nous l'avait ordonné, ça serait fait déjà. Seulement, ça paraîtra drôlement louche si vous refusez de renseigner la police. »",
      "Au bureau du commissariat, M. Ladouce sommeillait. L'inspecteur de service vint le réveiller et ordonna qu'on introduisît Villaurier. « Je vais vous surprendre en vous disant que je n'en sais rien du tout. J'étais absent de chez moi hier après-midi. Quand je suis rentré, vers six heures, cette fille était morte. »",
      "M. de Courtial avait écouté ces paroles. Il y eut encore un silence. Puis il dit : « Vous étiez libre. Je n'avais pas le droit moi-même de vous questionner comme je l'ai fait. Pourtant, il est quelque chose qui est indéniable : René Buel, vous vous êtes souillé d'une infamie. »"
    ]
  }
];
