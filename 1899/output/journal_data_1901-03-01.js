// Date: 1901-03-01
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-03-01 (Version Restaurée, 38 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Science",
    "title": "La photographie et la science",
    "summary": "La photographie, alliée indispensable de la science, révolutionne l'étude du ciel et la médecine. Elle est devenue un instrument de précision incontournable pour l'activité moderne et l'anthropométrie.",
    "paragraphs": [
      "Une nouvelle vient d'émouvoir le monde des savants : il s'agit de la découverte d'une nouvelle planète.",
      "Les cartes célestes ne sont point visibles à l'œil nu, ni au télescope. C'est la photographie qui, là où le regard humain se perd, explore et découvre le ciel.",
      "La photographie se mêle à la science et elle ne craint pas de toucher à l'art. Ses différentes manifestations sont si intimement mélangées à notre vie qu'on ne pourrait guère en priver l'activité moderne sans en modifier considérablement le caractère.",
      "Le mécanisme de la photographie repose sur la chambre noire et la chimie. La lumière agit sur certains sels, comme le nitrate et le chlorure d'argent, permettant de laisser une empreinte durable sur une surface sensible.",
      "Désormais, l'objectif voit ce que l'œil ne peut percevoir. L'appareil photographie des astres lointains et décèle des détails invisibles pour l'être humain, rendant de grands services à la médecine et au diagnostic clinique.",
      "Il n'y a pas de science, pas de métier, qui puisse à notre époque se passer de la photographie, qu'il s'agisse de l'étude du mouvement, de la micrographie ou des fiches anthropométriques de M. Bertillon."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Chronique Artistique",
    "title": "La photographie est-elle un art ?",
    "summary": "Longtemps considérée comme une simple technique mécanique, la photographie s'affirme aujourd'hui comme un art véritable, exigeant autant de sensibilité et de vision personnelle que la peinture.",
    "paragraphs": [
      "La photographie mérite-t-elle le nom d'art ? Il ne faut pas hésiter à répondre oui. Si on le lui a longtemps contesté à cause de la servilité apparente de son imitation, il existe aujourd'hui un choix, une disposition et une perspective dans le rendu des sujets qui demandent une âme et des yeux d'artiste.",
      "Les expositions du Photo-Club à Paris ou du Linked-Ring à Londres prouvent que les œuvres photographiques possèdent un cachet personnel et des écoles différentes, tout comme la peinture."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'incendie criminel de l'église Notre-Dame-des-Vertus",
    "summary": "L'incendie criminel de l'église Notre-Dame-des-Vertus à Aubervilliers est élucidé : une bande de cambrioleurs a été arrêtée et a avoué sa responsabilité dans ce crime et d'autres méfaits.",
    "paragraphs": [
      "Les principaux coupables de l'incendie criminel de l'église Notre-Dame-des-Vertus d'Aubervilliers, survenu l'an dernier, sont enfin entre les mains de la justice.",
      "La capture d'une bande de cambrioleurs sévissant dans la région a fourni la piste nécessaire. Cinq individus sont actuellement inculpés et l'un d'eux a formulé des aveux complets.",
      "Il semble que ces mêmes individus soient également responsables de l'incendie d'une baraque, adossée à l'église, survenu quelques mois auparavant."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Social",
    "title": "La grève générale",
    "summary": "Les mineurs de France réclament des réformes sociales essentielles. Si le dialogue semble possible, l'idée de grève générale est écartée comme un péril menant à la misère universelle par l'union des classes.",
    "paragraphs": [
      "Les revendications des mineurs de France, notamment à Montceau-les-Mines et Saint-Eloy, se résument en trois points : la journée de huit heures, la retraite après vingt-cinq ans de service et un salaire minimum.",
      "La journée de huit heures ayant été votée par la Chambre des communes en Angleterre, une entente semble possible en France. Toutefois, la grève générale aboutirait à la misère universelle. Le patron et l'ouvrier sont solidaires ; ils ne peuvent triompher que par leur union."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le crime mystérieux de Lyon",
    "summary": "L'enquête sur le meurtre de la femme dépecée à Lyon progresse. La police, qui oriente ses recherches vers la communauté italienne, espère une résolution rapide de l'affaire grâce à de nouveaux indices.",
    "paragraphs": [
      "L'enquête sur l'affaire de la femme coupée en morceaux à Lyon n'aboutit toujours pas malgré plus de cent cinquante déclarations vérifiées par les autorités.",
      "La victime est probablement italienne. Le consul d'Italie a été prié d'intervenir auprès de ses compatriotes pour identifier le corps.",
      "Le service de la sûreté a cependant été mis sur une piste sérieuse ce soir, laissant espérer une arrestation prochaine."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique",
    "title": "Suppression des inspections générales de l'armée",
    "summary": "Le ministre de la Guerre a promulgué un décret supprimant les inspections générales. Désormais, ces responsabilités sont transférées aux commandants de corps d'armée pour une gestion simplifiée et directe.",
    "paragraphs": [
      "Le ministre de la Guerre a fait publier un décret portant suppression des inspections générales. Ces fonctions sont désormais confiées aux commandants de corps d'armée, investis d'une autorité permanente.",
      "Ce principe vise à renforcer la responsabilité des commandants et à simplifier l'organisation militaire, à l'exception de la gendarmerie et de l'armée coloniale qui conservent des inspecteurs spéciaux."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Guerre",
    "title": "La guerre des Boërs en Afrique du Sud",
    "summary": "Les tensions persistent en Afrique du Sud. Tandis que Dewet tente de se frayer un passage vers l'est, la presse londonienne s'interroge sur la véracité de la capitulation du général Botha devant lord Kitchener.",
    "paragraphs": [
      "Des dépêches indiquent que Dewet et le président Steijn campent sur la rive sud de l'Orange, tentant de se frayer un passage à l'est. Plusieurs colonnes anglaises cherchent à les intercepter.",
      "Concernant la prétendue capitulation de Louis Botha, les versions contradictoires persistent : si Londres reste prudent, le Daily Chronicle et la Pall Mall Gazette annoncent que le général Botha a capitulé à Middelburg devant lord Kitchener.",
      "Des engagements sont signalés dans la colonie du Cap, où les troupes anglaises continuent de presser les commandos boërs."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Tragique plaisanterie à Montasuy",
    "summary": "Un drame effroyable endeuille Montasuy : un enfant de cinq ans a succombé après avoir été contraint par des jeunes gens à ingérer une dose mortelle d'eau-de-vie. Une enquête est ouverte.",
    "paragraphs": [
      "À Montasuy, près de Louhans, des jeunes gens ont fait boire un énorme verre d'eau-de-vie à un enfant de cinq ans pour s'amuser. Le pauvre petit est décédé après une nuit d'atroces souffrances.",
      "Le parquet de Chalon-sur-Saône a ouvert une enquête. Les coupables seront poursuivis pour homicide par imprudence."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'affaire de Vaucroze devant la Cour d'assises",
    "summary": "Le procès de l'affaire de Vaucroze reprend aux assises du Gard. La culpabilité de M. de Vaucroze semble remise en question par les magistrats, tandis que l'insouciance de l'accusé Gayte étonne l'audience.",
    "paragraphs": [
      "L'affaire de Vaucroze revient devant la Cour d'assises du Gard. Il semble qu'une transformation se soit opérée dans l'esprit des magistrats, et la culpabilité de M. de Vaucroze est désormais largement remise en question.",
      "Les débats vont maintenant se concentrer sur le rôle exact de Gayte, l'accusé qui affecte une insouciance remarquable en salle d'audience."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Feuilleton",
    "title": "Miss Tempête",
    "summary": "Au château des Fontenilles, l'artiste Jean Tavernier réorganise son quotidien avec le maître d'hôtel, M. Jérôme, afin de s'isoler et de préserver la concentration nécessaire à son œuvre.",
    "paragraphs": [
      "Au château des Fontenilles, Jean Tavernier, tout en travaillant à son œuvre, tente de s'organiser avec le personnel de la maison. Il demande au maître d'hôtel, monsieur Jérôme, de simplifier le service des repas pour gagner en liberté.",
      "Il installe ses repas dans une antichambre et s'habitue peu à peu à cette vie solitaire, trouvant dans le parc du château un cadre admirable pour se détendre après ses rudes efforts d'artiste."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Procès de l'affaire Gayte : Ouverture des débats",
    "summary": "Ouverture du procès Gayte devant la cour d'assises. L'accusé conteste vivement les charges, nie son implication dans les faits et rejette la responsabilité sur des tiers, tout en justifiant la possession des bijoux.",
    "paragraphs": [
      "Les formalités d'usage ont ouvert la séance. Après la récusation des premiers jurés tirés au sort, deux jurés suppléants furent désignés en raison de la durée probable des débats. L'acte d'accusation a ensuite été lu à l'audience.",
      "M. l'avocat général a pris la parole avant l'ouverture effective des débats. Il a hautement proclamé l'innocence de M. Fernand de Vaucroze, déplorant les poursuites exercées contre lui sur les seules déclarations de la fille Marie Laupies. Il a également affirmé l'innocence d'Audibert.",
      "M. le président Abel a procédé à l'interrogatoire de l'accusé Gayte, rappelant ses antécédents fort douteux. Le président a fait ressortir diverses erreurs commises lors de l'instruction, soutenant la thèse du suicide de Marie Laupies.",
      "Gayte nie toute culpabilité et conteste vivement la campagne menée contre lui par les fils de Vaucroze. Il se défend avec véhémence, affirmant qu'il refuse de payer pour les véritables auteurs du forfait.",
      "Gayte s'est montré prolixe, tentant d'expliquer sa présence en possession des bijoux de la victime par une remise effectuée par des voleurs il y a dix ans. Il multiplie les arguments pour nier son implication, malgré les témoignages accablants.",
      "L'accusé exprime de sérieux doutes sur la véracité des témoins et soutient que la bague trouvée chez sa femme provenait de bijoux remis par des complices il y a une décennie."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "Chambre des Députés : Loi sur le contrat d'association",
    "summary": "La Chambre débat de l'article 12 relatif aux associations étrangères. M. Waldeck-Rousseau défend la dissolution par décret, tandis que le débat sur les sucres est renvoyé au 8 mars.",
    "paragraphs": [
      "La Chambre a poursuivi la discussion de la loi sur le contrat d'association. Le débat a porté sur l'article 12, relatif aux associations composées de Français et d'étrangers, ou ayant des administrateurs étrangers.",
      "M. Waldeck-Rousseau, président du Conseil, a soutenu le système du gouvernement qui octroie la faculté de dissoudre ces associations par décret. La Chambre a repoussé l'amendement de M. Charles Gras, qui proposait une autorisation ministérielle préalable.",
      "La Chambre a renvoyé à lundi la suite de la discussion et a fixé la date du 8 mars pour l'interpellation concernant la question des sucres."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Social",
    "title": "Le Paiement des Salaires",
    "summary": "M. Millerand, ministre du Commerce, a préconisé devant la commission du Sénat la suppression des amendes infligées aux ouvriers dans le cadre du nouveau projet de loi sur le paiement des salaires.",
    "paragraphs": [
      "M. Millerand, ministre du Commerce, a été entendu par la commission du Sénat chargée d'examiner le projet de loi sur le paiement des salaires. Le ministre s'est prononcé en faveur de la suppression des amendes infligées aux ouvriers."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Justice",
    "title": "Circulaire du Ministre de la Justice",
    "summary": "Une nouvelle circulaire ministérielle encourage les magistrats à faire une application large de la loi de sursis et à limiter strictement le recours à la détention préventive.",
    "paragraphs": [
      "Le Journal officiel publiera prochainement une circulaire adressée aux procureurs généraux, recommandant l'application la plus large et la plus libérale de la loi de sursis, la substitution de l'amende à l'emprisonnement, ainsi qu'une grande circonspection en matière de détention préventive."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "Sénat : Séance du jeudi 28 février",
    "summary": "Le Sénat examine le projet de loi sur le commerce des blés et farines. M. Jean Dupuy, ministre de l'Agriculture, annonce le dépôt du projet créant les chambres d'agriculture.",
    "paragraphs": [
      "Le Sénat a discuté de la proposition de loi concernant l'exportation et l'importation des blés et farines. M. Denolx s'est déclaré adversaire du projet, estimant qu'il ne profiterait qu'à la spéculation.",
      "M. Jean Dupuy, ministre de l'Agriculture, a précisé que le projet de création de chambres d'agriculture est désormais déposé. La discussion a été renvoyée au lendemain."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles Coloniales",
    "title": "La mission Gentil et autres nouvelles",
    "summary": "Le ministre des Colonies a reçu M. Gentil pour saluer le succès de sa mission au Chari. Par ailleurs, les employés anglais du câble télégraphique à Saint-Pierre et Miquelon doivent désormais prêter serment à la France.",
    "paragraphs": [
      "Le ministre des Colonies a reçu M. l'administrateur en chef Gentil, commissaire du gouvernement au Chari, pour le féliciter du succès de sa mission.",
      "À Saint-Pierre et Miquelon, les employés anglais du câble télégraphique ont reçu l'avis de prêter serment de fidélité à la France pour conserver leur position."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Diverses informations mondaines et politiques",
    "summary": "Chroniques administratives : le Président a délégué sa représentation pour le couronnement anglais. L'Académie française déclare des fauteuils vacants et l'on déplore le décès de l'évêque de Périgueux.",
    "paragraphs": [
      "Le Président de la République s'est fait représenter à une cérémonie en l'honneur du couronnement du roi d'Angleterre. Il a également procédé à un renouvellement partiel des officiers de sa maison militaire.",
      "L'Académie française a déclaré la vacance des fauteuils de MM. le duc de Broglie et Henri de Bornier.",
      "M. Dabert, évêque de Périgueux et de Sarlat, est décédé à l'âge de quatre-vingt-dix ans."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Grèves",
    "title": "Grève des ouvriers des Docks à Marseille",
    "summary": "Mouvement de grève sur les quais de Marseille où le travail est paralysé. Une échauffourée matinale accroît la tension, laissant présager une grève générale pour le lendemain.",
    "paragraphs": [
      "Tout travail a cessé sur les quais de Marseille. Une échauffourée a eu lieu dans la matinée. La Compagnie transatlantique a dû recourir à ses contremaîtres pour débarquer un cercueil. On craint une grève générale pour demain."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Social",
    "title": "La grève des grandes usines",
    "summary": "Le maire exprime sa sympathie aux grévistes tout en prônant le calme. Face à l'intransigeance patronale et au licenciement du personnel, la situation sociale devient critique dans la ville.",
    "paragraphs": [
      "On communique beaucoup la réponse qu'a faite ce matin le maire en recevant les délégations des grévistes. Il ne leur a pas caché ses sympathies pour leur cause, mais il a fait ressortir l'inopportunité du mouvement actuel, indiquant qu'il ne l'aurait pas conseillé s'il avait été consulté.",
      "Il a engagé les ouvriers au calme, insistant sur le devoir qu'il avait de protéger la liberté de tous.",
      "Dans certains groupes, on en conclut que malgré les difficultés présentes, la grève est peut-être plus près de sa fin qu'on ne croit, mais la situation reste toujours excessivement tendue. Les plus importants des patrons ont déjà licencié cet après-midi tout leur personnel, gréviste ou non, manifestant l'intention d'arrêter complètement leur exploitation tant que les ouvriers ne viendront pas à résipiscence.",
      "C'est donc une crise très grave que va traverser notre ville si une solution rapide n'intervient pas. Plusieurs grandes usines, ne pouvant expédier leurs marchandises, arrêteront leur fabrication après-demain."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Social",
    "title": "Grève à Montceau-les-Mines",
    "summary": "Reprise du travail aux usines Aillot. À Montceau-les-Mines, malgré une brève tension autour d'une arrestation au siège syndical, la journée s'est déroulée dans le calme devant huit mille personnes.",
    "paragraphs": [
      "Les ouvriers métallurgistes de l'usine Aillot ont repris le travail ce matin.",
      "Aux abords du siège social du syndicat, un incident sans importance s'est produit au moment de la distribution de la soupe populaire. Des gendarmes se sont présentés pour arrêter un nommé Pana contre qui un mandat d'amener avait été lancé. Il fut répondu au brigadier que le syndicat n'était pas le domicile du gréviste.",
      "M. le préfet Diény et les commissaires spéciaux Gagnot et Moller sont intervenus et ont fait retirer les gendarmes. L'attroupement s'est dispersé de lui-même.",
      "La matinée a été très calme. À deux heures, une imposante manifestation a parcouru les rues et à trois heures, huit mille personnes ont écouté les orateurs dont le maire M. Bouvier qui a prêché le calme."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Social",
    "title": "Les mineurs de la Loire",
    "summary": "À Saint-Étienne, l'agitation persiste chez les mineurs. La rumeur d'une dénonciation par les compagnies de la sentence arbitrale conclue entre MM. Jaurès et Gruner suscite une vive inquiétude dans le bassin houiller.",
    "paragraphs": [
      "La situation demeure stationnaire à Saint-Étienne. On ne signale aucun changement dans l'attitude des ouvriers des mines.",
      "On discute avec animation la nouvelle selon laquelle les compagnies seraient disposées à dénoncer les clauses de la sentence arbitrale conclue en janvier dernier entre MM. Jaurès et Gruner. L'intention qui leur est prêtée cause une certaine inquiétude dans les milieux ouvriers."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Politique étrangère",
    "title": "La journée de huit heures au Parlement anglais",
    "summary": "La Chambre des communes a adopté, à treize voix de majorité, une loi limitant la journée de travail dans les mines à huit heures, incluant le temps de descente et de remontée pour les mineurs.",
    "paragraphs": [
      "La Chambre des communes d'Angleterre a rendu un vote très important concernant la réglementation de la durée du travail dans les mines. Il a été décidé que le travail ne pourrait excéder huit heures sur vingt-quatre, ce temps comprenant la descente et la montée.",
      "Le vote a été émis à treize voix de majorité, avec le soutien des libéraux et d'une partie des conservateurs. Ce scrutin tranche un problème qui était déjà, en pratique, largement résolu dans les houillères britanniques où la journée est souvent réduite à huit ou sept heures et demie."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide du pont Mirabeau",
    "summary": "Le jeune Henri Bégout, caoutchoutier de vingt-trois ans, s'est donné la mort en se jetant du pont Mirabeau. Il a succombé à ses blessures, ses fièvres coloniales ayant vraisemblablement altéré son jugement.",
    "paragraphs": [
      "Henri Bégout, caoutchoutier de vingt-trois ans, s'est jeté du haut du pont Mirabeau hier soir. Tombé sur la berge, le malheureux a eu le crâne et les jambes fracturés. Transporté d'urgence à l'hôpital Boucicaut, il a succombé durant la nuit.",
      "L'enquête a établi que ce geste désespéré était dû à des fièvres persistantes contractées aux colonies qui tourmentaient le malheureux depuis son retour."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Affaire de mœurs : les époux Houssin",
    "summary": "Les époux Houssin, cordonnier et épouse, ont été arrêtés pour avoir prostitué leurs deux filles mineures, Alexandrine et Gabrielle, afin de pallier aux besoins financiers de leur foyer.",
    "paragraphs": [
      "Anatole Houssin, cordonnier, et sa femme Marie Martin ont été arrêtés pour avoir livré leurs deux filles, Alexandrine et Gabrielle, à la débauche afin de combler les besoins financiers de la famille. Les deux jeunes filles ont avoué les faits.",
      "Les époux Houssin sont actuellement au dépôt, tandis que leurs cinq autres enfants, plus jeunes, ont été placés dans un asile départemental sous la protection de l'administration."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de suicide d'Auguste Vaillant",
    "summary": "Réduit au désespoir par le chômage, l'ouvrier Auguste Vaillant a tenté de mettre fin à ses jours près de Noisy-le-Sec. Il a été admis à l'hôpital Lariboisière avec deux plaies par balles.",
    "paragraphs": [
      "Auguste Vaillant, ouvrier de vingt ans, s'est présenté hier soir au commissariat de Saint-Vincent-de-Paul, portant deux plaies par balles à la hanche. Privé de travail, il avait tenté de se suicider dans un champ près de Noisy-le-Sec en se tirant deux coups de revolver.",
      "Il a été immédiatement admis à l'hôpital Lariboisière où ses jours ne seraient pas en danger."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de meurtre rue d'Allemagne",
    "summary": "À la suite d'une altercation dans un débit de boisson, un peintre en voitures a fait feu à quatre reprises sur son rival. Légèrement blessée, la victime a été raccompagnée à son domicile, tandis que l'agresseur a été arrêté.",
    "paragraphs": [
      "Eugène Coisnet et Joseph Bouju, tous deux peintres en voitures, se sont violemment disputés au cours d'une consommation dans un débit de la rue d'Allemagne.",
      "Bouju, ayant eu le dessous dans cette rixe, a tiré à quatre reprises avec un revolver sur son adversaire. La victime, fort heureusement blessée de manière légère, a été reconduite à son domicile après les premiers soins.",
      "Le coupable, appréhendé sans résistance par les agents de la force publique, a été immédiatement conduit au poste pour y être interrogé et placé sous mandat d'arrêt."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de travail rue Turenne",
    "summary": "Un garçon de lavoir de cinquante ans, nommé Lazare Séguin, a fait une chute dramatique dans un escalier de la rue Turenne. Atteint d'une fracture crânienne et d'une jambe brisée, il a été hospitalisé d'urgence.",
    "paragraphs": [
      "Un grave accident de travail s'est produit au numéro 72 de la rue Turenne. Le nommé Lazare Séguin, garçon de lavoir âgé de cinquante ans, alors qu'il gravissait les marches de l'escalier chargé d'un lourd paquet de linge, a perdu l'équilibre et fait une chute terrible.",
      "Relevé dans un état alarmant, le malheureux présente une fracture du crâne ainsi qu'une fracture compliquée de la jambe. Les secours mandés sur place l'ont transporté dans un état de grande faiblesse à l'hôpital Saint-Louis."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Pillage d'un bureau de poste à Machemont",
    "summary": "Un cambriolage audacieux a visé le bureau de poste de Machemont. L'enquête a permis l'arrestation de trois individus, Marcel Thuillard, Edmond Hoger et Henri Jouthiry, chez qui une partie du butin a été retrouvée.",
    "paragraphs": [
      "Des malfaiteurs ont pénétré par effraction, dans le courant de la nuit, au bureau de poste de Machemont, dans l'Oise. Après avoir forcé les serrures, les cambrioleurs se sont emparés de bijoux, de titres au porteur et de divers mandats.",
      "Une enquête active, menée par la gendarmerie, a rapidement conduit à l'arrestation de trois suspects : Marcel Thuillard, Edmond Hoger et Henri Jouthiry. Lors de la perquisition effectuée au domicile de la femme Hoger, les enquêteurs ont mis la main sur une partie notable du butin dérobé."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Écroulement d'une maison à Reims",
    "summary": "Le tragique effondrement d'un chantier de construction rue de Courtancy, à Reims, a causé la mort d'un ouvrier. Trois autres hommes ont été extraits des décombres, dont deux grièvement blessés.",
    "paragraphs": [
      "Une maison en cours de construction, située rue de Courtancy à Reims, s'est subitement écroulée hier, ensevelissant dix ouvriers sous les décombres des murs et des charpentes.",
      "Le nommé Gauthier, âgé de quarante-huit ans, a péri dans cette catastrophe. Trois autres travailleurs ont pu être dégagés par les secours : deux d'entre eux, grièvement blessés, ont été transportés vers l'établissement hospitalier le plus proche, tandis que le troisième ne souffre que de contusions légères."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le drame d'Urain",
    "summary": "Une agression sanglante a eu lieu au presbytère d'Urain. La servante du curé, Mme Aubert, a été retrouvée poignardée, tandis que son père était découvert pendu dans le grenier de la demeure.",
    "paragraphs": [
      "Un drame atroce a été découvert au presbytère de la commune d'Urain. M. le curé Dutartre, en rentrant chez lui, a trouvé sa servante, Mme veuve Aubert, baignant dans son sang au milieu de la cuisine après avoir été sauvagement attaquée à coups de couteau.",
      "Les recherches entreprises dans la propriété ont permis de découvrir le père de la malheureuse, un vieillard de soixante-dix-huit ans, pendu dans le grenier. La victime, bien que sérieusement atteinte, est actuellement hors de danger selon les premières constatations médicales."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Faits divers",
    "title": "Affaire Coulon à Beauvais",
    "summary": "Le parquet de Beauvais a ordonné la libération de Charles et Charlotte Coulon, initialement soupçonnés du meurtre de la veuve Jouvenet. Seul Vangerstaele demeure incarcéré sous de lourdes présomptions.",
    "paragraphs": [
      "Le parquet de Beauvais a ordonné aujourd'hui la mise en liberté de Charles et de Charlotte Coulon, qui étaient soupçonnés d'avoir participé à l'assassinat de la veuve Jouvenet et de sa domestique. Il ne reste plus comme détenu que Vangerstaele, sur qui pèsent de sérieuses présomptions."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Faits divers",
    "title": "Accident domestique à Boulogne-sur-Mer",
    "summary": "Mme veuve Doye, une rentière de 92 ans, est dans un état critique après avoir été grièvement brûlée par son foyer. La victime refuse tout transfert à l'hôpital.",
    "paragraphs": [
      "Une rentière, Mme veuve Doye, âgée de quatre-vingt-douze ans, demeurant 24, rue de l'Oratoire, a été hier soir grièvement brûlée, le feu auquel elle se chauffait s'étant communiqué à ses vêtements. À ses cris de détresse, son fils accourut et réussit à éteindre les flammes.",
      "La malheureuse femme, grièvement atteinte sur différentes parties du corps, a refusé de se laisser transporter à l'hôpital, en raison de son grand âge. On désespère de la sauver."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Faits divers",
    "title": "Décès subit à Auxerre",
    "summary": "Drame à Treigny : un vieillard de soixante-quatorze ans, M. Charlin, a succombé subitement en pleine cérémonie funéraire alors qu'il assistait aux obsèques de son petit-fils.",
    "paragraphs": [
      "Un vieillard de soixante-quatorze ans, M. Charlin, est mort subitement pendant la célébration des obsèques de son petit-fils, dans l'église de Treigny."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Statistique municipale",
    "title": "Bilan sanitaire de la ville de Paris",
    "summary": "Paris enregistre une hausse de la mortalité avec 1 248 décès hebdomadaires, une augmentation attribuée au froid rigoureux et aux maladies respiratoires.",
    "paragraphs": [
      "Le service de la statistique municipale a compté pendant la semaine 1 248 décès, chiffre qui dépasse celui de la semaine précédente (1 017) et la moyenne ordinaire de la saison. L'augmentation de la mortalité est due principalement aux maladies de l'appareil respiratoire ; on peut donc l'attribuer au froid qui a régné pendant ces derniers temps.",
      "La fièvre typhoïde n'a causé que 5 décès. La variole n'a causé que 3 décès, le chiffre le plus faible observé depuis cinq mois. La rougeole continue d'être rare avec 10 décès. La scarlatine a causé 3 décès et la coqueluche 8. La diphtérie a causé 17 décès.",
      "Les maladies inflammatoires des organes de la respiration ont causé 276 décès et 8 décès ont été attribués à la grippe. La phtisie pulmonaire a causé 248 décès. Il y a eu 33 morts violentes, dont 13 suicides.",
      "On a célébré à Paris 415 mariages et enregistré la naissance de 1 372 enfants vivants (721 garçons et 651 filles). On a déclaré la mise en nourrice de 342 enfants et la naissance de 64 mort-nés."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales parisiennes",
    "summary": "Programme des scènes parisiennes : matinée à l'Opéra-Comique, répétitions de Georges Courteline au Théâtre Antoine et projet de monument en hommage à Henry Becque.",
    "paragraphs": [
      "L'Opéra-Comique donnera le mardi 12 mars une matinée extraordinaire au bénéfice de Mme Fanny Génat. Le programme comprendra un acte de Louise et une représentation unique des Refrains d'Offenbach.",
      "M. Antoine a mis en répétition le nouvel acte de M. Georges Courteline, « Les Remplaçantes », qui sera joué au lieu et place de « L'Article 330 » lorsque M. Dumény sera appelé au théâtre de la Porte-Saint-Martin pour sa création de Pétrone dans Quo Vadis.",
      "Aux Variétés, « Les Médicis », la nouvelle comédie de M. Henri Lavedan, sont précédés du « Divorce pour rire » de M. Auguste Germain.",
      "M. Antoine va prendre l'initiative d'une souscription pour l'érection d'un monument à Henry Becque, inhumé au Père-Lachaise."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Concerts et divertissements",
    "title": "Programmes des spectacles et concerts",
    "summary": "Le Casino de Paris accueille de nouveaux talents internationaux, tandis que le cirque Medrano et la Gaîté-Rochechouart renouvellent leurs programmes pour le plaisir du public parisien.",
    "paragraphs": [
      "Au Casino de Paris, débuts de Marta-Ri, des Hoberty's, de Fred et Rick, de Boller, de miss Dublin et de Mlle Cécile d'Or. Prochainement, première représentation de « Paris qui danse ».",
      "Le cirque Medrano renouvelle son programme avec les débuts des trois frères Frediani et ceux de A. Powell et ses étalons boxeurs.",
      "La cinquantième de « Y a queue » à la Gaîté-Rochechouart a été fêtée avec un enthousiasme indescriptible.",
      "Au Concert-Européen, première représentation des « Pricoteurs », vaudeville militaire de M. Plébins."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Courrier orphéonique",
    "title": "Concours musicaux et orphéons",
    "summary": "Le calendrier des festivités musicales est fixé : publication du règlement du concours de Niort et annonce des nombreuses rencontres chorales et instrumentales prévues durant l'été.",
    "paragraphs": [
      "Le comité d'organisation du concours musical de Niort (25, 26 et 27 mai) a publié le règlement de cette solennité artistique. Le concours est placé sous la présidence d'honneur de MM. Alfred Bruneau et Paul Rougnon.",
      "D'autres concours sont annoncés à Houilles (7 juillet), Juvisy (23 juin), Pontoise (juin), Joigny (23 juin), Saint-Ouen (28 juillet), Châteauroux (16 juin) et Pornichet (août).",
      "L'association des jurés orphéoniques a tenu sa quatrième assemblée générale sous la présidence de M. Émile Pessard."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Les Sports",
    "title": "Automobilisme, Football et Escrime",
    "summary": "Actualités sportives : exploit hivernal du baron Reille en automobile, choc footballistique entre le Racing-Club et le Stade français, et annulation du tournoi d'escrime pour litige réglementaire.",
    "paragraphs": [
      "Le baron Xavier Reille a réalisé un essai d'automobilisme remarquable en parcourant 53 kilomètres dans la neige à bord d'un véhicule de huit chevaux.",
      "En football, le Racing-Club affrontera le Stade français dimanche. Le Stade français compte cinq victoires au championnat depuis sa fondation, contre deux au Racing-Club.",
      "Le tournoi d'escrime entre épéistes et fleurettistes n'aura pas lieu en raison de désaccords sur le règlement."
    ]
  }
];
