// Date: 1901-05-30
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-05-30 (Version Restaurée, 36 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique",
    "title": "La protection des sites pittoresques",
    "summary": "M. Beauquier, député du Doubs, propose un projet de loi instaurant des commissions départementales pour protéger les paysages et sites pittoresques de France contre les dégradations de l'industrie moderne.",
    "paragraphs": [
      "Un projet de loi vient d'être déposé sur le bureau de la Chambre, auquel il faut souhaiter une prise en considération rapide. Il s'agit de la protection des sites pittoresques, l'un des vœux les plus importants exprimés lors du dernier congrès de l'art public.",
      "M. Beauquier, député du Doubs, propose la création, dans chaque département, d'une commission des sites pittoresques. Cette commission dresserait la liste des paysages remarquables de la contrée, dont le classement serait signifié aux propriétaires sans que leur agrément soit nécessaire, moyennant une indemnité si besoin est.",
      "La France possède une beauté physique qui n'a rien à envier aux autres États. Il est impératif de préserver ces paysages, souvent menacés par l'industrie moderne, pour conserver à notre pays tout son charme et son caractère."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Roman-Feuilleton",
    "title": "Le Secret du Masque",
    "summary": "L'auteur Leseigneur recherche activement une interprète pour sa nouvelle pièce. Spohl, charmé par Odette, voit en elle l'ingénue idéale et l'entraîne dans le monde du théâtre pour l'éloigner de ses tourments.",
    "paragraphs": [
      "Le célèbre auteur Leseigneur cherche désespérément une interprète pour sa nouvelle pièce, une ingénue capable de dire naturellement une chose simple. Spohl, épris d'Odette, voit en elle cette merveille introuvable.",
      "Spohl décide de lancer Odette dans une vie brillante et absorbante pour la protéger de ses inquiétudes et de la tentation. Pendant qu'il feuillette un livre avec elle, il lui demande la permission de l'amener le lendemain pour le rôle principal au Théâtre-Moderne."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "L'incident marocain",
    "summary": "Le conflit diplomatique avec le Maroc s'apaise : le gouvernement s'engage à indemniser les victimes de l'assassinat de M. Pouzet, à punir les coupables et à libérer les protégés français.",
    "paragraphs": [
      "L'incident survenu entre la France et le Maroc est en voie d'être réglé. Outre l'indemnité de 100 000 francs versée pour l'assassinat de notre compatriote Pouzet, le gouvernement marocain s'engage à châtier les responsables et à libérer immédiatement les protégés français retenus prisonniers.",
      "Une ambassade marocaine est également prévue à Paris, avant de se rendre à Saint-Pétersbourg."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Au Tonkin : soumission du Detham",
    "summary": "Après des années d'insaisissable guérilla au Tonkin, le célèbre pirate Detham a fait sa soumission officielle auprès de M. Morel au poste de Nhanam, mettant fin à une longue période d'instabilité.",
    "paragraphs": [
      "Le courrier de Chine apporte la nouvelle de la soumission définitive du Detham, ce pirate insaisissable qui a sévi pendant des années au Tonkin, entre les mains de M. Morel, inspecteur des services civils.",
      "Après des années de lutte infructueuse, le Detham s'est présenté seul au poste de Nhanam pour faire sa soumission, marquant ainsi la fin d'une période troublée de l'histoire du Tonkin."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Assassinat au Bois de Vincennes",
    "summary": "Une violente agression à l'arme blanche a frappé deux cyclistes au Bois de Vincennes. Les autorités prévoient des battues pour déloger les bandes de vauriens qui rançonnent désormais les passants.",
    "paragraphs": [
      "Un entrepreneur de maçonnerie, M. Charles Noël, et Mlle Berthe Ruyer ont été victimes d'une audacieuse tentative d'assassinat au Bois de Vincennes. Attaqués par des individus alors qu'ils circulaient à bicyclette, ils ont été grièvement blessés à coups de couteau.",
      "L'enquête révèle que le bois est fréquenté par des bandes de vauriens utilisant des obstacles sur la route pour dévaliser les passants. Des battues sont prévues pour nettoyer la zone."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le Crime de Corancez",
    "summary": "Le magistrat instructeur de Chartres poursuit ses auditions dans l'affaire Brierre. De nouveaux témoins ont identifié des objets dérobés, confirmant l'atrocité du crime commis contre les victimes.",
    "paragraphs": [
      "Le juge d'instruction de Chartres poursuit activement ses auditions dans la ténébreuse affaire Brierre. De nouveaux témoins ont identifié, sans l'ombre d'un doute, des objets saisis au domicile de l'inculpé comme appartenant à la famille des victimes.",
      "Les dépositions des voisins, qui furent les premiers à découvrir les corps des enfants, confirment l'indicible horreur de la situation, tandis que de nouvelles confrontations sont attendues sous peu par le parquet."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le Mort-Vivant",
    "summary": "Une invraisemblable erreur administrative a conduit à la déclaration de décès d'un maçon bien vivant. L'homme s'est présenté à la mairie pour faire rectifier son état civil.",
    "paragraphs": [
      "Un maçon nommé François Pugnat s'est présenté à la mairie du quatorzième arrondissement pour réclamer, avec une indignation compréhensible, l'annulation de son acte de décès, enregistré par une déplorable erreur administrative.",
      "L'homme, pourtant bien vivant et en pleine santé, avait été déclaré décédé à l'hôpital Broussais, causant une vive stupeur et un émoi légitime parmi ses proches et ses compagnons de travail."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "La Recluse de Poitiers : Mlle Blanche Monnier",
    "summary": "À Poitiers, le sort de Mlle Blanche Monnier, sauvée de sa claustration, suscite une profonde émotion. La convalescente découvre le monde extérieur alors que l'enquête familiale se poursuit.",
    "paragraphs": [
      "L'émotion reste particulièrement vive à Poitiers suite aux révélations tragiques sur l'affaire de la rue de la Visitation. Mlle Blanche Monnier, libérée de sa longue et atroce claustration, manifeste des signes de rétablissement physique et mental encourageants.",
      "La malheureuse découvre les merveilles du monde extérieur avec une innocence presque enfantine. Pendant ce temps, les autorités judiciaires poursuivent activement l'enquête sur les circonstances abominables de cette captivité et la responsabilité accablante de sa famille."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident de chemin de fer près de Brou",
    "summary": "Un choc violent entre deux convois ferroviaires à la gare de Brou a causé des blessures à trois agents et la perte d'un important cheptel. Une instruction est en cours.",
    "paragraphs": [
      "Un tamponnement violent entre un train de marchandises et un train de ballast s'est produit aux abords de la gare de Brou. Trois cheminots ont été blessés lors du choc et une vingtaine de veaux ont péri dans l'accident.",
      "Une enquête judiciaire a été immédiatement ouverte afin de déterminer les causes et les responsabilités précises de ce regrettable événement ferroviaire."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'orage à Paris",
    "summary": "Un violent orage a causé de nombreuses inondations à Paris, tandis qu'une explosion survenue rue du Louvre a semé l'inquiétude parmi la population parisienne.",
    "paragraphs": [
      "Un violent orage s'est abattu sur Paris, provoquant d'importantes inondations dans les voies publiques et les sous-sols. De nombreux appels de détresse ont été adressés aux sapeurs-pompiers pour des caves envahies par les eaux pluviales.",
      "Parallèlement, une explosion s'est produite dans une bouche d'air comprimé rue du Louvre. Bien qu'elle n'ait fait aucune victime, cette détonation a causé une vive émotion au sein de la population environnante."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Conséquences des inondations dans Paris",
    "summary": "Paris subit de graves inondations : le square Saint-Jacques est envahi, la circulation ferroviaire est interrompue à la gare d'Orléans et plusieurs immeubles s'effondrent dans les 5e, 6e et 13e arrondissements.",
    "paragraphs": [
      "Le square de la Tour-Saint-Jacques et les sous-sols du monument ont été envahis par les eaux. On signale dans le cinquième arrondissement que l'eau a envahi de nombreux immeubles et que l'irruption sur la voie ferrée du chemin de fer d'Orléans, gare du quai Saint-Michel, a obligé la compagnie à interrompre la marche des trains.",
      "Devant le numéro 1 de la rue du Lyonnais, une marchande des quatre-saisons, Mme Bourdon, a été renversée par la crue sur la chaussée. À l'angle de la rue Mouffetard et de la rue Broca, l'envahissement de l'eau a été si rapide qu'il a fallu prendre des mesures préservatrices pour plusieurs immeubles.",
      "Dans le quartier de la Monnaie, au sixième arrondissement, les caves des rues des Grands-Augustins, de Savoie, du Pont-de-Lodi et du Luxembourg, ainsi que les sous-sols du lycée Fénelon, ont été complètement inondés. Les sous-sols de l'ambassade d'Allemagne, rue de Lille, ont été également inondés.",
      "Dans le treizième arrondissement, un certain nombre de maisons ont été fortement endommagées, notamment celles situées 95, rue de la Glacière, où un bâtiment comprenant des ateliers et un séchoir de mégisserie s'est effondré en partie, ainsi qu'aux 151, boulevard d'Italie et 5 et 9, rue de Bellièvre."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incident à la Halle aux Vins",
    "summary": "La Halle aux Vins a subi d'importantes inondations nécessitant une intervention nocturne des pompiers, tandis qu'une péniche chargée de bois a sombré le long du quai.",
    "paragraphs": [
      "À la Halle aux vins, les dégâts sont importants. Les pompiers ont travaillé pendant une partie de la nuit à épuiser l'eau qui avait pénétré dans les sous-sols.",
      "Enfin, à trois heures quarante-cinq, la péniche La Montagne, appartenant à M. Boizancé et chargée de bois, qui était amarrée au quai, a sombré."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Inondations dans le Xe Arrondissement",
    "summary": "Le quai Jemmapes est submergé par une crue atteignant un mètre par endroits. Les commerçants tentent désespérément de protéger leurs marchandises avec des planches de fortune.",
    "paragraphs": [
      "Toute la partie du quai Jemmapes, comprise entre la rue Alibert et la rue Grange-aux-Belles, a été inondée, et dans certains endroits, la hauteur de l'eau atteignait un mètre. Les commerçants du quartier ont dû, en toute hâte, barricader leurs boutiques à l'aide de planches pour tenter de garantir quelque peu leurs marchandises contre l'invasion d'une nappe d'eau."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Actualité",
    "title": "L'Exposition d'Horticulture sous les eaux",
    "summary": "Un violent orage a transformé l'Exposition d'Horticulture des Tuileries en champ de ruines. Les serres sont inondées, forçant les visiteurs à évacuer dans la précipitation.",
    "paragraphs": [
      "Pour son premier jour d'ouverture, l'exposition d'horticulture installée dans le jardin des Tuileries n'a vraiment pas eu de chance, car l'orage a mis la plus grande partie des serres sous l'eau. La partie de l'exposition en bordure de la rue de Rivoli a été littéralement mise en eau, atteignant dans certains pavillons une hauteur de cinquante centimètres.",
      "L'inondation s'est produite de façon soudaine, des planches et des débris de matériaux ayant obstrué les bouches d'égout dès le début de l'orage. Les visiteurs ont fui rapidement et se sont précipités sous la grande tente principale, occasionnant des dégâts importants aux plates-bandes, arbustes et fleurs."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Informations Techniques",
    "title": "Perturbations des lignes téléphoniques",
    "summary": "Les inondations causent des pannes téléphoniques majeures à Paris. Le ministère des Postes et Télégraphes travaille au rétablissement des lignes malgré les conduites souterraines endommagées.",
    "paragraphs": [
      "L'inondation des équipements a rendu muet un certain nombre de lignes téléphoniques. Bien que le ministère des Postes et Télégraphes s'efforce de rétablir les communications, il est à craindre que certains abonnés ne soient privés pendant un jour ou deux de l'usage du téléphone en raison de la rupture des conduites souterraines."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique",
    "title": "Travaux parlementaires",
    "summary": "Reprise des séances à la Chambre et au Sénat. Au programme des débats législatifs : la loi relative aux accidents du travail et une interpellation concernant les récents troubles universitaires.",
    "paragraphs": [
      "La Chambre et le Sénat ont repris leurs travaux, interrompus par le congé réglementaire. L'ordre du jour de la Chambre appelle, en priorité, la suite de la discussion sur la loi relative aux accidents du travail, ainsi que l'interpellation de M. Monnaud au sujet des troubles survenus à l'université."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique",
    "title": "La commission de l'impôt sur le revenu",
    "summary": "Sous la présidence de M. Bouvier, la commission a délibéré sur le rapport de M. Merlou, qui préconise l'instauration d'un impôt sur le revenu fondé sur des principes de statistique et de répartition.",
    "paragraphs": [
      "La commission de l'impôt sur le revenu s'est réunie, sous la présidence de M. Bouvier, afin de se prononcer sur les conclusions du rapport de M. Merlou. Ce dernier propose à la Chambre l'adoption d'un impôt sur le revenu conçu sous le caractère d'un impôt de statistique et de répartition."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Économie",
    "title": "La question des mines",
    "summary": "M. Dubief, président de la commission parlementaire du travail, dresse un état des lieux préoccupant du secteur minier, marqué par une gestion défaillante et de nombreuses concessions abandonnées.",
    "paragraphs": [
      "M. Dubief, président de la commission parlementaire du travail, a présenté un exposé détaillé sur la situation des concessions minières. Il ressort de cette étude qu'il existe, à l'heure présente, sur le territoire national, un nombre considérable de concessions délaissées ou exploitées sans rationalité."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Politique Coloniale",
    "title": "Les chemins de fer du Tonkin",
    "summary": "M. Doumer, gouverneur général de l'Indo-Chine, s'est entretenu avec le groupe colonial du Sénat sur les projets ferroviaires au Tonkin et au Yunnan, cruciaux pour le rayonnement des intérêts français.",
    "paragraphs": [
      "M. Doumer, gouverneur général de l'Indo-Chine, s'est rendu hier au Sénat pour être entendu par le groupe colonial. Il a exposé les enjeux de la construction de lignes ferrées au Tonkin ainsi qu'au Yunnan, soulignant l'importance de ces infrastructures pour défendre les intérêts français en Extrême-Orient."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "La guerre au Transvaal",
    "summary": "Les offensives contre Botha marquent le pas. Dans la colonie du Cap, le réseau ferré est paralysé, tandis qu'à Londres, les opposants à l'annexion des Républiques sud-africaines multiplient les protestations.",
    "paragraphs": [
      "Les nouvelles parvenues de La Haye confirment que les dernières opérations militaires dirigées contre Botha ont subi des échecs. Dans la colonie du Cap, la situation s'aggrave, le trafic des trains anglais étant désormais gravement entravé.",
      "À Londres, lors d'une réunion des partisans des Boers, une motion de protestation unanime a été adoptée contre l'annexion des Républiques sud-africaines, ainsi que contre le traitement réservé aux femmes et aux enfants dans les camps."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Faits divers à Joinville-le-Pont",
    "summary": "À Joinville-le-Pont, le jeune Désiré Noose a été sauvé de la noyade par M. Jean Bruelle. Simultanément, une femme tentant de se suicider dans la Marne a été secourue in extremis par M. Dufaure près de l'île de Fanac.",
    "paragraphs": [
      "À Joinville-le-Pont, le petit Désiré Noose, âgé de six ans, est tombé à l'eau et a failli se noyer. Un mécanicien, M. Jean Bruelle, s'est précipité et est parvenu à le retirer du courant. L'enfant a été ramené chez ses parents dans un état alarmant.",
      "Au même moment, Mme Marie Dupont s'est jetée dans la Marne près de l'île de Fanac. Elle a été secourue par M. Dufaure qui a réussi à la ramener sur la berge avant qu'il ne soit trop tard."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Vie Présidentielle",
    "title": "Visite du Président à l'Exposition d'Horticulture",
    "summary": "M. Émile Loubet, Président de la République, a honoré de sa présence l'Exposition d'horticulture des Tuileries. Accueilli par le ministre de l'Agriculture, il a récompensé plusieurs exposants avant de regagner l'Élysée.",
    "paragraphs": [
      "Le Président de la République, M. Émile Loubet, s'est rendu ce jour à l'exposition d'horticulture organisée dans le jardin des Tuileries. Accueilli par le ministre de l'Agriculture, il a longuement admiré les merveilles florales présentées et a remis plusieurs décorations aux exposants, professionnels comme amateurs, avant de regagner le palais de l'Élysée."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits Divers",
    "title": "Tentative de meurtre à Charenton",
    "summary": "À Charenton, un drame a été évité de justesse : un domestique a tenté d'assassiner la femme de ménage de la maison, Marie Lantard, après avoir été confondu pour des vols répétés.",
    "paragraphs": [
      "À Charenton, un valet de chambre a tenté d'assassiner la femme de ménage, Marie Lantard, à la suite d'une violente dispute provoquée par la découverte de vols commis par le domestique dans la maison de ses maîtres. La police est immédiatement intervenue pour ouvrir une enquête sur ces faits graves."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Sport",
    "title": "Course Paris-Bordeaux et Coupe Gordon Bennett",
    "summary": "L'actualité sportive est vivement animée par les grandes compétitions automobiles : les concurrents de la course Paris-Bordeaux sont en route, tandis que ceux de la Coupe Gordon Bennett ont pris le départ pour Lyon.",
    "paragraphs": [
      "La double épreuve automobile qui se déroule aujourd'hui constitue le principal sujet de conversation des amateurs de sport. Les coureurs ont pris le départ tôt ce matin en direction de Bordeaux, tandis que les concurrents engagés dans la Coupe Gordon Bennett s'élançaient vers Lyon."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Sport",
    "title": "Compte-rendu de la course automobile Paris-Bordeaux",
    "summary": "La course Paris-Bordeaux a livré son verdict. Dans une performance remarquable, les pilotes ont rallié l'arrivée en moins de neuf heures, marquant une progression notable pour l'automobilisme.",
    "paragraphs": [
      "De nombreux spectateurs ont assisté à l'arrivée de la course automobile Paris-Bordeaux. Les concurrents, venus de toutes les régions, ont bravé la route à des allures impressionnantes.",
      "Le premier pilote est arrivé aux Quatre Pavillons, à quelques kilomètres de Bordeaux, couvrant la distance en environ 8 heures et 44 minutes, une moyenne des plus remarquables pour l'époque.",
      "Des classements officiels ont été établis pour les divers concurrents, parmi lesquels figurent les noms renommés de Girardot, Charron, Levesque et Maurice Farman."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Politique",
    "title": "Déplacements officiels et activités ministérielles",
    "summary": "Le Président de la République se rendra samedi à Saint-Cyr. Le ministre des Affaires étrangères, M. Delcassé, est rentré à Paris, tandis que ses collègues de la Guerre et des Travaux publics poursuivent leurs activités.",
    "paragraphs": [
      "Le Président de la République se rendra samedi à l'École spéciale militaire de Saint-Cyr pour une visite à caractère officiel.",
      "M. Delcassé, ministre des Affaires étrangères, est rentré à Paris après un court repos. De son côté, le ministre de la Guerre se rendra à Douai pour remettre des prix aux lauréats des écoles.",
      "M. Baudin, ministre des Travaux publics, a visité l'École des Mines afin de constater le développement de l'établissement et d'étudier la nécessité d'agrandissements futurs."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Social",
    "title": "Manifeste aux travailleurs syndiqués",
    "summary": "Un manifeste des organisations syndicales, dont les tullistes et les mineurs, appelle à privilégier l'union des Bourses du travail plutôt que l'action parlementaire pour obtenir l'émancipation ouvrière.",
    "paragraphs": [
      "Un manifeste a été publié par plusieurs organisations syndicales, notamment les tullistes de Calais et les mineurs de Montceau, critiquant le manque de coordination entre les travailleurs sur le terrain économique.",
      "Le document exhorte les travailleurs à privilégier l'union des organisations syndicales et le renforcement des Bourses du travail, plutôt que la voie purement parlementaire, jugée insuffisante pour leur émancipation."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents divers en région parisienne",
    "summary": "Une série d'accidents frappe la capitale et sa banlieue : électrocution près de la Concorde, accidents de circulation à Bois-Colombes et Neuilly, et un éboulement grave survenu à Clichy.",
    "paragraphs": [
      "Un wattman nommé Surugue, âgé de vingt-quatre ans, a été terrassé par un court-circuit sur son tramway près du pont de la Concorde. L'enquête préliminaire privilégie l'hypothèse de l'inexpérience.",
      "À Bois-Colombes, la petite Juliette Bonredon, âgée de cinq ans, a été renversée par une voiture de livraison boulevard Victor-Hugo. L'enfant a été transportée à l'hôpital dans un état jugé grave.",
      "À Clichy, un ouvrier terrassier a été enseveli sous un éboulement boulevard Victor-Hugo ; il souffre de blessures graves nécessitant des soins urgents.",
      "À Neuilly-sur-Seine, un cheval emballé a causé un accident de tramway rue du Château, blessant grièvement le garçon livreur Alexandre Joseph."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enquêtes judiciaires",
    "summary": "Le magistrat instructeur Lemercier poursuit une affaire de vol dans le dixième arrondissement, tandis que le juge Leydet procède à des arrestations dans le cadre d'une enquête sur des détournements.",
    "paragraphs": [
      "M. Lemercier, juge d'instruction, mène actuellement des investigations sur un vol commis au préjudice de M. Dechomme, négociant, dans le dixième arrondissement de Paris.",
      "M. Leydet, juge, poursuit les investigations concernant des détournements de fonds et a procédé à l'arrestation de plusieurs personnes impliquées dans cette affaire."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Théâtre",
    "title": "Courrier des théâtres",
    "summary": "L'actualité théâtrale parisienne est marquée ce soir par la représentation de la nouvelle pièce de M. Henri Lavedan à l'Athénée et une matinée de bienfaisance aux Variétés.",
    "paragraphs": [
      "La pièce intitulée 'Pour le monde', signée de M. Henri Lavedan, sera représentée ce soir sur la scène de l'Athénée.",
      "Aux Variétés, une matinée extraordinaire est organisée ce jour au profit de la caisse des écoles et du secours aux indigents."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Concerts",
    "title": "Programmes des concerts publics",
    "summary": "Retrouvez le programme des concerts donnés par les régiments de ligne sur les places et dans les squares parisiens, mettant à l'honneur Gounod, Bizet et Saint-Saëns sous la direction des chefs de musique.",
    "paragraphs": [
      "Paris, Place de la Nation : Régiment de ligne, chef M. Suzanne. Au programme : Cyrano (Allier), Faust (Gounod), Marche bonapartiste (Chélard), Werther (Massenet), Polka des officiers (Fahrbach).",
      "Square des Batignolles : Régiment de ligne, chef M. Vidal. Au programme : Stradivarius (Pirotta), Ouverture de Timoléon, Mélodie Valse (Bucalossi), Marche aux Flambeaux (Meyerbeer), Petite Souris (Bosc).",
      "Square d'Anvers : Régiment de ligne, chef M. André. Au programme : Marche des Saltimbanques (P. André), L'Arlésienne (Bizet), Samson et Dalila (Saint-Saëns), Gavotte des Petites Princesses (P. André).",
      "Passy-Tunbridge : Régiment de ligne, chef M. V. Bonnette. Au programme : Le Houzard (V. Bonnette), Ouverture de la Muette de Portici (Auber), Gavotte des Petites Princesses (P. André), Le Prophète (Meyerbeer), L'Auvergnate (L. Ganne)."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Jardin Zoologique",
    "title": "Concert au Jardin d'Acclimatation",
    "summary": "Le Jardin d'Acclimatation convie le public à un concert dirigé par M. C. Bourdeau. En cas d'intempéries, les mélomanes trouveront refuge sous la structure du Palmarium.",
    "paragraphs": [
      "Aujourd'hui jeudi, au Jardin d'Acclimatation, à 14 heures, en plein air au kiosque de la musique ou, en cas de pluie, dans le Palmarium. Le concert sera dirigé par M. C. Bourdeau.",
      "Première partie : Ronde des Marcheurs (Allier), L'Hiver (Waldteufel), Ouverture du Cheval de Bronze (Auber).",
      "Deuxième partie : Chant de gloire (G. Marie), Ouverture de Stradella (Flotow), Plantino (Mayeur), Robert le Diable (Meyerbeer), Polka des revolvers (L. Mayeur)."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Feuilleton",
    "title": "Roman (Suite)",
    "summary": "Le baron, apaisé par la présence de Lucien, s'inquiète toutefois de l'influence mystérieuse du prince Loranoff, dont les attentions marquées envers la jeune Renée suscitent de vives appréhensions.",
    "paragraphs": [
      "Le baron, conscient de la situation avec Renée, semblait soulagé par l'arrivée de Lucien. Il ne cherchait plus que sa tranquillité, ses flâneries et ses causeries.",
      "Lucien, de son côté, observait la présence du prince Loranoff, un individu mystérieux qui courtisait Renée. Ce dernier jouait un rôle de grand seigneur, éveillant chez le baron une vanité qui inquiétait Lucien et son père, Roger de Sartys.",
      "Le mystère entourant les origines et la fortune du prince Loranoff restait entier, alimentant les soupçons et les inquiétudes des Sartys quant aux intentions du prétendant envers la jeune fille."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Cours et Marchés",
    "summary": "Relevé des cours officiels des denrées : cotations de la fécule, fixation des prix pour les suifs fondus, et rapports sur les transactions des céréales et des cotons.",
    "paragraphs": [
      "Amidon et Fécules : On cote la fécule 1er grain à Paris, selon le cours officiel du disponible.",
      "Suifs : Le cours officiel des suifs frais fondus est fixé à 61 francs les 100 kilos.",
      "Blés et Grains : Cours des blés indigènes, de l'avoine et des issues, tels qu'établis gare de Paris.",
      "Coton et Cafés : Rapports du Havre sur les cotations du coton et des cafés ordinaires."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Informations et Avis",
    "title": "Association Polymathique",
    "summary": "L'Association Polymathique, située rue Edmond-Guillout, dispense un enseignement technique gratuit et ouvre une section dédiée aux nouvelles pratiques du cyclisme et de l'automobilisme.",
    "paragraphs": [
      "L'Association Polymathique, œuvre gratuite d'enseignement technique et professionnel, dont le siège est situé 7, rue Edmond-Guillout à Paris, prépare aux examens des grandes administrations de l'État et des sociétés de crédit.",
      "Une section dédiée à l'enseignement du cyclisme et de l'automobilisme fonctionne à l'école communale de la rue de Florence."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Spectacles",
    "title": "Programme des théâtres du 30 mai 1899",
    "summary": "Découvrez le programme théâtral parisien pour la soirée du 30 mai 1899, mettant à l'affiche les grandes œuvres classiques et lyriques de l'Opéra, du Français, de l'Opéra-Comique, du Vaudeville et du Châtelet.",
    "paragraphs": [
      "Opéra : Les Maîtres Chanteurs.",
      "Théâtre-Français : Le Misanthrope.",
      "Opéra-Comique : Faust.",
      "Vaudeville : Cyrano de Bergerac.",
      "Théâtre du Châtelet : Le Tour du Monde en quatre-vingts jours."
    ]
  }
];
