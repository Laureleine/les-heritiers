// Date: 1900-11-10
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-11-10 (Version Restaurée, 66 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille",
    "summary": "Découvrez le nouveau drame poignant de l'auteur, une fresque humaine et sincère où chaque lectrice pourra se retrouver dans le destin de Marie-Madeleine.",
    "paragraphs": [
      "Jamais drame plus poignant n'est tombé de la plume de l'auteur de tant de romans présents à toutes les mémoires.",
      "Puisé dans la vie réelle, il est fertile en émotions profondes, et plus d'une de nos lectrices se reconnaîtra sous les traits de cette charmante et malheureuse Marie-Madeleine, qu'elles aimeront comme un reflet d'elles-mêmes, de leurs dangers, de leurs misères et de leurs joies."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Économie et Social",
    "title": "L'atelier familial",
    "summary": "L'essor de l'électricité à domicile favorise le renouveau des ateliers familiaux, transformant les méthodes de travail industriel en France et à l'étranger.",
    "paragraphs": [
      "Longtemps encore après que l'Exposition aura disparu, on évoquera par le souvenir le spectacle de cette cité de merveilles.",
      "Une statistique toute récente démontre que très nombreux sont en Suisse et en Allemagne les ateliers familiaux qui fonctionnent grâce à la distribution de l'électricité. Il n'y a presque plus de machines-outils mues par la vapeur, le gaz ou le pétrole.",
      "La distribution à un prix peu élevé de la force motrice à domicile a permis de reconstituer les ateliers familiaux.",
      "À Saint-Étienne, depuis que la force motrice électrique est distribuée à domicile, le sort d'une partie de la classe laborieuse a changé. Le travail en fabrique est abandonné de plus en plus.",
      "Il faut encore citer l'initiative prise à Troyes, où pour rendre à l'industrie de la bonneterie son importance d'autrefois, on serait résolu, paraît-il, à distribuer des métiers dans les familles.",
      "La science a permis de capter les forces de la nature. On est parvenu à industrialiser cette énergie éparse, jusqu'ici inutilisée.",
      "Il y aurait, semble-t-il, une enquête intéressante à faire dans toute la France au sujet de la reconstitution, partout où le permet la nature de l'industrie, de ces ateliers de famille."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Fruit Défendu",
    "summary": "Régine, bouleversée par une lettre inattendue de Jean Villaurier, se résout à quitter Paris, déchirée par un destin imposé par son père.",
    "paragraphs": [
      "Une pensée de derrière la tête. Jérôme ne pensait plus à jouer. On négligeait le tric-trac et la manille. Mais il venait, aimant Rose.",
      "Elle lui donna une enveloppe dans laquelle se trouvaient quelques papiers. Sur l'enveloppe, elle avait écrit : 'N'ouvrir que dans deux jours'.",
      "Lorsque Régine rentra dans sa chambre, elle aperçut tout à coup sur sa table une lettre. L'écriture de l'enveloppe la bouleversa. C'était l'écriture de Jean Villaurier.",
      "La lettre disait : 'Je sais que vous allez partir; je sais que vous allez quitter Paris pour ne plus jamais y revenir sans doute, c'est la volonté formelle de votre père...'",
      "Elle y rêva toute la nuit. Et le matin de ce lundi, le matin de ce dernier jour, quand elle se leva, sa résolution était prise. Elle était vaincue.",
      "La matinée s'écoula. Elle ne put déjeuner. Son cœur était gros. Rose l'observait.",
      "Il donna des ordres, fit apporter des fleurs. Il passa la matinée à ces préparatifs. À deux heures, il fut devant l'église."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Conseil des Ministres",
    "summary": "Réunion du Conseil des ministres à l'Élysée sous la présidence de M. Loubet, axée sur les affaires extérieures et le prochain budget.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin à l'Élysée, sous la présidence de M. Loubet.",
      "Le ministre des Affaires étrangères a entretenu le Conseil des affaires extérieures en cours.",
      "Le Conseil s'est ensuite occupé du budget dont le gouvernement demandera la discussion au début de la semaine prochaine."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Chronique Politique",
    "title": "La situation politique",
    "summary": "Malgré les débats parlementaires, le gouvernement conserve une majorité solide, aucun successeur n'étant en mesure de reprendre le flambeau.",
    "paragraphs": [
      "Pour un observateur attentif et impartial, malgré la confusion apparente et la longueur exagérée des débats d'avant-hier, la volonté de la Chambre se dégage clairement.",
      "Par trois fois, à des majorités allant de 50 à plus de 100 voix, la Chambre a témoigné sa confiance au gouvernement.",
      "D'ailleurs, et c'est là ce qui caractérise encore davantage la situation, personne dans le Parlement n'entrevoit quel pourrait être l'homme politique en état d'assumer demain l'héritage de la présidence du Conseil."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Catastrophe ferroviaire en Allemagne",
    "summary": "Hier soir, une collision ferroviaire entre Francfort et Odenbach a provoqué l'explosion d'un wagon de gaz. Le bilan provisoire est estimé à six ou huit victimes parmi les passagers.",
    "paragraphs": [
      "Le train de voyageurs n° 238 a tamponné hier soir, à 10 h 30, entre Francfort et Odenbach, le train n° 42, qui était arrêté sur la voie.",
      "Le dernier wagon de ce convoi a été entièrement broyé sous la violence du choc, provoquant l'explosion du gazomètre. On suppose que six ou huit personnes ont péri dans la catastrophe."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Catastrophe ferroviaire en Belgique",
    "summary": "Un grave accident ferroviaire a eu lieu ce matin à Braine-l'Alleud. Un convoi de marchandises a pris en écharpe un train de voyageurs, dont la locomotive a été sectionnée.",
    "paragraphs": [
      "Un terrible accident de chemin de fer est survenu ce matin à Braine-l'Alleud. Le train quittant Baulers à 5 heures 25 du matin a été pris en écharpe par un train de marchandises circulant sur la même ligne.",
      "Le choc entre les deux convois fut d'une violence épouvantable ; la machine du train de voyageurs a été littéralement coupée en deux par la collision."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Social",
    "title": "Le mariage des sous-officiers",
    "summary": "Le Petit Parisien prévoit l'extension aux sous-officiers des mesures du général André supprimant l'apport dotal pour les mariages militaires, afin d'assurer une équité sociale dans l'armée.",
    "paragraphs": [
      "Aussitôt après la publication de la circulaire du général André, supprimant pour le mariage des officiers l'obligation de l'apport dotal, le Petit Parisien a fait prévoir qu'un texte spécial ne tarderait pas à étendre ces dispositions libérales aux sous-officiers rengagés et commissionnés.",
      "Il a été reconnu qu'il serait contraire à la logique, à la justice et à la considération due au grade, qu'une jeune fille, à qui la circulaire du 1er octobre dernier permet d'épouser un capitaine, demeure trop pauvre pour devenir la femme d'un sergent."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Douaniers et braconniers",
    "summary": "Deux douaniers de la brigade d'Ascq ont été violemment agressés par des braconniers. Blessé à la tête, le douanier Lépagnot a fait preuve d'un grand courage en alertant les secours par des tirs.",
    "paragraphs": [
      "Deux douaniers de la brigade d'Ascq, MM. Jules Durieux et Oscar Lépagnot, se trouvaient en service, dans la nuit de mercredi à jeudi, aux portes de Lille, lorsqu'ils furent attaqués par des braconniers.",
      "Le malfaiteur, se voyant pris, empoigna le canon de son fusil qui était démonté et en frappa le douanier Lépagnot à la tête avec une grande violence.",
      "Quoique souffrant horriblement de ses blessures, le brave douanier eut encore la force de tirer en l'air plusieurs coups de revolver pour appeler du secours."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "International",
    "title": "Le Président Krüger en France",
    "summary": "Mme Eloff, petite-fille du président Krüger, est arrivée à Marseille. Elle témoigne de la situation critique des Anglais en Afrique du Sud tandis que le Midi soutient la cause des Boërs.",
    "paragraphs": [
      "Par le paquebot Kanzler, qui est entré à midi dans le port de la Joliette, est arrivée Mme Eloff, petite-fille du président Krüger.",
      "Mme Eloff précise que le président Krüger n'est accompagné à bord du Gelderland que de trois personnes. Elle ajoute que la situation militaire est excessivement critique pour les Anglais.",
      "Hier soir, au Capitole à Toulouse, a eu lieu une importante réunion en vue de la constitution d'un comité régional du Midi pour l'indépendance des Boërs."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "International",
    "title": "Le Livre Jaune sur la Chine",
    "summary": "Le Parlement a reçu un Livre jaune de 414 pièces détaillant les événements de Chine, témoignant de l'activité prévoyante de la diplomatie française et de son autorité constante en Extrême-Orient.",
    "paragraphs": [
      "Les membres du Parlement viennent de recevoir la distribution d'un Livre jaune sur les affaires de Chine. Cet important recueil comprend 414 pièces et nous offre le tableau le plus complet des événements survenus en Extrême-Orient.",
      "On peut dire que le Livre jaune atteste à la fois l'activité prévoyante de notre ministre des Affaires étrangères et l'autorité continue de notre diplomatie."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "Après la prise de Pékin",
    "summary": "Suite à la prise de Pékin, les puissances débattent du devenir diplomatique. La France, par M. Delcassé, impose des bases fermes : punition des coupables, garanties militaires et occupation stratégique.",
    "paragraphs": [
      "Avec la délivrance des légations, Pékin ouvre une nouvelle ère diplomatique. L'entente, réalisée jusqu'ici, était difficile à perpétuer, et les circonstances devaient désormais nous obliger à savoir avec qui l'on traiterait, la cour chinoise ayant abandonné la capitale, et quelles garanties l'on exigerait.",
      "Le 26 août, la Russie propose, pour faciliter les négociations, de transférer les légations de Pékin à Tien-Tsin. L'Allemagne riposte, revendiquant avant tout la punition des auteurs des massacres. D'autre part, l'Angleterre n'est pas disposée à évacuer Pékin.",
      "La France, poursuivant une politique déterminée, intervient alors. Par sa circulaire du 30 septembre, M. Delcassé indique comme bases des pourparlers à engager avec les plénipotentiaires chinois : la punition des coupables, le maintien de l'interdiction d'importer des armes, le paiement d'indemnités, la constitution à Pékin d'une garde des légations, le démantèlement des forts et l'occupation des points stratégiques entre cette ville et la capitale.",
      "La note du quai d'Orsay réunit, quant au fond, l'adhésion de toutes les chancelleries et reçoit l'approbation des ministres des différentes nations à Pékin."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "L'accord Anglo-Allemand",
    "summary": "Le Livre jaune documente l'accord anglo-allemand d'octobre 1900 sur l'intégrité chinoise. M. Delcassé y apporte l'adhésion française tout en se réservant le droit d'agir si l'intégrité était menacée.",
    "paragraphs": [
      "La première partie du Livre jaune se termine par les divers documents afférents à l'accord anglo-allemand du 16 octobre. On se rappelle que cette convention visait le maintien de la « porte ouverte », c'est-à-dire de la liberté du commerce en Chine, la défense de l'intégrité territoriale de l'empire, et aussi l'entente éventuelle des deux signataires au cas où une tierce puissance revendiquerait en Extrême-Orient des avantages particuliers.",
      "Par une note du 10 octobre 1900, M. Delcassé adhère pleinement aux deux premiers articles, mais il déclare que si l'intégrité chinoise était menacée par des circonstances nouvelles, il agirait."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "Au Yunnan",
    "summary": "Le Livre jaune met en lumière l'action protectrice de la France au Yunnan. Il souligne l'héroïsme du consul François lors de sa périlleuse retraite vers la frontière indo-chinoise.",
    "paragraphs": [
      "Le Livre jaune traite aussi de l'action de notre gouvernement dans le sud de la Chine. On sait qu'à Shanghai comme à Canton et à Hong-Kong, notre influence s'est fait légitimement sentir pour prévenir les troubles redoutés.",
      "La situation du Yunnan était délicate, vu la contiguïté de cette province et du Tonkin. Aussi le recueil qui vient d'être distribué consacre-t-il une de ses grandes divisions aux événements qui se sont déroulés autour de Yunnan-Sen.",
      "Mais ici, nous revenons à des faits connus. Nul n'a oublié en effet l'héroïsme que déploya notre consul en cette ville, M. François, et le succès de son énergique retraite sur notre frontière indo-chinoise avec les Français, commerçants ou missionnaires, dont il avait la charge."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "Le journal de M. Pichon",
    "summary": "Le rapport de M. Pichon retrace le siège atroce des légations à Pékin. Un récit historique sur la fourberie des troupes impériales et le courage des défenseurs jusqu'à la délivrance finale.",
    "paragraphs": [
      "On trouve enfin dans le Livre jaune un document du plus haut intérêt : c'est le rapport et le journal de M. Pichon (du 20 juin au 14 août), qui ne comprend pas moins de quarante pages de format in-octavo. Voici comment notre ministre en Chine résume l'effroyable situation où se trouvèrent les Européens renfermés dans Pékin.",
      "Du 20 juin au 14 août, les légations ont été assiégées par les troupes impériales. Elles ont eu à lutter contre l'incendie, les fusillades, la canonnade et les mines. Les escortes qui les défendaient se composaient (officiers compris) de 409 hommes, auxquels on peut ajouter 80 volontaires.",
      "On peut évaluer à 50 000 soldats le chiffre des troupes contre lesquelles notre poignée d'étrangers a dû combattre. Ces troupes, munies de fusils Mauser ou Mannlicher, disposaient d'une artillerie considérable. Tout serait à citer dans ce dramatique récit où éclate à tout instant l'odieuse fourberie des Chinois et l'admirable courage de leurs victimes.",
      "Bornons-nous à reproduire le récit de la délivrance : À huit heures du matin les coups de canon se multiplient. Le bombardement se précipite. C'est du délire qui s'empare de nous quand, vers trois heures de l'après-midi, quelqu'un se précipite à la légation d'Angleterre en criant : « Les troupes sont dans la ville chinoise ! » On court pèle-mêle, on se jette au-devant des libérateurs, on pousse des hourras, on pleure, on s'embrasse.",
      "La légation de France est précipitamment évacuée par les derniers Chinois. Le capitaine Darcy en prend possession complète avec son collègue du détachement autrichien. Au lever du jour, on m'avertit qu'on entend le clairon de nos troupes. Je me lève pour recevoir le général Frey et M. d'Anthouard. Ce qu'il était presque interdit de croire est accompli. Nous sommes sauvés."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "Les événements de Chine",
    "summary": "Li-Hung-Chang, pris en étau entre les exigences des alliés et l'intransigeance de la cour impériale, semble perdre l'espoir d'un accord rapide alors que les troupes impériales peinent à organiser une résistance crédible.",
    "paragraphs": [
      "D'après les derniers télégrammes, Li-Hung-Chang, placé entre les exigences des alliés et les refus obstinés de la cour impériale, aurait perdu tout espoir d'arriver à un arrangement.",
      "Faisons remarquer toutefois qu'il s'agit ici d'une information de source anglaise, et ajoutons que, dans l'état de désorganisation où se trouvent les forces chinoises, la cour impériale ne pourrait opposer aux justes demandes des alliés que des objections motivées en vue de gagner du temps.",
      "La lutte contre les Boxers se poursuit ; on ne croit pas que les rebelles puissent parvenir à rassembler des troupes suffisantes pour résister aux alliés."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "Le désarmement de la flotte chinoise",
    "summary": "Faute de ressources financières, détournées vers Si-Ngan-Fou par ordre impérial, la flotte chinoise se voit contrainte de congédier ses marins et de désarmer ses navires sous quinze jours.",
    "paragraphs": [
      "Francfort, 9 novembre : On mande de Ché-Fou à la Gazette de Francfort qu'un amiral chinois a écrit de Wei-Haï-Wei à un instructeur européen que la cour impériale a ordonné d'envoyer tout l'argent à Si-Ngan-Fou. Par conséquent, on ne dispose plus des fonds nécessaires pour subvenir aux besoins de la flotte chinoise et le gouvernement a résolu de congédier les marins et de désarmer dans quinze jours les navires de guerre."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "Les projets de la Cour",
    "summary": "Li-Hung-Chang désespère d'un règlement diplomatique. La cour impériale, craignant une expédition contre Si-Ngan-Fou, organise sa défense et ordonne la répression des bandes insurgées dans les provinces.",
    "paragraphs": [
      "Londres, 9 novembre : On mande de Shanghai que Li-Hung-Chang a télégraphié qu'il désespérait d'un règlement de la situation. Il déclare qu'il est inutile de s'attendre à ce que la cour consente à l'exécution de Yi-Hien et de Tung-Fu-Siang, et qu'il est également inutile de demander aux puissances de modérer leurs exigences.",
      "La cour se préparerait de nouveau à fuir dans le Tzé-Chuen, où il lui sera facile de s'établir dans une position fortifiée et inaccessible aux alliés. Une armée serait organisée pour couvrir sa retraite.",
      "Londres, 9 novembre : Les journaux chinois de Shanghai annoncent que la cour, craignant l'envoi d'une expédition à Si-Ngan-Fou, a envoyé des troupes à Ouang-Té-Fou. Un édit ordonne à Li-Hung-Chang de poursuivre et de punir les bandes insurgées qui, le mois dernier, ont tué le magistrat de Hwaï-Chow-Hsièn et sa famille."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "La lutte contre les Boxers",
    "summary": "À Canton, les menaces contre les missionnaires et officiels étrangers se multiplient via des placards séditieux, plaçant la vie des chrétiens et des représentants diplomatiques sous une grave menace.",
    "paragraphs": [
      "Hong-Kong, 8 novembre : Les instructions données par le vice-roi de Canton aux magistrats de Hoï-Ping pour la suppression des placards hostiles aux étrangers n'ont produit aucun résultat. Le placard menace les missionnaires et divers personnages chinois qu'ils accusent de trahison et d'aider les rebelles.",
      "De plus, dit le placard, le commissaire des douanes et l'un des missionnaires ont fait venir des armes dans le but de s'emparer de Fat-Chan et de Canton. En agissant ainsi, les missionnaires ont rompu les traités, et la vie des chrétiens ne sera plus respectée. La société met à prix les têtes du commissaire des douanes, de quatre missionnaires et de trois personnages chinois."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "Autour de Pao-Ting-Fou",
    "summary": "Des heurts diplomatiques et militaires surviennent entre contingents alliés près de Pao-Ting-Fou, bien que la situation ait été apaisée et que quatre Italiens aient été délivrés des mains des Boxers.",
    "paragraphs": [
      "Rome, 9 novembre : Le correspondant de la Tribuna à Pékin prétend que les commandants français ont protesté parce que les contingents italien et allemand avaient attaqué les Chinois près de Pao-Ting-Fou, alors que ces derniers se trouvaient sous la protection des Français.",
      "Il raconte qu'un zouave français ayant tué, par erreur, un marin italien, il en résulta une vive agitation, mais que l'intervention des officiers réussit à calmer la surexcitation. Il annonce enfin que quatre Italiens prisonniers des Boxers ont été délivrés."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "Les Russes en Mandchourie",
    "summary": "À la suite de l'installation du pavillon russe à la station de Ching-Wang-Tao, une altercation diplomatique entre un officier russe et un officier anglais a été signalée par les dépêches en provenance de Shanghai.",
    "paragraphs": [
      "Londres, 9 novembre : On annonce de Shanghai qu'à la date du 7, le pavillon russe a été hissé à la station de Ching-Wang-Tao. Un incident fâcheux s'est produit : il s'agit d'une altercation survenue entre un officier russe et un officier anglais."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "Le sort des fonctionnaires chinois",
    "summary": "Selon le correspondant du Daily Mail, le gouvernement chinois a garanti que les autorités locales, incluant les vice-rois du Yang-Tsé et le tao-taï de Shanghai, seraient maintenues dans leurs fonctions sans être inquiétées.",
    "paragraphs": [
      "Londres, 9 novembre : Le correspondant du Daily Mail à Shanghai se dit informé que le gouvernement chinois a donné l'assurance formelle que les vice-rois du Yang-Tsé et le tao-taï de Shanghai ne seront ni déplacés, ni inquiétés."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "Le courrier de Chine",
    "summary": "Le courrier de Chine, l'Indus, est arrivé à Marseille avec à son bord des passagers ayant vécu les récents drames de Pékin, dont des diplomates, des ingénieurs et la femme de chambre de Mme Pichon, durement éprouvée.",
    "paragraphs": [
      "Marseille, 9 novembre : L'Indus, courrier de Chine, est arrivé cet après-midi. À bord se trouvaient plusieurs personnes ayant été mêlées de près aux drames de Pékin, notamment la femme de chambre de Mme Pichon, qui a assisté à toutes les phases du siège des légations. La pauvre femme a été tellement éprouvée par la peur que ses facultés mentales ont été sérieusement atteintes.",
      "Les autres passagers sont la femme et le fils de M. Berteaux, interprète de la légation française à Pékin ; le commandant d'état-major Amy ; les ingénieurs Hiron et Gabiaud ; Paterson, surintendant de police à Shanghai, et trois colonels anglais."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Social / Politique",
    "title": "L'émigration Boer à Madagascar",
    "summary": "La presse préconise l'accueil de familles boërs à Madagascar. Ces agriculteurs, réputés sobres et travailleurs, pourraient efficacement contribuer à la mise en valeur des hauts plateaux de la grande île africaine.",
    "paragraphs": [
      "Nous avons à plusieurs reprises émis le souhait que le gouvernement pût seconder efficacement les résolutions de ceux des Boërs qui, cédant à la loi du plus fort, se résigneraient à transporter en terre française leurs foyers et leurs qualités d'agriculteurs. Une centaine de familles transvaaliennes seraient disposées à s'installer à Madagascar si on leur offrait le passage gratuit.",
      "Combien de fois n'avons-nous pas signalé que le principal obstacle à la mise en valeur de la grande île africaine était le peu de densité de sa population ! De quel précieux secours ne serait donc pas, sur les hauts plateaux presque déserts de Madagascar, la venue d'émigrants boërs sobres et laborieux ?"
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Succès anglais",
    "summary": "Le colonel Le Gallais a infligé une défaite aux forces boërs près de Bothaville. Malgré la prise d'un important matériel et de nombreux prisonniers, les chefs Steijn et Dewet ont réussi à s'échapper.",
    "paragraphs": [
      "Londres, 9 novembre : Lord Roberts télégraphie que le colonel Le Gallais a surpris les forces boërs dans la nuit du 5 courant, à trois milles au sud de Bothaville. L'engagement, très vif, a duré cinq heures. Les Boërs ont subi une défaite complète.",
      "Nous avons pris deux canons de gros calibre, quatre canons Krupp, un Maxim et une pièce automatique. Nous avons fait 100 prisonniers ; les Boërs ont eu 25 morts. Steijn et Dewet, qui étaient avec les forces boërs, se sont enfuis en toute hâte. Nos pertes sont : le colonel Le Gallais, un capitaine, un lieutenant et huit hommes tués ; sept officiers et vingt-huit hommes blessés."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Nouvelles de Pretoria",
    "summary": "À Pretoria, le général Kitchener gagne Johannesburg. Près de Belfast et à Klipsfontein, des accrochages signalent la poursuite des hostilités contre les Boërs, entraînant pertes humaines et captures.",
    "paragraphs": [
      "Pretoria, 8 novembre : Le général Kitchener s'est rendu à Johannesburg. Une patrouille canadienne a eu un officier tué près de Belfast. À Klipsfontein, un petit poste anglais a été attaqué par quinze Boërs ; deux soldats ont été tués, les autres faits prisonniers puis relâchés."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "Démission au Mozambique",
    "summary": "Le gouverneur du Mozambique, le général Gorgano, a transmis sa démission au gouvernement de Lisbonne, sous la pression directe des autorités consulaires britanniques à Lourenço-Marquès.",
    "paragraphs": [
      "Londres, 9 novembre : On mande de Lourenço-Marquès que le général Gorgano, gouverneur du Mozambique, a envoyé sa démission à Lisbonne, en raison de la pression exercée sur lui par le consul anglais."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Changements dans l'armée",
    "summary": "À la suite d'une lettre adressée à ses subordonnés, le commandant du 3e arrondissement a été mis en disponibilité par un décret ministériel, officialisant son retrait d'emploi.",
    "paragraphs": [
      "Le commandant du 3e arrondissement, ayant laissé à ce sujet une lettre aux officiers placés sous ses ordres, a vu le ministre de la Guerre faire approuver un décret le mettant en disponibilité par retrait d'emploi."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Les gardiens de batterie",
    "summary": "Le ministère de la Guerre projette de remplacer les gardiens de batteries, majoritairement des sous-officiers retraités, par du personnel en activité, menaçant la situation de deux cents familles.",
    "paragraphs": [
      "Le ministre de la Guerre serait sur le point de signer un décret ordonnant le remplacement des gardiens auxiliaires de batteries, en fonctions depuis 1875 et choisis parmi les sous-officiers retraités, par des sous-officiers en activité. Cette mesure mettrait sur le pavé deux cents pères de famille."
    ]
  },
  {
    "id": 30,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "L'expédition du Touat",
    "summary": "Une activité fébrile règne dans les magasins de la province d'Oran en vue de l'expédition du Touat. Le début de la marche des troupes est pressenti pour le 15 décembre prochain.",
    "paragraphs": [
      "Une vive activité règne dans les magasins de vivres et de matériel de la province d'Oran, en vue de l'expédition du Touat. On croit que la marche commencera le 15 décembre."
    ]
  },
  {
    "id": 31,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Lancement du Mikasa",
    "summary": "Le cuirassé japonais Mikasa, lancé à Barrow, s'impose comme une merveille navale de 15 000 tonnes, doté d'une puissance de feu redoutable capable de projeter 11 tonnes 1/2 de projectiles par minute.",
    "paragraphs": [
      "On a procédé hier, à Barrow, au lancement d'un nouveau cuirassé japonais, le Mikasa, qui est, à l'heure actuelle, le plus formidable cuirassé du monde. Son déplacement est de 15 000 tonnes. Le poids de projectiles que ses canons pourront lancer, par minute, est de 11 tonnes 1/2."
    ]
  },
  {
    "id": 32,
    "page": 2,
    "category": "Politique",
    "title": "Discours de Lord Salisbury",
    "summary": "Au banquet du lord-maire, Lord Salisbury a évoqué la guerre en Afrique du Sud et la situation chinoise, prônant la stabilité et les réformes sociales plutôt que toute tentative de conquête territoriale.",
    "paragraphs": [
      "Londres, 9 novembre : Lord Salisbury a prononcé, au banquet du lord-maire, un important discours. Il a fait allusion à la guerre sud-africaine, saluant le courage de l'armée et le succès de l'équipement.",
      "Parlant de la Chine, il déclare que la convention anglo-allemande exprime le sentiment de la plupart des puissances : il ne faut pas songer à conquérir la Chine, mais effectuer des réformes sociales, ce qui demande surtout la paix."
    ]
  },
  {
    "id": 33,
    "page": 2,
    "category": "Faits Divers",
    "title": "Explosion d'une chaudière",
    "summary": "Une chaudière a explosé au charbonnage de Bonnesin près de Liège, entraînant la mort tragique d'un chauffeur nommé Wilhem et causant de graves brûlures à son collègue, Delvaux.",
    "paragraphs": [
      "Liège, 9 novembre : Une des chaudières du charbonnage de Bonnesin a fait explosion. Deux chauffeurs, les nommés Wilhem et Delvaux, ont été relevés portant d'horribles brûlures. Wilhem a succombé à ses blessures."
    ]
  },
  {
    "id": 34,
    "page": 2,
    "category": "Faits Divers",
    "title": "Graves désordres à Rupelmonde",
    "summary": "La ville de Rupelmonde est en proie à une agitation extrême, marquée par des attaques répétées de bandes organisées contre les personnes et les propriétés, plongeant la localité dans le trouble.",
    "paragraphs": [
      "Rupelmonde, 9 novembre : Depuis que notre journal a annoncé des désordres, la ville est en proie à une véritable révolution. Des bandes attaquent les personnes et les propriétés. La plus grande agitation règne partout."
    ]
  },
  {
    "id": 35,
    "page": 2,
    "category": "Diplomatie",
    "title": "Cession de territoires",
    "summary": "Une convention signée à Washington officialise la cession par l'Espagne aux États-Unis des îles Cagayan et Libut, pour une compensation financière s'élevant à 500 000 francs.",
    "paragraphs": [
      "Madrid, 9 novembre : Une convention entre l'Espagne et les États-Unis a été signée à Washington. L'Espagne cède les îles Cagayan et Libut moyennant une somme de 500 000 francs."
    ]
  },
  {
    "id": 36,
    "page": 2,
    "category": "Diplomatie",
    "title": "France et Russie",
    "summary": "La presse de Saint-Pétersbourg exprime sa vive satisfaction suite à l'échange de télégrammes entre le tsar et le président Loubet, réaffirmant l'alliance indissoluble qui unit la France à la Russie.",
    "paragraphs": [
      "Saint-Pétersbourg, 9 novembre : Les journaux russes commentent avec une vive satisfaction l'échange de télégrammes entre le tsar et M. Loubet. Le Nouveau Temps souligne une fois encore le lien indissoluble qui unit la Russie et la France."
    ]
  },
  {
    "id": 37,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Résultats des élections aux États-Unis",
    "summary": "M. McKinley est officiellement réélu à la présidence des États-Unis, consolidant une large majorité républicaine au sein du Sénat et de la Chambre des représentants.",
    "paragraphs": [
      "New York, 9 novembre : M. McKinley a été réélu à la présidence avec 292 voix contre 155 pour M. Bryan. La majorité républicaine est officiellement confirmée, tant à la Chambre des représentants qu'au Sénat."
    ]
  },
  {
    "id": 38,
    "page": 2,
    "category": "Faits Divers",
    "title": "Bagarre politique",
    "summary": "Une tragique altercation à caractère politique survenue hier à Sanderton, au Texas, a causé la mort de deux personnes et a laissé deux autres individus dans un état désespéré.",
    "paragraphs": [
      "New York, 9 novembre : Une bagarre sanglante s'est produite hier en pleine rue à Sanderton, au Texas, à la suite d'une discussion politique ayant dégénéré. Le bilan fait état de deux personnes tuées et de deux autres mortellement blessées."
    ]
  },
  {
    "id": 39,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Clôture de l'Exposition",
    "summary": "La pluie a fait son retour sur l'Exposition universelle, au grand dam des visiteurs. La clôture définitive de la manifestation est irrévocablement fixée au lundi 12 novembre à onze heures du soir.",
    "paragraphs": [
      "La pluie a opéré hier sa rentrée sur la scène de l'Exposition universelle, pour la plus grande consternation des visiteurs. La clôture aura lieu, de façon irrévocable, le lundi 12 novembre à onze heures du soir."
    ]
  },
  {
    "id": 40,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Saisies de matériel",
    "summary": "L'administration des Finances a procédé à la saisie du matériel de plusieurs concessionnaires d'attractions de l'Exposition n'ayant pas honoré le règlement de leurs redevances.",
    "paragraphs": [
      "Le service des Finances a fait procéder à la saisie du matériel de quelques concessionnaires d'attractions qui n'ont pas encore soldé leurs redevances auprès de l'administration."
    ]
  },
  {
    "id": 41,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Hommage d'adieu",
    "summary": "En témoignage de leur gratitude pour l'accueil chaleureux reçu à Paris, un comité d'exposants italiens a fait don à la municipalité d'un précieux recueil de manuscrits artistiquement illustrés.",
    "paragraphs": [
      "Un comité d'exposants italiens a tenu à offrir un hommage artistique à la Ville de Paris, en signe de reconnaissance pour l'hospitalité cordiale dont ils ont été l'objet. Ce don, constitué d'un ensemble de manuscrits magnifiquement illustrés, trouvera sa place au sein des collections de l'Hôtel de Ville."
    ]
  },
  {
    "id": 42,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Section japonaise",
    "summary": "Le pavillon impérial du Japon au Trocadéro a définitivement clos ses portes hier. Le rapatriement des collections vers l'Empire du Soleil Levant est désormais engagé.",
    "paragraphs": [
      "Le pavillon impérial japonais, situé au Trocadéro, a clos hier ses portes au public. Les précieuses collections qui y étaient présentées entament dès à présent leur procédure de rapatriement vers l'Empire du Soleil Levant."
    ]
  },
  {
    "id": 43,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Bilan des entrées",
    "summary": "Le guichet de l'Exposition a enregistré un résultat exceptionnel ce jeudi, avec un total de 1 210 233 tickets comptabilisés à l'occasion de la fête des Automobiles fleuries.",
    "paragraphs": [
      "Le succès de la fête des Automobiles fleuries s'est traduit par une affluence record. Les divers guichets de l'Exposition ont effectivement recueilli, pour la seule journée de jeudi, 1 210 233 tickets, confirmant l'engouement constant du public."
    ]
  },
  {
    "id": 44,
    "page": 2,
    "category": "Politique Municipale",
    "title": "Conseil Municipal de Paris",
    "summary": "Présidée par M. Paul Escudier, la séance du Conseil municipal du 9 novembre a permis le vote d'un secours de 500 francs pour les ouvriers sinistrés de l'atelier Monr et l'examen des comptes de la cité.",
    "paragraphs": [
      "Lors de la séance tenue le 9 novembre sous la présidence de M. Paul Escudier, le Conseil municipal a délibéré sur la situation financière de la ville. Au cours des débats, l'assemblée a voté l'octroi d'un secours exceptionnel de 500 francs destiné aux ouvriers sinistrés de l'atelier Monr."
    ]
  },
  {
    "id": 45,
    "page": 2,
    "category": "Social",
    "title": "Les Prévoyants de l'Avenir",
    "summary": "Indépendamment de leur transformation en société de secours mutuels, le capital social des Prévoyants de l'Avenir demeure inaltéré à 101 254 000 francs au 31 octobre.",
    "paragraphs": [
      "Que les Prévoyants de l'Avenir conservent leur statut de société commerciale ou qu'ils deviennent, selon les projets, une société de secours mutuels, le capital social demeure parfaitement indemne. Il reste fixé à la somme de 101 254 000 francs à la date du 31 octobre."
    ]
  },
  {
    "id": 46,
    "page": 2,
    "category": "Échos",
    "title": "Visites royales et distinctions",
    "summary": "Arrivée à Paris de la princesse Waldemar de Danemark. Le roi Christian IX honore le Président de la République de l'ordre de l'Éléphant, tandis que le roi Léopold conclut son séjour d'un mois.",
    "paragraphs": [
      "La princesse Waldemar de Danemark est arrivée à Paris. Le roi Christian IX a conféré l'ordre de l'Éléphant au Président de la République. Le roi Léopold quittera Paris lundi prochain après un séjour d'un mois."
    ]
  },
  {
    "id": 47,
    "page": 3,
    "category": "Actualités",
    "title": "Le Roi des Belges à Paris",
    "summary": "Malgré les intempéries, le roi Léopold multiplie les déplacements à Paris, entre visites diplomatiques à l'ambassade d'Angleterre et préparatifs pour le transport de ses automobiles.",
    "paragraphs": [
      "Quatre automobiles, sur lesquelles le roi Léopold se promenait rituellement et qui lui serviront à Bruxelles ; une petite voiturette à deux places qu'on pourrait embarquer sur le yacht Alberto, pour que le souverain pût, à ses descentes à terre, faire quelques excursions ; enfin, un coupé à six places avec, sur le devant, une place pour le conducteur.",
      "Malgré le mauvais temps, le roi des Belges a fait hier, en compagnie de la princesse Clémentine, une longue promenade dans la capitale.",
      "Dans la matinée, le souverain s'est rendu à l'ambassade d'Angleterre et a eu une entrevue avec M. sir Edmund Monson, qui l'attendait."
    ]
  },
  {
    "id": 48,
    "page": 3,
    "category": "Faits Divers",
    "title": "Violent incendie à Toulon",
    "summary": "Un terrible incendie, provoqué par une explosion dans une droguerie de la rue Albert à Toulon, a causé la mort d'un employé et l'asphyxie de plusieurs résidents du bâtiment.",
    "paragraphs": [
      "Un violent incendie s'est déclaré cette nuit dans l'entrepôt de droguerie de M. Chabre, situé rue Albert, à la suite d'une explosion de matières inflammables.",
      "La plupart des locataires ont pu s'échapper au prix des plus grandes difficultés, mais, malheureusement, d'autres ont été victimes du sinistre.",
      "Le garçon de droguerie, Pierre Anaglia, âgé de trente-six ans, a trouvé la mort dans le brasier. Le quartier-maître Albert Boane et un sergent d'infanterie ont été asphyxiés par les gaz d'éther. Une femme ayant accouché récemment a pu être sauvée par des personnes courageuses."
    ]
  },
  {
    "id": 49,
    "page": 3,
    "category": "Social",
    "title": "Bulletin du Travail",
    "summary": "Le monde ouvrier s'organise : le personnel des omnibus appelle à un meeting syndical au Tivoli-Waux-Hall, et les menuisiers en bâtiment tiendront leur assemblée générale demain.",
    "paragraphs": [
      "La chambre syndicale du personnel de la Compagnie générale des omnibus organise un meeting corporatif dans la nuit du dimanche 11 au lundi 12 novembre, à une heure du matin, dans la salle du Tivoli-Waux-Hall.",
      "L'assemblée générale de la Caisse de prévoyance des ouvriers menuisiers en bâtiment aura lieu demain à deux heures et demie de l'après-midi, au siège social, 129, rue du Faubourg-Saint-Martin."
    ]
  },
  {
    "id": 50,
    "page": 3,
    "category": "Justice",
    "title": "Le procès de Salsou aux assises",
    "summary": "Ouverture du procès aux assises de la Seine pour Salsou, l'auteur de l'attentat contre le shah de Perse, sous la présidence de M. le conseiller Mercier.",
    "paragraphs": [
      "C'est aujourd'hui que comparaît devant la cour d'assises de la Seine Salsou, l'auteur de l'attentat commis sur le shah de Perse. M. le conseiller Mercier présidera, et M. l'avocat général Lumbard requerra contre Salsou."
    ]
  },
  {
    "id": 51,
    "page": 3,
    "category": "Justice",
    "title": "Deux gardes particuliers condamnés",
    "summary": "La 11e chambre correctionnelle a condamné deux gardes particuliers à trois mois et quinze jours de prison pour avoir, par imprudence, lâché un chien contre un charretier dissimulé.",
    "paragraphs": [
      "La 11e chambre du tribunal correctionnel a condamné, à trois mois et quinze jours de prison, deux gardes particuliers, nommés Cuvelleau et Thibiar, pour blessures par imprudence. Les prévenus avaient, sans motif légitime, lâché un chien de garde contre un charretier qui se trouvait dissimulé derrière une meule de paille."
    ]
  },
  {
    "id": 52,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide par amour",
    "summary": "Une jeune femme, Françoise Bertin, a tenté de mettre fin à ses jours en absorbant de l'acide phénique après avoir été délaissée par son amant, un médecin. Son état est jugé très grave.",
    "paragraphs": [
      "Une jeune femme, prénommée Françoise Bertin, après avoir été délaissée par le médecin dont elle était devenue la maîtresse, a tenté de mettre fin à ses jours en absorbant de l'acide phénique, cela peu après qu'une plainte eut été portée contre elle par ledit médecin. L'état de la malheureuse est jugé très grave."
    ]
  },
  {
    "id": 53,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une naissance en gare de Lyon",
    "summary": "Une voyageuse de troisième classe, Mme Juliette Darbaux, a donné naissance à une petite fille en descendant de son train en gare de Lyon. La mère et l'enfant se portent bien.",
    "paragraphs": [
      "Une voyageuse de troisième classe, Mme Juliette Darbaux, originaire d'Essonnes, a mis au monde un bébé du sexe féminin au moment précis où elle descendait de son compartiment, en gare de Lyon. Fort heureusement, la mère et l'enfant se portent bien."
    ]
  },
  {
    "id": 54,
    "page": 3,
    "category": "Faits Divers",
    "title": "Attaquée en plein jour",
    "summary": "Une bijoutière de la rue du Temple a été agressée par un ouvrier sans domicile, Léon Naze, qui lui a dérobé quatre-vingts francs. Le malfaiteur a été promptement arrêté.",
    "paragraphs": [
      "Une bijoutière de la rue du Temple a été agressée hier par Léon Naze, un ouvrier électricien sans domicile fixe. Ce dernier lui a dérobé un sac contenant la somme de 80 francs. Le malfaiteur a été promptement arrêté par les autorités."
    ]
  },
  {
    "id": 55,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vengeance d'un vagabond",
    "summary": "Henri Lavary a agressé un ancien témoin à charge aux abords du Jardin des Plantes. Dans sa fuite, il a grièvement blessé un nourrisson. L'individu a été conduit au Dépôt.",
    "paragraphs": [
      "Henri Lavary, cherchant à exercer une vengeance contre un jeune garçon nommé Marius Dovèze, lequel avait été témoin à charge lors de son précédent procès, a violemment agressé l'enfant aux abords du Jardin des Plantes. Dans sa fuite effrénée, le malfaiteur a renversé une femme et son bébé, blessant grièvement le nourrisson. Lavary a été aussitôt arrêté et conduit au Dépôt."
    ]
  },
  {
    "id": 56,
    "page": 3,
    "category": "Justice",
    "title": "Faux sur un livret militaire",
    "summary": "Un ancien brigadier a été traduit devant la justice pour avoir falsifié son livret militaire par une mention de réforme factice, espérant ainsi se soustraire à ses obligations d'instruction militaire.",
    "paragraphs": [
      "Le parquet de la Seine a été saisi d'une affaire peu commune mettant en cause un ancien brigadier. Ce dernier est poursuivi pour avoir commis un faux sur son livret militaire.",
      "L'individu avait pris le soin d'y inscrire une mention de réforme totalement factice, manœuvre audacieuse destinée à lui permettre d'éluder une période d'instruction qui lui était imposée."
    ]
  },
  {
    "id": 57,
    "page": 3,
    "category": "Faits Divers",
    "title": "Pétrole meurtrier",
    "summary": "Un grave accident domestique s'est produit rue de la Glacière : la dame Jolivet, âgée de vingt-sept ans, a été grièvement brûlée par l'explosion de sa lampe à pétrole et conduite d'urgence à l'hôpital Cochin.",
    "paragraphs": [
      "Un terrible accident domestique a jeté l'émoi rue de la Glacière. La dame Jolivet, âgée de vingt-sept ans, a été victime de l'explosion soudaine de sa lampe à pétrole alors qu'elle s'en servait dans son domicile.",
      "Atteinte de graves brûlures sur plusieurs parties du corps, la malheureuse a été transportée dans un état jugé fort inquiétant à l'hôpital Cochin, où elle reçoit actuellement les soins de rigueur."
    ]
  },
  {
    "id": 58,
    "page": 3,
    "category": "Faits Divers",
    "title": "Exploits de cambrioleurs",
    "summary": "Une série de cambriolages frappe le vingtième arrondissement. Les forces de l'ordre ont appréhendé, boulevard de Charonne, Louise Viéville, qui est soupçonnée de complicité avec cette bande de malfaiteurs.",
    "paragraphs": [
      "Depuis quelques jours, une bande de cambrioleurs particulièrement actifs sévit dans les quartiers du vingtième arrondissement, causant une vive inquiétude parmi les habitants.",
      "Dans le cadre de l'enquête, les autorités ont procédé à l'arrestation de Louise Viéville, boulevard de Charonne. Cette femme est fortement soupçonnée d'avoir prêté main-forte à ces malfaiteurs dans leurs entreprises délictueuses."
    ]
  },
  {
    "id": 59,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue",
    "summary": "La chronique de banlieue relate l'arrestation d'un forcené à Meudon, une blessure accidentelle par arme à feu à Villetaneuse, et l'arrestation à Chartres d'un employé accusé de détournement de fonds.",
    "paragraphs": [
      "À Meudon, le nommé Alexandre Schuit, un sujet luxembourgeois, a été appréhendé après avoir semé la panique en agressant plusieurs passants, manifestement en proie à une violente crise de démence.",
      "À Villetaneuse, un accident regrettable est survenu lors du maniement d'un fusil : le nommé Jules Vieilli a été grièvement blessé par un coup de feu parti accidentellement alors qu'il déchargeait l'arme.",
      "Enfin, à Chartres, le jeune Lucien Armelestin, employé de commerce, a été écroué. Il est accusé d'avoir détourné plusieurs milliers de francs au préjudice de son employeur, qui a porté plainte contre lui."
    ]
  },
  {
    "id": 60,
    "page": 4,
    "category": "Sport",
    "title": "Jacquelin à Perpignan",
    "summary": "Le célèbre champion cycliste Jacquelin est attendu ce dimanche à Perpignan. Il se mesurera sur la piste à plusieurs coureurs renommés, dont le champion espagnol Abadal.",
    "paragraphs": [
      "Le champion cycliste Jacquelin sera en selle demain dimanche sur le vélodrome de Perpignan pour une épreuve qui promet d'être fort disputée.",
      "Parmi les autres concurrents inscrits, on note la présence de Daugla, Mille, Geo, Lombard, Py, Casain ainsi que celle du champion espagnol Abadal, qui compte bien opposer une résistance farouche au champion français."
    ]
  },
  {
    "id": 61,
    "page": 4,
    "category": "Agriculture",
    "title": "Cours des pommes à cidre",
    "summary": "État des marchés de pommes et poires à cidre. Les tarifs se stabilisent à 30 francs les 1 000 kilos en moyenne, avec des variations locales selon les provenances dans le Calvados, l'Eure, la Manche et la Bretagne.",
    "paragraphs": [
      "Les cours des pommes à cidre se maintiennent fermement à 30 francs les 1 000 kilos, selon les provenances, en parité gare Paris. Les poires sont assez recherchées, en raison du temps favorable aux expéditions, et se négocient de 18 à 26 francs les 1 000 kilos.",
      "Dans le Calvados, on cote les pommes à 40 francs la rasière. Dans l'Eure, le prix varie de 1,50 à 1,75 franc l'hectolitre au Neubourg.",
      "Dans la Manche, de nombreuses transactions se sont conclues à 0,35 franc le demi-hectolitre ; toutefois, on anticipe une hausse pour les pommes tardives, dont la récolte s'annonce moins abondante.",
      "Dans l'Ille-et-Vilaine, des marchés de pommes ont été conclus entre 30 et 36 francs les 1 000 kilos, en gare d'expédition.",
      "À Ploërmel, dans le Morbihan, les pommes valent de 1,80 à 2 francs l'hectolitre ; la barrique de cidre se vend de 10 à 12 francs, sans le contenant."
    ]
  },
  {
    "id": 62,
    "page": 4,
    "category": "Agriculture",
    "title": "Marché aux Veaux",
    "summary": "Bilan du marché aux veaux de La Villette du 9 novembre. La demande est soutenue, entraînant une hausse de 5 centimes par demi-kilo sur l'ensemble des provenances, particulièrement pour les animaux de choix.",
    "paragraphs": [
      "La Villette, vendredi 9 novembre. Veaux amenés : 372. Vente active et prix en hausse de 5 centimes par demi-kilo.",
      "Les veaux de choix provenant de Seine-et-Marne, de l'Eure, de Seine-et-Oise, d'Eure-et-Loir et du Loiret se sont détaillés à 1,10 franc ; en bande, ils ont atteint de 1 franc à 1,05 franc.",
      "Les sujets champenois se sont vendus de 0,95 à 1 franc tant en bande qu'au détail ; les flamands de 0,90 à 1 franc ; les gournayeux et les manceaux à 0,80 franc ; les autres provenances oscillent entre 0,65 et 0,80 franc. Tous ces cours s'entendent par kilo de viande nette."
    ]
  },
  {
    "id": 63,
    "page": 4,
    "category": "Viniculture",
    "title": "Cours des vins et eaux-de-vie",
    "summary": "Aperçu du marché viticole régional. Les prix restent stables dans le Midi, tandis que la Bourgogne enregistre une récolte abondante et recherchée. Le Bordelais affiche de bons résultats pour les vins blancs.",
    "paragraphs": [
      "Dans le Gard, les petits vins de plaine se maintiennent à 1 franc le degré. À Montpellier, les prix n'ont pas excédé 1 franc le degré pour les marchandises de qualité.",
      "Dans l'Aude, les bons vins sont payés de 17 à 18 francs l'hectolitre. Dans le Roussillon, les vins de 9 à 10 degrés valent de 6 à 14 francs, les 11 degrés de 15 à 20 francs, et les 12 degrés de 23 à 27 francs l'hectolitre.",
      "En Armagnac, le commerce propose 3 francs le degré pour les vins. Dans le Bordelais, les vendanges sont satisfaisantes ; les vins blancs nouveaux ont été payés entre 3 et 3,50 francs le degré.",
      "Dans la Bourgogne, la récolte est abondante. À Meursault, les gamays rouges se négocient à 40 francs la pièce. Dans le Beaujolais-Mâconnais, les cuvées de choix sont très demandées et atteignent de 40 à 50 francs la pièce."
    ]
  },
  {
    "id": 64,
    "page": 4,
    "category": "Faits Divers",
    "title": "Fêtes des environs de Paris",
    "summary": "Agenda des festivités locales. Foire de la Saint-Martin à Pontoise, fêtes foraines à Courbevoie et dans le 18e arrondissement, et concours horticole à Saint-Germain-en-Laye animent la région parisienne.",
    "paragraphs": [
      "Courbevoie : Fête foraine du rond-point des Bergères. Attractions nombreuses et variées, bal.",
      "Pontoise : Foire de la Saint-Martin. Attractions nombreuses et variées. Clôture mardi.",
      "Saint-Germain-en-Laye : Concours de chrysanthèmes, cyclamens et fruits, organisé par la Société d'Horticulture.",
      "Dix-huitième arrondissement : Fête foraine au profit de la caisse des écoles, située sur les boulevards Clichy et Rochechouart."
    ]
  },
  {
    "id": 65,
    "page": 4,
    "category": "Fiction",
    "title": "Le Tambour de la 32e demi-brigade",
    "summary": "Présentation de l'ouvrage littéraire consacré à l'épopée des guerres de la Révolution, retraçant les aventures héroïques des combattants de la célèbre 32e demi-brigade.",
    "paragraphs": [
      "Le Tambour de la 32e demi-brigade relate l'histoire émouvante de l'immortelle épopée des guerres de la Révolution et décrit les aventures extraordinaires de ses héros."
    ]
  },
  {
    "id": 66,
    "page": 4,
    "category": "Feuilleton",
    "title": "Extrait de roman : Dialogue entre médecins",
    "summary": "À Saint-Mandé, le docteur Berniatte confie à Henri Lipray sa méthode singulière pour soigner une patiente devenue folle après le décès de son enfant : recréer le cadre du drame.",
    "paragraphs": [
      "Henri Lipray se fit conduire à Saint-Mandé, à l'adresse indiquée par le docteur Berniatte. La malade était une jeune femme que la démence avait frappée avec une soudaineté effroyable au chevet de son enfant trépassé.",
      "Le docteur Berniatte exposa alors sa méthode : il s'agissait de reconstituer scrupuleusement le décor de l'époque du drame et de placer auprès de la mère un enfant de même âge, afin de provoquer un choc salvateur chez sa patiente."
    ]
  }
];
