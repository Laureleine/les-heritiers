// Date: 1900-03-24
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-03-24 (Version Restaurée, 32 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie",
    "title": "L'Épargne et le Travail",
    "summary": "Une analyse économique souligne l'accroissement des fortunes privées et de l'épargne en France, portés par le machinisme qui démultiplie la capacité productive et améliore le bien-être national.",
    "paragraphs": [
      "Je me suis efforcé, il y a quelques jours, de présenter aux lecteurs du Petit Parisien les imposantes perspectives des dépenses nationales. Le budget colossal de la grande famille française, tant dans sa vie privée que dans sa vie publique, s'est dévoilé à leurs yeux avec autant de rigueur qu'il est possible d'en apporter dans l'évaluation de pareils amas financiers.",
      "Il est hors de doute, et c'est une constatation que je m'empresse de mettre tout d'abord en lumière, que les fortunes privées augmentent en France, ce qui signifie que l'épargne s'y élargit et s'y multiplie.",
      "L'épargne est, au point de vue économique, une dépense comme une autre. En ajoutant à celle que nous connaissions déjà, nous trouvons que nous déboursons en tout 36 milliards, dont 23 1/2 doivent être mis sur le compte de la population de nos campagnes et un peu plus de 12 milliards à la charge des habitants des villes.",
      "L'accroissement du machinisme est tel que la population française a à son service l'équivalent de cent quinze millions d'esclaves dociles, automatiques, parfaits. Sous cette énorme poussée laborieuse, comment les conditions de la vie ne se seraient-elles pas améliorées, et comment n'aurions-nous pas à constater la continuelle progression du bien-être."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage Secret : La Toile de l'Araignée",
    "summary": "Dans un instant de vive émotion, une mère mourante, veillée par les siens et par le docteur, rend son dernier souffle, plongeant ses proches dans une douleur déchirante.",
    "paragraphs": [
      "La malade que tout à l'heure ils avaient laissée assoupie, venait, en effet, de se réveiller. Elle ouvrait des yeux où, depuis hier, il avait reparu comme un état de vie, où maintenant, il y avait comme une lueur de fièvre.",
      "La malade, péniblement, tourna ses yeux vers cette autre voix qui se faisait si douce pour lui parler, et, voyant alors cette tête brune éclairée par un rayon de tendresse filiale, elle s'écria : « Oui, oui, c'est vous, tous, avec... »",
      "Alors, d'un brusque mouvement, elle s'était emparée aussi de la main de Manuèle, l'attirant jusqu'à lui faire toucher celle de Claude qui reposait encore sur son cœur de mère.",
      "Mais c'est vers un petit miroir, là-bas, sur la tablette de la cheminée, que le docteur venait de se précipiter. Quelques secondes d'un affreux silence, d'une atroce angoisse, et puis ce cri, ce cri fou : « Mort ! Morte ! »",
      "Quand sur l'étroit coussin, sa tête avait reposé, alors seulement Rolande était allée à nouveau dans la chambre où son pauvre ami Claude se rassasiait de douleur. Et mettant ses lèvres tremblantes sur ce front dont le contact avait la froideur des marbres impassibles, il murmura : « Ce n'est donc pas adieu qu'il faut se dire, c'est au revoir, maman, pauvre maman. »"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Le Président de la République à Montélimar",
    "summary": "Le Président de la République, M. Loubet, est arrivé ce matin à Montélimar. Il y passera la journée avant de se rendre demain matin à Marsanne pour visiter sa mère.",
    "paragraphs": [
      "Montélimar, 23 mars. M. Loubet, président de la République, est arrivé ce matin à Montélimar par le train de 11 heures. Il passera la journée à Montélimar et ira demain matin voir sa mère à Marsanne."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Conseil de Cabinet",
    "summary": "Réunis au ministère de l'Intérieur sous la présidence de M. Waldeck-Rousseau, les ministres ont examiné les interpellations à l'ordre du jour de la Chambre et les affaires internationales.",
    "paragraphs": [
      "Les ministres se sont réunis, hier matin, en conseil de cabinet au ministère de l'Intérieur, sous la présidence de M. Waldeck-Rousseau. Ils se sont entretenus des interpellations à l'ordre du jour de la Chambre et des affaires commerciales internationales."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Vengeance d'un amoureux éconduit à Lyon",
    "summary": "À Civrieux-d'Azergues, un ancien domestique éconduit par celle qu'il harcelait a tenté de l'assassiner d'un coup de revolver avant de se constituer prisonnier auprès du garde champêtre.",
    "paragraphs": [
      "Lyon, 23 mars. Une tentative de meurtre a été commise hier à Civrieux-d'Azergues. Marie Lapret, domestique, a reçu dans la tête une balle de revolver tirée par Benoit Jeannin, un ancien domestique de la ferme. Jeannin, qui poursuivait la jeune fille de ses assiduités, avait été renvoyé trois jours plus tôt. Le meurtrier s'est rendu lui-même au garde champêtre après son crime."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "L'Inauguration de l'Exposition",
    "summary": "Le commissaire général Alfred Picard et M. Crozier ont arrêté les dispositions protocolaires pour la cérémonie d'inauguration de l'Exposition universelle, fixée au samedi 14 avril à deux heures de l'après-midi.",
    "paragraphs": [
      "M. Alfred Picard, commissaire général de l'Exposition universelle, s'est rendu hier au ministère des Affaires étrangères pour arrêter, de concert avec M. Crozier, le protocole de la cérémonie d'inauguration. Cette cérémonie aura lieu le samedi 14 avril, à deux heures de l'après-midi."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Guerre",
    "title": "La Guerre au Transvaal",
    "summary": "Les troupes fédérales ont repoussé la colonne Gatacre sur la rive droite de l'Orange. Pendant ce temps, les mouvements des Boërs se précisent vers Ladybrand et le chef Lerotodi atteint Maseru.",
    "paragraphs": [
      "Les troupes fédérales stationnées sur la rive droite du fleuve Orange ont infligé un échec à la colonne Gatacre. Des rumeurs concernant la capture du général Gatacre circulent, bien qu'elles ne soient pas confirmées officiellement.",
      "Une colonne boër s'est dirigée vers Ladybrand. Le chef indigène Lerotodi est arrivé à Maseru. La situation militaire semble s'améliorer pour les fédéraux selon certains journaux locaux."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Incendie d'une usine à Paris",
    "summary": "Un violent incendie a ravagé hier soir les ateliers de meubles M. Bouvet, rue de Reuilly. Le colonel Detalle et ses pompiers ont circonscrit le sinistre, protégeant les habitations adjacentes.",
    "paragraphs": [
      "Un peu avant neuf heures, un incendie d'une extrême violence s'est déclaré hier soir dans un immeuble situé 45, rue de Reuilly, abritant les ateliers de M. Bouvet, fabricant de meubles. L'usine, employant environ quatre cents ouvriers, a été en grande partie détruite. Les pompiers, dirigés par le colonel Detalle, ont réussi à empêcher la propagation aux immeubles voisins."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Chambre des Députés",
    "title": "Séance du vendredi 23 mars 1900",
    "summary": "La Chambre des députés a débattu des interpellations de MM. Ferrette et d'Aulan concernant les chambres de commerce à l'étranger et a voté un projet de loi pour un chemin de fer à Madagascar.",
    "paragraphs": [
      "Deux interpellations ont occupé la séance : l'une de M. Ferrette sur l'existence à Bruxelles de deux chambres de commerce françaises subventionnées, et l'autre de M. d'Aulan sur la décoration d'industriels. La Chambre a par ailleurs adopté un projet de loi autorisant la colonie de Madagascar à emprunter une somme pour la construction d'un chemin de fer."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique",
    "title": "La querelle entre la Chambre de commerce de Bruxelles et le ministère français",
    "summary": "Le gouvernement français tranche le différend entre les chambres de commerce de Bruxelles en affirmant son soutien exclusif à l'institution présidée par M. Gérard face à celle de M. Rolland.",
    "paragraphs": [
      "Toute l'affaire est née d'une querelle privée entre M. Rolland et un membre de la chambre de commerce de Bruxelles, M. Moutier. M. Gérard a pris parti pour M. Moutier et M. Rolland s'éleva contre cette attitude, provoquant une intervention ministérielle.",
      "Le gouvernement a décidé de soutenir M. Gérard, créant une situation où deux chambres de commerce coexistent à Bruxelles : l'une soutenue par le gouvernement, l'autre présidée par M. Rolland.",
      "M. Ferrette a interpellé le gouvernement sur le maintien de subventions à la chambre présidée par M. Rolland, qu'il qualifie de lanceur d'affaires diffamatoire envers le ministre de France.",
      "M. Delcassé, ministre des Affaires étrangères, a précisé que seule la chambre présidée par M. Gérard bénéficie du soutien officiel du gouvernement français.",
      "M. Millerand, ministre du Commerce, a confirmé que les relations avaient été rompues avec la chambre de M. Rolland en raison de son refus de reconnaître l'autorité du ministre de France à Bruxelles.",
      "M. Ferrette a finalement retiré son interpellation après les explications des ministres, déclarant l'incident clos."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "Discussion sur les promotions dans l'ordre de la Légion d'honneur",
    "summary": "La Chambre débat des récentes promotions de la Légion d'honneur. M. d'Aulan conteste la nomination de certains parlementaires et industriels, tandis que le ministre Millerand défend le prestige de ces distinctions.",
    "paragraphs": [
      "La Chambre a discuté, cet après-midi, de l'interpellation de M. d'Aulan concernant les récentes promotions dans l'ordre de la Légion d'honneur. L'orateur a vivement critiqué l'attribution de croix à des personnalités dont les titres lui ont paru, pour le moins, discutables.",
      "M. d'Aulan a notamment mis en cause la décoration de M. Chovet, sénateur, en invoquant l'illégalité de décorer un membre du Parlement en exercice. Il a également visé MM. Thomas et Paquin, contestant la réalité des services exceptionnels ayant justifié ces distinctions.",
      "En réponse, M. Millerand, ministre du Commerce, a fermement défendu ces nominations. Il a souligné les mérites professionnels et républicains des récipiendaires, affirmant que le rôle du gouvernement est d'encourager, par ces distinctions, les grands secteurs de notre industrie nationale.",
      "Après un bref échange, la séance a pris fin par l'adoption de l'ordre du jour pur et simple."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "Séance du Sénat du vendredi 23 mars",
    "summary": "Le Sénat valide des élections sénatoriales, approuve le projet de loi pour la reconstruction du Théâtre-Français et légifère pour interdire la vente de pronostics sur les courses de chevaux.",
    "paragraphs": [
      "Le Sénat, lors de sa séance du vendredi 23 mars, a procédé à la validation de l'élection de MM. Rionat et Giguet. Il a ensuite statué sur la nomination des membres destinés à siéger aux commissions supérieures du travail.",
      "Par ailleurs, l'assemblée a voté le projet de loi relatif à l'installation provisoire et à la reconstruction du Théâtre-Français. Une disposition importante a également été adoptée, interdisant désormais la vente des pronostics sur les courses de chevaux."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Social",
    "title": "Sociétés civiles de retraites",
    "summary": "La commission d'assurance et de prévoyance sociales rejette le partage arbitraire des rentes dans les sociétés civiles de retraites, appelant à une refonte complète de leurs statuts.",
    "paragraphs": [
      "La commission d'assurance et de prévoyance sociales s'est réunie pour examiner une proposition de loi visant à réglementer la répartition des rentes parmi les membres des sociétés civiles de retraites. La commission propose formellement de rejeter tout partage arbitraire, préconisant en lieu et place une révision approfondie des statuts de ces sociétés."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Administration",
    "title": "Mouvement administratif",
    "summary": "Le ministère de l'Intérieur a publié ce jour une série de décrets actant plusieurs nominations aux fonctions de sous-préfets et de conseillers de préfecture dans divers départements français.",
    "paragraphs": [
      "Sur proposition du ministre de l'Intérieur, plusieurs décrets ont été rendus ce jour. Ils portent nomination à divers postes de sous-préfets et de conseillers de préfecture répartis à travers plusieurs départements français."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Crise parlementaire en Italie",
    "summary": "La tentative de modifier le règlement de la Chambre italienne pour contrer l'obstructionnisme plonge le gouvernement dans une crise aiguë, oscillant entre démission et dissolution de l'assemblée.",
    "paragraphs": [
      "De Rome, nous apprenons que les tentatives récentes pour modifier le règlement de la Chambre, afin de mettre un terme à l'obstructionnisme systématique de l'opposition, ont soulevé de violents débats. Cette situation place désormais le cabinet ministériel devant une issue critique : la démission ou le recours à la dissolution de la Chambre."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie à Kolbuszow",
    "summary": "Un épouvantable incendie a dévasté la localité de Kolbuszow. Le sinistre a consumé deux cents habitations, laissant plus de six cents familles dans un dénuement absolu et sans abri.",
    "paragraphs": [
      "Un terrible incendie a éclaté hier, réduisant en cendres une partie considérable de la ville de Kolbuszow. Le feu, d'une violence inouïe, a détruit deux cents maisons, jetant ainsi plus de six cents familles sur le pavé, privées de tout secours et de logement."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Décès diplomatique à Londres",
    "summary": "Une nouvelle attristante nous arrive de Londres : M. le ministre du Brésil y a été découvert sans vie, frappé par une mort subite au cours de la nuit dans sa résidence.",
    "paragraphs": [
      "Une triste dépêche nous parvient de Londres. M. le ministre du Brésil a été trouvé sans vie dans son lit, ce matin. Les autorités locales ont immédiatement été informées de ce décès soudain qui plonge le corps diplomatique dans le deuil."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Expédition allemande au Cameroun",
    "summary": "Au cours d'une expédition menée au Cameroun pour traquer les assassins du lieutenant Von Queis et de l'explorateur Courau, plusieurs officiers allemands ont été blessés lors de violents engagements.",
    "paragraphs": [
      "Plusieurs officiers ont été blessés au cours d'une expédition pénible au Cameroun. Les autorités allemandes ont tenu à préciser que cette opération avait pour unique dessein de poursuivre et d'appréhender les auteurs des meurtres du lieutenant Von Queis et de l'explorateur Courau."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Conseil Municipal",
    "title": "Séance du Conseil Municipal de Paris",
    "summary": "Le Conseil Municipal a siégé hier, actant la création d'une station de voitures place Violet, le projet d'un monument à Galilée, ainsi qu'une restructuration nécessaire du dépotoir de la Villette.",
    "paragraphs": [
      "Le Conseil a délibéré sur diverses mesures d'intérêt public. Parmi les décisions notables, il a été approuvé la création d'une station de voitures place Violet, l'érection prochaine d'une statue à la mémoire de Galilée, ainsi qu'une réorganisation complète des services du dépotoir municipal situé à la Villette."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Social",
    "title": "Réunions syndicales et grèves",
    "summary": "Tensions sociales : la Bourse du travail débat des tarifs du gaz et des salaires, tandis que le conflit des mineurs de Carmaux s'enlise face à l'intransigeance renouvelée de la direction des mines.",
    "paragraphs": [
      "Une réunion importante est organisée à la Bourse du travail afin d'examiner la question de la réduction du prix du gaz et la revalorisation des salaires. Parallèlement, le personnel des omnibus manifeste ses vives inquiétudes quant aux conditions de fin de leur concession.",
      "À Carmaux, la situation demeure critique. La société des mines a opposé une fin de non-recevoir aux propositions formulées par les grévistes. Malgré la pression, le comité de défense maintient sa position avec une détermination intacte."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accidents et faits divers parisiens",
    "summary": "M. Émile Faguet, victime d'un accident, est soigné à domicile. Par ailleurs, une violente rixe au quai de la Loire et une fusillade au boulevard Saint-Martin ont causé plusieurs blessés graves dans la capitale.",
    "paragraphs": [
      "M. Émile Faguet a été victime d'un accident de voiture ; il reçoit actuellement les soins nécessaires à son domicile. Par ailleurs, une tentative de meurtre a eu lieu quai de la Loire : Berthe Picard a poignardé le nommé Nicolas Walter à la suite d'une dispute.",
      "Une violente bagarre a éclaté boulevard Saint-Martin, impliquant des machinistes et un individu nommé Bazin. Ce dernier a fait usage d'un revolver, blessant deux personnes lors de la rixe."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative d'assassinat au Palais de Justice",
    "summary": "Un homme a été poignardé au Palais de Justice par le nommé Bazin. La victime, M. Alexandre, soignée à l'hôpital Saint-Louis, a pu regagner son domicile après avoir formellement identifié son agresseur.",
    "paragraphs": [
      "Un individu a été frappé d'un coup de couteau dans le dos, en plein Palais de Justice, par le nommé Bazin. M. Alexandre, la victime, a été conduit d'urgence à l'hôpital Saint-Louis avant de pouvoir regagner son domicile.",
      "Confronté à M. Bossiers, le prévenu Bazin a été formellement reconnu par ce dernier. De plus, un revolver appartenant au malfaiteur a été retrouvé à proximité des lieux par M. Denchère."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort par rage d'un industriel",
    "summary": "M. Eugène Meyer, industriel de quarante ans, est décédé de la rage à l'hôpital Tenon après avoir été mordu par un chien. La personne qu'il a mordue durant sa crise est sous traitement à l'Institut Pasteur.",
    "paragraphs": [
      "M. Tirache, commissaire de police, a été requis par M. Amaury, directeur de l'hôpital Tenon, pour constater le décès de M. Eugène Meyer, industriel âgé de quarante ans, mort de la rage.",
      "Le malheureux avait été mordu par un chien errant recueilli par son fils. Malgré les soins prodigués, M. Meyer a succombé après une agonie terrible à l'hôpital.",
      "La personne que le malheureux avait mordue lors de sa crise a été immédiatement prise en charge par l'Institut Pasteur et son état n'inspire, pour l'heure, aucune inquiétude."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Examen mental de Claude Jardin",
    "summary": "Le juge d'instruction de Vallet a ordonné une expertise psychiatrique pour Claude Jardin, le pharmacien ayant fait usage de son arme à feu en pleine audience.",
    "paragraphs": [
      "M. de Vallet, juge d'instruction, a nommé des médecins aliénistes afin d'examiner l'état mental de Claude Jardin, pharmacien, auteur de coups de revolver tirés en pleine cour lors d'une audience.",
      "Il ne sera interrogé sur le fond de l'affaire qu'après avoir fait le choix d'un conseil juridique."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Interrogatoire de Friedger",
    "summary": "Le juge d'instruction Aubry a entendu Friedger concernant la tentative d'assassinat sur Mme Klein, rue Buffon. L'inculpé maintient avoir agi seul lors de son méfait.",
    "paragraphs": [
      "Le juge d'instruction Aubry a procédé à l'interrogatoire de Friedger, inculpé pour la tentative d'assassinat sur la personne de Mme Klein, rue Buffon. L'inculpé a déclaré formellement avoir agi seul."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une fumerie d'opium à Paris",
    "summary": "M. Cochefert, chef de la Sûreté, a démantelé une fumerie d'opium tenue par Mme Assim, rue de l'Étoile. Six individus, issus de milieux divers, furent surpris en flagrant délit lors de l'opération.",
    "paragraphs": [
      "M. Cochefert, chef de la Sûreté, a opéré une descente dans une maison de la rue de l'Étoile où une dame Assim tenait une fumerie d'opium. Six personnes ont été surprises en flagrant délit.",
      "L'établissement clandestin était fréquenté par une clientèle composite, composée de nombreuses personnalités issues du monde artistique et politique parisien."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'escroc des marchands de vin",
    "summary": "Un malfaiteur nommé Delavaye a été arrêté à Saint-Quentin pour escroquerie. Il usurpait la qualité de représentant en vins, dirigeant ses victimes vers les commissariats pour y déposer plainte.",
    "paragraphs": [
      "Un individu, se faisant appeler Delavaye, a été arrêté à Saint-Quentin pour de multiples escroqueries. Il se faisait passer pour un employé d'une maison de vins afin de soutirer des fonds à ses victimes.",
      "Le plus curieux de cette affaire est que les adresses qu'il indiquait à ses dupes correspondaient en réalité à des bureaux de commissariat de police, là où les victimes, déçues, venaient finalement déposer plainte."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie rue Meslay",
    "summary": "Un violent incendie a ravagé les ateliers de M. Arbeau-Barreau, rue Meslay, à la suite de l'explosion d'un fourneau à essence. Les pompiers ont maîtrisé le sinistre après une heure d'efforts.",
    "paragraphs": [
      "Un incendie s'est déclaré dans les ateliers de M. Arbeau-Barreau, situés rue Meslay, à la suite de l'explosion accidentelle d'un fourneau à essence. Les pompiers ont pu maîtriser le feu après une heure de travail acharné."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Reconstitution du crime de Bezons",
    "summary": "M. Morise, juge d'instruction, accompagné du greffier Sempe, se rendra prochainement à Bezons pour procéder à la reconstitution du double crime commis le 6 mars par Eugène Nédelec.",
    "paragraphs": [
      "M. Morise, juge d'instruction, et M. Sempe, greffier, se rendront prochainement à Bezons pour procéder à la reconstitution du double crime commis le 6 mars dernier par le nommé Eugène Nédelec."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Faits divers autour de Paris",
    "summary": "Une série d'accidents et de drames a marqué la banlieue parisienne : arrestations, accidents du travail et tragédies domestiques ont mobilisé les autorités locales et les services de secours.",
    "paragraphs": [
      "À Neuilly-sur-Seine, Étienne Liénard, ancien employé de chemin de fer, a été arrêté après un accès de folie furieuse.",
      "À Puteaux, un charretier nommé Honoré Haquel a eu le crâne fracassé lors d'un tragique accident de travail.",
      "À Courbevoie, Ernest Marin a eu la cuisse cassée en manipulant une plaque d'égout.",
      "À Clichy, le jeune Georges Junonay a été grièvement blessé par la ruade soudaine d'un mulet.",
      "À Asnières, Alfred Evians s'est accidentellement tiré une balle dans la poitrine alors qu'il nettoyait son revolver.",
      "À Gennevilliers, la petite Geneviève Detieux a héroïquement secouru son frère tombé dans une mare.",
      "À Pantin, le jeune Nicolas Vasselon a succombé à ses blessures après être tombé dans une cuve d'eau bouillante.",
      "À Aubervilliers, une fillette de dix ans, Henriette Koverhea, s'est tragiquement noyée dans le canal Saint-Denis."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Tribunaux",
    "title": "Haine féminine : le crime de Notre-Dame",
    "summary": "La cour d'assises de la Seine a condamné Marie Barré et son amant Pallice à huit et cinq ans de travaux forcés pour la tentative d'assassinat préméditée du sieur Lemerle, commise le 4 novembre dernier.",
    "paragraphs": [
      "Le 4 novembre dernier, Marie Barré, après avoir tendu un piège odieux à son ancien amant, le sieur Lemerle, a tenté de l'assassiner par vengeance avec la complicité active de son nouvel amant, le nommé Pallice.",
      "La cour d'assises de la Seine, au terme des débats, a reconnu les deux accusés coupables de cette tentative de meurtre avec préméditation et les a condamnés, respectivement, à huit et cinq années de travaux forcés."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Tribunaux",
    "title": "Vol de 35 000 francs",
    "summary": "Le tribunal correctionnel de Pont-Audemer a condamné la femme Canu, le sieur Leprevost et le nommé Toutain à des peines d'emprisonnement pour le vol de 35 000 francs au préjudice de Mme Delaunay.",
    "paragraphs": [
      "Le tribunal correctionnel de Pont-Audemer a statué ce jour sur l'affaire du vol de 35 000 francs perpétré au préjudice de la dame Delaunay, une affaire qui a soulevé une vive émotion dans la contrée.",
      "Après avoir entendu les dépositions, les magistrats ont condamné à des peines d'emprisonnement fermes la femme Canu, ainsi que le sieur Leprevost et le nommé Toutain, tous trois reconnus coupables de cette spoliation."
    ]
  }
];
