// Date: 1899-10-10
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-10-10 (Version Restaurée, 41 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "Charpentiers de Paris",
    "summary": "Plongée dans le quotidien des « Enfants de Soubise », ces charpentiers compagnons dont le savoir-faire exemplaire façonne les structures monumentales de l'Exposition universelle de 1900 à Paris.",
    "paragraphs": [
      "Les charpentiers de grande cognée ne manquent pas de besogne aujourd'hui dans Paris. Du pont de la Concorde au pont d'Iéna et au-delà, ils ont couvert de leurs échafaudages les rives de la Seine et dressé de tous côtés des dômes, des tourelles, des flèches hardies qui dessinent la silhouette des palais fabuleux dont sera bordée la grande voie fluviale de l'Exposition.",
      "Il n'y a certainement aucun de nos quatre mille manieurs de hache et de bisaiguë qui chôme à l'heure actuelle. Tout Paris a l'œil sur eux et s'intéresse à leurs rapides manœuvres, car elles dissipent les inquiétudes de ceux qui croyaient qu'on ne serait pas prêt pour 1900.",
      "Cet intérêt particulier qu'inspirent les charpentiers a d'ailleurs une cause plus générale. On devine en ces rudes représentants de la classe ouvrière des caractères formés à une école spéciale, de même que l'on remarque en eux une expérience des règles de leur art qui nous frappe d'autant plus que sa source nous échappe. Ils s'appellent eux-mêmes les Enfants de Soubise.",
      "On a dit que les charpentiers du Tour de France formaient une aristocratie dans le monde ouvrier. L'expression est exacte, mais elle ne doit pas être prise dans son acception ordinaire. Il y a sans doute chez eux une sélection, puisque n'entre pas qui veut dans le compagnonnage et que l'aspirant doit passer des examens.",
      "La seule fonction qui demeure stable est celle de la Mère, cette entité superbe du compagnonnage qui en résume le mieux l'esprit et les coutumes. C'est la Mère, à qui tous doivent le plus grand respect, qui tient la maison hospitalière où sont accueillis les compagnons du Tour de France.",
      "Nos charpentiers sont les meilleurs qui existent. Les plus grands travaux de charpenterie qui ont été exécutés à l'étranger l'ont été par des Français. Une preuve de cette supériorité nous sera donnée à l'Exposition de 1900, où seront exhibés au public les chefs-d'œuvre des Compagnons du Devoir.",
      "Les travaux de l'Exposition les mettent en ce moment en grand relief. Maint apprenti regarde avec envie les Bons Drilles qui besognent si hardiment et font preuve de tant de savoir. Telle est, résumée en ses grandes lignes, la situation de ce magnifique groupement ouvrier qui a nom les Charpentiers de Paris."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Une haine vieille d'un siècle",
    "summary": "Au cœur d'un drame familial, la duchesse tente désespérément de dissiper les soupçons et de conjurer la haine ancestrale qui menace de détruire l'avenir de son fils.",
    "paragraphs": [
      "La duchesse s'élança vers Pierre : « Pourquoi ne point croire à l'innocence de mon fils ? Pourquoi vouloir réveiller les souvenirs de la haine d'autrefois entre votre famille et la nôtre ? Je vous jure, monsieur, que depuis longtemps toute haine est morte en nous. »",
      "La justice a été impuissante à vous frapper. Nous nous substituerons aux juges et nous serons nous-mêmes les justiciers, sans trêve, sans pitié.",
      "Le duc voulait apprendre, par lui-même, comment on accueillait son retour. Il s'élança à cheval et partit, au hasard des chemins creux, entre les haies. Après les détresses de la prison, les interrogatoires, les pièges tendus, les hontes accumulées, se sentir hors de cette trame d'opprobres, libre enfin, libre vraiment, et libre pour toujours, quelle joie !"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Informations Politiques",
    "title": "Voyages Ministériels",
    "summary": "Le général de Galliffet inspecte les expériences de tir au camp de Châlons, tandis que M. de Lanessan poursuit sa tournée ministérielle à Toulon.",
    "paragraphs": [
      "Le général de Galliffet, accompagné du général Deloye, directeur de l'artillerie au ministère de la Guerre, et de trois officiers d'ordonnance, est arrivé à 11 heures 31, hier matin, au camp de Châlons, pour assister aux expériences de tir des canons de campagne et de siège qui ont lieu à la batterie d'expériences.",
      "En quittant La Ciotat, M. de Lanessan s'est rendu à Toulon, où il est arrivé à dix heures. Le ministre de la Marine a visité la caserne de l'infanterie de marine, l'hôpital de la marine et a déjeuné à la préfecture maritime."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Informations Politiques",
    "title": "Les Chasses gardées",
    "summary": "MM. Alexandre Bérard et Camille Pelletan proposent l'instauration d'un nouvel impôt visant à taxer les chasses gardées avec gardes particuliers à raison de 50 centimes par hectare.",
    "paragraphs": [
      "MM. Alexandre Bérard et Camille Pelletan ont saisi la Commission du budget d'un amendement ainsi conçu : « Toute chasse gardée avec le concours de gardes particuliers assermentés sera frappée d'un impôt de 50 centimes par hectare. »"
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Informations Politiques",
    "title": "Une Adresse",
    "summary": "Réuni en session extraordinaire, le Conseil général du Gard exprime son soutien politique au gouvernement par une adresse de confiance signée par les conseillers républicains.",
    "paragraphs": [
      "Le Conseil général du Gard, ayant ajourné sa session ordinaire, s'est réuni hier en session extraordinaire. Les conseillers généraux républicains ont signé, hors séance, une adresse de confiance au gouvernement, l'assurant de leur concours dévoué."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Social",
    "title": "La reprise au Creusot",
    "summary": "Le haut personnel du Creusot et les administrateurs préparent la reprise du travail, malgré les avaries dues à la grève. Un recrutement de 300 ouvriers est lancé, tandis que le préfet inspecte les hauts-fourneaux.",
    "paragraphs": [
      "Le haut personnel et les chefs de service ont été mandés, ce matin, au château de la Verrerie, pour examiner, de concert avec les administrateurs, la question de la reprise du travail. Une partie du matériel ayant, du fait de la grève, subi des avaries, il en résultera pour les ouvriers un chômage équivalent à la durée nécessaire aux réparations.",
      "La direction de l'usine a fait connaître qu'elle allait recruter environ trois cents ouvriers pour demain. Le préfet de Saône-et-Loire a visité les hauts-fourneaux cet après-midi."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "International",
    "title": "L'Angleterre et le Transvaal",
    "summary": "À l'occasion du soixante-quatorzième anniversaire du président Krüger, la tension diplomatique reste vive. L'Angleterre propose une trêve, mais le président Steijn refuse tant que les troupes anglaises avancent.",
    "paragraphs": [
      "Aujourd'hui, les Boërs fêteront le soixante-quatorzième anniversaire du président Krüger. En Angleterre, la grande majorité des journaux du soir continuent à montrer un ton belliqueux.",
      "Sir Alfred Milner écrit que l'Angleterre est prête à s'engager à ne pas commettre d'actes d'hostilité pendant les négociations. Le président Steijn répond que, tant que les troupes anglaises arriveront sans relâche, la République refusera d'accepter des conditions quelles qu'elles soient."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame à Neuilly-Plaisance",
    "summary": "Un drame sanglant a éclaté dimanche soir à Neuilly-Plaisance : à la suite d'une violente dispute, M. Chapelle a ouvert le feu sur les époux Berton. La femme, grièvement blessée, est dans un état désespéré.",
    "paragraphs": [
      "La petite commune de Neuilly-Plaisance a été, dans la soirée de dimanche, le théâtre d'un drame sanglant. Une vive discussion a éclaté entre MM. Chapelle et Berton, qui n'ont pas tardé à en venir aux mains.",
      "M. Chapelle, sortant un revolver de sa poche, a déchargé quatre coups sur M. Berton et sa femme. Deux balles ont atteint en pleine poitrine Mme Berton, qui a été transportée à son domicile dans un état désespéré. Le meurtrier a été arrêté."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une enfant martyre à Cambrai",
    "summary": "Une femme habitant Masnières a été arrêtée pour avoir séquestré et affamé pendant deux ans la fille de son second époux, la laissant nue dans un grenier dans le dénuement le plus total.",
    "paragraphs": [
      "La gendarmerie vient de mettre en état d'arrestation une femme habitant Masnières, connue sous le nom d'Adonia. Durant deux années, elle tint prisonnière dans un grenier, dépouillée de tous vêtements, la petite fille de son second époux, qui ne survécut que grâce à la charité des voisins."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Incendie à Bordeaux",
    "summary": "Un violent incendie s'est déclaré à Bordeaux, détruisant les écuries situées rue Confrède et route d'Espagne. Les flammes se sont propagées aux maisons voisines en moins d'un quart d'heure.",
    "paragraphs": [
      "Ce soir, vers huit heures, un violent incendie a détruit entièrement les écuries rue Confrède et route d'Espagne. En moins d'un quart d'heure, le feu s'est propagé aux maisons avoisinantes."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "Activités au Trocadéro",
    "summary": "L'Exposition universelle progresse à grands pas sous l'effet d'une activité intense. Au Trocadéro, les travaux du pavillon officiel de l'Algérie, situé à proximité du bassin, avancent avec célérité.",
    "paragraphs": [
      "Chaque jour modifie la physionomie de l'Exposition universelle. C'est que l'on y travaille avec une activité vraiment inlassable. Près du bassin, c'est le pavillon officiel de l'Algérie dont les travaux avancent rapidement."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Les Congrès de l'Exposition",
    "summary": "Le Comité d'organisation des Congrès définit un programme axé sur des questions sociales et pratiques. Les travaux, discussions et délibérations feront l'objet de publications détaillées pour les participants.",
    "paragraphs": [
      "Le Comité d'organisation, persuadé que pour être efficaces, les travaux du Congrès doivent se concentrer sur un certain nombre de questions pratiques, a inscrit au programme un nombre considérable de sujets, parmi lesquels il convient de citer la collaboration de la femme, la lutte antialcoolique, la responsabilité de l'homme vis-à-vis de la femme et de l'enfant dans le mariage, la répression légale des atteintes aux bonnes mœurs, l'éducation de l'homme et de la femme, la liberté du travail de la femme, et la place de la femme dans l'art et dans les sciences.",
      "Les travaux seront révisés avec soin, et les comptes rendus, discussions et délibérations seront imprimés et envoyés à chacun des membres qui y auront pris part. Tous les renseignements relatifs à ces travaux sont donnés à Paris, 84, rue Drouot."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Adjudications",
    "title": "Adjudications diverses",
    "summary": "Quatre adjudications importantes se tiendront le lundi 16 octobre, avenue Rapp, portant notamment sur les travaux de peinture du palais des Procédés généraux de la mécanique et des travaux de bitumage.",
    "paragraphs": [
      "Quatre importantes adjudications auront lieu sur soumissions cachetées, le lundi 16 octobre, à deux heures de l'après-midi, 2, avenue Rapp.",
      "Il s'agit des adjudications pour les travaux de peinture du palais des Procédés généraux de la mécanique, dont la valeur est estimée à 114.000 francs, ainsi que pour les divers travaux de mise en bitume."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Un discours de M. Millerand",
    "summary": "Lors d'une fête au Thillot, M. Millerand a prononcé un vibrant plaidoyer pour l'union nationale, dénonçant les divisions partisanes et affirmant sa volonté de conciliation sur le terrain républicain.",
    "paragraphs": [
      "À l'occasion d'une fête patriotique organisée dimanche au Thillot, dans l'arrondissement de Remiremont, M. Millerand a prononcé un discours remarqué.",
      "Il a démontré que seule une nation héroïque peut lutter contre toute contrainte. L'orateur a affirmé que le pays est las de divisions et de haines qui nuisent aux intérêts de la France, paralysent son activité et affaiblissent le patriotisme.",
      "Il est indispensable que les partis cessent de s'entre-déchirer avec cet acharnement et cette injustice qui leur font perdre de vue les intérêts supérieurs de la nation. Cessons de donner ce triste spectacle de Français cherchant dans leurs querelles intérieures l'appui de l'étranger.",
      "Entrons résolument dans le courant d'union et de conciliation qui se dessine partout. Si l'on veut arrêter la marée montante de l'antisémitisme, il n'est que temps. Je déplore cette maladie nouvelle, parce que je ne crois pas qu'on fonde jamais rien avec la haine. Quant à moi, je resterai toujours le partisan convaincu de la politique d'union et de conciliation sur le terrain français et républicain."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Justice",
    "title": "La Haute-Cour",
    "summary": "La Haute-Cour poursuit l'instruction des dossiers sous la direction de M. Bérenger. Le planning des interrogatoires pour la journée a été officiellement communiqué par la Commission.",
    "paragraphs": [
      "La journée d'hier n'a présenté que peu d'intérêt. À la première heure, M. Bérenger s'est remis au travail et a continué l'examen des dossiers provenant des perquisitions effectuées ces derniers jours dans les départements.",
      "MM. Clouvet, Cazot et Cornuillet sont venus au Luxembourg vers neuf heures. M. Bérenger reprendra dès aujourd'hui la suite des interrogatoires.",
      "D'après la note publiée par la Commission d'instruction, voici l'ordre des interrogatoires pour la journée : M. A. Buffet à huit heures, M. de Chevilly à dix heures, M. de Monicourt à onze heures, M. Godefroy à deux heures, M. de Fréchencourt à quatre heures et M. de Sabran-Pontevès à cinq heures."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Justice",
    "title": "Les perquisitions",
    "summary": "Le juge d'instruction Delalé mène des interrogatoires à Lille concernant la diffusion de portraits du duc d'Orléans et les déclarations compromettantes de M. Godefroy sur un soutien militaire royaliste.",
    "paragraphs": [
      "M. Delalé, juge d'instruction, a reçu de M. le sénateur Bérenger une commission rogatoire lui enjoignant d'interroger plusieurs personnes de Lille au sujet d'une visite que fit M. Godefroy, de la Jeunesse royaliste de Paris, le 8 août dernier.",
      "M. Godefroy serait arrivé à Lille apportant 100 000 portraits gommés du duc d'Orléans. Il aurait annoncé dans une réunion la rentrée très prochaine du duc d'Orléans à qui plusieurs généraux auraient offert leur concours. M. Delalé a interrogé M. Caron, l'instituteur, M. Duneufgardin, le restaurateur, et M. Ludovic Robin."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "International",
    "title": "Un congrès socialiste",
    "summary": "À Hanovre, 250 délégués réunis sous la présidence de MM. Singer et Blume débattent de la stratégie politique et de la situation financière du parti socialiste allemand.",
    "paragraphs": [
      "Le Congrès socialiste se tient dans une salle située dans un vieux quartier de Hanovre. Deux cent cinquante délégués environ sont présents. On procède à l'élection du bureau qui a pour présidents MM. Paul Singer et Blume.",
      "M. Singer insiste sur l'importance de ces délibérations. L'univers entier a les yeux fixés sur les socialistes allemands. Le Congrès a décidé de discuter la participation au Congrès socialiste international et désigne M. Liebknecht comme rapporteur.",
      "M. Auer commente le rapport du Comité directeur qui constate l'échec des socialistes aux élections du Landtag prussien à cause d'un manque d'entente. La caisse socialiste a encaissé 346 712 marks et les dépenses ont atteint 328 356 marks."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Éboulements dans les mines",
    "summary": "Deux tragiques accidents miniers sont survenus dans la région de Liège : un houilleur a péri à Jemeppe et le mineur Lambert Collard a trouvé la mort dans une mine à Tilleur.",
    "paragraphs": [
      "Bruxelles, 9 octobre. Deux accidents mortels se sont produits dans les mines situées aux environs de Liège. Un houilleur a été enseveli dans un charbonnage de la Concorde à Jemeppe. Un autre éboulement a coûté la vie à un mineur, Lambert Collard, âgé de quarante et un ans, dans un charbonnage de Horloz à Tilleur."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un coup de hache",
    "summary": "À Liège, une altercation banale dans un cabaret a tourné au drame criminel : Louis Pire a mortellement blessé Albert Bovy d'un coup de hachette à l'abdomen.",
    "paragraphs": [
      "Bruxelles, 9 octobre. Un horrible drame vient de se dérouler à Liège dans un cabaret. À la suite d'une discussion futile entre Louis Pire et Albert Bovy, le premier a frappé le second d'un coup de hachette dans l'abdomen. Bovy est mort à l'hôpital de Bavière. Le meurtrier a été arrêté."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Actualité Militaire",
    "title": "Nominations militaires",
    "summary": "Par décret présidentiel, le général Grasset est nommé à la tête du 15e corps à Bordeaux et le général d'Hugonneau de Boyat prend le commandement du 10e corps à Alger.",
    "paragraphs": [
      "Par décret du Président de la République, le général de division Grasset est nommé au commandement du 15e corps d'armée à Bordeaux, remplaçant le général Varaigne. Le général de division d'Hugonneau de Boyat est nommé au commandement du 10e corps d'armée à Alger, remplaçant le général Laruhey."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Actualité Militaire",
    "title": "Remise d'un drapeau",
    "summary": "À Calais, une cérémonie patriotique a marqué la remise officielle d'un drapeau à la Société des vétérans des armées de terre et de mer, suivie d'un banquet honoré par la présence de M. Dussaussoy, député.",
    "paragraphs": [
      "Une cérémonie patriotique a eu lieu hier à Calais : la remise d'un drapeau à la section locale de la Société des vétérans des armées de terre et de mer. La cérémonie, qui s'est déroulée sur la place d'Armes, a été suivie d'un service solennel à l'église Notre-Dame, puis d'un banquet présidé par le capitaine Juhel, en présence de M. Dussaussoy, député."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Nominations et accidents maritimes",
    "summary": "Mouvements de commandement dans la marine et avaries survenues lors de manœuvres de torpilleurs à Lorient. Le croiseur Coëtlogon débute ses essais et la mission hydrographique Renaud prend fin à Brest.",
    "paragraphs": [
      "Sont nommés : le capitaine de vaisseau de Fauque de Jonquières au commandement du Formidable, et le capitaine de vaisseau Bernard au commandement de l'Amiral Tréhouart.",
      "À Lorient, deux torpilleurs manœuvraient quand une torpille lancée par l'un d'eux a heurté l'hélice du second, provoquant des avaries graves. Le bâtiment a dû être remorqué au port.",
      "Le croiseur Coëtlogon a été mis en rade à Lorient pour ses essais officiels.",
      "La mission hydrographique Renaud à Brest est terminée ; les ingénieurs retournent à Paris après avoir identifié de nombreuses roches dangereuses pour la navigation.",
      "L'aviso-torpilleur russe Abrek a quitté le port de Cherbourg pour faire route vers la Méditerranée."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Colonial",
    "title": "La mission Voulet",
    "summary": "Confirmation du soutien logistique accordé à la mission Voulet. Le capitaine Voulet salue l'assistance des officiers coloniaux et l'accueil des chefs locaux lors de la traversée du Soudan français.",
    "paragraphs": [
      "Il a été confirmé que le commandant des régions traversées par la mission Voulet a apporté son plein soutien à l'expédition. Le capitaine Voulet a adressé ses remerciements au commandant Grave, louant l'accueil des chefs locaux, notamment Idriss Boubakard, ainsi que l'assistance précieuse fournie par les officiers coloniaux pour la traversée du Soudan français."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Social",
    "title": "Congrès international des employés",
    "summary": "La Fédération nationale des employés annonce la formation d'une commission d'organisation chargée de préparer la tenue d'un prochain congrès international dédié aux conditions de travail des employés.",
    "paragraphs": [
      "Le Conseil fédéral de la Fédération nationale des employés a pris la décision d'organiser un Congrès international des employés. Une commission d'organisation a été dûment élue et un appel sera prochainement lancé à l'ensemble des organisations concernées."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Social",
    "title": "Fête à Saint-Étienne",
    "summary": "À la Manufacture nationale d'armes de Saint-Étienne, la célébration des premières retraites a été marquée par la remise officielle de quatre-vingt-une pensions en présence de personnalités politiques.",
    "paragraphs": [
      "Le personnel de la Manufacture nationale d'armes de Saint-Étienne a célébré avec solennité la fête des « Premières retraites ». Une conférence s'est tenue au Prado en présence de MM. Duveau et Galley, députés. À cette occasion, quatre-vingt-une retraites ont été officiellement accordées aux ouvriers."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Spectacles",
    "title": "Théâtre de la Porte-Saint-Martin : La Dame de Monsoreau",
    "summary": "Le Théâtre de la Porte-Saint-Martin reprend avec éclat La Dame de Monsoreau. M. Coquelin incarne un Chicot magistral dans ce drame historique d'Alexandre Dumas et Auguste Maquet qui séduit toujours le public.",
    "paragraphs": [
      "Le théâtre de la Porte-Saint-Martin a repris, avec un succès qui ne se dément point, le drame d'Alexandre Dumas et d'Auguste Maquet. Bien que cette œuvre date de 1860, elle conserve auprès du public parisien une vigueur et une popularité intactes.",
      "Les rôles principaux sont tenus avec une grande autorité par M. Coquelin, magistral dans le personnage de Chicot, entouré notamment du comte de Bussy et du roi Henri III. Le public a réservé un accueil des plus chaleureux à cette fresque historique, témoignant une fois de plus de l'indémodable attrait pour ces aventures de cape et d'épée."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Courses Hippiques",
    "title": "Résultats des courses hippiques",
    "summary": "Compte rendu des épreuves hippiques de la journée : victoires aisées d'Avize dans le Prix The Heir of Liane et de Sarah dans le Prix de l'Élevage, suivies des succès de Sans Gêne de Fleury et Ranavalo.",
    "paragraphs": [
      "La favorite Avize a remporté avec aisance le Prix The Heir of Liane, devançant Quick et Sap Orne.",
      "Le Prix de l'Élevage, doté de 10 000 francs, a été enlevé par la favorite Sarah qui s'est imposée sans être inquiétée. Sfax est arrivé deuxième et Sylvia troisième.",
      "Le Prix du Bois a réuni quatorze sulkys. Sans Gêne de Fleury a conservé la tête pendant tout le parcours. Dans le dernier tournant, Sans Gêne de Poupet a dépassé Sorbet pour prendre la seconde place.",
      "Le Prix Moonlighter a réuni douze concurrents. Ranavalo, menée par le jockey Germain, a mené la course avant d'être rejointe et dépassée dans la ligne droite finale."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Sport",
    "title": "Les courses de province à Limoges",
    "summary": "Succès hippique à Limoges ce dimanche : le comte de Montmorillon s'illustre avec Aventure, tandis que l'écurie de M. Dugas et le baron de Nexon dominent les épreuves de steeple-chase et le Prix Toisserenc de Bort.",
    "paragraphs": [
      "Parmi les courses de province, nous signalons avec plaisir celles qui ont eu lieu dimanche à Limoges, sous la direction des éminents sportsmen qui composent le Comité de la Société des courses, MM. le baron F. de Nexon, G. Dubreuil et E. Malvergne de Lafaye.",
      "Les honneurs de la journée ont été pour le comte de Montmorillon qui, montant sa jument Aventure, a fait coup double en gagnant le Prix des Bardys et le Prix de la Compagnie du Chemin de fer d'Orléans.",
      "Les Prix de la Société des Steeple-Chases de France et de la Société sportive d'encouragement ont été remportés par l'écurie de M. Dugas. Le baron de Nexon a enlevé le Prix Toisserenc de Bort avec son cheval Syrien."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'Affaire de la rue Saint-Maur",
    "summary": "À l'angle de la rue Saint-Maur, l'ouvrier italien François Guivernizzi a été grièvement blessé de quatre coups de couteau par quatre agresseurs qui l'ont dévalisé. Une enquête est ouverte par le commissaire Dattroff.",
    "paragraphs": [
      "Un ouvrier ébarbeur de nationalité italienne, François Guivernizzi, a été assailli à l'angle de la rue Saint-Maur et de la rue du Faubourg-du-Temple par quatre individus. Ces derniers l'ont frappé de quatre coups de couteau avant de le dévaliser entièrement.",
      "Grièvement blessé, le malheureux a réussi à regagner son domicile, où son compatriote, M. Berezzi, l'a découvert baignant dans son sang. Transporté d'urgence à l'hôpital Saint-Louis, il y reçoit les soins nécessaires. M. Dattroff, commissaire de police du quartier, recherche activement les agresseurs."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le Coup du Père François",
    "summary": "M. Louis Lemure, agressé avenue d'Italie, a été victime du « coup du père François ». Son compagnon, M. Jean Denis, a fait usage de son revolver pour repousser les quatre malfaiteurs qui ont pris la fuite.",
    "paragraphs": [
      "M. Louis Lemure, revenant du théâtre en compagnie de M. Jean Denis, a été victime d'une brutale agression perpétrée par quatre individus avenue d'Italie. La victime a subi le classique « coup du père François », accompagné d'un violent coup de trique asséné à la tête.",
      "M. Jean Denis, alerté par les cris, a riposté en tirant deux coups de revolver sur les assaillants, lesquels ont aussitôt pris la fuite. Le blessé a été transporté d'urgence et admis à l'hôpital Cochin. Deux des agresseurs, identifiés comme étant des souteneurs notoires du quartier, sont activement recherchés par la police."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un locataire vindicatif",
    "summary": "Expulsé de son logement, Hippolyte Grogel a agressé son ancien concierge, M. Audron, d'un coup de couteau rue Saint-Maur. L'agresseur a été arrêté après avoir reconnu son crime.",
    "paragraphs": [
      "Hippolyte Grogel, un locataire expulsé pour non-paiement de loyers, a assouvi sa vengeance contre son ancien concierge, M. Audron, en lui portant un coup de couteau à l'épaule dans sa loge, rue Saint-Maur.",
      "Le coupable, aussitôt arrêté, a reconnu les faits, prétendant que le concierge s'était montré acharné pour obtenir son expulsion."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Désespérée",
    "summary": "Accablée par le deuil de son fils et l'infirmité de son mari, la veuve Wanoutaz, âgée de soixante-six ans, s'est donnée la mort par pendaison dans la rue de Jussieu.",
    "paragraphs": [
      "La veuve Wanoutaz, âgée de soixante-six ans, s'est suicidée par pendaison rue de Jussieu. Désemparée par la perte de son fils unique et par l'infirmité de son époux, elle a laissé une lettre explicative destinée au commissaire de police avant d'accomplir son geste fatal."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de meurtre",
    "summary": "Louis Aumont, ouvrier plombier, a été poignardé dans le dos avenue des Gobelins par l'ex-amant de sa compagne. La victime, grièvement blessée, a été admise à l'hôpital Cochin.",
    "paragraphs": [
      "Louis Aumont, ouvrier plombier, a été frappé de deux coups de couteau dans le dos, avenue des Gobelins, par l'ancien amant de sa compagne, Louise Trohou.",
      "L'agresseur a pris la fuite. La victime, grièvement blessée, a été transportée à l'hôpital Cochin, tandis que M. Michaux, commissaire de police, a immédiatement ouvert une enquête sur cette tentative de meurtre."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue",
    "summary": "La banlieue parisienne enregistre divers drames : accidents de la route à Clichy et Aubervilliers, vols à Gennevilliers, suicides à Bois-Colombes et un tragique accident domestique au Pré-Saint-Gervais.",
    "paragraphs": [
      "Clichy : Le jeune Edmond Vanerdeech a été grièvement blessé par une automobile alors qu'il circulait à bicyclette.",
      "Gennevilliers : Louis Passéry, locataire indélicat, a été arrêté pour le vol de bijoux et de titres au porteur commis au domicile de M. Chauvay.",
      "Bois-Colombes : M. Jules Besançon, ancien chef d'institution, s'est donné la mort au moyen du charbon de bois.",
      "Saint-Denis : M. Charles Boutillier a fait une chute grave alors qu'il déchargeait un camion sur les berges du canal.",
      "Pré-Saint-Gervais : Une jeune fille de treize ans, prénommée Giraud, a été grièvement brûlée lors de l'explosion d'une lampe à pétrole.",
      "Aubervilliers : Un maçon, M. Jean Tertre, est tombé au fond d'un puits de quatre mètres et a été grièvement blessé."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Théâtre",
    "title": "Courrier des Théâtres",
    "summary": "Actualités théâtrales : première au théâtre Cluny, report de Carmen à l'Opéra-Comique suite à l'indisposition de Mme Guiraudon, et nouvelle représentation de La Bohème.",
    "paragraphs": [
      "Ce soir, au théâtre Cluny, aura lieu la première représentation de L'Amour pleure et rit, comédie-bouffe de MM. George Froyet et H. Cotia.",
      "Mme Guiraudon étant souffrante, la direction de l'Opéra-Comique remet la reprise de Carmen à jeudi prochain.",
      "Au théâtre lyrique de la Renaissance, la première de La Bohème de M. Léon Cavell est reportée à ce soir."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Santé",
    "title": "La médecine naturelle",
    "summary": "L'Institut de Phytothérapie des Francs propose l'ouvrage 'La Médecine par les Herbes'. Un guide pratique pour soigner de nombreuses affections sans recourir aux traitements chimiques, disponible pour cinquante centimes.",
    "paragraphs": [
      "Le livre « La Médecine par les Herbes » détaille l'usage des plantes pour le traitement de la hernie, des maladies féminines et des tumeurs, offrant des formules de tisanes et d'infusions curatives.",
      "Il propose des soins pour les maladies de la peau, le cuir chevelu, l'eczéma, l'épilepsie, la phtisie, les maladies du cœur, ainsi que l'épuisement intellectuel, l'impuissance, la stérilité et les hémorroïdes, sans recourir aux opérations ni aux remèdes chimiques altérant l'organisme.",
      "Cet ouvrage permet de se soigner secrètement et à peu de frais par les forces de la nature. Il est envoyé franco contre cinquante centimes en timbres-poste adressés au directeur de l'Institut de Phytothérapie des Francs."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Santé",
    "title": "Cure hygiénique de la neurasthénie",
    "summary": "La neurasthénie provoque un déclin physique et intellectuel précoce chez les sujets, malgré une santé apparente. Le docteur Laurent expose une méthode de soins hygiéniques détaillée dans une brochure gratuite.",
    "paragraphs": [
      "Bien que le neurasthénique conserve un bon appétit et une digestion saine, il demeure accablé tant au moral qu'au physique.",
      "Sa marche est lourde, ses membres sont engourdis ; il lui semble que son organisme est usé. Jeune encore, il paraît aussi affaibli et impotent qu'un vieillard. Ses sens s'émoussent, il perd la mémoire et devient inapte au travail. Pour plus d'informations sur la cure hygiénique de la neurasthénie, adresser une demande pour la brochure franco au Docteur Laurent."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Social",
    "title": "Société Anonyme OMNIUM FRANCO-BELGE",
    "summary": "Avis aux actionnaires : la Société Anonyme Omnium Franco-Belge procédera, à partir du 1er octobre, au versement d'un acompte sur dividende de 65 francs par action, payable à la caisse de MM. Oudoy et Cie.",
    "paragraphs": [
      "Le Conseil d'administration informe MM. les actionnaires qu'il leur sera payé, à dater du 1er octobre prochain, un acompte de 65 francs par action, à valoir sur l'exercice courant.",
      "Le paiement aura lieu contre remise du coupon à la caisse de MM. Oudoy et Cie, banquiers, 1, rue Saint-Marc, Paris."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Feuilleton",
    "title": "LE REVENANT - Grand roman inédit",
    "summary": "Dans cet extrait du roman Le Revenant, le Rougeaud déterre avec succès les documents compromettants concernant Mme Juliette de Barentin et les livre à l'artiste Bareste contre la rémunération convenue.",
    "paragraphs": [
      "Le Rougeaud s'était accroupi à terre, portant la main à sa poche. « Allons bon ! » murmura-t-il, « je n'ai même pas un brin de couteau. Vous n'en auriez pas un, vous, patron, par hasard ? Non. Diable ! ça ne va pas être commode alors. »",
      "Cinq minutes après, l'excavation atteignait la profondeur de vingt-cinq centimètres environ. « Nous approchons », déclara le Rougeaud. « Plus que deux ou trois centimètres et nous allons trouver les feuilles qui préservaient le morceau de linge dans lequel j'ai soigneusement enveloppé le maroquin. »",
      "Le Rougeaud en sortit un portefeuille contenant des lettres, des enveloppes avec l'adresse, ainsi qu'un extrait de mariage de Mme Juliette de Barentin. L'artiste, Bareste, lui remit en échange une somme convenue, après avoir vérifié que les documents établissaient sans aucun doute possible l'identité recherchée.",
      "Le Rougeaud, qui était physionomiste, lut sur le visage de Bareste qu'il était satisfait. « Eh bien ! patron ? » questionna-t-il. « Vous voyez qu'on a beau n'être qu'une canaille, on est quelquefois honnête. Tout ce que je vous avais promis, l'ai-je tenu ? »"
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Informations",
    "title": "Départs et Arrivées des paquebots",
    "summary": "Chronique des mouvements maritimes de la Compagnie Générale Transatlantique. Le paquebot La Champagne a atteint New York, tandis que La Touraine a été signalée au passage du cap Lizard.",
    "paragraphs": [
      "Le paquebot la Champagne (C. G. T.), venant du Havre, est arrivé à New York le 1er octobre, à 7 heures du soir.",
      "Le paquebot la Touraine (C. G. T.), venant de New-York, est passé au cap Lizard le 2 octobre, à 5 heures du matin."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Agriculture",
    "title": "Syndicat National du Crédit Agricole",
    "summary": "Fondé en application de la loi de 1894, le Syndicat National du Crédit Agricole déploie un capital de 40 millions pour soutenir l'industrie agricole française par le renforcement de la mutualité et du crédit rural.",
    "paragraphs": [
      "Fondé pour favoriser le développement de l'agriculture par la mutualité, l'épargne et le crédit, le Syndicat dispose d'un capital de quarante millions de francs, réparti en quarante séries d'un million chacune.",
      "Le Syndicat se constitue, sous les plus hauts patronages, pour répondre aux vœux de la loi du 5 novembre 1894, afin de faciliter et de garantir les opérations concernant l'industrie agricole. Ces opérations sont exemptes de tous risques, ayant pour base le renforcement même du sol."
    ]
  }
];
