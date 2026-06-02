// Date: 1899-12-23
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-12-23 (Version Restaurée, 8 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 4,
    "category": "Spectacles",
    "title": "Actualités des théâtres parisiens",
    "summary": "Programme des représentations et causeries littéraires pour cette journée : à l'Odéon, au Gymnase, à Déjazet et à l'Ambigu, avec une attention particulière portée sur les matinées exceptionnelles.",
    "paragraphs": [
      "Le Petit Parisien : drame lyrique en trois actes de MM. Michel Carré et Hugonnet, sur une musique de M. E. Misa.",
      "Aujourd'hui, à l'Odéon, à 5 heures : « Les Cent », causerie par M. Léo Claretie, suivie de la farce « Le borgne aveuglé », un acte en vers de M. Jules de Marthold.",
      "Au Gymnase, à 4 heures 3/4, « Les Auteurs gais », causerie par M. Tristan Bernard, suivie de la première représentation de « Frérot », une liberté.",
      "Les Petites voisines ne seront pas données en matinée demain dimanche à Déjazet, la salle étant louée à la Moissonneuse pour sa réunion annuelle ; mais à l'occasion des fêtes, le vaudeville de MM. H. Raymond et J. de Gorsse sera donné en matinée lundi, jour de Noël, à 2 heures.",
      "L'Ambigu annonce pour dimanche et lundi les deux dernières matinées de « Cartouche ». Lundi soir, irrévocablement, dernière représentation."
    ]
  },
  {
    "id": 2,
    "page": 4,
    "category": "Concerts",
    "title": "Annulation des Concerts Lamoureux",
    "summary": "En raison du décès de leur chef d'orchestre, M. Charles Lamoureux, l'Association des Concerts Lamoureux annule la séance du dimanche 24 courant.",
    "paragraphs": [
      "L'Association des Concerts Lamoureux nous informe que, par suite du décès de son président et chef d'orchestre, M. Charles Lamoureux, le concert de dimanche prochain 24 courant, qui devait être dirigé par M. Camille Chevillard, n'aura pas lieu.",
      "Les obsèques de M. Lamoureux auront lieu aujourd'hui, à dix heures et demie, en l'église Saint-Ferdinand des Ternes."
    ]
  },
  {
    "id": 3,
    "page": 4,
    "category": "Spectacles",
    "title": "Soirées aux Folies-Bergère et à la Scala",
    "summary": "Le grand gala de lutte aux Folies-Bergère oppose aujourd'hui le Français Pons au Turc Kara-Ahmed, tandis que la Scala inaugure sa nouvelle revue « Paris-flotte ».",
    "paragraphs": [
      "S'il est jamais aux Folies-Bergère un spectacle de gala propre à attirer tout Paris, c'est sûrement la soirée d'aujourd'hui, au cours de laquelle Pons, le géant français, se mesurera avec Kara-Ahmed, l'imbattable Turc, champion du monde.",
      "Ce soir, à la Scala, première représentation de « Paris-flotte », revue à grand spectacle en deux actes et sept tableaux, de MM. Eug. Héros et Ch. Mougel, sur une musique nouvelle et arrangée de M. Raiter."
    ]
  },
  {
    "id": 4,
    "page": 4,
    "category": "Sports",
    "title": "La soirée de l'Aéro-Club",
    "summary": "Compte-rendu de la réception mondaine à l'Aéro-Club, marquée par des projections de vues aériennes et un divertissement musical par des artistes.",
    "paragraphs": [
      "Très jolie soirée hier à l'Aéro-Club, dans les salons de la place de la Concorde. Le programme comprenait des projections photographiques et cinématographiques de vues aériennes, puis, dans la seconde partie, des revuettes, saynètes, danses et chansons interprétées par nos plus charmantes artistes."
    ]
  },
  {
    "id": 5,
    "page": 4,
    "category": "Sports",
    "title": "Boxe : Défis à venir",
    "summary": "Annonce d'un grand combat de boxe internationale prévu pour le 1er janvier prochain, mettant aux prises Peter Maher et Mac Coy.",
    "paragraphs": [
      "Les Américains nous annoncent, pour le 1er janvier prochain, un grand combat de boxe entre Peter Maher et Mac Coy, deux champions réputés au-delà de l'Atlantique."
    ]
  },
  {
    "id": 6,
    "page": 4,
    "category": "Escrime",
    "title": "Assaut d'honneur de la Société d'encouragement à l'escrime",
    "summary": "La Société d'encouragement à l'escrime tiendra, le vendredi 29 décembre, une séance d'assaut solennelle au Grand-Hôtel afin de rendre hommage à l'armée française.",
    "paragraphs": [
      "La Société d'encouragement à l'escrime donnera le vendredi 29 décembre, au Grand-Hôtel, un assaut en l'honneur de l'armée."
    ]
  },
  {
    "id": 7,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Tragédies de l'Amour : La Révolte (suite)",
    "summary": "Le yacht Némésis est en péril, frappé par une violente tempête. Tandis que le forban Lehu tente de manœuvrer sous le vent, Pierre et Gaston maintiennent l'équipage mutiné en respect, revolver au poing.",
    "paragraphs": [
      "Le yacht roulait très fort. Un tourbillon enveloppa la Némésis et cassa net un mât de perroquet. Lehu, le forban, commanda de couper les agrès. Sous l'écoutille, Pierre et Gaston tenaient les révoltés en respect avec leurs revolvers."
    ]
  },
  {
    "id": 8,
    "page": 4,
    "category": "Agriculture",
    "title": "Bulletin des vins et eaux-de-vie",
    "summary": "À l'approche des fêtes, le marché des vins affiche un calme relatif avec toutefois quelques transactions actives dans l'Aude. Le froid actuel favorise la clarification des crus dans les diverses régions viticoles.",
    "paragraphs": [
      "À mesure que nous approchons des fêtes de fin d'année, le calme va s'accentuant. Cependant, on signale des affaires dans quelques régions. Le froid facilite l'éclaircissement des vins.",
      "Dans le Gard, on continue à rechercher les beaux vins. Dans l'Hérault, les affaires sont calmes. Dans l'Aude, les affaires ont été actives. En Champagne, les vins du vignoble blanc sont dépouillés. Les eaux-de-vie des Charentes sont calmes."
    ]
  }
];
