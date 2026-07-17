// Date: 1901-07-07
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-07-07 (Version Restaurée, 52 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "L'Exode d'un peuple",
    "summary": "L'Irlande subit un déclin démographique historique alarmant. Un projet d'émigration massive vers le Pacifique est suggéré par M. Joseph O'Donoghue pour soustraire les Irlandais à la domination et aux lois britanniques.",
    "paragraphs": [
      "Les journaux d'Angleterre donnaient, il y a quelques jours, les résultats du recensement de la population qui vient d'être opéré en Irlande. Ils ne font que préciser la situation douloureuse de ce pays. Le nombre des habitants de l'Irlande était en 1850 de 8 millions. En 1871, la population s'était abaissée. Elle est maintenant tombée à quelques millions.",
      "Si l'évolution ethnique n'est pas arrêtée par une révolution ou un bouleversement politique violent, on peut calculer mathématiquement l'époque où l'Irlande sera purement britannique, et cela ne représente que peu d'années dans la vie d'un peuple.",
      "Faut-il croire que la fin des Irlandais d'Irlande sera encore plus rapide qu'on ne l'a supposé ? Il est question maintenant d'un exode en masse, d'un exode définitif. Les Irlandais, qui depuis longtemps s'en vont par petits groupes dans les diverses parties des États-Unis, émigreraient cette fois d'un coup.",
      "M. Joseph O'Donoghue, qui habite San Francisco, aurait formé le projet d'acheter quatre grandes îles de l'Océan Pacifique, non loin de l'Amérique du Sud, pour y transporter toute la population irlandaise et leur permettre de s'administrer librement, loin des landlords et des bills agraires."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Politique étrangère",
    "title": "L'Ambassade Marocaine à l'Élysée",
    "summary": "Le Président de la République a reçu hier à l'Élysée la mission diplomatique marocaine, conduite par Si-Abd-el-Krim, venue offrir dix étalons arabes et des présents précieux au nom de l'empereur du Maroc.",
    "paragraphs": [
      "Les ambassadeurs marocains ont été reçus hier, à trois heures, en audience particulière par le Président de la République. Ils venaient, sous la conduite du chef de la mission, Si-Abd-el-Krim, présenter au chef de l'État les dix splendides étalons arabes qui lui ont été offerts par l'empereur du Maroc.",
      "Si-Abd-el-Krim et les membres de sa suite ont été reçus dans le grand salon des Ambassadeurs en présence de M. Delcassé, ministre des Affaires étrangères. Outre les chevaux, ils ont offert divers cadeaux : tapis orientaux, coussins de velours brodés d'or, ainsi qu'un superbe moukhala, un sabre et un poignard à poignée incrustée de pierres précieuses.",
      "M. Émile Loubet a remercié les ambassadeurs et les a priés de transmettre l'expression de sa gratitude à l'empereur du Maroc."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame conjugal à Asnières",
    "summary": "Un drame sanglant a secoué Asnières hier : M. Léon Morel, en instance de divorce, a tiré sur son épouse et un employé dans sa boutique avant de retourner son arme contre lui-même.",
    "paragraphs": [
      "Un drame intime a mis en émoi hier après-midi les habitants de la rue de Bretagne, à Asnières. M. Léon Morel, épicier en instance de divorce, a fait irruption dans sa boutique où travaillait sa femme, Marie Morel, et lui a tiré deux coups de revolver, la blessant légèrement.",
      "Visant ensuite le garçon épicier, Henri Gigout, il manqua son coup. Avant que les spectateurs ne puissent réagir, l'épicier retourna son arme contre lui-même, se perforant la boîte crânienne. Il a été transporté à l'hôpital Beaujon dans un état grave."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique intérieure",
    "title": "La Clôture de la Session",
    "summary": "La session parlementaire est close après quatre mois de travaux marqués par le vote de la loi sur les associations, tandis que la question des retraites ouvrières demeure en suspens.",
    "paragraphs": [
      "La session ordinaire est close. Pendant quatre mois, les portes du Parlement seront fermées et la tribune sera muette, mais les Chambres se séparent dans des conditions de calme qui leur permettent de s'en aller sans préoccupation.",
      "Cette session a été laborieuse, marquée par le vote d'une loi sur les associations. La question des retraites ouvrières reste en suspens, bien que le débat ait montré une volonté unanime d'aboutir prochainement à une réforme de prévoyance sociale."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Trois enfants tués par leur mère",
    "summary": "Un crime atroce a été commis au hameau de Chamby, en Ardèche, où une mère a assassiné ses trois jeunes enfants à coups de hache avant de tenter de mettre fin à ses jours.",
    "paragraphs": [
      "Privas, 6 juillet. Un abominable crime a été commis au hameau de Chamby, commune de Montpezat. Une femme de trente-deux ans, profitant de l'absence de son mari, a tué ses trois enfants, dont l'aîné avait trois ans, à coups de hache.",
      "Après son forfait, la malheureuse a tenté de se donner la mort avec un marteau et un couteau, mais elle a survécu à ses blessures."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Nécrologie",
    "title": "Mort du prince de Hohenlohe",
    "summary": "Le prince de Hohenlohe, ancien chancelier de l'Empire allemand et figure diplomatique marquante, s'est éteint ce matin à Ragatz. Ambassadeur à Paris, il fut une personnalité majeure de la politique européenne.",
    "paragraphs": [
      "Ragatz (Suisse), 6 juillet. — Le prince de Hohenlohe, ancien chancelier de l'Empire d'Allemagne, est mort ce matin. Sa santé, déjà déclinante lors d'un récent séjour à Paris, s'est brusquement aggravée.",
      "Né le 31 mars 1819, il fut ambassadeur à Paris à plusieurs reprises et statthalter en Alsace-Lorraine avant de succéder au chancelier Caprivi, poste qu'il occupa jusqu'à sa retraite en faveur de M. de Bülow."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Assassinat de sa femme et de son fils",
    "summary": "Un drame sanglant s'est déroulé à Mansojiville : le forgeron Campunaut a assassiné son épouse et son enfant dans un accès de jalousie maladive avant de mettre fin à ses jours.",
    "paragraphs": [
      "Montauban, 6 juillet. — Le forgeron Campunaut a assassiné sa femme et son enfant à Mansojiville, suspectant son épouse d'infidélité. Après avoir tiré sur son fils et abattu sa femme dans son sommeil, il s'est suicidé avec la même arme.",
      "Le drame, lié à une jalousie maladive, a profondément consterné la population locale."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le divorcé récalcitrant",
    "summary": "À Villefranche-d'Aveyron, un individu nommé Couronne s'est barricadé à son domicile pour échapper à une ordonnance de divorce, avant d'être délogé par les gendarmes après une vive résistance.",
    "paragraphs": [
      "Rodez, 6 juillet. — À Villefranche-d'Aveyron, un homme nommé Couronne a refusé d'obtempérer à un jugement de divorce lui ordonnant de quitter son domicile. Se barricadant chez lui, il a accueilli les autorités avec un manche de pioche.",
      "Malgré sa résistance, les gendarmes sont parvenus à pénétrer dans la maison et à arrêter le récalcitrant, qui a été conduit à la maison d'arrêt."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Assassinat d'une fillette",
    "summary": "Une fillette de neuf ans, Augustine, a été retrouvée assassinée dans un bois près de Charentonneau. Le parquet a ouvert une enquête sur ce crime odieux survenu alors que l'enfant était en course.",
    "paragraphs": [
      "Un crime horrible a été découvert à Charentonneau. La petite Augustine, âgée de neuf ans, a été violée puis étranglée alors qu'elle effectuait une course pour ses parents, pêcheurs à Saint-Maur.",
      "Le corps a été retrouvé par un passant dans un bois voisin. Le parquet a ouvert une enquête pour retrouver le coupable de ce meurtre barbare."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Assassinat de la petite Augustine à Saint-Maur",
    "summary": "L'enquête sur le meurtre d'Augustine se poursuit. Le docteur Thoinot procède à l'autopsie tandis que les forces de l'ordre organisent des battues pour retrouver le meurtrier, dont l'identité demeure inconnue.",
    "paragraphs": [
      "Les autorités ont procédé aux premières constatations suite au meurtre de la petite Augustine. Le mouchoir ayant servi à l'étrangler, que M. Mahon avait coupé, a disparu, possiblement dérobé entre la découverte du corps et l'arrivée des magistrats.",
      "Le corps présentait des traces de lutte désespérée. Le docteur Thoinot a fait transporter la dépouille pour autopsie afin de déterminer si le viol a précédé ou suivi le meurtre.",
      "Malgré l'interrogation des riverains, aucun indice ni signalement du coupable n'a pu être recueilli. L'hypothèse d'un rôdeur ayant attiré l'enfant dans le bois est privilégiée, l'argent de la victime ayant disparu.",
      "Des battues sont organisées par les inspecteurs, les agents de Charenton et les gendarmes dans un large périmètre.",
      "La nouvelle a suscité une vive émotion dans la région, et les habitants de Saint-Maur, d'Alfort et de Charenton suivent les recherches avec attention."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Nécrologie",
    "title": "Obsèques de M. Laferrière",
    "summary": "Célébration des obsèques de M. Laferrière, ancien gouverneur général de l'Algérie, en l'église de la Trinité, en présence de nombreuses personnalités officielles et dans une ferveur militaire marquée.",
    "paragraphs": [
      "Les obsèques de M. Laferrière, procureur général à la Cour de cassation et ancien gouverneur général de l'Algérie, ont été célébrées hier en l'église de la Trinité.",
      "Un service d'ordre, dirigé par MM. Touny et Orsalli, a été nécessaire pour contenir la foule nombreuse massée aux abords de l'église.",
      "De nombreuses personnalités officielles étaient présentes, notamment des représentants du Président de la République, des ministres, ainsi qu'une délégation de la Cour de cassation conduite par le garde des Sceaux.",
      "La messe fut dite par l'abbé Levillain et l'absoute donnée par l'évêque d'Oran. Les honneurs militaires ont été rendus par deux bataillons du 76e régiment de ligne au départ de l'église.",
      "L'inhumation a eu lieu au cimetière après des discours prononcés par MM. Goujon et Étienne."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Étranger",
    "title": "Dépêches de la guerre en Afrique du Sud",
    "summary": "Nouvelles du front sud-africain : les Boers multiplient les sabotages malgré les pertes. Le docteur Leyds proteste contre le traitement des populations civiles auprès des puissances étrangères.",
    "paragraphs": [
      "Londres, 6 juillet : Lord Kitchener rapporte que les Boers ont incendié la gare de Roodepoort et ont été repoussés avec des pertes.",
      "Dans l'attaque du train blindé à Naboomspruit, dix soldats ont été blessés.",
      "Le docteur Leyds a adressé aux puissances une note protestant contre le traitement des femmes et des enfants boers, note que le gouvernement hollandais pourrait soutenir.",
      "La liste quotidienne des pertes signale 5 tués, 24 blessés et 4 morts de maladies."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "Le commandant Dewet à Paris",
    "summary": "Le commandant Andries Dewet maintient sa présence à Paris dans une discrétion absolue, évitant toute manifestation publique par respect pour le gouvernement français.",
    "paragraphs": [
      "Il est confirmé que le commandant Andries Dewet n'a pas quitté Paris. Il souhaite éviter toute manifestation bruyante qui gênerait le gouvernement et se conforme à des ordres reçus par dépêche.",
      "Le commandant observe une claustration volontaire et refuse de recevoir quiconque, se limitant à des visites de courtoisie. Il ne souhaite pas s'exprimer publiquement, craignant que sa pensée ne soit trahie par son manque de maîtrise du français.",
      "Il exprime toutefois sa gratitude envers la presse parisienne pour les notes sympathiques publiées à son égard."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Grand incendie à Namur",
    "summary": "Un violent incendie a ravagé ce matin la place Léopold à Namur, détruisant un cirque et endommageant gravement l'Institut ophtalmique voisin.",
    "paragraphs": [
      "Un important incendie s'est déclaré ce matin à Namur, place Léopold, touchant un cirque, un manège de chevaux de bois et plusieurs roulottes.",
      "La corniche du nouvel Institut ophtalmique a également pris feu. Les artistes et les animaux se sont enfuis, et des chevaux auraient péri. Les dégâts sont considérables."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Économie",
    "title": "Le krach financier en Allemagne",
    "summary": "Une grave crise financière frappe la ville de Cassel, entraînant la ruine d'industriels, le chômage de milliers d'ouvriers et un déficit municipal important suite à une faillite retentissante.",
    "paragraphs": [
      "Une panique financière frappe Cassel suite à la faillite de la Société de séchage des drêches et la fuite du directeur en Hollande. Cinq mille ouvriers sont au chômage et vingt-cinq industriels sont en faillite.",
      "La ville de Cassel subit un déficit d'un million environ. L'Est est également éprouvé par la faillite de plusieurs institutions."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Religieux",
    "title": "Une lettre de Léon XIII",
    "summary": "Le souverain pontife, dans une récente épître, exhorte les supérieurs des ordres religieux à maintenir une fermeté inébranlable et une dignité exemplaire face à l'hostilité croissante envers l'action chrétienne moderne.",
    "paragraphs": [
      "Le Pape a adressé une lettre aux supérieurs des ordres religieux, les exhortant à la plus grande fermeté et à une dignité sans faille face à la haine qui, de nos jours, s'efforce d'écarter l'action chrétienne de la société moderne.",
      "Il appelle instamment les religieux à demeurer doux et indulgents dans l'épreuve, citant les préceptes évangéliques du pardon pour surmonter les persécutions de l'heure présente."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Sports",
    "title": "Le tir fédéral de Lucerne",
    "summary": "La délégation française, reçue avec les honneurs au tir fédéral de Lucerne, a scellé l'amitié indéfectible entre les deux nations par des échanges symboliques et des chants patriotiques dans une ferveur commune.",
    "paragraphs": [
      "La délégation des tireurs français a été reçue avec les honneurs au tir fédéral de Lucerne. M. Lermusiaux a déposé la bannière de l'Union nationale des sociétés de tir de France et a exprimé, au nom de ses compatriotes, sa vive gratitude pour le soutien historique constant de la nation suisse.",
      "Le gouvernement français a offert une somptueuse coupe de Sèvres en signe d'amitié ; la cérémonie s'est conclue dans une atmosphère empreinte de ferveur par des chants patriotiques et des discours fraternels."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "International",
    "title": "Troubles en Mandchourie",
    "summary": "La situation en Mandchourie demeure critique. Après des accrochages frontaliers avec des insurgés chinois, l'empereur de Corée restreint l'usage d'équipements militaires étrangers au sein de sa garde impériale.",
    "paragraphs": [
      "Les troubles en Mandchourie ne cessent de s'intensifier. Des insurgés chinois, ayant franchi le Yalou, ont été vigoureusement repoussés par les troupes coréennes, essuyant des pertes significatives au cours des engagements.",
      "Par mesure de précaution, l'Empereur de Corée a formellement interdit à sa garde impériale l'usage des fusils de fabrication japonaise."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Politique",
    "title": "La scission du parti libéral anglais",
    "summary": "Le parti libéral anglais est en proie à de vives dissidences. Une scission semble inévitable entre les opposants à l'impérialisme et les partisans d'une ligne plus ferme, en attendant l'arbitrage de lord Rosebery.",
    "paragraphs": [
      "De graves dissidences agitent le sein du parti libéral anglais. Une scission semble inévitable entre les partisans de M. Campbell-Bannerman, farouchement opposés à la guerre et à l'impérialisme, et ceux de M. Asquith et sir Edward Grey, qui prônent une méthode autrement plus vigoureuse.",
      "M. Campbell-Bannerman a convoqué l'ensemble du parti le 9 juillet prochain pour tenter de trancher ce litige crucial. L'attitude de lord Rosebery, dont l'influence demeure prépondérante, sera déterminante pour l'issue de cette crise."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Célébration de l'anniversaire de Wagram",
    "summary": "L'anniversaire de la bataille de Wagram est célébré avec faste dans les casernes de France, marquées par des revues militaires et des cérémonies religieuses en hommage aux héros de la Patrie.",
    "paragraphs": [
      "Le 106e de ligne, en garnison à Châlons, a célébré avec éclat l'anniversaire de la bataille de Wagram, au son des musiques militaires et sous les ordres du colonel Vonderscherr, lors d'une revue passée en grande tenue.",
      "À Fontainebleau, le 7e régiment de dragons a également organisé des festivités commémoratives ainsi qu'une messe solennelle en mémoire des soldats tombés pour la défense de la patrie."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "La lanterne magique dans les régiments",
    "summary": "Le ministère de la Guerre autorise désormais les régiments à emprunter les collections de vues de la Société nationale des conférences populaires pour enrichir leurs séances d'instruction par des projections.",
    "paragraphs": [
      "Une note ministérielle récente annonce que les régiments pourront désormais obtenir des collections de vues pour projections lumineuses auprès de la Société nationale des conférences populaires, afin d'illustrer utilement leurs conférences et leçons d'instruction."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Actualités navales : sous-marins et échouement",
    "summary": "L'ingénieur Maugas est attendu à Paris pour présenter un nouveau modèle de sous-marin. Par ailleurs, le rapport officiel disculpe entièrement le commandant Muguet dans l'affaire du transport « Biroch ».",
    "paragraphs": [
      "L'ingénieur Maugas, l'inventeur des plans du sous-marin « Morse », a été mandé à Paris pour une conférence technique relative à l'étude d'un nouveau type de submersible perfectionné.",
      "Le rapport officiel consécutif à l'échouement du transport « Biroch » au cap Lévi conclut à l'absence totale de responsabilité du commandant Muguet, mettant ainsi fin aux rumeurs."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Politique",
    "title": "Clôture de la session parlementaire",
    "summary": "Le 6 juillet, le Président de la République a officiellement prononcé la clôture de la session ordinaire, après l'examen des derniers dossiers administratifs traités par les deux Chambres.",
    "paragraphs": [
      "Le 6 juillet, le Président de la République a déclaré close la session ordinaire de la Chambre des députés et du Sénat. Des débats administratifs d'importance ont marqué ces dernières séances avant la fin des travaux parlementaires de l'année."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'affaire de la recluse de Poitiers",
    "summary": "L'instruction de l'affaire Monnier se poursuit avec l'audition de nombreux témoins. Tandis que l'état de Mlle Blanche Monnier s'améliore, son frère Marcel demeure incarcéré en attente de son jugement.",
    "paragraphs": [
      "L'instruction de l'affaire Monnier se poursuit activement avec l'audition de plus de cent témoins. Les investigations poussées de la police de Montpellier n'ont permis de découvrir aucune trace d'un quelconque séjour de Mlle Blanche Monnier dans cette cité.",
      "L'état physique de la victime s'améliore progressivement à l'hospice, tandis que M. Marcel Monnier attend la suite de l'instruction à la maison d'arrêt."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Les manœuvres navales",
    "summary": "Les manœuvres au large d'Alicante ont démontré l'efficacité du sous-marin « Gustave-Zédé », auteur d'un torpillage réussi contre le « Charles-Martel », malgré une fin de campagne éprouvante pour l'escadre.",
    "paragraphs": [
      "Les manœuvres navales dans les eaux d'Alicante ont mis en scène l'escadre française face à une force ennemie théorique. Le bilan demeure complexe, entre succès tactiques et replis stratégiques. Le succès du sous-marin « Gustave-Zédé », qui a torpillé le cuirassé « Charles-Martel », est officiellement confirmé.",
      "Des tensions et des simulacres de défense ont été organisés à Saint-Tropez et à Toulon, où l'escadre est finalement arrivée en piteux état après une traversée particulièrement difficile."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Social",
    "title": "La grève des ouvriers allumettiers",
    "summary": "La grève des ouvriers allumettiers se poursuit. Malgré des pourparlers avec la direction et le ministère, les ouvriers maintiennent leur mouvement, jugeant les concessions sur le prix des boîtes insuffisantes.",
    "paragraphs": [
      "La grève des ouvriers allumettiers se poursuit dans le calme. Les délégués ont entamé des négociations avec la direction des manufactures et attendent une entrevue avec le ministre des Finances.",
      "Malgré quelques promesses de la direction concernant le prix des boîtes en bois, les ouvriers maintiennent le mouvement de grève, jugeant les concessions insuffisantes."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Spectacles",
    "title": "Théâtre de l'Opéra-Comique : Le Légataire universel",
    "summary": "L'Opéra-Comique reprend « Le Légataire universel » de MM. Adenis et Honnemère, sur une musique de M. Pfeiffer. Une interprétation pleine de verve qui a su séduire le public parisien.",
    "paragraphs": [
      "L'Opéra-Comique a présenté « Le Légataire universel » de MM. Adenis et Honnemère, sur une musique de M. Pfeiffer. Malgré une certaine réserve sur la moralité de la pièce originale de Regnard, la représentation a été marquée par une interprétation pleine de verve qui a conquis le public."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident ferroviaire tragique aux Sept-Ponts",
    "summary": "Un drame déchirant à la halte des Sept-Ponts : Mme Philippine Prayssas a péri sous un train express en tentant désespérément de secourir sa fillette de deux ans, grièvement blessée.",
    "paragraphs": [
      "Un terrible accident s'est produit à la halte des Sept-Ponts. Mme Philippine Prayssas a été tuée par un train express alors qu'elle tentait de secourir sa petite fille de deux ans, qui a également été blessée. Le mari de la victime a fait la macabre découverte."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Culture",
    "title": "Exposition des Arts appliqués à Rouen",
    "summary": "Inauguration à Rouen de l'exposition des arts appliqués à la décoration des tissus. M. Georges Berger a célébré l'union de l'art et de l'industrie en évoquant l'héritage de la reine Mathilde.",
    "paragraphs": [
      "L'inauguration de l'exposition des arts appliqués à la décoration des tissus a eu lieu à Rouen en présence de nombreuses personnalités. M. Georges Berger a souligné l'importance de l'art dans l'industrie, citant en exemple la broderie de la reine Mathilde."
    ]
  },
  {
    "id": 30,
    "page": 2,
    "category": "Société",
    "title": "Suggestion pour des trains de plaisir en semaine",
    "summary": "Pour offrir une évasion aux employés et ouvriers retenus le dimanche, un lecteur propose aux compagnies de chemin de fer d'organiser des « trains de plaisir » le jeudi.",
    "paragraphs": [
      "Un lecteur suggère aux compagnies de chemin de fer d'organiser des « trains de plaisir » le jeudi pour les employés de commerce et les ouvriers travaillant le dimanche, afin de leur permettre de profiter de la mer."
    ]
  },
  {
    "id": 31,
    "page": 2,
    "category": "Militaires",
    "title": "Retour des troupes de Chine",
    "summary": "Les troupes de retour de Chine, débarquées du navire le Mytho, achèvent leur démobilisation. Les réservistes regagnent leurs foyers, tandis que le 4e bataillon du 61e de ligne est arrivé à la caserne d'Aurelles-de-Paladine.",
    "paragraphs": [
      "Les troupes de retour de Chine, débarquées du navire le Mytho, sont actuellement en cours de démobilisation. Les réservistes sont, comme il se doit, renvoyés dans leurs foyers respectifs.",
      "Le 4e bataillon du 61e régiment de ligne a, quant à lui, reçu un accueil particulièrement chaleureux lors de son arrivée à la caserne d'Aurelles-de-Paladine."
    ]
  },
  {
    "id": 32,
    "page": 2,
    "category": "Politique",
    "title": "Séance du Conseil général de la Seine",
    "summary": "Le Conseil général de la Seine a délibéré sur l'extension du réseau de tramways et l'examen d'un emprunt départemental pour financer de grands travaux, sans toutefois fixer de priorités immédiates.",
    "paragraphs": [
      "Le Conseil général a longuement délibéré au sujet de nouveaux projets de tramways et de l'étude d'un emprunt départemental nécessaire au financement de grands travaux.",
      "Il a été précisé, au cours des échanges, que le vote actuel ne préjuge d'aucune priorité particulière quant à l'exécution des projets futurs."
    ]
  },
  {
    "id": 33,
    "page": 2,
    "category": "Faits Divers",
    "title": "Naufrage du steamer 'Le Légué'",
    "summary": "Le steamer Le Légué, reliant Saint-Brieuc à Jersey, a sombré cette nuit aux Minquiers après s'être échoué dans le brouillard. Heureusement, passagers et équipage ont été sauvés et débarqués à Gorey.",
    "paragraphs": [
      "Le steamer Le Légué, qui assure régulièrement la liaison entre Saint-Brieuc et Jersey, a fait naufrage aux Minquiers durant la nuit.",
      "Le navire, surpris par une épaisse nappe de brouillard, s'est échoué sur un écueil avant de sombrer. Par chance, l'ensemble des passagers et les membres de l'équipage ont pu être sauvés et débarqués sains et saufs à Gorey."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits divers",
    "title": "Suite du naufrage du navire",
    "summary": "Le navire et son chargement de marchandises, estimés à plusieurs milliers de francs, étaient assurés. On espère une reprise du service maritime entre Saint-Brieuc et les îles anglo-normandes sous quinze jours.",
    "paragraphs": [
      "Le navire ainsi qu'une partie du fret, dont la valeur marchande se monte à plusieurs milliers de francs et composé de marchandises diverses, étaient dûment assurés.",
      "Les autorités compétentes espèrent que le service de navigation entre Saint-Brieuc et les îles anglo-normandes pourra reprendre dans une quinzaine de jours."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Politique",
    "title": "Déplacement du ministre de la Guerre",
    "summary": "Le ministre de la Guerre a quitté Paris pour se rendre à Saint-Yrieix. Il y présidera l'inauguration de la mairie et procédera à la pose d'une plaque commémorative au sein de la caserne locale.",
    "paragraphs": [
      "Le ministre de la Guerre a quitté Paris hier soir par le train. Il se rend à Saint-Yrieix, où il présidera l'inauguration officielle de la mairie.",
      "Il doit également, au cours de ce déplacement, procéder à la pose d'une plaque commémorative sur les murs de la caserne de la ville."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Sciences",
    "title": "Retour de mission scientifique du yacht Seliko",
    "summary": "Le yacht Seliko, commandé par le capitaine Ostrownek, est rentré du golfe Persique. À son bord, M. de Gerlache et les naturalistes Bonnier et Ferrez rapportent des collections précieuses pour le Muséum.",
    "paragraphs": [
      "Le yacht à vapeur Seliko, de la marine belge, commandé par le capitaine Ostrownek, est arrivé avec à son bord M. de Gerlache, accompagné de MM. Bonnier et Ferrez, membres de l'Académie des sciences naturelles de Paris, venant du golfe Persique.",
      "Cette mission avait pour but de draguer les fonds marins pour en étudier la flore et la faune. Les explorateurs reviennent avec une collection qui a été débarquée et immédiatement dirigée sur Paris pour le Muséum d'histoire naturelle.",
      "On sait que M. de Gerlache a accompli, il y a deux ans, une belle mission au pôle Sud. À cet effet, il fut décoré de la Légion d'honneur par le gouvernement français."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits divers",
    "title": "Chute d'un bolide céleste",
    "summary": "Un phénomène céleste spectaculaire a été observé près de Clermont-Ferrand : un bolide a illuminé le ciel avant d'éclater en gerbes de flammes colorées au-dessus du sol.",
    "paragraphs": [
      "Un superbe bolide, venant de la direction du sud-ouest, est tombé pendant la nuit d'avant-hier, vers neuf heures, au bas des côtes de Clermont-Ferrand.",
      "Le projectile laissait derrière lui une longue traînée lumineuse et a éclaté à environ 100 mètres du sol, projetant dans toutes les directions des gerbes de flammes rouges, bleues et vertes."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits divers",
    "title": "Saccage d'un atelier rue des Amandiers",
    "summary": "À la suite d'un différend entre deux associés mécaniciens, un atelier de la rue des Amandiers a été violemment pris d'assaut par une dizaine d'individus, entraînant une plainte pour vandalisme.",
    "paragraphs": [
      "M. Traché, commissaire de police du quartier du Père-Lachaise, a été saisi d'une affaire bizarre. Rue des Amandiers étaient installés les ateliers de MM. X. et Y., constructeurs mécaniciens associés.",
      "À la suite de dissensions, les deux associés se sont brouillés. M. X. a réussi à évincer l'autre. Hier soir, une dizaine d'individus ont enfoncé les portes de l'atelier et saccagé les lieux.",
      "M. X. a porté plainte, accusant son ancien associé d'avoir instigué cet acte de vandalisme."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Faits divers",
    "title": "Victimes de la chaleur",
    "summary": "La canicule sévit à Paris : un rentier est décédé d'une insolation rue Caumartin, tandis que deux autres personnes ont été secourues en divers points de la capitale.",
    "paragraphs": [
      "M. Sigismond Picard, rentier de soixante ans, est mort d'une insolation rue Caumartin malgré les soins prodigués.",
      "Le journalier Adolphe Sèlveger a été indisposé rue de Rennes et reconduit chez lui.",
      "Mlle Léontine Largon, ouvrière brocheuse, a fait une chute sur le parvis Notre-Dame et a été transportée à l'Hôtel-Dieu."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Faits divers",
    "title": "Probité d'un égoutier",
    "summary": "Un bel exemple d'honnêteté : M. Léon Bénard, égoutier, a remis intact au commissariat un sac trouvé dans le tramway, contenant une somme importante en or et des objets précieux.",
    "paragraphs": [
      "M. Léon Bénard, égoutier, a trouvé dans le tramway un sac contenant une petite fortune : 110 francs en or, des bijoux et des objets précieux.",
      "Sans hésiter, M. Bénard a porté sa trouvaille au commissariat de police du quartier de la Gare, où M. Rocher l'a chaleureusement félicité."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Faits divers",
    "title": "Escrocs dans le quartier de la Roquette",
    "summary": "Le commissaire Guichêteau a appréhendé deux escrocs, Jacques Leracle et Henri Huot, qui extorquaient les commerçants du quartier en remettant de fausses montres en gage contre de prétendus billets de banque.",
    "paragraphs": [
      "M. Guichêteau, commissaire de police, a arrêté deux escrocs, Jacques Leracle et Henri Huot, qui réussissaient à duper de nombreux commerçants du quartier.",
      "Leur procédé consistait à se faire passer pour un entrepreneur et son commis, utilisant de faux billets de banque pour obtenir un prêt temporaire en échange d'une montre de pacotille sans aucune valeur."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Faits divers",
    "title": "Accidents par le gaz",
    "summary": "Deux accidents domestiques liés au gaz sont survenus : une explosion sans victimes rue du Douet, et une blessure grave rue Dauphine, où M. Laromiguière a été touché en entrant dans sa cave avec une flamme.",
    "paragraphs": [
      "Une explosion de gaz s'est produite rue du Douet, dans la boutique de M. Percer, marchand de vins, sans toutefois faire de victime.",
      "Un autre accident a eu lieu rue Dauphine, chez M. Laromiguière, qui a été blessé au visage en pénétrant dans sa cave avec une lampe allumée."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Faits divers",
    "title": "Suicide d'un étudiant et drame rue Champollion",
    "summary": "Drame de la misère et du désespoir : un étudiant, privé de ressources par ses parents, a tenté de mettre fin à ses jours, tandis qu'une femme a été retrouvée pendue rue de l'Orillon.",
    "paragraphs": [
      "Victor Aubert, un étudiant de vingt ans, s'est tiré un coup de revolver dans la tempe après que ses parents lui eurent coupé les vivres. Le malheureux a été transporté à l'hôpital Cochin dans un état navrant.",
      "Par ailleurs, on a découvert, pendue rue de l'Orillon, la veuve Joséphine Rigaud, âgée de trente-cinq ans."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Faits divers",
    "title": "Nouvelles judiciaires",
    "summary": "La justice se prononce sur deux affaires : un cas d'usurpation des palmes académiques lors d'un banquet et une série de condamnations prononcées à Sèvres pour des infractions liées à la circulation.",
    "paragraphs": [
      "Un individu qui s'était fait remettre illégalement les palmes académiques lors d'un banquet sera prochainement jugé pour usurpation de fonctions.",
      "M. Amant, juge de paix de Sèvres, a condamné deux cents chauffeurs pour diverses infractions, et notamment pour excès de vitesse."
    ]
  },
  {
    "id": 45,
    "page": 3,
    "category": "Météo",
    "title": "Bulletin météorologique du 7 juillet",
    "summary": "Le bulletin météorologique du 7 juillet 1899 indique une persistance des hautes pressions sur l'ouest de l'Europe, garantissant un temps beau et chaud sur l'ensemble du territoire français.",
    "paragraphs": [
      "Dimanche 7 juillet 1899. Le baromètre reste élevé dans l'ouest de l'Europe. Une zone de basses pressions persiste en Russie. Le temps est beau et chaud en France."
    ]
  },
  {
    "id": 46,
    "page": 3,
    "category": "Faits divers",
    "title": "Accidents autour de Paris",
    "summary": "Une série d'accidents et de découvertes tragiques a touché les communes de la banlieue parisienne, incluant des pendaisons, des accidents industriels et des corps repêchés dans la Seine et la Marne.",
    "paragraphs": [
      "À Sèvres, M. Isidore-Martin Collinet, gardien de la paix en retraite, a été trouvé pendu à son domicile.",
      "À Asnières, M. Paul-Louis Peyrond a été grièvement brûlé par suite d'un court-circuit électrique.",
      "Le cadavre d'un enfant non identifié a été découvert dans les eaux de la Seine, à Gennevilliers.",
      "À La Garenne-Colombes, M. Jacques Antelme a été blessé par l'explosion inopinée de siphons d'eau gazeuse.",
      "Un charretier a été grièvement blessé lors d'une collision violente avec un tramway à Saint-Ouen.",
      "À Bois-Colombes, M. Emmanuel Oustry a été renversé et piétiné par un cheval emballé.",
      "Un incendie s'est déclaré dans des magasins de vins situés à Charenton, causant des dégâts matériels importants.",
      "Trois individus suspects ont été arrêtés lors d'une battue effectuée par les autorités à Alfortville.",
      "Le corps d'une femme nommée Alice a été repêché dans la Marne, à hauteur de Joinville-le-Pont."
    ]
  },
  {
    "id": 47,
    "page": 3,
    "category": "Faits divers",
    "title": "Faits divers en province",
    "summary": "Le bilan des faits divers en province rapporte plusieurs drames, incluant des noyades accidentelles, des dégâts météorologiques dans l'Oise, ainsi que des décès tragiques à Amiens, Boulogne et Valenciennes.",
    "paragraphs": [
      "À Clermont (Oise), un enfant nommé Alfred Sevennon s'est tragiquement noyé en voulant se laver les mains au bord de l'eau.",
      "À Compiègne, M. Toussaint Laguat est tombé accidentellement dans l'Oise et s'est noyé malgré les tentatives de secours.",
      "À Laigneville, d'importants dégâts matériels ont été causés aux récoltes par une violente chute de grêle.",
      "À Amiens, le petit Marceau, âgé de dix mois, a été trouvé étranglé dans des circonstances que l'enquête devra déterminer.",
      "À Boulogne-sur-Mer, une choriste, Mme Martein, s'est fracturé la jambe lors d'exercices de gymnastique.",
      "À Valenciennes, M. Hector Gardin, ancien mineur, a été trouvé pendu dans son habitation."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Spectacles et Divertissements",
    "title": "Le spectacle au Jardin de Paris",
    "summary": "Le Jardin de Paris enrichit son programme estival avec le succès de Paula Brébion, des minstrels parisiens et du ventriloque Fread, attirant une clientèle élégante sous ses ombrages.",
    "paragraphs": [
      "La direction du Jardin de Paris ne s'endort pas sur ses lauriers et, malgré les charmes de la température exquise que l'on y goûte, qui suffirait à attirer chaque jour une foule élégante et nombreuse sous ses grands arbres, elle s'évertue à enrichir quotidiennement son programme déjà si attractif.",
      "C'est ainsi qu'ont débuté avec succès l'exquise chanteuse Paula Brébion, si aimée du public, les minstrels parisiens, dont la vogue est encore plus brillante que l'an passé, et l'incomparable ventriloque Fread."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Concerts et Orphéons",
    "title": "Programme des concerts du dimanche 7 juillet",
    "summary": "Le programme des concerts militaires dominicaux à Paris propose des œuvres classiques de Boïeldieu, Delibes et Rossini, interprétées par les musiques des régiments de ligne dans les principaux squares et parcs.",
    "paragraphs": [
      "Parc Monceau : 1er régiment de ligne, chef M. André. Au programme : Bonbonne (X.), Le Calife de Bagdad (Boïeldieu), Ballet de Coppélia (L. Delibes), Patine (Paladilhe), Petite Souris (Bosc).",
      "Palais-Royal : 1er régiment de ligne, chef M. Thiriet. Au programme : Marche des Enfants de Troupe (Purgeot), Guillaume Tell (Rossini), Cavalerie (Thiriet), Le Pré aux Clercs (Hérold), Fiançailles (Wesly).",
      "Tuileries : 1er régiment de ligne, sous-chef M. L. Salvan. Au programme : Versailles (G. Wettge), Ouverture du Lac des Fées (Auber), La Vie d'artiste (Strauss), Herculanum (Y. David), Girelle (Cesarini).",
      "Square Parmentier : 1er régiment de ligne, chef M. J. Schmidt. Au programme : Marche patriotique (A. Fock), Ouverture de la Muette de Portici (Auber), Aimee (Meister).",
      "Place de la Nation : 1er régiment de ligne, chef M. Gnignard. Au programme : En Avant (A. Soller), Le Calife de Bagdad (Boïeldieu), L'Île fleurie (Bidaine), Sigurd (Reyer), Colette (Selennick).",
      "Jardin des Plantes : 1er régiment de ligne, chef M. A. Fouquet. Au programme : Wilhelmine (Wesly), Zampa (Hérold), Ballet égyptien (Luigini), Lakmé (Delibes), Fiançailles (Wesly).",
      "Luxembourg : 1er régiment de ligne, chef M. V. Bonnelle. Au programme : Washington-Post (Sousa), La Muette de Portici (Auber), Entracte de Don César de Bazan (Massenet), Songes roses (Wesly), Fantaisie sur Rigoletto (Verdi), Little-Duck (Beck).",
      "Parc Montsouris : 1er régiment de ligne, chef M. J. Bichot. Au programme : Le P'tit Charlot (G. Coquelin), Les Deux Roses (A. de Groot), Phaéton (Saint-Saëns), Jocelyn (B. Godard), Rions chantons dansons II (José)."
    ]
  },
  {
    "id": 50,
    "page": 4,
    "category": "Faits Divers",
    "title": "Vigilance récompensée à la gare de Dieppe",
    "summary": "La Compagnie de l'Ouest a honoré deux employés de la gare de Dieppe, Lecomte et Pupin, pour avoir mis en échec une tentative de vol sur un wagon en gare.",
    "paragraphs": [
      "La Compagnie de l'Ouest vient de récompenser par une gratification spéciale la vigilance de deux de ses employés.",
      "Le mois dernier, à la gare de Dieppe, l'homme d'équipe Lecomte a aperçu un individu qui se dissimulait derrière un wagon avec un colis. L'homme a pris la fuite en abandonnant son butin, mais fut poursuivi et arrêté par le camarade de Lecomte, Pupin, qui lui barra la route.",
      "L'individu, conduit auprès du chef de gare, a avoué sa tentative de vol et a été mis en état d'arrestation par le commissaire de police."
    ]
  },
  {
    "id": 51,
    "page": 4,
    "category": "Transports",
    "title": "Trains de plaisir de la Compagnie d'Orléans",
    "summary": "La Compagnie d'Orléans organise pour la fête nationale du 14 juillet des trains de plaisir à prix réduits, reliant les départements à Paris, avec des départs du 10 au 13 et retours jusqu'au 20 juillet.",
    "paragraphs": [
      "À l'occasion de la fête nationale du 14 juillet, la Compagnie d'Orléans met en marche un certain nombre de trains de plaisir, permettant aux populations des départements qu'elle dessert de se rendre à Paris à des prix très réduits.",
      "Les départs sont échelonnés entre le 10 et le 13 juillet depuis diverses régions (Loire-Inférieure, Haute-Garonne, Charente, Creuse, Finistère, Gironde, etc.), avec des retours prévus entre le 14 et le 20 juillet. La compagnie précise que le nombre de billets est limité."
    ]
  },
  {
    "id": 52,
    "page": 4,
    "category": "Feuilleton",
    "title": "Extrait de roman : Le secret d'Odette",
    "summary": "Une découverte fortuite plonge Jarroux, le parrain d'Odette, dans le trouble : une dépêche de Philippe Darrans suggère une relation suspecte que la jeune femme tente maladroitement de dissimuler.",
    "paragraphs": [
      "Jarroux, le parrain d'Odette, s'apprêtait à prendre congé lorsqu'un incident survint. En cherchant des épingles, il renversa le contenu de la table d'Odette.",
      "Un buvard s'ouvrit, révélant une dépêche adressée à Odette, écrite par Philippe Darrans, un ancien camarade d'études de Jarroux. Ce dernier fut glacé par cette découverte, suspectant une relation trouble derrière cette invitation à chanter dans une maison privée.",
      "Odette tenta de minimiser la chose, prétendant qu'il s'agissait simplement d'un admirateur de plus, mais Jarroux restait profondément inquiet de cette coïncidence."
    ]
  }
];
