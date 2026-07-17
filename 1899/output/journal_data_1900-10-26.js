// Date: 1900-10-26
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-10-26 (Version Restaurée, 16 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie",
    "title": "Un recensement complet de la population laborieuse de France",
    "summary": "L'Office du travail dresse un bilan exhaustif de la main-d'œuvre française. De l'agriculture à l'industrie en passant par les professions libérales, cette statistique révèle la structure socio-économique du pays en 1899.",
    "paragraphs": [
      "L'Office du travail, cette utile institution qui fait partie des services du ministère du Commerce, vient de mener à bien une gigantesque entreprise : un recensement complet de la population laborieuse de France.",
      "Ce document constitue une illustration magistrale de l'histoire économique de la fin du dix-neuvième siècle. À ce titre, autant que par les réflexions qu'en suggère parfois la lecture, il mérite de retenir notre attention.",
      "Si nous examinons les résultats d'ensemble, nous voyons que sur 18 millions 300 mille travailleurs nationaux, il faut compter plus de 4 millions de femmes ; soit une femme pour trois hommes environ.",
      "Le groupe le plus important de l'activité laborieuse est le groupe agricole. Les champs et les forêts accaparent les deux cinquièmes des efforts de toute la population qui peine.",
      "J'arrive aux travailleurs industriels. Ils sont plus de 5 millions répandus dans les usines, les manufactures, les grands et petits ateliers du pays.",
      "Si de l'industrie nous passons au commerce, nous constatons que ce commerce français est, en ce qui concerne le personnel, quatre fois plus modeste que l'industrie.",
      "L'examen de l'attribution des professions libérales suscite également quelques remarques : 200 000 hommes, 140 000 femmes. C'est dans ce milieu intellectuel que se sont propagées les idées féministes.",
      "Beaucoup plus considérable est la foule des fonctionnaires des deux sexes : pas bien loin de 700 000 personnes, dont à peine 100 000 femmes.",
      "La statistique mentionne même dans cette catégorie treize mille personnes à sexe inconnu. Malgré les petites défaillances de ce genre, le tableau constitue un précieux et magistral document économique."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Fruit Défendu",
    "summary": "",
    "paragraphs": [
      "Le soir, comme elle allait se mettre au lit, elle aperçut tout à coup, au milieu de sa chambre, traînant sur le tapis, une lettre sans une enveloppe fermée.",
      "La lettre est de Lui. Elle écoute, la tête penchée. Elle a cru, un moment, que des pas se rapprochaient de sa chambre. Pour plus de sécurité, elle va fermer la porte et ses yeux, affamés de lire, parcourent les phrases brûlantes.",
      "Il lui parlait de son amour et de sa tristesse, mais il lui disait qu'il n'avait jamais douté d'elle, malgré son silence, malgré le mariage qu'elle avait accepté.",
      "Elle relut cette lettre vingt fois. Lentement, le poison qu'elle distillait entra dans son âme.",
      "Entre elle et Gertrude, pas un mot sur ces lettres. Régine n'avait pas encore répondu. Puis, dans une lettre, il disait : « Dans huit jours, on vous mariera. Je ne veux même pas savoir son nom. C'est moi que vous aimez. »",
      "Elle écrivit : « Je t'aime. Je ne me marierai pas. Garde-moi ton amour. » Elle remit la lettre à Gertrude. Gertrude prit la lettre, remarqua qu'il n'y avait pas d'adresse. Régine lui demanda de la remettre à Jean.",
      "Jean Carlier était un nom inventé pour la sécurité de son aventure d'amour avec Rose-Marie. Son vrai nom était Jean Villardier. Il avait perdu ses parents à dix ans et, à vingt et un ans, il s'était jeté corps et âme dans les plaisirs de Paris, jusqu'à sa rencontre avec Rose."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Chronique Politique",
    "title": "M. Waldeck-Rousseau à Toulouse",
    "summary": "",
    "paragraphs": [
      "Voici, tel qu'il a été officiellement arrêté, le programme du conseil à Toulouse, où M. Waldeck-Rousseau est attendu dimanche 28 octobre.",
      "Il arrivera à 8h59 du matin. À midi, un déjeuner intime lui sera offert par le préfet. À deux heures et demie, il présidera la cérémonie de la pose de la première pierre de la caserne d'infanterie.",
      "À sept heures du soir aura lieu un grand banquet à la salle des Jacobins, au cours duquel M. le président du conseil prendra la parole."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Le voyage du Ministre de la Guerre",
    "summary": "",
    "paragraphs": [
      "Le général André a été reçu avant-hier à Blida par M. Mauguin et la municipalité. Après la visite des divers établissements militaires, le ministre a assisté à un banquet.",
      "Le général André s'est embarqué hier matin, à huit heures, à bord du croiseur le Chanzy qui était venu spécialement à Alger le chercher."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Étranger",
    "title": "M. Chamberlain et la situation anglaise",
    "summary": "",
    "paragraphs": [
      "M. Chamberlain vient de prononcer, dans la cité de Londres, un discours qui est un monument de fanfaronnades et d'erreurs, mais qui, cette fois, ne cherche querelle à personne.",
      "Jamais un ministre n'a cherché à flatter les passions populaires par des moyens plus grossiers. La nation britannique, malgré la majorité obtenue par le ministère, vient de prouver que l'impérialisme rencontrait de nombreux adversaires.",
      "M. Chamberlain a parlé de la guerre du Transvaal comme d'une preuve de la puissance militaire anglaise. Tout démontre le contraire. Au bout d'un an, l'Angleterre n'a pas réussi à soumettre un petit peuple de paysans."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Actualités",
    "title": "Le retour de la mission Foureau-Lamy",
    "summary": "",
    "paragraphs": [
      "Après quarante-huit heures de retard, la Ville-de-Pernambuco, qui porte la mission Foureau, a enfin été signalée en rivière à Bordeaux.",
      "Le vapeur Gironde-et-Garonne avait quitté Bordeaux pour aller rejoindre la mission. Le transbordement a eu lieu aussitôt en pleine rivière.",
      "L'arrivée du vapeur à Bordeaux a été accueillie avec enthousiasme. Lorsque les vaillants explorateurs descendent à terre, un immense cri de « Vive la France ! Vive l'armée ! » se fait entendre.",
      "Le colonel Sylvestre souhaite la bienvenue aux arrivants et le général Percin remet les distinctions accordées par le gouvernement aux membres de la mission."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Sauvage agression à Meaux",
    "summary": "",
    "paragraphs": [
      "Une tentative de meurtre a été commise la nuit dernière à l'extrémité de la ville de Meaux. Mme Mariant, cultivatrice, a été assaillie par un individu qui la roua de coups et la traîna dans la direction du canal de l'Ourcq.",
      "Les agresseurs ont été arrêtés par M. Dullocq, maire de Crécy. L'un d'eux, Louis Lecat, repris de justice, a fait des aveux dans la soirée."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "La découverte du corps du capitaine de France",
    "summary": "Le corps du capitaine de France, disparu en juillet dernier, a été retrouvé au fond d'un précipice près du fort du Télégraphe, en Maurienne, mettant fin à l'incertitude sur les causes de son décès.",
    "paragraphs": [
      "On vient de découvrir le cadavre de l'infortuné capitaine de France au fond d'un précipice de 400 mètres, situé au-dessous du fort du Télégraphe, en Maurienne.",
      "Le 15 juillet dernier, le capitaine de France partait seul, à pied, dans la montagne. La famille, malgré d'intenses recherches, n'avait rien trouvé. On admit généralement qu'il était tombé accidentellement dans le torrent du Galibier."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Économie",
    "title": "Notre commerce extérieur",
    "summary": "",
    "paragraphs": [
      "La direction des douanes vient de publier le tableau général du commerce de la France pour 1899. Rien de plus réconfortant que la lecture de ces statistiques.",
      "L'année 1899 a enregistré pour notre trafic international le plus fort chiffre qui ait jamais été atteint : 8,670 millions. C'est un progrès de millions sur les années précédentes.",
      "Nos exportations ont bénéficié de cette plus-value. Notre meilleur client est toujours l'Angleterre."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Chronique Politique",
    "title": "L'agrandissement de Paris",
    "summary": "Un projet d'envergure, soumis à M. Caillaux, ministre des Finances, envisage la démolition partielle des fortifications de Paris et l'annexion de plusieurs communes de banlieue à la capitale.",
    "paragraphs": [
      "Il est fortement question de démolir une partie du mur d'enceinte de Paris et d'annexer à la capitale un certain nombre de communes de la banlieue.",
      "Cette idée, mise en avant par quelques personnalités, a été soumise à M. Caillaux, ministre des Finances, qui a réuni une commission composée de douze membres.",
      "Sa recevabilité a été mise en question, mais le projet demeure, quoi qu'on en ait dit, à l'état de projet."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "Le projet de démolition du mur d'enceinte",
    "summary": "",
    "paragraphs": [
      "La commission s'est séparée en se donnant rendez-vous à hier 25 octobre pour plus ample discussion. Mais M. Caillaux, ministre des Finances, retenu par d'autres occupations, a ajourné la réunion au 26 octobre. La séance comportera tout simplement l'examen du projet que défendront ses auteurs contre les premières objections, puis on décidera si réellement le projet doit être mis à l'étude ou purement et simplement rejeté.",
      "La proposition soumise à la commission comporte quatre principaux articles : Démolition du mur d'enceinte des villes de Boulogne-sur-Seine, Neuilly, Levallois-Perret et Saint-Ouen ; Vente des terrains désaffectés ; Reconstruction du mur d'enceinte.",
      "Nous avons hier pu joindre une personne fort au courant de la question, d'autant plus qu'elle exerce une charge publique à Levallois-Perret. Notre interlocuteur s'est exprimé en ces termes : « Comment voulez-vous que notre population exclusivement composée de travailleurs pour la plupart peu rétribués, soit satisfaite de l'état de choses dont on nous menace ? »",
      "Nous ne gagnons pas grand'chose et nous ne subsistons, en général, d'une façon un peu aisée que parce que nous ne souffrons pas des impositions dont les Parisiens sont frappés. Nous payons à un taux infiniment moins élevé que les Parisiens le pain, le vin, le charbon, le pétrole, tout ce qui est enfin nécessaire à la vie. Et l'on veut que bénévolement nous renoncions à ces avantages. Pourquoi ? Pour voir bâtir des maisons à six étages ? Non, voyez, c'est une plaisanterie, d'autant plus que cela ne diminuera pas d'un centime le prix des loyers parisiens.",
      "A Neuilly c'est une autre antienne. Neuilly prétend aussi rester elle-même. A Boulogne, ville un peu composite en tant que population, les arguments sont les mêmes, ainsi d'ailleurs qu'à Saint-Ouen."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Étranger",
    "title": "Nouvelles de Chine",
    "summary": "",
    "paragraphs": [
      "On a reçu hier des télégrammes de M. Pichon et de nos consuls à Han-Kéou et à Tché-Fou.",
      "Le correspondant du Standard à Shanghaï prétend que, dans les cercles bien informés, on s'attend à ce que les Chinois fassent cet hiver une sérieuse tentative pour chasser les troupes étrangères de Pékin.",
      "M. Pichon, ministre de France à Pékin, télégraphie à la date du 22 octobre : « Le relève d'une fièvre muqueuse qui m'a toujours laissé assez de liberté d'esprit pour me tenir au courant des affaires. De l'avis des médecins, il n'y a plus aucune inquiétude à avoir sur mon cas. Je traite quotidiennement les affaires avec M. d'Anthouard et j'espère être très prochainement en mesure de reprendre la direction personnelle de la légation. »",
      "M. de Marrilly, consul de France à Han-Kéou télégraphie : « Aussitôt que j'ai su que l'impératrice passait du Chan-Si dans le Chen-Si et qu'elle se dirigeait vers Si-Ngan-Fou, j'ai fait observer à Tchang-Tche-Tong, vice-roi de Han-Kéou, qu'il était absolument nécessaire de sauvegarder la vie des missionnaires italiens du Chen-Si. Un décret impérial a été rendu, et les fonctionnaires locaux de cette province sont rendus personnellement responsables de tout désordre. »"
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Étranger",
    "title": "Discours de M. Chamberlain à Londres",
    "summary": "Lors d'un banquet à Londres, M. Chamberlain a revendiqué avec emphase l'impérialisme britannique, célébrant la grandeur nouvelle d'un Empire embrassant quatre cents millions d'âmes et affirmant sa suprématie mondiale.",
    "paragraphs": [
      "M. Chamberlain a prononcé hier soir, à un banquet qui lui a été offert par l'une des grandes compagnies commerciales de la Cité, un long et important discours.",
      "M. Chamberlain a commencé par établir le contraste entre l'attitude de l'Angleterre vis-à-vis de ses colonies depuis l'indépendance des États-Unis et l'attitude nouvelle qu'elle a prise aujourd'hui. « Nous sommes, a-t-il dit, des impérialistes, et nous avons enfin fait taire la peur d'être grands, cette peur si lâche qui est la honte du temps passé. »",
      "Il a évoqué l'Empire : « Pensez-y, messieurs, il s'agit d'un empire comme la terre n'en a encore jamais vu. Il embrasse quatre cents millions d'âmes. »",
      "Après avoir parlé du sceptre des mers que l'Angleterre continue à tenir, M. Chamberlain a déclaré que, même sur terre, aucune nation du monde n'aurait pu faire ce qui a été fait au Transvaal. Il a terminé en disant que les douze mois qui viennent de s'écouler ont vu naître un empire nouveau."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident de travail à Épinal",
    "summary": "",
    "paragraphs": [
      "Un terrible accident s'est produit ce matin à la carrière de granit. Vers onze heures, MM. Remmé, chef de chantier, et Alcide Laheurte, chef de mine, se mettaient en mesure de préparer un fourneau de mine. Ils introduisirent dans le bloc de granit dix livres de poudre.",
      "Une explosion formidable se produisit. Remmé fut lancé à 10 mètres contre les rochers. Son compagnon eut le courage de se précipiter au secours de Remmé, mais celui-ci avait les jambes mutilées et la poitrine défoncée ; il expirait vingt minutes après. Les profondes brûlures que Laheurte a reçues mettent sa vie en danger."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Économie",
    "title": "L'Exposition universelle : la semaine supplémentaire",
    "summary": "",
    "paragraphs": [
      "La décision officielle intervenue avant-hier, qui prolonge de six jours pleins la durée de l'Exposition universelle, n'a pas été sans susciter de nombreux commentaires. Les exposants se réjouissent de la prolongation qui leur permettra de conclure de nouveaux accords.",
      "Quoi qu'on dise, aucune décision officielle n'a encore été prise concernant la sortie des marchandises, mais l'administration ne leur fera point de difficultés. Tous les objets vendus pourront franchir les portes de sortie, à partir du 6 novembre, sur le vu de pièces justifiant de la vente."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Justice",
    "title": "Le crime d'Hermeville",
    "summary": "",
    "paragraphs": [
      "La cour d'assises de la Meuse a prononcé hier la peine de mort contre un jeune homme nommé Ernest-Stéphane Michel, accusé de faux, usage de faux et vol.",
      "Michel, ouvrier mécanicien, pour commettre ses vols, fabriquait de fausses lettres au nom d'une demoiselle Roux, pour arriver à se procurer des fonds à la banque Paul, de Verdun."
    ]
  }
];
