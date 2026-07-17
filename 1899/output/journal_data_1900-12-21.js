// Date: 1900-12-21
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-12-21 (Version Restaurée, 41 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie",
    "title": "Marseille et Gênes : Le duel des ports méditerranéens",
    "summary": "Le duel commercial entre Marseille et Gênes s'intensifie. Si la cité phocéenne reste prédominante, Gênes progresse grâce à des investissements portuaires massifs et au futur percement du tunnel du Simplon.",
    "paragraphs": [
      "L'immense lac azuré, qui sépare la vieille Europe de l'antique Afrique, est, à présent, le théâtre d'une incroyable activité. Toute l'émulation du trafic moderne y fourmille, s'y concentre, s'y déchaîne.",
      "Le duel entre Gênes et Marseille a pris, ces dernières années, des proportions épiques. Les deux opulentes cités, qui voisinent au fond du plus radieux des golfes, ont été placées par la destinée l'une contre l'autre.",
      "Jusqu'ici, Marseille a la victoire. Sa supériorité est manifeste. Mais, en matière économique, les statistiques se montrent ici assez inquiétantes : il est patent que Gênes progresse plus rapidement que Marseille au point de vue de l'importance du transit.",
      "L'activité génoise a gagné les pouvoirs municipaux et centraux, qui font de vifs efforts pour agrandir, aménager et outiller leur port. Aux termes d'un programme approuvé, près de vingt millions seront consacrés à l'amélioration du port de Gênes.",
      "Une œuvre d'une importance capitale va donner un sérieux essor aux affaires de Gênes la Splendide : le percement du Simplon. Ce travail colossal aura pour résultat de rapprocher considérablement Gênes de l'Europe centrale.",
      "Le point faible de Marseille est de n'être en communication avec le cœur de l'Europe que par une seule ligne. L'exécution d'un canal du Rhône à Marseille modifierait heureusement cet état de choses."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille",
    "summary": "Une mère, rongée par le secret de ses origines, découvre un ouvrage sur la recherche en paternité. Alors qu'elle est plongée dans ses sombres pressentiments, son fils surgit inopinément.",
    "paragraphs": [
      "Marie-Madeleine. Grand roman inédit. Deuxième partie : Bâtards.",
      "Elle était donc bien aimée de ce fils dont elle s'était si peu occupée et qu'elle avait livré aux soins d'une autre femme, devenue sa véritable mère.",
      "Tout à coup, ses yeux, attirés comme par une force magnétique, se fixèrent sur un cahier d'un certain format, en tête duquel elle distinguait ce titre sur une couverture bleue, en gros caractères : De la recherche de la paternité.",
      "Une des plus cruelles tortures qui puissent tenailler l'âme d'un enfant et surtout l'esprit du jeune homme ou de la jeune fille qui viennent d'atteindre leur majorité, c'est l'ignorance de son origine.",
      "Elle referma le cahier fatal, le remit au fond du tiroir et, appuyant ses coudes à la table, son front à ses mains crispées, elle resta immobile, accablée des plus tristes pressentiments.",
      "Elle se tenait, la tête entre ses mains, penchée sur la table, l'œil fixé sur le tiroir d'où avait jailli la lumière, absorbée par cette volonté qui venait de s'emparer d'elle, lorsqu'elle sentit deux mains qui se posaient sur son front et une voix joyeuse lui cria dans l'oreille : « Coucou ! »"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Arrestation du Commandant Cuignet",
    "summary": "Le commandant Cuignet a été arrêté et conduit au Mont-Valérien sur ordre du ministre de la Guerre, après avoir refusé de s'expliquer sur la pièce concernant le télégramme Panizzardi.",
    "paragraphs": [
      "Le commandant Cuignet, dont on n'a pas oublié le rôle au moment de l'affaire Dreyfus et la mise en non-activité, a été arrêté hier soir et envoyé au Mont-Valérien par le gouverneur militaire de Paris, sur l'ordre du ministre de la Guerre.",
      "Le ministre avait convoqué le général Chamoin et le commandant Cuignet pour fournir des explications au sujet de la pièce lue à la Chambre par M. Lasies et se rapportant au télégramme Panizzardi. Le commandant refusa de répondre aux questions.",
      "Cette arrestation donnera probablement lieu à un incident à la Chambre, au début de la séance de cet après-midi.",
      "Le commandant Cuignet avait adressé avant-hier une lettre au ministre de la Guerre déclarant : « J'ai pu découvrir des faux, je n'en ai pas commis. Sur ce sujet, je n'accepterai ni accusation ni insinuation. »"
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "International",
    "title": "Le Président Krüger à Amsterdam",
    "summary": "Le président sud-africain Krüger a reçu un accueil triomphal à Amsterdam. Après une cérémonie religieuse, il a été acclamé par la foule et a reçu de nombreuses délégations officielles.",
    "paragraphs": [
      "Le docteur Leyds, représentant en Europe des Républiques sud-africaines, est arrivé hier matin à Paris. À Amsterdam, une grande réunion a eu lieu dans la nouvelle église, où fut sacrée la reine Wilhelmine.",
      "Tout le long du parcours suivi par le cortège, la foule a salué d'acclamations enthousiastes le président Krüger. En quittant l'église, le président s'est rendu au palais de l'Industrie où 3 000 enfants des écoles ont entonné l'hymne transvaalien.",
      "À une heure, il a reçu les autorités d'Amsterdam ainsi qu'un grand nombre de députations ecclésiastiques, militaires, civiles et universitaires."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "International",
    "title": "L'arbitrage dans le conflit boer",
    "summary": "Des députés hessois demandent la création d'un tribunal arbitral pour le conflit anglo-boer. Parallèlement, le président Krüger réaffirme la détermination des Républiques à lutter jusqu'au bout.",
    "paragraphs": [
      "À la seconde Chambre hessoise, les députés Kœhler, Langsdorf et plusieurs autres ont demandé l'urgence pour une motion priant le gouvernement hessois de proposer au Conseil fédéral la constitution d'un tribunal arbitral au sujet du conflit entre l'Angleterre et les États boërs.",
      "Par ailleurs, M. Krüger a écrit à M. Hélary, maire de Saint-Brieuc, pour le remercier de l'adresse de sympathie envoyée après le banquet de la Sainte-Cécile, déclarant que les Républiques lutteront jusqu'au bout."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Guerre",
    "title": "La situation au Transvaal",
    "summary": "L'invasion de la colonie du Cap par les forces boërs se poursuit, plongeant l'armée britannique dans une impasse stratégique face à l'habileté des généraux adverses, tandis que le gouvernement anglais s'alarme.",
    "paragraphs": [
      "L'invasion de la colonie du Cap par les forces boërs se poursuit méthodiquement, et jusqu'ici les Anglais semblent impuissants à s'y opposer. Lord Kitchener annonce des renforts, mais les Boërs ont pris Colesberg.",
      "Lord Kitchener, menacé par Delarey dans le Transvaal et par Dewet dans l'Orange, se trouve dans une alternative fâcheuse. Quoi qu'il fasse, il semble que, comme stratèges, les généraux anglais ne soient pas de force face aux officiers boërs.",
      "La Westminster Gazette souligne l'embarras du gouvernement anglais devant cette situation où les effectifs sont insuffisants pour protéger les lignes de communication tout en combattant."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Politique",
    "title": "Les Fortifications de Paris",
    "summary": "M. Caillaux, ministre des Finances, exhorte le conseil municipal de Paris à statuer enfin sur l'acquisition des terrains libérés des fortifications, sommant la Ville de sortir de son inertie.",
    "paragraphs": [
      "M. Caillaux, ministre des Finances, a adressé au préfet de la Seine une lettre relative à la question des fortifications de Paris, sommant le conseil municipal de sortir de son indécision concernant l'acquisition des terrains libérés.",
      "Il souligne que l'administration a épuisé les moyens de persuasion et que, si le conseil ne se prononce pas, la responsabilité des conséquences incombera aux représentants de la Ville."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un drame à Dunkerque",
    "summary": "À Dunkerque, une violente altercation dans un cabaret a mené un matelot espagnol à poignarder le patron de l'établissement après un refus de prêt d'argent. Le suspect a été appréhendé sur un navire.",
    "paragraphs": [
      "Un terrible drame s'est déroulé dans un cabaret de Dunkerque. Un matelot espagnol, Manuel Barra, a poignardé le patron de l'établissement, Schneider, après s'être vu refuser un prêt de deux francs.",
      "La police a arrêté l'agresseur à bord d'un navire belge. La victime, grièvement blessée, a été immédiatement transportée aux soins d'un médecin."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Arrestation de faux monnayeurs",
    "summary": "Deux individus, qui inondaient le commerce de Champigny de fausse monnaie, ont été capturés en flagrant délit dans un bureau de tabac. La police a saisi de nombreuses pièces cachées sur eux.",
    "paragraphs": [
      "Depuis quinze jours, les commerçants de Champigny étaient victimes d'individus écoulant de la fausse monnaie. Le commissaire de police a fini par prendre deux suspects en flagrant délit dans un bureau de tabac.",
      "Après une fouille minutieuse, les agents ont découvert des centaines de pièces de un franc cachées dans leurs chaussures et sous leurs vêtements. Les deux hommes ont été conduits au commissariat."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrestation de faux-monnayeurs",
    "summary": "La perquisition au domicile du nommé Legarçon a révélé l'existence d'un réseau structuré de faux-monnayeurs produisant des pièces à l'effigie de la Semeuse. Les inculpés ont été écroués au dépôt.",
    "paragraphs": [
      "La perquisition effectuée par le magistrat au domicile de Legarçon, rue de Picpus, a mené à la découverte de pièces de monnaie et d'une volumineuse correspondance liant cet homme, ainsi qu'un certain Bourgine, à un réseau de fabrication de fausse monnaie à l'effigie de la Semeuse.",
      "M. Parnet est convaincu que les deux suspects appartiennent à une bande organisée. Ils ont été envoyés au dépôt."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "Réformes financières et budget de l'Algérie",
    "summary": "Le gouvernement dépose un projet de loi pour le budget spécial de l'Algérie et réforme le service des trésoriers. Parallèlement, le Sénat débat de l'insaisissabilité partielle des salaires ouvriers.",
    "paragraphs": [
      "Un projet de loi relatif à la création d'un budget spécial pour l'Algérie a été déposé devant la Chambre.",
      "Le ministre des Finances, M. Caillaux, prépare une réforme importante concernant le service des trésoriers généraux, des receveurs des finances et des percepteurs.",
      "La commission sénatoriale des saisies-arrêts a adopté le principe de l'insaisissabilité des salaires des ouvriers à concurrence d'un dixième de leur montant total."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "Chambre des députés : Discussion du budget de la Marine",
    "summary": "La Chambre examine le budget de la Marine. M. Lockroy critique le manque de vision stratégique de l'administration, tandis que l'amiral Rieunier souligne des carences techniques et industrielles.",
    "paragraphs": [
      "La Chambre a consacré ses séances du jeudi à la discussion du budget de la Marine. M. Lockroy a vivement critiqué l'administration actuelle, jugeant qu'elle ne se préoccupe point assez des besoins de l'avenir et de la supériorité navale nécessaire à la France.",
      "L'amiral Rieunier a soulevé des questions techniques sur l'avancement des officiers et la gestion de la flotte, critiquant notamment le recours à l'industrie étrangère pour certaines commandes de canonnières."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "Sénat : Protection de la santé publique",
    "summary": "Le Sénat poursuit l'examen du projet de loi sur la santé publique. M. Waldeck-Rousseau insiste sur la nécessité d'appliquer rigoureusement les règlements sanitaires, y compris dans les communes les plus modestes.",
    "paragraphs": [
      "Le Sénat a poursuivi la discussion sur le projet de loi relatif à la santé publique.",
      "M. Waldeck-Rousseau a souligné l'importance des règlements sanitaires, même pour les petites communes, insistant sur le fait que la prévention des épidémies est une mesure indispensable sur tout le territoire national."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Actualités Maritimes",
    "title": "Le renforcement des flottes de guerre",
    "summary": "Face à la menace des torpilleurs, les grandes puissances navales, avec l'Angleterre en tête, augmentent le tonnage et la puissance de feu de leurs nouveaux cuirassés.",
    "paragraphs": [
      "Les grandes puissances, notamment l'Angleterre, augmentent le tonnage de leurs cuirassés, tels que le Queen et le Prince-of-Wales, afin de mieux résister aux attaques des torpilleurs et d'accroître leur puissance de feu."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Justice",
    "title": "La juridiction maritime en cas de crime",
    "summary": "Un incident criminel à l'arsenal de Toulon confirme que tout délit commis dans une enceinte militaire maritime relève de la juridiction maritime, quel que soit le statut civil ou militaire de l'auteur.",
    "paragraphs": [
      "Un crime commis dans l'enceinte de l'arsenal de Toulon par un ouvrier civil souligne une particularité juridique : dès lors qu'un délit est commis dans un arsenal ou sur un bâtiment de guerre, il relève de la juridiction maritime, même si l'auteur n'est pas marin."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Actualités Militaires",
    "title": "Activités et entraînements militaires",
    "summary": "Un service solennel a été célébré aux Invalides en mémoire du commandant Lamy, tandis que les bataillons alpins poursuivent leurs manœuvres hivernales en haute montagne malgré la rigueur du climat.",
    "paragraphs": [
      "Un service solennel à la mémoire du commandant Lamy a été célébré aux Invalides. Par ailleurs, les bataillons alpins poursuivent leurs marches d'hiver dans les hautes régions pour s'entraîner aux opérations en montagne, malgré les conditions météorologiques particulièrement rigoureuses de la saison."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Chine",
    "title": "Situation dans la province de Pékin",
    "summary": "La situation dans la province de Pékin reste instable ; si les forces alliées contrôlent les voies ferrées, la circulation demeure difficile et le mécontentement populaire s'accentue face à l'insécurité.",
    "paragraphs": [
      "La situation demeure précaire dans la province de Pékin. Bien que les autorités allemandes et russes assurent le contrôle des voies ferrées, les conditions de circulation y sont médiocres et le mécontentement de la population grandit face à l'insécurité persistante."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Étranger",
    "title": "Incidents sociaux et politique internationale",
    "summary": "L'actualité internationale est marquée par des troubles sociaux à Lokeren, des tractations coloniales à Madrid et un retentissant scandale financier frappant une banque berlinoise en cette fin 1899.",
    "paragraphs": [
      "Une grève d'ouvriers à Lokeren, en Belgique, a dégénéré en affrontements violents avec la gendarmerie. À Madrid, le gouvernement envisage la cession de territoires insulaires aux États-Unis, tandis qu'à Berlin, un scandale financier ébranle la direction de la Banque hypothécaire prussienne."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Conseil Municipal",
    "title": "Débats sur les taxes et la sécurité à Paris",
    "summary": "Le Conseil municipal de Paris s'est penché sur les taxes boursières et la criminalité dans le quartier de Plaisance, attribuée par la préfecture au contre-coup de l'Exposition universelle.",
    "paragraphs": [
      "Le Conseil municipal de Paris a débattu des taxes sur les opérations de bourse ainsi que de l'insécurité croissante dans le quartier de Plaisance. Le préfet de police a expliqué que la recrudescence des vols est étroitement liée à la fin de l'Exposition universelle et au grand nombre d'individus sans aveu demeurant dans la capitale."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Social",
    "title": "Fondation de la cité nouvelle et distribution de récompenses",
    "summary": "M. Paul Deschaffet a appelé à l'union féconde du capital et du travail pour assurer l'excellence industrielle nationale, avant de procéder à la remise solennelle des récompenses aux ouvriers méritants.",
    "paragraphs": [
      "M. Paul Deschaffet a répondu en buvant à l'union du capital et du travail, en souhaitant cette autre union, plus féconde encore, des divers facteurs du travail national, pour le maintien au premier rang de l'outillage économique, industriel et commercial de la nation.",
      "Après ces discours, a eu lieu la distribution solennelle des bourses, médailles, diplômes et livrets de caisse d'épargne aux ouvriers les plus méritants de l'entreprise."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Éducation et Formation",
    "title": "Exposition au musée de l'école Diderot",
    "summary": "À partir de janvier, le musée de l'école Diderot ouvrira ses portes chaque dimanche pour exposer les travaux techniques de ses élèves, incluant forge, électricité et menuiserie, salués par un grand prix.",
    "paragraphs": [
      "Le musée de l'école Diderot, sis au 60, boulevard de la Villette, sera ouvert au public tous les dimanches, de huit heures du matin à midi, à partir de janvier prochain.",
      "Les travaux des élèves, réalisés dans les différentes professions enseignées à l'école Diderot — forge, tours sur métaux, ajustage, électricité, instruments de précision, chaudronnerie, menuiserie, serrurerie, plomberie sanitaire — y seront exposés.",
      "Leur examen sera d'autant plus profitable aux visiteurs, ouvriers et entrepreneurs, que tous les objets présentés témoignent d'une perfection absolue, si scrupuleuse que le jury de l'Exposition a, du reste, décerné un grand prix à l'établissement."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Social",
    "title": "Prix du syndicat de la Presse parisienne",
    "summary": "Le syndicat de la Presse parisienne invite les candidats au prix de 100 000 francs institué par M. Osiris pour une œuvre artistique, industrielle ou humanitaire, à déposer leurs dossiers rue de Provence.",
    "paragraphs": [
      "Le comité du syndicat de la Presse parisienne rappelle aux intéressés que M. Osiris, le généreux philanthrope, a institué un prix de 100 000 francs au profit de l'auteur ou des auteurs de l'œuvre jugée la plus méritoire par le comité, qu'il s'agisse d'un domaine artistique, industriel ou humanitaire.",
      "Les demandes, accompagnées de tous les documents à l'appui, doivent être adressées au siège social du syndicat de la Presse parisienne, au 19, rue de Provence."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Social",
    "title": "Bilan de la Caisse des victimes du devoir",
    "summary": "La Caisse des victimes du devoir a distribué ce trimestre 12 000 francs aux familles de serviteurs publics, tout en assurant des pensions aux veuves et des allocations aux orphelins.",
    "paragraphs": [
      "La Caisse des victimes du devoir a réparti, durant le dernier trimestre, une somme de 12 000 francs entre les familles de victimes ayant accompli des actes de dévouement : gardiens de la paix, pompiers, marins, ouvriers, douaniers, cambusiers ou encore gardiens de prison.",
      "Cette œuvre de bienfaisance, reconnue d'utilité publique, a également distribué 12 000 francs sous forme de pensions aux veuves ou mères des victimes du devoir, et 3 000 francs en allocations destinées à leurs orphelins."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Théâtre",
    "title": "Critique des pièces 'L'Autre France' et 'Le Roi Dagobert'",
    "summary": "Compte rendu théâtral : 'L'Autre France' propose un drame historique captivant sur l'insurrection algérienne à l'Ambigu, tandis que 'Le Roi Dagobert' aux Variétés déçoit par sa platitude.",
    "paragraphs": [
      "L'Autre France, drame à grand spectacle en cinq actes de MM. Pierre Decourcelle et Hugues Le Roux, est à l'affiche à l'Ambigu. Par ailleurs, Le Roi Dagobert, opérette bouffe en trois actes de MM. Octave Pradels et Léon Haliot, sur une musique de M. Marius Lambert, est jouée aux Variétés parisiennes.",
      "M. Georges Grisier, devenu l'associé de M. Holacher, directeur de l'Ambigu, a inauguré hier soir cette collaboration. Le drame représenté, L'Autre France, tiré par M. Pierre Decourcelle d'un roman de M. Hugues Le Roux, est intéressant et mouvementé ; il traite de l'insurrection en Algérie après la guerre de 1870, autour de la figure de Mokrani.",
      "Concernant Le Roi Dagobert, cette opérette bouffe demeure une pièce sans grand relief, dont l'interprétation est d'une insignifiance égale à celle de l'œuvre."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "Réunion des Prévoyants de l'Avenir",
    "summary": "Plus de deux mille personnes ont réclamé hier soir la fin du séquestre frappant les 'Prévoyants de l'Avenir' et le soutien du Parlement au projet de M. Audiffred pour résoudre la crise.",
    "paragraphs": [
      "La ligue de défense des droits et intérêts des adhérents aux Prévoyants de l'Avenir avait organisé hier soir, à l'hôtel des Sociétés savantes, une réunion-conférence ayant rassemblé plus de deux mille personnes.",
      "Les orateurs ont conclu en demandant que le décret d'autorisation légale soit restitué aux Prévoyants de l'Avenir et que l'action du séquestre soit suspendue, arguant qu'aucune irrégularité de gestion n'a pu être constatée jusqu'ici.",
      "À l'unanimité, les assistants ont adopté un ordre du jour enjoignant aux membres du Parlement présents d'appuyer le projet de M. Audiffred, qui semble être la voie la plus rapide vers une résolution."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Grève des ouvriers des docks d'Anvers",
    "summary": "La grève des arrimeurs paralyse le port d'Anvers. Face aux heurts entre grévistes et ouvriers travaillant, le trafic se déplace vers Flessingue et Rotterdam, soutenu par la solidarité des équipages de steamers.",
    "paragraphs": [
      "La grève des contremaîtres arrimeurs est complète à Anvers. Des rixes se sont produites entre grévistes et ouvriers travaillant. La plupart des navires chargent et déchargent désormais à Flessingue et à Rotterdam.",
      "Les hommes d'équipage de plusieurs steamers ont pris le parti des grévistes et ont refusé de travailler."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Procès et arrestations",
    "summary": "Une série d'affaires judiciaires et de faits divers marquent la chronique : condamnations aux assises, agressions à main armée, suicides et escroqueries occupent la police parisienne.",
    "paragraphs": [
      "La cour d'assises d'Oran a condamné hier à la peine de mort Aïssa ben Mohamed, auteur du crime de Saint-Eugène.",
      "La cour d'assises de la Seine a condamné deux individus, Bastien et Paget, qui s'étaient introduits par effraction dans l'appartement de M. Languellier, avocat, rue du Château-d'Eau. Bastien a été condamné à six ans de réclusion et Paget à cinq ans.",
      "Un garçon boucher nommé Louis Ruchon a été blessé par un individu tirant deux coups de revolver rue des Saules, par suite d'une fâcheuse ressemblance avec un autre homme. L'agresseur a été arrêté.",
      "Charles Rondel, un poseur de rails, a été grièvement brûlé par une étincelle électrique à la nouvelle gare d'Orléans et transporté à l'hôpital de la Charité.",
      "Un détenu libéré de la prison centrale de Poissy, Paul Delécluse, a été arrêté à Paris pour non-respect de son interdiction de séjour alors qu'il tentait de revoir sa famille.",
      "Une femme nommée Rosine Brun a été victime d'un habile escroc se faisant passer pour un sous-officier d'artillerie, qui lui a extorqué de l'argent sous prétexte de venir en aide à son fils.",
      "Le compteur à gaz d'une épicerie, rue Cail, a explosé, provoquant un incendie maîtrisé par les pompiers.",
      "M. Léon Copard, boucher de 43 ans, a été retrouvé pendu à son domicile du 37, rue du Temple."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Départements",
    "title": "Faits divers en province",
    "summary": "La chronique provinciale rapporte le décès accidentel de Charles Lion à Compiègne ainsi que deux sinistres incendies survenus place de la Visitation à Angers.",
    "paragraphs": [
      "Compiègne : Le cadavre de Charles Lion a été retiré de l'Oise. Sa mort est accidentelle.",
      "Angers : Deux incendies violents ont ravagé le laboratoire d'un photographe et les ateliers d'un marchand de bicyclettes, place de la Visitation."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue parisienne",
    "summary": "La banlieue parisienne est le théâtre de multiples arrestations pour agressions et vols, ainsi que d'accidents domestiques et industriels, notamment à Levallois, Clichy et Saint-Denis.",
    "paragraphs": [
      "Levallois-Perret : Arrestation de Michel Coudray, dit « l'Allumette de Saint-Ouen », pour agression et vol.",
      "Clichy : Six rôdeurs ont été arrêtés par la police pour des agressions nocturnes.",
      "Asnières : Un peintre en bâtiment s'est suicidé par pendaison.",
      "Saint-Ouen : Léon Gerbert, 17 ans, a été arrêté après avoir tenté de revendre une bicyclette volée au propriétaire lui-même.",
      "Villeneuve-la-Garenne : Louis Malvenq, 19 ans, a fait une chute de six mètres en cueillant du gui et a été transporté à l'hôpital Beaujon.",
      "Saint-Denis : Trois accidents ont eu lieu, dont une fuite dans une usine chimique inondant un contremaître de sulfate de zinc, un ouvrier blessé par une planche et une chute d'escalier pour Mme Elisa Mailhand."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Sports",
    "title": "Sports d'hiver et boxe à Noël",
    "summary": "Le programme des fêtes de fin d'année s'annonce sportif avec, pour le réveillon, un match de boxe entre Goodwin et Cautrel, suivi le jour de Noël par diverses épreuves athlétiques.",
    "paragraphs": [
      "Petit programme pour les fêtes : le soir du réveillon, un grand match de boxe anglaise opposera les professionnels américains Goodwin et Cautrel.",
      "Le mardi 25, jour de Noël, des épreuves de sports athlétiques, course à pied et gymkhana seront organisées, suivies le soir par le grand prix de Noël."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Sports",
    "title": "Football : Racing-Club de France contre Racing-Club roubaisien",
    "summary": "Le Racing-Club de France se déplace ce dimanche à Roubaix pour affronter le Racing-Club roubaisien, dans une rencontre sportive promettant d'être particulièrement acharnée.",
    "paragraphs": [
      "Les matches annuels des équipes première et seconde du Racing-Club de France et du Racing-Club roubaisien se disputeront après-demain dimanche, à Roubaix.",
      "Les équipes roubaisiennes sont annoncées comme étant très entraînées et parfaitement capables de livrer une rude bataille à leurs adversaires parisiens."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Société",
    "title": "École normale d'aérostation",
    "summary": "L'École normale d'aérostation invite ses membres à participer à ses prochaines ascensions. Les inscriptions sont reçues au siège social ou lors des réunions mensuelles.",
    "paragraphs": [
      "Les membres actifs de l'École normale d'aérostation participent à tour de rôle aux ascensions exécutées par cette société.",
      "Pour s'inscrire, il convient de s'adresser au siège social situé 40, rue des Marais, ou aux réunions mensuelles ayant lieu les premiers et troisièmes vendredis du mois, à l'école communale de la rue des Étuves-Saint-Martin."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Sports",
    "title": "Boxe française",
    "summary": "La Société de boxe française organise ce soir son assaut intime annuel au 21, rue des Martyrs, réunissant de nombreux tireurs, amateurs et professeurs de la discipline.",
    "paragraphs": [
      "La Société de boxe française donnera ce soir, en son siège social du 21, rue des Martyrs, son assaut intime annuel. De nombreux tireurs, amateurs et professeurs, y sont inscrits."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Sports",
    "title": "Tir aux pigeons",
    "summary": "M. Robinson s'adjuge le prix d'Hiver à Monte-Carlo devant MM. Gourgaud et Lalehan. La compétition se poursuit ce jour avec le prix de Décembre, disputé sous forme de handicap.",
    "paragraphs": [
      "Plusieurs tireurs ont pris part au prix d'Hiver à Monte-Carlo. Le premier prix revient à M. Robinson, suivi par MM. Gourgaud et Lalehan.",
      "Aujourd'hui, le prix de Décembre, organisé sous forme de handicap, sera disputé par les concurrents."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Météorologie",
    "title": "La température",
    "summary": "En ce vendredi 21 décembre, le temps demeure doux mais incertain. Une dépression sur les îles Britanniques agite la mer, tandis que le ciel reste clément sur le littoral provençal.",
    "paragraphs": [
      "Vendredi 21 décembre, 355e jour de l'année. Temps doux avec de probables averses dans le nord et le nord-ouest de la France.",
      "Une profonde dépression s'est avancée sur les îles Britanniques, influençant les conditions climatiques. La mer est houleuse sur la Manche et l'Océan, mais belle en Provence."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Statistiques",
    "title": "Statistique hebdomadaire de la ville de Paris",
    "summary": "Durant la 50e semaine, Paris a enregistré 882 décès, en baisse, et 1 118 naissances. La persistance de la fièvre typhoïde et de la variole conduit les autorités à intensifier les appels à la vaccination.",
    "paragraphs": [
      "Le service de la statistique municipale a enregistré, durant la 50e semaine, 882 décès, un chiffre en baisse par rapport à la moyenne saisonnière.",
      "La fièvre typhoïde a causé 14 décès et la variole 9. Le nombre de nouveaux cas de variole reste élevé (109), incitant les autorités à recommander vivement la vaccination et la revaccination pour les adultes.",
      "On a enregistré 1 118 naissances vivantes et célébré de nombreux mariages au cours de la même période."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Culture",
    "title": "Supplément Littéraire du Petit Parisien",
    "summary": "Le Supplément Littéraire illustré en couleurs du Petit Parisien propose cette semaine des gravures d'actualité, du campement français en Chine à la prestation de serment de la première femme avocat.",
    "paragraphs": [
      "Le Supplément Littéraire illustré en couleurs du Petit Parisien propose cette semaine des gravures d'actualité : un campement français près des tombeaux des empereurs en Chine, la prestation de serment de la première femme avocat et le tragique fait divers du jeune homme coupé en morceaux."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Culture",
    "title": "Courrier des Théâtres",
    "summary": "À l'occasion du 362e anniversaire de Racine, les théâtres parisiens multiplient les représentations. M. Albert Carré, à l'Opéra-Comique, favorise l'accès des jeunes spectateurs à la matinée de Cendrillon.",
    "paragraphs": [
      "À l'occasion du 362e anniversaire de la naissance de Racine, des représentations spéciales sont organisées à la Comédie-Française et à l'Odéon.",
      "Plusieurs premières sont également annoncées : « Tête de Linotte » à l'Athénée et « Martyre » à la Comédie-Populaire.",
      "M. Albert Carré, directeur de l'Opéra-Comique, accorde une réduction de 50 % sur le prix des places aux moins de quinze ans pour la matinée de « Cendrillon »."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Faits Divers",
    "title": "Feuilleton : Le Fruit Défendu",
    "summary": "Dans l'affaire Villaurier, l'expert M. Lepardoux conclut à une imitation des lettres incriminées. Une convocation soudaine par le notaire M. Pernisson plonge l'expert dans une attente inquiétante.",
    "paragraphs": [
      "La suite du roman « Le Fruit Défendu » détaille les conclusions de M. Lepardoux, expert dans l'affaire Villaurier, affirmant que les lettres incriminées ne sont pas de la main du suspect mais une tentative d'imitation.",
      "L'intrigue se poursuit alors que M. Lepardoux est convoqué par le notaire M. Pernisson pour des raisons qui semblent liées à cette expertise controversée."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Société",
    "title": "Œuvre de l'hospitalité de nuit",
    "summary": "Face aux rigueurs de l'hiver, l'Œuvre de l'hospitalité de nuit sollicite la générosité des Parisiens. Dons de vêtements et contributions financières sont essentiels pour secourir les plus nécessiteux.",
    "paragraphs": [
      "L'Œuvre de l'hospitalité de nuit offre un abri aux plus démunis chaque soir. Elle appelle à la générosité des lecteurs pour faire don de vêtements usagés ou d'argent pour aider ceux qui souffrent du froid.",
      "Les dons peuvent être déposés ou récupérés à plusieurs adresses dans Paris, sur la rive droite et la rive gauche."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Économie",
    "title": "Marché aux bestiaux de la Villette",
    "summary": "Compte rendu du marché de La Villette du 20 décembre : les transactions furent médiocres pour les bœufs et moutons, en baisse de prix, tandis que les veaux stagnent et que les porcs connaissent une légère hausse.",
    "paragraphs": [
      "Compte rendu des transactions du jeudi 20 décembre. Le marché des bœufs a été marqué par une vente médiocre et un recul sensible des prix. Les veaux maintiennent des cours stables en dépit d'une demande languissante, tandis que les moutons subissent un fléchissement des prix et que les porcs, plus recherchés, connaissent une légère hausse."
    ]
  }
];
