// Date: 1901-03-05
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-03-05 (Version Restaurée, 33 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "Société du Petit Parisien - Assemblée générale",
    "summary": "L'assemblée générale des actionnaires du Petit Parisien a fixé le dividende de l'exercice à 15,50 francs par action. Le paiement sera effectué à partir du 5 mars à la Caisse sociale, 18, rue d'Enghien.",
    "paragraphs": [
      "L'assemblée générale des actionnaires du Petit Parisien, dans sa séance du 4 mars, a fixé le dividende de l'exercice à 15 fr. 50 par chaque action ou par chaque part bénéficiaire.",
      "En conséquence, le solde de ce dividende sera mis en paiement, à partir du 5 mars, à la Caisse sociale, 18, rue d'Enghien.",
      "Il sera payé, en échange du coupon, 15 fr. net d'impôt pour chaque action ou part bénéficiaire nominative, et 30 fr. 50 pour les titres au porteur."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Chronique scientifique",
    "title": "Les Monomanies",
    "summary": "Analyse critique des théories psychiatriques sur les monomanies. L'auteur réfute le concept de kleptomanie, le qualifiant de mythe sans valeur scientifique, souvent utilisé à tort comme excuse juridique.",
    "paragraphs": [
      "Les aliénistes d'aujourd'hui ont fort à faire à corriger les conceptions erronées des aliénistes d'autrefois. C'est ainsi que les vieilles monomanies instinctives se trouvent maintenant bannies de la nouvelle classification des maladies mentales et que la kleptomanie de Marc, comme la pyromanie et l'homicidomanie d'Esquirol, est allée rejoindre, dans les arcanes ou plutôt les Invalides de la science, la phrénologie de Gall et maintes autres hypothèses des faiseurs de systèmes.",
      "Depuis plus de cinquante ans, les avocats tiraient le meilleur profit de cette spécialisation des affections de l'esprit pour innocenter devant les tribunaux correctionnels ceux de leurs clients qui s'étaient, par des moyens illégitimes, approprié le bien d'autrui.",
      "Il n'existe pas, réellement, de kleptomane et cette dénomination impropre doit être bannie du vrai langage scientifique. S'il y a des malheureux qui, par un mouvement irréfléchi et sans en avoir conscience, peuvent commettre un larcin, cet acte relève non d'une folie partielle à action déterminée, mais bien d'un état morbide général beaucoup plus certain que la prétendue kleptomanie.",
      "Telle est la jurisprudence établie au delà du détroit, alors que chez nous la vieille conception de la kleptomanie n'est pas encore totalement abandonnée par les aliénistes. Elle s'est maintenue dans quelques traités sous le couvert de la dégénérescence mentale.",
      "Socialement, il vaut mieux qu'il en soit ainsi et que les cabanons ne se peuplent pas aux dépens des prisons. C'est entendu, la manie du vol n'est qu'un mythe."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Miss Tempête - Grand roman inédit",
    "summary": "Le fils de Roger de Sartys arrive à l'improviste aux Fontenilles à bord de son automobile, causant un vif émoi dans le domaine.",
    "paragraphs": [
      "C'est le lendemain de ce petit incident, passé inaperçu de celui qui eût été le plus intéressé à s'en préoccuper, que le fils de Roger de Sartys fit à son tour irruption aux Fontenilles.",
      "Irruption, c'était bien le cas d'employer ce mot, car ce matin-là on le vit arriver, à grand train, au halètement de son automobile.",
      "La suite du récit relate les échanges entre le baron et Lucien au sujet d'une mésaventure survenue avec un original rencontré sur la route."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "L'exploitation des chemins de fer",
    "summary": "M. Pierre Baudin, ministre des Travaux publics, mandate une commission présidée par M. Sainsère pour réviser la législation sur les chemins de fer, notamment concernant les retards des trains et l'hygiène.",
    "paragraphs": [
      "M. Pierre Baudin, ministre des Travaux publics, a trouvé, avec juste raison, que les lois de juin et du 15 juillet ainsi que l'ordonnance du 15 novembre sur la police, la sûreté et l'exploitation des chemins de fer auraient besoin de subir quelques modifications en vue de les mettre à la hauteur des besoins actuels.",
      "Dans ce but, le ministre a constitué une commission, sous la présidence de M. Sainsère, qui a élaboré un projet de loi destiné à fortifier les sanctions de la législation actuelle, principalement en matière de retard des trains.",
      "La révision s'est inspirée de trois ordres de considérations : préciser les pouvoirs du ministre, remanier les dispositions techniques surannées et combler une lacune concernant l'hygiène publique."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits divers",
    "title": "Naufrage d'un navire italien",
    "summary": "Le navire italien Chili a fait naufrage près de Mers-el-Kébir. Sept membres de l'équipage ont été secourus, mais six marins sont portés disparus, probablement noyés.",
    "paragraphs": [
      "Oran, 4 mars : Le navire italien Chili, venant de Pensacola, a fait naufrage, hier soir, devant Mers-el-Kébir. Sur les treize hommes composant l'équipage, sept ont été sauvés par le bateau-pêcheur Liberata. Les six autres ont été noyés."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Étranger",
    "title": "Crise politique en Espagne",
    "summary": "À Madrid, la crise gouvernementale s'intensifie. M. Sagasta annonce une opposition résolue du parti libéral, tandis que M. Villaverde, faute d'avoir pu constituer un cabinet, décline sa mission devant la Régente.",
    "paragraphs": [
      "Madrid, 4 mars : M. Sagasta, au cours d'une conférence qu'il a eue avec M. Villaverde, a déclaré que le parti libéral était fermement décidé à combattre énergiquement les futurs ministres.",
      "M. Villaverde a affirmé que le nouveau gouvernement aurait pour but exclusif d'établir l'équilibre budgétaire. Cependant, M. Villaverde a échoué dans ses efforts pour constituer un cabinet et a conféré avec la Régente pour décliner cette mission."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Guerre",
    "title": "La guerre au Transvaal",
    "summary": "Les opérations militaires contre le chef orangiste Dewet marquent le pas. Malgré les manœuvres britanniques signalées par Lord Kitchener, le rebelle conserve sa liberté de mouvement dans la région.",
    "paragraphs": [
      "Il est hors de doute maintenant que les opérations contre Dewet ont lamentablement échoué. Le grand chef orangiste est aujourd'hui en parfaite sécurité dans les régions où, depuis de longs mois, il tient en échec les forces du général Kitchener.",
      "Londres, 4 mars : Lord Kitchener télégraphie que Dewet s'est dirigé sur Philippolis, mais qu'il a été devancé par les troupes britanniques."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits divers",
    "title": "Le cadavre mystérieux de Lyon",
    "summary": "L'enquête sur le meurtre de la femme dépecée stagne à Lyon. Le dossier transmis par le parquet de Marseille semble vide de preuves, et l'identification des restes par les témoins paraît hautement incertaine.",
    "paragraphs": [
      "Lyon, 4 mars : Le dossier établi par le parquet de Marseille au sujet de la femme coupée en morceaux a été transmis à M. le juge d'instruction Benoît. Mais, jusqu'à présent, cette pièce ne semble offrir aucun intérêt pour l'enquête.",
      "Fait singulier, les restes de la victime ne présentent ni grain de beauté, ni tache, ni cicatrice, même insignifiante. Il est dès lors probable que la reconnaissance effectuée à Marseille par douze témoins soit entachée d'une erreur."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Société",
    "title": "Le recensement quinquennal",
    "summary": "Le recensement quinquennal de la population débutera le 24 mars à Paris. Le Préfet de la Seine rappelle que toute fausse déclaration ou refus de répondre aux questions des agents est passible de sanctions.",
    "paragraphs": [
      "Les opérations du recensement quinquennal de la population vont avoir lieu dans quelques jours. Elles commenceront le 24 mars prochain.",
      "Chaque citoyen devra répondre avec exactitude aux questions posées par l'agent recenseur. Le Préfet de la Seine rappelle aux habitants de Paris que toute fausse déclaration ou tout refus de fournir les renseignements demandés est passible de peines judiciaires."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique",
    "title": "L'Instruction publique",
    "summary": "La question du niveau d'instruction des masses françaises est posée. Face à des statistiques lacunaires, il devient nécessaire d'évaluer l'efficacité réelle de l'enseignement public financé par l'État.",
    "paragraphs": [
      "La question du degré d'instruction est cruciale. Il importe, en effet, de savoir si les progrès de l'instruction publique ont été tels que le nombre d'illettrés a diminué dans le pays tout entier. Nous avons dû nous contenter jusqu'à présent, nous disait hier un statisticien émérite, des chiffres fournis par les bureaux de recrutement et par les écoles : ces données sont manifestement insuffisantes.",
      "Or, nous avons besoin de connaître le degré exact d'instruction atteint par la masse. Nous sommes actuellement dans la position d'un propriétaire qui, ayant fait bâtir un palais superbe, ne s'en inquiéterait pas plus que d'un taudis. Ce palais nous a coûté des sommes énormes ; nous sommes donc en droit de savoir comment il se comporte et quelles améliorations ou révisions sont désormais urgentes."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Social",
    "title": "La mortalité",
    "summary": "À l'heure où la natalité décline, l'analyse précise de la mortalité par tranches d'âge devient une nécessité nationale pour permettre aux savants d'identifier et d'appliquer les remèdes appropriés à cette crise.",
    "paragraphs": [
      "Une autre question extrêmement importante est celle de l'âge, car elle permet de définir exactement la proportion de la mortalité, soit dans l'enfance, l'âge adulte, l'âge mûr et la vieillesse. Au moment où la natalité tend à diminuer dans des proportions véritablement effrayantes, la question de la mortalité prend une importance très grande.",
      "Il faut savoir dans quelles proportions elle frappe les jeunes gens et les hommes, les vieillards et les enfants, et cela pour permettre aux savants et aux personnalités compétentes de chercher et d'appliquer le remède au mal. Ce fut un tollé général quand on posa cette question de l'âge ; elle a bien son utilité pourtant."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Technologie",
    "title": "La machine à recenser",
    "summary": "La France adopte la machine à classer de M. Hollerith pour ses recensements. Cette innovation américaine, déjà éprouvée en Autriche et en Russie, garantit une fiabilité supérieure aux méthodes manuelles.",
    "paragraphs": [
      "On a vu plus haut que les opérations faites dans les mairies seraient sommaires et que les seuls résultats valables seraient ceux publiés par le ministère du Commerce. Là, en effet, c'est une machine qui lira et classera les bulletins.",
      "Cette machine, inventée par un Américain, M. Hollerith, a fonctionné en France lors du dernier recensement professionnel. Elle est adoptée en Amérique et en Autriche et a donné des résultats si probants que l'on s'est décidé à l'adopter chez nous, ainsi qu'en Russie, en Allemagne et en Angleterre."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Dépêches de l'Etranger",
    "title": "L'incident Buffet-Déroulède",
    "summary": "M. Buffet a désigné MM. Roger Lambelin et le comte Paul Bézinc pour représenter ses intérêts. Ses témoins sont partis pour Paris afin de s'aboucher dès aujourd'hui avec ceux de M. Déroulède.",
    "paragraphs": [
      "Bruxelles, 4 mars : M. Buffet avait appelé ce matin auprès de lui MM. le comte de Mayol de Luppé, Roger Lambelin et le comte Paul Bézinc. Il a été décidé que MM. Roger Lambelin et Paul Bézinc représenteraient M. Buffet. Tous deux sont partis pour Paris par l'express d'une heure. Ils s'aboucheront très probablement, aujourd'hui même, avec les témoins de M. Déroulède."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Dépêches de l'Etranger",
    "title": "Les élections municipales à Londres",
    "summary": "Les élections municipales londoniennes confirment le succès des progressistes. En refusant d'introduire la politique dans le débat, ils obtiennent une majorité renforcée face aux modérés.",
    "paragraphs": [
      "Londres, 4 mars : Tous les journaux commentent le résultat des élections municipales de Londres qui ont eu lieu samedi. Ces résultats constituent une nouvelle victoire pour les progressistes qui s'étaient opposés aux modérés.",
      "Les progressistes s'étaient toujours opposés à l'introduction de la question politique, et les électeurs de Londres leur ont donné raison, puisqu'ils ont obtenu une majorité plus considérable qu'aux précédentes élections."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "Déchéance de MM. Déroulède et Marcel Habert",
    "summary": "Après une longue séance de débats, la Chambre des députés a voté la déchéance des mandats de MM. Paul Déroulède et Marcel Habert, se ralliant aux conclusions de la commission par une large majorité.",
    "paragraphs": [
      "La Chambre a discuté les propositions de résolution relatives à la déchéance de MM. Paul Déroulède et Marcel Habert, dans une longue séance qu'elle a prolongée jusqu'à dix heures du soir. Les amis politiques des deux condamnés ont tenu à protester contre l'arrêt qui les a frappés.",
      "La Chambre n'a pas adopté cette opinion et s'est ralliée aux conclusions de la commission. Par 552 voix contre 117, elle a prononcé la déchéance de M. Paul Déroulède. M. Marcel Habert a été ensuite déclaré déchu de son mandat par 347 voix contre."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident de montagne",
    "summary": "Aux Avanchers, près de Moutiers, Joseph Wibert, 57 ans, a trouvé la mort dans un tragique accident de montagne. Son traîneau, mal assuré, a glissé, l'entraînant dans sa chute mortelle.",
    "paragraphs": [
      "Chambéry, 4 mars : Trois propriétaires des Avanchers, commune de Moutiers, MM. Joseph Wibert, Émile et Emmanuel Muraz, se rendaient à la montagne pour charger du bois sur de petits traîneaux. Arrivés au lieu-dit les Bachots, les trois montagnards se reposaient un instant.",
      "Malheureusement, Joseph Wibert avait négligé de placer le sien en travers du chemin. Le traîneau glissa soudain et son propriétaire fut entraîné dans un couloir dangereux où il tomba. La victime, qui était âgée de cinquante-sept ans, laisse une veuve et trois enfants."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrestation d'un fonctionnaire",
    "summary": "À Lyon, suite à une requête en mise en liberté provisoire pour l'ancien chef de division de la préfecture du Rhône, le juge d'instruction M. Deschamps a mandaté une expertise médicale.",
    "paragraphs": [
      "Lyon, 4 mars : À la suite de la demande de mise en liberté provisoire formulée par M. Meyer, M. Deschamps, juge d'instruction, a commis le docteur Boyer, médecin légiste, pour examiner l'état de santé de l'ancien chef de division de la préfecture du Rhône."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Social",
    "title": "Grève au port de Marseille",
    "summary": "Le port de Marseille est paralysé par une grève des ouvriers charbonniers. Le mouvement, qui s'étend aux docks, bloque le trafic maritime et le chargement des navires.",
    "paragraphs": [
      "Marseille, 4 mars. Les ouvriers charbonniers, lors d'une réunion tenue hier après-midi, ont décidé de faire grève. À l'issue de celle-ci, trois cents d'entre eux se sont rendus sur les quais, s'approchant des paquebots en cours d'approvisionnement pour entraîner leurs camarades à cesser le travail.",
      "Il en résulte un arrêt complet de l'activité marseillaise. Les navires à vapeur, ne pouvant plus s'approvisionner en charbon, ne pourront plus faire escale tant que durera le mouvement. Sept cargo-boats battant pavillon britannique ont dû interrompre leurs opérations de déchargement.",
      "Le yacht du prince de Monaco, arrivé dans la matinée, n'a pu se ravitailler qu'avec le concours de son propre équipage.",
      "Par ailleurs, les grévistes des docks et des quais s'opposent désormais à l'enlèvement des marchandises déposées antérieurement sur les quais. Un navire, n'ayant pu décharger ses primeurs hier soir, a dû faire voile vers Saint-Louis-du-Rhône.",
      "Deux grévistes ont été arrêtés et condamnés, l'un à vingt et l'autre à quarante jours de prison.",
      "Enfin, on apprend de Cette que les ouvriers des quais de cette ville empêchent le déchargement de marchandises arrivant de Marseille qui n'ont pu être traitées dans notre port."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Social",
    "title": "La grève des mineurs à Montceau-les-Mines",
    "summary": "La journée a été calme à Montceau-les-Mines. Les mineurs se préparent au meeting de ce soir, en présence du délégué Mulfen et de plusieurs députés attendus pour demain.",
    "paragraphs": [
      "Montceau-les-Mines, 4 mars. La journée a été des plus calmes. Il n'y a pas eu de manifestation ; le temps est du reste affreux, et on ne rencontre aucun groupe de grévistes dans les rues.",
      "M. Mulfen, l'un des trois délégués des mineurs auprès du gouvernement, est rentré ce matin à Montceau. Il doit prendre la parole lors du meeting qui se tiendra ce soir, salle Pérot. On attend les députés Latié et Develle, dont l'arrivée est annoncée pour demain matin."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Cour d'assises du Gard : L'affaire de Vaucroze",
    "summary": "Le procès de l'affaire de Vaucroze se poursuit à Nîmes. Après avoir écarté l'incident des fragments de lettre, la Cour examine les témoignages avant la plaidoirie finale.",
    "paragraphs": [
      "Nîmes, 4 mars. La dernière partie des débats porte sur l'incident qui nécessita, au mois de décembre dernier, le renvoi de l'affaire à une autre session. Il a été démontré que les fragments de lettre produits par M. Chatel, issus du dossier de diffamation Audibert, ne concernaient aucunement l'affaire de Vaucroze.",
      "M. le président Aboi, en prévision d'une scène violente, a prié le bâtonnier de l'ordre des avocats de bien vouloir assister à l'audience.",
      "Sur la demande de M. Imbert, avocat de la défense, l'avocat général Ceuasse a donné lecture du procès-verbal de l'incident du 7 décembre dernier.",
      "Le témoin M. Marius Beaume reconnaît avoir eu des fonds appartenant à la famille de Vaucroze. Il nie avoir reçu des dons, mais admet une avance de 500 francs.",
      "L'avocat général fait remarquer que Clément Beaume, destinataire de la lettre produite, est étranger à l'affaire. L'accusé Gayte abonde dans le sens de l'avocat général pour affirmer que Clément Beaume est un parfait honnête homme.",
      "La question du fragment de lettre étant tranchée, on procède à l'audition des témoins à décharge. Gayte intervient pour poser diverses questions sur le déroulement du crime.",
      "Après une suspension, M. Ménard, avocat de la partie civile, s'élève contre les procédés de la défense et demande aux jurés de reconnaître la culpabilité de Gayte.",
      "L'avocat général réaffirme que Gayte est certainement l'un des complices de l'assassinat. L'audience étant avancée, M. le président a remis la suite du réquisitoire à demain matin."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Social",
    "title": "Congrès des mineurs du Pas-de-Calais",
    "summary": "À Lens, les délégués du bassin houiller du Pas-de-Calais ont clos leur congrès en ratifiant les décisions de la fédération de Saint-Étienne et en organisant une solidarité financière pour les grévistes miniers.",
    "paragraphs": [
      "Lens. Voici le texte de l'ordre du jour qui a clôturé, hier soir, la seconde réunion tenue par les délégués des mineurs du bassin houiller du Pas-de-Calais : « Les délégués approuvent les décisions prises par le comité fédéral national dans sa dernière réunion de Saint-Étienne et décident d'ouvrir des souscriptions pour venir en aide aux grévistes de Montceau-les-Mines et de Saint-Éloy. »"
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un caissier en fuite à Perpignan",
    "summary": "M. Verges, caissier à la Trésorerie des Pyrénées-Orientales, a disparu. Un audit révèle un déficit de 60 000 francs et l'existence de nombreux faux documents comptables.",
    "paragraphs": [
      "Perpignan, 4 mars. Le caissier de la Trésorerie des Pyrénées-Orientales, nommé Verges, a pris la fuite samedi soir. Sa caisse a été aussitôt vérifiée. On a découvert un déficit s'élevant actuellement à 60 000 francs. On craint que le montant des détournements ne soit plus élevé, car de nombreux faux ont été découverts.",
      "Verges, ancien instituteur, était caissier de la trésorerie depuis trente-cinq ans et jouissait d'une grande considération."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Corruption à la préfecture de la Seine",
    "summary": "Trois employés de la préfecture de la Seine sont poursuivis pour avoir monnayé l'attribution d'emplacements aux Halles et usé de manœuvres frauduleuses contre les solliciteurs.",
    "paragraphs": [
      "Trois employés de la préfecture de la Seine, les nommés S., D. et B., sont actuellement l'objet de poursuites pour corruption de fonctionnaires. Lorsqu'un emplacement leur était demandé dans le service des Halles et marchés, ils ne l'accordaient qu'aux solliciteurs qui leur avaient préalablement versé une somme d'argent.",
      "Pour évincer les autres concurrents, ils adressaient leurs courriers à des lieux fictifs afin que les lettres de refus reviennent avec la mention « Inconnu ». L'affaire, qui semble compliquée de faux, est désormais entre les mains du magistrat instructeur chargé de l'enquête."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'une étudiante russe",
    "summary": "Mlle Olga Doromirou, étudiante russe, a été arrêtée par le commissaire du quartier de la Sorbonne pour avoir harcelé les professeurs de lettres de menaces. Elle a été dirigée vers l'infirmerie du dépôt.",
    "paragraphs": [
      "M. Rieux, commissaire de police du quartier de la Sorbonne, a procédé hier à l'arrestation d'une étudiante russe, Mlle Olga Doromirou, qui envoyait quotidiennement des lettres de menaces aux professeurs de la Sorbonne.",
      "L'auteur des lettres, âgée de trente-huit ans, habitait rue de Meudon, à Clamart. Convaincu que ses facultés mentales étaient ébranlées, le commissaire l'a fait diriger sur l'infirmerie spéciale du dépôt."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Déraillement d'un train à Montparnasse",
    "summary": "Un train en provenance de Granville a déraillé hier près de la gare Montparnasse. Aucun passager n'a été blessé, mais l'accident a paralysé le trafic ferroviaire durant plus de trois heures.",
    "paragraphs": [
      "Un train de voyageurs venant de Granville a déraillé hier matin sur les ponts du Midi, aux abords de la place du Maine, peu avant son entrée en gare. La locomotive ainsi que le tender ont quitté la voie ferrée.",
      "Fort heureusement, aucun accident de personnes n'est à déplorer, mais le service régulier a été interrompu pendant plus de trois heures, provoquant un encombrement notable sur le réseau."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans la banlieue",
    "summary": "Série de drames en banlieue : double asphyxie volontaire à Argenteuil, tragique accident de revolver à Saint-Ouen, agression à Ivry, et incendies dévastateurs à Montlhéry et Courbevoie.",
    "paragraphs": [
      "Argenteuil : Deux ouvriers, Louis Richard et Gaston Vartelle, ont été retrouvés morts dans leur chambre d'hôtel, après avoir obstrué les issues et démonté le tuyau du poêle pour mettre fin à leurs jours par asphyxie.",
      "Saint-Ouen : Le jeune Léon Lafont, âgé de treize ans, a trouvé un revolver chargé caché sous l'oreiller de son père. En manipulant l'arme, il s'est tiré une balle dans la tempe et a succombé instantanément.",
      "Ivry : Trois malfaiteurs ont dérobé un attelage près de la gare. Lors de la poursuite, M. Ogé, marchand de voitures, a été grièvement blessé par un coup de feu tiré par l'un des fuyards.",
      "Montlhéry : Un incendie a détruit, hier matin, chez M. Biessy, bijoutier, un logement situé au deuxième étage. Les dégâts matériels sont estimés à plus de 5 000 francs.",
      "Courbevoie : Un incendie a ravagé la ferme de M. Tschaino, détruisant intégralement un hangar, plusieurs voitures et un stock de trois mille bourrées."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Sports",
    "title": "Football : Le Stade français à Bordeaux",
    "summary": "Qualifié grâce à sa victoire sur le Racing-Club, le Stade français est officiellement désigné pour représenter la capitale à Bordeaux lors du Championnat de France de rugby.",
    "paragraphs": [
      "Du fait de sa victoire, avant-hier, sur le Racing-Club, c'est le Stade français qui se rendra à Bordeaux pour y disputer le Championnat de France de rugby."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Sports",
    "title": "Obsèques du général Henrion-Bertier",
    "summary": "Le Touring-Club de France convie ses membres à rendre un dernier hommage au général Henrion-Bertier, président d'honneur de l'association et maire de Neuilly-sur-Seine, lors de ses obsèques.",
    "paragraphs": [
      "Les membres du Touring-Club de France sont invités à assister aux obsèques de leur président d'honneur, le général Henrion-Bertier, maire de Neuilly-sur-Seine.",
      "Le rassemblement est fixé à la mairie de Neuilly, le mercredi 6 mars, à 11 heures précises."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Sports",
    "title": "Escrime : Grande soirée au Nouveau-Théâtre",
    "summary": "Une prestigieuse soirée d'escrime se tiendra ce vendredi au Nouveau-Théâtre, mettant en vedette les maîtres italiens Pini et Athos de San Malato lors d'assauts exceptionnels.",
    "paragraphs": [
      "Vendredi prochain, 8 mars, au Nouveau-Théâtre, rue Blanche, se tiendra une grande soirée d'escrime.",
      "Entre autres assauts, le public pourra admirer les maîtres italiens Pini et Athos de San Malato.",
      "Lundi, lors de la seconde soirée, le programme proposera un assaut à l'épée entre MM. Athos de San Malato et Damotte, ainsi qu'un assaut au fleuret opposant MM. Pini et Lucien Mérignac."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Sports",
    "title": "Cyclisme dans le Midi",
    "summary": "Lors des épreuves cyclistes organisées à Hyères, le coureur Goutz s'est brillamment illustré en remportant la course de vitesse et l'épreuve de 25 kilomètres.",
    "paragraphs": [
      "Avant-hier, Goutz a enlevé la course de vitesse ainsi que l'épreuve de 25 kilomètres inscrites au programme des courses cyclistes de Hyères."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Sports",
    "title": "Monte-Carlo : Prix de la Turbie",
    "summary": "À Monte-Carlo, le Prix de la Turbie a vu s'élancer trente-huit coureurs. Le prince Potenziani et M. Ronthadon ont partagé la victoire, tandis que M. Roberts complète le podium. M. Gafon s'adjuge la poule.",
    "paragraphs": [
      "On nous télégraphie de Monte-Carlo : trente-huit coureurs ont pris part au prix de la Turbie. Les première et deuxième places ont été partagées entre M. le prince Potenziani et M. Ronthadon.",
      "La troisième place a été remportée par M. Roberts. La poule a été gagnée par M. Gafon."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Cours des denrées",
    "summary": "État du marché des bestiaux : les transactions sont laborieuses pour les bœufs et les veaux, dont les cours peinent à se maintenir. Seul le marché du porc affiche des prix relativement soutenus malgré une vente ralentie.",
    "paragraphs": [
      "Bœufs : Vente mauvaise et prix difficilement soutenus.",
      "Veau : Vente mauvaise et prix identiques.",
      "Porcs : Vente ralentie, mais prix soutenus."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Spectacles",
    "title": "Programme des spectacles du 5 mars",
    "summary": "Voici le programme des représentations théâtrales pour la soirée du 5 mars, incluant les affiches du Théâtre-Français, de l'Odéon, des Variétés, du Nouveau-Théâtre et des Folies-Bergère.",
    "paragraphs": [
      "Théâtre-Français : Cabotins.",
      "Odéon : Le Château historique.",
      "Variétés : La Mascotte.",
      "Nouveau-Théâtre : La Chanson du P'tit.",
      "Folies-Bergère : La revue « Les Remplaçantes »."
    ]
  }
];
