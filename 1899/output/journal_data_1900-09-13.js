// Date: 1900-09-13
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-09-13 (Version Restaurée, 35 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique",
    "title": "Sports d'autrefois",
    "summary": "Une rétrospective sur l'évolution de la condition physique en France, rappelant qu'à l'époque du Moyen Âge, la force était une nécessité vitale avant de laisser place à la renaissance des jeux sportifs modernes.",
    "paragraphs": [
      "L'annexe de l'Exposition de Vincennes, un peu délaissée à l'ordinaire, a vu la foule lui revenir chaque fois qu'elle s'est ouverte aux manifestations sportives.",
      "Le grand point, au temps passé, n'était pas d'être savant, mais d'être fort. On était sûr d'avoir à défendre sa vie; on vivait, suivant les rangs, l'épée au côté ou le bâton au poing.",
      "Si l'on veut comprendre à quel point les nécessités de l'existence rendaient indispensable jadis le développement physique, il faut se rappeler que nous vivons aujourd'hui assis, tandis que l'on vivait autrefois debout.",
      "Les jeux favoris étaient, au Moyen Âge, ceux qui se rapprochaient de la guerre, et parmi eux, pour l'aristocratie française, celui de tous qui ressemblait le plus à une bataille : le tournoi.",
      "Le roi des anciens jeux français, non militaires, fut le jeu de paume. Il semble qu'on l'ait toujours pratiqué dans notre pays.",
      "Au milieu du dix-huitième siècle, la passion des exercices physiques se ralentit, pour renaître vers la fin du siècle. Des hommes de cœur ont réagi en préparant cette renaissance des sports à laquelle nous assistons aujourd'hui.",
      "Il y a encore beaucoup à faire, surtout pour ce qui concerne les paysans et les ouvriers, chez qui la pratique des jeux d'exercice n'a cessé de décroître depuis 1815. Souhaitons avec ardeur qu'ils se multiplient.",
      "Montaigne disait : « Ce n'est pas une âme, ce n'est pas un corps qu'on dresse; c'est un homme. »"
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Souffrance de vivre",
    "summary": "Hanté par le souvenir d'un château tranquille en France, Pierre de Courtial, armé d'un revolver, fait face à son rival Jean Berthiot dans un moment de tourment intérieur déchirant.",
    "paragraphs": [
      "Cette pensée ne lui vient pas. Son esprit est loin. Ce qu'il voit devant ses yeux, c'est un autre spectacle. C'est là-bas en France, dans un coin perdu derrière des forges, un château tranquille.",
      "C'est l'homme de la Légion, ce misérable qu'il s'obstine à reconnaître pour l'amant de Jeannine : Jean Berthiot.",
      "« Ah ! que je souffre. Cela est infernal. Pauvre amie... je t'aime toujours. Je n'aimerai jamais que toi. »",
      "Pierre de Courtial n'était qu'à trente ou quarante mètres du soldat. Il tenait toujours en main le revolver dont il s'était emparé. Allait-il le tuer ainsi lâchement ?"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Terrible accident",
    "summary": "Un tragique accident de chemin de fer survenu hier entre la Souque et Quezaguet a provoqué la mort d'un cantonnier et fait trois blessés graves lors du déraillement d'un wagonnet sur une rampe.",
    "paragraphs": [
      "Un accident terrible, qui a causé la mort d'un homme et au cours duquel trois autres ont été très grièvement blessés, est arrivé hier entre la Souque et Quezaguet.",
      "Quatre cantonniers de la voie ramenaient un wagonnet chargé de matériel en descendant une rampe, la plus rapide de France. Le wagonnet dérailla et les quatre agents furent projetés sur la voie avec une violence considérable.",
      "L'un d'eux, nommé Chaudessaygues, s'est brisé la tête et n'a survécu qu'un moment à ses blessures. Les trois autres sont dans un état fort grave."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Actualités de Djibouti",
    "summary": "Le résident anglais à Zeyla a interdit à des voyageurs français la traversée du territoire britannique, invoquant l'insécurité du district et contraignant ces derniers à rebrousser chemin.",
    "paragraphs": [
      "Le gouverneur de Djibouti avait écrit au résident anglais à Zeyla pour lui demander de permettre à quelques voyageurs français de traverser le territoire britannique. Cette permission fut refusée car le district est en ce moment trop dangereux.",
      "Près de la frontière de l'Ogadine, les troupes indigènes organisées par le résident anglais arrêtèrent les quatre voyageurs et les renvoyèrent à Djibouti."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "La médaille coloniale",
    "summary": "Un décret du ministre de la Marine étend l'attribution de la médaille coloniale aux fonctionnaires civils ayant pris part aux opérations de guerre à la Côte d'Ivoire durant l'année écoulée.",
    "paragraphs": [
      "Par décret du ministre de la Marine, le droit à la médaille coloniale est acquis aux marins et militaires en service à la Côte d'Ivoire du 1er janvier au 31 décembre. Ce droit est étendu aux fonctionnaires civils ayant participé aux opérations de guerre."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Afrique Occidentale",
    "summary": "Le gouvernement français envisage une réorganisation profonde de ses territoires d'Afrique occidentale, incluant le transfert du siège du gouvernement général vers la ville de Konakry.",
    "paragraphs": [
      "Le gouvernement français aurait décidé de réorganiser entièrement ses possessions de l'Afrique occidentale. Le premier effet de cette réforme serait de transporter le siège du gouvernement général à Konakry."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Indo-Chine",
    "summary": "Un acte de piraterie meurtrier a frappé cinq indigènes près de Phu-Nhuh-Gian. Par ailleurs, un arrêté officiel modifie la date d'ouverture de l'Exposition d'Hanoï, désormais fixée au 3 novembre.",
    "paragraphs": [
      "Le 12 juillet, un sampan monté par cinq indigènes a été capturé par une bande de pirates armés non loin de Phu-Nhuh-Gian. Les malheureux passagers furent dévalisés et mis à mort.",
      "Un arrêté, daté de Saigon, décide que l'ouverture de l'Exposition d'Hanoï, initialement prévue pour le 1er décembre 1901, est reportée au 3 novembre."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame de la jalousie",
    "summary": "Un drame passionnel a ensanglanté la rue du Lombard à Liège : Victor Rooten a abattu sa maîtresse, Jeanne Mertens, avant de mettre fin à ses jours. Il a succombé à ses blessures à l'hôpital.",
    "paragraphs": [
      "Un drame affreux s'est déroulé la nuit dernière rue du Lombard, à Liège. Un nommé Victor Rooten a tué sa maîtresse, Jeanne Mertens, avant de se donner la mort.",
      "Rooten, épouvanté par son forfait, s'est tiré deux coups de feu dans la tête. Il est décédé une heure plus tard, à l'hôpital de Bavière."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Empoisonnés par la ciguë",
    "summary": "Une confusion tragique entre de l'oseille et de la ciguë lors d'un repas familial a causé la mort de M. Achard. Plusieurs autres membres de la famille luttent encore contre la mort.",
    "paragraphs": [
      "La femme d'un voyageur de commerce, Mme Breschet, a acheté avant-hier, au marché Saint-Pierre, un paquet d'oseille et un paquet de cerfeuil. La cuisinière a confectionné un potage que toute la famille a trouvé délicieux.",
      "Dans la nuit, tous furent pris de douleurs atroces. M. Achard, le grand-père, a expiré hier soir. Mme Breschet, sa fille et la bonne sont dans un état désespéré. Le médecin conclut à un empoisonnement par la ciguë."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Les congrès internationaux",
    "summary": "L'Exposition de Paris et les nombreux congrès internationaux qui s'y tiennent illustrent la vitalité de l'effort intellectuel et humanitaire accompli par les nations de notre époque.",
    "paragraphs": [
      "Les étrangers venus à Paris pour visiter l'Exposition sont émerveillés de tout ce qu'ils contemplent. Jamais le labeur humain ne s'est manifesté sous un aspect aussi grandiose.",
      "Ces congrès qui se succèdent, et dans lesquels sont traités les sujets les plus élevés en vue d'obtenir des progrès sociaux, laisseront une trace profonde. C'est un immense effort intellectuel et humanitaire."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Économie",
    "title": "Les vins français en Russie",
    "summary": "Le gouvernement impérial russe a rapporté l'ukase surtaxant les vins français. Une décision qui favorise grandement la production vinicole nationale.",
    "paragraphs": [
      "Une décision impériale a été prise : le récent ukase, qui établissait une surtaxe fort élevée sur les droits d'entrée en Russie pour les vins en futailles, a été rapporté.",
      "Les vins titrant jusqu'à 13 degrés inclusivement sont désormais affranchis de cette surtaxe, une mesure de nature à donner satisfaction aux intérêts du commerce et de la production vinicole de la France."
    ]
  },
  {
    "id": 12,
    "page": 1,
    "category": "Social",
    "title": "Grèves des boulangers",
    "summary": "La grève des ouvriers boulangers à Marseille et Toulon paralyse l'approvisionnement en pain. À Marseille, les autorités ont dû réquisitionner des ouvriers militaires.",
    "paragraphs": [
      "Marseille : De toutes les grèves actuelles, aucune n'a produit un aussi vif émoi que celle des ouvriers boulangers. La municipalité a dû faire appel à des ouvriers militaires pour assurer l'alimentation en pain de la cité.",
      "Toulon : La grève vient d'éclater à quatre heures, à la suite d'une réunion tenue à la Bourse du travail, les patrons ayant refusé les propositions formulées par les ouvriers."
    ]
  },
  {
    "id": 13,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "Les événements de Chine",
    "summary": "Li-Hung-Chang est investi de pleins pouvoirs pour mener les négociations diplomatiques. Un accord semble émerger entre les puissances concernant l'occupation de Pékin.",
    "paragraphs": [
      "Les pouvoirs étendus conférés à Li-Hung-Chang lui permettent désormais d'aborder toutes les questions à traiter avec les puissances et de les résoudre selon ses propres inspirations.",
      "Concernant la délicate question de l'occupation de Pékin, un accord semble s'être établi entre les puissances."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique Internationale",
    "title": "La situation à Pékin et les négociations internationales",
    "summary": "Une entente diplomatique lie Berlin et Saint-Pétersbourg pour maintenir l'occupation de Pékin par les troupes alliées jusqu'à la conclusion des traités de paix avec la Chine.",
    "paragraphs": [
      "Le bruit court que les puissances font des concessions à la Russie et à l'Allemagne pour les décider à évacuer Pékin. À Kiao-Tchéou, les Allemands poursuivent activement la construction de routes, d'un chemin de fer local et de deux forts.",
      "Londres, 12 septembre : Le correspondant du Morning Post à Berlin observe que le ministre russe est parti pour Tien-Tsin et que le ministre allemand se trouve à Shanghaï. Les négociations de paix avec la Chine ne sont pas encore entamées, rendant la question de l'occupation militaire de Pékin secondaire.",
      "Le correspondant affirme, de source sûre, qu'une parfaite entente existe entre les cabinets de Berlin et de Saint-Pétersbourg. La Russie ne soulèvera aucune objection au maintien de l'occupation de Pékin par les troupes allemandes, anglaises et japonaises jusqu'à la conclusion des pourparlers de paix."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Chronique de Chine",
    "title": "L'occupation de Pékin",
    "summary": "La situation en Chine reste alarmante après un massacre à Pao-Ting-Fou. La diplomatie russe domine les négociations, tandis que la famine menace la population pékinoise pour l'hiver.",
    "paragraphs": [
      "Londres, 12 septembre : On a reçu aujourd'hui la nouvelle d'un nouveau massacre de missionnaires à Pao-Ting-Fou. Depuis la délivrance de Pékin, la Russie ne cesse d'affirmer sa prépondérance sur les autres nations.",
      "Il est incompréhensible que les Japonais, à qui revient pourtant l'honneur de la délivrance, acceptent cette hégémonie russe. On murmure que le ministre japonais est entièrement sous l'influence de son collègue russe.",
      "La nomination de Li-Hung-Chang comme plénipotentiaire marque une nouvelle victoire pour la diplomatie russe. Par ailleurs, la famine paraît inévitable à Pékin durant la saison hivernale."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Dépêches de Tien-Tsin",
    "title": "Violences et expéditions militaires",
    "summary": "Des massacres de chrétiens sont signalés à Fou-Chau-T'ou et Taï-Yuen-Pou. Une colonne internationale de 4 000 hommes, commandée par le général Dordwards, a été dépêchée contre les Boxers dans la région.",
    "paragraphs": [
      "Tien-Tsin, 8 septembre : Un réfugié indigène apporte la nouvelle de massacres de chrétiens à Fou-Chau-T'ou et à Taï-Yuen-Pou. Il annonce également que Cheng-Ting-Fou a été entouré, le 25 août, par des Chinois venant de Pékin munis de cinq canons.",
      "Une colonne de troupes internationales, forte de 4 000 hommes, est partie aujourd'hui en expédition contre les villes de Sutinghaïtien et de Tu-Hé, où la présence de Boxers constitue une menace. Le général Dordwards commande la colonne."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Le renflouement du torpilleur Bouet-Willaumez",
    "summary": "Le renflouement du torpilleur Bouet-Willaumez, échoué près de Bréhat, sera dirigé par le lieutenant de vaisseau Orillon, avec le concours du navire le Buffle et du personnel du port de Cherbourg.",
    "paragraphs": [
      "Le renflouement du torpilleur Bouet-Willaumez, coulé près de l'île de Bréhat, va être incessamment entrepris par le lieutenant de vaisseau Orillon. Il avait été initialement décidé que l'opération se ferait avec l'aide des remorqueurs et des apparaux du port de Brest, mais ce dernier est actuellement mobilisé pour le renflouement du cuirassé Henri IV.",
      "C'est donc le Buffle qui sera utilisé avec le personnel de la direction des mouvements du port de Cherbourg, avec le concours de la défense mobile de Saint-Servan."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Vie de l'Exposition et festivités",
    "summary": "Malgré la fraîcheur, l'Exposition universelle maintient son activité. Au programme : arrivée de journalistes anglais, congrès d'arboriculture présidé par M. Jean Dupuy et célébration de la fête nationale mexicaine.",
    "paragraphs": [
      "La fraîcheur de la température n'a aucunement influé sur le mouvement des entrées à l'Exposition universelle. Deux cent cinquante délégués des associations anglaises de presse ont officiellement annoncé leur arrivée pour vendredi matin.",
      "Le ministre de l'Agriculture, M. Jean Dupuy, préside ce matin la séance inaugurale du congrès international d'arboriculture et de pomologie.",
      "Une brillante fête de nuit sera offerte samedi prochain, 15 septembre, au pavillon du Mexique, à l'occasion de la fête nationale mexicaine."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Assassinat d'une vieille femme à Bruxelles",
    "summary": "À Bruxelles, la veuve Joséphine Guinewr, âgée de soixante et onze ans, a été mortellement blessée par un jeune homme de dix-neuf ans nommé Martin à la suite d'une dispute financière.",
    "paragraphs": [
      "Bruxelles, 12 septembre : Dans la soirée d'hier, Joséphine Guinewr, veuve Chevalier, âgée de soixante et onze ans, recevait la visite d'un jeune homme de dix-neuf ans. Une discussion surgit pour une question d'intérêt. Le jeune homme frappa deux fois la malheureuse, qui fut grièvement blessée. Le meurtrier, nommé Martin, a été arrêté."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Éboulements à Bruxelles",
    "summary": "Deux tragiques accidents ont endeuillé Bruxelles : l'effondrement d'un bâtiment en construction faisant plusieurs victimes, et un éboulement dans une sablonnière à Ixelles ayant coûté la vie à un enfant.",
    "paragraphs": [
      "Bruxelles, 12 septembre : Un bâtiment en construction, impasse des Roses, s'est écroulé, ensevelissant les ouvriers. On a pu en retirer six, dont deux grièvement atteints. On craint que deux ouvriers ne soient encore sous les décombres.",
      "Presque à la même heure, cinq enfants qui jouaient dans une sablonnière à Ixelles ont été ensevelis par un éboulement. Un des enfants est décédé."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Négociations et situation des Boërs",
    "summary": "Le président Kruger quitte le Transvaal pour l'Europe à bord de l'Herzog. Simultanément, Lord Roberts annonce que Lord Methuen a dispersé les troupes boërs à Malopo, faisant trente prisonniers et saisissant des munitions.",
    "paragraphs": [
      "Lourenço-Marques, septembre : Le président Kruger est arrivé hier soir accompagné de plusieurs hauts fonctionnaires du Transvaal. Il est désormais acquis qu'il s'embarquera pour l'Europe le 18 septembre prochain, à bord du vapeur allemand Herzog.",
      "Lord Roberts télégraphie de Pretoria que Lord Methuen a marché contre le camp du commandant Vermaas, à Malopo, et a complètement dispersé les Boërs, capturant trente prisonniers ainsi qu'un important stock de munitions."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Social",
    "title": "La grève des mariniers de la Seine",
    "summary": "Le conflit des mariniers de Rouen bloque le trafic fluvial. À Suresnes, le refus de transporter du vin a nécessité l'intervention des services de navigation de l'État pour remorquer les convois vers Paris.",
    "paragraphs": [
      "Au lendemain du déclenchement de la grève des mariniers de Rouen, un grand nombre de navires demeurent immobilisés. À Suresnes, les grévistes ont refusé de convoyer vers Paris vingt chalands chargés de vins.",
      "Hier matin, le service de la navigation a dû assurer l'évacuation sur Paris des trains bloqués en panne, en prêtant le concours des remorqueurs et des canonnières appartenant à l'État."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Social",
    "title": "La grève à Calais",
    "summary": "La grève du port de Calais s'étend aux empileurs de bois et charretiers. Malgré des tentatives de conciliation à l'Hôtel de ville, les négociations entre patrons et ouvriers restent pour l'heure sans résultat.",
    "paragraphs": [
      "La grève du port s'est généralisée. Aux déchargeurs se sont joints les empileurs de bois et les charretiers. Seuls, les déchargeurs de sucre, pour lesquels un accord a été établi sur la base des tarifs obtenus à Dunkerque, maintiennent la poursuite du travail.",
      "Une entrevue entre les délégués des grévistes et les patrons devait se tenir ce matin, à la mairie. Environ six cents grévistes s'étaient rassemblés sur la place de l'Hôtel-de-Ville, mais ils se sont dispersés sans incident après avoir appris que, sur demande patronale, la réunion était reportée à cet après-midi, à l'hôtel de la chambre de commerce.",
      "L'entrevue a finalement eu lieu cet après-midi, sous la présidence de M. Hochet, adjoint au maire, et de M. Lefaure, président de la chambre de commerce. Les patrons ne s'étant pas accordés au préalable, la discussion n'a pu aboutir. Une nouvelle séance est fixée à demain.",
      "Les dispositions conciliantes affichées tant par les ouvriers que par certains patrons permettent d'espérer une entente prochaine. À l'heure actuelle, à peine une quinzaine d'ouvriers travaillent encore sur le port."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Social",
    "title": "La grève à Ajaccio",
    "summary": "Le mouvement des ouvriers débardeurs d'Ajaccio prend fin. La reprise du travail est actée sans conditions immédiates, dans l'attente d'une issue favorable aux transactions proposées à la compagnie.",
    "paragraphs": [
      "La grève des ouvriers débardeurs de notre ville est désormais terminée. Les grévistes ont repris le travail sans conditions, mais ils demeurent dans l'attente que la compagnie accepte les transactions qui lui ont été soumises."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "La grève à Alger",
    "summary": "À Alger, la grève des chargeurs charbonniers se poursuit. Le refus des ouvriers de travailler pour 5 francs par jour a conduit à l'arrestation de six indigènes pour entrave à la liberté du travail.",
    "paragraphs": [
      "Le mouvement de grève des chargeurs charbonniers se poursuit. Les grévistes refusent obstinément de travailler pour un salaire quotidien de 5 francs. Ce matin, six indigènes ont été arrêtés pour atteinte portée à la liberté du travail."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Faits divers mondains et divers",
    "summary": "Le président du Conseil et Mme Waldeck-Rousseau sont de retour à Paris. M. Constans, ambassadeur, est arrivé de Marseille. Mme Pailleron et son fils sont accidentés lors d'une excursion près de Chambéry.",
    "paragraphs": [
      "Le président du Conseil et Mme Waldeck-Rousseau sont rentrés à Paris, hier matin, à six heures quarante, venant de Saint-Malo.",
      "M. Constans, ambassadeur de France à Constantinople, est arrivé hier matin à Paris par la gare de Lyon, en provenance de Marseille.",
      "Une dépêche de Chambéry annonce que Mme Pailleron, veuve de l'académicien, et son fils, M. E. Pailleron, ont été victimes, au cours d'une excursion aux environs de Chambéry, d'un accident de voiture assez grave. Mme Pailleron a été blessée au visage et son fils s'est fracturé la jambe."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un Vol au Pavillon de la Roumanie",
    "summary": "Des malfaiteurs ont fracturé une vitrine du pavillon officiel de la Roumanie et dérobé des objets précieux. Le préjudice reste toutefois limité.",
    "paragraphs": [
      "En venant prendre son service, hier matin, un gardien du pavillon officiel de la Roumanie constatait qu'une vitrine avait été fracturée par d'audacieux malfaiteurs et qu'une certaine quantité de bijoux avait été dérobée.",
      "D'après les témoignages recueillis, le ou les voleurs ont dû opérer mardi entre cinq et six heures du soir. Ils ont pu forcer aisément, à l'aide d'une lame de couteau, la serrure d'une grande vitrine renfermant des étoffes précieuses et des bijoux fabriqués avec des monnaies roumaines. Toutefois, le montant du vol n'est pas très important."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un Docteur-Sauveteur",
    "summary": "Après une dispute familiale, le jeune René Ganiuc s'est jeté dans la Seine. Sauvé par un passant, il a été conduit au poste de secours du quai de Gesvres.",
    "paragraphs": [
      "Un jeune homme de vingt-cinq ans, René Ganiuc, domicilié dans le quartier de Plaisance, eut, avant-hier soir, vers sept heures, une violente discussion avec sa mère. Il partit précipitamment et alla se jeter dans la Seine du haut du pont au Change.",
      "Déjà le courant l'entraînait, lorsqu'un passant se précipita à son secours et réussit à le ramener sur la berge, vivant encore. Reçu au poste de secours du quai de Gesvres, le jeune désespéré a été conduit au commissariat. Il a promis de ne plus renouveler sa tentative."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une Volante dans le Train",
    "summary": "La domestique Léontine Chanet a volé des bijoux et de l'argent à sa patronne, Mme Weber. Elle a été interceptée par la police dans un train alors qu'elle fuyait vers Bruxelles.",
    "paragraphs": [
      "Mme Weber, épouse d'un sculpteur, a constaté la disparition de sa domestique, Léontine Chanet, qui a fait main basse sur divers bijoux et une somme d'argent cachée dans une commode.",
      "Mme Weber courut au commissariat spécial de la gare du Nord pour donner le signalement. Le soir même, un inspecteur a appréhendé la coupable dans un train de seconde classe. Elle a avoué avoir volé ses maîtres pour rejoindre son amant à Bruxelles."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Pour éviter le Conseil de guerre",
    "summary": "Le déserteur Alexandre Autret a tenté de mettre fin à ses jours avec du laudanum au moment de se constituer prisonnier. Il est hospitalisé à Saint-Martin.",
    "paragraphs": [
      "Alexandre Autret, soldat au régiment de ligne à Saint-Cloud, porté déserteur, s'est présenté, hier matin, au poste du troisième arrondissement pour se constituer prisonnier. Avant d'entrer, il avait avalé le contenu d'une fiole de laudanum pour éviter le déshonneur du conseil de guerre. Il a été conduit à l'hôpital militaire Saint-Martin."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue",
    "summary": "Une série de tragédies frappe la banlieue : accidents de travail à Choisy et Vincennes, drames de l'enfance à la Plaine-Saint-Denis et au Pré-Saint-Gervais, et un suicide à Carrières-Saint-Denis.",
    "paragraphs": [
      "Choisy : Hier après-midi, un charretier nommé Léon Vallé a eu le bas-ventre écrasé et une cuisse broyée par son camion chargé de fer. Il a été transporté à l'hôpital Beaujon.",
      "Plaine-Saint-Denis : Un enfant de sept ans, Gaston Castelin, est tombé dans le canal. Son camarade Albert Legoff, âgé de douze ans, s'est porté à son secours et a réussi à le sauver.",
      "Carrières-Saint-Denis : Le corps d'un ouvrier, Gustave Lafosse, a été repêché dans la Seine. Une lettre retrouvée sur lui indique une intention de suicide.",
      "Pré-Saint-Gervais : Un enfant de deux ans est mort asphyxié par un incendie qui a pris dans une caisse à charbon alors que sa mère était sortie.",
      "Vincennes : Un cheval s'est emballé rue du Midi, renversant une voiture de place. Le cocher a été blessé et quatre voyageurs ont été contusionnés."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Le Congrès des patrons coiffeurs",
    "summary": "Le sixième congrès national et international patronal, organisé par le syndicat général de la fédération des coiffeurs de France, a tenu hier sa séance inaugurale au Conservatoire des Arts-et-Métiers.",
    "paragraphs": [
      "Le sixième congrès national et international patronal organisé par le syndicat général de la fédération des coiffeurs de France a tenu hier sa première séance dans l'amphithéâtre du Conservatoire des Arts-et-Métiers."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Triomphe de l'Art Dentaire (Chapitre du roman)",
    "summary": "Au sein d'une famille de musiciens plongée dans la misère, Jean Rédal refuse le sacrifice de Thérèse Belcourt malgré l'affection qu'il lui porte, tandis que le désespoir pousse les parents vers une issue fatale.",
    "paragraphs": [
      "Le Triomphe de l'Art Dentaire. Elle le sentait, plus que lui-même. Elle était, elle, subitement étreinte par un sentiment jusqu'alors imprécis, une vague et profonde attirance qui dominait la pitié.",
      "Lui, après quelques secondes de silence durant lesquelles ses yeux pesèrent sur les yeux mi-clos de la jeune fille, reprit : « Il la faudrait bien grande, la commisération qui me sortirait de l'état de souffrance aiguë, où, lorsque je m'y attends le moins, me rejette la pensée de ce que fut ma torture et de ce qu'elle est encore. Peut-être n'y aurait-il au monde qu'une femme pour l'avoir, comme il n'y aurait qu'une femme que je pourrais encore aimer. »",
      "Thérèse releva les paupières. Ses yeux ne se détournèrent point de ceux de Jean Rédal. Sa bouche prononça ces trois syllabes : « Laquelle ? »",
      "Il l'attira contre lui, si près, que son souffle effleura le front blanc de la jeune fille. Puis soudain, presque brutal, et s'éloignant en même temps, il la repoussa : « Non. Gêné, ce serait misérable. Non. » Il articulait les mots d'une voix étouffée. Elle vit passer les mains sur son visage et s'affaisser sur une chaise. Il lui sembla que des gouttes brillantes filtraient à travers ses doigts ; elle ne se trompait pas.",
      "Lorsque Rédal laissa tomber ses mains, des pleurs inondaient ses joues. Il la regardait de son regard noyé, sans même les essuyer. Et ces pleurs silencieux sur ce pâle visage, cette douleur muette, cette détresse chez un homme qui devant elle n'en avait jamais témoigné, était navrante.",
      "Il gardait ses deux mains sur ses genoux ; il ne faisait plus un mouvement. Toute son existence, Thérèse Belcourt la verrait cette figure, avec son incommensurable tristesse, et le sceau du malheur, le sceau fatal, que la destinée ne devait point effacer.",
      "Jean Rédal tressaillit. Les gouttes amères se séchèrent sur ses joues, où monta une rougeur de fièvre. Il se dressa avec ce mouvement d'automate qu'il avait souvent. « Oui, ce serait de l'infamie ! Je ne peux pas faire cela. Je ne peux plus attacher à ma vie une autre vie. Lier à moi une femme honnête comme vous, non. Une gourgandine, une maîtresse de passage, soit. Vous demander de nous marier, mademoiselle Thérèse, je ne peux pas. Ce serait un crime. Jamais ! jamais ! »",
      "Thérèse demeurait muette. Il reprit, après quelques hoquets violents qui ressemblaient à des sanglots : « Il n'y aura rien entre nous, il ne peut y avoir que de l'amitié. Consentiriez-vous à vous dévouer, que je n'accepterais pas ce dévouement. »",
      "Elle ouvrit la bouche : « Monsieur Rédal ». Il interrompit : « Laissez-moi croire que vous pourriez l'accepter. Laissez-moi l'illusion que vous seriez, à l'égard de mes enfants, la mère qui leur a manqué. Cela me suffira, qui sait, pour retrouver tout entier le courage qui me manque. Il m'en faut tant. N'est-ce pas que vous pourriez être, si ma conscience ne s'y opposait, la mère de Jean et de Jeanne ? ». « Oui », répondit-elle.",
      "Comme il lui reprenait les mains et la regardait de ses yeux redevenus doux, faisant un effort sur elle-même, Mlle Belcourt demanda : « Pourquoi votre conscience s'oppose-t-elle à ce que je le sois vraiment ? ». Elle le sentit tressaillir. Ses doigts lâchèrent les siens. Il se détourna. Elle ne vit point l'expression étrange et complexe qui bouleversa sa figure presque toujours tourmentée.",
      "Ce n'était point la contraction habituelle, le tic nerveux, qui, plus ou moins fréquent, la crispait. Au contraire, un repos absolu des traits, une immobilité complète. Les pupilles dilatées, la bouche entrouverte, on l'eût dit, ce visage, figé dans une expression d'épouvante, de regret.",
      "Et cela ne fit que passer. Lorsqu'il se retourna vers la jeune fille, Jean Rédal avait repris cet air profondément triste, qui le lui rendait plus sympathique encore : « Vous avez assez de vous dévouer pour les vôtres, mademoiselle Thérèse, sans vous dévouer pour moi, sans vous dévouer pour nous. Vous trouverez un jour un jeune homme que vous aimerez, qui vous appréciera, qui vous rendra heureuse. Moi, je ne saurais pas vous donner le bonheur que vous méritez. »",
      "Que pouvait-elle dire ? Les natures créées pour l'effacement, pour l'abnégation, ne se sentent point au-dessous de leur tâche, satisfaites au contraire d'une nouvelle occasion de s'oublier. Puis cet homme, ces enfants à qui elle sacrifierait sa jeunesse, ne lui rendraient-ils pas ce qu'elle ferait pour eux ? Les petits lui témoignaient tant d'affection. Le père, c'était l'ami. Ce serait le protecteur. Ce serait le sauveur.",
      "Peut-être eût-elle trouvé des mots qui l'eussent convaincu que ce sacrifice de lier sa vie à la sienne lui serait facile. Peut-être l'attendait-il, cette affirmation destinée à tranquilliser sa conscience. Elle éprouva la crainte, ressentie cette après-midi même, au sujet de Mlle de Boffront. Elle eût préféré mourir que de soulever chez Jean Rédal un soupçon par rapport à son désintéressement. Sa bouche demeura close.",
      "La misère est la pierre d'achoppement contre laquelle tout se brise. Si le dénûment ne se fût pas installé au foyer des musiciens, leur fille eût osé sans doute répondre à l'homme qui ne voulait point de son sacrifice, qu'elle prétendait, elle, l'accomplir.",
      "Tous deux entendirent s'ouvrir la porte du palier. La vieille Catherine rentrait. Alors, fit mademoiselle Belcourt, « je dirai à Jeanne que ma mission est restée sans résultat ». « Pour sûr. Et surtout qu'elle ne m'en parle pas de sa grand'mère, nous nous fâcherions ». « Ne craignez rien, elle ne vous en parlera pas, la pauvre petite ». Thérèse sortit.",
      "« Si vous vouliez renvoyer les enfants, mademoiselle Belcourt ? » demanda Catherine. « Il est temps qu'ils mangent leur soupe ». « Je les renvoie immédiatement ». La jeune fille avait disparu dans le corridor.",
      "Rédal passa dans sa chambre. Et, dans la presque obscurité de la pièce, la porte refermée sur lui, les poings crispés de chaque côté de son front, il sanglota, il cria : « Ah ! si je n'avais pas fait ça ! si je n'avais pas fait ça ! »",
      "La voix des enfants le ramena au calme. Lorsqu'il passa dans la salle à manger, Catherine les installait à leur place. Des trois, car la vieille bonne accoutumée à son maître ne remarquait plus ses changements de physionomie, Jeanne fut la seule à penser que son papa était plus chagrin, ce soir-là, que les autres soirs. Et Thérèse, en quelques mots à son oreille lui ayant rendu compte de son insuccès, la petite en conclut, le cœur assez gros, que c'était elle qui avait fait pleurer son papa, se promettant bien de ne plus recommencer.",
      "Or, pour ne plus recommencer, il ne fallait plus parler de sa grand'mère. Or, pour ne plus parler de sa grand'mère, il ne fallait plus penser à sa mère. Tandis que, entre ses deux enfants, la petite fille sérieuse et le gamin babillard, le caissier de la maison Duhalier demeurait aussi sombre qu'en ses heures les plus mauvaises ; les Belcourt, autour de leur table, mangeaient en silence.",
      "Le repas était maigre. Une soupe aux choux, avec un morceau de jambon gros comme deux noix, de quoi en avoir chacun une bouchée, de l'eau dans les verres, et le pain partagé également. Comme la mère, qui laissait du sien, le poussait vers sa fille, celle-ci dit : « Mange, maman, mange. Je n'ai plus faim du tout ». « Allons donc ! » dit brusquement le père, « à ton âge on dévore, surtout quand on a une nourriture aussi reconstituante à se mettre dans l'estomac ». « Je vous affirme que je n'ai pas faim, j'ai la migraine ». « C'est de jeûner que tu as la migraine, ma chère enfant ». « Père, voyons, ce n'est pas encore jeûné ». « Avec ça, dis-moi, combien d'argent as-tu en caisse ? »",
      "« L'argent, c'est mon affaire ». « Et ce n'est pas la mienne ? Tu me respectes toujours, je pense ». « Mon pauvre père, est-ce le moment de parler de respect ? ». « Enfin, tu peux me répondre ». « Tu le sais bien que je les respecte ». « Alors, sois franche. Combien leur reste-t-il en caisse ? ». « Tu le veux savoir ? ». « Parbleu ». « Pas un sou ». Les mains amaigries de madame Belcourt, croisées l'une dans l'autre, tremblèrent sur le bord de la table. Le violoniste eut un rire saccadé. « Eh bien, c'est le moment ». Et Thérèse, très tranquillement : « Le moment de quoi ? ». « De faire le grand saut ». « Quel grand saut ? ». Il repoussa son assiette vide, croisa les bras sur sa poitrine. Puis, penchant le buste, les yeux rivés sur ceux de sa fille : « Le grand saut final. Ta mère et moi nous sommes résolus à mourir ». Thérèse regarda sa mère : « C'est vrai, maman ? »"
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Communications Diverses",
    "title": "Congrès national sur les caisses de retraite",
    "summary": "Un congrès national dédié aux caisses de retraite pour la vieillesse et aux invalides du travail se tiendra prochainement à Paris. Les intéressés peuvent contacter M. Verville, rue Chanoinesse.",
    "paragraphs": [
      "On annonce, pour l'année, un congrès national qui se tiendra à Paris, au sujet des caisses de retraite pour la vieillesse et les invalides du travail. Pour tous renseignements au sujet de ce congrès, s'adresser à M. Verville, 11, rue Chanoinesse, à Paris."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Chemins de Fer",
    "title": "Billets d'excursion et réductions tarifaires",
    "summary": "Les compagnies de l'Ouest et de l'Est annoncent des réductions tarifaires exceptionnelles pour la mi-septembre, incluant des billets d'excursion vers Chartres, Mortagne et Paris.",
    "paragraphs": [
      "Chemin de fer de l'Ouest : À l'occasion de la revue qui aura lieu à Chartres le 17 courant, la Compagnie de l'Ouest fera délivrer, les 16 et 17 septembre, de Paris à Chartres, des billets d'aller et retour comportant une réduction sur les prix des billets simples. Les coupons de retour seront acceptés les 17, 18 et 19 septembre.",
      "Chemin de fer de l'Ouest : La Compagnie fait délivrer des billets dits de plaisir permettant de séjourner quatre ou six jours à Paris pour les personnes venant de points au-delà de Oison, Mantes, Houdan et Bar-le-Duc.",
      "Chemin de fer de l'Ouest : À l'occasion des courses de Mortagne les 16 et 17 septembre, la Compagnie délivrera à partir du samedi 15 septembre des billets d'aller et retour à prix réduits depuis Paris-Montparnasse.",
      "Chemin de fer de l'Est : Le samedi 16 septembre, la Compagnie mettra en marche un train spécial d'excursion à prix très réduits composé de voitures de 3e classe."
    ]
  }
];
