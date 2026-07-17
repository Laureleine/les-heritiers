// Date: 1900-11-02
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-11-02 (Version Restaurée, 51 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "L'élection présidentielle aux États-Unis",
    "summary": "À l'approche du scrutin du 6 novembre, la nation américaine s'apprête à faire un choix décisif. Entre républicains et démocrates, l'Europe observe les enjeux d'une élection qui pourrait infléchir la diplomatie mondiale.",
    "paragraphs": [
      "C'est mardi prochain, le 6 novembre, que le peuple américain nommera, avec mandat impératif, les électeurs chargés d'élire à leur tour le président.",
      "L'extrême passion qui se manifeste au-delà de l'Atlantique montre combien les citoyens des États-Unis sentent l'importance du choix qui va être fait. C'est que, depuis l'élection de Lincoln en 1860, la grande République n'a jamais eu à prendre une décision plus grave.",
      "Aussi l'Europe comprend-elle que ses propres destinées peuvent être modifiées par ce scrutin populaire. La lutte entre les républicains et les démocrates porte cette année sur des enjeux majeurs de politique étrangère et d'impérialisme.",
      "Si M. Bryan entrait à la Maison-Blanche, il serait contraint de réagir contre les aspirations impérialistes manifestées ces dernières années, ramenant les États-Unis à leurs doctrines antérieures de non-intervention.",
      "Nous, Français, qui voyons la grande République sous l'aspect de la belle statue 'La Liberté éclairant le monde', nous souhaitons que le peuple des États-Unis vote avec clairvoyance."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Politique",
    "title": "Le Président de la République à Lyon",
    "summary": "Le Président de la République se rendra à Lyon demain en compagnie de M. Waldeck-Rousseau. Au programme : inauguration du monument Carnot et célébration du centenaire de l'école de La Martinière.",
    "paragraphs": [
      "Le Président de la République quittera Paris demain soir, en compagnie de M. Waldeck-Rousseau, président du Conseil, et de plusieurs ministres, pour se rendre à Lyon afin de présider l'inauguration du monument Carnot.",
      "Le chef de l'État sera reçu sur le quai d'arrivée par les autorités locales, assistera à un banquet offert par la chambre de commerce, et présidera la célébration du centenaire de l'école de La Martinière avant de regagner Paris lundi matin."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Les interpellations au Parlement",
    "summary": "Avec trente-sept interpellations déposées, le Palais-Bourbon risque la paralysie législative. La priorité demeure la discussion du budget et l'urgence des réformes nationales.",
    "paragraphs": [
      "À l'approche de la session parlementaire, le Palais-Bourbon fait face à une véritable marée d'interpellations. On en compte trente-sept à l'heure actuelle, ce qui menace d'impuissance le travail législatif si aucune mesure n'est prise.",
      "Il s'agit donc, dès la reprise, de trancher nettement la question de confiance et de consacrer le temps nécessaire au budget et aux réformes urgentes, plutôt qu'à des controverses oiseuses."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Typhon en Annam et nomination en Afrique occidentale",
    "summary": "Des nouvelles d'Asie font état d'un violent typhon en Annam. Parallèlement, un décret officiel confirme la nomination de M. Ballay au poste de gouverneur général de l'Afrique occidentale française.",
    "paragraphs": [
      "Une dépêche de Hong-Kong rapporte qu'un typhon a dévasté l'Annam, causant des pertes humaines et matérielles, bien que cette nouvelle reste à confirmer officiellement par le ministère des Colonies.",
      "Par ailleurs, un décret du 1er octobre nomme M. Ballay, gouverneur de la Guinée française, au poste de gouverneur général de l'Afrique occidentale française, en remplacement de M. Chaudié."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique étrangère",
    "title": "La démission de Lord Salisbury",
    "summary": "Lord Salisbury abandonne les Affaires étrangères au profit du marquis de Lansdowne, tout en restant premier ministre. Ce remaniement laisse espérer une diplomatie britannique plus modérée.",
    "paragraphs": [
      "Lord Salisbury a décidé de passer à d'autres mains le portefeuille des Affaires étrangères, tout en demeurant premier ministre. Son successeur, le marquis de Lansdowne, devrait adopter une ligne diplomatique plus modérée et moins belliqueuse que ce que préconisait M. Chamberlain.",
      "Ce remaniement est perçu comme un échec pour le parti de M. Chamberlain et une garantie contre une escalade des conflits armés par la diplomatie britannique."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Social",
    "title": "La fin de la grève du Pas-de-Calais",
    "summary": "L'entrevue d'Arras porte ses fruits : MM. Basly et Lamendin organisent les dernières réunions pour finaliser la reprise du travail. Dès ce matin, les mineurs regagnent massivement les puits de mine.",
    "paragraphs": [
      "Bien que l'agitation ne soit pas encore totalement retombée, les réunions organisées par MM. Basly et Lamendin ont permis de clarifier les termes de l'entrevue d'Arras qui a mis fin au conflit hier. On s'attend à une reprise massive du travail dans les puits de mine dès ce matin."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Grave accident du travail en Savoie",
    "summary": "Un terrible accident d'échafaudage au château de la Dragonnière, près d'Yenne, a causé la mort de deux ouvriers zingueurs, Antoine Gentiat et Célestin Demazières, précipités dans le vide d'une hauteur de trente mètres.",
    "paragraphs": [
      "Un accident mortel s'est produit au château de la Dragonnière, près d'Yenne, en Savoie. Trois ouvriers zingueurs travaillaient sur un échafaudage qui a soudainement cédé sous leur poids. Deux d'entre eux, Antoine Gentiat et Célestin Demazières, sont décédés des suites de leur chute de trente mètres."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Étranger",
    "title": "L'insurrection carliste en Espagne",
    "summary": "La situation en Catalogne s'aggrave : malgré les démentis officiels, la découverte d'armes et de documents confirme l'existence d'un complot carliste coordonné par des insurgés armés.",
    "paragraphs": [
      "Le soulèvement carliste prend des proportions inquiétantes en Catalogne, où des insurgés armés et en uniforme ont été signalés. Malgré les démentis officiels minimisant l'ampleur du mouvement, la police a découvert plusieurs dépôts d'armes et des documents compromettants, révélant une tentative de complot minutieusement coordonnée."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Jeunes bandits à Lille",
    "summary": "Deux malfaiteurs, Julien Guilbert et Jules Rêne, ont tenté d'étrangler Mme Flambart au domicile du sieur Berck à Lille. Alertés par les cris, ils ont pris la fuite et sont activement recherchés.",
    "paragraphs": [
      "Deux jeunes hommes, Julien Guilbert et Jules Rêne, ont tenté d'étrangler Mme Flambart au domicile d'un riche particulier, M. Berck, à Lille. Alertés par les cris déchirants de la victime, les agresseurs ont pris la fuite sans demander leur reste. Ils sont actuellement activement recherchés par les brigades de police."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Actualités",
    "title": "Le nouveau colonel des pompiers",
    "summary": "Le général André nomme le colonel Dépruncaux à la tête des sapeurs-pompiers de Paris. Cet officier, fort d'une grande expérience, répond à la demande du conseil municipal de renforcer le service d'incendie.",
    "paragraphs": [
      "Le général André a nommé le colonel Dépruncaux à la tête des sapeurs-pompiers de Paris, répondant ainsi au vœu du conseil municipal de placer un officier chevronné à la direction du service d'incendie. Le colonel Dépruncaux possède une longue expérience militaire et une connaissance approfondie des risques urbains, gages de sa réussite future."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Actualités",
    "title": "La situation en Chine",
    "summary": "L'hiver complique les liaisons avec Pékin. Entre désirs d'armistice, sabotages récurrents et inertie coupable des sections russes, la reconstruction des voies ferrées demeure un défi majeur pour les puissances.",
    "paragraphs": [
      "L'approche de l'hiver rend les communications avec Pékin extrêmement difficiles et les représentants des puissances étrangères débattent désormais de l'opportunité d'un armistice. La reconstruction des voies ferrées progresse péniblement, retardée par de fréquents sabotages et par l'inaction manifeste des sections russes chargées des réparations."
    ]
  },
  {
    "id": 12,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le fruit défendu",
    "summary": "Rose-Manon retrouve sa sœur Régine chez Jean Villaurier. Après une brève confrontation, elle la ramène dans le foyer familial où Jérôme et Marianne, prostrés par la fièvre, sombrent dans un délire inquiétant.",
    "paragraphs": [
      "Rose-Manon a réussi à retrouver sa sœur Régine à l'hôtel de Jean Villaurier, rue Kléber. Après une confrontation sans un mot avec le séducteur, elle parvient à emmener sa sœur dans un fiacre en direction de la rue Saint-Éleuthère.",
      "De retour chez leurs parents, Jérôme et Marianne, qui délirent sous l'effet de la fièvre, Rose tente de réconforter Régine, malgré le drame qui semble irrémédiable."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "International",
    "title": "Travaux ferroviaires en Chine",
    "summary": "Si la ligne vers Pékin approche de son terme, l'achèvement est freiné par le manque de matériel et, surtout, par l'inaction inexplicable des troupes russes stationnées aux ateliers de Toung-Tcheou.",
    "paragraphs": [
      "La ligne jusqu'à Pékin sera terminée dans quelques semaines. Les Anglais réparent la section de Pékin à Ho-nan-Fou, d'une longueur de 18 milles ; tous les rails et les traverses sont posés. Le manque de rails à éclisses retarde grandement le travail.",
      "Les Japonais ont commencé le travail à Houang-Kouan pour rejoindre les Allemands, qui sont partis de Yang-Tsun.",
      "L'inaction des Russes empêche seule que la ligne ne soit achevée à temps. Cette attitude de leur part est d'autant plus inexplicable qu'ils sont chargés de la surveillance de Toung-Tcheou, où sont les ateliers de la ligne, et qu'ils ont tout le matériel pour terminer leurs travaux."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "International",
    "title": "Nouvelles de Canton",
    "summary": "L'instabilité perdure à Canton après une explosion suspecte. Entre arrestations en suspens et destructions massives de missions chrétiennes, les autorités locales se révèlent incapables de rétablir l'ordre.",
    "paragraphs": [
      "D'après des informations de Canton, les fonctionnaires possèdent les noms d'un certain nombre de réformateurs qui seraient suspects d'avoir contribué à l'explosion, mais on n'a pas encore procédé à de nouvelles arrestations.",
      "Depuis le commencement des troubles, près de quarante chapelles et missions ont été détruites dans les deux Kouang, et des centaines de convertis se trouvent sans logis.",
      "On rapporte que les chrétiens, dans beaucoup de districts, moissonnent les champs et recueillent les récoltes. Les autorités demeurent impuissantes à rétablir l'ordre."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Chronique Diplomatique",
    "title": "La duplicité chinoise",
    "summary": "Analyse de la fourberie chinoise durant la révolte des Boxers : un contraste saisissant entre les messages de sollicitude envoyés aux légations et la violence réelle exercée contre les Européens.",
    "paragraphs": [
      "Les traits de cette singulière fourberie qui semble constituer le fond de l'esprit chinois abondent. On a raconté comment, pendant le siège des légations, alors que boxeurs et soldats réguliers criblaient de coups de canon les faibles murailles derrière lesquelles s'abritaient nos malheureux compatriotes, des fonctionnaires de la cour faisaient parvenir aux assiégés des messages où ils leur témoignaient la plus tendre sollicitude.",
      "Et, en même temps qu'ils s'efforçaient d'exterminer, par le fer et le feu, les Européens ainsi bloqués dans un quartier de Pékin, les Chinois faisaient transmettre en Europe des dépêches assurant que des vivres et des secours étaient prodigués aux gens des légations. On annonça avec la même fausseté que des châtiments avaient été édictés par l'Empereur contre les principaux meneurs du parti hostile aux étrangers.",
      "On verra sans doute sous peu, quand se négocieront les préliminaires d'un traité de paix, les mêmes mandarins et lettrés chinois protester de leur sympathie pour les Européens qu'ils exècrent et affirmer, la main sur leur cœur, qu'ils n'ont jamais cessé de les aimer."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Dépêches de la guerre",
    "summary": "Mouvements des troupes boërs au Transvaal et captures d'avant-postes anglais. Lord Kitchener souligne la durée prolongée des opérations militaires lors de ses adieux aux troupes australiennes.",
    "paragraphs": [
      "Londres, novembre. Le correspondant du Daily Mail à Lourenço-Marquès rapporte que les Boërs se montrent actifs sur la ligne de chemin de fer reliant Komati-Poort à Pretoria, sans pour autant modifier fondamentalement la situation militaire.",
      "Pretoria, 31 octobre. Il est rapporté que le général Botha, à la tête d'un fort détachement, marche sur le district de Kenhardt. Le bruit court qu'un certain nombre de Boërs irrédentistes se préparent à partir pour un nouveau trek.",
      "Kronstadt, 28 octobre. Ce matin, de bonne heure, un détachement de Boërs a cerné et capturé un avant-poste anglais composé de 90 hommes dans le voisinage de Geneva. Plus tard, les Boërs ont attaqué, près de Holfontein, le train-poste venant du Cap. Le convoi dut s'arrêter, les passagers furent fouillés et le train incendié. Les 90 prisonniers furent relaxés dans la journée.",
      "Pretoria, 24 octobre. Le général Botha occupe actuellement Warmbaths. Hier, le général Paget a été attaqué subitement par les Boërs près de Pienaars-River. Il a riposté et fait vingt-six prisonniers.",
      "Craddock, 31 octobre. Le malaise continue le long de la frontière méridionale de l'État d'Orange. La garnison d'Aliwal-North est en alerte.",
      "Pretoria, 30 octobre. Dans une allocution d'adieu à un contingent australien, lord Kitchener a déclaré : « La guerre a peut-être duré plus longtemps que prévu. Il y a encore beaucoup à faire. »"
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Étranger",
    "title": "Un divorce retentissant",
    "summary": "Le prince Christian de Slesvig-Holstein sollicite le divorce pour sa fille Louise, séparée du prince Aribert d'Anhalt, lequel subit la disgrâce impériale de Guillaume II.",
    "paragraphs": [
      "Le prince Christian de Slesvig-Holstein, gendre de la reine Victoria, est frappé d'un nouveau malheur de famille. Sa fille, Louise, mariée au prince Aribert d'Anhalt, a quitté son époux pour ne plus rester au domicile conjugal. Le père est venu à Berlin pour obtenir le divorce. Quant au prince Aribert, Guillaume II lui a fait signifier un congé illimité, ce qui constitue une disgrâce peu déguisée."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Colonisation",
    "title": "Colonisation allemande",
    "summary": "Sur ordre impérial, le prince Prosper d'Arenberg est condamné à quinze ans de prison pour des actes de cruauté commis en Afrique du Sud-Ouest lors de son séjour colonial.",
    "paragraphs": [
      "Le prince Prosper d'Arenberg a été condamné à quinze ans d'emprisonnement, à la suite d'un nouveau procès ordonné par l'Empereur, qui a établi la réalité des cruautés exercées par le prince pendant son séjour dans l'Afrique du Sud-Ouest."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le tremblement de terre du Venezuela",
    "summary": "Des secousses sismiques persistantes au Venezuela ont anéanti les villes de San Casimir et Cua-Charillo, causant de lourdes pertes humaines et des dégâts matériels considérables.",
    "paragraphs": [
      "Des télégrammes de Caracas du 31 octobre indiquent que les secousses de tremblement de terre persistent. San Casimir et Cua-Charillo ont été entièrement détruites. Les dégâts sont considérables et l'on déplore un grand nombre de morts et de blessés."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "La fréquentation de l'Exposition",
    "summary": "Profitant d'une douceur printanière, les fêtes de la Toussaint ont drainé une foule nombreuse à l'Exposition Universelle, atteignant plus de 100 000 visiteurs en une seule journée.",
    "paragraphs": [
      "Les fêtes de la Toussaint ont amené hier à l'Exposition un nombre considérable de visiteurs venus des provinces lointaines. Il faisait un temps superbe et les curieux s'en sont donné à cœur joie, profitant de la douceur printanière pour manger en plein air.",
      "Avant-hier, on a enregistré 100 840 entrées, dont 80 840 payantes."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Les morts à l'Exposition",
    "summary": "À l'Exposition universelle, des pèlerins ont rendu un hommage discret et solennel aux grandes figures étrangères, déposant gerbes et fleurs devant les portraits et monuments commémoratifs des pavillons nationaux.",
    "paragraphs": [
      "La journée d'hier à l'Exposition a été marquée par de discrètes manifestations de pèlerins du souvenir. Des Transvaaliens ont prié au pavillon Boër devant le portrait du général Joubert, déposant une gerbe avec la fière devise : « Nous mourrons debout ».",
      "Au pavillon d'Italie, des bouquets ont été déposés au pied du portrait du roi Humbert. Au pavillon de la Grèce, une statue de Colocotronis a été fleurie, tandis qu'au pavillon américain, on a honoré avec respect la statue de Georges Washington."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Vie Militaire",
    "title": "Changements au Ministère de la Guerre",
    "summary": "Le colonel de l'infanterie au ministère de la Guerre quitte ses fonctions administratives pour rejoindre le 16e régiment à Hanoï. Il est remplacé par le colonel Menetrez, une figure connue de l'armée.",
    "paragraphs": [
      "Le colonel de l'infanterie au ministère de la Guerre quitte l'administration centrale et passe au 16e régiment d'infanterie à Hanoï. Il est remplacé par le colonel Menetrez, dont la personnalité est bien connue dans nos rangs. Ce dernier, âgé de cinquante-trois ans, possède une longue carrière militaire et fut notamment témoin des derniers instants du Président Félix Faure."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Vie Militaire",
    "title": "Une nouvelle ration de campagne",
    "summary": "Les autorités militaires autrichiennes expérimentent avec succès une nouvelle ration de campagne à base de chocolat albuminé, jugée plus nutritive et aisée à transporter que le bœuf de conserve traditionnel.",
    "paragraphs": [
      "Les journaux militaires allemands signalent l'expérimentation réussie d'une nouvelle ration de campagne à base de chocolat albuminé pour les troupes autrichiennes. Très nutritive et compacte, cette ration peut être consommée telle quelle ou sous forme de potage avec de l'eau, remplaçant avantageusement le bœuf de conserve."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Faits Divers",
    "title": "Les fêtes de Brest",
    "summary": "Le ministre de la Guerre, le général André, a inauguré à Brest un monument dédié aux marins et soldats bretons. La cérémonie, empreinte de patriotisme, a célébré l'union de l'Armée et de la République.",
    "paragraphs": [
      "La ville de Brest a inauguré aujourd'hui un monument à la mémoire des marins et soldats bretons morts pour la patrie, sous la présidence du ministre de la Guerre, le général André. Après une série d'ajournements, la cérémonie a finalement eu lieu le jour de la Toussaint.",
      "Le monument représente un génie ailé signalant l'envahisseur, avec un marin mourant tendant son fusil à un paysan breton. Le ministre a profité de sa visite pour remettre des décorations et célébrer l'union entre l'Armée et la République."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Chronique Parisienne",
    "title": "La Toussaint à Paris",
    "summary": "En ce jour de Toussaint, une foule recueillie a visité les cimetières parisiens. Les cérémonies, au Panthéon et devant les tombes illustres, se sont déroulées dans le calme et l'ordre, sans aucun incident.",
    "paragraphs": [
      "Les Parisiens ont rendu visite aux cimetières de la capitale. Au Panthéon, les polytechniciens ont honoré la mémoire de la famille Carnot. Au Père-Lachaise, à Montmartre et au Montparnasse, les foules ont afflué devant les tombes illustres. Des services d'ordre ont été organisés, notamment au mur des Fédérés, sans qu'aucun incident ne soit à déplorer."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Théâtre",
    "title": "Reprise de L'Assommoir",
    "summary": "Vingt ans après sa création, le drame d'Émile Zola, L'Assommoir, revient à l'affiche de la Porte-Saint-Martin. M. Guitry y livre une interprétation magistrale de Coupeau, soulignant la puissance intacte de l'œuvre.",
    "paragraphs": [
      "Le théâtre de la Porte-Saint-Martin reprend le célèbre drame de M. Émile Zola, L'Assommoir. Après vingt années, cette œuvre conserve toute sa force et demeure d'une brûlante actualité dans sa dénonciation des ravages de l'alcoolisme.",
      "L'intérêt majeur de cette reprise réside dans l'interprétation saisissante de M. Guitry dans le rôle de Coupeau, dont le naturalisme a été vivement acclamé par le public."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Échos",
    "title": "Notes diverses",
    "summary": "Mouvements diplomatiques entre la France et le Japon, parution historique sur le captif de Sainte-Hélène par Lord Rosebery, et session annuelle des États de Sercq : l'actualité en bref.",
    "paragraphs": [
      "M. Kurino, ambassadeur du Japon, a quitté Paris hier. Au même moment, M. Cambon, ambassadeur de France à Londres, est arrivé dans la capitale.",
      "Lord Rosebery publie à Londres un ouvrage d'un grand intérêt historique consacré au séjour de Napoléon à Sainte-Hélène.",
      "Le Parlement de Sercq, l'une des plus modestes chambres législatives du monde, vient de tenir sa session annuelle."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Social",
    "title": "Les Prévoyants de l'Avenir",
    "summary": "La société des Prévoyants de l'Avenir opère sa mue en société en commandite. Malgré des débats vifs sur cette évolution, la majorité des sections manifeste son adhésion à ce changement structurel.",
    "paragraphs": [
      "Les Prévoyants de l'Avenir se sont constitués en société en commandite. Si la décision de transformer la société civile de retraites en une structure commerciale a suscité des débats nourris, la majorité des sections y demeure favorable."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Politique",
    "title": "La transformation de la société 'L'Avenir'",
    "summary": "En dépit d'une situation tendue avec le ministère, le comité central des Prévoyants de l'Avenir officialise sa transformation en société commerciale, malgré des lacunes dans le recensement des votes.",
    "paragraphs": [
      "Le comité central a refusé d'assister au recensement des votes dans les bureaux de la place Beauvau, bien que les procès-verbaux fussent tenus à la disposition du ministre.",
      "Les chiffres officiels diffèrent de ceux avancés par le ministère, trois cents sections n'ayant pas encore fait parvenir leurs délibérations. Néanmoins, le comité central a décidé de déclarer acquise la transformation des Prévoyants de l'Avenir en société commerciale."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Culture et Patrimoine",
    "title": "La restauration de la Malmaison",
    "summary": "Grâce à la munificence de M. Osiris, le château de la Malmaison, restauré après quatre années de travaux, s'ouvre au public comme musée dédié à Napoléon Bonaparte et à l'époque du Consulat.",
    "paragraphs": [
      "Après quatre ans de travaux, la Malmaison a retrouvé sa splendeur d'antan, après avoir été trop longtemps laissée à l'abandon et livrée au vandalisme des touristes et des amateurs de souvenirs.",
      "Grâce à la générosité de M. Osiris, le château a été restauré pour devenir un musée destiné à recueillir les souvenirs de la République et du Consulat, en hommage à Napoléon Bonaparte.",
      "Le château est aujourd'hui tel qu'il se présentait aux yeux de Bonaparte, bien que celui-ci fût souvent mécontent des aménagements réalisés par les architectes Percier et Fontaine, dont il jugeait les coûts exorbitants.",
      "La restauration minutieuse a permis de retrouver les décors originaux : colonnes de stuc, peintures en camaïeu et boiseries d'acajou. Les appartements intimes et les futures salles du musée sont désormais prêts à accueillir les visiteurs."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Feuilleton",
    "title": "Les Miettes du Bonheur - Partie IV",
    "summary": "Accablée par l'idée imminente de son union, l'héroïne, en proie à un trouble profond et à une répulsion indicible, mesure le caractère irrémédiable de son destin.",
    "paragraphs": [
      "Elle ferma les yeux. Durant quelques secondes, elle s'appuya au dossier d'une chaise. Sa tête tournait. Et, mentalement, elle se disait : « Madame Lipray. Ah oui. Bientôt, le nom sera le mien. Hélas, c'est irrémédiable à présent. »",
      "Tandis qu'un long frisson d'angoisse, de répulsion et d'horreur courait sur tout son corps."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Actualité Militaire",
    "title": "Le retour du corps expéditionnaire",
    "summary": "Le rapatriement des troupes coloniales révèle une détresse profonde chez des soldats épuisés. Parmi eux, le capitaine de Courtial, marqué par le deuil, cherche en vain l'apaisement dans l'exercice de son devoir.",
    "paragraphs": [
      "Ce fut un spectacle attristant que celui du retour en France des malades et des convalescents du corps expéditionnaire. Ces soldats, partis pleins de force, revenaient ravagés par la fièvre.",
      "Sur un de ces paquebots, le capitaine Pierre de Courtial, malgré sa promotion et sa décoration, portait les stigmates d'une inguérissable souffrance. Le voyage fut marqué par la perte quotidienne de nombreux hommes, jetés à la mer.",
      "L'approche de la France ne réjouissait point le capitaine, seul au monde et le cœur brisé par la perte irrémédiable de sa famille, cherchant dans le départ vers de nouvelles missions un oubli définitif."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Nouvelles judiciaires : Condamnation aux Landes",
    "summary": "La cour d'assises des Landes a rendu son arrêt dans l'affaire Marcetin Candau, condamné à deux ans de réclusion pour avoir porté des coups mortels lors d'une altercation avec le sieur Camiade.",
    "paragraphs": [
      "Le nommé Marcetin Candau, âgé de vingt-sept ans, a été traduit devant la cour d'assises des Landes pour avoir mortellement poignardé le nommé Camiade à la suite d'une dispute.",
      "La cour a condamné Candau à deux ans d'emprisonnement pour ces faits."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Technique Militaire",
    "title": "Problèmes de munitions : Cordite et Lyddite",
    "summary": "Les difficultés rencontrées lors de la guerre du Transvaal contraignent le War Office à enquêter sur la fiabilité de la cordite et de la lyddite, munitions dont l'usage s'avère préjudiciable au matériel artilleur.",
    "paragraphs": [
      "Les Anglais ne sont point satisfaits de leur poudre sans fumée, la cordite, dont la guerre du Transvaal a démontré l'insuffisance. Le War Office a institué une commission afin de découvrir un explosif plus performant.",
      "La cordite détériore rapidement les canons, tandis que la lyddite, utilisée dans les obus, occasionne de fréquents ratés. Une amélioration du dosage ou un remplacement est actuellement à l'étude."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Chronique Littéraire",
    "title": "Vers la paix",
    "summary": "L'ouvrage 'Vers la paix', signé par MM. Théodore Cahu et Louis L'Eglise, constitue un plaidoyer humaniste vibrant contre les horreurs des conflits armés, exaltant la puissance morale de la bonté.",
    "paragraphs": [
      "Le roman 'Vers la paix', de MM. Théodore Cahu et Louis L'Eglise, est une œuvre remarquable qui dénonce l'horreur de la guerre tout en exaltant l'amour de la paix, invitant le lecteur à s'imposer par la seule force de la bonté."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de voiture boulevard Saint-Germain",
    "summary": "Un accident dramatique s'est produit hier boulevard Saint-Germain. Un cheval emballé a renversé plusieurs passants, blessant grièvement le cocher, avant d'être abattu par les agents de la force publique.",
    "paragraphs": [
      "Hier après-midi, un cheval s'est emballé boulevard Saint-Germain, renversant plusieurs passants sur son passage. Le cocher a été grièvement blessé et l'animal, ayant les deux membres postérieurs brisés, a dû être abattu sur place par les agents de la force publique."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Attaque d'un bureau d'octroi",
    "summary": "Une bande de dix malfaiteurs a attaqué le bureau d'octroi de la porte Champerret. Après avoir blessé le receveur, quatre individus ont été appréhendés par les autorités.",
    "paragraphs": [
      "Une bande de dix individus a tenté d'attaquer le bureau d'octroi de la porte Champerret. Après avoir brisé les installations et blessé le receveur, quatre d'entre eux ont été arrêtés par les agents de police.",
      "Les malfaiteurs ont, par la suite, agressé les employés à la sortie, provoquant une vive émotion dans tout le quartier."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enfant écrasé par un tramway",
    "summary": "Le jeune Henri Lefèvre, âgé de sept ans, a été heurté par un tramway mécanique place de la Concorde. Grièvement blessé, l'enfant a été transporté d'urgence à l'hôpital des Enfants-Malades.",
    "paragraphs": [
      "Le jeune Henri Lefèvre, âgé de sept ans, a été heurté par un tramway mécanique place de la Concorde. Grièvement blessé, il a été transporté d'urgence à l'hôpital des Enfants-Malades."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Faits Divers",
    "title": "Blessé lors d'une rixe boulevard Sérurier",
    "summary": "Une violente rixe a éclaté boulevard Sérurier entre une vingtaine d'individus. Un passant, M. Louis Pierret, a été atteint par une balle de revolver ; deux repris de justice ont été appréhendés.",
    "paragraphs": [
      "Une rixe entre une vingtaine d'individus boulevard Sérurier a fait un blessé : le nommé Louis Pierret, atteint par une balle de revolver alors qu'il circulait sur la voie publique. Deux repris de justice ont été arrêtés par la police."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de meurtre à Belleville",
    "summary": "Mme Pauline Voisin, ouvrière, a été sauvagement agressée par deux inconnus à Belleville en tentant de s'interposer dans une dispute. Son état est jugé très grave par les médecins.",
    "paragraphs": [
      "Une ouvrière, Mme Pauline Voisin, a été sauvagement battue par deux inconnus alors qu'elle tentait d'intervenir dans une dispute. Elle a été transportée à l'hôpital dans un état jugé très grave."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame dans un commissariat",
    "summary": "À la suite d'une altercation dans une brasserie, le nommé Gustave Heidel a été conduit au commissariat. En proie au désespoir, l'homme a retourné un couteau contre lui. Ses jours ne sont plus en péril.",
    "paragraphs": [
      "Gustave Heidel, après une rixe survenue dans une brasserie, a été conduit devant le commissaire de police. En un moment de profond désespoir, il a soudainement tiré un couteau de sa poche et s'est porté un coup à la poitrine. Fort heureusement, ses jours ne sont plus en danger."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Social",
    "title": "Bulletin du travail : Grèves",
    "summary": "Mouvement social chez les tisserands Dollfus à Héricourt après le refus patronal. Par ailleurs, les diamantaires d'Anvers adoptent la journée de neuf heures, marquant un tournant notable dans leur organisation.",
    "paragraphs": [
      "À Héricourt, les ouvriers des tissages Dollfus ont cessé le travail, faisant grève après que la direction a refusé de recevoir leur délégation. Dans le même temps, à Anvers, les diamantaires ont voté en faveur de l'établissement de la journée de neuf heures, marquant une étape significative dans leur organisation syndicale."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes limitrophes",
    "summary": "Chroniques judiciaires et accidents dans la banlieue parisienne : drames à Levallois et Gennevilliers, cambriolages et vols signalés à Clichy, Maisons-Alfort, La Ville-du-Bois et Puteaux.",
    "paragraphs": [
      "À Levallois-Perret, un enfant est décédé tragiquement à la suite d'une chute accidentelle. À Gennevilliers, un charretier a été grièvement blessé sous les roues d'un attelage. Un cambriolage a été perpétré à Clichy, tandis qu'un vol a été constaté dans une gare à Maisons-Alfort. Enfin, un décès accidentel est signalé à La Ville-du-Bois, accompagné d'une tentative de suicide à Puteaux."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Courses",
    "title": "Résultats d'Auteuil",
    "summary": "La journée de la Toussaint à Auteuil a rencontré un vif succès populaire. Les épreuves furent disputées avec ardeur, notamment les prix Aston Blount et Francisco Martin, remportés respectivement par Vlau et Calabrais.",
    "paragraphs": [
      "La journée de la Toussaint, disputée à l'hippodrome d'Auteuil, a rencontré un succès populaire fort remarquable. Les épreuves hippiques ont suscité un intérêt soutenu du public, notamment le prix Aston Blount, remporté par le cheval Vlau, et le prix Francisco Martin, brillamment enlevé par le pensionnaire Calabrais."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Spectacles",
    "title": "Le spectacle à l'Hippodrome",
    "summary": "Le nouveau programme de l'Hippodrome, alliant ballet gracieux et luttes spectaculaires, confirme son succès. Mme Ferrero brille par sa grâce, sous la direction musicale de Justin Clérice.",
    "paragraphs": [
      "Les mouvements sont exécutés avec une admirable précision. Soudain, une vaste estrade surgit du milieu de la piste, portant tout un corps de ballet dont les variations et les ballabiles sont tout à fait réussis. Le succès a été très vif, surtout pour la première danseuse, Mme Ferrero, qui, malgré les proportions inusitées du cadre, a su faire chaleureusement acclamer sa grâce, sa souplesse, sa science et sa légèreté.",
      "La musique de M. Justin Clérice, agréable et élégante, accompagne à souhait ces danses et défilés ; elle est mise en valeur par l'excellent orchestre de M. Patusset.",
      "Le spectacle commence par une série d'attractions parmi lesquelles il convient de citer la famille Lécusson. Il se termine par le championnat du monde de luttes libres, pour lesquelles le public se passionne toujours. L'Hippodrome, dont le succès est désormais consacré, connaîtra encore longtemps, avec ce nouveau programme, les douceurs des salles combles."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Faits Divers",
    "title": "La Mévente des Vins dans la Gironde",
    "summary": "À Bordeaux, les viticulteurs girondins exigent une lutte rigoureuse contre la fraude et préconisent l'instauration d'une ration de vin journalière pour les troupes de l'armée.",
    "paragraphs": [
      "L'Association syndicale des viticulteurs-propriétaires de la Gironde a convoqué, lundi dernier, à Bordeaux, les grands propriétaires de la région ainsi que les membres du Parlement.",
      "Le président, M. de Castéja, a exposé les revendications des viticulteurs : appliquer rigoureusement les lois contre la fraude sur les vins, réformer les octrois et supprimer la détaxe des sucres employés au sucrage des vendanges.",
      "L'assemblée a voté à l'unanimité ces revendications et a adopté le vœu, dont le Petit Parisien a déjà pris l'initiative, tendant à faire distribuer aux soldats une ration journalière de vin."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Informations Municipales",
    "title": "Statistique de la ville de Paris",
    "summary": "Le rapport de la statistique municipale pour la 43e semaine dénombre 866 décès à Paris, marquant une prévalence persistante de la phtisie pulmonaire et des affections respiratoires.",
    "paragraphs": [
      "Le service de la statistique municipale a compté, pendant la 43e semaine, 866 décès, chiffre assez voisin de la moyenne ordinaire des semaines d'octobre.",
      "La fièvre typhoïde a causé 7 décès, la variole 9, la rougeole 2, la coqueluche 5 et la diphtérie 6. La diarrhée infantile a causé 33 décès chez les enfants de 0 à 1 an.",
      "Les maladies inflammatoires des organes de la respiration ont causé 86 décès, et la phtisie pulmonaire 195 décès. On a célébré à Paris 590 mariages et enregistré la naissance de 1 125 enfants vivants."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Nouvelles théâtrales",
    "summary": "L'Odéon programme une nouvelle comédie, tandis qu'un banquet est organisé pour le départ de Sarah Bernhardt et Coquelin pour l'Amérique. Le théâtre Cluny confirme l'engagement de M. Émile Rouvière.",
    "paragraphs": [
      "À l'Odéon, demain, à cinq heures, on donnera 'Le Paquet', comédie en un acte de M. Louis Legendre, précédée d'une causerie de M. Henry Fouquier.",
      "MM. Louis Holacher et Georges Grisier organisent un banquet en l'honneur de Mme Sarah Bernhardt et de M. Coquelin avant leur départ pour l'Amérique.",
      "Le directeur du théâtre Cluny a renouvelé l'engagement de M. Émile Rouvière, et le théâtre Romanoff de Saint-Pétersbourg a engagé plusieurs artistes français pour une série de représentations comprenant 'Les Petites Michu' et 'Véronique'."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Sports",
    "title": "L'Affaire de l'Union vélocipédique",
    "summary": "L'Union vélocipédique de France diligente une enquête rue des Bons-Enfants à l'encontre d'un chronométreur officiel, suspecté d'avoir favorisé le stayer hollandais Cordang lors d'une tentative de record.",
    "paragraphs": [
      "La vélocipédie connaît à nouveau une affaire : un chronométreur officiel avait été accusé d'avoir aidé le stayer hollandais Cordang à battre un record. L'Union vélocipédique de France, saisie de faits nouveaux, a ordonné une enquête rue des Bons-Enfants."
    ]
  },
  {
    "id": 50,
    "page": 4,
    "category": "Sports",
    "title": "Actualités du sport et des records",
    "summary": "Le calendrier sportif s'intensifie avec un match de rugby à Vincennes, les prouesses du stayer Baugé et l'annonce d'une grande excursion automobile à travers la France par le Moto-Club.",
    "paragraphs": [
      "Un nouveau match franco-anglais de football-rugby se disputera dimanche prochain à Vincennes entre le Racing-Club de France et le team de Hong Kong and Westminster F.C.",
      "Baugé, stayer véloce, a couvert en une heure 45 kilomètres 350 mètres derrière motocycle, s'approchant du record de Stinson.",
      "Le Moto-Club organise pour le printemps prochain une excursion-promenade automobile autour de la France."
    ]
  },
  {
    "id": 51,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le légionnaire et le capitaine",
    "summary": "Au terme de leur traversée, le capitaine de Courtial et le légionnaire Berthiot scellent une alliance empreinte de respect. Leurs retrouvailles prochaines à l'hôtel de France, rue Cadet, marquent le début d'une nouvelle ère.",
    "paragraphs": [
      "Le capitaine de Courtial et le légionnaire Berthiot, réunis sur le pont du navire, évoquent avec gravité leur passé douloureux et leur détermination commune à servir la France en tant que pionniers sur les terres d'Afrique.",
      "Les deux hommes, liés par un secret partagé et une sympathie respectueuse qui a su effacer leurs différends passés, se font la promesse solennelle de se retrouver bientôt à Paris.",
      "À l'approche des côtes de France, une vive émotion gagne les troupes. Le légionnaire confie alors au capitaine qu'il séjournera à l'hôtel de France, rue Cadet, confirmant ainsi les soupçons de Pierre de Courtial."
    ]
  }
];
