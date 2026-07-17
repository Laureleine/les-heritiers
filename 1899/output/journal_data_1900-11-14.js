// Date: 1900-11-14
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-11-14 (Version Restaurée, 32 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "Les grandes associations d'anciens élèves",
    "summary": "L'inspecteur Édouard Petit dresse un état des lieux des 400 associations d'anciens élèves en France. Ces structures solidaires, véritables moteurs d'insertion professionnelle, s'affirment comme des piliers de l'éducation nationale.",
    "paragraphs": [
      "Tout ce qui peut contribuer à développer l'esprit d'association et de mutualité doit être l'objet d'une sympathique attention. J'ai parlé ici même, à diverses reprises, des petites associations scolaires dont le réseau va s'étendant chaque jour.",
      "Il s'agit cette fois des associations constituées par les anciens élèves des lycées et collèges de l'État, les « grandes associations », comme on les appelle familièrement. Une enquête dont les résultats viennent d'être publiés par M. Édouard Petit, inspecteur de l'Université, nous éclaire sur leur situation.",
      "Au total, ce sont quelque quatre cents associations d'anciens élèves qui existent et fonctionnent régulièrement sur toute la surface du territoire. Si certaines sont très prospères, d'autres peinent à se développer.",
      "Toutes ces associations ont un objet commun : celui de venir en aide aux élèves les plus méritants. Le placement des élèves, encore trop négligé, est une idée excellente qui devrait être généralisée.",
      "Le champ d'action des grandes associations est assez vaste ; il est inutile qu'elles l'élargissent. Il faut se défier de la confusion qui tend à s'établir entre les trois ordres d'enseignement. Que les grandes associations remplissent leur mission, et cette mission seulement."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille - Marie-Madeleine",
    "summary": "Dans une atmosphère lourde de secrets, la baronne d'Orvilliers organise le placement discret de l'enfant de sa nièce, Mademoiselle de Rambert, en échange d'une forte somme pour assurer le silence de la sage-femme.",
    "paragraphs": [
      "La sage-femme jeta un dernier regard autour de la chambre pour fixer dans sa mémoire les moindres détails de l'intérieur au milieu duquel le hasard l'avait transportée pour un instant.",
      "Madame d'Orvilliers escorta la sage-femme dans le cabinet, en ferma la porte avec soin et revint auprès de sa nièce pour lui annoncer que l'heure de la séparation était venue.",
      "Malgré la douleur et la honte, Mademoiselle de Rambert fit promettre à sa tante que l'enfant, qu'elle nomma Marie-Madeleine, ne serait pas abandonnée.",
      "La baronne remit à la sage-femme une somme de dix mille francs, exigeant le silence le plus total sur cette affaire. La voiture s'éloigna alors que Louise s'affaissait, brisée par la séparation."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Notre action diplomatique",
    "summary": "Grâce à la fermeté de M. Delcassé, la diplomatie française retrouve son prestige. L'accord des puissances occidentales sur la Chine témoigne du poids croissant de la France dans les chancelleries internationales.",
    "paragraphs": [
      "Des dépêches de Pékin annoncent que les ministres des diverses puissances se sont mis d'accord sur les conditions imposées à la Chine comme préliminaires d'un traité.",
      "Ce fait important ramène l'attention sur l'œuvre de la diplomatie française dans ces derniers temps. Notre ministre des Affaires étrangères, M. Delcassé, a conquis une autorité sérieuse dans toutes les chancelleries.",
      "La France a servi d'intermédiaire entre les États-Unis et l'Espagne, a résolu des différends avec l'Angleterre en Afrique et a réaffirmé son protectorat religieux en Orient. Unie à la Russie, la France a repris sa place légitime dans le monde."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'accident ferroviaire de Choisy-le-Roi",
    "summary": "L'enquête sur le drame ferroviaire de Choisy-le-Roi se poursuit. Tandis que la Compagnie d'Orléans organise les obsèques, la population réclame par pétition le doublement des voies pour prévenir tout nouveau carnage.",
    "paragraphs": [
      "M. de Valles s'est de nouveau rendu à Choisy-le-Roi pour poursuivre l'enquête sur le retard du train 215, cause principale de l'accident. Il a entendu l'aiguilleur Charost ainsi que le commissaire de police local.",
      "Les obsèques des victimes, dont M. Eugène-Théodore Leduc, sont organisées par la Compagnie d'Orléans. Plusieurs autres corps, dont celui de Mme Louise Ravet, seront inhumés dans les prochaines heures.",
      "Les ingénieurs ont décidé de faire relever la machine du train 9 pour la remettre sur ses rails et la reconduire au dépôt de Paris.",
      "Une pétition a été adressée à la Chambre des députés par les habitants, demandant l'exécution immédiate du doublement des voies pour éviter de nouvelles catastrophes.",
      "L'instruction se poursuit : l'aiguilleur Faix a reconnu avoir indiqué que la voie était libre, arguant du manque de personnel à la gare de Choisy."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Grave accident à une caserne",
    "summary": "Un tragique accident est survenu à la caserne d'artillerie d'Héricourt, dans la Haute-Saône, entraînant la mort d'un soldat et blessant grièvement deux autres militaires en service.",
    "paragraphs": [
      "Un déplorable accident vient de se produire à la caserne d'artillerie d'Héricourt, dans la Haute-Saône. Un soldat aurait été tué et deux autres blessés."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "La situation à Madagascar",
    "summary": "La peste a fait son apparition à Tamatave. Le général Galliéni déploie des mesures sanitaires rigoureuses, tandis que les travaux routiers se poursuivent et que la pacification du sud progresse sous le colonel Lyautey.",
    "paragraphs": [
      "La peste a fait son apparition à Tamatave, mais le général Galliéni a pris toutes les mesures nécessaires pour préserver le reste de l'île. Les travaux de la route progressent avec plus de 12 000 travailleurs.",
      "La tranquillité semble complète dans l'île, à l'exception de quelques régions du sud où le colonel Lyautey poursuit son œuvre de pacification."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Social",
    "title": "Les sapeurs-pompiers",
    "summary": "Une réflexion sur l'organisation des sapeurs-pompiers préconise leur demi-militarisation et une gestion exempte d'influences politiques pour garantir une pleine efficacité opérationnelle.",
    "paragraphs": [
      "L'article publié sur les sapeurs-pompiers souligne l'avantage de la constitution de compagnies nombreuses, échappant par leur demi-militarisation à l'état affligeant de beaucoup de ces corps.",
      "Il est nécessaire de constituer des corps sans attache politique. Des errements doivent prendre fin, notamment concernant les critères d'admission et la limite d'âge, pour garantir l'efficacité de ces services."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Vol de dynamite",
    "summary": "Un vol de matériel explosif, comprenant des cartouches de dynamite et des amorces, a été constaté sur le chantier de la ligne ferroviaire reliant Saint-Eloy à Paugnat. Une enquête judiciaire est en cours.",
    "paragraphs": [
      "Un vol de cartouches de dynamite et d'amorces a été commis dans les chantiers de la ligne en construction de Saint-Eloy à Paugnat. Le sous-préfet de Riom et le parquet sont sur les lieux pour l'enquête."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Politique",
    "title": "Mort d'un député",
    "summary": "La Chambre des députés est en deuil suite au décès soudain de M. Sommeilliar, représentant républicain de la circonscription de Montmédy dans la Meuse, emporté à l'âge de quarante-six ans.",
    "paragraphs": [
      "Nous apprenons avec regret la mort de M. Sommeilliar, député républicain de Montmédy (Meuse), survenue à l'âge de quarante-six ans."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Politique",
    "title": "Révision de la Constitution",
    "summary": "La commission Bérard a statué sur trois axes majeurs de réforme : la suprématie budgétaire de la Chambre, la limitation du droit de veto du Sénat et l'inéligibilité renouvelée du Président de la République.",
    "paragraphs": [
      "La commission présidée par M. Bérard a décidé que la révision de la Constitution porterait sur trois points : la prééminence de la Chambre en matière budgétaire, la limitation du droit de veto du Sénat, et l'interdiction de réélection du Président de la République."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Politique",
    "title": "La Chambre des députés et l'impôt des boissons",
    "summary": "La Chambre des députés a voté un budget spécial pour l'Algérie et poursuit ses délibérations sur la réforme de l'impôt des boissons, mettant l'accent sur le dégrèvement des boissons hygiéniques.",
    "paragraphs": [
      "La Chambre a voté ce jour le budget spécial pour l'Algérie. Les débats se sont ensuite poursuivis concernant le projet de loi relatif à la réforme de l'impôt des boissons, les représentants insistant sur la nécessité de dégrever les boissons dites hygiéniques."
    ]
  },
  {
    "id": 12,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident au bois de Boulogne",
    "summary": "Un tragique accident de tramway au bois de Boulogne a causé la mort du cocher d'un landau, violemment percuté par le véhicule électrique hier soir. Quatre personnes ont été grièvement blessées.",
    "paragraphs": [
      "Un terrible accident de tramway électrique a endeuillé le bois de Boulogne hier soir. Une voiture électrique a percuté avec violence un landau, occasionnant de graves blessures à quatre personnes. Le cocher a malheureusement succombé sur le coup."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident de tramway à Bry-sur-Marne",
    "summary": "Une blanchisseuse atteinte de surdité a trouvé la mort lundi soir, percutée par un tramway électrique à Bry-sur-Marne malgré les efforts du mécanicien pour stopper la machine.",
    "paragraphs": [
      "Un accident tragique, ayant entraîné la mort de la victime, s'est produit lundi soir au terminus de la ligne des tramways nogentais.",
      "Vers dix heures, le tramway électrique n° 5, conduit par le mécanicien Chavey, descendant à vive allure l'avenue de Bry, a heurté une femme qui s'engageait imprudemment sur la voie. Tous les efforts désespérés du mécanicien pour arrêter la machine furent inutiles.",
      "La victime, une blanchisseuse nommée Anne Gouldener, âgée de cinquante ans, est décédée sur le coup. Son époux a déclaré que sa femme, souffrant d'une forte surdité, n'avait pu entendre les signaux d'avertissement du mécanicien."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Accueil du Président Kruger à Marseille",
    "summary": "À Marseille, les préparatifs pour l'arrivée de M. Kruger s'intensifient. Le maire encadre les manifestations publiques pour éviter tout incident diplomatique avec l'Angleterre.",
    "paragraphs": [
      "Le comité pour l'indépendance des Boërs a reçu l'adhésion d'une vingtaine de municipalités de la région, annonçant l'arrivée prochaine de délégations venues accueillir M. Kruger.",
      "Le maire de Marseille a dû limiter l'activité des groupes entonnant l'hymne boër, craignant des manifestations hostiles envers l'Angleterre. Durant l'après-midi, Mme Eloff, petite-fille de M. Kruger, a reçu plusieurs délégations d'enfants venus lui présenter leurs hommages."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "International",
    "title": "La guerre au Transvaal",
    "summary": "Le général Rundle mène des escarmouches contre les Boërs dans plusieurs districts de l'Orange. Près de Pétrusberg, un détachement de police a été capturé avant d'être relâché par les combattants boërs.",
    "paragraphs": [
      "Le général Rundle a engagé plusieurs escarmouches dans les districts d'Harrismith, de Vrède et de Recht contre les forces boërs.",
      "Par ailleurs, un détachement de police de l'Orange a été cerné près de Pétrusberg par une centaine de Boërs. Sept hommes ont été faits prisonniers, dont deux blessés, avant d'être finalement relâchés par leurs assaillants."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "International",
    "title": "Conditions de paix en Chine",
    "summary": "Les puissances étrangères s'accordent sur une note commune imposant à la Chine de sévères réparations et des mesures coercitives pour assurer la sécurité des légations après les troubles récents.",
    "paragraphs": [
      "Les ministres étrangers sont tombés d'accord sur une note conjointe à présenter au gouvernement chinois comme base d'un traité préliminaire.",
      "Les exigences incluent l'érection d'un monument funéraire en mémoire du baron de Ketteler, l'application de la peine de mort pour les hauts fonctionnaires responsables des troubles, le rasement des forts de Takou, l'abolition du Tsung-li-Yamen et le maintien de garnisons étrangères pour assurer la garde permanente des légations."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Social",
    "title": "Le Sénat et le droit d'exercer des femmes avocates",
    "summary": "Le Sénat a validé le droit pour les femmes licenciées en droit de prêter serment d'avocat. Malgré une opposition conservatrice, le projet, soutenu par le ministre de la Justice, a été adopté par 172 voix.",
    "paragraphs": [
      "Le Sénat a poursuivi la discussion de la proposition de loi permettant aux femmes munies du diplôme de licencié en droit de prêter serment d'avocat devant les tribunaux.",
      "M. Gourju s'est vivement opposé à la proposition, jugeant les femmes inaptes à l'exercice de ce métier. Le rapporteur M. Thézard a défendu le projet en rappelant l'égale admissibilité des sexes aux carrières libérales. Le ministre de la Justice, M. Monis, a apporté son appui total à cette réforme.",
      "L'article unique de la proposition a été finalement adopté par 172 voix contre 100."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie violent à Saint-Denis",
    "summary": "Un incendie dévastateur a détruit les entrepôts de bois de M. Champenois à Saint-Denis. Le sinistre a provoqué d'importants dégâts matériels, jetant six familles à la rue et causant des blessures aux pompiers.",
    "paragraphs": [
      "Un incendie d'une violence inouïe a détruit les ateliers et les magasins de M. Champenois, marchand de bois, situés boulevard de Châteaudun, à Saint-Denis.",
      "Les flammes, propagées par la nature inflammable des stocks, ont rapidement gagné les bâtiments voisins, dont une habitation abritant six familles ouvrières qui ont tout perdu dans le sinistre. Plusieurs pompiers ont été blessés lors des opérations de secours, mais leur état n'inspire aucune inquiétude."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Politique",
    "title": "Séance de la Chambre des députés : Budget 1901",
    "summary": "Ouverture de la discussion budgétaire pour 1901 à la Chambre. M. Puech critique la gestion des dépenses, tandis que le ministre des Finances Caillaux défend les efforts d'amortissement de la dette.",
    "paragraphs": [
      "La Chambre a abordé la discussion générale relative au projet de budget pour l'exercice de l'année 1901.",
      "M. Puech a formulé des critiques sévères contre un budget qualifié d'attente, aux dépenses croissantes, et a plaidé pour une rationalisation de l'outillage de transport. M. Caillaux, ministre des Finances, a défendu la situation financière du pays, soulignant l'amélioration notable de l'amortissement de la dette publique et l'efficacité de la réforme des droits de succession."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Chronique",
    "title": "La fin de l'Exposition universelle",
    "summary": "Au lendemain de la clôture de l'Exposition universelle, le spectacle de la démolition des palais suscite une vive mélancolie face au vide et aux débris laissés par la fête.",
    "paragraphs": [
      "La fermeture définitive de l'Exposition universelle a laissé un sentiment de stupeur et de tristesse parmi la foule. Dès le lendemain, les ouvriers ont commencé le travail de démolition des grands palais.",
      "Le spectacle de ces structures, autrefois magnifiquement illuminées et désormais jonchées de débris, de caisses et d'échafaudages, contraste violemment avec le souvenir des foules joyeuses. La gracieuse fontaine des Amours et les décors éphémères s'effacent peu à peu du paysage parisien."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un étudiant faussaire et meurtrier",
    "summary": "Georges Gounelle, étudiant de vingt-deux ans, a été arrêté boulevard Saint-Germain après avoir tiré sur un passant lors d'une tentative de fuite suite à une fraude au Crédit Lyonnais.",
    "paragraphs": [
      "Un étudiant nommé Georges Gounelle, âgé de vingt-deux ans, demeurant 30, rue du Cherche-Midi, se présentait hier, vers trois heures de l'après-midi, à la succursale du Crédit Lyonnais, boulevard Saint-Germain, pour y négocier un titre.",
      "Le caissier, s'étant aperçu que le titre était frappé d'opposition, demanda des explications à Gounelle. Ce dernier se troubla et, voyant que le caissier voulait le faire arrêter, il prit la fuite en direction de la rue de Bièvre.",
      "Une poursuite s'engagea aux cris de « au voleur ! ». Un passant, M. Bolut, ayant tenté de l'intercepter, Gounelle tira sur le malheureux avec un revolver, l'atteignant au ventre.",
      "Le blessé, dont l'état est grave, a été transporté à l'hôpital. Gounelle, arrêté aussitôt, a été mis à la disposition de M. Mautillier, commissaire de police."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Faux sur un livret militaire",
    "summary": "Le parquet de la Seine instruit une affaire de falsification de livret militaire concernant un réserviste dont la mention de réforme a été ajoutée frauduleusement.",
    "paragraphs": [
      "Nous avons annoncé que le parquet de la Seine avait été saisi par l'autorité militaire d'une plainte au sujet d'un faux inscrit sur un livret individuel.",
      "Un réserviste, M. S.-P. A., était mentionné comme réformé, alors qu'il ne lui avait été délivré, à la sortie du régiment où il avait achevé son service comme brigadier, qu'un certificat d'origine de blessure. La mention indiquant la réforme complète ne figurait pas sur le livret matricule original du soldat.",
      "Par qui cette inscription a-t-elle été portée sur le livret individuel ? M. S.-P. A. déclare que ce n'est point son fait. Le commandant du bureau de recrutement assure, de son côté, que la mention et la signature ne sont pas de sa main.",
      "M. le juge Aubry a été chargé de l'instruction de cette affaire. Il a désigné M. Legrand comme expert."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vengeance de délaissée",
    "summary": "Dans le quartier de Grenelle, une femme a grièvement brûlé au visage, avec de l'acide sulfurique, un jeune homme qui cherchait à fuir ses assiduités amoureuses.",
    "paragraphs": [
      "Un drame du vitriol s'est déroulé hier soir, vers dix heures, dans le quartier de Grenelle. Un garçon brasseur, Fernand Colas, âgé de vingt-six ans, demeurant 76, boulevard de Grenelle, rentrait chez lui lorsqu'en arrivant au bout du long couloir de la maison, il se trouva en présence de la dame Jeanne Moreau, âgée de quarante ans.",
      "D'un geste rapide, celle-ci vida sur la tête du malheureux Colas une boîte à lait remplie d'acide sulfurique.",
      "Horriblement brûlé à la face, Colas s'affaissa en poussant des hurlements, tandis que l'auteur de ce lâche attentat prenait la fuite. Colas a été transporté à l'hôpital Necker, où son état est jugé fort grave ; même s'il en réchappe, il est probable que l'infortuné restera aveugle.",
      "M. Bouteiller, commissaire de police, a pu, dans la soirée d'hier, interroger le blessé.",
      "La dame Moreau poursuivait Colas depuis un an de ses assiduités, voulant le forcer à vivre avec elle, et le jeune homme, inquiet des suites de cette passion folle, évitait avec soin celle qui s'est vengée hier. Les recherches pour retrouver la dame Moreau sont restées infructueuses."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Autour de Paris - Chronique des communes",
    "summary": "Chronique des accidents et faits divers en périphérie parisienne : drames familiaux, accidents domestiques et découvertes macabres ponctuent la journée dans plusieurs communes.",
    "paragraphs": [
      "Bécon-les-Bruyères. Un jeune garçon de huit ans, Gustave Couture, demeurant rue Saint-Denis, s'amusait hier devant sa porte à se balancer à l'arrière d'une charrette reposant sur ses brancards. Un violent mouvement de bascule s'étant produit, le malheureux enfant a eu le bas-ventre écrasé. Son état est désespéré.",
      "Argenteuil. Hier matin, en se rendant à leur travail, des employés du chemin de fer ont découvert, près de la gare, le cadavre d'un nouveau-né. M. Blanc, commissaire de police, a ouvert une enquête.",
      "Aubervilliers. Mme Keller, âgée de vingt-trois ans, avait quitté son mari pour un autre homme. L'époux délaissé alla attendre hier sa femme devant le domicile de son rival et tira sur elle deux coups de revolver. Il tourna ensuite l'arme vers lui à deux reprises, se blessant au cou et à la tempe. M. Huât, commissaire de police, a ordonné le transport des deux blessés à l'hôpital Lariboisière. M. Keller est dans un état très grave.",
      "Pantin. Deux individus, tirant sur des oiseaux, ont blessé une chiffonnière, Mlle Mante Lanquetin, au bras gauche. Les individus sont recherchés par M. Marie, commissaire de police.",
      "Vincennes. Mme Sophie Guiraud, ayant perdu sa fortune, mit le feu à son appartement. Ayant récidivé après une première intervention des voisins, elle a été conduite à l'infirmerie spéciale du dépôt.",
      "Alfortville. Une scène de jalousie a éclaté entre Jean Nébœuf et Ernestine Lauquet. Cette dernière a été grièvement blessée à la tête par son amant à coups de gourdin. Nébœuf a été arrêté.",
      "Joinville-le-Pont. M. Désiré Levollaat est tombé du haut du pont de Bonneuil et s'est fracturé le crâne. Au Perreux-Saint-Maur, M. Taillandier a été renversé par une voiture de maître et très grièvement blessé."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie dans un orphelinat",
    "summary": "Un violent incendie a ravagé les dépendances de l'orphelinat de Domois, près de Dijon, détruisant récoltes et matériel pour un montant estimé à 40 000 francs.",
    "paragraphs": [
      "Dijon, 13 novembre. Un incendie d'une violence extrême s'est déclaré dans la journée d'hier à l'orphelinat de Domois. Le feu a pris dans la ferme, détruisant presque toutes les récoltes accumulées ainsi qu'une grande quantité de balais fabriqués par les petits orphelins.",
      "Les pompiers de sept villages voisins, ainsi que ceux de Dijon, ont lutté pour préserver les bâtiments principaux occupés par l'abbé Chanton, directeur de l'orphelinat. Les pertes sont évaluées à près de 40 000 francs et les biens n'étaient point assurés."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Justice",
    "title": "Tribunaux : Vengeance de la corsetière",
    "summary": "Mlle Augustine Noppe, poursuivie pour avoir tenté d'abattre son amant, M. Poly, à la gare de Lyon, a été acquittée par la cour d'assises de la Seine après une plaidoirie convaincante de la défense.",
    "paragraphs": [
      "Une jeune corsetière, Mlle Augustine Noppe, a comparu devant la cour d'assises de la Seine pour tentative de meurtre. Abandonnée par son amant, M. Poly, qui refusait de subvenir aux besoins de l'enfant né de leur liaison, elle a tenté de l'abattre à la gare de Lyon.",
      "M. Poly a été atteint à l'épaule mais n'a pas été grièvement blessé. Après la plaidoirie de M. Burgougnioux de Wajly, Mlle Noppe a bénéficié d'un verdict négatif et a été acquittée."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Justice",
    "title": "Le Métropolitain en correctionnelle",
    "summary": "Le directeur du Métropolitain, M. Henri Maréchal, a été condamné à 16 francs d'amende pour surcharge de voyageurs dans les wagons, en violation de l'ordonnance préfectorale.",
    "paragraphs": [
      "Le directeur du Métropolitain, M. Henri Maréchal, était poursuivi pour infraction à la loi sur la police des chemins de fer, pour avoir laissé monter dans les wagons un nombre de voyageurs supérieur à celui autorisé par l'ordonnance préfectorale.",
      "M. Maréchal a invoqué l'impossibilité matérielle de limiter le nombre de voyageurs. Le tribunal a condamné l'administration du Métropolitain à 16 francs d'amende."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Fruit défendu - La Revanche de Rose-Manon",
    "summary": "Le commissaire Ladouce enquête sur la mort suspecte de Rose-Manon, une jeune femme retrouvée dans une chambre d'hôtel. L'implication potentielle du neveu d'un ministre complique les investigations policières.",
    "paragraphs": [
      "Jadis, ils avaient eu quelques coups heureux qui leur avaient fait une sorte de célébrité. Puis ils avaient vieilli. La police s'était recrutée parmi des gens plus jeunes, avec d'autres idées. Elle-même, la sûreté, changeant ses moyens d'investigation, renouvelait ses procédés, rajeunissait ses ruses cousues de fil blanc que flairaient les roublards parmi les malfaiteurs.",
      "Alors, dans cette invasion des jeunes au service de la sûreté, et où prirent une place de marque après des affaires retentissantes deux ou trois inspecteurs intelligents, Christian et le père Brûlot se sentirent démodés, tout à fait vieillis et hors d'usage. Ils n'en eurent pas seulement du chagrin, ils en eurent de l'envie. Ils ne voulaient pas abdiquer. Mais comment faire ? Les crimes dans lesquels ils intervenaient étaient des atrocités vulgaires où, semblait-il, l'assassin avait lui-même déposé sa carte de visite avec son nom et son adresse.",
      "Et en entrant dans la petite chambre parée de toutes ces fleurs, le père Brûlot, clignant l'œil, avait dit à Christian : « Ça, vieux, c'est un crime de la haute. Attention. » En quelques mots M. Ladouce les mit au courant. Et lorsqu'ils apprirent le nom et la parenté de Villaurier, leur figure s'allongea. L'affaire, quelle qu'elle fût, allait avoir un retentissement énorme. Quel scandale ! Et comment tournerait-elle ? Quel rôle avait joué dans la mort de cette jeune fille le neveu du ministre, le neveu du procureur général ? N'essaierait-on pas de faire le silence ?",
      "Le père Brûlot et Christian échangèrent un regard. Ils étaient graves, ils s'entendaient. Ce regard voulait dire : « Oui, avec des agents jeunes, ambitieux, on étoufferait peut-être l'affaire. Nous deux, nous sommes au bout de notre carrière, nous n'avons plus d'ambition ; n'ayons l'air de rien, pour qu'on nous laisse agir. Attendons les événements. Mais pour ce qui est d'étouffer l'affaire, nous verrons bien. »",
      "Le médecin, tout à ses observations, disait : « Il n'y a pas une demi-heure, cette jeune fille était encore vivante. » Croyez-vous à un suicide ou à un assassinat ? Le médecin haussa les épaules : « Est-ce que je sais ? Et comment le savoir ? Un suicide, possible. Un crime, aussi. Dans tous les cas, rien ne montre qu'elle se soit défendue et s'il y a eu crime, c'est par surprise. Tenez, de cette façon-là, peut-être. » Il passa derrière le fauteuil, se pencha au-dessus de la tête de Rose-Manon et fit mine de frapper.",
      "« Un crime ? Mais, monsieur, alors ce serait mon maître qui... » « Je n'ai pas dit ça, mais après tout, s'il y a crime, et ça regarde M. Ladouce, il faut bien que quelqu'un l'ait commis. » Ils attendirent. Le magistrat prenait des notes. Il espérait toujours que Jean Villaurier allait rentrer. Mais Villaurier ne rentrait pas. « Diable ! Diable ! » disait le commissaire de plus en plus perplexe.",
      "Aidé par Brûlot, Christian avait fouillé les vêtements de la pauvre Rose pour y trouver quelque preuve d'identité. Ce fut en vain. Tour à tour les gens de l'hôtel étaient venus déposer. Une seule question attirait la même réponse : « Connaissez-vous le nom de la morte ? » « Nous ne le connaissons pas. » Alors, Ladouce avait poussé plus loin la curiosité. Il les avait interrogés sur les habitudes de Villaurier, sa façon de vivre, ses relations, sa fortune, tout ce qui pouvait présenter de l'intérêt pour l'enquête.",
      "Les gens se tinrent sur une réserve prudente. Ils ne lâchèrent que petit à petit ce qui était de notoriété publique. Villaurier était extrêmement riche et menait la vie luxueuse et désordonnée des jeunes gens de son monde. Il était libre. Il vivait pour l'amour. « Pour ma part, je crois que cette jeune fille n'a pas mis les pieds à l'hôtel plus de deux ou trois fois. Là-dessus, le concierge doit pouvoir vous renseigner. N'est-ce pas, Célestin ? »",
      "Célestin, le concierge, répondit : « Trois fois, en effet, je crois pouvoir l'affirmer. » « À quelle heure est-elle arrivée ce soir ? » « Vers cinq heures et demie, environ un quart d'heure avant monsieur. » « M. Villaurier était donc absent ? » « Oui, depuis midi. » « Comment se fait-il que vous ayez laissé entrer cette jeune fille à l'hôtel librement, en l'absence de M. Villaurier ? » « C'est que... elle était attendue. » « Ah ! ah ! Mais alors, son nom ? » « Nous ne le savons pas. » « M. Villaurier avait dit : \"Une jeune fille viendra.\" Cela suffisait. »",
      "M. Ladouce haussa les épaules : « Nous éclaircirons ces choses-là, s'il y a lieu. » Il consulta sa montre : « Je n'ai pas envie de rester toute la soirée à attendre ce monsieur. » Il fit un signe aux deux agents. « Je vais faire transporter le corps à la morgue. Vous allez, vous, rester ici de planton, dans la loge du concierge. Quand M. Villaurier rentrera, vous le prierez de passer à mon bureau. » Il se dirigea vers la porte et, se retournant : « Des égards, n'est-ce pas ? Des égards ! » Et quand il fut parti, le père Brûlot murmura : « Des égards, parbleu ! Le neveu du ministre de la Justice ! On n'est pas des mufles. »",
      "M. Ladouce était parti. Déjà, dans l'avenue, une foule énorme. Et chez le concierge, les reporters. Mais M. Ladouce refusa tout renseignement. Le père Brûlot, adroitement, laissa tomber quelques mots, après le départ du commissaire. De cette façon, il avait la certitude que les journaux du lendemain allaient broder là-dessus. Et une fois les journaux en possession de l'affaire, il devenait bien difficile d'étouffer celle-ci."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Faute de... - Les Miettes du Bonheur",
    "summary": "Jeannine et le capitaine de Courtial envisagent leur union prochaine avec espoir, tout en se préoccupant de leur dette morale envers le docteur Lipray, qui a généreusement consenti à leur rendre leur liberté.",
    "paragraphs": [
      "« Rien. Nous ne devons plus avoir qu'un cœur et qu'une pensée. » Il eut une hésitation. Alors, tout bas : « Pensez-vous que le docteur Lipray a été sincère, hier, dans les affirmations qu'il nous a faites ? » Jeannine pâlit légèrement. « Non. M. Lipray n'a pas dit la vérité. Il m'a rendu ma parole parce qu'il a compris que je vous aimais toujours, que je ne serais jamais heureuse avec lui. De cela je suis convaincue. »",
      "« Je vous le promets, Jeannine. » « Nous paraîtrons ingrats, mais il faut pour lui-même que nous partions, qu'il ne me revoie plus. Comprenez-vous ? » « Oui. » Et l'officier ajouta après une pause : « Mais comment nous acquitter jamais envers lui ? » Jeannine pencha la tête en arrière, et doucement, elle s'appuya sur l'épaule de M. de Courtial, que ce contact faisait frissonner.",
      "Quand le soir tomba, le capitaine prit congé. Il se sentait comme rajeuni de vingt ans. Le mariage aurait lieu aussitôt que possible. Seulement, dès le lendemain, Jeannine quitterait l'appartement du boulevard des Batignolles. Pierre venait à peine de sortir que sœur Thérésa et sœur Honorine frappaient à la porte. Les deux religieuses ignoraient quel avait été le résultat de leur démarche auprès du jeune docteur, mais furent rassurées par l'expression radieuse de Jeannine.",
      "La jeune mère les introduisit dans le petit salon, où toutes deux embrassèrent Armand, qui sautait autour des religieuses. Sœur Thérésa questionna : « Eh bien, mon enfant ? » « Eh bien, ma sœur. Dieu a exaucé nos prières. Vous aviez raison de me dire qu'il ne fallait jamais désespérer, que le bonheur, lorsqu'on le croit irrévocablement perdu, peut renaître. »",
      "Il avait fait à pied le trajet qui sépare le boulevard des Batignolles de la gare Saint-Lazare. M. de Courtial ne remarquait rien, songeant à Jeannine et à son enfant. Il se disait : « Comme nous allons être heureux. » Rentré à l'hôtel, il monta aussitôt à sa chambre. À sept heures, il descendit pour le dîner. Il pénétra dans un des salons du restaurant, un salon superbe, au milieu duquel une table magnifique, toute étincelante de cristaux et d'argenterie, était dressée.",
      "Soudain, il tressaillit, s'arrêta comme cloué sur place. Parmi les nombreux arrivants, il venait d'apercevoir un homme courbé, cassé, aux cheveux tout blancs, au visage tellement ravagé par la douleur, que l'officier hésitait d'abord à le reconnaître. Mais cette hésitation ne dura que quelques secondes. Ses lèvres s'entrouvrirent, laissèrent échapper un nom : « André ! » C'était André Vernier, en effet, le maître de forges de Larignies.",
      "À cette vue, le cœur de l'officier se serra. Une pitié profonde l'étreignit. Quoi, c'était là cet homme qu'il avait connu il y avait deux ans à peine si robuste, si rayonnant d'une joie que rien ne semblait menacer ? Pauvre ami ! Comme c'était pitoyable, la vie ! Comme on a tort de s'endormir dans la sécurité d'un bonheur qui n'est jamais qu'une ombre. Le capitaine se dirigea vers la table où Vernier venait de s'installer. Celui-ci, indifférent à tout, ne le remarqua même pas. Quand l'officier fut tout près, il dut appeler : « André ! »"
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Faits Divers",
    "title": "Drame devant l'Hôtel",
    "summary": "Régine, cherchant Jean Villaurier, arrive devant l'hôtel où une foule immense s'est rassemblée. Submergée par l'agitation, elle redoute qu'un malheur n'ait frappé l'homme qu'elle aime.",
    "paragraphs": [
      "La voiture de l'ambulance attendait à la porte de l'hôtel. Malgré les gardiens de la paix accourus de poste, le jardin était envahi. Alors, les gardiens s'étaient placés à la porte du hall pour empêcher qu'on ne pénétrât dans l'intérieur. Là, au milieu de cette foule, un drame poignant se passait.",
      "Régine avait quitté la petite maison de la rue Saint-Eleuthère. À l'église Saint-Pierre, elle n'avait pas rencontré Jean Villaurier. Alors, dans l'ivresse de son amour, attirée irrésistiblement par la puissance que le jeune homme possédait sur elle, la pauvre enfant était descendue vers Paris. Elle avait, dans sa précipitation, oublié de prendre de l'argent. Elle fut obligée de faire à pied le trajet, tantôt marchant, tantôt courant.",
      "Avenue Kléber, elle fut étonnée de trouver le trottoir envahi. Que se passait-il ? Et c'était vers l'hôtel que se portaient tous les regards. Une émotion l'étreignit. Il y avait un malheur dans cette maison. Elle se mêla à la foule pour apprendre quelque chose, mais elle n'osait interroger, elle avait peur de savoir. Du reste, interroger était inutile : elle entendait de rapides exclamations. Les nouveaux venus questionnaient les premiers arrivés et elle écoutait les réponses."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Informations Commerciales",
    "title": "Bulletin Commercial et Maritime",
    "summary": "Mouvements des navires de la Compagnie Générale Transatlantique et des Messageries Maritimes, accompagnés du cours des veaux au marché de La Villette en date du 13 novembre 1899.",
    "paragraphs": [
      "Départs et arrivées des paquebots : Le paquebot La Champagne (C. G. T.), venant du Havre, est arrivé à New-York le 13 novembre, à 5 heures du matin. Le paquebot Indus (M. M.), venant du Japon et de l'Indo-Chine, est arrivé à Marseille le 13. Le paquebot Laos (M. M.), venant du Japon et de l'Indo-Chine, a quitté Djibouti le 13.",
      "Le paquebot Australien (M. M.), à destination de l'Australie et de la Nouvelle-Calédonie, est arrivé à Sydney le 13.",
      "Marché aux veaux : La Villette, mardi 13 novembre. Veaux amenés, 524 ; vendus, 524. Vente difficile et baisse de 5 centimes par kilo. Les veaux de choix de Seine-et-Marne, de l'Eure, de Seine-et-Oise, d'Eure-et-Loir et du Loiret sont détaillés de 1 fr. 10 à 1 fr. 20, et en bande ont obtenu de 0 fr. 90 à 1 fr. Les champenois se sont vendus de 0 fr. 80 à 0 fr. 90 en bande et jusqu'à 0 fr. 92 au détail ; les flamands de 0 fr. 80 à 0 fr. 85 ; les gournayeux et les manneaux de 0 fr. 70 à 0 fr. 75 ; les autres provenances de 0 fr. 60 à 0 fr. 75. Le tout par kilo de viande nette."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Divertissement",
    "title": "Spectacles du 14 novembre",
    "summary": "Programme des représentations théâtrales et lyriques à l'affiche des théâtres parisiens pour la journée du 14 novembre 1899.",
    "paragraphs": [
      "Opéra : Le Prophète. Opéra-Comique : Carmen. Théâtre-Français : L'Avare. Sarah-Bernhardt : Ruy Blas. Odéon : La Guerre en dentelles. Comédie-Française : La Poigne. Châtelet : La Poudre de Perlimpinpin. Variétés : Le Carnet du Diable. Palais-Royal : Le Gros Lot, Coralie et Cie. Vaudeville : Madame Sans-Gêne. Porte-St-Martin : L'Assommoir. Renaissance : La Pelisse, Mamz'elle Carabin. Bouffes-Parisiens : La Czarda. Athénée : Les Demi-Vierges. Ambigu : Les Deux Gosses."
    ]
  }
];
