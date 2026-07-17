// Date: 1900-09-19
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-09-19 (Version Restaurée, 35 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Les hôpitaux d'enfants",
    "summary": "Réflexion sur la spécialisation hospitalière et l'égalité devant la santé. L'auteur défend le modèle français, où chaque citoyen, quel que soit son âge, a droit à une prise en charge digne et sans aristocratie médicale.",
    "paragraphs": [
      "Nous avons un peu trop l'habitude en France d'invoquer l'étranger, quitte à nous mettre en mauvaise posture nous-mêmes. Une telle réflexion n'est pas hors de propos au moment où il est question de spécialiser nos hôpitaux et de créer pour chaque catégorie de malades des abris particuliers.",
      "L'idéal du genre serait que chaque maladie fût traitée à part, et non point seulement chaque maladie, mais encore chacun des âges entre lesquels on divise communément la vie humaine : l'enfance, l'adolescence, la maturité et la vieillesse. Nous y arrivons peu à peu.",
      "Notre conception est tout autre et je n'hésite pas, pour mon compte, à l'estimer supérieure : c'est celle qui consiste à trouver que tous les hommes sont égaux devant la maladie, qu'il n'y a pas d'aristocratie de malades et que tous ont droit aux mêmes traitements. En vérité, quand nous admirons les étrangers, il est bon d'y regarder à deux fois et de ne pas nous en tenir aux apparences."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "La Fille du Djinn - Troisième partie",
    "summary": "Le lieutenant découvre avec stupeur la présence de Jeannine à Madagascar en tant qu'infirmière. Alors que l'arrivée du courrier de France suscite une vive émotion, les mystères sur son engagement persistent.",
    "paragraphs": [
      "Le lieutenant se décida. Il dit, la voix tremblante : « Cette nuit, vous avez parlé du patron puis de mademoiselle Jeannine. »",
      "Pierre ne posa plus de questions. Il réfléchissait. Ainsi Jeannine se trouvait à Madagascar. Jeannine suivait le corps expéditionnaire en qualité d'infirmière ? Que signifiait cela ?",
      "Ah ! voici qu'une pensée lui venait tout à coup et qu'il se répondait lui-même à cette question qu'il s'était posée. Ce qu'elle était venue faire à Madagascar, c'était facile à diviner.",
      "Vers deux heures, un sous-officier entra dans la salle de l'hôpital, porteur d'un sac de cuir. Il était accompagné d'un caporal infirmier. Aussitôt une rumeur courut, joyeuse, parmi les malades : « Le courrier, le courrier de France ! »"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Informations",
    "title": "Supplément Littéraire du Petit Parisien",
    "summary": "Le Supplément Littéraire illustré en couleurs de ce mercredi propose un contenu riche, incluant le compte rendu du concours hippique de Vincennes et les expériences agricoles contre la grêle.",
    "paragraphs": [
      "Le Supplément Littéraire illustré en couleurs qui paraît aujourd'hui mercredi contient deux gravures en couleurs. Celle de la première page représente le Concours Hippique de Vincennes devant le jury.",
      "La huitième page est consacrée aux expériences dans le Beaujolais : le canon contre la grêle. À l'intérieur, on trouvera un magnifique portrait de l'explorateur Foureau."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Dépêche",
    "title": "Un combat au Sahara",
    "summary": "Le ministère de la Guerre confirme un engagement sérieux dans la région de Deldoul fin août. Le bilan fait état de vingt-six pertes, dont deux officiers, lors d'affrontements contre les Berabers.",
    "paragraphs": [
      "Le ministre de la Guerre nous communique la note suivante : les nouvelles parvenues des oasis sahariennes signalent un engagement qui a eu lieu dans les derniers jours du mois d'août dans la région de Deldoul.",
      "Le 28 août, le capitaine Jacques reçut avis du capitaine Falconetti qu'il était aux prises avec des Berabers nombreux et bien armés et qu'il réclamait son concours.",
      "Les nouvelles parvenues jusqu'à ce jour au corps d'armée sont très obscures et très incomplètes, et le rapport annoncé permettra seul de connaître tous les détails de cette affaire, dans laquelle nous avons malheureusement à déplorer des pertes sérieuses. Celles-ci sont en effet de vingt-six tués ou blessés, dont deux officiers tués et deux blessés."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "Une éclatante manifestation : Le banquet des maires",
    "summary": "Le banquet des maires de France, réunissant plus de vingt mille élus à Paris, s'annonce comme une démonstration majeure de la force des institutions républicaines sous la présidence de M. Loubet.",
    "paragraphs": [
      "Le banquet des maires venus à Paris à l'appel cordial du gouvernement de la République s'annonce comme la plus éclatante des manifestations républicaines. Ce sont, en effet, toutes les communes de France représentées par leurs magistrats municipaux qui acclameront samedi nos institutions démocratiques.",
      "Plus de vingt mille se rangeront, cette fois-ci, autour de M. Loubet, et la comparaison de ces deux chiffres dit avec une éloquence indéniable la progression de l'idée républicaine.",
      "Le protocole définitif établi pour le banquet de samedi a été communiqué hier par le ministère de l'Intérieur. À midi précis, le Président de la République arrivera place de la Concorde."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Informations Politiques",
    "title": "La Question Budgétaire",
    "summary": "Lors de la séance de la commission du budget, un débat a eu lieu sur les services pénitentiaires. La commission a rejeté le crédit pour la laïcisation des établissements, par 7 voix contre 6.",
    "paragraphs": [
      "Au début de la séance que la commission du budget a tenue hier, un incident s'est produit à propos des services pénitentiaires. L'année dernière, la Chambre avait voté un crédit de 100 000 francs pour manifester son désir de voir laïciser les établissements pénitentiaires.",
      "Le rapporteur, M. Bertrand, a conclu au rejet de ce crédit et, par 7 voix contre 6, la commission a adopté ses conclusions. La commission du budget a ensuite poursuivi l'examen du budget de l'Instruction publique."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le drame de Belleville",
    "summary": "Un crime passionnel a éclaté rue de Tourtille à Belleville : un ouvrier mécanicien a tiré sur une femme mariée, la blessant grièvement. Le coupable a été arrêté près du théâtre par un agent.",
    "paragraphs": [
      "Le quartier de Belleville a été mis en émoi hier après-midi par un drame sanglant qui s'est déroulé dans la rue de Tourtille. Depuis deux ans environ, les époux Ziller habitaient dans l'immeuble situé au n° 45 de la rue de Tourtille.",
      "Le mari, boulanger, était trompé par sa femme, Marie, âgée de trente-quatre ans, qui entretenait des relations coupables avec un ouvrier mécanicien nommé Jules Forest, âgé de vingt-six ans.",
      "Le 19 septembre, Jules Forest a surpris Marie Ziller dans la rue et lui a tiré plusieurs coups de feu. La victime a été transportée à l'hôpital Saint-Louis dans un état désespéré.",
      "La poursuite du coupable fut des plus mouvementées. Enfin, non loin du théâtre de Belleville, il fut appréhendé par le gardien de la paix Vigelle."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "La mission Voulet-Chanoine",
    "summary": "Le docteur Henric, membre de la mission Voulet-Chanoine, a quitté la capitale ce matin par le train rapide. Il rapporte des documents médicaux importants relatifs à l'expédition.",
    "paragraphs": [
      "Le docteur Henric, membre de la mission Voulet-Chanoine, est parti ce matin par le rapide pour Paris. Il emporte avec lui des rapports médicaux relatifs aux travaux de la mission Voulet-Chanoine."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Politique",
    "title": "Les fêtes municipales",
    "summary": "L'administration dément l'interdiction des fêtes municipales. Pour ne pas léser le public de l'Exposition, les festivités prévues seront prises en charge directement par l'administration de l'Exposition.",
    "paragraphs": [
      "L'agence Havas nous communique la note suivante : « Il est absolument inexact que l'administration supérieure ait interdit les fêtes projetées par le conseil municipal. En présence de la décision prise par le bureau du conseil municipal et pour ne pas priver la population parisienne et les visiteurs de l'Exposition des fêtes annoncées, l'administration de l'Exposition a décidé de les prendre à sa charge. »"
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique Municipale",
    "title": "La municipalité de Paris et la fête des maires",
    "summary": "Le Préfet de la Seine, M. de Selves, conteste la légitimité du bureau du conseil municipal à organiser des fêtes officielles, rappelant qu'ils n'ont aucune autorité en dehors des sessions légales.",
    "paragraphs": [
      "Le Préfet de la Seine, M. de Selves, a écrit au président du conseil municipal le 11 septembre pour exprimer sa surprise concernant l'organisation d'une grande fête des municipalités prévue les 23 et 24 septembre.",
      "Le Préfet souligne que le président du conseil municipal et son bureau, qui n'ont d'existence légale que durant les sessions, sont sans qualité pour constituer la municipalité de Paris et inviter des maires ou fonctionnaires étrangers."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "La visite avortée du Lord-Maire à Paris",
    "summary": "Le Lord-Maire de Londres renonce à sa visite à Paris suite à l'annulation des fêtes municipales, malgré l'invitation du Président Loubet à l'Élysée.",
    "paragraphs": [
      "L'agence Havas rapporte que le Lord-Maire de Londres ne se rendra pas à Paris cette semaine, en raison de l'abandon par le conseil municipal de Paris des fêtes prévues en l'honneur des municipalités françaises et étrangères.",
      "Une note de Mansion House confirme l'annulation de la visite officielle, précisant que celle-ci aurait été de toute façon abrégée par la candidature conservatrice du Lord-Maire aux élections générales à Londres.",
      "Le Président Loubet avait toutefois fait savoir qu'il serait heureux de recevoir le Lord-Maire à l'Élysée pour manifester l'estime des citoyens de Londres envers le chef de l'État français."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Économie",
    "title": "La crise des laines à Roubaix et Tourcoing",
    "summary": "M. Millerand, ministre du Commerce, précise le rôle des autorités locales face aux demandes de fermeture des Bourses de commerce en période de crise des laines.",
    "paragraphs": [
      "Le syndicat fondé à Reims pour la suppression du marché à terme sur la laine peignée a sollicité le ministre du Commerce, M. Millerand, afin d'obtenir un questionnaire transmis aux chambres de commerce de Roubaix et Tourcoing.",
      "M. Millerand a clarifié qu'aucun questionnaire n'avait été joint à sa communication, laquelle rappelait simplement aux instances locales leur pouvoir d'appréciation quant à la fermeture des Bourses de commerce, sur demande des compagnies concernées.",
      "Le ministre a précisé qu'il travaillait à un texte définitif avec le rapporteur de la commission de la Chambre des députés et que la fermeture éventuelle des Bourses, étant une mesure locale, ne nécessitait pas la consultation d'autres centres industriels."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Tentative d'assassinat et vol à Bordeaux",
    "summary": "Quatre malfaiteurs ont violemment agressé le gardien d'une distillerie bordelaise avant de dérober des valeurs. Une enquête est ouverte après le signalement d'un rôdeur.",
    "paragraphs": [
      "Dans la nuit, quatre bandits ont agressé M. Achille Guérini, gardien d'une ancienne distillerie en transformation à Bordeaux. Après l'avoir bâillonné et ligoté, ils ont fouillé ses vêtements, dérobé les clés et procédé à une visite domiciliaire, emportant un carnet de chèques et l'argent liquide du gardien.",
      "Le parquet et le médecin-légiste se sont transportés sur les lieux. La victime, qui avait remarqué un individu rôdant autour de l'usine depuis quelques jours, a pu fournir des renseignements utiles à l'enquête."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Événements de Chine",
    "title": "La situation diplomatique et militaire en Chine",
    "summary": "Entre négociations diplomatiques pour l'évacuation de Pékin et mouvements de troupes alliées, le maréchal de Waldersee poursuit sa route vers Shanghaï.",
    "paragraphs": [
      "Les puissances alliées s'apprêtent à combattre l'activité persistante des Boxers, tandis que les négociations pour l'évacuation de Pékin se poursuivent avec un accord général des puissances.",
      "Le ministre de la Marine a reçu un télégramme du général Voyron, arrivé à Shanghaï le 16 septembre pour inspecter le détachement d'occupation.",
      "Le gouvernement allemand, par la voix de M. de Bülow, propose que les puissances exigent la livraison des instigateurs principaux des crimes commis contre le droit des gens à Pékin comme condition préalable aux négociations.",
      "Le maréchal de Waldersee est arrivé à Hong-Kong à bord du vapeur Sachsen avant de poursuivre sa route vers Shanghaï."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Une héroïne française au siège de Tien-Tsin",
    "summary": "La presse russe salue l'héroïsme et le dévouement de Mlle Lucie Montreuil, infirmière française ayant soigné les blessés durant le siège de Tien-Tsin.",
    "paragraphs": [
      "Les journaux russes célèbrent le dévouement de Mlle Lucie Montreuil, Française arrivée à Tien-Tsin, qui a soigné bénévolement environ soixante-dix blessés lors du siège, avant d'intégrer l'hôpital franco-russe."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Désorganisation et mouvements de troupes au Transvaal",
    "summary": "La situation au Transvaal s'aggrave par les sabotages boërs. Tandis que le général French progresse vers Komati-Poort, le sort du président Krüger et sa démission forcée par Lord Roberts suscitent de vives protestations.",
    "paragraphs": [
      "La situation demeure fort tendue au Transvaal, marquée par la destruction systématique de plusieurs ponts et de segments de voies ferrées par les troupes boërs. L'armée boër, en proie à une désorganisation croissante, peine à contenir la progression méthodique du général French en direction de Komati-Poort.",
      "Des rumeurs persistantes annoncent le départ imminent de M. Krüger. Parallèlement, la députation boër élève une protestation formelle contre la proclamation de Lord Roberts, laquelle déclare, de son propre chef, le président Krüger démissionnaire de ses fonctions."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Actualité Militaire",
    "title": "Mouvements de régiments",
    "summary": "Le paysage militaire de la garnison de Vincennes subit des modifications avec le départ du 28e régiment de dragons pour Sedan, remplacé prochainement par le 23e régiment.",
    "paragraphs": [
      "Le 28e régiment de dragons a quitté la garnison de Vincennes à destination de Sedan. Il sera prochainement remplacé dans ses fonctions par le 23e régiment de la même arme."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Actualité Maritime",
    "title": "Tentatives de renflouement et essais techniques",
    "summary": "Les conditions climatiques entravent le renflouement du Bouët-Villaumez près de Douvres. À Cherbourg, le contre-torpilleur La Pique interrompt ses essais pour une intervention nécessaire sur ses hélices.",
    "paragraphs": [
      "Le renflouement du navire Bouët-Villaumez, échoué aux abords de Douvres, demeure suspendu ; les conditions météorologiques défavorables et la complexité inhérente à l'opération empêchent toute intervention immédiate.",
      "Par ailleurs, le contre-torpilleur La Pique a dû interrompre ses essais de vitesse dans les eaux de Cherbourg, une expertise ayant révélé la nécessité impérative de procéder au changement de ses hélices."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Social",
    "title": "Institution des Conseils du travail",
    "summary": "Un décret présidentiel crée les Conseils du travail dans les zones industrielles pour concilier patrons et ouvriers sur les salaires, le chômage et le temps de travail.",
    "paragraphs": [
      "Un récent décret présidentiel a institué des Conseils du travail au sein des principales régions industrielles. Ces organismes ont pour vocation d'agir en tant qu'instances de conciliation entre le patronat et les classes ouvrières.",
      "Ces conseils auront pour mission de formuler des avis éclairés sur les questions de salaires, la durée légale du travail ainsi que le chômage, tout en transmettant annuellement des rapports circonstanciés au ministre du Commerce."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Culture",
    "title": "Histoire des fêtes nocturnes et de la pyrotechnie",
    "summary": "Une rétrospective retrace l'évolution des illuminations et feux d'artifice en France, témoignant de l'engouement persistant des Parisiens pour ces spectacles de lumière nocturnes.",
    "paragraphs": [
      "Un historique documenté retrace l'évolution des illuminations et des feux d'artifice en France, depuis les fastes de la Renaissance jusqu'à l'usage contemporain du gaz et de l'électricité, soulignant la passion indéfectible des Parisiens pour ces éblouissants spectacles de nuit."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie à Lyon",
    "summary": "Un incendie dévastateur a ravagé une fabrique de produits chimiques dans le quartier de Vaise, à Lyon. Le sinistre a occasionné des pertes matérielles chiffrées à 700 000 francs et causé plusieurs blessures graves.",
    "paragraphs": [
      "Un violent incendie a ravagé une fabrique de produits chimiques dans le quartier de Vaise à Lyon, causant des dégâts estimés à 700 000 francs et faisant plusieurs blessés graves."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Militaire",
    "title": "Les grandes manœuvres de Chartres",
    "summary": "Sous la direction du général de Négrier, quatre corps d'armée se sont réunis à Chartres pour simuler une bataille stratégique contre un ennemi fictif occupant les hauteurs dominant la rive droite de l'Eure.",
    "paragraphs": [
      "Le général de Négrier dirige les manœuvres des quatre corps d'armée réunis à Chartres, simulant une bataille contre un ennemi figuré sur les hauteurs dominant la rive droite de l'Eure."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Politique et Armée",
    "title": "Manœuvres militaires : récit de la journée",
    "summary": "Récit des manœuvres de Chartres : les mouvements stratégiques du 4e et 10e corps d'armée ont démontré la puissance tactique de nos troupes sous le regard attentif du Ministre de la Guerre et du général Brugère.",
    "paragraphs": [
      "Le 4e corps arrivait alors à Ermenonville, traversant le village pour prendre une position de combat. Ce corps d'armée devait supporter, au début, tout l'effort.",
      "Tandis que la 7e division s'élevait contre Meslay-le-Grenet, le mouvement se précisait vers neuf heures. Des nuages de poussière et des éclairs de sabre révélaient le passage de troupes au-delà de la route de Bocireval.",
      "Vers dix heures, la division semblait prête à enlever Mignières, se groupant avec la 7e division dans un mouvement de concentration. À dix heures et demie, la pensée du général de Négrier devenait claire : condenser les forces pour permettre aux autres corps d'armée d'entrer en ligne.",
      "Le 10e corps, débouchant au nord de Boullay-le-Pin, faisait front vers Trizay, mais l'attaque échoua face à l'artillerie ennemie. Le général Donop résolut de reprendre le mouvement avec une brigade supplémentaire.",
      "Les six régiments, cuirassiers en tête, enfoncèrent les lignes ennemies. Le terrain ainsi déblayé, le général Tanchot enleva d'un bond tout son corps d'armée dans un assaut merveilleux sous les yeux du Ministre de la Guerre et du général Brugère.",
      "Le spectacle de cet immense plateau couvert de trente-deux régiments d'infanterie est inoubliable."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Chronique Locale",
    "title": "Accueil des troupes à Chartres",
    "summary": "La population chartraine a réservé un accueil triomphal aux troupes sur la place des Épars. La journée s'est achevée dans un élan patriotique unanime, ponctué par les acclamations des citoyens : « Vive l'armée ! »",
    "paragraphs": [
      "La ville de Chartres a fait aux troupes du corps et de la division de cavalerie un accueil des plus chaleureux. Dès deux heures de l'après-midi, une foule énorme stationnait sur la place des Épars, acclamant les généraux.",
      "La manifestation a été belle, surtout vers la nuit. Devant les deux grands chefs, les troupes portaient les armes et partout s'élevait le cri de « Vive l'armée ! »"
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "Le Congrès National des Mineurs à Montceau-les-Mines",
    "summary": "Sous la présidence de M. Calvignac, le congrès national des mineurs s'est ouvert à Montceau-les-Mines. Les délégués y débattent de la journée de huit heures et protestent contre les décisions du Creusot.",
    "paragraphs": [
      "Le congrès s'est ouvert à trois heures et demie sous la présidence du citoyen Calvignac. L'ordre du jour comprend la création de prud'hommes mineurs, la journée de huit heures et la nationalisation des mines.",
      "Le congrès a voté une motion protestant contre la décision de M. Schneider, directeur des usines du Creusot, ayant refusé un congé à ses mineurs pour assister au congrès. La première séance a pris fin à cinq heures du soir avec 22 délégués représentant 10 000 mineurs."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie et tentative de meurtre par un fils indigne",
    "summary": "Rue Saint-Louis-en-l'Île, une fabricante de broderies a été agressée par son fils de quinze ans. Après l'avoir frappée, l'adolescent a tenté d'incendier le domicile familial ; il a avoué son forfait aux autorités.",
    "paragraphs": [
      "Rue Saint-Louis-en-l'Île, Mme Bratty, fabricante de broderies, a été violemment attaquée par son fils Louis, âgé de quinze ans. Irrité par un refus d'argent, l'adolescent a asséné des coups à sa mère à l'aide d'un sabot.",
      "La victime a découvert sous son lit des récipients remplis de pétrole ainsi que des linges imbibés de substances inflammables, démontrant que son fils projetait d'incendier la maison. Le jeune délinquant a reconnu ses intentions criminelles devant le commissaire de police."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Chien enragé à Paris",
    "summary": "Une vive émotion place de l'Étoile : un chien enragé a été pris en chasse par des agents. La course-poursuite a pris fin rue Legendre, où la bête a été abattue pour mettre fin à la terreur des passants.",
    "paragraphs": [
      "Un chien enragé a semé une vive panique parmi les passants, hier soir, place de l'Étoile. Après une poursuite mouvementée à travers les rues avoisinantes, les agents de police sont parvenus à acculer l'animal dans une boutique située rue Legendre, où ils ont dû l'abattre à coups de chaise."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'une bande à l'École du Crime",
    "summary": "La Sûreté a démantelé une bande de jeunes malfaiteurs surnommés les élèves de l'École du crime. M. Homard, sous-chef de la sûreté, a procédé à l'arrestation de dix individus auteurs de nombreux larcins au square Saint-Jacques.",
    "paragraphs": [
      "Un groupe de jeunes malfaiteurs, s'intitulant cyniquement les élèves de l'École du crime, terrorisait depuis quelque temps le square de la Tour-Saint-Jacques. M. Homard, sous-chef de la Sûreté, a mené une opération qui a permis l'arrestation de dix individus, auteurs de nombreux vols dans le quartier."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Étranger",
    "title": "Cyclone au Texas",
    "summary": "La ville de High-Island, dans le comté de Jefferson au Texas, a été rayée de la carte par un cyclone dévastateur. Sur un millier d'habitations, aucune n'a survécu ; des cadavres ont été découverts dans les décombres.",
    "paragraphs": [
      "La localité de High-Island, située au sud du comté de Jefferson, a été totalement dévastée par un cyclone d'une rare violence. Sur un millier de maisons que comptait la cité, il n'en reste pas une seule debout. Des cadavres ont été retirés des décombres par les secours."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Environnement",
    "title": "L'incendie des Landes",
    "summary": "L'incendie dévastateur des forêts des Landes est désormais maîtrisé. Le paysage porte les stigmates du désastre : les pins calcinés et un sol transformé en brique témoignent de l'intensité de la chaleur.",
    "paragraphs": [
      "L'incendie qui ravageait les forêts des Landes est à présent éteint, mais la population demeure en état d'alerte. L'aspect du pays est désolé : à la place de la forêt, on ne voit que des pins calcinés s'élevant comme des colonnes brisées. Sous l'effet de l'intense chaleur, le sol a pris l'aspect d'une brique cuite."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident mortel au tissage Bettremieux",
    "summary": "Un drame terrible a frappé le tissage Bettremieux : un jeune ouvrier, happé par une courroie de transmission, a succombé à ses blessures après une vaine tentative d'amputation.",
    "paragraphs": [
      "Alors qu'il se déplaçait, le jeune homme trébucha et tomba sur le sol. Cherchant instinctivement à amortir sa chute, il s'agrippa au premier objet à sa portée : la courroie de transmission.",
      "En un clin d'œil, le malheureux fut hissé et entraîné par la courroie, restant agrippé à l'arbre de transmission. Il y fit ainsi plus de trois cents tours sous les cris d'épouvante des spectateurs impuissants.",
      "Par malheur, le tissage Bettremieux emprunte sa force motrice à une usine voisine. Il fallut courir jusqu'à celle-ci pour faire arrêter la machine. Quand, au bout de quelques minutes, on put enfin dégager le jeune homme, il était dans un état lamentable : les deux jambes brisées et un bras broyé.",
      "Malgré ses horribles souffrances, le malheureux avait conservé toute sa connaissance ; il consolait son pauvre père, dont la douleur était déchirante.",
      "Dans la soirée d'hier, l'amputation du bras a été pratiquée ; mais l'infortuné jeune homme n'a pu survivre à ses affreuses blessures et a rendu le dernier soupir dans la matinée.",
      "La mère de la victime, souffrante, est actuellement en traitement dans le Midi. Une personne de la famille est partie pour lui annoncer cette cruelle nouvelle."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Sports",
    "title": "Les Courses : Neuilly-Levallois et Enghien",
    "summary": "Compte rendu des courses à Enghien : malgré une participation réduite, l'hippodrome reste très prisé par le public. Voici les pronostics pour les épreuves hippiques de ce mercredi 19 septembre.",
    "paragraphs": [
      "Aujourd'hui mercredi 19 septembre, voici nos pronostics pour les épreuves suivantes : Prix des Étalons, Prix de Cronstadt, Prix Auch, Prix Azur, Prix de Longchamps, Prix des Pins.",
      "Enghien : Résultats du mardi 18 septembre. L'assistance est toujours nombreuse à Enghien en raison de la brièveté des transports et de l'agrément de cet hippodrome, parfaitement entretenu par la Société sportive d'encouragement.",
      "Les courses, malgré l'abstention d'une partie des chevaux inscrits au programme, ont été intéressantes. Le prix du Nantais a été l'occasion d'une victoire ultra-facile pour un vieux cheval nommé Turbot."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Feuilleton",
    "title": "L'inconnue - Suite du récit",
    "summary": "Mademoiselle Belcourt reçoit une lettre chargée d'excuses et d'argent de la part d'Ernest Brigoin. Jean Rédal suggère une ruse pour protéger la réputation de la jeune fille.",
    "paragraphs": [
      "La jeune fille se retrouva dans la salle à manger où son père et sa mère, commençant à reprendre toute leur lucidité, arrivaient. Elle leur montra la lettre qu'elle venait de recevoir, laquelle contenait quatre quittances de loyer et deux billets de mille francs.",
      "La lettre d'Ernest Brigoin contenait des excuses pour ses agissements passés et proposait son aide de manière désintéressée. Jean Rédal, présent, suggéra de retourner l'argent en se faisant passer pour le fiancé de la jeune fille afin de sauver son honneur."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Chroniques des Spectacles",
    "title": "Spectacles et divertissements du 19 septembre",
    "summary": "Programme des théâtres parisiens pour ce 19 septembre. Le spectacle « Y a d'la femme » au Parisiana s'impose comme une revue d'Exposition incontournable, spirituelle et vive.",
    "paragraphs": [
      "Opéra : Hellé. Opéra-Comique : Mignon. Théâtre Sarah-Bernhardt : L'Aiglon. Gymnase : Les Surprises du Divorce. Palais-Royal : Le Gros Lot. Vaudeville : Madame Sans-Gêne. Porte-Saint-Martin : Cyrano de Bergerac.",
      "La revue 'Y a d'la femme', qui vient de réussir si brillamment à Parisiana, est bien le prototype de la revue d'Exposition. Parlant de tout et blaguant tout, spirituelle et frondeuse, elle est interprétée avec beaucoup de verve par une troupe d'artistes très appréciés du public."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Informations météorologiques",
    "title": "Bulletin de la température",
    "summary": "Après une journée clémente, le temps s'est gâté hier soir sur Paris. L'arrivée d'une dépression sur l'Irlande laisse présager un temps chaud et orageux sur l'ensemble de la France.",
    "paragraphs": [
      "Le temps, qui a été très beau hier pendant la plus grande partie de la journée, s'est brusquement couvert à huit heures du soir et une averse abondante s'est abattue sur Paris.",
      "La situation se modifie dans le nord-ouest de l'Europe, une dépression s'étant avancée sur l'Irlande. En France, un temps chaud et orageux est désormais probable."
    ]
  }
];
