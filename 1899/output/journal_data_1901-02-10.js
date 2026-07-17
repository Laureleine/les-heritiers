// Date: 1901-02-10
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-02-10 (Version Restaurée, 48 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La santé des troupes et l'hygiène militaire",
    "summary": "Au Sénat, le débat sur le budget de la Guerre souligne les succès de l'hygiène militaire contre la typhoïde, tout en opposant les avis sur l'usage de la quinine et la nécessaire amélioration de l'alimentation des soldats.",
    "paragraphs": [
      "La discussion du budget du ministère de la Guerre au Sénat a fourni aux deux docteurs en médecine, membres de la haute Assemblée, l'occasion de prononcer des discours fort intéressants sur l'hygiène des troupes et les épidémies qui atteignent les soldats.",
      "L'efficacité des mesures prises pour assainir les casernes, notamment par l'adduction d'eau salubre, est démontrée par la décroissance progressive de la mortalité par fièvre typhoïde. À l'intérieur, cette mortalité a diminué de moitié entre 1888 et 1893.",
      "Cependant, M. Alcide Treille attribue l'abaissement de la mortalité à d'autres causes et critique l'usage massif de la quinine, qu'il estime néfaste, ainsi que l'alcoolisme qui affaiblit la résistance des soldats.",
      "M. Léon Labbé a réfuté la plupart de ces appréciations, soulignant les progrès sanitaires accomplis. Il admet que si l'eau est un vecteur important, la contagion peut aussi avoir lieu par contact direct. Il insiste également sur le rôle de la quinine dans les campagnes coloniales et la nécessité d'améliorer l'alimentation de la troupe.",
      "Le ministre de la Guerre a annoncé son intention d'améliorer la suralimentation des jeunes soldats, notamment en distribuant une soupe chaude en hiver, ce qui constituerait une excellente mesure d'hygiène contre l'alcoolisme."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Politique",
    "title": "Les travaux parlementaires",
    "summary": "L'état de santé de M. Waldeck-Rousseau entraîne le report du débat sur les associations. La Chambre se consacrera aux prud'hommes, à la protection des oiseaux et à la justice de paix.",
    "paragraphs": [
      "La Chambre devait discuter du projet relatif au régime des associations, mais, en raison de l'état de santé de M. Waldeck-Rousseau, la discussion est reportée. Le gouvernement demandera à la Chambre de discuter des propositions concernant les conseils de prud'hommes, la protection des petits oiseaux et la compétence des juges de paix."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique Coloniale",
    "title": "Le bilan du protectorat en Tunisie",
    "summary": "La Tunisie connaît une prospérité notable sans charge pour le budget français. M. Delcassé insiste sur le renforcement de la présence française par l'installation de colons et d'ouvriers dans la Régence.",
    "paragraphs": [
      "Le développement de la Tunisie est un succès notable pour la France. Sans solliciter le budget métropolitain, le pays a vu ses recettes normales augmenter de 10 millions, permettant des investissements massifs dans les travaux publics, les routes et l'adduction d'eau.",
      "M. Delcassé a souligné la nécessité d'assurer l'avenir de la Tunisie par une présence française accrue, non seulement sous forme de capitaux, mais par l'installation de petits colons agricoles et d'ouvriers français, afin d'assurer notre puissance matérielle dans la Régence."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Attaque violente contre un gardien à Paris",
    "summary": "Un gardien d'ateliers, rue de la Folie-Méricourt, a été grièvement blessé par trois cambrioleurs surpris en flagrant délit. Les malfaiteurs ont fui sans emporter de butin.",
    "paragraphs": [
      "Au 106, rue de la Folie-Méricourt, M. Pierre Marcoz, gardien des ateliers de M. Leblanc, a surpris trois cambrioleurs tentant de fracturer le coffre-fort. Les malfaiteurs l'ont grièvement blessé avec un marteau, une pince et un couteau avant de prendre la fuite.",
      "Le malheureux gardien a été retrouvé inanimé deux heures plus tard par les locataires. Bien que gravement blessé, ses jours ne sont pas en danger. L'enquête a établi que les voleurs n'avaient eu le temps de rien dérober."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un voleur peu scrupuleux rue Leroux",
    "summary": "Un pickpocket a été appréhendé rue de Villejust après avoir volé Mme Delasaille. Pour dissimuler les pièces d'or dérobées, le malfaiteur avait tenté de les avaler.",
    "paragraphs": [
      "Mme Delasaille a été dévalisée par un individu élégant rue de Villejust. Lors de son arrestation, le voleur, se nommant Henri Levacher, a tenté d'avaler les pièces d'or dérobées. Un stratagème des agents de police a permis de récupérer l'argent qu'il dissimulait dans sa bouche."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame sanglant à Boufarik",
    "summary": "À Boufarik, une tentative de cambriolage à la ferme Trapp a tourné au drame : le fils de la maison a mortellement blessé son agresseur avant de succomber lui-même à ses graves blessures.",
    "paragraphs": [
      "La ferme Trapp, située près de Boufarik, a été le théâtre d'un terrible affrontement. Le jeune Trapp, réveillé en pleine nuit par un maraudeur, s'est immédiatement lancé à sa poursuite. Blessé d'un coup de couteau en pleine poitrine, il a réussi, avec une énergie désespérée, à terrasser son agresseur et à lui ôter la vie.",
      "Le médecin, dépêché sur les lieux, désespère désormais de sauver le jeune homme, dont l'état paraît désespéré."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Éboulement meurtrier à Saint-Étienne",
    "summary": "Un grave éboulement au puits de la Pompe à Saint-Étienne a coûté la vie au mineur M. Nouvet, tandis que son compagnon, M. Verrier, a été secouru vivant après plusieurs heures d'angoisse.",
    "paragraphs": [
      "Un éboulement s'est produit au puits de la Pompe. Deux mineurs, MM. Nouvet et Verrier, ont été ensevelis sous les décombres. M. Verrier a pu être dégagé vivant après plusieurs heures de travail acharné des sauveteurs.",
      "Hélas, M. Nouvet, malgré les efforts déployés, a succombé à ses blessures après une longue attente des secours."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "La relève au Sénégal",
    "summary": "Le transatlantique Macina a quitté le port avec un détachement militaire en direction du Sénégal, tandis qu'une compagnie du 1er régiment d'infanterie coloniale attend ses ordres à Bordeaux.",
    "paragraphs": [
      "Le transatlantique Macina est parti avec une partie des troupes à destination du Sénégal. Dans le même temps, une compagnie du 1er régiment d'infanterie coloniale est restée stationnée à Bordeaux dans l'attente d'instructions ultérieures."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Feuilleton",
    "title": "Miss Tempête",
    "summary": "Au chevet de la petite Marguerite, la mère Bertin reçoit la visite inattendue de Mlle Tavernier. Cette rencontre imprévue émeut profondément la vieille femme, annonçant de futures révélations.",
    "paragraphs": [
      "La mère Bertin, au chevet de Marguerite, veille attentivement sur le bébé. Elle reçoit alors la visite inattendue d'une jeune fille blonde, Mademoiselle Tavernier, venue s'enquérir de l'état de la malade.",
      "Une émotion particulière saisit la vieille femme à l'arrivée de la jeune fille, laissant dès lors présager de prochaines révélations concernant l'enfant."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Santé publique au Cap",
    "summary": "Face à la crainte d'une épidémie de peste au Cap, les autorités multiplient les mesures sanitaires, ordonnant l'examen bactériologique de la situation et l'extermination massive des rats.",
    "paragraphs": [
      "Le Cap, février. Les autorités ne sont pas encore certaines que la maladie ayant fait son apparition dans la ville soit la peste ; néanmoins, toutes les précautions nécessaires ont été prises.",
      "Un bactériologiste, mandaté par le gouvernement, procède actuellement à des expériences. Plusieurs consultations de spécialistes éminents ont eu lieu ce matin même.",
      "Le conseil du port offre désormais une prime de trente centimes pour chaque rat tué ; dans les docks, on procède à un massacre général de ces rongeurs."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Burghers et Portugais",
    "summary": "La légation portugaise à Londres dément toute menace d'invasion boer sur le territoire de Lourenço-Marquez et assure que les dispositions nécessaires ont été prises pour garantir la sécurité.",
    "paragraphs": [
      "Londres, 9 février. D'après plusieurs journaux, la légation portugaise à Londres déclare, au sujet des bruits d'invasion du territoire portugais par les Boers, que toutes les informations parvenues récemment de Lourenço-Marquez à Lisbonne indiquent qu'il n'y a pas lieu de s'alarmer quant au présent et que, d'ailleurs, des précautions sont prises pour faire face à toute éventualité."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Roberts et Buller en Afrique du Sud",
    "summary": "La Gazette de Londres publie les dépêches de lord Roberts et de sir Redvers Buller, détaillant la stratégie offensive en État libre d'Orange et les difficultés liées à la protection des voies ferrées.",
    "paragraphs": [
      "La Gazette de Londres publie ce soir les dépêches de lord Roberts et de sir Redvers Buller, adressées au Foreign Office le 6 février 1900.",
      "Lord Roberts décrit la situation en Afrique du Sud et sa résolution à prendre l'offensive dans l'État libre d'Orange. Il détaille ensuite les opérations pour secourir Kimberley, la reddition de Cronje, ainsi que la marche sur Bloemfontein, Kroonstadt et Pretoria.",
      "Concernant les revers militaires, il disculpe le général Broadwood et souligne la difficulté extrême de protéger les lignes de chemin de fer avec un effectif trop limité face à la guérilla boer."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Mécontentement en Allemagne",
    "summary": "L'irritation gagne les milieux conservateurs allemands face aux hommages rendus par l'empereur Guillaume II à lord Roberts lors de sa nomination au grade de maréchal de camp britannique.",
    "paragraphs": [
      "Berlin, 8 février. Des organes influents du parti conservateur se montrent fort irrités de la décoration de lord Roberts par Guillaume II et du discours de l'empereur remerciant Édouard VII de l'avoir nommé maréchal de camp anglais.",
      "Le Reichsbote regrette que Guillaume II ait tant loué les mérites de lord Roberts, jugeant l'empereur bien supérieur à ces généraux dans sa compréhension des réalités militaires."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Les événements de Chine",
    "summary": "Les puissances étrangères intensifient la coordination en Chine, exigeant la punition des responsables des troubles et le paiement d'indemnités avant toute négociation diplomatique.",
    "paragraphs": [
      "Berlin, 9 février. Le commandement supérieur annonce, depuis Pékin, le retour de la colonne Cleve à Tien-Tsin. Des détachements parcourent le pays pour sécuriser les zones où des chrétiens auraient été mis à mort.",
      "New-York, 9 février. À Pékin, les ministres ont modifié les termes de l'édit concernant les troubles. Les autorités allemandes ont ordonné des mesures de vigilance extrêmement strictes pour les étrangers.",
      "Shanghaï, 8 février. Les ministres étrangers insistent sur le châtiment des fonctionnaires coupables et le paiement d'une indemnité pécuniaire avant toute ouverture de discussion.",
      "Londres, 9 février. La Russie aurait offert d'acquérir les lignes de chemin de fer situées au nord de la Grande-Muraille, en déduisant le montant de l'indemnité due par la Chine.",
      "Londres, 9 février. On s'attend à ce que le maréchal de Waldersee quitte le nord de la Chine dès que le port de Takou sera libéré des glaces."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Les hôtes d'Édouard VII",
    "summary": "Les illustres invités du roi Édouard VII, dont le grand-duc Michel de Russie et le roi de Portugal, s'apprêtent à quitter l'Angleterre sous peu.",
    "paragraphs": [
      "Londres, 9 février. Parmi les hôtes du roi, le grand-duc Michel de Russie et le roi de Portugal quitteront l'Angleterre lundi prochain. Le prince héritier de Danemark repart dès ce soir."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Trois enfants brûlés",
    "summary": "À Furnes, un accident domestique a tourné au drame : une mère a renversé un chaudron d'eau bouillante sur ses trois enfants. L'aînée a succombé à ses blessures, les deux autres sont entre la vie et la mort.",
    "paragraphs": [
      "Furnes, 9 février. Un affreux malheur s'est produit dans une commune des environs de Furnes. Une mère a laissé échapper un chaudron d'eau bouillante sur ses trois enfants.",
      "L'aînée, une fillette de deux ans, a expiré après une atroce agonie. Les deux autres victimes sont en danger de mort et la malheureuse mère est devenue folle de désespoir."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un drame d'amour",
    "summary": "Un garçon de ferme a tenté d'assassiner la fille de ses employeurs près de Bruxelles après avoir été éconduit. Grièvement blessée par une décharge de plombs, la victime lutte contre la mort ; le coupable a été arrêté.",
    "paragraphs": [
      "Bruxelles, 9 février. Un garçon de ferme, éconduit par la fille de ses patrons, a tenté de se venger en lui tirant dessus à bout portant alors qu'elle circulait sur une route.",
      "La jeune fille est très gravement blessée par quatre-vingts plombs. Le coupable, dont l'arme a explosé dans ses mains lors de la décharge, a été arrêté et écroué par les autorités locales."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Vol de valeurs",
    "summary": "Un important paquet contenant des actions de la Société anonyme galicienne, destiné au tribunal de Paris, s'est mystérieusement volatilisé durant son transit par Cologne. Une enquête judiciaire est ouverte.",
    "paragraphs": [
      "Buda-Pesth, 9 février. Un paquet contenant des actions de la Société anonyme galicienne, expédié à destination du tribunal de Paris, a disparu au cours de son acheminement après son passage à Cologne. Une enquête est en cours pour retrouver ces valeurs."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Politique",
    "title": "La crise italienne",
    "summary": "La situation politique à Rome reste tendue. Ce matin, le roi d'Italie a poursuivi ses consultations diplomatiques en recevant MM. Sonnino, Bacelli et Lacava pour tenter de résoudre la crise ministérielle.",
    "paragraphs": [
      "Rome, 9 février. Dans le cadre de la crise politique actuelle, le roi a conféré ce matin avec MM. Sonnino, Bacelli et Lacava, afin de procéder à de nouvelles consultations gouvernementales."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Une démission inexpliquée",
    "summary": "Le commandant Dutton a démissionné de la direction de l'artillerie à Washington. Ce départ précipité ferait suite à ses virulentes accusations contre le département d'État concernant la perte de plans militaires.",
    "paragraphs": [
      "Washington, 9 février. Le commandant Dutton, directeur de l'artillerie, a donné sa démission. On assure dans les milieux autorisés qu'elle lui a été imposée suite à ses accusations publiques contre le département d'État concernant le vol des plans du nouveau canon français."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Démission du chancelier du royaume de Siam",
    "summary": "L'amiral A. du Plessis-Richelieu, chancelier du royaume de Siam, a officiellement démissionné. Originaire du Sleswig-Holstein, il avait intégré la diplomatie siamoise après une carrière dans la marine danoise.",
    "paragraphs": [
      "Berlin, 9 février. L'amiral A. du Plessis-Richelieu, chancelier du royaume de Siam, vient de se démettre de ses fonctions. Né dans le Sleswig-Holstein, il avait servi au sein de la marine danoise avant de rejoindre le Siam pour y entamer sa carrière politique."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Marine",
    "title": "Recrutement des syndics des gens de mer",
    "summary": "Le ministre de la Marine a arrêté de nouvelles dispositions : la priorité au recrutement sera désormais accordée aux postulants ayant accompli un stage probant de deux mois en bureau d'inscription maritime.",
    "paragraphs": [
      "Le ministre de la Marine a arrêté que la préférence serait désormais accordée, pour le recrutement des syndics des gens de mer, aux candidats justifiant d'un stage probant de deux mois au sein d'un bureau d'inscription maritime avec des notes satisfaisantes."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Marine",
    "title": "Exercices de l'escadre de la Méditerranée",
    "summary": "Malgré des conditions météorologiques difficiles, l'escadre de la Méditerranée a mené avec succès des exercices d'attaque nocturnes. La flotte a reçu un accueil chaleureux lors de son mouillage à Ajaccio.",
    "paragraphs": [
      "Ajaccio. Malgré un temps violent, six torpilleurs et des contre-torpilleurs ont effectué durant la nuit des exercices d'attaque contre les unités de l'escadre de la Méditerranée.",
      "L'escadre, composée de cuirassés et de croiseurs, a mouillé en rade d'Ajaccio, où les équipages ont reçu un accueil enthousiaste de la part de la population."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Marine",
    "title": "Le croiseur Zweeland",
    "summary": "Le croiseur hollandais Zweeland a fait escale au Havre pour un ravitaillement en charbon. À cette occasion, le commandant a effectué les visites d'usage auprès des autorités locales.",
    "paragraphs": [
      "Le Havre. Le croiseur hollandais Zweeland est entré au port afin de faire provision de charbon. À cette occasion, le commandant du navire a rendu les visites protocolaires aux autorités civiles et militaires de la ville."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Chroniques officielles et mondaines",
    "summary": "La vie publique est marquée par les réceptions présidentielles, l'état de santé de M. Waldeck-Rousseau, les déplacements ministériels, ainsi que les préparatifs de la commémoration de la mort de Félix Faure.",
    "paragraphs": [
      "Le Président de la République a reçu en audience le grand-duc Nicolas Mitchaïlovitch.",
      "M. Waldeck-Rousseau, président du Conseil, demeure alité par la maladie.",
      "M. Jean Dupuy, ministre de l'Agriculture, s'est rendu à Lille pour présider la distribution des récompenses de la Société des agriculteurs du Nord.",
      "Le deuxième anniversaire de la mort de Félix Faure sera commémoré le 17 février par un service solennel à la Madeleine. Le transfert du cercueil est ajourné, le monument au Père-Lachaise n'étant point encore achevé.",
      "Les maires de la banlieue nord-ouest de Paris ont tenu une réunion afin de constituer un syndicat destiné à défendre les droits des communes face aux prétentions de la Compagnie des eaux.",
      "La société musicale « La Ville de Paris » a donné une brillante fête aux salons du Globe, marquée par les allocutions remarquées de M. Henri Brisson."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Faits Divers",
    "title": "Vandalisme à la fontaine de Sèvres",
    "summary": "La direction des Beaux-Arts, alarmée par les dégradations répétées subies par la fontaine en grès cérame, a résolu de la faire déplacer afin de la soustraire aux entreprises des vandales.",
    "paragraphs": [
      "La direction des Beaux-Arts s'émeut vivement des dégradations commises sur la fontaine en grès cérame. Afin de préserver ce monument, l'administration a pris la décision de le démonter pour le réinstaller dans un lieu plus sûr, à l'écart des entreprises des vandales."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Économie",
    "title": "Production houillère dans le bassin de la Loire",
    "summary": "Le secrétariat de l'industrie minérale a publié le bilan de la production de houille pour l'année 1900. Malgré une hausse globale, plusieurs compagnies contestent la précision des chiffres officiels.",
    "paragraphs": [
      "Saint-Étienne, 9 février. Le secrétariat de l'industrie minérale vient de dresser l'état de la production de houille pour l'année 1900. Malgré une plus-value générale constatée, plusieurs compagnies minières contestent l'exactitude des chiffres officiels publiés."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Social",
    "title": "Grèves en France",
    "summary": "De Montceau-les-Mines à Castres, le mouvement de grève se généralise, touchant divers corps de métiers malgré les interventions des députés et le froid intense qui frappe les régions.",
    "paragraphs": [
      "Montceau-les-Mines : La grève se poursuit dans un calme relatif, nonobstant le froid intense qui sévit dans la région. Un service de cantines populaires s'organise pour subvenir aux besoins des grévistes.",
      "Saint-Éloy : Les députés Walter et Létang sont repartis pour Paris. Les ouvriers, quant à eux, n'ont pas repris le travail.",
      "Castres : Une grève a été déclarée chez les ouvriers boulangers, ces derniers réclamant une augmentation de salaire.",
      "Rive-de-Gier : Une réunion est prévue pour organiser la grève générale des métallurgistes de la localité."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Faits Divers",
    "title": "Fatale imprudence à Moutiers",
    "summary": "Un grave accident domestique est survenu à Moutiers : une jeune servante a été grièvement brûlée en manipulant une lampe à essence, ses maîtres furent blessés en tentant de la secourir.",
    "paragraphs": [
      "Chambéry, 9 février. Une jeune servante a été grièvement brûlée après avoir commis l'imprudence de tenter de remplir sa lampe à essence sans l'éteindre au préalable. Ses maîtres, en tentant de la secourir, ont également été blessés dans l'accident."
    ]
  },
  {
    "id": 30,
    "page": 2,
    "category": "Faits Divers",
    "title": "Mutinerie à l'École des arts et métiers de Lille",
    "summary": "À la suite d'une sanction disciplinaire, une mutinerie a éclaté parmi les élèves de l'École des arts et métiers de Lille. Le calme est rétabli et une enquête ministérielle est ouverte.",
    "paragraphs": [
      "Lille, 9 février. Les élèves de l'École des arts et métiers se sont mutinés à la suite d'une punition qui leur avait été infligée. Le calme est désormais revenu dans l'établissement et une enquête a été ouverte par le ministère de l'Instruction publique."
    ]
  },
  {
    "id": 31,
    "page": 2,
    "category": "Faits Divers",
    "title": "Violents incendies",
    "summary": "À Châtillon-sur-Seine, une septuagénaire a péri dans un sinistre d'origine indéterminée. À Saint-Malo, la scierie Baurtault est dévastée par les flammes, engendrant un préjudice évalué à soixante mille francs.",
    "paragraphs": [
      "Châtillon-sur-Seine : Une vieille dame a péri dans l'incendie de son domicile au cours de la nuit. L'origine du sinistre demeure inconnue, bien que la thèse d'un acte criminel ne soit pas écartée par les autorités.",
      "Saint-Malo : La scierie de M. Baurtault a été la proie des flammes. Le sinistre a provoqué des dommages matériels considérables, estimés à soixante mille francs."
    ]
  },
  {
    "id": 32,
    "page": 2,
    "category": "Social",
    "title": "Bulletin du travail",
    "summary": "Actualités sociales : débats sur la loi des accidents du travail, agitation à la Bourse du travail, menaces de grève chez les tailleurs et résolution du conflit à la fabrique de lampes d'Ivry.",
    "paragraphs": [
      "Loi sur les accidents du travail : Une proposition de loi est actuellement discutée pour autoriser le recours devant la Cour de cassation contre les décisions rendues par les juges de paix en la matière.",
      "Grèves : Une importante réunion s'est tenue à la Bourse du travail pour protester contre le projet gouvernemental visant à réglementer les grèves par l'instauration d'un arbitrage obligatoire.",
      "Grève des tailleurs pour dames : Le comité de grève multiplie les collectes de fonds et menace de déclencher une grève générale si les revendications concernant la journée de huit heures ne sont pas pleinement satisfaites.",
      "Grève d'Ivry : La cessation de travail des ouvriers de la fabrique de lampes à incandescence est désormais considérée comme terminée."
    ]
  },
  {
    "id": 33,
    "page": 2,
    "category": "Justice",
    "title": "Pillage d'église et perte de la Caravane",
    "summary": "À Toulouse, une lourde peine de vingt ans de travaux forcés est prononcée pour le pillage de Saint-Sernin. À Toulon, le lieutenant de vaisseau Diacre est acquitté dans l'affaire du transport 'La Caravane'.",
    "paragraphs": [
      "Toulouse : Un individu a été condamné par la justice à vingt ans de travaux forcés pour le pillage sacrilège de l'église Saint-Sernin.",
      "Toulon : Le premier conseil de guerre maritime a prononcé l'acquittement à l'unanimité en faveur du lieutenant de vaisseau Diacre, qui commandait le transport 'La Caravane' lors de son abordage tragique par un navire japonais."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le drame des plâtrières de Cormeilles-en-Parisis",
    "summary": "Condamnation des nommés Poulain et Massin à un an d'emprisonnement pour avoir jeté leur victime, M. Parent, sur un four à chaux, après qu'il eut été secouru in extremis par des vagabonds.",
    "paragraphs": [
      "Ces deux malfaiteurs avaient, dans un acte de cruauté inouïe, jeté leur victime, alors évanouie, sur un four à chaux en pleine combustion.",
      "M. Parent fut horriblement brûlé sur plusieurs parties du corps et ne doit son salut qu'à l'intervention fortuite de deux vagabonds cherchant un refuge en cet endroit.",
      "Le tribunal a prononcé une peine d'un an de prison à l'encontre de Poulain et de Massin."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Instruction de l'affaire Léon Damont",
    "summary": "M. le juge Lemercier clôt l'instruction concernant le meurtre de Maria Reusey. L'inculpé, le cuisinier Léon Damont, sera défendu par M. Henri Hobe devant la cour d'assises.",
    "paragraphs": [
      "M. Lemercier, juge d'instruction, a terminé l'examen de l'affaire concernant le cuisinier Léon Damont.",
      "Il est reproché à ce dernier d'avoir, le 10 novembre dernier, étranglé son amie, Maria Reusey, fille de salle, puis d'avoir mis le feu au logement qu'elle occupait, rue Zacharie, dans le dessein manifeste de dissimuler son crime.",
      "Devant la cour d'assises, Damont sera défendu par M. Henri Hobe."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Condamnation du lieutenant Huger",
    "summary": "Le conseil de guerre de Metz a rendu son verdict : le lieutenant Huger est condamné à douze ans de réclusion et à la destitution de l'armée pour le meurtre du capitaine Adams.",
    "paragraphs": [
      "Le conseil de guerre de Metz a condamné hier le lieutenant Huger, pour avoir tué le capitaine Adams, à douze ans de réclusion et à la destitution de son grade dans l'armée."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Condamnation de Paul Nebo",
    "summary": "Paul Nebo, dit « Charles le bicycliste », a été condamné à sept ans de travaux forcés pour avoir, avec sa complice Jeanne Giriot, drogué et dépouillé une tenancière à l'aide de chloroforme.",
    "paragraphs": [
      "Un individu âgé de vingt-sept ans, nommé Paul Nebo, surnommé « Charles le bicycliste », a été condamné à sept ans de travaux forcés pour avoir, de complicité avec une nommée Jeanne Giriot, volé plusieurs centaines de livres sterling et des bijoux chez une femme se faisant appeler Mme de Ligty, qui tenait une maison de tolérance.",
      "Paul Nebo et sa compagne avaient administré du chloroforme à la femme et à sa domestique."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un cambrioleur blessé à Clamart",
    "summary": "Le malfaiteur Pierre Mériel a été grièvement blessé par l'explosion d'un système d'alarme alors qu'il tentait de cambrioler la propriété de M. Fagard à Clamart. Ses complices sont en fuite.",
    "paragraphs": [
      "Tout un quartier de Clamart a été mis en émoi la nuit dernière par une forte détonation suivie de cris plaintifs provenant d'une propriété située sur la voie des Groux.",
      "Les voisins et les gendarmes ont trouvé, étendu sur le sol, un individu nommé Pierre Mériel, âgé de dix-neuf ans, portant de graves blessures. Il a été transporté à l'hôpital Sainte-Émilie.",
      "Une enquête menée par M. Hocquet, commissaire de police de Vanves, a permis d'établir qu'il s'agissait d'un cambrioleur pris au piège par des avertisseurs ayant fait explosion après qu'il eut brisé les volets de la propriété de M. Fagard.",
      "Les complices ont pris la fuite, mais Mériel a été consigné à l'hôpital à la disposition de la police. Son état est grave."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Paris",
    "title": "Arrestation d'un ancien magistrat",
    "summary": "Sur mandat du parquet de Meaux, la Sûreté a procédé à l'arrestation de M. Charles Dorré, ancien magistrat reconverti en homme d'affaires, suspecté dans une affaire instruite à Meaux.",
    "paragraphs": [
      "Sur mandat du parquet de Meaux, le service de la Sûreté a procédé hier matin à l'arrestation d'un ancien magistrat, M. Charles Dorré, âgé de cinquante-trois ans, qui, depuis quelques années, tenait un cabinet d'affaires au 14, rue Darcet.",
      "M. Dorré va être transféré à Meaux."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Paris",
    "title": "Décès suspect",
    "summary": "Mme Adèle Baumann est décédée subitement dans la nuit. En raison du caractère suspect de cette mort rapide, le magistrat a ordonné le transport du corps à la Morgue aux fins d'autopsie.",
    "paragraphs": [
      "Dans le courant de la nuit dernière, une jeune femme, Mme Adèle Baumann, demeurant 36 bis rue des Amandiers, a succombé après quelques heures à peine de maladie.",
      "Le médecin et le magistrat ayant formulé des réserves au sujet de ce décès, le corps a été transporté à la Morgue."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Paris",
    "title": "Un escroc et un apprenti emballeur",
    "summary": "Un individu a tenté d'utiliser un apprenti emballeur pour faire porter une lettre suspecte à un sergent-major. Démasqué par le destinataire, l'escroc a pris la fuite. Une plainte a été déposée auprès des autorités.",
    "paragraphs": [
      "Un apprenti emballeur traversait hier la place de la République quand un individu l'aborda et lui proposa cinquante centimes pour remettre un paquet et une lettre au sergent-major P., à la caserne du Château-d'Eau, en promettant une récompense supplémentaire à la livraison.",
      "Le sergent-major, trouvant cette démarche singulière, fit vérifier aussitôt l'origine de la missive auprès du lieutenant de sa compagnie, qui déclara n'avoir nullement rédigé ce courrier.",
      "Les militaires et la police se rendirent sans délai à l'adresse indiquée, rue de l'Entrepôt, mais l'individu avait déjà pris la fuite. Une plainte a été déposée contre cet inconnu pour tentative d'escroquerie."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue",
    "summary": "Une série d'incidents secoue la banlieue : cambriolages à Levallois et Vaucresson, un grave incendie à Saint-Denis et la dissolution du conseil municipal de Choisy-le-Roi.",
    "paragraphs": [
      "Levallois-Perret : Des cambrioleurs ont dévalisé un appartement rue Fouquet. L'un des malfaiteurs, le nommé Louis Motlot, a été arrêté par les agents de la force publique.",
      "Saint-Denis : Un atelier de vernissage a été ravagé par un incendie consécutif à l'explosion de bonbonnes d'alcool. L'ouvrier Joseph Jamay, atteint par les flammes, a été grièvement brûlé.",
      "Charenton : Le commissaire Cuvillier a procédé au démantèlement d'une bande de rôdeurs qui s'étaient installés dans les carrières souterraines aux abords de Créteil.",
      "Choisy-le-Roi : Le conseil municipal ayant persisté dans son refus de constituer une municipalité régulière, le préfet a sollicité du ministre de l'Intérieur la dissolution formelle de ladite assemblée.",
      "Vaucresson : Une villa, située allée du Bulard, a fait l'objet d'un cambriolage durant l'absence de ses occupants.",
      "Saint-Germain-en-Laye : Le journalier Guillaume Lorinquer a été découvert pendu à la porte d'entrée de son domicile.",
      "Meaux : Un mandat d'amener a été délivré contre le comptable Carrier, qui a disparu en emportant les clefs du coffre-fort de son patron ainsi qu'une somme de 2 000 francs."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Départements",
    "title": "Actualités de Chartres et Sens",
    "summary": "Les agriculteurs de Chartres manifestent leur soutien au projet de loi sur les bons d'importation, tandis qu'une enquête est ouverte à la suite d'un accident de tir survenu dans la caserne Géneau à Sens.",
    "paragraphs": [
      "Chartres : Une importante réunion agricole s'est tenue dans la ville afin d'apporter un soutien massif au projet de loi portant sur les bons d'importation, jugé vital pour les producteurs locaux.",
      "Sens : Un regrettable accident de tir s'est produit à la caserne Géneau. Un fusil, resté chargé par mégarde, a fait partir un projectile en direction de la cantine. Une enquête a été ouverte pour établir les responsabilités de cet incident."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Sports",
    "title": "Match de Rugby et Boxe en Amérique",
    "summary": "Le Racing-Club de France affronte aujourd'hui les Harlequins en rugby, tandis qu'outre-Atlantique, les autorités de Cincinnati menacent d'interdire le championnat de boxe Jeffries-Ruhlin.",
    "paragraphs": [
      "Le Racing-Club de France dispute cet après-midi une rencontre de football-rugby contre l'équipe anglaise des Harlequins, formation réputée pour sa technique et sa vigueur sur le terrain.",
      "En Amérique, les autorités civiles de Cincinnati menacent formellement d'interdire la rencontre de boxe devant opposer Jeffries à Ruhlin pour l'obtention du titre de champion du monde."
    ]
  },
  {
    "id": 45,
    "page": 3,
    "category": "Chronique Aérostatique",
    "title": "Le sort du Parc aérostatique de Vincennes",
    "summary": "L'ordre de démolition du hangar du parc aérostatique de Vincennes avant le 15 février suscite une vive inquiétude alors qu'une commission examine le maintien des installations de l'Exposition universelle.",
    "paragraphs": [
      "Alors qu'une commission spéciale étudie encore l'opportunité de maintenir le parc aérostatique de Vincennes, édifié pour les besoins de l'Exposition universelle, l'administration a ordonné la démolition du hangar avant le 15 février prochain. Cette décision est jugée prématurée et fort dommageable pour les intérêts de la science aérostatique."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Faits Divers",
    "title": "Avis de recherche - Famille Crespel",
    "summary": "Me Dufaist, notaire à Nantes, recherche activement les héritières de la famille Crespel, nées à Dinan au début du XIXe siècle, afin de liquider une succession.",
    "paragraphs": [
      "Maître Dufaist, notaire à Nantes, recherche les héritières de dame Crespel, née à Dinan le 7 avril 1808, et notamment Julie Crespel, née à Dinan le 20 septembre 1840, ainsi que Marie Crespel, née à Dinan le 1er mai 1842."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Santé",
    "title": "Traitement du Docteur Franck contre la constipation",
    "summary": "Le remède du Docteur Franck est présenté comme une solution efficace et économique pour soulager la constipation chronique, les migraines associées et les embarras gastriques.",
    "paragraphs": [
      "Concernant la constipation et ses conséquences habituelles, telles que la migraine ou l'embarras gastrique, le remède le plus économique demeure celui préconisé par le Docteur Franck."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Social",
    "title": "Loterie des Enfants Tuberculeux",
    "summary": "La Loterie des Enfants Tuberculeux clôture ses ventes pour le tirage du 15 février 1901. 1 253 lots en argent seront attribués salle des Ingénieurs Civils, à Paris.",
    "paragraphs": [
      "Quelques billets seulement restent encore à placer. Les demandes seront servies dans l'ordre d'arrivée ; les fonds seront retournés dans la huitaine suivant le tirage pour celles qui nous parviendraient alors qu'il n'y aurait plus de billets disponibles.",
      "La liste officielle des numéros gagnants sera mise en vente chez les débitants de tabac et les libraires à partir du 11 courant.",
      "Le grand tirage aura lieu le 15 février 1901 à huit heures du matin, salle des Ingénieurs Civils, 19, rue Blanche, à Paris. Il comporte 1 253 lots, tous payables en argent."
    ]
  }
];
