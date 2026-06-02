// Date: 1899-12-30
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-12-30 (Version Restaurée, 36 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "L'appétit de l'Europe",
    "summary": "Une étude statistique détaillée de M. Apelt révèle les tendances de la consommation alimentaire en Europe. Entre disparités nationales et progrès général, les habitudes nutritionnelles reflètent l'évolution des nations.",
    "paragraphs": [
      "J'ai sous les yeux un document d'importantes proportions, qui témoigne d'un effort inouï et d'une énergique patience : ce travail, dont la prodigieuse ampleur ne laisse pas d'offrir d'utiles enseignements et de saisissants aperçus dans sa complexité, est le tableau de la consommation européenne depuis une vingtaine d'années. L'auteur, un Allemand, M. Apelt, peut se vanter d'avoir fait là un noble ouvrage.",
      "Je parlerai d'abord de la denrée alimentaire la plus précieuse : le blé. Sait-on quel est le pays qui, durant les cinq années sur lesquelles ont porté principalement les recherches des savants, a consommé le plus de froment par tête d'habitant ? C'est l'Espagne.",
      "Si l'on prend une autre céréale, cette hiérarchie curieuse change entièrement. Pour le seigle, c'est le Danemark qui occupe la tête de la liste. Pour l'orge, l'Espagne reprend son avantage. Enfin, en ce qui concerne le maïs, c'est le Portugal qui est le champion de l'Europe.",
      "La grande activité commerciale et industrielle de l'Allemagne s'est répercutée sur sa nutrition. Mais cela n'est pas toujours une raison : il est certain, par exemple, que depuis plusieurs siècles la prospérité des Parisiens ne fait que s'accroître ; eh bien, la consommation parisienne du pain n'a pas suivi une gradation proportionnelle.",
      "Après le pain, la viande. Quelle est la nation d'Europe qui mange le plus de viande ? C'est l'Angleterre. En France, il y a aussi progrès, quoique dans des proportions moindres.",
      "On ne s'imagine pas, d'ordinaire, les quantités considérables de sel que nous absorbons dans notre alimentation. Le sucre fait également partie intégrante de notre nutrition, avec une consommation qui a considérablement augmenté dans toute l'Europe.",
      "Par l'aperçu très général que je viens de tracer, on peut voir que si, en certains points, la progression de la consommation des principales denrées en Europe a subi des fluctuations, elle n'en témoigne pas moins, dans son formidable et complexe ensemble, d'une augmentation du bien-être général."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux passions",
    "summary": "Dans une atmosphère chargée de tension, Dufresne et Paul Tavernier quittent le jardin. Le trajet vers le château d'Angeville est marqué par un silence éloquent et les pensées secrètes de Dufresne.",
    "paragraphs": [
      "Il mit la lettre dans sa poche et rejoignit Paul Tavernier dans son jardin. Ils se promenèrent tous deux pendant un instant et, tout à coup, Dufresne consulta sa montre : « Dix heures trois quarts », dit-il. « Tu retournes à la Coudraie ? » « À l'instant. » « Et tu m'emmènes ? »",
      "Il brûlait d'être auprès d'elle et de l'interroger. Lorsque son cheval passa à l'extrémité de l'avenue deux ou trois fois centenaire qui conduit au perron du château d'Angeville, il n'avait pas prononcé deux paroles. Son compagnon l'observait sournoisement et se disait : « C'est à cette fille qu'il pense »."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des ministres",
    "summary": "Réuni sous la présidence de M. Loubet, le Conseil des ministres a entériné le règlement des litiges diplomatiques en Chine, conformément aux exigences françaises.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin, à l'Élysée, sous la présidence de M. Loubet. Le ministre des Affaires étrangères a fait savoir au Conseil que les questions pendantes en Chine avaient reçu une solution conforme aux demandes présentées au nom du gouvernement français."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Justice",
    "title": "Mouvement judiciaire",
    "summary": "Le garde des Sceaux a validé un important remaniement du personnel judiciaire, incluant des postes clés à la Cour de cassation, à Paris, Douai et Chambéry, suite à plusieurs vacances de sièges.",
    "paragraphs": [
      "Le garde des Sceaux a fait approuver un mouvement judiciaire très étendu, qui a pour point de départ la vacance de deux sièges à la Cour de cassation, de deux à la cour de Paris, de la première présidence de Douai et du poste de procureur général de Chambéry."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "La Légion d'honneur et défense navale",
    "summary": "Le gouvernement annonce des promotions dans l'ordre de la Légion d'honneur et confirme le plan de défense navale, doté de 60 millions, sans alourdissement de la charge fiscale.",
    "paragraphs": [
      "M. le ministre des Finances a fait signer un décret portant promotions dans l'ordre de la Légion d'honneur. M. le président du Conseil a entretenu ses collègues de la décision qu'il compte prendre relativement au concours d'internat de l'hôpital Beaujon.",
      "Le projet de loi pour la défense navale, qui sera déposé sur le bureau de la Chambre à la rentrée du Parlement, n'impose aucune nouvelle charge au budget. La dépense pour la défense des côtes et des colonies est évaluée à 60 millions."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Double évasion de la prison de Reims",
    "summary": "Une évasion spectaculaire a eu lieu hier soir à la prison de Reims. Les détenus Auguste Binet et Pierre Noël, après avoir forcé leur cellule, sont parvenus à s'échapper par les toits malgré les recherches actives.",
    "paragraphs": [
      "Une double évasion accomplie d'une façon particulièrement audacieuse s'est produite hier, vers sept heures du soir, à la prison de Reims. Les détenus Auguste Binet et Pierre Noël, récidivistes endurcis, sont parvenus à dévisser la serrure de leur cellule, traverser le couloir et gagner une petite cour.",
      "En superposant la table et le banc et en se faisant la courte échelle, l'un des deux condamnés parvint à gagner un toit. À ce moment, un gardien fit la ronde et donna l'alarme. Malgré les recherches immédiates de la gendarmerie et des pompiers, les deux fugitifs restaient introuvables."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Social",
    "title": "Les grèves de la Loire",
    "summary": "La situation reste stationnaire dans le bassin minier de Saint-Étienne. Si les autorités tentent de maintenir le dialogue, la grève demeure générale, seule une minorité assurant l'entretien des puits à Firminy.",
    "paragraphs": [
      "Saint-Étienne, 29 décembre. Contrairement à ce qui a été dit, les communications qui ont été faites hier aux deux comités de la grève au sujet des manifestations sur la voie publique ne constituaient encore que des démarches amiables. On espère que le conflit minier sera résolu prochainement.",
      "On ne signale ce matin aucun changement dans la situation : la grève est toujours générale. À Firminy, deux cents ouvriers à peine sur les quatorze ou quinze cents qui travaillent habituellement sont descendus dans les puits pour assurer l'entretien."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "International",
    "title": "La guerre au Transvaal",
    "summary": "Sur le front du Transvaal, aucun mouvement majeur n'est rapporté officiellement, bien que le War Office semble occulter des nouvelles inquiétantes. L'artillerie boër à Colenso reste une menace mobile constante.",
    "paragraphs": [
      "Les télégrammes reçus dans la journée d'hier ne signalaient aucun mouvement important entre Anglais et Boërs. Il paraît toutefois certain que le War Office aurait reçu des nouvelles de la plus haute gravité qu'il se serait bien gardé de communiquer à la presse.",
      "À Colenso, le « Long-Tom », placé sur l'Imbulwana, a tiré sur Ladysmith pendant la matinée, mais la garnison n'a pas répondu. Le correspondant du Daily Mail à Maritzburg souligne la rapidité avec laquelle les Boërs déplacent leurs canons."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "La situation militaire à Ladysmith",
    "summary": "Le siège de Ladysmith s'intensifie sous le feu de l'artillerie boër. Outre les pertes au combat, la garnison anglaise est durement éprouvée par une épidémie de fièvre entérique qui frappe jusqu'au général White.",
    "paragraphs": [
      "Les Boërs ont bombardé le camp anglais ce matin. Les pertes britanniques s'élèvent à six tués et trois blessés.",
      "Les Boërs ont monté un nouveau gros canon sur Surprise-Hill pour remplacer celui détruit sur Lombard-Kop. Ils construisent des ouvrages défensifs, renforcent leurs positions sur une colline adjacente et surveillent les Anglais la nuit à l'aide de projecteurs électriques.",
      "À la date du 22 courant, les pertes totales anglaises depuis le commencement du siège étaient de 70 tués et 236 blessés. Un grand nombre de cas de fièvre entérique sévissent au camp.",
      "Le général White souffre légèrement de la fièvre.",
      "On signale encore sept nouveaux décès dus à la fièvre entérique et un dû à des blessures."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "L'occupation de Dordrecht",
    "summary": "Après plusieurs jours d'escarmouches, les autorités boërs ont évacué Dordrecht, permettant aux forces britanniques d'occuper la ville et de saisir une quantité importante de matériel et de bétail.",
    "paragraphs": [
      "L'occupation de Dordrecht par un détachement de police a été précédée d'une série d'escarmouches les 21, 22 et 23 décembre.",
      "L'occupation de la localité a été effectuée sans opposition, les autorités boërs ayant préalablement quitté la ville.",
      "Une certaine quantité de wagons, de bœufs et de poneys a été capturée par les forces occupantes."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "La situation au Transvaal vue par M. Churchill",
    "summary": "M. Churchill rapporte de Durban que les Boërs, malgré une mobilisation totale, espèrent obtenir une paix imposant à l'Angleterre de lourdes concessions territoriales et une indemnité financière.",
    "paragraphs": [
      "Le Morning Post publie une dépêche envoyée de Durban, le 23 décembre, par son correspondant, M. Churchill. Il rapporte que les membres de l'exécutif boër sont convaincus que l'Angleterre est sur le point de solliciter la paix.",
      "Les Boërs espèrent un compromis aux termes duquel l'Angleterre céderait le Natal, Kimberley et les districts de la colonie du Cap, reconnaîtrait l'indépendance absolue des républiques, accorderait une amnistie générale et paierait une indemnité de 20 millions de livres sterling.",
      "Les Boërs considèrent leurs effectifs comme étant éprouvés, bien que les dernières réserves aient été appelées sous les armes.",
      "Le correspondant ajoute qu'il serait insensé de ne pas reconnaître que l'Angleterre combat un adversaire redoutable. Le seul procédé efficace consisterait, selon lui, à déployer des masses énormes de troupes."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Informations diverses sur les Boërs",
    "summary": "La prospérité agricole des républiques boërs et la continuité de leurs approvisionnements en munitions via Delagoa-Bay confirment la solidité de leur résistance.",
    "paragraphs": [
      "D'après un agent d'assurances, les deux républiques boërs possèdent d'immenses quantités de provisions.",
      "Les fermiers des districts frontières se plaignent amèrement de la conduite brutale de certains officiers coloniaux.",
      "Le pays demeure prospère et les récoltes ont été excellentes. Par ailleurs, les Boërs continuent de recevoir des quantités considérables de munitions via Delagoa-Bay."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "International",
    "title": "Aux États-Unis",
    "summary": "Le conseil municipal de Boston exprime son soutien au président Kruger, tandis que les cargaisons de vivres destinées aux Boërs soulèvent des interrogations logistiques.",
    "paragraphs": [
      "Le conseil municipal de Boston a adopté des résolutions félicitant le président Kruger.",
      "Durant les mois de novembre et décembre, plusieurs vapeurs ont transporté des chargements de ravitaillement à destination de l'Afrique du Sud.",
      "Les armateurs soutiennent que ces chargements étaient destinés aux Boërs, mais qu'ils avaient été embarqués avant la déclaration de guerre officielle."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits divers",
    "title": "Inquiétudes sur le paquebot La Gironde",
    "summary": "L'administration des Messageries maritimes s'inquiète du silence prolongé du paquebot La Gironde, disparu en mer avec ses passagers vers le Transvaal.",
    "paragraphs": [
      "L'administration des Messageries maritimes est très préoccupée par le sort de son paquebot, La Gironde. Le navire était parti, il y a dix jours, de Zanzibar pour Lourenço-Marquès avec un grand nombre de passagers à destination du Transvaal.",
      "On s'interroge sur une éventuelle altercation avec des navires de guerre anglais. Les craintes sont particulièrement vives au sein de la compagnie."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "La Haute Cour : défense de M. Godefroy",
    "summary": "Devant la Haute Cour, M. Godefroy récuse toute alliance partisane en affirmant ses convictions royalistes, tandis que sa défense plaide pour l'acquittement.",
    "paragraphs": [
      "Le président a donné lecture de l'arrêt rejetant les conclusions déposées par M. Guérin.",
      "M. Godefroy se défend d'avoir entretenu des relations avec les représentants des autres partis. Il déclare être un royaliste pur.",
      "Maître Blin a présenté la défense de M. Godefroy et a sollicité son acquittement.",
      "M. de Sabran-Pontevès, également mis en cause, a vigoureusement protesté contre les accusations portées à son encontre."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits divers",
    "title": "Violente tempête à Paris et en France",
    "summary": "Une tempête dévastatrice a frappé la France, causant des dégâts matériels importants. La banlieue parisienne déplore plusieurs blessés, tandis qu'un accident tragique a coûté la vie à une femme à l'Isle-Adam.",
    "paragraphs": [
      "Une véritable tempête s'est abattue hier sur Paris, provoquant de nombreux accidents et des dégâts matériels considérables à travers la capitale.",
      "Dans la banlieue, plusieurs personnes ont été blessées par la chute de cheminées ou d'ardoises, notamment à Suresnes, Asnières et Maisons-Laffitte. À l'Isle-Adam, la violence des vents a causé la chute d'un arbre, entraînant le décès tragique d'une femme.",
      "En province, la tempête a sévèrement touché Cherbourg, Saint-Brieuc, Morlaix et Brest, où la foudre a frappé le sémaphore du Parc-au-Duc, marquant la violence extrême des éléments sur le littoral."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "International",
    "title": "Dépêches étrangères",
    "summary": "Revue des actualités internationales : incendies industriels, explosions accidentelles en Belgique, découvertes macabres, résurgence de la peste et manœuvres diplomatiques entre les cours européennes.",
    "paragraphs": [
      "Berlin : Un incendie considérable a entièrement détruit la fabrique de machines de Hoppe.",
      "Bruxelles : Une formidable explosion s'est produite aux ateliers Cockerill, situés près de Liège, occasionnant de fortes inquiétudes.",
      "Bruxelles : Les ramoneurs ont découvert, au cours de leur travail, le cadavre d'un enfant dissimulé dans une cheminée de la rue Browniez.",
      "Oporto : Les autorités sanitaires ont enregistré deux nouveaux cas de peste dans la région.",
      "Constantinople : Nous apprenons avec regret le décès du général de division Vitalis-Pacha.",
      "Vienne : Le roi de Serbie a été officiellement reçu par l'empereur François-Joseph.",
      "Liverpool : Les autorités maritimes perdent tout espoir de retrouver le vapeur Merrimac, porté disparu."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Social",
    "title": "La participation des femmes aux actes de l'état civil",
    "summary": "Deux ans après la loi autorisant les femmes à témoigner aux actes de l'état civil, cette pratique s'ancre dans les mœurs parisiennes, rencontrant un succès croissant au-delà des arrondissements privilégiés.",
    "paragraphs": [
      "Deux ans après la promulgation de la loi, les femmes peuvent désormais figurer régulièrement comme témoins aux actes de l'état civil.",
      "Le mouvement a été plus rapide dans les riches arrondissements que dans les quartiers ouvriers, où il a fallu une période d'accoutumance pour que cette pratique devienne familière.",
      "La loi est aujourd'hui devenue très populaire à Paris, car elle permet aux femmes de contribuer officiellement à la solennité des actes de la vie civile."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Actualités Étrangères",
    "title": "Diplomatie européenne et cérémonies du Nouvel An",
    "summary": "À l'approche du Nouvel An, les cours européennes se préparent. De Berlin à Rome, les monarques multiplient les cérémonies solennelles, réceptions diplomatiques et gestes de générosité envers leur personnel.",
    "paragraphs": [
      "Le prince de Münster, ambassadeur d'Allemagne en France, a quitté Paris hier matin pour La Haye, où il doit signer des accords au nom de l'Empire allemand.",
      "Une revue étrangère détaille les coutumes traditionnelles pour le jour de l'An dans les cours européennes. À Berlin, l'Empereur d'Allemagne passe l'inspection des troupes puis reçoit sa famille au palais dans une cérémonie solennelle précédant le banquet officiel.",
      "À la cour d'Autriche, l'empereur François-Joseph effectue la réception traditionnelle à travers quatorze salons, accueillant les hommages des corps constitués, des diplomates et des magistrats.",
      "À Rome, le roi Humbert et la reine Marguerite reçoivent le personnel du palais avec une distribution de cadeaux, suivie d'un dîner gai en présence du corps diplomatique.",
      "La reine-régente d'Espagne consacre la veille du Nouvel An à organiser des arbres de Noël pour le jeune Alphonse XIII, ainsi qu'à la distribution des étrennes destinées au personnel domestique."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Théâtre",
    "title": "Critique de la pièce de théâtre au Théâtre de l'Ambigu",
    "summary": "L'Ambigu présente une œuvre tragique signée Edmond Duni et M. Cormon. Malgré une mise en scène habile et des interprètes de talent, la pièce pèche par un manque de souffle émotionnel.",
    "paragraphs": [
      "La pièce, œuvre d'Edmond Duni et de M. Cormon, met en scène l'histoire tragique d'un usurier, d'une femme surnommée la Rouge et d'un ingénieur manipulateur dont les crimes croisent les destins de la famille Morel.",
      "L'intrigue, bien que très mouvementée et techniquement bien charpentée, manque parfois d'émotion et de tendresse, ce qui empêche l'œuvre d'atteindre le succès mémorable des 'Deux Orphelines'.",
      "L'interprétation est excellente, notamment grâce aux performances de MM. Noël, Castillan, Charlier, et de Mme Suzanne Munte, qui ont été chaleureusement applaudis par le public."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Conseil Municipal",
    "title": "Séance du vendredi 22 décembre au Conseil Municipal de Paris",
    "summary": "Lors de la séance du 22 décembre, le Conseil Municipal a voté le budget de la bibliothèque Lepelletier, approuvé le tracé du métropolitain entre le Palais-Royal et le Danube, et autorisé l'éclairage de la Concorde au gaz acétylène.",
    "paragraphs": [
      "La séance a été principalement consacrée à l'examen du budget de la bibliothèque Lepelletier ainsi que celui du musée Carnavalet. Le Conseil a formellement approuvé la concession à la Compagnie du métropolitain pour l'établissement de la ligne reliant la place du Palais-Royal à la place du Danube.",
      "Un vœu tendant à obtenir l'utilisation d'une terrasse du jardin des Tuileries pour l'Exposition internationale de l'acétylène a été repoussé ; toutefois, l'éclairage de la place de la Concorde par le gaz acétylène a été validé par les édiles.",
      "Au cours de la séance de l'après-midi, les conseillers ont rejeté une motion déposée contre le budget de la préfecture de police, fixant définitivement le montant de ce dernier."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative d'agression à Belleville",
    "summary": "M. Paul Lafayet et sa famille ont été agressés rue des Envierges par deux malfaiteurs. Paulin Serin, l'un des agresseurs, a été arrêté, tandis que son complice est activement recherché par les forces de l'ordre.",
    "paragraphs": [
      "Dans la nuit dernière, M. Paul Lafayet, accompagné de sa famille, a été victime d'une violente agression rue des Envierges. Deux individus, agissant avec menaces, exigeaient la remise immédiate de leurs valeurs.",
      "Mme Lafayet a été blessée au visage par un coup porté avec un os de mouton. L'un des agresseurs, le nommé Paulin Serin, âgé de dix-neuf ans, a pu être appréhendé par les autorités, tandis que son complice a réussi à prendre la fuite et reste activement recherché."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie volontaire rue de Montmorency",
    "summary": "Mlle Ernestine Miller a provoqué volontairement un incendie dans son domicile hier. Ayant avoué son acte motivé par une lassitude profonde de l'existence, elle a été conduite au dépôt.",
    "paragraphs": [
      "Un incendie s'est déclaré hier au sein du logement occupé par Mlle Ernestine Miller. Suite aux investigations policières, celle-ci a confessé avoir délibérément provoqué le sinistre par dégoût de la vie. Elle a été immédiatement écrouée au dépôt dans l'attente de la suite de la procédure."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame passionnel rue Fontaine-au-Roi",
    "summary": "Une couturière, Mlle Elisa Delpech, a fait usage d'un revolver sur son ancien amant, Alphonse Robert, lors d'une violente dispute. La victime a été grièvement atteinte au bras et à la poitrine.",
    "paragraphs": [
      "Un drame passionnel s'est déroulé rue Fontaine-au-Roi. Une couturière, Mlle Elisa Delpech, au cours d'une querelle violente, a fait feu à trois reprises avec un revolver sur son ancien amant, le nommé Alphonse Robert. La victime, atteinte au bras et à la poitrine, a été transportée en urgence pour recevoir des soins."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestations à Paris",
    "summary": "La police a procédé à l'arrestation d'Étienne Germain, condamné pour faux, ainsi que d'un employé nommé Étienneau, accusé d'avoir détourné des fonds au préjudice de son employeur.",
    "paragraphs": [
      "La police parisienne a procédé à deux interpellations notables. Étienne Germain, âgé de cinquante-neuf ans, a été appréhendé en exécution d'une condamnation prononcée par contumace pour faux et usage de faux.",
      "Par ailleurs, un employé de commerce, nommé Étienneau, a été arrêté par les agents pour des détournements de fonds commis au préjudice de son patron. Il a été déféré devant les autorités compétentes."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Violence familiale sur le quai aux Fleurs",
    "summary": "Un drame violent a éclaté au quai aux Fleurs : un marchand ambulant nommé Étienne a sauvagement agressé sa mère et son frère Adolphe, mutilant ce dernier avant d'être appréhendé par les agents de police.",
    "paragraphs": [
      "Un marchand ambulant, nommé Étienne, s'est livré à des violences extrêmes envers sa mère et son frère, Adolphe, lors d'une vive altercation au quai aux Fleurs.",
      "Au cours d'une lutte acharnée, il a arraché deux doigts à son frère. Il a finalement été maîtrisé par les agents qui sont intervenus pour mettre fin à cette brutale scène de famille."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide à Saint-Ouen",
    "summary": "En proie à un accès de folie tragique, une ménagère nommée Mme Emilia Lapixate a mis fin à ses jours en se jetant sous les roues d'un train de grande ceinture, près du passage à niveau de Stains.",
    "paragraphs": [
      "Une ménagère, Mme Emilia Lapixate, s'est donné la mort en se jetant sous un train de grande ceinture, à proximité du passage à niveau de Stains, alors qu'elle était en proie à un accès de folie."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Courses hippiques",
    "title": "La prime aux éleveurs",
    "summary": "La Société d'encouragement intègre enfin la prime aux éleveurs dans son budget, une mesure réclamée depuis 1886 par notre journal et qui devient désormais une règle uniforme pour toutes les sociétés de France.",
    "paragraphs": [
      "La prime à l'éleveur-propriétaire de la mère, au moment de la naissance du poulain, ne figure dans ce budget que pour des francs. Cette somme a été exclusivement payée par la Société sportive d'encouragement sur son hippodrome de Maisons-Laffitte.",
      "La Société d'encouragement s'était toujours, jusqu'alors, refusée à admettre cette prime. Pour notre part, nous n'avons cessé de la réclamer dès 1886, et depuis, à de nombreuses reprises, dans les colonnes du Petit Parisien.",
      "La Société d'encouragement, invitée cette année par M. le ministre de l'Agriculture à étudier de nouveau la question, s'est décidée, sur les instances du ministre, à faire entrer la prime aux éleveurs dans son budget. Cette mesure, enfin adoptée par la première de nos sociétés de courses, deviendra une règle uniforme pour toutes les sociétés de France."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Courses hippiques",
    "title": "Sociétés de province",
    "summary": "Le journal Le Jockey dresse un bilan éloquent des activités hippiques en province. Près de deux cents villes organisent désormais des courses plates, soutenant activement l'élevage français.",
    "paragraphs": [
      "Les sociétés de province apportent au budget des courses, d'après un tableau dressé par le journal Le Jockey, une somme importante comprenant les dotations de chaque société ainsi que les entrées et forfaits payés par les propriétaires.",
      "Celles de Deauville, Caen, Dieppe, Bernay et Cabourg, dont les courses se déroulent pendant le mois d'août, constituent le meeting normand, alimenté par les meilleurs chevaux des réunions parisiennes.",
      "En somme, deux cents villes en France mettent un point d'honneur à organiser des réunions de courses plates, encourageant ainsi les efforts constants de nos éleveurs et de nos propriétaires."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Courses hippiques",
    "title": "Propriétaires gagnants",
    "summary": "Une analyse des gains hippiques révèle une forte concentration : sur 149 bénéficiaires, une élite de 14 propriétaires se partage plus de la moitié de la somme globale de 8 497 825 francs.",
    "paragraphs": [
      "La somme totale de 8 497 825 francs s'est trouvée répartie d'une façon très inégale entre 149 propriétaires. 14 d'entre eux se sont adjugé 5 227 847 francs, soit plus de la moitié du chiffre global.",
      "Sur les 135 autres propriétaires, 40 ont touché 1 944 800 francs, ce qui ne laisse plus aux autres que 1 325 178 francs, soit une moyenne de 14 000 francs. Seuls 27 propriétaires atteignent cette moyenne, tandis que 63 se situent en dessous."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Économie",
    "title": "Crédit foncier de France",
    "summary": "Le Conseil d'administration du Crédit foncier de France a officiellement décidé la distribution d'un acompte de 15 francs sur le dividende de l'exercice 1899, payable à compter du 2 janvier prochain.",
    "paragraphs": [
      "Dans sa séance du 28 décembre, le Conseil d'administration a décidé la distribution, à partir du 2 janvier, d'un acompte de 15 francs sur le dividende de l'exercice 1899."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Statistiques",
    "title": "Statistique municipale de la Ville de Paris",
    "summary": "Le dernier bulletin hebdomadaire de la statistique municipale recense 1 156 décès, une hausse attribuée aux maladies respiratoires, ainsi que 521 mariages et 1 098 naissances enregistrés à Paris.",
    "paragraphs": [
      "Le service de la statistique municipale a compté pendant la semaine 1 156 décès, chiffre supérieur à celui de la semaine précédente. Cette augmentation est due notamment aux maladies de l'appareil respiratoire.",
      "La fièvre typhoïde a causé 11 décès au lieu de 9 pendant les deux précédentes semaines. Le nombre des cas nouveaux signalés reste relativement assez peu considérable, soit 47 cas.",
      "Les maladies inflammatoires des organes de la respiration ont causé 198 décès. La phtisie a causé 224 décès. On a célébré à Paris 521 mariages et enregistré la naissance de 1 098 enfants vivants."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Théâtres",
    "title": "Courrier des théâtres",
    "summary": "Les théâtres parisiens organisent des matinées pour les fêtes de fin d'année. Par ailleurs, M. Camille Chevillard a été élu à la tête de l'Association des concerts Lamoureux.",
    "paragraphs": [
      "À l'occasion des fêtes du Jour de l'an, les théâtres annoncent des matinées qui auront lieu les dimanche 31 décembre, lundi 1er et mardi 2 janvier.",
      "Le concert Lamoureux, au théâtre de la République, propose un programme riche incluant Schumann et Saint-Saëns. Sarah-Bernhardt jouera notamment Hamlet et La Dame aux Camélias.",
      "Les artistes de l'orchestre de l'Association des concerts Lamoureux, réunis hier matin en assemblée générale, ont élu M. Camille Chevillard président et chef d'orchestre en remplacement de Charles Lamoureux."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les tragédies de l'amour",
    "summary": "De retour aux Grandes-Roches, Michelle explore la demeure familiale. Entre souvenirs douloureux et découverte d'un poignard compromettant, le mystère entourant le père Girodias s'épaissit.",
    "paragraphs": [
      "Michelle, de retour aux Grandes-Roches, parcourt la maison. Elle y retrouve des souvenirs oubliés, notamment le pendu de la girouette, vestige de la guerre des chouans.",
      "La mémoire lui revenant par lambeaux, elle se souvient des fils Girodias et est poussée par une curiosité intense à explorer la maison, découvrant le cabinet de travail du père Girodias, théâtre du crime, où se trouve encore le poignard ayant servi à l'assassinat."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Sports",
    "title": "Actualités sportives",
    "summary": "L'Automobile-Club fixe la date de la Coupe Gordon Bennett, tandis que la ville de Paris projette une piste cycliste à Vincennes et que les rencontres sportives se multiplient.",
    "paragraphs": [
      "Le comité sportif de l'Automobile-Club de France a fixé au 14 juin la date de la Coupe Gordon Bennett.",
      "Le conseil municipal a approuvé le projet d'établissement d'une piste municipale de cyclisme à Vincennes.",
      "Gallot le marcheur disputera un match contre un cycliste dimanche à Versailles. Par ailleurs, un match de rugby opposera le Racing-Club de France au Football Club de Lyon à Auteuil."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Agriculture",
    "title": "Bulletin commercial des vins",
    "summary": "Le marché viticole demeure contrasté : si les vins de qualité se maintiennent dans l'Hérault et l'Yonne, le commerce reste atone dans l'Aude et le Bordelais. L'Assistance publique enregistre des prix stables aux enchères.",
    "paragraphs": [
      "La situation des vins dans l'Hérault est marquée par un recul des cours pour les sortes douteuses, tandis que les bons crus se maintiennent. Dans l'Aude ainsi que dans le Bordelais, les affaires restent désespérément calmes.",
      "Dans l'Yonne, de nombreux achats ont été effectués sur les vins de Chablis. Lors des récentes adjudications de l'Assistance publique, les prix moyens constatés ont été de 14 francs pour le vin rouge et de 12 francs pour le vin blanc."
    ]
  }
];
