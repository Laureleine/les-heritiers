// Date: 1901-05-06
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-05-06 (Version Restaurée, 40 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La science au service de l'humanité",
    "summary": "M. Berthelot, lors de sa réception à l'Académie française, exalte le rôle du savant moderne, tel Pasteur ou Claude Bernard, dévoué à l'amélioration du sort de l'humanité et à la solidarité sociale.",
    "paragraphs": [
      "Proclamons-le hautement : quelles que soient les conceptions de la science, il n'en est pas moins certain que les qualités les plus nobles de l'homme sont l'amour du bien, la volonté passionnée de rendre ses semblables heureux et bons.",
      "C'est par ces mots que M. Berthelot a terminé son discours de réception à l'Académie française. Ils évoquent les grandes figures de savants modernes comme Claude Bernard, Chevreul, Pasteur et Joseph Bertrand, qui ont consacré leur existence au service de l'humanité.",
      "M. Berthelot, rénovateur de la chimie depuis cinquante ans, s'inscrit dans cette lignée. Le savant moderne n'est plus un personnage mystérieux confiné dans son laboratoire, mais un acteur mêlé à la vie de son temps, cherchant à soulager les misères du monde.",
      "Comme Pasteur, M. Berthelot divulgue les résultats de ses recherches pour en faire profiter la communauté, refusant de chercher un bénéfice personnel. Cette éthique est une règle chez nos grands savants.",
      "M. Berthelot souligne que la science tend à transformer les institutions anciennes pour les améliorer et à lutter contre les tyrannies matérielles et morales qui pèsent sur la race humaine.",
      "Il montre que la France a un rôle à jouer en tant que nation dont l'organisation sociale est la plus avancée vers cette solidarité universelle qui sera la loi de l'humanité future."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Rachat du Bonheur",
    "summary": "Tensions familiales à Chevreuse : Marie s'inquiète des aspirations parisiennes d'Odette, tandis que la jeune femme revendique avec détermination son indépendance face aux soupçons de son entourage.",
    "paragraphs": [
      "Marie observe avec inquiétude Odette et son comportement depuis qu'elle dispose de sa petite fortune. Elle craint les dépenses et les toilettes de la jeune fille, ainsi que son désir de plaire, et se demande ce qu'elle deviendra une fois au bout de son rouleau.",
      "Bernard tente de rassurer Marie, mais elle reste préoccupée par l'influence de Paris sur Odette, surtout depuis qu'elle s'y rend souvent seule sous la surveillance vague de son parrain.",
      "Odette, de son côté, ressent une attirance pour la vie parisienne et son indépendance. Malgré les soupçons et la jalousie de son entourage, elle affirme sa liberté tout en restant fidèle à sa famille de Chevreuse.",
      "Leur rencontre à la gare et leurs échanges montrent le fossé qui se creuse entre les attentes de la famille et les aspirations d'Odette, qui cherche à vivre sa propre vie tout en évitant les conflits inutiles."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Social",
    "title": "La fin de la grève de Montceau",
    "summary": "Après 107 jours, la grève des mineurs de Montceau-les-Mines s'achève sans résultat tangible. Le conflit souligne l'urgence de nouveaux modèles d'association entre le capital et le travail.",
    "paragraphs": [
      "La grève de Montceau, qui a duré plus de cent jours, est désormais terminée. Elle n'a produit aucun résultat conforme aux vœux des mineurs, qui reprennent le travail après avoir dépensé leurs économies.",
      "Ce conflit souligne la nécessité pour les patrons de traiter avec leurs ouvriers sur un pied d'égalité et pour les travailleurs de tenir compte des conditions réelles de l'industrie, notamment de la concurrence étrangère.",
      "L'avenir appartient aux idées d'association entre le capital et le travail. La loi sur les retraites ouvrières pourrait contribuer à supprimer les grèves entamées à la légère, car chaque jour de chômage constituera un retard apporté au droit à la retraite.",
      "À Montceau-les-Mines, les mineurs ont voté à l'unanimité la reprise du travail. Le conflit a duré exactement 107 jours. Durant cette période, aucun incident regrettable ne s'est produit, ce qui témoigne de la sagesse des grévistes.",
      "Les mineurs ont décidé de verser une somme pour soutenir les camarades renvoyés. Malgré la fin de la grève, une division règne au sein de la fédération des mineurs, avec une opposition entre les syndiqués « jaunes » et les autres."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Incendie à Maisons-Alfort",
    "summary": "Un incendie d'origine accidentelle, provoqué par la fermentation de matières premières, a ravagé l'usine de vernis de M. Detouche à Maisons-Alfort. Aucun blessé n'est à déplorer.",
    "paragraphs": [
      "Un incendie d'une extrême violence s'est déclaré hier matin dans l'usine de M. Detouche, fabricant de vernis à Maisons-Alfort.",
      "Malgré les efforts du directeur et des ouvriers, le feu s'est propagé rapidement aux matières inflammables. Les pompiers, renforcés par une pompe à vapeur de l'usine Springer, ont lutté pendant deux heures pour écarter tout danger.",
      "L'enquête révèle que l'incendie a pris naissance par fermentation dans des bottes de filasse. Aucun accident de personnes n'est à déplorer."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Actualités Étrangères",
    "title": "Les troubles de Chine",
    "summary": "La situation demeure critique en Chine : menaces de massacres à Pékin, tensions diplomatiques à Tien-Tsin et opérations militaires russes en Mandchourie soulignent la fragilité des intérêts occidentaux.",
    "paragraphs": [
      "À Pékin, les missionnaires déclarent que le départ des troupes alliées sera le signal du massacre des convertis chinois. La xénophobie menace sur tous les points du pays.",
      "À Tien-Tsin, un incident a opposé des Allemands à un remorqueur anglais, faisant deux blessés. À Shanghai, la China Association demande à Londres de protester contre une élévation des droits sur les marchandises importées.",
      "Berlin précise les conditions de l'indemnité demandée à la Chine, excluant les dépenses de nature durable pour ne facturer que les augmentations liées aux troubles.",
      "En Mandchourie, les troupes russes ont mené plusieurs opérations contre des détachements chinois, causant des pertes importantes chez l'ennemi et détruisant du matériel."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique",
    "title": "Les Retraites Ouvrières",
    "summary": "La Chambre reprendra sous peu le débat sur les retraites ouvrières. Le gouvernement propose un contre-projet incluant les ouvriers de l'industrie, du commerce et les travailleurs agricoles via des retenues sur salaires.",
    "paragraphs": [
      "La Chambre devrait entamer la discussion sur le projet de loi des retraites ouvrières peu après sa rentrée.",
      "Le gouvernement a proposé des modifications, constituant un contre-projet, qui étend le bénéfice de la retraite à tous les ouvriers de l'industrie, du commerce et aux travailleurs agricoles.",
      "Le système repose sur des retenues sur les salaires, fixées en fonction de l'âge et du montant des revenus, afin de financer les pensions de vieillesse."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Vie Locale",
    "title": "Cérémonie patriotique à Pantin",
    "summary": "À Pantin, une cérémonie patriotique présidée par le général Hothwiller a rassemblé les autorités et les anciens combattants pour honorer la mémoire des enfants du pays morts pour la patrie.",
    "paragraphs": [
      "Une cérémonie patriotique, organisée par la municipalité et les anciens combattants, a eu lieu à Pantin en l'honneur des enfants du pays morts pour la patrie.",
      "Présidée par le général Hothwiller, la manifestation a réuni de nombreuses sociétés et des élus locaux pour un dépôt de couronnes au cimetière, suivi d'un banquet commémoratif."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Social",
    "title": "La Retraite Anticipée",
    "summary": "Le projet prévoit une liquidation anticipée de la pension pour les travailleurs invalides, calculée au prorata des versements dès lors que 7 500 journées de travail sont justifiées.",
    "paragraphs": [
      "Les travailleurs frappés d'invalidité prématurée pourraient obtenir, à tout âge, sous réserve que les versements inscrits à leur compte représentent au moins 7 500 journées de travail, la liquidation anticipée de leur retraite, en stricte proportion des versements effectués."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Social",
    "title": "La Constitution des Retraites",
    "summary": "Le gouvernement propose deux modes de gestion des pensions : le capital réservé aux familles ou le fonds perdu, sous la tutelle du ministère du Commerce et de la Caisse des dépôts.",
    "paragraphs": [
      "Le projet du gouvernement prévoit deux systèmes : le capital réservé, où les sommes versées sont conservées et remises à la famille du travailleur en cas de décès, et le fonds perdu, où le capital est absorbé par la caisse au décès du bénéficiaire.",
      "Le projet laisse l'option entre les deux systèmes, dont l'administration est confiée au ministère du Commerce et la gestion financière à la Caisse des dépôts et consignations."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "La retraite de Lord Salisbury",
    "summary": "Selon le Manchester Guardian, le départ prochain de Lord Salisbury et des principaux ministres du cabinet britannique semble acté, annonçant un remaniement gouvernemental d'envergure.",
    "paragraphs": [
      "Le correspondant londonien du Manchester Guardian indique qu'il devient manifeste que Lord Salisbury, ainsi que les principaux ministres du cabinet, se retireront prochainement du pouvoir, entraînant ainsi des changements gouvernementaux d'une importance capitale."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Effondrement au théâtre",
    "summary": "À Reggio d'Emilia, lors d'une conférence contradictoire, l'effondrement soudain d'une avant-scène surchargée a provoqué une panique indescriptible et fait plusieurs victimes, dont une grièvement blessée.",
    "paragraphs": [
      "À Reggio d'Emilia, une assistance très nombreuse se pressait dans le théâtre où devait avoir lieu une conférence contradictoire entre cléricaux et socialistes.",
      "Tout à coup, une partie de l'avant-scène, trop chargée, s'écroula au milieu d'une panique indescriptible. Plusieurs personnes ont été blessées, dont une grièvement. La réunion a été aussitôt suspendue."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Crise à Haïti",
    "summary": "Une vive panique financière frappe les banques haïtiennes, suite à la rumeur de représailles allemandes causées par le refus de concessions similaires à celles accordées à la France.",
    "paragraphs": [
      "Suivant des nouvelles de la Jamaïque, le taux du change à Haïti a atteint la cote de 148, à la suite de la panique causée dans les banques par le bruit que l'Allemagne aurait menacé d'exercer des représailles contre Haïti, qui lui a refusé les concessions accordées à la France."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Actualités Coloniales",
    "title": "Les Anglais dans l'Afrique Orientale",
    "summary": "Le Mullah-fou se serait dirigé vers le nord avec ses troupes, dans l'intention présumée d'attendre les forces anglaises pour tenter une incursion vers Berbera.",
    "paragraphs": [
      "Le Mullah-fou aurait quitté Lassidai avec une troupe considérable et se serait porté vers le nord, dans la direction du pays des Habr-Toljaala.",
      "Son dessein, au dire des espions, serait d'attendre les troupes anglaises pour faire une incursion vers Berbera."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Chronique scientifique",
    "title": "Le Jardin des Plantes",
    "summary": "L'état déplorable des installations zoologiques du Jardin des Plantes indigne les visiteurs. La reconstruction d'habitats plus sains pour les fauves et les singes devient une urgence impérieuse.",
    "paragraphs": [
      "Les visiteurs se plaignent avec raison de l'état des collections zoologiques. Les animaux comme les tigres, hyènes, panthères, jaguars et autres fauves sont d'une maigreur désespérante et tournent dans des cages étroites et infectes.",
      "Les singes, particulièrement, sont victimes de la tuberculose à cause de l'humidité et de l'entretien défectueux des rotondes. Il est urgent de reconstruire ces installations en utilisant des matériaux sains, aérés et facilement désinfectables."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Vie associative",
    "title": "Orphelinat de la Seine",
    "summary": "Sous la présidence de M. Félix Voisin, l'Orphelinat de la Seine a tenu hier sa réunion générale à la Sorbonne pour honorer ses membres et récompenser ses pupilles.",
    "paragraphs": [
      "L'orphelinat de la Seine a tenu hier après-midi sa réunion générale dans le grand amphithéâtre de la Sorbonne, sous la présidence de M. Félix Voisin, conseiller à la Cour de cassation.",
      "Des médailles d'honneur et des récompenses ont été remises aux membres du conseil d'administration ainsi qu'aux orphelins."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Vie associative",
    "title": "Société des Secouristes français",
    "summary": "La Société des Secouristes français a tenu sa fête annuelle de distribution de récompenses, honorant ceux qui s'engagent à prodiguer les premiers soins lors d'accidents.",
    "paragraphs": [
      "La fête des récompenses de la Société des Secouristes français et infirmiers volontaires a eu lieu hier. Cette noble institution a pour but d'apprendre à chacun à prodiguer les premiers soins lors d'accidents ou de maladies soudaines.",
      "Une distribution solennelle de diplômes et de médailles a eu lieu après les discours prononcés par M. Lafargue et par le secrétaire général, M. Friedberg."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Sports",
    "title": "Concours interscolaire de gymnastique",
    "summary": "Huit cents élèves des lycées et collèges parisiens se sont réunis hier au gymnase municipal Voltaire pour la douzième édition du grand concours interscolaire de gymnastique.",
    "paragraphs": [
      "Le douzième grand concours interscolaire de gymnastique, organisé par MM. Sansboeuf et Strehty, s'est tenu hier au gymnase municipal Voltaire. Huit cents élèves, issus de divers lycées et collèges de Paris, y ont pris part avec enthousiasme."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Chronique Économique",
    "title": "Le nouveau Patent Office à Washington",
    "summary": "Inauguration à Washington du nouveau Bureau des Brevets. Avec 33 000 titres délivrés en 1899, les États-Unis confirment leur place de nation la plus prolifique en matière d'inventions.",
    "paragraphs": [
      "On a inauguré, à Washington, le nouveau Patent Office (Bureau des Brevets). Le pays comptant le plus grand nombre d'inventeurs reste les États-Unis, avec 33 000 brevets délivrés au cours de l'année 1899.",
      "Le bâtiment, dont la valeur est estimée à 15 millions de francs, abrite désormais les services de 670 employés."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Sports",
    "title": "Course Bordeaux-Paris",
    "summary": "La célèbre course cycliste Bordeaux-Paris a consacré hier un athlète français, auteur d'une performance record validée par les contrôles du vélodrome d'Auteuil.",
    "paragraphs": [
      "La course cycliste Bordeaux-Paris a vu la victoire de l'athlète français qui a parcouru le trajet en un temps record. Les contrôles établis au vélodrome d'Auteuil ont permis de valider l'arrivée des concurrents dans des conditions très disputées."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression violente à Villejuif",
    "summary": "M. Jean Forai a été sauvagement agressé et dévalisé par trois individus rue de l'Épée-de-Bois. Blessé au crâne, il est actuellement soigné à l'hôpital de la Pitié.",
    "paragraphs": [
      "M. Jean Forai, demeurant 38, avenue de Gournay, à Villejuif, passait dans la rue de l'Épée-de-Bois lorsqu'il fut assailli par trois individus.",
      "Sans avoir pu appeler au secours, l'infortuné fut frappé d'un coup de couteau qui lui ouvrit le crâne. Les agresseurs fouillèrent ses poches et dévalisèrent leur victime avant de prendre la fuite.",
      "Relevé inanimé par des gardiens de la paix, le blessé a été transporté à l'hôpital de la Pitié. Les auteurs de cette agression sont activement recherchés par M. le commissaire de police."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Attaque à main armée contre M. Albert Lépicier",
    "summary": "M. Albert Lépicier a été violemment agressé par deux individus rue de Paris. L'un des agresseurs, le nommé Forti, a été appréhendé par les agents et conduit devant le commissaire.",
    "paragraphs": [
      "M. Albert Lépicier, demeurant rue de Paris, parvint à l'angle de la rue d'Angoulême, lorsqu'il fut assailli par deux individus qui le frappèrent violemment.",
      "En un clin d'œil, les malfaiteurs dévalisèrent leur victime et prirent la fuite. À ce moment, des agents arrivaient ; ils s'élancèrent sur les agresseurs et furent assez heureux pour en arrêter un.",
      "Cet individu, mis à la disposition de M. Daltrot, commissaire de police, a déclaré se nommer Forti et habiter 36, rue des Amandiers. Pressé de questions, il a refusé de fournir le nom de son complice. M. Lépicier a été victime des sévices des Apaches."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Découverte d'un obus à Saint-Denis",
    "summary": "Un obus a été mis au jour lors de travaux dans une cave rue de la Gare à Saint-Denis. L'engin a été confié à M. Bouillier pour être transporté au laboratoire municipal.",
    "paragraphs": [
      "On a retrouvé un obus dans des souterrains, non loin des usines Krupp, en procédant à des travaux dans la cave d'une maison de la rue de la Gare.",
      "L'engin a été transporté par les soins de M. Bouillier, rue de la Victoire, au laboratoire municipal."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Bataille de Dames",
    "summary": "Une rixe violente a éclaté entre deux femmes. La nommée Julie Forgevin, instigatrice de cette agression à l'arme blanche, a été arrêtée par M. Crepin, commissaire de police.",
    "paragraphs": [
      "Une vive querelle a eu lieu sur la place, entre deux femmes, Mmes C. et L., qui se sont portées des coups de couteau et de ciseaux.",
      "La situation est grave ; la meurtrière présumée a les mains ensanglantées. M. Crepin, commissaire de police, a arrêté la nommée Julie Forgevin, qui était l'instigatrice de cette rixe."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Fatale imprudence à la gare du pont Mirabeau",
    "summary": "Un voyageur est tombé du marchepied d'un train à la station du pont Mirabeau. Grièvement blessé, il a été transporté à l'hôpital Lariboisière par le commissaire spécial de la gare du Nord.",
    "paragraphs": [
      "Un voyageur qui avait pris place, imprudemment, sur le marchepied d'un wagon du train arrivant à la station du pont Mirabeau, perdit l'équilibre et tomba sur la voie.",
      "Des hommes d'équipe se portèrent à son secours et le trouvèrent inanimé. Le malheureux s'est fracturé le crâne. Il est impossible d'établir son identité, car sur ses vêtements on n'a rien trouvé, si ce n'est un billet d'aller et retour de Pierrelaye à Paris.",
      "Le commissaire spécial de la gare du Nord a fait transporter immédiatement le blessé à l'hôpital Lariboisière, où l'on désespère de le sauver."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de tramway à Saint-Cloud",
    "summary": "Marie Cook, une jeune fille de dix-sept ans, a été victime d'un accident grave près du pont de Saint-Cloud en tentant de monter dans un tramway en marche. Elle souffre d'une fracture.",
    "paragraphs": [
      "Une jeune fille de dix-sept ans, Marie Cook, demeurant rue de..., a voulu hier soir, non loin du pont de Saint-Cloud, monter dans un tramway en pleine marche.",
      "Elle s'y prit mal en glissant sur le sol, ce qui lui a causé une fracture de la jambe. Elle a été immédiatement transportée à l'hôpital."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Actualités locales",
    "title": "Festival d'Enghien",
    "summary": "Malgré une météo incertaine, le festival d'Enghien a connu une affluence remarquable. La journée fut rythmée par la remise des prix, un grand défilé des sociétés locales et une fête nocturne couronnée de succès.",
    "paragraphs": [
      "Le festival d'Enghien, organisé hier, a été des plus réussis malgré un temps qui aurait pu être plus clément. Cette fête a attiré des milliers d'invités dans la localité.",
      "À huit heures trente ont été remises les récompenses. La commission organisatrice a reçu les sociétés ayant concouru. Le défilé, dont l'importance était notable, s'est rassemblé pour parcourir les principales rues d'Enghien.",
      "Au passage, nous remarquons : La Revanche de Deuil, L'Espérance de Stains, L'Ardente de Gennevilliers-Saint-Denis, L'Association des Instituteurs, Le Drapeau de Péri, La Tricolore de Levallois-Perret, La Régénératrice d'Asnières, L'Union Patriotique Dionysienne, La Beauvaisienne, La Patriote d'Asnières, La Libérale de Montmartre, La Patriote de Saint-Denis, La Revanche de Saint-Ouen, La Fraternelle d'Argenteuil, La Sannoisienne, La Saint-Mandéenne, La Revanche du XXe arrondissement, Les Touristes de Puteaux, La Jeunesse du IVe arrondissement, L'Avant-Garde de Montmorency, L'Avant-Garde de Beauvais.",
      "La fête de nuit, comprenant un simulacre d'incendie et de sauvetage par la compagnie des pompiers ainsi qu'une retraite aux flambeaux, a rencontré un vif succès."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Social",
    "title": "La Fédération des Mineurs",
    "summary": "Après cent huit jours de grève, les mineurs de Montceau-les-Mines ont repris le travail. La Fédération nationale appelle à la solidarité envers les ouvriers précaires qui ne peuvent être réembauchés immédiatement.",
    "paragraphs": [
      "Saint-Étienne, 5 mai, minuit. Voici la décision de la Fédération nationale des mineurs de France.",
      "À tous les travailleurs : les mineurs de Montceau-les-Mines ont, le 5 mai 1901, après cent huit jours de grève, décidé à l'unanimité la reprise du travail. Néanmoins, il reste à Montceau-les-Mines de nombreuses victimes. De plus, tous les mineurs ne pourront reprendre le travail immédiatement par suite de l'incapacité de les employer tous en même temps.",
      "Tous les travailleurs ont pour devoir sacré de permettre à ces camarades de vivre en attendant la reprise totale. Le sort de chacun est lié à celui de Montceau ; il est donc du devoir de tous de faire l'impossible pour que chacun puisse se nourrir en attendant.",
      "Signé : Le Comité fédéral."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Faits divers autour de Paris",
    "summary": "Une chronique d'accidents et de crimes secoue la banlieue : brûlures domestiques, altercations violentes, escroqueries et découvertes macabres témoignent d'une actualité quotidienne chargée.",
    "paragraphs": [
      "Bécon-les-Bruyères : Mme Alexandrine Musi, blanchisseuse âgée de trente-six ans, a été horriblement brûlée sur tout le corps suite à un accident domestique. On désespère de la sauver.",
      "La Garenne-Colombes : M. Adrien Feltes, âgé de trente-quatre ans, a par mégarde fait jouer la détente d'un revolver qu'il nettoyait. Le projectile a atteint M. Roux à la main gauche.",
      "Colombes : M. Jules Redoux a été renversé devant sa porte par le cheval d'un tilbury qui venait de s'emporter. Il est grièvement blessé.",
      "Saint-Denis : Émile, âgé de vingt-cinq ans, un mauvais sujet, a saccagé le domicile de son père, brutalisé sa mère et entamé une lutte terrible avec son frère Jules, qu'il a mordu cruellement. Il a été mis à la disposition du commissaire de police.",
      "Bobigny : M. Louis-Henri Boullonai, charretier, est tombé sous les roues de son véhicule et a succombé à ses blessures.",
      "Pré-Saint-Gervais : M. Léon Larché, ouvrier peintre, a eu une altercation avec un bouvier nommé Goull. Ce dernier lui a porté des coups de poing si violents qu'il est tombé, se fracturant le crâne. Son état est jugé grave.",
      "Neuilly-Plaisance : Jules Fremant, à la suite d'une discussion, a poignardé le nommé Hippolyte. L'agresseur a été arrêté, la victime est à l'hôpital Saint-Antoine.",
      "Montreuil-sous-Bois : Le commissaire a arrêté Alexandre Detavier, un escroc qui se faisait passer pour un ancien combattant médaillé afin de duper les habitants.",
      "Pontenay-sous-Bois : La police a découvert dans des carrières à plâtre une caverne où quatre jeunes gens, Jules Thorou, Isidore Treffault, Marc Dunois et Louis Mène, se cachaient après avoir commis des vols. Ils ont été arrêtés.",
      "Saint-Germain-en-Laye : M. Gustave Brely a été retrouvé inanimé, le corps mutilé, probablement renversé par une voiture de maraîchers.",
      "Mantes : Un cadavre a été repêché près du bac. La blessure faciale semble être post-mortem, causée par l'hélice d'un vapeur.",
      "Coulommiers : Un incendie a détruit un grand hangar à la ferme de la Plumasserie, appartenant à M. Labarre.",
      "Beauvais : Un ouvrier nommé Meurein a été pris entre deux wagons à la gare et tué sur le coup."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Tribunaux",
    "title": "Le cas de l'abbé Bruneau",
    "summary": "À Laval, l'affaire de l'abbé Bruneau connaît des rebondissements après les aveux d'une ancienne servante. Le procureur Dely maintient toutefois ses poursuites contre l'ecclésiastique malgré ses dénégations.",
    "paragraphs": [
      "La révélation faite par la vieille servante de l'abbé Fricot, qui aurait déclaré avoir assassiné son maître, a soulevé une émotion considérable à Laval.",
      "M. Dely, procureur de la République à cette époque, maintient que la culpabilité de l'abbé Bruneau ne fait aucun doute, malgré ses protestations d'innocence.",
      "La lettre en question, où Bruneau reconnaissait des faits tout en se disant innocent du meurtre, a été versée au dossier."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Feuilleton",
    "title": "Miss Tempête (Roman)",
    "summary": "Lucien cherche à justifier sa conduite envers M. Tavernier devant une Renée froide et distante. Au cours de l'échange, il révèle l'existence d'une muse romaine qui aurait inspiré le chef-d'œuvre du peintre.",
    "paragraphs": [
      "Lucien tentait de se justifier devant Renée, expliquant ses actions contre M. Tavernier. Renée, impassible, l'écoutait avec un intérêt distant.",
      "Lucien a laissé échapper des détails sur une mystérieuse liaison de Tavernier à Rome avec un modèle, une « créature admirable » que le peintre aurait immortalisée dans son tableau acheté par l'État pour le musée du Luxembourg.",
      "Renée, piquée au vif, interroge Lucien, cherchant à percer le mystère de cette femme et de sa relation avec le peintre."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Théâtres",
    "title": "Courrier des Théâtres",
    "summary": "Actualité des scènes parisiennes : programmation de l'Opéra, retour de tournée de Sarah Bernhardt et Coquelin, assemblée générale des auteurs dramatiques et succès aux Variétés.",
    "paragraphs": [
      "La semaine théâtrale à Paris est chargée. L'Opéra programme Tannhäuser et les Huguenots. À la Comédie-Française, on joue Patrie.",
      "Mme Sarah Bernhardt et M. Coquelin sont de retour de leur tournée en Amérique. Ils donneront des représentations à Londres, mais aussi à Lyon, Genève et Bruxelles.",
      "La Société des auteurs et compositeurs dramatiques a tenu son assemblée générale sous la présidence de M. V. Sardou. Les auteurs ont touché 4 569 207 francs de droits.",
      "Aux Variétés, La Veine de M. Capus bat des records de recettes."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Courses",
    "title": "Résultats des courses hippiques",
    "summary": "Compte-rendu des épreuves hippiques disputées au bois de Boulogne et annonce des pronostics pour les épreuves de la semaine.",
    "paragraphs": [
      "Au bois de Boulogne, résultat du dimanche 5 mai 1901 : La course des Prix d'Essai a été remportée par La Camargo. Le prix Rainbow est revenu à Théobard.",
      "Les pronostics pour aujourd'hui, lundi 6 mai, concernent les prix des Avelines, de la Tille, du Roi-Soleil, de Dourdan et des Glycines."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Faits Divers",
    "title": "Orages violents dans le Gers et mort à Jégun",
    "summary": "Un violent orage s'est abattu sur le département du Gers. À Jégun, un homme travaillant aux champs a été mortellement frappé par la foudre.",
    "paragraphs": [
      "Après une journée très chaude, un orage épouvantable s'est déchaîné avant-hier sur notre contrée. Il est tombé, pendant une demi-heure, une telle quantité d'eau que plusieurs ruisseaux ont débordé. La grêle, qui est également tombée, a causé d'importants dégâts sur divers points du département.",
      "Dans la commune de Jégun, au fort de l'orage, un nommé François Compeère, âgé de quarante ans, au service de M. Béreil, propriétaire à Pale, quartier de Lavacan, a été tué par la foudre tandis qu'en compagnie de sa femme et de sa fille, il confectionnait des fagots."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Faits Divers",
    "title": "Dégâts des orages dans l'Aveyron",
    "summary": "Des intempéries sévères dans l'Aveyron ont endommagé les récoltes, frappé une école à Gabriac et décimé un troupeau de bestiaux à Pijaguet.",
    "paragraphs": [
      "Un violent orage a gravement endommagé les récoltes sur le territoire de plusieurs communes, notamment à Villecomtal, Marcillac, Bozouls, Entraygues, etc.",
      "La foudre est tombée sur la maison d'école de Gabriac. Les enfants, réunis à ce moment sous le préau, en ont été quittes pour une violente secousse et une forte émotion.",
      "Dans un village voisin, à Pijaguet, la foudre a détruit un troupeau de bestiaux."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Faits Divers",
    "title": "Drame de la foudre à Toulouse",
    "summary": "Sur la route de Pamiers, trois écolières surprises par un orage ont été foudroyées : l'une a péri, une autre est grièvement blessée et la troisième est indemne.",
    "paragraphs": [
      "Trois petites filles revenaient hier soir de l'école et suivaient ensemble la route de Pamiers lorsqu'elles furent surprises par un violent orage. Elles s'abritèrent tant bien que mal sous l'un des arbres bordant la route.",
      "À peine y étaient-elles installées que la foudre tomba sur l'arbre. L'une d'elles, la petite Antonia Malthol, âgée de six ans, a eu les sabots qu'elle portait aux pieds entièrement brûlés. Elle sera probablement quitte pour la terrible commotion qu'elle a ressentie.",
      "Une de ses petites camarades, Marie Abadie, a été tuée sur le coup. Quant à la troisième, nommée Denjean, âgée de quatorze ans, elle a été grièvement atteinte et ses jours sont en danger."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Faits Divers",
    "title": "Orages dans l'Yonne",
    "summary": "De violents orages ont frappé l'Yonne avant-hier. La foudre, tombée sur l'atelier de la Compagnie des chemins de fer à Chablis, a grièvement blessé l'ouvrier Perrache.",
    "paragraphs": [
      "De violents orages ont éclaté avant-hier sur différents points du département. La grêle a causé quelques dégâts.",
      "La foudre est tombée à divers endroits, notamment à Chablis, sur l'atelier de peinture de la Compagnie des chemins de fer. Un ouvrier, nommé Perrache, a été relevé sans connaissance."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Justice",
    "title": "Le crime de Roubaix",
    "summary": "Le juge d'instruction a entendu Louis Penoy sur le crime de Roubaix. La découverte de lettres en flamand, prouvant la préméditation, contredit les velléités de regrets exprimées par l'assassin.",
    "paragraphs": [
      "Le parquet est descendu hier, dans l'après-midi, à Roubaix. Le juge d'instruction, M. Delahaye, s'est borné à recevoir les déclarations de l'assassin.",
      "Louis Penoy était fort abattu. Il a renouvelé la version qu'il avait émise au commissariat de police : sa femme ne dormait pas quand il l'a frappée ; c'est son refus d'aller le rejoindre à Gand qui l'a exaspéré ; il a « vu rouge » et frappé dans un moment de colère, tout en regrettant son acte. Il a même ajouté : « Si on ne m'avait pas arrêté, j'allais me noyer. Mais maintenant je ne sollicite qu'une chose, ma mise en liberté. Je voudrais travailler pour nourrir mes enfants. »",
      "Une nouvelle perquisition, effectuée dans la chambre du crime, a permis la découverte de deux lettres écrites en langue flamande, adressées de Gand par l'accusé à sa femme. Elles démontrent la préméditation. Les menaces de mort qu'elles contiennent sont formelles."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Chronique Orphéonique",
    "title": "Vie musicale et concours orphéoniques",
    "summary": "La saison musicale s'annonce riche : festivals et concours orphéoniques se multiplient à travers la France, notamment à Lons-le-Saunier, Cahors et Soulac-sur-Mer.",
    "paragraphs": [
      "L'excellente société musicale l'Harmonie de Lons-le-Saunier prépare, pour le 4 août, un grand festival musical auquel seront invitées toutes les sociétés orphéoniques de la région.",
      "L'Orphéon de Cahors publie le règlement du concours de sociétés chorales, harmonies, fanfares, estudiantinas et orchestres, qui sera ouvert à Cahors le dimanche 2 juin, à l'occasion de la fête des Fleurs.",
      "D'autres concours sont annoncés, notamment à Soulac-sur-Mer, Guise, Châtelet-en-Brie, Chaumont-en-Vexin et Montauban."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Chronique Financière",
    "title": "Point sur la Bourse et les marchés",
    "summary": "La Bourse de Paris retrouve son allant. La liquidation de fin de mois s'est opérée avec aisance et la fermeté des valeurs de crédit confirme la reprise économique espérée.",
    "paragraphs": [
      "Bien que les engagements paraissent avoir pris un peu plus d'importance, au moins sur certains points, la liquidation de fin de mois s'est opérée avec la même facilité que les précédentes. L'aisance avec laquelle s'effectuent les règlements et l'abondance toujours croissante des capitaux disponibles ont enfin décidé la Bourse à secouer sa torpeur.",
      "Comprimées un moment par la crainte d'une grève générale des mineurs, nos rentes ont repris une excellente tendance, maintenant que cette perspective paraît écartée.",
      "En revanche, les fonds ottomans ont retrouvé une grande animation, sur le bruit, qui mériterait d'ailleurs confirmation, d'un projet d'unification des séries de la Dette.",
      "L'animation et la fermeté sont revenues dans le groupe des sociétés de crédit, et ce n'est pas l'indice le moins important de la reprise espérée des affaires."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Revue Commerciale",
    "title": "État du marché des grains et des farines",
    "summary": "Le marché des grains et des farines à Paris affiche une belle fermeté. Malgré les craintes liées à la météo printanière, la demande reste active et les cours sont en hausse.",
    "paragraphs": [
      "Les nouvelles des récoltes sont généralement assez satisfaisantes, bien qu'on se plaigne du jaunissement par suite du froid que nous avons eu ces temps derniers. Il est certain que nous ne sommes pas encore à la moisson et que la récolte dépend de la température à venir.",
      "Sur notre place, les farines de commerce ont eu des affaires assez actives et les prix se sont légèrement relevés, par suite des demandes du découvert.",
      "Les blés du marché de Paris ont également haussé dès lundi dernier, et les prix se sont maintenus très fermes pendant toute la semaine."
    ]
  }
];
