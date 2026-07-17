// Date: 1900-06-05
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-06-05 (Version Restaurée, 32 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Littérature",
    "title": "Annonce du nouveau roman de Georges Maldague",
    "summary": "Dès jeudi prochain, Le Petit Parisien publiera \"La Main Gauche\", une œuvre dramatique inédite et poignante signée Georges Maldague, auteur de nombreux romans à succès.",
    "paragraphs": [
      "Après-demain jeudi, Le Petit Parisien publiera 'La Main Gauche', grand roman inédit par Georges Maldague. C'est une œuvre émouvante que l'auteur vient d'écrire tout spécialement pour les lecteurs du journal.",
      "L'auteur de 'La Boscotte', 'La Parigotte', 'Monsieur René', 'La Dot fatale' et de tant d'autres œuvres, n'a jamais écrit un roman plus vécu et plus dramatique."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Armée",
    "title": "Les Alpins",
    "summary": "Analyse de la militarisation méthodique de la zone alpine, où les troupes françaises maintiennent une vigilance constante face aux forces italiennes dans un contexte de paix armée.",
    "paragraphs": [
      "Les petits canons de montagne, si pittoresquement exhibés au quai d'Orsay, dans le Palais des armées de terre et de mer, ont un peu l'air de jouets d'enfants à côté de leurs lourds congénères de la défense des côtes et des longs canons de marine qui émergent des tourelles d'acier.",
      "N'est-ce pas une des singularités de cette époque qu'en pleine paix, dans la région la plus inaccessible d'Europe, deux armées, l'une italienne, l'autre française, soient ainsi maintenues sur le pied de guerre ?",
      "La militarisation méthodique de toute la zone alpine se poursuit sans relâche. La situation paraît grave à nos officiers qui s'efforcent de parer à l'infériorité notoire de nos moyens de défense.",
      "Aujourd'hui, presque toute notre frontière du sud-est est couverte par ces troupes dont l'endurance et la belle tenue sont connues de tout le monde.",
      "La création de ce corps par la Troisième République devait avoir, pour les régions nouvelles où se sont cantonnés nos soldats, les conséquences sociales les plus heureuses."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Tours de Notre-Dame - L'Évasion",
    "summary": "La femme du geôlier, déterminée à libérer Michel, élabore un plan audacieux pour neutraliser son mari et le brigadier Bernard lors de leur soirée de jeu habituelle.",
    "paragraphs": [
      "Avant de venir vous trouver, j'ai servi tous les repas. Les prisonnières ne sont fermées au verrou que jusqu'à la dernière ronde de Sylvestre.",
      "Le brigadier de gendarmerie, Bernard, vient quelquefois le soir faire sa partie de piquet avec Sylvestre. Je crois que ce soir il sera là; si oui, tant pis pour lui, il avalera la drogue avec mon mari.",
      "La femme du geôlier se dirigea vers la prison, le cœur battant, pour préparer l'évasion de Michel avec l'aide d'une corde cachée dans un pain."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "Les élections italiennes",
    "summary": "Les élections législatives italiennes marquent un revers pour le cabinet Pelloux, reflétant une montée des clivages régionaux après la répression de l'insurrection de Milan en 1898.",
    "paragraphs": [
      "Les élections italiennes, comme il était permis de s'y attendre, ont été un échec pour le cabinet Pelloux et pour le principe dynastique.",
      "Le régionalisme, la division de l'Italie en sections géographiques de contours très nets, vient de se marquer avec un relief nouveau.",
      "L'élection du 3 juin a donc un sens très net; elle constitue une réponse à la politique de répression implacable qui a suivi l'insurrection républicaine de Milan en 1898."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Les événements de Chine",
    "summary": "En Chine, la situation demeure critique. Face à la passivité des autorités, des détachements russes interviennent pour secourir les résidents européens menacés par les Boxers.",
    "paragraphs": [
      "Les assassinats de résidents européens continuent aux environs de Pékin, sous les yeux des autorités chinoises qui laissent faire.",
      "Les Russes viennent d'envoyer un détachement de Cosaques au secours des Français et des Belges assiégés par les Boxers à Pao-Ting-Fou.",
      "La foule a rempli les rues de Pékin. Il est clair que la présence de troupes étrangères produit déjà son effet."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Abordage en Seine",
    "summary": "Une collision fluviale sans gravité est survenue hier soir près du pont Alexandre III entre deux bateaux parisiens. Aucune victime n'est à déplorer ; l'enquête de police est en cours.",
    "paragraphs": [
      "Alors que la fête de nuit battait hier son plein à l'Exposition, les Parisiens apprenaient qu'une collision venait de se produire en Seine, près du pont Alexandre III.",
      "Le bateau parisien n° 11, heurté par le bateau n° 16, de la même compagnie, avait en effet sombré à cet endroit, mais fort heureusement on n'a eu à enregistrer aucun accident de personnes.",
      "L'enquête ouverte par M. Brougniard, commissaire de police, n'est pas encore terminée."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "À l'Exposition : La grotte d'Ang-Kor-Thom",
    "summary": "Le public s'est pressé en nombre au Trocadéro pour admirer la restitution remarquable des grottes khmères, réalisée sous la direction de l'architecte M. Marcel pour représenter l'art et la culture du Cambodge ancien.",
    "paragraphs": [
      "Tout ce que Paris compte de curieux et de touristes étrangers ou nationaux s'est porté, durant la journée de dimanche, vers l'Exposition universelle.",
      "Au Trocadéro, sous le dôme même du palais des Dieux du Cambodge, se trouve une restitution des grottes qui, dans le pays khmer, servaient autrefois de retraite aux brahmes artistes et lettrés.",
      "Cette restitution, due à M. Marcel, architecte diplômé du gouvernement, est une œuvre absolument remarquable."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "La colonie japonaise et l'ouverture du pavillon",
    "summary": "Après une inauguration restreinte, le pavillon japonais est désormais pleinement ouvert au public, dévoilant ses riches collections d'ivoires, d'armes et d'objets d'art impériaux.",
    "paragraphs": [
      "La cérémonie d'inauguration du pavillon japonais eut lieu dans une salle d'honneur décorée avec goût par les exposants. Cependant, l'accès au hall supérieur fut initialement restreint, les collections impériales promises par l'intendant du palais de Tokyo n'étant pas encore arrivées.",
      "Hier, les joyaux, ivoires, tentures et armes ont enfin été installés. Le commissaire général, M. Hayashi, a annoncé l'ouverture définitive du pavillon. De nombreuses notabilités artistiques et mondaines, ainsi que le corps diplomatique, sont attendus pour visiter ces richesses.",
      "Dès demain, les visiteurs munis d'une lettre de demande d'entrée pourront également accéder au pavillon."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Arrivée de caravanes ouvrières",
    "summary": "L'Exposition a accueilli hier deux nouvelles caravanes ouvrières venues d'Elbeuf et d'Anzin, témoignant de l'intérêt marqué des classes travailleuses pour cet événement national.",
    "paragraphs": [
      "Deux nouvelles caravanes ouvrières ont visité l'Exposition hier. Organisées par l'initiative patronale, ces visites complètent les efforts corporatifs.",
      "La première caravane, composée de trois cents ouvriers d'une manufacture d'Elbeuf, a été guidée dans la matinée. La seconde, comptant cent mineurs d'Anzin en costume local, a parcouru l'enceinte dans l'après-midi.",
      "Le public présent a réservé un accueil chaleureux à ces visiteurs."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Les Congrès internationaux",
    "summary": "Le palais de l'Horticulture a été le théâtre de réceptions et de travaux académiques, marquant l'ouverture des congrès sur les valeurs mobilières et la sylviculture sous l'égide de personnalités influentes.",
    "paragraphs": [
      "Le palais de l'Horticulture a accueilli une brillante réception hier soir pour les membres du congrès des Valeurs mobilières. Présidé par MM. Paul et Cochery, l'événement a été marqué par des allocutions de bienvenue et des toasts, agrémenté par une musique militaire.",
      "Par ailleurs, le congrès de sylviculture a tenu sa séance d'ouverture sous la présidence de M. Daubrée, directeur des eaux et forêts."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "La Fête de Nuit",
    "summary": "La fête de nuit de l'Exposition Universelle a ébloui les visiteurs par ses illuminations électriques et ses jeux d'eau féeriques au Château-d'Eau, malgré quelques réserves sur la finesse des jets.",
    "paragraphs": [
      "La fête de nuit d'hier a été une réussite éclatante, marquée par une illumination féerique, électrique et à l'acétylène, déployée sur les façades de l'ensemble des palais.",
      "Le clou du spectacle réside dans la magie des cascades et des jets lumineux du Château-d'Eau. Malgré quelques critiques portant sur la finesse des jets d'eau, le spectacle nocturne, avec ses mutations de couleurs saisissantes, demeure un éblouissement total pour les visiteurs."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Affluence record aux entrées",
    "summary": "Une affluence historique a été constatée à l'Exposition Universelle, le seuil des 600 000 entrées ayant été franchi. Grâce à une organisation rigoureuse, aucun accident n'est à déplorer malgré la foule.",
    "paragraphs": [
      "La fréquentation de dimanche a dépassé toutes les prévisions avec un chiffre d'entrées historique, bien que les données définitives d'hier semblent encore supérieures. On estime que le seuil symbolique des 600 000 entrées a été franchi.",
      "Malgré cette affluence considérable, aucun accident grave n'est à déplorer, grâce à la rigueur de l'organisation et à la vigilance constante du service de police."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Vendetta à Propriano",
    "summary": "Un drame sanglant a frappé Propriano : Dominique Tramoni a assassiné Laure Cinquini et grièvement blessé son fils, un crime vraisemblablement lié à une affaire judiciaire ancienne.",
    "paragraphs": [
      "Un drame sanglant s'est déroulé aux abords de Propriano. Dominique Tramoni, charretier et parent de l'instituteur Tramoni, a fait feu sur Laure Cinquini, la tuant sur le coup, et a gravement blessé son fils Paul.",
      "Le meurtrier a été immédiatement arrêté. Ce crime semble constituer l'épilogue tragique d'une affaire judiciaire ancienne, dans laquelle la famille Cinquini avait été appelée à témoigner."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Sports",
    "title": "Fête fédérale de gymnastique à Vincennes",
    "summary": "Plus de vingt mille spectateurs ont assisté à la fête fédérale de gymnastique à Vincennes. Le Président Loubet a honoré l'événement, saluant avec ferveur l'ardeur patriotique de la jeunesse française.",
    "paragraphs": [
      "La seconde journée de la fête fédérale de gymnastique, organisée au vélodrome municipal de Vincennes, a attiré plus de vingt mille spectateurs venus admirer les prouesses des athlètes.",
      "La matinée fut consacrée aux épreuves du grand championnat. À l'Hôtel de Ville, les gymnastes ont été reçus par M. Grébauval avant d'entamer un défilé triomphal à travers les rues de Paris.",
      "Le Président de la République, M. Loubet, a honoré de sa présence la manifestation, prononçant un discours patriotique vibrant, saluant l'engagement exemplaire de la jeunesse française."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Situation en Afrique du Sud",
    "summary": "En Afrique du Sud, la guérilla boer s'intensifie. Le président Krüger a quitté Pretoria, tandis que le général Botha poursuit une résistance acharnée contre les troupes anglaises.",
    "paragraphs": [
      "La guerre de guérilla s'intensifie, les commandos boers tirant habilement profit du terrain pour harceler les troupes anglaises. Un combat sanglant a eu lieu à huit milles au sud de Pretoria.",
      "Le président Krüger a quitté Pretoria pour Lyddenburg, laissant la capitale dans une atmosphère de désordre et de pillages. Le général Botha continue de diriger la résistance avec détermination, malgré les difficultés croissantes de la campagne."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "International",
    "title": "Nouvelles d'Abyssinie",
    "summary": "M. Lagarde, ministre de France, a quitté Addis-Abeba pour l'Exposition universelle. Dans l'Ogaden, l'agitation des rebelles contraint l'empereur Ménélik à préparer une expédition.",
    "paragraphs": [
      "Le ministre de France, M. Lagarde, a quitté Addis-Abeba afin de se rendre à l'Exposition universelle en compagnie de plusieurs dignitaires éthiopiens.",
      "Des tensions persistent dans la région de l'Ogaden où des bandes de rebelles se concentrent, ce qui contraint l'empereur Ménélik à préparer une nouvelle expédition militaire."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Marine",
    "title": "Manœuvres de la flotte japonaise",
    "summary": "La flotte japonaise a effectué d'importantes manœuvres navales. En trente ans, le Japon a accompli des progrès considérables dans sa modernisation maritime.",
    "paragraphs": [
      "La flotte japonaise a procédé à des manœuvres navales d'envergure à la fin d'avril, mobilisant cinquante bâtiments modernes. Ces exercices témoignent de la grande habileté acquise par les marins japonais en seulement trente ans de modernisation maritime."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Société",
    "title": "L'éducation des princes",
    "summary": "Une réflexion sur l'apprentissage des métiers manuels par les souverains, une tradition destinée à leur faire mieux appréhender les réalités quotidiennes de leurs sujets.",
    "paragraphs": [
      "Une réflexion sur l'apprentissage des métiers manuels par les membres des familles royales. De l'imprimerie pour le kronprinz d'Allemagne à la menuiserie ou à l'agronomie pour d'autres souverains, la tradition veut que les princes s'initient à des professions techniques pour mieux comprendre la condition de leurs sujets."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Chronique",
    "title": "Des rois aux multiples métiers",
    "summary": "Évocation des monarques artisans, de Louis XIII, roi bricoleur, aux souverains contemporains. Une tradition de travail manuel qui semble aujourd'hui s'être perdue.",
    "paragraphs": [
      "Le prince de Galles et le roi Humbert, en s'appliquant dès leur jeunesse à la confection de chaussures, n'ont fait qu'imiter Louis XIII qui excellait à fabriquer des canons de cuir et des bottes à chaudron.",
      "Louis XIII s'entendait encore à fabriquer des lacets, à travailler le fer, à réparer ses arquebuses et à frapper des monnaies. Il cultivait aussi un jardin et confectionnait ses propres confitures.",
      "Louis XIII, tour à tour cuisinier, cordonnier et barbier, fut peut-être le vrai roi de la poule au pot. L'histoire rapporte que Napoléon Ier essaya un jour de faire une omelette, mais la laissa tomber au feu.",
      "L'Europe ne connaît plus aujourd'hui de roi cuisinier ni de roi serrurier, bien que le titre de roi d'Yvetot ait été popularisé par Bélanger."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Social",
    "title": "Grève à Chalon-sur-Saône et obsèques de Louis Brouillard",
    "summary": "Les obsèques du jeune ouvrier Louis Brouillard, à Chalon-sur-Saône, se sont déroulées dans le calme, tandis que les autorités appellent à l'apaisement dans les conflits sociaux.",
    "paragraphs": [
      "Chalon-sur-Saône, 4 juin. Malgré l'appréhension de nouveaux troubles, on espère que les ouvriers se rendront aux avis de calme que ne cessent de leur prodiguer les préfets et M. Gillot.",
      "Les obsèques de Louis Brouillard, apprenti tourneur à l'usine Finette, ont eu lieu cet après-midi, à trois heures, au milieu d'un grand concours de population. Elles se sont heureusement terminées sans incident.",
      "Le cercueil disparaissait sous les couronnes des syndicats creusotins et des habitants de Saint-Cosme. Le convoi était suivi par des délégués de Montceau-les-Mines et la famille du défunt."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Inauguration",
    "title": "Inauguration de la statue de Rochambeau à Vendôme",
    "summary": "La ville de Vendôme a solennellement inauguré la statue du comte de Rochambeau. Cette cérémonie, marquée par la présence de l'ambassadeur Horace Porter, a célébré les liens historiques entre la France et les États-Unis.",
    "paragraphs": [
      "Vendôme, 4 juin. Un comité s'est formé pour ériger un monument à la gloire du comte de Rochambeau ; Français et Américains y ont souscrit avec un vif empressement.",
      "Cette après-midi a eu lieu, dans sa ville natale de Vendôme, l'inauguration de la statue du comte de Rochambeau. De nombreux officiels étaient présents, au rang desquels l'ambassadeur des États-Unis, M. Horace Porter.",
      "M. Le Myre de Vilers a retracé avec éloquence la carrière du comte, tandis que M. Horace Porter a exprimé les sentiments d'amitié profonde liant la France aux États-Unis."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Société",
    "title": "Séance annuelle de la Société protectrice des animaux",
    "summary": "La Société protectrice des animaux a tenu sa séance annuelle à la Sorbonne. Le rapport des travaux a été présenté, et de nombreuses distinctions ont été remises pour souligner le dévouement envers la cause animale.",
    "paragraphs": [
      "La Société protectrice des animaux tenait hier après-midi, dans le grand amphithéâtre de la Sorbonne, sa séance annuelle sous la présidence de M. A. Uhrich.",
      "M. Coutaud a donné lecture de son rapport sur l'ensemble des travaux effectués durant l'année. M. Eddy Lévis, délégué de la Société de Bruxelles, a souligné avec force les services rendus à l'humanité par la Société de Paris.",
      "Le palmarès a été solennellement proclamé, récompensant des hommes de lettres, des militaires et des agents de police pour leur sollicitude exemplaire envers les animaux."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Réception à l'Élysée et actualités diverses",
    "summary": "Le Président de la République a multiplié les audiences officielles. L'actualité est également marquée par le décès du sénateur Voiland et les rapports alarmants sur la famine sévissant actuellement aux Indes.",
    "paragraphs": [
      "M. le Président de la République a reçu hier matin diverses personnalités, dont le général de Witte et le maire de Rouen.",
      "À onze heures, M. Loubet a reçu M. Grébauval et le bureau du Conseil municipal pour discuter des relations cordiales entretenues entre la Présidence et la Ville de Paris.",
      "Le sénateur Voiland est décédé hier matin. Par ailleurs, M. Mougeot a présidé la distribution des récompenses de la Société républicaine des conférences populaires.",
      "Les journaux américains publient le rapport du docteur Kloptsch sur la famine et la peste sévissant aux Indes, soulignant la situation catastrophique dans la présidence de Bombay."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits divers",
    "title": "Double asphyxie accidentelle rue du Maine",
    "summary": "Un drame domestique a frappé la rue du Maine. Une fuite de gaz a causé l'asphyxie d'un couple ; si l'épouse a pu être sauvée, son mari, Théophile Lebault, a succombé à la suite d'une rupture de tuyauterie.",
    "paragraphs": [
      "M. Baissac, commissaire de police, a procédé aux constatations d'usage concernant une double asphyxie survenue rue du Maine. Les époux Lebault ont été trouvés inanimés dans leur lit suite à une fuite de gaz.",
      "Si la femme a pu être ranimée, son mari, Théophile Lebault, âgé de trente ans, est décédé. L'accident a été provoqué par la rupture d'un tuyau en caoutchouc défectueux relié à un fourneau à gaz."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits divers",
    "title": "Tentatives de meurtre et accidents",
    "summary": "Une série d'incidents violents et accidentels a marqué la journée parisienne, incluant des agressions à l'arme blanche, un accident mortel de bicyclette et une frayeur causée par un cheval de fiacre.",
    "paragraphs": [
      "Rue Polonceau, Pierre Birant a grièvement blessé deux employés de commerce à l'aide d'une barre de fer. Le coupable a été aussitôt arrêté par les forces de l'ordre.",
      "Rue Philippe-de-Girard, Céline Mojean a poignardé Pierre Gazel à la suite d'une violente dispute passionnelle.",
      "L'ouvrier Jules Trenot est décédé accidentellement en chutant de bicyclette quai de Billy. Un autre incident a impliqué Mme Lépine, dont le cheval s'est cabré violemment à la suite d'un choc avec un tramway."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Cyclisme",
    "title": "Course de deux jours au vélodrome",
    "summary": "La course de deux jours au vélodrome a sacré Baugé vainqueur. Il a dominé les épreuves de fond face à ses concurrents, dont Hourhours, en réalisant des performances remarquables sur les distances de 40 à 50 kilomètres.",
    "paragraphs": [
      "La course de deux jours, disputée au vélodrome, a rendu son verdict. Les résultats par épreuves incluent : les 40 kilomètres en 38 minutes 20 secondes par Baugé, les 45 kilomètres en 48 minutes 25 secondes par Baugé, et les 50 kilomètres en 58 minutes 42 secondes par Hourhours.",
      "Baugé, brillant vainqueur la veille et l'avant-veille, est déclaré triomphateur de cette épreuve de fond de deux jours."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Sport",
    "title": "Course Paris-Amiens",
    "summary": "La classique cycliste Paris-Amiens a vu la victoire de Chaperon chez les bicyclettes en six heures. Dans la catégorie des tandems, l'équipe Magny-Romain s'est imposée en cinq heures.",
    "paragraphs": [
      "La course sur route Paris-Amiens a donné les résultats suivants : pour les bicyclettes, Chaperon arrive en 6 heures, suivi de Lorgeon, Guillot, Barbary, de Xavier-Carvalho, Chariot, Courteitte, Fourcnottes et Groussot.",
      "Pour les tandems, Magny-Romain l'emporte en 5 heures, suivis de Nicolas-Sorriaux, C. et R. Rugel, Rogier-Thomas et Renaudin-Guérin."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Marchés",
    "title": "Marché de la Villette",
    "summary": "La séance au marché de la Villette a été marquée par une baisse des cours pour les bœufs de second choix. Les transactions restent laborieuses pour l'ensemble des catégories de bestiaux.",
    "paragraphs": [
      "Cours des bestiaux à la Villette : la vente est difficile pour les bœufs, accusant une baisse de 10 francs par tête sur les sortes secondaires.",
      "Les prix des veaux, moutons et porcs sont également notés avec des indications sur les cours des différentes provenances, notamment normandes, choletaises, vendéennes, de Brie et de Beauce, témoignant d'une tendance globale à la stagnation."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Feuilleton",
    "title": "Mariage Secret",
    "summary": "Une méprise du secrétaire du docteur Lecoutellier entraîne le commandant de Queyrel dans un rendez-vous mystérieux à l'hôtel d'Aspremont, au sujet des agissements de son fils, Ludovic.",
    "paragraphs": [
      "Quatrième partie, XVI. Lorsque le docteur Lecoutellier eut quitté le secrétaire, il lui demanda d'envoyer Césaire Honorât à l'hôtel d'Aspremont.",
      "Le secrétaire, distrait par ses calculs, confondit le visiteur attendu avec le commandant de Queyrel. Il le dirigea donc vers l'hôtel d'Aspremont pour y retrouver le docteur, créant ainsi un quiproquo significatif sur la nature de ce rendez-vous secret.",
      "Le commandant, troublé mais pensant agir sur ordre, se rend à l'adresse indiquée, alors que le docteur cherche en réalité à protéger l'honneur du nom du militaire face aux agissements de son fils, Ludovic."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "M. Gailhard prévoit de monter les œuvres de Wagner à l'Opéra. Par ailleurs, Sarah Bernhardt loue son théâtre à Jean de Reszké pour une série de représentations lyriques durant sa tournée aux États-Unis.",
    "paragraphs": [
      "M. Gailhard a conclu un accord avec les héritiers de Richard Wagner pour monter 'Siegfried' et 'Le Crépuscule des dieux' au cours des prochaines années.",
      "Mme Sarah Bernhardt a loué son théâtre à M. Jean de Reszké pour une série de représentations lyriques wagnériennes pendant sa tournée américaine. Les conditions financières de cette convention, incluant un minimum garanti de 5 000 francs par représentation pour la célèbre actrice, ont été arrêtées.",
      "M. Antoine publie le programme de la saison 1900-1901, qui comportera une vingtaine d'œuvres inédites."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Concerts et divertissements",
    "title": "Soirée parisienne au théâtre Marigny",
    "summary": "Le théâtre Marigny s'illustre par une programmation éclectique mêlant tableaux vivants d'après les maîtres, attractions internationales et la revue inédite « Un Siècle de Grâce ».",
    "paragraphs": [
      "Le théâtre Marigny propose un spectacle d'art composé de tableaux vivants reproduisant des chefs-d'œuvre de peintres et sculpteurs, tels que Mercié, Millet et Rude, présentés par la troupe de M. Marcel.",
      "Le programme inclut également des attractions variées telles que Nelson Downs et la revue « Un Siècle de Grâce », ainsi que de nouvelles artistes comme Dagmar Hansen et l'athlète équilibriste Spadoni."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Agriculture",
    "title": "Sommaire de l'Agriculture Nouvelle",
    "summary": "Le journal « L'Agriculture Nouvelle » décline son sommaire, abordant les enjeux du capital, les spécificités du sarrasin, la culture du tabac et des conseils pratiques en horticulture et législation rurale.",
    "paragraphs": [
      "Le journal « L'Agriculture Nouvelle » présente son sommaire incluant des articles sur le « Capital et Travail », le « Sarrasin ou blé noir », et une étude illustrée sur la culture du tabac.",
      "La partie horticole traite du Crambe et du cresson de fontaine, tandis que des rubriques spécialisées abordent les questions de législation rurale et les concours bovins."
    ]
  }
];
