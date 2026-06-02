// Date: 1900-01-24
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-24 (Version Restaurée, 28 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Science et Géographie",
    "title": "La découverte des sources du Nil",
    "summary": "L'explorateur allemand, le docteur Kandt, situe les sources du Nil au mont Téchuho. Cette avancée géographique majeure éclaire les crues du fleuve et interroge la gestion des eaux en Égypte, sujet cher à M. Jean Brunhes.",
    "paragraphs": [
      "Chercher les sources du Nil était un proverbe qui, dans l'Antiquité, signifiait tenter l'impossible. De fait, pour résoudre cette prétendue impossibilité, il a fallu des millénaires, et c'est aujourd'hui seulement que nous sommes en possession de données à peu près certaines sur les origines du plus grand et du plus mystérieux des fleuves de la Terre.",
      "Le dernier en date de ces explorateurs, un Allemand nommé le docteur Kandt, vient de faire connaître le résultat de ses longues et patientes investigations. Il assigne comme origine au grand fleuve africain le mont Téchuho, situé à trois jours de marche dans la direction sud du lac Kivu.",
      "L'opinion générale, jusqu'ici, était que le Nil sortait du lac Albert-Nyanza, découvert par Baker en 1864 après quatre années d'expédition éprouvante. La découverte du docteur Kandt, en reculant les sources du Nil, fournira peut-être une explication aux crues périodiques de ce fleuve, instrument précieux de civilisation pour l'Égypte.",
      "M. Jean Brunhes souligne que l'on a voulu exploiter l'eau du Nil avec trop d'avidité, multipliant les cultures épuisantes comme la canne à sucre et le coton, ce qui menace de provoquer une pénurie d'eau. C'est pour parer à cette menace qu'on a entrepris l'exécution du grand réservoir près de Chellâl, dont les travaux devraient être terminés en 1902."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des Ministres",
    "summary": "Sous la présidence de M. Loubet, le Conseil des ministres a passé en revue les budgets, la défense maritime et la prévoyance sociale, tout en actant un excédent budgétaire de 94 millions pour l'exercice 1898.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin, à l'Élysée, sous la présidence de M. Loubet. Le Conseil s'est occupé du budget de l'Instruction publique et de la réorganisation du service de la statistique au ministère des Finances.",
      "Concernant la défense maritime, les ministres concernés auront une nouvelle réunion sous la présidence de M. Waldeck-Rousseau pour discuter des moyens financiers.",
      "La commission d'assurance et de prévoyance travaille sur les projets relatifs aux retraites ouvrières et à l'assistance obligatoire, ayant voté le principe des retraites anticipées pour invalidité.",
      "M. Caillaux, ministre des Finances, a annoncé un excédent de recettes de 94 millions et demi environ pour l'exercice 1898.",
      "Enfin, M. Millerand, ministre du Commerce, des Postes et des Télégraphes, a pris une mesure pour assurer le secret des communications téléphoniques officielles en reliant directement les ministères par un point central."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Incident parlementaire sur le procès des assomptionnistes",
    "summary": "M. Motte, député du Nord, compte interpeller le garde des Sceaux concernant certaines pièces du réquisitoire du procureur Bulot impliquant diverses personnalités politiques dans le procès des assomptionnistes.",
    "paragraphs": [
      "Le ministre de la Justice a été avisé qu'un député du Nord, M. Motte, désirait poser une question sur certains passages du réquisitoire de M. Bulot, procureur de la République, lors du procès des assomptionnistes. Cette question vise une nomenclature citant divers députés, dont MM. Piou, Motte, de Lespinay et Boni de Castellane, auxquels les assomptionnistes attribuent une partie de leur succès."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un médecin blessé par un fou à Lyon",
    "summary": "Un drame terrible a frappé la maison de santé des frères Saint-Jean-de-Dieu à Lyon : le docteur Devay a été grièvement blessé par un ouvrier menuisier en pleine crise de folie lors d'une séance de vaccination.",
    "paragraphs": [
      "Un drame s'est déroulé hier dans la maison de santé des frères Saint-Jean-de-Dieu à Lyon. Le docteur Devay, qui vaccinait des malades, a été violemment agressé par un ouvrier menuisier pris d'un accès de folie. L'homme a frappé le médecin au ventre avec un tiers-point, lui causant des blessures graves. Opéré par le chirurgien Jaboulay, le docteur Devay voit son état jugé très inquiétant."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "La vengeance d'une expulsée à Levallois-Perret",
    "summary": "À Levallois-Perret, une ancienne locataire expulsée, Mme Sophie Segond, s'est vengée de ses propriétaires, les époux Beauzdat, en les agressant sauvagement au marteau. La coupable a été arrêtée.",
    "paragraphs": [
      "Les époux Beauzdat, propriétaires d'un immeuble rue Victor-Hugo à Levallois-Perret, ont été sauvagement agressés hier par une ancienne locataire, Mme Sophie Segond. Expulsée le 8 janvier pour non-paiement de loyer, la femme a fait irruption dans leur appartement et les a frappés avec un marteau. Les deux victimes ont été grièvement blessées et transportées à l'hôpital. La coupable, arrêtée, s'est déclarée heureuse d'avoir accompli cet acte de vengeance."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "International",
    "title": "La situation militaire en Afrique du Sud",
    "summary": "Les nouvelles du front de la Tugela demeurent incertaines. Malgré les efforts acharnés du général Warren pour dégager Ladysmith, la résistance boër et la pénurie d'informations précises maintiennent Londres dans l'inquiétude.",
    "paragraphs": [
      "Les nouvelles concernant les combats près de la rivière Tugela restent rares à Londres, causant de vives inquiétudes. L'armée anglaise, sous les ordres du général Warren, a tenté des mouvements de flanc contre les positions boërs, mais l'infanterie et l'artillerie rencontrent une résistance acharnée.",
      "Le correspondant du 'Times' rapporte des manœuvres complexes et des combats intenses sur les hauteurs entourant Ladysmith. Bien que la situation reste incertaine, les autorités militaires espèrent une délivrance prochaine de Ladysmith, malgré la pénurie d'informations confirmées."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions - Un drame du mariage",
    "summary": "Valentine et Georges Dufresne dînent aux Ambassadeurs. Entre confidences sur un héritage et observations mondaines, leur relation tumultueuse se dessine sous le regard curieux de la haute société parisienne.",
    "paragraphs": [
      "Valentine et Georges Dufresne se rendent aux Ambassadeurs pour dîner. Valentine, libre et affranchie des conventions sociales, cherche à s'étourdir dans les plaisirs parisiens, tandis que Georges, fasciné et dompté par sa beauté, se laisse entraîner dans cette relation tumultueuse.",
      "Au cours du dîner, Valentine confie à Georges les détails de son héritage et ses projets de vie, alternant entre légèreté et mélancolie, tout en observant avec malice les regards curieux des habitués des restaurants parisiens."
    ]
  },
  {
    "id": 8,
    "page": 3,
    "category": "Nécrologie",
    "title": "Les obsèques de M. Chiris",
    "summary": "Les obsèques du sénateur Chiris ont été célébrées hier à Cannes dans une affluence considérable. La famille et de nombreuses personnalités politiques ont rendu un dernier hommage au défunt.",
    "paragraphs": [
      "Les obsèques de M. Chiris, sénateur, ont eu lieu hier à Cannes au milieu d'une affluence considérable.",
      "Le deuil était conduit par M. Chiris, fils du défunt, assisté de MM. Ernest et François Chiris.",
      "Des discours ont été prononcés par MM. Ornet, préfet; Borriglione, sénateur; Bouvier et Poullan, députés; Maure, maire de Grasse."
    ]
  },
  {
    "id": 9,
    "page": 3,
    "category": "Social",
    "title": "Fête de la chambre syndicale ouvrière des coiffeurs",
    "summary": "La chambre syndicale ouvrière des coiffeurs a célébré sa fête annuelle à l'Hôtel Moderne. Entre démonstrations d'art capillaire et remise de diplômes, la soirée s'est achevée par un bal animé.",
    "paragraphs": [
      "La chambre syndicale ouvrière des coiffeurs de Paris a donné hier soir sa fête annuelle à l'Hôtel Moderne. M. Millerand, ministre du Commerce et de l'Industrie, empêché au dernier moment, s'était fait représenter par M. Violette, chef du secrétariat particulier.",
      "Un des points les plus intéressants du programme consistait en l'exécution de coiffures diverses par les professeurs de l'école parisienne.",
      "Voici les noms des principaux lauréats : Meurice, prix d'honneur; Guernier, Dupeyroux, Caillot, Dupuechoy, Liyotto, Warivin, Badin, Thuillot, Perreten, Ibert, Giauvot. Des diplômes d'honneur ont été remis à une vingtaine d'élèves.",
      "A minuit, un bal plein d'entrain a réuni professeurs, lauréats et invités."
    ]
  },
  {
    "id": 10,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Procès de Cyrille Venot pour outrages aux bonnes mœurs",
    "summary": "Le tribunal de Cherbourg a condamné Cyrille Venot, ancien employé de café, à trois mois de prison pour avoir colporté un pamphlet outrageant dirigé contre les membres du gouvernement.",
    "paragraphs": [
      "Le tribunal correctionnel de Cherbourg a jugé hier le nommé Cyrille Venot, ancien garçon au café du Grand Balcon, poursuivi sous l'inculpation d'outrages aux bonnes mœurs.",
      "Il avait été arrêté alors qu'il colportait un pamphlet présenté sous la forme d'une lettre de deuil attaquant les ministres. Le tribunal a condamné l'accusé à trois mois de prison."
    ]
  },
  {
    "id": 11,
    "page": 3,
    "category": "Faits Divers",
    "title": "La crue de la Marne",
    "summary": "La montée des eaux de la Marne menace les îles de Joinville-le-Pont, de Chennevières et de Bonneuil. Les riverains de Lagny et Neuilly-sur-Marne sont appelés à la plus grande vigilance face à une inondation imminente.",
    "paragraphs": [
      "Les îles d'Amour et de la Beauté à la Marne, l'île Fanac et l'îlot de l'Ermitage, à Joinville-le-Pont, ainsi que les îles de Chennevières et de Bonneuil, sont sur le point d'être submergées par les eaux.",
      "Les nouvelles parvenues de Lagny et de Neuilly-sur-Marne annoncent une nouvelle hausse du niveau du fleuve. Les propriétaires riverains sont instamment invités à prendre toutes les précautions nécessaires contre une inondation subite."
    ]
  },
  {
    "id": 12,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un fou parricide à Charenton",
    "summary": "Sorti récemment de l'hôpital Saint-Antoine, Paul Laurent, âgé de vingt ans, a succombé à un accès de folie furieuse et assassiné sa mère à coups de couteau à Charenton, avant de se constituer prisonnier.",
    "paragraphs": [
      "Paul Laurent, âgé de vingt ans, qui avait tenté de mettre fin à ses jours il y a quelque temps, venait de quitter l'hôpital Saint-Antoine après y avoir subi une intervention chirurgicale.",
      "Revenu au domicile familial à Charenton, il a été saisi, hier, d'un accès de démence meurtrière au cours duquel il a frappé sa mère à coups de couteau, lui donnant la mort. Le malheureux s'est ensuite rendu de lui-même au poste de police."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le drame du boulevard Rochechouart",
    "summary": "Le marchand de vins, M. Rochette, a abattu l'ouvrier Octave Amblin. Invoquant la légitime défense, le meurtrier est confronté aux enquêteurs alors que le corps de la victime révèle d'étranges tatouages.",
    "paragraphs": [
      "Le marchand de vins, M. Rochette, a tué d'un coup de revolver un ouvrier charpentier nommé Octave Amblin. M. Carpin, commissaire du quartier, a procédé, en présence du meurtrier, à la triste confrontation avec le cadavre.",
      "M. Rochette persiste à soutenir la thèse de la légitime défense, affirmant que l'ouvrier était lui-même porteur d'un revolver. Cette arme n'a cependant pu être retrouvée. L'instruction se poursuit sous la direction du juge M. Huet.",
      "À noter que le corps de la victime portait de nombreux tatouages, dont la devise « Marche ou crève » ainsi que divers souvenirs de Tunisie."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Faits Divers",
    "title": "Démantèlement d'une bande de briseurs de coffres-forts",
    "summary": "La Sûreté a démantelé une bande internationale spécialisée dans les vols par effraction. Les quatre malfrats, arrêtés rue Albouy, utilisaient un outillage de précision remarquable.",
    "paragraphs": [
      "À la suite d'un audacieux vol commis chez les Wagon-Lits en décembre dernier, la Sûreté a réussi à démanteler une bande composée de quatre individus étrangers : Michel Lopez (Argentin), Carlo Ferrari (Italien), Joseph Carrati (Italien) et Arthur Olès (Uruguayen).",
      "Ils ont été arrêtés en flagrant délit lors d'une tentative de vol chez un industriel, M. Zouderman, rue Albouy. Les malfaiteurs utilisaient des outils de haute précision destinés à des effractions particulièrement complexes.",
      "Leur outillage, saisi par M. Hamard, est considéré par les spécialistes comme une véritable merveille de mécanique."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame de la misère à la rue Linné",
    "summary": "Deux sœurs, Marguerite et Rose Boatiat, en proie à la misère et à la folie, ont été conduites à l'infirmerie du dépôt après un accès de violence survenu dans leur domicile de la rue Linné.",
    "paragraphs": [
      "Deux sœurs, Marguerite et Rose Boatiat, vivaient recluses dans la misère et la folie rue Linné. Hier, Marguerite, emportée par un accès de délire, s'en est prise violemment à sa sœur Rose, la frappant avec une chaise.",
      "Le commissaire Michaux, alerté par le voisinage, s'est rendu sur les lieux et a fait transporter les deux pauvresses à l'infirmerie du dépôt."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Faits Divers",
    "title": "Affaire de la rue d'Angoulême",
    "summary": "Édouard Flochel, ouvrier forgeron en état d'ébriété, a été arrêté après avoir poignardé M. Louis Hahn lors d'une altercation survenue rue d'Angoulême. La victime a été transportée à l'hôpital Saint-Louis.",
    "paragraphs": [
      "Édouard Flochel, un ouvrier forgeron, en état d'ivresse, a poignardé M. Louis Hahn au cours d'une altercation violente, survenue après qu'il eut importuné une jeune femme. La victime a été transportée d'urgence à l'hôpital Saint-Louis pour y recevoir les soins nécessités par son état."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentatives de suicide",
    "summary": "Le bilan des tentatives de suicide enregistre deux cas : celui d'un employé désespéré par des affaires de cœur, rue des Trois-Couronnes, et celui d'une ouvrière rue du Vertbois, accablée par la misère.",
    "paragraphs": [
      "Julien Trimai, un employé, a tenté de s'asphyxier au moyen de charbons ardents, rue des Trois-Couronnes, par désespoir amoureux. Il a été sauvé in extremis par l'incendie de sa chambre, qui a alerté le concierge de l'immeuble.",
      "Une jeune ouvrière, Alphonsine Boullet, a également tenté de se donner la mort en respirant les gaz de son appartement, rue du Vertbois, accablée par une extrême misère."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestations mouvementées à Paris",
    "summary": "La police a procédé à l'arrestation de trois individus violents rue de Grenelle. Parallèlement, un sous-brigadier a été blessé aux Batignolles en tentant de maîtriser un cheval emballé.",
    "paragraphs": [
      "Trois individus nommés Sage Troispouls, Frédéric Nourry et Jean Gaule ont été appréhendés rue de Grenelle après avoir violemment agressé des agents de police en plein exercice de leurs fonctions.",
      "Par ailleurs, le sous-brigadier Godefroy a été blessé aux Batignolles alors qu'il tentait de maîtriser un cheval emballé. L'accident a malheureusement causé des blessures à un enfant qui se trouvait sur les lieux."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue",
    "summary": "La banlieue parisienne a connu une journée marquée par plusieurs arrestations, des accidents du travail et la macabre découverte d'un corps retiré des eaux du canal à la Plaine-Saint-Denis.",
    "paragraphs": [
      "À Puteaux, le repris de justice Jean Volb, surnommé « le Bandit », a été appréhendé par les autorités locales.",
      "À Villeneuve-la-Garenne, l'ouvrier Émilien Délesseau a été grièvement blessé par des fûts de vin qui lui ont passé sur le corps lors d'une manipulation de chargement.",
      "À Bécon-les-Bruyères, le jeune Lucien Soulacroix, âgé de 11 ans, a fait une chute de cinq mètres en glissant malencontreusement sur une rampe d'escalier.",
      "À Saint-Ouen, Camille Scénarri a été agressé et dépouillé par quatre rôdeurs alors qu'il longeait la zone des fortifications.",
      "À Pantin, le jeune Paul Gabry, membre actif de la bande dite des « Écumeurs de la Plaine », a été arrêté par les forces de l'ordre.",
      "À la Plaine-Saint-Denis, le cadavre d'une femme, dont l'identité n'a pu être établie, a été retiré des eaux du canal."
    ]
  },
  {
    "id": 20,
    "page": 4,
    "category": "Courses",
    "title": "Nos pronostics",
    "summary": "Les épreuves hippiques du jour, incluant haies, handicap et steeple-chase, promettent une belle lutte. Voici les favoris retenus pour les prix de la Société des Steeple-Chases.",
    "paragraphs": [
      "Prix Pan de Canni : Haies, à réclamer, 3 000 francs, 2 500 mètres. Pronostics : Uve, L'Aurore.",
      "Prix de l'Époux de Paul : Haies, handicap, 3 000 francs, 3 000 mètres. Pronostics : Beauchief, Tendre Amour.",
      "Prix de la Société des Steeple-Chases de France : Steeple-chase, 4 500 francs, 3 400 mètres. Pronostics : Mélibée, Zou-Zou."
    ]
  },
  {
    "id": 21,
    "page": 4,
    "category": "Histoire",
    "title": "Jean Laborde",
    "summary": "Tananarive rend hommage à Jean Laborde, forgeron français devenu le conseiller de la reine et grand artisan du développement civilisateur à Madagascar au XIXe siècle, par l'érection d'un monument à sa mémoire.",
    "paragraphs": [
      "Un comité vient de se former à Tananarive pour l'érection d'un monument à la mémoire de Jean Laborde, cet ouvrier forgeron dont l'œuvre fut si féconde dans la grande île et qui apporta dans la capitale des Hovas les industries des pays civilisés.",
      "Ce fut en 1832 que Jean Laborde, embarqué sur un navire à destination des Indes, fut jeté par la tempête sur la côte de Madagascar. Accueilli par les indigènes, il était destiné à être vendu comme esclave, mais son habileté à travailler le bois et les métaux lui attira la considération de la reine, qui fit de lui son principal conseiller.",
      "Il fonda une école professionnelle, construisit le palais royal de Tananarive, apprit aux Malgaches à cultiver la vigne et différentes plantes d'Europe. Il leur enseigna aussi l'art de fabriquer les armes à feu, le verre, la chaux, la brique. Dans ce pays encore barbare, il semait ainsi les premiers germes de la civilisation.",
      "Nommé consul de France à Madagascar en 1841, il s'efforça d'étendre dans la grande île l'influence française, mais les pasteurs anglicans fomentèrent une insurrection et firent massacrer le roi Hova qui donnait à Jean Laborde l'appui de son autorité.",
      "Le génial ouvrier mourut en 1878 sans avoir eu la joie d'entrevoir la lointaine et définitive réalisation de son œuvre.",
      "Par une attention touchante, dit M. Lavoipière, président du comité, le général Galliéni a donné le nom de Jean Laborde au square fleuri situé à l'endroit où fut bâtie la première habitation de celui qu'on appelle à Madagascar le Grand Français. Sur cette place devrait maintenant s'élever la statue du glorieux pionnier. Perpétuer le souvenir de Jean Laborde, c'est en effet rendre hommage au génie fécond et civilisateur de la France."
    ]
  },
  {
    "id": 22,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Comédie-Française : On ne badine pas avec l'amour",
    "summary": "M. Dessonnes, jeune lauréat du Conservatoire, a fait ses débuts officiels à la Comédie-Française dans le rôle de Perdican, salué par le public pour sa chaleur et son interprétation du chef-d'œuvre de Musset.",
    "paragraphs": [
      "M. Dessonnes, qui a eu un premier prix aux derniers concours du Conservatoire, est un élève de M. Delaunay, dont le titulaire actuel à la Comédie-Française est M. Le Bargy. Le jeune lauréat avait paru d'abord dans le valet de Froufrou et n'y avait pas été très bon. Il a été bien meilleur dans le Perdican de On ne badine pas avec l'amour, qu'il jouait hier pour ses débuts officiels.",
      "Il porte le costume dix-huitième siècle, le pourpoint et la perruque poudrée, avec plus d'élégance que le costume moderne, où il semblait gauche et étriqué. D'une façon générale, le proverbe d'Alfred de Musset lui a porté bonheur. Il a joué ce rôle célèbre avec une chaleur qui lui a valu de justes applaudissements. On peut augurer qu'il fera une brillante carrière à la Comédie.",
      "Cette jolie pièce du poète des Nuits est toujours bien accueillie. Le sujet est de ceux auxquels un public français s'intéressera toujours. Perdican, qui a vingt ans, aime sa cousine Camille, qui le repousse parce que les religieuses du couvent d'où elle sort l'ont mise en garde contre les décevantes illusions de l'amour des hommes. Perdican, pour se venger, recherche une jeune paysanne et lui promet le mariage. Camille, qui tombe décidément dans les bras de son cousin, mais la petite Rosette, abandonnée, meurt de chagrin. La dernière scène est une des plus émouvantes qui soient au théâtre.",
      "Mlle Piartet est une admirable Camille et Mlle Muller une charmante Rosette. MM. Leloir, de Kéraudy et Laugier sont amusants dans les rôles de fantoches épisodiques."
    ]
  },
  {
    "id": 23,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Critique de l'Athénée",
    "summary": "Le critique déplore la programmation au théâtre de l'Athénée d'un vaudeville aux accents obscènes, indigne de la salle et en opposition flagrante avec le bon goût de la Comédie-Française.",
    "paragraphs": [
      "Tandis que la prose superbe de Musset triomphait à la Comédie-Française, le théâtre de l'Athénée donnait la première représentation d'un vaudeville ordurier, sur lequel il serait pénible d'insister.",
      "J'enrageais de voir qu'un jeune homme fort bien doué, qui a de l'esprit et de la verve, du talent même, perdait tous ces dons sur un sujet qui relève des publications obscènes et clandestines. C'est dommage. Et le directeur du joli théâtre de l'Athénée, à quoi songe-t-il ? Il y a deux manières, en effet, d'attirer le public dans une salle de spectacle : on peut et on doit convier les gens de bon ton à des soirées de bon goût; on peut aussi exagérer le numéro de sa maison et attirer la mauvaise compagnie. Je m'étonne que M. Deval choisisse la seconde façon.",
      "Un acte très gai et très spirituel de M. André Picard, Un homme délicat, est égaré dans cette laide aventure."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Social",
    "title": "Bulletin du travail : Travailleurs des chemins de fer",
    "summary": "Une délégation syndicale des chemins de fer de l'État a été reçue par le chef de cabinet du ministre des Travaux publics pour discuter des revendications des agents et de l'amélioration de leurs conditions.",
    "paragraphs": [
      "En l'absence du ministre des Travaux publics, M. Dejean, son chef de cabinet, a reçu hier matin une délégation du groupe syndical des travailleurs des chemins de fer de l'État, qui est venue lui exposer les vœux des agents du réseau et les projets qu'ils voudraient voir réaliser pour l'amélioration de leur condition.",
      "M. Dejean a assuré la délégation de toute la sympathie du ministre des Travaux publics. Après avoir rappelé ce que M. Pierre Baudin a déjà fait pour les travailleurs des chemins de fer, il a promis de lui soumettre dès sa rentrée les vœux dont il était saisi et que le ministre examinera, de concert avec M. Metzger, directeur des chemins de fer de l'État, dans le plus large esprit de bienveillance et avec le désir de les voir aboutir."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Social",
    "title": "Les tisserands de Saint-Etienne",
    "summary": "Les tisseurs en grève de Saint-Etienne ont voté à l'unanimité le boycottage des fabricants refusant leurs revendications, marquant une étape décisive dans le conflit social qui frappe l'industrie locale.",
    "paragraphs": [
      "Les tisseurs en grève ont tenu cet après-midi une réunion en partie double à la Bourse du travail et au Prado ; cette dernière a été la plus nombreuse.",
      "Plusieurs orateurs y ont pris la parole, notamment M. Régis Faure, qui a engagé les tisseurs à prendre une résolution énergique, puisque les fabricants refusent de leur faire les concessions demandées, et M. Jullien, qui a poussé les tisseurs à ne plus travailler pour les patrons qui ont refusé de souscrire aux revendications des ouvriers. Ce dernier a proposé l'ordre du jour suivant : « Nous, soussignés, passementiers et veloutiers de la ville et de la campagne, prenons l'engagement de ne pas travailler pour les fabricants qui auront refusé d'accepter toutes nos revendications. Toute infraction au présent engagement sera punie d'une amende de 100 francs. »",
      "Cette motion a été acceptée à l'unanimité ; c'est une sorte de mise à l'index de certaines maisons ; mais espérons que tout s'arrangera une fois le travail repris et que ce sera un acheminement vers la fin de ce lamentable conflit qui n'a déjà que trop duré pour la prospérité de toute une industrie."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Social",
    "title": "Grève des mineurs à Saint-Hilaire",
    "summary": "À Saint-Hilaire, trois cents mineurs ont cessé le travail. Ils réclament une augmentation de salaire et la tension monte au sein du bassin minier.",
    "paragraphs": [
      "On télégraphie de Moulins : Les ouvriers mineurs de Saint-Hilaire, au nombre de trois cents, viennent de se mettre en grève. La principale revendication des ouvriers est une augmentation de salaire. Le travail a cessé et les esprits sont très surexcités."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Social",
    "title": "Les mineurs de Bohême",
    "summary": "La grève des mineurs en Bohême paralyse l'Autriche. Avec 70 000 grévistes, les pénuries de combustible menacent les villes et l'industrie, tandis que le conflit pourrait s'étendre au bassin rhénan.",
    "paragraphs": [
      "La grève des mineurs qui a éclaté il y a quelques jours à Ostrau, en Bohême, est en train de prendre des proportions gigantesques. On estime que plus de 70 000 ouvriers refusent actuellement de travailler.",
      "Une dépêche de Vienne indique que si l'on n'arrive pas à une entente entre les patrons et les ouvriers, il est à craindre que le manque soudain de combustible soit ressenti de façon grave à travers toute l'Autriche. Une disette de charbon aurait pour premier effet d'affecter le trafic des chemins de fer, l'éclairage des villes et tous les établissements industriels, sans parler de la détresse qui résulterait du manque de chauffage parmi les classes pauvres de la population en cette saison.",
      "Il est possible que le danger d'une pareille calamité ne soit pas aussi imminent que certains bruits le laissent entendre ; mais il existe et, en conséquence, le nouveau ministère, au lendemain même de sa constitution, se trouve en présence d'une difficulté des plus graves qu'il lui importe de résoudre promptement.",
      "Depuis quelques jours, des négociations ont été entamées entre les patrons et les ouvriers, mais il semble que, de part et d'autre, les dispositions soient peu conciliantes jusqu'ici. Les ouvriers demandent la journée de huit heures, un minimum de salaire garanti et une augmentation progressive de paye.",
      "D'après les dépêches reçues hier des provinces, le manque de charbon cause déjà des troubles sérieux. On dit qu'à Prague, il n'y a que quatre jours de combustible en réserve. Dans d'autres villes de Bohême, de grandes manufactures ont été obligées de fermer leurs portes ou de réduire considérablement leur activité. À Pilsen, la détresse est telle que samedi dernier un wagon de marchandises chargé de charbon a été pillé dans une gare par une population affolée sans que la police osât intervenir. À Vienne même, les prix ont considérablement haussé.",
      "De Berlin : La grève des mineurs autrichiens menace de gagner le bassin houiller rhénan. Plusieurs fosses ont résolu de chômer le 1er février si les ouvriers n'obtiennent pas une augmentation de salaire. La cessation des arrivages de charbon de Bohême a obligé la municipalité de Dresde à restreindre l'éclairage électrique, ainsi que la circulation des tramways. Plusieurs écoles communales sont fermées, le charbon manquant pour chauffer les classes."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les tragédies de l'amour",
    "summary": "Poussé par la jalousie face au mariage imminent de Colette et Gaston, Pierre sombre dans le désespoir et ourdit un acte tragique pour hanter le bonheur de son rival.",
    "paragraphs": [
      "Pierre ne songeait pas à enfreindre son serment. Mais bien qu'il eût été convenu qu'il mourrait au lendemain du mariage, rien, en somme, ne l'empêchait d'avancer sa mort de quelques jours. Ce mariage était maintenant certain ; Gaston le lui avait écrit et Colette acceptait tout. Elle allait quitter le château, quitter le pays, et Gaston la rejoindrait à Paris, où aurait lieu la cérémonie.",
      "Gaston parti, il m'échappe. Comment faire ? De même que Colette à sa fenêtre, pendant la dernière nuit passée à Villefort, avait espéré jusqu'au dernier moment qu'un événement quelconque interviendrait tout à coup pour empêcher ou retarder son départ, de même, à ces suprêmes heures, la jalousie de Girodias se demandait si, enfin, quelque chose ne se produirait pas qui renverserait l'échafaudage de tous ces projets.",
      "Il sortit, la tête en feu. Il fit deux ou trois fois le tour du jardin. Il souffrait trop. Il avait résolu d'en finir. Tout à coup, il vit Gaston qui sortait et descendait le coteau. Il se dirigeait vers le parc qui avoisine Villefort. Il va la voir, se dit Pierre. Il va prendre rendez-vous avec elle pour la retrouver à Paris.",
      "Et soudain, se levant avec un rite sinistre : « Ah ! le fantôme ! oui ! j'ai trouvé le moyen de laisser ce fantôme dans sa vie. » Il rentra chez lui et commença par mettre de l'ordre dans ses affaires. Quand il eut fini, il chercha une corde solide. « Je vais me pendre chez lui. Quand il rentrera, c'est moi qu'il trouvera. Quelle surprise. »",
      "Il traversa le jardin de Gaston, entra dans la maison, monta sur un tabouret et essaya la résistance du clou auquel était accrochée une tête de sanglier. Il y noua sa corde. Quand tout fut prêt, il entr'ouvrit la porte. Il voulait jouir une dernière fois de la lumière. Il rentra, referma la porte. La corde l'attendait. Il y passa le cou et brusquement, il repoussa l'escabeau sur lequel il était grimpé.",
      "Gaston, de son côté, s'était heurté à une obstination que rien ne put vaincre à Villefort. La jeune fille était restée invisible. Il reprit le chemin de la maison. Il arrivait aux Grandes-Roches, là un dernier flot de haine débordant. Il pique une fleur à sa boutonnière. En chantonnant, il rentre chez lui, monte le perron. Il tourne le bouton de la porte et le voilà dans le vestibule. Là, il reste soudain affolé, ne comprenant pas. Près de lui, contre la muraille, un pendu. Et ce pendu, ses lèvres bleues, la bouche entrouverte, comme dans un ricanement atroce, voit les dents. Un cri étouffé : « Pierre ! Pierre ! »"
    ]
  }
];
