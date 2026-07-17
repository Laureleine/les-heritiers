// Date: 1901-03-29
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-03-29 (Version Restaurée, 33 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Littérature",
    "title": "Le Secret du Bonheur",
    "summary": "Dans son nouveau roman, Pierre Sales dévoile une œuvre émouvante où le bonheur ne s'acquiert que par l'effort et une aspiration constante vers le bien. Un récit vibrant sur la force de l'énergie et la droiture.",
    "paragraphs": [
      "Il nous suffirait presque d'annoncer à nos lecteurs l'œuvre nouvelle du célèbre romancier dont ils ont toujours si vivement apprécié le talent sain, clair et vigoureux.",
      "Le Secret du Bonheur fera couler bien des larmes, tantôt douces, tantôt douloureuses, car le bonheur, hélas ! ne s'achète généralement qu'au prix de bien des chagrins et des efforts. Mais les héros de Pierre Sales parviennent à le conquérir malgré tout. De cette œuvre particulièrement émouvante se dégagera cet enseignement que le secret du bonheur est en nous, en notre énergie, notre droiture, notre aspiration vers le bien."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Social",
    "title": "L'ouvrier aux Antipodes",
    "summary": "Une étude sur la condition ouvrière en Australie et Nouvelle-Zélande, où salaires élevés, journées réduites et progrès sociaux dessinent, pour le vieux monde, un modèle démocratique et prospère digne d'intérêt.",
    "paragraphs": [
      "J'ai souvent, à cette place, parlé de la condition des ouvriers dans les différents pays d'Europe. Hors de notre vieux continent, d'autres contrées sollicitent notre curiosité, et parmi ces régions exotiques, il n'en est pas de plus intéressante par sa vaillance laborieuse et ses innovations que l'immense Australie.",
      "Si nous consentons à faire en imagination le voyage des Antipodes, nous serons frappés du degré de perfectionnement de la vie ouvrière. Le travailleur manuel y est favorisé plus que dans aucun autre pays du monde, comme en témoigne le taux des salaires. En Nouvelle-Zélande, par exemple, le travailleur manuel gagne de 5 à 15 francs par jour en ville.",
      "Les salaires élevés s'accompagnent d'un travail moindre. La journée de huit heures n'est pas un idéal inaccessible ; la semaine de travail est presque universellement de quarante-huit à cinquante-deux heures avec repos hebdomadaire. Le prix de la vie y est également modéré, et la consommation de viande et de denrées par habitant y est record.",
      "L'ouvrier australien s'instruit, lit davantage et remplit mieux son rôle de citoyen. S'il n'a pas de préoccupation politique doctrinale, il réclame des lois qui assurent directement son bien-être et reste fidèle à la Couronne britannique, bien qu'une autonomie future reste une hypothèse historique.",
      "En résumé, la classe ouvrière océanienne a su se créer une existence enviable, grâce à des gouvernements entreprenants qui gèrent des chemins de fer, des assurances et des retraites, offrant un exemple démocratique dont le vieux monde peut tirer des enseignements."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Miss Tempête",
    "summary": "Face à l'urgence d'une situation périlleuse, Michel Bertin sollicite la discrétion d'un ami. L'arrivée des témoins de M. de Sartys, venus réclamer réparation pour une injure, précipite une tension palpable.",
    "paragraphs": [
      "Pour gagner du temps, il arrivait tout ému, ayant pris à peine le temps de quitter son veston d'atelier : « Me voilà, mon vieux Bertin. Qu'y a-t-il ? »",
      "« De grands services que nous avons à te demander... Dis vite. » En quelques mots, il le mettait au courant de la déplorable aventure et lui disait quel service spécial et discret il réclamait de son amitié.",
      "« C'est bien, j'ai compris, mon vieux. Ça marchera comme tu veux. » Il ne se trompait pas. Il y avait à peine une heure que les deux peintres se tenaient prêts, lorsqu'on entendit un coup de sonnette. C'étaient deux messieurs, Guy d'Harmont et Paul d'Espérade, chargés par M. Lucien de Sartys de demander réparation à M. Tavernier d'une injure grave.",
      "Michel Bertin et Audebert s'efforcent de calmer le jeu face à la raideur des témoins adverses, soulignant que la discussion doit être remise à plus tard pour permettre un débat plus serein sur la nature de l'offense et de la provocation."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Voyage du Président de la République",
    "summary": "Le Président de la République entamera le 7 avril un périple officiel dans le Midi. Le programme prévoit des escales protocolaires à Nice et Toulon, centrées sur des hommages et des inspections navales.",
    "paragraphs": [
      "Le Président de la République quittera Paris le dimanche 7 avril pour un voyage officiel dans le Midi, accompagné de plusieurs ministres, dont M. Waldeck-Rousseau.",
      "Le programme prévoit une arrivée à Nice le 8 avril pour un hommage à la mémoire de Gambetta, puis une visite à Toulon le 10 avril à bord du cuirassé Saint-Louis. Le Président inspectera les chantiers de la Seyne et l'arsenal le 12 avril avant son retour dans la capitale.",
      "Le commandant Huguet a coordonné les préparatifs logistiques et militaires, incluant des honneurs protocolaires pour le duc de Gênes et la coordination des navires de l'escadre italienne, qui seront mouillés à proximité des vaisseaux français."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "International",
    "title": "Aguinaldo trahi par les siens",
    "summary": "Le chef insurrectionnel philippin Aguinaldo a été capturé près de Casiguran par les troupes américaines. La trahison d'indigènes Makabebes a permis ce coup d'éclat, désormais détenu à la prison de Manille.",
    "paragraphs": [
      "Un télégramme de Manille annonce qu'Aguinaldo et tout son état-major ont été capturés près de Casiguran par le colonel américain Funston. Cette capture a été effectuée avec le concours d'indigènes Makabebes qui, par leurs manœuvres, ont permis de piéger le chef philippin.",
      "La trahison a été rendue possible par une ruse où un officier philippin s'est abouché secrètement avec les Américains. Ces derniers ont débarqué une troupe d'élite sur la côte afin de surprendre le chef insurgé dans sa retraite.",
      "Aguinaldo a été transféré à Manille à bord du Vicksburg ; il est en bonne santé et a été immédiatement conduit à la prison de la rue Anda. Cette opération met un terme à une étape majeure du conflit, bien que certains chefs rebelles affirment vouloir poursuivre la lutte."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Social",
    "title": "La grève de Marseille",
    "summary": "Malgré un accord de principe à Paris pour recourir à l'arbitrage, le conflit persiste sur les quais de Marseille où les ouvriers, réunis à la Bourse du travail, ont voté la continuation de la grève.",
    "paragraphs": [
      "L'entrevue des délégués marseillais avec le président du Conseil a permis de fixer un terrain d'entente, privilégiant l'arbitrage pour résoudre le conflit économique. Les patrons et les grévistes sont invités à interpréter la convention signée au mois d'août dernier.",
      "Les délégués des grévistes ont confirmé devant le groupe socialiste de la Chambre qu'ils acceptaient une conférence pour l'interprétation de la convention. À Marseille, la situation s'apaise : de nombreux ouvriers ont repris le travail aux chantiers et aux docks.",
      "Cependant, les grévistes des quais, réunis à la Bourse du travail, ont voté la continuation de la grève. Parallèlement, les commerçants détaillants demandent au gouvernement des mesures de moratoire sur les effets de commerce en raison du marasme économique provoqué par le conflit."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un crime boulevard Ornano",
    "summary": "Un drame sanglant a frappé le boulevard Ornano : le mécanicien Charles Castanier a assassiné son ancienne maîtresse, Mme Baïer, qu'il harcelait depuis leur rupture malgré une précédente intervention policière.",
    "paragraphs": [
      "Le boulevard Ornano a été hier soir le théâtre d'un crime passionnel. Un ouvrier mécanicien a assassiné son ancienne maîtresse, Mme Baïer, qui avait rompu avec lui quelques jours auparavant.",
      "La victime tenait une boutique au numéro 78 du boulevard. L'assassin, Charles Castanier, adonné à la boisson, harcelait sa victime depuis leur rupture. Malgré une arrestation précédente le sommant de ne plus revoir la jeune femme, il a récidivé hier soir.",
      "Mme Houssard, la patronne de la boutique, a découvert la victime mortellement frappée d'un coup de couteau au cœur. Le commissaire de police Carpin est chargé de l'enquête pour retrouver le meurtrier qui a pris la fuite."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'assassinat de Marie Houssard",
    "summary": "L'assassin Charles Castanier a été appréhendé peu après son crime. Il a avoué au juge Joliot avoir tué la victime, Mme Houssard, suite à un différend financier, avant d'être écroué au dépôt.",
    "paragraphs": [
      "Le Petit Parisien s'était rendu en toute hâte à la maison du crime, quand l'officier de paix lui annonça que l'assassin venait d'être arrêté.",
      "Le mécanicien Castanier, ancien amant de la victime, a été appréhendé devant une boutique de fruitier boulevard Ornano, alors qu'il tentait de résister à l'arrestation par le gardien de la paix Joseph.",
      "Le juge Joliot et le chef de la sûreté, M. Cortier-Tissot, ont procédé aux constatations. Le corps a été retrouvé dans un angle de la salle à manger, près d'un panier en osier.",
      "Castanier a avoué son crime au juge, expliquant qu'il réclamait de l'argent prêté à la victime. Refusant de le lui rendre, elle l'a poussé à bout ; il a « vu rouge » et l'a frappée avec un couteau. Il a demandé, par humanité, que l'on cache la nouvelle de son crime à son fils.",
      "Castanier a été écroué au dépôt et le corps de la victime a été transporté à la Morgue aux fins d'autopsie."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Étranger",
    "title": "Nouvelles du Transvaal",
    "summary": "Les hostilités se poursuivent au Transvaal : le général Dewet a pénétré sur le territoire avec 400 hommes, tandis que le commandant Hritz mène une expédition punitive contre les Swazis.",
    "paragraphs": [
      "Durban, 27 mars : On annonce que le général Dewet a pénétré dans le Transvaal avec 400 hommes.",
      "Le commandant Hritz et son commando quittent Blaauw-Kop pour châtier les Swazis qui ont tué plusieurs Boërs dans un récent engagement."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Étranger",
    "title": "Dans la colonie du Cap",
    "summary": "Le commando Kruitzinger attend des conditions favorables pour traverser le fleuve Orange. Un combat récent près de Colesberg a causé la mort d'un officier anglais.",
    "paragraphs": [
      "Le commando Kruitzinger a été porté à mille hommes et attend que le fleuve Orange, vers lequel il se dirige, soit guéable.",
      "Craddock, 26 mars : Un combat a eu lieu dimanche à Henning-Fontein, entre Schombre et Colesberg. Un lieutenant anglais a été tué et trois hommes ont été blessés."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Santé",
    "title": "La peste au Cap",
    "summary": "À la date du 27 mars, l'épidémie de peste progresse au Cap, touchant tant la population européenne que les indigènes, avec de nouveaux cas recensés jusque dans l'arsenal de Simonstown.",
    "paragraphs": [
      "Le Cap, 27 mars : Le nombre des cas de peste parmi les Européens augmente toujours. On compte huit nouveaux cas aujourd'hui, dont un à l'arsenal de Simonstown.",
      "Parmi les indigènes, il y a eu quatre nouveaux cas et on a trouvé les cadavres de deux personnes mortes du fléau."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Les événements de Chine",
    "summary": "Londres, 28 mars : La France projette l'extension d'une voie ferrée vers Kajgan, malgré les tensions diplomatiques avec l'Allemagne sur les indemnités et les risques de conflit armé à Wouaï-Lou.",
    "paragraphs": [
      "Londres, 28 mars : Les Français ont l'intention de construire une ligne de chemin de fer jusqu'à Kajgan, amorce d'une ligne transmongolienne.",
      "Les négociations au sujet de l'indemnité rencontrent des difficultés de la part de l'Allemagne. Un conflit semble possible entre les troupes françaises et chinoises à Wouaï-Lou."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "Chambre des députés : Séance du 25 mars",
    "summary": "La Chambre des députés poursuit les débats sur la loi des associations, adoptant l'amendement Lhopiteau sur les biens des communautés et le projet d'affichage de la Déclaration des droits de l'homme en école.",
    "paragraphs": [
      "Le débat sur l'article 18 de la loi sur les associations s'est poursuivi. La Chambre a adopté un amendement de M. Lhopiteau sur la liquidation des biens des communautés dissoutes par 291 voix contre 285.",
      "M. Théodore Denis a déposé une proposition de loi tendant à réinscrire la Déclaration des droits de l'homme et du citoyen dans la Constitution. La proposition de M. Dauzon concernant l'affichage de ce texte dans toutes les écoles a été adoptée.",
      "M. Waldeck-Rousseau a défendu le projet du gouvernement concernant la liquidation des biens, expliquant que l'État agit pour assurer la continuation des œuvres d'assistance plutôt que pour confisquer."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Sénat : Séance du 28 mars",
    "summary": "Le Sénat valide l'érection de la commune de Plœmeur et débat des conditions d'imposition liées à la contribution des patentes pour les professions médicales et les grands magasins.",
    "paragraphs": [
      "Le Sénat a adopté un projet de loi visant à ériger Plœmeur (Morbihan) en commune.",
      "La discussion a porté sur la contribution des patentes, notamment sur les conditions d'imposition pour les médecins et les grands magasins."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Social",
    "title": "La grève de Montceau-les-Mines",
    "summary": "Sous surveillance militaire, la reprise du travail à Montceau-les-Mines se heurte à une vive opposition des grévistes, provoquant des incidents violents à l'encontre des ouvriers non syndiqués.",
    "paragraphs": [
      "Montceau-les-Mines, 29 mars : La reprise du travail aux puits Maugrand et du puits Chabot s'est effectuée ce matin sous surveillance militaire.",
      "Une grande effervescence a régné parmi les grévistes contre les ouvriers non syndiqués. Des incidents ont éclaté, notamment des coups portés à un mineur et une manifestation a parcouru les rues."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Vie Politique et Industrielle",
    "title": "Banquet de la chambre syndicale des produits chimiques",
    "summary": "M. Millerand, ministre du Commerce, a présidé le banquet de la chambre syndicale des produits chimiques, soulignant l'alliance indispensable entre la science et l'industrie pour le progrès national.",
    "paragraphs": [
      "Le 29 courant, M. Périer-Lefranc, président de la chambre syndicale, a réuni ses confrères autour d'un banquet, en présence de M. Millerand, ministre du Commerce, et de M. Poirrier, sénateur.",
      "Au dessert, M. Périer-Lefranc a porté la santé du Président de la République et a remercié M. Millerand d'avoir bien voulu accepter la présidence de cette réunion.",
      "M. Poirrier a ensuite exposé les difficultés fiscales et législatives entravant le développement des industries chimiques, appelant le ministre à intervenir. M. Millerand, en réponse, a souligné l'alliance nécessaire entre la science et l'industrie, tout en félicitant la chambre syndicale pour l'entente cordiale établie entre patrons et ouvriers. M. Millerand a enfin procédé à la distribution des récompenses."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Faits de Société",
    "title": "L'Exposition de l'Enfance",
    "summary": "Rencontrant un succès notable, l'Exposition de l'Enfance propose une rétrospective inédite dévoilant les portraits d'artistes, écrivains et savants célèbres durant leurs premières années.",
    "paragraphs": [
      "Une exposition consacrée à l'enfance connaît un vif succès. L'affluence est telle que les organisateurs ne disposent plus d'espace pour de nouvelles œuvres d'assistance.",
      "M. Georges Cain et M. Rollet organisent une « Rétrospective des contemporains », présentant les premiers portraits d'artistes, d'écrivains et de savants célèbres, pris durant leur jeune enfance."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Agriculture",
    "title": "Création d'un syndicat général agraire",
    "summary": "Des parlementaires et des représentants agricoles se sont réunis rue de Lancry afin de fonder un syndicat général agraire pour défendre les intérêts économiques du secteur et lutter contre l'accaparement.",
    "paragraphs": [
      "Une importante réunion, composée de sénateurs, de députés et de membres de syndicats agricoles, a eu lieu rue de Lancry pour la constitution d'un syndicat général agraire.",
      "Ce groupement vise à fédérer les organismes professionnels pour la défense des intérêts économiques de la culture et la lutte contre l'accaparement. Un comité d'initiative, incluant MM. Tiburce Fony, Jules Brice et Georges Quesnet, a été chargé de rédiger les statuts."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Brèves",
    "title": "Informations diverses",
    "summary": "La marquise de Galliffet est décédée. Par ailleurs, la décrue de la Seine permet désormais le relèvement du barrage de la Monnaie et le rétablissement normal de la navigation.",
    "paragraphs": [
      "On annonce le décès de la marquise de Galliffet, née Lafitte, épouse du général.",
      "La crue de la Seine étant terminée, les autorités ont procédé au relèvement du barrage de la Monnaie, permettant ainsi la reprise normale du service de la batellerie."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Fédération des Bourses du Travail",
    "summary": "Suite au décès de M. Pelloutier, le comité fédéral des Bourses du travail a nommé M. Georges Yvetot, typographe, au poste de secrétaire général.",
    "paragraphs": [
      "Le comité fédéral des Bourses du travail a désigné M. Georges Yvetot, typographe, aux fonctions de secrétaire général, en remplacement de M. Pelloutier, récemment décédé."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Social",
    "title": "Congrès des Manufactures de Tabacs",
    "summary": "Réunis à Paris, les délégués des ouvriers des manufactures de tabacs contestent le règlement intérieur du 30 octobre et sollicitent une intervention urgente du ministre des Finances.",
    "paragraphs": [
      "Le congrès annuel de la Fédération nationale des ouvrières et ouvriers des manufactures de tabacs de France a débuté hier avec la participation de soixante délégués.",
      "Les discussions ont porté sur le retrait ou la révision du règlement intérieur du 30 octobre, véritable source de conflit avec les allumettiers. Une commission a été nommée pour proposer des modifications et une délégation a demandé audience au ministre des Finances."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Les Tribunaux",
    "title": "Un cas de bigamie acquitté",
    "summary": "Accusé de bigamie devant la cour d'assises, l'ancien agent de la sûreté Alphonse Châtain a obtenu son acquittement après avoir justifié son acte par un impératif de morale et de régularité.",
    "paragraphs": [
      "Alphonse Châtain, ancien agent de la sûreté, était poursuivi devant la cour d'assises pour bigamie. Il a affirmé devant les jurés que sa démarche était motivée par le souci de la régularité et de la morale, plutôt que par le concubinage. Les jurés ont prononcé son acquittement."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Meurtre dans la rue Rambuteau",
    "summary": "La jeune ouvrière Marguerite Saunois, violemment poignardée rue Rambuteau par le malfaiteur Puni Lapierre, se trouve dans un état désespéré alors que la police traque l'agresseur.",
    "paragraphs": [
      "Une jeune ouvrière teinturière, Marguerite Saunois, a été retrouvée blessée de sept coups de tiers-point rue Rambuteau, à la suite d'une altercation avec un individu nommé Puni Lapierre, bien connu des services de police.",
      "L'état de la jeune femme est jugé désespéré par les médecins, et les autorités recherchent activement l'agresseur en fuite."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Cambriolage rue des Noyers",
    "summary": "Surpris en flagrant délit de cambriolage rue des Noyers, le jeune Louis Gredin a été arrêté. Ses parents, accablés par son passé judiciaire, ont déclaré se désintéresser totalement de son sort.",
    "paragraphs": [
      "M. Rue a surpris un cambrioleur, Louis Gredin, âgé de quinze ans, alors qu'il fracturait le logement de ses voisins. Malgré une résistance acharnée, le jeune malfaiteur a été arrêté par les forces de l'ordre.",
      "Interrogés, ses parents ont déclaré se désintéresser totalement de lui en raison de ses nombreux antécédents de délinquance."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Voleurs des chemins de fer",
    "summary": "Grâce à la sagacité d'une concierge avenue de Choisy, la police a démantelé une cache de marchandises volées. Le suspect, Denis Chelles, auteur du vol d'échantillons ferroviaires, est recherché.",
    "paragraphs": [
      "M. Georges Leroy, voyageur de commerce, s'est fait dérober une valise d'échantillons dans le train. Grâce à la vigilance d'une concierge avenue de Choisy, la police a retrouvé la valise ainsi qu'un stock important d'objets volés appartenant à la compagnie des chemins de fer.",
      "Le coupable, identifié comme étant Denis Chelles, est actuellement activement recherché par la police."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Orphéonique",
    "title": "Concours orphéonique à La Roche-sur-Yon",
    "summary": "Le comité de La Roche-sur-Yon détaille les épreuves de son prochain concours orphéonique, incluant exécutions, solos et chœurs, sous la présidence de M. Xavier Leroux, grand prix de Rome.",
    "paragraphs": [
      "Le comité de La Roche-sur-Yon publie le règlement du concours qu'il organise pour les mois prochains. Cette solennité comprendra un morceau de lecture à vue obligatoire, sauf pour les sociétés de la 3e division et 3e sections.",
      "Il y aura un concours d'exécution avec un morceau imposé et un autre au choix, avec des primes en espèces réparties dans toutes les divisions. Un concours d'honneur, des concours de chœur vocal, de solo instrumental et de solistes complètent le programme. Le jury sera présidé par M. Xavier Leroux, grand prix de Rome.",
      "Les adhésions devront être adressées avant le 1er juin à M. Allaire, secrétaire général du comité."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Orphéonique",
    "title": "Concours à Dissey-sous-Seine",
    "summary": "Le concours orphéonique de Dissey-sous-Seine, initialement lié à l'inauguration du pont-route, est reporté au 2 juin. Les inscriptions restent ouvertes jusqu'au 20 avril auprès de M. Eugène Vlantrou.",
    "paragraphs": [
      "La date du concours qui devait avoir lieu à Dissey (Seine-Inférieure), le 12 mai à l'occasion de l'inauguration du pont-route, a été reportée au 2 juin. Il y aura deux épreuves, lecture à vue obligatoire et exécution. Les inscriptions seront reçues jusqu'au 20 avril par M. Eugène Vlantrou, président du comité."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Orphéonique",
    "title": "Concours de Falaise",
    "summary": "Le règlement du concours orphéonique de Falaise est mis à jour : création de groupes industriels, nouvelle catégorie d'honneur et prolongation des adhésions jusqu'au 1er mai.",
    "paragraphs": [
      "D'importantes modifications ont été apportées au règlement du concours qui aura lieu à Falaise (Calvados), le 7 juillet prochain. Les sociétés d'établissements industriels classées en 2e ou 3e division concourront dans des groupes.",
      "Pour le concours d'honneur, il a été créé un groupe pour les sociétés de la 1re division ayant remporté un 1er prix, soit en lecture à vue, soit en exécution. Le comité a décidé de proroger jusqu'au premier mai la date de clôture des adhésions."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Vie associative",
    "title": "Changements au bureau de la société chorale Les Enfants de Paris",
    "summary": "La société chorale « Les Enfants de Paris » a procédé au renouvellement complet de son conseil d'administration lors de sa dernière assemblée générale.",
    "paragraphs": [
      "La société chorale Les Enfants de Paris, dans sa dernière assemblée générale, a procédé au renouvellement de son bureau. Ont été élus : président, M. Jaunet ; vice-président, M. Courmont ; directeur, M. Délaye ; sous-directeurs, MM. George et Baud ; secrétaire général, M. Devouges ; trésorier, M. Delacroix ; bibliothécaire, M. Lalignier."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Santé",
    "title": "La Médecine Végétale",
    "summary": "Le Dr A. Narodetzki détaille sa méthode de soins par les plantes, visant à traiter les maladies chroniques sans chirurgie. L'ouvrage est diffusé par la Pharmacie Richelieu.",
    "paragraphs": [
      "Une méthode végétale, qui obtient de grands succès dans les guérisons des maladies chroniques, est décrite dans l'ouvrage intitulé 'La Médecine Végétale'. Ce livre promet une guérison radicale sans drogues funestes ni opérations sanglantes.",
      "Les chapitres traitent de maladies variées : peau et cuir chevelu, tumeurs, maladies spéciales des femmes, hernies, maladies contagieuses, diabète, asthme, tuberculose, etc. L'auteur, le Docteur A. Narodetzki, ancien interne à l'hôpital Saint-Louis, propose une médication douce basée sur les sucs de plantes.",
      "Pour vulgariser cette méthode, le volume est envoyé gracieusement par la Pharmacie Richelieu, 93, rue de Richelieu, Paris, contre un timbre en mandat ou timbres-poste."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Actualité littéraire",
    "title": "Le Nouveau Larousse Illustré",
    "summary": "Le Nouveau Larousse illustré poursuit sa parution avec son quatrième volume, alliant richesse documentaire et illustration abondante. L'éditeur facilite son acquisition par des modalités de paiement accessibles.",
    "paragraphs": [
      "Le Nouveau Larousse illustré vient de publier son quatrième volume. On y retrouve une richesse de documentation, une illustration abondante en couleurs et une précision constante. La publication dépasse à présent la moitié de son étendue totale.",
      "La maison Larousse offre des facilités de paiement, permettant l'acquisition de cet ouvrage encyclopédique même aux budgets modestes. Un fascicule spécimen de seize pages est disponible gratuitement pour comparaison."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Feuilleton littéraire",
    "title": "Le secret du beau Maurice",
    "summary": "Maurice, campé dans une position inflexible, s'entretient avec le baron de Prayssac au sujet des Broudin et de son fils. Il songe à solliciter Rose afin de tirer au clair les zones d'ombre de son passé.",
    "paragraphs": [
      "Le beau Maurice, dans un entretien avec le baron de Prayssac, s'est confié sur ses relations avec son fils qu'il refuse de reconnaître. Malgré les conseils de Prayssac, Maurice demeure inflexible, nourri par une colère contenue envers les Broudin.",
      "Le récit se tourne vers le passé, évoquant Rose, une femme que Maurice a séduite, et le regret de Prayssac face à la dureté de Maurice envers son fils, alors que ce dernier cherche à légitimer son union avec une jeune fille.",
      "Au terme de la rencontre, Maurice, pensif, décide d'écrire une lettre à Rose pour obtenir des éclaircissements sur la visite de son fils et prévoir un entretien à Blanchelande."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Actualités diverses",
    "title": "Communications diverses",
    "summary": "Agenda des prochaines réunions associatives et culturelles parisiennes, incluant les assemblées de l'Association d'Alsace-Lorraine, de la Société de la Révolution française et de l'Union du commerce.",
    "paragraphs": [
      "L'Association générale d'Alsace-Lorraine tiendra son assemblée générale dimanche prochain, 31 mars, à trois heures, à la mairie du dixième arrondissement.",
      "Les Enfants de Paris donneront un grand concert vocal dans la salle des fêtes de la mairie du troisième arrondissement, samedi prochain, à neuf heures du soir.",
      "L'assemblée générale de la Société de prévoyance et de secours mutuels des Alsaciens-Lorrains aura lieu le dimanche 31 mars, au gymnase Voltaire.",
      "La Société de l'Histoire de la Révolution française donnera une séance dimanche 31 mars, à la Sorbonne, sous la présidence de M. Jules Claretie.",
      "Les sociétaires de l'Union du commerce sont informés qu'une troisième assemblée générale aura lieu aujourd'hui vendredi, à huit heures et demie du soir, à la mairie du quatrième arrondissement."
    ]
  }
];
