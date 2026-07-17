// Date: 1901-01-12
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-01-12 (Version Restaurée, 51 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le sauvetage des naufragés de la Russie",
    "summary": "Après une attente angoissante au large de la « Côte maudite » près du cap Faraman, les passagers et l'équipage du navire La Russie ont finalement été sauvés de la furie des flots.",
    "paragraphs": [
      "Hier matin, tous les infortunés passagers et marins de la Russie ont pu être enfin arrachés au péril et à la mort.",
      "Entre tous les drames de la mer, celui qui vient d'avoir pour théâtre le cap Faraman est bien, à coup sûr, l'un des plus poignants.",
      "Il n'est personne qui, à la lecture des dépêches, ne se soit senti profondément angoissé. Rien d'horrible comme le spectacle de l'agonie de ce navire, à quelques centaines de mètres de la côte, en présence de courageux sauveteurs maudissant leur impuissance contre la mer en furie !",
      "Ce littoral de Faraman, où s'est échouée la Russie, a mérité parmi les navigateurs le lugubre surnom de la Côte maudite. On l'appelle aussi le Cimetière des navires."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille - Marie-Madeleine",
    "summary": "Extrait du feuilleton quotidien mettant en scène une conversation légère entre Marie-Madeleine et son interlocuteur au sujet de son identité et de ses caprices.",
    "paragraphs": [
      "Elle se fit câline, tendit son oreille rose et dit : « Allons, vite. »",
      "Après tout, pourquoi lui refuser cette insouciance ? lui glissa Marie.",
      "Marie comment ? Marie-Madeleine, ou Marie-Anne, ou Marie-Louise, qu'importe.",
      "« Tu n'es pas fixé ? — Ma foi non. Est-ce que je m'occupe de ces balivernes ? »"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Géographie",
    "title": "La Camargue et ses terres",
    "summary": "Analyse de la transformation géographique et économique de la Camargue, vaste zone de lagunes et de pâturages sauvages que l'homme cherche aujourd'hui à fertiliser et à cultiver.",
    "paragraphs": [
      "C'est l'île triangulaire insérée dans cette fourche qui constitue la Camargue, vaste lagune morte de 75 000 hectares, région instable et mouvante faite des limons que charrie le Rhône et des alluvions qu'il dépose.",
      "Depuis plusieurs années, on s'occupe de fertiliser la Camargue. Jusqu'ici, on n'y voyait guère que de vastes pâturages où vaguaient des chevaux, des troupeaux de bœufs à demi sauvages et des manades de buffles destinés aux courses des villages du Midi.",
      "Aujourd'hui, on travaille à la conquête du sol. Les marais sont desséchés peu à peu au moyen du drainage, puis cultivés en roseaux."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Incident lors d'un dîner mondain",
    "summary": "Un dîner mondain est interrompu par l'ébriété manifeste du jeune M. Champinelle, forçant le baron de Brides à intervenir pour sauver les apparences de la compagnie.",
    "paragraphs": [
      "L'entretien fut coupé net. Un fâcheux incident venait de se produire.",
      "Le jeune monsieur Champinelle, Aristide pour les dames, donnait les signes d'une évidente ébriété.",
      "Sa tête, à peu près vide pourtant et si légère, s'était lourdement abattue sur l'assiette qu'il avait devant lui.",
      "Heureusement, le baron de Brides, en homme d'expérience et de tête, intervint et sauva l'honneur de la bande en disant : « Enlevez-le. »"
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des ministres",
    "summary": "Compte-rendu succinct de la réunion des ministres à l'Élysée sous la présidence de M. Loubet, concernant notamment les nominations à la Légion d'honneur.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin, à l'Élysée, sous la présidence de M. Loubet.",
      "Le ministre de l'Agriculture a soumis au conseil ses propositions pour la Légion d'honneur, qu'il va présenter à la Grande Chancellerie."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique",
    "title": "Questions militaires",
    "summary": "Le ministre de la Guerre a fait signer deux projets de loi : le premier facilite le recrutement des officiers de réserve, le second abolit les conditions de taille pour les engagements dans l'armée.",
    "paragraphs": [
      "Le ministre de la Guerre a fait signer deux projets de loi. Le premier porte modification de l'article 49 de la loi du 15 juillet et a pour but de faciliter le recrutement des officiers de réserve en faisant appel aux dispensés de l'article 23 de la loi de 1889.",
      "Le second a pour but de supprimer les conditions de taille imposées jusqu'ici pour le recrutement et les engagements dans l'armée."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Justice",
    "title": "Mouvement judiciaire",
    "summary": "Un nouveau mouvement judiciaire est officialisé : M. Lemarchand est nommé juge au tribunal de la Seine, tandis que MM. Renkoff, Pactou et Testard occupent désormais de nouvelles fonctions à Meaux, Paris et Saint-Quentin.",
    "paragraphs": [
      "Le garde des Sceaux a fait signer le mouvement judiciaire suivant : sont nommés juge au tribunal de la Seine, M. Lemarchand, président à Meaux ; président à Meaux, M. Renkoff, président à Bar-sur-Aube ; substitut au tribunal de la Seine, M. Pactou, procureur de la République à Saint-Quentin ; procureur à Saint-Quentin, M. Testard, procureur de la République à Niort."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Social",
    "title": "Les tramways électriques dans Paris",
    "summary": "Le Petit Parisien rappelle les dangers des tramways à plots. Ce système de traction électrique, défectueux, laisse des plots sous tension, causant des accidents mortels aux passants et aux chevaux.",
    "paragraphs": [
      "Il y a plus d'un mois, le 8 décembre dernier, le Petit Parisien a signalé les graves inconvénients d'un système de traction électrique mis en fonctionnement sur diverses voies de Paris.",
      "Il s'agissait des tramways à plots qui parcourent, notamment, la rue du Quatre-Septembre, la rue Réaumur, la rue de Clichy et quelques avenues.",
      "Parfois, le plot reste ouvert, dispose encore de quelque courant, et malheur aux piétons et aux chevaux qui posent un pied sur sa plaque perfide. Les chevaux tombent foudroyés."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une maison inondée à Vincennes",
    "summary": "Un incident spectaculaire a perturbé la rue de l'Hôtel-de-Ville à Vincennes, lorsqu'une maison s'est retrouvée soudainement inondée durant la nuit, forçant le concierge à alerter les autorités.",
    "paragraphs": [
      "La rue de l'Hôtel-de-Ville, à Vincennes, a été mise en émoi, l'avant-dernière nuit, par un accident des plus rares.",
      "Vers trois heures du matin, M. Émile Lévy, concierge, se présentait tout effaré au commissariat de police, racontant que la maison dont il avait la garde venait de se transformer subitement en une véritable cataracte."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "International",
    "title": "La situation en Chine",
    "summary": "La cour impériale chinoise hésite face à la note des puissances. Un télégramme de Si-Ngan-Fou suggère que certaines conditions de paix sont jugées inacceptables par l'Empereur et l'impératrice douairière.",
    "paragraphs": [
      "On ne sait toujours rien de positif au sujet de l'opinion de la cour impériale sur la note collective qui lui a été adressée par les représentants des puissances à Pékin.",
      "Un télégramme de Si-Ngan-Fou indique que quelques-unes des clauses proposées comme conditions de paix ne peuvent être acceptées. L'Empereur et l'impératrice douairière en sont très troublés."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le naufrage du paquebot La Russie",
    "summary": "Le Petit Parisien relate le naufrage du paquebot La Russie. Malgré la tempête et la brume fatale, le commandant Jouve et son équipage ont assuré le salut de tous les passagers grâce aux sauveteurs de Carro.",
    "paragraphs": [
      "Le Petit Parisien a recueilli le récit des passagers et membres de l'équipage de La Russie, contraints d'abandonner le navire après un échouement tragique.",
      "Le lieutenant Louis Gautherot rapporte les transes vécues lorsque le vapeur, trompé par la brume et les feux des phares, s'est enlisé. Malgré la violence de la tempête, les passagers ont fait preuve d'un grand courage.",
      "Le commandant Jouve a dirigé les opérations avec un sang-froid exemplaire, assurant la distribution de vivres et veillant scrupuleusement à la sécurité des passagers jusqu'à l'arrivée des secours.",
      "Le sauvetage fut finalement rendu possible grâce à une accalmie et à l'intervention des sauveteurs de Carro. Tous les passagers ont été débarqués sains et saufs, bien que le navire soit condamné."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Récits des passagers : le journal de bord du naufrage",
    "summary": "Chronologie du drame : après l'échouement du paquebot à Faraman le lundi, les passagers ont vécu dans l'angoisse jusqu'à leur sauvetage providentiel survenu le vendredi matin suivant.",
    "paragraphs": [
      "Le paquebot s'était échoué à Faraman le lundi matin. La panique gagna les passagers, avant que le commandant Jouve ne parvienne à calmer les esprits par sa fermeté.",
      "Pendant plusieurs jours, le navire, dangereusement incliné par la mer, subit des assauts violents. Les passagers se réfugièrent dans le salon de première classe et le fumoir, tandis que l'eau envahissait progressivement les cales du bâtiment.",
      "Le sauvetage final eut lieu le vendredi matin, après qu'un coup de canon eut été entendu depuis la terre. À sept heures, tout le monde était en sécurité sur la plage."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accueil des naufragés à Salins-de-Giraud et Arles",
    "summary": "Un accueil triomphal a été réservé aux rescapés du naufrage à Salins-de-Giraud puis à Arles, où la population a manifesté sa solidarité sous les félicitations officielles du président de la République.",
    "paragraphs": [
      "À Salins-de-Giraud, les naufragés reçurent un accueil enthousiaste de la population. Le président de la République fit transmettre ses félicitations aux sauveteurs pour leur bravoure.",
      "Arrivé en gare d'Arles, le convoi des naufragés fut salué par une foule immense. Des arcs de triomphe et des ovations nourries marquèrent cet événement, témoignant de la profonde solidarité nationale envers les rescapés."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrivée des naufragés à Marseille",
    "summary": "Six mille Marseillais ont accueilli les survivants en gare. Le commandant Jouve confirme que l'erreur de navigation découle des conditions météorologiques et espère le renflouement du bâtiment.",
    "paragraphs": [
      "Une foule de plus de six mille personnes a envahi la gare de Marseille pour l'arrivée des rescapés. Le commandant Jouve, bien qu'épuisé, a pu témoigner du courage exemplaire de son équipage et des sauveteurs qui ont permis ce dénouement heureux.",
      "Le commandant a souligné que l'échouement était dû à une confusion des feux de navigation par temps de neige. Il estime que le navire pourrait être renfloué, malgré l'ampleur des dégâts subis par la coque."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Débats parlementaires sur le naufrage",
    "summary": "M. Salis, député de l'Hérault, prépare une interpellation du ministre de la Marine pour dénoncer l'insuffisance notoire des moyens de sauvetage disponibles sur le littoral méditerranéen.",
    "paragraphs": [
      "M. Salis, député de l'Hérault, a annoncé qu'il interpellera le ministre de la Marine au sujet des moyens de sauvetage insuffisants sur le littoral méditerranéen, une question cruciale qu'il avait déjà soulevée devant la Chambre avant la catastrophe."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique",
    "title": "Discours de M. Fallières au Sénat",
    "summary": "Réélu à la présidence du Sénat, M. Fallières a salué la haute courtoisie des débats et la solidité des institutions républicaines, tout en rendant un hommage ému à M. Wallon et à la mémoire du général Lambert.",
    "paragraphs": [
      "Lors de la séance du vendredi 11 janvier, M. Fallières a prononcé un discours marquant sa réélection à la présidence du Sénat. Il a loué la courtoisie des débats et la solidité des institutions républicaines.",
      "Il a également rendu hommage à M. Wallon, doyen du Sénat, et a exprimé les profonds regrets de l'assemblée suite au décès du général Lambert."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Étranger",
    "title": "Guerre au Transvaal : L'invasion par les Boërs",
    "summary": "L'invasion de la colonie du Cap se poursuit, plaçant Lord Kitchener face à une situation complexe. Les commandos boërs multiplient les escarmouches, notamment autour de Calvinia et Clan-William.",
    "paragraphs": [
      "L'invasion de la colonie du Cap par les Boërs se poursuit, menaçant gravement les positions britanniques. Lord Kitchener fait face à une situation délicate alors que les forces ennemies avancent vers le cœur de la colonie.",
      "Les télégrammes officiels indiquent des escarmouches dans plusieurs districts, notamment autour de Calvinia et de Clan-William, où les forces britanniques tentent péniblement de contenir l'avance des commandos boërs."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Culture",
    "title": "Théâtre : Une pièce nouvelle à la Comédie-Populaire",
    "summary": "La nouvelle œuvre de M. Garmont, représentée à la Comédie-Populaire, s'inscrit dans la lignée de Ponsard avec une intrigue centrée sur les dilemmes de l'honneur et les conflits d'argent.",
    "paragraphs": [
      "La nouvelle pièce jouée à la Comédie-Populaire, signée par M. Garmont, rappelle le style de Ponsard avec une intrigue complexe mêlant honneur, argent et malentendus sentimentaux."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Théâtre",
    "title": "Débuts au Théâtre-Français",
    "summary": "Mme Louise Silvain a fait des débuts remarqués dans le rôle de Camille, faisant preuve d'une diction et d'une prestance tragique saluées par le public du Théâtre-Français.",
    "paragraphs": [
      "Au Théâtre-Français, hier soir, un début fort intéressant. Mme Louise Silvain, femme de l'excellent sociétaire, a joué pour la première fois le rôle de Camille dans Horace, de Corneille ; elle avait déjà paru, au cours de l'année dernière, dans les représentations données par la Comédie-Française au Trocadéro. Grande, mince, Mme Silvain a l'attitude, la ligne de la tragédienne. La diction est soignée. Dans ce rôle très difficile de Camille, elle s'est montrée tout à fait à la hauteur de la tâche entreprise.",
      "M. Croué, un premier prix du Conservatoire, a débuté hier soir également dans les Fourberies de Scapin. Le rôle de Scapin est établi de telle sorte aujourd'hui que tous ceux qui l'adoptent pour leurs débuts s'y ressemblent un peu : on jugera mieux M. Croué dans une autre épreuve."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Activités officielles et mondaines",
    "summary": "Le Président de la République a tenu plusieurs entretiens officiels avec les présidents des Chambres, tandis que les préparatifs pour la clôture de l'Exposition avancent pour le 14 janvier.",
    "paragraphs": [
      "Le président de la République a reçu, hier après-midi, M. Fallières, président du Sénat, et M. Paul Deschanel, président de la Chambre des députés. Le Président de la République a reçu également le bureau de la Chambre des députés.",
      "Le comte Leontieff, gouverneur général de l'Erythrée, qui se trouvait à Paris depuis quelque temps, en est reparti hier matin, se rendant à Londres.",
      "La dernière fête de l'Exposition, qui promet d'être très brillante et qui sera présidée par M. Decrais, ministre des Colonies, sera donnée lundi soir 14 janvier, dans l'enceinte même de l'Exposition, au pavillon de la Presse, quai d'Orsay."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Mission de M. Charles Bonin en Asie",
    "summary": "La Société de géographie a accueilli M. Charles Bonin, de retour d'une mission d'exploration de deux ans et demi à travers l'Asie centrale, la Mongolie et la Sibérie, accomplie pour le compte de la France.",
    "paragraphs": [
      "La Société de géographie a reçu hier soir, en séance solennelle, M. Charles Bonin, vice-résident de France en Indo-Chine, de retour d'une mission officielle d'exploration en Asie centrale.",
      "Parti de Pékin après l'exploration du fleuve dans le courant de l'été 1898, M. Bonin a traversé le Céleste-Empire de l'est à l'ouest, gagnant le fleuve Jaune, puis la Mongolie. Chemin faisant, il a parcouru le désert du Grand Gobi, passant trois jours sans trouver une goutte d'eau.",
      "Il est allé ensuite jusqu'aux monts Célestes et a poursuivi sa route vers l'ouest, longeant les montagnes Tien-Shan, hautes de quatre mille mètres, jusqu'à la frontière russe.",
      "M. Bonin est revenu en Europe par la Sibérie, le Turkestan russe, Samarkand et le Caucase. Après une visite au pope arménien, près du mont Ararat, il est rentré en France par Constantinople, deux ans et demi après son départ de Paris."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Informations Locales",
    "title": "Cavalcade des étudiants et rente Foucher",
    "summary": "Le comité des étudiants organise la mi-carême sur la rive gauche, tandis que les arrérages de la rente Foucher sont distribués aux agents de police méritants et à la veuve d'un gardien tué en service.",
    "paragraphs": [
      "Le comité chargé d'organiser la cavalcade des étudiants pour la mi-carême nous prie d'avertir, en son nom, les commerçants du quartier Latin d'une importante décision prise par ses membres. Ainsi que l'année dernière, le cortège des étudiants ne parcourra que la rive gauche. Les organisateurs font appel à l'initiative privée pour les projets de leurs chars. Le siège du comité se trouve 1, place de l'Odéon.",
      "La commission spéciale chargée de répartir annuellement la rente de 1 678 francs léguée par le comte Foucher, ancien maire du XIe arrondissement, aux agents de la police municipale qui, dans le courant de l'année, se sont distingués par leurs services ou par des actes de courage et de dévouement, s'est réunie le 9 de ce mois.",
      "Elle a distribué les arrérages de cette rente pour l'année entre un sous-brigadier et quatorze gardiens de la paix avec lesquels elle a fait concourir, pour cette libéralité, la veuve du gardien Maure, tué en service par un malfaiteur le 19 février."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Les Tribunaux",
    "title": "L'affaire des époux Doré : extorsion de fonds",
    "summary": "Reconnus coupables d'extorsion de fonds après avoir piégé M. Leclanché lors d'un rendez-vous galant pour lui soutirer une reconnaissance de dettes sous la menace, les époux Doré sont condamnés à de la prison.",
    "paragraphs": [
      "Les époux Doré étaient établis marchands de vins rue Chauchat. M. Leclanché, étant allé un jour dans ce débit, obtint de Mme Doré un rendez-vous pour le 1er octobre dernier. Doré devait être ce jour-là aux Halles.",
      "À neuf heures du matin, M. Leclanché était à son poste : il montait au logement des époux, trouvait Mme Doré couchée et se mettait auprès d'elle. Presque aussitôt, d'une pièce voisine surgissait Doré qui, armé d'un instrument contondant, administrait une véritable rossée à Leclanché. Puis, il barrait le passage à son rival, brandissait d'une main un revolver et de l'autre lui tendait une feuille de papier timbré, lui criant : « Vous allez me signer une reconnaissance de 5 000 francs, ou vous êtes mort. »",
      "Quand il eut reconquis sa liberté, Leclanché alla aussitôt porter plainte. Les époux Doré furent arrêtés et hier ils ont comparu devant la Cour d'assises de la Seine sous l'accusation d'extorsion de fonds et complicité. Doré a été condamné à cinq ans de réclusion et sa femme à deux ans de prison."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Les Tribunaux",
    "title": "M. Carvalho contre M. Carré",
    "summary": "La Cour infirme le jugement condamnant le directeur de l'Opéra-Comique, M. Carré, à verser des dommages-intérêts à son secrétaire, M. Carvalho, jugeant le licenciement comme un exercice légitime du droit.",
    "paragraphs": [
      "On sait que M. Carvalho, secrétaire général de l'Opéra-Comique, avait obtenu du tribunal civil de la Seine une somme de 9 000 francs à titre de dommages-intérêts contre son directeur, M. Carré, pour avoir été congédié de son emploi.",
      "La cour devant laquelle était allé le directeur de l'Opéra-Comique a estimé que M. Carré avait usé de son droit et a annulé le jugement de première instance."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Faits divers judiciaires",
    "summary": "Le tribunal correctionnel de Versailles condamne le récidiviste Emile Le Floch pour vol, alors que le drame passionnel de la Chapelle s'achève tragiquement par le décès d'Emile Laurent.",
    "paragraphs": [
      "Un récidiviste, Emile Le Floch, âgé de vingt ans, a comparu hier devant le tribunal correctionnel de Versailles sous l'inculpation de vol commis le 11 décembre. Le tribunal a condamné l'accusé à treize mois de prison et, pour une affaire précédente d'opposition, à six mois de prison et cinq ans d'interdiction de séjour.",
      "Sous le titre « La Vengeance d'une Mère », le Petit Parisien a raconté hier le drame passionnel qui s'est déroulé dans le quartier de la Chapelle. Une jeune femme, Eugénie Larciaux, abandonnée par son séducteur, a tiré un coup de revolver dans la tête de ce dernier. Emile Laurent, âgé de vingt-cinq ans, a succombé hier matin."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Social",
    "title": "La situation critique de Mme Petit",
    "summary": "Expulsée de son logement rue Buffault, Mme Petit, mère de trois enfants, se retrouve dans une précarité extrême. Malgré une modeste aide de l'Assistance publique, la famille demeure sans solution de relogement.",
    "paragraphs": [
      "Mme Petit, mère de trois enfants, avait loué, au début du mois de décembre, une chambre dans une maison située au numéro 2 de la rue Buffault, propriété de l'Assistance publique. Le 8 janvier dernier, elle apprit que le logement n'était pas libre, le locataire précédent refusant obstinément de déménager.",
      "Se retrouvant à la rue, dépourvue de ressources, avec ses enfants en bas âge, Mme Petit a dû solliciter le secours de l'Assistance publique. Malgré une indemnité dérisoire de 15 francs, l'Administration n'a engagé aucune action judiciaire pour faciliter son installation. La famille, hébergée provisoirement dans un hôtel de fortune, risque d'être mise à la porte d'un instant à l'autre."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendies et accidents à Paris",
    "summary": "Une série de sinistres a marqué la journée d'hier : deux départs de feu dans les IXe et Ve arrondissements, une avarie électrique sur le pont Mirabeau et un grave accident domestique par explosion de gaz.",
    "paragraphs": [
      "Un commencement d'incendie a été signalé au 34, rue Piat, dans une fabrique de chaussures. Un autre foyer s'est déclaré vers sept heures du soir dans un atelier de modiste tenu par Mme Herbert, au 55, rue des Archives.",
      "Dans la soirée d'hier, une fuite d'électricité s'est produite sur le pont Mirabeau, rendant le passage particulièrement dangereux pour les piétons comme pour les chevaux.",
      "Une violente explosion de gaz s'est produite rue Bonaparte, dans l'appartement de M. Matrat. Sa fille, qui s'était levée pour fermer un robinet laissé ouvert par mégarde, a été grièvement brûlée par la déflagration survenue au moment où elle tentait d'allumer une lampe."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Infanticide rue du Rocher",
    "summary": "La police a découvert le corps d'un nouveau-né dissimulé dans une tinette au domicile d'une habitante de la rue du Rocher. La domestique, Mme Silvia Miegga, est actuellement retenue par la justice pour enquête.",
    "paragraphs": [
      "Mme Silvia Miegga, domestique au service de Mme Larcher, au 57, rue du Rocher, est suspectée d'avoir fait disparaître son enfant après son accouchement. Les agents de police ont découvert le cadavre du nouveau-né dissimulé dans une tinette au sein de l'habitation. La mère est actuellement interrogée par la justice pour répondre de ces faits."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation de faux-monnayeurs",
    "summary": "Bertrand Dupuy et Marie Lescomte ont été appréhendés par M. Archer, commissaire du faubourg Montmartre, alors qu'ils écoulaient de fausses pièces de 2 francs à l'effigie de la Semeuse dans le IXe arrondissement.",
    "paragraphs": [
      "M. Archer, commissaire de police du quartier du faubourg Montmartre, a procédé à l'arrestation de Bertrand Dupuy, trente-cinq ans, et de Marie Lescomte, vingt-quatre ans. Les deux individus étaient pris en flagrant délit d'écoulement de fausses pièces de 2 francs à l'effigie de la Semeuse dans le neuvième arrondissement de Paris."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie dans un égout",
    "summary": "Un départ de feu au sein d'une bouche d'égout boulevard Barbès a semé l'émoi chez les riverains, qui craignaient une fuite de gaz. L'incident serait le résultat de l'imprudence d'un fumeur.",
    "paragraphs": [
      "Un incendie s'est déclaré hier matin boulevard Barbès, au niveau d'une bouche d'égout. La panique a rapidement gagné le voisinage, les riverains craignant une explosion de gaz souterraine. Il semble toutefois que le foyer ait été provoqué par un tas de paille enflammé par l'imprudence d'un fumeur."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accouchement dans la rue",
    "summary": "Mme Jeanne Delâtre, une journalière de vingt-trois ans, a été prise des douleurs de l'enfantement en pleine rue, rue de la Chapelle. Secourue par un étudiant en médecine, elle a été transportée à l'hôpital Lariboisière.",
    "paragraphs": [
      "Mme Jeanne Delâtre, âgée de vingt-trois ans, journalière, s'est effondrée hier matin, rue de la Chapelle, alors qu'elle se rendait à l'hôpital. Prise soudainement des douleurs de l'enfantement, elle a été secourue par un étudiant en médecine qui passait par là.",
      "Le nouveau-né ayant été recueilli dans les meilleures conditions possibles, la mère ainsi que le bambin ont été transportés sans tarder à l'hôpital Lariboisière pour y recevoir les soins nécessaires."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Correspondance Particulière",
    "title": "Le suicide tragique de Thio, l'Annamite amoureux",
    "summary": "Guyen-Van-May, dit Thio, domestique au service de M. de Marcey, s'est donné la mort par pendaison après avoir multiplié les vols pour satisfaire une passion amoureuse qui l'a conduit à sa perte.",
    "paragraphs": [
      "Guyen-Van-May, dit Thio, âgé de vingt-neuf ans, employé au service de M. de Marcey, s'est suicidé par pendaison dans les combles de la demeure de son maître.",
      "S'éprenant follement d'une jeune fille, il avait multiplié les larcins chez son employeur afin d'acheter des cadeaux dispendieux à sa belle. Découvert et menacé de poursuites judiciaires, le malheureux a préféré se donner la mort plutôt que de subir le déshonneur."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Départements",
    "title": "Faits divers en province",
    "summary": "Une série d'événements tragiques marque l'actualité de province : accidents industriels, suicides pour dettes et drames de l'aliénation mentale occupent les chroniques locales de Laon, Chantilly, Avranches et Troyes.",
    "paragraphs": [
      "Laon : Le père Pinson, carrier bien connu dans la région, a été retrouvé décapité par l'explosion prématurée d'une cartouche de dynamite sur le chantier de la commune d'Aulnois.",
      "Chantilly : Les époux Chaumont, chapeliers de leur état, se sont suicidés au moyen de réchauds de charbon, acculés par des embarras financiers insurmontables.",
      "Avranches : Le corps d'un aliéné échappé de l'asile de Pontorson, le nommé Victor Chalin, a été retrouvé atrocement mutilé sur la voie ferrée, où il avait cherché une fin tragique.",
      "Troyes : Le nommé Coquard, armé de fusils de chasse et d'un revolver, s'est barricadé à son domicile, menaçant de faire feu sur quiconque tenterait d'approcher de sa demeure."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Sports",
    "title": "L'utilité de l'automobile pour les médecins",
    "summary": "Une étude du 'Progrès Médical' démontre que, malgré un coût initial supérieur, l'automobile représente une économie réelle sur le long terme pour les médecins de campagne par rapport aux attelages hippiques.",
    "paragraphs": [
      "Une étude parue récemment dans 'Le Progrès Médical' compare les frais d'entretien d'un attelage hippique traditionnel et ceux d'une automobile pour les médecins de campagne.",
      "Il ressort de cette analyse que, malgré des frais de premier établissement bien plus élevés, l'usage de la voiture automobile procure une économie réelle sur le long terme pour les praticiens contraints aux déplacements incessants dans les campagnes."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Accident au Mont-Valérien",
    "summary": "M. Raoul Belline, jeune employé de commerce, a été grièvement renversé par une voiture alors qu'il circulait boulevard de Versailles. Il a été transporté d'urgence à l'hôpital Laënnec.",
    "paragraphs": [
      "Un employé de commerce, M. Raoul Belline, âgé de dix-huit ans, demeurant rue du Mont-Valérien, a été renversé hier matin, boulevard de Versailles, par une voiture circulant à vive allure.",
      "Relevé grièvement blessé par les passants, il a été immédiatement transporté à l'hôpital Laënnec où les chirurgiens ont pris en charge ses blessures."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Arrestation d'un escroc à Puteaux",
    "summary": "M. Payaud, commissaire de police, a appréhendé Jean Lhagner, un individu de vingt-quatre ans accusé d'avoir escroqué environ 20 000 francs à des commerçants par le biais de fausses traites.",
    "paragraphs": [
      "M. Payaud, commissaire de police, a arrêté hier chez sa maîtresse, où il s'était réfugié, rue de la République, un chevalier d'industrie, le nommé Jean Lhagner, âgé de vingt-quatre ans, se disant commissionnaire en dentelles, demeurant rue Félix-Faure, qui, à l'aide de fausses traites tirées sur des commerçants, avait réussi à leur escroquer 20 000 francs environ.",
      "Lhagner, après interrogatoire, a été écroué au dépôt."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Tragique accident à Levallois-Perret",
    "summary": "Le jeune Louis Stoquei, âgé de deux ans, a succombé à ses blessures après avoir renversé une marmite d'eau bouillante dans le lavoir de ses parents.",
    "paragraphs": [
      "Un enfant de deux ans, Louis Stoquei, dont les parents exploitent le lavoir de la place du Château, jouait seul, hier après-midi, près d'un poêle sur lequel bouillait une marmite d'eau.",
      "Le poêle ayant été renversé, le pauvre petit reçut sur le corps le liquide brûlant et a été horriblement atteint au ventre, à la poitrine et au visage.",
      "Transporté d'urgence à l'hôpital des Enfants malades, il y a expiré à son arrivée."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Cambriolage à La Garenne-Colombes",
    "summary": "L'usine de treillages du boulevard de la République a été la cible d'un cambriolage nocturne, malgré la proximité immédiate d'un poste de police.",
    "paragraphs": [
      "Des malfaiteurs se sont introduits la nuit dernière, à deux pas du poste de police, dans l'usine de treillages du boulevard de la République, et l'ont mise au pillage.",
      "M. Mozurié, commissaire de police de Courbevoie, a immédiatement ouvert une enquête."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Accident à Villeneuve-la-Garenne",
    "summary": "La couturière Juliette Bassy, victime d'une chute sur le verglas, a été transportée à son domicile dans un état jugé très préoccupant.",
    "paragraphs": [
      "La dame Juliette Bassy, couturière, âgée de trente-sept ans, demeurant avenue de Saint-Ouen, glissant sur le sol durci par le verglas, est tombée malencontreusement.",
      "La malheureuse, malgré les soins qui lui ont été prodigués, n'a pas repris connaissance ; elle a été transportée à son domicile dans un état des plus alarmants."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Anniversaire de la bataille de Buzenval",
    "summary": "La commémoration de la bataille de Buzenval sera célébrée le dimanche 20 janvier par des cortèges solennels partant de Rueil et de Garches.",
    "paragraphs": [
      "L'anniversaire de la bataille de Buzenval, livrée le 19 janvier 1871 sur le territoire de Rueil, et où se dresse le monument commémoratif, aura lieu le dimanche 20 janvier.",
      "Le cortège partira de la mairie de Rueil à une heure et demie précise pour se rendre directement au monument.",
      "Un autre cortège partira de Garches, le même jour à deux heures, pour célébrer ce même anniversaire."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Bagarre entre mariniers à L'Île-Saint-Denis",
    "summary": "Une violente rixe entre deux mariniers rivaux, Richard Dimermann et Édouard Flemmenc, a provoqué un saccage général dans un débit de vins, nécessitant l'intervention musclée de dix agents de police.",
    "paragraphs": [
      "Deux mariniers, Richard Dimermann, âgé de vingt-cinq ans, et Édouard Flemmenc, vingt-huit ans, dont les péniches sont amarrées à l'Île-Saint-Denis, se disputaient depuis quelques jours le cœur d'une marinière.",
      "L'avant-dernière nuit, ils se rencontrèrent dans un débit de vins voisin du pont de l'Île et en vinrent aux mains.",
      "Tout aussitôt une bagarre éclata dans l'établissement, leurs amis respectifs ayant pris parti pour chacun d'eux. En un clin d'œil, verres, bouteilles et chaises volèrent dans la salle, où tout fut brisé.",
      "Deux agents, attirés par le bruit, intervinrent mais ils furent roués de coups, et il fallut l'intervention de dix de leurs collègues pour les dégager, rétablir l'ordre et emmener au commissariat de police les deux principaux auteurs de la bagarre.",
      "Ajoutons qu'au cours de cette affaire, trois agents ont été grièvement contusionnés, de même que plusieurs des combattants."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Incendie à La Plaine-Saint-Denis",
    "summary": "Un accident sur un siphon transvaseur a provoqué une violente explosion de vapeur de sulfure de carbone dans une usine de la Plaine-Saint-Denis, obligeant les pompiers à une intervention périlleuse.",
    "paragraphs": [
      "Dans l'après-midi d'hier, vers trois heures, un incendie s'est déclaré rue du Landy, dans la fabrique de sulfure de carbone dirigée par M. Deirs, où se produisit il y a environ un an une explosion qui fit plusieurs victimes.",
      "Par suite d'un accident survenu à un siphon transvaseur, un jet énorme de vapeur de sulfure s'échappa soudain avec un bruit formidable, suivi bientôt d'une immense gerbe de flammes qui fit voler en éclats les vitres de la toiture de l'usine.",
      "Immédiatement, les pompiers de Saint-Denis intervinrent sous la direction de leur capitaine, M. Richter, et maîtrisèrent l'incendie après une heure de travail, réussissant à préserver de l'atteinte des flammes les cuves pleines de sulfure.",
      "M. D'Homme, commissaire de police, a ouvert une enquête."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Enfant sauvé de la noyade à Pantin",
    "summary": "Un jeune garçon de onze ans, Maurice M., a fait preuve d'un courage exemplaire en plongeant dans les eaux du canal de l'Ourcq pour arracher son jeune camarade à une mort certaine.",
    "paragraphs": [
      "Des enfants de huit à dix ans s'amusaient hier après-midi sur les berges du canal de l'Ourcq, non loin du pont de la Mairie.",
      "Soudain, l'un d'eux, Georges Finck, dont les parents demeurent rue de Paris, emporté par son élan, tomba à l'eau et fut rapidement entraîné par le courant.",
      "Déjà il disparaissait, lorsqu'un autre enfant, Maurice M., de onze ans, voyant le danger que courait son petit camarade, s'élança à son secours et parvint à le saisir. Deux minutes après, il le ramenait sur la berge, vivant encore.",
      "Transis de froid, les deux enfants furent soignés au poste de secours, puis conduits au commissariat de police de M. Marie, qui a vivement félicité le jeune sauveteur dont la famille habite 196, rue de Paris."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Agression violente à Montreuil-sous-Bois",
    "summary": "Le mécanicien Louis Goldschmitt, violemment agressé à coups de pelle à feu lors d'une rixe à Montreuil-sous-Bois, est plongé dans un état comateux préoccupant. La police a ouvert une enquête.",
    "paragraphs": [
      "Il y a quelques jours, au cours d'une rixe violente dans l'usine électrique de la Compagnie générale des omnibus, rue de Lagny, à Montreuil-sous-Bois, un mécanicien, Louis Goldschmitt, âgé de vingt-huit ans, demeurant 71, rue de Lagny, fut frappé violemment à la base du crâne d'un terrible coup de pelle à feu.",
      "Arraché par ses camarades des mains de ses agresseurs, qui se disposaient à lui faire un mauvais parti, le blessé fut conduit dans une pharmacie voisine où on lui donna les premiers soins, puis transporté à l'hôpital Saint-Antoine.",
      "Après une nuit passée dans cet établissement, on le jugea hors de danger et, après lui avoir signé son exeat, on le mit à la porte. Louis Goldschmitt regagna péniblement Montreuil-sous-Bois, et, à peine arrivé à son domicile, il dut s'aliter et perdit aussitôt connaissance.",
      "Depuis, le malheureux reste dans l'état comateux le plus complet et les médecins qui lui prodiguent leurs soins craignent une issue fatale.",
      "M. Roussit, commissaire de police, a ouvert une enquête."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Accident de la route à Saint-Mandé",
    "summary": "Une habitante de Saint-Mandé, Mme Léonie Marlot, a été violemment renversée par un tilbury dont le cheval s'était emballé. La victime, souffrant d'une fracture, a été hospitalisée.",
    "paragraphs": [
      "Mme Léonie Marlot, âgée de quarante-neuf ans, traversait, hier soir, la rue lorsqu'elle fut renversée par un tilbury dont le cheval s'était emporté. La pauvre femme, relevée la jambe gauche fracturée, a été conduite à l'hôpital Saint-Antoine."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Accident mortel de travail à Montrouge",
    "summary": "Un sommelier de 67 ans, M. Louis Dettwiller, a trouvé la mort à Montrouge, écrasé par un fût de vin qu'il tentait de descendre en cave. Il a succombé à ses blessures à l'hôpital Broussais.",
    "paragraphs": [
      "Un sommelier, M. Louis Dettwiller, âgé de soixante-sept ans, était occupé hier à descendre des pièces de vin dans la cave d'un débitant, 5, rue Barbès, à Montrouge. Par suite de la chute d'un fût, le malheureux tomba à la renverse, reçut le lourd fardeau sur le corps et eut la colonne vertébrale fracturée.",
      "L'infortuné a été transporté à l'hôpital Broussais, où il a succombé à ses blessures."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Incendie criminel à Vanves",
    "summary": "Une baraque habitée par les époux Rodot a été détruite par un incendie suspect à Vanves. Les époux Jourdan, récemment perquisitionnés et ayant proféré des menaces, sont à la disposition du commissaire.",
    "paragraphs": [
      "Un incendie a consumé, hier après-midi, une baraque en planches portant le numéro 8 de la rue de Paris, à Vanves. Les voisins n'ont pu sauver que quelques meubles appartenant aux époux Rodot, qui habitaient cette maison.",
      "On croit que cet incendie est dû à la malveillance et qu'il a été allumé par les époux Jourdan, voisins des époux Rodot.",
      "En effet, le matin même, un magistrat, informé d'un vol, avait perquisitionné chez les époux Jourdan. Furieux, ces derniers avaient déclaré qu'ils se vengeraient. Ils ont été consignés à la disposition de M. le commissaire."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Arrestation d'un employé infidèle à Bonnières",
    "summary": "Un employé de bureau de tabac nommé Arnette a été arrêté à Bonnières. Accusé de vols répétés, il a été écroué après la découverte de marchandises détournées à son domicile lors d'une perquisition.",
    "paragraphs": [
      "Un nommé Arnette vient d'être arrêté sous l'inculpation de plusieurs vols. Employé pendant quelques mois au bureau de tabac de la localité, Arnette avait détourné différentes marchandises qui furent retrouvées chez lui au cours des perquisitions opérées par le parquet de Mantes. Le coupable a été écroué à la prison de cette ville."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Accident mortel à Mantes",
    "summary": "À La Roche-Guyon, le rentier Jean Langlois, âgé de 76 ans, est décédé tragiquement. Glissant sur le sol glacé de son jardin, il est tombé dans le puits qu'il approchait pour puiser de l'eau.",
    "paragraphs": [
      "M. Jean Langlois, âgé de soixante-seize ans, rentier à La Roche-Guyon, a été victime, avant-hier, d'un mortel accident. En venant chercher de l'eau dans un puits situé au milieu de son jardin, le vieillard glissa sur le sol glacé et, ne pouvant se retenir à la margelle, il fut projeté dans l'orifice. Ce n'est qu'après deux heures de recherches et de travail que le cadavre de M. Langlois a pu être retiré."
    ]
  },
  {
    "id": 50,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Incendie à Corbeil",
    "summary": "Un violent incendie a détruit la demeure et la grange de Mme Coquard à Champcueil, près de Corbeil. Alertée par un voisin, la famille a pu s'échapper à temps. Les dégâts matériels sont couverts par assurance.",
    "paragraphs": [
      "Un incendie a éclaté, la nuit dernière, chez Mme Coquard, ménagère à Champcueil. Un voisin, ayant aperçu des flammes s'échappant de la toiture, a donné l'alarme et réveillé Mme Coquard ainsi que ses deux enfants.",
      "Malgré les efforts des sauveteurs, la maison et la grange attenante à l'immeuble ont été totalement détruites. Les pertes, qui sont très importantes, sont heureusement couvertes par une assurance. On ignore les causes exactes de ce sinistre."
    ]
  },
  {
    "id": 51,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales et programmes",
    "summary": "Au programme des matinées de dimanche, la fermeture du théâtre des Bouffes-Parisiens pour litiges financiers et le triste internement de la comédienne Léontine Massin, ancienne créatrice du rôle de Nana.",
    "paragraphs": [
      "Matinées de demain dimanche : Comédie-Française (Horace et les Fourberies de Scapin), Opéra-Comique (La Basoche et les Noces de Jeannette), Théâtre-Antoine (La Parisienne, Main gauche et l'Article), Opéra-Populaire (Paul et Virginie).",
      "Le théâtre des Bouffes-Parisiens est fermé depuis trois jours. Le bruit court que c'est M. Coudert, propriétaire du droit au bail, qui a fait procéder à cette fermeture à la suite de difficultés survenues entre lui et les locataires actuels.",
      "On annonce que Léontine Massin, la belle créatrice de la Nana de Zola et de Busnach, a dû être internée à la maison de santé de Charenton, étant tombée dans le dénuement."
    ]
  }
];
