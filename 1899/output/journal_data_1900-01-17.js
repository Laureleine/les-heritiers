// Date: 1900-01-17
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-17 (Version Restaurée, 53 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage Secret",
    "summary": "Le Petit Parisien annonce la publication prochaine de 'Mariage Secret', un roman inédit et dramatique de Paul Bertnay qui explore, avec beaucoup d'émotion, le destin tourmenté d'une mère et de sa fille.",
    "paragraphs": [
      "Le Petit Parisien publiera prochainement 'Mariage Secret', un grand roman inédit par Paul Bertnay.",
      "Mariage secret est un roman dramatique et passionné qui se déroule au milieu d'émouvantes péripéties. C'est l'histoire de deux femmes, la mère et la fille, jetées à la suite d'une aventure romanesque dans le milieu parisien, et dont les infortunes imméritées provoqueront, chez nos lectrices, de poignantes émotions.",
      "Mariage Secret a été tout spécialement écrit pour le Petit Parisien par Paul Bertnay, dont le talent, fait d'émotion vraie, est si goûté du grand public. Nos lecteurs retrouveront dans Mariage Secret les qualités qui distinguent l'auteur d'Orphelins d'Alsace, Celle qu'on aime, et Sacrifice."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Social",
    "title": "Les Abris du marin",
    "summary": "Pour lutter contre l'exploitation des pêcheurs et les ravages de l'alcoolisme, l'institution des 'Abris du marin' complète l'œuvre des 'Maisons du marin' en offrant des lieux de repos gratuits.",
    "paragraphs": [
      "Nous avions déjà les Maisons du marin, nous allons avoir maintenant les Abris du marin. Les deux institutions, pour être logées à la même enseigne ou presque, n'en ont pas moins leur caractère propre et distinct.",
      "J'ai dit ici même d'où était née la première de ces institutions : dans les ports où le marin aborde après de longues traversées, il est trop souvent la proie d'industriels effrontés qui lui extorquent, en quelques jours, le salaire qu'il a mis tant de mois à gagner.",
      "C'est pour le garantir contre cette indigne exploitation que Dunkerque, Bordeaux, Marseille, Nantes, Rochefort, etc., ont fondé, l'un après l'autre, des Maisons du marin.",
      "L'objet spécial des Abris du marin est d'attirer les pêcheurs pendant les jours de relâche et de les retenir en leur offrant, gratuitement, des salles de réunion, une salle de lecture et des avantages matériels. Il s'agit d'arracher nos pêcheurs aux dangereuses tentations de l'auberge et d'enrayer les épouvantables ravages que l'alcoolisme cause parmi eux.",
      "L'œuvre des Abris peut rendre les plus grands services, de même que, par la multiplication des Maisons du marin, on espère affranchir le travail des gens de mer du parasitisme dévorant des hôtesses et des marchands d'hommes."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions",
    "summary": "Dans cette suite du roman 'Deux Passions', les tensions sentimentales entre Georges Dufresne et Valentine atteignent un point critique, marqué par l'impossibilité de Valentine de renoncer à sa situation.",
    "paragraphs": [
      "Le Petit Parisien présente le grand roman inédit 'Deux Passions' (Deuxième partie).",
      "Le protagoniste discute avec Valentine du mariage, de l'amour et de leurs désirs respectifs. Malgré une passion dévorante, Valentine refuse de quitter sa situation actuelle, laissant Georges Dufresne dans une détresse profonde et incertaine."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des Ministres",
    "summary": "Réuni sous la présidence de M. Loubet, le Conseil des ministres a confirmé le versement des indemnités aux familles des enseignes tués à Men-Tao et a débattu du budget de la Marine.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin, à l'Élysée, sous la présidence de M. Loubet.",
      "Le ministre des Affaires étrangères a fait savoir au Conseil que l'indemnité pour les familles des deux enseignes du Descartes, assassinés à Men-Tao, venait d'être versée à Paris et serait remise immédiatement aux ayants droit.",
      "Le Conseil s'est occupé de la discussion du budget, et notamment des chapitres réservés au budget de la Marine ainsi que des crédits relatifs à la défense du littoral et des colonies."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Informations administratives",
    "title": "Mouvement administratif",
    "summary": "Le Journal officiel de ce matin détaille un important remaniement préfectoral, actant de nouvelles nominations dans les départements de l'Oise, du Gard, de l'Eure-et-Loir et du Pas-de-Calais.",
    "paragraphs": [
      "Le Journal officiel publiera ce matin le mouvement administratif suivant : M. Couppel du Lude est nommé préfet de l'Oise ; M. Maitrot de Varenne, préfet du Gard ; M. Brelet, préfet d'Eure-et-Loir ; M. Collignon, sous-préfet de Saint-Omer ; M. Buellet, secrétaire général du Pas-de-Calais ; M. Manceron, sous-préfet de Montreuil."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Social",
    "title": "Les Retraites ouvrières",
    "summary": "M. Guieysse a présenté à la commission des assurances et de prévoyance sociales le nouveau projet de loi garantissant une retraite de vieillesse aux travailleurs français dès l'âge de soixante-cinq ans.",
    "paragraphs": [
      "M. Guieysse a communiqué hier à la commission d'assurance et de prévoyance sociales les articles du nouveau projet sur les retraites ouvrières.",
      "Le projet prévoit que tout ouvrier ou employé de l'industrie, du commerce et de l'agriculture, de nationalité française, a droit à une retraite de vieillesse à soixante-cinq ans accomplis, sous réserve de cotisations prélevées sur le salaire."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Nécrologie",
    "title": "Mort d'un Sénateur",
    "summary": "M. Chiris, sénateur républicain des Alpes-Maritimes et industriel de la parfumerie, s'est éteint hier à Paris à l'âge de soixante ans. Il siégeait à l'Assemblée nationale depuis 1871.",
    "paragraphs": [
      "Nous apprenons la mort de M. Chiris, sénateur républicain des Alpes-Maritimes, décédé hier à son domicile, à Paris, à l'âge de soixante ans.",
      "Directeur d'une importante maison de parfumerie, M. Chiris fut élu, en 1871, membre de l'Assemblée nationale. Il avait épousé une nièce de M. Thiers."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Politique",
    "title": "La Convention Franco-Américaine",
    "summary": "La commission des douanes a arrêté le calendrier des auditions concernant la future convention commerciale franco-américaine. Les représentants des filières industrielles et agricoles seront entendus dès le 23 janvier.",
    "paragraphs": [
      "Avant d'entamer la discussion de la convention commerciale entre la France et les États-Unis, la commission des douanes a décidé d'entendre les chambres syndicales, les sociétés industrielles et les sociétés agricoles. Ces auditions commenceront le mardi 23 janvier."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Affaire Richetto : Deux Femmes coupées en Morceaux",
    "summary": "L'instruction sur le meurtre de la femme Catineau se resserre autour de Luigi Richetto. L'analyse du médecin légiste confirme que le marteau retrouvé dans sa loge est l'arme du crime.",
    "paragraphs": [
      "Le juge d'instruction a confronté hier soir Luigi Richetto avec l'employé de tramways Simon. L'inculpé continue à protester de sa non-culpabilité malgré les preuves accumulées.",
      "Le médecin légiste a examiné la tête de la femme Catineau et a constaté que la malheureuse avait été tuée d'un coup de marteau, dont l'empreinte coïncide de la façon la plus absolue avec la forme du marteau découvert dans la loge de Richetto.",
      "Richetto est décrit comme un homme froid et obstiné qui se défend avec énergie. Le témoignage d'un chiffonnier du Gourguillon est venu renforcer les soupçons du juge."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Assassinat sur une route",
    "summary": "Le cadavre de M. Louis Vaurabourg, clerc d'huissier, a été découvert sur la route de Breteuil. La disparition de sa sacoche accrédite la thèse d'un crime crapuleux commis durant son trajet à bicyclette.",
    "paragraphs": [
      "À six heures et demie, hier soir, sur la route de Bourth à Breteuil, des passants ont découvert le cadavre de M. Louis Vaurabourg, clerc chez M. Coeuret, huissier à Breteuil.",
      "Le malheureux, qui circulait à bicyclette, a été frappé de deux coups de couteau, dont l'un lui a tranché l'artère carotide. La sacoche dont il était porteur a disparu, ce qui indique que le vol a été le mobile du crime."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Faits Divers",
    "title": "Trois petites filles asphyxiées",
    "summary": "À Doujeux, un terrible incendie domestique a coûté la vie à trois fillettes âgées de deux à huit ans. Le feu s'est déclaré dans leur chambre en l'absence de leur mère, les asphyxiant rapidement.",
    "paragraphs": [
      "Un événement des plus pénibles vient de se produire à Doujeux : trois fillettes, âgées de deux à huit ans, ont péri asphyxiées et carbonisées dans leur chambre après que leur lit eut pris feu en l'absence de leur mère."
    ]
  },
  {
    "id": 12,
    "page": 1,
    "category": "Actualité économique",
    "title": "La Mécanique à l'Exposition",
    "summary": "L'Exposition universelle du printemps prochain mettra à l'honneur les progrès de l'industrie mécanique française. Le palais dédié exposera une vaste gamme de machines à vapeur, à gaz, hydrauliques et électriques.",
    "paragraphs": [
      "L'industrie mécanique a fait, depuis une dizaine d'années, de tels progrès que l'Exposition, qui s'ouvrira au printemps, montrera au public l'ampleur des réalisations françaises.",
      "Le palais de la Mécanique est admirablement aménagé pour accueillir les machines à vapeur, à gaz, hydrauliques et électriques, classées par spécialités."
    ]
  },
  {
    "id": 13,
    "page": 1,
    "category": "Actualité internationale",
    "title": "La Guerre du Transvaal",
    "summary": "Le War Office signale une opération mineure du général French vers Colesberg. Quant aux dépêches venues de Belgique évoquant une défaite du général Buller, elles doivent être accueillies avec une grande prudence.",
    "paragraphs": [
      "L'unique dépêche communiquée hier par le War Office mentionne une opération sans conséquence tentée par les troupes du général French sur le pont de Colesberg.",
      "Une dépêche sensationnelle de Belgique annonce, il est vrai, que le général Buller aurait éprouvé une sanglante défaite, mais il convient de se montrer fort sceptique au sujet des dépêches de ce genre."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Situation autour de Ladysmith et Colenso",
    "summary": "La situation demeure critique autour de Colenso. Les informations sur une évacuation boër sont démenties, et les forces britanniques multiplient les reconnaissances face à un ennemi dissimulé dans ses tranchées.",
    "paragraphs": [
      "Le Foreign Office, où l'on réclamerait bruyamment la démission de M. Chamberlain, est au centre des attentions. Bien que la nouvelle fût reproduite ici par tous les journaux, le Sud attache de l'importance à la dépêche officielle du 10 disant que la situation est jugée éminemment critique.",
      "Une dépêche de Pietermaritzburg au Daily Mail annonce que le bruit de l'évacuation de Colenso par les Boërs est absolument inexact. Ce point est toujours disputé.",
      "Une dépêche du Daily Mail annonce qu'une reconnaissance a été exécutée du côté de l'est, vers les positions boërs. Ils ne révèlent leurs tranchées qu'au moment du combat."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Rumeurs et mouvements à Durban",
    "summary": "Durban est en proie aux rumeurs concernant de violents combats, mais la censure militaire bloque toute confirmation. Le train blindé a été dépêché sur le front pour appuyer le mouvement du général Buller.",
    "paragraphs": [
      "La ville est pleine des rumeurs les plus diverses relativement à un combat acharné, mais on ne sait rien de précis. La censure arrête toutes les nouvelles. Toutes seront supprimées jusqu'à ce que le général Buller ait fait connaître le résultat de son mouvement combiné.",
      "Le train blindé est parti aujourd'hui pour le théâtre des opérations."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Opérations militaires près de Ladysmith",
    "summary": "Au 10 janvier, une colonne britannique tente de secourir Ladysmith en franchissant la Tugela. Les Boers renforcent leurs positions et leur artillerie sur les hauteurs environnantes pour bloquer toute progression.",
    "paragraphs": [
      "Le correspondant du Standard à Durban télégraphie, à la date du 10 janvier : Un homme venant de Springfield rapporte que la colonne qui marche au secours de Ladysmith a traversé les petits bras de la Tugela. Elle était, au moment de son départ, campée sur la Tugela même, en face des positions boers. Des convois chargés de provisions de toutes sortes pour la garnison de Ladysmith sont partis de Frere.",
      "On espérait, à la date du 13, que ce convoi opérerait lundi soir sa jonction avec les troupes du général White.",
      "Le correspondant du Standard à Ladysmith annonce que les Boers fortifient leurs positions au nord et à l'ouest de la ville. Ils montent de gros canons sur les hauteurs qui commandent les approches sud. Leurs pièces de campagne sont toutes dirigées vers Colenso."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Analyse stratégique sur la Tugela",
    "summary": "Le correspondant militaire de la Westminster Gazette analyse les risques des mouvements tournants anglais, soulignant la mobilité supérieure des Boers capable de concentrer leurs forces pour écraser les colonnes.",
    "paragraphs": [
      "Le correspondant militaire de la Westminster Gazette, analysant les opérations sur la Tugela, écrit : Il faut avouer que le grand mouvement tournant conjecturé dans la direction de l'est, et même dans celle de l'ouest, entraîne des risques considérables.",
      "Le danger des manœuvres des forces anglaises réside dans le fait qu'il met les Boers à même de concentrer rapidement toutes leurs troupes pour écraser une des colonnes britanniques avant qu'elle n'ait pu être renforcée par les autres. Le péril principal demeure la grande mobilité des Boers.",
      "Le correspondant ne croit pas que les Boers aient battu en retraite ; s'ils se sont retirés, c'est dans le but de se placer sur le flanc des Anglais pour frapper un coup difficile à éviter."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Sur la rivière Modder",
    "summary": "Lord Methuen consolide les retranchements du camp de Modder malgré la montée des eaux. Le pont ferroviaire est en cours de réparation, tandis que les navires anglais maintiennent leur pression par le canon.",
    "paragraphs": [
      "Lord Methuen renforce ses retranchements au camp de Modder. Le fleuve a monté de plusieurs pieds. Le pont du chemin de fer a été consolidé par les ingénieurs ; il pourra être utilisé dans quelques jours.",
      "Les canons de marine anglais ont bombardé ce matin, comme à l'accoutumée, les positions boers. Ces derniers n'ont pas répondu."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Rappel de Lord Methuen",
    "summary": "Suite à la révélation d'une lettre accablante du général Wauchope avant la bataille de Magersfontein, le War Office décide de remplacer lord Methuen par sir Frederick Carrington face à l'indignation des troupes.",
    "paragraphs": [
      "La Liverpool Daily Post annonce que le War Office possède une lettre écrite par le général Wauchope la nuit précédant la bataille de Magersfontein. Dans ce document, le général affirme avoir reçu l'ordre d'entreprendre une tâche impossible, contre laquelle il avait protesté en vain, ajoutant qu'il devait obéir ou rendre son épée.",
      "L'indignation contre lord Methuen dans les rangs de l'armée est si intense qu'il est très douteux que les hommes consentent à le suivre dans un nouvel engagement. Le War Office a décidé de rappeler immédiatement lord Methuen. Il sera remplacé par sir Frederick Carrington."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Proclamation de l'État libre d'Orange",
    "summary": "La République de l'État libre d'Orange ordonne une mobilisation générale, incluant désormais les commerçants autrefois dispensés, afin de renforcer ses effectifs face à l'avancée britannique.",
    "paragraphs": [
      "La République de l'État libre d'Orange vient de lancer une proclamation appelant sous les drapeaux tout homme valide en état de porter les armes, y compris les commerçants qui, jusqu'ici, avaient été dispensés de tout service actif."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Taxes sur les mines d'or du Transvaal",
    "summary": "Le gouvernement boer instaure une redevance mensuelle sur les mines d'or, basée sur leur rendement d'avant-guerre. Toute exploitation refusant ce paiement s'expose à la confiscation immédiate de ses concessions.",
    "paragraphs": [
      "Les mines d'or du Transvaal sont désormais tenues de verser à l'État boer une redevance mensuelle calculée sur la moyenne de rendement de chacune d'entre elles durant les trois mois ayant précédé la déclaration de guerre. Le journal « Volksstem » affirme qu'en imposant cette règle, le gouvernement a usé de son droit le plus strict.",
      "La sanction prévue est sans appel : toute mine omettant de s'acquitter de cette taxe sera immédiatement confisquée."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Le siège de Mafeking",
    "summary": "Les forces boers ont consolidé leurs positions sur les hauteurs entourant Mafeking. Après divers combats, le bombardement intensif de la place a provoqué la destruction d'un fort anglais.",
    "paragraphs": [
      "Les Boers ont pris position sur une colline située à l'ouest de Mafeking. À l'issue d'une série d'engagements, les forces anglaises ont été contraintes de battre en retraite.",
      "Il est officiellement annoncé que le bombardement de Mafeking, survenu hier, a entraîné la démolition complète du fort qui était visé par l'artillerie boer."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Critique de l'organisation de la Yeomanry",
    "summary": "Le « Daily Graphic » pointe les défaillances de la Yeomanry, soulignant l'incompétence au tir des recrues et les retards logistiques causés par la grève des tailleurs militaires.",
    "paragraphs": [
      "Selon le « Daily Graphic », l'organisation actuelle de la Yeomanry ne donne pas satisfaction. De nombreux candidats ne possèdent aucune notion du tir, et en raison de la grève des tailleurs militaires, les équipements et effets d'habillement n'ont toujours pas été livrés."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Effectifs des forces républicaines",
    "summary": "Le « Cape Times » dresse un bilan des forces ennemies : troupes du Transvaal, État libre d'Orange, volontaires étrangers et rebelles des colonies britanniques totalisent 80 000 combattants.",
    "paragraphs": [
      "Le « Cape Times » publie un état détaillé des effectifs : Boers du Transvaal (30 000), contingents de nationalités étrangères (10 000), État libre d'Orange (25 000), et rebelles de la colonie du Cap ou du Natal (15 000). Le total s'élève à 80 000 hommes."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Politique",
    "title": "Responsabilités dans la conduite de la guerre",
    "summary": "Le « Manchester Guardian » critique la stratégie du gouvernement, accusant le comité de défense nationale d'avoir ignoré le général Wolseley et d'avoir laissé le général Buller commettre de graves erreurs.",
    "paragraphs": [
      "Le « Manchester Guardian » fait paraître un article intitulé : « Le gouvernement et les généraux ; où se trouve la responsabilité ? »",
      "L'article déplore que le commandement suprême n'ait pas été confié au général Wolseley, mais au comité de défense nationale. Il reproche à ce dernier d'avoir ignoré les conseils de Wolseley, d'avoir laissé Buller agir seul en dépit de ses erreurs tactiques, et d'avoir manifesté une grande lenteur dans le renforcement des troupes aux Indes."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Faits Divers",
    "title": "Terrible explosion en Italie",
    "summary": "Une effroyable explosion a anéanti une fabrique de dynamite à Avigliana, en Italie. Le bilan s'établit à dix victimes mortelles et de nombreux blessés, causant des dégâts matériels considérables dans les environs.",
    "paragraphs": [
      "Une effroyable catastrophe vient de frapper la localité d'Avigliana, où une fabrique de dynamite a été anéantie par une explosion consécutive à un incendie. Le bilan provisoire est particulièrement lourd, dénombrant déjà dix victimes mortelles et plusieurs blessés.",
      "La violence du choc a été ressentie dans un vaste rayon, causant des dégâts matériels importants aux habitations avoisinantes, dont les structures ont été sérieusement ébranlées par le souffle de la détonation."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Faits Divers",
    "title": "Catastrophe dans une église en Russie",
    "summary": "À Malo-Ouzene, en Russie, l'effondrement des voûtes d'une église en plein office a causé une tragédie : quarante-neuf fidèles ont trouvé la mort, tandis que soixante-huit autres ont été blessés.",
    "paragraphs": [
      "Une nouvelle lugubre nous parvient de la bourgade de Malo-Ouzene, en Russie, où un drame atroce s'est produit au sein de l'édifice religieux. Pendant que les fidèles étaient réunis pour l'office, les voûtes de l'église se sont soudainement effondrées sur l'assistance.",
      "Les secours, arrivés sur les lieux, ne peuvent que constater l'étendue du sinistre : le bilan est tragique, totalisant quarante-neuf tués, tandis que soixante-huit personnes ont été blessées, dont huit grièvement."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Faits Divers",
    "title": "Émeute aux Indes",
    "summary": "Une révolte à Chota-Nagpur, aux Indes, a conduit des centaines d'indigènes à assaillir une caserne. La riposte des cipayes fut sanglante, faisant plusieurs victimes chez les émeutiers.",
    "paragraphs": [
      "Des troubles graves ont éclaté à Chota-Nagpur, aux Indes, où une révolte a pris une tournure dramatique. Plusieurs centaines d'indigènes, dans une tentative téméraire, se sont emparés d'une caserne locale.",
      "Une collision sanglante a immédiatement opposé ces insurgés à un régiment de cipayes dépêché sur les lieux. L'affrontement, d'une grande violence, a provoqué la mort de plusieurs émeutiers et l'arrestation de cinquante-deux autres rebelles."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Faits Divers",
    "title": "Une exécution au profit d'une famille",
    "summary": "Aux États-Unis, les autorités ont autorisé la vente de places pour assister à une exécution capitale, afin de reverser les profits à la famille indigente du condamné.",
    "paragraphs": [
      "Une décision pour le moins singulière a été prise par les autorités d'une petite ville des États-Unis. En vue de l'exécution d'un criminel, il a été décrété que le produit de la vente des places pour assister à cet acte de justice serait intégralement reversé à la famille du condamné.",
      "La veuve et ses enfants, se trouvant dans une situation de dénuement complet, bénéficieront ainsi de cette mesure, transformant l'ultime châtiment de l'homme en un secours financier pour les siens."
    ]
  },
  {
    "id": 30,
    "page": 2,
    "category": "Guerre",
    "title": "Hostilités aux Philippines",
    "summary": "La situation aux Philippines est critique après une offensive contre les lignes américaines près de Manille, marquée par de lourdes pertes et des exécutions sommaires de prisonniers.",
    "paragraphs": [
      "La tension reste vive aux Philippines, où les forces locales ont lancé une offensive vigoureuse contre les lignes américaines établies à proximité de Manille. L'armée américaine, prise au dépourvu, a essuyé des pertes humaines considérables au cours de ces engagements.",
      "Le conflit prend une tournure d'autant plus sombre que des informations font état de prisonniers fusillés alors qu'ils étaient sans défense. Ces agissements ont provoqué une vague d'indignation générale, soulevant de vives critiques sur la conduite des hostilités."
    ]
  },
  {
    "id": 31,
    "page": 2,
    "category": "Politique",
    "title": "Chambre des Députés : séance du 16 janvier",
    "summary": "La Chambre délibère sur les budgets ferroviaires. M. Pierre Baudin, ministre des Travaux publics, détaille les mesures prévues pour le quadruplement des voies et la protection des droits des agents lors des rachats.",
    "paragraphs": [
      "La Chambre a poursuivi la discussion des budgets des chemins de fer de l'État et des grandes compagnies. Plusieurs propositions de résolution ont été adoptées, notamment celle préconisant le quadruplement des voies entre Paris et Brétigny afin d'assurer une sécurité accrue aux voyageurs.",
      "Le ministre des Travaux publics, M. Pierre Baudin, a répondu avec précision aux interpellations concernant les retards récurrents des convois ainsi que sur le statut et les droits des employés en cas de rachat des lignes par l'État."
    ]
  },
  {
    "id": 32,
    "page": 2,
    "category": "Culture",
    "title": "Les concerts du dimanche",
    "summary": "Succès confirmé des concerts symphoniques. M. Chevillard, reprenant la direction après le décès de Charles Lamoureux, poursuit la valorisation des maîtres classiques et de la nouvelle école française.",
    "paragraphs": [
      "Nos grands concerts symphoniques rencontrent une faveur croissante auprès du public, avec une place désormais largement faite aux œuvres de Jean-Sébastien Bach, aux côtés des grands maîtres reconnus.",
      "La disparition de Charles Lamoureux demeure une perte immense pour la vie musicale. Son gendre, M. Chevillard, reprend aujourd'hui le flambeau avec autorité et continue de promouvoir avec talent les compositions de la jeune école française."
    ]
  },
  {
    "id": 33,
    "page": 2,
    "category": "Marine",
    "title": "Organisation des corps secondaires de la Marine",
    "summary": "Par deux nouveaux décrets, le ministère de la Marine procède à la restructuration administrative des corps des dessinateurs et des agents techniques afin de clarifier les échelons de la hiérarchie.",
    "paragraphs": [
      "Le ministre de la Marine a signé deux décrets importants portant sur la réorganisation des corps des dessinateurs et des agents techniques des directions de travaux. Cette mesure vise à clarifier définitivement leur hiérarchie et leur statut administratif au sein du département."
    ]
  },
  {
    "id": 34,
    "page": 2,
    "category": "Faits Divers",
    "title": "Une maison assiégée à Saint-Étienne",
    "summary": "À la Croix-de-l'Orme, une vive altercation a opposé grévistes et ouvriers non-grévistes. La demeure de ces derniers a été la cible de jets de pierres et de coups de feu, nécessitant l'ouverture d'une enquête.",
    "paragraphs": [
      "Une scène de violence s'est déroulée à la Croix-de-l'Orme, où des ouvriers non-grévistes ont été assiégés dans leur domicile par une troupe de grévistes. La maison a été violemment caillassée, et des coups de feu ont été échangés de part et d'autre. La police a immédiatement ouvert une enquête pour déterminer les responsabilités."
    ]
  },
  {
    "id": 35,
    "page": 2,
    "category": "Sciences",
    "title": "Une découverte médicale sur la lèpre",
    "summary": "Le gouvernement américain étudie une découverte réalisée au Mexique par un médecin, révélant une plante dotée de propriétés curatives exceptionnelles contre la lèpre, avec des résultats rapides.",
    "paragraphs": [
      "Un médecin américain aurait découvert, sur les hauts plateaux du Mexique, une plante aux propriétés curatives remarquables contre la lèpre. Des résultats probants auraient été obtenus en moins de six semaines de traitement. Le gouvernement américain s'intéresse désormais vivement à cette découverte pour le service de ses léproseries."
    ]
  },
  {
    "id": 36,
    "page": 2,
    "category": "Social",
    "title": "Les excès du féminisme à outrance",
    "summary": "Aux États-Unis, un âpre conflit oppose les travailleuses célibataires aux femmes mariées, ces dernières étant jugées privilégiées. Des mouvements organisent des campagnes actives pour favoriser l'emploi des jeunes filles seules.",
    "paragraphs": [
      "Aux États-Unis, un conflit oppose les travailleuses célibataires aux femmes mariées, ces dernières étant jugées privilégiées. Des mouvements organisent des campagnes pour favoriser l'emploi des jeunes filles seules, arguant que ces dernières sont plus vulnérables face à la nécessité du labeur quotidien."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident à la Gare de Lyon",
    "summary": "Un incident de manœuvre ferroviaire s'est produit ce matin en Gare de Lyon. Grâce à la diligence et au sang-froid du chef de manœuvre, aucun dommage n'est à déplorer, hormis un léger retard pour les voyageurs.",
    "paragraphs": [
      "Un accident de chemin de fer, dont les suites eussent pu être extrêmement graves, s'est produit ce matin, au moment où l'on manœuvrait trois voitures sur la voie. La manœuvre était compliquée, mais grâce au sang-froid du chef de manœuvre, le pire a été évité.",
      "Une fois en sûreté, on détacha les voitures du train. Cette opération fut terminée au bout d'un quart d'heure. Les voyageurs n'en ont été qu'incommodés d'un retard insignifiant."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Politique",
    "title": "Propagande royaliste",
    "summary": "À l'issue d'une réunion publique, plusieurs individus colportant des discours séditieux ont été appréhendés par les forces de l'ordre, qui ont également saisi des documents de propagande destinés à troubler l'ordre public.",
    "paragraphs": [
      "Hier soir, à l'issue d'une réunion, plusieurs individus tenant des discours séditieux ont été arrêtés par les autorités. Un service d'ordre a saisi des affiches incitant au désordre. Leur distribution fait l'objet d'un procès-verbal et ils seront poursuivis conformément à la loi."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Faits Divers",
    "title": "Misère et Charité : une veuve secourue",
    "summary": "Poussée par le désespoir, la veuve Lespar a tenté de mettre fin à ses jours. Secourue par la police, elle a reçu le soutien financier de ses voisins et s'est vu offrir un emploi, permettant d'assurer le salut de sa famille.",
    "paragraphs": [
      "Une scène touchante s'est déroulée hier après-midi au commissariat de police du Petit-Montrouge. La veuve Lespar, indigente et mère de trois enfants, s'est présentée devant le commissaire, M. Baissat, après avoir tenté de mettre fin à ses jours en s'asphyxiant avec ses enfants.",
      "La malheureuse ignorait qu'une collecte avait été faite dans le quartier à son intention par des voisins apitoyés. Le commissaire lui remit cet argent et lui assura une place de journalière. Il a également confié temporairement les enfants à des personnes charitables."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le conscrit au nom bizarre",
    "summary": "Lors des inscriptions militaires dans le septième arrondissement, un jeune conscrit a surpris l'administration par son nom singulier, dûment confirmé par son acte de naissance officiel.",
    "paragraphs": [
      "Parmi les conscrits qui venaient se faire inscrire à la mairie du septième arrondissement, figurait un jeune homme porteur d'un nom vraiment bizarre : P. H.",
      "L'employé crut d'abord à une plaisanterie, mais l'acte de naissance délivré par le maire de Decize (Nièvre) confirma qu'il s'appelait bien ainsi. Le conscrit a donc été inscrit sur les registres sous ce nom original."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Faits Divers",
    "title": "La folie d'un instituteur",
    "summary": "Un instituteur, en proie à une étrange monomanie, dérobait des vêtements dans une boutique du boulevard Beaumarchais pour les distribuer aux pauvres. Il a été interné à l'infirmerie du dépôt.",
    "paragraphs": [
      "Un marchand de confections du boulevard Beaumarchais a surpris un individu qui, sous le faux prétexte d'être un instituteur mandaté par son inspecteur pour recueillir des vêtements au profit des nécessiteux, dérobait des pantalons dans son établissement.",
      "Le commerçant a fait arrêter l'individu, lequel s'est révélé être effectivement un instituteur, mais atteint d'une singulière monomanie de la charité. Il a été conduit à l'infirmerie spéciale du dépôt."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Faits Divers",
    "title": "À coups de rasoir",
    "summary": "Drame de la jalousie rue des Boulets : Eugène Gras a violemment agressé sa compagne Augustine Paty à coups de rasoir. La victime est dans un état grave ; le coupable a été écroué.",
    "paragraphs": [
      "Eugène Gras, jaloux de sa compagne Augustine Paty qui manifestait le désir de rompre, l'a suivie et poignardée à coups de rasoir alors qu'elle se trouvait en compagnie d'un jeune homme, rue des Boulets. Auguste Colin, qui tentait de s'interposer, a été légèrement blessé.",
      "Augustine Paty a été transportée à l'hôpital Beaujon, où son état inspire de vives inquiétudes. Le coupable a été immédiatement arrêté et transféré au dépôt sur ordre de M. Houflaud, commissaire de police."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Faits Divers",
    "title": "Paris la Nuit",
    "summary": "Une série d'agressions violentes a troublé la quiétude nocturne : coups de couteau, rixes sanglantes et voies de fait ont conduit plusieurs individus devant la justice.",
    "paragraphs": [
      "M. Guillaume Schalier, ouvrier ferblantier, a été agressé par un inconnu armé d'un couteau à la sortie d'un débit de vins rue de Rambuteau. Bien que blessé au bras, ses jours ne sont pas en danger.",
      "Mme Joséphine Croulois, ménagère, a été violemment agressée et rouée de coups de pied rue Sainte-Croix-de-la-Bretonnerie par un nommé Émilien Haugrant, qui a été appréhendé par les agents de la force publique.",
      "M. Pierre Zefrezeh, ouvrier hongrois, a été agressé rue de Rivoli par une femme nommée Gabrielle Geberg, qui lui a brisé une bouteille sur le crâne. L'agresseuse a été conduite au dépôt.",
      "Trois individus, Émile Toillien, Gustave Pautrier et Émile Torcand, ont été arrêtés à la suite d'une fusillade et d'une bagarre générale impliquant une douzaine de personnes rue des Barres."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Social",
    "title": "Les infirmiers veilleurs de nuit",
    "summary": "Les infirmiers veilleurs de nuit des hôpitaux parisiens réclament à l'Assistance publique une réforme de leur service pour obtenir une alternance plus équitable avec le personnel de jour.",
    "paragraphs": [
      "Un groupe d'infirmiers veilleurs de nuit des hôpitaux de Paris a adressé une pétition au docteur Napias, directeur de l'Assistance publique, sollicitant une réglementation plus équitable des services et une alternance régulière avec les garçons de jour.",
      "Cette réforme permettrait aux veilleurs de nuit de bénéficier d'une liberté accrue, tout en assurant aux malades une assistance et un dévouement constants."
    ]
  },
  {
    "id": 45,
    "page": 3,
    "category": "Social",
    "title": "Les Tisseurs de Saint-Étienne",
    "summary": "La grève persiste à Saint-Étienne : les tisseurs refusent toute reprise sans le règlement du paiement de la mise en train et l'officialisation d'une convention prud'homale.",
    "paragraphs": [
      "Lors d'une réunion tenue au Prado, les tisseurs de Saint-Étienne ont réaffirmé leur volonté de ne pas reprendre le travail tant que le paiement de la mise en train ne sera pas réglé.",
      "Les grévistes exigent que le nouveau tarif soit revêtu de la signature des parties contractantes et officiellement déposé devant le conseil des prud'hommes."
    ]
  },
  {
    "id": 46,
    "page": 3,
    "category": "Tribunaux",
    "title": "Un acquittement : l'affaire Labriola",
    "summary": "La cour d'assises de la Seine a acquitté Charles Labriola, auteur d'un drame passionnel ayant causé la mort de sa maîtresse. L'émotion fut vive lors de l'énoncé du verdict.",
    "paragraphs": [
      "La cour d'assises de la Seine vient de rendre son verdict dans l'affaire Charles Labriola, accusé d'assassinat sur la personne de sa maîtresse, Mlle Lévy. Le couple, désespéré par les interdictions familiales pesant sur leur union, avait tenté, dans un élan de folie, de mettre fin à ses jours. Labriola, après avoir abattu la jeune femme, s'était grièvement blessé.",
      "L'attitude empreinte d'une profonde douleur de l'accusé tout au long des débats a manifestement impressionné le jury, qui, après délibération, a prononcé l'acquittement."
    ]
  },
  {
    "id": 47,
    "page": 3,
    "category": "Tribunaux",
    "title": "Un idiot tué par son père",
    "summary": "Le sieur Debeidder a comparu devant la cour d'assises du Cher pour le meurtre de son fils Alfred, âgé de vingt-six ans et atteint d'imbécillité, dont il avait dissimulé le corps.",
    "paragraphs": [
      "La cour d'assises du Cher a jugé le sieur Debeidder pour le meurtre de son fils, Alfred, âgé de vingt-six ans et atteint d'une grave imbécillité. Le père, exaspéré par la charge et l'infirmité chronique de son fils, l'avait tué dans un accès de violence.",
      "Pour masquer son forfait, il avait dissimulé le corps sous une hutte de branchages, où la gendarmerie finit par le découvrir à la suite de renseignements recueillis dans le voisinage."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Faits Divers",
    "title": "Un décès causé par le froid à Amilly",
    "summary": "Tragique découverte à Amilly : le vagabond Pierre Nivert, âgé de soixante-quinze ans, a été retrouvé mort de froid dans un hangar où il avait trouvé refuge pour la nuit.",
    "paragraphs": [
      "Un vieux vagabond, Pierre Nivert, âgé de soixante-quinze ans, sans domicile ni ressources, vivait depuis longtemps de la charité publique. Il avait été hébergé la nuit dernière par M. Chaumeron, cultivateur au hameau des Closeaux, dans la commune d'Amilly.",
      "Ce matin, ne voyant pas sortir le septuagénaire du hangar où il s'était couché, les occupants de la ferme allèrent pour le réveiller. Ils ne trouvèrent qu'un cadavre ; Nivert avait succombé durant la nuit à une congestion causée par le froid intense."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Météorologie",
    "title": "Bulletin météorologique du 16 janvier 1899",
    "summary": "Le temps fut maussade hier sur l'ensemble de la France, marqué par des pluies abondantes et des vents frais. Un radoucissement est néanmoins prévu dans les prochains jours.",
    "paragraphs": [
      "Le temps fut fort vilain hier, marqué par une pluie abondante, une brume épaisse et un vent frais. La zone de faible pression issue des îles Britanniques s'est propagée vers le sud et l'est du continent.",
      "Des mauvais temps, soufflant entre le sud et l'ouest, règnent actuellement sur nos côtes de la Manche et de Bretagne, s'étendant désormais vers le golfe de Gascogne. Les pluies ont été générales sur tout le territoire français.",
      "La température se relève généralement. En France, un temps plus doux accompagné de pluies éparses est pronostiqué par les services météorologiques."
    ]
  },
  {
    "id": 50,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Anniversaire de Molière et actualités théâtrales",
    "summary": "Célébration de l'anniversaire de Molière, nouveaux projets de Feydeau et disparition du compositeur Charles de Sivry rythment la vie des scènes parisiennes cette semaine.",
    "paragraphs": [
      "L'anniversaire de Molière a été célébré, selon l'usage, dans les deux Théâtres-Français. La Comédie-Française a offert un à-propos peu ingénieux mais redondant, suivi d'une excellente représentation des « Femmes savantes ».",
      "M. Debruvère vient de traiter avec MM. Georges Feydeau et Paul Gavault pour une grande féerie qui sera jouée au mois de novembre prochain au théâtre de la Gaîté, intitulée « Fril et Gob, ou le Postérieur magique ».",
      "Au théâtre Sarah-Bernhardt vont recommencer les samedis populaires de poésie ancienne et moderne. Comme l'an passé, des œuvres des plus grands poètes seront déclamées par Mme Sarah Bernhardt et des artistes des principaux théâtres de Paris.",
      "Au Théâtre Antoine, toute la semaine, on jouera « En Paix », le beau drame de M. Louis Bruyerre. Au théâtre des Nouveautés, « La Dame de chez Maxim » de Georges Feydeau vient d'atteindre sa 408e représentation.",
      "Le compositeur Charles de Sivry, fondateur du défunt Chat noir, vient de mourir. La « Tosca », opéra de Puccini, vient d'être donnée avec grand succès au théâtre Costanzi de Rome."
    ]
  },
  {
    "id": 51,
    "page": 4,
    "category": "Concerts et Divertissements",
    "title": "Spectacles parisiens et athlétisme",
    "summary": "Aux Folies-Bergère, le champion Pytiasinski affronte le redoutable Juri-Mered, tandis que l'Olympia présente de nouvelles attractions et que le Moulin-Rouge prépare son cortège de Vénus.",
    "paragraphs": [
      "C'est ce soir, aux Folies-Bergère, que l'athlète russe Pytiasinski va se mesurer avec le redoutable champion du monde, l'extraordinaire Juri-Mered.",
      "À l'Olympia, deux bons débuts ont eu lieu hier : Milly Capell, avec son cheval et ses quatre chiens, et Léo, dans sa nouvelle illusion.",
      "Samedi prochain, le Moulin-Rouge donnera une grande redoute avec un défilé galant intitulé le Cortège de Vénus."
    ]
  },
  {
    "id": 52,
    "page": 4,
    "category": "Sports",
    "title": "Actualités sportives : Automobile, Moto et Football",
    "summary": "Le Journal des Sports prépare une compétition de voiturettes automobiles, le Moto-Club de Lyon se réorganise sous la présidence de M. Collin, et le rugby international arrive au parc des Princes.",
    "paragraphs": [
      "Le Journal des Sports organisera cette année une grande course de voiturettes automobiles, avec des conditions d'engagement strictes pour éviter les moteurs truqués.",
      "Le Moto-Club de Lyon a nommé son nouveau comité, présidé par M. Collin.",
      "Le dimanche 21 janvier, au vélodrome du parc des Princes, aura lieu la troisième rencontre annuelle de football-rugby entre le Racing-Club de France et le London Team."
    ]
  },
  {
    "id": 53,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Tragédies de l'Amour (XVII)",
    "summary": "Au château, une tension insoutenable atteint son paroxysme : le duc de Villefort exige de Colette une rupture définitive avec les frères Girodias, provoquant une confrontation fatidique.",
    "paragraphs": [
      "Le duc de Villefort, en proie à une vive jalousie, exige de Colette qu'elle rompe avec les frères Girodias. La scène, chargée de tension, révèle les sentiments secrets de la jeune femme et la confrontation avec Gaston Girodias qui arrive au château.",
      "Malgré le trouble, Colette, poussée par une promesse passée, se donne à Gaston devant le duc, laissant ce dernier anéanti et incapable de réagir."
    ]
  }
];
