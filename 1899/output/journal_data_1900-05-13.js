// Date: 1900-05-13
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-05-13 (Version Restaurée, 43 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La cavalerie et l'usage de la lance",
    "summary": "Face aux leçons tactiques de la guerre au Transvaal, le ministère de la Guerre étudie la généralisation de la lance pour l'ensemble de la cavalerie française, marquant une possible mutation de l'art militaire.",
    "paragraphs": [
      "On songe très sérieusement, au ministère de la Guerre, à armer de lances tous nos régiments de cavalerie et à étendre ainsi, à toutes nos troupes à cheval, la mesure adoptée à titre d'essai depuis quelques années pour les premiers rangs des dragons endivisionnés.",
      "Cette question revêt une extrême gravité ; elle soulève de vives discussions, non seulement en France, mais dans la plupart des armées étrangères, de puissants arguments pouvant être opposés dans les deux sens.",
      "Cependant, la guerre au Transvaal a ouvert soudain des horizons nouveaux pour les troupes à cheval. Par l'exemple des Boërs, on a vu ce que pouvaient accomplir des fantassins montés se déplaçant avec une extrême rapidité. Peut-être les grands événements dont l'Afrique du Sud est le théâtre sont-ils destinés à modifier les conceptions des généraux européens.",
      "Comme beaucoup d'autres choses, l'art de la guerre traverse sans doute une période de transformation à cet instant précis où l'aurore du vingtième siècle commence à éclairer l'horizon."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Roman",
    "title": "Ceux de la troisième partie - Le secret du docteur Saint-Amand",
    "summary": "Gabrielle de Saint-Amand se prépare pour une audience capitale avec le juge de Précomtal. Malgré les tentatives d'approche d'Armand Breuilhet, elle reste déterminée à garder son sang-froid.",
    "paragraphs": [
      "« C'est une femme prudente et intelligente », déclara Hélène, « on peut avoir confiance. »",
      "Gabrielle allait s'habiller pour se rendre chez M. de Précomtal quand arriva de lui un nouvel émissaire. Le juge souhaitait avoir entendu certaines dépositions avant de recevoir mademoiselle de Saint-Amand.",
      "Dans la matinée, Armand Breuilhet se présenta et demanda à être reçu. Gabrielle refusa de le voir ; elle voulait garder tout son sang-froid pour répondre aux questions de M. de Précomtal.",
      "Enfin, deux heures sonnèrent et Gabrielle fut introduite dans le cabinet du juge."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "Sur la frontière du Maroc",
    "summary": "De nouveaux massacres commis par les Mehaïa contre les tribus de Tejaa ont été signalés. Ces exactions, survenues en l'absence des hommes, soulèvent la question de la complicité du Maghzen.",
    "paragraphs": [
      "De Nemours, on reçoit de nouveaux détails sur les récents massacres, par les Mehaïa, de femmes, de vieillards et d'enfants appartenant aux tribus de Tejaa. Les Mehaïa ont voulu venger la mort du caïd El Hadjiali, traîtreusement assassiné par ses ennemis.",
      "Ce massacre a été perpétré en l'absence des hommes valides, avec la complicité notoire du Maghzen et des soldats du sultan."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "Les troubles en Espagne",
    "summary": "L'Espagne subit une agitation sociale majeure, notamment à Barcelone et Valence où l'état de siège est proclamé, suite aux conséquences de la paix avec Washington et aux réformes du ministère Silvela.",
    "paragraphs": [
      "Nous avons déjà signalé les troubles graves qui ont éclaté jeudi et vendredi dans plusieurs grandes villes d'Espagne, notamment à Madrid, Séville, Barcelone et Valence. Dans ces deux derniers centres, l'état de siège a été proclamé.",
      "L'agitation remonte en réalité à la signature de la paix entre les cabinets de Madrid et de Washington, ainsi qu'aux premières déclarations financières du ministère de M. Silvela.",
      "Face à la recrudescence de l'agitation, les provinces de Barcelone et de Valence ont été officiellement déclarées en état de siège."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'enlèvement de la comtesse de Martel",
    "summary": "La comtesse de Martel, connue sous le nom de Gyp, a été victime d'un enlèvement rocambolesque. M. Bulot, procureur de la République, a ordonné l'ouverture d'une instruction sur cette affaire étrange.",
    "paragraphs": [
      "Elle est en effet romanesque et bien étrange, cette aventure dont Mme la comtesse de Martel, la romancière bien connue sous le nom de Gyp, dit avoir été l'héroïne au cours de l'avant-dernière nuit. Il ne s'agit de rien moins que d'un enlèvement et d'une séquestration suivis d'une audacieuse évasion.",
      "« Hier soir, vers huit heures et demie, je partis en voiture pour assister à une conférence électorale. Je fus obligée de descendre à l'angle des rues de la Glacière et d'Alésia. Deux individus m'approchèrent et me déclarèrent que M. Barillier me demandait. »",
      "« On me jeta un pardessus sur la tête et on me fit monter en voiture. Après un trajet d'environ une heure, je fus conduite dans une maison isolée. J'ai réussi à m'enfuir en nouant des rideaux pour descendre par la fenêtre. »",
      "Dans la soirée, M. Bulot, procureur de la République, a décidé d'ouvrir une instruction sur cette affaire singulière."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le crime de Colombes",
    "summary": "L'enquête sur l'assassinat de Mme Caroline Fourmentin s'intensifie dans la banlieue ouest ; un ancien employé de gare est suspecté du meurtre de la septuagénaire.",
    "paragraphs": [
      "Les recherches continuent de plus en plus activement, dans toute une partie de la banlieue ouest de Paris, pour découvrir l'assassin de Caroline Fourmentin, la septuagénaire assassinée. Plusieurs pistes sont actuellement suivies.",
      "On annonçait, dans la soirée, qu'un individu avait été arrêté comme étant l'assassin présumé de Mme Fourmentin. Cet individu serait un ancien employé auxiliaire d'une gare voisine."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une fillette étranglée à Remiremont",
    "summary": "Un crime odieux a endeuillé Rupt : une fillette de douze ans, Marie Aulx, a été retrouvée étranglée dans le canal. Le coupable, Victor Davaf, est aux mains de la justice.",
    "paragraphs": [
      "Un horrible assassinat a été commis sur une fillette nommée Marie Aulx, âgée de douze ans, habitant Rupt. Le cadavre a été découvert hier dans le canal de la Scierie ; l'autopsie a révélé que l'infortunée avait été étranglée.",
      "Le criminel est un jeune homme de vingt ans nommé Victor Davaf ; ce misérable a été arrêté et a fait des aveux."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident à bord d'un torpilleur",
    "summary": "Le torpilleur 118 de la défense mobile de Cherbourg a subi une avarie technique. Deux marins, André Pilastre et Eugène Préhacq, ont été blessés par une projection de vapeur due au manque d'eau.",
    "paragraphs": [
      "Un accident s'est produit à bord du torpilleur 118, de la défense mobile de Cherbourg. Par suite d'un jet de vapeur, deux hommes, les nommés André Pilastre et Eugène Préhacq, ont été blessés.",
      "L'accident est arrivé probablement par suite d'un coup de feu à la chaudière, occasionné par le manque d'eau."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Exposition",
    "title": "La vie à l'Exposition Universelle",
    "summary": "Sous un climat clément, les préparatifs de l'Exposition Universelle s'accélèrent. MM. Millerand et Picard exigent une ponctualité stricte des exposants pour le succès des sections.",
    "paragraphs": [
      "Le beau temps semble décidément revenu. La journée d'hier a été féconde en événements heureux. M. Millerand et M. Picard, après avoir fait une visite aux différentes sections, se sont montrés fermement résolus à ne tolérer aucun retard dans l'installation des exposants.",
      "Une cérémonie simple a marqué, hier après-midi, l'ouverture au public du pavillon officiel des États-Unis."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Inauguration du Pavillon des États-Unis",
    "summary": "Une réception solennelle a marqué l'inauguration du pavillon américain. Le général Porter et M. Peck ont reçu les autorités françaises, scellant l'amitié entre les nations par la remise d'une clef d'or.",
    "paragraphs": [
      "Le pavillon des États-Unis, dont l'aménagement est articulé autour de la distribution de bureaux pour chaque État, a été le théâtre d'une réception solennelle hier, accueillant les notabilités du monde politique et diplomatique français et étranger.",
      "Le général Porter, ambassadeur, et M. Peck, commissaire général, ont reçu les invités dans un cadre orné de l'effigie de Washington et des drapeaux des États. M. Peck a exprimé sa gratitude envers la France pour l'emplacement offert, tandis que M. Alfred Picard, commissaire général de l'Exposition, a salué le drapeau américain.",
      "La cérémonie s'est conclue par la remise d'une clef d'or par M. Peck, symbolisant la remise du pavillon à la France, sous les accents de la Sousa Band."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Le Pavillon de la Norvège",
    "summary": "Inauguration du pavillon norvégien à l'Exposition Universelle, fidèle reproduction des villas des fjords, mettant à l'honneur les explorations polaires de Fridtjof Nansen et les traditions maritimes de Bergen.",
    "paragraphs": [
      "Le pavillon de la Norvège, reproduction exacte des villas des fjords, a été inauguré par MM. Christophersen et Smith. Le visiteur y découvre des filets de pêche et, dès l'entrée, une vitrine consacrée aux souvenirs de l'explorateur Fridtjof Nansen, incluant le modèle du célèbre navire, le Fram.",
      "L'exposition retrace avec soin la vie polaire à travers des photographies, des engins de chasse et des reproductions en relief du port de Bergen ainsi que du parc de Trondhjem.",
      "La réception, marquée par un lunch au champagne, s'est prolongée dans une ambiance conviviale jusqu'à sept heures du soir."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Le Pavillon de Monaco",
    "summary": "Le pavillon monégasque dévoile ses richesses méditerranéennes, alliant les collections scientifiques du Prince Albert à des fresques décoratives et des panoramas immersifs du peintre Olive.",
    "paragraphs": [
      "Le pavillon de Monaco, inauguré hier, présente une riche végétation méditerranéenne et des fresques signées par M. Fissure. L'intérieur abrite les collections scientifiques du Prince Albert ainsi qu'un salon de repos décoré avec goût par Mlle Monaco.",
      "Les sous-sols offrent aux visiteurs un tableau panoramique réalisé par le peintre Olive, accompagné d'un cinématographe reproduisant les épreuves couronnées au dernier concours de Monaco."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Commerce et Industrie",
    "title": "La Bijouterie française",
    "summary": "L'exposition des joailliers-bijoutiers aux Invalides confirme la vitalité du goût français, unissant la tradition de la Renaissance aux créations modernes sous une surveillance rigoureuse.",
    "paragraphs": [
      "Malgré les critiques émises sur un prétendu déclin du goût français, l'exposition des joailliers-bijoutiers aux Invalides démontre la vitalité de l'art national, savamment inspiré par la tradition de la Renaissance et des motifs modernes.",
      "Les vitrines présentent des joyaux d'une valeur inestimable, sous la protection discrète d'agents en civil. Des mesures de sécurité sévères, incluant des systèmes de prévention contre l'incendie, ont été scrupuleusement mises en place."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Exposition minière souterraine et Monde souterrain",
    "summary": "Une immersion fascinante au Trocadéro révélant les secrets géologiques de la Terre, les techniques d'extraction minière et les mystères archéologiques de la nécropole de Memphis.",
    "paragraphs": [
      "Installées dans les anciennes carrières du Trocadéro, ces expositions offrent une immersion saisissante dans le monde des mines (charbon, or, sel) et l'évolution géologique de la Terre.",
      "Le visiteur peut y découvrir les étapes de formation du globe, les trésors de la nécropole de Memphis et la reconstitution du gouffre de Padirac, le tout sous la direction éclairée de M. de Launay."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Social",
    "title": "Les Officiers d'administration",
    "summary": "Une nouvelle réforme législative répare une injustice historique en accordant aux officiers d'administration des galons conformes à leurs grades, harmonisant leur statut avec les écoles militaires.",
    "paragraphs": [
      "Une loi nouvelle accorde désormais aux officiers d'administration des galons correspondant précisément à leurs grades, mettant fin à une injustice historique notoire.",
      "Cette réforme permet une assimilation effective à l'école de Vincennes, autorisant les élèves à sortir avec le rang de sous-lieutenant, à l'instar des usages en vigueur dans les autres écoles militaires."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Organisation des sous-marins",
    "summary": "Une décision ministérielle place les sous-marins de Toulon sous l'autorité d'un groupe autonome dirigé par un capitaine de vaisseau, officialisant ainsi leur rôle en tant qu'unité de combat navale.",
    "paragraphs": [
      "Une décision ministérielle place les sous-marins de Toulon sous l'autorité d'un groupe autonome dirigé par un capitaine de vaisseau, officialisant ainsi leur rôle en tant qu'unité de combat navale."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Les Réservistes et les élections",
    "summary": "Le général de Galliffet a décidé que les réservistes et territoriaux élus conseillers municipaux en mai dernier seront ajournés de leurs obligations militaires pour siéger à leurs conseils municipaux.",
    "paragraphs": [
      "Le général de Galliffet a décidé que les réservistes et territoriaux élus conseillers municipaux lors des scrutins de mai seront ajournés de leurs obligations militaires pour pouvoir participer aux travaux des conseils municipaux."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "International",
    "title": "La situation au Transvaal",
    "summary": "L'armée britannique, commandée par lord Roberts, a occupé Kroonstadt. Tandis que les Boërs se replient vers le Vaal, des dissensions éclatent entre les factions orangistes et transvaaliennes.",
    "paragraphs": [
      "L'armée anglaise, sous le commandement de lord Roberts, a occupé Kroonstadt sans rencontrer de résistance. Le drapeau britannique a été hissé sur la ville après le départ du gouvernement de l'État libre.",
      "Les généraux boërs Botha et de Wet se sont repliés vers le fleuve Vaal, tandis que les Orangistes accusent amèrement les Transvaaliens de les avoir abandonnés à leur sort."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "International",
    "title": "Soulèvement des Achantis",
    "summary": "Profitant de la saison des pluies qui entrave les troupes coloniales, les Achantis se soulèvent. Ils sont désormais lourdement armés de fusils à répétition et de mitrailleuses.",
    "paragraphs": [
      "Selon une dépêche d'Accra en date du 19 avril, les Achantis ont achevé les préparatifs d'un soulèvement armé. Ils sont parvenus à se procurer des fusils à répétition ainsi que des mitrailleuses.",
      "Ils ont amassé d'importantes quantités de poudre. L'insurrection a lieu durant la saison des pluies, rendant toute opération offensive des troupes blanches quasi impossible avant le mois d'octobre."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un hôtel cambriolé rue Eugène-Flachat",
    "summary": "Des malfaiteurs, grimés en employés du gaz, ont tenté de cambrioler l'hôtel de M. Guillaumet, rue Eugène-Flachat. Malgré la séquestration du personnel, ils ont fui sans pouvoir ouvrir le coffre-fort.",
    "paragraphs": [
      "Un audacieux cambriolage a été commis hier dans le quartier de la Plaine-Monceau. M. Guillaumet possède, au numéro 16 de la rue Eugène-Flachat, un hôtel particulier dont il confie la garde à deux domestiques.",
      "Un individu, vêtu en ouvrier de la Compagnie du gaz, a réussi à s'introduire chez M. Guillaumet sous le prétexte fallacieux de réparer le compteur. Une fois à l'intérieur, il a agressé et ligoté la cuisinière, bientôt rejoint par deux complices.",
      "Pendant une heure, les malfaiteurs ont fouillé les lieux et tenté de fracturer le coffre-fort. La femme de chambre, alertée par les bruits suspects, a donné l'alarme. Malgré l'intervention rapide d'agents cyclistes, les cambrioleurs ont réussi à prendre la fuite.",
      "Le commissaire de police Moutillier a procédé aux constatations d'usage. Les malfaiteurs ont abandonné sur place plusieurs ballots contenant un butin de valeur, n'ayant pu forcer le coffre. L'enquête se poursuit activement."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Dîner officiel à l'Hôtel de Ville",
    "summary": "Le préfet de la Seine, M. de Selves, a reçu hier soir à l'Hôtel de Ville les membres du gouvernement, dont le président du Conseil, M. Waldeck-Rousseau, pour un dîner officiel de haute importance politique.",
    "paragraphs": [
      "Le préfet de la Seine et Mme de Selves ont offert, hier soir, à l'Hôtel de Ville, un dîner aux membres du gouvernement.",
      "Parmi les convives figuraient le président du Conseil et Mme Waldeck-Rousseau, le garde des sceaux et Mme Monis, ainsi que les ministres Delcassé, Jean Dupuy, Millerand, et de nombreuses autres personnalités politiques et administratives."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Social",
    "title": "Société des Prévoyants de l'Avenir",
    "summary": "Le président du Conseil a reçu M. Chatelus, fondateur de la Société des Prévoyants de l'Avenir, promettant une enquête approfondie afin de favoriser une issue favorable pour cette association de travailleurs.",
    "paragraphs": [
      "Le président du Conseil, ministre de l'Intérieur, a reçu M. Chatelus, président fondateur de la Société des Prévoyants de l'Avenir.",
      "Après avoir entendu les explications fournies, le président du Conseil a promis de procéder à une nouvelle enquête et a fait espérer une solution conforme aux intérêts de cette association de travailleurs."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Politique",
    "title": "Départ du gouverneur général de l'Algérie",
    "summary": "M. Laferrière, gouverneur général de l'Algérie, a quitté ses fonctions. Il a embarqué hier sur le paquebot Ville d'Alger pour regagner la France dans le calme, salué par les autorités civiles et militaires.",
    "paragraphs": [
      "Le gouverneur général de l'Algérie, M. Laferrière, s'est embarqué hier à bord du paquebot Ville d'Alger, à destination de la France. Il a été salué par toutes les autorités civiles et militaires sans qu'aucun incident ne se produise."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Nécrologie",
    "title": "Obsèques de M. Boutin",
    "summary": "Les obsèques de M. Boutin, directeur général de la Caisse des dépôts et consignations et grand-officier de la Légion d'honneur, ont eu lieu hier, suivies de son inhumation au cimetière Montparnasse.",
    "paragraphs": [
      "Les obsèques de M. Boutin, directeur général de la Caisse des dépôts et consignations, ont été célébrées hier, rue de Rivoli. Les honneurs militaires ont été rendus au défunt, qui était grand-officier de la Légion d'honneur.",
      "Le président de la République était représenté par son secrétaire particulier, M. Poulot. De nombreuses personnalités politiques et hauts fonctionnaires étaient présents. L'inhumation a eu lieu au cimetière Montparnasse après des discours prononcés par plusieurs officiels."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Exposition",
    "title": "Inauguration du monument Rochambeau",
    "summary": "Fixée au 4 juin, l'inauguration du monument au maréchal de Rochambeau à Vendôme promet d'être un événement majeur, avec la participation attendue des autorités françaises et de l'ambassadeur des États-Unis.",
    "paragraphs": [
      "L'inauguration du monument élevé à Vendôme à la mémoire du maréchal de Rochambeau est fixée au 4 juin. Une délégation viendra à Paris pour inviter les membres du gouvernement et l'ambassadeur des États-Unis. La participation des représentants des deux Républiques promet un éclat exceptionnel aux fêtes organisées."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Exposition",
    "title": "Exposition canine internationale",
    "summary": "L'Exposition canine internationale se tiendra le 18 mai prochain sur la terrasse de l'Orangerie des Tuileries, où près de 800 chiens de races variées seront présentés au public.",
    "paragraphs": [
      "L'exposition canine internationale ouvrira ses portes le vendredi 18 mai, sur la terrasse de l'Orangerie des Tuileries. Cette année, environ 800 chiens y figureront, avec une forte représentation de collies, bassets, pointers, setters et bouledogues français."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Sciences",
    "title": "Préparatifs pour l'éclipse de soleil",
    "summary": "Les astronomes du Bureau des longitudes ont rejoint l'Espagne afin de préparer l'observation de la prochaine éclipse solaire, en s'installant notamment dans la ville de Plasencia.",
    "paragraphs": [
      "Les astronomes hâtent leurs préparatifs pour observer la prochaine éclipse de soleil, qui sera surtout visible en Espagne. Plusieurs missions scientifiques, dont celle du Bureau des longitudes, sont arrivées à Madrid pour s'installer dans les zones d'observation privilégiées, notamment à Plasencia."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Littérature",
    "title": "Critique du livre 'La Parisienne en 1900'",
    "summary": "La vicomtesse de Réville fait paraître un ouvrage original intitulé « La Parisienne en 1900 », dans lequel elle analyse les mœurs et la mode comme reflets de notre société actuelle.",
    "paragraphs": [
      "La vicomtesse de Réville vient de publier un livre fort curieux intitulé « La Parisienne en 1900 ». Le volume interprète la mode comme un sujet fondamental tout en abordant les questions de l'heure sous un angle suggestif et pénétrant."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Tribunaux",
    "title": "Contentieux entre la Ville de Paris et la Compagnie du Gaz",
    "summary": "Le Conseil d'État a statué en faveur de la Ville de Paris dans son litige contre la Compagnie parisienne du gaz, permettant ainsi le recouvrement de plusieurs millions de francs.",
    "paragraphs": [
      "Le Conseil d'État a confirmé la décision du conseil de préfecture concernant le litige financier opposant la Compagnie parisienne du gaz à la Ville de Paris. Ce jugement permet désormais à la municipalité d'encaisser plusieurs millions de francs au titre du redressement des comptes."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Condamnation pour diffamation électorale",
    "summary": "Le tribunal correctionnel de la Seine a condamné M. Renard et M. Prunier pour diffamation par voie d'affiches, à la suite des récentes élections municipales.",
    "paragraphs": [
      "Le tribunal correctionnel de la Seine a rendu son verdict et condamné M. Renard, conseiller municipal sortant, ainsi que M. Prunier, membre de son comité, pour des faits de diffamation par voie d'affiches commis lors des récentes élections."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'une bande de cambrioleurs",
    "summary": "Mme Quentin, marchande de vins boulevard Rochechouart, a été victime d'un vol important. L'enquête menée par le commissaire Carpin a permis l'arrestation de Jules Monroy et Paul Stuyck, trouvés en possession du butin.",
    "paragraphs": [
      "Mme Quentin, marchande de vins au boulevard Rochechouart, a été victime d'un vol considérable. Suite à l'enquête activement menée par le commissaire Carpin, plusieurs individus, dont le nommé Jules Monroy et le nommé Paul Stuyck, ont été appréhendés. Lors de leur arrestation, les malfaiteurs possédaient une grande quantité de bijoux dérobés ainsi que des revolvers chargés."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'évasion du nommé 'Cœur-Malade'",
    "summary": "Émile Granwuillemin, dit 'Cœur-Malade', écroué pour vol avec effraction, s'est évadé de l'Hôtel-Dieu à l'aide de draps tressés. Il fut repris après avoir simulé un suicide lors de son interpellation par les agents.",
    "paragraphs": [
      "Émile Granwuillemin, dit 'Cœur-Malade', arrêté pour vol avec effraction, s'était évadé de l'hôpital de l'Hôtel-Dieu en utilisant ses draps comme échelle de fortune. Il a finalement été repris par la police après avoir feint une tentative de suicide au moment de son arrestation."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Série d'accidents mortels à Paris",
    "summary": "Une série de tragiques accidents a endeuillé la capitale : le couvreur Louis Pâti, le charretier Paul Lejar et la jeune Mlle Louis ont tous trouvé la mort à la suite de chutes ou de chocs accidentels.",
    "paragraphs": [
      "Un ouvrier couvreur, Louis Pâti, est mort après une chute rue d'Outre-Manche. Un charretier, Paul Lejar, a succombé suite à un accident de voiture rue Curial. Une jeune fille, Mlle Louis, est décédée après une chute accidentelle dans l'escalier de son domicile."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Courses Hippiques",
    "title": "Résultats des courses hippiques",
    "summary": "Compte rendu des épreuves hippiques de la journée : victoires de Navarre, Treitour, Trinqueur, Thoé et Mercure lors des différentes courses au trot monté et attelé disputées sur les pistes parisiennes.",
    "paragraphs": [
      "Prix des Forts. Au trot monté, 3.000 fr : 1. Navarre, à M. J. Lemonnier (Labatut); 2. Topaze (Dufour); 3. Tendance (Eugène). Non placés : Nadia, Thérésa, Turquoise. Vitesses : 5'20\", 5'30\".",
      "Prix Kalmia. Au trot monté, 3.000 fr : 1. Treitour, à M. P. Du Rozier (Lelenne). Non placés : Trie, Tanhauser, Trianon, Tobie, Trocadéro, Tatius, Tape à l'Œil, Télémaque, Tyrolien, Toto. Vitesses : 5'16\", 5'14\".",
      "Prix d'Hakton. Au trot monté : 1. Trinqueur, à M. J. Girv (Gaillard); 2. Trésorier (M. Lallouet, fils); 3. Tourcoing. Non placés : Tivoli, Travailleur, Turf, Tant Mieux. Vitesses : 5'01\".",
      "Prix Petite-Chance. Au trot attelé, 3.000 fr : 1. Thoé, à M. Glulin (fintcoote); 2. Divette (Choisselet); 3. Sirène (M. A. Jeselme). Non placés : Tyrolienne, Titua. Vitesses : 5'10\", 5'11\", 5'12\".",
      "Prix de l'Oural. Au trot monté, 2.000 fr : 1. Mercure, à M. J. Lemonnier (Labatut); 2. Sérignac (Leverrier); 3. Pôle Jean. Non placés : Qufts Aco, Rayon d'Or, Brigantine, Séduisant, Sarcelle, Reitôwa, Plaina, lléyal, Qui Va, Quarteronne, Castille. Vitesses : 4'32\" 1/5."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Résultats du Pari Mutuel",
    "title": "Résultats du pari mutuel",
    "summary": "Détail des rapports du pari mutuel pour les épreuves hippiques de la journée : gain des parieurs pour les chevaux Navarre, Topaze, Treitour, Trinqueur, Trésorier, Thoé, Divette, Mercure, Sérignac et Pôle Jean.",
    "paragraphs": [
      "Navarre : P 11.50. Topaze : P 18.50, 9.50. Treitour : P 9. Trinqueur : G 8.50, 8. Trésorier : 3.30. Thoé : G 6. Divette : P 9. Mercure : G 14.50, 18.50. Sérignac : P 10.10. Pôle Jean : P 80."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Courses Anglaises",
    "title": "Jubilee Stakes Handicap",
    "summary": "Résultats des Jubilee Stakes Handicap : la victoire revient au cheval Sirenia, monté par le jockey P. Rickaby, devant Merry Methodist et Royal Flush.",
    "paragraphs": [
      "Jubilee Stakes Handicap : 1. Sirenia, 33/1 (P. Rickaby); 2. Merry Methodist, 6/1; 3. Royal Flush."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Concours Hippique",
    "title": "Concours hippique Place de Breteuil",
    "summary": "Le concours hippique de la place de Breteuil propose ce dimanche 13 mai, dès 14 heures, une audition de musique suivie à 15 heures d'épreuves de sauts d'obstacles, dont le Prix du Palais de l'Industrie.",
    "paragraphs": [
      "Aujourd'hui, dimanche 13 mai, à 2 heures, audition de musique et, à 3 heures, épreuves de sauts d'obstacles. Au programme : le Prix du Palais de l'Industrie."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "Le point sur les scènes parisiennes : reprise du Vieux Marcheur aux Variétés, dernières des Cloches de Corneville, répétitions des Fossiles à la Comédie-Française et retour de Cyrano de Bergerac.",
    "paragraphs": [
      "Ce soir, aux Variétés, première représentation de la reprise du Vieux Marcheur, comédie en cinq actes de M. Henri Lavedan.",
      "Le théâtre de la Gaîté annonce les quatre dernières représentations des Cloches de Corneville.",
      "M. Deval, directeur de l'Athénée, recevra les candidatures pour les auditions de la prochaine saison théâtrale, du 25 au 31 mai.",
      "Les Fossiles, de M. François de Curel, sont en pleines répétitions à la Comédie-Française.",
      "Le théâtre de la Porte-Saint-Martin annonce pour mardi 15 mai la reprise de Cyrano de Bergerac."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Social",
    "title": "Société des auteurs et compositeurs dramatiques",
    "summary": "La commission de la Société des auteurs et compositeurs dramatiques juge irrégulière la demande d'assemblée générale extraordinaire déposée par MM. Cléry et Poincaré, imposant l'envoi d'une circulaire aux sociétaires.",
    "paragraphs": [
      "La commission de la Société des auteurs et compositeurs dramatiques a entendu MM. Cléry et Poincaré concernant une demande d'assemblée générale extraordinaire. La commission a décidé qu'une circulaire serait envoyée aux sociétaires, car la demande initiale n'était pas régulière selon l'article 21 des statuts."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Spectacles",
    "title": "Divertissements à l'Exposition",
    "summary": "L'Exposition propose une riche programmation : combats navals porte Maillot, reconstitutions historiques avenue de Suffren et l'ouverture de l'Hippodrome avec la troupe persane.",
    "paragraphs": [
      "À 3 heures, grande matinée au Combat naval, situé porte des Ternes et porte Maillot. Prix d'entrée : 1 franc, 2 francs, 3 francs et 5 francs. Même spectacle tous les soirs à neuf heures.",
      "À la Cour des Miracles, 100, avenue de Suffren, tournois, ballets et scènes du Moyen Âge se succèdent de deux heures et demie à six heures. Prix d'entrée : 1 franc.",
      "Ouverture de l'Hippodrome ce soir avec la troupe persane et la première représentation de Vercingétorix, de M. Victorien Jasser."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Sports",
    "title": "Actualités sportives",
    "summary": "Au programme : le match Elkes contre Taylor au Parc des Princes, le championnat amateur de la Seine, les nouvelles règles de la Bordeaux-Paris et l'ouverture du concours de tourisme à Vincennes.",
    "paragraphs": [
      "Au Parc des Princes, un match opposera Elkes à Taylor sur une durée d'une heure, avec entraîneurs. Les pronostics penchent en faveur de Taylor, détenteur du record du monde.",
      "Le championnat amateur du département de la Seine se disputera aujourd'hui sur la route de Rambouillet à Saint-Chéron.",
      "Concernant la course Bordeaux-Paris, les modalités d'entraînement sont désormais fixées : l'usage des tandems et des triplettes est prohibé ; seule la bicyclette simple demeure autorisée.",
      "Le concours de tourisme de l'Exposition débutera demain, lundi, à 9 heures précises, sur le site de Vincennes."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Concerts et divertissements",
    "title": "Programme des concerts du dimanche 13 mai",
    "summary": "Ce dimanche, la capitale résonne au son des musiques militaires : des concerts sont organisés dans les jardins et palais par les régiments de ligne et de cuirassiers.",
    "paragraphs": [
      "Des concerts seront donnés ce jour à l'Exposition, au Palais-Royal, aux Tuileries, au parc Monceau, au jardin du Luxembourg ainsi qu'au Jardin des Plantes, avec le concours de divers régiments de ligne et de cuirassiers."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le roman : Les jours de déveine",
    "summary": "Le commandant de Queyrel et le docteur Lecoutellier interrompent le sommeil de Ludovic pour une entrevue décisive concernant les sombres affaires du vicomte de l'Orme.",
    "paragraphs": [
      "Ludovic de Queyrel, éveillé brutalement par une sonnette, découvre son père, le commandant, arrivé à l'improviste en compagnie du docteur Lecoutellier. L'entrevue s'annonce tendue en raison d'une affaire impliquant le vicomte de l'Orme et les projets de mariage de Ludovic."
    ]
  }
];
