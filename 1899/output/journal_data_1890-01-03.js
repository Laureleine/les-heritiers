// Date: 1890-01-03
// Restauration Pass: 2
// Base de données complète des articles de presse du 1890-01-03 (Version Restaurée, 28 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La distribution du temps",
    "summary": "Une réflexion historique et astronomique sur la convention du calendrier, soulignant les mérites oubliés du calendrier républicain face au système grégorien toujours en vigueur.",
    "paragraphs": [
      "Un grand écrivain a dit que rien n'avait autant d'empire sur l'esprit de l'homme que l'habitude. Nul, même parmi les plus ignorants, ne doute du lever du soleil qu'il verra le lendemain. Sans savoir un mot d'astronomie, chacun est persuadé de ce phénomène, uniquement parce qu'il est accoutumé à le contempler.",
      "C'est là une erreur : la distribution du temps est une chose de convention modifiée souvent et qui pourrait l'être encore, car le calendrier républicain, par exemple, était plus parfait que celui dont nous nous servons.",
      "À l'exception des Mahométans, les différents peuples connus ont cherché à se rapporter au mouvement de la terre autour du soleil, période qui, scientifiquement, s'appelle l'année tropique. Si l'année tropique contenait un nombre exact de jours, elle serait naturellement prise pour année civile.",
      "Malheureusement pour cette combinaison, l'année tropique est de 365 jours plus une fraction. On a dû, par conséquent, l'abandonner et rechercher une année civile composée d'un nombre exact de jours.",
      "Le pape Sixte IV, puis Grégoire XIII, ont cherché à résoudre ces problèmes de calendrier en instaurant des réformes pour faire coïncider les dates avec les saisons. Le calendrier grégorien a ainsi été adopté pour corriger les erreurs juliennes.",
      "Il est regrettable que les résistances religieuses aient réussi à empêcher l'adoption définitive du calendrier républicain qui servit à marquer tant de grandes dates de la Révolution, et qui se rapprochait exactement du renouvellement des saisons."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Grand roman inédit : Folles de jeune homme",
    "summary": "Ketty Bell analyse avec cynisme la frivolité des jeunes gens de son temps face au général de Montreux, tout en poursuivant ses intrigues mystérieuses avec la vicomtesse de Granson.",
    "paragraphs": [
      "« Mon général, dit-elle, allez beaucoup trop vite en besogne ; je vous avouerai cependant que je suis de votre avis sur les jeunes gens de cette époque : ils ne connaissent plus que les chevaux, le poker, le tir aux pigeons et sont incapables de savoir aimer une femme. »",
      "Seul, un homme un peu âgé, sans être encore un vieillard, sait se dévouer, se sacrifier, comprendre les besoins d'une jolie femme, l'entourer de ces soins qui font de l'amour la chose la plus gracieuse du monde.",
      "Ketty Bell, une fine mouche, manipule le général de Montreux tout en menant ses propres affaires clandestines, notamment en rencontrant la vicomtesse de Granson pour des raisons mystérieuses sous des apparences de solliciteuse pauvre."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Social",
    "title": "Les nouvelles mesures fiscales",
    "summary": "Mise en application du nouveau budget. Les familles nombreuses bénéficient d'une exemption fiscale, tandis que les grands magasins et les associations voient leur imposition alourdie.",
    "paragraphs": [
      "C'est hier qu'est entré en vigueur le budget voté par la précédente Chambre. La loi de finances comporte certaines innovations importantes.",
      "Nous signalerons l'exemption totale de la contribution personnelle et mobilière accordée aux père et mère de sept enfants vivants. Par contre, la loi augmente les taxes sur les grands magasins et établissements de crédit selon le nombre d'employés.",
      "De plus, les associations percevant des cotisations seront imposées d'après leurs ressources totales annuelles."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Informations",
    "title": "Le monopole des allumettes",
    "summary": "Le Journal officiel vient de publier un décret législatif encadrant strictement les conditions de fabrication et de commercialisation des allumettes chimiques sur le territoire.",
    "paragraphs": [
      "Le Journal officiel publie un décret ayant pour objet de régler la fabrication et la vente des allumettes chimiques."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Informations",
    "title": "Convocations d'électeurs",
    "summary": "Avis officiel : les électeurs des cantons de Mantes, Pontoise, Vendeuvre, Moncin et Aumale sont convoqués aux urnes le 19 janvier pour l'élection d'un conseiller général.",
    "paragraphs": [
      "Sont convoqués pour le 19 janvier prochain, à l'effet d'élire un représentant au Conseil général, les électeurs des cantons de Mantes, Pontoise, Vendeuvre, Moncin et Aumale."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Suspension du maire d'Espalion",
    "summary": "Le préfet de l'Aveyron a suspendu M. Rieu, maire d'Espalion, coupable d'une délibération illégale sur des actes de police et d'avoir tenu des propos inconvenants à l'égard du sous-préfet.",
    "paragraphs": [
      "Le préfet de l'Aveyron vient de suspendre de ses fonctions M. Rieu, maire réactionnaire d'Espalion, pour avoir provoqué une délibération illégale sur des actes de police et pour avoir répondu en termes inconvenants aux observations du sous-préfet."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Politique",
    "title": "Chronique politique : Janvier et Février 1889",
    "summary": "L'année 1889, centenaire de la Révolution, s'ouvre sous le signe de l'agitation boulangiste, des élections législatives et du nouveau ministère Tirard, sur fond de crises diplomatiques et deuils princiers.",
    "paragraphs": [
      "La presse française consacre de nombreux articles à l'année 1889, année symbolique considérée comme le centenaire de la Révolution française.",
      "Ces premiers mois sont marqués par une intense activité politique, notamment les élections législatives, la montée en puissance de l'influence du général Boulanger et la formation du nouveau ministère présidé par M. Tirard.",
      "À l'étranger, les événements se succèdent avec une rapidité inquiétante : la situation financière grave en Italie, la mort tragique du prince héritier d'Autriche, l'archiduc Rodolphe, ainsi que divers remaniements au sein des gouvernements internationaux."
    ]
  },
  {
    "id": 8,
    "page": 3,
    "category": "Économie",
    "title": "Crise financière au Comptoir d'escompte",
    "summary": "Une panique boursière frappe le Comptoir d'escompte, provoquant un siège de l'établissement par les épargnants. L'État et la Banque de France interviennent pour stabiliser la situation financière.",
    "paragraphs": [
      "Une vive panique de Bourse, provoquée par le directeur du Comptoir d'escompte, entraîne une foule énorme à assiéger l'établissement pour retirer ses fonds dans l'urgence.",
      "Le ministre des Finances a immédiatement convoqué la haute Banque et les directeurs des grands établissements de crédit pour enrayer cette crise. La Banque de France a consenti à avancer 100 millions de francs au Comptoir d'escompte, en partie garantis par des notabilités financières."
    ]
  },
  {
    "id": 9,
    "page": 3,
    "category": "Faits Divers",
    "title": "Condamnations judiciaires diverses",
    "summary": "Compte-rendu des récentes décisions judiciaires majeures : condamnations aux travaux forcés, statuts juridiques de la Société de Panama et peine capitale pour le caporal Géomay.",
    "paragraphs": [
      "La cour d'assises de la Sarthe a condamné le nommé Sayé aux travaux forcés à perpétuité.",
      "La cour d'appel de Paris a statué sur le cas de la Société de Panama, la déclarant comme étant une société civile et immobilière.",
      "La cour d'assises de la Seine a condamné à mort le caporal Géomay pour l'assassinat de la veuve Roux-Couloumy."
    ]
  },
  {
    "id": 10,
    "page": 3,
    "category": "Société",
    "title": "Travaux sur la Tour Eiffel et grèves",
    "summary": "La Tour Eiffel atteint sa troisième plateforme, couronnant les efforts des ouvriers, tandis que des mouvements de grève dans le textile du Nord se dissipent rapidement.",
    "paragraphs": [
      "La Tour Eiffel atteint désormais la troisième plateforme et les ouvriers en charge du chantier ont reçu une prime pour saluer leur travail.",
      "Des mouvements de grève éclatent dans les tissages du Nord, s'étendant de Lille à Armentières, mais ces tensions sociales se résorbent rapidement en quelques jours."
    ]
  },
  {
    "id": 11,
    "page": 3,
    "category": "Faits Divers",
    "title": "Naufrage du torpilleur n°110",
    "summary": "Le torpilleur n°110, sous le commandement de M. Villiers-Morancée, a sombré tragiquement au large de Cherbourg. Le bilan s'élève à treize marins disparus, plongeant la marine et le pays dans une vive émotion.",
    "paragraphs": [
      "Le torpilleur n°110, commandé par M. Villiers-Morancée, a fait naufrage devant Cherbourg. Treize hommes de l'équipage ont péri, causant une vive émotion dans tout le pays."
    ]
  },
  {
    "id": 12,
    "page": 3,
    "category": "International",
    "title": "Ouragan aux îles Samoa",
    "summary": "Un ouragan dévastateur a frappé les îles Samoa, provoquant la perte de trois navires de guerre allemands et trois bâtiments américains. Le bilan humain est tragiquement élevé suite à ce désastre maritime.",
    "paragraphs": [
      "Un ouragan d'une violence inouïe s'est abattu sur l'archipel des îles Samoa, provoquant la destruction de trois navires de guerre allemands ainsi que de trois bâtiments américains, entraînant des pertes humaines quasi totales."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie du château de Laeken",
    "summary": "Le château royal de Laeken fut la proie des flammes le 1er janvier. Malgré les efforts, d'inestimables collections artistiques furent perdues. On déplore la mort de la gouvernante de la princesse Clémentine.",
    "paragraphs": [
      "Le château royal de Laeken, situé à proximité de Bruxelles, a été presque entièrement dévoré par un incendie dans le courant de l'après-midi du 1er janvier.",
      "La Reine, s'étant rendue sur les lieux, n'a pu que constater la perte irrémédiable des collections artistiques et des bâtiments sinistrés. Seuls la bibliothèque et quelques tableaux ont été préservés des flammes. On déplore la mort tragique de la gouvernante de la princesse Clémentine, qui a péri dans le sinistre."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Politique",
    "title": "État de santé du Czar Alexandre III",
    "summary": "Victime d'une syncope au palais de Gatschina à la suite d'une grippe, le Czar Alexandre III a provoqué une vive alerte, l'incident ayant été un moment confondu avec un attentat nihiliste.",
    "paragraphs": [
      "Après une rechute d'influenza consécutive à une promenade effectuée par un temps fort rigoureux, le Czar Alexandre III a été victime d'une syncope au palais de Gatschina, provoquée par une défaillance électrique qu'il a, dans un premier temps, interprétée comme un attentat nihiliste.",
      "Son état de santé, bien que n'étant pas jugé grave, impose désormais une extrême prudence médicale."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Santé",
    "title": "L'épidémie d'influenza à Paris",
    "summary": "L'épidémie de grippe paralyse Paris : les hôpitaux sont saturés et le service des Postes et Télégraphes, décimé par la maladie, est contraint de solliciter le renfort des autorités militaires.",
    "paragraphs": [
      "La situation dans les hôpitaux parisiens est devenue critique, tous les lits étant occupés par des malades. Le personnel hospitalier, confronté à un afflux constant de patients atteints de complications respiratoires, se multiplie pour assurer les soins d'urgence.",
      "De son côté, l'administration des Postes et Télégraphes signale des difficultés majeures de service dues aux nombreuses absences des agents terrassés par la maladie, nécessitant parfois l'intervention et le renfort de l'autorité militaire."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame conjugal à Paris",
    "summary": "Une épouse phtisique, ayant découvert l'infidélité de son mari avec sa garde-malade, a tenté d'abattre cette dernière d'un coup de revolver. Manquant sa cible, elle fut terrassée par l'émotion.",
    "paragraphs": [
      "Une femme, gravement atteinte de phtisie, a découvert l'infidélité de son mari avec la garde-malade chargée de ses soins. Dans un accès de désespoir et de jalousie, elle a tenté de tirer sur sa rivale avec un revolver.",
      "La balle a atteint le mur et l'épouse, terrassée par l'émotion, s'est aussitôt évanouie. Une enquête judiciaire est ouverte pour faire la lumière sur cet incident."
    ]
  },
  {
    "id": 17,
    "page": 4,
    "category": "Faits Divers",
    "title": "Noyade accidentelle à la rivière",
    "summary": "Des cris entendus près de la rivière furent pris pour une rixe par les riverains. Il s'agissait du sieur Paille, tombé accidentellement à l'eau, dont le corps fut retrouvé trois jours après le drame.",
    "paragraphs": [
      "Dans la nuit, des cris furent perçus venant du bord de la rivière. Cependant, les habitants des environs, croyant à une banale rixe entre ouvriers du canal, n'avaient pas jugé utile d'intervenir.",
      "Ces appels au secours étaient en réalité poussés par le sieur Paille qui, trompé par l'obscurité, avait chuté accidentellement dans le cours d'eau. Le cadavre du malheureux a été retrouvé trois jours après l'accident."
    ]
  },
  {
    "id": 18,
    "page": 4,
    "category": "Faits Divers",
    "title": "Double suicide tragique à Saint-Valery-sur-Somme",
    "summary": "À Saint-Valery-sur-Somme, deux jeunes gens dont l'union fut refusée par leurs familles se sont donné la mort. Leurs corps restent introuvables malgré la découverte d'une lettre expliquant leur dessein.",
    "paragraphs": [
      "Saint-Valery-sur-Somme, 8 janvier. — On a découvert, sur les bords du canal de la Somme, une pèlerine d'homme et un fichu de laine abandonnés.",
      "Quelques instants plus tard, une lettre fut retrouvée, dans laquelle un jeune homme et une jeune fille annonçaient leur funeste dessein de mettre fin à leurs jours.",
      "L'arrivée des parents, résidant à Clermont, mit fin aux recherches. Ils avaient été avertis par un courrier dans lequel les deux jeunes gens expliquaient leur intention de se tuer, les familles ayant refusé de consentir à leur union. Les corps de ces infortunés n'ont pu, jusqu'à présent, être retrouvés."
    ]
  },
  {
    "id": 19,
    "page": 4,
    "category": "Faits Divers",
    "title": "Suicide d'un soldat à Arras",
    "summary": "Le corps d'un jeune soldat, François Bourdon, a été découvert pendu à la porte d'une chambrée à la caserne d'Arras. Malgré l'intervention rapide d'un caporal, le malheureux n'a pu être ranimé.",
    "paragraphs": [
      "Arras, 9 janvier. — Hier matin, un caporal de planton à la cuisine de la caserne Lubales aperçut, en se rendant à son service, un soldat pendu à l'aide de sa cravate, fixée à la clef d'une porte de chambrée.",
      "Le caporal s'empressa de couper la cravate et de porter secours au malheureux, mais ses efforts furent vains, la mort ayant déjà fait son œuvre. Le défunt se nommait François Bourdon et était âgé de vingt-quatre ans."
    ]
  },
  {
    "id": 20,
    "page": 4,
    "category": "Faits Divers",
    "title": "Escroquerie chez une veuve à Lille",
    "summary": "À Lille, deux individus usurpant l'identité de clercs de notaire ont extorqué des fonds à une veuve lors d'un faux inventaire. La supercherie fut révélée par la visite du véritable officier public.",
    "paragraphs": [
      "Lille, 9 janvier. — Voici une escroquerie qu'il convient de dénoncer. Ces jours derniers, deux individus, se présentant comme les clercs de M. P., notaire à Lille, se sont introduits au domicile de Mme X., récemment veuve.",
      "Ils prétendirent que leur patron était chargé d'effectuer un inventaire en raison de la présence d'enfants mineurs au foyer. Mme X. se mit à leur entière disposition. L'opération terminée, elle régla immédiatement les honoraires réclamés.",
      "Or, le lendemain, M. P., réellement mandaté pour l'inventaire, se présenta à son tour, révélant ainsi à la veuve qu'elle avait été la victime de deux adroits voleurs."
    ]
  },
  {
    "id": 21,
    "page": 4,
    "category": "Faits Divers",
    "title": "Suicide d'un meurtrier à Rouen",
    "summary": "Incarcéré à la prison Bonne-Nouvelle de Rouen pour le meurtre de son frère à Yvetot, Justin Maréchal, âgé de 47 ans, s'est donné la mort par pendaison dans sa cellule.",
    "paragraphs": [
      "Rouen, 1er janvier. Il y a quelque temps, un meurtre était commis à Yvetot par un sieur Justin Maréchal sur la personne de son frère. Au cours d'une discussion d'intérêts concernant la vente de propriétés, Maréchal avait blessé son frère de deux coups de revolver. Le meurtrier, arrêté, n'hésita pas à avouer son crime. Il fut écroué tout d'abord à la maison d'arrêt d'Yvetot, puis transféré à Rouen, à la prison Bonne-Nouvelle.",
      "L'instruction suivait son cours, mais, plus la détention se prolongeait, plus il paraissait sombre et nerveux. Il profita d'une courte absence de son gardien pour se pendre. Quand on revint, il était mort.",
      "Maréchal s'était pendu à l'aide de son mouchoir. Il s'était accroché à un clou placé à un mètre cinquante du sol. On comprendra quelle force de volonté il lui a fallu déployer pour se donner la mort dans de pareilles circonstances. D'après le rapport du médecin de la prison, la strangulation, provoquée par une violente secousse, a déterminé immédiatement l'asphyxie. Maréchal était âgé de quarante-sept ans."
    ]
  },
  {
    "id": 22,
    "page": 4,
    "category": "Faits Divers",
    "title": "Drame passionnel à Saint-Sylvain",
    "summary": "À Saint-Sylvain, le fermier Letheilleux a grièvement blessé par balle le propriétaire Henri Sorin, après l'avoir attiré dans sa chambre pour lui reprocher d'importuner son ménage.",
    "paragraphs": [
      "Saint-Sylvain (Maine-et-Loire), 9 janvier. Avant-hier après-midi, M. Henri Sorin, âgé de cinquante-six ans, propriétaire à la Fontaine-de-l'Epervière, se présentait, comme d'habitude, pour prendre son lait chez le sieur Letheilleux, fermier au Tertre. À peine arrivé, ce dernier appela Sorin, le fit passer dans sa chambre à coucher et, une fois entré, ferma la porte à clef. Ensuite, il lui présenta deux revolvers en lui disant : « Choisissez-en un, il faut que l'un de nous deux meure ; il y a assez longtemps que vous portez le trouble dans mon ménage ; ma femme me l'a avoué, il faut en finir. »",
      "Sorin ne voulant pas prendre l'arme, Letheilleux le saisit à la gorge, le poussa sur le lit, le renversa et lui tira un coup de revolver. La balle alla se loger dans l'omoplate, provoquant une blessure grave. Letheilleux a été arrêté et écroué à la prison d'Angers."
    ]
  },
  {
    "id": 23,
    "page": 4,
    "category": "Faits Divers",
    "title": "Agression sur la route près d'Herbignac",
    "summary": "Un marchand d'huîtres, M. Quinio, a été sauvagement agressé par un individu qu'il avait pris en charrette. L'agresseur a été maîtrisé par des villageois près de Camerun.",
    "paragraphs": [
      "Nantes, 1er janvier. Il y a quelques jours, M. Quinio, marchand d'huîtres à Penerf, quittait Saint-Nazaire dans sa charrette pour rentrer chez lui. À quelques kilomètres de là, il rencontra un nommé Lohic qui lui demanda une place auprès de lui ; cette faveur lui fut accordée.",
      "La nuit étant venue, près du village de Camerun, Quinio sentit que son compagnon fouillait dans sa poche. Au moment où il lui en faisait l'observation, il reçut un coup de poing sur l'œil gauche et un coup de couteau dans le menton. La victime criant et se débattant, l'agresseur prit la fuite, mais plusieurs personnes du village l'arrêtèrent et le ligotèrent solidement. L'agresseur a été remis à la gendarmerie d'Herbignac, qui a saisi le couteau ensanglanté comme pièce de conviction. La vie de M. Quinio n'est pas en danger, mais il doit rester à Herbignac pour se remettre de ses blessures."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Faits Divers",
    "title": "Incendie à Argentan",
    "summary": "Un incendie dévastateur a ravagé l'établissement de confections et lingerie de Mme veuve Lemeste à Argentan. Le sinistre n'a fait aucune victime, mais les pertes sont estimées à 250 000 francs.",
    "paragraphs": [
      "Argentan, 1er janvier. Un incendie s'est déclaré dans l'établissement de confections et lingerie appartenant à Mme veuve Lemeste. Bâtiment, marchandises, outillage, tout a été détruit. Les pertes sont évaluées à 250 000 francs. Il n'y a pas eu de victimes."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Faits Divers",
    "title": "Rixe entre soldats à la caserne de Higny",
    "summary": "Une violente altercation à la caserne de Higny a opposé cinq soldats d'infanterie à trois membres du 3e génie. Un caporal a été grièvement blessé ; les agresseurs sont écroués.",
    "paragraphs": [
      "Toul, 1er janvier. Dans la soirée d'avant-hier, un caporal et deux hommes du 3e régiment du génie, logés à la caserne de Higny, ont été attaqués dans la cour de cette caserne par cinq soldats d'infanterie. Le caporal a été terrassé et frappé par les cinq énergumènes avec une telle violence que son état a nécessité son transport immédiat à l'hôpital. Ses jours sont en danger.",
      "Le général gouverneur de Toul a prescrit une enquête qui a amené l'arrestation des cinq militaires, qui passeront devant le Conseil de guerre du 6e corps, séant à Châlons-sur-Marne."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Faits Divers",
    "title": "Suicide à Toul",
    "summary": "À Toul, Charles A., commis de marine âgé de trente-cinq ans, a mis fin à ses jours en se jetant du quatrième étage durant un accès de fièvre chaude. Il a succombé à ses blessures peu après son transfert à l'hôpital.",
    "paragraphs": [
      "Toul, 1er janvier. Dans un accès de fièvre chaude, le nommé Charles A., commis de marine, âgé de trente-cinq ans, s'est précipité par une fenêtre d'un quatrième étage ; relevé aussitôt, il a été transporté à l'hôpital, où il a succombé peu de temps après son arrivée."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident de chemin de fer à Nancy",
    "summary": "Le marchand de journaux Charles Drappier a trouvé la mort près de Nancy après avoir été heurté par un train alors qu'il longeait la voie ferrée pour raccourcir son trajet entre Messein et Neuves-Maisons.",
    "paragraphs": [
      "Nancy, 1er janvier. Le sieur Charles Drappier, âgé de quarante-sept ans, marchand de journaux, qui, pour abréger son trajet, suivait la voie ferrée entre Messein et Neuves-Maisons, a été tamponné par un train venant de Chaudrey. Relevé grièvement blessé, il a expiré en arrivant à l'hôpital de Nancy où il avait été transporté."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Faits Divers",
    "title": "Drame accidentel par arme à feu à Nevers",
    "summary": "À Nevers, le jeune Duvivier, accordeur de pianos, est décédé instantanément après qu'un coup de feu est parti accidentellement alors qu'il manipulait un revolver.",
    "paragraphs": [
      "Nevers, 9 janvier. Le sieur Duvivier, âgé de dix-sept ans, accordeur de pianos, maniait un revolver, quand, tout à coup, l'arme a fait feu accidentellement. Le malheureux jeune homme a été atteint au ventre. La mort a été immédiate."
    ]
  }
];
