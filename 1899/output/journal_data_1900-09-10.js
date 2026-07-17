// Date: 1900-09-10
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-09-10 (Version Restaurée, 49 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Politique Internationale",
    "title": "L'Occupation de Pékin",
    "summary": "Les Allemands organisent un corps international dans le Chi-Li avant l'arrivée du maréchal de Waldersee. La question d'une expédition sur Pao-Ting-Fou reste à préciser par les commandants des troupes.",
    "paragraphs": [
      "Pékin, 30 août, via Shanghaï, 7 septembre : Les Allemands ont pris l'initiative d'organiser un corps international destiné à opérer dans la province du Chi-Li.",
      "Les différents commandants ont été invités par eux à fournir leur contingent pour ce corps avant l'arrivée du maréchal de Waldersee. Il est probable que la plupart des chefs militaires ont transmis cette proposition à leurs gouvernements respectifs.",
      "Le but que poursuivrait ce corps n'est pas clairement indiqué ; on suppose qu'il serait employé à une expédition sur Pao-Ting-Fou, où l'on annonce que les troupes chinoises se concentrent."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Le retrait des troupes américaines",
    "summary": "Washington a ordonné au général Chaffee de préparer le rapatriement des troupes américaines de Pékin vers les Philippines, dès que les transports seront réunis à Takou.",
    "paragraphs": [
      "New-York, 9 septembre : Le gouvernement a ordonné au général Chaffee de prendre les mesures préparatoires au retrait des troupes américaines de Pékin, dès que des transports suffisants pour les conduire aux Philippines seront réunis à Takou.",
      "Ces ordres ne présentent toutefois, pour l'heure, qu'un caractère préparatoire."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Informations de Chine",
    "summary": "Suicides de hauts dignitaires chinois et famine à Pékin. Les troupes japonaises portent secours à la population, tandis que Li-Hung-Chang attend l'issue des négociations avant de se diriger vers le Nord.",
    "paragraphs": [
      "Tokio, 7 septembre : Une dépêche de Pékin, en date du 1er septembre, rapporte que le bruit court du suicide de Yulu avec toute sa famille, après la défaite de Pei-Tsang. Hsutsu s'est également donné la mort. La position actuelle du prince Tuan demeure inconnue.",
      "Des reconnaissances envoyées le 29 août par les alliés dans la direction de Chang-Ping-Fu et de Lu-Kou-Kio ont confirmé que la tranquillité régnait dans ces régions.",
      "Le prince Ching était attendu le 3 septembre à Ching-To ; il devait regagner Pékin sous escorte d'un détachement de cavalerie japonaise afin d'effectuer une visite non officielle aux représentants étrangers.",
      "La population de Pékin étant quasi réduite à la famine, les troupes japonaises ont procédé à des distributions de riz.",
      "Li-Hung-Chang déclare qu'il ne pourra partir pour le Nord avant une dizaine de jours. Il attend avec anxiété le résultat des négociations engagées."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Position de l'Angleterre",
    "summary": "S'exprimant à Wolverhampton, Lord Georges Hamilton a réaffirmé que le gouvernement britannique refuse de renoncer aux avantages acquis par les puissances en Chine.",
    "paragraphs": [
      "Londres, 9 septembre : Lord Georges Hamilton, dans un discours prononcé à Wolverhampton, a déclaré que l'Angleterre ne souscrirait à aucun arrangement tendant à l'abandon des avantages gagnés par les puissances en Chine."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Arrivée de renforts",
    "summary": "Un transport militaire français, chargé de 582 hommes et de 400 tonnes de matériel de guerre à destination de Takou, a fait escale à Port-Saïd.",
    "paragraphs": [
      "Port-Saïd, 9 septembre : Un transport français, ayant à son bord 582 hommes et 400 tonnes de matériel de guerre, à destination de Takou, est passé en ce port aujourd'hui."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Départ du colonel Marchand",
    "summary": "Le colonel Marchand et le commandant Baratier ont quitté Marseille à bord de l'Armand-Bénic ce 9 septembre. Désigné pour rejoindre la Commission internationale en Chine, l'officier a été chaleureusement acclamé par la foule.",
    "paragraphs": [
      "Marseille, 9 septembre. Le lieutenant-colonel Marchand et le commandant Baratier sont arrivés ce matin à Marseille. Aucune manifestation ne s'est produite à la gare.",
      "Le lieutenant-colonel a confirmé que le commandement du 19e régiment d'infanterie de marine devait lui être confié, mais ce régiment n'ayant pu être formé, les hommes ont été versés dans la brigade du général Bailloud.",
      "Le lieutenant-colonel Marchand a donc été désigné pour faire partie de la Commission internationale qui sera chargée de régler les questions diplomatiques en Chine.",
      "Le colonel a quitté l'hôtel pour le quai d'embarquement des Messageries maritimes. Au passage, il a été acclamé par la foule aux cris de « Vive Marchand ! ». Le navire l'Armand-Bénic est parti à 17 heures."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Social",
    "title": "Récompenses à des officiers français",
    "summary": "Par décision ministérielle du 8 septembre, plusieurs officiers, dont le lieutenant de vaisseau Houarc'h et le capitaine Darueille, sont distingués pour leurs services exceptionnels rendus en Extrême-Orient.",
    "paragraphs": [
      "Par décision ministérielle en date du 8 septembre, plusieurs officiers ont été inscrits au tableau d'avancement ou proposés pour la Légion d'honneur, en récompense de leurs faits de guerre ou de services exceptionnels rendus en Extrême-Orient.",
      "Figurent notamment sur cette liste de distinctions le lieutenant de vaisseau Houarc'h ainsi que le capitaine Darueille, dont la bravoure et le dévouement au service de la France ont été officiellement reconnus."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Administration",
    "title": "Organisation de l'administration chinoise",
    "summary": "Une analyse de la structure administrative de la Chine impériale, où l'autorité absolue de l'Empereur s'articule autour du Conseil suprême et d'une gouvernance provinciale aux pouvoirs étendus.",
    "paragraphs": [
      "L'administration du colossal empire chinois est aussi compliquée que mal connue en Europe. Les pouvoirs législatif, exécutif, religieux, judiciaire et militaire sont réunis entre les mains de l'Empereur.",
      "Le Kiun-Ki-Tchou, ou Conseil suprême, se divise en trois bureaux : le Nei-Ko (affaires intérieures), le Tsung-li-Yamen (relations internationales) et le Li-fan-Yuen (administration des provinces de Mongolie et du Tibet).",
      "Chacune des dix-huit provinces est placée sous les ordres d'un gouverneur ou vice-roi (tsong-tou) ayant des droits très étendus, y compris celui de vie et de mort."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "L'Exposition",
    "title": "Promenade dominicale et idée de fête du travail",
    "summary": "Le public a convergé en masse vers l'Exposition universelle ce dimanche. Une initiative intéressante suggère l'organisation d'une fête du travail mettant en lumière le savoir-faire des corporations.",
    "paragraphs": [
      "Le public du dimanche n'a pas manqué sa promenade coutumière à l'Exposition universelle. La foule s'est portée, avec une ferveur particulière, vers le Trocadéro et le Champ-de-Mars, profitant des derniers aménagements du site.",
      "À cette occasion, plusieurs voix ont suggéré l'organisation prochaine d'une fête du travail, où les différentes corporations défileraient avec leurs instruments et leurs chefs-d'œuvre. C'est une idée séduisante qui mériterait d'être examinée de près par MM. Bouvard et Maillard."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "L'Exposition",
    "title": "Visite du ministre hongrois",
    "summary": "M. Alexandre de Hegedüs, ministre du Commerce de Hongrie, a parcouru l'Exposition universelle ce jour, réaffirmant la volonté de son pays d'affirmer son autonomie commerciale et son prestige industriel à l'international.",
    "paragraphs": [
      "Le ministre du Commerce de Hongrie, M. Alexandre de Hegedüs, a effectué aujourd'hui une visite officielle au pavillon de Hongrie ainsi qu'aux diverses sections industrielles de l'Exposition universelle.",
      "Au cours de cette inspection, le ministre a tenu à souligner l'importance capitale pour la Hongrie d'affirmer, par une présence marquée dans les instances internationales, son indépendance économique et sa souveraineté politique grandissantes."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "L'Exposition",
    "title": "Fin des congrès",
    "summary": "Tandis que les premiers congrès tirent à leur fin, une nouvelle vague s'ouvre à l'Exposition, dédiée aux tramways, aux traditions populaires et au spiritisme, sous la présidence érudite de M. Victorien Sardou.",
    "paragraphs": [
      "Les congrès ayant terminé leurs travaux, de nouveaux commencent, dont le congrès des tramways, celui des traditions populaires, et le congrès spirite sous la présidence de M. Victorien Sardou."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "L'Exposition",
    "title": "Aménagements à la salle des Illusions",
    "summary": "M. Hénard a optimisé les conditions d'accès à la salle des Illusions. Toutefois, la perspective de rendre le spectacle payant deux soirs par semaine provoque un mécontentement légitime du public.",
    "paragraphs": [
      "M. Hénard a réussi à réduire l'attente des spectateurs à la salle des Illusions. Toutefois, le projet de rendre le spectacle payant deux soirées par semaine soulève des récriminations justifiées de la part du public."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "L'Exposition",
    "title": "Statistiques des entrées",
    "summary": "L'Exposition universelle a accueilli samedi 215 995 visiteurs. Cet engouement constant du public est soutenu par le succès éclatant du concours hippique international se tenant à Vincennes.",
    "paragraphs": [
      "Samedi, 215 995 entrées ont été enregistrées à l'Exposition. La vogue du concours hippique international à Vincennes a également attiré de nombreux visiteurs."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "L'Exposition",
    "title": "Activités à l'annexe de Vincennes",
    "summary": "Vincennes a vibré au rythme de festivités variées, incluant pigeons voyageurs et ballons. Grâce à l'Association philomathique, aucune ombre n'est venue ternir cette fête populaire malgré la grande affluence.",
    "paragraphs": [
      "La journée a été marquée par un concours de pigeons voyageurs, une course de ballons et une magnifique fête de nuit avec illuminations et feux d'artifice.",
      "Le concours hippique international a attiré une foule considérable. Aucun accident n'est à déplorer malgré l'affluence, grâce au service médical assuré par l'Association philomathique."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Culture",
    "title": "Les Ojibways et le poète Longfellow",
    "summary": "En hommage à l'œuvre 'Le Chant d'Hiawatha', les Ojibways ont honoré les filles du poète Longfellow en les accueillant dans leur tribu, un geste rare soulignant la reconnaissance de la nation indienne.",
    "paragraphs": [
      "Les derniers survivants de la nation indienne Ojibway ont conféré le titre de membres de leur tribu aux deux filles du poète américain Longfellow, en reconnaissance de son poème 'Le Chant d'Hiawatha'.",
      "Longfellow, décédé il y a vingt ans, a su donner une voix littéraire à l'Amérique et ressusciter les légendes indiennes. Cette affiliation est considérée par les Ojibways comme le plus grand honneur qu'ils puissent conférer à un blanc."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Départ d'un régiment",
    "summary": "Le 4e bataillon du 60e régiment de ligne, sous les ordres du commandant Duponchel, s'apprête à quitter Brive pour l'Algérie, afin de relever les troupes envoyées en Chine.",
    "paragraphs": [
      "Le 4e bataillon du 60e de ligne, sous les ordres du commandant Duponchel, quittera sous peu Brive pour l'Algérie, afin de remplacer les troupes précédemment envoyées en Chine."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Mission militaire espagnole",
    "summary": "Une mission militaire espagnole, commandée par le colonel Alexandre Mos y Zorila, est arrivée en Cerdagne pour assister aux manœuvres de la 63e brigade d'infanterie.",
    "paragraphs": [
      "Une mission militaire espagnole, placée sous le commandement du colonel Alexandre Mos y Zorila, assistera aux manœuvres de la 63e brigade en Cerdagne."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le voyage du roi des Belges",
    "summary": "Le roi Léopold II de Belgique a effectué une escale à Funchal le 9 septembre, avant de poursuivre son voyage vers Ténériffe.",
    "paragraphs": [
      "Funchal, 9 septembre : Le roi Léopold est arrivé dans cette ville et en est reparti aujourd'hui même à destination de Ténériffe."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame de famille à Appeldoorn",
    "summary": "Un drame conjugal s'est produit à Appeldoorn : les époux Wodon ont été retrouvés morts. Le mari aurait tué son épouse avant de se suicider, ruiné par des pertes boursières.",
    "paragraphs": [
      "Bruxelles, 9 septembre : Les époux Wodon ont été retrouvés morts dans leur chambre à coucher, tués par balle. On suppose que le mari, acculé par de lourdes pertes à la Bourse, a abattu son épouse avant de mettre fin à ses jours."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Noyé par accident",
    "summary": "À Marchienne-au-Pont, l'ouvrier Victor Haelterman a tragiquement péri noyé après une chute accidentelle dans un canal, alors qu'il tentait d'y puiser de l'eau.",
    "paragraphs": [
      "Bruxelles, 9 septembre : L'ouvrier Victor Haelterman, qui tentait de puiser de l'eau dans un canal à Marchienne-au-Pont, y est tombé accidentellement et s'est noyé."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Émeute à Akron (Ohio)",
    "summary": "New-York, 9 septembre : Une violente émeute a éclaté à Akron suite à l'arrestation d'un nègre nommé Louis Peck. Le bilan fait état de trois morts et vingt blessés avant le rétablissement de l'ordre par la milice.",
    "paragraphs": [
      "New-York, 9 septembre : Une émeute grave a éclaté à Akron, dans l'Ohio, à la suite de l'arrestation d'un nègre nommé Louis Peck. Trois personnes ont été tuées et vingt autres ont été blessées au cours des troubles.",
      "La foule en colère a pillé et incendié plusieurs bâtiments publics et privés avant que le calme ne soit finalement rétabli grâce à l'intervention énergique de la milice locale."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits Divers",
    "title": "Les rosières de Choisy-le-Roi et Montreuil",
    "summary": "Conformément aux legs testamentaires de bienfaiteurs locaux, des cérémonies de couronnement de rosières ont été célébrées à Choisy-le-Roi pour Mlle Solange Miehaud et à Montreuil-sous-Bois pour Mlle Laurence Loiselle.",
    "paragraphs": [
      "Conformément aux dispositions testamentaires de bienfaiteurs locaux, des cérémonies traditionnelles de couronnement de rosières se sont déroulées cette semaine avec le faste habituel.",
      "À Choisy-le-Roi, Mlle Solange Miehaud a été couronnée, tandis qu'à Montreuil-sous-Bois, les honneurs ont été rendus à Mlle Laurence Loiselle."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrestation d'une bande de noyeurs",
    "summary": "Le commissaire Durand a appréhendé Louis Sachy et Eugène Dechan, deux individus qui précipitaient des passants dans le canal Saint-Martin afin de percevoir une prime de sauvetage. La dernière victime les a dénoncés.",
    "paragraphs": [
      "M. Durand, commissaire de police, vient de procéder à l'arrestation de deux individus, Louis Sachy et Eugène Dechan, accusés d'un crime odieux. Ces hommes précipitaient des passants dans les eaux du canal Saint-Martin pour toucher indûment la prime de sauvetage.",
      "Leur manège a été découvert grâce à leur dernière victime, un ancien sergent arabe qui, après avoir été repêché, a eu la force de les dénoncer aux autorités."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Échos",
    "title": "Nouvelles diverses",
    "summary": "Actualités du jour : réception diplomatique à Rambouillet, disparition de l'archevêque d'Aix, commémorations parisiennes et faits divers insolites survenus en Angleterre.",
    "paragraphs": [
      "M. et Mme Loubet ont offert, à Rambouillet, un déjeuner officiel aux délégués des chambres de commerce britanniques.",
      "L'archevêque d'Aix, M. Gouthe-Soulard, est décédé à l'âge de quatre-vingts ans.",
      "Un monument à la mémoire de Mme Furtado-Heine sera érigé l'année prochaine dans le quatorzième arrondissement de Paris.",
      "Un fait curieux nous parvient d'Angleterre : un chat aurait remporté une course de vitesse contre un train express.",
      "Une statistique anglaise déplore le nombre croissant de navires de commerce perdus ou naufragés cette année.",
      "On raconte l'histoire d'un domestique ayant réveillé son maître en pleine nuit pour lui signaler, avec un zèle absurde, qu'il ne lui restait que deux heures à dormir."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accidents de la vie quotidienne",
    "summary": "Série d'incidents domestiques et urbains à Paris : chutes, accidents de la circulation et heurts violents marquent la chronique de la capitale en cette fin d'année.",
    "paragraphs": [
      "M. Eugène Morin s'est brisé les deux jambes en sautant par sa fenêtre à la suite d'une violente dispute conjugale.",
      "Un cheval attelé à un camion de livraison a pénétré par accident dans une boutique d'épicerie située rue Ordener, causant des dégâts matériels considérables.",
      "Un grave accident de voiture, survenu rue du Faubourg-Saint-Denis, a causé des blessures inquiétantes à un enfant de neuf ans, le jeune Maurice Sansier.",
      "Un fumiste, travaillant sur les toits de la rue de Sambre-et-Meuse, a fait une chute terrible et se trouve dans un état désespéré à l'hôpital."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une femme blessée par une autre",
    "summary": "À la suite d'une altercation, Marie Hardy a poignardé Louise Groset en plein cœur. La victime a été transportée à l'hôpital Bichat, tandis que l'agresseuse était arrêtée rue des Abbesses et conduite au dépôt.",
    "paragraphs": [
      "La victime fut transportée dans une pharmacie où l'on constata qu'elle avait été frappée d'un coup de couteau dans la région du cœur.",
      "Louise Groset, après avoir reçu les premiers soins, a été conduite à l'hôpital Bichat pour y être soignée.",
      "La coupable, Marie Hardy, fut arrêtée dans un débit de vins de la rue des Abbesses alors qu'elle tentait de prendre la fuite.",
      "Interrogée par M. le commissaire de police du quartier des Grandes-Carrières, elle a été dirigée sur le dépôt."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "La Bagarre de l'Avenue d'Orléans",
    "summary": "Une cinquantaine d'individus a semé le trouble avenue d'Orléans, agressant les forces de l'ordre. Six manifestants, dont Émile François et Alphonse Sanz, ont été interpellés et conduits au commissariat.",
    "paragraphs": [
      "Hier matin, une cinquantaine d'individus a semé le trouble sur l'avenue d'Orléans en chantant la Carmagnole et en proférant des propos séditieux.",
      "Les agents de police furent attaqués à coups de pierres et deux d'entre eux ont été blessés à la tête lors de la dispersion du groupe.",
      "Six arrestations ont été opérées par les services du commissaire de police du quartier : Émile François, Alphonse Sanz, André Roux, Richard, Gaston Mortelet et Gaston Lucas.",
      "Les manifestants ont été conduits devant M. le commissaire du quartier pour y être entendus sur les faits qui leur sont reprochés."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une bonne farce",
    "summary": "Une femme, croyant son mari en proie à une crise suicidaire, a alerté la police. Les agents ont trouvé le plaisantin fumant tranquillement sa pipe. Il répondra de cette fausse alerte devant la justice.",
    "paragraphs": [
      "Mme Anna Garon s'est présentée au poste de police, affolée, affirmant que son mari, pris d'une crise d'excitation, menaçait de briser le mobilier et de se suicider avec un rasoir.",
      "Le secrétaire du commissariat, accompagné de deux gardiens de la paix, s'est rendu au domicile pour y découvrir M. Garon très calme, en train de fumer sa pipe à la fenêtre.",
      "Le mari a avoué avoir voulu faire une « bonne farce » à son épouse. Un procès-verbal a été immédiatement dressé contre lui pour tapage et fausse alerte."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un cadavre dans les Tuileries",
    "summary": "Une macabre découverte a été faite dans les jardins des Tuileries. Le jardinier M. Vautrin a exhumé le corps d'un nouveau-né sous un caveau. Une enquête est ouverte.",
    "paragraphs": [
      "Le jardinier M. Vautrin a découvert, dans un caveau situé sous la terrasse du bord de l'eau des Tuileries, le cadavre d'un enfant de sexe féminin âgé d'environ un mois.",
      "M. le commissaire de police a fait transporter le corps à la morgue et a ouvert une enquête sur cette triste affaire."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Voleurs de bagages à la gare du Nord",
    "summary": "Un voyageur suisse, M. Gekgiser, a été dépouillé de mille francs en or par une bande de malfaiteurs à la gare du Nord. Le meneur, Joseph Hemling, et sa complice Jeanne Dedoche ont été arrêtés.",
    "paragraphs": [
      "Un jeune voyageur suisse, M. Gekgiser, a été dépouillé de sa valise contenant mille francs en or par un individu se faisant passer pour un compatriote après s'être attablés dans un café.",
      "La police a arrêté le voleur, Joseph Hemling, âgé de trente ans, ainsi que sa maîtresse Jeanne Dedoche et deux autres individus, membres d'une bande de malfaiteurs spécialisée dans le vol de bagages."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort subite",
    "summary": "Un homme d'une cinquantaine d'années, identifié sous le nom de M. Chabrol-Neville, a été trouvé sans vie sur un banc de l'avenue de Montsouris. Le corps a été transporté à la morgue.",
    "paragraphs": [
      "Un homme d'une cinquantaine d'années s'est affaissé et a trouvé la mort sur un banc de l'avenue de Montsouris.",
      "Des papiers au nom de M. Chabrol-Neville ont été retrouvés sur lui ; le corps a été transporté à la morgue pour les formalités d'usage."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Audacieux malfaiteurs rue Helliard",
    "summary": "Une bande de malfaiteurs s'est introduite par effraction dans un dépôt municipal de la rue Helliard, dérobant outils et matériel en cuivre. L'enquête est menée par le commissariat de Clignancourt.",
    "paragraphs": [
      "Une bande de malfaiteurs s'est introduite par effraction dans un dépôt municipal de la rue Helliard et a dérobé du matériel en cuivre, divers outils, ainsi que plusieurs tonneaux d'arrosage.",
      "M. Lottin, chef balayeur, a constaté le vol. Une enquête est ouverte par le commissaire de police du quartier de Clignancourt."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation de malfaiteurs à Belleville",
    "summary": "M. Reiss, officier de paix, a dirigé une vaste opération de police dans les quartiers de Belleville, Ménilmontant et du Père-Lachaise, procédant à une cinquantaine d'arrestations.",
    "paragraphs": [
      "M. Reiss, officier de paix, a opéré une rafle au cours de laquelle une cinquantaine d'individus ont été appréhendés pour divers méfaits commis dans les quartiers de Belleville, de Ménilmontant et du Père-Lachaise."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enfant disparu",
    "summary": "Le jeune Marcel Patenaille, âgé de sept ans, est porté disparu depuis le 4 septembre, date à laquelle il a été aperçu pour la dernière fois à la sortie de l'hôpital Broussais.",
    "paragraphs": [
      "Le 4 septembre, le jeune Marcel Patenaille, âgé de sept ans, a disparu après avoir quitté l'enceinte de l'hôpital Broussais."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Exposition",
    "title": "Banquet des ouvriers de l'Exposition",
    "summary": "L'entrepreneur Joseph Le Cœur a convié, hier soir, trois cents de ses ouvriers et employés à l'Auberge des Nations pour célébrer leur dévouement sur les chantiers de l'Exposition.",
    "paragraphs": [
      "L'entrepreneur Joseph Le Cœur a réuni, hier soir, trois cents de ses plus anciens ouvriers et employés à l'Auberge des Nations pour les remercier de leur labeur sur les chantiers de l'Exposition."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Exposition",
    "title": "Visite du roi de Macina",
    "summary": "Le roi Aguibou de Macina a visité les Grands Magasins Dufayel, où il a assisté avec un vif intérêt à une séance de prestidigitation et à une représentation du Cinématographe Lumière.",
    "paragraphs": [
      "Le roi Aguibou de Macina a visité les Grands Magasins Dufayel samedi dernier. Durant cette visite, le souverain a assisté avec un vif intérêt à une séance de prestidigitation ainsi qu'à une représentation du Cinématographe Lumière."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Social",
    "title": "Les grèves des ports au Havre, Marseille et Oran",
    "summary": "La situation sociale dans les ports évolue : retour au calme au Havre, tensions persistantes dans les huileries marseillaises, et résolution du conflit à Oran par un accord entre patrons et grévistes.",
    "paragraphs": [
      "Au Havre, le calme est revenu après les grèves qui agitaient la cité portuaire. À Marseille, la situation demeure tendue, notamment au sein des huileries.",
      "De son côté, Oran connaît un dénouement favorable, un accord ayant été officiellement trouvé entre les grévistes et le patronat."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes limitrophes",
    "summary": "Chronique judiciaire des communes environnantes : arrestations pour vols à Levallois et Clichy, drames personnels à Bondy, Meaux et Fontainebleau, et accidents à Mantes et Versailles.",
    "paragraphs": [
      "Levallois-Perret : Arrestation du jeune Émile Samson pour vol. Clichy : Un forcené, Eugène Coppée, a été arrêté après s'être prétendu victime d'un vol.",
      "Bondy : Une voyageuse s'est tragiquement jetée sous un train. Issy-les-Moulineaux : Deux individus ont été appréhendés pour vol de cuivre.",
      "Meaux : L'ouvrier Vandenhaute s'est donné la mort par empoisonnement. Coulommiers : Le garde particulier Rubantol a été grièvement blessé par un braconnier.",
      "Mantes : Une fillette de six ans a été renversée et blessée par une automobile. Saint-Cloud : La propriété de M. Pouard a été cambriolée.",
      "Versailles : Plusieurs accidents de la circulation ont impliqué des automobiles et des cyclistes. Fontainebleau : Suicide du secrétaire d'ambassade, M. Athanase Hadjeynnacoglon."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Départements",
    "title": "Faits divers en province",
    "summary": "Une série de drames secoue la province, incluant des suicides et homicides à Compiègne, Amiens et Dampremy, ainsi que des malversations judiciaires à Brest.",
    "paragraphs": [
      "Compiègne : Suicide d'Eugène Ledoux par asphyxie. Dampremy : Arrestation d'Aimé Duhamel pour tentative d'assassinat.",
      "Amiens : Meurtre d'un voisin par Pierre Nestor. Boulogne-sur-Mer : Un vieillard a été grièvement blessé par un tir de chasse.",
      "Lille : Accident mortel du travail pour Henri Leclercq. Brest : Arrestation de plusieurs gendarmes pour détournement de fourrage."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Dernière Heure",
    "title": "Les événements de Chine",
    "summary": "Face à la gravité de la situation en Chine, le prince Ching s'est rendu à Pékin afin d'entamer des négociations diplomatiques d'urgence.",
    "paragraphs": [
      "On télégraphie de Pékin que le prince Ching s'est rendu dans la capitale. Il a pour mission d'entamer des négociations afin de répondre à la situation particulièrement grave qui prévaut actuellement."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Sports",
    "title": "Succès des courses cyclistes à l'Exposition",
    "summary": "Le Vélodrome municipal de Vincennes a inauguré avec un éclatant succès ses courses cyclistes internationales, marquées par le disputé Grand Prix de l'Exposition et des épreuves d'entraînement de haute tenue.",
    "paragraphs": [
      "La première journée des courses cyclistes internationales, qui se sont déroulées au Vélodrome municipal de Vincennes, a remporté un succès considérable auprès d'un public venu en nombre.",
      "Le programme de la réunion comprenait les séries préparatoires et éliminatoires du Grand Prix de l'Exposition, ainsi qu'un Prix de l'Encouragement et une épreuve disputée avec entraîneurs qui ont vivement intéressé les spectateurs."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Actualités locales",
    "title": "La fête de Corneville-sur-Risle",
    "summary": "La pose de la première pierre du futur théâtre de Corneville-sur-Risle est reportée au 7 octobre. Cet ajustement permet la présence de la fanfare locale et des nombreuses personnalités artistiques attendues.",
    "paragraphs": [
      "La cérémonie de la pose de la première pierre du théâtre, pour laquelle la fanfare « Les Enfants de la Risle » doit prêter son concours, a été renvoyée au dimanche 7 octobre. Cette décision, prise sur une demande instante, permet à l'ensemble de la commune de participer aux festivités prévues.",
      "Une quantité de notabilités artistiques et littéraires ont promis d'y assister. Si le temps demeure favorable, la manifestation sera assurément charmante à tous égards."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Concerts et divertissements",
    "title": "Nouvelles de la Scala",
    "summary": "M. Marchand dément tout engagement de Polin hors de la Scala. Par ailleurs, le théâtre recrute des figurantes pour sa nouvelle revue « Paris t'expose ».",
    "paragraphs": [
      "Contrairement à une note erronée parue dans certains journaux, il n'a jamais été question de l'engagement de Polin dans un théâtre d'opérette. M. Marchand tient à ce que l'on sache que l'artiste appartient exclusivement à la Scala pour longtemps encore.",
      "La Scala recherche de jeunes et jolies femmes pour les scènes nouvelles de la revue « Paris t'expose ». S'adresser à M. Saint-Lot, régisseur, de deux à quatre heures."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Causerie financière",
    "title": "Analyse du marché boursier",
    "summary": "Le marché boursier manifeste une belle fermeté, soutenue par l'abondance des capitaux et des perspectives optimistes sur les titres d'État, les valeurs russes et les grandes compagnies de chemins de fer françaises.",
    "paragraphs": [
      "Nous disions samedi dernier que tout semblait prêt pour une sérieuse et durable campagne de hausse. Cette appréciation se corrobore : sans grands changements dans les cours, une fermeté soutenue s'est affirmée, portée par l'abondance des capitaux et les nouvelles plus favorables d'Extrême-Orient.",
      "Le 3 % a gagné 20 centimes, clôturant à un niveau satisfaisant, tandis que le 3 % amortissable et les fonds d'État étrangers, incluant les fonds russes, maintiennent une grande fermeté.",
      "Bien que la Russie puisse supporter les dépenses de la campagne de Chine, le besoin de capitaux pour son réseau de chemins de fer suggère l'émission d'obligations garanties par l'État. Cette perspective favorise les sociétés de crédit comme la Banque de Paris et le Crédit Lyonnais.",
      "Les grandes compagnies de chemins de fer enregistrent des résultats exceptionnels avec une plus-value de près de 50 millions depuis janvier. La cote des actions s'élève lentement, bien que les obligations des Chemins de la Camargue et certaines séries espagnoles (Medina-Segovie et Lerida-Reuss) nécessitent une attention particulière des porteurs pour régulariser leurs titres."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Faits divers",
    "title": "Le drame du chiffonnier",
    "summary": "Au chevet d'une enfant gravement malade, un père et son aïeul attendent avec une indicible angoisse le diagnostic fatal du médecin, face à une détresse sociale poignante.",
    "paragraphs": [
      "Au chevet de la petite enfant malade, le père Gévu et le chiffonnier attendent avec une angoisse poignante l'intervention du médecin. La fillette est gravement atteinte, ses symptômes évoquant les affres d'une méningite foudroyante.",
      "Malgré le dénuement profond et l'absence de ressources, un mince espoir subsistait jusqu'à l'arrivée du praticien qui, après examen, a confirmé la gravité extrême de l'état de l'enfant, plongeant le grand-père et le chiffonnier dans une douleur inconsolable."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Récits",
    "title": "Souvenirs d'Afrique",
    "summary": "M. Jean Marin, cultivateur dans le Lot, témoigne des séquelles de santé subies durant sa campagne en Afrique et de sa guérison miraculeuse après trente-cinq années de souffrances persistantes.",
    "paragraphs": [
      "M. Jean Marin, cultivateur à Mayrinhac-Lentour (Lot), raconte les épreuves de santé traversées après sa campagne d'Afrique. Âgé d'une soixantaine d'années, il témoigne des ravages du climat africain qui ont causé une fièvre persistante et des maux incurables durant trente-cinq ans.",
      "Après de nombreuses consultations médicales infructueuses, il relate sa guérison spectaculaire grâce à un remède spécifique dont il vante les bienfaits dans sa correspondance."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Feuilleton",
    "title": "La détresse de Thérèse Belcourt",
    "summary": "Sortie de la Salpêtrière, Thérèse Belcourt est accablée par la misère. Menacée par les dettes exigées par M. Brigoin, elle envisage un sacrifice désespéré pour assurer la survie de sa famille.",
    "paragraphs": [
      "Thérèse Belcourt revient de la Salpêtrière, étreinte par une mélancolie profonde. Malgré le printemps, aucun espoir ne pénètre son âme face aux dettes accumulées et au délai de paiement impitoyable imposé par M. Brigoin.",
      "La famille, ruinée, ne peut plus compter sur ses maigres possessions pour survivre. Le découragement est tel que la mort apparaît comme la seule issue, poussant Thérèse à envisager un sacrifice ultime pour sauver les siens.",
      "Elle décide de se rendre chez M. Brigoin, prête à tout pour éviter la catastrophe finale."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Revue commerciale",
    "title": "Marché des grains et matières premières",
    "summary": "Analyse du marché : les farines se stabilisent, les huiles de colza connaissent une hausse notable, tandis que la récolte de houblon déçoit par sa qualité irrégulière.",
    "paragraphs": [
      "Sur le marché, les farines ont connu un léger mouvement de hausse avant de se stabiliser. Les offres de la culture étant peu importantes, le marché reste ferme.",
      "Les huiles de colza ont enregistré un vif mouvement de hausse, tandis que les sucres sont restés stables. Concernant les houblons, la récolte est jugée inférieure en quantité et irrégulière en qualité, provoquant des écarts de prix sensibles selon les provenances."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Nouvelles diverses",
    "title": "Informations maritimes et locales",
    "summary": "Chronique des activités portuaires : opérations de sauvetage et mouvements de navires à Dinan, Saint-Malo et Noirmoutier.",
    "paragraphs": [
      "À Dinan, on prévoit le renflouement du yacht René pour mardi. À Saint-Malo, la goélette Étincelle a été signalée en bonne route. À Noirmoutier, le dundee Jésus-Marie-Joseph a été secouru après avoir chassé sur ses ancres."
    ]
  }
];
