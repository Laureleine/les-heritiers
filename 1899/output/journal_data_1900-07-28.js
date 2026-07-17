// Date: 1900-07-28
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-07-28 (Version Restaurée, 22 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Feuilleton",
    "title": "La Faute de Jeannine",
    "summary": "Découvrez « La Faute de Jeannine », un roman passionné où se mêlent tragédie et dévouement. Une œuvre captivante explorant les tourments et les espoirs du cœur humain que nous offrons en primeur à nos lecteurs.",
    "paragraphs": [
      "La Faute de Jeannine est, à la fois, une œuvre de tendresse et de passion où les situations dramatiques se succèdent sans interruption, où l'intérêt ne languit pas un instant, où l'intensité d'émotion tourne souvent au tragique.",
      "C'est en même temps, dans un décor attachant, l'éternelle histoire du dévouement, du sacrifice et du martyre, captivante comme sont toutes les histoires où tour à tour on souffre, on espère, on pleure, on maudit et on aime.",
      "Nos lecteurs, et surtout nos lectrices, goûteront un vif plaisir à la lecture de ce beau roman dont ils nous sauront gré de leur avoir réservé la primeur."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Chronique",
    "title": "L'Eau à Paris",
    "summary": "Face à la pénurie d'eau estivale et à la dégradation de sa qualité, Paris doit repenser son approvisionnement. Entre nécessités hygiéniques et projets d'adduction alpestre, l'avenir de la capitale est en jeu.",
    "paragraphs": [
      "Nous vivons sous le régime du rationnement de l'eau. Peut-on espérer, après l'orage d'hier soir, que ce désagréable état de choses va prendre fin ?",
      "L'approvisionnement de Paris en eau potable est insuffisant. Chaque été, il fait chaud, chaque été les sources s'appauvrissent, et ces chaleurs coïncident avec cet appauvrissement. Aussi, aux mois de juillet et d'août, les Parisiens voient-ils apparaître l'avis qui leur annonce la substitution de l'affreuse eau de Seine à l'eau de source.",
      "Il importe que les projets d'adduction à Paris soient étudiés en vue de faire face non seulement aux nécessités d'aujourd'hui, mais à celles de demain ; or, on doit calculer que la population de la capitale augmente presque régulièrement.",
      "L'administration reproche aux Parisiens de faire un grand abus d'eau. Mais n'est-ce pas chose naturelle par les journées caniculaires que nous traversons ? À la vérité, on ne devrait point faire à la population un grief de cet abondant usage d'eau, puisque c'est une condition d'hygiène.",
      "Les ingénieurs ont tourné les yeux vers les grands bassins d'eaux alpestres, qui sont intarissables, et qui sont surtout grossis en été, à la suite de la fonte des neiges et de l'écoulement des glaciers."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Actualité Politique",
    "title": "Conseil des Ministres",
    "summary": "Sous la présidence de M. Loubet, le Conseil des ministres a examiné les affaires de Chine, validé le budget spécial de l'Algérie et organisé les audiences dédiées aux accidents du travail au tribunal de la Seine.",
    "paragraphs": [
      "Les ministres se sont réunis, hier matin, à l'Élysée, sous la présidence de M. Loubet. Le ministre des Affaires étrangères a entretenu le Conseil des affaires de Chine.",
      "Le ministre des Finances a fait connaître que l'accord s'était établi entre le gouvernement et la commission du budget sur la question du budget spécial de l'Algérie.",
      "Le garde des Sceaux a entretenu le Conseil des mesures prises pour réserver aux affaires d'accidents du travail les audiences de vacations du tribunal de la Seine."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Arts et Sciences",
    "title": "La Statue de Lavoisier",
    "summary": "La place de la Madeleine honore désormais Lavoisier. M. Leygues a inauguré hier le monument dédié au savant dont les travaux fondateurs sur l'air et l'eau ont transformé la science moderne.",
    "paragraphs": [
      "La statue de Lavoisier, élevée place de la Madeleine par les soins d'un comité à la tête duquel se trouvait M. Berthelot, a été inaugurée hier, sous la présidence de M. Leygues, ministre de l'Instruction publique.",
      "Le monument, œuvre du sculpteur Barrias, représente l'illustre savant au moment où il fait la démonstration d'une des importantes découvertes dues à son génie.",
      "La carrière de Lavoisier est unique dans l'histoire des sciences. Par ses découvertes sur la composition de l'air et de l'eau, Lavoisier a accompli une révolution dont les conséquences sont incalculables."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "International",
    "title": "La Révolution à Panama",
    "summary": "La paix est revenue à Panama : le gouvernement et les insurgés ont ratifié un traité prévoyant le désarmement complet des forces rebelles en échange d'une amnistie générale.",
    "paragraphs": [
      "Le gouvernement et les insurgés ont signé un traité de paix d'après lequel les rebelles rendront les armes, les munitions et les navires qui sont en leur possession. Le gouvernement accorde une amnistie à tous les révolutionnaires."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Villages en flammes (Grimbosc)",
    "summary": "Un violent incendie a ravagé Grimbosc, dans l'arrondissement de Falaise. Quatorze maisons, la mairie et l'école sont détruites. M. Salle et le jeune Lebaron ont été grièvement brûlés. Les dégâts s'élèvent à 100 000 francs.",
    "paragraphs": [
      "Un terrible incendie a ravagé le village de Grimbosc, dans l'arrondissement de Falaise. Le feu prit dans un tas de gerbes déposées sur la voie publique. Les flammes gagnèrent très rapidement la grange et les bâtiments voisins couverts en chaume.",
      "Quatorze maisons d'habitation, la mairie et l'école municipale ont été entièrement détruites. M. Salle et le jeune Lebaron ont été assez profondément brûlés au bras droit. Les pertes s'élèvent à près de 100 000 francs."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Incendie au Villaret",
    "summary": "Au village du Villaret, une lutte acharnée de six heures fut nécessaire pour maîtriser un incendie qui a dévasté quatorze habitations. Si les bestiaux ont été sauvés, les bâtiments sont en ruines.",
    "paragraphs": [
      "Un incendie, qui a pris de très grosses proportions, a éclaté hier matin au petit village du Villaret, commune des Costes-en-Champsaur. Quatorze maisons flambaient. Il fallut une lutte acharnée de six heures pour maîtriser le sinistre. Le mobilier et les bestiaux ont pu être sauvés, mais les maisons ont été détruites de fond en comble."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame entre gendre et beau-père",
    "summary": "À Drocourt, une dispute familiale a viré au drame : l'ouvrier mineur Omer Rousseau a été mortellement blessé par son beau-père, Louis Dussart, à l'aide d'un tisonnier. L'auteur a été arrêté.",
    "paragraphs": [
      "Le nommé Omer Rousseau, ouvrier mineur, a été tué par son beau-père, Louis Dussart, à Drocourt, à la suite d'une violente dispute. Dussart, excédé, tira un tisonnier du poêle allumé et le plongea dans le ventre de son gendre, qui mourut cinq minutes après. Le beau-père meurtrier a été arrêté et écroué."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "International",
    "title": "La situation en Chine et le sort des Légations",
    "summary": "Le sort des diplomates à Pékin demeure incertain. Tandis que les puissances exigent des preuves de vie pour toute médiation, les troupes étrangères s'organisent à Tien-Tsin pour secourir les assiégés.",
    "paragraphs": [
      "Le silence persiste sur le sort des diplomates à Pékin. Les puissances ont répondu à l'empereur qu'aucune médiation ne serait prise en considération tant que l'on n'aurait pas de nouvelles authentiques des ambassadeurs.",
      "Le Daily Mail publie une lettre de sir Claude Mac-Donald, datée du 6 juillet, indiquant que les munitions et les vivres sont rares et qu'ils peuvent être anéantis à tout moment. Les troupes étrangères achèvent de se concentrer à Tien-Tsin pour entreprendre la marche sur Pékin."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Feuilleton",
    "title": "La Main Gauche",
    "summary": "Jenny Harris, ancienne gouvernante à Woolwich, voit son passé resurgir. William Janck, époux de Lydie, tente d'écarter une lettre anonyme menaçant sa tranquillité conjugale.",
    "paragraphs": [
      "Jenny Harris, renvoyée de Belmont Office, avait son roman. Née dans une famille besogneuse de Woolwich, elle avait tenté sa chance à Paris avant de partir au Canada comme gouvernante.",
      "L'Américain William Janck, époux de Lydie, découvre une lettre anonyme concernant le passé de sa femme. Il la déchire, persuadé qu'il s'agit de la vengeance d'une ancienne camériste, et se félicite de posséder un trésor qui lui apporte gloire et considération."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "International",
    "title": "Inquiétudes sur les massacres en Chine",
    "summary": "Des nouvelles alarmantes confirment le massacre de missionnaires et de chrétiens par les Boxers à travers les provinces chinoises, laissant le sort de plusieurs prêtres incertain et la situation critique.",
    "paragraphs": [
      "On annonce la nouvelle d'un massacre général imminent à Haïnan. Par ailleurs, le consulat britannique à Shanghaï a été informé de l'assassinat de deux missionnaires anglais à Hsiaoi, dans le nord du Chan-Si. On signale également des carnages à Pao-ting Fou.",
      "Un prêtre italien, arrivé de Itoa-Si-Fou dans le Hunan, rapporte que l'évêque et trois missionnaires italiens ont été massacrés le 4 juillet après avoir subi les pires tortures. Les Boxers ont ensuite exécuté six à sept cents convertis indigènes. Six prêtres auraient réussi à s'échapper, mais leur sort reste inconnu, cachés dans la montagne ou potentiellement repris.",
      "Selon un télégramme du consul général français à Shanghaï en date du 25 juillet, deux chrétiens ont été massacrés au Ta-Tcheouen et les églises des Lazaristes, situées à Ya-Tchéou-Kou dans le Kiang-Si, auraient été incendiées."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "International",
    "title": "La situation en Mandchourie",
    "summary": "L'état-major communique sur les affrontements en Mandchourie : les troupes russes ont repoussé les forces chinoises au fort Echo et riposté après une attaque contre un navire à vapeur.",
    "paragraphs": [
      "Saint-Pétersbourg, 27 juillet. L'état-major communique les nouvelles de Mandchourie : les Chinois ont attaqué l'avant-garde du détachement de Mongolie au fort Echo, mais ils ont été repoussés avec de lourdes pertes.",
      "Notre détachement s'occupe actuellement d'ensevelir les morts. Le 19 juillet, nous avons déploré quatre tués. Le 20 juillet, en représailles contre les Chinois ayant tiré sur notre vapeur, nous avons incendié le village chinois de Wunliehoten et évacué les postes adverses, contraints à la retraite."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "International",
    "title": "Situation à Tien-Tsin",
    "summary": "À Tien-Tsin, une discipline rigoureuse est imposée aux troupes chinoises sous peine de décapitation, tandis que les Alliés souffrent d'une carence préoccupante en renseignements militaires.",
    "paragraphs": [
      "Londres, 27 juillet. Les journaux publient la dépêche suivante de Tien-Tsin, transmise via Shanghaï le 26 juillet : un instructeur d'artillerie étranger, récemment arrivé des forts de Kiung-Hien, rapporte que le général chinois commandant ces positions a reçu l'ordre formel de ne pas ouvrir le feu, sauf en cas d'attaque des étrangers.",
      "Une discipline très stricte est imposée aux soldats chinois, passibles de décapitation pour la moindre faute. On assure par ailleurs que les troupes alliées manquent cruellement d'informations sur les mouvements de l'ennemi. La faiblesse du service des renseignements est jugée extraordinaire."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Économie",
    "title": "Prohibition de l'exportation des armes",
    "summary": "Le gouvernement français a décrété l'interdiction d'exporter du matériel de guerre vers la Chine, une mesure soutenue par les puissances et relayée aux États-Unis pour bloquer les insurgés.",
    "paragraphs": [
      "M. Delcassé, ministre des Affaires étrangères, a récemment soumis aux puissances une proposition visant à prohiber l'exportation d'armes de guerre vers la Chine. Cette initiative a reçu un accueil très favorable dans toutes les chancelleries.",
      "Sur l'avis conforme du ministre de la Guerre et du président du Conseil, ministre de l'Intérieur, le président de la République a signé hier un décret officialisant la proposition de M. Delcassé. Ce texte interdit, jusqu'à nouvel ordre, la sortie de France, d'Algérie, des colonies et pays de protectorat de tout matériel de guerre destiné à la Chine et aux contrées limitrophes.",
      "Washington, 27 juillet. Les agents des douanes du littoral Pacifique ont reçu l'ordre formel d'empêcher l'exportation de tout armement susceptible d'être utilisé par les insurgés chinois contre les intérêts américains."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Tragédie sur la Meuse à Waulsort",
    "summary": "Un terrible drame est survenu à Waulsort : une famille entière composée du père, de la mère et du fils a péri noyée dans les eaux de la Meuse après le chavirage accidentel de leur barque.",
    "paragraphs": [
      "Namur, 27 juillet. Un affreux malheur vient de se produire à Waulsort, près de Namur. Trois personnes, le père, la mère et leur fils, qui s'y trouvaient en villégiature, avaient loué une barque pour une excursion sur la Meuse.",
      "Soudainement, le vent emporta le chapeau de la dame ; celle-ci, dans un mouvement brusque pour le rattraper, tomba à l'eau. Tandis que l'embarcation chavirait, son mari et son fils se précipitèrent à son secours, mais ils disparurent tous trois dans les flots. Les victimes sont M. et Mme Léon, ainsi que leur fils, originaires de Bruxelles."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Société",
    "title": "L'Hôtel des Examens à Paris",
    "summary": "Pour soulager les candidats lors des épreuves, la Ville de Paris inaugure l'Hôtel des Examens, un édifice moderne aménagé dans l'ancien marché Saint-Germain, incluant un service médical dédié aux plus émotifs.",
    "paragraphs": [
      "On peut justement compatir, par ce temps de chaleurs caniculaires, au sort des malheureux jeunes gens qui s'en vont affronter les épreuves de quelque examen. La Ville de Paris a voulu rendre ces jours d'examen moins pénibles en faisant aménager, sous le nom d'Hôtel des Examens, un édifice définitif.",
      "Situé à l'emplacement de l'ancien marché Saint-Germain, le nouvel édifice pourra bientôt ouvrir ses portes à la foule studieuse des candidats. L'architecte, M. Charles Duprez, a su conserver tout le gros œuvre de l'ancien marché, tout en le rendant pratique et ventilé.",
      "Le nouvel Hôtel des Examens sera doté de toutes les commodités désirables, y compris un service médical, car les jeunes filles et jeunes gens sont souvent fort accessibles à l'émotion lors des examens. Une doctoresse en médecine sera chargée de donner des soins aux plus sensibles."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Exposition",
    "title": "La fin de l'Exposition universelle",
    "summary": "À trois mois de la fermeture de l'Exposition universelle, l'archiduc Salvator d'Autriche visite les collections artistiques et le Musée rétrospectif de l'armée.",
    "paragraphs": [
      "Trois mois environ nous séparent maintenant de la clôture définitive de l'Exposition universelle. Dans quatre-vingt-dix jours, les portes de l'immense enceinte seront fermées aux visiteurs.",
      "Arrivé à Paris, l'archiduc Salvator d'Autriche est venu visiter l'Exposition. Après une minutieuse visite des collections artistiques, l'Altesse impériale a admiré les vitrines du Musée rétrospectif de l'armée."
    ]
  },
  {
    "id": 18,
    "page": 4,
    "category": "Chronique Théâtrale",
    "title": "Actualités des spectacles parisiens",
    "summary": "Le shah de Perse souhaite applaudir Fregoli, tandis que l'Hippodrome fête la centième de Vercingétorix. Revues, athlètes et quadrilles animent les scènes des grands théâtres parisiens.",
    "paragraphs": [
      "Le shah de Perse a manifesté le vif désir de voir Fregoli lors de son passage à Paris. On s'occupe d'organiser à l'Olympia une grande fête à cette intention.",
      "C'est ce soir qu'a lieu à l'Hippodrome la grande soirée de gala pour fêter la 100e de Vercingétorix. Cette représentation servira de début aux amazones dans les courses de steeple.",
      "Le grand ascenseur de 144 mètres fonctionnera pour la première fois à l'Hippodrome, élevant tout le corps de ballet, tandis que de nouveaux ventilateurs rafraîchiront la salle.",
      "Le Casino de Paris connaît une grande vogue grâce à des numéros comme Sandow l'athlète, les Matsui, le quartette Charmion et la meute d'Yvan Tscherinoff.",
      "La Scala offre un programme varié avec une revue pleine d'entrain, la danse de la Hongroise Mariska Recsey et la partie de concert de l'inimitable Potin.",
      "Le Moulin-Rouge connaît une affluence record autour des quadrilles de Mlle Patte-en-l'Air, Grille-d'Égout et autres célébrités chorégraphiques."
    ]
  },
  {
    "id": 19,
    "page": 4,
    "category": "Fêtes",
    "title": "Fêtes des environs de Paris pour le dimanche 29 juillet",
    "summary": "Le dimanche 29 juillet est marqué par une multitude de réjouissances en Île-de-France, allant des fêtes foraines et bals champêtres aux feux d'artifice et concours nautiques.",
    "paragraphs": [
      "Asnières : Fête foraine sur la promenade longeant la Seine.",
      "Beautheil : Jeux divers, tir, forains et bal.",
      "Bois-le-Roi : Fête patronale, jeux et bal.",
      "Bougival : Festival de hautbois et fête nautique.",
      "Dammartin : Représentation acrobatique et bal champêtre.",
      "Corbeil : Joutes à la lance, concert et fête vénitienne.",
      "Coulommiers : Fête foraine à Pontmoulin.",
      "Enghien-les-Bains : Fête de bienfaisance au Casino.",
      "Fontenay-aux-Roses : Fête cycliste et défilé infernal.",
      "Franconville : Continuation de la fête et tombola.",
      "Grand-Montrouge : Fête foraine et concours de tir.",
      "Hardricourt : Jeu des drapeaux, pêche à la ligne et concert.",
      "Issy-les-Moulineaux : Jeux variés, illumination et bal.",
      "Kremlin-Bicêtre : Concert et lâcher de pigeons voyageurs.",
      "L'Étang-la-Ville : Spectacle-concert et feu d'artifice.",
      "Le Vésinet : Courses en sac, mât de cocagne et retraite aux flambeaux.",
      "L'Haÿ : Jeux, concert et feu d'artifice.",
      "Lorrez-le-Bocage : Marchands forains et bal.",
      "Maisons-Laffitte : Fête, feu d'artifice et retraite aux flambeaux.",
      "Montgeron : Concert et assaut d'escrime.",
      "Montmorency : Grande matinée acrobatique.",
      "Ormoy : Courses, concert et bal.",
      "Roissy-en-Brie : Concours de tir au fusil, concert et bal.",
      "Romainville : Bal d'enfants, concours de bébés et tir.",
      "Thiais : Fête foraine, tombola et bal champêtre.",
      "Verrières-le-Buisson : Jeux et bal.",
      "Versailles : Grandes eaux dans le parc et concours de tir à Satory.",
      "Villiers-sur-Marne : Jeux forains, carrousels et spectacle-concert.",
      "Viry-Châtillon : Concert, courses et feu d'artifice.",
      "Vitry-sur-Seine : Fête foraine du quartier de Port-à-l'Anglais."
    ]
  },
  {
    "id": 20,
    "page": 4,
    "category": "Science et Hygiène",
    "title": "Les dangers des piqûres d'insectes",
    "summary": "Des travaux scientifiques récents démontrent que les insectes propagent de graves maladies. Le docteur Fournol propose son onguent antiseptique comme remède contre ces piqûres infectieuses.",
    "paragraphs": [
      "Les derniers travaux scientifiques prouvent que les piqûres de cousins et moustiques inoculent la fièvre paludéenne et la fièvre jaune.",
      "Les piqûres de puces et de punaises introduisent les germes de la peste et de la tuberculose. Le docteur Fournol préconise l'emploi de son onguent antiseptique pour neutraliser ces virus et faire disparaître la douleur et le gonflement instantanément."
    ]
  },
  {
    "id": 21,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "État du vignoble et cours des vins",
    "summary": "Le panorama viticole de 1899 confirme de belles perspectives dans le Midi et le Bordelais malgré la coulure. À Paris, la canicule détourne temporairement les consommateurs vers la bière et le cidre.",
    "paragraphs": [
      "Dans le Gard, la récolte s'annonce moyenne selon les conditions météorologiques observées. Dans l'Hérault, les vignes présentent un aspect superbe et demeurent exemptes de toute maladie.",
      "Dans l'Aude, le Roussillon et le Bordelais, les perspectives de récolte sont généralement favorables, en dépit de quelques cas isolés de coulure. Les cours du vin varient sensiblement selon les régions et la qualité des cépages proposés.",
      "Dans les Charentes, la Vendée et le Nantais, la température élevée favorise activement la croissance des raisins. L'Anjou et la Touraine prévoient également une production abondante, sauf dans les zones malencontreusement touchées par la grêle ou la cochylis.",
      "À Paris, la consommation de vin ralentit notablement au profit de la bière et du cidre, conséquence directe des fortes chaleurs qui sévissent actuellement sur la capitale."
    ]
  },
  {
    "id": 22,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Voix d'outre-tombe (Quatrième partie)",
    "summary": "Après son entrevue avec la comtesse Marguerite, Gabrielle prend en main la sécurité du docteur Barrère. Avec le concours de Félix et de Romain Gautret, elle instaure une garde vigilante contre tout péril.",
    "paragraphs": [
      "Gabrielle, après avoir confronté la comtesse Marguerite, se sent investie d'une mission de protection impérieuse envers le docteur Barrère.",
      "Elle organise sans délai une surveillance étroite avec le concours dévoué de Félix et de Romain Gautret, exigeant de ses collaborateurs une vigilance constante et absolue pour assurer la sécurité du malade.",
      "Malgré son trouble intérieur et les mystères qui l'entourent, elle tente par tous les moyens de protéger ceux qu'elle affectionne, tout en luttant contre l'angoisse grandissante d'une menace imminente."
    ]
  }
];
