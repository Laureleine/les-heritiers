// Date: 1901-03-07
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-03-07 (Version Restaurée, 47 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique étrangère",
    "title": "L'Armée Russe",
    "summary": "Le voyage du général Pennequin à Saint-Pétersbourg confirme la solidité de l'alliance franco-russe. Avec un service militaire généralisé, la Russie dispose d'une force défensive colossale aux côtés de la France.",
    "paragraphs": [
      "L'envoi à Saint-Pétersbourg du général Pennequin, pour féliciter le tsar du rétablissement de sa santé, avait certainement une portée plus grande qu'une simple démarche de courtoisie. S'il s'était agi seulement d'exprimer à Nicolas II les sentiments que le gouvernement de la République éprouve pour lui, rien n'eût indiqué de confier cette mission au chef d'état-major général de l'armée française.",
      "L'accueil fait par l'empereur de Russie et par le monde militaire russe au chef d'état-major français a montré plus que jamais la force d'un accord qui est le principal facteur de l'équilibre européen.",
      "Le gouvernement russe, instruit par nos déboires, a établi le service militaire personnel pour tous les sujets de l'empire de vingt à quarante ans. Comme la population s'accroît sans cesse, le chiffre des conscrits augmente toujours, atteignant près d'un million en 1899.",
      "L'armée russe en temps de paix compte 36 000 officiers et 860 000 hommes, mais peut mobiliser des millions de soldats en temps de guerre, incluant les Cosaques, éléments redoutables de l'armée.",
      "La discipline dans l'armée russe affecte une allure paternelle. La force et la faiblesse de la Russie tiennent à l'énormité de son étendue, ce qui lui confère une puissance défensive immense, mais limite ses capacités d'offensive rapide par manque de chemins de fer.",
      "Le courage des soldats russes est fait d'une sorte de fanatisme religieux et patriotique. Unies, les deux armées russe et française sont appelées aux plus hautes destinées si on les force jamais à en appeler à la fortune des champs de bataille."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Miss Tempête",
    "summary": "Jean s'éloigne de la rue Chaptal, laissant Denise en proie à une jalousie grandissante. Elle souffre de l'influence de la mystérieuse mademoiselle Duprez-Morel, dont le portrait attise ses tourments intérieurs.",
    "paragraphs": [
      "Jean, maintenant, se faisait plus rare rue Chaptal. Ses apparitions y étaient courtes. Toujours, depuis quelque temps, il avait un prétexte pour abréger sa visite à « petite mère » et à sa sœurette.",
      "Denise se sentait broyer le cœur par une angoisse qui la torturait. Cette mademoiselle Duprez-Morel, cette rousse au teint de fleur, cette créature de beauté, de luxe et de caprice dont Jean parlait à présent comme de « Mademoiselle Renée ».",
      "Mais de tels secrets, ces secrets d'une âme toute blanche, un peu timide, un peu farouche aussi ; de tels secrets, à qui les confierait-on, quand on rougit de se les redire à soi-même ?",
      "Et lorsqu'au retour de Jean elle avait vu sur cette toile l'image de la Benedetta s'étaler insolemment dans un triomphe de beauté orgueilleuse et perverse, oui, elle avait eu une irrésistible impulsion de colère."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique intérieure",
    "title": "Le Président de la République à Toulon",
    "summary": "Le Président de la République effectuera un déplacement à Toulon. Il sera accueilli à Nice pour rejoindre le bâtiment amiral de l'escadre de la Méditerranée, sous l'égide du ministre de la Marine, M. de Lanessan.",
    "paragraphs": [
      "D'après des renseignements puisés à bonne source, le Président de la République se rendra de Nice à Toulon sur le bâtiment amiral de l'escadre de la Méditerranée au complet, sauf la division détachée dans le Levant.",
      "M. de Lanessan, ministre de la Marine, recevra à sept heures du matin le Président dans le canot qui le conduira à bord du cuirassé-amiral."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'Arrestation d'un Fonctionnaire",
    "summary": "Suite à une dégradation préoccupante de sa santé en détention, le prévenu Meyer a été transféré de sa cellule à l'Hôtel-Dieu. Il demeure placé sous la stricte surveillance du juge d'instruction Deschamps.",
    "paragraphs": [
      "L'affaire Meyer vient de prendre une tournure nouvelle par suite d'une sérieuse aggravation de l'état de ce dernier. Hier soir, le docteur Boyer déposait au parquet son rapport, rédigé après un examen attentif de la santé du prévenu.",
      "Cette nuit, M. Meyer a été pris, dans sa cellule, d'une crise terrible de suffocation. M. le juge d'instruction Deschamps l'a fait transporter à l'Hôtel-Dieu, où il est consigné à la disposition de la justice."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Sciences et Techniques",
    "title": "La Télégraphie sans Fil",
    "summary": "À Toulon, les essais de télégraphie sans fil progressent significativement. Grâce aux modifications apportées par le lieutenant de vaisseau Colin au matériel Ducretet, les transmissions atteignent désormais 80 km.",
    "paragraphs": [
      "Les expériences de télégraphie sans fil, commencées à Toulon il y a un an, ont été poussées sans interruption, et les résultats déjà obtenus permettent d'espérer que cette importante question recevra, à bref délai, une solution très satisfaisante.",
      "À Toulon, la commission opère avec le matériel fourni par M. Ducretet, modifié par le lieutenant de vaisseau Colin. La distance franchie dans les dernières expériences est voisine de 80 kilomètres."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique internationale",
    "title": "En Espagne",
    "summary": "M. Sagasta présente ce jour à la Régente son nouveau ministère. Il prévoit la dissolution des Chambres, des élections législatives en mai et une convocation du Parlement pour le mois de juin prochain.",
    "paragraphs": [
      "M. Sagasta présentera aujourd'hui, à midi, à la Régente, sa liste ministérielle. Les différentes listes publiées par les journaux ne contiennent donc que des conjectures.",
      "Le ministère est constitué de la façon suivante : Présidence du Conseil, M. Sagasta ; Affaires étrangères, le duc d'Almodovar ; Finances, M. Urzaiz ; Guerre, le général Weyler ; Intérieur, M. Moret ; Marine, le duc de Veragua ; Travaux publics, M. Villanueva ; Instruction publique, M. Romanones ; Justice, le marquis de Teverga.",
      "M. Sagasta se propose de dissoudre la Chambre et le Sénat. Les élections législatives auront lieu au mois de mai et le Parlement se réunira en juin."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Politique internationale",
    "title": "Les Événements de Chine",
    "summary": "Le maréchal de Waldersee signale la présence de troupes ennemies près de la Grande Muraille. Le colonel Ledebur est à la manœuvre. Par ailleurs, Yu Yin-Ling est rétabli dans ses fonctions au Hou-Pe.",
    "paragraphs": [
      "Le maréchal de Waldersee mande de Pékin que des éclaireurs ont signalé la présence, à l'ouest de la Muraille chinoise, d'une forte troupe d'ennemis. Le colonel Ledebur a été envoyé pour chasser les ennemis de la passe d'An-Tou-Sou-Ling.",
      "Yu Yin-Ling, ancien gouverneur réactionnaire du Hou-Pe, vient d'être replacé à son ancien poste. Une information officielle dément que l'empereur ait l'intention de quitter Si-Ngan-Fou actuellement."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Double Asphyxie dans un Hôpital",
    "summary": "Un tragique accident est survenu à l'hôpital de Laval : un jeune enfant et sa garde-malade ont péri asphyxiés à la suite d'un robinet de gaz resté ouvert durant la nuit.",
    "paragraphs": [
      "Un pénible accident, qui rappelle celui de l'hospice de Noisy-le-Sec, s'est produit à l'hôpital de Laval. Un jeune enfant opéré et sa garde-malade ont trouvé la mort à cause d'un robinet de gaz laissé ouvert par mégarde.",
      "Ce n'est qu'au matin qu'on s'aperçut que la malheureuse femme et le petit malade avaient cessé de vivre."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "La Catastrophe d'Irun",
    "summary": "Une violente explosion a dévasté les magasins de la douane à Irun, causée par la manipulation accidentelle de cartouches de fulminate. Le bilan provisoire est de cinq morts et neuf blessés.",
    "paragraphs": [
      "Une formidable explosion a complètement détruit les magasins de la douane, en gare d'Irun. C'est en procédant à l'ouverture d'une caisse de cartouches de fulminate que l'ouvrier préposé à ce travail a provoqué l'explosion de vingt-huit caisses.",
      "Le spectacle est navrant ; cinq cadavres ont déjà été retirés et neuf blessés ont été transportés à l'hôpital."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Politique intérieure",
    "title": "Réformes Militaires",
    "summary": "La commission de l'armée étudie la réforme de la loi de 1889. M. Le Hérissé propose d'imposer une période d'instruction bisannuelle de quatre semaines aux citoyens dispensés selon l'article 23.",
    "paragraphs": [
      "La commission parlementaire de l'armée a examiné hier le projet concernant les modifications à apporter à la loi de 1889 pour assurer le recrutement et la conservation des officiers de réserve.",
      "M. Le Hérissé a proposé un amendement stipulant que les dispensés de l'article 23 seront astreints à une période d'instruction de quatre semaines tous les deux ans."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame de l'Alcoolisme",
    "summary": "À la suite d'une scène de ménage provoquée par l'ivresse, une femme surnommée « la Piémontaise » a été violemment battue par son mari, qui a par la suite reconnu son acte devant l'évidence des faits.",
    "paragraphs": [
      "Une nommée Louise Bou, connue sous le sobriquet de « la Piémontaise », avait bu plus que de raison. Rentré chez lui, son mari, ivre également, se mit à la battre. La femme Bou gisait sur le sol, le visage en sang.",
      "Le mari, revenu à lui et conscient de son acte, a déclaré : « J'étais ivre et j'ai frappé sans savoir ce que je faisais. »"
    ]
  },
  {
    "id": 12,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le Parricide de Diesle",
    "summary": "Henry Duparchy comparaît devant la cour d'assises du Jura pour l'assassinat de son père, découvert dans un fourré le 27 octobre. Le crime serait lié à une relation passionnelle trouble avec une femme du monde.",
    "paragraphs": [
      "C'est aujourd'hui que doit comparaître devant la cour d'assises du Jura le jeune Henry Duparchy, accusé d'avoir assassiné son père à Diesle. Le 27 octobre dernier, le cadavre avait été découvert dans un épais fourré, non loin du domicile familial.",
      "Henry Duparchy, âgé de vingt-huit ans, avait abandonné ses études de droit. La perquisition menée par les autorités a révélé une correspondance suggérant que le prévenu entretenait une relation passionnée avec une femme du monde, laquelle semble avoir joué un rôle trouble dans ses intentions criminelles."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Feuilleton",
    "title": "Roman (suite)",
    "summary": "Dans cet échange épistolaire, une femme exprime avec ferveur l'intensité de son attachement et son besoin vital de tendresse, cherchant à rassurer son amant sur la sincérité de son amour.",
    "paragraphs": [
      "Que vous soyez loin de moi, j'en souffre tant. Mais Dunarcby ne croit pas, ou feint de ne pas croire, à l'affection que je lui témoigne.",
      "Elle s'en afflige, elle proteste. Le 5 juin 1899, elle lui écrit : « Alors, vous croyez que je me joue de vous ? De toute cette intimité de nos entrées, de nos goûts, de cette douce compréhension établie entre nous, il ne vous reste que ce doute affreux ! »",
      "« J'en ai l'âme déchirée, et le désir lâche m'a saisie de m'en aller de cette route charmante où nous nous engageons tous les deux. Il y a en moi d'immenses angoisses que vous avez remuées, que je croyais mortes, qui n'étaient qu'endormies. »",
      "« Hélas ! je l'étouffe, ce mal ; tellement, à mon insu et presque malgré moi, votre pensée s'est emparée de mon être. Je n'ai la force de rien ajouter ; je veux cependant vous dire merci de votre lettre qui m'eût été exquise sans cet affreux passage, et aussi combien me touche votre tendresse pour mon fils. »",
      "« Ne regrette jamais de m'écrire sous l'impression du moment. J'aime tant les sentir vibrer ! Il y a une vie si intense en toi, et cela m'est bon de voir ta force se fondre en douceur pour ma faiblesse. Oh ! mon Henry, comme j'ai besoin de ta tendresse, comme il me la faut, cette tendresse, à tout prix. »",
      "« Et la chanson d'amour continue. Comme ta lettre de ce matin était douce, tendre. Quelle jolie musique que ce langage d'amour ! Que je vais les bercer, les gâter, t'aimer ! Tu sais que j'ai toujours en mon âme d'étranges visions ; tout hier soir, c'était notre tendresse que je voyais, ainsi que des pervenches candides jonchant du velours blanc ! »",
      "« Comme nous sommes pareils l'un à l'autre, nous avons la même sensibilité excessive, la même âme ; je ne sais plus lequel de nous deux est moi, je crois que c'est toi. »"
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Actualités",
    "title": "Sommaire du Petit Parisien Illustré",
    "summary": "Le Petit Parisien Illustré propose cette semaine des illustrations sur l'arrivée de Triminoir dans le sud oranais et la lutte des femmes américaines contre l'alcool, en plus de récits de sauvetages.",
    "paragraphs": [
      "Le Petit Parisien Illustré en couleurs, actuellement en vente, publie deux dessins d'actualité remarquables. La première page illustre l'arrivée de Triminoir dans le sud oranais par les Arabes.",
      "La huitième page met en scène, avec force détails, la violence de l'action menée aux États-Unis par la Ligue des femmes américaines contre l'alcoolisme.",
      "Enfin, le numéro propose à l'intérieur le récit d'un émouvant sauvetage en Seine, ainsi que les portraits du général Pendezec et de l'explorateur Gentil."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "La Loi sur les Associations",
    "summary": "Le projet de loi sur les associations est débattu. M. Denis propose d'isoler la disposition interdisant aux congrégations d'enseigner, tandis que la gauche démocratique examine le texte.",
    "paragraphs": [
      "Le projet sur les associations prévoit une disposition ayant pour but d'interdire à toute congrégation non autorisée le droit d'enseigner.",
      "M. Denis, député des Landes, déposera cet après-midi une motion ayant pour but de disjoindre cette disposition du projet pour en faire une proposition spéciale.",
      "La question des associations a fait, hier, l'objet de la réunion tenue par la gauche démocratique, sous la présidence de M. Henri Ricard."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Social",
    "title": "L'Assurance et la Prévoyance sociales",
    "summary": "M. Millerand, ministre du Commerce, a exposé à la commission parlementaire la nécessité de réformer rapidement le mécanisme de la loi de 1898 relative aux accidents du travail, promettant le concours du gouvernement.",
    "paragraphs": [
      "M. le ministre du Commerce a été entendu hier matin, à la Chambre, par la commission d'assurance et de prévoyance sociales, présidée par M. Louis Ricard.",
      "Le ministre a exposé à la commission qu'il croyait le moment venu de modifier le mécanisme de la loi de 1898 sur les accidents du travail.",
      "M. Millerand a insisté sur l'urgence qu'il y aurait à saisir la Chambre dans le plus bref délai et a promis le concours du gouvernement."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Questions Ouvrières",
    "title": "Arbitrage et repos hebdomadaire",
    "summary": "La commission du travail a poursuivi l'examen du projet de loi Millerand sur l'arbitrage obligatoire, ainsi que la proposition Zevaès visant à instaurer une journée de repos hebdomadaire pour les salariés.",
    "paragraphs": [
      "L'examen du projet de loi Millerand sur l'arbitrage obligatoire a été poursuivi hier par la commission du travail.",
      "Elle a ensuite examiné la proposition de loi Zevaès, tendant à accorder aux ouvriers et employés du commerce et de l'industrie une journée de repos par semaine."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Étranger",
    "title": "La guerre au Transvaal",
    "summary": "Le succès de l'offensive du général French et le retrait des forces Boërs suscitent un vif optimisme dans les cercles militaires anglais. Sir Alfred Milner et Lord Kitchener ont rejoint le front pour le Nord.",
    "paragraphs": [
      "La reprise heureuse de l'offensive par le général French, la prochaine arrivée de renforts, la retraite de Botha vers le Nord, l'inaction de Delarey et l'expulsion des Boërs du Cap inspirent beaucoup d'optimisme dans les cercles militaires.",
      "Sir Alfred Milner est arrivé le 2 mars. Il est reparti hier pour le Nord avec Lord Kitchener. L'optimisme est général."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Deux frères criminels à Bruxelles",
    "summary": "Un drame familial frappe Bruxelles : Henri Michiels a tiré sur sa femme lors d'une scène de jalousie. Ce crime rappelle celui commis l'an dernier par son frère, Jean Michiels. L'auteur a été écroué.",
    "paragraphs": [
      "L'année dernière, Jean Michiels, employé de chemin de fer à Auderghem, tuait sa femme dans un accès de folie.",
      "Aujourd'hui, son frère Henri Michiels, au cours d'une scène de jalousie, a tiré trois coups de fusil sur sa femme qui fut gravement atteinte au flanc gauche. Le meurtrier a été arrêté et écroué."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Mésaventure du Duc de Manchester",
    "summary": "À peine arrivé à Londres après ses noces avec Mlle Zimmerman, héritière américaine, le duc de Manchester a été accueilli par un huissier pour une procédure judiciaire concernant une rupture de promesse.",
    "paragraphs": [
      "Le duc de Manchester, qui a épousé récemment Mlle Zimmerman, fille d'un riche millionnaire américain, est arrivé à Londres. Au moment où il débarquait, un huissier lui a signifié qu'il était poursuivi pour rupture de promesse de mariage."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Politique",
    "title": "Tumulte à la Chambre des Communes",
    "summary": "Lors d'un vote sur l'instruction publique à la Chambre des Communes, une agitation vive a conduit à l'expulsion forcée de dix députés irlandais après une empoignade générale avec les huissiers.",
    "paragraphs": [
      "Pendant un vote sur un projet relatif à l'instruction publique, les membres irlandais ont refusé de quitter leurs sièges et se sont mis à crier avec véhémence. Trois membres ont été expulsés de force par les agents de la Chambre.",
      "Au total, dix députés irlandais furent successivement expulsés, après un véritable corps à corps avec les huissiers. Le tumulte était indescriptible au sein de l'hémicycle. La séance a été levée précipitamment après cet incident."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Politique",
    "title": "Scène tumultueuse à la Chambre autrichienne",
    "summary": "Une séance violente a éclaté à la Chambre autrichienne : le député socialiste tchèque Pressl a été pris à partie par des pangermanistes après avoir déchiré le manuscrit du vice-président.",
    "paragraphs": [
      "La séance de la Chambre a été troublée par une scène des plus violentes. Le député socialiste tchèque Pressl, dans un geste d'agressivité, a arraché au vice-président le manuscrit qu'il tenait en main pour le déchirer sous les yeux des députés.",
      "Des députés pangermanistes se précipitèrent immédiatement sur M. Pressl pour le frapper. Il a été dégagé avec difficulté par ses amis politiques, le cou ensanglanté par la rudesse de l'altercation."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Étranger",
    "title": "Arrestation d'étudiants russes",
    "summary": "À Saint-Pétersbourg, la police a arrêté plusieurs étudiants de l'Université suite à une manifestation tumultueuse survenue lors d'un service divin à la cathédrale de Kazan.",
    "paragraphs": [
      "La police a arrêté, à Saint-Pétersbourg, des étudiants de l'Université lors du service divin célébré dans la cathédrale de Kazan, où le calme de la cérémonie avait été rompu par leurs agissements.",
      "Les étudiants ont en effet orchestré une manifestation tumultueuse dans l'enceinte religieuse. Les forces de l'ordre ont dû recourir à la force pour les cerner et les conduire à la maison de détention."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Faits Divers",
    "title": "Soldats contre policiers aux États-Unis",
    "summary": "Un grave incident a opposé des miliciens à la police en Pennsylvanie, où des soldats ont violemment libéré un camarade arrêté avant d'attaquer le commissariat, faisant plusieurs blessés.",
    "paragraphs": [
      "Des soldats de la milice de Pennsylvanie ont arraché des mains d'un policeman un de leurs camarades préalablement arrêté. Poursuivant leur révolte, les soldats ont ensuite attaqué le commissariat de police. Plusieurs blessés sont à déplorer dans les deux camps suite à cet affrontement."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Économie",
    "title": "Banquet du Commerce et de l'Industrie",
    "summary": "Sous la présidence de M. Millerand, l'Alliance syndicale du commerce et de l'industrie a tenu son banquet annuel, soulignant l'essor économique français et l'importance de l'enseignement professionnel.",
    "paragraphs": [
      "L'Alliance syndicale du commerce et de l'industrie a donné son banquet annuel sous la présidence de M. le ministre Millerand. Plus de cinq cents convives étaient présents à cette manifestation économique.",
      "Le ministre a insisté, dans son discours, sur l'essor remarquable de la France travailleuse et sur le rôle prépondérant que doivent jouer l'enseignement professionnel et le développement de l'esprit d'association dans le pays."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Spectacles",
    "title": "Critique de l'Opéra-Populaire : Charlotte Corday",
    "summary": "Le drame lyrique d'Armand Silvestre, Charlotte Corday, est jugé dépourvu de cohésion et de psychologie profonde, bien qu'il ait reçu un accueil chaleureux et des applaudissements du public.",
    "paragraphs": [
      "Charlotte Corday, drame lyrique d'Armand Silvestre, manque de cohésion et de continuité de développement. C'est une œuvre courte et superficielle.",
      "La musique est dépourvue de psychologie et d'émotion profonde. Toutefois, le public a paru sensible aux qualités de l'œuvre, qui a été vivement applaudie."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Faits divers",
    "summary": "M. Jean Dupuy reçoit le monde agricole, tandis que les obsèques de Félix Gras, capoulié du Félibrige, et du général Henrion-Bertier, maire de Neuilly, sont célébrées avec honneur.",
    "paragraphs": [
      "M. Jean Dupuy, ministre de l'Agriculture, a reçu le président de la Société d'encouragement pour l'amélioration du cheval français.",
      "Les obsèques de Félix Gras, grand capoulié du Félibrige, ont eu lieu hier à Avignon, en présence de Frédéric Mistral.",
      "Les obsèques du général Henrion-Bertier, maire de Neuilly, ont été célébrées hier avec les honneurs militaires."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Justice",
    "title": "Les droits du voyageur",
    "summary": "Le tribunal a condamné la Compagnie du Métropolitain à verser des dommages-intérêts à M. Cabany pour une réquisition policière jugée injustifiée au sein d'une station.",
    "paragraphs": [
      "Le tribunal a condamné la Compagnie du Métropolitain à payer des dommages-intérêts à M. Cabany pour une affaire de réquisition policière injustifiée dans une station."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Météo",
    "title": "La Tempête",
    "summary": "Une violente tempête sévit sur les côtes françaises, causant de nombreux accidents, tandis qu'à Paris, une bourrasque accompagnée de grêle a éclaté, poussant les marins du Havre à chercher abri.",
    "paragraphs": [
      "Une violente tempête sévit sur les côtes, occasionnant de nombreux accidents. À Paris, une terrible bourrasque a eu lieu, accompagnée de grêle.",
      "Au Havre, un grand nombre de bateaux de pêcheurs sont entrés en relâche pour s'abriter."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Social",
    "title": "Congrès de la Fédération des syndicats de la charcuterie",
    "summary": "Le congrès des charcutiers demande une taxe sur le saindoux végétal, renforce son bureau avec de nouveaux vice-présidents et clôture ses travaux par un banquet fraternel.",
    "paragraphs": [
      "Le congrès a demandé que les produits végétaux vendus sous le nom de saindoux paient, comme la margarine, une taxe spécifique et soient vendus au public sous leur véritable nom générique.",
      "Avant de se séparer, les délégués ont décidé d'adjoindre au bureau actuel de la Fédération deux nouveaux vice-présidents issus des syndicats départementaux : MM. Lyon et Senameau.",
      "Un banquet a réuni, dans les salons de l'Hôtel-Orient, les représentants de la charcuterie parisienne et leurs collègues de province. M. Jumin a exposé les doléances du petit commerce de la charcuterie."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Social",
    "title": "Licenciements à la manufacture d'armes de Châtellerault",
    "summary": "Suite à une réduction des crédits budgétaires, la manufacture d'armes de Châtellerault annonce le licenciement de 500 ouvriers sur 1 300 pour la fin mars. Le directeur priorise le maintien des pères de famille.",
    "paragraphs": [
      "Des licenciements vont être opérés à la manufacture d'armes de Châtellerault, par suite de la réduction des crédits de l'État. Sur 1 300 ouvriers actuellement employés, 500 seront congédiés à la fin du mois de mars.",
      "Des dispositions ont été prises par le directeur de l'établissement afin de conserver, autant que faire se peut, les ouvriers ayant charge de famille."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Social",
    "title": "Revendications des ouvriers du port de Dunkerque",
    "summary": "Le syndicat des dockers de Dunkerque exige une hausse des salaires aux pièces, ainsi que l'interdiction de l'emploi des femmes et des enfants de moins de seize ans sur les chantiers portuaires.",
    "paragraphs": [
      "Le syndicat des ouvriers du port a présenté aux entrepreneurs de nouvelles revendications : une augmentation du salaire pour le travail aux pièces, ainsi que le renvoi des enfants de moins de seize ans et des femmes employés au port.",
      "Le syndicat maintient sa position sur le salaire de la journée de huit heures, fixé à six francs, et réclame l'établissement de tarifs précis et rigoureux pour les heures supplémentaires."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Social",
    "title": "La grève des dockers à Marseille",
    "summary": "Marseille est paralysée par une grève des dockers. Entre tensions, perquisitions syndicales et interruption du trafic, les répercussions se font durement sentir jusqu'en Corse, privée de ravitaillement.",
    "paragraphs": [
      "La situation demeure tendue à Marseille, où des groupes de grévistes surveillent activement les chantiers et les différents môles d'embarquement.",
      "Des incidents ont éclaté lors du débarquement d'un vapeur espagnol, nécessitant l'intervention immédiate de la police. Des perquisitions ont par ailleurs été menées au domicile de plusieurs leaders syndicaux locaux.",
      "Les compagnies maritimes ont dû supprimer leurs escales ; le contre-coup de cette grève se fait cruellement sentir en Corse, où les marchandises manquent et où les frais de transport subissent une hausse sensible."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Social",
    "title": "Grève des mineurs à Montceau-les-Mines",
    "summary": "Après quarante-deux jours de conflit sans heurts, une lueur d'espoir émerge à Montceau-les-Mines. Le préfet et le maire travaillent à une sortie de crise alors que les soupes populaires soutiennent les mineurs.",
    "paragraphs": [
      "Un meeting a rassemblé huit mille personnes sur la place de l'Hôtel-de-Ville. Parallèlement, des réunions privées des mineurs se sont tenues salle Pézerat.",
      "Le préfet de Saône-et-Loire, M. Diény, s'est entretenu avec le maire de la commune. Une détente semble désormais possible après quarante-deux jours de grève menée sans désordre. Les soupes populaires continuent de fonctionner pour subvenir aux besoins des familles."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'attentat contre Mlle Zélénine",
    "summary": "L'état de Mlle Alexandrine Zélénine, hospitalisée à l'Hôtel-Dieu après un attentat, reste critique. Une visite de son amie Vera Gelo a confirmé la gravité du pronostic médical.",
    "paragraphs": [
      "Mlle Vera Gelo a rendu visite à son amie Mlle Alexandrine Zélénine, actuellement hospitalisée à l'Hôtel-Dieu. L'état de la blessée est jugé très grave par les médecins et une issue fatale est malheureusement à craindre.",
      "L'entrevue fut empreinte d'une vive émotion. Si Vera Gelo a d'abord exprimé l'espoir d'une guérison, son attitude est devenue froide et empreinte d'une grande retenue à l'issue de la visite."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une étrangère perdue à Paris",
    "summary": "Une vieille femme d'environ soixante-quinze ans, s'exprimant dans un patois italien, a été découverte errant place d'Italie. Faute de pouvoir établir son identité, elle a été conduite à la préfecture de police.",
    "paragraphs": [
      "Une vieille femme d'environ soixante-quinze ans, s'exprimant dans un patois italien, a été trouvée errant place d'Italie. N'ayant pu établir son identité ni sa situation, elle a été conduite à la préfecture de police."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un individu arrêté après une altercation",
    "summary": "Alexis Béraint, un ancien licencié ès-lettres, a été arrêté place Voltaire pour ivresse et agression envers les gardiens de la paix. Il a justifié son déclin par la misère après sa carrière de précepteur.",
    "paragraphs": [
      "Un homme nommé Alexis Béraint, trouvé en état d'ivresse place Voltaire, a agressé des gardiens de la paix après avoir été invité à rentrer chez lui.",
      "Au commissariat, il s'est exprimé en latin. Ancien licencié ès-lettres issu d'une bonne famille, il a expliqué avoir sombré dans la misère et l'ivrognerie après avoir été précepteur."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame familial rue Michaud",
    "summary": "Une violente dispute domestique a éclaté rue Michaud. Un journalier, après avoir blessé sa belle-mère, a retourné son couteau contre lui-même avant d'être transporté à l'hôpital Cochin.",
    "paragraphs": [
      "Célestin Thierry, journalier, a tenté de frapper sa femme avec un couteau suite à une dispute. Sa belle-mère a été blessée à la main en protégeant sa fille.",
      "Redoutant des poursuites, Thierry s'est lui-même infligé des blessures à la poitrine. Il a été transporté à l'hôpital Cochin."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort subite rue Gérard",
    "summary": "Mme Stéphanie L'Huillier, cuisinière, a été découverte sans vie à son domicile de la rue Gérard. Le docteur Gresset a conclu à une mort naturelle par embolie pulmonaire.",
    "paragraphs": [
      "Mme Stéphanie L'Huillier, cuisinière, a été trouvée morte à son domicile. Le docteur Gresset, requis pour le constat, a conclu à une mort naturelle par embolie pulmonaire."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation dans l'affaire du cadavre mystérieux de Lyon",
    "summary": "Le service de la sûreté de Lyon a interpellé un suspect dans l'affaire du cadavre mystérieux, après un signalement par une boulangère. L'homme était en état d'ivresse lors de son interrogatoire.",
    "paragraphs": [
      "Le service de la sûreté de Lyon a arrêté un individu suspect, désigné formellement par une boulangère. Il était dans un état complet d'ivresse lors de son premier interrogatoire au commissariat."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents et crimes en banlieue parisienne",
    "summary": "Série de faits divers en banlieue parisienne : accidents graves à Puteaux, Courbevoie et Enghien, ainsi qu'une agression à Épinay et un drame criminel à Clichy impliquant un menuisier.",
    "paragraphs": [
      "À Puteaux, une fillette a été scalpée et grièvement blessée par une voiture avenue de la Défense.",
      "À Courbevoie, un jardinier a été grièvement brûlé lors d'un début d'incendie provoqué par une lampe à pétrole.",
      "À Clichy, un menuisier nommé Maurice Arran a tiré des coups de revolver sur un débitant de vins, fracassant la mâchoire du fils de ce dernier avant d'être arrêté.",
      "À Épinay, un fabricant de bicyclettes a été agressé par deux individus qui ont tenté de le voler dans son atelier.",
      "À Enghien, un puisatier a été tué par la chute d'un seau rempli de briques lors de travaux de maçonnerie."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Faits Divers",
    "title": "Faits divers en province",
    "summary": "Chroniques provinciales rapportant un incendie de ferme à Nogent-le-Rotrou, un accident par arme à feu à Verdun et le suicide tragique d'un jeune apprenti boucher à Moulins.",
    "paragraphs": [
      "À Nogent-le-Rotrou, un incendie a détruit plusieurs bâtiments d'une ferme à Luigny.",
      "À Verdun, une jeune femme, Marie Aubry, a été gravement blessée par un coup de revolver alors qu'elle manipulait l'arme de son père.",
      "À Moulins, un garçon boucher de dix-sept ans s'est suicidé en se jetant sous un train après une réprimande de son patron."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Publication",
    "title": "Le Nouveau Larousse illustré",
    "summary": "Annonce de la fin du Tome IV du Nouveau Larousse illustré et calendrier détaillé des expéditions de souscription selon les régions et pays, avec rappel des tarifs de vente.",
    "paragraphs": [
      "Le Tome IV du Nouveau Larousse illustré se terminera avec le fascicule fin de la lettre G, qui paraîtra le 9 mars prochain.",
      "L'expédition des exemplaires souscrits en volumes se fera dans l'ordre et aux dates ci-après : Région du Midi de la France, Espagne, Portugal et bassin de la Méditerranée le 17 mars ; Région du Nord et de l'Est de la France, Belgique, Alsace-Lorraine, Allemagne, Russie le 17 mars ; Région du Centre de la France, Suisse, Autriche-Hongrie, Italie et Orient du 23 mars au 2 avril ; Région de Paris et environs du 4 au 11 avril ; Région limitrophe de Paris dans un rayon de 300 km du 13 au 18 avril ; les autres pays suivent les dates approximatives en fonction des volumes à expédier.",
      "Le Tome IV (fasc. 161 à 213) se vendra séparément : Broché, 38 fr. ; Relié, 57 fr.",
      "Rappelons que le prix de souscription est actuellement de 190 francs en fascicules, séries ou volumes brochés, et de 235 francs en volumes reliés."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Bourse et Finance",
    "title": "Crédit Foncier de France : Tirage du 5 mars",
    "summary": "Information sur le tirage du Crédit Foncier du 5 mars. La liste des gagnants sera publiée dans le Bulletin Officiel des Tirages, attribuant des lots sur 271 obligations.",
    "paragraphs": [
      "La liste complète du tirage sera publiée dans le Bulletin Officiel des Tirages du Crédit Foncier qui paraît le 10 et le 25 de chaque mois.",
      "Il attribue des lots à 271 obligations, dont 3 sont remboursables par 150 000 fr. et 47 à 100 000 fr."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Chronique Économique",
    "title": "Cours des Fécules et Suifs",
    "summary": "Note technique sur la fixation des cours officiels pour 100 kilos des fécules de grains et des suifs, précisant les distinctions géographiques et de nature de produits.",
    "paragraphs": [
      "Les cours officiels des fécules de grains (Oise, Aisne, Seine-et-Oise, Seine-et-Marne) sont fixés pour 100 kilos.",
      "Les cours officiels des suifs frais fondus, toute provenance, sont fixés pour 100 kilos hors Paris. Le suif en pains de la boucherie de Paris et le suif en branches pour la province ont également des cours établis."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Vie Culturelle",
    "title": "Spectacles du 7 mars",
    "summary": "Découvrez le programme des scènes parisiennes pour ce 7 mars. L'Opéra-Comique donne La Traviata, tandis que le Théâtre Français et les autres grands établissements de la capitale poursuivent leur répertoire habituel.",
    "paragraphs": [
      "Programme des théâtres pour le 7 mars : à l'Opéra-Comique, La Traviata est à l'affiche. Les salles du Théâtre-Français, du Théâtre Sarah-Bernhardt, du Palais-Royal, des Nouveautés et divers autres établissements parisiens proposent également leurs représentations habituelles.",
      "Le public est invité à consulter les programmes détaillés pour les horaires précis et le répertoire des pièces jouées dans les théâtres et music-halls de la capitale."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Marchés",
    "title": "Cours des Fourrages",
    "summary": "Le marché des fourrages demeure soutenu avec l'arrivée de 80 voitures. Les prix officiels sont fixés pour les pailles et foins, incluant les frais de livraison dans Paris, droits d'octroi et de camionnage compris.",
    "paragraphs": [
      "Le marché se montre soutenu, avec un arrivage de 60 voitures de paille et 20 voitures de fourrages.",
      "Les prix sont établis pour la paille de blé, de seigle et d'avoine, ainsi que pour le foin et la luzerne. Ces tarifs s'entendent pour les marchandises rendues dans Paris, droits de camionnage et octroi inclus."
    ]
  }
];
