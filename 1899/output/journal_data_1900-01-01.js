// Date: 1900-01-01
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-01 (Version Restaurée, 29 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique",
    "title": "La nouvelle Constitution et le consulat",
    "summary": "La structure du pouvoir est bouleversée par la nouvelle Constitution, plaçant le Premier Consul Bonaparte au sommet de l'État, tandis que les assemblées législatives occupent désormais le palais des Tuileries.",
    "paragraphs": [
      "Le pouvoir exécutif est désormais concentré entre les mains de trois citoyens, dont Bonaparte, nommés par une Constitution. Le Premier Consul détient, dans les faits, l'essentiel des pouvoirs du nouvel État.",
      "Le Conseil d'État siège aux Tuileries. Le Corps législatif et le Tribunat sont choisis par une autre assemblée. Toutes ces séances se tiennent au palais des Tuileries."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Chronique",
    "title": "La controverse sur la date du nouveau siècle",
    "summary": "Vive polémique sur le passage au XXe siècle : alors que le Consistoire luthérien de Hanovre anticipe l'événement, le bon sens populaire maintient la fin de l'ère actuelle au 31 décembre 1800.",
    "paragraphs": [
      "La presse se fait l'écho de vives discussions au sujet de la date précise à laquelle commencera le vingtième siècle.",
      "Le Consistoire luthérien à Hanovre a publié une déclaration portant que le 1er janvier 1899 sera le premier jour du siècle nouveau. À cela, le bon sens répond que le dix-neuvième siècle ne s'achèvera que lorsque 1800 ans se seront écoulés, soit le 31 décembre de l'an 1800."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Incendie au Palais-Royal",
    "summary": "Une tentative de cambriolage au Palais-Royal a semé l'émoi. Des malfaiteurs ont utilisé de la poudre pour faire exploser une cheminée afin de dérober la banque, mais leur tentative a échoué.",
    "paragraphs": [
      "La ville s'entretient d'un événement survenu la veille. Des malfaiteurs ont tenté de mettre le feu au Palais-Royal, où sont situées les maisons de jeu, afin de s'emparer de la banque à la faveur du désordre.",
      "Ayant jeté de la poudre dans une cheminée, ils ont provoqué une explosion très forte. Les vitres de l'appartement ont été brisées, mais l'argent de la banque est demeuré intact."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Mode",
    "title": "La mode féminine et masculine",
    "summary": "Aperçu des élégances de fin de siècle : le velours noir et les plumes de coq s'imposent chez les dames, tandis que le chapeau rond et la redingote demeurent les attributs essentiels du costume masculin.",
    "paragraphs": [
      "Le Journal des Débats consacre une étude à la mode. On emploie désormais, pour les chapeaux, le velours noir marié aux satins de couleurs. Les coiffures en cheveux deviennent rares au profit de l'ornementation par les plumes de coq.",
      "Les robes sont généralement confectionnées en soie, adoptant la forme des robes turques. Quant aux hommes, ils privilégient le chapeau rond de forme basse, assorti à la longue redingote à pèlerine."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Social",
    "title": "Les grèves de la Loire",
    "summary": "La tension persiste dans le bassin minier de la Loire. M. Jaurès est arrivé à Saint-Étienne pour soutenir les ouvriers, alors qu'une délégation presse les compagnies d'accepter un arbitrage.",
    "paragraphs": [
      "Les conseils d'administration n'avaient pas encore fait connaître leur décision au sujet de l'addition demandée par les grévistes au projet de compromis initial.",
      "M. Jaurès est arrivé à Saint-Étienne pour soutenir les mineurs. Une délégation a été formée afin de négocier avec le préfet et les compagnies minières, exigeant un arbitrage pour résoudre le conflit."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "International",
    "title": "Guerre du Transvaal",
    "summary": "La situation reste stationnaire en Afrique du Sud, où des escarmouches éclatent autour de la Tugela, de Mafeking et de Ladysmith, tandis que la saisie d'un navire allemand par les Britanniques agite la diplomatie mondiale.",
    "paragraphs": [
      "La situation demeure stationnaire. Quelques escarmouches ont eu lieu aux abords de la Tugela, ainsi qu'à Mafeking et à Ladysmith.",
      "Le fait saillant qui continue à préoccuper l'opinion publique est la saisie du vapeur allemand par les autorités anglaises, mesure qui fait l'objet d'une discussion vive dans les journaux du monde entier."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Économie",
    "title": "Le projet de chemin de fer pan-américain",
    "summary": "Un ambitieux projet ferroviaire est à l'étude pour relier New York à Buenos Aires. Ce tracé, dont le coût est estimé à 875 millions de francs, ambitionne d'unifier les marchés économiques du Nord et du Sud.",
    "paragraphs": [
      "Il est question de la création d'un chemin de fer reliant les deux Amériques, de New-York à Buenos-Ayres, sur une étendue immense.",
      "On évalue la dépense des terrassements et ouvrages d'art à 875 millions de francs. Ce projet viserait à réunir en un seul faisceau économique les forces du Nord et du Sud."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Sinistre en mer à Cherbourg",
    "summary": "Le sémaphore a signalé le tragique naufrage du cotre anglais Fanny au large de la côte d'Equihen. Le navire, transportant douze hommes d'équipage, a péri corps et biens sous la violence de la tempête.",
    "paragraphs": [
      "Le sémaphore a signalé que le cotre anglais Fanny, du port de Maldon, ayant douze hommes d'équipage, a péri corps et biens sous la côte d'Equihen, victime de la violence de la tempête."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "International",
    "title": "La Colonie du Cap",
    "summary": "La situation politique dans la colonie du Cap suscite de vifs débats. Parallèlement, nos troupes maintiennent leurs positions au Kwale, tandis que la compagnie établie à Djenné poursuit ses activités commerciales.",
    "paragraphs": [
      "La question de la colonie du Cap est vivement débattue, comme il fallait s'y attendre, en raison de la situation actuelle.",
      "Nos troupes demeurent stationnées au Kwale ; au déclin du mois de décembre, la compagnie établie à Djenné a traité ses affaires."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un meurtre à Pantin",
    "summary": "Un crime commis à Pantin le 31 décembre a provoqué une vive émotion parmi la population. Malgré les précautions prises, le drame a pu se produire, laissant les témoins dans une profonde stupeur.",
    "paragraphs": [
      "Un meurtre survenu à Pantin, le 31 décembre, a causé une énorme surprise dans la population.",
      "Le directeur a déclaré que, malgré les précautions prises, l'incident a pu avoir lieu, laissant les témoins du drame dans la plus grande stupeur."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Chronique",
    "title": "Les voyages en Afrique",
    "summary": "Un correspondant relate les péripéties et les rencontres marquantes vécues durant ses six mois d'expédition à travers les contrées d'Afrique, soulignant la rudesse du terrain.",
    "paragraphs": [
      "Notre correspondant régulier nous informe de ses voyages en Afrique, décrivant avec précision les péripéties survenues lors de ses périlleuses traversées.",
      "Il relate des rencontres marquantes et les inévitables difficultés de parcours auxquelles il a dû faire face durant les six mois passés dans ces régions du continent africain."
    ]
  },
  {
    "id": 12,
    "page": 3,
    "category": "Reportage",
    "title": "Le commerce des escargots dans le vieux Paris",
    "summary": "Retour sur l'apogée et le déclin du commerce d'escargots dans le quartier des Halles, porté par Albert Sardin et Léandre Basset, face à une concurrence devenue trop rude.",
    "paragraphs": [
      "Le petit monument, décoré de la même manière, portait le nom d'Albert Sardin. Cet homme fut l'un des véritables conquérants du marché de l'escargot.",
      "La maison Sardin garda son enseigne, mais ce fut Mme Dimanche, l'associée de Mme Sardin, qui continua seule la préparation des escargots après la guerre.",
      "Ce fonds de commerce fut ensuite acheté par M. Léandre Basset. Dans son parc d'escargots, qui occupait une série de caves de la rue Mondétour, il emmagasinait jusqu'à 800 000 de ces mollusques rampants. M. Basset se retire du commerce après fortune faite, estimant que l'industrie escargotière est finie à cause de l'âpreté de la concurrence."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Reportage",
    "title": "La vie des petites marchandes de la rue Mondétour",
    "summary": "Témoignage sur la précarité des marchandes de la rue Mondétour, témoins de la mutation urbaine d'un vieux Paris promis aux grands magasins.",
    "paragraphs": [
      "Tout près de la rue Mondétour, à l'entrée de l'ancienne auberge du Haume, une marchande de persil m'expliquait hier : « Voici vingt ans que chaque jour je viens m'installer. J'étais seule au début, maintenant nous sommes vingt, sans compter les chineurs. C'est trop de concurrence. »",
      "Cet hôtel du Haume est une des plus curieuses maisons du quartier, transformée maintenant en une resserre où les porteurs des Halles déposent leurs crochets et remisent leurs petites voitures. Mais ce vieux coin de Paris va vivre une vie nouvelle, remplacé par de grands magasins dans quelques années."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Bilan de la fin d'année 1899",
    "summary": "Sous un soleil radieux, le 31 décembre 1899 a marqué une transition apaisée, effaçant le souvenir des jours sombres pour accueillir l'aube du nouveau siècle.",
    "paragraphs": [
      "La dernière journée de l'année, le 31 décembre 1899, a été superbe. Par rapport aux abominables journées précédentes, le soleil s'est montré avec complaisance. En somme, la transmission des pouvoirs de l'année 1899 à l'année 1900 s'est effectuée dans de bonnes conditions."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Nouvelles de Lyon",
    "summary": "À Lyon, fait rarissime, les réceptions officielles du nouvel an sont annulées en raison de l'absence ou de l'indisponibilité des hautes autorités locales.",
    "paragraphs": [
      "Fait sans précédent, il n'y aura, cette année, de réceptions officielles à l'occasion du nouvel an à Lyon. L'archevêque est à Rome, le premier président est en deuil, et le préfet, le gouverneur, le maire ainsi que le procureur général sont indisposés."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Culture",
    "title": "Nominations à l'École des chartes",
    "summary": "L'Académie des inscriptions et belles-lettres a arrêté sa liste de candidats pour la chaire de diplomatique : M. Maurice Prou est classé en première ligne, suivi par M. Levillain en seconde position.",
    "paragraphs": [
      "L'Académie des inscriptions et belles-lettres, appelée à pourvoir la chaire de diplomatique restée vacante à l'École des chartes par suite du décès de M. Giry, a arrêté sa liste de candidats. Elle place, en première ligne, M. Maurice Prou et, en seconde ligne, M. Levillain."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Sciences",
    "title": "Découverte archéologique en Égypte",
    "summary": "M. Maspero, directeur des antiquités, a transmis à l'Institut une note sur une stèle en granit découverte à Kom-el-Hayet, représentant le roi Nectanébo II offrant des présents à la déesse Net de Sais.",
    "paragraphs": [
      "M. Maspero, notre éminent directeur des antiquités en Égypte, a adressé à l'Institut une note savante commentant une inscription hiéroglyphique découverte récemment à Kom-el-Hayet.",
      "Cette stèle en granit est particulièrement remarquable : elle représente le roi Nectanébo II accomplissant des offrandes rituelles devant la déesse Net de Sais."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Double suicide à Arpajon",
    "summary": "Un drame passionnel a endeuillé Arpajon : Mlle Eugénie Poingt et M. Charles Grouillet, empêchés d'unir leurs destinées par des pressions familiales, ont mis fin à leurs jours par asphyxie volontaire.",
    "paragraphs": [
      "Un événement tragique a provoqué une vive émotion dans la commune d'Arpajon. Mlle Eugénie Poingt et M. Charles Grouillet ont été retrouvés sans vie, s'étant donné la mort par l'asphyxie d'un réchaud à charbon.",
      "Le jeune homme avait sollicité la main de la jeune fille, mais le refus et les manœuvres de leurs familles respectives pour entraver ce mariage les ont conduits au désespoir. Un billet retrouvé sur place témoignait de leur ultime résolution : « Puisque nous ne pouvons être unis dans la vie, nous désirons être réunis dans la mort. »"
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression odieuse rue Lhomond",
    "summary": "Une jeune femme, Clara Lenoël, a été victime d'une violente agression par un garçon de café, Félix Baulard, dans un garni. Elle a échappé à son bourreau en s'enfuyant par les toits avant d'être secourue.",
    "paragraphs": [
      "M. le juge d'instruction Lemercier a été saisi d'une plainte déposée par Mlle Clara Lenoël. Cette dernière a été victime d'une agression d'une rare violence de la part d'un nommé Félix Baulard, garçon de café de son état.",
      "La victime avait été attirée dans un garni où elle fut rouée de coups et frappée sauvagement à la tête. Grièvement blessée, elle parvint à s'échapper sur le toit de la bâtisse avant d'être recueillie par des gardiens de la paix. L'agresseur a été appréhendé par les autorités."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort d'un interne en médecine",
    "summary": "Le jeune interne Della Décima, âgé de 21 ans, a succombé à une infection contractée accidentellement lors de travaux de laboratoire au service des typhiques de l'hôpital annexe du boulevard Macdonald.",
    "paragraphs": [
      "M. Della Décima, interne à l'hôpital annexe du boulevard Macdonald, est décédé à l'âge de 21 ans. Attaché au service des typhiques, il avait contracté le germe de la maladie lors d'une manipulation de laboratoire.",
      "Ses obsèques auront lieu aujourd'hui, marquant la perte d'un jeune praticien prometteur dévoué à la science."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Exposition Universelle 1900",
    "title": "Concours d'appareils de sauvetage en mer",
    "summary": "En vue de l'Exposition universelle de 1900, un concours international doté de 100 000 francs récompense l'invention la plus efficace pour le sauvetage en mer, honorant la mémoire du philanthrope Anthony Pollok.",
    "paragraphs": [
      "Un concours international est ouvert, dans le cadre de l'Exposition universelle de 1900, afin de récompenser le meilleur appareil de sauvetage destiné à être utilisé lors de sinistres en mer. Ce prix prestigieux, doté d'une somme de 100 000 francs, est financé par la fondation établie par les héritiers de M. Anthony Pollok, célèbre philanthrope ayant consacré sa fortune à cette noble cause.",
      "Ce concours a pour objectif de stimuler l'ingéniosité des inventeurs et des marins du monde entier. Les dispositifs présentés devront démontrer une fiabilité exemplaire face aux périls des océans, garantissant ainsi une protection accrue pour les équipages et les passagers des navires de commerce comme des paquebots de ligne."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Théâtre",
    "title": "Nécrologie : M. Bertrand",
    "summary": "Le monde du théâtre parisien pleure M. Bertrand, ancien directeur de l'Opéra, des Variétés et du Vaudeville, dont la carrière brillante et le dévouement envers ses pairs ont marqué l'histoire de la scène.",
    "paragraphs": [
      "C'est avec une profonde tristesse que nous apprenons le décès de M. Bertrand, directeur de l'Opéra, survenu cette nuit. Homme de théâtre accompli et acteur de formation, il avait su imprimer sa marque sur les plus grandes scènes parisiennes.",
      "Après avoir brillamment dirigé les théâtres des Variétés et du Vaudeville, il avait pris la direction de l'Opéra, où il monta des productions mémorables, dont le retentissant succès de Salammbô.",
      "Très investi dans la vie de sa corporation, M. Bertrand occupait également la présidence de l'Association des artistes dramatiques, une fonction dans laquelle son dévouement envers ses confrères était unanimement salué."
    ]
  },
  {
    "id": 23,
    "page": 4,
    "category": "Arts et Spectacles",
    "title": "Un nouvel ouvrage de Leoncavallo",
    "summary": "Le célèbre compositeur Leoncavallo prépare un nouvel opéra intitulé « L'Abbé ». Il en signe tant le livret que la partition, puisant son inspiration dans le roman « La Faute de l'abbé Mouret » d'Émile Zola.",
    "paragraphs": [
      "On annonce que l'auteur de La Bohème et des Paillasses, M. Leoncavallo, travaille en ce moment à un nouvel ouvrage intitulé L'Abbé et dont, selon sa coutume, il écrit lui-même le poème en même temps que la musique.",
      "Il a emprunté le sujet de son œuvre à l'un des premiers romans de M. Émile Zola : La Faute de l'abbé Mouret."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Arts et Spectacles",
    "title": "Succès du Demi-Faust à Parisiana",
    "summary": "Le Parisiana a triomphé hier avec « Demi-Faust », une revue parodique spirituelle de Marcel de Lihus, soutenue par la musique inspirée de M. Bonemy et l'interprétation pleine de verve d'une troupe talentueuse.",
    "paragraphs": [
      "On a donné hier avec succès, au Parisiana, une désopilante revue-parodie, le Demi-Faust, de M. Marcel de Lihus, accompagnée d'une musique des plus réussies de M. Bonemy.",
      "Cette fantaisie est enlevée avec verve par les interprètes, Mmes Guitty et De Berker, ainsi que MM. Garbin et Yvain."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Causerie Financière",
    "title": "Bilan financier de l'année 1899",
    "summary": "Malgré les récentes tensions boursières liées à la guerre anglaise, l'année 1899 affiche un bilan économique globalement positif, porté par le dynamisme des secteurs industriels, miniers et bancaires.",
    "paragraphs": [
      "Malgré la réaction assez sensible de ces dernières semaines, l'année qui vient de se terminer n'a pas été défavorable au point de vue économique et financier.",
      "À la Bourse, cette tendance a produit deux effets contraires : la baisse des grandes valeurs dites de tout repos, et la hausse des banques, des mines, des charbonnages, des sociétés métallurgiques et industrielles.",
      "Le courant qui s'est manifesté depuis deux ans pourrait donc être considéré comme satisfaisant à tous égards, s'il n'avait donné lieu à certains excès, notamment en Russie, en Allemagne et en Amérique.",
      "La guerre dans laquelle s'est lancée l'Angleterre est venue transformer l'embarras prévu en graves difficultés et a provoqué la réaction générale."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Social",
    "title": "Protéger la jeunesse",
    "summary": "Une réflexion sur la vulnérabilité de la jeunesse face à la maladie, introduisant le récit d'un drame survenu au hameau de la Morinais, dans la commune de Langon.",
    "paragraphs": [
      "Les Grecs envisageaient la mort d'un jeune homme ou d'une jeune fille comme un si grand malheur que les funérailles avaient toujours lieu avant l'aube.",
      "Dans un article récemment publié, un écrivain demande : Pourquoi les enfants et les adolescents tombent-ils malades si facilement et meurent-ils si vite ?",
      "Permettez-moi maintenant de vous conter une petite histoire. La scène se passe au hameau de la Morinais, commune de Langon (Ille-et-Vilaine)."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Roman-Feuilleton",
    "title": "Les Tragédies de l'Amour",
    "summary": "Extrait du roman inédit publié dans les colonnes du Petit Parisien, mettant en scène les tourments sentimentaux et la séparation douloureuse de Jeannette.",
    "paragraphs": [
      "Le Petit Parisien présente son grand roman inédit : Les Tragédies de l'Amour.",
      "Elle ferma les yeux et ses poings se crispèrent. Jeannette, avec tristesse, se disait : « C'est une grande épreuve que de se séparer de vous ; nous étions si attachés ! Ah ! comme nous étions associés, cela devait bien finir ainsi. »"
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Sports",
    "title": "La vitesse des automobiles",
    "summary": "Face à l'insécurité causée par les chauffards, M. Pierre Baudin, ministre des Travaux publics, envisage de limiter légalement la vitesse des automobiles à 30 km/h.",
    "paragraphs": [
      "La vitesse exagérée de certains chauffards qui, prenant les routes de France pour des pistes de course, les parcourent à 50 ou 60 kilomètres à l'heure, soulève dans tout le pays un haro général.",
      "M. Pierre Baudin, ministre des Travaux publics, ne se cache pas pour déclarer que si cet état de choses ne cesse pas, il sera obligé de prendre des mesures catégoriques, comme imposer des dispositifs empêchant les automobiles de dépasser 30 kilomètres à l'heure."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Sports",
    "title": "Informations sportives diverses",
    "summary": "Actualités sportives : gala du Touring-Club, modernisation postale à Chicago, pugilisme à New-York et résultats des matchs de football-rugby et de championnat de Paris.",
    "paragraphs": [
      "Le bal au profit de la caisse de secours immédiats aux cantonniers, organisé par le Touring-Club, aura lieu le 6 janvier, à l'hôtel Continental.",
      "Un télégramme de Chicago nous apprend que le directeur de l'administration des Postes vient de décider la suppression complète du service hippomobile, pour le remplacer partout par le service à traction mécanique.",
      "Aujourd'hui, à New-York, Peter Maher et Kid McCoy doivent se rencontrer en un match de 25 reprises.",
      "Le match de football rugby mettant en présence les équipes premières du Football-Club de Lyon et du Racing-Club de France s'est disputé hier à Auteuil. Le Racing-Club a triomphé par 20 points à 5.",
      "Le match du championnat de Paris, où se rencontraient le Standard Athletic-Club et le Club français, a été gagné par ce dernier, 3 buts à 2."
    ]
  }
];
