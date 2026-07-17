// Date: 1900-11-06
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-11-06 (Version Restaurée, 34 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "L'infirmière : Le dévouement à l'hôpital",
    "summary": "À quatre-vingts ans, Mlle Bottard, doyenne des infirmières de la Salpêtrière, tire sa révérence. Un parcours exemplaire qui souligne le besoin urgent de professionnaliser la carrière des infirmières en France.",
    "paragraphs": [
      "Les cités de douleur et de misère qui s'appellent les hôpitaux s'éclairent de dévouements sublimes. La doyenne de nos infirmières, Mlle Bottard, connue de tous à la Salpêtrière, achève sa soixantième année de service.",
      "Mlle Bottard est devenue à son tour la doyenne, et un ruban orné d'une croix mit, en 1898, sa tâche rouge sur son jersey noir. Mais pour la seconde fois, l'heure de la retraite va sonner. À quatre-vingts ans, il est temps de songer au repos.",
      "Elle représente bien l'infirmière d'autrefois, l'illettrée prête à toutes les fatigues, que les leçons des maîtres ont transformée en l'initiant aux pratiques des cliniques et aux tâches maternelles.",
      "Assurément, c'est là une des grandes réformes hospitalières dont nous attendons l'achèvement. La Salpêtrière en a déjà pu largement bénéficier grâce à l'installation d'une école municipale d'infirmerie qui a donné les plus heureux résultats.",
      "Développer la vocation et le savoir professionnel chez ces servantes des malades, grandir leur rôle, le plier aux exigences de l'assistance moderne, et aussi arriver à élever leur salaire, tel est le but de l'œuvre excellente qui a été commencée.",
      "Dans ce domaine, toutefois, nous avons été singulièrement devancés par l'Angleterre, ce que faisait ressortir Mlle Hamilton, docteur en médecine, dans une thèse soutenue devant la Faculté de Montpellier. Elle a comparé les services des deux pays et est restée frappée de l'infériorité sociale où végète encore en France l'infirmière.",
      "En Angleterre, la carrière des nurses est respectée, recherchée par les jeunes filles du monde le plus comme il faut. La nurse suit un grand exemple qui lui fut donné, vers 1850, par miss Nightingale, une réformatrice qui a poussé le cri d'alarme et mis à l'œuvre un véritable apostolat.",
      "Aurons-nous, de ce côté-ci du détroit, notre miss Nightingale ? Ce n'est pas l'esprit de dévouement qui fait défaut aux femmes de France, mais la conception du rôle professionnel qui n'est pas encore entrée dans nos idées."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Faits Divers",
    "title": "Mort du général de Boysson",
    "summary": "Le général de Boysson, commandant le 13e corps d'armée à Clermont-Ferrand, a trouvé une mort tragique hier soir près de Villeneuve-sur-Lot, suite à un accident de voiture causé par un cheval emballé.",
    "paragraphs": [
      "Hier soir, vers cinq heures, le général de Boysson, commandant le 13e corps d'armée à Clermont-Ferrand, revenait de son château de Saint-Waast, près de Villeneuve-sur-Lot, en voiture, lorsque le cheval prit le mors aux dents.",
      "Après une course vertigineuse, l'animal s'abattit et le véhicule fut précipité dans un fossé très profond. Le général tomba sur la tête et mourut, le crâne fracassé. M. Marraud, qui l'accompagnait, s'est fracturé un bras. Le cocher a reçu des contusions.",
      "Originaire du Périgord, le général de Boysson était âgé de soixante et un ans. Très aimé, il était commandeur de la Légion d'honneur et avait servi avec distinction durant la guerre franco-allemande."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "La rentrée des Chambres",
    "summary": "La session extraordinaire du Parlement s'ouvre ce jour. Si le Sénat prévoit des échanges calmes, la Chambre s'apprête à débattre vivement de la politique générale du cabinet suite aux nombreuses interpellations annoncées.",
    "paragraphs": [
      "La session extraordinaire du Parlement s'ouvrira cette après-midi, à deux heures. Au Sénat, le règlement de l'ordre du jour ne donnera lieu qu'à un simple échange d'observations.",
      "Il semble certain que pour la Chambre, l'établissement de l'ordre du jour sera plus laborieux. On prévoit que la plupart des trente-sept interpellations annoncées pendant les vacances seront jointes pour faire l'objet d'un débat unique sur la politique générale du cabinet.",
      "Un député du Loiret, M. Vazeille, a fait connaître son intention d'ouvrir ce débat général, affirmant qu'au sortir de la période de défense républicaine, il convenait qu'un large débat fût institué."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Informations Politiques",
    "title": "À l'Élysée et au Budget",
    "summary": "MM. Fallières et Deschanel ont été reçus à l'Élysée pour l'ouverture de la session. Le budget 1901, présenté par M. Guillain, affiche des recettes de plus de 3,5 milliards de francs avec un léger excédent.",
    "paragraphs": [
      "À l'occasion de l'ouverture de la session extraordinaire, MM. Fallières et Paul Deschanel ont été reçus par le Président de la République.",
      "Par ailleurs, en prévision de la discussion du budget de 1901, le rapport général de M. Guillain a été distribué. Le budget se traduit par 3 549 114 755 francs de recettes avec un excédent de 212 172 francs sur les dépenses."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Nécrologie",
    "title": "Mort d'un sénateur inamovible",
    "summary": "M. Dumon, figure du camp monarchiste et l'un des derniers sénateurs inamovibles, s'est éteint hier à Seailles à l'âge de 80 ans des suites d'une apoplexie.",
    "paragraphs": [
      "Un des derniers sénateurs inamovibles, M. Dumon, est mort hier à Seailles (Gers), des suites d'une attaque d'apoplexie foudroyante. Il était âgé de quatre-vingts ans.",
      "Entré dans la politique en 1871, il fut un des signataires de la proposition tendant au rétablissement de la monarchie et fut toujours résolument hostile à la politique républicaine."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Étranger",
    "title": "Le mouvement carliste",
    "summary": "Les autorités espagnoles ont intensifié la répression contre le mouvement carliste, procédant à l'arrestation de nombreux prêtres et chefs rebelles, tout en ordonnant la dissolution des cercles et journaux partisans.",
    "paragraphs": [
      "Parmi les individus arrêtés en Espagne, se trouvent de nombreux prêtres et quelques chefs carlistes. Tous les journaux et cercles carlistes ont été supprimés.",
      "Les bandes carlistes se dispersent dans les montagnes, mais on pense qu'elles reprendront la campagne au premier signal. Plusieurs arrestations ont eu lieu à la frontière française."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une roulotte en flammes",
    "summary": "Un tragique accident domestique est survenu à Bierre-lès-Semur : une roulotte de nomades a basculé, provoquant le renversement d'un poêle qui a causé la mort tragique de plusieurs enfants.",
    "paragraphs": [
      "Un déplorable accident s'est produit à Bierre-lès-Semur. Des nomades avaient installé leur roulotte sur des cales. Pendant l'absence des parents, les cales se sont rompues, la voiture a basculé et le poêle s'est renversé sur le lit des enfants.",
      "Les secours n'ont pu sauver les enfants qui, malgré les soins prodigués, ont succombé à leurs graves brûlures."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "La catastrophe de Metlaoui",
    "summary": "Le bilan définitif de la catastrophe minière de Metlaoui, en Tunisie, est désormais établi : les secours ont cessé les recherches, confirmant la mort de vingt-trois indigènes et neuf Italiens.",
    "paragraphs": [
      "On désespère maintenant de retirer des vivants de la mine de phosphates de Metlaoui, en Tunisie. Le total des morts est de vingt-trois indigènes et neuf Italiens."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Terrible explosion à Lyon",
    "summary": "Une violente explosion dans l'usine des tramways de la rue d'Alsace à Lyon a causé la mort d'un employé et fait plusieurs blessés graves. Les autorités diligentent une enquête sur la chaudière.",
    "paragraphs": [
      "Ce matin, une explosion s'est produite à l'usine centrale des tramways de la rue d'Alsace, à Lyon, tuant un employé et en blessant grièvement plusieurs autres. Le bâtiment a été partiellement détruit.",
      "Le maire de Lyon et le préfet du Rhône se sont rendus sur les lieux pour visiter les survivants. Une enquête a été ouverte pour déterminer les causes de l'accident, qui semble lié à un défaut de construction d'une chaudière."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "International",
    "title": "Les événements de Chine",
    "summary": "Le corps diplomatique a entériné les propositions françaises pour le règlement des affaires de Chine, imposant notamment l'interdiction des Boxers et la responsabilité pénale des fonctionnaires locaux.",
    "paragraphs": [
      "Les propositions françaises en vue du règlement des affaires de Chine ont été définitivement adoptées par les ministres étrangers. Elles seront transmises aux plénipotentiaires chinois sous peu.",
      "Le corps diplomatique a ajouté deux dispositions : l'obligation d'afficher un décret impérial interdisant les sociétés de Boxers et la responsabilisation des fonctionnaires pour la sécurité des étrangers."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Fruit Défendu - Roman parisien",
    "summary": "Rose-Manou rend visite à Jean Villaurier. Sous un masque de sérénité, elle exige qu'il renonce à sa sœur Régine pour l'épouser, afin de satisfaire aux impératifs sociaux de ses parents.",
    "paragraphs": [
      "Rose-Manou s'est rendue chez Jean Villaurier. La rencontre entre les deux anciens amants est marquée par un calme apparent de la jeune femme, alors qu'elle dissimule une sourde haine.",
      "Villaurier, désarçonné, ne comprend pas le but de sa visite. Rose lui annonce que son mariage avec sa sœur Régine est impossible selon ses parents et exige, avec un sourire inquiétant, qu'il l'épouse elle-même."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique étrangère",
    "title": "La situation en Chine",
    "summary": "La Chine s'efforce de stabiliser le Tchi-li par la répression des Boxers. Tandis que l'administration française exige réparation pour les missions, l'hostilité envers les étrangers persiste en certains points.",
    "paragraphs": [
      "Li-Hung-Chang continue de prendre des mesures pour la suppression des Boxers et la réorganisation de l'armée du Tchi-li.",
      "Tao-Mou, qui avait été nommé vice-roi de Canton, avait invoqué son mauvais état de santé pour refuser le poste, mais l'impératrice douairière lui a ordonné de s'y rendre immédiatement.",
      "On télégraphie de Canton que les rebelles du Tong-Kiang se seraient dirigés vers le haut du fleuve.",
      "Les paquebots naviguent librement maintenant entre Pak-Hoi et Fou-Tchéou.",
      "La rébellion paraît être sur le point de s'éteindre. Les réformistes reconnaissent que le soulèvement était prématuré et qu'ils ne possèdent pas d'armes en quantité suffisante.",
      "Les Français demandent l'exécution des meneurs des troubles de Chek-Lung, ainsi que le paiement d'une indemnité pour la destruction des missions.",
      "Des affiches posées à Chek-Lung invitent la population à massacrer les étrangers et les chrétiens dans le cas où les Français insisteraient pour obtenir les réparations demandées."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Nouvelles coloniales",
    "title": "Le courrier de l'Indo-Chine",
    "summary": "Le courrier du Tonkin signale des tensions frontalières, une embuscade meurtrière à Dong-Van et un tragique incendie à Hon-Gay ayant coûté la vie à cinq indigènes.",
    "paragraphs": [
      "Le courrier du Tonkin, apporté par le Polynésien, signale sur deux points différents de la colonie des faits assez sérieux.",
      "Des pillards ont assailli le village de Nam-Jam, dans la province de Phu-Lang-Thuong, et la gendarmerie de Dap-Cau a dû repousser les assaillants. Le gendarme Azaum a fait preuve d'un grand sang-froid.",
      "Plus grave encore a été l'engagement au nord de Dong-Van, où les miliciens de notre avant-garde sont tombés dans une embuscade, faisant plusieurs tués et blessés.",
      "Depuis les événements du Yunnan, l'excitation des esprits dans les régions frontières de Chine s'accentue contre les Anglais. Le père Vial, missionnaire, estime qu'il est nécessaire de reculer les frontières du Tonkin sur le plateau du Yunnan pour assurer notre tranquillité.",
      "Un violent incendie a éclaté à Hon-Gay, détruisant cent cinquante maisons. Il y a eu cinq indigènes brûlés vifs et une vingtaine de blessés.",
      "Les soldats du corps expéditionnaire de Chine embarqués à Takou signalent que les services d'intendance sont généralement défectueux."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Administration coloniale",
    "title": "Les congés administratifs coloniaux",
    "summary": "Un conflit juridique oppose un décret ministériel, autorisant la liberté de choix pour le lieu de congé, à un arrêté local malgache restreignant cette faculté pour les fonctionnaires réunionnais.",
    "paragraphs": [
      "Un décret du 1er mars, signé par M. Decrais, ministre des Colonies, reconnaissait le droit absolu pour les fonctionnaires créoles d'opter pour la jouissance de leur congé entre la France et leur colonie d'origine.",
      "Or, un arrêté local à Madagascar interdit aux fonctionnaires originaires de la Réunion de jouir de leur congé ailleurs que dans cette colonie, ce qui constitue une dérogation au décret ministériel."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits divers",
    "title": "Officier prévaricateur",
    "summary": "Le lieutenant du 58e de ligne, accusé du vol de la caisse régimentaire, a été arrêté à Tanger après avoir dissipé les fonds. Il a été transféré à Marseille pour répondre de ses actes.",
    "paragraphs": [
      "Le lieutenant M., du 58e régiment de ligne, en garnison à Avignon, qui s'était enfui il y a quelques semaines en emportant la caisse du régiment, est arrivé ce matin à Marseille.",
      "Il s'était constitué prisonnier à Tanger après avoir dissipé la somme dérobée, avant d'être dirigé sur Marseille."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Nouvelles du front sud-africain",
    "summary": "Sur le front sud-africain, les troupes britanniques remportent des succès tactiques, dont la prise d'un canon Krupp par les fusiliers australiens, tandis que le général French progresse malgré des pertes logistiques.",
    "paragraphs": [
      "Le Cap, 4 novembre : Les fusiliers australiens ont capturé un canon Krupp à Dewet. Les troupes montées ont repris une pièce d'artillerie aux Boers et le général Smith-Dorrien a surpris le campement ennemi de Witkop.",
      "Londres, 5 novembre : Le général French est arrivé à Springs, mais il a perdu 1 500 bœufs de trait depuis son départ de Machadodorp.",
      "Kroonstad, 3 novembre : On signale que Dewet se trouve à Francfort et que les Boers ont saisi 800 têtes de bétail dans les environs."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Actualité politique",
    "title": "La maladie du président Krüger",
    "summary": "Le président sud-africain Paul Krüger, en voyage à bord du navire Gelderland, est gravement souffrant. M. Fischer confirme que son épuisement pourrait mettre un terme définitif à ses activités politiques.",
    "paragraphs": [
      "Le président Krüger est sérieusement malade à bord du Gelderland. M. Fischer confirme cette nouvelle, précisant que le chef d'État souffre d'un profond épuisement qui le contraindra probablement à abandonner ses projets politiques."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits divers",
    "title": "Arrestation d'un escroc français",
    "summary": "La police judiciaire de Bruxelles a procédé à l'arrestation d'Antoine Conti. Cet ingénieur français était sous le coup d'une condamnation de deux ans de prison pour escroquerie et abus de confiance à Lyon.",
    "paragraphs": [
      "La police judiciaire de Bruxelles a appréhendé Antoine Conti, ingénieur français condamné à deux ans de prison pour escroquerie et abus de confiance à Lyon."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Santé publique",
    "title": "La peste à Brème",
    "summary": "Une alerte sanitaire a été déclenchée à Brème après le décès par la peste d'un marin ayant voyagé à bord du vapeur Marienburg, imposant des mesures de vigilance immédiates.",
    "paragraphs": [
      "L'office médical de Brème annonce qu'un marin, arrivé par le vapeur Marienburg, est décédé de la peste."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Conseil municipal de Paris",
    "title": "Séance du lundi 5 novembre",
    "summary": "Le conseil municipal de Paris manifeste son soutien à la République du Transvaal, débat sur la situation budgétaire et propose de faciliter l'accès des travailleurs à l'Exposition universelle.",
    "paragraphs": [
      "Le conseil municipal a adopté à l'unanimité la proposition de M. Galli exprimant sa sympathie envers la République du Transvaal et prévoyant une réception officielle pour le président Krüger.",
      "M. Deville a déposé un projet de délibération refusant la création d'impôts nouveaux, arguant qu'il n'y a aucun déficit réel à combler.",
      "Le conseil a émis le vœu de reporter le jour d'entrée gratuite à l'Exposition au dimanche 11 novembre afin de permettre à une plus large part de la classe laborieuse d'en profiter."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits divers",
    "title": "Un meurtre mystérieux à Brest",
    "summary": "Rentrant de Landerneau en état d'ivresse, deux cultivateurs, Leroux et Uguen, sont arrivés à Lesneven. Uguen était décédé, portant des traces de coups. Leroux a été arrêté par la gendarmerie pour enquête.",
    "paragraphs": [
      "Deux cultivateurs, Leroux et Uguen, rentrant de Landerneau en état d'ivresse, sont arrivés à Lesneven avec Uguen mort, portant des traces de coups. Leroux a été arrêté par la gendarmerie pour enquête."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits divers",
    "title": "Arrestation d'une bande de malfaiteurs",
    "summary": "Une bande de six individus spécialisée dans les agressions nocturnes a été appréhendée rue Claude-Decaen. Les malfaiteurs ont avoué avoir attaqué les époux Wettmann ainsi que le sieur Lenain.",
    "paragraphs": [
      "Une bande de six individus, spécialisée dans les agressions nocturnes, a été arrêtée rue Claude-Decaen. Ils ont avoué avoir attaqué les époux Wettmann et le sieur Lenain."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits divers",
    "title": "Un mort horrible à la gare de Grenelle",
    "summary": "Un homme nommé François-Marie P. est décédé tragiquement, broyé par un train à la gare de Grenelle, pour avoir tenté de traverser les voies malgré les avertissements du facteur de garde.",
    "paragraphs": [
      "Un homme nommé François-Marie P. a été tragiquement broyé par un train après avoir tenté de traverser les voies ferrées de la gare de Grenelle, malgré les avertissements du facteur de garde."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un cadavre dans un panier",
    "summary": "Le corps d'un nourrisson a été retrouvé quai de Valmy. L'enquête, menée par M. Cochefert, suggère un drame de la misère suivi du suicide probable de la mère dans le canal.",
    "paragraphs": [
      "Nous annoncions hier matin que M. Guilhen, commissaire de police, venait d'envoyer à la morgue le cadavre d'un enfant de deux mois environ, trouvé dans un panier dissimulé sous une bâche, quai de Valmy.",
      "L'enquête sommaire faite par M. Cochefert, chef de la sûreté, sans éclaircir complètement le mystère, fait pressentir non point un vulgaire infanticide, mais bien un drame navrant de la misère.",
      "M. Cochefert a recueilli la déposition de deux mariniers dont les chalands se trouvent en ce moment amarrés quai de Valmy, à proximité de l'endroit où fut découvert le cadavre. Or, ces deux personnes ont déclaré que, pendant la nuit qui a précédé la lugubre trouvaille, ils avaient été réveillés par la chute d'un corps dans le canal.",
      "Il est permis de supposer que la mère, affolée par la misère et voulant soustraire son enfant au sort qui l'attendait, l'a tué et s'est ensuite suicidée. L'enquête qui se poursuit permettra peut-être de reconstituer le drame."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Désespoir d'une mère",
    "summary": "Ne pouvant supporter le déshonneur lié à l'incarcération de son fils Louis à la prison de la Santé, Mme Courty s'est donné la mort par asphyxie au charbon de bois.",
    "paragraphs": [
      "Il y a quelque temps, un jeune homme âgé d'une vingtaine d'années, Louis Courty, dont la mère est domiciliée rue du Ruisseau, était arrêté pour vol et conduit à la prison de la Santé.",
      "Depuis l'arrestation de son fils, Mme Courty, âgée de quarante-sept ans, donnait les marques du plus grand chagrin, et, à diverses reprises, elle déclara à ses voisins que, ne pouvant supporter un tel déshonneur, elle se donnerait la mort.",
      "La pauvre femme a mis son projet à exécution. Hier matin, un parent a frappé à sa porte sans résultat. M. Carpin, commissaire de police, a fait ouvrir la porte, et on a trouvé Mme Courty étendue sur son lit, ne donnant plus signe de vie. Un réchaud avec des résidus de charbon de bois indiquait le genre de mort choisi."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Justice",
    "title": "L'arrestation d'un imprimeur",
    "summary": "Inculpé de banqueroute frauduleuse et d'escroqueries, l'imprimeur Émile Camis pourrait obtenir sa remise en liberté provisoire suite à la décision de la partie civile de ne plus s'y opposer.",
    "paragraphs": [
      "Nous avons annoncé, il y a huit jours, l'arrestation de M. Émile Camis, imprimeur, quai de Jemmapes, inculpé de banqueroute frauduleuse et d'escroqueries.",
      "M. de Sal, avocat, avait demandé la mise en liberté provisoire de son client. La partie civile, qui s'était d'abord opposée à cette mesure, est revenue sur sa décision. La chambre des mises en accusation se prononcera aujourd'hui.",
      "Il est probable que M. Camis pourra quitter la prison de la Santé dans l'après-midi, sous réserve de se présenter à toute réquisition devant le magistrat instructeur."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un cheval emballé",
    "summary": "Un cavalier du train des équipages, désarçonné lors d'un accident rue Herr, a été hospitalisé, tandis qu'une passante a été blessée par le cheval en fuite.",
    "paragraphs": [
      "Hier matin, un soldat du 1er escadron du train des équipages, Georges Cordier, passait à cheval rue Herr lorsque sa monture prit peur et s'emballa. Cordier fut désarçonné et tomba la tête sur le trottoir. Il a été transporté à l'hôpital Boucicaut.",
      "Le cheval, poursuivant sa course, a renversé Mlle Berthe Blaize, journalière, demeurant 22, rue La Fanal, qui a été pansée dans une pharmacie."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie boulevard de la Chapelle",
    "summary": "Un incendie s'est déclaré hier soir dans une baraque foraine située boulevard de la Chapelle, entraînant la destruction totale de l'installation de M. Vaixerlaire.",
    "paragraphs": [
      "Le feu a pris hier soir, à huit heures et demie, dans une baraque foraine installée à la fête qui se tient actuellement boulevard de la Chapelle. L'incendie a détruit complètement la baraque qui appartenait à M. Vaixerlaire, demeurant rue Belliard."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Social",
    "title": "Les Prévoyants de l'Avenir",
    "summary": "Le tribunal des référés examine aujourd'hui l'action de M. Boutteville contre les Prévoyants de l'Avenir, alors que le comité d'études révisionnistes soutient le ministre dans cette affaire judiciaire.",
    "paragraphs": [
      "C'est aujourd'hui que vient devant le tribunal des référés, présidé par M. Baudouin, l'action introduite par M. Boutteville contre M. Chatelus et le comité central des Prévoyants de l'Avenir. M. Boutteville demande la nomination d'un séquestre.",
      "Les membres du comité d'études révisionnistes ont tenu réunion hier soir et ont voté une motion félicitant le ministre de l'Intérieur d'avoir imposé la transformation de la société et déclarant se solidariser avec leur président, M. Boutteville, dans l'action judiciaire introduite."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Faits divers autour de Paris",
    "summary": "Une série d'accidents et d'incidents tragiques affectant les communes de la banlieue parisienne : arrestations pour pillage, rixes armées, accidents de la route et noyades.",
    "paragraphs": [
      "Boulogne-sur-Seine : L'enquête sur le pillage d'une villa a amené l'arrestation de quatre complices âgés de seize à dix-neuf ans.",
      "Puteaux : Une rixe entre jeunes gens a éclaté rue Parmentier. Un ouvrier peintre, Victor Rousseau, a reçu une balle de revolver dans le dos et son état est grave.",
      "Levallois-Perret : Un enfant de sept ans, Jules Gautier, a eu la cuisse et le bras broyés après avoir chuté sous les roues d'une voiture de noce.",
      "Clichy : Maximilien Ferrari, âgé de huit ans, est mort noyé dans la Seine malgré son repêchage par un marinier.",
      "Saint-Ouen : Jean Gauthier, ouvrier potier, est mort horriblement mutilé après être tombé sous un tramway boulevard des Batignolles.",
      "Saint-Denis : Un balayeur, Jean Weber, est mort après une chute d'un tombereau.",
      "Aubervilliers : Le cadavre d'un individu âgé de quarante ans environ a été repêché dans le canal de Saint-Denis."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Chemins de Fer",
    "title": "Trains spéciaux de la Compagnie de l'Est",
    "summary": "La Compagnie de l'Est programme, pour le 11 novembre, des trains spéciaux à prix réduits au départ de plusieurs villes vers Paris, afin de faciliter la visite de l'Exposition universelle.",
    "paragraphs": [
      "La compagnie des chemins de fer de l'Est mettra en marche, le dimanche 11 novembre, au départ de Reims, Troyes et Châlons-sur-Marne à destination de Paris, des trains spéciaux à prix exceptionnellement réduits, composés de voitures de 3e classe, permettant de passer une journée à l'Exposition.",
      "Ces trains prendront des voyageurs aux stations désignées ci-après : à Reims, Fismes et Fère-en-Tardenois ; à Troyes, Romilly et Nogent-sur-Seine ; à Châlons-sur-Marne, Épernay et Dormans. Le prix des billets d'aller et retour est fixé à 4 francs au départ de toutes les stations précitées.",
      "La compagnie de l'Est mettra également en marche, le samedi 10 novembre courant, trois trains d'excursion à destination de Paris : le premier desservant Avricourt, Nancy, Bar-le-Duc, Châlons-sur-Marne, etc. ; le deuxième desservant Longwy, Sedan, Givet, Reims ; et le troisième desservant Petit-Croix, Belfort, Vesoul, Chaumont, Troyes. Il convient de consulter les affiches pour les conditions détaillées du voyage."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Hygiène et Médecine",
    "title": "L'Institut Dermatologique de Paris",
    "summary": "Présentation de l'Institut Dermatologique de Paris, établissement spécialisé dans le traitement rationnel des affections cutanées par des méthodes naturelles, visant à corriger le tempérament du patient.",
    "paragraphs": [
      "L'Institut Dermatologique est un établissement médical spécialement consacré au traitement des maladies de la peau et du cuir chevelu : acnés, cancers, chancres, chute de cheveux, couperose, dartres, démangeaisons, eczémas, herpès, gale, impétigo, lupus, pelade, prurigo, psoriasis, rougeurs et taches de la peau, teignes, tumeurs, ulcères, vices du sang, affections spéciales et contagieuses, etc.",
      "C'est un sanatorium français dont le succès est justifié parce que, promettant le soulagement, il donne la guérison. Le docteur qui le dirige est un véritable médecin spécialiste appliquant une méthode rationnelle destinée non seulement à guérir la peau, mais encore à modifier le tempérament (rhumatismal, goutteux, diabétique, cancéreux, anémique, bilieux, sanguin, nerveux, lymphatique, etc.), cause première de tous les maux.",
      "Voilà la vraie médecine positive et rationnelle ayant comme conséquence un soulagement immédiat et une guérison définitive ensuite, sans drogues plus ou moins malsaines, sans opérations inutiles, mais par les moyens les plus simples, comme les plantes et les forces naturelles (chaleur, lumière, électricité, etc.)."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Marchés",
    "title": "Marché aux bestiaux de La Villette",
    "summary": "Bilan du marché aux bestiaux de La Villette du lundi 5 novembre : les cours sont orientés à la hausse pour les bœufs et les veaux, tandis que le marché des porcs marque un léger recul.",
    "paragraphs": [
      "Marché du lundi 5 novembre. Amenés vendredi. Viande nette, poids vif : Bœufs, Vaches, Taureaux, Veaux, Moutons, Porcs.",
      "Bœufs : Vente meilleure et hausse de 15 à 20 fr. par tête. On cote les normands de 58 à 70 c. ; les bœufs blancs de 60 à 72 c. ; choix Brie de 55 à 66 c. ; les vendéens de 52 à 64 c. ; les limousins et bourbonnais de 70 à 80 c. le demi-kilo net.",
      "Veaux : Vente meilleure et hausse de 10 c. par demi-kilo sur les premières qualités. On cote les choix de Brie, de Beauce et du Gâtinais de 0,95 à 1 fr. ; les champenois de 0,80 à 0,93 ; les autres provenances de 0,75 à 0,90 le demi-kilo net.",
      "Moutons : Vente moyenne et prix soutenus. On cote les petits moutons du Centre de 0,92 à 0,98 ; les métis de Brie de 0,88 à 0,93 ; les métis beaucerons, champenois, bourguignons de 0,80 à 0,88 le demi-kilo net.",
      "Porcs : Vente mauvaise et baisse de 1 à 2 c. par demi-kilo vif. On cote les bons porcs de l'Ouest de 0,44 à 0,48 et ceux du Centre de 0,42 à 0,46 le kilo vif."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Feuilleton",
    "title": "L'épreuve suprême",
    "summary": "Henri Lipray, en proie à une profonde tourmente intérieure, décide d'agir pour rendre sa liberté à la jeune veuve, mademoiselle Jeannine, avant de quitter son cabinet.",
    "paragraphs": [
      "Une heure plus tard, Henri Lipray était encore à la même place, immobile, le front dans les mains. Le silence, autour de lui, pesait, troublé seulement par la rumeur vague qui montait du boulevard.",
      "Tout à coup, il releva la tête et son regard aussitôt se porta sur le mur où le portrait de sa mère, dans un cadre toujours voilé de crêpe, était fixé. C'était à elle qu'une fois encore il allait demander de le consoler.",
      "Il fit un pas, s'appuya sur sa table. Et brusquement, avec un gémissement étouffé, il s'affaissa sur le fauteuil.",
      "Il ne restait qu'une tâche à mener à bien : rendre sa liberté à mademoiselle Jeannine. Il quitta son cabinet, prit son pardessus et son chapeau, et s'éloigna rapidement en direction de l'appartement qu'il avait loué pour la jeune veuve."
    ]
  }
];
