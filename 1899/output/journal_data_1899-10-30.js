// Date: 1899-10-30
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-10-30 (Version Restaurée, 40 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Editorial",
    "title": "La Repopulation",
    "summary": "L'Alliance nationale pour l'accroissement de la population française s'alarme du déclin démographique national et préconise une réforme fiscale pour soutenir les familles nombreuses face à cette crise stationnaire.",
    "paragraphs": [
      "Une recrudescence d'activité vient de se produire dans l'étude, plus que jamais ouverte, des causes de l'abaissement de la natalité en France. C'est l'Alliance nationale pour l'accroissement de la population française, instituée récemment, qui a provoqué ce réveil.",
      "La crise, hélas ! n'a plus besoin d'être prouvée. Seule de toutes les nations du globe, la population française reste stationnaire quand toutes les autres augmentent. Du troisième rang, nous sommes numériquement descendus au neuvième.",
      "À quoi tient cette régression lamentable ? Aux causes les plus variées. Ce n'est pas l'impuissance physique, déclare très haut la science. Les Français ne veulent plus avoir d'enfants, ajoute un raisonnement plus violent.",
      "Quelles mesures serait-il possible de préparer ? Les économistes n'hésitent pas : il faut faire intervenir les pouvoirs publics, notamment par un remaniement des impôts pour soulager les familles nombreuses et surtaxer les célibataires.",
      "J'ai voulu condenser en quelques lignes les différents remèdes suggérés par la dépopulation qui menace notre patrie. Si compliquées que certaines mesures puissent paraître, il est malheureusement trop clair qu'une action régénératrice s'impose."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "La Clameur des Enfants",
    "summary": "Le fils de la duchesse, Horace, confronte Girodias dans la forêt. Dans un accès de colère, Roland assène trois coups de cravache à Girodias, le laissant ensanglanté et humilié sur le sol.",
    "paragraphs": [
      "La duchesse se savait adorée par son fils Horace et elle sentait qu'elle venait de lui faire de la peine. Mais elle se raidit contre cette faiblesse.",
      "À un autre bout de la forêt, au pas de son cheval, Girodias rentrait tranquillement aux Grandes-Roches. Il était en avance de quelques minutes.",
      "Soudain, il entendit derrière lui la course d'un cheval au galop. C'était Roland, le fils de la duchesse, venu demander des comptes à Girodias.",
      "Roland, armé d'une cravache, frappa Girodias au visage trois fois, le marquant au fer rouge de la honte, le laissant ensanglanté et chancelant sur le sol."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident de Chemin de Fer",
    "summary": "Un grave accident ferroviaire est survenu entre Tours et Saint-Pierre-des-Corps, causant le déraillement d'un train Nantes-Paris et le décès du mécanicien, M. Jarnot.",
    "paragraphs": [
      "Cet après-midi, vers une heure, un accident de chemin de fer s'est produit entre les gares de Tours et de Saint-Pierre-des-Corps. Le train allant de Nantes à Paris a déraillé.",
      "Le mécanicien, nommé Jarnot, âgé de vingt-huit ans, a été tué sur le coup. Le chef de train a été blessé et quelques voyageurs ont eu des contusions sans importance. Une équipe déblaie la voie."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Guerre",
    "title": "La Guerre au Transvaal",
    "summary": "De nouveaux combats éclatent près de Ladysmith. Le général White cherche à briser l'encerclement des forces boërs, malgré des pertes subies par la cavalerie britannique lors de reconnaissances.",
    "paragraphs": [
      "Une dépêche a apporté la nouvelle qu'un combat assez important avait eu lieu entre les forces boërs et anglaises à une faible distance de Ladysmith.",
      "Cinq bataillons d'infanterie, trois régiments de cavalerie et des batteries sont partis de Ladysmith vers Lombarskop. Un escadron de hussards a pris contact avec les Boërs, essuyant des pertes.",
      "Plusieurs dépêches annoncent qu'une grande bataille a dû se livrer autour de Ladysmith, le général White désirant rompre le cercle des Boërs."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "L'Espagne et le Catalanisme",
    "summary": "La Catalogne, portée par des aspirations autonomistes, défie le pouvoir central espagnol. L'état de siège a été proclamé à Barcelone face à cette crise politique majeure.",
    "paragraphs": [
      "L'Espagne est en ce moment agitée par des événements importants. Il s'agit de l'insurrection morale de la Catalogne, ou de ce qu'on appelle le catalanisme.",
      "La Catalogne se heurte à des règlements monarchiques et à des lois de réaction incompatibles avec son tempérament industriel. Soucieuse de sa puissance économique, elle réclame une autonomie qui se manifeste par des sentiments séparatistes accentués.",
      "Le gouvernement de la Régente a proclamé l'état de siège à Barcelone, mais une politique rigoureuse suffira-t-elle à enrayer un mouvement qui a des racines profondes ?"
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Terrible Explosion à Douai",
    "summary": "Une explosion dévastatrice dans l'estaminet Persiaux au hameau de Dorignies-lez-Douai a coûté la vie à Alexandre Aucuit et grièvement blessé Henri Cauchon. Une cartouche de dynamite dans le charbon est en cause.",
    "paragraphs": [
      "Une violente explosion a eu lieu hier soir au hameau de Dorignies-lez-Douai, dans la maison où est situé l'estaminet Persiaux.",
      "Les voisins ont trouvé, au milieu des débris, Henri Cauchon gravement blessé et le cadavre d'Alexandre Aucuit complètement défiguré. On suppose qu'une cartouche de dynamite aurait été oubliée dans le charbon."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Actualités",
    "title": "Nouvelles d'Extrême-Orient",
    "summary": "Le gouvernement japonais va restituer des fusils Mauser à la Chine. En Mandchourie, la lutte contre la piraterie continue, tandis qu'un complot contre les intérêts allemands au Shan-Toung a été déjoué.",
    "paragraphs": [
      "Le gouvernement japonais a l'intention de rendre au gouvernement chinois les fusils Mauser pris pendant la guerre sino-japonaise.",
      "On a découvert un complot pour empêcher les Allemands de construire un chemin de fer dans la province du Shan-Toung. En Mandchourie, le général Yu Hsiung lutte contre la piraterie sur la rivière Liao."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Régions",
    "title": "Les Fêtes de Dreux",
    "summary": "La ville de Dreux a inauguré un monument en l'honneur de Louis Terrier, ancien ministre du Commerce. La cérémonie, présidée par M. Deschanel, s'est prolongée par un banquet républicain au préau des écoles.",
    "paragraphs": [
      "Aujourd'hui a eu lieu à Dreux l'inauguration d'un monument élevé à la mémoire de Louis Terrier, ancien ministre du Commerce, en présence de M. Deschanel, président de la Chambre.",
      "Le cortège s'est rendu au pied du monument pour des discours officiels, suivis d'un banquet au préau des écoles où la bonne entente des républicains a été célébrée."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Régions",
    "title": "Inauguration de la Statue du Général Le Flô",
    "summary": "Lesneven honore le général Le Flô par une statue monumentale due au ciseau de Godebski. Le prince Orloff, représentant la Russie, a assisté à la cérémonie en hommage à l'éminent diplomate breton.",
    "paragraphs": [
      "La petite ville de Lesneven inaugure aujourd'hui la statue du général Le Flô. Cette œuvre du sculpteur Godebski représente le général en uniforme, rappelant ses services diplomatiques en Russie.",
      "Le prince Orloff, représentant l'ambassade de Russie, ainsi que de nombreuses personnalités militaires et politiques, ont assisté à la cérémonie en hommage à ce brillant officier et homme d'État breton."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Cérémonie",
    "title": "Inauguration du monument au général Le Flô",
    "summary": "Lesneven a rendu un solennel hommage au général Le Flô en présence du prince Ourousoff. Cette manifestation patriotique, célébrant l'alliance franco-russe, s'est conclue par un banquet de 150 convives.",
    "paragraphs": [
      "La présidence de la cérémonie, par suite de l'absence de M. Mignon, préfet du Finistère, est dévolue à M. Ménard, secrétaire général de la préfecture de Quimper.",
      "À deux heures, le cortège officiel, auquel s'est joint le général Hervé, escorté d'une brigade de gendarmerie et précédé de la musique du régiment de ligne, se rend à la tribune d'honneur située en face du monument.",
      "Le voile est enlevé pendant qu'est jouée la Marseillaise. Sur un haut piédestal apparaît le général Le Flô, debout, en grande tenue, la main reposant sur la garde de son épée.",
      "M. Soubigou, conseiller général de Lesneven, remet le monument à la ville au nom du Comité. Le maire, les représentants du gouvernement et le prince Ourousoff, ambassadeur de Russie, ont tour à tour rendu hommage au général Le Flô pour son rôle dans l'alliance franco-russe.",
      "La cérémonie s'est terminée par la remise des palmes académiques à M. Bernard, professeur au collège et secrétaire du Comité, suivie d'un banquet réunissant cent cinquante convives."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame de Houdeng-Aimeries",
    "summary": "À Houdeng-Aimeries, un mineur ivre met le feu à son domicile après une dispute conjugale. Tentant d'agresser ses beaux-parents, il est abattu par son beau-frère, Oscar Semaillé, qui s'est rendu aux autorités.",
    "paragraphs": [
      "À Houdeng-Aimeries, un ouvrier mineur nommé J.-B. Fromont, en état d'ivresse, a mis le feu à ses meubles après une violente dispute avec sa femme. Armé d'un couteau, il a tenté de forcer la porte du domicile de ses beaux-parents.",
      "Son beau-frère, Oscar Semaillé, s'étant présenté à la fenêtre, Fromont a levé sur lui son arme. Semaillé a fait feu et a abattu le forcené. Il s'est immédiatement constitué prisonnier auprès des autorités locales."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Naufrage du vapeur français Mocktar",
    "summary": "Le vapeur français Mocktar, en route pour Alger depuis Huelva, a sombré au large du cap Roche. L'équipage ainsi que les biens de valeur ont pu être sauvés par un navire naviguant dans les parages.",
    "paragraphs": [
      "Le vapeur français Mocktar, qui se dirigeait vers Alger depuis Huelva, a fait naufrage au cap Roche. L'équipage et les objets de valeur ont été secourus par un navire passant dans les mêmes parages."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Rectifications au Ministère de la Guerre",
    "summary": "Le Ministre de la Guerre dément les rumeurs concernant le passage des généraux Giovanninelli et Hervé devant le Conseil d'État, confirmant leur simple mutation vers d'autres postes actifs avec solde.",
    "paragraphs": [
      "Le Ministre de la Guerre dément formellement les informations selon lesquelles les généraux Giovanninelli et Hervé seraient traduits devant le Conseil d'État. Ces officiers généraux ont été simplement mutés à d'autres postes actifs et conservent intégralement leur solde d'activité."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Mutations de Généraux",
    "summary": "Mouvements au commandement militaire : le général de division Marcille est nommé à la défense de Verdun. De nombreuses autres affectations concernent divers officiers généraux de l'armée française.",
    "paragraphs": [
      "Plusieurs mouvements ont été annoncés dans le commandement militaire : le général de division Marcille est nommé commandant supérieur de la défense des places du groupe de Verdun.",
      "De nombreuses autres affectations concernent les généraux Penel, Texier de la Pommeraye, Le Bègue de Germiny, de Benoist, de Bellegarde, Poulleau, Niox, Kuyssen, de Girardin, Godfrey, Servière, Servat de Laisle, Heurtault de Lammerville, Perboyre, Menessier de la Lance, d'Amboix de Larbont et Doé de Maindreville."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Santé Publique",
    "title": "L'état sanitaire à Vincennes",
    "summary": "Les autorités démentent la rumeur d'une épidémie de typhoïde à la garnison de Vincennes. L'état de santé général des troupes est excellent, la mortalité étant inférieure aux années précédentes.",
    "paragraphs": [
      "La rumeur faisant état d'une grave épidémie de fièvre typhoïde au sein de la garnison de Vincennes est officiellement démentie. L'état sanitaire est excellent et la mortalité y est inférieure à celle des années précédentes.",
      "Les rares cas de décès enregistrés récemment sont isolés et ne présentent aucun caractère épidémique."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Cérémonie Patriotique",
    "title": "Inauguration du monument aux soldats de Bourbaki",
    "summary": "À Chenebier, une cérémonie solennelle a été célébrée pour l'inauguration du monument érigé à la mémoire des soldats de l'armée de Bourbaki, tombés héroïquement lors des combats de janvier 1871.",
    "paragraphs": [
      "Une cérémonie empreinte de recueillement a eu lieu à Chenebier pour l'inauguration du monument dédié aux soldats de l'armée de Bourbaki tombés lors des combats de janvier 1871. De nombreuses délégations civiles et militaires étaient présentes, incluant le général de Billy et les députés de la Haute-Saône, venus rendre un dernier hommage aux braves disparus."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Cérémonie Patriotique",
    "title": "Commémoration du Bourget",
    "summary": "La commune du Bourget a célébré avec ferveur l'anniversaire des combats de 1870, réunissant de nombreuses sociétés patriotiques devant l'ossuaire dédié aux héros tombés pour la défense de la patrie.",
    "paragraphs": [
      "Le Bourget a célébré l'anniversaire des combats de 1870. Une foule nombreuse et des délégations de sociétés patriotiques se sont réunies à l'ossuaire pour rendre hommage aux héros tombés lors de la prise du Bourget.",
      "Plusieurs discours ont été prononcés par des représentants de la municipalité et des associations, rappelant le courage du commandant Roland et insistant sur les valeurs patriotiques qui animent la nation."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le dé de la Reine de Siam",
    "summary": "Le roi de Siam a offert à son épouse un bijou d'une valeur inestimable : un dé à coudre orné de pierres précieuses, témoignant d'un faste royal inhabituel.",
    "paragraphs": [
      "Le roi de Siam a offert à son épouse, pour leur anniversaire de mariage, un dé à coudre en or enrichi de diamants, d'améthystes, de rubis, d'émeraudes et de topazes. Cet objet somptueux contraste singulièrement avec les mœurs impitoyables de la cour siamoise et les conditions de vie tragiques qui règnent au sein du sérail royal."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Social",
    "title": "Les Grèves dans le Doubs",
    "summary": "La tension demeure vive dans le département du Doubs où plusieurs mouvements de grève, notamment à Audincourt, Mandheure et Seloncourt, ont nécessité l'intervention des troupes de maintien de l'ordre.",
    "paragraphs": [
      "La situation reste particulièrement tendue dans le Doubs. À Audincourt, les dragons et les chasseurs à pied sont en poste pour assurer l'ordre. À Mandheure, la grève se poursuit avec persistance. À Seloncourt, un mouvement a été déclenché dans l'usine Hosotte après l'échec des négociations. Plusieurs condamnations ont déjà été prononcées par le tribunal correctionnel pour faits de grève."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Chronique",
    "title": "La Société parisienne de sauvetage",
    "summary": "La mairie du seizième arrondissement a accueilli la distribution des récompenses annuelles de la Société parisienne de sauvetage, marquée par l'inauguration d'un hommage à M. Marmottan.",
    "paragraphs": [
      "La distribution des récompenses annuelles de la Société parisienne de sauvetage a eu lieu à la mairie du seizième arrondissement, récompensant les actes de bravoure de l'année. À cette occasion, un haut-relief en marbre a été solennellement inauguré en hommage au dévouement du président honoraire, M. Marmottan."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Chronique",
    "title": "Société de gymnastique La Française",
    "summary": "La vingt-sixième fête annuelle de la société La Française s'est tenue hier au gymnase Piazza. Au programme : démonstrations d'appareils, remise de prix aux gymnastes et un banquet festif.",
    "paragraphs": [
      "La vingt-sixième fête annuelle de La Française s'est déroulée hier au gymnase Piazza. La cérémonie a été marquée par des démonstrations d'appareils et la remise de récompenses aux meilleurs gymnastes, suivie d'un banquet et d'un bal."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Chronique",
    "title": "Société de tir et de gymnastique En Avant",
    "summary": "La société En Avant a célébré sa fête de gymnastique au gymnase municipal Huygens, sous la présidence du maire d'arrondissement, avec des exercices sportifs suivis d'un bal.",
    "paragraphs": [
      "La société En Avant a tenu sa fête de gymnastique au gymnase municipal Huygens. Sous la présidence du maire de l'arrondissement, les membres ont réalisé divers exercices de sport et de chorégraphie, clôturés par un bal."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accidents divers et explosion",
    "summary": "Une série d'accidents tragiques a frappé la capitale, incluant une explosion de gaz au quai de la Tournelle, une chute mortelle lors d'une rixe rue Danton et un accident du travail fatal rue d'Ulm.",
    "paragraphs": [
      "Une explosion causée par une fuite de gaz au quai de la Tournelle a causé des blessures graves à plusieurs habitants.",
      "Un ouvrier maçon est décédé après une chute survenue lors d'une rixe sur un échafaudage rue Danton.",
      "Un accident mortel de travail a également eu lieu rue d'Ulm où un ouvrier a été tué par une poutre en fer."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Découverte d'ossements à la guerre",
    "summary": "Lors de travaux, des restes de soldats ensevelis durant la guerre ont été mis au jour. Le commissaire de police M. Mazurié a ordonné leur transfert vers le cimetière local.",
    "paragraphs": [
      "Le hasard a fait découvrir en cet endroit des restes de soldats ensevelis pendant la guerre.",
      "M. Mazurié, commissaire de police, aussitôt prévenu, a fait réunir ces ossements, qui ont été transportés au cimetière de la localité."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de travail à Aubervilliers",
    "summary": "À Aubervilliers, M. Arthur Leceent, ouvrier, a été grièvement blessé au crâne par une pince en fer lors de la pulvérisation de matières organiques. Il a été admis d'urgence à l'hôpital Lariboisière.",
    "paragraphs": [
      "À Aubervilliers, un ouvrier travaillant dans une usine de produits chimiques, rue de la Baie-Coq, M. Arthur Leceent, âgé de cinquante-sept ans, était occupé à surveiller hier matin la pulvérisation de matières organiques qu'il poussait entre deux rouleaux au moyen d'une forte pince en fer.",
      "Soudain, cette pince, prise entre les deux appareils, lui échappa, puis lui retomba sur la tête et lui brisa le crâne.",
      "C'est dans un état des plus alarmants qu'il a été admis d'urgence à l'hôpital Lariboisière."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Attaque nocturne dans la forêt de Saint-Germain",
    "summary": "Un colporteur de soixante-dix-sept ans, Jean-Louis Dénis, a été violemment agressé et dépouillé par quatre rôdeurs sur la route de Saint-Germain. La victime, grièvement blessée, a été hospitalisée.",
    "paragraphs": [
      "Une attaque nocturne a eu lieu cette nuit dans la forêt de Saint-Germain. Un colporteur, nommé Jean-Louis Dénis, âgé de soixante-dix-sept ans, suivait vers dix heures du soir la route de Saint-Germain, venant de Poissy.",
      "Arrivé au passage à niveau du chemin de fer de Grande Ceinture, se sentant fatigué, il s'assit sur le talus bordant la route.",
      "Il y était à peine depuis quelques instants lorsque quatre rôdeurs, qui l'avaient suivi depuis Poissy, se ruèrent sur lui. Pendant que l'un lui couvrait la bouche pour l'empêcher de crier, les trois autres dévalisaient le malheureux vieillard et lui enlevaient une somme de deux cents francs ainsi que sa boîte de marchandises contenant de la coutellerie et des articles de quincaillerie, puis tous prenaient la fuite.",
      "Le colporteur perdit connaissance, et ce n'est qu'hier matin, vers cinq heures, qu'il put se rendre au commissariat de police pour y faire sa déclaration.",
      "Le pauvre vieux était dans un état tel qu'on dut le faire transporter à l'hôpital, où il fut admis d'urgence.",
      "M. Marty, commissaire de police, a aussitôt ouvert une enquête et fait rechercher les coupables, dont la victime n'a pu donner que des signalements très vagues."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de bicyclette à Paris",
    "summary": "M. Herbier, cuisinier au café du Débarcadère, a été victime d'une chute grave à bicyclette rue de Pologne. Il souffre d'une fracture de la jambe et a été admis à l'hôpital.",
    "paragraphs": [
      "Vers sept heures du matin, hier, M. Herbier, âgé de quarante-six ans, cuisinier au café du Débarcadère, demeurant 57, rue de Pologne, est tombé de bicyclette dans cette rue et s'est brisé une jambe. Il a été transporté à l'hôpital.",
      "Son état, quoique grave, n'inspire aucune inquiétude."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame agricole à Bannières",
    "summary": "Le jeune charretier Auguste Héard, âgé de seize ans, a tragiquement succombé après avoir reçu un coup de pied mortel de l'un de ses bœufs lors d'un transport près de Vernon.",
    "paragraphs": [
      "Bannières. Le jeune Auguste Héard, âgé de seize ans, charretier chez M. Gente, agriculteur, conduisait, hier, un chargement traîné par quatre bœufs. Près de Vernon, le jeune homme reçut de l'une de ses bêtes un coup de pied au ventre.",
      "Gravement atteint, il fut transporté aussitôt chez son patron, où il ne tarda pas à succomber."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de tramway à Montlhéry",
    "summary": "Un violent choc entre un tramway et une voiture hippomobile a gravement blessé le conducteur, Joseph Mailescut, projeté sous l'effet de l'impact. Le pronostic médical est réservé.",
    "paragraphs": [
      "Montlhéry. Le train-tramway n° 8, venant de Marcoussis, a tamponné, hier, la voiture de M. Gagniepain, cultivateur, conduite par le nommé Joseph Mailescut, âgé de vingt et un ans.",
      "Sous le choc, le cheval a renversé le conducteur, qu'on a relevé évanoui et couvert de multiples contusions.",
      "Le blessé a été transporté à l'hôpital de Montlhéry, où l'on considère son état comme très grave. Le véhicule a été fortement endommagé."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Départements",
    "title": "Manifestation patriotique à Beauvais",
    "summary": "Le Souvenir français a rendu hommage aux enfants de Beauvais morts pour la patrie lors d'une cérémonie officielle au cimetière, marquée par l'inauguration d'une plaque commémorative.",
    "paragraphs": [
      "Beauvais. L'Association du Souvenir français avait organisé pour aujourd'hui, au cimetière, une manifestation patriotique en l'honneur des enfants de Beauvais morts pour la patrie.",
      "Après la réception à la mairie des délégués parisiens de l'Association, le cortège s'est rendu au cimetière, où des discours ont été prononcés devant le monument commémoratif. À deux heures a eu lieu la remise officielle, par le Comité beauvaisien du Souvenir français, d'une plaque commémorative portant les noms de douze soldats défunts. Cette plaque sera placée sur une des faces du monument."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Départements",
    "title": "Cas de fièvre jaune à Saint-Nazaire",
    "summary": "Le paquebot Navarre, en provenance de la Vera-Cruz et de la Havane, est en quarantaine à Saint-Nazaire après que plusieurs décès suspects par fièvre jaune ont été constatés parmi les passagers et l'équipage.",
    "paragraphs": [
      "Saint-Nazaire. Le paquebot Navarre, qui vient d'arriver de la Vera-Cruz et de la Havane, a déploré pendant la traversée un décès causé par la fièvre jaune. Un second décès s'est produit en rade, et un passager est maintenu dans un état grave à bord.",
      "L'ensemble des autres passagers a été transféré au lazaret de Mindin et le navire a été immédiatement placé en quarantaine."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "La Température",
    "title": "Bulletin météorologique du 30 octobre",
    "summary": "Le 30 octobre, le temps se dégrade sur l'Europe. Une dépression sur la Norvège et l'Irlande provoque des vents de tempête et des pluies sur le nord et l'ouest de la France, marquant un refroidissement général.",
    "paragraphs": [
      "Lundi 30 octobre, 303e jour de l'année, 41e jour de l'automne.",
      "Hier, après une matinée ensoleillée, le ciel s'est assombri près d'une heure durant sous d'épais nuages et le soleil est resté masqué le restant de la journée.",
      "La situation demeure perturbée dans le nord de l'Europe ; une profonde dépression aborde la Norvège, tandis qu'une autre s'avance vers les côtes occidentales d'Irlande, où le baromètre accuse une baisse. Des pressions élevées persistent sur la moitié sud du continent.",
      "Le vent souffle en tempête du sud-ouest. Des pluies ont arrosé le nord, le centre et l'ouest de l'Europe. En France, on a recueilli 8 mm d'eau à Besançon, 5 à Nancy et 0,4 mm à Paris.",
      "La température est en baisse sur nos régions du nord et de l'ouest."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Revue Commerciale",
    "title": "Rapport sur les grains, farines et matières premières",
    "summary": "Les semailles progressent dans de bonnes conditions. Le marché des farines reste calme, tandis que les cours des huiles et des sucres se raffermissent. La qualité médiocre des houblons maintient les prix fermes.",
    "paragraphs": [
      "Grains et farines. Les semailles se poursuivent dans des conditions très favorables. Elles sont achevées, ou peu s'en faut, dans le centre et la Beauce ; toutefois, dans la région de Paris et du nord, on attend que l'arrachage des betteraves soit terminé.",
      "Sur notre place, les affaires concernant les farines de commerce sont demeurées très calmes et les prix ont peu varié sur le courant. Les blés du marché de Paris ont suivi la tendance des farines.",
      "Huiles. Les huiles de colza ont fait l'objet de quelques transactions ; le cours a légèrement haussé, mais le livrable éloigné demeure plus faible.",
      "Sucres. Le rendement cultural est supérieur, dans l'ensemble, à celui de l'an dernier. Sur notre place, les affaires ont été peu actives ; néanmoins, les prix se sont légèrement relevés depuis trois jours.",
      "Houblons. En raison de la rareté des houblons fins et de bonne qualité, les prix demeurent fermes. La quantité récoltée est plus que suffisante, mais la qualité étant très défectueuse, le rendement en houblons véritablement bons et utilisables se trouve considérablement réduit."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Causerie Financière",
    "title": "La fermeté du marché financier",
    "summary": "La cote affiche une remarquable fermeté, portée par le succès des mines d'or et une détente monétaire, alors que l'approche de la liquidation mensuelle stimule les rachats sur les valeurs de spéculation.",
    "paragraphs": [
      "La brillante attitude des mines d'or à Paris et à Londres, la détente monétaire qui semble dominer sur la plupart des places étrangères, l'absence de toute probabilité de complication politique entre les grandes puissances européennes, mais surtout l'approche de la liquidation qui s'ouvre le 30 par la réponse des primes, ont contribué à donner à l'ensemble de la cote une remarquable fermeté.",
      "Les vendeurs de primes sur nos rentes et sur certaines valeurs de spéculation, qui avaient cédé des titres à de faibles écarts, voient leurs ventes sur le point d'être débordées, et leurs rachats accélèrent la hausse des cours.",
      "Par ailleurs, on prévoit que l'argent sera abondant et que le prix des reports restera relativement modéré."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Économie",
    "title": "L'emprunt municipal du Métropolitain",
    "summary": "La Ville de Paris lancera le 18 novembre l'emprunt pour le chemin de fer métropolitain. Cette émission d'obligations vise à associer la petite épargne à cette œuvre d'intérêt général pour la capitale.",
    "paragraphs": [
      "Profitant à juste titre des conditions favorables du marché financier, la Ville de Paris a fixé au 18 novembre l'emprunt municipal destiné au chemin de fer métropolitain.",
      "La Ville de Paris s'est chargée d'effectuer elle-même les travaux d'infrastructure de ce chemin et, par une loi du 4 avril 1898, elle a été autorisée à contracter un emprunt de 165 millions, garanti par une redevance minimale de 0 fr. 05 par billet de voyageur, imposée à la Société concessionnaire de l'exploitation.",
      "Ce chemin de fer rendra de tels services à la population parisienne que les bénéfices de son exploitation ont déjà été largement escomptés par les capitalistes. Pour permettre à la petite épargne de participer à cette œuvre grandiose, la Ville de Paris a décidé l'émission d'obligations dont les avantages sont de nature à assurer un succès franc et légitime."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Sciences et Faits Divers",
    "title": "La production artificielle du diamant",
    "summary": "M. le professeur Henri Moissan a récemment conduit à Paris des expériences novatrices, utilisant un haut fourneau électrique pour tenter de synthétiser le diamant à partir du carbone.",
    "paragraphs": [
      "L'étude de la nature du diamant n'a jamais été plus poussée que de nos jours. Tout récemment, M. le professeur Henri Moissan a fait, à Paris, des expériences sur la production artificielle du diamant, dans un haut fourneau électrique construit tout spécialement à cet effet."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Chronique Littéraire",
    "title": "Une transmutation mystérieuse",
    "summary": "Un récit évoque les travaux d'un savant anglais sur la transmutation des métaux, interrogeant la frontière entre le fait scientifique avéré et l'imaginaire alchimique.",
    "paragraphs": [
      "Un écrivain anglais bien connu raconte l'histoire d'un homme qui, s'emparant un jour d'un saumon de plomb, le soumit à un courant électrique d'une intensité extraordinaire. Au bout de quelques minutes, tout le plomb était fondu et changé en pur mercure ou vif-argent. Puis le mercure se transforma en platine, qui à son tour devint de l'or pur.",
      "Quelque extraordinaire que soit chacun de ces deux procédés, personne ne peut assurément prétendre qu'il soit absurde ou même impossible."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Faits Divers",
    "title": "Témoignage sur la Tisane américaine des Shakers",
    "summary": "Mme Magrez, habitante de Néry, témoigne de sa guérison radicale après avoir consommé la Tisane américaine des Shakers, un remède introduit en France par le pharmacien Fanyau.",
    "paragraphs": [
      "Pendant deux ans, nous dit une correspondante, je ressentis fréquemment de vives douleurs dans le dos, et il m'arriva souvent d'avoir dans une seule journée cinq ou six attaques de vertige. Je consultai plusieurs médecins, mais leurs remèdes restèrent sans effet.",
      "Un jour, j'entendis vanter l'efficacité de la Tisane américaine des Shakers, introduite en France par M. Fanyau, pharmacien à Lille. Trois flacons ont suffi à me guérir radicalement, et depuis cette époque je n'ai plus jamais ressenti le vertige ni la prostration nerveuse.",
      "Signé : Mme Magrez, à la sucrerie de Néry (Oise), le 30 octobre. La signature ci-dessus a été légalisée par M. Parant, maire de Néry."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Récit",
    "title": "L'entrevue entre Isidore Ledru et le baron",
    "summary": "Le jeune baron Théodore de Valmondois sollicite les services financiers de l'homme d'affaires Isidore Ledru. Malgré sa jeunesse, le baron manifeste un cynisme saisissant.",
    "paragraphs": [
      "Monsieur le baron Théodore de Valmondois interrogea Ledru lui-même et en personne. « Veuillez donc prendre ce fauteuil, monsieur le baron », dit Ledru. « L'objet de ma visite, monsieur, fit-il, est, je crois, connu de vous. Ernest, le valet de pied de ma mère, m'a dit que vous étiez une providence pour les fils de famille à court d'argent. »",
      "L'homme d'affaires regarda longuement son visiteur. C'était un garçon de quinze ans, mais paraissant plus jeune encore. Il était vêtu avec une élégance d'un goût douteux, complet de drap gris clair, cravate rouge dans laquelle luisait une épingle de turquoise.",
      "Le jeune baron cherchait à obtenir un prêt, mais Ledru, exigeant des garanties sérieuses, refusa la signature de mineur. La conversation glissa alors sur les origines familiales du jeune baron, ce dernier exprimant un cynisme marqué sur la vie privée de sa mère."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Justice",
    "title": "Condamnation pour falsification de lait",
    "summary": "Le Tribunal de première instance de la Seine a condamné M. Bargnier, chef de dépôt, à une amende pour falsification de lait par écrémage et ajout illicite de formol.",
    "paragraphs": [
      "Extrait des minutes du greffe du Tribunal de 1ère instance du département de la Seine. M. Bargnier, chef de dépôt de laiterie, prévenu de falsification de lait, civilement responsable : Gendreaux, laitier à Paris.",
      "Le Tribunal a condamné Bargnier à cinquante francs d'amende et a ordonné la confiscation du lait saisi, pour avoir falsifié du lait par écrémage et addition de formol."
    ]
  }
];
