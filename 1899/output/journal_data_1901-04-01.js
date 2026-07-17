// Date: 1901-04-01
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-04-01 (Version Restaurée, 48 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La leçon de Hambourg",
    "summary": "Analysant l'essor économique fulgurant de Hambourg, cet éditorial souligne l'urgence pour la France de s'inspirer des méthodes de ses rivaux afin de redynamiser ses propres infrastructures et son commerce maritime.",
    "paragraphs": [
      "Bien souvent déjà, nous avons attiré l'attention de nos lecteurs sur les questions de navigation et de commerce maritime qui tiennent, dans la vie des peuples modernes, une place de jour en jour plus large. Tout récemment encore, j'examinais ici même le trafic des ports français. Je voudrais aujourd'hui, franchissant la frontière, chercher à l'étranger des exemples et des leçons, en retraçant l'histoire de Hambourg, en montrant ce qu'était au milieu du siècle écoulé la grande ville hanséatique et ce qu'elle est devenue de notre temps.",
      "S'il est certain que le vrai patriotisme ne consiste pas à fermer ses yeux aux mérites de ses rivaux, mais bien à chercher la cause de leur succès pour s'en approprier le principe, nous ne perdrons pas notre temps en suivant, dans son développement, la cité commerçante dont s'enorgueillit l'Allemagne moderne.",
      "La richesse de Hambourg se manifeste avec éclat. Il y a un demi-siècle, en 1850, les entrées du port donnaient un tonnage beaucoup plus faible. En 1898, nous constatons qu'il entre à Hambourg pour trois milliards et demi de marchandises environ, qu'il en sort pour trois milliards, et que le mouvement total du port est par conséquent d'environ six milliards de marks ou huit milliards de francs.",
      "Cette histoire est tout un programme. Faisons, en la lisant, notre examen de conscience, et supportons, sans colère pour le passé comme sans inquiétude pour l'avenir, des déconvenues dont nous sommes responsables, mais dont il dépend de nous d'éviter le renouvellement."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Une Naissance Mystérieuse (Suite)",
    "summary": "Philippe Darrans, intrigué par l'identité noble de sa patiente dissimulée, regagne le boulevard Saint-Michel avec Théophile Jarroux, qui tente en vain de prolonger cette nuit par une halte dans une brasserie.",
    "paragraphs": [
      "Il y eut alors, derrière la porte à demi-fermée, des chuchotements, des explications sans doute, des instructions données, que la fine oreille de Théophile Jarroux percevait peut-être, car il écoutait très attentivement de ce côté.",
      "Mais Philippe Darrans, lui, était tout à sa malade, qu'il pouvait examiner, maintenant non plus tout à fait en malade, mais en femme. Et, si le visage lui était toujours dissimulé par l'écharpe blanche, il avait la sensation, bientôt précisée par des détails, qu'il se trouvait en face d'une personne appartenant à une classe très élevée.",
      "Ils regagnèrent silencieusement le boulevard Saint-Michel. Jarroux chercha une des dernières brasseries ouvertes, car il n'avait vraiment pas eu son compte ce soir. Mais il essaya vainement d'entraîner Philippe Darrans, qui avait hâte, dit-il, d'aller dormir pour être de bonne heure demain à l'hôpital."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Résultats des élections (Sénatoriales et Législatives)",
    "summary": "Bilan du scrutin du 31 mars : M. de Cuerivill est élu au Sénat et M. Delace à la Chambre. Un ballottage est ouvert dans la circonscription de Seine-et-Oise pour le siège laissé vacant par M. Marcel Habert.",
    "paragraphs": [
      "Élections sénatoriales du 31 mars (Finistère) : M. de Cuerivill a été élu en remplacement du général Lambert.",
      "Élections législatives du 31 mars (Charente) : M. Delace a été élu en remplacement de M. Paul Déroulède.",
      "Élections législatives du 31 mars (Seine-et-Oise) : Un ballottage est ouvert entre MM. Olivier Bascou, de Caraman, Georges, Gautherin et Le Chatelier, en remplacement de M. Marcel Habert."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Social",
    "title": "Les grèves à Marseille et la situation en Corse",
    "summary": "Le gouvernement tente de résoudre le conflit des dockers à Marseille, tandis que les tensions sociales provoquent des répercussions inquiétantes sur le prix des denrées à Ajaccio.",
    "paragraphs": [
      "Le président du Conseil et le ministre du Commerce ont reçu, hier après-midi, les délégués des armateurs et des entrepreneurs de Marseille afin d'examiner les conditions de règlement du conflit en cours.",
      "À Marseille, en ce 31 mars, des discussions violentes ont éclaté entre divers groupes de grévistes. Toutefois, malgré l'agitation, huit cents ouvriers ont pu être embauchés ce matin sur les quais pour effectuer des travaux urgents.",
      "Du côté d'Ajaccio, bien que quelques cargaisons aient pu être débarquées, la situation engendrée par les grèves marseillaises demeure préoccupante, entraînant une hausse marquée du coût des denrées alimentaires."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "International",
    "title": "Le recensement de l'Empire anglo-indien",
    "summary": "Le récent recensement de l'Empire anglo-indien porte la population à 294 millions d'âmes. Derrière une apparente croissance, liée aux annexions territoriales, se cache un recul démographique préoccupant dans les États indigènes.",
    "paragraphs": [
      "Les recensements sont à la mode. Nos voisins de l'autre côté du détroit viennent de recenser leurs colonies. En chiffres ronds, la population de l'empire anglo-indien atteint 294 millions d'habitants.",
      "C'est une augmentation de 7 millions sur le recensement de 1891, mais cet accroissement ne doit être imputé qu'aux additions de territoires. Au contraire, il faut signaler dans tous les États indigènes un fléchissement considérable du taux de la natalité et une augmentation inquiétante de la mortalité."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Banquet des sapeurs-pompiers",
    "summary": "Le général André, ministre de la Guerre, a présidé le banquet annuel de l'Union des officiers de sapeurs-pompiers, exprimant ses réserves sur une réduction du service militaire.",
    "paragraphs": [
      "Le général André, ministre de la Guerre, a présidé, hier midi, le banquet annuel de l'Union des officiers de sapeurs-pompiers du département de la Seine, à l'hôtel Continental.",
      "Le ministre a tenu à rendre hommage au dévouement des sapeurs-pompiers. Interrogé sur l'éventuelle suppression d'une période de service militaire de treize jours en leur faveur, il a déclaré ne pouvoir prendre d'engagement immédiat, en raison des débats en cours au Sénat sur la durée générale du service militaire."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Colonial",
    "title": "Mission Foureau-Lamy et Hospice à Clichy",
    "summary": "Des honneurs ont été décernés aux membres de la mission Foureau-Lamy. Par ailleurs, la ville de Clichy relance le projet de construction d'un hospice, en attente depuis vingt ans.",
    "paragraphs": [
      "Les ministères de la Guerre, de la Marine, des Colonies et de l'Instruction publique ont officiellement attribué des distinctions, notamment la Légion d'honneur et des médailles militaires, aux membres de la mission Foureau-Lamy ayant exploré le Sahara et le Soudan.",
      "À Clichy, la municipalité a annoncé le lancement imminent de la construction d'un hospice pour vieillards et orphelins, nommé Fondation du général comte Roquet, un projet d'utilité publique resté en suspens durant deux décennies."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un prêtre meurtrier à Pompéiana",
    "summary": "Drame sanglant à Pompéiana : lors d'une saisie à son domicile, l'abbé Giubatta Cunéo a fait feu sur le capitaine maritime Calvino avant de s'enfuir.",
    "paragraphs": [
      "Le village de Pompéiana est plongé dans l'émoi le plus vif. Ce jour, alors que l'huissier Balestra procédait à une saisie au domicile de l'abbé Giubatta Cunéo, ce dernier a brusquement ouvert le feu avec un revolver sur le capitaine maritime Calvino, le blessant, avant de prendre la fuite."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Expositions",
    "title": "L'Exposition de l'Enfance",
    "summary": "L'Exposition de l'Enfance au Petit Palais se prépare. M. Georges Cain y organisera une galerie remarquable de portraits d'enfants célèbres, incluant des figures politiques et littéraires.",
    "paragraphs": [
      "Les travaux vont bon train au Petit Palais pour l'installation de l'Exposition de l'Enfance. Celle-ci comprendra diverses sections dédiées aux salles de fêtes enfantines, aux crèches historiques, ainsi qu'à une vaste collection d'objets d'art et de jouets d'époque.",
      "L'attraction principale sera constituée par la galerie de portraits d'enfants illustres, organisée par M. Georges Cain, mettant en lumière des figures marquantes du gouvernement et de l'Académie française."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Exposition",
    "title": "L'Exposition du Petit Palais",
    "summary": "L'Exposition de l'Enfance proposera des sections sur l'éducation et l'hygiène, ainsi que des divertissements variés pour les enfants, dès son ouverture annoncée pour le 1er avril.",
    "paragraphs": [
      "Une section spécifique sera consacrée aux œuvres de l'art japonais traitant du thème de l'enfance.",
      "Dans les salles prolongeant ces deux galeries, seront installées les sections consacrées à l'enseignement libre et professionnel, aux œuvres de prévoyance sociale, au patronage, à l'hygiène infantile ainsi qu'à l'éducation morale et physique.",
      "Dans le petit salon carré situé à gauche, un buffet gratuit sera mis à disposition des enfants nécessiteux. L'atrium accueillera quant à lui les commerçants spécialisés dans les articles pour enfants.",
      "Des concours ludiques et originaux seront organisés chaque semaine : chant, déclamation, habillage de poupées, escrime, et même une pêche à la ligne dans les bassins du jardin du Palais.",
      "L'ouverture de cette belle et amusante exposition est prévue pour le 1er avril prochain."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Presse",
    "title": "Le Supplément Illustré",
    "summary": "Le Petit Parisien illustré de mercredi proposera de superbes gravures : la remise du drapeau à l'École polytechnique par le Président, une corrida au bois de Vincennes et les portraits de sociétaires de la Comédie-Française.",
    "paragraphs": [
      "Le Petit Parisien illustré en couleurs, qui paraîtra après-demain mercredi, donnera de très belles gravures. La première nous montre le Président de la République à l'École polytechnique lors de la remise du drapeau.",
      "La seconde reproduit une sanglante corrida au bois de Vincennes. À l'intérieur, nos lecteurs trouveront les portraits de Sophie Croizette et de Coquelin, sociétaires de la Comédie-Française, récemment décédés.",
      "Le Supplément Littéraire Illustré du Petit Parisien est mis en vente tous les jeudis."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Assassinat mystérieux en Belgique",
    "summary": "L'enquête sur l'assassinat à Bruxelles progresse : après la mise hors de cause d'un premier suspect, le juge a ordonné l'arrestation du dénonciateur, Van Rompay, soupçonné avec un complice.",
    "paragraphs": [
      "Bruxelles, 31 mars. La personne qui a été entendue samedi par le juge d'instruction a pu établir son innocence et a été remise en liberté.",
      "Le magistrat a dirigé son enquête vers le dénonciateur, un nommé Van Rompay, marchand de pommes de terre à Molenbeek-Saint-Jean. Conduit au Palais de justice, Van Rompay a été interrogé et son mandat d'amener a été converti en mandat d'arrêt. Un autre individu, soupçonné d'être son complice, a été également arrêté."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Fatal accident",
    "summary": "Drame à Labussière : le jeune Camille Ledoux, âgé de neuf ans, est décédé après s'être accidentellement tiré une balle dans la poitrine avec un revolver trouvé chez ses grands-parents.",
    "paragraphs": [
      "Bruxelles, 31 mars. Un enfant de neuf ans, Camille Ledoux, était allé voir ses grands-parents à Labussière, près de Thuin.",
      "À leur insu, il s'empara d'un revolver chargé, fit manœuvrer la gâchette et reçut la balle en pleine poitrine. Le malheureux enfant n'a pas tardé à succomber."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Scandale électoral en Angleterre",
    "summary": "À Londres, la contestation de l'élection du député conservateur Rutherford Harris a révélé des pratiques de corruption : un témoin a avoué avoir reçu de l'argent du comité électoral.",
    "paragraphs": [
      "Londres, 31 mars. L'examen d'une protestation contre l'élection du docteur Rutherford Harris, député conservateur de Monmouth, a donné lieu à un incident sensationnel.",
      "Un témoin, pressé de questions, a avoué qu'en sa qualité d'électeur il avait reçu des sommes d'argent du comité conservateur. L'affaire fut suspendue et l'avocat du docteur Harris a déclaré qu'il renonçait à prendre la défense de son client."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nécrologie",
    "title": "Mort du chef des Fenians",
    "summary": "James Stephens, fondateur et figure historique du fénianisme, s'est éteint à Dublin. Il avait consacré sa vie à la lutte contre la domination anglaise sur l'Irlande durant le XIXe siècle.",
    "paragraphs": [
      "Dublin, 31 mars. On annonce la mort, à un âge très avancé, de James Stephens, le fondateur et le chef du fénianisme. De 1858 à 1866, il déploya, au milieu des plus grands dangers, une grande activité pour arracher l'Irlande au joug de l'Angleterre."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Guerre",
    "title": "La guerre au Transvaal",
    "summary": "Près de Johannesburg, un convoi de marchandises a été déraillé par les Boers. Par ailleurs, les autorités britanniques communiquent un nouveau bilan des pertes en Afrique du Sud.",
    "paragraphs": [
      "Pretoria, 30 mars. — Hier soir, les Boers ont fait dérailler un train de marchandises sur la ligne de Johannesburg. Il n'y a eu aucun blessé à déplorer.",
      "Londres, 31 mars. — La liste quotidienne officielle des pertes dans l'Afrique du Sud fait état de trois tués, dix morts par maladie et huit blessés."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Sciences",
    "title": "La Fédération des Académies",
    "summary": "Les académies scientifiques internationales s'unissent en une association dont la première assemblée générale se tiendra le 15 avril prochain à l'Institut de France.",
    "paragraphs": [
      "Les académies scientifiques des principaux pays du globe viennent de se fédérer en association. L'idée, née en Allemagne en 1892, a été portée par M. Darboux et appuyée par lord Lister, président de la Royal Society.",
      "Le 15 avril prochain se tiendra, sous la coupole de l'Institut de France, la première assemblée générale de l'Association internationale des Académies des sciences. Cet organisme est appelé à exercer une influence considérable sur le monde scientifique."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Travaux à Cherbourg",
    "summary": "L'arsenal de Cherbourg modernise ses infrastructures navales avec l'achèvement d'une nouvelle cale de construction de 150 mètres, destinée aux cuirassés à fort tonnage.",
    "paragraphs": [
      "Pour permettre à l'arsenal de Cherbourg de construire des cuirassés à fort tonnage, une superbe cale de construction, longue de 150 mètres et large de 25 mètres, vient d'être achevée."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Politique",
    "title": "Le Banquet Doumer",
    "summary": "M. Doumer, gouverneur général de l'Indo-Chine, a été honoré lors d'un banquet réunissant huit cents convives, où son action au ministère des Finances a été publiquement saluée.",
    "paragraphs": [
      "La Société républicaine des conférences populaires a offert, hier, à M. Doumer, gouverneur général de l'Indo-Chine, un banquet réunissant huit cents convives.",
      "M. Berteaux, député, a félicité M. Doumer pour l'énergie dont il a fait preuve au ministère des Finances. Dans sa réponse, M. Doumer a souligné son attachement à la France et l'impérieuse nécessité de préparer les citoyens à leurs devoirs."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Social",
    "title": "Conflit des allumeurs de gaz",
    "summary": "Les allumeurs de gaz contestent le refus d'une allocation pour l'entretien des lanternes. Malgré l'appui du Conseil municipal, le conflit se poursuit et une réunion est prévue à la Bourse du travail.",
    "paragraphs": [
      "Les allumeurs de gaz réclament une augmentation de salaire pour le nettoyage des verres de lanternes. Bien que le Conseil municipal ait reconnu le bien-fondé de cette réclamation, la commission refuse jusqu'ici l'allocation demandée. Une réunion est prévue à la Bourse du travail."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Social",
    "title": "Grève des tramways à Bordeaux",
    "summary": "À Bordeaux, les ouvriers et employés de la Compagnie des tramways ont voté la grève à une large majorité, réagissant ainsi au refus persistant de la direction de réintégrer plusieurs de leurs collègues licenciés.",
    "paragraphs": [
      "La nuit dernière, les ouvriers et employés de la Compagnie des tramways ont décidé, par 543 voix contre 85, de se mettre en grève, suite au refus de la direction de réintégrer plusieurs collègues licenciés."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Chronique",
    "title": "Le Petit Parisien",
    "summary": "La pluie incessante a contraint les Parisiens à rester chez eux. Espérons que le soleil fera son apparition pour le 1er avril, afin d'égayer les divertissements de cette journée traditionnelle.",
    "paragraphs": [
      "Maintes fois, une pluie fine et continue a retenu au logis beaucoup de promeneurs qui n'auraient pas manqué de diriger leur flânerie vers les marchands de nouveautés et le pittoresque bric-à-brac de leurs voisins. Le temps sera-t-il plus clément aujourd'hui ?",
      "Quelques heures de soleil nous seraient bien dues, ne serait-ce qu'à titre de surprise et pour stimuler le joyeux entrain de ceux qui se livreront aux divertissements légendaires du 1er avril."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Humour",
    "title": "Chez le médecin",
    "summary": "Un patient s'inquiète auprès de son médecin d'un appétit et d'une vigueur hors normes. La réponse du praticien est aussi laconique qu'inattendue.",
    "paragraphs": [
      "« Docteur, ça ne va pas, et cependant je me sens solide comme un bœuf, je mange comme un loup. »",
      "Le docteur, l'interrompant : « Moi, à votre place, j'irais consulter un vétérinaire. »"
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Social",
    "title": "Assemblée générale des Alsaciens-Lorrains",
    "summary": "L'association Alsace-Lorraine a tenu son assemblée annuelle, rendant hommage à ses membres disparus et saluant son bilan financier de solidarité, couronné par une médaille d'or à l'Exposition universelle.",
    "paragraphs": [
      "L'association Alsace-Lorraine a tenu hier après-midi, à la mairie du 1er arrondissement, sous la présidence de M. Alfred Blech, son assemblée générale annuelle.",
      "Le président a ouvert la séance en prononçant une allocution au cours de laquelle il a fait l'éloge de quatre sociétaires morts pendant l'année : MM. Huyssen, le commandant Steser, M. Iweins, juge de paix du 7e arrondissement, et Moutard, inspecteur général des mines.",
      "M. Wiernsberger, membre du conseil, a ensuite donné lecture du rapport de l'exercice financier qui se solde par un excédent de dépenses de 8 819 francs. Il a fait ressortir que, pendant les trente années de son existence, l'association a distribué en secours la somme de 51 004 francs, sans compter les sommes dépensées pour créer des bourses.",
      "Il a rappelé qu'à l'Exposition universelle, l'association avait été récompensée par une médaille d'or.",
      "La réunion a été clôturée par le renouvellement partiel du conseil d'administration."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "Société de prévoyance des Alsaciens-Lorrains",
    "summary": "Lors de son assemblée annuelle, la société de prévoyance des Alsaciens-Lorrains a présenté son bilan mutualiste, soulignant son rôle crucial dans le soutien aux malades et la compensation des pertes de travail.",
    "paragraphs": [
      "La société de prévoyance et de secours mutuel des Alsaciens-Lorrains, dont le siège social est au 8, rue Perdonnet, a tenu hier après-midi, au gymnase municipal de la rue Japy, son assemblée annuelle.",
      "Pendant le scrutin, divers membres du bureau ont tour à tour pris la parole, exposant les travaux de la société, montrant que le service des malades a secouru nombre de sociétaires, et que la société a remboursé près de dix mille journées de travail perdues pour cause de maladie."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Culture",
    "title": "Société de l'Histoire de la Révolution",
    "summary": "La Société de l'histoire de la Révolution française a tenu sa séance annuelle à la Sorbonne sous la présidence de M. Jules Claretie, qui a déploré le retrait de la subvention municipale allouée à l'institution.",
    "paragraphs": [
      "La Société de l'histoire de la Révolution française a tenu hier après-midi, à deux heures, à la Sorbonne, sa grande séance annuelle, présidée par M. Jules Claretie.",
      "M. Jules Claretie a tracé le tableau des travaux de la société, regrettant que le nouveau conseil municipal ait refusé de voter la subvention que cette société recevait depuis longtemps.",
      "La séance a continué par d'intéressantes lectures sur des sujets de la Révolution par MM. Julien Tiersot, Gustave Isambert, Paul Houquet, etc."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Social",
    "title": "L'Œuvre du Trousseau",
    "summary": "L'assemblée générale de l'Œuvre du Trousseau, présidée par M. Chassin, a mis en lumière le dévouement de Mme Béguin et l'utilité sociale de cette institution éducative et familiale.",
    "paragraphs": [
      "L'assemblée générale annuelle de l'Œuvre du Trousseau a eu lieu hier. Malgré le mauvais temps, une foule nombreuse avait tenu à assister à cette cérémonie que présidait M. Chassin, maire-adjoint du vingtième arrondissement.",
      "M. Chassin a raconté avec quel dévouement Mme Béguin se consacrait à l'œuvre. Les intervenants ont insisté sur le but d'éducation scolaire de l'œuvre et son importance familiale.",
      "Après les discours, il a été procédé à une distribution d'effets de lingerie entre les membres participantes, puis un concert des plus brillants a eu lieu."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les Sauveteurs du 18e arrondissement",
    "summary": "La société des Sauveteurs du 18e arrondissement a célébré sa fête annuelle hier dans la salle de la Ligue fraternelle, lors d'une manifestation clôturée par une tombola et un bal.",
    "paragraphs": [
      "La société de secours aux blessés, les Sauveteurs du dix-huitième arrondissement, a donné hier une grande fête populaire dans la salle de la Ligue fraternelle.",
      "Après des discours applaudis, un concert a eu lieu, suivi du tirage d'une tombola et d'un bal ayant duré jusqu'à une heure avancée de la nuit."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Social",
    "title": "Les Commis municipaux de Paris",
    "summary": "La Société amicale des commis municipaux a organisé une soirée mondaine aux salons du petit Véfour, illustrée par des démonstrations d'escrime et un bal prolongé jusqu'au matin.",
    "paragraphs": [
      "La Société amicale des commis municipaux de la Ville de Paris a donné hier soir, dans les salons du petit Véfour, un concert et un bal des plus réussis.",
      "Les élèves de M. Griguard, professeur d'escrime, ont donné des assauts applaudis. Le bal s'est terminé à six heures du matin."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Justice",
    "title": "Le meurtrier de M. Bogoliepoff",
    "summary": "Le tribunal de Saint-Pétersbourg a condamné Karpovitch à vingt ans de travaux forcés et à la dégradation civique pour l'assassinat prémédité du ministre de l'Instruction publique.",
    "paragraphs": [
      "Le tribunal de Saint-Pétersbourg a condamné, hier, Karpovitch à la déportation pour vingt ans avec travaux forcés et à la dégradation civique, pour avoir tué, avec préméditation, M. Bogoliepoff, ministre de l'Instruction publique."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "La Fable et la Réalité",
    "summary": "Le comptable Frédéric Sambo, qui prétendait avoir été agressé boulevard de Belleville, a été confondu par ses propres frasques dans un débit de vin. La clémence a été accordée grâce aux supplications de son épouse.",
    "paragraphs": [
      "M. Frédéric Sambo, comptable de son état, avait soutenu mordicus avoir été agressé, boulevard de Belleville, par quatre individus malintentionnés. Toutefois, M. Rochier, débitant de vin, a rétabli la vérité en révélant que le sieur Sambo, dans un état d'ivresse manifeste, avait brisé une glace dans son établissement.",
      "Devant l'évidence de ces faits, la prétendue agression s'est révélée être une pure invention destinée à masquer son méfait. Sur les supplications émues de son épouse, M. le commissaire a consenti à faire preuve d'une certaine clémence à l'égard de cet homme."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'Incendie de la rue Courat",
    "summary": "Un violent sinistre a ravagé les entrepôts de M. Hanus, marchand de sciure de bois, rue Courat. Malgré l'intervention rapide des sapeurs-pompiers, les dégâts matériels sont fort considérables.",
    "paragraphs": [
      "Un incendie, dont l'origine reste à déterminer, a éclaté avant-hier matin dans les magasins de M. Hanus, marchand de sciure de bois, rue Courat.",
      "Les sapeurs-pompiers ont dû lutter durant une heure entière pour rendre le feu maître. Bien que le sinistre soit désormais éteint, les pertes matérielles sont fort considérables, bien qu'elles n'aient point encore été évaluées avec précision."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Justice",
    "title": "Un Couvent aux enchères",
    "summary": "Faute de paiement des droits d'accroissement, le couvent des Dames de l'Assomption à Auteuil a été vendu aux enchères. M. Chatmeau s'en est rendu acquéreur pour un million de francs.",
    "paragraphs": [
      "L'administration de l'enregistrement, constatant un défaut de paiement des droits d'accroissement, a fait saisir et mettre en vente aux enchères le couvent des Dames de l'Assomption, sis à Auteuil.",
      "L'immeuble a été adjugé à M. Chatmeau pour la somme d'un million de francs ; il semble, selon les bruits qui courent, que la communauté elle-même ait agi par cet intermédiaire pour conserver ses murs."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Bagarre dans une synagogue",
    "summary": "Trois frères, les Mathis, ont semé le trouble au sein de la synagogue de la rue Buffault en exigeant du rabbin des secours immédiats. Ils ont été conduits au dépôt après une vive résistance aux agents.",
    "paragraphs": [
      "Trois individus, les frères Aristide, Prosper et Médéric Mathis, ont provoqué un tumulte des plus regrettables dans la synagogue de la rue Buffault, après avoir exigé du rabbin des secours financiers auxquels ils ne pouvaient prétendre.",
      "Ayant opposé une résistance acharnée aux agents de la force publique appelés à la rescousse, les trois frères ont été menés devant M. le commissaire, qui a ordonné leur transfert immédiat au dépôt."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame à Rodez",
    "summary": "Un triste drame s'est produit à Labaume, près de Rodez. Un ouvrier mineur, le sieur Revel, a retrouvé son père, âgé de soixante-six ans, carbonisé dans sa demeure à la suite d'un incendie.",
    "paragraphs": [
      "Un ouvrier mineur demeurant à Labaume, nommé Revel, a fait une découverte atroce en rentrant chez lui : son père, âgé de soixante-six ans, gisait entièrement carbonisé au milieu de sa maison, ravagée par un incendie survenu en son absence."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Informations locales",
    "summary": "Chronique des faits divers en banlieue parisienne : mise en place de la police cycliste à Boulogne, accidents domestiques et affaires de police à Levallois, Argenteuil, Saint-Ouen, Kremlin-Bicêtre, Sceaux et Versailles.",
    "paragraphs": [
      "Boulogne-sur-Seine : Une brigade d'agents cyclistes est officiellement mise en place.",
      "Levallois-Perret : M. Jean Garaut, en proie à un accès de folie, a tiré des coups de feu sur des malfaiteurs imaginaires.",
      "Bois-Colombes : M. Louis Derot s'est fracturé l'épaule à la suite d'une chute accidentelle.",
      "Argenteuil : Marcel Pigénard, âgé de douze ans, a été grièvement blessé par l'éclatement d'un pistolet de fabrication artisanale.",
      "Saint-Ouen : Albert Blochard a été arrêté pour avoir frappé une femme rue Montmartre.",
      "Kremlin-Bicêtre : Mme veuve Lamy a été découverte morte par congestion dans son domicile.",
      "Sceaux : La ligue de défense des prévoyants de l'avenir a tenu une assemblée à l'Hôtel de ville.",
      "Versailles : Un incendie s'est déclaré rue des Réservoirs dans l'appartement occupé par Mme Chevrier."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Justice",
    "title": "Faits judiciaires en province",
    "summary": "Rapport sur plusieurs affaires judiciaires provinciales, incluant le vol chez un jardinier à Joigny, une arrestation pour détournements à Troyes et des délits sur mineures constatés à Reims.",
    "paragraphs": [
      "Joigny : Vol de bijoux commis au préjudice de M. Thibois, jardinier.",
      "Troyes : M. Lougueatre, directeur des hospices, a été arrêté sous l'inculpation de détournements de fonds.",
      "Reims : Henri Lemaire a été appréhendé par les autorités pour abus sur des mineures."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un caissier en fuite",
    "summary": "Un avis de recherche est lancé contre un caissier-adjoint du Mont-de-Piété d'Alger, activement poursuivi par la justice pour des détournements de fonds importants.",
    "paragraphs": [
      "Un caissier-adjoint du Mont-de-Piété d'Alger est actuellement recherché par les autorités pour des détournements de fonds s'élevant à une somme considérable."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Revue commerciale",
    "title": "Grains et farines",
    "summary": "Le marché des grains reste calme sous l'influence de conditions climatiques variées. Si les semailles de printemps accusent un retard, le cours des farines et des blés se maintient avec une tendance prudente.",
    "paragraphs": [
      "Pendant la semaine, il est tombé de la neige en abondance dans toutes les directions ; mais depuis deux jours le temps est devenu plus sec et, hier, la température est devenue relativement douce. Les semailles du printemps sont en retard, sauf dans quelques pays privilégiés où l'on a pu semer les avoines.",
      "Cette anomalie dans la température aura pour effet, sans doute, de diminuer les emblavements des blés de mars, ce dont on ne peut se plaindre. Il y a beaucoup de blés d'hiver ensemencés ; la culture a plus d'intérêt à semer des menus grains ; c'est ainsi, par exemple, que l'avoine se vend relativement plus cher que le blé, et il y aurait pénurie s'il n'y avait pas eu des arrivages constants d'avoines exotiques dans nos ports.",
      "Sur notre place, les farines de commerce ont fait l'objet d'affaires très calmes ; cependant le livrable a maintenu ses prix, mais hier la liquidation de mars a été effectuée. On a terminé hier en cotant la liquidation de mars à 23,35, le livrable d'avril, les mois de mai, et les quatre derniers mois de 25,50 à 25,75.",
      "Les blés du marché de Paris ont également connu des affaires calmes et les prix ont peu varié. La situation des blés ne s'est guère modifiée cette huitaine ; il n'y aurait, d'ailleurs, que des craintes sur les récoltes qui pourraient amener de la hausse. Le commerce est tellement attaqué qu'il hésite à acheter à livrer ; il lui en coûte assez cher d'avoir emmagasiné du blé et des farines. La baisse actuelle fait perdre beaucoup d'argent aux haussiers."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Revue commerciale",
    "title": "Huiles",
    "summary": "Après une période de fluctuations marquées, le marché des huiles de colza retrouve une certaine stabilité, les cours clôturant la séance à des niveaux proches de ceux observés la semaine précédente.",
    "paragraphs": [
      "Les huiles de colza ont connu un marché animé et les prix ont subi des fluctuations nombreuses et importantes. Cependant, après avoir fléchi sensiblement, les cours se sont relevés et, hier, on retrouvait à peu près les prix d'il y a huit jours.",
      "On a terminé la séance d'hier en cotant le colza brut en tous fûts pour le courant à 65 francs ; avril, 64,25 ; les mois de mai, de 57,75 à 58,25 ; et les quatre derniers mois, de 55,50 à 56,25 les 100 kilos, entrepôt."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Revue commerciale",
    "title": "Alcools",
    "summary": "Le marché des alcools a montré une tendance baissière avant de se raffermir en fin de semaine. Le prix moyen de l'hectolitre disponible à 90 degrés s'établit à 27,58 francs.",
    "paragraphs": [
      "Les « trois-six » ont enregistré un mouvement de baisse durant la semaine, avant que les prix ne se relèvent légèrement à partir de vendredi. La moyenne des cotes officielles de l'alcool disponible, pour la semaine du 25 au 30 mars, s'établit à 27,58 francs l'hectolitre nu à 90 degrés, en entrepôt."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Revue commerciale",
    "title": "Sucres",
    "summary": "Marché calme pour le sucre. Les cultivateurs de Bapaume acceptent les conditions du marché. Les prix des sucres blancs n°3 restent stables, avec des cotations inchangées pour les livraisons à venir.",
    "paragraphs": [
      "Nous avons déjà évoqué les prix offerts pour la betterave à sucre. Les cultivateurs de la région de Bapaume (Pas-de-Calais), réunis en assemblée, ont reconnu qu'en tenant compte du cours actuel du sucre, du charbon et des mélasses, et en vue d'aboutir à une entente avec les fabricants, les prix proposés devaient être acceptés.",
      "Les affaires ont été excessivement calmes sur notre place et les prix sont restés sensiblement inchangés. On a terminé hier en cotant le sucre blanc n°3 à 27,35 et 27,50 francs pour le courant mars, liés avril ; les quatre mois de mai à 27,87 et liés ; et les mois d'octobre à 26,50 francs les 100 kilos, entrepôt. Les raffinés, soutenus, sont cotés les 100 kilos, droits acquittés."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Revue commerciale",
    "title": "Graines fourragères",
    "summary": "Le marché des graines fourragères maintient une grande fermeté. Les cotations sont établies entre 120 et 190 francs pour les trèfles violets, avec une stabilité générale pour les autres variétés.",
    "paragraphs": [
      "Les prix sont fermes. On cote les trèfles violets de 120 à 190 francs ; les luzernes du Poitou de 90 à 120 francs ; celles de Provence de 110 à 125 francs ; la minette de 50 à 70 francs ; les trèfles blancs de 130 à 175 francs ; les hybrides de 135 à 200 francs ; le sainfoin simple de 25 à 30 francs ; le double de 35 à 40 francs ; le ray-grass anglais de 55 à 60 francs ; celui d'Italie à 55 francs."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Revue commerciale",
    "title": "Légumes secs",
    "summary": "Récapitulatif des cours des légumes secs : les prix sont fixés à l'hectolitre pour les flageolets et haricots, et au poids de 100 kilos pour les lentilles et pois sur les différentes places.",
    "paragraphs": [
      "On cote à l'hectolitre et demi : flageolets chevriers, 120 francs ; Suisses blancs, 45 à 46 francs ; Chartres, 50 à 55 francs ; Liancourt, 50 à 57 francs ; Soissons, 65 à 70 francs.",
      "On cote aux 100 kilos : plats du Midi, 35 francs ; Suisses rouges, 30 à 32 francs ; cocos rosés, 29 à 30 francs ; nains, 25 à 32 francs ; lentilles, 20 à 45 francs ; pois ronds, 27 à 30 francs."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Revue commerciale",
    "title": "Houblons",
    "summary": "Marché du houblon sous tension à Nuremberg par manque de stock. Stabilité observée à Londres et New-York, tandis que la Bohême montre une reprise à l'approche de la saison printanière.",
    "paragraphs": [
      "Les arrivages à Nuremberg ont diminué si sensiblement que les acheteurs doivent recourir presque uniquement aux stocks emmagasinés sur place. À Londres, aucun changement n'est à noter ; les grandes brasseries continuent à s'assurer des marchandises aux prix courants. À New-York, la situation demeure ferme et les prix invariés. En Alsace, en Bourgogne et en Belgique, les achats sont forcément très limités par les éléments. De Bohême, on signale une reprise en raison de l'approche de la saison de printemps."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Sans Famille : Marie-Madeleine",
    "summary": "Marie-Madeleine, interrogée par M. Turner, confie les douloureux secrets de son passé et les causes de sa déchéance. Accompagnée de ses interlocuteurs, elle quitte Loc-Glénan pour regagner Paris par l'express de Brest.",
    "paragraphs": [
      "Dans un bouge, Hic répliqua : « À quoi le voyez-vous ? » — « Je ne sais pas. Il me semble que vous êtes plus vive, plus alerte que vos camarades et que vous savez mieux vous tenir. Vous n'avez pas non plus leur accent traînard. On dirait presque que vous êtes de mon pays. »",
      "Pour Marie-Madeleine, sa conviction était faite : les deux voyageurs venaient lui parler d'elle. Nicole Bellou répondit : « Oui, je l'ai fait une fois, et pour mon malheur, il y a déjà longtemps. Dix-sept ans. Pour des raisons... Nous avions fait un petit héritage d'un parent. »",
      "M. Turner commença son interrogatoire, mais d'un ton si plein de pitié que la malheureuse se sentit rassurée : « Enfant toute jeune par une sage-femme de la rue de l'Oisellerie, à Angers. » — « C'est vrai, dit-elle. » — « Une petite fille ? » — « Oui, monsieur. » — « Vous étiez payée par cette Ursule ? » — « Oui, monsieur. »",
      "La pauvre femme se redressa. « Vous avez raison », dit-elle. « Un enfant m'était arrivé, un enfant à moi et je voulais tout pour lui. Et puis, nous avions pris de mauvaises habitudes. L'ivresse abrutissait Bellou. La ruine nous a chassés de Loc-Glénan. Je suis arrivée jusque dans cette affreuse auberge. Mes bons messieurs, je voudrais être morte. »",
      "Le soir même, Nicole Bellou prenait l'express de Brest qui l'emportait à Paris, en compagnie de M. Turner et de Coquenard."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Actualités",
    "title": "Sur mer",
    "summary": "Mouvements portuaires à Saint-Malo et Cherbourg : arrivées de transatlantiques, préparatifs de campagnes terre-neuvières et départ d'un vapeur vers les colonies avec un chargement de matériel de guerre.",
    "paragraphs": [
      "SAINT-MALO. Le steamer Burgundia, venant de Marseille, vient de mouiller sur la rade de Dinard. Ce transatlantique emporte les derniers équipages de terre-neuviens. Le transatlantique Ville-de-Bordeaux, arrivé hier matin, vient d'entrer dans le port de marée de Saint-Malo. Le nouveau navire à vapeur Saint-François-d'Assise va prendre avitaillement à Saint-Malo pour une première croisière sur les bancs de Terre-Neuve.",
      "CHERBOURG. Le steamer Ville-de-Pernambuco, des Chargeurs-Réunis, est parti du port militaire vendredi, emportant un chargement considérable de matériel de guerre à destination de Saint-Louis, Dakar et Conakry. Il se rendra ensuite à Madagascar pour un service de cabotage soutenu par l'administration locale."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Finance",
    "title": "Causerie financière",
    "summary": "Analyse boursière avant les fêtes de Pâques. Le marché, caractérisé par une activité restreinte, observe un léger fléchissement des rentes tandis que les titres de crédit et chemins de fer restent stables.",
    "paragraphs": [
      "Rien n'est venu modifier cette semaine les grandes questions internationales auxquelles la Bourse peut s'intéresser. On ne s'est guère occupé que de la situation de place et de l'approche de la liquidation de fin de mois. Les places étrangères (Londres, Berlin, Vienne) restent dans l'attente de prochains emprunts d'État. Les fêtes de Pâques vont ralentir les affaires.",
      "Malgré l'excellente allure du comptant, nos rentes ont légèrement fléchi. Le 3 % finit à 101,17. L'Extérieure Espagnole progresse de 0,37. L'Italien se retrouve à 95,80. Les fonds turcs sont plus faibles. Les emprunts russes n'ont guère varié.",
      "Le marché des établissements de crédit marque une animation fort restreinte. La Banque de Paris a passé de 1076. Le Lyonnais est à 1085. Le Comptoir d'Escompte et la Société Générale sont inchangés.",
      "Les recettes des chemins de fer sont en nouvelle moins-value. Le Nord a fléchi de 2215 à 2195. L'Orléans avance de 5 à 1435. Le Métropolitain a gagné 16 francs à 519. Les Omnibus reprennent de 1193 à 1205."
    ]
  }
];
