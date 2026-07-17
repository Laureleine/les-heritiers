// Date: 1900-06-02
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-06-02 (Version Restaurée, 35 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "L'insurrection des Boxers en Chine",
    "summary": "L'insurrection des Boxers s'étend en Chine face à l'inertie de Pékin. Les puissances étrangères, pour protéger leurs nationaux, envoient des troupes tandis que la nature de cette société secrète est analysée.",
    "paragraphs": [
      "L'Europe commence à s'émouvoir de l'extension que prend l'insurrection des Boxers en Chine. Quand cette révolte éclata, on ne voulut voir qu'un mouvement local qui serait vite réprimé. Or, non seulement il prit rapidement des proportions alarmantes, mais rien ne fut tenté par le gouvernement de Pékin pour l'entraver.",
      "Mais déjà, les puissances étrangères ont, pour protéger leurs nationaux, ordonné le débarquement des fusiliers marins de leurs escadres. Il est à croire que cette énergique mesure donnera à réfléchir au gouvernement de Pékin.",
      "Que sont les Boxers ? Les membres d'une de ces nombreuses sociétés secrètes qui couvrent le territoire chinois. Le vrai nom de la société est « Poings de la justice et de la concorde ».",
      "On a rappelé à ce propos la grande guerre des Taïpings, qui mit la Chine à deux doigts de son démembrement. Il n'est pas probable, si les puissances européennes agissent de concert, que les Boxers puissent renouveler ce mouvement.",
      "Comment l'insurrection des Boxers se terminera-t-elle ? Il est certain qu'ils n'ont rencontré jusqu'ici, de la part des autorités chinoises, qu'une mollesse qui a dû les encourager. Mais l'Europe ne paraît point disposée à laisser plus longtemps le gouvernement de Pékin favoriser une révolte qui met en péril la sécurité des étrangers."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Tours de Notre-Dame",
    "summary": "Gabrielle et Hélène, dans une grande détresse, se rendent chez maître Mole pour organiser l'évasion nocturne de Michel Gérard, emprisonné.",
    "paragraphs": [
      "Dans cette prison, je ne suis pas tranquille. Michel Gérard ne sort plus de sa cellule passé quatre heures.",
      "Gabrielle était plus froide que du marbre. Ses forces étaient brisées, elle fût tombée sur le sol si Hélène ne l'avait soutenue. « Courage ! » dit-elle à sa sœur de lait. « Debout ! Il faut aller immédiatement chez maître Mole et le prévenir de ce qui se passe. »",
      "Gabrielle, malgré sa démarche chancelante, avançait. Elles mirent toutes les deux plus d'une heure à faire le kilomètre qui les séparait de la demeure de Bernard Mole.",
      "Ce fut Gabrielle qui s'avança : « Maître ! Michel est perdu ». À cette voix, à ce nom ainsi prononcé, une émotion formidable secoua le vieil avocat.",
      "Gabrielle raconta tout ce que sa sœur et elle venaient de voir et d'entendre. Il faudrait faire évader Michel dans la nuit de demain. Avec les solides crochets dont elle est munie, l'adresse de Michel et sa volonté de fuir, il sortira de sa prison."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Les Ministres et la Question de l'Enseignement",
    "summary": "Le groupe de l'union progressiste demande l'inscription à l'ordre du jour de la proposition Rabier visant à interdire aux congrégations non autorisées d'enseigner.",
    "paragraphs": [
      "Les ministres n'ont pas tenu, hier matin, leur réunion habituelle du vendredi.",
      "Le groupe de l'union progressiste s'est réuni hier avant la séance de la Chambre. À l'unanimité des membres présents, il a exprimé le vœu que la proposition de M. Rabier, tendant à enlever aux congrégations non autorisées le droit d'enseigner, pût être mise à l'ordre du jour de la Chambre avant sa séparation."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le mystère du pont d'Épinay",
    "summary": "Le corps atrocement mutilé d'une femme a été découvert en Seine près du pont d'Épinay. L'enquête policière cherche à faire le lien avec des crimes précédents à Clichy.",
    "paragraphs": [
      "Hier soir, à six heures, à 500 mètres en aval du pont d'Épinay, on a retiré de la Seine le corps d'une femme portant des blessures indiquant d'une façon presque certaine que la malheureuse a été victime d'un crime odieux.",
      "En examinant le corps, on releva au-dessous du sein droit une profonde blessure semblant provenir d'un coup de stylet. Le pied droit était fracturé et une énorme ouverture au ventre laissait s'échapper les intestins.",
      "Le commissaire de police a recueilli d'importants indices. Il a été établi qu'une fois que des cris eurent cessé rue Martre à Clichy, il y a trois semaines, un fiacre s'éloigna dans la direction de Paris. On soupçonne un lien avec le meurtre de la veuve Lienhard, découverte il y a deux mois."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Dépêches étrangères",
    "title": "Les Boxers en Chine : Nouvelles de Pékin et Tien-Tsin",
    "summary": "À Tien-Tsin, la situation demeure critique avec des incendies criminels, tandis que le Tsung-Li-Yamen répond favorablement à l'ultimatum des puissances étrangères.",
    "paragraphs": [
      "Les gardes étrangères sont retenues à Tien-Tsin, où elles attendent les détachements français et russe. Le Tsung-Li-Yamen a adressé une réponse favorable à l'ultimatum présenté par les ministres étrangers.",
      "À Tien-Tsin, les bâtiments de la Chartered Bank ont pris feu, et une autre banque a été complètement détruite. Le sinistre est attribué à la malveillance."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Attaqué et dévalisé par trois femmes",
    "summary": "M. Jean Leblond, rentier, a été violemment agressé et dépouillé par trois femmes à Vincennes. L'inspecteur Quentin a procédé à l'arrestation des nommées Marie Caron et Virginie Cherbuy rue du Rendez-Vous.",
    "paragraphs": [
      "M. Jean Leblond, rentier à Vincennes, fut attaqué l'avant-dernière nuit par trois femmes qui le frappèrent, le ligotèrent et le dévalisèrent de ses objets de valeur.",
      "L'inspecteur Quentin a découvert le domicile des assaillantes rue du Rendez-Vous, à Paris. Marie Caron et Virginie Cherbuy ont été arrêtées au moment où elles rentraient d'une expédition fructueuse au bois de Vincennes."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un drame à Pantin",
    "summary": "Albert Straup, ouvrier menaçant sa propriétaire, a été blessé par un coup de feu tiré par M. Auguste Pommerais. Le tireur a été laissé en liberté provisoire après l'enquête.",
    "paragraphs": [
      "Albert Straup, ouvrier forgeron surnommé « la Terreur de Pantin », menaçait de mort sa propriétaire, Mme veuve Desmette, qui lui avait donné congé. Avant-hier, armé d'une hache, il menaçait de tout briser.",
      "M. Auguste Pommerais, qui protégeait l'appartement, a dû faire usage d'un revolver pour se défendre, logeant une balle dans l'épaule de Straup. Le blessé a reçu les soins nécessaires et le tireur a été laissé en liberté provisoire."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "Situation autour de Pretoria",
    "summary": "La prise de Pretoria par les Anglais demeure officieuse malgré les propos de M. Chamberlain. Les combats se poursuivent à Kaal-Fontein tandis que les Boërs tentent de maintenir leur résistance.",
    "paragraphs": [
      "Jusqu'à présent, aucune confirmation officielle de la prise de Pretoria par les troupes anglaises n'est arrivée. Cependant, M. Chamberlain a laissé entendre que la nouvelle était authentique.",
      "Les Boërs semblent se concentrer au sud de Pretoria, tandis que des combats ont eu lieu à Kaal-Fontein. Le général Rundle, de son côté, a attaqué le flanc gauche des Boërs lors d'un combat prolongé."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "Échos de l'Exposition",
    "summary": "Malgré un temps maussade, l'accès à l'Exposition est facilité pour les familles. Au Trocadéro, le pavillon australien a été inauguré avec une impressionnante collection de minerais aurifères.",
    "paragraphs": [
      "La pluie et le vent ont fait fuir les curieux hier matin. L'administration a toutefois pris une excellente mesure : les voitures d'enfant peuvent désormais pénétrer sans autorisation spéciale dans l'enceinte de l'Exposition.",
      "La commission de l'Australie a inauguré son pavillon au Trocadéro. La section consacrée à l'or est particulièrement remarquable avec des spécimens de quartz aurifères et des pépites d'une grande valeur."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Inauguration et fréquentation de l'Exposition",
    "summary": "Le pavillon belge s'apprête à recevoir ses officiels. En dépit d'une météo peu clémente, la fréquentation de l'Exposition reste soutenue avec plus de 115 000 entrées enregistrées hier.",
    "paragraphs": [
      "Le pavillon de la chambre de commerce de Bruxelles, adossé au pavillon royal de la rue des Nations, recevra le 11 juin la visite officielle des délégués. Le ministre de Belgique présidera cette cérémonie.",
      "Le mauvais temps persistant n'a nullement empêché l'Exposition de recevoir dans la journée d'hier un chiffre de visiteurs des plus respectables, en augmentation sur la statistique précédente.",
      "Les entrées relevées aux contrôles se décomposent ainsi : entrées payantes (tickets), 113 297 ; entrées gratuites (cartes de circulation), 1 930 ; auxquels s'ajoutent les jetons d'ouvriers. À l'annexe de Vincennes : 1 900 tickets, sans compter les entrées gratuites et jetons. Soit un total de 115 220 visiteurs munis de tickets vendus à un prix moyen de 55 centimes."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "Chambre des Députés : Séance du 9 juin",
    "summary": "La Chambre des députés clôt la discussion sur le chômage en adoptant l'ordre du jour Millerand, misant sur la vigilance gouvernementale pour prévenir les effets économiques de la fin de l'Exposition universelle.",
    "paragraphs": [
      "La Chambre a terminé la discussion de l'interpellation de M. Vaillant sur les mesures à prendre contre le chômage. Les déclarations des ministres ont donné à la Chambre la plus complète satisfaction. À l'unanimité des votants, elle a adopté l'ordre du jour accepté par M. Millerand, déclarant qu'elle compte sur la vigilance du gouvernement pour atténuer le chômage qui pourrait se produire après l'Exposition.",
      "La séance est ouverte à deux heures vingt sous la présidence de M. Aynard. Un certain nombre de députés protestent contre la reprise de la séance qui a eu lieu la veille, alors que le président avait déclaré la séance renvoyée au lendemain."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "L'interpellation de M. Vaillant sur le chômage",
    "summary": "M. Millerand expose son plan méthodique contre le chômage, articulé autour des grands travaux et de la protection légale des travailleurs, obtenant un large soutien par le vote de la Chambre.",
    "paragraphs": [
      "M. Millerand, ministre du Commerce, énumère les mesures prises par le gouvernement. Les ministres de la Guerre et de la Marine se sont engagés à faire exécuter de grands travaux. M. Millerand a arrêté un plan méthodique et demandé au Conseil supérieur du Travail d'ordonner une enquête sur les grands travaux utiles.",
      "L'orateur mentionne la réunion d'un congrès international pour la protection légale des travailleurs. Il proclame la nécessité de développer les syndicats et les bourses de travail, et se déclare favorable à la création de caisses de secours contre le chômage.",
      "M. Baudin, ministre des Travaux publics, donne des détails techniques : 10 000 ouvriers pourraient se trouver sans travail après l'Exposition, mais 3 200 sont déjà assurés de trouver un emploi dans l'industrie métallurgique.",
      "La Chambre repousse par 370 voix contre 187 un ordre du jour de M. Vaillant et adopte l'ordre du jour proposé par M. Millerand à l'unanimité pour le premier paragraphe et par 459 voix pour le second."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "Sénat : Discussion sur le projet d'amnistie",
    "summary": "Le Sénat débat âprement du projet d'amnistie. Entre les appels à l'apaisement et les oppositions fermes aux crimes militaires, l'intervention du général Mercier provoque une vive tension dans l'hémicycle.",
    "paragraphs": [
      "La séance du vendredi 9 juin a été consacrée à la discussion du projet d'amnistie. Le projet, combattu par MM. Clamageran, Delpech, Riou et Trarieux, a été soutenu par le rapporteur M. Eugène Guérin. La présence du général Mercier à la tribune a soulevé un vif incident.",
      "M. Clamageran estime que le projet blesse des droits respectables et ne favorise pas l'apaisement. M. Maxime Lecomte plaide pour une amnistie plénière plutôt que partielle, afin d'effacer les traces de l'Affaire Dreyfus.",
      "M. Delpech exprime son opposition ferme au projet, déclarant impossible d'amnistier des crimes abominables et critiquant vivement les chefs militaires impliqués.",
      "Le général Mercier monte à la tribune pour défendre son honneur et sa conduite passée, affirmant qu'il agirait de la même façon si les circonstances se représentaient."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique locale",
    "title": "Conseil Municipal de Paris",
    "summary": "M. Grébauval, nouveau président du Conseil municipal, exhorte les élus à la responsabilité. Le Conseil vote l'hommage au commandant Marchand et soutient le repos hebdomadaire pour les travailleurs parisiens.",
    "paragraphs": [
      "M. Grébauval, nouveau président du Conseil municipal, a prononcé un discours insistant sur la responsabilité des élus parisiens. Il a souligné l'importance de servir le bien public et de sauvegarder la République.",
      "Le Conseil a adopté une proposition de M. Galli invitant le bureau à organiser avant le 14 juillet une séance solennelle pour recevoir le commandant Marchand.",
      "Une autre délibération concernant l'achat du livre de M. Urbain Gohier pour les écoles a été annulée. Enfin, le conseil a émis le vœu que les pouvoirs publics assurent le repos hebdomadaire pour les employés de commerce et les ouvriers."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Marine",
    "title": "Réglementation des cantines maritimes et manœuvres navales",
    "summary": "M. de Lanessan, ministre de la Marine, réforme l'usage des boissons à bord. Parallèlement, les escadres de la Méditerranée et du Nord se préparent à des manœuvres conjointes avant les célébrations du 14 juillet.",
    "paragraphs": [
      "M. de Lanessan, ministre de la Marine, a publié une circulaire réglementant l'usage des boissons dans les cantines. La vente de boissons sans alcool est autorisée sans restriction. La consommation d'alcool est tolérée sous surveillance stricte et limitée en quantité.",
      "Les manœuvres navales sont en préparation : l'escadre de la Méditerranée rejoindra l'escadre du Nord pour des manœuvres avant de rentrer à Cherbourg le 14 juillet."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident grave d'un officier à Rennes",
    "summary": "Un terrible accident s'est produit au manège de la caserne du Colombier, à Rennes, où le lieutenant Crousse a trouvé la mort après que son cheval s'est cabré contre une porte.",
    "paragraphs": [
      "Un grave accident est survenu au manège de la caserne du Colombier, à Rennes. Le cheval du lieutenant Crousse, dans un mouvement brusque, s'est cabré contre une porte, blessant mortellement l'officier à la tête."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Hommage à Mme Laridon, ambulancière",
    "summary": "La France déplore la perte de Mme Laridon, ambulancière en chef au Transvaal. Ancienne héroïne de 1870, elle s'était illustrée par son dévouement exemplaire auprès des blessés, sans distinction de camp.",
    "paragraphs": [
      "Le décès de Mme Laridon, ambulancière en chef au Transvaal, a été annoncé. Ancienne infirmière de la guerre de 1870, elle s'était dévouée avec une inlassable abnégation pour soigner les blessés des deux camps dans les conflits récents, recevant ainsi l'hommage et la profonde gratitude des soldats."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Reportage",
    "title": "L'héroïsme des ambulancières",
    "summary": "Portrait émouvant d'une jeune ambulancière dévouée, dont la douceur et le courage moral apportent un réconfort inestimable aux blessés, soignant les âmes là où le médecin ne traite que les corps.",
    "paragraphs": [
      "Une femme jeune, blonde, jolie. Aux heures pensives où l'on ferme les yeux pour regarder en arrière, je la revois telle qu'elle m'apparut ce jour-là. J'avais trente ans, elle n'avait guère plus de vingt-quatre ans.",
      "Dès que le chirurgien fut parti, elle parla pendant un quart d'heure au pauvre blessé ; elle le réconforta, l'entretint du pays, lui dit que c'était une noble action que d'être venu se mettre au service de la France. Et elle disait tout cela d'une voix douce, endormeuse.",
      "« Ah ! » fit-elle, « j'ai bien le droit de pleurer maintenant. » Et je compris alors tout ce qu'il y avait d'héroïque dans le calme de cette femme au chevet des blessés.",
      "Voilà ce que les ambulancières peuvent apporter : fortifier le cœur, rafraîchir l'âme. Le médecin soigne la blessure du corps ; elles, soignent la blessure morale."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers Historiques",
    "title": "L'histoire du chirurgien Maclod",
    "summary": "L'étonnante destinée du chirurgien Maclod, praticien éminent de l'armée britannique, dont la mort révéla qu'il était une femme issue de la plus haute aristocratie anglaise.",
    "paragraphs": [
      "On a raconté, il y a quelque vingt ans, l'histoire d'un chirurgien de l'armée anglaise nommé Maclod. C'était un praticien rare, habile, particulièrement dévoué. On l'aimait, mais parfois les officiers le raillaient sur sa sobriété, et on lui reprochait gaiement de vivre comme une demoiselle.",
      "Un jour, aux Indes, ayant flétri la conduite d'un général de l'armée britannique qui faisait preuve d'une brutalité odieuse vis-à-vis des blessés, il dut donner sa démission et rentra en Angleterre. Quand il y mourut, quelques années plus tard, on constata que le chirurgien Maclod était une femme, et ses papiers attestèrent que cette femme était issue de l'une des plus anciennes familles d'Angleterre."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mme Coralie Cahen et les blessés prussiens",
    "summary": "Rappel du courage patriotique de Mme Coralie Cahen qui, en 1870, sut imposer le respect du drapeau français aux Prussiens occupant son ambulance à Vendôme.",
    "paragraphs": [
      "Ne rappelait-on pas, il y a peu de temps, à propos de la mort de Mme Coralie Cahen, le trait de vaillance que cette femme sut manifester devant les Prussiens. Après avoir dirigé une ambulance, elle était venue, en prévision de la lutte qui allait s'ouvrir sur les bords de la Loire, transformer en hôpital les bâtiments du lycée de Vendôme.",
      "Pendant trois mois, Mme Coralie Cahen recueillit et soigna des milliers de blessés appartenant aux deux armées. Quand les Prussiens occupèrent Vendôme, ils remplacèrent le drapeau français par le drapeau allemand. « Nous avons ici de vos blessés », leur dit Mme Cahen, « et nous les avons soignés comme les nôtres ; nous continuerons ; mais nous entendons rester dans une ambulance française. »",
      "Le général ennemi, voulant épargner un chagrin à Mme Cahen, accepta d'enlever le drapeau prussien, et l'hôpital se retrouva sous le pavillon français."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "La fille du général Trieoche aux États-Unis",
    "summary": "Engagée comme infirmière durant la guerre hispano-américaine, la fille du général Trieoche est décédée de la typhoïde au camp d'Anniston, honorée par ses compagnons d'armes sous le drapeau français.",
    "paragraphs": [
      "En 1899, une digne émule de Mme Cahen, la fille du général Trieoche, était allée aux États-Unis pour servir comme infirmière dans la guerre hispano-américaine. Elle fut attachée à l'hôpital de campagne de la 1re division du Ve corps d'armée, au camp d'Anniston, dans l'Alabama.",
      "Chargée des tentes des typhiques, elle ne tarda pas à être elle-même atteinte du terrible mal, et elle expira. C'est dans le drapeau français que la jeune fille fut ensevelie, et cette touchante victime du devoir avait tenu à ce que son brassard de la Croix-Rouge demeurât attaché à son bras."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Fête des Fleurs au bois de Boulogne",
    "summary": "La première journée de la Fête des Fleurs se tient aujourd'hui dans l'allée de Longchamp au profit des Victimes du devoir. Le public est invité à accéder par les portes d'Armenonville et de la Cascade.",
    "paragraphs": [
      "C'est aujourd'hui qu'aura lieu au bois de Boulogne, dans l'allée de Longchamp, la première journée de la Fête des Fleurs, au profit des Victimes du devoir.",
      "Le conseil d'administration engage le public, pour éviter l'encombrement et entrer plus rapidement, à se présenter aux portes du pavillon d'Armenonville et de la Cascade."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Fiançailles du Prince Albert de Belgique",
    "summary": "Le prince Albert de Belgique, héritier présomptif de la couronne, annonce ses fiançailles avec la duchesse Élisabeth Valérie, fille du duc Karl-Théodore en Bavière.",
    "paragraphs": [
      "On mande de Bruxelles : Le prince Albert de Belgique, neveu du roi des Belges, héritier présomptif de la couronne, est fiancé à la duchesse Élisabeth Valérie, fille du duc en Bavière Karl-Théodore et de la duchesse de Bragance, infante de Portugal, dont la résidence est à Munich."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un chef de bande",
    "summary": "Gustave Guillaumot, recherché pour une agression violente à Saint-Ouen, a été arrêté hier par la police de Clignancourt suite à une dénonciation de sa compagne, Marie Raimblot.",
    "paragraphs": [
      "Dans la soirée d'hier, M. Carpin, commissaire de police du quartier de Clignancourt, a envoyé au dépôt un individu nommé Gustave Guillaumot, âgé de vingt-cinq ans, et sa maîtresse, Marie Raimblot, âgée de vingt-trois ans.",
      "Gustave Guillaumot était recherché depuis quelque temps par la police comme étant l'auteur de nombreux méfaits. Le 13 mai dernier, il avait frappé de huit coups de couteau un journalier à Saint-Ouen.",
      "C'est Marie Raimblot qui, à la suite d'une discussion survenue avec son amant, a dénoncé ce dernier à la police."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame de la jalousie",
    "summary": "Un violent règlement de comptes amoureux a eu lieu rue Amelot. Juliette Ozinsky a été arrêtée après avoir grièvement blessé sa rivale, Antoinette Jourd, avec un verre à pied ébréché.",
    "paragraphs": [
      "Deux jeunes femmes, Antoinette Jourd et Juliette Ozinsky, se disputaient le cœur d'un jeune homme. Furieuse que ce dernier choisisse sa rivale, Juliette Ozinsky a attaqué Antoinette Jourd dans la rue Amelot avec un verre à pied ébréché.",
      "La malheureuse a été grièvement blessée au visage et à la gorge. Juliette Ozinsky a été retrouvée et mise à la disposition de la police."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un récidiviste",
    "summary": "Paul Nicodème, condamné en 1894, est arrêté à la banque Mallet. Usurpant l'identité d'un officier de marine, il tentait de poursuivre ses escroqueries aux dépens des établissements bancaires parisiens.",
    "paragraphs": [
      "Le conseil de guerre maritime de Toulon avait condamné, en 1894, Paul Nicodème à sept années de réclusion pour escroquerie. À peine sorti de prison, il a repris ses coupables activités en se faisant passer pour un officier de marine, afin d'extorquer des fonds à divers banquiers parisiens.",
      "Le malfaiteur a été arrêté au moment précis où il se présentait à la banque Mallet pour retirer une lettre recommandée."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide d'un entrepreneur bordelais",
    "summary": "Désespéré par l'opposition des siens au mariage de sa fille, M. Antoine Renard, entrepreneur à Bordeaux, a attenté à ses jours à Paris. Son état est jugé sans espoir par les médecins de l'hôpital Bichat.",
    "paragraphs": [
      "M. Antoine Renard, entrepreneur à Bordeaux, s'est livré à une tentative de suicide à Paris, accablé par le refus opposé à ses volontés concernant le mariage de sa fille.",
      "Après une première tentative infructueuse survenue lors d'un dîner de famille, il s'est tiré un coup de feu dans la bouche dans la chambre qu'il occupait chez sa tante. Transporté d'urgence à l'hôpital Bichat, il y a été admis dans un état jugé désespéré."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "La recluse d'Amiens",
    "summary": "La police d'Amiens a découvert Angèle Thieullet, maintenue en séquestration durant neuf ans dans des conditions atroces. Victor Sarot, son geôlier présumé, a été écroué.",
    "paragraphs": [
      "À Amiens, la police vient de découvrir une femme, Angèle Thieullet, qui était séquestrée depuis neuf ans dans une demeure de la rue Dom-Bouquet. La malheureuse a été retrouvée dans un état de saleté indicible, affaiblie et presque privée de la vue.",
      "Victor Sarot, représentant de commerce, a été appréhendé par les autorités, soupçonné d'avoir agi comme geôlier et d'avoir assuré, de manière sporadique, la subsistance de sa victime. Une instruction est ouverte pour faire toute la lumière sur ce long martyre."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Informations Locales",
    "title": "Incendie à Levallois-Perret",
    "summary": "Un violent incendie a ravagé les entrepôts de l'épicerie en gros de M. Petit à Levallois-Perret. M. Etienne Glavelon a été grièvement blessé en portant secours lors du sinistre.",
    "paragraphs": [
      "La population de Levallois-Perret a été vivement émue par un violent incendie qui s'est déclaré dans les entrepôts des établissements de M. Petit, épicier en gros, rue du Marché.",
      "Le feu, ayant pris naissance dans les réserves, a causé des dommages matériels considérables. M. Etienne Glavelon, qui participait aux opérations de secours, a été blessé à la main au cours de l'intervention."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Économie",
    "title": "Bulletin viticole et état des récoltes",
    "summary": "Malgré les craintes liées à la floraison et à la coulure, les perspectives viticoles demeurent excellentes. Le marché reste toutefois contrasté selon les crus et les régions.",
    "paragraphs": [
      "VINS. Juin est le mois de la floraison et, par conséquent, de la coulure, laquelle peut occasionner des pertes considérables si elle se manifeste avec intensité.",
      "Si ce phénomène venait à toucher des parcelles épargnées par la gelée, les dommages seraient réels. Cependant, les espérances restent vives : en règle générale, les vignes sont si généreusement chargées que la récolte, à moins d'un accident climatique majeur, s'annonce comme devant être tout à fait exceptionnelle.",
      "Dans le Midi, l'activité commerciale s'intensifie. Toutefois, dans le Gard et l'Hérault, si les grands crus conservent leur cote, les petits vins peinent à trouver preneur.",
      "Dans l'Aude, les cours se maintiennent malgré l'annonce d'une production abondante. On cote à Narbonne : vin de plaine, de 10 à 14 francs ; vin de coteau, de 15 à 20 francs ; vin de Corbières, de 20 à 25 francs l'hectolitre à la propriété.",
      "Dans le Roussillon, le marché reste morose pour les vins de qualité inférieure, dont les cours tombent parfois à 1 franc 50 le degré.",
      "Dans le Var, l'offre reste importante et les acheteurs se font rares aux prix initiaux de 18 francs ; en revanche, les vins de Jacques restent très recherchés, se négociant de 28 à 30 francs l'hectolitre.",
      "En Armagnac, les cours sont fermes. Dans le Bordelais, la peur de la gelée s'est dissipée et la vigne présente une santé excellente ; dans le bas Médoc, les vignes greffées suscitent de grands espoirs.",
      "Dans les Charentes, les gelées ont sévi dans les zones basses, mais une floraison favorisée par une température clémente permet d'espérer une production satisfaisante. En Touraine, la récolte promet d'être fort abondante.",
      "En Basse-Bourgogne, le vignoble situé entre Châtillon-sur-Seine et Bar-sur-Seine, ainsi qu'une partie de l'Yonne, a subi des pertes estimées aux deux tiers de la récolte.",
      "Dans le Bourgogne et le Beaujolais-Mâconnais, les vignes sont surchargées de grappes, laissant présager une vendange extraordinaire si les conditions restent favorables.",
      "En Algérie, les conditions météorologiques sont excellentes et la végétation progresse rapidement, laissant entrevoir des volumes de raisin considérables."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Cours et mercuriales du vendredi 1er juin",
    "summary": "Compte rendu du marché du 1er juin : cours variables pour les denrées coloniales et activité modérée au marché aux veaux de La Valette, où les prix se maintiennent fermement malgré une offre abondante.",
    "paragraphs": [
      "Bulletin commercial du vendredi 1er juin : Farines, blés, sucres. On note des cours variables selon les échéances de juillet et août.",
      "Marché aux veaux, La Valette, vendredi 1er juin : 485 veaux amenés. La vente est calme, mais les prix demeurent soutenus. Les veaux de choix se sont négociés de 1 franc à 1 franc 20 par demi-kilo de viande nette."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Actualité Financière",
    "title": "Information Financière : Société Américaine",
    "summary": "Les actionnaires français de la Société Américaine sont informés du paiement des coupons mensuels à Paris, à la Caisse des Mines, rue Taitbout, à compter du 10 juin prochain.",
    "paragraphs": [
      "Les porteurs français d'actions de cette Société sont informés que, par suite d'une convention spéciale, ils peuvent désormais percevoir leurs coupons mensuels en France à la Caisse des Mines, rue Taitbout, à Paris. Le coupon n° 7, relatif au 1er janvier et fixé à 0 franc 075 par action, sera payable aux guichets de cet établissement à partir du 10 juin prochain."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Feuilleton",
    "title": "Mariage Secret : Quatrième partie",
    "summary": "Le docteur et le secrétaire général organisent la traque de Victorin Delorme, un individu suspect lié à une bande de malfaiteurs opérant entre l'Afrique et Rouen.",
    "paragraphs": [
      "Pour sauver l'honneur, le docteur et le secrétaire général délibèrent sur les moyens de cerner Victorin Delorme, un individu suspecté d'être affilié à une bande cosmopolite et impliqué dans des affaires douteuses.",
      "Le secrétaire général apprend par téléphone que les archives de la police désignent un homme de quarante-cinq ans, ancien chasseur d'Afrique, qui pourrait être le chef d'un gang responsable de récents vols de bijoux à Rouen.",
      "Le docteur confirme que Delorme était présent lors du vol d'un registre d'état civil à Rio-Frio, et qu'il est lié à un certain Della Ronda, un faux ecclésiastique arrêté récemment. La suite de l'enquête est fixée au lendemain à l'hôtel d'Aspremont."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Informations Diverses",
    "title": "Notes et annonces culturelles",
    "summary": "La Société centrale d'aquiculture tiendra son assemblée annuelle le 6 juin sous la présidence du ministre de l'Agriculture. Un concours musical est également annoncé salle Mustel.",
    "paragraphs": [
      "L'assemblée générale annuelle et la distribution des récompenses de la Société centrale d'aquiculture et de pêche auront lieu le mercredi 6 juin, sous la présidence de M. Jean, ministre de l'Agriculture.",
      "Un concours de violons, altos et violoncelles se tiendra du 12 au 14 juin, salle Mustel, rue de Douai."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Spectacles",
    "title": "Programme des théâtres pour le 2 juin",
    "summary": "Le programme des scènes parisiennes pour la soirée du 2 juin propose une sélection variée incluant l'Opéra, l'Opéra-Comique, le Théâtre-Français et le Sarah-Bernhardt.",
    "paragraphs": [
      "Programme des représentations théâtrales pour le 2 juin : Opéra (Faust), Opéra-Comique (Hänsel et Gretel), Théâtre-Français, Odéon, Châtelet (La Poudre de Perlimpinpin), Sarah-Bernhardt (L'Aiglon), ainsi que divers autres établissements parisiens."
    ]
  }
];
