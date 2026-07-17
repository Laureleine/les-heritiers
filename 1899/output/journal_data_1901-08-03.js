// Date: 1901-08-03
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-08-03 (Version Restaurée, 43 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Editorial",
    "title": "Nos Alpes",
    "summary": "Longtemps ignorées des touristes, les Alpes françaises s'ouvrent au monde. Grâce au développement des chemins de fer et à l'exploitation de la houille blanche, la région connaît une révolution économique salvatrice.",
    "paragraphs": [
      "Pendant très longtemps, nos Alpes ont été délaissées. Les touristes français se piquaient, en quelque sorte, de négliger les beautés naturelles de notre sol, qui peuvent pourtant rivaliser avec celles de n'importe quel pays.",
      "Mais les temps sont changés. Les efforts des syndicats locaux, associés à l'initiative des compagnies de chemins de fer, ont fini par faire dériver sur le Dauphiné et la Savoie une partie des amoureux de la montagne.",
      "Surtout, on s'est ingénié à faire connaître les magnificences de notre région alpestre. Il a fallu beaucoup de persévérance et d'ingéniosité pour rompre la routine et vaincre une mode traditionnelle.",
      "Mais notre massif alpin peut le disputer en splendeur et en variété à ceux du Tyrol et de l'Helvétie. Il recèle de superbes forêts coupées de gorges profondes, des paysages de parfaite harmonie et de sublimes tableaux.",
      "Il n'y a pas très longtemps, il est vrai que les hautes régions de nos Alpes ont été explorées. C'est depuis un quart de siècle seulement que des touristes audacieux ont décrit les merveilles qu'ils y avaient découvertes.",
      "Mais la montagne la plus redoutable de nos Alpes, celle qui passe même pour la plus dangereuse de toute l'Europe, est la Meije, près de Briançon.",
      "Depuis trente ans, la région a bénéficié d'une véritable révolution dans les moyens de transport. La locomotive a pénétré dans les hautes vallées, jusqu'au pied des dômes neigeux.",
      "L'utilisation de ce qu'on a appelé la houille blanche, c'est-à-dire de la force hydraulique, est appelée à rendre à nos populations alpines d'inappréciables services. Nos Alpes sont à cette heure le théâtre d'une étonnante révolution économique.",
      "Il faut espérer que, grâce à elle, sera bientôt arrêtée l'émigration qui, depuis tant d'années, sévissait dans deux de nos départements au moins du Sud-Est : les Hautes-Alpes et les Basses-Alpes."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Roman-Feuilleton",
    "title": "La Griffe d'Or",
    "summary": "L'insouciance des époux Vallurier est brutalement interrompue par une perquisition. Le commissaire Guilloy, muni d'une dénonciation, plonge le foyer familial dans une atmosphère de terreur et de soupçons.",
    "paragraphs": [
      "M. et madame Vallurier hésitaient à la placer près de leurs enfants, mais les renseignements sur son compte étaient de ceux qui peuvent faire passer sur la question d'attirance.",
      "La sonnerie électrique de l'entrée retentit. Le domestique se trouva en présence de trois hommes, dont le commissaire de police du quartier, venus pour une perquisition.",
      "Le docteur Saussaye, ami de la famille, chercha à dissimuler une bouteille contenant une substance suspecte.",
      "Le commissaire Guilloy, après avoir décliné son identité, fit savoir aux époux Vallurier qu'une dénonciation formelle les accusait de crime, ce qui plongea la famille dans la stupeur et la terreur."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un drame de la misère",
    "summary": "À Levallois-Perret, les époux Virat, acculés par la précarité et l'épuisement de leurs maigres économies, ont mis fin à leurs jours ensemble par asphyxie, révélant une détresse sociale tragique.",
    "paragraphs": [
      "Un drame navrant, qui a eu pour cause la misère, vient de se dérouler dans un petit logement à Levallois-Perret. Les époux Virat, âgés, ont mis fin à leurs jours par asphyxie après avoir épuisé leurs économies.",
      "Le concierge, inquiet de ne pas les voir, a fait ouvrir la porte par un serrurier. Le commissaire de police Dumas s'est rendu sur place et a ordonné l'inhumation."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Social",
    "title": "Les retraites ouvrières",
    "summary": "Le projet gouvernemental sur les retraites ouvrières divise : si les travailleurs craignent pour leur salaire, l'idée d'une cotisation patronale partagée représente une avancée sociale notable.",
    "paragraphs": [
      "L'enquête sur le projet de loi organisant des retraites ouvrières montre une opposition majoritaire aux combinaisons gouvernementales, les ouvriers craignant pour leurs salaires et la gestion des fonds.",
      "Toutefois, le principe d'une cotisation partagée avec les patrons est un progrès social. Il serait possible d'offrir des garanties en admettant des délégués ouvriers à l'examen des comptes."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Marine",
    "title": "Un discours de l'amiral Gervais",
    "summary": "L'amiral Gervais, à Toulon, a prononcé une allocution solennelle devant ses officiers. Il a salué la discipline exemplaire de la flotte française, illustrée par les récentes opérations en Chine.",
    "paragraphs": [
      "À Toulon, l'amiral Gervais a adressé une allocution aux officiers, félicitant les troupes pour leur tenue et leur discipline. Il a évoqué les succès en Chine et l'honneur de la marine française.",
      "Il a insisté sur les vertus de dévouement et d'amour de la patrie qui font la force de l'institution."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Arts et Culture",
    "title": "Les Quadriges du Grand Palais",
    "summary": "L'installation des deux colossaux quadriges en cuivre de M. Récipon, pesant soixante-quatre mille kilos, touche à sa fin sur les piédestaux du Grand Palais, malgré les retards causés par un récent incendie.",
    "paragraphs": [
      "On procède actuellement à l'installation des deux quadriges monumentaux dus au statuaire Récipon sur les piédestaux du Grand Palais. Ces œuvres colossales, réalisées en cuivre repoussé et martelé, atteignent un poids total de soixante-quatre mille kilos.",
      "Leur exécution fut marquée par de nombreux défis techniques et des retards inévitables dus à un incendie, mais le résultat final constitue une œuvre de grand caractère et de puissant effet décoratif pour l'édifice."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Puisatier enseveli",
    "summary": "À Chartres, un dramatique éboulement a enseveli le puisatier Jules Simon. Les sapeurs du 1er génie sont à pied d'œuvre pour tenter de le dégager vivant, malgré une situation périlleuse.",
    "paragraphs": [
      "À Chartres, les secours tentent désespérément de sauver le nommé Jules Simon, enseveli lors de travaux de puits. Les sapeurs du 1er génie travaillent sans relâche pour le délivrer des décombres.",
      "Bien que le contact soit maintenu avec la victime, les difficultés extrêmes du terrain retardent le sauvetage, désormais espéré pour le courant de la journée de demain."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une famille foudroyée",
    "summary": "Une tragédie a frappé le Jura : durant un violent orage, deux jeunes garçons ont été tués sur le coup par la foudre alors qu'ils marchaient sous un parapluie avec leur famille.",
    "paragraphs": [
      "Dans le département du Jura, un accident tragique a coûté la vie à deux enfants. Alors qu'elle regagnait son foyer durant un orage d'une rare violence, une famille a été frappée de plein fouet par la foudre.",
      "Si le père, la mère et une fille ont survécu à la décharge électrique, deux des trois garçons, qui s'abritaient sous un second parapluie, ont été tués sur le coup."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'abandon d'une enfant",
    "summary": "À Rodez, l'enquête se poursuit avec discrétion concernant l'abandon d'une fillette à la maison Sainte-Anne. La police recherche activement une femme suspectée d'être liée à cet acte.",
    "paragraphs": [
      "À Rodez, l'enquête ouverte sur l'abandon d'une fillette devant la maison Sainte-Anne se poursuit dans le plus grand secret. La police recherche activement une femme correspondant à un signalement précis, fortement soupçonnée d'être impliquée dans cette affaire d'abandon."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Attentat contre une poudrière",
    "summary": "Une tentative criminelle visant à faire sauter la poudrière Saint-Eugène à Alger a échoué in extremis grâce à l'extinction fortuite d'une bougie allumée près des explosifs.",
    "paragraphs": [
      "Une tentative criminelle visait à faire sauter la poudrière Saint-Eugène, située à Alger. Des malfaiteurs avaient disposé des explosifs ainsi qu'une bougie allumée pour déclencher la mise à feu, mais la mèche s'est éteinte par un heureux hasard, évitant ainsi une catastrophe majeure."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Militaire",
    "title": "Les manœuvres des Vosges",
    "summary": "Sous des pluies diluviennes, les troupes poursuivent leurs exercices dans les Vosges. Le général Joly dirige ces manœuvres tactiques axées sur la défense des vallées et des frontières.",
    "paragraphs": [
      "Malgré une météo difficile et une pluie incessante, les troupes poursuivent leurs exercices dans les Vosges. Les manœuvres, dirigées par le général Joly, simulent une défense de frontière et des mouvements tactiques entre les vallées."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Manœuvres militaires dans les Vosges",
    "summary": "Les manœuvres se poursuivent dans les Vosges sous la pluie. Le général Brugère a décoré le général Dessirier, tandis que le 4e chasseurs à cheval s'est illustré par une marche nocturne remarquable.",
    "paragraphs": [
      "Le général Joly envoyait une partie de ses troupes mener une contre-attaque avec entrain malgré la pluie, lorsque, tout à coup, le canon de la 82e brigade tonna vers Mundray.",
      "Le général Jeannerod fit suspendre la manœuvre pour permettre aux officiers et aux soldats de se restaurer. Les généraux, dont le généralissime Brugère et le général Dessirier, commandant en chef du 7e corps, prirent leur repas dans une auberge du Chipal.",
      "La 82e brigade finit par tourner la tête de cette position, arrivant soudain en vue de l'ennemi. Le général Jeannerod fit cesser la manœuvre à une heure et demie, sous une pluie toujours battante.",
      "Au cours de la revue, le général Brugère a remis la plaque de grand-officier de la Légion d'honneur au général Dessirier. Le 4e chasseurs à cheval s'est particulièrement distingué en franchissant soixante kilomètres durant la nuit pour prendre part à la manœuvre."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Informations Politiques",
    "title": "Statistique électorale",
    "summary": "Bilan des élections aux conseils d'arrondissement : sur 1 757 sièges pourvus, les républicains enregistrent un gain net de 67 élus. La session ordinaire débutera le 10 août.",
    "paragraphs": [
      "Simultanément aux élections des conseils généraux, se sont tenues les élections aux conseils d'arrondissement.",
      "Sur les 1 757 sièges à pourvoir, les républicains ont remporté 119 sièges et en ont perdu 52, soit un gain total de 67 élus. Les conseils d'arrondissement se réuniront le 10 août en session ordinaire."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "La situation en Chine",
    "summary": "La cour impériale chinoise prépare son retour à Pékin. Les travaux ferroviaires s'accélèrent entre Pékin et Tien-Tsin, et le port de Nan-Ning s'ouvre officiellement au commerce international.",
    "paragraphs": [
      "Par le vapeur Sydney, arrivé hier après-midi de l'Indo-Chine, nous apprenons que la cour impériale se prépare à rentrer à Pékin, malgré le suicide d'un ministre s'opposant à ce retour.",
      "Li-Hung-Chang a ordonné à la direction des chemins de fer d'achever au plus vite la ligne entre Pékin et Tien-Tsin. Les travaux de terrassement sont désormais terminés.",
      "Une dépêche de Wou-Tcheou annonce que le commissaire des douanes a pris le départ pour le port de Nan-Ning, afin d'y organiser l'ouverture au commerce extérieur."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Guerre au Transvaal et situation internationale",
    "summary": "Les Britanniques s'emparent d'un camp boer au Transvaal. Le président Kruger prépare son voyage aux États-Unis, tandis qu'à Tien-Tsin, une portion du palais impérial est restituée aux autorités chinoises.",
    "paragraphs": [
      "Durban, 2 août : Les Anglais se sont emparés, le 29 juillet, d'un laager boer à Joubertfarm. Sept Boers ont été tués lors de l'opération.",
      "Londres, 2 août : Le président Kruger visitera New-York, Philadelphie, Boston, Washington et Chicago lors de son prochain voyage en Amérique.",
      "Berlin, 2 août : Le général de division Lessel mande de Tien-Tsin que la partie du palais impérial occupée par les troupes a été restituée au ministre du palais chinois, le 29 juillet."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Treize maisons en flammes en Corrèze",
    "summary": "Un violent incendie a ravagé treize habitations et seize granges au bourg des Hosiers-d'Egletons, en Corrèze. Les pertes sont estimées à 70 000 francs, heureusement sans déplorer de pertes humaines.",
    "paragraphs": [
      "Tulle, 2 août : Un incendie a réduit en cendres, au bourg des Hosiers-d'Egletons, treize maisons d'habitation et seize granges appartenant à onze familles.",
      "Le sinistre a éclaté durant la nuit dans une grange appartenant à M. Gave. Les pertes s'élèvent à environ 70 000 francs. On ne déplore aucun accident de personne, mais plusieurs animaux ont péri."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Chroniques Culturelles",
    "title": "Vielles et Cornemuses",
    "summary": "L'été ramène les fêtes champêtres, mais les instruments traditionnels comme la vielle et la cornemuse s'effacent progressivement devant l'accordéon, marquant la fin d'une époque musicale rurale.",
    "paragraphs": [
      "L'été, dans nos campagnes, a ramené le temps des assemblées et des réjouissances champêtres. Pourtant, les antiques instruments comme la vielle et la cornemuse sont progressivement supplantés par l'accordéon ou le violon.",
      "La vielle, autrefois prisée à la cour sous Marie Leczinska, a fini par trouver refuge dans les campagnes, avant de décliner à son tour. La cornemuse, bien que persistante dans certaines provinces comme la Bretagne ou l'Auvergne, perd elle aussi du terrain chaque jour. Ces instruments, témoins d'un âge révolu, méritent au moins le souvenir."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Tribunaux",
    "title": "Arbitrage de la grève de Fougères",
    "summary": "À la suite de la grève ayant causé d'importants dégâts à l'usine Doussin de Fougères, le tribunal arbitral a condamné la ville à indemniser le propriétaire à hauteur d'un tiers du préjudice subi.",
    "paragraphs": [
      "À la suite de la grève à l'usine Doussin à Fougères, où les ouvriers avaient détruit machines et meubles, la question des dégâts a été soumise à un jury arbitral.",
      "Le tribunal a rejeté la responsabilité principale sur l'État et a condamné la Ville à payer un tiers du préjudice subi par M. Doussin, soit 71 francs."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Nouvelles Judiciaires",
    "title": "Condamnations diverses",
    "summary": "La cour d'assises de la Seine a condamné un confiseur pour banqueroute, tandis que plusieurs affaires de vols sont jugées à Marseille et Nevers.",
    "paragraphs": [
      "La cour d'assises de la Seine a condamné M. Alexandre, confiseur et cartonnier, à un an de prison pour banqueroute frauduleuse.",
      "Le nommé Marouche a été interrogé pour le vol de titres au préjudice de M. Blanchard, pharmacien à Marseille. Par ailleurs, plusieurs employés ont été condamnés à Nevers pour des vols dans les magasins Paris-Nevers."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Congrès",
    "title": "Ligue de l'enseignement à Caen",
    "summary": "Le congrès de la Ligue de l'enseignement réunit 700 délégués à Caen pour débattre de l'éducation. La séance de clôture sera présidée par M. de Lanessan, ministre de la Marine.",
    "paragraphs": [
      "Le congrès de la Ligue de l'enseignement a continué ses travaux à Caen avec environ 700 délégués. Une communication sur l'enseignement domestique et ménager a été faite par M. Maurice Muret.",
      "Le ministre de la Marine, M. de Lanessan, est attendu pour présider la séance de clôture."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Disparition d'objets au musée Galliéra",
    "summary": "Le baron de Baye a constaté la disparition de pièces de sa collection de bijoux russes anciens, offerte à la Ville de Paris, lors d'opérations de réaménagement au musée Galliéra.",
    "paragraphs": [
      "M. le baron de Baye a constaté la disparition de quatre pièces fort importantes d'une collection de bijoux russes anciens, offerte par lui à la Ville de Paris et conservée au musée Galliéra.",
      "Ces bijoux étaient placés avec d'autres pièces dans une vitrine longue de dix mètres, fermée par plusieurs serrures. Le directeur du musée, M. Ch. Formentin, n'ayant pas l'inventaire des pièces, ne peut assumer aucune responsabilité.",
      "Parmi les objets manquants figurent un bracelet en or à tête de lion, une paire de boucles d'oreilles en or et argent, un ornement de tempe en or et une bague en or trouvée à Telâf.",
      "La vitrine avait été ouverte pour un déménagement de salle et pour permettre de photographier les bijoux il y a quatre mois. L'enquête administrative sera probablement ordonnée par la Ville."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enfant écrasé par un tramway",
    "summary": "Un tragique accident s'est produit boulevard Brune : un enfant de huit ans a été mortellement renversé par un tramway alors qu'il tentait de descendre du véhicule pour regagner le trottoir.",
    "paragraphs": [
      "Un terrible accident s'est produit hier après-midi, boulevard Brune. Un enfant de huit ans, qui était monté derrière un tramway, voulut quitter le véhicule pour regagner le trottoir.",
      "Un autre tramway, venant en sens inverse, renversa le petit imprudent. Le malheureux enfant a eu la poitrine broyée et est mort sur le coup. Son identité n'a pu encore être établie."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les bijoux de l'étrangère",
    "summary": "Mme S., artiste dramatique, a déjoué une tentative de vol après avoir accueilli deux inconnus. L'un des suspects, Alexis Maison, a été arrêté, tandis que son complice a pris la fuite.",
    "paragraphs": [
      "Une étrangère, Mme S., artiste dramatique, a été victime d'une tentative de vol après avoir fait la connaissance de deux jeunes gens dans un restaurant. Sous prétexte de la raccompagner, les individus ont obtenu de lui donner l'hospitalité pour la nuit rue d'Antin.",
      "Une fois dans l'appartement, Mme S. a surpris l'un d'eux en train d'ouvrir son armoire à bijoux. Elle a fait appel à un garçon d'hôtel et a fait arrêter l'un des visiteurs, Alexis Maison, employé de bookmaker. Son complice a pris la fuite."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "La bande de Jésus-Christ",
    "summary": "La police a mis fin aux agissements d'une bande de cambrioleurs dite « de Jésus-Christ ». Deux malfaiteurs et un receleur ont été appréhendés suite à un vol chez un restaurateur.",
    "paragraphs": [
      "La police a arrêté deux membres d'une bande de malfaiteurs se faisant appeler « Les invisibles cambrioleurs de la bande de Jésus-Christ », auteurs d'un cambriolage chez M. Taté, restaurateur avenue de la Grande-Armée.",
      "Les suspects, Maurice Duval et Henri Petit, avaient vendu une bicyclette de luxe à un jeune garçon coiffeur, Henri Garnier, qui a également été arrêté pour recel."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agence illicite de pari-mutuel",
    "summary": "Le commissaire Goulier a démantelé une officine clandestine de pari-mutuel tenue par une commerçante rue du Faubourg-Saint-Antoine, saisissant enjeux et listes de paris.",
    "paragraphs": [
      "M. Goulier, commissaire de police, a démantelé une agence illicite de pari-mutuel tenue par une commerçante, Mme Marguerite B., rue du Faubourg-Saint-Antoine.",
      "Une vingtaine de personnes ont été surprises en train de dresser leurs tickets de paris. Le magistrat a saisi les listes et 170 francs d'enjeux."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une sérieuse leçon pour un homme fort",
    "summary": "Antoine Tonnasse, colosse brutal habitué des altercations, a trouvé son maître boulevard Davout. Il fut terrassé sans effort par Jacques Brédon, un ancien hercule de foire, sous les yeux d'un inspecteur stupéfait.",
    "paragraphs": [
      "Antoine Tonnasse, individu réputé pour sa force herculéenne et son tempérament batailleur, a trouvé plus fort que lui en la personne de Jacques Brédon, un ancien hercule de foire reconverti dans le métier de camionneur.",
      "Sur le boulevard Davout, Tonnasse chercha querelle à Brédon. Après une vive altercation, le robuste camionneur, d'une vigoureuse poussée, terrassa son adversaire, le transportant sans effort jusqu'au bord du talus des fortifications. Un inspecteur intervint aussitôt ; conduit devant le commissaire, Tonnasse dut reconnaître ses torts, rendant un hommage contraint à la vigueur de son vainqueur."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une mère martyre",
    "summary": "Victime des sévices répétés de sa propre fille, Mme Bonvalet, âgée de cinquante-cinq ans, a été secourue par la police rue Rousselet. La malheureuse sera rapatriée à Lorient, sa ville natale.",
    "paragraphs": [
      "À la suite d'une plainte déposée par les locataires d'un immeuble de la rue Rousselet, la police a fait interner une femme de cinquante-cinq ans, Mme Bonvalet, qui subissait les mauvais traitements de sa fille avec laquelle elle cohabitait.",
      "La malheureuse, découverte couverte de contusions, sera rapatriée dans sa ville natale de Lorient. Quant à la fille, elle a été laissée en liberté provisoire en raison de la présence de ses deux jeunes enfants à charge."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Dans la gueule du loup",
    "summary": "Un malfaiteur imprudent a proposé un cambriolage à un agent de la Sûreté aux Halles. L'individu, identifié comme le repris de justice Émile Cannoc, a été arrêté peu après rue Saint-Martin.",
    "paragraphs": [
      "Un agent de la Sûreté, alors qu'il se trouvait aux Halles, fut accosté par un individu lui proposant de prendre part à un cambriolage rue des Écoles. L'agent reconnut rapidement le malfaiteur comme étant Émile Cannoc, un individu bien connu des services de police et déjà condamné à plusieurs reprises pour vols.",
      "Sans perdre un instant, l'agent procéda à son arrestation dans un logement de la rue Saint-Martin, mettant ainsi un terme à ses sinistres projets."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation de voleurs de bicyclettes",
    "summary": "Lucien Naliogi et Gabriel Peconawitz ont été appréhendés place de la Bastille après une course-poursuite. Circulant sur un tandem volé, ils ont avoué vivre exclusivement des produits de leurs forfaits.",
    "paragraphs": [
      "Deux individus, nommés Lucien Naliogi et Gabriel Peconawitz, ont été arrêtés place de la Bastille après une course-poursuite menée par les inspecteurs de la Sûreté.",
      "Les deux jeunes hommes, qui circulaient à bord d'un tandem volé, ont dû reconnaître, lors de leur interrogatoire, qu'ils ne vivaient exclusivement que du produit de leurs forfaits."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le meurtre de la rue Petit",
    "summary": "Jean Auriol, employé des postes, a été sauvagement frappé de deux coups de couteau par son collègue Charles Kiehl, âgé de dix-huit ans. La victime, grièvement blessée, a été transportée à l'hôpital Saint-Louis.",
    "paragraphs": [
      "Jean Auriol, employé des postes âgé de vingt-cinq ans, a été frappé de deux coups de couteau dans le dos par un collègue, Charles Kiehl, âgé de dix-huit ans, alors qu'ils se trouvaient dans la cour de leur immeuble de la rue Petit.",
      "Le meurtrier a pris la fuite avant d'être finalement appréhendé dans un grenier de la rue d'Allemagne. Le couteau ayant servi au crime a été retrouvé dissimulé au pied d'un arbre. La victime, dont l'état est jugé très alarmant, a été transportée d'urgence à l'hôpital Saint-Louis."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un chat enragé",
    "summary": "Un chat atteint de la rage a semé l'émoi rue du Tunnel en mordant un palefrenier. La victime, M. François Bellet, a été immédiatement transférée à l'Institut Pasteur pour y recevoir les soins d'urgence.",
    "paragraphs": [
      "Un chat atteint de la rage a provoqué une vive émotion dans des écuries situées rue du Tunnel. Après avoir mordu un palefrenier, le nommé François Bellet, l'animal a été abattu par un sous-brigadier.",
      "La victime a été transportée d'urgence à l'Institut Pasteur afin d'y recevoir les soins nécessaires."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents divers",
    "summary": "Triste série noire à Paris : M. Fauché, tailleur, a succombé à une congestion sur un omnibus place Pigalle, tandis qu'une blanchisseuse de l'île Saint-Louis a été grièvement brûlée par une explosion domestique.",
    "paragraphs": [
      "M. Fauché, tailleur, est mort subitement d'une congestion alors qu'il se trouvait sur un omnibus place Pigalle.",
      "Mme Decamps, blanchisseuse rue Saint-Louis-en-l'Île, a été grièvement brûlée suite à l'explosion d'une lampe à essence."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un crime odieux à Benquet",
    "summary": "Un chemineau a perpétré un crime abject à Benquet sur une jeune femme infirme. Après avoir ligoté et violenté sa victime, le malfaiteur a dérobé des objets de prix. La gendarmerie a ouvert une enquête.",
    "paragraphs": [
      "Un attentat odieux a été commis à Benquet par un chemineau sur une jeune femme infirme. Le bandit, après avoir lié la victime et commis des violences, a dérobé des objets de valeur avant de prendre la fuite.",
      "La gendarmerie de Grenade-sur-l'Adour est activement à la recherche du malfaiteur."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Social",
    "title": "Une grève en Belgique",
    "summary": "Le travail est paralysé aux charbonnages de Farciennes, en Belgique. Deux cents ouvriers ont cessé leurs activités pour protester contre une réduction de salaire, faisant craindre une grève générale.",
    "paragraphs": [
      "Une grève a éclaté aux charbonnages de Farciennes ; deux cents ouvriers ont refusé de descendre dans la mine pour protester contre une diminution de leurs salaires.",
      "La situation est jugée fort préoccupante, les autorités redoutant une extension du mouvement à l'ensemble du bassin minier."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Faits Divers",
    "title": "Arrestations à Versailles",
    "summary": "Une bande de jeunes délinquants a été arrêtée et transférée à Versailles. La police traque désormais le chef du groupe, un repris de justice borgne nommé Frédéric Jlasse, âgé de vingt et un ans.",
    "paragraphs": [
      "Plusieurs individus ont été appréhendés : Petit-Demange, vingt ans ; Albert Verly, dix-neuf ans ; René Petit-Demange, dix-huit ans ; Charles Philipot, seize ans, et Émile Artus, dix-huit ans. Ces derniers ont été dirigés sur Versailles.",
      "On recherche activement le chef de la bande, un repris de justice borgne nommé Frédéric Jlasse, âgé de vingt et un ans."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Sports",
    "title": "La conquête de l'air : L'expérience de Santos-Dumont",
    "summary": "Contrairement aux rumeurs, l'expérience du dirigeable Santos-Dumont n° 5 autour de la tour Eiffel n'a pas eu lieu hier, l'inventeur préférant attendre des conditions météorologiques plus clémentes.",
    "paragraphs": [
      "Un journal du matin avait annoncé pour hier, comme chose certaine, l'expérience définitive, autour de la tour Eiffel, du Santos-Dumont n° 5. Cette nouvelle était pour le moins très amplifiée, M. de Santos-Dumont ne voulant fixer d'autre jour pour son essai que celui du beau temps.",
      "Hier donc, le vent soufflant avec assez de violence, le dirigeable est resté dans son hangar.",
      "Si aujourd'hui le temps est calme, l'expérience aura lieu, mais sans aucune garantie formelle."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Sports",
    "title": "Une invention aérostatique dans le Midi",
    "summary": "À Vidauban, dans le Var, M. Benjamin Reinier a conçu un appareil aérostatique en forme de poisson, capable de monter et descendre à volonté, suscitant l'admiration des témoins.",
    "paragraphs": [
      "Ce n'est pas à Paris seulement qu'on s'occupe de la direction des ballons ; à chaque instant, des informations nous apprennent que dans les départements on se passionne aussi pour la solution du problème. Aujourd'hui, c'est du Midi que nous vient la nouvelle.",
      "Dans une importante commune du Var, à Vidauban, habite M. Benjamin Reinier, très connu pour ses conceptions hardies et ingénieuses. Il paraît que M. Reinier a construit un appareil réellement digne de la plus sérieuse attention.",
      "L'inventeur, très simple, décrit son appareil comme ayant la forme d'un superbe poisson. Interrogés, les témoins attestent : « Nous avons vu chez M. Reinier un appareil qui monte et descend à volonté. Le ballon mesure 1 mètre 50 de diamètre. M. Reinier organise son appareil et quelques minutes après nous voyons le ballon descendre, arriver à terre et s'y fixer. Nous avons été émerveillés de ce résultat. »"
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Sports",
    "title": "La prochaine exposition du cycle et de l'automobile",
    "summary": "Le comité d'organisation s'est réuni à l'Automobile-Club de France pour préparer la prochaine exposition du cycle et de l'automobile, qui se tiendra en décembre au Grand Palais.",
    "paragraphs": [
      "On s'occupe déjà de la prochaine exposition du cycle et de l'automobile, dont les détails ont été réglés hier soir par le comité d'organisation réuni au sein de l'Automobile-Club de France.",
      "L'exposition aura lieu en décembre prochain, au Grand Palais des Champs-Élysées."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "International",
    "title": "Les agents cyclistes à Bruxelles",
    "summary": "Bruxelles a inauguré hier une brigade de quatorze agents cyclistes, inspirée du modèle parisien, utilisant des signes conventionnels pour faciliter l'arrestation des contrevenants.",
    "paragraphs": [
      "Bruxelles imite Paris. Paris ayant des agents cyclistes, Bruxelles veut avoir les siens. Hier, ils ont commencé leur service.",
      "La brigade se compose de quatorze agents : six effectifs, six suppléants et deux chefs. Les agents circuleront par deux, utilisant des signes conventionnels pour communiquer, permettant ainsi d'arrêter plus facilement les contrevenants."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Actualités",
    "title": "L'automobile et les colonies",
    "summary": "Six automobiles ont été commandées pour assurer un service de transport postal entre Baticaloa et Numeglana, à Ceylan, témoignant de l'expansion de la traction mécanique dans les colonies.",
    "paragraphs": [
      "On vient de commander six automobiles pour un service sur routes à Ceylan, organisé entre Baticaloa et Numeglana ; deux des voitures sont déjà arrivées et les autorités postales confient désormais le service des courriers à la compagnie qui a organisé cette ligne."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Communication",
    "title": "Sociétés et amicales",
    "summary": "La Société amicale des originaires du Gard se réunit rue de Rivoli, tandis que les anciens défenseurs de la patrie fondent une nouvelle amicale regroupant Francs-Tireurs et Mobiles de la Seine.",
    "paragraphs": [
      "La Société amicale des originaires du Gard tiendra sa réunion mensuelle aujourd'hui, 3 août, à 9 heures du soir, au 33 de la rue de Rivoli.",
      "Les Francs-Tireurs de la Presse, auxquels se sont joints les Mobiles de la Seine, ont fondé une société amicale ayant pour but d'être utile aux anciens défenseurs de la patrie."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "La Comédie-Française reprend le Mercure galant et annonce les débuts de Mme Segond-Weber dans Chimène. Par ailleurs, l'Opéra réorganise ses retraites et le Châtelet recrute des danseuses.",
    "paragraphs": [
      "C'est mercredi prochain que la Comédie-Française reprendra le Mercure galant de Boursault. Mme Segond-Weber abordera pour la première fois le rôle de Chimène dans le Cid.",
      "Une commission s'est réunie à l'Opéra pour reconstituer la caisse des retraites des artistes. Au théâtre du Châtelet, on recherche de jeunes danseuses."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Santé publique",
    "title": "Statistique hebdomadaire de la ville de Paris",
    "summary": "Le bilan hebdomadaire de la ville de Paris fait état de 859 décès, marqués par une hausse de la diarrhée infantile, tandis que 522 mariages ont été célébrés dans la capitale.",
    "paragraphs": [
      "Le service de la statistique municipale a compté pendant la semaine 859 décès. La fièvre typhoïde a causé 9 décès. La variole est en diminution avec 3 décès. La diarrhée infantile est en augmentation avec 91 décès. Il y a eu 32 morts violentes, dont 9 suicides, et 522 mariages célébrés."
    ]
  }
];
