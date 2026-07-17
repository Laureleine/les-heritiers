// Date: 1900-03-12
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-03-12 (Version Restaurée, 25 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "International",
    "title": "Guerre anglo-boer : Propositions de paix",
    "summary": "Le gouvernement britannique écarte toute négociation immédiate, jugeant impossible un retour au statu quo et remettant à plus tard la définition des conditions de paix pour les deux Républiques.",
    "paragraphs": [
      "Plusieurs journaux rapportent que le gouvernement ne croit pas le moment venu de formuler une déclaration concernant les conditions de paix.",
      "L'opinion générale de tous les partis politiques est que le retour au statu quo ante bellum est impossible.",
      "Une modification matérielle du système gouvernemental des deux Républiques sera évidemment la conséquence ; mais la perspective du rétablissement est encore trop lointaine pour formuler dès à présent les conditions définitives du règlement sud-africain."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "International",
    "title": "La position du cabinet anglais face aux présidents Krüger et Steijn",
    "summary": "Le cabinet anglais a rejeté les ouvertures de paix des présidents Krüger et Steijn, exigeant la capitulation sans conditions des deux Républiques pour mettre fin au conflit.",
    "paragraphs": [
      "Je puis vous confirmer de la façon la plus absolue le bruit selon lequel les présidents Krüger et Steijn ont fait des ouvertures au cabinet anglais pour lui proposer la paix, moyennant le maintien de l'indépendance des Républiques.",
      "Le fait s'est produit dans la nuit de mardi à mercredi.",
      "Dès mercredi, la réponse du gouvernement a été transmise aux deux présidents par l'intermédiaire que ceux-ci avaient eux-mêmes choisi. Je crois savoir que cette réponse est d'un caractère intransigeant. Elle équivalait à dire que la seule condition à laquelle l'Angleterre était disposée à conclure la paix était la capitulation sans conditions des deux Républiques."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Tribune",
    "title": "Lettre ouverte sur la reine Victoria et la presse française",
    "summary": "Une critique de l'attitude hostile d'une partie de la presse française envers la reine Victoria, jugée contraire à l'idéal chevaleresque et dénuée de fondement raisonnable.",
    "paragraphs": [
      "Monsieur le directeur, loin de la France, nous sentons mieux que tout autre combien nous sommes Français. Il nous est bien pénible de voir une grande partie de la presse française s'animer contre l'Angleterre à propos de la guerre actuelle.",
      "Non seulement ces journalistes ne sont pas satisfaits de montrer leur hostilité envers l'Angleterre, mais ils ont perdu cet idéal chevaleresque si caractéristique des Français, puisqu'ils n'hésitent pas à attaquer une dame, une vieille dame, parce que cette dame est la reine d'Angleterre. Si ces écrivains étaient guidés par la raison, et non par le ressentiment, ils comprendraient que la reine n'est pas du tout responsable de la guerre."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'Affaire Philipp",
    "summary": "Le commissariat du Havre a saisi, sur commission rogatoire, plusieurs bagages appartenant à un nommé Philipp destinés à l'embarquement pour New-York, contenant potentiellement des documents compromettants.",
    "paragraphs": [
      "Notre correspondant du Havre nous télégraphie que, agissant en vertu d'une commission rogatoire, le commissaire de police de la deuxième section a saisi dans les bureaux de MM. Hernupwon et Cie des bagages, et notamment une malle, qui devaient être embarqués hier à bord de la Gascogne en partance pour New-York.",
      "Ces colis, à l'adresse d'un nommé Philipp, appartiennent certainement à cet homme et contiennent, croit-on, des documents. Après avoir été scellés, ils ont été immédiatement expédiés au parquet de la Seine."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Décorations et manœuvres",
    "summary": "Le gouvernement décore le lieutenant de Tonguédec pour son retour de la mission Marchand, tandis que les états-majors préparent les prochaines manœuvres dans l'Ouest sous la direction du général Jamont.",
    "paragraphs": [
      "Le Conseil des ministres a décidé de décerner la croix de chevalier de la Légion d'honneur à M. le lieutenant de Tonguédec, qui a ramené en France l'arrière-garde de la mission Marchand.",
      "Le vote de la Chambre repoussant la session des 28 jours et des 13 jours en 1900 permet aux états-majors de reprendre avec confiance la préparation des grandes manœuvres. Les plus importantes opérations auront lieu dans l'Ouest, sous la haute direction du généralissime, le général Jamont."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Social",
    "title": "Les Pompiers de Paris",
    "summary": "Face à l'Exposition universelle, le ministère de la Guerre et la Préfecture de police réforment le recrutement des sapeurs-pompiers de Paris pour assurer une meilleure stabilité des cadres et des officiers.",
    "paragraphs": [
      "La préfecture de police et le ministère de la Guerre étudient les améliorations à introduire dans le recrutement et l'organisation du régiment des sapeurs-pompiers de Paris, notamment en prévision de l'Exposition universelle.",
      "Le général de Giffa a reconnu l'inconvénient des changements fréquents d'officiers. Des ordres seront donnés pour que les pompiers qui seraient compris dans une promotion soient maintenus au corps s'il s'y trouve des vacances de leur nouveau grade.",
      "Sur proposition du préfet de police, le ministère de la Guerre vient de soumettre à la signature du Président de la République la nomination sur place de six sous-officiers au grade d'adjudant."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Arts et Culture",
    "title": "Ouverture du musée Gustave Moreau",
    "summary": "Le Président de la République inaugurera bientôt, rue La Rochefoucauld, le musée légué à l'État par Gustave Moreau, regroupant plus de mille peintures et douze mille dessins du maître.",
    "paragraphs": [
      "Une visite du Président de la République inaugurera bientôt, rue La Rochefoucauld, le musée légué à l'État par Gustave Moreau, le peintre des rêves philosophiques.",
      "Ce musée est le sanctuaire de ses œuvres, collection superbe comprenant près de mille peintures à l'huile, plus de cinq cents aquarelles et environ douze mille dessins. Cela représente plus de soixante ans d'un travail solitaire, dans cet atelier célèbre dont le peintre avait fait un lieu inaccessible aux profanes."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "International",
    "title": "Un complot au Brésil",
    "summary": "À Rio-de-Janeiro, les autorités ont déjoué une tentative de coup d'État fomentée par les monarchistes, qui projetaient de renverser la République et d'installer un gouvernement provisoire.",
    "paragraphs": [
      "Rio-de-Janeiro, 11 mars. Depuis environ un mois, le gouvernement savait que les adversaires du régime actuel projetaient de créer des difficultés intérieures et de renverser la République.",
      "Les autorités ont découvert que les monarchistes avaient préparé un gouvernement provisoire. L'enquête continue et presque tous les individus compromis sont en prison."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Économie",
    "title": "Le commerce franco-américain",
    "summary": "Washington, 10 mars. Le secrétaire d'État John Hay aurait sollicité auprès de la France une prolongation d'un an pour la ratification du traité de réciprocité commerciale, une requête favorablement accueillie.",
    "paragraphs": [
      "Washington, 10 mars. On dit dans les couloirs du Sénat que M. Hay aurait demandé à la France de proroger d'un an le délai de ratification du traité de réciprocité. On croit ici que la France y consentira."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Social",
    "title": "La grève de Carmaux",
    "summary": "Le préfet a rencontré le comité de défense des mineurs de Carmaux pour insister sur l'urgente nécessité d'une reprise du travail, tout en laissant au syndicat la gestion des secours financiers.",
    "paragraphs": [
      "Le préfet et le comité de défense viennent de conférer ensemble. La visite du préfet avait pour but de faire savoir aux membres du comité que la reprise du travail était une nécessité absolue.",
      "Au sujet de la reprise, on laisse au syndicat le soin de distribuer lui-même les sommes allouées aux mineurs. Le préfet a vivement engagé les membres du comité à faire prévaloir auprès de leurs camarades la reprise du travail."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Vie Associative",
    "title": "Assemblée générale de la Société d'assistance par le travail",
    "summary": "M. Paul Deschanel a présidé l'assemblée générale de la Société d'assistance par le travail, prônant la dignité par le salaire plutôt que par l'aumône pour les déshérités.",
    "paragraphs": [
      "M. Paul Deschanel a présidé, hier après-midi, l'assemblée générale de la Société d'assistance par le travail, fondée en 1890. Cette œuvre a pour but de combattre l'aumône banale et de lui substituer le salaire d'un travail facile.",
      "M. Paul Deschanel a prononcé une allocution très applaudie : « L'idée sublime et généreuse d'aider l'homme accablé par le malheur, de l'obliger à vivre pour son devoir et sa mission sociale sans froisser sa dignité par l'aumône brutale, est mise en pratique journalière par les bienfaisants promoteurs de l'assistance. »"
    ]
  },
  {
    "id": 12,
    "page": 3,
    "category": "Nécrologie",
    "title": "Inhumation de M. Emmanuel Liais",
    "summary": "Les obsèques de M. Emmanuel Liais, ancien maire de Cherbourg, se sont déroulées dans la plus stricte intimité, en présence de hautes autorités locales et maritimes.",
    "paragraphs": [
      "Les obsèques de M. Emmanuel Liais, ancien maire de Cherbourg, ont été célébrées dans l'intimité, selon les dernières volontés du défunt. Sur le parcours, les becs de gaz étaient voilés en signe de deuil.",
      "Le cortège était fort simple. Les cordons du poêle étaient tenus par M. le préfet de la Manche, le vice-amiral Dieulouard, préfet maritime, et plusieurs autres personnalités de la ville et de la Marine."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un vieillard secouru",
    "summary": "Un homme de soixante-dix ans, en proie à un profond désespoir, a été arraché à une funeste résolution grâce à l'intervention dévouée de ses voisins.",
    "paragraphs": [
      "Un vieillard de soixante-dix ans, incapable de tout travail, a été secouru avec abnégation par ses voisins après une détresse profonde qui le poussait à vouloir mettre fin à ses jours."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Faits Divers",
    "title": "Courage et Modestie",
    "summary": "M. Mendès recherche un inconnu ayant fait preuve d'un grand courage en portant secours à un blessé renversé par une voiture, avant de disparaître discrètement.",
    "paragraphs": [
      "Alors qu'il marchait d'une allure désordonnée, un homme fut renversé par une voiture. Le sauveteur, après avoir porté secours au blessé, disparut rapidement. M. Mendès, souhaitant le remercier, l'invite à se présenter chez lui, au 6 rue Boecador."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'Escroc aux Quincailliers",
    "summary": "Un ancien détenu de vingt-deux ans, se faisant passer pour un représentant belge, a abusé la confiance de plusieurs quincailliers parisiens en soutirant des échantillons.",
    "paragraphs": [
      "Un individu, fort bien mis et se faisant passer pour le représentant d'une importante maison de commerce de Belgique, a réussi à duper plusieurs quincailliers parisiens en promettant de grosses commandes et en exigeant des échantillons, avant de disparaître dans la nature.",
      "Il s'agit d'un jeune homme de vingt-deux ans, nommé Peneau, récemment élargi de la prison de Fresnes."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie à l'hôpital de la Maternité",
    "summary": "Un incendie s'est déclaré la nuit dernière dans une réserve de lingerie de l'hôpital de la Maternité. Le sinistre fut rapidement maîtrisé par le personnel de l'établissement avant l'arrivée des pompiers.",
    "paragraphs": [
      "La nuit dernière, le feu s'est déclaré à l'hôpital de la Maternité, boulevard de Port-Royal, dans une réserve de lingerie. Le sinistre a été rapidement maîtrisé par le personnel avant l'arrivée des pompiers."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accidents divers",
    "summary": "Une série d'accidents survenus dans la banlieue parisienne : collisions entre tramways et voitures, chutes professionnelles et un drame humain tragique à L'Étang-la-Ville.",
    "paragraphs": [
      "Courbevoie : Une voiture de marchand de vins a été tamponnée par un tramway électrique rue de Neuilly. Le conducteur, projeté, a eu la jambe gauche fracturée.",
      "Asnières : Un ouvrier peintre, nommé François, est tombé d'une échelle ; il a dû être transporté en urgence à l'hôpital Beaujon.",
      "Villiers : Des jardiniers ont été blessés par la chute d'une lourde pierre boulevard d'Orléans.",
      "L'Étang-la-Ville : Un malheureux individu a été découvert pendu dans un taillis, un revolver trouvé à ses côtés."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Météo",
    "title": "Bulletin météorologique",
    "summary": "Conditions météorologiques clémentes sur la majeure partie de l'Europe. Pour la France, la tendance reste au temps doux, malgré la persistance de brumes et de passages nuageux.",
    "paragraphs": [
      "Le temps a été magnifique pendant toute la journée en Europe, à l'exception des régions situées dans l'extrême nord.",
      "En France, un temps doux est attendu, avec un ciel qui demeurera toutefois nuageux ou brumeux."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Spectacles",
    "title": "Programme des théâtres",
    "summary": "Récapitulatif des représentations théâtrales et lyriques parisiennes. À noter le report de la première de L'Aiglon par Mme Sarah Bernhardt au jeudi soir.",
    "paragraphs": [
      "Opéra : Lancelot, Tannhäuser, La Prise de Troie, La Korrigane, Roméo et Juliette.",
      "Comédie-Française : Le Bourgeois Gentilhomme, Horace.",
      "Opéra-Comique : Mignon, Louise, Lakmé.",
      "Mme Sarah Bernhardt a renvoyé la première de L'Aiglon à jeudi soir."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Sport",
    "title": "Les courses à Auteuil",
    "summary": "Succès sportif sur l'hippodrome d'Auteuil où le cheval Mélibée s'est imposé dans le Steeple-chase national, tandis que M. d'Englesqueville a remporté le Steeple-chase Militaire.",
    "paragraphs": [
      "Le terrain était excellent et la réunion sportive a été riche en rebondissements. Mélibée a confirmé sa supériorité en remportant le Steeple-chase national.",
      "Le Steeple-chase Militaire a été remporté par M. d'Englesqueville montant son cheval Cricket."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Finance",
    "title": "Causerie financière",
    "summary": "Malgré un léger tassement après les sommets de la semaine précédente, les marchés maintiennent une fermeté générale. Le 3 % s'établit à 102,15 et les valeurs de la Banque de France restent solides.",
    "paragraphs": [
      "Les plus hauts cours cotés pendant la semaine précédente n'ont pas été absolument conservés, mais les places financières générales restent fermes.",
      "Le 3 % est ramené à 102,15. Les fonds russes restent négligés et la Banque de France se maintient ferme."
    ]
  },
  {
    "id": 22,
    "page": 4,
    "category": "Revue Commerciale",
    "title": "Grains et Farines",
    "summary": "Le retour d'un temps plus sec favorise la reprise de la végétation, malgré l'incertitude sur les blés gelés. Le marché des farines subit un fléchissement dû à une spéculation à la baisse.",
    "paragraphs": [
      "Depuis quelques jours, nous avons un temps plus sec et le soleil se fait déjà sentir avec force ; la végétation, qui avait été retardée par le froid, va reprendre son essor ; de plus, la culture va pouvoir procéder aux semailles de printemps.",
      "Les avis sont toujours contradictoires relativement à l'importance des dégâts occasionnés par les gelées. Mais si, dans certains rayons, les pertes sont importantes, dans d'autres on constate qu'il y a eu de l'exagération dans les plaintes.",
      "Quoi qu'il en soit, les alternatives de gel et de dégel que nous avons encore eues ces derniers jours ne sont pas considérées comme favorables à la culture.",
      "La persistance de l'humidité a empêché bon nombre de cultivateurs de réensemencer leurs blés gelés en blés de mars, pour lesquels la saison avance. Il paraît donc maintenant à peu près certain qu'une partie importante des blés atteints sera remplacée par des avoines, des orges et de la betterave.",
      "Sur notre place, les farines de commerce ont eu les affaires assez animées, mais la spéculation à la baisse, encouragée par le beau temps que nous avons depuis quelques jours, a fait des offres nombreuses et les prix ont légèrement fléchi.",
      "On termine la semaine en cotant les farines fleur de Paris : le livrable courant du mois, de 25 à 25,75 ; avril, de 25,75 à 26 francs ; mai-juin de 26,25 à 26,50.",
      "Les blés du marché de Paris ont été influencés par la baisse des farines. Les vendeurs sont moins empressés que pour les farines, ce qui indique une certaine appréhension. En tout cas, le blé est aussi cher en province qu'à Paris, et beaucoup de cultivateurs ne veulent pas vendre aux cours actuels."
    ]
  },
  {
    "id": 23,
    "page": 4,
    "category": "Chronique Littéraire",
    "title": "Le bon chevalier et le mauvais roi",
    "summary": "Victime d'une injustice royale et longuement incarcéré, un valeureux chevalier anglais retrouve santé et vigueur grâce aux soins d'un médecin maure avant de reprendre le combat.",
    "paragraphs": [
      "Le bon chevalier était enfermé depuis plusieurs mois dans le donjon le plus affreux qui pût se rencontrer en Angleterre, lorsqu'il fut enfin condamné à être pendu, puis écartelé, comme châtiment d'un crime qu'il n'avait nullement commis. Le roi était parfaitement convaincu de l'innocence du malheureux prisonnier ; néanmoins, il le laissa languir dans le cachot en attendant l'exécution de la sentence de mort.",
      "Enfin, l'infortuné chevalier fut rendu à la liberté, mais dans quel triste état ! Les privations sans nombre et les souffrances physiques et morales avaient presque anéanti le chevalier le plus brave de son temps. Assurément, remarqua le médecin maure qui soigna le chevalier, il n'y a rien comme la maladie et les souffrances pour mettre les hommes au même niveau. Or, comme sir Edward ne souffre plus, nous allons lui rendre les forces et la vigueur en lui procurant des mets fortifiants et des boissons généreuses.",
      "Ce fut donc de cette façon que le bon chevalier recouvra la santé et la vigueur et qu'il fut à même de prendre part à maintes batailles qui eurent lieu en l'honneur de son mauvais roi."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Feuilleton",
    "title": "Deux passions - Grand roman inédit",
    "summary": "Suzanne, accablée par le deuil, entame une procédure de rupture de mariage avec l'aide dévouée de son médecin et la stratégie juridique du célèbre avocat Boisguillaume à Rouen.",
    "paragraphs": [
      "Le pauvre docteur leur donnait raison et, pour réparer le mal, déployait une activité sans bornes. Il allait et venait à chaque instant d'Orvilliers à Rouen et à Paris. Ses chevaux étaient sur les dents. On ne voyait qu'eux sur les routes.",
      "Le docteur visitait les juges, pressait les avoués et aiguillonnait son illustre ami Boisguillaume, l'aigle du barreau rouennais, qui, chargé des intérêts de Suzanne, se donnait, en un mot, une peine infinie pour défaire ce qu'il avait fait jadis. Cinq ans, que d'événements ! Que de regrets et, maintenant, que de deuils !",
      "Victor les avait conduits à Barentin où il devait les attendre. Elle ne lui avait pas demandé la raison de ce voyage ni ce qu'il voulait faire. Depuis la mort de sa fille et de la présidente, elle ne vivait pour ainsi dire que les yeux fermés, repliée sur elle-même, absorbée par ses souvenirs.",
      "Le président entra, enveloppé dans sa grande robe, sa toque sur la tête. Il salua profondément la jeune femme et demanda à Suzanne avec une grande douceur : « Vous intentez à M. Dufresne une action qui a pour but de rompre les liens du mariage qui vous a unis ? » Elle répondit d'une voix faible : « Oui, monsieur le président. »"
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Économie",
    "title": "Huiles, Alcools, Sucres et Houblons",
    "summary": "Analyse des marchés : hausse des huiles de colza, instabilité des alcools, stagnation du sucre et activité très réduite pour le commerce des houblons sur les places européennes.",
    "paragraphs": [
      "HUILES. Les huiles de colza ont eu un mouvement assez prononcé de hausse cette semaine et les affaires ont eu une certaine activité.",
      "ALCOOLS. Les trois-six ont été très fermes pendant la plus grande partie de la semaine, mais hier les cours ont fléchi, malgré la diminution du stock. La moyenne des cotes officielles de l'alcool disponible pendant la semaine du 5 au 10 mars est de 37,50 francs l'hectolitre à 90 degrés.",
      "SUCRES. Les affaires ont été très calmes et les prix n'ont eu que des variations insignifiantes.",
      "HOUBLONS. Sur tous les marchés, les affaires sont très réduites. À Nuremberg, les arrivages remplacent les quantités vendues, qui sont peu importantes."
    ]
  }
];
