// Date: 1899-12-15
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-12-15 (Version Restaurée, 27 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie",
    "title": "La pêche maritime en Europe",
    "summary": "Panorama de la pêche industrielle européenne en 1899 : tandis que la Belgique décline, l'Allemagne progresse grâce au soutien étatique et l'Angleterre s'impose par la modernisation technologique de sa flotte.",
    "paragraphs": [
      "Ceux qui s'intéressent aux efforts et aux succès de nos braves marins pêcheurs apprendront, non sans intérêt, quelques détails précis sur l'organisation de la moyenne et grande pêche dans les différents pays d'Europe, permettant de comparer le mouvement pêchier international avec la situation en France.",
      "La Belgique, dont les progrès maritimes ont été typiques ces dernières années, ne servira pas d'exemple ici, car l'industrie y est en déclin sur la dernière période décennale, exception faite pour le chalutage à vapeur.",
      "L'Allemagne, en revanche, est considérablement en progrès. En douze ans, l'importance des pêcheries de la mer du Nord a triplé. Le gouvernement allemand dispense d'innombrables récompenses et encouragements indirects, doublés d'une organisation commerciale assurant l'écoulement rapide du produit vers le centre de l'Europe.",
      "La Hollande renferme une population de pêcheurs très active. Si les chalutiers à vapeur n'y sont pas encore très nombreux, l'utilisation de vapeurs haranguiers en acier marque un tournant technologique.",
      "C'est l'Angleterre qui se place à la tête des nations européennes septentrionales. Malgré une apparente diminution du nombre de bateaux, le passage vers une flotte de vapeurs, plus coûteux et efficaces, témoigne d'un accroissement considérable du capital flottant des pêcheries anglaises."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions - Roman inédit",
    "summary": "Le récit suit Gabrielle Vautier, commerçante ambitieuse au passé obscur, dont l'ascension est menacée par la mort soudaine de son protecteur et l'intrusion importune de Paul Tavernier, un homme lié à son passé.",
    "paragraphs": [
      "Gabrielle Vautier, après des années de misère, avait acquis dans la fréquentation des ateliers de modes et des rues de Paris cette expérience et ces ruses dont sont faites les femmes ayant roulé sur le pavé. Devenue vendeuse, elle tomba sur un vieux capitaliste qui lui permit de monter sa propre affaire.",
      "Mais un malheur survint : le vieux protecteur mourut subitement sans avoir pris de précautions pour assurer l'avenir de sa protégée. Gabrielle, assise dans son cabinet avec sa comptable, faisait le point sur ses affaires lorsqu'une visite inattendue survint.",
      "Paul Tavernier, ami de Georges Dufresne, entra avec le sourire. C'était un homme soigné, un gentleman, que la patronne ne semblait pourtant pas accueillir avec une considération débordante, évoquant avec dédain leur passé commun et sa volonté de ne plus y revenir."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Les vacances parlementaires",
    "summary": "En raison de l'impossibilité de boucler le budget avant la fin de l'année, la Chambre des députés devra voter des douzièmes provisoires pour le début de l'année 1900 avant la pause du Jour de l'an.",
    "paragraphs": [
      "Les vacances parlementaires du Jour de l'an commenceront le 22 ou 23 décembre pour durer jusqu'au 9 janvier. Il est certain que la Chambre n'aura pas pu terminer la discussion des budgets spéciaux avant sa séparation.",
      "Le gouvernement compte saisir la Chambre d'un projet de douzièmes provisoires pour les mois de janvier et février, car il est douteux que le Sénat puisse voter le budget dans les temps."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique Internationale",
    "title": "Les relations internationales",
    "summary": "Le déclin de l'invincibilité britannique au Transvaal et le discours du chancelier de Bülow isolent Londres, favorisant un rapprochement diplomatique entre la France, l'Italie et l'Autriche-Hongrie.",
    "paragraphs": [
      "Les rapports entre les grandes puissances européennes se ressentaient depuis longtemps du prestige britannique. Cependant, les événements au Transvaal et la dernière défaite du général Methuen ont porté un coup sérieux à la légende de l'invincibilité anglaise.",
      "Le discours de M. de Bülow au Reichstag a marqué l'isolement de l'Angleterre, tandis que le rapprochement de l'Italie avec la France, et l'attitude pacifique de l'Autriche-Hongrie, ouvrent un vaste champ d'action à la diplomatie française."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le drame du Faubourg Saint-Martin",
    "summary": "Un drame passionnel a secoué le faubourg Saint-Martin : une épouse séparée a tiré six coups de feu sur son mari, M. Michaud, éditeur de musique, qui lui interdisait de voir leur enfant.",
    "paragraphs": [
      "Un drame s'est déroulé hier matin dans le faubourg Saint-Martin : une femme en instance de divorce, Mme Michaud, a tiré sur son mari parce que celui-ci refusait de lui révéler où se trouvait leur enfant qu'il lui avait enlevé.",
      "M. Michaud, éditeur de musique, avait obtenu la garde des enfants. Mme Michaud, après s'être introduite chez son mari, a tiré à six reprises. Blessé de cinq coups de feu, M. Michaud n'est pas mortellement atteint. Mme Michaud s'est rendue d'elle-même au poste de police pour se constituer prisonnière."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "La défaite anglaise à Magersfontein",
    "summary": "La défaite à Magersfontein marque un tournant critique pour les forces britanniques. Lord Methuen, retranché sur la Modder, attend désespérément des renforts après la perte de 817 hommes sous le feu des Boers.",
    "paragraphs": [
      "La nouvelle défaite que l'armée anglaise vient d'essuyer à Magersfontein dépasse en portée tous les échecs précédents. Lord Methuen est désormais immobilisé sur les bords de la Modder et ne peut espérer atteindre Kimberley sans renforts.",
      "Le War Office a publié la dépêche confirmant le retrait des troupes anglaises suite à un feu terrible des Boers. Le total des pertes anglaises s'élève à 817 hommes, incluant de nombreux officiers."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une affaire de faux-monnayage",
    "summary": "Jean Lacroix, habile faux-monnayeur, est tombé après huit ans d'activités clandestines. Son arrestation, déclenchée par un complice, révèle la double vie surprenante de ce père de famille.",
    "paragraphs": [
      "Une affaire retentissante a mis en émoi le quartier Saint-Victor : Jean Lacroix, un faux-monnayeur dont l'habileté était merveilleuse, a été découvert après huit ans d'activité criminelle.",
      "L'arrestation a eu lieu après qu'un de ses complices a tenté d'écouler une fausse pièce dans une pharmacie. Les détails sur la vie double de ce père de famille, adorant ses enfants tout en se livrant à un trafic illégal, défient l'imagination."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame de la rue Linné",
    "summary": "Un drame domestique a frappé la rue Linné. Inquiète de l'absence d'une élève, l'institutrice a découvert, avec la concierge, les corps de Mme Lacroix et de ses trois enfants, victimes de l'asphyxie d'un poêle.",
    "paragraphs": [
      "Dans l'après-midi d'hier, vers deux heures et demie, une dame pénétrait dans la loge de l'immeuble de la rue Linné et disait à la concierge : « Je suis l'institutrice de la petite Eva Lacroix, et je viens voir comment il se fait qu'elle n'est pas venue à son cours aujourd'hui. »",
      "La concierge déclara ne rien savoir et, suivie de l'institutrice, elle alla frapper à la porte de l'appartement des époux Lacroix. Les appels restèrent sans résultat.",
      "Un serrurier fut mandé et, la porte ouverte, on découvrit dans la chambre à coucher les cadavres déjà rigides de Mme Lacroix et de ses enfants, Louis et Raoul. Sur un canapé gisait le corps de la petite Eva.",
      "L'asphyxie avait été causée par un poêle mobile dont le tuyau laissait échapper des gaz délétères.",
      "M. Michaut, commissaire de police du quartier, a procédé aux constatations d'usage."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un carnet funèbre",
    "summary": "Le magistrat a découvert un carnet où Mme Lacroix, avant de périr, clame son innocence concernant les accusations de contrefaçon pesant sur son foyer et relate ses derniers instants d'angoisse.",
    "paragraphs": [
      "Sur la table de nuit, le magistrat trouva un carnet composé d'une dizaine de pages, remplies d'une écriture fiévreuse. Mme Lacroix y confiait l'amour pour son mari et ses enfants, déclarant qu'elle n'avait jamais été coupable de contrefaçon.",
      "Elle y décrit ses derniers moments, l'asphyxie lente, et demande que l'on prenne soin de ses enfants et de ses plantes, signant ses adieux à deux heures du matin."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Les retraites proportionnelles",
    "summary": "Le général de Galliffet et M. Caillaux présentent un projet de loi visant à accorder aux officiers de l'armée, jusqu'au grade de colonel, le bénéfice d'une retraite proportionnelle après vingt ans de service.",
    "paragraphs": [
      "Nous avons fait connaître récemment les grandes lignes du projet de loi déposé par M. le général de Galliffet, ministre de la Guerre, et par M. Caillaux, ministre des Finances, au sujet des retraites proportionnelles des officiers.",
      "D'après le premier article, les officiers de toutes les armes jusqu'au grade de colonel inclus peuvent être admis, après vingt ans de service, à une position dite de retraite provisoire."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "Chambre des Députés - Séance du jeudi 14 décembre",
    "summary": "Lors de la séance du 14 décembre, la Chambre a conclu le budget de la Justice. Le ministre M. Baudin a annoncé de futurs grands travaux publics pour garantir l'emploi aux ouvriers après l'Exposition universelle.",
    "paragraphs": [
      "La Chambre a terminé la discussion du budget du ministère de la Justice et a abordé ensuite la discussion générale du budget du ministère des Travaux publics.",
      "M. Baudin, ministre des Travaux publics, a répondu à M. Vaillant que le gouvernement a pris la décision de faire entreprendre, après l'Exposition universelle, de grands travaux d'utilité générale afin d'assurer de l'ouvrage aux ouvriers."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Justice",
    "title": "La Haute Cour - Vingt-neuvième audience",
    "summary": "À la vingt-neuvième audience de la Haute Cour, les débats se sont poursuivis sur les agissements des nationalistes, avec les dépositions du colonel de Kergariou et de la baronne d'Adelsward concernant des souscriptions.",
    "paragraphs": [
      "Au début de l'audience, on est revenu sur plusieurs dépositions antérieures afin de préciser certains détails, puis l'audition des témoins concernant le procès des accusés nationalistes a repris.",
      "M. de Kergariou, ancien colonel en retraite, et Mme la baronne d'Adelsward ont déposé à la barre sur les faits et les souscriptions destinées à la fondation d'un journal royaliste."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Actualités",
    "title": "Le monument Alphand",
    "summary": "Le monument dédié à Alphand, chef-d'œuvre du sculpteur Dalou, a été inauguré à l'entrée de l'avenue du Bois-de-Boulogne, en hommage à l'homme qui consacra sa vie à l'embellissement des espaces parisiens.",
    "paragraphs": [
      "Dans une cérémonie empreinte de simplicité, il a été fait hier matin remise à la Ville de Paris du monument élevé à Alphand, sur l'initiative d'un comité présidé par M. G. Mesureur.",
      "L'œuvre du sculpteur Dalou se dresse sur une pelouse de l'avenue du Bois-de-Boulogne, en face de la rue Chalgrin, à deux pas de ce bois à l'embellissement duquel Alphand consacra une grande partie de son existence."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame de la jalousie à Malines",
    "summary": "Un drame passionnel a secoué Malines : une femme nommée Mme Desmet a ébouillanté son mari avec du vitriol. La victime a été transportée à l'hôpital dans un état grave, jugé désespéré par les médecins.",
    "paragraphs": [
      "Une jeune femme, Mme Desmet, soupçonnant son mari de l'infidélité, l'a accueilli hier soir en lui projetant un bol de vitriol en plein visage. M. Desmet a été transporté d'urgence à l'hôpital dans un état désespéré."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Faits Divers",
    "title": "Récompense pour dévouement",
    "summary": "Le directeur de l'assistance et de prévoyance de la préfecture de police a décerné une grande médaille de vermeil à un citoyen méritant en reconnaissance de son courage et de son dévouement exemplaire.",
    "paragraphs": [
      "Le directeur de l'assistance et de prévoyance de la préfecture de police vient de lui décerner une grande médaille de vermeil, en signe de reconnaissance pour le dévouement dont il a fait preuve en maintes circonstances."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Social",
    "title": "Loterie de la Société des amis de l'enfance",
    "summary": "La Société des amis de l'enfance informe le public que le tirage de sa loterie se tiendra le 20 décembre. Seuls les billets dûment acquittés avant la date limite du 19 décembre seront admis à participer au tirage au sort.",
    "paragraphs": [
      "Le tirage de la loterie organisée par la Société des amis de l'enfance aura lieu irrévocablement le 20 décembre, à deux heures de relevée, au siège même de la société.",
      "Il est rappelé que seuls les billets dont la vente est effective participeront au tirage.",
      "En conséquence, tous les billets dont le montant n'aura pas été intégralement acquitté au plus tard le 19 décembre seront considérés comme n'étant pas placés et seront exclus de l'opération."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une Vendetta",
    "summary": "Un drame sanglant s'est déroulé à Chartres suite à une vendetta contre Labbé, suspecté d'un incendie criminel au Puits-Riouet. Une violente altercation armée a laissé les protagonistes dans un état grave.",
    "paragraphs": [
      "Chartres, 14 décembre. Dans la nuit du 18 au 19 mai, un terrible incendie, allumé par une main criminelle, détruisait le hameau du Puits-Riouet. Quinze ménages furent jetés à la rue. Les quatre enfants de Victor C. et le père Pelletier périrent dans les flammes. On rechercha, sans pouvoir le découvrir, l'incendiaire.",
      "Un nommé Labbé est suspecté d'être l'auteur du crime. Depuis, une haine profonde déchaîne le village contre Labbé.",
      "Hier soir, un nommé Chedouville, dont les enfants périrent dans les flammes, rentrait au village en voiture lorsqu'il rencontra Labbé. Chedouville lui cria : « Tiens, voilà l'incendiaire du Puits-Riouet ! » et il le frappa avec son fouet. Labbé riposta, le saisit à la gorge, et le roua de coups de poings et de pieds.",
      "Labbé courut chez lui, appela son beau-père, et, armés l'un d'une binette, l'autre d'une trique, ils revinrent au-devant de Chedouville pour le tuer. Ce dernier, armé d'une fourche, se défendit. La lutte devint générale.",
      "Chedouville tomba en poussant un cri ; il venait de recevoir un terrible coup de binette sur la tête. Le sang coulait ; le crime était à nu.",
      "Labbé fut conduit à l'hôpital de Chartres où le docteur Maunoury lui donna les premiers soins. Son état est jugé très grave. Le parquet de Chartres s'est transporté sur les lieux pour ouvrir une enquête. Il est probable que Chedouville sera mis en état d'arrestation."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Actualité",
    "title": "Le froid et la neige",
    "summary": "Paris est en proie à une vague de froid exceptionnelle. La Seine charrie des glaçons tandis que la rigueur des températures provoque une série de malaises et de décès tragiques à travers la capitale et ses communes.",
    "paragraphs": [
      "Depuis hier, la Seine charrie d'énormes glaçons en amont de Paris. La rigueur de la température a malheureusement fait de nombreuses victimes.",
      "Un entrepreneur de maçonnerie, M. Romain, âgé de quarante-neuf ans, a été subitement frappé par le froid sur l'avenue. Mme Marie, âgée de soixante-huit ans, a succombé sur le trottoir rue Jules-Joffrin.",
      "À Villejuif, on a trouvé mort de froid un individu nommé Charles Biritan. Aux Lilas, un charretier nommé Dominique Battouassi, âgé de quarante ans, s'est affaissé, frappé d'une congestion produite par le froid.",
      "Une scène dramatique s'est déroulée rue du Pont-Neuf lors d'une distribution de soupe. Une femme, Olympe Beerel, a été frappée de cécité subite, une congestion causée par le froid."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame entre mari et femme",
    "summary": "Une dispute conjugale violente entre la baronne de X. et son époux séparé a dégénéré en une rixe impliquant le père de la dame, le comte de S. Le baron, blessé à la tête, a dû être transporté à la maison de santé Dubois.",
    "paragraphs": [
      "Une femme, dans un état d'agitation extrême, parcourait hier matin les abords de la rue Cardinet. Elle déclara aux passants être la baronne de X. et affirma que son mari, dont elle est séparée, s'était introduit à son domicile pour une violente dispute, au cours de laquelle il l'aurait frappée, ainsi que ses deux jeunes filles.",
      "Le père de la baronne, le comte de S., accouru à leur secours, en vint aux mains avec son gendre. Lorsque les témoins pénétrèrent dans l'appartement, ils découvrirent le baron de X. étendu sur le parquet, grièvement blessé à la tête. M. de S. a soutenu avoir agi en état de légitime défense. Le baron a été transporté d'urgence à la maison de santé Dubois pour y recevoir les soins nécessaires."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Justice",
    "title": "Arrestation d'un contumax",
    "summary": "La police a appréhendé, rue Maître-Albert, l'individu nommé Lecomardet. Cet ancien caissier syndical, en fuite après des détournements de fonds, avait été condamné par contumace par la cour d'assises de la Seine.",
    "paragraphs": [
      "Le service de la Sûreté a arrêté hier, au numéro 10 de la rue Maître-Albert, un individu se faisant appeler Étienne Legrand, mais se nommant véritablement Lecomardet. En sa qualité d'ancien caissier de la Chambre syndicale de l'industrie, il s'était rendu coupable de détournements de fonds avant de prendre la fuite.",
      "Il avait, en conséquence de ses actes, été condamné par défaut par la cour d'assises de la Seine."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendies dans la capitale",
    "summary": "Deux départs de feu ont mobilisé les pompiers parisiens : un incident mineur rue Vieille-du-Temple, rapidement maîtrisé, et un incendie plus important dans les hangars de la gare aux charbons du Nord.",
    "paragraphs": [
      "Un commencement d'incendie s'est déclaré rue Vieille-du-Temple, dans une construction légère de l'Imprimerie nationale. Il a été rapidement éteint.",
      "Vers sept heures du soir, un incendie s'est déclaré dans la gare aux charbons de la gare du Nord, détruisant un hangar contenant de grandes quantités de combustible. Les dégâts sont évalués à une dizaine de mille francs."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame de la misère à Palaiseau",
    "summary": "La commune de Palaiseau est en proie à une vive émotion après la découverte des corps des époux Chevallier et de leurs deux enfants, victimes d'un suicide collectif motivé par l'extrême misère.",
    "paragraphs": [
      "La population de Palaiseau est impressionnée par un drame de la misère. Les époux Chevallier et leurs deux enfants, Théophile (6 ans) et Thérèse (18 mois), ont été trouvés morts dans leur chambre après avoir inhalé les émanations d'un réchaud. Un billet annonçait qu'ils se suicidaient pour échapper à la misère."
    ]
  },
  {
    "id": 23,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités des théâtres parisiens",
    "summary": "Les théâtres parisiens multiplient les annonces de reprises pour les fêtes de Noël. Le Vaudeville prépare le retour de Mme Réjane, tandis que le théâtre Dejuet inaugure de nouveaux vaudevilles.",
    "paragraphs": [
      "Ce soir, au théâtre Dejuet, premières représentations de « Les Petites voisines » (reprise), vaudeville en trois actes de MM. Hippolyte Raymon et J. de Gastyne, et de « Le Pseudonyme », vaudeville nouveau en un acte de M. Duthel.",
      "Au Vaudeville, « Le Panbourg » n'aura plus que cinq représentations. Après-demain dimanche, dernière matinée de l'originale comédie de M. A. Hermant.",
      "Le mardi 19 décembre, reprise de « Belle-Maman ». M. Porel, désirant d'une part offrir à son public une pièce comique à l'occasion des fêtes de Noël et de l'autre voulant satisfaire aux réclamations des nombreux abonnés encore en villégiature lors des représentations de l'amusante comédie de Victorien Sardou et Raimond Delandes.",
      "M. Huguenet et Mme Marie Magnier partant à la fin du mois pour Monte-Carlo, « Belle-Maman » n'aura exactement que dix représentations.",
      "Enfin, le jeudi 28 décembre, Mme Réjane, qui fait en ce moment une tournée triomphale à l'étranger et que le public parisien n'a pas eu le plaisir d'applaudir depuis le mois de mai dernier, fera sa rentrée sur la scène du Vaudeville dans une des pièces de son répertoire."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Spectacles",
    "title": "Nouvelles des scènes musicales",
    "summary": "La vie musicale parisienne s'anime avec la 50e représentation de Cendrillon à l'Opéra-Comique et l'audition de la 9e Symphonie de Beethoven par M. Colonne au Châtelet.",
    "paragraphs": [
      "À l'Opéra-Comique, la « Cendrillon » de M. Massenet atteindra sa cinquantième représentation à la matinée de dimanche prochain.",
      "Devant le grand succès qui s'affirme de « France d'abord » à l'Odéon, les rôles viennent d'être distribués en double.",
      "Au théâtre des Nouveautés, ce soir vendredi, rentrée de Mlle Armande Cassive dans « La Dame de chez Maxim ».",
      "M. Colonne donnera dimanche, au Châtelet, une seconde et dernière audition de la 9e Symphonie avec chœurs, de Beethoven.",
      "M. Louis Diemer jouera la « Fantaisie » de Périlhou et exécutera la « Rapsodie hongroise » de Liszt pour piano seul.",
      "Les matinées musicales seront reprises jeudi prochain, au Nouveau-Théâtre.",
      "La direction du théâtre des Arts de Rouen nous informe que la répétition générale de « Thi-Theu », opéra en trois actes et quatre tableaux, paroles de MM. Edouard Noël et Lucien d'Hève, musique de M. Frédéric Le Rey, aura lieu le vendredi 22 décembre prochain, dans la soirée, et la première représentation le lendemain samedi.",
      "M. Raoul François, directeur du théâtre des Arts, tient des places à la disposition des membres de la critique musicale parisienne pour cette répétition générale, ainsi que pour la première représentation.",
      "Le théâtre du Gymnase s'est assuré auprès du comte Prozor, en vue de soirées organisées par M. Lugné-Poé, le privilège de « Quand nous nous éveillerons », la nouvelle pièce d'Henrik Ibsen."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Tragédies de l'Amour - VII (suite)",
    "summary": "Horace, capturé par les frères Girodias, est emmené de force à bord de la Némésis. Le capitaine Barbedier, témoin de l'enlèvement, se retrouve face à un dilemme moral tandis que le sort du prisonnier s'assombrit.",
    "paragraphs": [
      "Le projet des frères Girodias. L'un des deux hommes lui tendit une bourse pleine d'or et répondit : « Voici le complément de la somme qui vous a été promise ». Et, au comble de la surprise, Horace reconnaissait dans celui qui venait de parler et dans l'autre qui accompagnait celui-là, les deux frères Girodias.",
      "À deux mille lieues de la patrie, les bandits, sans même remercier, sautèrent sur leurs chevaux et s'évanouirent dans les arbres où, sur la terre molle et boueuse, la course de leurs montures ne s'entendait même pas.",
      "Horace avait un lasso qui lui entourait les jambes et lui défendait tout mouvement de marche; les Girodias le soulevèrent chacun par un bras et le forcèrent à entrer dans le canot; il ne se défendit point; toute résistance était impossible : les avirons s'abattirent et le canot se dirigea vers la Némésis.",
      "Pierre et Gaston aidèrent Horace à monter. Un quart d'heure après, sans que personne à bord eût paru s'émouvoir de ce drame mystérieux, le duc était enfermé dans une cabine. Les Girodias, à tour de rôle, se chargeaient de veiller sur lui et de pourvoir à ses besoins. Entre eux et Horace, pas un seul mot n'avait été échangé.",
      "Pierre remonta. Il voulait profiter du reste de la nuit pour quitter ces parages, gagner Saint-Augustin au plus vite, et la haute mer. Il n'eut pas longtemps à chercher Barbedier. Celui-ci était sur le pont. « Faites lever l'ancre, monsieur, dit Pierre, le navire est sous voiles, dans quelques minutes nous pouvons être loin ». « À vos ordres, monsieur, dit Barbedier d'un ton froid, mais dès que le bâtiment sera en marche, je vous demanderai quelques instants d'entretien ».",
      "Une demi-heure après, la Némésis filait lentement dans l'obscurité, à travers les ensablements du Saint-Jean. Le ciel s'était déblayé, les étoiles brillaient. Pierre se retourna, c'était le capitaine Barbedier : « Monsieur, dit-il, je me trouvais cette nuit sur le pont au moment où vous et votre frère vous êtes descendus dans le canot pour aller à terre, et j'ai remarqué que vous ameniez un passager ».",
      "Le dialogue entre Pierre et Barbedier se tendit, le capitaine refusant d'être complice d'un crime. Pierre finit par lui proposer de débarquer à Saint-Augustin. Barbedier accepta, tout en gardant le secret sur ce qu'il avait vu. Toutefois, le matelot Malaquin, aux aguets, avait tout observé et savait que le prisonnier était Villefort."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Concerts et Divertissements",
    "title": "Activités nocturnes et spectacles parisiens",
    "summary": "Paris s'anime avec le retour d'Otero aux Folies-Bergère, les innovations du Nouveau-Cirque, l'inauguration de la salle d'hiver du Moulin-Rouge et le succès de la revue satirique au Concert Européen.",
    "paragraphs": [
      "Ce soir, aux Folies-Bergère, continuation du critérium de la lutte ; rencontre d'Eberlé, champion allemand, et de Laurent le Beaucairois. Demain, soirée de gala pour la rentrée d'Otero, plus jolie et plus en voix que jamais.",
      "Une mode nouvelle consiste à conduire ses invités au spectacle ; c'est surtout au Nouveau-Cirque, si mondain et si élégant, que les maîtresses de maison songent de préférence. En plus du succès de J. Stickel, on annonce pour demain samedi les petits Indiens Fatma et Smaun.",
      "On fait actuellement de grands préparatifs au Moulin-Rouge en vue d'inaugurer brillamment, demain samedi, par une fête des plus attrayantes, la nouvelle grande salle d'hiver, entièrement reconstruite.",
      "La spirituelle revue du Concert Européen, « On n'est pas des prudes », fait couler beaucoup d'encre et provoque des débats passionnés."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Communications Diverses",
    "title": "Agenda des sociétés et concours",
    "summary": "De la coiffure à la bienfaisance, Paris vit au rythme des concours et assemblées : retrouvez les rendez-vous associatifs et mondains qui ponctueront la fin de l'année.",
    "paragraphs": [
      "La distribution des prix et le grand concours annuel de coiffure, organisés par la chambre syndicale, auront lieu le dimanche 17 décembre, à 8 heures du soir, rue Blanche.",
      "La société d'instruction et d'éducation militaires, « Les Touristes », donnera son troisième grand bal militaire le samedi 16 décembre, au Grand Orient de France.",
      "La remise solennelle des prix et médailles de l'association de notaires aura lieu le 17 décembre à 2 heures, à la mairie du dixième arrondissement.",
      "L'assemblée générale annuelle de l'association amicale des anciens palus, « Le Surnom », aura lieu le lundi 18 décembre, à neuf heures du soir, boulevard de Sébastopol.",
      "La Crécelle, société lyrique et dansante, donnera son premier grand bal de la saison samedi prochain, 16 décembre, à l'hôtel des Sociétés savantes.",
      "La Fédération des œuvres post-scolaires de Paris organise pour dimanche prochain une grande fête au profit des mutuelles scolaires.",
      "M. Léon Bourgeois présidera dimanche l'assemblée générale de la Maison maternelle."
    ]
  }
];
