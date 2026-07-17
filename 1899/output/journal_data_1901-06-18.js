// Date: 1901-06-18
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-06-18 (Version Restaurée, 36 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "La Maison du Pauvre",
    "summary": "Face à la hausse des décès par inanition à Paris, un projet architectural propose la création d'une Maison du Pauvre, inspirée du modèle hollandais, pour offrir un refuge et une assistance structurée aux indigents.",
    "paragraphs": [
      "Dans toutes les grandes villes, les cas de détresse sont si nombreux qu'il importe de les secourir promptement. Qui n'a frémi en lisant dans nos journaux le récit des drames de la misère, terminés par le suicide ou quelque atroce agonie de pauvres gens offerte en spectacle aux passants de la rue ?",
      "Malgré les cinquante millions qui constituent annuellement le budget de l'Assistance publique, il arrive que des malheureux meurent de faim, à Paris, faute de secours. Les morts d'inanition que nous signalent les statistiques se sont élevées à cinq en 1893 ; il y en a eu quinze en 1894 et vingt-deux en 1898.",
      "Une conception fort originale vient d'être portée par une pétition à la connaissance du conseil municipal : fonder à Paris une Maison du pauvre qui serait un refuge toujours ouvert, où les nécessiteux viendraient exposer leurs doléances et solliciter l'appui dont ils auraient besoin.",
      "Un jeune architecte de talent, M. E. Petit, a dressé le plan de cette maison, située derrière le Panthéon, entre les rues Saint-Médard et Lacépède, pour assurer un accueil digne aux indigents et centraliser l'assistance de manière plus efficace.",
      "En Hollande, où existent déjà des Maisons du pauvre, on y accueille les indigents qui ne peuvent être efficacement secourus à leur domicile. La création d'un tel établissement à Paris permettrait de mieux distinguer le malheureux du mendiant et d'éviter que l'argent réservé aux pauvres ne tombe entre des mains indignes."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Deux Aimées",
    "summary": "Jacques Martin de Baudreuil, de retour d'Amérique avec une immense fortune, mène une vie discrète tout en érigeant un château, alimentant les rumeurs et les curiosités des villageois sur son mystérieux passé.",
    "paragraphs": [
      "Les Baudreuil vivaient seuls, de misère et de privations, mais le fils, Jacques Martin de Baudreuil, eut le courage de s'expatrier en Amérique où, par sa volonté et son travail, il finit par amasser une fortune de deux millions et demi.",
      "À son retour, personne ne soupçonnait sa richesse. Il vivait modestement, tout en faisant acquérir par son notaire, M. Baron, des terres alentour. Un grand projet de construction finit par éveiller la curiosité de tout le village.",
      "Alors que les travaux du château, devenus grandioses, avançaient, les commérages allaient bon train dans la région, certains le traitant de pauvre hère tandis que d'autres s'étonnaient du mystère entourant ce châtelain d'un genre nouveau."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Actualités militaires",
    "title": "Les Sous-Marins et Submersibles",
    "summary": "La nouvelle génération de sous-marins français adopte une propulsion à double moteur, permettant une autonomie accrue et la recharge des accumulateurs sans nécessiter un retour immédiat en usine.",
    "paragraphs": [
      "On annonce que les nouveaux sous-marins mis en chantier cette année auront un double moteur, comme les submersibles, afin d'augmenter leur rayon d'action et de permettre la recharge des accumulateurs sans retour à l'usine.",
      "Le Narval et ses congénères sont des bâtiments hybrides, presque amphibies, capables de naviguer en surface comme des torpilleurs et en immersion. La nouvelle génération visera une autonomie accrue tout en conservant une grande facilité de manœuvre grâce à de petites dimensions."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un Mari Jaloux",
    "summary": "Un drame conjugal tragique s'est déroulé rue Montorgueil : Pierre Ferrari, cordonnier, a assassiné son épouse avant de mettre fin à ses jours, sous l'emprise d'une jalousie maladive.",
    "paragraphs": [
      "Hier soir, vers neuf heures, la rue Montorgueil a été mise en émoi par un drame terrible. À la suite d'une querelle motivée par la jalousie, un ouvrier cordonnier, Pierre Ferrari, a tué sa femme Virginie avant de se donner la mort.",
      "Le couple, marié depuis peu, semblait autrefois uni, mais la jalousie maladive du mari envers sa femme de vingt-huit ans avait fini par briser leur entente. Les voisins ont entendu des coups de feu, et le commissaire de police du quartier du Mail a découvert les deux corps sans vie dans le logement."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique étrangère",
    "title": "L'Ambassade Marocaine",
    "summary": "L'ambassade marocaine en visite officielle en France a été reçue chaleureusement à Lyon. La délégation a visité les installations militaires locales, témoignant de l'intérêt mutuel entre les nations.",
    "paragraphs": [
      "L'ambassade marocaine a quitté Marseille ce matin pour se rendre à Lyon. Elle a été chaleureusement accueillie par les autorités locales et la population.",
      "Arrivée à Lyon, la mission a été reçue par le maire, M. Augagneur, et le préfet, M. Alapetite. Les ambassadeurs ont visité le quartier général et la caserne de la Part-Dieu, suscitant une vive curiosité parmi les Lyonnais."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le Crime de Corancez",
    "summary": "Le juge d'instruction Corna intensifie ses investigations sur le meurtre de Corancez après la découverte par le commissaire Viala d'indices matériels cruciaux reliant un jouet suspect aux lieux du crime.",
    "paragraphs": [
      "Le juge d'instruction, M. Corna, poursuit ses recherches actives sur le meurtre survenu à Corancez. M. Viala, commissaire de police, a découvert à Chartres un jouet dont les fragments de fer-blanc correspondent étrangement à ceux trouvés cachés sous la couverture du mur du jardin de la victime, M. Brierre.",
      "L'instruction se poursuit avec l'audition de nouveaux témoins, partenaires de jeu ou relations d'affaires de M. Brierre, afin de faire la lumière sur les circonstances exactes entourant la soirée du crime."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "La Catastrophe d'Issy-les-Moulineaux",
    "summary": "Issy-les-Moulineaux a rendu un dernier hommage aux victimes de l'explosion de l'usine Gévelot, lors d'obsèques solennelles suivies par une foule immense et de nombreuses autorités civiles et militaires.",
    "paragraphs": [
      "Une foule considérable a assisté hier aux obsèques des victimes de la catastrophe survenue à l'usine Gévelot. De nombreuses personnalités officielles, représentants de la présidence, du Sénat et du gouvernement, étaient présentes pour rendre un hommage solennel aux disparus.",
      "Le cortège funèbre, accompagné par les harmonies militaires et la compagnie des sapeurs-pompiers de l'usine, a parcouru les rues d'Issy jusqu'à l'église, drapée de noir pour la circonstance, où une messe a été célébrée en mémoire des infortunés ouvriers."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Faits Divers",
    "title": "La catastrophe d'Issy-les-Moulineaux : obsèques des victimes",
    "summary": "Issy-les-Moulineaux a rendu un dernier hommage solennel aux ouvriers de l'usine Gévelot. En présence des autorités, les discours officiels ont honoré ces victimes du travail, inhumées dans une vive émotion nationale.",
    "paragraphs": [
      "Le cortège s'est rendu vers le cimetière en suivant les rites. À l'entrée de la nécropole, M. Mayer, maire d'Issy-les-Moulineaux, a prononcé une allocution rendant un dernier adieu aux victimes, qualifiant leur mort au travail de mort au champ d'honneur.",
      "M. Laurent, au nom du ministre de l'Intérieur, ainsi que MM. Gervais, Dailleur et Dupont ont également pris la parole pour exprimer les condoléances du gouvernement et du Parlement, tout en assurant leur soutien aux familles et aux blessés.",
      "M. Lebrun, au nom du conseil d'administration de l'usine, a remercié le Président de la République et les nombreux sauveteurs, annonçant que la direction n'oublierait aucune des familles éprouvées.",
      "Après les discours, les cercueils ont été inhumés. Deux d'entre eux, ceux de Salle et Duchât, ont été transportés dans leurs communes respectives de Meudon et Boulogne, accompagnés par une foule considérable.",
      "Le maire de Boulogne, M. Lagneau, et M. Henripré ont prononcé des discours à cette occasion. La municipalité de Meudon a offert une concession décennale pour le corps de Georges Salle."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Social",
    "title": "Enquête judiciaire sur la catastrophe d'Issy",
    "summary": "Le juge d'instruction Lemercier poursuit activement l'enquête sur l'explosion des usines Gévelot, se rendant sur place pour recueillir les témoignages cruciaux des survivants et des témoins oculaires du drame.",
    "paragraphs": [
      "M. le juge Lemercier poursuit avec diligence l'enquête confiée par le parquet. Il doit se rendre ce jour à Issy afin d'entendre les dépositions de plusieurs témoins sur les lieux mêmes de la terrible explosion."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Séance de la Chambre du 17 juin",
    "summary": "La Chambre des députés a voté la réforme des taxes municipales lyonnaises. Les débats se sont ensuite portés sur le projet des retraites ouvrières, soulevant des critiques sur les modalités de cotisation et d'exclusion.",
    "paragraphs": [
      "La Chambre a adopté le projet de loi relatif aux taxes municipales de la ville de Lyon, destinées à remplacer les droits d'octroi. Par la suite, la discussion sur le projet de loi des retraites ouvrières fut ouverte. M. de Gaithard-Gaucel a vivement critiqué le texte, déplorant sa restriction aux seuls salariés et l'obligation imposée de cotiser à une caisse centrale de l'État.",
      "Au cours de la séance suivante, M. Stanislas Ferrand a pris la parole pour contester la taxe sur les propriétés bâties, notamment en ce qui concerne les logements vacants et les usines en chômage. Il a plaidé pour l'instauration d'un dégrèvement proportionnel, une proposition qui fut finalement rejetée par l'Assemblée.",
      "La Chambre a poursuivi l'examen des retraites ouvrières. M. de Gaithard-Gaucel a réitéré ses réserves, soulignant l'exclusion préjudiciable des petits patrons ainsi que des ouvriers à façon du dispositif. Il a également exprimé ses regrets quant à l'abandon du système des caisses régionales, jugé préférable par ses soins."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Séance du Sénat sur le projet de loi sur les associations",
    "summary": "Au Sénat, M. Waldeck-Rousseau défend le projet de loi sur le contrat d'association face aux critiques de MM. de Lamarzelle et Trarieux sur la question des biens de mainmorte.",
    "paragraphs": [
      "Le Sénat a poursuivi la discussion sur le projet de loi relatif au contrat d'association. M. de Lamarzelle et M. Trarieux ont défendu des amendements sur l'article 6, vivement combattus par le président du Conseil, M. Waldeck-Rousseau.",
      "M. Waldeck-Rousseau a rappelé que la personnalité morale est une fiction accordée par la loi et que les biens des associations ne doivent pas être soustraits à la circulation comme des biens de mainmorte.",
      "L'amendement de M. Trarieux concernant la limite de cotisation a été rejeté après l'intervention du gouvernement. M. Bérenger a proposé d'ajouter des causes de nullité à l'article 7, proposition finalement rejetée par le rapporteur, M. Vatté."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Social",
    "title": "Contre-projet sur les retraites ouvrières",
    "summary": "Un groupe de quatre-vingt-six députés propose un système alternatif de retraites ouvrières, incluant un crédit annuel de 25 millions de francs pour les personnes âgées ou infirmes sans ressources.",
    "paragraphs": [
      "Quatre-vingt-six députés ont déposé un amendement proposant un système alternatif pour les retraites ouvrières. Ce projet prévoit un crédit annuel de 25 millions de francs destiné à assister les personnes âgées de 65 ans, ou atteintes d'infirmités, se trouvant dépourvues de ressources."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Justice",
    "title": "Réforme de la législation criminelle",
    "summary": "La commission de législation criminelle auditionne des experts pour examiner la proposition de M. Barthou concernant le sort des mineurs acquittés pour absence de discernement.",
    "paragraphs": [
      "La commission de législation criminelle a entendu MM. Petit, Félix Voisin et Cresson. Ces auditions portaient sur la proposition de M. Barthou relative au sort des mineurs acquittés pour absence de discernement ainsi que sur l'organisation de l'éducation pénitentiaire."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Vie Municipale",
    "title": "Conseil municipal : Aquarium du Trocadéro et Compagnie des Omnibus",
    "summary": "Le Conseil municipal durcit le ton : suppression du cours de pisciculture au Trocadéro et sommation adressée à la Compagnie des Omnibus pour rétablir ses services sous peine de poursuites.",
    "paragraphs": [
      "Le conseil municipal a discuté de l'organisation de l'aquarium du Trocadéro suite à la mise en lumière d'irrégularités dans la gestion du professeur. En conséquence, le cours de pisciculture est supprimé à compter du 1er juillet 1901.",
      "M. Hérapy a interpellé le conseil sur les nombreuses suppressions de courses par la Compagnie des Omnibus. Le conseil a invité l'administration à agir avec énergie pour rétablir les services et réclamer des dommages-intérêts, faute de quoi des mesures coercitives complémentaires seront prises."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Dépêches Étrangères",
    "title": "Guerre au Transvaal et situation en Chine",
    "summary": "Actualité internationale : le gouvernement britannique facilite l'approvisionnement des camps boërs et les puissances s'accordent sur une indemnité de 450 millions de taëls pour la Chine.",
    "paragraphs": [
      "À Londres, on note une recrudescence de l'activité des Boërs dans certains districts. À La Haye, le gouvernement britannique a donné des assurances formelles pour faciliter l'envoi de vivres dans les camps d'internement.",
      "À Pékin, les ministres des puissances étrangères se sont accordés sur une indemnité totale de 450 millions de taëls devant être versée par la Chine."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Visite ministérielle à Orléans",
    "summary": "MM. Baudin, ministre des Travaux publics, et Mougeot, sous-secrétaire d'État des Postes, ont procédé à l'inauguration officielle de la Bourse du commerce et de l'Hôtel des postes à Orléans.",
    "paragraphs": [
      "MM. Baudin, ministre des Travaux publics, et Mougeot, sous-secrétaire d'État des Postes, se sont rendus à Orléans afin de procéder à l'inauguration solennelle de la Bourse du commerce et de l'Hôtel des postes. Cette visite officielle fut complétée par une inspection attentive de l'Hôtel-Dieu et d'un établissement scolaire récemment inauguré dans la ville."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident mortel à la gare de Nanterre-Bezons",
    "summary": "M. Achille Hennape, ancien maire de Nanterre, a trouvé une mort tragique à la gare de Nanterre-Bezons en tentant de monter dans un convoi en marche. Il laisse une veuve et quatre enfants.",
    "paragraphs": [
      "Un accident mortel s'est produit à la gare de Nanterre-Bezons. M. Achille Hennape, ancien maire de la commune, a succombé aux blessures reçues alors qu'il tentait désespérément de monter dans un train déjà en mouvement.",
      "Le défunt laisse derrière lui une veuve éplorée ainsi que quatre enfants dans le deuil."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Attentat contre un prêtre à Paris",
    "summary": "Une tentative d'assassinat a été perpétrée contre l'abbé Croissard, rue Léon-Cosnard. L'agresseur, après un stratagème, a fait usage d'une arme à feu avant de prendre la fuite.",
    "paragraphs": [
      "Une odieuse tentative d'assassinat a été commise contre l'abbé Croissard, dans la rue Léon-Cosnard. Un individu, après avoir attiré l'ecclésiastique en feignant de lui remettre une dépêche, a fait usage d'une arme à feu contre lui.",
      "L'agresseur a aussitôt pris la fuite après son forfait. Une enquête rigoureuse est actuellement menée par les autorités afin d'identifier et d'appréhender le coupable."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Affaire d'internement à Montmartre",
    "summary": "De nouvelles précisions sont apportées concernant l'internement de M. Bulaud, dont les accès de violence, exacerbés par l'ivrognerie, avaient nécessité une hospitalisation d'urgence.",
    "paragraphs": [
      "Des clarifications nécessaires sont apportées concernant l'internement de M. Bulaud. Il est désormais établi que cet homme, en proie à un alcoolisme chronique, multipliait les accès de violence, contraignant son épouse à solliciter une intervention urgente pour son hospitalisation."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Internement d'un déséquilibré",
    "summary": "M. Butaud, après avoir agressé un client et terrorisé sa famille, a été interné. Les examens des médecins aliénistes Garnier, Magnan et Legrand ont confirmé son état de démence.",
    "paragraphs": [
      "Le débitant, sans rime ni raison, brutalisa un client venu lui remettre une citation à témoin en police correctionnelle, lui arracha son assignation et la lui jeta à la figure.",
      "Il tourna ensuite sa fureur contre les siens, mettant sa famille dans un tel état de terreur que Mme Butaud s'enfuit précipitamment avec ses enfants chez M. Gouhier.",
      "Successivement examiné par les médecins aliénistes Garnier, Magnan et Legrand, à l'infirmerie, à l'asile de Sainte-Anne, puis à Ville-Évrard, M. Butaud fut officiellement reconnu fou. Il n'y a donc pas lieu de supposer que le malheureux ait été arbitrairement interné."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Deux militaires agressés par un débitant",
    "summary": "Deux soldats du 102e de ligne ont été violemment agressés dans un débit de vins de la rue Poinsot. Le débitant, Firmin Gaudinat, a tiré sur l'un d'eux ; son état est jugé grave.",
    "paragraphs": [
      "Deux militaires du 102e régiment d'infanterie, Louis Payen et Félix Boulon, rentraient hier soir à l'École militaire. Ils s'arrêtèrent dans un débit de vins situé au numéro 8 de la rue Poinsot.",
      "À la suite d'une discussion avec le débitant, Firmin Gaudinat, qui refusait de les servir, les soldats voulurent se retirer. Boulon reçut alors un violent coup de bouteille derrière la tête.",
      "Avant de pouvoir se relever, il fut menacé par Gaudinat, armé d'un fusil de chasse. Payen, accourant au secours de son camarade, reçut une décharge dans la jambe gauche.",
      "Les deux blessés furent transportés au Val-de-Grâce, où l'état de Payen fut jugé grave. M. le commissaire Chevalier a fait conduire Gaudinat au dépôt après un premier interrogatoire."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de tramway rue Réaumur",
    "summary": "Un tramway, victime d'une défaillance de frein, a percuté un omnibus rue Réaumur. Le choc a causé la mort d'un cheval et a gravement blessé une passagère, Mlle Héloïse Larmet.",
    "paragraphs": [
      "Hier, à midi, rue Réaumur, un tramway assurant la liaison de l'Opéra à Romainville est venu violemment percuter l'omnibus n° 74, par suite d'une défaillance de ses freins.",
      "L'avant-train de l'omnibus a été brisé sous le choc et un cheval a dû être abattu. Mlle Héloïse Larmet, qui se trouvait sur l'escalier du véhicule, a été gravement blessée et transportée d'urgence à l'hôpital Saint-Louis."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une enfant renversée par une voiture cellulaire",
    "summary": "Drame rue Fondary : une fillette de quatre ans, Marguerite Peilleux, a trouvé la mort, renversée par une voiture cellulaire dont les roues lui ont passé sur la tête.",
    "paragraphs": [
      "Vers sept heures du soir, une petite fille de quatre ans, Marguerite Peilleux, demeurant place Dupleix, qui jouait rue Fondary, a été renversée par une voiture cellulaire. Les roues du véhicule lui ont passé sur la tête ; la mort a été instantanée."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Drame entre dompteurs à Neuilly-sur-Seine",
    "summary": "Un différend entre deux dompteurs, Alexandre Darsos et Jules Bars, a tourné au drame avenue de Neuilly. L'un des protagonistes a lâché une chienne danoise sur son rival.",
    "paragraphs": [
      "La nuit dernière, avenue de Neuilly, une violente discussion s'est élevée entre deux dompteurs, Alexandre Darsos et Jules Bars. Ce dernier a lancé sur son adversaire une énorme chienne danoise qui a cruellement mordu Darsos aux jambes et au bras gauche.",
      "Après avoir reçu les premiers soins, le blessé a été transporté à son domicile. M. Soullière, commissaire de police, a immédiatement ouvert une enquête sur les circonstances de cette agression."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Agressions et faits divers en banlieue",
    "summary": "Vague d'agressions en banlieue : à Gennevilliers, La Garenne-Colombes et Saint-Denis, la police est intervenue pour des coups de stylet, des accidents automobiles et des rixes.",
    "paragraphs": [
      "Gennevilliers : Hier soir, un ouvrier menuisier nommé Jules Chantepie a été assailli par un individu qui lui a porté un coup violent de stylet au-dessous de l'œil gauche.",
      "La Garenne-Colombes : Une voiture de maraîcher, conduite par Mme Jutieau-Casses, a été culbutée hier après-midi par une automobile sur la route de Courbevoie. Mme Casses a été gravement blessée.",
      "Saint-Denis : Au cours d'une rixe, les agents ont procédé à l'arrestation de Louis Nottoin. En le conduisant au poste, ils furent assaillis par des rôdeurs. Un autre individu, Pierre Mardiller, a été appréhendé au moment où il s'apprêtait à poignarder un agent."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Enquête sur l'accident de tramway à Saint-Denis",
    "summary": "M. le commissaire Coste conclut à l'absence de faute du mécanicien Dachmain dans l'accident de tramway à Saint-Denis. Si la plupart des blessés sont rassurants, l'état de M. Godard et de la petite Thérèse Beaunis reste grave.",
    "paragraphs": [
      "M. Coste, commissaire de police, a établi, au terme de son enquête, que la responsabilité de la collision ne pouvait être imputée au mécanicien Dachmain. Celui-ci avait régulièrement actionné ses signaux d'avertissement et tenté, par tous les moyens, d'arrêter son véhicule pour éviter le choc.",
      "Les personnes blessées lors de cet accident se trouvent, pour la majorité, dans un état satisfaisant. Toutefois, le pronostic demeure réservé concernant M. Godard et la petite Thérèse Beaunis, dont l'état de santé cause de vives inquiétudes au corps médical."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de cheval au bois de Vincennes",
    "summary": "Un tragique accident est survenu au bois de Vincennes : le palefrenier Jean Wetter a succombé après que sa monture, effrayée par une automobile, s'est violemment abattue contre un tronc d'arbre.",
    "paragraphs": [
      "Jean Wetter, palefrenier, menait un cheval au bois de Vincennes lorsque l'animal, subitement effrayé par le passage imprévu d'une automobile, s'emporta violemment et alla s'abattre contre un chêne. Le choc fut d'une violence extrême : le cheval fut tué net et le cavalier, transporté d'urgence au domicile de son maître, rendit le dernier soupir peu de temps après."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'une bande de voleurs",
    "summary": "La gendarmerie a démantelé une bande de malfaiteurs opérant dans la région. Trois individus ont été interpellés pour des vols chez MM. Quentin et Kelsey, suivis de deux autres arrestations opérées à Orsay.",
    "paragraphs": [
      "Les gendarmes ont procédé à l'arrestation de trois individus, Adolphe Marcian, Joseph Octor et Noël Lavault. Ces trois vagabonds sont inculpés d'être les auteurs de plusieurs vols qualifiés commis aux domiciles de M. Quentin et de M. Kelsey, où des sommes importantes d'argent ainsi que des bijoux de valeur avaient été dérobés.",
      "L'enquête, menée avec diligence par les autorités, a permis de remonter la piste de l'organisation criminelle, conduisant à l'arrestation de deux autres complices de la même bande à Orsay."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Cambriolages à Livry-sur-Ourcq",
    "summary": "Profitant de l'affluence lors du concours des pompes, des malfaiteurs ont multiplié les cambriolages à Livry-sur-Ourcq, dévalisant le coffre-fort de la sucrerie et plusieurs demeures privées.",
    "paragraphs": [
      "Profitant du désordre relatif causé par le concours des pompes, des malfaiteurs ont pénétré dans le bureau du comptable de la sucrerie, M. Minost, et ont réussi à défoncer le coffre-fort.",
      "Les mêmes individus se sont ensuite introduits dans plusieurs demeures privées, notamment chez MM. Léric, Guillemet et Bourgeois, dérobant, lors de leurs méfaits, diverses sommes d'argent et des bijoux."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendiaire arrêté à Fontainebleau",
    "summary": "Un auxiliaire cycliste chargé de signaler les incendies dans la forêt de Fontainebleau a été pris en flagrant délit : il déclenchait lui-même les feux pour se faire valoir en les éteignant.",
    "paragraphs": [
      "Le fils d'un guide de la forêt, employé en qualité d'auxiliaire cycliste pour signaler les départs de feu, a été arrêté par deux gardes forestiers au moment précis où il allumait un foyer. Interrogé, il a avoué avoir mis le feu à six reprises afin d'avoir l'occasion de se signaler et de paraître héroïque en éteignant lui-même l'incendie qu'il avait provoqué."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un chien sauveteur à Joinville",
    "summary": "Lors d'une promenade en voilier dans le bassin de Chennevières, le chavirage d'une embarcation a été miraculeusement sauvé grâce à l'intervention héroïque de M. Baillot et de son chien terre-neuve, César.",
    "paragraphs": [
      "Lors d'une sortie en voilier dans le bassin de Chennevières, une embarcation a chaviré. M. Baillot et son chien terre-neuve, César, sont intervenus avec courage. Le chien a sauvé M. Jamblot, tandis que son maître secourait Mme Jamblot, qui avait sombré.",
      "La naufragée a été transportée à son domicile dans un état désespéré."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Social",
    "title": "Revendications des cochers et personnel du Métropolitain",
    "summary": "Les cochers de la maison Camille réclament une baisse de leurs redevances. En parallèle, le personnel du Métropolitain prépare une assemblée générale à la Bourse du Travail.",
    "paragraphs": [
      "Les cochers de la maison Camille réclament l'abaissement de la moyenne de 19 à 15 francs. Une grève est possible.",
      "Le personnel du Métropolitain est invité à une assemblée générale dans la nuit du 19 au 20 juin à la Bourse du Travail."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Chronique Théâtrale",
    "title": "Actualités théâtrales",
    "summary": "M. Mounet-Sully prévoit une tournée estivale avec les œuvres de Musset, le théâtre de l'Ambigu affiche complet pour 'Roger la Honte', et l'Exposition de l'Enfance fermera ses portes le 4 juillet.",
    "paragraphs": [
      "M. Mounet-Sully donnera cet été une quinzaine de représentations d'œuvres d'Alfred de Musset dans des stations estivales.",
      "Le théâtre de l'Ambigu a refusé du monde lors de la pièce 'Roger la Honte'.",
      "L'exposition de l'Enfance, au Petit Palais, fermera ses portes le 4 juillet."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Santé",
    "title": "La découverte du Docteur Léon Fournol",
    "summary": "Le Docteur Léon Fournol, ancien interne des hôpitaux, propose une méthode innovante pour traiter la calvitie par un système de forfait, sans frais préalables pour les patients.",
    "paragraphs": [
      "La découverte du remède contre la calvitie par le bien connu Docteur Léon Fournol, ex-interne des hôpitaux, a provoqué une révolution dans l'art de guérir.",
      "Depuis plus de dix ans, cet éminent médecin s'est adonné à l'étude de cette délicate et délaissée question. Il ne s'agit pas ici de la calvitie déterminée par blessure, brûlure ou par un grand âge, mais de celle amenée par l'anémie, l'herpétisme, l'arthritisme, l'excès de travaux intellectuels, la syphilis ou les fièvres paludéennes.",
      "Cette merveilleuse découverte a soulevé au début d'unanimes protestations, mais il a bien fallu se rendre à l'évidence. Des cas jugés désespérés par des sommités médicales ont été traités avec succès par cet unique spécialiste.",
      "L'offre qu'il fait de traiter à forfait — c'est-à-dire sans un centime à débourser avant une repousse complète — les personnes sceptiques atteintes de cette disgracieuse maladie est la meilleure garantie de sa valeur. Il n'est donc plus permis aux chauves de douter.",
      "Tous demanderont au Docteur Léon Fournol, 11, rue de Châteaudun, à Paris, l'intéressante brochure gratuite sur la calvitie."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Feuilleton",
    "title": "Jusqu'à Mourir - XVIII",
    "summary": "Bistour, inquiet de ne pas recevoir le solde de son contrat suite au suicide de l'Italien Carlo, se laisse convaincre par Fanny d'aller réclamer son dû, une démarche finalement fructueuse.",
    "paragraphs": [
      "Et Bistour se remémorait, en tiquant frénétiquement, les conditions de son marché avec M. de Sartys : moitié payée comptant et la seconde moitié payable le lendemain de la condamnation de l'Italien. Elle avait été payée, rubis sur l'ongle, cette première moitié. Mais la seconde ?",
      "Le lendemain de la condamnation de l'Italien... il n'avait pas été condamné, ce Carlo, cet idiot qui était allé se pendre à un barreau. Et Bistour se lamentait, s'indignait, s'exaspérait : « Ah, la canaille d'Italien, moi aussi il m'aura volé, moi aussi il m'aura escroqué. »",
      "Tant et si bien que ce vacarme insolite finit par attirer Fanny. La porte du sanctuaire où gémissait le patron n'était même pas fermée. À quoi avait-il donc la tête ? Et la vieille coquine entra.",
      "« Il y a, s'écria-t-il, l'Italien que vous avez été assez bêtes pour ne pas savoir dépister. » « Le Carlo ! » fit-elle stupéfaite. « Vous vous êtes même vanté au client que c'est par un tour de votre sac qu'on ne l'avait pas dépisté. »",
      "« Je viens, s'écria Bistour, j'ai bien le droit de dire que s'il n'était pas arrivé ici, il ne m'aurait pas fait ce qu'il vient de me faire. Non, il n'y est plus, la canaille. Il est mort, Fanny. Il s'est pendu, et on ne le ressuscitera pas. Quinze cents francs ! » « Vous ne perdez pas un peu la boule, monsieur Bistour ? »",
      "Il lui expliqua alors son contrat avec M. de Sartys et son inquiétude sur le paiement de la seconde moitié, désormais impossible puisque l'accusé est mort. Fanny, sceptique, finit par le pousser à aller réclamer son argent malgré tout, affirmant qu'il ne faut pas se laisser faire.",
      "Quand le vieux pirate, réconforté par sa première employée, se présenta avenue d'Iéna, il vit revenir le domestique avec une enveloppe. « Monsieur m'a dit de vous remettre ça et de vous flanquer à la porte. » Et quand Bistour eut tourné les talons, il constata que les fafiots y étaient. Et Fanny avait raison."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Presse spécialisée",
    "title": "Sommaire de L'Agriculture Nouvelle",
    "summary": "Sommaire de L'Agriculture Nouvelle : progrès techniques en meunerie, horticulture et viticulture, études sur l'élevage et le Képhir par des experts renommés de la fin du siècle.",
    "paragraphs": [
      "Au sommaire de cette semaine de L'Agriculture Nouvelle : Agriculture (Henri Marchand, Albert Berthot, J.-Ch. Boue), Congrès de la Meunerie, Horticulture (S. Mottet, L. Henry), Viticulture (Demazure), Chasse et Pêche, Élevage, Pisciculture (P. Zipcy) et Variétés (Antonin Rolet sur le Képhir)."
    ]
  }
];
