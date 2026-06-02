// Date: 1900-01-22
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-22 (Version Restaurée, 37 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage Secret",
    "summary": "Le Petit Parisien annonce la parution imminente de 'Mariage Secret', un roman inédit de Paul Bertnay. Une œuvre dramatique relatant les aventures parisiennes d'une mère et de sa fille.",
    "paragraphs": [
      "Le Petit Parisien publiera très prochainement Mariage Secret, un grand roman inédit de Paul Bertnay.",
      "Mariage Secret est un roman dramatique et passionné qui se déroule au milieu d'émouvantes péripéties. C'est l'histoire de deux femmes, la mère et la fille, jetées à la suite d'une aventure romanesque dans le milieu parisien.",
      "Nos lecteurs retrouveront dans Mariage Secret les qualités qui distinguent l'auteur d'Orphelins d'Alsace, Celle qu'on aime et Sacrifice."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Économie et Société",
    "title": "Le Rôle de l'Alcool",
    "summary": "Une commission parlementaire examine l'importance économique de l'alcool, pilier industriel, agricole et fiscal, tout en cherchant des solutions contre les ravages de l'alcoolisme.",
    "paragraphs": [
      "L'alcoolisme est le fléau du jour. Le Parlement est saisi de maints projets de loi qui le concernent. Au ministère de l'Agriculture, une nouvelle commission vient d'être instituée pour rechercher ses rapports avec les industries rurales.",
      "Combien de services cet ennemi de notre santé ne nous rend-il pas sous les formes les plus variées ? Il est indispensable à la pharmacie, employé par la parfumerie et la photographie. Le voilà qui entre dans le chauffage et l'éclairage de nos maisons et usines.",
      "Rien que la betterave couvre cent vingt mille hectares de notre sol et fournit plus de vingt millions de journées de travail à l'agriculture et à la distillation. Enfin, le fisc prélève sur cette consommation, sous ses différents aspects, 70 millions de francs chaque année.",
      "Certes, l'alcool apparaît comme un produit tout moderne. Il semble que l'Antiquité ne l'ait pas connu. Cependant, de tout temps il y a eu des ivrognes.",
      "À cette heure, sur 2 millions et demi d'hectolitres, sept dixièmes proviennent de la betterave, deux dixièmes de l'orge, du maïs et de divers farineux. Le reste, un dixième, est tiré des raisins ou des pommes.",
      "Heureusement, la campagne ouverte de tous côtés contre l'alcoolisme portera ses fruits. Elle arrachera graduellement ce pays aux excès d'une consommation aussi funeste au cerveau qu'aux autres organes.",
      "D'ici là, grâce à des mesures de plus en plus libérales, l'alcool aura repris son véritable rôle social."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions - Un Drame du Mariage",
    "summary": "Confessions sur un passé mystérieux : un mariage arrangé dans le 8e arrondissement, facilité par un mystérieux visiteur ayant soldé les dettes de l'avocat Audeval.",
    "paragraphs": [
      "Je ne vous ai pas caché ma condition, mon isolement, l'ignorance complète où l'on m'a tenu de mon origine. Cette ignorance a toujours pesé sur moi comme un cauchemar.",
      "Je me suis trouvé en rapport avec deux vieilles femmes de condition bien différente et qui demeuraient aux deux extrémités de Paris. L'une d'elles existe encore. C'est la veuve d'un concierge.",
      "Il y a vingt-cinq ans, elle était concierge, avec son mari, dans une maison de la rue Condorcet, celle-là même où demeurait cet Audeval dont vous avez porté le nom. M. Audeval était avocat de nom, mais pas de fait.",
      "L'histoire du mariage de M. Audeval tient du roman. Avec la ruine, la maladie était venue s'installer chez lui dans le modeste appartement de sept à huit cents francs qu'il occupait.",
      "Un monsieur d'une cinquantaine d'années, dont le signalement correspondait à peu près exactement à l'un des portraits de votre album, entra un jour dans la loge des concierges et demanda M. Audeval.",
      "Huit jours après, les dettes de M. Audeval étaient soldées et le malheureux se trouvait en possession d'une bourse abondamment garnie. Trois semaines plus tard, il se mariait à la mairie du huitième arrondissement."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Surpris par le flot : Trois victimes",
    "summary": "À Berck-sur-Mer, trois jeunes pêcheurs ont péri, emportés par la marée montante. La municipalité organise une souscription pour soutenir les familles des victimes.",
    "paragraphs": [
      "Berck-sur-Mer, 21 janvier. Avant-hier, un certain nombre de jeunes gens de Berck-sur-Mer se rendaient au Crotoy pour y chercher le ver qui sert à la pêche du merlan et de la limande.",
      "Le flot ayant monté avec impétuosité, trois des malheureux jeunes gens, les nommés Isidore Bouville, Joseph Fournier et Léonce Macquet, disparurent en un clin d'œil, renversés et submergés par les vagues.",
      "Seul jusqu'ici, le cadavre de Léonce Macquet a été retrouvé à marée basse entre le Crotoy et Saint-Firmin. La municipalité organise une souscription pour venir en aide aux parents des victimes."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Les Embarras du Ministère italien",
    "summary": "Le gouvernement du général Pelloux est en difficulté face aux ramifications de la Maffia et aux critiques virulentes concernant sa politique intérieure et coloniale.",
    "paragraphs": [
      "Le ministère italien, dont le général Pelloux est le chef, rencontre des difficultés multiples dans sa politique intérieure, et sa politique extérieure est à peine moins critiquée.",
      "On avait dit dès l'origine que le procès de la Maffia ne pourrait aboutir. Cette ligue a trop de ramifications dans tous les milieux, surtout dans les milieux parlementaires.",
      "Le général Pelloux, avec beaucoup d'audace et un peu de témérité, avait promis d'aller jusqu'au bout et de punir le meurtre de M. Notarbartolo. Au dernier moment, le cabinet a décidé de renvoyer les débats pour supplément d'enquête.",
      "Au dehors, la politique du ministère italien est très critiquée par l'opposition crispinienne qui lui reproche son incertitude et sa timidité. Le général Pelloux a fini par déclarer qu'il renonçait à tout établissement en Extrême-Orient."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Terrible accident à Nîmes",
    "summary": "Un tragique accident est survenu à Nîmes lors de travaux de fumisterie. Une explosion de caisson a causé la mort d'un ouvrier, la noyade d'un second, et provoqué un choc psychologique majeur chez un témoin oculaire.",
    "paragraphs": [
      "Nîmes, 21 janvier. La population de Pourques a été mise hier soir en émoi par un terrible accident. Trois ouvriers fumistes, les nommés Chevalier, Laborie et Brut, déboulonnaient les quatre cheminées de la plaque dite de descente quand, par suite d'une trop forte pression d'air comprimé, le caisson sauta.",
      "Chevalier fut tué sur le coup, son camarade Laborie se noya, et Brut fut précipité dans le Rhône mais put en être retiré sain et sauf. M. André Souillard, surveillant général, témoin des péripéties de cet accident, a été saisi d'une émotion tellement violente qu'on craint qu'il en devienne fou."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Économie",
    "title": "Un désastre financier à Saint-Brieuc",
    "summary": "La faillite du banquier M. Couet à Saint-Brieuc, avec un déficit de 5 millions de francs, ébranle le milieu financier local suite à la déconfiture d'un marchand de denrées importantes.",
    "paragraphs": [
      "Saint-Brieuc, 21 janvier. M. Couet, banquier à Saint-Brieuc, a déposé son bilan au tribunal de commerce. Le passif s'élève à 7 700 000 francs et l'actif à 2 700 000 francs, ce qui donne un déficit total d'environ 5 000 000 francs.",
      "Ce chiffre considérable est dû principalement à la faillite de M. Joulaud, marchand de beurre et d'œufs. Le tribunal de commerce a repoussé la demande de M. Couet et l'a déclaré en état de faillite ouverte.",
      "L'émotion causée par ce grave événement est loin d'être calmée ; les autres banques de la ville s'en sont également ressenties, tout le monde voulant retirer son argent sur-le-champ."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un drame à bord d'une péniche",
    "summary": "À Roanne, un marinier a poignardé son associé et blessé un témoin lors d'un règlement de comptes passionnel sur une péniche. Le coupable a été incarcéré.",
    "paragraphs": [
      "Roanne, 21 janvier. Une péniche appartenant à MM. Gustave Marmier et Pierre Bernard a été, l'autre nuit, le théâtre d'un drame sanglant.",
      "Un marinier, nommé Chanet, a frappé M. Bernard de plusieurs coups de couteau. M. Marmier, accouru pour porter secours à son associé, a été également blessé. Le coupable, interrogé, a donné pour raison qu'il avait cherché à se venger parce que M. Bernard lui avait enlevé sa maîtresse. Chanet a été écroué à la maison d'arrêt de Roanne."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "La bataille sur les bords de la Tugela",
    "summary": "Sur les bords de la Tugela, le canon tonne sans discontinuer. Malgré une offensive anglaise contre les positions boers, les combats se limitent pour l'instant à un duel d'artillerie sans avancée décisive.",
    "paragraphs": [
      "La bataille que l'on attendait depuis plusieurs jours est engagée, et à l'heure où nous écrivons le canon tonne avec rage sur les bords de la Tugela.",
      "Samedi, à l'aube, les Anglais ont commencé l'attaque des positions avancées des Boërs et la lutte a continué jusqu'à la nuit sans grand résultat. Tout se borne donc à un duel d'artillerie qui jusqu'ici fait plus de bruit que de mal.",
      "Le général Clery, avec une partie des troupes du général Warren, s'est battu aujourd'hui. Par un emploi judicieux de son artillerie il s'est frayé un chemin. Les pertes ne sont pas élevées, une centaine de blessés ont été apportés."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "La mission de M. Makruni",
    "summary": "Mandaté par le président Krüger, M. Makruni effectue une mission diplomatique secrète à travers l'Europe et l'Amérique, cherchant vraisemblablement un soutien international pour le gouvernement boer.",
    "paragraphs": [
      "Selon des informations de Rome, M. Makruni est en mission délicate confiée par le président Krüger pour son gouvernement. Il doit se rendre à Rome, Paris, puis en Amérique.",
      "Le journal 'Le Courrier d'Italie' suggère qu'il pourrait être porteur d'une lettre de Krüger à M. Mac-Kinley, bien qu'il puisse s'agir d'une mission officieuse auprès des gouvernements européens."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Économie",
    "title": "Achat de chevaux pour l'armée anglaise",
    "summary": "Le journal 'L'Avanti' signale l'envoi prochain de chevaux achetés en Russie et en Autriche-Hongrie pour l'armée britannique. La 'Neue Presse' presse le gouvernement autrichien d'interdire cette expédition.",
    "paragraphs": [
      "Vienne, 21 janvier. Le journal 'L'Avanti' rapporte qu'un bateau du Lloyd autrichien partira prochainement pour l'Afrique du Sud, transportant des chevaux achetés en Russie et en Autriche-Hongrie pour les besoins de l'armée anglaise.",
      "La 'Neue Presse' adjure le gouvernement autrichien d'empêcher le départ de ce navire."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Le navire américain 'Maria' relâché",
    "summary": "L'ambassadeur des États-Unis à Londres confirme que la cargaison du navire américain 'Maria', préalablement saisie par les autorités britanniques, a été officiellement restituée à ses destinataires.",
    "paragraphs": [
      "Washington, 21 janvier. L'ambassadeur américain à Londres a télégraphié que les marchandises composant la cargaison du navire américain 'Maria', précédemment saisies par les autorités britanniques, ont été libérées et remises à leurs destinataires."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique intérieure",
    "title": "La rentrée du Parlement anglais",
    "summary": "Lord Salisbury et M. Balfour convoquent les parlementaires pour la session du 30 janvier, soulignant la nécessité d'une présence forte alors que de nombreux députés sont retenus en Afrique du Sud.",
    "paragraphs": [
      "Le Premier ministre, lord Salisbury, et M. Balfour ont adressé des convocations à leurs partisans respectifs en vue de la réouverture du Parlement fixée au 30 janvier, soulignant l'importance capitale des sujets qui seront débattus.",
      "M. Balfour, leader de la Chambre des communes, insiste sur l'assiduité des députés, notant qu'un grand nombre de membres du parti gouvernemental sont actuellement retenus en Afrique du Sud."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Nécrologie",
    "title": "Mort de M. John Ruskin",
    "summary": "Le célèbre critique d'art et écrivain britannique, M. John Ruskin, est décédé en ce jour.",
    "paragraphs": [
      "M. John Ruskin, le célèbre critique d'art et penseur britannique, a succombé aujourd'hui."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Renforcement des garnisons russes en Asie centrale",
    "summary": "Les garnisons russes en Asie centrale sont renforcées de 30 000 hommes. Ce mouvement, motivé par le rappel des officiers, est interprété comme une manœuvre stratégique sur Hérat.",
    "paragraphs": [
      "Londres, 21 janvier. On écrit d'Odessa que les garnisons russes de l'Asie centrale ont été renforcées de 30 000 hommes. Tous les officiers ont été rappelés de leurs congés d'hiver.",
      "Cette mobilisation est perçue par les observateurs comme une préparation à l'occupation de Hérat, profitant de la faiblesse de l'armée anglaise actuellement constatée."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique américaine",
    "title": "Expulsion d'un député polygame",
    "summary": "À Washington, la commission spéciale de la Chambre des représentants a recommandé l'expulsion de M. Roberts, député de l'Utah, en raison de sa pratique persistante de la polygamie.",
    "paragraphs": [
      "Washington, 21 janvier. La commission spéciale de la Chambre, chargée d'enquêter sur le cas de M. Roberts, le nouveau député de l'Utah, s'est prononcée en faveur de son expulsion en raison de la persistance de sa polygamie."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Actualités coloniales",
    "title": "Événements aux Philippines",
    "summary": "Un détachement militaire américain a été victime d'une sanglante embuscade dans la province de San-Pablo aux Philippines, déplorant plusieurs pertes humaines parmi ses soldats.",
    "paragraphs": [
      "En janvier, le détachement Thomas, qui assurait l'escorte de convois dans la province de San-Pablo, est tombé dans une embuscade. Le bilan de cette attaque s'élève à deux morts, cinq blessés et deux disparus."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits divers",
    "title": "Troubles en Chine",
    "summary": "Des rapports alarmants de missionnaires italiens font état de graves insurrections dans la province chinoise du Chih-Li, marquées par le massacre de chrétiens et le pillage systématique des églises.",
    "paragraphs": [
      "Rome, 21 janvier. D'après un rapport de missionnaires italiens, des troubles graves ont éclaté dans la province du Chih-Li. La population locale a massacré de nombreux chrétiens et a procédé au pillage d'églises."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Social",
    "title": "Hospice de journalistes à Odessa",
    "summary": "Face à la précarité touchant la presse, le directeur du journal 'Odessa-Listok' a fondé un hospice destiné à secourir les journalistes et les typographes russes en difficulté.",
    "paragraphs": [
      "Le directeur de l'Odessa-Listok a pris l'initiative de créer un hospice afin de lutter contre la crise de misère qui frappe durement les journalistes de carrière en Russie.",
      "Cet établissement offrira logement et assistance aux journalistes ainsi qu'aux typographes, sans distinction de nationalité."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Élections sénatoriales",
    "title": "Réunion électorale à Paris (Seine)",
    "summary": "L'Union départementale des républicains s'est réunie à l'hôtel des Sociétés-Savantes afin de présenter les candidatures aux élections sénatoriales, dont celles de M. de Freycinet et M. Poirrier.",
    "paragraphs": [
      "L'Union départementale des républicains s'est réunie hier à l'hôtel des Sociétés-Savantes pour entendre les candidats aux élections sénatoriales, au nombre desquels figuraient M. de Freycinet, M. Poirrier et plusieurs autres sénateurs sortants."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Élections sénatoriales",
    "title": "Candidatures en Saône-et-Loire, Savoie et Vosges",
    "summary": "À l'approche des élections sénatoriales, le paysage électoral se précise : les sortants font face à une concurrence accrue, allant des nouveaux prétendants locaux aux candidats nationalistes dans les Vosges.",
    "paragraphs": [
      "En Saône-et-Loire, les sénateurs sortants, MM. Demôle, Félix Martin, Dutaud, Quilleverant et Magnien, sollicitent le renouvellement de leur mandat face à plusieurs concurrents.",
      "En Savoie, les sièges sont disputés par MM. Forest et Gravin, tandis qu'une lutte serrée s'engage entre MM. Antoine Borrel et Florim Borrel et Florimond Truchet pour un siège nouvellement vacant.",
      "Dans les Vosges, les trois sénateurs sortants doivent affronter une liste de candidats nationalistes composée du général Pothier, d'Ernest Picot et de Pierre Buffet."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Éducation",
    "title": "Distribution des prix de dessin à la Sorbonne",
    "summary": "La Sorbonne a célébré l'excellence artistique des écoles communales lors d'une cérémonie présidée par M. Jean Labusquière, mettant en exergue l'importance de l'enseignement du dessin pour la jeunesse.",
    "paragraphs": [
      "La cérémonie de distribution des prix des écoles communales s'est déroulée dans le grand amphithéâtre de la Sorbonne, sous la présidence de M. Jean Labusquière. L'orphéon municipal a ouvert la séance en interprétant la Marseillaise.",
      "Au cours de son allocution, M. Labusquière a tenu à souligner les bienfaits de l'enseignement du dessin pour le développement du sentiment artistique et esthétique chez les enfants."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Sciences",
    "title": "Les découvertes de Babylone",
    "summary": "Les fouilles de la mission allemande à Babylone apportent un éclairage nouveau sur l'Antiquité, confirmant par des preuves archéologiques les récits de construction laissés par l'historien Hérodote.",
    "paragraphs": [
      "Un vif regain d'intérêt scientifique entoure les travaux de la mission allemande qui explore actuellement les ruines de Babylone. Les historiens examinent avec soin les méthodes de construction antiques décrites par Hérodote, dont la véracité se voit confirmée par les découvertes archéologiques récentes."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Faits divers",
    "title": "Chronique mondaine",
    "summary": "Des murmures circulent dans la haute société : Paul Tavernier confie à Suzanne des secrets de famille compromettants concernant la lignée du marquis Robert d'Angerville.",
    "paragraphs": [
      "Paul Tavernier, au cours d'un entretien avec Suzanne, a évoqué des secrets de famille pesant sur le marquis Robert d'Angerville, révélant ainsi des tensions latentes au sujet de la lignée de leurs proches."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Politique",
    "title": "Hommage aux soldats morts pour la patrie",
    "summary": "Une cérémonie patriotique à la mémoire des soldats disparus a été marquée par les discours poignants de MM. Bouillet et Haussmann, malgré des contestations sporadiques au sein de l'assemblée.",
    "paragraphs": [
      "M. Bouillet a suscité de vives acclamations en rappelant le sens profond de cette cérémonie. Nos pères sont tombés par centaines, terrassés par le nombre et la fatalité. Leur sacrifice nous impose un devoir sacré : lutter sans protester contre les rigueurs du destin.",
      "Le député Haussmann a célébré, à son tour, l'héroïsme des soldats morts pour la patrie. Il voit dans cette manifestation une promesse d'avenir et de paix civique, au service de la démocratie et de la France.",
      "La prise de parole de divers orateurs, dont M. Dumoucil, a provoqué des réactions contrastées, mêlant huées et sifflets. Malgré ces tensions, la foule a tenu à saluer la mémoire des disparus aux accents de la Marseillaise."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Manifestation patriotique à Garches",
    "summary": "Une fervente manifestation patriotique s'est déroulée hier à Garches. La population s'est recueillie au monument commémoratif dans le bois, au son des chants des écoliers et des discours des personnalités locales.",
    "paragraphs": [
      "Une manifestation patriotique, à laquelle assistaient plusieurs centaines de personnes, a eu lieu hier à Garches. Après un rassemblement, le cortège s'est rendu au monument commémoratif situé dans le bois.",
      "Les enfants de l'école ont entonné des chants, suivis par les discours de MM. Badel, Guillaume, Le Tapissier et d'autres personnalités locales, le tout dans une atmosphère de profonde ferveur républicaine."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Célébration de l'anniversaire de la bataille de Montretout à Clichy",
    "summary": "Clichy a commémoré hier la bataille de Montretout. Après un dépôt de couronnes au cimetière par les autorités municipales et militaires, la journée s'est clôturée par un banquet fraternel salle Hiepal.",
    "paragraphs": [
      "L'anniversaire de la bataille de Montretout a été célébré hier à Clichy. Le cortège s'est formé place de l'Hôtel-de-Ville en présence de M. le maire, du docteur Hellet et du général Barden.",
      "Au cimetière, des couronnes ont été déposées sur le monument élevé à la mémoire des enfants de Clichy morts pour la patrie. La journée s'est terminée par un banquet par souscription à la salle Hiepal."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Cérémonie patriotique à Asnières",
    "summary": "Asnières a honoré ses soldats de 1870 lors d'une cérémonie. Autorités et associations ont défilé jusqu'au cimetière pour rendre un hommage solennel aux disparus sur leurs tombes et le monument commémoratif.",
    "paragraphs": [
      "Une imposante cérémonie a eu lieu hier matin à Asnières pour honorer les soldats morts pendant la guerre de 1870. De nombreuses couronnes ont été déposées sur la tombe des Asniérois Petit et Poëet, ainsi que sur le monument aux morts.",
      "Le cortège, composé des autorités municipales et de diverses associations, a parcouru la rue Saint-Denis et l'avenue d'Argenteuil avant de se rendre au cimetière pour y prononcer les discours d'usage."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Activités diverses et société",
    "summary": "De la vie associative des facteurs de la Seine aux projets historiques de M. de Ricaudy, en passant par les succès médicaux du professeur Wright contre la typhoïde, voici les brèves de ce jour.",
    "paragraphs": [
      "L'Association des facteurs des postes de la Seine (rive gauche) a donné un banquet hier soir au restaurant Leblanc. Le président, M. Joubert, a exposé les objectifs de cette nouvelle société.",
      "Un comité, constitué sur l'initiative de M. Albert de Ricaudy, se réunira demain rue Richelieu afin d'étudier le rachat de la prison de Saint-Louis et la conservation des souvenirs des croisades à Mansourah.",
      "Le professeur Wright publie des résultats très encourageants sur l'efficacité de la sérothérapie contre la fièvre typhoïde au sein de l'armée anglaise."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mystérieuse affaire sur le canal Saint-Martin",
    "summary": "La découverte d'un paquet suspect flottant sur le canal Saint-Martin contenant des documents officiels éveille la curiosité. Le magistrat Boutineau a ouvert une enquête sur cette affaire aux relents d'espionnage.",
    "paragraphs": [
      "M. D., marinier à bord du vapeur 'La Justice', a découvert hier matin un paquet volumineux enveloppé de toile brune flottant près de l'Arsenal. Ce colis contenait des lettres adressées à diverses personnes, dont un caporal à Lérouville.",
      "Le magistrat, M. Boutineau, après examen, a placé les documents sous scellés. Un garde-éclusier a déclaré avoir vu, la veille, un individu jeter un paquet suspect depuis le pont.",
      "L'enquête se poursuit, bien que l'hypothèse d'une affaire d'espionnage soit évoquée avec prudence par le voisinage."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Julien Poulet, blessé dans des circonstances troubles",
    "summary": "Un jeune homme de 19 ans, Julien Poulet, a été hospitalisé après une blessure par balle sous le pont de la rue d'Avron. M. Rousselot enquête sur un possible lien avec une tentative de cambriolage à Montreuil.",
    "paragraphs": [
      "Un jeune homme de 19 ans, Julien Poulet, a été retrouvé sans connaissance sous le pont de la rue d'Avron. Souffrant d'une blessure par balle à la poitrine, il a été transporté à l'hôpital Tenon.",
      "Bien que le jeune homme affirme avoir été agressé par des inconnus, l'enquête de M. Rousselot suggère qu'il pourrait appartenir à une bande de cambrioleurs ayant tenté de dévaliser une propriété de la commune de Montreuil-sous-Bois la nuit précédente."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Rixe sanglante aux Gobelins",
    "summary": "Une violente altercation entre deux femmes, Marie la Bretonne et Marie la Rousse, pour un motif amoureux, a fini par une arrestation et une hospitalisation à Cochin après usage d'un saladier comme projectile.",
    "paragraphs": [
      "Deux jeunes femmes, Marie la Bretonne et Marie la Rousse, se sont violemment battues hier dans un débit de vins de l'avenue des Gobelins pour un différend amoureux concernant un dénommé Jean Le Kervac.",
      "La bagarre, marquée par l'usage d'un verre et d'un saladier, s'est terminée par une grave blessure au visage de Marie la Rousse, qui a dû être transportée à l'hôpital Cochin. Marie la Bretonne a été arrêtée par le commissaire de police."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Social",
    "title": "Règlement des concours de tir et de gymnastique",
    "summary": "Le directeur de l'Académie de Paris officialise les règlements de la troisième fête fédérale, incluant les épreuves sportives et l'octroi de bourses aux élèves les plus méritants.",
    "paragraphs": [
      "Le directeur de l'Académie de Paris a ratifié les règlements des concours de tir, d'escrime et de gymnastique. La troisième fête fédérale aura lieu à Paris cette année.",
      "Le concours comprendra des épreuves scolaires variées, notamment au fusil, à l'escrime et à l'aviron. Un budget spécial a été alloué pour soutenir les élèves les plus méritants par l'attribution de bourses."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Spectacles",
    "title": "Courrier des théâtres",
    "summary": "La Comédie-Française redonne Musset et Sarah Bernhardt annonce une date unique. Le théâtre Antoine prépare 'La Clairière' tandis que le Vaudeville rencontre des difficultés sur les costumes des Fourchambault.",
    "paragraphs": [
      "La Comédie-Française reprend « On ne badine pas avec l'amour ». Sarah Bernhardt donnera une représentation exceptionnelle de « La Dame aux Camélias » dimanche prochain.",
      "Au théâtre Antoine, on prépare le drame « La Clairière » de Maurice Donnay, et des incidents sur les costumes ont été rapportés au Vaudeville concernant la pièce « Les Fourchambault »."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Causerie financière",
    "title": "Le marché financier de la semaine",
    "summary": "Le marché affiche une fermeté prudente malgré les tensions au Transvaal. Les rentes restent stables, le secteur bancaire montre des signes de reprise et les fonds russes confirment leur progression.",
    "paragraphs": [
      "La semaine qui vient de s'écouler a été marquée par une fermeté certaine, mais teintée d'expectative. La question monétaire a perdu de son acuité : la Banque d'Angleterre a abaissé le taux de son escompte et la Banque de France a enregistré d'importantes rentrées d'or. Le seul point d'incertitude demeure la situation au Transvaal.",
      "Toutefois, une réserve prudente prévaut sur la crainte. Les engagements spéculatifs ont diminué et les cours des valeurs minières, ramenés en arrière, permettent désormais d'attendre les événements sans péril excessif.",
      "Nos rentes sont restées fermes, malgré de légères fluctuations du 3 % liées aux réalisations de fin de semaine. L'Extérieure a connu une semaine agitée, fléchissant après une hausse initiale.",
      "Ce repli s'explique par les bruits concernant le projet du gouvernement espagnol de réduire l'intérêt de la dette extérieure estampillée, passant de 4 à 3,5 %, afin de favoriser l'amortissement du capital sur soixante ans.",
      "L'Italien s'affermit grâce aux bonnes recettes du Trésor. Constantinople n'a généré aucune nouvelle majeure, mais les fonds ottomans restent stables. Les emprunts russes 3 % poursuivent leur progression.",
      "La Banque de France demeure lourde, bien que son portefeuille commercial se maintienne à un niveau élevé, garantissant de substantiels bénéfices.",
      "La liquidation de quinzaine a apporté une animation bienvenue aux banques. La Banque de Paris et des Pays-Bas progresse dans l'attente d'un dividende de 55 francs, le Crédit lyonnais gagne 12 francs et des rumeurs d'augmentation de capital circulent pour le Comptoir national d'escompte.",
      "La Banque internationale poursuit son opération immobilière rue Laffitte sur les anciens terrains de l'hôtel de la reine Hortense. La Société générale reste stable et un regain d'intérêt se manifeste pour la Banque ottomane.",
      "Les grèves du Centre pèsent sur les recettes ferroviaires. À la Bourse, le marché des actions manque de tendance nette. Les Chemins espagnols se reprennent, mais le Suez reste lourd. Les compagnies de navigation stagnent, la Compagnie des omnibus décline, tandis que la Compagnie générale de traction avance. Le cuivre et les houillères d'Ahun sont en hausse.",
      "La nouvelle du mouvement tournant de sir R. Buller a suscité une vive reprise sur les valeurs sud-africaines au Stock-Exchange, suivie par Paris avec une réserve prudente."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Faits Divers",
    "title": "Perdu dans les ténèbres",
    "summary": "Égaré de nuit dans une contrée inconnue, un voyageur doit son salut à l'instinct de sa monture après avoir trouvé un poteau indicateur illisible. Une aventure nocturne qui se termine par une heureuse issue.",
    "paragraphs": [
      "Un jour que je me promenais en voiture dans les environs d'un chef-lieu de département où j'étais de passage, la nuit me surprit tandis que j'étais encore à quelques lieues de la ville, dans un pays qui m'était inconnu.",
      "Arrivé à un carrefour, je descendis de voiture pour m'assurer de mon chemin en consultant le poteau indicateur ; malheureusement, celui qui se trouvait là n'était plus bon à rien, tellement il était vieux et usé : les indications dont j'avais tant besoin étaient effacées. Je remontai en voiture et lâchai les guides à mon cheval, en l'encourageant de la voix à continuer son chemin. L'intelligente bête prit la bonne voie et, au bout d'une heure ou deux, elle me déposait sain et sauf devant le perron de mon hôtel.",
      "C'était la chance, d'autres diraient la Providence. En tout cas, j'avais agi quelque peu au hasard, et l'aventure aurait pu avoir des suites sérieuses. Il ne faut pas oublier que j'étais dans un pays qui m'était inconnu, qu'il se faisait tard et que l'obscurité était profonde. Qu'auriez-vous fait à ma place ? Probablement la même chose."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les tragédies de l'amour",
    "summary": "Au château de Villefort, Roland intercepte une missive révélant le pacte désespéré de Colette : elle accepte un mariage forcé mais jure de se donner la mort ensuite. Roland alerte le marquis de Vivarez et le duc.",
    "paragraphs": [
      "Dans une dernière lettre, elle lui écrivait : « J'ai promis. Je tiendrai ma promesse ! Je serai votre femme. Et quand vous aurez exécuté, vous, votre engagement, ce sera fini entre nous. Nous concluons un marché. Le lendemain du jour où je porterai votre nom, je vous jure que je trouverai le moyen de me tuer ».",
      "C'était un garçon des Grandes-Roches qui apportait au château de Villefort les lettres de Gaston et qui attendait et remportait les réponses. Ce manège de lettres entre les Grandes-Roches et le château de Villefort, Roland n'avait pas été sans le remarquer depuis quelque temps.",
      "Il avait surpris l'arrivée du messager et guetta son départ. L'homme prit les avenues du parc, se dirigeant vers la vallée, sans se douter qu'on le guettait. Il musait, perdait son temps, coupait une branche d'arbre, la taillait avec son couteau, le tout pour s'amuser. Il allait quitter le parc et reprendre le coteau au pied duquel coule la rivière, lorsqu'il se retourna tout à coup.",
      "Quelqu'un, dont les pas amortis par la mousse n'avaient point annoncé la présence, venait de s'approcher de lui et lui frappait sur l'épaule. C'était Roland de Villefort. Roland l'attaqua sans préambule : « Mon garçon, vous portiez une lettre aux Grandes-Roches ». Le paysan répondit : « C'est la vérité, Monsieur le comte. Une lettre de la demoiselle en réponse à une autre de mon maître. Rien d'extraordinaire à cela, puisqu'ils vont se marier, à ce qu'on raconte ».",
      "Roland finit par obtenir la lettre après avoir proposé de l'argent au messager. Roland brisa l'enveloppe et lut fiévreusement. Devant son émotion, en voyant sa pâleur et son trouble, le paysan cria à l'aide. Roland restait immobile, bouleversé. Bouleversé par ce qu'il venait d'apprendre par le contenu de cette lettre et par tout ce que ne disait pas cette lettre, mais qu'elle laissait deviner.",
      "Il revint lentement au château. Il ne s'était donc pas trompé l'autre jour, lorsqu'il avait pensé que l'amour de Colette pour l'un des prétendants était invraisemblable. Qu'allait-il faire de ce secret ainsi deviné ? Il hésitait. Mais l'affection qu'il avait pour son frère l'emportait. Il vint trouver le marquis de Vivarez et le duc de Villefort pour les mettre au courant de la situation tragique."
    ]
  }
];
