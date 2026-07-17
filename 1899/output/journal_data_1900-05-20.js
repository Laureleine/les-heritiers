// Date: 1900-05-20
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-05-20 (Version Restaurée, 41 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La loi militaire et les colonies",
    "summary": "La loi militaire de 1889, par ses contraintes de service, entrave paradoxalement l'expansion coloniale française. Une réforme est réclamée pour favoriser l'établissement des jeunes Français dans nos nouveaux territoires.",
    "paragraphs": [
      "Les auteurs d'une loi ne se rendent pas compte souvent des conséquences qu'elle produit. C'est à l'application seule que l'on peut juger les résultats de mesures législatives, crues bonnes par un Parlement, et dont la pratique montre les inconvénients.",
      "On peut dire cela au sujet de la loi du service militaire aux colonies, dont les dispositions sont devenues une entrave à l'œuvre colonisatrice française, au lieu d'y concourir comme on l'espérait.",
      "On a donc constitué une prime considérable à l'émigration, en supprimant ainsi le lourd impôt du sang au profit des pays étrangers situés hors d'Europe, sans songer que la France venait de créer un immense empire colonial d'outre-mer.",
      "Deux colonies lointaines offrent beaucoup d'analogie : la Birmanie et notre Indo-Chine. En Birmanie, rien ne viendra arracher un jeune Français à son entreprise, alors qu'en Indo-Chine, de par la loi militaire de 1889, il sera contraint à passer un an au régiment.",
      "Ce n'est incontestablement pas cela qu'ont voulu les Chambres, il y a onze ans, et il paraît urgent de modifier un texte fait en songeant beaucoup plus à nos anciennes colonies qu'aux immenses territoires acquis à la France par la République.",
      "Tous les ministères, depuis la promulgation de la loi, ont craint d'armer les noirs et d'avoir, pour défendre les Antilles et la Guyane, des bataillons où l'élément nègre serait en immense majorité. À la Réunion, cette objection n'existait pas, la situation morale des habitants étant excellente.",
      "L'Union coloniale demande avec raison d'importantes modifications à la loi. D'après elle, il faudrait que tout jeune homme, ayant fixé sa résidence dans une colonie avant l'âge de vingt et un ans, fût dispensé du service militaire, à la condition d'y rester jusqu'à trente ans.",
      "Il faut espérer que des idées aussi justes seront acceptées. Bien entendu, il ne faudrait pas que la passion française de l'uniformité fît soumettre aux mêmes dispositions nos vieilles colonies, qui sont absolument assimilées, et d'immenses territoires, notre récent patrimoine colonial."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Secret du Docteur",
    "summary": "Au cœur d'un drame familial poignant, Gabrielle exprime son tourment et sa loyauté indéfectible, jurant de percer le mystère d'un assassinat pour réhabiliter l'honneur de l'homme qu'elle aime.",
    "paragraphs": [
      "En suis-je capable, dis, d'un sentiment pareil ? Non, non, pauvre maman, je t'aime toujours plus que tout. Tu le sais bien.",
      "Eh bien ! Gabrielle ne reviendra plus ici. Alors, c'est sérieux. Hélas ! on dirait que tu ne la tenais pas.",
      "Je me tairai, fit-elle résolue. Sur ton honneur ? Non. Sur mon amour pour toi. Maintenant, je suis tranquille.",
      "Gabrielle mettra tout son cœur, toute son intelligence à découvrir cet assassin pour réhabiliter celui qu'elle aime. Elle y arrivera."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Informations Politiques",
    "title": "Les travaux budgétaires et le Conseil général",
    "summary": "La commission du budget examine la défense maritime et coloniale. Parallèlement, les électeurs de la banlieue parisienne sont appelés aux urnes ce jour pour le renouvellement du Conseil général de la Seine.",
    "paragraphs": [
      "Avant de reprendre la discussion du projet de loi sur la marine marchande, la commission du budget a décidé, hier, d'entendre le ministre des Finances sur les projets qui concernent la défense maritime et coloniale.",
      "La commission a consacré sa séance à la discussion générale du projet sur la Marine.",
      "C'est aujourd'hui que les électeurs de la banlieue de Paris ont à procéder au renouvellement du Conseil général de la Seine. Les candidatures sont en assez petit nombre et il est à présumer que la lutte sera vive."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Informations Politiques",
    "title": "La rentrée des Chambres",
    "summary": "Le Parlement reprend ses sessions ce mardi 22 mai. Un ordre du jour chargé attend les députés, avec des interpellations majeures sur les questions coloniales, sociales et les suites de l'affaire Dreyfus.",
    "paragraphs": [
      "Les travaux du Parlement, interrompus dans les premiers jours d'avril, seront repris après-demain mardi 22 mai.",
      "Cet ordre du jour ne comprend pas moins de quatre interpellations : celle du comte d'Aulps sur la concession de 136 000 hectares en Afrique, celle de M. Vaillant sur le chômage, celle de M. Coutant sur les trains ouvriers et celle de M. Desfarges sur les tarifs pour ouvriers étrangers.",
      "Il semble certain que le débat portera largement sur la politique générale du Cabinet, notamment au sujet de l'affaire Dreyfus."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Triple exécution en Tunisie",
    "summary": "À La Marsa, le verdict a été exécuté ce matin : trois indigènes, condamnés à mort pour meurtre par le tribunal de l'Oujara, ont été pendus après le refus des familles des victimes d'accepter le prix du sang.",
    "paragraphs": [
      "La Marsa, 19 mai. Ce matin a eu lieu la pendaison de trois indigènes, condamnés à mort par le tribunal de l'Oujara. Les assassins avaient été amenés devant le bey qui, devant le refus des familles des victimes d'accepter le prix du sang, a ordonné d'exécuter la sentence."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le crime du bois de Vincennes",
    "summary": "Le mystère demeure total concernant le crime du bois de Vincennes. Tandis que l'identité de la victime reste inconnue, le juge Jossa oriente ses investigations vers les auteurs de vols de plomb sévissant dans la zone.",
    "paragraphs": [
      "Le plus profond mystère continue de régner sur le crime du bois de Vincennes. Le cadavre de la victime n'a pas encore été identifié. M. Jossa, juge d'instruction, persiste à croire qu'il pourra découvrir les assassins parmi la classe des individus arrêtés pour vols de plomb.",
      "Un terrassier a remis aux autorités une redingote qu'il avait achetée à un inconnu dans le bois, craignant d'être impliqué dans l'affaire."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'explosion de l'usine Deiss",
    "summary": "Au lendemain de la tragique explosion à l'usine Deiss de la Plaine Saint-Denis, l'enquête progresse. Les accès au site demeurent strictement contrôlés et les obsèques de François Lacour sont célébrées ce jour.",
    "paragraphs": [
      "Nous avons relaté hier le terrible accident survenu à l'usine Deiss, à la Plaine Saint-Denis. La foule s'est pressée rue du Landy, mais les accès ont été maintenus fermés par les autorités pour des raisons de sécurité liées à la manipulation du sulfure de carbone.",
      "L'enquête se poursuit pour déterminer les causes exactes du sinistre. Plusieurs blessés sont en voie d'amélioration, tandis que les obsèques de François Lacour auront lieu aujourd'hui."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "La santé de M. Doumer",
    "summary": "Victime d'une attaque de dysenterie au début du mois d'avril, le gouverneur général de l'Indo-Chine, M. Doumer, poursuit ses fonctions avec détermination avant d'envisager son retour en métropole.",
    "paragraphs": [
      "Le gouverneur général de l'Indo-Chine a été atteint, au commencement du mois d'avril, d'une attaque de dysenterie. M. Doumer, bien qu'éprouvé, souhaite terminer la préparation du budget et la construction des chemins de fer avant de quitter la colonie pour la France."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "Visite des ministres et installations",
    "summary": "Malgré la fraîcheur ambiante, l'Exposition Universelle connaît une forte affluence. MM. Millerand et Leygues ont inspecté les sections spécialisées et inauguré le pavillon de la Chambre de commerce.",
    "paragraphs": [
      "Malgré la température relativement basse, un nombre considérable de visiteurs s'est répandu dans les jardins de l'Exposition. Les travaux au Château-d'Eau sont poussés avec une très grande activité.",
      "MM. Millerand et Leygues ont visité les sections de joaillerie et de bijouterie. Ils ont également procédé à une visite des salons réservés à la manufacture de Sèvres.",
      "Le pavillon de la Chambre de commerce a été inauguré hier sous la présidence de M. Millerand. Ce pavillon met en avant les réformes importantes obtenues par la Chambre ces dix dernières années."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Inauguration de l'ethnographie et des pavillons malais",
    "summary": "Les pavillons dédiés à Java et Sumatra ont été solennellement inaugurés. Le public peut y découvrir des collections rares de divinités, d'objets d'art et de photographies témoignant des richesses de ces contrées.",
    "paragraphs": [
      "Dans le premier pavillon sont réunies des collections uniques de divinités javanaises, d'objets d'art, d'armes anciennes, ainsi que des robes brodées et des tissus imprimés. Dans le second, on peut voir des collections de photographies des plus beaux sites de Java et de Sumatra, classées par M. Mauritz Verduysen.",
      "Ces trois pavillons méritent le détour. Ils ont été inaugurés par M. Van Verduysen, commissaire, et par les membres de la commission royale des Pays-Bas. La cérémonie fut charmante et les invités se sont retirés émerveillés des chefs-d'œuvre admirés."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "L'Ouverture du Palais de la Perse",
    "summary": "Le palais de la Perse a ouvert ses portes au public. Les visiteurs y découvrent une somptueuse collection de tapis anciens et le salon de repos aménagé pour Sa Majesté Muzaffar Ed-Din, shah de Perse.",
    "paragraphs": [
      "Le palais de la Perse, bien que n'étant pas officiellement inauguré, a été ouvert hier. Le général Kilhabgi-Khan, commissaire général, et les membres du commissariat assistaient à cette ouverture.",
      "Le public ne s'est d'ailleurs pas fait prier pour visiter la splendide collection de tapis anciens envoyés de Téhéran par les soins du shah de Perse. À trois heures et demie, M. Nazare-Aga, ambassadeur de Perse à Paris, a visité longuement le pavillon.",
      "Jusqu'à six heures du soir, une foule de visiteurs s'est pressée dans les diverses salles du pavillon et a regardé avec admiration le luxueux salon de repos meublé au premier étage à l'intention de Sa Majesté Muzaffar Ed-Din, shah de Perse."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Visites princières",
    "summary": "La venue du prince de Galles à l'Exposition est confirmée, bien que la date demeure à fixer. Parallèlement, le prince royal de Suède et son épouse ont été accueillis à Paris par la légation suédoise.",
    "paragraphs": [
      "Nous apprenons, de source sûre, que la visite du prince de Galles à l'Exposition est absolument décidée. La date de cette visite n'est toutefois pas encore fixée.",
      "Le prince royal de Suède et sa femme sont arrivés hier matin à Paris par la gare du Nord, venant de Bruxelles. Ils ont été reçus par M. Akerman, ministre plénipotentiaire de Suède en France, et par tout le personnel de la légation."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Agriculture",
    "title": "Inauguration à l'annexe de Vincennes",
    "summary": "M. Jean Dupuy, ministre de l'Agriculture, a inauguré les expositions avicoles de Vincennes. Il a salué l'excellence des éleveurs français avant de remettre plusieurs distinctions honorifiques lors d'un banquet.",
    "paragraphs": [
      "M. Jean Dupuy, ministre de l'Agriculture, a présidé hier matin l'inauguration officielle des expositions permanentes d'oiseaux et d'animaux organisées par la Société nationale d'aviculture de France.",
      "Le ministre a parcouru les différentes sections, félicitant les organisateurs. Il a particulièrement admiré un superbe lot de poules de race la Flèche qui a obtenu un grand prix d'honneur.",
      "Un banquet a été servi dans la grande salle des fêtes, où M. Jean Dupuy a prononcé une allocution très applaudie avant de remettre plusieurs distinctions honorifiques."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Étranger",
    "title": "La guerre du Transvaal : le soulagement à Londres",
    "summary": "L'annonce de la libération de Mafeking et du colonel Baden-Powell suscite une immense liesse patriotique à Londres, où les citoyens célèbrent avec ferveur cette victoire des troupes britanniques.",
    "paragraphs": [
      "L'Angleterre respire : Mafeking est libre et le colonel Baden-Powell est débloqué. Pour les Anglais, ce succès est considérable.",
      "À Londres, la foule parcourt les rues, agitant des drapeaux et des cocardes. En beaucoup d'endroits, on jette des confettis et on chante des hymnes patriotiques. Les omnibus et les cabriolets sont pavoisés."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Les exploits des pickpockets à Londres",
    "summary": "L'affluence exceptionnelle autour de la cathédrale de Saint-Paul à Londres a été mise à profit par une bande de pickpockets, opérant avec audace dans une foule difficilement contenue par les autorités.",
    "paragraphs": [
      "À Londres, les rues sont si encombrées qu'on a dû renoncer à célébrer le service solennel à la cathédrale de Saint-Paul. Une bande de voleurs a profité de la foule pour bousculer et dévaliser ouvertement les passants, profitant de l'impuissance temporaire de la police."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Militaires",
    "title": "Marche de la colonne de secours de Mafeking",
    "summary": "Des dépêches du Bechuanaland confirment qu'une colonne volante de 1 500 hommes a quitté secrètement Kimberley. Elle progresse rapidement vers le nord, déroutant les forces boers par une manœuvre audacieuse.",
    "paragraphs": [
      "Des nouvelles du Bechuanaland confirment que la colonne venue du Sud au secours de Mafeking était une colonne volante, partie secrètement de Kimberley. Composée de 1 500 hommes, elle a progressé rapidement en déroutant les Boers par une marche directe vers le nord."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Grève des tramways à Berlin",
    "summary": "Le conflit social s'aggrave à Berlin. Place Dœnhof, des grévistes ont vandalisé des tramways en brisant leurs vitres et en entravant les voies. Les autorités policières ont dû intervenir pour rétablir la circulation.",
    "paragraphs": [
      "Le mouvement de grève des tramways se poursuit avec intensité. Sur la place Dœnhof, des grévistes ont procédé au dételage des chevaux de deux tramways, brisé les glaces des voitures et obstrué les rails à l'aide des véhicules. La police a dû intervenir en force pour rétablir l'ordre."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Bataille sanglante à Anvers",
    "summary": "Une violente rixe a éclaté sur le port d'Anvers entre des matelots allemands et des ouvriers du bassin. Le bilan s'alourdit à deux blessés graves par coups de poignard, entraînant plusieurs arrestations immédiates.",
    "paragraphs": [
      "Une terrible rixe a éclaté au port d'Anvers, opposant des matelots allemands aux ouvriers du bassin. Deux individus ont été grièvement blessés par des coups de poignard. Plusieurs arrestations ont d'ores et déjà été opérées par les forces de l'ordre."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Échos et nouvelles",
    "title": "Le Président de la République à l'Exposition",
    "summary": "Le Président de la République a inauguré hier matin l'Exposition canine installée aux Tuileries. À cette occasion, il a honoré le secrétaire de la société organisatrice en lui remettant la croix du Mérite agricole.",
    "paragraphs": [
      "Le Président de la République a visité hier matin l'Exposition canine, tenue au Jardin des Tuileries. Au cours de sa visite, il a remis la croix de chevalier du Mérite agricole à M. le secrétaire de la société organisatrice."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Assassinat et procès à Grenoble",
    "summary": "La cour d'assises de Grenoble a condamné les assassins de Vienne : Louis Touquet écope de 20 ans de travaux forcés, François Saunier de 12 ans, et leur complice Éléonore Roux est condamnée à deux ans de prison.",
    "paragraphs": [
      "La cour d'assises de Grenoble, après deux jours de débats, a rendu son arrêt dans une affaire d'assassinat qui eut un certain retentissement dans la région de Vienne.",
      "Les coupables ont été condamnés : Louis Touquet, âgé de vingt et un ans, à vingt ans de travaux forcés et dix ans d'interdiction de séjour ; François Saunier, âgé de dix-huit ans, à douze ans de travaux forcés et dix ans d'interdiction de séjour. Leur complice, Éléonore Roux, âgée de dix-huit ans, qui avait fait le guet, a été condamnée à deux ans de prison."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "La rixe de Limoges",
    "summary": "Le conseil de guerre de Limoges a rendu son arrêt concernant la rixe d'avril dernier entre civils et militaires ayant entraîné la mort de l'agent Frison. Le soldat Lejeune a été condamné à trois mois de prison.",
    "paragraphs": [
      "Le conseil de guerre siégeant à Limoges a rendu hier son arrêt relativement à la rixe qui se produisit, le 18 avril dernier, entre civils et militaires, rixe qui occasionna la mort de l'agent Frison.",
      "Le soldat Lejeune, du même régiment, poursuivi pour coups et blessures volontaires sur un civil nommé Guitard, a été condamné à trois mois de prison."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Nouvelles judiciaires",
    "summary": "La cour d'assises de la Gironde a condamné le nommé Soulignac à huit ans de réclusion, tandis que les cours du Rhône et de Seine-et-Oise ont prononcé des peines de travaux forcés contre des malfaiteurs récidivistes.",
    "paragraphs": [
      "La cour d'assises de la Gironde a condamné hier à huit ans de réclusion le nommé Soulignac, municipal de Culmezais, qui, le 6 février dernier, avait assommé d'un coup de trique son voisin, M. Bourquet.",
      "La cour d'assises du Rhône a condamné, hier, à cinq ans de travaux forcés deux repris de justice, Patillon et Payre, qui avaient attaqué et dévalisé M. Béras, quincaillier.",
      "La cour d'assises de Seine-et-Oise a condamné plusieurs cambrioleurs, dont Fournie et Jullien, à des peines de travaux forcés pour un vol commis chez M. Oeslin."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une aventure romanesque (Affaire de l'enlèvement de Mme Gyp)",
    "summary": "De nouveaux témoignages recueillis par la sûreté, incluant celui d'un employé d'octroi et d'une habitante de Saint-Maurice, confortent la piste d'un enlèvement orchestré par des individus circulant dans un fiacre suspect.",
    "paragraphs": [
      "Quelques jours après, un employé d'octroi allait déclarer à M. Gasmard, sous-chef de la sûreté, qu'il se trouvait de service à la porte de nuit lors de l'incident. Son attention avait été attirée par une voiture étrange, vieille guimbarde sans numéros, conduite par un cocher dissimulant son visage.",
      "Cette déclaration a été corroborée par une propriétaire de la Grande-Rue de Saint-Maurice qui a raconté avoir vu, le soir de l'enlèvement, un individu cachant son visage rôder près de Charenton, suivi par un fiacre transportant deux jeunes gens en habit de soirée. M. Cuvillier, commissaire de police de Charenton, a pris cette déposition."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Affaire des Indes Françaises",
    "summary": "Le concessionnaire des Indes Françaises au Trocadéro a été déchu de ses droits par le commissaire général de l'Exposition suite à des irrégularités constatées par le parquet.",
    "paragraphs": [
      "L'affaire concernant les concessions de commerçants aux Indes Françaises du Trocadéro a pris une nouvelle phase. Le parquet ayant relevé des faits délictueux chez le concessionnaire M. X, celui-ci a été déchu par le commissaire général de l'Exposition.",
      "La nuit dernière, le commissariat a fait entourer l'emplacement d'une palissade et en a interdit l'accès aux commerçants récalcitrants. Aucune violence n'est à déplorer malgré les protestations."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie rue Saint-Honoré",
    "summary": "Un début d'incendie provoqué par une bougie dans l'appartement de la comtesse de Sainte-Lucie, rue Saint-Honoré, a été rapidement maîtrisé par les pompiers. La propriétaire est sauve.",
    "paragraphs": [
      "Le quartier de la Madeleine a été ému hier soir par un incendie rue Saint-Honoré, dans l'appartement de la comtesse de Sainte-Lucie. Le feu s'est propagé rapidement depuis une bougie tombée sur un journal.",
      "Les pompiers sont intervenus rapidement. La comtesse a été sauvée et le sinistre a été maîtrisé, bien que les dégâts matériels soient importants."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicides et accidents",
    "summary": "Drame rue de la Jussienne : une jeune fille de dix-huit ans, Marguerite Giraut, s'est donné la mort. Par ailleurs, M. Caron, charpentier, est grièvement blessé lors d'un accident aux chemins de fer du Nord.",
    "paragraphs": [
      "Une jeune fille de dix-huit ans, Marguerite Giraut, s'est donné la mort hier, devant le numéro 9 de la rue de la Jussienne. Elle avait retiré cent dix francs à Orléans peu de temps auparavant.",
      "Un charpentier, M. Caron, a été grièvement blessé à l'usine d'électricité des chemins de fer du Nord par une lourde poutre en fer tombée sur sa tête."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame conjugal à Troyes et Paris",
    "summary": "M. Charles Cassard, papetier troyen, a poignardé son épouse rue de la Glacière à Paris après une violente altercation. La victime, grièvement blessée, a été admise à l'hôpital Cochin.",
    "paragraphs": [
      "M. Charles Cassard, papetier à Troyes, était monté à Paris afin de retrouver son épouse qui avait déserté le domicile conjugal. Il l'a rencontrée rue de la Glacière et, après une vive discussion, l'a frappée de plusieurs coups de couteau à la gorge.",
      "La malheureuse a été transportée à l'hôpital Cochin dans un état fort grave. Le mari a été immédiatement appréhendé et mis à la disposition de la police."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les exploits d'un ancien consul",
    "summary": "Auguste Gentini, ancien consul d'Italie, a été arrêté pour une série d'escroqueries au préjudice de bijoutiers parisiens. Il a formulé des aveux complets devant le commissaire du quartier.",
    "paragraphs": [
      "Auguste Gentini, ancien consul d'Italie, a été arrêté hier pour une série d'escroqueries perpétrées auprès de bijoutiers parisiens, au moyen de traites signées de faux noms.",
      "Confronté aux preuves, il a formulé des aveux complets au commissaire de police du quartier du Faubourg-Montmartre."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Exposition Universelle",
    "title": "Célébration d'un anniversaire historique à l'Exposition",
    "summary": "Le centenaire du passage du col du Grand-Saint-Bernard par Bonaparte a été solennellement célébré au Village Suisse, tandis que les attractions de l'Exposition connaissent un franc succès.",
    "paragraphs": [
      "Ce 20 mai marque le centenaire du passage du col du Grand-Saint-Bernard par le général Bonaparte. Le Village Suisse de l'Exposition a célébré cet événement mémorable avec la participation d'anciens soldats des Invalides.",
      "D'autres attractions, telles que le Vieux Paris et le Panorama Maritime au Trocadéro, continuent de proposer des nouveautés et des horaires élargis pour le plus grand plaisir du public."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Sports",
    "title": "Pronostics pour le Prix de Diane",
    "summary": "Le Prix de Diane, prestigieux « Derby des pouliches », approche. Semendria, Clochette et Clairette se distinguent comme les favorites pour cette épreuve hippique très attendue.",
    "paragraphs": [
      "La grande course du Prix de Diane, véritable « Derby des pouliches », approche. Parmi les favorites engagées figurent Semendria, Clochette et Clairette.",
      "Nos pronostics pour la journée : Semendria gagnante, suivie de près par Clochette et Clairette."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Faits divers en banlieue parisienne",
    "summary": "Une série d'incidents criminels et tragiques en banlieue : vols à Saint-Cloud, macabres découvertes à Neuilly et Saint-Denis, noyade à Clichy et une violente agression au Vésinet.",
    "paragraphs": [
      "À Saint-Cloud, des malfaiteurs ont dérobé des tuyaux de plomb et des jets en bronze dans le parc.",
      "À Neuilly-sur-Seine, le corps d'un nourrisson a été découvert dans un urinoir boulevard Victor-Hugo.",
      "À Clichy, un ouvrier peintre, Léopold Durrin, s'est noyé accidentellement dans la Seine.",
      "À la Plaine-Saint-Denis, le corps d'une femme nommée Marianne Auffret a été retiré du canal Saint-Denis.",
      "Au Vésinet, un garçon boucher a été frappé à coups de couteau par deux inconnus ; son état est jugé grave."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Sports",
    "title": "La fête automobile de Vincennes",
    "summary": "Grande fête automobile aujourd'hui à Vincennes. Au programme : un gymkhana spectaculaire, des concours d'élégance et de confort, ainsi qu'un défilé général de voitures et motocycles.",
    "paragraphs": [
      "Aujourd'hui, à deux heures, à Vincennes, se tiendra une grande fête automobile.",
      "Rappelons les principales lignes du programme : un gymkhana pour voiturettes et tricycles qui comprendra de nombreuses figures, parmi lesquelles courses aux œufs, aux aiguilles, au seau, aux foulards, aux tabliers, au baquet, aux mannequins, aux bagues, au ballon, etc.",
      "Sont également prévus un concours d'élégance, un concours de confort, ainsi qu'un défilé général de toutes les voitures, voiturettes et motocycles. Le jury offrira cent bannières aux plus jolies voitures ainsi que d'autres récompenses."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Sports",
    "title": "Concours internationaux de yachting",
    "summary": "Ouverture des concours internationaux de yachting à voile à Meulan. La journée débute par une course d'honneur réunissant obligatoirement tous les yachts inscrits pour les régates.",
    "paragraphs": [
      "Début des concours internationaux de yachting à voile aujourd'hui à Meulan.",
      "Le programme de la journée comprend une course d'honneur et d'ensemble à laquelle sont obligatoirement tenus de prendre part tous les yachts inscrits pour les régates de séries, quel que soit leur tonnage.",
      "Les concours sont publics. Il ne sera perçu aucun droit d'entrée, ni pour les spectateurs, ni pour les yachtsmen."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Sports",
    "title": "Match annuel de rameurs",
    "summary": "L'Union des Rameurs de Paris organise cet après-midi son match annuel à huit rameurs de pointe juniors sur le bassin d'Asnières-Suresnes.",
    "paragraphs": [
      "L'Union des Rameurs de Paris fera disputer aujourd'hui, à deux heures et demie, dans le bassin d'Asnières-Suresnes, son match annuel à huit rameurs de pointe juniors."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Sports",
    "title": "Course cycliste au Parc des Princes",
    "summary": "Le Parc des Princes accueille cet après-midi une grande course de milles avec entraîneur réunissant quatorze champions, complétée par une épreuve de motocycles.",
    "paragraphs": [
      "À deux heures et demie, au Parc-des-Princes, aura lieu une course de milles avec entraîneur. Quatorze concurrents sont engagés, parmi lesquels Bouhours, Baugé, Simart, Ross l'Américain, etc.",
      "Une épreuve pour motocycles qui réunira les Béconnais, les Vasseur, les Rigal, les Loste, complétera le programme."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Sciences",
    "title": "La télégraphie sans fil en ballon",
    "summary": "L'Académie des sciences examine un mémoire sur la première expérience de télégraphie sans fil réussie en ballon par l'Aéro-Club, permettant la réception de messages à 800 mètres d'altitude.",
    "paragraphs": [
      "M. de la Baume a présenté, lundi dernier, à l'Académie des sciences, un mémoire relatif à la première expérience de télégraphie sans fil en ballon.",
      "L'expérience a été concluante, et c'est à l'Aéro-Club, dont le ballon était monté le 12 mai par le comte Henry de La Vaulx, Joseph Valiot et Étienne Giraud, que la science est redevable de cet intéressant résultat.",
      "L'appareil, construit par M. Lecarme sur le principe du système Branly, a permis au ballon de recevoir, jusqu'à une distance de plusieurs kilomètres et par 800 mètres d'altitude, les dépêches électriques envoyées par le transmetteur actionné par M. Lecarme sur la pelouse du Landy."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Sports",
    "title": "Union Vélocipédique de France : 100 kilomètres",
    "summary": "L'Union vélocipédique de France organise le dimanche 3 juin une épreuve cycliste de 100 kilomètres sur la route de Montgeron, Melun et Ozoir-la-Ferrière.",
    "paragraphs": [
      "L'Union vélocipédique de France communique : l'épreuve des 100 kilomètres en moins de cinq heures, pour l'obtention du brevet de l'U.V.F., sera courue le dimanche 3 juin sur la route de Montgeron-Melun-Ozoir-la-Ferrière et retour.",
      "Cette épreuve est ouverte à tous les cyclistes, membres individuels, membres de sociétés affiliées et cyclistes indépendants."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Sports",
    "title": "Concours d'escrime",
    "summary": "La liste des finalistes du concours international d'escrime au fleuret, catégorie amateurs, a été arrêtée à l'issue des demi-finales disputées hier soir.",
    "paragraphs": [
      "Les deux poules des demi-finales du concours international d'escrime au fleuret (amateurs) se sont terminées hier soir.",
      "Sont retenus pour la poule finale de demain lundi : MM. Coste, Senat, Masson, Broch, Debax, Boulenger, Dillon, Kavanagh et d'Hugues."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Enseignement",
    "title": "Cours de cycle et d'automobile",
    "summary": "L'Association polymathique ouvre une section dédiée à l'apprentissage technique et législatif du cycle et de l'automobile rue de Florence.",
    "paragraphs": [
      "L'Association polymathique a ouvert, à l'école communale de la rue de Florence, n° 4, une section de cours consacrés exclusivement au cycle et à l'automobile.",
      "Les élèves y apprennent le montage et le démontage de machines, l'étude des moteurs, ainsi que la topographie et la législation sur la circulation des voitures.",
      "L'Association a également chargé un professeur, inspecteur général d'assurances, d'enseigner les notions relatives aux assurances contre les accidents."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Culture",
    "title": "Concerts du dimanche 20 mai",
    "summary": "Programme des concerts de plein air organisés ce dimanche dans les jardins et kiosques parisiens, avec le concours des musiques de régiments.",
    "paragraphs": [
      "Programme des concerts de plein air aux kiosques et jardins (Invalides, Champ-de-Mars, Palais-Royal, Tuileries, Buttes-Chaumont, etc.) avec la participation des musiques de régiments et unions musicales."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Feuilleton",
    "title": "Mariage Secret : Grand roman inédit",
    "summary": "Au cœur de cette confrontation, le baron de Lorgerac et le docteur Lecoutellier débattent avec âpreté du destin de Rolande, cherchant à trancher le nœud gordien de la réconciliation familiale et du mariage projeté.",
    "paragraphs": [
      "Quatrième partie, XI (suite) : La Bataille. Le dialogue entre le baron de Lorgerac et le docteur Lecoutellier concernant Rolande, le mariage et la réconciliation familiale."
    ]
  }
];
