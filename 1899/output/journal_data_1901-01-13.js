// Date: 1901-01-13
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-01-13 (Version Restaurée, 65 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie maritime",
    "title": "Les dangers du transport des pêcheurs de Terre-Neuve",
    "summary": "Le recours systématique aux paquebots pour rapatrier les pêcheurs de Terre-Neuve pose de graves problèmes de sécurité. Un rapport appelle à une inspection urgente des navires, jugés inaptes à ce transport.",
    "paragraphs": [
      "Depuis un certain nombre d'années, une modification considérable s'est produite dans les habitudes des armateurs pratiquant la grande pêche sur le banc de Terre-Neuve. Au lieu de faire revenir en France, à la fin de la saison, les goélettes, on désarme maintenant ces bâtiments à Saint-Pierre-Miquelon, et on rapatrie leurs équipages sur des paquebots.",
      "Tout serait pour le mieux si les paquebots offraient les garanties de sécurité nécessaires. Il semble, d'après un rapport de M. Léon Berthaut, que ces conditions ne soient pas suffisantes. Ces vapeurs sont trop petits pour embarquer un tel nombre de matelots, et les moyens de sauvetage en cas de sinistre sont presque nuls.",
      "La disparition d'un navire-transport centraliserait la douleur parmi les familles de nos côtes. Il est urgent d'exiger l'examen d'une commission d'hygiène et des appareils de sauvetage en nombre suffisant."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Politique étrangère",
    "title": "La question du French Shore à Terre-Neuve",
    "summary": "Les tensions diplomatiques persistent sur le French Shore à Terre-Neuve. Les litiges autour des homarderies et du traité d'Utrecht appellent une résolution par voie de compensations avec le gouvernement britannique.",
    "paragraphs": [
      "La question des droits de pêche sur le French Shore est urgente. Si les Anglais ne nous disputent pas la pêche sur le banc lui-même, des difficultés naissent à propos de nos établissements à terre, en vertu du traité d'Utrecht de 1713.",
      "Les habitants de Terre-Neuve contestent la présence de nos homarderies, arguant que le homard n'est pas un poisson. Cette subtilité sert de prétexte à une agitation locale, menaçant même de rompre le lien avec la mère-patrie pour se donner aux États-Unis.",
      "Comme nos homarderies n'occupent que cinq cents hommes environ, la question peut se traiter diplomatiquement par des compensations. Il est à espérer que les chancelleries arriveront à s'entendre sur un échange, le gouvernement britannique étant demandeur d'un rachat."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Chronique politique",
    "title": "Travaux législatifs à la Chambre",
    "summary": "La Chambre des députés ouvre une session chargée, marquée par l'interpellation du ministre de la Marine et un débat parlementaire tendu sur le projet de loi relatif aux associations et l'ingérence papale.",
    "paragraphs": [
      "Au début de la séance, M. de Lanessan, ministre de la Marine, répondra à une question sur la pénurie des stocks dans la Méditerranée.",
      "La Chambre discutera ensuite l'interpellation de M. Sembat sur une ingérence étrangère dans les affaires intérieures de l'État, concernant une lettre du pape sur le projet de loi relatif aux associations.",
      "C'est M. Renault-Morlière qui ouvrira le débat pour combattre le projet du gouvernement. De nombreux orateurs se sont fait inscrire pour ce qui s'annonce comme une longue discussion générale."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Guerre au Transvaal",
    "title": "La situation militaire au Cap",
    "summary": "La situation militaire au Cap demeure inquiétante pour les Britanniques. Malgré la propagande officielle, les commandos boërs intensifient leurs attaques et le manque de vivres fragilise les garnisons.",
    "paragraphs": [
      "Les dépêches annonçant les succès de lord Kitchener passent sous silence les échecs, ce qui n'apaise pas les inquiétudes en Angleterre. La situation est critique, les commandos boërs harcelant sans relâche les forces britanniques.",
      "Dans la colonie du Cap, les Boërs ont attaqué plusieurs garnisons. Des renforts sont envoyés en toute hâte et des retranchements sont creusés près du Cap.",
      "À Maseru, les Anglais prétendent que plusieurs chefs boërs se sont séparés de De Wet. Pendant ce temps, les Anglais commencent à souffrir du manque de vivres selon certains témoignages."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Incendie et explosion à Bordeaux",
    "summary": "Un grave accident est survenu à l'imprimerie du Nouvelliste de Bordeaux : un incendie suivi d'une explosion de gaz a causé des blessures à plusieurs personnes et d'importants dégâts matériels.",
    "paragraphs": [
      "Un violent incendie s'est déclaré ce matin dans l'imprimerie du Nouvelliste de Bordeaux. Après l'intervention des pompiers, une explosion de gaz s'est produite alors que l'on ouvrait le compteur, causant des dégâts importants à l'immeuble.",
      "Plusieurs personnes présentes ont été blessées par les débris, dont M. de Moulins, administrateur du journal, et un passant. Le matériel et les locaux ont subi des dommages considérables."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Sauvetage héroïque à Charenton",
    "summary": "À Charenton, le jeune Léon Dubois, six ans, a été sauvé d'un puits par MM. Vaillant et Chevanat, dont le courage a été salué par le commissaire de police malgré la rupture d'une corde lors des opérations.",
    "paragraphs": [
      "Le jeune Léon Dubois, âgé de six ans, est tombé dans un puits alors qu'il jouait. Le petit garçon a pu se maintenir au-dessus de l'eau en agrippant une corde, mais celle-ci s'est rompue lors de la tentative de sauvetage.",
      "Deux hommes, MM. Vaillant et Chevanat, ont fait preuve d'un grand sang-froid en se faisant descendre dans le puits pour ramener l'enfant. Le commissaire de police a vivement félicité les deux sauveteurs pour leur bravoure."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Siège contre un casseur de pierres à Troyes",
    "summary": "Accusé de plusieurs vols, un casseur de pierres nommé Coquard s'est barricadé à Sainte-Savine. Il a accueilli les gendarmes à coups de fusil, provoquant un siège suivi par une foule nombreuse.",
    "paragraphs": [
      "Un individu nommé Coquard, casseur de pierres à Sainte-Savine, s'est barricadé chez lui après avoir été mis en cause dans plusieurs vols. Il a accueilli les gendarmes avec des tirs de fusil.",
      "Un véritable siège a été organisé autour de sa maison. La situation demeure tendue et une foule nombreuse suit les épisodes de cet affrontement avec les forces de l'ordre."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Actualités maritimes",
    "title": "Suites du naufrage de la Russie",
    "summary": "Le ministre de la Marine dépêche le contre-amiral Puech à Faraman pour secourir les naufragés du vapeur « La Russie ». Le renflouement de l'épave, jugée en bon état, est envisagé par la compagnie.",
    "paragraphs": [
      "Le ministre de la Marine a envoyé le contre-amiral Puech à Faraman pour féliciter les sauveteurs de « La Russie » et leur remettre des secours. La Société des transports maritimes indique que l'épave semble en bon état et que le renflouement sera tenté.",
      "L'amiral Besson a demandé aux compagnies de navigation des précisions techniques sur la navigation par temps de brume afin d'éviter de nouveaux sinistres."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Feuilleton",
    "title": "Marie-Madeleine",
    "summary": "À la recherche d'un emploi, Marie-Madeleine sollicite Clarisse, une placeuse. Cette dernière, après avoir testé ses capacités, lui propose un poste dans un bar des Champs-Élysées, au grand dam de la jeune fille.",
    "paragraphs": [
      "Marie-Madeleine se rend chez Clarisse, une placeuse, qui l'interroge sur son passé au couvent et chez la comtesse de Pleyber. Clarisse, une femme aux manières libres, cherche à trouver un emploi à la jeune fille.",
      "Après avoir testé ses capacités en écriture, Clarisse envisage de lui proposer une place dans un luxueux bar des Champs-Élysées, malgré les réticences de la jeune fille face à la nature du métier."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Maritime",
    "title": "Le naufrage de la Russie : procédures judiciaires",
    "summary": "Le rapport de mer concernant le naufrage du vapeur « La Russie » a été déposé à Marseille. Il conclut à un cas de force majeure dû au mauvais temps et à une confusion dans les signaux lumineux.",
    "paragraphs": [
      "Deux tribunaux pouvaient être considérés comme compétents : celui d'Arles, dans le ressort duquel avait eu lieu le sinistre maritime, et celui de Marseille, premier port où le commandant s'est arrêté en revenant de Faraman par Arles.",
      "Au commissariat de la marine, la première solution paraissait plus logique ce matin, mais après un examen attentif de la question et sur la demande du commandant qui désirait éviter les fatigues d'un nouveau voyage, on s'est rallié à la deuxième solution.",
      "Le rapport de mer a été déposé cet après-midi, à deux heures et demie, au greffe du tribunal de commerce de Marseille. Il sera affirmé sous serment, en présence de deux hommes d'équipage, lundi matin, à onze heures, devant un juge délégué.",
      "Le rapport est court et conclut à un naufrage dû exclusivement à un cas de force majeure, par suite du mauvais temps et de la confusion des feux de phare."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Témoignages",
    "title": "Le Télégraphe des Naufragés",
    "summary": "M. Garnier, rescapé du naufrage, souligne le rôle héroïque d'un marin torpilleur dont la maîtrise du télégraphe à bras fut cruciale pour appeler les secours malgré les défaillances du matériel de bord.",
    "paragraphs": [
      "Nous avons pu aborder hier, à son arrivée à la gare, un des passagers, M. Garnier, soldat au régiment de chasseurs d'Afrique, qui se prête de bonne grâce à une interview et nous donne les détails suivants, qui nous éclairent sur les responsabilités et les mesures à prendre pour assurer l'efficacité des secours maritimes.",
      "Aucun des matelots de l'équipage ne connaissait la manœuvre du télégraphe à bras. Fort heureusement, il se trouvait parmi les passagers un marin torpilleur très bien au courant de ce genre de signaux et aux services duquel il fallut avoir recours. Sans lui, nous n'aurions pu communiquer ni avec la côte, ni avec les bâtiments qui furent envoyés ensuite du côté de la haute mer.",
      "Ce brave marin s'offrit au commandant pour gagner seul la côte dans une embarcation, afin de porter une amarre ; on n'accepta pas son admirable dévouement, parce qu'il aurait couru à une mort certaine et parce que sa présence était indispensable au télégraphe.",
      "Un chauffeur, l'estomac vide, refusa de travailler et le commandant dut lui mettre le revolver sur le front. Il faut que je vous dise qu'il y avait à bord deux canons porte-amarres qui ne fonctionnaient pas. Il eût été possible, avec un de ces engins, d'envoyer un fil à terre."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Témoignages",
    "title": "Le retour des passagers à Marseille",
    "summary": "Épuisés par quatre jours de lutte contre la mort, les rescapés du paquebot échoué à Faraman sont arrivés à Paris. Traumatisés, ils aspirent désormais au repos auprès de leurs proches.",
    "paragraphs": [
      "Plusieurs des passagers du paquebot échoué à Faraman n'ont passé, en gare de Marseille, que peu de temps. Appelés à Paris par leurs affections ou des affaires pressantes, ils ont pris avant sept heures le train rapide.",
      "Hier matin, à dix heures, ces passagers sont arrivés à la gare de Lyon, où les attendait un de nos collaborateurs. Pour la plupart exténués, littéralement brisés par les terribles émotions et les fatigues sans nombre de leur lutte affreuse de cent quatre heures contre la plus horrible mort, ils ne songeaient qu'à une chose : rejoindre au plus vite leur famille, leurs amis.",
      "Sans force pour répondre à une question quelconque, l'un d'eux dit simplement : « Il me semble que je rentre dans la vie. Mon émotion est encore si intense que je me sens dénué de toute force. Je veux dormir et dormir bien longtemps ! C'est une terrible chose que la mort. Et je vous assure qu'il ne fait pas bon la regarder de près. Mais ne me demandez rien, aucun détail, je ne pourrais vous répondre. »"
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Témoignages",
    "title": "Impressions d'un soldat sur le naufrage",
    "summary": "Le soldat Marcel Garnier livre un récit poignant de l'échouement : de l'angoisse face au navire ballotté par les lames, au courage admirable des passagers retrouvant l'espoir après les conseils du commandant.",
    "paragraphs": [
      "M. Marcel Garnier, soldat au régiment de chasseurs d'Afrique, où il tenait garnison à Méchéria, nous fit part de ses impressions. « Le moment le plus terrible pour nous », raconta M. Marcel Garnier, « fut celui qui précéda de peu de minutes l'échouement du paquebot, quand son immense carcasse se mit à danser frénétiquement sur les lames, projetée irrégulièrement dans tous les sens, comme un fétu de paille. »",
      "Le commandant et l'équipage savaient l'échouement certain. Les passagers se croyaient alors perdus, sans rémission. On n'entendait point de sanglots, point de cris, mais seulement des murmures de conversations brèves, soutenues avec des voix qui semblaient partir du fond de l'âme.",
      "Cela ne dura pas une heure. Le commandant décrivit la situation exacte. Il y eut alors comme une résurrection. Les hommes cherchèrent à aider l'équipage, et les femmes, admirables de courage exalté, cessèrent de prier et de pleurer en cachette. Cinq minutes après les encouragements du commandant, j'en entendis une qui chantait à voix haute et claire une romance espagnole.",
      "La dernière nuit fut horrible. Il y eut des défaillances. Mme Colombani me supplia de lui prêter un revolver pour en finir. Il fallut lui persuader que la délivrance était proche. Cette délivrance se produisit le lendemain."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "La question des récompenses pour le sauvetage",
    "summary": "Le ministère de la Marine envoie le contre-amiral Puech à Marseille pour évaluer les récompenses à décerner aux courageux sauveteurs des naufragés de la Russie.",
    "paragraphs": [
      "À la suite d'une lettre qu'ils avaient adressée au ministre de la Marine, les députés des Bouches-du-Rhône ont reçu de M. de Lanessan une réponse assurant qu'il a envoyé le contre-amiral Puech, sous-chef de l'état-major général de la marine, avec mission de porter aux courageux sauveteurs de la Russie les secours d'urgence et d'évaluer les distinctions à décerner.",
      "Le vice-amiral de Beaumont, préfet maritime, a également demandé au contre-amiral Besson, commandant de la marine à Marseille, de faire dresser un rapport détaillé pour permettre la répartition des récompenses, notamment pour les guetteurs de Faraman."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "International",
    "title": "Hommage unanime de la presse étrangère",
    "summary": "La presse britannique salue massivement l'héroïsme des sauveteurs de Carro, malgré quelques notes isolées de gallophobie exprimées par le Globe.",
    "paragraphs": [
      "Tous les journaux anglais expriment leur vive admiration pour l'équipage de la Russie et pour les sauveteurs. Le Daily Telegraph s'écrie « Honneur aux braves ! », tandis que le Standard souligne que la bravoure des hommes de Carro est une belle page dont les Français ont toute raison d'être fiers.",
      "Le Times est le seul journal qui n'ait pas de commentaires. La seule note discordante est donnée par le Globe, dont la gallophobie n'a pu faire trêve, critiquant le comportement des passagers étrangers.",
      "En revanche, la Saint-James Gazette et la Westminster Gazette saluent le courage des passagers et le triomphe de la persistance dans l'héroïsme des bateliers de Carro."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Décisions du ministère de la Guerre",
    "summary": "Le ministère de la Guerre garantit le paiement des demi-journées en cas de maladie professionnelle dans les manufactures d'armes et précise les règles d'exemption militaire pour les élèves des grandes écoles.",
    "paragraphs": [
      "On a affiché dans les ateliers des manufactures d'armes un avis émanant du ministère de la Guerre, annonçant que la demi-journée sera payée à tout le personnel au cas de maladie contractée dans l'établissement.",
      "Le général André vient également d'adresser aux commandants de corps d'armée une circulaire mettant fin à certaines interprétations abusives concernant les dispenses de service militaire pour les élèves des grandes écoles, rappelant qu'elles ne peuvent être accordées que si les titres sont acquis avant la mise en route."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Revues de troupes à Amiens et Rouen",
    "summary": "Le général des Garets à Amiens et le général Gallimard à Rouen ont procédé à des revues solennelles des garnisons à l'occasion de la remise des décorations du mois de janvier.",
    "paragraphs": [
      "À l'occasion de la remise des décorations de janvier, une grande revue des troupes a été passée hier à Amiens par le général des Garets. D'autre part, à Rouen, le général Gallimard a passé également une revue de toutes les troupes de la garnison sur le Champ de Mars."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Informations de la flotte",
    "summary": "Le transport 'La Vienne' est dirigé sur Saint-Nazaire pour des travaux, tandis que le cuirassé 'Iéna' poursuit ses essais officiels au large de Brest après la réparation d'une avarie mineure.",
    "paragraphs": [
      "Le transport 'La Vienne' fera route non pour Cherbourg mais pour Saint-Nazaire pour récupérer les chaudières de l'Isère. Par ailleurs, des réservistes de l'inscription maritime arriveront à Cherbourg pour accomplir une période d'exercices.",
      "À Brest, le 'Iéna' a commencé ses essais officiels. Après une avarie mineure sur la machine tribord, les essais ont repris et ont été jugés satisfaisants."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Divers crimes et accidents",
    "summary": "L'actualité est marquée par une série de drames : une agression violente à Seneffe, une erreur judiciaire en Belgique, un accident du travail mortel et un drame de braconnage près de Termonde.",
    "paragraphs": [
      "À Seneffe, un encaisseur nommé Oscar Meunier a été attaqué par deux individus et dévalisé, laissé presque sans vie.",
      "En Belgique, on signale une erreur judiciaire concernant M. Van Turnhout, condamné à tort pour un meurtre à Ymaiden.",
      "Un jeune garçon de quinze ans, Léon Déliasse, a été écrasé par une pièce de machine dans les ateliers Marchienne-Couillet.",
      "Un accident mortel a eu lieu à Routers : un écolier nommé Alphonse Derneyre est décédé après avoir heurté un arbre alors qu'il glissait sur la glace.",
      "Un terrible drame de braconnage s'est déroulé près de Termonde, causant la mort d'un braconnier après un échange de coups de feu avec des gardes-chasse."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "International",
    "title": "Situation en Chine",
    "summary": "Tandis que la Chine semble prête à accepter les conditions préliminaires, le prince Tchoun justifie le soulèvement des Boxeurs comme une réaction patriotique légitime contre les traités imposés.",
    "paragraphs": [
      "Bien que les intentions de la cour impériale restent incertaines, il y a tout lieu de supposer que la Chine acceptera les conditions préliminaires des puissances.",
      "Le ministre de la Marine a reçu une dépêche du général Voyron indiquant qu'aucune troupe n'est en mouvement et que l'état sanitaire est satisfaisant malgré le froid intense.",
      "Le prince Tchoun déclare à Pékin que le mouvement des Boxeurs est purement national et qu'il est naturel qu'un peuple, aussi pacifique soit-il, se rebiffe contre les traités imposés."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Social",
    "title": "Banquet de la Ligue des Prévoyants de l'Avenir",
    "summary": "La Ligue des Prévoyants de l'Avenir a réuni hier soir parlementaires et journalistes lors d'un banquet. Le président Congy a salué le rôle essentiel de la presse dans la promotion de ses œuvres sociales.",
    "paragraphs": [
      "La Ligue de défense des Prévoyants de l'Avenir offrait hier soir un banquet somptueux réunissant un grand nombre de membres du Parlement ainsi que les représentants de la presse parisienne.",
      "M. Congy, président de la ligue, a pris la parole pour rappeler avec vigueur les nobles objectifs de l'organisation. Il a tenu à adresser ses remerciements appuyés aux journalistes pour leur concours précieux dans l'éclairage indispensable de l'opinion publique sur les œuvres sociales de la Ligue."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Judiciaire",
    "title": "Affaires devant les tribunaux",
    "summary": "Le Conseil d'État rejette la requête du commandant Walsin-Esterhazy concernant sa mise en réforme. Parallèlement, la cour d'assises frappe fort avec des condamnations sévères, dont la perpétuité pour parricide.",
    "paragraphs": [
      "Le Conseil d'État a examiné la requête du commandant Walsin-Esterhazy dirigée contre le décret qui prononçait sa mise en réforme. M. le commissaire du gouvernement a conclu au rejet de cette requête. La décision sera rendue vendredi prochain.",
      "Devant la cour d'assises, le nommé Dumaine a été déclaré coupable du meurtre de son beau-père, acte commis dans le dessein de se soustraire au paiement d'une pension alimentaire.",
      "Émile Lepère, accusé d'avoir volontairement attenté aux jours de sa mère pour en hâter l'héritage, a été reconnu coupable et condamné à la peine des travaux forcés à perpétuité."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Politique",
    "title": "Conférence internationale de Douvres sur le courrier",
    "summary": "Face aux irrégularités du transit postal transmanche, le ministère du Commerce mandate une commission internationale à Douvres pour garantir la régularité du courrier entre Londres et Paris.",
    "paragraphs": [
      "Le sous-secrétaire d'État a assisté, à Douvres et à Calais, aux opérations de chargement et de déchargement du courrier anglais. Il a constaté personnellement l'insuffisance des moyens employés et, dès son retour à Paris, il a soumis à l'approbation de M. Millerand, ministre du Commerce, de l'Industrie, des Postes et des Télégraphes, la nomination de MM. Sartiaux, Jacotey et Joyeux comme membres de la conférence internationale qui se tiendra incessamment à Douvres.",
      "Cette conférence aura pour but de rechercher les moyens par lesquels pourrait être assurée une régularité permanente dans la distribution du courrier de Londres, ainsi que l'ont demandé instamment au ministre des Postes diverses délégations du commerce parisien."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Social",
    "title": "Renouvellement du comité de la Société des artistes français",
    "summary": "Le scrutin pour le renouvellement du comité de la Société des artistes français se tiendra le mardi 13 courant à l'hôtel des Agriculteurs de France, rue d'Athènes, selon des horaires spécifiques par section.",
    "paragraphs": [
      "Le vote pour le renouvellement du comité de la Société des artistes français aura lieu mardi prochain, 13 courant, à l'hôtel des Agriculteurs de France, rue d'Athènes.",
      "Pour les sections de peinture et de sculpture, le scrutin sera ouvert de neuf heures du matin à quatre heures. Pour les sections d'architecture, de gravure et de lithographie, il se tiendra de midi à quatre heures. Le dépouillement du scrutin s'effectuera le jour même."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Politique",
    "title": "Visites ministérielles aux écoles professionnelles",
    "summary": "M. Millerand, ministre du Commerce, poursuit ses visites dans les écoles professionnelles parisiennes, manifestant un intérêt soutenu pour l'enseignement technique et le corps enseignant lors de ses inspections.",
    "paragraphs": [
      "M. Millerand, ministre du Commerce, accompagné de M. Bousquet, directeur de l'enseignement technique au ministère, a poursuivi hier sa série de visites dans les écoles professionnelles.",
      "Il s'est rendu d'abord à l'école Diderot, où il a été reçu par MM. Bédorez, directeur de l'enseignement de la Seine, Leroux, inspecteur, et Legros, directeur de l'école.",
      "M. Millerand a visité ensuite l'école professionnelle de jeunes filles de la rue Bouret, où il a été accueilli par la directrice, Mme Carle. Dans ces deux établissements, le ministre a tenu à s'adresser personnellement au corps enseignant et aux élèves, qui lui ont témoigné leur sympathie."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Sciences et Agriculture",
    "title": "Nouveau système de canon paragrêle",
    "summary": "Un inventeur italien a perfectionné le canon à acétylène pour protéger les cultures. Ce dispositif automatique, plébiscité au congrès de Padoue, offre une puissance de déploiement supérieure aux modèles précédents.",
    "paragraphs": [
      "Nous avons relaté à maintes reprises les expériences concluantes effectuées en France, en Autriche et plus particulièrement en Italie, concernant l'usage des canons paragrêles pour la protection des récoltes. Un inventeur italien vient de présenter un nouveau système à acétylène que le congrès international de Padoue a officiellement reconnu comme supérieur aux engins existants.",
      "Le canon se compose essentiellement d'un cône métallique. Grâce à un dispositif de manœuvre électrique, l'appareil assure une charge et une mise à feu automatiques. Selon l'inventeur, ce mécanisme développe une force neuf fois supérieure, garantissant une efficacité accrue contre les épisodes de grêle."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "International",
    "title": "La fête du bi-centenaire du royaume de Prusse",
    "summary": "À l'occasion du bicentenaire du royaume de Prusse, la cour de Berlin célèbrera l'événement par le Fackeltanz, une cérémonie singulière où le chancelier et ses ministres exécuteront une danse rituelle aux flambeaux.",
    "paragraphs": [
      "Dans le cadre des festivités du bicentenaire du royaume de Prusse, une cérémonie extraordinaire se tiendra à la cour de Berlin : la traditionnelle danse aux flambeaux, ou Fackeltanz, à laquelle prendront part le chancelier et les douze ministres prussiens.",
      "Le chancelier, comte de Bülow, accompagné de ses ministres, exécutera devant leurs Majestés l'Empereur et l'Impératrice cette historique et singulière Fackeltanz, qui exige des dignitaires la réalisation de pirouettes, de pas de danse pointés, ainsi que de solennelles inclinaisons et génuflexions."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mystérieux assassinat à Siradan",
    "summary": "Le corps d'un maçon de trente-trois ans, le nommé Roda, a été découvert sauvagement assassiné à Siradan. Le parquet et la gendarmerie de Lourdes ont ouvert une enquête suite à la découverte de neuf blessures.",
    "paragraphs": [
      "Un crime atroce a été commis la nuit dernière à Siradan. Le nommé Roda, maçon âgé de trente-trois ans, a été retrouvé gisant dans une mare de sang. Malgré les soins immédiats qui lui furent prodigués, le malheureux a rapidement expiré.",
      "La gendarmerie de Lourdes, saisie par le parquet, a relevé neuf blessures profondes à la tête, occasionnées par une arme blanche. L'enquête se poursuit activement afin d'identifier l'auteur de ce criminel attentat."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Singulière mésaventure du remorqueur Va-et-Vient",
    "summary": "Le remorqueur Va-et-Vient, transportant des officiels revenant d'expériences de tir à Gâvres, a été immobilisé par un brouillard dense. Après une nuit d'angoisse au large de Lorient, l'équipage est sauf.",
    "paragraphs": [
      "Le directeur des constructions navales ainsi que plusieurs officiers assistaient à des essais de tir à Gâvres. Le remorqueur Va-et-Vient, chargé de les ramener à Lorient, a été surpris par une brume intense et a dû, par mesure de sécurité, mouiller au large.",
      "Après une nuit d'inquiétude, le navire est parvenu à regagner le port sain et sauf ce matin, ses passagers ayant dû faire preuve de patience, privés de nourriture depuis vingt-quatre heures."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enquête sur l'homme coupé en morceaux",
    "summary": "Le commissaire de police d'Aubervilliers explore une nouvelle piste dans l'affaire de l'homme dépecé, supposant qu'il pourrait s'agir d'Auguste Berger, un jeune sellier disparu depuis le mois de mars.",
    "paragraphs": [
      "Une piste nouvelle concernant l'identité de l'homme découvert coupé en morceaux a été ouverte par le commissaire de police d'Aubervilliers. Le signalement correspondrait à celui d'un jeune ouvrier sellier nommé Auguste Berger, dont la disparition est signalée depuis mars dernier.",
      "Malgré les recherches infructueuses menées jusqu'ici par les autorités et le frère du disparu pour retrouver la trace de ce jeune homme de dix-neuf ans, l'espoir d'une identification formelle subsiste."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "La vengeance d'une mère",
    "summary": "M. Boucard, juge d'instruction, a interrogé Eugénie Lanciaux. La jeune femme, qui a mortellement blessé son amant Émile Laurent, a justifié son acte par l'amertume causée par son abandon et le mariage de celui-ci.",
    "paragraphs": [
      "M. Boucard, juge d'instruction, a procédé hier à l'interrogatoire de Mlle Eugénie Lanciaux, auteure du meurtre de son amant, le sieur Émile Laurent. La jeune fille a expliqué son geste tragique par l'amertume profonde ressentie après avoir appris, au mois de novembre dernier, que son amant avait contracté mariage avec une autre femme."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Nouvelles poursuites contre Émile Lévy dit Milo",
    "summary": "Condamné à mort pour l'assassinat de la rue de Malte, Émile Lévy, dit Milo, est impliqué dans une nouvelle affaire de vol avec violence suite aux déclarations d'un codétenu, qu'il nie formellement.",
    "paragraphs": [
      "Émile Lévy, dit Milo, déjà condamné à la peine capitale pour l'assassinat perpétré rue de Malte, fait l'objet de nouvelles poursuites judiciaires. Un détenu, nommé Martin, a formellement affirmé avoir agi à l'instigation de Milo lors d'un vol commis avec violence.",
      "Une confrontation a été organisée entre les deux hommes. Malgré les accusations portées contre lui, le prévenu a maintenu ses déclarations initiales et nie toute implication dans ce nouveau forfait."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie rue Bouthreau",
    "summary": "Un incendie a ravagé un appartement rue Bouthreau. Mme Rosenz, surprise par les flammes, a fait preuve d'un courage remarquable en s'échappant par la fenêtre à l'aide d'une corde, alertant ainsi les secours.",
    "paragraphs": [
      "Un incendie s'est déclaré hier matin dans un appartement situé rue Bouthreau. Mme Rosenz, surprise par la violence des flammes dans son logement, a fait preuve d'un sang-froid extraordinaire en réussissant à s'échapper par une fenêtre au moyen d'une corde jusqu'à la rue.",
      "Avertis promptement, les sapeurs-pompiers ont pu intervenir rapidement pour circonscrire le foyer et éviter la propagation du sinistre aux appartements voisins."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie dans une boulangerie",
    "summary": "Une boulangerie du boulevard Voltaire, exploitée par M. Poilet, a été victime d'un incendie hier. Grâce à l'intervention prompte des pompiers de la rue de Chaligny, le feu a été maîtrisé en trois quarts d'heure.",
    "paragraphs": [
      "Le feu s'est déclaré hier au sein d'une boulangerie sise boulevard Voltaire, tenue par M. Poilet. Les sapeurs-pompiers de la rue de Chaligny, dépêchés sur les lieux, ont réussi à maîtriser le sinistre en l'espace de trois quarts d'heure, limitant ainsi les dégâts matériels."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame à l'impasse Montferrat",
    "summary": "Un tragique accident domestique a coûté la vie à la couturière Joséphine Lemarrois, impasse Montferrat. La chute d'une lampe à essence a provoqué un incendie mortel dans son modeste logement.",
    "paragraphs": [
      "Un incendie, causé par la chute accidentelle d'une lampe à essence, s'est déclaré hier dans le modeste logement de Mme Joséphine Lemarrois, couturière, situé impasse Montferrat.",
      "Lorsque les voisins, alertés par les cris, sont enfin parvenus à porter secours, l'infortunée avait déjà succombé à ses blessures. Son corps fut retrouvé atrocement carbonisé au milieu des décombres."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie rue de la Roquette",
    "summary": "Un violent incendie s'est déclaré hier soir dans les ateliers de M. Dubois, fabricant de couronnes mortuaires. L'intervention prompte des pompiers a permis de circonscrire le sinistre et de protéger les entrepôts voisins.",
    "paragraphs": [
      "Le feu a pris avec une grande intensité hier soir dans les ateliers de M. Dubois, fabricant de couronnes mortuaires, situés rue de la Roquette. L'alarme fut vive parmi les habitants du quartier en raison de la proximité immédiate d'un vaste entrepôt de fourrages.",
      "Les sapeurs-pompiers, arrivés promptement sur les lieux, ont dû procéder à l'évacuation des chevaux et des charrettes stationnés à proximité. Grâce à leur action énergique, ils sont parvenus à limiter l'étendue du sinistre, dont les dégâts sont estimés à environ dix mille francs."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Voleur surpris boulevard Magenta",
    "summary": "Trois individus ont été surpris en flagrant délit de vol dans une épicerie du boulevard Magenta. La poursuite s'est engagée immédiatement, permettant l'arrestation de l'un des malfaiteurs, désormais écroué au dépôt.",
    "paragraphs": [
      "Trois individus ont été surpris hier, en flagrant délit de vol, à l'intérieur d'une épicerie sise boulevard Magenta. Aussitôt repérés, ils ont pris la fuite, poursuivis par le commerçant et des passants.",
      "L'un d'eux a pu être arrêté par les agents de la force publique. Une perquisition effectuée sur sa personne a permis de découvrir divers objets dérobés, preuves irréfutables de nombreux larcins commis récemment. Le malfaiteur a été immédiatement conduit au dépôt."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits Divers",
    "title": "Rixe sanglante rue Curiol",
    "summary": "Une violente altercation dans un débit de vins de la rue Curiol a envoyé un homme à l'hôpital. Paul Laplace, roué de coups par quatre agresseurs, est dans un état préoccupant. Les autorités recherchent les coupables.",
    "paragraphs": [
      "Une violente rixe a éclaté au sein d'un débit de vins de la rue Curiol, opposant quatre individus dont les mobiles restent encore obscurs. Le nommé Paul Laplace, violemment pris à partie, a été roué de coups par ses agresseurs qui ont pris la fuite peu après.",
      "La victime, grièvement blessée, a dû être transportée d'urgence à l'hôpital Saint-Louis afin d'y recevoir les soins nécessaires. La police a ouvert une enquête et recherche activement les responsables de cette agression."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Faits Divers",
    "title": "Meurtre à Ménilmontant",
    "summary": "À la suite d'une discussion envenimée par l'ivresse, le journalier Louis Charrier a poignardé son camarade François Goujat. La victime, grièvement blessée au sein droit, a été admise à l'hôpital Tenon.",
    "paragraphs": [
      "Une discussion s'est muée en tragédie entre deux journaliers, Louis Charrier et François Goujat, à Ménilmontant. Sous l'emprise manifeste de l'ivresse, Charrier a tiré un couteau et en a frappé son adversaire au sein droit.",
      "La victime, grièvement blessée, a été immédiatement transportée à l'hôpital Tenon où les médecins réservent leur pronostic. Le coupable, quant à lui, a été appréhendé par les autorités et mis à disposition de la police pour les suites de l'instruction."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Faits Divers",
    "title": "Sauvage agression boulevard Ney",
    "summary": "M. Daniel Parny a été sauvagement agressé par deux individus sans mobile de vol. Le malheureux, sérieusement blessé à la tête après avoir été roué de coups, a été transporté d'urgence à l'hôpital Tenon.",
    "paragraphs": [
      "M. Daniel Parny a été victime d'une agression sauvage par deux individus qui l'ont abordé sous le fallacieux prétexte d'une allumette. Frappé brutalement à la tête, le malheureux a été roué de coups par ses assaillants, qui ont fui sans tenter de le voler.",
      "Secouru par des passants alertés par ses cris, il a été admis en urgence à l'hôpital Tenon, où il demeure sous surveillance médicale étroite en raison de la gravité de ses blessures."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide au Dépôt",
    "summary": "Le nommé Léopold Arbenger, écroué au Dépôt pour outrage aux mœurs, a été découvert sans vie dans sa cellule. Il avait mis fin à ses jours en utilisant les lambeaux de sa chemise comme corde de potence.",
    "paragraphs": [
      "Le nommé Léopold Arbenger, arrêté pour outrage aux mœurs et incarcéré au Dépôt, a été découvert sans vie dans sa cellule. Il avait mis fin à ses jours en découpant sa chemise en lanières, qu'il utilisa pour se pendre aux barreaux de la fenêtre."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Faits Divers",
    "title": "Faux contrôleurs de la Régie",
    "summary": "Une série d'escroqueries sévit chez les marchands de vins parisiens. Des individus, usurpant la qualité d'agents de la Régie, extorquent des fonds sous le couvert de prétendues irrégularités administratives.",
    "paragraphs": [
      "Une série d'escroqueries audacieuses sévit actuellement chez les marchands de vins parisiens. Des individus, usurpant la qualité d'agents de la Régie, pénètrent dans les débits de boissons et extorquent des fonds sous couvert de prétendues irrégularités.",
      "L'alerte a été donnée par les commerçants eux-mêmes, lassés de ces pratiques. Une cinquantaine de plaintes ont été déposées au commissariat central en l'espace de huit jours seulement."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation mouvementée rue Bargne",
    "summary": "Deux malfaiteurs ont été interpellés rue Bargne après une lutte acharnée contre les agents de la paix qu'ils avaient tentés d'abattre lors d'un vol de matériel télégraphique.",
    "paragraphs": [
      "Deux individus ont été surpris en flagrant délit alors qu'ils dérobaient des pièces de cuivre sur les lignes télégraphiques. Sommés de s'arrêter, les malfrats ouvrirent le feu sur les gardiens de la paix.",
      "Après une lutte acharnée et une résistance désespérée, les nommés Pierre Bénard et Jules Doiret furent finalement maîtrisés et conduits au poste, où ils attendent désormais d'être déférés au parquet."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Social",
    "title": "Bulletin du travail : Les Trade-Unions anglaises",
    "summary": "Le ministère du Commerce de Londres atteste de la puissance des Trade-Unions britanniques, qui totalisent plus de 1,6 million d'adhérents, bénéficiant d'une législation sociale bien plus ancienne que la nôtre.",
    "paragraphs": [
      "Le ministère du Commerce de Londres vient de publier des statistiques édifiantes sur les associations ouvrières anglaises. En cette année 1900, les syndicats, ou Trade-Unions, comptent plus de 1,6 million de membres cotisants.",
      "Le développement syndical est nettement plus vigoureux outre-Manche qu'en France, profitant d'une législation sur la liberté syndicale et le droit d'association vieille de quarante ans, là où nos propres institutions peinent encore à s'organiser."
    ]
  },
  {
    "id": 45,
    "page": 3,
    "category": "Social",
    "title": "Chômage aux forges de Tamaris",
    "summary": "Une crise économique frappe les forges de Tamaris. La fermeture des ateliers, qui prive deux mille ouvriers de leur gagne-pain, entraîne des répercussions désastreuses sur le commerce local.",
    "paragraphs": [
      "La compagnie des forges de Tamaris traverse une période de marasme économique sans précédent. L'usine, qui occupe traditionnellement environ deux mille ouvriers, a été contrainte de fermer ses ateliers et ses fourneaux.",
      "Cette mise au chômage forcé de la masse ouvrière provoque une répercussion immédiate sur le commerce local, dont la survie dépend quasi exclusivement du salaire des forgerons."
    ]
  },
  {
    "id": 46,
    "page": 3,
    "category": "Faits Divers",
    "title": "Découverte d'ossements à Alfortville",
    "summary": "Des ossements humains, dont un crâne perforé, ont été exhumés lors de travaux sur les bords de la Marne. Ces vestiges pourraient être liés aux combats acharnés de la défense de Paris en 1870.",
    "paragraphs": [
      "Des ouvriers, occupés au forage de puits sur les bords de la Marne, ont fait une macabre découverte : plusieurs ossements humains, parmi lesquels un crâne portant les traces nettes d'une perforation par un projectile. Tout laisse supposer qu'il s'agit là de vestiges tragiques des combats livrés lors de la défense de Paris, en 1870."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Politique Coloniale",
    "title": "La controverse sur l'industrie coloniale",
    "summary": "L'idée de restreindre l'essor industriel de nos colonies au profit de la métropole soulève de vives critiques, risquant de ruiner nos entreprises outre-mer face à la concurrence croissante des nations asiatiques.",
    "paragraphs": [
      "L'initiative récente, soulevant un vif émoi dans les milieux coloniaux, concerne l'avenir de l'industrie dans nos possessions d'outre-mer. Certains esprits proposent, non pas de soutenir ces entreprises là où elles ont pris racine, mais de les entraver, voire de les ruiner, sous prétexte qu'elles nuiraient à l'industrie métropolitaine.",
      "La question est complexe. Si l'on souhaite que nos colonies fournissent les matières premières nécessaires et consomment les produits manufacturés de la métropole, faut-il pour autant leur interdire tout développement industriel, au risque de les transformer en adversaires ou de provoquer des soulèvements, comme l'histoire de l'Espagne et de l'Angleterre l'a amplement démontré ?",
      "Il apparaît dès lors contradictoire d'encourager les Français à risquer leurs capitaux et leur existence dans les colonies pour leur enjoindre ensuite de cesser tout progrès. Les productions spéciales ne sauraient être exclusives, et refuser aux colonies la culture des céréales ou la transformation de leurs biens constitue une véritable anomalie.",
      "L'industrie coloniale est devenue inévitable face à l'essor des nations asiatiques comme l'Inde, le Japon et la Chine. Il serait préférable que nos colonies deviennent des partenaires industriels plutôt que de laisser les marchés d'Extrême-Orient être conquis par nos rivaux. Il conviendrait plutôt de supprimer les droits d'entrée sur les machines indispensables à leur essor.",
      "Le faible taux d'émigration actuelle vers nos territoires coloniaux démontre l'urgence d'une politique plus encourageante, plutôt que le maintien de mesures restrictives qui ne font que décourager les entrepreneurs et les capitalistes."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Faits Divers",
    "title": "Drame à Saint-Cloud",
    "summary": "Le corps d'un sexagénaire, Louis Blin, a été découvert sans vie dans un grenier près du chemin de Suresnes. Le médecin a conclu à un décès provoqué par le froid intense.",
    "paragraphs": [
      "Un vieillard, Louis Blin, âgé de soixante et un ans, qui avait cherché refuge pour la nuit dans un grenier situé chemin de Suresnes, a été trouvé mort hier matin, étendu sur la paille. Le docteur Astruc, requis sur les lieux, a constaté que le décès était dû à une congestion mortelle provoquée par le froid."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident à Suresnes",
    "summary": "Un grave accident est survenu quai de Puteaux : un charretier a été broyé par les roues de son propre attelage. Il a été transporté à l'hôpital Laënnec dans un état critique.",
    "paragraphs": [
      "Un charretier, Alfred Bouhier, âgé de cinquante-sept ans, circulait hier matin quai de Puteaux lorsqu'il est tombé sous les roues de son attelage. Il a eu la cuisse et le bras droits broyés par le passage de la charge ; il a été transporté d'urgence à l'hôpital Laënnec, où son état est jugé grave."
    ]
  },
  {
    "id": 50,
    "page": 4,
    "category": "Faits Divers",
    "title": "Suicide à Levallois-Perret",
    "summary": "Une jeune modiste de vingt-cinq ans, Mlle Joséphine Deilleuret, s'est donné la mort d'un coup de feu. Ce drame fait suite à un conflit familial concernant son projet de mariage.",
    "paragraphs": [
      "Mlle Joséphine Deilleuret, modiste âgée de vingt-cinq ans, s'est suicidée hier en se tirant un coup de pistolet dans la tempe. Ce geste désespéré faisait suite aux vifs reproches de ses parents, qui s'opposaient formellement à son intention d'épouser un homme beaucoup plus jeune qu'elle. La mort a été instantanée."
    ]
  },
  {
    "id": 51,
    "page": 4,
    "category": "Faits Divers",
    "title": "Noyade à Gennevilliers",
    "summary": "Un ouvrier charron, Jules Gastaldt, âgé de trente-neuf ans, a trouvé la mort par noyade dans la Seine à proximité du pont d'Épinay, égaré par l'épais brouillard.",
    "paragraphs": [
      "Un ouvrier charron, nommé Jules Gastaldt, âgé de trente-neuf ans, est tombé dans la Seine, à proximité du pont d'Épinay, alors qu'il était trompé par l'épais brouillard régnant sur le fleuve. Malgré les recherches aussitôt entreprises, son corps n'a pu être retrouvé."
    ]
  },
  {
    "id": 52,
    "page": 4,
    "category": "Faits Divers",
    "title": "Asphyxie à Colombes",
    "summary": "Un tragique accident domestique est survenu à Colombes : le gardien Louis-Baptiste Poulain, âgé de soixante-cinq ans, est décédé asphyxié pour avoir négligé de fermer la clé de son poêle.",
    "paragraphs": [
      "Le nommé Louis-Baptiste Poulain, âgé de soixante-cinq ans et exerçant la profession de gardien, a été découvert sans vie dans son logement. Il a succombé à une asphyxie provoquée par les émanations de son poêle, dont il avait omis de fermer la clef avant de s'endormir."
    ]
  },
  {
    "id": 53,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident à Nanterre",
    "summary": "Une fillette de quatre ans, prénommée Madeleine Just, est dans un état désespéré après une chute accidentelle d'une fenêtre du deuxième étage à Nanterre.",
    "paragraphs": [
      "À Nanterre, une petite fillette de quatre ans, prénommée Madeleine Just, a fait une chute effroyable d'une fenêtre située au deuxième étage de son domicile. Relevée sans connaissance, elle a été transportée d'urgence dans un état jugé extrêmement grave."
    ]
  },
  {
    "id": 54,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident mortel à Épinay",
    "summary": "M. Charles Auguenot, camionneur, a péri tragiquement à la gare d'Épinay, écrasé par son propre véhicule après que son cheval, épouvanté par un train, s'est emballé.",
    "paragraphs": [
      "Un accident mortel s'est produit aux abords de la gare d'Épinay. M. Charles Auguenot, exerçant la profession de camionneur, a été tué par son propre véhicule. Son cheval, subitement effrayé par le passage d'un train, s'est emballé et a causé le renversement funeste de l'attelage."
    ]
  },
  {
    "id": 55,
    "page": 4,
    "category": "Faits Divers",
    "title": "Suicide à Cormeilles-en-Parisis",
    "summary": "À Cormeilles-en-Parisis, Mme Louis Bernay, soixante ans, a été découverte morte asphyxiée par les émanations de charbon de bois lors d'un accès de dérangement cérébral.",
    "paragraphs": [
      "Une habitante de Cormeilles-en-Parisis, Mme Louis Bernay, âgée de soixante ans, a été trouvée morte à son domicile, asphyxiée par des émanations de charbon de bois. Il semble qu'elle ait volontairement mis fin à ses jours lors d'un accès de dérangement cérébral."
    ]
  },
  {
    "id": 56,
    "page": 4,
    "category": "Faits Divers",
    "title": "Vol à Neuilly-sur-Marne",
    "summary": "M. Barré, marchand de légumes, a été victime d'un vol audacieux. Alors qu'il procédait à une livraison, son attelage a disparu, dérobé sans surveillance devant un débit de vins.",
    "paragraphs": [
      "M. Barré, marchand de légumes, a été victime du vol de son attelage. L'homme, ayant laissé son véhicule sans aucune surveillance devant un débit de vins lors d'une livraison, a constaté à son retour la disparition de son bien."
    ]
  },
  {
    "id": 57,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident mortel à Charenton",
    "summary": "Un tragique accident s'est produit sur le pont de Charenton. Paul Celerier, ouvrier mécanicien, a été mortellement heurté par le train rapide n° 922 alors qu'il était en service.",
    "paragraphs": [
      "Un grave accident a eu lieu sur le pont de Charenton. Le nommé Paul Celerier, ouvrier mécanicien, a été heurté et tué instantanément par le rapide n° 922 alors qu'il travaillait sur la voie ferrée."
    ]
  },
  {
    "id": 58,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident à Choisy-le-Roi",
    "summary": "Alors qu'il accomplissait les douloureuses formalités pour l'inhumation de son enfant, M. Piquet, journalier, a fait une chute grave sur le trottoir et s'est fracturé la jambe droite.",
    "paragraphs": [
      "M. Piquet, journalier, a été victime d'un accident malheureux. Alors qu'il effectuait les tristes démarches nécessaires à l'inhumation de son enfant, il a glissé sur le trottoir, se fracturant la jambe droite."
    ]
  },
  {
    "id": 59,
    "page": 4,
    "category": "Faits Divers",
    "title": "Distinction à Bagneux",
    "summary": "En témoignage de sa bravoure lors de l'arrestation périlleuse de deux malfaiteurs, le maire de Bagneux a remis à l'agent Aubry une récompense de cinquante francs.",
    "paragraphs": [
      "Le maire de Bagneux a tenu à honorer la conduite courageuse de l'agent Aubry. En reconnaissance de la bravoure dont il a fait preuve lors de la capture de deux malfaiteurs, une gratification de cinquante francs lui a été remise officiellement."
    ]
  },
  {
    "id": 60,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident domestique à Dourdan",
    "summary": "Un terrible drame domestique est survenu à Dourdan. Mme Clemenceau, une veuve âgée de soixante-dix-neuf ans, a trouvé la mort après une chute accidentelle dans son foyer.",
    "paragraphs": [
      "Un bien triste drame a frappé la commune de Dourdan. Mme Clemenceau, veuve âgée de soixante-dix-neuf ans, est décédée carbonisée, victime d'une chute malencontreuse dans le foyer de sa cheminée."
    ]
  },
  {
    "id": 61,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident mortel à Corbeil",
    "summary": "À Corbeil, le brigadier poseur Trouvet a trouvé la mort après avoir été violemment heurté par un train de marchandises alors qu'il manœuvrait les barrières d'un passage à niveau.",
    "paragraphs": [
      "Le brigadier poseur Trouvet a succombé à ses blessures après avoir été heurté par un train de marchandises, alors qu'il fermait les barrières d'un passage à niveau."
    ]
  },
  {
    "id": 62,
    "page": 4,
    "category": "Faits Divers",
    "title": "Incident maritime à Aldborough",
    "summary": "Le trois-mâts russe Nympha s'est échoué au large d'Aldborough ; en dépit de la situation périlleuse, le capitaine a refusé avec véhémence le concours du bateau de sauvetage anglais.",
    "paragraphs": [
      "Le trois-mâts russe Nympha s'est échoué au large. Le capitaine russe a refusé avec véhémence l'aide du bateau de sauvetage anglais."
    ]
  },
  {
    "id": 63,
    "page": 4,
    "category": "Sports",
    "title": "L'aéronautique à Paris",
    "summary": "L'engouement actuel pour la locomotion aérienne, porté par les récents concours de ballons, pousse l'Aéro-Club à organiser une grande compétition internationale à la galerie des Machines.",
    "paragraphs": [
      "Les concours de ballons ont remis à l'ordre du jour la locomotion aérienne. L'Aéro-Club annonce un grand concours international pour l'automne prochain dans la galerie des Machines."
    ]
  },
  {
    "id": 64,
    "page": 4,
    "category": "Faits Divers",
    "title": "Déserteur repenti",
    "summary": "Le nommé Grognet, soldat déserteur du 37e régiment d'artillerie, a mis fin à sa cavale en regagnant volontairement son corps à Bourges.",
    "paragraphs": [
      "Grognet, déserteur du 37e d'artillerie, a rejoint son corps à Bourges."
    ]
  },
  {
    "id": 65,
    "page": 4,
    "category": "Automobilisme",
    "title": "Inauguration de route à Madagascar",
    "summary": "Une percée technologique a été réalisée à Madagascar où une automobile à six places a inauguré la route de l'Est, reliant Tananarive à la mer en un temps record de quatorze heures et trente minutes.",
    "paragraphs": [
      "Une automobile à six places a inauguré la route Est, reliant Tananarive à la mer en quatorze heures trente."
    ]
  }
];
