// Date: 1900-09-26
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-09-26 (Version Restaurée, 38 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "Enseignement post-scolaire : le rapport de M. Sévrette et l'exemple anglais",
    "summary": "Le rapport de M. Sévrette met en lumière l'avance de l'Angleterre dans l'éducation post-scolaire, portée par l'initiative privée, et exhorte la France à s'inspirer de ces foyers éducatifs dynamiques.",
    "paragraphs": [
      "Le rapport de M. Petit et celui de M. Sévrette viennent de paraître. Tous deux synthétisent des visites effectuées dans les établissements post-scolaires de France et de Grande-Bretagne. La distinction majeure entre ces deux documents réside en ce que M. Édouard Petit expose les réalisations françaises, tandis que M. Sévrette souligne les chantiers à entreprendre et le travail déjà accompli chez nos voisins.",
      "Les Anglais s'imposent indiscutablement en maîtres en matière d'éducation post-scolaire. Si l'idée première revient à Victor Duruy, elle a pris en Angleterre un développement prodigieux, soutenu par l'initiative privée et une vive agitation intellectuelle autour de la question.",
      "La fondation du Toynbee Hall, à l'initiative de M. Samuel Barnett, témoigne de cet effort pour répandre la culture intellectuelle, morale et sociale. L'institution, financée par des contributions volontaires, assure l'instruction des classes ouvrières sans distinction politique ou religieuse.",
      "Outre des conférences variées, le Toynbee Hall encourage des discussions publiques libres permettant aux individus de différentes classes de s'éclairer mutuellement. D'autres établissements, tels que Balliol House ou le Morley Memorial College, poursuivent ces mêmes buts éducatifs.",
      "En France, l'instruction post-scolaire se résume trop souvent à un cours public sans lendemain, là où chaque centre anglais constitue un foyer durable offrant conseils, éducation et appui. Il est grand temps que la France rattrape ce retard."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Faute de Haine - Grand Roman Inédit (Troisième partie)",
    "summary": "Sœur Thérésa confie à l'infirmière les intentions du lieutenant de Courtial. Troublée par cette révélation, la jeune femme cherche un instant de répit, mais une présence mystérieuse guette dans l'ombre.",
    "paragraphs": [
      "Sœur Thérésa s'entretient avec la jeune infirmière au sujet du lieutenant de Courtial. Elle lui révèle que, contrairement à ses craintes, le lieutenant ne la croit plus coupable et cherche désormais à obtenir son pardon.",
      "Bouleversée, l'infirmière, qui se croit condamnée à dissimuler ses sentiments, reçoit le soutien de la religieuse l'invitant au repos. Plus tard, alors qu'elle s'échappe de sa cellule en quête d'air pur, elle est surprise par la présence d'un homme dans l'obscurité."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Activités du gouvernement et des groupes parlementaires",
    "summary": "Le groupe radical-socialiste fixe son programme législatif. M. Waldeck-Rousseau et le gouvernement s'attellent à la crise viticole et préparent l'application de la loi sur les octrois pour janvier.",
    "paragraphs": [
      "Le groupe radical-socialiste a réaffirmé la nécessité de prioriser les projets de loi relatifs aux associations, aux successions, aux retraites ouvrières et au dégrèvement des boissons. Le président du Conseil, M. Waldeck-Rousseau, a déclaré partager ces objectifs.",
      "Le ministre de l'Agriculture a reçu des délégations des départements viticoles pour débattre de la crise du secteur. Le gouvernement s'est engagé à mettre à l'ordre du jour la réforme du régime des boissons ainsi que la lutte contre la fraude sur le sucrage des vins.",
      "En principe, la loi de 1897 sur les octrois sera intégralement appliquée à compter du 1er janvier prochain."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Départ du Président de la République",
    "summary": "Le Président Émile Loubet a quitté Paris hier soir par le rapide de Marseille pour un séjour de repos à Montélimar. Il a été chaleureusement salué par la population à son départ de la gare de Lyon.",
    "paragraphs": [
      "Le Président de la République, M. Émile Loubet, a quitté Paris hier soir par le rapide de Marseille à destination de Montélimar. Il s'accorde quelques jours de repos auprès de sa famille, après la fatigue des récentes manifestations et réceptions officielles.",
      "Le chef de l'État a été chaleureusement salué par la population sur son parcours ainsi qu'à la gare de Lyon avant son départ."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Crime inexplicable à Levergies",
    "summary": "À Levergies, le jeune Anatole Pointier a été tué à coups de couteau par Élisée Liétard. Le meurtrier a été arrêté le lendemain à Lesdins ; une enquête est ouverte pour faire la lumière sur ce drame.",
    "paragraphs": [
      "Un jeune homme de vingt et un ans, Anatole Pointier, a été assassiné avant-hier soir à Levergies par un nommé Élisée Liétard, du même âge, qui l'a frappé mortellement d'un coup de couteau. Le meurtrier a été arrêté le lendemain à Lesdins. Une enquête est ouverte pour déterminer les mobiles de ce drame inattendu."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Courrier de Chine et du Japon",
    "summary": "Le navire Ernest-Simons a accosté à Marseille avec militaires et passagers. En Indochine, l'insécurité persiste, tandis qu'en Chine, le général Voyron stabilise le corps expéditionnaire établi à Tien-Tsin.",
    "paragraphs": [
      "Le navire Ernest-Simons est arrivé à Marseille, ramenant à leur foyer des passagers et des militaires de retour d'Extrême-Orient. Les nouvelles d'Indochine demeurent préoccupantes : l'insécurité persiste, marquée notamment par l'assassinat d'un colon à Ninh-Binh et l'état de santé fort inquiétant de plusieurs personnalités locales.",
      "Le général Voyron, ayant pris le commandement supérieur du corps expéditionnaire en Chine, a établi son quartier général à Tien-Tsin. La situation militaire, après une brève canonnade, est désormais jugée stabilisée par le commandement."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Enquête sur l'accident de la gare Montparnasse",
    "summary": "L'expertise technique se poursuit à la gare Montparnasse sous la direction de l'ingénieur Périssé. Les enquêteurs examinent le frein Westinghouse pour établir les causes exactes du drame ferroviaire.",
    "paragraphs": [
      "L'expertise minutieuse de la locomotive impliquée dans le récent accident de la gare Montparnasse se poursuit sous la haute direction de l'ingénieur en chef Périssé. Les autorités judiciaires et techniques cherchent à déterminer avec précision si le frein Westinghouse a fonctionné de manière conforme, bien que les conclusions définitives de l'enquête ne soient point encore arrêtées."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame familial à Roubaix",
    "summary": "Un violent conflit a opposé Guislain Renaux à son beau-père, Constant Déjonghe, à Roubaix. Ce dernier a asséné six coups de couteau à son gendre, désormais dans un état grave. L'agresseur a été écroué.",
    "paragraphs": [
      "Une dispute d'une extrême violence a éclaté la nuit dernière à Roubaix entre le nommé Guislain Renaux et son beau-père, Constant Déjonghe. Ce dernier, dans un accès de fureur et armé d'un couteau, a porté six coups à son gendre. La victime a été transportée à son domicile dans un état jugé grave, tandis que l'agresseur a été immédiatement arrêté et écroué."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le mystère du bois de Vincennes",
    "summary": "Charles G., un ouvrier ajusteur s'étant livré aux autorités à Rouen, a confessé le meurtre d'Etienne Renaud dans le bois de Vincennes. La justice confronte ces aveux aux indices recueillis.",
    "paragraphs": [
      "Les déclarations de Charles G., cet ouvrier ajusteur qui s'est constitué prisonnier à Rouen pour le meurtre d'Etienne Renaud commis dans le bois de Vincennes, font actuellement l'objet d'une enquête approfondie. Les autorités s'emploient activement à vérifier les indices matériels susceptibles de corroborer ses aveux spontanés."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique étrangère",
    "title": "La situation en Chine",
    "summary": "La flotte internationale surveille étroitement les forts du Yang-Tsé. L'Allemagne intensifie son dispositif naval pour protéger ses intérêts en vue de l'arrivée de son nouveau ministre à Tien-Tsin.",
    "paragraphs": [
      "L'ensemble des forts bordant le Yang-Tsé sont désormais placés sous l'étroite surveillance de la flotte internationale.",
      "Le croiseur allemand Gefion a fait route vers Fou-Tchéou afin d'y interdire tout débarquement d'armes ou de munitions. Par ailleurs, les cuirassés allemands sont embossés à l'embouchure du fleuve pour assurer la protection efficace des navires de commerce.",
      "Le docteur von Schwarzstein, nommé nouveau ministre d'Allemagne et actuellement en poste à Shanghai, ne saurait tarder à rejoindre Tien-Tsin pour y prendre ses fonctions."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Mouvements militaires en Chine",
    "summary": "Une colonne russe occupe les forts de Lar-Taï. Li-Hung-Chang annonce une offensive contre les Boxers à Hunir-Chau et Ansu, promettant la pacification complète de la région sous dix jours.",
    "paragraphs": [
      "Les forts de Lar-Taï ont été occupés par une colonne russe, composée de dix compagnies d'infanterie et deux escadrons de cavalerie.",
      "Li-Hung-Chang déclare que, conformément à ses ordres, les forces chinoises ont poursuivi les Boxers, en tuant plus de mille à Hunir-Chau, et un grand nombre à Ansu et à Chu-Chau. Il assure que tous les environs seront débarrassés des Boxers avant dix jours."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique étrangère",
    "title": "La menace des Boxers à Canton",
    "summary": "Près de 20 000 Boxers menaceraient Canton depuis Tchung-Tchuin. La canonnière française Avalanche est sous étroite surveillance, tandis que des massacres de chrétiennes indigènes sont signalés à Tsang-Tsuid.",
    "paragraphs": [
      "Une dépêche de Hong-Kong aux journaux indique que 20 000 Boxers menacent Canton, ayant pour base d'opérations Tchung-Tchuin. Suivant la même source, les Boxers ont menacé de détruire la canonnière française Avalanche, qui demeure à Koum-Xenukp.",
      "D'après des nouvelles de Canton, une embarcation chargée de femmes chrétiennes indigènes aurait été attaquée à coups de fusil ; ces malheureuses, amenées à terre, auraient été massacrées à Tsang-Tsuid."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Li-Hung-Chang et la situation à Tien-Tsin",
    "summary": "Sous la surveillance russe, Li-Hung-Chang s'apprête à partir pour Pékin. Il exprime ses vives inquiétudes face à la complexité des négociations internationales et aux hostilités aux forts de Fé-Tang.",
    "paragraphs": [
      "Li-Hung-Chang partira pour Pékin dans quelques jours ; il est étroitement surveillé par les troupes russes.",
      "Dans une conversation, Li-Hung-Chang aurait exprimé ses doutes quant à une prompte solution, en raison du nombre de puissances avec lesquelles il aura à traiter. Il aurait ajouté que l'attaque inattendue des forts de Fé-Tang compliquait sérieusement la situation."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Annexion de la Mandchourie par la Russie",
    "summary": "Le général Gribsky proclame l'annexion de la Mandchourie et de la rive droite de l'Amour à la Russie, soumettant ces territoires à l'administration et aux lois russes.",
    "paragraphs": [
      "On télégraphie de Saint-Pétersbourg que le général Gribsky, gouverneur militaire de l'Amour, vient de publier une série d'ordonnances établissant que toutes les régions de la Mandchourie occupées par les troupes russes seraient, à l'avenir, placées sous le régime des lois et des autorités russes.",
      "Le territoire des Mandchous, celui de la Zéa, ainsi que la rive droite de l'Amour, occupés par les troupes russes, sont solennellement annexés à l'Empire. Il est désormais défendu aux sujets chinois du territoire de Transzea de retourner sur le sol russe ou sur la rive gauche de la rivière."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique étrangère",
    "title": "La proposition allemande sur la Chine",
    "summary": "Contrairement aux rumeurs de dissension, les puissances n'ont pas émis de réserves sur la proposition allemande. Berlin reçoit l'assentiment de la Russie et du Japon.",
    "paragraphs": [
      "On lit dans la Gazette de Cologne que plusieurs journaux ont soutenu qu'une puissance aurait fait des réserves vis-à-vis de la proposition allemande. À notre connaissance, aucune des puissances n'a élevé une telle objection.",
      "Le cabinet de Berlin, en vue d'obtenir des éclaircissements sur les exigences de l'Allemagne, a vu ses propositions acceptées en principe par la Russie, tandis que la réponse du Japon exprime un assentiment plus accentué."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Instructions pour M. Conger",
    "summary": "Le département d'État américain a finalisé les directives destinées à M. Conger, pressenti pour officier comme médiateur et établir les cadres directeurs des futures négociations internationales.",
    "paragraphs": [
      "Le département d'État américain s'est employé à rédiger les instructions destinées à M. Conger. Il est désormais probable que M. Conger aura à agir comme médiateur pour régler les points essentiels des négociations et fixer les grandes lignes de la conférence."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits divers",
    "title": "Noyade accidentelle en Belgique",
    "summary": "Un dramatique accident fluvial sur le canal de Gand à Bruges a manqué de virer à la tragédie, une barque surchargée ayant chaviré sous le poids de vingt-cinq passagers.",
    "paragraphs": [
      "Dans une barque qui assurait le transport des passagers sur le canal de Gand à Bruges, vingt-cinq personnes avaient pris place. Tout à coup, l'eau envahit l'embarcation et celle-ci chavira. Tous les passagers ont pu être secourus, mais bon nombre d'entre eux furent frappés de stupeur et saisis par le froid."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits divers",
    "title": "Rejet du pourvoi de Sipido",
    "summary": "La Cour suprême a rendu son arrêt concernant Sipido, l'auteur de l'attentat contre le prince de Galles, en rejetant définitivement son pourvoi en cassation.",
    "paragraphs": [
      "Sipido, l'auteur de l'attentat contre le prince de Galles, s'était pourvu en cassation contre l'arrêt de la cour d'assises le mettant à la disposition du gouvernement jusqu'à l'âge de vingt et un ans. La Cour suprême a rejeté son pourvoi."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits divers",
    "title": "Fatal accident à Chaponost",
    "summary": "Drame domestique à Chaponost : un cultivateur, voulant protéger ses biens par un piège à fusil, a provoqué involontairement la mort de sa jeune fille, Pierrette.",
    "paragraphs": [
      "Un cultivateur de Chaponost, M. Lafont, ayant constaté que des voleurs dérobaient les tapis qu'il faisait sécher dans son jardin, installa un fusil chargé dans le but de les effrayer.",
      "En son absence, sa fillette, Pierrette, voulut apporter à son père un objet qu'elle attendait. Au moment où elle ouvrit la clôture, une détonation retentit et Pierrette roula sur le sol, frappée en pleine poitrine. Elle a succombé peu après."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits divers",
    "title": "Incident à Versailles",
    "summary": "Visite mémorable des maires à Versailles : malgré l'absence de réception officielle, les hôtes ont admiré les fastes du château et les jardins de Trianon sous un ciel éclatant.",
    "paragraphs": [
      "Nombreux sont ceux qui, après avoir visité les musées, se sont rendus à Versailles. Ils ont parcouru le château sous la conduite précieuse du conservateur, M. de Nolhac, et ont admiré les jardins de Trianon, luisants plus que jamais sous leurs frondaisons automnales.",
      "Les grandes eaux avaient joué en leur honneur. Ils reprirent le train pour la capitale, la ville des rois et des merveilles, avec un souvenir impérissable. S'il n'y eut aucune réception officielle pour les maires à leur arrivée, leur départ fut salué par une ovation."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Social",
    "title": "Le Congrès Socialiste International",
    "summary": "Le Congrès Socialiste International avance sur l'organisation internationale des travailleurs et la législation du travail. Les débats se poursuivent sur l'affranchissement social et le soutien financier aux rapports.",
    "paragraphs": [
      "Le travail des commissions s'accomplit rapidement ; la rédaction des rapports ne soulève d'ailleurs que des discussions de forme, car, sur le fond, tous les délégués sont d'accord, ou à peu près.",
      "La séance générale a été ouverte hier matin à dix heures et demie, sous la double présidence de M. Andréa Costa (Italie) et M. Hyndman (Angleterre). Dans la galerie du premier étage, beaucoup de monde, des étrangers pour la plupart, désireux d'assister aux travaux du Congrès.",
      "La première commission, présidée par M. Enrico Ferri (Italie), a déposé son rapport sur l'exécution des décisions du Congrès et l'organisation internationale des travailleurs. Le rapporteur, M. Van Kol (Hollande), a reconnu la nécessité de la création d'un organe du prolétariat international, tel qu'un comité permanent.",
      "La séance a été reprise à trois heures de l'après-midi pour discuter sur la législation internationale du travail et la limitation de la journée de travail à onze heures. Le Congrès a également statué que le minimum de salaire ne peut être fixé de façon uniforme pour tous les pays, mais doit être en rapport avec les nécessités de l'existence.",
      "La troisième commission a traité de l'affranchissement du travail et l'expropriation de la bourgeoisie, mais n'a apporté aucune conclusion faute de fonds pour l'impression des rapports. M. Vandervelde, délégué belge, a soulevé des protestations, auxquelles M. Delory, maire de Lille, a mis fin en offrant la somme nécessaire."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Dernière heure",
    "title": "Les événements de Chine",
    "summary": "Les puissances internationales s'accordent sur la note allemande concernant la Chine, tandis que Washington adopte une position diplomatique indépendante et offre sa médiation pour le rétablissement de la paix.",
    "paragraphs": [
      "Toutes les réponses des puissances sont arrivées, sauf celle de l'Angleterre. Toutes se déclarent d'accord en substance avec la note allemande. On sait que l'Amérique se détache du groupe des puissances et veut faire en Chine une politique américaine propre.",
      "À Washington, le secrétaire pour la Guerre a télégraphié au général Chaffee des instructions stipulant qu'en attendant l'issue des négociations, une garde de la légation, composée d'un régiment d'infanterie, quatre escadrons de cavalerie et une batterie légère, restera à Pékin pour la protection du ministre et des intérêts américains.",
      "À Londres, une dépêche de New-York au Globe indique que les instructions à M. Conger portent non seulement de négocier un traité de paix particulier entre les États-Unis et la Chine, mais aussi d'offrir la médiation du gouvernement de Washington entre les autres puissances et la Chine."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits divers",
    "title": "Accident de chemin de fer à Brest",
    "summary": "Un grave déraillement ferroviaire a eu lieu près de la gare de Plabennec. Le train n° 21 est sorti de la voie, causant le décès du mécanicien et blessant grièvement le personnel de conduite.",
    "paragraphs": [
      "Voici des détails sur l'accident de chemin de fer qui s'est produit au kilomètre 10, près de la gare de Plabennec. Le train n° 21, parti de Brest avec cinquante voyageurs, a vu sa locomotive et son fourgon sortir de la voie au lieu-dit « Moulin du Moguerou ».",
      "Le mécanicien, nommé Niazéas, âgé de vingt-cinq ans, a été pris sous la machine et tué net. Le chauffeur, M. Malice, a eu les cuisses fortement contusionnées, et le conducteur a été blessé aux jambes et aux mains.",
      "Le parquet a procédé aux constatations d'usage et l'état des lieux semble incriminer l'état des traverses de la voie. La victime a été transportée à Brest pour l'autopsie."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits divers",
    "title": "Tentative de vol à Notre-Dame",
    "summary": "Des malfaiteurs ont tenté de cambrioler la sacristie de Notre-Dame en utilisant un échafaudage. La sonnerie électrique a provoqué leur fuite, les obligeant à abandonner leur équipement sur place.",
    "paragraphs": [
      "Une audacieuse tentative de vol a été commise dans la sacristie des chanoines de Notre-Dame. Les voleurs ont pénétré par une baie ogivale après avoir utilisé un échafaudage. Ils ont forcé la porte grillagée et utilisé une corde pour descendre dans la sacristie.",
      "Ils ont tenté de forcer les armoires en fer contenant le trésor, mais ont probablement déclenché une sonnerie électrique qui les a fait fuir, laissant derrière eux des outils, une bougie et un chapeau. La police a ouvert une enquête."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits divers",
    "title": "Incendie à Paris",
    "summary": "Un incendie a ravagé un atelier rue Godefroy-Cavaignac hier matin. Rapidement maîtrisé par les pompiers, le sinistre a causé d'importants dégâts matériels et a gravement blessé le propriétaire de l'immeuble.",
    "paragraphs": [
      "Un incendie s'est déclaré hier matin, rue Godefroy-Cavaignac, dans l'atelier de Mlle Dousser, fabricante. Le feu a détruit l'atelier et endommagé deux ateliers voisins, ceux de MM. Sulpice et Herman.",
      "Les pompiers ont maîtrisé le sinistre vers sept heures et demie. Le propriétaire de l'immeuble, M. Jaasi, a été grièvement brûlé à la main. Les dégâts sont estimés à une vingtaine de mille francs."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits divers",
    "title": "Meurtre à Romainville",
    "summary": "Une querelle amoureuse à Romainville a tourné au drame : lors d'une dispute entre rivaux, Gustave Clément a tiré sur le restaurateur M. Dhondt, grièvement blessé. L'auteur a été arrêté aux Lilas.",
    "paragraphs": [
      "Une jeune fille de Romainville, Marthe R., était courtisée par deux hommes : François Chaire et Georges Fèvre. Une violente querelle a éclaté entre les deux rivaux, au cours de laquelle un ami de Fèvre, Gustave Clément, a fait usage d'un revolver.",
      "M. Dhondt, un restaurateur, a été atteint à la tempe par un projectile. Transporté d'urgence à l'hôpital Tenon, son état demeure préoccupant. Le coupable, Clément, a été arrêté à son domicile des Lilas, où les autorités ont retrouvé l'arme dissimulée dans une cheminée."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits divers",
    "title": "Suicide d'un étudiant en pharmacie",
    "summary": "Le jeune Georges Boussat, étudiant en pharmacie, s'est donné la mort par empoisonnement. Il aurait agi par désespoir à la suite d'un vol mineur de médicaments commis dans un hôpital.",
    "paragraphs": [
      "Un étudiant en pharmacie âgé de vingt ans, Georges Boussat, s'est donné la mort en absorbant du sublimé corrosif. Malgré un transfert rapide vers l'hôpital Bichat, il a succombé peu après son admission.",
      "Une lettre retrouvée sur le corps explique son geste : il souhaitait échapper au déshonneur causé par un vol minime de médicaments dans un hôpital, bien que cet acte n'eût entraîné qu'une légère réprimande de la part de sa hiérarchie."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Faits divers",
    "title": "Accident mortel à Boulogne-sur-Seine",
    "summary": "Jules Colli, employé de commerce, est décédé après une chute tragique en descendant d'un tramway à la porte Maillot. Malgré son transport à l'hôpital de la Charité, il a succombé à ses blessures.",
    "paragraphs": [
      "Jules Colli, employé de commerce âgé de trente-quatre ans et demeurant au 141, rue de l'Université, a été victime d'un tragique accident avant-hier soir. Alors qu'il tentait de descendre du tramway de la porte Maillot au niveau du rond-point du Bois, il est tombé sur la voie et a eu les deux jambes broyées.",
      "Le malheureux a été transporté à l'hôpital de la Charité, où il a rendu le dernier soupir quelques heures plus tard."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Faits divers",
    "title": "Drame passionnel à Courbevoie",
    "summary": "À Courbevoie, le peintre Louis Legrats a violemment agressé Mme Blot à coups de couteau. L'agresseur a été écroué tandis que le pronostic vital de la victime reste engagé.",
    "paragraphs": [
      "À la suite d'une discussion houleuse, un peintre décorateur nommé Louis Legrats, âgé de trente-cinq ans, a agressé hier soir Mme Blot, demeurant 52, boulevard Bineau, lui assénant plusieurs coups de couteau à la gorge et à la poitrine.",
      "Legrats a été immédiatement arrêté et conduit au Dépôt. L'état de la blessée, dont les jours sont menacés, inspire de vives inquiétudes au corps médical."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Faits divers",
    "title": "Cambriolage à Clichy",
    "summary": "Trois jeunes malfaiteurs, Louis Delmont, Gustave Fraud et Victorine Jacquet, ont été appréhendés par la police de Clichy pour le cambriolage du magasin de meubles des époux Lasbat.",
    "paragraphs": [
      "Le commissaire de police a procédé à l'arrestation de trois malfaiteurs : Louis Delmont, dix-sept ans, Gustave Fraud, dix-neuf ans, et la jeune Victorine Jacquet, dix-sept ans. La nuit dernière, ils avaient dévalisé le magasin de meubles des époux Lasbat, situé boulevard Victor-Hugo."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Faits Divers",
    "title": "Cadavre retrouvé sur les voies à Asnières",
    "summary": "À Asnières, le corps d'un homme de trente-cinq ans, M. Cinquin, a été découvert sectionné sur la voie ferrée. L'enquête judiciaire devra établir s'il s'agit d'un accident tragique ou d'un acte criminel.",
    "paragraphs": [
      "Hier matin, vers cinq heures, le chef de gare fut informé que, sur le pont du chemin de fer, se trouvait, en travers de la voie montante, le cadavre d'un homme paraissant âgé de trente-cinq ans, qui avait été coupé en deux.",
      "L'enquête, ouverte par M. Kien, commissaire de police, a établi que le défunt était un nommé Cinquin, demeurant à Paris, 34, rue Legendre.",
      "Dans une des poches du gilet, on a trouvé une dépêche datée de Lyon, le 22 septembre, et signée « Fanny », donnant rendez-vous à Cinquin pour le lendemain soir, à la gare de Lyon, à Paris.",
      "On ignore encore si l'on se trouve en présence d'un crime ou d'un accident. L'enquête suit son cours."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident mortel à Saint-Denis",
    "summary": "Un ouvrier travaillant dans une usine du quartier de la Briche, M. Jules Villette, est décédé après une chute accidentelle de dix mètres à travers une trappe.",
    "paragraphs": [
      "Un ouvrier d'une usine du quartier de la Briche, M. Jules Villette, âgé de quarante-deux ans, transportait hier une plaque en fer lorsqu'il passa accidentellement sur une trappe et chuta d'une hauteur de dix mètres.",
      "Il a succombé peu après son admission à l'hôpital de Saint-Denis."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Faits Divers",
    "title": "Agression à Saint-Maurice",
    "summary": "Un promeneur a été attaqué et dévalisé par sept malfaiteurs sur les bords de la Marne. Grâce à l'intervention du commissaire Parnet, les agresseurs ont été arrêtés en possession d'objets volés.",
    "paragraphs": [
      "Un promeneur, M. Bergetet, demeurant à Paris, rue des Trois-Couronnes, déjeunait hier matin sur les bords de la Marne quand il reçut soudain un coup de bâton sur la tête qui le renversa. Il fut immédiatement entouré par sept individus qui se jetèrent sur lui pour le dévaliser.",
      "Informé de ces faits, M. Parnet, commissaire de police, organisa une battue et réussit à appréhender ces audacieux malfaiteurs, trouvés porteurs d'une quantité d'objets et de bijoux provenant de vols antérieurs.",
      "Ces individus, nommés Louis Lerat (dix-huit ans), Jules Legrand (dix-neuf ans), Vinatier (trente ans), Jean Mège (dix-huit ans), Lucien Tachon (dix-neuf ans), Marc Leleu (vingt-cinq ans) et Jules Gambois (vingt ans), ont été conduits au dépôt."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident grave à Ivry-sur-Seine",
    "summary": "Un journalier travaillant dans un jardin près du fort d'Ivry a fait une chute de douze mètres dans une carrière. Son état est jugé extrêmement préoccupant par les médecins de l'hospice.",
    "paragraphs": [
      "Un journalier, M. Pierre Varuy, âgé de cinquante et un ans, demeurant boulevard Lamouroux, 128, travaillait hier soir dans un jardin situé près du fort d'Ivry lorsqu'il perdit l'équilibre, tombant à la renverse dans une carrière profonde d'environ douze mètres.",
      "Le malheureux s'est brisé plusieurs côtes et a subi de graves contusions internes. À l'hospice d'Ivry, où il a été transporté, les médecins désespèrent de pouvoir le sauver."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Faits Divers",
    "title": "Mort accidentelle à Saint-Germain-en-Laye",
    "summary": "Un garçon livreur, M. Manley, est décédé des suites d'une chute de sa voiture sur la route de Conflans à Achères alors qu'il était en cours de transfert vers l'hôpital.",
    "paragraphs": [
      "Hier matin, vers sept heures, un garçon livreur nommé Manley, âgé de quarante ans, demeurant 17, rue Sadi-Carnot, à Nanterre, est tombé de sa voiture sur la route de Conflans à Achères.",
      "Il fut d'abord transporté à Conflans ; toutefois, le médecin appelé à lui donner des soins, ayant jugé son état des plus graves, ordonna son transfert à l'hôpital de Saint-Germain. Malheureusement, le blessé a expiré pendant le trajet."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Faits Divers",
    "title": "Suicide à Pontoise",
    "summary": "Une triste nouvelle nous parvient de Marines, près de Pontoise : Mme veuve Constance Charpentier, rentière de soixante-deux ans, a mis fin à ses jours par pendaison à son domicile.",
    "paragraphs": [
      "Mme veuve Constance Charpentier, âgée de soixante-deux ans, rentière à Marines, a été trouvée pendue hier soir dans son appartement."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Faits Divers",
    "title": "Incendie à Corbeil",
    "summary": "Un incendie causé par l'explosion d'une bonbonne de benzine a ravagé l'atelier d'un teinturier à Brunoy. Le propriétaire, M. Chichery, a été grièvement blessé en tentant de maîtriser les flammes.",
    "paragraphs": [
      "Un violent incendie s'est déclaré hier à Brunoy, chez M. Chichery, teinturier, rue Montmartel.",
      "Malgré l'arrivée rapide des secours, le feu a détruit l'atelier et deux écuries abritant plusieurs chevaux. Le sinistre avait éclaté à la suite de l'explosion d'une bonbonne de benzine.",
      "M. Chichery, en tentant de combattre les flammes, a été grièvement brûlé au visage. Les pertes matérielles, bien que non encore chiffrées, s'avèrent très importantes."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Économie",
    "title": "Le congrès des grains de Lyon",
    "summary": "Ouverture du congrès annuel des grains à Lyon. Les cours des céréales demeurent fermes et la chambre syndicale de la meunerie s'inquiète des conséquences du projet sur les bons d'importation.",
    "paragraphs": [
      "Lundi s'est ouvert à Lyon le congrès annuel des grains, au milieu d'une affluence considérable. Un grand nombre de représentants de toutes les régions de France y assistaient.",
      "Les blés se sont maintenus fermes : les vendeurs du Bourbonnais demandaient de 19,50 à 20 francs, tandis que ceux de la région réclamaient 19 francs les 100 kilos. Les avoines sont restées stables à 17,25 francs le quintal. L'ensemble des autres céréales a connu une bonne tenue.",
      "La chambre syndicale de la meunerie lyonnaise a tenu son assemblée générale dans la matinée. Le président a attiré l'attention sur les bons d'importation, soulignant le danger que représente ce projet au regard de l'instabilité de notre régime économique actuel."
    ]
  }
];
