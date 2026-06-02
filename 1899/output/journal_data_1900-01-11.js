// Date: 1900-01-11
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-11 (Version Restaurée, 44 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique",
    "title": "La Censure",
    "summary": "À l'approche du débat budgétaire, la Chambre des députés examine la suppression de la censure théâtrale, une pratique historique née sous Platon et appliquée en France depuis le XVe siècle.",
    "paragraphs": [
      "Dans quelques jours, la Chambre des députés, reprenant la discussion du budget, arrivera au ministère des Beaux-Arts et se trouvera en présence d'une proposition tendant à la suppression de la censure théâtrale. Je ne veux pas traiter ici cette question, ni en droit ni en fait. On a fait remarquer souvent que, sous notre régime démocratique et républicain, le théâtre est libre, le journal est libre, le livre est libre, et on a demandé pourquoi le théâtre ne l'est-il pas ?",
      "Platon fut le premier, en Grèce, qui proclama dans sa République la nécessité d'une loi qui astreignît le poète dramatique à ne point s'écarter de ce qu'on tient dans l'État pour légitime, juste, beau et honnête. Il demandait qu'aucune pièce ne fût représentée avant d'avoir été examinée par des censeurs.",
      "La censure dramatique fut établie, d'une façon régulière, en France dès le milieu du XVe siècle, c'est-à-dire dès l'origine du théâtre. Une loi de 1442 défend aux basochiens de jamais jouer une satire avant qu'elle eût été approuvée par un censeur.",
      "Le gouvernement de la Défense nationale, le gouvernement du 4 septembre, avait supprimé la censure. Un décret l'a rétablie le 1er février. Depuis lors, elle a vécu à peu près tranquille, subissant de temps en temps quelques bourrasques parlementaires et les réclamations d'auteurs.",
      "Quoi qu'on pense de la censure, on doit trouver, en tout cas, que l'emploi des censeurs n'est pas une sinécure. Et pour terminer cette courte étude par une note plaisante, je rappellerai ce trait demeuré classique dans l'histoire de la censure : en marge du manuscrit d'un vaudeville, dans lequel l'acteur Ravel, au restaurant, demandait au garçon, pour salade, de la barbe de capucin, le censeur, gravement, écrivait : « Inconvenant, il faut choisir une autre salade. »"
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Roman",
    "title": "Deux Passions - Deuxième partie",
    "summary": "Georges Dufresne confronte son épouse Suzanne au sujet des mystères qui entourent sa vie et sa fortune, provoquant une tension vive au sein de leur foyer avant un dénouement incertain.",
    "paragraphs": [
      "Georges Dufresne darda sur elle le regard de ses yeux noirs devenus très durs et répéta : « Ne me disiez-vous pas tout à l'heure que vous étiez très troublée ? »",
      "Suzanne ne baissa pas ses grands yeux sombres. Ils n'exprimaient ni colère ni dépit. Elle les tenait fixés sur ceux de son mari. Elle murmura seulement : « Je vous plains, Georges, de vous abaisser à des insinuations aussi blessantes pour moi. »",
      "Il s'emporta : « Eh ! s'écria-t-il, vous savez mieux que personne ce qui me fatigue et m'irrite. C'est qu'ici, dans cette maison, je vis en plein mystère ; c'est qu'il est mille détails de votre vie qui m'échappent ; c'est que je ne sais pas d'où vous sortez ni d'où provient cette bizarre fortune qui est la vôtre. »",
      "Elle prononça ces paroles avec tant de conviction et de dignité que son mari baissa la tête en murmurant : « Pardon. » Elle eut la force de lui sourire tristement et il alla errer de nouveau dans le parc en se demandant : « Ai-je fait fausse route, et n'était-ce pas là le bonheur ? » C'était la dernière fois qu'il devait se poser cette question."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Les travaux parlementaires",
    "summary": "La Chambre des députés se réunit cet après-midi pour installer son bureau et écouter le discours de son président, M. Deschanel, avant la reprise officielle des travaux prévue pour demain.",
    "paragraphs": [
      "La Chambre règlera cet après-midi son ordre du jour, après l'installation des membres de son bureau et le discours de M. Deschanel, son président.",
      "L'ouverture de la séance n'étant fixée qu'à trois heures, il semble certain que la reprise effective des travaux parlementaires n'aura lieu que demain vendredi."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Officiers",
    "summary": "Un nouveau décret présidentiel modifie les règles d'avancement des officiers, renforçant les pouvoirs du ministre de la Guerre et supprimant le vote secret lors des commissions de classement.",
    "paragraphs": [
      "Le Président de la République a signé mardi, au conseil des ministres, un décret important qui lui a été proposé par le général de Galliffet.",
      "Ce décret modifie les règlements antérieurs sur l'avancement, en donnant pleins pouvoirs au ministre de la Guerre pour arrêter et fixer en dernier ressort les listes des commissions de classement ; il supprime, en outre, le vote secret dans les commissions de classement."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Vieille femme assassinée",
    "summary": "Un crime atroce a frappé Avesnes-les-Aubert : la veuve Gérard, septuagénaire, a été assassinée dans sa cave par un individu entré par effraction.",
    "paragraphs": [
      "Un horrible assassinat a été commis la nuit dernière à Avesnes-les-Aubert sur la personne d'une femme, la veuve Gérard, née Hego, âgée de soixante-treize ans.",
      "La malheureuse, qui était sourde, a été surprise dans sa cave, au moment où elle y prenait du charbon, et a eu le cou littéralement scié par le meurtrier, qui est encore inconnu, et qui avait dû s'introduire par le soupirail."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "La Mission Foureau-Lamy et le territoire de Kouang-Tchéou-Wan",
    "summary": "Des nouvelles rassurantes parviennent de la mission Foureau-Lamy grâce à M. Daniel Dorian. Parallèlement, l'amiral Courrejolles organisera le transfert officiel du territoire de Kouang-Tchéou-Wan le 15 janvier prochain.",
    "paragraphs": [
      "On nous annonce de Saint-Étienne que M. Daniel Dorian, frère de M. Charles Dorian, député de la Loire, qui accompagne la mission Foureau-Lamy, vient de recevoir des nouvelles de ces courageux et hardis explorateurs.",
      "Un télégramme de l'amiral Courrejolles fait connaître qu'il remettra, le 15 janvier, au gouverneur général de l'Indo-Chine, l'administration du territoire de Kouang-Tchéou-Wan."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une disparition mystérieuse",
    "summary": "Le parquet de Meaux enquête sur la disparition inquiétante d'une épouse à Lagny. L'indifférence affichée par son mari, restaurateur, éveille de sérieux soupçons auprès des autorités et de la famille.",
    "paragraphs": [
      "Le parquet de Meaux vient d'être saisi d'une affaire étrange qui est appelée à causer, à Lagny et dans les environs, une vive émotion.",
      "Un nommé P., âgé de trente-sept ans, restaurateur, s'est retrouvé au centre d'une enquête après la disparition de son épouse le 2 janvier dernier. Le mari ne s'en inquiète pas autrement, ce qui alimente les soupçons des enquêteurs et de la famille."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Étranger",
    "title": "Guerre au Transvaal",
    "summary": "À Londres, l'enthousiasme retombe concernant les opérations du général White à Ladysmith. L'inaction du général Buller et la résistance acharnée des Boërs soulignent la difficulté persistante de la campagne anglaise.",
    "paragraphs": [
      "Les journaux anglais d'hier commentent avec moins d'enthousiasme que la veille l'avantage obtenu par le général White à Ladysmith. On se rend compte à Londres que ce fait d'armes est à peine un succès.",
      "Le général Buller s'est maintenu, depuis la défaite de Colenso, dans une prudente inaction, et le récent déploiement des forces anglaises devant les retranchements des Boërs a démontré, une fois de plus, qu'elles ne sont pas en mesure de les emporter."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Saisie de produits sur le steamer Henog",
    "summary": "Le steamer Henog a été intercepté par les autorités. Une cargaison suspecte composée d'instruments d'optique, d'essieux et de farine a été saisie, le matériel étant présumé destiné aux républiques sud-africaines.",
    "paragraphs": [
      "Le steamer Henog a été intercepté avec, à son bord, des instruments d'optique et des essieux. Une quantité de farine a également été saisie, le tout étant suspecté d'être destiné au Transvaal."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Résolution pour la médiation des États-Unis",
    "summary": "Washington, 10 janvier. Une résolution officielle a été déposée au Sénat américain visant à autoriser le gouvernement à proposer sa médiation dans le conflit opposant la Grande-Bretagne aux républiques sud-africaines.",
    "paragraphs": [
      "Washington, 10 janvier. Une résolution tendant à autoriser le gouvernement des États-Unis à offrir sa médiation entre la Grande-Bretagne et les républiques sud-africaines a été déposée aujourd'hui au Sénat."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Départ de l'Attaché Militaire Français",
    "summary": "Le capitaine chargé de suivre les opérations militaires a quitté Paris hier soir. Il a été salué à la gare de Lyon par M. le consul général de la République sud-africaine avant son départ.",
    "paragraphs": [
      "Le capitaine, chargé de suivre les opérations de l'armée, est parti hier soir. M. le consul général de la République sud-africaine est allé le saluer à la gare de Lyon."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Au Camp de Châlons",
    "summary": "Vingt capitaines d'infanterie, issus des vingt corps d'armée, ont rejoint l'École normale de tir du camp de Châlons pour y suivre leurs cours d'instruction jusqu'au mois d'avril prochain.",
    "paragraphs": [
      "Vingt capitaines d'infanterie, appartenant à chacun des vingt corps d'armée, sont arrivés hier à l'École normale de tir du camp de Châlons pour poursuivre les cours d'instruction jusqu'en avril."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Promotion du commandant Laguiche",
    "summary": "Le capitaine d'artillerie Laguiche, attaché militaire en Autriche-Hongrie, est promu chef d'escadron. Cette nomination entraîne la suppression d'un poste d'attaché auprès de la Triple-Alliance.",
    "paragraphs": [
      "Le capitaine d'artillerie Laguiche, attaché militaire de France en Autriche-Hongrie, a été promu chef d'escadron. Le ministre profitera de cet avancement pour lui donner un groupe de batteries, supprimant de fait un de nos derniers postes d'attaché militaire auprès de la Triple-Alliance."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "La Section du Train à Versailles",
    "summary": "L'école de Versailles enregistre peu de candidats issus de la section du train cette année, avec seulement cinq admissibles sur soixante sous-officiers, le gros des effectifs étant issu de l'artillerie et de la cavalerie.",
    "paragraphs": [
      "La section du train a fourni peu de candidats à l'école de Versailles cette année. La liste ne contient que cinq admissibles sortant de l'arme sur les soixante sous-officiers reçus, l'énorme majorité appartenant à l'artillerie et à la cavalerie."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Héros du Combat de Na-Moun",
    "summary": "Le capitaine Maitret et le clairon Heek ont fait preuve d'une bravoure exemplaire lors du combat de Na-Moun le 7 octobre, repoussant les forces chinoises malgré des blessures graves.",
    "paragraphs": [
      "Le capitaine Maitret s'est distingué le 7 octobre dans la direction d'une reconnaissance et lors du combat de Na-Moun, repoussant brillamment les forces chinoises. Le clairon Heek, également présent lors de ce combat, a fait preuve d'un grand courage malgré deux blessures graves."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Lancement du steamer Deutschland",
    "summary": "Le paquebot à grande vitesse Deutschland, destiné à la ligne Hambourg-Amérique, a été lancé avec succès aux chantiers navals Vulkan de Stettin, en présence de l'empereur Guillaume II.",
    "paragraphs": [
      "Stettin, 10 janvier. Le lancement du paquebot à marche rapide, le Deutschland, construit pour la compagnie Hambourg-Amérique, a eu lieu avec succès au chantier naval Vulkan, en présence de l'empereur."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Une singulière municipalité à Madrid",
    "summary": "À Anglesola, le maire, son adjoint ainsi que les veilleurs de nuit ont été appréhendés par l'autorité militaire pour avoir fomenté une émeute contre la gendarmerie et entravé le service des agents.",
    "paragraphs": [
      "Madrid, 10 janvier. L'autorité militaire a arrêté à Anglesola le maire, l'adjoint et les veilleurs de nuit pour avoir dirigé une émeute contre la gendarmerie, qu'ils avaient bloquée afin d'empêcher les agents de remplir leur service."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "La France à Saint-Domingue",
    "summary": "Washington dément toute intervention américaine dans le différend opposant Saint-Domingue à la France. Le président haïtien a reçu officiellement l'amiral français et son état-major.",
    "paragraphs": [
      "On déclare qu'aucun vaisseau de guerre américain n'interviendra dans le différend entre Saint-Domingue et la France. Une dépêche annonce que le président a reçu officiellement l'amiral français et son état-major."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "La question des Philippines au Sénat",
    "summary": "Le Sénat américain poursuit ses débats sur le sort des Philippines. Tandis que le républicain Beveridge prône l'annexion du territoire, le sénateur Hoar manifeste une opposition formelle.",
    "paragraphs": [
      "Washington, 10 janvier. Le Sénat a poursuivi la discussion sur la question des Philippines. Le républicain Beveridge soutient que les Philippines doivent être érigées en territoire américain, tandis que le sénateur Hoar s'y oppose fermement."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'Affaire Richetto : identification de la deuxième victime",
    "summary": "L'identité de la seconde femme retrouvée dans la fosse de Francheville, à Lyon, est confirmée : il s'agit de la veuve Delorme. Un reçu signé de la main de Richetto alourdit les charges contre lui.",
    "paragraphs": [
      "À Lyon, l'identité de la seconde femme retrouvée dans la fosse de Francheville est presque certaine. Il s'agirait de la veuve Delorme, une marchande de lingerie disparue le 22 juillet.",
      "Un reçu trouvé dans la loge de Richetto, signé par lui, mentionne explicitement le nom de la victime, confirmant ainsi les charges accablantes qui pèsent désormais sur l'accusé."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Social",
    "title": "Réunion du comité pour les réformes républicaines",
    "summary": "Le parti radical, réuni rue de Beaujolais sous la présidence de M. Mesureur, a entendu M. Léon Bourgeois appeler à l'union sacrée des républicains en vue des prochaines élections sénatoriales.",
    "paragraphs": [
      "Une réunion des représentants du parti radical a eu lieu rue de Beaujolais, présidée par M. Mesureur. M. Léon Bourgeois y a prononcé un discours insistant avec force sur l'union nécessaire des républicains en vue des prochaines élections sénatoriales, exhortant chacun à la défense vigilante de la République contre ses adversaires déclarés."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrestation de trois faussaires",
    "summary": "À la suite d'une plainte déposée par le Crédit lyonnais, trois individus ont été appréhendés pour faux en écritures. L'employé Devaux a avoué avoir orchestré ces fraudes avec l'aide d'un instituteur.",
    "paragraphs": [
      "Suite à une plainte déposée par le Crédit lyonnais, trois individus ont été arrêtés pour des faits de faux en écritures. L'employé Devaux, âgé de vingt ans, a reconnu devant les autorités avoir orchestré ces opérations frauduleuses avec l'aide de plusieurs complices, dont un instituteur suppléant."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Tribunaux",
    "title": "Le drame de la rue de Vanves",
    "summary": "Louis Dauvergne, ouvrier plombier âgé de cinquante ans, a comparu devant la cour de la Seine pour le meurtre de sa maîtresse. Il a été condamné à un an de prison.",
    "paragraphs": [
      "Louis Dauvergne, ouvrier plombier de cinquante ans, a comparu devant la cour de la Seine pour avoir donné la mort à sa maîtresse après l'avoir surprise en flagrant délit d'infidélité. Reconnu coupable dans cette affaire de crime passionnel, il a été condamné à une peine d'un an d'emprisonnement."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de suicide à Paris",
    "summary": "Une jeune fille, en proie au désespoir, s'est défenestrée du troisième étage. Grièvement blessée à la tête et au thorax, l'infortunée a été transportée d'urgence à l'hôpital par les secours.",
    "paragraphs": [
      "Désespérée, la pauvre enfant résolut de mettre fin à ses jours. Profitant d'un instant où elle se trouvait seule dans l'appartement familial, elle se précipita dans le vide.",
      "Dans sa chute, haute de trois étages, l'infortunée se fractura le crâne et eut plusieurs côtes enfoncées.",
      "Elle a été transportée d'urgence à l'hôpital le plus proche, où les médecins ont jugé son état fort préoccupant."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Informations administratives",
    "title": "Promotion au service de sûreté",
    "summary": "M. Dobtner, sous-chef du bureau du service de sûreté, est promu au grade de chef de bureau. Il conserve l'ensemble de ses attributions actuelles au sein du service.",
    "paragraphs": [
      "M. Dobtner, sous-chef du bureau du service de sûreté, vient d'être promu au grade de chef de bureau. Il conserve, dans ses nouvelles fonctions, l'ensemble de ses attributions actuelles au sein de ce service."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Vol audacieux au Parc des Princes",
    "summary": "Un vol culotté a été perpétré au Parc des Princes chez Mme de Gimel. Tandis qu'elle recevait de prétendus acheteurs, des complices ont dévalisé son salon. Le commissaire Beurain est en charge de l'enquête.",
    "paragraphs": [
      "Un vol des plus audacieux a été commis au Parc des Princes. Sachant que Mme de Gimel désirait se débarrasser d'une partie de son mobilier, trois personnes se présentèrent dans l'après-midi d'hier chez elle, rue des Pavillons, pour examiner les meubles à vendre.",
      "Pendant que les visiteurs détournaient l'attention de la propriétaire, des individus pénétraient au rez-de-chaussée et opéraient un véritable déménagement, emportant les pièces de plus grande valeur : un guéridon, des tentures anciennes et divers objets.",
      "On imagine la stupeur de Mme de Gimel lorsqu'en descendant, elle constata que la moitié du mobilier de son salon avait disparu. M. Beurain, commissaire de police, recherche activement les hardis auteurs de ce forfait."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident de travail à Bécon-les-Bruyères",
    "summary": "À Bécon-les-Bruyères, un apprenti serrurier de seize ans, nommé Lamonie, a été grièvement brûlé par une projection de plomb fondu lors d'une maladresse. Il a été transporté d'urgence à l'hôpital Beaujon.",
    "paragraphs": [
      "Hier après-midi, un apprenti serrurier âgé de seize ans, nommé Lamonie et demeurant à Neuilly, était occupé à faire fondre du plomb. Ayant voulu se baisser pour ramasser une pince et activer le feu, il fit un faux mouvement et renversa le récipient.",
      "Atteint profondément à la poitrine, à la gorge et aux bras, et cruellement brûlé, l'infortuné a dû être transporté d'urgence à l'hôpital Beaujon."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Explosion accidentelle à Bois-Colombes",
    "summary": "Un jeu dangereux tourne au drame à Bois-Colombes : le jeune Marcel Bouteillier a été gravement blessé au visage par l'explosion d'un pistolet artisanal transformé en canon miniature.",
    "paragraphs": [
      "Hier après-midi, des garçons s'amusaient à faire partir de la poudre dans un vieux pistolet, qu'ils avaient monté sur deux roulettes pour le transformer en petit canon.",
      "L'un des enfants, Marcel Bouteillier, âgé de douze ans, provoqua accidentellement l'explosion de l'arme, dont un éclat vint le frapper en plein visage. L'état du petit blessé est jugé grave."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Rectification concernant l'accident de La Champagne",
    "summary": "M. Bricout, entrepreneur en chaudronnerie, apporte une précision technique concernant l'incident du remorqueur La Champagne : il n'est intervenu que sur les tubes et non sur les chaudières.",
    "paragraphs": [
      "M. Bricout, entrepreneur de chaudronnerie à Saint-Denis, nous prie, au sujet de l'accident survenu hier matin au remorqueur La Champagne, de déclarer qu'il n'avait été chargé que des réparations des tubes, et non de celles des chaudières, qui ont été effectuées par une autre maison."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Affrontement avec des rôdeurs à Vincennes",
    "summary": "À Vincennes, une patrouille de gardiens de la paix a été violemment agressée lors d'une tentative d'interpellation. L'un des agents, blessé, a dû interrompre son service. Les cinq agresseurs sont au dépôt.",
    "paragraphs": [
      "Dans la nuit de lundi à mardi, des gardiens de la paix qui voulaient arrêter cinq individus ont été violemment pris à partie. L'un des agents fut si rudement frappé qu'il a dû suspendre son service. Les rôdeurs ont été conduits au dépôt."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Suicide par asphyxie à Malakoff",
    "summary": "M. Milhola, employé des postes, a découvert avant-hier le corps inanimé de son épouse, qui avait mis fin à ses jours par asphyxie à l'aide d'un réchaud à charbon dans leur domicile de Malakoff.",
    "paragraphs": [
      "En rentrant chez lui, avant-hier soir, M. Milhola, employé des postes et télégraphes, trouva la porte de son logement fermée à double tour. Après avoir appelé inutilement sa femme, il fit appel à un serrurier pour enfoncer la porte.",
      "En pénétrant dans la chambre, ils découvrirent le cadavre de Mme Milhola. La malheureuse s'était asphyxiée à l'aide d'un réchaud de charbon qu'elle avait allumé dans la pièce close."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide à Le Pecq",
    "summary": "Une marchande de légumes, Zélie-Marie David, a mis fin à ses jours hier au Pecq en ingérant une quantité importante de pétrole. Les raisons de ce geste désespéré demeurent inconnues.",
    "paragraphs": [
      "Hier, une marchande de légumes, nommée Zélie-Marie David, s'est donné la mort en absorbant le contenu d'une bouteille de pétrole. On ignore les motifs précis qui ont poussé cette malheureuse à un tel acte de désespoir."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide d'un vieillard à Achères",
    "summary": "M. Eugène Marinier, un vieillard de soixante-seize ans souffrant d'une affection cardiaque, s'est défenestré hier à Achères, concrétisant ainsi ses intentions suicidaires antérieures.",
    "paragraphs": [
      "Hier, M. Eugène Marinier, âgé de soixante-seize ans, s'est précipité de la fenêtre de sa chambre, située au premier étage. Le vieillard, qui souffrait d'une maladie de cœur, avait déjà, à plusieurs reprises, manifesté l'intention de se suicider."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Départements",
    "title": "Drame domestique à Clermont (Oise)",
    "summary": "Mme Léontine Carou a trouvé la mort dans un incendie accidentel à son domicile. Vraisemblablement causé par la chute d'une lampe à pétrole, le brasier s'est propagé avec une rapidité fatale.",
    "paragraphs": [
      "Dans la matinée d'avant-hier, M. Albert Brieogne quittait son domicile pour se rendre à son travail. Vers huit heures, il rentrait chez lui pour le déjeuner et trouva sa maison remplie de fumée et sa femme, Léontine Carou, morte dans un état épouvantable.",
      "Ses vêtements et ses cheveux étaient complètement consumés. Près d'elle gisait une lampe brisée, ce qui permet de supposer qu'en laissant tomber par mégarde sa lampe allumée, le feu s'est communiqué avec une rapidité fatale à ses vêtements."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tragique accident à Villers-Cotterêts",
    "summary": "Le nommé Camille Poix, ouvrier à la filature Guttin, a succombé à ses blessures lors de son transfert à l'hôpital après avoir été victime d'un grave accident du travail.",
    "paragraphs": [
      "Le nommé Camille Poix, ouvrier à la filature Guttin, a été victime d'un accident particulièrement grave. Immédiatement dégagé par ses collègues, on transporta le malheureux vers l'hôpital le plus proche, mais il expira durant le trajet."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Naufrages dans les ports",
    "summary": "Le port d'Équihen est en deuil après le naufrage d'un navire et la perte totale de son équipage. Parallèlement, le sémaphore de Cayeux signale la découverte de deux cadavres de marins de la barque Jeanne-Eugénie de Lannion.",
    "paragraphs": [
      "Le bateau d'Équihen a sombré vers midi en face de ce port, et tout l'équipage a péri. À Cayeux, le sémaphore signale que la mer a rejeté deux cadavres de marins appartenant à la barque Jeanne-Eugénie de Lannion, qui s'est perdue corps et biens."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Social",
    "title": "La grève des tisseurs",
    "summary": "Le conflit des tisseurs se poursuit. Alors que les fabricants maintiennent leurs conditions, les ouvriers préparent un référendum. 120 fabricants se sont engagés à respecter le tarif en vigueur pour cette année 1899.",
    "paragraphs": [
      "La grève des tisseurs continue. Les fabricants ont affiché leur ordre du jour. De leur côté, les tisseurs ont demandé la tenue de réunions de quartier afin de se prononcer, par voie de référendum, sur la continuation du mouvement.",
      "La chambre syndicale des tissus informe que 120 fabricants ont signé l'engagement de respecter le tarif de 1899."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Chronique Littéraire",
    "title": "Cartouche, roi des bandits",
    "summary": "Jules de Grandpré publie une biographie romancée et richement illustrée du célèbre bandit Cartouche. L'ouvrage est actuellement disponible en livraisons auprès des éditeurs Favard frères, boulevard Saint-Michel.",
    "paragraphs": [
      "Cartouche, ce voleur célèbre, a reçu les honneurs de la consécration littéraire. Jules de Grandpré publie un ouvrage intitulé « Cartouche, roi des bandits », qui retrace les exploits et la vie dramatique de ce criminel dont le nom est resté célèbre dans la langue.",
      "L'ouvrage, richement illustré, est vendu en livraisons par les éditeurs Favard frères, boulevard Saint-Michel."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Publicité",
    "title": "Véritable Lotion Miraculeuse",
    "summary": "Une lotion capillaire promet de restaurer la pilosité des cuirs chevelus les plus dégarnis en stimulant les racines. Ce produit est disponible en adressant votre demande à M. Cinuust, à Paris.",
    "paragraphs": [
      "Cent mille francs pour prouver qu'il n'a pas été radicalement guéri par la Véritable Lotion Miraculeuse. Un savant explorateur, occupé à des recherches dans le Céleste Empire, reçut quelques gouttes du précieux liquide sur la tête.",
      "Trois jours après, sa femme, le regardant faire sa toilette, s'aperçut que sur le sommet de la tête, qui était littéralement chauve, figurait une plaque de trois centimètres. En regardant de plus près, elle fut surprise de voir une touffe qui avait poussé là.",
      "Cette lotion réveille la léthargie des racines des cheveux. C'est une découverte qui fera du bruit par la force qu'elle donne au cuir chevelu. Pour se la procurer franco, adresser timbres ou mandat à M. Cinuust, rue du Bac, 109, à Paris."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Tragédies de l'Amour - XV (suite)",
    "summary": "Malgré les mystères entourant le meurtre de Girodias, Villefort semble plongé dans une tristesse croissante, bien que la menace judiciaire qui pesait sur lui se soit apaisée depuis l'année précédente.",
    "paragraphs": [
      "Le plus jeune des deux Roland avait pour son frère aîné une profonde tendresse. Il n'était pas sans s'apercevoir du changement survenu dans son caractère et chercha à en découvrir les causes.",
      "En effet, lorsque les soupçons du meurtre de Girodias planaient encore sur le duc, celui-ci pouvait, malgré son innocence, en être attristé. Mais aujourd'hui, bien que ce meurtre restât toujours enveloppé de mystère, certaines circonstances éloignaient le soupçon qui avait si longtemps pesé sur Villefort.",
      "La situation était donc bien changée depuis le mois de septembre de l'année précédente. Dans ces conditions, pourquoi Villefort paraissait-il de plus en plus triste ? Jamais, au temps où le pays était soulevé contre lui, on ne l'avait vu ainsi découragé."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Santé",
    "title": "La Revalescière Barry",
    "summary": "La Revalescière Barry se distingue comme un aliment reconstituant d'exception, favorisant la digestion, enrichissant le lait des nourrices et assurant une convalescence rapide ainsi qu'une croissance vigoureuse.",
    "paragraphs": [
      "Santé à tous rendue sans médecine par la Revalescière Barry. Extrait d'une lettre de M. Dedé, chimiste.",
      "Ce qui m'étonne le plus, c'est sa bienfaisante influence sur les organes digestifs, sa propriété de complète assimilation au corps humain, de bien nourrir et développer l'appétit, et surtout d'assainir et rajeunir le sang. Ce qui en fait un bienfait vraiment divin, c'est d'augmenter et bonifier le lait des nourrices.",
      "Pour les convalescents, c'est la nourriture par excellence, l'aliment indispensable pour réparer les forces épuisées par l'âge, le travail ou les excès. Elle est aussi le meilleur aliment pour élever les enfants dès leur naissance."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Économie",
    "title": "Compagnie de Chemins de fer",
    "summary": "Bilan financier de la Compagnie des Chemins de fer pour l'exercice clos au 31 décembre, mettant en lumière l'évolution positive des recettes annuelles.",
    "paragraphs": [
      "Compagnie des Chemins de fer. Augmentation du mois dernier. Recettes du 1er janvier au 31 décembre : augmentation générale des recettes."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Agriculture",
    "title": "L'Agriculture Nouvelle",
    "summary": "Sommaire de la revue L'Agriculture Nouvelle, proposant des études techniques sur l'assainissement, la transformation des produits laitiers, la sylviculture et l'aviculture internationale.",
    "paragraphs": [
      "Lire cette semaine dans L'Agriculture Nouvelle : Journal populaire illustré de la propriété. 16 pages de texte et de gravures.",
      "Une statistique intéressante, par Albert Martineau. L'assainissement des parcs et l'utilisation agricole des eaux d'égout, par G. Glénaux. Fabrication du cidre, par J. Troude. Beurre et margarine, par Eugène Dauval.",
      "Ce numéro contient en outre un intéressant article illustré sur une affection particulière aux arbres, les broussins, par Albert Vilcoq. Signalons également une remarquable étude de Loverdo sur l'Exposition de volaille morte de Londres."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Fourrages",
    "title": "Cours des Fourrages",
    "summary": "Relevé des cours du 10 janvier sur le marché de Paris-La Chapelle, détaillant les tarifs des pailles et fourrages, incluant les frais de livraison et les droits d'entrée.",
    "paragraphs": [
      "Paris-La Chapelle, 10 janvier. Bon marché pour les voitures de paille et de fourrages. Prix faiblement tenus sur les journées fourrées ferme. Paille de blé à 18 fr., paille de seigle 20 fr., paille d'avoine 18 fr., foin 35 fr., luzerne 36 fr., sainfoin 45 fr., regain 42 fr.",
      "Le tout rendu dans Paris, au domicile de l'acheteur, frais de camionnage et droits d'entrée compris par 100 bottes de 5 kilos."
    ]
  }
];
