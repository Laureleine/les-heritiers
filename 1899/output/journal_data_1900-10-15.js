// Date: 1900-10-15
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-10-15 (Version Restaurée, 30 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La France et l'Étranger",
    "summary": "L'Exposition universelle, en plus de ses festivités, a agi comme un miroir de l'énergie nationale, soulignant la nécessité pour les Français de s'ouvrir davantage sur le monde et de mieux connaître leurs concurrents.",
    "paragraphs": [
      "L'Exposition, qui donne en ce moment ses dernières fêtes et reçoit ses derniers visiteurs, nous aura rendu plus d'un service, et c'est justice que de lui en faire honneur.",
      "Elle a forcé les Français, pour un temps sans doute, à oublier ou à taire les accusations outrées qu'ils aiment à se jeter à la face. Elle a fait ressortir la vanité et la stérilité de la plupart des querelles qui remplissent nos journaux et encombrent notre vie politique, en leur opposant la manifestation la plus magnifique qu'on pût rêver de l'énergie nationale.",
      "Ce serait aussi, avouons-le, un grand changement. Car s'il est une qualité qui nous manque — et depuis bien longtemps — c'est assurément le goût d'avoir, sur ce qui n'est pas près de nous, des idées justes et des renseignements précis.",
      "Cette vérité est devenue banale et les exemples ne manquent pas à l'appui. En veut-on d'ordre politique ? Qu'on se souvienne, pour ne pas remonter plus haut, du règne de Napoléon III et de sa diplomatie.",
      "Au point de vue économique, même erreur et mêmes conséquences. Combien de marchés se sont fermés pour nous, en totalité ou en partie, faute de renseignements exacts sur les besoins de nos clients et les progrès de nos concurrents !",
      "Cette situation peut-elle changer ? Il faut l'espérer, et l'Exposition de 1900 est au premier rang des raisons qui nous permettent d'y compter.",
      "La cause de ces revers, chacun de nous la connaît. Chacun sait que les Français ne voyagent guère, ne parlent pas beaucoup les langues étrangères et que ce n'est pas eux qui, d'ordinaire, remplissent les paquebots, les chemins de fer et les hôtels.",
      "Pour garder notre rang, nous avons besoin plus que jamais de connaître l'étranger. L'Exposition est pour nous un admirable moyen d'y parvenir. Nous devons donc tout faire pour que le bénéfice que nous en tirons ne disparaisse pas avec elle.",
      "La première mesure, c'est de diriger de ce côté les élèves de nos écoles et de nos lycées.",
      "Il y aurait aussi grand intérêt à généraliser dans les établissements d'instruction publique l'emploi de ces graphiques que nous avons vus si nombreux sur les murs des palais de l'Exposition.",
      "Qu'on vulgarise, qu'on grossisse les principaux d'entre eux, qu'on en fasse des tirages à bon marché et qu'on les distribue à nos instituteurs. Placés souvent sous les yeux des enfants, ils finiront par s'y fixer.",
      "Ce sera là, pour notre démocratie, une inestimable conquête. Elle formera ainsi une génération qui aura sur les choses de l'étranger, au lieu de préjugés incohérents, une opinion raisonnée. Elle cessera d'ignorer la menace de ses concurrents et les progrès de ses rivaux."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Fruit Défendu",
    "summary": "Gaspard tente de dissiper un quiproquo avec un interlocuteur mystérieux, tandis qu'une confusion persiste concernant l'identité réelle de son compagnon de voyage, Julien, dont l'apparence ne concorde pas avec ses attentes.",
    "paragraphs": [
      "Quand Gaspard fut assis : « Monsieur, dit-il, j'ai commencé par ne rien comprendre à toute cette histoire ; ensuite, j'ai cru, je l'avoue, que j'avais affaire à un fou ; je vous en fais toutes mes excuses. À présent, je me rends mieux compte, il s'agit tout simplement d'une erreur, d'une erreur navrante. »",
      "« Et pendant six mois, pour vous cacher plus tard et afin de mieux cacher votre personnalité, vous n'avez pas pris ce nom. Jamais. »",
      "Julien est le mécanicien qui m'accompagnait tout à l'heure dans l'automobile. Un homme entra, brun, l'œil vif, l'air déluré et souriant. Gaspard le regarda avec surprise. Ce n'était pas le personnage, plus large, plus puissant, à la forte barbe rousse, qu'il avait aperçu dans l'auto.",
      "Guillaume se leva : « J'ai à cœur de vous convaincre, dit-il, car, je ne sais pourquoi, je suis attiré vers vous par une sympathie irrésistible. J'aime les gens calmes et braves. Vous êtes l'un et l'autre. »"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Actualités",
    "title": "Le Roi de Grèce à Paris",
    "summary": "Le roi Georges Ier de Grèce est arrivé hier matin à la gare du Nord. Accueilli par ses aides et des autorités, il a rapidement entamé une visite de l'Exposition et des sections industrielles françaises.",
    "paragraphs": [
      "Le roi Georges Ier de Grèce, venant d'Allemagne, est arrivé hier matin à Paris par la gare du Nord.",
      "Il était accompagné de son intendant M. de Thou, de son aide de camp M. de Reinech, de son grand écuyer M. de Cernowitz et de M. Millelhauser, commissaire spécial de la gare du Nord, qui avait été envoyé au-devant de lui.",
      "Après s'être entretenu quelques instants avec les diverses personnalités qui étaient venues l'attendre, le souverain est monté en voiture et s'est fait conduire à son hôtel.",
      "Dans l'après-midi, le roi Georges a voulu faire une rapide promenade dans l'enceinte générale ; il s'est rendu rue des Nations et aux Invalides, dont les sections industrielles françaises l'ont fort intéressé."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Social",
    "title": "Les écoles militaires",
    "summary": "Le débat sur la gratuité des écoles militaires ressurgit, posant la question de l'accessibilité républicaine pour les futurs officiers, qui assument dès leur entrée le poids de l'engagement militaire.",
    "paragraphs": [
      "Un mouvement paraît se dessiner en faveur de la gratuité des écoles militaires, et il semble, en effet, que ce serait là une réforme démocratique. Si une chose surprend, c'est que cette idée ne soit discutée que trente ans après l'établissement du gouvernement républicain.",
      "Les polytechniciens et les saint-cyriens sont des soldats, puisqu'ils ont signé en entrant un engagement ; de telle sorte qu'un élève renvoyé est immédiatement incorporé dans un régiment.",
      "La France doit faire cette dépense. Elle espère, en formant ses futurs officiers, semer pour l'avenir. Assez riche jadis pour payer sa gloire, elle peut bien ne pas imposer un sacrifice d'argent à ceux qui auront la garde de ses drapeaux."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Victime du devoir",
    "summary": "Un brigadier de gendarmerie a été grièvement blessé par balle lors d'une intervention contre des contrebandiers près de Belcaire. Le malfaiteur est parvenu à s'enfuir dans les bois après son forfait.",
    "paragraphs": [
      "Carcassonne, 14 octobre. Le brigadier de gendarmerie Modat et le gendarme Rataboul, tous deux de la brigade d'Espezel, arrondissement de Limoux, faisaient une tournée dans la soirée quand, à mi-chemin entre Roquefeuille et Belcaire, ils surprirent des contrebandiers.",
      "Persuadé qu'il n'avait affaire qu'à de vulgaires maraudeurs, le brigadier les somma de s'arrêter. Le groupe prit aussitôt la fuite. Seul, l'un des fraudeurs fit mine d'attendre les gendarmes... le rusé contrebandier, armé d'un revolver, fit feu sur eux à deux reprises, puis disparut dans un taillis.",
      "Alors, au moment même où il posait la main sur le loquet, deux coups de feu successifs éclatèrent. Le malheureux brigadier s'affaissa ; un des projectiles l'avait atteint dans les reins.",
      "M. le docteur Hugues, de Belcaire, fut mandé en hâte, mais il n'a pu extraire la balle. L'état du blessé est grave."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Mouvement dans les Finances",
    "summary": "Le ministère des Finances annonce une série de nominations et de mutations au sein des trésoreries-payeurs et des finances, tout en instituant une distinction honorifique nouvelle pour les percepteurs zélés.",
    "paragraphs": [
      "M. de Marcure, préfet de l'Aube, est nommé trésorier-payeur général de la Haute-Saône, en remplacement de M. de Grétry.",
      "M. Espitalier, trésorier-payeur des Côtes-du-Nord, est nommé trésorier-payeur du Tarn, en remplacement de M. Mercadier.",
      "M. Burgaud, receveur particulier des finances de 1re classe à Dieppe, est nommé trésorier-payeur des Côtes-du-Nord.",
      "M. Térouanne, trésorier-payeur général de la Sarthe, est nommé chevalier de la Légion d'honneur.",
      "En conférant l'honorariat à M. Mesnage, le ministre des Finances applique, pour la première fois, une décision qu'il vient de prendre et d'après laquelle les percepteurs qui auront fait preuve d'un zèle constant pourront être nommés percepteurs honoraires."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Politique étrangère",
    "title": "En Corse",
    "summary": "En mission à Porto-Vecchio, les ministres de la Guerre et de la Marine ont conclu, après des essais de sondages, qu'Ajaccio demeure le point stratégique indispensable pour la défense et le ravitaillement de l'île.",
    "paragraphs": [
      "On mande de Porto-Vecchio : les ministres de la Guerre et de la Marine sont arrivés hier à Porto-Vecchio. Ils ont visité la ville ; puis, montés à bord d'un torpilleur, ils ont assisté à des sondages dans le port. La conclusion de ces expériences est qu'Ajaccio reste le seul centre de ravitaillement et de défense de l'île."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Politique",
    "title": "M. Baudin dans la Drôme",
    "summary": "M. Baudin, ministre des Travaux publics, a reçu un accueil chaleureux à Valence. Il a exhorté les maires ruraux à collaborer activement avec le gouvernement au progrès social de la République.",
    "paragraphs": [
      "M. Baudin, ministre des Travaux publics, est arrivé à Valence, samedi soir. Malgré la pluie, une foule nombreuse l'attendait aux abords de la gare où le ministre a été reçu par le préfet de la Drôme et le maire de Valence.",
      "Au cours des présentations, en recevant les maires, le ministre les a remerciés d'être venus en si grand nombre. Il a déclaré que la démocratie rurale devait s'efforcer d'aider le gouvernement à diriger la République dans la voie des progrès sociaux."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Morte dans les flammes",
    "summary": "Un terrible incendie nocturne a ravagé un immeuble de la rue Henri Fourmet à Toulouse. La jeune veuve Bongrain, âgée de seize ans, a péri dans le sinistre malgré les efforts de sauvetage.",
    "paragraphs": [
      "Toulouse, 14 octobre. Le feu s'est déclaré dans le courant de cette nuit au troisième étage d'un immeuble de la rue Henri Fourmet, causant la mort de la veuve Bongrain, âgée de seize ans.",
      "L'alarme aussitôt donnée, les pompiers et les voisins accoururent en hâte. Bravant les flammes et la fumée, de courageux sauveteurs entrèrent dans le logis de la victime ; ils la trouvèrent étendue sur le carrelage de sa cuisine, le visage tuméfié et la tête atrocement brûlée.",
      "Tous les soins qu'on lui prodigua demeurèrent inutiles ; la mort avait fait son œuvre."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Étranger",
    "title": "La Chine",
    "summary": "L'expédition vers Pao-Ting-Fou a débuté sous commandement allié, tandis que Li-Hung-Chang entame des discussions diplomatiques à Pékin avec les ministres étrangers.",
    "paragraphs": [
      "Une dépêche de Tien-Tsin, du 12 octobre, annonce que l'expédition de Pao-Ting-Fou est partie ce matin. Elle comprend deux colonnes ; la première, composée d'Allemands, de Français et d'Italiens, sous le commandement du général Bailloud, se rend directement à Pao-Ting-Fou.",
      "Li-Hung-Chang est arrivé à Pékin aujourd'hui et a rendu visite aux ministres étrangers.",
      "Le général Waldersee aurait l'intention de transférer son quartier général à Pékin dans quelques jours."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Étranger",
    "title": "La guerre au Transvaal",
    "summary": "Le conflit dans le Sud s'enlise. Lord Roberts hésite à quitter le front, tandis que le général De Wet durcit les mesures contre les insurgés boers et que les colonnes britanniques poursuivent leur progression.",
    "paragraphs": [
      "Les semaines s'écoulent dans le Sud sans qu'on puisse saisir un symptôme de pacification ni de désarmement parmi les Boers. Lord Roberts, flatté de revenir à Londres après l'ouverture de la guerre, n'ose même plus quitter le théâtre des opérations.",
      "Le général De Wet a lancé une proclamation annonçant que tous les burghers qui porteraient les armes seraient faits prisonniers de guerre.",
      "La colonne Bruce Hamilton, dont on n'avait pas de nouvelles depuis le 3 octobre, est arrivée le 6 à Winburg."
    ]
  },
  {
    "id": 12,
    "page": 1,
    "category": "Faits Divers",
    "title": "Violents incendies",
    "summary": "Deux sinistres majeurs ont frappé Courrières. La distillerie Cagnon a été totalement détruite par un incendie inexpliqué, tandis qu'un atelier de menuiserie a été ravagé par les flammes jeudi dernier.",
    "paragraphs": [
      "Un terrible incendie, dont les causes n'ont pu être encore déterminées, vient de détruire, à Courrières, la distillerie Cagnon.",
      "Un incendie s'est déclaré, jeudi dernier, dans le bâtiment de charpente et de menuiserie de M. de Foire. En un clin d'œil, tout le bâtiment a été en proie aux flammes."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Le bilan des entrées à l'Exposition",
    "summary": "Le service de contrôle général enregistre 158 458 visiteurs pour la seule journée de samedi, incluant les entrées payantes, gratuites et les jetons d'ouvriers, ainsi que l'affluence à l'annexe de Vincennes.",
    "paragraphs": [
      "Le service de contrôle général accuse pour la journée de samedi 158 458 visiteurs, dont 4 300 pour l'annexe de Vincennes.",
      "Ces entrées se répartissent ainsi : entrées payantes, entrées gratuites, jetons d'ouvriers et, pour l'annexe de Vincennes, tickets, jetons et cartes, soit au total 158 458 unités."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "L'Exposition et le mauvais temps",
    "summary": "Une foule nombreuse s'était pressée vers l'Exposition universelle, mais la pluie froide d'automne a forcé les visiteurs à chercher un refuge dans les galeries dès le milieu de la journée.",
    "paragraphs": [
      "L'approche de la clôture de l'Exposition universelle avait amené, hier, un nombre considérable de curieux désireux de profiter de la journée. Mais ils avaient tous compté sans leur hôte.",
      "Vers onze heures, le ciel se voila rapidement et à midi la pluie, une triste pluie d'automne, fine et froide, forçait les plus intrépides à chercher un refuge dans les galeries. Malgré les espérances de tous, le temps n'a pas daigné se rasséréner."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "Les visites du Président de la République",
    "summary": "M. Émile Loubet reprend ses visites à l'Exposition. Il prévoit d'inspecter cette semaine les palais de la rive gauche, les sections militaires et maritimes, ainsi que l'annexe de Vincennes en fin de semaine.",
    "paragraphs": [
      "Les visites officielles de M. Émile Loubet à l'Exposition, interrompues durant deux mois, vont recommencer cette semaine.",
      "Le Président de la République a décidé de visiter, mercredi ou jeudi, la rive gauche de la Seine, le palais des Armées de terre et de mer, le palais de la Navigation et plusieurs sections industrielles. À la fin de la semaine, M. Émile Loubet se rendra à l'annexe de Vincennes."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Crime à Anvers",
    "summary": "À Anvers, le corps de Blondina Coppée, vingt et un ans, a été découvert dans un terrain vague. Son compagnon a été appréhendé par les autorités après la découverte de la victime, blessée mortellement au cou.",
    "paragraphs": [
      "Des ouvriers ont découvert, ce matin, le corps d'une femme étendu sur un tas de pierres dans un terrain vague situé entre les rues Vandewere et Aerts, à Anvers.",
      "La victime, nommée Blondina Coppée, âgée de vingt et un ans, avait la bouche remplie de sang provenant d'une blessure au cou. Le débardeur avec qui elle vivait a été arrêté, bien qu'il ait déclaré ignorer les circonstances du drame."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Social",
    "title": "Indemnités parlementaires en Europe",
    "summary": "Panorama européen des indemnités parlementaires : tandis que la France alloue 25 francs par jour à ses députés, la Grande-Bretagne et l'Espagne ne versent aucune compensation à leurs représentants.",
    "paragraphs": [
      "À propos des élections générales en Angleterre, il n'est pas inutile de noter que, seuls de tous les pays d'Europe, la Grande-Bretagne et l'Espagne n'accordent aucune espèce d'indemnité parlementaire aux représentants de la nation.",
      "Les députés du Storthing norvégien sont les mieux traités, recevant des indemnités par séance et de déplacement. En France, les représentants reçoivent une indemnité fixe de 25 francs par jour. D'autres pays, comme le Danemark, la Suisse, la Belgique ou l'Allemagne, ont des systèmes variés, parfois assortis d'amendes en cas d'absence."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Tué à coups de pied",
    "summary": "Une dispute entre deux employés de la maison Décu a tragiquement pris fin : roué de coups de pied lors d'une rixe, Thomas a succombé à ses blessures à l'Hôtel-Dieu. L'autopsie a révélé des lésions internes fatales.",
    "paragraphs": [
      "Deux employés de la maison Décu se sont disputés le 25 septembre dernier. Après un échange d'injures, ils en sont venus aux mains. Le plus robuste, nommé Grand, a terrassé son adversaire, Thomas.",
      "Grand a alors frappé Thomas à coups de pied dans la poitrine avec acharnement. Quatre jours après, le jeune homme était admis à l'Hôtel-Dieu où il a succombé à une péritonite. L'autopsie a révélé deux côtes enfoncées et un abcès au cœur."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Chroniques",
    "title": "Une curiosité végétale",
    "summary": "Un pied de pomme de terre exceptionnel, cultivé par M. Jean Contrasty dans le Cantal, atteint des dimensions records avec 17,5 kilogrammes de tubercules récoltés pour un seul plant.",
    "paragraphs": [
      "À la classe 62, on peut voir exposé un pied de pomme de terre phénoménal. Il atteint 3 mètres de hauteur et 2 mètres de circonférence.",
      "Son rendement a été de 17 kilogrammes 1/2 de tubercules, un record qui provient des terres de M. Jean Contrasty, cultivateur à Saint-Hilaire-et-Bessouilles, dans le Cantal."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un meurtrier de douze ans",
    "summary": "Une rixe entre enfants, survenue sous un hangar de la rue de Crimée, a viré au drame lorsqu'un garçon de douze ans a poignardé son camarade de onze ans à la suite d'une dispute pour un jeu d'argent.",
    "paragraphs": [
      "Dans la matinée d'hier, vers dix heures, plusieurs enfants jouaient à un jeu d'argent, dénommé la passe anglaise, et pour éviter d'être surpris par les gardiens de la paix, ils s'étaient réfugiés sous un hangar situé dans un chantier de construction de la rue de Crimée.",
      "L'un des gamins, nommé Félix Giquel, âgé de douze ans et demi, eut une discussion avec le jeune René Barthe, âgé de onze ans, à propos d'un coup douteux. La querelle dégénéra en rixe.",
      "Félix Giquel fut précipité à terre, se blessa légèrement à la tête, mais se releva aussitôt, tenant un couteau à la main. Il frappa finalement René Barthe d'un coup de couteau dans le côté gauche.",
      "La victime fut transportée dans une pharmacie pour y recevoir des soins. Le coupable, qui s'était débarrassé de son arme, a été mis à la disposition de M. Héron, commissaire de police du quartier."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide en fiacre",
    "summary": "Jean Lachâtre, un jeune employé de commerce, a mis fin à ses jours en se tirant une balle dans le cœur à l'intérieur d'un fiacre, place de la Bastille. Le drame serait causé par des chagrins d'amour.",
    "paragraphs": [
      "Hier soir, vers dix heures et demie, un jeune homme d'une vingtaine d'années prenait place dans un fiacre, place de la Bastille. Chemin faisant, le cocher entendit une détonation.",
      "Ayant ouvert la portière, il aperçut son client étendu sur la banquette, tenant encore un revolver dans sa main, avec lequel il venait de se tirer une balle dans la région du cœur.",
      "Le malheureux, conduit d'urgence à l'hôpital Tenon, a été identifié comme étant Jean Lachâtre, employé de commerce âgé de vingt-deux ans. Il était arrivé à Paris depuis peu, et le suicide aurait pour mobile des chagrins d'amour."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un pauvre amoureux",
    "summary": "Après avoir été ruiné par sa fiancée qui l'a abandonné, Charles Lembert, un jeune comptable, a tenté de se suicider par deux fois. Son état est jugé grave à l'hôpital de la Pitié.",
    "paragraphs": [
      "Un jeune comptable de vingt-deux ans, M. Charles Lembert, s'était épris d'une ouvrière appelée Jeanne L. La jeune fille abusa de sa patience, le ruinant par des exigences financières avant de l'abandonner pour un étudiant.",
      "Poussé à bout, Charles Lembert résolut de mourir. Dans la matinée d'hier, il se jeta sous les roues d'une voiture sortant de chez son patron. Il en réchappa miraculeusement, mais pour tenter ensuite de s'empoisonner avec du laudanum.",
      "Transporté à l'hôpital de la Pitié dans un état grave, on trouva sur lui une lettre adressée à sa fiancée où il lui pardonnait son abandon."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un vol en chemin de fer",
    "summary": "L'épouse d'un avocat anglais a été victime d'un vol de bijoux et de mille francs lors d'un voyage en train entre Bordeaux et Paris. Le méfait a vraisemblablement été commis pendant son sommeil.",
    "paragraphs": [
      "Une plainte a été déposée par Mme X, épouse d'un avocat anglais, qui s'est fait dérober une sacoche contenant des bijoux et une somme de mille francs lors d'un voyage en train entre Bordeaux et Paris.",
      "La victime, ne s'apercevant du vol qu'en arrivant à Paris, suppose que le méfait a été commis pendant qu'elle dormait."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les suites d'un dîner",
    "summary": "Un touriste anglais a été dépouillé lors d'une promenade en fiacre après une rencontre de café. Grâce à la vigilance et à la détermination de son cocher, le voleur a été appréhendé et les biens restitués.",
    "paragraphs": [
      "Un Anglais, M. G., invité par un inconnu rencontré dans un café de nuit, s'est fait dérober son portefeuille, sa montre et son porte-monnaie lors d'une promenade en fiacre aux Champs-Élysées.",
      "Le cocher, comprenant le manège, s'est mis à la poursuite du fuyard qui, paniqué, a fini par remettre les objets volés dans les poches de l'Anglais avant de tenter de fuir, ce qui a causé son arrestation immédiate."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue",
    "summary": "Une série de tragédies frappe la banlieue : tentative de sabotage à Neuilly, suicides à Clichy, accident grave à Nanterre et noyade accidentelle d'une fillette dans le canal de Saint-Denis.",
    "paragraphs": [
      "Neuilly-sur-Seine : Un individu nommé Émile Hicbourg, âgé de trente ans, a été arrêté pour avoir tenté de provoquer un déraillement sur la ligne de tramway Neuilly-Boulogne en déboulonnant des rails.",
      "Clichy : M. Jules Andrieu, âgé de soixante-quatre ans, s'est donné la mort en se tranchant la gorge avec un rasoir.",
      "Nanterre : Un couvreur nommé Évariste Lansson est tombé d'un toit hier matin et s'est fracturé le crâne ; son état est jugé désespéré par les médecins.",
      "Plaisance-Saint-Denis : Une fillette de onze ans, Louise Dupret, est tombée accidentellement dans les eaux du canal de Saint-Denis et s'est noyée."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Sports",
    "title": "Le match Franco-Allemand de rugby",
    "summary": "Près de 3 000 spectateurs ont assisté, à Vincennes, à une rencontre de rugby disputée. Après un début dominé par les visiteurs, les Français ont fini par s'imposer sur le score de 17 points contre 10 dans un bel esprit.",
    "paragraphs": [
      "Près de trois mille personnes se sont déplacées à Vincennes pour assister au match de rugby opposant le Football-Club à une équipe allemande.",
      "Après une domination allemande en début de match, les Français ont su renverser la situation pour finalement s'imposer sur le score de dix-sept points contre dix.",
      "La foule s'est montrée très sportive et a chaleureusement applaudi les deux équipes à l'issue de cette rencontre amicale."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Faute de Jilil (Les Miettes du Bonheur)",
    "summary": "Tourmenté par d'insupportables remords, le vieillard s'isole dans un silence farouche, repoussant brutalement les soins de sa fidèle servante qui s'inquiète de son état mental déclinant.",
    "paragraphs": [
      "Ne serait-ce pas abominable de s'obstiner à les rejeter loin de lui ? Abominable de repousser ses supplications, ses protestations de tendresse et d'amour.",
      "Oh ! les heures douloureuses, les heures épouvantables que celles où ces pensées l'assaillaient. Il parlait tout haut alors ; il marchait de long en large, les mains au dos, le front baissé, martelant le parquet sous ses pas.",
      "Et quand sa vieille bonne le voyait ainsi, elle murmurait, en reculant parfois, effrayée soudain : « Ah ! Seigneur Dieu, le pauvre, il déménage ! » Une ou deux fois, elle avait voulu, respectueusement familière avec lui, lui faire comprendre qu'il était mal de se mettre sans raison dans de tels états, mais le vieillard l'avait vertement rabrouée : « Vous, occupez-vous de votre cuisine et fichez-moi la paix. »"
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Science et Nature",
    "title": "Le pêcheur et l'anatomie",
    "summary": "Récit des tourments hypocondriaques de Jean-Jacques Rousseau, pour qui l'étude de l'anatomie humaine devenait une source d'angoisse permanente, chaque organe étudié faisant naître en lui un symptôme imaginaire.",
    "paragraphs": [
      "« Je me mis à étudier l'anatomie », dit Jean-Jacques Rousseau dans ses Confessions, « et en examinant les différents organes et leurs mouvements, en un mot, la merveilleuse construction du corps humain, mes craintes, loin de diminuer, ne firent qu'augmenter ; vingt fois par jour je m'attendais à ce que mon propre système se détraquât, et loin de redouter ma mort prochaine, je m'étonnais plutôt d'être encore au nombre des vivants. »",
      "« S'il m'arrivait de lire la description d'une maladie quelconque, immédiatement j'en ressentais tous les symptômes moi-même. Je suis certain que si je n'avais pas déjà été souffrant, je le serais devenu, tellement cette effrayante étude de l'anatomie m'impressionnait. »"
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Bigame",
    "summary": "La jeune femme, refusant de subir l'isolement après le départ de son mari, manifeste à la baronne son intention ferme de gagner Paris pour gagner sa vie en tant qu'institutrice.",
    "paragraphs": [
      "La jeune fille leva la tête, qu'elle venait de cacher contre ses doigts tremblants, baisés plusieurs fois. Elle n'osa pas répondre, mais la baronne lut dans ses yeux sa résolution irrévocable.",
      "« Alors vous allez me laisser, par ce noir hiver qui commence, toute seule ? » « Il faut que j'aille à Paris. » « Vous y mangerez le peu d'argent que vous avez, voilà tout. » « Non, je ne mangerai pas tout. Je me placerai plutôt comme institutrice dans une famille. »",
      "« L'esclavage ? Vous pouvez vivre libre à Pontsevrin ou à Terrique. Raymond reviendra, j'espère que ce sera bientôt. J'espère que, comme écrit Bruno, le mystère qui entoure cet assassinat de la rue Vavin s'élucidera, que sa femme lui pardonnera, et que Terrique les attirera quelques fois. »"
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Informations maritimes",
    "title": "Mouvements des navires",
    "summary": "Dernières nouvelles des paquebots des Messageries Maritimes au mois d'octobre 1899, concernant les liaisons transatlantiques vers le Brésil et les retours d'Australie et de Nouvelle-Calédonie.",
    "paragraphs": [
      "Le paquebot Brésil (M. M.), venant de la Plata et du Brésil, a quitté Rio-Janeiro le 15 octobre, à 4 heures du soir.",
      "Le paquebot Atlantique (M. M.), allant au Brésil, est arrivé à Montevideo le 16 octobre, à 6 heures du matin.",
      "Le paquebot Ville-de-la-Ciotat (M. M.), venant de l'Australie et de la Nouvelle-Calédonie, est arrivé à Marseille le 17 octobre.",
      "Le paquebot Australien (M. M.), allant en Australie, a quitté Port-Saïd le 17 octobre, à 10 heures du matin."
    ]
  }
];
