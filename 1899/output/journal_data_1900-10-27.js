// Date: 1900-10-27
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-10-27 (Version Restaurée, 36 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Ami du soldat",
    "summary": "Atteint par la limite d'âge, le général Cardot quitte le service actif. Pionnier d'une instruction fondée sur l'autorité morale et la bienveillance paternelle, il laisse une empreinte durable dans l'armée.",
    "paragraphs": [
      "Aux dernières grandes manœuvres de corps d'armée, où nos soldats ont mérité tant d'éloges, on avait particulièrement remarqué l'entraînement, l'instruction et la préparation à la guerre de la 40e brigade d'infanterie.",
      "Le général Cardot, commandant la 40e brigade, vient d'être atteint par la loi sur la limite d'âge. Le général Donop, commandant le 10e corps d'armée, a annoncé cette retraite aux troupes par un ordre du jour vibrant, soulignant la doctrine entraînante et le rôle d'éducateur moral du général Cardot.",
      "Le général Cardot a toujours prôné une éducation militaire doublée d'une éducation morale, s'inspirant des méthodes russes. Il considère que le chef doit être un père pour ses soldats, cherchant à se faire aimer plutôt qu'à imposer une discipline rigide, une vision qu'il a consignée dans ses ouvrages.",
      "De nombreux officiers s'inspirent aujourd'hui de ses principes, cherchant à établir un lien moral fort avec leurs hommes, convaincus que la bienveillance n'exclut pas l'autorité."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Fruit Défendu",
    "summary": "Jean Villaurier, autrefois calculateur, est désormais en proie à une passion dévorante pour Régine. Une correspondance clandestine par l'entremise de la fidèle Gertrude scelle le destin tragique de leur union.",
    "paragraphs": [
      "Jean Villaurier, autrefois froid calculateur, se retrouve profondément bouleversé par son amour pour Régine. Alors que des obstacles se dressent entre eux, notamment le projet de mariage de la jeune fille, il tente désespérément de communiquer avec elle via Gertrude, la domestique.",
      "L'obsession de Jean grandit. Après des jours d'attente et d'angoisse, il reçoit enfin une réponse manuscrite. Il lui donne rendez-vous, espérant l'arracher à sa situation. Régine, de son côté, répond qu'elle essaiera de venir, laissant entrevoir une issue fatale ou décisive pour leur relation."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le capitaine de France",
    "summary": "Le corps du capitaine de France, porté disparu, a été retrouvé au fond du précipice de Saint-Martin. L'identification formelle a été établie par les autorités grâce à une bague sigillée retrouvée sur la dépouille.",
    "paragraphs": [
      "Des paysans ont découvert le cadavre du capitaine de France au fond du précipice de Saint-Martin. Bien que le visage fût méconnaissable, son identité a été formellement confirmée par une bague gravée à son nom.",
      "Le frère de la victime, M. Étienne de France, s'est immédiatement rendu sur place pour prendre en charge les affaires du défunt."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Tamponnement en gare de Chartres",
    "summary": "Une erreur d'aiguillage a provoqué une collision ferroviaire en gare de Chartres ce matin. Le train express 142 a été percuté par une machine de l'État. Fort heureusement, aucun blessé grave n'est à déplorer.",
    "paragraphs": [
      "Un accident de chemin de fer s'est produit en gare de Chartres ce matin vers cinq heures. Le train express 142, en provenance de Brest, a été percuté par une locomotive de l'État suite à une erreur d'aiguillage.",
      "Plusieurs voitures ont été sévèrement endommagées par le choc. Heureusement, aucun blessé grave n'est à déplorer, bien que plusieurs passagers aient souffert de contusions légères. Une enquête est en cours."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une enfant martyr à Vaujours",
    "summary": "À Vaujours, la gendarmerie a secouru un adolescent de quinze ans, séquestré et affamé dans une écurie par sa tutrice. La mère de la victime, résidant à l'étranger, avait confié son fils contre pension.",
    "paragraphs": [
      "Une affaire d'enfant martyr occupe actuellement la localité de Vaujours. Un jardinier a découvert un adolescent d'une quinzaine d'années, en état de grande misère, enfermé dans une écurie par une dame B., chargée de sa garde contre une pension.",
      "Le jeune homme était nourri sommairement et interdit de toute sortie. La gendarmerie a ouvert une enquête sur cette situation inhumaine, tandis que la mère de l'enfant réside actuellement à Buenos-Ayres."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Économie",
    "title": "Le prix du charbon",
    "summary": "La hausse du prix du charbon inquiète. M. Paul Cambon souligne une surcharge dépassant un milliard de francs, fruit d'une consommation industrielle mondiale excédant désormais les capacités de production.",
    "paragraphs": [
      "La hausse du prix du charbon préoccupe vivement toutes les classes sociales. M. Paul Cambon, ambassadeur à Londres, a transmis des observations circonstanciées sur cette augmentation préoccupante, soulignant une surcharge pour les consommateurs excédant un milliard de francs.",
      "Selon M. Cambon, cette progression tarifaire ne saurait s'expliquer uniquement par les événements liés à la guerre du Transvaal ou à la situation en Chine, mais relève plutôt d'une croissance de la consommation industrielle mondiale n'étant plus corrélée à une hausse équivalente de la production."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Politique",
    "title": "La mission Foureau-Lamy",
    "summary": "En transit vers Marseille, les membres de la mission Foureau-Lamy s'apprêtent à être honorés. M. Foureau sollicitera des distinctions pour les officiers ayant brillé lors de cette expédition.",
    "paragraphs": [
      "Les membres de la mission Foureau-Lamy ont quitté Bordeaux pour gagner Marseille. M. Foureau prévoit de solliciter des décorations et de l'avancement pour les officiers et sous-officiers ayant loyalement servi au cours de cette expédition."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Marine",
    "title": "Nos sous-marins",
    "summary": "Le gouvernement prévoit la création d'une commission chargée de standardiser la construction des sous-marins pour renforcer la flotte navale et définir un type unique de submersible opérationnel.",
    "paragraphs": [
      "Suite aux expériences réalisées à Toulon, le gouvernement envisage la création d'une commission spéciale chargée de définir un type unique de sous-marin à construire en série. Cette mesure déterminée vise à accélérer la préparation militaire navale de la France.",
      "Le débat s'ouvre sur les avantages respectifs des sous-marins à accumulateurs et des submersibles capables de naviguer à la vapeur, l'objectif impérieux étant de doter notre pays d'une flotte cohérente, moderne et pleinement efficace."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Politique",
    "title": "Le retour du Général",
    "summary": "Le général André, ministre de la Guerre, est de retour à Paris après avoir été accueilli avec les honneurs à Marseille à son arrivée à bord du navire Chanzy.",
    "paragraphs": [
      "Le général André, ministre de la Guerre, est arrivé à Marseille à bord du navire le Chanzy. Après avoir été reçu par les autorités locales avec les égards dus à sa fonction, il a regagné Paris par le train."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "International",
    "title": "Le Courrier de Madagascar",
    "summary": "Le courrier de Madagascar confirme les progrès de la pacification sous le régime civil du général Galliéni et salue les efforts de modernisation télégraphique et ferroviaire malgré les obstacles.",
    "paragraphs": [
      "Le courrier de Madagascar est arrivé à Marseille, apportant des nouvelles de la colonie. Le général Galliéni y a instauré un régime civil dans plusieurs territoires, marquant ainsi les progrès tangibles de la pacification.",
      "Les travaux de la ligne télégraphique et les préparatifs ferroviaires se poursuivent activement malgré les difficultés géographiques. Le Journal officiel de Madagascar a, par ailleurs, salué l'acte de courage remarquable du sous-lieutenant Irrenée lors d'une reconnaissance périlleuse."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Actes de bravoure à Madagascar",
    "summary": "Lors d'une embuscade à Madagascar, le lieutenant Frenée, bien que grièvement blessé par une sagaie, s'est dégagé avec l'aide du tirailleur Threutraut. Le général Galliéni sollicite des distinctions pour leur héroïsme.",
    "paragraphs": [
      "Le lieutenant Frenée, pris au piège par une embuscade alors qu'il commandait une reconnaissance, a eu le corps traversé par une sagaie. Sans pouvoir retirer l'arme, il s'est dégagé au revolver avec l'aide dévouée du tirailleur Threutraut, seul soldat européen l'accompagnant.",
      "Le détachement a pu gagner le village de Befolaka, malgré la perte de dix miliciens. Threutraut y a organisé la défense avec une énergie indomptable contre une force ennemie largement supérieure en nombre.",
      "Le général Galliéni a demandé la croix pour Frenée et la médaille militaire pour Threutraut."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incursions Sakalaves",
    "summary": "À la frontière ouest de Bedafo, une escarmouche contre des pillards Sakalaves a permis de récupérer un bétail volé. Des renforts seront déployés pour sécuriser la région face à ces incursions récurrentes.",
    "paragraphs": [
      "À la frontière ouest de la province de Bedafo, l'officier de l'Imola a eu un engagement avec des pillards Sakalaves, auxquels il a repris un troupeau de bœufs. Les pillards ont eu deux tués. De nouveaux postes seront établis pour prévenir ces incursions."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Chronique Politique",
    "title": "La punition des coupables en Chine",
    "summary": "Pékin annonce des sanctions contre les instigateurs des troubles. La France et les puissances européennes, jugeant ces mesures insuffisantes, exigent l'exécution des principaux responsables, dont le prince Tuan.",
    "paragraphs": [
      "Une dépêche de Pékin confirme que le prince Tching et Li-Hung-Chang ont communiqué des décrets impériaux prévoyant la punition des responsables des récents troubles selon leur degré de culpabilité.",
      "L'empereur reconnaît les crimes de Tung-Fuh-Siang et charge le prince Tching d'indiquer la peine méritée, bien que les puissances européennes réclament des mesures plus fermes.",
      "La France, par ses plénipotentiaires, réitère que l'exécution des princes Tuan et Tchouang, ainsi que de plusieurs hauts responsables dont Tung-Fuh-Siang et Kang-Yi, est une condition essentielle de la paix."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Le mouvement insurrectionnel en Chine",
    "summary": "De nouveaux placards hostiles aux étrangers sont signalés par les Boxers. Les révoltes en cours pourraient, selon certaines sources, viser le renversement de la dynastie mandchoue.",
    "paragraphs": [
      "Des sources à Hong-Kong indiquent que les Boxers ont affiché des placards contre les étrangers à Lien-Chau et réquisitionné les locaux d'une mission.",
      "On craint que les soulèvements dans le Pei-Kiang, le Tung-Kiang et le Kouang-Si ne fassent partie d'un plan visant le renversement de la dynastie mandchoue, bien que la situation reste confuse."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame conjugal à Ixelles",
    "summary": "Un meurtre passionnel a secoué Ixelles-les-Bruxelles : une femme, suspectant l'infidélité de son époux, l'a abattu d'une balle dans la tempe pendant son sommeil avant de se rendre aux autorités.",
    "paragraphs": [
      "Un affreux drame s'est déroulé à Ixelles-les-Bruxelles. La nommée Tester, doutant de la fidélité de son mari, a tué celui-ci pendant son sommeil en lui tirant un coup de revolver dans la tempe. La coupable s'est constituée prisonnière."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Dégagement de la garnison de Philippolis",
    "summary": "Les troupes britanniques ont libéré la garnison de Philippolis, tenue sur une hauteur stratégique. Les Boërs, après une résistance acharnée, ont été repoussés avec des pertes lourdes. Des femmes furent faites prisonnières.",
    "paragraphs": [
      "Les forces britanniques sont parvenues à dégager la garnison de Philippolis, laquelle se maintenait héroïquement sur une colline stratégique. Les Boërs, vigoureusement repoussés, ont subi des pertes considérables lors de l'engagement.",
      "Il est rapporté que plusieurs femmes boërs, ayant activement pris part à l'attaque, ont été appréhendées et dirigées par train vers les centres de détention."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Capture d'un train anglais",
    "summary": "Un détachement boër, commandé par Hans Botha, a capturé un convoi ferroviaire entre Heidelberg et Greylinstadt après avoir saboté la voie, contraignant les troupes anglaises à une reddition immédiate.",
    "paragraphs": [
      "Une troupe boër, placée sous le commandement de Hans Botha, a réussi une opération audacieuse en s'emparant d'un train qui transportait une reconnaissance anglaise entre Heidelberg et Greylinstadt.",
      "Après avoir procédé au sabotage de la ligne de chemin de fer, les Boërs ont contraint le détachement adverse à déposer les armes, infligeant de lourdes pertes et faisant de nombreux blessés parmi les rangs anglais."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Départ de la classe",
    "summary": "Le ministre de la Guerre a officialisé les modalités du départ des jeunes soldats. La mesure concerne la classe de 1899 ainsi que les ajournés des classes antérieures, devant rejoindre leur unité ce mois de novembre.",
    "paragraphs": [
      "Le ministre de la Guerre a officiellement arrêté les modalités de mise en route des jeunes soldats du contingent. Cette mesure concerne non seulement les conscrits de la classe de 1899, mais également les ajournés des classes précédentes, dont le départ est fixé au cours du mois de novembre."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Tristesse de fin de saison",
    "summary": "La pluie persistante sur Paris transforme les allées de l'Exposition Universelle en bourbiers. Ces conditions météorologiques déplorables découragent les visiteurs en cette fin de saison incertaine.",
    "paragraphs": [
      "La pluie s'est abattue sans relâche sur Paris, transformant les allées de l'Exposition Universelle en véritables canaux boueux. Ce temps maussade décourage grandement les promeneurs.",
      "La prolongation de l'événement risque fort de manquer du succès escompté si les conditions météorologiques demeurent aussi défavorables à la flânerie."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Vengeance féminine",
    "summary": "Un drame conjugal a secoué la rue Villiers. Mme Marty a fait feu sur son époux, M. Marty, le blessant grièvement à la gorge. La victime a été transportée d'urgence à l'hôpital.",
    "paragraphs": [
      "Plusieurs détonations ont retenti rue Villiers, plongeant les habitants du quartier dans un vif émoi. Mme Marty, née T..., a fait feu sur son époux, M. Marty, atteignant ce dernier à la gorge.",
      "La victime, grièvement blessée, a été immédiatement transportée à l'hôpital, où son état demeure des plus inquiétants."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de suicide par caricature",
    "summary": "M. le juge d'instruction a rendu une ordonnance de non-lieu en faveur de Vailat, inculpé de tentative de meurtre suite à une violente altercation provoquée par une caricature du gérant du journal Le Rire.",
    "paragraphs": [
      "M. le juge d'instruction a rendu hier une ordonnance de non-lieu en faveur de Vailat, inculpé de tentative de meurtre.",
      "On se rappelle que ce dernier avait inséré une caricature représentant le gérant du journal Le Rire, à Paris, ce qui avait provoqué une vive altercation à ce sujet."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident à Neuilly-sur-Seine",
    "summary": "Un maréchal des logis d'artillerie a été grièvement blessé avenue de Neuilly, sa monture ayant glissé après avoir pris peur devant un tramway.",
    "paragraphs": [
      "Hier, vers midi et demi, un maréchal des logis d'artillerie passait à cheval, avenue de Neuilly, quand, à la montée du pont, sa monture effrayée par un tramway fit un brusque écart, glissa et s'abattit violemment contre le trottoir.",
      "Le malheureux sous-officier a été transporté à l'hôpital Saint-Martin après avoir reçu les premiers soins d'urgence."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vol et arrestation à Pantin",
    "summary": "Les agents cyclistes de Pantin ont procédé, durant la nuit, à l'arrestation en flagrant délit de trois individus, dont un nommé Buyra, pour un vol commis sur la commune.",
    "paragraphs": [
      "Les agents cyclistes de Pantin ont arrêté, la nuit dernière, en flagrant délit de vol, trois individus : Buyra, âgé de trente-sept ans, et deux de ses complices."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame au cimetière parisien",
    "summary": "Une femme a été découverte sans vie hier après-midi près d'une sépulture dans un cimetière parisien. Son identité demeure inconnue malgré l'intervention rapide des autorités.",
    "paragraphs": [
      "M. Meunier, effectuant hier vers quatre heures une ronde, a trouvé étendue sans vie, près de la tombe d'un sieur Girard, une femme dont l'identité reste à établir.",
      "Malgré les soins diligents qui lui furent prodigués par les secours, la malheureuse était déjà décédée."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de travail à Courbevoie",
    "summary": "Un grave accident de travail s'est produit hier soir à Courbevoie, causant de sérieuses blessures à un ouvrier charron qui a eu la cuisse et l'épaule brisées lors d'une chute.",
    "paragraphs": [
      "Hier soir, un ouvrier charron demeurant à Courbevoie a été victime d'un grave accident du travail, ayant subi des fractures multiples à la cuisse et à l'épaule dans l'exercice de ses fonctions."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enfant renversé à Levallois-Perret",
    "summary": "Un accident dramatique s'est produit à Levallois-Perret : une femme et deux enfants, transportés dans une brouette, ont été violemment renversés par un véhicule. La fillette a le bras écrasé et le garçon est fracturé.",
    "paragraphs": [
      "Mme Millot, demeurant rue des Marronniers, traînait ce matin dans une brouette son neveu, âgé de six ans, et sa nièce, Marie. Tous trois furent renversés par un véhicule circulant vivement.",
      "La fillette a le bras droit écrasé et le garçon la jambe fracturée. Ils ont été transportés d'urgence à l'hôpital pour y recevoir les soins nécessaires."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "International",
    "title": "Échec des Américains aux Philippines",
    "summary": "Un télégramme du général MacArthur confirme une retraite forcée des troupes américaines sur Narvacan, aux Philippines, après des combats acharnés ayant causé de lourdes pertes humaines.",
    "paragraphs": [
      "Washington, 26 octobre. Le général MacArthur télégraphie de Manille qu'après un combat acharné, les troupes américaines ont dû battre en retraite sur Narvacan.",
      "Le bilan fait état de dix morts et quarante-cinq blessés du côté américain, tandis que les pertes subies par les Philippins sont estimées plus lourdes encore."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Social",
    "title": "Une grève au Canada",
    "summary": "La grève des ouvriers tisseurs à Valleyfield, au Canada, a pris une tournure alarmante, exigeant l'intervention de la milice face à la vive animosité entre les populations canadienne-française et anglaise.",
    "paragraphs": [
      "Montréal, 26 octobre. La situation à Valleyfield est très grave et il suffirait de peu de chose pour déclencher une lutte de masses.",
      "La grève des ouvriers tisseurs a pris de telles proportions qu'il a été nécessaire d'appeler en toute hâte des compagnies de la milice sur le théâtre des désordres.",
      "La majeure partie de la population de Valleyfield se compose de Canadiens français dont l'animosité à l'égard des Anglais est devenue très marquée."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Littérature",
    "title": "La Ténébreuse de Georges Ohnet",
    "summary": "Le nouveau roman de Georges Ohnet, « La Ténébreuse », est un succès critique. Cette œuvre d'espionnage magistralement agencée captive par sa capacité exceptionnelle à maintenir l'intérêt et l'émotion du lecteur.",
    "paragraphs": [
      "Peu de livres ont fait autant de bruit que le nouveau roman de Georges Ohnet, La Ténébreuse, et à juste titre.",
      "La Ténébreuse est un roman merveilleusement agencé, dont l'espionnage est l'âme. Il faut le lire pour savoir jusqu'où peut être poussé l'art de faire jouer les ressorts de l'intérêt et de l'émotion."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Météorologie",
    "title": "Bulletin météo du 21 octobre",
    "summary": "Après une journée marquée par des pluies soutenues, le bulletin météo annonce l'arrivée d'une dépression venue d'Écosse, entraînant une chute probable des températures dans l'ouest du pays.",
    "paragraphs": [
      "La pluie est tombée abondamment pendant toute la journée d'hier.",
      "Les courants d'ouest se développent sur nos régions et la dépression signalée vers l'Écosse descend sur l'Angleterre en se creusant.",
      "Un abaissement de la température est probable dans l'ouest."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Agriculture",
    "title": "Promotion agricole",
    "summary": "La revue Agriculture Nouvelle consacre son dernier numéro à la vie rurale, avec les éclairages des docteurs Léon Lesage et Georges, ainsi que de M. A. Magnien sur la culture potagère et l'aviculture.",
    "paragraphs": [
      "La revue Agriculture Nouvelle propose dans son dernier numéro une série d'articles sur la vie rurale, incluant des contributions des docteurs Léon Lesage et Georges, ainsi que de M. A. Magnien, abordant des sujets variés allant de la culture potagère à l'aviculture."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Tir et Gymnastique",
    "title": "Concours national de tir de Satory",
    "summary": "Le palmarès du grand concours national de tir de Satory, comptant plus de 5 000 participants pour 85 000 francs de prix, sera officiellement publié à la mi-novembre.",
    "paragraphs": [
      "Les lauréats du concours national de tir de Satory s'impatientent quant à la publication du palmarès. Il convient de noter que le travail est considérable, impliquant plus de 5 000 tireurs et 11 000 prix pour une valeur totale de 85 000 francs.",
      "Le classement est désormais terminé et le palmarès sera diffusé vers la mi-novembre."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Gymnastique",
    "title": "Fête fédérale de gymnastique à Nice",
    "summary": "Prévue pour les prochaines fêtes de Pâques, la fête fédérale de gymnastique à Nice s'annonce comme une manifestation patriotique d'envergure, sous l'égide attendue du chef de l'État.",
    "paragraphs": [
      "La fête fédérale de gymnastique, prévue à Nice pour les prochaines fêtes de Pâques, s'annonce comme une manifestation patriotique majeure. Le programme, actuellement en cours d'impression, sera prochainement adressé aux sociétés françaises et étrangères. La présence du chef de l'État est vivement attendue."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Tir",
    "title": "Concours national de tir à Rennes",
    "summary": "La ville de Rennes organisera l'an prochain le 8e concours national de tir. Les organisateurs, forts du soutien départemental, sollicitent désormais l'appui de l'État.",
    "paragraphs": [
      "La ville de Rennes se prépare à accueillir le 8e concours national de tir l'année prochaine. Les organisateurs ont déjà reçu des promesses de soutien financier de la part du département et sollicitent désormais l'appui de l'État pour garantir le plein succès de cette manifestation."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les miettes du bonheur",
    "summary": "Le braconnier Tiennet exige une entrevue avec le maître de forges M. Verdunet, tandis qu'une rencontre chez Madame Verdunet bascule tragiquement sous l'impulsion de Jean Rédal.",
    "paragraphs": [
      "La vengeance du braconnier Tiennet se précise. Il exige une entrevue immédiate avec M. Verdunet, le maître de forges. Malgré les réticences du personnel, le patron finit par accepter de le recevoir.",
      "Parallèlement, une femme élégante, Lydie de Ratisbonne, se présente au domicile de Madame Verdunet. Une confrontation violente s'ensuit, impliquant Jean Rédal, qui commet l'irréparable sur la personne de Laure Verdunet."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Spectacles",
    "title": "Programme des théâtres du 27 octobre",
    "summary": "Retrouvez l'affiche des théâtres et opéras parisiens pour la soirée du 27 octobre, où se côtoient les chefs-d'œuvre lyriques, le drame historique et la comédie sur les scènes de la capitale.",
    "paragraphs": [
      "Opéra : Tannhäuser.",
      "Opéra-Comique : Carmen.",
      "Gymnase : La Guerre en dentelle.",
      "Vaudeville : Madame Sans-Gêne.",
      "La liste complète des représentations pour cette soirée inclut également les affiches des théâtres des Nouveautés, du Palais-Royal et de l'Odéon."
    ]
  }
];
