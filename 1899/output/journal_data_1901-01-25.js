// Date: 1901-01-25
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-01-25 (Version Restaurée, 42 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique Internationale",
    "title": "Deux siècles de royauté",
    "summary": "L'empereur d'Allemagne a célébré le bicentenaire de la royauté prussienne. Un jubilé fastueux qui souligne l'attachement des Hohenzollern à la force, bien que cette célébration semble centrée sur la Prusse seule.",
    "paragraphs": [
      "L'empereur d'Allemagne a interrompu son séjour pour se rendre à Osborne, après avoir assisté aux fêtes du bicentenaire prussien. Il venait de commémorer triomphalement deux siècles de royauté, associant à ce jubilé les délégués de toutes les puissances, le Parlement, l'administration, les Universités, ainsi que l'armée et la marine.",
      "Trente ans plus tôt, le 18 janvier 1871, dans le palais de Versailles, Guillaume Ier relevait à son profit l'Empire germanique ; cent soixante-dix ans plus tôt encore, le 18 janvier 1701, Frédéric III, margrave de Brandebourg, se couronnait roi de Prusse à Kœnigsberg sous le nom de Frédéric Ier.",
      "Les Hohenzollern, qui ont si bien transformé le Brandebourg, possèdent, parmi toutes les grandes familles dynastiques ayant gouverné l'Europe, une physionomie singulière. Ils ont toujours fait preuve d'un réalisme politique très marqué, ainsi que d'un respect et d'une adoration profonds pour la force.",
      "Le jubilé actuel constitue le triomphe des Hohenzollern. Toutefois, il n'est pas certain que toute l'Allemagne, du nord au sud, s'y associe de tout cœur ; cette commémoration apparaît trop centrée sur la Prusse et trop peu sur la glorification du peuple allemand dans son ensemble."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Faits Divers",
    "title": "Mystérieux assassinat",
    "summary": "À Toulouse, une compagnie du 53e régiment d'infanterie a découvert un cadavre atrocement mutilé dans un puits. L'enquête progresse grâce aux confidences d'un allumeur de gaz sur des suspects.",
    "paragraphs": [
      "Une compagnie du 53e régiment d'infanterie effectuait, hier après-midi, rue des Minimes, à Toulouse, des exercices de service en campagne. Le capitaine commandant, perché sur la margelle d'un puits, aperçut un volumineux paquet flottant à la surface de l'eau, maculé de sang.",
      "Les pompiers, mandés sur les lieux, remontèrent le paquet : il contenait le cadavre d'un jeune homme âgé de vingt-quatre à vingt-cinq ans. Le corps portait au sommet du crâne une affreuse blessure béante.",
      "Personne n'a encore pu identifier la victime. Quatre ou cinq vagabonds trouvés dans les parages ont été arrêtés par les autorités. Le seul indice sérieux consiste dans les renseignements fournis par un allumeur de gaz, qui a entendu deux individus discuter du crime près du canal du Midi."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Tentative criminelle à Fontenay-sous-Bois",
    "summary": "Poussée par la jalousie après une rupture, la nommée Boulanger a été arrêtée à Fontenay-sous-Bois pour avoir incendié le logement de son ancien amant, le jardinier Pomié.",
    "paragraphs": [
      "Une tentative criminelle, ayant la jalousie pour mobile, a été commise à Fontenay-sous-Bois, dans la nuit de mardi à mercredi, par une femme cherchant à tirer vengeance de l'abandon de son amant.",
      "M. Pomié, concierge-jardinier, a découvert mercredi matin la porte de sa chambre carbonisée, le rez-de-chaussée de la villa où il travaille ayant été ravagé par un incendie volontaire. La femme Boulanger, son ancienne maîtresse, a été appréhendée par la police et est passée aux aveux."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Actualité",
    "title": "Renflouement de la Russie",
    "summary": "Le navire « Russie » a été extrait des eaux avec succès et transféré au bassin de radoub de la Joliette. Si la coque est intacte, les machines doivent être intégralement remplacées.",
    "paragraphs": [
      "Dans la journée d'hier, les vapeurs de sauvetage ont réussi à extraire l'eau et le sable qui encombraient la cale du navire « Russie ». Le bâtiment a été complètement redressé, puis conduit au bassin de radoub à la Joliette.",
      "La coque du paquebot naufragé est relativement en bon état. La principale avarie consiste dans l'envasement des machines, dont il sera nécessaire de procéder au remplacement complet."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Social / Politique",
    "title": "Les officiers de pompiers",
    "summary": "Un décret présidentiel tente de clore le différend entre la ville de Paris et le ministère de la Guerre concernant les conditions d'avancement des lieutenants du corps des sapeurs-pompiers.",
    "paragraphs": [
      "Le Petit Parisien a plusieurs fois entretenu ses lecteurs des difficultés auxquelles donne lieu, entre le conseil municipal de Paris et le ministère de la Guerre, l'administration du régiment des sapeurs-pompiers.",
      "La Ville souhaiterait obtenir pour les lieutenants l'avancement sur place, tandis que l'autorité militaire refuse de les immobiliser indéfiniment dans le service des incendies. Un décret vient d'être signé par le Président de la République afin de permettre aux lieutenants de passer un temps plus long dans le service d'incendie."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les sans famille",
    "summary": "M. Turner neutralise un malfaiteur d'une violence extrême avant de découvrir le cadavre d'une femme à la villa Beau Site, tragédie dont les circonstances odieuses laissent présager un crime prémédité.",
    "paragraphs": [
      "Peu à peu, on sentait une sorte de déception, de crainte et de colère monter en lui. Ses lèvres grimaçaient. Son visage, déjà rebutant, prenait une expression de férocité. D'un geste rapide comme la foudre, il sortit un couteau énorme, mais M. Turner l'avait déjà saisi.",
      "Plus tard, à Roquebrune, M. Turner et Coquenard découvrirent la villa Beau Site. À l'intérieur, le cadavre de la malheureuse femme gisait au milieu du salon, dans une mare de sang. Elle avait été frappée par derrière."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Actualité",
    "title": "Mort de la Reine Victoria",
    "summary": "Les funérailles de la reine Victoria sont fixées au 2 février à Osborne House. L'empereur d'Allemagne et le roi Édouard VII sont présents, alors que le Lancet précise les causes médicales du déclin royal.",
    "paragraphs": [
      "La date des funérailles de la reine Victoria est officiellement fixée au 2 février. La chambre mortuaire est située à Osborne House. La reine est vêtue de blanc et un couvre-pieds de soie la recouvre.",
      "Le journal médical le Lancet publiera cette semaine une description de la maladie de la reine, montrant que sa santé était éprouvée depuis une douzaine de mois.",
      "L'empereur d'Allemagne est arrivé à Osborne et s'est joint au cortège royal. Le roi Édouard VII est revenu à Osborne et a été salué par une foule considérable."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Avènement du roi Édouard VII",
    "summary": "Le nouveau monarque Édouard VII exprime sa douleur face à la disparition de son père, le prince Albert, tout en réaffirmant son engagement strict envers le régime constitutionnel et le bien-être de son peuple.",
    "paragraphs": [
      "« Le fondement de la nation entière, et, je crois pouvoir dire, le monde entier, sympathise avec moi dans la perte éprouvée. »",
      "J'ai à peine besoin de dire que mes efforts tendront toujours à marcher sur ses traces. En recevant le pouvoir qui m'est dévolu, je suis absolument décidé à être un souverain constitutionnel dans le sens le plus strict du mot, et, tant qu'il y aura le souffle de vie en moi, je travaillerai pour le bien et l'amélioration de mon peuple.",
      "J'ai résolu d'être connu sous le nom d'Édouard, qui a été porté par six de mes ancêtres. Ce faisant, je ne déprécie pas le nom d'Albert dont j'ai hérité de mon grand et à jamais regretté père, qui est justement connu, du monde universel, je crois, sous le nom de Bon, et je désire que son nom reste à lui seul.",
      "En terminant, je mets ma confiance en le Parlement et en la nation, pour m'aider dans les devoirs ardus qui m'incombent par héritage et auxquels je suis décidé à vouer tous mes efforts pendant le reste de ma vie."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Proclamations officielles du nouveau Roi",
    "summary": "La Gazette confirme les titres officiels du roi Albert-Édouard. Les fonctionnaires sont appelés à maintenir leurs fonctions et les Chambres se réuniront pour voter une adresse de condoléances officielle.",
    "paragraphs": [
      "La Gazette publie également la proclamation officielle de haut et puissant prince Albert-Édouard comme roi du Royaume-Uni de la Grande-Bretagne, défenseur de la foi et empereur de l'Inde.",
      "Londres, 24 janvier. Un second supplément extraordinaire de la Gazette publie une proclamation par laquelle le roi requiert toute personne en possession d'un poste quelconque au moment de la mort de la reine, de rester à son poste et de continuer à remplir ses fonctions.",
      "Londres, 24 janvier. Un message du roi sera lu demain à la Chambre des lords par le premier ministre et à la Chambre des communes par le premier lord de la Trésorerie. Les deux Chambres voteront ensuite une adresse de condoléances à l'occasion de la mort de la reine."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Chronique de Londres",
    "title": "Cérémonies de proclamation du Roi",
    "summary": "Le roi Édouard VII a été proclamé au palais de Saint-James lors d'une cérémonie solennelle, marquée par le cri traditionnel « God save the King » et l'allégeance formelle de la Cité de Londres.",
    "paragraphs": [
      "Londres, 24 janvier. Ce matin, à neuf heures, le roi Édouard VII a été proclamé publiquement roi d'Angleterre et d'Irlande et empereur des Indes, au palais de Saint-James, en présence d'une nombreuse assemblée.",
      "Le héraut lit alors d'une voix vibrante la proclamation traditionnelle, annonçant l'avènement de très haut et très puissant prince Albert-Édouard comme roi de Grande-Bretagne et d'Irlande, et empereur de l'Inde.",
      "Quand est finie la lecture, le roi d'armes crie à haute voix : « God save the King » ; Dieu sauve le roi. Après avoir entendu la lecture de la proclamation, le lord-maire répond par la phrase d'usage, que le lord-maire, les aldermen et les citoyens de la Cité de Londres s'engagent à rendre allégeance au roi Édouard VII."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Chronique de Londres",
    "title": "La physionomie de Londres après le deuil",
    "summary": "Londres, en deuil suite au décès de la reine Victoria, voit ses théâtres fermer ses portes, ses magasins se draper de noir et ses rues s'orner de drapeaux cravatés de crêpe alors que les portraits royaux s'arrachent.",
    "paragraphs": [
      "Londres, 24 janvier. Sans être précisément anormale, la physionomie de Londres présente certaines particularités caractéristiques. D'abord, les théâtres et les music-halls sont fermés.",
      "Aux devantures de nombreux magasins, le deuil de la reine est affiché sur des planches peintes en noir. On voit, aux fenêtres, des drapeaux cravatés de crêpe, et beaucoup de cochers arborent des rubans noirs à leur chapeau.",
      "Les camelots font de brillantes affaires en vendant des photographies de la reine Victoria."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Retour de l'ambassadeur d'Angleterre à Paris",
    "summary": "Sir Edmund Monson est de retour à Paris. Il prépare activement, en concertation avec M. Herbert, l'organisation du service funèbre en mémoire de la défunte souveraine, prévu pour le 1er février.",
    "paragraphs": [
      "Sir Edmund Monson est arrivé hier matin à Paris, à onze heures. Après avoir pris connaissance de quelques télégrammes, l'ambassadeur a expédié plusieurs affaires pressantes et s'est entretenu avec M. Herbert de la célébration d'un service funèbre qui doit avoir lieu à Paris le 1er février."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Visite du Président de la République à l'ambassade",
    "summary": "Au lendemain de l'annonce du décès de la reine Victoria, le Président Émile Loubet s'est rendu à l'ambassade d'Angleterre pour présenter ses condoléances, visite retournée aussitôt par l'ambassadeur à l'Élysée.",
    "paragraphs": [
      "Le Président de la République, avisé officiellement par un télégramme de la mort de la reine Victoria, s'est rendu hier à quatre heures à l'ambassade d'Angleterre.",
      "M. Émile Loubet s'est très cordialement entretenu pendant un quart d'heure avec l'ambassadeur d'Angleterre. À quatre heures et demie, l'ambassadeur d'Angleterre s'est présenté au palais de l'Élysée pour rendre au chef de l'État la visite que celui-ci lui avait faite quelques instants auparavant."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Condoléances officielles en Italie",
    "summary": "À Rome, M. Saracco a rendu un hommage solennel à la mémoire de la reine Victoria devant la Chambre des députés, avant de suspendre la séance en signe de deuil officiel.",
    "paragraphs": [
      "Rome, janvier. M. Saracco fait l'éloge de la reine Victoria à la Chambre des députés ; il propose d'envoyer une dépêche de condoléances à la Chambre des communes et de lever la séance en signe de deuil. Les propositions sont approuvées."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Guerre",
    "title": "Nouvelles du front en Afrique du Sud",
    "summary": "Les hostilités persistent en Afrique du Sud. Entre captures de reconcentrados, arrestations pour espionnage à Kimberley et attaques de convois, le War Office dresse un bilan quotidien des pertes militaires.",
    "paragraphs": [
      "Vryburg, 22 janvier. Une femme boer, amenée comme reconcentrado, a été capturée avec son escorte par des Boers en armes, puis remise en liberté.",
      "Kimberley, 23 janvier. Les troupes anglaises ont arrêté cinq individus soupçonnés d'espionnage. Un convoi a été attaqué près de Wachteenbestje-Pan, les Boers ayant été repoussés.",
      "Liste quotidienne des pertes publiées par le War Office : un tué, un mort de maladie, un malade, sept blessés."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie à Montréal",
    "summary": "Un incendie dévastateur ravage le quartier du commerce de gros à Montréal. Dix magasins et un édifice attenant au Board of Trade sont en proie aux flammes, causant des pertes chiffrées à plusieurs millions.",
    "paragraphs": [
      "Montréal, janvier. Un incendie formidable a éclaté dans le quartier du commerce de gros. Dix magasins et un édifice qui se trouvent près du Board of Trade sont en proie aux flammes. Les dégâts s'élèvent déjà à plusieurs millions de dollars."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique intérieure",
    "title": "Chambre des députés : Séance du 24 janvier",
    "summary": "La Chambre des députés rend hommage à la reine Victoria et poursuit ses travaux législatifs avec l'adoption du passage à la discussion des articles du projet de loi sur les associations.",
    "paragraphs": [
      "M. Waldeck-Rousseau, président du Conseil, a annoncé à la Chambre le deuil qui atteint l'Angleterre. La Chambre s'est associée, par une approbation unanime, aux regrets exprimés par le gouvernement.",
      "La Chambre a ensuite repris le débat sur la loi relative aux associations. Après les interventions des députés, la discussion générale a été close et le passage à la discussion des articles a été voté."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique intérieure",
    "title": "Sénat : Séance du 24 janvier",
    "summary": "Le Sénat, après une communication de M. Delcassé sur le décès de la reine Victoria, a poursuivi l'examen de la réforme des droits de succession et adopté plusieurs articles du projet de loi.",
    "paragraphs": [
      "Après une communication de M. Delcassé, ministre des Affaires étrangères, relative à la mort de la reine Victoria, le Sénat a repris la discussion de la loi sur la réforme des droits de succession.",
      "Les articles 4, 5, 6, 7, 8 et 10 ont été adoptés avec de légères modifications."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Social",
    "title": "La Légion d'honneur dans les Colonies",
    "summary": "Sur proposition du ministre des Colonies, plusieurs personnalités éminentes, dont MM. Jolly, Datmes, Lourme, Moracchini et Le Fol, sont nommées ou promues dans l'ordre de la Légion d'honneur.",
    "paragraphs": [
      "Sur la proposition du ministre des Colonies, plusieurs personnalités ont été promues dans l'ordre de la Légion d'honneur, incluant MM. Jolly, Datmes, Lourme, Moracchini, Le Fol, ainsi que divers administrateurs coloniaux."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Société",
    "title": "Santé du compositeur Verdi",
    "summary": "À Milan, l'état de santé du célèbre compositeur Verdi demeure préoccupant. Une crise soudaine a fait craindre le pire, bien qu'un calme relatif soit revenu, laissant peu d'espoir aux médecins.",
    "paragraphs": [
      "Milan, 24 janvier. Le bulletin de santé de Verdi indique qu'à quatre heures trente, une crise soudaine a fait craindre que la mort ne fût imminente. L'illustre compositeur a ouvert les yeux et semble plus calme, bien que les médecins conservent peu d'espoir."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Agriculture",
    "title": "La récolte de vin en 1899",
    "summary": "Le ministère de l'Agriculture publie les chiffres de la récolte vinicole de 1899. La Dordogne et le Puy-de-Dôme se distinguent par une production abondante, avec un rendement national moyen de 18,5 hectolitres par hectare.",
    "paragraphs": [
      "Le ministre de l'Agriculture a communiqué les chiffres officiels relatifs à la récolte de vin pour l'année courante. Les départements de la Dordogne et du Puy-de-Dôme, parmi d'autres régions viticoles, présentent une production particulièrement abondante cette saison.",
      "Le rendement moyen est estimé, pour l'ensemble du territoire, à environ 18,5 hectolitres par hectare. Par ailleurs, la consommation familiale de ce cru est évaluée à 10 millions d'hectolitres pour l'année."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits divers",
    "title": "Une conséquence inattendue de la mort du Président Faure",
    "summary": "Le décès du Président Félix Faure provoque un essor industriel à Saint-Étienne : deux cents métiers ont été activés pour répondre à la demande soudaine et massive de tissus de deuil, totalisant 300 000 kilogrammes.",
    "paragraphs": [
      "La disparition du Président Faure a engendré une conséquence commerciale inattendue : une hausse soudaine et massive de la demande en tissus de deuil dans le bassin industriel de Saint-Étienne.",
      "L'activité de production a atteint un volume de 300 000 kilogrammes, nécessitant la mise en service de deux cents métiers supplémentaires afin de satisfaire, dans les meilleurs délais, l'afflux des commandes nationales."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Vie académique",
    "title": "Séance à l'Académie française",
    "summary": "En raison du deuil national, la séance de l'Académie française d'hier fut d'une sobriété remarquable, limitée à l'hommage funèbre rendu au duc de Broglie avant la levée immédiate de l'assemblée.",
    "paragraphs": [
      "La séance de l'Académie française tenue hier fut d'une brièveté exceptionnelle. Les membres présents ont procédé, dans le recueillement, à l'éloge funèbre du duc de Broglie.",
      "Conformément aux usages en pareille circonstance, la séance fut levée après une dizaine de minutes seulement, en signe de deuil solennel."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Conférences",
    "title": "Puissance maritime de l'Allemagne",
    "summary": "Présidée par M. Guillain, une conférence de M. Édouard Lockroy a mis en lumière l'essor spectaculaire de la marine allemande, soulignant les avantages économiques et industriels découlant de ce progrès technique naval.",
    "paragraphs": [
      "M. Édouard Lockroy a prononcé une conférence remarquée sur le développement de la puissance maritime de l'Allemagne. L'orateur a souligné avec précision les progrès considérables accomplis par la marine allemande au cours des vingt dernières années.",
      "Cette conférence, qui fut placée sous la présidence de M. Guillain, a mis en relief les bénéfices tant économiques qu'industriels découlant directement de cet essor naval technique."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "Banquet des Enfants de l'Isère",
    "summary": "La société des Enfants de l'Isère a honoré M. Désiré Giraud lors d'un banquet festif, célébrant sa récente nomination au grade de chevalier dans l'ordre de la Légion d'honneur par des toasts chaleureux.",
    "paragraphs": [
      "La société des Enfants de l'Isère a organisé, avec faste, un banquet destiné à célébrer la nomination récente de M. Désiré Giraud au grade de chevalier dans l'ordre de la Légion d'honneur.",
      "La réunion, empreinte de convivialité, a été ponctuée par plusieurs toasts portés en l'honneur du nouveau décoré, saluant son engagement et son mérite."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Social",
    "title": "Société des sauveteurs médaillés",
    "summary": "Sous la présidence de M. Bourgeois, la Société de retraites des sauveteurs médaillés a tenu hier son assemblée générale afin de procéder au renouvellement partiel des membres de son conseil d'administration.",
    "paragraphs": [
      "Les membres de la Société de retraites des sauveteurs médaillés se sont réunis hier, sous la présidence de M. Bourgeois, pour traiter des affaires courantes et administratives de l'association.",
      "Au cours de cette séance, de nouveaux administrateurs ont été nommés pour une durée de trois ans afin d'assurer la continuité de la gestion des retraites et le bon fonctionnement des œuvres sociales de la société."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits divers",
    "title": "La grève de Montceau-les-Mines",
    "summary": "Une manifestation importante s'est déroulée à Montceau-les-Mines devant la direction des mines de Blanzy. Les autorités judiciaires et préfectorales demeurent vigilantes face à la situation.",
    "paragraphs": [
      "Une manifestation imposante a eu lieu aujourd'hui à Montceau-les-Mines. Les grévistes, en nombre, ont défilé devant les bureaux de la direction des mines de Blanzy au son de l'Internationale, marquant ainsi leur mécontentement.",
      "Le procureur de la République est arrivé sur les lieux dans l'après-midi, tandis que les autorités restent mobilisées et vigilantes pour prévenir tout trouble à l'ordre public dans le bassin minier."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Tribunaux",
    "title": "L'affaire de la femme du douanier",
    "summary": "La cour d'assises de la Dordogne a acquitté le douanier Puységur, auteur d'un drame passionnel, après que les deux victimes, désormais guéries, ont survécu à ses tirs.",
    "paragraphs": [
      "Devant la cour d'assises de la Dordogne, le douanier Puységur a comparu pour répondre d'une affaire passionnelle tragique survenue récemment dans la région.",
      "Ayant découvert l'infidélité de sa femme, il avait tenté de les abattre tous deux. Les deux époux étant désormais guéris de leurs blessures, le jury, tenant compte de ces circonstances, a prononcé l'acquittement du douanier."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Tribunaux",
    "title": "Condamnation pour vol de fiacre",
    "summary": "Le tribunal correctionnel de Meaux a lourdement sanctionné un vol qualifié. Le nommé Passe a été condamné à quatre ans de prison, tandis que son complice écope de quatre mois.",
    "paragraphs": [
      "Le tribunal correctionnel de Meaux a condamné hier un individu nommé Passe à quatre ans d'emprisonnement pour le vol qualifié d'un fiacre commis dans la commune.",
      "Son complice, surnommé « Bec de Gaz », a été reconnu coupable de complicité de vol et a été condamné par le tribunal à une peine de quatre mois de prison ferme."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Judiciaire",
    "title": "Amnistie sur le Métropolitain",
    "summary": "La neuvième chambre a précisé que la loi d'amnistie ne concerne pas les accidents survenus sur le chantier du Métropolitain. Un procès est fixé à huitaine pour l'un des responsables.",
    "paragraphs": [
      "La neuvième chambre a rendu ce matin un jugement précisant que la loi d'amnistie ne s'applique aucunement aux affaires liées aux accidents survenus lors des travaux de construction du Métropolitain.",
      "Un prévenu, impliqué dans un accident du travail ayant causé l'amputation de la main d'un enfant sur le chantier, sera jugé à huitaine par la juridiction compétente."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Judiciaire",
    "title": "Le pourvoi de Lévy",
    "summary": "La chambre criminelle de la Cour de cassation a statué hier sur le pourvoi de Lévy, condamné à mort pour assassinat. La défense conteste la régularité du serment des témoins entendus lors du procès aux assises.",
    "paragraphs": [
      "La chambre criminelle de la Cour de cassation a examiné hier le pourvoi de Lévy, condamné à la peine capitale pour l'assassinat d'une marchande de vins.",
      "Le recours en cassation repose sur une irrégularité soulevée par la défense concernant la prestation de serment des témoins ayant déposé lors de l'audience aux assises."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits divers",
    "title": "Assassinat d'un rentier à Étoile",
    "summary": "Un crime odieux a été perpétré dans le village d'Étoile. M. Victor Jardin, un rentier, a été découvert sans vie à son domicile dans des circonstances qui demeurent encore à éclaircir pour les enquêteurs.",
    "paragraphs": [
      "Un assassinat a été commis au village d'Étoile. M. Victor Jardin, un rentier, a été retrouvé mort dans sa cuisine, victime d'un crime violent dont les circonstances exactes restent encore à établir par les autorités."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits divers",
    "title": "Victime de son bon coup",
    "summary": "Louise Boninard, une malfaitrice ayant usurpé la condition de mendiante pour dévaliser une concierge rue Doudeauville après avoir partagé son bouillon, a été appréhendée par les forces de l'ordre.",
    "paragraphs": [
      "Une femme se faisant passer pour une mendiante a dérobé la garde-robe d'une concierge rue Doudeauville, après s'être fait offrir par cette dernière un bol de bouillon.",
      "La voleuse, identifiée comme étant Louise Boninard, a été arrêtée par les agents de la force publique et immédiatement écrouée pour répondre de ses actes."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Santé Publique",
    "title": "État sanitaire de la ville de Paris",
    "summary": "La statistique municipale enregistre une hausse de la mortalité parisienne cette semaine avec 1 069 décès, marqués par la forte prévalence des affections respiratoires et de la phtisie pulmonaire.",
    "paragraphs": [
      "Le service de la statistique municipale a compté, pour la semaine écoulée, 1 069 décès, soit une augmentation par rapport à la moyenne habituelle des semaines de janvier, établie à 1 028.",
      "La fièvre typhoïde a causé 10 décès. La variole a causé 6 décès, contre 11 la semaine précédente. Le nombre de nouveaux cas signalés demeure une préoccupation constante, soulignant la nécessité pour la population parisienne de se conformer aux mesures de vaccination.",
      "Les autres maladies épidémiques conservent une fréquence moyenne : 8 décès pour la rougeole, 2 pour la scarlatine, la coqueluche et la diphtérie.",
      "La diarrhée infantile a causé 19 décès chez les enfants de 0 à 1 an.",
      "Les affections inflammatoires de l'appareil respiratoire ont frappé durement, totalisant 19 bronchites aiguës, 35 bronchites chroniques et 44 pneumonies. La grippe est responsable de 12 décès.",
      "La phtisie pulmonaire demeure un fléau avec 225 décès. Parmi les autres pathologies graves, on dénombre 72 décès par maladies organiques du cœur, 68 par cancer et 42 par débilité sénile.",
      "Le bilan des décès comprend également 27 morts violentes, dont 14 suicides."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "État civil",
    "title": "Mouvements de population à Paris",
    "summary": "Le bilan démographique hebdomadaire de la capitale fait état de la célébration de 502 mariages et de l'enregistrement de 1 131 naissances, dont 314 enfants issus d'unions illégitimes.",
    "paragraphs": [
      "On a célébré à Paris 502 mariages durant la semaine écoulée.",
      "On a enregistré la naissance de 1 131 enfants vivants, dont 581 garçons et 550 filles ; parmi ces nouveaux-nés, 817 sont issus d'unions légitimes et 314 sont nés hors mariage."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Faits Divers",
    "title": "Incident sur le chantier de construction du Chateaubriand",
    "summary": "À Bordeaux, la mise à flot du navire « Le Chateaubriand » a connu un échec ce matin. Le bâtiment, malgré les efforts déployés, est resté bloqué sur le chantier, contraignant le personnel à reporter l'opération ultérieurement.",
    "paragraphs": [
      "BORDEAUX. Ce matin devait avoir lieu, dans un chantier de constructions maritimes, la mise à flot du navire « Le Chateaubriand ». Toutefois, le navire, bien que débarrassé de toutes ses attaches, n'a progressé que de quelques mètres malgré les efforts conjugués du personnel et des remorqueurs.",
      "Compte tenu de l'état de la marée, l'opération a dû être interrompue et renvoyée à une date ultérieure. Fort heureusement, la position actuelle du bâtiment ne présente aucun caractère critique."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Nouvelles des scènes parisiennes",
    "summary": "L'actualité théâtrale de ce soir : la première d'« En fête » à l'Athénée, le succès financier historique de M. Worms, les préparatifs des bals de l'Opéra et les prochaines affiches du théâtre Antoine.",
    "paragraphs": [
      "Ce soir, à l'Athénée, aura lieu la première représentation de « En fête », pièce en cinq actes de M. Auguste Germain.",
      "Le chiffre de la recette pour la représentation d'adieux de M. Worms est le plus élevé jamais atteint, surpassant ainsi les records établis par MM. Delaunay et Coquelin.",
      "À l'Opéra, le directeur du Châtelet autorisera son personnel à figurer dans le grand cortège du deuxième bal masqué, où sera présentée la féerie « Le Petit Chaperon rouge » le 2 février.",
      "Le théâtre Antoine annonce sa programmation future composée des œuvres suivantes : « La Petite Paroisse », « La Fille Élisa », « La Main gauche », « Le Marché », « La Parisienne » et « La Dupe ».",
      "Les artistes de l'Hippodrome donneront, au profit de leurs confrères, une grande matinée et une soirée de gala qui incluront un défilé militaire."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Informations provinciales",
    "title": "Nomination au Grand-Théâtre de Bordeaux",
    "summary": "M. Frédéric Boyer, baryton et actuel codirecteur du théâtre du Capitole de Toulouse, a été officiellement nommé directeur du Grand-Théâtre de Bordeaux pour la saison prochaine.",
    "paragraphs": [
      "M. Frédéric Boyer, le baryton bien connu, actuellement codirecteur du théâtre du Capitole de Toulouse, vient d'être nommé directeur du Grand-Théâtre de Bordeaux pour la saison prochaine."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Concerts et divertissements",
    "title": "Programme des spectacles",
    "summary": "Les Folies-Bergère inaugurent demain le ballet-pantomime « Napoli » avec Mlles Diéterle et Christine Kerf. Le cirque Medrano présente, pour sa part, un répertoire renouvelé d'acrobates et d'artistes équestres.",
    "paragraphs": [
      "Demain aura lieu, aux Folies-Bergère, la première représentation de « Napoli », grand ballet-pantomime en quatre tableaux, interprété par Mlle Diéterle et Mlle Christine Kerf.",
      "Le cirque Medrano propose une série de numéros variés, incluant les Richardinis, les Rixors, Ascanio et ses singes, ainsi que diverses troupes équestres et clowns célèbres."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Courrier Orphéonique",
    "title": "Concours musicaux et festivals",
    "summary": "Le calendrier des grands rendez-vous musicaux de 1899 se précise. Fécamp, Alger, La Roche-sur-Yon, Roubaix et Niort organisent leurs festivités, tandis que les règlements se modernisent pour les futures rencontres.",
    "paragraphs": [
      "Le concours international de musique de Fécamp est définitivement fixé aux 26 et 27 mai. Le comité organisateur est désormais constitué et pleinement à l'œuvre pour assurer le succès de cette manifestation.",
      "Le comité d'organisation du concours international d'Alger a arrêté au 31 janvier la date de clôture des inscriptions, décision motivée par l'afflux considérable de demandes de participation provenant de nombreuses sociétés musicales.",
      "Par ailleurs, des festivals orphéoniques sont annoncés à La Roche-sur-Yon, à Roubaix et à Niort. À Niort, M. Alfred Bruneau est tout particulièrement pressenti pour assumer la présidence d'honneur de cette solennité.",
      "Enfin, l'association des sociétés musicales poursuit ses travaux relatifs à l'élaboration d'un règlement type destiné aux futurs concours. Cette initiative vise à harmoniser les pratiques et à remédier aux usages désormais jugés obsolètes lors de ces rencontres artistiques."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Sports",
    "title": "Football et aérostation",
    "summary": "L'équipe du Civil-Service de Londres arrive à Paris pour affronter le Racing-Club de France à Auteuil, tandis que le comte de la Vaulx soutient la création de l'Aéro-Club belge.",
    "paragraphs": [
      "L'équipe anglaise du Civil-Service de Londres arrive à Paris pour disputer, dimanche, une rencontre contre le Racing-Club de France, sur le terrain d'Auteuil.",
      "Le comte de la Vaulx, au lendemain de sa conférence consacrée à son voyage en Russie, apporte son concours à la création de l'Aéro-Club belge, placé sous le haut patronage de l'Automobile-Club de Belgique."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Navigation",
    "title": "Mouvements des paquebots",
    "summary": "Relevé des mouvements maritimes : arrivées à Saint-Nazaire et Pointe-à-Pitre, et départs signalés pour les paquebots Ville de la Ciotat, Chili et La Plata.",
    "paragraphs": [
      "Le paquebot France est arrivé à Saint-Nazaire le 23 janvier.",
      "Le paquebot Versailles est arrivé à Pointe-à-Pitre le 22 janvier.",
      "Le paquebot Ville de la Ciotat a quitté Port-Saïd le 13 janvier.",
      "Le paquebot Chili a quitté Dakar le 14 janvier.",
      "Le paquebot La Plata a quitté Pernambuco le 20 janvier."
    ]
  }
];
