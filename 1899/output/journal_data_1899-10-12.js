// Date: 1899-10-12
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-10-12 (Version Restaurée, 48 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La rentrée des classes",
    "summary": "La rentrée scolaire ravive les contrastes entre l'ardeur des étudiants en facultés et le zèle parfois plus mesuré des lycéens, tout en marquant le renouveau du dévouement enseignant sous la République.",
    "paragraphs": [
      "Il y a deux mois, nous souhaitions de bonnes vacances aux jeunes élèves de nos lycées, de nos collèges et de nos écoles. Aujourd'hui, c'est chose faite : tous les établissements ont rouvert leurs portes.",
      "J'ai constaté certaines différences d'état d'esprit entre les diverses catégories qui fréquentent ces lieux. L'ardeur au travail des élèves de nos établissements d'enseignement secondaire est certainement moins vive que celle dont font preuve les étudiants des Universités ou les enfants de l'enseignement primaire.",
      "Tandis que les adolescents des lycées se montrent moins zélés, les jeunes gens qui suivent les cours supérieurs de la Sorbonne déploient une activité prodigieuse. La même ferveur se retrouve chez les petits enfants des écoles primaires, surtout dans les écoles primaires supérieures de la Ville de Paris.",
      "En les regardant agir, je me rappelais l'enfance du général Drouot. En s'informant bien, on trouverait parmi nos élèves des enfants tout aussi acharnés au travail.",
      "Il faut également souligner le dévouement du corps enseignant. La République, mettant à profit les leçons du passé, a changé le sort des instituteurs qui occupent aujourd'hui, dans notre démocratie, la place qui leur est due."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Une haine vieille d'un siècle",
    "summary": "Après le meurtre de Girodias, Roland sombre dans une instabilité violente qui inquiète son entourage, forçant le duc Horace à percer les secrets de ses crises nerveuses auprès de l'institutrice Colette.",
    "paragraphs": [
      "Des crises nerveuses graves s'étaient manifestées chez Roland lors du meurtre du père Girodias. Les médecins avaient imposé le calme et la campagne.",
      "Pourtant, le lundi, jour d'allemand, il vint à la bibliothèque. Il était pâle, les yeux pleins de révolte. Colette, l'institutrice, sentit la tension monter. Alors qu'elle interrogeait Louise, Roland se précipita sur les livres, les ramassa et les piétina avec rage.",
      "Colette tenta de maintenir l'autorité, mais Roland était incontrôlable. Après une scène où elle finit par se retirer pour éviter la crise, il la harcela, allant jusqu'à détruire les fleurs qu'elle chérissait dans la serre.",
      "Le duc Horace, intrigué par les changements de caractère de Roland depuis le crime de Girodias, interrogea Colette, craignant qu'elle ne lui cache la vérité sur l'état de son fils."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des ministres",
    "summary": "Le Conseil des ministres, sous la présidence de M. Loubet, acte des sanctions disciplinaires, réforme le droit syndical et confirme la survie de la mission Foureau, mettant fin à de vives inquiétudes.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin à l'Élysée, sous la présidence de M. Loubet. Le décret mettant en retrait d'emploi M. de Bernardy a été signé suite aux incidents de Montélimar.",
      "M. Waldeck-Rousseau a rendu compte de la reprise du travail au Creusot et a soumis un projet de loi visant à modifier la loi de 1884 sur les syndicats professionnels.",
      "Le ministre des Affaires étrangères a fait un exposé sur les questions extérieures, érigeant en consulats les vice-consulats de Han-Kéou et Fou-Tchéou.",
      "Le ministre de l'Instruction publique a annoncé que les membres de la mission Foureau, que l'on croyait disparus, sont en bonne santé."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un drame à Aubervilliers",
    "summary": "Un tragique fait divers s'est déroulé rue Heurtault : une dispute entre un ouvrier et sa logeuse a causé la mort de M. Georges Kreitz, un courageux témoin ayant tenté de s'interposer.",
    "paragraphs": [
      "Au numéro 42 de la rue Heurtault, l'ouvrier corroyeur Louis Clouin, après une violente dispute, a menacé sa logeuse avec un revolver. Un journalier, M. Georges Kreitz, s'est interposé et a été mortellement blessé au front.",
      "Clouin s'est lui-même blessé à la main gauche lors de l'altercation et a été conduit à l'hôpital Lariboisière. La foule a tenté de s'en prendre au meurtrier avant l'intervention des gardiens de la paix."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Actualités",
    "title": "Le Triomphe de la République",
    "summary": "Le Conseil municipal a entériné un budget de 100 000 francs pour l'inauguration du monument de Dalou, promettant des festivités d'envergure, cortèges ouvriers et illuminations pour la capitale.",
    "paragraphs": [
      "Le Conseil municipal a examiné le programme de l'inauguration du monument de Dalou. Le budget voté pour ces festivités s'élève à 100 000 francs.",
      "La fête comprendra un cortège des syndicats ouvriers partant de l'Hôtel de Ville ou de la Bastille, suivi d'illuminations et d'un grand banquet."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Assassin de sa maîtresse",
    "summary": "L'instruction confirme l'atrocité du crime commis par Julien sur sa maîtresse, Félicie Ducousseau, près de Castres. Le meurtrier a froidement reconstitué le dépeçage et l'incinération du corps.",
    "paragraphs": [
      "L'instruction confirme que le nommé Julien a assassiné, dépecé et brûlé sa maîtresse, la malheureuse Félicie Ducousseau, dans les environs de Castres.",
      "Lors de la reconstitution des faits, le meurtrier a décrit avec une précision glaciale comment il a transporté le corps dans une écurie pour le dépecer, avant d'en incinérer les restes dans le foyer de son habitation. Le suspect est demeuré impassible durant toute la procédure."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "International",
    "title": "L'Angleterre et le Transvaal",
    "summary": "L'ultimatum des Boërs scelle l'imminence de la guerre dans le Drakensberg. À Londres, l'union nationale s'organise face au péril, tandis qu'à Pretoria, la ferveur patriotique mobilise les volontaires.",
    "paragraphs": [
      "L'ultimatum signifié par les Boërs a écarté les ultimes chances d'une solution diplomatique. La guerre semble désormais imminente dans les passes escarpées du Drakensberg.",
      "À Londres, lord Rosebery appelle à l'union sacrée des partis face à ce conflit. La presse, à l'instar de la Westminster Gazette, s'accorde à dire que cet ultimatum était devenu inéluctable.",
      "À Pretoria, une ferveur patriotique domine. De nombreux ressortissants étrangers, et même certains sujets britanniques, ont juré fidélité à la République pour défendre son indépendance menacée."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Faits divers",
    "title": "Enquête sur l'assassinat de Félicie",
    "summary": "Un témoignage singulier surgit dans l'affaire Ducousseau : un homme affirme avoir été alerté par une somnambule. M. Cochefert, du Parquet de Castres, a pris le dossier en main.",
    "paragraphs": [
      "Un témoin livre un récit étrange : c'est sur les conseils d'une somnambule, consultée pour retrouver sa maîtresse disparue, qu'il aurait appris le crime. Celle-ci lui aurait décrit une scène horrible et enjoint de lire le journal local.",
      "De fait, le journal relatait alors l'assassinat de Félicie Ducousseau ainsi que les aveux circonstanciés de Julien.",
      "Le témoin s'est rendu à Toulouse pour confier ces éléments au commissaire de police. M. Cochefert a enjoint M. Germain à se tenir à la disposition entière du Parquet de Castres pour les besoins de l'instruction."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Haute-Cour",
    "title": "Interrogatoire de M. de Sabran-Pontevès",
    "summary": "La Haute-Cour a procédé à l'interrogatoire de M. de Sabran-Pontevès. L'inculpé, assisté de son avocat, a vigoureusement protesté contre les irrégularités de la procédure et refusé de répondre à M. Bérenger.",
    "paragraphs": [
      "La matinée d'hier fut exclusivement consacrée à l'interrogatoire de M. de Sabran-Pontevès, qui s'est présenté assisté de son conseil, M. Berlier de Vauplane.",
      "Dès l'ouverture, M. de Sabran-Pontevès a élevé une vive protestation contre l'ouverture des scellés effectuée hors de sa présence, les perquisitions jugées irrégulières à son domicile d'Indre-et-Loire, et le défaut de communication des pièces de procédure.",
      "M. Bérenger a néanmoins maintenu son interrogatoire, auquel l'inculpé a refusé de répondre point par point. Il a été autorisé à prendre son déjeuner au Sénat avant d'être reconduit à la prison de la Santé."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Haute-Cour",
    "title": "Réclamation des inculpés royalistes et antisémites",
    "summary": "La défense des inculpés conteste la régularité des interrogatoires menés par la Haute-Cour. Les avocats exigent une communication intégrale du dossier et le respect strict des droits de la défense.",
    "paragraphs": [
      "La Commission d'instruction de la Haute-Cour s'est réunie afin de statuer sur les mémoires déposés par les avocats des groupes royaliste et antisémite, relatifs aux droits de la défense, à l'assistance aux interrogatoires et à la communication du dossier.",
      "La défense exige que la loi ne restreigne point le nombre d'avocats, que le conseil soit considéré comme indivisible et que l'intégralité des pièces soit communiquée sans aucune réserve.",
      "Les avocats concluent à la nullité des interrogatoires déjà subis, arguant du non-respect caractérisé de ces règles de procédure fondamentale."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Haute-Cour",
    "title": "Le cas de M. Daillière",
    "summary": "M. Daillière, par la voix de son conseil M. Hornbostel, a saisi la Commission d'instruction pour contester la validité de son interrogatoire et dénoncer les irrégularités de la procédure en cours.",
    "paragraphs": [
      "M. Daillière, par l'intermédiaire de ses défenseurs, a saisi la Commission d'instruction pour réclamer le traitement réservé aux prévenus politiques.",
      "M. Hornbostel, son avocat, a déposé un mémoire rappelant ses protestations concernant la présence limitée des défenseurs, la nullité de son interrogatoire du 25 septembre et les modalités de versement des pièces saisies au dossier."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Haute-Cour",
    "title": "Séance de la Commission d'instruction",
    "summary": "La Commission d'instruction a débattu de l'application de l'article 10 de la loi du 8 décembre relative à la communication de la procédure, une question laissée en suspens pour les prochaines délibérations.",
    "paragraphs": [
      "La Commission a délibéré sur les divers mémoires présentés par les avocats. Une longue discussion a porté sur l'article 10 de la loi du 8 décembre, qui impose la communication de la procédure la veille des interrogatoires.",
      "Aucune décision n'a été actée quant à la nécessité d'inclure les interrogatoires précédents dans cette communication, mais le débat se poursuivra lors d'une prochaine réunion."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Haute-Cour",
    "title": "Prochaines auditions des inculpés antisémites",
    "summary": "M. Bérenger organisera les interrogatoires des inculpés antisémites ce vendredi, tandis que MM. de Sabran-Pontevès et Godefroy obtiennent leur transfert vers les cellules du Luxembourg.",
    "paragraphs": [
      "M. Bérenger procédera vendredi à l'interrogatoire des inculpés antisémites et des détenus libres, conformément au calendrier établi pour la journée.",
      "Par ailleurs, M. de Sabran-Pontevès et M. Godefroy ont obtenu leur transfert de la prison de la Santé vers les cellules du Luxembourg."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Répartition du contingent d'un an",
    "summary": "Le ministère de la Guerre a réparti les appelés de la classe 1898 selon leur spécialité, privilégiant leur affectation dans des régiments proches de leur domicile, sauf pour la région parisienne.",
    "paragraphs": [
      "Le ministre de la Guerre a réparti les jeunes gens de la classe 1898, appelés pour un an, entre les différents corps de troupe : 54 717 dans l'infanterie, 10 392 dans l'artillerie, 4 337 dans le génie, 1 212 dans le train et 2 020 dans l'administration.",
      "Conformément aux instructions, les hommes sont incorporés dans les régiments proches de leur domicile, à l'exception notable de ceux originaires des départements de la Seine et de Seine-et-Oise."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Visite du général Brugère à Versailles",
    "summary": "Le général Brugère, gouverneur militaire de Paris, a procédé à une visite d'inspection des établissements militaires de Versailles, incluant les quartiers des troupes et l'hôpital militaire.",
    "paragraphs": [
      "Le général Brugère, gouverneur militaire de Paris, a visité les établissements militaires de Versailles, accompagné de ses officiers d'état-major. Il a inspecté les quartiers des différents corps de troupe ainsi que l'hôpital militaire."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles maritimes",
    "title": "Voyage du Ministre de la Marine",
    "summary": "M. de Lanessan, ministre de la Marine, a inspecté l'arsenal du Mourillon et le croiseur Jeanne-d'Arc avant le départ solennel de l'escadre de la Méditerranée pour le Levant.",
    "paragraphs": [
      "M. de Lanessan, ministre de la Marine, a visité avec soin l'arsenal du Mourillon et a passé en revue le croiseur Jeanne-d'Arc. Il a assisté au départ solennel de l'escadre de la Méditerranée pour le Levant.",
      "Avant de prévoir son prochain départ pour Marseille, le ministre a également procédé à une inspection minutieuse de plusieurs installations maritimes stratégiques."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Chronique scientifique",
    "title": "Les hommes roux et les préjugés médicaux",
    "summary": "Le docteur Delpeuch, de l'hôpital Cochin, réfute dans la Presse médicale les thèses associant la rousseur à la tuberculose, s'appuyant sur les travaux contradictoires du docteur John Beddoe.",
    "paragraphs": [
      "M. Delpeuch, médecin attaché à l'hôpital Cochin, a publié dans la Presse médicale un article remarqué visant à défendre les personnes rousses contre les préjugés tenaces qui les associent systématiquement à la tuberculose.",
      "Cette étude démonte avec rigueur les thèses médicales anciennes, héritées d'Hippocrate et reprises par certains praticiens contemporains. L'auteur s'appuie sur les travaux contradictoires du docteur John Beddoe, dont les observations prouvent que les roux ne sont nullement plus exposés à la phtisie que le reste de la population."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Dépêches de l'Etranger",
    "title": "Nouvelles internationales",
    "summary": "La reine Victoria indemnise la famille d'un pêcheur français, tandis que l'actualité agricole aux États-Unis et les tensions diplomatiques au Venezuela retiennent l'attention des chancelleries.",
    "paragraphs": [
      "Londres : La reine Victoria a manifesté son intention de remettre une somme importante à la famille du pêcheur français tragiquement tué par des matelots anglais.",
      "Washington : Un rapport détaillé a été publié concernant le rendement agricole global aux États-Unis.",
      "Venezuela : On signale la suspension des négociations diplomatiques, les observateurs s'attendant à l'imminence d'un affrontement."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Spectacles",
    "title": "Reprise de Froufrou à la Comédie-Française",
    "summary": "La célèbre pièce de Meilhac et Halévy, Froufrou, est reprise à la Comédie-Française. Mlle Lara y livre une performance pleine de jeunesse et de talent dans le rôle principal.",
    "paragraphs": [
      "La pièce Froufrou, œuvre célèbre de Meilhac et Ludovic Halévy, est reprise sur la scène de la Comédie-Française. Cette comédie, empreinte d'une gravité tragique, dépeint les mœurs de notre temps avec une clarté remarquable.",
      "Mlle Lara, à qui est confié le rôle principal, a fait preuve d'une jeunesse et d'un talent prometteurs, parvenant à porter avec assurance l'essentiel de la pièce sur ses seules épaules."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Les Tribunaux",
    "title": "Une cambrioleuse de treize ans",
    "summary": "La Cour d'assises de la Seine a statué sur le cas de la jeune Henriette Viou, condamnée à une maison de correction, tandis que son complice, Alfred Handeville, écope de quinze ans de travaux forcés.",
    "paragraphs": [
      "La Cour d'assises de la Seine a jugé l'affaire d'Henriette Viou, jeune fille de treize ans accusée de cambriolage. Reconnaissant un manque de discernement, le tribunal a ordonné son placement dans une maison de correction.",
      "Son complice, Alfred Handeville, a quant à lui été sévèrement condamné à quinze ans de travaux forcés pour sa participation aux faits."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Echos et nouvelles",
    "title": "Informations diverses",
    "summary": "Le ministère du Commerce projette la vérification des thermomètres médicaux. La Compagnie des omnibus renforce ses services de soirée et les résultats de l'étude sur le cerveau de Vacher sont dévoilés.",
    "paragraphs": [
      "Le ministre du Commerce étudie actuellement l'extension de la vérification officielle à divers instruments de précision, visant plus particulièrement les thermomètres médicaux.",
      "Afin d'assurer le retour des spectateurs, la Compagnie des omnibus mettra en place, dès lundi prochain, des services spéciaux après la sortie des théâtres sur onze directions différentes.",
      "Le docteur Toulouse a communiqué les conclusions de ses travaux sur le cerveau de Vacher ; il en ressort qu'aucune lésion organique n'est en mesure d'expliquer les troubles mentaux du criminel.",
      "Nous apprenons, par ailleurs, que les habitants de l'Acre ont officiellement proclamé l'indépendance de leur République."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits divers",
    "title": "Drame rue du Bouloi",
    "summary": "Un drame passionnel s'est déroulé rue du Bouloi. Mlle Pauline Lévy a succombé aux blessures infligées par son amant, M. Alexandre Labriola, qui a tenté de se suicider après son forfait.",
    "paragraphs": [
      "Un terrible drame passionnel a ensanglanté la rue du Bouloi. M. Alexandre Labriola, après avoir mortellement blessé sa maîtresse, Mlle Pauline Lévy, a tenté de mettre fin à ses jours. Mlle Lévy a succombé à ses blessures, tandis que l'état de M. Labriola demeure jugé préoccupant par les médecins."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits divers",
    "title": "Accident de la route à La Villette",
    "summary": "Un tragique accident de la circulation rue de La Villette a coûté la vie au charretier Jules Claye, broyé entre une voiture de place et un tramway à vapeur.",
    "paragraphs": [
      "Un charretier nommé Jules Claye est décédé des suites d'un accident tragique survenu rue de La Villette. L'infortuné a été pris en étau entre une voiture de place et un tramway à vapeur. Malgré les soins prompts et diligents qui lui furent prodigués, il n'a pas survécu à ses blessures."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Faits divers",
    "title": "Violence conjugale",
    "summary": "La femme Debarre, menacée par les tirs de revolver de son mari, a dû trouver refuge chez une voisine. Le mari, après avoir fait usage de son arme, a été maîtrisé par le voisinage.",
    "paragraphs": [
      "La femme Debarre, victime des sévices répétés de son époux, a été contrainte de s'enfuir chez une voisine après que celui-ci eut fait usage d'un revolver à travers la porte du logement. Le mari, dans un accès de violence, a finalement été désarmé par des voisins intervenus à temps pour éviter un drame plus grave."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le Drame de la Rue de la Pépinière",
    "summary": "Le juge Berlulus a procédé à la confrontation entre le vicomte d'Assailly et Mlle d'Arneville concernant la tentative d'assassinat survenue en juin dernier rue de la Pépinière.",
    "paragraphs": [
      "Au mois de juin dernier, le vicomte d'Assailly avait, on se le rappelle, tiré quatre coups de revolver sur sa maîtresse, Mlle d'Arneville, alors qu'elle demeurait rue de la Pépinière.",
      "M. Berlulus, le juge d'instruction chargé de cette affaire, a entendu contradictoirement Mlle d'Arneville et l'auteur de cette tentative d'assassinat. La confrontation s'est déroulée en présence de l'avocat de la défense, M. Henri Robert."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Actualités",
    "title": "La Grande Roue de l'avenue de Suffren",
    "summary": "Contrairement aux prédictions, le succès de la Grande Roue ne se dément point. Le public continue de se presser quotidiennement pour gravir ce géant d'acier et admirer les attractions alentour.",
    "paragraphs": [
      "À l'encontre de ce qu'affirme le proverbe, les jours se suivent et se ressemblent dans l'établissement de l'avenue de Suffren, où le public afflue, toujours aussi nombreux, pour faire la merveilleuse ascension dans la Grande Roue et voir les curieuses attractions groupées autour."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie au presbytère de Saint-Germain-l'Auxerrois",
    "summary": "Un début d'incendie a mobilisé les secours hier matin au presbytère de Saint-Germain-l'Auxerrois. Le foyer fut promptement maîtrisé en un quart d'heure.",
    "paragraphs": [
      "Un commencement d'incendie s'est déclaré hier matin, vers quatre heures, dans le presbytère de l'église Saint-Germain-l'Auxerrois. Il a été éteint après un quart d'heure de travail."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Décès de Mme Autray à Saint-Cloud",
    "summary": "Mme Autray, directrice du haras de la Porte-Jaune, a succombé ce matin aux blessures causées par l'accident de voiture rapporté précédemment par notre journal.",
    "paragraphs": [
      "Mme Autray, directrice du haras de la Porte-Jaune, victime de l'accident de voiture dont Le Petit Parisien a parlé, est morte ce matin des suites de ses blessures. Cette dame était âgée de soixante ans."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Un bœuf furieux blesse un cycliste à la Garenne-Bezons",
    "summary": "Un bœuf échappé a violemment chargé un cycliste à la Garenne-Bezons. La victime, M. Jantoux, a été grièvement blessée avant que l'animal ne soit maîtrisé par deux bateliers.",
    "paragraphs": [
      "Un bœuf furieux, échappé d'un troupeau conduit par un boucher de la Garenne-Bezons, parcourait hier les quais de la Seine près du pont Bineau, quand il se jeta sur un bicycliste, le culbuta et lui porta plusieurs coups de corne.",
      "Le malheureux, qui se nomme M. Jantoux, bijoutier rue des Filles-du-Calvaire, à Paris, a été grièvement blessé à la tête et dans les reins. Après avoir reçu les soins nécessaires, il a été, sur sa demande, transporté en voiture à son domicile.",
      "L'animal a pu être enfin maîtrisé sur le petit chemin de halage par deux bateliers qui l'ont maintenu en respect avec le fer de leurs gaffes jusqu'à l'arrivée du boucher."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident de travail à Levallois-Perret",
    "summary": "Un jeune ouvrier de dix-neuf ans, Joseph Bertol, a été victime d'un effroyable accident mécanique dans un atelier de Levallois-Perret et demeure dans un état alarmant à l'hôpital Beaujon.",
    "paragraphs": [
      "Hier après-midi, dans un atelier de mécanique de la rue Chevallier, un ouvrier forgeron, Joseph Bertol, âgé de dix-neuf ans, demeurant rue Bouquet, a été pris dans un engrenage et affreusement mutilé.",
      "L'infortuné, qui a eu la cuisse meurtrie et le pied droit complètement enlevé, a dû être transporté d'urgence, dans un état des plus alarmants, à l'hôpital Beaujon."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Un cocher projeté de son siège à Clichy",
    "summary": "Hier matin, sur la route d'Asnières, le cocher Joseph Martin a été grièvement blessé après une collision entre deux voitures. Il a été transporté d'urgence à l'hôpital Beaujon.",
    "paragraphs": [
      "Un cocher, Joseph Martin, conduisant une voiture de maître, a été projeté hier matin, sur la route d'Asnières, de son siège, par suite d'une collision avec une autre voiture. Relevé sans connaissance, l'épaule broyée, le crâne fracturé et la poitrine écrasée, il a été transporté d'urgence à l'hôpital Beaujon."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Découverte d'un corps à Asnières",
    "summary": "Le corps de Louis Muller, employé de commerce âgé de trente-sept ans, a été retrouvé hier matin dans la Seine, en aval du pont de Clichy, par un marinier.",
    "paragraphs": [
      "Hier matin, à dix heures, en aval du pont de Clichy, un marinier a repêché le corps d'un homme soigneusement vêtu. À l'aide des papiers trouvés dans les poches du malheureux, son identité a été établie ; c'était un nommé Louis Muller, âgé de trente-sept ans, marié et père de famille, employé dans une maison de commerce de la rue du Sentier."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Suicide d'un charretier à Pantin",
    "summary": "Henri Courtois, un charretier de quarante-quatre ans, s'est donné la mort en se jetant sous les roues d'un train à Pantin, au lendemain de son expulsion.",
    "paragraphs": [
      "L'identité du malheureux trouvé mort sur la ligne des trains-tramways a été établie : c'était un charretier, âgé de quarante-quatre ans, nommé Henri Courtois, marié et père de six enfants, qui, la veille, venait d'être expulsé de son domicile.",
      "Désespéré, Courtois avait quitté sa femme et pris la résolution de mourir en se jetant sous les roues d'un train."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Drame familial à La Varenne-Chennevières",
    "summary": "Une imprudence avec un revolver a causé la blessure grave de Mme Bryau. Son mari, croyant l'avoir tuée par mégarde, a failli attenter à ses jours avant d'être désarmé.",
    "paragraphs": [
      "M. Bryau, propriétaire, recevait hier à dîner un ami. Au moment du départ, cet ami demanda à son hôte de lui prêter un revolver pour traverser le bois de Vincennes.",
      "M. Bryau lui tendit une arme qu'il croyait déchargée mais, en pressant sur la détente, une détonation retentit et un projectile atteignit Mme Bryau à la poitrine, la blessant grièvement.",
      "M. Bryau, croyant avoir tué sa femme, tourna l'arme contre sa propre poitrine et allait faire feu, quand son ami se jeta sur lui et parvint à le désarmer."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Suicide à Ivry",
    "summary": "Le corps de Joachim Beaublat, journalier âgé de quarante ans, a été retrouvé sans vie dans son logement à Ivry, asphyxié par les émanations d'un réchaud de charbon.",
    "paragraphs": [
      "La concierge de l'immeuble sis au 1, rue de Seine, à Ivry, a alerté le commissaire de police après avoir constaté l'absence prolongée de son locataire, Joachim Beaublat, journalier âgé de quarante ans.",
      "Le commissaire, en pénétrant dans le logement, a trouvé le cadavre étendu sur le lit. Le malheureux s'était donné la mort à l'aide d'un réchaud de charbon allumé."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Incendie à Chatou",
    "summary": "Un incendie domestique causé par le renversement accidentel d'une lampe à essence a ravagé l'appartement du journalier Barthélémy Aubry à Chatou, avant d'être maîtrisé par les pompiers après une heure d'efforts.",
    "paragraphs": [
      "La nuit dernière, un journalier, M. Barthélémy Aubry, a accidentellement mis le feu à son appartement en faisant tomber une lampe à essence. M. Aubry n'eut que le temps de se sauver. Grâce à la prompte arrivée des pompiers, on parvint, après une heure d'efforts, à éteindre cet incendie."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Cambriolage à Marly-le-Roi",
    "summary": "Des malfaiteurs ont pénétré au domicile des époux Boivin, au hameau de Montval, et ont dérobé une importante quantité de bijoux ainsi qu'une somme de 500 francs pendant l'absence des propriétaires.",
    "paragraphs": [
      "Pendant l'absence des époux Boivin, des malfaiteurs se sont introduits dans leur propriété, 10, Grande-Rue, au hameau de Montval. Ils ont fait main basse sur une somme d'environ 500 francs, des montres et chaînes en or, des broches, boucles d'oreilles et autres bijoux représentant une valeur importante."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident d'enfant à Ivry",
    "summary": "Le jeune Ernest Brujon, âgé de trois ans, a été grièvement blessé à Ivry après avoir été renversé par un lourd camion attelé de deux chevaux alors qu'il sortait d'un débit de tabac.",
    "paragraphs": [
      "Le jeune Ernest Brujon, âgé de trois ans, qui sortait d'un débit de tabac, a été renversé par un camion attelé de deux chevaux. Les roues du lourd véhicule ont passé sur les jambes du bambin, qui a été relevé affreusement blessé."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Suicide d'une institutrice à Pontoise",
    "summary": "Mme Céline R., institutrice à La Bonneville, a mis fin à ses jours par asphyxie au charbon. Des lettres découvertes sur les lieux indiquent que des pertes financières importantes aux courses l'ont poussée au désespoir.",
    "paragraphs": [
      "Mme Céline R., institutrice au hameau de La Bonneville, s'est asphyxiée hier matin dans sa chambre à l'aide d'un réchaud de charbon. Elle avait laissé des lettres expliquant que des pertes importantes aux courses l'auraient poussée au suicide."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Littérature",
    "title": "À travers l'Exposition",
    "summary": "La Librairie Fayard publie 'À travers l'Exposition de 1900', un volume de luxe signé G. de Witilly, richement illustré, offrant une vue d'ensemble essentielle sur l'Exposition universelle pour 50 centimes.",
    "paragraphs": [
      "Le joli volume intitulé 'À travers l'Exposition de 1900', signé G. de Witilly, contient le premier épisode d'un récit captivant. En le parcourant, vous trouverez toutes les notions générales qu'il faut posséder sur l'Exposition.",
      "Ce volume ravissant, vendu 50 centimes par la Librairie Fayard, est imprimé sur papier de luxe et illustré à profusion. C'est le couronnement de toute l'évolution de la librairie."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Départements",
    "title": "Nouvelles des départements",
    "summary": "Une série de drames et d'accidents mortels endeuille les départements, touchant des ouvriers et des travailleurs dans l'Oise, de Beauvais à Montdidier.",
    "paragraphs": [
      "Beauvais : Léon Christophe, ouvrier maçon, victime d'une tentative de meurtre il y a huit jours, est mort à l'hôpital des suites de ses blessures.",
      "Chantilly : Un jeune palefrenier nommé Cwalosinski est décédé après une chute de cheval qui lui a fracturé le crâne.",
      "Clermont-sur-Oise : Une tentative de déraillement a été commise près de la gare de Bavenel par la pose d'une borne kilométrique sur la voie. Le train n'a pas déraillé, mais a ressenti une violente secousse.",
      "Breteuil : Victor Hinault, aiguilleur, a été tué hier soir par un train de marchandises dans des circonstances tragiques.",
      "Villers-Cotterêts : Le sieur Prosper Trichet, voiturier, a été trouvé mort sur la route de Montgobert, écrasé par sa propre voiture.",
      "Montdidier : Le nommé Prudent Quignon est mort accidentellement en tombant de son siège de chariot, les roues lui ayant passé sur le corps."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Programmes et nouvelles théâtrales",
    "summary": "Actualité des scènes parisiennes : reprise de 'Véronique' aux Bouffes-Parisiens et nouveaux spectacles annoncés à l'Odéon ainsi qu'à l'Ambigu.",
    "paragraphs": [
      "Aux Bouffes-Parisiens, reprise de « Véronique ». À l'Odéon, le drame en vers de M. Auguste Dorchain, « Vers l'Amour », sera représenté cette saison. « Mam'selle Bon-Cœur » remplacera « Cogne-Dur » à l'Ambigu."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Sports",
    "title": "Courses de Colombes et autres nouvelles",
    "summary": "Succès de la réunion hippique de Colombes. Les préparatifs sportifs s'intensifient, notamment pour le record Paris-Madrid et l'organisation de la Coupe Bennett.",
    "paragraphs": [
      "La réunion de Colombes a connu un véritable succès. Les résultats des prix (Vaimy II, Vilna, Nanssens, Chocolat, Edison II) sont détaillés.",
      "Actualités sportives : Les motocyclistes Enrique Marac et Bétonnais sont en route pour le record Paris-Madrid. Réunion ce soir de la commission pour la Coupe Bennett."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Bulletin Financier",
    "title": "Situation économique et boursière",
    "summary": "La tension diplomatique entre les Boërs et l'Angleterre pèse sur les cours de la Bourse, provoquant une réaction marquée sur les mines d'or, sans toutefois engendrer de panique.",
    "paragraphs": [
      "La tension entre les Boërs et l'Angleterre influence les cours de la Bourse. Cependant, la baisse n'a pas pris l'allure d'une panique. Les mines d'or accusent une réaction importante."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Revenant",
    "summary": "Le récit du retour de Bareste, ses tourments liés à son passé secret et la résolution des magistrats concernant la rectification d'état civil, concluant sur un voyage en Italie.",
    "paragraphs": [
      "Le Rougeaud. Devait-il réveiller André, lui apprendre la bonne nouvelle ou, plutôt, le laisser tranquillement reposer ? Mais bien vite, il prit une résolution. Bah ! Pourquoi retarder jusqu'au lendemain le bonheur immense qu'il causerait à son bon fils ? Ah, il ne lui en voudrait pas de l'avoir réveillé, certes.",
      "Et grimpant l'escalier quatre à quatre, il s'arrêta devant la porte du jeune homme, tourna le bouton et entra. Réveillé en sursaut par la bougie que son père venait d'allumer, le dormeur ouvrit les yeux, et reconnaissant Bareste, s'écria : « Comment, toi, père ? Tu arrives, et tu ne nous as même pas télégraphié d'aller te chercher en voiture ? Ce n'est pas gentil. »",
      "Puis, tout éveillé maintenant, voyant la mine épanouie de l'artiste qui le regardait tout heureux : « Ah çà, qu'as-tu donc ? Tu as un air enchanté, radieux, que je ne t'ai pas vu depuis longtemps ! Allons, voyons, parle ! » « Ouf, mon garçon », s'écria Bareste, « le contrat, c'est demain le contrat. Eh bien, on ne le signera pas, voilà tout. »",
      "Mais en prononçant ce nom de Barentin, Bareste venait de tressaillir. Il se rappelait à présent. Ce nom était celui du malheureux auquel il avait volé sa part de sépulture et qui reposait là-bas, depuis plus de dix-neuf ans, dans le petit cimetière de Plouvara sous le nom du comte Jean de Kergomeur. Heureusement, dans l'excès de sa joie, André n'avait rien remarqué.",
      "Le soir même, ainsi que cela avait été convenu, en présence du notaire, du juge d'instruction et du procureur de la République, Bareste raconta l'aventure invraisemblable mais véridique cependant, qui lui était arrivée. Il montra le portefeuille. Les magistrats prirent connaissance des papiers qu'il renfermait et, obligés de se rendre à l'évidence, ils conclurent qu'une rectification d'état civil s'imposait.",
      "Le voyage des quatre nouveaux mariés qui devait durer un mois se prolongea jusqu'à fin février. Ils étaient en Italie, et l'Italie est si captivante, si belle. D'ailleurs, Simonne elle-même, Simonne à qui le temps durait bien de revoir ses enfants, cependant, les y engagea.",
      "Faisant un détour, on alla jusqu'à Volandry embrasser Simonne, le vieil abbé Martial et aussi le brave garde Jean-Marie."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Informations Commerciales",
    "title": "Cours des Pommes de terre",
    "summary": "Le marché parisien des pommes de terre affiche un ralentissement ce 11 octobre. Les négociants, prudents, n'acceptent d'acheter qu'à prix réduits, malgré quelques belles variétés maintenant leurs cours.",
    "paragraphs": [
      "Paris, 11 octobre. Les affaires étaient beaucoup moins faciles aujourd'hui qu'il y a huit jours ; les offres étaient assez nombreuses, mais les négociants parisiens paraissaient peu empressés aux achats et ils ne voulaient traiter qu'avec des concessions.",
      "La belle Hollande de choix obtenait encore 75 fr., mais en marchandise courante on vendait de 65 à 70 fr. ; on a même cédé quelques wagons au-dessous de 65 fr. La rouge de choix du Gâtinais a obtenu exceptionnellement 75 fr. ; en marchandise ordinaire on a obtenu 55 fr. et, sur la fin du marché, les acheteurs ne voulaient pas payer plus de 52 ou 53 fr.",
      "La ronde hâtive valait 55 fr., la Parly rosé de 45 à 50 fr., la Magnum Bonum autour de 44 fr. et l'Imperator de 40 à 45 fr."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Marchés",
    "title": "Halle au Blé",
    "summary": "À la Halle au Blé de Paris, le marché des blés indigènes demeure ferme face à des transactions difficiles. Les cours restent stables pour les variétés blanches et rousses ainsi que pour les issues.",
    "paragraphs": [
      "Blés. Offres ordinaires en blés indigènes et prix tenus plus fermes par suite d'affaires très difficiles ; les prix sont restés sensiblement les mêmes. Les blés blancs étaient cotés de 26 à 27 fr. et les roux de 25 à 26 fr. les 100 kilos gare Paris, ou rendus dans les usines.",
      "Issues. On cote : gros son, 50 fr. ; issues, de 12,50 à 12,75 fr. ; recoupes, de 12 à 14 fr. les 100 kilos, gare Paris."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Informations Maritimes",
    "title": "Départs et Arrivées des Paquebots",
    "summary": "Mouvements maritimes du 10 octobre : le paquebot Ernest Simon est arrivé à Marseille, tandis que les navires Caminha, Pompona et Amiral-Baudin ont atteint leurs destinations respectives au Havre et à Dunkerque.",
    "paragraphs": [
      "Le paquebot Ernest Simon (M.M.), venant de l'Indo-Chine, est arrivé à Marseille le 10 octobre, à 11 heures du matin.",
      "Le navire Caminha (C.R.), venant du Havre, est arrivé à Rio-Janeiro le 8. Le Pompona (C.R.), venant de La Plata via Ténériffe, est arrivé à Dunkerque le 8, en route pour le Havre.",
      "L'Amiral-Baudin (C.R.), venant de Santa-Rosalia via Coronel, Saint-Vincent, Buenos-Ayres, Montevideo, Avonmouth, Cardiff et Dunkerque, est arrivé au Havre le 10 octobre."
    ]
  }
];
