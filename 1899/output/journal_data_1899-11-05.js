// Date: 1899-11-05
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-11-05 (Version Restaurée, 38 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Le Métier de Médecin",
    "summary": "Une réflexion sur la noblesse du métier de médecin, confrontée à une crise profonde : l'encombrement de la profession, la précarité des débutants et l'impact des progrès de l'hygiène sur la pratique médicale.",
    "paragraphs": [
      "Parmi les professions libérales, il n'en est point de plus noble et de plus bienfaisante que celle de médecin. C'est devenu, auprès du public éclairé de notre temps, un lieu commun de vanter tant la science que le dévouement de notre admirable corps médical, dont d'éclatantes découvertes ou des actes d'héroïsme viennent presque chaque année rehausser la gloire et le mérite.",
      "Depuis les docteurs éminents de nos hôpitaux, qui ne se font dignement rémunérer par leur clientèle riche que pour pouvoir donner gratuitement leurs soins aux humbles populations, jusqu'au médecin de campagne dont la vie est plus rude souvent que celle du laboureur qu'il soulage, tous apportent à l'accomplissement de leur tâche de vie un zèle qui va parfois jusqu'au sacrifice.",
      "Et voilà maintenant qu'un nouvel obstacle à l'exercice du métier de médecin nous est révélé : la difficulté menaçante que les jeunes gens qui s'y consacrent rencontrent à gagner leur vie. Non seulement le sacerdoce médical exige beaucoup de capacités, mais cet implacable ennemi, la misère, y guette les débutants.",
      "L'encombrement croissant de la carrière est la cause du mal. Depuis dix ans, le nombre des étudiants en médecine a doublé. À l'heure actuelle, il y a environ 8 485 étudiants répartis dans les différentes Facultés de France.",
      "Partout s'élèvent des plaintes, partout se fait sentir la crise que traverse cette classe de travailleurs intellectuels de notre fin de siècle. En province, sur 10 000 médecins, à peine la moitié gagnent convenablement leur vie. Quant aux médecins parisiens, la moitié environ gagne moins de 8 000 francs par an.",
      "Une autre cause devait précipiter la crise : la diminution de la fréquence et de la nocivité de certaines maladies grâce aux progrès de l'hygiène et de la thérapeutique, comme pour la diphtérie ou la fièvre typhoïde. Ces progrès diminuent évidemment la besogne des médecins et compliquent l'embarrassante situation où les met leur propre expansion."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "La Charmeuse d'Enfants - XV (suite)",
    "summary": "Le fils de la coupable est tourmenté par le spectre de sa mère et les menaces de Soubise, le garde, qui cherche à révéler son implication supposée dans le meurtre de Girodias.",
    "paragraphs": [
      "Le fantôme de sa mère, coupable deux fois — coupable il y a seize ans et coupable, sans doute, du meurtre de Girodias — passa devant les yeux du fils terrifié. Soubise, le garde, menaçait Roland de tout révéler au Parquet concernant le meurtre de Girodias, affirmant que le comte était lié à cette sombre affaire.",
      "Roland niait, soutenant que le séducteur de Michelle était Girodias lui-même, désormais mort. Mais Soubise, l'esprit détraqué par le chagrin, persistait dans ses accusations, refusant de croire à l'innocence de Roland et le menaçant de dévoiler les secrets de sa famille."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "International",
    "title": "La Guerre au Transvaal",
    "summary": "L'incertitude plane sur les opérations dans le Natal alors que Ladysmith demeure assiégée. Tandis que le War Office attend des nouvelles, des sabotages sont signalés dans la colonie du Cap.",
    "paragraphs": [
      "On n'a aucune nouvelle précise sur les dernières opérations qui ont eu lieu ces cinq derniers jours dans le Natal. Tout fait supposer que le gros des forces boërs continue à assiéger Ladysmith, pendant qu'une colonne a réussi à s'emparer de Colenso.",
      "La situation du général White devient de jour en jour plus périlleuse. Si des rumeurs de capitulation circulent, le War Office, à Londres, n'a reçu aucune confirmation officielle et ne semble pas céder à l'anxiété.",
      "Des mouvements de troupes et des actes de sabotage sur les ponts et voies ferrées sont signalés dans la colonie du Cap, où l'état de siège pourrait être prochainement proclamé."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Informations Politiques",
    "title": "La Convocation des Chambres et Budget de la Guerre",
    "summary": "Le décret de convocation du Sénat et de la Chambre pour le 14 novembre est paru au Journal officiel. La Commission du Budget a clôturé l'examen des dépenses militaires, actant plusieurs réductions.",
    "paragraphs": [
      "Le Journal officiel a publié hier le décret convoquant le Sénat et la Chambre des députés pour le 14 novembre.",
      "Par ailleurs, l'examen du budget de la Guerre a été terminé hier par la Commission du Budget. Il a été opéré un certain nombre de réductions, notamment sur les chapitres relatifs aux stagiaires de l'état-major et au service de la remonte."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un omnibus tamponné",
    "summary": "Une collision violente place de la Concorde entre un tramway et un omnibus a fait deux blessés graves, dont un souffre d'une fracture de la jambe et l'autre de blessures au visage.",
    "paragraphs": [
      "Hier soir, à neuf heures trente-cinq, un train-tramway de la ligne Versailles-Louvre a tamponné, place de la Concorde, un omnibus faisant le service entre la gare des Batignolles et la gare Montparnasse. Deux voyageurs ont été blessés, dont l'un a eu le nez arraché et l'autre la jambe fracturée."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Terrible noyade sur l'Escaut",
    "summary": "La catastrophe de la passerelle de Waes s'aggrave. Avec quinze décès désormais confirmés et un bilan qui menace de s'alourdir, le pays tout entier est bouleversé par le récit tragique des rescapés de ce naufrage.",
    "paragraphs": [
      "De nouveaux détails nous parviennent sur la catastrophe de Waes. La passerelle rompue demeure toujours submergée et le bilan ne cesse de s'alourdir. Quinze décès sont désormais officiellement confirmés, mais le nombre définitif des victimes pourrait être bien plus élevé.",
      "Un survivant a livré le récit du chaos lors du naufrage, décrivant la panique effroyable qui s'est emparée des passagers au moment où le pont a cédé sous leur poids. L'émotion causée par cette funeste catastrophe est intense dans le pays tout entier."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Justice",
    "title": "La Haute-Cour",
    "summary": "Le procès devant la Haute-Cour s'organise sous la direction de M. Fallières. L'acte d'accusation dénonce une machination politique visant le gouvernement, tandis que le préfet Lépine témoigne sur les troubles d'août.",
    "paragraphs": [
      "Le président de la Haute-Cour, M. Fallières, a reçu les avocats des accusés. Cette entrevue a permis de régler diverses questions matérielles, notamment l'organisation des accès aux audiences. L'arrêt de mise en accusation a été notifié aux inculpés, et ce volumineux document se trouve désormais entre les mains de la défense.",
      "Le procureur général justifie l'acte d'accusation en évoquant un complot concerté entre les factions royalistes, antisémites et nationalistes afin de renverser le gouvernement. Le préfet de police, M. Lépine, a également été entendu concernant les violentes manifestations survenues au mois d'août dernier."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Le Tsar à Potsdam",
    "summary": "L'arrivée du Tsar à Berlin est officiellement fixée au 17 novembre. Il sera accueilli à la gare par l'empereur Guillaume, avant de partager un dîner privé en compagnie des Impératrices et du prince de Hohenlohe.",
    "paragraphs": [
      "La date de l'arrivée du Tsar à Berlin est désormais connue : c'est le 17 novembre, à dix heures du matin, qu'il sera accueilli solennellement par l'empereur Guillaume à la gare.",
      "Un dîner tout intime réunira les deux souverains, les deux Impératrices ainsi que le prince de Hohenlohe."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Tempêtes en Angleterre et en Irlande",
    "summary": "Des tempêtes d'une violence inouïe ravagent l'Écosse et l'Irlande, causant des inondations désastreuses et des pertes matérielles considérables. À Dublin, la furie des éléments a provoqué accidents et coupures réseau.",
    "paragraphs": [
      "On signale de graves inondations dans le sud de l'Écosse ; des milliers d'acres sont submergés par les eaux, et un grand nombre de bétail a péri.",
      "À Dublin, la tempête d'hier a causé des dommages considérables. Plusieurs personnes ont été blessées ; le cocher d'un corbillard, violemment projeté à bas de son siège par une bourrasque, a eu le crâne fracturé, tandis qu'une voiture de deuil a été totalement renversée.",
      "Les communications téléphoniques et télégraphiques demeurent désorganisées à travers toute l'Irlande."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Social",
    "title": "Les grèves dans l'Est",
    "summary": "Le conflit social chez Peugeot persiste malgré la reprise du travail. Après les revendications salariales, le débat se déplace sur la fixation d'un maximum de journée, tandis que les réunions syndicales se multiplient.",
    "paragraphs": [
      "Les membres du bureau du Syndicat de Valentigney-Beaulieu ont présenté à M. Armand Peugeot leurs revendications concernant le minimum de la journée de travail, fixé à 5 francs.",
      "La direction de l'usine a fait remarquer qu'un certain nombre d'ouvriers gagnaient déjà de 7 à 8 francs par jour. Dans ces conditions, puisque les ouvriers imposaient leurs exigences, l'usine a souhaité établir à son tour un maximum de salaire journalier, fixé à 5 ou 6 francs. Les ouvriers ont, pour l'heure, repris le travail.",
      "À Audincourt, une nouvelle réunion a été organisée, durant laquelle M. Marcel Sembat a pris la parole pour prononcer un discours des plus mesurés.",
      "À Pont-de-Roide, 21 ouvriers et ouvrières sur un total de 600 grévistes ont regagné l'usine Verte."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Activités présidentielles et diplomatiques",
    "summary": "Le Président de la République a pris part à une chasse à Marly en l'honneur du corps diplomatique. Par ailleurs, un banquet ministériel a célébré l'Union coloniale et les sociétés de géographie et d'industrie.",
    "paragraphs": [
      "Le Président de la République, accompagné par M. Waldeck-Rousseau, président du Conseil, est allé chasser hier à Marly, où avait lieu une battue organisée en l'honneur des membres du corps diplomatique.",
      "Hier soir a eu lieu à l'hôtel Continental, sous la présidence de M. Étienne, député, le banquet organisé par l'Union coloniale, la Société d'économie industrielle et la Société de géographie en l'honneur de MM. Delcassé, ministre des Affaires étrangères, de Lanessan, ministre de la Marine, et Decrais, ministre des Colonies."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Délégation de la Ligue Paris-Banlieue auprès du Ministre",
    "summary": "Une délégation de la Ligue Paris-Banlieue a exposé au ministre des Travaux publics, M. Pierre Baudin, les besoins urgents en infrastructures ferroviaires et l'entretien nécessaire des routes périphériques.",
    "paragraphs": [
      "M. Pierre Baudin, ministre des Travaux publics, a reçu hier matin une délégation de la Ligue Paris-Banlieue présentée par MM. Alexandre Lefèvre, Strauss et Maurice Berteaux.",
      "La délégation a insisté sur la nécessité de doubler les voies ferrées de la ligne d'Orléans jusqu'à Brétigny, la création de tramways de pénétration et de trains ouvriers jusqu'à Saint-Germain et Herblay, ainsi que sur l'état déplorable des routes nationales."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Informations",
    "title": "Inauguration de la statue de Ferdinand de Lesseps à Port-Saïd",
    "summary": "La statue de Ferdinand de Lesseps sera inaugurée à Port-Saïd le 17 novembre. Le Khédive sera présent, accompagné d'une délégation de cent cinquante invités arrivant par le paquebot l'Oxus.",
    "paragraphs": [
      "C'est le 17 novembre prochain que sera inaugurée à Port-Saïd la statue de Ferdinand de Lesseps. Le Khédive assistera officiellement à cette cérémonie.",
      "Le 11 novembre, l'Oxus, paquebot des Messageries maritimes, quittera Marseille avec cent cinquante invités pour assister à cette inauguration."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Échos",
    "title": "Une petite scène de rue",
    "summary": "Une brève scène de rue où un passant bien intentionné se voit rabroué par un ivrogne préférant chuter par ses propres moyens.",
    "paragraphs": [
      "Dans la rue, un passant essaie par mégarde d'aider un ivrogne qui festonne sur le trottoir. « Pas la peine de me pousser, dit le bon poivrot, je tomberai bien tout seul. »"
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Culture",
    "title": "La séance annuelle de l'Académie des Beaux-Arts",
    "summary": "Sous la présidence de M. Jules Lefebvre, l'Académie des Beaux-Arts a tenu sa séance solennelle, marquée par des hommages académiques et la remise des Grands Prix de Rome.",
    "paragraphs": [
      "La séance publique annuelle de l'Académie des Beaux-Arts a eu lieu hier sous la coupole de l'Institut, présidée par M. Jules Lefebvre.",
      "Le discours inaugural a rendu hommage à la mémoire de MM. Georges Duplessis, le marquis de Chennevières et le comte Henri Delaborde.",
      "La séance a été marquée par la remise des Grands Prix de Rome en peinture, sculpture, architecture et gravure, ainsi que par une conférence consacrée à l'architecte Charles Garnier."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Arts",
    "title": "Une exposition de céramique",
    "summary": "Le céramiste Lachenal inaugure aujourd'hui rue de Saxe une exposition rassemblant des œuvres de sculpteurs renommés, dont Sarah Bernhardt, mettant en valeur des grès aux formes et éclats remarquables.",
    "paragraphs": [
      "L'exposition annuelle du céramiste Lachenal et des sculpteurs qu'il a groupés autour de lui ouvre aujourd'hui, rue de Saxe. On y trouve des œuvres de Pallez, Massoulle, Max Blondat et Sarah Bernhardt.",
      "Les grès de M. Lachenal se distinguent par des formes nouvelles, des flammés et des couverts d'un éclat remarquable."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un précoce sauveteur",
    "summary": "Un cheval attelé à un fiacre s'est emballé hier rue du Havre. Malgré la chute brutale du cocher, un jeune garçon a fait preuve d'une bravoure exemplaire en arrêtant net l'animal, évitant ainsi un accident grave.",
    "paragraphs": [
      "Un cheval attelé à un fiacre s'est emballé, hier, rue du Havre. Le cocher a été projeté sur le pavé, mais la foule a fait une ovation à un jeune sauveteur qui, au péril de sa vie, a réussi à stopper la course folle de l'animal."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Détournements dans une maison de commerce",
    "summary": "La maison Rayman, située rue de Choiseul, a été victime de détournements dépassant les 100 000 francs. Deux employés, Charles Robert et Charles Bureau, ont été arrêtés après quatre années de larcins systématiques.",
    "paragraphs": [
      "La maison Rayman, située rue de Choiseul, a été victime de détournements de marchandises s'élevant à plus de 100 000 francs. Le chef de l'atelier, Charles Robert, secondé par Charles Bureau, dérobait des pièces depuis quatre ans.",
      "Robert, arrêté après une vaine tentative de fuite, avait impudemment abusé de la confiance de ses patrons."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrêtée au théâtre",
    "summary": "La nommée Louise Lacoste, domestique, a été appréhendée hier soir au théâtre des Nouveautés. Elle fut démasquée par son ancienne maîtresse, Mme Bartel, alors qu'elle arborait une robe dérobée au domicile de celle-ci.",
    "paragraphs": [
      "Une domestique, nommée Louise Lacoste, a été arrêtée hier soir en plein théâtre des Nouveautés. Elle portait, pour assister à la représentation, une robe précieuse volée à son ancienne patronne, Mme Bartel, qui l'a formellement reconnue."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Mort de peur",
    "summary": "Un accident singulier a coûté la vie à l'ouvrier couvreur Eugène Vermel. Bien qu'il fût resté suspendu sans blessure apparente après une chute, le choc émotionnel intense a provoqué son décès à l'hôpital.",
    "paragraphs": [
      "Eugène Vermel, ouvrier couvreur, a fait une chute de toit alors qu'il était au travail. Bien qu'il soit resté suspendu aux cordages, indemne de toute blessure, il est décédé une heure après son admission à l'hôpital, terrassé par le choc émotif."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Meurtre boulevard de la Villette",
    "summary": "Le sieur Michel Peuch, ouvrier menuisier, a été frappé mortellement par un inconnu sur le boulevard de la Villette. Les autorités procèdent actuellement à des recherches actives pour retrouver l'auteur du forfait.",
    "paragraphs": [
      "Michel Peuch, ouvrier menuisier, a été mortellement blessé par un inconnu boulevard de la Villette, dans le courant de la soirée. La police judiciaire recherche activement l'auteur de ce crime sanglant."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits Divers",
    "title": "Coups de revolver au Parvis-Notre-Dame",
    "summary": "Un jeune camelot, le nommé François Palisse, a ouvert le feu à deux reprises sur un ouvrier maçon, Charles Lemeur, sur la place du Parvis-Notre-Dame. L'agresseur a été promptement arrêté par les forces de l'ordre.",
    "paragraphs": [
      "Un camelot âgé de vingt ans, nommé François Palisse, a fait usage d'un revolver à deux reprises sur un ouvrier maçon, Charles Lemeur, sur la place du Parvis-Notre-Dame. L'agresseur, interpellé sur-le-champ, a été conduit au poste par les agents de la force publique."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits Divers",
    "title": "Autour de Paris",
    "summary": "La chronique des faits divers en banlieue rapporte divers drames : une chute mortelle à Suresnes, la découverte d'un corps à Clichy, une noyade à Andrésy et l'évasion de jeunes détenus à Saint-Germain-en-Laye.",
    "paragraphs": [
      "À Suresnes, un sexagénaire a succombé à ses blessures après une chute accidentelle survenue hier. À Clichy, le corps de l'époutier Charoli a été découvert et formellement identifié dans un égout de la commune.",
      "À Andrésy, un batelier a péri par noyade dans les eaux du fleuve. Par ailleurs, à Saint-Germain-en-Laye, quatre jeunes détenus sont parvenus à s'évader de la colonie pénitentiaire dans la nuit."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Actualité locale",
    "title": "Événements à Boulogne et Tavry",
    "summary": "La journée d'hier fut marquée par l'exposition de chrysanthèmes à Boulogne, tandis qu'un incendie survenu chez M. Saint-Félix, à Tavry, a occasionné des dégâts matériels considérables.",
    "paragraphs": [
      "L'exposition annuelle de chrysanthèmes de Boulogne a attiré une foule nombreuse hier. À Tavry, un violent incendie s'est déclaré en la demeure de M. Saint-Félix, causant des pertes matérielles très importantes à l'habitation."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Crues et Inondations",
    "title": "Les inondations dans les départements",
    "summary": "Des pluies diluviennes entraînent des crues préoccupantes dans plusieurs départements, notamment dans le Puy-de-Dôme et l'Ardèche, causant des dommages matériels significatifs sur leur passage.",
    "paragraphs": [
      "De fortes et incessantes pluies ont provoqué des crues considérables dans les départements du Puy-de-Dôme, de la Haute-Loire, de l'Ardèche, du Gard et du Vaucluse.",
      "À Clermont-Ferrand, les eaux de l'Allier sont montées de quatre mètres. À Privas, l'Ardèche atteint une cote de deux mètres au-dessus de l'étiage habituel. Des dégâts matériels très importants sont signalés un peu partout dans ces contrées."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accidents mortels en province",
    "summary": "Deux accidents tragiques sont survenus en province : un puisatier a péri dans une excavation à Châteaudun, tandis qu'à Montargis, un cultivateur a été mortellement écrasé par la roue de sa propre voiture.",
    "paragraphs": [
      "À Châteaudun, un puisatier a été retrouvé sans vie au fond d'une excavation.",
      "À Montargis, un cultivateur nommé Charles Chaton a trouvé la mort, écrasé par la roue de sa propre voiture."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Météorologie",
    "title": "Bulletin météorologique",
    "summary": "Le bulletin météorologique signale des éclairs au cap Croisette et une hausse des températures sur les sommets. La France connaît une météo douce sur les côtes de la mer du Nord.",
    "paragraphs": [
      "Des éclairs ont été observés au cap Croisette. La température est en hausse au mont Aigoual, au Puy-de-Dôme ainsi qu'au Pic-du-Midi.",
      "En France, un temps doux est encore constaté sur le littoral de la mer du Nord et sur la côte bretonne.",
      "Observations atmosphériques du samedi : le thermomètre marquait ce matin 16° au-dessus de zéro, 18° à midi et 14° à minuit."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Littérature",
    "title": "À lire : La force et son avenir",
    "summary": "Présentation d'un ouvrage traitant des réformes préconisées par l'auteur face à Paul Doumer, explorant les enjeux politiques et sociétaux de l'avenir.",
    "paragraphs": [
      "Dans cet ouvrage dédié à la figure de Paul Doumer, l'auteur expose quelques-unes des réformes qu'il souhaiterait voir aboutir pour l'avenir du pays."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Économie",
    "title": "Marché des fourrages",
    "summary": "Le marché des fourrages enregistre une arrivée importante de marchandises. On note une hausse du cours de la paille de blé tandis que les prix sont fixés à 6 francs pour le foin et 2 francs 40 pour la paille.",
    "paragraphs": [
      "Arrivée de 95 voitures de paille et 20 de foin sur le marché. Une hausse est constatée sur la paille de blé.",
      "Le cours des fourrages est établi à 6 francs pour le foin et 2 francs 40 pour la paille, tous droits d'entrée compris."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Vie culturelle",
    "title": "Jardin Zoologique d'Acclimatation",
    "summary": "Le Jardin Zoologique d'Acclimatation annonce un grand festival musical avec le concours d'artistes renommés, proposant un programme riche entre ballet et œuvres magistrales de Richard Wagner.",
    "paragraphs": [
      "Un grand festival est organisé avec le précieux concours de MM. Muratet, Déroziers et Péder-Moller.",
      "La première partie du concert sera consacrée à des airs de ballet et au concerto pour violon de Max Bruch.",
      "La deuxième partie mettra à l'honneur les œuvres de Richard Wagner, incluant des extraits de Tristan et Iseult, Les Maîtres Chanteurs, Le Vaisseau Fantôme et Tannhäuser."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Feuilleton",
    "title": "Le Lieutenant Jacques Châtel - XIV",
    "summary": "Gontran, en plein songe, écoute les confidences d'Isidore Ledru. Ce dernier détaille les ambitions de l'héritière américaine Minnie Jefferson, prête à verser une fortune pour acquérir un titre par un mariage arrangé.",
    "paragraphs": [
      "Dix millions de dot ! Un long silence s'ensuivit ; Gontran fermait les yeux et croisait les mains, songeur.",
      "Isidore Ledru exposa alors à Gontran les intentions de la jeune Américaine, Minnie Jefferson, qui, avide d'acquérir un titre de noblesse, possède une fortune considérable.",
      "Le plan machiavélique implique un mariage arrangé avec l'entremise d'Isidore, moyennant une commission personnelle de huit cent mille francs."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Technologie",
    "title": "La sténographie moderne",
    "summary": "La sténographie n'est plus une chimère. Grâce aux méthodes enseignées par M. Rodolphe Fiegel, elle permet une transcription rapide du langage parlé, offrant des perspectives d'emploi rémunératrices aux secrétaires.",
    "paragraphs": [
      "La sténographie, qui n'était naguère qu'un rêve chimérique, est devenue une réalité tangible. M. Rodolphe Fiegel enseigne désormais une méthode permettant de sténographier aussi prestement que la parole se déploie.",
      "Les statistiques établissent que la moyenne des appointements mensuels pour les secrétaires sténographes s'élève aujourd'hui à trois cents francs."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Bourse",
    "title": "Bulletin financier",
    "summary": "Le marché financier subit l'influence des places étrangères. Le 3% clôture à 100,55, tandis que les valeurs bancaires, portées par la Banque de Paris et le Lyonnais, montrent une belle fermeté.",
    "paragraphs": [
      "Paris, 4 novembre. La situation du marché monétaire, et tout particulièrement celle des places étrangères, exerce une influence notable sur le cours des valeurs.",
      "Le 3% s'est établi en clôture à 100,55. L'Italien est coté à 93,05. La Banque de Paris demeure bien tenue et le Lyonnais est en progrès."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Agriculture",
    "title": "Sommaire de L'Agriculture Nouvelle",
    "summary": "La revue L'Agriculture Nouvelle publie son dernier numéro, riche de seize pages d'articles et gravures traitant de la production sucrière, de la viticulture et des récentes évolutions de la législation rurale.",
    "paragraphs": [
      "Parution de la nouvelle livraison de la revue traitant de la production sucrière, de la viticulture, de l'horticulture et de la législation rurale, agrémentée de seize pages de texte et de gravures explicatives."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Publicité Médicale",
    "title": "Offre Humanitaire de M. Vincent pour les maladies de la peau et chroniques",
    "summary": "Pour honorer un vœu, M. Vincent offre ses remèdes et conseils contre les affections cutanées et les maladies chroniques. Les demandes doivent être adressées par courrier à Grenoble.",
    "paragraphs": [
      "Un monsieur fait savoir gratuitement à ceux qui sont atteints d'une maladie de la peau (dartres, eczémas, boutons, démangeaisons), de bronchites chroniques, de maladies de la poitrine, de l'estomac et de la vessie, ou de rhumatismes, un moyen infaillible de recouvrer promptement la santé.",
      "Cette offre, dont on appréciera le but humanitaire, est la conséquence d'un vœu. Écrire par lettre ou carte postale à M. Vincent, place Victor-Hugo, à Grenoble, qui répondra gratis et franco par courrier en envoyant les indications demandées."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Santé",
    "title": "Poudre Rocher : Laxatif Dépuratif",
    "summary": "La Poudre Rocher est un laxatif dépuratif reconnu pour le traitement efficace de la constipation et des troubles digestifs. Le flacon de dix sachets est disponible au prix de 3,50 francs dans les officines spécialisées.",
    "paragraphs": [
      "Poudre Rocher, laxatif dépuratif, guérison sûre et certaine de la constipation et des troubles des appareils digestifs. Prix du flacon de 10 sachets : 3,50 francs.",
      "En vente à Paris, chez Bédot, 1, rue Richelieu, et W-Sautet, Faubourg Saint-Martin."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Santé",
    "title": "Le Morrhuol Chapoteaut pour les enfants",
    "summary": "Le Morrhuol Chapoteaut permet de administrer les bienfaits de l'huile de foie de morue sans les désagréments habituels. Ce fortifiant est particulièrement recommandé pour les enfants lymphatiques sujets aux rhumes.",
    "paragraphs": [
      "Le Morrhuol Chapoteaut représente les principes actifs de l'huile de foie de morue, débarrassée de sa matière grasse et indigeste. Il offre aux mères de famille le moyen de faire prendre à leurs enfants ce médicament sans répugnance.",
      "Le Morrhuol s'administre sous forme de petites capsules rondes équivalant chacune à cinq grammes d'huile. Les expériences faites dans les hôpitaux de Paris ont prouvé que le Morrhuol fortifie rapidement les enfants mous, lymphatiques et sujets à des rhumes fréquents."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Santé",
    "title": "Traitement des maladies de poitrine",
    "summary": "Un traitement spécialisé contre les affections respiratoires telles que l'asthme, la bronchite chronique et la tuberculose. Les informations sont disponibles gratuitement auprès de M. Dupeyroux à Paris.",
    "paragraphs": [
      "Traitement des maladies de poitrine : asthme, catarrhe, emphysème, bronchites chroniques, rhumes rebelles, tuberculose. Guérison sûre et rapide.",
      "Adressez gratuitement votre demande à M. Dupeyroux, 20, rue de l'Échiquier, à Paris, ou demandez à votre pharmacien."
    ]
  }
];
