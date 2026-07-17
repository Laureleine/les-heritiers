// Date: 1900-04-11
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-04-11 (Version Restaurée, 49 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie",
    "title": "La production de soie en France et la concurrence étrangère",
    "summary": "Le rapport de la Commission des valeurs en douane souligne la vitalité de l'industrie lyonnaise, malgré une dépendance accrue aux matières premières étrangères et le déclin persistant de la sériciculture française.",
    "paragraphs": [
      "Il y a bien des renseignements à tirer du rapport récemment publié sur l'industrie de la soie par la section de la Commission permanente des valeurs en douane. On peut constater d'abord que la production nationale est en hausse : les fabriques lyonnaises, dont la production était évaluée en 1897 à 405 millions de francs, ont livré en 1898 pour 415 millions de soieries.",
      "Il est bon de remarquer cependant que la France ne se fournit pas de soie exclusivement chez elle. Les étrangers, qui battent nos nationaux sur nos propres marchés, prennent d'année en année plus d'audace, notamment la fabrication milanaise qui tient le premier rang en Europe en quantité.",
      "La fabrication française, bien que supérieure en qualité, souffre de la demande pour des soies légères et moins chères, où excellent les étrangers. L'exportation française a décliné sur des marchés comme Londres, bien que compensée en partie ailleurs.",
      "La France reste indigente en matière première. Malgré les efforts historiques depuis Louis XI et Henri IV pour développer la sériciculture, des maladies comme la muscardine, la pébrine et les morts-flats ont ravagé les magnaneries au XIXe siècle.",
      "Le Japon a aidé à la reconstitution des élevages en fournissant des œufs de bombyx. Toutefois, malgré les primes gouvernementales, la production de cocons dans le Midi a chuté, passant de 10,5 millions de kilos en 1894 à 6,8 millions en 1898.",
      "L'industrie lyonnaise doit désormais chercher sa matière première à l'étranger. Des efforts pourraient être tentés en vue d'augmenter la production nationale, notamment via nos colonies comme Madagascar et le Tonkin."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mort mystérieuse - VI (suite)",
    "summary": "L'enquête sur l'assassinat du Duc d'Argile se précise sous la direction du procureur Arthur Viguier, qui interroge le docteur Barrère et le valet Gustave sur les circonstances troublantes du crime.",
    "paragraphs": [
      "Le procureur Arthur Viguier prend la direction de l'interrogatoire du docteur Barrère concernant l'assassinat du Duc d'Argile. Il questionne également Gustave, le valet de chambre, sur les circonstances de la découverte du crime.",
      "Gustave prétend avoir entendu un cri durant la nuit, avoir trouvé son maître blessé et être allé chercher le médecin. Le docteur Barrère, visiblement troublé, décrit avoir trouvé le Duc avec un poignard enfoncé dans la poitrine, en état de syncope, et relate les détails médicaux de la blessure."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Actualités",
    "title": "Le Supplément Illustré en couleurs",
    "summary": "Le Supplément Illustré en couleurs de cette semaine propose trois gravures marquantes : les victoires militaires, les grands événements d'actualité et un dossier sur les prisonniers boers.",
    "paragraphs": [
      "Notre supplément illustré en couleurs, qui est mis en vente aujourd'hui, contient trois magnifiques gravures : une victoire française (la prise d'Ent-Fahr), les événements de la semaine (le concours des agents plongeurs, l'attentat contre le prince de Galles, la morte vivante de Veneux-Nadon, les Anglais surpris sur la Modder-River) et, à la huitième page, les prisonniers boers à bord des transports anglais."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des ministres",
    "summary": "Sous la présidence de M. Loubet, le Conseil des ministres a abordé la situation diplomatique et les préparatifs de l'Exposition, notamment l'illumination des édifices et les décorations de la Légion d'honneur.",
    "paragraphs": [
      "Les ministres se sont réunis, hier matin, à l'Élysée, sous la présidence de M. Loubet. Le ministre des Affaires étrangères a fait un exposé de la situation extérieure. Le ministre du Commerce a fait connaître les dispositions prises en vue de l'inauguration de l'Exposition.",
      "Il a été décidé que toutes les administrations seraient invitées par les différents ministères à faire illuminer et pavoiser les édifices publics. M. Millerand a fait approuver par le Conseil ses propositions dans l'ordre de la Légion d'honneur à l'occasion de l'ouverture de l'Exposition."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Social",
    "title": "La grève de Carmaux",
    "summary": "La tension persiste à Carmaux où les grévistes font face à la justice. Malgré les arrestations et les condamnations prononcées, le mouvement social se maintient face aux tentatives de reprise de la compagnie.",
    "paragraphs": [
      "La situation reste tendue à Carmaux. Les grévistes maintenus en état d'arrestation ont été transférés à Albi. Des incidents ont éclaté lors de la rentrée des mineurs à la mine, avec des huées et des sifflets.",
      "M. Calvignac, ancien maire, arrêté pour tentative de barrage, a été remis en liberté. Les dix mineurs arrêtés pour entraves à la liberté du travail ont été condamnés à des peines de prison. La grève continue malgré les tentatives de la compagnie pour faire travailler les mineurs."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "Madagascar et les colonies africaines à l'Exposition",
    "summary": "Le pavillon de Madagascar et les espaces dédiés aux colonies françaises offrent aux visiteurs de l'Exposition une immersion dans les richesses artisanales et historiques des territoires d'outre-mer.",
    "paragraphs": [
      "Le pavillon de Madagascar, situé à l'entrée du Trocadéro, exposera les produits de la grande île, notamment des soies, des essences rares et des minerais. Un diorama reproduira une forêt vierge et des indigènes montreront leur industrie.",
      "Les autres colonies (Congo, Guinée, Côte d'Ivoire, Dahomey) seront également présentes. Le pavillon du Dahomey reconstituera la salle des sacrifices du palais de Béhanzin, présentant une collection d'instruments de torture."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Guerre",
    "title": "La guerre au Transvaal",
    "summary": "La situation militaire au Transvaal demeure préoccupante pour l'Angleterre. Malgré la pression constante des troupes boers, les forces britanniques sous lord Roberts s'efforcent de fortifier leurs positions.",
    "paragraphs": [
      "Dans toute l'étendue de l'État libre, les troupes fédérales déploient une activité qui inquiète l'Angleterre. Des engagements importants ont lieu autour de Wepener et de Bloemfontein.",
      "Les Boers ont remporté quelques succès et maintiennent une pression constante, tandis que les Anglais, sous lord Roberts, semblent en difficulté, contraints à construire des retranchements et à transporter l'eau par chemin de fer."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Étranger",
    "title": "Situation des Boers dans l'État libre d'Orange et au Natal",
    "summary": "Les tensions s'accentuent en Afrique australe. Tandis que les Boers renforcent leurs positions stratégiques, les autorités britanniques s'efforcent de rassurer les résidents face aux mouvements républicains.",
    "paragraphs": [
      "La proclamation du président Steijn a été répandue à profusion et des émissaires des républicains surveillent les Boers qui pourraient être tentés de rendre leurs armes.",
      "La garnison anglaise a été retirée récemment et, immédiatement après, on a pu remarquer une reprise d'activité chez les républicains les plus entreprenants.",
      "Les résidents anglais et leurs partisans se montrent inquiets. Ils ont fait part de leurs appréhensions aux autorités anglaises de Springfontein, qui les ont rassurés en affirmant que des mesures seraient prises sans délai à ce sujet.",
      "La reconstruction du pont se poursuit rapidement.",
      "Une dépêche de Ladysmith, transmise au Daily Telegraph, indique que les Boers sont fortement retranchés.",
      "Les Boers s'avancent vers le sud; ils placent leurs canons à quatre milles au-delà. D'autres ont été mis en position dans le voisinage de Wessels-Neck.",
      "Les journaux publient une dépêche signalant qu'une violente canonnade a commencé ce matin à Elandslaagte.",
      "Sir Redvers Buller tiendrait l'une des passes du Drakensberg, prenant ainsi les Boers de l'Orange à revers pour envahir le pays par Harrismith."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Étranger",
    "title": "Prisonniers Boers à Sainte-Hélène",
    "summary": "Le Niobé et le Milwaukee sont arrivés à Sainte-Hélène transportant des prisonniers boers. Malgré quelques cas de rougeole à bord, la situation sanitaire est stable et le débarquement est imminent.",
    "paragraphs": [
      "Le Niobé et le Milwaukee, ayant à bord les prisonniers boers, sont arrivés. L'état sanitaire des captifs est bon, à l'exception de quatre cas de rougeole déclarés sur le Milwaukee, lequel a été mis en quarantaine.",
      "Les prisonniers sont tranquilles. On les débarquera probablement demain. Le gouverneur exprime l'espoir qu'ils seront traités avec courtoisie et considération."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Étranger",
    "title": "En route pour Beïra",
    "summary": "Le troisième contingent néo-zélandais s'apprête à partir pour Beïra, d'où il empruntera les voies ferrées portugaises pour rejoindre la Rhodésie.",
    "paragraphs": [
      "Le troisième contingent de la Nouvelle-Zélande partira pour Beïra demain, à bord du transport Vjuna. Ce contingent sera acheminé par le chemin de fer portugais de Beïra à Massi-Kessi, dans la Rhodésie."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "Déclaration du Président Steijn",
    "summary": "Le Président Steijn informe le Raad que la délégation conduite par M. Fisher est pleinement habilitée à négocier un accord de paix, sous réserve de la ratification ultérieure par le parlement.",
    "paragraphs": [
      "Le président Steijn a déclaré au Raad que la députation de M. Fisher était investie des pouvoirs nécessaires pour conclure tout arrangement conduisant à la paix, pourvu qu'il soit sanctionné par le Raad."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Étranger",
    "title": "La Mission Boër en Europe",
    "summary": "Le navire Kaiser, avec à son bord la mission boër, a atteint Rome avec deux jours d'avance sur son horaire. Les délégués maintiennent la plus grande réserve et refusent toute déclaration à la presse.",
    "paragraphs": [
      "Le Kaiser, ayant à bord la mission boër, est arrivé à Rome avec deux jours d'avance, avec l'ordre de gagner Naples aussitôt que possible. Les membres de la mission se sont refusés à toute interview."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Chambre des Députés",
    "title": "Séance du 10 avril : Exposition et projets de loi",
    "summary": "Sous la présidence de M. Paul Deschanel, la Chambre a fixé l'inauguration de l'Exposition au 14 avril et a entériné divers projets de loi relatifs aux récompenses pour les expositions internationales.",
    "paragraphs": [
      "La séance est ouverte à deux heures vingt sous la présidence de M. Paul Deschanel. M. le président annonce l'inauguration officielle de l'Exposition le samedi 14 avril.",
      "La Chambre adopte divers projets de loi relatifs aux récompenses décernées pour les expositions internationales d'horticulture de Saint-Pétersbourg et l'exposition industrielle franco-russe, ainsi qu'une proposition de M. Napoléon Magne sur la Légion d'honneur."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Chambre des Députés",
    "title": "Question sur l'Assistance publique",
    "summary": "M. Argeliès interroge le gouvernement sur les défaillances de l'Assistance publique après le décès du nommé Hautecoeur. M. Waldeck-Rousseau rappelle les limites de la compétence de l'État en la matière.",
    "paragraphs": [
      "M. Argeliès interroge M. le ministre de l'Intérieur sur le rôle de l'Assistance publique, citant le cas douloureux du malheureux Hautecoeur, mort sans secours à Paris.",
      "M. Waldeck-Rousseau explique que le gouvernement n'a d'action directe que dans le département de la Seine. Il expose les efforts faits durant l'hiver, notamment la distribution de bons de logement, et souligne l'importance des initiatives locales dans les départements."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Chambre des Députés",
    "title": "Diderot au Panthéon",
    "summary": "M. Paschal Grousset a déposé une proposition de loi visant à transférer les restes de Diderot au Panthéon. La demande a été transmise à la commission compétente.",
    "paragraphs": [
      "M. Paschal Grousset dépose une proposition de loi pour la translation des restes de Diderot au Panthéon. Le renvoi est ordonné à la commission dite des grands hommes."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Chambre des Députés",
    "title": "Épandage des eaux d'égout en Seine-et-Oise",
    "summary": "La Chambre poursuit le débat sur l'épandage des eaux d'égout. M. Stanislas Ferrand défend les populations riveraines, tandis que M. Baudin, ministre des Travaux publics, promet une stricte surveillance des travaux.",
    "paragraphs": [
      "La Chambre a poursuivi la discussion sur l'épandage des eaux d'égout. M. Stanislas Ferrand est intervenu pour défendre l'intérêt général et le respect des populations riveraines.",
      "M. Baudin, ministre des Travaux publics, a reconnu que des erreurs regrettables ont pu être commises lors des opérations à Méry et Pierrelaye, mais il a formellement assuré que le gouvernement veillera avec la plus grande rigueur à l'exécution des travaux nécessaires à l'assainissement."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Sénat",
    "title": "Séance du 10 avril",
    "summary": "Lors de la séance du 10 avril, le Sénat a débattu de la loi de finances. Il a rejeté l'amendement Drouhet et voté des crédits pour l'Exposition universelle et le service de santé militaire.",
    "paragraphs": [
      "Le Sénat a consacré sa séance à la discussion de la loi de finances. L'amendement présenté par M. Drouhet, concernant les dispositions de l'article 27, a été repoussé par l'assemblée.",
      "Par ailleurs, le Sénat a adopté plusieurs crédits destinés à couvrir les frais de représentation lors de l'Exposition universelle, ainsi qu'à permettre une augmentation du cadre des médecins militaires."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Social",
    "title": "Commission du Budget et Retraites ouvrières",
    "summary": "La commission du budget rétablit 500 000 francs pour les familles des réservistes. Parallèlement, le rapport Guieysse propose une retraite de 360 francs pour les ouvriers de 65 ans sous conditions de travail.",
    "paragraphs": [
      "La commission du budget a pris la décision de rétablir le crédit de 500 000 francs, une somme destinée à soutenir les familles nécessiteuses des territoriaux et des réservistes.",
      "En ce qui concerne la question des retraites ouvrières, le rapport présenté par M. Guieysse propose d'assurer une pension de 360 francs aux travailleurs âgés de 65 ans révolus, sous réserve qu'ils puissent justifier de 7 500 journées de travail accomplies."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incident Bolland-Ferrette",
    "summary": "M. Bolland a décliné la constitution d'un jury d'honneur pour M. Ferrette, ce dernier ayant déjà entamé des démarches directes auprès des représentants de M. Bolland pour résoudre le différend.",
    "paragraphs": [
      "M. Bolland a officiellement décliné la mission de constituer le jury d'honneur sollicité pour M. Ferrette. Ce dernier, ayant pris ses dispositions, s'est mis en rapport avec les représentants mandatés par M. Bolland afin de régler le litige."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Marine",
    "title": "Affaire Philipp et chaloupes pour l'Exposition",
    "summary": "Le ministère de la Marine examine le dossier Philipp. Simultanément, deux chaloupes à vapeur ont quitté Rouen pour rejoindre Paris afin d'assurer la surveillance fluviale durant l'Exposition.",
    "paragraphs": [
      "Le conseil des directeurs, siégeant au ministère de la Marine, a procédé à l'examen des affaires concernant les employés et fonctionnaires impliqués dans le dossier Philipp.",
      "Dans le cadre des préparatifs de l'Exposition, deux chaloupes à vapeur, destinées au service de surveillance fluviale, ont quitté Rouen pour gagner Paris."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Étranger",
    "title": "Dépêches de l'étranger",
    "summary": "Une série d'incidents tragiques secoue l'Europe et les colonies : catastrophes minières, naufrages, insurrections et décisions impériales marquent l'actualité internationale de ce jour.",
    "paragraphs": [
      "À Saint-Nicolas, près de Liège, la commune est menacée par des travaux houillers ; l'accès à vingt maisons est désormais interdit par mesure de sécurité.",
      "Un vieillard nommé Desmet s'est donné la mort à Bayou en s'immolant par le feu, après s'être abondamment enduit de pétrole.",
      "Un massacre tragique a frappé la mission belge, le lieutenant Weynants et M. Rabe ayant été tués par les Budjas près de Yambata.",
      "À Armenton, l'effondrement d'un plancher lors d'une cérémonie de communion a causé la mort tragique de cinq personnes.",
      "À Athènes, l'explosion accidentelle d'un torpilleur a coûté la vie au commandant ainsi qu'à tout son équipage.",
      "Un aspirant de marine nommé Colt s'est suicidé à Londres, un acte probablement motivé par les mauvais traitements qu'il subissait.",
      "Une insurrection éclate au pays des Achantis ; le fort de Coumassie se trouve actuellement investi par les révoltés.",
      "L'empereur Ménélik a pris la décision d'interdire formellement l'usage du tabac en Abyssinie, sous peine d'une amende."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Tribunaux",
    "title": "Condamnations et affaires judiciaires",
    "summary": "Le tribunal correctionnel de la Seine se prononce sur divers délits, du vol de bijoux de luxe aux troubles sociaux, tout en traitant un cas inquiétant d'enlèvement.",
    "paragraphs": [
      "Le tribunal correctionnel de la Seine a condamné l'Italien Franchi à deux ans de prison ferme pour le vol d'un bracelet de diamants commis aux Champs-Élysées.",
      "M. Chomoy, impliqué dans les troubles liés à la grève des charpentiers, a été condamné à trois mois de prison avec sursis pour injures proférées envers les agents de la force publique.",
      "M. Guillemin a déposé une plainte formelle concernant l'enlèvement de son fils âgé de six ans."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Échos",
    "title": "Nouvelles diverses",
    "summary": "De l'Exposition universelle aux faits divers parisiens, voici les dernières nouvelles : projets de transport, deuils officiels et incidents insolites.",
    "paragraphs": [
      "L'ouverture de la ligne de Courcelles au Champ-de-Mars est officiellement autorisée.",
      "Les premiers essais de la plate-forme roulante destinée à l'Exposition ont été déclarés concluants par les autorités.",
      "Nous apprenons le décès du comte d'Arjuzon, ancien chambellan de Napoléon III.",
      "Une nouvelle affaire d'espionnage est signalée ; la sûreté a procédé, dans le cadre de cette enquête, à une arrestation.",
      "Un début d'incendie s'est déclaré hier au palais de l'Élysée, sans toutefois causer de dégâts importants.",
      "Un individu nommé Louis Filhatre a été roué de coups par un colosse à Saint-Denis pour le seul motif qu'il jouait du gramophone."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Faits Divers",
    "title": "La bande des Rapins",
    "summary": "La police a démantelé la \"bande des Rapins\", un groupe de cinq malfaiteurs spécialisés dans le cambriolage sous couvert de travaux de peinture.",
    "paragraphs": [
      "Cinq cambrioleurs, qui agissaient sous le déguisement de peintres en bâtiment, ont été arrêtés après avoir commis une centaine de vols à Paris et en banlieue. La police a réussi à récupérer une partie importante du butin."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Social",
    "title": "Bulletin du travail",
    "summary": "Le monde du travail s'organise : les voyageurs de commerce tiennent leur assemblée générale et les teinturiers-dégraisseurs voient leur situation tarifaire s'améliorer.",
    "paragraphs": [
      "L'assemblée générale des voyageurs de commerce s'est tenue hier afin de débattre des intérêts de la profession.",
      "La situation s'est nettement améliorée pour les teinturiers-dégraisseurs à la suite de l'adoption d'un nouveau tarif conventionnel."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Social",
    "title": "La grève des mouleurs à Chartres",
    "summary": "À Chartres, la grève des ouvriers de la fonderie Teisset, veuve Brault et Chapron, persiste. M. Manger, juge de paix, a convoqué les parties pour une réunion de conciliation fixée à jeudi après-midi.",
    "paragraphs": [
      "La grève des ouvriers mouleurs de la fonderie Teisset, veuve Brault et Chapron, à Chartres, se prolonge, et la situation ne s'est pas sensiblement modifiée.",
      "M. Manger, juge de paix, a fait apposer des affiches invitant les directeurs de la fonderie et les ouvriers à venir lui exposer l'objet du différend et lui faire connaître s'ils acceptent de recourir à l'arbitrage.",
      "M. Chapron et les délégués des grévistes se sont rendus hier matin auprès du juge de paix ; d'un commun accord, une réunion de conciliation a été fixée à jeudi après-midi."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de travail à Nanterre",
    "summary": "À Nanterre, l'ouvrier Jules Heroux, quarante-neuf ans, a été grièvement blessé dans une manufacture. Son bras a été arraché par une machine à carder, et son état est jugé désespéré à l'hôpital Laennec.",
    "paragraphs": [
      "Un terrible accident a eu lieu, hier après-midi, dans une manufacture de couvertures de laine, rue des Rosiers, à Nanterre.",
      "Un ouvrier, Jules Heroux, âgé de quarante-neuf ans, a eu le bras droit pris dans une machine à carder. Le membre, déchiqueté, a été complètement arraché de l'épaule.",
      "Heroux, dont l'état est désespéré, a été transporté d'urgence à l'hôpital Laennec."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident à Asnières",
    "summary": "Le maçon Jean-Baptiste Masclou, âgé de trente-deux ans, a fait une chute grave dans une fosse à béton lors de travaux sur le chantier de l'usine d'électricité d'Asnières. Il a été hospitalisé à Beaujon.",
    "paragraphs": [
      "Un maçon, Jean-Baptiste Masclou, âgé de trente-deux ans, qui était occupé, quai d'Asnières, sur un chantier de l'usine d'électricité, a fait hier une chute dans une fosse à béton.",
      "Grièvement blessé aux reins et souffrant de graves lésions internes, il a été transporté à l'hôpital Beaujon pour y recevoir les soins nécessaires."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident à Puteaux",
    "summary": "Une fillette de deux ans et demi, Marie Flamand, a été renversée et écrasée par une voiture de charbonnier à Puteaux. La malheureuse enfant a été relevée dans un état jugé désespéré.",
    "paragraphs": [
      "Une fillette de deux ans et demi, Marie Flamand, a été renversée hier soir, à quatre heures, par une voiture de charbonnier au moment où elle traversait la rue.",
      "La pauvre petite a eu le ventre et la poitrine écrasés sous les roues. Elle a été relevée dans un état désespéré."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression au vitriol à Clichy",
    "summary": "Une couturière de vingt-quatre ans, Mme Mathilde Voyau, a été sauvagement agressée au vitriol par sa concierge, Mme Léontine Joret, à Clichy. La victime, grièvement blessée, a été prise en charge.",
    "paragraphs": [
      "Une couturière, Mme Mathilde Voyau, âgée de vingt-quatre ans, se rendait, hier boulevard Victor-Hugo, chez une amie, lorsqu'elle en a été empêchée par la concierge, Mme Léontine Joret.",
      "L'ouvrière voulut passer outre, mais la concierge lui jeta un bol de vitriol à la face. Atteinte au front, à l'œil droit, aux bras et aux mains, la jeune femme fut transportée à son domicile dans un état grave.",
      "La coupable a été mise à la disposition de M. Roseaux, commissaire de police."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Scène de violence à Saint-Ouen",
    "summary": "À Saint-Ouen, une ménagère de vingt-six ans, mécontente du service dans une épicerie, a saccagé la boutique avant de se sectionner gravement les artères des deux poignets en brisant la devanture.",
    "paragraphs": [
      "Une ménagère, Mme Marguerite Naturand, âgée de vingt-six ans, jugeant qu'elle avait été mal servie par une épicière du voisinage, se livra à une scène de violence inouïe et brisa tout dans la boutique.",
      "Non contente de ce saccage, elle s'élança avec fureur contre les glaces de la devanture pour les fracasser également ; mais, dans son emportement, elle se trancha net les artères des deux poignets.",
      "La malheureuse a été transportée d'urgence à l'hôpital Bichat pour y recevoir les soins que son état réclamait."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enquête sur une agression à Saint-Denis",
    "summary": "Un prêtre de la basilique de Saint-Denis a été victime d'un guet-apens. Attiré par un faux mourant, l'abbé a été violemment agressé par trois individus qui ont pris la fuite face à ses appels au secours.",
    "paragraphs": [
      "M. Lefort, commissaire de police, vient d'ouvrir une enquête sur une affaire fort étrange qui a jeté l'émoi dans la ville.",
      "La nuit dernière, un individu s'est présenté au domicile de l'abbé B., attaché à la basilique, le suppliant de venir administrer les derniers sacrements à un moribond. Parvenu dans la chambre où il s'attendait à trouver un malade, trois individus ont surgi, se sont dressés devant lui et l'ont roué de coups avec une brutalité sauvage.",
      "L'abbé, ne perdant nullement son sang-froid, a appelé au secours à pleins poumons, faisant ainsi fuir les inconnus qui sont désormais activement recherchés par les autorités."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents à Vincennes",
    "summary": "Une série d'accidents survenus à Saint-Mandé et Vincennes a causé de graves blessures à trois individus : un cycliste atteint d'une fracture du crâne, un piéton renversé et un charretier ayant la main broyée.",
    "paragraphs": [
      "À Saint-Mandé, M. Henri Guérimic, âgé de vingt-sept ans, a fait une chute à bicyclette en bordure des fortifications et a eu le crâne fracturé.",
      "À l'angle des rues de Fontenay et de Montreuil, à Vincennes, M. Lucien Melbert a été renversé par une voiture et projeté au fond de la tranchée d'un égout, se faisant de graves blessures à la tête.",
      "Un charretier, Georges Laurier, a été conduit au même hôpital après qu'une roue de son tombereau lui a broyé la main gauche."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident à Neuilly-Plaisance",
    "summary": "À la suite d'une violente rixe survenue à Neuilly-Plaisance, l'ouvrier maçon Jean Beaumont a eu la jambe droite brisée. Son agresseur a été appréhendé et transféré à la maison d'arrêt de Pontoise.",
    "paragraphs": [
      "Au cours d'une rixe, un ouvrier maçon, Jean Beaumont, âgé de quarante-deux ans, a eu la jambe droite cassée.",
      "Le coupable, Jean Nevraumont, âgé de trente-neuf ans, terrassier, a été conduit à la maison d'arrêt de Pontoise."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie à Ivry",
    "summary": "Un violent incendie a ravagé hier après-midi, rue Barbès à Ivry, l'atelier de fabrication de jouets de M. Eudeline. La baraque en planches a été intégralement détruite par les flammes.",
    "paragraphs": [
      "Un incendie s'est déclaré hier après-midi, vers cinq heures, dans une baraque en planches servant d'atelier à M. Eudeline, fabricant de jouets, au numéro 67 de la rue Barbès. Le feu, dont la violence n'a pu être maîtrisée à temps, a entièrement détruit les installations et le matériel qui s'y trouvaient."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation à Villeneuve-Saint-Georges",
    "summary": "M. Daudé, commissaire de police, a procédé à l'arrestation du nommé Pinet, employé de la Compagnie P.-L.-M., accusé de vols répétés de colis. L'individu a été mis à la disposition du parquet de Corbeil.",
    "paragraphs": [
      "Dans la matinée d'hier, M. Daudé, commissaire de police, a procédé à l'arrestation du nommé Pinet, homme d'équipe à la Compagnie P.-L.-M., pour le vol de divers colis. L'individu a été mis à la disposition du procureur de la République à Corbeil."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation à Garches",
    "summary": "Eugénie Horst, une domestique de vingt-trois ans employée chez un charcutier, a été arrêtée pour avoir détourné plus de 1 200 francs à son patron. Elle a été écrouée à la maison d'arrêt de Versailles.",
    "paragraphs": [
      "Une domestique, Eugénie Horst, âgée de vingt-trois ans et employée chez M. Garmer, charcutier, a été arrêtée hier pour avoir soustrait plus de 1 200 francs à son patron au cours des derniers mois. Elle a été écrouée à la maison d'arrêt de Versailles."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide à Cœuilly",
    "summary": "Victime de la misère, M. Victor Dauleville, couvreur de cinquante-trois ans, a été retrouvé pendu par son propriétaire venu réclamer le paiement de deux termes de loyer impayés.",
    "paragraphs": [
      "M. Théodore Motte, marchand de vins, s'est présenté hier matin chez son locataire, M. Victor Dauleville, couvreur âgé de cinquante-trois ans, afin de réclamer le paiement de deux termes de loyer. N'obtenant aucune réponse, il a découvert son locataire pendu dans la chambre à coucher. Ce triste événement est attribué à la misère."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident à Meaux",
    "summary": "Un jardinier de La Ferté-sous-Jouarre, nommé Bureaux, a fait une chute grave alors qu'il travaillait sur une échelle. Il souffre d'une double fracture des jambes.",
    "paragraphs": [
      "Un jardinier de La Ferté-sous-Jouarre, nommé Bureaux, qui travaillait sur une échelle, a fait une chute si malheureuse qu'il s'est fracturé les deux jambes. Le blessé a été transporté, évanoui, à son domicile."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident ferroviaire à Montereau",
    "summary": "Eugène Girault, employé aux chemins de fer de la gare de Montereau, a perdu la vie hier matin, heurté violemment par un train en manœuvre.",
    "paragraphs": [
      "Un employé du chemin de fer à la gare de Montereau, nommé Eugène Girault, âgé de trente-six ans, a été tamponné hier matin par un train. Le malheureux n'a pas tardé à succomber à ses blessures."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide à Fontainebleau",
    "summary": "L'enquête confirme l'identité du corps retrouvé en forêt de Fontainebleau : il s'agit de Louis Jude, ouvrier papetier de Corbeil. Les chagrins de famille sont désignés comme la cause fatale de son geste désespéré.",
    "paragraphs": [
      "Le jeune homme trouvé pendu hier en forêt de Fontainebleau a été formellement identifié : il s'agit de Louis Jude, âgé de vingt-trois ans, ouvrier papetier demeurant à Corbeil, marié et sans enfants. Son acte tragique est attribué à des chagrins de famille."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Chronique Littéraire",
    "title": "Le succès de Xavier de Montépin",
    "summary": "Xavier de Montépin, maître du roman populaire, suscite toujours un vif intérêt. La maison Fayard frères propose une réédition accessible de ses œuvres, inaugurée par « Blanche Vava-Baron » au prix de dix centimes.",
    "paragraphs": [
      "Xavier de Montépin demeure l'incarnation du grand roman d'aventures. Ses œuvres, où la bonté, la pitié et la haine du mal constituent les ressorts dramatiques favoris, suscitent toujours un intérêt passionné chez le public.",
      "La maison Fayard frères annonce une nouvelle édition populaire de ses ouvrages. Le premier volume, intitulé « Blanche Vava-Baron », est dès à présent en vente au prix de dix centimes."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Service de surveillance dans les théâtres",
    "summary": "L'ordonnance préfectorale imposant des pompiers civils dans les théâtres provoque le mécontentement des directeurs, qui réclament des militaires. À l'Opéra-Comique, Mlle Garden remplace Mlle Rioton dans « Louise ».",
    "paragraphs": [
      "Le préfet de police a publié une ordonnance relative à la surveillance permanente des théâtres par des pompiers civils. Cette mesure est vivement critiquée par les directeurs de salles, qui auraient préféré le maintien de pompiers militaires pour assurer la sécurité.",
      "Par ailleurs, à l'Opéra-Comique, Mlle Rioton, empêchée pour raison de santé, a été remplacée avec succès par Mlle Garden dans le rôle de « Louise »."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Divertissements",
    "title": "Les spectacles à Paris",
    "summary": "Le tout-Paris se presse dans les grands établissements. Le ballet « Cléopâtre » fait courir les foules aux Folies-Bergère et au Casino de Paris, tandis que le Nouveau-Cirque propose des attractions nautiques.",
    "paragraphs": [
      "Les Folies-Bergère et le Casino de Paris attirent une foule nombreuse d'étrangers et de Parisiens avec des programmes de variétés, notamment grâce au succès du ballet « Cléopâtre ».",
      "Au Nouveau-Cirque, une matinée exceptionnelle est prévue aujourd'hui, agrémentée d'attractions nautiques inédites."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Feuilleton",
    "title": "Mariage secret - Troisième partie",
    "summary": "Dans l'atelier, Ludovic et Delorme observent avec amertume la détresse grandissante des deux femmes logées au-dessus d'eux, dont la misère semble avoir atteint une limite insupportable.",
    "paragraphs": [
      "L'atelier, là-haut, était plongé dans une atmosphère lourde où Ludovic, étendu sur un divan, fumait son éternelle cigarette.",
      "Delorme, avec des allures de fauve, arpentait la pièce de long en large, manifestant une humeur des plus sombres.",
      "« Dites donc », fit Ludovic, qui semblait prendre un plaisir sournois à l'agacer, « ça ne marche pas aussi vite que vous le voudriez. »",
      "« Et cependant, il faut bien qu'elles y arrivent. Elles ne peuvent plus durer. Elles sont épuisées. La mère Guichardon se demande de quoi elles vivent. Quand la petite passe avec son filet aux provisions... »",
      "« Oui, je sais, il y a un petit pain dedans, jamais autre chose. »",
      "« Pour deux, c'est un peu léger. Je sais bien que pour ce que la mère doit manger... »",
      "« Elle ne se lève plus, à ce que m'a dit la concierge. »",
      "« Depuis le temps. Voilà bientôt quinze jours que la petite ne nous la laisse plus voir. »"
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Santé",
    "title": "Histoire d'un commis de magasin",
    "summary": "Témoignage édifiant de M. Claudius Perchal, commis en parfumerie, qui relate sa guérison spectaculaire d'une grave affection intestinale grâce à l'usage de la poudre de Charbon de Belloc.",
    "paragraphs": [
      "M. Perchal, l'un des premiers commis de l'une des plus hautes maisons de commerce de Paris, était atteint, depuis quelques années, d'un mal sérieux. « J'avais, dit-il, de fortes coliques et une diarrhée épouvantable accompagnée de beaucoup de gaz. Je rendais, avec les matières fécales, des glaires, du sang et des matières blanchâtres. Je ne digérais presque plus rien. »",
      "« J'étais d'une grande faiblesse et je maigrissais de plus en plus. J'avais essayé bien des remèdes, des purgations, des saignées, des bains, de la diète. Rien n'avait pu me guérir. Abandonné de tous et désespéré, je n'attendais plus que la mort. »",
      "« Sur le conseil d'un ami, je pris de la poudre de Charbon de Belloc. Trois ou quatre jours plus tard, je me sentais un peu mieux et pus digérer une côtelette de mouton, ce que je n'avais pas pu faire depuis bien des mois. Huit jours après, ma diarrhée cessa enfin. C'était la guérison. Du moment que je pus manger et que la diarrhée, dont j'avais tant souffert, ne m'épuisait plus, je repris peu à peu mes forces et, au bout d'un mois, j'étais complètement remis sur pied. » Signé Claudius Perchal, commis en parfumerie. Paris, le 29 novembre."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Feuilleton",
    "title": "Deux passions - Quatrième partie",
    "summary": "Récit dramatique de l'incendie de la Niboutière, une demeure isolée et maudite qui fut réduite en cendres, sous les yeux des habitants de la contrée, sans qu'aucun secours ne puisse être apporté.",
    "paragraphs": [
      "Il comprenait à demi les sinistres intentions de son maître, mais, d'abord, la Niboutière n'avait pas de proches voisins et, ensuite, donner l'éveil, c'était perdre cet homme qui allait se faire justice.",
      "Il attendit donc. Il était au point culminant de la falaise lorsque, tout à coup, une lueur rougeâtre éclata dans l'obscurité de la nuit. Presque aussitôt, une détonation retentit dans la chambre de Georges Dufresne, dont les fenêtres étaient ouvertes.",
      "Il avait pensé à tout. Des soupiraux grillés des caves aux fenêtres des étages supérieurs, un courant d'air activait la flamme de l'incendie. Le bossu n'essaya pas de pénétrer dans la maison. C'était impossible.",
      "En un instant, le logis, aux aspects nocturnes de vieux donjon en ruines, la maison à crimes, flamba comme une torche géante de bois sec.",
      "De toutes parts, on pouvait l'apercevoir et jouir de ce lugubre spectacle : les mariniers de la Seine, les habitants de Villequier, les fermiers des villages voisins, réveillés par cette lueur effrayante et le tocsin des clochers, se dirent : « C'est la Niboutière qui brûle. »",
      "Personne n'essaya de lui porter secours parce que c'était impossible. L'eau manquait pour éteindre ce foyer immense."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Actualités",
    "title": "La fin tragique de l'incendiaire",
    "summary": "Rapport sur la fin tragique de l'incendiaire de la Niboutière, dont les restes calcinés furent découverts après le sinistre, mettant un terme à ses méfaits et aux spéculations romanesques de la presse.",
    "paragraphs": [
      "Le docteur Bernay avait trouvé dans la poche du blessé l'écrit du misérable assassin et Crépinet, tout acquis au marquis d'Angeville et à ses amis, n'avait pas hésité à révéler les odieux détails de la scène dont il avait été le témoin.",
      "On savait donc ce qui s'était passé et on devait le savoir mieux encore, le lendemain, de la bouche du même Crépinet, dépositaire du testament du malheureux égaré, deux fois criminel, dont la mort ne fut un objet de doute pour personne lorsqu'on eut retrouvé les restes de son cadavre à demi calciné dans les ruines de sa maison, à côté de l'arme qui lui avait fracassé la tête.",
      "Les journaux racontèrent cette fin tragique obscurément d'abord, et ensuite avec un luxe inouï de détails dont quelques-uns sortaient de l'imagination de reporters romanesques."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Informations financières",
    "title": "Bulletin commercial du mardi 10 avril",
    "summary": "État du marché des denrées et matières premières à la date du 10 avril, détaillant les cours des farines, des sucres, ainsi que les fluctuations des métaux et des cotons au Havre.",
    "paragraphs": [
      "Farines, fleur, les 100 kilos : Disponible 38.75, mai 38.75.",
      "Sucres n° 3, les 100 kilos : Disponible 38.75, mai 38.75.",
      "Le Havre, 10 avril : Cours du coton et des huiles. Marchés aux veaux en activité.",
      "Métaux : Cours du cuivre chilien, du plomb et du zinc."
    ]
  }
];
