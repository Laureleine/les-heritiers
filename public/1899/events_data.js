const EVENTS_DATA = {
  "1899-11-01": {
    "paris": "Inauguration du monument aux morts du cimetière du Père-Lachaise ; la saison théâtrale 1899-1900 bat son plein aux Bouffes-Parisiens et à la Porte-Saint-Martin",
    "france": "La mission Foureau-Lamy, partie d'Algérie en octobre 1898, approche de Zinder au Niger",
    "monde": "Les Boers achèvent l'encerclement de Ladysmith (Natal) ; le siège commence, coupant la garnison britannique du reste de la colonie"
  },
  "1899-11-02": {
    "paris": "La vie culturelle parisienne suit son cours ; reprise des représentations à l'Opéra-Comique et à la Comédie-Française",
    "france": "La mission Foureau-Lamy atteint Zinder (Niger), première étape majeure de la traversée du Sahara",
    "monde": "Début officiel du siège de Ladysmith par les forces boers (dure jusqu'au 28 février 1900)"
  },
  "1899-11-03": {
    "paris": "Les travaux de l'Exposition universelle de 1900 avancent sur le Champ-de-Mars, l'esplanade des Invalides et les quais de Seine",
    "france": "Poursuite de l'instruction des 17 prévenus du complot nationaliste devant la commission d'instruction de la Haute Cour",
    "monde": "Création à Moscou de 'La Fiancée du tsar', opéra de Nikolaï Rimski-Korsakov, au Théâtre Solodovnikov"
  },
  "1899-11-04": {
    "paris": "Les Parisiens assistent aux premières représentations de la saison d'hiver ; Camille Pissarro peint depuis son appartement du quai des Tuileries",
    "france": "Henry Maret dépose à la Chambre une proposition de loi sur la liberté de la presse",
    "monde": "Création à Helsinki du poème symphonique 'Finlandia' de Jean Sibelius, par l'Orchestre philharmonique d'Helsinki sous la direction du compositeur"
  },
  "1899-11-05": {
    "paris": "Dimanche populaire : promenades au Bois de Boulogne et aux grands boulevards éclairés à l'électricité",
    "france": "Aucun événement majeur connu ; la vie politique est dominée par la préparation du procès des nationalistes",
    "monde": "Aucun événement majeur connu ; accalmie relative sur les fronts de la guerre des Boers"
  },
  "1899-11-06": {
    "paris": "Semaine théâtrale animée : 'Les Misérables' adapté par Paul Meurice au Théâtre de la Porte-Saint-Martin attire les foules",
    "france": "Débat à la Chambre sur la politique de défense républicaine du gouvernement Waldeck-Rousseau",
    "monde": "Aux Philippines, les forces américaines poursuivent leur campagne contre les insurgés d'Aguinaldo"
  },
  "1899-11-07": {
    "paris": "La presse parisienne (Le Figaro, La Libre Parole, L'Aurore) couvre intensément l'approche du procès des ligueurs",
    "france": "Derniers préparatifs du procès devant la Haute Cour ; le Sénat s'organise pour siéger juridictionnellement",
    "monde": "Aucun événement majeur connu"
  },
  "1899-11-08": {
    "paris": "Les journaux parisiens annoncent l'évacuation de Kouno par Rabah ; l'expansion française au Tchad se poursuit",
    "france": "Le général Robillot, après la bataille incertaine de Kouno (28 octobre), voit Rabah évacuer la ville et se replie sur Fort-Archambault",
    "monde": "Le chef soudanais Rabah az-Zubayr évacue Kouno (Tchad) après l'affrontement indécis avec les troupes françaises du général Robillot"
  },
  "1899-11-09": {
    "paris": "Le procès des ligueurs s'ouvre au Palais du Luxembourg ; la presse parisienne est en ébullition, les abords du Sénat sont noirs de monde",
    "france": "Ouverture du procès des 17 comploteurs nationalistes et antisémites devant le Sénat transformé en Haute Cour, présidée par Armand Fallières. Déroulède, Buffet, Guérin et 14 autres comparaissent pour complot contre l'État",
    "monde": "Aucun événement mondial majeur ; l'attention internationale est focalisée sur le procès de Paris et la guerre des Boers"
  },
  "1899-11-10": {
    "paris": "Deuxième audience du procès devant la Haute Cour ; les avocats de la défense, menés par Me Devin, plaident l'incompétence de la juridiction",
    "france": "Début des plaidoiries sur la compétence de la Haute Cour ; Me Devin, soutenu par Henri Wallon, conteste que le complot soit un 'attentat' passible du Sénat",
    "monde": "Aucun événement majeur connu"
  },
  "1899-11-11": {
    "paris": "Les Parisiens suivent avec passion le verdict de la Haute Cour sur la question de compétence",
    "france": "La Haute Cour se prononce sur sa compétence : par 157 voix contre 91, les sénateurs jugent le complot comme relevant de l'attentat contre la sûreté de l'État. La République triomphe au Palais du Luxembourg",
    "monde": "Aucun événement majeur connu"
  },
  "1899-11-12": {
    "paris": "Dimanche : les cafés et brasseries parisiens bruissent des commentaires sur le vote de la Haute Cour",
    "france": "Les interrogatoires des accusés commencent devant la Haute Cour ; Déroulède se déclare 'défenseur des droits du peuple'",
    "monde": "Aucun événement majeur connu"
  },
  "1899-11-13": {
    "paris": "Les débats du procès continuent ; le conseil municipal de Paris siège sur les questions budgétaires",
    "france": "Le système de l'indigénat est officiellement introduit à Madagascar, Mayotte et dépendances, soumettant les populations autochtones à un régime juridique d'exception",
    "monde": "Les forces britanniques en Afrique du Sud se préparent à l'offensive pour secourir Kimberley et Ladysmith"
  },
  "1899-11-14": {
    "paris": "Représentation de 'La Bohème' au Théâtre de la Renaissance ; la saison culturelle bat son plein",
    "france": "Audience houleuse à la Haute Cour : Déroulède conteste avec virulence la légitimité du président Loubet",
    "monde": "Les Boers du Transvaal repoussent une tentative britannique de percer leurs lignes autour de Ladysmith"
  },
  "1899-11-15": {
    "paris": "Les journaux du soir titrent sur l'embuscade du train blindé britannique en Afrique du Sud",
    "france": "Le Figaro publie une chronique détaillée sur les débats de la Haute Cour ; la Ligue des Patriotes tente de maintenir l'agitation",
    "monde": "Bataille de Chieveley (Natal) : un train blindé britannique est pris en embuscade par les Boers. Le jeune correspondant de guerre Winston Churchill est capturé et emmené prisonnier à Pretoria"
  },
  "1899-11-16": {
    "paris": "Les quartiers populaires s'animent des discussions sur le procès des ligueurs",
    "france": "La Chambre des députés vote un ordre du jour de confiance au gouvernement Waldeck-Rousseau : 317 voix contre 212 approuvent 'les actes de défense républicaine' du gouvernement",
    "monde": "Aucun événement majeur connu"
  },
  "1899-11-17": {
    "paris": "Les milieux politiques et judiciaires parisiens commentent le dépôt du projet d'amnistie",
    "france": "Le gouvernement Waldeck-Rousseau dépose un projet de loi d'amnistie couvrant 'tous les faits criminels ou délictueux connexes à l'affaire Dreyfus', suscitant de vives protestations des dreyfusards intransigeants qui réclament justice et non oubli",
    "monde": "Les Britanniques concentrent leurs forces à Estcourt (Natal) en vue d'une offensive de déblocage"
  },
  "1899-11-18": {
    "paris": "Les préparatifs de l'inauguration du Triomphe de la République mobilisent la Ville de Paris",
    "france": "Suite des interrogatoires à la Haute Cour ; Jules Guérin, le héros du 'Fort Chabrol', captive les sénateurs par son récit",
    "monde": "L'écrivain et ornithologue Arthur Stark est mortellement blessé par un obus boer alors qu'il se tient au Royal Hotel de Ladysmith"
  },
  "1899-11-19": {
    "paris": "INAUGURATION SOLENNELLE DU TRIOMPHE DE LA RÉPUBLIQUE, place de la Nation. Une foule immense estimée à 350 000 personnes défile devant le président Émile Loubet. Le sculpteur Jules Dalou est fait commandeur de la Légion d'honneur. Charles Péguy immortalisera cette 'procession du peuple parisien'",
    "france": "Le gouvernement Waldeck-Rousseau transforme l'inauguration en manifestation politique de la République triomphante face aux nationalistes. La foule crie 'Vive la République !' et 'Mercier au bagne !'",
    "monde": "Aucun événement mondial majeur ; l'événement parisien est couvert par la presse internationale comme un signe de la consolidation républicaine en France"
  },
  "1899-11-20": {
    "paris": "La presse parisienne rend compte abondamment de la grandiose cérémonie de la veille ; photos et gravures dans tous les journaux illustrés",
    "france": "Suite du procès devant la Haute Cour ; l'interrogatoire des témoins commence",
    "monde": "Les forces britanniques sous Lord Methuen atteignent le Modder River en marche vers Kimberley"
  },
  "1899-11-21": {
    "paris": "Les théâtres parisiens annoncent leurs programmes de fin d'année ; l'Opéra prépare 'La Prise de Troie' de Berlioz",
    "france": "L'ambiance à la Haute Cour se détériore ; les sénateurs-juges commencent à manifester leur lassitude",
    "monde": "Lord Methuen quitte le camp de l'Orange River et commence sa marche vers le nord en direction de Kimberley"
  },
  "1899-11-22": {
    "paris": "Vie parisienne normale ; les grands magasins (Le Bon Marché, Les Galeries Lafayette) lancent leurs campagnes de Noël",
    "france": "Les débats de la Haute Cour se poursuivent avec l'audition des témoins",
    "monde": "Aucun événement majeur connu"
  },
  "1899-11-23": {
    "paris": "Première de 'La Prise de Troie' d'Hector Berlioz à l'Opéra de Paris, trente-six ans après la création des 'Troyens à Carthage'",
    "france": "Audience de la Haute Cour : un témoin s'écrie 'Vive Déroulède !' et est immédiatement arrêté",
    "monde": "Bataille de Belmont (Seconde Guerre des Boers) : les forces britanniques de Lord Methuen remportent une première victoire en prenant d'assaut les collines tenues par les Boers"
  },
  "1899-11-24": {
    "paris": "Les chroniqueurs musicaux saluent la représentation de Berlioz ; les salons parisiens débattent de la musique wagnérienne",
    "france": "Les interrogatoires se poursuivent ; le comte de Sabran-Pontevès amuse l'assemblée par son humour",
    "monde": "Mort d'Abdallah ibn Mohammed al-Ta'a'ishi, le Khalifa, successeur du Mahdi au Soudan, tué lors de la bataille d'Umm Diwaykarat par les forces anglo-égyptiennes de Lord Kitchener"
  },
  "1899-11-25": {
    "paris": "Les théâtres parisiens jouent à guichets fermés pour les dernières représentations du mois",
    "france": "La Haute Cour suspend ses audiences pour le week-end ; les accusés sont reconduits à leurs lieux de détention",
    "monde": "Bataille de Graspan (Seconde Guerre des Boers) : seconde victoire britannique de Lord Methuen, les Boers se retirent après de durs combats"
  },
  "1899-11-26": {
    "paris": "Dimanche : promenades dominicales et messes dans les églises parisiennes ; les journaux du soir résument la semaine du procès",
    "france": "Aucun événement majeur connu ; suspension dominicale des audiences",
    "monde": "Aucun événement majeur connu"
  },
  "1899-11-27": {
    "paris": "Les agents de change et les banquiers parisiens suivent avec attention les nouvelles d'Afrique du Sud",
    "france": "Reprise des audiences de la Haute Cour ; les témoins de l'accusation se succèdent à la barre",
    "monde": "Le général Sir Redvers Buller arrive à Natal pour prendre personnellement le commandement des forces britanniques et organiser la relève de Ladysmith"
  },
  "1899-11-28": {
    "paris": "Décès à Paris de Virginia Oldoini, comtesse de Castiglione, célèbre beauté italienne et maîtresse de Napoléon III, figure importante des débuts de la photographie",
    "france": "Les débats devant la Haute Cour tournent à la 'pétaudière' : sénateurs, accusés, avocats parlent tous à la fois",
    "monde": "Bataille de Modder River : Lord Methuen défait les forces boers de Cronjé et De la Rey, mais les pertes britanniques sont lourdes (71 morts, 400 blessés). Les Boers évacuent la position pendant la nuit"
  },
  "1899-11-29": {
    "paris": "La presse parisienne multiplie les éditoriaux sur la situation en Afrique du Sud et sur le procès de la Haute Cour",
    "france": "Les sénateurs-juges, de plus en plus las, désertent l'hémicycle ; une vingtaine d'entre eux quittent l'audience en cours de séance",
    "monde": "Fondation du FC Barcelone par le Suisse Hans Gamper (Joan Gamper), qui deviendra l'un des clubs les plus emblématiques du football mondial"
  },
  "1899-11-30": {
    "paris": "À l'Opéra, 'La Prise de Troie' de Berlioz est à l'affiche ; la Revue des Deux Mondes publie une étude critique de Camille Bellaigue sur Berlioz et Wagner",
    "france": "Le procès des nationalistes se poursuit dans le tumulte ; la défense demande l'expulsion des sénateurs absents",
    "monde": "Les forces boers autour de Ladysmith bombardent la ville avec leur canon 'Long Tom' ; les assiégés endurent des conditions de plus en plus pénibles"
  },
  "1899-12-01": {
    "paris": "Début du mois de décembre : les préparatifs de Noël animent les rues commerçantes de la capitale ; les grands magasins rivalisent d'étalages",
    "france": "Les travaux parlementaires se poursuivent ; le débat sur l'amnistie des faits liés à l'affaire Dreyfus agite les couloirs de la Chambre",
    "monde": "Premier cas de peste signalé à Honolulu (Oahu, Hawaï) ; début d'une épidémie qui va durer plusieurs mois"
  },
  "1899-12-02": {
    "paris": "Week-end parisien : les théâtres font salle comble ; le café-concert est à la mode dans les quartiers populaires",
    "france": "La situation politique reste dominée par le procès de la Haute Cour et les débats parlementaires",
    "monde": "Bataille de Tirad Pass (Philippines) : 60 soldats philippins commandés par le général Gregorio del Pilar retiennent 500 Américains pendant 5 heures pour permettre la fuite d'Aguinaldo. Del Pilar est tué. Surnommé les 'Thermopyles philippines'"
  },
  "1899-12-03": {
    "paris": "Ouverture à Paris du premier Congrès général des organisations socialistes françaises, salle Wagram ou à la Bourse du Travail",
    "france": "Le Congrès général des organisations socialistes s'ouvre à Paris, réunissant 1 452 délégués de cinq organisations rivales. La question centrale : faut-il participer au gouvernement bourgeois ?",
    "monde": "Aucun événement mondial majeur ; le monde politique britannique est sous le choc des défaites à venir"
  },
  "1899-12-04": {
    "paris": "Deuxième journée du Congrès socialiste à Paris ; les débats entre guesdistes, blanquistes et indépendants sont passionnés",
    "france": "Le congrès socialiste poursuit ses travaux : Jules Guesde s'oppose farouchement à la participation ministérielle, Jean Jaurès la défend au nom de la défense républicaine",
    "monde": "Aucun événement majeur connu"
  },
  "1899-12-05": {
    "paris": "Troisième journée du Congrès socialiste ; Alexandre Millerand, premier socialiste à entrer dans un gouvernement, est au cœur des controverses",
    "france": "Le 'cas Millerand' divise profondément les socialistes : le Congrès doit trancher entre la ligne révolutionnaire de Guesde et la ligne réformiste de Jaurès",
    "monde": "Aucun événement majeur connu"
  },
  "1899-12-06": {
    "paris": "Les journaux parisiens couvrent à la fois le Congrès socialiste et le procès de la Haute Cour",
    "france": "Quatrième journée du Congrès socialiste : les débats s'enveniment entre partisans et adversaires de la participation gouvernementale",
    "monde": "En Allemagne, le Reichstag adopte la 'loi Hohenlohe' qui lève l'interdiction sur la création des associations politiques, ouvrant la voie à de nouveaux partis"
  },
  "1899-12-07": {
    "paris": "Les Jeux olympiques de 1900 se préparent ; les Parisiens s'intéressent aux futures compétitions qui accompagneront l'Exposition universelle",
    "france": "Le Congrès socialiste approche de sa conclusion ; les tensions entre guesdistes et jaurésiens restent vives",
    "monde": "Aux États-Unis, la commission municipale de Galveston (Texas) commence à organiser les secours après l'ouragan dévastateur de septembre"
  },
  "1899-12-08": {
    "paris": "Clôture du Congrès général des organisations socialistes ; les délégués adoptent une motion de compromis qui n'exclut pas la participation gouvernementale",
    "france": "Fin du premier Congrès général des organisations socialistes françaises. Le compromis obtenu permet à Jaurès de continuer à soutenir Waldeck-Rousseau tout en préservant l'unité du mouvement socialiste",
    "monde": "Aucun événement majeur connu"
  },
  "1899-12-09": {
    "paris": "Naissance à Paris de Jean de Brunhoff, futur écrivain et illustrateur, créateur du personnage de 'Babar l'éléphant'",
    "france": "Les audiences de la Haute Cour s'enlisent dans des incidents de procédure ; l'attention du public commence à se lasser",
    "monde": "Les forces britanniques en Afrique du Sud se préparent à l'assaut général ; Buller rassemble ses troupes à Chieveley"
  },
  "1899-12-10": {
    "paris": "Dimanche : les Parisiens lisent dans les journaux les premières nouvelles des désastres britanniques en Afrique du Sud",
    "france": "Aucun événement intérieur majeur ; suspension dominicale des activités parlementaires et judiciaires",
    "monde": "Début de la 'Semaine Noire' (Black Week) pour l'armée britannique. Bataille de Stormberg : le général Gatacre attaque les positions boers de nuit et subit une cuisante défaite (135 tués et blessés, plus de 600 prisonniers)"
  },
  "1899-12-11": {
    "paris": "Les journaux parisiens titrent sur les désastres britanniques ; la presse française est partagée entre sympathie pour les Boers et inquiétude géopolitique",
    "france": "Les débats de la Haute Cour continuent ; Paul Déroulède multiplie les sorties théâtrales qui enchantent les spectateurs",
    "monde": "Bataille de Magersfontein : les Boers de Koos de la Rey et Piet Cronjé écrasent la Highland Brigade britannique. Le général Wauchope est tué. Les pertes britanniques s'élèvent à 210 morts et 675 blessés. Deuxième désastre de la 'Semaine Noire'"
  },
  "1899-12-12": {
    "paris": "Les Parisiens suivent avec fascination les nouvelles d'Afrique du Sud ; les journalistes comparent les tactiques boers aux guerres de la Révolution française",
    "france": "La Haute Cour poursuit ses audiences dans une atmosphère de plus en plus relâchée ; les apartés et les rires fusent dans l'hémicycle",
    "monde": "George F. Bryant, de Boston, dépose un brevet pour le tee de golf en bois, révolutionnant le sport"
  },
  "1899-12-13": {
    "paris": "Le conseil municipal de Paris examine les budgets pour les fêtes de fin d'année et les travaux de l'Exposition",
    "france": "À la Chambre, Waldeck-Rousseau défend sa politique de 'défense républicaine' face aux attaques des nationalistes",
    "monde": "Fondation présumée de l'AC Milan (Milan Foot-Ball and Cricket Club) par des expatriés anglais. Inauguration du nouveau bâtiment de la Glasgow School of Art, chef-d'œuvre de Charles Rennie Mackintosh"
  },
  "1899-12-14": {
    "paris": "Les théâtres parisiens annoncent leurs programmes de Noël ; l'Opéra-Comique prépare des représentations spéciales",
    "france": "Les travaux sur la loi d'amnistie avancent au Parlement ; les dreyfusards purs mènent campagne contre ce qu'ils considèrent comme un 'marché de dupes'",
    "monde": "Aucun événement majeur connu ; accalmie avant les tempêtes de la guerre des Boers"
  },
  "1899-12-15": {
    "paris": "Les nouvelles du désastre de Colenso parviennent à Paris ; les Bourses européennes réagissent nerveusement",
    "france": "Le Parlement français observe avec attention les conséquences de la 'Semaine Noire' sur l'équilibre des puissances en Europe",
    "monde": "Bataille de Colenso : troisième désastre britannique de la 'Semaine Noire'. Le général Buller tente de franchir la Tugela River pour délivrer Ladysmith mais est repoussé par Louis Botha. Les Britanniques perdent 143 tués, 756 blessés et 10 canons. Le fils de Lord Roberts, Freddie Roberts, est mortellement blessé"
  },
  "1899-12-16": {
    "paris": "Création au Théâtre du Gymnase de la comédie en un acte 'Le commissaire est bon enfant' de Georges Courteline et Jules Lévy",
    "france": "Le choc de la 'Semaine Noire' britannique renforce les nationalistes français qui voient l'Empire britannique vaciller",
    "monde": "La nouvelle des défaites britanniques provoque une onde de choc dans tout l'Empire. Le gouvernement britannique décrète la mobilisation de renforts massifs"
  },
  "1899-12-17": {
    "paris": "Dimanche : les chaires des églises parisiennes évoquent la guerre en Afrique du Sud ; les journaux du soir publient les premières réactions officielles",
    "france": "Le gouvernement Waldeck-Rousseau observe la crise britannique avec une attention diplomatique soutenue",
    "monde": "Le maréchal Lord Roberts est nommé commandant en chef suprême des forces britanniques en Afrique du Sud, remplaçant Buller. Lord Kitchener est nommé chef d'état-major"
  },
  "1899-12-18": {
    "paris": "Les milieux d'affaires parisiens s'inquiètent des répercussions économiques de la guerre des Boers sur le commerce colonial",
    "france": "La Haute Cour suspend ses audiences pour quelques jours ; Déroulède est autorisé à préparer sa défense",
    "monde": "Lord Roberts quitte Southampton à bord du RMS Dunottar Castle pour prendre le commandement des forces britanniques en Afrique du Sud"
  },
  "1899-12-19": {
    "paris": "Marcel Habert, réfugié à Bruxelles depuis août, se présente à la Haute Cour par solidarité avec Déroulède, choisissant de faire face à ses juges",
    "france": "Marcel Habert se constitue prisonnier devant la Haute Cour. Il est déclaré forclos. Déroulède entre dans une colère noire et insulte violemment les sénateurs et le président de la République",
    "monde": "Aucun événement majeur connu"
  },
  "1899-12-20": {
    "paris": "La Fête de Noël approche : les rues de Paris sont décorées, les étals des marchés regorgent de victuailles et de jouets",
    "france": "La Haute Cour disjoint le procès d'Habert de celui des autres accusés. Déroulède, dans une tirade célèbre, dénonce 'l'obéissance de la magistrature servile aux ordres du gouvernement'. Il est condamné à deux ans de prison pour outrages et exclu des débats",
    "monde": "Aucun événement majeur connu"
  },
  "1899-12-21": {
    "paris": "Les Parisiens commencent leurs achats de Noël ; les grands magasins du boulevard Haussmann connaissent une affluence record",
    "france": "Le procès continue sans Déroulède, qui n'assistera qu'aux plaidoiries. L'ordre règne enfin dans l'hémicycle",
    "monde": "Aucun événement majeur connu"
  },
  "1899-12-22": {
    "paris": "Les académiciens et les artistes parisiens préparent leurs expositions de fin d'année ; les salons littéraires s'animent",
    "france": "Les dernières auditions de témoins se déroulent devant la Haute Cour dans un calme relatif",
    "monde": "Aux États-Unis, les préparatifs pour le Nouvel An et le début du XXe siècle sont en cours"
  },
  "1899-12-23": {
    "paris": "Avant-veille de Noël : les églises parisiennes préparent les messes de minuit ; la ville est illuminée",
    "france": "Aucun événement majeur connu ; les parlementaires préparent la trêve des confiseurs",
    "monde": "Signature d'un traité préliminaire turco-allemand pour la construction du chemin de fer de Bagdad (Bagdadbahn), projet stratégique visant à relier Berlin à l'Empire ottoman"
  },
  "1899-12-24": {
    "paris": "Messe de minuit dans les églises parisiennes ; la traditionnelle nuit de Noël rassemble les familles autour du sapin et de la bûche",
    "france": "Aucun événement politique majeur ; trêve de Noël dans les institutions",
    "monde": "Le pape Léon XIII ouvre la Porte Sainte de la basilique Saint-Pierre au Vatican, inaugurant solennellement le Grand Jubilé de l'an 1900. Le pape est le premier à franchir seul la Porte Sainte, suivi par les fidèles"
  },
  "1899-12-25": {
    "paris": "Noël à Paris : messes, repas de fête et promenades en famille ; les théâtres proposent des représentations spéciales",
    "france": "Aucun événement majeur connu ; Noël dans toute la France",
    "monde": "Célébrations de Noël dans le monde chrétien ; ouverture de l'Année Sainte (Jubilé) proclamée par le pape Léon XIII"
  },
  "1899-12-26": {
    "paris": "Lendemain de Noël : les courses reprennent doucement ; les théâtres jouent leurs programmes habituels",
    "france": "Aucun événement majeur connu",
    "monde": "Aucun événement majeur connu"
  },
  "1899-12-27": {
    "paris": "Les journaux parisiens commencent à publier les bilans de l'année 1899 qui s'achève",
    "france": "Dernières audiences du procès de la Haute Cour avant les plaidoiries finales",
    "monde": "Aucun événement majeur connu"
  },
  "1899-12-28": {
    "paris": "La presse parisienne prépare ses numéros du Nouvel An ; les revues de fin d'année fleurissent sur les boulevards",
    "france": "En Algérie, la mission Flamand, expédition géologique envoyée dans le sud algérien, est attaquée par des Touaregs. Après avoir repoussé les agresseurs, les Français prennent le contrôle d'In Salah",
    "monde": "Aucun événement majeur connu"
  },
  "1899-12-29": {
    "paris": "Les Parisiens commencent à préparer le réveillon du Nouvel An ; les théâtres annoncent leurs galas de la Saint-Sylvestre",
    "france": "Les plaidoiries finales du procès de la Haute Cour s'achèvent ; les sénateurs se retirent pour délibérer",
    "monde": "Aucun événement majeur connu"
  },
  "1899-12-30": {
    "paris": "Création au Théâtre de la Gaîté de 'Les Saltimbanques', opéra-comique en trois actes de Louis Ganne, sur un livret de Maurice Ordonneau",
    "france": "Dernière journée des plaidoiries devant la Haute Cour ; l'arrêt est attendu pour les premiers jours de janvier 1900",
    "monde": "Aux Indes britanniques, une épidémie de peste bubonique continue de se propager, faisant des milliers de victimes"
  },
  "1899-12-31": {
    "paris": "La Saint-Sylvestre à Paris : concerts, bals et réveillons dans tous les quartiers. Sur le coup de minuit, Paris salue l'arrivée du XXe siècle dans l'allégresse",
    "france": "Dernier jour du XIXe siècle. La Cour de cassation rend son arrêt sur le pourvoi d'Alfred Dreyfus contre le verdict de Rennes : le pourvoi est REJETÉ. Dreyfus n'obtiendra justice qu'en 1906. La Haute Cour s'apprête à rendre son verdict le 4 janvier 1900",
    "monde": "Dernier jour du XIXe siècle. Le pape Léon XIII clôt l'année 1899 par une messe solennelle au Vatican. Dans le monde entier, les peuples célèbrent le passage au XXe siècle avec espoir et appréhension"
  }
};
