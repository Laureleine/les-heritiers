// Date: 1890-01-01
// Restauration Pass: 2
// Base de données complète des articles de presse du 1890-01-01 (Version Restaurée, 46 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique",
    "title": "Nécessaire : Le recours au crédit",
    "summary": "Porté par le succès de l'Exposition, le crédit de l'État atteint un sommet. L'article préconise la consolidation des emprunts publics pour simplifier la gestion budgétaire et alléger le poids de la dette nationale.",
    "paragraphs": [
      "Le triomphe de la République aux élections générales, l'affermissement de la confiance et l'élan de patriotisme suscité par le succès de l'Exposition ont porté le crédit de l'État à un niveau qu'il avait rarement atteint. Le 3 % amortissable se négocie aux environs de 95 francs.",
      "La République a entrepris une œuvre immense qu'elle poursuit glorieusement depuis vingt ans. Le territoire a été doté de chemins de fer, de lycées, d'écoles primaires et de chemins vicinaux, permettant d'établir un courant d'échange actif entre les plus petits hameaux et l'ensemble du pays.",
      "Pour subvenir à ces dépenses extraordinaires, l'État négocie de petits emprunts spéciaux sous forme d'obligations sexennaires et trentenaires. Toutefois, le poids du remboursement et des intérêts devient onéreux pour le Trésor.",
      "Il serait judicieux de transformer ces obligations en rentes par émission publique afin de simplifier les finances de l'État et de se libérer du fardeau du remboursement immédiat, tout en assurant une meilleure clarté budgétaire."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Petit Parisien - Chapitre inédit",
    "summary": "La vicomtesse et le baron Kreizer élaborent des manœuvres complexes impliquant le docteur Jérôme Labadié, ancien compagnon de Pierre Sandrac, sous l'œil attentif du général de Montreuil.",
    "paragraphs": [
      "La conversation entre la vicomtesse et Henri de Mondoze, interrompue par le déjeuner, portait sur la mission délicate concernant Jérôme Labadié, identifié comme le docteur, ancien compagnon de Pierre Sandrac.",
      "Le baron Kreizer, associé de la vicomtesse, apporte des renseignements précieux sur les bas-fonds parisiens, révélant que Labadié vivait autrefois de petits expédients avant d'hériter de son oncle.",
      "La vicomtesse et son cercle discutent avec une habileté cynique des manœuvres secrètes en cours, tandis que l'arrivée du général de Montreuil vient ponctuer ces échanges mondains et mystérieux."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "International",
    "title": "Santé du Czar Alexandre III",
    "summary": "M. de Mohrenheim dément les rumeurs d'empoisonnement concernant le Czar. Le souverain souffre d'une congestion pulmonaire suite à une grippe, mais son état est jugé rassurant par les médecins.",
    "paragraphs": [
      "Des nouvelles alarmantes venues de Saint-Pétersbourg présentaient le Czar comme ayant été victime d'une tentative d'empoisonnement. Cependant, M. de Mohrenheim a démenti ces informations.",
      "Il est confirmé que le Czar souffre d'une congestion pulmonaire suite à une rechute après une influenza. Le bulletin signé par le docteur Petrowski indique que l'état du souverain n'inspire aucune inquiétude, rassurant ainsi le peuple russe."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Informations",
    "title": "Nominations et administration",
    "summary": "Le point sur les décisions administratives : refus de nouvelles dénominations de rues, nominations de M. Saisset-Schneider au Conseil d'État et de M. Delmas à la Cour des Comptes, et suppression de vingt-quatre Recettes.",
    "paragraphs": [
      "L'administration préfectorale de la Seine refusera son approbation à certaines des nouvelles dénominations de rues proposées par le Conseil municipal de Paris.",
      "M. Saisset-Schneider, préfet du Nord, est nommé conseiller d'État, ce qui met fin au conflit entre la Préfecture du Nord et la Municipalité de Lille.",
      "M. Albert Delmas est nommé conseiller-maître à la Cour des Comptes en remplacement de M. Noirot, décédé.",
      "Le ministre des Finances a décidé la suppression de vingt-quatre Recettes particulières en exécution de la loi de finances pour 1890."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Éditorial",
    "title": "Fin d'année : Bilan du Centenaire",
    "summary": "En clôturant l'année du Centenaire de 1789, la France célèbre une République triomphante, confortée par le succès pacifique de l'Exposition malgré un contexte international toujours délicat.",
    "paragraphs": [
      "L'année du grand Centenaire de 1789 s'achève. Si elle ne fut pas aussi radieuse que celle de la Révolution, elle a prouvé que la France est toujours digne de son histoire et que la République est sortie triomphante de ses épreuves.",
      "L'Exposition a prouvé au monde qu'une nation pacifique et laborieuse n'a rien à redouter. Malgré les incertitudes internationales et le poids de l'annexion de l'Alsace-Lorraine, chaque jour gagné pour la paix est précieux.",
      "Nous quittons 1889 avec reconnaissance et fierté, laissant une France grandie par le travail et la liberté."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique",
    "title": "Actualités législatives et municipales",
    "summary": "M. Constans, récemment élu sénateur de la Haute-Garonne, quittera prochainement son siège de député. Par ailleurs, la candidature de M. René Goblet est officiellement soutenue à Sceaux et Villejuif.",
    "paragraphs": [
      "M. Constans, nouveau sénateur de la Haute-Garonne, donnera sa démission de député dès l'ouverture de la prochaine session parlementaire.",
      "Le Congrès des Comités républicains des cantons de Sceaux et de Villejuif a adopté par acclamation la candidature de M. René Goblet."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "International",
    "title": "La France et la Paix",
    "summary": "Le Président de la République réaffirme son engagement profond pour la paix, malgré les défis diplomatiques complexes inhérents aux premières étapes de son septennat.",
    "paragraphs": [
      "Selon la Gazette de la Croix, le Président de la République française aurait déclaré à un vieil ami que la guerre est une impossibilité. Il a affirmé que l'idéal de ses sept ans de présidence demeure le maintien de la paix, tout en soulignant la difficulté d'engager les premières propositions diplomatiques dans ce domaine."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Brèves internationales et deuil",
    "summary": "Actualités de la semaine : mesures frontalières en Alsace-Lorraine, questions budgétaires impériales, condoléances pour le Brésil et couronnement au Portugal.",
    "paragraphs": [
      "En Alsace-Lorraine, les autorités allemandes exigent désormais des papiers d'identité en règle pour toute entrée sur le territoire.",
      "Le gouvernement dément toute confiscation des biens de la famille impériale, précisant qu'il s'agit uniquement de la suppression de certaines dotations budgétaires.",
      "Le Président Carnot et M. Spuller ont adressé des télégrammes de condoléances à Dom Pedro, ex-Empereur du Brésil, suite au décès de l'Impératrice. Les funérailles seront organisées par le comte et la comtesse d'Eu.",
      "Le Roi Carlos Ier a passé en revue la garnison de Lisbonne lors de son couronnement, une cérémonie marquée par un imposant déploiement de troupes et de musiques nationales."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Le séjour du Roi du Portugal à Lisbonne",
    "summary": "La capitale portugaise célèbre son souverain. Après une réception populaire chaleureuse, le Roi Carlos Ier a présidé un grand banquet en l'honneur du renouveau national.",
    "paragraphs": [
      "La foule a accueilli par de nombreux vivats les troupes de la marine royale.",
      "Le soir, un grand banquet de gala a réuni l'ensemble des chefs de mission diplomatique.",
      "Lisbonne, 30 décembre. Au cours de ce banquet, le Roi Carlos Ier a porté un toast remarqué à la prospérité de l'année portugaise."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Économie",
    "title": "Statistiques sur l'émigration italienne",
    "summary": "Le rapport de 1888 montre une forte hausse de l'émigration italienne due à la pauvreté. Le gouvernement prépare un projet de loi pour la colonisation des terres incultes en Sardaigne.",
    "paragraphs": [
      "Il résulte de la dernière statistique sur l'émigration pour l'année 1888, publiée par le Ministère de l'Agriculture et du Commerce d'Italie, que 290 936 individus ont émigré, contre 256 666 en 1887.",
      "Sur les deux dernières années, l'émigration a donc progressé de plus de 120 000 personnes.",
      "Le rapport attribue ce mouvement migratoire principalement au manque de ressources. De nombreux citoyens ont été contraints de vendre leur chaumière et leur bétail pour financer leur départ.",
      "La majeure partie des émigrants se dirige vers l'étranger, principalement vers les États-Unis et le Brésil.",
      "Un projet de colonisation en Sardaigne, préparé par le gouvernement italien au sein du Ministère de l'Intérieur, sera présenté à la rentrée des Chambres. Ce texte vise à résoudre les questions complexes d'expropriation des terrains incultes communaux et particuliers."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits divers",
    "title": "Legs pour la paix",
    "summary": "Une riche citoyenne américaine, Mme Cora Kennedy, aurait légué une somme importante au Comité de propagande de la Paix, selon des dépêches arrivées de Milan.",
    "paragraphs": [
      "Milan, 30 décembre. On annonce qu'une dame américaine, nommée Mme Cora Kennedy, aurait légué une somme importante pour être transmise au Comité de propagande de la Paix."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Nominations",
    "title": "Légion d'honneur",
    "summary": "Publication des nominations dans l'Ordre national de la Légion d'honneur pour les administrations des Colonies, du Commerce, de la Justice, de la Marine, de la Guerre et des Affaires étrangères.",
    "paragraphs": [
      "Sont nommés dans l'Ordre national de la Légion d'honneur :",
      "Administration des colonies : Au grade d'officier, MM. E. Billecoq et Bonnal. Au grade de chevalier, MM. Paul Cousin, Granier, Merlaude, de Langlade, Grégal, Mittre, Pardon, Faillet, Aumont et Dupré.",
      "Ministère du Commerce, de l'Industrie et des Postes : Au grade de commandeur, M. Eugène Pereire. Au grade d'officier, MM. Baille, Baille-Lemaire, Sauvy, Parmentier. Au grade de chevalier, MM. Boët, Berthelot, Breton, Clavet, Gautier, Lamicci, Monier, Morch, Pasquier, Thiéry et Trottier.",
      "Ministère de la Justice : Au grade de commandeur, M. Berger. Au grade d'officier, MM. Fau, Melcot, Munion, et plusieurs autres magistrats nommés aux cours d'appel de Paris, Amiens, Douai, Aix, etc.",
      "Ministère de la Marine : Grands-officiers, MM. Lefèvre et Begin. Commandeurs, officiers et chevaliers dont MM. La Tour du Pin Chambly, de la Charce, de Beaumont, Laconture, Gourdon, Humot, Manceron, Fort, Bauer, Ravira, Le Bras, Pillut, Savary et de la Roque.",
      "Ministère de la Guerre : Grands-officiers, les généraux de division. Commandeurs, les généraux de division Gueytat et Charpentier de Cossigny, ainsi que divers officiers et chevaliers.",
      "Ministère des Affaires étrangères : Commandeur, M. Albert Billot. Officiers, MM. Henri Belle, Ferdinand Destrées, François de Corcelle. Chevaliers, MM. Aubert, de Bersan, Armand Mollard et Bérard."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits divers",
    "title": "Missionnaires français assassinés",
    "summary": "Deux missionnaires français auraient été assassinés par les partisans du sultan Amphallé sur la route de Zeïlah au Harrar. Les détails sur les causes de ce crime font encore défaut.",
    "paragraphs": [
      "Un télégramme d'Obock annonce que deux missionnaires français auraient été assassinés sur la route de Zeïlah au Harrar par les partisans du sultan Amphallé. Les détails manquent sur les causes de ce tragique incident."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Étranger",
    "title": "Stanley et Emin-Pacha",
    "summary": "Stanley s'apprête à quitter l'Afrique à bord du vapeur Victoria pour se rendre au Caire, puis en Angleterre. L'état de santé d'Emin-Pacha est en amélioration.",
    "paragraphs": [
      "Stanley et ses officiers s'embarqueront aujourd'hui mardi à bord du vapeur anglais Victoria. Ils se proposent de visiter Le Caire et se rendront ensuite en Angleterre. On signale une certaine amélioration dans l'état de santé d'Emin-Pacha."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits divers",
    "title": "Nouvelles du docteur Peters",
    "summary": "Selon des informations parvenues d'Aden à la Gazette de la Croix, le docteur Peters est en parfaite santé et s'étonne des rumeurs persistantes sur sa mort.",
    "paragraphs": [
      "Berlin, 30 décembre. La Gazette de la Croix publie une lettre d'un professeur ayant reçu des informations d'Aden, selon lesquelles le docteur Peters est bien portant et a appris avec étonnement qu'on l'avait cru mort."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Santé publique",
    "title": "L'épidémie d'influenza (grippe)",
    "summary": "La mortalité due à la grippe recule à Paris, bien que la banlieue et la province restent durement touchées. L'absentéisme massif des agents compromet gravement la régularité du service des Postes.",
    "paragraphs": [
      "À Paris, la mortalité est enfin entrée en phase de décroissance. Les statistiques hebdomadaires indiquent une diminution notable des décès.",
      "Dans la banlieue parisienne, la situation demeure préoccupante : les usines de Saint-Denis, Versailles et Saint-Germain sont particulièrement frappées par la contagion.",
      "En province, le mal se propage avec une intensité variable : Lyon, Rouen, Évreux, Le Havre, Marseille, Grenoble, Toulon, Alger, Bône, Madrid, Barcelone, Metz, Malte, Sofia, Bruxelles et Vienne signalent tous des foyers d'infection actifs.",
      "Le service des Postes, privé d'une part importante de ses effectifs alités, subit de lourdes désorganisations sur l'ensemble du territoire."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Science",
    "title": "Le docteur Miquel sur l'origine de l'influenza",
    "summary": "Le docteur P. Miquel expose ses observations sur la grippe. Il rejette la théorie de la transmission atmosphérique au profit de la contagion humaine, favorisée par la rapidité des déplacements ferroviaires.",
    "paragraphs": [
      "Nous avons interrogé le docteur P. Miquel, au sein de son laboratoire installé à l'ancienne caserne Lobau, concernant l'évolution actuelle de l'influenza.",
      "Selon les conclusions du docteur Miquel, il convient de ne plus croire à une transmission par les airs. L'atmosphère n'est nullement viciée ; elle demeure, au contraire, d'une grande pureté.",
      "L'épidémie s'est propagée exclusivement par le contact entre les voyageurs. Cette réalité explique la fulgurante rapidité de la transmission à travers les lignes des chemins de fer."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Anniversaire de M. Gladstone",
    "summary": "L'illustre homme d'État britannique, M. Gladstone, a célébré son quatre-vingt-unième anniversaire au château de Hawarden, recevant de nombreux témoignages de sympathie du monde entier.",
    "paragraphs": [
      "M. Gladstone, l'illustre homme d'État anglais, vient de célébrer, au sein de son château de Hawarden, le quatre-vingt-unième anniversaire de sa naissance.",
      "En cette occasion, des milliers de visiteurs et une multitude de télégrammes sont parvenus à Hawarden pour honorer le grand serviteur de la Couronne."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits divers",
    "title": "Échouage du Bouvet",
    "summary": "Le Ministère de la Marine a annoncé l'échouage de l'aviso de 2e classe Bouvet. Si l'équipage a pu être intégralement sauvé, la perte du navire semble désormais inévitable.",
    "paragraphs": [
      "Le Ministère de la Marine fait savoir que l'aviso de 2e classe Bouvet s'est échoué. Bien que l'équipage ait heureusement pu être sauvé, il est fort à craindre que le bâtiment soit définitivement perdu."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits divers",
    "title": "Médailles d'honneur",
    "summary": "Une nouvelle liste de médailles d'honneur vient d'être publiée, distinguant plusieurs citoyens et jeunes enfants pour des actes de courage exceptionnels, notamment lors de sauvetages de noyés.",
    "paragraphs": [
      "Une liste de médailles d'honneur vient d'être officiellement publiée afin de récompenser divers actes de courage, parmi lesquels figurent plusieurs jeunes enfants ayant arraché des personnes à une mort certaine par noyade."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Politique locale",
    "title": "Conseil Municipal de Paris",
    "summary": "Lors de la séance du 30 décembre, le Conseil municipal de Paris a voté le budget de 1890, alloué 20 000 francs pour les étrennes des écoliers et accepté un don généreux de la famille Rothschild.",
    "paragraphs": [
      "Séance du lundi 30 décembre : Vote du budget de 1890, modifications sur les droits concernant les raisins secs, vote d'une somme de 20 000 francs pour les étrennes aux enfants des écoles, et acceptation d'un don de la famille de Rothschild destiné aux familles malheureuses.",
      "Le Conseil a également voté le crédit nécessaire à la conservation des bâtiments de l'Exposition universelle."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Feuilleton",
    "title": "Roman-feuilleton",
    "summary": "La conversation entre le général et Henri de Mondoze dévoile les intrigues complexes entourant le baron Kreizer et les manœuvres audacieuses de la vicomtesse.",
    "paragraphs": [
      "La conversation entre le général et Henri de Mondoze se poursuit, révélant les intrigues complexes entourant le baron Kreizer et les manœuvres hardies de la vicomtesse."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Nécrologie",
    "title": "Décès de l'Amiral de Saint-Hilaire",
    "summary": "L'amiral de Saint-Hilaire, ancien commandant de la division navale de l'Océanie et officier émérite de la marine française, s'est éteint ce matin à Urvillers, dans l'Aisne.",
    "paragraphs": [
      "L'amiral de Saint-Hilaire, ancien commandant de la division navale de l'Océanie, est décédé ce matin à sept heures, à Urvillers, dans l'Aisne.",
      "Entré à l'École navale en 1817, il a mené une longue et brillante carrière, servant notamment dans l'océan Pacifique, la Baltique et en Chine.",
      "Promu contre-amiral, il avait été récemment éprouvé par des ennuis de santé graves, notamment une chute suivie d'une angine couenneuse."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Nécrologie",
    "title": "Mort de M. Arribat",
    "summary": "M. Arribat, député républicain de l'arrondissement de Loches, avocat et membre de la Société des agriculteurs de France, est décédé prématurément à Paris, à l'âge de trente-quatre ans.",
    "paragraphs": [
      "On annonce la mort de M. Arribat, député de l'arrondissement de Loches, décédé à Paris des suites d'une fluxion de poitrine, à l'âge de trente-quatre ans.",
      "Républicain convaincu, ancien avocat et sous-préfet, il était un membre actif de la Société des agriculteurs de France."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Nécrologie",
    "title": "Décès de M. Collet",
    "summary": "M. Paul Collet, figure éminente du droit, président de section au Conseil d'État et vice-président du Tribunal des conflits, est décédé après une longue et brillante carrière juridique.",
    "paragraphs": [
      "M. Paul Collet, président de section au Conseil d'État et vice-président du Tribunal des conflits, est décédé.",
      "Il avait acquis une situation très élevée au barreau et avait notamment siégé comme membre du Comité judiciaire sous l'Empire."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Nécrologie",
    "title": "Mort de M. Lelong",
    "summary": "M. Lelong, ancien député et conseiller général de la Sarthe, s'est éteint à Château-du-Loir à l'âge de quatre-vingt-quinze ans. Il était considéré comme le doyen des anciens députés.",
    "paragraphs": [
      "M. Lelong, ancien député et ancien conseiller général de la Sarthe, est décédé à Château-du-Loir à l'âge de quatre-vingt-quinze ans. Il était vraisemblablement le doyen des anciens députés."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Nécrologie",
    "title": "Mort de l'auteur dramatique Alfred Duru",
    "summary": "Le célèbre auteur dramatique Alfred Duru, collaborateur de M. Chivot et créateur de La Mascotte, est décédé à l'âge de soixante ans des suites d'une grippe.",
    "paragraphs": [
      "M. Alfred Duru est décédé à l'âge de soixante ans, des suites d'une rechute après une grippe.",
      "Collaborateur régulier de M. Chivot, il a écrit près d'une centaine de pièces à succès, dont « La Mascotte » et « La Fille du tambour-major »."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Activités de M. de Freycinet et du sculpteur Bartholdi",
    "summary": "Reprise des fonctions ministérielles pour M. de Freycinet, tandis que le sculpteur Bartholdi poursuit l'élaboration du monument dédié à Gambetta à Ville-d'Avray.",
    "paragraphs": [
      "M. de Freycinet a repris ses fonctions au Ministère de la Guerre.",
      "Le sculpteur Bartholdi travaille activement au monument à la mémoire de Gambetta qui doit être érigé à Ville-d'Avray."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Centenaires et curiosités",
    "summary": "L'actualité rapporte plusieurs cas remarquables de longévité, dont le décès de François Boneau à 105 ans aux États-Unis et l'anniversaire d'un laboureur centenaire près de Folbert.",
    "paragraphs": [
      "Une dépêche annonce la mort à cent cinq ans de M. François Boneau aux États-Unis.",
      "Plusieurs autres cas de longévité historique sont recensés, comme ceux de Thomas Parr ou du cardinal de Salis.",
      "Un laboureur nommé L'Estringa, vivant près de Folbert, a fêté récemment son cent troisième anniversaire."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Culture",
    "title": "Statue de Jeanne d'Arc à Nancy",
    "summary": "Grâce à la générosité de M. Osiris, Nancy s'apprête à honorer Jeanne d'Arc par une statue d'Emmanuel Frémiet, tandis qu'un autre monument est attendu à Rouen.",
    "paragraphs": [
      "Grâce au don de M. Osiris, la ville de Nancy va ériger une statue de Jeanne d'Arc réalisée par M. Emmanuel Frémiet.",
      "Une autre statue monumentale est prévue à Rouen, sur la colline Sainte-Catherine."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Sciences",
    "title": "Séance annuelle de l'Académie des sciences",
    "summary": "Sous la présidence de M. Hermite, l'Académie des sciences a tenu sa séance publique annuelle. Les prix Leconte et Montyon ont été solennellement décernés à M. Paul Vieille et à M. Eiffel pour leurs éminents travaux.",
    "paragraphs": [
      "Sous la présidence de M. Hermite, l'Académie des sciences a tenu, dans le cadre de sa séance publique annuelle, la lecture de ses rapports officiels et la remise des récompenses académiques.",
      "Le prix Leconte a été décerné à M. Paul Vieille pour ses remarquables travaux sur les explosifs et la mise au point de la poudre sans fumée, une avancée majeure pour la balistique moderne.",
      "Le prix Montyon a été attribué à M. Eiffel pour l'ensemble de ses constructions métalliques, reconnaissant ainsi la portée technique et esthétique de ses ouvrages monumentaux."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Social",
    "title": "Assemblée générale des Voyageurs de commerce",
    "summary": "La Société de protection mutuelle des Voyageurs de commerce a célébré, lors de son assemblée annuelle, le rayonnement de ses membres et l'obtention d'une prestigieuse médaille d'or à l'Exposition universelle.",
    "paragraphs": [
      "La Société de protection mutuelle des Voyageurs de commerce a tenu son assemblée annuelle, une réunion marquée par une affluence notable des membres venus célébrer l'obtention d'une médaille d'or lors de la récente Exposition universelle.",
      "Les rapports présentés soulignent l'importance de la solidarité au sein de la profession face aux aléas de la vie nomade, consolidant ainsi le succès de cette institution de prévoyance."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "International",
    "title": "Projet d'Exposition à Washington",
    "summary": "La ville de Washington ambitionne d'accueillir une prochaine Exposition universelle. Un projet d'envergure qui bénéficie déjà du soutien espéré des instances dirigeantes du gouvernement des États-Unis.",
    "paragraphs": [
      "La capitale fédérale, Washington, manifeste officiellement son intention de porter la candidature de la ville pour accueillir une future Exposition universelle.",
      "Ce projet d'envergure internationale s'appuie sur le soutien potentiel des autorités gouvernementales des États-Unis, désireuses de démontrer la puissance industrielle et culturelle de la jeune nation américaine."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incidents divers",
    "summary": "Une série d'incidents a marqué la journée à travers l'Europe : des chutes de neige à Grenoble, un grave accident d'omnibus à Londres, une agression au vitriol à Lille et des incendies à Roubaix et Rodez.",
    "paragraphs": [
      "Une forte chute de neige est signalée dans la région de Grenoble, entravant les communications et la circulation sur les voies principales.",
      "À Londres, un omnibus s'est renversé près de la gare de King's Cross, occasionnant vingt blessés, dont certains dans un état jugé préoccupant par les services de secours.",
      "À Lille, un drame a éclaté lorsqu'une femme, dans un accès de violence, a jeté du vitriol au visage de son cocher, le marquant atrocement.",
      "Les autorités ont également rapporté des incendies d'origine accidentelle dans une usine de Roubaix ainsi que dans les locaux d'une imprimerie à Rodez, causant des dégâts matériels importants."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Attentats et crimes à Paris",
    "summary": "Deux tragédies ont frappé Paris aujourd'hui : des coups de feu ont été tirés avenue de Montsouris sans faire de victime, et un drame passionnel rue de Charonne a laissé une femme grièvement blessée.",
    "paragraphs": [
      "Un individu, dont l'identité demeure inconnue, a fait feu à plusieurs reprises avenue de Montsouris. Par un heureux hasard, ces tirs n'ont fait aucune victime parmi les passants.",
      "Dans le quartier de la rue de Charonne, un cordonnier a ouvert le feu sur son ancienne maîtresse avant de retourner l'arme contre lui-même ; la malheureuse, atteinte de plusieurs balles, a été transportée à l'hôpital dans un état désespéré."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Faits Divers",
    "title": "Incident lors d'une représentation de Sarah Bernhardt",
    "summary": "Lors d'une représentation théâtrale, une défaillance technique sur le bûcher a causé une blessure au chef des accessoires. Mme Sarah Bernhardt, indemne, lui a prodigué les premiers secours avec un grand sang-froid.",
    "paragraphs": [
      "Mme Sarah Bernhardt n'a couru aucun danger et n'a éprouvé aucune alarme. Elle est descendue du bûcher très tranquillement et a donné elle-même les premiers soins à l'imprudent chef des accessoires, qui a été ensuite dirigé vers une officine pour y recevoir les soins nécessaires."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Faits Divers",
    "title": "Vols de boutons de sonnettes à Passy",
    "summary": "Une bande de malfaiteurs sévit dans le quartier de Passy, dérobant les boutons de sonnettes des immeubles. La police, alertée, a organisé une surveillance accrue après une tentative manquée rue Pergolèse.",
    "paragraphs": [
      "Le quartier des Bassins, à Passy, est en ce moment visité par une bande de malfaiteurs qui ont pour spécialité de voler les boutons de sonnettes. Ces hardis gredins opèrent la nuit et dans les rues qu'ils savent être peu fréquentées par la police.",
      "L'avant-dernière nuit, ils ont fait ample moisson. Rue Lesueur, ils ont enlevé les boutons de sonnettes de quatre immeubles, ceux situés aux numéros 19, 23 et 25. De là, ils sont allés rue Pergolèse et enfin avenue de la Grande-Armée.",
      "En ce dernier endroit, ils ont failli se faire pincer. Opérant, en effet, avec moins d'habileté, ils ont fait jouer involontairement la sonnette du numéro 22. Le concierge, qui savait que tous ses locataires étaient couchés, s'est levé précipitamment pour voir ce qui se passait. À sa vue, les voleurs ont déguerpi, abandonnant sur place un ciseau à froid.",
      "M. Nachon, commissaire de police du quartier, a organisé une surveillance toute particulière afin de mettre la main sur les coupables."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Faits Divers",
    "title": "Tentative de suicide rue Jouffroy",
    "summary": "Une jeune femme de vingt-deux ans, Berthe Bloch, a tenté de mettre fin à ses jours en se jetant d'une fenêtre rue Jouffroy. Elle a survécu à sa chute mais refuse de révéler les motifs de son geste.",
    "paragraphs": [
      "Une jeune fille de vingt-deux ans, nommée Berthe Bloch, a tenté hier de mettre fin à ses jours en se précipitant de la fenêtre de son logement, situé rue Jouffroy, n° 6, au deuxième étage. Elle ne s'est heureusement fait, en tombant, que des lésions internes.",
      "Interrogée par M. Gilles, commissaire de police, elle a refusé de faire connaître les motifs qui l'avaient poussée au suicide."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Faits Divers",
    "title": "Cambriolage rue Compans",
    "summary": "Profitant de l'absence du fabricant M. Renaud, des cambrioleurs ont dévalisé son appartement rue Compans. Ils se sont enfuis avec un butin de 1 500 francs en or, sans être aperçus par le voisinage.",
    "paragraphs": [
      "Profitant de l'absence de M. Renaud, fabricant de confections, rue Compans, n° 50, qui était allé passer la journée à la campagne, des malfaiteurs se sont introduits par escalade et effraction dans son logement, qu'ils ont littéralement mis au pillage. Après avoir défoncé un secrétaire, ils se sont emparés d'une petite sacoche en cuir noir renfermant une somme de 1 500 francs en or, puis ont disparu sans éveiller l'attention des voisins ni du concierge."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Faits Divers",
    "title": "Arrestation d'un employé voleur",
    "summary": "Un employé a été arrêté hier en flagrant délit alors qu'il dérobait un coupon de tissu dans un grand magasin de la rive droite. Une perquisition a été immédiatement ordonnée à son domicile par les autorités.",
    "paragraphs": [
      "Un employé nommé Charles Q. a été surpris hier et arrêté au moment où il volait un coupon de soierie dans un grand magasin de la rive droite. Une perquisition a été pratiquée à son domicile."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Faits Divers",
    "title": "Découverte macabre rue Monge",
    "summary": "Au 63, rue Monge, des paquets contenant des restes humains ont été découverts. Le commissaire de police du quartier Saint-Victor a saisi ces débris lugubres, qui ont été transférés à la morgue pour examen.",
    "paragraphs": [
      "On a apporté hier, au bureau de M. Evrard, commissaire de police du quartier Saint-Victor, des paquets trouvés dans une maison du 63, rue Monge, contenant des restes humains. Ces lugubres débris ont été immédiatement envoyés à la morgue pour examen."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Faits Divers",
    "title": "Cambriolage rue Croulebarbe",
    "summary": "Le domicile d'un employé du Mont-de-Piété, situé rue Croulebarbe, a été cambriolé. Par chance, un coffret contenant des titres de valeur a échappé à la vigilance des malfaiteurs.",
    "paragraphs": [
      "Des malfaiteurs se sont introduits hier dans le logement de M. Roger, employé au Mont-de-Piété, situé au 65, rue Croulebarbe, et se sont emparés d'un grand nombre d'objets de valeur.",
      "Par un hasard extraordinaire, un petit coffret en osier, enveloppé dans des serviettes et contenant des titres de valeur pour une somme importante, n'a pas été aperçu par les cambrioleurs. M. Perruche, commissaire de police, a ouvert une enquête."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Faits Divers",
    "title": "Explosion de gaz à Bordeaux",
    "summary": "Une violente explosion de gaz a blessé grièvement l'adjudant Bardet à l'hôtel de police de Bordeaux. En tentant d'allumer un bec de gaz, il a provoqué une détonation qui a soufflé la porte et les vitres.",
    "paragraphs": [
      "Une violente explosion a mis ce matin en émoi tout le personnel de l'hôtel de police de Bordeaux. L'adjudant Bardet, venu allumer le gaz dans une pièce sombre, a vu le bec exploser dès qu'il a approché son allumette.",
      "Jeté à terre, la figure et les mains grièvement brûlées, il a été conduit à l'hôpital. La porte de la pièce a été arrachée de ses gonds et les vitres furent brisées par le souffle de la détonation."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Politique",
    "title": "Condamnation du député Castelin",
    "summary": "Le député de l'Aisne, M. Castelin, a été condamné par le tribunal correctionnel de Soissons à trois mois d'emprisonnement et 2 000 francs d'amende pour diffamation envers un particulier.",
    "paragraphs": [
      "M. Castelin, député de l'Aisne, a été condamné par le tribunal correctionnel de Soissons, en son audience du 18 décembre courant, à trois mois d'emprisonnement, 2 000 francs d'amende et des dommages et intérêts pour diffamation envers un particulier. Ce jugement confirme une décision précédente."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Faits Divers",
    "title": "Incendie dans une fabrique à Jenlain",
    "summary": "Un violent incendie a dévasté la fabrique de boutons Berthe, Wuhveryck et Servas à Jenlain. Le manque d'eau a empêché l'extinction, mais l'évacuation du gaz a évité une explosion. 400 ouvriers sont au chômage.",
    "paragraphs": [
      "Un terrible incendie s'est déclaré dans l'atelier de découpage de la fabrique de boutons de MM. Berthe, Wuhveryck et Servas, à Jenlain, près de Valenciennes. Malgré l'intervention des pompiers, le manque d'eau a forcé à laisser brûler les bâtiments.",
      "Grâce au sang-froid d'ouvriers qui ont ouvert un robinet d'échappement, une explosion du gazomètre a pu être évitée. L'usine occupait 400 ouvriers, qui se retrouvent désormais sans travail."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Faits Divers",
    "title": "Crime à Maretz (Nord)",
    "summary": "À Maretz, le domestique Constant Ducornet a été sauvagement agressé à coups de couteau par deux individus lors d'un incendie criminel. Le blessé a été sauvé par un passant. Les auteurs sont en fuite vers la Belgique.",
    "paragraphs": [
      "Une tentative d'assassinat a été commise à Maretz. Le sieur Druon, couvreur, passant devant la ferme du sieur Joseph-Antoine, a découvert un incendie dans une écurie. En portant secours, il a trouvé le domestique, Constant Ducornet, frappé de plusieurs coups de couteau.",
      "Le blessé a pu expliquer qu'il avait été agressé par un certain Tordois et un autre individu qui exigeaient de l'argent. Sans l'intervention prompte du sieur Druon, le domestique aurait péri dans les flammes. Les coupables sont actuellement en fuite, se dirigeant vraisemblablement vers la frontière belge."
    ]
  }
];
