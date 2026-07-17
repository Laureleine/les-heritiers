// Date: 1900-11-11
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-11-11 (Version Restaurée, 30 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Un grand vaincu",
    "summary": "Le président Krüger, figure héroïque de la résistance boer contre l'Empire britannique, arrive en Europe. La France s'apprête à accueillir avec respect ce patriote dont le destin marque l'histoire contemporaine.",
    "paragraphs": [
      "Le vaisseau de guerre hollandais qui porte le président Krüger approche de nos côtes. Encore quelques jours et le grand vieillard débarquera en Europe, précédé par l'admiration qu'inspirent son patriotisme et son énergie.",
      "Quoi que réserve l'avenir à ses suprêmes efforts, cet homme a pris place dans l'histoire et son nom demeurera attaché à d'héroïques combats, signifiant ces choses sacrées : l'indépendance d'une nation, la liberté d'un peuple.",
      "Premier magistrat d'une petite république, dont la confiance de ses concitoyens l'avait fait dictateur en quelque sorte, il a réussi à lutter pendant plus d'un an contre des forces immenses et l'on peut dire sans exagération qu'il a fait échec à l'Empire britannique. Quoi qu'il arrive, cela seul constitue une gloire durable.",
      "Peut-être l'avenir dira-t-il qu'il s'est fait des illusions sur la possibilité de la résistance, et qu'il aurait mieux valu pour les Boers qu'il eût une âme moins romaine, mais il faudra ajouter alors que son erreur est d'avoir cru à la célèbre dépêche de Guillaume II, lors de l'échauffourée de l'aventurier Jameson.",
      "Après ce télégramme enflammé de l'empereur d'Allemagne, le gouvernement du Transvaal avait le droit de penser qu'il ne serait pas abandonné, et qu'une parole si haute, partie de Berlin, l'assurait contre la perspective d'être livré à ses seules forces. En prenant un engagement moral qu'il ne devait pas tenir, Guillaume II a assumé une large part de responsabilité dans des événements qui ont fait couler des flots de sang.",
      "La vie du président Krüger est longue puisqu'il est né en 1825, mais pendant cette période de soixante-quinze ans, elle témoigne d'une rare unité de vues ; toujours et partout il se montra un ardent patriote.",
      "La France restera dans son rôle véritable en entourant le président Krüger de tous ses respects, en s'inclinant sur son chemin car elle verra passer l'image d'une nationalité qui, au champ d'honneur, s'est couverte d'une gloire immortelle."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les sans famille : Marie-Madeleine",
    "summary": "Au sein de l'hôtel aristocratique des Rambert-Lucenay, le mystérieux silence de la jeune Louise sur sa faute indigne ébranle l'honneur familial et place la baronne d'Orvilliers dans une inquiétude profonde.",
    "paragraphs": [
      "L'hôtel de la famille des marquis de Rambert-Lucenay, dont la lignée se perd dans la nuit des temps, est situé dans un coin assez retiré du faubourg Saint-Germain, rue des Saints-Pères, et se trouve masqué d'un côté par ses communs et de l'autre par un jardin clos de hautes murailles.",
      "Le 16 octobre 1874, le dîner venait de finir dans une petite pièce attenante à la grande salle à manger. Un beau jeune homme, le comte Maurice, se préparait à sortir. La baronne d'Orvilliers et le marquis de Rambert s'interrogeaient sur la conduite mystérieuse de Louise, la fille du marquis, qui refuse de se confier sur sa faute.",
      "Le marquis et la baronne, inquiets pour l'honneur de leur nom, débattent de la situation, envisageant les rares confidents possibles, comme Prayssac, tout en craignant le scandale qui entoure le secret de la jeune Louise."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Mouvement diplomatique",
    "summary": "Le ministère des Affaires étrangères procède à des nominations consulaires concernant les postes de Batavia et de La Paz, affectant M. de Coutouly et M. Belin à de nouvelles fonctions.",
    "paragraphs": [
      "Sont nommés : Consul général chargé du consulat de France à Batavia, M. de Coutouly, consul général et chargé d'affaires à La Paz. Consul et chargé d'affaires, chargé du consulat de France à La Paz, M. Belin, consul à Batavia."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Mouvement judiciaire",
    "summary": "Décret relatif à diverses nominations dans la magistrature française, concernant notamment les tribunaux de Thonon, Auxerre, Cholet, Château-Gontier, Sancerre, Rocroi, Privas et Prades.",
    "paragraphs": [
      "Sont nommés : Président du tribunal de Thonon, M. Dubouloz ; Juge d'instruction à Thonon, M. Dolfus-François ; Substitut du procureur à Thonon, M. Roussel ; Juge d'instruction à Auxerre, M. Jousselin ; Juge à Cholet, M. Bex ; Juge à Château-Gontier, M. Desmares ; Juge à Sancerre, M. Hâtiez ; Procureur de la République à Rocroi, M. Piélut ; Procureur de la République à Privas, M. Lalubie ; Substitut du procureur à Prades, M. Pittié."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Convocation d'électeurs",
    "summary": "Les électeurs de l'arrondissement de Saint-Pol, dans le Pas-de-Calais, sont appelés aux urnes le 2 décembre prochain pour élire un successeur au député Georges Graux, décédé.",
    "paragraphs": [
      "Les électeurs de l'arrondissement de Saint-Pol (Pas-de-Calais) sont convoqués pour le 2 décembre prochain à l'effet d'élire un député, en remplacement de M. Georges Graux, décédé."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Social",
    "title": "Le mariage des sous-officiers",
    "summary": "Le général André réforme les conditions de mariage des sous-officiers : suppression de l'apport dotal et mise en place d'une enquête sur la moralité et les ressources de la future épouse.",
    "paragraphs": [
      "Le général André vient de faire connaître sa décision relativement au mariage des sous-officiers rengagés et commissionnés. Elle abroge les dispositions anciennes concernant l'exigence d'un apport dotal et stipule désormais que les autorités militaires devront simplement s'assurer que la future épouse possède des ressources suffisantes pour subvenir à ses besoins.",
      "Le ministre laisse aux conseils d'administration le soin de déterminer les conditions d'application selon les spécificités locales. Cette décision garantit aux intéressés une protection réelle contre l'opposition arbitraire de leurs chefs, en imposant systématiquement une enquête contradictoire en cas de refus."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le Président Krüger en France",
    "summary": "Alors que le président Krüger poursuit son voyage vers Marseille, les autorités consulaires néerlandaises affichent une neutralité stricte, tandis que la ville de Mende adresse son soutien solennel.",
    "paragraphs": [
      "À Marseille : Le consul des Pays-Bas, M. Story, déclare n'avoir reçu aucune instruction officielle concernant les réceptions de M. Krüger et annonce qu'il observera, en toutes circonstances, une stricte neutralité diplomatique.",
      "À Mende : Le conseil municipal a voté une adresse solennelle afin d'exprimer publiquement son admiration et son respect profond pour la cause du président Krüger.",
      "À Djibouti : Le navire « Gelderland » a pris la mer à destination de Port-Saïd, transportant le président Krüger vers le port de Marseille."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un cambrioleur tué",
    "summary": "Surpris par un cambrioleur dissimulé sous son lit au passage de l'Ancre, M. Marcel Pilon l'a mortellement blessé par arme à feu. La police conclut à la légitime défense.",
    "paragraphs": [
      "Passage de l'Ancre, un jeune homme de vingt ans, M. Marcel Pilon, a surpris un cambrioleur dissimulé sous son lit dans sa chambre. Après avoir sommé l'individu de sortir, M. Pilon a tiré deux coups de revolver, blessant mortellement l'intrus à l'aine.",
      "Le blessé fut immédiatement transporté à l'Hôtel-Dieu où il est décédé peu après son arrivée. Si son identité exacte n'a pas encore été établie, la présence d'objets volés sur lui a conduit la police à conclure à un cas manifeste de légitime défense."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident de tramway à Suresnes",
    "summary": "Une violente collision entre un tramway à vapeur et un camion de vin quai de Suresnes a causé de graves blessures au personnel de conduite et au charretier. Une enquête est en cours.",
    "paragraphs": [
      "Un grave accident s'est produit hier soir quai de Suresnes entre un tramway à vapeur et un camion de vin conduit par Michel Grand. Le choc fut terrible : le tablier du tramway a violemment percuté le véhicule, blessant grièvement le mécanicien Camille Dalleur et le chauffeur Louis Favry, tandis que M. Grand a été projeté sur le trottoir, souffrant de multiples fractures au crâne et à l'épaule.",
      "Les blessés ont été ramenés à leur domicile à la demande expresse de leurs familles, malgré la gravité manifeste de leur état. Une enquête judiciaire a été ouverte pour établir les responsabilités."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Tragique roman d'amour à Lyon",
    "summary": "Drame passionnel à Lyon : après avoir tiré sur sa compagne Thérèse Guiaivia par suite d'une opposition familiale, l'ouvrier Gustave Zill s'est suicidé. La victime a été secourue in extremis.",
    "paragraphs": [
      "Gustave Zill, un jeune ouvrier lyonnais, s'est donné la mort après avoir tenté de tuer sa petite amie, Thérèse Guiaivia, dans la cave familiale. Leurs parents s'opposaient farouchement à leur union.",
      "Zill a fait feu sur la jeune fille, la blessant grièvement, avant de se suicider avec un vieux fusil dans la cour de la demeure. Thérèse, ayant tenté de se jeter dans le fleuve dans un accès de désespoir, a été sauvée par un marinier et immédiatement transportée à l'hôpital. Le frère de Zill avait été initialement inquiété par les autorités avant que l'enquête ne confirme le déroulement tragique des faits."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Chronique Judiciaire",
    "title": "Attentat contre le Shah de Perse",
    "summary": "L'anarchiste Salsou a comparu devant la cour d'assises de la Seine pour sa tentative d'attentat contre le Shah de Perse le 2 août dernier. Malgré la défaillance de son arme, il fut arrêté alors qu'il clamait ses slogans.",
    "paragraphs": [
      "L'anarchiste Salsou, auteur de l'attentat du 2 août contre le Shah de Perse, a comparu devant la cour d'assises de la Seine. Défendu par Me Lagasse, l'accusé a été jugé pour sa tentative de meurtre commise lors du départ du souverain pour Versailles.",
      "Le coup n'avait pu aboutir grâce à la défaillance de l'amorce et à l'intervention du ministre Mahmoud-Khan. L'accusé avait été arrêté sur place alors qu'il clamait des slogans anarchistes."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'interrogatoire de l'anarchiste Salsou",
    "summary": "Retour sur l'interrogatoire de l'anarchiste Salsou. Démasqué par son matricule militaire, l'accusé, reconnu responsable par les aliénistes, a été condamné aux travaux forcés à perpétuité pour ses actes terroristes.",
    "paragraphs": [
      "L'identité de Salsou, initialement incertaine, fut établie grâce au matricule inscrit sur son linge de régiment, révélant une condamnation antérieure en 1894 pour propagande anarchiste.",
      "Après sa condamnation, Salsou s'engagea et eut une excellente conduite au régiment. Cependant, sa correspondance après sa libération démontra que son repentir n'était qu'apparent.",
      "En avril, il fut arrêté pour avoir porté cinq coups de couteau à un nommé Alexandre et condamné à huit mois de prison. Cette condamnation, qu'il juge injuste, aurait réveillé sa colère contre la société et sa vocation pour le martyre.",
      "Le 2 juillet, il acheta un revolver et prétend s'être rendu à Pont-sur-Seine avec l'intention de tirer sur Casimir-Périer, sans succès.",
      "L'arrivée du Shah de Perse à Paris modifia ses desseins. Salsou est un garçon de vingt-quatre ans, de taille moyenne, au visage anguleux. Il ne conteste pas les faits matériels de l'attentat.",
      "Lors de l'audience, l'accusé nia avoir tenu des propos menaçants à son codétenu Lapierre concernant Rothschild ou d'autres figures anarchistes. Il affirma qu'il voulait se rendre utile à l'idée anarchiste, mais sans viser le Shah personnellement.",
      "Les médecins aliénistes ont déclaré Salsou entièrement responsable. L'avocat général Lombard a requis une peine sévère. Finalement, Salsou a été condamné aux travaux forcés à perpétuité."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Littérature / Feuilleton",
    "title": "Les Rambert",
    "summary": "Au sein de la famille Rambert, Maurice affiche une insouciance dorée tandis que sa sœur Louise sombre dans un drame intime que la baronne d'Orvilliers tente désespérément de dissimuler aux yeux du monde.",
    "paragraphs": [
      "Maurice jetait de temps en temps sa note ironique et joyeuse. C'était un vrai Rambert, possédant toutes les qualités de sa race ou tous les vices, selon le point de vue.",
      "Riche de plus de quatre-vingt mille francs de rentes, il occupait le pavillon paternel rue de Grenelle. Le malaise de sa sœur Louise ne le troublait guère.",
      "Le marquis et la baronne d'Orvilliers se rendent dans la chambre de Louise. Elle est en proie à une profonde douleur physique et morale, à genoux, refusant de révéler la cause de son malheur.",
      "La baronne tente de la faire parler pour sauver l'honneur de la maison, mais Louise, après avoir pleuré et nié, finit par s'évanouir. La baronne décide de prendre les choses en main pour étouffer le scandale."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Chronique Extrême-Orient",
    "title": "Opérations militaires en Chine",
    "summary": "Le général Voyron rapporte un engagement victorieux contre les Boxers. Pendant ce temps, le maréchal de Waldersee confirme le rétablissement des communications ferroviaires sous surveillance internationale.",
    "paragraphs": [
      "Une dépêche du général Voyron avise le ministre de la Marine qu'un engagement sérieux a eu lieu en octobre contre les Boxers. Le village retranché a été pris d'assaut par les troupes françaises.",
      "Le maréchal de Waldersee a communiqué que le chemin de fer de Chan-Haï-Kouan à Tchang-Chak-Sun est en exploitation. La colonne Gariotti a désarmé quatre bataillons chinois.",
      "Le Times rapporte que les représentants russe et français se sont opposés à la proposition anglaise concernant la révision des traités de commerce lors du traité préliminaire à Pékin."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Hommage aux marins en Extrême-Orient",
    "summary": "L'amiral Pottier et le ministre M. Pichon rendent un hommage solennel aux marins français tombés glorieusement lors de la défense héroïque de la légation et du Peï-Tang durant les événements de Pékin.",
    "paragraphs": [
      "L'amiral Pottier a adressé un ordre du jour louant le courage des marins français lors des événements de Pékin. Une lettre du ministre de France, M. Pichon, souligne le dévouement des troupes lors de la défense de la légation et du Peï-Tang.",
      "Les enseignes Henry et l'aspirant Herber ont été tués lors de ces combats. Leur souvenir sera pieusement conservé."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Social",
    "title": "Éclairage électrique au Ministère de la Guerre",
    "summary": "Le Ministère de la Guerre abandonne l'éclairage au gaz pour l'électricité. Cette modernisation des bureaux permet de supprimer le poste de lampiste, amortissant ainsi les frais d'installation.",
    "paragraphs": [
      "Les bureaux du Ministère de la Guerre viennent de délaisser définitivement l'éclairage au gaz pour adopter la lumière électrique. Ce changement salutaire permet de supprimer le poste de lampiste, les économies ainsi réalisées compensant largement les frais d'installation initialement engagés."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Service Militaire",
    "title": "Appels sous les drapeaux",
    "summary": "Le Ministère de la Guerre a officiellement arrêté les modalités et les conditions des prochaines périodes d'instruction militaire pour les réservistes et les territoriaux des classes 1891 à 1897.",
    "paragraphs": [
      "Le Ministère de la Guerre a arrêté les nouvelles conditions relatives aux périodes d'instruction pour les réservistes ainsi que pour les territoriaux. Ces dispositions concernent plus particulièrement les classes allant de 1891 à 1897."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Dernières nouvelles du Transvaal",
    "summary": "Lord Roberts confirme la violence des récents combats au Transvaal, où les Boërs ont tenté une charge inédite. Des mesures répressives sont prises contre les insurgés et les prisonniers capturés.",
    "paragraphs": [
      "Lord Roberts a confirmé les détails des engagements ayant duré deux journées consécutives. Le général Smith-Dorrien rapporte que les Boërs ont chargé l'arrière-garde anglaise, un fait militaire jugé sans précédent dans ce conflit.",
      "Un convoi transportant des femmes et des hommes Boërs, exilés pour crime de trahison, est arrivé à Pietermaritzburg. Par ailleurs, plusieurs prisonniers capturés à Bothaville ont été incarcérés pour détention illicite de cartouches à balles explosives."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Étranger",
    "title": "Agitation carliste",
    "summary": "Des partisans carlistes multiplient les troubles dans les Pyrénées. La répression policière espagnole a contraint plusieurs membres du clergé complices à se réfugier sur le sol français, à Bourg-Madame.",
    "paragraphs": [
      "Des bandes armées, composées de partisans du prétendant carliste, ont été signalées à plusieurs reprises dans le massif des Pyrénées. Tandis que la police espagnole multiplie les arrestations, certains membres du clergé, dont l'implication est avérée, ont dû se réfugier en France, au sein de la commune de Bourg-Madame."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "La clôture de l'Exposition",
    "summary": "L'Exposition universelle ferme ses portes. Malgré les tensions politiques et le deuil national lié à la mort du roi Humbert, les exposants étrangers saluent la qualité de l'accueil reçu à Paris.",
    "paragraphs": [
      "L'Exposition universelle ferme aujourd'hui définitivement ses portes. Les exposants étrangers tiennent à exprimer leur vive tristesse ainsi que leur profonde reconnaissance pour l'accueil chaleureux reçu à Paris, en dépit des préoccupations politiques du moment et du deuil national observé suite à la mort du roi Humbert.",
      "À cette occasion, une grande fête nocturne est organisée à l'annexe de Vincennes afin de clore cet événement mémorable."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Social",
    "title": "Situation des sociétaires et remboursements",
    "summary": "Le comité central rassure les sociétaires quant au remboursement de leurs titres : un audit impartial sera réalisé et les versements effectués à guichet ouvert, sous condition de poursuivre les cotisations.",
    "paragraphs": [
      "Dans une lettre adressée aux sociétaires réclamant le remboursement de leurs titres, le comité central affirme qu'aucun effort ne sera épargné, pourvu que les événements n'amènent pas de complications sur notre marché.",
      "À ce moment, un compte très exact de chaque part à rembourser sera établi par des comptables spéciaux pris en toute impartialité, en dehors du comité, en tenant compte au marc le franc de tous les facteurs qui contribuent à grossir le capital versé, et les remboursements auront lieu à guichet ouvert.",
      "Les sociétaires sont en outre invités à continuer le paiement de leurs cotisations pour ne pas perdre leurs droits."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Social",
    "title": "Bulletin du personnel des Omnibus",
    "summary": "Malgré le démenti officiel de la direction concernant une modification des conventions de travail, le personnel de la Compagnie générale des omnibus maintient sa réunion syndicale au Tivoli-Vaux-Hall.",
    "paragraphs": [
      "Le personnel de la Compagnie générale des omnibus est convoqué en réunion plénière pour la nuit de dimanche à lundi au Tivoli-Vaux-Hall.",
      "À l'ordre du jour, il est question d'une manœuvre que la Compagnie des omnibus aurait l'intention de faire pour substituer de nouvelles conventions à celles existantes. Ce bruit, propagé, a provoqué une certaine agitation dans le personnel.",
      "Le siège social a démenti ces rumeurs par une affiche officielle placardée dans les dépôts, affirmant que l'information n'avait aucune espèce de fondement.",
      "Malgré cette communication officielle, la réunion organisée par la chambre syndicale du personnel aura lieu comme prévu."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Social",
    "title": "Une fête à la Bourse du Travail",
    "summary": "La Bourse du Travail organise ce soir une réception en l'honneur des délégations ouvrières françaises et étrangères présentes à l'Exposition universelle.",
    "paragraphs": [
      "La dernière des fêtes organisées en l'honneur des délégations ouvrières françaises et étrangères à l'Exposition aura lieu ce soir, à neuf heures, dans la grande salle de la Bourse du Travail.",
      "Les différentes organisations ouvrières ont été invitées au nom de la commission spéciale des fêtes et de la commission administrative de la Bourse."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Inondations en Algérie",
    "summary": "Le département d'Oran est frappé par de violentes inondations. Dans la région de Mascara, plusieurs habitations ont été détruites et des pertes humaines sont signalées après la crue des eaux.",
    "paragraphs": [
      "Oran, 10 novembre. Des inondations sont signalées sur divers points du département.",
      "Dans la région de Mascara, des femmes et des enfants ont été emportés par les eaux. Les bâtisses de Mascara ont été démolies sur plusieurs points. Les routes et les voies de communication sont submergées."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'incendie de la rue Brunel",
    "summary": "Un incendie a ravagé les ateliers d'automobiles de M. Vinet, rue Brunel. Grâce à l'intervention rapide des pompiers, le sinistre a été maîtrisé. Les dégâts sont estimés à 50 000 francs.",
    "paragraphs": [
      "Un incendie, dont les causes ne pourront être définies que par les architectes-experts, a éclaté hier soir, vers neuf heures, rue Brunel. Il s'agit d'une maison à deux étages abritant les magasins de M. Vinet, constructeur d'automobiles.",
      "Un service d'ordre a été mis en place et les pompiers de l'avenue Niel et de Passy sont parvenus à se rendre maîtres de l'incendie en vingt minutes.",
      "L'enquête ouverte par le commissaire de police n'a pas encore permis de préciser les causes exactes, bien qu'une étincelle de machine à vapeur ou un court-circuit soient évoqués. Les dégâts s'élèvent à environ 50 000 francs."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "La vengeance d'une Sicilienne",
    "summary": "Un drame passionnel a éclaté place Saint-Séverin : une femme, prénommée Paquita, a grièvement blessé son ancien amant, le modèle Guglielmo Ferris, à coups de stylet avant d'être appréhendée par les autorités.",
    "paragraphs": [
      "Dans le milieu des modèles de peintres, aux abords de la place Saint-Séverin, un drame passionnel s'est déroulé. Guglielmo Ferris, un amant volage, a été attaqué par son ancienne compagne, une Sicilienne prénommée Paquita.",
      "Paquita a surpris Ferris en compagnie d'une nouvelle conquête et a porté plusieurs coups de stylet au visage et au corps de l'homme. La femme a été arrêtée, tandis que Ferris, bien qu'atteint, a été conduit à l'Hôtel-Dieu où ses jours ne sont pas en danger."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un faussaire",
    "summary": "Les services de police ont procédé hier à l'arrestation de Raphaël Planès, un ressortissant espagnol coupable d'avoir tenté d'écouler des titres falsifiés auprès de plusieurs changeurs parisiens.",
    "paragraphs": [
      "Un certain nombre de titres falsifiés avaient été présentés à des changeurs. Le service de police a opéré hier l'arrestation du faussaire, un nommé Raphaël Planès, d'origine espagnole, qui a été aussitôt mis à la disposition du juge d'instruction."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression nocturne avenue des Ternes",
    "summary": "Trois individus ont agressé une femme avenue des Ternes cette nuit. Lors de l'altercation, l'un des malfaiteurs a fait usage d'un revolver avant que le groupe ne soit appréhendé par les agents de police.",
    "paragraphs": [
      "La nuit dernière, une dame, Mme Maria B., a été abordée avenue des Ternes par trois individus qui ont tenté de la bousculer. Léon Perrot, l'un des agresseurs, a fait feu avec un revolver sans toutefois atteindre sa cible.",
      "Les agents ont rapidement arrêté les trois agresseurs, qui ont été conduits au poste et mis à la disposition du commissaire de police."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression d'un garçon boulanger",
    "summary": "Un jeune garçon boulanger a été victime d'une violente agression cette nuit. Dépouillé de ses effets personnels, il a été frappé d'un coup de couteau dans le dos par ses agresseurs, qui demeurent en fuite.",
    "paragraphs": [
      "Vers deux heures du matin, un garçon boulanger, M. Ernest Forent, a été agressé par deux individus. Ces derniers l'ont renversé pour le dépouiller de sa montre et de son porte-monnaie, avant de le frapper d'un coup de couteau dans le dos. Les agresseurs ont réussi à prendre la fuite."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents divers autour de Paris",
    "summary": "Une série de drames a frappé la banlieue parisienne : accidents de la circulation, agressions violentes, suicide par défenestration et noyade tragique dans la Marne ont endeuillé la journée.",
    "paragraphs": [
      "À Puteaux, la petite Juliette Plaisir, âgée de six ans, a été renversée par une voiture ; son état est jugé désespéré.",
      "À Asnières, deux hommes ont agressé un passant et lui ont brisé la jambe au cours de leur méfait.",
      "À Levallois-Perret, Mme veuve Laligny, cinquante-cinq ans, s'est précipitée par la fenêtre du troisième étage et a succombé à ses blessures.",
      "À Alfortville, deux jeunes gens ont péri par noyade dans la Marne après que leur aviron a rompu, entraînant leur chute dans les eaux."
    ]
  }
];
