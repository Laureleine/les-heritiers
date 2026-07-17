// Date: 1900-03-26
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-03-26 (Version Restaurée, 36 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Actualités internationales",
    "title": "Le Pèlerinage de la Mecque et les mesures sanitaires",
    "summary": "Face aux ravages du choléra et aux risques de propagation de la peste en Arabie, le gouverneur de l'Algérie, M. Laferrière, a pris la décision nécessaire d'interdire cette année le pèlerinage de la Mecque.",
    "paragraphs": [
      "En réponse à la demande officielle qui lui avait été adressée par les musulmans algériens désireux d'accomplir le pèlerinage de la Mecque, le gouverneur de l'Algérie, après avoir soigneusement étudié la question et s'être rendu compte des dangers de toutes sortes qui résulteraient d'une visite aux lieux saints, vient d'interdire cette année l'exode religieux de ses administrés.",
      "C'est à son très grand regret que M. Laferrière a dû prendre cette décision. Elle lui a été inspirée par le désir de sauvegarder l'état sanitaire de notre colonie et celui des pèlerins eux-mêmes. Le choléra sévit actuellement en Arabie et l'intensité du fléau est telle que l'Imam de Mascate s'est vu obligé d'établir un lazaret pour les caravanes venant de l'intérieur de la presqu'île.",
      "Et ce n'est point l'unique fléau dont la contagion menacerait nos musulmans algériens : ils risqueraient encore de rapporter chez eux les germes de la peste.",
      "La Mecque a toujours été le grand foyer d'origine des épidémies qui se sont répandues sur l'Europe. Les conditions antihygiéniques dans lesquelles s'accomplit le pèlerinage expliquent cet état de choses.",
      "À la Mecque même, il n'y a qu'un puits qui fournisse une eau à peu près potable. Comment ce puits suffirait-il aux besoins de tous les pèlerins ?",
      "Autre cause de pestilence : l'excursion dans la vallée de Muna, où chaque pèlerin, pour devenir hadji, est tenu d'immoler une bête vivante. Or, ces pèlerins sont quelquefois trois cent mille, et ces sacrifices forment un abominable charnier.",
      "La conférence de Venise a réglé la question des mesures sanitaires, mais elle ne s'occupa qu'incidemment des pèlerins se rendant à la Mecque. Le pèlerinage de 1893 fut particulièrement meurtrier, avec 40 000 décès selon M. Proust.",
      "La prophylaxie maritime actuelle dans la mer Rouge et le golfe Persique donne trop peu de sécurité. Il conviendrait de créer des ressources à l'aide de taxes sur la navigation afin de porter remède à la situation.",
      "Toutes ces mesures, si elles étaient appliquées, n'enlèveraient peut-être pas au pèlerinage de la Mecque sa terrible nocivité, elles empêcheraient du moins les épidémies de s'étendre. C'est pour cela que le gouverneur de l'Algérie vient d'interdire le pèlerinage."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage Secret",
    "summary": "Un homme envisage un périlleux voyage d'études à travers l'Amérique, espérant trouver dans ce travail une diversion salutaire à ses tourments intimes, tout en gardant ses projets secrets.",
    "paragraphs": [
      "Ce travail qu'on lui demandait d'aller contrôler d'abord dans les régions froides de la Nouvelle-Écosse, puis sur quelques points les plus humides et les plus chauds du Brésil et qui aurait pour conclusion sa synthèse par une dernière série d'observations dans les terres froides du Mexique, ne serait-ce pas aussi une diversion heureuse, utile, au chagrin qui le pénètre ?",
      "Il ne voulait rien dire d'avance à Rolande pour éviter des questions, des étonnements, des rapprochements, des soupçons. Se préparer secrètement à un voyage qui durerait trois mois.",
      "Et puis, à son retour seulement, Manuèle déciderait du sort de son enfant. Tout est bien ainsi. N'y rien changer, ce serait rendre un triste service à la chérie à qui sa mère apprend le travail."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Élections sénatoriales et législatives",
    "summary": "Résultats des scrutins du 25 mars : M. Delport est élu sénateur du Lot, tandis que MM. Fachard, Chambon et Quesnel sont élus députés respectivement dans la Haute-Saône, la Savoie et la Seine-Inférieure.",
    "paragraphs": [
      "Élection sénatoriale du 25 mars (Lot) : M. Delport a été élu en remplacement de M. Talou, décédé.",
      "Élections législatives du 25 mars (Haute-Saône) : M. Fachard est élu en remplacement de M. Bontemps.",
      "Élections législatives du 25 mars (Savoie) : M. Chambon est élu en remplacement de M. Antoine Perrier.",
      "Élections législatives du 25 mars (Seine-Inférieure) : M. Louis Quesnel est élu en remplacement de M. de Montfort."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "International",
    "title": "La crise parlementaire italienne",
    "summary": "La Chambre italienne est en proie à une obstruction parlementaire sans précédent. Le général Pelloux, mis en cause pour sa suspension des libertés, place le roi Humbert devant une issue délicate.",
    "paragraphs": [
      "Depuis trois semaines, la Chambre italienne est quotidiennement le théâtre des scènes les plus violentes. L'extrême gauche y déploie une obstruction qui ne trouve que de rares précédents dans l'histoire parlementaire.",
      "Le général Pelloux, président du Conseil, a introduit une suspension des libertés constitutionnelles, ce qui est la cause responsable de la crise. L'opposition demande unanimement une Constituante.",
      "Le roi Humbert fait face à deux issues : la dissolution de la Chambre, qui serait un saut dans l'inconnu, ou le renvoi du cabinet."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Collision en Seine",
    "summary": "Une collision entre deux bateaux parisiens près du pont de Solférino a causé des dégâts matériels importants, mais grâce au sang-froid des pilotes, aucun passager n'a été blessé.",
    "paragraphs": [
      "Une fausse manœuvre a failli provoquer, hier après-midi, une véritable catastrophe en Seine. Les bateaux parisiens 39 et 45 se sont heurtés près du pont de Solférino.",
      "Aucun accident de personnes n'est à déplorer, et on ne saurait trop féliciter de leur présence d'esprit les pilotes qui ont réussi à sauver les 350 passagers.",
      "La collision s'est produite vers trois heures et quart à cause de l'encombrement du fleuve. L'étrave du 45 a défoncé la cloison de tribord du 39. Les deux bateaux ont été dirigés vers la berge du quai d'Orsay pour le sauvetage.",
      "Les pompiers et les équipes de secours ont travaillé à renflouer les bateaux, qui ont été ramenés aux chantiers d'Auteuil à six heures du soir."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un singulier médecin",
    "summary": "À Sétif, un indigène, sur les conseils absurdes d'un rebouteux, a succombé dans d'atroces souffrances après avoir tenté de se guérir en s'allongeant sur un brasier ardent qu'il avait lui-même préparé.",
    "paragraphs": [
      "Un indigène des environs de Sétif, nommé Ali-ben-Hadj-Abdallah, malade depuis quelque temps, s'est adressé à un rebouteux. Celui-ci lui prescrivit de creuser un trou, d'y allumer un grand feu et de s'y coucher pour obtenir la guérison.",
      "Le malheureux a exécuté l'ordre, mais il a été littéralement rôti. Il est mort après une terrible agonie."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Actualités locales",
    "title": "Inaugurations à Saint-Maur-les-Fossés",
    "summary": "Le préfet de la Seine, M. de Selves, a présidé à Saint-Maur-les-Fossés l'inauguration de la mairie et la pose de la première pierre d'un barrage destiné à rendre la Marne navigable.",
    "paragraphs": [
      "Le préfet de la Seine, M. de Selves, a procédé à l'inauguration de la mairie de Saint-Maur-les-Fossés et à la pose de la première pierre d'un barrage.",
      "Le nouveau barrage, dont la construction coûtera 400 000 francs, permettra d'élever le niveau des eaux de la Marne et de la rendre ainsi navigable.",
      "Après ces cérémonies, le cortège s'est rendu au pont de Chennevières pour la réception officielle du pont racheté par le département."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Guerre",
    "title": "La guerre du Transvaal",
    "summary": "Les mouvements des troupes fédérales dans le sud et l'ouest de l'État libre se poursuivent, démontrant que l'apaisement signalé par le War Office est prématuré.",
    "paragraphs": [
      "Les télégrammes de Bloemfontein continuent à signaler divers mouvements des troupes fédérales dans le sud et l'ouest de l'État libre.",
      "L'apaisement signalé par lord Roberts est loin d'être aussi complet qu'on le croyait au War Office. Des groupes de fédéraux se tiennent en observation à peu de distance des points occupés par l'armée anglaise."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Nouvelles du front : Opérations militaires",
    "summary": "Récits de courtoisie militaire entre les camps et mouvements des colonnes britanniques au Transvaal sous des pluies diluviennes marquent cette chronique des opérations.",
    "paragraphs": [
      "Les Boers, qui appartenaient au groupe de Johannesburg, se sont approchés d'un groupe d'officiers ; ils ont pansé leurs blessures et les ont renvoyés au camp anglais dans une voiture de munition.",
      "Le lieutenant Stewart était un officier très estimé ; sa perte est vivement regrettée.",
      "Une lettre du camp du général French, datée du 22 mars, indique que le général fait reposer ses troupes tout en distribuant la proclamation de lord Roberts.",
      "On annonce qu'un commando de plusieurs milliers de Boers se trouve aux environs de Ladysmith pour rallier les forces de l'intérieur.",
      "L'avant-garde, composée des Néo-Zélandais et des Canadiens, a fait mouvement vers le nord, accompagnée du colonel Plumer et de son état-major.",
      "Des pluies abondantes tombent dans toute la région."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Aux environs de Kimberley",
    "summary": "La progression de la yeomanry impériale, la reprise de Griquatown par les Transvaaliens et la crue des eaux marquent les derniers événements autour de Kimberley.",
    "paragraphs": [
      "La yeomanry impériale, sous les ordres de lord Chesham, s'est avancée hier dans la direction de l'ouest. Kimberley a vu les commandos qui se retiraient devant les troupes.",
      "Griquatown a été récupérée jeudi par les Transvaaliens. Une colonne quittant Kimberley a appris que les Boers ont emprisonné les habitants de Griquatown, y compris les femmes.",
      "À Warrenton, une pluie abondante tombe depuis hier. Le fleuve monte et les débris de l'ancien pont provisoire du chemin de fer sont submergés."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Situation au Natal",
    "summary": "Des escarmouches éclatent près de Meral alors que les Boers concentrent leurs troupes autour de Pretoria. La récente proclamation de lord Roberts suscite un vif mécontentement parmi les colons loyalistes.",
    "paragraphs": [
      "De petits engagements ont eu lieu autour de Meral, dans les Biggarsberg, entre les troupes britanniques et les patrouilles boers.",
      "Il n'est guère probable qu'une résistance d'envergure s'organise à Johannesburg, les Boers ayant pris le parti de concentrer l'essentiel de leurs forces aux abords de Pretoria.",
      "La proclamation de lord Roberts, publiée en ces lieux, est vivement critiquée. On croit savoir qu'elle a engendré un profond mécontentement au sein des colons loyalistes."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Chronique Régionale",
    "title": "Inauguration du monument à Garibaldi à Dijon",
    "summary": "Dijon rend hommage à Garibaldi avec l'inauguration d'un monument sculpté par M. Auban, célébrant le souvenir de celui qui vint défendre la République en 1870, en présence du ministre Leygues.",
    "paragraphs": [
      "Dijon acquitte enfin, ce jour, une dette de reconnaissance. De nombreux délégués, venus de toute la France et même de l'étranger, se sont joints aux Dijonnais pour saluer le bronze de celui qui, en 1870, vint mettre ce qu'il lui restait d'énergie au service du gouvernement de la Défense nationale.",
      "Les fêtes d'inauguration ont débuté samedi par une retraite aux flambeaux. Aujourd'hui, le ministre de l'Instruction publique, M. Leygues, a été officiellement reçu par les autorités civiles et militaires.",
      "Le monument, situé au carrefour dit le Coin des Cinq Rues, a été sculpté par M. Auban ; il représente Garibaldi debout, protégeant l'autel de la Liberté.",
      "Lors des discours, le docteur Brulat, le maire de Dijon ainsi que M. Leygues ont rendu hommage à la figure du grand républicain et à la fraternité franco-italienne."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Social",
    "title": "La condition des secrétaires et employés de mairies",
    "summary": "Une proposition de loi portée par M. Théodore Tissier ambitionne de stabiliser la situation administrative et la protection sociale des secrétaires de mairies, souvent négligés par le législateur.",
    "paragraphs": [
      "Une proposition de loi, rédigée par M. Théodore Tissier, président de la Fédération nationale des secrétaires et employés de mairies, sera prochainement déposée sur le bureau de la Chambre.",
      "La mesure vise à stabiliser la situation de ces agents en réglementant strictement leur nomination, leur révocation et en garantissant une pension de retraite par l'intermédiaire de la Caisse nationale des retraites pour la vieillesse.",
      "Il apparaît nécessaire de donner une fixité à ces fonctions délicates, trop souvent moins protégées que celles des agents de police ou des gardes champêtres."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Social",
    "title": "Agitation chez les coiffeurs parisiens",
    "summary": "Les garçons coiffeurs de Paris militent pour la suppression du pourboire, jugé humiliant, au profit d'un salaire fixe, révélant une volonté de réforme au sein d'une profession aux revenus précaires.",
    "paragraphs": [
      "Les garçons coiffeurs de Paris réclament la suppression du pourboire, système qu'ils jugent humiliant et aléatoire, au profit d'une rémunération fixe plus rationnelle.",
      "Certains patrons ne sont pas hostiles à cette réforme, bien que le pourboire fasse partie intégrante des mœurs et des revenus du métier depuis de longues années.",
      "Ce débat met en lumière la précarité historique de la profession ainsi que les difficultés rencontrées pour unifier les ouvriers autour de cette revendication commune."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Étranger",
    "title": "Situation à Porto-Rico et traité franco-américain",
    "summary": "Le Congrès américain légifère sur Porto-Rico, en proie à une famine suite à un ouragan. Parallèlement, le sort du traité de réciprocité avec la France reste suspendu aux décisions parlementaires.",
    "paragraphs": [
      "Washington : Le Congrès a voté un projet de loi instaurant un nouvel ordre administratif à Porto-Rico. Depuis le passage d'un ouragan, une famine sévère frappe l'île et l'on redoute des troubles sociaux.",
      "Concernant le traité de réciprocité commerciale avec la France, le gouvernement américain demeure dans l'attente des conclusions de la ratification parlementaire."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Réparations navales et avaries",
    "summary": "L'aviso-transport « La Manche » est en cale sèche pour recevoir une étrave brise-glace. Parallèlement, le croiseur « Lahire » est en réparations au Havre suite à des avaries causées par une mer démontée.",
    "paragraphs": [
      "L'aviso-transport La Manche a été mis dans l'avant-port pour recevoir une étrave brise-glace en vue de sa campagne en Islande.",
      "Le croiseur contre-torpilleur Lahire a subi des avaries à son roof sous l'effet du mauvais temps et sera réparé au Havre par la Société des Forges et Chantiers."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie à Paris",
    "summary": "Un violent incendie a ravagé hier un magasin de grains et fourrages avenue d'Orléans. L'action rapide des pompiers de la caserne d'Alésia a permis d'éviter la propagation du sinistre aux immeubles voisins.",
    "paragraphs": [
      "Un violent incendie a détruit hier un magasin de grains et fourrages situé 70, avenue d'Orléans. Les pompiers de la caserne d'Alésia sont parvenus à circonscrire le sinistre qui menaçait les maisons voisines. Aucun blessé n'est à déplorer."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Bagarre dans un débit de boisson",
    "summary": "Deux individus en état d'ivresse ont saccagé un débit de vin rue Petit. Ils ont été appréhendés par les gardiens de la paix après une vive résistance au cours de laquelle un agent a été blessé.",
    "paragraphs": [
      "Au numéro 31 de la rue Petit, deux individus sous l'emprise de la boisson ont saccagé le matériel d'un débit de vin. Ils ont été arrêtés par les gardiens de la paix après une vive résistance et après avoir blessé l'un des agents."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de cambriolage rue Lecourbe",
    "summary": "Surpris en flagrant délit de cambriolage par le concierge, un malfaiteur récidiviste nommé Charles Bertelet, dit Viaduc, a été interpellé et conduit au dépôt malgré ses explications incohérentes.",
    "paragraphs": [
      "M. Mande, concierge d'une maison située rue Lecourbe, vit hier matin passer devant sa porte un individu et comprit, à son allure suspecte, que l'homme était un malfaiteur.",
      "M. Mande, prétextant chercher des outils, monta voir le visiteur. Il aperçut ce dernier en train de fracturer la porte de l'appartement de M. Paret, absent à ce moment-là.",
      "Aux cris du concierge, plusieurs locataires purent appréhender le malfaiteur et le remettre aux agents de police. Au commissariat, il a déclaré se nommer Charles Bertelet, dit Viaduc.",
      "Interrogé sur ses motivations, Bertelet a répondu de façon incongrue, évoquant un quatrain composé pour un cabaret bourguignon, avant d'être écroué au dépôt."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un employé indélicat",
    "summary": "Un bottier de la Madeleine a vu sa signature usurpée par son employé, Paul L., qui extorquait des fonds à ses clients. Le coupable a été interpellé dans un café de la rue Saint-Lazare.",
    "paragraphs": [
      "Depuis deux mois, les fournisseurs, clients et amis d'un bottier du quartier de la Madeleine recevaient de celui-ci des lettres le priant de remettre des sommes allant de 50 à 100 francs.",
      "M. A., auquel on réclama récemment plusieurs milliers de francs, déclara que son écriture et sa signature avaient été imitées et qu'il n'avait jamais rien emprunté à qui que ce soit.",
      "L'enquête ouverte par le commissaire de police a établi que le coupable était l'un des employés de M. A., nommé Paul L., qui fut arrêté dans un café de la rue Saint-Lazare et envoyé au dépôt."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Acquittement aux assises de la Loire",
    "summary": "La cour d'assises de la Loire a prononcé l'acquittement de Clovis Pou, accusé du meurtre d'un voisin. L'accusé a fait valoir la thèse de la légitime défense lors d'une chute accidentelle de la victime.",
    "paragraphs": [
      "La dernière affaire soumise aux jurés de la Loire s'est terminée par un acquittement. Le nommé Clovis Pou était accusé d'avoir tué un de ses voisins.",
      "L'accusé a soutenu qu'il avait agi en état de légitime défense et que le malheureux s'était mortellement blessé lui-même en tombant."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident de tramway à Arpajon",
    "summary": "Un dramatique accident de tramway s'est produit près de la Croix-d'Athis. Un enfant de onze ans, nommé Berty, a succombé après une chute mortelle sous les roues du convoi d'Arpajon.",
    "paragraphs": [
      "Près de la Croix-d'Athis, un enfant de onze ans, M. Berty, voulut monter sur le tramway d'Arpajon en direction de Paris, mais il fit un faux pas et tomba sous les roues.",
      "Le corps de l'enfant a été transporté au domicile de ses parents ; la douleur de la famille est navrante."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Chien enragé à Arcueil",
    "summary": "Une série d'agressions par un chien enragé a semé l'émoi à Arcueil. Plusieurs victimes ont été dirigées vers l'Institut Pasteur, et le maire a ordonné l'interdiction de circulation des chiens.",
    "paragraphs": [
      "Un chien atteint de la rage parcourait hier les rues d'Arcueil et se jetait sur les personnes qu'il rencontrait. Plusieurs passants ont été mordus et envoyés d'urgence à l'Institut Pasteur.",
      "M. Duvillard, maire de la commune, a pris aussitôt un arrêté interdisant pendant six semaines la circulation des chiens sur la voie publique."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Agression à Levallois-Perret",
    "summary": "Le serrurier Louis Sourie a été violemment agressé et dépouillé par quatre malfaiteurs masqués à Levallois-Perret. Trois des agresseurs ont pu être appréhendés par les autorités.",
    "paragraphs": [
      "À Levallois-Perret, M. Louis Sourie, serrurier, rentrait chez lui lorsqu'il fut assailli par quatre individus dont les traits étaient dissimulés sous des foulards.",
      "Grièvement blessé de coups de casse-tête, M. Sourie fut dévalisé et laissé sans connaissance sur le sol. Les trois agresseurs, nommés Guillaume Trematin, Gérome Erard et Henri Soudais, ont été rapidement arrêtés et écroués au dépôt."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Incendie à Neuilly-Plaisance",
    "summary": "Un incendie s'est déclaré dans l'atelier de serrurerie Maniel et Buissonnet à Neuilly-Plaisance. Grâce à l'intervention rapide des pompiers, le sinistre a été maîtrisé après une heure de lutte.",
    "paragraphs": [
      "Un incendie s'est déclaré dans l'atelier de serrurerie de MM. Maniel et Buissonnet. Les pompiers de la localité ont pu, après une heure de travail, maîtriser le sinistre."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Drame à Aubervilliers",
    "summary": "Une série de cambriolages nocturnes a secoué Aubervilliers. Les malfaiteurs, les frères Mattrie et leur complice Vincent Nivin, ont été appréhendés par les autorités locales suite à ces pillages de débits de vins.",
    "paragraphs": [
      "Des rôdeurs ont pillé, la nuit dernière, plusieurs débits de vins à Aubervilliers. Deux d'entre eux, les frères Mattrie, ainsi que Vincent Nivin, ont été arrêtés par les agents de la force publique."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident mortel à Nanterre",
    "summary": "Un tragique accident s'est produit rue de la République à Nanterre. M. Paul Lavys, ayant perdu le contrôle de sa voiture, a été violemment projeté contre une borne en fonte, succombant à ses blessures.",
    "paragraphs": [
      "Un accident tragique s'est produit rue de la République, à Nanterre. Une voiture, conduite par M. Paul Lavys, a violemment heurté le trottoir ; le conducteur, précipité de son siège, a violemment heurté une borne en fonte et a eu le crâne fracassé."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Sauvetage à Bougival",
    "summary": "Hier, à Bougival, le jeune pilote Georges Midaraine a fait preuve d'un grand courage en parvenant à secourir un homme qui tentait de se donner la mort en se jetant dans les eaux de la Seine.",
    "paragraphs": [
      "Le jeune Georges Midaraine, pilote, a fait preuve d'un grand dévouement en retirant hier de la Seine un malheureux qui, dans un moment de désespoir, avait tenté de mettre fin à ses jours en se jetant dans le fleuve."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide à Carrières-Saint-Denis",
    "summary": "Le corps sans vie d'un homme d'une quarantaine d'années a été repêché dans la Seine à Carrières-Saint-Denis. Les papiers retrouvés sur le défunt permettraient d'identifier M. Serrère, fabricant de produits chimiques.",
    "paragraphs": [
      "On a repêché dans la Seine, à la hauteur de Carrières-Saint-Denis, le corps d'un homme âgé d'environ quarante ans. Le défunt était porteur de cartes de visite au nom de M. Serrère, fabricant de produits chimiques, ce qui permet de supposer son identité."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie à Poissy",
    "summary": "Un incendie s'est déclaré à la mairie de Chanteloup. La prompte intervention des secours a permis d'éteindre le sinistre naissant et de sauver in extremis un enfant de deux ans prisonnier des flammes.",
    "paragraphs": [
      "Un commencement d'incendie s'est déclaré à la mairie de Chanteloup. Grâce à la rapidité et au sang-froid des secours accourus sur les lieux, un enfant de deux ans a pu être sauvé des flammes."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Départements",
    "title": "Dénouement à Montargis",
    "summary": "Sigismond Landré, détenu à Fresnes, a été confondu par l'enquête : ses aveux concernant le meurtre d'une maîtresse n'étaient qu'une pure affabulation. Il purgera sa peine pour vol sans autre accusation.",
    "paragraphs": [
      "Un détenu de la maison d'arrêt de Fresnes, nommé Sigismond Landré, avait récemment défrayé la chronique en prétendant avoir commis l'assassinat de sa maîtresse. Devant la persistance de ces déclarations, l'individu fut conduit sous bonne garde à Montargis afin de permettre aux autorités de vérifier ses dires.",
      "Toutefois, l'enquête rigoureuse diligentée sur place a formellement prouvé que ce récit n'était qu'une affabulation de la part du détenu. Le nommé Landré a donc été reconduit vers sa cellule, où il continuera de purger sa peine initiale pour des faits de vol, sans qu'aucune charge pour meurtre ne puisse être retenue contre lui."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Causerie financière",
    "title": "Analyse du marché financier",
    "summary": "Le marché financier clôture la semaine dans une excellente fermeté. Les fonds coloniaux progressent, portés par le projet de chemin de fer de Madagascar, tandis que le 3 % se maintient solidement.",
    "paragraphs": [
      "Les bonnes impressions sur lesquelles s'était clôturée la semaine précédente se sont maintenues et affermies pendant le cours de celle-ci. L'ensemble de la cote a conservé une excellente fermeté sur divers points, de nouveaux progrès ont été accomplis, et les quelques variations que nous avons observées ont généralement eu pour effet le tassement et la consolidation des cours antérieurs.",
      "Le 3 % à 101,45 conserve, à 5 centimes près, son avance précédente. Si les transactions auxquelles notre principal fonds d'État donne lieu ne sont pas plus animées, c'est en grande partie parce que l'activité du marché se porte plus que jamais sur les affaires industrielles.",
      "Les fonds coloniaux sont bien tenus. L'emprunt de Madagascar s'avance de 88 à 89. La Chambre vient d'adopter le projet autorisant la colonie à emprunter 60 millions pour la construction d'un chemin de fer de Tananarive à la côte orientale.",
      "La hausse rapide de l'Extérieure a provoqué un certain nombre de réalisations de bénéfices ; ces ventes absorbées, les cours ont retrouvé leur élasticité et la semaine se termine en bonne tendance à 72,87."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Faits Divers",
    "title": "Les faits dissipent les doutes",
    "summary": "L'exemple historique de la première traversée transatlantique démontre, avec ironie, qu'une once de faits concrets possède plus de poids que tous les arguments théoriques prouvant l'impossibilité d'une chose.",
    "paragraphs": [
      "À bord du premier bateau à vapeur qui eût jamais fait la traversée de l'Océan Atlantique se trouvait une brochure qui tendait à prouver qu'une telle traversée était impossible. Il va sans dire que, lorsque cet amusant incident fut connu, l'on en rit beaucoup.",
      "Sûrement, une once de faits vaut mieux qu'une tonne d'arguments. Il ne s'agit pas de savoir si la chose peut être vraie, mais si, réellement, elle est vraie. L'expérience de plusieurs personnes poursuivant le même but et obtenant le même résultat, voilà ce qui dissipe les doutes et sert à convaincre."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Littérature / Feuilleton",
    "title": "Extrait de récit romanesque",
    "summary": "Bouleversé par les indiscrétions de Crépinet sur le mariage imminent de M. Tavernier, Georges Dufresne est en proie à un trouble profond, ravivant le souvenir cuisant d'un crime passé.",
    "paragraphs": [
      "Les quelques paroles de Crépinet avaient produit sur le visage de son maître un bouleversement incroyable. Ses traits s'étaient convulsés. Il garda le silence un instant, incapable de prononcer une parole sans s'emporter.",
      "Il demanda alors : « Ce n'est pas possible, ce que tu viens de me dire ! » « Tout le monde en parle », répondit Crépinet, ajoutant que M. Tavernier se marierait prochainement. « Lui ? Pourquoi pas ? Vous vous mariez bien, vous ? C'est samedi, la noce. Oui. »",
      "C'était l'heure de la marée basse. Georges Dufresne fixait alternativement de son regard bilieux le chenal sablonneux où il avait commis le crime qu'il se reprochait avec d'autant plus de colère contre lui-même."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Bourse",
    "title": "Informations financières diverses",
    "summary": "Le marché financier marque le pas pour l'Italien, tandis que la Banque de France se raffermit à 4 100 francs. Le Crédit Lyonnais accuse un léger tassement dans un climat de surveillance des taux.",
    "paragraphs": [
      "L'Italien a fléchi à 94,80 ; la situation parlementaire ne s'est pas améliorée et il semble maintenant certain que la dissolution de la Chambre ou un changement ministériel pourront seuls dénouer cet imbroglio.",
      "Pour répondre aux demandes de quelques-uns de nos lecteurs, nous répéterons que les bons du Trésor roumain nous paraissent offrir une valeur d'appoint avantageuse pour un portefeuille solidement composé.",
      "Les actions de la Banque de France se sont raffermies à 4 100 francs. Le taux de l'escompte s'est élevé sur les marchés libres de Berlin et de New-York.",
      "Le Crédit Lyonnais s'est tassé à 1 140 francs. L'assemblée s'est tenue sans qu'il ait été fait allusion à l'augmentation possible du capital."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Chemins de fer",
    "title": "Revue des compagnies ferroviaires",
    "summary": "Les recettes des grands réseaux ferrés s'accroissent de 6 millions depuis janvier. Cette dynamique financière dope le cours des titres, notamment ceux du Nord et de la compagnie de Lyon en forte progression.",
    "paragraphs": [
      "Les recettes des six grands réseaux de chemins de fer, du 1er janvier au 11 mars, sont en augmentation de 6 millions de francs, grâce à une nouvelle plus-value de 545 000 francs dans les derniers résultats hebdomadaires publiés.",
      "Le marché des actions a retrouvé beaucoup d'activité ; le Nord a progressé de 1 600 à 1 624 francs sur l'annonce d'un dividende de 74 francs. La compagnie de Lyon, plus favorisée encore, passe de 1 450 à 1 485 francs."
    ]
  }
];
