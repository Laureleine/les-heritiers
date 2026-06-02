// Date: 1900-02-22
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-02-22 (Version Restaurée, 34 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique Littéraire",
    "title": "Une académie littéraire russe",
    "summary": "L'empereur de Russie a décrété la création d'une académie littéraire à Saint-Pétersbourg, calquée sur le modèle français, illustrant le rayonnement culturel de notre pays et le rapprochement entre nos deux nations.",
    "paragraphs": [
      "Il y a quelques jours, les journaux ont annoncé que l'empereur de Russie avait décidé la création, à Saint-Pétersbourg, d'une académie littéraire sur le modèle de l'Académie française.",
      "Il est permis d'enregistrer avec joie cette nouvelle, qui affirme la durée de notre influence littéraire et intellectuelle, en même temps qu'elle resserre davantage les liens existant entre deux grands pays faits pour s'entendre."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage secret : Les amoureux de Rolande",
    "summary": "La banque de l'Égyptien est agitée par les fluctuations du jeu. Ludovic de Queyrel, tourmenté par le vol d'un billet bleu, cherche désespérément à masquer ses traces au sein d'une atmosphère de plus en plus tendue.",
    "paragraphs": [
      "La nouvelle banque de l'Égyptien ne se dessinait pas bien nettement en gain ou en perte. Ça allait, ça venait.",
      "Le râteau de Trois-Pattes leur doublait aussi souvent leur mise qu'il ne la leur enlevait. Cela faisait un mouvement de plaques qui, peu à peu, prenait plus d'entrain.",
      "Parmi les joueurs, Ludovic de Queyrel, nerveusement, fébrilement, palpait dans sa poche ce billet bleu.",
      "L'Égyptien, à qui il avait volé ce billet, était là. Et, au milieu des péripéties du jeu et des tensions avec Madeleur, Ludovic cherchait à cacher ses traces tout en succombant au démon du jeu.",
      "L'incident du billet déchiré et l'intervention de l'inconnu Delorme marquent un tournant dans cette partie de jeu aux conséquences incertaines."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Histoire",
    "title": "L'Académie française : Origines et traditions",
    "summary": "Fondée sous l'impulsion du cardinal de Richelieu en 1635, l'Académie française s'est imposée comme le miroir de l'excellence intellectuelle nationale, consacrant le talent au-delà de la naissance.",
    "paragraphs": [
      "L'Académie française doit, en quelque sorte, son institution au hasard. Elle n'a été établie par édit du roi qu'en 1635, mais on peut dire que son origine est de quatre ou cinq ans plus ancienne.",
      "Le cardinal de Richelieu, protecteur des lettres, encouragea cette association régulière, offrant sa haute protection à la compagnie.",
      "À travers les siècles, l'Académie est devenue le miroir de notre littérature, conservant ses traditions malgré les critiques sur les écrivains rejetés ou les membres admis.",
      "Une anecdote sur les fauteuils académiques prouve qu'un roi avisé consacra solennellement ce principe que l'intelligence et le talent égalent la naissance et la fortune."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Information",
    "title": "Supplément Littéraire du Petit Parisien",
    "summary": "Le Supplément Littéraire Illustré de cette semaine présente deux gravures captivantes, « Une arrestation difficile » et « La charmeuse de serpents », accompagnées d'une vue de l'Exposition de 1900.",
    "paragraphs": [
      "Le Supplément Littéraire Illustré en couleurs, en vente cette semaine, contient deux superbes gravures : « Une arrestation difficile » et « La charmeuse de serpents ».",
      "Nos lecteurs trouveront également une vue de la Porte Monumentale de l'Exposition de 1900."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Questions Militaires",
    "title": "Vers une modernisation de l'armée française",
    "summary": "Le ministre de la Guerre, le général de Galliffet, annonce des innovations majeures, incluant l'usage d'automobiles militaires et l'amélioration de l'artillerie, confirmant la marche de la France vers le progrès.",
    "paragraphs": [
      "Dans la discussion du budget, les chapitres concernant les dépenses militaires ont le don de réveiller l'opinion publique.",
      "Le ministre de la Guerre, le général de Galliffet, a évoqué l'utilisation d'automobiles militaires, inconnues jusqu'à ce jour, dues aux découvertes de nos officiers, qui procureraient des avantages considérables.",
      "Il a également signalé la réfection de l'artillerie et l'annonce prochaine d'un fusil supérieur, soulignant la volonté de la France de poursuivre ses destinées dans la voie du progrès."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Terrible incendie en Espagne",
    "summary": "Un violent incendie ravage le village espagnol d'Alaquines, détruisant 180 maisons et laissant 200 familles sans abri. Face à cette tragédie, le gouvernement promet une aide urgente aux populations sinistrées.",
    "paragraphs": [
      "Un terrible incendie s'est déclaré dans le village d'Alaquines. Cent quatre-vingts maisons ont été dévorées par les flammes et deux cents familles se trouvent désormais sans abri.",
      "Le sinistre se poursuit avec violence et l'on craint que la localité entière ne soit anéantie. Les pertes matérielles sont considérables et plusieurs habitants, frappés par la tragédie, ont sombré dans la folie.",
      "Le gouverneur ainsi que le ministre de l'Intérieur doivent se rendre prochainement sur les lieux afin d'apporter les secours nécessaires aux populations éprouvées."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Social",
    "title": "Les revendications des cochers de fiacre",
    "summary": "À l'approche de l'Exposition universelle, les cochers de fiacre sollicitent l'appui de M. Waldeck-Rousseau pour réformer la redevance journalière imposée par les loueurs, devenue insupportable.",
    "paragraphs": [
      "Les députés de Paris sont intervenus auprès de M. Waldeck-Rousseau au nom des cochers de fiacre afin de solliciter des réformes indispensables avant l'ouverture prochaine de l'Exposition.",
      "La réclamation principale porte sur la réglementation de la somme journalière payée par les cochers aux loueurs de voitures. Ce prélèvement ne leur permet plus d'assurer leur subsistance face à la concurrence croissante, notamment celle du Métropolitain.",
      "M. Calmels, secrétaire général du syndicat, exprime l'espoir que ces revendications légitimes seront dûment examinées lors de la grande réunion corporative prévue le 15 mars."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Incendie volontaire à Ivry",
    "summary": "M. Duyme, marchand de vins à Ivry, a été arrêté pour incendie volontaire. Malgré ses allégations de vol, la police a découvert dix foyers d'incendie disposés de manière suspecte dans son commerce.",
    "paragraphs": [
      "M. Duyme, marchand de vins à Ivry, avait déclaré un incendie dans son établissement, alléguant un vol. Cependant, le commissaire de police a découvert sur les lieux dix foyers d'incendie habilement disposés.",
      "Les soupçons se sont immédiatement portés sur le débitant. Devant l'incohérence de ses explications et l'absence totale de traces d'effraction, il a été écroué au dépôt sur décision du juge d'instruction."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Agriculture",
    "title": "Le concours des animaux gras",
    "summary": "Le concours général des animaux gras s'installe aux pavillons de la Villette pour préparer l'Exposition de 1900. La réception des bêtes est en cours et le jury débutera ses évaluations dès demain.",
    "paragraphs": [
      "En vue de l'Exposition de 1900, le concours général des animaux gras se tient cette année dans les pavillons du marché aux bestiaux de la Villette.",
      "La réception des animaux a débuté hier. Les opérations du jury commenceront dès demain afin d'évaluer les bêtes présentées ainsi que les produits de laiterie et les volailles."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Politique",
    "title": "Mouvement administratif",
    "summary": "Le Journal officiel annonce ce matin d'importantes nominations préfectorales : MM. Joly, Martin-Feuillé et Phélut sont respectivement nommés dans les départements du Puy-de-Dôme, des Ardennes et du Tarn.",
    "paragraphs": [
      "Le Journal officiel publie ce matin le mouvement administratif suivant : M. Joly est nommé préfet du Puy-de-Dôme, M. Martin-Feuillé est nommé préfet des Ardennes, et M. Phélut est nommé préfet du Tarn."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "Dépêches de la guerre en Afrique du Sud",
    "summary": "La situation des Boers demeure incertaine. Malgré les efforts britanniques à Paardeberg, le général Cronjé résiste, tandis que les troupes du général Buller subissent de lourdes pertes devant Ladysmith.",
    "paragraphs": [
      "La situation des Boers n'est pas aussi critique qu'annoncé par les communiqués officiels anglais. Le généralissime n'a pas réussi à couper la retraite au général Cronjé.",
      "Des combats ont eu lieu près de Paardeberg, où les généraux Knox et Macdonald ont été blessés.",
      "Le War Office annonce que les opérations des troupes du général Buller ont coûté 9 officiers tués ou blessés, bien que la liste ne soit pas encore complète.",
      "Devant Ladysmith, un vif combat a eu lieu à Horseshoe-Kop, occasionnant des pertes considérables côté anglais."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Situation inquiétante en Afrique du Sud",
    "summary": "À Londres, le scepticisme grandit quant aux succès de lord Roberts. L'échec probable de l'encerclement de Cronjé et du raid sur Bloemfontein retarde tout espoir d'engagement décisif rapide.",
    "paragraphs": [
      "Le correspondant du Temps à Londres transmet une dépêche signalant que le général Buller a fait part au War Office d'un mouvement de troupes fédérales partant du Natal vers l'État libre.",
      "Le commandant Gapetun a transmis la nouvelle à Kimberley, d'où elle a été portée à lord Roberts par estafette.",
      "Dans les cercles militaires de Londres, on considère comme manqué le double objectif de lord Roberts, à savoir l'écrasement de Cronjé et le raid sur Bloemfontein. Il ne faut pas s'attendre à un engagement sérieux avant la fin de la semaine."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Pénurie d'officiers",
    "summary": "Londres, 21 février : Face aux difficultés croissantes rencontrées sur le théâtre des opérations en Afrique du Sud, le général Roberts a sollicité le renfort urgent d'une quarantaine d'officiers supplémentaires.",
    "paragraphs": [
      "Londres, 21 février : Le général Roberts a demandé au ministre de la Guerre de lui envoyer d'urgence une quarantaine d'officiers."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Marine",
    "title": "La Flotte Anglaise",
    "summary": "La Ligue navale anglaise alerte sur la faiblesse de la flotte britannique. Elle préconise la construction immédiate de trente nouveaux croiseurs et l'augmentation des réserves pour assurer la supériorité navale.",
    "paragraphs": [
      "Le Manchester Guardian a eu connaissance du nouveau plan du comité de la Ligue navale anglaise. Le comité a découvert que la marge de supériorité de la marine britannique est extrêmement mince et qu'il faut immédiatement commencer la construction de trente croiseurs et augmenter de 10 000 hommes la réserve navale.",
      "Le comité voudrait également faire interdire par le gouvernement la vente du charbon du pays de Galles aux marines étrangères."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits divers",
    "title": "Accident d'un vapeur anglais dans la rivière Delaware",
    "summary": "Le vapeur anglais Westmeath, transportant des munitions pour l'armée, a coulé soudainement dans le Delaware. Les autorités britanniques n'excluent pas la thèse d'un attentat commis par des Boers.",
    "paragraphs": [
      "On télégraphie de New-York, le 21 février, à la Saint-James Gazette : Le vapeur anglais Westmeath, chargé de munitions pour le service des subsistances anglaises, a coulé de la manière la plus subite dans la rivière Delaware.",
      "Le capitaine s'est réfugié à terre pendant que l'équipage montait dans le gréement. Les Anglais attribuent cet accident à un attentat des Boers et la police a été lancée sur leur piste. Le capitaine s'est éclipsé après avoir mis pied à terre."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Étranger",
    "title": "Dépêches de l'étranger : La famine et la peste dans l'Inde",
    "summary": "L'Inde est en proie à une détresse profonde : les mauvaises récoltes provoquent une famine généralisée, tandis que l'épidémie de peste, particulièrement virulente à Bombay, a causé 16 000 décès en un mois.",
    "paragraphs": [
      "Londres, 21 février : La famine s'aggrave dans l'Inde. Le nombre des personnes qui, par suite des mauvaises récoltes, n'ont plus les ressources nécessaires pour subvenir à leur existence et doivent être nourries aux frais du budget, est devenu considérable.",
      "La peste continue ses ravages. À Bombay, la mortalité s'élève journellement ; 16 000 personnes ont succombé dans la ville le mois dernier. La petite vérole et la dysenterie sévissent désormais à l'état épidémique parmi les réfugiés dans les districts durement éprouvés par la famine."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique",
    "title": "La Défense coloniale",
    "summary": "M. Decrais, ministre des Colonies, présente un projet de 6 millions de francs pour la défense des points d'appui coloniaux. Le rapport sera prochainement déposé sur le bureau de la Chambre par M. Groutet.",
    "paragraphs": [
      "Le projet de M. Decrais, ministre des Colonies, relatif à la défense des points d'appui, prévoit une dépense évaluée à 6 millions de francs.",
      "Le rapport, confié à M. Groutet, député de la Vendée, sera prochainement communiqué et déposé sur le bureau de la Chambre dans les premiers jours de mars."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique",
    "title": "Service militaire des instituteurs",
    "summary": "La commission de l'armée valide une dispense de vingt-huit jours pour les instituteurs lors de la seconde période d'appel. Cette mesure, soutenue par le budget, entraîne une économie de 1 000 francs.",
    "paragraphs": [
      "La commission de l'armée a décidé, en principe, que les instituteurs seraient dispensés d'une période de vingt-huit jours, en appliquant cette dispense au deuxième appel pour les exercices aux manœuvres dans la réserve.",
      "La commission du budget a résolu de donner son adhésion à ce texte et a voté une réduction de 1 000 francs sur le budget de la Guerre."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Justice",
    "title": "La Haute Cour",
    "summary": "Les débats se poursuivent dans une atmosphère morne au Luxembourg. Le préfet Lépine défend l'action policière du 23 février face aux critiques, tandis que M. Millevoye plaide pour la probité de M. Deroulède.",
    "paragraphs": [
      "Le palais du Luxembourg demeure morne et le public témoigne de peu d'intérêt. Les tribunes sont à peu près désertes.",
      "Le président Fallières poursuit l'audition des témoins. M. Lépine, préfet de police, proteste contre la qualification donnée par M. Marcel Habert à la journée du 23 février, qu'il a nommée journée anarchiste et policière, affirmant que la police a réprimé les troubles avec énergie.",
      "M. Millevoye fait l'éloge du passé politique de l'accusé, qu'il qualifie de républicain irréductible, et affirme que M. Deroulède a toujours refusé les propositions faites par le duc d'Orléans."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits divers",
    "title": "Une rixe en wagon",
    "summary": "Une altercation dans un train au départ de Paris a conduit un ouvrier à l'hôpital, blessé à la main par deux coups de couteau. L'agresseur, Jérôme Hroler, un journalier de dix-sept ans, a été arrêté à Pantin.",
    "paragraphs": [
      "Avant-hier, dans un train partant de Paris, une rixe a éclaté entre des perturbateurs et des voyageurs. Un ouvrier a été blessé de deux coups de couteau à la main gauche.",
      "L'agresseur, arrêté à Pantin, est un nommé Jérôme Hroler, âgé de dix-sept ans, journalier."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Échos",
    "title": "Échos et nouvelles",
    "summary": "Le Président de la République a reçu M. Pallain, gouverneur de la Banque de France. Une rectification importante est apportée concernant le décès du député de Charolles, M. Chevrot.",
    "paragraphs": [
      "Le Président de la République a reçu hier matin M. Pallain, gouverneur de la Banque de France.",
      "On nous signale par erreur le décès de M. Chevrot, député de Charolles. Ce n'est point le député de Saône-et-Loire, mais son frère, qui est mort avant-hier."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Nécrologie",
    "title": "Décès de la Maréchale de Mac-Mahon",
    "summary": "La Maréchale de Mac-Mahon est décédée. Ses obsèques seront célébrées demain, à dix heures, en l'église Sainte-Clotilde. Elle laisse derrière elle trois enfants.",
    "paragraphs": [
      "On annonce le décès de la Maréchale de Mac-Mahon. Elle laisse deux fils, MM. Patrice et Emmanuel de Mac-Mahon, et une fille qui a épousé le vicomte de Marmont.",
      "Les obsèques de la Maréchale de Mac-Mahon auront lieu demain, à dix heures, en l'église Sainte-Clotilde."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Nécrologie",
    "title": "Mort de M. Sébastien Commissaire",
    "summary": "L'ancien représentant du peuple, M. Sébastien Commissaire, est décédé à Lyon. Acteur de la Révolution du 4 septembre, il avait depuis longtemps rejoint la vie privée.",
    "paragraphs": [
      "On annonce de Lyon la mort de M. Sébastien Commissaire, ancien représentant du peuple.",
      "M. Commissaire prit une part active à la Révolution du 4 septembre et se mit à la disposition du gouvernement de la Défense nationale. Depuis lors, il était rentré dans la vie privée."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Justice",
    "title": "L'erreur judiciaire concernant M. Cardon",
    "summary": "Victime d'une erreur judiciaire, M. Cardon a été acquitté par la cour d'assises, les aveux sur son lit de mort du véritable coupable ayant enfin révélé son innocence.",
    "paragraphs": [
      "M. Cardon, victime d'une erreur judiciaire, a été enfin acquitté.",
      "M. Cardon avait été condamné sur les seules déclarations d'un témoin, malgré ses dénégations obstinées. Récemment, son véritable complice, qui avait fui, avoua à l'agonie que l'accusé était parfaitement innocent. La cour d'assises a ordonné son acquittement immédiat."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Justice",
    "title": "L'affaire Tinchant et la bigamie",
    "summary": "M. Tinchant, un Américain de la Nouvelle-Orléans, a été arrêté pour bigamie suite à une plainte. La justice débat de la validité de ses mariages contractés à Londres et à Paris.",
    "paragraphs": [
      "M. Tinchant, âgé de quarante-deux ans, originaire de la Nouvelle-Orléans, a été arrêté pour bigamie sur plainte de son épouse, Mme P., commerçante rue Réaumur.",
      "Il avait épousé une première femme à Londres, avant de contracter un second mariage à Paris. La question de savoir si le mariage célébré à Londres est reconnu par la loi française, face aux législations étrangères, suscite d'importantes discussions au Palais de Justice."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression violente boulevard de Belleville",
    "summary": "M. Pierre Roussel, ayant voulu porter secours à une femme agressée boulevard de Belleville, a été violemment frappé par trois malfaiteurs armés de barres de fer et conduit à Lariboisière dans un état préoccupant.",
    "paragraphs": [
      "Hier soir, M. Pierre Roussel a aperçu trois individus qui frappaient avec une rare violence une femme sur le boulevard de Belleville. En voulant s'interposer pour faire cesser ce traitement, il a été brutalement pris à partie par les malfaiteurs, armés de barres de fer.",
      "Le malheureux, sérieusement atteint par les coups, a été transporté d'urgence à l'hôpital Lariboisière où il a été admis dans un état jugé grave par les médecins."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'escrocs au Comptoir du Commerce",
    "summary": "Un individu a été confondu pour une escroquerie aux emplois fictifs au Comptoir du Commerce et de l'Industrie. Il avait soutiré 108 francs à ses victimes avant de disparaître.",
    "paragraphs": [
      "Un individu se faisant nommer G. avait monté une escroquerie audacieuse, promettant des places fort avantageuses au sein du « Comptoir du Commerce et de l'Industrie » moyennant un versement préalable de 108 francs.",
      "Après avoir collecté ladite somme auprès de nombreuses personnes abusées par ses promesses, l'escroc a pris la fuite. Les plaintes des victimes ont été déposées au commissariat de M. le commissaire Lajoux."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Attentat contre des gardiens de la paix",
    "summary": "Le sous-brigadier Davion a été la cible d'une agression armée dans le cinquième arrondissement. Ses agresseurs, dont Gaston Maillet, ont été arrêtés après une fusillade.",
    "paragraphs": [
      "Dans le cinquième arrondissement, un nouvel attentat a été commis contre des représentants de l'ordre. Le sous-brigadier Davion, alors en service, a été pris à partie par des rôdeurs armés de revolvers.",
      "Après un échange de coups de feu dans la rue, les agresseurs, dont Gaston Maillet, âgé de vingt ans, ont été appréhendés par les renforts de police arrivés sur les lieux. Maillet a aussitôt été conduit au dépôt."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Autour de Paris : Incidents divers",
    "summary": "La banlieue parisienne a été marquée par divers incidents : une bagarre violente à La Garenne-Colombes, un incendie à Aubervilliers et un accident ferroviaire mortel à Noisy-le-Sec.",
    "paragraphs": [
      "À La Garenne-Colombes, deux charretiers en sont venus aux mains, se battant à coups de fouet dans un terrain vague ; l'un d'eux a été relevé avec de graves blessures.",
      "À Aubervilliers, un incendie a ravagé une maison située rue Koudin à la suite d'une imprudence domestique. Aucun décès n'est heureusement à déplorer, bien que les dégâts matériels soient considérables.",
      "À Noisy-le-Sec, un employé de chemin de fer a été mortellement frappé alors qu'il traversait la voie ferrée au moment du passage d'un convoi."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Sports",
    "title": "La semaine automobile de Pau",
    "summary": "La semaine automobile de Pau débute ce jeudi. Cet événement, qui se déroule sur les routes du Béarn, rassemble de nombreuses machines, des voitures de tourisme aux modèles de course.",
    "paragraphs": [
      "Le jeudi marque le début de la semaine automobile de Pau, dont les épreuves se tiendront sur les routes pittoresques du Béarn.",
      "De nombreuses catégories de voitures sont inscrites à ce concours, allant des voitures de tourisme aux modèles de course, tous en lice pour l'obtention de prix prestigieux."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Feuilleton",
    "title": "Deux Passions - Un drame du mariage (XII)",
    "summary": "Tavernier reçoit le docteur Bernay, venu le solliciter pour obtenir, moyennant finances, le consentement au divorce de M. Dufresne afin de libérer Suzanne d'une union devenue un véritable calvaire.",
    "paragraphs": [
      "« Rencontre ! » il protesta vivement. « Ne rappelez plus mon ami ! C'est de lui qu'il s'agit. »",
      "« Parfaitement. Voilà son nom imprimé en toutes lettres, M. Dufresne. Cette pauvre vieille folle de présidente est morte également. C'est imprimé aussi : Madame Desaubiers, veuve du regretté président des Andelys. Pas d'erreur. »",
      "L'avocat lisait tout haut : « Madame Desaubiers, une jeune femme de vingt-trois ans, n'a dû son salut qu'au plus miraculeux des hasards : elle a été sauvée par le jeune marquis de X..., notre célèbre explorateur, qui suivait à cheval les bords de la Seine, accompagné de son ancien ordonnance du régiment. Un brave et émouvant sauvetage. »",
      "Mais il me semble que c'est assez, mère Antoine, trop de lumière même ! Au même instant le concierge entra, une lettre à la main. Tavernier y jeta les yeux et dit : « C'est de lui. Voyons ce qu'il nous écrit. »",
      "Il replia aussitôt la lettre en grommelant : « Peu de chose, et s'il croit me tromper ! » Il n'acheva pas sa pensée, pourtant il demanda : « Il prétend qu'il n'avait pas le courage de m'apprendre cette catastrophe. Le croyez-vous sérieusement, mère Antoine, vous qui êtes une femme d'expérience ? »",
      "« Dame, monsieur, je ne sais pas. Vous le connaissez mieux que moi. C'est si grave ! Je vais faire votre chambre. »",
      "C'est si grave ! C'est si grave ! Lorsqu'on sonna à la porte du vestibule, elle ouvrit. Un vieux monsieur demanda : « M. Paul Tavernier ? » « Si monsieur veut me donner son nom. Voici ma carte ! »",
      "La bonne femme entra et ne revint pas. Ce fut l'avocat qui se précipita au-devant de son visiteur en disant : « Comment, c'est vous, docteur ? » Il l'introduisit avec empressement dans son cabinet, il avança son meilleur fauteuil et reprit : « Je vous dirais quel honneur de vous voir chez moi si ce n'était dans des circonstances aussi tristes. »",
      "« Vous savez ? » « Oui, docteur. D'abord, les journaux ont annoncé vaguement un naufrage qui m'a donné à réfléchir. Et ce matin, j'ai été fixé par les détails que voici. » Il désignait du doigt le passage qu'il venait de lire et il ajouta : « Depuis, j'ai reçu une lettre de Dufresne. »",
      "Quelques jours plus tôt, il aurait dit « mon ami Dufresne ». Le docteur remarqua cette nuance mais il n'en demanda pas la cause. Il reprit : « Je viens vous prier de nous rendre un service. » « Lequel ? » « Je vous tiens pour un galant homme. »",
      "« Votre malheureuse condition vous a rendu misanthrope et moins que personne je pourrais m'en étonner. Croyez, mon cher enfant, mon âge me permet de vous donner ce nom, que dans mon entourage, personne n'a pour vous que des sentiments d'estime et de sympathie. »",
      "« L'homme qui, seul comme vous, livré tout jeune à lui-même, a su par l'étude arriver aux connaissances que vous possédez et se retrancher par fierté dans l'existence que vous vous faites, a certainement un caractère devant lequel il faut s'incliner. Voici ce qui m'amène. Vous possédez une certaine influence sur M. Dufresne. » « Bien faible, docteur. »",
      "« Cependant... Vous allez parler de nos relations, de notre camaraderie, de notre intimité. » « Sans doute. » « Toute de surface, cher docteur, aucune profondeur, de mon côté du moins. J'allais presque dire, aucune sincérité. »",
      "Le docteur le fixa longuement : « Ah ! » dit-il, surpris de la révélation contenue dans ce seul mot. « Mes caractères n'ont aucun point de ressemblance ou de contact, reprit Tavernier. Je peux même dire que tous nos angles ressortent et s'opposent. Nos goûts ne sont pas les mêmes, nos aspirations n'ont pas le même but. »",
      "« Vous êtes liés depuis de longues années ? » « C'est vrai. Les circonstances nous ont mis en rapport. Jeune, j'ai fréquenté les cabarets du Quartier Latin, les brasseries. Je l'ai rencontré là et nous nous sommes unis à peu près comme les chiens du même chenil qui chassent ensemble et prennent leur pitance au même restaurant, c'est-à-dire à la même auge. »",
      "« Puis un jour, une circonstance que je vous expliquerai plus tard m'a engagé à ne pas rompre une camaraderie qui me semblait par moments assez pesante. Je peux toujours vous apprendre pour le moment que cette circonstance était de celles qui divisent les hommes et parfois en font d'irréconciliables ennemis. C'est à elle que je dois de suivre pas à pas dans la vie celui dont vous me parlez. »",
      "« Ah ! » dit encore le docteur Bernay, frappé du ton énigmatique et menaçant dont parlait le jeune homme. « Je vous étonne, peut-être, reprit-il doucement. Il ne faut pas m'en vouloir, cher docteur. Il y a tant de mystères dans la vie en général et surtout dans la mienne qu'un de plus ou de moins ne compte guère. »",
      "« Mais enfin que voulez-vous ? Si je peux vous aider, je vous promets de le faire. Je suis cependant plus porté au mal qu'au bien ! Parfois, je jouis presque avec délices des misères des autres et il m'est arrivé de leur en souhaiter. » « Vraiment ? » « Je l'avoue. Vous ignorez ce que c'est que de se sentir seul comme un paria, sans père ni mère, sans une tante ou un oncle, sans même un parent éloigné qu'on puisse appeler mon cousin et chez lequel on sent la sympathie qui nous vient tout naturellement d'une commune origine ! »",
      "« Non, en vérité, docteur, l'isolement n'est pas bon. La tête s'emplit de pensées d'envie et le cœur distille du fiel. Vous avez été bon pour moi, vous. Vous m'avez accueilli et parlé avec bonté. Je vous dois donc de la reconnaissance. » Il reprit avec plus de force : « Dites, que voulez-vous ? » « J'ai peur. » « De quoi ? » « D'un péril obscur mais qui me paraît certain. »",
      "« Pour qui ? » « Pour une enfant que j'aime comme ma fille. » « C'est ? » « Suzanne. » « Je l'avais compris. Elle est en ce moment sous le coup d'une immense douleur. La perte de son enfant ? D'abord et aussi d'une femme pour laquelle elle avait la plus profonde affection et qui la méritait : Madame Desaubiers. »",
      "Le vieillard s'inclina : « Déjà depuis longtemps, reprit-il, nous avions remarqué l'éloignement graduel de M. Dufresne pour sa maison de la Coudraie et pour celle que j'ai eu le tort d'engager dans les liens d'un mariage malheureux. »",
      "« Je ne vous demande pas les causes de cet éloignement. Je n'inviterai jamais personne à une trahison. D'ailleurs, peut-être ne les connaissez-vous pas vous-même. Mais je considère le mal sans remède et puisque la fatalité a détruit, en nous enlevant notre infortunée Georgette, le seul anneau qui reliait encore tant bien que mal ces deux époux mal assortis, voici que je désire... » Il s'arrêta sous le coup d'une profonde émotion et reprit : « M. Dufresne et Suzanne ne sont plus, comme tant d'autres, que deux forçats du mariage. Qu'ils le rompent, j'en serai heureux. »",
      "Le vieux docteur ajouta, d'un ton qui fit frissonner Tavernier : « Le passé et le présent me font redouter l'avenir pour Suzanne, et j'aime cette enfant de toutes mes forces. Je veux la défendre et réparer le mal que je lui ai fait par nécessité et par erreur. »",
      "« Alors ? » demanda l'avocat. « Si M. Dufresne veut consentir à une séparation, à un divorce, je suis prêt à faire en secret un sacrifice considérable pour l'obtenir. » « Vous, docteur ? » « J'évalue la fortune de M. Dufresne à trois cent mille francs environ. Pour racheter la liberté de Suzanne, je... » Il allait indiquer un chiffre énorme. Tavernier l'arrêta brusquement : « Vous voulez me charger de cette négociation ! » dit-il. « Oui. » « Eh bien ! ne me pressez pas de questions, cher docteur. Laissez-moi traiter l'affaire comme je l'entendrai. Si je dépasse le sacrifice que vous voulez vous imposer, vous aurez toujours le droit de me désavouer. »",
      "« Vous espérez réussir sans trop de peine, mais si par hasard mon attente était trompée... »"
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Informations Pratiques",
    "title": "Chemins de Fer : Fêtes du Carnaval",
    "summary": "À l'occasion du Carnaval, les billets d'aller et retour délivrés du 17 au 20 février pour les réseaux Ouest, Nord, État et Orléans voient leur validité exceptionnellement prolongée jusqu'au 21 février inclus.",
    "paragraphs": [
      "Prolongation de la durée de validité des billets d'aller et retour. À l'occasion des fêtes du Carnaval, les coupons de retour des billets d'aller et retour ordinaires (grandes lignes), délivrés du samedi 17 au mardi 20 février, de Paris aux localités desservies par les réseaux de l'Ouest, du Nord, de l'État et d'Orléans, situées au-delà de 100 kilomètres et réciproquement, seront acceptés jusqu'au mercredi 21 février par tous les trains de la journée."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Informations Pratiques",
    "title": "Programme du concert au Jardin Zoologique d'Acclimatation",
    "summary": "Programme du festival musical prévu le jeudi 22 février 1900 au palais d'hiver, sous la direction de M. J. Lafitte, avec le concours des solistes Mlle Lhermitte, Mlle Henriette Rue et M. G. Chassinal.",
    "paragraphs": [
      "Programme du concert qui sera donné le jeudi 22 février 1900, à deux heures, dans la grande salle du palais d'hiver : festival du jeudi avec le concours de Mlle Lhermitte, Mlle Henriette Rue et M. G. Chassinal. Chef d'orchestre : M. J. Lafitte, de l'Opéra.",
      "Première partie : Les Catalans (Popy), Les Mousquetaires (Ganne), Impromptu pour la Harpe (Pierné), Danses des sylphes (Godefroy), Scherzino (D'Espras), Sur la Baltique (de Thulsy).",
      "Deuxième partie : L'Ombre (Flotow)."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Actualités maritimes",
    "title": "Départs et arrivées des paquebots",
    "summary": "Mouvements maritimes de février 1899 : le paquebot Australie a quitté Suez le 18 février au soir, et le paquebot Natal, en provenance de Madagascar, a quitté Port-Saïd le 18 février au matin.",
    "paragraphs": [
      "Le paquebot Australie a quitté Suez le 18 février, à 4 heures du soir.",
      "Le paquebot Natal (M. M.), venant de Madagascar, a quitté Port-Saïd le 18 février, à 4 heures du matin."
    ]
  }
];
