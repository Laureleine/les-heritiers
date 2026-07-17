// Date: 1900-10-01
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-10-01 (Version Restaurée, 35 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "Les Coopératives de Production",
    "summary": "À l'approche de la clôture de l'Exposition universelle, examen du rôle social et de l'essor législatif des coopératives de production, piliers d'éducation ouvrière et de discipline collective.",
    "paragraphs": [
      "Déjà l'heure approche où l'Exposition fermera ses portes, où ses vitrines se dégarniront, où ses galeries se videront et où les camions des chemins de fer remporteront vers les gares les lourdes caisses qu'ils amenaient naguère aux Invalides et au Champ-de-Mars.",
      "Chacun, plus ou moins vivement, ressent la tristesse de ce départ prochain. Tout le monde a conscience d'avoir insuffisamment profité de cette colossale leçon de choses qui éclaire tant de questions et rassemble des documents qu'il sera demain impossible de retrouver réunis.",
      "La coopérative de production est l'un des deux aspects sous lesquels se présente la coopération, et c'est assurément le plus curieux. Elle n'a pas seulement une valeur économique : elle a une portée sociale et peut exercer sur la situation des classes ouvrières une influence considérable.",
      "L'histoire des coopératives en France remonte loin, depuis la tentative de Buchez chez les ouvriers bijoutiers en 1834 jusqu'aux mesures prises en 1848 par le gouvernement. Si la plupart ont échoué, quelques-unes ont survécu, comme celle des ouvriers en limes.",
      "Les vingt dernières années ont marqué un progrès net, notamment grâce à la loi de 1884 sur les syndicats et au décret de 1888, proposé par M. Floquet, qui autorise les sociétés ouvrières à traiter de gré à gré avec les administrations publiques pour les marchés de l'État.",
      "Le rôle de l'État a été déterminant. La Sorbonne, l'Opéra-Comique et bien d'autres monuments ont été construits par ces sociétés. Toutefois, il reste beaucoup à faire pour assurer leur pérennité, notamment en matière de crédit et de souplesse de gestion.",
      "Le développement de ces sociétés sera chose heureuse à tous égards. Elles sont pour les ouvriers, non seulement une source de profits, mais un instrument d'éducation leur inculquant des qualités d'ordre et de discipline qui servent la paix sociale."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Faute de Jugement",
    "summary": "Une battue nocturne dans l'enceinte de l'hôpital suscite l'inquiétude. Entre doutes et ombres menaçantes, Sœur Thérésa et Sœur Honorine découvrent la jeune infirmière dans une situation troublante.",
    "paragraphs": [
      "Sœur Thérésa et Sœur Honorine, inquiètes de la disparition de la jeune infirmière, décident de partir à sa recherche dans la nuit. En dehors de l'hôpital, elles croisent l'infirmier Philippe, qui leur signale avoir entendu une conversation mystérieuse sur la terrasse.",
      "Les deux religieuses, emplies de doute et de crainte, se dirigent vers la plateforme surplombant la ville. En chemin, elles croisent le lieutenant, dont l'allure étrange et les menaces murmurées glacent leur sang.",
      "Arrivées à destination, elles découvrent une forme sombre au sol : c'était la jeune infirmière. Après un moment d'angoisse où elles la crurent morte, celle-ci reprend ses esprits, laissant les religieuses en proie à de cruels soupçons sur ses actions nocturnes."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'accident du torpilleur La Trombe",
    "summary": "Le torpilleur La Trombe a heurté les roches de Port-Melen à Lorient. Malgré le sauvetage du navire, le choc brutal a broyé l'avant du bâtiment et causé la mort tragique d'un ouvrier.",
    "paragraphs": [
      "Lorient, 30 septembre. Le torpilleur La Trombe s'est écrasé contre la roche de Port-Melen alors qu'il filait à 25 nœuds. Malgré la violence du choc, aucune avarie grave n'a touché la machine, mais l'avant du bâtiment a été broyé.",
      "Le poste d'équipage situé à l'avant a été écrasé, causant la mort de l'ouvrier Lefait. Les autres membres de l'équipage n'ont été que légèrement blessés. Le navire a pu être sauvé par des remorqueurs du port."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Chronique Politique",
    "title": "L'affaire Dreyfus",
    "summary": "À la clôture de l'Exposition, les rumeurs sur une reprise de l'affaire Dreyfus persistent. Pour l'auteur, la sentence de Rennes scelle la vérité légale, rendant toute nouvelle agitation inutile.",
    "paragraphs": [
      "On parle de reprendre, à la fin de l'Exposition, l'affaire lamentable qui a fait tant de mal à la France. Nous considérons le procès Dreyfus comme terminé irrévocablement.",
      "Actuellement, ceux-là seuls peuvent désirer la reprise de l'affaire qui y chercheraient des éléments d'agitation. L'arrêt du conseil de guerre de Rennes constitue la vérité légale, tandis que l'avenir, s'il le peut, se chargera de la vérité historique."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Assassinat rue Fontaine",
    "summary": "Meurtre sauvage rue Fontaine : une femme de 45 ans, Augustine Durand, a été assassinée chez elle. L'enquête de M. Cochefert privilégie la thèse d'un vol prémédité par un criminel connaissant ses habitudes.",
    "paragraphs": [
      "Un assassinat a été commis avant-hier soir, 43, rue Fontaine. La victime, Augustine Durand, une fille galante âgée de 45 ans, a été retrouvée morte dans son appartement, portant des traces de coups portés avec un instrument contondant, probablement un marteau.",
      "Mme Delage, la concierge, a découvert le crime après plusieurs tentatives infructueuses pour joindre sa locataire. L'assassin, qui connaissait vraisemblablement les habitudes de la victime et la possession récente de fonds, a fouillé l'appartement avant de s'enfuir.",
      "L'enquête, menée par M. Cochefert, chef de la sûreté, suggère que la victime a été surprise pendant qu'elle travaillait. Aucun signe de lutte n'a été constaté. Le crime reste, pour l'heure, impuni."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une usine incendiée",
    "summary": "Un violent incendie a ravagé hier matin la fabrique de papiers peints de M. Petitjean, située rue Fabre-d'Églantine. Aucun blessé n'est à déplorer, mais les dégâts matériels sont considérables.",
    "paragraphs": [
      "Un violent incendie a détruit une grande partie de la fabrique de papiers peints de M. Petitjean, située rue Fabre-d'Églantine, dans le douzième arrondissement. Le feu s'est déclaré hier matin, aux premières lueurs du jour.",
      "Les pompiers ont lutté avec acharnement pendant plusieurs heures pour maîtriser le sinistre. Si aucun blessé n'est à déplorer, les dégâts matériels sont considérables. Une enquête est ouverte pour déterminer les causes de cet accident."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Politique Internationale",
    "title": "La situation en Chine",
    "summary": "La situation en Chine demeure confuse. Les puissances étrangères, parmi lesquelles l'Allemagne, la Russie et les États-Unis, discutent des modalités de règlement après les troubles provoqués par les Boxers.",
    "paragraphs": [
      "La situation créée par les affaires de Chine est assez confuse, marquée par des télégrammes contradictoires concernant les mesures prises contre le prince Tuan et les meneurs des Boxers.",
      "Les puissances internationales, notamment l'Allemagne, la Russie et les États-Unis, discutent des conditions de règlement. Tandis que l'Allemagne semble disposée à négocier sans exiger préalablement le châtiment des coupables, le gouvernement de Washington maintient une ligne ferme en accord avec ses partenaires."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Chine",
    "title": "Sanctions contre les hauts dignitaires chinois",
    "summary": "De sévères sanctions, incluant des déchéances de rang et des renvois devant la justice, ont été prononcées contre plusieurs hauts dignitaires chinois impliqués dans les récents événements.",
    "paragraphs": [
      "Les dignitaires visés sont déclarés déchus de leur rang et privés de leur emploi.",
      "Le prince de deuxième rang sera renvoyé devant la Cour supérieure de justice.",
      "En outre, le duc de deuxième rang et le vice-président de la Censure sont punis.",
      "La Censure et le ministre de la Justice proposeront d'infliger une punition au second secrétaire du président du ministère de la Justice."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Chine",
    "title": "Diplomatie et mouvements en Chine",
    "summary": "Les puissances étrangères réclament le retour de la Cour impériale à Pékin. Le commissaire américain multiplie les démarches diplomatiques auprès des autorités locales pour favoriser ce retour.",
    "paragraphs": [
      "Un télégramme de Pékin indique que les ministres étrangers ont reçu les lettres suggérant le retour de la Cour à Pékin et qu'un mémoire à ce sujet a été envoyé à l'impératrice douairière.",
      "Le commissaire américain part pour Tien-Tsin et Nankin, insistant pour que les vice-rois demandent le retour de la Cour."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Chine",
    "title": "La position de l'Allemagne",
    "summary": "L'Allemagne assouplit ses exigences diplomatiques, acceptant de négocier sans faire du châtiment immédiat des coupables une condition préalable à l'ouverture des pourparlers officiels.",
    "paragraphs": [
      "L'Allemagne est prête à renoncer à la condition selon laquelle le châtiment des coupables devait précéder l'ouverture des négociations. Cette position répond aux besoins diplomatiques de l'Allemagne, mais Berlin ne songe pas à l'imposer aux autres puissances."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Chine",
    "title": "L'Armée Expéditionnaire",
    "summary": "Le maréchal de Waldersee et son état-major ont été accueillis à Tien-Tsin. Il est convenu qu'il occupera un palais impérial, malgré les réserves formulées par les autorités américaines sur ces dispositions.",
    "paragraphs": [
      "Le comte de Waldersee et son état-major sont arrivés à Tien-Tsin, où ils ont été reçus avec les honneurs par une garde d'honneur alliée.",
      "Il a été virtuellement arrêté que le maréchal de Waldersee occuperait l'un des palais impériaux de la cité défendue. Les Américains, bien que désapprouvant ces dispositions, ne manifesteront aucune protestation officielle."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Assassinat de Belges en Chine",
    "summary": "Le gouvernement a reçu la confirmation officielle de l'assassinat, dans une région indéterminée de la Chine, du lieutenant-colonel belge Five et de deux ingénieurs de sa nationalité.",
    "paragraphs": [
      "Le gouvernement vient de recevoir la confirmation formelle de l'assassinat du lieutenant-colonel belge Five, ainsi que de deux ingénieurs belges, dans une contrée de la Chine encore indéterminée."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Li-Hung-Chang et la presse allemande",
    "summary": "La Gazette de Cologne fustige les récentes déclarations de Li-Hung-Chang, qualifiant ses manœuvres diplomatiques visant à diviser la Russie et l'Allemagne de maladroites et trop transparentes.",
    "paragraphs": [
      "La Gazette de Cologne critique vivement une récente interview de Li-Hung-Chang, jugeant ses efforts pour susciter de la défiance entre la Russie et l'Allemagne comme étant trop visibles et par trop maladroits."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Chronique Militaire",
    "title": "Médailles et règlements militaires",
    "summary": "Le Journal officiel annonce l'attribution de la médaille coloniale pour les opérations dans le sud algérien et détaille de nouvelles mesures en faveur des gendarmes réformés pour invalidité.",
    "paragraphs": [
      "Le Journal officiel a publié un décret autorisant l'obtention de la médaille coloniale pour les militaires ayant pris part aux opérations dans le sud de l'Algérie.",
      "Le ministre a également pris des dispositions nécessaires afin d'éviter que les gendarmes réformés pour invalidité ne perdent indûment leur solde ou leur grade."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Crime atroce à Mons",
    "summary": "Un meurtre sanglant a été découvert à Mons. Le corps de Louise Mertens a été repêché, portant dix-sept coups de couteau, tandis que son amant, le nommé Leents, a été interpellé après une tentative de suicide.",
    "paragraphs": [
      "Le cadavre de Louise Mertens a été découvert dans le canal du Centre à Mons ; la malheureuse portait dix-sept coups de couteau.",
      "Son amant, le nommé Leents, a été retiré de l'eau après avoir tenté de se donner la mort, avant d'être placé sous garde."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Social",
    "title": "Le Congrès Socialiste",
    "summary": "Le congrès socialiste national proclame la nécessité de l'unité malgré la scission du parti ouvrier français et instaure un comité général chargé de préparer une unification complète sous six mois.",
    "paragraphs": [
      "Le congrès socialiste national a proclamé la nécessité de l'unité, malgré une scission lors de la séance d'hier impliquant le Parti ouvrier français.",
      "Après des débats houleux, le congrès a adopté une résolution pour la constitution d'un nouveau comité général, chargé de préparer une unification complète du parti sous un délai de six mois."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Les arbres centenaires à l'Exposition",
    "summary": "Le pavillon des Forêts au Champ-de-Mars met en lumière des spécimens forestiers monumentaux, incluant des vétérans français comme le chêne d'Allouville-Bellefosse ou l'if de la Motte-Feuilly.",
    "paragraphs": [
      "Le pavillon des Forêts au Champ-de-Mars expose des spécimens géants d'arbres centenaires venus du monde entier.",
      "La France présente également ses propres vétérans forestiers, au nombre desquels figurent le chêne d'Allouville-Bellefosse et l'if de la Motte-Feuilly."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Réfection des décors",
    "summary": "Pour préserver la splendeur de l'Exposition Universelle jusqu'à sa clôture, les décors en bois et carton, altérés par les intempéries, font l'objet d'une remise en état complète.",
    "paragraphs": [
      "Les ornements en bois et carton, abîmés par les récentes intempéries, ont été remis à neuf afin de garantir la splendeur de l'Exposition jusqu'à sa fin prochaine."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Social",
    "title": "Fête des chauffeurs-conducteurs",
    "summary": "La Fédération centrale des chauffeurs-conducteurs-mécaniciens a célébré ses membres lors d'une cérémonie de remise de récompenses au Conservatoire des arts et métiers, sous la présidence de M. André Ulrich.",
    "paragraphs": [
      "La Fédération centrale des chauffeurs-conducteurs-mécaniciens a tenu, au Conservatoire des arts et métiers, une cérémonie de distribution de récompenses, placée sous la haute présidence de M. André Ulrich."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Social",
    "title": "La grève dans les ports et le mouvement des tramways",
    "summary": "Le conflit dans les ports stagne malgré les négociations. Parallèlement, une vive agitation gagne le personnel des tramways, bien qu'aucune décision de grève n'ait encore été actée par les 500 travailleurs réunis.",
    "paragraphs": [
      "Une nouvelle entrevue entre les arrimeurs et les grévistes du port a eu lieu. Les deux parties campent sur leurs positions, et la détente qui avait semblé se manifester ne s'est pas maintenue.",
      "La grève n'a donc fait aucun progrès. Beaucoup de navires attendent dans le port leur chargement ou leur déchargement. Le seul navire qui a pu être chargé par quelques ouvriers est parti hier avec deux jours de retard.",
      "À Puteaux, la situation reste inchangée ; la plupart des ouvriers de ce port sont partis aux vendanges.",
      "Le mouvement gréviste des charbonniers ne s'est pas accentué et aucune perturbation n'est résultée de l'abandon du travail par quelques-uns d'entre eux.",
      "D'autre part, une grande effervescence règne dans le personnel des tramways ; wattmen, conducteurs et cochers se sont réunis cette nuit au nombre de 500 environ, mais la question de la grève, bien qu'agitée, n'a pas été arrêtée."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Coups de révolver sur les agents",
    "summary": "Lors d'une rixe avenue de Saint-Ouen, des malfaiteurs ont fait feu sur des agents de la paix venus rétablir l'ordre. Quatre suspects ont été arrêtés immédiatement, le cinquième a été appréhendé plus tard avec son arme.",
    "paragraphs": [
      "Une bagarre s'est produite hier matin, vers deux heures, avenue de Saint-Ouen, à l'angle du passage de Lugille.",
      "Des agents de la paix, attirés par le bruit d'une lutte assez vive, survinrent au moment où plusieurs individus, ivres pour la plupart, s'étaient mis à forcer le passage.",
      "Les malfaiteurs, surpris par l'arrivée des agents de la paix, firent feu sur eux à plusieurs reprises, sans toutefois parvenir à les atteindre.",
      "Les agents parvinrent enfin à arrêter quatre des individus sur cinq et les conduisirent au poste de la rue Marcadet.",
      "Ce sont les nommés Léon Cocheteau, René Lions, Charlotte Siffruoillot et Léon Chaubaud. Chaubaud a été reconnu par l'agent Latour comme étant l'un des agresseurs.",
      "Le cinquième individu a été retrouvé deux heures plus tard sur un banc de l'avenue de Saint-Ouen. C'est un nommé Paul Siffruoillot, âgé de vingt-cinq ans, sablier, demeurant rue Touzet, à Saint-Ouen. On a trouvé sur lui un révolver contenant encore cinq cartouches."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une femme brûlée",
    "summary": "Mme Maurier a été grièvement blessée après la chute accidentelle d'une lampe à pétrole qui a embrasé ses vêtements. Elle a été transportée d'urgence à l'Hôtel-Dieu par les autorités.",
    "paragraphs": [
      "Mme Maurier, âgée de cinquante-trois ans, en faisant tomber hier soir une lampe à pétrole, a mis le feu à ses vêtements et a été grièvement brûlée sur diverses parties du corps.",
      "M. Taubert, commissaire de police, a fait transporter la pauvre femme à l'Hôtel-Dieu pour y recevoir les soins nécessaires."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les cambrioleurs amoureux",
    "summary": "Un malfaiteur nommé Charles Véron a tenté de justifier son intrusion dans la chambre d'une domestique par une feinte déclaration d'amour, avant d'être arrêté en possession d'un attirail de cambrioleur.",
    "paragraphs": [
      "Vers quatre heures, une jeune domestique, Élise Chartier, âgée de vingt ans, se trouvait dans sa chambre quand un individu d'une trentaine d'années est entré brusquement.",
      "L'individu a déclaré être amoureux fou d'elle depuis longtemps. La domestique, rassurée, a laissé l'inconnu quitter la chambre. Cependant, les portes de quatre chambres de l'immeuble furent trouvées fracturées peu après.",
      "Les locataires appréhendèrent l'inconnu, Charles Véron, dit Charlot, âgé de trente-deux ans. Il a été trouvé porteur de bijoux volés et d'un attirail complet de cambrioleur.",
      "Le malfaiteur a raconté en riant qu'il avait dû inventer un stratagème pour éloigner les soupçons de la bonne. Il a été dirigé sur le dépôt en attendant qu'il soit déféré devant la justice."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de meurtre",
    "summary": "Un marchand de futailles, Louis Margerie, a été violemment agressé à la barre de fer par le nommé Paul Roux. La victime a été retrouvée inanimée dans une mare de sang, et l'agresseur a été arrêté.",
    "paragraphs": [
      "Hier matin, un marchand de futailles nommé Louis Margerie a été agressé par un nommé Paul Roux, qui lui a asséné des coups de barre de fer sans motif apparent.",
      "L'infortuné marchand tomba comme une masse sur le sol et des gardiens de la paix le découvrirent étendu dans une mare de sang. Transporté à l'hôpital, le coupable a été mis en état d'arrestation."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Politique",
    "title": "Le retour de M. Loubet",
    "summary": "Le Président de la République, Émile Loubet, a quitté Montélimar par le train rapide ce midi, accompagné de ses proches collaborateurs, après un séjour entouré de ses administrés.",
    "paragraphs": [
      "Montélimar, 30 septembre. M. le Président de la République est parti à midi, par le train rapide, accompagné de M. Combarieu et du commandant Lamy.",
      "À la gare se trouvaient le sous-préfet, le maire, un adjoint, Mme Loubet, M. Paul Loubet, M. de Saint-Prix et de nombreux amis. Mme Loubet et M. Paul Loubet restent à Montélimar une huitaine de jours."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Assassinat d'une fille galante",
    "summary": "Le substitut Le Bourdellès et le juge Piques mènent l'enquête rue Fontaine. La victime, Augustine Durand, possédait des titres au Crédit foncier. Un témoin a vu un suspect fuir après avoir entendu des cris.",
    "paragraphs": [
      "MM. Le Bourdellès, substitut, et Piques, juge d'instruction, se sont rendus rue Fontaine afin de constater l'assassinat d'Augustine Durand.",
      "L'examen des lieux a permis de découvrir des récépissés de titres déposés au Crédit foncier, ainsi que des papiers de famille indiquant que la victime avait encore sa mère à Valmont et deux frères résidant à Corbeil et à Paris.",
      "Les déclarations de deux femmes habitant en face de l'appartement confirment avoir vu, samedi à cinq heures vingt, un individu sortir précipitamment des lieux après avoir entendu un cri."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "International",
    "title": "La guerre au Transvaal",
    "summary": "Mouvements militaires au Transvaal : une troupe de 200 Boërs est signalée sous les ordres d'Erasmus, tandis que lord Roberts remplace lord Buller à la tête de l'armée anglaise.",
    "paragraphs": [
      "Maseru, 29 septembre. On signale un mouvement de 200 Boërs commandés par Erasmus.",
      "Lord Roberts est nommé commandant en chef de l'armée anglaise, en remplacement de lord Buller."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans la banlieue parisienne",
    "summary": "La banlieue parisienne est frappée par une série d'accidents : un décès à Saint-Porret, un sauvetage héroïque à Neuilly, un accident de travail à Villeneuve-la-Garenne et un tragique accident ferroviaire à Montrouge.",
    "paragraphs": [
      "Ernest Lobizet, ancien mécanicien, est mort après une chute sur le trottoir à Saint-Porret.",
      "À Neuilly-sur-Seine, le jeune Édouard Raynaud, âgé de dix ans, a été sauvé de la noyade dans le lac Saint-James par l'intervention héroïque d'un ouvrier plombier, Léon Gardet.",
      "À Villeneuve-la-Garenne, l'effondrement d'un échafaudage a causé de graves blessures : Alexandre Bertuvet a eu les jambes broyées et Louis Remin a eu le crâne fracturé.",
      "À Montrouge, le nommé Jules Robin a été happé par le train d'Arpajon et grièvement blessé."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame du vitriol à Saint-Ouen",
    "summary": "Un drame conjugal a éclaté avenue des Batignolles : M. Victor Obrepel a attaqué son épouse, Marie Berger, avec du vitriol. La victime, gravement atteinte, a été transportée à l'hôpital Bichat.",
    "paragraphs": [
      "Hier matin, avenue des Batignolles, M. Victor Obrepel a lancé un bol de vitriol sur sa femme, Marie Berger, qui gérait un dépôt de pain, après le refus de celle-ci de reprendre la vie commune.",
      "La victime, grièvement brûlée, a été transportée à l'hôpital Bichat. Le mari, auteur de cet acte de violence, est activement recherché par la police."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Théâtre",
    "title": "Chronique des théâtres et spectacles",
    "summary": "La saison théâtrale bat son plein : entre les travaux de la Comédie-Française, les nouvelles créations du Châtelet et la reprise de l'œuvre de Marcel Prévost, la vie culturelle parisienne est en effervescence.",
    "paragraphs": [
      "L'Opéra, la Comédie-Française et l'Odéon présentent leurs programmes hebdomadaires. M. Antoine a offert une hausse de droits à la Société des auteurs.",
      "Les travaux de la Comédie-Française avancent selon le calendrier prévu, et l'ouverture de la nouvelle salle est fixée au 29 décembre.",
      "Au Châtelet, la pièce 'La Poudre de Perlimpinpin' sera donnée en matinée à partir d'octobre.",
      "Le théâtre de l'Athénée reprend la pièce de M. Marcel Prévost, 'Les Demi-Vierges', interprétée par Mme Jane Hading."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Sport",
    "title": "Résultats des courses hippiques",
    "summary": "La réunion hippique au Bois-de-Boulogne a été marquée par le succès de Semendria au prix Vermeille et une réclamation victorieuse dans le prix du Prince d'Orange après un incident de course entre Fourire et Isère.",
    "paragraphs": [
      "La réunion au Bois-de-Boulogne a été marquée par la victoire de Semendria dans le prix Vermeille et les péripéties du prix du Prince d'Orange, où Fourire a été gêné par Isère, entraînant une réclamation admise par les commissaires.",
      "Les autres prix ont été remportés par Sund, Crépuscule, Saint-Armel et Kiss."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Faits Divers",
    "title": "Quelque chose de très joli, mais peu pratique",
    "summary": "Une réflexion sur le contraste entre la peinture bucolique d'une scène de moisson et la réalité éprouvante du travail des champs, qui exige une force et une habitude que seul l'artiste observe de loin.",
    "paragraphs": [
      "Assis à l'ombre d'un chêne centenaire, au sommet d'une colline, un peintre tient d'une main sa palette chargée de brillantes couleurs ; de l'autre, il manie adroitement son pinceau pour représenter, sur la toile, le paysage enchanteur qui se déroule devant ses yeux. Une douzaine d'hommes et de femmes sont en train de faire la moisson.",
      "Les uns, armés de faucilles, coupent le blé ; les autres font des gerbes que deux vigoureux gars chargent sur une charrette attelée de deux grands bœufs. Il est facile à l'artiste de reproduire le tableau animé qu'il a devant lui.",
      "Mais, s'il lui fallait se joindre aux moissonneurs, peiner toute la journée, en plein soleil, le dos courbé, soit pour couper le blé ou pour lier les gerbes, ou bien encore si, armé d'une fourche, il avait à les tendre, une à une, à force de bras, pour en charger la charrette, la tâche serait bien autrement difficile. Pour cela, deux choses sont indispensables : la force et l'habitude. Sans ces deux conditions, la vie des champs est des plus pénibles."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Causerie Financière",
    "title": "Situation des marchés financiers",
    "summary": "Entre abondance des capitaux et inquiétudes liées aux nouvelles de l'Extrême-Orient, le marché français fait preuve de prudence, tandis que la Banque de France renforce son encaisse or face aux tensions étrangères.",
    "paragraphs": [
      "Notre marché reste soumis aux influences opposées que nous avons précédemment indiquées. D'un côté, l'abondance incontestable des capitaux disponibles et la confiance générale qui résulte de la situation politique à l'intérieur lui permettent d'entrevoir une bonne campagne d'automne ; mais, de l'autre, les obscurités des nouvelles de l'Extrême-Orient lui conseillent une très grande réserve.",
      "En outre, il ne faut pas perdre de vue que les marchés étrangers sont loin d'avoir une situation monétaire aussi favorisée que le nôtre. Ils se sont chargés d'une grande quantité de titres industriels qui pèsent lourdement sur eux. Aussi, à la moindre reprise, les voit-on s'empresser de venir réaliser chez nous une partie des valeurs internationales qu'ils ont en mains.",
      "Le bilan hebdomadaire de la Banque de France accuse une nouvelle augmentation de l'encaisse or de 1 650 000 francs. Il ne semble donc pas que le resserrement de l'argent qui se manifeste sur différentes places étrangères puisse avoir quelque répercussion ici."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Revue Commerciale",
    "title": "Grains, farines et houblons",
    "summary": "Le point sur la campagne agricole : les semailles d'automne progressent malgré des pluies insuffisantes, le blé atteint 109 millions d'hectolitres et les prix du houblon s'annoncent en hausse pour cette saison.",
    "paragraphs": [
      "GRAINS ET FARINES. On s'occupe activement des ensemencements d'automne. Les pluies orageuses qui sont tombées ces jours derniers ont été bien accueillies ; cependant, elles ont été insuffisantes.",
      "Le ministre de l'Agriculture a publié l'évaluation des récoltes pour la présente campagne : la récolte du blé s'élèverait à 109 millions d'hectolitres. Les cours des farines ont clôturé en baisse suite à ces annonces officielles.",
      "HOUBLONS. La cueillette des houblons va se trouver terminée partout ; la rentrée a été partout excellente. Il existe diverses estimations de la récolte qui offrent des différences assez sensibles quant à la quantité ; cependant, on est à peu près d'accord pour dire que les prix seront plus élevés que l'an dernier."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Feuilleton",
    "title": "Récit : Le drame de la vie",
    "summary": "L'ingénieur Pontsevrin révèle à Raymond de Terrique la véritable identité de mistress Janck. Les deux hommes s'accordent à penser que le mari de madame Rédal est le coupable probable, disculpant ainsi la jeune Zette.",
    "paragraphs": [
      "Et l'ingénieur expliqua la parenté qui l'unissait à ce Rédal. Pontsevrin ne se laissa aller, devant M. Bonnet, à aucune indiscrétion par rapport à l'entretien qu'il avait eu ce soir avec mistress Janck.",
      "Il avait juré qu'à part le comte, nul n'apprendrait de sa bouche la stupéfiante identité de cette dernière. Mais, dès qu'il se trouva seul avec Raymond, revenant tous deux vers la maison, il le lui répéta tout entier.",
      "Dès les premières phrases, Raymond de Terrique tombait sous le coup d'une sorte de stupeur. « Madame Rédal pense, comme moi, que son mari pourrait être l'assassin. — Et je pense comme vous deux, fit-il, c'est beaucoup plus plausible que d'accuser cette malheureuse petite Zette. »"
    ]
  }
];
