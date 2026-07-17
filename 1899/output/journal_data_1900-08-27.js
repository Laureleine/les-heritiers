// Date: 1900-08-27
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-08-27 (Version Restaurée, 44 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "L'école primaire en France",
    "summary": "Une rétrospective sur l'essor de l'enseignement primaire sous la Troisième République, soulignant les réformes législatives fondatrices qui ont instauré l'instruction gratuite, obligatoire et laïque en France.",
    "paragraphs": [
      "L'éducation du peuple est, pour une démocratie, une question de devoir et d'intérêt. De devoir, car c'est par là seulement qu'elle peut fonder l'égalité réelle entre les citoyens ; d'intérêt, car, puisque tous ont part à la souveraineté, il convient que tous aussi soient préparés à l'exercer.",
      "Le gouvernement de la République a entrepris la réforme de l'enseignement primaire avec ténacité. Avant la Révolution, l'enseignement primaire n'existait guère ; la Constituante et la Convention avaient eu le sentiment de ce qu'il fallait faire, mais sans pouvoir le réaliser.",
      "Il fallut attendre la loi Guizot de 1833 pour un premier effort sérieux. Sous la Troisième République, la réforme a porté sur trois points : un matériel nouveau, un personnel enseignant mieux préparé et des principes législatifs clairs.",
      "Trois lois majeures ont fixé cette charte : celle de 1881 sur la gratuité absolue, celle de 1882 sur l'obligation scolaire, et celle du 30 octobre 1886 sur la laïcité de l'enseignement public.",
      "Les résultats sont probants : une augmentation massive du nombre d'écoles, d'élèves et de maîtres, confirmant le succès de cette grande réforme démocratique voulue dès Condorcet."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Autour d'un berceau",
    "summary": "Le docteur Pierre Legrand, jeune praticien aux méthodes avant-gardistes, tente de gagner l'estime du docteur Lipray, un confrère conservateur, tout en dissimulant un secret lié à ses origines familiales.",
    "paragraphs": [
      "Le docteur Pierre Legrand se présenta au docteur Lipray pour discuter d'une nouvelle question médicale. Le jeune médecin exposa ses méthodes basées sur des découvertes récentes, notamment pour traiter la tuberculose.",
      "Le vieillard, bien qu'obstiné et fier de sa médecine traditionnelle, fut séduit par l'enthousiasme du jeune homme et l'invita à déjeuner. Henri, le jeune docteur, tenta adroitement de se faire accepter par cet homme qui était en réalité son père, tout en dissimulant son identité pour ne pas compromettre ses chances."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Élection sénatoriale en Meurthe-et-Moselle",
    "summary": "Le député républicain Alfred Mézières a été élu sénateur de la Meurthe-et-Moselle avec 667 voix, pour succéder à M. Volland.",
    "paragraphs": [
      "Le premier tour de scrutin pour l'élection sénatoriale dans la Meurthe-et-Moselle, en remplacement de M. Volland, décédé, a vu la victoire de M. Alfred Mézières, député républicain, avec 667 voix."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "International",
    "title": "Les événements de Chine",
    "summary": "Tensions en Chine : incertitudes sur le sort des souverains, occupation de la cité interdite par les Japonais, avancée russe en Mandchourie et renforts français en route.",
    "paragraphs": [
      "Des nouvelles incertaines circulent concernant la capture des souverains chinois par les troupes japonaises près de Pékin. Plusieurs dépêches contradictoires ou confuses parviennent de Shanghaï et des agences étrangères.",
      "À Pékin, les troupes japonaises occupent le mur d'enceinte de la Cité interdite. Parallèlement, en Mandchourie, les forces russes progressent, et les autorités russes confirment la reprise de la tranquillité et des activités commerciales dans les zones sous leur contrôle.",
      "Le corps du baron de Ketteler a été retrouvé à Pékin par des soldats allemands. Pendant ce temps, des renforts de zouaves français s'embarquent depuis Tunis à destination de la Chine."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Social",
    "title": "La grève des cochers",
    "summary": "Malgré une timide reprise, la grève des cochers se poursuit après les obsèques de Jean Nageotte. Une assemblée générale est fixée à la Bourse du travail pour débattre de la suite du mouvement.",
    "paragraphs": [
      "La Compagnie générale espère une reprise du travail, bien que le nombre de voitures en service reste inférieur à la normale. Les grévistes ont tenu une réunion et assisté aux obsèques de leur camarade Jean Nageotte.",
      "La cérémonie s'est déroulée sans incident sous la surveillance de la police. Une assemblée générale des cochers est prévue à la Bourse du travail."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un ballon en feu à Vincennes",
    "summary": "Place Bérault, à Vincennes, le gonflement d'un ballon a tourné à la catastrophe. Emporté par une bourrasque, l'aérostat s'est embrasé au contact de fils télégraphiques, provoquant une vive émotion. Les aéronautes sont sains et saufs.",
    "paragraphs": [
      "Un incident spectaculaire s'est produit, hier, place Bérault, à Vincennes. Alors qu'on procédait au gonflement d'un ballon, une bourrasque soudaine a rabattu l'aérostat sur des fils télégraphiques. Le contact a immédiatement provoqué un court-circuit, l'explosion du gaz et un début d'incendie dans une maison avoisinante.",
      "Fort heureusement, les aéronautes, dont la témérité est reconnue, ont pu se dégager sans avoir été blessés par les flammes."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Collision de tramways à Bruxelles",
    "summary": "À Molenbeek-Saint-Jean, une défaillance sur une aiguille de tramway à traction animale a causé une collision violente. Le bilan s'établit à vingt-cinq blessés, dont plusieurs se trouvent dans un état grave.",
    "paragraphs": [
      "Un grave accident de tramways à traction animale s'est produit, hier, à Molenbeek, faisant vingt-cinq blessés, dont plusieurs grièvement atteints. Les premiers éléments de l'enquête permettent d'établir que le choc serait dû à une défaillance technique sur une aiguille de changement de voie."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le crime d'Argenteuil",
    "summary": "Le corps repêché dans la Seine à Argenteuil est celui du maréchal-ferrant Paul-Jean-Ange Roudier. Les blessures suspectes constatées à la tête écartent définitivement l'hypothèse du suicide au profit d'un crime crapuleux.",
    "paragraphs": [
      "Le cadavre repêché dans la Seine, à la hauteur d'Argenteuil, a été formellement identifié comme étant celui de M. Paul-Jean-Ange Roudier, maréchal-ferrant de son état. L'hypothèse du suicide est désormais formellement écartée par les enquêteurs.",
      "La découverte de blessures suspectes à la région crânienne suggère un crime crapuleux lié à une somme d'argent importante que la victime était censée retirer le jour même de sa disparition."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Économie",
    "title": "L'ouverture de la chasse",
    "summary": "La saison cynégétique débute sous le signe de la rareté. Aux Halles, les arrivages, tant indigènes qu'étrangers, sont en nette diminution, provoquant une hausse immédiate des cours pour les perdreaux et les cailles.",
    "paragraphs": [
      "Avec l'ouverture officielle de la chasse, les premiers arrivages de gibier ont été enregistrés aux Halles. Les mandataires notent toutefois une diminution notable des envois étrangers et une rareté marquée du gibier indigène.",
      "Cette insuffisance de l'offre par rapport à la demande habituelle entraîne une hausse immédiate des prix de vente pour les cailles, les perdreaux et autres espèces prisées des gourmets parisiens."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident de train à Lisieux",
    "summary": "Une violente collision entre deux trains est survenue en gare de Lisieux. L'erreur de signalisation ou un défaut de freinage a causé des dégâts matériels importants et des blessures parmi les passagers et les bêtes transportées.",
    "paragraphs": [
      "Une collision entre deux convois s'est produite hier en gare de Lisieux. Les causes exactes de l'accident, qu'il s'agisse d'une erreur de signalisation ou d'une défaillance dans le freinage, sont en cours d'examen par la compagnie.",
      "Le bilan fait état de plusieurs blessés parmi les voyageurs et de dommages matériels considérables, incluant le bétail transporté par le train de marchandises, dont plusieurs têtes ont péri dans le choc."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident de train en gare de Lisieux",
    "summary": "Hier soir, à 20h20, une collision entre deux trains de marchandises en gare de Lisieux a causé des dégâts matériels et fait trois blessés légers parmi le personnel. La circulation n'a pas été interrompue.",
    "paragraphs": [
      "Deux trains de marchandises se sont rejoints et tamponnés, hier soir, à 8 heures 20, en gare de Lisieux ; trois agents ont été légèrement blessés et plusieurs wagons ont été brisés. La circulation n'a pas été interrompue."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Déraillement à Limoges",
    "summary": "Le train de marchandises n° 2012, en provenance de Périgueux, a déraillé près de Nexon suite à une rupture d'essieu. Aucun passager n'est blessé, mais le trafic a subi un retard de trois heures.",
    "paragraphs": [
      "Le train de marchandises n° 2012, venant de Périgueux, a déraillé à minuit et demi, par suite de la rupture d'un essieu, entre les gares de Nexon. Il n'y a eu aucun accident de personnes, mais les trains ont subi un retard de trois heures."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Collision de trains à Deutsch-Wusterhausen",
    "summary": "Un accident ferroviaire est survenu en Allemagne, en gare de Deutsch-Wusterhausen, lorsqu'une manœuvre a provoqué une collision entre un train français et un convoi allemand. Bilan : un blessé léger et voie obstruée.",
    "paragraphs": [
      "Un accident assez grave s'est produit sur le territoire allemand, à la gare de Deutsch-Wusterhausen, où les deux trains venant de France et de Turquie se rejoignaient. La machine du train français, en opérant une manœuvre pour prendre la tête du train venant d'Allemagne, a heurté assez violemment ce dernier.",
      "Seul le cuisinier du wagon-restaurant a été légèrement blessé. Toutefois, les dégâts occasionnés par ce tamponnement ont été assez importants, et il a fallu plus d'une heure pour déblayer la voie."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident ferroviaire à Glasgow",
    "summary": "Un violent tamponnement est survenu hier soir en gare d'Anderton Cross, près de Glasgow, entre deux trains de voyageurs. L'accident a causé la destruction de quatre wagons et fait vingt-quatre blessés.",
    "paragraphs": [
      "Un train de voyageurs a tamponné, hier soir à sept heures, un autre train de voyageurs arrêté à la gare d'Anderton Cross. Vingt-quatre personnes ont été grièvement blessées. Quatre wagons du train tamponné ont été mis en miettes."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nouvelles Coloniales",
    "title": "Arrivée de dignitaires africains à Bordeaux",
    "summary": "Des dignitaires africains, dont le prince dahoméen Tovalu et le roi du Macina, Aquibun Tall, sont arrivés à Pauillac à bord du Ville-de-Maceio, en route pour visiter l'Exposition universelle.",
    "paragraphs": [
      "Parmi les passagers de la Ville-de-Maceio, arrivée à Pauillac venant de la côte occidentale d'Afrique, se trouvent le prince dahoméen Tovalu et ses deux fils, ainsi qu'Aquibun Tall, roi du Macina, frère d'Ahmadou, accompagné de son fils et de son premier ministre Damna Diawara, se rendant à l'Exposition."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Manœuvres dans la 15e division d'infanterie",
    "summary": "La 15e division d'infanterie entame ses manœuvres annuelles sous le commandement du général Moinot-Werly, du 5 au 16 septembre, sur le territoire de Marsannay-la-Côte, Épagny, Chaignay et Gémeaux.",
    "paragraphs": [
      "Cette année, la 15e division d'infanterie effectuera ses manœuvres par brigade sous la haute direction du général Moinot-Werly. Le programme, qui s'étend du 5 au 16 septembre, inclut des marches de concentration, des exercices de combats de régiment ainsi que des manœuvres de brigade mixte dans le polygone de Marsannay-la-Côte, Épagny, Chaignay et Gémeaux."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Écoles à feu au camp de Châlons",
    "summary": "Le camp de Châlons inaugure ses écoles à feu pour les réservistes de l'artillerie et des divisions de cavalerie. Ces exercices tactiques se poursuivront jusqu'au 10 novembre prochain.",
    "paragraphs": [
      "Hier ont débuté au camp de Châlons les écoles à feu destinées aux réservistes des régiments d'artillerie montée de la 6e région, ainsi qu'aux batteries volantes des 3e et 5e divisions de cavalerie indépendante. Ces exercices militaires se prolongeront jusqu'au 10 novembre prochain."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Service funèbre pour les victimes du naufrage de la Framée",
    "summary": "Un hommage solennel a été rendu en l'église de la Trinité de Cherbourg au premier maître mécanicien Lestournel, victime du naufrage de la Framée, en présence des officiers de marine.",
    "paragraphs": [
      "Un service funèbre a été célébré ce matin en l'église de la Trinité à la mémoire du premier maître mécanicien Lestournel, tragiquement disparu lors du naufrage de la Framée. Sur l'invitation du préfet maritime, les officiers de marine présents à Cherbourg ont assisté à la cérémonie."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Politique",
    "title": "M. Baudin, ministre des Travaux publics, dans l'Ain",
    "summary": "En visite à Champagne-en-Valromay, le ministre des Travaux publics, M. Baudin, a prôné l'union du parti républicain et la nécessité de réformes, dont l'impôt sur le revenu, pour assurer la sécurité du pays.",
    "paragraphs": [
      "M. Baudin, ministre des Travaux publics, a reçu un accueil enthousiaste dans la commune de Champagne-en-Valromay à l'occasion d'un comice agricole. Dans son discours, il a souligné que le gouvernement se félicite d'avoir rendu au pays la sécurité et a appelé à l'union du parti républicain pour la réalisation des réformes promises, en tête desquelles il place l'impôt sur le revenu."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame de jalousie à Cazalis",
    "summary": "Un tragique fait divers s'est produit à Cazalis où, suite à une dispute dans un débit de vins, Camiade a été mortellement poignardé par Marcelin Candau, qui a pris la fuite.",
    "paragraphs": [
      "Un meurtre a eu lieu à Cazalis dans les circonstances suivantes : deux jeunes gens, Camiade et Marcelin Candau, se sont vivement disputés dans un débit de vins. Au moment où Camiade quittait l'établissement, Candau l'a poignardé à l'abdomen avec un couteau. Camiade a succombé peu après ses blessures. Le coupable a pris la fuite et le parquet de Saint-Sever-sur-l'Adour a immédiatement ouvert une enquête."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Affluence et incidents à l'Exposition",
    "summary": "Hier, les portes de l'Exposition ont attiré une foule considérable. Malgré le beau temps, quelques averses ont surpris les promeneurs, tandis qu'un incident animé entre deux dames égayait la galerie des tissus.",
    "paragraphs": [
      "Les curieux ont franchi en nombre considérable les portes de l'Exposition hier, profitant d'une journée agréable malgré quelques averses passagères. L'ambiance était à la fête et à la restauration dans les nombreux kiosques, bien qu'une pluie fine en soirée soit venue contrarier les flâneurs.",
      "Un incident comique a également éclaté dans la galerie des tissus entre deux dames se disputant pour admirer les toilettes exposées, provoquant une vive mêlée avant que la foule ne parvienne à les séparer."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Social",
    "title": "Visite des Chambres de commerce anglaises à l'Exposition",
    "summary": "Trois cents délégués des chambres de commerce britanniques sont attendus à Paris. Cette visite officielle vise à resserrer les liens économiques et à étudier les richesses et ressources de la France.",
    "paragraphs": [
      "Dans le but de dynamiser les échanges commerciaux, trois cents membres des chambres de commerce du Royaume-Uni se rendront à Paris pour une visite officielle de l'Exposition. Ils seront reçus par les autorités françaises et participeront à des visites-conférences afin de mieux connaître les ressources de notre pays."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Congrès",
    "title": "Congrès des sciences ethnographiques",
    "summary": "Sous la présidence de M. Lemire, le congrès des sciences ethnographiques a ouvert ses travaux. Les débats s'articulent autour de l'étude comparative des races humaines et de leur origine commune ou divergente.",
    "paragraphs": [
      "Le congrès des sciences ethnographiques a débuté hier matin sous la présidence de M. Lemire. La discussion porte sur les rapports entre les différentes races humaines et sur la question fondamentale de l'unité ou de la diversité originelle des races."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Étranger",
    "title": "Dépêches de l'étranger",
    "summary": "Au fil des dépêches : le Shah de Perse visite Bruxelles, une mutinerie survient au camp de Beverloo, le Tsar reçoit le docteur Leyds, et une bouée de l'expédition Andrée est repêchée près de l'Islande.",
    "paragraphs": [
      "Le Shah de Perse a visité l'Hôtel de Ville de Bruxelles. Par ailleurs, une mutinerie a éclaté au camp de Beverloo parmi les soldats belges destinés à la Chine. Le Tsar a reçu le docteur Leyds à Peterhof. Enfin, une bouée appartenant à l'expédition Andrée a été découverte près des côtes d'Islande."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Histoire",
    "title": "Vauban, le maréchal et l'ingénieur",
    "summary": "Hommage au maréchal Vauban, génie des fortifications et esprit humaniste. Ce portrait évoque sa carrière militaire et son audacieux rapport sur la 'Dîme royale', plaidoyer pour le soulagement du peuple opprimé.",
    "paragraphs": [
      "Portrait de Vauban à l'occasion de la glorification de son œuvre. Le texte retrace sa carrière militaire, son génie dans l'art des fortifications, son rôle éminent d'ingénieur civil et son engagement humaniste à travers son célèbre rapport sur la 'Dîme royale', où il dénonçait courageusement les conditions de vie du peuple face aux privilèges des classes supérieures."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Social",
    "title": "Grèves des ports",
    "summary": "La tension sociale persiste dans les ports français. À Marseille, le député Morgari soutient les grévistes, tandis qu'à Dunkerque, les pourparlers sont rompus. Des mouvements de protestation touchent aussi Bordeaux et Le Havre.",
    "paragraphs": [
      "La situation demeure tendue dans plusieurs de nos ports. À Marseille, le député socialiste Morgari a tenu une conférence pour apporter son soutien actif aux ouvriers grévistes.",
      "À Dunkerque, les pourparlers sont rompus, malgré les propositions formulées par la compagnie des bateaux à vapeur du Nord. Des grèves sont également signalées à Bordeaux et au Havre."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un accident mortel au Faubourg Saint-Martin",
    "summary": "Une septuagénaire a trouvé la mort hier matin, renversée par un tramway à l'angle du faubourg Saint-Martin et de la rue de Strasbourg. Le conducteur a été mis à la disposition de M. Guilhem, commissaire de police.",
    "paragraphs": [
      "Une vieille femme, paraissant âgée de soixante-dix ans, traversait hier matin, vers dix heures, la rue du Faubourg-Saint-Martin, à l'angle de la rue de Strasbourg, lorsqu'elle fut heurtée et renversée par le tramway n° 167, à traction mécanique, assurant la liaison de la gare de l'Est à Montrouge.",
      "La malheureuse, atteinte d'une grave blessure à la tête, a succombé peu après son transport à la pharmacie voisine.",
      "Le conducteur, François Panât, a été mis à la disposition de M. Guilhem, commissaire de police. Le corps de la victime, dont l'identité demeure inconnue, a été transféré à la morgue."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Collision fluviale en Seine",
    "summary": "Une fausse manœuvre a provoqué hier une collision entre le bateau parisien S1 et une péniche près du quai de la Tournelle. Plus de peur que de mal pour les passagers, malgré des dégâts matériels sur la péniche.",
    "paragraphs": [
      "Par suite d'une fausse manœuvre, une collision s'est produite hier, vers une heure et demie de l'après-midi, en face du quai de la Tournelle, entre le bateau parisien S1 et une péniche vide.",
      "Cette dernière a été sérieusement endommagée à l'avant, juste au-dessus de la ligne de flottaison. On a pu, néanmoins, l'amarrer à quai.",
      "On n'a à déplorer aucun accident de personnes, mais l'émotion a été vive parmi les voyageurs du bateau parisien S1."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Trouble à l'ordre public devant un hôpital",
    "summary": "Deux blanchisseuses belliqueuses, mécontentes de la lenteur de l'accueil à l'hôpital Saint-Antoine, ont semé le trouble en caillassant la porte de l'établissement. Elles ont été arrêtées par les gardiens.",
    "paragraphs": [
      "Deux femmes, se disant blanchisseuses, Lucie Ceterot et Delphine Helaye, domiciliées rue Saint-Maur, se sont querellées et battues rue du Faubourg-Saint-Antoine. Après s'être réciproquement blessées, elles se présentèrent à l'hôpital Saint-Antoine pour y recevoir des soins.",
      "Trouvant l'accueil trop lent, elles lancèrent des pierres contre la porte d'entrée et menacèrent le concierge. Les gardiens sont intervenus pour les appréhender. Elles ont été mises à la disposition de M. Labussière, commissaire de police."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation de braconniers",
    "summary": "Deux braconniers venus de Pierrefitte ont été interceptés rue Rambuteau par des inspecteurs de la sûreté alors qu'ils transportaient du gibier dissimulé sous leurs blouses.",
    "paragraphs": [
      "Deux inspecteurs de la sûreté ont arrêté, rue Rambuteau, deux individus dont les allures suspectes avaient attiré leur attention. Sous leurs blouses, les deux hommes étaient chargés d'un chapelet de perdreaux et de lièvres.",
      "Il s'agit des braconniers Joseph Lecouehoux, dit Lafleur, et Guillaume Renedick, habitant Pierrefitte. Ils étaient venus à Paris pour écouler leur gibier."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Chasse à l'hydrophobie",
    "summary": "Un charcutier de la rue de la Verrerie a été agressé par un chat errant. L'animal, suspecté d'être atteint d'hydrophobie, a été abattu par la gardienne de la paix Cotte après une course poursuite agitée.",
    "paragraphs": [
      "M. Méol, charcutier rue de la Verrerie, a été surpris par un chat qui s'est précipité dans sa boutique en faisant des bonds énormes. L'animal a tenté de le mordre avec une fureur inhabituelle.",
      "La gardienne de la paix Cotte, avertie par des voisins, a réussi à abattre l'animal après une chasse mouvementée. Le cadavre du chat sera examiné par un vétérinaire afin de déterminer s'il était atteint de la rage."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les volontés d'une Reine bohémienne",
    "summary": "Une commémoration à la mémoire d'une reine bohémienne près de la porte de Choisy a tourné à la rixe. La police a dû intervenir pour expulser la troupe après des troubles impliquant des animaux de foire.",
    "paragraphs": [
      "Une soixantaine de bohémiens campant près de la porte de Choisy ont causé un grand tumulte après avoir festoyé pendant plusieurs heures en mémoire de leur reine, Moharvin-Schiavone, décédée six mois plus tôt en Italie.",
      "La fête, qui se voulait un hommage aux volontés de la défunte, a dégénéré en une bagarre générale impliquant leurs ours et singes dressés. Les agents de police ont dû intervenir et ont ordonné aux chefs de la caravane d'évacuer immédiatement le territoire parisien."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicides",
    "summary": "Deux tristes décès à déplorer : un garçon de café s'est donné la mort rue de l'Argonne, tandis qu'un comptable a succombé à l'asphyxie par un réchaud à charbon dans la rue des Pyrénées.",
    "paragraphs": [
      "Un garçon de café nommé Eugène Dastage, âgé de trente-huit ans, a été trouvé pendu dans son logement de la rue de l'Argonne. M. Amai, commissaire de police, a procédé aux constatations d'usage.",
      "Le comptable Charles Fleury, quarante-cinq ans, a été trouvé mort dans son lit rue des Pyrénées, asphyxié par un réchaud à charbon de bois. M. Girard, commissaire de police, a procédé aux formalités d'usage."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Victime d'imprudence sur les voies",
    "summary": "M. Jean Martin, chauffeur aux Chantiers de la Loire, a tragiquement péri après avoir tenté de descendre d'un train en marche à proximité de la station du pont Marcadet.",
    "paragraphs": [
      "M. Jean Martin, âgé de soixante-dix ans, chauffeur aux Chantiers de la Loire, a trouvé la mort après avoir voulu sauter d'un train en marche près de la station du pont Marcadet. Il est décédé des suites de ses blessures à l'hôpital Lariboisière."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Actualités Sociales",
    "title": "Bulletin du travail : Grèves et conflits",
    "summary": "Le front social reste agité avec une grève des plâtriers annoncée à Toulouse, tandis qu'en Angleterre, les compagnies ferroviaires se préparent face aux tensions du Great Eastern Railway.",
    "paragraphs": [
      "À Toulouse, le syndicat des plâtriers a décidé la grève pour demain lundi, suite au refus des patrons de consentir à une augmentation de salaire réclamée par les ouvriers.",
      "À Londres, la situation reste stationnaire concernant le conflit entre la direction du Great Eastern Railway et son personnel. Les grandes compagnies anglaises se sont réunies pour se prêter assistance en cas de débrayage prolongé."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Dépêches d'Outre-Mer",
    "title": "La diplomatie et le coût des câbles télégraphiques",
    "summary": "L'entrée des troupes à Pékin place la question du coût des communications télégraphiques sous-marines, monopole britannique, au cœur des préoccupations budgétaires des Affaires étrangères.",
    "paragraphs": [
      "Alors que les troupes internationales sont entrées à Pékin, l'ère des négociations s'ouvre. Ce contexte met en lumière l'importance capitale du service télégraphique diplomatique reliant la métropole à ses colonies et à l'Extrême-Orient.",
      "Le coût des communications par câbles sous-marins, qui demeure un monopole en grande partie britannique, pèse lourdement sur le budget des Affaires étrangères. Si le chiffre diplomatique permet de réduire la longueur des dépêches, les frais restent considérables lors des crises internationales, comme on l'a tristement observé lors de la guerre du Tonkin."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Sport",
    "title": "Résultats des courses de Dieppe",
    "summary": "Le compte-rendu de la réunion hippique du dimanche 16 août à Dieppe consacre les victoires de Bérat, Butor et Roméo, ainsi que les succès remarqués de Quartier Latin et de Barbouchi.",
    "paragraphs": [
      "La réunion hippique du dimanche 16 août a connu un succès notable. Parmi les résultats enregistrés, le prix de la Plage a été remporté par Bérat, le prix du Poulet par Butor, et le prix de Pourville par Roméo.",
      "Le prix Charles-Laffitte a été enlevé par Quartier Latin, tandis que le prix Ango a été brillamment gagné par Barbouchi."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Économie",
    "title": "Causerie financière",
    "summary": "Malgré le calme plat de la morte-saison, le marché financier conserve une belle fermeté, soutenu par les achats au comptant qui assurent une progression régulière des cours hebdomadaires.",
    "paragraphs": [
      "Les bonnes tendances du marché se sont confirmées d'une semaine à l'autre. Si, par moments, quelques hésitations ont semblé se produire, il n'en faut point chercher la cause ailleurs que dans le ralentissement habituel des transactions dû à la morte-saison.",
      "Par contre, les capitaux de placement ont mis à profit l'absence de la spéculation pour prendre fermement la direction du marché. Les achats au comptant ont imprimé une solide tenue et, sur presque tous les points, la clôture se fait en progrès sur les cours observés il y a huit jours."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Économie",
    "title": "Fonds d'État et étrangers",
    "summary": "Les fonds d'État s'orientent à la hausse. Les titres italiens, espagnols et ottomans progressent, tandis que les valeurs russes bénéficient de la situation favorable en Extrême-Orient.",
    "paragraphs": [
      "Le 3 % finit à 100,70 après avoir touché 100,50. Le 3 % Amortissable revient à 99,80. Le 3 1/2 % termine la séance en hausse.",
      "Les fonds étrangers manifestent de bonnes dispositions. L'Italien s'est avancé de 92,95 à 93,65, profitant de la tranquillité intérieure du pays. L'Extérieure espagnole, malgré l'incertitude sur la réduction du revenu, progresse à 71,05. Les fonds Ottomans conservent leur fermeté habituelle.",
      "Les fonds russes continuent à se raffermir à mesure que les troupes internationales font des progrès décisifs en Extrême-Orient."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Économie",
    "title": "Établissements de crédit et chemins de fer",
    "summary": "Le secteur bancaire progresse nettement sous l'impulsion des grands établissements de crédit, tandis que les compagnies de chemins de fer affichent des recettes en forte augmentation.",
    "paragraphs": [
      "Les grands établissements de crédit ont fait un nouveau pas en avant. La Banque de Paris et des Pays-Bas est en progrès de 43 francs. Le Crédit Lyonnais clôture en hausse de 10 francs. Le Comptoir d'Escompte se maintient à 596, tandis que la Société Générale s'échange au comptant à 608 francs.",
      "Les recettes des compagnies de chemins de fer ont été brillantes, accusant une augmentation totale depuis le 1er janvier de 43 millions de francs. Le marché des actions reste ferme, avec des gains enregistrés pour l'Est, le Lyon et le Midi."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Littérature",
    "title": "Siffler et chanter dans l'obscurité",
    "summary": "Une réflexion sur la résignation de Gustave Flaubert face à la maladie, comparant cette acceptation forcée à l'attitude de ceux qui, privés de soleil, feignent la sérénité pour mieux endurer l'existence.",
    "paragraphs": [
      "« Je vais assez bien depuis que je me suis résigné à être invalide pour le reste de mes jours », répondait invariablement Gustave Flaubert lorsqu'on lui demandait des nouvelles de sa santé.",
      "De prime abord, une telle manière de s'exprimer semble naïve. Mais cela signifiait que l'auteur de Madame Bovary avait été contraint de renoncer au degré de santé auquel il avait aspiré et qu'il en avait pris son parti.",
      "Beaucoup de gens en font autant. Sachant qu'ils ont à vivre sous un ciel couvert de nuages sombres, ils s'efforcent de faire croire que l'absence de soleil est pour eux une chose de peu d'importance. Ce n'est qu'un simple effort pour siffler et chanter dans l'obscurité."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Roman-feuilleton",
    "title": "Main gauche - Vers l'inconnu",
    "summary": "William Janck, à la recherche d'une fillette disparue, progresse dans sa traque tendue. Sur les bords de la Wisconsin, une confrontation brutale avec le guide malfaiteur scellera le dénouement de cette quête périlleuse.",
    "paragraphs": [
      "Il y était depuis longtemps, désespérant de voir venir quelqu'un, lorsque enfin un tout jeune homme à la face terreuse apparut au tournant d'une cabane.",
      "William Janck, cherchant à retrouver la trace de la petite fille et de son guide, tente d'obtenir des informations précises. Pendant ce temps, une dame, riche et mystérieuse, poursuit sa route solitaire vers Balt City.",
      "Le dénouement tragique survient sur le bord de la rivière Wisconsin, où une confrontation éclate entre Janck et le guide malfaiteur ; l'affrontement se termine par une blessure pour Lydie et la fuite précipitée du bandit."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Économie",
    "title": "Valeurs de traction et mines",
    "summary": "Compte-rendu boursier du 28 novembre 1899 : le secteur des transports parisiens affiche une stabilité remarquable, tandis que le marché des mines d'or demeure atone malgré la retenue des porteurs.",
    "paragraphs": [
      "Les tendances restent bonnes dans le compartiment des valeurs de traction. La Compagnie générale de Traction, l'Est Parisien et la Société Parisienne Électrique maintiennent une belle stabilité.",
      "Les actions de la Compagnie Internationale des Wagons-Lits oscillent entre 550 et 560 francs. Les valeurs cuprifères sont plus discutées, mais les acheteurs reprennent le dessus.",
      "Le marché des mines d'or est atone, les événements ayant démenti les prévisions optimistes, mais la patience des porteurs empêche une chute brutale des cours."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Revue Commerciale",
    "title": "Grains, farines et matières premières",
    "summary": "Bilan des marchés agricoles et matières premières : les intempéries ont pesé sur les récoltes, tandis que les cours des alcools reculent et que le sucre subit une instabilité marquée.",
    "paragraphs": [
      "Les récoltes ont été marquées par des orages violents et des pluies abondantes, causant des dégâts notables. Il existe de fortes divergences sur le rendement des blés suite au battage, bien que la qualité soit généralement jugée belle.",
      "Le marché des huiles de colza est calme. Les alcools subissent une dépression sensible des cours. Les sucres présentent, quant à eux, des fluctuations importantes cette semaine."
    ]
  }
];
