// Date: 1900-09-02
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-09-02 (Version Restaurée, 31 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Science et Santé",
    "title": "Les progrès de l'hygiène",
    "summary": "L'évolution de l'hygiène publique a permis un recul des grandes épidémies et une hausse de l'espérance de vie, bien que la tuberculose et la salubrité urbaine restent des défis majeurs en cette fin de siècle.",
    "paragraphs": [
      "Une des questions qui devront le plus préoccuper la diplomatie, une fois les affaires de Chine réglées, est celle des mesures à prendre pour isoler les nombreux foyers de peste qui existent en Mandchourie et dans le golfe du Petchili, et qui constituent un danger permanent pour l'Europe.",
      "Sans doute l'hygiène a beaucoup fait pour la prophylaxie de ce fléau, l'un des plus terribles qui soient et dont les victimes, au milieu du XVIIe siècle, étaient évaluées déjà à 77 millions. Elle n'a pas été moins heureuse dans sa lutte contre tant d'autres fléaux populaires qui ravagèrent au Moyen Âge le monde civilisé, comme la lèpre, la suette et l'épilepsie.",
      "Les léproseries sont en nette diminution, tout comme les effets de la suette qui ne sont plus que des curiosités physiologiques. D'autres fléaux comme le choléra ont également vu leur mortalité diminuer drastiquement entre 1832 et 1884, prouvant l'efficacité des mesures hygiéniques.",
      "La durée de la vie moyenne, qui était de vingt-huit ans et neuf mois avant 1789, de trente-quatre ans et onze mois en 1836, de trente-huit ans et dix mois en 1865, dépasse aujourd'hui quarante ans. Elle s'est donc accrue de plus du tiers en un siècle.",
      "L'hygiène des villes, à travers l'élargissement des voies et l'assainissement des logements, joue un rôle primordial. Cependant, des problèmes subsistent, notamment la tuberculose, propagée par l'habitude de cracher à terre, et le danger des étalages alimentaires exposés aux poussières et microbes des rues."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Roman",
    "title": "Autour d'un berceau",
    "summary": "Appelé en urgence pour un accouchement, le docteur Henri Lipray assiste la sage-femme et découvre avec émotion, auprès d'une mère évanouie, un nouveau-né marqué par une infirmité physique.",
    "paragraphs": [
      "Le docteur Henri Lipray, sollicité par sa concierge, est tiraillé par l'angoisse et la culpabilité à l'idée d'intervenir dans un accouchement difficile. Malgré ses hésitations intérieures, son dévouement le pousse à monter aider la sage-femme.",
      "Arrivé dans la mansarde, il constate que la mère a perdu connaissance après l'accouchement. L'enfant, bien que vivant, semble présenter des séquelles physiques, une jambe tordue, que le médecin espère pouvoir réparer."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Naufrage d'un torpilleur",
    "summary": "Le torpilleur de haute mer Bouët-Willaumez s'est perdu sur la roche Gauthier dans la brume. Grâce à une opération de sauvetage efficace, l'intégralité de l'équipage a pu être secourue par le torpilleur 108.",
    "paragraphs": [
      "Le torpilleur de haute mer Bouët-Willaumez a touché, par brume épaisse, sur la roche Gauthier, plateau de Barnouic. Une voie d'eau s'est déclarée, entraînant la perte du navire, bien que l'équipage ait été intégralement sauvé par le torpilleur 108.",
      "Le navire, lancé en 1898, était commandé par le lieutenant de vaisseau Maurillon. Des remorqueurs ont été dépêchés sur place dans l'espoir de renflouer l'épave."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Arrivées et nouvelles d'outre-mer",
    "summary": "Chroniques maritimes : l'explorateur Foureau est attendu à bord du paquebot Marne, tandis que le capitaine Roulet revient de la mission Marchand. On déplore par ailleurs le décès du lieutenant de vaisseau de Rodat.",
    "paragraphs": [
      "On attend l'arrivée du paquebot Marne amenant l'explorateur Foureau. Le capitaine Roulet, de retour de la mission Marchand et du Bahr-el-Ghazal, est également arrivé à Marseille.",
      "Par ailleurs, le lieutenant de vaisseau de Rodat est décédé de la fièvre jaune à Dakar."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Meurtrier lynché à Bruxelles",
    "summary": "À Bruxelles, un employé congédié tente d'abattre son ancien patron. Son magasinier est tué dans l'agression. La foule, saisie de fureur, a lynché le coupable, désormais hospitalisé dans un état désespéré.",
    "paragraphs": [
      "Un nommé Valère Degraeve, congédié par son patron M. Charlet, a tenté de l'assassiner en pleine rue Royale à Bruxelles à l'aide d'un revolver. M. Charlet a été manqué, mais son magasinier Danneels a été mortellement blessé.",
      "La foule, témoin de la scène, s'est jetée sur le meurtrier et l'a lynché avant l'intervention de la police. Le coupable et la victime ont été transportés à l'hôpital dans un état très grave."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Nouvel accident de tramway",
    "summary": "Sur le boulevard de Sébastopol, un tramway à traction mécanique a percuté un véhicule, occasionnant plusieurs blessés dont M. Jean Petit, hospitalisé à Saint-Louis. Le conducteur invoque un défaut de freinage.",
    "paragraphs": [
      "Un tramway à traction mécanique a tamponné, hier, un véhicule sur le boulevard de Sébastopol. Plusieurs passagers ont été blessés, au nombre desquels M. Jean Petit, qui a dû être transporté à l'hôpital Saint-Louis. Le mécanicien, interrogé, a invoqué une défaillance subite de son système de freinage."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Politique",
    "title": "Le budget de la Marine",
    "summary": "Le budget de la Marine pour 1901 atteint 329 millions de francs. Cet effort financier, destiné à la flotte et aux effectifs, privilégie la construction de nouveaux cuirassés et sous-marins pour la défense.",
    "paragraphs": [
      "Le budget de la Marine pour 1901 s'élève à 329 millions de francs, marquant une augmentation significative justifiée par le programme de réfection de la flotte. Cette hausse des crédits est principalement portée par le développement du matériel naval et l'accroissement des effectifs.",
      "Les priorités demeurent la constitution des escadres et la mise en chantier de nouveaux bâtiments, notamment des cuirassés et des sous-marins. L'effort se concentre sur les services militaires afin de garantir la pleine sécurité de la défense nationale."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Social",
    "title": "La grève des mariniers de la Seine",
    "summary": "Les mariniers de la Basse-Seine sont en grève pour obtenir la suppression de la marche de nuit. La Compagnie de la Seine a consenti à recevoir les délégués syndicaux ce lundi pour débattre de leurs revendications.",
    "paragraphs": [
      "Les mariniers de la Basse-Seine ont cessé le travail, réclamant avec insistance la suppression de la marche de nuit ainsi qu'une réglementation plus stricte de leurs conditions d'exercice. La Compagnie de la Seine a, semble-t-il, accepté de rencontrer les délégués syndicaux ce lundi."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Famille asphyxiée",
    "summary": "Un terrible drame domestique a frappé la ville de Briey : la famille de M. Parmentier, clerc de notaire, a été découverte sans vie, victime d'une asphyxie causée par les émanations fatales d'un poêle à charbon.",
    "paragraphs": [
      "Un triste drame domestique s'est produit à Briey. La famille de M. Parmentier, clerc de notaire dans cette localité, a été découverte sans vie, asphyxiée durant la nuit par les émanations d'un poêle à charbon de bois mal réglé."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Politique",
    "title": "L'attitude des puissances en Chine",
    "summary": "La Russie annonce son intention de retirer ses troupes de Chine, soutenue par les États-Unis. Les puissances exigent le maintien de l'intégrité territoriale chinoise et la protection rigoureuse de leurs intérêts.",
    "paragraphs": [
      "Suite au secours apporté aux légations à Pékin, la Russie a affirmé son intention de retirer ses troupes et de ne pas procéder à des acquisitions territoriales en Chine. Le gouvernement américain a fait savoir qu'il approuvait pleinement ce plan.",
      "Toutefois, les puissances maintiennent que la nécessité demeure de protéger les intérêts étrangers, d'assurer une paix permanente et de préserver l'intégrité territoriale de la Chine, tout en négociant avec une autorité gouvernementale chinoise désormais rétablie."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Le retrait des troupes étrangères de Pékin",
    "summary": "Le retrait des troupes étrangères de Pékin est jugé nécessaire. Il est préconisé que les commandants militaires s'entendent pour organiser cette évacuation concertée malgré les difficultés de communication.",
    "paragraphs": [
      "Toute puissance qui retirera ses troupes de Pékin se mettra nécessairement ensuite à pratiquer ses intérêts en Chine en suivant ses propres méthodes.",
      "Nous pensons que cette considération rendrait expédient le retrait général des troupes.",
      "Pour ce qui est de l'époque de l'évacuation et de la manière d'y procéder, nous estimons qu'étant donné le manque de connaissance complète de la situation militaire qui résulte de l'interruption des communications télégraphiques, il faudrait envoyer aux différents commandants militaires à Pékin l'ordre de s'entendre entre eux sur cette évacuation qui s'opérerait de concert."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Internationale",
    "title": "La position des États-Unis sur l'occupation russe",
    "summary": "Les États-Unis accueillent favorablement les assurances russes sur le caractère temporaire de l'occupation de Nion-Chouang, réaffirmant leur politique diplomatique constante en accord avec la France.",
    "paragraphs": [
      "Le gouvernement des États-Unis note avec une grande satisfaction l'assurance donnée par la Russie que l'occupation de Nion-Chouang n'est faite que pour des raisons stratégiques, qu'elle est dictée par des mesures militaires prises pour assurer la sécurité de la frontière russe et des provinces menacées par la Chine, et que la Russie abandonnera les points qu'elle occupe, aussitôt l'ordre rétabli, si l'action des autres puissances n'y met pas d'obstacles.",
      "Aucun obstacle de cette nature ne viendra des États-Unis dont la politique est fixe et a été proclamée à plusieurs reprises.",
      "La France a envoyé une réponse par laquelle, dit-on, elle adhère entièrement à la manière de voir des États-Unis."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Communication officielle de la Russie sur les affaires de Chine",
    "summary": "Le gouvernement russe expose ses objectifs : protéger sa légation, maintenir l'intégrité de l'Empire chinois et rappeler son ministre à Tien-Tsin, jugeant inutile le maintien des troupes à Pékin.",
    "paragraphs": [
      "Saint-Pétersbourg, 1er septembre. Le Messager du gouvernement publie, au sujet des affaires de Chine, une communication officielle dans laquelle se trouve une dépêche circulaire adressée, sur l'ordre de l'empereur, par le ministre des Affaires étrangères, aux représentants de la Russie accrédités à l'étranger.",
      "Les buts principaux que le gouvernement impérial s'est proposé d'atteindre sont : la protection de la légation de Russie à Pékin, l'affirmation de l'aide apportée au gouvernement chinois, le maintien de l'organisme existant en Chine, la mise à l'écart de tout ce qui pourrait conduire au partage de l'Empire du Milieu et l'établissement d'un gouvernement central régulier à Pékin.",
      "Le gouvernement russe a donc décidé de rappeler à Tien-Tsin son ministre, M. de Giers, avec toute la légation et les troupes russes, leur présence à Pékin n'ayant plus de but."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Informations diverses sur la Chine",
    "summary": "Les tensions persistent dans la vallée du Yang-Té-Kiang, tandis que le Japon retire ses marins d'Amoy et que les mouvements diplomatiques se poursuivent autour des autorités impériales chinoises.",
    "paragraphs": [
      "Shanghai, 1er septembre. Le retrait des troupes étrangères de Pékin faciliterait beaucoup les négociations de paix.",
      "L'attitude des vice-rois : un télégramme de Shanghai au Times dit que les vice-rois ont été désignés par un édit impérial pour procéder à une enquête sur la conduite des gouverneurs de la région du Hou-Pé.",
      "Tokio, 1er septembre. Le Japon a ordonné de retirer le détachement de marins envoyé dans la ville indigène d'Amoy suite à l'assurance de protection des autorités locales.",
      "Les souverains chinois : D'après des avis reçus, l'Empereur et l'Impératrice de Chine seraient à Tsai-Yuan-Fou, capitale du Chao-Si.",
      "Francfort, 1er septembre. La situation devient plus menaçante dans la vallée du Yang-Té-Kiang. La population a reçu des armes et des munitions."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Social",
    "title": "Grèves des ports : situation à Marseille, au Havre et à Dunkerque",
    "summary": "Les mouvements de grève perturbent gravement les activités portuaires, causant des tensions sociales à Marseille, des interventions policières au Havre et des rixes isolées à Dunkerque.",
    "paragraphs": [
      "A Marseille : La grève des ouvriers charretiers se poursuit. Les grévistes ont empêché le transport de marchandises aux quais de la Joliette. Les chaudronniers sur fer se sont réunis à la Bourse du travail. La grève menace de se généraliser.",
      "Au Havre : La rentrée des ouvriers aux ateliers Normand s'est faite sans incident, mais plusieurs autres ateliers restent fermés par manque d'ouvriers. Une manifestation a été dispersée par la gendarmerie.",
      "A Dunkerque : L'effervescence est un peu calmée, bien que de nombreuses rixes aient lieu."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Social",
    "title": "Grève des dockers en Corse",
    "summary": "Le mouvement social s'apaise à Bastia où les dockers ont obtenu satisfaction, mais le conflit se déplace à Ajaccio : les ouvriers du port exigent désormais une augmentation de leurs salaires.",
    "paragraphs": [
      "Ajaccio, 1er septembre. La grève des ouvriers du port de Bastia est terminée ; les grévistes ont obtenu gain de cause. Par contre, les ouvriers du port d'Ajaccio viennent de se mettre en grève pour réclamer une augmentation de salaire."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Activités et récompenses à l'Exposition",
    "summary": "L'Exposition universelle multiplie les événements : congrès internationaux, concerts, remises de prix et ouverture de l'exposition hippique à Vincennes témoignent de l'effervescence de la fin de saison.",
    "paragraphs": [
      "Le mois de septembre doit marquer la clôture de tous les congrès internationaux à l'Exposition universelle.",
      "Le bureau du conseil municipal a décidé de remettre la grande soirée à l'Hôtel de Ville au 24 septembre.",
      "Les Coros de Claves, sociétés chorales de la Catalogne, donneront un grand concert public.",
      "La maison J. Digeon et fils aîné s'est vue décerner un grand nombre de récompenses, médailles d'or et d'argent, pour ses classes de mécanique et d'outillage.",
      "Le nombre des entrées à l'Exposition s'accroît progressivement. L'exposition hippique à l'annexe de Vincennes ouvre ses portes au public aujourd'hui."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Nouvelles de la campagne en Afrique du Sud",
    "summary": "La répression britannique s'intensifie au Transvaal : à Bloemfontein, l'ordre est donné d'incendier trente fermes en représailles contre les sabotages ferroviaires attribués aux Boërs en déroute.",
    "paragraphs": [
      "Londres, 1er septembre. Une proclamation lancée à Bloemfontein donne l'ordre d'incendier plus de trente fermes en représailles de la destruction de la voie ferrée.",
      "Les Boërs semblent se disperser dans différentes directions."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Crime horrible à Auberghen",
    "summary": "Un drame conjugal épouvantable a secoué Auberghen : un homme, Jean-Baptiste Michils, a décapité son épouse, qu'il avait épousée seulement quinze jours auparavant, avant de tenter de se donner la mort.",
    "paragraphs": [
      "Bruxelles, 1er septembre. Un drame horrible vient de se dérouler à Auberghen. Jean-Baptiste Michils a décapité sa femme, épousée quinze jours auparavant, avant de tenter de se suicider."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Suicide d'un financier à Paris",
    "summary": "M. Marquis, administrateur du Comptoir d'Escompte du Nord, a mis fin à ses jours rue Saint-Georges. Ce suicide, par arme à feu, serait la conséquence directe de désastreuses opérations à la Bourse.",
    "paragraphs": [
      "Au numéro 24 de la rue Saint-Georges, M. Marquis, administrateur de la banque « Comptoir d'Escompte du Nord », s'est donné la mort d'une balle dans la tête, suite à de mauvaises opérations de bourse."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Agression au boulevard Kellermann",
    "summary": "Mathilde Nicalier, jeune ouvrière de dix-sept ans, a été sauvagement agressée à coups de bâton boulevard Kellermann par un ancien amant éconduit refusant leur séparation.",
    "paragraphs": [
      "Une ouvrière de dix-sept ans, Mathilde Nicalier, a été violemment agressée à coups de bâton par un ancien amant qui, refusant la rupture, ne supportait pas de la voir liée à un autre individu."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "La voleuse récidiviste Marguerite Laurent",
    "summary": "Après avoir dévalisé son compagnon, Marguerite Laurent a été arrêtée pour des vols réitérés commis dans un appartement inoccupé du même palier, où elle s'était installée illicitement.",
    "paragraphs": [
      "Un employé, séduit par une jeune femme nommée Marguerite Laurent, l'avait installée dans son logement de la rue du Trésor. Deux jours plus tard, il constatait avec effroi que sa compagne avait disparu, emportant tous ses objets de valeur.",
      "Il apprit qu'elle était une voleuse coutumière des grands magasins, mais ne put la retrouver initialement. Avant-hier, alors qu'il était resté chez lui, il fut surpris de croiser Marguerite en sortant de son domicile.",
      "Celle-ci, ayant conservé une clef, s'était introduite dans un appartement inoccupé du même palier, y revenant chaque jour pour dérober divers bibelots. On a retrouvé chez plusieurs brocanteurs le produit de ses larcins.",
      "Marguerite Laurent, confondue par ses agissements, a été placée sous bonne garde à la disposition de la justice."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Instruction judiciaire sur l'affaire Vallut",
    "summary": "M. Leydet, juge d'instruction, a procédé à l'interrogatoire de Vallut, auteur d'un coup de revolver tiré à l'Exposition. Des experts psychiatres ont été mandatés pour évaluer sa santé mentale.",
    "paragraphs": [
      "M. Leydet, juge d'instruction, a interrogé hier Vallut, auteur d'un coup de revolver à l'Exposition sur un employé de la Maison du Rire.",
      "Le magistrat a décidé de commettre des experts médicaux afin d'examiner l'état mental de l'inculpé."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie dans le onzième arrondissement",
    "summary": "Un début d'incendie s'est déclaré hier soir passage Théruin chez M. Boutinon. Le patron de lavoir a été grièvement brûlé à la tête en tentant de circonscrire les flammes.",
    "paragraphs": [
      "Un commencement d'incendie s'est déclaré hier soir chez M. Boutinon, patron de lavoir au numéro 10 du passage Théruin.",
      "M. Boutinon a été grièvement brûlé à la tête en tentant, au péril de sa vie, d'éteindre le foyer de l'incendie."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "Ouverture de la Fondation Chemin-Delatour",
    "summary": "La Fondation Chemin-Delatour a inauguré son établissement près de l'hospice d'Ivry, destiné à accueillir trente anciens ouvriers balanciers dans des conditions d'hygiène et de confort optimales.",
    "paragraphs": [
      "L'administration de l'Assistance publique a officiellement ouvert hier matin un nouvel établissement d'hospitalisation nommé Fondation Chemin-Delatour, situé aux abords de l'hospice d'Ivry.",
      "Cet établissement est spécifiquement destiné à accueillir trente vieillards, âgés de soixante-cinq ans au moins, ayant exercé la profession de balancier dans le département de la Seine.",
      "Les nouveaux bâtiments, bâtis en pierre de taille, offrent des conditions d'hygiène excellentes, disposant de dortoirs, d'une infirmerie et d'un superbe jardin.",
      "M. Enjoiras, directeur de l'hospice des incurables, a procédé à l'installation du personnel et a accueilli le premier pensionnaire, M. Edme-François Pivot, âgé de soixante-seize ans."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicides et accidents autour de Paris",
    "summary": "Une série noire frappe la périphérie parisienne : suicides à Chalon, Bezons et Clichy, tragédie à l'hôpital de Bicêtre, et divers accidents survenus à La Garenne-Colombes, Étampes et Corbeil.",
    "paragraphs": [
      "Chalon : Jean Chanaliran, âgé de 20 ans, employé à la fabrique de gramophones, s'est donné la mort hier matin d'un coup de revolver.",
      "Bezons : Maria Noël, domestique de 28 ans, a mis fin à ses jours en s'empoisonnant à l'arsenic.",
      "La Garenne-Colombes : Une fillette de sept ans, Juliette Davril, a été renversée par un cheval emporté. Dans le même quartier, un éboulement survenu rue Lambrecht a fait deux blessés parmi les terrassiers, Georges Bacquerel et François Courtil.",
      "Clichy : Achille Gelotin, 18 ans, s'est asphyxié, désespéré par un chagrin d'amour.",
      "Le Kremlin-Bicêtre : Mathurin-Alexandre Boutet, 35 ans, aveugle et ataxique, s'est précipité par une fenêtre de l'hôpital de Bicêtre.",
      "Saint-Germain-en-Laye : Alexandre Lecocq a été découvert grièvement blessé sur la route, victime d'une agression par un chemineau.",
      "Étampes : Alexandre Fousset, 54 ans, est mort accidentellement en chutant d'une voiture qu'il déchargeait.",
      "Corbeil : Des malfaiteurs ont dérobé deux chevaux dans les écuries de la sous-préfecture."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Actualité",
    "title": "L'exposition d'Horticulture de Versailles",
    "summary": "La Société d'horticulture de Seine-et-Oise a inauguré hier son exposition au Quinconce du Nord, où une centaine d'exposants présentent fruits, fleurs et légumes devant une nombreuse assistance.",
    "paragraphs": [
      "L'exposition organisée par la Société d'horticulture de Seine-et-Oise a ouvert ses portes hier après-midi au Quinconce du Nord.",
      "Cent dix exposants ont présenté des produits fruitiers, des fleurs et des légumes, attirant une affluence considérable et de nombreuses notabilités.",
      "La musique du régiment du génie a donné un concert pour agrémenter l'occasion."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Spectacles",
    "title": "Programmes des spectacles du 2 septembre",
    "summary": "Le programme des théâtres et salles de spectacle parisiens pour le 2 septembre, entre grands classiques à l'affiche et représentations aux Folies-Bergère, au Casino de Paris et à l'Hippodrome.",
    "paragraphs": [
      "Opéra : Relâche. Lundi, Roméo et Juliette.",
      "Opéra-Comique : Lakmé.",
      "Théâtre Sarah-Bernhardt : L'Aiglon.",
      "Variétés : La Belle Hélène.",
      "Palais-Royal : Le Dindon.",
      "Vaudeville : Madame Sans-Gêne.",
      "Porte-Saint-Martin : Cyrano de Bergerac.",
      "Renaissance : Miss Helyett.",
      "Folies-Bergère : Cylindre, ballet, Sisters Tinkler, The 5 Lorrison, La Dante, Les merveilleux Shetter.",
      "Casino de Paris : Cléopâtre, ballet, Les Aquamarinoff, le Bomneranff, Dayton, Roged'Arkansa.",
      "Hippodrome : Paris s'expose, revue."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Exposition Universelle",
    "title": "Informations sur les sites de l'Exposition",
    "summary": "Découvrez les attractions de l'Exposition Universelle : du Panorama de Madagascar aux représentations du Grand Théâtre Égyptien, sans oublier le Village Suisse et le Palais de la Danse.",
    "paragraphs": [
      "Panorama de Madagascar (Trocadéro) : Le général Duchesne devant Tananarive, reddition de la place.",
      "Village Suisse : Orchestres et chanteurs suisses, tableaux alpestres.",
      "Vieux Paris : Grande matinée, église, chanteurs de Saint-Gervais.",
      "Palais de la Danse : Rue de Paris, heure du Berger et Terpsichore.",
      "Le Tour du Monde : Panorama animé situé près de la tour Eiffel.",
      "Grand Théâtre Égyptien (Trocadéro) : Opérette Autar, danses exécutées par les célèbres almées d'Égypte."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Feuilleton",
    "title": "Main Gauche - Troisième partie : Vers l'inconnu",
    "summary": "Don José d'Alcaras, revenu blessé, alerte William Janck et Harry Gerarden : le domestique Joë Sims a enlevé Lydie et s'enfuit vers Lone Rock, trahissant ses complices pour une rançon.",
    "paragraphs": [
      "À quatre heures, don José d'Alcaras avait l'air mécontent, son cheval couvert de sueur.",
      "Il expliqua à William Janck et Harry Gerarden que sa compagne, mistress Janck, était retenue par des brigands qui exigeaient une rançon et se méfiaient des chèques.",
      "Le brigand finit par avouer que le domestique Joë Sims, qui les accompagnait, a manipulé les autres complices pour enlever Lydie dans son propre intérêt.",
      "William Janck et Gerarden, après avoir tenté de se mettre d'accord sur le rachat, sont alertés par l'Espagnol qui revient blessé pour annoncer que Sims s'enfuit vers Lone Rock avec la captive."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Transport",
    "title": "Trains de plaisir de la Compagnie d'Orléans",
    "summary": "En vue de l'Exposition universelle, la Compagnie d'Orléans instaure pour septembre des trains de plaisir à tarifs réduits au départ de plusieurs grandes villes, dont Nantes, Angoulême, Poitiers, Tours et Bordeaux.",
    "paragraphs": [
      "À l'occasion de l'Exposition universelle, la Compagnie d'Orléans met en marche, durant le mois de septembre, des trains de plaisir à prix réduits au départ de Nantes, Angoulême, Poitiers, Tours et Bordeaux-Bastide."
    ]
  }
];
