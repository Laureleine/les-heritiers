// Date: 1899-10-26
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-10-26 (Version Restaurée, 33 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Le culte des morts pour la patrie",
    "summary": "Un vibrant hommage au devoir de mémoire rendu aux soldats morts pour la France, soulignant l'importance de la commémoration à venir du combat du Bourget.",
    "paragraphs": [
      "C'est une chose qui nous réconforte que le culte particulier dont les généraux, officiers et soldats morts en combattant pour l'indépendance et pour la gloire de leur pays ont été et sont encore l'objet. Il est utile de le mettre en relief, chaque fois que l'occasion s'en présente.",
      "D'autres nations l'entretiennent avec un soin au moins égal, mais depuis la guerre de 1870, nous ne le cédons à personne pour les honneurs rendus aux victimes du dévouement patriotique. C'est pour cela qu'aujourd'hui nous arrêterons volontiers notre attention sur une cérémonie qui sera célébrée après-demain, à propos de l'anniversaire de la lutte du Bourget."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Histoire",
    "title": "Le récit de la bataille du Bourget (1870)",
    "summary": "Récit historique des combats héroïques et meurtriers du Bourget en 1870, une page glorieuse du siège de Paris face à la garde impériale allemande.",
    "paragraphs": [
      "Lorsqu'on se reporte à l'histoire de la guerre de 1870-1871, on constate qu'après la sortie du 21 octobre dirigée par le général Ducrot, aucun combat ne fut livré pendant huit jours ; les forts continuaient une canonnade incessante et nos avant-postes se contentaient d'échanger quelques coups de feu.",
      "Au nord de la capitale, les avant-postes prussiens, après avoir occupé la Courneuve et Drancy, s'étaient repliés sur le Bourget. Situé à cinq kilomètres de l'enceinte, ce village avait alors une importance sérieuse car il était traversé par la route de Lille et empêchait une sortie dans la direction nord.",
      "À la fin d'octobre, le général de Bellemare, qui commandait à Saint-Denis, résolut de tenter un coup de main sur le Bourget. Les francs-tireurs furent chargés de l'expédition. Dans la nuit du 27 au 28 octobre, deux compagnies abordèrent le village, tandis que deux autres le tournaient.",
      "C'était la première fois depuis le début du siège que nous conservions une position prise à l'ennemi. L'impression fut donc profonde dans la population. Les troupes étaient sous les ordres du colonel Lavoignet.",
      "Le 30 octobre, le grand quartier général allemand donnait l'ordre de reprendre le Bourget coûte que coûte. Le prince de Wurtemberg, commandant de la garde impériale, engagea environ 15 000 hommes contre nos 2 500 défenseurs. Malgré une résistance acharnée, les Prussiens s'emparèrent du village après une lutte des plus meurtrières.",
      "Je trouve que l'on ne peut remuer de pareils souvenirs sans éprouver une profonde émotion. Une cérémonie comme celle qui sera célébrée après-demain au Bourget est faite pour montrer ce qu'étaient nos aînés, et pour inspirer à leurs fils ou à leurs descendants le désir de n'être ni moins courageux ni moins héroïques s'il le fallait."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "La Course à la Mort",
    "summary": "Le duc de Villefort s'enlise tragiquement dans un marais, tandis que les frères Girodias, en quête de vengeance, observent son agonie imminente.",
    "paragraphs": [
      "Seconde par seconde, dans une lucidité parfaite, mais qui était terrible, le duc de Villefort se voyait mourir, comme il arrive parfois dans certains cauchemars. L'envahissement de la mort le prenait ligne par ligne, montait avec une lenteur sûre et redoutable, pouce à pouce, millimètre par millimètre.",
      "Horace sentait sous ses pieds les tressaillements de cette agonie, et la respiration de la bête, courte, oppressée, ressemblait à un râle. Le monstre avait englouti la bête, il voulait à présent engloutir l'homme.",
      "Alors, un grand cri s'élève du marais boueux qui tient sa proie, un grand cri strident poussé par Villefort : « À moi ! au secours ! ». Les deux hommes du bateau étaient Pierre et Gaston Girodias, qui, en entendant ce cri, se concertèrent à voix basse, pensant à leur père que cet homme avait tué."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Informations Politiques",
    "title": "Activités ministérielles et questions budgétaires",
    "summary": "M. Millerand négocie sur les taxes douanières brésiliennes, tandis que la Commission du Budget finalise ses travaux pour la rentrée parlementaire.",
    "paragraphs": [
      "M. Millerand, ministre du Commerce, a reçu hier les délégués des Chambres de commerce pour discuter des mesures douanières prises par le gouvernement brésilien qui frappent certains produits de taxes prohibitives.",
      "Le rapporteur général de la Commission du Budget, M. Boudenoot, a déclaré qu'il serait en état de déposer son rapport le jour même de la rentrée du Parlement. Par ailleurs, M. Mesureur, président de la Commission, a rendu compte de son entrevue avec M. Waldeck-Rousseau concernant les modifications au budget de la Guerre."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Actualités",
    "title": "Visite du Ministre de la Marine à Brest",
    "summary": "Le ministre de la Marine, M. de Lanessan, effectue une tournée d'inspection officielle à Brest, visitant l'arsenal et honorant les officiers locaux.",
    "paragraphs": [
      "Le Ministre de la Marine, M. de Lanessan, est arrivé hier à Brest. Il a visité l'hôpital maritime, la caserne du 2e régiment d'infanterie de marine, et a procédé à la remise de décorations, notamment la croix de la Légion-d'Honneur au capitaine Treille.",
      "Le Ministre a ensuite inspecté les travaux de construction des nouveaux bassins de l'arsenal destinés à recevoir les grands cuirassés avant de retourner à la Préfecture maritime."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'Assassinat de la rue Berthe",
    "summary": "La Sûreté a appréhendé Émile Guillard, un suspect trouvé en possession d'outils de cambriolage, dont le lien avec l'assassinat de la rue Berthe reste à déterminer par l'enquête en cours.",
    "paragraphs": [
      "Le service de la Sûreté a arrêté hier après-midi, au numéro 28 de la rue Zacharie, un individu nommé Émile Guillard, ami intime de Deroutter, dit Harbier. On a retrouvé dans sa chambre des outils de cambrioleur et une malle en osier portant des étiquettes de Londres.",
      "La complicité de Guillard dans l'assassinat de la logeuse n'est pas encore établie, mais il pourrait fournir des renseignements capitaux sur le crime."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Politique",
    "title": "Réorganisation du Haut Commandement",
    "summary": "Le général de Galliffet engage une réforme des cadres militaires français afin de mettre fin à l'oisiveté des commandants à Paris et d'optimiser l'organisation défensive de l'armée.",
    "paragraphs": [
      "Dans les décrets militaires proposés par le ministre de la Guerre, il faut distinguer les questions de principes et celles de personnes. Le général de Galliffet s'est inspiré des intérêts véritables de l'armée en mettant fin à un système où les commandants éventuels des armées résidaient inoccupés à Paris.",
      "En voulant rajeunir les cadres, le général de Galliffet subordonne toutes les considérations à un suprême objectif militaire."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "International",
    "title": "La guerre au Transvaal",
    "summary": "Les troupes impériales au Natal sont en difficulté. À Londres, M. Chamberlain justifie le conflit contre le président Krüger, invoquant l'intransigeance boer sur les droits civiques et la suprématie britannique.",
    "paragraphs": [
      "On commence à se rendre compte de l'importance des soi-disant victoires de Glencoe et d'Elandslaagte. Au Natal, la position des troupes impériales est terriblement compromise. Le général Redvers Buller aura une rude tâche à accomplir pour reconquérir les territoires séparant la côte des régions transvaaliennes.",
      "À la Chambre des communes, M. Chamberlain a défendu la politique du gouvernement, affirmant qu'un conflit était inévitable puisque le président Krüger n'avait jamais eu l'intention d'accorder des droits égaux à tous les Blancs ou de céder sur la suprématie de l'Angleterre."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "International",
    "title": "La situation au Transvaal",
    "summary": "Le Daily News souligne la nécessité pour le gouvernement britannique de maintenir une posture ferme à l'échelle mondiale malgré les difficultés rencontrées en Afrique du Sud.",
    "paragraphs": [
      "À ce propos, le Daily News déclare avoir de bonnes raisons de penser qu'il est indispensable de démontrer que nos opérations dans l'Afrique du Sud ne nous empêchent aucunement de défendre nos intérêts et nos droits dans les autres parties du monde."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Société",
    "title": "L'Association des Dames de France et le Transvaal",
    "summary": "L'Association des Dames de France organise l'envoi d'une mission sanitaire au Transvaal, comprenant un hôpital de campagne et du personnel soignant, malgré des contraintes budgétaires.",
    "paragraphs": [
      "L'Association des Dames de France a reçu mardi soir du consul de France à Johannesburg le télégramme suivant : « Pour Paris, de Johannesburg, via Malte. Consulat France Johannesburg organise dans écoles frères et sœurs ambulances. Recours à vous pour envoyer lingerie, médicaments, ustensiles. Expédition par Chargeurs Réunis, par Delagoa-Bay. Urgent. Consul France Johannesburg. »",
      "Ce télégramme n'a rien changé aux dispositions prises déjà par le Comité. En effet, depuis l'ouverture des hostilités, l'Association songeait à envoyer une ambulance au Transvaal. Des pourparlers ont été vainement engagés depuis environ quinze jours, et un chirurgien ainsi que deux aides sont prêts à partir pour le théâtre de la guerre.",
      "Il reste à engager quelques infirmiers, et dans sa prochaine réunion le Comité lancera un appel invitant les Dames de France désireuses de partir comme ambulancières à faire parvenir leur adhésion au siège de l'Association.",
      "Tout comme l'a décidé l'Association de la Croix-Rouge russe, l'Association des Dames de France va envoyer immédiatement un hôpital de campagne, des vêtements, des draps, des toiles à matelas, des instruments de chirurgie et une pharmacie complète.",
      "L'Association voudrait mieux faire. Elle possède actuellement cinq hôpitaux de campagne complètement aménagés et prêts à partir. Malheureusement, elle ne peut pas, de par son règlement, toucher au fonds de réserve pour porter secours aux nations étrangères.",
      "Elle est donc obligée de limiter là son intervention, l'Association devant prendre les frais de l'expédition, soit environ 30 000 francs, sur les fonds courants."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Militaire",
    "title": "Réorganisation du Conseil supérieur de la guerre",
    "summary": "Le général de Galliffet réforme le Conseil supérieur de la guerre en obligeant ses membres à exercer un commandement actif en province et en instaurant des inspections inopinées plutôt que permanentes.",
    "paragraphs": [
      "Le Journal officiel a publié, hier matin, le rapport adressé par le général de Galliffet au Président de la République au sujet de la réorganisation du Conseil supérieur de la guerre. Il propose de revenir aux anciens errements où les membres du Conseil conservaient le commandement d'un corps d'armée.",
      "Le décret fixe la composition du Conseil ainsi : le ministre de la Guerre (président), le chef d'état-major général de l'armée, et les généraux désignés pour commander les armées en temps de guerre comme membres titulaires.",
      "Une des conséquences de la réorganisation est de pourvoir tous ses membres d'un commandement actif de corps d'armée. Désormais, ceux-ci ne résideront plus à Paris, où ils ne seront plus appelés que lors de la convocation du Conseil. De plus, les inspections permanentes sont supprimées et remplacées par des inspections inopinées."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Militaire",
    "title": "Mouvements dans l'état-major général",
    "summary": "Suite à la réorganisation du Conseil supérieur de la guerre, les généraux Giovanninelli et Hervé sont mis en disponibilité, tandis que de nouveaux commandements sont attribués à Alger, Rouen, Tours et Rennes.",
    "paragraphs": [
      "En raison de ces importantes modifications, divers décrets, proposés par le ministre de la Guerre, ont été approuvés par le Président de la République. Les généraux Giovanninelli et Hervé sont relevés de leurs fonctions et mis en disponibilité.",
      "Le général de division Grisot est nommé à Alger. Le général Gallimard est nommé à Rouen. Le général Lucas est nommé à Tours et membre du Conseil supérieur. Le général Dunop est nommé à Rennes."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Militaire",
    "title": "Biographies des généraux Hervé et Giovanninelli",
    "summary": "Notice biographique des généraux Hervé et Giovanninelli, deux officiers de carrière dont le parcours fut marqué par d'importantes campagnes en Afrique, en Italie et en Extrême-Orient.",
    "paragraphs": [
      "Le général Hervé, né en 1837, a pris part aux campagnes de Kabylie, d'Italie, de France en 1870 et de Tunisie.",
      "Le général Giovanninelli, né en 1837, est connu pour ses opérations au Tonkin et le sauvetage héroïque de la garnison de Tuyen-Quan."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Diverses informations",
    "summary": "Actualités militaires : ouverture d'une instruction contre M. Urbain Gohier, mission d'observation du commandant Damade au Transvaal et arrivée du général Grasset à Bordeaux.",
    "paragraphs": [
      "Une instruction a été ouverte contre M. Urbain Gohier pour injures et diffamation envers l'armée.",
      "Le commandant Damade a été désigné pour suivre les opérations militaires dans le Transvaal.",
      "Le général Grasset a fait son entrée solennelle à Bordeaux."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le drame de la tourbière",
    "summary": "Un homme nommé Villefort, enlisée dans une tourbière, a été sauvé in extremis grâce à l'intervention rapide de deux chasseurs de sauvagine qui lui ont lancé une corde.",
    "paragraphs": [
      "Après une lutte haletante contre la mort, Villefort, enlisé dans la tourbière, est secouru par deux chasseurs de sauvagine qui, ayant entendu ses appels désespérés, lui lancent une corde et parviennent à le haler hors de la boue."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le parricide de Ronestaing",
    "summary": "L'instruction sur l'assassinat de la veuve Piraube progresse à Marmande. Les preuves matérielles, dont un bâton ensanglanté et des vêtements, accablent gravement le fils de la victime, désormais au centre des soupçons.",
    "paragraphs": [
      "Le Parquet de Marmande poursuit avec rigueur l'instruction relative à l'assassinat de la veuve Piraube. Les éléments recueillis semblent confirmer la culpabilité de son fils : en effet, des empreintes digitales relevées sur les lieux du crime concordent avec les siennes. De surcroît, la découverte d'un bâton maculé de sang ainsi que de vêtements lui appartenant, saisis par les autorités, constituent des charges accablantes contre lui."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Social",
    "title": "Les grévistes de Carmaux",
    "summary": "Reçus par le gouvernement, les délégués des ouvriers de Carmaux ont ouvert la voie à une conciliation. La Compagnie minière accepte la création d'une commission d'enquête tout en réaffirmant la validité de la sentence de 1892.",
    "paragraphs": [
      "Les délégués des grévistes ont été reçus par le gouvernement afin d'exposer leurs doléances. La Compagnie minière a, pour sa part, tenu à rappeler son strict respect de la sentence arbitrale de 1892. Toutefois, dans un esprit d'apaisement, elle a consenti à la constitution d'une commission d'enquête destinée à vérifier les faits et à tenter de ramener la conciliation au sein des mines."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Tribunaux",
    "title": "Le crime de Puteaux",
    "summary": "La Cour d'assises a condamné à mort Jean Gouzet pour la tentative d'assassinat commise le 31 mai dernier à Puteaux contre sa belle-sœur, Mme Montjarret.",
    "paragraphs": [
      "La Cour d'assises a rendu son verdict concernant l'affaire Jean Gouzet. Reconnu coupable de la tentative d'assassinat perpétrée le 31 mai dernier à Puteaux sur la personne de sa belle-sœur, Mme Montjarret, l'accusé a été condamné à la peine de mort."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Théâtre",
    "title": "Critique de 'L'Amour pleure et rit' à l'Athénée",
    "summary": "Sous la direction de M. Abel Deval, l'Athénée inaugure sa saison avec la comédie 'L'Amour pleure et rit'. Une œuvre spirituelle portée par le talent de Mlle Blanche Toutain et du directeur lui-même.",
    "paragraphs": [
      "Le théâtre de l'Athénée a rouvert ses portes sous la direction dynamique de M. Abel Deval. La première pièce proposée au public est une comédie gracieuse de M. Auguste Germain, intitulée 'L'Amour pleure et rit'.",
      "Cette œuvre, servie par une interprétation de qualité, notamment grâce à la présence de Mlle Blanche Toutain et de M. Abel Deval lui-même, laisse présager un succès durable et une belle saison pour ce théâtre."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Chroniques",
    "title": "La séance annuelle à l'Institut",
    "summary": "Sous la présidence de M. Van Tieghem, les cinq Académies ont tenu leur séance publique annuelle sous la coupole de l'Institut, célébrant avec éclat les lettres, les arts et l'excellence académique.",
    "paragraphs": [
      "La séance publique annuelle des cinq Académies s'est tenue sous la coupole de l'Institut, sous la haute présidence de M. Van Tieghem. Divers rapports et lectures furent présentés au cours de cette cérémonie solennelle, célébrant avec faste les arts, les lettres et l'ensemble du travail académique."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enfant martyr",
    "summary": "Le tribunal correctionnel de Meaux a condamné par défaut les époux Lecoq, coupables de sévices ayant causé la mort de leur enfant de neuf ans, découvert dans un état de délabrement atroce à Quincy-Segy.",
    "paragraphs": [
      "Le tribunal correctionnel de Meaux a condamné hier, par défaut, à cinq années d'emprisonnement et 500 francs d'amende les époux Lecoq, petits ouvriers, inculpés de mauvais traitements sur leur enfant âgé de neuf ans.",
      "Les époux Lecoq, dont la conduite laissait à désirer sous tous les rapports, demeuraient à Quincy-Segy, près Meaux. Le mari était ivrogne.",
      "Le 22 juillet dernier, la mère, qui allait porter déjeuner à son mari occupé à des travaux de moisson assez loin du village, confia la clef de son logement à une voisine, Mme Niece.",
      "Celle-ci, entendant pleurer le petit Eugène, vint lui donner à boire, et elle se trouva en présence d'un spectacle dépassant en horreur tout ce que les bruits répandus dans le pays depuis un certain temps avaient pu lui faire imaginer.",
      "L'enfant couchait dans un panier, sur un grabat, parmi des chiffons pourris. Il était dans un état de maigreur extrême. Ses haillons étaient collés à son corps. Il avait la figure couverte de plaies et ses reins étaient rongés par les vers.",
      "L'autorité locale, immédiatement prévenue, fit transporter la petite victime à l'hospice de Meaux, où elle mourut le surlendemain.",
      "Les époux Lecoq s'enfuirent la nuit de leur domicile et, depuis, on ne les a pas revus. La justice apprit, par la suite, qu'ils s'étaient réfugiés en Belgique. C'est le deuxième enfant que la femme Lecoq a laissé mourir faute de soins."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Météo",
    "title": "La température",
    "summary": "Bulletin météorologique du 26 octobre 1899 : après un brouillard matinal, la journée fut clémente. Les pressions barométriques évoluent, tandis que la douceur persiste en France malgré une baisse générale des températures.",
    "paragraphs": [
      "Jeudi 26 octobre, 301e jour de l'année, 34e jour de l'automne. Saint Évariste. Lever du soleil à 6h48, coucher à 5h14. Lever de la lune à 1h14, coucher à 3h16.",
      "Nous avons eu hier matin un brouillard épais, un lourd rideau, et le reste de la journée a été assez beau.",
      "De basses pressions existent au large à l'ouest des Îles Britanniques ; elles se rapprochent de nous et le baromètre a baissé de 7 mm à Valentia, où le vent a tourné vers le sud-est en fraîchissant. Les pressions supérieures à 765 mm couvrent encore l'ouest et le sud-ouest du continent ; le maximum barométrique se trouve à Carlsruhe (773 mm).",
      "Le vent souffle d'entre est et sud sur notre littoral ouest ; il est modéré en Bretagne.",
      "Une tempête du nord sévit sur la Baltique et la Finlande.",
      "Des pluies sont tombées dans le nord de l'Europe ; on n'en signale pas en France. La température baisse généralement, sauf sur les Îles Britanniques ; elle était hier matin de 4° à Helsingfors, 2° à Moscou et Paris, 16° à Alger et à Monaco.",
      "On notait -8° au Puy-de-Dôme, -8° au Ventoux et au Pic du Midi.",
      "En France, un temps doux avec ciel nuageux ou brumeux est probable.",
      "Situation particulière aux ports français : la mer est généralement belle sur toutes nos côtes, elle est un peu agitée à Marseille."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Abordage en Seine",
    "summary": "Hier matin, le remorqueur Angélique et le Bateau Parisien n° 51 sont entrés en collision près du quai de la Tournelle. Malgré la violence du choc et d'importantes avaries, aucun blessé n'est à déplorer.",
    "paragraphs": [
      "Hier matin, vers neuf heures, le remorqueur Angélique, qui venait d'amarrer trois péniches chargées de sable au quai de la Tournelle, opérait un mouvement de rotation sur lui-même pour reprendre la direction du fleuve en aval, lorsqu'il fut heurté à bâbord par l'avant du Bateau Parisien n° 51.",
      "Le choc, très violent, causa des dégâts considérables à l'embarcation, dont l'arbre de couche et les tôles furent détériorés. Les voyageurs furent débarqués sur-le-champ au ponton de la Tournelle, afin de permettre au bateau de regagner, à petite allure, le bassin de radoub du Point-du-Jour.",
      "Le remorqueur, examiné sur place par les autorités compétentes, a été reconnu exempt de toute avarie et a pu reprendre sa route sans encombre."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vol de titres",
    "summary": "Sur mandat du Parquet de Fontainebleau, le commissaire Martin a appréhendé deux individus pour la vente frauduleuse d'obligations du Crédit foncier volées au domicile de M. Lohé, à Paris.",
    "paragraphs": [
      "Sur mandat délivré par le Parquet de Fontainebleau, M. Martin, commissaire de police aux délégations judiciaires, a procédé à l'arrestation des nommés Paolo N. et Giuseppe T. qui, il y a quelques mois, en compagnie d'un sieur N., cordonnier à Moret, s'étaient présentés chez un banquier de Fontainebleau et lui avaient vendu un lot d'obligations du Crédit foncier, représentant une valeur de 10.000 francs environ.",
      "Le banquier ne tarda pas à s'apercevoir que ces titres, frappés d'opposition, avaient été volés au préjudice de M. Lohé, demeurant 41, boulevard Sébastopol.",
      "Tous trois ont été écroués au Dépôt. On ne sait encore s'ils seront mis à la disposition du Parquet de Paris ou à celui de Fontainebleau."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un drame sur un chaland",
    "summary": "Un ouvrier ciseleur, Joseph Maître, a tenté d'assassiner sa compagne, Pauline Guéry, à coups de revolver sur les bords du canal de l'Ourcq par jalousie. La victime n'a été que légèrement blessée.",
    "paragraphs": [
      "Il y a quelque temps, un ouvrier ciseleur nommé Joseph Maître, âgé de trente ans, faisait la connaissance d'une jeune couturière, Pauline Guéry, âgée de dix-neuf ans.",
      "Joseph Maître était jaloux et son amie très coquette. Hier soir, vers dix heures, l'ouvrier ciseleur se trouvait dans un débit de la rue de Flandre lorsqu'un camarade vint l'avertir que Pauline Guéry se promenait en compagnie d'un jeune homme sur les bords du canal de l'Ourcq.",
      "Saisi d'une violente fureur, il s'arma d'un revolver et partit à sa rencontre. Lorsqu'elle aperçut son amant, la jeune fille chercha à échapper à son ressentiment en se laissant glisser dans un chaland amarré au quai de Valmy.",
      "Joseph Maître la suivit et découvrit sa maîtresse blottie derrière une pile de sacs de charbon. Il fit feu à trois reprises sur la malheureuse, quand des gardiens de la paix, prévenus par le jeune homme qui accompagnait la couturière, accoururent et le mirent en état d'arrestation.",
      "Contre toute attente, la jeune fille n'est que légèrement blessée au bras gauche. Joseph Maître, qui manifeste le plus grand repentir de sa coupable action, a été mis à la disposition de M. Borde, commissaire de police du quartier."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes",
    "summary": "Une série d'accidents tragiques et d'agressions marquent la vie des communes de la proche banlieue parisienne, de Clichy à Ivry, rapportant divers décès, blessures et incidents de la vie quotidienne en cette fin d'année 1899.",
    "paragraphs": [
      "Clichy : M. Eugène Terray, âgé de trente-sept ans, a été renversé par une voiture alors qu'il circulait à bicyclette rue du Bois. Il souffre d'une blessure au crâne et d'une fracture de l'épaule.",
      "Levallois-Perret : M. Julien Favières, trente-neuf ans, a été désarçonné de son cheval rue Victor-Hugo et a reçu une grave blessure au crâne.",
      "Asnières : Alfred Soleau, maçon de trente-sept ans, est tombé sous les roues d'un tombereau dans l'île des Ravageurs. Il a succombé à ses blessures à l'hôpital Beaujon.",
      "Villeneuve-la-Garenne : Émile Ginollac, terrassier de quarante-trois ans, s'est gravement brûlé en s'endormant alors qu'il fumait sa pipe près de bottes de paille qui ont pris feu.",
      "Montmorency : Jean Doulet, charretier de quarante-deux ans, a été écrasé sous les roues de son véhicule chargé de moellons à Marly-la-Ville. Il a succombé.",
      "Vincennes : Un incendie a ravagé la manufacture « Le Bébé Français », rue de Montreuil. Les pertes matérielles sont importantes.",
      "Noisy-le-Sec : M. Jeunet, employé des contributions, a été sauvagement agressé et assommé par trois individus dans l'avenue de Bondy. Il est dans un état alarmant.",
      "Joinville-le-Pont : Jules Blondel, dit « le Père Lafrite », a été arrêté à Saint-Mandé pour la tenue d'un établissement mal famé et une affaire de mœurs.",
      "Nogent-sur-Marne : La municipalité a organisé une représentation de gala en hommage au sauveteur Mathias Manternach.",
      "Ivry : Léon Pichot-Damont, 81 ans, a tenté de se suicider d'un coup de couteau à la poitrine dans la maison de retraite."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Départements",
    "title": "Nouvelles des correspondants",
    "summary": "Les correspondants en province nous rapportent divers faits tragiques survenus à Beauvais, Chartres et Dreux, incluant une agression armée, un incendie dévastateur et deux décès accidentels ou criminels.",
    "paragraphs": [
      "Beauvais : Albert Béranger a été écroué pour avoir tiré un coup de fusil sur sa cousine, Eugénie Breton, par jalousie.",
      "Chartres : Un grave incendie a détruit une grande partie des marchandises de la mercerie de M. Gion, située place Billard.",
      "Dreux : Le nommé Baledent est décédé après une rixe survenue à la sortie d'un café. Par ailleurs, le corps d'une femme nommée Garnier a été retrouvé dans une rivière après une chute accidentelle."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Représentations parisiennes",
    "summary": "La programmation lyrique et théâtrale de Paris s'anime avec la reprise des « Pêcheurs de perles » à l'Opéra-Comique et les nouvelles représentations prévues au Châtelet et à la Renaissance.",
    "paragraphs": [
      "À l'Opéra-Comique : Reprise des Pêcheurs de perles de Bizet, marquant les débuts attendus du baryton Henri Albers.",
      "Au Châtelet : Première représentation de la matinée du jeudi consacrée à Robinson Crusoë.",
      "Au Conservatoire : La liste des candidats admissibles aux classes de chant a été publiée.",
      "Au Théâtre lyrique de la Renaissance : Représentations de Lucie de Lammermoor et du Bouffé et le Rifle."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Santé",
    "title": "Traitement du Chartreux",
    "summary": "Publicité pour le Traitement du Chartreux, une médication présentée comme souveraine contre les rhumatismes, la goutte et les névralgies, disponible auprès du pharmacien M. Malavant.",
    "paragraphs": [
      "Le Traitement du Chartreux est d'une efficacité absolue. Les douleurs les plus invétérées n'y résistent pas. Ce traitement n'oblige à aucun changement dans la manière de vivre du malade. Les cures les plus surprenantes sont constatées chaque jour par nombre de célébrités médicales.",
      "Le traitement guérit toujours les rhumatismes, la goutte, les douleurs, les névralgies, les coliques hépatiques, le lumbago et la gravelle.",
      "Traitement complet : 8 francs, adressé à M. Malavant, pharmacien, 19, rue des Deux-Ponts, à Paris, qui enverra gratis et franco une curieuse brochure sur le Rhumatisme et la Goutte."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Lieutenant Jacques",
    "summary": "Lors d'une soirée, la réception d'une lettre mystérieuse provoque une vive réaction chez Mme de Montalais et une émotion soudaine chez son mari, le général, qui sort brièvement de sa paralysie.",
    "paragraphs": [
      "Elle fit une courte pause. Puis, avec un sourire douloureux : « Croyez, reprit-elle, que je vous serai toujours reconnaissante d'avoir bien voulu vous consacrer votre soirée. »",
      "À ce moment, un domestique entra au salon. Il apportait sur un plat d'argent le courrier du soir. C'était un journal sous bande, quelques imprimés et une lettre cachetée.",
      "S'approchant de la table où était assis le général, il déposa le tout devant lui. Madame de Montalais cependant, qui était demeurée au fond du salon, se rapprochait de son mari.",
      "Aussitôt elle tressaillit. Allongeant sa main osseuse, elle l'abattit sur la lettre. En même temps, d'une voix dure apostrophant le domestique : « Joseph ! Combien de fois vous ai-je ordonné de ne remettre qu'à moi seule toute la correspondance ? »",
      "Et saisissant la lettre, vivement elle la glissa dans un pli de sa robe. Puis, d'un pas cette fois rapide, elle sortit du salon.",
      "Mais en dépit de ces brusques mouvements, l'œil du général avait dû, lui aussi, apercevoir l'écriture de cette lettre. Un cri inarticulé sortit de ses lèvres.",
      "Soudain, comme galvanisé par une formidable émotion, le paralysé se redressa de toute sa hauteur. Durant une seconde, il demeura debout, sur ses jambes subitement ravivées. Puis, au milieu du silence effaré de la salle, d'une voix vibrante, il jeta ces trois mots : « Gontran Daubray ! Honneur ! »",
      "Mais presque aussitôt, épuisé par cet effort, il retombait affaissé, les yeux clos, les membres rigides, évanoui.",
      "Madame de Montalais cependant s'était précipitée dans sa chambre. D'un mouvement impulsif, elle poussa le verrou de la porte. Tirant de sa poche le pli cacheté, elle en examina l'écriture : « C'est lui, c'est bien Gontran. »"
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Faits Divers",
    "title": "Mise en garde sur les annonces fallacieuses",
    "summary": "Le journal exhorte ses lecteurs à la méfiance face aux annonces douteuses, en rappelant l'importance de s'adresser aux établissements à la réputation solidement établie, comme la Pharmacie Centrale du Nord.",
    "paragraphs": [
      "Est-ce un tort d'être crédule ? Évidemment non. C'est, au contraire, l'indice d'une âme pure. Il convient néanmoins, et c'est le rôle des journaux comme le nôtre, de mettre ses lecteurs en garde contre certaines annonces fallacieuses.",
      "Nous recommandons les maisons dont la notoriété est incontestable, telle que la Pharmacie Centrale du Nord, rue Lafayette, à Paris, dont les produits sont constamment renouvelés par la grande consommation."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Actualité",
    "title": "Lettre de Gustave de Nerval",
    "summary": "Installé à Paris, Gustave de Nerval confie à sa mère ses déboires financiers et son infortune, sollicitant une entrevue ainsi qu'une aide pécuniaire sous le nom de comte de Nerval.",
    "paragraphs": [
      "Ma chère mère, c'est de Paris que je vous adresse ces lignes. Voilà plus de quinze jours que je suis arrivé. Si j'ai tardé à vous écrire, c'est que j'espérais vous annoncer quelque bonne nouvelle, mais je suis né sous une bien mauvaise étoile.",
      "Dans ma dernière lettre de Londres, je vous faisais entrevoir un changement dans ma fortune. Hélas, rien ne m'a réussi ; trompé par un associé, je suis sur le pavé de Paris sans ressources.",
      "Je ne veux pas aller à Angerville, et il me répugne de me présenter au château de peur de causer une secousse fatale à mon père dans son état. C'est donc vous qui viendrez à Paris.",
      "N'oubliez pas le nom que j'ai pris il y a quinze ans : M. le comte Gustave de Nerval. J'aurais besoin de vous voir et d'obtenir, si possible, la somme d'une centaine de louis."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Marchés",
    "title": "Cours des Halles et du Blé",
    "summary": "Compte rendu de la séance du 25 octobre à la Halle au blé : les échanges sont marqués par une vive difficulté et une tendance persistante à la baisse sur l'ensemble des cours.",
    "paragraphs": [
      "Paris, 25 octobre. Les affaires ont été excessivement difficiles aujourd'hui, et c'est encore de la baisse que nous avons à constater.",
      "À la Halle au blé : les blés blancs valaient de 18 à 18,50 francs et les roux de 17,25 à 18 francs les 100 kilos, gare Paris."
    ]
  }
];
