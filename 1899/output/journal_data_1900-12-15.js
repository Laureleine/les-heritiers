// Date: 1900-12-15
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-12-15 (Version Restaurée, 67 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Un monument à un chien",
    "summary": "Au col du Grand-Saint-Bernard, un monument sera prochainement érigé à la mémoire de Barry, célèbre chien sauveteur dont l'héroïsme légendaire et le sauvetage de quarante vies méritent d'être immortalisés par la postérité.",
    "paragraphs": [
      "On inaugurait récemment, au pied du Mont-Blanc, un monument à la mémoire de l'un de nos plus célèbres guides de montagne. Certes, ces braves gens méritent bien l'hommage qu'on leur a rendu.",
      "Mais voici que précisément il est question d'en ériger un, non pas à un guide, non pas à un homme. C'est un chien qui va être ainsi glorifié à deux ou trois mille mètres de hauteur : Barry, le célèbre Saint-Bernard.",
      "Il fut presque illustre il y a environ un siècle. Pendant douze ans, pas un jour, pour ainsi dire, ne se passa sans qu'il quittât l'hospice du Grand-Saint-Bernard pour aller exercer sa mission de sauveteur.",
      "Le monument se composera d'une roche où se dressera Barry avec l'enfant sur son dos. Sur le piédestal, on gravera cette inscription : « Barry, il a sauvé quarante personnes, il a été tué par la quarante-et-unième. »",
      "On annonçait il y a peu de temps que la race des chiens du Saint-Bernard était en complète dégénérescence. Raison de plus pour fixer d'une façon durable l'image d'une de ces puissantes et nobles bêtes."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Sans Famille : Marie-Madeleine (Première Partie)",
    "summary": "Malgré la rigueur de l'hiver, l'église de Saint-Thomas d'Aquin a célébré le mariage de Mademoiselle de Rambert et du baron Georges de Prayssac, une union saluée par la haute société comme un mariage d'amour.",
    "paragraphs": [
      "C'était un beau mariage. En dépit de l'hiver qui sévissait avec rage, l'église de Saint-Thomas d'Aquin ressemblait à une serre pleine de fleurs et de plantes.",
      "Mademoiselle de Rambert épousait M. le baron Georges de Prayssac, et dans la foule qui attendait l'arrivée des époux, les bruits les plus flatteurs circulaient. C'était non seulement l'union de deux grands noms, l'alliance de deux fortunes, c'était aussi un mariage d'amour.",
      "La mariée s'avançait au bras de son père, la tête modestement penchée, charmante sous la gaze de son voile et dans sa robe à longue traîne rayée d'une guirlande de fleurs d'oranger.",
      "Elle se sentait très émue. Celui qu'elle épousait avait tout son cœur. Elle se confiait à lui avec l'abandon des âmes loyales et généreuses qui n'ont ni arrière-pensée ni réserve dans les engagements qu'elles prennent à la face des autels et de Dieu."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique Militaire",
    "title": "Les officiers d'administration",
    "summary": "Le ministère de la Guerre est interpellé sur la situation des officiers d'administration, dont le surcroît de travail lors des manœuvres et le manque de perspectives d'avancement génèrent un profond mécontentement.",
    "paragraphs": [
      "L'article que nous avons publié sur les officiers d'administration nous attire quelques lettres intéressantes sur lesquelles il est bon d'appeler l'attention du ministère de la Guerre.",
      "C'est qu'on lui demande beaucoup lorsqu'on veut l'utiliser ; le travail, aux manœuvres surtout, est considérable. Ils sentent peser sur eux un peu de dédain, aussi s'évadent-ils dès qu'ils le peuvent des cadres dans lesquels ils sont entrés.",
      "Ce qui les touche le plus, c'est l'absence d'avancement. Il devrait être admis que tout officier des services auxiliaires doit avoir au moins deux galons à son entrée dans l'armée territoriale et en aura trois lorsqu'il restera au-delà du temps dû au pays."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Mort de M. et Mme Tarbé des Sablons",
    "summary": "L'écrivain Tarbé des Sablons et son épouse sont décédés tragiquement rue Ballu. Mme Tarbé a succombé à une maladie, suivie quelques heures plus tard par son mari, terrassé par l'émotion et une attaque cardiaque.",
    "paragraphs": [
      "Un écrivain et journaliste bien connu, M. Tarbé des Sablons, et sa femme, née Kahn, sont morts hier matin, presque au même instant, dans les somptueux appartements qu'ils occupaient, 11, rue Ballu.",
      "Ce double décès est survenu dans des circonstances particulièrement émouvantes et tellement singulières que l'on crut d'abord à un double suicide. Âgés tous deux de soixante-trois ans, l'écrivain et sa femme étaient devenus quelque peu misanthropes.",
      "Mme Tarbé fut atteinte de broncho-pneumonie. En peu de jours, son affection s'aggrava de façon à ne laisser aucun espoir. Vers neuf heures du matin, Mme Tarbé, agonisante, demanda son mari. Celui-ci accourut. Durant une heure, elle souffrit horriblement. Soudain, elle s'affaissa, inanimée.",
      "Vers onze heures, une bonne pénétra dans la chambre. Mme Tarbé était étendue sur son lit. Son mari, la face boursouflée et écumante, les yeux révulsés par l'attaque cardiaque qui avait dû le surprendre, était assis au chevet de sa femme."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le drame de l'Estelle",
    "summary": "Après la découverte des époux Cazassus agonisants à l'Estelle, la justice écarte la thèse du suicide mutuel et privilégie la piste criminelle, soupçonnant l'intervention d'un tiers dans ce meurtre.",
    "paragraphs": [
      "Le Petit Parisien a relaté hier le drame épouvantable dont le petit village de l'Estelle, près de Saint-Gaudens, a été le théâtre. Le fils des victimes, Jacques Cazassus, a été interrogé à plusieurs reprises par les magistrats.",
      "Il était occupé à traire les vaches quand il entendit dans la maison un bruit assez semblable à celui que produirait la chute de deux corps. Il accourut aussitôt et trouva ses parents agonisants.",
      "Il semble bien prouvé aujourd'hui que les deux vieillards vivaient en assez mauvaise intelligence au sujet du partage de leurs biens. Est-ce donc une dispute plus violente qu'à l'ordinaire qui aurait poussé les deux vieillards à se donner réciproquement la mort?",
      "La justice ne le pense pas. L'examen médico-légal semble démontrer que les époux Cazassus n'ont pu se porter l'un l'autre les blessures qui ont amené leur mort. Le parquet est convaincu qu'une tierce personne a pris une part active au meurtre."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Incendie d'un château en Belgique",
    "summary": "Le château du prince de Ligne, à Belœil, surnommé le Versailles de la Belgique, a été anéanti par un violent incendie provoqué par une défectuosité dans le système de chauffage de l'édifice historique.",
    "paragraphs": [
      "Le château du prince de Ligne, surnommé le Versailles de la Belgique, est devenu la proie des flammes. Malheureusement, il ne reste que des ruines de ce monument prestigieux. L'incendie a été causé par un défaut dans la construction du calorifère.",
      "L'édification du château de Belœil remonte à l'an 1394. Il se composait d'un corps de bâtiments formant un parallélogramme flanqué, à ses angles, de quatre tours rondes coiffées d'une coupole. L'intérieur avait été, depuis lors, complètement modernisé."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le mystère du Pré-Saint-Gervais",
    "summary": "L'enquête sur la disparition survenue au Pré-Saint-Gervais reste entière. La police tente de démêler les conflits familiaux liés à la propriété occupée par M. B., source de violences répétées.",
    "paragraphs": [
      "L'enquête entreprise par M. Marie, commissaire de police de Pantin, au sujet du mystère du Pré-Saint-Gervais, n'a jusqu'à présent pu éclaircir cette affaire. Le magistrat est secondé dans ses investigations par le service de la Sûreté.",
      "Le fils du vieillard disparu est venu apporter certains renseignements. Il a établi que les héritiers n'avaient jamais renoncé à entrer en possession de la propriété qu'avait habitée leur père. Ils avaient tenté d'expulser l'occupant, M. B., qui, pour toute réponse, les accueillait par des brutalités."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "International",
    "title": "Nouvelles de la Guerre des Boers",
    "summary": "Des dépêches confirment une victoire boer sur la colonne du général Cléments à Baberton. La situation britannique à Komati-Poort devient critique, forçant les troupes à se retrancher face à l'ennemi.",
    "paragraphs": [
      "Le télégraphe nous apporte la nouvelle d'une victoire importante remportée par les Boers sur les troupes du général Cléments, non loin de la frontière portugaise.",
      "Le Daily Express a annoncé qu'une dépêche signalait que le camp du général Cléments à Baberton a été attaqué par une force considérable de Boers. Les Anglais auraient été contraints de se rendre.",
      "Une dépêche de lord Kitchener confirme que la colonne Cléments, qui stationnait à Noitgedacht, a été attaquée par 2 500 hommes. Le général a dû se retirer sur Heck Poort. Cinq officiers ont été tués lors des combats.",
      "La situation est jugée grave à Komati-Poort. Les Anglais, craignant une attaque imminente, procèdent à la construction de tranchées."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Étranger",
    "title": "Situation dans le Sud de l'Afrique",
    "summary": "La traque du commandant Brand se poursuit près de Petrusburg. Alors qu'une épidémie frappe la cavalerie boer, Louis Botha mobilise ses forces aux abords de Standerton, intensifiant la résistance.",
    "paragraphs": [
      "Le Parisien rapporte que le commandant Brand, récemment blessé, se cacherait dans une ferme aux environs de Petrusburg.",
      "Les burghers ont fait bon accueil, selon les correspondances anglaises, au discours de M. Chamberlain relativement au futur gouvernement du Sud de l'Afrique.",
      "Zeerust, 12 décembre : Une épidémie s'est déclarée parmi les chevaux boers.",
      "Standerton, 14 décembre : Louis Botha, accompagné de ses troupes et d'une pièce d'artillerie, est signalé à vingt milles de Standerton. Le général Botha a convoqué les Boers pour samedi."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Étranger",
    "title": "Une circulaire du général Botha",
    "summary": "Le général Botha, par une circulaire officielle, dément sa démission et confirme la poursuite de la lutte boer. M. Schalk Burger assure l'intérim présidentiel en remplacement de M. Krüger.",
    "paragraphs": [
      "Le Cap, 14 décembre : Malgré les efforts entrepris par les Anglais pour empêcher les combattants boers de faire parvenir des nouvelles en Europe, nous avons pu nous procurer les termes d'une circulaire adressée par le commandant général Louis Botha aux officiers et burghers de la République sud-africaine.",
      "Cette circulaire, datée du 30 octobre et imprimée à Pietersburg, dément les bruits mensongers répandus par les Anglais sur le gouvernement de la République et sur la personne même du général.",
      "D'accord avec le président Steijn, le conseil exécutif a accordé au président Krüger un congé de six mois pour se rendre en Europe. M. Schalk Burger, vice-président, a été assermenté comme faisant fonction de président d'État.",
      "Le général Botha dément formellement sa démission, affirme qu'il inspectera personnellement tous les commandos, et exhorte les burghers à poursuivre la lutte pour la liberté.",
      "Il donne des précisions sur la situation des forces boers : dans l'État d'Orange, des milliers d'hommes sont sous les armes, et des commandos comme celui de Beyers ont repris Warmbad et Vijlstroom."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Étranger",
    "title": "Capture d'un train",
    "summary": "Dépêche de Londres du 14 décembre : le correspondant du Morning Post à Pretoria confirme que les Boërs ont intercepté un train près de Vlaklaagte, saisissant 135 chevaux lors de cette opération.",
    "paragraphs": [
      "Londres, 14 décembre : Le correspondant du Morning Post à Pretoria, télégraphiant le 12 décembre, rapporte que les Boërs ont intercepté un train samedi dernier près de Vlaklaagte et se sont emparés de 135 chevaux."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Étranger",
    "title": "Les intentions de Lord Kitchener",
    "summary": "Le Cap, 14 décembre. Lord Kitchener durcit sa stratégie militaire : tout burgher trouvé en possession d'une arme ou ayant violé son serment de neutralité sera désormais sévèrement réprimé.",
    "paragraphs": [
      "Le Cap, 14 décembre : Lord Kitchener s'apprête à modifier sa stratégie de guerre. Désormais, tout burgher possédant une arme à feu ou ayant rompu le serment de neutralité sera traité avec la plus grande rigueur par les autorités militaires."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Étranger",
    "title": "Soldats libérés",
    "summary": "Standerton, 14 décembre. Quatre soldats britanniques, capturés et blessés durant la marche du général French sur Machadodorp, ont été relâchés par les Boërs après avoir reçu des soins.",
    "paragraphs": [
      "Standerton, 14 décembre : Quatre soldats, faits prisonniers par les Boërs et grièvement blessés lors de la marche du général French sur Machadodorp, ont été relâchés. Ils déclarent avoir été traités avec égard durant leur captivité."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Étranger",
    "title": "Les consuls étrangers à Johannesburg",
    "summary": "Johannesburg, 13 décembre. Inquiets des récentes restrictions sur les approvisionnements, les consuls étrangers se sont réunis afin d'obtenir une audience urgente auprès de Lord Kitchener.",
    "paragraphs": [
      "Johannesburg, 13 décembre : Les consuls des différentes puissances étrangères se sont réunis aujourd'hui pour délibérer sur les restrictions imposées par le gouvernement quant aux achats d'approvisionnements. Ils ont décidé de solliciter une audience officielle auprès de Lord Kitchener."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Étranger",
    "title": "Renforts anglais",
    "summary": "Aldershot et Malte, 14 décembre. Face au besoin pressant d'infanterie montée, des contingents d'élite partiront en janvier pour le Cap afin de renforcer les troupes britanniques.",
    "paragraphs": [
      "Aldershot, 14 décembre : Par suite du besoin urgent d'infanterie montée, tous les hommes et officiers déjà entraînés recevront l'ordre de départ pour le 6 janvier.",
      "Malte, 14 décembre : L'ensemble de l'infanterie montée stationnée à Malte, soit un contingent de quatre mille hommes, quittera l'île à destination du Cap au milieu du mois de janvier."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "La Légion d'Honneur",
    "summary": "M. Hartmann, chef d'escadron d'artillerie et directeur adjoint de l'atelier de Puteaux, est nommé officier de la Légion d'honneur pour ses services éminents.",
    "paragraphs": [
      "M. Hartmann, chef d'escadron d'artillerie, directeur adjoint de l'atelier de construction de Puteaux, membre du bureau national des poids et mesures et de la commission de métrologie usuelle, est nommé officier de la Légion d'honneur."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Passages de rivières",
    "summary": "Le génie militaire soutient désormais l'entraînement de la cavalerie au franchissement des rivières en fournissant des matériaux de démolition nécessaires aux exercices.",
    "paragraphs": [
      "Depuis quelques années, nos régiments de cavalerie luttent d'ingéniosité pour inventer des procédés de passage de rivières, mais les ressources étaient jusqu'ici inexistantes.",
      "Pour permettre de poursuivre ces exercices d'une importance capitale, le génie militaire a décidé d'allouer ou de prêter aux régiments de cavalerie tous les matériaux de démolition dont il peut disposer : poutres, chevrons, planches, madriers, ferrures, etc."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Nouvelles maritimes",
    "title": "Avaries à bord du cuirassé Amiral-Duperré",
    "summary": "Le cuirassé Amiral-Duperré est rentré à Brest suite à la rupture de la chaîne de sa tourelle tribord, ayant entraîné la chute du mât d'artimon sans faire de victimes.",
    "paragraphs": [
      "On mande de Brest : Le cuirassé Amiral-Duperré est rentré en rade de Brest hier après-midi avec de graves avaries.",
      "La chaîne qui fait agir la tourelle tribord s'est rompue, entraînant la chute du mât de flèche d'artimon. Par bonheur, aucun accident de personne n'est à déplorer."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Le Président Krüger à La Haye",
    "summary": "Le président Krüger, entouré des émissaires du Transvaal et de l'État libre d'Orange, reçoit les honneurs lors de plusieurs réceptions officielles à La Haye.",
    "paragraphs": [
      "La Haye, 14 décembre : Il y a eu une grande réception toute la journée d'hier au Palais des Arts en l'honneur du président Krüger, entouré des envoyés du Transvaal et de l'Orange.",
      "Le président du Conseil donne demain un grand dîner officiel en l'honneur du président Krüger.",
      "La Reine a invité aujourd'hui le président Krüger et M. Leyds à assister à un dîner intime au Palais."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Le Président et l'Empereur Guillaume",
    "summary": "Le projet du président Krüger de visiter l'Allemagne dépend uniquement de la disponibilité de l'empereur Guillaume, aucune dissuasion n'ayant eu lieu à Paris.",
    "paragraphs": [
      "La Haye, 14 décembre : Contrairement aux dépêches des journaux, le président Krüger n'a nullement été dissuadé à Paris d'aller en Allemagne. Il a seulement été avisé qu'on ne pouvait pas lui garantir que l'Empereur pût être à Berlin pour le recevoir."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Chine",
    "title": "Négociations de paix",
    "summary": "L'impératrice de Chine aurait consenti aux conditions de paix des puissances : retour de l'Empereur, indemnité d'un milliard de francs et installation de consuls étrangers dans les provinces.",
    "paragraphs": [
      "On mande de Shanghai que l'impératrice de Chine aurait accepté les conditions de paix suivantes : le retour de l'empereur à Pékin, une indemnité d'un milliard de francs, l'octroi d'une garde pour chaque légation et la nomination de consuls étrangers dans chaque province.",
      "Li-Hung-Chang et les plénipotentiaires ont été autorisés à faire usage du sceau impérial."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Chine",
    "title": "Menaces de soulèvement",
    "summary": "À Canton, les autorités ont appréhendé plusieurs individus ayant menacé les étrangers. Une canonnière française a été dépêchée pour garantir l'exécution de la sentence prononcée.",
    "paragraphs": [
      "Hong-Kong, décembre : On annonce de Canton que plusieurs individus, ayant publiquement mis à prix la tête des étrangers, ont été arrêtés. Une canonnière française a fait route vers les lieux pour veiller à l'exécution rigoureuse de la sentence."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Chine",
    "title": "Les intentions de la Russie",
    "summary": "La Russie confirme au maréchal de Waldersee son intention de retirer ses troupes du Tché-Li et de restituer la gestion du chemin de fer avant l'échéance de la nouvelle année russe.",
    "paragraphs": [
      "Londres, décembre : La Russie a notifié une seconde fois au maréchal de Waldersee sa ferme intention de retirer ses troupes de la province du Tché-Li et de remettre la gestion du chemin de fer avant la nouvelle année russe."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Faits divers",
    "title": "Naufrage d'un paquebot",
    "summary": "Un drame fluvial s'est produit près de Hokau, sur le fleuve Si-Kiang, où un paquebot a sombré à la suite d'un mouvement de foule paniqué, causant la noyade de plus de deux cents personnes.",
    "paragraphs": [
      "On annonce de Canton qu'un paquebot a chaviré près de Hokau, sur le Si-Kiang, à la suite d'un mouvement de panique parmi les passagers. Plus de deux cents personnes ont péri noyées lors de cette catastrophe."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Le canal du Nicaragua",
    "summary": "Le Sénat américain a voté un amendement au traité Hay-Pauncefote conférant aux États-Unis la responsabilité de la défense du canal du Nicaragua, au détriment de la clause de neutralité.",
    "paragraphs": [
      "Washington, 14 décembre : Le Sénat a adopté, à une très grande majorité, l'amendement au traité Hay-Pauncefote stipulant que les États-Unis seraient désormais chargés de la défense du canal du Nicaragua en temps de guerre, ce qui annule de facto la clause de neutralité initiale."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Politique intérieure",
    "title": "Réforme du régime des boissons",
    "summary": "M. Caillaux, ministre des Finances, a été entendu par la commission spéciale du Sénat concernant la réforme du régime des boissons. Le rapport de M. de Verninac sera discuté en séance publique jeudi prochain.",
    "paragraphs": [
      "M. Caillaux, ministre des Finances, a été entendu ce jour par la commission spéciale du Sénat chargée d'étudier la réforme du régime des boissons.",
      "Le rapport circonstancié présenté par M. de Verninac, au nom de ladite commission, viendra en discussion devant la haute assemblée dès jeudi prochain."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Politique intérieure",
    "title": "La marche du budget",
    "summary": "La Chambre des députés consacrera ses séances de la semaine prochaine à l'examen du budget de 1901. Il est probable que le gouvernement demande à siéger durant la période des fêtes de fin d'année.",
    "paragraphs": [
      "La Chambre des députés consacrera l'essentiel de ses travaux de la semaine prochaine à l'examen approfondi du budget pour l'exercice 1901.",
      "Il apparaît d'ores et déjà probable que le gouvernement sollicitera de la Chambre la poursuite des séances législatives entre Noël et le jour de l'an, afin d'assurer l'avancement des crédits."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Chambre des députés",
    "title": "Séance du 14 décembre",
    "summary": "La Chambre a voté les budgets de la Justice et de la Légion d'honneur. La séance fut marquée par des interpellations sur les fraudes électorales à Bordeaux, la candidature officielle et les troubles en Martinique.",
    "paragraphs": [
      "La Chambre a procédé au vote des budgets de la Justice et de la Légion d'honneur sans rencontrer d'opposition majeure.",
      "La séance a ensuite été occupée par une série d'interpellations relatives aux fraudes électorales constatées à Bordeaux, à la persistance de la candidature officielle, ainsi qu'aux agitations persistantes dans la colonie de la Martinique."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Nouvelles coloniales",
    "title": "Mission Foureau-Lamy",
    "summary": "Le ministre de la Guerre a honoré les membres de la mission Foureau-Lamy, dont le lieutenant Métois et les sergents Crosson du Cormier, Ménage et Si-Mohammed, pour les éminents services rendus lors de leur expédition.",
    "paragraphs": [
      "Le ministre de la Guerre a tenu à rendre hommage à l'héroïsme des membres de la mission Foureau-Lamy.",
      "À ce titre, des médailles d'honneur ont été décernées au lieutenant Métois ainsi qu'aux sergents Crosson du Cormier, Ménage et Si-Mohammed, pour les services distingués rendus au cours de cette périlleuse expédition."
    ]
  },
  {
    "id": 30,
    "page": 2,
    "category": "Faits divers",
    "title": "Incident de Dunkerque",
    "summary": "George Morisson, premier lieutenant du navire anglais Rydal Hall, a été condamné par le tribunal de Dunkerque à quarante jours de prison pour outrages et violences envers les autorités sanitaires du port.",
    "paragraphs": [
      "Le tribunal correctionnel de Dunkerque a rendu son jugement concernant l'incident survenu sur le navire anglais le Rydal Hall.",
      "George Morisson, premier lieutenant du bord, a été condamné à une peine de quarante jours de prison pour avoir proféré des outrages et exercé des violences envers le docteur Duriau ainsi qu'un garde sanitaire dans l'exercice de leurs fonctions."
    ]
  },
  {
    "id": 31,
    "page": 2,
    "category": "Conseil municipal de Paris",
    "title": "Séance du 14 décembre",
    "summary": "Le Conseil municipal de Paris a débattu l'annulation d'une délibération sur les comités de patronage des écoles primaires et a poursuivi l'examen des taxes remplaçant l'octroi sur les boissons.",
    "paragraphs": [
      "Le Conseil municipal de Paris a longuement délibéré sur l'annulation d'une décision concernant les comités de patronage des écoles primaires. La séance s'est ensuite poursuivie par l'examen approfondi des nouvelles taxes destinées à remplacer l'octroi sur les boissons."
    ]
  },
  {
    "id": 32,
    "page": 2,
    "category": "Conseil général de la Seine",
    "title": "Fête du département",
    "summary": "Le bureau du conseil général a officiellement convié le Président de la République à la fête du département. L'architecte Charles Giraud a arrêté les plans de décoration du Petit Palais.",
    "paragraphs": [
      "Le bureau du conseil général a arrêté la décision d'inviter solennellement le Président de la République à honorer de sa présence la fête du département.",
      "À cette occasion, l'architecte Charles Giraud a définitivement arrêté les plans de décoration qui transformeront le Petit Palais pour la cérémonie."
    ]
  },
  {
    "id": 33,
    "page": 2,
    "category": "Faits divers",
    "title": "Arrestation d'un bandit",
    "summary": "Le commissaire de police M. Duroas a appréhendé le nommé Vautré, 28 ans, surnommé le « Truand de la Porte-Maillot ». Ce repris de justice est soupçonné de plusieurs agressions commises à Levallois et Clichy.",
    "paragraphs": [
      "Le commissaire de police M. Duroas a procédé à l'arrestation du nommé Vautré, âgé de 28 ans, surnommé dans le milieu le « Truand de la Porte-Maillot ».",
      "Ce repris de justice est formellement soupçonné d'avoir perpétré une série d'agressions violentes à Levallois et à Clichy ces dernières semaines."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agressions et arrestation porte Maillot",
    "summary": "Un malfaiteur, accompagné de sa complice, a blessé un agent de police au poignard près des fortifications. Identifié comme habitant de Courbevoie, il a été conduit au dépôt après une perquisition.",
    "paragraphs": [
      "Un individu, se trouvant aux abords des fortifications en compagnie de sa maîtresse, la fille Marthe Bigot, connue sous le sobriquet du « Singe Vert », s'en est pris violemment aux agents de police, blessant l'un d'eux d'un coup de poignard.",
      "Désarmé et conduit au poste, l'agresseur a été identifié comme étant domicilié à Courbevoie. Une perquisition effectuée à son domicile a permis la saisie d'un attirail suspect. L'homme a été immédiatement dirigé sur le dépôt."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Social",
    "title": "Promotions dans la Légion d'honneur : Agriculture",
    "summary": "Le ministère de l'Agriculture publie une nouvelle liste de promotions dans la Légion d'honneur, distinguant diverses personnalités du monde agricole, industriel et commercial.",
    "paragraphs": [
      "Le ministère de l'Agriculture annonce ce jour une nouvelle série de promotions et de nominations dans l'ordre de la Légion d'honneur, venant compléter la liste publiée hier au Journal officiel.",
      "Sont nommés officiers : MM. Billet, horticulteur pépiniériste à Troyes ; Lodé, président de l'Union générale des mandataires à Paris ; Boni, éditeur à Paris ; Gamy-Fontenier, éleveur et maire.",
      "Sont nommés chevaliers : MM. Artus, fabricant d'huiles à Paris ; Bassot, négociant à Paris ; Monserviez, fabricant d'instruments à Bordeaux ; Paséga, membre du comité d'admission de l'Exposition ; Sain, propriétaire."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Social",
    "title": "Promotions dans la Légion d'honneur : Affaires étrangères",
    "summary": "Le ministère des Affaires étrangères publie une liste de nominations dans la Légion d'honneur, distinguant les agents et officiers ayant pris une part active aux récents événements survenus en Chine.",
    "paragraphs": [
      "Le ministère des Affaires étrangères publie une liste de nominations se répartissant en trois mouvements, principalement motivés par les événements de Chine.",
      "Parmi les officiers : M. d'Anthouard, secrétaire d'ambassade.",
      "Parmi les chevaliers : MM. Fait et Fouché, élèves interprètes en Chine ; Hartholin, ingénieur ; Bouiller, ingénieur en chef de la ligne Pékin-Han-Kéou ; Cholet et Gitter, blessés en défendant la légation ; Pincé-Pitetlan, agent des douanes ; Boissé, consul à Tchien-Kiung.",
      "La liste complète inclut également divers fonctionnaires, militaires, missionnaires et étrangers distingués lors des récents événements."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Social",
    "title": "Promotions dans la Légion d'honneur : Commerce",
    "summary": "Sur proposition du ministre M. Millerand, le ministère du Commerce procède à une série de promotions dans la Légion d'honneur honorant des figures majeures de l'industrie et de l'architecture.",
    "paragraphs": [
      "Sur proposition du ministre M. Millerand, de nouvelles promotions ont été effectuées au ministère du Commerce.",
      "Sont nommés grands-officiers : MM. Vaton de la Coupillière et Nicolas.",
      "Sont nommés commandeurs : MM. Bessonneau, Galle, Gody et Terrier.",
      "La liste des officiers et chevaliers comprend de nombreux industriels, ingénieurs et architectes, tels que MM. Arbel, Boutan, Chahuet, Dufrène, Piat, Picard et Serpollet."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Justice",
    "title": "Nomination à la Justice",
    "summary": "M. Charrier, chef du cabinet du président de la Chambre, est élevé au rang de chevalier de la Légion d'honneur.",
    "paragraphs": [
      "M. Charrier, chef du cabinet du président de la Chambre des députés, a été nommé chevalier de la Légion d'honneur."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Littérature",
    "title": "Les derniers livres édités",
    "summary": "Les éditions Combet et Cie enrichissent leur catalogue avec des ouvrages historiques, maritimes et les nouvelles aventures de la collection des Voyages Excentriques de Paul d'Ivoi.",
    "paragraphs": [
      "La maison d'édition Combet et Cie propose des ouvrages somptueux, tels que Richelieu, de Th. Cahu, et Notre Marine de Guerre, de l'enseigne de vaisseau Hourst.",
      "La série des Voyages Excentriques, signée Paul d'Ivoi, se poursuit avec le titre Le Maître Mystère.",
      "Sont également recommandés pour la jeunesse : Étapes de Jemmapes à Austerlitz, de Gaston Cerfberr, L'Évadé de la Katorga, d'Henri Leturque, ainsi que L'Enfant de la Plaine, de Jeanne Maret."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Échos",
    "title": "Audience et activités du Président de la République",
    "summary": "Le Président de la République, M. Émile Loubet, a reçu diverses personnalités. Il se rendra mardi prochain à Rambouillet pour une partie de chasse.",
    "paragraphs": [
      "Le Président de la République, M. Émile Loubet, a reçu plusieurs personnalités au cours de la matinée d'hier. Il se rendra mardi prochain à la chasse dans les forêts de Rambouillet, remplaçant ainsi la chasse habituelle du jeudi en raison d'un dîner officiel."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Échos",
    "title": "Démolition de la porte monumentale",
    "summary": "Les travaux de démolition de la porte monumentale de l'Exposition universelle ont débuté. La frise des Animaux et celle des Travailleurs sont déposées, tandis que la statue de la Parisienne est en cours de démontage.",
    "paragraphs": [
      "Les travaux de démolition de la porte monumentale de l'Exposition universelle ont officiellement commencé. La frise des Animaux a déjà été retirée et sera prochainement suivie par celle des Travailleurs, qui subira le même sort.",
      "La statue de la Parisienne est également en cours de démontage ; cette œuvre, qui fut le point de mire des visiteurs, est promise à n'être bientôt qu'un amas de plâtras."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Échos",
    "title": "Le Patronage musical",
    "summary": "Le commandant Waldteufel, avec l'appui de M. de Selves, inaugure le « Patronage musical » afin de démocratiser l'enseignement de la musique dans les écoles et les milieux ouvriers grâce à des cours gratuits.",
    "paragraphs": [
      "Le commandant Waldteufel vient de fonder, avec l'appui bienveillant de M. de Selves, le « Patronage musical ». Cette institution a pour but de généraliser l'enseignement du solfège et de la musique dans les écoles communales et les milieux ouvriers.",
      "Ces cours, entièrement gratuits, seront financés par un système de souscriptions publiques visant à favoriser l'éducation artistique populaire."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tramways électriques à Londres",
    "summary": "La ville de Londres entame une mutation majeure de ses transports urbains. Le réseau de tramways délaisse la traction animale au profit de l'énergie électrique sur un tracé totalisant 200 kilomètres de lignes.",
    "paragraphs": [
      "Londres s'apprête à réaliser une révolution dans ses transports publics : le remplacement complet de la traction animale par la traction électrique sur l'ensemble de son réseau de tramways.",
      "Cette transformation de grande envergure, portant sur 200 kilomètres de lignes, devrait être achevée dans un délai de six mois."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Justice",
    "title": "Un père condamné pour cruauté envers son enfant",
    "summary": "La huitième chambre correctionnelle a condamné l'ouvrier Grandjean à un an de prison. Dans un état d'ivresse manifeste, ce dernier avait infligé des sévices d'une rare cruauté à son nourrisson d'un mois.",
    "paragraphs": [
      "La huitième chambre correctionnelle a rendu son verdict concernant l'ouvrier Grandjean, condamné à une peine d'un an de prison ferme.",
      "Dans un état d'ivresse manifeste, le prévenu s'était rendu coupable de sévices effroyables, allant jusqu'à infliger des morsures mortelles au visage de sa fille, âgée d'à peine un mois."
    ]
  },
  {
    "id": 45,
    "page": 3,
    "category": "Justice",
    "title": "L'affaire de la maison hantée rue Labat",
    "summary": "Le tribunal a ordonné un supplément d'instruction concernant les jets de pierres sur un restaurant de la rue Labat. Les inculpés nient formellement les faits malgré les conclusions de l'enquête policière.",
    "paragraphs": [
      "La justice poursuit l'instruction d'une affaire singulière concernant le bombardement de pierres sur un restaurant situé rue Labat.",
      "Bien que la police ait identifié des suspects, le tribunal a ordonné un supplément d'instruction, les inculpés persistant à nier formellement toute participation aux faits qui leur sont reprochés."
    ]
  },
  {
    "id": 46,
    "page": 3,
    "category": "Justice",
    "title": "L'affaire Fayolle",
    "summary": "À Portets, l'exhumation du corps de Mme Fayolle a été ordonnée par la justice afin de permettre une contre-expertise capitale dans le cadre du procès pour empoisonnement intenté contre son époux.",
    "paragraphs": [
      "L'exhumation du corps de Mme Fayolle a eu lieu hier à Portets, en présence des autorités judiciaires et des experts mandatés. Cette opération, ordonnée par le juge d'instruction, doit permettre une contre-expertise rigoureuse dans le cadre du grave procès d'empoisonnement intenté contre son époux, dont l'issue demeure attendue avec une vive curiosité par la population locale."
    ]
  },
  {
    "id": 47,
    "page": 3,
    "category": "Justice",
    "title": "Tentative d'assassinat gare de l'Est",
    "summary": "Le jeune Cipriani et sa mère comparaîtront devant la cour d'assises pour avoir tiré sur M. Malcheiti, commissaire spécial adjoint, près la gare de l'Est.",
    "paragraphs": [
      "Le jeune Cipriani, ainsi que sa mère, ont été renvoyés devant la cour d'assises par la chambre des mises en accusation. Ils sont inculpés pour avoir fait usage d'une arme à feu sur la personne de M. Malcheiti, commissaire spécial adjoint, près la gare de l'Est, un acte qui avait provoqué une vive émotion lors de sa commission."
    ]
  },
  {
    "id": 48,
    "page": 3,
    "category": "Justice",
    "title": "L'homme coupé en morceaux",
    "summary": "L'enquête sur le meurtre atroce de l'inconnu dépecé piétine. En l'absence d'indices probants, les autorités peinent à identifier la victime comme à retrouver les auteurs de ce crime.",
    "paragraphs": [
      "L'enquête ouverte sur le crime mystérieux de l'homme découvert dépecé piétine lamentablement. Les maigres indices recueillis par la brigade de sûreté s'avèrent peu probants et, à cette heure, aucune piste sérieuse ne permet aux enquêteurs d'identifier formellement la victime ou les auteurs de cette atroce mutilation qui défraie la chronique."
    ]
  },
  {
    "id": 49,
    "page": 3,
    "category": "Justice",
    "title": "Le meurtre des romanichels",
    "summary": "Le juge Bastid a interrogé les frères Suletta sur le meurtre de la rue Letort. Le plus jeune des accusés a finalement reconnu être l'auteur du coup de feu mortel.",
    "paragraphs": [
      "Les frères Suletta ont été longuement interrogés par le juge d'instruction Bastid concernant le meurtre d'un jeune homme, survenu lors d'une fête rue Letort. Confronté aux éléments accablants de l'enquête, le plus jeune des accusés a fini par avouer être l'auteur du tir mortel ayant causé le décès immédiat de la victime."
    ]
  },
  {
    "id": 50,
    "page": 3,
    "category": "Justice",
    "title": "Décès suspect d'un employé du Métropolitain",
    "summary": "Suite aux protestations de la veuve de Jules Frémy, le juge a ordonné l'exhumation du corps de l'employé du Métropolitain, suspectant un décès par électrocution.",
    "paragraphs": [
      "Le corps de Jules Frémy ayant été retrouvé sans vie sur la voie du Métropolitain, une exhumation a été formellement ordonnée par le magistrat instructeur. Cette décision fait suite aux soupçons persistants de la veuve, qui affirme avec force que son mari n'a point succombé accidentellement, mais a été victime d'une mort par électrocution, thèse que les experts devront désormais confirmer ou infirmer."
    ]
  },
  {
    "id": 51,
    "page": 3,
    "category": "Justice",
    "title": "Enlèvement d'une fillette",
    "summary": "Mme Virtot a porté plainte contre son mari, dont elle est en instance de divorce, pour avoir soustrait leur fille de onze ans devant le domicile conjugal. L'enquête suit son cours.",
    "paragraphs": [
      "Mme Virtot a déposé une plainte formelle contre son mari, actuellement en instance de divorce, pour l'enlèvement de leur fille, âgée de onze ans, qu'il a emmenée de force dans une voiture devant leur domicile.",
      "Les autorités ont ouvert une enquête afin de localiser l'enfant et de définir les responsabilités pénales du père dans ce différend conjugal qui a pris une tournure dramatique."
    ]
  },
  {
    "id": 52,
    "page": 3,
    "category": "Justice",
    "title": "Les jeunes Robinson",
    "summary": "Trois jeunes garçons, après avoir dérobé 28 000 francs au père de l'un d'eux pour financer un tour du monde, ont été interpellés à leur retour à Paris. Ils ont avoué leur méfait.",
    "paragraphs": [
      "Trois jeunes garçons, mus par une soif d'aventure, ont soustrait la somme de 28 000 francs au père de l'un d'entre eux afin d'entreprendre un tour du monde. Leur périple fut toutefois de courte durée.",
      "À leur retour à Paris, les jeunes aventuriers ont été appréhendés par les forces de l'ordre. Confrontés aux faits, ils sont passés aux aveux complets et devront répondre de leurs actes devant la justice."
    ]
  },
  {
    "id": 53,
    "page": 3,
    "category": "Justice",
    "title": "Drame de la jalousie",
    "summary": "Jules Mangin a poignardé son ancienne maîtresse, la modiste Hélène Gausset. Après une brève cavale, l'agresseur a été arrêté, tandis que la victime, grièvement blessée, est soignée à Bichat.",
    "paragraphs": [
      "Un nouveau drame passionnel s'est déroulé : Jules Mangin a porté plusieurs coups de couteau à son ancienne maîtresse, la modiste Hélène Gausset, avant de prendre la fuite pour échapper à la police.",
      "Activement recherché, l'agresseur a finalement été arrêté. La malheureuse victime a été transportée d'urgence à l'hôpital Bichat, où les médecins tentent de sauver ses jours."
    ]
  },
  {
    "id": 54,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents et disparitions en banlieue",
    "summary": "La banlieue parisienne est endeuillée par plusieurs drames : disparition inquiétante à Nogent, noyade à Aubervilliers, et décès accidentels tragiques à Villeneuve-la-Garenne et Montmorency.",
    "paragraphs": [
      "Plusieurs événements tragiques sont à signaler en banlieue : M. Delanay a été déclaré disparu à Nogent-sur-Marne, tandis qu'une ménagère a trouvé la mort par noyade à Aubervilliers.",
      "Par ailleurs, deux accidents mortels ont été enregistrés : celui d'Alexis Ravinio à Villeneuve-la-Garenne et celui de M. Joseph Latrée à Montmorency, plongeant leurs familles dans la consternation."
    ]
  },
  {
    "id": 55,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vol et faits divers en province",
    "summary": "La criminalité et l'infortune marquent la province : un cambriolage à Cormeilles, une macabre découverte dans la Seine à Andrésy, et un accident mortel sur un chantier à Pontoise.",
    "paragraphs": [
      "La série noire se poursuit en province où des malfaiteurs ont dévalisé un débit de tabac à Cormeilles, emportant une partie de la marchandise sous le couvert de l'obscurité.",
      "À Andrésy, les autorités ont procédé à l'extraction d'un corps des eaux de la Seine, tandis qu'à Pontoise, un ouvrier agricole a péri dans des circonstances tragiques lors d'un accident de chargement."
    ]
  },
  {
    "id": 56,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame conjugal à l'Estaque",
    "summary": "Un restaurateur de l'Estaque a ouvert le feu sur son épouse lors d'une violente dispute. La victime, grièvement blessée, a été transportée à l'Hôtel-Dieu. L'agresseur est activement recherché par les forces de l'ordre.",
    "paragraphs": [
      "Un drame sanglant s'est déroulé hier à l'Estaque. Un restaurateur, à la suite d'une altercation violente avec son épouse, a fait usage d'une arme à feu sur celle-ci.",
      "La victime, grièvement blessée, a été secourue et transportée en urgence à l'Hôtel-Dieu où les chirurgiens ont tenté de la sauver. Le mari, auteur de cet acte criminel, a pris la fuite et est activement recherché par la police."
    ]
  },
  {
    "id": 57,
    "page": 3,
    "category": "Faits Divers",
    "title": "Naufrage à Lorient",
    "summary": "La barque 'Sainte-Anne-d'Auray' a sombré à l'entrée de la rivière d'Etel. Malgré les efforts déployés par les secours, trois marins ont péri dans cette catastrophe maritime.",
    "paragraphs": [
      "Un triste naufrage s'est produit aux abords de Lorient. La barque dénommée 'Sainte-Anne-d'Auray' a sombré à l'entrée de la rivière d'Etel.",
      "Malgré les efforts courageux déployés par les secours pour porter assistance aux naufragés, trois marins ont malheureusement péri dans cette catastrophe maritime."
    ]
  },
  {
    "id": 58,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie à l'hôtel de l'Espérance",
    "summary": "L'hôtel de l'Espérance, à Châtellerault, a été ravagé par un incendie. Les dégâts matériels sont estimés à 500 000 francs et deux pompiers ont été blessés en luttant contre le brasier.",
    "paragraphs": [
      "Un incendie d'une rare violence a totalement détruit l'hôtel de l'Espérance, situé à Châtellerault.",
      "Le montant des dégâts matériels est évalué à 500 000 francs. Au cours de la lutte acharnée contre les flammes, deux pompiers ont été blessés dans l'exercice de leurs fonctions périlleuses."
    ]
  },
  {
    "id": 59,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents domestiques et mortels en départements",
    "summary": "Une série d'accidents mortels à Joigny, Le Bleuet, Carmaux et Bourg endeuille plusieurs familles, rappelant la dangerosité des conditions de travail et des chutes accidentelles en province.",
    "paragraphs": [
      "Le bilan des accidents en province demeure lourd. Divers drames mortels ont été rapportés cette semaine dans les localités de Joigny, Le Bleuet, Carmaux et Bourg.",
      "Ces accidents touchent indifféremment des agriculteurs, des enfants et des ouvriers, souvent victimes de chutes malheureuses ou des dangers inhérents à leurs conditions de travail précaires."
    ]
  },
  {
    "id": 60,
    "page": 3,
    "category": "Courses",
    "title": "Pronostics pour Auteuil",
    "summary": "À la veille des courses d'Auteuil, l'effervescence règne parmi les turfistes. Christian et Artésia sont favoris pour le Prix des Routes, tandis que Serpent et Stutgard visent le Prix Xaintrailles.",
    "paragraphs": [
      "Les courses d'Auteuil se tiennent ce samedi. L'effervescence est grande parmi les turfistes pour cette nouvelle journée hippique.",
      "Nos pronostics privilégient Christian et Artésia pour la victoire dans le Prix des Routes, ainsi que les chevaux Serpent et Stutgard pour le Prix Xaintrailles."
    ]
  },
  {
    "id": 61,
    "page": 3,
    "category": "Sports",
    "title": "Lutte et cyclisme",
    "summary": "Les tapis de lutte voient la victoire de Lassartesse sur Omer de Bouillon et de Cotch-Mehmet sur Weber. Aux États-Unis, les coureurs français Simar et Gougoltz maintiennent une lutte acharnée aux six jours de New York.",
    "paragraphs": [
      "Sur les tapis de lutte, Lassartesse a pris le dessus sur Omer de Bouillon, tandis que Cotch-Mehmet triomphait de Weber. Parallèlement, aux États-Unis, la course des six jours de New York se poursuit avec une remarquable endurance de la part des Français Simar et Gougoltz, qui font preuve d'une grande ténacité."
    ]
  },
  {
    "id": 62,
    "page": 3,
    "category": "Sports",
    "title": "Match de football-rugby",
    "summary": "À la veille du match opposant le Racing-Club au Stade Français, le Racing s'impose comme le grand favori, fort de sa récente série de victoires éclatantes.",
    "paragraphs": [
      "Le Racing-Club rencontre demain le Stade Français. Forte de sa récente et brillante série de succès, l'équipe du Racing se présente comme le favori logique de cette confrontation sportive très attendue."
    ]
  },
  {
    "id": 63,
    "page": 4,
    "category": "Concerts et divertissements",
    "title": "Actualités de l'Olympia",
    "summary": "L'Olympia attire les foules avec son programme varié : les cascades de Sam Éhon, le dressage du taureau de Fessi, les prouesses des ours de Spessardy et l'élégance artistique de Juanita de Frezia.",
    "paragraphs": [
      "Par son extrême variété et son originalité, le spectacle actuel de l'Olympia attire plus que jamais un public nombreux qui vient en foule applaudir les étourdissantes cascades de Sam Éhon, les merveilleux exercices de haute école du superbe taureau andalou de Fessi, ainsi que les impayables acrobaties des ours de Spessardy. L'exquise Juanita de Frezia obtient, comme à l'accoutumée, un double succès de beauté et de grâce chorégraphique.",
      "Une matinée est organisée demain avec le programme complet du spectacle du soir."
    ]
  },
  {
    "id": 64,
    "page": 4,
    "category": "Concerts et divertissements",
    "title": "Programmes de la Scala et de l'Eldorado",
    "summary": "Rentrées remarquées à la Scala avec Claudius, Reschal et Mme Berville, tandis que « Y a d'la femme » triomphe. À l'Eldorado, Dranen reprend son tour de chant et son rôle dans le vaudeville de Gardel-Hervé.",
    "paragraphs": [
      "Plusieurs rentrées et débuts viennent, ce soir, enrichir le programme déjà si complet de la Scala : c'est d'abord Claudius, le fantaisiste et amusant artiste qu'on vient d'applaudir dans L'Assommoir ; puis la rentrée de Reschal, l'excellent comique de composition avec un répertoire exclusivement montmartrois ; et enfin les débuts de Mme Berville, chanteuse de genre doublée d'une jolie femme.",
      "La scène typique d'Otéro et de Cléo, où Baldy et Gibard — fantaisistes outranciers — atteignent le nec plus ultra de la parodie, restera l'une des plus réussies vues depuis longtemps. Venant après celle de l'Aiglon, où triomphe Anna Thibaud, elle termine l'amusante revue de Parisiana, « Y a d'la femme », qui n'est qu'un long éclat de rire, tout comme le bouquet clôt un feu d'artifice.",
      "Demain, en matinée, tous les interprètes paraîtront dans la revue « Y a d'la femme ».",
      "Après quelques jours de maladie, Dranen effectue ce soir sa rentrée à l'Eldorado dans son tour de chant, avec l'impayable Ocarina de Pepita, ainsi que dans les Surprises de l'Exposition, le vaudeville de Gardel-Hervé qui continue à déchaîner le fou rire."
    ]
  },
  {
    "id": 65,
    "page": 4,
    "category": "Faits divers",
    "title": "Le procès de Jean Villaurier",
    "summary": "Le procès de Jean Villaurier se tend sous le poids des témoignages. Les experts graphologues confirment l'authenticité des lettres de Rose-Manon, accablant davantage l'accusé.",
    "paragraphs": [
      "Le procès se poursuit avec les déclarations de Jérôme et de Régine, témoignant d'une atmosphère dramatique où la haine éclate violemment contre l'accusé, Jean Villaurier.",
      "Deux experts avaient été nommés par le parquet afin d'examiner, au point de vue graphologique, les lettres de Rose trouvées chez Villaurier et celles de Villaurier retrouvées chez Rose. Les experts ont formellement conclu à l'authenticité des lettres écrites par Rose-Manon."
    ]
  },
  {
    "id": 66,
    "page": 4,
    "category": "Chemins de fer",
    "title": "Interruption de trafic sur la ligne Marseille-Vintimille",
    "summary": "À la suite de l'affaissement d'un viaduc entre Agay et le Trayas, la Compagnie PLM informe que la mise en marche des trains rapides 17 et 18, prévue les 15 et 16 décembre, est reportée jusqu'à nouvel ordre.",
    "paragraphs": [
      "La Compagnie des chemins de fer de Paris à Lyon et à la Méditerranée nous informe que, la circulation étant interrompue entre Agay et le Trayas sur la ligne de Marseille à Vintimille par suite de l'affaissement d'un viaduc, la mise en marche des trains rapides 17 et 18, qui devait avoir lieu les 15 et 16 décembre, sera ajournée jusqu'à nouvel avis."
    ]
  },
  {
    "id": 67,
    "page": 4,
    "category": "Bulletin commercial",
    "title": "Situation des vins et eaux-de-vie",
    "summary": "Le marché viticole demeure calme avec une écoulement régulier des stocks. Les cours sont précisés pour l'Hérault et Narbonne, tandis que la récolte du Roussillon et les prévisions charentaises sont établies.",
    "paragraphs": [
      "Dans le Midi, la situation reste calme, le commerce continuant à écouler les stocks en magasins. Dans l'Hérault, les vins de petite couleur se paient de 11 à 17 fr. l'hectolitre. À Narbonne, les vins sains se sont payés de 16 fr. à 18 fr. le degré.",
      "Dans le Roussillon, on estime officiellement la récolte à 2 891 878 hectolitres. Dans le Bordelais, les affaires sont redevenues calmes malgré la modicité des prix.",
      "Dans les Charentes, on prévoit que les eaux-de-vie se vendront de 80 à 90 fr. de moins que l'an dernier."
    ]
  }
];
