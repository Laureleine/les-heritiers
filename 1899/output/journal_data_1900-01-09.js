// Date: 1900-01-09
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-09 (Version Restaurée, 34 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique",
    "title": "Les mères qui tuent",
    "summary": "Face à la recrudescence des suicides féminins à Paris, dont le nombre a doublé en dix ans, la société s'interroge sur les remèdes contre ces drames atroces où des mères entraînent parfois leurs enfants dans la mort.",
    "paragraphs": [
      "On a souvent remarqué qu'il se tue beaucoup moins de femmes que d'hommes, et l'on donnait à cela des raisons physiologiques qui existent sans doute toujours. La laideur de la mort à elle seule pouvait expliquer pourquoi les filles d'Ève se montraient rebelles aux immolations volontaires.",
      "Pourtant, depuis quelques années, on observe que les suicides féminins augmentent singulièrement; on évalue maintenant leur nombre à quatre cents pour Paris. C'est le double d'il y a dix ans. On se tue pour tous les motifs : amour contrarié, jalousie, colère, vanité.",
      "Mais les suicides les plus nombreux ne sont pas ceux qui proviennent de maux imaginaires. Ordinairement, c'est la misère qui se fait la pourvoyeuse de la mort. Ces drames prennent un caractère particulièrement atroce lorsqu'on y trouve associés de pauvres enfants que des parents, aveuglés par la folie ou la souffrance, entraînent dans leurs tombes.",
      "Nous avons eu le quadruple suicide de Palaiseau et celui de la rue Linné, où la mère a noté les sensations éprouvées par ses enfants durant l'agonie. Quelle aberration sans pareille que celle qui préside à ces lugubres consentements à la mort.",
      "Au temps où le suicide relevait des lois, on exposait les corps des suicidés aux gibets. L'Antiquité nous offre un curieux moyen de répression employé à Milet : on décréta que les jeunes filles qui seraient trouvées pendues seraient portées en terre toutes nues. Aussitôt, les suicides cessèrent.",
      "M. le docteur Edgar Bérillon suggère que si la presse expose les tares morales des suicidés, elle rendra d'énormes services. Il propose même l'affichage à la Morgue des photographies des victimes pour faire jaillir un éclair de raison dans le cerveau des parents désespérés."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions",
    "summary": "Tiraillée par ses sentiments et ses besoins financiers, Gabrielle se voit offrir une porte de sortie par Paul Tavernier au prix d'une entente équivoque.",
    "paragraphs": [
      "Elle se dégagea en disant : « Prenez garde, nous ne sommes pas seuls et vous me faites mal. Adieu, adieu. » Il lui avait volé un ardent baiser.",
      "Il rentra à son appartement de la rue Vignon, tandis que Paul Tavernier, qui reconduisait Gabrielle chez elle, lui disait : « Ne vous avais-je pas prévenue qu'il pourrait vous être utile ? Vous en souvenez-vous ? Vous voilà sauvée ! Cent mille francs, c'est une somme. »"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Deux femmes coupées en morceaux à Lyon",
    "summary": "L'enquête sur les restes humains découverts à Francheville progresse. Les autorités lyonnaises identifient l'une des victimes, Mme Augustine Pénet, et privilégient la piste d'un tueur monomane.",
    "paragraphs": [
      "J'ai tenu à faire moi-même une enquête personnelle sur la lugubre découverte faite à Francheville. On achevait de curer la mare dans laquelle ont été trouvés les débris des corps des victimes.",
      "Les magistrats enquêteurs semblent persuadés que les deux crimes sont l'œuvre d'un monomane dangereux. Une des victimes du drame vient d'être reconnue : il s'agit de Mme Augustine Pénet, femme Catineau, âgée de cinquante-quatre ans, disparue depuis le 19 décembre."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un crime à Provins",
    "summary": "À Chalautre-la-Petite, la découverte du cadavre d'un journalier de 73 ans au fond d'un puits, marqué par des traces de coups, laisse peu de doute sur la nature criminelle de sa disparition.",
    "paragraphs": [
      "On vient de retrouver au fond de son puits le corps du nommé Rousselot, âgé de soixante-treize ans, journalier, demeurant à Chalautre-la-Petite. Il existe des présomptions de crime, car le corps porte des marques de coups et des traces de sang ont été relevées dans la cour."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Naufrage du Pierre-le-Grand",
    "summary": "Le navire « Pierre-le-Grand » est officiellement déclaré perdu corps et biens suite à une violente tempête en mer Adriatique le 21 décembre, emportant avec lui 44 personnes.",
    "paragraphs": [
      "Le Pierre-le-Grand est aujourd'hui considéré comme perdu corps et biens. On suppose qu'il a sombré dans la mer Adriatique le 21 décembre lors d'une tempête. Le navire transportait 44 victimes au total, incluant l'équipage et des conducteurs de bestiaux."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique",
    "title": "La rentrée du Parlement",
    "summary": "À la veille de la rentrée au Palais-Bourbon, M. Turigny, doyen d'âge, présidera la séance. La course à la présidence se limite à deux candidats : MM. Paul Deschanel et Henri Brisson, avant l'examen des budgets cruciaux.",
    "paragraphs": [
      "À la rentrée du Parlement, M. Turigny, député de la Nièvre, présidera comme doyen d'âge la séance d'ouverture au Palais-Bourbon. Pour les fonctions de président, il y aura seulement deux candidats : M. Paul Deschanel et M. Henri Brisson.",
      "Après le discours du nouveau président, la Chambre fixera l'ordre du jour. Ce dernier comportera tout d'abord la suite du débat sur le budget, dont les sections de la Marine et de la Guerre donneront lieu à une discussion des plus intéressantes."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Politique",
    "title": "Élections sénatoriales et générales",
    "summary": "M. Godin est réélu sénateur des Indes françaises. Dans le Maine-et-Loire, le général Fougeron rejoint le conseil général. Un ballottage est en cours dans le canton d'Aurillac-nord.",
    "paragraphs": [
      "Une élection sénatoriale a eu lieu aux Indes françaises pour le remplacement de M. Godin, sénateur sortant, qui est réélu.",
      "Une élection au conseil général a eu lieu dimanche pour le canton de Saint-Georges (Maine-et-Loire). Le général de division en retraite, M. Fougeron, a été élu. Dans le canton d'Aurillac-nord, il y a ballottage."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "International",
    "title": "La situation au Transvaal",
    "summary": "Le général White a transmis des nouvelles de Ladysmith : après une attaque acharnée des Boërs, le régiment de Devonshire les a repoussés à la baïonnette, suscitant une vive émotion à Londres.",
    "paragraphs": [
      "Les dernières nouvelles arrivées du théâtre de la guerre ont causé une vive émotion à Londres. Le général White a télégraphié concernant l'attaque des Boërs contre Ladysmith.",
      "L'attaque a continué jusqu'à sept heures et demie du soir. Les Boërs ont été repoussés de leurs positions à la pointe de la baïonnette par le régiment de Devonshire. Les troupes anglaises se sont comportées très courageusement."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Incertitudes sur la situation à Ladysmith",
    "summary": "Face aux rumeurs pessimistes sur la chute de Ladysmith et l'échec du général Buller, le gouvernement britannique décrète la mobilisation générale et prépare l'envoi d'une armée expéditionnaire.",
    "paragraphs": [
      "Le général Buller annonçait hier des nouvelles concernant les positions de Ladysmith. Cependant, on fait remarquer que ce message, qui ne porte pas d'heure, paraît antérieur aux dernières dépêches officielles.",
      "De son côté, on commente au War Office de la façon la plus pessimiste le bruit persistant que, non seulement Ladysmith est tombée aux mains des Boërs, mais encore que le général Buller a subi un nouvel échec sur la Tugela.",
      "Bien que ceci ne soit encore que simples rumeurs, le gouvernement a décidé la formation d'une armée expéditionnaire forte de plusieurs brigades et la mobilisation générale, dans le but de se mettre à la disposition du généralissime Roberts."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Dernières nouvelles de Colenso et Ladysmith",
    "summary": "La division Clery a progressé vers Colenso. Les Boërs, pressés par la garnison de Ladysmith, évacuent leurs positions. Un dépôt de munitions abandonné par les Anglais a été découvert au fort Willy.",
    "paragraphs": [
      "Londres, 8 janvier. Les journaux publient la situation du camp de Frère, datée de samedi 6 janvier. La division Clery a marché sur Colenso et a canonné les positions boërs entre Illangwane Hill et le fort Willy. Les troupes ont atteint un point rapproché du camp de Colenso malgré un orage.",
      "Le correspondant du Daily Telegraph télégraphie que la canonnade est entendue à Ladysmith. Il est probable que la garnison fait une sortie, car les Boërs ont quitté en toute hâte leurs retranchements de Colenso en direction de Ladysmith.",
      "Camp des Boërs à Colenso, 4 janvier : Les Boërs ont trouvé au fort Willy un grand nombre de cartouches pour fusils Lee-Metford, qui avaient été abandonnées par les Anglais lors de l'évacuation."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Démoralisation des troupes anglaises",
    "summary": "Une correspondance du Globe révèle l'épuisement profond des troupes britanniques à Modder-River. Les brigades, à l'instar des Highlanders, sont décimées et privées d'officiers, compromettant leur capacité de combat.",
    "paragraphs": [
      "Le Globe publie une lettre de son correspondant à Modder-River, signalant qu'une forte proportion des troupes anglaises commence à perdre courage. Les soldats sont exténués par des efforts surhumains.",
      "L'auteur s'interroge sur la capacité de combat future de brigades comme celle des Highlanders, virtuellement décimées et privées de leurs officiers."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Renforts et contrebande de guerre",
    "summary": "Sept bataillons de milice partent pour l'Afrique du Sud. Par ailleurs, suite à la saisie de canons sur le vapeur Cato, le gouvernement britannique durcit les inspections dans tous ses ports.",
    "paragraphs": [
      "Trois navires ont été affrétés pour transporter sept bataillons de milice en Afrique du Sud. Les autorités ont approuvé la création d'un corps de gentlemen pour servir comme infanterie montée.",
      "Le Standard rapporte que la douane a saisi deux canons de gros calibre embarqués sur le vapeur Cato, destinés aux Boërs. Par ordre du ministre de la Guerre, tous les navires sortant des ports anglais devront désormais être soigneusement visités."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Intervention des puissances européennes",
    "summary": "Le Nouveau Temps de Saint-Pétersbourg estime que toute intervention européenne dans le conflit sud-africain serait vaine, prédisant une victoire boëre et le profit exclusif de l'Angleterre en cas de médiation.",
    "paragraphs": [
      "Le Nouveau Temps de Saint-Pétersbourg publie un article démontrant l'inopportunité de toute intervention des puissances européennes dans la guerre, arguant que le triomphe boër est probable et qu'une telle médiation ne profiterait qu'à l'Angleterre."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Social",
    "title": "La grève des mineurs dans la Loire",
    "summary": "La reprise du travail est générale dans les mines de la Loire, malgré quelques absents. À Saint-Étienne, les tensions persistent chez les tisseurs, tandis que les blanchisseuses réclament des lavoirs.",
    "paragraphs": [
      "La région minière de la Loire a repris son aspect habituel ce matin. La reprise du travail est générale et fiévreuse dans les mines de Saint-Étienne, Firminy, Roche-la-Molière et Montrambert. Quelques manquants sont constatés, mais il n'est plus question de grève, seulement des conséquences du lundi.",
      "Les tisseurs ont tenu une deuxième réunion pour déplorer la mauvaise volonté des fabricants et ont invité la municipalité à établir des chantiers nationaux.",
      "Environ trois cents blanchisseuses se sont réunies pour manifester, demandant la création de lavoirs publics."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrestation étrange à Saint-Étienne",
    "summary": "Un individu a été interpellé lors des troubles de jeudi à Saint-Étienne. La découverte sur sa personne d'une somme importante de 7 500 francs et de documents compromettants justifie l'ouverture d'une enquête.",
    "paragraphs": [
      "On a trouvé dans les poches d'un individu arrêté lors des incidents de jeudi soir une somme élevée de 7 500 francs et des lettres compromettantes, ce qui a motivé son interpellation immédiate."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Étranger",
    "title": "Les condamnés de la Martinique",
    "summary": "Suivi des mouvements des exilés politiques : M. André Buffet gagne l'Angleterre, tandis que Mme Buffet est de retour à Paris. Le sort de M. Déroulède demeure incertain.",
    "paragraphs": [
      "M. André Buffet a quitté Bruxelles pour l'Angleterre. Mme Buffet est rentrée à Paris. On ignore toujours la date d'arrivée de M. Déroulède, dont la famille compte louer une villa entre Saint-Sébastien et la frontière."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Étranger",
    "title": "Mort du président de la Colombie",
    "summary": "Le décès du président de la République de Colombie, M. Sanclemente, est officiellement annoncé à l'âge de quatre-vingt-cinq ans.",
    "paragraphs": [
      "Une dépêche de Kingston annonce la mort de M. Sanclemente, président de la République de Colombie, âgé de quatre-vingt-cinq ans."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Accident au général Jamont et mission Marchand",
    "summary": "Le général Jamont survit à une chute accidentelle à Belle-Île. Par ailleurs, le ministre de la Guerre distingue MM. Baratier et Landeroin pour leurs exploits lors de la mission Marchand.",
    "paragraphs": [
      "Le général Jamont a fait une chute dans le port lors d'une inspection à Belle-Île, mais a été sauvé par le commandant Toussaint. Il a repris ses fonctions malgré la tempête.",
      "Le ministre de la Guerre a cité à l'ordre de l'armée MM. Baratier et Landeroin pour leur brillante conduite durant la mission de trois années, de l'Atlantique à la mer Rouge."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Santé Publique",
    "title": "Lutte contre l'alcoolisme",
    "summary": "Le médecin M. Jacquet alerte la Société des Hôpitaux sur les ravages de l'alcoolisme chez les ouvriers. Il préconise une vaste campagne de prévention morale et scientifique.",
    "paragraphs": [
      "Le médecin M. Jacquet a présenté un rapport alarmant sur l'alcoolisme devant la Société des Hôpitaux. L'étude, menée sur 4 714 malades, démontre que l'alcool est une cause majeure de mortalité et de dégénérescence, particulièrement parmi les ouvriers et les femmes fréquentant les cabarets.",
      "Les autorités médicales préconisent une propagande morale et scientifique pour combattre ce fléau qui touche toutes les classes de la société."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un accident au Sénat",
    "summary": "M. Merlier, l'huissier du Sénat, a été victime d'une chute grave en assistant le doyen Wallon. Le sénateur, sous le choc, a subi un malaise sans gravité.",
    "paragraphs": [
      "Un des huissiers du Sénat, M. Merlier, celui qui annonce de sa trompe les décisions de la haute chambre, a été victime d'un accident qui a failli avoir des conséquences assez inattendues.",
      "M. Merlier se tenait sur une chaise lorsque survint M. Wallon, doyen de la faculté, qui, en cette qualité, devait présider la séance de rentrée.",
      "M. Wallon ayant besoin d'un volume placé sur un rayon élevé, pria l'huissier de le lui donner. M. Merlier se hissa donc sur une chaise, atteignit l'ouvrage demandé, mais comme il allait redescendre, encombré de livres, il perdit l'équilibre, tomba sur le plancher et se brisa le bras droit.",
      "Effrayé par cette chute, le sénateur a eu une syncope qui, malgré le grand âge de l'honorable doyen, n'aura heureusement aucune suite."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le drame de la rue Vaucanson",
    "summary": "Importunée par un homme de vingt-deux ans qui l'avait contrainte à le suivre, une jeune ouvrière cartonnière l'a frappé de six coups de couteau pour se défendre. La victime est hospitalisée dans un état grave.",
    "paragraphs": [
      "Depuis plusieurs semaines, un jeune homme de vingt-deux ans, Charles Grosier, poursuivait de ses assiduités une jeune ouvrière cartonnière, Mlle Georgette Durocq.",
      "Hier, Mlle Durocq sortit pour livrer des cartons. Charles Grosier s'empara du chargement, forçant la jeune fille à le suivre jusqu'à sa chambre située au cinquième étage. Quelques minutes plus tard, la concierge vit la jeune fille tomber sur le seuil, ensanglantée et appelant au secours.",
      "Interrogée par M. Goray, commissaire de police, elle a déclaré que, ne pouvant décider Charles Grosier à cesser de l'importuner, elle avait fini par le frapper avec un couteau trouvé sur une table.",
      "La victime, qui a reçu six coups de couteau, a été transportée dans un état grave à l'hôpital Saint-Louis."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une arrestation difficile",
    "summary": "Surpris lors d'un cambriolage rue d'Aligre, un malfaiteur de vingt-deux ans a opposé une résistance si farouche aux forces de l'ordre qu'il fallut huit agents pour le maîtriser.",
    "paragraphs": [
      "Deux agents de la sûreté ont remarqué, la nuit dernière, rue d'Aligre, un individu d'une vingtaine d'années en train de cambrioler une boucherie. En tentant de l'appréhender, les agents virent l'homme se dégager violemment et prendre la fuite.",
      "Il se heurta alors à quatre gardiens de la paix arrivant en sens inverse, mais il opposa une telle résistance physique qu'il fallut au total huit agents pour le maîtriser finalement et le conduire au poste.",
      "Il a déclaré se nommer Gustave Lumes et être âgé de vingt-deux ans."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un décès suspect",
    "summary": "Après avoir ingéré des gâteaux offerts par un mystérieux inconnu, un camelot de vingt-six ans est décédé à l'hôpital Beaujon, après avoir désigné son empoisonneur présumé aux témoins.",
    "paragraphs": [
      "La mort d'un camelot, Louis Bourgeois, âgé de vingt-six ans, semble entourée de mystère. Se plaignant de violentes douleurs abdominales après avoir mangé deux gâteaux offerts par un inconnu, il est décédé peu après son admission à l'hôpital Beaujon.",
      "Un homme bien vêtu s'était présenté à la pharmacie où le malade s'était réfugié, prétendant l'avoir suivi depuis le bois de Boulogne. Avant de perdre connaissance, Bourgeois avait désigné cet homme en s'écriant : « C'est lui ! C'est lui ! ».",
      "Le parquet a ordonné une autopsie et la police cherche activement à identifier ce mystérieux personnage."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Cambrioleur pincé",
    "summary": "Trois malfaiteurs ont été surpris en plein pillage rue Saint-Maur. Si deux d'entre eux ont réussi à s'échapper, le troisième, Émile Duval, a été capturé après une lutte vigoureuse contre des bouchers.",
    "paragraphs": [
      "Deux garçons bouchers de la rue Saint-Maur ont surpris trois individus en train de piller un appartement voisin. Deux des voleurs ont réussi à prendre la fuite, mais le troisième a été maîtrisé malgré une lutte désespérée.",
      "L'homme, qui se nomme Émile Duval et est âgé de quarante ans, a refusé de dénoncer ses complices."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les exploits de Wellington",
    "summary": "Un bouledogue nommé Wellington a permis l'arrestation d'un malfaiteur avenue Daumesnil en terrassant le bandit, alors même que ses complices tentaient de fuir en faisant usage de leurs revolvers.",
    "paragraphs": [
      "Un chien bouledogue nommé Wellington a permis à la police d'arrêter le chef d'une bande de voleurs avenue Daumesnil. Alors que cinq malfaiteurs chargeaient du plomb volé sur une charrette, le chien s'est jeté sur eux, les poursuivant malgré les coups de revolver tirés en sa direction.",
      "Le chien a fini par terrasser un bandit, permettant son arrestation immédiate. L'individu, nommé Eugène Percier, a promis de dénoncer ses complices."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Deux accidents mortels",
    "summary": "Le bilan des accidents de la voie publique s'alourdit avec le décès tragique d'une septuagénaire renversée par un tramway et d'un charretier écrasé par son propre véhicule lors d'une manœuvre.",
    "paragraphs": [
      "Une septuagénaire infirme, nommée Marie Cachet, a été renversée et mortellement blessée par un tramway électrique circulant rue Claude-Bernard.",
      "Par ailleurs, le nommé Baptiste Cassés, charretier âgé de trente-sept ans, a trouvé la mort après avoir été tragiquement écrasé par son propre véhicule."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Jugement de la Ligue annamite",
    "summary": "Le tribunal a rendu son verdict concernant les membres de la Ligue annamite. M. Levrault est condamné à une amende, tandis que ses coaccusés bénéficient des mesures de la loi Bérenger.",
    "paragraphs": [
      "Le tribunal a prononcé son jugement à l'encontre des membres de la Ligue annamite. M. Levrault a été condamné à payer une amende de 25 francs, tandis que ses trois coaccusés se voient infliger une peine de 15 francs avec le bénéfice de la loi Bérenger."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Départements",
    "title": "Faits divers en province",
    "summary": "Entre la tentative d'asphyxie à Esquennoy, le drame de la chasse à Maupas et un incendie criminel à Beaugerier-Montjavoult, la chronique provinciale enregistre plusieurs sinistres et accidents graves.",
    "paragraphs": [
      "À Esquennoy, une femme a tenté de mettre fin à ses jours par asphyxie, entraînant ses deux enfants dans son geste désespéré, mais ils ont tous été sauvés in extremis par l'intervention d'un voisin.",
      "À Maupas, un jeune garçon de quinze ans, prénommé Honorat, a eu le crâne fracturé par l'éclatement d'un vieux fusil au cours d'une partie de chasse.",
      "À Beaugerier-Montjavoult, un incendie d'origine criminelle a ravagé la ferme de M. Lefevre, occasionnant des pertes matérielles considérables."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accidents et drames en banlieue",
    "summary": "Une sombre série d'accidents frappe la banlieue parisienne, causant plusieurs décès par asphyxie, chutes, noyades et accidents de la route dans diverses communes environnantes.",
    "paragraphs": [
      "À Saint-Cloud, une femme a succombé, asphyxiée par les émanations d'un poêle mobile.",
      "À Puteaux, un vieillard de soixante-huit ans a trouvé la mort, écrasé par une machine à vapeur.",
      "À Bois-Colombes, le jeune Albéric Bonnet, âgé de onze ans, a été grièvement blessé en glissant sous les roues d'une voiture.",
      "À Asnières, un maçon est décédé sur le coup après une chute survenue sur un chantier.",
      "À Clichy, Mme Élise Landes, victime d'un accident de poêle, a succombé à ses blessures à l'hôpital.",
      "À Saint-Ouen, un employé de commerce est mort des suites d'une chute d'un tramway.",
      "À Pantin, un ouvrier fumiste a trouvé la mort après une chute survenue sur un chantier.",
      "À Saint-Ouen et Pantin, un jeune bouvier s'est noyé dans les eaux du canal.",
      "Au Pré-Saint-Gervais, un charretier a été tué, écrasé sous les roues de son propre véhicule."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Marchés",
    "title": "Marché aux bestiaux de la Villette",
    "summary": "Compte rendu du marché aux bestiaux du 8 janvier : les ventes de moutons et porcs sont laborieuses malgré des prix soutenus, tandis que le commerce des veaux reste ferme.",
    "paragraphs": [
      "Marché aux bestiaux de la Villette du lundi 8 janvier. Vaches : 329. Veaux : un.",
      "Moutons : La vente est difficile, marquant une baisse de 2 centimes par demi-kilo. On cote les petits moutons du Centre de 0,96 à 1,00 franc ; les métis de Brie de 0,94 à 0,98 ; les métis beaucerons, champenois et bourguignons de 0,85 à 0,92 le demi-kilo net.",
      "Porcs : La vente demeure difficile, bien que les prix restent soutenus. On cote les bons porcs de l'Ouest de 0,49 à 0,54 et ceux du Centre de 0,47 à 0,51 le kilo vif. À la pièce, le cours est de 0,64 à 0,74 le kilo net.",
      "Veaux : La vente est bonne et les prix restent fermes. On cote les veaux de Brie, de Beauce et du Gâtinais de 0,95 à 1,07 ; les champenois de 0,85 à 0,95 le kilo net."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Sports",
    "title": "La bicyclette",
    "summary": "Loin d'être en déclin face à l'automobile, la bicyclette confirme sa vitalité. Outil de transport quotidien et universel, elle reste un marché florissant avec de multiples expositions annoncées en Grande-Bretagne.",
    "paragraphs": [
      "De ce que l'automobilisme prend depuis deux années une extension formidable, certaines personnes en ont conclu que la bicyclette était en décadence.",
      "Quelle profonde hérésie ! L'automobile marche à pas de géant, mais la bicyclette s'achemine vers l'universalité. Lisez les statistiques, comparez le produit des impôts, les chiffres en vont croissant sans cesse.",
      "L'automobile, c'est le chemin de fer de la route, le moyen de transport idéal du grand tourisme, pas à la portée de tout le monde. La bicyclette, c'est l'objet d'utilité journalier, l'instrument populaire prêt à vous transporter à chaque heure du jour ou de la nuit.",
      "Commercialement, la bicyclette prouve encore sa vitalité. On annonce des expositions à Bradford, Birmingham, Glasgow pour janvier, et à Manchester, Northampton, Édimbourg pour février."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Social",
    "title": "Le bal des cantonniers",
    "summary": "Le récent bal des cantonniers a généré un bénéfice substantiel. Avec les fonds du Touring-Club et les cotisations, l'association pourra efficacement soutenir les cantonniers malades ou blessés.",
    "paragraphs": [
      "Le bal des cantonniers aura produit un bénéfice net de plus de 4 000 francs. Si l'on ajoute à cette somme 5 000 francs votés par le conseil d'administration et 7 000 francs environ produits par les cotisations, le Touring-Club pourra disposer de fonds en faveur des cantonniers blessés ou malades.",
      "C'est là véritablement une belle action et un acte de solidarité sociale qui fait grand honneur à l'association."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Charmeuse d'Enfants - XIV (suite)",
    "summary": "L'obsession de Gaston pour Colette exacerbe la tension avec son frère Pierre. Cette rivalité fatale atteint son paroxysme lorsqu'ils divisent physiquement la maison des Grandes-Roches par un mur de séparation.",
    "paragraphs": [
      "Gaston observait ses moindres démarches. Un jour, Pierre rencontra Colette au cimetière de Clisson, où elle était allée porter des fleurs sur la tombe de Michelle.",
      "À sa vue, elle eut un vif mouvement de surprise. Il lui dit : « N'ayez pas peur de moi, mademoiselle ». Elle voulut passer, mais il implora son attention pour lui dire son amour.",
      "Elle lui répondit : « Je ne vous aime pas et ne peux être votre femme ».",
      "Plus tard, les deux frères se retrouvèrent face à face. Une haine mortelle éclata entre eux, et, pour éviter de se rencontrer, ils divisèrent la maison des Grandes-Roches en deux parties avec un mur de deux mètres."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Actualités Médicales",
    "title": "Témoignages de guérison par la Tisane américaine des Shakers",
    "summary": "La Tisane américaine des Shakers reçoit des éloges pour son efficacité contre les affections respiratoires, ayant permis le rétablissement de patients là où la médecine traditionnelle avait échoué.",
    "paragraphs": [
      "Une dame raconte : « J'ai maintenant 52 ans et je ne me suis jamais si bien portée. Il y a sept ans, je fus prise d'un mal qui faillit m'emporter, une toux inquiétante. Aucun remède ne pouvait me soulager jusqu'à ce qu'une amie me conseille la Tisane américaine des Shakers ».",
      "M. Gaugain, coiffeur à Mayenne, témoigne également : « J'eus une attaque de bronchite aiguë. Sept médecins n'avaient pas réussi à me soulager. J'en ai pris cinq flacons et suis actuellement aussi bien portant que possible »."
    ]
  }
];
