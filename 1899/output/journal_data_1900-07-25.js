// Date: 1900-07-25
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-07-25 (Version Restaurée, 53 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La fausse indigence",
    "summary": "Une critique acerbe des escrocs qui exploitent la charité publique à Paris. Sous des dehors misérables, ces individus discréditent la véritable entraide sociale par leurs simagrées calculées.",
    "paragraphs": [
      "Les plus petits faits portent avec eux leur enseignement. Vous avez pu lire, l'autre jour, que la police avait mis la main sur un escroc d'une espèce particulière. Misérablement vêtu, les yeux caves et les traits tirés, il déambulait par les rues, quand, arrivé près d'un banc, il se laissa choir tout de son long, avec un soupir si lamentable qu'il paraissait le dernier. On s'empressa autour du pauvre homme, on le fit parler, et il avoua qu'il n'avait pas mangé depuis trois jours.",
      "Sur quoi, pris de pitié, les assistants firent une collecte et en remirent le produit au malheureux, qui, pour bien manifester qu'il n'avait pas menti, se rendit aussitôt chez un boulanger du voisinage.",
      "Jusque-là, rien que de normal. Mais un inspecteur de la sûreté, qui avait assisté à la scène, fut pris de défiance. Il suivit notre homme, l'aperçut qui, au détour d'une rue, jetait dans une bouche d'égout le pain dans lequel il mordait naguère à si belles dents, puis qui, parvenu dans un autre quartier, recommençait son petit manège de tout à l'heure, simulait à nouveau l'inanition, s'affaissait sur un banc et, sur les interrogations apitoyées des passants, reprenait l'antienne qui lui avait si bien réussi une première fois.",
      "C'est au dépôt que se dénoua, cette fois, l'habile comédie jouée par notre escroc. Mais combien de comédies semblables ou plus odieuses encore et qui, loin de recevoir le châtiment qu'elles mériteraient, sont au contraire de la part du public l'objet d'une faveur injustifiée.",
      "On évalue à une armée les malandrins qui, dans Paris seulement, spéculent sur les sentiments généreux de leurs concitoyens. Paris est le pays de la charité, disait l'austère Molé il y a près de trois quarts de siècle déjà dans son discours de réception à l'Académie française. Mais il y a charité et charité. Donner est bien, encore faut-il savoir à qui l'on donne. Or, si l'on en croit les spécialistes qui se sont occupés de la question, neuf fois sur dix l'aumône qu'on fait à des inconnus est mal placée et ne sert qu'à encourager l'un des vices les plus odieux qui soient : la fausse indigence, l'hypocrisie de la misère."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "La Main Gauche",
    "summary": "Un dialogue poignant entre deux personnages cherchant à surmonter la précarité. Malgré l'absence de ressources, une étincelle d'espoir subsiste dans le projet d'ouvrir un cours pour élèves.",
    "paragraphs": [
      "Puis, pour un homme, l'inaction est encore plus terrible.",
      "Oh ! je sais, je sais ce qu'il souffre, pauvre papa. Je voudrais seulement le voir plus calme.",
      "Et moi, donc ! j'essaie de le calmer, de lui donner un peu d'espérance, même quand je n'en ai pas.",
      "Comment, alors même que tu n'en as pas ? Qu'y a-t-il donc d'impossible à ce que je désire ? Un local pour recevoir des élèves et établir un cours.",
      "Mais c'est formidable cela, quand on n'a pas un sou, ma pauvre petite chérie.",
      "Qui donc a dit que je ne trouverais pas quelqu'un pour m'aider, pour s'associer avec moi ? J'en ai parlé partout, cela viendra, moi je suis sûre que cela viendra."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Chronique",
    "title": "Revue de la Garde Républicaine",
    "summary": "Le général Mourlan a présidé la revue annuelle de la garde républicaine aux Champs-Élysées, procédant à la remise solennelle de décorations aux officiers et soldats méritants de la gendarmerie.",
    "paragraphs": [
      "M. le général Mourlan, président du comité technique de la gendarmerie, a passé hier la revue annuelle de la garde républicaine.",
      "Cette cérémonie, toujours très suivie des Parisiens, a pour cadre habituel la merveilleuse promenade des Champs-Élysées.",
      "Le général Mourlan, la revue terminée, revient sur ses pas et met pied à terre devant l'entrée principale de l'Exposition. Il s'approche d'un petit groupe d'officiers, de sous-officiers et de soldats, auxquels il distribue des décorations.",
      "Le capitaine Conte et l'adjudant Pradier sont promus chevaliers de la Légion d'honneur et reçoivent l'accolade du général Mourlan, qui remet ensuite une douzaine de médailles militaires."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Social",
    "title": "L'Agitation au Creusot",
    "summary": "La grève au Creusot semble s'essouffler après le refus des revendications ouvrières par M. Schneider. De nombreux ouvriers se résolvent désormais à quitter la ville pour trouver un emploi ailleurs.",
    "paragraphs": [
      "Le Creusot, 25 juillet. Le refus opposé par M. Schneider aux revendications des grévistes, malgré la surexcitation qui semblait exister dans la soirée parmi les esprits, n'a pas donné lieu dans la nuit à de violents incidents.",
      "De nombreux ouvriers ont, paraît-il, résolu, devant les circonstances actuelles, de quitter le Creusot et d'aller chercher du travail ailleurs.",
      "La grève serait donc virtuellement terminée et s'achèverait ainsi par le départ d'un nombre encore inconnu d'ouvriers et par le réembauchage à l'usine du reste des grévistes."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Social",
    "title": "Les troubles de Fougères",
    "summary": "Une crise industrielle majeure à Fougères, causée par l'exode d'une maison de chaussures, déclenche des manifestations ouvrières violentes et une intervention musclée de la troupe.",
    "paragraphs": [
      "Fougères, 25 juillet. Une crise industrielle grave sévit, on le sait, à Fougères, provoquée par l'exode à Paris de la maison Coussin, qui occupait environ huit cents ouvriers.",
      "Cette crise entre dans une période aiguë. Les ouvriers ont parcouru hier la ville avec le drapeau rouge déployé et au chant de la Carmagnole.",
      "Le préfet d'Ille-et-Vilaine, frappé et injurié, se décida, trop tard, à appeler la troupe qui, après les sommations réglementaires, chargea la foule, pendant qu'à l'intérieur de la fabrique les ouvriers brisaient le matériel."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Deux enfants carbonisés",
    "summary": "Un tragique incendie au faubourg du Haut-Pont, à Saint-Omer, a coûté la vie à deux enfants en bas âge, asphyxiés puis carbonisés durant le sommeil de leurs parents, les époux Berthélemy.",
    "paragraphs": [
      "Saint-Omer, juillet. Au faubourg du Haut-Pont, rue de la Tannerie, dans une petite et proprette maison, habitaient les époux Désiré Berthélemy.",
      "La nuit dernière, toute la maisonnée — le père, la mère et leurs deux enfants, âgés de deux et de cinq ans — reposait au premier étage du plus profond sommeil, quand des crépitements sinistres se firent entendre.",
      "Les pauvres petits ont été asphyxiés et leurs cadavres ont été retrouvés affreusement carbonisés."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une vieille femme assassinée",
    "summary": "À la Maisonneuve-en-Saint-Hervé, près de Saint-Brieuc, Mme veuve Eveillard a été retrouvée assassinée sur le seuil de sa porte, victime d'un cambriolage qui a tragiquement mal tourné.",
    "paragraphs": [
      "Saint-Brieuc, 24 juillet. Des personnes qui se rendaient hier matin à leur travail ont trouvé, à la Maisonneuve-en-Saint-Hervé, étendue sur le seuil de sa porte et ne donnant plus signe de vie, une femme de soixante-cinq ans, Mme veuve Eveillard, née Domalain. La malheureuse avait été assassinée.",
      "Le parquet de Saint-Brieuc, avisé, se rendit aussitôt sur les lieux et ouvrit une enquête.",
      "Les résultats qu'elle a donnés jusqu'ici permettent de reconstituer ainsi les péripéties du crime : pendant l'absence de Mme Eveillard, des rôdeurs pénétrèrent chez elle dans l'intention de voler."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "Les événements de Chine",
    "summary": "Selon M. Macartney, les diplomates à Pékin seraient sains et saufs mais potentiellement retenus en otages. Le corps expéditionnaire français entamera bientôt sa marche sur la capitale.",
    "paragraphs": [
      "La dépêche la plus importante reçue dans la journée d'hier est celle du conseiller de la légation britannique à Pékin, M. Macartney, annonçant que les légations étaient sauves et allaient se mettre en route pour Tien-Tsin.",
      "Les ministres seraient donc vivants ; mais dans quelle condition se trouvent-ils actuellement ? Il semble assez probable que, sous prétexte de les protéger, les Chinois se soient assurés de leurs personnes et les détiennent comme otages.",
      "On annonce, en effet, que le corps expéditionnaire commencera, vers la fin du mois, sa marche sur Pékin."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Social",
    "title": "Souscription pour les soldats en Chine",
    "summary": "L'Association des Dames françaises a récolté 40 681 francs en cinq jours afin de soutenir les combattants français malades ou blessés sur le théâtre d'opérations en Chine.",
    "paragraphs": [
      "La souscription ouverte au 19, rue Matignon, a produit en cinq jours la somme de 40 681 francs.",
      "L'Association des Dames françaises, dès les débuts des hostilités, a envisagé les suites pour les troupes françaises en Chine. La prise de Tien-Tsin et l'organisation d'un corps expéditionnaire permettent maintenant des mesures efficaces pour secourir les malades et les blessés.",
      "L'Association ouvre une souscription dont le produit sera uniquement consacré aux combattants malades ou blessés de l'armée française en Chine et à ceux nécessitant des secours après leur rapatriement."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Militaire",
    "title": "Organisation du corps expéditionnaire en Chine",
    "summary": "Le ministre de la Marine, M. de Lanessan, précise l'organisation du corps expéditionnaire en Chine, composé de deux brigades placées sous le commandement supérieur du général Voyron.",
    "paragraphs": [
      "Le ministre de la Marine, M. de Lanessan, a adressé au général Voyron, commandant en chef des troupes françaises en Chine, une lettre précisant l'organisation du corps expéditionnaire.",
      "La direction des services est confiée notamment au colonel Surlon (état-major), au colonel Lasserre (artillerie), au lieutenant-colonel Legrand (génie), au colonel Régis (ligne d'étape), au médecin en chef Jacquemir (santé) et au commissaire Sainte-Claire Deville (administratif).",
      "Le corps comprendra deux brigades. La 1re brigade, sous le général Frey, est composée de trois régiments d'infanterie de marine et de diverses unités de soutien. La 2e brigade, sous le général Bailloud, comprend un régiment de zouaves, un régiment d'infanterie de ligne, un groupe de batteries de 75 et des troupes du génie et de cavalerie. Les troupes de la 2e brigade partiront probablement entre le 10 et le 20 août."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'incident d'Épinal",
    "summary": "À la suite de l'incident d'Épinal, le général Duchuane a infligé soixante jours d'arrêts de forteresse au capitaine Thibaulot. Le ministre de la Guerre a ordonné le changement d'affectation du chef de corps responsable.",
    "paragraphs": [
      "Le général Duchuane, commandant le 7e corps d'armée, a infligé soixante jours d'arrêts de forteresse au capitaine Thibaulot à la suite de l'enquête ouverte sur l'incident d'Épinal.",
      "Le ministre de la Guerre a décidé que le chef de corps, sous les ordres duquel était placé le capitaine, recevrait une nouvelle affectation. Le ministre estime que cet incident n'aurait pas eu lieu si le chef avait su inspirer à ses subordonnés la conviction que toute incorrection serait sévèrement réprimée."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Accident à bord d'un torpilleur à Lorient",
    "summary": "Lors d'essais en mer au large des Glénans, une avarie sur un torpilleur a provoqué l'éclatement de tubes à niveau. Trois ouvriers de Saint-Nazaire ont été grièvement brûlés par la vapeur et reçoivent des soins à Lorient.",
    "paragraphs": [
      "Lors des essais en mer du torpilleur nouvellement construit aux Chantiers de la Loire, deux tubes à niveau se sont brisés au large des îles Glénan.",
      "La vapeur s'est échappée avec violence, brûlant sérieusement trois ouvriers de Saint-Nazaire : MM. Louis Appert, Gustave Moreau et Baptiste Baron. Ils sont actuellement soignés à Lorient."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Arrivée de l'escadre du Nord à Brest",
    "summary": "L'escadre du Nord est arrivée ce matin dans la rade de Brest. L'amiral Ménard a été salué par le cuirassé Masséna et a immédiatement rendu visite à l'amiral Barrera, préfet maritime.",
    "paragraphs": [
      "L'escadre du Nord a mouillé en rade de Brest ce matin à huit heures. La frégate Iphigénie a salué le pavillon de l'amiral Ménard, tandis que le cuirassé Masséna répondait par trois coups de canon.",
      "L'amiral Ménard s'est aussitôt rendu à terre pour rendre visite à l'amiral Barrera, préfet maritime."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Essais d'un destroyer à turbine",
    "summary": "Suite au lancement du premier torpilleur français à turbine, l'amirauté anglaise a testé le destroyer Viper, qui a atteint 36 nœuds. La propulsion par turbine élimine les vibrations incommodantes dès seize nœuds.",
    "paragraphs": [
      "Suite au lancement au Havre du torpilleur n° 145, premier navire français équipé d'une turbine, l'amirauté anglaise a procédé avec succès aux essais du nouveau destroyer Viper.",
      "Le Viper a atteint une vitesse maximale de 36 nœuds, avec une moyenne de 36,589 nœuds. Ce système de propulsion supprime les vibrations habituelles au-delà de seize nœuds, offrant une navigation d'une fluidité remarquable."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Légion d'Honneur",
    "title": "Promotions et nominations dans l'ordre de la Légion d'honneur",
    "summary": "Un récent décret officialise diverses nominations et promotions dans l'ordre de la Légion d'honneur. M. Bellet, président de la cour d'appel d'Alexandrie, est notamment promu au grade de commandeur.",
    "paragraphs": [
      "Par décret, rendu sur le rapport du ministre des Affaires étrangères, plusieurs personnalités ont été promues ou nommées dans l'ordre de la Légion d'honneur.",
      "M. Bellet, président de la cour d'appel d'Alexandrie, est nommé commandeur. Un nombre important d'officiers et de chevaliers, issus tant des rangs de la diplomatie que de l'administration coloniale, ont également été distingués."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "La Guerre",
    "title": "Nouvelles du conflit en Afrique du Sud",
    "summary": "Le général Rundle engage le combat près de Rooi Krantz. Lord Roberts confirme la jonction des troupes britanniques à Rustenburg, tandis que les épouses des chefs boers sont contraintes de quitter Pretoria.",
    "paragraphs": [
      "Le général Rundle a soutenu un engagement contre les Boers le 19 juillet, les troupes anglaises ayant pris position à proximité de Rooi Krantz.",
      "Lord Roberts télégraphie que le général Methuen a dispersé les Boers au col d'Olifant, permettant le secours de Rustenburg et la jonction effective avec les forces du général Baden-Powell.",
      "Le général Bruce Hamilton s'est rendu maître de la position de Spitzkop. Par ailleurs, des dépêches signalent le départ forcé de Pretoria des épouses de Kruger, Botha et Lucas Meyer."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles de l'Étranger",
    "title": "Démission du roi Milan de Serbie",
    "summary": "À Carlsbad, le roi Milan de Serbie exprime ses réserves sur les fiançailles du roi Alexandre et adresse sa démission officielle de ses fonctions de commandant en chef de l'armée serbe.",
    "paragraphs": [
      "Le roi Milan a exprimé ses regrets concernant les fiançailles du roi Alexandre, tout en conservant une grande réserve quant aux conséquences politiques de cet événement.",
      "Le roi Milan a transmis sa démission du poste de commandant en chef de l'armée serbe après avoir pris connaissance de cette nouvelle à Carlsbad."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Nouvelles de l'Étranger",
    "title": "Délivrance de Coumassie (Pays des Achantis)",
    "summary": "Le colonel Wilcox annonce la libération de la garnison de Coumassie. Après avoir dispersé les rebelles le 15 juillet, les troupes ont évacué les réfugiés sans rencontrer de résistance.",
    "paragraphs": [
      "Le colonel Wilcox a transmis un rapport officiel sur la délivrance de Coumassie. Après avoir détruit le camp des rebelles le 15 juillet, le colonel a libéré la garnison et procédé à l'évacuation d'un grand nombre de réfugiés sans subir d'opposition lors de sa retraite."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Les Tribunaux",
    "title": "Procès de Max Régis",
    "summary": "Le procès de Max Régis s'ouvre sur les témoignages des autorités d'Alger relatant les troubles de septembre et la saisie d'armes à la villa anti-juive, des faits contestés par l'accusé.",
    "paragraphs": [
      "L'audition des témoins a débuté dans le cadre du procès de Max Régis. Le commissaire central d'Alger a relaté les manifestations du 20 septembre à Mustapha, qualifiant l'attitude de l'accusé de provocatrice.",
      "Plusieurs commissaires de police ont détaillé les troubles survenus, les dégâts causés aux magasins israélites et la saisie d'armes à la villa anti-juive. L'accusé conteste vivement ces faits, tandis que la défense dénonce des manœuvres inspirées par des rancunes personnelles."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Condamnation aux assises de Seine-et-Oise",
    "summary": "Félix Vaugeois, menuisier de 34 ans, a été condamné par la cour d'assises de Seine-et-Oise à huit années de réclusion criminelle pour avoir tenté d'assassiner son épouse à Saint-Germain-en-Laye.",
    "paragraphs": [
      "Félix Vaugeois, menuisier âgé de 34 ans, a été condamné à huit ans de réclusion par la cour d'assises de Seine-et-Oise pour tentative d'assassinat sur la personne de son épouse à Saint-Germain-en-Laye."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "À l'Exposition",
    "title": "Difficultés liées à la chaleur et vie à l'Exposition",
    "summary": "La canicule sévit dans les galeries de l'Exposition. Tandis que les exposants s'ingénient à supporter la chaleur, la question du port du coutil léger pour les gardiens, étouffant sous leur drap, devient urgente.",
    "paragraphs": [
      "La chaleur intense rend la situation pénible dans certaines galeries de l'Exposition. Les exposants, pour lutter contre cette température accablante, tentent de se protéger par des moyens rudimentaires et ont dû, par force, adopter des tenues simplifiées.",
      "Les gardiens, sanglés dans leur uniforme de drap réglementaire, souffrent également de cette fournaise. Il est vivement suggéré de les autoriser, sans plus tarder, à porter une tenue de coutil plus légère et adaptée à la saison."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "À l'Exposition",
    "title": "Pavillon de l'Inde française",
    "summary": "Inauguration du pavillon de l'Inde française : une architecture inspirée des temples brahmaniques de Lahore abritant les richesses artisanales et le savoir-faire des écoles professionnelles de Pondichéry.",
    "paragraphs": [
      "Le pavillon de l'Inde française a ouvert ses portes au public. Inspiré d'un temple brahmanique des environs de Lahore, il expose de nombreux produits artisanaux, des sculptures raffinées et des modèles de travaux réalisés par les écoles professionnelles de Pondichéry, témoignant ainsi de l'activité industrielle croissante de nos possessions lointaines."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "À l'Exposition",
    "title": "Incendie au pavillon de la Martinique",
    "summary": "Un début d'incendie a été constaté hier soir dans les sous-sols du pavillon de la Martinique. La piste criminelle est envisagée, le feu ayant pris dans des caisses de paille entreposées près d'alcools.",
    "paragraphs": [
      "Un incendie s'est déclaré hier soir dans les sous-sols du pavillon de la Martinique, situé au Trocadéro. Les pompiers sont intervenus promptement pour éteindre le feu ; celui-ci semblait avoir été allumé volontairement dans des caisses de paille, alors même que des fûts d'alcool étaient entreposés à proximité immédiate."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Social",
    "title": "Retards de paiement des gardiens de la paix",
    "summary": "Le paiement des indemnités des gardiens de la paix affectés à l'Exposition universelle accuse un retard préoccupant. Malgré les interventions de M. Lépine, cette carence administrative indigne les agents.",
    "paragraphs": [
      "Une situation préoccupante se développe concernant le règlement des indemnités dues aux gardiens de la paix affectés au service de l'Exposition universelle. Des dizaines d'indemnités demeurent en souffrance, et ce retard est particulièrement préjudiciable pour les stagiaires.",
      "Le préfet de police, M. Lépine, a bien invité les officiers à effectuer les avances possibles, mais l'incurie administrative persistante menace de provoquer un scandale regrettable au sein du corps."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Nouvelles Coloniales",
    "title": "Quarantaine à bord du Ville-de-Pernambouc",
    "summary": "Le paquebot Ville-de-Pernambouc est en quarantaine à Pauillac après des décès suspects. L'arrivée du vapeur Macina en provenance du Sénégal souligne la gravité de l'épidémie sévissant dans ces régions.",
    "paragraphs": [
      "Le paquebot Ville-de-Pernambouc, en provenance de la côte occidentale d'Afrique, a été placé en quarantaine à Pauillac suite au décès de trois passagers, dont l'un des suites de la fièvre jaune, survenu durant la traversée.",
      "Un autre vapeur, le Macina, est attendu prochainement avec des passagers revenant du Sénégal, alors que des ordres de rapatriement ont été donnés en raison de l'intensité du fléau qui sévit actuellement dans cette région."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Faits Divers",
    "title": "Maison écroulée à Liège",
    "summary": "Un terrible accident s'est produit rue Sainte-Marguerite à Liège : l'effondrement d'une maison en travaux a enseveli quatre enfants. L'un d'eux est dans un état désespéré.",
    "paragraphs": [
      "Un accident tragique a eu lieu rue Sainte-Marguerite à Liège. Une maison s'est écroulée lors de travaux, ensevelissant quatre enfants qui jouaient au rez-de-chaussée. L'état de l'un d'eux est considéré comme désespéré."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Informations diverses",
    "summary": "Le shah de Perse attendu à Paris, assouplissement de la tenue des facteurs face à la canicule et proclamation des lauréats du concours général : tour d'horizon des nouvelles du jour.",
    "paragraphs": [
      "Le shah de Perse est attendu à Paris samedi prochain pour une visite de dix jours.",
      "Le sous-secrétaire d'État aux Postes et Télégraphes autorise les facteurs, en raison de la canicule, à porter la veste de toile écrue.",
      "Les lauréats du concours général pour Paris ont été annoncés, dont M. Gaibrun en mathématiques spéciales et M. Carrier en philosophie."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Chronique",
    "title": "Le progrès",
    "summary": "De la flèche lancée par nos aïeux gaulois à la fulgurance du télégraphe sans fil et du téléphone, l'humanité a accompli un bond magistral vers la modernité technique.",
    "paragraphs": [
      "Nos aïeux, les Gaulois, lançaient des flèches contre le ciel indifférent à leurs colères. Nous lui transmettons aujourd'hui nos ordres par le télégraphe sans fil ou le téléphone. C'est beau, le progrès."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Complot imaginaire contre le ministre de Chine",
    "summary": "Des rumeurs de complot contre le ministre de Chine à Paris ont circulé. Il apparaît qu'il s'agissait d'une simple vengeance de deux mendiants éconduits par la légation.",
    "paragraphs": [
      "Le Secolo de Milan publie une information relative à un complot ourdi contre Yu-Keng, le ministre de Chine à Paris. Six individus, deux Chinois, trois Français et un Hollandais, devaient s'introduire dans l'hôtel de légation et assassiner le ministre.",
      "L'affaire fut découverte et une plainte déposée au commissariat de police. Devant le Palais, on paraît ignorer cette affaire, dont le service de la sûreté n'a pas eu à s'occuper.",
      "Voici les renseignements que nous avons recueillis : il y a un mois, deux Chinois, pauvres diables, se présentaient à la légation de Chine et un secours leur fut refusé. Les miséreux, éconduits, manifestèrent leur mécontentement en proférant des menaces contre le ministre.",
      "Quelques jours après, le baron, ex-capitaine de vaisseau de la marine italienne et secrétaire particulier de Yu-Keng, avisa de ce fait M. Mourgues, commissaire de police. On rechercha les deux Chinois, mais on ne put découvrir leur retraite."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le guet-apens du passage Saulnier",
    "summary": "Trois ressortissants américains ont été arrêtés après avoir tenté de rançonner deux tailleurs parisiens dans un appartement du passage Saulnier à l'aide d'armes à feu.",
    "paragraphs": [
      "Deux tailleurs du quartier du Faubourg-Montmartre, MM. Auguste M. et Adolphe C., passaient vers minuit dans la rue Bergère quand deux grandes et fortes négresses, s'approchant d'eux, leur demandèrent en baragouin, moitié français et moitié anglais, de leur indiquer leur chemin pour se rendre à leur hôtel, passage Saulnier.",
      "Très complaisants, MM. M. et C. les conduisirent jusqu'à la porte de leur demeure. Là, les deux femmes, pour les remercier, leur offrirent de venir prendre une tasse de thé. M. et son ami acceptèrent.",
      "À peine la porte de la chambre se refermait-elle sur eux qu'un véritable coup de théâtre se produisit : les deux négresses, armées l'une d'un revolver, l'autre d'un fer à repasser, se plantèrent devant les tailleurs et les menacèrent de les tuer s'ils ne versaient immédiatement une somme de 500 francs pour prix de leur visite.",
      "MM. M. et C. n'avaient en leur possession qu'une trentaine de francs. Comme ils parlementaient, l'une des négresses revint avec un nègre taillé en hercule. Le trio recommença à menacer les deux tailleurs pour obtenir la somme réclamée.",
      "M. M., pour en finir, pria le nègre et l'une de ses compagnes de se rendre avec lui chez son père, habitant le faubourg Montmartre, où on leur verserait les 500 francs. Le nègre et l'une des négresses consentirent, tandis que M. C. restait enfermé sous la garde de la troisième négresse, armée d'un revolver.",
      "Une fois dans la rue, M. M. fit arrêter ses deux compagnons par des gardiens de la paix. D'autres agents allèrent ensuite délivrer M. C. et procédèrent à l'arrestation de sa surveillante.",
      "Amenés chez M. Archer, commissaire de police du quartier du Faubourg-Montmartre, les auteurs de ce guet-apens ont été reconnus pour être originaires de l'État d'Ohio : Mary Jons, Joséphine Whitney et James Broody. Il a été établi que les malfaiteurs, qui habitent Paris depuis le 1er mai, ont réussi à dévaliser bon nombre de personnes. Le nègre et les négresses ont été envoyés au dépôt."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Faux Billets de Banque",
    "summary": "La police a démantelé un atelier clandestin à Vaugirard où deux individus fabriquaient de faux billets brésiliens. Une seconde enquête poursuit un graveur spécialisé dans la falsification de billets de cent francs.",
    "paragraphs": [
      "Nous avons annoncé, il y a quelques jours, l'arrestation de deux individus, Artuitel et Massard, qui fabriquaient dans leur domicile, rue Cervantes, à Vaugirard, de faux billets de banque du Brésil.",
      "En vertu d'une commission rogatoire de M. Joly, juge d'instruction, MM. Hamard, sous-chef de la sûreté, Desjardins, expert en héliogravure, et Duval, expert en produits chimiques, se sont rendus hier rue Cervantes et ont procédé à la saisie de presses, appareils photographiques, clichés, produits chimiques, ainsi qu'à des essais de gravures se rapportant à la fabrication des faux billets.",
      "Une autre affaire de falsification de billets fait également l'objet d'une enquête. L'un des coupables, un nommé V., ouvrier graveur, fabriquait et mettait dans la circulation des billets de banque de cent francs assez bien imités. M. de Cosnac, juge, est chargé de l'instruction. Un mandat d'amener a été lancé et une perquisition aura lieu près de Jouy-en-Josas."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Forfait Intervenu",
    "summary": "Un ouvrier sellier, M. Charles Robe, a été grièvement blessé en tentant de s'interposer dans une rixe boulevard Ornano. L'agresseur, Jean Rigaud, a été appréhendé après avoir tenté de se cacher dans un débit de vins.",
    "paragraphs": [
      "Hier soir, vers onze heures et demie, M. Charles Robe, âgé de vingt-huit ans, ouvrier sellier, regagnait son domicile boulevard Ornano, lorsqu'à l'angle de la rue des Portes-Blanches, il aperçut deux individus qui se querellaient. M. Charles Robe s'approcha pour s'interposer.",
      "Il eut bientôt à se repentir de sa tentative de réconciliation, car l'un des deux hommes retourna sa fureur contre l'ouvrier sellier, lui assénant un violent coup de tête qui l'envoya rouler sur le sol, puis l'attaquant à coups de pied et de poing.",
      "Les gardiens de la paix accoururent, mais le coupable prit la fuite et alla se réfugier dans un débit de vins avant d'être arrêté. M. Charles Robe, ensanglanté, a eu la jambe gauche brisée. Son état a nécessité son admission à l'hôpital Lariboisière.",
      "Interrogé par M. Carpin, commissaire de police du quartier de Clignancourt, le coupable, Jean Rigaud, âgé de vingt-cinq ans, a été trouvé nanti d'un couteau-poignard à cran d'arrêt."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Acte de Probité",
    "summary": "Le jeune Lucien Lambert, treize ans, a fait preuve d'une grande honnêteté en restituant un portefeuille contenant une forte somme à la police. La propriétaire américaine a promis une récompense à l'enfant.",
    "paragraphs": [
      "Un enfant de treize ans, Lucien Lambert, demeurant à Bobigny, trouvait hier rue de la Paix un portefeuille contenant cinq billets de cent francs, sept billets de cinquante francs et une lettre de crédit de plusieurs milliers de francs.",
      "Il porta immédiatement sa trouvaille chez M. Blondeau, commissaire de police. Quelques instants plus tard, une Américaine, Mlle Pneuns, de New-York, s'y présentait pour déclarer la perte. Grande fut sa joie en retrouvant intacte la somme. Elle a immédiatement demandé l'adresse de l'honnête enfant pour lui porter une récompense."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "La Chaleur : bilans des victimes",
    "summary": "La canicule sévit violemment dans la capitale et sa banlieue, causant plusieurs décès par insolation. Plusieurs ouvriers ont succombé à la chaleur intense lors de leurs déplacements ou sur leurs lieux de travail.",
    "paragraphs": [
      "Les accidents causés par la chaleur ont été nombreux hier. Une femme d'une cinquantaine d'années est décédée boulevard Barbès. À Villeneuve-la-Garenne, le pêcheur Jules Traverser, âgé de trente-quatre ans, a été frappé d'insolation et est mort quelques minutes après.",
      "À la Garenne-Colombes, Mme Elise Davaux, cinquante-huit ans, est morte durant son transport à l'hôpital. À Nanterre, un ouvrier terrassier, Ernest Sewolles, a été trouvé mort. Un ouvrier brasseur, Julien Marton, a succombé sur le cours Marigny à Vincennes. Enfin, à Juvisy, un ouvrier mégissier, Louis Charpentier, a été trouvé mort sur la route nationale n° 7."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Exposition",
    "title": "À l'Exposition",
    "summary": "Le banquet de l'architecture navale s'est tenu avec faste à la Tour Eiffel. Le Stéréorama mouvant s'affirme, de l'avis général, comme l'attraction la plus artistique et originale de l'Exposition universelle.",
    "paragraphs": [
      "Hier a eu lieu, au restaurant de la première plate-forme de la Tour Eiffel, le banquet de l'architecture navale, présidé par notre ministre de la Marine, M. de Lanessan. Beaucoup de monde et beaucoup d'entrain.",
      "Décidément, tout le mouvement se porte vers la Tour. Aujourd'hui, on peut décerner la palme au Stéréorama mouvant comme la plus réussie, la plus artistique, la plus originale entre toutes. C'est une des curiosités de l'Exposition qu'il faut avoir vue."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Arts",
    "title": "Les Concours du Conservatoire",
    "summary": "Le Conservatoire a clôturé ses concours publics des classes d'opéra. Sous la présidence de M. Théodore Dubois, le jury a récompensé de nombreux élèves dans une ambiance calme et régulière.",
    "paragraphs": [
      "Le concours public des classes d'opéra, qui a eu lieu hier au Conservatoire, a été beaucoup plus calme que le concours de la veille. Le jury, présidé par M. Théodore Dubois, a décerné les récompenses à MM. Bourbon, Ridden, Dubois, Adéma pour les hommes, et aux Mlles Grandjean, Mellot, Cesbron, Julien, Demongeot pour les femmes.",
      "Neuf nominations sur treize concurrentes. On ne peut pas accuser le jury de sévérité. Les deux premiers prix d'hommes sont bien décernés. Pour les femmes, Mlle Cesbron, qui avait eu le premier prix de chant, n'obtient qu'un premier accessit."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Dernière Heure",
    "title": "Les événements de Chine",
    "summary": "De nouveaux télégrammes confirment que M. Pichon est en vie. Washington exhorte le gouvernement chinois à garantir la sécurité et la libre communication des légations étrangères en Chine.",
    "paragraphs": [
      "M. le ministre des Affaires étrangères a reçu un télégramme de notre consul général à Shanghaï, daté du 23 juillet : « Li-Hung-Chang vient de m'affirmer que M. Pichon est vivant. Il a consenti à lui transmettre un message de moi pour lequel il demande une réponse dans les cinq jours. »",
      "Washington, 24 juillet : Voici la réponse faite par M. McKinley à la dépêche de l'empereur de Chine. Il exhorte le gouvernement chinois à donner l'assurance publique que les ministres étrangers sont vivants, à les mettre en libre communication avec leurs gouvernements et à permettre une coopération avec les autorités chinoises pour la protection des légations."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de train en Angleterre",
    "summary": "Un grave accident ferroviaire est survenu en Angleterre : l'express de Manchester a déraillé à l'embranchement d'Ambers Wood-East, causant plusieurs décès et blessés.",
    "paragraphs": [
      "Londres, 24 juillet : L'express de Manchester est tombé ce soir du remblai à l'embranchement d'Ambers Wood-East. Tous les wagons ont suivi la locomotive. Le bilan fait état de cinq tués et d'un grand nombre de blessés."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Sports",
    "title": "Courses : Résultats du mardi 24 juillet",
    "summary": "La journée de courses du 24 juillet a été marquée par les victoires notables de Sombrun, Fadette et Sans Souci II, lors d'une réunion sportive bien disputée.",
    "paragraphs": [
      "La réunion a très bien commencé. Sombrun a gagné le prix de l'Aude. Heal a battu Prélat et Ragot dans le prix du Roussillon. Le prix de l'Hérault a été disputé entre Fadette et Billet Doux, Fadette l'emportant d'une courte tête. Engoulevent a gagné le prix de Cerbère. Sans Souci II a gagné le prix Patriarche, et Crabe le prix de la Cerdagne."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans la banlieue",
    "summary": "La banlieue parisienne a été le théâtre d'une série d'incidents tragiques : accidents de la voie publique, tentatives de suicide, altercations violentes et plusieurs arrestations de malfaiteurs.",
    "paragraphs": [
      "Boulogne-sur-Seine : Un individu s'est jeté dans la Seine et a été secouru. Un boulanger, M. Louis Berthier, a été gravement blessé en descendant d'un tramway.",
      "Suresnes : Deux ouvriers charpentiers sont tombés dans la Seine après une dispute et ont été repêchés par un pêcheur.",
      "Villeneuve-la-Garenne : M. Ernest Vincent s'est suicidé avec son fusil de chasse.",
      "Gennevilliers : Un jeune garçon de treize ans, Alexis Luveau, a blessé gravement sa sœur de huit ans en manipulant une carabine.",
      "Aubervilliers : Une violente bagarre a éclaté à la sortie d'un bal, faisant un blessé par balle, Simon Muller. Hector Groswiller a été arrêté.",
      "Saint-Denis : Guillaume Zirieger a été arrêté alors qu'il tentait de se jeter dans le canal.",
      "Plaine-Saint-Denis : Le charretier Albert Pillon a été blessé par une ruade de son cheval.",
      "Vincennes : Louis Buissain, ancien aliéné, a été arrêté alors qu'il venait chercher une lettre à la poste.",
      "Saint-Maurice : Des agents de la paix ont été agressés par des baigneurs dans la Marne.",
      "Joinville-le-Pont : Des mariniers ont retiré le corps d'un homme noyé, nommé Louis Bernard.",
      "Montrouge : M. Louis Hérouard s'est suicidé par empoisonnement.",
      "Malakoff : Trois repris de justice, Louis Lebland, Eugène Gauthier et Jean-Marie Mouxel, ont été arrêtés après une série de vols.",
      "Livry : Deux enfants de neuf ans ont été arrêtés pour avoir tenté d'incendier une usine.",
      "Chartrouges et Leudon : Les églises ont été cambriolées."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Programme de la 3e matinée littéraire de la Comédie-Française",
    "summary": "La Comédie-Française organise sa 3e matinée littéraire le 28 juillet au Trocadéro, consacrée à Corneille et Racine. Au programme : extraits du Cid, de Bérénice et des Plaideurs interprétés par les grands sociétaires.",
    "paragraphs": [
      "Voici le programme de la 3e matinée littéraire et dramatique de la Comédie-Française, consacrée à Pierre Corneille et à Jean Racine, qui sera donnée samedi prochain 28 juillet, à deux heures et demie, dans la salle des Fêtes du Trocadéro.",
      "Le Cid, tragédie en cinq actes de Corneille, scène jouée par M. Mounet-Sully et Mme Adeline Dudlay.",
      "Bérénice, tragédie en cinq actes de Racine, 1er acte, MM. Paul Mounet, Jacques Fenoux, Mmes Bartet, Delvair.",
      "Les Plaideurs, comédie en trois actes, en vers de Racine (1er acte), MM. Coquelin cadet, Boucher, J. Truffier, Leloir, Pierre Laugier, Joliet, Mmes Muller, Amel.",
      "Poésies de Corneille et Racine, dites par MM. Worms, Silvein, Albert Lambert fils, Mmes Moreno, Delvair, Segond-Weber."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "La tournée de l'Aiglon",
    "summary": "Après un bref séjour à Paris, la troupe de l'Aiglon, interprétant le chef-d'œuvre d'Edmond Rostand, reprendra sa tournée nationale le 1er août, avec une première représentation prévue à Nantes.",
    "paragraphs": [
      "La tournée de l'Aiglon n'aura pas eu de longues vacances. Rentrés à Paris le 17 juillet, les vaillants interprètes de l'œuvre admirable de M. Edmond Rostand repartiront dès le 1er août pour Nantes et visiteront ensuite les principaux casinos de France."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Incident au théâtre de la République",
    "summary": "Suite à la blessure de Mme Lemonnier durant une représentation de « La Fille des Chiffonniers », le théâtre de la République est contraint de suspendre ses spectacles jusqu'à samedi prochain.",
    "paragraphs": [
      "Au théâtre de la République, Mme Lemonnier s'étant blessée en dansant les entrechats de la mère Moscou dans la Fille des Chiffonniers, les représentations de ce drame si amusant seront interrompues jusqu'à samedi."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Théâtre à Trouville",
    "summary": "Le Salon de Trouville a inauguré ses soirées théâtrales avec une représentation de Lakmé, réunissant nouveaux talents et habitués sous les yeux de personnalités telles que le maharadjah de Khapurthala.",
    "paragraphs": [
      "C'est par une représentation superbe de Lakmé qu'ont débuté les soirées théâtrales du Salon de Trouville. La salle entière a fait fête aux nouveaux artistes Mlle Estelle Dreux et M. Delmas ainsi qu'aux anciens pensionnaires aimés des abonnés, MM. Desmet et Cadiot.",
      "Parmi les derniers arrivés à Trouville, Son Altesse royale le maharadjah de Khapurthala, avec sa suite, et le baron Arthur de Rothschild."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Concerts et Divertissements",
    "title": "Activités au Casino de Paris",
    "summary": "Le Casino de Paris propose un cadre rafraîchissant pour le public, qui peut découvrir les performances athlétiques de Sandow et la chasse à courre de la meute d'Yvan Tschernoff.",
    "paragraphs": [
      "L'immense hall du Casino de Paris est si vaste que, quelle que soit la foule qui s'y presse, on y respire à l'aise grâce à l'aération parfaite et aux blocs de glace fleuris.",
      "Les intéressants travaux de Sandow et l'amusante chasse à courre exécutée par la meute d'Yvan Tschernoff y attirent tous les étrangers."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "La Demoiselle de chez Maxim",
    "summary": "La célèbre bouffonnerie « La Demoiselle de chez Maxim » approche de sa 200e représentation et continue de déchaîner le rire du public parisien avec son succès ininterrompu.",
    "paragraphs": [
      "La Demoiselle de chez Maxim approche à grands pas de sa 200e représentation. L'extravagante bouffonnerie continue et continuera encore longtemps à déchaîner le fou rire."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Faits Divers",
    "title": "Témoignage sur le Charbon de Belloc",
    "summary": "Un témoignage édifiant sur les bienfaits du Charbon de Belloc : un malade, épuisé par de graves troubles digestifs, retrouve la santé et l'appétit grâce à ce remède après l'échec des traitements classiques.",
    "paragraphs": [
      "M. Perchal, l'un des premiers commis d'une des plus hautes maisons de commerce de Paris, était atteint, depuis quelques années, d'un mal sérieux. « J'avais, dit-il, de fortes coliques et une diarrhée épouvantable, accompagnée de beaucoup de gaz. Je rendais, avec les matières fécales, des glaires, du sang et des matières blanchâtres. Je ne digérais presque plus rien. »",
      "« J'étais d'une grande faiblesse et je maigrissais de plus en plus. J'avais essayé de bien des remèdes : des purgations, des saignées, des bains, de la diète. Rien n'avait pu me guérir. Abandonné de tous et désespéré, je n'attendais plus que la mort. »",
      "« Sur le conseil d'un ami, je pris de la poudre de Charbon de Belloc. Trois ou quatre jours plus tard, je me sentais un peu mieux et pus digérer une côtelette de mouton, ce que je n'avais pas pu faire depuis bien des mois. Huit jours après, ma diarrhée cessa enfin. C'était la guérison. Du moment que je pus manger et que la diarrhée, dont j'avais tant souffert, ne m'épuisait plus, je repris peu à peu mes forces et, au bout d'un mois, j'étais complètement remis sur pied. »"
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Voix d'outre-tombe (Roman)",
    "summary": "Dans cet épisode, un tumulte éclate alors que Jean Gardère, le bouvier de Lions, fait une irruption terrifiante, prétendant avoir aperçu l'assassin du duc d'Argile.",
    "paragraphs": [
      "Quatrième partie, XIII (suite). Encore un coup, un grand tumulte se fit au dehors, des cris horribles retentirent, et la porte, brusquement poussée, donna passage à un individu qui gesticulait dans un bouleversement extraordinaire.",
      "« Il est là, hurlait-il, il est là, là ! » Il montrait le lointain derrière lui. Ses yeux étaient arrondis, ses paroles rauques et confuses ne sortaient qu'à grand peine de ses lèvres blanches de peur. C'était Jean Gardère, le bouvier de Lions.",
      "« Qu'avez-vous ? » demanda Gauteret. « Je vous dis que je viens de le voir, lui. » « Lui ? qui avez-vous vu ? » « Lui ! lui ! lui ! l'assassin du duc d'Argile ! » Gabrielle se trouva debout, comme si une décharge électrique l'eût touchée."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Spectacles parisiens",
    "summary": "Actualités théâtrales et circassiennes avec la rentrée de la comédienne Moréna et la grande pantomime aquatique au Nouveau-Cirque.",
    "paragraphs": [
      "À signaler la rentrée applaudie de la jolie Moréna.",
      "Au Nouveau-Cirque, aujourd'hui, matinée à deux heures et demie, avec la Chasse au sanglier, grande pantomime équestre et nautique ; les Frediani présentent leurs jeux icariens à cheval."
    ]
  },
  {
    "id": 50,
    "page": 4,
    "category": "Santé",
    "title": "L'Eau déperditrice du naturaliste Stowe",
    "summary": "Face aux dangers des médicaments amincissants, le naturaliste Stowe propose son Eau déperditrice, à base d'algues du Pacifique, une solution externe saluée par la Société de Médecine.",
    "paragraphs": [
      "L'autorité a pris dernièrement des mesures rigoureuses contre la vente de divers médicaments internes destinés à faire maigrir. Il était temps. Chaque jour, des accidents graves, souvent mortels, se produisaient ; c'était devenu un véritable assassinat légal.",
      "Et pourtant, voici longtemps que le public était mis en garde par les beaux travaux d'un spécialiste éminent, le naturaliste Stowe. Celui-ci, en effet, a démontré, à maintes reprises, que tout traitement interne de l'obésité est meurtrier et que la seule médication rationnelle et inoffensive doit être rigoureusement extérieure.",
      "C'est en se basant sur ce principe qu'après de patientes études des plantes marines iodées, M. Stowe réussit à produire son Eau déperditrice dont, on le sait aujourd'hui, l'Helminthocorton, algue du Pacifique, forme le principal élément.",
      "La Société de Médecine de France, toujours si prudente, a, pour la première fois, je crois, donné son approbation à ce traitement qui constitue une révolution bienfaisante dans la thérapeutique de l'obésité."
    ]
  },
  {
    "id": 51,
    "page": 4,
    "category": "Sport",
    "title": "Course automobile Paris-Toulouse",
    "summary": "À 3 heures du matin, vingt-sept voituristes, dont MM. de Knyff et Charron, ont pris le départ de la course Paris-Toulouse. Les concurrents visent une vitesse moyenne impressionnante de 70 kilomètres à l'heure.",
    "paragraphs": [
      "Ce matin, à 3 heures, au passage à niveau de Lieusaint, sur la route de Melun, a été donné le départ de la grande course d'automobiles de l'Exposition, Paris-Toulouse et retour.",
      "Les engagés sont au nombre de vingt-sept voituristes, quatorze voiturettistes et trente-cinq motocyclistes. Dans la catégorie des voituristes, nous relevons les noms de MM. de Knyff, Charron, Girardot, Giraud, Hourgières, Levegh, Devrais, de Caters, Jenatzy, Antony, Boson de Périgord, etc.",
      "Le temps de la course oscillera, croyons-nous, entre dix et quatorze heures, ce qui représenterait une moyenne de près de soixante-dix kilomètres à l'heure."
    ]
  },
  {
    "id": 52,
    "page": 4,
    "category": "Sport",
    "title": "Régates de Cancale",
    "summary": "Sous l'égide de l'Union des yachts français, les traditionnelles régates de Cancale se sont tenues avant-hier dans d'excellentes conditions, portées par une légère brise du nord et un ciel dégagé.",
    "paragraphs": [
      "Les régates de Cancale, fameuses dans tout le pays breton, ont eu lieu avant-hier sous le patronage de l'Union des yachts français. Il ventait une petite brise du nord, la mer était calme et bleue, sous un ciel clair."
    ]
  },
  {
    "id": 53,
    "page": 4,
    "category": "Sport",
    "title": "Le concours de ballons",
    "summary": "Les aérostats engagés dans le concours, incluant le Saint-Louis et le Centaure, ont complété leur ascension par des atterrissages réussis dans le secteur compris entre les localités de Nangis et de Mormant.",
    "paragraphs": [
      "Les ballons — le Touring-Club, monté par M. Morot ; le Saint-Louis, monté par M. J. Balsan accompagné de M. et Mme Louis Godard ; le Centaure, M. Henry de La Vaulx ; l'Orient, M. J. Faure ; le Bayard, M. Paul Dartois, accompagné de M. Henry Lachambre ; la Lorraine, M. le vicomte de Castillon ; le Sigurd, M. E. Wagner ; le Franklin, M. Carion, et Pégase, M. Idoux — ont atterri dans la zone Nangis-Mormant."
    ]
  }
];
