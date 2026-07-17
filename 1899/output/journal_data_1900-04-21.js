// Date: 1900-04-21
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-04-21 (Version Restaurée, 36 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Les préparatifs de l'Exposition de 1900",
    "summary": "L'Exposition de 1900 s'organise : le Petit Palais et le Grand Palais dévoileront les trésors de l'art français et international. L'inauguration officielle est fixée au dimanche 29 avril.",
    "paragraphs": [
      "Les expositions Centennale et Décennale de l'art français présenteront les chefs-d'œuvre de la peinture, de la sculpture et de la décoration françaises de 1800 à 1889, ainsi que les œuvres produites de 1889 à nos jours.",
      "Le Petit Palais, qui abrite une exposition rétrospective, exposera des œuvres-types contribuant à la décoration générale.",
      "L'architecture et la gravure trouveront leur place dans le Grand Palais, dont la façade sur l'avenue Nicolas II sera occupée par l'exposition centennale.",
      "L'ouverture des deux expositions au public est prévue pour le dimanche 29 avril."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Les inaugurations des pavillons",
    "summary": "Les palais des Invalides s'apprêtent à recevoir leurs premières visites. M. Loubet inspectera demain les pavillons coloniaux du Trocadéro avant l'arrivée des souverains étrangers.",
    "paragraphs": [
      "Les palais de l'Esplanade des Invalides vont recevoir bientôt leur inauguration particulière. Le Président de la République et les ministres ont accepté de présider plusieurs visites, notamment vers le 25 ou 27 avril.",
      "M. Loubet se rendra demain, dimanche, au Trocadéro pour parcourir les pavillons coloniaux français.",
      "Les seules visites officielles étrangères annoncées jusqu'à présent sont celles du shah de Perse, du prince royal de Danemark, du roi de Grèce et du roi de Suède."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Activité dans la Rue des Nations",
    "summary": "L'effervescence gagne la Rue des Nations à l'approche de l'inauguration. Si la France est prête, plusieurs nations étrangères intensifient leurs efforts pour terminer leurs pavillons sous peu.",
    "paragraphs": [
      "Les visites journalières du Président de la République motivent un redoublement d'activité dans les sections étrangères. Les architectes ont dû prendre de nouveaux engagements pour hâter la finition des travaux.",
      "La mosquée musulmane annonce son ouverture pour la fin du mois. Le pavillon de la France est prêt ; ceux de l'Autriche et de la Hongrie le seront sous huit jours. La Belgique inaugurera le 5 mai. La Grèce, la Serbie et d'autres attendent des envois.",
      "Les pavillons de l'Angleterre, de l'Allemagne et des États-Unis ne pourront être prêts avant dix jours."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Les bureaux internationaux",
    "summary": "M. François Arago a finalisé l'installation de sept bureaux internationaux au palais des Congrès. Ces services diplomatiques et sociaux seront accessibles au public sous huitaine.",
    "paragraphs": [
      "M. François Arago a terminé l'installation de la section des bureaux internationaux au palais des Congrès. Sept bureaux sont installés, traitant de sujets comme la répression de la traite, les poids et mesures, et l'union postale.",
      "Le palais des Congrès devrait être ouvert au public avant une semaine."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Concours d'horticulture",
    "summary": "Le second concours de l'exposition horticole se tiendra le 8 mai, mettant à l'honneur les azalées et les fruits de saison avec une forte participation étrangère attendue.",
    "paragraphs": [
      "Le 8 mai prochain aura lieu le deuxième concours organisé à l'exposition horticole, consacré à la culture de l'azalée et des fruits de saison.",
      "Les sections étrangères d'horticulture participeront vraisemblablement au concours, à l'exception possible de l'Angleterre et de la Hongrie."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Social",
    "title": "L'affluence des touristes anglais",
    "summary": "Malgré les rumeurs de boycott liées à l'Exposition universelle, les touristes britanniques affluent massivement à Paris. On évoque même le déploiement de policemen pour assurer la sécurité des sections anglaises.",
    "paragraphs": [
      "On annonce de Londres qu'une foule de touristes ont déjà franchi le détroit pour venir à Paris, démentant ainsi les rumeurs de boycott de l'Exposition universelle par les Anglais.",
      "Une agence de voyages a expédié des centaines de touristes par jour. Le bruit court que l'Angleterre songerait à confier la garde de ses sections à une escouade de ses policemen."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "À l'annexe de Vincennes",
    "summary": "Les travaux à l'annexe de Vincennes progressent rapidement. L'installation de tramways électriques et la modernisation de la flotte sur le lac assurent désormais un accès facilité aux visiteurs.",
    "paragraphs": [
      "Les travaux à l'annexe de Vincennes se poursuivent avec activité. La route circulaire et les diverses sections sont dorénavant desservies par des tramways électriques.",
      "La flottille des bateaux sur le lac est remise à neuf et un transbordeur électrique a été installé près des galeries."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Politique",
    "title": "Le Congrès de Montpellier",
    "summary": "Le deuxième congrès mutualiste languedocien, fédérant 800 sociétés du Midi, a constitué son bureau. M. Deschanel, président de la Chambre, présidera le banquet de clôture des travaux.",
    "paragraphs": [
      "Le deuxième congrès mutualiste languedocien, comprenant huit cents sociétés du Midi, a officiellement constitué son bureau. Le banquet de clôture sera présidé par M. Deschanel, président de la Chambre des députés."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Le prince de Galles en Belgique",
    "summary": "En route pour Cologne après son séjour au Danemark, le prince de Galles a effectué une brève halte en gare de Schaerbeek pour un déjeuner diplomatique en compagnie de l'empereur Guillaume.",
    "paragraphs": [
      "Le prince de Galles, venant du Danemark, a traversé la Belgique ce matin en train spécial. Il a rencontré l'empereur Guillaume à la gare de Schaerbeek pour un déjeuner avant de repartir vers Cologne."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Le Primrose Day à Londres",
    "summary": "Londres a commémoré hier l'anniversaire de la mort de lord Beaconsfield. Plusieurs couronnes, dont celle envoyée par la reine Victoria, ont été déposées en hommage sur son tombeau.",
    "paragraphs": [
      "L'anniversaire de la mort de lord Beaconsfield a été célébré hier à Londres. De nombreuses couronnes ont été déposées au pied de sa statue. La reine Victoria a envoyé une couronne qui a été déposée sur son tombeau."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Les troubles en Ashanti",
    "summary": "Des soulèvements achantis contre les tribus Bekwaïs, alliées de l'Angleterre, ont contraint les autorités coloniales à dépêcher d'urgence des renforts militaires depuis Lagos vers la Côte d'Or et la Nigeria.",
    "paragraphs": [
      "Les Achantis ont multiplié les attaques contre les tribus Bekwaïs, populations fidèles à la Couronne britannique, causant de nombreuses pertes parmi les indigènes. Face à l'acuité de la situation, le commandement a ordonné l'envoi immédiat de troupes de renfort en provenance de Lagos, à destination de la Côte d'Or et de la Nigeria, afin d'y rétablir l'ordre et d'assurer la sécurité des protectorats."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "Le départ du prince Kotohito",
    "summary": "À l'heure de quitter la France, le prince Kotohito-Kanin a pris congé du président de la République à l'Élysée après avoir été convié à un ultime déjeuner officiel par le ministre des Affaires étrangères.",
    "paragraphs": [
      "Le prince Kotohito-Kanin s'apprête à regagner le Japon. À cette occasion, M. le ministre des Affaires étrangères a tenu à offrir, en son honneur, un déjeuner d'adieu marquant la fin de sa mission diplomatique en France.",
      "Préalablement à son départ définitif, le prince a été reçu en audience solennelle au palais de l'Élysée afin de prendre officiellement congé de M. le Président de la République."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame à la prison militaire de Nantes",
    "summary": "Un terrible drame a ensanglanté la prison militaire de Nantes : le jeune soldat Pierre-Marie Le Bellec, âgé de dix-neuf ans, a été abattu par le surveillant-chef lors d'une altercation violente.",
    "paragraphs": [
      "Un incident mortel s'est produit à la prison militaire de Nantes. Le jeune soldat Pierre-Marie Le Bellec, âgé de dix-neuf ans, a trouvé la mort sous les balles du surveillant-chef de l'établissement.",
      "Le drame a éclaté lors d'une altercation violente entre les deux hommes. Le détenu, dans un accès de fureur, aurait projeté une cruche sur son geôlier, lequel, pour se défendre, a fait usage de son arme de service, atteignant mortellement le soldat."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrestation d'un escroc aux mandats",
    "summary": "Jean-Baptiste Lachaisse, un escroc multirécidiviste, a été appréhendé à Charenton alors qu'il tentait de percevoir le montant d'un mandat frauduleux émis au nom d'un vétérinaire imaginaire.",
    "paragraphs": [
      "La police de Charenton vient de mettre la main sur Jean-Baptiste Lachaisse, un escroc multirécidiviste fort connu des services. L'individu a été surpris en flagrant délit alors qu'il cherchait à encaisser un mandat postal falsifié, établi par ses soins au bénéfice d'un vétérinaire n'existant que sur le papier.",
      "Confronté aux preuves accablantes recueillies par les enquêteurs, le malfaiteur a fini par passer aux aveux, reconnaissant une longue série d'opérations frauduleuses commises dans plusieurs localités de la région."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Tentative de meurtre à la Foire aux Pains",
    "summary": "M. Hamaoui, commerçant égyptien établi sur le boulevard Voltaire, a été victime d'une agression armée. Atteint de deux projectiles, son état inspire aux médecins de vives inquiétudes.",
    "paragraphs": [
      "Un crime odieux a été commis à la foire du boulevard Voltaire. M. Hamaoui, un commerçant de nationalité égyptienne qui y exploitait une baraque, a été la cible d'une tentative de meurtre perpétrée par des individus malintentionnés.",
      "Atteint par deux balles tirées à bout portant, le malheureux a été transporté d'urgence vers un établissement hospitalier. Les médecins qui l'ont examiné jugent son état fort grave, les blessures étant d'une nature particulièrement préoccupante."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Assassinat d'une fillette",
    "summary": "À Vichy, un journalier a assassiné la jeune Hélène, âgée de onze ans. L'individu, appréhendé par les autorités, a avoué avoir commis ce crime atroce pour assouvir une vengeance à l'encontre des parents de l'enfant.",
    "paragraphs": [
      "Un atroce crime a été commis à Vichy : une fillette de onze ans, la jeune Hélène, a été lâchement assassinée par un journalier. L'individu, rapidement arrêté par les autorités, a confessé son crime, déclarant avoir agi par pure vengeance à l'encontre des parents de l'enfant."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un ivrogne incendiaire",
    "summary": "Un habitant de l'impasse Letort, en proie à une vive ivresse, a mis le feu à son mobilier hier soir. Grâce à l'intervention rapide des locataires, le sinistre a été maîtrisé avant de prendre de graves proportions.",
    "paragraphs": [
      "Un habitant de l'impasse Letort, en proie à une vive ivresse, a mis le feu à son mobilier hier soir. Grâce à l'intervention prompte des locataires, le sinistre a pu être maîtrisé avant que les flammes ne prennent des proportions tragiques."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation de l'assassin de la petite Hélène",
    "summary": "L'assassin de la petite Hélène Perrithon, nommé Duchesne, a été arrêté à Châteaudun. Après avoir tenté de mettre fin à ses jours, il est désormais sous les verrous, écroué à la prison locale.",
    "paragraphs": [
      "Les autorités s'étaient rendues au domicile de Duchesne pour procéder à son arrestation, mais celui-ci s'était volatilisé.",
      "Les habitants, mobilisés, organisèrent des battues qui permirent la macabre découverte du cadavre de la petite Hélène dans les bois de la Plaisanterie.",
      "Duchesne, l'assassin de la jeune Hélène Perrithon, vient d'être arrêté à Châteaudun. Ayant tenté de se suicider au moment de son interpellation, il a été secouru et immédiatement écroué à la prison de la ville."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Météorologie",
    "title": "Bulletin de la température",
    "summary": "Après une journée printanière magnifique, le mercure accuse une baisse sensible en Italie et sur le littoral, frôlant le zéro sur les sommets du Puy-de-Dôme et de l'Aigoual.",
    "paragraphs": [
      "Samedi 21 avril, fête de saint Anselme.",
      "Nous avons bénéficié hier d'une magnifique journée, comptant parmi les plus belles depuis le début du printemps.",
      "Toutefois, la température est en baisse en Italie et sur le littoral. On notait ce matin 1° au Puy-de-Dôme et 0° à l'observatoire de l'Aigoual."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident à Puteaux",
    "summary": "Grave accident à Puteaux : le chiffonnier Auguste Sautellier a été broyé par les roues d'une charrette en tentant d'y monter. Grièvement blessé, il a été transporté d'urgence à l'hôpital Laënnec.",
    "paragraphs": [
      "Un chiffonnier nommé Auguste Sautellier, âgé de vingt-sept ans et domicilié rue des Rosiers, a été victime d'un grave accident. En tentant de monter sur la charrette d'un compagnon, il a chuté sous les roues qui lui ont broyé les deux cuisses et fracturé l'épaule droite. L'infortuné a été transporté d'urgence à l'hôpital Laënnec."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Incendie à Courbevoie",
    "summary": "Un incendie violent a détruit hier soir une manufacture de cuirs vernis avenue Gambetta. Pompiers et militaires ont conjugué leurs efforts pour enrayer le sinistre dont les dégâts sont considérables.",
    "paragraphs": [
      "Un violent incendie s'est déclaré hier soir, à huit heures et demie, dans une manufacture de cuirs vernis, 8, avenue Gambetta. Le feu a pris dans un atelier qui a été entièrement détruit.",
      "Les pompiers de Courbevoie et de Puteaux, une compagnie d'infanterie, les gendarmes et une brigade d'agents ont coopéré pour éteindre ce sinistre. Les dégâts sont très importants."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Drame conjugal à Levallois-Perret",
    "summary": "Victime des sévices de son mari, un alcoolique notoire, une jeune femme de dix-neuf ans a riposté à une ultime provocation en le blessant grièvement d'un coup de couteau. L'homme est hospitalisé.",
    "paragraphs": [
      "Mme Barignon, âgée de dix-neuf ans, est depuis quelque temps en butte aux mauvais traitements de son mari, âgé de vingt-sept ans, alcoolique invétéré.",
      "Hier matin, son époux jeta un plein seau d'eau froide sur le lit où elle se trouvait, en proie à une forte fièvre. La malheureuse femme, exaspérée, saisit un couteau et en porta un coup terrible à Barignon, qui s'affaissa dans une mare de sang.",
      "Le blessé a été transporté à l'hôpital Beaujon. Mme Barignon a été interrogée par le commissaire de police et laissée en liberté provisoire."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Chien enragé à Enghien",
    "summary": "Un chien atteint d'hydrophobie terrorisait les rues d'Enghien. Le gendarme Boyon a dû faire usage de son revolver pour abattre l'animal et écarter tout danger pour la population locale.",
    "paragraphs": [
      "Le gendarme Boyon a abattu, hier, à coups de revolver, un chien atteint d'hydrophobie qui parcourait les rues de la ville."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Cambriolage à Sannois",
    "summary": "Une propriété située route d'Argenteuil à Sannois, occupée par Mme Juliette Delaporte, a été la cible de cambrioleurs qui ont minutieusement mis le lieu à sac.",
    "paragraphs": [
      "Des cambrioleurs ont mis à sac une propriété sise 3, route d'Argenteuil, louée par Mme Juliette Delaporte."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie à Charenton",
    "summary": "Un tison incandescent tombé du pont de chemin de fer P.-L.-M. a enflammé une charrette de paille. Les chevaux ont été sauvés et les pompiers ont empêché la propagation du feu aux structures du pont.",
    "paragraphs": [
      "Deux voitures chargées de paille passaient sous le pont du chemin de fer de P.-L.-M. quand un tison chauffé au rouge, tombant du tablier, mit le feu à l'une d'elles.",
      "Les chevaux furent dételés à temps par des passants. Les pompiers accourus ont évité un sinistre plus grave en inondant les poteaux de bois du pont."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicides divers",
    "summary": "Le Petit Parisien relate trois drames : le suicide tragique d'un septuagénaire au Kremlin-Bicêtre, la macabre découverte d'un corps à Saint-Cloud et le décès d'une adolescente à Fontainebleau.",
    "paragraphs": [
      "Au Kremlin-Bicêtre : M. Pierre Bouvard, âgé de soixante-dix ans, s'est donné la mort en se précipitant dans la cage d'escalier depuis le troisième étage de son domicile.",
      "À Saint-Cloud : Le corps d'un homme de trente-six ans, domicilié à Versailles et dont la disparition avait été signalée depuis trois semaines, a été repêché dans la Seine.",
      "À Fontainebleau : Le corps de la jeune Clémentine Leton, âgée de quinze ans, qui avait mystérieusement disparu le 6 avril dernier, a été découvert."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Exposition Universelle",
    "title": "Petit Guide de l'Exposition",
    "summary": "Poursuite de notre déambulation au sein de l'Exposition Universelle : de l'élégance des jardins de l'Esplanade des Invalides à la splendeur industrielle du Champ-de-Mars, haut lieu du génie humain en cette fin de siècle.",
    "paragraphs": [
      "Continuons notre visite sur l'Esplanade des Invalides, où se déploient les jardins français ainsi que les palais consacrés aux Manufactures nationales.",
      "Nous admirons les somptueuses tapisseries des Gobelins et la section française des industries diverses. Plus loin, sur le quai d'Orsay, sont harmonieusement rassemblés les pavillons des puissances étrangères.",
      "Au Champ-de-Mars, nous découvrons avec admiration le palais de l'Électricité, les prouesses de la métallurgie et le vaste palais dédié aux fils, tissus et vêtements."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Sports",
    "title": "Courses à Neuilly-Levallois",
    "summary": "Compte-rendu hippique détaillé : pronostics pour les épreuves du samedi 21 avril, dont le Prix des Ouakaris, et résultats complets des courses disputées le vendredi 20 avril à l'hippodrome d'Enghien.",
    "paragraphs": [
      "Voici le programme et les pronostics pour les courses du samedi 21 avril : dans le Prix des Ouakaris, les chances semblent partagées ; le Prix Vichnou ainsi que les autres épreuves de trot au programme promettent une lutte serrée entre les favoris des turfistes.",
      "Pour ce qui est des résultats des courses disputées le vendredi 20 avril à Enghien, les performances ont été remarquées pour les chevaux Ambigu et Mamie, qui se sont illustrés devant un public nombreux et attentif aux évolutions de la piste."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Culture",
    "title": "Courrier des Théâtres",
    "summary": "Découvrez le programme des matinées théâtrales de ce dimanche à la Comédie-Française, à l'Opéra-Comique et à l'Odéon, ainsi que les informations concernant les spectacles parisiens de la saison.",
    "paragraphs": [
      "Les représentations en matinée de demain dimanche se tiendront comme à l'accoutumée à la Comédie-Française, à l'Opéra-Comique et à l'Odéon.",
      "Parmi les annonces diverses, il convient de noter la réouverture prochaine du Combat naval ainsi que les préparatifs relatifs à l'inauguration de la Cour des Miracles."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Sports",
    "title": "Automobiles et circulation",
    "summary": "La préfecture de police renforce la surveillance des automobiles parisiennes par des brigades cyclistes, tandis que le ministère de l'Intérieur centralise désormais l'autorisation des courses sur tout le territoire.",
    "paragraphs": [
      "La commission permanente de circulation, instituée par la préfecture de police, est convoquée pour mercredi prochain. Cette commission aura à discuter des vitesses, des différents systèmes d'avertisseurs et de l'obligation pour les voitures automobiles de porter un numéro d'immatriculation très apparent.",
      "En attendant, une brigade d'agents cyclistes a été chargée de veiller, dès hier, à ce que les conducteurs, voituriers et motocyclistes circulant dans Paris ne dépassent pas les vitesses autorisées.",
      "Le ministère de l'Intérieur a invité, par dépêche, tous les préfets de France à interdire toutes les courses d'automobiles et de motocyclettes annoncées dans leurs départements. Toutes les demandes d'autorisation pour ces courses doivent désormais être transmises au ministère de l'Intérieur, seul habilité à accorder ou refuser la permission."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Sports",
    "title": "Suppression des entraîneurs",
    "summary": "Pour éviter tout litige avec les municipalités de Seine-et-Oise, le comité du Guidon vélocipédique parisien a formellement interdit la présence d'entraîneurs dans la course Paris-Châtres qui aura lieu demain.",
    "paragraphs": [
      "Pour éviter des contestations avec les municipalités de Seine-et-Oise, le comité du Guidon vélocipédique parisien vient de décider la suppression des entraîneurs dans la course Paris-Châtres, qui se disputera demain."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Sports",
    "title": "Avis aux vélodromes",
    "summary": "L'U.V.F. a infligé de lourdes amendes à dix coureurs cyclistes. Ces derniers sont suspendus de toute compétition sur le sol français tant qu'ils n'auront pas réglé leurs dettes envers la fédération.",
    "paragraphs": [
      "Les coureurs Momo, Gouvoltz, Muraour, Cordang, Bourotte, Auzani, Maflé, Magli, Héditch et Minozzi ont été frappés de fortes amendes par l'U.V.F. Ces coureurs ne pourront participer à aucune course en France avant d'avoir versé le montant de cette amende."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Sports",
    "title": "Transformation de la course Paris-Lille",
    "summary": "La course Paris-Lille initialement prévue pour le 29 courant est modifiée : elle devient une épreuve de 100 kilomètres sur piste réservée aux motocycles, avec une dotation totale de 800 francs.",
    "paragraphs": [
      "La course Paris-Lille, qui devait se courir le dimanche 29 courant, est transformée par ses organisateurs en une épreuve de 100 kilomètres sur piste pour motocycles, et dotée de prix de 500, 150, 100 et 50 francs."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Sports",
    "title": "Impressions sur les vitesses",
    "summary": "Baras, vainqueur de Paris-Roubaix, livre ses sensations sur la conduite des tricycles à pétrole à haute vitesse, tandis qu'un témoin décrit l'angoisse éprouvée devant une telle prouesse mécanique.",
    "paragraphs": [
      "Voici deux impressions intéressantes sur les vitesses atteintes par les tricycles à pétrole. La première est de Baras, vainqueur de Paris-Roubaix : « Les impressions qu'on éprouve à 80 kilomètres à l'heure ? Peu de chose. C'est à peine si l'on sent que l'on s'en va. Je n'ai donné toute ma vitesse qu'au-delà de Pontoise. »",
      "La seconde est d'un spectateur : « Quand je le vis passer, je frémis en songeant à ce qu'il fallait de sang-froid pour chevaucher ce boulet de canon. Toute la journée, il m'est resté une angoisse. À de telles vitesses, les sensations du coureur doivent être terrifiantes. »"
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Vie Locale",
    "title": "Fêtes des environs de Paris",
    "summary": "Le calendrier des festivités locales pour le 22 avril annonce des réjouissances dans de nombreuses communes de la région parisienne, notamment à Argenteuil, Issy-les-Moulineaux et Mantes.",
    "paragraphs": [
      "Le programme des fêtes du 22 avril dans les environs de Paris comprend : Argenteuil (fête du Val), Arcueil-Cachan, Auteuil, Auneuil, Boudy, Breuil-Bois-Robert, Chaucotira, Coutevroult, Eragny, Lulaines, Neuilly, Guérard, Hodenc-en-Bray, Issy-les-Moulineaux, Le Pecq, Mantes, Marolles, Méry-sur-Oise, Meudon, Palaiseau, Rueil, Saint-Mesmes, Villeneuve-Saint-Georges et Voutangis."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Feuilleton",
    "title": "Roman : Le Mariage Secret",
    "summary": "Arrivés à Vera-Cruz, Claire et Césaire s'enfoncent dans les méandres de l'énigmatique affaire de Rio-Frio, où Césaire s'impose désormais comme un guide indispensable à la quête de vérité du docteur.",
    "paragraphs": [
      "Dans l'Amérique du Nord, où les recherches scientifiques du docteur l'avaient d'abord conduit, Claire s'était borné au rôle modeste de fourrier intelligent. Mais dès qu'on avait débarqué à Vera-Cruz, les fonctions de Césaire avaient pris une importance capitale.",
      "Il devenait maintenant un guide et un conseiller dont les avis allaient être à chaque pas sollicités par celui qui s'était donné pour tâche de porter enfin la lumière dans la ténébreuse aventure de Rio-Frio.",
      "L'histoire se poursuit sur leurs souvenirs de la bataille de Rio-Frio, le rôle de l'auberge locale et la rencontre avec la vieille Assomption."
    ]
  }
];
