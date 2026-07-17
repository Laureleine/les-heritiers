// Date: 1900-07-01
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-07-01 (Version Restaurée, 28 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Les étudiants d'Upsal",
    "summary": "À l'occasion de l'Exposition universelle, la jeunesse étudiante française accueille les délégations de l'université d'Upsal, tissant des liens culturels profonds entre les deux nations par la musique et la recherche.",
    "paragraphs": [
      "À l'occasion de l'Exposition, l'Association des étudiants de Paris a adressé un appel aux étudiants étrangers, les conviant à envoyer des délégations dans la capitale française. De grandes fêtes auront lieu au mois d'août. Ce sera une manifestation charmante que celle de tous ces jeunes gens, appartenant à des patries diverses, accourus sur un même point, dans ce Paris qui fut toujours un foyer de lumière intellectuelle.",
      "Nous assistons en ce moment au prélude des fêtes du mois d'août. Des étudiants étrangers sont déjà à Paris. Ce sont les étudiants d'Upsal. Le roi de Suède est le premier monarque qui soit venu visiter notre Exposition ; les étudiants suédois ont de même apporté les premiers le témoignage de leur sympathie à notre jeunesse des Écoles.",
      "Les étudiants d'Upsal méritent un intérêt spécial, parce que, ainsi qu'on l'a dit, ils représentent un milieu universitaire profondément original, où la pensée française garde des amitiés précieuses. Upsal est l'un des lieux du monde où ceux qui étudient vont en pèlerinage comme à une Mecque.",
      "La Suède est infiniment riche en chants populaires, aux rythmes lents et aux mélodies graves ; le chœur des étudiants d'Upsal garde précieusement ce répertoire des aïeux, le transmettant de génération en génération. C'est ici que nous voyons combien les étudiants suédois sont attachés à la pensée française : ils se sont voués à de patientes recherches pour retrouver nos anciennes chansons de geste.",
      "Cette dette, la jeunesse française l'acquitte aujourd'hui en accueillant fraternellement la jeunesse suédoise."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Main Gauche (Deuxième Partie)",
    "summary": "Le baron Théodore de Valmondois découvre, stupéfait, une lettre intime et délicatement parfumée signée Lolo, révélant des détails inattendus et touchants sur le passé familial de la jeune femme.",
    "paragraphs": [
      "Le baron déchira l'enveloppe et courut à la signature : Lolo ! Il prononça ces deux syllabes avec une vraie stupéfaction. Comment, Lolo ! Elle si nerveuse, si extravagante, avec cette écriture... En voilà une qui embêterait les graphologues.",
      "Il lisait un mot par-ci, un mot par-là, un lambeau de phrase. Il y avait huit pages serrées : « Mon père avait l'une des grandes études d'avoué de Paris ; il épousa ma mère par amour ; très jolie, blonde, je suis son portrait. »",
      "Le jeune homme, tout à fait calé dans son fauteuil, les jambes croisées, la tête au dossier, commença, pour la continuer jusqu'au bout, la lecture de la lettre rose tendre, au papier satiné, et fleurant un parfum subtil."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Convention franco-espagnole",
    "summary": "Une convention entre M. Delcassé et l'ambassadeur d'Espagne régularise les frontières coloniales dans le golfe de Guinée, assurant la continuité territoriale de l'influence française du Sud-Algérien au Sénégal.",
    "paragraphs": [
      "Le seul point qui restait à déterminer en ce qui concerne l'extension rationnelle de notre domaine colonial vient d'être fixé, grâce à une convention signée ces jours derniers par M. Delcassé avec M. Léon y Castillo, ambassadeur d'Espagne à Paris.",
      "Dans le golfe de Guinée, l'Espagne obtient la reconnaissance par nous d'une partie des droits qu'elle revendique ab antiquo sur la partie nord de la côte, depuis l'embouchure du Campo jusqu'à Santa-Clara.",
      "En vertu du même arrangement, l'Espagne, à qui, à la suite de pourparlers déjà anciens, nous avions reconnu la propriété du littoral entre le cap Blanc et le cap Bojador, nous reconnaît de son côté les territoires de l'intérieur dont la possession nous permet d'étendre sans interruption notre légitime influence du Sud-Algérien au Sénégal."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits divers",
    "title": "Arrivée des élèves de l'École navale suédoise",
    "summary": "Les soixante-sept élèves de l'École navale suédoise, menés par le capitaine Dyrssel, sont arrivés à Paris. Le prince royal de Suède les attendait à la gare Saint-Lazare pour saluer son fils, le prince Wilhem.",
    "paragraphs": [
      "Les soixante-sept élèves de l'École navale suédoise, partis du Havre hier matin par le rapide de huit heures, sont arrivés à la gare Saint-Lazare à onze heures quarante, sous la conduite du capitaine de vaisseau Dyrssel.",
      "Sur le quai de la gare se trouvaient environ deux cents personnes, parmi lesquelles le prince royal de Suède, qui attendait son fils, le prince Wilhem de Sudermanie.",
      "Bientôt les valises et les sacs des voyageurs sont placés sur les omnibus. Les aspirants suédois montent, qui sur l'impériale, qui à l'intérieur des voitures, et l'on se dirige vers les grands hôtels du Trocadéro."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits divers",
    "title": "Tentative d'assassinat à Saint-Maur",
    "summary": "Eugène Albouis, un employé licencié, a tiré un coup de revolver sur Mme veuve Fabien, directrice d'un établissement de bains à Saint-Maur. L'agresseur a été appréhendé après une brève poursuite.",
    "paragraphs": [
      "Le quartier du Parc, à Saint-Maur-des-Fossés, a été, hier soir, le théâtre d'une audacieuse tentative d'assassinat ayant la vengeance pour mobile.",
      "Mme veuve Fabien, propriétaire d'un établissement de bains, prenait il y a un an à son service un nommé Eugène Albouis, âgé de quarante ans. Après plusieurs disputes, elle dut se résoudre à le chasser une seconde fois.",
      "Vers dix heures, Albouis se présentait à l'établissement du boulevard National, demandait à être introduit dans le cabinet de la directrice et tirait un revolver de fort calibre. Le projectile lui effleura l'épaule et alla se loger dans le mur.",
      "Une véritable chasse à l'homme commença alors à travers les rues de Saint-Maur-des-Fossés. Le meurtrier fut finalement arrêté et conduit au commissariat de Joinville-le-Pont."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Exposition",
    "title": "Le Prince de Grèce au pavillon de la Ville de Paris",
    "summary": "Le prince Constantin, duc de Sparte, a visité le pavillon de la Ville de Paris. Accompagné de M. Sacilly, il a examiné les services techniques municipaux et le musée historique installé au premier étage.",
    "paragraphs": [
      "Le prince Constantin, duc de Sparte, a visité dans la matinée d'hier, en compagnie d'un officier d'ordonnance et du commissaire général hellène, M. Sacilly, le pavillon de la Ville de Paris.",
      "Guidé à travers les salles par les directeurs de la section municipale, le prince s'est d'abord fait expliquer le fonctionnement des services de voirie, d'assainissement et de distribution d'eau en usage pour Paris.",
      "Le prince a commencé ensuite une lente promenade à travers l'admirable musée parisien du premier étage, s'arrêtant longuement devant le berceau, la voiturette et les armes du roi de Rome."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Technologie",
    "title": "Les automobiles militaires",
    "summary": "Le ministère de la Guerre généralise l'usage des fourgons automobiles pour le transport des explosifs et les manœuvres, exposant à l'Exposition des modèles prometteurs d'efficacité et de mobilité.",
    "paragraphs": [
      "Le ministre de la Guerre a, depuis quelques mois déjà, adopté les fourgons automobiles pour le transport dans les arsenaux des explosifs et des projectiles ; il vient d'étendre cette mesure en appliquant l'automobilisme à la manœuvre des armées en campagne.",
      "En effet, depuis quelques semaines, on peut admirer à l'Exposition cinq voitures automobiles qui seront prochainement mises en service et dont l'emploi témoigne d'un progrès incontestable.",
      "Ces voitures sont fort élégantes ; elles offrent, sur le cheval, l'avantage d'une marche à toute heure et sans fatigue."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "International",
    "title": "Les troubles de Chine",
    "summary": "L'amiral Seymour est de retour à Tien-Tsin avec sa colonne. L'incertitude demeure quant au sort des légations étrangères à Pékin, malgré les assurances de protection du vice-roi de Shanghaï.",
    "paragraphs": [
      "On n'a reçu hier que des télégrammes relatifs à des faits déjà connus. Il ressort de la dépêche de l'amiral Seymour qu'il est de retour à Tien-Tsin avec sa colonne armée, mission qu'il n'aurait pu réussir si des secours ne lui avaient été envoyés.",
      "Aucune nouvelle au sujet des légations européennes de Pékin. L'incertitude la plus grande continue à régner sur leur sort, bien que le vice-roi de Shanghaï ait annoncé au consul de France que les légations continuaient à bénéficier de la protection du gouvernement impérial."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Extrême-Orient",
    "title": "L'échec de la marche sur Pékin",
    "summary": "L'expédition vers Pékin a dû rebrousser chemin face aux Boxers. Après la prise et la destruction de l'arsenal de Tien-Tsin, le bilan des pertes alliées est dressé suite au retour des troupes.",
    "paragraphs": [
      "L'expédition n'a pu atteindre Pékin par le chemin de fer.",
      "Le 15 juin, deux attaques des Boxers sur mon détachement ont été repoussées avec des pertes considérables pour les assaillants. Les jours suivants, nous avons eu à subir de nouvelles attaques de la part des insurgés et des réguliers chinois. Le chemin de fer était endommagé.",
      "Nous avons dû renoncer à poursuivre la marche en avant et reprendre le chemin de Tien-Tsin, non sans avoir infligé des pertes sérieuses aux Boxers.",
      "Le 23 juin, nous nous sommes emparés de l'arsenal impérial au nord-est de Tien-Tsin. Nous y avons trouvé des canons, des fusils du dernier modèle et des munitions. Nous avons bombardé les forts chinois situés sur la rivière.",
      "Ayant trouvé des provisions de riz et des munitions, nous aurions pu tenir encore quelques jours mais, étant embarrassés par nos blessés, nous avons demandé des secours à Tien-Tsin. Ces secours sont arrivés le 27 et l'arsenal a été évacué. Avant de quitter l'arsenal, nous avons décidé de le détruire.",
      "Voici le total de nos pertes : Anglais tués, 27, blessés, 97 ; Américains tués, 4, blessés, 28 ; Français tués, 1, blessés, 1 ; Allemands tués, 1, blessés, 62 ; Italiens tués, 0, blessés, 3 ; Japonais tués, 2, blessés, 3 ; Autrichiens tués, 1, blessés, 1 ; Russes tués, 10, blessés, 2."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Extrême-Orient",
    "title": "Prise d'un Arsenal Chinois",
    "summary": "Le 27 juin, les troupes alliées ont capturé l'arsenal de Tien-Tsin. La brigade navale anglaise et le régiment chinois ont repoussé les forces adverses au prix de pertes notables.",
    "paragraphs": [
      "L'arsenal situé au nord-est de Tien-Tsin a été capturé dans la matinée du 27 par les troupes alliées.",
      "Les troupes anglaises comprenaient la brigade navale et le régiment chinois. La brigade navale a eu 4 tués et 15 blessés. Le régiment chinois a repoussé une grande attaque des Boxers sur le flanc gauche, leur infligeant de grosses pertes."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Extrême-Orient",
    "title": "Nouvelles de Chine",
    "summary": "Li-Hung-Chang, par ordre de l'impératrice douairière, annule son départ de Canton. Trente Boxers et brigands ont été exécutés suite à cette décision.",
    "paragraphs": [
      "Li-Hung-Chang, suite à l'arrivée inattendue d'un édit de l'impératrice douairière, a renoncé à son départ de Canton. Trente pirates, Boxers et autres criminels ont été décapités hier par ordre de Li-Hung-Chang."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Extrême-Orient",
    "title": "Le Chef des Troupes alliées",
    "summary": "Le vice-amiral russe Alexeïev est officiellement investi du commandement suprême des forces expéditionnaires alliées dans le Nord de la Chine.",
    "paragraphs": [
      "On apprend, de source officielle, que le vice-amiral russe Alexeïev prend le commandement de l'expédition des troupes alliées dans le Nord."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Cuirassé américain échoué",
    "summary": "Le cuirassé américain Oregon s'est échoué sur l'île Howki, près de Che-Fou. Un navire à vapeur a été dépêché pour porter secours à l'équipage.",
    "paragraphs": [
      "On annonce que le cuirassé américain Oregon s'est échoué sur l'île Howki, à dix milles au nord de Che-Fou. Un vapeur est parti à son secours."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Informations politiques : Les Quatre Contributions",
    "summary": "Le ministre des Finances, M. Caillaux, a été entendu par la commission du budget concernant la réforme des contributions directes et l'évaluation de la propriété non bâtie.",
    "paragraphs": [
      "M. Caillaux, ministre des Finances, a été entendu par la commission du budget. Il a déclaré qu'en présence de la complexité des questions relatives à la mainmorte, il n'insistait pas pour comprendre cet article dans le rapport des contributions directes.",
      "L'article relatif à l'évaluation nouvelle de la propriété non bâtie est suspendu en attendant la délibération du Conseil d'État."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "L'impôt sur le Revenu",
    "summary": "Par 10 voix contre 7, la commission spéciale de la Chambre adopte les signes extérieurs pour l'impôt sur le revenu et appelle à une refonte fiscale.",
    "paragraphs": [
      "La commission spéciale de la Chambre a adopté les signes extérieurs comme mode d'assiette de l'impôt sur le revenu, par 10 voix contre 7.",
      "La commission a exprimé le vœu de voir remplacer les quatre contributions directes et l'impôt de 4 % sur les valeurs mobilières par l'impôt sur le revenu."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique",
    "title": "Chambre des Députés : Augmentation de la flotte",
    "summary": "La Chambre des députés a entériné un projet de loi majeur doté d'un crédit de 800 millions de francs, destiné à moderniser la flotte de combat, fortifier les défenses coloniales et outiller les ports nationaux.",
    "paragraphs": [
      "La Chambre a adopté, dans son ensemble, le projet de loi relatif à l'augmentation de la flotte. Ce programme complet englobe la défense des colonies, le perfectionnement de l'outillage des ports ainsi que l'accroissement des forces navales de combat, le tout représenté par un crédit global d'environ 800 millions de francs.",
      "M. l'amiral Bienaimé avait proposé un amendement ambitieux visant à inclure la construction de dix cuirassés et de divers autres bâtiments de guerre ; toutefois, cet ajout fut rejeté par l'assemblée. Le projet a finalement été adopté à mains levées."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Social",
    "title": "Le centenaire du général Desaix",
    "summary": "La cité de Clermont a célébré avec solennité le centenaire du général Desaix, sous la présidence du ministre de la Guerre, le général André, venu honorer cette figure héroïque de l'histoire militaire.",
    "paragraphs": [
      "La ville de Clermont célèbre avec éclat le centenaire de la mort du général Desaix. Le ministre de la Guerre, le général André, s'est rendu sur place afin de présider les fêtes commémoratives. Au cours du banquet officiel, il a prononcé un discours vibrant, rendant un hommage solennel à la mémoire de Desaix, tout en associant les figures illustres de Vercingétorix et de Pascal au rayonnement de la cité."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Bulletin des opérations",
    "summary": "Le théâtre des opérations au Transvaal reste intense : Lord Methuen saisit un important butin, tandis que les troupes britanniques font face à des escarmouches boers près de Sénékal.",
    "paragraphs": [
      "Lord Roberts a télégraphié de Pretoria que le général Lord Methuen a poursuivi les troupes boers avec vigueur, parvenant à s'emparer d'un butin considérable composé de 8 000 moutons et de 500 bêtes à cornes.",
      "De son côté, le général Rundle poursuit méthodiquement sa marche vers le nord. Par ailleurs, des unités boers ont audacieusement attaqué un convoi anglais aux abords de Sénékal ; malgré les pertes infligées lors de l'engagement, les assaillants ont été repoussés avec succès par les troupes britanniques."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident mortel à la gare du Nord",
    "summary": "Un employé télégraphiste, Gilles Le Coz, est décédé tragiquement à la suite d'une imprudence lors d'un déplacement sur l'impériale d'un train en marche à la gare du Nord.",
    "paragraphs": [
      "Hier matin, M. Gilles Le Coz, employé télégraphiste de l'État, âgé de trente-deux ans et demeurant rue de Vaugirard, prenait à la gare du Nord le train de 7 h 30 à destination de Pontoise. Il avait pris place sur l'impériale d'un wagon de troisième classe.",
      "À peine le convoi s'était-il ébranlé que M. Le Coz, souhaitant changer de compartiment, longea la toiture du wagon. En se redressant, il heurta violemment de la tête une poutre en fer de la passerelle du pont Marcadet et bascula sur la voie parallèle.",
      "Des hommes d'équipe, témoins du drame, le relevèrent in extremis avant l'arrivée d'un autre convoi et le transportèrent d'urgence à la salle de secours de la gare. Le médecin de service constata une grave fracture du crâne.",
      "Transporté aussitôt à l'hôpital Lariboisière, le malheureux a succombé à ses blessures une heure après son admission."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un automobiliste écrase un machiniste",
    "summary": "Un gardien de garage, utilisant une voiturette sans autorisation, a renversé un machiniste rue Réaumur. La foule, saisie de colère, a détruit le véhicule et malmené le conducteur.",
    "paragraphs": [
      "Le gardien d'un garage de motocyclettes de la rue Mousigny, Édouard Netter, âgé de vingt-six ans et demeurant au numéro 11, avait l'habitude, chaque soir après la fermeture, de faire une virée au volant d'une des voitures confiées à sa garde.",
      "Hier soir, aux commandes d'une voiturette à pétrole, il a renversé et grièvement blessé, devant le numéro 68 de la rue Réaumur, un machiniste du théâtre de la Gaîté, dont l'état a nécessité un transfert immédiat à l'hôpital Saint-Louis.",
      "Netter tenta de prendre la fuite, mais ayant été arrêté boulevard de Sébastopol par un encombrement, il fut rattrapé par la foule qui le poursuivait. Il fut extrait de sa machine et copieusement frappé, tandis que le véhicule était mis en pièces et incendié par les passants.",
      "M. Dijray, commissaire de police du quartier des Arts-et-Métiers, a dressé procès-verbal contre le gardien de garage avant de le remettre en liberté sous convocation."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident au Métropolitain",
    "summary": "Un ouvrier électricien travaillant à la station du Métropolitain, place du Châtelet, a été victime d'une décharge électrique mortelle hier matin. M. le commissaire Bureau a procédé aux constatations d'usage.",
    "paragraphs": [
      "Un ouvrier électricien, qui travaillait hier matin à la pose de fils à la station du Métropolitain, place du Châtelet, a été foudroyé par une décharge électrique.",
      "M. Bureau, commissaire de police, a procédé aux constatations d'usage."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Exposition",
    "title": "Les succès de l'Exposition Universelle",
    "summary": "Le succès ne se dément pas pour les attractions de l'Exposition Universelle : du Palais de la Danse au Stéréorama mouvant, en passant par la Grande Roue, les visiteurs affluent pour admirer ces panoramas et spectacles.",
    "paragraphs": [
      "Le Palais de la Danse est décidément le gros succès de l'Exposition. Il faut convenir que ce spectacle qui y est offert sort du banal et du déjà-vu. Le luxueux ballet Terpsichore et ses danses nationales alternent avec l'Heure du Berger, le ballet des Provinces françaises.",
      "Le seul tapis roulant gratuit de l'Exposition est celui qui mène du Trocadéro à la passerelle de Madagascar. Aux accents de la musique malgache, les visiteurs sont élevés sans fatigue jusqu'au Panorama où sont installés de puissants ventilateurs électriques.",
      "Rappelons que le splendide panorama du Mont-Blanc et les nombreux dioramas du Club Alpin sont visibles les dimanches pour 50 centimes seulement.",
      "Il n'y a qu'un cri parmi tous les visiteurs de l'Exposition : Il faut voir le Stéréorama mouvant. C'est ravissant, c'est merveilleux.",
      "L'affluence devient de plus en plus grande au Trocadéro, autour de ce joli tableau animé, voyage qui commence à Bougie le matin et se termine à Oran, dans un admirable coucher de soleil.",
      "C'est vraiment d'un passionnant intérêt que de voir revivre de si saisissante façon, grâce à la maîtrise du peintre Castellani, les épisodes de la mission Congo-Nil. Les nombreux visiteurs qui affluent au Panorama Marchand en emportent un impressionnant souvenir.",
      "La scène, d'un réalisme saisissant, du Conseil de guerre de Nîmes n'est pas la seule attraction du Musée Monibur, 57, avenue de la Motte-Piquet, bien qu'elle suffise seule à en assurer la vogue.",
      "Depuis son heureuse inauguration, le théâtre Indo-Chinois met une note gaie dans ce joli coin des jardins du Trocadéro peuplé de musées et de pagodes. Le cadre pittoresque, reconstitution des théâtres du Cambodge et de l'Annam, est bien fait pour faire ressortir les originalités du spectacle : la Bague enchantée, pantomime d'après une légende, et les danses cambodgiennes avec la sensationnelle Cléo de Mérode.",
      "À travers les curiosités de l'Exposition, aucune n'attire davantage l'attention que l'audacieuse conception qu'est la Grande Roue de Paris, dont le nombre de visiteurs augmente en raison directe de celui des visiteurs de l'Exposition."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans la banlieue",
    "summary": "Trois drames marquent la banlieue : un accident grave à Vanves, le décès d'un homme à Saint-Germain-en-Laye après un accident de tramway, et la triste noyade d'un enfant au Pecq.",
    "paragraphs": [
      "Vanves : Vers dix heures, hier matin, un nommé Louis Vanaeker, âgé de vingt-sept ans, domicilié 19, rue Frémicourt à Paris, en voulant monter, boulevard du Lycée, sur une voiture en marche, a fait un faux mouvement et est tombé sous les roues du véhicule. Le malheureux, qui avait les deux jambes broyées, a été transporté dans un état désespéré à l'hôpital Boucicaut.",
      "Saint-Germain-en-Laye : M. Canteloup, scieur de pierres, qui lundi avait été renversé et traîné place du Château par le tramway à vapeur, est mort hier soir, à sept heures, à l'hôpital, des suites de ses blessures.",
      "Le Pecq : Un enfant de sept ans, Eusèbe Masson, n'étant pas rentré chez lui la nuit de vendredi à samedi, son père, M. Masson, employé de commerce, pressentant un malheur, prévint dès le matin le garde champêtre et un de ses amis, M. Coulon. Tous trois se rendirent sur les bords de la Seine et aperçurent le chapeau de l'enfant qui flottait près du ponton du Touriste. Le pauvre petit, s'étant probablement penché, avait glissé à l'eau."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Dernière Heure",
    "title": "Catastrophe au port de New-York",
    "summary": "Un gigantesque incendie a ravagé les docks du Lloyd de l'Allemagne du Nord à New-York, détruisant plusieurs transatlantiques et entrepôts. On déplore d'importants dégâts matériels et des pertes humaines à craindre.",
    "paragraphs": [
      "Un incendie s'est déclaré dans les docks du Lloyd de l'Allemagne du Nord à New-York. Il a commencé cette après-midi dans des balles de coton, sur l'appontement n°3, et s'est étendu à trois autres appontements de la même Compagnie transatlantique.",
      "Parmi les marchandises se trouvaient de nombreuses barriques d'huile. Les pompiers de Hoboken, appelés aussitôt, n'ont pas pu arrêter les progrès de l'incendie. Des bateaux-pompes pour l'extinction de l'incendie ont dû être mandés pour aider les pompiers.",
      "Trois bateaux de déchargement ont pris feu. Il a fallu les remorquer vers New-York et faire sortir les transatlantiques Empereur-Guillaume-le-Grand, Brême, Main et Saale. Ces trois derniers étaient enflammés.",
      "Tous les appontements du Lloyd de l'Allemagne du Nord sont détruits. Cinq entrepôts de cinq étages sont en feu. La rivière est bondée de petites embarcations en flammes. De nombreux pompiers, épuisés de fatigue, ont été transportés dans les hôpitaux. On craint que des marins des navires en flammes aient péri, mais on en a sauvé une vingtaine qui avaient sauté par-dessus bord."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "Le théâtre parisien s'anime : 'Rip' célèbre sa 300e représentation à la Gaîté, des reprises ont lieu au théâtre Cluny, et l'on annonce l'arrivée prochaine d'une troupe japonaise.",
    "paragraphs": [
      "Rip atteint aujourd'hui à la Gaîté sa 300e représentation ; cela fait en tout 965 fois que la célèbre légende aura été représentée à Paris. Si l'on comptait les représentations qui ont eu lieu en Europe et en Amérique, on arriverait au chiffre colossal de vingt mille au moins.",
      "Aujourd'hui, au théâtre Cluny, en matinée et en soirée, reprise de la Marraine de Charley.",
      "On annonce pour les premiers jours de juillet l'arrivée de la troupe japonaise du théâtre de Tokio qui doit donner à Paris une série de représentations.",
      "Aujourd'hui, au Combat Naval, en matinée et le soir, deux grandes représentations. Un service de voitures spécial partira de la place de la République à deux heures et demie et à huit heures et demie."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Voix d'Outre-Tombe (Quatrième Partie)",
    "summary": "Lors d'une réception mondaine, Gabrielle de Saint-Amand est troublée par l'apparition d'Armand Breuilhet. Malgré son dédain, elle accepte une entrevue privée avec lui dans les jardins d'hiver pour un entretien crucial.",
    "paragraphs": [
      "La mère de Daniel était superbement belle dans une robe de velours pensée, un peu de la couleur de ses prunelles. Quant à Gabrielle, appuyée au bras du lieutenant Robert de Sineuse, le cadet des Montfleury, elle excitait sur son passage les murmures à peine contenus d'une admiration que partageait bien celui qui la conduisait.",
      "Mademoiselle de Saint-Amand embrassa la duchesse Pauline et, pendant que celle-ci la présentait, elle s'inclina devant la baronne de Saralbe. « Tu me fais honneur, mignonne », lui dit madame de Montfleury, « car tu es vraiment, ce soir, d'une beauté rayonnante, incomparable. »",
      "Robert de Sineuse, un beau et sympathique lieutenant de l'infanterie de marine, demanda à la comtesse Marguerite la permission de faire les honneurs de la fête à sa cousine Gabrielle. Au détour d'une conversation, Gabrielle aperçut Armand Breuilhet. Malgré son hautain mépris, elle tressaillit si profondément que l'officier s'arrêta.",
      "Armand Breuilhet s'avançait vers mademoiselle de Saint-Amand. Caché par un massif de bambous, il la dévorait des yeux. Il se trouva subitement devant elle, incliné, et demanda au baron de Saralbe de le présenter comme l'un de ses meilleurs amis.",
      "Le baron de Saralbe, avec un tact extraordinaire, présenta Armand à Robert. Armand tendit la main, Robert n'osa pas refuser. L'avocat cherchait à s'entretenir avec Gabrielle de choses importantes concernant sa vie. Gabrielle, ne voulant pas le recevoir chez elle, demanda au baron un coin retiré. Il lui indiqua les jardins d'hiver."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Informations Presse",
    "title": "L'Agriculture Nouvelle",
    "summary": "Le journal « L'Agriculture Nouvelle » propose cette semaine une édition riche en conseils techniques, abordant notamment la culture du tabac, l'apiculture et le congrès de l'enseignement agricole.",
    "paragraphs": [
      "L'Agriculture Nouvelle, journal populaire, traite cette semaine de nombreux sujets : la culture du tabac, l'apiculture avec l'essaimage artificiel, les questions viticoles et le Congrès de l'Enseignement agricole. Le numéro est en vente au prix de 10 centimes."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Chemins de Fer",
    "title": "Départs et arrivées des paquebots",
    "summary": "Informations sur le trafic maritime : le paquebot « Salazie » a atteint Saïgon et « La Normandie » est arrivée à Rio de Janeiro, le 29 juin.",
    "paragraphs": [
      "Le paquebot « Salazie », venant de Marseille, est arrivé à Saïgon le 29 juin. Le paquebot « La Normandie » est arrivé à Rio de Janeiro le 29 juin."
    ]
  }
];
