// Date: 1899-10-29
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-10-29 (Version Restaurée, 42 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie",
    "title": "Rapport annuel sur le commerce extérieur français",
    "summary": "M. Alfred Picard présente un rapport optimiste sur le commerce extérieur français, soulignant une reprise notable depuis 1894 et la nécessité d'adapter nos exportations aux nouveaux marchés coloniaux.",
    "paragraphs": [
      "Le commissaire général de l'Exposition de 1900, M. Alfred Picard, a adressé au ministre du Commerce le rapport annuel sur l'importation et l'exportation françaises. Ce document souligne une reprise du commerce national après des années difficiles.",
      "Les conclusions sont rassurantes. Le rapport note des tentatives intéressantes par la création d'établissements à l'étranger pour éviter les barrières douanières, une stratégie déjà adoptée par nos voisins.",
      "La Commission demande une modification de la valeur arbitraire de 15 francs par kilogramme attribuée aux colis postaux, ce chiffre étant bien inférieur à la réalité et faussant les statistiques.",
      "Concernant l'agriculture, après le déficit de 1897, l'année 1898 a été plus clémente. Les progrès dans les méthodes de culture et les conditions météorologiques favorables ont permis une production céréalière dépassant la consommation nationale.",
      "Le commerce extérieur montre une amélioration continue depuis 1894. En 1898, les importations ont progressé, notamment grâce aux achats de céréales en Russie et aux États-Unis.",
      "Le secteur viticole inspire des réflexions sérieuses. Nos importations de vin ont augmenté tandis que nos exportations ont diminué, subissant des concurrences redoutables malgré l'essor du vignoble algérien.",
      "Les autres secteurs comme les chevaux, les bestiaux, la laine et les soies montrent des variations notables, souvent influencées par les droits de douane et les changements dans les méthodes de production mondiale.",
      "Le rapport conclut sur l'importance de l'importance de l'adaptation aux goûts du public et le développement des envois vers les colonies, notamment en Algérie, en Indo-Chine et à Madagascar."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Roman",
    "title": "Une haine vieille d'un siècle",
    "summary": "Le duc Horace de Villefort affronte un odieux maître-chanteur, Henri Girodias, qui menace de révéler un secret familial compromettant pour assouvir une ancienne rancune.",
    "paragraphs": [
      "Le duc Horace de Villefort et sa mère, la duchesse, sont confrontés à un maître-chanteur, Henri Girodias. Ce dernier détient une lettre compromettante impliquant la duchesse et son défunt mari.",
      "Girodias exige une somme importante en échange de la lettre, utilisant cette menace pour assouvir sa rancune personnelle contre la famille.",
      "Malgré la détresse de sa mère, le duc de Villefort insiste pour gérer lui-même cette affaire, souhaitant protéger l'honneur de leur nom."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "International",
    "title": "Situation dans le Transvaal et autour de Ladysmith",
    "summary": "Le siège de Ladysmith se poursuit alors que les Boërs renforcent leurs positions. Malgré l'isolement de Kimberley, la résistance s'organise face aux forces du président Kruger.",
    "paragraphs": [
      "Les troupes anglaises restent confinées à Ladysmith. Les Boërs ont rejoint leurs forces pour préparer une action commune.",
      "Des escarmouches ont été signalées vers Boulouvayo, prouvant que les forces boërs sont plus nombreuses qu'estimé initialement.",
      "À Ladysmith, la destruction du pont sur la rivière Sunday entrave l'artillerie boër. Des engagements continuent entre les patrouilles de cavalerie.",
      "Les communications avec Kimberley sont coupées, bien que la ville semble capable de soutenir un siège de six mois. M. Cecil Rhodes continue de maintenir le moral parmi ses proches.",
      "Le président Kruger reste en bonne santé et le gouvernement boër a proclamé une suspension des dettes pendant l'état de siège."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "International",
    "title": "Usage des balles dum-dum et politique allemande",
    "summary": "L'usage des balles dum-dum par les Britanniques indigne La Haye, tandis que l'Allemagne maintient une neutralité prudente, tiraillée par ses ambitions navales.",
    "paragraphs": [
      "Une vive indignation s'est élevée à La Haye contre l'usage par les Britanniques de balles dum-dum, malgré les protestations de Londres qui prétend avoir proscrit leur emploi.",
      "Parallèlement, l'attitude de l'Allemagne demeure énigmatique. Si l'opinion publique soutient les Boërs, les cercles officiels maintiennent une neutralité stricte, probablement liée à des ambitions de développement de la marine impériale allemande."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Effondrement d'une maison à Corbeil",
    "summary": "Drame domestique près de Ris-Orangis : une maison s'est effondrée sous le poids de sa toiture, causant la mort tragique de l'épouse Florentin.",
    "paragraphs": [
      "Près de Ris-Orangis, une maisonnette construite par les époux Florentin s'est effondrée sous le poids de la terre recouvrant la toiture.",
      "Le mari a été blessé, mais son épouse a malheureusement été retrouvée asphyxiée sous les décombres. Leurs quatre enfants ont été recueillis par des voisins."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Double suicide à Aubervilliers",
    "summary": "Un drame conjugal a frappé Aubervilliers : les époux Bégaud, cordonniers estimés, ont été découverts sans vie, ayant choisi de mettre fin à leurs jours dans des circonstances restées mystérieuses.",
    "paragraphs": [
      "Un jeune couple de cordonniers récemment mariés, les époux Benjamin Bégaud et Elisa Sarrazin, a été retrouvé sans vie dans la chambre de leur domicile, victimes d'un double suicide ayant consterné le voisinage.",
      "Malgré la prospérité apparente de leur commerce et l'affection dont ils étaient entourés, le couple a mis fin à ses jours. Des lettres retrouvées sur les lieux expliquent leur désespoir, sans toutefois préciser les causes exactes de cette fatale résolution."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Actualités",
    "title": "Inauguration du monument Humblot",
    "summary": "Hommage rendu à Edmond Humblot : un bas-relief en bronze a été solennellement inauguré hier sur le canal Saint-Denis, célébrant le rôle éminent de l'ingénieur dans l'essor de la navigation fluviale.",
    "paragraphs": [
      "Un bas-relief en bronze a été inauguré hier sur la première écluse du canal Saint-Denis, à la mémoire de M. Edmond Humblot, ancien directeur du service des eaux de la Ville de Paris.",
      "La cérémonie, empreinte de solennité, a rendu un vibrant hommage à l'œuvre accomplie par l'ingénieur, dont les travaux ont permis un développement considérable de la navigation sur la Seine et le canal de l'Ourcq."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Justice",
    "title": "Réunion de la Haute-Cour",
    "summary": "La Commission d'instruction de la Haute-Cour, sous la présidence de M. Bérenger, a poursuivi hier l'examen rigoureux des pièces de procédure et des réquisitions du ministère public.",
    "paragraphs": [
      "La Commission d'instruction de la Haute-Cour s'est réunie hier sous la présidence de M. Bérenger.",
      "La séance a été intégralement consacrée à l'examen approfondi des pièces de la procédure ainsi qu'à l'étude des réquisitions du procureur général, marquant une étape déterminante dans les travaux de la Chambre d'accusation."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Affaire de Reuilly",
    "title": "La procédure contre MM. Déroulède et Marcel Habert",
    "summary": "Le procureur général justifie la réouverture du dossier de Reuilly contre MM. Déroulède et Marcel Habert, s'appuyant sur des documents probants relatifs à un complot contre la République.",
    "paragraphs": [
      "Le procureur général a remis à la Commission une note explicative détaillée, justifiant la possibilité de reprendre l'affaire de Reuilly, nonobstant le jugement rendu précédemment par la Cour d'assises de la Seine concernant MM. Déroulède et Marcel Habert.",
      "Le rapport souligne que l'instruction initiale demeurait incomplète, faute d'avoir pu saisir les nombreux documents découverts ultérieurement dans le cadre de la procédure de la Haute-Cour, lesquels prouveraient l'existence d'un complot visant au renversement de la République.",
      "Le procureur général soutient avec force que la règle juridique du 'non bis in idem' ne saurait trouver ici à s'appliquer, faute d'identité entre les personnes et les faits visés par les deux procédures distinctes."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits divers",
    "title": "M. Jules Guérin et les démarches judiciaires",
    "summary": "M. Jules Guérin dément toute velléité de transfert médical, tandis que les conseils de plusieurs accusés déposent de nouveaux mémoires pour étoffer la défense dans la procédure en cours.",
    "paragraphs": [
      "M. Jules Guérin a fait parvenir une lettre à M. Bérenger, dans laquelle il déclare formellement qu'aucune démarche n'a été entreprise en son nom en vue d'obtenir son transfert dans une maison de santé.",
      "Parallèlement, divers mémoires ont été déposés par les défenseurs de MM. Guixou-Pagès, Edouard Brunet et Georges Thiébaud, afin de compléter les éléments de défense dans le cadre de la procédure judiciaire en cours."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Justice",
    "title": "La participation des sénateurs absents au jugement de la Haute-Cour",
    "summary": "M. Joseph Fabre conteste l'impossibilité pour les sénateurs absents lors de l'audience initiale de siéger. La Commission d'instruction reconnaît le bien-fondé de cette requête au regard du droit commun.",
    "paragraphs": [
      "M. Joseph Fabre, sénateur de l'Aveyron, a fait valoir une contestation relative à l'impossibilité, pour les sénateurs absents lors de la première audience, de prendre part aux audiences suivantes. M. Morillet, membre éminent de la Commission d'instruction, a confirmé que cette requête était pleinement justifiée au regard des dispositions légales et des principes du droit commun."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Justice",
    "title": "Examen de documents dans l'affaire du faux Cailly",
    "summary": "Le juge d'instruction M. de Vallès a fait procéder à la saisie de pièces au greffe de la Haute-Cour pour permettre l'expertise graphologique nécessaire à l'affaire du faux Cailly.",
    "paragraphs": [
      "Le juge d'instruction, M. de Vallès, assisté du commissaire de police M. Rey, a fait procéder à la saisie de plusieurs lettres manuscrites de MM. Cailly et Brunet, actuellement conservées au greffe de la Haute-Cour. Ces documents serviront de pièces de comparaison indispensables aux futures expertises graphologiques."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Nominations et changements à l'École de Fontainebleau",
    "summary": "Le capitaine Cassel est nommé rapporteur près le deuxième Conseil de guerre. Par ailleurs, le colonel du génie Dubois remplace le général Langlois à la direction de l'École d'artillerie et du génie.",
    "paragraphs": [
      "Le capitaine Cassel est nommé rapporteur près le deuxième Conseil de guerre de Paris.",
      "Le colonel du génie Dubois est appelé à remplacer le général de brigade Langlois, atteint par la limite d'âge, à la tête de l'École d'application de l'artillerie et du génie."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Réorganisation du service des recrues infirmiers",
    "summary": "Pour pallier la désorganisation des services hospitaliers, la direction du service de santé réduit de douze à six semaines la durée d'instruction militaire des infirmiers.",
    "paragraphs": [
      "Pour remédier à la désorganisation constatée au sein du service hospitalier, la direction du service de santé a pris la décision de réduire la durée de l'instruction militaire des infirmiers. Celle-ci passera désormais de douze à six semaines, afin d'assurer plus rapidement le déploiement du personnel nécessaire dans les hôpitaux."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Conditions de service des troupes de la marine",
    "summary": "La rédaction soutient une harmonisation des permissions de sortie pour les soldats rengagés dans la marine, afin d'améliorer l'attractivité et les conditions de service de ces corps d'armée.",
    "paragraphs": [
      "Un ancien soldat interroge la rédaction sur les avantages consentis aux militaires rengagés dans la marine, suggérant un rapprochement de leurs conditions avec celles des sous-officiers, notamment en ce qui concerne l'octroi des permissions.",
      "La rédaction estime qu'une harmonisation des permissions de sortie pour les soldats rengagés serait une mesure opportune, susceptible de renforcer notablement l'attractivité de ces corps d'armée."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Vie politique et ministérielle",
    "title": "Visite du Ministre de la Marine à Lorient",
    "summary": "Le ministre de la Marine, M. de Lanessan, a achevé sa tournée officielle à Lorient, inspectant avec attention les infrastructures militaires, les chantiers navals et les ateliers de pyrotechnie de l'île.",
    "paragraphs": [
      "Le ministre de la Marine, M. de Lanessan, s'est rendu à Lorient pour une visite officielle de plusieurs jours. Il a minutieusement inspecté les chantiers de construction navale, les cuirassés en armement, ainsi que l'hôpital et le dépôt des équipages.",
      "La journée a été marquée par une revue des troupes, la remise de décorations aux personnels méritants et une visite approfondie aux ateliers de pyrotechnie de l'île Saint-Michel."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Échos et nouvelles",
    "title": "Diverses dépêches d'actualité",
    "summary": "La vie politique et intellectuelle suit son cours : départ du ministre russe, préparation de l'accueil du commandant Marchand et futurs grands rendez-vous parisiens, scientifiques et horticoles.",
    "paragraphs": [
      "Le comte Mouraviev, ministre des Affaires étrangères de Russie, a quitté Paris ce matin pour se rendre à Darmstadt.",
      "La Société de géographie active ses préparatifs pour la réception officielle du commandant Marchand, dont le récit de l'épopée africaine passionne le public.",
      "L'Académie des sciences morales et politiques a tenu une séance solennelle consacrée aux conclusions de la Conférence de La Haye.",
      "L'inauguration du monument de Dalou s'organise avec le concours des autorités, prévoyant un cortège et une série de festivités à travers Paris.",
      "Le Congrès international d'horticulture se tiendra à Paris en mai prochain, promettant de réunir les sommités du domaine."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Social",
    "title": "Situation des grèves dans le Doubs",
    "summary": "Une accalmie relative semble poindre dans le Doubs ; toutefois, la fermeture prolongée des usines Japy frères maintient Beaucourt sous haute surveillance pour prévenir tout trouble à l'ordre public.",
    "paragraphs": [
      "Une légère détente est observée dans le Doubs, bien que la situation demeure préoccupante à Beaucourt, où la fermeture des usines Japy frères persiste. Un déploiement de gendarmes est maintenu pour assurer le respect de l'ordre public face à la généralisation des arrêts de travail."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Dépêches de l'étranger",
    "title": "Informations internationales",
    "summary": "Des nouvelles du monde : expéditions arctiques fructueuses, situation complexe autour du lac Tchad, alerte sanitaire au Brésil et impasse diplomatique persistante entre Londres et Berlin sur la question des Samoa.",
    "paragraphs": [
      "Des détails précis sont publiés concernant l'empire du sultan Rabah, situé au sud du lac Tchad.",
      "L'expédition scientifique russo-suédoise menée au Spitzberg livre d'excellents résultats pour la science.",
      "Une épidémie de peste est officiellement signalée à Rio-de-Janeiro par les autorités sanitaires.",
      "Les négociations complexes entre l'Allemagne et l'Angleterre au sujet du partage des îles Samoa n'ont, pour l'heure, pas abouti."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits divers",
    "title": "Le fonctionnement du bureau des objets trouvés",
    "summary": "Le bureau des objets trouvés fait face à une activité record avec 25 000 dossiers ouverts en 1898. L'administration accélère la vente des biens non réclamés en vue de l'Exposition universelle.",
    "paragraphs": [
      "Le bureau des objets trouvés de la Préfecture de police fait face à un afflux constant d'objets perdus sur la voie publique. En 1898, plus de 25 000 déclarations de pertes ont été officiellement enregistrées.",
      "Face à l'encombrement croissant des dépôts, l'administration prévoit d'accélérer la vente aux enchères des objets non réclamés afin de libérer de l'espace avant l'ouverture de l'Exposition universelle."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Spectacles",
    "title": "Critique théâtrale : 'Le Palais-Royal'",
    "summary": "La nouvelle pièce de MM. Pierre Veber et Victor de Cottene au théâtre du Palais-Royal dissèque avec une verve amusée les coulisses de la vie électorale, en dépit d'une mise en scène d'une platitude regrettable.",
    "paragraphs": [
      "La pièce « Le Palais-Royal », de MM. Pierre Veber et Victor de Cottene, jouée au théâtre du Palais-Royal, dépeint les coulisses des mœurs électorales avec une pointe d'humour et de finesse, bien que la mise en scène soit jugée, par endroits, d'une banalité affligeante."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Spectacles",
    "title": "Critique de la nouvelle pièce au théâtre de la République",
    "summary": "Le théâtre de la République propose une pièce inégale, mêlant un mélodrame sans grande originalité à des tableaux pittoresques et réussis de la vie des blanchisseuses parisiennes.",
    "paragraphs": [
      "Il y a, en somme, dans la pièce nouvelle du théâtre de la République, deux parties dont l'union n'était pas logiquement nécessaire et que l'on peut considérer séparément.",
      "Il y a, et c'est la partie faible de l'ouvrage, un mélodrame qui n'est ni bien neuf, ni bien palpitant. Un gentilhomme sans scrupules, le comte de Cernay, vole dans le coffre-fort de sa femme cent quarante mille francs pour rembourser une somme dérobée par lui dans la caisse d'une société financière. Il machine les choses de façon à faire accuser à sa place un honnête ouvrier, André Valin, qui est son demi-frère.",
      "Comme le titre vous l'indique, cette histoire assez vulgaire se déroule dans un milieu pittoresque que le théâtre de la République a reconstitué avec soin. On montre successivement au public l'intérieur d'une blanchisserie, puis d'un bateau-lavoir, puis encore une fête de la Mi-Carême. Tout cela est amusant et papillonnant. C'est évidemment ce côté de la pièce, le côté blanchisseuses, qui pourra lui assurer un succès honorable."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Les Tribunaux",
    "title": "Le parricide de Muids : Séraphin Lemonnier condamné à mort",
    "summary": "La Cour d'assises de l'Eure a condamné à la peine capitale Séraphin Lemonnier, reconnu coupable du meurtre prémédité de son père, commis avec la complicité d'un nommé Davray dans la commune de Muids.",
    "paragraphs": [
      "C'est hier que la Cour d'assises de l'Eure a rendu son verdict au sujet du parricide de Muids, affaire qui provoqua une vive émotion dans toute la région.",
      "L'accusé, Séraphin Lemonnier, est un jeune homme de dix-neuf ans, domestique de ferme, qui était considéré avant le crime comme un honnête ouvrier. Des discussions violentes ayant éclaté entre les époux Lemonnier, une séparation eut lieu. C'est alors que Lemonnier conçut le projet atroce de tuer son père.",
      "Le 30 mars dernier, aidé par un individu nommé Davray, Lemonnier attendit son père et l'assassina à coups de barre de fer, jetant ensuite le cadavre dans un puits. Le jury n'a accordé aucune circonstance atténuante. En conséquence, Séraphin Lemonnier est condamné à la peine de mort."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Les Tribunaux",
    "title": "Condamnation à mort dans l'Ain",
    "summary": "La Cour d'assises de l'Ain a prononcé la peine capitale contre le nommé Barboux, vingt-trois ans, reconnu coupable de l'assassinat crapuleux de la veuve Lambert, aubergiste à Polliat.",
    "paragraphs": [
      "La Cour d'assises de l'Ain a condamné hier à la peine de mort un jeune homme de vingt-trois ans, nommé Barboux, accusé d'avoir assassiné, pour la voler, la veuve Lambert, aubergiste à Polliat (Ain)."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Économie",
    "title": "L'affaire du Syndicat national du Crédit agricole",
    "summary": "Le Tribunal de Commerce examine les réclamations liées à l'échec du Syndicat national du Crédit agricole, impliquant des personnalités politiques et le banquier Boulaine.",
    "paragraphs": [
      "Un groupe d'hommes politiques et financiers avait songé à créer un Syndicat national du Crédit agricole. L'émission, confiée à M. Boulaine, n'ayant pas réussi, des courtiers et le banquier Boulaine demandent aujourd'hui le remboursement de leurs dépenses devant le Tribunal de Commerce.",
      "L'assignation vise les membres du Conseil général et du Comité de patronage, incluant des personnalités comme MM. Périvier, Tisserand de Bort et d'autres députés et sénateurs. Certains membres ont cependant déjà fait savoir qu'ils ne faisaient plus partie du comité.",
      "L'affaire a été renvoyée à une audience ultérieure. M. Boulaine demande le remboursement des sommes exposées et des dommages-intérêts. Par ailleurs, M. Motteroz, imprimeur, a également lancé une assignation pour obtenir le paiement de 340 445 francs pour les travaux d'impression réalisés pour le Syndicat."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Découverte d'un cadavre à Vienne (Isère)",
    "summary": "Une jeune femme d'une vingtaine d'années a été retrouvée morte dans le Rhône à Vienne. Le corps porte les stigmates de deux blessures mortelles au cou infligées à l'aide d'un poignard. L'enquête sur son identité est en cours.",
    "paragraphs": [
      "On a retiré, dans la matinée, des eaux du Rhône le cadavre d'une femme paraissant âgée de vingt ans environ. Le corps portait deux blessures au cou, faites avec un poignard. L'identité n'a pu encore être établie."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Social",
    "title": "La grève de Saint-Dié",
    "summary": "Le conflit social perdure aux usines Clévenot, Lévy et Korh. Les patrons menacent de fermer l'établissement si le travail ne reprend pas lundi, tandis que les ouvriers grévistes réclament la liberté de leurs revendications.",
    "paragraphs": [
      "Le nombre des grévistes tisseurs de la maison Clévenot, Lévy et Korh demeure important. La direction a menacé de fermer l'usine lundi si cent cinquante ouvriers ne se présentent pas à leur poste. Les grévistes protestent de leur volonté de liberté du travail, tout en maintenant fermement leurs revendications."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Social",
    "title": "Vœu du Conseil municipal de Brest",
    "summary": "Le Conseil municipal de Brest a voté une motion préconisant de favoriser les entrepreneurs qui associent leurs ouvriers aux bénéfices lors des adjudications communales, à égalité de rabais avec la concurrence.",
    "paragraphs": [
      "Le Conseil municipal de Brest a adopté à l'unanimité un vœu demandant que les communes puissent accorder une préférence aux entrepreneurs qui font participer leurs ouvriers aux bénéfices, à égalité de rabais."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vols à la gare du Nord",
    "summary": "La police a mis fin aux agissements d'Edmond Lenoir, arrêté en flagrant délit de vol à la gare du Nord. Une perquisition à son domicile a permis la saisie de neuf valises dérobées aux voyageurs en transit.",
    "paragraphs": [
      "De nombreux vols étaient commis dans les salles d'attente de la gare du Nord. Un individu nommé Edmond Lenoir, âgé de vingt-deux ans, a été arrêté hier alors qu'il tentait de voler la valise d'un voyageur. Dans son logement, les autorités ont retrouvé neuf valises et divers objets provenant de ses nombreux méfaits."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide en wagon",
    "summary": "Un drame s'est déroulé dans le train de Ceinture n° 245 : M. Émile Buiesot, représentant de commerce, s'est donné la mort par arme à feu. Il a succombé à ses blessures après son transfert à l'hôpital Lariboisière.",
    "paragraphs": [
      "Un représentant de commerce, M. Émile Buiesot, s'est tiré un coup de revolver dans la tête alors qu'il se trouvait seul dans un compartiment du train de Ceinture n° 245. Il est décédé peu après son transport à l'hôpital Lariboisière."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vol audacieux boulevard Barbès",
    "summary": "En plein jour sur le boulevard Barbès, Mlle Sarrazin, employée au Chemin de fer du Nord, fut victime d'une agression brutale. Un malfaiteur est parvenu à lui ravir son réticule. Le coupable est activement recherché.",
    "paragraphs": [
      "Mlle Sarrazin, receveuse au Chemin de fer du Nord, a été victime d'une agression en plein jour, boulevard Barbès. Un individu, profitant de la foule, lui a arraché avec violence son réticule contenant des sommes d'argent et des objets de valeur. Le malfaiteur a réussi à s'échapper et est activement recherché par les autorités de police."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un sous-chef de gare allemand",
    "summary": "Signalé par la justice allemande pour un vol de 500 marks, le nommé Jean Bachmayer, sous-chef de gare, a été appréhendé à la gare du Nord. Il est actuellement écroué dans l'attente de son extradition.",
    "paragraphs": [
      "Jean Bachmayer, sous-chef de gare en Allemagne, était activement recherché par la justice de son pays pour le vol de 500 marks. Grâce aux signalements transmis, il a été intercepté à la gare du Nord par les agents de surveillance. Il a été aussitôt écroué au dépôt en attendant que les formalités d'extradition soient accomplies."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Escroquerie dans le quartier de Bel-Air",
    "summary": "Un escroc, se faisant passer pour un riche négociant, abuse les marchands de vins du quartier de Bel-Air en extorquant des avances contre de fausses valeurs. Neuf plaintes ont déjà été enregistrées.",
    "paragraphs": [
      "Un individu à l'allure élégante, se présentant sous le titre de négociant, s'est livré à une série d'escroqueries auprès des marchands de vins du quartier. Sous de faux prétextes, il sollicitait des avances d'argent contre la remise de titres mobiliers sans aucune valeur. Neuf plaintes ont été déposées au commissariat contre cet individu."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Valet de chambre indélicat",
    "summary": "Auguste Raynal, valet de chambre au service de M. Tardes, administrateur du théâtre des Mathurins, a été appréhendé après avoir dérobé le portefeuille de son employeur. Il a reconnu les faits.",
    "paragraphs": [
      "Auguste Raynal, employé en qualité de valet de chambre au service de M. Tardes, administrateur du théâtre des Mathurins, a été arrêté pour avoir soustrait le portefeuille de son maître. Confondu par les preuves réunies par la police, il n'a pu que passer aux aveux complets de son larcin."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Sports",
    "title": "Combat de boxe à Paris : Charlemont contre Driscoll",
    "summary": "Un duel opposant la boxe française à la boxe anglaise s'est tenu rue Pergolesi. Après huit rounds disputés, Charlemont est déclaré vainqueur suite à l'abandon de son adversaire, Jerry Driscoll, blessé.",
    "paragraphs": [
      "Un combat singulier, opposant les techniques de la boxe française à celles de la boxe anglaise, s'est tenu hier dans un manège de la rue Pergolesi devant une assistance de 450 privilégiés. Après huit rounds d'une intensité remarquable, Jerry Driscoll a dû se résoudre à l'abandon suite à une blessure à la main, consacrant ainsi la victoire de Charlemont. Les forces de police, présentes sur les lieux, ont simplement pris acte du déroulement de l'événement."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Sport",
    "title": "Résultats des courses hippiques",
    "summary": "Au cours des épreuves hippiques, Isca a chuté au troisième obstacle. Le Prix Beaurepaire revient à Biffer II, tandis que l'outsider Canvass Back crée la surprise en remportant le Prix de Pau à 30 contre 1.",
    "paragraphs": [
      "Isca et quelques autres concurrents sont tombés au troisième obstacle. Les deux autres courses ont été remportées par des outsiders. Le Prix Beaurepaire a été gagné par Biffer II, suivi de Castelvieith et Zouzou.",
      "Le Prix de Pau a été remporté par le grand outsider Canvass Back, parti à 30 contre 1, battant Quitte ou Double d'une encolure. Mathias finit troisième devant Tournay et Sommeil."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Spectacles",
    "title": "Le succès de Robinson Crusoé au Châtelet",
    "summary": "Le spectacle Robinson Crusoé triomphe au Châtelet. Le tableau du rêve de Noël au troisième acte, porté par une troupe de jeunes enfants, rencontre un succès immense auprès du public parisien.",
    "paragraphs": [
      "Pendant de longs jours encore, Robinson Crusoé va faire la joie des spectateurs, petits ou grands, attirés par l'attrayante histoire et la mise en scène somptueuse du Châtelet.",
      "Aucun tableau n'a eu plus de succès que le rêve de Robinson au troisième acte, où, parmi les ballerines scintillantes, évolue une troupe de jeunes enfants venus pour fêter le Bonhomme Noël.",
      "Ce n'est pas la première fois que l'on voit des enfants paraître sur la scène. Au siècle dernier, les petits comédiens du Beaujolais faisaient courir tout Paris.",
      "Voilà donc un petit métier, curieux à connaître, où les enfants de familles peu aisées peuvent souvent trouver des ressources appréciables. Les lois qui protègent le travail de l'enfance sont exactement appliquées dans les théâtres."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Spectacles",
    "title": "Les enfants choristes à l'Opéra-Comique",
    "summary": "Focus sur les jeunes choristes de l'Opéra-Comique. Recrutés par concours, ces enfants, souvent issus du temple de la rue de la Victoire, assurent avec professionnalisme les chœurs des grandes œuvres du répertoire.",
    "paragraphs": [
      "Dans la hiérarchie de ces artistes en herbe, ce sont les choristes qui tiennent le premier rang. Les jeunes chanteurs sont des professionnels régulièrement attachés à la scène.",
      "L'Opéra-Comique monte Carmen, la Vie de Bohème et Louise de Charpentier qui exigent des chœurs d'enfants. Chaque année, un concours est organisé pour le recrutement de cette troupe de douze titulaires.",
      "Ces voix enfantines, de onze à treize ans, sont très recherchées. Détail curieux : presque tous sont israélites et font partie du chœur du temple de la rue de la Victoire, car ils ne sont pas occupés les dimanches, contrairement aux enfants de chœur des églises."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Spectacles",
    "title": "L'école de danse de l'Opéra",
    "summary": "L'école de danse de l'Académie nationale forme la relève du corps de ballet. Bien que la danse masculine soit moins prisée, la formation précoce des enfants reste essentielle pour la qualité des ballets.",
    "paragraphs": [
      "Si l'Académie nationale n'use qu'exceptionnellement de chanteurs, les enfants, danseurs ou danseuses, y figurent presque tous les jours. Le corps de ballet se recrute exclusivement parmi les élèves de l'école de danse.",
      "La danse est un art difficile qu'il convient de commencer de bonne heure. Les filles sont en majorité, les petits garçons n'étant admis qu'en nombre limité. Bien que la danse masculine ait décliné, les danseurs restent indispensables pour les ballets du répertoire."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Faits Divers",
    "title": "Le Comte Gustave de Nerval",
    "summary": "Une mystérieuse visite nocturne trouble M. Isidore Ledru. Un inconnu, se faisant appeler Comte Gustave de Nerval, lui propose une transaction suspecte impliquant des titres de banque dérobés.",
    "paragraphs": [
      "M. Isidore Ledru s'entretient avec Évariste au sujet d'une visite mystérieuse survenue à cinq heures du matin. Un homme fort élégant a demandé à parler à M. Isidore.",
      "Évariste présente une carte de visite au nom du Comte Gustave de Nerval. Isidore reconnaît ce nom et remarque trois petits trous en forme de cœur sur la carte, signe qu'il semble comprendre.",
      "L'homme, nommé Paul, revient plus tard pour proposer une affaire douteuse impliquant une liasse de titres de banque volés, ce qui scandalise et amuse à la fois M. Isidore Ledru."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Chronique Théâtrale",
    "title": "Incidents et finances à la Comédie-Française",
    "summary": "Des tensions sont signalées à la Comédie-Française entre M. Le Bargy et l'administrateur Jules Claretie. Pourtant, la gestion financière rigoureuse a permis une progression constante des fonds de réserve depuis 1885.",
    "paragraphs": [
      "On fait grand bruit, en ce moment, des incidents survenus à la Comédie-Française, où M. Le Bargy aurait vivement attaqué la gestion de l'administrateur, M. Jules Claretie.",
      "Il convient toutefois de noter que les bénéfices se sont élevés à 798 620 francs en 1898. La troupe se compose actuellement de vingt-huit sociétaires et de vingt-six pensionnaires. Grâce à la gestion avisée de M. Claretie, les fonds de réserve de la maison ont considérablement fructifié, passant de 578 000 francs en 1885 à un montant bien supérieur aujourd'hui."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Informations maritimes",
    "title": "Arrivée du trois-mâts Antoinette",
    "summary": "Le trois-mâts Antoinette, armé par M. Mignotte et commandé par le capitaine Denis, a mouillé jeudi soir à Saint-Malo, en provenance des bancs de Saint-Pierre, avec deux cent soixante passagers à son bord.",
    "paragraphs": [
      "Jeudi soir, le trois-mâts Antoinette est arrivé à Saint-Malo, en provenance des bancs de Terre-Neuve à Saint-Pierre. Le navire, armé par M. Mignotte et commandé par le capitaine Denis, compte deux cent soixante passagers à son bord."
    ]
  }
];
