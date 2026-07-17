// Date: 1900-05-26
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-05-26 (Version Restaurée, 22 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Agriculture",
    "title": "Congrès international d'horticulture",
    "summary": "Ouverture solennelle du Congrès international d'horticulture : le ministre de l'Agriculture souligne l'importance du progrès scientifique et des liens fraternels tissés entre les nations par la culture des jardins.",
    "paragraphs": [
      "Au début de la séance, le ministre de l'Agriculture a prononcé un discours définissant le but des délibérations du Congrès international d'horticulture.",
      "Le ministre a salué les éminents représentants venus du monde entier, y voyant l'annonce d'une ère nouvelle de rapports cordiaux entre les hommes.",
      "Le président de la Société nationale d'horticulture a retracé l'histoire de cette discipline des temps anciens jusqu'à nos jours, soulignant l'honneur dû aux horticulteurs pour les découvertes modernes.",
      "Le ministre de l'Agriculture s'est ensuite retiré, accompagné par les membres du bureau."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Le Pavillon du Club Alpin au Champ-de-Mars",
    "summary": "Au Champ-de-Mars, le Club Alpin offre une immersion saisissante dans les sommets, marquée par un panorama grandiose du mont Blanc, chef-d'œuvre de réalisme artistique.",
    "paragraphs": [
      "Le pavillon du Club Alpin, situé au Champ-de-Mars près du quai, propose une série de dioramas et de panoramas sur les sites montagneux les plus remarquables.",
      "La pièce maîtresse est le panorama du mont Blanc, une œuvre magistrale de seize mètres sur cinquante, offrant aux visiteurs l'illusion parfaite de la réalité des Alpes grâce au talent de peintres spécialisés."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Une Fête Chinoise au Trocadéro",
    "summary": "Inauguration des somptueux pavillons chinois au Trocadéro : une représentation fidèle de l'architecture de Pékin et de Canton, célébrée par une réception et une grande démonstration pyrotechnique.",
    "paragraphs": [
      "M. Oliartost Vaporeau, commissaire général de l'empire de Chine à l'Exposition universelle, a inauguré les pavillons chinois dans les jardins du Trocadéro.",
      "Les constructions comprennent une reproduction fidèle d'une porte de Pékin, un palais des Tambours et des boutiques typiques de Canton et de Pékin.",
      "La fête a été marquée par une spectaculaire démonstration pyrotechnique et un lunch agrémenté de mets chinois, réunissant l'ambassadeur de Chine et les membres du commissariat général."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Incident au Sénat : Question sur l'affaire Dreyfus",
    "summary": "Au Sénat, le ministre de la Guerre, M. de Galliffet, condamne fermement la divulgation de documents confidentiels par un officier et appelle à la réconciliation nationale.",
    "paragraphs": [
      "La séance est ouverte à deux heures trente sous la présidence de M. Fallières. M. Chaumié adresse une question au gouvernement concernant le détournement présumé de documents relatifs à l'affaire Dreyfus.",
      "Le ministre de la Guerre, M. le général de Galliffet, admet que des documents ont été divulgués par un officier de son ministère, acte qu'il qualifie de crime. L'officier a été immédiatement mis en retrait d'emploi.",
      "Le ministre souligne sa volonté de réconciliation nationale et avertit avec fermeté que tout manquement à la réserve par les militaires sera sévèrement sanctionné."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Affaire Tomps et contre-espionnage",
    "summary": "Le président du Conseil, M. Waldeck-Rousseau, clôt l'incident concernant le commissaire Tomps, justifiant ses contacts par un souci de défense personnelle.",
    "paragraphs": [
      "M. Waldeck-Rousseau intervient concernant M. Tomps, commissaire spécial accusé de liens douteux. Il explique que M. Tomps, chargé du contre-espionnage, a commis une imprudence en entrant en contact avec un certain sieur P. par pur souci de défense personnelle.",
      "Le président du Conseil affirme que M. Tomps n'a jamais cherché à nuire au gouvernement et conclut en déclarant que l'incident est clos."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Faits Divers",
    "title": "Procès aux assises de la Seine",
    "summary": "La cour d'assises de la Seine a acquitté un accusé poursuivi pour brutalités envers une femme, celle-ci ayant courageusement pris la défense de son amant à la barre, convaincant ainsi les jurés.",
    "paragraphs": [
      "La cour d'assises de la Seine a jugé hier une affaire singulière où une femme a soutenu avec ferveur son amant contre les nombreux témoignages l'accusant de brutalité. Les jurés, convaincus par la sincérité de la défense, ont prononcé l'acquittement de l'accusé."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Social",
    "title": "Grève des cochers de fiacre",
    "summary": "En signe de protestation contre les tarifs imposés par leur direction, les cochers de la Compagnie Camille ont cessé le travail depuis jeudi, réclamant une revalorisation de leurs conditions.",
    "paragraphs": [
      "En raison de l'abaissement des tarifs imposé par la plupart des compagnies, les cochers de la Compagnie Camille ont cessé le travail depuis jeudi, protestant vivement contre le maintien des anciens prix par leur direction qui ne tient aucun compte de leurs revendications."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Incident diplomatique entre astronomes",
    "summary": "À Madrid, une réception organisée à Santa Pola a été marquée par un regrettable incident d'étiquette entre astronomes français, espagnols et anglais, né d'un malentendu sur les horaires.",
    "paragraphs": [
      "À Madrid, un incident d'étiquette a opposé, lors d'une fête organisée à Santa Pola, des astronomes français et espagnols à leurs homologues anglais. Le différend, causé par un malentendu sur les horaires de réception, a quelque peu terni l'éclat de la cérémonie scientifique."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Assassinat en Chine",
    "summary": "Une dépêche transmise de Pékin rapporte l'assassinat du général commandant les troupes expéditionnaires contre les Boxers, frappé à mort lors d'une entrevue avec les chefs des émeutiers.",
    "paragraphs": [
      "Une dépêche de Pékin annonce une nouvelle tragique : le général commandant les troupes impériales envoyées contre les Boxers a été assassiné au cours d'une entrevue avec les chefs des émeutiers. Ce crime laisse craindre une recrudescence des hostilités dans la région."
    ]
  },
  {
    "id": 10,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'Affaire Sainte-Noy",
    "summary": "M. Bozzani, juge d'instruction, poursuit activement l'enquête sur l'assassinat survenu rue de Malte. De nouveaux témoignages ont été recueillis, notamment concernant des individus aux sobriquets suspects.",
    "paragraphs": [
      "M. Bozzani, juge d'instruction, a entendu hier après-midi plusieurs témoins relatifs à l'assassinat dont Mme Sainte-Noy a été victime rue de Malte.",
      "Il a interrogé longuement plusieurs suspects connus sous les sobriquets de « le Marquis » et « Cyrano », dont les dépositions doivent permettre de faire la lumière sur ce crime odieux."
    ]
  },
  {
    "id": 11,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents autour de Paris",
    "summary": "Hier à Neuilly, deux accidents distincts ont causé des blessures graves : un homme a été victime d'un bris de voiture, tandis qu'un jeune apprenti chapelier a chuté d'un échafaudage au deuxième étage.",
    "paragraphs": [
      "Hier après-midi, à Neuilly, une voiture s'étant rompue, un des occupants, âgé de vingt et un ans et demeurant rue de Téhéran, a été projeté contre un autre voyageur. Il a été blessé à la tête et a eu le bras gauche fracturé.",
      "À Neuilly également, un jeune homme nommé Julien, âgé de 18 ans, est tombé hier matin de l'échafaudage d'un deuxième étage. L'infortuné chapelier a eu la cuisse droite grièvement blessée, ainsi que l'épaule et le bras droit."
    ]
  },
  {
    "id": 12,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame à Mantes : une fillette attaquée par un ours",
    "summary": "À Mantes, une fillette de huit ans prénommée Alice Roger a été violemment attaquée par un ours. Elle ne dut son salut qu'à l'intervention du dompteur Cauzier et a été transportée chez elle dans un état critique.",
    "paragraphs": [
      "Un ours s'est précipité sur un groupe d'enfants et s'est acharné sur une fillette, Alice Roger, âgée de huit ans.",
      "Quoique muselé, l'animal avait saisi l'enfant et lui labourait le visage. Un dompteur, nommé Cauzier, voyant le danger, a porté deux coups de bâton à l'animal qui a lâché sa jeune victime. La fillette a été ramenée dans un état très grave au domicile de ses parents."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Sports",
    "title": "Les Courses à Saint-Ouen",
    "summary": "La réunion hippique du 25 mai à Saint-Ouen a attiré une foule nombreuse. L'Inspecteur s'est adjugé le prix du Nivernais, tandis que Désiré Oak a remporté le prix Roncevaux, marquant une étape vers le Grand Steeple-Chase.",
    "paragraphs": [
      "La journée du vendredi 25 mai promettait un vif intérêt à cause de la présence de chevaux engagés dans le Grand Steeple-Chase de Paris.",
      "Le prix du Nivernais a été gagné facilement par L'Inspecteur, battant Fanum et Tamerville. Le prix Roncevaux a été remporté par Désiré Oak.",
      "Résultats du Pari Mutuel : Marika, Désiré, Grelot, Jolly Night, Dorlan."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Sports",
    "title": "Concours d'escrime",
    "summary": "Les épreuves éliminatoires du concours d'escrime entre professeurs ont rendu leur verdict : MM. Filippi, Lefèvre, Lemoine, Boulenser, Millet et Haller sont qualifiés pour les poules finales.",
    "paragraphs": [
      "Ont été retenus hier pour les poules finales du concours d'escrime entre professeurs : MM. Filippi, Lefèvre, Lemoine, Boulenser, Millet, Haller, et comme remplaçants MM. Largo et Marty."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Culture",
    "title": "Courrier des Théâtres",
    "summary": "Le programme des matinées de dimanche annonce les représentations de Charlotte Corday et Joseph. Par ailleurs, le comédien Pougaud fait son retour sur les planches du Châtelet dans son rôle de Vif-Argent.",
    "paragraphs": [
      "Matinées de demain dimanche : Comédie-Française (Charlotte Corday), Opéra-Comique (Joseph, les Visitandines).",
      "Au Châtelet, rentrée de l'excellent comique Pougaud dans le rôle de Vif-Argent qu'il a créé."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Culture",
    "title": "Concerts et divertissements",
    "summary": "Le Cigare renouvelle son affiche avec succès, tandis que l'Olympia, les Folies-Bergère, l'Eldorado et le Casino de Paris attirent les foules en cette période d'Exposition Universelle.",
    "paragraphs": [
      "Le Cigare vient de renouveler son affiche avec une fantaisie sportive de MM. Zamacoïs et Petitmangin, interprétée avec brio par Mlle Jeanne Bloch.",
      "L'Olympia et les Folies-Bergère connaissent un succès colossal en cette période d'Exposition.",
      "Le Petit Aiglon continue à l'Eldorado sa brillante carrière ; Dranem y soulève des rires inextinguibles.",
      "Sandow, l'incomparable athlète, accomplit des prodiges chaque soir au Casino de Paris."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Exposition Universelle",
    "title": "Attractions et spectacles à l'Exposition",
    "summary": "L'Exposition Universelle bat son plein avec la première du ballet Terpsichore, le succès continu des panoramas exotiques et une grande matinée navale prévue pour le dimanche.",
    "paragraphs": [
      "Au Palais de la Danse, première représentation de Terpsichore, ballet international.",
      "Les attractions du panorama du Tour du Monde continuent à faire les délices du public avec ses troupes exotiques.",
      "Demain dimanche, au Concert naval, grande matinée avec reconstitution de combat naval."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Finance",
    "title": "Tirage des Bons de l'Exposition",
    "summary": "Le Crédit Foncier a procédé au tirage des Bons de l'Exposition de 1900, déterminant les séries bénéficiaires de la première émission.",
    "paragraphs": [
      "Hier a eu lieu au Crédit Foncier le tirage des Bons de l'Exposition de 1900. Les numéros ont été extraits des roues donnant droit aux séries de la première émission."
    ]
  },
  {
    "id": 19,
    "page": 4,
    "category": "Économie",
    "title": "Assemblée générale ordinaire de la Banque Internationale de Paris",
    "summary": "La Banque Internationale de Paris présente un bilan 1899 solide, marqué par l'essor des tramways parisiens, des contrats en Bulgarie et une volonté de distribuer un dividende en hausse.",
    "paragraphs": [
      "L'exercice 1899, dont nous avons l'honneur de vous soumettre les comptes, a été marqué par la hausse du taux d'intérêt de l'argent et par l'extension considérable des affaires industrielles.",
      "Le renchérissement de l'argent, qui profite surtout aux banques de dépôts, ne peut, en raison même de la nature spéciale de nos opérations, constituer pour notre établissement qu'un élément accessoire de bénéfices.",
      "Quant au mouvement industriel, dont nous avions déjà signalé le réveil dans nos précédents rapports et qui s'est plus particulièrement porté sur les entreprises électriques de traction et de transport de force motrice, nous en avons profité dans une large mesure.",
      "Malgré les inquiétudes provoquées par le conflit anglo-transvaalien, les résultats de l'exercice 1899 ont, dans leur ensemble, tout lieu de nous satisfaire ; ils nous permettent de vous proposer la distribution d'un dividende supérieur à celui de l'exercice précédent.",
      "Nous avons conclu avec le Gouvernement Princier de Bulgarie deux contrats ayant pour objet une opération sur des obligations de l'Emprunt Bulgare et un emprunt de 30 millions de francs en Bons du Trésor Bulgare.",
      "Dans le domaine des affaires industrielles, nous avons pris part à la constitution des Compagnies de Tramways de l'Est Parisien, de l'Ouest Parisien, de la Rive gauche de Paris et à l'augmentation du capital de la Compagnie des Tramways mécaniques des Environs de Paris.",
      "Au mois d'octobre dernier, nous avons concouru à la formation de la Société des Charbonnages de Nikitowka, à laquelle il a été fait apport d'importants gisements houillers dans le district de Bakhmout, au Donetz."
    ]
  },
  {
    "id": 20,
    "page": 4,
    "category": "Feuilleton",
    "title": "Mariage Secret - Grand Roman Inédit (Quatrième Partie)",
    "summary": "Le baron de Lorgerac, pressé par les exigences financières de Delorme, tente de protéger son secret tout en négociant le rachat de documents compromettants.",
    "paragraphs": [
      "D'ailleurs François de Lorgerac, comme si en effet il y avait un intérêt capital, se mettait à discuter. Puisque vous êtes si bien renseigné, vous savez qu'il y a, dans ce total de six millions, un domaine estimé deux millions.",
      "Delorme insiste pour obtenir sa part de la transaction, proposant un marché au baron : le silence contre une somme d'argent importante, avant de se résoudre à aller traiter directement avec madame d'Aspremont.",
      "Le baron François de Lorgerac, acculé par les exigences de Delorme, finit par accepter de négocier le rachat de pièces compromettantes, malgré la difficulté de réunir une telle somme sous peu.",
      "Dans le salon de l'avenue des Ternes, alors que le baron s'apprête à conclure, l'espoir et la vie reprennent leurs droits pour Rolande et Manuèle, tandis que les négociations financières se poursuivent en coulisses."
    ]
  },
  {
    "id": 21,
    "page": 4,
    "category": "Transports",
    "title": "Nouvelles liaisons ferroviaires",
    "summary": "Dès le 16 mai, la Compagnie d'Orléans inaugure quatre liaisons quotidiennes vers Versailles et Saint-Cyr. Parallèlement, la Compagnie de l'Est lance un train rapide diurne Paris-Francfort doté d'un wagon-restaurant.",
    "paragraphs": [
      "La Compagnie d'Orléans, en accord avec le Syndicat des chemins de fer de ceinture et la Compagnie de l'Ouest, mettra en service, à partir du 16 mai, quatre trains quotidiens dans chaque sens, reliant la gare de Paris-Luxembourg à Versailles et à Saint-Cyr-Grande-Ceinture.",
      "La Compagnie de l'Est lancera, du 1er mai au 30 septembre, de nouveaux trains rapides de jour entre Paris et Francfort via Metz, composés de voitures directes et d'un wagon-restaurant pour le confort des voyageurs."
    ]
  },
  {
    "id": 22,
    "page": 4,
    "category": "Culture",
    "title": "Courrier Orphéonique : Concours musicaux internationaux",
    "summary": "Le concours musical international de Puteaux accueillera 180 sociétés en août. Par ailleurs, les préparatifs du concours du dixième arrondissement s'accélèrent et M. Émile Dévre remporte le prix de composition.",
    "paragraphs": [
      "Le succès du grand concours musical international ouvert à Puteaux, les 12, 13 et 15 août, est dès à présent assuré. Environ 180 sociétés prendront part à ces brillantes festivités.",
      "Les derniers préparatifs du grand concours international de musique, qui sera inauguré dans le dixième arrondissement de Paris les 3 et 4 juin, sont activement menés.",
      "La seconde série des concours de composition musicale, organisée par l'Association des Jurés orphéoniques, vient de rendre son verdict. Le prix de 1 000 francs a été décerné à l'unanimité à la cantate de M. Émile Dévre, directeur de la musique municipale."
    ]
  }
];
