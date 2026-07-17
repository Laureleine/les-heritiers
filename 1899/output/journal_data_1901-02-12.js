// Date: 1901-02-12
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-02-12 (Version Restaurée, 40 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Editorial",
    "title": "L'école des maris",
    "summary": "Analysant les drames passionnels récents, l'éditorialiste déplore le recours au meurtre par des époux délaissant les voies légales du divorce pour une justice expéditive et tragique, appelant à la patience.",
    "paragraphs": [
      "Lorsqu'un fait brutal qui intéresse nos mœurs se produit, comme le meurtre d'hier boulevard Magenta ou celui, moins récent, de la rue de Provence, deux drames sanglants que semblait devoir prévenir la loi du divorce, nous recherchons de suite à armer le bras de l'exécuteur ou de l'exécutrice.",
      "Il nous paraissait que de ce jeu de massacre, que constituent les affaires dites passionnelles, les mal-lotis du mariage refusent de se servir des moyens que la loi nouvelle met à leur disposition pour sortir de l'impasse où le sort les a relégués et s'appliquent à revendiquer eux-mêmes, à coups de revolver, la satisfaction de leurs griefs personnels.",
      "Dans l'exaspération de leur colère, ils ne songent pas au triste lendemain qu'ils se ménagent en se plaçant au-dessus de la loi et de la morale. Le jury, dont la clémence nous étonne parfois, ne s'attendrit pas sans raison à l'égard de ces époux affolés que l'erreur d'un instant a transformés en justiciers.",
      "Certainement, lorsqu'elle comparaîtra devant ses juges, la mère de famille du boulevard Magenta qui, après vingt-deux ans de mariage, a, dans un moment de colère, sacrifié à sa vengeance le compagnon de sa vie, provoquera un profond sentiment de commisération.",
      "On a consacré des romans à « La Femme de trente ans » et à « La Femme de quarante ans ». Mieux inspiré, Proudhon a noté, dans une rude philosophie, les travers d'esprit qui saisissent la femme lorsqu'elle approche de la quarantaine. C'est la plus grande crise de son existence morale.",
      "Au tournant de la vie qui se dessine vers la quarantaine, les hommes ne doivent opposer que la patience et la douceur aux tristesses de leurs compagnes. Le temps passe et fait son office de guérisseur."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Miss Tempête",
    "summary": "Germaine, séduite par le talent du romancier anglais Rudyard Kipling, traduit l'une de ses œuvres et parvient à convaincre un éditeur parisien de lui confier une collaboration régulière.",
    "paragraphs": [
      "Avec son sens artistique très délicat et très affiné, Germaine avait eu un indicible plaisir à lire les productions toutes nouvelles d'un écrivain anglais absolument inconnu, Rudyard Kipling.",
      "Elle eut l'idée, presque l'inspiration, de traduire un de ses romans où les animaux mis en scène apparaissent bientôt plus tragiques que des êtres humains. Elle le fit et l'adressa à un grand éditeur parisien.",
      "Il fut frappé de l'intérêt puissant de ce roman. Germaine avait indiqué son adresse sur le manuscrit. Il lui écrivit de venir le voir.",
      "L'éditeur, un homme sec, lui demanda s'il s'agissait bien de son travail. Elle confirma avec timidité.",
      "Après avoir discuté des modalités et du fait qu'elle était émancipée, il lui proposa un contrat pour deux traductions par an. Elle accepta les cinq cents francs offerts pour son travail.",
      "Elle sortit de chez l'éditeur, fière, heureuse et enchantée, emportant son traité et son argent pour rejoindre sa compagne Claudine."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Actualité Étrangère",
    "title": "Mort du Roi Milan",
    "summary": "L'ex-roi Milan de Serbie s'est éteint à l'âge de quarante-sept ans. Son décès pourrait simplifier une situation politique serbe longtemps complexée par ses ingérences et ses exils répétés.",
    "paragraphs": [
      "L'ex-roi Milan de Serbie est mort cet après-midi à quatre heures. L'état du roi Milan était devenu alarmant depuis hier soir.",
      "Le roi Milan, qui vient de mourir à l'âge de quarante-sept ans, était un des souverains contemporains dont la presse s'occupait le plus fréquemment.",
      "Il naquit en 1854 à Jassy, en Roumanie. Proclamé prince de Serbie à quatorze ans, il fut un souverain dont le règne fut marqué par des agitations politiques et des querelles domestiques, notamment avec la reine Nathalie.",
      "L'abdication du roi de Serbie, en mars 1889, eut le don d'étonner le public. Il semble probable que la mort du roi Milan simplifiera les affaires de Serbie, que ses ingérences et ses exils alternatifs ne laissaient pas de compliquer."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un meurtre à Angers",
    "summary": "Charles Voisteau a été découvert agonisant place Saint-Serge à Angers, atteint de sept coups de couteau à la tête. L'enquête reste ouverte alors que la victime refuse de parler.",
    "paragraphs": [
      "Hier soir, vers six heures et demie, un homme a été trouvé sur la place Saint-Serge, gisant dans une mare de sang. Le malheureux, qui a déclaré se nommer Charles Voisteau, avait reçu sept coups de couteau dans la tête.",
      "À l'heure où l'infortuné a été trouvé, ce quartier est des plus mouvementés et tout porte à croire qu'il a dû être frappé plus loin. Voisteau a été transporté à l'hôpital dans un état alarmant et oppose un silence complet aux questions qui lui sont posées."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "Les Affaires Étrangères au Sénat",
    "summary": "Au Sénat, M. Delcassé réaffirme la continuité de la politique étrangère française, soulignant le rôle pivot de la France en Chine ainsi que la cordialité de ses relations avec l'Italie et les États-Unis.",
    "paragraphs": [
      "Le langage tenu par M. Delcassé au Sénat, à l'occasion du vote du budget du ministère des Affaires étrangères, ne pouvait pas différer de celui qu'il avait fait entendre au Palais-Bourbon.",
      "La politique française en Chine conserve l'honneur d'avoir fourni la formule acceptée par toutes les chancelleries. M. Delcassé a pu notamment signaler la cordialité de nos rapports avec les États-Unis et avec l'Italie."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Règlement de comptes à Châtellerault",
    "summary": "À Châtellerault, un propriétaire nommé Seilland a fait usage d'un revolver contre ses fermiers, les époux Colin, au cours d'une violente altercation survenue lors du règlement de leurs comptes.",
    "paragraphs": [
      "Un propriétaire de Châtellerault, nommé Seilland, ayant pour fermiers les époux Colin, a vu une discussion d'intérêts éclater lors du règlement de leurs comptes.",
      "Comme ils ne parvenaient pas à s'entendre, il ne trouva rien de mieux, comme suprême argument, que de s'armer d'un revolver avec lequel il tira par deux fois sur ses fermiers. Le mari fut atteint au côté gauche et la femme grièvement blessée au poignet."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Sanglante bagarre dans un café",
    "summary": "Une rixe nocturne dans un café a tourné au drame : M. Juppet, le patron, a abattu un jeune homme de dix-huit ans avec une canne à épée pour se défendre. L'intéressé s'est constitué prisonnier.",
    "paragraphs": [
      "Une sanglante bagarre a eu lieu la nuit dernière dans un café, au cours de laquelle un jeune homme de dix-huit ans a été tué d'un coup de canne à épée.",
      "M. Juppet, le patron du café, s'était vu assailli par une bande de jeunes individus. Pour se défendre, il saisit une canne à épée et, dans la mêlée, frappa un dénommé Houiller, qui rendit le dernier soupir. Juppet s'est constitué prisonnier."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "En Indo-Chine",
    "summary": "La direction de l'Agriculture en Indochine centralise les missions d'étude sur l'élevage et la colonisation, tout en assurant le développement des cultures et la gestion rationnelle des forêts.",
    "paragraphs": [
      "La direction de l'Agriculture a pour mission l'étude de toutes les questions se rattachant à l'agriculture, à l'élevage et à la colonisation. Elle assure la production et l'expansion des plantes et la gestion des forêts."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Actualité Étrangère",
    "title": "Agitation en Espagne",
    "summary": "L'Espagne est en proie à une vive agitation. À Valence, la tentative de bloquer une procession religieuse a nécessité l'intervention de la gendarmerie dans un climat social extrêmement électrique.",
    "paragraphs": [
      "L'agitation qui s'est manifestée dans ces derniers temps en Espagne semble prendre un caractère alarmant, notamment dans la ville de Valence où l'état de siège a failli être déclaré.",
      "Des manifestants ont tenté d'empêcher la procession des moines. La gendarmerie a dû intervenir pour disperser la foule. Une grande excitation règne dans toute la ville."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Agitation en Espagne et état de siège à Valence",
    "summary": "Face aux troubles grandissants, le gouvernement espagnol instaure l'état de siège à Valence et menace de suspendre les garanties constitutionnelles pour rétablir l'ordre public.",
    "paragraphs": [
      "L'état de siège a été proclamé à Valence.",
      "À Madrid, le ministre de l'Intérieur déclare que le gouvernement pourrait faire usage du droit de suspendre les garanties constitutionnelles en interdisant certains journaux aussitôt que cela deviendrait nécessaire. Le gouvernement considère les manifestations qui se produisent dans les provinces comme ayant un caractère grave.",
      "Une manifestation s'est formée à la Puerta del Sol, se dirigeant vers la rédaction du journal Le Païs. Les agents de police ont barré le passage aux manifestants qui leur lancèrent des pierres. Les agents furent contraints de demander le secours de la gendarmerie. Un agent de police a été blessé et quelques étudiants ont été arrêtés."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "L'opinion des hommes d'État espagnols sur les troubles",
    "summary": "Le gouvernement espagnol, par la voix du Président et du général Azcárraga, exprime ses regrets face aux manifestations étudiantes et aux troubles, tout en appelant à une fermeté accrue des autorités locales.",
    "paragraphs": [
      "Le président du Conseil, interviewé, a déclaré qu'il regrettait vivement les événements actuels. Il a précisé que si les premières manifestations furent organisées par les étudiants — contre lesquels il convient d'agir avec prudence — les éléments perturbateurs sont désormais bien plus variés. Le gouvernement ordonne donc aux autorités d'agir avec une énergie redoublée.",
      "Le général Azcárraga a défendu le comte de Caserte, rappelant qu'il a déjà visité Madrid sans incident par le passé et que son attitude actuelle démontre qu'il reconnaît le régime. Il juge l'hostilité manifestée à son égard totalement injustifiée.",
      "M. Sagasta, de son côté, a indiqué qu'il n'approuvait pas les manifestations tout en comprenant qu'elles sont la conséquence d'une série de coïncidences avec la situation présente. Il estime que l'affaire de Mlle Ubao a considérablement aggravé les tensions et que la présence du comte de Caserte n'était, en ces circonstances, nullement opportune."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Dernière Heure",
    "title": "Nouveaux incidents en Espagne",
    "summary": "La situation demeure critique en Espagne : des heurts violents opposent la troupe aux manifestants à Madrid et Saragosse, tandis que l'agitation persiste à Barcelone et Valence.",
    "paragraphs": [
      "À Madrid, notamment sur le Prado, la gendarmerie a essuyé des jets de pierres et a dû charger la foule. On déplore plusieurs blessés au cours de ces affrontements.",
      "À Saragosse, les manifestants, brandissant un drapeau républicain, ont fait feu sur la gendarmerie. Un sergent et plusieurs émeutiers ont été blessés. Les troupes ont reçu l'ordre de se consigner dans les casernes.",
      "Des dépêches privées ajoutent que le capitaine général Borrero a été acclamé aux cris de « Vive le général républicain ». À Valence comme à Barcelone, le mouvement de protestation contre les autorités ne faiblit point."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Social",
    "title": "Modification de la loi sur les Sociétés de secours mutuels",
    "summary": "Une proposition de loi portée par M. Berteaux vise à doubler les plafonds des pensions et capitaux pour les sociétés de secours mutuels, tout en renforçant le contrôle contre les cumuls illicites.",
    "paragraphs": [
      "La loi du 1er avril 1898 sur les Sociétés de secours mutuels limite actuellement les pensions à 360 francs. La Chambre est saisie d'une proposition de loi, à l'initiative de M. Berteaux, député de Seine-et-Oise, visant à porter ce maximum à 720 francs pour les pensions et à 6 000 francs pour les capitaux.",
      "La question de l'exclusion des sociétaires affiliés à plusieurs institutions reste en débat. Il semblerait impératif d'imposer à tout membre l'obligation de déclarer son appartenance à d'autres sociétés afin de garantir que le cumul des avantages ne dépasse point le plafond fixé par la loi."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Chronique Parlementaire",
    "title": "Séance de la Chambre des députés du 11 février",
    "summary": "La Chambre des députés a poursuivi l'examen du projet sur les prud'hommes, étendant leur juridiction aux employés de l'État et aux artistes, tout en supprimant le seuil de conciliation à 2 000 francs.",
    "paragraphs": [
      "En l'absence de M. Waldeck-Rousseau, indisposé, la Chambre a renvoyé la discussion sur le contrat d'association pour poursuivre l'examen du projet de loi relatif aux conseils de prud'hommes.",
      "L'assemblée a décidé que les ouvriers et employés de l'État et des administrations publiques pourront désormais porter leurs contestations devant les prud'hommes. La compétence de ces derniers est également étendue aux entrepreneurs de spectacles et aux artistes.",
      "Enfin, la suppression de la limite de compétence fixée à 2 000 francs pour la phase de conciliation a été formellement votée."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Chronique Parlementaire",
    "title": "Séance du Sénat",
    "summary": "Le Sénat a adopté divers budgets ministériels. M. Delcassé a réaffirmé les droits de la France à Terre-Neuve et en Chine, tandis que les mesures sur le crédit agricole ont été détaillées.",
    "paragraphs": [
      "Le Sénat a adopté le budget des Postes et Télégraphes, celui de la Caisse d'épargne, ainsi que les budgets des ministères des Affaires étrangères et de l'Agriculture.",
      "M. Delcassé a prononcé une déclaration sur les droits de la France à Terre-Neuve et sur la situation en Chine, insistant sur le maintien de l'intégrité de l'empire chinois et la solidité de l'alliance avec la Russie.",
      "M. Jean Dupuy, ministre de l'Agriculture, a exposé les mesures prises en faveur du crédit agricole, l'organisation des chambres d'agriculture et le développement de l'enseignement agricole."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Social",
    "title": "Amélioration des conditions de travail des ouvriers des Postes",
    "summary": "Le personnel technique des réseaux télégraphiques et téléphoniques bénéficie de mesures visant à rationaliser la journée de travail, désormais fixée à onze heures, temps de déplacement compris, pour les agents en province.",
    "paragraphs": [
      "Le personnel technique des réseaux télégraphiques et téléphoniques de Paris va bénéficier de mesures concernant la durée de la journée de travail, grâce à une meilleure organisation permettant une productivité égale avec une présence réduite.",
      "Les équipes de province verront également leur situation améliorée, avec une journée de travail fixée à un maximum de onze heures, temps de déplacement compris."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie tragique à Bakou",
    "summary": "Un incendie dévastateur a frappé les réservoirs de naphte de Bakou, causant la mort de trente personnes. Les autorités, qui soignent actuellement des centaines de blessés, suspectent un acte de malveillance.",
    "paragraphs": [
      "À Saint-Pétersbourg, des détails sur l'incendie des réservoirs de naphte à Bakou indiquent que trente personnes ont péri après avoir approché les lieux par imprudence.",
      "Des centaines de personnes sont soignées pour des brûlures. La cause exacte de l'incendie reste incertaine, bien qu'une malveillance soit vivement suspectée."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Actualité Coloniale",
    "title": "Nouvelles de Chine",
    "summary": "Le maréchal de Waldersee a inspecté les troupes allemandes. Une dépêche du général Voyron rapporte le décès accidentel d'un zouave, tandis que des rumeurs prêtent à l'impératrice de Chine une volonté de réforme.",
    "paragraphs": [
      "Le maréchal de Waldersee a passé en revue les troupes allemandes. Une dépêche du général Voyron informe de la mort accidentelle d'un zouave, mortellement blessé par un tir provenant d'un soldat allemand.",
      "Plusieurs journaux rapportent que l'impératrice de Chine aurait adopté une politique plus réformatrice."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Nouvelles du front et guérillas",
    "summary": "Les forces britanniques, en difficulté face au commando Dewet à Tabak's Berg, enregistrent de lourdes pertes. Parallèlement, les autorités du Cap font face à une épidémie de peste avec treize cas déclarés.",
    "paragraphs": [
      "Les autorités britanniques continuent de minimiser les revers subis face aux Boers. Une colonne anglaise a été défaite par le commando de Dewet. À Capetown, les mesures de défense sont intensifiées.",
      "Le 11 janvier, un engagement important a eu lieu à Tabak's Berg, où la colonne anglaise a dû se retirer avec de lourdes pertes après avoir été vivement harcelée par les Boers.",
      "La peste a également fait son apparition au Cap avec treize cas officiellement recensés."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Réception à l'Élysée",
    "summary": "Le Président de la République et Mme Émile Loubet ont présidé hier soir le premier bal annuel de l'Élysée, une réception prestigieuse réunissant l'élite politique, artistique et militaire de la capitale.",
    "paragraphs": [
      "Le Président de la République et Mme Émile Loubet ont donné, hier, leur premier bal annuel au Palais de l'Élysée.",
      "La réception, extrêmement brillante, a réuni de nombreuses personnalités éminentes du monde politique, des lettres et des arts, ainsi que de nombreux officiers en grande tenue."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Politique",
    "title": "Soirée au Palais de l'Élysée",
    "summary": "Le Président de la République et Mme Loubet ont tenu une réception solennelle en l'honneur du corps diplomatique et de nombreuses personnalités officielles, laquelle s'est prolongée jusqu'à minuit.",
    "paragraphs": [
      "Le Président de la République, accompagné de Mme Loubet, a reçu le corps diplomatique et de nombreux officiels dans les salons de l'Élysée lors d'une réception marquée par la solennité.",
      "À onze heures et demie, le chef de l'État a effectué le tour des salons pour saluer ses hôtes avant de se retirer, la soirée touchant à sa fin à minuit."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Agriculture",
    "title": "Le Mérite agricole",
    "summary": "L'ordre du Mérite agricole s'enrichit de plus de deux cents nouveaux récipiendaires. La liste exhaustive des commandeurs, officiers et chevaliers sera prochainement publiée par le Journal officiel.",
    "paragraphs": [
      "L'ordre du Mérite agricole s'est considérablement enrichi, comptant désormais plus de deux cents nouveaux chevaliers et dignitaires distingués pour leurs services.",
      "Les listes officielles des nommés, incluant les commandeurs et les officiers, seront prochainement publiées au Journal officiel pour information du public."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Société",
    "title": "Conférence sur l'Algérie",
    "summary": "M. Étienne a exposé les enjeux de l'administration de l'Algérie devant la Société de géographie. Sous la présidence de M. Léon Bourgeois, l'exposé a suscité un vif intérêt et de nombreux applaudissements.",
    "paragraphs": [
      "Sous la présidence de M. Léon Bourgeois, M. Étienne a prononcé une conférence remarquée sur l'administration de l'Algérie devant l'assemblée de la Société de géographie.",
      "Il a abordé avec précision les aspects politiques et administratifs de notre colonie, recevant de la part de l'auditoire de nombreux et chaleureux applaudissements."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Agriculture",
    "title": "Étude sur l'utilité du froid",
    "summary": "Une commission, présidée par M. Legludic, est instituée pour étudier les méthodes de conservation par le froid et évaluer les opportunités de leur mise en application sur le territoire français.",
    "paragraphs": [
      "Une commission d'études portant sur l'utilité industrielle du froid pour la conservation des denrées a été officiellement créée sous la présidence de M. Legludic.",
      "La commission se propose d'examiner les installations frigorifiques en usage à l'étranger afin d'étudier la viabilité de leur introduction et de leur application en France."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents d'artillerie à Châlons-sur-Marne",
    "summary": "Le 40e régiment d'artillerie, stationné à Châlons-sur-Marne, déplore deux graves accidents : une chute de cheval ayant blessé un canonnier et une grave lésion crânienne nécessitant une trépanation.",
    "paragraphs": [
      "Deux graves accidents survenus à l'occasion d'exercices équestres ont marqué la vie du 40e régiment d'artillerie.",
      "Le canonnier Colmeiz a été grièvement blessé à la suite d'une chute de cheval. Par ailleurs, l'artilleur Pelletier, victime d'une fracture du crâne, a dû être transporté à l'infirmerie pour subir l'opération du trépan."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Social",
    "title": "Les Grèves",
    "summary": "À Montceau-les-Mines, 20 000 mineurs ont manifesté calmement. À Anzin et Azincourt, les mouvements de grève se prolongent malgré quelques timides reprises du travail parmi les ouvriers du jour.",
    "paragraphs": [
      "À Montceau-les-Mines, une imposante manifestation regroupant 20 000 mineurs s'est déroulée dans le plus grand calme, sans aucun incident à déplorer.",
      "À Anzin, la grève se poursuit avec détermination ; une nouvelle délégation d'ouvriers auprès de la direction est prévue pour tenter de dénouer le conflit.",
      "À Azincourt, le mouvement de grève continue également, bien que quelques ouvriers du jour aient, de leur propre initiative, repris le travail."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Social",
    "title": "Grève des tailleurs pour dames",
    "summary": "Les couturières des ateliers parisiens ont cessé le travail pour réclamer la journée de huit heures. Cette grève inquiète les grands couturiers à l'approche de la saison printanière.",
    "paragraphs": [
      "Un mouvement de grève a été amorcé dans les ateliers de couture ; les ouvrières réclament notamment l'instauration de la journée de huit heures sans aucune diminution de leur salaire.",
      "Les grands tailleurs-couturiers, à l'aube de la saison de printemps, redoutent fortement l'impact de ce mouvement social sur leurs activités commerciales."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vol au Musée de Cluny",
    "summary": "Le nommé Georges Eustaci a été interpellé en flagrant délit alors qu'il tentait de dérober une statuette en marbre dans le jardin du Musée de Cluny.",
    "paragraphs": [
      "Un individu identifié sous le nom de Georges Eustaci a été arrêté par les autorités alors qu'il tentait de se rendre maître d'une statuette en marbre exposée dans le jardin du Musée de Cluny."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le suicide du Tzigane",
    "summary": "Accablé par la misère après avoir dilapidé ses biens au jeu, le violoniste Jean Chrysocki a disparu. Une lettre retrouvée à son domicile confirme son intention de se suicider dans la Seine.",
    "paragraphs": [
      "Jean Chrysocki, un violoniste tzigane en proie à une extrême misère après avoir perdu tous ses biens au jeu, a disparu. Tout laisse à penser qu'il s'est jeté dans les eaux de la Seine.",
      "Une lettre retrouvée à son domicile, écrite de sa main, confirmait sans équivoque ses funestes intentions suicidaires."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestations au café du Petit-Moulin",
    "summary": "La police a mené une opération dans un établissement du Petit-Moulin réputé pour ses désordres. Vingt-quatre personnes ont été appréhendées lors de cette descente.",
    "paragraphs": [
      "La police a procédé à l'arrestation de vingt-quatre individus lors d'une descente effectuée dans un café du Petit-Moulin, un établissement suspecté d'être le théâtre d'orgies et de désordres."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de meurtre rue de Flandre",
    "summary": "Une violente altercation rue de Flandre a conduit à l'arrestation de Charles Lagneau, qui a blessé son voisin d'un coup de couteau. Les jours de la victime ne sont pas en danger.",
    "paragraphs": [
      "Le nommé Charles Lagneau a été appréhendé par les autorités pour avoir porté plusieurs coups de couteau à un voisin au cours d'une dispute qui a failli tourner au drame.",
      "La victime, transportée rapidement aux soins, ne souffre heureusement que de blessures légères dont le pronostic vital n'est pas engagé."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Bande de malfaiteurs spécialisée",
    "summary": "La police vient de démanteler une bande de onze individus spécialisée dans le vol systématique de câbles en cuivre et de matières premières au préjudice de la Société industrielle des Téléphones.",
    "paragraphs": [
      "La police vient de mettre un terme aux agissements d'une bande composée de onze individus, spécialisée dans le vol systématique de câbles en cuivre appartenant à la Société industrielle des Téléphones.",
      "Lors des perquisitions, une importante quantité de caoutchouc et de gutta-percha, provenant des soustractions frauduleuses commises par ces malfaiteurs, a été saisie par les agents."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enfants imprudents",
    "summary": "Deux jeunes garçons, Albert Normand et François Gessert, ont échappé de justesse à une fin tragique après être tombés accidentellement dans les eaux du bassin de la Villette.",
    "paragraphs": [
      "Deux jeunes garçons, prénommés Albert Normand et François Gessert, ont été tirés d'affaire in extremis après avoir fait une chute accidentelle dans les eaux du bassin de la Villette."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le Pantalon révélateur",
    "summary": "Grâce à la sagacité de M. Dellabre, qui a identifié son pantalon volé porté par un individu suspect, une bande de malfaiteurs a été arrêtée par les autorités.",
    "paragraphs": [
      "Un ouvrier, M. Dellabre, a fait preuve d'une grande sagacité en reconnaissant son pantalon, qui lui avait été précédemment dérobé, porté par un individu suspect.",
      "Cette identification fortuite a permis aux autorités d'intervenir et de démanteler l'intégralité de la bande de voleurs à laquelle appartenait l'individu."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Série de suicides et décès",
    "summary": "La chronique noire enregistre plusieurs drames, dont la chute mortelle d'un couvreur à la Bibliothèque nationale, le suicide d'une jeune femme et le décès d'un agent d'assurances.",
    "paragraphs": [
      "La chronique noire rapporte plusieurs décès tragiques survenus récemment : un couvreur est mort en chutant lors de travaux à la Bibliothèque nationale.",
      "Par ailleurs, une jeune femme a mis fin à ses jours en se jetant d'une fenêtre, tandis qu'un agent d'assurances a été retrouvé mort, s'étant donné la mort dans une chambre d'hôtel."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incidents autour de Paris",
    "summary": "Une série d'incidents tragiques secoue la périphérie parisienne : une collision à Asnières, un accident domestique à Villeneuve-la-Garenne et l'interpellation d'une femme à Saint-Denis par la police.",
    "paragraphs": [
      "À Asnières, une femme a été grièvement blessée par une voiture de livraison.",
      "À Villeneuve-la-Garenne, une fillette a été affreusement brûlée par un poêle.",
      "À Saint-Denis, une femme perturbée a été appréhendée par les agents de la force publique."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Bulletin Financier",
    "title": "Activité de la Bourse",
    "summary": "La Bourse de Paris affiche une tendance à la hausse, portée par une fermeté marquée des rentes et une confiance persistante des investisseurs envers les valeurs de traction.",
    "paragraphs": [
      "La Bourse entre dans une période d'activité accrue, caractérisée par une hausse notable des rentes et une fermeté soutenue des valeurs de traction."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Conseils médicaux",
    "title": "La Médecine Végétale du Docteur A. Sarodetzki",
    "summary": "Le docteur A. Sarodetzki présente 'La Médecine Végétale', un ouvrage prônant la guérison des maladies chroniques par des sucs naturels, évitant ainsi les drogues chimiques et les opérations chirurgicales.",
    "paragraphs": [
      "La méthode végétale, qui depuis de nombreuses années obtient un vif succès dans le traitement des maladies chroniques, est décrite dans un ouvrage d'une portée considérable intitulé 'La Médecine Végétale'.",
      "Les malades délaissés trouveront dans ce livre un moyen efficace pour se guérir sans drogues funestes, sans poisons fatiguant le corps ou épuisant les nerfs, et sans recours aux opérations mutilantes, mais par l'usage de sucs végétaux régénérateurs.",
      "L'ouvrage traite notamment des maladies de la peau et du cuir chevelu, des tumeurs et cancers, des maladies spéciales de la femme, de la hernie, du diabète, du rhumatisme et de la tuberculose.",
      "Vie et Santé, tel est l'ouvrage du Docteur A. Sarodetzki, spécialiste de la faculté de Paris et ex-interne des hôpitaux, destiné par sa vulgarisation à révolutionner l'art de guérir.",
      "Dans un but humanitaire, l'ouvrage est expédié franco contre un franc en mandat ou timbres-poste, adressé au Directeur de la Pharmacie Richelieu, 93, rue de Richelieu, à Paris."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Faits divers",
    "title": "Escroquerie et plainte",
    "summary": "La direction du journal Le Petit Parisien a formellement déposé plainte pour escroquerie contre M. Émile Doussard, mis en cause dans l'organisation des festivités du 12 février.",
    "paragraphs": [
      "La direction de notre journal 'Le Petit Parisien' a déposé une plainte pour escroquerie à l'encontre de M. Émile Doussard, impliqué dans l'organisation des spectacles du 12 février."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Roman",
    "title": "La Preuve d'un crime",
    "summary": "L'œuvre dramatique 'La Preuve d'un crime', signée par le renommé Adolphe d'Ennery, est désormais disponible dans une édition magnifiquement illustrée chez l'éditeur Jules Rouff.",
    "paragraphs": [
      "Roman dramatique par Adolphe d'Ennery, auteur des Deux Orphelines, de la Grâce de Dieu, Marie-Jeanne, etc.",
      "Les premières et secondes livraisons, magnifiquement illustrées et réunies sous couverture, sont en vente chez Jules Rouff et Cie, éditeurs, au cloître Saint-Honoré, à Paris."
    ]
  }
];
