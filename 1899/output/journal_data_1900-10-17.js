// Date: 1900-10-17
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-10-17 (Version Restaurée, 34 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Annonces Légales",
    "title": "Société du Petit Parisien",
    "summary": "Information aux actionnaires : le paiement d'un acompte de 25 francs sur le dividende de l'exercice 1900 débutera le 15 novembre à la caisse sociale, rue d'Enghien, pour les titres nominatifs et au porteur.",
    "paragraphs": [
      "Les porteurs de titres de la Société du Petit Parisien sont informés qu'un acompte de 25 francs par action ou par part bénéficiaire, sur le dividende de l'exercice 1900, sera mis en paiement, à partir du 15 novembre prochain, à la caisse sociale, rue d'Enghien.",
      "En conséquence, il sera payé net d'impôt en échange du coupon n° 40 : 25 francs à chaque titre nominatif, 25 francs à chaque titre au porteur."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Éditorial",
    "title": "Les musées communaux",
    "summary": "Plaidoyer pour la création de musées communaux intégrés aux écoles locales. Ces centres de ressources permettraient de conserver les témoignages archéologiques, historiques et naturels de chaque commune française.",
    "paragraphs": [
      "Il y a tout un mouvement aujourd'hui en faveur des musées communaux. Les musées qu'on rêve d'établir auraient pour but de créer dans chaque commune, si petite fût-elle, un centre de renseignements, une manière de bureau d'idées et de faits soigneusement classés qu'on pourrait consulter à toute heure et sans frais d'aucune sorte.",
      "À Paris et dans les grandes villes, on se garde bien de loger dans les mêmes bâtiments les collections artistiques et les collections d'histoire naturelle, l'archéologie et la médecine. Mais la grande majorité des communes françaises ne sont point dans ce cas.",
      "Toutes, heureusement, possèdent une école. Eh bien, c'est cette école qu'il conviendrait d'aménager et d'élargir. L'instituteur ferait tout naturellement office de conservateur, et quant aux objets eux-mêmes, ce serait encore l'instituteur lui-même, aidé de ses élèves et de leurs parents, qui serait chargé de les fournir au fur et à mesure de ses découvertes.",
      "De quels objets se composerait donc ce musée rudimentaire ? Les premiers qu'il conviendrait de se procurer, ce sont les débris historiques trouvés et recueillis dans la contrée, depuis les armes de l'âge de pierre jusqu'aux casques à pointe des soldats prussiens de l'invasion.",
      "Il faut souhaiter qu'un tel état d'esprit prenne fin prochainement. La création des musées communaux y pourvoirait. Mais ce n'est pas seulement le passé, sous sa forme archéologique, qui devrait avoir droit de cité dans ces musées communaux. Le présent aussi y serait représenté. Il faudrait qu'à côté des vieux débris des âges écoulés, on y trouvât des spécimens, aussi bien conservés que possible, de la faune et de la flore communales."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le fruit défendu",
    "summary": "L'état de santé du jeune Henriot se dégrade rapidement. Après une visite médicale, le couperet tombe : l'enfant souffre d'une méningite, plongeant sa mère, Rose-Manon, dans une indicible détresse.",
    "paragraphs": [
      "Un médecin fut appelé dans la matinée. Il examina longtemps Henriot, ne parut pas trop inquiet, prescrivit une ordonnance et condamna l'enfant à garder le lit, promettant de revenir le lendemain. Il ne pouvait encore se prononcer.",
      "La fièvre augmenta. Il avait le visage très rouge. Les yeux brillaient d'un éclat étrange qu'on ne leur avait jamais vu. Pendant toute cette journée, Rose ne s'était pas éloignée du berceau.",
      "La maladie faisait des progrès énormes. Le docteur, triste, enfin se prononça. Il laissa échapper la vérité terrible : une méningite. Quand il fut parti, on eût dit que la foudre venait de tomber sur ceux qui étaient là.",
      "C'était Rose-Manon qui présentait l'image du désespoir le plus intense. Elle répétait tout bas, comme une folle, le mot du docteur : Méningite."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Conseil des ministres",
    "summary": "Réunis à l'Élysée sous la présidence de M. Loubet, les ministres ont validé l'adhésion des puissances à la note française sur la Chine et acté plusieurs nominations diplomatiques à la suite du décès de M. Catusse.",
    "paragraphs": [
      "Les ministres se sont réunis, hier matin, à l'Élysée, sous la présidence de M. Loubet.",
      "Le ministre des Affaires étrangères a annoncé au conseil que toutes les puissances ont adhéré à la note française, et qu'elles l'acceptent comme base des négociations concernant les événements de Chine.",
      "Enfin, M. Delcassé a fait signer un mouvement ayant pour point de départ le décès de M. Catusse, ministre de France à Stockholm, qui est remplacé par M. Marchand, ministre à Belgrade. Le conseil a fixé l'ouverture du Parlement au 6 novembre."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Le travail parlementaire",
    "summary": "À la veille de la reprise parlementaire, cet article appelle les députés à une meilleure organisation du travail afin de privilégier le débat politique global et la discussion urgente du budget.",
    "paragraphs": [
      "Les Chambres sont convoquées pour le 6 novembre ; la vie parlementaire reprendra à bref délai. Il y a un intérêt supérieur à ce que les députés adoptent une méthode de travail leur permettant de ne pas dépenser le capital précieux de leur temps en discussions impuissantes.",
      "Après les vacances, il est certain que des interpellations devront liquider les différends entre le gouvernement et ses adversaires. Il faut souhaiter qu'un débat large et complet sur la politique générale tranche la question de confiance.",
      "La discussion du budget est commandée immédiatement par la date de l'année. Il n'est pas possible, les rapports étant prêts, de retarder les débats sur la loi de finances."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Dépêches",
    "title": "Les ministres à Bizerte",
    "summary": "À Bizerte, les ministres ont procédé à l'inspection de la défense mobile et visité les travaux des nouvelles jetées, accueillis par une foule nombreuse dans une ville richement pavoisée.",
    "paragraphs": [
      "Bizerte, 16 octobre. À une heure, les ministres, accompagnés de leur état-major et de l'amiral Servan, commandant la marine en Algérie, ont procédé à l'inspection de la défense mobile, avant de regagner leur bord pour se préparer à leur entrée officielle dans Bizerte.",
      "La ville est pavoisée et décorée d'un arc de triomphe. La foule est immense. Les troupes de la garnison sont rangées sur la rue longeant le canal. À quatre heures, les ministres arrivent au quai du canal.",
      "Après la revue, les ministres sont partis sur le canot du commandant de la marine pour visiter les travaux des nouvelles jetées et des défenses extérieures."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Dépêches",
    "title": "Les événements de Chine",
    "summary": "Le pouvoir impérial chinois est fragilisé par l'essor de la révolte des réformateurs menée par Kang-Yu-Weï, tandis que les relations diplomatiques avec Berlin semblent s'apaiser.",
    "paragraphs": [
      "L'influence et le prestige de l'empereur et de l'impératrice douairière de Chine semblent être sérieusement compromis. La révolte des réformateurs prend une rapide et considérable extension sous l'impulsion de Kang-Yu-Weï, qui dirige le mouvement.",
      "M. Conger télégraphie que l'empereur de Chine reviendra à Pékin sous la protection des Américains. Par ailleurs, la réponse du gouvernement allemand à la note de M. Delcassé a été expédiée et est conçue dans les termes les plus amicaux."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Double exécution capitale",
    "summary": "Les condamnés Kiffer et Dimaff, auteurs de l'assassinat de deux demoiselles à Richemont, ont été exécutés ce matin à la prison de Metz après le rejet de leur pourvoi en grâce.",
    "paragraphs": [
      "Metz, 16 octobre. Ce matin, à sept heures, a eu lieu à la prison l'exécution des deux condamnés à mort, Kiffer et Dimaff, originaires de Titouville, qui avaient, l'an dernier, assassiné deux vieilles demoiselles à Richemont, en Lorraine.",
      "Le rejet de leur recours en grâce avait été notifié hier matin aux condamnés. Tous deux ont accepté les consolations d'un prêtre. Kiffer et Dimaff sont morts courageusement."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "La mission Blanchet",
    "summary": "Le navire « Le Stamboul » a accosté à Marseille, ramenant les survivants de la mission Blanchet. Le lieutenant Juinot-Gambetta, blessé au cours de l'expédition, est désormais rétabli.",
    "paragraphs": [
      "On mande de Marseille que le Stamboul, ramenant le lieutenant Juinot-Gambetta et M. Dereims, membres de la mission Blanchet, est entré hier dans le port de la Joliette.",
      "Le lieutenant Juinot-Gambetta, blessé au cours de la mission, est aujourd'hui complètement remis. Il n'a pas caché la très vive douleur qu'il a éprouvée à l'annonce de la mort de M. Blanchet."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le naïf territorial",
    "summary": "Un garçon meunier d'Apchon a été appréhendé pour désertion. Il prétendait ignorer l'irrégularité de son absence, ayant suivi les instructions d'un tiers lui ordonnant de partir.",
    "paragraphs": [
      "Aurillac, 16 octobre. La gendarmerie de Riom-ès-Montagnes s'est présentée chez M. Dafayet, meunier à Apchon, pour demander le nommé Louis Soubeyrou, garçon meunier à son service, prévenu d'absence illégale pour ne pas avoir accompli sa période de treize jours au 100e territorial.",
      "« C'est-y possible ! » s'exclama le meunier, « mais il m'a dit que l'on lui avait ordonné de s'en aller. » Soubeyrou se trouvait en état d'absence illégale, tout persuadé que sa conduite n'offrait rien de répréhensible car, à toutes les questions, il ne répondait que par cette phrase : « Mais puisqu'on m'a dit de m'en aller »."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Le Cortège des Vendanges",
    "summary": "Le cortège des Vendanges a offert au Champ-de-Mars un spectacle grandiose. Des chars fleuris représentant les terroirs vinicoles de France et d'ailleurs ont défilé devant une foule conquise jusqu'au Trocadéro.",
    "paragraphs": [
      "Le cortège des Vendanges personnifiait les vins du Rhin avec de belles filles blondes, les chars du Japon ornés de chrysanthèmes et les chars de la Beauce escortés de vignerons mi-paysans, mi-soldats. Successivement sont passés les chars des vins de la Méditerranée, de l'Artois, les Mâconnais, les vignerons limousins et auvergnats, la Russie, la Suisse, les vins du Valais et enfin le Champagne.",
      "Le char du Champagne, vin français généreux, a attiré une ovation enthousiaste avec ses jolies Parisiennes. Le défilé s'est poursuivi avec les chars du Bordelais, de la Bourgogne, des vins du Midi et de l'Algérie.",
      "Parti de la salle des Fêtes, le cortège a fait le tour du Champ-de-Mars avant de se diriger vers le Trocadéro. La foule était dense mais tranquille, saluant le passage des chars malgré quelques difficultés techniques sur la pente du Trocadéro, réglées par l'intervention prompte des agents de M. Lépine.",
      "La dislocation s'est opérée après deux heures de déambulation, alors que les figurants, fatigués mais satisfaits, rentraient à la salle des Fêtes. Le service d'ordre, sous la direction de MM. Lépine, Touny et Orsatti, n'a eu aucun incident à déplorer.",
      "Le soir, les cortèges lumineux ont réédité leur succès devant une foule considérable, avec des chars éclairés à l'électricité, embrasant le décor du Trocadéro et du Château d'Eau."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame familial",
    "summary": "Le petit Henriot, gravement malade, agonise sous les yeux de ses parents. La détresse de Rose face à cette issue fatale ravive les soupçons de Jérôme, son époux, quant à la nature de ses sentiments secrets.",
    "paragraphs": [
      "Le petit Henriot est condamné par la maladie. Rose, épuisée par la fièvre et le chagrin, veille sans relâche sur le berceau de l'enfant auprès de sa mère Marianne et de Jérôme.",
      "Tandis que le petit enfant agonise, des scènes de douleur et de tendresse déchirent la famille. Rose, dans son désespoir, se confie à l'enfant mourant, espérant un miracle malgré l'inéluctable destin.",
      "Jérôme, le père, commence à nourrir des soupçons sur la nature des sentiments de Rose, qui se trahit par ses paroles exaltées. L'enfant se réveille avec un cri de douleur, scellant la détresse de sa mère."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "Mouvement diplomatique",
    "summary": "Le gouvernement a procédé à un remaniement diplomatique, nommant de nouveaux représentants de la France auprès des cours de Suède, de Serbie, de Bulgarie, du Monténégro et de Perse.",
    "paragraphs": [
      "Par décret, plusieurs nominations ont été effectuées : M. Marchand est nommé envoyé extraordinaire et ministre plénipotentiaire auprès du roi de Suède. Le comte de Vauvineux est nommé à Belgrade.",
      "M. de la Bouhère est chargé de l'agence et consulat général de France à Sofia. M. Souhart est nommé à Cettigné et M. Bouagrei à Téhéran."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Voyage du ministre des Travaux publics",
    "summary": "En tournée dans le Sud, M. Pierre Baudin a prononcé à Alès un discours vibrant sur les vertus de la Révolution et la mission démocratique de son ministère, avant de poursuivre ses inaugurations.",
    "paragraphs": [
      "À Alès, M. Pierre Baudin a prononcé un discours saluant le rôle du ministère comme serviteur de la Révolution française et de la démocratie. Il a affirmé sa volonté de poursuivre l'œuvre entreprise par le gouvernement.",
      "Après une inauguration à Mialet, le ministre s'est rendu à Sète où il a été accueilli par les autorités locales."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Actualités internationales",
    "summary": "Entre fiançailles royales aux Pays-Bas, élections britanniques, catastrophe naturelle en Moravie et tensions au Transvaal, l'actualité internationale est marquée par une grande instabilité.",
    "paragraphs": [
      "À La Haye, la reine a annoncé ses fiançailles avec le duc Henri de Mecklembourg.",
      "À Londres, les résultats complets des élections donnent une majorité aux ministériels avec un gain net de deux sièges.",
      "À Prossnitz, en Moravie, l'effondrement de la façade du collège tchèque a causé la mort de sept personnes et fait dix blessés.",
      "À Rome, La Tribuna annonce le massacre d'une colonne de deux cents hommes près du lac Assal, probablement des Français.",
      "Concernant la guerre au Transvaal, Lord Roberts fait état de mouvements de troupes et d'engagements près de Carolina et Middelburg, tandis que le président Krüger s'apprête à quitter le pays."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Chronique",
    "title": "Échos et nouvelles",
    "summary": "Obsèques de M. Adolphe Cochery, visites impériales de Grèce et de Belgique à l'Exposition, nominations au Conseil d'État et polémique sur la vente d'un chef-d'œuvre de Botticelli : le point sur l'actualité.",
    "paragraphs": [
      "Les obsèques de M. Adolphe Cochery, sénateur du Loiret, ont été célébrées hier en présence de nombreuses personnalités politiques venues lui rendre un dernier hommage.",
      "Le roi de Grèce a poursuivi ses visites à l'Exposition universelle et a reçu son fils, le prince Nicolas, arrivé à Paris.",
      "Le roi des Belges, Léopold II, a visité l'Exposition et a parcouru la capitale en voiture.",
      "Plusieurs nominations aux postes de conseillers d'État ont été officiellement annoncées.",
      "La vente d'un tableau de Botticelli, cédé par le prince Mario Chigi à un antiquaire londonien, relance vivement le débat sur la protection du patrimoine artistique italien."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Social",
    "title": "La boisson du soldat",
    "summary": "Le débat sur la ration des troupes se poursuit. Si le vin reste la boisson privilégiée, le cidre est étudié comme alternative économique et hygiénique, adaptée aux spécificités régionales.",
    "paragraphs": [
      "Le débat relatif à la ration de vin, de cidre ou de bière pour les soldats se poursuit. Les lecteurs s'accordent sur le fait que le vin demeure la boisson la plus appréciée, bien que le cidre puisse constituer une alternative économique en période d'abondance.",
      "L'objectif visé par les autorités est de fournir une boisson hygiénique à un coût raisonnable, en évitant les excès et en tenant compte des habitudes régionales."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Justice",
    "title": "La rentrée des cours et tribunaux",
    "summary": "La rentrée judiciaire parisienne est marquée par l'installation solennelle de M. Ballot-Beaupré à la Cour de cassation et de M. Bulot au parquet général, illustrant l'engagement des magistrats envers la République.",
    "paragraphs": [
      "La rentrée judiciaire a eu lieu à Paris. À la Cour de cassation, M. Ballot-Beaupré a prêté serment, soulignant la mission noble de la haute juridiction. Le nouveau procureur général, M. Laferrière, a également pris ses fonctions.",
      "À la cour d'appel, M. Bulot a été installé comme procureur général, affirmant son dévouement aux institutions républicaines et son souhait de concorde entre tous."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Troubles lors des grèves à Chalon-sur-Saône",
    "summary": "Le conseil de guerre de Bourges a ouvert le procès de trois gendarmes impliqués dans les événements de Chalon-sur-Saône. La défense invoque la légitime défense face à une foule particulièrement hostile.",
    "paragraphs": [
      "Le conseil de guerre de Bourges a débuté le procès de trois gendarmes, accusés de coups et blessures ayant entraîné la mort lors des grèves à Chalon-sur-Saône. Les accusés invoquent la légitime défense face à une foule hostile et violente."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Justice",
    "title": "Rentrée de la Cour des Comptes",
    "summary": "La Cour des comptes a tenu son audience solennelle de rentrée, honorée par le discours de M. le procureur général Leproust, qui a rendu un hommage vibrant à MM. de Girardin et Lessoré de Sainte-Roy.",
    "paragraphs": [
      "La Cour des comptes a procédé à son audience solennelle de rentrée.",
      "Le discours d'usage a été prononcé par M. le procureur général Leproust, qui a conclu par l'éloge funèbre de MM. de Girardin et Lessoré de Sainte-Roy, tous deux décédés en cette année 1899."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Justice",
    "title": "Perquisitions au siège de la Ligue antisémitique",
    "summary": "Le procureur de la République ordonne des perquisitions au siège de la Ligue antisémitique, rue de Chabrol, ainsi qu'au domicile des proches de M. Jules Guérin dans le cadre d'une procédure judiciaire rigoureuse.",
    "paragraphs": [
      "Le procureur de la République a décidé de poursuivre la Ligue antisémitique, en vertu des codes, d'après lesquels toute association de plus de vingt personnes ne pourra se former qu'avec l'agrément du gouvernement.",
      "M. Henry Boucard, juge d'instruction, a confié des mandats de perquisition à MM. Cochefert, chef de la Sûreté, et à divers commissaires de police.",
      "Hier matin, le chef de la Sûreté s'est rendu au n° 51 de la rue de Chabrol, où se trouve le siège de l'imprimerie antijuive. Après avoir saisi des listes de la Ligue et divers documents, il a procédé à l'interrogatoire de M. Louis Guérin, frère de M. Jules Guérin.",
      "M. Roy a opéré une perquisition au 10, rue Tholozé, chez Mme Guérin, et M. Chevallier s'est rendu au domicile de M. Amiot, secrétaire général de la Ligue.",
      "Le résultat de ces trois perquisitions a été dûment remis au juge d'instruction, M. Boucard."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits divers",
    "title": "Explosion rue Saint-Lazare",
    "summary": "Une fuite de gaz dans un immeuble de la rue Saint-Lazare, propriété de M. Laferrière, a causé une violente explosion lors d'une inspection. Quatre personnes ont été blessées par le souffle de la détonation.",
    "paragraphs": [
      "Un accident s'est produit hier matin rue Saint-Lazare, dans un immeuble appartenant à M. Laferrière, procureur général à la Cour de cassation. Une fuite de gaz avait été signalée dans une remise inoccupée.",
      "Pour rechercher l'origine de cette fuite, l'inspecteur de la Compagnie du gaz, M. Joseph Battore, accompagné d'un ouvrier plombier et d'un apprenti, a fait usage d'une bougie. Une violente détonation a aussitôt retenti, blessant légèrement quatre personnes.",
      "Les victimes ont reçu des soins immédiats. M. Cornette, commissaire de police du quartier, a immédiatement ouvert une enquête sur les circonstances de cet accident."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits divers",
    "title": "Accident de tramway",
    "summary": "Un tragique accident de tramway électrique survenu avenue Gambetta a gravement blessé M. Alphonse Cordelin. Une enquête est en cours pour établir les responsabilités.",
    "paragraphs": [
      "Dans la soirée d'avant-hier, M. Alphonse Cordelin a été renversé par le tramway électrique n° 19 alors qu'il circulait avenue Gambetta.",
      "Grièvement blessé, il a été transporté d'urgence à l'hôpital Tenon. M. Pelatan, commissaire de police, a ouvert une enquête pour déterminer les responsabilités dans cet accident."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits divers",
    "title": "Cambrioleurs arrêtés",
    "summary": "Une tentative de cambriolage dans un chantier de la rue Martin-Bernard a permis l'arrestation de Maurice Virly et la capture de son complice blessé, Louis Loiena. Une importante saisie de biens volés a été effectuée.",
    "paragraphs": [
      "Une bande de malfaiteurs s'était introduite dans un chantier situé rue Martin-Bernard. Poursuivis par les agents, l'un d'eux, nommé Maurice Virly, a été arrêté, tandis que son complice, Louis Loiena, a été blessé par un coup de revolver avant d'être transporté à l'hôpital Cochin.",
      "Au domicile des individus, le commissaire de police a découvert une importante quantité d'objets provenant de divers vols."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits divers",
    "title": "Cambriolage rue Caillaux",
    "summary": "Trois individus, surpris en flagrant délit par des agents cyclistes alors qu'ils tentaient de fracturer la porte d'une crémerie rue Caillaux, ont été conduits au dépôt de police.",
    "paragraphs": [
      "Quatre agents cyclistes ont surpris, hier matin, trois individus qui tentaient de fracturer la porte d'une crémerie. Les nommés Louis Brault, Louis Martin et Charles Offermann ont été conduits au dépôt par le commissaire de police."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits divers",
    "title": "Repris de justice arrêtés",
    "summary": "Gustave Drouin et Georges Lantier, deux malfaiteurs récidivistes, ont été surpris en flagrant délit au quai de la Gare. Arrêtés par les agents, ils ont été écroués au dépôt sur ordre de M. le commissaire Rocher.",
    "paragraphs": [
      "Des agents de la paix ont surpris, cette nuit, deux malfaiteurs notoires, Gustave Drouin et Georges Lantier, alors qu'ils opéraient le cambriolage d'une propriété sise quai de la Gare. Recherchés activement pour une série de vols commis dans le quartier, les deux individus furent immédiatement appréhendés.",
      "Conduits au commissariat, ils ont été interrogés avant d'être dirigés sur le dépôt par ordre de M. le commissaire Rocher, où ils devront répondre de leurs actes devant la justice."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits divers",
    "title": "Accident de travail au quai d'Orsay",
    "summary": "Un grave accident de travail a eu lieu sur le chantier du quai d'Orsay lors du démontage d'une grue. La rupture d'une chèvre de levage a occasionné des blessures sévères à quatre ouvriers, admis à l'hôpital de la Charité.",
    "paragraphs": [
      "Un grave accident s'est produit hier sur le chantier du quai d'Orsay, à l'occasion des travaux de démontage d'une grue. Par suite de la rupture soudaine d'une chèvre de levage, plusieurs ouvriers ont été violemment projetés au sol.",
      "Les malheureux, nommés MM. Jeannette, Bastard, Pommier et Prilezeanu, ont été promptement transportés à l'hôpital de la Charité pour y recevoir les soins nécessaires. L'enquête préliminaire diligentée sur les lieux a formellement établi que le matériel utilisé se trouvait dans un état de vétusté notoire."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Incidents et accidents dans la périphérie parisienne",
    "summary": "Chronique des accidents et faits divers survenus dans la banlieue parisienne : collisions, agressions, accidents du travail et décès marquent le quotidien des communes entourant la capitale.",
    "paragraphs": [
      "À Boulogne-sur-Seine, le charretier Émile Platet a été écrasé par les roues de sa voiture.",
      "À Puteaux, M. Duflot a blessé sa femme par accident avec son revolver.",
      "À Gennevilliers, une fillette nommée Alexandrine Bardon a été écrasée par une voiture de laitier.",
      "À Saint-Ouen, le vannier Lucien Vorsken a été poignardé lors d'une agression.",
      "À Saint-Denis, Félix Bollan a eu les jambes brûlées par du cuivre en fusion.",
      "À La Courneuve, l'ouvrier Alfred-Lambert Raillard a été tué par le rapide sur la voie ferrée.",
      "À Pantin, le jeune Jules Siere a été grièvement brûlé par un poêle.",
      "À Vincennes, plusieurs jeunes cambrioleurs ont été arrêtés sur mandat d'amener.",
      "À Choisy-le-Roi, M. Jacques Larosse s'est fracturé le crâne après une avarie de bicyclette.",
      "À Étampes, un chef de train nommé Bainac a été tué lors d'une manœuvre.",
      "À Meaux, M. Léon Hilt a été agressé à coups de couteau par deux repris de justice.",
      "À Méry-sur-Oise, M. Lambert, doyen des instituteurs, est décédé.",
      "À Versailles, Mme Walroff, concierge, a avoué avoir volé une somme d'argent."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Départements",
    "title": "Faits divers de province",
    "summary": "À Senlis, le corps d'une inconnue est découvert sur la voie ferrée, tandis qu'à Orvilliers, une enquête est ouverte après le décès suspect de Mme Marie Deplanque, retrouvée morte avec une grave blessure au crâne.",
    "paragraphs": [
      "Aux environs de Senlis, le cadavre d'une femme, dont l'identité n'a pu être établie, a été découvert gisant sur la voie ferrée par les employés des chemins de fer.",
      "À Orvilliers (Oise), le corps de Mme Marie Deplanque a été retrouvé sans vie, présentant une blessure importante au crâne. Les autorités locales ont immédiatement ouvert une enquête afin de déterminer si cette mort tragique résulte d'un acte criminel ou d'un accident fortuit."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Miettes du Bonheur (suite)",
    "summary": "Après avoir entraperçu le jeune Henri, le vieillard est saisi par une ressemblance troublante. Il s'interroge sur un possible lien de parenté, laissant surgir des tendresses occultées par ses rancœurs passées.",
    "paragraphs": [
      "Il l'avait observé à son aise, mais voyant le regard du jeune homme se tourner soudain de son côté, il avait brusquement laissé retomber la draperie qui masquait son corps.",
      "Pas assez vite, pourtant, puisque Henri avait entrevu le vieillard. Mais, tourmenté par ce que son domestique venait de lui annoncer, le jeune homme, tout en ayant conscience que cette physionomie entrevue ressemblait étrangement à une autre dont l'image était gravée en lui, n'avait pas formellement agi.",
      "Après le départ d'Henri, le vieillard s'en alla à son tour. Il murmura : « Oui, c'est bien cela. L'homme qui est venu à Larignies, c'est le même. Mon Dieu, il me semble qu'il y a entre lui et moi des traits communs. Il me semble qu'il est un peu ce que j'étais lorsque j'avais son âge. »",
      "Serait-ce donc possible, serait-ce donc admissible qu'il fût mon fils ? Un tressaillement le secoua. Mon fils, mon fils, répétait-il. Ce mot lui semblait bon, délicieux à prononcer. Et, du fond de lui-même, des tendresses depuis longtemps cachées sous la haine et la rancune se faisaient jour."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Feuilleton",
    "title": "Main Gauche (suite)",
    "summary": "Solange, au sortir d'une nuit sans sommeil, s'apprête à rendre visite à madame Rédal. Déterminée à recouvrer son indépendance malgré un passé douloureux, elle refuse la compagnie de sa fidèle amie Annie pour cette sortie.",
    "paragraphs": [
      "Solange se demandait où aller, son seul chagrin étant de se séparer d'Annie, qu'elle aurait souhaité garder auprès d'elle. On verrait bien. C'est ce qu'elle se disait vers le matin de cette première nuit passée sans trouver le sommeil.",
      "Elle finit par s'endormir pour se réveiller à huit heures. À onze heures et demie, mademoiselle de Boffront et sa dévouée compagne déjeunaient ensemble dans la chambre de la première. À une heure, celle-ci se trouvait prête à partir.",
      "Elle n'emmenait point Annie, bien que celle-ci insistât pour l'accompagner. « Non, ma bonne, il faut que je m'habitue à sortir seule. Souvenez-vous de votre accident. — N'aie pas peur, il ne m'en arrivera pas d'autres. J'étais, ce jour-là, si émue et si malade, me trouvant presque mal dehors. À présent, j'ai bon pied, bon œil, je vous l'assure. »",
      "Solange devait monter en voiture et se faire conduire boulevard Saint-Marcel, chez madame Rédal. Pendant son séjour de six mois en Dauphiné, elle avait échangé quelques lettres avec celle qui, lors de sa chute au bord du trottoir, l'avait tirée de dessous cette voiture qui eût passé tout entière sur elle."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Spectacles",
    "title": "Spectacles du 17 octobre",
    "summary": "Programme complet des théâtres et salles de spectacle parisiens pour la soirée du 17 octobre 1899, recensant les représentations lyriques, classiques et les succès de vaudeville en vogue.",
    "paragraphs": [
      "Opéra : Hamlet. Opéra-Comique : Louise. Théâtre-Français : La Conscience de l'Enfant. Odéon : L'Arlésienne. Châtelet : La Poudre de Perlimpinpin. Théâtre Sarah-Bernhardt : L'Aiglon. Variétés : Le Carnet du Diable. Gaîté : Rip. Nouveautés : La Dame de chez Maxim. Palais-Royal : Le Gros Lot, Coralie et Cie. Ambigu-Comique : Madame Sans-Gêne. Porte-Saint-Martin : Cyrano de Bergerac. Renaissance : Mademoiselle Carabin. Bouffes-Parisiens : L'Enfant prodigue, Pomme d'api. Athénée : Les Demi-Vierges. Folies-Dramatiques : Relâche. Théâtre Antoine : Poil de Carotte, Les Gaietés de l'Escadron. Ambigu : Les Deux Gosses. Théâtre de la République : Relâche. Cluny : Les Quatre Coins de Paris. Déjazet : Les Femmes collantes. Monts-Théâtre : Le Porteur aux Halles. Mauguière : Le Chemineau. Kelledile : Nos Marins. Ba-Ta-Clan : Les Mystères de Paris. His-Uniff : La Maison du Baigneur. Grenelle : La Goualeuse. Montmartre : Le Chevalier de Maison-Rouge. Cabetlas : Le Grand Mogol."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Faits Divers",
    "title": "Le Doute du Passé (suite)",
    "summary": "Errant dans Paris lors d'une nuit printanière, un vieillard en proie à la solitude songe à son passé. Il espère que le jeune docteur, qu'il soupçonne d'être son fils, saura apaiser les tourments de sa vieillesse.",
    "paragraphs": [
      "Il avait quitté l'hôtel et s'en allait à l'aventure par les rues, plongé dans sa rêverie. Il arriva sur la place de la Concorde et s'engagea sous les arbres de l'avenue des Champs-Élysées. Il faisait une nuit superbe ; tout, dans cette nuit de délices, exhalait la joie de vivre.",
      "Dans le cœur du vieillard, une amertume peu à peu se glissait. Il était seul, vraiment seul. La vieillesse déjà pesait sur ses épaules. Et quand il mourrait, pas une main émue ne serait là pour fermer ses paupières. Pourtant, un bonheur relatif pouvait encore exister pour lui.",
      "Si le jeune docteur était vraiment son fils, peut-être qu'auprès de lui, dans la douceur de son affection, il oublierait un peu toute la souffrance d'autrefois. Mais son amour-propre se dressait toujours comme un obstacle infranchissable. Longtemps encore, il continua à marcher sous les arbres."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Bulletin Commercial du mardi 16 octobre",
    "summary": "Cours officiels des denrées alimentaires et des matières premières sur les marchés de Paris et du Havre pour la séance du 16 octobre 1899, incluant les farines, sucres et cotons.",
    "paragraphs": [
      "Farines, les 100 kilos : Disponible 25,00 ; Courant 25,95 ; Novembre 25,80 ; Nov-déc 25,75.",
      "Sucres, les 100 kilos : Disponible 79,75 ; Courant 79,50 ; Novembre 79,25 ; Nov-déc 79,15.",
      "Le Havre, 16 octobre. Cotons, laines, cafés. Cotons, les 50 kilos : Octobre 12,22 ; Décembre 12,05 ; Janvier 11,87 ; Avril 11,50."
    ]
  }
];
