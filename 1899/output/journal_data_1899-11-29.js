// Date: 1899-11-29
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-11-29 (Version Restaurée, 50 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions",
    "summary": "Le Petit Parisien annonce la publication prochaine de 'Deux Passions', un roman inédit de Charles Mérouvel explorant les passions opposées et les tourments d'une femme pure face aux vicissitudes de la vie.",
    "paragraphs": [
      "Le Petit Parisien commencera prochainement la publication d'un grand roman inédit intitulé 'Deux Passions', par Charles Mérouvel. Cette histoire poignante, qualifiée d'épisode de la vie réelle, met en scène des passions opposées autour d'une femme pure et malheureuse.",
      "Le lecteur y retrouvera le talent de l'auteur de 'Fille sans nom' et de 'L'Amour, la Roche Sanglante', dans une œuvre empreinte d'un intérêt dramatique et grandiose."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Social",
    "title": "Nos ambulancières",
    "summary": "L'Association des dames françaises renforce la formation des ambulancières, prouvant l'importance du rôle des infirmières pour préparer la nation à l'assistance des blessés en cas de conflit armé.",
    "paragraphs": [
      "L'Association des dames françaises a tenu son assemblée générale annuelle à la Sorbonne, sous la présidence d'honneur de M. Loubet. La France compte trois sociétés reconnues d'utilité publique pour soigner les blessés et malades des armées : la Société de secours aux blessés militaires, l'Association des dames françaises et l'Union des femmes de France.",
      "Bien que toutes placées sous l'égide du ministre de la Guerre et portant la croix rouge, leur fonctionnement diffère. La première recrute principalement parmi les hommes, tandis que les deux autres associations, composées de femmes, ont prouvé leur nécessité et leur efficacité, notamment par la création d'écoles d'ambulancières.",
      "Inspirées par l'exemple allemand, ces sociétés féminines permettent de préparer la nation à une éventuelle guerre, où le rôle des infirmières sera crucial pour assister les millions de combattants potentiels."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Actualités",
    "title": "Programme des constructions navales",
    "summary": "M. de Lanessan, ministre de la Marine, propose une réforme rigoureuse du programme de construction navale pour corriger les retards accumulés et garantir la puissance de la flotte française.",
    "paragraphs": [
      "Le ministre de la Marine s'apprête à soumettre au Parlement un nouveau programme de constructions navales, afin d'assurer à la flotte française la puissance nécessaire. Ce programme, qui doit encore recevoir l'approbation du Conseil supérieur de la marine, vise à pallier l'échec des plans précédents qui n'ont jamais été suivis méthodiquement.",
      "Le précédent programme de 1891, maintes fois modifié, prévoyait une série de cuirassés, croiseurs et torpilleurs dont l'exécution a pris un retard considérable. Le nouveau projet de loi, porté par M. de Lanessan, comportera les moyens financiers nécessaires pour garantir une exécution rigoureuse sur une période déterminée."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des Ministres et informations diverses",
    "summary": "Le Conseil des ministres examine le budget et l'armée coloniale. Par ailleurs, décès de M. Charles Dutreix et annonce d'un excédent budgétaire de plus de 14 millions de francs pour l'année 1899.",
    "paragraphs": [
      "Les ministres se sont réunis hier à l'Élysée, sous la présidence de M. Loubet, pour discuter du budget de l'Intérieur, des Cultes et du projet relatif à l'armée coloniale.",
      "On annonce par ailleurs le décès de M. Charles Dutreix, député radical de Troyes, qui s'était particulièrement illustré dans la défense des questions ouvrières et la législation des prud'hommes.",
      "Enfin, le ministre des Finances a communiqué des informations sur la situation budgétaire au 1er novembre, faisant état d'un excédent de recettes de 14 316 747 francs sur le budget de 1899."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un père qui tue son fils",
    "summary": "Drame familial à Nice : après des mois de terreur, un boulanger a dû abattre son fils violent pour se défendre. Le père, arrêté, suscite une vive compassion parmi les habitants de la ville.",
    "paragraphs": [
      "À Nice, le nommé Jean-Baptiste Garchier, boulanger, a tué son fils Joseph d'un coup de revolver après une dispute violente. Le fils, connu pour sa conduite déplorable et ses antécédents militaires disciplinaires, terrorisait quotidiennement sa famille et exigeait de l'argent.",
      "Malgré les tentatives de la mère et des sœurs pour calmer la situation, Joseph a menacé ses parents avec une pelle, forçant son père à se défendre avec une arme. La balle a atteint le jeune homme à la tête, provoquant sa mort immédiate. Le père a été arrêté dans un climat général de compassion de la part des habitants."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "La démolition du Palais de l'Industrie",
    "summary": "La démolition du Palais de l'Industrie se poursuit avec prudence. En parallèle, l'édification des palais des Beaux-Arts et des pavillons étrangers, tels ceux du Transvaal et des Indes, avance avec une grande célérité.",
    "paragraphs": [
      "La destruction du vieux Palais de l'Industrie avance, laissant place à une perspective majestueuse pour l'Exposition universelle. Si la démolition est prudente et lente, les travaux d'édification des nouveaux palais des Beaux-Arts et des sections étrangères progressent rapidement.",
      "Les pavillons des nations étrangères, notamment le pavillon du Transvaal et celui des Indes britanniques, témoignent de l'envergure internationale de cet événement. Les organisateurs veillent à ce que les curieux ne découvrent la vue définitive des avenues qu'une fois les travaux terminés."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Diplomatie",
    "title": "La situation au Transvaal",
    "summary": "La guerre anglo-boer évolue : les Boers progressent, aidés par les fermiers du Cap. Le gouvernement britannique reconnaît désormais aux Boers la qualité de belligérants, ouvrant la voie à une éventuelle diplomatie.",
    "paragraphs": [
      "La guerre anglo-boer traverse une phase décisive. Alors que les forces britanniques tentent de reprendre l'offensive, les Boers continuent leur progression et bénéficient de ralliements importants de fermiers hollandais de la colonie du Cap.",
      "Le gouvernement britannique a fait un changement d'attitude notable en reconnaissant la qualité de belligérants aux Boers, une décision qui pourrait ouvrir la porte à de nouvelles perspectives diplomatiques pour la résolution du conflit."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Roman-Feuilleton",
    "title": "Les tragédies de l'amour",
    "summary": "Le marquis de Vivarez, inquiet pour son neveu Horace, décide de se rendre au Havre pour contrer les manœuvres des Girodias. Il confie à Colette la surveillance de la maison pour préserver l'honneur familial.",
    "paragraphs": [
      "Colette, après avoir donné ses instructions aux musiciens pour leurs recherches à Paris, reçoit la visite du marquis de Vivarez. Ce dernier, inquiet du silence de son neveu Horace, apprend que les Girodias préparent leur départ pour Le Havre.",
      "Le marquis décide de partir immédiatement pour Le Havre afin de contrer leurs projets, demandant à Colette de rester à Villefort pour préserver l'honneur de la famille. Le secret du départ est gardé, et le marquis se prépare à rejoindre le capitaine Mariotti pour organiser la défense."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Situation dans la Colonie du Cap",
    "summary": "Une dépêche transmise depuis Berlin ce 28 novembre confirme la rumeur persistante selon laquelle les forces boers auraient désormais pris l'initiative des opérations militaires dans la région.",
    "paragraphs": [
      "D'après une dépêche de Berlin en date du 28 novembre, le bruit s'accrédite que les Boers ont pris les devants dans les opérations militaires."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Les pertes anglaises",
    "summary": "Le War Office a publié le bilan des pertes britanniques au combat de Graspan : 201 tués, blessés ou disparus au 25 novembre, incluant une rectification sur le décès de plusieurs officiers de la brigade navale.",
    "paragraphs": [
      "Londres, 28 novembre. Le War Office publie la liste des pertes anglaises pour ce département au combat de Graspan. Cette liste donne les chiffres suivants : tués, 10 soldats ; blessés, 3 officiers et 73 soldats ; manquants, 6 soldats.",
      "Le total des pertes s'élève à 92 hommes, qui, ajoutées aux pertes subies par la brigade navale, portent à 201 tués, blessés ou manquants le bilan général pour la journée du 25 novembre.",
      "Le War Office publie une liste rectificative dont il ressort que deux officiers de la brigade navale, d'abord portés comme blessés, ont été tués, et qu'un autre officier a succombé à ses blessures. Ce décompte porte à six le nombre d'officiers des troupes de marine tués dans cette affaire."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Au Natal",
    "summary": "La presse londonienne juge probable que les Boers se retirent dans le district du Natal pour se ravitailler et entraver la progression de l'armée anglaise en coupant ses communications.",
    "paragraphs": [
      "Londres, 28 novembre. La Westminster Gazette considère comme fort probable que les Boers, dont on a annoncé la retraite sur Colenso, se soient retirés dans le district du Natal, dont les habitants ont la réputation de leur être très favorables, pour se réapprovisionner, revenir couper de nouveau les communications et retarder la marche de l'armée anglaise."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Le plan des Boërs",
    "summary": "À Pretoria, les présidents Krüger et Steyn ont ordonné aux généraux Joubert et Kronje de privilégier des offensives décisives plutôt que de s'épuiser dans des sièges isolés.",
    "paragraphs": [
      "Berlin, 28 novembre. La Gazette allemande apprend de Pretoria que, le 27 novembre, les présidents Krüger et Steyn ont avisé les généraux Joubert et Kronje de ne pas gaspiller leurs forces dans des sièges isolés, mais de frapper des coups énergiques.",
      "Le général Joubert a concentré trois corps d'armée afin de couper la retraite aux Anglais. Le général Kronje opère de la même façon devant Kimberley sur la Modder et sur les derrières de lord Methuen."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Nouvelles infamies britanniques",
    "summary": "La légation du Transvaal dénonce les exactions commises sur les blessés, les injures faites aux prisonniers boers et l'usage détourné du drapeau blanc par les forces anglaises.",
    "paragraphs": [
      "Bruxelles, 28 novembre. La légation du Transvaal communique un long télégramme contenant des détails rétrospectifs sur la bataille d'Elandslaagte et sur l'évacuation de Dundee. Les Boers ont capturé trois cents Anglais.",
      "Le docteur Lingbee a télégraphié de Newcastle le 6 octobre à Pretoria que les Anglais ont achevé les blessés après les avoir désarmés. Le docteur affirme qu'il possède à ce sujet des déclarations faites sous serment.",
      "La légation communique une autre dépêche de Pretoria disant que les prisonniers anglais ont été reçus avec calme, tandis que les prisonniers boers ont été injuriés à Ladysmith. Le colonel Baden-Powell aurait hissé le drapeau blanc sur la ville de Mafeking où se trouvaient des munitions et l'artillerie avec lesquelles on a tiré sur les Boers."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "La guerre d'embuscades",
    "summary": "Un expert militaire prussien analyse la situation stratégique : les Boers devraient éviter les batailles rangées pour privilégier une guerre d'usure par de multiples escarmouches.",
    "paragraphs": [
      "Londres, 28 novembre. Le critique militaire de la Gazette de Francfort, qui signe « un vieil officier prussien », écrit de Londres que très probablement les Boers devront abandonner le siège de Kimberley, mais que Mafeking semble devoir tomber entre leurs mains.",
      "Il émet l'opinion que les Boers ne peuvent compter sur des succès qu'en épuisant l'ennemi par une multitude de petits combats et qu'ils feront bien d'éviter toute grande bataille, sauf conditions spéciales. Les Boers sont tout à fait désignés pour ce genre de guerre."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Départ des joyeux",
    "summary": "Le contingent affecté aux bataillons d'Afrique a quitté Paris hier matin, le rassemblement ayant été fixé, selon les ordres de l'autorité militaire, au fort de Charenton.",
    "paragraphs": [
      "Le départ du contingent affecté aux bataillons d'Afrique s'est effectué hier matin à dix heures. L'autorité militaire avait fixé le lieu de rendez-vous au fort de Charenton, et l'embarquement s'est fait à la gare du fort."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Mort du général Poizat",
    "summary": "Le général Poizat, ancien commandant de la division d'Alger, est décédé subitement, selon les dernières dépêches télégraphiques reçues ce jour.",
    "paragraphs": [
      "On télégraphie d'Alger : le général Poizat, qui fut longtemps à la tête de la division d'Alger, vient de mourir subitement."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Les concours de tactique",
    "summary": "La Revue du Cercle militaire lance de nouveaux concours de tactique pour les jeunes officiers, axés sur la flanc-garde d'un corps d'armée en mouvement vers Delle.",
    "paragraphs": [
      "Sous l'intelligente impulsion de son nouveau directeur, la Revue du Cercle militaire a entrepris des concours de tactique qui ont déjà donné des résultats fructueux pour aider les jeunes officiers.",
      "Le prochain concours est consacré au rôle de la flanc-garde d'un corps d'armée marchant vers Delle par Vesoul et Montbéliard."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "L'École Supérieure de la Marine",
    "summary": "Le ministre de la Marine réforme l'École supérieure : suppression de la division navale d'été, durée d'un an, embarquements et admission sur demande sans examen préalable.",
    "paragraphs": [
      "Le ministre de la Marine a fait connaître hier son intention de réorganiser l'École supérieure de la Marine. La réforme consiste dans la suppression de la division navale qui était armée pendant les mois d'été.",
      "Le siège de la nouvelle École sera fixé, la durée des cours sera d'une année et les élèves seront embarqués pendant deux périodes de grandes manœuvres dans l'escadre de la Méditerranée et dans l'escadre du Nord. Une innovation consistera dans l'admission sans examen préalable, sur simple demande."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Retour de l'Indus",
    "summary": "Le paquebot Indus est arrivé à Marseille avec à son bord les personnalités ayant assisté à l'inauguration de la statue de Ferdinand de Lesseps à Suez.",
    "paragraphs": [
      "Le paquebot Indus, des Messageries maritimes, est arrivé ce matin à Marseille, ayant à bord les personnages officiels qui ont assisté à l'inauguration, à Suez, de la statue de Ferdinand de Lesseps."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Politique",
    "title": "Chambre des Députés - Séance du 28 novembre",
    "summary": "La Chambre vote le budget des Affaires étrangères, délibère sur l'exploitation de l'enfance et annonce le décès du député Putreix.",
    "paragraphs": [
      "La Chambre a terminé la discussion du budget des Affaires étrangères, portant sur les subventions aux établissements français en Orient et en Extrême-Orient.",
      "M. Delcassé a demandé le vote intégral du crédit de 800 000 francs pour maintenir l'influence française. La Chambre a suivi le ministre.",
      "La discussion du budget du ministère de l'Intérieur a été abordée. M. Fournière a développé une interpellation sur les faits d'exploitation de l'enfance par certaines maisons religieuses, un discours qui a profondément marqué la Chambre.",
      "Le président annonce la mort de M. Putreix, député de l'Aube."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Justice",
    "title": "La Haute Cour - Seizième audience",
    "summary": "Sous la présidence de M. Paul Deschanel, la Haute Cour poursuit ses auditions. M. de Peretti témoigne sur les ligueurs, tandis que M. Guérin conteste vivement les accusations portées à son encontre.",
    "paragraphs": [
      "L'audience est ouverte sous la présidence de M. Paul Deschanel. M. Déroulède, souffrant, est absent.",
      "M. de Peretti, publiciste à Alger, dépose concernant les ligueurs antisémites et M. Guérin. M. Guérin conteste vivement ces déclarations, qualifiant le témoin d'indicateur.",
      "Le cocher Bouchard nie avoir transporté des armes dans sa voiture. L'inspecteur de police Lecointe dépose sur le siège du fort Chabrol. M. Guérin explique qu'il avait enveloppé son arme dans une serviette pour étouffer le bruit lors des détonations."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Économie",
    "title": "Le prix du pain",
    "summary": "Suite à la baisse du cours du blé, l'analyse du marché parisien confirme que le prix du pain se maintient à un niveau conforme aux prévisions, écartant toute inquiétude immédiate.",
    "paragraphs": [
      "À la suite de la baisse du prix du blé, nous faisons le point sur le coût du pain à Paris. Le calcul officiel montre que le tarif du pain se rapproche honorablement des données théoriques et que la situation n'est pas alarmante."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "International",
    "title": "Dépêches de l'Étranger",
    "summary": "Revue des nouvelles internationales : de l'incendie en Belgique aux accords ferroviaires entre la Russie et la Perse, en passant par les tensions politiques au Venezuela et la situation sanitaire à Astrakan.",
    "paragraphs": [
      "Un grand incendie en Belgique a causé des dégâts considérables.",
      "À Bruxelles, un terrassier a frappé de sept coups de couteau un ouvrier dans un estaminet.",
      "À Anvers, un meurtre a eu lieu : le patron d'un estaminet, nommé Frannsen, a été tué par un individu après une altercation.",
      "Au sujet de lord Salisbury, les journaux confirment que l'état de sa santé suit son cours normal.",
      "Concernant la peste, on signale la persistance de l'épidémie dans le gouvernement d'Astrakan.",
      "Russie et Perse : un accord a été signé pour la prolongation, en faveur de la Russie, du monopole de construction de chemins de fer en Perse.",
      "Au Venezuela : le général Castro est parti en campagne pour attaquer le général Hernandez."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Politique étrangère",
    "title": "Situation dans la province de Pipur",
    "summary": "Malgré les rumeurs de soulèvements dans la province de Pipur, les observateurs estiment que le calme devrait prévaloir jusqu'au Congrès, sous réserve que des dispositions nécessaires soient prises.",
    "paragraphs": [
      "Suite à la nouvelle d'un soulèvement des clans dans la province de Pipur, l'Evening Journal suggère qu'il n'est guère probable que des troubles surviennent avant la réunion du Congrès. Toutefois, on estime que si des mesures préventives ne sont pas prises, des désordres pourraient éclater."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Arts",
    "title": "Le Monument d'Alphand",
    "summary": "Le sculpteur Dalou rompt avec l'allégorie classique pour le monument d'Alphand. En représentant l'ingénieur dans son costume de travail, l'artiste impose un réalisme moderne qui marque l'histoire de la statuaire.",
    "paragraphs": [
      "Une très curieuse antithèse s'affirme dans les œuvres du statuaire Dalou. Si son Triomphe de la République est aussi le triomphe de l'allégorie, le monument d'Alphand, érigé avenue du Bois, relève d'une inspiration bien différente. L'artiste a voulu se détourner de la sculpture classique pour embrasser l'art moderne.",
      "Au lieu d'entourer l'ancien directeur des travaux de Paris d'attributs symboliques conventionnels, Dalou a préféré représenter Alphand en costume de travail, donnant ses instructions aux ingénieurs et artistes.",
      "L'œuvre est une innovation par son réalisme. Alphand est représenté dans sa pose habituelle, visitant les jardins qu'il a créés, la main sur un chapeau de feutre mou. Bien que certains critiques y voient un avilissement de l'art, ce choix de détails réels marque une rupture avec les traditions allégoriques.",
      "Autour de la statue, le sculpteur a représenté des silhouettes d'artistes contemporains (architecte, ingénieur, peintre) et des bas-reliefs montrant des ouvriers au travail. Ce monument, par son modernisme et son souci de vérité, ouvre des chemins nouveaux dans l'histoire de l'art."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident domestique à Clichy",
    "summary": "Un drame déchirant a frappé la commune de Clichy : une fillette de cinq ans est décédée après avoir été gravement brûlée par un poêle alors qu'elle était restée sans surveillance.",
    "paragraphs": [
      "Un affreux accident vient de se produire à Clichy, rue des Cailloux. Une fillette de cinq ans, laissée seule quelques instants pendant que sa mère était partie faire des courses, a trouvé la mort après s'être approchée trop près d'un poêle allumé.",
      "Malgré la célérité des secours, l'enfant, très gravement brûlée, a succombé à ses blessures durant son transport à l'hôpital."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Informations diverses",
    "summary": "Au programme des échos de ce jour : travaux d'embellissement sur le pont des Arts, une heureuse aubaine pour un titulaire de la société « La Cité » et précisions calendaires pour l'année 1900.",
    "paragraphs": [
      "Le pont des Arts va être repeint en vert, moyennant une dépense de 3 000 francs.",
      "La société d'épargne « La Cité » a vu l'un de ses titres gagner 10 000 francs lors du dernier tirage des obligations du Crédit foncier.",
      "Une note administrative rappelle que l'année 1900 ne sera pas bissextile, conformément aux règles de la réforme du calendrier grégorien."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Transport",
    "title": "Le record de vitesse des trains français",
    "summary": "Les compagnies de chemins de fer françaises, notamment Orléans et Midi, s'imposent face à la concurrence internationale avec une vitesse commerciale record de 86 km/h sur la ligne du Sud-Express.",
    "paragraphs": [
      "Les compagnies françaises, et tout particulièrement celles d'Orléans et du Midi, détiennent désormais le record de vitesse commerciale face aux États-Unis et à l'Angleterre, avec une moyenne remarquable de 86 kilomètres à l'heure sur le parcours du Sud-Express."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un gardien de la paix assassiné aux Lilas",
    "summary": "Le gardien de la paix François Fourmie a été mortellement poignardé aux Lilas en tentant d'appréhender des faussaires. Les malfaiteurs ont été arrêtés après une lutte acharnée.",
    "paragraphs": [
      "François Fourmie, gardien de la paix, a été mortellement frappé de deux coups de couteau hier soir, aux Lilas, alors qu'il procédait à l'arrestation de deux individus suspectés de trafic de fausse monnaie.",
      "Le meurtrier et son complice ont été capturés après une lutte acharnée. L'état de l'agent de police, grièvement blessé, n'a malheureusement inspiré aucun espoir aux médecins."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie avenue de Wagram",
    "summary": "La justice enquête sur un incendie suspect avenue de Wagram : des tapis imbibés d'alcool ont été saisis. La thèse de l'accident causé par le chat de Mme Boucher est vivement contestée par les autorités.",
    "paragraphs": [
      "La justice a procédé à des constatations minutieuses dans l'appartement de Mme Boucher, dite Lachenaye, à la suite d'un incendie suspect. Des morceaux de tapis, manifestement imbibés d'alcool, ont été saisis sur les lieux.",
      "Si la propriétaire invoque un accident causé par son chat, de lourds doutes subsistent quant à cette version des faits, notamment au regard de la disparition inexpliquée d'une importante quantité d'argenterie."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un chien dressé pour le vol",
    "summary": "Trois individus, les époux Nirgouin et Alfred Haugère, ont été arrêtés pour avoir dressé un épagneul à faire tomber les passants place de la Nation afin de les dévaliser. Le portefeuille d'un rentier a été retrouvé.",
    "paragraphs": [
      "Trois individus, les époux Nirgouin et Alfred Haugère, ont été arrêtés pour avoir dressé un épagneul à faire tomber les passants place de la Nation afin de les dévaliser. Le portefeuille d'un rentier a été retrouvé sur les malfaiteurs lors de leur interpellation."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Révolte dans le milieu des rôdeurs",
    "summary": "Adolphe Finnel, dit « Bourre-ma-Pipe », chef de rôdeurs sévissant aux fortifications, a été violemment agressé par ses subordonnés refusant de payer leur dîme. Il a été hospitalisé à Tenon.",
    "paragraphs": [
      "Adolphe Finnel, surnommé « Bourre-ma-Pipe », un chef de rôdeurs sévissant aux fortifications, a été violemment agressé par ses propres subordonnés qui ne supportaient plus de payer leur dîme habituelle.",
      "Grièvement blessé lors de l'altercation, il a été transporté d'urgence à l'hôpital Tenon."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Feuilleton",
    "title": "Le Devoir d'un fils (Roman)",
    "summary": "Dans ce nouvel épisode du roman Le Fief Bernard, le magistrat M. de Virville interroge sa fille Adrienne sur ses épreuves conjugales avant une entrevue avec Jacques Châtel.",
    "paragraphs": [
      "Extrait du roman Le Fief Bernard, VI (suite) : Le magistrat M. de Virville questionne sa fille Adrienne sur son malheur conjugal, tandis qu'une rencontre est prévue avec Jacques Châtel."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Météo et bulletin",
    "title": "Bulletin météorologique du 28 novembre",
    "summary": "Le temps reste brumeux et froid sur la France. Une zone de haute pression domine, tandis que le thermomètre affiche des températures négatives en altitude. La sécheresse se poursuit.",
    "paragraphs": [
      "Le temps a été brumeux et frais, hier, pendant toute la journée.",
      "Une aire supérieure de 775 millimètres persiste sur la France et la Suisse. La dépression du nord de la Scandinavie est descendue sur la Russie en se comblant.",
      "Des neiges et des pluies sont signalées dans le nord, le centre et l'est du continent ; en France, la sécheresse continue.",
      "La température est en baisse vers notre littoral de l'Océan. Hier matin, le thermomètre marquait 2° à Clermont, 2° à Biarritz, 1° à Moscou, 17° à Malte et à Monaco.",
      "On notait -4° à l'Aigoual, -4° au Puy-de-Dôme, -4° au Pic-du-Midi. En France, un temps brumeux et froid est probable.",
      "Situation particulière aux ports français : la mer est généralement belle sur nos côtes."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Levallois-Perret : Terrible accident de travail",
    "summary": "Le charretier Jean Malcoiffe a été mortellement blessé à Levallois-Perret après que ses chevaux, effrayés par le sifflet d'une locomotive, l'aient écrasé contre des wagons.",
    "paragraphs": [
      "Un charretier, Jean Malcoiffe, âgé de trente ans, demeurant rue de Paris, s'était rendu, hier après-midi, avec son camion attelé de deux chevaux, sur la voie du chemin de fer, quand soudain l'attelage, effrayé par le sifflet d'une locomotive, se porta vivement en avant.",
      "Ne pouvant maîtriser ses chevaux, le malheureux conducteur fut pris entre le moyeu d'une roue et des wagons de marchandises et eut la poitrine complètement écrasée ; il a été en outre horriblement blessé aux épaules et à la tête.",
      "L'infortuné a été transporté mourant à l'hôpital Beaujon."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Saint-Ouen : Découverte macabre dans la Seine",
    "summary": "Hier matin, deux mariniers ont découvert dans la Seine, près du pont de Saint-Ouen, le corps d'un nouveau-né. L'enfant, une fillette, portait les marques évidentes d'une mort violente par strangulation.",
    "paragraphs": [
      "Deux mariniers qui, hier matin, vers sept heures, travaillaient sur les bords de la Seine, non loin du pont de Saint-Ouen, ont retiré des eaux un paquet assez volumineux qui surnageait.",
      "Enveloppé dans une quantité de journaux, ils ont trouvé le corps d'un enfant nouveau-né du sexe féminin.",
      "D'après un médecin chargé par M. Oraatti, commissaire de police, de procéder aux constatations médico-légales, la fillette aurait vécu cinq à six jours avant d'être étranglée au moyen d'une ficelle encore fortement serrée autour de son cou.",
      "Le petit cadavre a été transporté à la Morgue."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Saint-Denis : Tentative de vol",
    "summary": "Agresse par deux individus près de la zone militaire, M. Gabriel Jandargue a réussi à mettre ses assaillants en fuite grâce à sa robustesse et à l'usage défensif de sa canne.",
    "paragraphs": [
      "Un ouvrier tourneur sur métaux, M. Gabriel Jandargue, âgé de vingt-six ans, demeurant rue Heurtault, à Aubervilliers, s'en revenait chez lui avant-hier soir, vers onze heures, lorsqu'à la hauteur de la zone militaire, il fut assailli par deux individus qui essayèrent de le dévaliser.",
      "Mais, doué d'une force peu commune et armé d'une solide canne, l'ouvrier opposa à ses agresseurs une si vive résistance qu'ils prirent bientôt le parti de s'enfuir.",
      "Ces malfaiteurs sont activement recherchés, car M. Jandargue a pu donner le signalement très exact de l'un d'eux."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Bezons : Agressions à la rampe du Pont",
    "summary": "Une veuve sexagénaire, Mme Saudres, a été sauvagement agressée par un individu vêtu en maçon alors qu'elle conversait devant son domicile. L'agresseur, auteur d'un coup violent au visage, est en fuite.",
    "paragraphs": [
      "Avant-hier soir, vers cinq heures, une rentière, Mme veuve Saudres, âgée de soixante ans, demeurant 5, rampe du Pont, causait devant sa porte avec deux voisines, lorsqu'un individu, habillé comme un ouvrier maçon, passa brusquement au milieu du groupe et porta un coup violent à Mme Saudres qui, atteinte en plein visage, chancela.",
      "L'auteur de cette sauvage agression, qui a pris la fuite, est activement recherché."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Bezons : Pillage de propriété",
    "summary": "Une série de cambriolages a été signalée à Bezons : après avoir pillé la propriété de M. Coulbier et volé ses pigeons voyageurs, des malfaiteurs ont dérobé divers outils sur un chantier voisin.",
    "paragraphs": [
      "L'avant-dernière nuit, des malfaiteurs se sont introduits dans la propriété de M. Coulbier, rue Villa-Gillet, et se sont emparés de tout ce qu'ils ont pu emporter ; ils ont également pillé le poulailler et enlevé des pigeons voyageurs d'une grande valeur.",
      "Ne se contentant pas de ce premier exploit, les voleurs se sont dirigés ensuite vers un chantier de construction, route de Maisons, où ils ont pris une certaine quantité de matériaux et de nombreux outils.",
      "Une enquête a été ouverte par la gendarmerie d'Argenteuil."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Bagnolet : Drame familial",
    "summary": "Suite au récent assassinat de M. Théry, sa veuve et ses cinq enfants se retrouvent dans une détresse extrême. Le maire de Bagnolet sollicite la générosité des citoyens pour soutenir cette famille éprouvée.",
    "paragraphs": [
      "Un drame terrible vient de réduire à la misère la plus complète une famille de Bagnolet. Un vaurien a assassiné, il y a quelques jours, M. Théry, qui laisse une veuve et cinq enfants sans ressources.",
      "Le maire de Bagnolet nous prie de recommander cette infortune. Il recevra et transmettra les sommes qu'on voudra bien lui adresser pour la veuve Théry."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Montreuil-sous-Bois : Appel du commissariat",
    "summary": "Le commissariat de Montreuil-sous-Bois invite les victimes de vols de l'année écoulée à identifier les objets saisis lors du démantèlement de la bande de cambrioleurs dirigée par Courtot, dit le Roi du coup de tête.",
    "paragraphs": [
      "Les personnes habitant la région de Montreuil, Vincennes, Charenton et Joinville-le-Pont, et qui, depuis un an, ont été victimes de vols, sont instamment priées de se présenter au commissariat de Montreuil-sous-Bois où sont exposés les nombreux objets retrouvés lors des perquisitions opérées chez les différents receleurs de la bande de cambrioleurs commandée par Courtot, dit « le Roi du coup de tête »."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Ivry : Un chien enragé abattu",
    "summary": "Un chien atteint d'hydrophobie a semé la terreur dans les rues d'Ivry. Il a été abattu par l'agent Barbu juste avant de pouvoir s'attaquer aux enfants sortant de l'école.",
    "paragraphs": [
      "Un chien de forte taille, atteint d'hydrophobie, parcourait hier après-midi les rues de la ville, mordant sur son passage les autres chiens qu'il rencontrait et se jetant sur les personnes qui essayaient de le retenir.",
      "L'agent Barbu, s'étant mis à sa poursuite, parvint à tuer le dangereux animal avant qu'il ne se soit jeté sur les enfants sortant à ce moment des écoles. Les mesures d'usage ont été prises aussitôt par les autorités locales."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Social",
    "title": "Les grèves des ouvriers maréchaux",
    "summary": "La grève des maréchaux et teneurs de pieds se poursuit. Tandis que des militaires assurent les services publics, le député Renou a encouragé les grévistes à maintenir leurs revendications salariales.",
    "paragraphs": [
      "Jusqu'à présent, les Parisiens n'ont pas eu à souffrir de la grève des ouvriers maréchaux et teneurs de pieds.",
      "Sur la demande de M. Lépine, préfet de police, les grévistes avaient été remplacés par des maréchaux militaires pour assurer les services publics : ambulances municipales, pompiers, pompes funèbres, voirie, etc.",
      "Quelques conflits sans grande importance sont signalés ici et là entre grévistes et patrons. Ces derniers ont fait des démarches auprès du syndicat, qui exige des augmentations de salaire.",
      "Dans l'assemblée générale tenue à la Bourse du Travail, M. Renou, député, a encouragé les ouvriers à persévérer."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Social",
    "title": "Grèves à Roubaix-Tourcoing",
    "summary": "Le mouvement social s'étend dans les usines textiles du Nord. M. Eugène Motte a adressé une lettre proposant l'arbitrage des autorités pour mettre un terme aux conflits dans les établissements touchés.",
    "paragraphs": [
      "Le mouvement gréviste tend à s'accentuer à Tourcoing. Aux trois établissements encore en grève viennent de s'ajouter trois nouveaux arrêts de travail : peignage Albert Mallart, filature Joveneau et triage Abadie-Aguire.",
      "À Roubaix, restent en grève les ouvriers de l'usine Motte frères, outre la nouvelle grève des trieurs du peignage Eugène Motte.",
      "M. Eugène Motte adresse aux journaux une lettre proposant l'arbitrage du préfet du Nord ou de M. Millerand, ministre du Commerce."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Social",
    "title": "Grève des dockers au Havre",
    "summary": "Environ un millier de dockers havrais ont cessé le travail pour exiger une revalorisation salariale. Malgré l'échec des tentatives de conciliation, la cité portuaire reste calme.",
    "paragraphs": [
      "Les ouvriers des docks et entrepôts du Havre se sont mis en grève au nombre d'un millier environ.",
      "Les grévistes réclament une augmentation de salaire de 15 francs par mois pour les ouvriers classés ainsi que la fixation du nombre des ouvriers auxiliaires.",
      "La conciliation devant les juges de paix n'a pas abouti et les ouvriers ont cessé le travail hier matin. Ils restent, pour l'heure, très calmes."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Social",
    "title": "Incident à Montreuil-sous-Bois : Atelier pris d'assaut",
    "summary": "Une bande d'une cinquantaine d'individus, se faisant passer pour des grévistes, a violemment pris à partie l'atelier d'un maître maréchal à Montreuil-sous-Bois avant de prendre la fuite à l'arrivée des forces de l'ordre.",
    "paragraphs": [
      "Une bande de cinquante individus, se disant grévistes, s'est rendue chez M. Renaud, maître maréchal, pour l'obliger à cesser le travail.",
      "Devant son refus, les assaillants ont bombardé l'atelier de pierres, brisant toutes les vitres, puis ont fait irruption dans la forge, emmenant de force un ouvrier nommé Lucien malgré sa vive résistance.",
      "Les agents arrivés sur les lieux n'ont trouvé que la bande en fuite vers Bagnolet. On affirme qu'il s'agit de faux ouvriers maréchaux venus troubler l'ordre public."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Social",
    "title": "Congrès des manufactures d'armes",
    "summary": "Le personnel civil des établissements militaires poursuit ses revendications et a sollicité l'attention de la commission parlementaire à la Chambre des députés au sujet des pensions de retraite.",
    "paragraphs": [
      "Le personnel civil des établissements militaires a poursuivi la discussion de son programme de revendications sociales.",
      "Les congressistes se sont rendus en délégation à la Chambre des députés où ils ont été reçus par la commission parlementaire afin de soumettre leur rapport détaillé concernant la réforme des pensions de retraite."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Histoire et Patriotisme",
    "title": "Un monument commémoratif pour les défenseurs de Varize et Civry",
    "summary": "Un comité local présidé par M. Barrier projette d'élever un monument à la mémoire des habitants de Varize et Civry, sacrifiés en octobre 1870 pour la défense du sol national contre les troupes ennemies.",
    "paragraphs": [
      "Les 14 et 15 octobre 1870, les gardes nationaux de Varize et de Civry firent une résistance opiniâtre contre les éclaireurs ennemis. En représailles, les Allemands bombardèrent et incendièrent les villages, massacrant une partie de la population.",
      "Un comité, présidé par M. Barrier, maire de Varize, a formé le projet d'ériger un monument pour perpétuer la mémoire de ces concitoyens qui ont fait le sacrifice de leur vie pour la défense du sol de la patrie."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Sports",
    "title": "Courses à Saint-Ouen",
    "summary": "Malgré un brouillard intense entravant la visibilité sur l'hippodrome de Saint-Ouen, les épreuves équestres se sont déroulées, consacrant plusieurs lauréats lors des différents prix organisés.",
    "paragraphs": [
      "Le brouillard s'est abattu sur le champ de courses de Saint-Ouen, rendant la visibilité extrêmement difficile pour les spectateurs comme pour les jockeys.",
      "Résultats des prix : Prix de la Tarentaise (Areas), Prix du Mont-Cenis (Bueil), Prix de la Maubienne (Copernic), Prix du Saint-Bernard (Blidah), Prix des Alpes (Couesdon)."
    ]
  },
  {
    "id": 50,
    "page": 4,
    "category": "Chronique des théâtres",
    "title": "Actualités lyriques et théâtrales",
    "summary": "Les scènes parisiennes annoncent leur programme : Iphigénie en Tauride à la Renaissance, la fin de La Dame de Monsoreau à la Porte-Saint-Martin et un soutien officiel pour la matinée bénéfice à l'Opéra-Comique.",
    "paragraphs": [
      "Le théâtre lyrique de la Renaissance a fixé au jeudi 7 décembre la première représentation d'Iphigénie en Tauride.",
      "La direction du théâtre de la Porte-Saint-Martin annonce les six dernières représentations de la Dame de Monsoreau.",
      "Le Président de la République et plusieurs personnalités ont apporté leur soutien à la matinée bénéfice organisée en faveur de Léon Strintz à l'Opéra-Comique."
    ]
  }
];
