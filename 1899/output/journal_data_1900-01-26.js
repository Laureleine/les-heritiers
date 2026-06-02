// Date: 1900-01-26
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-26 (Version Restaurée, 40 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Science",
    "title": "L'art de grandir",
    "summary": "Le docteur Springer, de la Charité, expose une méthode pour stimuler la croissance humaine par l'hygiène, la gymnastique et une alimentation spécifique riche en phosphates végétaux.",
    "paragraphs": [
      "Il faut s'attendre à voir un jour les médecins nous prouver que le corps humain est une matière malléable, comme est l'argile sous la main du sculpteur.",
      "Le docteur Springer, chef du laboratoire de clinique à l'hôpital de la Charité, voudrait à son gré modifier la taille humaine. Il propose des méthodes basées sur l'hygiène, l'alimentation et une médication spécifique à base de décoctions de céréales pour favoriser la croissance osseuse.",
      "Les causes de la déchéance physique sont multiples, allant de l'hérédité au défaut d'assimilation des matériaux nutritifs. M. Springer recommande une oxygénation optimale, la gymnastique suédoise, une aération constante et la suppression de toute boisson alcoolisée chez les enfants.",
      "L'usage de décoctions de céréales (blé, orge, avoine, seigle, maïs) permet d'apporter les phosphates nécessaires à la charpente osseuse. Ces sels minéraux, pour être assimilés, doivent passer par l'intermédiaire des végétaux.",
      "Les expériences du docteur Springer sur les animaux et l'homme ont montré des résultats impressionnants, permettant d'accélérer la croissance et de fortifier la structure osseuse."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage Secret",
    "summary": "Au Mexique, le lieutenant d'Aspremont défend héroïquement une église contre les insurgés. Blessé au cours des combats, son sort reste incertain alors qu'il s'inquiète pour Manuela.",
    "paragraphs": [
      "Pendant cet hiver, les premiers mois de l'année qui suivit furent pour Manuela et Roland d'interminables journées de contrainte, rachetées par des nuits de folle tendresse.",
      "Devant l'insurrection gagnant chaque jour du terrain au Mexique, l'armée se repliait. Bientôt, cet escadron de chasseurs d'Afrique qui assurait les communications serait rappelé.",
      "La situation devint critique lors d'une échauffourée où Roland, dans une église fortifiée, commanda la défense face à une bande d'insurgés très supérieure en nombre.",
      "Le lieutenant d'Aspremont, au milieu du combat, craignit pour Manuela restée à San-José. Le secours arriva finalement, permettant de disperser la bande juariste, bien que le sort du lieutenant reste incertain après sa blessure."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "L'Empereur de Chine",
    "summary": "Un édit impérial du 25 janvier annonce le retrait des affaires de l'empereur de Chine pour raison de santé et la nomination de Pou Tsing comme héritier, sous l'influence de l'impératrice douairière.",
    "paragraphs": [
      "Un édit impérial publié à Pékin le 25 janvier annonce que l'empereur, pour raison de santé, n'est plus en mesure de conduire les affaires et nomme Pou Tsing comme héritier.",
      "On croit, dans les cercles élevés, que l'impératrice douairière force cette abdication, suivant un plan mûrement réfléchi qu'elle mène depuis plusieurs mois."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Chronique des Travaux",
    "title": "Les Travaux du Champ-de-Mars",
    "summary": "Le Champ-de-Mars se métamorphose : jardins et palais s'élèvent avec célérité pour l'Exposition universelle sous l'œil attentif des ouvriers.",
    "paragraphs": [
      "En moins d'un mois, les ouvriers du Champ-de-Mars ont transformé les décombres en jardins à la française et érigé des palais magnifiques pour l'Exposition.",
      "Le palais de l'Électricité a été édifié rapidement, offrant une architecture superbe avec son château d'eau. Les sculpteurs et peintres travaillent activement à la décoration intérieure et extérieure des divers édifices.",
      "L'ambiance parmi les ouvriers est à la gaieté malgré la fièvre du travail, illustrant l'entrain et la capacité des Français à allier labeur et amusement."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une baleinière chavirée",
    "summary": "Un tragique accident en rade de Toulon : par mauvais temps, la baleinière du croiseur La-Roisi-Tra a chaviré, causant la noyade fatale des marins André Hervé et Joseph Tastet.",
    "paragraphs": [
      "Un accident causé par le mauvais temps en rade de Toulon a fait chavirer la baleinière du croiseur La-Roisi-Tra. Deux hommes d'équipage, André Hervé et Joseph Tastet, se sont malheureusement noyés."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une fatale méprise",
    "summary": "À Saint-Brieuc, le jeune Joseph Collet a succombé sous les balles de Jean-Baptiste Métairie, qui, le confondant avec un rôdeur dans sa ferme, a tiré avant d'être écroué à Loudéac.",
    "paragraphs": [
      "À Saint-Brieuc, le jeune Joseph Collet a été tué par un coup de fusil tiré par Jean-Baptiste Métairie. Ce dernier, croyant avoir affaire à des rôdeurs dans la cour de sa ferme, a fait feu après avoir sommé l'inconnu de s'identifier. L'auteur a été arrêté et écroué à la maison d'arrêt de Loudéac."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Étranglée par son fils",
    "summary": "À Bruxelles, un drame familial atroce s'est noué : Félix Vandam, âgé de vingt-six ans, est accusé d'avoir étranglé sa propre mère, malgré ses dénégations formelles.",
    "paragraphs": [
      "À Bruxelles, Félix Vandam, âgé de vingt-six ans, est accusé d'avoir étranglé sa mère. Malgré ses dénégations, le rapport des médecins légistes ainsi que les traces relevées sur le cadavre ont conduit à son arrestation immédiate."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Lâche attentat",
    "summary": "Devant le Grand-Café de Courbevoie, M. Prochasson a été sauvagement agressé à coups de barre de fer par trois individus. Sa vie demeure aujourd'hui en danger.",
    "paragraphs": [
      "À Courbevoie, devant le Grand-Café, M. Prochasson a été violemment agressé à coups de barre de fer par trois individus qui exigeaient d'entrer dans l'établissement déjà fermé au public. M. Prochasson, grièvement blessé au crâne, demeure dans un état jugé désespéré."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Vie Parisienne",
    "title": "Les fêtes de la Mi-Carême",
    "summary": "Mlle Clotilde Ozouf vient d'être couronnée Reine des reines des Halles. Les préparatifs vont bon train pour un cortège de la Mi-Carême placé sous le signe de l'Exposition universelle.",
    "paragraphs": [
      "La reine des reines des Halles et des marchés, Mlle Clotilde Ozouf, a été dûment élue. Les préparatifs pour le cortège de la Mi-Carême s'organisent activement, avec le projet d'un défilé allégorique largement inspiré par la grande Exposition."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Au Dahomey",
    "summary": "Une mission française, placée sous le commandement du chef d'escadron Toutée, fait route vers le Dahomey afin de délimiter officiellement la frontière franco-anglaise.",
    "paragraphs": [
      "Une mission française, dirigée par le chef d'escadron Toutée, part pour le Dahomey afin de fixer la frontière conformément aux clauses de la convention franco-anglaise."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Politique Internationale",
    "title": "La guerre au Transvaal",
    "summary": "Le War Office confirme l'occupation de Spion Kop par les troupes du général Warren. Malgré ce succès tactique, l'artillerie boëre impose un feu nourri et les pertes britanniques s'avèrent considérables.",
    "paragraphs": [
      "Le War Office publie des dépêches sur la situation à Spion Kop. Les troupes du général Warren ont occupé la position, mais subissent un feu d'artillerie très nourri de la part des Boërs. Les pertes semblent considérables et l'issue des combats reste incertaine."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Situation des troupes britanniques en Afrique du Sud",
    "summary": "L'incertitude demeure autour de Ladysmith. Malgré des avancées locales, le commandement britannique fait face à une résistance acharnée sur le Drakensberg et à une artillerie boëre omniprésente.",
    "paragraphs": [
      "Le Petit Parisien rapporte que les forces britanniques ont dû défendre la position capturée à Spion Kop, bien que cela ne constitue pas un engagement décisif et que les troupes pourraient se retirer sur une autre ligne de défense.",
      "Londres, 26 janvier : Le Times souligne que, malgré le gain d'un point important, Ladysmith n'est pas encore délivrée. Le journal publie une dépêche de son envoyé spécial depuis Spearman's Camp, notant que les Boërs ont renforcé leurs positions le long du Drakensberg et sont prêts à une série interminable de combats.",
      "Le Daily Telegraph indique que le combat livré par le général Warren n'est qu'une escarmouche. Une dépêche du 23 janvier fait état d'une forte canonnade à Colenso et d'un bombardement de l'artillerie de marine face à Potgieters."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Sur la rivière Modder et à Kimberley",
    "summary": "À Maggersfontein, les Boërs sont affaiblis par la fièvre et les pénuries alimentaires. À Kimberley, la population et la garnison endurent le siège avec une constance exemplaire.",
    "paragraphs": [
      "Londres, 25 janvier : Le correspondant du Times à Modder-River rapporte que la situation des Boërs à Maggersfontein devient intolérable en raison de l'insalubrité, de la fièvre entérique et de la pénurie alimentaire.",
      "Kimberley, 23 janvier : Les Boërs maintiennent une forte présence autour de la ville, déterminés à disputer chaque pouce de terrain. La garnison et les habitants supportent les privations, bien que l'état sanitaire reste bon."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accusations d'exactions contre l'armée anglaise",
    "summary": "La presse allemande relaie le témoignage du baron de Dalwig, ancien officier au service des Boërs, accusant les troupes britanniques de violences commises contre les civils dans le district de Rustenburg.",
    "paragraphs": [
      "La Gazette de la Croix de Berlin publie une lettre du baron de Dalwig, ancien capitaine de cavalerie allemande servant chez les Boërs, dénonçant des faits graves. Il accuse les Anglais d'avoir violenté des femmes et des jeunes filles dans le district de Rustenburg avec l'aide de Cafres."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Diplomatie",
    "title": "Difficultés de passage à Lourenço-Marquez",
    "summary": "Les autorités portugaises durcissent leur politique frontalière. Le transit vers le Transvaal est désormais interdit, ne faisant exception que pour le personnel de l'ambulance russe.",
    "paragraphs": [
      "Marseille, 25 janvier : Le préfet des Bouches-du-Rhône a informé les passagers se rendant au Transvaal qu'ils pourraient rencontrer des difficultés à Lourenço-Marquez. Les autorités portugaises interdisent le passage de la frontière vers les Boërs.",
      "Londres, 25 janvier : Un télégramme confirme que le gouvernement portugais refuse désormais tout transit vers le Transvaal, à l'exception de l'ambulance russe."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Mouvement pour la paix et discours de M. Morley",
    "summary": "À Londres, le Bond Afrikander entrevoit une issue pacifique. M. John Morley, ancien ministre libéral, condamne vigoureusement l'impérialisme et l'influence néfaste de Cecil Rhodes dans le conflit actuel.",
    "paragraphs": [
      "Londres, 25 janvier. — Il semble que des membres influents du Bond Afrikander attendent une victoire anglaise pour amorcer un mouvement en faveur de la paix.",
      "M. John Morley, ancien ministre libéral, a prononcé un discours patriotique combattant vigoureusement l'impérialisme. Il accuse le gouvernement d'avoir entraîné la Grande-Bretagne dans une aventure périlleuse et dénonce avec force l'influence néfaste de M. Cecil Rhodes dans le déclenchement du conflit."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Vie Parlementaire",
    "title": "Séance de la Chambre des Députés",
    "summary": "La Chambre poursuit le vote du budget de l'Instruction publique. L'interpellation de M. Lasies sur les inculpés de la Haute Cour est reportée d'un mois malgré ses vives protestations.",
    "paragraphs": [
      "La Chambre a poursuivi la discussion du budget de l'Instruction publique, votant plusieurs chapitres et adoptant des amendements concernant les indemnités allouées aux professeurs ainsi que les bourses d'études.",
      "Par ailleurs, une interpellation de M. Lasies sur l'illégalité concernant les inculpés de la Haute Cour a été renvoyée à un mois, malgré les protestations du député."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique Électorale",
    "title": "Élections sénatoriales en Haute-Saône, Loire-Inférieure et Nièvre",
    "summary": "Panorama des candidatures sénatoriales où s'affrontent les républicains face aux courants nationalistes et réactionnaires dans plusieurs départements français.",
    "paragraphs": [
      "Le point sur les candidatures aux sièges de sénateurs dans plusieurs départements, où s'affrontent ouvertement les candidats républicains et les postulants nationalistes ou réactionnaires."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Réorganisation de l'école des torpilles",
    "summary": "Le ministre de la Marine ordonne une réorganisation de l'école des torpilles à Toulon afin d'améliorer la qualité de l'instruction des équipages tout en rationalisant les dépenses publiques.",
    "paragraphs": [
      "Le ministre de la Marine a ordonné une étude approfondie sur le fonctionnement actuellement trop dispersé de l'école des torpilles à Toulon, en vue d'une réorganisation destinée à améliorer la qualité de l'instruction tout en réduisant les dépenses inutiles."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Actualité Étrangère",
    "title": "Faits divers et politique à l'étranger",
    "summary": "Un tour d'horizon international marquant l'actualité : de la rixe mortelle à Charleroi aux décès princiers en Saxe, en passant par l'amnistie en Espagne et l'influenza en Italie.",
    "paragraphs": [
      "Charleroi : Mort d'un homme suite à une rixe violente survenue lors d'opérations de recrutement militaire.",
      "Dresde : Décès de la duchesse douairière Frédérique de Sleswig-Holstein.",
      "Espagne : Amnistie décrétée pour les anarchistes et les délits de presse ; explosion d'un dépôt de munitions à Santona.",
      "Italie : Épidémie d'influenza signalée et arrestation du marquis de Trivulzio, accusé d'un crime atroce à Vérone.",
      "Vienne : Condamnation de plusieurs députés hongrois suite à un duel politique."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Chronique municipale",
    "title": "Travaux et aménagements à Paris",
    "summary": "La Ville de Paris engage d'importants travaux de voirie et de rénovation architecturale, visant à créer des passages souterrains pour piétons et à moderniser les bâtiments judiciaires de la capitale.",
    "paragraphs": [
      "La Ville de Paris prévoit la création de nouveaux passages souterrains pour les piétons sur les grands boulevards, une mesure destinée à réduire les accidents de la circulation devenus trop fréquents.",
      "Par ailleurs, d'importants travaux de rénovation ont été annoncés concernant le Palais de justice ainsi que le Tribunal de commerce."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Chronique",
    "title": "Réception à l'Élysée",
    "summary": "Le Président de la République, M. Émile Loubet, et Mme Loubet ont convié le corps diplomatique à un dîner officiel, suivi d'une réception marquée par le faste et l'élégance de rigueur.",
    "paragraphs": [
      "Le Président de la République et Mme Loubet ont offert, hier, un dîner en l'honneur des membres du corps diplomatique, suivi d'une réception particulièrement élégante."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Politique",
    "title": "Nomination à l'Académie française",
    "summary": "La commission de l'Académie française, sous la présidence de ses membres éminents, a entériné la candidature du nouveau récipiendaire après avoir entendu les rapports de MM. Deschanel et Prudhomme.",
    "paragraphs": [
      "La commission nommée par l'Académie française a entendu hier la lecture de MM. Paul Deschanel et Sully Prudhomme. Le président de la commission, après avoir recueilli l'avis de tous ses collègues, a adressé ses sincères félicitations, jointes à celles de l'Académie, au récipiendaire ainsi qu'à son répondant."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Politique",
    "title": "Élection à l'Assistance publique",
    "summary": "M. Félix Voisin a été triomphalement reconduit à la présidence du conseil de surveillance de l'Assistance publique lors d'un scrutin tenu hier matin, face à M. Charles Risler.",
    "paragraphs": [
      "Le conseil de surveillance de l'Assistance publique a procédé hier matin à l'élection de son président.",
      "Au premier tour de scrutin, les voix se sont réparties ainsi : M. Félix Voisin, président sortant, 14 voix ; M. Charles Risler, 10 voix ; bulletins blancs, 3. Il est à noter que M. Charles Risler n'était pas candidat.",
      "Au second tour, M. Félix Voisin a été réélu président par 16 voix contre 10 à M. Risler et 3 bulletins blancs."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Société",
    "title": "Conférence sur la situation en Afrique du Sud",
    "summary": "Au Musée social, M. Vigouroux, introduit par M. Ribot, a exposé une thèse audacieuse sur la crise sud-africaine, prédisant le rôle prépondérant des populations indigènes dans le futur équilibre politique.",
    "paragraphs": [
      "Une opinion originale sur la situation en Afrique du Sud, en proie aujourd'hui aux horreurs de la guerre anglo-boër, a été fournie hier soir au Musée social par un conférencier, M. Vigouroux. M. Ribot présidait la réunion devant une assistance nombreuse composée d'érudits et de savants.",
      "M. Vigouroux a traité la question sud-africaine sous l'angle social. Selon lui, la crise actuelle est purement transitoire ; la véritable solution viendra du développement constant, en nombre et en force, de l'élément indigène.",
      "Celui-ci fait, de jour en jour, une concurrence plus active aux Afrikanders et aux Uitlanders qu'il sera, selon M. Vigouroux, capable de réconcilier, peut-être, en les éliminant dans un avenir relativement peu éloigné."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits divers",
    "title": "La douloureuse odyssée de Joséphine Bourquardez",
    "summary": "Égarée dans Paris après avoir quitté Lyon dans la misère, une jeune femme de vingt-trois ans recherche désespérément ses trois enfants et sa mère, dont elle a perdu la trace. Une enquête est en cours.",
    "paragraphs": [
      "Une jeune femme, pauvrement vêtue et mourante de fatigue et de faim, s'est présentée avant-hier soir au poste de police de la rue du Bouquet-de-Longchamp, demandant aux agents l'hospitalité pour la nuit.",
      "« Je me nomme Joséphine Bourquardez, suis âgée de vingt-trois ans. Il y a un mois, à la suite de revers nombreux, je dus quitter Lyon, emmenant avec moi ma mère et mes trois enfants. Nos ressources étaient fort minces et nous dûmes nous réfugier dans un hôtel meublé de la rue des Pyrénées. »",
      "« Chaque matin, je me mettais en quête de travail. Mais, hélas, toutes mes démarches restèrent infructueuses. Il y a cinq jours, notre logeur nous mit à la porte. Sur les conseils d'un passant, ma mère, mes enfants et moi avons demandé l'hospitalité aux agents du poste de police. Or, ce matin, j'ai quitté ma mère et mes enfants, mais je ne les ai point retrouvés au rendez-vous que je leur avais fixé. »",
      "Le chef de poste donna asile à Mme Bourquardez, et M. Jeanne-Delamare, commissaire de police, a fait hospitaliser la jeune femme dans un hôtel meublé, au 24 de la rue de Lubeck. Des recherches ont commencé pour retrouver la grand-mère et les trois enfants égarés. M. Lépine, préfet de police, a prescrit une enquête sur cette infortune navrante."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits divers",
    "title": "Incendie à l'hôpital boulevard Macdonald",
    "summary": "Un incendie a éclaté hier matin dans les baraquements de l'hôpital du boulevard Macdonald. Rapidement maîtrisé par le personnel, le sinistre n'a fait aucune victime, malgré des dégâts matériels notables.",
    "paragraphs": [
      "Hier matin, vers dix heures, le feu s'est déclaré au sein des baraquements dépendant de l'hôpital du boulevard Macdonald. L'incendie, ayant pris naissance dans des locaux de service général, a été attaqué vivement dès son début par le personnel de l'hôpital, qui a mis en manœuvre deux lances.",
      "Les flammes, cependant, se propagèrent assez rapidement en raison des matières éminemment combustibles qu'elles rencontraient, et elles n'ont été définitivement maîtrisées que vers midi. On ne signale, fort heureusement, aucun accident de personnes. Les dégâts matériels paraissent assez importants. M. Borde, commissaire de police du quartier du Pont-de-Flandre, a ouvert une enquête."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits divers",
    "title": "Incendie rue de Bretagne",
    "summary": "Un début d'incendie causé par une fuite de gaz a blessé deux ouvriers ajusteurs, rue de Bretagne. Le sinistre a été rapidement éteint par les pompiers de la caserne de Sévigné.",
    "paragraphs": [
      "Un commencement d'incendie s'est déclaré la nuit dernière, à onze heures et demie, au 15 de la rue de Bretagne, dans un logement occupé par MM. Richard frères, ouvriers ajusteurs sur métaux. Le feu a été communiqué par un bec de gaz placé trop près d'un conduit de plomb qui a fondu ; il a été éteint rapidement par les pompiers de la caserne de Sévigné.",
      "Les dégâts matériels sont peu importants, mais il y a eu, malheureusement, des accidents de personnes. MM. Maurice et Guillaume Richard, âgés, le premier de vingt-sept ans et le second de vingt-quatre ans, ont été brûlés aux mains."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits divers",
    "title": "Un soldat trouvé dans un état étrange",
    "summary": "Un jeune soldat, trouvé en sous-vêtements rue Saint-Sébastien et tenant un bâton au port d'arme, a été interpellé par la police. Il aurait été dépouillé de ses effets par des malfaiteurs.",
    "paragraphs": [
      "Vers six heures et demie du matin, deux gardiens de la paix ont découvert, rue Saint-Sébastien, un jeune soldat dont l'accoutrement était assez étrange. Vêtu seulement de son pantalon et d'un képi, le militaire se tenait au port d'arme, serrant contre lui, ainsi qu'il eût fait de son fusil, un long bâton.",
      "Interrogé sur sa présence en ces lieux, il déclara attendre son général qui était entré dans une maison et lui avait ordonné de ne pas bouger. Les agents trouvèrent plus loin, accrochés à un arbre, la capote, le sabre et les chaussures du militaire. Persuadés qu'ils avaient affaire à un fou, ils l'emmenèrent au commissariat.",
      "Le soldat expliqua qu'un officier supérieur et un ami lui avaient enlevé ses effets pour qu'il fût plus à l'aise. On pense qu'il a été victime de filous. Le jeune soldat, nommé Léon H., a été conduit à la caserne du Château-d'Eau."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits divers",
    "title": "Le prix d'une bouillotte",
    "summary": "Victime de sa naïveté, un cultivateur a acheté une bouillotte à un voyageur dans le train, pensant acquérir une machine utilitaire. La police a dû confisquer l'objet à son arrivée à Paris.",
    "paragraphs": [
      "Hier matin, dans un train entre Bernay et Paris, un cultivateur nommé Jean Carrère, âgé de soixante-sept ans, fit la rencontre d'un voyageur. Intrigué par la bouillotte qui réchauffait les pieds de son compagnon, il demanda à l'acheter, pensant qu'il s'agissait d'une machine utilitaire.",
      "Le marché fut conclu pour dix francs. À l'arrivée gare Saint-Lazare, l'acheteur voulut emporter sa « machine », mais fut stoppé par un employé de la Compagnie de l'Ouest qui réclama le matériel. Conduit au commissariat, le pauvre paysan dut se séparer de son emplette avec un véritable déchirement de cœur."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Statistique",
    "title": "Mouvement de la population à Paris",
    "summary": "Le bilan hebdomadaire de la statistique municipale recense 1 180 décès, dont 152 par maladies respiratoires, pour 491 mariages et 1 159 naissances. Le nombre d'enfants placés en nourrice s'élève à 339.",
    "paragraphs": [
      "Le service de la statistique municipale a compté, pendant la semaine, 1 180 décès. La fièvre typhoïde a causé 9 décès, la variole 1, la rougeole 11, la scarlatine 3, la coqueluche 5 et la diphtérie 4.",
      "Les maladies respiratoires ont causé 152 décès. On a enregistré 491 mariages et 1 159 naissances vivantes. 339 enfants ont été mis en nourrice."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits divers",
    "title": "Autour de Paris",
    "summary": "Faits divers en banlieue parisienne : accidents mortels à Garches, Pontoise et Souppes, agressions à Aubervilliers et Ivry, incendie à Montreuil, et une mystérieuse disparition à Pantin.",
    "paragraphs": [
      "Saint-Cloud : À Garches, une ménagère, Pauline Pepou, est tombée dans un puits et s'est noyée.",
      "Aubervilliers : Ernest Arclide a agressé le camionneur Lucien Leplier et a tué son cheval d'un coup de couteau au poitrail avant d'être arrêté.",
      "Montreuil-sous-Bois : Un violent incendie a ravagé un immeuble rue des Deux-Communes.",
      "Pantin : M. Marie, commissaire de police, recherche le nommé Adolphe Hissière, camionneur, disparu après avoir encaissé des factures pour son patron.",
      "Ivry : L'agression contre M. René Vernholec n'a pas eu lieu comme annoncé, le commerçant ayant mis ses agresseurs en fuite.",
      "Fontainebleau : Le corps de Constant Colliot, disparu depuis décembre, a été retrouvé dans le canal du Loing, à Souppes.",
      "Pontoise : Victor Balaguer, cantonnier, est mort après une chute accidentelle dans l'escalier de sa cave."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Départements",
    "title": "Nouvelles des correspondants",
    "summary": "Chronique régionale : une rixe sanglante frappe Chantilly, tandis que la justice libère deux prévenus à Clermont. Par ailleurs, les autorités signalent deux macabres découvertes dans l'Oise et le canal de Briare.",
    "paragraphs": [
      "Chantilly : Une rixe d'une extrême violence a éclaté hier à Vineuil. Trois individus ont asséné plusieurs coups de couteau à l'entraîneur anglais M. Jennings. Les agresseurs ont été immédiatement appréhendés par les forces de l'ordre et conduits au poste.",
      "Clermont (Oise) : Le juge d'instruction a ordonné la mise en liberté de MM. Ambroise et Barbier. Les charges retenues contre eux, concernant une affaire d'incendie volontaire, ont été jugées insuffisantes pour motiver leur maintien en détention préventive.",
      "Compiègne : Le cadavre de M. Stanislas Despierres, garde champêtre dont la disparition avait été signalée voici quelques jours, a été découvert et repêché dans les eaux de l'Oise par des riverains.",
      "Montargis : Le corps du nommé Paul Dordoit, un vieillard porté disparu, a été retiré du canal de Briare. Le cadavre présentait des blessures dont l'origine suspecte nécessite l'ouverture d'une enquête judiciaire approfondie."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Grèves et mouvements sociaux",
    "summary": "État des tensions sociales : mouvements de grève chez les charpentiers de l'Exposition et les tisseurs de Saint-Quentin, et négociations en cours pour les mineurs de Carmaux et les tisseurs de Saint-Étienne.",
    "paragraphs": [
      "Parmi les charpentiers employés aux travaux de l'Exposition, quatre cents ont décidé de cesser le travail pour obtenir une revalorisation de leurs salaires.",
      "À Saint-Étienne, les fabricants ont adressé une proclamation aux tisseurs concernant l'application stricte du tarif de 1898 ; des engagements individuels sont actuellement en cours de signature.",
      "Concernant les mineurs de Carmaux, le comité de défense a transmis à la compagnie une nouvelle requête émanant des rouleurs et des terrassiers.",
      "À Vienne, M. Pascal-Villaut a pris la décision de fermer son usine à la suite d'un différend persistant avec cinquante de ses ouvriers.",
      "Enfin, à Saint-Quentin, les ouvriers des fabriques locales ont débrayé, réclamant avec insistance une augmentation de leurs gages."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Exposition Universelle",
    "title": "Organisation de l'Exposition de 1900",
    "summary": "Le comité d'installation de l'Exposition de 1900 organise la répartition des emplacements pour la classe 34, sollicite des outils agricoles anciens pour son musée rétrospectif et annonce le calendrier des adjudications.",
    "paragraphs": [
      "Le comité d'installation de la classe 34 a procédé à la répartition des emplacements. Les exposants ont été divisés en deux catégories distinctes, selon leurs besoins spécifiques en surface murale.",
      "Par ailleurs, le comité de la classe 35 lance un appel pressant aux possesseurs d'anciens outils agricoles afin d'enrichir les collections du musée rétrospectif de l'Exposition.",
      "Enfin, la mise en adjudication des kiosques des 5e, 6e et 7e séries se tiendra au cours du mois de février prochain."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Théâtre et Spectacles",
    "title": "Courrier des théâtres",
    "summary": "Le point sur les actualités des théâtres parisiens : changements à la Comédie-Française, succès de la pièce « Les Petits Croisés » à La Cigale, et suite des combats de lutte aux Folies Bergère.",
    "paragraphs": [
      "Théâtre Cluny : Première de « La Fiancée de Thylda ».",
      "Comédie-Française : Mlle Bartet étant indisposée, le programme a été modifié.",
      "La Cigale : Succès de la nouvelle pièce « Les Petits Croisés ».",
      "Folies Bergère : La lutte se poursuit avec la revanche prévue entre Pons et Pytlasinski."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Sports",
    "title": "Actualités sportives",
    "summary": "Le cyclisme est à l'honneur avec le nouveau record à Achères, les préparatifs de la Coupe Gordon-Bennett et le défi quotidien de mille kilomètres relevé par le coureur Teddy Hale.",
    "paragraphs": [
      "Béconnais a battu le record du kilomètre sur motocycle à Achères.",
      "La commission sportive de l'Automobile-Club de France a choisi l'itinéraire Paris-Lyon pour la Coupe Gordon-Bennett.",
      "Le cycliste Teddy Hale a déjà parcouru 1 000 kilomètres dans son défi de 100 milles par jour pendant un an."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Feuilleton",
    "title": "Deux Passions - Un Drame du Mariage",
    "summary": "Georges avoue à Suzanne la perte de leurs économies. Soulagée de découvrir une raison moins grave que ses soupçons, elle se réconcilie avec son époux dans un espoir de vie paisible à la campagne.",
    "paragraphs": [
      "Georges prit son parti en brave ou, du moins, avec l'apparence du courage. « Que croyez-vous donc ? » demanda-t-il. « Mais que nous possédions quelques économies. » « C'est vrai. » « Combien ? » « Cinquante à soixante mille francs. » « Tant que cela. » « Au moins. » « Eh bien ! » fit-elle doucement.",
      "Il brûla ses vaisseaux : « Ma chère Suzanne, j'hésitais à vous le dire et je suis désespéré de vous l'avouer. Si, depuis quelque temps, vous me voyez si tourmenté, si sombre même quelquefois, tranchons le mot, et d'un caractère si insupportable, c'est que j'ai un véritable remords sur la conscience. Ces soixante mille francs, je les ai perdus. » Il connaissait l'âme et le cœur de Suzanne.",
      "Le jeune homme ne craignait pas de reproches et il avait raison. Elle eut pourtant une défiance : « Perdus ! » fit-elle. « Complètement. Et était-ce bien la cause de vos ennuis ? » « Oui. La seule. Je vous le jure. Quelle autre raison aurais-je pu avoir ? En allant à Rouen, j'espérais vraiment que cet idiot de Bonnemare allait me proposer quelque chose de bon qui m'eût permis de me refaire sans danger, car je n'en veux plus, de hasards ! J'en ai assez vu ! J'ai commis d'impardonnables sottises. J'ai été pris de la maladie qui court. Tout le monde spécule aujourd'hui, brasse des affaires, c'est-à-dire joue. Je me suis laissé entraîner. Je me croyais plus fort que les autres, et, sur ma parole, j'étais encore plus stupide que le commun des martyrs. »",
      "« J'ai donc joué et j'ai perdu. Tout. Tout ce que nous avions économisé. Rien de plus. Une simple bagatelle, une misère qu'un ami m'a prêtée. »",
      "« Bonnemare ? Pas lui, un autre que vous ne connaissez pas, un vieux camarade à qui j'ai demandé ce qui me manquait et qui me l'offrait d'ailleurs de lui-même. Soyez sans inquiétude. Nous le rembourserons aisément. Et c'est le moment que ce farceur de Bonnemare choisit pour me parler de ses bateaux, dont j'aurais pu devenir un des administrateurs ; il tombe à pic, l'animal. »",
      "Suzanne souriait. Oh ! elle ne songeait pas au divorce, elle avait horreur du bruit et de tout ce qui pouvait ressembler à un scandale. Elle se félicitait de trouver son compagnon de chaîne (car qu'était le mariage, sinon une chaîne pour elle ?) moins haïssable qu'elle ne l'avait supposé.",
      "Son mari avait repris tout son aplomb et débité sa tirade avec une apparente sincérité qui la rendait perplexe. Disait-il vrai ? Mais alors ses voyages, sa conduite, ses absences, ses airs mécontents, tout s'expliquait. Dans sa loyauté, elle s'accusait presque de l'avoir mal jugé, de le soupçonner à tort et de l'éloigner d'elle avec ses froideurs.",
      "Elle se persuadait d'autant mieux de son erreur que, depuis qu'il s'était soulagé par cette confession, il semblait heureux. Il riait franchement comme aux premiers jours de leur union, après sa maladie, alors qu'elle se croyait aimée et qu'elle l'était en effet. Il avait pris sa fille dans ses bras et la couvrait de baisers, sincères ceux-là. Il eût fallu être un monstre pour qu'il en fût autrement.",
      "« Je vais devenir d'une avarice sordide pour boucher la brèche et t'amasser une dot », lui disait-il, « et nous irons vite. Tu verras. » La cloche du campanile sonna le déjeuner. Suzanne se leva et, comme Valentine avait fait la veille, elle passa son bras sous celui de son mari et, d'une voix émue : « Georges, lui dit-elle, pourquoi ne m'avoir pas avoué plus tôt la vérité ? Vous m'auriez épargné bien des soucis. Dès qu'il ne s'agit que d'argent, soyez tranquille. Si vous en avez besoin, j'en trouverai. J'ai des amis. Voulez-vous ? »",
      "Il secoua la tête, touché lui-même du ton affectueux dont elle lui faisait cette proposition : « Nos économies suffiront. Nous allons vivre ici tranquilles, heureux, nous promener, pêcher, chasser, canoter comme autrefois. Vous souvenez-vous ? » « Sans doute. Vous êtes un ange du bon Dieu, Suzanne. Moi qui avais tant de peur de vos reproches ! » Elle murmura doucement : « Vous aviez bien tort, mon ami. »",
      "Pendant le déjeuner, il fut d'une étourdissante gaieté. Il exposa ses projets pour l'avenir. Il en avait assez de Paris. Paris est bon pour les archi-millionnaires comme les d'Angeville par exemple, qui ont hôtel dans les grands faubourgs, des châteaux en province et des rentes qui n'en finissent plus. Mais les autres, les bons provinciaux, tout ce qu'ils y gagnent, c'est une fièvre, une malaria pire que celle des Marais-Pontins et souvent la ruine honteuse et sans remède. Il en avait enfilé le chemin. Il se reprenait. D'ailleurs, que lui manquait-il à la Coudraie ? Ne fallait-il pas être fou à lier pour en désirer davantage ? Paul Tavernier lui-même l'écoutait avec stupeur, en se demandant ce qui s'était passé. Lorsqu'on se leva, Suzanne était convaincue de sa sincérité et se répétait avec joie le vieil adage : Plaie d'argent n'est pas mortelle."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Tragédies de l'Amour",
    "summary": "Après une tentative de suicide de Pierre, Gaston le découvre et le sauve. Sur les ruines de leur discorde, une réconciliation fraternelle bouleversante renaît au souvenir de leur enfance complice.",
    "paragraphs": [
      "Gaston ne réfléchit plus, il ne pense plus. Tous les drames des dernières semaines s'effacent en une seconde. Il ne voit plus qu'une chose, devant ses yeux, un spectacle inouï. Son frère vient de se tuer. Son frère agonise. Il relève l'escabeau, monte, coupe la corde et soutient le corps dans ses robustes bras. Puis, autour du cou, il desserre ce terrible nœud enfoncé dans les chairs, où les chairs tuméfiaient, rougissaient par-dessus le chanvre.",
      "Alors une désolation s'empare de cet homme. Un remords. Et quel remords ! « Pierre ! Pierre ! Est-il mort ? Il ne faut pas qu'il meure ! » Vraiment, tous deux ont donc été loin en préparant ainsi, de gaieté de cœur, cette chose contre laquelle plus jamais rien ne peut. Et l'autre ne bouge pas. Les yeux sont largement ouverts. Le même rictus de la bouche, large, effrayant, étalant toutes les dents blanches.",
      "C'est la terreur d'abord qui s'empare de Gaston. Mais la terreur passe. Et survient la pitié dans son cortège, rapide comme la passée d'un éclair, de tous les souvenirs d'enfance, de toutes les tendresses de jadis. Et un mot plus doux tombe enfin de ses lèvres, depuis si longtemps fermées aux effusions : « Mon frère ! mon frère ! » Mais l'autre a les yeux ternes et fixes, des yeux terribles. Gaston applique la bouche sur la bouche de son frère. Il y souffle lentement pour rendre un peu de respiration aux poumons, s'il en est encore temps. Et tout en faisant cela, il est pénétré d'horreur. Il a tout oublié, et sa haine de cet homme et son amour pour Colette. Sur les ruines de sa vie, il ne subsiste en ce moment que le souvenir de ce qu'ils ont été tous deux, Pierre et Gaston, l'un pour l'autre, avant l'arrivée de Colette à Villefort.",
      "On citait leur tendresse fraternelle dans tout le pays. Jamais deux frères ne furent adorés comme s'adoraient ces deux grands garçons que l'on rencontrait ensemble toujours, toujours d'accord. Peines et joies, ils avaient mis tout en commun, jadis. Jamais l'un n'avait cherché une distraction, surtout un plaisir, lorsque l'autre avait un empêchement. Mais lorsqu'il y avait pour l'un des deux une cause de grande joie, l'autre en prenait sa part. Dès leur extrême enfance, ils s'étaient aimés ainsi ; ils n'avaient point connu la jalousie ; les jouets qu'on leur donnait, ils se les partageaient ; quand l'un était puni, l'autre n'avait pas, il est vrai, le droit de partager et d'alléger ainsi cette punition, mais il refusait de son côté toute récompense.",
      "On avait pris l'habitude de leur faire les mêmes cadeaux. Ensemble, ils avaient eu fusils pareils, pistolets pareils, chevaux pareils. Vêtus de même, pendant longtemps, bien qu'ils ne fussent point jumeaux. On avait dit, en riant, lorsqu'ils étaient revenus du service militaire : « Ils n'épouseront pourtant point la même femme ! » Et l'on avait dit cela sans savoir que ce serait justement la femme qui ferait naître en eux la première discorde.",
      "Tout cela revenait à l'esprit de Gaston devant cette figure terrible. Et il s'écria, lamentable : « Mon frère est mort ! mon frère est mort ! » Il ouvre la porte pour qu'il y ait plus d'air. Il s'assied sur la dernière marche du perron. Il prend le corps sur ses genoux et le berce comme un enfant. Le frère aîné ne bouge pas. Gaston lève vers le ciel un regard navré. Et son regard embrasse cette nature, toute cette jolie campagne des bords de la Moine et de la Sèvre où s'est écoulée leur vie à tous les deux.",
      "Pas un arbre où ils n'eussent grimpé et déniché des nids. Pas un hêtre où ils n'eussent tiré quelque écureuil effarouché. Pas un sentier, si inconnu, si étroit, si embroussaillé qu'il fût, où ils n'eussent couru, déchirant leurs vêtements et se bousculant. Pas une fontaine où ils n'eussent tendu des lacets aux oiseaux. La Sèvre et la Moine elles-mêmes, miroitant au soleil de cette belle journée, lui rappelaient des souvenirs, les uns gais, les autres tragiques. Que de parties de pêche ! Que de promenades en bateau ! Que d'éclats de rire sur leurs lèvres d'enfants ou de jeunes garçons, si sonores et si frais qu'ils faisaient envie à tous les oiseaux d'alentour.",
      "Et un jour Gaston était tombé à l'eau. Il savait nager, il est vrai, mais il s'était embarrassé les jambes dans les longues tiges flexibles, enveloppantes et résistantes des nénuphars. Il allait mourir. Déjà il sentait l'asphyxie bourdonner à ses oreilles, et, comme pris dans les inextricables mailles d'un gigantesque filet, au fond de la rivière, il s'abandonnait et ne faisait plus d'effort. Pierre s'était jeté à son secours. Il risquait lui-même d'être pris dans cet enveloppement, mais il eut l'adresse et la force de dégager son frère et il le ramena dans le bateau, presque mourant. Gaston avait cherché à rendre service à son frère, afin d'être quitte. Que de fois il lui avait dit : « Tâche donc d'être en danger de mort pour que je te sauve ! » Et si tu ne me sauvais pas ? « Eh bien, j'y resterais avec toi... Tu sais bien que je ne pourrais pas vivre sans toi. Pas plus que je ne pourrais vivre sans toi. » L'occasion ne s'était pu offrir.",
      "Et le service rendu à seize ans, Gaston ne l'avait jamais payé à son frère. Aujourd'hui le frère venait de se pendre, et il se pendait à cause de Gaston. C'était Gaston qui le tuait. « Mon frère est mort ! Mon frère est mort ! »",
      "Cependant il lui semble remarquer qu'un peu de vie revient à ce visage. Au cri qu'il vient de pousser, il s'imagine que Pierre a répondu par un léger mouvement des doigts. Les lèvres aussi ont remué. Distendues jusqu'à présent, elles se ferment. Et les paupières ont un léger battement sur les yeux fatigués. « Mon frère ! mon frère ! » C'est peut-être ce cri qui, du fond de la tombe, a rappelé l'autre avec la promesse d'une tendresse nouvelle et de l'oubli pour tout ce qui s'est passé, et d'une vie qui serait heureuse comme celle d'autrefois.",
      "Il n'est pas mort, en effet. Gaston lui prodigue ses soins, en un accès de fièvre et de folie, et des mots sans suite où il demande pardon, où il supplie son frère de ne pas mourir. Pierre a fermé les yeux, mais il vit. Cela se voit ! Le sang, un moment arrêté, circule dans les artères. Il rouvre les yeux. Il ne comprend pas encore ce qui s'est passé, mais, peu à peu, les événements repassent devant son esprit. Il s'est pendu chez son frère. Il a voulu mourir et que sa mort restât comme une éternelle épouvante en cette âme fraternelle. Il se soulève, veut se tenir debout. Il veut fuir. Mais il n'a pas assez de force. Gaston le soutient.",
      "« Tu veux partir ? » « Oui. » « Tu ne veux plus que nous nous aimions ? » « Comme autrefois. » « Oui, comme autrefois. Et toi, tu le veux donc ? Dis un mot, un seul mot, ou plutôt tends-moi les bras seulement et je saurai ce que cela signifie. Et ce serait fini ? » « Ce serait fini. » « Mais, elle ? elle ? » « Tends-moi les bras, te dis-je. Et embrasse-moi, veux-tu ? » Alors, en tremblant, Pierre tend ses mains fiévreuses. Gaston l'étreint contre sa poitrine. « Mon frère ! mon frère ! Je te croyais perdu pour toujours. Et je te retrouve enfin. »",
      "Ils se regardent longuement. Ils s'étreignent de nouveau. Ils ont un sourire triste dans leur sourire. Il y a des larmes. Pierre murmure en baissant la tête : « C'est horrible ce que je suis venu faire chez toi. » « C'est horrible, cela est vrai, et pourtant je ne puis te le reprocher puisque c'est de là que part notre réconciliation. » « Alors, tu m'aimes donc encore ? » « Et toi... autant que par le passé. Oui, et davantage, parce que je viendrai te faire oublier cette haine atroce qui nous a divisés et qui a failli nous rendre criminels. C'est comme moi, frère. Je redoublerai d'affection, je le jure. »"
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Spectacles",
    "title": "Programme des théâtres pour le 26 janvier",
    "summary": "Consultez le programme complet des représentations lyriques et théâtrales parisiennes pour la journée du 26 janvier 1899, des grandes scènes nationales aux théâtres de quartier.",
    "paragraphs": [
      "Opéra : Guillaume Tell.",
      "Opéra-Comique : Carmen.",
      "Théâtre-Français : Œdipe Roi.",
      "Odéon : Les Fourchambault.",
      "Châtelet : Robinson Crusoé.",
      "Théâtre Sarah-Bernhardt : Hamlet.",
      "Lyrique-Renaissance : Le Voyage en Chine.",
      "Variétés : La Belle Hélène.",
      "Gaîté : Les Saltimbanques.",
      "Nouveautés : La Dame de chez Maxim.",
      "Palais-Royal : Coralie et Cie.",
      "Vaudeville : Ma Cousine.",
      "Porte-Saint-Martin : Les Misérables.",
      "Ambigu-Comique : François les Bas bleus.",
      "Athénée : L'Homme à l'oreille coupée.",
      "Cluny : Le Fiancé de Thylda.",
      "Déjazet : Papa Beau-Père.",
      "Bouffes-du-Nord : Don César de Bazan.",
      "Théâtre Mondain : L'Anneau de Fer.",
      "Ba-ta-clan : La Légion étrangère.",
      "Montmartre : La Goualeuse.",
      "Petit Théâtre : La Cellule n°1.",
      "Folies-Belleville : V'là l'Cipal.",
      "Grenelle : La Dame de Monsoreau.",
      "6e : Le Tour du monde d'un enfant de Paris."
    ]
  }
];
