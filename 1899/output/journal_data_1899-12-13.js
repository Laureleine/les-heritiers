// Date: 1899-12-13
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-12-13 (Version Restaurée, 43 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique Maritime",
    "title": "L'hygiène à bord",
    "summary": "La ville de Fécamp instaure des conférences d'hygiène et de médecine pratique pour les marins. Une initiative exemplaire pour améliorer la santé publique dans nos ports et la condition des équipages.",
    "paragraphs": [
      "Ne nous lassons point de signaler les innovations qui sont apportées au régime de nos marins, même quand ces innovations ont un caractère local et ne profitent qu'à une petite classe de privilégiés. Avec le temps, soyez sûrs que le bénéfice de ces innovations gagnera de proche en proche et s'étendra à tous. Rien n'est contagieux comme le bon exemple.",
      "La ville de Fécamp, qui s'était déjà recommandée à notre attention par tant d'œuvres témoignant d'une initiative éclairée et, récemment encore, par la création d'un Musée industriel du commerce et des pêches maritimes, vient de décider l'ouverture, dans l'École des pêches maritimes fondée par sa chambre de commerce, de conférences d'hygiène et de médecine pratique.",
      "C'est M. le docteur Vandaele qui a bien voulu se charger, à titre purement gracieux, de ces conférences originales dont l'accès est assuré sans frais à tous les capitaines, subrécargues et patrons de pêche du port de Fécamp.",
      "Ce programme comprend des explications sur le mode d'emploi des médicaments, les secours aux noyés, les soins aux blessés, l'hygiène générale à bord et l'étude des conséquences de l'alcoolisme. Si des conférences du même ordre étaient établies dans nos différents ports, on ne tarderait pas à voir se relever le taux de la santé générale.",
      "Il faut encore citer ici le docteur Vandaele sur l'importance de ces mesures pour la santé de l'équipage et le succès des campagnes de pêche. Si la chambre de commerce de Fécamp a eu cette heureuse pensée, c'est pour permettre aux capitaines de soulager les malades dont ils ont la garde.",
      "C'est une excellente chose d'initier nos marins à l'hygiène ; c'en serait une meilleure encore d'apprendre aux armateurs qu'ils ont eux aussi une éducation à faire sur ce point, notamment concernant l'aménagement des postes d'équipage, souvent insalubres."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions - Grand Roman Inédit",
    "summary": "Suzanne, en proie à un profond tourment intérieur, signe son contrat de mariage malgré ses sentiments pour un ami d'enfance, se résignant ainsi à son départ prochain pour Paris.",
    "paragraphs": [
      "À l'heure où Jacques d'Angeville et son ami lisaient la lettre de Suzanne sous les ombrages de la forêt de Compiègne, celle qui l'avait écrite la veille se trouvait seule dans une chambre de l'hôtel de Bade. Elle venait d'expédier les pages qu'elle avait écrites après d'innombrables hésitations.",
      "De la visite nocturne de son ami d'enfance à la Coudraie, elle était restée flottante, bouleversée par ses brûlantes déclarations. C'était vers lui que tout son être s'élançait. Le lendemain, lorsque son fiancé était arrivé, elle avait dû cacher son malaise sous le prétexte d'une inexplicable lassitude.",
      "Suzanne avait besoin de solitude et craignait de se trahir. Elle se rendit chez le docteur Bernay pour lui expliquer son état, mais celui-ci ne fit que murmurer le mot cruel : « Chimères ». Le lendemain, elle signa son contrat de mariage, se résignant au voyage de Paris.",
      "Le futur attendait que les deux dames soient prêtes. La présidente, sa voisine, entra pour la presser, s'étonnant de sa pâleur et de son humeur morose. Suzanne, dissimulant ses regrets, se prépara pour ce qui devait être son avenir."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des Ministres",
    "summary": "Réunis à l'Élysée sous la présidence de M. Loubet, les ministres ont examiné des projets de loi relatifs aux pensions des officiers et aux ajustements budgétaires des colonies.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin, à l'Élysée, sous la présidence de M. Loubet. Le ministre de la Guerre a été autorisé à déposer sur le bureau de la Chambre des députés un projet de loi relatif aux pensions proportionnelles des officiers.",
      "Le Conseil s'est occupé des modifications nécessaires aux chapitres réservés du budget des Colonies et des augmentations de crédit qui, conformément au vote de la Chambre, devront y être introduites."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Les Membres de la Haute Cour",
    "summary": "M. Guérin interrogera le gouvernement au Sénat sur le statut des membres de la Haute Cour dont le mandat arrive à échéance avant le renouvellement triennal de janvier.",
    "paragraphs": [
      "Un ancien garde des sceaux, M. Guérin, doit questionner le président du Conseil au Sénat sur la situation faite aux membres de la Haute Cour soumis au renouvellement triennal du 28 janvier.",
      "La question est de savoir si ces membres dont les pouvoirs expirent le 4 janvier pourraient continuer à siéger. L'interprétation la plus répandue est que la Haute Cour ne pourrait plus les comprendre, réduisant le nombre de juges appelés à se prononcer."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "Les Députés Socialistes",
    "summary": "Conformément à leur dernier congrès, les députés socialistes ont reconstitué leur groupe parlementaire, composé de trente membres et organisé sans président fixe.",
    "paragraphs": [
      "Les députés socialistes se sont réunis hier et ont reconstitué le groupe qui s'était divisé lors de l'avènement du cabinet Waldeck-Rousseau. Le groupe a été reconstitué sur la base de la déclaration du récent congrès socialiste.",
      "Les membres sont au nombre de trente. M. Carnaud a été nommé secrétaire et M. Renou trésorier. Le groupe n'a pas de président, chaque séance étant présidée par un membre désigné."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique",
    "title": "Le Gouverneur de l'Indo-Chine",
    "summary": "M. Doumer, gouverneur général de l'Indo-Chine, a reçu l'ordre formel de différer son retour en France et de demeurer à son poste, alors qu'il s'apprêtait à quitter la colonie.",
    "paragraphs": [
      "M. Doumer, gouverneur général de l'Indo-Chine, qui se préparait à s'embarquer pour la France, a reçu de Paris l'ordre de ne pas quitter son poste en ce moment."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Écroulement d'un hôtel à Nice",
    "summary": "Au quartier du Piol, à Nice, l'effondrement en chantier de l'Impérial Palace a causé la mort d'ouvriers piémontais et blessé grièvement huit autres employés.",
    "paragraphs": [
      "Un hôtel en construction au quartier du Piol, l'Impérial Palace, s'est écroulé aujourd'hui à Nice. Deux ouvriers ont été ensevelis et huit autres ont été précipités dans le vide avec de graves blessures.",
      "L'accident s'est produit, heureusement, avant l'heure du repas. Les autorités locales, dont le préfet et le maire, se sont rendues sur les lieux. L'entrepreneur et l'architecte attribuent la catastrophe à la pluie qui a détrempé un plancher en ciment armé.",
      "Les victimes sont des ouvriers piémontais. Un des morts n'a pas été identifié, l'autre se nommait Serra. Huit autres ouvriers sont grièvement blessés."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une ouvrière brûlée vive",
    "summary": "À l'usine de la Société française de bébés de Montreuil-sous-Bois, une employée a été tragiquement brûlée par de la cire en fusion. Son état est jugé désespéré.",
    "paragraphs": [
      "Mme Marie Mazet, employée à l'usine de la Société française de bébés à Montreuil-sous-Bois, a été victime d'un accident tragique. En renversant un récipient de cire fondue, ses vêtements se sont enflammés.",
      "Malgré l'intervention de ses collègues, elle a été brûlée des pieds à la poitrine. Transportée à l'hôpital Saint-Antoine, son état est jugé désespéré, la malheureuse étant enceinte."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "Au Parlement Allemand",
    "summary": "Le discours de M. de Bülow marque un tournant diplomatique majeur pour l'Allemagne, s'éloignant de la doctrine de Bismarck pour viser une expansion de puissance mondiale.",
    "paragraphs": [
      "Le discours de M. de Bülow, ministre des Affaires étrangères d'Allemagne, mérite des commentaires. La harangue du chancelier de Hohenlohe visait surtout la politique intérieure concernant le plan de construction navale, malgré la résistance du Parlement de Berlin.",
      "Le discours de M. de Bülow marque un tournant dans la politique extérieure en lançant la formule de la « plus grande Allemagne », rompant avec les vues de Bismarck. Il proclame la nécessité de créer des points d'appui tout en affirmant que l'Allemagne ne dépend de personne."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Guerre",
    "title": "La guerre au Transvaal",
    "summary": "La situation au Transvaal reste préoccupante pour les forces britanniques, qui subissent des revers tactiques et des pertes importantes face aux Boërs sur plusieurs fronts.",
    "paragraphs": [
      "Rien à signaler dans l'Afrique du Sud depuis l'échec subi par le général Gatacre. À Ladysmith, les troupes tentent de déloger l'ennemi sans succès. Sur la rivière Modder, les troupes anglaises ont été repoussées par les Boërs.",
      "Le général Gatacre rapporte que l'échec de Stormberg est dû à une mauvaise estimation des distances et à une erreur de parcours. Les Boërs, de leur côté, ont pris trois canons et des munitions. La Westminster Gazette constate que les pertes de cette guerre égalent déjà les deux tiers des pertes totales à Waterloo."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique Internationale",
    "title": "La question des Boërs aux États-Unis",
    "summary": "Au Sénat américain, la cause des Boërs suscite un vif débat. M. Mason a défendu avec ardeur la bravoure des Hollandais, menant au renvoi d'une résolution de soutien devant la commission des Relations extérieures.",
    "paragraphs": [
      "Le débat sur la démocratie et la monarchie, cette lutte constante entre le droit divin des rois et les aspirations de l'humanité, excite au plus haut point l'intérêt des États-Unis.",
      "M. Mason a mis en lumière la bravoure des Hollandais qui luttent héroïquement pour la défense de leurs foyers. Il a cité de nombreuses autorités historiques à l'appui de son argumentation.",
      "La proposition de résolution présentée par le sénateur Mason en faveur des Boërs a été officiellement renvoyée à la commission des Relations extérieures pour examen."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Chronique Parlementaire",
    "title": "Chambre des Députés : Séance du 12 décembre",
    "summary": "Lors de la discussion du budget de la Justice, le gouvernement a réaffirmé son soutien indéfectible à l'armée face aux critiques virulentes sur la liberté de la presse, obtenant le vote de la clôture des débats.",
    "paragraphs": [
      "La Chambre a consacré l'intégralité de sa séance à la discussion générale du budget du ministère de la Justice.",
      "MM. Chastenet, Bertrand, Piou, Augé et Lagasse ont présenté diverses observations, auxquelles le garde des sceaux, M. Monis, a répondu en exposant les mesures prises pour prévenir les abus au sein de l'organisation judiciaire.",
      "M. Marcel Sembat a ensuite vivement reproché au gouvernement les poursuites intentées à l'encontre d'un journaliste, sous la prévention d'outrages à l'armée.",
      "M. Waldeck-Rousseau, président du Conseil, a déclaré ne pouvoir laisser passer les attaques dirigées contre l'armée, véritable patrimoine national. La clôture des débats a été prononcée par 267 voix contre 237."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Justice",
    "title": "Le Budget de la Justice : Débats",
    "summary": "Le budget de la Justice a donné lieu à des discussions approfondies sur la magistrature, la rémunération des juges suppléants et la protection de la liberté individuelle contre les rapports de police abusifs.",
    "paragraphs": [
      "M. Chastenet a critiqué la proposition de la commission du budget tendant à allouer un traitement aux juges suppléants et a réclamé une réorganisation globale de la Cour de cassation.",
      "M. Jacques Piou a dénoncé l'incursion du politique dans l'exercice de la justice et a déploré la publicité donnée aux rapports de police, portant une atteinte regrettable à la liberté individuelle.",
      "M. Augé a présenté des observations pertinentes sur la nécessaire réorganisation des tribunaux de première instance.",
      "M. Lagasse a insisté sur l'impérieuse nécessité de rémunérer les juges suppléants pour permettre aux jeunes gens issus de familles modestes d'accéder enfin à la magistrature.",
      "M. Monis, ministre de la Justice, a annoncé des mesures concrètes visant à réduire les délais de justice et a présenté un projet de loi relatif aux ventes judiciaires d'immeubles."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Justice",
    "title": "Poursuites contre M. Urbain Gohier",
    "summary": "Un vif échange parlementaire a opposé M. Sembat au président du Conseil, M. Waldeck-Rousseau, au sujet des poursuites judiciaires visant M. Urbain Gohier pour ses écrits contre l'armée.",
    "paragraphs": [
      "M. Marcel Sembat a reproché au gouvernement les poursuites engagées contre M. Urbain Gohier pour outrages à l'armée, soulignant que l'écrivain ne s'oppose pas à l'institution elle-même, mais à son système.",
      "M. Waldeck-Rousseau a justifié l'action du gouvernement, affirmant avec fermeté qu'il ne tolérera aucune attaque injuste contre l'armée nationale."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Justice",
    "title": "Incident de séance sur les articles de presse",
    "summary": "La séance a été troublée par M. Charles Bernard, qui a tenté de contester la probité du garde des sceaux, M. Monis, via la presse, entraînant son rappel à l'ordre par la présidence.",
    "paragraphs": [
      "M. Charles Bernard a tenté de soumettre à la Chambre des articles de presse visant M. Monis. Le président de la Chambre a refusé de laisser discuter de la vie privée, a rappelé l'orateur deux fois à l'ordre et a fini par lui retirer la parole à une large majorité."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique Intérieure",
    "title": "Le comité général socialiste",
    "summary": "M. Trannoy interpelle le gouvernement sur l'influence du comité général socialiste révolutionnaire, dont l'action est perçue par certains comme une menace institutionnelle rappelant un État dans l'État.",
    "paragraphs": [
      "M. Trannoy a interrogé le gouvernement sur l'opportunité de dissoudre le comité général socialiste révolutionnaire, qu'il soupçonne de vouloir instaurer une autorité rivale, véritable État dans l'État.",
      "Le gouvernement est demeuré immobile, une attitude qui a suscité de vives protestations sur les bancs de la droite et du centre, marquant une nouvelle fracture parlementaire sur la question des agitations révolutionnaires."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Marine",
    "title": "Le décret sur l'avancement dans la Marine",
    "summary": "Le ministère de la Marine dément catégoriquement les bruits de démission circulant au sujet du contre-amiral Gaillard, suite aux récentes mesures prises sur l'avancement des officiers.",
    "paragraphs": [
      "Le ministère de la Marine a formellement démenti les rumeurs faisant état de la démission du contre-amiral Gaillard. Ces bruits, sans fondement, auraient été motivés par les nouvelles dispositions introduites par le récent décret réglementant l'avancement des officiers de la flotte."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Justice",
    "title": "La Haute Cour : Vingt-septième audience",
    "summary": "La vingt-septième audience de la Haute Cour a été dédiée à la manifestation d'Auteuil. Les dépositions de MM. de Christiani et Déroulède ont marqué les débats, tandis que la Cour rejetait les requêtes de la défense.",
    "paragraphs": [
      "La vingt-septième audience de la Haute Cour a été intégralement consacrée à l'audition des témoins relatifs à la manifestation d'Auteuil.",
      "De nombreuses personnalités, dont MM. de Christiani et Déroulède, ont été entendues. Les débats ont principalement porté sur la nature, spontanée ou préméditée, de ladite manifestation.",
      "Le président de la Cour a rejeté diverses conclusions déposées par la défense, qui réclamait de nouvelles confrontations. Les audiences secrètes ont été levées au terme de la séance."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame à Grand-Rechain",
    "summary": "Un crime de sang a ensanglanté Grand-Rechain : le secrétaire communal Alphonse Brixhe a poignardé Félix Schouleur, déclarant vouloir venger le meurtre de son père, assassiné l'année précédente.",
    "paragraphs": [
      "Un grave événement s'est produit à Grand-Rechain : M. Alphonse Brixhe, secrétaire communal, a poignardé Félix Schouleur en plein jour. L'auteur a motivé son acte par la volonté farouche de venger le meurtre de son père, assassiné en 1898.",
      "L'agresseur a été immédiatement arrêté et conduit sous escorte à la prison de Verviers, où il devra répondre de ses actes devant la justice."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "International",
    "title": "Agression contre un député allemand et débat au Reichstag",
    "summary": "À Berlin, le député Lieber a été blessé par un déséquilibré. Au Reichstag, il a vivement attaqué la politique navale de l'amiral Tirpitz, provoquant une vive agitation au sein de l'assemblée allemande.",
    "paragraphs": [
      "À Berlin, le député Lieber a été légèrement blessé par un individu paraissant souffrir d'aliénation mentale.",
      "Lors de la séance au Reichstag, M. Lieber a pris à partie le gouvernement, critiquant avec véhémence l'amiral Tirpitz au sujet de la politique navale allemande. Ces attaques ont provoqué de vives tensions et des échanges passionnés parmi les députés présents."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "International",
    "title": "Espionnage militaire en Italie",
    "summary": "Un soldat italien, Ramoino, a été arrêté près de la frontière française pour avoir tenté de vendre des documents secrets relatifs à un fusil de modèle récent. Cinq complices militaires sont également sous les verrous.",
    "paragraphs": [
      "Un soldat italien, nommé Ramoino, vient d'être arrêté aux abords immédiats de la frontière française. Il lui est reproché d'avoir tenté de négocier la vente, au profit d'une puissance étrangère, d'un fusil de modèle récent et des documents s'y rapportant.",
      "L'enquête ouverte à la suite de cette interpellation a déjà permis d'appréhender cinq autres complices appartenant aux effectifs militaires, tous impliqués dans ce trafic de renseignements stratégiques."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie à la montagne",
    "summary": "Un violent incendie a ravagé plusieurs habitations dans un village de montagne cette nuit, causant la mort de deux personnes. Les autorités ont prescrit la désinfection des lieux par mesure sanitaire.",
    "paragraphs": [
      "Un incendie dévastateur a ravagé, cette nuit, plusieurs habitations dans un village de montagne, faisant deux victimes parmi les habitants.",
      "Les autorités locales ont immédiatement ordonné la désinfection des maisons voisines, par mesure de précaution contre la propagation de miasmes liés au sinistre."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits Divers",
    "title": "Assassinat en Chine",
    "summary": "Le maréchal Sou a officiellement restitué au contre-amiral Courrejolles les corps des deux enseignes français lâchement assassinés par des assaillants chinois à Montao.",
    "paragraphs": [
      "Le maréchal Sou a procédé hier à la restitution solennelle, entre les mains du contre-amiral Courrejolles, des corps des deux enseignes de vaisseau lâchement assassinés par des éléments hostiles à Montao."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Activités diverses",
    "summary": "Madame Loubet visite une crèche, le Club alpin célèbre son banquet annuel, l'Académie de médecine décerne ses prix et des artistes honorent la mémoire d'Alfred de Musset au Père-Lachaise.",
    "paragraphs": [
      "Madame Loubet a honoré de sa présence la crèche du sixième arrondissement, dont elle a visité les installations avec un vif intérêt.",
      "Le Club alpin de France a réuni ses membres lors de son traditionnel banquet annuel, qui s'est tenu à l'hôtel Continental en présence de nombreuses personnalités du monde des lettres et des sciences.",
      "L'Académie de médecine a tenu, avec le cérémonial habituel, sa séance publique annuelle destinée à la distribution des divers prix et récompenses décernés par la docte assemblée.",
      "Un groupe de poètes et d'artistes s'est rassemblé au cimetière du Père-Lachaise pour commémorer, en ce jour anniversaire, la naissance du grand poète Alfred de Musset."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Justice",
    "title": "Commutation de peine",
    "summary": "Par décret présidentiel, la peine de mort prononcée contre le nommé Baroux a été commuée en une peine de travaux forcés à perpétuité par le Président de la République.",
    "paragraphs": [
      "Par un décret rendu ce jour, le Président de la République a décidé de commuer la peine de mort prononcée contre le nommé Baroux en une peine de travaux forcés à perpétuité."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Météo et Faits Divers",
    "title": "Vague de froid en France",
    "summary": "Le froid intense et la neige frappent la France, causant plusieurs décès par congestion en banlieue parisienne et la découverte de corps sans vie à Levallois et Neuilly.",
    "paragraphs": [
      "Un froid intense et de la neige sévissent sur la France. Plusieurs décès par congestion sont signalés en banlieue parisienne, notamment à Montreuil, Bry-sur-Marne et au Perreux.",
      "Le corps d'une femme non identifiée a été découvert à Levallois, et celui d'un terrassier à Neuilly."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Météo et Températures",
    "title": "Vague de froid et chutes de neige en France",
    "summary": "La France est paralysée par une vague de froid exceptionnelle et des chutes de neige importantes. De nombreuses communes, de Saint-Étienne à Toulouse, voient leurs cours d'eau geler et leurs rues s'enneiger.",
    "paragraphs": [
      "À Saint-Étienne, la neige est tombée pendant la nuit, atteignant une épaisseur de trente à quarante centimètres. La rivière Vire est gelée depuis deux jours.",
      "À Saint-Brieuc, le 12 décembre, la température a baissé brutalement. Les rues sont recouvertes d'une épaisse couche de verglas.",
      "À Nantes, une chute de neige a eu lieu la nuit dernière.",
      "À Reims, la neige a fait son apparition sans grande abondance.",
      "À Nevers, le froid s'accentue, le thermomètre descendant à 12 degrés au-dessous de zéro.",
      "À Limoges, les cours d'eau sont gelés. La Vienne est prise dans toute sa largeur et la neige est tombée abondamment.",
      "À Périgueux, une tempête de neige s'est abattue. Le froid est excessif.",
      "À Cahors, une couche de quinze centimètres de neige recouvre le sol. La rivière du Lot est prise et le thermomètre affiche 12 degrés au-dessous de zéro.",
      "À Carmaux, la neige tombe en abondance. Les sources étaient basses ou taries depuis le mois d'août.",
      "À Toulouse, la neige est tombée abondamment cette nuit.",
      "À Crinsac, la neige tombe sans discontinuer depuis ce matin, formant une couche de dix centimètres.",
      "Nos correspondants des Sables-d'Olonne, d'Angers, Melle, La Rochelle, Bourges, Agen, Carcassonne, Saint-Malo, Lorient, etc., nous télégraphient que le froid est également très vif dans leurs régions."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Chronique Politique",
    "title": "Affaire du concours de l'internat",
    "summary": "L'enquête sur le concours de l'internat se poursuit. M. Waldeck-Rousseau prépare sa décision tandis que le juge d'instruction interroge les protagonistes et examine les pièces du dossier.",
    "paragraphs": [
      "Le dossier de l'affaire du concours de l'internat se trouve entre les mains de M. Waldeck-Rousseau, président du Conseil, qui prendra bientôt une décision.",
      "Le directeur de l'Assistance publique, M. le docteur Napias, a été entendu après avoir fait tous ses efforts pour seconder l'action du juge d'instruction, M. de Vallès.",
      "Le magistrat a fait briser les scellés apposés sur une boîte contenant des compositions intactes et a entendu un étudiant en médecine suspecté.",
      "L'externe a répondu : « Moi, je peux fournir un alibi. Tous les jours je rentre chez moi à huit heures du soir et je ne sors plus de mon domicile. »"
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un négociant belge",
    "summary": "Recherché par le parquet de Bruxelles pour des escroqueries dépassant 100 000 francs, le négociant Syoen a été arrêté à Paris par le service de la sûreté.",
    "paragraphs": [
      "Sur mandat du parquet de Bruxelles, le service de la sûreté a arrêté un négociant en cuirs nommé Syoen. Cet individu avait acheté à crédit des quantités considérables de marchandises pour les revendre ensuite à vil prix.",
      "Se sachant poursuivi en Belgique, il s'était réfugié à Paris sous le nom de Beroucken. Le montant total des escroqueries dépasse 100 000 francs."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Perquisition chez un agent d'affaires",
    "summary": "Un agent d'affaires, actuellement en fuite, fait l'objet d'une enquête après la perquisition de son domicile rue de la Victoire, où il exploitait une fausse agence agricole pour escroquer des particuliers.",
    "paragraphs": [
      "En vertu d'un mandat de M. Schlumberger, juge d'instruction, une perquisition a eu lieu au domicile d'un agent d'affaires, rue de la Victoire.",
      "Cet individu, actuellement en fuite, avait fondé à cette adresse une « Agence agricole » où il attirait des personnes naïves pour leur extorquer de l'argent sous prétexte de placements avantageux. Le magistrat a saisi la comptabilité et les livres de commerce."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Meurtre rue de Flandre",
    "summary": "Hier soir, un jeune garçon boucher de trente ans a été mortellement frappé d'un coup de couteau lors d'une violente rixe éclatée dans un débit de boissons de la rue de Flandre. Une enquête est ouverte.",
    "paragraphs": [
      "Hier soir, vers onze heures et demie, une vive querelle a éclaté dans un débit de boissons de la rue de Flandre. Expulsés par le patron, les protagonistes se sont retrouvés devant le numéro 173, où la rixe a repris avec une violence extrême.",
      "Un garçon boucher nommé Jules Saint-Pierre, âgé de trente ans, a été frappé d'un coup de couteau en pleine région du cœur et s'est effondré, mortellement blessé. Ses agresseurs ont pris la fuite aussitôt.",
      "La victime fut transportée d'urgence à l'hôpital Saint-Louis, mais son état apparut d'emblée désespéré. Le commissaire du quartier du Pont-de-Flandre a ouvert une enquête afin de retrouver les auteurs de ce crime."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident mortel rue du Ruisseau",
    "summary": "Le nommé Jules Chaîne, charretier, est décédé après une chute accidentelle sous les roues de son attelage dans le quartier de Clignancourt. Son décès a été constaté à son admission à l'hôpital Bichat.",
    "paragraphs": [
      "Un charretier nommé Jules Chaîne, âgé de quarante-sept ans, a fait une chute fatale sous les roues de son camion attelé de cinq chevaux. Relevé par des passants avec de multiples côtes brisées, il a succombé peu après son arrivée à l'hôpital Bichat.",
      "L'enquête menée par le commissaire du quartier de Clignancourt a permis de confirmer l'identité de la victime ainsi que les circonstances tragiques de cet accident."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame rue Margueritte",
    "summary": "La baronne Blanche de G. a tenté de mettre fin à ses jours en se tirant un coup de revolver chez son amie la marquise de B., à la suite d'une altercation concernant sa conduite personnelle.",
    "paragraphs": [
      "La baronne Blanche de G., âgée de trente-deux ans, s'est tiré un coup de revolver dans la poitrine chez son amie la marquise de B.",
      "Les médecins ont immédiatement prodigué leurs soins à la blessée. Interrogée par les autorités, Mme de B. a expliqué que la baronne était arrivée en état d'ivresse et, à la suite d'une réprimande sur sa conduite, avait commis cet acte de désespoir."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de suicide avenue de l'Etoile",
    "summary": "Un homme élégamment vêtu a été transporté dans un état désespéré à l'hôpital Beaujon après s'être tiré un coup de feu à la tête dans un fiacre. Son identité demeure inconnue des autorités.",
    "paragraphs": [
      "Un homme élégamment vêtu, dont l'identité n'a pu être établie, s'est tiré un coup de revolver à la tête alors qu'il se trouvait à l'intérieur d'un fiacre. Le malheureux a été transporté dans un état désespéré à l'hôpital Beaujon."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "La bande des Pieds de Velours",
    "summary": "Les agents du commissariat d'Ivry ont capturé deux dangereux cambrioleurs, auteurs de multiples vols grâce à un stratagème cruel consistant à simuler des accidents pour piller les habitations.",
    "paragraphs": [
      "Les agents du commissariat d'Ivry ont capturé deux dangereux cambrioleurs, Alexandre Perrin et Lucien Carbonnet, auteurs de nombreux vols dans la capitale.",
      "Les malfaiteurs employaient un stratagème odieux : l'un se présentait chez les victimes en annonçant un faux accident concernant leur époux afin de les attirer hors de chez elles, permettant au complice de piller l'appartement.",
      "Ils ont été arrêtés alors qu'ils étaient armés de cannes à épée. Le commissaire Boussard a découvert chez eux un important arsenal de fausses clefs."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Social",
    "title": "Bulletin du travail : Conflit des allumettiers",
    "summary": "Les ouvriers des manufactures d'allumettes de Pantin et d'Aubervilliers sollicitent l'arbitrage du président du Conseil, M. Waldeck-Rousseau, pour faire valoir leurs revendications syndicales suite à des sanctions disciplinaires.",
    "paragraphs": [
      "Les ouvriers et ouvrières des manufactures d'allumettes de Pantin et d'Aubervilliers se sont réunis en assemblée afin de protester énergiquement contre une mesure disciplinaire infligée à trois de leurs délégués syndicaux.",
      "La direction ayant opposé une fin de non-recevoir à toute demande de révision, les ouvriers ont pris la décision de solliciter l'arbitrage direct de M. Waldeck-Rousseau, président du Conseil, afin d'obtenir le respect effectif du droit syndical au sein des ateliers."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents autour de Paris",
    "summary": "Une chronique des accidents survenus en banlieue parisienne : drames de la circulation, gestes désespérés et incidents survenus lors des récents épisodes de gel.",
    "paragraphs": [
      "À Levallois-Perret, Mme Louise Gendron a eu la cuisse broyée après avoir glissé sous les roues d'un camion en circulation.",
      "À Clichy, le jeune Eugène Talbeau, âgé de seize ans, a mis fin à ses jours en se tirant un coup de revolver dans le cœur, poussé par une déception amoureuse.",
      "À Saint-Ouen, deux jeunes garçons, Tournier et Labadie, ont été victimes d'une chute sur une mare gelée. Labadie a été relevé avec des blessures sérieuses.",
      "À la Plaine-Saint-Denis, le jeune André Samoyé, âgé de neuf ans, est tombé accidentellement dans le canal Saint-Denis avant d'être secouru in extremis par deux ouvriers.",
      "À Joinville-le-Pont, une voiture attelée a basculé dans les eaux de la Marne. Le propriétaire, dans un élan de bravoure, a tenté de sauver le conducteur en pensant que celui-ci avait été précipité dans le courant."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Santé",
    "title": "Les dangers de l'obésité",
    "summary": "L'obésité, autrefois célébrée, est aujourd'hui reconnue comme une pathologie grave. Le naturaliste Stowe propose une solution thérapeutique externe innovante : l'Eau déperditrice.",
    "paragraphs": [
      "Il fut un temps où la mode poétique célébrait les beautés plantureuses, les fortes prestances, et l'amour des banquets. Malheureusement, l'expérience a tôt fait de déchanter : ces tempéraments opulents dissimulaient des santés précaires.",
      "On vit ces personnes souffrir rapidement de palpitations, d'étouffements, d'insomnie, d'albuminurie ou de diabète, pour succomber prématurément, frappées par l'embolie cardiaque ou l'apoplexie.",
      "Il est désormais admis que l'obésité, loin d'être un signe de bonne santé, est une maladie meurtrière que la médecine moderne se doit de traiter.",
      "Les premiers remèdes, basés sur une abstinence radicale ou sur des purgatifs délabrant l'organisme, se sont révélés aussi inefficaces que dangereux. L'électrisation, ultime recours, n'a guère donné de meilleurs résultats.",
      "C'est grâce aux travaux du naturaliste Stowe, explorateur et botaniste renommé, que la thérapeutique de l'obésité a enfin trouvé une voie efficace, rationnelle et exempte de risques pour le patient.",
      "Le naturaliste Stowe a conclu que le traitement devait être exclusivement externe pour agir directement sur les tissus adipeux sans empoisonner le sang. Il a puisé dans la flore marine et dans les propriétés fondantes de certains fiels animaux les principes actifs de son « Eau déperditrice ».",
      "Cette découverte, approuvée par la Société de médecine de France, agit par simple application cutanée ou évaporation, s'appuyant sur le principe physique de l'osmose. Elle permet de réduire les graisses sans changer de régime alimentaire.",
      "Les personnes souhaitant consulter ces méthodes peuvent se rendre au laboratoire du praticien, sis au 9, rue Montesquieu à Paris, ou lui adresser une demande pour recevoir l'exposé scientifique complet de son traitement."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Social",
    "title": "Courrier orphéonique : réunion des commerçants",
    "summary": "Le commerce du 10e arrondissement s'organise sous la présidence de M. Houdé pour préparer un concours international de musique en vue de l'Exposition universelle de 1900.",
    "paragraphs": [
      "Dimanche dernier, à la mairie du dixième arrondissement, s'est tenue une importante réunion des commerçants du quartier, convoquée par M. Bour, directeur de l'harmonie « Les Enfants de la ville de Paris ». L'objet de cette séance était l'organisation d'un concours international de musique pour l'Exposition de 1900.",
      "La réunion, présidée par M. Houdé, conseiller municipal, a permis la constitution d'un comité de propagande chargé de recueillir les adhésions du commerce local. Une nouvelle assemblée est fixée au 14 novembre.",
      "Une initiative similaire est déjà en cours dans le dix-neuvième arrondissement sous l'impulsion de M. Détrain, tandis que des démarches analogues sont entreprises par le comité général dans les onzième, douzième, dix-septième, dix-huitième et vingtième arrondissements."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Culture",
    "title": "Courrier des Théâtres",
    "summary": "Actualités des scènes parisiennes : débuts à l'Opéra, changements de programmes au Gymnase et à l'Ambigu, et tournées internationales annoncées pour Agnès Sorma.",
    "paragraphs": [
      "À l'Opéra, lundi, reprise d'Aïda pour les débuts de Mlles Charles et Soyer, premiers prix du Conservatoire. Mlle Hatto fera également ses débuts prochainement dans Sigurd.",
      "Au Gymnase, Petit Chagrin de M. Maurice Vaucaire tire à sa fin. Le nouveau spectacle, La Layette de M. Sylvane, sera à l'affiche le 20 courant.",
      "Mme Agnès Sorma, célèbre interprète du rôle de Nora, reviendra en juin prochain avec sa troupe pour jouer les chefs-d'œuvre de Schiller et de Goethe.",
      "L'Ambigu annonce les deux dernières représentations de Cartouche. À partir de lundi, relâche pour les répétitions de A perpète !, drame de MM. Lepelletier et Xanrof, prévu pour le 22 décembre.",
      "Au théâtre Déjazet, la première des Petites Voisines et de Pseudonyme est fixée à vendredi. Aux Bouffes-Parisiens, le succès de Shakespeare ! se confirme chaque soir."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Sports et Divertissements",
    "title": "Actualités des spectacles et concerts",
    "summary": "Panorama des théâtres parisiens : triomphe de la revue \"La Prise de la Bastille\", succès du nouveau spectacle de Trianon et rendez-vous populaires au concert Européen et au Nouveau-Cirque.",
    "paragraphs": [
      "La première soirée de lutte a été merveilleuse hier aux Folies-Bergère, et la rencontre qui aura lieu ce soir promet d'être extraordinaire. Elle met en présence deux hommes d'une force et d'une science admirables : Pons, champion du monde, et le Turc Selim. Samedi prochain, la rentrée d'Otéro.",
      "Après-demain, Balthy et Fordyce auront joué soixante fois, sans que le succès se démente une minute, la Prise de la Bastille. C'est un fait unique dans les annales du théâtre qu'une revue à deux personnes ait fait une telle carrière. L'annonce des dernières représentations a amené une telle affluence à la Scala que M. Marchand a dû demander, à prix d'or, une prolongation d'une semaine aux deux artistes, qui jouent aussi à la Chambrée.",
      "La Loïe Fuller paraîtra à la matinée de demain jeudi, à l'Olympia.",
      "Il y aura demain à Parisiana une grande matinée populaire à prix réduit avec le trio toulousain, Boisset et son merveilleux singe Léotard, et le fameux chef-d'œuvre comique de Courteline, « Le Client sérieux », enlevé de verve par Reschal, Gelmo, Max-Him, Blondel, Danvers, etc.",
      "Au Nouveau-Cirque, aujourd'hui, matinée avec le cheval et les chiens de J. Steckel et la pantomime nautique à grand spectacle, « Fond de l'eau ».",
      "Toutes les familles se donnent rendez-vous au concert Européen pour y applaudir tous les soirs la spirituelle revue « On n'est pas des princes ! » de Ch. Quinel et Jules Gide. Une revue comique et honnête tout à la fois : voilà qui ne s'était pas vu depuis longtemps au café-concert.",
      "Le nouveau spectacle de Trianon a obtenu un succès tel que l'on refuse du monde chaque soir. Cela n'est pas surprenant, l'affiche porte « Les deux Aveugles » d'Offenbach, « Lui » d'Oscar Méténier et « Niniche ». Les artistes sont : Simon Max, Laroche, Brunet, Gabrielle Fleury, Rachel de Ruy, Marguerite Dufay."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Automobilisme",
    "title": "Chronique de la locomotion électrique",
    "summary": "L'automobile électrique progresse sans révolution majeure. Si les modèles américains atteignent 160 kilomètres, les constructeurs français avaient déjà réalisé des performances équivalentes lors des épreuves de l'été.",
    "paragraphs": [
      "L'automobile électrique, bon gré mal gré, commence à faire parler d'elle. L'une d'entre elles, une américaine, chargée de 150 kilos d'accumulateurs, a réussi à faire, sans recharge, 100 miles anglais, soit 160 kilomètres. Voilà qui est évidemment joli, mais il n'y a pas, à notre avis, lieu de crier au prodige. En France, la distance de Paris-Rouen, soit 130 kilomètres, a été faite plusieurs fois sans reprendre d'énergie en route. Et cet été, lors de l'épreuve du « Sport universel illustré », le vainqueur ne s'est arrêté qu'après avoir parcouru 170 kilomètres, quoiqu'il n'eût dans sa caisse que 140 kilos d'accumulateurs."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Fait Divers",
    "title": "Accidents : Chevaux contre Automobiles",
    "summary": "Statistiques comparatives de novembre 1899 : le cheval demeure une cause de mortalité bien plus importante que l'automobile, avec une proportion d'accidents mortels quatre fois supérieure.",
    "paragraphs": [
      "Le « Veto » d'hier donne son relevé mensuel des accidents causés en novembre par la plus noble conquête de l'homme. Ils s'élèvent à 883 blessés et 96 morts.",
      "En regard, les accidents d'automobiles pendant le même mois s'élèvent en tout à 36 cas, causant trente-cinq blessés et un mort.",
      "Comme proportion d'accidents mortels, nous trouvons : Chevaux, un sur neuf ; Autos, un sur trente-six."
    ]
  }
];
