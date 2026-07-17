// Date: 1900-06-29
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-06-29 (Version Restaurée, 23 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique Scientifique",
    "title": "Les Miracles de la Chimie",
    "summary": "L'Académie française accueille M. Berthelot, maître de la synthèse chimique. Ce siècle, marqué par la vapeur et l'électricité, doit à la chimie ses plus grandes révolutions industrielles, de la soude aux colorants.",
    "paragraphs": [
      "L'Académie française a appelé hier dans son sein le plus éminent de nos savants, M. Berthelot, dont les travaux sur la synthèse chimique ont marqué une étape glorieuse dans la voie du progrès scientifique.",
      "Le siècle qui s'achève a été surnommé le siècle de la vapeur et de l'électricité, mais il aurait pu, avec tout autant de raison, être appelé le siècle de la chimie. D'une science timide à ses débuts, elle a acquis un développement éblouissant.",
      "La chimie industrielle est la face visible et utilitaire de ces conquêtes. À l'Exposition universelle, la section consacrée aux grandes industries chimiques témoigne de la grandeur de ces applications.",
      "L'industrie de la soude illustre parfaitement cette révolution. Autrefois tributaires des algues, nous avons pu, grâce à Nicolas Leblanc et plus tard à Solvay, développer des procédés d'extraction directe, bouleversant l'organisation du travail et libérant l'industrie des anciennes sujétions.",
      "Cette science continue de progresser avec l'apport de l'électricité dans les laboratoires, permettant de transformer le sel en chlore et en soude, une avancée majeure pour la consommation courante.",
      "L'industrie de la parfumerie française, bien que renommée, doit désormais faire face à la concurrence étrangère qui utilise la chimie pour créer des essences artificielles. Si l'on peut regretter l'intrusion de ces noms barbares, ces produits bon marché permettent à tous d'accéder au luxe.",
      "Il en va de même pour les matières colorantes. La découverte des couleurs d'aniline a révolutionné la teinture, détrônant les produits naturels. L'Allemagne domine aujourd'hui cette industrie avec ses nombreuses usines et ses savants acharnés.",
      "Pour l'avenir, nos industries doivent s'inspirer de ces méthodes et ne pas regretter vainement le passé, en faisant de la science leur guide infaillible."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une Jeune Fille Assassinée à Herméville",
    "summary": "Un crime atroce a secoué Herméville. Le menuisier Ernest Michel, vingt ans, a sauvagement tué Victorine Péroux lors d'un vol. Le meurtrier a été appréhendé peu après près d'Aix-Abancourt.",
    "paragraphs": [
      "Un crime vient d'être commis dans la commune d'Herméville. Mardi soir, Ernest Michel, un menuisier de vingt ans, est entré chez sa voisine, Mme veuve Péroux, avec l'intention de la voler.",
      "Il ne trouva que la fille de celle-ci, Victorine, âgée de vingt-deux ans. Après une lutte violente, il l'a frappée au visage et lui a tranché la gorge avant de la dépouiller de 137 francs 50 et de s'enfuir par la fenêtre.",
      "Le meurtrier a été arrêté une heure et demie plus tard près de la gare d'Aix-Abancourt par le beau-frère de la victime. Le parquet de Verdun s'est rendu sur place pour l'enquête."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "L'Armée et la Loi",
    "summary": "Au Palais-Bourbon, le ministre de la Guerre a réaffirmé la loyauté de l'armée envers la République, balayant les tentatives politiciennes d'instrumentaliser les récentes démissions militaires.",
    "paragraphs": [
      "Hier, au Palais-Bourbon, le ministre de la Guerre a rendu hommage à l'armée, déclarant qu'elle est prête à défendre à la fois la frontière et la loi.",
      "La majorité qui a approuvé les déclarations du gouvernement concernant la démission du général Dalanne a ramené à sa juste valeur un incident largement instrumentalisé par les ennemis de la République.",
      "L'armée demeure l'épée de la patrie, fidèle à sa mission, et ne se laisse pas influencer par les tentatives de jeter des passions politiques dans ses rangs."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Madagascar : Succès du concours agricole",
    "summary": "Le concours agricole de Tananarive illustre le progrès fulgurant de l'élevage malgache. Le général Pennequin a salué ces avancées qui assurent le développement économique et la pacification durable de l'île.",
    "paragraphs": [
      "Des nouvelles de Tananarive font état de la pleine réussite du concours agricole, démontrant les progrès rapides de l'élevage dans la colonie. Les bêtes y sont désormais comparables aux meilleurs spécimens européens.",
      "Le général Pennequin a présidé la distribution des récompenses devant une foule d'indigènes enthousiastes. La situation générale dans l'île est au beau fixe, avec une pacification en cours dans le sud."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "International",
    "title": "Les Événements de Chine",
    "summary": "Le sauvetage de l'amiral Seymour apporte un répit, mais la situation en Chine reste critique. La menace des troupes régulières et l'incertitude planant sur l'impératrice Tsou-Hsi inquiètent les chancelleries.",
    "paragraphs": [
      "La situation en Chine semble plus rassurante après le sauvetage de l'amiral Seymour par un détachement international. Il a été ramené à Tien-Tsin, bien qu'il n'ait pas pu atteindre Pékin.",
      "Un fonctionnaire spécialiste des affaires chinoises souligne toutefois la gravité de la situation, notant que l'impératrice Tsou-Hsi pourrait être impuissante face à l'insurrection et que les troupes régulières chinoises, bien armées, représentent une menace réelle pour les Européens.",
      "Des télégrammes confirment l'arrivée de l'amiral Seymour à Tien-Tsin et les pertes subies par les différentes troupes internationales lors des combats autour de l'arsenal."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Chronique Littéraire",
    "title": "Feuilleton : La Main Gauche (Suite)",
    "summary": "Marcel Vandenesse, magistrat chargé de l'enquête sur le meurtre de Lydie, s'inquiète des conséquences de son passé sur l'affaire. Rentré au foyer, il dissimule son trouble devant son épouse Jeanne.",
    "paragraphs": [
      "Marcel Vandenesse, magistrat chargé de l'enquête sur le meurtre de Lydie, s'inquiète de son implication personnelle dans cette affaire. Il craint que ses propres aventures passées ne se retournent contre lui.",
      "Rentré chez lui, il tente de dissimuler son trouble face à son épouse Jeanne, qui, bien qu'éveillée, semble ignorer les tourments qui accablent son mari."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Informations Diverses",
    "title": "Échos de l'Exposition et de l'Académie",
    "summary": "M. Berthelot est élu à l'Académie française. Par ailleurs, lors d'une visite présidentielle à l'Exposition, la foule dense a provoqué quelques bousculades lors de l'inspection des sections minières et métallurgiques.",
    "paragraphs": [
      "M. Berthelot a été élu au premier tour à l'Académie française avec 19 voix, succédant à M. Joseph Bertrand.",
      "Le Président de la République a effectué hier une visite à l'Exposition, marquée par quelques bousculades dans la foule malgré la présence des autorités policières. Le cortège a visité les sections des mines et de la métallurgie."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Visite de l'Exposition et pavillon du Creusot",
    "summary": "Démonstrations de robustesse sidérurgique, splendeurs de l'Exposition rétrospective et inauguration du pavillon du Creusot par le ministre Millerand marquent cette journée d'Exposition.",
    "paragraphs": [
      "On regarde encore pendant quelques minutes des haches suédoises, d'une trempe telle que l'un des membres du jury coupe en deux une barre de fer de vingt-cinq millimètres de diamètre.",
      "On remonte l'escalier et on se dirige vers l'Exposition rétrospective : là tout est réellement magnifique : les cuivres, les bronzes, les étains anciens, les lourdes grilles forgées, les délicats coffrets précieusement ouvrés.",
      "Le pavillon du Creusot, constitué par une énorme coupole blindée, hérissée de canons, s'élève quai d'Orsay, à l'extrémité du palais des Armées de terre et de mer.",
      "Une fête extrêmement brillante y a été donnée hier, sous la présidence de M. Millerand, ministre du Commerce et de l'Industrie."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "La section des Fils, Tissus et Vêtements",
    "summary": "Le Président Loubet explore la section des tissus et la couture de l'Exposition, observant les prouesses industrielles des métiers mécaniques malgré le vacarme assourdissant des ateliers.",
    "paragraphs": [
      "De la métallurgie, on passe sans transition dans les classes des fils, tissus et vêtements. MM. Pouyer-Quertier, Muzet et Chabrières guident M. Émile Loubet à travers leur groupe.",
      "On fait au rez-de-chaussée une longue station devant les expositions des grands couturiers. Tout est délicieux dans cette exposition de la couture, et l'on s'y attarderait volontiers, n'était la foule.",
      "Le chef de l'État passe ensuite dans la section des Tissages, où le vacarme est assourdissant. La vapeur fuse et ronfle, mais le président écoute cependant les explications données."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Social",
    "title": "Chiffres des entrées à l'Exposition",
    "summary": "L'affluence à l'Exposition Universelle demeure importante avec plus de 111 000 entrées enregistrées, incluant les visiteurs du site principal et de l'annexe de Vincennes.",
    "paragraphs": [
      "Beaucoup de monde avant-hier à l'Exposition. On a enregistré 111 600 entrées, dont 89 200 avec tickets.",
      "L'annexe de Vincennes figure dans ce total pour 6 870 visiteurs, dont 1 465 avec tickets."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Inauguration à l'annexe de Vincennes",
    "summary": "L'annexe de l'Exposition Universelle de Vincennes a inauguré sa section allemande dédiée au sauvetage, équipée de pompes, d'échelles et d'une tour de manœuvres pour les pompiers.",
    "paragraphs": [
      "Hier, à deux heures, a eu lieu à l'annexe de l'Exposition de Vincennes l'inauguration officielle de la section allemande de sauvetage.",
      "La section comprend un vaste hall rectangulaire dans lequel sont exposés les divers modèles de pompes et échelles, ainsi qu'une haute tour de trente mètres qui servira aux manœuvres des pompiers."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "Chambre des Députés : Séance du 28 juin",
    "summary": "Le président du Conseil, M. Waldeck-Rousseau, a répondu à l'interpellation sur la gestion du ministère de la Guerre. La Chambre a soutenu le cabinet tout en votant une mesure sur la discipline des officiers.",
    "paragraphs": [
      "M. Waldeck-Rousseau, président du Conseil, a accepté la discussion immédiate de l'interpellation de M. Firmin Faure sur la violation par le ministre de la Guerre du décret du 6 mai instituant le service d'état-major général.",
      "Par 306 voix contre 220, la Chambre a voté un ordre du jour approuvant les déclarations du ministre de la Guerre, complété par une disposition additionnelle de M. Sembat imposant la discipline aux officiers."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "Sénat : Séance du 28 juin",
    "summary": "Le Sénat, présidé par M. Fallières, a examiné un projet de loi du ministre de l'Agriculture, M. Jean Dupuy, visant à augmenter l'effectif national des étalons pour améliorer la cavalerie.",
    "paragraphs": [
      "La séance est ouverte sous la présidence de M. Fallières. M. Charles Dupuy, nouveau sénateur de la Haute-Loire, assiste à la séance.",
      "Le Sénat discute un projet de loi ayant pour objet l'augmentation de l'effectif général des étalons nationaux. Le ministre de l'Agriculture, M. Jean Dupuy, défend le projet gouvernemental pour améliorer la qualité de la cavalerie française."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Une mort mystérieuse à Rambouillet",
    "summary": "Le garde-chasse Rougeolle a été retrouvé mort près de Sermaize avec des blessures suspectes à la tête. Une enquête est ouverte pour déterminer l'origine de ce décès tragique.",
    "paragraphs": [
      "Le cadavre du garde-chasse Rougeolle, au service de M. de Castellane, a été découvert avant-hier soir au lieu-dit l'Aulnay, dans la commune de Sermaize.",
      "Le corps portait deux blessures, l'une à la base du crâne et l'autre à la mâchoire. L'enquête se poursuit pour déterminer s'il s'agit d'un crime ou d'une chute accidentelle."
    ]
  },
  {
    "id": 15,
    "page": 4,
    "category": "Spectacles",
    "title": "La Scala",
    "summary": "La Scala connaît un triomphe avec sa nouvelle revue, portée par les talents de Polaire, Mme Sorval et le comique Polin, assurant des salles combles dans une atmosphère joyeuse.",
    "paragraphs": [
      "Mme Sorval a pour elle sa beauté, sa diction nette et sa jolie voix. Polaire représente la Parisienne avec son espièglerie coutumière et son charme troublant. Dermmy, exquise et futée; Darlèle, Graziella, Delière, etc., et tout un essaim de charmantes comparses font valoir qui les répliques des auteurs, qui les costumes d'une élégante indiscrétion, signés Landoff. Les décors sont signés Ménessier.",
      "Il faut mentionner à part les danses russes des Malatzoff, la superbe Espagnole Paola del Monte et la mignonne danseuse D'Auvray.",
      "Voilà donc un nouveau succès pour la Scala, qui connaîtra encore et longtemps les salles combles des belles soirées. Et si « Paris s'expose » ne suffisait pas à assurer ce résultat, Polin, l'inoubliable pioupiou Potin, qu'on applaudit avant la revue, viendrait à la rescousse."
    ]
  },
  {
    "id": 16,
    "page": 4,
    "category": "Spectacles",
    "title": "L'Olympia",
    "summary": "Victime de son succès, l'Olympia prolonge les matinées du dimanche avec le programme complet : « La Belle aux Cheveux d'or », les prouesses animalières de Léonidas et les tours de l'incomparable Fregoli.",
    "paragraphs": [
      "Bien que la dernière matinée eût été annoncée depuis longtemps à l'Olympia, la direction est dans l'obligation de continuer à jouer le dimanche après-midi pour donner satisfaction aux nombreuses personnes qui ne peuvent applaudir l'artiste incomparable Fregoli que dans la journée.",
      "Après-demain, donc, matinée avec tout le programme qui fait fureur le soir : le joli ballet La Belle aux Cheveux d'or, les Peretz, Léonidas et ses admirables artistes à quatre pattes, et enfin le célèbre Fregoli."
    ]
  },
  {
    "id": 17,
    "page": 4,
    "category": "Spectacles",
    "title": "Folies-Marigny",
    "summary": "Le public se presse aux Folies-Marigny pour admirer les bas-reliefs de M. Jean Marcel, dont la perfection plastique est complétée par les prestations de Liane de Vries, Guerrerito, les Agoust et Spadoni.",
    "paragraphs": [
      "Tous les amateurs de choses d'art ont à cœur d'aller passer une soirée aux Folies-Marigny pour admirer les reproductions artistiques de M. Jean Marcel et de son admirable troupe. L'illusion produite par les bas-reliefs est, surtout, parfaite. Le programme se complète d'ailleurs de façon remarquable par Liane de Vries, Guerrerito, les Agoust et Spadoni."
    ]
  },
  {
    "id": 18,
    "page": 4,
    "category": "Les Sports",
    "title": "Course Paris-Toulouse",
    "summary": "Une épreuve automobile Paris-Toulouse est envisagée pour le 23 juillet prochain en remplacement de la course de l'Eventail, avec des mesures de sécurité strictes pour la traversée des agglomérations.",
    "paragraphs": [
      "Nous aurons fort probablement, le 23 juillet prochain, une course d'automobiles Paris-Toulouse.",
      "Cette épreuve remplacerait la course dite de l'Eventail, inscrite au programme des manifestations automobiles de l'Exposition.",
      "Des précautions spéciales seraient prises pour la traversée des villes et des villages ; on parle d'un homme au pas gymnastique précédant les concurrents de l'entrée à la sortie."
    ]
  },
  {
    "id": 19,
    "page": 4,
    "category": "Les Sports",
    "title": "Concours de Lawn-Tennis",
    "summary": "Le grand tournoi international de lawn-tennis de l'Exposition universelle débutera le 6 juillet. Les inscriptions, ouvertes jusqu'au 30 juin, sont à adresser à M. Raoul Fabens.",
    "paragraphs": [
      "C'est le 6 juillet prochain que commencera le grand tournoi international de lawn-tennis, organisé à Paris à l'occasion de l'Exposition universelle.",
      "Le programme comprend : double messieurs, simple dame, double mixte, handicaps simple messieurs 1re classe, simple messieurs 2e classe, simple dame, double messieurs 1re classe, double messieurs 2e classe, double mixte.",
      "Droits d'engagement : championnats simples, 10 francs ; championnat double, 20 francs par paire ; championnat mixte, 10 francs par paire ; handicaps, 5 francs par joueur. Adresser les engagements jusqu'au 30 juin à M. Raoul Fabens, 229, rue Saint-Honoré, Paris."
    ]
  },
  {
    "id": 20,
    "page": 4,
    "category": "Les Sports",
    "title": "Elkes-Baugé",
    "summary": "Le cycliste Baugé décline le défi de l'Américain Harry Elkes, qui imposait l'usage de tandems à pétrole, préférant conserver ses propres méthodes d'entraînement.",
    "paragraphs": [
      "Nous avons dit que le coureur américain Harry Elkes défiait Baugé sur une heure, offrant même de lui rendre un kilomètre. Baugé refuse, prétextant qu'il ne veut pas changer son mode d'entraînement. On sait que le coureur américain demandait l'emploi exclusif de tandems à pétrole."
    ]
  },
  {
    "id": 21,
    "page": 4,
    "category": "Les Sports",
    "title": "Un concours de tir",
    "summary": "À l'approche du concours international de Satory, la Société l'Avenir propose aux tireurs parisiens un concours public au stand militaire d'Auteuil, ouvert dès ce dimanche jusqu'au 9 juillet.",
    "paragraphs": [
      "À la veille du concours international de tir de l'Exposition à Satory, les tireurs parisiens ont une magnifique occasion de s'exercer en participant au concours public de tir offert par la Société l'Avenir au stand militaire d'Auteuil.",
      "Ce concours commencera après-demain dimanche ; il sera ouvert tous les jours de huit heures du matin à six heures du soir, jusqu'au lundi 9 juillet prochain. Le programme du concours de l'Avenir est envoyé à toute personne qui en fait la demande à M. Paul Lefèvre, 10, boulevard des Batignolles."
    ]
  },
  {
    "id": 22,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Marché aux bestiaux de la Villette",
    "summary": "Compte-rendu du marché aux bestiaux du 28 juin à la Villette, caractérisé par une morosité persistante et une tendance générale à la baisse des cours sur toutes les catégories de bétail.",
    "paragraphs": [
      "Marché du jeudi 28 juin. Bœufs : Vente difficile et baisse de 10 à 20 fr. par tête. On cote : Normands, de 72 à 75 c. ; bœufs blancs, de 70 à 75 c. ; Choletais, de 60 à 68 c. ; Vendéens, de 57 à 60 c. le demi-kilo net.",
      "Veaux : Vente mauvaise et baisse de 5 centimes par demi-kilo. On cote : choix de Brie, de Beauce, du Gâtinais, de 0,85 à 0,95 ; champenois, de 0,75 à 0,85 ; autres provenances, de 0,55 à 0,70 le demi-kilo net.",
      "Moutons : Vente difficile et légère baisse. On cote : petits moutons du Centre, de 0,95 à 1 fr. ; métis de Brie, de 0,93 à 0,98 ; métis beaucerons, champenois, bourguignons, de 0,88 à 0,93 le kilo net.",
      "Porcs : Vente difficile et prix faibles. On cote : bons porcs de l'Ouest, de 0,50 à 0,52 et ceux du Centre, de 0,50 à 0,52 ; porcs gras, de 0,60 à 0,65 c. le demi-kilo vif. À la pièce, on cote de 0,64 à 0,77 le demi-kilo net."
    ]
  },
  {
    "id": 23,
    "page": 4,
    "category": "Feuilleton",
    "title": "La voix d'outre-tombe",
    "summary": "Mademoiselle de Saint-Amand accueille Marguerite à l'hôtel d'Argile. Lors de la visite des lieux, Marguerite demeure étonnamment impassible devant les portraits saisissants de Jacques et de Michel.",
    "paragraphs": [
      "Dès le lendemain de son arrivée avec Hélène, mademoiselle de Saint-Amand reçut la visite de Daniel. « Mère est à ta disposition », dit-il. « Elle n'a pas osé se présenter ici sans savoir si cela vous plairait ». « Certainement, elle peut venir », répondit Gabrielle.",
      "À deux heures précises, Marguerite arriva. Elle fut heureuse de revoir Gabrielle. Gabrielle complaisamment lui fit visiter l'hôtel d'Argile. Il n'y avait pas une pièce où ne resplendissent, dans leurs cadres d'or, les portraits de Jacques et de Michel.",
      "Ces regards clairs et scrutateurs, si pleins de vie qu'on les eût jurés appartenant, non à des toiles inertes, mais à des êtres de chair et d'os, ne parurent ni impressionner ni bouleverser Marguerite."
    ]
  }
];
