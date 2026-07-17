// Date: 1899-11-07
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-11-07 (Version Restaurée, 41 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique",
    "title": "Le Budget de la Marine",
    "summary": "Face à la montée des tensions internationales, la France accroît son budget naval pour 1900 à 315 millions, visant à protéger ses vastes territoires coloniaux et à affirmer sa puissance face à l'hégémonie britannique.",
    "paragraphs": [
      "La situation internationale est telle que les grandes puissances continentales, c'est-à-dire la France, l'Allemagne et la Russie, se préoccupent d'assurer la liberté des mers et de soustraire les océans à la suprématie anglaise.",
      "Nous sommes fort éloignés maintenant des idées qui avaient prévalu un instant après nos désastres, lorsque nous étions portés à diriger uniquement nos efforts vers la reconstitution de notre armée de terre et disposés à regarder la flotte comme une parure et un luxe.",
      "Depuis l'extension de notre politique coloniale et la création d'un vaste empire d'outre-mer, le pays a compris qu'il lui fallait pouvoir défendre ces territoires immenses acquis au prix de tant de sacrifices en hommes et en argent.",
      "Pour les combinaisons futures des chancelleries, notre puissance navale est donc une condition essentielle et il n'y a pas lieu d'être surpris si le budget de la Marine pour 1900 dépasse 315 millions et est supérieur de plus de 44 millions aux crédits accordés pour l'année courante."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Roman-Feuilleton",
    "title": "Une haine vieille d'un siècle",
    "summary": "Colette rend visite à Michelle, une femme aux facultés mentales ébranlées qui divague. Malgré l'indifférence de la malade, l'institutrice persiste dans ses tentatives pour éveiller en elle d'anciens souvenirs.",
    "paragraphs": [
      "Ils entrèrent, s'assirent, attendirent le retour de Soubise, sans que celle-ci s'occupât d'eux ; elle allait et venait, en chantonnant son éternelle chanson des Chouans de quatre-vingt-treize.",
      "Celle qui venait d'entrer, c'était Colette. Elle se débarrassa de son manteau, rejetant par un joli mouvement le capuchon sur ses épaules.",
      "Colette venait ainsi souvent passer une heure auprès de Michelle, essayant, sans se décourager, d'arriver jusqu'à cette pauvre intelligence et d'éveiller en elle quelque souvenir.",
      "Les Girodias ignoraient les relations qui s'étaient établies entre Michelle et l'institutrice, mais, tout entiers à leur émotion violente, ils ne se demandèrent même pas ce qu'elle venait faire chez le garde."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Rupture des négociations à Kouang-Tchéou-Wan",
    "summary": "En raison de l'hostilité manifestée par le vice-roi de Canton, les négociations sur la délimitation de Kouang-Tchéou-Wan sont rompues. Le ministère de la Marine renforce les troupes d'occupation sur place.",
    "paragraphs": [
      "Le ministère de la Marine communique la note suivante : Un télégramme du contre-amiral Courrejolles annonce que les négociations pour la délimitation du territoire de Kouang-Tchéou-Wan, qui se poursuivaient depuis quelque temps avec le maréchal Sou dans de bonnes conditions, ont été rompues par suite de l'hostilité du vice-roi de Canton.",
      "Le ministre de la Marine a pris toutes les mesures nécessaires pour renforcer les troupes d'occupation.",
      "C'est au sujet de la possession de ces îles que des difficultés ont surgi entre le maréchal Sou et l'amiral Courrejolles."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "La Question Budgétaire",
    "summary": "Le ministre de la Marine, M. de Lanessan, a été entendu par la Commission du Budget. Celle-ci a rejeté les crédits demandés, jugeant irrégulières les dépenses engagées pour le cuirassé Primauguet.",
    "paragraphs": [
      "M. de Lanessan, ministre de la Marine, a été entendu hier par la Commission du Budget sur les crédits de son département ministériel.",
      "M. Camille Pelletan a fait observer que les travaux du Vaucluse n'avaient pas été autorisés par les Chambres et qu'un article impératif de la loi de finances défend de faire, sans l'autorisation du Parlement, des dépenses sur des bâtiments d'un certain tonnage.",
      "Après le départ du ministre de la Marine, la Commission, estimant que les dépenses engagées pour le Primauguet l'ont été illégalement, a repoussé les crédits demandés."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une fillette assassinée",
    "summary": "Bouvier, suspecté du meurtre de Julia Boitel, tente d'échapper à la justice en accusant son neveu, Albert Bouvier. Ce dernier, immédiatement arrêté par le parquet, nie vigoureusement les faits allégués.",
    "paragraphs": [
      "Meaux, 6 novembre. Bouvier, l'assassin présumé de Mlle Julia Boitel, dont le cadavre fut retrouvé dans le canal de l'Ourcq le 26 août dernier, a perdu de son assurance en apprenant qu'il allait comparaître devant la Cour d'assises.",
      "Hier, il a demandé à faire des révélations et il a déclaré au juge d'instruction que l'auteur du crime était son propre neveu, Albert Bouvier, âgé de vingt et un ans.",
      "Le parquet a arrêté Albert Bouvier, qui nie énergiquement et a indiqué son emploi du temps. Une enquête est ouverte."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un clocher en feu",
    "summary": "Un violent incendie a ravagé hier le clocher de l'église de Puteaux. L'alarme a été rapidement donnée, mais les pompiers n'ont pu empêcher le sinistre, provoqué par un court-circuit électrique.",
    "paragraphs": [
      "Une épaisse fumée s'échappant, hier après-midi, du clocher de l'église de Puteaux, était aperçue de différents points de la ville.",
      "L'alarme fut immédiatement donnée et les pompiers mirent plusieurs pompes en batterie, mais déjà tout le clocher était en flammes. Les causes du sinistre semblent devoir être attribuées à une interruption de circuit dans les câbles électriques qui passaient dans le clocher."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Grave accident de voiture",
    "summary": "La place de la Nation a été le théâtre d'un grave accident. Une sirène à vapeur a provoqué l'emballement d'un cheval, blessant grièvement son conducteur, M. Rutmann, et un vieillard, M. Labroche.",
    "paragraphs": [
      "Depuis quelque temps, un sort funeste semble jeté sur la place de la Nation ; en moins de quinze jours, seize accidents de voiture se sont produits, et le dernier est des plus graves.",
      "Hier matin, les stridences déchirantes d'une sirène à vapeur firent s'emballer le cheval de M. Rutmann, maréchal-ferrant. Le malheureux fut traîné à terre, grièvement contusionné, avec trois côtes fracturées et une jambe brisée.",
      "Le cheval renversait aussi un vieillard de quatre-vingt-six ans, M. Léonard Labroche, qui eut le crâne fracturé et de graves blessures internes. Ils ont été transportés d'urgence à l'hôpital Saint-Antoine."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Social",
    "title": "Les condamnés à mort",
    "summary": "Suite à un entretien entre le ministre de l'Intérieur et le préfet Lépine, les condamnés Louzey, Burgert et Martin ont été transférés à la Grande-Roquette en attendant une éventuelle exécution.",
    "paragraphs": [
      "À la suite d'une entrevue qui a eu lieu hier entre le ministre de l'Intérieur et M. Lépine, préfet de police, il a été convenu que les condamnés seraient transférés de la prison de la Santé à la Grande-Roquette.",
      "Une voiture cellulaire prit Louzey, Burgert et Martin à la prison de la Santé pour les transporter à la Grande-Roquette. Si la clémence présidentielle ne s'exerce pas, la guillotine sera élevée à cet endroit."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "International",
    "title": "La Guerre au Transvaal",
    "summary": "Le mouvement des Boërs se précise à la frontière de l'État d'Orange. Tandis que le War Office attend des confirmations, la solidarité avec la cause boër s'organise jusqu'à Saint-Pétersbourg.",
    "paragraphs": [
      "Les seules nouvelles à peu près certaines reçues de Ladysmith ont été apportées par pigeons voyageurs à Durban. À la frontière de l'État d'Orange et de la colonie du Cap, le mouvement en avant des Boërs se dessine de plus en plus nettement.",
      "Londres, 6 novembre : La Press Association dit que le War Office n'a jusqu'ici aucune confirmation de la capture d'un camp boër.",
      "Saint-Pétersbourg, 6 novembre : Les étudiants de l'Université de Saint-Pétersbourg ainsi que les employés de différentes administrations de l'État ont sollicité et obtenu l'autorisation d'ouvrir des souscriptions au profit des Boërs."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "International",
    "title": "La situation au Transvaal",
    "summary": "L'opinion russe et autrichienne manifeste une sympathie croissante pour les Boërs, avec des volontaires se préparant au départ, en dépit de la neutralité affichée par les milieux officiels viennois.",
    "paragraphs": [
      "Non seulement les amis du Transvaal versent des sommes d'argent au Comité de secours aux Boërs, mais encore plusieurs d'entre eux se préparent à partir pour le Transvaal en qualité de volontaires.",
      "Les journaux et le public russe se montrent de plus en plus ardents à témoigner leur admiration pour les Boërs ainsi que leur profonde hostilité pour les Anglais. Même les nouvelles des défaites sont accueillies ici avec une satisfaction générale.",
      "On mande de Laybach aux journaux viennois qu'un officier autrichien, ayant demandé un congé et l'ayant obtenu, vient d'écrire à son commandant qu'il était en route pour le Transvaal, où il allait prendre du service dans l'armée boër.",
      "La sympathie de la population viennoise pour les Boërs est toujours grande. Dans les milieux officiels, on continue à témoigner de la sympathie plutôt aux Anglais.",
      "La colonie hollandaise de Vienne organise cette semaine un grand meeting pour manifester en faveur des Boërs."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "La Haute-Cour",
    "summary": "La Haute-Cour s'ouvre jeudi. Au programme : examen de la participation des sénateurs, questions de compétence soulevées par la défense et étude des scellés du dossier Buffet dans l'affaire des antisémites.",
    "paragraphs": [
      "Les débats de la Haute-Cour s'ouvriront jeudi, à une heure précise. Après l'appel nominal et autres formalités préliminaires, la Haute-Cour aura à examiner tout d'abord la demande formulée par M. Fabre, sénateur de l'Aveyron, tendant à ce que les dix-sept membres du Sénat qui n'avaient pu assister à la première audience puissent concourir au jugement.",
      "La Haute-Cour sera ensuite saisie par les avocats des inculpés antisémites d'un appel interjeté par eux contre deux arrêts de la Commission d'instruction.",
      "Me Thénard, avocat de M. Guérin, demandera à son tour la disjonction des crimes et délits de droit commun imputés à son client, soutenant qu'il n'y a aucune connexité entre l'accusation de complot et les autres charges portées contre M. Guérin.",
      "On croit que ces divers incidents occuperont toute la journée de jeudi. Dès la reprise des débats, Me Devin soulèvera en audience publique la question de compétence qu'il doit développer très longuement.",
      "Parmi les pièces mises sous scellés et non retenues par l'instruction, on vient d'en trouver un certain nombre dans le dossier Buffet ayant une grande importance. M. Buffet a été amené au Petit-Luxembourg pour l'ouverture de ces scellés, dont le contenu s'est avéré plus important que prévu.",
      "M. Fallières, président de la Haute-Cour, a chargé le docteur Ploquet d'aller examiner le baron de Vaux, dans la maison de santé de Neuilly, afin de savoir si le régime cellulaire ne serait pas préjudiciable à sa santé."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "L'avancement des officiers et la garnison de Châlons",
    "summary": "Le ministre de la Guerre maintient ses instructions sur l'avancement des officiers. Par ailleurs, le Conseil municipal de Châlons vote un crédit pour accueillir un second régiment d'infanterie.",
    "paragraphs": [
      "Un journal du matin s'élève contre des instructions données par le Ministre de la Guerre pour écarter de l'avancement au choix les officiers qui, en raison de leur âge, n'ont plus que deux ans à accomplir dans leur grade actuel. Le général de Galliffet ne fait qu'assurer l'exécution d'une décision prise par un de ses prédécesseurs.",
      "Le Conseil municipal de Châlons vient de voter une subvention de 700 000 francs pour obtenir l'installation d'un deuxième régiment d'infanterie."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Social",
    "title": "Les Sociétés de tir",
    "summary": "Débats sur le développement des sociétés de tir : questions relatives au port de l'uniforme, à la reconnaissance des réservistes et aux moyens d'émulation pour accroître la pratique en France.",
    "paragraphs": [
      "L'entretien du Petit Parisien sur les sociétés de tir a été approuvé par tous ceux qui ont à cœur le développement de ces utiles associations. Quelques-uns de nos correspondants expriment l'idée qu'il ne faudrait pas donner aux seuls sous-officiers le droit de porter l'uniforme.",
      "L'un d'eux voudrait que l'on autorisât la tenue militaire le jour de la distribution des prix de tir à tous les caporaux et soldats faisant partie de la Société. Malheureusement, la plupart des réservistes n'ont pas la tenue chez eux.",
      "Plus que jamais il faut développer le goût du tir en France ; peut-être un insigne à porter pendant les réunions des Sociétés ou un avancement dans les réserves seraient de puissants moyens d'émulation."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Culture",
    "title": "La statue de Benjamin Franklin",
    "summary": "La ville de Philadelphie offre à Paris une statue de Benjamin Franklin. Hommage à l'homme d'État, au diplomate et au citoyen du monde, incarnation de la volonté et du progrès humain.",
    "paragraphs": [
      "La ville de Philadelphie a l'honneur d'offrir à la ville de Paris, à l'occasion de l'Exposition universelle, une statue de Benjamin Franklin. Ce don grandit à la fois ceux qui le font et ceux qui le reçoivent.",
      "Franklin n'est pas simplement un citoyen américain, il est, comme le disait Chatham, un citoyen de l'humanité. Ce qu'il faut admirer, c'est l'effort purement individuel de cet homme se formant tout seul et tirant de son propre fonds toutes ses ressources et découvertes.",
      "Envisagé comme patriote, Franklin a droit à toute notre admiration. Dès qu'il a conscience de l'état de servitude où la cupidité et le despotisme britanniques ont réduit son pays, il n'hésite pas à se mettre du côté des opprimés. Sa carrière diplomatique, son ambassade auprès de la France et son retour en apothéose sont gravés dans les mémoires.",
      "Franklin était l'incarnation de la volonté, consacrant sa vie à l'émancipation des asservis et à l'expansion des progrès. Tel fut le grand homme dont l'Amérique reconnaissante se dispose à offrir la statue à la Ville de Paris."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "Conseil municipal de Paris - Séance du 6 novembre",
    "summary": "Le Conseil municipal de Paris débat de la reprise de la Compagnie du gaz, presse la Compagnie des omnibus de moderniser sa traction et vote la suspension des exercices militaires pour l'Exposition 1900.",
    "paragraphs": [
      "La séance est ouverte à trois heures et demie. M. Lépine, préfet de police, déclare qu'un agent a commis une maladresse au cours d'une cérémonie au Père-Lachaise et qu'il a été réprimandé.",
      "M. Ch. Vaudet questionne l'administration sur la transmission à la Ville de Paris de l'actif de la Compagnie du gaz. M. le Préfet de la Seine déclare qu'un projet d'accord a été proposé et que l'administration saura empêcher que cette affaire s'éternise.",
      "Le Conseil vote un ordre du jour invitant l'administration à mettre en demeure la Compagnie des omnibus de modifier ou de remplacer le système de traction d'ici au 30 juin.",
      "Le Conseil adopte un vœu demandant qu'à cause de l'Exposition, les périodes d'exercices militaires soient supprimées en 1900."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Inauguration de l'École professionnelle de bijouterie",
    "summary": "M. Millerand, ministre du Commerce, a inauguré hier l'École professionnelle de bijouterie rue Chapon, saluant l'engagement républicain en faveur de l'enseignement technique et populaire lors d'une cérémonie solennelle.",
    "paragraphs": [
      "M. Millerand, ministre du Commerce et de l'Industrie, a présidé hier l'inauguration de la nouvelle École professionnelle et gratuite de la bijouterie, située rue Chapon. Une assistance nombreuse était présente.",
      "M. Mascurand a retracé les efforts déployés contre la routine pour établir cet enseignement spécialisé. M. Millerand a félicité l'assemblée communale pour son dévouement à l'instruction populaire, socle moral de l'idée républicaine.",
      "La cérémonie s'est clôturée par la remise de décorations à M. Tantet, maire de l'arrondissement, ainsi qu'à MM. Luchard et Girard."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Tribunaux : La bande des Vernisseurs et autres affaires",
    "summary": "La Cour d'assises d'Eure-et-Loir a condamné à vingt ans de travaux forcés un malfaiteur de la « bande des Vernisseurs ». Un ouvrier agricole a également été jugé pour incendie volontaire.",
    "paragraphs": [
      "La Cour d'assises d'Eure-et-Loir a jugé Julien Rolland, âgé de vingt-cinq ans, membre notoire de la « bande des Vernisseurs ». Spécialisé dans les vols perpétrés chez des personnes âgées sous le fallacieux prétexte de vernir leurs meubles, il a été condamné à vingt années de travaux forcés.",
      "Marcel Devoir, garçon de ferme, a été condamné à deux années d'emprisonnement pour avoir mis le feu à deux meules de paille dans le dessein coupable de déshonorer sa famille."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Faits divers mondains et internationaux",
    "summary": "Actualités diverses : réceptions à l'Élysée, mariage de la fille du sénateur Goujon, préparatifs du monument Lesseps à Port-Saïd, vie champêtre de Nansen et progrès de la sécurité ferroviaire anglaise.",
    "paragraphs": [
      "Le Président de la République a reçu hier en audience plusieurs personnalités, dont des préfets et des officiers généraux.",
      "Une brillante cérémonie nuptiale a uni la fille unique de M. Goujon, sénateur de la Côte-d'Or, à M. H. Chapuit, avocat à la Cour d'appel.",
      "On prépare activement à Port-Saïd l'inauguration de la statue de Ferdinand de Lesseps, une œuvre monumentale du sculpteur Fremiet.",
      "L'explorateur Nansen mène désormais une existence de propriétaire campagnard à Telemarken, se consacrant à l'élevage et à l'administration de ses terres.",
      "Les compagnies de chemins de fer anglaises ont adopté un nouveau levier pour l'accrochage des wagons, rendant la manœuvre considérablement moins périlleuse pour leurs employés."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Erreur judiciaire et accident mortel à Rodez",
    "summary": "Libération de deux représentants parisiens injustement incarcérés suite à une méprise judiciaire. Par ailleurs, un ouvrier est décédé à Rodez lors d'une explosion de gaz acétylène.",
    "paragraphs": [
      "Deux représentants d'une importante maison de commerce parisienne ont été arrêtés par erreur à Vienne-sur-Oise, étant soupçonnés de vols commis par des malfaiteurs à Arras. Ils furent incarcérés à Clermont avant que leur complète innocence ne soit établie.",
      "Un ouvrier fumiste, nommé Giondini, a trouvé la mort à Rodez à la suite d'une explosion de gaz acétylène, causée par l'imprudence de rechercher une fuite avec une bougie allumée."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Triple noyade à l'île d'Yeu",
    "summary": "Drame à l'île d'Yeu : trois jeunes pêcheurs, Cariou, Chrétien et Vital, ont été emportés par une mer démontée alors qu'ils étaient sur les rochers. Seul le corps de Cariou a été retrouvé.",
    "paragraphs": [
      "Trois jeunes gens, nommés Cariou, Chrétien et Vital, se sont noyés à l'île d'Yeu après avoir été surpris par une mer démontée alors qu'ils pratiquaient la pêche sur les rochers. Le cadavre de Cariou a seul pu être récupéré sur la grève."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Science",
    "title": "Le mystère du météore",
    "summary": "Alors que le spectre d'un météore agite les esprits, les astronomes tempèrent l'inquiétude publique. Si l'observation des comètes passionne l'Académie des sciences, la menace d'une collision demeure hautement improbable.",
    "paragraphs": [
      "Qu'est-ce que l'histoire et quels sont les éléments du fameux météore dont on nous menace, et qui ne nous avait pas visités depuis quarante-sept ans ? Les observations furent adressées à l'Académie des sciences sur la nouvelle apparition de la comète.",
      "Les astronomes ont exploré le ciel pour retrouver la trace du météore. Certains savants affirment qu'il y en a près de dix-huit millions rien que dans notre système solaire. Rassurons nos lecteurs : il est infiniment probable que la comète annoncée n'est pas celle qui doit nous anéantir."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Social",
    "title": "Bulletin du travail dans les chemins de fer",
    "summary": "M. Baudin, ministre des Travaux publics, a officialisé de nouveaux arrêtés visant à mieux réglementer le temps de travail et les périodes de repos pour le personnel des compagnies de chemins de fer.",
    "paragraphs": [
      "M. Baudin, ministre des Travaux publics, vient de signer un important arrêté réglementant la durée du travail et du repos des mécaniciens et chauffeurs de chemins de fer. Un autre arrêté réglemente le travail des autres agents des chemins de fer."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Distribution des prix à Boulogne-sur-Seine",
    "summary": "La cérémonie de distribution des prix à Boulogne-sur-Seine a consacré M. Magne, récipiendaire du vase de Sèvres offert par le Président de la République, tandis que plusieurs autres personnalités furent distinguées.",
    "paragraphs": [
      "La distribution des prix a eu lieu. Le premier prix d'honneur, un vase de Sèvres offert par M. le Président de la République, a été décerné à M. Magne. M. Jochum, maire de Boulogne, a obtenu le deuxième prix. MM. Meniu et Bernardon ont obtenu des médailles d'or et M. Daniel une médaille de vermeil."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de travail à Gennevilliers",
    "summary": "Un grave accident est survenu à Gennevilliers : un charretier, Jean Bruchot, a été transporté d'urgence à l'hôpital Beaujon après avoir reçu un violent coup de sabot de son cheval en pleine poitrine.",
    "paragraphs": [
      "Un charretier, Jean Bruchot, âgé de quarante-six ans, demeurant avenue de Saint-Ouen, a été transporté hier à l'hôpital Beaujon après avoir été frappé par son cheval d'un terrible coup de pied en pleine poitrine."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident mortel à Saint-Denis",
    "summary": "Un tragique accident de travail s'est produit à Saint-Denis. Un ouvrier couvreur, M. Louis Oufroy, a perdu la vie après une chute mortelle survenue alors qu'il intervenait sur la toiture d'un immeuble.",
    "paragraphs": [
      "M. Louis Oufroy, ouvrier couvreur âgé de quarante ans, travaillait sur la toiture d'un immeuble rue de Paris lorsqu'il perdit l'équilibre. Il s'est fracturé le crâne sur le sol et est mort un instant après."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vol à Épinay",
    "summary": "Mme Louise Drugat, commerçante à Épinay, après avoir fui les brutalités de son compagnon, Hippolyte Hagenaud, découvre au retour le vol de ses bijoux et titres. Hagenaud a été arrêté par les autorités.",
    "paragraphs": [
      "Mme Louise Drugat, commerçante établie à Épinay, avait dû quitter précipitamment son domicile pour échapper aux violences réitérées de son compagnon, le nommé Hippolyte Hagenaud. À son retour, elle a constaté avec effroi que ce dernier avait pris la fuite, non sans avoir dérobé bijoux et titres appartenant à la commerçante.",
      "Aussitôt informée, la police a diligente une enquête qui a permis de localiser le fugitif. Hagenaud a été appréhendé par les autorités et conduit au poste pour répondre de ses actes devant la justice."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de meurtre à Montreuil-sous-Bois",
    "summary": "Un drame conjugal s'est noué à Montreuil-sous-Bois : un chauffeur de la Compagnie du gaz, Voscelinger, a tenté d'assassiner les siens. Maîtrisé après une lutte acharnée, il est détenu, tandis que son épouse est soignée.",
    "paragraphs": [
      "M. Rousselot, commissaire de police, a procédé à l'arrestation d'un individu nommé Voscelinger, chauffeur à la Compagnie du gaz, qui, dans un accès de fureur, a tenté d'assassiner son épouse et son enfant. La lutte contre les agents fut particulièrement vive, le forcené se défendant avec une force prodigieuse avant de pouvoir être entravé.",
      "L'épouse du malheureux, grièvement blessée au cours de l'agression, reçoit actuellement tous les soins que nécessite son état, toujours confinée à son domicile sous surveillance médicale."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Rixe à Ivry",
    "summary": "Une dispute entre deux tonneliers à Ivry a tourné au drame. Charles Metzger a porté un coup de couteau à Charles Weisgerber. La victime, grièvement touchée, a été secourue, et l'agresseur a été arrêté.",
    "paragraphs": [
      "Une violente altercation a éclaté hier entre deux tonneliers, Charles Weisgerber et Charles Metzger. La querelle, dont les motifs demeurent obscurs, s'est envenimée jusqu'à ce que Metzger assène un coup de couteau à son camarade, atteignant Weisgerber au-dessous de l'épaule gauche.",
      "La victime a été immédiatement prise en charge par les secours, son état étant jugé fort préoccupant par les médecins. Quant au meurtrier présumé, il a été interpellé sans délai et mis à la disposition de la justice."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident mortel à Versailles",
    "summary": "Une tragique chute survenue sur le chantier de la mairie de Versailles a coûté la vie à l'ouvrier Albert Marcet. Son compagnon, Émile Vaurilège, demeure dans un état désespéré après cette chute du second étage.",
    "paragraphs": [
      "Un accident d'une effroyable tristesse s'est produit hier, aux environs de midi, sur le chantier de la mairie de Versailles. Deux ouvriers maçons, travaillant au second étage de l'édifice, ont fait une chute vertigineuse sur le sol en contrebas.",
      "Albert Marcet, âgé de quarante ans, a succombé sur le coup à ses blessures. Son infortuné camarade, Émile Vaurilège, a été relevé dans un état désespéré et transporté d'urgence vers l'établissement hospitalier le plus proche."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame à Saint-Gratien",
    "summary": "Le jeune Marcel Cheval, sept ans, a tragiquement péri à Saint-Gratien. Victime d'une chute malheureuse sur un banc en fer, l'enfant a succombé après douze heures d'une atroce agonie.",
    "paragraphs": [
      "Un accident domestique d'une rare fatalité est venu endeuiller la commune de Saint-Gratien. Le petit Marcel Cheval, âgé seulement de sept ans, est tombé malencontreusement dans une écurie, heurtant de plein fouet un banc en fer.",
      "L'un des pieds métalliques du meuble a violemment pénétré le crâne de l'enfant. Malgré les soins prodigués, le jeune garçon a succombé après avoir enduré douze heures d'une agonie déchirante."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enlèvement d'enfant à Rambouillet",
    "summary": "Dans les bois de Rambouillet, un repris de justice nommé Coquard a tenté d'enlever une fillette de sept ans en lui entravant les jambes. Il fut neutralisé et arrêté in extremis par un cultivateur, M. Manuette.",
    "paragraphs": [
      "Les époux Audinel ont découvert, dans les bois, un individu nommé Coquard, repris de justice, qui se jetait sur leur petite fille de sept ans. Il lui avait lié les jambes et tentait de l'emporter.",
      "Alerté par les cris de l'enfant, un cultivateur, M. Manuette, est accouru sur les lieux et a appréhendé le misérable."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide à Porcheville",
    "summary": "Un charretier de soixante et un ans, le nommé Malfeurin Miton, a été découvert pendu hier à la porte du cimetière de Porcheville. Ce geste fatal serait motivé par des chagrins d'ordre intime.",
    "paragraphs": [
      "Un charretier nommé Malfeurin Miton, âgé de soixante et un ans, a été trouvé pendu, hier, à la porte du cimetière de Porcheville.",
      "Ce suicide, qui plonge la localité dans l'émoi, est attribué par les autorités à des chagrins intimes profonds."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide à Meaux",
    "summary": "Ruine par le jeu, le receveur buraliste M. Pierre Guilloux s'est donné la mort par asphyxie au charbon, laissant derrière lui un déficit financier de 1 600 francs.",
    "paragraphs": [
      "M. Pierre Guilloux, receveur buraliste, s'est donné la mort en s'asphyxiant à l'aide d'un réchaud de charbon, acculé par des pertes considérables au jeu.",
      "Il laisse derrière lui un déficit de 1 600 francs dans ses comptes."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Crime à Meaux",
    "summary": "Charles Ferrari, chauffeur à Crécy, s'est livré aux autorités après avoir avoué avoir commis des actes criminels sur sa propre fille mineure, désormais enceinte.",
    "paragraphs": [
      "Charles Ferrari, chauffeur à Crécy, s'est constitué prisonnier à la gendarmerie locale.",
      "Il a avoué avoir commis des actes criminels sur sa propre fille, âgée de treize ans, laquelle est, à la suite de ces agissements, sur le point d'être mère."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Départements",
    "title": "Nouvelles de Montargis, Clermont et Compiègne",
    "summary": "Une série de tragédies frappe les provinces : décès accidentels par noyade à Montargis et Clermont, et mort accidentelle par un coup de pied de cheval à Compiègne.",
    "paragraphs": [
      "À Montargis, le cadavre d'un vieillard de soixante-quinze ans, nommé Pierre Breuillet, a été découvert flottant dans un étang.",
      "À Clermont, la veuve Thomas a été retrouvée noyée dans une mare de la commune.",
      "À Compiègne, un valet de ferme nommé Corbeau a succombé à ses blessures après avoir reçu un coup de pied de cheval en pleine poitrine."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Sport",
    "title": "Résultats des courses et sport",
    "summary": "Le championnat de lutte se poursuit au Casino de Paris. Le combat de boxe Jeffries-Sharkey a laissé les deux athlètes gravement blessés. Les courses hippiques de Vincennes ont attiré une large affluence.",
    "paragraphs": [
      "Le championnat de lutte se poursuit au Casino de Paris. Concernant le combat de boxe Jeffries-Sharkey, une foule de 9 000 personnes a assisté à la rencontre qui a laissé les deux hommes avec de graves blessures. À Vincennes, les courses de chevaux ont été disputées par un grand nombre d'animaux."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Économie",
    "title": "Bulletin financier",
    "summary": "La Bourse de Paris reste prudente. Le 3 % se maintient sans changement à 100,17, tandis que les valeurs bancaires sont stables. Seule la Sosnowiec montre quelques signes de faiblesse.",
    "paragraphs": [
      "La Bourse reste dans l'expectative. Le 3 % reste sans changement à 100,17. Les variations sont faibles dans le groupe des établissements de crédit. La Sosnowiec accuse une certaine faiblesse."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Littérature",
    "title": "Hommage à Eugène Sue",
    "summary": "Un hommage au talent d'Eugène Sue, maître du roman feuilleton et fin observateur des passions humaines, dont les personnages emblématiques restent gravés dans la mémoire collective française.",
    "paragraphs": [
      "L'immense popularité d'Eugène Sue et l'éclatante notoriété de son talent nous dispensent d'éloges pour celui qui fut un des principaux initiateurs de la grande école romantique et qui conçut, en sa vie laborieuse, ces admirables romans dont les titres célèbres resteront à jamais flamboyants aux annales littéraires du XIXe siècle.",
      "Eugène Sue, plus que tout autre écrivain de son temps, excellait aux narrations des scènes émouvantes et pathétiques et aux études des dessous de la vie fiévreuse des grandes villes. Les mœurs horribles des bandits et des forçats comme celles des braves travailleurs de la terre et de la mer ont été décrites par lui avec une incroyable vérité.",
      "Les passions humaines, les desseins pervers des méchants, les ravissements des rêves de la jeunesse et les sentiments généreux des types héroïques n'avaient aucun secret pour cet anatomiste de l'âme qui, toujours, a su tenir le lecteur sous le charme de son art exquis et de son habileté prestigieuse.",
      "Prenez au hasard le Juif Errant, les Mystères de Paris ou tel autre chef-d'œuvre dramatique du maître, et, dès les premières lignes, l'action nettement dessinée vous captive ; la réalité saisissante du drame vous apparaît, terrible en sa hideur, vous fouillez l'âme des personnages qui évoluent sous vos yeux et votre imagination perçoit distinctement les plus intimes sensations des héros au sort desquels vous vous intéressez comme s'il ne s'agissait plus de personnages fictifs.",
      "Dagobert, la Mayeux, Jacques Rennepont dit Coupe-tout-nu, la reine Bacchanal, Rodin, l'Ogresse, la Goualeuse, Rodolphe, Jacques Ferrand, le Chourineur, Cabrion, sont autant de types qui ont fait couler bien des larmes, soulever les cœurs de courroux, ou fait rire aux éclats !"
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Feuilleton",
    "title": "L'agression de Minnie au bois de Boulogne",
    "summary": "Minnie, une jeune Américaine, est agressée par deux malfrats au bois de Boulogne. Elle est sauvée in extremis par le comte Gustave de Pervol qui met les agresseurs en fuite.",
    "paragraphs": [
      "Voyons, où suis-je ? Et elle jeta un regard autour d'elle. En ce moment, le caprice de son humeur vagabonde l'avait entraînée dans une des parties les plus désertes en même temps que les plus dangereuses du bois de Boulogne, elle se trouvait dans cette allée solitaire qui s'allonge tantôt entre les taillis épais, tantôt entre les bruyères et les ajoncs derrière le parc de Bagatelle. Jamais encore miss Minnie ne s'était aventurée en ces parages. Elle ne reconnaissait plus son chemin. La solitude de cet endroit commençait à l'alarmer.",
      "La solitude ? Non. Elle n'était pas seule. Depuis une demi-heure déjà, et sans que dans ses préoccupations, elle s'en fût aperçue, la jeune fille était suivie. Deux hommes, deux voyous à mine patibulaire, montés eux aussi sur des bicyclettes, sans doute produit d'un vol, pédalaient à quelques cents pas derrière elle.",
      "Maintenant ils se rapprochaient insensiblement de la promeneuse. Allons, ouste ! du jarret, l'Esbroufe, dit l'un d'eux. Nous la tenons. Couds donc ta langue, Popaul, répondit l'autre. Tu ne peux donc plus travailler sans jaser ? Allons, ferme. Et accentuant leur allure, d'un élan furieux les deux voyous eurent bientôt rejoint la jeune fille. Manœuvrant alors de façon à la dépasser, l'un à droite, l'autre à gauche, ils longèrent les bas-côtés du chemin.",
      "Au moment où ils se trouvaient arrivés à la hauteur de Minnie, Popaul allongeant la main, imprima un choc si violent à l'Américaine que brusquement elle fut projetée par terre. Maladroit ! cria-t-elle furieuse. Vous auriez pu me tuer. En même temps elle frottait son genou meurtri par la chute. Les deux bandits arrêtèrent leurs bicyclettes et mirent pied à terre.",
      "Popaul s'avança vers la jeune fille toujours affaissée sur le tronc d'un arbre. Il ôta sa casquette, et avec un mielleux sourire : On a donc du bobo à sa partie charnue, fit-il. C'est fâcheux, oh ! très fâcheux. Faut-il que je vous frictionne ? Miss Minnie rougit jusqu'au blanc des yeux. Shocking ! cria-t-elle indignée, insolent. Laissez-moi. Je veux... Je veux, je veux, répéta railleusement Popaul, le roi dit nous voulons. Puis se penchant vers la jeune Américaine il murmura : Vous avez là une bien jolie tocante, ma petite dame. Il faut me la donner en souvenir. Et du doigt il désignait une montre d'or ornée de brillants, suspendue par une châtelaine à la ceinture de la jeune fille.",
      "Vous êtes des voleurs, alors ? s'écria Minnie de plus en plus alarmée. Oh ! le vilain mot ! fit le facétieux Casse-Cœur des dames. Non pas voleurs, mais de simples pickpockets. Allons, vite la tocante. Jamais ! fit résolument la jeune Américaine. Puis élevant la voix : Au voleur ! cria-t-elle de toutes ses forces. Ah ! toi, ma petite, tu bavardes trop, fit Popaul. Toi, l'Esbroufe, baroufle !",
      "Il avait plaqué la paume de sa main droite sur la bouche de Minnie. En même temps, de son bras gauche il lui assujettissait la taille. De son côté, le camarade arrachait la montre et la châtelaine. La malheureuse jeune fille luttait, se démenait, se débattait, mais en vain. Où est le porte-monnaie ? demanda Popaul. Ah ! ne mords pas, la petite, ou je te casse les dents. Au secours ! au secours ! gémissait Minnie à moitié étouffée. Défaillante de terreur et de désespoir, elle avait fermé les yeux, s'attendant à être assommée.",
      "Soudain le bruit d'un sabot de cheval accourant au galop lui fit ouvrir les paupières. Dans le lointain, une voix d'homme criait impérieuse : Ah ! les bandits ! les misérables ! Attendez-moi, madame, j'accours. Un homme, un gentleman, un élégant cavalier, venait de paraître et arrêta son cheval devant les deux mauvais drôles. Puis, saisissant une cravache passée dans sa botte, il se mit à les cingler à tour de bras. Infâmes brigands ! misérables ! criait-il, voilà qui vous apprendra à attaquer ainsi une dame.",
      "Mais déjà, comme épouvantés par cette apparition, les deux malandrins avaient enfourché leurs bicyclettes et pédalaient à toute vitesse, emportant la montre et la châtelaine. Alors, l'inconnu descendit de son cheval, jeta la bride sur le rameau d'un arbre et s'approchant de Minnie : Madame, dit-il d'une voix très douce, remettez-vous. Tout danger est, Dieu merci, écarté maintenant.",
      "La jeune Américaine leva la tête et regarda celui qui venait de lui parler. Elle aperçut un homme de haute taille, au visage régulier, avec un grand air de distinction. Encore confuse de sa chute, toute étourdie par la violente secousse qu'elle venait de subir, elle regardait son sauveur avec une gratitude mêlée d'admiration. Elle s'efforça de se relever, mais, trop meurtrie par sa chute, elle ne put se tenir debout et dut se rasseoir sur le tronc d'un arbre. Monsieur, balbutia-t-elle, comment dois-je vous remercier ? Oh ! vous avez sauvé ma vie, et plus encore que ma vie peut-être.",
      "Madame, répondit l'autre, ne parlons pas de remerciements. C'est moi qui rends grâce à mon étoile de ce qu'elle m'a permis de me trouver dans votre voisinage au moment de l'agression. Je frémis en songeant à ce qui aurait pu se passer si j'avais tardé d'arriver. Minnie fondit en larmes. Oh oui, monsieur, fit-elle à travers ses larmes, c'est horrible à quoi j'ai échappé grâce à vous, à votre bravoure, à votre héroïsme. De la main, l'autre fit un geste de protestation. Non, madame, répondit-il, je ne puis accepter ces éloges. Votre indulgence se plaît à exagérer le très minime service que j'ai eu le bonheur de vous rendre. Tout autre à ma place aurait fait de même.",
      "Monsieur, vous avez la modestie du vrai mérite ! s'écria Minnie. Vous vous êtes conduit en héros, vous étiez un contre deux, et vous avez réussi à mettre en fuite ces misérables. Oh ! croyez que je sens profondément quelle dette j'ai contractée envers vous. Donnez-moi votre loyale main et laissez-moi la serrer. Et, saisissant la main de celui qu'elle appelait un héros, elle lui donna un vigoureux shake-hand. L'autre s'inclina, et d'une voix qui, tremblante, paraissait trop émue : Eh bien, madame, puisque vous me jugez avec tant de bienveillance, je demande qu'il me soit permis de porter à mes lèvres cette main si aristocratiquement mignonne. Et sans attendre la réponse, il imprima un baiser sur les doigts de Minnie. Celle-ci rougit et ne parut pas mécontente. Qu'ils sont galants, ces Français, pensait-elle en soi-même.",
      "Madame, reprit l'inconnu avec une nuance cérémonieuse dans la voix, permettez-moi à présent de me présenter d'une façon moins sommaire. Oui, oh ! oui, monsieur, s'écria-t-elle, laissez-moi connaître le nom de mon sauveur. Le galant étranger fit une pause. On eût dit qu'une légère hésitation le retenait, mais ce ne fut qu'un éclair. Bientôt, scandant chaque mot, détaillant chaque syllabe : Je m'appelle le comte Gustave de Pervol, répondit-il. Un comte ? s'écria l'Américaine. Ah ! vous êtes un comte !"
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Informations maritimes",
    "title": "Départs et Arrivées des Paquebots",
    "summary": "État des mouvements maritimes des paquebots de la Compagnie Générale Transatlantique au 4 novembre, concernant les liaisons vers Le Havre, Saint-Nazaire et les Antilles.",
    "paragraphs": [
      "Le paquebot la Bretagne (C. G. T.), venant de New-York, est arrivé au Havre le 4 novembre, à une heure du matin.",
      "Le paquebot Saint-Germain (C. G. T.), venant de Colon et escales, est parti de la Pointe-à-Pitre le 4 novembre pour Santander, Bordeaux et le Havre.",
      "Le paquebot Saint-Germain (C. G. T.) est parti de Colon le 3 novembre pour Saint-Nazaire et escales.",
      "Le steamer Flandre (C. G. T.), venant de Marseille et escales, est arrivé à Fort-de-France le 4 novembre, en route pour Colon et escales.",
      "Le paquebot le Tuile (C. G. T.), venant de Colon et escales, est arrivé à Bordeaux-Pauillac le 4 novembre."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Presse spécialisée",
    "title": "Sommaire de L'Agriculture Nouvelle",
    "summary": "Découvrez le sommaire de L'Agriculture Nouvelle : un tour d'horizon complet des techniques sucrières, viticoles et horticoles, ainsi que les actualités coloniales et législatives pour les agriculteurs de 1899.",
    "paragraphs": [
      "Lire cette semaine dans L'Agriculture Nouvelle, journal politique, agricole et commercial, riche de 16 pages de texte et de gravures.",
      "Agriculture : M. Maurion traite de la production sucrière ; échos agricoles par Albert Berthot. Prévisions du temps. L'Agriculture à l'Exposition universelle par Lucien Cornet. Destruction des sauterelles par J. de Lovera. À la Société nationale d'agriculture.",
      "Viticulture : J. Jouzier écrit sur la multiplication des vignes américaines par métissage, par A. Desmoulins. Lettre du Languedoc. Revue vinicole par G. Battachon. Questions viticoles. Troude, fabrication du cidre (avec figures). Échos viticoles. Pommes et poires à cidre.",
      "Horticulture : Ch. Dallet, les primeurs, fraises recommandées. Fruits et légumes aux Halles. Échos horticoles par A. Dissard. À propos de l'hybridité.",
      "Législation rurale : Léon Levage, questions diverses.",
      "Apiculture : A. Hommeil, provisions d'hiver.",
      "Alimentation : Dr Hector George, boissons acides, limonades et piquettes.",
      "Revue et Nouvelles des Colonies : Eugène Delval, nos ports d'outre-mer. Le numéro : 10 centimes."
    ]
  }
];
