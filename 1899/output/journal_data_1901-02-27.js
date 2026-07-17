// Date: 1901-02-27
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-02-27 (Version Restaurée, 43 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie",
    "title": "Les ports français",
    "summary": "Un rapport des douanes souligne la croissance du commerce français, qui atteint 8 milliards de francs en 1899, tout en notant avec inquiétude que le pavillon étranger supplante notre marine marchande.",
    "paragraphs": [
      "Le commerce et la navigation sont dans une dépendance si étroite l'un à l'égard de l'autre qu'on ne peut isoler les statistiques qui les concernent. C'est pourquoi nous les trouvons réunies dans le rapport que vient de publier la direction générale des douanes, et qui embrasse le commerce et la navigation de la France pendant les trois dernières années.",
      "Tant à l'importation qu'à l'exportation, le commerce de la France s'est élevé, pendant l'année 1899, à 8 milliards de francs. Dans ce chiffre, les importations entrent pour 4 milliards de francs et les exportations pour 4 milliards de francs.",
      "Le mouvement de la navigation est incontestablement en progrès sur les années précédentes. Le malheur est que cette augmentation, au lieu de porter sur le pavillon national, soit due exclusivement aux pavillons étrangers.",
      "Marseille et le Havre gardent toujours la tête au point de vue du tonnage, mais Cherbourg passe brusquement au troisième rang, suivi par Boulogne. Les statistiques gagnent en intérêt lorsqu'elles font entrer dans leurs évaluations le tonnage des marchandises en complément du tonnage de jauge des navires."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Miss Tempête",
    "summary": "Jean se livre à un labeur exténuant sur son épopée de Vénus, suscitant l'agacement de sa sœur Denise, avant d'annoncer son départ imminent pour installer son œuvre aux Fontenilles.",
    "paragraphs": [
      "Ce fut pour Jean une période d'un travail acharné, presque surhumain. Il ne vivait plus que pour son œuvre, son épopée de Vénus, délaissant sommeil et appétit.",
      "Denise commençait à prendre en grippe la déesse qui hypnotisait son frère et le renfermait dans cet atelier d'où elle était exclue. Pourtant, l'œuvre commençait à prendre vie.",
      "Un beau soir, Jean annonça à ses proches qu'il allait bientôt leur fausser compagnie pour installer son œuvre aux Fontenilles, le domaine du baron."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des ministres",
    "summary": "Sous la présidence de M. Loubet, le Conseil des ministres a préparé, à l'Élysée, la réponse du gouvernement face aux interpellations parlementaires concernant les grèves de Montceau et de Saint-Éloy.",
    "paragraphs": [
      "Les ministres se sont réunis, hier matin, à l'Élysée, sous la présidence de M. Loubet. La séance du conseil a été consacrée à l'examen des diverses questions soulevées par les interpellations renvoyées par la Chambre.",
      "Le président du conseil a fait connaître le sens des déclarations qu'il fera au nom du gouvernement dans l'interpellation relative aux grèves de Montceau et de Saint-Éloy."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Actualité Coloniale",
    "title": "L'explorateur Gentil",
    "summary": "L'explorateur Gentil est rentré à Bordeaux. Il confirme que le Ouam est un affluent du Chari et a rapporté, avec ses compagnons, divers trophées ainsi qu'un jeune esclave natif de la région.",
    "paragraphs": [
      "Bordeaux, 26 février. L'explorateur Gentil est arrivé très fatigué, souffrant d'une maladie de foie. Il revient avec MM. Bernard et Fluet après avoir reconnu le cours moyen de la rivière Ouam et atteint Carnot.",
      "Un intéressant problème de géographie a été résolu : le Ouam est un affluent du Chari. M. Gentil rapporte divers trophées pris lors de la défaite de Rabah et accompagne un jeune esclave de douze ans."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "En Espagne",
    "summary": "Le ministère espagnol a démissionné. Malgré le retour à l'ordre assuré par le général Weyler à Madrid, la situation politique reste instable sous la menace de l'hostilité d'une partie de l'armée.",
    "paragraphs": [
      "Les ministres espagnols ont remis leur démission à M. Azcarraga. Le régime de l'état de siège, manié par le général Weyler, a rétabli l'ordre à Madrid.",
      "La reine régente cherche à constituer un ministère de droite. Cette politique est jugée dangereuse car la droite a épuisé son crédit et la situation économique ainsi que l'hostilité d'une partie de l'armée rendent la stabilité du pays incertaine."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "L'alcool à Madagascar",
    "summary": "Le général Gallieni, par un arrêté récent, a instauré un contrôle hygiénique strict sur l'importation des produits alcoolisés à Madagascar afin d'en garantir l'innocuité pour la population.",
    "paragraphs": [
      "Le général Gallieni, par un arrêté récent, a institué un contrôle hygiénique sur les produits à base d'alcool importés dans la colonie de Madagascar et ses dépendances, afin d'en garantir l'innocuité."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Nouveau cyclone à la Réunion",
    "summary": "Un récent cyclone a traversé l'île de la Réunion entre le 24 et le 26 janvier. Fort heureusement, les dégâts matériels restent très limités et aucune perte en vie humaine n'est à déplorer.",
    "paragraphs": [
      "Un nouveau cyclone a traversé l'île de la Réunion du 24 au 26 janvier. Il n'a occasionné que des dommages insignifiants et aucune perte humaine n'est à déplorer."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un drame dans la montagne",
    "summary": "Les recherches alpines ont permis de retrouver le corps de M. Poncin, troisième victime de l'avalanche de la Roche-Pourrie. Les obsèques du disparu se tiendront ce jeudi à Albertville.",
    "paragraphs": [
      "Albertville, 26 février. Le corps de M. Poncin, la troisième victime de l'avalanche de la Roche-Pourrie, a été retrouvé aujourd'hui par un groupe d'alpinistes. Les obsèques auront lieu jeudi."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le cadavre mystérieux de Lyon",
    "summary": "À Lyon, une foule importante a défilé devant le corps d'une femme non identifiée. Les autorités enquêtent sur la piste d'une habituée du quartier des Jacobins, surnommée 'La Marseillaise'.",
    "paragraphs": [
      "Lyon, 26 février. Une foule immense a défilé devant le cadavre exposé à la morgue. La police a recueilli des témoignages suggérant qu'il pourrait s'agir d'une femme surnommée 'La Marseillaise', une femme galante fréquentant le quartier des Jacobins. Une enquête est en cours."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Rixe mortelle",
    "summary": "Un drame conjugal a ensanglanté la commune de Vilazé. Le carrier Joseph Demée a abattu son camarade Julien Beaufils lors d'une violente altercation avant de mettre fin à ses jours.",
    "paragraphs": [
      "Un drame sanglant a eu lieu dans la commune de Vilazé. Joseph Demée, un carrier, a abattu son camarade Julien Beaufils lors d'une dispute d'ivrognes concernant une femme. Après son forfait, Demée s'est suicidé."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Faits Divers",
    "title": "Meurtrière à trois ans",
    "summary": "À Coutelle, un drame atroce a endeuillé une famille : une enfant de trois ans, en jouant avec un vieux fusil chargé, a accidentellement abattu sa mère, Mme Thérèse Parnos, qui était sur le point de mettre au monde un second enfant.",
    "paragraphs": [
      "Un accident effroyable vient de se produire à Coutelle. Une fillette de trois ans, trouvant un vieux fusil chargé à portée de main, a fait feu par mégarde ; le coup atteignit sa mère, Mme Thérèse Parnos, qui était sur le point de donner le jour à un second enfant."
    ]
  },
  {
    "id": 12,
    "page": 1,
    "category": "Faits Divers",
    "title": "Égorgée par son chien",
    "summary": "Dans la commune de Lavillatte, une tragédie a frappé une famille : une fillette de deux ans a été mortellement attaquée par leur chien, pris d'un soudain accès de rage. L'animal a dû être abattu pour dégager la malheureuse victime.",
    "paragraphs": [
      "Dans la commune de Lavillatte, un drame atroce s'est déroulé. Une fillette de deux ans a été tuée par le chien de la famille, subitement pris d'un accès de rage. Il a été nécessaire d'abattre l'animal pour pouvoir retirer le corps de la malheureuse enfant de ses crocs."
    ]
  },
  {
    "id": 13,
    "page": 1,
    "category": "Faits Divers",
    "title": "Sauvage agression",
    "summary": "À Bonneville, une sanglante altercation a éclaté : l'ouvrier Claude Viollet a violemment agressé sa logeuse avant de se retourner contre son collègue Charles Saddier, armé d'un couteau. Le parquet a diligenté une enquête.",
    "paragraphs": [
      "À Bonneville, une scène de violence inouïe s'est produite : l'ouvrier Claude Viollet a sauvagement agressé sa logeuse, avant de se ruer, un couteau à la main, sur son collègue Charles Saddier. Le parquet a immédiatement diligenté une enquête pour faire toute la lumière sur ces faits."
    ]
  },
  {
    "id": 14,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'accident de Noisy-le-Sec",
    "summary": "Noisy-le-Sec est en proie à une vive consternation. La population a accompagné en masse les sept victimes de la récente tragédie lors de leurs obsèques, célébrées dans une atmosphère de deuil général.",
    "paragraphs": [
      "Les obsèques des sept victimes de l'accident de Noisy-le-Sec ont été célébrées dans une atmosphère de profonde consternation. La population entière a tenu à participer à la cérémonie religieuse ainsi qu'à l'inhumation au cimetière communal, en signe de solidarité avec les familles endeuillées."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "La catastrophe de Noisy-le-Sec",
    "summary": "M. Damolselet, maire de Noisy-le-Sec, a rendu hommage aux sept victimes. L'instruction se poursuit sous la direction du juge André, avec l'audition complexe de M. Beaudinot, seul survivant parmi les vieillards.",
    "paragraphs": [
      "M. Damolselet, maire de Noisy-le-Sec, a prononcé une courte allocution rappelant la triste catastrophe où sept ouvriers ont trouvé la mort.",
      "Après M. Collet, conseiller général, les familles affligées et l'assistance ont rendu un dernier hommage aux victimes, marqué par la pose de simples croix de bois sur les sépultures.",
      "L'instruction suit son cours : M. André, juge d'instruction, a examiné le dortoir et le poêle ayant causé la catastrophe. Il a interrogé M. Beaudinot, le seul survivant des neuf vieillards, bien que l'audition soit rendue ardue par la surdité et l'état de grande faiblesse du témoin."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Opérations militaires en Afrique du Sud",
    "summary": "L'incertitude plane sur les manœuvres de lord Kitchener face au général De Wet. Tandis que les Boers franchissent la voie ferrée vers Komati-Poort, les pluies torrentielles entravent toute progression vers l'Orange.",
    "paragraphs": [
      "L'incertitude demeure quant aux mouvements de lord Kitchener contre De Wet, bien que le général Botha semble avoir réussi à échapper au général French en se dirigeant vers Komati-Poort avec 2 000 Boers.",
      "Le général De Wet et M. Steijn ont traversé la voie ferrée au nord de Kraaikuil. Des pluies abondantes empêchent actuellement les Boers de franchir le fleuve Orange.",
      "À Richmond, le village a subi une attaque des Boers, ce qui a nécessité le renforcement immédiat de la garnison locale."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Protestations à la Chambre des Communes",
    "summary": "Le député irlandais M. Dillon dénonce avec véhémence les méthodes employées en Afrique du Sud, qualifiant l'incendie des fermes et la déportation des populations civiles de contraires aux usages de la guerre.",
    "paragraphs": [
      "M. Dillon, député irlandais, a protesté énergiquement à la Chambre contre l'incendie des fermes et la déportation des femmes et des enfants en Afrique du Sud, jugeant ces actes contraires aux usages de la guerre."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Échos Internationaux",
    "title": "Situation politique en Espagne",
    "summary": "La démission du cabinet Azcarraga fragilise le paysage politique espagnol. Face à l'abstention des libéraux, M. Silvela est pressenti pour constituer un nouveau ministère.",
    "paragraphs": [
      "Le conseil a exposé la situation politique : le cabinet Azcarraga, dont les ministres ont donné leur démission, devra faire face à une vive opposition lors de l'ouverture prochaine des Chambres.",
      "L'abstention des libéraux aux élections locales, approuvée par M. Sagasta, est perçue comme le signe d'une politique passionnée. M. Silvela est pressenti pour former le nouveau cabinet."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Troubles à Oporto",
    "summary": "Des affrontements violents ont éclaté à Oporto entre les étudiants de l'Institut industriel et les forces de l'ordre, provoquant l'indignation du corps professoral.",
    "paragraphs": [
      "Une vive bagarre a éclaté entre les étudiants de l'Institut industriel et la police, faisant plusieurs blessés. Les professeurs prévoient de protester formellement contre l'intrusion des forces de l'ordre dans les bâtiments scolaires."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Social",
    "title": "Grèves et mouvements ouvriers",
    "summary": "Un mouvement de grève touche les métallurgistes à Montceau-les-Mines. Tandis que le calme revient à Chalon-sur-Saône, l'effervescence se propage aux usines Biétrix et aux mines de Meisseix.",
    "paragraphs": [
      "À Montceau-les-Mines, les ouvriers métallurgistes de la maison Aillot ont cessé le travail pour exiger la réintégration de deux de leurs camarades.",
      "À Chalon-sur-Saône, la reprise du travail se poursuit dans le calme, avec une surveillance militaire maintenue aux abords des usines.",
      "Les tailleurs et couturières en grève semblent s'acheminer vers une résolution progressive des conflits par des ententes directes avec les patrons.",
      "Des signes d'effervescence sont également signalés aux usines Biétrix ainsi qu'aux mines de Meisseix."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Chambre des Députés",
    "title": "Séance parlementaire du 26 février",
    "summary": "La Chambre examine les mesures sanitaires contre la peste bubonique au Cap, puis poursuit des débats houleux sur le projet de loi relatif au contrat d'association, marqués par de vives tensions politiques.",
    "paragraphs": [
      "La Chambre a discuté des mesures à prendre contre la peste bubonique sévissant au Cap. M. Waldeck-Rousseau a apporté des précisions rassurantes quant aux dispositions sanitaires rigoureuses déjà mises en œuvre par le gouvernement.",
      "La discussion sur le projet de loi relatif au contrat d'association s'est poursuivie avec intensité. Les débats ont porté sur le régime des congrégations religieuses, provoquant des incidents violents entre les députés lors d'évocations historiques liées aux souvenirs de la Révolution française."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Amélioration du transport du courrier anglo-français",
    "summary": "Une conférence internationale instaure des mesures pour accélérer l'acheminement du courrier entre Paris et Londres, notamment via la ligne Calais-Douvres, grâce à des modernisations techniques et logistiques.",
    "paragraphs": [
      "Une conférence internationale a formellement adopté des mesures visant à accélérer le transport des courriers entre Paris et Londres, et tout particulièrement sur la liaison stratégique Calais-Douvres.",
      "L'investissement dans du matériel moderne, notamment des grues électriques, des wagons-postes perfectionnés et des paquebots spécifiquement affrétés, doit permettre de réduire de trois heures les délais de distribution du courrier."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Crime d'Eupen : arrestation des suspects",
    "summary": "Deux braconniers, Guillaume Paulsen et Théodore François, sont incarcérés aux Pays-Bas pour le meurtre commis à Eupen, malgré leurs dénégations face aux témoignages oculaires qui les accablent.",
    "paragraphs": [
      "Dès la découverte du crime, les soupçons se portèrent sur deux braconniers de profession que nombre de témoins avaient vus, le 22 octobre, rôder aux alentours d'Eupen et sur la route de la Belle. Ils avaient logé à Eupen durant la nuit du 22 au 23, étaient partis vers huit heures du matin et n'avaient plus reparu depuis. Il s'agit des nommés Guillaume Paulsen, Allemand d'origine, et Théodore François, de nationalité belge.",
      "La police allemande, en collaboration avec l'autorité judiciaire belge, a signalé au parquet de Verviers les époux Hubert Mertens, d'Eupen, témoins oculaires de la scène.",
      "Ceux-ci, retournant vers Eupen le 22 octobre, rencontrèrent François et Paulsen, ce dernier porteur d'un fusil, et engagèrent la conversation. Paulsen les invita à boire un verre. Peu après, les époux Mertens poursuivirent leur chemin, tandis que les deux suspects prenaient la direction opposée, Paulsen tenant son arme en attitude de chasse.",
      "À peine avaient-ils fait une soixantaine de pas qu'une détonation retentit. Les époux Mertens, s'étant retournés, virent Paulsen tirer un second coup de feu, sans toutefois pouvoir identifier sa cible. C'est précisément à cet endroit que le cadavre de la victime, Michel, fut découvert ; le fusil de Paulsen fut retrouvé abandonné dans la forêt, à proximité du lieu du drame.",
      "Paulsen et François ont été appréhendés en Hollande, à Echt. Malgré des charges accablantes, ils nient formellement toute culpabilité."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Inculpation de M. Lussin Bassarta",
    "summary": "M. Lussin Bassarta, ancien conseiller municipal, fait l'objet d'une ordonnance d'inculpation pour détournements, signée par le juge d'instruction en police correctionnelle.",
    "paragraphs": [
      "M. le juge d'instruction a signé hier une ordonnance de renvoi en police correctionnelle à l'encontre de M. Lussin Bassarta, ancien conseiller municipal, inculpé pour des faits de détournements."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Nécrologie et Science",
    "title": "Le secret du docteur Elfisio Marini",
    "summary": "La mort du docteur Elfisio Marini, anatomiste napolitain célèbre pour ses techniques de conservation des corps, reste un mystère, le savant ayant emporté ses procédés secrets dans la tombe.",
    "paragraphs": [
      "La disparition de Verdi a accaparé toute la puissance d'émotion des Italiens, au point de faire passer inaperçue la mort d'une célébrité napolitaine : le docteur Elfisio Marini.",
      "Originaire de Sardaigne et installé à Naples, le docteur Marini vivait dans un palais entouré de sarcophages et de momies. Il excellait dans l'art de conserver les cadavres en préservant la couleur naturelle du visage et la souplesse des tissus. Sous ses doigts, la mort revêtait les apparences de la vie.",
      "Il gardait jaloucement son secret, n'exposant ses travaux qu'avec la plus grande circonspection. Le docteur Albert Baudiaudier, lors d'une visite à Rome, nota la perfection étonnante de ses préparations anatomiques, bustes et organes conservés avec un rendu proche du marbre.",
      "Si l'histoire de l'embaumement a progressé depuis Larrey jusqu'à Tranchina et Gannal, nul n'a égalé Marini. Bien qu'il ait aspiré à une chaire universitaire pour dévoiler ses mystères, l'administration lui opposa des refus systématiques. Il a emporté son secret dans la tombe."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le drame de la rue de Ménilmontant",
    "summary": "Une ouvrière, Mme Ernestine Savenet, a été grièvement blessée à la poitrine par son compagnon Léon Nohel lors d'une violente dispute causée par la jalousie. L'agresseur a été arrêté dans un débit de boissons.",
    "paragraphs": [
      "Une journalière, Mme Ernestine Savenet, regagnait son domicile après sa journée d'usine en compagnie de son amant, le nommé Léon Nohel. En chemin, une vive discussion éclata, motivée par la jalousie maladive de l'ouvrier.",
      "La querelle s'envenima rapidement, la jeune femme manifestant sa volonté de reprendre sa liberté. Nohel, saisi d'une fureur soudaine, tira un couteau de sa poche et frappa sa compagne, lui traversant le bras avant de lui porter un coup profond à la poitrine.",
      "Tandis qu'Ernestine Savenet s'affaissait sur la voie publique, le meurtrier prit la fuite. Il fut appréhendé peu après dans un bar du voisinage, après avoir opposé une résistance désespérée aux agents. La victime a été transportée d'urgence à l'hôpital Tenon."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression au boulevard de Belleville",
    "summary": "M. Jean Josset a été violemment pris à partie par quatre individus sur le boulevard de Belleville. Les agresseurs, qui ont tenté de nier les faits devant les autorités, ont été écroués.",
    "paragraphs": [
      "M. Jean Josset, ouvrier, fut brutalement assailli par quatre individus alors qu'il circulait sur le boulevard de Belleville. Il fut rapidement terrassé par ses agresseurs, mais l'intervention prompte des gardiens de la paix mit fin à la scène.",
      "Les malfaiteurs, nommés Auguste Watel, Joseph Dhoubart, Joseph Pichon et Marcel Guillot, furent capturés au terme d'une lutte mouvementée. Bien qu'ils aient prétendu être innocents et poursuivaient eux-mêmes des rôdeurs, ils n'ont pu convaincre les agents. M. Josset, blessé au crâne, a pu regagner son domicile après avoir reçu les soins nécessaires."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un enfant étranglé",
    "summary": "Le corps d'un nouveau-né a été découvert dans une malle au domicile de Mlle Rebiffet, rue du Faubourg-Saint-Denis. La jeune femme a avoué un accouchement clandestin et le meurtre de l'enfant.",
    "paragraphs": [
      "Le commissaire de police du quartier a été avisé de la macabre découverte du cadavre d'un nouveau-né au domicile de Mlle Rebiffet, sis rue du Faubourg-Saint-Denis. Interrogée, la jeune femme a fini par avouer son accouchement clandestin.",
      "Le nourrisson a été retrouvé dissimulé dans une malle, le cou enserré par une cordelette. L'examen médical a formellement conclu que l'enfant était viable et avait vécu après sa naissance. Mlle Rebiffet a été placée sous bonne garde et transférée à l'Hôtel-Dieu."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Cambrioleur arrêté",
    "summary": "Surpris en flagrant délit de cambriolage chez Mme Rigaud, boulevard Richard-Lenoir, le nommé François Gérin, un interdit de séjour, a été appréhendé par les forces de l'ordre.",
    "paragraphs": [
      "Un individu, identifié comme étant François Gérin, a été surpris en plein travail alors qu'il fracturait les meubles dans l'appartement de Mme Rigaud, situé boulevard Richard-Lenoir. Arrêté séance tenante par la police, cet interdit de séjour a été immédiatement conduit au dépôt pour y attendre sa comparution."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un fou incendiaire",
    "summary": "Victor Leroy, ouvrier tourneur, a délibérément mis le feu à son logement de la rue Cauchy après l'avoir imbibé de pétrole. Il a été interné à l'infirmerie spéciale du dépôt après une vive résistance.",
    "paragraphs": [
      "Victor Leroy, ouvrier tourneur, a mis le feu à son logement de la rue Cauchy en y répandant méthodiquement du pétrole. Contemplant les flammes avec une satisfaction étrange, il opposa une résistance farouche aux sauveteurs venus l'extraire de son brasier. Il a été dirigé par les autorités vers l'infirmerie spéciale du dépôt."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide mystérieux",
    "summary": "Félix Guidet a tenté de mettre fin à ses jours en se tirant un coup de revolver dans la bouche au sein d'une crémerie du faubourg Poissonnière. Son état est jugé désespéré à l'hôpital Lariboisière.",
    "paragraphs": [
      "Félix Guidet s'est tiré un coup de revolver dans la bouche, hier, dans une crémerie de la rue du Faubourg-Poissonnière. Transporté d'urgence à l'hôpital Lariboisière, son état est jugé désespéré par les médecins."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un fonctionnaire allemand",
    "summary": "Ernst Leutzner, ancien percepteur des douanes à Kiel, a été appréhendé à la gare de l'Est pour détournement de fonds et faux en écritures. Il sera prochainement extradé vers l'Allemagne.",
    "paragraphs": [
      "Ernst Leutzner, ancien percepteur des douanes à Kiel, a été arrêté à la gare de l'Est. Il était activement recherché pour détournement de deniers publics et faux en écritures. Il sera extradé vers l'Allemagne dans les plus brefs délais."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Cadavre dans la Seine",
    "summary": "Le corps d'une femme d'une cinquantaine d'années a été repêché sous le pont de l'Estacade. La dépouille, restée un mois dans l'eau, a été transportée à la Morgue aux fins d'identification.",
    "paragraphs": [
      "Le corps d'une femme, âgée d'une cinquantaine d'années, a été retiré de la Seine sous le pont de l'Estacade. Aucune pièce d'identité n'ayant été retrouvée et le corps ayant séjourné un mois dans l'eau, il a été conduit à la Morgue."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Décès subit",
    "summary": "M. Lallemand, restaurateur rue Boulard, a été frappé d'un décès brutal hier alors qu'il gravissait les marches de la mairie du quatorzième arrondissement.",
    "paragraphs": [
      "M. Lallemand, restaurateur rue Boulard, est mort subitement hier alors qu'il montait l'escalier de la mairie du quatorzième arrondissement."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une partie qui finit mal (Cahors)",
    "summary": "À Bagnac, une partie de cartes a dégénéré en une rixe tragique. M. Azarguil, cultivateur, a succombé le lendemain aux blessures reçues lors de cette violente agression.",
    "paragraphs": [
      "Une rixe mortelle a éclaté à Bagnac lors d'une partie de cartes. M. Azarguil, cultivateur, a été frappé avec une telle violence qu'il a succombé à ses blessures le lendemain."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue",
    "summary": "Chronique judiciaire et dramatique de la banlieue parisienne : suicides à Puteaux et Bois-Colombes, vols, agressions à Clichy et Fontainebleau, et un tragique accident mortel à Levallois-Perret.",
    "paragraphs": [
      "Puteaux : Suicide de Jules Cadoux, ancien négociant ruiné par de malheureuses spéculations.",
      "Clichy : Arrestation de Louis Vanand pour le vol de câbles électriques.",
      "Levallois-Perret : Mort tragique du jeune Pierre Lauréat, écrasé par une voiture.",
      "Bois-Colombes : Mme veuve Alexandrine Teyssonnier s'est donné la mort en s'asphyxiant au charbon.",
      "Saint-Mandé : Un incendie survenu rue de l'Épinette a causé la destruction totale du mobilier des époux Trinquard.",
      "Choisy-le-Roi : Une enquête est en cours concernant un acte criminel près de la gare. Louis Gounillon, en proie à un accès de démence, a attaqué les agents et blessé le sous-brigadier Strate.",
      "Malakoff : Escroquerie commise par Émile Thévenin au préjudice d'un boucher local.",
      "Clamart : Arrestation de Désiré Thivenet pour une série de vols perpétrés dans plusieurs villas.",
      "Fontainebleau : Mme veuve Grallier a projeté de l'acide sulfurique au visage d'Alphonse Patron, son futur gendre."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "État des lieux des scènes parisiennes : nouvelles représentations, reports dus à l'épidémie de grippe sévissant dans la capitale et programmes musicaux classiques.",
    "paragraphs": [
      "Théâtre de l'Athénée : Première représentation de la pièce « Pour une amie ».",
      "Comédie-Française : La grippe qui sévit actuellement retarde la première de « Patrie ».",
      "Odéon : Comédie en un acte de M. Courtia Vitoux.",
      "Schola Cantorum : Séances consacrées à la musique française des XVIIe et XVIIIe siècles.",
      "Olympia et Nouveau-Cirque : Programmes détaillés des attractions en cours."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Communications diverses",
    "title": "Banquet de l'Union céramique et chaufournière",
    "summary": "Le banquet annuel de l'Union céramique et chaufournière de France se tiendra le 4 mars à l'hôtel Continental, sous la présidence de M. Jean Dupuy, ministre de l'Agriculture.",
    "paragraphs": [
      "Le banquet annuel de l'Union céramique et chaufournière de France aura lieu le lundi 4 mars à dix-neuf heures trente, dans la grande salle des fêtes de l'hôtel Continental.",
      "Cette cérémonie solennelle sera présidée par M. Jean Dupuy, ministre de l'Agriculture."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Communications diverses",
    "title": "Banquet de la société de secours mutuel",
    "summary": "La société de secours mutuel organise son banquet annuel suivi d'un bal, le dimanche 3 mars, au salon des familles, avenue de Saint-Mandé.",
    "paragraphs": [
      "La société de secours mutuel donnera son banquet annuel, suivi d'un bal de nuit, le dimanche 3 mars, à sept heures du soir, au salon des familles, avenue de Saint-Mandé.",
      "Le prix du banquet et du bal est fixé à 6 francs par personne et 2 francs pour les enfants."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Science et Santé",
    "title": "L'Eau déperditrice Stowe contre l'obésité",
    "summary": "Présentation du traitement externe par l'Eau déperditrice du naturaliste Stowe, une méthode basée sur l'osmose pour combattre l'obésité sans les risques liés à l'absorption de médicaments.",
    "paragraphs": [
      "De nombreuses personnes souffrant d'un excès d'embonpoint se demandent quels moyens employer pour combattre sans danger cette infirmité, qui menace leur vie par ses inévitables conséquences : albuminurie, diabète, embolie du cœur ou apoplexie.",
      "Avant toutes choses, abstenez-vous des régimes alimentaires spéciaux qui anémient inutilement l'organisme et fatiguent l'estomac. Gardez-vous aussi des agents physiologico-chimiques ou remèdes internes dangereux qui ruinent la santé.",
      "À ce jour, le seul moyen efficace et scientifiquement fondé pour maigrir rapidement, sans absorber de médicaments dangereux, est le traitement externe par l'Eau déperditrice du naturaliste Stowe. C'est le seul qui ait reçu l'approbation de la Société de médecine de France.",
      "Cette découverte repose sur la loi physique de l'osmose et a pour élément principal une algue de l'Océan Pacifique, l'Helminthocorton. L'Eau déperditrice Stowe s'emploie en lotions ou en évaporation.",
      "Pour recevoir l'exposé scientifique de la méthode Stowe, ainsi que son mode d'emploi, il suffit de se rendre au cabinet du spécialiste à Paris, 9, rue Montesquieu, ou de lui adresser une correspondance."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Histoire et Science",
    "title": "L'invention de Philippe Lebon",
    "summary": "Centenaire oublié de Philippe Lebon, l'ingénieur français visionnaire qui inventa l'éclairage au gaz. Un retour sur son génie et son destin tragique, trop souvent éclipsé par les développements britanniques.",
    "paragraphs": [
      "Alors que les peuples s'efforcent de commémorer les grands anniversaires de leur histoire, cette année s'écoule sans qu'il soit question de célébrer le centenaire de Philippe Lebon d'Humbersin, ingénieur français à qui nous sommes redevables d'un bienfait dont notre civilisation pourrait difficilement se passer : l'éclairage au gaz.",
      "Il y a bientôt cent ans, Philippe Lebon réalisait le premier essai d'éclairage au gaz sur une vaste échelle. Fils d'un officier, sorti de l'École des ponts et chaussées en 1787, il s'était d'abord appliqué au perfectionnement des machines à vapeur.",
      "C'est en étudiant les gaz produits par la calcination du bois qu'il a conçu le « thermolampe ». Malgré des expériences prometteuses à Paris, ses travaux ont été interrompus par son assassinat mystérieux le 2 décembre 1804.",
      "Si l'invention a été largement développée par les Anglais, notamment William Murdoch et Samuel Taylor, l'honneur de la découverte doit demeurer à Philippe Lebon, qui a ouvert la voie à l'éclairage public moderne avant que l'électricité ne vienne prendre le relais."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Sports",
    "title": "Grand match cycliste : Jacquelin contre Major Taylor",
    "summary": "En prévision du jeudi de l'Ascension, le champion cycliste Jacquelin affiche une confiance absolue face à son prochain adversaire, le coureur américain Major Taylor, dont la réputation reste à confirmer.",
    "paragraphs": [
      "On annonce pour le jeudi de l'Ascension un grand match cycliste entre les deux adversaires : Jacquelin et Major Taylor, le coureur nègre.",
      "Interrogé à ce sujet, Jacquelin a déclaré : « Voilà six ans que l'on croit découvrir chaque année un homme meilleur que moi, et six ans qu'on n'a trouvé personne dont je ne sois arrivé à triompher. Pourquoi ne me rencontrerais-je pas avec ce négrillon ? On le dit extraordinaire. »"
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Sports",
    "title": "Championnat de football-rugby",
    "summary": "Le Parc des Princes accueille ce dimanche une rencontre décisive pour les championnats de Paris et de France, opposant le Racing-Club de France au Stade français dans un match aux allures de revanche.",
    "paragraphs": [
      "Le match qui décidera du championnat de Paris et, probablement, du championnat de France, sera disputé dimanche après-midi au Parc des Princes entre le Racing-Club de France et le Stade français.",
      "La dernière rencontre, en décembre dernier, avait vu la victoire du Racing par 15 points. Depuis, les deux équipes ont progressé, notamment le Stade français sous la direction de son nouveau capitaine, Dedet."
    ]
  }
];
