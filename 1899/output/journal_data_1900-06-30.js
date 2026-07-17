// Date: 1900-06-30
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-06-30 (Version Restaurée, 38 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "L'armée et la République",
    "summary": "Face aux attaques réactionnaires, la République réaffirme son soutien indéfectible à l'armée, pilier de la nation, et souligne les investissements militaires consentis pour assurer la défense et la force du pays.",
    "paragraphs": [
      "Depuis un quart de siècle, les réactionnaires n'ont pas cessé de faire à la République une guerre tantôt ouverte, tantôt sourde, mais invariable.",
      "Actuellement, ils s'efforcent d'opposer l'armée au gouvernement légal du pays, en reparlant sans cesse de la funeste affaire qui a causé des divisions si profondes.",
      "La République aime son armée, qui est la jeunesse de la nation. Elle se confie à elle dans la paix comme dans la guerre.",
      "La République ne recula devant aucun sacrifice pour rendre à la patrie la plénitude de ses forces militaires. La comparaison des millions consacrés par la France à son armée et à sa marine avant 1870 et maintenant est plus éloquente que tous les raisonnements.",
      "Après cette lecture, tout homme de bonne foi reconnaîtra que la République a eu sans cesse un immense et immuable souci de ses armées de terre et de mer."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Main Gauche - Grand Roman Inédit",
    "summary": "Tensions conjugales et mystères judiciaires s'entremêlent : après une scène dramatique, le juge d'instruction Vandenesse ordonne l'arrestation immédiate d'un suspect dans une affaire criminelle en cours.",
    "paragraphs": [
      "La scène a assez duré, Jeanne, cela finirait mal, vois-tu. S'il y a une scène, si elle dure trop, c'est toi qui l'as voulue.",
      "Il se dirigea vers une autre porte donnant sur le grand salon. « Oh ! tu peux t'en aller par ici », fit sa femme.",
      "Il passa, longea la galerie, tourna dans le couloir qui menait à leur appartement particulier. Pour la première fois ce soir-là, Marcel n'y entra pas.",
      "Il entendit le verrou glisser dans sa gaine d'acier. Et il n'osa point, maintenant ni plus tard, venir frapper, demander grâce.",
      "Le juge d'instruction Vandenesse releva le front, glissa le médaillon dans son tiroir, et dit brièvement : « Que l'on m'amène cet homme. »"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "À l'Exposition",
    "summary": "L'Exposition Universelle confirme son succès populaire croissant. Entre visites princières et banquets diplomatiques au Trocadéro, l'affluence témoigne d'un intérêt toujours soutenu pour l'événement.",
    "paragraphs": [
      "La température délicieuse d'hier matin avait ramené à l'Exposition nombre de ses fidèles. Les visiteurs se font d'ailleurs de plus en plus nombreux.",
      "Le prince royal de Grèce, accompagné d'un officier d'ordonnance, a visité hier matin la plus grande partie des palais du Champ-de-Mars.",
      "Le président et les membres du bureau du comité général de l'exposition des colonies et protectorats ont offert, hier soir, dans le palais indo-chinois du Trocadéro, un banquet en l'honneur de M. Charles Roux.",
      "Le chiffre total des entrées a été, jeudi, de 117.842, dont 60.597 avec tickets. Le cours officiel des tickets a de nouveau fléchi, hier, à 50 centimes."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des ministres",
    "summary": "Sous la présidence de M. Loubet, le Conseil des ministres a abordé la situation en Chine, la gestion budgétaire des crédits supplémentaires et une réforme structurelle des tribunaux de la Seine.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin, à l'Élysée, sous la présidence de M. Loubet. Ils ont tout d'abord pris connaissance des nouvelles de Chine.",
      "Puis le ministre des Finances a entretenu le conseil des diverses questions qui se rattachent à la discussion des crédits supplémentaires.",
      "Le garde des Sceaux a fait signer par le Président de la République un projet de loi ayant pour but de sectionner les chambres correctionnelles du tribunal de la Seine."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique Internationale",
    "title": "La situation en Italie",
    "summary": "L'arrivée au pouvoir du cabinet Saracco et l'élection paisible de M. Villa à la présidence de la Chambre augurent une période de détente politique et de modération au sein du Parlement italien.",
    "paragraphs": [
      "L'avènement du cabinet Saracco semble avoir provoqué une détente dans la Péninsule. L'élection du nouveau président de la Chambre, M. Villa, s'est produite sans incident.",
      "Ce qui assurera au Parlement italien des jours un peu plus calmes, c'est l'attitude conciliante du gouvernement. M. Saracco s'est montré plus modéré."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une mort mystérieuse",
    "summary": "Le parquet de Rambouillet poursuit son enquête sur la mort suspecte du garde-chasse Rougeolle. Bien que l'autopsie ne soit pas conclusive, le crime ne fait aucun doute. L'inhumation a eu lieu au Val-Saint-Germain.",
    "paragraphs": [
      "Le parquet de Rambouillet a poursuivi son enquête au sujet de la découverte du cadavre du garde-chasse Rougeolle.",
      "Quoique l'autopsie n'ait pu déterminer d'une façon formelle les conditions de la mort, il est incontestable que le malheureux a été la victime d'un crime accompli dans des circonstances qui resteront toujours mystérieuses.",
      "Le corps de l'infortuné garde a été transporté hier matin au Val-Saint-Germain et l'inhumation a eu lieu dans la journée."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Violent incendie",
    "summary": "Un incendie dévastateur a ravagé ce matin la toiture du noviciat des Frères à Montferrand. Si le bâtiment subit des dégâts matériels très importants, aucun blessé n'est heureusement à déplorer parmi les occupants.",
    "paragraphs": [
      "Un violent incendie a éclaté ce matin, un peu avant onze heures, au noviciat des Frères, à Montferrand. La toiture entière était en proie aux flammes.",
      "On ne signale aucun accident de personnes, mais les dégâts matériels seront considérables."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Éboulement dans une mine",
    "summary": "Un tragique éboulement dans les mines de fer de Vinède a causé la mort de deux ouvriers, Jean Capistelle et Bouzy. Un troisième mineur, nommé Picole, a été extrait des décombres avec diverses contusions.",
    "paragraphs": [
      "Un éboulement s'est produit hier aux mines de fer de Vinède. L'un des ouvriers, nommé Picole, a été retiré avec des contusions.",
      "Un autre, nommé Jean Capistelle, a été écrasé par un bloc de minerai au moment où l'on allait le délivrer. Le troisième, nommé Bouzy, est mort deux heures après son sauvetage."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Social",
    "title": "Les sapeurs-pompiers de Paris",
    "summary": "Le gouvernement étudie une réorganisation du régiment des sapeurs-pompiers de Paris. Face à la technicité croissante de leurs missions, la création d'un cadre complémentaire de capitaines est envisagée par décret.",
    "paragraphs": [
      "Nous avons déjà entretenu les lecteurs du Petit Parisien des divers projets qui sont à l'étude concernant le recrutement et l'organisation du régiment des sapeurs-pompiers de Paris.",
      "Le fond de la question est que, par la force des choses, ces officiers sont tenus d'acquérir des connaissances spéciales qui sont du domaine de l'ingénieur bien plutôt que de celui du militaire.",
      "Le ministre de la Guerre soumettrait à la signature du Président de la République un décret portant création d'un cadre complémentaire de capitaines."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Politique Internationale",
    "title": "Les événements de Chine",
    "summary": "La situation en Chine s'apaise pour les ressortissants étrangers. Le gouvernement impérial a ordonné la répression des Boxers, tandis que la sécurité de M. François est assurée par le vice-roi du Yunnan.",
    "paragraphs": [
      "Les derniers renseignements ont modifié favorablement pour les étrangers la situation créée dans la vallée du Pei-Ho par l'insurrection des Boxers.",
      "Au ministère des Affaires étrangères, le ministre a donné connaissance à ses collègues du télégramme par lequel le vice-roi du Yunnan déclare qu'il a pris toutes les mesures nécessaires pour assurer la sécurité de M. François et de ses compagnons.",
      "On annonce de source chinoise qu'un édit du gouvernement chinois ordonne la suppression des Boxers."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre en Chine",
    "title": "La situation à Tien-Tsin",
    "summary": "En route vers Tien-Tsin, la colonne de l'amiral Seymour a souffert de privations extrêmes avant d'être secourue par les forces alliées sous le commandement du colonel Dorward.",
    "paragraphs": [
      "Le reste des troupes s'est rallié à la colonne de l'amiral Seymour, qui poursuivait sa marche vers Tien-Tsin.",
      "L'amiral Seymour n'a reçu aucune nouvelle de la colonne partie de Tien-Tsin quatre jours après lui.",
      "Le correspondant du Daily Express à Ché-Fou rapporte que les troupes de Seymour ont cruellement souffert de la disette, manquant cruellement de vivres et surtout d'eau potable.",
      "D'après ce même correspondant, la colonne Seymour a été secourue par une force coalisée composée de fusiliers gallois, de Sikhs, d'Américains, d'infanterie japonaise et de marins allemands, le tout placé sous le commandement du colonel anglais Dorward."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre en Chine",
    "title": "Pertes lors du déblocage de Tien-Tsin",
    "summary": "Le bilan des opérations de déblocage à Tien-Tsin est lourd : les contingents russes et allemands déplorent de nombreuses victimes, tandis que les pertes au sein des troupes assiégées restent inconnues.",
    "paragraphs": [
      "Les journaux publient une dépêche en provenance de Takou annonçant que les troupes russes ont essuyé la perte de dix tués et sept blessés lors de l'opération de déblocage de Tien-Tsin.",
      "Les forces allemandes comptent quinze tués, dont un officier, et onze blessés ; les contingents américains et anglais ont également enregistré des pertes significatives dans leurs rangs.",
      "Le nombre précis des pertes subies par les troupes assiégées à l'intérieur de Tien-Tsin demeure, à cette heure, inconnu."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre en Chine",
    "title": "Mission méthodiste à Tien-Tsin",
    "summary": "Un télégramme confirme la destruction par le feu de la mission méthodiste de Tien-Tsin, un sinistre ayant entraîné la mort de 160 personnes, vraisemblablement des indigènes.",
    "paragraphs": [
      "Suivant un télégramme adressé aux missions méthodistes, l'établissement de Tien-Tsin a été entièrement consumé par les flammes ; le bilan s'élève à 160 morts. Les missionnaires supposent qu'il s'agit essentiellement de 160 indigènes."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre en Chine",
    "title": "Occupation du Fort de l'Est",
    "summary": "Le fort de l'Est, situé sur la rivière Peï-Tang, est tombé aux mains des flottes alliées avec l'accord des autorités chinoises, tandis que le fort occidental demeure sous contrôle chinois.",
    "paragraphs": [
      "On mande de Shanghaï au Daily Mail que le fort de l'Est, situé sur la rivière Peï-Tang, a été occupé par les marins des flottes alliées.",
      "Le fort occidental, quant à lui, demeure toujours aux mains des troupes chinoises.",
      "Il est à noter que l'occupation du fort de l'Est s'est effectuée avec le plein assentiment des autorités chinoises locales."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique Internationale",
    "title": "L'accord des Puissances en Chine",
    "summary": "Un accord semble définitivement conclu entre les puissances étrangères pour l'occupation de la Chine, garantissant le statu quo commercial et l'établissement d'une armée internationale.",
    "paragraphs": [
      "L'accord entre les puissances opérant en Chine semble désormais définitivement acquis.",
      "Ce traité se fonde sur le maintien du statu quo concernant les sphères d'influence et les arrangements commerciaux, tout en confirmant les garanties exigées de la part de la Chine.",
      "L'armée internationale d'occupation sera composée de contingents russes, japonais, anglais, français et allemands."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique Militaire",
    "title": "Le Corps expéditionnaire français en Chine",
    "summary": "Le corps expéditionnaire français, composé d'infanterie, d'artillerie et du génie, se structure pour ses opérations en Chine. L'amiral Courrejolles assure le ravitaillement face aux rigueurs de l'hiver local.",
    "paragraphs": [
      "Le corps expéditionnaire français comprendra le 16e et le 17e régiment d'infanterie de marche, un groupe de quatre batteries d'artillerie de marine, une réserve de munitions, ainsi qu'une section du génie, une section de télégraphistes et une section d'infirmiers.",
      "La division navale, placée sous les ordres de l'amiral Courrejolles, assurera la base d'opérations et le ravitaillement nécessaire.",
      "Des dispositions particulières sont prises pour assurer l'habillement des troupes en vue des rigueurs de l'hiver dans le nord de la Chine."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Situation des troupes boers",
    "summary": "Face aux manœuvres d'encerclement des généraux britanniques French et Hamilton, le général Botha maintient sa résistance malgré les tentatives de députations boers pour obtenir la reddition du président Krüger.",
    "paragraphs": [
      "Deux députations boers ont pris la route de Machadodorp afin de tenter de décider le président Krüger à déposer les armes.",
      "Cependant, le général Botha refuse catégoriquement de se rendre avec ses hommes et ses canons.",
      "De leur côté, les troupes britanniques, menées par les généraux French et Ian Hamilton, s'efforcent activement de cerner les positions boers."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un général blessé",
    "summary": "Le général Henouard a été victime d'une chute accidentelle dans les escaliers de l'intendance à Lyon. Il souffre d'une fracture du péroné et est actuellement sous soins médicaux.",
    "paragraphs": [
      "En descendant l'escalier de l'intendance à la caserne du Château, à Lyon, le général Henouard a fait une mauvaise chute, se fracturant le péroné de la jambe gauche.",
      "Il est actuellement pris en charge et soigné par les médecins du service de santé."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Le sous-marin Narval",
    "summary": "Le sous-marin Narval a officiellement validé ses essais à Cherbourg. Il est désormais entré en armement sous le commandement du lieutenant de vaisseau Goissex.",
    "paragraphs": [
      "Le sous-marin Narval a terminé ses essais officiels à Cherbourg et est entré en armement sous le commandement du lieutenant de vaisseau Goissex."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Chambre des Députés",
    "title": "Discussion sur l'augmentation de la flotte",
    "summary": "La Chambre des députés débat du projet de loi sur l'augmentation de la flotte. Le ministre de la Marine, M. de Lanessan, défend un programme équilibré face aux demandes de M. Aimond et aux contraintes de M. Caillaux.",
    "paragraphs": [
      "La Chambre a consacré sa séance à la discussion du projet de loi portant sur l'augmentation de la flotte nationale.",
      "M. Aimond a proposé un contre-projet visant à accroître le nombre de cuirassés, une mesure combattue par le ministre de la Marine, M. de Lanessan, qui privilégie un programme plus équilibré.",
      "M. Caillaux, ministre des Finances, a défendu le plan financier du gouvernement, le qualifiant de maximum supportable pour le budget de l'État."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Sénat",
    "title": "Séance du vendredi 29 juin",
    "summary": "Le Sénat adopte une loi sur les décorations des troupes de réserve et autorise les agents diplomatiques à célébrer les mariages entre Français et étrangers hors des frontières.",
    "paragraphs": [
      "Le Sénat a adopté une proposition de loi tendant à augmenter le nombre des décorations attribuées aux troupes de réserve.",
      "Le Sénat a également adopté un projet de loi permettant aux agents diplomatiques et aux consuls de célébrer des mariages entre Français et étrangers dans les pays étrangers."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Conseil Municipal de Paris",
    "title": "Compte-rendu de séance",
    "summary": "Débat au Conseil municipal concernant la réception officielle de la mission Marchand à l'Hôtel de Ville et les modalités d'accès gratuit à l'Exposition universelle pour les plus démunis.",
    "paragraphs": [
      "Le préfet de la Seine a convoqué le conseil municipal en session extraordinaire.",
      "Une vive discussion s'est engagée concernant la réception de la mission Marchand à l'Hôtel de Ville, le bureau ayant déclaré ne pas pouvoir donner suite à la décision prise par le conseil.",
      "Le conseil a également délibéré sur les modalités d'application du vote concernant l'octroi d'entrées gratuites à l'Exposition universelle en faveur des indigents."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits Divers",
    "title": "Tentative d'assassinat rue de Charonne",
    "summary": "Un homme a fait irruption dans un logement de la rue de Charonne pour tirer un coup de revolver sur la veuve Marie Lustin. La victime a été transportée d'urgence à l'hôpital.",
    "paragraphs": [
      "Un individu a fait irruption dans un logement de la rue de Charonne et a tiré un coup de revolver sur la veuve Marie Lustin.",
      "La victime, promptement secourue, a été conduite à l'hôpital ; ses jours ne sont heureusement pas en danger."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Faits Divers",
    "title": "Manifestation contre un placeur",
    "summary": "Une vive altercation rue Saint-Denis entre un placeur et un client mécontent a provoqué un attroupement sur la voie publique, nécessitant l'intervention immédiate des forces de police.",
    "paragraphs": [
      "Une manifestation s'est produite rue Saint-Denis devant un bureau de placement, à la suite d'une querelle violente survenue entre le placeur et un client mécontent.",
      "La foule, s'animant contre le placier, a nécessité l'intervention de la police pour rétablir le calme et disperser les manifestants."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrestation d'un déserteur voleur",
    "summary": "La police a appréhendé Jean Coulmont, un déserteur qui s'était dissimulé dans un immeuble de la rue Servan pour dévaliser méthodiquement les caves des locataires.",
    "paragraphs": [
      "Un déserteur nommé Jean Coulmont, qui s'était dissimulé dans un immeuble de la rue Servan, a été arrêté par les autorités.",
      "L'individu profitait de sa cachette pour commettre de nombreux vols dans les caves des locataires de l'immeuble."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vols en banlieue",
    "summary": "Une vague de cambriolages frappe Sceaux, visant commerçants et particuliers. Une récidiviste, Clémentine Gautier, a été interpellée, tandis que la police accentue sa surveillance contre les malfaiteurs.",
    "paragraphs": [
      "Dans la région de Sceaux, plusieurs vols ont été commis récemment. M. Buchoite, épicier rue Boursicaut, et Mme Chillion, propriétaire, ont été victimes de vols de bijoux. Quelques heures après, des cambrioleurs ont dévalisé le domicile de M. Anatole Coutereau, rue d'Orléans, emportant notamment des tuyaux de plomb.",
      "La nommée Clémentine Gautier a été arrêtée après avoir dérobé une grande quantité de marchandises chez une épicière. Elle a avoué être l'auteur de plusieurs vols et a été écrouée au dépôt. Le commissaire de police a rappelé à ses agents qu'une prime de 25 francs est allouée pour chaque cambrioleur arrêté."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accidents à Clichy et Asnières",
    "summary": "La banlieue parisienne est endeuillée par deux accidents graves : une chute mortelle d'un ouvrier ferblantier à Clichy et une violente collision entre un motocycle et une voiture à Asnières.",
    "paragraphs": [
      "Clichy : Un ouvrier ferblantier, Gustave Layet, âgé de vingt-sept ans, est tombé hier matin du quatrième étage d'un immeuble du boulevard Victor-Hugo. Horriblement blessé, il a été transporté à l'hôpital Beaujon dans un état désespéré.",
      "Asnières : Hier après-midi, un motocycle monté par M. Louis Servat a été renversé par une voiture de laitier avenue d'Argenteuil. Le conducteur de la voiture, Adolphe Lin, a été grièvement blessé au crâne, tandis que M. Servat a été sérieusement atteint à la poitrine et à la tête."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Agression à Bezons",
    "summary": "Le marchand de volailles Jules Gesnouin a été violemment agressé par trois individus sur le pont de Bezons. Les malfaiteurs lui ont dérobé son cheval avant de prendre la fuite vers la capitale.",
    "paragraphs": [
      "La nuit dernière, M. Jules Gesnouin, marchand de volailles, a été attaqué sur le pont de Bezons par trois individus alors qu'il revenait de Paris. Après l'avoir jeté à terre et roué de coups, les malfaiteurs se sont enfuis avec son cheval en direction de la capitale. La victime a pu regagner son domicile après avoir reçu les soins nécessaires."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Tentative de suicide à Saint-Denis",
    "summary": "Mme Eugénie Roquet a tenté de mettre fin à ses jours en se jetant dans le canal de Saint-Denis. Secourue à temps par un charretier, elle a pu être réanimée grâce aux soins prodigués.",
    "paragraphs": [
      "Dans la matinée d'hier, une jeune femme, Mme Eugénie Roquet, s'est jetée dans le canal de Saint-Denis. Un charretier, M. Delournay, a réussi à la secourir à temps. La malheureuse a été rappelée à la vie grâce à des soins énergiques."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Incendie à Montreuil-sous-Bois",
    "summary": "La municipalité de Montreuil et des sociétés de secours organisent l'aide pour les sapeurs-pompiers blessés lors du sinistre de la teinturerie Jouault. L'état de santé d'un des blessés reste préoccupant.",
    "paragraphs": [
      "Le maire de Montreuil-sous-Bois a reçu des fonds de la société des Victimes du devoir pour les sapeurs-pompiers blessés dans l'incendie de la teinturerie Jouault. Le conseil municipal a également voté une aide de 2 000 francs. L'état des blessés s'améliore, à l'exception de M. Ménard, dont les brûlures à la figure inspirent de vives inquiétudes."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident à Charenton",
    "summary": "M. Émile Ruillé a été renversé hier matin par un motocycle sur le pont de Charenton. Projeté sur le trottoir, il souffre d'une grave blessure à la base du crâne.",
    "paragraphs": [
      "M. Émile Ruillé a été renversé hier matin par un motocycle sur le pont de Charenton. Projeté sur le trottoir, il a subi une grave blessure à la base du crâne et a été transporté d'urgence à son domicile."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Tentative criminelle à Bagneux",
    "summary": "Un attentat ferroviaire a été évité de justesse à Bagneux. Un surveillant a découvert des pierres obstruant la voie, permettant d'arrêter un train à temps. Une enquête est ouverte.",
    "paragraphs": [
      "La nuit dernière, un surveillant a découvert des pierres solidement entassées entre les rails du chemin de fer de Sceaux-Limours, sur le territoire de Bagneux. Il a pu les enlever à temps avant l'arrivée d'un train, évitant ainsi un terrible accident. Le commissaire Basset a immédiatement ouvert une enquête."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Actualité Internationale",
    "title": "Les événements de Chine et la guerre au Transvaal",
    "summary": "Le Foreign Office communique sur la situation à Tien-Tsin, tandis qu'au Transvaal, les combats se poursuivent entre les forces britanniques du général Brabant et les Boërs dans la région de Senekal.",
    "paragraphs": [
      "Londres, 30 juin : Une note communiquée aux journaux par le Foreign Office fait état de communications récentes concernant le gouverneur des douanes à Tien-Tsin.",
      "La guerre au Transvaal : Dans la région de Senekal, des combats acharnés ont opposé les forces du général Brabant aux Boërs. Malgré le déploiement de l'artillerie anglaise, les Boërs sont parvenus à se replier, en dépit des manœuvres britanniques destinées à entraver leurs secours."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Social",
    "title": "Revendications du personnel de l'Opéra",
    "summary": "Une délégation du personnel de l'Opéra a sollicité l'appui des députés pour le rétablissement de leurs droits à la retraite. Un amendement sera déposé au budget.",
    "paragraphs": [
      "Une délégation du petit personnel de l'Opéra, composée de machinistes, choristes et habilleurs, a été reçue au Palais-Bourbon par les députés de Paris. Ils demandent le rétablissement du versement à la caisse des retraites de l'Opéra afin de garantir leurs droits à la pension. M. Chauvière, député, s'est engagé à présenter un amendement à ce sujet lors de la discussion du prochain budget."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Voix d'Outre-Tombe (Suite)",
    "summary": "Gabrielle plaide avec sincérité l'innocence de Michel auprès du jeune duc et de sa mère, jurant de découvrir le véritable coupable pour obtenir justice.",
    "paragraphs": [
      "Ils causèrent tous familièrement, tendrement, comme s'ils s'étaient toujours connus. Gabrielle trouva moyen de leur raconter toute l'histoire de Michel, excepté la parenté réelle et cachée de son fiancé avec le duc d'Argile.",
      "Et elle eut des accents si vrais, si sincères, si justes, qu'elle convainquit aussi bien la mère que le fils de l'entière innocence de celui qu'elle adorait.",
      "Le jeune duc, cédant à sa nature chevaleresque, s'écria : « Mais ce misérable qui a fait condamner un innocent à sa place, ma cousine, le soupçonnez-vous ? »",
      "« Non », répondit franchement Gabrielle. « Il faut le chercher, le découvrir, lui faire payer son double crime. J'ai juré d'y consacrer toute ma vie », déclara mademoiselle de Saint-Amand.",
      "« Je vous y aiderai, nous vous y aiderons, n'est-ce pas, maman, n'est-ce pas, madame ? » Marguerite, en riant, répondit : « J'en ai déjà fait le serment à ma fille. » Il était électrisé."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Chemins de Fer",
    "title": "Nouveaux services et dessertes de la ligne des Invalides",
    "summary": "La ligne des Invalides offre désormais des liaisons rapides reliant la rive gauche aux quartiers ouest de Paris et au bois de Boulogne, facilitant ainsi les déplacements quotidiens des riverains.",
    "paragraphs": [
      "Il ne faut pas croire que les gares du Champ-de-Mars et des Invalides soient exclusivement réservées aux trains de l'Exposition.",
      "Toute une région de la rive gauche, comprenant les quartiers du faubourg Saint-Germain, des Invalides, du Gros-Caillou, etc., qui était jusqu'ici privée de moyens de transport directs et rapides vers le bois de Boulogne et divers points de la rive droite ouest, se trouve maintenant desservie par la ligne des Invalides et du Champ-de-Mars à la gare Saint-Lazare.",
      "Les habitants de ces quartiers peuvent, en prenant le train à la gare des Invalides, se transporter : au Champ-de-Mars, en 7 minutes ; à l'avenue Henri-Martin, en 19 minutes ; à l'avenue du Bois-de-Boulogne, en 25 minutes ; à Courcelles-Levallois, en 27 minutes ; à Batignolles, en 32 minutes."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Chronique Agricole",
    "title": "Vins, Eaux-de-vie et Pommes à cidre",
    "summary": "Malgré quelques foyers de mildiou dans le Midi, la récolte viticole s'annonce prometteuse, tandis que les vergers de l'Eure et de la Manche promettent une abondante production de pommes à cidre.",
    "paragraphs": [
      "VINS. La récolte se présente toujours comme très abondante ; la coulure n'a causé que des dégâts insignifiants. Mais on signale le mildiou dans le Gard, l'Hérault et l'Aude. Dans quelques localités du Midi, on se plaint de la chlorose.",
      "Dans l'Hérault, les petits vins s'écoulent difficilement de 8 à 10 fr. l'hectolitre ; les bons vins valent de 18 à 20 fr. le degré, l'hectolitre. Dans le Gard, les bons vins rouges, frais et fruités, se paient de 18 à 21 fr. l'hectolitre.",
      "Dans l'Aude, les dégâts causés par les inondations n'ont pas été aussi considérables qu'on le craignait. Les affaires sont calmes, mais les prix demeurent fermes sur les belles qualités.",
      "POMMES A CIDRE. Dans le département de l'Eure, les pommiers à cidre sont chargés. On ne signale pas de dégâts causés par l'anthonome. Dans la Manche, la floraison des pommiers s'est effectuée dans des conditions très favorables et tout fait prévoir une récolte abondante."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Social",
    "title": "Les œuvres de charité de Gabrielle de Saint-Amand",
    "summary": "Délaissant les mondanités, Mademoiselle de Saint-Amand consacre son temps aux pauvres, secourant avec dévouement une femme âgée abandonnée dans un bouge de Grenelle.",
    "paragraphs": [
      "La jeune femme ne se contentait pas d'aller dans ce monde dont elle devait faire l'opinion. Tout comme à Montbert, les pauvres la voyaient bien plus souvent que les grands de la terre.",
      "Un jour, on lui apprit que, dans un bouge à Grenelle, une vieille femme agonisait sans ressources. Mademoiselle de Saint-Amand y courut. C'était, en effet, une malheureuse dont le fils était au loin, valet de chambre à Saint-Pétersbourg.",
      "Des voisins indélicats avaient volé toutes les ressources de la pauvre femme. Mademoiselle de Saint-Amand soigna la malade elle-même, pourvut largement à tous ses besoins, et, quand la vieille fut en état de se lever, elle la fit entrer dans un asile dont elle paya la pension."
    ]
  }
];
