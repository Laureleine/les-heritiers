// Date: 1900-08-19
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-08-19 (Version Restaurée, 30 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique",
    "title": "Les fléaux de la suggestion",
    "summary": "À propos du prochain congrès sur la suggestion mentale, une réflexion sur la crédibilité scientifique de cette pratique, souvent exploitée par des charlatans aux conséquences parfois tragiques.",
    "paragraphs": [
      "Les congrès succèdent aux congrès. Toutes les sciences y passent, même celles qui n'ont point reçu le visa officiel, et c'est ainsi qu'on nous annonce un congrès de la suggestion mentale.",
      "Tout le monde a entendu parler de la suggestion mentale. En fait, c'est une opération de l'esprit comme les autres, ni plus compliquée, ni moins naturelle, mais d'un effet si étrange qu'on l'a tenu longtemps pour impossible.",
      "La suggestion mentale n'est après tout qu'un succédané de la suggestion ordinaire. Un célèbre professeur de l'université du Wyoming en faisait l'expérience récente, il y a quelque temps, dans un de ses cours publics.",
      "Le professeur a raconté comment, en utilisant de l'eau distillée présentée comme une substance odorante, il a réussi à faire sentir une odeur imaginaire aux trois quarts de son auditoire.",
      "Voilà ce dont est capable la suggestion ordinaire. La suggestion mentale est-elle capable des mêmes miracles ? Sans aucun doute, affirment Charcot, Luys, Bernheim, MM. Richet, Paul Janet, etc.",
      "Le congrès qui va s'ouvrir tranchera peut-être cette délicate question. Elle est d'ordre scientifique et peut donc être étudiée expérimentalement. Mais la vérité est qu'on peut croire parfaitement à la suggestion et n'accorder qu'un médiocre crédit aux sorciers, cabalistes, mages, nécromans et autres visionnaires de même farine.",
      "Le Journal du Magnétisme ne racontait-il pas, dans son dernier numéro, une anecdote mettant en scène un député des colonies, M. Légitimus, un ministre actuel et une certaine dame X. qui, magnétisée, aurait reçu l'ordre de se rendre près du ministre ?",
      "L'état du sujet s'empira, dit M. Erny. Mme X. passa de vie à trépas. Voilà un récit bien extraordinaire. Malgré toute l'autorité de M. Erny, je n'ajoute qu'une foi médiocre à cette mystérieuse histoire. Ce qui est vrai, c'est que très souvent la suggestion, maniée par des mains inhabiles, a entraîné de très graves conséquences."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un mort et trente blessés à l'Exposition",
    "summary": "Un tragique accident est survenu hier lors de la fête nautique : l'effondrement de la balustrade de la passerelle du boulevard Latour-Maubourg a causé la mort d'un homme et blessé trente personnes.",
    "paragraphs": [
      "Un très grave accident s'est produit hier à l'Exposition, au moment où la fête nautique se déroulait sur la Seine : la balustrade de la passerelle du boulevard Latour-Maubourg, située au bout du pont des Invalides, s'est écroulée subitement, vers dix heures et demie.",
      "Une trentaine de personnes ont été précipitées sur le sol d'une hauteur qui varie entre deux et trois mètres. Par un miraculeux hasard, personne ne se trouvait sous la passerelle au moment où la balustrade s'est abattue.",
      "M. Edmond Brassard, âgé de 40 ans, maître d'armes, a succombé quelques instants après son admission à l'hôpital de la Charité. Il était marié et père de deux enfants.",
      "M. Millerand, ministre du Commerce, s'est rendu sur le lieu de l'accident. Les causes demeurent encore fort obscures ; il serait même possible que la malveillance ne fût pas étrangère à cet événement. Une enquête est en cours."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Collision en Seine",
    "summary": "Un accident fluvial entre un bateau parisien et une embarcation légère a eu lieu hier soir. Un marinier a été grièvement blessé et transporté à l'hôpital de la Charité.",
    "paragraphs": [
      "Dans la soirée d'hier, vers huit heures et demie, un accident s'est produit en Seine, entre les ponts Royal et de Solférino. Le bateau parisien numéro 7 aborda une légère embarcation montée par six personnes.",
      "Par suite du choc, deux des passagers de l'embarcation ont été projetés à l'eau. L'un d'eux, M. Pierre Nélis, un marinier âgé de vingt et un ans, a été grièvement contusionné et dirigé sur l'hôpital de la Charité."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Social",
    "title": "Travail et Solidarité",
    "summary": "La distribution des récompenses à l'Exposition a été marquée par des discours célébrant le travail, la solidarité et la concorde, illustrés par le développement des œuvres de prévoyance.",
    "paragraphs": [
      "La cérémonie de la distribution des récompenses à la salle des Fêtes a été digne en tous points de la grande solennité internationale que la France vient de célébrer. Les discours qui ont été prononcés par le Président de la République et par le ministre du Commerce laisseront sur les assistants une impression profonde.",
      "Les deux discours d'hier n'ont été, sous des formes diverses, que des hymnes continus au travail, à la science, à la concorde, à la solidarité. L'Exposition nous a présenté le magnifique développement des œuvres de mutualité, de prévoyance, d'assistance et d'assurance."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'incendie de Clichy",
    "summary": "Un violent incendie a ravagé les entrepôts de la Société de voitures de place à Clichy. Si les pertes en fourrage sont considérables, l'ensemble des cent cinquante chevaux a pu être sauvé.",
    "paragraphs": [
      "Hier, vers une heure et demie de l'après-midi, un cocher nommé Jugnet aperçut une gerbe de flammes dans un grenier situé dans le bâtiment de la Société de voitures de place, rue Klock à Clichy. Cinq mille bottes de paille et deux mille bottes de foin ont été consumées.",
      "Grâce à la rapidité des secours, on a pu sauver les cent cinquante chevaux. L'aile gauche du bâtiment est entièrement détruite. Plusieurs ouvriers ont été blessés et soignés par le docteur Rochon. Les causes du sinistre paraissent devoir être attribuées à la fermentation des fourrages."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Feuilleton",
    "title": "L'Immolée",
    "summary": "Délaissée par Pierre qui la condamne sans retour, Jeannine décide de quitter Larignies pour protéger son enfant. Malgré les divagations d'Hélène qui suggèrent son innocence, elle persiste dans son silence sacrificiel.",
    "paragraphs": [
      "Jeannine attendait le facteur avec anxiété. Elle espérait une lettre de M. de Courtial, mais celle qu'elle reçut de Pierre lui fut retournée sans avoir été ouverte. Il la condamnait sans retour.",
      "La jeune fille se sentait déshonorée. Elle prit la résolution de quitter Larignies pour aller travailler et élever l'enfant qu'elle portait en elle, loin de tous.",
      "Elle brûla les lettres de Pierre. Peu après, elle se rendit chez Hélène, devenue folle. André, le maître de forges, était présent. Dans sa démence, Hélène proférait des choses troublantes, suggérant que Jeannine était innocente et qu'un mystère pesait entre elles. André, en proie au doute, suppliait Jeannine de parler, mais celle-ci restait déterminée à se sacrifier."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "La cérémonie de remise des récompenses",
    "summary": "Le Président Émile Loubet a présidé la remise des récompenses de l'Exposition universelle au palais des Illusions. Une cérémonie empreinte de solennité, célébrant la paix et la fraternité entre les nations.",
    "paragraphs": [
      "L'ovation ne prit tout son éclat qu'à l'arrivée au palais du Château-d'Eau, alors que des Marseillaises retentissaient en divers points et que les cris de la foule se fondaient en une clameur triomphante.",
      "M. Alfred Picard, entouré de ses collaborateurs, accueillit le Président de la République, M. Loubet, qui mit pied à terre, accompagné des hauts fonctionnaires de l'Élysée.",
      "Le cortège pénétra dans le palais des Illusions. Les salutations d'usage furent échangées entre le Président, les ambassadeurs, les ministres plénipotentiaires et les consuls présents.",
      "Avant la cérémonie, M. Lépine, préfet de police, dirigea en personne les services d'ordre. Sous un contrôle rigoureux, les porteurs de cartes furent admis à prendre place dans les tribunes.",
      "Les gardes républicains et municipaux, précédés de leur musique, prirent position. Le coup d'œil était particulièrement réjouissant, gai et coloré par la lumière filtrant du vitrail.",
      "Mme Loubet, ainsi que Mmes Millerand, Dubois et Gomuaneu, occupaient les places réservées à cet effet.",
      "M. Émile Loubet apparut sur le palier de l'escalier d'honneur. Il s'avança entre la double haie des spectateurs, suivi par les membres du gouvernement et le corps diplomatique.",
      "La Marseillaise scanda la marche du cortège officiel. Le Président de la République prit place dans la tribune officielle, entouré des délégations des divers corps de notre armée nationale.",
      "Le tableau était admirable. Chaque nation avait délégué les types les plus caractéristiques de sa race. C'était un émerveillement de couleurs et de costumes.",
      "La musique de la garde républicaine entama la marche de Saint-Saëns, suivie du poème symphonique de M. Fernand Le Borne, « L'Hymne à la France ».",
      "M. Émile Loubet prit la parole pour remercier les hommes de bonne volonté accourus de tous les coins de l'univers pour participer à cette œuvre de concorde et de paix.",
      "Le Président souligna l'importance des congrès consacrés à la mutualité, à la prévoyance, à l'assistance et à l'économie sociale, les qualifiant de point culminant de l'Exposition.",
      "L'Exposition de 1900 aura fourni à la solidarité son expression la plus brillante, rendant à l'avenir plus fragile le triomphe de la force."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Discours de M. Millerand",
    "summary": "Le ministre Millerand a salué l'activité du commissaire Alfred Picard et souligné l'importance de l'amélioration de la condition ouvrière et de la justice sociale lors de cette Exposition universelle.",
    "paragraphs": [
      "M. Millerand prit la parole pour s'exprimer sur le travail des exposants. Il insista sur le souci d'impartialité ayant guidé la distribution des médailles.",
      "Le ministre souligna que le but principal était de passer en revue les forces de l'humanité à l'aube d'une ère nouvelle. Il rendit un hommage appuyé à l'activité intelligente du commissaire général, M. Alfred Picard.",
      "M. Millerand termina en rappelant que la perfection de l'outillage ne suffit pas si la condition de l'ouvrier ne s'améliore pas, plaidant pour une atmosphère de solidarité et de justice sociale.",
      "Le ministre salua également les artistes, qui ont su concevoir le plus prestigieux des décors pour l'ensemble de l'Exposition, ainsi que les amateurs ayant prêté leurs inestimables collections."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Remise du Palmarès",
    "summary": "Le Président de la République a officiellement remis le palmarès de l'Exposition universelle de 1900 aux présidents des jurys, lors d'une cérémonie ponctuée de symphonies magistrales.",
    "paragraphs": [
      "M. Alfred Picard, commissaire général de l'Exposition, présenta les présidents des jurys au Président de la République, qui leur remit un exemplaire de luxe du palmarès officiel de l'Exposition universelle de 1900.",
      "La cérémonie s'acheva par des symphonies de M. Fernand Le Borne, de M. Jules Massenet et de M. Ch. Widor. M. Émile Loubet quitta ensuite la salle sous les acclamations nourries de l'assistance."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un incident lors du passage du Président",
    "summary": "Un incident mineur a été causé par un homme perturbé, Alfred Jacquemard, ayant tenté de remettre une photographie au Président Loubet lors de son passage place de l'Alma.",
    "paragraphs": [
      "Au moment où le cortège présidentiel traversait la place de l'Alma, une légère émotion fut causée par l'algarade d'un pauvre fou. Un garçon limonadier, Alfred Jacquemard, âgé de quarante ans, franchit les lignes du service d'ordre et jeta une enveloppe à l'intérieur du landau.",
      "Conduit devant le commissaire, il fut trouvé porteur d'un titre et déclara vouloir remettre une photographie de sa nièce. Il a été gardé à la disposition de la justice en attendant un examen mental."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "La fête de nuit",
    "summary": "Une grandiose fête vénitienne a illuminé la Seine pour clôturer la cérémonie de l'Exposition Universelle, sous les yeux du Président de la République jusqu'à la fin de la soirée.",
    "paragraphs": [
      "Une admirable fête de nuit a terminé dignement la cérémonie. Sur la Seine, une féerique fête vénitienne déroulait ses méandres capricieux avec plus de cinq cents embarcations illuminées.",
      "Le Président de la République a contemplé ce spectacle du haut de la terrasse du palais des Congrès jusqu'à dix heures et demie. La fête a pris fin à minuit."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Social",
    "title": "La grève des cochers",
    "summary": "Les cochers grévistes maintiennent leur mobilisation après un hommage funèbre rendu à leur secrétaire syndical, et préparent un rassemblement à la porte Dauphine.",
    "paragraphs": [
      "Depuis le début de la grève des cochers, les réunions se succèdent. Les grévistes se sont rendus au cimetière pour déposer une couronne sur la tombe du secrétaire du syndicat, décédé épuisé par la fatigue et la misère.",
      "Les cochers ont décidé de se réunir à deux heures, à la porte Dauphine, pour manifester leur détermination."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "International",
    "title": "Les événements de Chine et la prise de Pékin",
    "summary": "Confirmation officielle de la prise de Pékin : les forces alliées ont libéré les légations. La cour impériale aurait fui vers le Shan-Si après des combats meurtriers.",
    "paragraphs": [
      "On a la confirmation officielle de la prise de Pékin par les forces alliées, suite à une dépêche du général Yamaguchi datée du 15 août.",
      "L'attaque a commencé le 14 dès l'aube. Les Japonais et les Russes ont attaqué par le nord, les Anglais et les Américains par le sud. Les légations ont été libérées et le personnel trouvé sain et sauf.",
      "La cour impériale aurait fui vers le Shan-Si. Le général Yamaguchi fait état de plus de quatre cents morts du côté chinois contre une centaine du côté japonais."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Roman-Feuilleton",
    "title": "La fuite de Jeannine",
    "summary": "Découvrant la disparition de Jeannine, André s'interroge sur sa fuite. Parallèlement, l'inquiétude grandit au sein du foyer face à l'aggravation de la santé d'Hélène.",
    "paragraphs": [
      "La disparition de Jeannine tourmente André. Il découvre une lettre laissée par la jeune femme où elle avoue sa honte et son intention de rester ignorée.",
      "Le maître de forges cherche à justifier cette absence auprès de la domesticité. Il est également inquiet pour sa femme Hélène, dont la maladie semble s'aggraver, et attend l'arrivée du docteur Bernaite pour tenter de la guérir."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Social",
    "title": "La grève des cochers",
    "summary": "Le conflit des cochers se poursuit. M. Bixio, pour la Compagnie générale, maintient la fermeture des dépôts tout en évoquant une volonté de dialogue, malgré quelques reprises sporadiques.",
    "paragraphs": [
      "Les grévistes ont, avant de se séparer, demandé à l'un des leurs de chanter la Grève des Cochers, dont le refrain a été repris en chœur par l'assistance.",
      "M. Bixio a fait remarquer hier que le bruit qui aurait couru d'une prochaine réunion des actionnaires de la Compagnie générale n'est pas fondé.",
      "Aucune décision n'a été prise encore à ce sujet, pas plus d'ailleurs que pour la réouverture totale ou partielle des dépôts.",
      "M. Bixio affirme être de bonnes dispositions pour une reprise du travail, bien qu'il soit obligé de maintenir jusqu'à nouvel ordre la fermeture des dépôts.",
      "Les cochers de la maison Caillé ont repris le travail hier matin, la moyenne ayant été abaissée à 15 francs."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Étranger",
    "title": "La guerre au Transvaal",
    "summary": "Lord Roberts communique les détails des combats récents au Transvaal : l'engagement du général Hunter au 15 août est plus sévère que prévu, tandis que la traque du chef Dewet se poursuit dans la région de Rustenberg.",
    "paragraphs": [
      "Lord Roberts télégraphie de Pretoria, le 17 août : L'engagement du général Hunter, le 15 août, a été plus important qu'annoncé. Le bilan s'élève à trois tués, quatre blessés et un disparu.",
      "Le colonel Hoare est cerné à Elands River. La yeomanry a livré hier un engagement à l'est d'Ottoshop.",
      "Je crains que Dewet n'ait réussi à s'échapper en divisant son armée en détachements. Aux dernières nouvelles, il se trouvait à Rustenberg."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le procès du complot",
    "summary": "Lors de son interrogatoire, l'accusé Cordier a exposé les dessous de son implication dans le complot, désignant un certain Tiano, du service médical, comme celui qui l'avait entraîné dans cette entreprise.",
    "paragraphs": [
      "Au cours de l'interrogatoire, Cordier a déclaré qu'il avait été entraîné dans le complot par les manœuvres d'un nommé Tiano, qui appartenait au service médical."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Triple noyade à Boulogne-sur-Mer",
    "summary": "Un drame effroyable s'est déroulé sur la plage de Boulogne-sur-Mer : trois jeunes employés de l'Épicerie parisienne ont péri noyés, victimes de l'élan de solidarité qui les a portés au secours d'un camarade en péril.",
    "paragraphs": [
      "Six jeunes gens, faisant partie du personnel de l'Épicerie parisienne, se baignaient à Boulogne-sur-Mer lorsqu'un jeune homme, s'étant avancé trop au large, perdit pied.",
      "Deux de ses camarades tentèrent de le secourir mais, saisis par la panique, furent entraînés dans le même sort. Un quatrième camarade a tenté de les aider mais a dû regagner la plage seul.",
      "Un sauveteur a tenté de les secourir, mais il n'a pu retirer que les cadavres des trois infortunés, nommés Joseph Plat, Émile Preuvielle et un troisième compagnon."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression à Rouen",
    "summary": "Un drame passionnel s'est produit à Rouen : Mme Cayla, marchande de vin, a poignardé Mme Azobre lors d'une violente altercation, motivée par des griefs d'ordre sentimental.",
    "paragraphs": [
      "Les gendarmes de Rouen ont été appelés pour des faits de violence. Mme Cayla, marchande de vin, a porté un coup de couteau à Mme Azobre pour se venger d'une affaire sentimentale."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Chute d'un quatrième étage",
    "summary": "Un tragique accident domestique s'est produit rue de l'Échiquier : une fillette de trois ans et demi, prénommée Valin, a fait une chute mortelle depuis le quatrième étage et a été hospitalisée dans un état désespéré.",
    "paragraphs": [
      "Une fillette de trois ans et demi, nommée Valin, demeurant 5, rue de l'Échiquier, est tombée du quatrième étage. Elle a été transportée dans un état grave à la pharmacie."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Politique",
    "title": "Echos et Nouvelles - Les Ministres",
    "summary": "M. Waldeck-Rousseau s'accorde quelques jours de repos à Saint-Malo, tandis que le ministre de l'Agriculture, Jean Dupuy, entame une tournée d'inspection des haras et écoles vétérinaires dans le département de la Corrèze.",
    "paragraphs": [
      "M. et Mme Waldeck-Rousseau sont partis à Saint-Malo pour quelques jours de repos.",
      "Le ministre de l'Agriculture, Jean Dupuy, est parti visiter des haras et des écoles vétérinaires dans le département de la Corrèze."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Social",
    "title": "Grèves à Marseille",
    "summary": "Si la situation demeure calme sur les quais marseillais, une nouvelle grève se profile : les maîtres de cabotage et patrons remorqueurs sollicitent une audience auprès de l'amiral pour présenter leurs revendications.",
    "paragraphs": [
      "La situation reste calme à Marseille malgré les groupes de grévistes circulant sur les quais.",
      "Une autre grève est en perspective : les maîtres de cabotage et les patrons remorqueurs ont demandé à voir l'amiral pour exposer leurs doléances."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Social",
    "title": "Grève au Havre",
    "summary": "Au Havre, un groupe de deux cents grévistes, composé majoritairement de chaudronniers, a fait irruption dans les ateliers des Forges et Chantiers de la Méditerranée pour inciter leurs collègues à cesser le travail.",
    "paragraphs": [
      "Au Havre, deux cents grévistes, principalement des chaudronniers, ont pénétré dans les ateliers des Forges et Chantiers de la Méditerranée pour inviter leurs collègues à cesser le travail."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Sports",
    "title": "Résultats des courses hippiques à Deauville",
    "summary": "Les courses d'obstacles de Deauville furent marquées par de nombreuses chutes. Quiès, Protocole, Férule, Grimalkin et Curieuse s'adjugent les honneurs d'une journée sportive intense malgré une assistance clairsemée.",
    "paragraphs": [
      "Journée de courses d'obstacles ; l'assistance est moins nombreuse, mais les épreuves demeurent intéressantes. Quiès gagne facilement le prix d'Hennequeville devant Bigoudi et Gélanor. Six Pences est tombé à l'avant-dernier obstacle, son jockey Makepeuce rentre à pied, souffrant d'un coup à la jambe.",
      "Protocole part en tête dans le premier steeple. Hameau tombe à la banquette ; Protocole gagne arrêté sur Brancomir et Saint-Didier.",
      "Dans le prix du Polo, Clytha prend le commandement au départ ; Maronnier et Rocamadour tombent au deuxième obstacle ; Clytha culbute en face. Chorégraphe mène alors et semble gagner, mais il est rejoint à la dernière haie par Férule, qui l'emporte nettement.",
      "Le prix de la Terrasse est enlevé par Grimalkin, battant aisément Crozan et Sparrow. Salcède est tombé au bull-finch.",
      "Le prix Reine-Mathilde réunit treize partants. Storm mène et culbute au second obstacle avec Boisricheux. Curieuse et Bénédict courent avec vingt longueurs d'avance sur le peloton. La victoire reste à Curieuse. Jupiter finit troisième devant les autres, dont Karabe, tombé à l'avant-dernier obstacle."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Météo",
    "title": "Bulletin météorologique du 19 août",
    "summary": "En ce dimanche 19 août, 231e jour de l'année, le temps se maintient au beau et au chaud sur l'ensemble du territoire français, avec une mer globalement calme sur les côtes.",
    "paragraphs": [
      "Dimanche 19 août, 231e jour de l'année, 30e jour de l'été. Saint-Louis. Lever du soleil à 4 h 51, coucher à 7 h 14. Lever de la lune à minuit, coucher à 8 h.",
      "Nous avons eu hier une belle et chaude journée. On signale des pluies en Écosse et en France, où l'on a recueilli, dans le sud et l'est, 22 mm d'eau à Belfort, 7 à Perpignan, 4 à Nice.",
      "La température monte généralement, sauf dans nos régions de l'ouest ; elle était hier matin de 12° à Stornoway, 18° à Paris, 23° à Alger, 14° à Utrecht et à Monaco. On notait 10° au Puy-de-Dôme, 9° au mont Aigoual, 7° au mont Mounier. En France, un temps beau et très chaud est probable. Situation particulière aux ports français : la mer est généralement belle."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Sports",
    "title": "Championnats du monde de cyclisme",
    "summary": "Le vélodrome du Parc-des-Princes tient ce dimanche sa dernière réunion des championnats du monde. Au programme, les 100 kilomètres professionnels et le match Jacquelin-Didier-Nauts promettent une lutte intense.",
    "paragraphs": [
      "Aujourd'hui dimanche, à 2 heures 1/2, a lieu la troisième et dernière réunion des championnats du monde au vélodrome du Parc-des-Princes, à Auteuil.",
      "Le programme comporte : le championnat du monde des 100 kilomètres professionnels, un handicap du mille, et un match entre les deux champions, amateur et professionnel, Didier-Nauts et Jacquelin.",
      "Sont engagés dans l'épreuve de 100 kilomètres : A. Chase et Walters (Anglais), Bory (Belge), Huret, Bouhours, Taylor et Bour (Français), Koby (Allemand). Comme on le voit, le lot est de premier ordre et promet une lutte passionnante. Nous croyons à la victoire de Jacquelin dans le match, et à celle de Bouhours dans les 100 kilomètres. Il sera intéressant de voir, en outre, ce que feront les Américains dans le handicap, leur spécialité."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Sports",
    "title": "Concours de natation de l'Exposition",
    "summary": "Dernière journée des épreuves de natation de l'Exposition. Les finales du 1 000 mètres et du 4 000 mètres départageront les champions internationaux avant la démonstration finale des nageurs suédois.",
    "paragraphs": [
      "Les concours de natation de l'Exposition se terminent aujourd'hui. Le programme de la journée est ainsi composé : Finale du 1 000 mètres. Départ à 1 h 30 de Puteaux, 5, quai National. Sont qualifiés : Greasley (Anglais), Evans (Anglais), Blache (Français), Lévy (Français), Whyters (Français). Arrivée, 52, quai de Courbevoie, près du pont d'Asnières.",
      "Finale de la course de 4 000 mètres (amateurs). Départ à 3 h 30 de Puteaux, 5, quai National. Sont qualifiés : Jarvis (Anglais), Halmay (Hongrois), Burgess (Français), Meyer (Hollandais), Martin (Louis) (Français), Henry (Anglais), Majuoni (Italien), Audérie (Autrichien). Arrivée, 52, quai de Courbevoie.",
      "À cinq heures, représentation par les nageurs suédois. Nous disions hier combien sont merveilleux ces nageurs, aussi ne saurions-nous trop conseiller à nos lecteurs de se rendre cet après-midi sur le quai de Courbevoie."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Sports",
    "title": "Match international de Cricket",
    "summary": "Pour la première fois, le vélodrome de Vincennes accueille un match international de cricket. Durant deux jours, des joueurs français et anglais s'affronteront dans une rencontre ouverte au grand public.",
    "paragraphs": [
      "Pour la première fois, depuis que le cricket, le jeu anglais par excellence, a été introduit en France, les Parisiens pourront assister aujourd'hui, dimanche, à un match international qui mettra aux prises quatorze joueurs de cricket français et onze joueurs anglais, choisis parmi les meilleurs de chaque pays.",
      "La partie durera deux jours, le dimanche et le lundi, de onze heures du matin à six heures et demie du soir. Elle aura lieu sur la pelouse du vélodrome de Vincennes, entièrement décoré aux couleurs anglaises et françaises. Afin de permettre au public parisien de s'initier à ce beau sport, le comité de l'Exposition a réduit les prix d'entrée à 1 franc pour les tribunes couvertes et 0 fr. 50 pour les gradins."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "La Comédie-Française débute ses représentations au Nouveau-Théâtre, tandis que Gaston Salvayre parachève un nouvel opéra. L'Athénée annonce son retour avec deux pièces à succès de Tristan Bernard.",
    "paragraphs": [
      "La Comédie-Française inaugurera demain les représentations au Nouveau-Théâtre de la rue Blanche par une représentation d'Adrienne Lecouvreur, avec Mlle Bartet dans le rôle-titre. Mlle Henriette Feuquier jouera pour la première fois le rôle d'Athénaïs, duchesse d'Aumont.",
      "Au Nouveau-Théâtre, les premières pièces remontées seront Denise, d'Alexandre Dumas fils, avec Mlle Bartet dans le rôle de Denise, et L'Ami Fritz, avec Mlle Le Grix dans le rôle de Suzel.",
      "Salah-Ed-Din est le titre d'un grand ouvrage en quatre actes et sept tableaux que vient de terminer, pour l'Opéra, le compositeur Gaston Salvayre. Le sujet a trait à la reprise de Jérusalem par les musulmans, lors de la deuxième croisade.",
      "M. Deval annonce la réouverture de l'Athénée pour le mardi 28 août avec les deux grands succès de la saison dernière : La Mariée du Touring-Club et L'Anglais tel qu'on le parle, de Tristan Bernard."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Main Gauche - Roman inédit",
    "summary": "Libéré après une entrevue décisive, un homme appréhende ses retrouvailles avec son épouse Odette. Hanté par les remords, il doit désormais affronter la vérité qu'il ne peut plus dissimuler.",
    "paragraphs": [
      "L'autre répéta d'une voix rauque : « Je suis libre. » « Oui, j'ai ordonné ta mise en liberté. On va te conduire au greffe. Après, tu n'auras plus qu'à retourner auprès de ta femme. » « Ma femme ? » fit-il avec une espèce de terreur.",
      "« Elle est venue me trouver, cette après-midi. » « Elle ? Odette ? » « Je crois, par conséquent, qu'elle t'ouvrira les bras. » Il frissonna. « Crois-tu ? Que dirai-je ? » « Elle sait certainement la vérité. Tu n'as pas autre chose à lui dire que la vérité entière. »"
    ]
  }
];
