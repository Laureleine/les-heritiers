// Date: 1900-05-15
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-05-15 (Version Restaurée, 22 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Beaux-Arts",
    "title": "La réorganisation du Louvre",
    "summary": "Le Louvre inaugure sa nouvelle salle Rubens et réorganise ses galeries flamandes et hollandaises. Cette vaste entreprise de restructuration offre au public une présentation chronologique et apaisée des maîtres anciens.",
    "paragraphs": [
      "C'est à une très heureuse inspiration qu'a obéi notre administration des Beaux-Arts en entreprenant une réorganisation de notre grand musée national qui prend, dès maintenant, la proportion d'un véritable événement artistique. Déjà, le public s'est aperçu des remaniements considérables qui ont été opérés en certaines galeries.",
      "Quelques jours seulement nous séparent de l'inauguration de la nouvelle salle des Rubens, aménagée à l'extrémité de la grande galerie du bord de l'eau. Cette salle, magnifiquement décorée, occupe une superficie de mille mètres carrés.",
      "Le musée du Louvre possède quarante-cinq Rubens. Ce n'est pas le musée le plus riche en œuvres du maître, mais la qualité y est exemplaire. Dans la dernière travée de la grande galerie, on peut admirer la « Fuite de Loth », chef-d'œuvre signé du maître.",
      "La série de la Vie de Marie de Médicis, qui décorait jadis la galerie du palais du Luxembourg, a été réinstallée. On n'a pu placer que dix-huit tableaux dans la salle nouvelle, disposés selon l'ordre chronologique.",
      "Rubens revenait d'Espagne et apportait à Marie de Médicis les cadeaux dont l'infante Isabelle l'avait chargé. En quatre mois, le peintre composa ses esquisses et fit achever les toiles dans l'atelier de son palais avec l'aide de ses nombreux élèves.",
      "Parallèlement, les écoles flamande et hollandaise ont été réorganisées dans de petites salles tranquilles. Les Van Eyck, Memling, Rembrandt et autres maîtres ont désormais des sanctuaires dédiés où l'on peut les étudier dans le calme."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le secret du docteur",
    "summary": "Gabrielle de Saint-Amand livre au juge Précomtal ses soupçons sur Armand Breuilhet et les mystères entourant le docteur Barrère, craignant pour le sort de Michel Gérard dans cette ténébreuse affaire.",
    "paragraphs": [
      "Stupéfait par ces révélations, le juge Précomtal écoute Gabrielle de Saint-Amand. Elle jure, sur la tombe de son père, que son oncle, avant de mourir, a demandé au coupable de pardonner à Michel Gérard.",
      "Le juge se demande alors qui pourrait être le véritable assassin. Gabrielle suggère une piste : il faut chercher à qui le crime profite. Selon elle, Armand Breuilhet, homme avide, a tout intérêt à ce que le testament en faveur de Michel soit annulé.",
      "Gabrielle confie ses craintes concernant le docteur Barrère, qui semble cacher une vérité douloureuse. Elle redoute que son vieil ami, en cherchant à la protéger ou à protéger le secret, ne se laisse entraîner vers une issue tragique."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "La signification du scrutin",
    "summary": "Les élections confirment l'ancrage républicain de la France. Malgré l'affaire Dreyfus, le pays tourne la page des tensions militaires pour se consacrer sereinement à son avenir politique et national.",
    "paragraphs": [
      "Les scrutins de ballottage ont confirmé la manifestation républicaine du premier tour. Dans toute la France, nul ne se risque à solliciter les suffrages du peuple sans confesser d'abord sa foi républicaine.",
      "Paris, quoi que puissent prétendre les adversaires, n'a pas déserté le drapeau républicain. La majorité nationaliste à l'Hôtel de Ville s'est formée sur une union de sentiments pour l'armée et une position identique vis-à-vis de l'affaire Dreyfus.",
      "L'incident est clos. Les juges militaires se sont prononcés et la grâce accordée par le Président de la République a constitué la vérité historique. La France s'incline devant cet arrêt et regarde vers l'avenir."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Tentative de meurtre à Meaux",
    "summary": "Un drame sanglant a éclaté à Meaux dans une mansarde. Benjamin Ancellin, chiffonnier, a été grièvement poignardé par sa compagne, Anna Jagorel, lors d'une dispute violente. La meurtrière a été arrêtée.",
    "paragraphs": [
      "Une tentative de meurtre a été commise vers midi et demi dans un quartier populeux de la ville de Meaux. Un chiffonnier nommé Benjamin Ancellin, âgé de quarante et un ans, a été grièvement blessé par sa maîtresse, la fille Anna Jagorel.",
      "Après une scène violente dans leur mansarde, la jeune fille s'est emparée d'un couteau de cuisine et a porté plusieurs coups à Ancellin. La fille Jagorel a été arrêtée et a déclaré regretter de ne pas avoir tué son compagnon."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame de la folie à Pierrefitte",
    "summary": "À Pierrefitte, François Hamauniot, un ouvrier licencié, a sauvagement agressé son ancien patron, Vincent Couderc, de trente-trois coups de couteau. La victime est dans un état grave.",
    "paragraphs": [
      "La localité de Pierrefitte a été le théâtre d'un drame sanglant. François Hamauniot, un ouvrier terrassier récemment licencié, a assailli le chef carrier Vincent Couderc, le frappant de trente-trois coups de couteau.",
      "L'aliéné, après avoir proféré des menaces contre son patron et ses collègues, a frappé le vieillard par surprise. Grâce à l'intervention d'ouvriers, le malheureux a été sauvé, bien que son état reste grave.",
      "Hamauniot a été capturé après une lutte acharnée avec les gendarmes et a dû être maîtrisé par une camisole de force."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'aventure romanesque de Mme de Martel",
    "summary": "L'enquête sur la disparition de la comtesse de Martel se poursuit. Le chef de la Sûreté, M. Cochefert, a chargé le juge Boucard d'instruire l'affaire alors que des recherches sont menées en banlieue.",
    "paragraphs": [
      "Les recherches concernant l'enlèvement de la comtesse de Martel, connue sous le nom de plume de Gyp, se poursuivent activement. M. Cochefert, chef de la Sûreté, a officiellement chargé le juge Boucard de l'instruction de cette affaire.",
      "Des agents de la Sûreté fouillent minutieusement la banlieue sud-est de Paris sans résultat probant pour l'instant. À Saint-Maurice, une grande maison isolée semble toutefois correspondre aux descriptions précises fournies par la comtesse."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "Visite d'un Prince autrichien",
    "summary": "L'archiduc Charles de Habsbourg a visité l'Exposition universelle. Il a exprimé son admiration pour la qualité de l'organisation et l'esthétique remarquable du pavillon autrichien, conçu par l'architecte Baumann.",
    "paragraphs": [
      "L'archiduc Charles de Habsbourg a visité l'Exposition universelle de 1900. Accompagné de l'ambassadeur d'Autriche-Hongrie, il a inspecté la section autrichienne, saluant chaleureusement la qualité de l'organisation et le goût artistique manifeste des présentations.",
      "Le pavillon autrichien, œuvre de l'architecte Baumann, est considéré comme l'un des joyaux les plus remarquables de cette Exposition."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Solidarité",
    "title": "L'Union des Femmes de France et ses œuvres",
    "summary": "Depuis dix-neuf ans, l'Union des Femmes de France mène son action humanitaire. Grâce aux nouveaux bateaux-hôpitaux, la société accroît ses capacités de secours pour les blessés et les naufragés de la marine.",
    "paragraphs": [
      "L'Union des Femmes de France a, depuis dix-neuf ans, réalisé des prodiges. Ses premiers bienfaits eurent l'occasion de se manifester au Tonkin, au Dahomey, à Madagascar et lors de la guerre gréco-turque.",
      "Le pavillon occupé par l'exposition de la société est d'une grande sobriété. On y voit des tableaux, des instruments, des linges à pansements et divers appareils destinés à soulager les souffrances.",
      "La convention de Genève, étendue aux armées navales, a permis aux Femmes de France de créer deux bateaux-hôpitaux qui croiseront en Méditerranée et dans l'Océan, pouvant recevoir plus de 1 000 blessés et naufragés.",
      "C'est cette intéressante exposition que visitera dans quelques jours Mme Émile Loubet, présidente d'honneur de l'Union, pour témoigner de la sollicitude que le chef de l'État et elle-même apportent aux nobles femmes qui pensent à ceux qui défendent la patrie."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Administration",
    "title": "Une Mesure de Rigueur à l'Exposition Universelle",
    "summary": "Le ministre du Commerce, M. Millerand, impose de nouvelles restrictions de circulation automobile aux exposants au sein de l'Exposition universelle pour faire respecter les circulaires ministérielles.",
    "paragraphs": [
      "Après un entretien avec M. Alfred Picard, M. Millerand, ministre du Commerce et de l'Industrie, a définitivement arrêté des mesures de rigueur contre les exposants nationaux ou étrangers qui ne se sont pas conformés à la circulaire ministérielle du 7 mai dernier.",
      "À partir de maintenant, il est formellement interdit d'introduire des voitures dans l'enceinte après dix heures du matin. Tous les véhicules introduits le matin devront être évacués avant midi.",
      "À dater de jeudi prochain, aucune voiture ne sera autorisée à pénétrer à l'intérieur de l'exposition, sauf autorisation spéciale accordée exceptionnellement par M. Alfred Picard en cas de force majeure."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Presse",
    "title": "Le Pavillon de la Presse",
    "summary": "La commission supérieure de la Presse, sous la présidence de M. Adrien Hébrard, a mis en place une permanence au pavillon de la Presse pour faciliter le travail et l'information des journalistes.",
    "paragraphs": [
      "La commission supérieure de la Presse s'est réunie hier, en assemblée plénière, au pavillon de la Presse, sous la présidence de M. Adrien Hébrard.",
      "La commission a organisé sa permanence, deux commissaires devant désormais se trouver de service chaque jour. Dès à présent, toutes les communications officielles sont affichées dans la salle de travail pour faciliter la mission des journalistes."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Statistiques des entrées à l'Exposition",
    "summary": "La journée du dimanche a établi un record d'affluence à l'Exposition avec 296 132 entrées. Malgré cette fréquentation massive, le prix des billets est maintenu à 50 centimes par les commerçants.",
    "paragraphs": [
      "La journée du dimanche comptera certainement parmi les plus importantes de l'Exposition. 296 132 entrées ont été enregistrées, annexe de Vincennes comprise, dont 43 194 cartes ou jetons d'ouvriers.",
      "Le tarif des tickets ne varie point pour cela, et les marchands maintiennent avec fermeté le prix de 50 centimes."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre",
    "title": "La Guerre au Transvaal",
    "summary": "Au Transvaal, les Boërs se fortifient sur le Vaal face aux troupes de Lord Roberts. Au Natal, le général Buller progresse après avoir tourné les positions ennemies, tandis qu'une délégation boëre est reçue à New-York.",
    "paragraphs": [
      "L'armée fédérale se concentre sur les bords du Vaal et s'y fortifie pour barrer la route à lord Roberts. En dépit des succès britanniques, les Boërs sont résolus à poursuivre la lutte.",
      "Lord Roberts télégraphie que les pertes subies par la cavalerie le 10 mai ont été plus nombreuses que prévu. Deux officiers ont été capturés et 21 hommes sont portés manquants.",
      "Au Natal, le général Buller a opéré sa jonction avec le général Bethune. Les Boërs ont été tournés sur le Biggar's Berg et l'armée anglaise poursuit son mouvement en avant.",
      "Une délégation des Républiques sud-africaines a débarqué à New-York où elle a été reçue par le maire, qui lui a conféré le titre de citoyen de New-York."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Dépêches de l'Etranger : Attentat et Explorations",
    "summary": "L'instruction contre Sipido, auteur de l'attentat contre le prince de Galles, avance à Bruxelles. Par ailleurs, l'expédition Kozlow confirme la découverte de nouveaux lacs dans le désert de Gobi.",
    "paragraphs": [
      "Bruxelles : Dans son acte d'accusation contre Sipido, l'auteur de l'attentat contre le prince de Galles, l'avocat général conclut que l'acte a été froidement préparé par les quatre accusés.",
      "Saint-Pétersbourg : La Société impériale russe de géographie annonce que l'expédition de M. Kozlow a terminé ses explorations dans le désert de Gobi, découvrant plusieurs nouveaux lacs."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Violentes tempêtes en France",
    "summary": "Une tempête d'une extrême violence frappe actuellement les côtes françaises, provoquant des dégâts matériels considérables et rendant la navigation maritime particulièrement périlleuse sur tout le littoral.",
    "paragraphs": [
      "Une tempête d'une extrême violence sévit sur les côtes françaises. À Dunkerque, Cherbourg, Saint-Brieuc, Brest, Poitiers, Saint-Nazaire, Saint-Lô et Toulon, des dégâts matériels importants sont signalés : arbres déracinés, toitures arrachées, navires en détresse et navigation rendue périlleuse."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Tir et armement",
    "summary": "Un comparatif révèle un retard inquiétant dans l'instruction au tir en France par rapport à la Suisse. Par ailleurs, la nouvelle tunique réglementaire de l'infanterie suscite des critiques sur sa ligne.",
    "paragraphs": [
      "L'année dernière, on a brûlé en territoire helvétique des millions de cartouches, soit environ 8 par individu. En France, à peine arrive-t-on à une cartouche par adulte.",
      "Concernant la nouvelle tenue de l'infanterie, la tunique à col rouge et une seule rangée de boutons ne semble pas faire l'unanimité quant à son aspect esthétique."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Échos",
    "title": "Nouvelles diverses et vie présidentielle",
    "summary": "Le Président de la République multiplie les audiences officielles. Par ailleurs, des mesures de sécurité sont ordonnées par le ministère des Travaux publics pour l'éclairage ferroviaire après un incident.",
    "paragraphs": [
      "Le Président de la République a reçu diverses personnalités, dont M. Tarte, ministre du Canada, ainsi que des représentants de la Société centrale pour l'amélioration des races de chiens en France.",
      "M. Guimbert, président de la Fédération des mécaniciens, a invité le chef de l'État à la fête annuelle du travail qui se tiendra à la Sorbonne en juin.",
      "Mlle Lucie Faure, opérée avec succès, est en voie de rétablissement.",
      "Le ministre des Travaux publics a ordonné l'éclairage des voitures sur la ligne de Versailles, suite à un incident survenu sous le tunnel de Ville-d'Avray."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Justice et faits divers",
    "summary": "La cour d'assises rend ses verdicts sur diverses affaires criminelles, tandis que la police traque les agresseurs de Montrouge.",
    "paragraphs": [
      "La cour d'assises de la Seine a condamné le nommé Deuille à trois ans de prison et la veuve Lecou à un an pour une agression mortelle rue Albert.",
      "Une Hindoue a été condamnée à quatre mois de prison pour un vol commis dans un magasin d'éponges.",
      "Un soldat a été agressé par deux individus à Montrouge ; les coupables sont activement recherchés par la police."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Social",
    "title": "Bulletin du travail : Grèves et revendications",
    "summary": "Le climat social demeure tendu : les cochers de fiacre négocient leurs tarifs et un conflit ouvrier menace de reprendre au Creusot.",
    "paragraphs": [
      "Les cochers de fiacre des dépôts de la Seine, réunis à la Bourse du travail, réclament une modification des tarifs pour éviter une grève désastreuse.",
      "Au Creusot, suite au renvoi d'ouvriers, le syndicat a sommé la Compagnie de réintégrer les licenciés sous peine de nouvelles actions revendicatives."
    ]
  },
  {
    "id": 19,
    "page": 4,
    "category": "Chronique de Progrès",
    "title": "La marche du progrès humain",
    "summary": "Une réflexion sur l'héroïsme des savants et explorateurs dont le sacrifice et l'abnégation font avancer la connaissance et garantissent l'avenir de l'humanité.",
    "paragraphs": [
      "Des milliers d'astres naissants scintillent au-dessus de l'humanité, chassant les ténèbres de l'ignorance. Chaque heure enrichit nos connaissances : pendant que les uns, cloîtrés dans le recueillement des laboratoires, cherchent et perfectionnent, d'autres s'élancent, en ballons ou en traîneaux, à la conquête des promontoires de glace et des déserts brûlants, derniers lambeaux de la Nature inexplorée.",
      "Un vaillant tombe-t-il foudroyé en cherchant le remède à une maladie, dix autres le remplacent. Qu'une caravane soit attaquée, qu'une expédition soit décimée par des lâches, une nouvelle s'organise aussitôt. Devant ces courages admirables, on sent qu'au-dessus des querelles humaines passe un souffle puissant de progrès, inarrêtable, qui assurera enfin le bonheur universel."
    ]
  },
  {
    "id": 20,
    "page": 4,
    "category": "Inventions",
    "title": "Le nouveau phonographe",
    "summary": "Le phonographe, désormais perfectionné, devient un outil domestique capable de conserver la voix des êtres chers et d'apporter le prestige des concerts au sein du foyer.",
    "paragraphs": [
      "L'homme, tel un créateur, a su tirer du fer, de la cire et du verre une machine qui parle, chante, rit et sanglote. Cet appareil conserve à jamais les sons qui nous sont chers, depuis les premiers cris d'un bébé jusqu'aux paroles graves de l'aïeul. Le phonographe est enfin perfectionné et entre dans la pratique courante.",
      "Invention merveilleuse, peux-tu dire où tu puises ce pouvoir enchanteur ? Qu'une mère puisse entendre encore les chansons de son fils chéri qui s'éloigne ! Le temps est implacable, mais il est doux de lui arracher quelques souvenirs qui rappelleront éternellement les êtres aimés.",
      "Durant les longs soirs d'hiver ou les jours de pluie, quel plaisir délicat de posséder, chez soi, le pouvoir magique d'offrir à sa famille et à ses amis l'audition d'un concert superbe, réunissant les plus grands artistes de l'époque."
    ]
  },
  {
    "id": 21,
    "page": 4,
    "category": "Santé",
    "title": "La Médecine Naturelle par les herbes",
    "summary": "Le Dr G. de Fontal publie la 40e édition de son ouvrage sur la médecine par les plantes, proposant des soins naturels contre les maux chroniques, sans recours à la chirurgie ni aux drogues chimiques.",
    "paragraphs": [
      "La Médecine Naturelle par les herbes, les plantes, les tisanes, etc. Méthode et traitement du Dr G. de Fontal. Le 40e millier de cet ouvrage vient de paraître. Cet énorme succès s'explique par l'intérêt qu'y trouvent tous les malades dégoûtés des drogues funestes et meurtrières, atteints de maladies chroniques dites incurables, découragés et abandonnés des médecins.",
      "Parmi les chapitres traités de main de maître révolutionnant l'art de guérir, nous citerons : les herbes et les plantes avec la manière de les récolter, des formules de tisanes, d'infusions, cataplasmes d'herbes, injections, lotions, etc. La guérison de la hernie sans opération ni bandages ; les maladies spéciales à la femme, guéries sans opération ni pessaire, et la description de la fameuse ceinture dynamique, gérant les premiers soins à donner en cas d'accident.",
      "L'hygiène, le régime et le traitement de l'anémie, de la goutte, du rhumatisme, des vices du sang, etc. Enfin, le traitement des maladies de la peau, du cuir chevelu, eczéma, abcès, dartres, épilepsie, neurasthénie, asthme, phtisie, maladies du cœur, surmenage intellectuel, impuissance, stérilité, affections contagieuses, cancer, tumeurs, hydropisies, hémorroïdes, etc., sans opérations ni mutilations par les caustiques ou le fer rouge, sans médicaments qui empoisonnent l'organisme, gâtent le sang et délabrent le système nerveux, mais par les seules forces de la nature, les herbes, les plantes, les tisanes, etc."
    ]
  },
  {
    "id": 22,
    "page": 4,
    "category": "Informations de transport",
    "title": "Exposition Universelle : Tarif de la Compagnie d'Orléans",
    "summary": "En vue de l'Exposition universelle, la compagnie d'Orléans accorde une réduction de 50 % sur les tarifs de transport aux exposants domiciliés à plus de 50 km de Paris, à partir du 1er avril.",
    "paragraphs": [
      "La Compagnie d'Orléans, consciente des déplacements nécessaires pour se rendre à l'Exposition universelle, se propose de délivrer aux exposants une réduction de 50 % sur le prix du tarif n° 3 (Orléans) et du tarif commun n° 2 (Orléans-Midi).",
      "Les cartes d'abonnement sont de trois ou six mois ; elles seront délivrées à partir du 1er avril et pendant toute la durée de l'Exposition aux exposants ayant leur domicile commercial à cinquante kilomètres au moins de Paris, et sur la présentation de leur carte d'exposant. Elles ne pourront être demandées que pour voyager entre le domicile commercial et Paris."
    ]
  }
];
