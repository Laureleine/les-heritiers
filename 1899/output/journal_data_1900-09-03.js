// Date: 1900-09-03
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-09-03 (Version Restaurée, 35 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La France et l'esclavage",
    "summary": "La France, pionnière de l'abolition, poursuit sa mission civilisatrice en Afrique. Par l'établissement de villages de liberté, elle s'efforce d'assurer l'émancipation matérielle et morale des populations asservies.",
    "paragraphs": [
      "La France a joué, au XIXe siècle, dans l'histoire de l'émancipation des esclaves, un rôle important et souvent décisif. C'est elle qui, la première, il y a plus d'un siècle, au temps de la Convention, a proclamé leur droit à la liberté ; c'est elle aussi qui, cinquante-quatre ans après, leur a permis de l'exercer.",
      "Ce rôle dans le passé doit régler sa conduite dans l'avenir, car l'œuvre à laquelle elle s'est ainsi consacrée n'est pas encore terminée. La traite, il est vrai, a presque disparu, mais il reste pourtant des esclaves et des marchands d'esclaves.",
      "Grande puissance africaine, la France a, de ce fait, une mission à remplir. L'Algérie, le Sénégal, la Guinée, le Soudan, le Congo, Obock et Madagascar nous offrent, sur différents points, une base solide d'opérations pour lutter contre ces pratiques.",
      "Il faut d'abord — c'est, de tous les remèdes, le plus efficace — soumettre à une surveillance effective les territoires que la diplomatie nous a concédés. Mais ce n'est pas assez que de créer de nouveaux postes militaires ; il faut doubler chacun d'eux d'un « village de liberté » destiné à recevoir les esclaves fugitifs.",
      "Le village de liberté est, d'ailleurs, plus qu'un refuge. Après avoir servi à l'émancipation matérielle du nègre, il peut et doit devenir l'instrument de son émancipation intellectuelle et morale.",
      "Telle est, aujourd'hui, la forme que doit prendre l'effort de la France dans sa lutte contre l'esclavage. Donner la liberté à ceux qui en sont encore privés, en apprendre l'usage à ceux qui l'ont reçue : ce sont les deux parties indissolubles de l'œuvre qui s'impose à nous."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "La fin de Mme Hélène Vernier (Deuxième partie)",
    "summary": "À la maison de santé de Saint-Mandé, une surveillante invite Hélène Vernier à profiter du grand air. Peu après, son époux, André, arrive, en proie à une vive anxiété concernant l'état de santé de son épouse.",
    "paragraphs": [
      "« Voyez, madame, il fait beau aujourd'hui, nous allons sortir un peu. Par un si charmant soleil, ce serait dommage de rester enfermée. » Une des surveillantes de la maison de santé du docteur Berniatte, le visage avenant, venait d'apparaître dans la chambre d'Hélène Vernier.",
      "La maison, située à Saint-Mandé, en un coin du bois, était isolée. Hélène, allongée dans un fauteuil, semblait heureuse de contempler les jolies choses miroitantes.",
      "Plus tard, le mari d'Hélène, André Vernier, industriel, se présenta à la maison de santé. Dévoré par l'inquiétude, rongé par l'impatience, il était venu pour surprendre sa femme et se rendre compte de visu que son état ne s'était pas aggravé."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Actualité Coloniale",
    "title": "L'arrivée de l'explorateur Foureau à Marseille",
    "summary": "L'explorateur Foureau, fraîchement débarqué à Marseille, a été décoré de la Légion d'honneur. Il s'est exprimé sur la situation dans la région de Zinder, affirmant que l'influence française demeure intacte.",
    "paragraphs": [
      "Le paquebot Marne, ayant à bord l'explorateur Foureau, accompagné de son secrétaire M. Villatto, est arrivé à Marseille ce matin. M. Liard, directeur de l'enseignement supérieur, s'est aussitôt rendu à bord pour saluer l'intrépide explorateur et lui annoncer sa nomination au grade d'officier de la Légion d'honneur.",
      "Au cours d'un entretien, M. Foureau a évoqué le drame de Zinder. Il a précisé que la nouvelle lui avait été transmise par des messagers du lieutenant Pallier, qui le priait de hâter son arrivée pour prendre la direction de sa mission avec le commandant Lamy.",
      "Interrogé sur le mystère qui enveloppe ce drame, M. Foureau a déclaré qu'il s'agissait d'une question délicate relevant de l'enquête militaire. Il a cependant souligné que l'influence française dans la région n'avait pas été affectée par cet événement."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "Nouvelles du front",
    "summary": "Dépêches de septembre 1899 : les forces Boers multiplient les sabotages ferroviaires, tandis que le général Buller progresse vers Lydenburg et que la situation des troupes britanniques reste tendue.",
    "paragraphs": [
      "Prétoria, 1er septembre : Les éclaireurs de Théron ont coupé la voie ferrée à la gare de Klip River et ont brûlé un train composé de vingt-huit wagons.",
      "Badfontein, 1er septembre : Le général Buller s'est avancé hier de quatorze milles dans la direction de Lydenburg et a traversé le fleuve Crocodile.",
      "Prétoria, 1er septembre : Le général Baden-Powell a sommé le général Grobler de se rendre. Le bruit court que le président Kruger s'est réfugié à Pietersburg."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le Palais de justice de Troyes cambriolé",
    "summary": "Un cambriolage audacieux a été perpétré au greffe du tribunal de Troyes. Des malfaiteurs, manifestement bien renseignés, ont dérobé plus de 4 000 francs après avoir forcé un coffre-fort.",
    "paragraphs": [
      "Un vol important vient d'être commis au greffe du tribunal de Troyes. Les voleurs se sont introduits en escaladant le mur de la rue Claude-Huez, puis ont ouvert le greffe à l'aide d'une fausse clef.",
      "Dans la pièce où le greffier, M. Hullin, détient les pièces à conviction, ils ont forcé un coffre-fort et se sont emparés d'une somme de 4 274 francs 80 en billets, or et billon. Les bijoux et autres valeurs n'ont pas été dérobés, ce qui suggère une opération menée par des individus au courant des lieux.",
      "Le parquet procède à une enquête confiée à M. Boulange. Ce n'est pas la première fois que de semblables faits se produisent au Palais de Justice de Troyes."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Armée",
    "title": "Les manœuvres du 6e corps d'armée",
    "summary": "Sous le commandement du général Hagron, le 6e corps d'armée, regroupant diverses garnisons, effectue ses manœuvres d'automne du 10 au 21 septembre avec la participation des troupes de réserve.",
    "paragraphs": [
      "Les manœuvres d'automne du 6e corps d'armée auront lieu sous le commandement en chef du général Hagron. Les troupes viendront de diverses garnisons, notamment Mézières, Reims, Longwy, Sedan et Givet.",
      "Les manœuvres proprement dites se dérouleront du 10 au 21 septembre, date de la dislocation. Les troupes de réserve convoquées pour l'année prendront part à l'ensemble de ces exercices."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le crime de la Croix-Barret : aveux de Dulac",
    "summary": "Dulac, l'assassin de la jeune Adèle Brugeron, a formulé des aveux complets devant M. Colin, chef de la sûreté, reconnaissant avoir commis son crime dans un accès de folie.",
    "paragraphs": [
      "Dulac, l'assassin présumé de la jeune Adèle Brugeron, a fini par faire des aveux complets. Il a déclaré au chef de la sûreté, M. Colin, avoir étouffé la jeune fille dans un accès de folie, avant de tenter de dissimuler le cadavre.",
      "Les déclarations de Dulac confirment les soupçons des enquêteurs. L'instruction sera bientôt close, l'avocat de l'inculpé ayant été convoqué pour assister son client."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Politique Internationale",
    "title": "Événements de Chine",
    "summary": "La situation en Mandchourie progresse avec l'occupation russe de Tsitsikar. À Pékin, les opérations militaires sont suspendues dans l'attente de négociations, tandis qu'un massacre est signalé au Sud.",
    "paragraphs": [
      "Aucune dépêche relatant des faits de guerre n'a été reçue hier, si ce n'est concernant la Mandchourie, où les Russes poursuivent leur marche. Il est annoncé qu'un détachement de Cosaques occupe, depuis le 23 août, la ville de Tsitsikar.",
      "À Pékin, les opérations militaires sont suspendues. On croit que les puissances sont disposées à retirer leurs troupes afin de hâter l'ouverture des négociations.",
      "D'autre part, des nouvelles inquiétantes parviennent du Sud : le missionnaire Alberico Crescitelli aurait été massacré d'une façon barbare et la mission entière serait en péril."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "La situation en Chine et l'évacuation de Pékin",
    "summary": "Les puissances occidentales envisagent un retrait concerté de Pékin. Si la Russie semble prête à agir, les États-Unis privilégient une solution diplomatique pour éviter une occupation prolongée.",
    "paragraphs": [
      "On ne s'attend cependant pas à une rupture. On croit, en effet, que si les autres puissances se décident à retirer leurs troupes de Pékin, l'Allemagne fera de même, et l'Italie suivra son exemple, de telle sorte que la décision sera unanime.",
      "Un fonctionnaire bien renseigné déclare notamment que la Russie ne tardera pas à mettre son intention à exécution et à retirer ses troupes, quelle que soit la réponse des autres puissances.",
      "Plusieurs journaux américains se prononcent en faveur de la proposition du gouvernement russe concernant le transport à Tien-Tsin des légations étrangères, sous l'escorte des détachements du corps expéditionnaire ; ils croient que cette proposition sera acceptée, au moins conditionnellement, par le gouvernement des États-Unis.",
      "Le New-York Herald écrit que le programme du gouvernement fédéral en Chine était si large et si complexe qu'il aurait pu amener une occupation de Pékin pendant de longues années. Cela ne servirait que les intérêts des chercheurs de concessions, des banquiers et des missionnaires, mais non ceux du peuple américain, qui accueillera favorablement toute issue à une situation si compliquée."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Diplomatie",
    "title": "La position de la France",
    "summary": "La France a fait savoir hier qu'elle s'aligne sur la position des États-Unis concernant les propositions de paix formulées par Li-Hong-Chang les 19 et 20 août derniers.",
    "paragraphs": [
      "La communication reçue hier de la France ne portait pas sur l'évacuation de Pékin. La France y déclarait qu'elle était de l'avis des États-Unis en ce qui concerne les propositions de paix formulées les 19 et 20 août par Li-Hong-Chang."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Manœuvres et mouvements de troupes",
    "summary": "Dans la vallée de l'Aube, le général de Belvoist dirige d'importantes manœuvres de cavalerie, tandis que l'École militaire de Saint-Maixent entame sa campagne de tir au camp du Ruchard.",
    "paragraphs": [
      "Dans la vallée de l'Aube, d'intéressantes manœuvres de cavalerie ont lieu entre Brienne et Arcis, sous la haute direction du général de Belvoist. Le terrain se prête à merveille aux grandes évolutions, et les officiers généraux se montrent très satisfaits.",
      "L'École militaire a quitté Saint-Maixent aujourd'hui par train spécial. Comme les années précédentes, les élèves officiers vont au camp du Ruchard exécuter des tirs à longue portée. L'École rentrera à Saint-Maixent le 10 septembre.",
      "Au cours de la session du conseil général du département de la Creuse, l'autorité militaire a décidé de supprimer les manœuvres. Pour les réservistes, de simples manœuvres de garnison auront lieu aux environs de Guéret."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Social",
    "title": "Les grèves des ports",
    "summary": "La situation sociale dans les ports français évolue : apaisement en vue à Marseille, tension persistante au Havre avec une menace de grève générale, et reprise progressive du travail à Dunkerque.",
    "paragraphs": [
      "À Marseille, la matinée a été calme. Une affiche des patrons camionneurs, signée par 300 d'entre eux sur 312, offre aux grévistes d'accepter toutes leurs propositions s'ils consentent à reprendre le travail demain.",
      "Au Havre, hier soir a eu lieu une réunion où MM. Henau, Marck et Laville ont préconisé la grève générale. M. Bouteleux, maire de Graville, a pris un arrêté interdisant tout attroupement sur la voie publique.",
      "À Dunkerque, les conventions entre les délégués des ouvriers du port et les patrons ont été signées. Le travail reprendra lundi, bien que les maçons, terrassiers et charpentiers de navire restent en grève."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Régions",
    "title": "Les fêtes bretonnes à Guingamp",
    "summary": "Les fêtes de Guingamp célèbrent la culture bretonne à travers le théâtre et la poésie. Les congressistes appellent à l'usage du dialecte local pour l'instruction et la promotion de valeurs morales.",
    "paragraphs": [
      "La seconde journée des fêtes de Guingamp a été marquée par la représentation du Mystère des Quatre Fils Aymon. Nos congressistes ont décidé de mettre au concours pour l'année prochaine une pièce bretonne visant à combattre l'alcoolisme et l'émigration.",
      "Une autre idée émise est de faire interpréter par des acteurs populaires des œuvres classiques de Racine, Corneille et Molière. Un vœu a également été transmis au conseil supérieur de l'instruction primaire pour l'utilisation du dialecte local dans l'enseignement du français en Bretagne.",
      "La séance a été clôturée par des récitals de poètes locaux et un banquet en l'honneur de la patrie de Chateaubriand et Brizeux."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Sports",
    "title": "Fête de gymnastique de Vincennes",
    "summary": "Le ministre de la Guerre a présidé la grande fête de gymnastique de Vincennes, annonçant l'instauration d'un brevet sportif facilitant les engagements volontaires au sein de l'armée.",
    "paragraphs": [
      "La grande fête de gymnastique au vélodrome municipal de Vincennes a réuni dix mille spectateurs sous la présidence du général André, ministre de la Guerre.",
      "Dès le matin, des concours individuels et de sociétés ont eu lieu. L'après-midi, la revue des cinquante-trois sociétés associées a été suivie d'exercices variés incluant la boxe et le bâton, avec une brillante prestation de l'École de Joinville-le-Pont.",
      "Le ministre a annoncé la création d'un brevet de gymnastique permettant aux gymnastes de contracter des engagements volontaires de trois ans dans l'armée."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "L'Exposition universelle et les fêtes horticoles",
    "summary": "Malgré un temps maussade, le succès de l'Exposition universelle se confirme. Les préparatifs pour la fête de l'Horticulture promettent un cortège spectaculaire au Champ-de-Mars.",
    "paragraphs": [
      "Malgré le temps incertain, les visiteurs ont afflué à l'Exposition. Les chanteurs de la chorale de Claves ont remporté un franc succès avec leurs costumes catalans.",
      "La fête de l'Horticulture se prépare avec un programme somptueux. Un cortège partira de la salle des fêtes de la galerie des Machines, incluant des chars fleuris, des représentations de métiers agricoles et des spécialités coloniales. Les chefs-d'œuvre seront exposés durant trois jours au Champ-de-Mars."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique",
    "title": "M. Caillaux à La Ferté-Bernard",
    "summary": "M. Caillaux, ministre des Finances, a présidé avec solennité le banquet du comice agricole de La Ferté-Bernard et l'inauguration d'un monument aux morts, célébrant la grandeur du patriotisme français.",
    "paragraphs": [
      "M. Caillaux, ministre des Finances, a présidé le banquet du comice agricole et l'inauguration d'un monument aux morts à La Ferté-Bernard.",
      "Dans son discours, le ministre a défini le patriotisme comme un sentiment grave qui ne doit point s'éparpiller en vains engouements passagers. Plusieurs distinctions, dont les palmes académiques et les médailles du Mérite agricole, ont été remises avec honneur à cette occasion."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident de tramway à Paris",
    "summary": "L'état de M. Jean Petit, blessé lors d'un accident de tramway boulevard de Sébastopol, s'améliore tandis que la justice enquête sur la conduite du mécanicien.",
    "paragraphs": [
      "L'état de M. Jean Petit, blessé lors de l'accident de tramway sur le boulevard de Sébastopol, est en voie d'amélioration. M. Lamé, commissaire de police, poursuit activement son enquête sur la responsabilité du mécanicien Paul Doues, qui n'aurait pas respecté les distances de sécurité réglementaires en vigueur."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Histoire et Sciences",
    "title": "Les pierres étranges de Carnac",
    "summary": "De nouvelles fouilles archéologiques menées par MM. Kérisel et d'Ault du Mesnil à Carnac ont révélé un dolmen inédit, témoignant de la richesse des nécropoles mégalithiques de la région.",
    "paragraphs": [
      "Les fouilles dirigées par M. Kérisel et M. d'Ault du Mesnil à Carnac ont permis la découverte d'un nouveau dolmen. Ces monuments mégalithiques, menhirs et cromlechs, forment une nécropole d'une importance capitale. Si la légende populaire y voit une armée métamorphosée par saint Cornély, les savants y reconnaissent des lieux de sépulture ou de culte ancestral."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident à Waisnes et drame conjugal",
    "summary": "Une explosion de fulmicoton à Waisnes a provoqué des blessures graves chez trois ouvriers, tandis qu'un parricide conjugal frappe Paris, menant à une expertise psychiatrique immédiate.",
    "paragraphs": [
      "À Waisnes, près de Mons, trois ouvriers ont été grièvement blessés à la suite d'une violente explosion de fulmicoton survenue dans un atelier.",
      "Un drame conjugal s'est déroulé à Paris, où une femme a été décapitée par son mari. L'homme, immédiatement arrêté, a allégué dans son trouble que son épouse l'aurait contraint à se donner la mort. Son état mental fera l'objet d'un examen approfondi par les autorités judiciaires."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Feuilleton",
    "title": "Les secrets du maître de forges",
    "summary": "Vernier, le maître de forges, découvre avec effroi que son épouse Hélène nourrit un amour clandestin pour un mystérieux René, plongeant son esprit tourmenté dans une indicible douleur.",
    "paragraphs": [
      "Vernier, le maître de forges, visite un établissement pour voir son épouse Hélène. Il découvre avec angoisse qu'elle trace le nom de 'René' sur le sable, réalisant avec stupeur qu'elle cachait un amour secret dont il ignorait tout jusqu'alors.",
      "Il tente de reprendre contenance devant la surveillante, mais son cœur est déchiré par cette révélation, qui éclaire d'un jour nouveau la mélancolie et l'instabilité de la jeune femme."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Exposition Universelle",
    "title": "Concours hippique de l'Exposition",
    "summary": "Le concours hippique de l'Exposition Universelle se poursuit sous la direction de M. Mazen. Le jury entamera ses délibérations mardi pour attribuer les prix, sous la présidence de M. Jean Dupuy.",
    "paragraphs": [
      "Les écuries nationales de Turquie, d'Autriche, d'Angleterre, d'Allemagne, de Belgique, de Hongrie et des Pays-Bas sont représentées au sein des haras nationaux.",
      "Dans la troisième partie de la grande enceinte, en bordure de la route de Charenton, se trouvent les juments et pouliches boulonnaises, les étalons percherons, ainsi que les étalons et pouliches bretonnes.",
      "L'administration de cette exposition est confiée à M. Mazen, directeur de l'administration des haras, assisté de MM. de Launey, Billouin, Portails, Hornez, Ollivier, Chambry et de Saunac. Le secrétariat général est assuré par M. d'Agnel du Bourbon, secondé par MM. Gentil et Guillemot.",
      "Les sections française et russe ont été particulièrement visitées hier. Le jury entamera ses opérations mardi matin pour les terminer jeudi, date probable de la distribution des récompenses sous la présidence de M. Jean Dupuy, ministre de l'Agriculture."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Arrivée de M. de Witte à Paris",
    "summary": "M. de Witte, ministre des Finances de Russie, est arrivé hier matin à Paris par l'express de Saint-Pétersbourg. Ce voyage n'a aucun lien avec des tractations financières selon l'agence Havas.",
    "paragraphs": [
      "M. de Witte, ministre des Finances de Russie, est arrivé hier matin en gare du Nord par l'express de 8h24 venant de Saint-Pétersbourg.",
      "L'agence Havas précise que ce voyage n'a aucun rapport avec une transaction financière, les ressources du trésor russe suffisant amplement aux opérations en Chine."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Inauguration du monument à l'amiral Bouvet",
    "summary": "La ville de Saint-Servan a inauguré hier le monument à la mémoire de l'amiral Pierre Bouvet. La cérémonie, présidée par l'amiral de Barbeyrac, a rendu hommage au célèbre marin des campagnes napoléoniennes.",
    "paragraphs": [
      "La ville de Saint-Servan a inauguré hier le monument érigé à la mémoire de l'amiral Pierre Bouvet, marin illustre né en 1775 à l'île Bourbon.",
      "La cérémonie, présidée par l'amiral de Barbeyrac, a été marquée par une foule nombreuse malgré une pluie battante. Le monument, œuvre de M. Pierre Ogé et de l'architecte Victor Prioul, rend hommage à ce héros des campagnes napoléoniennes."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Tribunaux",
    "title": "Brutale agression dans le quartier des Buttes-Chaumont",
    "summary": "Le tribunal correctionnel a condamné Dorez et Kremer pour l'agression des frères Winkler. Kremer, auteur d'un coup de couteau, écope de deux ans de prison, tandis que Dorez est condamné à huit mois.",
    "paragraphs": [
      "Dorez et Kremer comparaissaient devant le tribunal correctionnel pour avoir agressé, sans motif, François Winkler et son frère Gustave après un dîner.",
      "François Winkler a été atteint d'un coup de couteau près du cœur par Kremer. Le tribunal a condamné Dorez à huit mois de prison et Kremer à deux ans de prison assortis d'une interdiction de séjour."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "Anniversaire de l'Union compagnonnique",
    "summary": "L'Union compagnonnique a célébré son onzième anniversaire au Salon des Familles. M. Richard, délégué ministériel, a salué les œuvres sociales de l'organisation et l'ouverture de son orphelinat à Nantes.",
    "paragraphs": [
      "L'Union compagnonnique a célébré son onzième anniversaire hier lors d'une fête au Salon des Familles, célébrant également la médaille d'or obtenue à l'Exposition.",
      "La cérémonie était présidée par M. Richard, représentant le ministre Millerand. Les discours ont salué l'œuvre humanitaire et sociale de l'organisation, notamment la création d'un orphelinat à Nantes."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame familial à Briey",
    "summary": "À Briey, une tragédie domestique a été découverte par un huissier : les époux Parmentier et leurs enfants ont été retrouvés sans vie, victimes d'une asphyxie dans leur domicile.",
    "paragraphs": [
      "Le parquet a ouvert une enquête sur l'asphyxie de la famille Parmentier. C'est un huissier, M. Heyden, venu pratiquer une saisie, qui a découvert les corps des époux et de leurs enfants étendus sur leur lit."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort accidentelle dans un puits à la Plaine Saint-Denis",
    "summary": "Un terrible accident a coûté la vie à une jeune domestique de 18 ans, Ernestine Garrot, tombée dans un puits à la Plaine Saint-Denis malgré l'intervention vaine d'un forgeron.",
    "paragraphs": [
      "Ernestine Garrot, une domestique de 18 ans, est tombée dans un puits en allant puiser de l'eau. Malgré les tentatives de sauvetage d'un forgeron, M. Désiré Fresnel, la jeune fille est décédée asphyxiée et blessée au crâne."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Meurtre par un enfant à Montmartre",
    "summary": "À Montmartre, une dispute pour quatre sous a viré au drame : un garçon de 12 ans a poignardé à la cuisse un enfant de 11 ans, Jean-Jacques Rousseau. Le coupable est aux mains de la police.",
    "paragraphs": [
      "Le jeune Jean-Jacques Rousseau, 11 ans, a été poignardé à la cuisse par un garçon de 12 ans surnommé « Chocolat » lors d'une rixe pour quatre sous. Le blessé a été transporté à la pharmacie et le coupable mis à la disposition de la police."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Sport",
    "title": "Résultats sportifs et courses",
    "summary": "Le cycliste Constant Huret pulvérise le record du monde des 25 kilomètres au Parc des Princes. Parallèlement, l'actualité hippique au Bois-de-Boulogne est marquée par les succès d'Eryx et d'Aigle Royal.",
    "paragraphs": [
      "Au Parc des Princes, le coureur Constant Huret a battu le record du monde des 25 kilomètres. À Conflans-Fin-d'Oise, la course pédestre Marathon-revanche a été remportée par Totiquet-Dannis.",
      "Concernant les courses hippiques au Bois-de-Boulogne, les épreuves de deux ans ont mis en évidence Eryx et Mésaventure, tandis qu'Aigle Royal s'est imposé dans le prix de Chantilly."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Économie",
    "title": "La situation boursière et financière",
    "summary": "Le marché boursier affiche une confiance robuste malgré des incertitudes à l'étranger. La rentrée financière est marquée par une hausse des fonds nationaux, notamment l'Amortissable et les emprunts coloniaux.",
    "paragraphs": [
      "Grâce à l'Exposition, les vacances auront été cette année plus courtes que d'habitude. Jusqu'au 15 juillet, la Bourse avait conservé son animation et septembre commence à peine que déjà l'on sent approcher le moment de la rentrée.",
      "Notre marché paraît être entièrement dégagé de toute position dangereuse, l'argent est plus abondant que jamais et les esprits sont pleins de confiance dans l'avenir. Toutefois, la spéculation fera bien de ne pas oublier que la situation des places étrangères est moins nette que la nôtre : la crise des valeurs industrielles en Allemagne est loin d'être terminée.",
      "Bruxelles conserve encore de gros engagements à liquider et l'on peut craindre de voir l'argent se resserrer à Londres vers la fin de l'année.",
      "La semaine a été meilleure encore que les précédentes pour nos fonds nationaux. Les transactions à terme ont retrouvé quelque ampleur et les cours, escomptant l'avenir, commencent à prendre de l'avance sur ceux du comptant.",
      "L'Amortissable a retrouvé le pair et le 3 1/2 % s'est avancé de 40, ce qui est encore bon marché pour un placement de cet ordre.",
      "Les divers emprunts coloniaux ont été moins négligés que par le passé. L'Extérieure commence à sortir de sa longue torpeur ; elle s'est avancée de 72 72 à 78 62. Le projet de convenio a été signé par le gouvernement espagnol.",
      "La Rente italienne a consolidé et même accentué son mouvement en avant ; elle passe de 93 60 à 94 15.",
      "Les établissements de crédit restent excellents : le Crédit lyonnais et la Banque de Paris et des Pays-Bas mènent le groupe. Le grand emprunt russe d'un milliard attire de nouveau l'attention, et l'on annonce que ces deux sociétés ont pris ferme un emprunt 3 1/2 % de 20 millions du Canton de Berne."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Économie",
    "title": "Résultats des compagnies de chemins de fer",
    "summary": "Les six grands réseaux ferroviaires enregistrent une plus-value hebdomadaire de 1 225 000 francs, portant l'augmentation totale sur 32 semaines à 46 617 000 francs. Le cours des actions demeure toutefois stable.",
    "paragraphs": [
      "Du 13 au 19 août, les recettes des six grands réseaux accusent une plus-value de 1 225 000 francs, la plus forte de l'année. L'augmentation totale pour les 32 premières semaines de l'exercice s'établit à 46 617 000 francs.",
      "Malgré ces résultats brillants, la cote des actions ne présente que des variations insignifiantes. Les obligations ont manifesté un regain d'activité."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Économie",
    "title": "Marché des valeurs espagnoles et de traction",
    "summary": "Le marché des valeurs espagnoles et de traction affiche une nette progression. Les titres Madrid-Saragosse et Nord de l'Espagne s'apprécient, tandis que la Compagnie générale de Traction gagne 20 francs.",
    "paragraphs": [
      "Les chemins de fer espagnols poursuivent leur ascension vers de plus hauts cours. Le Madrid-Saragosse passe de 295 à 313 francs et le Nord de l'Espagne de 198 à 215 francs.",
      "L'amélioration dans le compartiment des valeurs de traction s'est vivement accentuée cette semaine. La Compagnie générale de Traction gagne 20 francs depuis samedi dernier. L'Est Parisien reprend également du terrain, et la ligne Bonneuil-Place de la Concorde sera inaugurée incessamment."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Économie",
    "title": "Mines et métallurgie",
    "summary": "Après une période de stagnation, les valeurs minières, et plus particulièrement les mines d'or, retrouvent une certaine animation et voient leurs cours se raffermir malgré des échanges restés restreints.",
    "paragraphs": [
      "Les valeurs minières et métallurgiques demeuraient jusqu'ici délaissées. Les mines d'or ont toutefois retrouvé un semblant d'animation et les cours sont plus soutenus, bien que les échanges soient restés restreints.",
      "Les Rand Mines ont progressé de 750 à 775 francs, les Goldfields de 357 à 366 francs, et l'East-Rand de 186,50 à 190 francs."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Économie",
    "title": "Revue commerciale : Grains, farines et houblons",
    "summary": "La récolte de grains s'annonce inférieure aux attentes et à la moyenne. Les prix des farines et des blés reculent sur la place de Paris, alors que les houblons subissent une baisse de quantité.",
    "paragraphs": [
      "La récolte de grains ne répond pas aux espérances. La majeure partie des cultivateurs éprouve des déceptions et le rendement n'est guère satisfaisant. En somme, notre récolte n'atteindra pas la moyenne et il faudra s'estimer heureux si la production globale ne descend pas au-dessous de 105 millions d'hectolitres.",
      "Sur notre place, les farines ont fléchi d'environ 0,50 franc par quintal. Les blés ont suivi le mouvement.",
      "Concernant les houblons, la récolte sera, en quantité, inférieure à celle de l'an dernier. Les premiers produits arrivés à Nuremberg trouvent toutefois des amateurs empressés."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Roman",
    "title": "La Main Gauche (Troisième partie)",
    "summary": "Don José, à la poursuite des ravisseurs, s'enlise dans un marais. Pendant ce temps, Janck et Gerarden traquent la barque transportant Lydie, déclenchant des échanges de coups de feu au crépuscule.",
    "paragraphs": [
      "Don José, après avoir traversé la rivière, se lança à la poursuite des ravisseurs. Il finit par s'enliser dans un marais, contraint d'abandonner sa monture et de gagner la terre ferme en rampant.",
      "Pendant ce temps, les deux Américains, Janck et Gerarden, tentent de rattraper la barque des fuyards où se trouve Lydie. Une poursuite s'engage le long de la rive, ponctuée par des échanges de coups de feu dans la pénombre du crépuscule."
    ]
  }
];
