// Date: 1900-04-06
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-04-06 (Version Restaurée, 32 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "L'assistance par la terre",
    "summary": "Face à la précarité, l'assistance par le travail agricole s'impose comme une alternative noble et moralisatrice à l'aumône, suivant l'exemple des jardins ouvriers initié à Sedan en 1889.",
    "paragraphs": [
      "Notre époque a singulièrement ennobli l'assistance. Elle a découvert et généralisé de plus fécondes et ingénieuses façons de donner. Si le secours pécuniaire direct, l'aumône toute nue, est malheureusement encore nécessaire dans la majorité des cas, les philanthropes, ces inventeurs de bonheur, arrivent à supplanter peu à peu ce moyen un peu humiliant et très onéreux par des procédés matériellement et moralement supérieurs. L'assistance par le travail est de ce nombre.",
      "Ce moyen présente d'admirables avantages ; il consiste à mettre à la disposition des nécessiteux un peu de terre à exploiter. L'assisté fait fructifier ce petit lot, s'en nourrit au besoin, en nourrit les siens. Il n'y a pas de honte à lui demander son pain ; et, à voisiner laborieusement avec elle, on gagne, avec le nécessaire matériel, tout un trésor moral.",
      "En 1889, Mme Hervieux, de Sedan, fonda l'œuvre qui s'est appelée, depuis, l'Œuvre des jardins ouvriers. Cette tentative eut beaucoup de retentissement et suscita un grand enthousiasme.",
      "D'autres villes françaises ont suivi le mouvement : Montreuil-sur-Mer, Beauvais, Boulogne, Besançon, Nancy. Actuellement, il y a en France trente-neuf municipalités qui ont imité l'exemple de Sedan et de Saint-Étienne. Partout où se pratique cette assistance par la terre, la misère et la gêne ont largement diminué.",
      "Il ne faut donc pas s'étonner du progrès universel du mode d'assistance dont je parle. Il reste à souhaiter que la France se montre digne d'elle-même dans cette nouvelle phase où semble s'engager la Bienfaisance."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "La Mort Mystérieuse",
    "summary": "L'arrivée imprévue du duc d'Argile et de Michel Gérard au manoir, dans une atmosphère de tension, impose un silence mystérieux à la comtesse, marquant le début de projets graves.",
    "paragraphs": [
      "À cet instant, les chiens de garde aboyèrent violemment ; un grand tumulte se fit, et la monumentale grille d'entrée roula sur ses gonds rouillés. La comtesse redressa la tête. Qui donc arrivait ainsi chez de pauvres femmes seules et malheureuses ?",
      "Tout d'abord et marchant le premier, un grand et beau vieillard s'avançait vers mademoiselle de Saint-Amand, les deux mains tendues. C'était le duc d'Argile. Il était accompagné d'un jeune homme, Michel Gérard.",
      "La comtesse, à cet instant, crut distinguer dans les yeux du duc d'Argile un impérieux commandement de se taire. Gabrielle, subitement, fut toute rose. Le duc, impénétrable, répondit à la comtesse qu'il venait de Paris et qu'il avait l'intention de passer un temps assez long dans le pays pour accomplir des choses graves."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'attentat contre le prince de Galles",
    "summary": "La France manifeste sa vive indignation après l'attentat manqué contre le prince de Galles, attribué à un jeune individu irresponsable.",
    "paragraphs": [
      "C'est avec un sentiment de bien vive réprobation qu'on a accueilli en France la nouvelle de l'attentat commis sur la personne du prince de Galles. Cet attentat, heureusement resté sans résultat, a eu pour auteur un gamin quelque peu irresponsable.",
      "Dès que la nouvelle de l'attentat a été connue à l'Élysée, le président de la République a envoyé un de ses officiers d'ordonnance à l'ambassade d'Angleterre porter l'expression de sa vive indignation."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Actualités Internationales",
    "title": "L'interrogatoire de Sipido",
    "summary": "Inflexible devant les magistrats de Bruxelles, Sipido, auteur de l'attentat, refuse obstinément de révéler l'identité de ses complices.",
    "paragraphs": [
      "Bruxelles, 5 avril. Sipido a été extrait hier matin de sa cellule et conduit au Palais de Justice, où il a subi un très long interrogatoire dans le cabinet du procureur général Willemaers. L'inculpé conserve la même attitude décidée et ne cesse de répéter qu'il regrette d'avoir manqué son but.",
      "Les magistrats instructeurs ont acquis la conviction que Sipido a au moins trois complices. Mais le coupable refuse énergiquement de donner la moindre indication à la justice."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "A la Chambre Belge",
    "summary": "La Chambre belge condamne l'attentat contre le prince de Galles, tout en voyant s'opposer les députés sur la légitimité de la politique coloniale britannique.",
    "paragraphs": [
      "À la Chambre, le baron Snoy, faisant fonctions de président, M. de Favereau, ministre des Affaires étrangères, et M. Woeste, de la droite, protestent avec énergie contre l'odieux attentat commis contre le prince de Galles. M. Vandervelde, socialiste, et M. Lorand, progressiste, tout en s'associant à la réprobation contre l'attentat, protestent avec énergie contre la guerre conduite par l'Angleterre contre un peuple libre."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'Assassinat de la Rue Clapeyron",
    "summary": "La Sûreté poursuit activement l'enquête sur le meurtre de Marie Grancher. La sauvagerie des sept coups portés au cœur et aux poumons laisse présager le crime d'un déséquilibré plutôt qu'un vol crapuleux.",
    "paragraphs": [
      "Le service de la Sûreté continue ses recherches pour retrouver l'assassin de Marie Grancher. Il y a tout lieu de croire que l'on se trouve en présence d'un tueur de femmes, c'est-à-dire d'un individu qui a commis son crime non point par mobile de lucre, mais sous l'empire d'une bestialité incroyable.",
      "Le praticien a constaté que Marie Grancher avait reçu dans la poitrine pas moins de sept coups de couteau ou de stylet, lesquels ont produit de multiples perforations au cœur et aux poumons."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Incendie à la Plaine-Saint-Denis",
    "summary": "Un violent incendie a ravagé l'atelier de M. Édouard Elaerts, fabricant de chevaux en carton-pâte. Le feu, causé par un poêle défectueux, a nécessité l'intervention des pompiers jusqu'au petit matin.",
    "paragraphs": [
      "Un violent incendie s'est déclaré mercredi soir, vers dix heures, avenue de Paris, à la Plaine-Saint-Denis. C'est dans l'atelier de M. Édouard Elaerts, fabricant de chevaux en carton-pâte, que le sinistre a pris naissance.",
      "L'incendie fut occasionné, dans l'atelier de peinture, par des étincelles jaillies d'un poêle. Le feu fut attaqué vigoureusement et les sapeurs-pompiers purent en rester maîtres vers trois heures du matin. Les dégâts sont évalués à 30 000 francs."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Actualités",
    "title": "Le Prince Kotohito à Vincennes",
    "summary": "Accompagné de sa mission, le prince Kotohito Kanin a visité le polygone de Vincennes. Il y a passé en revue les troupes de la garnison et a inspecté avec un vif intérêt le nouveau matériel d'artillerie.",
    "paragraphs": [
      "Le prince Kotohito Kanin et la mission japonaise se sont rendus hier à Vincennes. Après les présentations d'usage, le prince et ses officiers sont montés à cheval pour se rendre au polygone, où se trouvaient massées les troupes de la garnison de Vincennes.",
      "Le prince, accompagné du général de Planta, passa sur le front des troupes. L'artillerie, dont les batteries sont pourvues du nouveau canon, manœuvra avec sa maestria ordinaire. Le prince examina très attentivement le nouveau matériel."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Politique",
    "title": "Le dîner à l'Élysée",
    "summary": "Le Président de la République et Mme Émile Loubet ont offert hier soir un dîner officiel en l'honneur du prince Kotohito Kanin, suivi d'une soirée musicale privée pour leurs invités.",
    "paragraphs": [
      "Dans la soirée, le Président de la République et Mme Émile Loubet ont offert un grand dîner en l'honneur du prince Kotohito Kanin. Ce dîner a été suivi d'un concert auquel n'ont assisté que les personnes ayant pris part au repas et quelques invités choisis."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Guerre",
    "title": "La Guerre du Transvaal",
    "summary": "La situation britannique dans l'État d'Orange est préoccupante. Entravé par l'état de sa cavalerie, Lord Roberts subit une pression croissante des Boers, notamment après le revers de Sanna's Post.",
    "paragraphs": [
      "Depuis le combat de Karee's Siding et la surprise de Bushman Kop, la situation semble complètement transformée dans l'État d'Orange. Lord Roberts, immobilisé par l'état déplorable de sa cavalerie, se trouve, à l'heure qu'il est, complètement enveloppé par les Boers.",
      "Le commandant de Wet envoie de nouveaux détails sur le combat de Sanna's Post. Il raconte qu'il a attaqué les Anglais en dirigeant deux colonnes sur leur flanc. Les Anglais ont battu en retraite, abandonnant six canons et une centaine de wagons."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "La situation militaire autour de Springfontein",
    "summary": "À Springfontein, la tension reste vive alors que des détachements boërs menacent les lignes de communication. Les troupes britanniques demeurent sous les armes face à la menace d'une attaque imminente.",
    "paragraphs": [
      "Springfontein, 3 avril. On a des raisons de croire que des détachements boërs sont aux aguets près de la ligne de communication entre Springfontein et Bloemfontein, ayant pris des mesures pour couper les communications.",
      "Il y a eu, hier soir, une alerte à Springfontein, car on avait aperçu dans le voisinage quelques hommes.",
      "Londres, 5 avril. Un télégramme de Springfontein au Daily News rapporte que, la nuit dernière, les Anglais, craignant d'être attaqués, sont restés sous les armes. Les dépêches signalent de nombreux combats dans les environs."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Capture de documents secrets anglais",
    "summary": "La saisie d'un convoi britannique livre aux Boërs des documents stratégiques capitaux, incluant des cartes détaillées et des plans d'invasion du Transvaal et de l'État libre d'Orange élaborés par le commandant Meade.",
    "paragraphs": [
      "Brandfort, 2 avril. Une chose plus importante pour les Boërs, encore que la victoire de Bushman Kop, est la saisie, dans le convoi capturé, de tous les documents secrets des Anglais.",
      "Parmi ces documents se trouvent des cartes dressées avec un très grand soin et des tableaux pour les années 1900 et 1901, exposant des plans très élaborés pour l'invasion du Transvaal et de l'État libre d'Orange.",
      "Les pièces les plus précieuses sont celles préparées pour la marche sur Johannesburg en partant de Mafeking. Cet intéressant travail est dû au commandant Meade, qui avait le grade de capitaine au moment où il l'a dressé."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Le siège de Mafeking",
    "summary": "Le siège de Mafeking se poursuit avec intensité. Tandis que les Boërs déjouent des tentatives de sabotage, le général Cronje a repoussé une sortie britannique, laissant de nombreux blessés et prisonniers sur le terrain.",
    "paragraphs": [
      "Londres, 5 avril. On mande de Mafeking, le 24 mars, au Morning Post : la nuit dernière, les Boërs ont évacué la briqueterie occupée par les troupes britanniques ; ces derniers avaient l'intention d'y faire sauter des dépôts de nitroglycérine au moment propice.",
      "Camp boër de Malopo, 2 avril. Un double combat a eu lieu hier ; les Anglais ont tenté une sortie de Mafeking, pendant que le général Cronje attaquait dans les environs. Toutes les attaques ont été repoussées.",
      "Nous avons trouvé cinquante hommes de Plummer blessés sur le terrain et nous avons fait neuf prisonniers. Mafeking est toujours investi étroitement."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Ouverture du Volksraad de l'Etat libre",
    "summary": "Le président de l'État libre d'Orange a ouvert le Volksraad à Kroonstad, réaffirmant son espoir dans le triomphe final face à l'agression britannique et annonçant une députation diplomatique vers les puissances neutres.",
    "paragraphs": [
      "Pretoria, 2 avril. Le Volksraad de l'État libre s'est ouvert aujourd'hui à Kroonstad.",
      "Dans son discours, le président de l'État libre a déclaré que, malgré la capitulation de Bloemfontein, il n'a pas perdu l'espoir dans le triomphe final des deux Républiques.",
      "Le Transvaal a été forcé à la guerre ; il ne restait plus à l'État libre d'Orange qu'à se joindre à la République sœur, conformément aux termes du traité. La guerre a été engagée pour défendre l'indépendance chèrement achetée au prix du sang des ancêtres.",
      "Le président fait ensuite l'éloge du général Joubert et ajoute que les Anglais se sont rendus coupables de violation des privilèges accordés à la Croix-Rouge et au drapeau parlementaire.",
      "Les efforts que nous avons faits auprès de lord Salisbury en faveur de la paix sont accompagnés de l'envoi en Europe et aux États-Unis d'une députation qui s'entremettra auprès des puissances neutres afin d'arrêter l'effusion du sang."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Chronique Politique",
    "title": "À la Chambre des Communes",
    "summary": "La Chambre des Communes s'interroge sur le cas du comte de Sternberg, officier allemand capturé avec les troupes de Cronje, dont la libération et les justifications suscitent des doutes sur sa neutralité réelle.",
    "paragraphs": [
      "Londres, 5 avril. À la Chambre des Communes, M. Wyndham est interrogé sur le comte de Sternberg, officier allemand qui, ayant écrit des lettres compromettantes sur l'armée anglaise, a été fait prisonnier avec l'armée de Cronje.",
      "Pourquoi a-t-il été remis en liberté et autorisé à venir en Angleterre ? M. Wyndham répond : « Je ne sais rien officiellement sur cette affaire. Il paraît que le comte de Sternberg a été fait prisonnier avant la capitulation de Cronje. Ses papiers étaient en règle, il a pu fournir des explications absolument satisfaisantes »."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "La neutralité du Portugal",
    "summary": "L'opinion publique et la presse de Saint-Pétersbourg condamnent avec véhémence l'autorisation accordée par le Portugal à l'Angleterre de débarquer des troupes à Beira, qualifiant cette tolérance de crime civilisé.",
    "paragraphs": [
      "Saint-Pétersbourg, 5 avril. L'opinion publique et les journaux sont unanimes à condamner sévèrement la conduite du Portugal et l'autorisation qu'il a donnée à l'Angleterre de débarquer ses troupes à Beira.",
      "La tolérance par l'Europe de cette situation constituerait, écrit le Nouveau Temps, un crime du monde civilisé."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Sénat",
    "title": "Discussion du budget de l'Instruction publique",
    "summary": "Lors de la séance du 5 avril 1900, le Sénat a examiné le budget de l'Instruction publique, actant des augmentations pour les œuvres post-scolaires, le personnel enseignant et les Beaux-Arts.",
    "paragraphs": [
      "Séance du jeudi 5 avril 1900. Le Sénat aborde l'examen du budget du ministère de l'Instruction publique.",
      "M. Strauss demande de rétablir le crédit de 302 000 francs pour l'inspecteur chargé du développement des œuvres post-scolaires. L'amendement est adopté.",
      "Le Sénat vote une augmentation de 37 000 francs pour assimiler les brevetés de Cluny aux brevetés des facultés. M. Forest fait adopter un amendement pour améliorer les traitements du personnel de l'enseignement primaire malgré les réserves du ministre des Finances.",
      "Les chapitres du budget de l'Instruction publique sont adoptés, ainsi que le budget des Beaux-Arts."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Chambre des Députés",
    "title": "Discussion sur l'armée coloniale",
    "summary": "La Chambre a rejeté par une large majorité le rattachement des troupes coloniales à la Marine. Le général de Galliffet a souligné la nécessité de modérer les changements de garnison pour maintenir l'ordre.",
    "paragraphs": [
      "Séance du jeudi 5 avril. La Chambre a continué la discussion du projet de loi sur l'armée coloniale. M. Fleury-Ravarin a défendu son contre-projet, tendant au rattachement des troupes coloniales à la Marine.",
      "M. Lannes de Montebello, rapporteur, a soutenu le système du rattachement à la Guerre. Le général de Galliffet a déclaré que la France n'avait rien à redouter.",
      "La Chambre a repoussé, par 393 voix contre, le rattachement à la Marine.",
      "Dans une séance ultérieure, M. Maurice Binder interroge le ministre sur les changements de garnison. M. le général de Galliffet répond qu'il faut limiter ces changements au strict nécessaire pour préserver la discipline et l'instruction des troupes."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Social",
    "title": "Bulletin du travail : La manufacture du Gros-Caillou",
    "summary": "Sur le rapport de M. Merlou, la commission du budget a entériné le transfert de la manufacture des tabacs du Gros-Caillou vers la commune d'Issy.",
    "paragraphs": [
      "Sur un rapport complémentaire de M. Merlou, la commission du budget a définitivement voté le projet qui a pour but de faire transférer à Issy la manufacture des tabacs du Gros-Caillou."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Social",
    "title": "Les grèves de Carmaux",
    "summary": "Malgré les instances du préfet pour obtenir un ajournement au lundi, la direction de la Compagnie de Carmaux maintient la reprise du travail pour ce jeudi, provoquant l'intervention d'ouvriers opposés au mouvement.",
    "paragraphs": [
      "On télégraphie de Carmaux : La Compagnie avait décidé que la reprise du travail aurait lieu aujourd'hui jeudi. Le préfet a demandé d'ajourner à lundi, mais le directeur n'a pas cru devoir modifier sa décision.",
      "Les ouvriers membres du comité de protestation contre la grève se sont rendus auprès du préfet."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Arts et Culture",
    "title": "Ouverture du Salon des Artistes français",
    "summary": "Le Salon des Artistes français s'installe au rond-point de l'avenue de Breteuil. Une présentation soignée de sculptures et peintures, mettant en lumière des maîtres reconnus tels que MM. Verlet et Brozik.",
    "paragraphs": [
      "Le Salon des Artistes français s'ouvre aujourd'hui au rond-point de l'avenue de Breteuil. Quoique provisoire, cette installation est parfaite, mieux aménagée et mieux éclairée que les précédentes.",
      "Dans la section de sculpture, on remarque les œuvres de MM. Verlet, Hector Lemaire, Victor Peter et Forestier. La section des arts comprend des émaux, des bronzes et le monument commémoratif de la fondation du Collège de France par M. Guillaume.",
      "Pour la peinture, le salon central expose les grandes toiles de MM. Brozik, Gorguet, Rouffet et Béroad. Les thèmes militaires, les paysages et les portraits complètent cette exposition riche en talents."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Échos",
    "title": "Informations diverses",
    "summary": "Le Président de la République a honoré de sa présence le Salon des Artistes français. Par ailleurs, le musée de Grenoble s'enrichit d'une toile remarquable de Mme Pierre Baraglion.",
    "paragraphs": [
      "Le Président de la République, accompagné de Mme Loubet, s'est rendu au Salon, avenue de Breteuil. Sa visite a duré deux heures.",
      "Le musée de Grenoble augmente ses collections d'une toile de Mme Pierre Baraglion, « Un coin de ferme en Provence », qui avait été fort remarquée au dernier Salon."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Théâtre",
    "title": "Théâtre de la Porte-Saint-Martin : Jean Bart",
    "summary": "M. Edmond Haraucourt livre un drame historique vibrant sur Jean Bart. L'interprétation magistrale de M. Coquelin donne vie à ce héros populaire avec une finesse et une vérité saisissantes.",
    "paragraphs": [
      "Le drame historique ne me déplaît jamais, et quand, par surcroît, il se consacre à nos héros nationaux, je suis tout de suite conquis. Aussi hier, lorsque dans le drame nouveau consacré à Jean Bart, l'action semblait s'engager un peu lentement, je ne m'inquiétais point et je me disais qu'un personnage comme celui du fameux corsaire ne pouvait, entre les mains d'un écrivain comme M. Edmond Haraucourt, qu'exciter finalement le plus vif intérêt et émouvoir un public appelé à reconnaître ses exploits.",
      "M. Haraucourt a choisi, entre tous, Jean Bart, parce qu'il est peut-être le plus populaire, et aussi, a-t-il écrit, parce qu'il est homme du peuple et par suite, plus apte à être compris par le peuple, auquel l'écrivain tient à montrer les grands exemples du passé.",
      "M. Coquelin personnifie Jean Bart. C'est bien le héros tel qu'on le conçoit, un peu bourru mais bon, simple d'allure mais fin d'esprit, intrépide, décidé, grand par ce qu'il fait et par ce qu'il pense. On a acclamé l'éminent artiste."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits divers",
    "title": "L'agression du boulevard de Picpus",
    "summary": "M. Henri Pillard a été sauvagement agressé et dépouillé par quatre malfaiteurs boulevard de Picpus. La victime, blessée à l'arme blanche, est hospitalisée à Saint-Antoine.",
    "paragraphs": [
      "Un négociant, M. Henri Pillard, âgé de trente ans, domicilié cours de Vincennes, revenait du théâtre, hier matin, vers une heure, et suivait à pied le boulevard de Picpus, lorsqu'il eut la mauvaise idée d'entrer, pour se désaltérer, dans un débit de vins fort mal fréquenté.",
      "À sa sortie, il fut suivi par quatre individus qui l'entourèrent au moment où il arrivait à la hauteur du passage de la Nation. M. Pillard n'eut pas le temps de sortir son revolver et bientôt il roulait sur le sol, grièvement blessé à coups de couteau et de coups de poing américains. Les agresseurs lui volèrent alors un portefeuille qui contenait 1 500 francs en billets de banque, sa montre en or et son porte-monnaie.",
      "Le malheureux fut immédiatement dirigé sur l'hôpital Saint-Antoine, où il a été admis salle Dupuytren. M. Brunet, commissaire de police, aussitôt informé, a ouvert une enquête."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits divers",
    "title": "Audacieux malfaiteur",
    "summary": "Un sculpteur rue des Pyrénées déjoue une tentative de cambriolage. L'intrus, un repris de justice allemand libéré de Poissy, se faisait passer pour un colporteur afin de s'introduire chez le particulier.",
    "paragraphs": [
      "Dans l'après-midi d'hier, vers deux heures, M. Noé Mich, âgé de vingt-huit ans, sculpteur, demeurant rue des Pyrénées, se trouvait dans son appartement quand plusieurs coups de sonnette vinrent l'interrompre dans son travail.",
      "Il constata alors qu'un passe-partout manié par une main experte taquinait la serrure. Bientôt cette dernière céda et un individu très bien mis, coiffé d'un chapeau haut de forme, apparut. Le cambrioleur, qui ne paraissait nullement décontenancé, salua de façon fort polie, puis déclara à M. Noé Mich qu'étant courtier en articles de librairie, il venait faire ses offres de service.",
      "Le courtier en librairie était nanti d'échantillons si étranges qu'il fut emmené rapidement au commissariat de la place Gambetta mais finalement il déclara être d'origine allemande et se nommer Louis Bannais, âgé de quarante-cinq ans, sans domicile, attendu qu'il était sorti la veille de la maison centrale de Poissy."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Actualités",
    "title": "La fête du Vieux-Paris",
    "summary": "Demain samedi, le Vieux-Paris accueille un gala prestigieux au profit des œuvres de secours des journalistes et gens de lettres, réunissant les plus grands artistes des scènes parisiennes.",
    "paragraphs": [
      "Le programme de la fête donnée demain samedi au Vieux-Paris, au profit des caisses de secours de l'Association des gens de lettres et des associations de journalistes, est absolument merveilleux.",
      "Ce sera pour les dilettantes une occasion unique d'entendre le même jour, outre l'orchestre du concert Colonne, les artistes de l'Opéra, de l'Opéra-Comique, de la Comédie-Française, le grand pianiste Diemer, le flûtiste Hennebains, Mlle Delna, M. Fournets, vingt autres cantatrices et chanteurs connus, Paulin, Mlle Eugénie Buffet. Et il y aura la grande Sarah Bernhardt et les deux Coquelin."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers régionaux",
    "summary": "Des agressions violentes à Clichy et Saint-Denis, ainsi que de nouvelles investigations judiciaires menées à Arcueil-Cachan autour de l'affaire criminelle de la veuve Temple.",
    "paragraphs": [
      "Clichy. Hier soir à neuf heures et demie, à la suite d'une dispute à la sortie d'un bal, le nommé Émile, sans domicile, a grièvement blessé d'un coup de stylet dans le dos un journalier, Frédéric Davaux, âgé de vingt-sept ans, demeurant en garni rue Cousin.",
      "Saint-Denis. Au cours de la nuit de mercredi à jeudi, un employé de commerce, M. Pierre Elouet, âgé de trente ans, demeurant 38, boulevard de Château, revenait de son travail, lorsqu'il fut assailli, rue du Saulger, par trois individus qui le rouèrent de coups et le dévalisèrent.",
      "Arcueil-Cachan. M. Fagard, commissaire de police de Gentilly, muni d'une commission rogatoire de M. le Juge d'Instruction, a saisi hier tous les objets de l'étal de la boucherie de M. Potin. Les recherches faites pour retrouver l'arme dont s'est servi Chomiart pour assassiner la veuve Temple n'ayant donné aucun résultat, le juge instructeur reste convaincu que le criminel a remis le couteau chez son patron, après le forfait accompli."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Courrier des théâtres",
    "title": "Programme des scènes parisiennes",
    "summary": "Le théâtre Antoine inaugure ce soir 'La Clairière', et l'Opéra-Comique prépare une matinée de bienfaisance pour avril prochain en faveur de son personnel.",
    "paragraphs": [
      "Ce soir, au théâtre Antoine, première représentation de la Clairière, pièce en cinq actes, de MM. Maurice Donnay et Lucien Descaves.",
      "L'Opéra-Comique donnera, le samedi 21 avril, une matinée extraordinaire au profit de la Caisse des pensions viagères de l'orchestre, des chœurs et des employés de la scène."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Feuilleton",
    "title": "Toile de l'araignée (suite)",
    "summary": "Dans une lettre empreinte de désespoir, Manuela, victime d'un vol et menacée d'expulsion, implore son ancien amant, Miguel, de lui venir en aide pour le salut de sa fille.",
    "paragraphs": [
      "Mais trois jours après ce premier incident, pendant que nous nous étions absentées pour chercher, aux environs de Paris, un emploi équivalent à celui que nous venions de perdre, des voleurs se sont introduits chez moi. Ils ont descellé un coffre-fort contenant toute notre petite fortune ; ils l'ont emporté, et, depuis huit jours, voici l'abominable situation où nous sommes.",
      "Nous restons avec le peu d'argent que nous avions sur nous, à peine une centaine de francs. Il faut vivre, cependant, et dans un mois nous avons notre loyer à payer.",
      "Si notre propriétaire consent à attendre, cette attente qui est déjà bien problématique ne se prolongera pas plus de quelques jours, et, avant trois mois, nous n'avons aucun espoir de voir revenir le docteur Lecoutellier.",
      "C'est la misère, le dénuement, la faim, c'est dans quelques semaines notre expulsion de notre logement, la vente de notre pauvre mobilier. Et puis, je ne sais pas, je ne sais plus. C'est l'inconnu, le désespoir pour moi, cela, je commence à m'y habituer ; mais c'est aussi le désespoir pour ma pauvre petite Rolande qui n'a fait de mal à personne, chère créature de tendresse et de pureté.",
      "Miguel ! c'est pour mon enfant que je vous adresse une humble prière, que je vous ferais plus humble encore si je savais des mots pour mieux exprimer la désolation et le découragement de mon âme. Miguel, nous sommes du même sang. Vous m'avez aimée. Ayez pitié de mon enfant.",
      "Ah ! que j'ai hésité avant de vous écrire ! J'ai été sur le point de m'adresser à mon père. Mais je me suis rappelé son implacable condamnation. J'ai eu le pressentiment d'un refus inflexible. Et je me suis dit alors que si vous aviez été le seul, autrefois, à me témoigner un peu de pitié, vous seriez encore aujourd'hui le seul à me donner le secours que je sollicite comme une mendiante qui tend la main.",
      "Miguel, sauvez-nous. Envoyez-nous à titre de prêt, à titre d'aumône, un peu d'argent. Avec cinq cents francs nous parerions aux besoins les plus indispensables. Cinq cents francs. C'est bien peu pour vous. Ce serait le salut pour mon enfant. Je n'ose pas ajouter : pour moi aussi.",
      "Je n'ose pas non plus vous parler de ma reconnaissance, qui ressemblerait tant, je vous le jure, à un remords. Non. Je veux terminer cette lettre comme je l'ai commencée en faisant uniquement appel à la charité de votre cœur. Votre cousine, ah ! bien châtiée ! Manuela."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Feuilleton",
    "title": "Deux Passions - Vie perdue (XII suite)",
    "summary": "Georges Dufresne, en proie à une jalousie dévorante, manœuvre secrètement pour éloigner son rival et protéger Suzanne, tout en se préparant à un duel inévitable.",
    "paragraphs": [
      "Dans l'ombre, elle songeait à Georgette, à cette innocente victime d'un abominable crime et son cœur se révoltait à la pensée de mettre sa main dans celle de l'homme qui la lui avait enlevée.",
      "Il reprit d'une voix suppliante : « Suzanne, je vous en prie. » Et comme elle ne se rendait pas encore, il murmura : « Pour l'amour d'elle. » Elle céda. Leurs mains se touchèrent et Georges Dufresne dit brusquement : « Merci. » Elle ajouta : « Pardonne aux autres comme je vous pardonne. » Il ne répondit pas.",
      "Il quitta Suzanne et sans oser lever les yeux sur elle, il s'éloigna d'un pas rapide et rejoignit son domestique qui l'attendait. La jeune femme, en marchant auprès de lui, lentement, était arrivée au bord de la route. Elle entendit le roulement d'une voiture qui sortait d'un chemin vicinal, à quelque distance de sa courte avenue, et qui se dirigeait à l'opposé d'Orvilliers, au grand trot de Bayadère.",
      "Où allait-il donc ? Elle crut supposer qu'il voulait se rendre à Motteville ou à Barentin et de là à Paris. Elle se trompait. Le tilbury suivit quelque temps la grande route et, à deux kilomètres environ de la Coudraie, il prit un chemin de traverse, fit un long détour et, laissant le bourg d'Orvilliers sur sa droite, de façon à n'être vu de personne, il rentra plus loin dans la route d'Angeville et de Villequier.",
      "À une lieue de là, il rencontra un jeune paysan qui devait être domestique dans quelque ferme des environs, et qui se dirigeait tranquillement à pied vers le bourg. Il l'arrêta en lui disant : « C'est à Orvilliers que vous allez ? » « Oui, monsieur. » « Voulez-vous me rendre un service ? » « À votre disposition. »",
      "Georges Dufresne arracha un feuillet de son carnet et, en déguisant son écriture autant que possible, il traça au crayon : « Prière à M. le docteur Tavernier de venir à Angeville, aussitôt que possible, pour un malade. »",
      "C'était à la ferme de la Basse-Cour, tout près de l'avenue du château. Georges Dufresne donna le papier au paysan et lui mit quarante sous dans la main en disant : « On peut compter sur vous ? » « Certainement, monsieur. » « Bon et merci. » L'homme poursuivit sa route vers Orvilliers.",
      "Georges Dufresne se retourna pour l'examiner. Le paysan était un gars bien découplé et qui marchait d'un bon pas en faisant, pour se distraire, des moulinets avec son bâton. Il n'y avait pas de temps à perdre. Dès que le billet serait remis, Tavernier n'en avait que pour un instant à arriver à Angeville, soit qu'il prît son cheval ou sa bicyclette.",
      "Bayadère était là, heureusement. En quelques minutes elle franchit la distance qui lui restait à parcourir et remonta la falaise de l'Orfrasière. Le maître jeta les rênes à Crépinet en lui disant : « Attends-moi, je reviens. Il ne faut pas mettre la jument à l'écurie. » Le bossu demeura perplexe. Georges Dufresne ne prenait aucune précaution pour lui cacher ses manœuvres, mais Crépinet ignorait un point et c'était le principal : il ne savait pas ce que contenait le billet.",
      "Il se demandait quel était son but et, avec sa finesse de braconnier aussi rusé qu'un renard, il flairait dans l'air une odeur de perfidie et de guet-apens. À quelques mots échappés depuis quelque temps à son maître, dans ses courtes et rares visites à la Hiboutière, il avait compris qu'entre les deux anciens camarades des dissentiments s'étaient élevés et qu'une aversion croissante, mal dissimulée, les animait l'un contre l'autre.",
      "Assis sur son siège, les rênes de Bayadère entre les mains, il réfléchissait. Son maître était monté à sa chambre. Là, il écrivit rapidement quelques lignes sur deux feuilles de papier à lettres. Il les plia et les mit dans la poche de côté de son veston. Puis il prit deux pistolets à deux coups chacun, de ces armes dont on se servait il y a une cinquantaine d'années, et il les chargea avec soin. Il choisit aussi deux épées de combat, les mit dans un fourreau de serge verte et redescendit.",
      "Auparavant il s'était arrêté devant le portrait de Suzanne en murmurant d'un ton menaçant ces quelques mots : « Non, il ne l'aura pas ! Jamais ! » Lorsque Crépinet le vit reparaître avec ses étranges colis, il devina une partie de la vérité et se demanda : « Est-ce que, par hasard, il voudrait se battre avec son ami ? » Il se sentait obligé de s'enfuir pour échapper à la réprobation universelle.",
      "Et enfin dans son cerveau puissant, une idée avait germé : il voulait frapper celui qui s'était révélé tout à coup son ennemi, l'homme qui l'avait dupé par des semblants d'amitié, par sa perfide camaraderie ; il voulait le mettre hors d'état de profiter de sa ruse et surtout l'empêcher de prendre sa place auprès de l'adorable femme perdue à jamais pour lui."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Informations Pratiques",
    "title": "Marché au bétail du 5 avril",
    "summary": "Compte-rendu du marché aux bestiaux du 5 avril : baisse marquée pour les bœufs, marché difficile pour les veaux et les porcs, tandis que le commerce des moutons demeure soutenu avec des cours fermes.",
    "paragraphs": [
      "Bœufs : La vente est mauvaise, accusant une baisse de 5 francs par tête. On cote les Limousins à 0,66 fr., les Bourbonnais à 0,66 fr., les Choletais de 0,62 à 0,68 fr., et les Vendéens de 0,60 à 0,65 fr. le kilo net.",
      "Veaux : Vente difficile, mais les prix restent soutenus. On cote les choix de Brie, de Beauce et du Gâtinais de 0,90 à 1,00 fr. ; les champenois de 0,80 à 0,90 fr. ; les autres provenances de 0,55 à 0,70 fr. le kilo net.",
      "Moutons : La vente est bonne et les prix fermes. On cote les petits moutons du Centre de 1,05 à 1,10 fr. ; les métis de Brie de 0,95 à 1,05 fr. ; les métis beaucerons, champenois et bourguignons de 0,90 à 1,00 fr. le kilo net.",
      "Porcs : La vente s'avère difficile, avec une baisse de 1 centime par kilo vif. On cote les bons porcs de l'Ouest de 0,48 à 0,52 fr. et ceux du Centre de 0,45 à 0,48 fr. le kilo vif."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Marine",
    "title": "Départs et Arrivées des Paquebots",
    "summary": "Mouvements maritimes de début avril 1899 pour les paquebots des Messageries Maritimes et de la Compagnie Générale Transatlantique reliant l'Indo-Chine, les Antilles et les ports européens.",
    "paragraphs": [
      "Le paquebot Océanien (M. M.), en route pour l'Indo-Chine, est arrivé à Bombay le 3 avril, à 8 heures du soir.",
      "Le paquebot Laos (M. M.), en provenance de l'Indo-Chine, a quitté Port-Saïd le 4 avril, à 11 heures du matin.",
      "Le paquebot Amérique (C. G. T.), venant du Havre et de Bordeaux, est arrivé à Saint-Thomas le 4 avril, faisant route vers Haïti et escales.",
      "Le paquebot Labrador (C. G. T.), venant de Colon et escales, est parti de Pointe-à-Pitre le 4 avril à destination de Santander, Bordeaux et le Havre.",
      "Le paquebot Saint-Simon (C. G. T.), en provenance d'Haïti et escales, est arrivé au Havre le 5 avril, à 6 heures du soir.",
      "Le paquebot Antilles (C. G. T.) a quitté Colon le 3 avril pour Saint-Nazaire et escales."
    ]
  }
];
