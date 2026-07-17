// Date: 1900-10-29
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-10-29 (Version Restaurée, 38 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique Économique",
    "title": "La consommation du chauffage à Paris et en France",
    "summary": "Analyse de l'évolution des combustibles à la fin du XIXe siècle : déclin du bois, luxe forestier, montée en puissance de la houille et essor du pétrole comme chauffage économique dans les familles modestes.",
    "paragraphs": [
      "Avec les derniers soleils d'automne, l'hiver s'annonce par de soudains coups de froid qui sont comme un avertissement. On voit sortir des entrepôts les lourdes voitures chargées de bois ou de charbon.",
      "Qu'est-ce que brûle la France ? Les statistiques de la Ville et les études des économistes comme M. d'Avenel nous permettent de reconstituer ce coin de notre vie quotidienne. Le combustible absorbe, en chiffres ronds, le vingtième de nos ressources privées.",
      "Le bois a pour lui la tradition, mais nos forêts ont été rapidement épuisées et l'usage du bois est devenu un luxe. À Paris, la consommation n'a pas augmenté depuis 1852 alors que la population a plus que doublé.",
      "Le bois nous vient principalement de la Nièvre et de l'Yonne par flottage, une opération qui en renchérit considérablement le prix avant qu'il n'arrive chez le consommateur parisien.",
      "La houille, d'autre part, fait au bois une redoutable concurrence. Sa consommation s'est accrue de façon continue au cours du siècle, passant de 1 million de tonnes en 1815 à 20 millions aujourd'hui. Elle est devenue l'agent essentiel de la chaleur domestique.",
      "Pour compléter ce tableau, le gaz est commode mais onéreux pour un usage prolongé, tandis que le pétrole rend de grands services aux familles peu fortunées, comme en témoigne la vente massive de fourneaux à huile minérale ces quinze dernières années."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Roman Feuilleton",
    "title": "Le Fruit Défendu - Roman Parisien inédit",
    "summary": "La mystérieuse disparition de Régine jette l'effroi au sein de sa famille. Malgré les recherches de Rose et l'absence d'indices, l'angoisse grandit jusqu'au retour des parents, confrontés à l'insupportable vérité.",
    "paragraphs": [
      "La chambre était vide. Sur le lit, on voyait que Régine s'était étendue et avait essayé de se reposer. Rose, l'inquiétude grandissant, chercha Régine partout dans la maison et le jardin, sans succès.",
      "Mille pensées l'assaillirent. Régine avait feint un malaise pour s'éloigner et sortir. Rose se rappelait des détails singuliers qui renforçaient sa certitude : elle voulait disparaître.",
      "Gertrude, la servante, était revenue de ses courses, mais n'avait rien vu. Rose attendait dans l'angoisse, le cœur serré par le pressentiment d'une rupture complète ou d'un drame, guettant le retour des parents.",
      "Marianne et Jérôme finirent par rentrer. Rose ne trouvait pas le courage de leur avouer ses soupçons. Mais le silence sur l'absence de Régine devint intenable lorsque l'heure du repas arriva et que sa place resta vide.",
      "Face à la découverte de la disparition, Marianne, jusque-là sereine, fut saisie d'un accès de folie, réalisant brutalement que son enfant était perdue."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Élections sénatoriales du 28 octobre",
    "summary": "Compte-rendu des élections sénatoriales partielles : M. Cassou dans les Basses-Pyrénées et M. Viger dans le Loiret sont élus au premier tour pour remplacer des sénateurs décédés.",
    "paragraphs": [
      "Dans le département des Basses-Pyrénées, M. Cassou a été élu sénateur au premier tour de scrutin en remplacement de M. Quintaa, décédé.",
      "Dans le département du Loiret, M. Viger a été élu au premier tour de scrutin en remplacement de M. Fousset, décédé."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Le programme de Toulouse et le discours de M. Waldeck-Rousseau",
    "summary": "Le Président du Conseil, M. Waldeck-Rousseau, dresse, lors d'un discours remarqué à Toulouse, le bilan de son ministère axé sur l'apaisement national, la justice et les réformes sociales nécessaires au pays.",
    "paragraphs": [
      "M. Waldeck-Rousseau a prononcé à Toulouse un discours marquant. Par la puissance de ses idées et la netteté de ses affirmations, ce langage est bien celui d'un grand homme d'État conscient de sa responsabilité.",
      "Le Président du Conseil a fait le bilan de son cabinet : rétablissement du calme, arbitrage dans les grèves, résolution de l'affaire Dreyfus portée sur le terrain judiciaire, et affirmation de la dignité nationale.",
      "Il a également précisé ses intentions concernant les congrégations religieuses et le clergé, tout en affirmant que la République doit travailler aux réformes sociales comme les retraites ouvrières, répondant ainsi aux attentes du pays."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Mort de M. Raphaël Cahen d'Anvers",
    "summary": "Tragique disparition du comte Raphaël Cahen d'Anvers, banquier parisien et commandeur de la Légion d'honneur, victime d'un accident d'automobile aux environs de Mézières.",
    "paragraphs": [
      "Nous apprenons la mort du banquier parisien, le comte Raphaël Cahen d'Anvers, victime samedi soir d'un accident d'automobile aux environs de Mézières.",
      "Le défunt, âgé de cinquante-cinq ans et commandeur de la Légion d'honneur, voyageait en compagnie de son mécanicien qui a pu sauter de la voiture sans se blesser."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "La fièvre jaune au Sénégal",
    "summary": "Un télégramme en provenance de Saint-Louis annonce le décès de M. Raoul d'Uston à Dakar, victime de la fièvre jaune, maladie dont les modes de propagation par les moustiques passionnent désormais les milieux scientifiques.",
    "paragraphs": [
      "Un télégramme reçu de Saint-Louis nous informe que M. Raoul d'Uston est décédé de la fièvre jaune à Dakar.",
      "Les milieux scientifiques se préoccupent vivement de cette maladie. Les recherches menées à La Havane tendent à prouver que celle-ci ne se propage que par la piqûre des moustiques."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Vie Locale",
    "title": "L'inauguration du monument Oberkampf à Jouy-en-Josas",
    "summary": "La commune de Jouy-en-Josas a inauguré hier le monument dédié à Christophe-Philippe Oberkampf, créateur de la manufacture de toiles peintes, en présence de nombreuses personnalités.",
    "paragraphs": [
      "Hier a eu lieu l'inauguration du monument élevé à la mémoire de Christophe-Philippe Oberkampf, fondateur de la célèbre manufacture de toiles peintes.",
      "La cérémonie a réuni de nombreuses personnalités locales et nationales. Le monument, œuvre de M. Denys Puech, a été dévoilé au son de la Marseillaise, suivi de plusieurs discours célébrant cet industriel illustre."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Chronique Politique",
    "title": "La réception de M. Waldeck-Rousseau à Toulouse",
    "summary": "En visite à Toulouse, M. Waldeck-Rousseau a reçu un accueil chaleureux. Entre rencontres militaires et pose de première pierre, il a réaffirmé la solidarité du gouvernement envers l'armée républicaine.",
    "paragraphs": [
      "M. Waldeck-Rousseau est arrivé à Toulouse ce matin, accueilli par une foule enthousiaste et les autorités locales. Après une réception à la préfecture, il a rencontré les représentants de l'armée et les différents corps constitués.",
      "Le général Tisseyre a affirmé le dévouement de la garnison de Toulouse à la République, ce à quoi le ministre a répondu en soulignant la sollicitude du gouvernement pour son armée.",
      "La journée a été marquée par la pose de la première pierre d'une caserne et par un banquet dans l'ancienne église des Jacobins, où le Président du Conseil a pu réaffirmer sa politique de défense républicaine devant les élus et les citoyens."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique",
    "title": "Le Nationalisme",
    "summary": "M. Waldeck-Rousseau analyse les causes de l'agitation passée et prône une concentration républicaine unie, capable de dépasser les intérêts partisans pour servir l'intérêt supérieur des institutions de l'État.",
    "paragraphs": [
      "M. Waldeck-Rousseau fait le bilan de la situation qui existait lorsque le cabinet est arrivé aux affaires. L'agitation régnait : le nationalisme livrait bataille à la police et comptait ses journées. Deux ministères étaient tombés à quelques mois de distance, tandis que des perspectives sombres apparaissaient aux uns comme une menace et aux autres comme une espérance.",
      "L'orateur a estimé qu'il y a des heures où l'on doit être républicain avant d'être homme d'un parti, et qu'en face du péril commun, il se trouverait dans chaque fraction de l'opinion républicaine des hommes capables de placer, au-dessus de leurs vues individuelles, l'intérêt supérieur des institutions.",
      "Une concentration sincère et vraie a été réalisée, non point comme on l'avait tenté parfois en concédant à chacun des membres d'un cabinet un peu de ce qui les séparait de tous les autres, mais en excluant tout ce qui pouvait diviser et en retenant tout ce qui pouvait unir."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique",
    "title": "Les questions sociales",
    "summary": "Le Président du Conseil écarte toute transformation radicale de la propriété, tout en appelant à une politique d'équité favorisant, à terme, l'attribution des bénéfices aux travailleurs plutôt que le simple salariat.",
    "paragraphs": [
      "Le président du Conseil poursuit en rassurant ceux qui s'émeuvent des dangers que le cabinet ferait courir à l'ordre social.",
      "La transformation, par l'intervention de l'État, de la propriété individuelle en propriété collective ne fait pas partie de notre programme. Mais cela ne signifie pas qu'une politique d'union républicaine n'implique pas des réformes. Le ministère a toujours soutenu qu'il fallait mettre de l'humain dans la politique ; qu'au lieu de juger certaines revendications avec égoïsme, il convient de les juger avec équité.",
      "Dès lors, il a déclaré que le travail demanderait dans l'avenir sa rémunération de plus en plus par l'attribution de ses bénéfices et de moins en moins au salariat."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "L'agitation et les grèves",
    "summary": "M. Waldeck-Rousseau souligne le retour au calme social, affirmant que la fermeté de la loi et le recours à l'arbitrage ont su neutraliser les mouvements insurrectionnels et résoudre les conflits de l'année 1899.",
    "paragraphs": [
      "M. Waldeck-Rousseau constate ensuite que c'en est fait aujourd'hui de l'agitation systématiquement entretenue naguère. La force de la loi a été opposée aux desseins violents.",
      "Comme en 1867, en 1878 et en 1899, une période d'activité exceptionnelle a été marquée par des grèves nombreuses. Nous avons pu donner, par l'arbitrage, à la plus grave d'entre elles, une solution qui a presque désarmé la critique."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "L'Armée et l'Affaire Dreyfus",
    "summary": "Le gouvernement réaffirme son engagement à rendre à l'armée sa mission nationale et souligne le rôle de l'indépendance judiciaire dans le dénouement de l'Affaire Dreyfus.",
    "paragraphs": [
      "Convaincu que la dignité morale de l'armée s'accommode mal d'une politique qui vise, non point à la servir, mais à s'en servir, le gouvernement s'est attaché à la rendre tout entière à sa mission nationale.",
      "Appelé à voir se dérouler le dernier acte d'un drame poignant qui avait profondément ému et divisé le pays, le cabinet a fait en sorte que le dénouement n'en fût confié qu'à la plus complète indépendance du juge."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "La Presse, l'Extérieur et l'Exposition",
    "summary": "Entre la régulation de la presse pour endiguer la diffamation et les succès diplomatiques retrouvés, la France célèbre le travail à travers le rayonnement de l'Exposition universelle.",
    "paragraphs": [
      "Pour arrêter la diffamation qui tendait à discréditer les institutions, le cabinet a obtenu une loi qui consacre la responsabilité de l'écrivain sans effleurer sa liberté.",
      "Pendant qu'à l'intérieur s'accomplissaient ces événements, notre politique extérieure retrouvait son autorité et ses succès.",
      "La période de paix a été remplie par la glorification du travail avec l'Exposition universelle."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Les fonctions publiques",
    "summary": "M. Waldeck-Rousseau rappelle que l'administration doit incarner l'esprit démocratique. Le service de l'État exige, de la part de ses serviteurs, un engagement loyal et une probité professionnelle exemplaire.",
    "paragraphs": [
      "Il ne suffit pas que le gouvernement soit animé, au sommet, de l'esprit démocratique; il faut que le même esprit préside au fonctionnement de chacun de ses rouages.",
      "La confiance ne doit être accordée qu'à ceux dont elle peut attendre un concours loyal et résolu. Le service de l'État n'est pas une profession, c'est une fonction."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "Les réformes et les congrégations",
    "summary": "Le gouvernement prévoit une refonte du régime fiscal, notamment sur les boissons, et annonce une action législative ferme face aux menaces d'usurpation d'autorité des congrégations religieuses.",
    "paragraphs": [
      "Sauf la réforme des droits de succession, tous les projets de réforme fiscale peuvent être examinés. Il est urgent de réformer le régime fiscal des boissons.",
      "La session extraordinaire doit aborder la loi sur les associations pour faire face au péril des congrégations qui tendent à introduire dans l'État un corps politique dont le but est l'usurpation de toute autorité."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique",
    "title": "Conclusion du discours",
    "summary": "L'orateur conclut son allocution sur une note d'espoir, affirmant que la crise traversée a renforcé la nation dans ses aspirations à plus de sécurité, de liberté, de fraternité et de justice pour ses institutions.",
    "paragraphs": [
      "L'orateur termine sur une note d'espoir : la crise que nous venons de subir aura été une crise de croissance. Nous avons triomphé des germes de mort. Nous voici plus forts avec la devise : Plus de sécurité dans les institutions, plus de liberté, plus de fraternité et plus de justice."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "International",
    "title": "Les événements de Chine",
    "summary": "Le Conseil des ministres examine les mesures répressives contre les coupables des troubles en Chine, tandis que Li-Hung-Chang réaffirme, dans un entretien, la volonté de paix du gouvernement impérial.",
    "paragraphs": [
      "Les ministres ont eu une seconde réunion pour examiner les propositions de M. Delcassé. Tous ont reconnu la nécessité de réclamer la peine de mort pour tous les principaux coupables des derniers événements.",
      "Le Messaggero publie une entrevue avec Li-Hung-Chang. Celui-ci a déclaré déplorer les événements qui se sont passés en Chine, affirmant que les autorités chinoises désirent absolument la paix."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Société",
    "title": "L'anniversaire des combats du Bourget",
    "summary": "Commémoration solennelle du trentième anniversaire des combats du Bourget : une foule de citoyens s'est réunie pour honorer la mémoire des soldats français tombés lors de la guerre de 1870.",
    "paragraphs": [
      "C'était hier le trentième anniversaire des combats sanglants livrés les 29 et 30 octobre autour du Bourget. Une foule de patriotes a accompli ce pieux pèlerinage pour rendre hommage aux combattants de 1870."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Exposition Universelle",
    "title": "Au Pavillon du Japon",
    "summary": "La section japonaise de l'Exposition prépare des célébrations raffinées pour l'anniversaire de l'Empereur, mettant en avant l'élégance des jardins aménagés dans les serres du Trocadéro.",
    "paragraphs": [
      "Le jour de l'anniversaire de l'Empereur sera célébré dans la section japonaise du Trocadéro de façon caractéristique et charmante.",
      "Le commissaire général, M. T. Matsugata, et ses collaborateurs ont aménagé, à la tête de l'exposition, des jardins japonais dans les serres monumentales de la ville.",
      "Dans la matinée de samedi, les commissaires japonais se rendront à l'annexe de Vincennes avec leurs invités et les membres du jury pour visiter cette superbe exposition."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Exposition Universelle",
    "title": "Les Entrées",
    "summary": "Bilan de fréquentation de l'Exposition Universelle : le service de contrôle enregistre 147 000 entrées, réparties entre visiteurs payants, invités munis de cartes et ouvriers.",
    "paragraphs": [
      "Le nombre des visiteurs s'est relevé légèrement. Le service de contrôle général accuse 147 000 entrées, dont 4 872 pour l'annexe de Vincennes.",
      "Ces chiffres se décomposent comme suit : entrées payantes (tickets) 37 544, entrées gratuites (cartes de circulation) 8 789, jetons d'ouvriers comptant pour le reste dans le total général."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une affaire d'empoisonnement à Paris",
    "summary": "Le 19 octobre, le comptable Adolphe Huca est décédé à la maison Dubois. L'autopsie révélant des indices d'empoisonnement, le commissaire du quartier a ordonné une enquête toxicologique sur ses dernières prescriptions.",
    "paragraphs": [
      "Le 19 octobre dernier, mourait à la maison Dubois un comptable, M. Adolphe Huca, âgé de quarante-huit ans, demeurant 124, rue Saint-Antoine.",
      "Le médecin en chef de l'hôpital ayant aperçu que le cadavre présentait les indices d'un empoisonnement, le commissaire de police du quartier Saint-Vincent-de-Paul a ordonné une enquête.",
      "M. Ogier, chimiste expert, a été chargé de l'analyse des viscères pour déterminer les causes exactes du décès, suite à la prise d'une ordonnance délivrée par deux médecins différents."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Exploits de malfaiteurs",
    "summary": "Le jeune ouvrier Auguste Audierre a été agressé par trois individus lui dérobant ses effets. Blessé par un coup de feu lors de la poursuite, les inspecteurs de la Sûreté sont activement sur la trace des coupables.",
    "paragraphs": [
      "Un ouvrier tourneur sur bois, M. Auguste Audierre, âgé de dix-sept ans, a été assailli par trois individus qui lui ont dérobé sa montre et son porte-monnaie.",
      "Poursuivant ses agresseurs, le jeune ouvrier a été atteint par un coup de revolver au défaut de l'épaule droite. Le commissaire Guircheteau a lancé les inspecteurs de la Sûreté sur la trace des coupables."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un trio de bandits à Montmartre",
    "summary": "M. Louis Louvigny a été détroussé par trois malfaiteurs après les avoir conviés à boire. Malgré sa blessure, l'acrobate a permis l'interpellation de l'un des agresseurs, le nommé Joseph Riaumont.",
    "paragraphs": [
      "M. Louis Louvigny, acrobate, a été agressé par trois individus qu'il avait imprudemment invités à boire. Les malfaiteurs ont profité de son état d'ivresse pour le dévaliser dans l'escalier menant à la rue Berthe.",
      "Malgré la violence de l'agression, M. Louvigny a réussi à blesser l'un de ses agresseurs, Joseph Riaumont, qui a été arrêté et dirigé vers le dépôt."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un appartement dévalisé",
    "summary": "De retour de voyage, Mme veuve Calaire a découvert son appartement de la rue Rochechouart cambriolé. L'enquête du commissaire Courtion a conduit à l'arrestation de quatre malfaiteurs, dont le nommé Désiré Gombert.",
    "paragraphs": [
      "Mme veuve Calaire a constaté, au retour d'un voyage, que son appartement, rue Rochechouart, avait été visité par des malfaiteurs qui ont fracturé les meubles.",
      "L'enquête menée par M. Courtion, commissaire de police, a permis l'arrestation de quatre individus, dont le nommé Désiré Gombert, dit le Lutteur."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes limitrophes",
    "summary": "Tour d'horizon des incidents survenus en périphérie parisienne : accidents de la circulation, incendie à La Courneuve, suicides et drames ayant marqué les communes limitrophes.",
    "paragraphs": [
      "Neuilly-sur-Seine : Le tramway 677 a broyé un landau appartenant à M. Leroy. Clichy : La société coopérative l'Économie sociale a donné sa fête annuelle.",
      "Gennevilliers : La fillette Juliette Sancelly, âgée de neuf ans, a été renversée par un cycliste puis broyée par une voiture de livraison. Son état est désespéré.",
      "Bois-Colombes : Mme Ernestine Valhorys, couturière, s'est suicidée par arme à feu. Argenteuil : Distribution des prix du grand concours de tir. Saint-Denis : M. Louis Mottien a eu le bras amputé par une scie mécanique.",
      "La Courneuve : Un violent incendie a ravagé la boyauderie Languedoc, rue des Ponceaux. Épinay : Un tramway a renversé un tombereau, blessant grièvement les chevaux. Vincennes : M. Léon Megret a arrêté un cheval emporté."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Méprise à Charenton",
    "summary": "Des époux rentiers, alertés par un bruit nocturne, découvrent deux intrus attablés dans leur salle à manger. Il s'agissait de voisins ayant confondu l'étage ; la bévue s'est conclue autour d'une coupe de champagne.",
    "paragraphs": [
      "Des époux rentiers, alertés par un bruit insolite dans leur salle à manger en pleine nuit, ont surpris deux intrus qui soupaient tranquillement chez eux.",
      "Il s'est avéré qu'il s'agissait de voisins, M. et Mme T., qui, s'étant trompés d'étage, avaient utilisé leur propre clé pour pénétrer dans cet appartement. La méprise, fortuite et amusante, s'est terminée par une réconciliation arrosée au champagne."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tragique retour de fête à Limons",
    "summary": "Un drame a endeuillé la commune de Saillat : huit noceurs, tentant de traverser la Vienne dans une barque de fortune surchargée, ont chaviré. On déplore la noyade probable de cinq d'entre eux.",
    "paragraphs": [
      "Un terrible accident s'est produit à Saillat. Huit personnes revenant d'une noce ont tenté de traverser la Vienne à bord d'une barque trop chargée qui a chaviré sous le poids des passagers.",
      "Les secours, arrivés promptement sur les lieux, ne purent que constater le désastre. On déplore, selon les dernières informations, le décès probable de cinq d'entre eux par noyade."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Les Sports",
    "title": "Résultats des courses hippiques",
    "summary": "Malgré une météo incertaine, la journée hippique de Chantilly a tenu ses promesses. Jour de Fête s'illustre dans le prix Saint-Firmin, tandis que Jacobite remporte brillamment le prix de Condé.",
    "paragraphs": [
      "La dernière journée de Chantilly a été très réussie malgré l'incertitude du temps. Le prix Saint-Firmin a été remporté par Jour de Fête, monté par le jockey Dodd.",
      "Le prix de Condé a été enlevé par Jacobite, monté par G. Stern. Les autres épreuves de la journée ont vu les victoires respectives de Franco-Russe, Fourire et Aita."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Social",
    "title": "Le Préfet de la Seine en banlieue",
    "summary": "M. de Selves, préfet de la Seine, a inauguré divers équipements publics à Colombes et Courbevoie, honorant de nombreuses personnalités locales lors de ces cérémonies.",
    "paragraphs": [
      "M. de Selves, préfet de la Seine, s'est rendu en banlieue pour inaugurer plusieurs équipements publics à Colombes, La Garenne-Colombes et Courbevoie.",
      "Lors de ces cérémonies solennelles, de nombreuses distinctions honorifiques, dont des Palmes d'officier d'académie et des Croix de chevalier du Mérite, ont été remises à des notables locaux en reconnaissance de leur dévouement."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Programme des spectacles de la semaine",
    "summary": "L'actualité théâtrale parisienne est riche cette semaine, marquée par la parution d'une préface de M. Albert Carré pour les Annales et la première représentation de « La Poigne » au Gymnase.",
    "paragraphs": [
      "L'Opéra, la Comédie-Française et l'Opéra-Comique présentent leurs affiches hebdomadaires. M. Albert Carré, directeur de l'Opéra-Comique, a rédigé une préface érudite pour les Annales du théâtre.",
      "Au Gymnase, le public attend avec impatience la première représentation de « La Poigne », pièce en quatre actes de M. Jean Jullien."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Revue Commerciale",
    "title": "Grains et Farines",
    "summary": "Des pluies bénéfiques favorisent les semailles et la levée des blés. Malgré un marché calme, les opérateurs anticipent un redressement des cours des farines et des blés pour le début de l'année prochaine.",
    "paragraphs": [
      "Il est tombé des pluies abondantes qui ont fait le plus grand bien aux terres et qui vont permettre de terminer les semailles dans beaucoup de régions ; de plus, elles ont favorisé la levée des blés déjà semés.",
      "On croit que la surface emblavée sera au moins aussi importante que l'année dernière, malgré les bas prix actuels du blé.",
      "Sur notre place, les farines de commerce ont fait l'objet d'affaires assez nombreuses et importantes, et les prix se sont relevés sensiblement, surtout sur le livrable éloigné. Nous croyons que le mouvement de baisse que nous signalons depuis quelque temps est arrivé à sa fin, malgré l'abondance de la marchandise.",
      "On a terminé hier en cotant les farines fleur de Paris, le livrable courant du mois, de 25 fr. à 26 fr., et les quatre mois de janvier, entrepôt.",
      "Les blés du marché de Paris sont également plus fermes qu'il y a huit jours et il y a une légère hausse à signaler. Les détenteurs du stock sont en possession de grosses quantités de marchandise, non seulement à Paris mais encore en province ; néanmoins, ils ont acheté tous leurs contrats sur les quatre mois de janvier.",
      "Cela est significatif et indique que les opérateurs ne croient pas à la baisse ; de plus, ils ne seront plus débordés par les grandes quantités offertes par les petits cultivateurs qui se sont empressés de vendre pendant les deux mois qui viennent de s'écouler. Aujourd'hui, la grande culture est plus réservée et maintient fermement ses prix. Il faut donc s'attendre à un relèvement sérieux des prix dans un avenir prochain et surtout sur les quatre mois de janvier."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Revue Commerciale",
    "title": "Huiles",
    "summary": "Le marché des huiles de colza, après une période de forte hausse portée par la cherté de la graine, a connu des fluctuations importantes se soldant par une tendance à la baisse.",
    "paragraphs": [
      "Les huiles de colza ont encore eu un marché animé et les prix ont subi des fluctuations assez importantes, mais néanmoins c'est la baisse qui a prévalu.",
      "La cherté de la graine et les mauvaises nouvelles des récoltes des pays producteurs avaient été les causes des hauts prix atteints.",
      "On a terminé hier en cotant le colza brut en tous fûts, le courant de 80,25 à 80,75 fr., novembre de 80,50 à 81 fr. ; les quatre premiers mois, 81 fr. les 100 kilos, entrepôt."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Revue Commerciale",
    "title": "Alcools",
    "summary": "Le marché des alcools est resté relativement calme durant la semaine du 22 au 27 octobre. Les prix des trois-six sont demeurés stables, avec une moyenne établie à 33,70 francs l'hectolitre.",
    "paragraphs": [
      "Les trois-six ont eu des affaires calmes pendant la huitaine et les prix ont peu varié.",
      "La moyenne des cotes officielles de l'alcool disponible, pendant la semaine du 22 au 27 octobre, est de 33,70 fr. l'hecto nu à 90 degrés, entrepôt."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Revue Commerciale",
    "title": "Sucres",
    "summary": "Malgré un rendement cultural mitigé, la production sucrière globale s'annonce supérieure à celle de 1897. Le marché parisien demeure calme avec des cours inchangés.",
    "paragraphs": [
      "Le rendement cultural est en général inférieur à celui de l'an dernier ; néanmoins, par suite de l'augmentation des ensemencements et de la richesse de la plante, on croit que la production sucrière sera supérieure à celle de l'an dernier. Dans le reste de l'Europe, on estime également une production supérieure à celle de 1897. Sur notre place, les affaires sont toujours très calmes et les prix ont eu des variations insignifiantes.",
      "On a terminé hier en cotant le sucre blanc n° 3 : le courant novembre, 28,25 fr. ; les trois premiers mois, 29,25 fr. ; les mois de mars, 29,75 fr. ; les quatre mois de mai, à 30 fr. les 100 kilos, entrepôt.",
      "Les raffinés, en baisse, sont cotés à 103 fr. les 100 kilos, droits acquittés."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Revue Commerciale",
    "title": "Houblons",
    "summary": "Le marché du houblon reste actif pour les qualités fines, soutenu par une forte demande internationale à Londres et Nuremberg. Les cours se maintiennent en province malgré des achats plus prudents.",
    "paragraphs": [
      "Les transactions ont été très actives. Prix fermement tenus pour les houblons fins. Pour les houblons inférieurs, les cours ont pu se maintenir à peu près, mais les achats s'opèrent beaucoup plus posément. À Londres, le marché est très ferme, tout comme à New-York. À Nuremberg, les ventes ont dépassé 500 balles.",
      "Voici les derniers cours pratiqués à Nuremberg : Marktwaare prima, 105 à 115 fr. ; secunda, de 90 à 100 fr. ; Hallertau, de 130 à 155 fr. ; Wolnzach, de 135 à 160 fr. ; Spalt, de 165 à 180 fr. ; Saaz, de 170 à 195 fr. ; Wurtemberg, de 125 à 155 fr. ; Bade, de 120 à 150 fr. ; Alsace, de 110 à 130 fr. les 50 kilos.",
      "En Bourgogne, les achats continuent de façon assez calme, les cours variant entre 105 et 115 francs les 50 kilos en culture.",
      "À Alost, les prix payés chez les planteurs ont varié de 90 à 100 fr. les 50 kilos, et au dernier marché, on a payé de 93 à 95 fr., suivant la qualité et le mérite."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Finance",
    "title": "Causerie financière",
    "summary": "Revue des marchés : les baissiers ont dominé les valeurs de traction, mais l'ensemble du marché conserve une fermeté remarquable. Les fonds nationaux et l'emprunt italien témoignent de la confiance des investisseurs.",
    "paragraphs": [
      "Nous avons assisté cette semaine à un certain nombre de séances fort mouvementées ; les baissiers, encouragés par la reculade de l'Extérieure Espagnole, se sont livrés à des attaques acharnées sur les valeurs de traction, sur la Sosnowice, sur les Omnibus, etc. ; bien que la lutte ait été chaude, ils ont conservé l'avantage sur la plupart des points.",
      "La bataille s'est d'ailleurs localisée dans un petit nombre de compartiments ; l'ensemble du marché est au contraire resté ferme et nous aurons même, sur certains groupes de valeurs, à constater d'assez importantes plus-values.",
      "Nos fonds nationaux, entre autres, tendent de plus en plus à rester à l'écart des fluctuations générales, surtout lorsque celles-ci ont lieu dans le sens de la baisse ; ils n'ont cessé pendant toute la semaine de montrer la plus grande fermeté et ont profité de quelques moments d'embellie pour gagner une avance qu'ils n'ont plus reperdue.",
      "Aussi trouvons-nous le 3 % à 100,25 au lieu de 99,95 et le 3 1/2 % à 102,50 contre 102,37. Quant à l'Amortissable, il a été beaucoup plus négligé, sans raison aucune d'ailleurs, et se borne à conserver le cours de 103,25.",
      "L'Italien paraît également avoir retrouvé, depuis quelque temps, la faveur du public ; il s'est de nouveau avancé de 93,90 à 94,35. On attend avec une certaine impatience de connaître quels sont exactement les projets de réforme du gouvernement espagnol.",
      "Le remplacement du ministère Silvela par le nouveau cabinet présidé par le général Azcárraga n'a pas produit ici une bonne impression ; cependant, M. Allende Salazar conserve le portefeuille des Finances et l'on annonce que rien ne sera changé dans la politique financière du gouvernement. Ces déclarations n'ont pas satisfait les boursiers et l'Extérieure s'est effondrée de 69,50 à 67,90 pour finir à 68,10.",
      "Les fonds turcs n'ont depuis longtemps présenté aucune variation ; d'assez nombreux achats au comptant ont eu lieu sur les emprunts russes : le 3 % ancien s'est avancé de 83,90 à 84,30 et le nouveau de 83,70 à 84,10."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Culture",
    "title": "Le cheval et son cavalier",
    "summary": "Retour sur l'histoire de Marengo, le fidèle coursier arabe de Napoléon Ier. Un duo célèbre qui, du haut de sa petite taille, a profondément marqué les champs de bataille européens jusqu'à Waterloo.",
    "paragraphs": [
      "C'était un petit cheval monté par un cavalier. Néanmoins, l'un et l'autre étaient fameux dans le monde entier. Le squelette du cheval parfait, à l'exception d'un sabot qui a été transformé en tabatière par quelque vandale, est exposé dans un certain musée et est parfaitement authentique.",
      "Ce cheval, lorsqu'il était vivant, n'était autre que le coursier arabe Marengo. Le cavalier ? Je savais bien que vous alliez deviner de suite son nom. Le cheval et son cavalier ont parcouru ensemble maints et maints champs de bataille et ont disparu de la scène pour toujours à la triste journée de Waterloo.",
      "La taille du cheval n'était que d'un mètre quarante centimètres ; quant au cavalier, qu'il me suffise de dire que c'était le Petit Caporal. Cela n'a pas empêché que le galop de ce petit cheval, portant ce petit homme sur son dos, a secoué l'Europe comme jamais île des tropiques n'a été secouée par un tremblement de terre."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Feuilleton",
    "title": "Roman (extrait)",
    "summary": "Après dix-huit mois d'absence, Jeannine réapparaît subitement au cabinet du docteur. Cette visite inattendue vient bouleverser la solitude et les tourments personnels du jeune homme.",
    "paragraphs": [
      "Une nouvelle lettre adressée au vieux docteur, lettre dans laquelle le jeune homme avait renouvelé ses supplications et ses protestations, était, ainsi que les autres, demeurée sans réponse.",
      "En songeant à tout cela, son cœur se serrait, du noir à nouveau emplissait son âme et l'interrompait dans sa tâche. Souvent aussi c'était à Jeannine qu'il pensait. Mais, si loin d'elle, il se sentait fort. Aurait-il cette même force bientôt, quand il la reverrait ?",
      "Il venait d'achever son article et il le relisait. En dépit d'une épaisse portière séparant son cabinet de la pièce dans laquelle couchaient Rosalie et le petit Armand, il entendait parfaitement les éclats de voix de la vieille bonne et, par instants, les cris joyeux du bambin. Par exception, Armand était gai ce jour-là.",
      "Tout à coup, un autre bruit strident se fit entendre : c'était le timbre de l'antichambre. À ce moment, neuf heures sonnèrent à la pendule monumentale qui tiquait sur la cheminée de son cabinet.",
      "Quelqu'un frappa à la porte et pénétra dans la pièce. C'était Pierre. Le visage ridé, couturé du vieux domestique, semblait exprimer une émotion inaccoutumée. « Monsieur, annonça-t-il, c'est une visite. » « Une visite à cette heure ? Mais je ne reçois pas, Pierre, vous le savez bien. »",
      "« Oui, monsieur. Seulement ce n'est pas une visite pour une consultation. C'est mademoiselle Jeanne, la maman du petit Armand. » Henri sursauta. « Mademoiselle Jeanne », murmurait-il comme s'il ne comprenait pas. Depuis plus de deux mois, pourtant, il avait reçu la lettre de l'exilée et chaque jour il devait s'attendre à son retour.",
      "Il se leva et, s'efforçant de maîtriser son trouble, il ordonna : « Faites entrer. » Durant les quelques secondes qui s'écoulèrent, le regard du docteur se dirigea vers le cadre dans lequel était fixé le portrait de sa pauvre mère. Il lui sembla que la chère morte lui commandait : « Sois fort, mon fils, sois grand et généreux. »",
      "Quand ses yeux se détachèrent de l'image vénérée, ils aperçurent Jeannine. La jeune fille se tenait devant lui. Elle était très pâle. Depuis dix-huit mois qu'elle était partie, elle n'avait presque pas changé."
    ]
  }
];
