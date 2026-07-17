// Date: 1900-04-14
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-04-14 (Version Restaurée, 36 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie",
    "title": "Le tabac en France",
    "summary": "L'administration des manufactures de l'État, pilier des recettes du Trésor, dévoile ses innovations techniques à l'Exposition de 1900, témoignant des progrès industriels du monopole français.",
    "paragraphs": [
      "L'administration des manufactures de l'État, qui exploite le monopole des tabacs, aura son pavillon spécial à l'Exposition de 1900. Les visiteurs pourront ainsi se rendre compte des progrès réalisés par une industrie dont l'outillage et le fonctionnement sont peu connus du public.",
      "Le tabac a pour berceau l'Amérique et fut apporté en France vers 1560 par Jean Nicot. En 1674, la fabrication devient une industrie d'État. Le 27 mars 1791, l'Assemblée nationale décrétait la liberté absolue de la culture, mais le monopole fut rétabli par décret en 1810.",
      "Les recettes totales encaissées par le Trésor ces dix dernières années ont atteint 3 milliards 810 millions. La consommation des cigarettes a presque doublé en dix ans, tandis que le tabac à priser passe de mode.",
      "Le personnel ouvrier, composé de 15 110 ouvrières et 1 098 ouvriers, bénéficie d'une amélioration de ses conditions de travail et de retraites. L'État, en tant que patron, se doit de donner l'exemple.",
      "Les méthodes de fabrication, incluant l'humectation, la fermentation et l'usage de machines spécialisées (hachoirs guillotine, torréfacteurs, ensacheuses mécaniques), placent la France au premier rang mondial. L'impôt sur le tabac, volontaire, est considéré comme l'un des plus productifs et moins vexatoires pour le pays."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "L'Honneur du nom - Partie I : La mort mystérieuse",
    "summary": "La comtesse Marguerite, accablée par le décès du duc d'Argile, relate les circonstances de la soirée tragique passée avec son fils, le baron Daniel d'Excideuil, et exprime son inquiétude pour sa fille.",
    "paragraphs": [
      "La comtesse Marguerite, en proie à une douleur profonde, relate les événements entourant la mort du duc d'Argile. Elle explique que son fils, le baron Daniel d'Excideuil, et le duc avaient passé la soirée ensemble dans une atmosphère joyeuse, le duc souhaitant soutenir les travaux scientifiques de son fils.",
      "La comtesse, épuisée, raconte avoir découvert le malheur le lendemain matin par l'intermédiaire de son vieux serviteur Guillaume. Malgré l'insistance du procureur Viguier sur les détails de la soirée et sur l'identité de Michel Gérard, la comtesse reste dévastée par cette tragédie et demande à pouvoir s'occuper de sa fille Gabrielle, restée sans connaissance."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Actualités",
    "title": "La cérémonie d'inauguration de l'Exposition",
    "summary": "Le Président Émile Loubet inaugure officiellement la salle des Fêtes, lançant les festivités de l'Exposition universelle dans un déploiement solennel de hautes personnalités et de musique symphonique.",
    "paragraphs": [
      "Le Président de la République, M. Émile Loubet, présidera aujourd'hui l'inauguration de la salle des Fêtes. Le cortège officiel partira de l'Élysée pour rejoindre l'avenue de La Motte-Picquet, où se déroulera la cérémonie entourée de hautes personnalités, des corps constitués et du corps diplomatique.",
      "Le programme prévoit l'exécution de la Marseillaise, des discours de M. Millerand et du Président, ainsi que des œuvres de Massenet et Saint-Saëns. Une visite de l'Exposition et une traversée de la Seine sur le bateau-mouche n° 57 sont prévues avant que la journée ne se termine par des bals publics autorisés par M. Lépine."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Colonies",
    "title": "Nouvelles de Madagascar",
    "summary": "Le vapeur Iraouaddy rapporte de Madagascar des nouvelles mitigées : orages à Tananarive, exécution du milicien Toto, et succès de la révision des conscrits indigènes pour le service colonial.",
    "paragraphs": [
      "Le vapeur Iraouaddy est arrivé à Marseille avec des nouvelles de l'île. Des orages ont causé des dégâts à Tananarive, et des vols de sauterelles ont détruit des récoltes près de Fort-Dauphin.",
      "Le milicien Toto, assassin du garde Gouraud, a été exécuté le 5 février. Par ailleurs, les autorités ont procédé à la révision des conscrits indigènes, dont 1 990 ont été déclarés bons pour le service. La situation globale dans l'île, notamment à Tuléar, est jugée satisfaisante."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un drame au village",
    "summary": "Un tragique fait divers à Yssandon : un cultivateur de 32 ans, Louis Coly, a mis fin à ses jours après une violente altercation avec sa mère à propos de sa moralité décriée au village.",
    "paragraphs": [
      "À Brive, dans la commune d'Yssandon, un cultivateur nommé Louis Coly, âgé de 32 ans, s'est suicidé après une altercation avec sa mère. Cette dernière lui reprochait ses fréquentations et sa conduite qui scandalisaient le village."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Guerre des Boërs",
    "title": "Le conflit dans le Transvaal",
    "summary": "La situation reste critique autour de Wepener où la garnison britannique soutient le siège. Des volontaires français, dont un jeune officier, ont rejoint les rangs boërs pour participer activement aux hostilités en cours.",
    "paragraphs": [
      "Les dépêches indiquent que la ville de Wepener est investie par les forces boërs, mais que la garnison anglaise résiste vaillamment. Des mouvements de troupes significatifs sont signalés aux abords de Bloemfontein et de Ladysmith.",
      "La mission boër est arrivée à Milan pour des conférences avec le docteur Leyds. Parallèlement, des volontaires français, dont un jeune officier dont la lettre est publiée, rejoignent le camp des Boërs pour prendre part aux combats."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Lettre d'un combattant sur le front",
    "summary": "Un volontaire français au Transvaal décrit l'équipement rustique des combattants boërs et l'excellente organisation de ses troupes, armées d'un mélange hétéroclite de fusils de précision et de pièces d'artillerie.",
    "paragraphs": [
      "J'ai pris cent cartouches aux Anglais et fait l'acquisition du traditionnel chapeau de feutre. Nos lignes sont inviolables. Le colonel commande une troupe de cent hommes divisée en quatre pelotons, et le moral est excellent.",
      "Les Boërs déploient quatre canons de 155 le long de la Tugela. L'armement portatif se compose principalement du fusil Mauser, du Martini-Henry, du Lee-Metford capturé aux Anglais et du Krag-Jorgensen, dont les livraisons arrivent actuellement."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Faits Religieux",
    "title": "Service religieux en mémoire du général de Villebois-Mareuil",
    "summary": "Un service funèbre sera célébré en la cathédrale Notre-Dame de Paris le 18 avril, en mémoire du général de Villebois-Mareuil, illustre officier tombé au service de la cause boëre en Afrique australe.",
    "paragraphs": [
      "Un service religieux, célébré à la mémoire du général de Villebois-Mareuil, aura lieu à Notre-Dame, le mercredi 18 avril, à dix heures du matin."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Décorations de la Légion d'honneur",
    "summary": "Le gouvernement a publié une liste de nominations à la Légion d'honneur pour honorer les architectes et ingénieurs ayant contribué à la réussite de l'Exposition universelle de 1900, dont M. Alfred Picard, élevé à la Grand-Croix.",
    "paragraphs": [
      "Par décret rendu sur la proposition du ministre du Commerce, de l'Industrie, des Postes et Télégraphes, plusieurs personnalités sont promues ou nommées dans l'ordre national de la Légion d'honneur pour leur contribution à l'Exposition de 1900. M. Alfred Picard, commissaire général, est élevé à la dignité de Grand-Croix, aux côtés de nombreux directeurs, architectes et ingénieurs distingués aux grades de Grand-Officier, Commandeur, Officier et Chevalier."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Affaire du Duc d'Argile",
    "summary": "L'enquête sur le décès du duc d'Argile se précise. Le juge d'instruction interroge la comtesse Marguerite au sujet d'un mystérieux individu nommé Michel Gérard, tandis que l'état de santé de Mlle de Saint-Amand demeure préoccupant.",
    "paragraphs": [
      "Le juge d'instruction interroge la comtesse Marguerite sur les circonstances de la soirée précédant la mort du duc d'Argile. La comtesse évoque la présence d'un mystérieux inconnu, Michel Gérard, dont elle décrit le regard saisissant et l'attitude inquiétante.",
      "Le docteur Constantin refuse le transfert de mademoiselle de Saint-Amand, jugeant son état trop instable pour subir le moindre déplacement après sa syncope."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Colonisation",
    "title": "Le Comité du Peuplement Français",
    "summary": "Face aux risques pesant sur l'influence française en Tunisie, le Comité du Peuplement s'organise afin de favoriser, par le biais de l'initiative privée, l'installation durable de nos agriculteurs sur ces terres.",
    "paragraphs": [
      "Le danger est réel pour notre influence en Tunisie. Le Comité du Peuplement français a été constitué dans le but d'encourager l'installation de paysans français par le biais de l'initiative privée. C'est une œuvre importante qui mérite, à tous égards, un large appui."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Social",
    "title": "Instruction des réserves militaires",
    "summary": "Le ministre de la Guerre réforme l'instruction des réserves : les officiers se consacreront désormais exclusivement à la formation militaire, délaissant les tâches administratives.",
    "paragraphs": [
      "La nouvelle instruction du ministre de la Guerre relative aux réserves vise à employer le temps des officiers exclusivement à l'instruction militaire plutôt qu'à des tâches administratives secondaires.",
      "La convocation principale des réservistes aura lieu cette année du 27 août au 23 septembre."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrestation de deux tapissiers voleurs",
    "summary": "Surpris en flagrant délit dans un appartement de la rue Royale, deux ouvriers tapissiers ont été appréhendés après avoir opposé une vive résistance au concierge de l'immeuble.",
    "paragraphs": [
      "Deux ouvriers tapissiers, nommés Ramassier et Steaert, ont été surpris en flagrant délit de vol dans un appartement de la rue Royale.",
      "Malgré une lutte acharnée contre le concierge, ils ont été finalement arrêtés en compagnie d'un complice nommé Erail."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Tragédie à Bruxelles",
    "summary": "Une découverte macabre a été faite dans le canal de Willebroeck : le corps d'une jeune femme, portant des marques de violences, a été retrouvé lesté d'un pavé.",
    "paragraphs": [
      "On a retiré, des eaux du canal de Willebroeck, le cadavre d'une femme âgée d'environ vingt-cinq ans.",
      "Le corps portait des traces évidentes de violence, et un pavé avait été attaché à son cou afin de maintenir la victime au fond du canal."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "International",
    "title": "Projet naval aux États-Unis",
    "summary": "Le secrétaire de la Marine américaine, M. Long, préconise le renforcement de la défense côtière par l'équipement systématique des ports de l'Atlantique en torpilleurs sous-marins.",
    "paragraphs": [
      "Le secrétaire de la Marine américaine, M. Long, a officiellement exprimé l'opinion que l'ensemble des ports de la côte de l'Atlantique devraient être pourvus de torpilleurs sous-marins pour assurer la sécurité nationale."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "International",
    "title": "Émeutes aux Indes",
    "summary": "À Cawnpore, le camp d'isolement des pestiférés a été violemment pris d'assaut par la foule. L'émeute, qui s'est soldée par l'incendie du site et la mort de dix personnes, a nécessité une prompte intervention pour rétablir le calme.",
    "paragraphs": [
      "Le camp d'isolement des pestiférés à Cawnpore a été la cible d'une attaque violente de la part de la populace. À la suite de cet affrontement, dix personnes ont été tuées et le camp a été intégralement incendié par les émeutiers avant que les autorités ne parviennent à rétablir le calme dans la ville."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Social",
    "title": "Grève de Carmaux",
    "summary": "La tension persiste à Carmaux. Alors que la Compagnie des mines fait état de 1 506 ouvriers au travail, les grévistes dénoncent les manœuvres de la gendarmerie pour empêcher tout contrôle objectif de leur mouvement.",
    "paragraphs": [
      "La situation demeure singulièrement tendue dans le bassin minier de Carmaux. La Compagnie des mines affirme officiellement que 1 506 ouvriers ont repris leur poste.",
      "De leur côté, les grévistes protestent avec énergie contre les manœuvres de la gendarmerie, accusée d'éloigner les curieux et les observateurs pour empêcher toute constatation objective du nombre réel de travailleurs en grève."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique",
    "title": "Conseil municipal de Paris",
    "summary": "Le conseil municipal de Paris a validé l'installation d'une fontaine monumentale sur les Champs-Élysées et a entériné plusieurs projets techniques relatifs à la distribution d'eau et au personnel de l'Exposition.",
    "paragraphs": [
      "Lors de sa dernière séance, le conseil municipal a pris la décision d'accepter le don d'une fontaine monumentale destinée à orner les Champs-Élysées.",
      "L'assemblée a également adopté un projet relatif à la distribution d'eau sous pression dans la capitale, ainsi qu'une étude approfondie concernant le régime des indemnités allouées aux ouvriers municipaux durant la période de l'Exposition universelle."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Nécrologie",
    "title": "Décès de M. Planchon",
    "summary": "Nous apprenons avec regret le décès de M. Planchon, directeur distingué de l'École de pharmacie et membre éminent de l'Académie de médecine, terrassé subitement par une crise de suffocation.",
    "paragraphs": [
      "Nous apprenons avec regret le décès de M. Planchon, directeur distingué de l'École de pharmacie et membre éminent de l'Académie de médecine. Il a succombé subitement à un accès de suffocation."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Économie",
    "title": "L'industrie du violon à Markneukirchen",
    "summary": "La cité de Markneukirchen s'affirme comme un centre industriel unique en Europe, où plus de huit mille ouvriers se consacrent exclusivement à la fabrication intensive d'instruments de musique pour le marché mondial.",
    "paragraphs": [
      "La ville de Markneukirchen présente une particularité économique rare : presque tous ses habitants se consacrent à la fabrication d'instruments de musique.",
      "Cette cité compte aujourd'hui plus de huit mille ouvriers spécialisés qui, par leur production intensive, inondent l'ensemble du marché européen."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un escroc aux appartements meublés",
    "summary": "M. Chapel, commissaire des Ternes, a appréhendé à la gare du Nord un individu se faisant passer pour le comte de Villeneuve, auteur de nombreuses escroqueries aux bijoux et aux appartements meublés.",
    "paragraphs": [
      "M. Chapel, commissaire de police du quartier des Ternes, a arrêté hier matin, à la gare du Nord, un audacieux filou qui, depuis deux jours, escroquait les propriétaires d'appartements meublés et avait trouvé le moyen de soutirer 6 000 francs de bijoux à un commerçant de la place de l'Opéra.",
      "Cet individu, qui se faisait appeler comte de Villeneuve, se présentait comme venant de la part de l'agence Pitt et Scott. Il se faisait remettre des bijoux et objets divers sous prétexte de revenir payer, mais ne revenait jamais.",
      "Il s'agit d'un jeune homme de vingt-sept ans, nommé Abdel-Aziz-ben-Mohammed, un Arabe ayant vécu longtemps à Alger et à Bône, arrivé à Paris depuis peu de temps. Il a été arrêté alors qu'il s'apprêtait à quitter la ville avec son butin."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident tragique à Ménilmontant",
    "summary": "Un enfant d'une dizaine d'années a été gravement blessé par une voiture de livraison passage Ménilmontant. Le cocher a été mis à la disposition de M. le commissaire de police.",
    "paragraphs": [
      "À cinq heures, un enfant paraissant âgé de dix ans, dont l'identité n'a pu encore être établie, a été écrasé par une voiture de livreur, passage Ménilmontant.",
      "Il a été transporté dans un état très grave à l'hôpital Saint-Louis. Le cocher, Alphonse Maquis, âgé de dix-neuf ans, a été mis à la disposition de M. Bottolier-Lasquin, commissaire de police."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Chroniques des courses",
    "title": "Résultats des courses de Vincennes et de Levallois",
    "summary": "Malgré un temps peu clément, l'affluence fut forte aux courses de Vincennes, où le cheval Réparateur et la pouliche gagnante du prix Bayadère se sont illustrés.",
    "paragraphs": [
      "Aux courses de Vincennes, malgré un temps désagréable, l'assistance a été considérable.",
      "La course en partie liée a été gagnée par Réparateur. La course importante, le prix Hermine pour chevaux de trois ans, a été remportée par la pouliche gagnante du prix Bayadère."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Information",
    "title": "L'Exposition universelle de 1900",
    "summary": "La librairie Montgrédit-Saint-Joseph publie un ouvrage richement illustré détaillant les monuments, les pavillons et les attractions de la prochaine Exposition universelle.",
    "paragraphs": [
      "L'Exposition universelle touche à son ouverture. Un ouvrage historique, illustré par les meilleurs dessinateurs, décrit par le texte et par l'image toutes les attractions, les monuments et les pavillons de cette grande manifestation parisienne.",
      "La librairie Montgrédit-Saint-Joseph propose un recueil complet de quarante numéros formant un splendide volume richement illustré."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans la banlieue parisienne",
    "summary": "Une série d'accidents a frappé la banlieue parisienne : collisions, chutes et incidents de chantier ont nécessité l'intervention des secours à Clichy, Gennevilliers, Neuilly, Nanterre et Saint-Denis.",
    "paragraphs": [
      "Clichy : Une fillette de neuf ans, Alexandrine Quimerel, a été renversée par une voiture de laitier et a eu l'épaule fracassée.",
      "Gennevilliers : Une poutre détachée d'un échafaudage par la violence du vent a frappé une dame de soixante-sept ans, Mme veuve Dastaing, qui se trouve dans un état désespéré.",
      "Julien Bartel, à Neuilly, s'est grièvement blessé en tombant sur une fourche et a été transporté à l'hôpital Beaujon.",
      "Nanterre : Le charretier Jean Delude a été renversé par une automobile sur la route de Suresnes.",
      "Plaine-Saint-Denis : Mme Prévot a été sauvée de justesse d'un accident de train par le garde-barrière M. Hodebourg."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales et musicales",
    "summary": "Le théâtre du Palais-Royal inaugure ce soir « Les Femmes de paille ». Par ailleurs, la scène lyrique est en deuil suite au décès de M. Gresse, basse renommée de l'Opéra, tandis que les théâtres préparent les fêtes.",
    "paragraphs": [
      "Ce soir, au Palais-Royal, première représentation des « Femmes de paille », vaudeville de MM. Paul Gavault et Marcel Guillemaud.",
      "La scène lyrique est en deuil : M. Gresse, excellente basse de l'Opéra, est décédé hier à Marly-le-Roi.",
      "L'Odéon et les autres théâtres parisiens annoncent des matinées spéciales pour les fêtes de Pâques avec des programmes variés."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Social",
    "title": "Convocations à la Bourse du travail",
    "summary": "Réunions syndicales ce soir à la Bourse du travail : assemblée des travailleurs de la 4e catégorie des métaux et réunion générale des ouvriers graveurs.",
    "paragraphs": [
      "Ce soir, à la Bourse du travail, 3, rue du Château-d'Eau, assemblée des travailleurs de la 4e catégorie des métaux. À l'annexe, assemblée générale des ouvriers graveurs."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Social et Société",
    "title": "Tir et Gymnastique : Soutien parlementaire",
    "summary": "Le budget de 1900 favorise l'essor des sociétés de tir par une réduction du prix des cartouches Lebel et un crédit spécial voté par le Sénat pour les sociétés de tir et de gymnastique.",
    "paragraphs": [
      "Les sociétés de tir vont prendre un essor considérable grâce au budget de 1900. Sur demande du ministre de la Guerre, la Chambre des députés a relevé le crédit pour l'affectation de cartouches réglementaires pour fusil Lebel. Cette mesure permettra de distribuer aux sociétés des cartouches à un prix réduit, passant de 12 centimes et demi à 6 centimes.",
      "Le Sénat a également voté un crédit de 40 000 francs en faveur des sociétés de tir et de gymnastique, malgré les tentatives initiales de la commission des finances de le réduire. Ce succès est attribué aux démarches actives du président de l'Union des sociétés de tir de France."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Informations Officielles",
    "title": "Union des sociétés de tir de France : Composition du bureau",
    "summary": "L'assemblée générale de l'Union des sociétés de tir de France a constitué son nouveau bureau sous la présidence de M. D. Mérillon, représentant les diverses régions et les colonies.",
    "paragraphs": [
      "L'assemblée générale de l'Union des sociétés de tir de France a élu son bureau. Le président est M. D. Mérillon. Le bureau inclut également divers vice-présidents et membres délégués représentant les sociétés de tir du Nord, de Lyon, de Dijon, de Paris et d'outre-mer."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Sports et Loisirs",
    "title": "Société d'encouragement à l'escrime",
    "summary": "La Société d'encouragement à l'escrime a renouvelé son bureau sous la présidence de M. H. de Villeneuve. Les concours de fleuret à l'Exposition s'annoncent prometteurs avec plus de soixante inscrits.",
    "paragraphs": [
      "La Société d'encouragement à l'escrime a réélu son bureau pour 1900, présidé par M. H. de Villeneuve. Les concours de fleuret de l'Exposition s'annoncent comme un grand succès, comptant déjà plus de soixante inscriptions."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Courrier Orphéonique",
    "title": "Concours musicaux et festivals",
    "summary": "Le comité de Levallois-Perret publie le règlement de son concours international d'orphéons et de fanfares. Partout en France, les sociétés musicales multiplient les manifestations, notamment à Cognac et dans Paris.",
    "paragraphs": [
      "Le comité de Levallois-Perret a publié le règlement du concours international d'orphéons, de musique d'harmonie et de fanfares prévu pour le mois d'août prochain.",
      "D'autres manifestations sont organisées à Cognac, Corbeil, Melun, ainsi que dans le Xe arrondissement de Paris, témoignant de l'activité intense et féconde des sociétés musicales à travers le pays."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Économie",
    "title": "Compagnie Internationale des Wagons-Lits : Recettes",
    "summary": "Le bilan financier de la Compagnie Internationale des Wagons-Lits pour le mois de mars atteste d'une progression favorable des recettes globales comparativement à l'exercice précédent.",
    "paragraphs": [
      "L'état comparatif des recettes nettes des voitures de la Compagnie Internationale des Wagons-Lits et des Grands Express européens, arrêté pour la période du 1er au 31 mars, montre une progression sensible et une différence positive en faveur de l'année en cours."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Feuilleton",
    "title": "Mariage Secret : La toile de l'araignée",
    "summary": "Une vive altercation éclate dans un immeuble parisien lorsqu'un policier, agissant sans mandat, tente de s'introduire chez les dames Castéras, provoquant l'intervention immédiate du vicomte et de Ludovic.",
    "paragraphs": [
      "Le récit se poursuit par une scène de vive tension dans la loge de la concierge : un agent de police mène une enquête inopportune, provoquant l'émoi chez les locataires, notamment chez les dames Castéras et le vicomte, que l'on qualifie volontiers de « roi des locataires ».",
      "Le vicomte, accompagné de Ludovic, intervient avec fermeté pour chasser l'agent qui, dépourvu de mandat, s'introduisait indûment chez les dames Castéras, contraignant l'intrus à une fuite précipitée."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Économie agricole",
    "title": "Le Marché des Vins",
    "summary": "Le marché viticole fait preuve d'une grande prudence. Si les expéditions demeurent régulières, la demande pour de nouveaux achats reste atone et les prix varient fortement selon les crus et les régions.",
    "paragraphs": [
      "Si les expéditions de vins demeurent régulières, les achats nouveaux se font rares et lents. Les prix conservent une grande disparité selon les régions productrices (Gard, Hérault, Aude, Bordelais) et la qualité intrinsèque des crus. Dans l'ensemble, le commerce manifeste une réserve marquée dans ses transactions."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Marché",
    "title": "Marché aux Veaux de la Villette",
    "summary": "Lors de la séance du vendredi 13 avril à La Villette, le marché aux veaux a été marqué par une demande soutenue, permettant une vente facile des bêtes de choix provenant des environs de Paris.",
    "paragraphs": [
      "Le marché aux veaux du vendredi 13 avril à La Villette a enregistré une vente facile. Les cours sont restés bien tenus, et les veaux de choix, expédiés des diverses régions d'Île-de-France et des environs, ont trouvé preneur à des tarifs soutenus."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Transports",
    "title": "Compagnies de chemins de fer et l'Exposition Universelle",
    "summary": "En prévision de l'Exposition Universelle, les compagnies d'Orléans et de l'Ouest instaurent des mesures spéciales, incluant des tarifs réduits et des facilités de transport pour permettre aux ouvriers de visiter Paris.",
    "paragraphs": [
      "Les compagnies de chemins de fer d'Orléans et de l'Ouest annoncent, en prévision de l'affluence attendue pour l'Exposition Universelle, une série de mesures spéciales destinées à faciliter les déplacements du public.",
      "Ces dispositions incluent, outre une augmentation de la fréquence des convois, des tarifs largement réduits sur les billets d'aller-retour. Des conditions particulièrement favorables sont également prévues pour permettre aux ouvriers de se rendre à Paris et de visiter le site de l'Exposition sans subir le poids excessif des frais de voyage."
    ]
  }
];
