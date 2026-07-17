// Date: 1901-02-03
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-02-03 (Version Restaurée, 36 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Roi et Empereur",
    "summary": "Une analyse de la diplomatie dynastique où l'échange de grades militaires entre monarques, tel celui de Guillaume II en Angleterre, demeure une politesse protocolaire sans réelle portée sur la raison d'État.",
    "paragraphs": [
      "Les souverains étrangers ont l'habitude de se conférer entre eux des grades militaires, ce qui n'a qu'un seul résultat pratique : celui de leur permettre de porter des uniformes variés. C'est une des formes de la politesse dynastique.",
      "L'élévation un peu retentissante de Guillaume II à la dignité de feld-maréchal général des camps et armées britanniques appartient au même ordre d'idées ; et il est bien difficile d'y voir l'indice d'une orientation diplomatique nouvelle.",
      "Toutes les relations familiales entre monarques ne changent en rien la marche de la politique internationale. Les alliances de famille n'ont jamais empêché les guerres ou les conquêtes, comme le démontre amplement l'histoire italienne ou allemande.",
      "En somme, ces relations dynastiques se compensent et se neutralisent. À la cour d'Angleterre, les solidarités de sang pèsent bien peu en face des impérieuses exigences de la raison d'État."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Miss Tempête",
    "summary": "Le Tout-Paris de la haute finance se presse à l'hôtel de la rue La Boëtie pour le bal somptueux de François Tavernier, tandis que les réputations et les intrigues amoureuses animent les salons.",
    "paragraphs": [
      "Ce soir-là, le Tout-Paris de la haute finance se pressait dans les salons de l'hôtel de la rue La Boëtie où François Tavernier, le hardi et heureux fondateur de la banque des industries métallurgiques, donnait un de ces bals dont, chaque fois, on citait quelque inattendue et originale merveille.",
      "Roger de Sartys, un beau garçon brun, arrive à la réception et converse avec Fitz-Norton au sujet de la situation financière de la famille Tavernier et de la réputation fragile de Marguerite.",
      "François Tavernier, le maître de maison, est entouré de ses deux filles, Marguerite et Germaine, alors que les prétendants se pressent en grand nombre pour courtiser la belle et riche Marguerite."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Inexplicable mort à Planguenouat",
    "summary": "À Planguenouat, les autorités ont découvert des restes humains calcinés dans le foyer d'une veuve disparue. L'enquête peine à expliquer comment un feu domestique a pu causer une telle destruction.",
    "paragraphs": [
      "Les habitants du bourg de Planguenouat (Côtes-du-Nord), n'ayant pas aperçu depuis quelques jours une ménagère, Mme Marie Lemoine, veuve Cornillet, âgée de soixante-quatre ans, firent part de leurs pressentiments au maire.",
      "La porte ayant été ouverte, on trouva dans les cendres du foyer des débris humains : un crâne calciné, deux côtes et deux pieds intacts.",
      "On ne s'explique guère comment le maigre feu du foyer a pu anéantir aussi complètement le corps de la malheureuse. Une enquête est ouverte pour faire toute la lumière sur ce sinistre mystère."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accidents mortels de chasse",
    "summary": "Deux tragiques accidents de chasse endeuillent les communes de Vernielay et de Sancoins, où des imprudences fatales lors de la manipulation des fusils ont conduit à la mort de deux chasseurs.",
    "paragraphs": [
      "Un terrible accident s'est produit dans la commune de Vernielay (Marne). Martin-Vincent François, en reposant son fusil trop brusquement après avoir cherché un corbeau, a été mortellement blessé par une détonation accidentelle.",
      "À Sancoins, un jeune marinier nommé Bardin est décédé après que son fusil, dissimulé dans un buisson, a fait feu alors qu'il le tirait brusquement vers lui pour viser une pie."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Effondrement à la gare de Valence",
    "summary": "À la gare de Valence, le poids excessif de la neige a provoqué l'effondrement d'un quai de petite vitesse sur quatre-vingts mètres, causant la mort de trois ouvriers et blessant huit autres personnes.",
    "paragraphs": [
      "Un grave accident a eu lieu à la gare de Valence où les murs d'un quai de petite vitesse, surchargés par une quantité considérable de neige, se sont effondrés sur une longueur de quatre-vingts mètres.",
      "Trois hommes d'équipe ont péri ensevelis sous les décombres, et huit autres personnes ont été grièvement blessées. Le parquet a immédiatement ouvert une enquête."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Actualités Internationales",
    "title": "Les funérailles de la reine Victoria",
    "summary": "Londres a rendu un hommage solennel à la reine Victoria. En présence du roi Édouard VII et de l'empereur d'Allemagne, le cortège funèbre a traversé la capitale sous une vive émotion populaire.",
    "paragraphs": [
      "Les funérailles de la reine Victoria, célébrées hier, ont été empreintes d'une solennité impressionnante.",
      "Le cercueil a été transféré de Portsmouth à Londres, où une foule considérable s'est rassemblée sur le parcours du cortège malgré le temps gris et froid.",
      "Le cortège, composé du roi Édouard VII, de l'empereur d'Allemagne et de nombreux princes, a cheminé entre les gares de Victoria et de Paddington sous une surveillance étroite, dans une atmosphère de deuil national."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Informations locales",
    "title": "Le Phare de la Hève",
    "summary": "Les expertises techniques écartent tout risque immédiat d'écroulement pour le phare et le sémaphore de la Hève, rendant inutile le projet de déplacement de l'édifice avant une quinzaine d'années.",
    "paragraphs": [
      "À la suite d'études approfondies sur la sécurité du phare et du sémaphore de la Hève, il a été constaté qu'il n'existe aucun danger immédiat d'écroulement. Il sera prudent d'envisager l'évacuation du sémaphore seulement dans un délai d'environ quinze ans.",
      "Dans ces conditions, il y a lieu de surseoir au projet de déplacement du sémaphore."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Technique et Transports",
    "title": "La ligne du Mont-Blanc",
    "summary": "La nouvelle ligne ferroviaire électrique reliant Le Fayet à Chamonix a réussi ses essais avec succès. Cette première européenne, alliant confort et rapidité, sera ouverte au public dès le printemps prochain.",
    "paragraphs": [
      "Le premier essai de parcours par traction électrique sur la nouvelle ligne du Fayet à Chamonix a admirablement réussi. Un wagon a pu rouler à une vitesse de cinquante kilomètres à l'heure sans trépidation.",
      "Cette ligne, la première de ce genre en Europe, sera ouverte au public dès ce printemps."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Social",
    "title": "La prévoyance sociale à la Chambre",
    "summary": "La Chambre des députés témoigne d'une réelle volonté de solidarité envers les classes laborieuses, en votant de nouvelles mesures législatives en faveur des sociétés de secours mutuels et des accidents du travail.",
    "paragraphs": [
      "Les questions de mutualité et de prévoyance sociale réunissent une large unanimité à la Chambre des députés. Plusieurs propositions concernant les sociétés de secours mutuels et les accidents du travail ont été votées ou renvoyées à l'examen des commissions.",
      "Cet effort commun en faveur des classes laborieuses témoigne d'une réelle volonté de solidarité humaine face aux misères sociales."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Funérailles Royales",
    "title": "Arrivée du cercueil à Windsor",
    "summary": "Le cercueil royal est arrivé à Windsor. Sous le glas des cloches de Saint-George et le fracas du canon, le cortège s'est ébranlé vers la chapelle, suivi par le roi et les délégations étrangères.",
    "paragraphs": [
      "Windsor, 2 février. Le train royal est arrivé en gare à deux heures trente.",
      "Les cloches de la chapelle Saint-George sonnent un glas funèbre, tandis que retentissent les premiers coups de la salve de quatre-vingt-un coups de canon.",
      "Les artilleurs de la Garde ont transporté le cercueil sur l'affût d'un canon, et le cortège s'est bientôt mis en marche.",
      "Le roi suivait, accompagné de son état-major, des aides de camp et des députations des deux régiments allemands lors de cette procession à travers les rues de Windsor."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un incident lors du cortège",
    "summary": "Lors des funérailles, le refus des chevaux d'artillerie d'avancer provoque une vive émotion. La garde d'honneur des marins supplée les bêtes et tracte le cercueil jusqu'à l'église pour poursuivre le cortège.",
    "paragraphs": [
      "Au moment où le cercueil devait suivre le convoi, un incident pénible s'est produit. Les chevaux d'artillerie, qui composaient l'attelage, ont refusé obstinément d'avancer, quels que fussent les efforts prodigués par leurs conducteurs, qui ne parvenaient qu'à surexciter les animaux davantage.",
      "L'on a craint un instant que les chevaux ne vinssent à renverser le cercueil. Le roi, témoin de cette scène, en paraissait violemment affligé.",
      "Les marins formant la garde d'honneur s'offrirent alors pour traîner eux-mêmes le cercueil jusqu'à l'église. Cette solution fut adoptée. Les chevaux ayant été dételés, les marins se mirent aux traits, et le cortège put ainsi poursuivre sa marche un moment interrompue."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Funérailles Royales",
    "title": "La cérémonie à la chapelle de Windsor",
    "summary": "Le cortège funèbre, accompagné des souverains alliés, a rejoint la chapelle de Windsor pour un office solennel. L'évêque de Winchester a officié en présence de la famille royale et des représentants des puissances étrangères.",
    "paragraphs": [
      "Derrière le cercueil s'avancent le Roi, entre l'Empereur d'Allemagne et le duc de Connaught, puis les rois alliés, ducs, parents, et les dignitaires de la Cour.",
      "Viennent ensuite les représentants des puissances étrangères : parmi eux, l'amiral Bienaimé représentant la France ; le duc de Mandas pour l'Espagne ; M. Charles Bourcart pour la Suisse ; et le comte d'Avricourt pour la principauté de Monaco.",
      "Les gardes à cheval ferment la marche du cortège funèbre.",
      "À l'entrée de la chapelle, le cortège a été accueilli par l'archevêque de Cantorbéry, le doyen et les chanoines.",
      "À l'intérieur de l'édifice, la reine Alexandra et les princesses royales, arrivées directement de la gare en voiture fermée, ont pris place aux côtés des ministres et des anciens ministres.",
      "Le service religieux est célébré par l'évêque de Winchester, assisté du doyen de la chapelle de Windsor. L'archevêque de Cantorbéry donne l'absoute.",
      "La maîtrise, composée en majorité d'enfants revêtus d'ornements rouge et or, chante le Pater Noster de Gounod — que le célèbre compositeur écrivit spécialement pour la reine Victoria — ainsi que l'hymne de Tchaïkovski.",
      "Après l'absoute, un héraut proclame à haute voix les noms, prénoms et titres de la souveraine défunte, et conclut par les mots : « God save the King ».",
      "Le Roi et les membres de la famille royale accompagnent le cercueil jusqu'au monument érigé près de la chapelle en mémoire du prince consort, où il reposera jusqu'à lundi avant son transfert définitif à Frogmore."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Funérailles Royales",
    "title": "Cérémonies funèbres à Paris",
    "summary": "Hier, à onze heures, une cérémonie funèbre a été célébrée en l'église anglicane de la rue d'Aguesseau en hommage à la Reine, rassemblant de hautes autorités diplomatiques, civiles et le Président de la République.",
    "paragraphs": [
      "La première cérémonie funèbre célébrée à l'église anglicane de la rue d'Aguesseau a eu lieu hier matin à onze heures.",
      "Le porche de l'église disparaît tout entier sous d'immenses draperies noires, bordées de bandes d'hermine à franges d'argent et relevées par de grosses cordelières de soie blanche à glands d'argent.",
      "Sir Michaël Herbert, ministre plénipotentiaire et chargé d'affaires, arrive le premier, en compagnie de M. Barclay, premier secrétaire, et du personnel de l'ambassade.",
      "L'assistance se compose de nombreuses personnalités, dont M. le Président de la République et Mme Émile Loubet, ainsi que de nombreux représentants des institutions de la France."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Situation en Chine",
    "summary": "Le décès de Li-Hung-Chang est annoncé alors qu'il faisait l'objet de critiques officielles. Une conférence diplomatique est prévue le 5 février pour statuer sur les châtiments à appliquer aux responsables.",
    "paragraphs": [
      "Une dépêche de Tien-Tsin a annoncé que Li-Hung-Chang était mort. D'autre part, les journaux anglais ont publié une dépêche de Pékin, datée du 31 janvier, disant que Li-Hung-Chang et le prince Ching avaient reçu le jour même un édit dans lequel Li-Hung-Chang était blâmé au sujet des exécutions de fonctionnaires chinois à Pao-Ting-Fou.",
      "Les plénipotentiaires chinois auront une conférence avec les ministres étrangers, le 5 février, pour présenter les propositions concernant les châtiments à appliquer."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Nouvelles du front",
    "summary": "Le lieutenant-gouverneur de l'État libre d'Orange se rend à Bloemfontein face aux menaces d'invasion. Pendant ce temps, la mission de paix du président Prétorius échoue, tandis que le War-Office dénombre les pertes.",
    "paragraphs": [
      "Le lieutenant-gouverneur anglais de l'État libre d'Orange, ayant appris que de grands préparatifs se faisaient pour une nouvelle invasion, s'est rendu hier à Bloemfontein.",
      "Le correspondant du Standard à Prétoria télégraphie que l'ancien président Prétorius est de retour après avoir rendu visite au général Botha pour une mission de paix, mission qui a complètement échoué.",
      "Le War-Office publie la liste quotidienne des pertes : neuf tués, cinquante-trois morts de maladie, ainsi que plusieurs prisonniers blessés."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Explosion mortelle à Angleur",
    "summary": "À Angleur, près de Liège, le jeune Louis Lorée, 17 ans, est mort tragiquement lors d'une violente explosion causée par une installation d'éclairage à l'acétylène qu'il était en train d'essayer.",
    "paragraphs": [
      "Un terrible malheur s'est produit à Angleur, près de Liège. Le nommé Louis Lorée, âgé de dix-sept ans, procédait aux essais d'une installation d'éclairage à l'acétylène lorsqu'une forte explosion se produisit.",
      "Le réservoir fit explosion et le malheureux fut violemment atteint à la tête. Il a succombé quelques instants plus tard, une partie du crâne ayant été emportée par la déflagration."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Social",
    "title": "Grève des mineurs à Montceau-les-Mines",
    "summary": "À Montceau-les-Mines, 15 000 grévistes se sont réunis pour protester contre l'attitude des forces de l'ordre, réclamer un salaire minimum et l'adhésion totale des syndicats à la Fédération nationale.",
    "paragraphs": [
      "Les grévistes, membres du syndicat des mineurs et au nombre de 15 000, se sont réunis pour protester énergiquement contre l'attitude des gendarmes et pour réclamer de meilleures conditions de travail.",
      "Ils ont adopté diverses résolutions visant à obtenir l'adhésion complète des syndicats miniers à la Fédération nationale, ainsi que la fixation impérative d'un salaire minimum."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Justice",
    "title": "Cour d'assises de Seine-et-Oise : Procès Nédelec",
    "summary": "Lors du procès Nédelec, la défense plaide l'absence de preuves tandis que le procureur requiert la peine capitale. La fiancée de l'accusé a témoigné de sa parfaite correction.",
    "paragraphs": [
      "Le procès Nédelec se poursuit avec l'audition des témoins. L'accusé tente de se justifier concernant les sommes d'argent qu'il a empruntées, affirmant qu'il ignorait avoir sur lui ses propres économies.",
      "La famille Denise a été entendue. Mlle Blanche Denise, fiancée de l'accusé, a témoigné avec émotion de la correction parfaite dont il a toujours fait preuve.",
      "Le procureur a requis la peine de mort, tandis que la défense, représentée par M. Henri Robert, plaide l'absence de preuves palpables contre l'accusé."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Accident à Tunis",
    "summary": "Un grave accident est survenu lors de manœuvres militaires entre Tunis et Sousse : un capitaine a été victime d'une chute de cheval ayant entraîné une fracture du crâne. Son état est jugé désespéré.",
    "paragraphs": [
      "Un grave accident de cheval s'est produit lors des manœuvres de cadres se déroulant entre Tunis et Sousse. Le capitaine qui dirigeait les manœuvres a été désarçonné et s'est fracturé le crâne. Il a été immédiatement transporté à l'hôpital dans un état désespéré."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Politique",
    "title": "Discussion sur le droit de coalition",
    "summary": "M. Barthou critique l'ambiguïté du terme « coalition » issu de la loi de 1864 et en préconise la suppression, en s'appuyant sur des modèles législatifs étrangers.",
    "paragraphs": [
      "Cette expression, qui ne se trouvait pas dans le code, n'a fait son apparition que dans la loi de 1864, au moment précis où l'on se piquait d'établir un droit de coalition. Elle est équivoque et, par suite, dangereuse. Il n'y a qu'à la supprimer.",
      "À l'appui de toutes ses argumentations, M. Barthou invoque d'ailleurs les gages, et surtout les textes anglais et américains."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Social",
    "title": "Fête annuelle de l'Association des employés des chemins de fer",
    "summary": "Le ministre des Travaux publics, M. Pierre Baudin, a présidé la fête de l'Association des employés des chemins de fer de Paris-État, célébrant le dévouement et l'esprit républicain du personnel lors d'une cérémonie festive.",
    "paragraphs": [
      "La fête annuelle de l'Association fraternelle des employés et ouvriers des chemins de fer, section de Paris-État, a été donnée hier soir dans les salons du Grand-Orient.",
      "M. Pierre Baudin, ministre des Travaux publics, en avait accepté la présidence.",
      "À la table d'honneur avaient, en outre, pris place MM. Bouillon, président de la section Paris-État ; Metter, directeur des chemins de fer de l'État, ainsi que le haut personnel du réseau.",
      "Après une allocution de M. Bouillon, le ministre des Travaux publics a pris la parole.",
      "Dans un discours maintes fois interrompu par des applaudissements, il a rendu hommage au dévouement du personnel du réseau de l'État, à son esprit de solidarité et à son ferme attachement aux institutions républicaines.",
      "Il a ensuite remis des distinctions honorifiques : les Palmes académiques à MM. T... et Tourdes, membres du bureau de l'association, ainsi que la médaille d'honneur à M. Levain, chef de bureau, et à M. X, chef de gare.",
      "Plusieurs médailles de mutualité ont également été remises aux sociétaires.",
      "MM. Metter et Hoch ont ensuite prononcé des discours, et un brillant concert a terminé la première partie de la fête."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'attentat contre M. Deschanel",
    "summary": "L'instruction sur l'attentat contre M. Deschanel se poursuit au Collège de France. La reconstitution des faits a eu lieu cet après-midi, tandis que l'interrogatoire est reporté par l'état de santé de la victime.",
    "paragraphs": [
      "L'instruction de l'attentat contre M. Deschanel se poursuit. Le juge d'instruction Vallès a siégé aujourd'hui dans l'enceinte même du collège où s'est déroulé le drame. M. Deschanel a reconnu qu'en voulant s'interposer pour protéger le professeur, il avait été grièvement blessé. L'interrogatoire a été reporté à vendredi par suite de l'état de santé de la victime.",
      "Ainsi que nous l'avions annoncé, la reconstitution des faits a eu lieu cet après-midi, dans les locaux du Collège de France.",
      "L'inculpée, qui sera assistée de son avocat, Me Albert Salmon, sera prochainement mise en présence de M. Émile Deschanel."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie rue de Montreuil",
    "summary": "Un ébéniste et son épouse ont été grièvement brûlés lors d'un incendie domestique rue de Montreuil. Ils doivent leur survie à l'intervention héroïque d'un jeune voisin de dix-sept ans.",
    "paragraphs": [
      "Dans la matinée d'hier, vers huit heures et demie, un ébéniste, M. Eugène Humbert, âgé de vingt et un ans, dont l'atelier est situé rue de Montreuil, travaillait chez lui, lorsqu'il renversa un récipient rempli d'essence, déposé près de la cheminée.",
      "Le dangereux liquide s'enflamma aussitôt et communiqua le feu à l'atelier. L'ébéniste essaya de maîtriser le commencement d'incendie, mais ses vêtements prirent feu à leur tour. Sa femme, affolée, se porta à son secours et subit le même sort.",
      "Tous deux auraient péri sans le dévouement d'un de leurs voisins, M. Pierre Vernet, âgé de dix-sept ans, qui intervint et leur jeta des couvertures et un matelas.",
      "Les époux Humbert ont été transportés à l'hôpital Saint-Antoine. L'état de la jeune femme n'est pas alarmant, mais celui de son mari, très grièvement atteint, a nécessité son transfert à l'hôpital Dupuytren."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un escroc aux titres",
    "summary": "M. Roy a arrêté un escroc nommé Pezet, qui, sous couvert de négoce d'engrais, spoliait ses victimes en échangeant leurs titres financiers authentiques contre des valeurs fictives.",
    "paragraphs": [
      "Sur commission rogatoire du parquet de Troyes, M. Roy a procédé à des actes d'instruction concernant un nommé Pezet, arrêté récemment.",
      "Pezet, qui se prétendait marchand d'engrais agricoles, se faisait remettre par des particuliers des actions et des obligations de chemins de fer, de la Ville de Paris ou du Crédit Foncier, en échange de titres ne possédant absolument aucune valeur.",
      "M. Roy a pu retrouver environ trois cents des titres ainsi extorqués à ses victimes par l'escroc."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un accident singulier : la jambe de bois",
    "summary": "Renversé par une automobile rue du Faubourg-Saint-Antoine, M. Georges Van Dyck a miraculeusement survécu. Seule sa prothèse en bois a été brisée lors de l'accident, ne causant que des contusions légères.",
    "paragraphs": [
      "M. Georges Van Dyck, ébéniste de soixante-trois ans, fut victime autrefois d'un accident lui ayant broyé la jambe gauche, laquelle fut remplacée par une tige de bois. Hier, rue du Faubourg-Saint-Antoine, une automobile le renversa et lui passa sur le corps.",
      "Le vieillard s'évanouit mais, une fois ranimé, il demanda à être reconduit chez lui, expliquant avec flegme que sa jambe était cassée et qu'il avait de quoi la raccommoder lui-même.",
      "Il fut finalement transporté à l'hôpital Saint-Antoine où l'interne constata qu'il ne souffrait que de contusions superficielles et que sa jambe de bois était simplement rompue."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enfants et revolver",
    "summary": "Hier soir, rue de la Chapelle, une balle perdue tirée par des enfants jouant avec un revolver a blessé un passant, M. François Christophiti. L'enquête est ouverte par M. le commissaire Pontalier.",
    "paragraphs": [
      "Hier soir, vers sept heures, plusieurs enfants s'amusaient rue de la Chapelle lorsqu'une détonation retentit. Un passant, M. François Christophiti, a été atteint à la main par une balle de revolver.",
      "L'auteur du coup de feu est en fuite. Une enquête a été immédiatement ouverte par M. Pontalier, commissaire de police du quartier."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Autour de Paris",
    "summary": "Chronique des accidents et faits divers survenus dans la banlieue parisienne : Suresnes, La Garenne-Colombes, Saint-Ouen, Pantin, Bagneux, Montreuil, Charenton, Montrouge, Malakoff, Clamart et Poissy.",
    "paragraphs": [
      "Suresnes : Un conducteur de train, âgé de trente-cinq ans, a été tué en tombant du fourgon des bagages en marche.",
      "La Garenne-Colombes : Adèle Vienard, vingt-trois ans, s'est défenestrée et a succombé à ses blessures.",
      "Villeneuve-la-Garenne : Mme veuve Randeul est dans un état désespéré après que ses vêtements ont pris feu au contact d'un poêle.",
      "Saint-Ouen : Le cadavre d'un nouveau-né a été découvert près de la porte de Saint-Ouen.",
      "Pantin : Louis Gosse, porteur aux Halles, a tenté de s'asphyxier. Par ailleurs, un loueur a découvert un de ses locataires, Jean Junells, inanimé par asphyxie.",
      "Bagneux : Un individu a dérobé un attelage complet, voiture et cheval, appartenant à un commerçant de Vincennes.",
      "Montreuil-sous-Bois : Le commissaire Rousselot a procédé à l'arrestation de Georges Délais, un escroc se faisant passer pour un sergent-major.",
      "Charenton : Bernard Dales, âgé de quarante et un ans, a été broyé par un bateau lors d'une manœuvre au ponton.",
      "Montrouge : Arrestation d'une bande de malfaiteurs par le commissaire Soret.",
      "Malakoff : Louis Barbet a dû subir l'amputation de la jambe après avoir été écrasé par la roue d'un tombereau.",
      "Clamart : Un nommé Pierre Oku a été retrouvé pendu dans le bois de Clamart.",
      "Poissy : François Hélary a été agressé et dévalisé par plusieurs individus."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Tribunaux",
    "title": "Une poignée de haricots",
    "summary": "Le parquet a classé sans suite l'affaire de Mme Dumoulin, mère de vingt-deux enfants, initialement condamnée à quarante-huit heures de prison pour le vol d'une poignée de haricots.",
    "paragraphs": [
      "Mme Dumoulin, mère de vingt-deux enfants, avait été condamnée à quarante-huit heures de prison pour le vol d'une poignée de haricots. La cour ayant déclaré la cour d'assises seule compétente pour juger ce cas, le parquet a décidé de classer l'affaire définitivement."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Chronique des Théâtres",
    "title": "Nouvelles de la scène",
    "summary": "Dernières nouvelles théâtrales : fins de représentations à l'Ambigu, préparation de nouvelles pièces à La Renaissance, changements de comités artistiques et mise à jour des programmes de music-hall.",
    "paragraphs": [
      "On annonce les dernières représentations de 'Au-dessus de l'année' à l'Ambigu. La Renaissance prépare activement la mise en scène de 'Amis de collège' de Daniel Riche.",
      "M. Le Bargy quitte le comité de la Porte-Saint-Martin pour rejoindre celui de la Comédie-Française.",
      "Des changements de programmes sont annoncés aux Folies Bergère, à l'Olympia ainsi que dans divers autres théâtres parisiens."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Vie Financière",
    "title": "Avis aux souscripteurs des obligations Ville de Paris 1871",
    "summary": "Avis financier relatif aux obligations de la Ville de Paris de 1871, offrant des avantages de tirage et des billets gratuits pour la Loterie des Enfants Tuberculeux.",
    "paragraphs": [
      "En envoyant 20 francs, le souscripteur participe immédiatement aux quatre tirages annuels des obligations Ville de Paris 1871. Ces titres sont vendus par abonnements, payables dès 2 francs par semaine.",
      "Chaque souscripteur reçoit en outre dix billets gratuits pour la Loterie des Enfants Tuberculeux."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Vie Économique",
    "title": "Dividende de la Société du Théâtre-Concert La Cigale",
    "summary": "Le Conseil d'Administration du Théâtre-Concert La Cigale annonce la mise en paiement d'un premier acompte de dividende de 4 francs brut, soit 3 francs net, payable dès le 15 février 1901 au Crédit Lyonnais.",
    "paragraphs": [
      "Le conseil d'administration de la société anonyme du Théâtre-Concert La Cigale vient de décider la mise en paiement d'un premier acompte de 4 francs brut, soit 3 francs net, à valoir sur le dividende de l'exercice 1900.",
      "Cet acompte sera payable, contre remise du coupon, au Crédit Lyonnais et dans ses succursales à partir du 15 février 1901."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Spectacles",
    "title": "Programme du concert au Jardin Zoologique d'Acclimatation",
    "summary": "Le dimanche 3 février, M. Célestin Bourde Célestin Bourdeau dirigera un concert symphonique au Jardin Zoologique d'Acclimatation, interprétant des œuvres majeures de Mendelssohn, Verdi, Gounod et Berlioz.",
    "paragraphs": [
      "Programme du concert qui sera donné le dimanche 3 février, à 2 heures, dans la grande salle, sous la direction de M. Célestin Bourdeau.",
      "Première partie : Ouverture de Mignon (A. Thomas), Symphonie Italienne (Mendelssohn), Cavatine de Faust (Gounod), Sérénade amoureuse (J. Fontlo), Loin du bal (G. Gillet), Canzonetta (Mendelssohn), Mon cœur chante (Chaminade), Ballet de Coppélia.",
      "Deuxième partie : Ouverture de Si j'étais roi (Adam), Pensée d'automne (Massenet), Couplets de Rigoletto (Verdi), Tarentelle (G. Ferrari), Le Régiment qui passe (Eilenberg), Mandolinata (Paladilhe), Duo de Lakmé (L. Delibes), Marche hongroise de la Damnation de Faust (Berlioz)."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Avis Importants",
    "title": "Grand Tirage de la Loterie des Enfants Tuberculeux",
    "summary": "Le grand tirage de la loterie en faveur des enfants tuberculeux se tiendra le 26 février 1901, salle des Ingénieurs Civils. Mille lots seront distribués pour une valeur totale de 51 400 francs.",
    "paragraphs": [
      "Grand tirage le 26 février 1901, à huit heures du matin, à la salle des Ingénieurs Civils, rue Blanche, à Paris.",
      "La liste officielle des numéros gagnants sera publiée le lendemain. Très peu de billets restent à placer. Ce grand tirage donne droit à 1 000 lots, dont 26 de 500 francs, tous payables en espèces, formant un ensemble de 51 400 francs."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Informations Maritimes",
    "title": "Mouvements des paquebots",
    "summary": "Le Lafayette et L'Aquitaine ont rejoint leurs ports respectifs de Saint-Nazaire et du Havre. Parallèlement, les paquebots Salazie et Natal poursuivent leurs trajets maritimes vers l'Orient.",
    "paragraphs": [
      "Le paquebot Lafayette (C.G.T.), venant de Veracruz et escales, est arrivé à Saint-Nazaire le 31 janvier.",
      "Le paquebot L'Aquitaine (C.G.T.), venant de New-York, est arrivé au Havre le 1er février.",
      "Le paquebot Salazie (M.M.), venant du Japon et de l'Indo-Chine, a quitté Colombo le 14 janvier.",
      "Le paquebot Natal (M.M.), à destination de Madagascar et Maurice, a quitté Port-Saïd le 30 janvier."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Spectacles",
    "title": "Programme des théâtres parisiens pour le 3 février",
    "summary": "La journée théâtrale du 3 février offre une programmation variée, mêlant grands classiques lyriques tels que Guillaume Tell et La Mascotte aux revues de music-hall du Casino de Paris et des Folies-Bergère.",
    "paragraphs": [
      "La plupart des théâtres proposent des représentations en matinée et en soirée, incluant notamment Guillaume Tell, Le Petit Chat Rouge, La Mascotte, ainsi que les traditionnelles revues au Casino de Paris et aux Folies-Bergère."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Informations Ferroviaires",
    "title": "Arrangements spéciaux pour le Carnaval",
    "summary": "À l'occasion du Carnaval, la Compagnie du chemin de fer d'Orléans propose des billets aller-retour à prix réduit valables du 16 au 20 février inclus pour faciliter les déplacements des voyageurs.",
    "paragraphs": [
      "La Compagnie du chemin de fer d'Orléans informe le public qu'à l'occasion des fêtes du Carnaval, des billets d'aller et retour à prix réduit seront délivrés les samedi, dimanche, lundi et mardi gras, soit les 16, 17, 18 et 19 février. Ces titres de transport seront valables pour le retour jusqu'aux derniers trains de la journée du mercredi 20 février."
    ]
  }
];
