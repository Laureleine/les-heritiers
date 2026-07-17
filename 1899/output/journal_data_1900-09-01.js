// Date: 1900-09-01
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-09-01 (Version Restaurée, 31 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "International",
    "title": "Les prisonniers anglais",
    "summary": "Les Boers ont libéré 1500 prisonniers anglais au Transvaal. Si certains rejoignent l'armée à Val-d'Or, les officiers auraient été conduits à Barberton, selon les informations transmises par Lord Roberts.",
    "paragraphs": [
      "Maseru, 31 août : Les Boers ont remis en liberté les prisonniers anglais détenus à N'v. Ceux-ci marchent dans la direction de Val-d'Or pour rejoindre l'armée.",
      "Le président Kruger, avec tous les fonctionnaires du Transvaal, se trouve actuellement à Weiapruit.",
      "Londres, 31 août : Lord Roberts confirme la mise en liberté des 1500 prisonniers anglais par les Boers ; mais les officiers anglais prisonniers auraient été conduits par les Boers à Barberton."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Faits Divers",
    "title": "Nouvelles de Bloemfontein et cyclone à Mafeking",
    "summary": "Des rumeurs circulent sur la mort du commandant Dewet à Bloemfontein. Parallèlement, un violent cyclone a dévasté Mafeking, causant d'importants dégâts matériels et des pertes humaines.",
    "paragraphs": [
      "Londres, 31 août : On télégraphie du Cap au Daily Mail, à la date du 31 août : Des voyageurs arrivés hier de Bloemfontein déclarent que les Boers faits prisonniers par Baden-Powell affirment que Dewet est mort. Toutefois, on n'a aucune confirmation de cette nouvelle.",
      "Mafeking, 30 août : Un cyclone s'est abattu hier soir sur la ville et y a causé plus de mal que le siège. Des arbres, des vérandas, des toits ont été enlevés. Le camp anglais a été détruit. Il y a eu un ou deux tués et un grand nombre de blessés."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Politique",
    "title": "Au Ministère de l'Intérieur : Entrevue de M. Max Régis",
    "summary": "M. Max Régis, maire d'Alger, a sollicité le soutien du gouvernement pour son administration. Le ministre Leygues a prôné l'apaisement face aux tensions qui nuisent à la prospérité de la colonie.",
    "paragraphs": [
      "M. Max Régis, maire d'Alger, ayant demandé une audience au président du Conseil, a été reçu hier matin par M. Georges Leygues, ministre de l'Instruction publique, chargé par intérim du ministère de l'Intérieur.",
      "M. Max Régis a déclaré au ministre qu'il venait apporter au gouvernement l'affirmation de sa foi républicaine et patriotique, qu'il désirait se consacrer désormais à l'administration de la ville d'Alger et qu'il demandait au gouvernement de le seconder dans sa tâche. Mais il a ajouté que son œuvre serait rendue difficile par le maintien de certains fonctionnaires.",
      "Le ministre a répondu à M. Max Régis qu'il prenait acte de ses déclarations et qu'il les transmettrait au président du Conseil. Il a dit que le gouvernement, soucieux de la bonne gestion des affaires publiques, s'appliquerait à faciliter par tous les moyens en son pouvoir l'œuvre des administrations municipales.",
      "M. Leygues a ajouté qu'il considérait que l'agitation entretenue en Algérie depuis quelques années compromettait gravement l'avenir de la colonie et que la première des conditions pour assurer sa prospérité, c'était de renoncer à la haine et à la violence."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Mouvement Judiciaire",
    "title": "Nominations judiciaires",
    "summary": "Publication de la liste des nouvelles nominations dans la magistrature, incluant les tribunaux de Nice, Forcalquier, Toulon, Bougie, Perpignan, Rodez, Saint-Gaudens, Saint-Palais et Bagnères.",
    "paragraphs": [
      "Sont nommés : Président du tribunal de première instance de Nice, M. Truc, président du tribunal de première instance de Forcalquier.",
      "Président du tribunal de Forcalquier, M. Mathemin, substitut à Toulon.",
      "Substitut du procureur de la République à Toulon, M. Villeneuve, procureur à Bougie.",
      "Procureur de la République à Bougie, M. Muslon, substitut à Perpignan.",
      "Substitut du procureur de la République à Perpignan, M. Creissels, substitut à Rodez.",
      "Substitut du procureur de la République à Rodez, M. Morin, juge suppléant à Saint-Gaudens.",
      "Président du tribunal de Saint-Palais, M. Ribes, juge d'instruction à Bagnères.",
      "Juge au tribunal de Bagnères, M. Sieurac, juge suppléant à Lourdes."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Économie",
    "title": "Le krach de Tourcoing",
    "summary": "Un krach sur le marché aux laines de Tourcoing et Roubaix entraîne la faillite de treize maisons. Les pertes, estimées à 80 millions, résultent de spéculations imprudentes sur les cours.",
    "paragraphs": [
      "Ainsi que nous l'annoncions ces jours derniers, un krach s'est déclaré sur le marché aux laines de Tourcoing et de Roubaix.",
      "À l'heure présente, treize maisons ont dû déposer leur bilan, et l'on évalue à 80 millions de francs les pertes subies par les négociants qui spéculent sur les laines. Cet énorme déficit provient des opérations financières réalisées sur le marché des laines dont les cours ont subi, par suite des spéculations entreprises, des fluctuations tout à fait imprévues et hors de toute proportion avec la situation générale du marché.",
      "Le krach qui vient de se produire pouvait être en partie prévu. M. Motte, député de Roubaix, avait à ce sujet exprimé ses craintes au cours d'une discussion à la Chambre."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Exposition",
    "title": "Chronique de l'Exposition Universelle",
    "summary": "Au rythme de l'Exposition, les visiteurs admirent les palais depuis la Seine, tandis que les chanteurs espagnols et l'ambassadeur de Turquie célèbrent les festivités diplomatiques sous l'égide de la France.",
    "paragraphs": [
      "À l'Exposition, les étrangers contemplent du haut des passerelles de la Seine les perspectives des palais noyés dans une brume légère. Ces brouillards ont fait éclore le long des berges de nombreux peintres paysagistes.",
      "À huit heures du matin, les chanteurs espagnols, arrivés avant-hier soir à Paris, ont effectué une première visite à l'Exposition. Ils se sont rendus au pavillon royal où ils ont déposé un bouquet au pied des bustes du roi Alphonse XIII et de la reine régente d'Espagne.",
      "La fête de nuit offerte par l'ambassadeur de Turquie, à l'occasion du vingt-cinquième anniversaire de l'avènement du sultan, a eu lieu hier au pavillon ottoman, réunissant de nombreuses personnalités dont M. Lépine, M. de Selves et M. Alfred Picard."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Social",
    "title": "Revendications des gardiens à l'Exposition",
    "summary": "Les gardiens de l'Exposition réclament une équité de traitement, sollicitant du commissariat général une gratification similaire à celle accordée aux gardiens de la paix pour compenser leur labeur quotidien.",
    "paragraphs": [
      "En apprenant qu'une gratification allait être accordée aux gardiens de la paix assurant le service à l'Exposition, les gardiens de groupe et de classe ont envoyé une délégation à M. Picard pour obtenir l'extension de cette mesure en leur faveur.",
      "Nous signalerons également au commissariat général le cas des gardiens des parcs et jardins de l'Exposition, qui fournissent seize heures de travail par jour pour une solde modeste et qui demandent également une équité de traitement."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Politique",
    "title": "Les festivités pour les maires de France",
    "summary": "Le président Émile Loubet présidera une série de banquets et de réceptions grandioses organisés en l'honneur des maires de France, incluant des galas au théâtre et des visites à l'Exposition et à Vincennes.",
    "paragraphs": [
      "Le magnifique banquet donné sur la terrasse de l'Orangerie des Tuileries ne sera point la seule solennité organisée en l'honneur des maires de France. Le président Émile Loubet présidera ce banquet, suivi de réceptions à l'Hôtel de Ville et de visites à l'Exposition.",
      "Le 23 septembre, un second banquet aura lieu à l'annexe de Vincennes, suivi d'une représentation équestre au Vélodrome municipal. Le soir, des représentations de gala seront offertes aux maires au Châtelet et au théâtre Sarah-Bernhardt."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Congrès",
    "title": "Activités des congrès scientifiques",
    "summary": "Les congrès scientifiques battent leur plein : géographie, ethnographie, éducation physique et pharmacie mobilisent les experts sous la présidence de figures éminentes telles que MM. Levasseur et Millerand.",
    "paragraphs": [
      "Le congrès de géographie commerciale a tenu hier après-midi sa séance solennelle de clôture sous la présidence de M. Levasseur.",
      "Les ethnographes ont visité des musées spéciaux et entendu une conférence de M. de Milloué sur le Mexique.",
      "Le congrès de l'éducation physique a abordé, sous la présidence de M. Mosso, l'organisation du travail par rapport à l'hygiène et au développement physique.",
      "Un premier congrès international de l'industrie et du commerce des spécialités pharmaceutiques se réunira le 3 septembre sous la présidence de M. Millerand."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Exposition",
    "title": "Statistiques des entrées et Concours Hippique",
    "summary": "L'Exposition maintient une affluence soutenue, notamment à l'annexe de Vincennes où convergent les animaux pour le grand concours hippique international dont les jurys débuteront les opérations le 4 septembre.",
    "paragraphs": [
      "Le nombre des visiteurs de l'Exposition reste soutenu. L'annexe de Vincennes a attiré 9 446 visiteurs.",
      "À l'annexe de Vincennes, les arrivages d'animaux pour le grand concours hippique international se sont succédé sans interruption. Les jurys commenceront leurs opérations le mardi 4 septembre."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Colonies",
    "title": "Nouvelles coloniales (Sénégal et Madagascar)",
    "summary": "Au Sénégal, le docteur Henric quitte Saint-Louis après le décès du sous-lieutenant Die. À Madagascar, l'apparition de la toute première automobile à Tananarive suscite la stupéfaction des populations locales.",
    "paragraphs": [
      "Au Sénégal, on télégraphie de Saint-Louis que le docteur Henric, de la mission Voulet, est parti pour Marseille. Le sous-lieutenant Die est décédé de la fièvre jaune. L'état sanitaire de la ville s'améliore.",
      "À Madagascar, la première automobile est arrivée à Tananarive, au grand étonnement des indigènes."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Faits divers internationaux",
    "summary": "Actualités internationales : découvertes archéologiques en Belgique, départ du roi de Roumanie après sa visite impériale, et vives inquiétudes sanitaires liées à une épidémie de peste à Glasgow.",
    "paragraphs": [
      "Sund (Belgique) : Des terrassiers ont découvert des ossements et les restes d'une bataille du XVIIIe siècle entre Français et Anglais.",
      "Ischl : Le roi de Roumanie est parti après avoir pris congé de l'empereur François-Joseph.",
      "Glasgow : L'apparition de la peste a causé une véritable panique dans la ville, provoquant des mesures sanitaires exceptionnelles."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Arts",
    "title": "Les arts du verre",
    "summary": "Maîtres verriers contemporains et techniques antiques : Tiffany, Gallé et Gros restaurent la noblesse de l'art du verre, enrichis par les prouesses du nouveau four électrique de M. Moissan.",
    "paragraphs": [
      "Des artistes tels que Tiffany, Powel, Gallé et Henry Gros ont entrepris de remettre en honneur le verre, cet art qui végétait misérablement au rang des industries usuelles.",
      "L'histoire du verre remonte à la plus haute antiquité, et les Égyptiens comme les Tyrrhéniens excellaient déjà dans sa fabrication. L'article retrace l'évolution du vitrail et de la verrerie à travers la Renaissance, jusqu'aux prouesses techniques contemporaines permises par la science moderne et le four électrique de M. Moissan."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Social",
    "title": "Les grèves des ports",
    "summary": "Mouvements sociaux portuaires : accalmie relative à Marseille malgré le blocage des négociations. Au Havre et à Dunkerque, la situation demeure tendue par des échauffourées et des tensions avec la main-d'œuvre étrangère.",
    "paragraphs": [
      "À Marseille, on constate une certaine détente, bien que la grève générale se poursuive après le refus des ouvriers charretiers d'accepter l'arbitrage.",
      "Au Havre, la situation reste tendue avec des échauffourées aux chantiers, malgré les renforts militaires. À Dunkerque, la présence de nombreux ouvriers anglais a exacerbé les tensions, forçant leur renvoi."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Histoire",
    "title": "L'origine du monopole des tabacs sous Napoléon Ier",
    "summary": "Le monopole des tabacs instauré par Napoléon Ier en 1810-1811 naît d'une remarque impériale, lors d'un bal, sur la fortune insolente d'un fabricant de tabac parée de diamants.",
    "paragraphs": [
      "Dans un bal donné à l'occasion de son mariage avec Marie-Louise, l'empereur avait remarqué une dame couverte de diamants et s'était enquis de la profession du mari qui avait les moyens de la parer si pompeusement. On lui avait répondu qu'il était fabricant de tabacs.",
      "Quelques mois plus tard, Napoléon Ier signait les décrets des 29 décembre 1810 et 12 janvier 1811 réservant à l'État le monopole de la fabrication et de la vente des tabacs."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Faits divers",
    "title": "La grève des ports au Havre",
    "summary": "Au Havre, deux mille grévistes ont bloqué l'accès aux chantiers Normand. Un important service d'ordre, composé de cavalerie et d'infanterie, a été déployé face aux échauffourées.",
    "paragraphs": [
      "Le Havre, 31 août. Les grévistes se sont rendus, au nombre de deux mille environ, devant les chantiers Normand pour interdire aux ouvriers l'entrée des ateliers.",
      "Des bousculades nombreuses se sont produites. Le service d'ordre était assuré par quarante chasseurs à cheval, trente gendarmes et trois compagnies d'infanterie.",
      "Les grévistes ont ensuite repris le chemin de la Bourse du travail. Il a été décidé que la loi sur les attroupements serait appliquée à partir de demain."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Justice",
    "title": "Confrontations des inculpés à la prison de la Santé",
    "summary": "Hier, à la prison de la Santé, deux confrontations judiciaires ont eu lieu concernant le criminel Godefroy Asmus et le chiffonnier Émile Lemercier, en présence du juge d'instruction.",
    "paragraphs": [
      "Deux confrontations ont eu lieu, hier matin, à la prison de la Santé. Godefroy Asmus, ce charretier qui a assassiné sa maîtresse, Marie Valin, a été confronté au cadavre de sa victime en présence du juge d'instruction. Il a avoué avoir tué dans un accès de rage et de jalousie.",
      "Après, on a amené Émile Lemercier, dit Mercier, chiffonnier, accusé d'avoir tué Jean Buzelier. Lemercier a déclaré ne plus se souvenir des faits en raison de son état d'ivresse ce jour-là.",
      "Les confrontations étaient terminées à dix heures et demie du matin et les deux inculpés ont été reconduits à la prison."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits divers",
    "title": "Sauvetage d'enfants sur les quais de la Seine",
    "summary": "Deux jeunes enfants, Marcel Roccourt et Salomon, sont tombés accidentellement dans la Seine. Ils furent sauvés de la noyade par l'intervention courageuse d'un garçon laitier, M. Victor Jessaume.",
    "paragraphs": [
      "Sur les bords de la Seine, deux enfants, Marcel Roccourt et Salomon, qui se donnaient la chasse, tombèrent simultanément à l'eau du haut du quai de l'Hôtel-de-Ville.",
      "Un passant, M. Victor Jessaume, garçon laitier, se porta à leur secours et parvint à les ramener sur la berge alors qu'ils respiraient encore."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits divers",
    "title": "Le drame de la cité Popincourt",
    "summary": "Drame tragique cité Popincourt : le musicien Laurest Joannet s'est suicidé après avoir violemment agressé sa compagne et la fille de celle-ci. Tous les protagonistes ont été hospitalisés à l'hôpital Saint-Antoine.",
    "paragraphs": [
      "Laurest Joannet, musicien ambulant, s'est suicidé en se jetant par la fenêtre après avoir sauvagement agressé sa compagne, Émilie Quintard, et la fille de celle-ci, avec un fer à souder, à la suite de violentes scènes de ménage.",
      "Le malheureux est mort à l'hôpital Saint-Antoine où il avait été transporté. Les deux femmes blessées sont également soignées à l'hôpital."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits divers",
    "title": "Arrestation de la bande des dévaliseurs de bureaux de tabac",
    "summary": "La police a démantelé la bande dite du « Fin Boulot », spécialisée dans les vols de bureaux de tabac. Les quatre membres du groupe ont été écroués à la prison de la Santé après la saisie d'un important butin.",
    "paragraphs": [
      "Le service de la sûreté a réussi à retrouver les auteurs du vol chez M. Herin, rue de Turenne. Les membres de la bande, dite du « Fin Boulot », ont été arrêtés : Maurice Rust, Lucie Bayle, François Bonnefon et Jean Sterck.",
      "Une perquisition a permis de découvrir de nombreux objets volés. M. Flory, juge d'instruction, les a fait écrouer à la prison de la Santé."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits divers",
    "title": "Démantèlement d'une bande de voleurs internationaux",
    "summary": "Un habitant de la rue de l'Entrepôt a permis l'arrestation de deux malfaiteurs, Henri Schneider et Edwards Vorsanger, surpris en flagrant délit. La Sûreté recherche activement leur complice, Henriette Keller.",
    "paragraphs": [
      "Un habitant de la rue de l'Entrepôt a permis l'arrestation de deux individus, Henri Schneider et Edwards Vorsanger, surpris en flagrant délit de cambriolage. Ils cherchaient en réalité à forcer le coffre-fort de la Société de réintégration des Alsaciens-Lorrains.",
      "Le service de la Sûreté recherche activement leur complice, une nommée Henriette Keller."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Social",
    "title": "Grève des mariniers de la Seine",
    "summary": "Les mariniers de la basse Seine ont voté la grève générale. Ils exigent une revalorisation salariale pour l'ensemble du personnel navigant ainsi qu'une indemnité fixe pour chaque voyage et séjour.",
    "paragraphs": [
      "Les mariniers de la basse Seine viennent de décider la grève générale. Ils demandent une majoration des traitements pour les capitaines, mécaniciens, chauffeurs, matelots et mousses.",
      "Pour le pilotage, ils réclament cent francs par voyage aller et retour, ainsi qu'une indemnité journalière pour le séjour."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits divers",
    "title": "Meurtre à Bonnevaux",
    "summary": "Un crime odieux a été commis au hameau des Cinq-Fontaines. La femme Cettour a été retrouvée étranglée dans son lit. Le vol semble être le mobile principal, plusieurs effets de valeur ayant disparu.",
    "paragraphs": [
      "Un crime a été commis pendant la nuit au hameau des Cinq-Fontaines. La femme Cettour a été découverte étranglée dans son lit, une corde serrée autour du cou.",
      "Le mobile du crime semble être le vol ; une somme d'argent a disparu et plusieurs meubles ont été méthodiquement fouillés."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Spectacles",
    "title": "Actualités des théâtres parisiens",
    "summary": "La Comédie-Française connaît un vif succès au Trocadéro avec ses matinées révolutionnaires. L'Opéra-Comique et les Variétés affichent une belle fréquentation ce soir.",
    "paragraphs": [
      "La matinée donnée par la Comédie-Française au Trocadéro et consacrée aux œuvres de la Révolution a dépassé le chiffre de 5 000 francs de recette.",
      "À l'Opéra-Comique, ce soir, représentation de Manon.",
      "Aux Variétés, La Belle-Hélène a retrouvé la vogue des plus beaux jours."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Concerts et divertissements",
    "title": "Premières et débuts dans les salles parisiennes",
    "summary": "Les scènes parisiennes multiplient les premières. Fregoli achève sa série à l'Olympia avant une grande tournée américaine, tandis que les cabarets et cirques présentent de nouveaux numéros.",
    "paragraphs": [
      "Au théâtre Marigny, première représentation d'Une Fête à Séville, pièce mimée de M. René Bréviaire, musique de M. Georges Palicct, avec Mme Otero et M. Paul Franck. Débuts de Schefler, Felsina et de Diana la belle.",
      "Au Casino de Paris, débuts de Trentanow, des Dayton, du Boomerang, de Rose d'Arkansas, des Aquamarinot, de Farnum et Seymour, sauteurs comiques, et des Takitos, musiciens excentriques.",
      "Aux Folies-Bergère, plusieurs débuts, dont ceux de la chanteuse et danseuse anglaise miss Cissy Fitz-Gerald.",
      "Au cirque Medrano, réouverture.",
      "Fregoli, engagé depuis longtemps déjà pour une grande tournée en Amérique, ne pourra plus donner qu'une quinzaine de représentations à l'Olympia. Avis à ceux qui n'ont pas encore applaudi cet artiste prodigieux et unique.",
      "Demain, à deux heures et demie, matinée pour les familles. En raison des complications de la mise en scène, la première de la revue de Parisiana, Y a-t-il la femme, est retardée.",
      "Demain dimanche, en matinée et en soirée, dernières représentations de La Dame de chez Maxim, le joyeux vaudeville.",
      "À la Scala, diverses rentrées viennent d'avoir lieu, parmi lesquelles celle de Max Dearly, qui a repris avec brio les rôles de Cambronne et de M. Picard qu'il avait créés dans la revue.",
      "Dans les nouvelles scènes récemment ajoutées, Berka obtient le plus vif succès avec La Doucheuse, rôle délicat qu'elle interprète avec une grâce exquise.",
      "À l'Eldorado, deux nouvelles scènes ont été ajoutées : La Poupée de Gene, création inénarrable de Dranem, et le Panorama Marchand, enlevé avec fougue par Dona. Elles ont obtenu le succès de gaieté habituel à Paris-Plaisirs."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Actualités coloniales",
    "title": "Visite du roi de Luang-Prabang",
    "summary": "Tiao Maha Onparat, roi de Luang-Prabang, a réitéré sa visite à l'Hippodrome, séduit par la qualité du spectacle parisien qu'il a tenu à admirer une seconde fois avant son retour en Indo-Chine.",
    "paragraphs": [
      "Tiao Maha Onparat, roi de Luang-Prabang, qui avait déjà assisté à l'une des représentations de l'Hippodrome ces jours derniers, a été tellement satisfait de sa soirée que, avant son départ pour l'Indo-Chine, il a tenu à applaudir de nouveau le très beau spectacle de l'Hippodrome."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Sports",
    "title": "Cyclisme : Cordang en piste",
    "summary": "Le célèbre stayer hollandais Cordang se prépare activement à Maestricht en vue du prochain Bol d'Or au Vélodrome municipal de Vincennes, où il représentera une concurrence sérieuse pour Huret et Walters.",
    "paragraphs": [
      "Le réputé stayer hollandais Cordang se propose de venir disputer à Paris la course de vingt-quatre heures du Bol d'Or, les 15 et 16 septembre, au Vélodrome municipal de Vincennes. Il s'entraîne de façon très sérieuse à Maestricht.",
      "Ce sera, pour les coureurs Huret et Walters, un rude concurrent."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Sports",
    "title": "Grand-Prix d'Allemagne",
    "summary": "Les demi-finales du Grand-Prix d'Allemagne se tiendront demain à Berlin. Le cycliste français Jacquelin est largement pressenti comme le grand favori de cette compétition internationale.",
    "paragraphs": [
      "Les demi-finales du Grand-Prix d'Allemagne, qui se disputeront demain à Berlin, sont ainsi composées : première demi-finale : Arend, Ellegaard, Tommaselli, Green ; deuxième demi-finale : Huber, Meyers, Protin, Heiler ; troisième demi-finale : Jacquelin, Seidl, Cooper, Kaeser.",
      "Le premier de chacune de ces demi-finales sera qualifié pour la finale. Un repêchage sera couru ensuite entre les battus. Dans les milieux sportifs berlinois, on s'accorde à donner Jacquelin comme favori."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Sports",
    "title": "Lutte : Paul Pons tombé",
    "summary": "Le lutteur français Paul Pons a été défait en vingt-huit minutes par le champion turc Kara-Ahmed lors d'une rencontre disputée à Hambourg, confirmant la forme étincelante de ce dernier.",
    "paragraphs": [
      "Le lutteur français Paul Pons vient d'être tombé en 28 minutes à Hambourg par Kara-Ahmed, le lutteur turc, vainqueur du dernier championnat de lutte à Paris en décembre dernier."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Chronique agricole",
    "title": "État des récoltes et bulletin commercial",
    "summary": "Le marché viticole affiche des perspectives encourageantes dans le Midi, tandis que les régions cidricoles prévoient une récolte exceptionnelle pour la saison.",
    "paragraphs": [
      "Les vins : Dans le Gard, on a payé les raisins de 5 à 6 francs pour les aramons. Dans l'Hérault, on compte sur un bon rendement. Dans l'Aude, les vendanges pour les aramons et carignans sont prévues pour le 15-20 septembre. En Algérie, la situation est stable.",
      "Pommes à cidre : Dans la Seine-Inférieure, l'Orne et l'Eure, on prévoit une récolte très abondante, voire exceptionnelle."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Main Gauche - Troisième partie",
    "summary": "Après une réconciliation incertaine, Janck et Gerarden rentrent à l'auberge. Ils y surprennent une violente altercation entre l'aubergiste Bedford, son épouse Juanita et le brigand José, menaçant la signora Lydie de Ratisbonne.",
    "paragraphs": [
      "Les deux hommes, redevenus amis jusqu'à ce qu'ils en vinssent peut-être encore à faire usage du revolver, rentrèrent à l'auberge.",
      "Janck fronça le sourcil. Suivi de Gerarden, il se dirigea vivement vers la porte du fond, où ils surprirent une vive discussion entre l'aubergiste Bedford, sa femme Juanita et le brigand José.",
      "Janck et Gerarden, comprenant l'espagnol, finirent par intervenir pour tenter de sauver la signora Lydie de Ratisbonne."
    ]
  }
];
