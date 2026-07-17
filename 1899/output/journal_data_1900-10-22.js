// Date: 1900-10-22
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-10-22 (Version Restaurée, 49 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "LE PARIS NOUVEAU",
    "summary": "Au lendemain de l'Exposition universelle, le visage de Paris s'apprête à une mutation architecturale profonde, transformant la Seine en une artère monumentale reliant la Concorde au Champ-de-Mars transfiguré.",
    "paragraphs": [
      "Il semble qu'une ère nouvelle s'ouvre pour les bâtisseurs dans ce Paris que l'Exposition a mis en goût de puissantes œuvres architecturales, et que le magnifique effort de ces dernières années, qui nous a dotés de plusieurs palais et qui a jeté plusieurs ponts monumentaux sur la Seine, soit appelé à se prolonger en vue de terminer ce qui a été commencé de beau et d'utile.",
      "C'est là le sol du Paris nouveau qui nous a été révélé en ces six mois de fête et qui, débarrassé de ses constructions hâtives, se couvrira désormais d'édifices et de monuments, selon un plan qu'auront à dresser nos plus habiles architectes.",
      "Il est évident que le centre de Paris sera demain place de la Concorde, en attendant qu'il soit fixé place de l'Étoile, ce qui ne saurait manquer d'advenir après trois ou quatre générations.",
      "Tel est, en ses grandes lignes, le plan du Paris nouveau dont nous sommes appelés à apprécier les évolutions. Il fera de la Seine, on doit l'espérer, un boulevard qui marche, une voie triomphale bordée d'édifices, reliant dignement les palais de la Concorde et des Champs-Élysées au quartier idyllique dont la Ville prévoit l'éclosion au Champ-de-Mars transfiguré."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "LE FRUIT DÉFENDU",
    "summary": "Jérôme, ayant pardonné à sa fille sans aucune amertume, souhaite désormais la maintenir auprès de lui et de sa mère. Il tente de s'enhardir en retournant sur les lieux de leurs anciennes tourmentes.",
    "paragraphs": [
      "Jérôme avait pardonné à sa fille, sans arrière-pensée. Jamais plus, dès lors, après ces jours si tristes, il ne fit d'allusions à ce qui, il y a quelques jours, bouleversait sa vie.",
      "Le père, en effet, ne voulait plus se séparer de l'enfant. Il voulait qu'elle vécût désormais sous les yeux de la mère.",
      "Le lendemain, il repassa du même côté. Il venait tout exprès, renvoyait son fiacre au coin du boulevard et là, il se promenait ; il s'enhardit à entrer, chercha Gaspard pour se donner une contenance."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Le projet d'annexion des communes suburbaines",
    "summary": "Le gouvernement prépare un projet de loi visant à annexer à Paris les communes de Neuilly, Levallois-Perret, Clichy et Saint-Ouen, suite logique à la démolition de l'enceinte fortifiée de la capitale.",
    "paragraphs": [
      "Le gouvernement étudie en ce moment un important projet de loi, qui ne tardera pas à être déposé, afin de décider l'annexion à Paris des communes de Neuilly, de Levallois-Perret, de Clichy et de Saint-Ouen.",
      "Cette annexion est la conséquence naturelle de la démolition de l'enceinte fortifiée.",
      "D'ailleurs, cette loi, qui agrandira la ville de Paris de 2 500 hectares environ, occupés par 150 000 habitants, ne sera votée qu'après une consultation des communes et de longues négociations où seront discutés les intérêts des différentes collectivités que le projet propose de confondre en une seule."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "DANS LE SUD ALGÉRIEN",
    "summary": "Une expédition d'envergure se prépare pour la mi-décembre dans le Sud algérien. Trois colonnes militaires convergeront vers Djenien-Bou-Rezg pour neutraliser les dissidents marocains des tribus Doui-Menia et Beni-Guill.",
    "paragraphs": [
      "Une opération importante se prépare dans l'extrême-sud pour le milieu de décembre prochain. L'intendance effectue de gros approvisionnements, notamment à Djenien-Bou-Rezg.",
      "Trois colonnes vont être formées et convergeront en vue d'une action commune pour en finir avec les dissidents marocains des Doui-Menia et Beni-Guill."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "LA CONVENTION ANGLO-ALLEMANDE",
    "summary": "La convention anglo-allemande suscite un vif émoi diplomatique en Europe. L'omission délibérée de la Russie dans ce document est perçue par la France comme un signal de méfiance nécessitant une vigilance accrue.",
    "paragraphs": [
      "La convention anglo-allemande, que nous avons fait connaître hier et dont nous avons signalé l'importance, produit un effet considérable en Europe, ainsi que l'attestent tous les journaux étrangers.",
      "Toutefois, on ne peut s'empêcher de remarquer que ce document diplomatique, dans sa communication aux grandes puissances, omet délibérément le nom de la Russie. Cet oubli étant certainement volontaire, il est permis d'y voir une méfiance à l'égard du gouvernement du Tsar, une sorte de mise en demeure adressée aux Russes.",
      "La France, alliée à la Russie, ne doit voir qu'une chose dans cette convention anglo-allemande : la nécessité de veiller à ce que soit maintenu l'abandon de toute idée de conquête territoriale."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "UN DRAME EN FIACRE",
    "summary": "Vers deux heures du matin, un jeune ouvrier fumiste de seize ans, Émile Després, a tiré sur son amie avec un revolver lors d'une dispute dans un fiacre. La victime a été grièvement blessée à la cuisse.",
    "paragraphs": [
      "Vers deux heures, hier matin, au moment où le fiacre passait, capote baissée, à l'intersection des boulevards Sébastopol et Saint-Denis, un coup de feu partait de l'intérieur de la voiture qui s'arrêtait brusquement.",
      "La jeune fille ayant répondu par des sarcasmes aux reproches de son amant, celui-ci, devenu furieux, tira un revolver et fit feu sur elle à bout portant, la blessant à la cuisse.",
      "L'auteur de la tentative de meurtre se nomme Émile Després, ouvrier fumiste ; il est âgé de seize ans."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Grand Incendie à Bagnolet",
    "summary": "Un violent incendie a ravagé une importante usine à Bagnolet hier matin. Les dégâts sont estimés à cent mille francs et trois personnes ont été blessées lors des opérations de secours.",
    "paragraphs": [
      "Un violent incendie s'est déclaré hier matin vers cinq heures, à Bagnolet, détruisant en grande partie une importante usine, et mettant en émoi la population de cette paisible localité.",
      "Le sinistre a causé des dégâts fort importants, qui sont évalués à une centaine de mille francs. Trois personnes ont été blessées durant les opérations de sauvetage."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame familial à Rosny-sous-Bois",
    "summary": "À Rosny-sous-Bois, Mme Gayout a tenté d'empoisonner sa fille au laudanum avant de se poignarder. Secourues par le docteur Estieux, les deux victimes ont été transportées à l'hôpital.",
    "paragraphs": [
      "Un drame navrant et assez étrange s'est déroulé avant-hier après-midi à Rosny-sous-Bois. Une jeune mère, Mme Gayout, après avoir fait boire du laudanum à sa fillette, s'est frappée elle-même de plusieurs coups de couteau à la poitrine dans un accès de mélancolie.",
      "Le docteur Estieux est intervenu pour administrer un antidote à l'enfant et à la mère. Les deux victimes ont été transportées à l'hôpital."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "La Prise de Pao-Ting-Fou",
    "summary": "La ville de Pao-Ting-Fou a été occupée par la colonne française avant l'arrivée des troupes internationales parties de Pékin, lesquelles sont favorablement accueillies par les populations locales.",
    "paragraphs": [
      "Pao-Ting-Fou a été pris par la colonne française bien avant l'arrivée de la colonne internationale partie de Pékin.",
      "La conduite de nos troupes est exemplaire. Celles qui font partie de la colonne internationale sont particulièrement bien accueillies par les populations."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Extrême-Orient",
    "title": "La situation en Chine",
    "summary": "La presse russe analyse le soutien du gouvernement mandchou aux Boxers et suggère qu'un mouvement insurrectionnel dans le Sud pourrait, en renversant la dynastie, faciliter une paix durable.",
    "paragraphs": [
      "Les Novosti, dans un article sur la situation en Chine, constatent qu'il n'est pas douteux que le mouvement des Boxers soit fomenté, stipendié et secondé de différentes manières par le gouvernement chinois, non moins hostile aux étrangers que les Boxers eux-mêmes.",
      "Les puissances ont tort, ajoute le journal russe, de chasser les nouveaux mouvements insurrectionnels qui commencent à se manifester dans le Sud de la Chine, puisqu'il appert des dernières informations que celui-ci n'a pas un caractère anti-étranger, mais qu'il vise tout au moins un renversement de la dynastie des Mandchous, c'est-à-dire du gouvernement dont le principal but est précisément l'expulsion des étrangers.",
      "Ils supposent que si le mouvement insurrectionnel du Sud de la Chine aboutissait au renversement de la dynastie des Mandchous, on pourrait s'assurer la paix au prix d'un compromis, ce qui serait infiniment plus pratique et profitable que l'absurde politique en vertu de laquelle les puissances font, d'un côté, la guerre au gouvernement chinois, tandis que, de l'autre, elles le soutiennent contre les révoltés."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "La Guerre au Transvaal",
    "title": "Nouvelles des opérations militaires",
    "summary": "Le président Krüger est en route pour Marquas. Les troupes britanniques intensifient leurs manœuvres à Johannesburg et Standerton pour sécuriser les lignes ferroviaires menacées par des commandos boërs.",
    "paragraphs": [
      "Le train spécial, ayant à bord le président Krüger, vient de partir pour Marquas.",
      "Johannesburg, 21 octobre : La présence de commandos boërs ayant été signalée aux environs de Boysen, une colonne britannique vient d'être envoyée dans cette direction.",
      "Standerton, 19 octobre : Des petits détachements boërs, faisant partie des forces poursuivies par le général Buller, sont revenus du nord depuis que la poursuite a été abandonnée et menacent les lignes de communication. La semaine dernière, ils ont endommagé la voie ferrée à l'est et à l'ouest de Standerton.",
      "À Heidelberg, le général commandant a fait conduire en ville plusieurs familles du voisinage soupçonnées d'avoir donné asile aux Boërs.",
      "Le général French est parti pour débarrasser les abords du chemin de fer des Boërs qui s'y trouvent. On croit que ceux-ci sont munis de deux canons ordinaires et d'un canon automatique."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Pétition pour la médiation dans la guerre au Transvaal",
    "summary": "Le bureau français de la Paix sollicite l'intervention diplomatique du gouvernement français pour le conflit au Transvaal, s'appuyant sur les conventions de La Haye et un fort élan de solidarité internationale.",
    "paragraphs": [
      "Le bureau français de la Paix, en exécution des résolutions prises lors du Congrès de la Paix, vient de rédiger une pétition demandant au gouvernement français de prendre l'initiative d'offrir ses bons offices ou de proposer la médiation prévue par la convention de La Haye auprès des gouvernements anglais, orangiste et transvaalien.",
      "Une pétition analogue recueille de nombreuses signatures à l'étranger, notamment en Angleterre, en Allemagne et en Belgique. Dans ce dernier pays, 60 communes sur 2 000 ont déjà totalisé 10 000 signatures.",
      "Le comité pour l'indépendance des Boërs vient de signer cette pétition au nom des 187 000 adhérents inscrits à ce jour sur ses registres."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Anniversaire de Trafalgar",
    "summary": "À Londres, les cérémonies de l'anniversaire de la bataille de Trafalgar ont été marquées par le dépôt d'une couronne en hommage aux marins français et espagnols disparus lors du combat.",
    "paragraphs": [
      "Londres, 21 octobre : Aujourd'hui, jour anniversaire de la bataille de Trafalgar, la colonne de Nelson est, comme chaque année, décorée de drapeaux et de couronnes commémoratives.",
      "La foule qui se presse au pied de la colonne remarque une couronne aux couleurs de la France et de l'Espagne, portant cette inscription : « À la mémoire des braves marins français et espagnols qui combattirent à Trafalgar le 21 octobre »."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Explosion de dynamite à Jumet",
    "summary": "Un attentat à la dynamite a visé les verreries Lambert à Jumet cette nuit. Les responsables de cette tentative d'intimidation contre les ouvriers grévistes ont été interpellés par les autorités.",
    "paragraphs": [
      "Charleroi, 21 octobre : Une explosion de dynamite s'est produite cette nuit aux verreries Lambert, à Jumet. L'explosif, déposé sous les murs de l'usine, n'a fort heureusement causé que des dégâts matériels.",
      "Les auteurs de cet acte criminel ont été arrêtés ; ils ont agi, semble-t-il, pour effrayer les ouvriers verriers qui continuent de travailler. Le parquet de Charleroi s'est rendu sur place, à Jumet."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Étranger",
    "title": "La crise espagnole",
    "summary": "La situation politique à Madrid demeure critique. Tandis qu'un remaniement ministériel semble inévitable, les observateurs craignent une instabilité durable du régime constitutionnel espagnol.",
    "paragraphs": [
      "Madrid, 21 octobre : L'Impartial indique que la crise actuelle pourrait rester simplement ministérielle, mais que si les motifs de désaccord persistent, elle risque de se transformer en une crise du régime constitutionnel.",
      "Le Liberal, commentant la situation, exprime l'opinion que le vaudeville pourrait tourner à la tragédie. Selon plusieurs journaux, l'état de la crise reste inchangé. Un nouveau Conseil des ministres va se réunir et un remaniement du Cabinet paraît inévitable."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Étranger",
    "title": "Le mariage de la reine de Hollande",
    "summary": "La reine des Pays-Bas et le duc Henri ont reçu un accueil enthousiaste à La Haye. La souveraine a présenté son fiancé lors d'une réception officielle, acclamée par une foule conquise entonnant le Wilhelmus-Lied.",
    "paragraphs": [
      "La Haye, 21 octobre : La Reine, le duc Henri et la Reine-mère sont arrivés à la résidence, où ils ont été reçus avec beaucoup d'enthousiasme. La Reine a présenté son fiancé aux autorités à la gare, en présence du ministre d'Allemagne. Le gouverneur de la province a souhaité la bienvenue en termes chaleureux.",
      "Puis, la Reine s'est rendue au palais en voiture découverte. Ils ont été acclamés par une foule nombreuse. La Reine a salué le public qui entonnait le Wilhelmus-Lied ; elle paraissait rayonnante, le teint animé, débordante de bonheur."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Étranger",
    "title": "Les finances russes",
    "summary": "Le ministère des Finances russe dément formellement les rumeurs de presse concernant un nouvel emprunt extérieur, affirmant que les ressources du Trésor suffisent largement à couvrir les dépenses de l'État.",
    "paragraphs": [
      "Saint-Pétersbourg, 21 octobre : Une note du Messager officiel indique : « En présence des bruits faux qui recommencent à circuler dans la presse étrangère au sujet d'un emprunt que le gouvernement russe chercherait à contracter à l'étranger, le ministre des Finances croit nécessaire de déclarer, une fois de plus, que le gouvernement russe ne cherche ni n'est disposé à conclure quelque emprunt que ce soit.",
      "Les recettes courantes et les ressources disponibles du Trésor sont, en effet, plus que suffisantes pour faire face tant aux dépenses ordinaires qu'à celles provoquées par les événements d'Extrême-Orient. »"
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Social",
    "title": "Congrès des Travaux Publics",
    "summary": "Ouverture du congrès national des Travaux publics. Les experts y traiteront des enjeux cruciaux pour l'infrastructure française, notamment les voies navigables, les chemins de fer et l'hygiène publique.",
    "paragraphs": [
      "Le congrès national des Travaux publics français s'ouvrira aujourd'hui, dans la grande salle de la Société des ingénieurs civils, sous la présidence d'honneur du ministre des Travaux publics.",
      "Le congrès s'occupera des questions suivantes : ports maritimes et fluviaux, moyens d'exploitation, voies navigables, la Loire navigable, outillage économique des ports, chemins de fer, tramways, utilisation industrielle et agricole des eaux, alimentation des villes, travaux et hygiène publique. Les travaux du congrès prendront fin le vendredi 26 octobre."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Politique Nationale",
    "title": "Banquet républicain à Suippes",
    "summary": "Lors d'un banquet à Suippes, M. Léon Bourgeois a réaffirmé sa confiance envers le général André et le gouvernement, appelant à l'union républicaine et à la lutte contre les congrégations religieuses.",
    "paragraphs": [
      "Suippes, 21 octobre : Aujourd'hui a eu lieu à Suippes un banquet offert par l'association républicaine du canton à M. Léon Bourgeois, député, et à M. Vallé, sénateur de la Marne.",
      "Après la Marseillaise, plusieurs discours ont été prononcés par MM. Martinet, Léon Buirette, Drelon et Vallé. Puis M. Léon Bourgeois a pris la parole : faisant allusion aux propos de M. Vallé, il a déclaré que l'horizon politique s'éclaircissait et que le malentendu entre l'armée et la République était dissipé.",
      "M. Bourgeois affirme que le ministre, le général André, a eu raison de proclamer que l'armée est à sa place quand elle est chargée de la défense de la frontière et des lois. M. Bourgeois exprime sa confiance envers le gouvernement actuel, mais précise que, dès la rentrée du Parlement, il faudra appliquer les réformes du programme républicain démocratique, notamment la lutte contre les congrégations religieuses."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Algérie",
    "title": "Discours du nouveau Gouverneur général de l'Algérie",
    "summary": "Le nouveau gouverneur général, M. Jonnart, a dévoilé son programme pour l'Algérie : priorité au développement économique et amélioration de la condition des populations musulmanes.",
    "paragraphs": [
      "Le dîner de la Réunion d'études algériennes a eu lieu hier soir au Grand-Cercle républicain sous la présidence de M. Klandin, qui a félicité M. Jonnart de sa récente nomination.",
      "M. Jonnart a répondu en exposant les grandes lignes de son programme : consacrer tous ses efforts à la solution des problèmes que soulève le développement économique du pays et le maintien de l'ordre public.",
      "Parlant des sujets musulmans, M. Jonnart a souligné que la préoccupation de leur condition économique est au premier rang des grands devoirs du gouverneur, ajoutant que la « conquête des âmes » est nécessaire pour que la prise de possession de cette terre d'Afrique soit définitive."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Ordre du jour du colonel Detalle",
    "summary": "Le colonel Detalle, chef du régiment des sapeurs-pompiers de Paris, a fait ses adieux lors d'une réception au Cercle militaire, exhortant ses hommes à maintenir l'excellence et la fierté de leur unité.",
    "paragraphs": [
      "La mise à la retraite du colonel Detalle, commandant le corps des sapeurs-pompiers de la ville de Paris, a donné lieu, hier soir, au Cercle militaire, à une réception des plus cordiales.",
      "Le colonel Detalle a laissé à son régiment un ordre du jour rappelant les progrès accomplis et les risques encourus par ses troupes : « Soyez fiers d'y servir, gardez un souvenir aux anciens ; gardez-moi le vôtre. Soyez convaincus que, hormis les régiments en campagne, nul ne peut revendiquer plus justement que le vôtre le titre de régiment d'élite. »"
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Mutualité",
    "title": "M. Deschanel à Bordeaux",
    "summary": "En visite à Bordeaux, M. Deschanel a salué les sociétés de secours mutuels, soulignant leur rôle essentiel dans l'association libre face aux évolutions du monde du travail.",
    "paragraphs": [
      "Bordeaux, 21 octobre : M. Deschanel a reçu aujourd'hui, dans la salle des concerts du Grand-Théâtre, les délégués des sociétés de secours mutuels du Sud-Ouest.",
      "Recevant le syndicat girondin, M. Deschanel s'est déclaré heureux de pouvoir le féliciter du grand exemple civique qu'il donne. M. Deschanel a prononcé ensuite un long discours vantant les bienfaits de la mutualité, évoquant la transformation du salariat et l'importance de l'association libre pour les travailleurs."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Fréquentation et animations",
    "summary": "Malgré des intempéries marquées par la pluie et la grêle, l'Exposition universelle a maintenu une forte affluence hier, les visiteurs se réfugiant dans les pavillons et les palais.",
    "paragraphs": [
      "La foule n'a pas manqué hier à l'Exposition universelle, malgré une pluie torrentielle et de la grêle qui ont transformé les allées en chemins boueux, poussant les curieux à se réfugier dans les palais et pavillons.",
      "Le service de contrôle général enregistre pour la journée de samedi plusieurs milliers de visiteurs. Le prix officiel des tickets reste de 50 centimes, mais les camelots les débitaient hier couramment à 25 centimes."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Faits Divers",
    "title": "La société des Prévoyants de l'avenir",
    "summary": "La société des « Prévoyants de l'avenir », forte de 150 000 adhérents, est au cœur d'un conflit sur sa restructuration légale imposée par M. Waldeck-Rousseau en conformité avec la loi de 1898.",
    "paragraphs": [
      "Par un arrêté rendu le 3 avril dernier, M. Waldeck-Rousseau accordait aux Prévoyants de l'avenir un délai pour mettre leurs statuts en conformité avec la loi de 1898 sur les sociétés de secours mutuels.",
      "Fondée en 1880 par M. Chatelus, la société compte aujourd'hui plus de 150 000 adhérents. Le conflit actuel porte sur la répartition des dividendes et la nécessité de transformer la société pour se conformer aux nouvelles exigences légales."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Faits Divers",
    "title": "Échos et nouvelles diverses",
    "summary": "Compte-rendu des événements mondains et associatifs parisiens : concours serinophile, couronnement de rosière à Puteaux et remises de prix académiques et horticoles.",
    "paragraphs": [
      "Le concours des serins hollandais de la Société serinophile de France a eu lieu hier après-midi dans les salons Van Lier, 8, avenue de Clichy.",
      "À Puteaux, ont eu lieu les fêtes organisées par la municipalité à l'occasion du couronnement de la rosière, Mlle Charlotte Etchenberger.",
      "L'Association polymathique a procédé hier à la distribution solennelle des récompenses aux élèves de ses cours dans la grande salle de la Société nationale d'horticulture.",
      "L'Association philomathique a tenu hier, à la Sorbonne, ses assises annuelles pour la distribution solennelle de ses prix."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accidents et divers",
    "summary": "Collision entre un tramway et une voiture de vin à Paris. À Puteaux, un restaurateur est victime d'une agression violente. Enfin, un décès par arme à feu est signalé par le commissariat.",
    "paragraphs": [
      "À Paris, un tramway a tamponné une voiture chargée de vin. Un conducteur, blessé, a été reçu par des passants dans une pharmacie voisine.",
      "Antoine Chéroux, un petit restaurateur, a été violemment agressé par deux hommes à Puteaux ; il a été transporté d'urgence à l'hôpital Beaujon.",
      "M. Guyot, commissaire de police, a été informé de la mort de M. Jules Pied, âgé de soixante ans, qui s'est donné la mort à l'aide d'une arme à feu."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un escroc multirécidiviste",
    "summary": "Après avoir feint la folie pour échapper à la justice et obtenu son internement à Sainte-Anne, l'escroc multirécidiviste Alfred-Marc Gugenheim, spécialisé dans l'usurpation d'identités, est parvenu à s'évader.",
    "paragraphs": [
      "Alfred-Marc Gugenheim, âgé de trente ans, a déjà subi de nombreuses condamnations pour escroquerie. S'affublant des noms de MM. Fould, Veil-Picard ou Goldsmith, banquiers ou millionnaires connus, il réussissait par ce moyen à escroquer nombre de chanteuses de café-concert et demi-mondaines des plus huppées.",
      "Il y a un an environ, Gugenheim fut arrêté pour la dixième fois. Au dépôt, il simula si bien la folie que les médecins chargés de l'examiner furent convaincus qu'il ne jouissait pas de la plénitude de ses facultés mentales et, en conséquence, la cour ordonna son internement à l'asile Sainte-Anne.",
      "Peu de temps après son admission, Gugenheim parvint à s'évader de cet établissement."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident à Colombes",
    "summary": "Une femme d'une vingtaine d'années, vêtue de noir, a été gravement blessée à Colombes en se jetant sous les chevaux d'une voiture. L'inconnue refuse de décliner son identité malgré son état.",
    "paragraphs": [
      "Hier après-midi, avenue d'Argenteuil, une jeune femme d'environ vingt-cinq ans, vêtue de noir, s'est précipitée sous les pieds des chevaux d'une voiture de livreur.",
      "La malheureuse, qui a eu l'épaule broyée par le choc, a reçu les premiers soins dans une pharmacie avant son transport à l'hôpital ; mais, malgré toutes les questions qui lui ont été adressées, elle a refusé obstinément de faire connaître son identité."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Incendie à Asnières",
    "summary": "Un violent incendie a ravagé les entrepôts de l'entrepreneur Julien Salles, rue de Prony à Asnières. Malgré l'intervention rapide des pompiers, les dégâts matériels sont importants.",
    "paragraphs": [
      "Le feu a éclaté la nuit dernière à onze heures et demie dans les écuries et entrepôts de M. Julien Salles, entrepreneur de transports, situés rue de Prony prolongée.",
      "Quelques minutes après, les pompiers d'Asnières sont arrivés sur les lieux et ont attaqué vigoureusement l'incendie. Malgré la promptitude des secours, les dégâts sont importants : trois chariots et plusieurs milliers de francs de marchandises ont été détruits. Une enquête est ouverte."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Suicide à Ivry-Saint-Denis",
    "summary": "Mme Louise Harmer, pensionnaire de l'asile Meissonnier, a mis fin à ses jours par pendaison, concrétisant ainsi ses intentions suicidaires exprimées de longue date.",
    "paragraphs": [
      "Une vieille femme hospitalisée à l'asile Meissonnier, sis au 84, boulevard Garibaldi, Mme Louise Harmer, âgée de soixante-trois ans, profitant de ce que les sœurs qui la surveillaient étaient occupées ailleurs, est allée s'enfermer dans les cabinets d'aisance et s'y est pendue. Depuis longtemps, la malheureuse avait manifesté l'intention d'en finir avec l'existence."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Suicide à Pantin",
    "summary": "Un chimiste de vingt-cinq ans, M. Arthur Lesser, demeurant rue de Paris à Pantin, a mis fin à ses jours en se jetant du quatrième étage. Il a succombé à ses blessures à l'hôpital Lariboisière.",
    "paragraphs": [
      "Un chimiste, M. Arthur Lesser, âgé de vingt-cinq ans, domicilié 33, rue de Paris, s'est jeté hier matin par la fenêtre de son logement situé au quatrième étage. Ce malheureux, qui s'était fracturé les jambes et fait de très graves blessures en diverses parties du corps, est mort à l'hôpital Lariboisière où il avait été transporté."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Décès mystérieux à Bagnolet",
    "summary": "Une jeune ouvrière de dix-neuf ans, Mlle Hortense Teuget, a trouvé la mort subitement à son domicile. Le médecin n'ayant pu établir les causes du décès, une expertise à la morgue a été ordonnée par le parquet.",
    "paragraphs": [
      "Le parquet de la Seine vient d'être saisi par M. Clément, commissaire de police des Lilas, d'une affaire sur laquelle semble planer un certain mystère. Une jeune fille de dix-neuf ans, Mlle Hortense Teuget, caoutchoutière, travaillait chez elle, rue de Montreuil, lorsque, soudain, elle fut prise d'un accès de toux et expira presque immédiatement.",
      "Le médecin de l'état civil ayant refusé de délivrer le permis d'inhumer et le docteur Veper ne pouvant déterminer les causes de cet étrange décès, le parquet a ordonné le transport du cadavre à la morgue pour expertise."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Dépêches",
    "title": "Syndicat des journalistes",
    "summary": "À Versailles, un groupe de journalistes du département de Seine-et-Oise s'est réuni afin de constituer officiellement leur nouveau syndicat professionnel.",
    "paragraphs": [
      "Versailles. Un groupe de journalistes de Seine-et-Oise vient de se réunir pour fonder un syndicat professionnel départemental ainsi désigné : Syndicat des journalistes de Seine-et-Oise."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'Odyssée d'un hussard",
    "summary": "Le hussard Victor Riddez, détenu à la citadelle de Lille, s'est évadé en franchissant un mur de neuf mètres. Une visite suspecte la veille de son évasion laisse supposer une complicité extérieure.",
    "paragraphs": [
      "Lille, 21 octobre. Une évasion a été commise avec une rare audace, avant-hier soir, par un hussard déserteur, nommé Victor Riddez, enfermé à la citadelle.",
      "Le fugitif, qui attendait son transfert à Marseille, a profité d'un moment où le caporal de garde changeait la paillasse des prisonniers pour s'enfuir vêtu d'effets civils passés sur ses vêtements militaires. Il aurait franchi un mur de neuf mètres. On suppose que ses vêtements civils avaient été déposés par une dame ayant rendu visite au prisonnier la veille.",
      "L'infortuné caporal de garde a écopé de quinze jours de prison pour sa négligence."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Dernière Heure",
    "title": "Événements de Chine et Guerre au Transvaal",
    "summary": "Une note diplomatique rectifie l'accord anglo-allemand concernant la Russie. Au Transvaal, les troupes boers accentuent leurs mouvements de reconnaissance aux abords de Bloemfontein.",
    "paragraphs": [
      "Londres, 21 octobre. C'est par suite d'une erreur de transmission que, dans la note contenant l'accord anglo-allemand publiée hier, le nom de la Russie ne figurait pas dans l'énumération des puissances ayant reçu communication de ce document.",
      "Bloemfontein, 19 octobre. De nombreux petits convois boers parcourent la campagne. Plusieurs d'entre eux ont été vus hier à douze milles de la ville. On croit que leur force totale est de 1 500 hommes."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Terrible explosion à Lyon",
    "summary": "À Saint-Pierre-la-Palud, une explosion de dynamite oubliée dans un puits de pyrite a causé un accident dramatique. Un mineur est grièvement mutilé et deux de ses camarades sont entre la vie et la mort.",
    "paragraphs": [
      "Lyon, 21 octobre. Un grave accident est survenu hier dans l'un des puits de pyrite de la Compagnie des mines de Saint-Gobain, à Saint-Pierre-la-Palud.",
      "Une équipe de nuit, ignorant qu'une cartouche de dynamite n'avait pas détoné lors du passage de l'équipe de jour, a provoqué une explosion en perforant la roche. Un mineur, M. Lacoste, a eu la moitié du visage emportée et a perdu la vue ; deux de ses camarades, Favetto et Binière, ont été grièvement atteints. Leur état est désespéré."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Social",
    "title": "Cérémonies patriotiques",
    "summary": "Plusieurs communes françaises ont célébré le souvenir des combattants de 1870. À Étampes, Jouy, Amiens et Rambervillers, des hommages solennels ont marqué cet anniversaire par des cérémonies et remises de drapeaux.",
    "paragraphs": [
      "À Étampes, les combattants de 1870 ont déposé une couronne au monument aux morts. À Jouy, le trentième anniversaire du combat de 1870 a été célébré par un cortège et un service religieux. À Amiens, le sénateur Tellier a procédé à la remise du drapeau aux Vétérans. À Rambervillers, des plaques commémoratives ont été inaugurées en mémoire des victimes du combat du 9 octobre."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Départements",
    "title": "Incendie à Compiègne",
    "summary": "Lors de la foire de Lassigny, un violent incendie a ravagé le domicile et le matériel professionnel du marchand ambulant Jules Defruit. Les dommages sont évalués à près de 5 000 francs.",
    "paragraphs": [
      "La nuit dernière, à la foire de Lassigny, un incendie a éclaté au domicile de M. Jules Defruit, marchand ambulant. Une immense voiture remplie de marchandises, des métiers à tricoter ainsi que tout le mobilier ont été la proie des flammes. Les pertes s'élèvent à près de 5 000 francs."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Feuilleton",
    "title": "Les 3 lettres du bonheur",
    "summary": "En proie à une sombre rancœur, Tiennet menace de se venger d'un garde forestier, qu'il tient pour responsable du décès de son fils, au péril de sa propre sécurité et de celle de sa famille.",
    "paragraphs": [
      "Tiennet, en état d'ivresse, s'emporte violemment contre sa femme au sujet d'un garde forestier qu'il accuse d'être responsable de la mort de son fils Antoine. Il menace de se venger en braconnant dans le parc de la forge, au péril de sa vie et de celle des enfants dont il a la charge."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Vie Musicale",
    "title": "Projets de festivals musicaux",
    "summary": "La France prépare activement ses festivités musicales pour l'année à venir, avec des concours prévus à Soulac-sur-Mer, un festival à Audruicq et des initiatives internationales des Chanteurs gallois.",
    "paragraphs": [
      "Il est question d'ouvrir l'an prochain un concours musical à Soulac-sur-Mer, en Gironde.",
      "La ville d'Audruicq, dans le Pas-de-Calais, organisera un grand festival de musique le 1er juillet prochain ; les adhésions sont dès à présent recueillies par M. Daëh-Lecouffe, président de la musique municipale.",
      "La société anglaise des Chanteurs gallois, qui a rencontré un vif succès lors de l'Exposition universelle, aurait l'intention d'organiser un concours dans sa région l'an prochain."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Revue Commerciale",
    "title": "Grains et farines",
    "summary": "La culture profite d'un temps clément pour les travaux des champs. Malgré une récolte déficitaire, le marché des céréales subit une baisse des prix influencée par les stocks étrangers et une demande atone.",
    "paragraphs": [
      "La culture profite du temps favorable pour activer les labours et les ensemencements. La pluie a été bien accueillie car, si elle a fait des dégâts dans le Midi, elle a été rare depuis des mois dans le Centre, la Beauce et notre rayon. Le Nord a été mieux partagé, l'humidité y a été suffisante, mais la culture réclame néanmoins encore de la pluie pour la continuation de l'arrachage des betteraves ; ailleurs, celle des pommes de terre est poussée activement.",
      "Comme, malgré la récolte déficitaire, le blé se vend plus mal encore que l'an dernier, beaucoup de cultivateurs hésitent à faire des emblavements aussi importants que l'an dernier. Cependant, il faut constater que cette culture est rémunératrice lorsque les rendements sont élevés ; mais, pour arriver à ce résultat, il faut employer les engrais chimiques avec discernement.",
      "Sur notre place, les affaires en farines ont manqué d'activité cette semaine et les prix ont fléchi sur toutes les époques de livraison ; c'est surtout sur les livrables éloignés que la baisse s'est produite.",
      "Le commerce est influencé par les énormes stocks et la baisse constante de l'étranger. Les haussiers, il est vrai, escomptent le vote de la loi sur les bons d'importation et il est certain que cela donnerait de l'activité aux affaires, mais il faut bien répéter que cette loi sera combattue au Sénat par le gouvernement.",
      "On a terminé hier en cotant les farines : le courant de 25 fr. à 25,25 ; novembre de 25,50 à 25,50 ; novembre-décembre de 25,50 à 25,75 ; les 4 mois de novembre de 25,75 à 26 fr. ; les premiers mois de 26,50 à 26,75 les 100 kilos entrepôt.",
      "Les blés du marché de Paris ont suivi le mouvement des farines, et il y a une baisse sensible à constater. Aux États-Unis, les blés sont également en forte baisse, ce qui influence notre place ; de plus, dans peu de temps, la République Argentine va faire sa moisson, et il paraît qu'elle aura une récolte très abondante.",
      "Cette année donc, avec une récolte déficitaire, nous avons des prix moins élevés que l'année dernière avec une bonne récolte. Pourtant, nous croyons à des prix plus élevés pour plus tard."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Revue Commerciale",
    "title": "Huiles",
    "summary": "Le marché des huiles de colza affiche une tendance haussière marquée. Cette progression des cours s'explique par la rareté actuelle du produit et le coût élevé de la graine.",
    "paragraphs": [
      "Les huiles de colza ont eu des affaires actives et les prix ont haussé sensiblement. Cette hausse est due uniquement à la rareté de la marchandise et à la cherté de la graine.",
      "On a terminé hier en cotant le colza brut en tous fûts le courant et le livrable sur toutes les époques, de 82,50 à 83 fr., les 100 kilos, entrepôt."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Revue Commerciale",
    "title": "Alcools",
    "summary": "Calme plat sur le marché des alcools où les cours fléchissent légèrement, malgré une tenue plus ferme du livrable sur les mois chauds.",
    "paragraphs": [
      "Les trois-six ont eu des affaires calmes et les prix ont légèrement fléchi ; cependant, le livrable sur les mois chauds est un peu plus ferme. La moyenne des cotes officielles de l'alcool disponible pendant la semaine du 14 au 20 octobre est de 45 fr. 50 l'hectolitre pur à 90 degrés, entrepôt."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Revue Commerciale",
    "title": "Sucres",
    "summary": "Le marché du sucre demeure calme, avec un léger recul des cotations. La récolte betteravière, quant à elle, présente des perspectives encourageantes.",
    "paragraphs": [
      "Les nouvelles de la récolte betteravière sont bonnes. Sur place, les affaires ont été calmes par continuation, et les prix ont légèrement fléchi.",
      "On a terminé hier en cotant le sucre blanc n°3 : le courant à 28,25 ; novembre à 28,25 ; les 4 premiers mois à 29 ; les 4 mois de mars à 29,75 ; les 4 mois de mai à 30,12 et demi ; les 100 kilos, entrepôt.",
      "Les raffinés, en baisse, sont cotés de 50 à 52 fr., les 100 kilos, droits acquittés."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Revue Commerciale",
    "title": "Houblons",
    "summary": "Tendance à la hausse pour le houblon sur les marchés internationaux. Les cours restent fermes à Nuremberg, tandis que la production locale observe une activité modérée.",
    "paragraphs": [
      "À Nuremberg, les prix ont haussé de 8 à 10 marks. À Londres et à New York, les marchés commencent à être bien approvisionnés. Les cours sont fermes. En Bohême, la culture a cédé dès le début les produits de l'année. En Bourgogne, les prix ont haussé. On paie en culture jusqu'à 140 fr. les 50 kilos, mais les affaires sont assez limitées. En Belgique, les cours varient entre 80 et 85 fr.",
      "Voici les derniers cours pratiqués à Nuremberg : Marktwaare prima, 105 à 115 fr. ; secunda, de 90 à 100 fr. ; Hallertau, de 130 à 145 fr. ; Wolnzach, de 135 à 160 fr. ; Spalt, de 165 à 180 fr. ; Saaz, de 180 à 195 fr. ; Wurtemberg, de 125 à 140 fr. ; Bade, de 125 à 150 fr. ; Alsace, de 110 à 130 fr. les 50 kilos."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Main Gauche - Grand Roman Inédit (Quatrième Partie)",
    "summary": "Le mystère s'épaissit autour de la famille Terrique avec les révélations troublantes de la jeune Lisette Gendrin. Odette et Gaston affrontent les sombres secrets de l'affaire de la rue Vavin.",
    "paragraphs": [
      "La suite du récit met en scène Odette, Solange de Boffront et Gaston de Terrique, confrontés au mystère de l'affaire de la rue Vavin et au retour imminent de Bruno de Pontsevrin et Raymond de Terrique.",
      "La jeune Lisette Gendrin, une ancienne malade soignée à la Salpêtrière, intervient dans le récit, révélant des informations sur le comte de Terrique, provoquant la stupeur des protagonistes."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Faits Divers",
    "title": "Le récit du cavalier Nurdin",
    "summary": "Entretien avec le cavalier Nurdin, en garnison à Lunéville, au sujet d'une correspondance vantant les propriétés curatives de la célèbre Tisane américaine des Shakers pour les soins de santé.",
    "paragraphs": [
      "Le visiteur a rencontré le cavalier Nurdin au quartier général du 11e cuirassiers, en garnison à Lunéville. L'entretien a porté sur une lettre adressée à M. Oscar Fanyau, pharmacien à Lille, concernant une guérison miraculeuse obtenue grâce à la « Tisane américaine des Shakers »."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Causerie Financière",
    "title": "Analyse du marché boursier",
    "summary": "La Bourse affiche une reprise marquée des valeurs bancaires et espagnoles. Si les fonds nationaux demeurent stables, les compagnies ferroviaires subissent des fortunes diverses sur le marché.",
    "paragraphs": [
      "Après quelques séances d'hésitation, le marché a montré une reprise marquée, notamment dans le groupe espagnol et les grandes valeurs. Les titres industriels connaissent des tendances diverses, certaines valeurs métallurgiques et chemins de fer montrant une faiblesse relative.",
      "Les fonds nationaux, comme le 3 % et l'Amortissable, ont montré une stabilité relative, tandis que l'Extérieure a été agitée par des mouvements spéculatifs liés aux questions de coupon espagnol. Le marché de la Rente italienne a retrouvé une activité notable.",
      "Le secteur bancaire, notamment le Crédit Lyonnais et la Banque de Paris, bénéficie d'une amélioration des cours. En revanche, les grandes compagnies de chemins de fer, malgré des recettes satisfaisantes, subissent une baisse à la Bourse, à l'exception des Chemins de la Camargue."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Chemins de Fer",
    "title": "Billets de saison et trains spéciaux",
    "summary": "Les compagnies PLM et Paris-Orléans multiplient les offres tarifaires : billets de saison pour la Côte d'Azur et trains spéciaux en prévision de l'Exposition universelle de 1900.",
    "paragraphs": [
      "La Compagnie Paris-Lyon-Méditerranée crée des billets de saison avantageux pour les familles se rendant sur la Côte d'Azur, notamment à Nice, Menton et Cannes. Les conditions prévoient des réductions importantes pour les groupes.",
      "Le Chemin de fer de Paris à Orléans annonce la mise en marche de trains spéciaux à prix réduits à l'occasion de l'Exposition universelle, desservant notamment Rodez, Bordeaux, Aurillac, Montluçon, Angoulême, Limoges et Toulouse."
    ]
  }
];
