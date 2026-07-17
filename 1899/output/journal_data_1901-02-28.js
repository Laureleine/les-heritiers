// Date: 1901-02-28
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-02-28 (Version Restaurée, 28 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Justice",
    "title": "L'incident Gayte aux assises",
    "summary": "Lors de l'audience, la Cour ordonne la saisie des pièces versées aux débats. L'accusé Gayte tente de minimiser l'incident, tandis que l'avocat général réclame une instruction sur ses mystérieuses correspondances.",
    "paragraphs": [
      "La Cour rentre en séance et décide de saisir les papiers versés aux débats.",
      "Elle les soumet à Gayte qui, d'abord très agité, retrouve son sang-froid pour déclarer que cette affaire est sans importance.",
      "L'avocat général intervient alors pour réclamer une instruction régulière sur les destinataires demeurés inconnus des lettres de Gayte.",
      "Seul Gayte proteste et demande à ce que l'on appelle Baume et Blain pour clore l'incident. Il prétend que la lettre était destinée à Clément Baume, un camarade de régiment alors en permission à Saint-Pons."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le crime de Campenhout",
    "summary": "Le meurtre d'une fermière à Campenhout connaît un nouveau rebondissement : le neveu de la victime, arrêté et passé aux aveux, dénonce deux repris de justice en fuite vers la France.",
    "paragraphs": [
      "Le Petit Parisien a relaté récemment l'assassinat d'une fermière étranglée à Campenhout. Le neveu a été arrêté et est passé aux aveux.",
      "Il désigne désormais « Louis l'Américain » et « Jef le Français », deux repris de justice, comme les auteurs véritables du crime. Des recherches actives sont en cours en France, où les suspects auraient trouvé refuge."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "La crise ministérielle en Espagne",
    "summary": "Face à l'instabilité politique, la reine régente d'Espagne entame des consultations. La nomination de M. Silvela pour former le nouveau cabinet semble désormais acquise.",
    "paragraphs": [
      "La reine régente a entamé ses consultations officielles afin de résoudre la crise politique actuelle.",
      "Alors que des avis divergents s'expriment quant à la composition du futur cabinet, il est désormais considéré comme certain que la régente chargera M. Silvela de former le nouveau ministère."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Faits Divers",
    "title": "Affaire Ubao à Madrid",
    "summary": "Le juge madrilène a rejeté la requête d'un avoué visant à séparer Mlle Ubao de sa mère. La tentative d'enlèvement a gravement affecté la santé de Mme Ubao.",
    "paragraphs": [
      "Un avoué s'est présenté devant le magistrat pour solliciter le transfert de Mlle Ubao hors du domicile maternel, mais le juge a formellement rejeté cette requête.",
      "Mme Ubao, déjà souffrante, est tombée gravement malade en apprenant cette tentative d'enlèvement."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Arts et Culture",
    "title": "Transfert des cendres de Verdi",
    "summary": "La foule a accompagné le transfert des dépouilles de Verdi et de Giuseppina Strepponi vers la maison de repos pour musiciens à Milan, en présence de nombreuses autorités.",
    "paragraphs": [
      "Le cortège funèbre transportant les dépouilles de Verdi et de Giuseppina Strepponi a quitté le cimetière de Milan pour rejoindre la maison de repos destinée aux musiciens.",
      "La foule était immense tout au long du parcours ; le cortège comprenait de nombreuses autorités ainsi que les représentants officiels des gouvernements étrangers."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Colonialisme",
    "title": "Combats et troubles en Somalie",
    "summary": "Un détachement anglais, durement éprouvé lors d'un engagement à Sannasa, a dû battre en retraite vers Aff-Madou. Une expédition punitive est déjà en préparation pour mater la rébellion du Mad Mullah.",
    "paragraphs": [
      "Un détachement anglais a été attaqué à Sannasa par des Somalis. L'ennemi a perdu cent cinquante hommes, mais le détachement, ayant subi des pertes sérieuses, a dû se replier sur Aff-Madou.",
      "Une nouvelle expédition est d'ores et déjà prévue pour mater le Mad Mullah dans le nord du Somaliland."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Révolte au Wadai",
    "summary": "Une insurrection a éclaté au Wadai contre le sultan en place, les insurgés ayant porté Ahmed, fils du défunt sultan Ali, sur le trône. Des troupes françaises seraient en marche.",
    "paragraphs": [
      "Une révolte a éclaté contre le sultan du Wadai. Les rebelles ont proclamé Ahmed, fils du feu sultan Ali, comme nouveau souverain.",
      "On rapporte que des troupes françaises seraient arrivées à mi-chemin entre le Touat et le Wadai."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Politique",
    "title": "La raffinerie de Saint-Ouen",
    "summary": "Les députés de la Seine, MM. Ronou et Walter, se sont entretenus avec M. Waldeck-Rousseau au sujet de la raffinerie de Saint-Ouen. L'interpellation est reportée à la fin de la semaine prochaine.",
    "paragraphs": [
      "MM. Ronou et Walter, députés de la Seine, ont eu un entretien avec le président du Conseil, M. Waldeck-Rousseau, au sujet de la situation de la raffinerie de Saint-Ouen.",
      "La discussion de l'interpellation a été reportée au vendredi de la semaine prochaine."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Retour de la mission Gentil",
    "summary": "M. Gentil, commissaire du gouvernement au Chari, est de retour à Paris. Il a reçu un accueil chaleureux de la part de sa famille et des membres de la Société de géographie.",
    "paragraphs": [
      "M. Gentil, commissaire du gouvernement au Chari, et les membres de sa mission, sont arrivés hier matin à Bordeaux, puis à Paris.",
      "L'explorateur a été chaleureusement accueilli par sa famille ainsi que par les membres de la Société de géographie."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Justice",
    "title": "Procès contre la Compagnie du Métropolitain",
    "summary": "M. Cabany, ingénieur à la retraite, poursuit la Compagnie du Métropolitain après un incident à la station Marbeuf. Il réclame 5 000 francs de dommages-intérêts. La justice statuera à huitaine.",
    "paragraphs": [
      "M. Cabany, ingénieur à la retraite, a intenté une action en justice contre la Compagnie du Métropolitain à la suite d'un incident survenu à la station Marbeuf.",
      "Il réclame cinq mille francs de dommages-intérêts pour la manière dont il a été traité par les employés de la compagnie. La première chambre statuera à huitaine."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Social",
    "title": "Grève des ouvriers à Marseille",
    "summary": "Une grève a éclaté parmi les ouvriers des quais de Marseille, ces derniers protestant contre le maintien de certains contremaîtres. La situation demeure tendue et préoccupante pour l'activité commerciale du port.",
    "paragraphs": [
      "Une grève a été déclarée chez les ouvriers des quais de Marseille. Les patrons refusent catégoriquement le renvoi de certains contremaîtres, provoquant un arrêt total des opérations de manutention.",
      "Les grévistes ont manifesté leur mécontentement et la situation est désormais jugée grave pour le commerce marseillais, paralysant le transit des marchandises sur les quais."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Social",
    "title": "Mouvement des mineurs à Montceau-les-Mines",
    "summary": "La grève persiste à Montceau-les-Mines. Réunis à la salle Pézerat, les mineurs ont mandaté trois délégués pour porter leurs revendications devant le gouvernement et réaffirmer leur détermination.",
    "paragraphs": [
      "Les mineurs ont tenu plusieurs réunions importantes à la salle Pézerat. La poursuite du mouvement de grève a été réaffirmée avec une détermination unanime par l'ensemble des ouvriers présents.",
      "Trois délégués ont été officiellement désignés pour soumettre les revendications du bassin au gouvernement, espérant ainsi obtenir une issue favorable au conflit."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Social",
    "title": "La grève des mineurs et la fédération nationale",
    "summary": "La Fédération nationale des mineurs maintient ses exigences de réformes sociales et n'exclut pas une grève générale, tout en attendant la position des bassins du Nord et du Pas-de-Calais.",
    "paragraphs": [
      "Le mouvement de grève se poursuit afin que satisfaction soit enfin accordée aux ouvriers. D'autre part, la grève générale internationale, déjà consentie lors du dernier congrès national, sera très vraisemblablement votée lors du prochain congrès qui doit se tenir à Londres.",
      "La Fédération nationale est résolue à la provoquer au mois de juillet si les mineurs de Montceau et de Saint-Éloy n'ont pas obtenu satisfaction. Nous sommes, pour l'heure, sans information précise relative à la résolution des mineurs de Lens et du Pas-de-Calais, qui ne semblent pas disposés à prendre part à ce mouvement général.",
      "La Fédération déclare être pleinement résolue à poursuivre l'obtention des trois grandes réformes votées dimanche par le comité national : le minimum des salaires, la retraite après vingt-cinq ans de travail et l'établissement de la journée de huit heures."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Social",
    "title": "Les ouvriers de l'usine Biétrix",
    "summary": "Confirmant les rumeurs, les tourneurs de l'usine Biétrix ont cessé le travail pour exiger le renvoi d'un contremaître et la réintégration d'un camarade licencié.",
    "paragraphs": [
      "Ainsi que nous l'avions fait pressentir hier, un certain nombre d'ouvriers de l'usine Biétrix ont cessé le travail. Ces ouvriers appartiennent plus particulièrement à l'atelier des tourneurs.",
      "Ils réclament le renvoi d'un contremaître et la réintégration d'un ouvrier congédié par ce dernier. On espère toutefois que les négociations permettront aux choses d'entrer dans la voie d'un arrangement rapide."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'attentat contre M. Deschanel",
    "summary": "La chambre des mises en accusation statuera demain sur la demande de liberté provisoire de Mlle Vera Gelo. La victime, Mlle Zelonine, sollicite sa libération pour qu'elle puisse la soigner.",
    "paragraphs": [
      "C'est demain que la chambre des mises en accusation doit statuer sur la requête en liberté provisoire présentée par Mlle Vera Gelo.",
      "Mlle Zelonine, la victime du drame, a adressé une lettre poignante au président et aux conseillers les suppliant de lui rendre son amie. De son côté, Mlle Vera Gelo a adressé une missive aux mêmes magistrats, réaffirmant sa bonne foi, son profond respect de la justice et son désir ardent d'assister son amie à son chevet."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Faits Divers",
    "title": "La colère de l'Italien",
    "summary": "Au passage Raguinot, un Italien nommé Eugène Appiano a fait feu sur sa maîtresse, Thérèse Carluetto. La balle a accidentellement atteint une passante, Mme Victorine Chéron, transportée à l'hôpital Saint-Antoine.",
    "paragraphs": [
      "Une femme, Thérèse Carluetto, sortait hier soir de son domicile, 27 passage Raguinot, lorsqu'elle se trouva en présence de son amant, un Italien nommé Eugène Appiano, âgé de quarante et un ans.",
      "Une violente discussion s'éleva ; celui-ci tira un revolver de sa poche et fit feu sur sa maîtresse. La balle alla frapper une ménagère, Mme Victorine Chéron, qui fut transportée d'urgence à l'hôpital Saint-Antoine. Le meurtrier a été arrêté."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un hôte inattendu",
    "summary": "Mme Crépin, couturière rue Guy-Patin, a été agressée à son domicile par un cambrioleur. Grâce aux appels au secours de la victime, l'individu, nommé Alexandre Bérelli, a été appréhendé par les gardiens de la paix.",
    "paragraphs": [
      "Mme Crépin, couturière âgée de cinquante-deux ans, habitant rue Guy-Patin, a trouvé hier matin son appartement ouvert. Face à face avec un cambrioleur, elle fut frappée brutalement au visage.",
      "La victime put toutefois appeler au secours avant que son agresseur ne s'enfuie. Des voisins et deux gardiens de la paix sont intervenus pour maîtriser l'individu. Le cambrioleur a déclaré se nommer Alexandre Bérelli et a été conduit au poste de police, à la disposition de la justice."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une désespérée",
    "summary": "Drame rue des Amandiers : l'instituteur Hector Noisin a retrouvé sa mère, Marthe Noisin, sans vie après qu'elle se soit empoisonnée à l'acide muriatique, désespérée par l'isolement.",
    "paragraphs": [
      "M. Hector Noisin, instituteur, avait reçu une lettre de sa mère lui annonçant son intention funeste de mettre fin à ses jours. Arrivé à Paris, rue des Amandiers, il trouva sa mère, Mme Marthe Noisin, étendue sans vie.",
      "La malheureuse s'était empoisonnée en absorbant de l'acide muriatique ; elle déclarait dans une lettre qu'elle ne pouvait plus supporter l'isolement loin de son fils."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un drame du couteau",
    "summary": "Une chiffonnière, Mme veuve Lobjoix, a été grièvement blessée par un coup de couteau porté par un confrère, Claude Parité. La victime a été transportée à l'hôpital Cochin dans un état désespéré.",
    "paragraphs": [
      "Une chiffonnière, Mme veuve Lobjoix, âgée de trente-sept ans, a été attaquée ce matin par un autre chiffonnier, Claude Parité, âgé de vingt-huit ans. Ce dernier, au cours d'une dispute, lui a planté un couteau entre les deux épaules.",
      "La blessée a été transportée à l'hôpital Cochin dans un état jugé désespéré. Le coupable a été immédiatement conduit au dépôt."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie rue du Chemin-Vert",
    "summary": "Un incendie s'est déclaré chez M. Bouliot, fabricant de jouets. Les pompiers ont circonscrit le foyer, mais Mme Lepsigeant et Mme Camille Lemuire ont été blessées lors des secours et admises à l'hôpital Tenon.",
    "paragraphs": [
      "Un commencement d'incendie s'est déclaré hier après-midi chez M. Bouliot, fabricant de jouets. Les sapeurs-pompiers ont rapidement maîtrisé le feu ; cependant, deux personnes ont été blessées lors des opérations de sauvetage : Mme Lepsigeant et Mme Camille Lemuire, toutes deux transportées à l'hôpital Tenon."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de la circulation sur le boulevard Barbès",
    "summary": "Le jeune Edmond Detemans, âgé de dix ans, a été renversé hier par un omnibus sur le boulevard Barbès. Grièvement blessé, il a été transporté d'urgence à l'hôpital Trousseau.",
    "paragraphs": [
      "Hier, à midi quarante-cinq, le jeune Edmond Detemans, âgé de dix ans, a été renversé par un omnibus sur le boulevard Barbès. L'enfant, ayant le bras droit écrasé, a été transporté d'urgence à l'hôpital Trousseau."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tombés d'un échafaudage",
    "summary": "Un grave accident de travail à La Garenne-Colombes a causé des blessures terribles à deux charpentiers. L'un d'eux, Lucien Romain, a été transporté à l'hôpital Beaujon dans un état désespéré.",
    "paragraphs": [
      "Un grave accident s'est produit hier après-midi à La Garenne-Colombes. Deux ouvriers charpentiers, Lucien Romain et Jules Lerau, ont été précipités dans le vide suite au basculement de planches d'un échafaudage.",
      "Jules Lerau a été grièvement blessé. Quant à Romain, tombé sur des fers de lance, il a été littéralement éventré et transporté à l'hôpital Beaujon dans un état désespéré."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en périphérie parisienne",
    "summary": "Série noire en banlieue parisienne : corps repêché à Suresnes, agression à Puteaux, accident chimique à Gennevilliers et drame familial à Sceaux marquent cette journée de faits divers.",
    "paragraphs": [
      "Suresnes : Des éclusiers ont repêché le corps d'un homme ligoté près du barrage.",
      "Puteaux : Un employé de commerce, M. Paul Harau, a tiré des coups de revolver par sa fenêtre dans un accès de fièvre chaude avant d'être maîtrisé par la police.",
      "Gennevilliers : Un livreur, Jules Tafonc, a été gravement brûlé par de l'acide nitrique après la rupture d'une bonbonne.",
      "Saint-Denis : Deux cambrioleurs, Charles Lemehr et Emile Kelichon, ont été arrêtés par les voisins alors qu'ils tentaient de cambrioler un appartement.",
      "Noisy-le-Sec : Obsèques de Parfait Espaulard, victime d'un accident à l'hospice Saint-Antoine de Padoue.",
      "Montreuil-sous-Bois : Le cadavre d'un homme, Jean Druen, a été trouvé dans un escalier ; il semble avoir succombé à une chute accidentelle.",
      "Sceaux : Lors d'une fête de famille, M. Roussèlot a été poignardé par son frère, Victor, qui ne jouissait pas de toutes ses facultés. L'agresseur a été envoyé à l'infirmerie du dépôt."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Courrier des correspondants",
    "title": "Nouvelles des provinces",
    "summary": "Une série de drames endeuille les provinces : un incendie dans l'Oise, une macabre découverte dans un presbytère à Orain et un suicide par noyade à Joigny.",
    "paragraphs": [
      "Clermont (Oise) : Un incendie causé par la chute d'une chaufferette a détruit une voiture et une maison.",
      "Dijon : Découverte tragique à Orain, où la bonne d'un curé a été trouvée morte et son père pendu dans le grenier du presbytère.",
      "Joigny : Un peintre nommé M. Milelot s'est jeté dans son puits, probablement poussé par le désespoir suite à la perte de sa femme."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Faits Divers",
    "title": "Mouvements maritimes des paquebots",
    "summary": "Suivi des lignes maritimes : le paquebot Yarra a quitté Port-Saïd après son escale, tandis que l'Atlantique est arrivé à Rio-de-Janeiro ce 14 février.",
    "paragraphs": [
      "Le paquebot Yarra (Messageries Maritimes), venant du Japon et de l'Indo-Chine, a quitté Port-Saïd le 14 février, à 8 heures du matin.",
      "Le paquebot Atlantique (Messageries Maritimes), allant au Chili et au Brésil, est arrivé à Rio-de-Janeiro le 14 février à 8 heures du matin."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "État civil",
    "title": "Recherches de personnes",
    "summary": "Avis de recherche concernant M. Augustin Hriault, né à Lyon vers 1860, et Mme Anna Héraud, recherchée par sa famille. Toute information est à transmettre aux services compétents.",
    "paragraphs": [
      "M. Minille, demeurant rue Favart à Paris, est à la recherche de renseignements concernant M. Augustin Hriault, né à Lyon aux alentours de 1860.",
      "Mme Anna Héraud, fille de M. Denis Héraud et sœur de M. Louis Héraud, est également activement recherchée par les membres de sa famille."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Presse et Publications",
    "title": "Sommaire de L'Agriculture Nouvelle",
    "summary": "Le nouveau numéro de L'Agriculture Nouvelle, vendu 10 centimes, propose une analyse technique complète sur l'industrie frigorifique, les variétés d'avoines et l'actualité de l'Académie des Sciences.",
    "paragraphs": [
      "Découvrez cette semaine dans L'Agriculture Nouvelle, en vente au prix de 10 centimes : L'Union fait la Force, les échos agricoles, les prévisions météorologiques, les comptes rendus de l'Académie des Sciences, les variétés d'avoines, l'industrie frigorifique, ainsi que les rubriques habituelles sur l'élevage et la législation rurale."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Spectacles",
    "title": "Programmes des théâtres parisiens",
    "summary": "Programme des représentations théâtrales à Paris pour la journée du 14 février, incluant les affiches de l'Odéon, du Châtelet, de la Porte-Saint-Martin et du Théâtre Antoine.",
    "paragraphs": [
      "Représentations prévues pour la journée du 14 février : Théâtre de l'Odéon (La Fille de l'Avare), Théâtre du Châtelet (Le Domaine), Théâtre de la Porte-Saint-Martin (Le Bossu) et Théâtre Antoine (Les Remplaçantes).",
      "Le public est également convié aux diverses représentations programmées dans les théâtres de la Gaîté, des Variétés et des Bouffes-Parisiens."
    ]
  }
];
