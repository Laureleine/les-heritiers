// Date: 1900-08-23
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-08-23 (Version Restaurée, 31 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "International",
    "title": "Situation à Pékin",
    "summary": "Pékin est divisé en sections sous contrôle allié pour assurer l'ordre. Les efforts diplomatiques et militaires ont permis la libération des missionnaires et cultivateurs retenus captifs dans le palais impérial.",
    "paragraphs": [
      "Pékin, où règne la plus grande confusion, a été divisé en plusieurs sections dans le but de maintenir l'ordre ; des comités internationaux ont été formés par les alliés.",
      "On a réussi à mettre en liberté les missionnaires étrangers et les cultivateurs chinois qui étaient prisonniers dans le palais impérial."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "International",
    "title": "Les Pavillons-Noirs",
    "summary": "Le chef des Pavillons-Noirs, Lan-Y, attise le malaise dans la région. Des affiches menaçantes ont été placardées, ciblant explicitement les propriétés appartenant aux missions chrétiennes.",
    "paragraphs": [
      "Londres, 22 août. Le correspondant du Times à Hong-Kong télégraphie, le 21 août, que dans la région que traverse Lan-Y, le chef des Pavillons-Noirs, règne un certain malaise ; il fait placarder des affiches menaçant de détruire les propriétés des missions."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "International",
    "title": "Le Maréchal de Waldersee",
    "summary": "En route pour la Chine, le maréchal de Waldersee a reçu les honneurs en Italie. Après un déjeuner avec le roi Victor-Emmanuel à Rome, il a rejoint Naples pour poursuivre son embarquement vers l'Extrême-Orient.",
    "paragraphs": [
      "Gênes, août. L'état-major du maréchal de Waldersee, composé d'un général, de sept officiers supérieurs, de quatorze officiers subalternes et de plusieurs attachés, est arrivé à la gare maritime de Santa-Limbania.",
      "Il a été cordialement reçu par de nombreux officiers italiens. La musique a joué l'hymne allemand.",
      "L'état-major du maréchal s'est embarqué aussitôt à bord du Sachsen, qui est parti à six heures pour la Chine.",
      "Rome, 22 août. Le roi d'Italie a reçu le maréchal de Waldersee et l'a retenu à déjeuner. Le maréchal, avant de rendre visite à Victor-Emmanuel, était allé au Panthéon déposer une couronne sur le tombeau du roi Humbert.",
      "Le maréchal est parti à deux heures trente pour Naples, où il s'embarquera à neuf heures du soir."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "International",
    "title": "Renforts en Chine",
    "summary": "La progression du capitaine Pohl vers Pékin a été entravée par des pluies diluviennes. Malgré ce retard à Matao le 16 août, des informations non confirmées suggèrent son arrivée dans la capitale le 18.",
    "paragraphs": [
      "Berlin, 22 août. Le second amiral de l'escadre de croiseurs télégraphie de Takou le 19 août : De fortes pluies ont arrêté la marche du capitaine Pohl, de sorte qu'il n'a pu s'avancer au delà de Matao que le 16 août.",
      "D'après une nouvelle de Tien-Tsin, qui a besoin d'être confirmée, le capitaine Pohl serait arrivé à Pékin le 18 août au soir."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "International",
    "title": "Départ de troupes pour l'Indochine",
    "summary": "Le navire Uruguay a appareillé de Marseille pour Saïgon. À son bord, des renforts du génie et du matériel de guerre ont été salués par le général Roidot au milieu des acclamations de la foule présente.",
    "paragraphs": [
      "Marseille, 22 août. L'Uruguay est parti ce soir pour Saïgon avec une compagnie du génie, une section d'aérostiers, du matériel de guerre et des troupes. Le général Roidot s'est rendu à bord pour saluer les troupes sous les acclamations de la foule."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Au Camp de Châlons",
    "summary": "Trente-cinq officiers, élèves de l'École supérieure de guerre, ont rejoint le camp de Châlons pour un cycle de trois jours de travaux pratiques dédiés au tir d'artillerie, d'infanterie et de cavalerie.",
    "paragraphs": [
      "Trente-cinq capitaines et lieutenants, formant la seconde série des élèves de l'École supérieure de guerre, sont arrivés hier au camp de Châlons pour suivre, pendant trois jours, les cours pratiques de tir d'artillerie, d'infanterie et de cavalerie."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "L'Escadre de la Méditerranée",
    "summary": "L'escadre de la Méditerranée a quitté Toulon ce matin pour procéder à ses tirs réglementaires aux Salins-d'Hyères, avec ordre de regagner la rade dès l'achèvement des manœuvres.",
    "paragraphs": [
      "Toulon. Ce matin, à six heures, l'escadre de la Méditerranée quittait Toulon pour effectuer, aux Salins-d'Hyères, ses tirs trimestriels. Le vice-amiral Fournier a cependant reçu une dépêche ministérielle ordonnant à l'escadre de revenir sur rade aussitôt après ses tirs."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Le Conseil supérieur de la Marine",
    "summary": "Les vice-amiraux de La Jaille, Gervais et Humann sont nommés membres du Conseil supérieur de la Marine, M. le vice-amiral Gervais conservant la présidence du conseil des travaux.",
    "paragraphs": [
      "Ont été nommés membres du Conseil supérieur de la Marine les vice-amiraux de La Jaille, Gervais et Humann. M. le vice-amiral Gervais conservera ses fonctions actuelles de président du conseil des travaux de la marine."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Le Prince de Galles en Allemagne",
    "summary": "Le Prince de Galles a effectué une visite officielle à Wilhelmshoe le 22 août ; il y fut accueilli par l'Empereur pour un déjeuner au château avant de repartir en milieu d'après-midi.",
    "paragraphs": [
      "Wilhelmshoe, 22 août. Le prince de Galles est arrivé vers une heure à la station de Wilhelmshoe. Il a été salué cordialement par l'Empereur. Un déjeuner a eu lieu au château. Le prince est reparti à trois heures et demie."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Crime de Lèse-Majesté",
    "summary": "Un ressortissant français, Joseph Sagnac, a été interpellé à Fiume pour crime de lèse-majesté, alors qu'il était déjà sous le coup d'une condamnation par contumace pour désertion.",
    "paragraphs": [
      "Fiume (Autriche), 22 août. Un Français, Joseph Sagnac, a été arrêté pour crime de lèse-majesté. Sagnac avait déserté en 1891 les bataillons d'Afrique et avait été condamné par contumace à Trieste et à Fiume."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Explosion en Espagne",
    "summary": "Une déflagration d'une extrême violence a anéanti la fabrique de poudre de Lugones, près d'Oviedo. Le bilan humain s'établit à trois ouvriers tués et un blessé grave.",
    "paragraphs": [
      "Oviedo, 22 août. Une violente explosion s'est produite à la fabrique de poudre du village de Lugones. L'édifice a été complètement détruit. Trois ouvriers ont été tués et un blessé."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "La Guerre au Transvaal",
    "title": "Nouvelles des Boers",
    "summary": "Selon les dernières dépêches, les Boers enregistrent de nouveaux succès militaires. Ils ont réoccupé Bloemhof et concentré huit mille hommes ainsi que leur artillerie à Machadodorp.",
    "paragraphs": [
      "D'après une dépêche envoyée hier à un journal anglais, les Boers auraient remporté plusieurs succès et réoccupé Bloemhof. Huit mille d'entre eux sont à Machadodorp avec toute l'artillerie."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Social",
    "title": "Les Grèves des ports",
    "summary": "Le mouvement gréviste agite les ports français : si la situation s'apaise à Bordeaux grâce à un accord, Dunkerque subit des troubles tandis que Marseille demeure calme.",
    "paragraphs": [
      "Dunkerque, 22 août. Les charpentiers de navire ont décidé de se mettre en grève. Le travail est arrêté au port. Des grévistes ont envahi un vapeur anglais. Deux escadrons de cuirassiers sont arrivés pour assurer l'ordre.",
      "Marseille, 22 août. Les ouvriers des quais, continuant la grève, ont entraîné avec eux un grand nombre de leurs camarades. Tout est calme sur les quais.",
      "Bordeaux, 22 août. La grève des ouvriers est terminée depuis ce matin, les armateurs ayant accepté les propositions des grévistes."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "L'Exposition Universelle",
    "title": "Vie de l'Exposition",
    "summary": "Malgré une météo maussade, les préparatifs de la grande fête nautique de septembre vont bon train, promettant un défilé des nations sur la Seine avec la participation active de la jeunesse des Beaux-Arts.",
    "paragraphs": [
      "La température, décidément capricieuse, continue à nous gratifier de pluvieuses matinées suivies d'après-midi à peu près semblables.",
      "La fête nautique prévue pour septembre prend forme avec un défilé des nations sur la Seine et la participation de la jeunesse des Écoles et des Beaux-Arts."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "L'Exposition Universelle",
    "title": "Visite du ministre de la Guerre",
    "summary": "Le général André, ministre de la Guerre, a procédé à une inspection méthodique des installations militaires de l'Exposition, visitant notamment le palais des Armées et le pavillon de la Russie.",
    "paragraphs": [
      "Le général André, ministre de la Guerre, s'est rendu au palais des Armées de terre et de mer pour une visite officielle des galeries d'armement et des services d'ambulance.",
      "Il a également visité le pavillon militaire de la Russie et examiné le matériel de guerre russe."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "L'Exposition Universelle",
    "title": "Horticulture et Colonie",
    "summary": "Le huitième concours horticole de la Ville de Paris a été inauguré hier dans ses serres, tandis que la fête coloniale continue d'attirer une foule nombreuse fascinée par les danseurs exotiques et les cortèges illuminés.",
    "paragraphs": [
      "Le huitième concours horticole des fleurs et des fruits de la saison a été inauguré hier matin dans les serres de la Ville de Paris.",
      "La fête coloniale continue à attirer un public nombreux autour des danseurs exotiques et des cortèges aux flambeaux."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un drame de la jalousie",
    "summary": "Un drame passionnel s'est déroulé rue de la Pompe. Une femme a été mortellement égorgée par son amant, lequel a été aussitôt désarmé et arrêté par un cocher d'omnibus témoin de la scène.",
    "paragraphs": [
      "Un drame de la jalousie s'est déroulé rue de la Pompe, où une femme a été égorgée par son amant. Le coupable, surpris en pleine agression, a été immédiatement désarmé par un cocher d'omnibus qui passait à ce moment, puis arrêté par les forces de l'ordre."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Interrogatoire d'un individu arrêté",
    "summary": "Emile T., interpellé après une altercation armée, a été entendu par M. le commissaire Hajaud. Il justifie son geste par la crainte d'une agression et la présence supposée d'un rival.",
    "paragraphs": [
      "Les gardiens de la paix conduisirent l'individu au poste de police de la rue de Cambrai, où il a été mis à la disposition de M. Hajaud, commissaire de police du quartier de Flandre.",
      "Interrogé, M. Emile T. a déclaré qu'il n'aurait pas fait usage de son arme s'il n'avait pas été menacé. « En plus de l'attitude de mon agresseur, a-t-il ajouté, j'ai cru voir surgir un rival et c'est dans ce tumulte que j'ai fait usage de mon arme. »",
      "S'il ne nie pas les faits, il précise toutefois ne pas avoir été conduit au dépôt."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vol de trois mille francs",
    "summary": "Une voyageuse autrichienne a porté plainte auprès du commissaire Péchard après avoir constaté la disparition d'une importante somme d'argent qu'elle croyait avoir dissimulée sur elle lors d'emplettes.",
    "paragraphs": [
      "Une ressortissante autrichienne habitant près de la gare était allée, munie d'une somme importante, faire quelques emplettes. Elle y reçut la monnaie d'une pièce de banque.",
      "À son arrivée, elle constata avec désespoir qu'elle avait perdu ou qu'on lui avait dérobé la somme qu'elle croyait avoir placée dans son corsage.",
      "Elle a porté l'affaire devant M. Péchard, commissaire de police, qui a immédiatement ouvert une enquête sur ce vol."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'une voleuse à la gare du Nord",
    "summary": "Une élégante pickpocket a été appréhendée à la gare du Nord après avoir dérobé près de mille francs à une voyageuse. La suspecte, trouvée en possession de quatre porte-monnaie suspects, est écrouée au dépôt.",
    "paragraphs": [
      "Dans la matinée d'hier, à la gare du Nord, la femme d'un ingénieur demeurant à Ermont fut bousculée. Se retournant, elle aperçut une jeune femme vêtue avec beaucoup d'élégance qui venait de lui dérober son porte-monnaie, contenant près de mille francs en billets de banque et en or.",
      "La voleuse lâcha le porte-monnaie et tenta de s'enfuir, mais les témoins présents l'en empêchèrent.",
      "Interrogée, elle déclara se nommer D., âgée de trente ans, mais ne put fournir de domicile. On a trouvé sur elle quatre porte-monnaie fort bien garnis dont elle n'a pu expliquer la provenance.",
      "Elle a été immédiatement dirigée sur le dépôt. Ses complices sont activement recherchés."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Violents orages à Malicorne, Langres et en Belgique",
    "summary": "Des orages d'une rare violence ont dévasté Malicorne, Langres et la région de Liège, causant des destructions importantes aux habitations, aux vignobles et aux réseaux de communication, malgré des assurances inégales.",
    "paragraphs": [
      "Le 22 août, un orage épouvantable s'est abattu sur la commune de Malicorne. La foudre est tombée en divers points, détruisant les bâtiments d'habitation et d'exploitation appartenant à M. Adrien Délétang. Les dégâts, évalués à 10 000 francs environ, sont heureusement couverts par une assurance.",
      "À Langres et Bourbonne, la foudre a causé d'importants dégâts : arbres fruitiers brisés et chariots détruits. À Vicq, une trombe de grêle a dévasté le vignoble, occasionnant des pertes estimées à un demi-million de francs, sans qu'aucune assurance ne vienne couvrir ces sinistres.",
      "En Belgique, un orage violent a frappé Liège et ses environs, coupant les lignes téléphoniques. Les dégâts sont considérables sur les bords de l'Ourthe, où les récoltes ont été emportées par les eaux."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue parisienne",
    "summary": "Chroniques des incidents et drames en banlieue : incendies, tentatives de suicide, accidents du travail mortels et faits divers marquent le quotidien des communes entourant la capitale.",
    "paragraphs": [
      "Boulogne-sur-Seine : Une jeune femme enceinte, abandonnée par son mari, a été trouvée par une sage-femme en état de folie, armée d'un couteau. Elle a été conduite à l'hôpital Boucicaut.",
      "Boulogne-sur-Seine : Un feu s'est déclaré dans un magasin de chiffons, avenue de la Reine. Les pompiers ont maîtrisé le sinistre sans faire de victimes.",
      "Choisy : Ernestine Vedoux, couturière, s'est jetée du deuxième étage dans la cage d'escalier à la suite d'une querelle. Transportée à l'hôpital, elle souffre d'une fracture de la cuisse.",
      "Levallois-Perret : Jacques Dijus, un ancien infirmier, est tombé à l'eau alors qu'il se trouvait sur un bateau. Son corps a été retrouvé après trois heures de recherches.",
      "Saint-Ouen : Marius Lalo, charretier, est décédé à l'hôpital Bichat des suites d'un accident où son véhicule lui avait broyé les jambes.",
      "Colombes : Louis Nelhard, peintre décorateur, a eu deux doigts emportés et les yeux brûlés par l'explosion de cartouches de chasse qu'il confectionnait.",
      "Bourivat : On a retiré de la Seine le cadavre d'une femme âgée, victime probable d'un suicide ou d'une chute accidentelle.",
      "Montreuil-sous-Bois : Jean Cassine, chaudronnier, est tombé en montant dans une voiture en marche, se fracturant les côtes et le bras.",
      "Montreuil-sous-Bois : Mlle Laurence Loiselle a été choisie comme la troisième rosière annuelle de la commune.",
      "Brignoles : Louis Dauphin a tiré trois coups de revolver sur sa femme, qui refusait de réintégrer le domicile conjugal, sans toutefois l'atteindre.",
      "Choisy-le-Roi : Un couteau-poignard ensanglanté et un revolver ont été trouvés dans un fossé. La police a ouvert une enquête.",
      "Vanves : Des cambrioleurs se sont introduits chez Mme veuve Révélât et ont dérobé le contenu du tiroir-caisse."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Congrès des postes et télégraphes à Versailles",
    "summary": "Les congressistes des postes et télégraphes ont effectué une visite officielle à Versailles, marquant leur passage par une découverte culturelle et une réception municipale avant leur retour à Paris.",
    "paragraphs": [
      "Les congressistes des postes et télégraphes ont été reçus à Versailles. Après une visite du musée et du parc, ils ont été accueillis par la municipalité au théâtre des Variétés où des allocutions ont été prononcées, avant de retourner à Paris par le train."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Divers accidents et disparitions",
    "summary": "Une série d'accidents tragiques signalés dans la région : incendies industriels, disparitions inquiétantes en bord de fleuve et accidents ferroviaires mortels frappent les populations locales.",
    "paragraphs": [
      "Meaux : Un incendie causé par une chaudière a endommagé une amidonnerie.",
      "Reuil : Un habitant du hameau des Loges, nommé Ging, a disparu ; on redoute une noyade volontaire dans la Marne.",
      "Corbeil : Le chauffeur d'un train spécial a été décapité par une passerelle alors qu'il graissait sa machine."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Départements",
    "title": "Faits divers en province",
    "summary": "Dépêches de province relatant des drames et des accidents : une série de sinistres allant de l'accident de voiture mortel aux incendies non assurés, jusqu'à la découverte d'un corps sur un wagon.",
    "paragraphs": [
      "Compiègne : Paul Donnet est décédé après un accident de voiture où il a eu le bras cassé et les côtes enfoncées.",
      "Montdidier : Un incendie chez M. Duhautbout-Honeste a causé 4 000 francs de pertes, le sinistre n'étant pas assuré.",
      "Chartres : Le cadavre d'un garde-frein, nommé Ghaignon, a été trouvé sur la toiture d'un wagon. Le parquet a ordonné une enquête."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Dernière Heure",
    "title": "Événements de Chine et grèves des ports",
    "summary": "Tensions internationales en Chine suite à l'intervention contre les Boxers, et agitation sociale dans les ports marseillais où les grévistes bloquent le débarquement des navires étrangers.",
    "paragraphs": [
      "Pékin : L'amiral américain annonce que les alliés ont dispersé un millier de Boxers près de Tien-Tsin, faisant une centaine de morts chez les Chinois.",
      "Marseille : Les grévistes des ports se sont opposés au débarquement de navires étrangers, provoquant les vives protestations des consuls étrangers."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Santé et Bien-être",
    "title": "La Médecine Naturelle par les Herbes",
    "summary": "Présentation de l'ouvrage du Dr G. Bonval sur les remèdes naturels, tisanes et traitements par les plantes pour soigner diverses affections sans intervention chirurgicale ni bandage.",
    "paragraphs": [
      "La Médecine naturelle par les Herbes, les Plantes, les Tisanes, etc. Traitement du Dr G. Bonval. La seconde édition de cet ouvrage vient de paraître et s'explique par l'intérêt qu'il a soulevé.",
      "Parmi les cent quarante traités de main de maître de l'art de guérir, nous citerons les plantes, avec la manière de les utiliser, les tisanes, les infusions, les injections, les lotions, etc.",
      "La maladie des femmes guérie sans opération ni bandage, l'hygiène, le traitement du diabète, de la goutte, du rhumatisme, des vices du sang, etc.",
      "Le livre permet de se guérir seul, en secret et à peu de frais. Il est envoyé franco contre 25 centimes en timbres-poste adressés au Docteur, directeur de l'Institut Dynamothérapeutique de France, Cité Malesherbes, 7, Paris."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Main Gauche - Grand Roman Inédit",
    "summary": "La douleur de Dondon, l'inquiétude pour l'état de santé de Lisette à la Salpêtrière, et la nouvelle inespérée de la libération de Raymond apportée par Bruno de Pontsevrin.",
    "paragraphs": [
      "Dondon se mit à pleurer et le pauvre vieux de la consoler : « Allons, tais-toi, je t'achèterai un sac de pralines. J'irai le chercher, là, si tu le fais. » Elle cessa de se frotter les yeux de sa petite main sale. « Vous voyez comme elle est facile », grommela le grand-père.",
      "Le lendemain, Victor s'en allait vers la place. Tandis que madame Gendrin et ses deux fils partaient pour la Salpêtrière, l'état de Lisette restait une fois encore stationnaire. On leur défendit de lui parler lorsqu'elle retombait dans sa somnolence.",
      "Gaston Duhalier et Bruno de Pontsevrin se retrouvaient au chevet de Solange de Boffront. Mademoiselle Belcourt, entrée dans la petite salle quelques minutes avant eux, venait de leur être présentée par Solange comme son sauveur.",
      "Bruno de Pontsevrin et Gaston Duhalier demeurèrent seuls auprès du lit. Avant qu'ils eussent parlé, Solange, anxieuse, interrogea : « Et Raymond ? ». Alors, très bas, Bruno, assis tout contre son lit, répondit : « Il a été mis en liberté hier soir »."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Spectacles",
    "title": "Spectacles du 23 août",
    "summary": "Programme des représentations théâtrales et lyriques parisiennes pour la soirée du 23 août, incluant l'Opéra, la Comédie-Française et les principaux théâtres de la capitale.",
    "paragraphs": [
      "Opéra : Relâche. Opéra-Comique : Hænsel et Gretel. Théâtre-Français : L'Aventurière, Le Malade imaginaire. Gymnase : Les Surprises du Divorce. Châtelet : La Poudre de Perlimpinpin. Sarah-Bernhardt : L'Aiglon. Variétés : La Belle Hélène.",
      "Palais-Royal : Le Dindon. Vaudeville : Madame Sans-Gêne. Porte-Saint-Martin : Cyrano de Bergerac. Renaissance : Petit prince. Ambigu : Les Deux Gosses."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Agriculture",
    "title": "Sommaire de L'Agriculture Nouvelle",
    "summary": "Aperçu du contenu hebdomadaire de la revue L'Agriculture Nouvelle, proposant des articles techniques sur l'élevage, l'horticulture et les expositions avicoles pour 10 centimes.",
    "paragraphs": [
      "Lire cette semaine dans L'Agriculture Nouvelle : 16 pages de texte et de gravures. Le numéro 10 centimes.",
      "Au sommaire : Syndicats d'éleveurs par J. Deville, Les plantes d'appartement par S. Mottet, La race ovine de Millery, Betteraves industrielles par J. Troude, Bienfaits du froid par J. de Loverdo, et l'Exposition d'aviculture de Vincennes par Louis Brechemin."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Bulletin Commercial du mercredi 22 août 1899",
    "summary": "Le marché des blés affiche une fermeté persistante ce mercredi 22 août, malgré la réserve observée par la meunerie. Les prix des variétés de blés blancs et roux enregistrent une légère progression sur les places commerciales.",
    "paragraphs": [
      "Cours des produits : Blés, Farines, Huiles et Sucres à Paris et au Havre.",
      "Le marché des blés est demeuré ferme, en dépit de la réserve observée par la meunerie. Les cours des blés blancs et roux enregistrent une légère hausse sur plusieurs places commerciales."
    ]
  }
];
