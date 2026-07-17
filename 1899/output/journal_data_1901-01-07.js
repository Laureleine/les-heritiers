// Date: 1901-01-07
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-01-07 (Version Restaurée, 34 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Notre commerce",
    "summary": "La commission présidée par M. Alfred Picard publie des statistiques rassurantes sur le commerce extérieur français en 1899, témoignant d'une dynamique économique prometteuse à l'aube du XXe siècle.",
    "paragraphs": [
      "Il est rare qu'une statistique soit agréable à lire. Il arrive même qu'elle ne soit pas toujours utile. Ce n'est pas le cas de celle que vient de publier la commission des valeurs de douane, que préside M. Alfred Picard. Elle est tout à la fois instructive et rassurante.",
      "Elle évalue les résultats du commerce extérieur de la France en 1899. Établie, pour chaque branche d'industrie, par les hommes les plus qualifiés, elle est faite pour inspirer confiance.",
      "Ces progrès ont été réels sur tous les terrains et sous les formes les plus variées. L'année est en effet bonne à étudier pour plusieurs raisons, notamment parce qu'elle précède immédiatement 1900.",
      "Les conclusions se résument en peu de mots : augmentation de notre commerce spécial, en particulier des exportations ; accroissement des échanges avec nos colonies et développement général de notre production.",
      "La situation économique de la France, au début du siècle nouveau, est donc, de tous points, favorable, assez brillante pour justifier toutes les espérances, assez disputée pour stimuler toutes les énergies."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une ville décorée",
    "summary": "Un décret officiel autorise la ville de Landrecies à intégrer la croix de la Légion d'honneur à ses armoiries, en mémoire du bombardement de 1794 où ses habitants furent déclarés dignes de la Patrie.",
    "paragraphs": [
      "Le Journal officiel a publié hier un décret autorisant la ville de Landrecies, dans le département du Nord, à faire figurer dans ses armes la croix de la Légion d'honneur.",
      "La ville de Landrecies remplit les mêmes conditions que celles de Lille et de Valenciennes, ayant subi un bombardement violent en 1794 qui la réduisit en cendres. La Convention nationale avait alors déclaré que les habitants avaient bien mérité de la Patrie."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "En Indo-Chine",
    "summary": "Épuisé par ses missions, M. Doumer, gouverneur général de l'Indo-Chine, prévoit de regagner la France en février prochain après avoir achevé ses inspections des frontières du Kouang-Si et du Kouang-Toung.",
    "paragraphs": [
      "On mande de Bien-Hoa que M. Doumer, gouverneur général de l'Indo-Chine, étant fatigué, partira pour la France le 1er février. M. Doumer visite actuellement les frontières du Kouang-Si et du Kouang-Toung, puis Kouang-Tchéou, avec le général en chef."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Éducation",
    "title": "La réforme de l'enseignement",
    "summary": "Pour mieux répondre aux exigences modernes, le conseil supérieur de l'Instruction publique propose une réforme de l'enseignement secondaire basée sur une trisection des études dès la troisième.",
    "paragraphs": [
      "La réforme de l'enseignement secondaire s'impose, car les pères de famille demandent qu'on prépare mieux les jeunes gens aux conditions de la vie moderne. Le plan d'études adopté par le conseil supérieur de l'Instruction publique propose une trisection après la classe de troisième.",
      "Les élèves pourront opter pour : poursuivre l'étude du grec et se consacrer à la branche littéraire, se vouer aux sciences en supprimant le grec, ou s'adonner principalement aux langues vivantes."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "En Autriche",
    "summary": "Le renouvellement du Reichsrath en Autriche révèle une crise politique intense entre centralistes allemands et autonomistes tchèques, sur fond de recul des antisémites à Vienne.",
    "paragraphs": [
      "L'Autriche procède au renouvellement de son Reichsrath. Le système électoral est extrêmement complexe, divisé par classes (propriété foncière, chambres de commerce, villes, campagnes) avec des cens variables, favorisant les grands propriétaires.",
      "La situation politique est grave, tiraillée entre l'élément allemand qui veut centraliser la monarchie et l'élément tchèque qui revendique l'autonomie. L'empereur François-Joseph a dû gouverner par des pouvoirs absolus suite à l'obstruction parlementaire.",
      "La consultation électorale actuelle montre une défaite des antisémites à Vienne et une victoire des éléments nationaux, présageant des séances houleuses au Reichsrath."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accidents de chemins de fer",
    "summary": "Deux accidents ferroviaires ont eu lieu à Bordeaux et à Nuits-Saint-Georges lors de manœuvres. Bien que le matériel roulant ait subi des dommages importants, aucune victime n'est à déplorer.",
    "paragraphs": [
      "À Bordeaux, un convoi a été pris en écharpe par un second train en manœuvre dans l'enceinte de la gare de Saint-Jean. Sous la violence du choc, deux wagons ont été projetés hors de la voie.",
      "À Nuits-Saint-Georges, un train de marchandises, en débouchant d'une voie de garage, a été heurté de plein fouet par un autre convoi. Douze wagons ont été détruits, dont un a été précipité dans la rivière voisine. Aucun accident de personne n'est à déplorer."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "La Vendetta",
    "summary": "Un sanglant règlement de comptes a ensanglanté le hameau d'Aschia, en Corse. La vendetta opposant les familles Achilli et Santoni a causé la mort de plusieurs personnes dans les deux camps.",
    "paragraphs": [
      "Un drame sanglant a frappé le hameau d'Aschia, en Corse, faisant quatre victimes au sein d'une même famille, suite à une vendetta opiniâtre entre les familles Achilli et Santoni.",
      "Le père Santoni, accompagné de ses trois fils, a pris d'assaut la maison des Achilli pour venger un vol d'argent supposé. Le patriarche Santoni a trouvé la mort au cours de l'échange, ainsi que plusieurs membres de la famille Achilli. L'un des fils Santoni a été découvert sans vie lors de leur fuite."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "Nouvelles de la défense",
    "summary": "Le gouvernement du Cap autorise la formation d'une garde civique. Pendant ce temps, les renforts britanniques progressent vers l'Afrique du Sud et des prisonniers sont libérés par les Boers.",
    "paragraphs": [
      "Au Cap, le gouvernement a autorisé la création d'une garde civique indépendante des troupes régulières. L'état de siège sera proclamé prochainement dans le district de Murraysburg.",
      "Plusieurs transports de troupes, dont le Chicago et l'Orotava, font actuellement route vers l'Afrique du Sud. Par ailleurs, des prisonniers anglais ont été remis en liberté par les Boers à Helvetia."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Chronique Littéraire",
    "title": "Feuilleton : Les Sans Famille",
    "summary": "Le décès de la baronne d'Orvilliers révèle un lourd secret familial. Avant de disparaître, elle a légué à son neveu, le marquis Maurice de Rambert, la charge d'une haine implacable contre les Broudin.",
    "paragraphs": [
      "La baronne d'Orvilliers est décédée. Avant d'expirer, elle a laissé des instructions formelles à son neveu, le marquis Maurice de Rambert, concernant sa rancœur tenace envers la famille Broudin.",
      "Elle a révélé un secret atroce sur la descendance de Louise de Rambert et Pierre Broudin, avouant avoir abandonné l'enfant à son destin. Le prêtre confesseur demeure désormais l'unique témoin de cet acte odieux."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique",
    "title": "Hommage à Gambetta",
    "summary": "Une manifestation républicaine a célébré la mémoire de Gambetta à Sèvres. L'occasion fut saisie pour réitérer la confiance des associations envers le ministre de la Guerre, le général André.",
    "paragraphs": [
      "Le Petit Parisien rapporte l'éloquent discours prononcé lors de la cérémonie en hommage à Gambetta. M. Beauchery, président de l'association gambettiste, a été chaudement remercié pour ses vingt années de dévouement à la cause.",
      "M. Cazot, vice-président de l'association, a exprimé sa gratitude au ministre de la Guerre, le général André, pour sa présence remarquée.",
      "De nombreuses couronnes ont été déposées au pied du monument par diverses associations républicaines, notamment le comité central de l'Association gambettiste et des groupes d'Alsaciens-Lorrains.",
      "La manifestation s'est clôturée par un banquet à Sèvres, présidé par M. Cazot, où la confiance des républicains envers la politique du ministre de la Guerre a été solennellement réaffirmée."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "Élection sénatoriale de la Loire-Inférieure",
    "summary": "Au scrutin sénatorial de la Loire-Inférieure, M. de Pontbriand, royaliste, l'emporte avec 612 voix sur M. Liébaut, républicain, dont le score croissant confirme une progression marquée des idées républicaines.",
    "paragraphs": [
      "L'élection du 6 janvier dans la Loire-Inférieure a vu s'opposer M. de Pontbriand, royaliste, et M. Liébaut, républicain. Au terme du dépouillement, M. de Pontbriand a obtenu 612 voix.",
      "Ce scrutin, rendu nécessaire par le décès de M. de Juigné, souligne un progrès indéniable de l'idée républicaine dans le département, le candidat républicain ayant recueilli 432 voix contre 292 l'an dernier."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "Élection législative à Montmédy",
    "summary": "Le corps électoral de Montmédy (Meuse) a été appelé aux urnes hier pour élire un député en remplacement de M. Sommeillier, décédé. Le résultat du scrutin n'était pas encore connu au moment de mettre sous presse.",
    "paragraphs": [
      "Une élection législative s'est déroulée hier à Montmédy, dans la Meuse, afin de pourvoir le siège laissé vacant par le décès de M. Sommeillier.",
      "Le résultat officiel du vote n'était pas encore parvenu à notre rédaction au moment de la mise sous presse."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "La Médaille d'honneur agricole",
    "summary": "Le ministre de l'Agriculture vient de signer un arrêté officiel décernant la médaille d'honneur agricole à plusieurs travailleurs et travailleuses du monde rural pour récompenser leurs longs états de service.",
    "paragraphs": [
      "Le ministre de l'Agriculture a rendu public un arrêté conférant la médaille d'honneur agricole à un certain nombre de métayers, métayères, ouvriers et ouvrières du monde agricole, en reconnaissance de leur dévouement."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Administration",
    "title": "Réorganisation du personnel des arsenaux",
    "summary": "En application du décret du 25 août sur l'autonomie des directions de travaux, une réorganisation administrative préserve les droits des agents du commissariat détachés auprès des services techniques.",
    "paragraphs": [
      "Le décret du 25 août, accordant une plus large autonomie aux directions de travaux, a entraîné d'importantes modifications dans l'organisation administrative des arsenaux.",
      "Afin de garantir les droits acquis des agents du commissariat dont les fonctions ont été modifiées, l'administration a décidé de les maintenir dans leur corps d'origine tout en les détachant temporairement auprès des directions de travaux.",
      "Cette disposition assure la continuité du service et protège l'avancement individuel des agents concernés durant cette période de transition."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Santé",
    "title": "L'épidémie de fièvre typhoïde à Cosne",
    "summary": "Une épidémie de fièvre typhoïde frappe la garnison de Cosne. Vingt-huit cas et quatre décès ont été recensés, imposant des mesures strictes de contrôle de l'eau et d'hygiène pour endiguer la contagion.",
    "paragraphs": [
      "Une épidémie de fièvre typhoïde sévit actuellement au sein de la garnison de Cosne. Vingt-huit cas ont été signalés au régiment d'infanterie, déplorant malheureusement quatre décès.",
      "Des mesures d'urgence ont été ordonnées : les permissions ont été accordées aux soldats reconnus sains, tandis qu'une inspection rigoureuse du génie procède à la purification de l'eau, suspectée d'être la source de la contamination."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Social",
    "title": "Fraternisation à Cherbourg",
    "summary": "À Cherbourg, les colonels des régiments locaux organisent des conférences pour apaiser les tensions militaires, exhortant les troupes à la concorde et à la solidarité afin de préserver l'honneur de l'armée.",
    "paragraphs": [
      "À la suite d'une série d'altercations regrettables entre militaires, les colonels des deux régiments en garnison à Cherbourg ont pris une initiative exemplaire. Afin de mettre un terme définitif à ces rivalités intestines, ils ont organisé une série de conférences destinées à exhorter les soldats à la concorde et à raffermir les liens de solidarité, indispensables à la discipline et à l'honneur de l'armée."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Étranger",
    "title": "Dépêches internationales",
    "summary": "Actualités mondiales : séjour princier dans le Midi, naufrage tragique au Congo, rafles à Bruxelles, commémorations britanniques et alertes sanitaires à Smyrne sur fond de crise diplomatique néerlandaise.",
    "paragraphs": [
      "Leurs Altesses Royales le prince et la princesse Albert de Belgique sont attendus dans le Midi de la France pour y effectuer un séjour de convalescence. Une nouvelle attristante nous parvient du Congo : le steamer Soudan a fait naufrage, entraînant la perte de dix vies humaines.",
      "À Bruxelles, les forces de police ont procédé à une vaste rafle dans plusieurs quartiers de la capitale. Par ailleurs, le Times publie une rétrospective rappelant les lourdes pertes essuyées par les Britanniques il y a un siècle, durant la période troublée de 1793 à 1796.",
      "Du côté de Tanger, l'ambassade allemande a regagné ses quartiers. À Smyrne, les autorités sanitaires signalent l'apparition de cas de peste bubonique et pulmonaire, imposant une vigilance accrue. Enfin, l'Evening Standard se fait l'écho du mécontentement de l'opinion publique néerlandaise au sujet des récentes tractations entourant le mariage de la reine Wilhelmine."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Nécrologie",
    "title": "Mort du feld-maréchal von Blumenthal",
    "summary": "Le décès du feld-maréchal von Blumenthal, éminent stratège prussien, marque la fin d'une carrière illustre. L'état-major perd en lui un officier à l'indépendance d'esprit remarquable et au génie tactique reconnu.",
    "paragraphs": [
      "Le feld-maréchal von Blumenthal vient de s'éteindre à Quellendorf. Cette figure de premier plan de l'armée prussienne, dont le génie tactique fut maintes fois reconnu, laisse derrière lui le souvenir d'un homme à l'indépendance d'esprit remarquable.",
      "Doté d'un tempérament aussi entier que rigoureux, il fut l'un des artisans influents des grandes campagnes militaires allemandes du siècle. Sa disparition prive l'état-major prussien de l'une de ses personnalités les plus singulières et les plus respectées."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Histoire",
    "title": "Le général Boinod, un républicain sous l'Empire",
    "summary": "Portrait du général Boinod, officier sous Napoléon Ier, dont la probité exemplaire et le refus constant des compromissions politiques lui valurent l'estime de l'Empereur malgré ses convictions républicaines.",
    "paragraphs": [
      "L'existence du général Boinod demeure un témoignage éloquent de la droiture dont pouvaient faire preuve certains officiers sous le Premier Empire. Républicain de conviction, il sut pourtant forcer l'estime de Napoléon Ier par une intégrité qui ne souffrait aucune faille.",
      "Tout au long de sa carrière, il fit preuve d'un désintéressement absolu, allant jusqu'à refuser fermement des gratifications qu'il jugeait indignement acquises. Ce refus témoigne d'un dévouement au devoir supérieur aux compromissions politiques de son temps."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le froid et la neige à travers la France",
    "summary": "Une vague de froid polaire frappe la France et la Belgique. Entre désorganisation des transports et drames humains, les populations les plus démunies sont frappées de plein fouet par ces intempéries glaciales.",
    "paragraphs": [
      "Une vague de froid d'une intensité exceptionnelle s'est abattue sur l'ensemble du territoire national. Cette chute brutale des températures, accompagnée de chutes de neige, paralyse les réseaux de transport et rend la circulation des convois des plus ardues.",
      "Le bilan humain s'alourdit déjà : plusieurs décès par congestion ont été rapportés à Paris et à Aubervilliers. Les départements ne sont pas épargnés, notamment la Nièvre et l'Allier, à Moulins, où les populations les plus précaires sont durement éprouvées. De Bruxelles, nous apprenons également que plusieurs malheureux, surpris par les intempéries, ont succombé au froid durant la nuit."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Manifestation au Père-Lachaise",
    "summary": "Le 19e anniversaire de la mort de Blanqui a été commémoré au Père-Lachaise. La manifestation, encadrée par un important service d'ordre, s'est déroulée dans un calme absolu et sans incident notable.",
    "paragraphs": [
      "Le dix-neuvième anniversaire de la mort de Blanqui a été célébré hier, comme de coutume, au cimetière du Père-Lachaise.",
      "Vers le tombeau de l'Incarcéré se sont dirigés, à partir de deux heures, de nombreux citoyens.",
      "Plusieurs d'entre eux portaient des couronnes offertes par leurs groupes politiques. Les discours étaient interdits. Les manifestants défilaient, tête nue, devant le buste du mort, et quittaient ensuite la nécropole.",
      "Le service d'ordre, très nombreux, surveillait le parcours suivi par les assistants. Il n'eut à réprimer aucun cri séditieux, aucune tentative de désordre.",
      "À quatre heures, la manifestation prenait fin. Pour assurer l'évacuation complète du cimetière, les gardiens de la paix fermèrent eux-mêmes les portes après le départ des comités socialistes, qui se réunirent ensuite dans une salle voisine pour le meeting de circonstance."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Économie",
    "title": "Surtaxe sur l'alcool et prix des débits",
    "summary": "La chambre syndicale des débitants de vins explique ses ajustements tarifaires : diminution du prix du vin et légère hausse des spiritueux pour compenser la nouvelle surtaxe sur l'alcool et les frais généraux.",
    "paragraphs": [
      "Nous avons reproduit l'autre jour une communication de l'agence Havas, disant que certains propriétaires de cafés ou de bars avaient considérablement majoré le prix des spiritueux sous prétexte de se couvrir de la surtaxe imposée à l'alcool.",
      "À ce propos, la chambre syndicale des débitants de vins fait observer que la majorité de ses adhérents a diminué de 10 centimes le prix du litre de vin et augmenté seulement de 5 centimes le prix du verre de liqueur.",
      "D'après la communication de la chambre syndicale, cette combinaison aurait pour effet de donner satisfaction au consommateur dans la mesure du possible, car les débitants ne vont pas avoir uniquement à supporter l'élévation des droits sur l'alcool, mais encore différentes taxes sur le loyer, les ordures ménagères, etc., qui vont grever leurs frais généraux.",
      "Disons qu'il serait d'ailleurs prématuré de fixer d'ores et déjà les conséquences de la nouvelle loi ; il faut lui avoir donné le temps de fonctionner. Quand nous en serons là, il est fort probable que l'accord sera complet entre les débitants et les consommateurs."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Social",
    "title": "Réunion au ministère de l'Instruction publique",
    "summary": "M. Léon Bourgeois a présidé une réunion consacrée à la création de musées internationaux à Paris, notamment d'hygiène et d'art public, en valorisant les collections issues des récentes expositions universelles.",
    "paragraphs": [
      "M. Léon Bourgeois a présidé, au ministère de l'Instruction publique, une importante réunion de l'Association internationale pour le développement de la science, des arts et de l'éducation.",
      "Au cours de cette réunion, les membres de l'Association ont examiné un projet qui consiste à installer à Paris un musée international d'hygiène, un musée rétrospectif des expositions, un musée international de l'art public, un musée des colonies, de la pêche, etc., dont les matériaux, réunis pour l'exposition, ont été mis à la disposition des promoteurs du projet."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enlèvement d'enfant à la gare d'Orléans",
    "summary": "Une méprise singulière à la gare d'Orléans : Mme Cussonneau a emmené par erreur l'enfant d'une autre dame, suite à une ressemblance frappante, provoquant une confusion administrative entre deux orphelinats.",
    "paragraphs": [
      "Mme Godfroy, demeurant 19, rue du Charu, explique qu'Henri Godfroy, âgé de huit ans, avait été placé par elle à l'orphelinat Saint-Montaut (Loir-et-Cher). Se trouvant dans l'impossibilité de payer la pension de son enfant, elle demanda qu'on le lui renvoyât à Paris.",
      "Entre-temps, elle était informée qu'une mesure spéciale était prise par la gare d'Orléans. Mme Godfroy s'y rendit, mais en arrivant, elle apprit avec stupeur que l'enfant venait d'être emmené par une dame qui avait déclaré être Mme Godfroy.",
      "Depuis, elle n'en avait plus eu de nouvelles et toutes les recherches faites auprès de la Sûreté restaient vaines. C'est en se présentant hier au 15, rue Vernet, qu'elle apprenait que c'était Mme Cussonneau qui, par erreur, avait emmené son fils qu'elle avait pris pour le sien.",
      "Le fils de Mme Cussonneau, Louis, âgé de dix ans, était également placé à l'orphelinat Saint-Agnès. Sa mère avait écrit qu'on le lui renvoyât à Paris, et le 8 décembre elle se rendait à la gare d'Orléans où elle trouvait le jeune Godfroy. Trompée par une frappante ressemblance, elle emmena l'enfant chez elle.",
      "Le lendemain, le garçon étant tombé malade, elle fit venir un médecin. Trop pauvre pour payer les frais, Mme Cussonneau le fit admettre à l'Assistance publique sous le nom de Francis Bulliant.",
      "Quel ne fut pas l'étonnement de Mme Cussonneau quand, le jour de l'an, elle recevait de l'orphelinat de Saint-Agnès une lettre de son fils. Elle apprit que c'était par suite d'une erreur que les religieuses ne peuvent s'expliquer que le jeune Godfroy avait été envoyé à la place du sien. Cette dame a fait aussitôt les démarches nécessaires auprès de l'administration de l'Assistance publique pour que son enfant lui soit rendu."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents divers",
    "summary": "Une série d'accidents à Paris : un médecin renversé par une automobile, une collision entre un tramway et un omnibus, et le sauvetage d'un vieillard tombé dans la Seine depuis le pont d'Austerlitz.",
    "paragraphs": [
      "Un mécanicien nommé Bouville, qui conduisait hier après-midi une automobile appartenant au prince de Broglie, 10, rue de Solférino, a renversé boulevard Saint-Germain, devant le n° 29, le docteur Devillez. La victime a été reconduite à son domicile après avoir reçu les premiers soins.",
      "Hier après-midi, un accident causé par un tramway s'est produit boulevard Saint-Michel. Le tramway n° 292 a accroché l'omnibus n° 86. Le conducteur de l'omnibus a été fortement contusionné aux reins ; aucun voyageur n'a été blessé.",
      "Un vieillard de soixante-deux ans, Joseph Naudey, est tombé dans la Seine depuis le pont d'Austerlitz. Il a été secouru par les employés d'un bateau parisien qui passait à proximité et conduit à l'Hôtel-Dieu."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mystérieux assassinat à Essigny-le-Grand",
    "summary": "Le cultivateur Amédée Turbeaux a été découvert mort en son domicile d'Essigny-le-Grand, la gorge tranchée. Le parquet de Saint-Quentin dirige l'enquête pour interpeller l'auteur de ce crime sauvage.",
    "paragraphs": [
      "Un assassinat vient d'être commis à Essigny-le-Grand. M. Amédée Turbeaux, cultivateur estimé, a été trouvé avant-hier matin, dans son lit, la gorge ouverte.",
      "C'est son domestique qui a fait cette lugubre découverte. Le malheureux avait la gorge tranchée par un instrument tranchant, avec des indices d'une lutte désespérée. Le parquet de Saint-Quentin mène l'enquête, et une arrestation est jugée imminente."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités de l'Opéra et la Tétralogie",
    "summary": "M. Gailhard souhaite intégrer l'Or du Rhin au répertoire de l'Opéra. Malgré les contraintes de durée et les traditions, le directeur cherche une solution pour satisfaire le public parisien.",
    "paragraphs": [
      "À l'Opéra, le traité que M. Gailhard a signé avec les héritiers de Richard Wagner porte que l'Opéra a le droit exclusif de monter en français la deuxième et la troisième partie de La Tétralogie, Siegfried et le Crépuscule des Dieux. On sait que la première, la Walkyrie, est déjà au répertoire de l'Académie nationale de musique.",
      "Rien n'a été décidé pour l'Or du Rhin, cet admirable Prologue dont les tableaux féeriques seraient un éblouissement dans le cadre de l'Opéra.",
      "Une difficulté se présente : la durée de la partition. Les quatre tableaux de l'Or du Rhin durent en effet deux heures, sans entr'actes; et les héritiers du maître de Bayreuth n'entendent point qu'on les joue autrement qu'ils ont été écrits, ni qu'on les représente avec une autre pièce, un ballet par exemple. Or, deux heures de musique ne font pas ce qu'à l'Opéra on appelle un spectacle.",
      "Il est à souhaiter que M. Gailhard, en dépit des traditions et malgré les abonnés, parvienne à mettre l'Or du Rhin sur ses affiches, comme il est sur celles des grands théâtres lyriques d'Allemagne et d'Autriche."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Faits Divers",
    "title": "Distinction pour l'École polytechnique et Saint-Cyr",
    "summary": "Le général André a autorisé les élèves des Écoles polytechnique et de Saint-Cyr à assister collectivement à une représentation de la pièce « L'Autre France » au théâtre de l'Ambigu.",
    "paragraphs": [
      "Pour témoigner la satisfaction qu'il a éprouvée à la représentation de l'Autre France, à l'Ambigu, et le bon souvenir qu'il en a conservé, M. le général André vient d'autoriser les Écoles polytechnique et de Saint-Cyr à assister en corps et ensemble, un de ces jours très prochains, au beau drame de MM. Pierre Decourcelle et Hugues Le Roux."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Nouvelles théâtrales",
    "summary": "Le monde du spectacle s'anime : premières au théâtre Cluny, nouvelles œuvres au Gymnase et à l'Opéra-Comique, et nomination d'un nouveau conservateur au ministère des Beaux-Arts.",
    "paragraphs": [
      "Ce soir, au théâtre Cluny, première représentation du Bon Pasteur, vaudeville en trois actes de MM. Maurice Ordonneau et Broadhurst.",
      "M. Franck, directeur du Gymnase, vient de recevoir un acte de nos confrères Ferdinand Bloch et Louis Schneider ; titre : Un Boulet. Le principal rôle sera joué par M. Gémier.",
      "La Fille de Tabarin est la première œuvre inédite que fera passer M. Albert Carré à l'Opéra-Comique.",
      "M. Victor Claveau, rédacteur au ministère des Beaux-Arts, est nommé conservateur du matériel des théâtres d'État, en remplacement de M. Clément, décédé."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Nécrologie et hommages",
    "title": "Précisions sur la mort de Clam, le roi des pitres",
    "summary": "Le fils de Clam, prestidigitateur, rectifie les faits : son père n'est pas mort dans la misère, ses obsèques ayant été dignement assumées par sa famille.",
    "paragraphs": [
      "À la suite de la chronique de notre collaborateur Valensol sur la mort de Clam, le roi des pitres, nous avons reçu de M. Clam fils, prestidigitateur, une aimable lettre par laquelle, après nous avoir remercié, il nous prie de dire que son père, quoique décédé sans fortune, n'est pas mort dans la misère. M. Clam fils ajoute que c'est lui, et non pas les forains, qui s'est chargé des obsèques de son père.",
      "Ajoutons que le roi des pitres recevait une pension de la Société des Artistes dramatiques."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Arts et Culture",
    "title": "Nouveautés à la Comédie-Française et à l'Odéon",
    "summary": "Le musée de la Comédie-Française s'enrichit d'un portrait de Molière par Claude Lefebvre, don de Mme Charras. L'Odéon reprend ses samedis littéraires dès le 12 avec une conférence de M. Léo Claretie sur les Revues d'autrefois.",
    "paragraphs": [
      "Le précieux musée de la Comédie-Française vient encore de s'enrichir d'une œuvre d'art inestimable. C'est un portrait de Molière jeune, aux trois crayons, par Claude Lefebvre, qui fut exposé au pavillon de la ville de Paris et appartint précédemment à la collection Walferdin. C'est Mme Charras qui a fait ce magnifique don à la Maison de Molière, à l'occasion de sa réouverture.",
      "Les samedis littéraires et dramatiques de l'Odéon recommenceront le 12 de ce mois. Le prochain sera consacré aux « Revues d'autrefois », avec une causerie de M. Léo Claretie."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Chronique de Monte-Carlo",
    "title": "Inauguration de la saison lyrique monégasque",
    "summary": "Sous le patronage du prince Albert et de la princesse Alice, la saison lyrique de Monaco s'ouvre avec un répertoire prestigieux incluant Othello et la Damnation de Faust, confirmant le rayonnement artistique de la principauté.",
    "paragraphs": [
      "Les représentations d'opéras données sous le patronage du prince et de la princesse de Monaco seront prochainement inaugurées.",
      "Comme les années précédentes, le prince Albert et la princesse Alice ont voulu que ces représentations lyriques eussent le plus brillant éclat, continuant la tradition artistique de la grande scène monégasque.",
      "Le répertoire, cet hiver, comprendra Othello, le Prophète, Carmen, Samson et Dalila. Le choix du prince et de la princesse de Monaco pour l'œuvre capitale de la saison s'est arrêté sur la Damnation de Faust."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Chronique Financière",
    "title": "Bilan de la Bourse en cette fin d'année",
    "summary": "La liquidation de décembre s'achève sans encombre, marquant une fin d'année favorable. Les rentes progressent grâce à l'afflux des capitaux, tandis que les chemins de fer enregistrent une reprise encourageante de leurs recettes.",
    "paragraphs": [
      "Préparée par une période de sage réserve, la liquidation de décembre s'est effectuée sans aucun incident désagréable ; aussi l'année nouvelle semble-t-elle s'ouvrir pour nous sous les auspices les plus favorables.",
      "Les rentes ont été des plus favorisées. Après un moment d'hésitation, les capitaux laissés ici par les étrangers venus visiter l'Exposition, ou ceux, plus abondants encore, provenant du développement de notre richesse nationale, se portent actuellement vers ces placements de premier ordre.",
      "Les recettes des chemins de fer ont repris une marche satisfaisante ; l'avant-dernière semaine de l'exercice a laissé une plus-value, peu considérable il est vrai, mais qui permet d'espérer que l'augmentation totale ne sera pas inférieure à 86 millions."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Communications Diverses",
    "title": "Conférences et Concours administratifs",
    "summary": "L'Union des Femmes de France et la Société agronomique de France proposent des conférences enrichissantes pour janvier. Par ailleurs, des concours sont ouverts pour des postes dans l'administration publique.",
    "paragraphs": [
      "À la salle de conférence de l'Union des Femmes de France, rue de la Chaussée-d'Antin, la conférence du mercredi 9 janvier sera faite à quatre heures par le docteur Le Noir, médecin des hôpitaux, sur « Les progrès de la médecine et de l'hygiène au XIXe siècle ».",
      "La Société agronomique de France organise une conférence sur les signaux de la planète Mars qui sera faite par M. Flammarion le mercredi 9 janvier, à huit heures et demie, à l'hôtel des Sociétés savantes.",
      "Un concours pour quatre places d'expéditionnaire sera ouvert au ministère de l'Instruction publique et des Beaux-Arts le 1er février 1901. Un concours pour le recrutement du personnel des rédacteurs stagiaires sera également ouvert dans la deuxième quinzaine du mois de mars 1901 au ministère des Finances."
    ]
  }
];
