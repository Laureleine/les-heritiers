// Date: 1899-10-05
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-10-05 (Version Restaurée, 31 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Littérature",
    "title": "La Charmeuse d'Enfants de Jules Mary",
    "summary": "Le Petit Parisien annonce la parution prochaine de \"La Charmeuse d'Enfants\", nouveau roman de Jules Mary, une fresque poignante sur les querelles familiales et la force réconciliatrice de l'amour.",
    "paragraphs": [
      "Le Petit Parisien commencera très prochainement la publication d'un grand roman inédit de Jules Mary, intitulé La Charmeuse d'Enfants.",
      "L'histoire dépeint une haine séculaire divisant deux familles, où une jeune fille charmante et douce parviendra à apaiser les rancœurs par l'amour, au fil de scènes attendrissantes et d'épisodes imprévus.",
      "Ce roman promet d'être l'œuvre maîtresse de Jules Mary, suivant le succès de Roger la Honte, Le Régiment, L'Outragée ou La Pocharde."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Social",
    "title": "Les abus des agences dramatiques",
    "summary": "Face aux abus et commissions excessives des agences, des artistes et écrivains, sous l'impulsion de M. Edouard Guillaume, fondent une association pour faciliter le placement direct des comédiens.",
    "paragraphs": [
      "Le métier de comédien, souvent mal compris par le passé, est une profession exigeante faite de misères et de détresses, loin de l'image de luxe et de paresse que certains lui attribuaient.",
      "Un grave problème se pose aux artistes dramatiques et lyriques : celui de l'engagement. Cet engagement passe presque toujours par un intermédiaire, l'agent, qui prélève une commission sur les appointements.",
      "Ce système d'intermédiaire a engendré des abus criants. Les agents prélèvent souvent leurs honoraires d'avance, ce qui peut mener à des situations désastreuses pour les artistes, notamment en cas de maladie ou de faillite du directeur de théâtre.",
      "Certains agents vont jusqu'à réclamer des commissions même lorsqu'ils n'ont pas été intermédiaires, profitant de la crainte des artistes de ne plus être placés à l'avenir.",
      "Pour remédier à cette situation, un groupe d'artistes et d'écrivains, sous l'impulsion de M. Edouard Guillaume, a décidé de fonder une Association générale des artistes dramatiques et lyriques, destinée à remplacer les agences et permettre le placement direct, avec le soutien des ministres de l'Instruction publique et du Commerce."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Vautour d'un crime (Feuilleton du Petit Parisien)",
    "summary": "Au château, lors d'un dîner, une tension grandit entre le général et son fils Gontran concernant les projets de mariage de ce dernier et des mystères entourant une sombre affaire passée.",
    "paragraphs": [
      "M. de Montalais, en compagnie de son fils Gontran et de la jeune Noëla, dîne au château tandis que la conversation s'oriente vers le mariage imminent de Gontran avec Adrienne.",
      "Toutefois, une tension inhabituelle s'installe. Le général, s'interrogeant sur les changements dans les projets de son fils et sur une mystérieuse affaire concernant un domino noir, presse Gontran de questions.",
      "Malgré les dénégations de son fils qui prétend à une simple aventure sans importance, le général semble inquiet et évoque également le passé de la veuve Valérie Cathelin, laissant planer un sentiment de malaise et de soupçon au sein de la famille."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Conseil de Cabinet et actualités politiques",
    "summary": "Réunion du Conseil de Cabinet sous l'égide de M. Waldeck-Rousseau. Au programme : affaires courantes, situation au Creusot, réforme des chemins de fer et déplacement présidentiel de M. Loubet à Grignan.",
    "paragraphs": [
      "Les ministres se sont réunis hier en Conseil de Cabinet au ministère de l'Intérieur, sous la présidence de M. Waldeck-Rousseau, pour traiter des affaires courantes, des incidents du Creusot et du projet d'armée coloniale.",
      "Le ministre des Travaux publics a nommé une commission, présidée par M. Sainsère, pour étudier des modifications à la législation sur les chemins de fer.",
      "Le Président de la République, M. Loubet, s'est rendu à Grignan pour une visite officielle marquée par un discours appelant à la tolérance, à l'union et à la concorde, soulignant le rôle de la France dans la justice et le progrès."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un fou incendiaire rue Fresnel",
    "summary": "Drame rue Fresnel : ruiné, M. Théodore Vandorne a délibérément mis le feu à son immeuble avant de tenter de mettre fin à ses jours. Il a été secouru par les pompiers dans un état critique.",
    "paragraphs": [
      "Un drame terrible s'est déroulé rue Fresnel, où M. Théodore Vandorne, un ancien maître d'hôtel ruiné, a incendié son immeuble avant de tenter de se suicider au milieu des flammes.",
      "Le feu, propagé délibérément par Vandorne, a détruit plusieurs étages, forçant les locataires à la fuite. Vandorne, après s'être infligé des coups de couteau et une blessure par balle, a été maîtrisé par les pompiers et transporté à l'hôpital dans un état grave."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Assassinat d'une maîtresse à Toulouse",
    "summary": "Henri-Louis Julien a avoué le meurtre de sa maîtresse, Félicie Ducousseau, au château de Latour-Bouzals. Il a tenté de dissimuler le crime en dépeçant et brûlant le corps dans la chaudière du domaine.",
    "paragraphs": [
      "Henri-Louis Julien, un homme de trente-sept ans, a avoué avoir assassiné sa maîtresse, Félicie Ducousseau, le 19 septembre dernier, au château de Latour-Bouzals.",
      "Après avoir tué la jeune femme à la suite d'une dispute financière, Julien a tenté de faire disparaître le corps en le dépeçant et en le brûlant dans la chaudière du château, avant d'enterrer les restes. L'enquête se poursuit pour déterminer les circonstances exactes de ce crime odieux."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Social",
    "title": "La grève au Creusot",
    "summary": "La situation reste tendue au Creusot. Tandis que le Comité de grève organise l'exode des ouvriers, les autorités surveillent les mouvements en attendant la prochaine paie et les décisions de M. Schneider.",
    "paragraphs": [
      "La situation reste tendue au Creusot. Le Comité de grève organise l'exode d'ouvriers vers d'autres régions et reçoit des soutiens de divers départements.",
      "Les autorités surveillent de près le mouvement, tandis que la prochaine paie des ouvriers est attendue pour demain, avec des rumeurs de majoration de salaire promises par M. Schneider."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Social",
    "title": "La grève au Creusot : Réunion des ouvriers",
    "summary": "Une foule immense s'est rassemblée au Creusot pour acclamer les députés Renou, Poulain et Viviani. Le projet d'un voyage à Paris a été chaleureusement adopté au son de la Chanson du Prolétariat.",
    "paragraphs": [
      "Dans les différents quartiers du Creusot, le bruit des tambours et des clairons rythme la marche habituelle des grévistes. La place du Guide est remplie d'une foule énorme attendant la venue des orateurs.",
      "M. Renou, député de Paris, prend la parole, suivi de Poulain, député des Ardennes, et Duthoit de Roubaix. Ils exposent la situation et engagent les ouvriers à rester fermes dans leurs revendications.",
      "MM. Poulain et Renou se déclarent partisans du voyage à Paris, projet acclamé par la foule. M. Viviani succède aux orateurs, soulevant de nombreux bravos.",
      "L'interruption du meeting coïncide avec l'arrivée de M. Henri Turot. La foule s'écarte, et sur le kiosque, un piston joue la Chanson du Prolétariat, reprise par plusieurs milliers de voix."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Social",
    "title": "La déclaration du Comité de grève",
    "summary": "Le Comité de grève, après l'échec de la conciliation préfectorale, porte le conflit devant le gouvernement. Il exhorte les ouvriers à maintenir leur dignité et leur calme dans la lutte.",
    "paragraphs": [
      "Le 4 octobre au soir, après une attente animée, les membres du Comité de la grève sont revenus devant la foule. M. Maxence Roldes est monté à la tribune pour annoncer l'échec de la tentative de conciliation menée par le Préfet.",
      "Le Comité a décidé de porter les revendications des ouvriers directement devant le gouvernement pour qu'il soit juge du conflit, avant d'envisager l'exode sur Paris.",
      "L'orateur a appelé à la confiance envers le gouvernement de défense républicaine : « Restez ce que vous êtes, debout, énergiques et résolus, mais calmes ». M. Viviani a appuyé ce discours.",
      "Une délégation composée de MM. Charleux, Lacour, Jusot, Henri Turot, Viviani, Quilici et Roldes a été acclamée pour représenter les ouvriers."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique",
    "title": "Adresse au Président du Conseil",
    "summary": "Le Comité de grève sollicite l'arbitrage du gouvernement face à M. Schneider, réaffirmant la posture républicaine et le caractère pacifique des ouvriers qui défendent leur liberté syndicale.",
    "paragraphs": [
      "À la suite de la décision de provoquer un arbitrage gouvernemental, le Comité a adressé un télégramme au Président du Conseil.",
      "Le texte souligne que depuis vingt jours, les ouvriers sont acculés à la grève par M. Schneider, tout en maintenant un calme admirable. Ils se présentent non comme des agitateurs, mais comme des soldats d'une idée républicaine défendant la liberté syndicale et de conscience.",
      "Le Comité sollicite un arbitrage pour régler le différend dans un débat contradictoire, s'engageant à exécuter la sentence arbitrale rendue par le gouvernement."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Actualité Militaire",
    "title": "Nouvelles militaires",
    "summary": "Mouvements au commandement supérieur : le général Larchey passe à la réserve et le colonel de Margon est mis à la retraite. Un sergent-major de la mission Marchand, disparu depuis treize mois, donne de ses nouvelles.",
    "paragraphs": [
      "Le général de division Larchey, commandant le 9e corps d'armée, est placé dans la réserve à dater du 1er octobre.",
      "Le colonel de Margon, commandant le 4e hussards, a été mis d'office à la retraite par décret du 20 août.",
      "Un sergent-major de la mission Marchand, dont on était sans nouvelles depuis treize mois, a écrit de Zemio : il est en bonne santé."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Actualité Militaire",
    "title": "Manœuvres militaires au camp de Châlons",
    "summary": "Début des exercices pratiques au camp de Châlons : tirs d'artillerie de 155 court sur les ouvrages Niel avec l'assistance technique des échelles Gugumus pour l'observation.",
    "paragraphs": [
      "Les exercices pratiques ont commencé par le tir de pièces de 155 court sur un ennemi supposé occupant les ouvrages Niel. On a utilisé des échelles Gugumus pour observer les tirs."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Actualité Militaire",
    "title": "Manœuvres du service de santé",
    "summary": "Les manœuvres du service de santé se déroulent entre la forêt de Bondy et Chantilly. L'exercice tactique simule la prise en charge de blessés par les brancardiers lors d'une attaque de division.",
    "paragraphs": [
      "Les manœuvres du service de santé ont débuté sous un temps superbe entre la forêt de Bondy et le chemin de fer de Chantilly. Les troupes ont été bien accueillies par les populations locales.",
      "La journée était tactique : simulation de lutte d'une division attaquant une brigade. Des hommes désignés comme blessés ont été relevés et pansés par des brancardiers avant d'être dirigés vers des postes de secours."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Perquisitions chez les royalistes à Bordeaux",
    "summary": "Vaste opération de police à Bordeaux : perquisitions au domicile de M. Bataille, au siège de la Jeunesse royaliste, ainsi qu'à Bazas et Caudéran chez M. Fleuri-Bécheau. Saisie de correspondances.",
    "paragraphs": [
      "En vertu d'une commission rogatoire, le chef de la Sûreté a opéré des perquisitions au domicile de M. Bataille et au siège de la Jeunesse royaliste.",
      "Une correspondance a été saisie et des membres de la Jeunesse royaliste ont été convoqués. Des perquisitions ont également eu lieu à Bazas et à Caudéran, chez M. Fleuri-Bécheau."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "L'instruction de la Haute-Cour",
    "summary": "Poursuite de l'instruction au Luxembourg. Auditions de témoins, consultations de pièces par la défense et protestations des avocats des inculpés royalistes concernant l'accès partiel au dossier.",
    "paragraphs": [
      "Les avocats des groupes royalistes et antisémites examinent les pièces du dossier au Luxembourg. M. Bertol-Graivil a été entendu au sujet d'un article publié dans l'Étoile Belge.",
      "Le préfet de police Lépine et le juge Fabre se sont rendus au Luxembourg pour conférer avec le président de la Commission d'instruction, M. Bérenger.",
      "Les avocats des inculpés royalistes ont déposé une protestation suite à la communication partielle du dossier."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "International",
    "title": "La situation au Transvaal",
    "summary": "Malgré les appels à l'arbitrage venant des États-Unis, la Grande-Bretagne intensifie ses préparatifs militaires. Des troupes arrivent de l'Inde et le général White prendra bientôt le commandement des opérations.",
    "paragraphs": [
      "Malgré les mouvements en faveur d'un arbitrage aux États-Unis, la Grande-Bretagne prépare activement la guerre. Des troupes débarquent actuellement à Durban, en provenance de l'Inde.",
      "Les Boërs menacent Laings-Neck, Charlestown et Dundee, tandis que les autorités anglaises à Johannesburg ordonnent la fermeture des commerces et organisent le départ des ressortissants britanniques.",
      "Le général White partira demain pour prendre le commandement."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Meurtre à la fourche en Belgique",
    "summary": "Un tragique différend rural a viré au drame à Handzaeme : à la suite d'une violente querelle, Henri Deceuninck a mortellement blessé Jean Verhaege d'un coup de fourche porté en pleine poitrine.",
    "paragraphs": [
      "Une violente querelle a éclaté entre Henri Deceuninck et Jean Verhaege, à Handzaeme. Au cours de l'altercation, Deceuninck a frappé Verhaege à la poitrine avec une fourche, lui donnant la mort sur le coup."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "International",
    "title": "Congrès des Orientalistes et actualités étrangères",
    "summary": "Ouverture solennelle du douzième Congrès des Orientalistes à Rome, avancées scientifiques à Stockholm sur la bouée d'Andrée, triomphe de l'amiral Dewey à Washington et incendie industriel à Londres.",
    "paragraphs": [
      "Le douzième Congrès des Orientalistes s'est ouvert avec solennité à Rome. À Stockholm, le docteur Ekhelm émet de nouvelles hypothèses sur la bouée d'Andrée.",
      "À Washington, l'amiral Dewey a été acclamé par la foule lors d'une cérémonie en présence du président McKinley. Enfin, à Londres, un violent incendie a détruit une fabrique d'automobiles."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Grève grave à Anvers",
    "summary": "La situation demeure préoccupante au port d'Anvers. Un violent conflit entre grévistes et non-grévistes a nécessité l'intervention des forces de l'ordre, provoquant des coups de feu et plusieurs blessés.",
    "paragraphs": [
      "La grève des conducteurs du port d'Anvers a pris une tournure préoccupante. Lors d'une altercation violente avec des non-grévistes, la police a dû intervenir et des coups de feu ont été tirés, faisant plusieurs blessés."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Échos",
    "title": "Nouvelles diverses",
    "summary": "Une mission diplomatique japonaise visite Paris, le milieu intellectuel déplore le décès du philosophe Paul Janet, et des nouvelles insolites nous parviennent de Tunis et des États-Unis.",
    "paragraphs": [
      "Un secrétaire du ministère de l'Intérieur du Japon a visité les services de la préfecture de police à Paris. M. Paul Janet, illustre membre de l'Institut, est décédé à l'âge de soixante-cinq ans.",
      "À Tunis, un projet de banquet en l'honneur de M. Crispi a dû être abandonné par manque de fonds. Un cycliste américain, Joseph Grimes, attire l'attention par sa stature imposante et sa force physique."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Crime passionnel à Mont-de-Marsan",
    "summary": "À Mont-de-Marsan, un jeune homme de vingt et un ans, nommé Baigts, a assassiné son compagnon de dix-huit ans, Larrey, à coups de couteau. Malgré sa tentative de dissimulation, il a été arrêté par la police.",
    "paragraphs": [
      "Le nommé Baigts, âgé de vingt et un ans, a tué son compagnon Larrey, âgé de dix-huit ans, d'un coup de couteau le dimanche soir. Il a tenté de dissimuler le meurtre, mais une perquisition a mené à la découverte de l'arme du crime dissimulée sous son lit. Il a été arrêté par les autorités."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Pas de chance",
    "summary": "Un rentier surprend deux cambrioleurs en train de piller son appartement. L'un d'eux, s'étant fracturé la jambe sur le parquet ciré, n'a pu prendre la fuite, facilitant ainsi leur arrestation immédiate par la police.",
    "paragraphs": [
      "M. D., rentier demeurant avenue d'Italie, s'était absenté il y a quelques jours pour aller chasser chez un ami résidant près de Melun.",
      "Il rentrait hier soir, vers onze heures, mais quelle ne fut pas sa stupéfaction en s'apercevant que les fenêtres étaient brillamment illuminées. Il appela son concierge, et tous deux, étouffant leurs pas, grimpèrent l'escalier quatre à quatre.",
      "En entrant dans son salon, M. D. vit tous les meubles bouleversés ; un élégant secrétaire dans lequel le rentier enfermait ses valeurs avait été fracturé, et les cartons gisaient pêle-mêle sur le sol. Sans aucun doute, des cambrioleurs étaient dans l'appartement.",
      "M. D. glissa prudemment deux balles dans les canons de son fusil et, accompagné de son concierge, surprit deux individus assis sur une causeuse au milieu de paquets énormes. M. D. coucha les deux gredins en joue, les sommant de ne pas bouger.",
      "Les deux hommes, confondus, expliquèrent qu'ils étaient venus dévaliser l'appartement, mais que, par malheur, l'un d'eux, glissant sur le parquet ciré, s'était cassé la jambe, les empêchant de fuir. Ils délibéraient sur les moyens de s'échapper au moment de l'irruption du propriétaire. La police, appelée sur les lieux, a évacué le blessé sur un brancard pendant que son complice était conduit au poste.",
      "Les deux malandrins ont déclaré se nommer Barthélémy Qoussas, dit Gousse d'Ail, et Léopold Fletcher, dit La Flèche, âgés tous deux de vingt-cinq ans. Le premier a été consigné à l'hôpital Cochin, à la disposition de la Justice ; son camarade a été envoyé au Dépôt."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort d'un avare",
    "summary": "Le décès d'un mendiant septuagénaire aux Batignolles révèle une fortune insoupçonnée : 5 000 francs en or et valeurs furent découverts dans sa paillasse par les autorités, malgré ses habits sordides.",
    "paragraphs": [
      "Dans la rue Trézel, aux Batignolles, habitait depuis longtemps un vieillard, M. Henri Vasnier, âgé de soixante-dix-neuf ans, ancien clerc de notaire, qui, dans tout le quartier, était considéré comme dénué de ressources.",
      "Toujours vêtu d'habits sordides, pleurant la misère, cet individu ne vivait que d'aumônes. Il touchait des bons de vivres dans les hôpitaux, mendiait à la porte des soupes populaires, implorait la charité des boulangers et ramassait les rognures ; bref, il passait ses journées à mendier.",
      "Le concierge de sa maison, ne l'ayant pas vu depuis deux jours, alla prévenir M. Rouffaux, commissaire de police, qui, hier matin, se rendit au domicile du vieillard, fit ouvrir la porte et constata que Henri Vasnier était mort de vieillesse.",
      "En cherchant les papiers d'identité, le magistrat a trouvé dans la paillasse du défunt 5 000 francs en billets de banque, en or et en valeurs au porteur.",
      "La famille, qui habite Caen, a été prévenue et le juge de paix du dix-septième arrondissement a apposé les scellés chez le vieil avare."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Sous le tramway",
    "summary": "Deux accidents de tramway ont endeuillé la matinée. Un homme a trouvé la mort avenue de Clichy, tandis qu'un attelage a été violemment percuté boulevard Malesherbes par un mécanicien en fuite.",
    "paragraphs": [
      "Hier matin, vers neuf heures, le tramway allant à la Madeleine venait de franchir avec difficulté la rampe de l'avenue de Clichy. Le mécanicien fut obligé de stopper, mais le lourd véhicule, sous l'effet de la pesanteur, se renversa.",
      "Un individu, voulant sauter du tramway, prit mal son élan et eut la tête broyée par le véhicule. D'après les papiers trouvés sur le cadavre, l'homme, nommé A. G., a été transporté à la Morgue par les soins de M. Rouffaux, commissaire de police.",
      "Presque à la même heure, sur le boulevard Malesherbes, le tramway allant de la Madeleine à Colombes bousculait un attelage conduit par M. Fernand Conhère. Celui-ci, gravement contusionné, a l'intention de porter plainte contre le mécanicien qui a continué sa course à toute vitesse sans se préoccuper de l'accident."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Sanglantes discussions",
    "summary": "Deux agressions au couteau ont ensanglanté la soirée : un ouvrier a été grièvement blessé dans une rixe au dix-huitième arrondissement, et un dessinateur a été poignardé lors d'une dispute rue Custine.",
    "paragraphs": [
      "Hier soir, vers huit heures, un ouvrier mécanicien, Eugène Renusson, âgé de trente-six ans, s'est pris de querelle avec un de ses voisins, à qui il reprochait d'avoir tenu sur son compte des propos calomnieux.",
      "La discussion devenant violente, l'un des amis du voisin appela à son aide un charretier nommé Louis Ropel, âgé de quarante ans, qui se planta devant Renusson en disant : « À présent, c'est à moi que tu as affaire. Dis encore un mot malsonnant, et je vais te régler ton compte. »",
      "Eugène Renusson, bravade, répondit : « Tu es bien trop lâche pour faire ce que tu dis. » Mais à peine les paroles prononcées, son adversaire lui crevait le ventre d'un coup de couteau.",
      "Malgré sa terrible blessure, la victime se rua sur Louis Ropel, et un combat s'engagea entre les deux hommes, qui aurait fini plus tragiquement sans l'intervention de la police. Les gardiens de la paix ont conduit le meurtrier au poste, où il est à la disposition de la Justice. Quant à Eugène Renusson, son état a exigé son admission d'urgence à l'hôpital Bichat.",
      "Vers onze heures du soir, à la suite d'une discussion dans un bar de la rue Custine, un dessinateur nommé René Richaud, âgé de trente ans et demeurant rue Letort, a été frappé de deux coups de couteau à la tête par un inconnu. Le blessé a été transporté à l'hôpital Lariboisière, salle Newton, tandis que le coupable est activement recherché par la Sûreté."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Les Livres",
    "title": "Le dictionnaire populaire de médecine usuelle",
    "summary": "Le Dictionnaire populaire de médecine du docteur Labarthe reparaît dans une édition mise à jour, conservant son caractère pédagogique de vulgarisation scientifique pour le grand public.",
    "paragraphs": [
      "Le fameux Dictionnaire populaire de médecine usuelle de feu le docteur Paul Labarthe reparaît en une nouvelle édition mise au point selon toutes les grandes découvertes contemporaines. Le docteur de Soyre, un des premiers collaborateurs du docteur Labarthe, a introduit dans le livre toutes les notions nécessaires, en ayant bien soin de lui conserver le caractère de vulgarisation qui, en le rendant accessible à tous, a toujours constitué son originalité et lui a valu tant de vogue.",
      "Parmi les articles qui ont dû être refaits presque complètement, je citerai : Actinomycose, Antipyrine, Darwinisme, Diphtérie, Grippe ou Influenza, Neurasthénie, Peste, Sérothérapie, etc.",
      "Le Dictionnaire populaire de médecine paraît en livraisons à 10 centimes (en vente chez tous les libraires), une série de 10 centimes tous les dix jours. On peut souscrire à l'ouvrage complet en envoyant un mandat-poste de 6 francs à l'éditeur E. Flammarion, 26, rue Racine (Paris)."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame de la rue des Huissiers",
    "summary": "Un couple de concubins, accablé par la maladie et une misère noire, a mis fin à ses jours à Neuilly. Ils ont été retrouvés morts, asphyxiés au charbon et pendus.",
    "paragraphs": [
      "Au deuxième étage de la maison portant le numéro 7 de la rue des Huissiers, habitait depuis plus d'un an le nommé Laurent Rendu, charpentier de cinquante-quatre ans, vivant maritalement avec une dame Marie Beulé, blanchisseuse âgée de quarante-cinq ans.",
      "Le ménage vivait en excellente intelligence et menait une existence tranquille ; mais depuis plusieurs mois, atteint d'une maladie de poitrine, Rendu avait été obligé de suspendre tout travail. Par une fatale coïncidence, le lavoir où était employée Marie Beulé ferma ses portes presque en même temps et, depuis lors, toutes ses recherches pour se procurer du travail étaient restées sans résultat.",
      "La maladie ne faisant qu'empirer, la misère ne tarda pas à se déclarer ; tous les meubles avaient pris peu à peu le chemin du Mont-de-Piété ou avaient été vendus ; trois termes étaient dus au propriétaire. Le désespoir s'empara du couple qui résolut d'en finir avec la vie.",
      "Dimanche matin, Marie Beulé achetait un paquet de charbon et remontait en hâte dans l'appartement. Hier matin, à dix heures, la concierge, concevant des soupçons, alla avertir la police. M. Soullière, commissaire, se rendit sur les lieux ; un serrurier fut requis, la porte fut enfoncée et un affreux spectacle s'offrit à la vue.",
      "Sur le lit gisait le cadavre de Marie Beulé, la mort remontant à quatre jours. Elle était due à l'asphyxie. Un réchaud avait été placé au milieu de la chambre. À la fenêtre était pendu le corps de Laurent Rendu. Trouvant que la mort ne venait pas assez vite par le charbon, les malheureux avaient eu recours à la corde.",
      "Sur une table était une lettre à l'adresse du commissaire de police dans laquelle les infortunés déclaraient que, las de lutter inutilement contre la misère, ils se donnaient la mort."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes limitrophes",
    "summary": "Une série d'incidents judiciaires et d'accidents marquent la petite couronne : vols, blessures industrielles graves, incendies criminels et tragique découverte à Vareddes.",
    "paragraphs": [
      "Hueil : Une jeune fille de seize ans, Mlle Marguerite Paulmier, demeurant à Bozenval, avait volé dernièrement à ses parents une somme de 150 francs. Croyant que c'était son frère Alexandre, âgé de quatorze ans, qui l'avait dérobée, ses parents prévinrent la gendarmerie ; Marguerite Paulmier a été arrêtée.",
      "Aubervilliers : Un ouvrier fouilleur, M. Gustave Grundel, âgé de trente et un ans, travaillant dans une usine de métallurgie de l'avenue de la République, faisait passer, hier matin, une masse de fer sous une cisaille lorsque, à la suite d'une fausse manœuvre, l'appareil repoussa la masse de fer qui retomba sur le malheureux et lui broya les deux jambes. Grundel a été admis d'urgence à Lariboisière par les soins de M. Boutellier, commissaire de police, qui a ouvert une enquête.",
      "Charenton : Hier soir, à neuf heures, le feu a été mis à une meule de fumier appartenant à Mme Veuve Chatton, demeurant Champ de Corbilly, route de Créteil, à Maisons-Alfort. Les malfaiteurs avaient au préalable coupé la courroie de transmission d'un moteur à pétrole destiné à faire fonctionner une pompe, et enlevé le robinet de la prise d'eau. Les dégâts sont évalués à une somme importante. Les incendiaires sont activement recherchés.",
      "Meaux : Un grainetier du faubourg Saint-Nicolas, à Meaux, nommé Menessier, âgé de trente-deux ans, qui devait accomplir en qualité de réserviste une période militaire de vingt-huit jours, a disparu dans la nuit de dimanche dernier, et depuis, on est sans nouvelles de lui.",
      "Hier, Mme Chambault, de Vareddes, qui allait ramasser des noix dans un bois assez éloigné du village, a trouvé pendu aux branches d'un noyer un cultivateur de Chambry nommé Martial Andry, âgé de cinquante-sept ans. Mme Chambault s'est enfuie épouvantée, car la strangulation n'était pas complète et le malheureux râlait encore. Mme Chambault a appelé un ouvrier agricole du nom de Leduc, qui vint voir le pendu. Il aurait pu le rappeler à la vie, mais, obéissant à un préjugé très répandu dans les campagnes, il n'a pas voulu couper la corde avant l'arrivée de la gendarmerie. Andry a mis fin à ses jours pour n'avoir pas à comparaître, samedi prochain, devant la Justice de Paix de Meaux."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Conseil fédéral des préposés des manufactures de tabacs",
    "summary": "Le bureau du Conseil fédéral des préposés aux manufactures de tabacs et d'allumettes s'est réuni pour coordonner une action auprès des députés en vue d'un amendement budgétaire.",
    "paragraphs": [
      "Le bureau du Conseil fédéral des préposés des manufactures et magasins de tabacs et manufactures d'allumettes a tenu hier sa séance mensuelle, au siège de la Société, 47, rue Cler.",
      "Au cours de cette réunion, plusieurs questions intéressantes ont été discutées. Les membres du Conseil ont examiné la ligne de conduite à suivre pour arriver à faire voter l'amendement déposé en faveur de la corporation lors des votes du Budget, amendement qui sera repris cette année. Il est décidé qu'un appel des plus pressants sera adressé à tous les préposés des départements pour les engager à faire des démarches auprès de leurs députés en vue de se concilier leur appui et de s'assurer leur concours.",
      "La séance a été levée à onze heures et demie."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Départements",
    "title": "Faits divers en province",
    "summary": "Arrestation d'un meurtrier à Guise, drame domestique à Montdidier et altercation violente à Roye : retour sur l'actualité judiciaire dans le Nord.",
    "paragraphs": [
      "Compiègne : M. Martinet, juge d'instruction, a reçu un télégramme de M. le procureur de Vervins lui annonçant l'arrestation, à Guise, de Jean-Baptiste Durussel, l'auteur de l'assassinat commis à Varanval.",
      "Montdidier : Le jeune Maurice Ledoux, âgé de dix ans, s'amusant chez un voisin, prit un revolver. Un coup partit, atteignant l'imprudent enfant au côté droit du front. L'état de l'enfant est très grave.",
      "Roye : À la suite d'une discussion, le nommé Remy Maligot, chef d'équipe de la fabrique de sucre de MM. Pluche, Frissart et Cie, a porté un violent coup de couteau au nommé Ansart, ouvrier agricole. Ce dernier, grièvement atteint dans l'aine, fut transporté à l'hospice."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Feuilleton",
    "title": "LE REVENANT",
    "summary": "Évadé du bagne, le forçat Rougeaud arrive à Paris avec le projet de cambrioler une demeure bourgeoise. Au même moment, Edmond Bareste, désespéré, cherche sans succès à lever le voile sur les origines de sa future belle-fille.",
    "paragraphs": [
      "Le Rougeaud avait pris la place du gabier Gustave Mitonnet, et maintenant, libre, il vaguait en pleine mer. Mais sur quel navire était-il parti ? Une dizaine de bâtiments au moins avaient levé l'ancre la veille. Le chef du pénitencier en parla au gouverneur, et tous deux convinrent de ne pas ébruiter l'affaire. On aviserait le ministère de la Justice, on enverrait son signalement dans tous les ports français, voilà tout.",
      "D'ailleurs, c'est là une précaution bien inutile, conclut le gouverneur. Le Rougeaud est un malin, son évasion le prouve. Le navire qui l'emporte fera forcément escale en route, il débarquera à terre ; il est bien envolé pour jamais. Après tout, bon voyage au simple, qu'il ne fasse pas encore quelque mauvais coup, qu'il ne nous revienne pas, parce que, cette fois, il ne s'évadera pas.",
      "Débarqué tout bonnement au Havre après une excellente traversée, car le Rougeaud, moins prévoyant qu'on ne le pensait, n'avait pas songé un seul instant à fausser compagnie au Neptune, il passa deux ou trois jours dans notre grand port maritime, après avoir envoyé sa défroque de marin aux cinq cent mille diables, occupé à faire une noce carabinée et à dépenser consciencieusement jusqu'au dernier sou sa solde de bord.",
      "Lorsqu'il se réveilla un beau matin dans un bouge borgne, après une crapuleuse orgie, il songea au but qu'il s'était promis et auquel il avait sans cesse pensé pendant sa longue traversée : aller à Volandry déterrer les fameux papiers dans le parc où il les avait cachés et en tirer le plus de monnaie possible. Mais c'était loin, Volandry, très loin, et rien pour prendre le chemin de fer. Heureusement, notre gaillard savait au besoin être philosophe. Ce voyage qu'il ne pouvait faire, installé commodément dans un wagon, eh bien, il l'accomplirait à pied. Et bravement, il était parti.",
      "Mendiant dans les fermes qui se trouvaient sur son passage, volant à droite et à gauche, quatre jours après, dans l'après-midi, vers une heure, il arrivait à Paris. Hélas, là n'était pas le terme de son voyage. Il lui restait encore deux cents et quelques kilomètres à faire, et dame ! ce fatigant moyen de locomotion, il en avait assez. Voyons ! dans la capitale, un coquin rusé et adroit trouve en cherchant un peu quelque bon coup à tenter. S'il essayait ?",
      "On était au mois d'août, les hôtels et les riches appartements étaient déserts, leurs habitants allant chercher un peu de fraîcheur à la campagne ou sur les bords de la mer ; le moment était excessivement favorable. Toutes ces réflexions, la canaille les agitait dans son cerveau tout en flânant comme un brave homme, qu'il n'était pas, les deux mains dans ses poches. Entré à Paris par la porte de Clichy, il descendait doucement le boulevard Malesherbes lorsqu'une des somptueuses demeures qui bordent cette route superbe attira son regard.",
      "Bâti au coin de deux rues, le mur qui entourait le jardinet précédant l'habitation était très peu élevé. Cette particularité frappa notre homme. Si les patrons ont décampé, voilà qui ferait rudement mon affaire, pensa-t-il. Sans avoir l'air de rien, il leva les yeux et un soupir de satisfaction gonfla sa large poitrine. Les volets des deux étages étaient hermétiquement clos. Eh bien, bravo, ça y est ! se dit le Rougeaud. Décidément, j'avais raison, s'il y a un Dieu pour les honnêtes gens, il y en a un pour la fripouille aussi. Ce soir, vers minuit, je connais quelqu'un qui barbottera là-dedans et gagnera de quoi se frusquer un brin et rouler ensuite jusqu'à Volandry en sleeping-car.",
      "Et après avoir bien remarqué le numéro de la maison, de son même pas traînard, l'ancien forçat continua son chemin. Il venait à peine de s'éloigner qu'une voiture s'arrêtait devant la porte et un homme en descendait.",
      "C'était Edmond Bareste, auquel l'hôtel appartenait et qui arrivait du château des Fougères pour savoir si ses démarches au sujet de Rose-Marie avaient enfin abouti. Le mariage devait avoir lieu dans trois jours, et après-demain soir l'on signait le contrat. Vainement, jusque-là, le préfet de police avait fait procéder aux plus minutieuses recherches. Dix-neuf ans s'étaient écoulés, les renseignements fournis étaient nuls ou presque nuls. Il y avait, hélas, peu de chances de réussir.",
      "Cependant, un limier plus adroit que les autres croyait être sur la piste. Le préfet l'avait télégraphié à Bareste et celui-ci s'était empressé d'accourir, sans toutefois rien dire de ses espérances pour éviter, en cas d'échec, une déception cruelle à son fils. Vivement, il ouvrit la porte et regarda dans la boîte aux lettres s'il n'y avait rien pour lui. Puis, il monta à son atelier qui donnait sur le jardin et dans lequel la lumière pénétrait par une immense véranda dont les stores de fer n'étaient pas abaissés. Hâtivement, il décacheta son courrier. Il n'y avait rien.",
      "Mais bah ! Qu'est-ce que cela signifiait ? Le préfet savait qu'il devait venir à Paris lui rendre visite, il n'avait donc pas à lui écrire. Oui, parbleu, se mettre martel en tête était bien inutile. Et, descendant, il sauta en voiture et ordonna au cocher de le conduire à la préfecture de police. Lorsqu'il y fut, il questionna anxieusement le haut fonctionnaire : « Eh bien ? » Bareste : « Hélas, rien, mon pauvre ami, toujours rien. »",
      "« Cette dernière piste ? » « Aussi mauvaise que les autres. Je crois que, hélas, il faut désespérer d'aboutir, et cependant, vous le savez, nous avons fait l'impossible. » « Ou le hasard, tout est inutile, votre future belle-fille en sera réduite à ne jamais connaître que son nom de Rose-Marie. Surtout que le mariage est proche, m'avez-vous dit, il a lieu dans trois jours. » Le préfet hocha dubitativement la tête.",
      "« Alors, mon cher, conclut-il, croyez-moi, n'y pensez plus. Bah, après tout, puisque votre fils s'en contente et vous aussi, Mlle Rose-Marie s'appellera Mme André Bareste, et voilà tout. Allons, quittez cet air soucieux, que diantre. Nous avons tous fait notre devoir, vous et nous, nous ne pouvons rien de plus. Vous dînez avec moi ce soir. » « Mais... » « Je vois que vous n'êtes pas engagé ailleurs, et par conséquent, vous acceptez. J'ai également comme invités plusieurs de vos amis, des peintres, des sculpteurs, des littérateurs, rien que des artistes, cela vous distraira. C'est entendu. »",
      "« C'est entendu. Alors, voilà bientôt six heures, ma voiture est en bas, je vous emmène. » « Nous irons jusqu'au Bois respirer un peu d'air. » « Vous ne repartez pas ce soir pour Volandry, au moins ? » « Non, demain seulement. » « À merveille. Comme cela, la soirée pourra se prolonger et vous verrez, nous ne nous ennuierons pas trop. »",
      "La séance levée, ils descendaient. Il est minuit. Sur le trottoir désert du boulevard Malesherbes, un homme, la mine patibulaire, rôde, les mains dans les poches, regardant, inquiet, à droite et à gauche. Cet homme, on l'a reconnu, c'est le Rougeaud.",
      "De temps en temps, il s'arrête, sentant des tiraillements dans l'estomac. Il a faim, il n'a rien mangé depuis la veille. Il s'assied sur un banc, se levant lorsque se profile, éclairé par la lueur d'un bec de gaz, la silhouette d'un passant, dont la tenue négligée le rendrait évidemment suspect. On le guettait, ses réponses pourraient paraître troubles, et si on l'arrêtait, si on le menait au poste et de là au Dépôt, il était flambé, perdu."
    ]
  }
];
