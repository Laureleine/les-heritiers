// Date: 1901-04-21
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-04-21 (Version Restaurée, 25 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Beaux-Arts",
    "title": "Exposition de la Société nationale des Beaux-Arts au Grand Palais",
    "summary": "Le salon de 1901 au Grand Palais déploie un ensemble monumental, des sculptures de Rodin et Saint-Marceaux aux paysages de Cazin. M. Dubufe orchestre cette rétrospective riche en arts appliqués et peintures.",
    "paragraphs": [
      "La Société nationale des Beaux-Arts a pris possession du Grand Palais pour son exposition de 1901. Le Salon, habilement structuré en deux sections, l'une plus exclusive et l'autre ouverte au grand public, offre une diversité d'œuvres remarquable.",
      "Dès le seuil franchi, la section de sculpture impose par son allure monumentale. Le visiteur y découvre le fragment du monument à Victor Hugo sculpté par Rodin, l'œuvre tombale de Félix Faure ciselée par Saint-Marceaux, ainsi que la statue d'Alphonse Daudet, également due au talent de ce dernier.",
      "Autour de ces pièces maîtresses, une multitude de marbres et de bronzes sont présentés, notamment ceux de Bartholomé, Granet et Malherbe. Le rez-de-chaussée est par ailleurs consacré aux arts appliqués, aux dessins et aux tapisseries.",
      "Le premier étage déploie près d'un millier de toiles. L'exposition, empreinte d'une certaine sérénité et marquée par le souvenir du paysagiste Cazin, réunit des œuvres variées, des portraits de La Gandara aux paysages de Dubufe, nonobstant l'absence regrettable de maîtres tels que Whistler ou Roll.",
      "L'organisation de ce Salon, orchestrée avec soin par M. Dubufe, est unanimement saluée pour la qualité de sa mise en scène et la richesse des morceaux de choix exposés."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Vacances de sous-officiers et garnison de Meaux",
    "summary": "Le ministère de la Guerre détaille les postes vacants pour les rengagements. Par ailleurs, la ville de Meaux finalise les préparatifs pour accueillir une nouvelle garnison d'infanterie au quartier Noëfort.",
    "paragraphs": [
      "De nombreux corps d'armée présentent actuellement des postes vacants pour les sous-officiers rengagés, particulièrement au sein de l'artillerie et du génie. Le Journal officiel publie régulièrement ces listes pour informer les candidats.",
      "La ville de Meaux sollicite activement l'installation d'une garnison d'infanterie forte de deux bataillons. Ces troupes seraient logées dans le quartier Noëfort, tandis qu'un champ de tir est en cours d'aménagement à Penchard pour leur instruction."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Écho des fêtes franco-italiennes",
    "summary": "Le lieutenant de vaisseau Pelloux est arrivé à Toulon, porteur des remerciements officiels du duc de Gênes à la France suite aux récentes manifestations de sympathie franco-italiennes.",
    "paragraphs": [
      "Le lieutenant de vaisseau Pelloux a débarqué à Toulon, chargé de transmettre les remerciements du duc de Gênes aux autorités françaises en signe de gratitude pour les récentes festivités. À cette occasion, plusieurs décorations ont été remises."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Nouvelles de Chine",
    "title": "Dernières dépêches de Pékin et Shanghaï",
    "summary": "Le corps du général de Schwarzhoff a été retrouvé. À Pékin, le calme revient au Palais d'Hiver, tandis que dans la vallée du Tsé-Kiang, des troubles étudiants s'élèvent contre le système mandarin.",
    "paragraphs": [
      "La dépouille du général de Schwarzhoff a été retrouvée et son inhumation est désormais prévue. Concernant l'incendie du Palais d'Hiver, il a été maîtrisé grâce au concours des troupes françaises, sans qu'aucun acte de malveillance ne soit à déplorer.",
      "Des troubles ont éclaté dans la vallée du Tsé-Kiang en réaction à la suppression des examens, provoquant une vive agitation des étudiants à l'encontre des autorités mandarine."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Taxe sur les charbons anglais et voyages officiels",
    "summary": "Des parlementaires britanniques étudient l'impact de la taxe sur le charbon. M. Waldeck-Rousseau poursuit son périple italien, accueilli avec les honneurs à Milan et Vérone.",
    "paragraphs": [
      "Des membres de la Chambre des communes ont exposé au chancelier de l'Échiquier les difficultés engendrées par la nouvelle taxe sur le charbon pour les contrats d'exportation. Des mesures transitoires sous forme de dépôt sont actuellement à l'étude.",
      "M. Waldeck-Rousseau, lors de son voyage vers Gênes, a effectué une halte à Milan et à Vérone, villes où il a été chaleureusement accueilli par les autorités consulaires."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Opérations militaires et police au Transvaal",
    "summary": "À la suite de l'interception d'un convoi ferroviaire près de Molteno par les Boërs, les autorités britanniques réorganisent la police du Transvaal en trois districts sous commandement militaire.",
    "paragraphs": [
      "Les Boërs ont capturé un train aux abords de Molteno. Pendant ce temps, les autorités britanniques procèdent à la réorganisation de la police au Transvaal, divisée désormais en trois districts sous commandement militaire, en attendant une transition complète vers l'administration civile.",
      "Le Daily Express fait état d'un certain mécontentement parmi les rangs de l'armée anglaise, tandis qu'une liste officielle de décorations vient d'être publiée dans la Gazette."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Les Tribunaux",
    "title": "Le crime du Grand-Trieux à Guingamp",
    "summary": "La cour d'assises des Côtes-du-Nord a prononcé la peine capitale contre Pierre Omnès, ouvrier tanneur, reconnu coupable de l'assassinat de la jeune Louise Perret commis le 21 janvier.",
    "paragraphs": [
      "La cour d'assises des Côtes-du-Nord a condamné à mort Pierre Omnès pour l'assassinat de la petite Louise Perret, survenu le 21 janvier dernier. L'accusé, un ouvrier tanneur au passé chargé, a reconnu les faits sans manifester le moindre remords.",
      "Le procès fut marqué par les témoignages poignants de la famille et par l'extrême cruauté du crime, aboutissant ainsi à une condamnation à la peine capitale."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Les Tribunaux",
    "title": "Vols dans les trains à Lyon",
    "summary": "Le tribunal correctionnel de Lyon a condamné Joseph Terrier et ses complices, auteurs de pillages organisés sur la ligne de Givors, à des peines de prison proportionnelles à leur culpabilité.",
    "paragraphs": [
      "Le tribunal correctionnel de Lyon a statué sur une affaire de vols organisés sur la ligne de Givors. Une bande, dirigée par Joseph Terrier, pillait les trains de marchandises après avoir astucieusement ralenti leur marche. Le meneur, un alcoolique notoire, a été condamné à six mois de prison, ses complices ayant bénéficié de l'indulgence de la cour."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Visite présidentielle et informations diverses",
    "summary": "Le Président Loubet et son épouse ont visité l'exposition de la Société nationale des Beaux-Arts, tandis que M. Delcassé a pris le départ pour une mission à Saint-Pétersbourg.",
    "paragraphs": [
      "Le Président de la République et Mme Loubet ont visité l'exposition de la Société nationale des Beaux-Arts, saluant les organisateurs pour la haute tenue de l'événement.",
      "M. Delcassé a quitté Paris à destination de Saint-Pétersbourg. Par ailleurs, de nouvelles nominations d'agents de change ont été décrétées et plusieurs salons d'art indépendants ont inauguré leurs portes."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Affaire Henry Gilmour et théâtre",
    "summary": "Henry Gilmour, opéré avec succès à la Petite-Roquette, est en convalescence. Côté spectacles, 'Le Petit Muet' et 'La Dame du Commissaire' remportent un vif succès auprès du public.",
    "paragraphs": [
      "Henry Gilmour a été opéré avec succès à l'infirmerie de la Petite-Roquette. Son état est jugé satisfaisant et sa guérison est prochainement attendue.",
      "Au théâtre de l'Ambigu, la pièce 'Le Petit Muet' remporte un franc succès, tandis qu'au théâtre Cluny, le vaudeville 'La Dame du Commissaire' ravit le public par ses incessants quiproquos."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Paris",
    "title": "Faits divers parisiens",
    "summary": "Actualités judiciaires à Paris : Mlle Jeanne Leulier entendue dans l'affaire du chlorure de zinc à Lariboisière, arrestation pour détournement de succession et découverte tragique au square Laborde.",
    "paragraphs": [
      "Mlle Jeanne Leulier, infirmière à l'hôpital Lariboisière, a été interrogée dans l'affaire du chlorure de zinc et a obtenu l'autorisation de se rendre à Amiens.",
      "Une femme a été arrêtée pour le détournement d'une succession importante appartenant à M. Jolly, marchand de curiosités.",
      "Le cadavre d'un nouveau-né a été découvert dans le square Laborde, entraînant l'ouverture d'une enquête policière."
    ]
  },
  {
    "id": 12,
    "page": 3,
    "category": "Faits divers",
    "title": "Suicide d'une jeune fille rue Gagence",
    "summary": "Drame passionnel rue Gagence : une jeune fille s'est donné la mort par arme à feu après avoir reçu une lettre de rupture de son amant. Le commissaire Carpin a constaté le décès.",
    "paragraphs": [
      "Hier, après avoir reçu une froide lettre d'abandon de son ami, une jeune fille posa cette missive sur son cœur, y appliqua le canon d'un revolver et pressa la détente de l'arme.",
      "Elle tomba raide morte. M. Carpin, commissaire de police, appelé en toute hâte, a constaté la fin tragique de l'infortunée jeune fille."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Faits divers",
    "title": "Meurtre rue de la Goutte-d'Or",
    "summary": "Agression sanglante rue de la Goutte-d'Or : l'ouvrier Mathieu Rodet a été poignardé au cœur par un inconnu. Son état est jugé préoccupant. La police recherche activement l'agresseur.",
    "paragraphs": [
      "Vers une heure et demie, hier matin, un ouvrier matelassier nommé Mathieu Rodet, âgé de trente-quatre ans, passait rue de la Goutte-d'Or en compagnie d'une femme nommée Sophie Gérance, âgée de vingt-neuf ans.",
      "En face du numéro 63, le couple croisa trois individus. L'un d'eux, vêtu comme un ouvrier, s'arma d'un stylet et frappa Mathieu Rodet dans la région du cœur. La victime tomba sans connaissance, baignant dans son sang.",
      "Le blessé a été admis à l'hôpital Lariboisière avec un poumon perforé. M. Monentheuil, commissaire de police de la Goutte-d'Or, fait rechercher le coupable dont la compagne de la victime a pu fournir un signalement détaillé."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Faits divers",
    "title": "Accident de tramway boulevard Montparnasse",
    "summary": "Accident mortel boulevard Montparnasse : M. Henri Loiseau, habitant de Bois-Colombes, a été renversé et écrasé par un tramway électrique ce matin. Transporté mourant à l'hôpital Cochin.",
    "paragraphs": [
      "Hier matin, à neuf heures, M. Henri Loiseau, demeurant à Bois-Colombes, traversait le boulevard Montparnasse lorsqu'il s'aventura sur la voie des tramways électriques Montparnasse-Bastille.",
      "Le malheureux fut renversé et écrasé par un véhicule, ayant la tête presque broyée. Il a été transporté mourant à l'hôpital Cochin par M. Chevalier, commissaire de police."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Faits divers",
    "title": "La vengeance d'un fiancé",
    "summary": "Tentative de meurtre près du pont au Double : un homme tire sur son ancienne fiancée et son nouveau compagnon par jalousie. Le tireur, Emile Chalet, est activement recherché par la police.",
    "paragraphs": [
      "Berthe Lamanl, une ouvrière de vingt ans, avait rompu ses fiançailles avec M. Emile Chalet, employé de commerce, pour se lier avec un jeune peintre.",
      "Hier soir, alors que Berthe et son nouvel ami se promenaient près du pont au Double, Emile Chalet a surgi et a tiré sur eux avec un revolver. Le peintre et sa maîtresse ont été atteints par les projectiles, mais leurs blessures sont sans grande gravité.",
      "M. Bontillier, commissaire de police, recherche activement le fiancé jaloux qui a pris la fuite."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Social",
    "title": "Bulletin du travail : La grève de La Gineste",
    "summary": "La grève de La Gineste prend fin : quarante-cinq ouvriers ont repris le travail. Aucun grief personnel n'a été retenu contre le maître mineur après les entretiens individuels.",
    "paragraphs": [
      "La grève de La Gineste touche à sa fin. Quarante-cinq ouvriers ont repris le travail et l'on attend sous peu la rentrée des autres.",
      "Le directeur a fait appeler les mineurs individuellement, et tous ont déclaré n'avoir aucun grief personnel contre le maître mineur."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Faits divers",
    "title": "Un crime mystérieux à Angers",
    "summary": "Le cadavre d'un camionneur disparu, nommé Méline, a été retrouvé dans la Loire. Privé de sa sacoche d'argent, le malheureux aurait été victime d'une bande de malfaiteurs.",
    "paragraphs": [
      "Un camionneur nommé Méline, au service de M. Riverain à Saumur, avait disparu avec une sacoche contenant une importante somme d'argent. Son cadavre a été retrouvé hier dans la Loire.",
      "Sa blouse et sa sacoche avaient disparu. Aucun coup n'étant visible, la justice suppose que le malheureux a été surpris par une bande de malfaiteurs qui l'ont dépouillé avant de le jeter dans le fleuve. Une enquête est en cours."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Incendie à Sèvres",
    "summary": "Un incendie, probablement causé par l'imprudence d'un fumeur, a ravagé le bois des Bruyères. Le sinistre a pu être maîtrisé grâce à l'aide des ouvriers d'une cartoucherie voisine.",
    "paragraphs": [
      "Un incendie, probablement causé par l'imprudence d'un fumeur, s'est déclaré dans le bois des Bruyères. Grâce à l'intervention des ouvriers d'une cartoucherie voisine, le feu a été maîtrisé après deux heures de travail."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Agression à Levallois-Perret",
    "summary": "Paul Henry, âgé de vingt ans, a violemment agressé son père à coups de poing américain après un refus d'argent. Il a été arrêté et conduit au dépôt par les forces de l'ordre.",
    "paragraphs": [
      "Paul Henry, un jeune homme de vingt ans, a frappé son père avec un coup-de-poing américain parce que celui-ci refusait de lui donner de l'argent. Le fils a été arrêté et dirigé sur le dépôt."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accidents divers en banlieue",
    "summary": "La banlieue parisienne a été marquée par une série d'accidents tragiques, de suicides et d'agressions violentes à Nanterre, Clichy, Colombes, Saint-Denis, Pantin, Vincennes et Alfortville.",
    "paragraphs": [
      "À Nanterre, l'ouvrier Louis Vargues a été renversé par le tramway à vapeur de Saint-Germain et est dans un état désespéré.",
      "À Clichy, le maçon Pierre Morlot s'est suicidé par asphyxie après avoir été éconduit par une femme.",
      "À Colombes, la petite Juliette Arnaudy, âgée de cinq ans, a été renversée par une voiture de livraison et a les deux cuisses broyées.",
      "À la Plaine-Saint-Denis, le corps d'un homme s'étant donné la mort pour maladie incurable a été retiré du canal.",
      "À Pantin, une dame a été agressée et dévalisée par trois individus rue Oehly.",
      "À Vincennes, le receveur Pierre Belfin a eu le crâne fracturé par la perche d'un tramway.",
      "À Alfortville, le journalier Gilbert Panot a tué un marinier d'un coup de bâton lors d'une altercation."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits divers",
    "title": "Affaire de maltraitance à Saint-Germain-en-Laye",
    "summary": "Pierre Obringer, accusé de violences atroces et d'actes honteux sur sa belle-fille de dix ans, Augustine, a été arrêté à Saint-Germain-en-Laye suite aux constatations accablantes du médecin légiste.",
    "paragraphs": [
      "Pierre Obringer a été arrêté pour avoir exercé des violences atroces sur sa belle-fille de dix ans, Augustine. Le médecin légiste a constaté sur le corps de l'enfant de nombreuses plaies et brûlures. L'enquête a révélé que le misérable se livrait également à des actes honteux sur la mineure."
    ]
  },
  {
    "id": 22,
    "page": 4,
    "category": "Feuilleton",
    "title": "Miss Tempête",
    "summary": "Renée, tourmentée, s'adresse à son interlocuteur pour plaider la cause de son frère Lucien de Sartys, victime d'un duel imposé, et le supplie de ne pas causer sa perte par une obstination funeste.",
    "paragraphs": [
      "« Quoi donc ? » demanda nerveusement Renée. « Je sais bien, je commets ici une grave, une très grave indiscrétion. Mais je me révolte aussi, moi. Je ne veux pas, moi, que mon frère soit ici la victime sacrifiée. »",
      "« Si Monsieur Lucien de Sartys a écrit une lettre, c'est que cette lettre lui a été imposée par son père. »",
      "« Ce n'était pas avec ce M. Turner que M. de Rieux voulait se battre, mais avec son neveu. Seulement, M. Turner s'est trouvé au bar, et il a pris la place de l'autre. »",
      "« Le docteur dit qu'il y en aura pour six semaines ou deux mois sans quitter la chambre, peut-être plus. Je venais donc demander des ordres à Monsieur le marquis. »",
      "« Et alors je suis venue vers vous pour vous dire que vous tenez sa vie entre vos mains, que ce serait — puisque vous l'aimez, parce que vous l'aimez, n'est-ce pas, il n'a rien fait pour que vous ne l'aimiez plus — ce serait pour vous un chagrin, un désespoir effroyable, oh ! un remords affreux aussi, s'il venait à mourir à cause de vous. »"
    ]
  },
  {
    "id": 23,
    "page": 4,
    "category": "Économie",
    "title": "Assemblée générale annuelle de la Société générale",
    "summary": "La Société générale a tenu son assemblée annuelle, affichant une progression notable de ses opérations avec un mouvement de caisse de 34 milliards et 35 millions de francs de bénéfices nets.",
    "paragraphs": [
      "L'assemblée générale annuelle des actionnaires de la Société générale a eu lieu le jeudi 28 mars au siège de la Société, pour statuer sur les comptes de l'exercice.",
      "Le rapport présenté par le conseil fournit les chiffres suivants, permettant de constater que presque tous les comptes de la Société sont en augmentation dans des proportions importantes. Le mouvement général de la caisse, qui caractérise l'ampleur des opérations de la Société, s'est élevé à 34 milliards de francs, en augmentation de 8 milliards et demi sur l'année précédente.",
      "La Société a, au cours de l'exercice, ouvert trois agences à Avallon, Montbéliard et Fourmies, érigé en agences les bureaux d'Argentan, Autun, Beaune et Pézenas, créé un bureau dans la banlieue à la Plaine-Saint-Denis, ainsi que treize bureaux en province. Elle possède aujourd'hui 345 sièges.",
      "Les bénéfices nets de la Société, y compris le reliquat de l'exercice précédent, ont atteint 35 millions de francs. L'assemblée a approuvé les comptes de l'exercice 1900 et adopté la proposition du conseil relative à la fixation du dividende."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Sans Famille - Marie-Madeleine",
    "summary": "Le retour de l'animation au château du Prieuré marque le destin de Marie-Madeleine qui, malgré la joie environnante, demeure une âme solitaire et abandonnée.",
    "paragraphs": [
      "« Hier soir, très tard, M. de Rieux est venu avec un ami. Ce matin, ils avaient une affaire. M. de Rieux. Un duel. Justement, et comme le terrain leur convenait, ils vous l'ont demandé. »",
      "Trois semaines plus tard, vers le milieu de juillet, le château du Prieuré avait repris une partie de son animation d'autrefois.",
      "Entre les deux camps, il y avait de fréquentes rencontres. Au Prieuré, on aurait pu compter trois heureux, et parmi eux une jeune fille dont le bonheur égalait certainement celui de tous les autres habitants du château réunis.",
      "Elle était donc toujours l'abandonnée. Elle ne changeait ni d'état ni de nom. Elle serait toute sa vie ce qu'elle avait été pendant sa jeunesse, Marie-Madeleine."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Spectacles",
    "title": "Programme des théâtres du 21 avril",
    "summary": "Programme des représentations théâtrales parisiennes pour la journée du 21 avril, détaillant les pièces à l'affiche du Théâtre-Français, de l'Opéra-Comique et des autres scènes de la capitale.",
    "paragraphs": [
      "Opéra : Relâche.",
      "Théâtre-Français : Bérénice, La Nuit d'octobre, L'Été de la Saint-Martin.",
      "Opéra-Comique : Carmen.",
      "Vaudeville : La Course du Flambeau.",
      "Variétés : La Veine.",
      "Porte-Saint-Martin : Quo Vadis ?."
    ]
  }
];
