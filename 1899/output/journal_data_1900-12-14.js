// Date: 1900-12-14
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-12-14 (Version Restaurée, 44 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "L'expansion russe",
    "summary": "Analyse de la politique extérieure russe, définie par une expansion pacifique et industrielle, marquée par un développement ferroviaire colossal et l'essor des capitaux étrangers en Asie et en Russie.",
    "paragraphs": [
      "La dernière crise d'Extrême-Orient a mis en pleine lumière la patience et la modération qui sont au fondement de la politique russe. Il est aujourd'hui avéré qu'elle est l'État pacifique par excellence.",
      "Après avoir conquis le Turkestan, la Russie se voua à une tâche méthodique de colonisation. Grâce à ses chemins de fer, elle a étendu son influence en Asie, s'installant à Port-Arthur et étendant son protectorat sur la Mandchourie.",
      "La véritable expansion de la Russie s'est opérée à l'intérieur de ses limites historiques, accompagnée d'un essor démographique et industriel sans égal. La Russie est devenue un État moderne, passant de 74 millions de sujets en 1858 à près du double aujourd'hui.",
      "La Russie a développé ses grandes villes et son industrie manufacturière de façon spectaculaire. Les capitaux français et belges ont favorisé l'essor de la métallurgie dans le Sud, tandis que l'industrie du naphte à Bakou est devenue une source de richesse majeure pour l'Empire.",
      "Le gouvernement russe a largement développé son réseau de voies ferrées. Avec l'achèvement prochain du Transsibérien, on pourra rallier Paris à Pékin en une quinzaine de jours. Cette expansion territoriale et technique mérite d'être saluée comme utile et bienfaisante pour le progrès des échanges."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Marie-Madeleine - Grand Roman Inédit",
    "summary": "La baronne d'Orvilliers presse sa nièce, Mlle de Rambert, de dissimuler son passé douloureux à M. de Prayssac, son futur époux, alors que les préparatifs de la noce s'accélèrent à l'hôtel de Rambert.",
    "paragraphs": [
      "La discussion entre la baronne d'Orvilliers et ses amies sur la fortune des Rambert et les malheurs du beau Maurice fut interrompue par le tintement de la sonnette. Les conversations roulaient sur les récents scandales mondains et les détails du futur mariage.",
      "La baronne pressa sa nièce, Mademoiselle de Rambert, de cacher son passé et de ne rien révéler à son futur époux, M. de Prayssac. Louise, bien que tourmentée par des scrupules, finit par céder à la volonté autoritaire de sa tante et promit de garder le silence sur l'attentat dont elle fut jadis la victime.",
      "Le futur époux, M. de Prayssac, se présenta à l'hôtel de Rambert pour régler les derniers préparatifs du contrat de mariage. Louise, malgré le malaise profond qui étreignait son cœur, accepta son sort, scellant ainsi un secret qui allait peser lourdement sur son avenir."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "À Madagascar",
    "summary": "Le général Galliéni poursuit sa tournée de pacification à Madagascar avec succès, tandis qu'un tragique accident météorologique endeuille la province d'Ambolimanga.",
    "paragraphs": [
      "Le courrier de Madagascar est arrivé à Marseille. Le général Galliéni effectue actuellement une tournée dans les provinces. Les soumissions des chefs rebelles se multiplient, notamment dans le secteur du Manambolo, marquant une progression notable de notre autorité.",
      "Un tragique accident dû à la foudre a endeuillé la région d'Ambolimanga, faisant quatre victimes lors d'une fête de naissance qui se tenait dans une demeure isolée."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "À Djibouti",
    "summary": "La mission Lagarde progresse vers Addis-Abeba afin de délimiter les frontières. Malgré des succès diplomatiques, la sécurité des caravanes reste menacée par les raids des Issaa.",
    "paragraphs": [
      "La mission éthiopienne de M. Lagarde se dirige vers Addis-Abeba. La question de la frontière franco-éthiopienne est désormais réglée et l'empereur manifeste un vif désir de voir l'achèvement rapide du chemin de fer.",
      "La sécurité des caravanes demeure cependant préoccupante. Une attaque récente par les Issaa a causé la perte de deux cent cinquante chameaux, rendant nécessaire le maintien d'une forte escorte armée pour assurer le transit à travers cette région hostile."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Social / Armée",
    "title": "Les officiers de recrutement",
    "summary": "Réforme du service de recrutement : le ministre de la Guerre instaure une commission spéciale pour la sélection des officiers et améliore la gestion des bureaux de recrutement.",
    "paragraphs": [
      "Le ministre de la Guerre a pris la décision de réformer le service du recrutement, secteur jusque-là quelque peu délaissé par l'administration centrale. Dorénavant, les officiers affectés à ces tâches seront sélectionnés par une commission spéciale.",
      "Les capitaines adjoints ne seront plus réintégrés systématiquement dans la troupe lors de leur promotion, ce qui permettra de conserver des officiers expérimentés aux postes de recrutement. Des mesures sont également prises pour valoriser les bureaux importants, tels que ceux de Lille et de Versailles."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "Le Président Krüger et la politique allemande",
    "summary": "Le président Krüger est pressenti pour être reçu par le tsar grâce au soutien du grand-duc Vladimir, tandis que la presse allemande fustige l'hypocrisie de la convention anglo-allemande concernant le Transvaal.",
    "paragraphs": [
      "Le correspondant du Vaderland indique que M. Krüger sera reçu par le tsar, grâce à l'influence de membres de l'Église russe et du grand-duc Vladimir.",
      "La Gazette de Francfort souligne la contradiction flagrante entre les déclarations passées de l'Allemagne sur l'indépendance du Transvaal et la situation actuelle, qualifiant la convention anglo-allemande de simple encre sur du papier."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "La guerre au Transvaal",
    "summary": "Le chef boër Dewet échappe aux colonnes britanniques en franchissant la Caledon, alors que des insurgés boërs paralysent les communications ferroviaires et télégraphiques dans la région d'Alkmaar.",
    "paragraphs": [
      "Dewet et ses troupes ont réussi à échapper aux colonnes anglaises en franchissant la rivière Caledon. Au War Office, on considère Dewet comme hors d'atteinte pour le moment.",
      "De nouveaux rapports signalent que trois cents Boërs occupent le chemin de fer entre Alkmaar et Nelspruit, ayant détruit les lignes télégraphiques et les voies ferrées."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident de pont à Mende",
    "summary": "Un tragique accident est survenu lors du lancement du tablier d'un pont métallique sur la Mimente, à Cassagnas, causant la mort d'un ouvrier et blessant grièvement deux de ses collègues.",
    "paragraphs": [
      "Le tablier d'un pont métallique en construction sur la Mimente, dans la commune de Cassagnas, s'est effondré au moment du lancement, tuant un ouvrier et en blessant deux autres."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Mystérieuse disparition au Pré-Saint-Gervais",
    "summary": "Une affaire de disparition inquiète la population du Pré-Saint-Gervais, où les soupçons se portent sur l'occupant d'une villa. La police a diligenté une enquête pour vérifier ces graves allégations.",
    "paragraphs": [
      "Une affaire de disparition d'un ancien propriétaire de la villa du Pré fait grand bruit. Des accusations portées par une habitante contre le sieur B., actuel occupant, suggèrent un crime enfoui dans le jardin.",
      "Le commissaire de police de Pantin a ouvert une enquête suite aux témoignages recueillis auprès des voisins. Le sieur B. nie les faits et qualifie ces propos de divagations."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident de chemin de fer à Agen",
    "summary": "Une collision entre deux convois de marchandises en gare de Port-Sainte-Marie a provoqué d'importantes perturbations du trafic ferroviaire et causé des blessures à un employé de la compagnie.",
    "paragraphs": [
      "Deux trains de marchandises sont entrés en collision en gare de Port-Sainte-Marie. Un chef de train est blessé et le trafic a subi des retards importants."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Faits Divers",
    "title": "Attaque d'une voiture de livreur",
    "summary": "À Cormeilles, deux livreurs parisiens ont été assaillis par cinq individus armés de revolvers. Malgré la violence de l'agression et les menaces, les victimes sont parvenues à échapper à leurs agresseurs.",
    "paragraphs": [
      "À Cormeilles, deux livreurs parisiens ont été attaqués par une bande de cinq individus armés de casse-têtes et de revolvers. Les agresseurs ont tenté de s'emparer de la voiture, mais les livreurs ont réussi à s'échapper à temps."
    ]
  },
  {
    "id": 12,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'affaire de l'homme coupé en morceaux",
    "summary": "L'enquête sur les restes humains découverts progresse. M. Cochefert a saisi de nouveaux indices, incluant des outils de découpe, tandis qu'une expertise médico-légale doit déterminer les causes du décès.",
    "paragraphs": [
      "L'enquête sur les restes humains découverts se poursuit avec méthode. De nouveaux objets, des vêtements et des outils de découpe, ont été retrouvés et placés sous scellés par M. Cochefert.",
      "Un examen minutieux du cadavre est prévu par le médecin légiste afin de déterminer avec précision la cause exacte du décès."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits divers",
    "title": "La mystérieuse victime de la rue des Pyrénées",
    "summary": "Une macabre découverte rue des Pyrénées relance les investigations : le signalement d'un corps retrouvé correspond à celui d'Henri Blazy, faisant soupçonner les malfaiteurs connus sous le nom de 'Jésus'.",
    "paragraphs": [
      "Il y a cinq ans, le nommé Jules Bestaud était trouvé étranglé à son domicile. La gendarmerie avait alors ouvert une enquête.",
      "Toutefois, une découverte récente rue des Pyrénées fait état d'un jeune homme dont les restes ont été mis au jour. Le signalement d'Henri Blazy correspond de manière frappante à celui du malheureux retrouvé.",
      "Si cette nouvelle piste se confirme, il se pourrait que Blazy ait été assassiné par les deux malfaiteurs connus dans le milieu sous les sobriquets de 'Jésus'."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits divers",
    "title": "Une fausse piste concernant M. Friche",
    "summary": "M. Friche, habitant de Bobigny, craignait que son fils Camille, disparu, ne fût la victime d'un crime. L'angoisse du père a pris fin hier, le jeune homme ayant été retrouvé sain et sauf par la sûreté.",
    "paragraphs": [
      "Nous avons relaté ces jours derniers les angoisses d'un habitant de Bobigny, M. Friche, qui, trompé par une ressemblance, croyait que la victime de l'assassinat n'était autre que son fils Camille, âgé de dix-neuf ans, ouvrier artificier disparu depuis longtemps.",
      "Le jeune homme a été retrouvé hier par les agents de la sûreté dans le domicile qu'il occupait non loin de l'atelier où il travaillait."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Administration",
    "title": "La Légion d'honneur au ministère de l'Agriculture",
    "summary": "Le Journal officiel publiera les prochaines nominations dans la Légion d'honneur sur proposition de M. Jean Dupuy, ministre de l'Agriculture, distinguant de nombreuses personnalités.",
    "paragraphs": [
      "Le Journal officiel publiera prochainement les promotions ou nominations dans la Légion d'honneur sur proposition de M. Jean Dupuy, ministre de l'Agriculture.",
      "AU GRADE DE COMMANDEUR : MM. Grandeau, Philippe, Boucard.",
      "AU GRADE D'OFFICIER : MM. André, Blac, Bastide, Egrot, Rendoing, Thénard, La Ferté.",
      "AU GRADE DE CHEVALIER : MM. Bonlieu, Bordel, Boucher, Bouchet, Chauzit, Colombier, Delacour, Dellian, Garin, Henneguy, Kayser, Laurier, Lavoine, Le Conte, Leprince, Loti, Mabille, Potié, Radot, Rezé, Robichaud, Schlesing, Viollet."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "International",
    "title": "Les troubles de Chine",
    "summary": "À Pékin, un incendie menace le quartier général tandis que des affiches séditieuses surgissent à Hong-Kong. L'hiver suspend les manœuvres militaires, mais l'instabilité demeure une préoccupation diplomatique majeure.",
    "paragraphs": [
      "Les télégrammes relatent un incendie au voisinage du quartier général à Pékin et l'apparition d'affiches séditieuses à Hong-Kong.",
      "L'hiver interrompt les opérations militaires, mais on s'attend à de nouveaux désordres si la diplomatie n'achève pas promptement son œuvre."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "International",
    "title": "L'Accord Anglo-Allemand",
    "summary": "La correspondance officielle sur l'accord anglo-allemand concernant la Chine a été publiée. Le Japon, après avoir reçu les garanties nécessaires, a officiellement notifié son adhésion à cet accord.",
    "paragraphs": [
      "La correspondance échangée entre l'Angleterre et les diverses puissances au sujet de l'accord anglo-allemand concernant la Chine a été publiée.",
      "Le Japon a déclaré adhérer à cet accord après avoir reçu l'assurance de l'Angleterre et de l'Allemagne que son adhésion le mettait exactement dans la même situation qu'un État signataire."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits divers",
    "title": "Incendie et trésor à Pékin",
    "summary": "Une expédition de cent cinquante-neuf hommes est partie à vingt milles de Pékin sur la piste d'un trésor. Parallèlement, des placards incitant à la révolte ont été découverts dans les rues de Hong-Kong.",
    "paragraphs": [
      "À la recherche d'un trésor : cent cinquante-neuf hommes sont partis à vingt milles de Pékin, suite à des avis faisant état de l'existence d'un trésor important composé d'or et d'objets de valeur.",
      "Placards séditieux : Des placards ont été affichés à Hong-Kong, excitant la population à la révolte contre les autorités."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "International",
    "title": "Le retour de M. de Rosthorn",
    "summary": "M. Alfred de Rosthorn, secrétaire à la légation austro-hongroise, et son épouse sont arrivés à Trieste après avoir fait preuve d'un courage héroïque durant le siège des légations à Pékin.",
    "paragraphs": [
      "M. Alfred de Rosthorn, secrétaire à la légation austro-hongroise de Pékin, et Mme de Rosthorn viennent de débarquer à Trieste, après avoir montré un courage héroïque lors du siège des légations.",
      "Ils seront prochainement reçus en audience solennelle par l'empereur François-Joseph."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "International",
    "title": "Le Service d'Etat-Major en Chine",
    "summary": "Installé à Tien-Tsin, le grand état-major coordonne les opérations. La mission française, dirigée par le colonel Marchand, a su organiser son intendance grâce aux vivres provenant de Shanghai et du Japon.",
    "paragraphs": [
      "Le grand état-major a fixé son quartier général à Tien-Tsin. La commission internationale des officiers a joué un rôle insignifiant, les relations entre les troupes restant des plus cordiales.",
      "Le colonel Marchand, chef de la mission française, est employé dans les divers services. L'intendance, difficile au début, est désormais organisée grâce aux vivres fournis par Shanghai et le Japon."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits divers",
    "title": "Accident dans un cirque à Mons",
    "summary": "Au cours d'une représentation du cirque Bektow à Mons, un ours s'est échappé en pleine piste, blessant grièvement une artiste avant d'être maîtrisé et reconduit dans sa cage.",
    "paragraphs": [
      "Les dompteurs du cirque Bektow présentaient six ours au public, hier, lorsqu'un fauve, par un mouvement brusque, s'échappa de son enceinte, renversa brutalement une artiste allemande et la mordit cruellement.",
      "La malheureuse victime a été immédiatement transportée à l'hôpital de la ville pour y recevoir des soins urgents, tandis que les assistants parvenaient, non sans peine, à ramener l'animal dans sa cage."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Culture",
    "title": "Les jouets nouveaux",
    "summary": "À l'approche des fêtes, la production de jouets parisiens s'inspire du contexte militaire et de l'Exposition universelle, confirmant une fois de plus la suprématie esthétique des automates du Marais.",
    "paragraphs": [
      "La fabrication des jouets cette année est tout entière marquée par les événements politiques et militaires qui passionnent l'opinion. Le « Vaillant Boër » rencontre un succès considérable, de même que les jeux de construction inspirés des futurs pavillons de l'Exposition universelle.",
      "Les fabricants parisiens, malgré la concurrence et l'imitation étrangère, restent sans rivaux pour l'élégance et la finesse de leurs créations, tout particulièrement en ce qui concerne les automates du Marais, véritables prouesses de mécanique miniature."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Social",
    "title": "Les grèves des cochers de fiacre",
    "summary": "La chambre syndicale des cochers convoque ses adhérents à la Bourse du travail pour contester le licenciement de quatre cents employés, une mesure que la Compagnie générale justifie par des motifs disciplinaires.",
    "paragraphs": [
      "La chambre syndicale des cochers de Paris et de la Seine convoque ses adhérents en assemblée générale à la Bourse du travail. Le conflit s'envenime à la suite du licenciement brutal de quatre cents cochers, intervenu au lendemain des récentes grèves.",
      "La direction de la Compagnie générale invoque, pour sa défense, des fautes professionnelles réitérées constatées dans les dossiers personnels des employés. De leur côté, les cochers, ulcérés par cette décision, envisagent de porter l'affaire devant les tribunaux compétents."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Social",
    "title": "La grève de Saint-Etienne",
    "summary": "M. Dejeante, député de la Seine, s'est rendu à Saint-Étienne pour manifester son soutien aux ouvriers en grève de la Compagnie électrique, dans un climat social apaisé par la présence des forces de l'ordre.",
    "paragraphs": [
      "M. Dejeante, député de la Seine, est venu apporter son soutien actif aux manifestants à Saint-Étienne, engagés dans un bras de fer avec la Compagnie électrique. Le calme a été scrupuleusement maintenu sur les lieux par les forces de l'ordre, évitant ainsi tout débordement fâcheux."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Activités présidentielles et parlementaires",
    "summary": "Le Président de la République a séjourné à Rambouillet. Parallèlement, le Sénat et la Chambre des députés poursuivent leurs travaux législatifs, focalisés sur le budget et les débats relatifs à l'amnistie.",
    "paragraphs": [
      "Le Président de la République a passé la journée au domaine de Rambouillet pour une partie de chasse.",
      "Au Sénat : la séance a été consacrée au vote sur le nouveau régime des boissons ainsi qu'à la question des récompenses maritimes.",
      "À la Chambre des députés : les débats se sont poursuivis avec vigueur concernant le budget de la Justice et le projet d'amnistie, qui soulève de nombreuses discussions parmi les élus."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Chronique Politique",
    "title": "Débats sur le projet d'amnistie et l'affaire Dreyfus",
    "summary": "À la Chambre, vifs débats sur le projet d'amnistie lié à l'affaire Dreyfus. Malgré les oppositions, le gouvernement Waldeck-Rousseau obtient le vote du premier article du projet par 306 voix contre 187.",
    "paragraphs": [
      "Dans l'intérêt du parti républicain, visé par l'affaire Dreyfus, et dans l'intérêt du pays lui-même, il ne faut repousser aucun des moyens qui permettent d'arriver à la vérité absolue. Il ne faut pas voter une amnistie qui augmentera et perpétuera les troubles de la conscience publique.",
      "M. Pourquery de Boisserin, rapporteur, défend le projet de loi qui a pour but et qui aura pour effet de mettre un terme à des querelles et à des procès qui font revivre à chaque mandat une affaire actuellement terminée.",
      "M. Breton (Cher) combat le projet. Il estime qu'il aura pour effet de couvrir ceux qui sont seuls responsables de l'affaire Dreyfus et des désordres qu'elle a causés. Il vise notamment le colonel Henry et le général Gonse.",
      "M. Brisson proteste : « Quand j'ai su que le colonel Henry avait avoué le faux qu'il avait commis, ce jour-là, mais ce jour-là seulement, j'ai résolu de demander la révision. »",
      "M. Waldeck-Rousseau se demande si ce moment est venu. Il n'hésite pas à répondre affirmativement : cette amnistie est la conséquence naturelle du vote par lequel la Chambre, par 311 voix, a déclaré qu'il ne fallait pas faire renaître l'affaire Dreyfus de quelque cause que ce soit.",
      "Après cette déclaration, M. le Président met aux voix l'article 1er du projet du gouvernement qui est adopté par 306 voix contre 187."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Social",
    "title": "Conflit au sein des Prévoyants de l'Avenir",
    "summary": "Réunis rue de Rivoli, les membres des Prévoyants de l'Avenir ont débattu avec véhémence des comptes du comité central, exprimant leur volonté de transformer la société en une caisse de retraite.",
    "paragraphs": [
      "Le sort des Prévoyants de l'Avenir préoccupe le comité, qui étudie avec ardeur la campagne qu'il mène contre cette société de secours mutuels.",
      "Une réunion a été tenue hier soir au 31, rue de Rivoli, sous la présidence de M. Bouteville, assisté de M. Voitrat. Un débat très mouvementé s'est engagé sur la critique des comptes du comité central.",
      "En fin de séance, les assistants ont adopté un ordre du jour déclarant que les Prévoyants de l'Avenir, après avoir discuté contradictoirement la « fausse mutualité », ont la conviction de vouloir transformer la société en société de retraite."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Horrible drame à l'Estelle",
    "summary": "Un mystérieux et sanglant drame a frappé le couple Cazassus à l'Estelle. Les époux, septuagénaires, ont été découverts blessés dans leur cuisine, et la justice suspecte l'intervention d'un tiers.",
    "paragraphs": [
      "Un drame épouvantable s'est déroulé à l'Estelle, près de Saint-Cloud, dans des circonstances que la justice n'a pu encore complètement éclaircir.",
      "La dame Bertrand Morier, âgée de soixante-sept ans, et son mari, Jean-Paul Cazassus, âgé de soixante-treize ans, cultivateur, ont été trouvés aujourd'hui ensanglantés et blessés dans leur cuisine.",
      "Aucun témoin n'a assisté à la scène sanglante. D'après les premiers renseignements recueillis, les époux Cazassus avaient de fréquentes querelles. La justice estime qu'il y a eu l'intervention d'un tiers."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mystérieux assassinat à Nice",
    "summary": "L'arrestation à Viareggio, en Italie, du meurtrier d'un ouvrier tué à Nice permet de faire la lumière sur une affaire criminelle. Plusieurs complices ayant facilité sa fuite sont actuellement interrogés.",
    "paragraphs": [
      "On apprend aujourd'hui l'arrestation en Italie, à Viareggio, du meurtrier d'un ouvrier tué en mai 1900 à Nice.",
      "L'individu a déclaré avoir tué son homme. L'enquête a établi que, sitôt le crime accompli, le meurtrier s'était caché chez un nommé Valdeni, marbrier, avant de s'enfuir en Italie.",
      "Plusieurs complices ayant favorisé la fuite ont été interrogés par le commissaire de police."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'enfance criminelle à Boulogne-sur-Mer",
    "summary": "Le jeune Deroliez, accusé du meurtre du petit Dumez, est passé aux aveux lors d'une reconstitution. L'infirme, qui niait initialement, reconnaît désormais la préméditation de son crime.",
    "paragraphs": [
      "Le jeune Deroliez, auteur du meurtre du petit Dumez, a été extrait hier de la maison d'arrêt pour une reconstitution de la scène du crime.",
      "Deroliez, qui est infirme, avait primitivement déclaré que son camarade était tombé à l'eau, mais il a finalement avoué que son crime avait été prémédité."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "La chasse aux malfaiteurs à Paris",
    "summary": "Face à la recrudescence des crimes à Paris, M. Lépine instaure une brigade spéciale de 80 agents, dont 40 inspecteurs en bourgeois, afin de sécuriser les arrondissements du centre de la capitale.",
    "paragraphs": [
      "En raison de la recrudescence des crimes à Paris, M. Lépine a décidé de renforcer la surveillance avec une brigade nouvelle de 80 hommes, dont 40 gardiens en bourgeois, chargés de parcourir les arrondissements du centre."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentatives de suicide et faits divers parisiens",
    "summary": "La capitale a été le théâtre d'incidents variés : le sauvetage d'une femme au bassin de la Villette, un incendie rue Bouret et une opération de police contre le vagabondage sur les quais.",
    "paragraphs": [
      "Une jeune femme nommée Eugénie Mapeller, domiciliée rue d'Allemagne, a tenté de se suicider hier soir en se jetant dans le bassin de la Villette. Elle a été sauvée par deux passants.",
      "Un incendie s'est déclaré hier soir dans le logement des époux Durand, rue Bouret. Les enfants ont été secourus à temps par les pompiers.",
      "Une battue générale a été organisée hier soir sur les berges de la Seine pour nettoyer les repaires des vagabonds. Une vingtaine d'individus ont été arrêtés."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Sports",
    "title": "Le championnat de lutte à Paris",
    "summary": "La soirée de lutte a été marquée par une rapidité déconcertante : Omer de Bouillon et Constant le Boucher ont terrassé leurs adversaires en moins d'une minute sous les acclamations du public.",
    "paragraphs": [
      "Les deux luttes de la poule finale portées au programme de la soirée d'hier ont été extrêmement courtes. Omer de Bouillon a amené Weber sur les omoplates en 44 secondes.",
      "Constant le Boucher a également battu Van den Berg en 40 secondes."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Tribunaux",
    "title": "Assassinat sous un tunnel",
    "summary": "La cour d'assises de la Loire a condamné André Bonnet aux travaux forcés à perpétuité pour le meurtre sordide du jeune Durantet, abattu pour une dette de 27 francs dans le tunnel de l'Hôpital-sur-Rhins.",
    "paragraphs": [
      "La cour d'assises de la Loire, siégeant à Montbrison, a condamné André Bonnet aux travaux forcés à perpétuité pour le meurtre d'un jeune homme de dix-neuf ans, nommé Durantet, commis dans le tunnel de l'Hôpital-sur-Rhins.",
      "Le mobile du crime était une dette de 27 francs que le meurtrier voulait éteindre par le sang."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Tribunaux",
    "title": "La catastrophe de Chaville",
    "summary": "Le tribunal correctionnel de Versailles a entamé le procès de la collision ferroviaire de Chaville. Les agents Sorn et Chaumelon sont poursuivis pour leurs manquements ayant causé la mort de plusieurs voyageurs.",
    "paragraphs": [
      "Le tribunal correctionnel de Versailles a cherché à établir les responsabilités dans la terrible collision ferroviaire survenue entre Sèvres et Chaville.",
      "Quatre wagons furent réduits en miettes, causant la mort de plusieurs voyageurs. Les agents Sorn et Chaumelon étaient poursuivis pour inobservation des règlements de circulation."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident de convoi près de Cheville",
    "summary": "Témoignage bouleversant de M. Delafon lors de la collision ferroviaire près de Cheville. Le conducteur relate sa fuite salvatrice alors que le train express percutait son convoi, sauvant ainsi les siens.",
    "paragraphs": [
      "« J'étais seul, a-t-il dit, dans le fourgon, puisque le conducteur d'arrière était parti pour poser les pétards réglementaires. Soudain, j'entendis un coup de sifflet et, en me penchant, j'aperçus les feux rouges du train express qui nous suivait. Je sautai immédiatement du train et j'entendis aussitôt derrière moi le choc formidable de la collision, puis des cris de douleur s'échappant de tous les wagons. »",
      "C'est en sanglotant que M. Delafon termine cette partie de son récit : « J'eus le bonheur, ajoute-t-il, de retrouver sains et saufs ma femme et mes deux enfants. »"
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Faits Divers",
    "title": "Procès de Jules Chaumelon et Louis Sorin",
    "summary": "Poursuite du procès de Jules Chaumelon et Louis Sorin avec le réquisitoire rigoureux de M. le substitut Piédelièvre. La défense de M. Sorin est assurée par M. Rudeile fils avant le renvoi de l'affaire.",
    "paragraphs": [
      "M. Piédelièvre, substitut, a soutenu l'accusation et, dans un réquisitoire très serré, a démontré au tribunal la culpabilité et la responsabilité de Jules Chaumelon et de Louis Sorin.",
      "M. Rudeile fils, du barreau de Versailles, a présenté la défense de ce dernier, puis M. Ferron, président du tribunal, a renvoyé l'affaire pour continuation à samedi prochain."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Faits Divers",
    "title": "L'Amour Meurtrier - Procès de Declarey",
    "summary": "Jugé pour tentative de meurtre, Georges Declarey a comparu devant la cour d'assises. Ayant tiré sur Mlle Textor par jalousie avant de retourner son arme contre lui, il a été condamné à cinq années de réclusion.",
    "paragraphs": [
      "La cour d'assises de la Seine, présidée par M. le conseiller Mercier, a jugé hier le nommé Georges Declarey, représentant de commerce âgé de trente-sept ans, accusé de tentative de meurtre.",
      "Le 21 avril dernier, vers dix heures et demie du matin, Declarey entrait dans le débit de vins tenu par les époux Textor, avenue Ledru-Rollin au Perreux, déposait sa canne sur une banquette, et, se retournant du côté de la demoiselle Hélène Textor, âgée de dix-huit ans, qui était près du comptoir, tirait presque à bout portant trois coups de revolver sur elle.",
      "Cette jeune fille, blessée dans le dos et à la main, prit la fuite. Pendant ce temps, Declarey, tournant son arme contre lui-même, se tirait deux coups de revolver dans la région du cœur ; il tombait dans l'établissement, mais, se relevant aussitôt, il venait s'affaisser dans la rue où, quelques instants après, il était trouvé par la dame Textor qui rentrait.",
      "Celle-ci lui ayant demandé ce qu'il venait de faire, il lui répondit : « J'aimais votre fille, je lui ai tiré un coup de revolver et j'ai tiré sur moi-même auprès ».",
      "La demoiselle Textor n'a subi qu'une incapacité de travail de trente jours. Declarey se rétablit promptement.",
      "Dès le début, il soutint que Mlle Textor était sa maîtresse depuis un an, qu'il l'aimait follement et que, cédant à un violent accès de jalousie, il avait tiré sur elle parce qu'elle lui avait déclaré en aimer un autre et vouloir rompre avec lui.",
      "Mlle Textor, après avoir nié les faits allégués par Declarey, finit par reconnaître qu'elle avait eu de fréquentes relations avec lui, ajoutant qu'elle avait rompu parce qu'elle croyait que Declarey avait une autre maîtresse.",
      "Declarey ne paraît pas avoir prémédité son crime. À l'audience, il a regretté son acte. Il a été condamné à cinq années de réclusion."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Faits Divers",
    "title": "Condamnation à mort à Oran",
    "summary": "La cour d'assises d'Oran a condamné à mort Belfadi Mostaganem. Il a été reconnu coupable du meurtre d'Antonio Santiago, âgé de quinze ans, commis à Benisaf au mois de mars dernier.",
    "paragraphs": [
      "La cour d'assises d'Oran a condamné hier à la peine de mort Belfadi Mostaganem, âgé de vingt-huit ans, reconnu coupable d'un meurtre commis en mars dernier à Benisaf sur le jeune Antonio Santiago, âgé de quinze ans.",
      "Au prononcé de la sentence, le condamné a balbutié quelques paroles inintelligibles et s'est affaissé ; il s'est traîné avec peine jusqu'à la prison où il a été pris d'une nouvelle faiblesse."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Nouvelles Judiciaires",
    "title": "Diverses décisions des tribunaux",
    "summary": "Chronique judiciaire : condamnation sévère pour un prévenu violent à Rennes, renvoi aux assises d'un palefrenier meurtrier et suites judiciaires concernant l'accident ferroviaire de Choisy-le-Roi.",
    "paragraphs": [
      "Un nommé Cornu, condamné pour vagabondage et qui avait fait appel devant le tribunal correctionnel de Rennes, a lancé un morceau de charbon à la tête du président, M. de Savignon-Larombière, au moment où celui-ci lisait le jugement confirmant la peine. Cornu a été condamné immédiatement à cinq ans de prison et dix ans d'interdiction de séjour.",
      "M. Mercier, juge d'instruction, vient de renvoyer devant la cour d'assises un palefrenier nommé Dallu, demeurant rue Curial, qui, le mois dernier, a tué un de ses collègues à coups de fourche.",
      "M. de Vallès, juge chargé de l'instruction de l'accident de chemin de fer de Choisy-le-Roi, a communiqué hier son dossier au procureur de la République. Ce magistrat ne rendra son ordonnance que dans quelques jours.",
      "Le 25 novembre dernier, à la sortie d'un débit de vins de la rue de Pontoise, à Argenteuil, un nommé Legros se prit de querelle avec le jeune Mouy, ajusteur à la Compagnie du Nord, et le frappa de six coups de couteau. Le tribunal correctionnel de Versailles a condamné Legros à treize mois de prison."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Statistique",
    "title": "Statistique hebdomadaire de la ville de Paris",
    "summary": "Bilan sanitaire de la 49e semaine : 898 décès enregistrés. La phtisie pulmonaire reste la cause majeure de mortalité, tandis que l'état civil fait état de 489 mariages et 1056 naissances.",
    "paragraphs": [
      "Le service de la statistique municipale a enregistré, pendant la 49e semaine, 898 décès, chiffre plus favorable que la moyenne ordinaire des semaines de décembre.",
      "La fièvre typhoïde a causé 11 décès. La variole a causé 14 décès. La rougeole a causé 2 décès, la scarlatine 4, la coqueluche 2 et la diphtérie 10. La diarrhée infantile a causé 25 décès de 0 à 1 an. En outre, 38 enfants sont morts de faiblesse congénitale.",
      "Les maladies inflammatoires des organes de la respiration ont causé 113 décès. Les autres maladies de l'appareil respiratoire ont entraîné 42 décès. La phtisie pulmonaire a causé 169 décès. Il y a eu 10 suicides et 14 autres morts violentes. On a célébré à Paris 489 mariages et enregistré la naissance de 1056 enfants : 544 garçons et 512 filles."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Fruit Défendu - Roman parisien inédit",
    "summary": "Régine découvre, par une lettre posthume de sa sœur Rose, la trahison de Jean Villaurier. Accablée par la révélation que cet homme est le responsable du destin tragique de sa sœur, elle s'effondre.",
    "paragraphs": [
      "Jérôme, calme et résolu, répliqua : « Je ne sais ce que contient la suite de cette lettre. Je le devine seulement aux premiers mots, hélas ! Si tu me dis que Régine ne mérite pas ce châtiment, Gaspard, je le lui épargne, et c'est à toi que nous aurons recours pour cette lecture ».",
      "Gaspard resta silencieux. Il n'osa défendre Régine. Jérôme alla ouvrir la porte qui donnait sur l'escalier ; il savait que Régine était dans sa chambre. Il cria : « Régine, descends auprès de nous ! ».",
      "Régine obéit. Elle n'eut qu'à regarder son père pour comprendre que quelque chose de grave se passait, mais tout lui était indifférent. Jérôme lui tendit le papier : « Lis-nous cette lettre. Aucun de nous n'en a le courage ».",
      "« De Rose-Manon ? » demanda Régine. « Oui, de Rose. Écrite deux jours avant sa mort, pour n'être lue que le jour où sa sœur Régine, qu'elle aimait tant et pour laquelle elle est morte, serait elle-même en danger. Cette lettre, sans doute, lui apporte le salut ».",
      "Alors la jeune fille commença la lecture. Dès les premiers mots, elle s'arrêta, ses yeux étincelèrent : « Ce n'est pas lui qui l'a tuée ! ». La voix de Régine trembla quand Rose dit qu'elle était morte pour le salut de sa sœur.",
      "Jérôme expliqua : « Rose elle-même avait fait la connaissance d'un jeune homme qui s'appelait, ou plutôt se faisait appeler, Jean Clairjean. Rose fut la maîtresse de cet homme, et cet homme la chassa quand il sut qu'elle allait être mère. Jean Clairjean et Jean Villaurier ne sont qu'un seul et même misérable ».",
      "Terrifiée, l'enfant sembla près de devenir folle. Elle eut un cri de désespoir, de déchirement intense : « Oh maman ! oh maman ! » Et elle s'affaissa, évanouie, par terre."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Vie Culturelle",
    "title": "Courrier des Théâtres",
    "summary": "Actualités des scènes parisiennes : représentations à l'Opéra-Populaire et à la Comédie-Populaire. L'assemblée générale de la Société des auteurs, compositeurs et éditeurs de musique est annoncée.",
    "paragraphs": [
      "Il n'y aura pas de matinée dimanche prochain à l'Opéra-Populaire. Le soir, onzième représentation de la Reine de Saba. Samedi soir, Paul et Virginie sera donné.",
      "A la Comédie-Populaire, il est question de monter « Le Supplice d'une femme ». On répète au Nouveau-Théâtre « La Carriole ».",
      "La Société des auteurs, compositeurs et éditeurs de musique tiendra son assemblée générale annuelle lundi prochain, salle Charras."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Informations Diverses",
    "title": "Réunions et convocations",
    "summary": "Avis aux anciens combattants du Transvaal pour une réunion ce soir. L'assemblée générale de l'Institut sténographique de France est fixée au 16 décembre sous la présidence de M. Poincaré.",
    "paragraphs": [
      "Les anciens combattants du Transvaal sont priés d'assister à leur réunion qui aura lieu aujourd'hui vendredi, à neuf heures du soir, 61, rue de l'Italie.",
      "L'assemblée générale de l'Institut sténographique de France aura lieu dimanche 16 décembre, à trois heures, 41, rue de Lille, sous la présidence de M. Poincaré."
    ]
  }
];
