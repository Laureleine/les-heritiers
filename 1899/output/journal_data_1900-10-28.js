// Date: 1900-10-28
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-10-28 (Version Restaurée, 26 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Politique",
    "title": "La réforme des taxes successorales",
    "summary": "M. Caillaux soumet une réforme fiscale instaurant la progressivité des droits de succession selon le degré de parenté, avec des taux échelonnés de 1 % à 15 %. Une mesure accueillie avec faveur par le pays.",
    "paragraphs": [
      "Le nouveau système de taxes successorales prévoit une variation de 1 % à 2,50 % en ligne directe, ce dernier taux n'étant exigé qu'au-delà de 80 000 francs. Entre époux, la taxe oscillera de 3,75 % à 7 % et s'accroîtra selon l'éloignement de la parenté. Au-delà du sixième degré, l'échelle atteindra 15 %.",
      "Un dispositif analogue a été arrêté pour les donations entre vifs.",
      "Telles sont les grandes lignes de la réforme présentée par M. Caillaux comme une formule de conciliation, laquelle semble recevoir un accueil favorable de la part du pays."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Diplomatie",
    "title": "Négociations en Chine",
    "summary": "Les pourparlers en Chine reprennent suite à l'arrivée des ministres étrangers. Pékin envisage le retour de l'Empereur à condition que les puissances occidentales garantissent sa souveraineté légitime.",
    "paragraphs": [
      "Par suite du remplacement du ministre d'Angleterre, de la maladie de M. Pichon et du déplacement de la légation de Russie, les négociations avaient dû être suspendues. Cependant, le ministre britannique étant arrivé, ainsi que les représentants allemand et russe, des mesures sont prises pour la reprise effective des pourparlers.",
      "Des informations de source japonaise annoncent que l'impératrice est souffrante. Concernant l'empereur, un journal de Rome rapporte son intention de regagner Pékin. Le maréchal de Waldersee envisagerait d'envoyer 5 000 hommes pour l'escorter.",
      "Une dépêche de Shanghaï fait état d'un édit impérial du 13 octobre stipulant que l'empereur rentrera à Pékin après la conclusion de la paix, sous réserve que les nations occidentales consentent à ne point le priver de son autorité légitime."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Diplomatie",
    "title": "La Russie et la Mandchourie",
    "summary": "Le tsar aurait été formellement sollicité par l'empereur de Chine afin de placer les provinces de Mandchourie sous la protection directe de l'Empire russe.",
    "paragraphs": [
      "Le tsar aurait reçu de l'empereur de Chine une lettre lui demandant expressément de placer les provinces de Mandchourie sous sa protection impériale."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame à Tournai",
    "summary": "Un tragique fait divers s'est déroulé près de Tournai : un vannier ambulant a été mortellement frappé d'un coup d'épée par un cabaretier lors d'une rixe violente. Le meurtrier a été arrêté.",
    "paragraphs": [
      "Plusieurs vanniers ambulants se trouvaient dans les environs de Tournai avec une roulotte. Étant en état d'ivresse, ils furent expulsés de plusieurs cabarets successifs.",
      "Lors d'une rixe avec un cabaretier, ce dernier s'arma d'une épée de combat et, se ruant sur le nommé Thiri père, le transperça de part en part. La victime a succombé à ses blessures et le coupable a été arrêté par les autorités."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident de tramway à Liège",
    "summary": "À Herstal, un tramway électrique a percuté une mère et son enfant. Ce dernier a été tué sur le coup tandis que la mère, traumatisée par la tragédie, a sombré dans la folie.",
    "paragraphs": [
      "Un terrible accident de tramway s'est produit à Herstal. La nommée Dumont traversait la rue avec son enfant quand celui-ci, échappant à sa vigilance, courut au milieu de la voie.",
      "Un tramway électrique survint, percutant violemment la mère et son fils. L'enfant eut la tête broyée sous les roues et la mère fut grièvement blessée. Sous le choc de ce drame, la malheureuse a sombré dans la démence."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Proclamation de l'annexion du Transvaal",
    "summary": "La cérémonie solennelle de l'annexion du Transvaal à l'Empire britannique a été célébrée à Pretoria le 25 octobre. L'étendard royal fut hissé sous les honneurs militaires pour acter l'annexion officielle du territoire.",
    "paragraphs": [
      "La cérémonie de la proclamation de l'annexion du Transvaal à l'Empire britannique a eu lieu à Pretoria le 25 octobre dernier. L'étendard royal a été hissé, l'hymne national a été joué avec solennité, et les troupes ont défilé devant le gouverneur militaire pour officialiser cet acte administratif."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Résistance des Boers",
    "summary": "Lord Roberts communique sur les récents engagements : si le général Barton a dispersé les troupes de De Wet près de Frederikstadt, les embuscades se multiplient à Lydenburg, Zeerust et Philippolis.",
    "paragraphs": [
      "Lord Roberts télégraphie que le général Barton a dispersé des Boers commandés par De Wet près de Frederikstadt. Les pertes anglaises s'élèvent à plusieurs tués et blessés, tandis que les forces boers ont subi des pertes et des captures au cours de l'engagement.",
      "D'autres opérations sont signalées, notamment à Lydenburg, Zeerust et Philippolis, où des détachements anglais ont été attaqués ou sont tombés dans des embuscades tendues par les insurgés."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Vie Parisienne",
    "title": "La fête de l'Hôtel de Ville",
    "summary": "La municipalité a offert une réception mémorable à l'Hôtel de Ville. Douze mille invités ont admiré les illuminations féeriques et participé aux festivités organisées en l'honneur de l'Exposition.",
    "paragraphs": [
      "La municipalité parisienne a offert hier soir une grande fête à l'Hôtel de Ville à l'occasion de l'Exposition universelle. Les invités, au nombre de douze mille, ont pu admirer des décorations lumineuses féeriques illuminant la place et le palais.",
      "La fête comprenait des concerts, des harmonies et un bal installé sur la place Saint-Gervais. Les salons ont été richement décorés, rappelant, par leur splendeur, les réceptions données en l'honneur des marins russes."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Derniers jours de l'Exposition",
    "summary": "Alors que l'Exposition touche à sa fin, les préparatifs pour la fermeture définitive du 12 novembre s'organisent. M. Alfred Picard est distingué par le gouvernement des Pays-Bas.",
    "paragraphs": [
      "La prolongation de six jours de l'Exposition a redonné un aspect paisible au site. Les programmes d'étude ont été remaniés et l'on se prépare désormais, non sans émotion, à la fermeture définitive prévue pour le 12 novembre.",
      "Par ailleurs, le gouvernement des Pays-Bas a décerné plusieurs distinctions honorifiques aux membres du haut personnel de l'Exposition. Parmi eux, M. Alfred Picard a été nommé grand-croix de l'ordre du Lion néerlandais."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Suicide d'un négociant",
    "summary": "M. Estragnat, négociant du quartier Saint-Marcel, s'est donné la mort par arme à feu. Le défunt était cité dans une affaire judiciaire instruite par M. le juge Leblond.",
    "paragraphs": [
      "M. Estragnat, un négociant du quartier Saint-Marcel, impliqué dans une affaire instruite par M. le juge Leblond, s'est suicidé chez lui en se tirant deux coups de feu. Sa femme, absente au moment des faits, a découvert son corps avec le commissaire de police."
    ]
  },
  {
    "id": 11,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incident sur la ligne de Vincennes",
    "summary": "Un court-circuit sur un wagon de la ligne de Vincennes a semé l'émoi ce matin. Grâce à la prompte intervention des employés, l'incendie a été circonscrit et le trafic rétabli après neuf heures.",
    "paragraphs": [
      "Le wagon-moteur d'un train a été victime d'un court-circuit à deux cents mètres de la station de Vincennes, provoquant une vive émotion parmi les voyageurs qui s'apprêtaient à descendre sur la voie.",
      "Fort heureusement, les employés ont pu empêcher les passagers de sortir et ont fait couper le courant. Il s'est avéré que le frein, en surchauffe, avait pris feu, projetant de nombreuses étincelles.",
      "La circulation n'a pu être rétablie qu'après neuf heures du matin."
    ]
  },
  {
    "id": 12,
    "page": 3,
    "category": "Faits Divers",
    "title": "Victime des courses",
    "summary": "Désespéré par des pertes répétées aux jeux et aux courses, un jeune homme a mis fin à ses jours dans un hôtel du Pré-Saint-Gervais.",
    "paragraphs": [
      "Un jeune homme a mis fin à ses jours dans un hôtel du Pré-Saint-Gervais, après avoir dilapidé son argent dans les tripots et sur les hippodromes, succombant ainsi à un état de désespoir profond."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie rue de la Folie-Méricourt",
    "summary": "Un incendie a éclaté hier matin dans les écuries de M. Bautfol, rue de la Folie-Méricourt. Les pompiers ont maîtrisé le sinistre après une heure de lutte acharnée.",
    "paragraphs": [
      "Un incendie violent s'est déclaré hier matin, au 15, rue de la Folie-Méricourt, dans les écuries appartenant à M. Bautfol, le feu ayant pris dans un tas de paille entreposé sur les lieux.",
      "Les pompiers de l'avenue de Châtillon ont lutté une heure pour venir à bout du sinistre. M. Bottolier-Lasquin, commissaire de police, a ouvert une enquête pour déterminer les causes exactes de cet incendie."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie rue de la Roquette",
    "summary": "Un incendie a ravagé le commerce du crémier Duranton, rue de la Roquette, propageant ses flammes aux locaux d'un fabricant de sièges voisin. Les dégâts s'élèvent à dix mille francs.",
    "paragraphs": [
      "Quatre heures plus tard, un second incendie a éclaté dans le magasin de M. Duranton, crémier, au 20, rue de la Roquette, gagnant rapidement l'atelier d'un fabricant de sièges, M. Bertol.",
      "Les pompiers de la rue de Savigné ont réussi à maîtriser le feu en moins d'une heure. Les dégâts sont évalués à une dizaine de mille francs."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Exposition Universelle",
    "title": "Attractions de l'Exposition",
    "summary": "L'Exposition Universelle propose des divertissements variés, du Panorama du Mont-Blanc au Vieux Paris, sans omettre les reproductions d'art du Musée Mombur.",
    "paragraphs": [
      "L'Exposition offre des attractions variées, notamment le Panorama du Mont-Blanc au pavillon du Club Alpin au Champ-de-Mars, permettant de découvrir les sensations de la haute montagne en toute sécurité.",
      "Le Vieux Paris attire également les foules, tandis que le Musée Mombur, situé au 47, avenue de la Motte-Picquet, propose des reproductions d'art et d'actualité fort prisées du public."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Tribunaux",
    "title": "Le danger des mauvaises fréquentations",
    "summary": "La cour d'assises de la Seine a jugé le jeune Priedge, quinze ans, pour tentative d'assassinat. Reconnu coupable mais sans discernement, il est condamné à un placement en maison de correction.",
    "paragraphs": [
      "La cour d'assises de la Seine a jugé le jeune Priedge, âgé de quinze ans, accusé de tentative d'assassinat sur la personne de Mme Klein lors d'un acte de vagabondage.",
      "L'expert psychiatre a souligné la responsabilité très limitée du jeune prévenu. Le jury l'a acquitté comme ayant agi sans discernement, mais la cour a ordonné son placement dans une maison de correction jusqu'à sa majorité."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Littérature",
    "title": "Le Bigame (Roman inédit)",
    "summary": "Dans ce roman, le drame éclate lorsqu'une femme, Thérèse Rodai, reçoit une lettre accablante de son mari, Jean Rédal, lui avouant ses crimes et sa double vie.",
    "paragraphs": [
      "Au cinquième étage, une femme, en proie à une folie odieuse, chantait et riait autour d'un corps inerte.",
      "Thérèse Rodai, veillant sa petite Jeanne, reçoit une lettre de son mari, Jean Rédal, lui annonçant son intention de se suicider après avoir commis des crimes, se déclarant bigame et meurtrier."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Délégués des manufactures",
    "summary": "M. Caillaux, ministre des Finances, a reçu les délégués des fédérations des tabacs et des allumettiers afin d'examiner leurs conditions de travail et leurs prochaines revendications.",
    "paragraphs": [
      "Les délégués des fédérations des tabacs et des allumettiers ont été reçus par M. Caillaux, ministre des Finances, afin de discuter de leurs conditions de travail. Le ministre a promis d'étudier leurs réclamations pour la rédaction du prochain ordre de service."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes limitrophes",
    "summary": "La périphérie parisienne est marquée par une série de drames : suicides, accidents de la voie publique, cambriolages et agressions violentes à Levallois, Saint-Denis et Versailles.",
    "paragraphs": [
      "Rue Villy : Mme veuve Capron s'est pendue, accablée par son renvoi de l'hospice.",
      "Puteaux : Un accident de tramway a gravement blessé le cocher Joswiac.",
      "La Défense : M. Loriot, marchand de vins, a été tué par l'explosion d'un appareil à eau de seltz.",
      "Levallois-Perret : Cambriolage de l'établissement de Mme Kourleux.",
      "Bécon-les-Bruyères : M. Villars a été grièvement blessé lors d'un accident de tilbury.",
      "Villeneuve-la-Garenne : Alexis Miraux, 11 ans, a fait une chute grave d'un échafaudage.",
      "Saint-Denis : M. Léon Perret a été sauvagement agressé par une bande. Un employé des pompes funèbres a été blessé peu après au même endroit.",
      "Villejuif : Un cocher a disparu, son véhicule ayant été retrouvé abandonné.",
      "Choisy-le-Roi : M. Simon, 68 ans, s'est noyé accidentellement dans la Seine.",
      "Versailles : Le corps de M. Eugène Godeau a été découvert dans la forêt de Vélizy, victime d'une congestion."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Actualité des scènes parisiennes",
    "summary": "Sarah Bernhardt brille dans l'Aiglon au profit des artistes, tandis que la Comédie-Française et les Nouveautés confirment le succès durable de leurs programmations.",
    "paragraphs": [
      "Sarah Bernhardt joue l'Aiglon au profit de la loterie de l'Association des artistes dramatiques. La Dame de chez Maxim atteint sa 550e représentation aux Nouveautés.",
      "La Comédie-Française se dédouble entre le théâtre Sarah-Bernhardt pour Œdipe-Roi et le Nouveau-Théâtre pour Froufrou."
    ]
  },
  {
    "id": 21,
    "page": 4,
    "category": "Feuilleton",
    "title": "Ces miettes du bonheur",
    "summary": "Une confrontation brutale éclate entre M. Vernier et le braconnier Tiennet. Ce dernier, armé d'un secret sur la fidélité de Mme Vernier, cherche à détruire l'honneur du maître de forges dans un accès de vengeance.",
    "paragraphs": [
      "Irrité à son tour du ton agressif que tenait M. Tiennet, M. Vernier répliqua : « Je ne sais rien, sinon que le hasard vous a rendu détenteur d'un prétendu secret qui ne m'intéresse pas personnellement. Vous ne l'ignorez pas. »",
      "« Vous croyez ? » Le maître de forges l'interrompit : « Ce secret concerne une personne qu'à tort, la croyant digne de ma confiance, j'avais arrachée à une vie de misère et dont j'avais fait presque ma sœur. Ce n'était qu'une créature indigne. »",
      "« Si autrefois j'ai tenu à ce que sa honte ne fût pas rendue publique, je n'ai plus aujourd'hui les mêmes scrupules. À vos menaces, je devine que vous êtes disposé à dévoiler ce que vous avez surpris une nuit où vous vous étiez introduit dans mon parc. Libre à vous. »",
      "Il s'était échauffé en parlant. D'une voix sifflante, le braconnier jeta : « Prenez garde à ce que vous dites. Allons donc ! Vos propos ne m'intimident pas. » Et amèrement : « Après toutes les bontés que nous avons eues pour vous et les vôtres, il est naturel que... Des bontés qui ne vous coûtent guère, pas vrai ? »",
      "Le maître de forges frémit. À son tour ses poings se crispèrent : « Assez. Si vous ne sortez pas, je vous fais jeter dehors. Dites ce que bon vous semblera. Désormais le déshonneur de cette personne à laquelle sans doute vous faisiez allusion tout à l'heure ne m'atteint plus. Je l'ai reniée. »",
      "« Ce n'est peut-être pas ce que vous avez fait de mieux. Encore une fois, sortez, je vous l'ordonne. » Emporté par la colère, André fit un pas en avant. Tiennet ne broncha point. Il ricana : « Je sortirai tout à l'heure, quand j'aurai dit ce que j'ai à vous dire. Et dame ! ça ne va pas vous amuser, mais là, pas du tout. N'importe, je me serai vengé. Il y a assez longtemps que ça me trotte dans la tête. »",
      "M. Vernier regarda le misérable. Que signifiaient ces mots énigmatiques ? De quelle vengeance ce bandit parlait-il ? Avait-il, dissimulée sous sa blouse, une arme dont il allait se servir ? Le maître de forges se le demandait. Tiennet devina sa pensée : « Oh ! n'ayez pas peur que je vous assassine. Non. Au garde, j'aurais pu faire son affaire parce que j'avais bu, et puis, parce que c'est autre chose. Ce n'est pas ainsi que je veux me venger de vous. »",
      "« Non, ça ne ferait pas mon compte, vous ne souffririez qu'une fois. Et je veux que vous souffriez longtemps, toujours. Je vous tiens rudement. Et la haine de Tiennet, voyez-vous, vous vous en souviendrez. Jamais vous ne l'oublierez. » Était-il fou ou raillait-il ? Il faisait peur à voir, ses yeux égarés roulant dans leurs orbites.",
      "« Oui, vous faire souffrir, ce sera de la justice, puisqu'il n'y en a point sur terre. Rien pour les pauvres gueux comme moi, tout pour les riches comme vous. Tout, non pourtant. Il y a quelque chose qui vous manque, ah ! ah ! » Il ricanait. Il fit une pause. Un silence pénible pesait. Le braconnier déclara : « C'est la fidélité de vos femmes. » André sursauta. Son visage devint livide. Il fit un pas vers le misérable : « Veux-tu te taire, gueux, ou j'appelle ? »",
      "« Appelez. J'aime autant. Que tous vos domestiques accourent. Si on ne le sait pas déjà, tout le monde saura au moins que madame Vernier en aimait un autre mieux que vous. » « Tais-toi ! Tais-toi ! » Un cri montait de la gorge d'André. Mais il s'arrêta sur ses lèvres. À son front de la sueur perlait. Il avait conscience qu'un abîme s'ouvrait devant lui. Le vertige le prenait, il allait tomber.",
      "L'autre, implacable, continuait : « Ah ! ah ! vous ne parlez plus d'appeler vos domestiques, c'est dommage, vraiment. La fête eût été plus complète. Quand je vous l'aurai fait connaître tout entier, vous verrez qu'il n'est pas très rigolo pour vous. Ce que j'ai surpris le fameux soir de l'orage, ce n'est pas, comme vous, la comédie qu'on a jouée pour vous berner, mais bien ce qui s'est passé réellement. La vérité vraie, quoi. »",
      "« Vous, vous vous êtes laissé monter le coup, et de la belle façon, encore. Pour un homme de votre âge, ce n'est pas fort. Un enfant aurait peut-être vu clair là où on vous en a bouché un coin, et un rude encore. Misérable. » Le maître de forges chancela. Il dut s'appuyer à sa table de travail. Il n'avait plus la force de chasser cet homme. Mais pourquoi n'appelait-il pas ? Des domestiques étaient là dans l'office qui se chargeraient d'expulser ce bandit.",
      "André se le disait. Et pourtant il se taisait. Il écoutait, le cœur affolé, les oreilles bourdonnantes, la voix rauque de Tiennet qui poursuivait : « Oui, on vous a roulé. La femme qui a envoyé le baiser à la fenêtre, la femme qui était enfermée avec le particulier sur lequel vous avez tiré et qu'entre nous vous avez manqué beau, ce n'était pas du tout celle que vous avez trouvée dans la chambre, en rentrant. Ah mais non ! Moi, j'étais en face, je l'ai vue, cette femme, très bien vue, aussi bien que je vous vois. »",
      "« Même que ça m'a tout renversé. Car enfin, il y avait de quoi. Découvrir cette femme-là qu'on disait partout un modèle de vertu, une sainte-nitouche, dans une affaire pareille, c'était un peu comme si qu'on se fichait un diable sortant d'un bénitier. » « Mais enfin, râla Vernier, cette femme, cette femme que vous accusez ainsi, qui était-ce ? » Le braconnier ricana : « Ah ! ah, nous y venons. Ça nous intéresse donc enfin un peu. Je le savais bien que ça ne vous laisserait pas de bois, cette petite affaire-là. »",
      "« Vous voulez donc savoir qui que c'était cette femme ? Vous ne l'avez pas deviné ? Vraiment vrai, là, vous ne vous en doutez pas ? » « Misérable », soupira encore André. Le braconnier fit une pause : « Eh bien, c'était... c'était... » Il semblait chercher ses mots, jouissait de la douleur atroce qui se reflétait sur le visage du maître de forges. « C'était quelqu'un qui vous touche de très près. Et puis, parbleu, il n'y avait pas des tonnes de femmes au château, ce n'était pas la servante. Eh ! dites-le vous-même, il vous faut que ce soit moi ? C'était tout bonnement madame Vernier. » André s'attendait à ce nom. Pourtant, ce fut comme un coup de massue assené sur le crâne. Une rougeur monta à son front livide. Les veines de ses tempes se gonflèrent.",
      "Et il ricana : « Vous mentez ! » Ses jambes ne le soutenaient plus. Il chancela. Il lui sembla qu'il allait tomber. Cynique, le braconnier riait : « Non, je ne mens pas, vous le savez, vous le sentez bien, autrement vous m'auriez déjà cogné ou fichu à la porte. » Il disait vrai, le bandit poursuivit encore : « Oui, c'était madame Vernier. Et quand vous êtes entré dans le salon, croyant trouver votre femme, avouez-le entre nous, elle s'était éclipsée. »",
      "« Dame ! vous ne lui auriez pas adressé de compliments, c'est évident. C'est probablement la réflexion qu'elle a faite, puisqu'elle a délégué mam'zelle Jeannine pour vous recevoir. Pauvre mam'zelle Jeannine, vous avez dû lui en faire voir ! Fallait-il qu'elle en ait du cœur dans l'estomac pour accepter une combinaison pareille ! Tonnerre, je suis sensible, mais là vrai, ce que ça me remuait quand vous lui débitiez votre chapelet et qu'elle ne répondait rien que Grâce ! Grâce ! J'ai été sur le point de crier du dehors. Mais laissez-la donc, puisque ce n'est pas elle qui a fait le coup... Croyez-moi si vous voulez, ma parole, j'en avais la larme à l'œil. »",
      "André ne l'écoutait plus. Il lui semblait que sa tête se braisait. Des soupirs convulsifs s'échappaient de ses lèvres. Ses yeux cerclés de noir s'étaient injectés de sang."
    ]
  },
  {
    "id": 22,
    "page": 4,
    "category": "Fait Divers",
    "title": "La destinée tragique de Lisette Geudrin",
    "summary": "Un récit poignant sur le deuil et la fatalité. Après le décès d'une femme aimée, le souvenir de son corps sans vie et le poids d'un passé trouble hantent ses proches, poussant parfois certains au désespoir.",
    "paragraphs": [
      "Il fallait lui montrer la femme telle qu'elle avait été, il fallait arracher le pauvre homme à son désespoir. Quand il avait placé lui-même dans sa bière en chêne, à fermoirs d'argent, toute capitonnée de satin, le corps superbe qui ne tressaillait plus sous ses lèvres, une fois placée sur la poitrine de la morte la photographie d'enfant prise pour la sienne, et qu'elle portait comme un talisman-fétiche, n'avait-on pas craint de sa part une tentative de suicide ?",
      "Avec Janek à l'hôtel, lorsque la lecture revenait avide, le valet de pied montant affolé pour raconter le drame, Bruno, qui ne le quittait plus pour ainsi dire, arrivait d'abord à détourner sa pensée d'un acte absurde, car on ne se tue point pour ces créatures qui sont des monstres, puis, à atténuer, à assourdir, à effacer presque ses regrets. L'humble Joe Sims, le cow-boy mort pour cette femme, et peut-être heureux de mourir pour elle, alors qu'il n'eût point voulu de vengeance, était aussi vengé.",
      "Mais William Janck accomplissait son devoir. Il faisait placer dans la maison du docteur Blanche, la mère de Lydie de Ratisbonne, doyenne folle, et irrémédiablement folle, en ces minutes rapides où sa fille, qu'elle croyait terrée, ne reparaissait devant elle que pour retrouver la mort, étranglée par le mari, bâillonnée, délaissée."
    ]
  },
  {
    "id": 23,
    "page": 4,
    "category": "Social",
    "title": "Le destin des enfants de Jean Rédal",
    "summary": "Face à la tragédie, le bienfaiteur William Janck souhaite assurer l'avenir financier des enfants de Jean Rédal. Malgré les résistances, une solution est trouvée pour protéger la famille et leur dignité.",
    "paragraphs": [
      "Puis, il y avait dans ces événements un côté excessivement intéressant pour le Yankee ennemi des banalités, l'un des caractères les plus originaux de la libre Amérique. Master Janck alla jusqu'à confier à son ami Bonnet, lui aussi, de par sa parenté avec le meurtrier qu'était Jean Rédal allié à cette tragique aventure, qu'il prétendait doter les enfants de Rédal.",
      "Il fallut les énergiques protestations de son ancien ingénieur et ami pour le détourner de ce projet inacceptable. Il était là, lui... Les enfants de Jean Rédal servent les siens. La pauvre jeune femme, bien innocente de tout cela, une mère admirable autant pour ceux du premier lit que pour leur frère, tout en continuant ce cours qui prenait si bien, recevrait mensuellement une pension qui la mettrait à l'abri d'aucune complication d'argent. Cette jeune femme, il l'admirait. Il serait pour elle le protecteur sûr, ne réclamant et ne lui donnant qu'une sympathie vraie, exempte d'une arrière-pensée. Non, les enfants de Jean Rédal et l'épouse pour laquelle l'infortuné réclamait son soutien moral, ne manqueraient jamais matériellement de rien.",
      "Les conseils ne manqueraient pas non plus, dictés par un esprit sain. Qu'elle voulût ou non continuer à s'appeler madame Rédal, l'action judiciaire commencée malgré elle lui enlèverait ce droit. Elle redeviendrait Thérèse Beicourt. Son enfant ne porterait pas devant la loi le nom de son père. Qu'importait ? Il valait mieux pour les élèves à venir qu'elle s'appelât madame Thérèse Beicourt. Pour son fils, M. Bonnet prendrait les dispositions nécessaires. Le petit serait plus tard, dans les mêmes proportions que son frère et sa sœur, la pauvre petite Jeanne se remettant peu à peu, son héritier.",
      "M. Bonnet, le protecteur de toute la famille, l'ami et le conseil de William Janck, comme Bruno de Pontsevrin en restait l'ami, le conseil également, voyait presque journellement celui-ci et le comte de Terrique. La lumière était faite tout entière. Plus de crainte pour Pontsevrin, l'amant de passage de cette Lolo, grande, blonde, portant à la main gauche la même cicatrice que Laure Verdunet, avec qui il se ménageait quelques rendez-vous dans le pavillon loué par Raymond, certainement la fille de l'ancien avoué, le père Géva.",
      "Plus de crainte pour Marcel Vandenasse, le jeune juge d'instruction, amant lui aussi de passage de cette Lydie de Ratisbonne au sujet de qui deux vilains individus essayaient de le faire chanter, affaire qui revenait maintenant au jour, bien claire, élucidée."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Chronique Familiale",
    "title": "Dénouements heureux et deuils",
    "summary": "Entre la réconciliation des cœurs et les promesses de mariage, la vie suit son cours. Mais la tragédie frappe le foyer de Zette avec la perte de son enfant, un deuil traversé par la fidélité de l'amitié.",
    "paragraphs": [
      "Avec ce bonheur revenu à son foyer, sa femme est aussi tendre, aussi dévouée que jadis, ayant pardonné, et heureuse du pardon donné. Pour Raymond de Terrique, l'avenir s'ouvre, le bienheureux avenir. Son Odette tombée dans ses bras, à la première entrevue, son Odette lui murmurant à l'oreille les mots qu'elle n'avait pas prononcés encore, les mots divins qui font tout oublier : « Je t'aime ». Puis auprès d'eux, deux autres êtres heureux : Solange et Gaston. Solange a dit oui, dans l'élan de son cœur, dans toute la loyauté de sa pensée. Solange de Boffront deviendra madame Gaston Duhalier.",
      "Cité Doré, chez les chiffonniers, dans les mœurs honnêtes des Geudrin, chez Victor Chauvette, la paix s'est faite. Zette travaille, calme, bien portante, ne voulant rien de personne, sans rancune contre le séducteur qui est le père de son petit, ne le cherchant ni ne l'évitant, ne l'ayant pas revu d'ailleurs, et peut-être destinée à ne pas le revoir. Victor Chauvette est parti pour son service militaire. Victor ne doit faire qu'un an, son père ayant accompli sa soixante-dixième année. Et les mois s'écoulent sans incident.",
      "Victor n'a pas repris sa place, conservée pourtant par M. Duhalier, ce pauvre homme pour qui il éprouvait de l'estime, de l'affection, et dont le souvenir le suit, a été remplacé par l'employé immédiatement au-dessous de lui ; il est installé comme comptable dans une grande usine, où il a autant d'avenir. Un soir, en quittant son bureau, il entre, comme il le fait souvent, chez les Geudrin.",
      "Il apprend par la mère que Zette est partie dans la matinée pour la Savoie, au reçu d'une dépêche lui annonçant une maladie subite de son garçon. Elle était désespérée. « Pourvu qu'en arrivant elle ne le trouve pas mort ! Qui sait ce qu'elle ferait ? » ajoute la mère en s'essuyant les yeux. Victor rentre chez ses parents, prend l'argent qu'il possède, demande à son père d'aller prévenir à son bureau qu'il est malade, et arrive juste à la gare pour le train du soir.",
      "Dans la chaumière, là-bas, au milieu des montagnes aux éclaircies verdoyantes, semées de la flore printanière, Zette se penche au-dessus d'un berceau d'osier. Frappé d'un mal violent comme en ont les tout petits, malgré l'arrivée à temps, affirme la nourrice qui sanglote, du médecin du pays, l'enfant agonise. Il exhale son dernier souffle, au moment où Victor franchit le seuil de terre battue. Et la mère éplorée, après avoir serré dans ses bras le frêle corps inerte, crie et pleure sur l'épaule de l'ami dont la tendresse profonde, dont l'amour vrai, sera sa seule consolation.",
      "Il y a, sous un tertre vert, un frêle corps dont l'âme est remontée au ciel. L'enfant de Lisette Geudrin, l'enfant du comte Raymond de Terrique, repose là-bas dans les montagnes de la Savoie. Un enfant naît aussi, en la vaste chambre du vieux château féodal, dans les montagnes du Dauphiné. L'aube de là-haut protégera l'ange d'ici-bas, le fils légitime, le futur comte de Terrique."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Actualités Agricoles",
    "title": "Sommaire de L'Agriculture Nouvelle",
    "summary": "Découvrez le programme de la semaine dans L'Agriculture Nouvelle : phylloxéra, culture du blé, conseils pour les lapins angoras, dessiccation des fruits et conservation des produits fermiers.",
    "paragraphs": [
      "Lire cette semaine dans L'AGRICULTURE NOUVELLE : La Situation phylloxérique à l'étranger, par J. Maurion ; Culture intensive du blé, par Am. Desmoulins ; Protection des dernières fleurs d'automne, par S. Mottet ; Fèves et Féveroles, par J. Trouvé.",
      "Ce numéro contient en outre un excellent article illustré sur le lapin angora dont les éleveurs des environs de Caen tirent un profit particulièrement rémunérateur. Nous signalerons également trois articles d'un grand intérêt pratique : La Dessiccation des fruits et la culture fruitière, par J. Nanot et L. Tristchler ; Plantes et Engrais, par Paul Noël ; Conservation des volailles et des œufs par le froid, par J. de Loverdo."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Spectacles",
    "title": "Programmes des Théâtres parisiens (28 octobre)",
    "summary": "Retrouvez le programme théâtral et musical de ce 28 octobre à Paris, avec les représentations à l'Opéra-Comique, au Théâtre-Lyrique et à la Comédie-Française, ainsi que les attractions des salles de music-hall.",
    "paragraphs": [
      "Théâtres : Relâche à l'Opéra. Salammbô à l'Opéra-Comique. Manon au Théâtre-Lyrique. La Poudre aux yeux à la Comédie-Française.",
      "Spectacles divers : Folies-Bergère, Olympia, Casino de Paris, Cirque d'Été, et autres attractions de la capitale."
    ]
  }
];
