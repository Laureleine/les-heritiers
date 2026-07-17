// Date: 1900-06-23
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-06-23 (Version Restaurée, 34 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Actualités",
    "title": "Acompte sur dividende de la Société du Petit Parisien",
    "summary": "La Société du Petit Parisien informe ses actionnaires de la mise en paiement d'un acompte sur dividende à partir du 1er juillet prochain, à percevoir à la caisse sociale de la rue d'Enghien.",
    "paragraphs": [
      "Les porteurs de titres de la Société du Petit Parisien sont informés qu'un acompte sera mis en paiement, à partir du 1er juillet prochain, à la caisse sociale, située rue d'Enghien.",
      "Il sera payé net d'impôt en échange du coupon n° 40 pour chaque titre nominatif, ou à raison de 3 fr. 31 pour chaque titre au porteur."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Éditorial",
    "title": "Marc Seguin et l'Exposition",
    "summary": "L'Exposition universelle est l'occasion de rendre un hommage national à Marc Seguin, inventeur de la chaudière tubulaire, dont le génie a durablement transformé l'industrie des chemins de fer.",
    "paragraphs": [
      "On peut déjà affirmer que l'Exposition marque le point culminant des recettes obtenues jusqu'à ce jour par nos compagnies de chemins de fer. Jamais les trains n'apportèrent un tel flux de voyageurs à Paris.",
      "Rendre hommage à Marc Seguin, inventeur de la chaudière tubulaire, en installant sa statue à l'annexe de l'Exposition à Vincennes, est un devoir national que le moment présent permet enfin de réaliser.",
      "La vie de Marc Seguin, depuis ses débuts à Paris auprès de son oncle Montgolfier jusqu'à ses inventions révolutionnaires dans le domaine de la vapeur et des chemins de fer, témoigne d'un génie infatigable qui a transformé le monde.",
      "Stephenson lui-même, l'inventeur de la locomotive, devait son succès à cette découverte. Seguin, travailleur modeste et philanthrope, a laissé derrière lui un héritage de progrès incessant."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits divers",
    "title": "Drame sanglant rue Saint-Nicolas",
    "summary": "Un tragique fait divers s'est déroulé dans une brasserie de la rue Saint-Nicolas : le soldat Alexandre Pomarède a été mortellement blessé par un employé de café, Auguste Mullot, désormais écroué.",
    "paragraphs": [
      "La brasserie de l'Exposition, située au 15, rue Saint-Nicolas, a été le théâtre d'un drame sanglant avant-hier soir, au cours duquel un soldat, Alexandre Pomarède, a trouvé la mort.",
      "À la suite de plaisanteries répétées et d'une vive altercation, Auguste Mullot, employé de café, a tiré sur Pomarède avec un pistolet chargé à plomb, le blessant mortellement à la gorge.",
      "Le meurtrier, qui avait pris la fuite, a été arrêté vers trois heures du matin par le commissaire Brunet. Il a manifesté un profond repentir lors de son interrogatoire."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des ministres",
    "summary": "Sous la présidence de M. Loubet, le Conseil des ministres s'est réuni à l'Élysée pour honorer la mémoire du comte Mouravieff et examiner les dossiers diplomatiques en cours.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin à l'Élysée, sous la présidence de M. Loubet. Le ministre des Affaires étrangères a exprimé les regrets du gouvernement suite à la disparition du comte Mouravieff.",
      "Le Conseil a également abordé les questions d'actualité, notamment la situation en Chine et les mesures à prendre devant la Chambre des députés."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "L'Amnistie et le droit d'enseignement",
    "summary": "La commission d'amnistie réclame une mesure générale, tandis que M. Waldeck-Rousseau travaille à restreindre le droit d'enseigner pour les congrégations non autorisées.",
    "paragraphs": [
      "Une longue discussion s'est engagée devant la commission d'amnistie, qui a finalement proposé à la Chambre de voter une résolution invitant le gouvernement à déposer un projet d'amnistie plénière.",
      "Concernant le droit d'enseignement, M. Waldeck-Rousseau a été entendu par la commission des associations. Il a été décidé d'intégrer la proposition de M. Rabier, visant à restreindre le droit d'enseigner des congrégations non autorisées, au projet d'ensemble sur le droit d'association."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "International",
    "title": "La mort du comte Mouravieff",
    "summary": "Le comte Mouravieff, ministre des Affaires étrangères, a succombé à Saint-Pétersbourg à une congestion cérébrale. M. de Lamsdorf est appelé à assurer l'intérim, semant l'émoi dans les chancelleries européennes.",
    "paragraphs": [
      "Le comte Mouravieff est décédé subitement à Saint-Pétersbourg, victime d'une congestion cérébrale. Cette disparition soudaine a causé une vive émotion dans les milieux diplomatiques de toutes les capitales.",
      "M. de Lamsdorf a été nommé, par mesure d'urgence, gérant provisoire du ministère des Affaires étrangères."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits divers",
    "title": "Incendies en banlieue",
    "summary": "Une série de sinistres frappe la banlieue : un atelier de construction navale détruit à Saint-Maur, un incendie à la boulangerie Pinault de Maisons-Alfort, et une explosion préoccupante à Montreuil-sous-Bois.",
    "paragraphs": [
      "Un incendie, d'origine vraisemblablement criminelle, a entièrement ravagé un important atelier de construction de bateaux à Saint-Maur-des-Fossés, causant des pertes matérielles considérables.",
      "Un autre sinistre, d'origine accidentelle cette fois, a éclaté dans la boulangerie Pinault, sise à Maisons-Alfort, nécessitant trois heures de lutte acharnée de la part des sapeurs-pompiers.",
      "À Montreuil-sous-Bois, la situation demeure extrêmement tendue suite à une violente explosion ; l'état des victimes transportées à l'hôpital reste, selon les dernières nouvelles, fort préoccupant."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "International",
    "title": "La situation en Chine",
    "summary": "La Chine s'enflamme : le quartier étranger de Tien-Tsin est pilonné et Pékin est coupé du monde. Les puissances occidentales et le Japon organisent dans l'urgence le déploiement de colonnes de secours.",
    "paragraphs": [
      "La situation en Chine prend un tour de plus en plus grave. Le quartier étranger de Tien-Tsin a été la cible d'un bombardement nourri par les troupes chinoises. Depuis plus d'une semaine, aucune nouvelle de Pékin ne parvient aux autorités et aux chancelleries.",
      "Une colonne internationale a pris le départ de Tang-Kou afin de secourir Tien-Tsin. Les puissances étrangères, parmi lesquelles l'Angleterre, le Japon et l'Allemagne, accélèrent leurs préparatifs militaires pour renforcer leurs effectifs sur place."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Feuilleton",
    "title": "La Main Gauche",
    "summary": "Disparition mystérieuse du comte de Terrique au soir de ses noces : une énigme qui plonge l'épouse et la famille dans le désarroi total, entre espoir de le retrouver et crainte de l'irréparable.",
    "paragraphs": [
      "La disparition inexpliquée du comte de Terrique, survenue au soir même de ses noces, jette Odette et sa famille dans une angoisse profonde. Malgré les recherches incessantes de son frère Gaston, aucune trace du marié n'est retrouvée, laissant planer le doute entre l'accident, la fuite volontaire ou l'assassinat."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "La position de la France vis-à-vis de l'Angleterre et de la Russie",
    "summary": "La France doit consolider son alliance avec la Russie dans le Pacifique pour contrer les desseins britanniques, au lieu de maintenir une politique hostile qui dessert ses intérêts nationaux.",
    "paragraphs": [
      "La France ne se trouve réellement pas en avantage face aux desseins de l'Angleterre. Elle dispose pourtant d'un allié naturel en la Russie dans le bassin de l'océan Pacifique. Par conséquent, il est impérieux pour elle de se rapprocher de cette dernière, plutôt que de persister dans une attitude hostile qui, en fin de compte, ne profite qu'aux visées britanniques."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Chambre des Députés",
    "title": "Séance du vendredi 22 juin : Contrôle des chemins de fer à voie étroite",
    "summary": "La Chambre débat sur le décret du 13 février 1900 concernant les chemins de fer secondaires. M. Baudlin, ministre des Travaux publics, promet un projet de loi pour préserver les prérogatives des conseils généraux.",
    "paragraphs": [
      "La Chambre aborde la discussion de l'interpellation de M. Guillamet sur le décret du 13 février 1900, lequel retire aux conseils généraux le droit de nommer les agents chargés du contrôle de leurs chemins de fer à voie étroite.",
      "M. Guillamet soutient que ce décret, qui confie désormais le contrôle à des agents issus du service des Ponts et Chaussées ou des Mines, contrevient aux lois existantes. De nombreux conseils généraux ont protesté énergiquement, rappelant qu'aux termes des lois du 12 juillet 1865, du 10 août 1870, du 31 août 1871 et du 11 juin 1880, ils possèdent le droit exclusif de nomination de ces agents.",
      "M. Pérou, directeur des chemins de fer, réplique que la question est d'ordre strictement juridique et que le décret s'y est conformé. M. Baudlin, ministre des Travaux publics, précise que si la Chambre souhaite que les conseils généraux règlent ce service, il ne s'y opposera pas et présentera un projet de loi en ce sens. L'ordre du jour de M. Guillamet est finalement adopté."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Économie",
    "title": "Interpellation sur les abus dans le marché des laines",
    "summary": "M. Mirman interroge le gouvernement sur les spéculations du marché à terme des laines à Roubaix. Face aux abus, des mesures législatives sont réclamées pour protéger le labeur des industriels et ouvriers.",
    "paragraphs": [
      "La Chambre aborde l'interpellation de M. Mirman concernant les mesures que le gouvernement envisage de prendre pour mettre fin aux abus constatés sur le marché à terme des laines à Roubaix.",
      "M. Mirman expose que tant les ouvriers que les patrons réclament la protection de leur labeur contre la spéculation d'un groupe de financiers. La spéculation, à la hausse comme à la baisse, fausse les cours et rend les fabricants particulièrement vulnérables. Il conclut à la nécessité de supprimer ce marché à terme, à l'instar de ce qui a été réalisé en Allemagne.",
      "M. Amédée Ralliet souligne qu'une telle mesure requiert l'adoption d'une loi et suggère, dans l'immédiat, d'agir sur la caisse de liquidation de Roubaix afin d'éviter que les cours ne soient artificiellement faussés. La suite de la discussion est renvoyée au vendredi prochain."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Conflit sur les horaires et conditions des exposants",
    "summary": "Le conflit entre l'administration de l'Exposition et les exposants persiste concernant la fermeture tardive. Les exposants refusent la mesure et réclament de meilleures conditions de travail pour les gardiens.",
    "paragraphs": [
      "Le règlement concernant la fermeture des galeries à sept heures est loin d'être clos, M. Picard n'ayant pu se résoudre à laisser sa circulaire lettre morte. Les exposants ont constitué un comité de défense pour manifester leur intention de ne pas se conformer aux avertissements de l'administration sur cette fermeture tardive.",
      "Les exposants entendent fermer leurs stands à six heures du soir, conformément aux usages passés. M. Picard menace de supprimer les récompenses, mais les exposants rétorquent que cette décision appartient au jury. Par ailleurs, les gardiens de sections travaillant quinze heures par jour pour un salaire de 5 à 6 francs, il serait impératif de les indemniser plus équitablement."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Vie Artistique",
    "title": "Les écoles professionnelles d'arts décoratifs",
    "summary": "Après une période de transition marquée par la copie servile, les arts décoratifs français se tournent désormais vers l'observation de la nature pour forger un nouveau style plus libre.",
    "paragraphs": [
      "Un mouvement profond a bouleversé les industries de la verrerie, de la céramique, de la bijouterie et de l'ébénisterie au cours de ces dernières années. Les artistes modernes ont cherché à s'affranchir de la copie servile des styles anciens.",
      "Malgré des tentatives parfois empreintes de bizarrerie ou d'excès, un réel effort vers un art plus libre a vu le jour. Ce mouvement semble désormais s'être assagi et puise désormais dans l'observation de la nature les motifs décoratifs nécessaires à l'élaboration d'un nouveau style."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "La fête de nuit à l'Exposition",
    "summary": "La soirée de gala à l'Exposition a ébloui les visiteurs par ses illuminations. Toutefois, l'innovation des orchestres déambulatoires est critiquée par le public qui préfère le kiosque central.",
    "paragraphs": [
      "Le deuxième vendredi de gala a offert aux visiteurs une soirée féerique, sublimée par le Château d'Eau et le palais de l'Électricité. Une innovation originale consistait à faire jouer la musique par des orchestres déambulant autour des jardins plutôt que sous le kiosque habituel.",
      "Cette mesure fait l'objet de critiques, car elle fatigue inutilement les musiciens et empêche le public d'écouter les morceaux avec la clarté souhaitée. Il semblerait préférable de revenir au dispositif du kiosque central."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "La Centennale des Voyages",
    "summary": "Au palais du Génie civil, une rétrospective exceptionnelle expose les véhicules historiques, des diligences d'autrefois aux carrosses impériaux, retraçant l'évolution spectaculaire des transports au XIXe siècle.",
    "paragraphs": [
      "Au palais du Génie civil, une exposition rétrospective réunit des véhicules d'autrefois : diligences, chaises de poste et carrosses historiques. Parmi les pièces remarquables figurent la voiture de Napoléon Ier, celle du maréchal Mortier et les berlines utilisées lors des campagnes militaires du Premier Empire.",
      "L'exposition permet de retracer avec précision l'évolution des moyens de transport, des lourdes diligences aux premières voitures automobiles du siècle, offrant aux visiteurs un musée du plus vif attrait historique."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Mouvements et accidents dans l'armée",
    "summary": "Le général de division Borin passe dans la réserve. Un tragique accident d'aérostation survenu lors de manœuvres à Montpellier a causé la mort du sapeur Guarmandias et blessé deux militaires.",
    "paragraphs": [
      "M. le général de division Borin est placé, sur sa demande, dans la section de réserve de l'état-major général de l'armée. À Montpellier, un accident survenu durant les manœuvres d'aérostation a causé la mort du sapeur Guarmandias et la blessure d'un lieutenant et d'un maître-ouvrier, suite à la rupture brutale du câble de retenue d'un ballon."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Dernières dépêches du front",
    "summary": "La colonne Ian Hamilton a atteint Springs, rétablissant les communications avec le Natal. Pendant ce temps, l'activité demeure suspendue dans les mines du Cap, à l'exception du service des pompes.",
    "paragraphs": [
      "Lord Roberts télégraphie de Pretoria que la colonne du général Ian Hamilton est arrivée à Springs, établissant ainsi les communications entre Pretoria et le Natal. Par ailleurs, le général Baden-Powell annonce la capture du commandant Steijn dans le district de Rustenburg.",
      "Au Cap, les autorités militaires ont maintenu les règlements du gouvernement précédent ; le travail dans les mines reste arrêté, hormis l'entretien nécessaire du service des pompes pour prévenir toute inondation des galeries."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Nouvelles Coloniales",
    "title": "Situation dans le sud algérien",
    "summary": "La situation des postes français dans le Sud algérien demeure excellente. À In-Salah, le capitaine Susbiele a pris ses fonctions, et les tribus du Touat sollicitent leur soumission à la France.",
    "paragraphs": [
      "La situation générale des postes français dans le sud algérien est excellente. À In-Salah, le capitaine Susbiele a pris officiellement possession de son poste. Dans la région du Touat, les ksours demandent à faire leur soumission, jurant désormais fidélité et obéissance à la France."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Échos",
    "title": "Faits divers et mondanités",
    "summary": "Le Président de la République assistera à la réception de M. Paul Deschanel. Le décès du baron Imbert de Saint-Amand est annoncé, tandis que la santé du Khédive demeure préoccupante.",
    "paragraphs": [
      "Le Président de la République assistera prochainement à la fête donnée par M. Paul Deschanel. La santé du Khédive est jugée préoccupante en raison d'une angine. Le baron Imbert de Saint-Amand, doyen des ministres plénipotentiaires, est décédé.",
      "Le centenaire de La Tour d'Auvergne sera célébré à Carhaix avec le plus grand éclat, en présence du ministre de la Guerre."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Mystères parisiens et faits tragiques",
    "summary": "Le parquet a ouvert une enquête rue de Bourgogne sur des rumeurs de maltraitance infantile. Parallèlement, un homme a tenté de mettre fin à ses jours à Notre-Dame par deux coups de feu.",
    "paragraphs": [
      "Un bruit courait hier dans le septième arrondissement au sujet d'une enfant martyrisée dans un immeuble. Le parquet a diligenté une enquête rue de Bourgogne, mais aucune preuve de maltraitance n'a été établie.",
      "La mort de la femme Léosatre est confirmée comme accidentelle par le médecin légiste. À Notre-Dame, un nommé Auguste N... a tenté de se suicider en se tirant deux balles dans la poitrine."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une escroquerie au costume d'époque",
    "summary": "Un commissaire de police a été victime d'une audacieuse escroquerie : attiré dans un atelier sous prétexte d'un portrait, il fut dévalisé de son manteau et de 800 francs par des individus en fuite.",
    "paragraphs": [
      "Un commissaire a été victime d'une escroquerie élaborée. Deux individus lui ont proposé de le photographier en costume d'Henri III. Il a été conduit dans un atelier de peintre en banlieue où il a revêtu un justaucorps et une toque.",
      "Sous prétexte d'aller chercher des plaques, les deux pickpockets l'ont enfermé et ont disparu avec son manteau contenant 800 francs. L'enquête est en cours pour retrouver les escrocs."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort mystérieuse dans la Seine",
    "summary": "Le corps d'un homme portant des blessures suspectes par arme à feu a été repêché quai Saint-Bernard. M. Aubry, juge d'instruction, a été chargé de mener l'enquête sur ce drame.",
    "paragraphs": [
      "Le corps d'un homme âgé de vingt-cinq à trente ans a été repêché devant le quai Saint-Bernard. Le cadavre, en état de décomposition avancée, présentait des traces de blessures suspectes.",
      "Le parquet a chargé M. Aubry, juge d'instruction, d'ouvrir une enquête. L'autopsie pratiquée par le docteur Vitaut révèle que les blessures ont été causées par une arme à feu."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression violente d'un courtier",
    "summary": "M. Georges Ratel, courtier en bijouterie, a été sauvagement agressé avenue de Saint-Ouen. Un malfaiteur a réussi à lui crever l'œil gauche avec une pointe de parapluie avant de prendre la fuite.",
    "paragraphs": [
      "M. Georges Ratel, courtier en bijouterie, a été sauvagement agressé avenue de Saint-Ouen. Un individu l'a bousculé et lui a crevé l'œil gauche avec la pointe d'un parapluie.",
      "Malgré la poursuite, le coupable a pris la fuite. M. Dupais, commissaire de police, a ouvert une enquête sur cette affaire."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Altercation dans un café",
    "summary": "Une altercation banale dans un café du boulevard Rochechouart a tourné au drame pour M. Léopold Caillet, violemment agressé après avoir renversé un bock. Les agresseurs ont été arrêtés.",
    "paragraphs": [
      "M. Léopold Caillet, cinquante ans, a été violemment agressé dans un café du boulevard Rochechouart après avoir renversé un bock par mégarde. Il a eu le crâne fracassé et un bras brisé.",
      "Les agresseurs ont été arrêtés et conduits au poste de police de la rue Dancourt. La victime a été transportée dans un état préoccupant à la salle Welton."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame de la jalousie",
    "summary": "Paul Biot, surnommé « Bibi », a été appréhendé après avoir porté plusieurs coups de couteau à Mathilde Aunault, rue des Poissonniers. La victime, grièvement blessée, a été transportée à l'hôpital Tenon.",
    "paragraphs": [
      "Un nommé Paul Biot, dit « Bibi », a sauvagement poignardé une femme de mœurs légères nommée Mathilde Aunault, rue des Poissonniers. Les agents de la force publique ont dû intervenir avec fermeté pour désarmer l'agresseur.",
      "La victime a été transportée d'urgence à l'hôpital Tenon. Le coupable, interrogé par M. Dupuis, a déclaré avoir agi sous le coup de la jalousie et proféré des menaces de récidive dès sa sortie de prison."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Enquête sur la bagarre de l'avenue de Wagram",
    "summary": "Le juge d'instruction André a auditionné M. Dumesnil ainsi que divers témoins afin de faire la lumière sur les violences survenues lors d'un banquet nationaliste où un employé fut blessé par arme à feu.",
    "paragraphs": [
      "M. André, juge d'instruction, a entendu M. Dumesnil ainsi que plusieurs témoins concernant la bagarre survenue lors d'un banquet nationaliste, au cours de laquelle un employé de commerce nommé Vendrain a été blessé par un coup de revolver."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Départements",
    "title": "Faits divers en province",
    "summary": "Chronique des accidents et drames en province : un enfant accidentellement écrasé à Saint-Georges-sur-Eure, un suicide tragique sur les voies ferrées à Dreux, et une noyade à Jolony.",
    "paragraphs": [
      "Saint-Georges-sur-Eure : M. Noël Ferraud a accidentellement écrasé son enfant de deux ans avec sa voiture alors qu'il sortait de sa ferme.",
      "Dreux : Un homme s'est suicidé en se jetant sur la voie ferrée à l'approche d'un convoi.",
      "Jolony : Le petit Georges, âgé de seize mois, s'est noyé accidentellement dans un puits en l'absence de sa mère."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Chronique des accidents en banlieue",
    "summary": "Une série d'accidents domestiques, de travail et de faits de violence a été rapportée dans plusieurs communes de la banlieue parisienne, marquant une journée particulièrement sombre.",
    "paragraphs": [
      "Ivry : Le petit Henri Seclin a eu la jambe brisée en manipulant la roue d'un tombereau.",
      "Saint-Denis : La petite Henriette Laurencin est morte après une chute du deuxième étage.",
      "Plaine-Saint-Denis : M. Mary Arson a été grièvement blessé lors d'un accident de voiture de déménagement.",
      "Sevran-les-Bruyères : M. Emmanuel Letournel a trouvé la mort, écrasé par un tonneau de vin.",
      "Villeneuve-la-Garenne : Gustave Walsinn a été grièvement brûlé dans une grange après avoir accidentellement enflammé des allumettes dissimulées dans sa poche.",
      "Rueil : Désiré Reine a tiré sur un rival, Eugène Albrecht, le blessant gravement. Le meurtrier a été écroué.",
      "Chaville : Marie Laporte et son amant Clovis Feuillitre ont été arrêtés suite à une scène de famille d'une grande violence.",
      "Meaux : M. Louis Gilès a été sauvagement poignardé par un rôdeur tentant de le dépouiller."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Fêtes",
    "title": "Fêtes des environs de Paris pour le dimanche 2 juin",
    "summary": "Programme des festivités et réjouissances du dimanche 2 juin dans les communes entourant Paris : concerts, bals champêtres, régates et feux d'artifice au menu de ces célébrations populaires.",
    "paragraphs": [
      "Argenteuil : Grand concours international de canots automobiles dans le bassin d'Argenteuil.",
      "Bonneuil : Concert, jeux variés et bal.",
      "Bois-Colombes : Manœuvre de pompe, jeux divers et feu d'artifice.",
      "Choisy-le-Roi : À deux heures, joute à la lance et feu d'artifice.",
      "Clamart : Ce soir, retraite aux flambeaux. Dimanche, fête et illuminations ; lundi, jeux variés.",
      "Conflans-Sainte-Honorine : Bal des enfants. Lundi, représentation théâtrale.",
      "Mériel : Attractions nombreuses et variées.",
      "Crèvecœur : Tir aux canards, jeux divers et feu d'artifice.",
      "Dugny : Jeux des drapeaux et de l'agneau, tombola et feu d'artifice.",
      "Epinay : Concert, tir, feu d'artifice et bal champêtre. Lundi, jeu de l'asperge.",
      "Epinay-sur-Orge : Fête de Balizy, concert, retraite aux flambeaux, feu d'artifice. Lundi, tombola et tir.",
      "Eaubonne : Concert, jeux divers, feu d'artifice et bal.",
      "Marly : Fête foraine, jeux pour enfants, bal de nuit.",
      "Gretz : Ce soir, retraite aux flambeaux. Dimanche, concert-spectacle, concours de tir. Lundi, jeux divers et concert musical.",
      "Joinville-le-Pont : Grandes régates à l'aviron, fête vénitienne, concert, feu d'artifice et bal champêtre.",
      "La Ferté-sous-Jouarre : Tir à la carabine, concert, feu d'artifice. Lundi, jeux divers, mât de beaupré et course pédestre.",
      "La Varenne-Saint-Hilaire : Grand concours de pêche à la ligne avec prix en espèces, de trois à cinq heures de l'après-midi.",
      "Le Perreux : Mât de cocagne, bal champêtre et illuminations.",
      "Le Raincy : Courses vélocipédiques et pédestres, concert par l'Union musicale et l'harmonie du Raincy.",
      "Les Mureaux : Concert, jeu de tamis. Lundi, courses à ânes, illuminations et bal.",
      "Marly-le-Roi : Continuation de la fête, jeux de toutes sortes et bal.",
      "Mudry : Concert, tir au fusil, jeux divers. Lundi, continuation des jeux et retraite aux flambeaux.",
      "Melun : Fête foraine, concert, feu d'artifice. Lundi, jeux divers.",
      "Mériel : Concert vocal et instrumental, chevaux de bois, tirs, amusements divers et bal.",
      "Meudon : Fête patronale, courses d'ânes à deux heures et demie. Lundi, jeux variés et bal.",
      "Montigny-sur-Loing : Concert, jeux de toutes sortes, tombola et bal.",
      "Montreuil-sous-Bois : Courses vélocipédiques, bal d'enfants. Lundi, cérémonie du mariage de la rosière, concert au bénéfice des victimes de l'incendie.",
      "Morangis-sur-Orge : Jeux divers, courses, tirs et bal.",
      "Nemours : Ce soir, retraite aux flambeaux. Dimanche, mât de beaupré, courses, concert. Lundi, feu d'artifice.",
      "Neuilly-sur-Seine : Continuation de la fête foraine, illuminations à la lumière électrique.",
      "Ormeaux : Marchands forains, jeux variés et bal.",
      "Petit-Ivry : Concours de bigophones, défilé, bal d'enfants et jeux forains.",
      "Pierrefitte : Concours athlétique, illuminations, feu d'artifice et bal champêtre.",
      "Pré-Saint-Gervais : Cirque, théâtres, divertissements et bal champêtre.",
      "Rocquencourt : Jeux des osselets, des pots cassés, tir et bal. Lundi, continuation des jeux.",
      "Roissy-en-Brie : Attractions variées, jeux et bal.",
      "Saint-Cloud : Jeu des osselets dans le parc.",
      "Saint-Ouen : Fête du Landy, courses à ânes. Lundi, grand feu d'artifice.",
      "Sceaux : Concert, jeux de toutes sortes et bal.",
      "Survilliers : Fêtes de la gare, jeux divers et bal.",
      "Vanves : Ce soir, retraite aux flambeaux. Dimanche, mât de cocagne. Lundi, jeux divers.",
      "Vernantes : Fêtes du général Hoche. À dix heures, revue des troupes, courses vélocipédiques, grandes eaux dans le parc et feu d'artifice.",
      "Vort-le-Petit : Concert, jeux, concours de tir et bal.",
      "Tienne-en-Arthies : Fête foraine, divertissements variés et bal.",
      "Villejuif : Fête communale, attractions diverses et bal d'enfants."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Voix d'outre-tombe : Une Famille d'adoption",
    "summary": "Portrait de Pâquerette, jeune fille à la beauté délicate vivant avec ses parents adoptifs, les Gautret, dont le quotidien est rythmé par les horaires pénibles du père, agent de police dévoué au service de l'ordre.",
    "paragraphs": [
      "Rien n'était joli, adorable et élégant comme sa personne, longue, mince, encore frêle, mais où tout était grâce et séduction.",
      "La lumière, en se jouant dans les ondes épaisses de sa chevelure d'or, en faisait ressortir certains tons d'acajou d'une incroyable richesse. Des torsades épaisses et lourdes couronnaient un front pur et intelligent, et rendaient encore plus beau un teint d'une délicatesse et d'une transparence telles qu'on l'eût dit éclairé par les rayons d'une lampe électrique.",
      "Le nez droit avait des narines roses comme l'intérieur d'un coquillage, qui palpitaient à la moindre émotion. Quand les jolies lèvres un peu épaisses s'entr'ouvraient, on était ébloui par les dents petites et blanches comme les perles d'un collier.",
      "Un cartel appuyé au mur sonna quatre heures. La jeune fille leva les yeux par ce mouvement inconscient qui arrive chaque fois qu'on entend la sonnerie d'une horloge.",
      "« Père ne rentre qu'à neuf heures, ce soir, n'est-ce pas, maman ? » demanda-t-elle. Stéphanie Gautret, la fleuriste, s'interrompit de son travail et répondit : « Oui, il a changé son heure avec un camarade, mais demain il reprendra son tour de service de onze heures du matin à quatre heures de l'après-midi, et ensuite de une heure de la nuit à six heures du matin. »",
      "La discussion porta ensuite sur le dévouement du père, agent de police, et sur le travail de peinture sur éventail de Pâquerette, la fille adoptive, dont le talent prometteur pourrait bientôt leur permettre de quitter Paris."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Informations Commerciales",
    "title": "Bulletin commercial du vendredi 22 juin",
    "summary": "Compte-rendu des marchés agricoles : le sucre raffiné se maintient avec fermeté. Au Havre, on observe un repli des cours pour les cotons de Louisiane et les cafés Santos.",
    "paragraphs": [
      "Les cours des produits agricoles, notamment le blé, la farine, le seigle, l'avoine et l'huile de colza, sont détaillés avec les variations pour les échéances de juillet, juin-août et les derniers cours pratiqués.",
      "Le sucre raffiné est coté de 105 à 108 francs les 100 kilos, selon les catégories et les marques, telles que Corbeil.",
      "Le Havre, 22 juin : Les cours des cotons, laines et cafés accusent un recul, marquant une baisse plus sensible pour les cotons Louisiane et les cafés Santos."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Agriculture et Vin",
    "title": "Revue des vignobles et récoltes",
    "summary": "La météo actuelle favorise la vigne. La floraison s'achève dans d'excellentes conditions, laissant présager de très belles récoltes dans le Bordelais, en Champagne et en Bourgogne.",
    "paragraphs": [
      "La température actuelle est très favorable à la vigne et la floraison s'achève dans de bonnes conditions. Une très bonne récolte est attendue si aucune intempérie ne survient pour contrarier ces espoirs.",
      "Dans le Gard, l'Hérault et l'Aude, les perspectives demeurent encourageantes. Dans le Bordelais, malgré quelques orages passagers, l'apparence de la récolte est très belle. En Champagne et en Bourgogne, la situation est également jugée satisfaisante."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Chemins de Fer",
    "title": "Avis de la Compagnie d'Orléans",
    "summary": "Afin de faciliter l'accès à l'Exposition universelle, la Compagnie d'Orléans annonce le doublement de la durée de validité des billets d'aller et retour pour Paris.",
    "paragraphs": [
      "La Compagnie d'Orléans informe le public que, pour faciliter la visite de l'Exposition universelle, les billets d'aller et retour ordinaires délivrés pour Paris, depuis toute gare ou station du réseau située à 100 kilomètres au moins de la gare de Paris-Austerlitz, verront leur durée de validité doublée."
    ]
  }
];
