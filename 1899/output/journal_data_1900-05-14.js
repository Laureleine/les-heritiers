// Date: 1900-05-14
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-05-14 (Version Restaurée, 32 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique étrangère",
    "title": "L'Européen Chine",
    "summary": "La Chine, au cœur des convoitises européennes, voit son destin basculer sous l'influence de la Russie, de l'Angleterre, de la France et de l'Allemagne, dans un jeu de puissances complexe où le Japon est désormais un acteur clé.",
    "paragraphs": [
      "Les dernières années du XIXe siècle ont été pour la Chine assez agitées. L'Europe s'est beaucoup occupée d'elle, beaucoup plus assurément qu'elle ne le souhaitait, et les rapports fréquents, réguliers et directs qui se sont établis entre le Céleste-Empire et les grandes puissances ne sont pas destinés à se relâcher.",
      "L'immensité de la Chine, le nombre de ses habitants, la richesse de son sol devaient nécessairement faire de ce pays un centre puissant d'attraction, et l'Ancien Monde devait tôt ou tard en essayer l'exploitation. Trois États européens y pouvaient prétendre : la Russie, l'Angleterre et la France, selon des voies terrestres ou maritimes distinctes.",
      "La révolution dans la politique européenne vis-à-vis de la Chine eut pour cause l'apparition d'un facteur nouveau : le Japon. Depuis 1868, l'empire du Mikado suivait une politique opposée à celle de la Chine, novatrice face à une puissance vieillie.",
      "Aujourd'hui, chaque puissance a marqué sa place : la Russie par son influence au Nord, la France par ses intérêts dans le Sud, l'Angleterre par sa domination maritime et commerciale, et l'Allemagne par ses nouvelles entreprises. La Chine trouve dans la rivalité et la division de ces puissances sa meilleure sûreté et le garant de son indépendance."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Secret du Docteur",
    "summary": "Le docteur poursuit son examen critique des irrégularités judiciaires dans l'affaire Gérard, tandis que Gabrielle et M. de Précomtal tentent de percer le mystère des derniers aveux du défunt duc d'Argile.",
    "paragraphs": [
      "Le docteur continue son analyse sur l'affaire judiciaire, déplorant les manœuvres des magistrats d'Auch et l'influence néfaste du procureur Viguier sur l'enquête concernant Michel Gérard.",
      "Gabrielle, éperdue, discute avec M. de Précomtal des preuves effacées et de la volonté de son cousin de nuire à l'accusé. Ils reviennent sur les derniers instants du duc d'Argile et les ambiguïtés entourant ses dernières paroles, que Gabrielle interprète comme un aveu d'affection plutôt qu'une accusation."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits divers",
    "title": "L'aventure de la comtesse de Martel (Gyp)",
    "summary": "Stupeur à Paris suite au mystérieux récit d'enlèvement de la comtesse de Martel, dite Gyp. Malgré l'ouverture d'une enquête judiciaire, les recherches policières peinent à confirmer les déclarations de la célèbre écrivaine.",
    "paragraphs": [
      "Les Parisiens ont accueilli avec une profonde stupéfaction l'aventure étrange arrivée à la comtesse de Martel, connue sous le nom de plume Gyp. Le procureur de la République a prescrit une enquête suite à son récit d'enlèvement.",
      "Mme de Martel a raconté avoir été enfermée dans une vaste propriété, probablement située près de Nogent-sur-Marne. Malgré les recherches approfondies menées par la police, aucune maison correspondant à sa description n'a pu être identifiée.",
      "Le sous-brigadier Ruppé, en poste à l'octroi de Bercy, témoigne l'avoir vue arriver vers une heure et demie du matin dans un état de grand désordre, avant qu'elle ne décide de se rendre seule chez un ami, M. Paulin Méry."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits divers",
    "title": "Accident à bord d'un torpilleur",
    "summary": "Un tragique accident survenu sur le torpilleur n° 1 à Cherbourg a coûté la vie au chauffeur Préchacq. Une commission d'enquête examine les causes de l'explosion de vapeur dans la chaufferie.",
    "paragraphs": [
      "Une commission d'enquête s'est réunie à Cherbourg pour examiner les causes de l'accident survenu sur le torpilleur n° 1. Un tuyau extérieur fendu a provoqué une fuite de vapeur, engendrant une explosion de flammes dans la chaufferie.",
      "Les deux chauffeurs, Préchacq et Pilastre, ont été gravement brûlés en tentant de s'échapper. Le jeune Préchacq est décédé des suites de ses blessures, tandis que l'état de santé de Pilastre est jugé satisfaisant par les médecins."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits divers",
    "title": "Un hameau incendié à Hanches",
    "summary": "Un violent incendie a dévasté le hameau de Pacy, à Hanches. Le sinistre, qui n'a pas fait de victime humaine, a détruit cinq maisons et occasionné des dégâts matériels estimés à trente mille francs.",
    "paragraphs": [
      "Un violent incendie s'est déclaré hier soir au hameau de Pacy, commune de Hanches. Le feu, attisé par le vent et favorisé par les couvertures en chaume des bâtisses, a détruit cinq maisons et plusieurs bâtiments agricoles.",
      "Malgré l'intervention rapide des pompiers, les dégâts sont estimés à trente mille francs. Le sinistre est, d'après les premières constatations, attribué à une cause purement accidentelle."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits divers",
    "title": "Incendie d'un tissage mécanique",
    "summary": "Un violent incendie a ravagé les ateliers de tissage des établissements Gouttenoire et Curieux à Écofon. Si les machines ont été détruites, les bâtiments neufs ont pu être préservés grâce aux secours.",
    "paragraphs": [
      "Un incendie de grande violence a éclaté dans les ateliers de tissage de MM. Gouttenoire et Curieux, à Écofon. Malgré l'intervention des secours des communes voisines, les machines ont été intégralement détruites, bien que les bâtiments neufs aient pu être préservés du sinistre."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Politique",
    "title": "Élections municipales du 13 mai : Scrutin de ballottage",
    "summary": "Les résultats du scrutin de ballottage pour les élections municipales parisiennes sont proclamés, confirmant une répartition des sièges entre candidats nationalistes, radicaux et socialistes.",
    "paragraphs": [
      "Les résultats des élections municipales à Paris pour le scrutin de ballottage ont été officiellement proclamés. Plusieurs conseillers ont été élus dans les différents arrondissements, dont MM. Gelez, Hénart, Dubuc et Poirier de Narçay, marquant une répartition diversifiée entre les candidats nationalistes, radicaux et socialistes."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Politique",
    "title": "Résultats des élections municipales",
    "summary": "Détail de la composition du conseil municipal pour les arrondissements de Saint-Denis et de Sceaux à l'issue du second tour des élections.",
    "paragraphs": [
      "Le conseil municipal, après le scrutin de ballottage, se trouve composé, selon les étiquettes politiques revendiquées par les candidats élus, de représentants nationalistes, socialistes, radicaux-socialistes, de droite, républicains modérés et radicaux.",
      "Arrondissement de Saint-Denis : Les résultats par commune concernent Asnières, Bobigny, Clichy, Colombes, Courbevoie, Bondy, Saint-Ouen, Le Bourget, Drancy, Épinay, La Garenne-Colombes, L'Île-Saint-Denis, Les Lilas, Levallois-Perret, Nanterre, Neuilly-sur-Seine, Pierrefitte, Saint-Gratien, Pantin, Romainville, Noisy-le-Sec, Suresnes, Vanves et Vaucresson.",
      "Arrondissement de Sceaux : Les résultats incluent Sceaux, Alfortville, Antony, Bagneux, Bagnolet, Bonneuil-sur-Marne, Bry-sur-Marne, Charenton, Chevilly, Créteil, Fontenay-aux-Roses, Les Lilas, Ivry-sur-Seine, Maisons-Alfort, Malakoff, Montrouge, Montreuil-sous-Bois, L'Haÿ, Le Perreux, Plessis-Piquet, Vitry-sur-Seine."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Faits Divers",
    "title": "Manifestations parisiennes",
    "summary": "Une soirée de vives tensions a agité les boulevards parisiens, marquée par des barrages policiers et des manifestations pro-armée.",
    "paragraphs": [
      "Durant toute la soirée d'hier, d'importants barrages d'agents furent établis à la hauteur du faubourg Montmartre, de la rue Drouot et de la rue Vivienne. Les grilles du passage Jouffroy et du passage des Panoramas furent maintenues closes.",
      "Les manifestants, bloqués par ces dispositifs, poussaient des acclamations bruyantes, parmi lesquelles on distinguait des cris de « Vive l'armée ». Mme Gyp fut accueillie par des vivats au moment où elle se dirigeait vers les bureaux du journal La Libre Parole.",
      "L'opération s'est soldée par une vingtaine d'arrestations, bien qu'aucune n'ait été maintenue par les autorités."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Chronique de l'Exposition",
    "summary": "L'Exposition universelle enregistre une affluence massive avec 80 000 entrées. Des plans de signalisation facilitent désormais la visite, notamment au sein de la section des mines.",
    "paragraphs": [
      "Un magnifique mouvement populaire s'est manifesté hier durant toute la journée à l'Exposition universelle. Dès midi, plus de quatre-vingt mille entrées étaient déjà enregistrées.",
      "M. Alfred Picard a fait apposer à l'entrée et à la sortie de chaque section un plan partiel, très clair et facile à lire, établi sur un rayon de cinq cents mètres.",
      "La section des mines est remarquablement installée, présentant un panorama complet du domaine minéral, depuis les outils d'extraction jusqu'aux machines servant à couper les roches ornementales."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Social",
    "title": "Revendications des employés de commerce",
    "summary": "Le syndicat des employés de commerce intensifie son combat pour la journée de dix heures. Des sections de quartier seront créées pour convaincre les patrons récalcitrants et unifier les pratiques commerciales à Paris.",
    "paragraphs": [
      "Le syndicat des employés de commerce poursuit avec détermination son action en faveur de la journée de dix heures et du repos hebdomadaire.",
      "Lors d'une réunion tenue au Tivoli-Vauxhall, le secrétaire, M. Martinet, a annoncé qu'une centaine de maisons de commerce se sont prononcées favorablement sur le principe. Toutefois, certains patrons opposent encore des réticences liées aux impératifs de la concurrence.",
      "Face à cette situation, le syndicat projette la création de sections de quartier afin de renforcer son influence. Il n'exclut pas, en dernier ressort, de solliciter le vote d'une loi pour instaurer une égalité de traitement parmi toutes les maisons parisiennes."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Guerre des Boers",
    "summary": "En Afrique du Sud, les opérations se précisent : le général French coupe les voies ferrées, tandis que M. Steijn installe la capitale de l'Orange à Lindley et que le général Brabant conforte ses positions stratégiques.",
    "paragraphs": [
      "Le général French, établi au nord de la ville, a ordonné la coupure de la voie ferrée. De son côté, M. Steijn est arrivé à Lindley pour y établir le siège de la nouvelle capitale de l'Orange.",
      "Parallèlement, le général Brabant a occupé une colline d'une importance stratégique majeure, opération qui lui a permis de faire plusieurs prisonniers parmi les troupes adverses."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Actualités",
    "title": "Le Palais des Congrès",
    "summary": "Le Président de la République, M. Émile Loubet, inaugurera sous peu le Palais des Congrès. Dès le 21 mai, cet édifice prestigieux accueillera les travaux des congrès des sciences et de l'horticulture.",
    "paragraphs": [
      "Le Palais des Congrès, monument aux proportions harmonieuses bordant la Seine, sera inauguré dans trois jours par le Président de la République, M. Émile Loubet.",
      "La cérémonie solennelle inclura la présentation des bureaux internationaux ainsi que les allocutions d'usage. Dès le 21 mai, les premiers travaux débuteront au sein de ses salles avec les congrès des sciences de l'écriture et de l'horticulture."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Social",
    "title": "Assemblée générale d'une société de secours",
    "summary": "Le Petit Parisien a honoré lors de son assemblée annuelle des citoyens courageux, dont M. Silvain de la Comédie-Française. La cérémonie s'est conclue par un concert et un banquet aux salons Marguery.",
    "paragraphs": [
      "Le Petit Parisien a tenu sa dernière assemblée, au cours de laquelle il a proposé pour récompense divers membres s'étant signalés par des actes de courage ou de dévouement.",
      "Le compte rendu de la situation morale et financière a été exposé par le trésorier, M. Ancel. M. K. Bréhier, secrétaire général, a ensuite donné lecture du rapport des actions accomplies depuis la dernière fête.",
      "La lecture du palmarès a soulevé d'enthousiastes applaudissements. Parmi les lauréats, citons un soldat du régiment de ligne, M. Gilbert Sourbailerre, récompensé d'une médaille de bronze ; M. Silvain, de la Comédie-Française, qui, pour sa belle conduite lors de l'incendie du Théâtre-Français, a reçu une médaille de vermeil ; M. Mouquin, sous-directeur de la police municipale, a obtenu un prix dont la valeur, trois cents francs, a été généreusement reversée à la société au profit des membres malades.",
      "Les palmes académiques ont été, en outre, décernées au pharmacien M. Vansteensberghe, qui, depuis plus de dix ans, prodigue soins, conseils et médicaments gratuits aux sauveteurs malades.",
      "L'excellente musique du régiment de ligne, sous la direction de son chef M. Perlat, a prêté son concours à cette cérémonie qui s'est terminée par un magnifique concert. Le soir, à sept heures, un grand banquet a été servi dans les salons Marguery, boulevard Bonne-Nouvelle."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Social",
    "title": "Société de prévoyance et de secours mutuels l'Avenir",
    "summary": "La société l'Avenir a tenu son assemblée annuelle au Conservatoire des Arts-et-Métiers sous la présidence de M. Georges Bonjean, soulignant l'importance de la mutualité et du travail des femmes.",
    "paragraphs": [
      "La société de prévoyance et de secours mutuels l'Avenir, dont le siège social est situé rue de Rivoli, a tenu hier, à deux heures de l'après-midi, son assemblée générale dans le grand amphithéâtre du Conservatoire des Arts-et-Métiers. M. Georges Bonjean, juge au tribunal civil de la Seine, occupait le fauteuil de la présidence.",
      "La société l'Avenir, composée exclusivement de dames et demoiselles du commerce et de l'industrie, demeure l'une des plus anciennes et des plus remarquables sociétés de secours mutuels. Le rapport présenté par la trésorière, Mme Joliveau, indique que la société compte de nombreux membres, dont 174 pensionnaires, et possède un capital de 248 105 francs.",
      "L'assemblée générale a décidé que les enfants des sociétaires seraient désormais admis à faire partie de la société moyennant une légère cotisation.",
      "Dans son allocution, chaleureusement applaudie, M. Georges Bonjean a insisté sur les bienfaits de la mutualité et a souligné l'importance capitale de l'émancipation des femmes par le travail."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Social",
    "title": "Apprentis peintres en bâtiment",
    "summary": "La distribution solennelle des prix de l'école professionnelle des apprentis peintres en bâtiment, rue Hermel, a récompensé les élèves pour leurs résultats remarquables malgré la jeunesse de l'institution.",
    "paragraphs": [
      "La distribution solennelle des récompenses aux élèves de l'école professionnelle des apprentis peintres en bâtiment et professions similaires a eu lieu hier, à deux heures et demie de l'après-midi, dans la grande salle de l'école professionnelle, 2, rue Hermel, à Montmartre.",
      "L'école, qui est unique en France, n'a que quatre mois d'existence, mais ses cours sont très suivis et elle a déjà donné des résultats surprenants. En outre des prix qui ont été attribués, une médaille d'argent offerte par le ministre de l'Instruction publique a été décernée à M. Marcel Blanchard."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression dans un débit de vins",
    "summary": "Un client ivre, refusé par un débitant du boulevard Richard-Lenoir, s'en est pris violemment au fils du patron en le blessant à coups de couteau. L'agresseur a été appréhendé par la police.",
    "paragraphs": [
      "Un entrepreneur de transports nommé Clément Lebreton, âgé de vingt-quatre ans, demeurant 6, cours de Vincennes, qui paraissait être quelque peu pris de boisson, entrait hier matin vers une heure dans un débit de vins tenu boulevard Richard-Lenoir par M. Fritz.",
      "M. Fritz et son fils Georges, âgé de dix-sept ans, se sont refusés à le servir car il était trop tard. Lebreton, furieux, s'arma d'un couteau et frappa le jeune homme, le blessant grièvement au bras gauche. Le forcené a été mis à la disposition du commissaire de police."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Escroquerie à l'Exposition",
    "summary": "Un ouvrier boulanger a été interpellé par la police alors qu'il tentait frauduleusement d'obtenir des jetons pour accéder gratuitement à l'enceinte de l'Exposition Universelle.",
    "paragraphs": [
      "M. Guénin, un des commissaires de police chargés spécialement de l'Exposition, a consigné à sa disposition un ouvrier boulanger, Joseph Sellac, âgé de trente ans, inculpé d'escroquerie.",
      "Sellac a été arrêté avenue de Suffren, au moment où il se faisait remettre deux jetons d'ouvriers devant faciliter l'entrée gratuite dans l'enceinte de l'Exposition. Il a avoué les faits."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie avenue Montaigne",
    "summary": "Un violent incendie a ravagé un appartement de l'avenue Montaigne hier à la mi-journée. Le feu, propagé dans trois pièces, pourrait trouver son origine dans un incident de cheminée survenu la veille.",
    "paragraphs": [
      "Un violent incendie s'est déclaré hier, vers midi et demi, avenue Montaigne, dans un appartement situé au troisième étage et occupé par M. de Bertrand. Le feu s'est propagé dans trois pièces, détruisant tout le mobilier.",
      "La cause du sinistre serait liée à un feu de cheminée survenu la veille dans le même immeuble. Les dégâts matériels sont évalués à plusieurs milliers de francs."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident du travail au Trocadéro",
    "summary": "Un grave accident de travail a eu lieu au palais du Trocadéro : un couvreur a été grièvement brûlé par du goudron en ébullition durant son service.",
    "paragraphs": [
      "Un couvreur, Jules Prévost, âgé de trente-six ans, a eu la main droite brûlée par du goudron en ébullition alors qu'il travaillait dans la galerie ouest du palais du Trocadéro. Il a reçu les premiers soins au poste médical."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers régionaux",
    "summary": "Chronique des faits divers en banlieue : élection municipale à Aubervilliers, drames humains à Stains et Saint-Germain-en-Laye, accidents du travail à la Plaine-Saint-Denis, Clamart et Achères, et transfert funéraire à Versailles.",
    "paragraphs": [
      "Aubervilliers : Le nouveau conseil municipal s'est réuni. M. Domart est réélu maire.",
      "Stains : Mme Marguerite Gelé, abandonnée par son mari, a sombré dans la folie ; elle a été dirigée sur l'infirmerie spéciale du dépôt.",
      "Plaine-Saint-Denis : Une violente bagarre entre deux ouvriers a conduit Paul Tuyer à l'hôpital, tandis que le nommé Loquand a été mis à la disposition du commissaire de police.",
      "Clamart : Un terrassier, Jean Pivert, a eu la jambe brisée après avoir été enseveli sous un éboulement de carrière.",
      "Saint-Germain-en-Laye : Le corps d'un individu, coupé en deux, a été découvert sur la ligne de la Grande-Ceinture.",
      "Achères : Un homme d'équipe nommé Brix a succombé après avoir été écrasé entre deux wagons.",
      "Versailles : Le cercueil d'Henri Guillier, victime de l'accident ferroviaire de Chartres, a été dirigé vers Saint-Dizier."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Sports",
    "title": "Résultats des courses à Vincennes et Longchamp",
    "summary": "La journée hippique du prix Lupin à Longchamp fut marquée par la victoire éclatante d'Ivry. Le calendrier des épreuves sportives se poursuit à Vincennes dès le lundi 11 mai.",
    "paragraphs": [
      "La journée du prix Lupin à Longchamp a été un franc succès. Ivry a remporté l'épreuve principale devant Semendria et M. Amédée. Les autres prix de la journée ont été enlevés par Paysan, Plantagenet, Bidou, Illa et Rodrigue.",
      "Des épreuves hippiques sont également programmées à Vincennes pour la journée du lundi 11 mai."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Sports",
    "title": "Match cycliste Elkes-Taylor",
    "summary": "Au vélodrome du Parc des Princes, le coureur américain Elkes a brillé en couvrant 55 kilomètres en une heure, surclassant le jeune espoir français Taylor malgré des conditions météorologiques difficiles.",
    "paragraphs": [
      "Au vélodrome du Parc des Princes, l'Américain Elkes a triomphé du jeune prodige français Taylor, parvenant à couvrir 55 kilomètres en une heure. Le match fut passionnant, malgré un vent violent qui contrariait les concurrents."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Chronique",
    "title": "Inauguration du nouvel Hippodrome",
    "summary": "Ouverture triomphale du nouvel Hippodrome de la place Clichy. Un vaste public a pu découvrir une salle de six mille places et admirer la pantomime équestre 'Vercingétorix'.",
    "paragraphs": [
      "Le nouvel Hippodrome parisien, sis place Clichy, a été inauguré hier avec un grand succès. L'établissement, doté d'une capacité de six mille places, propose un spectacle grandiose incluant des numéros d'acrobatie et la pantomime équestre 'Vercingétorix', magistralement réglée par MM. Jemet et Clérice."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Théâtre",
    "title": "Courrier des théâtres",
    "summary": "Dernières nouvelles des scènes parisiennes : la Comédie-Française prépare 'Les Fossiles', la Renaissance change de propriétaire et la Gaîté suspend ses activités pour répétitions.",
    "paragraphs": [
      "La Comédie-Française prépare activement la première de 'Les Fossiles' pour le 21 mai. Le théâtre de la Renaissance a été acquis par M. G. de Lagoanère pour une durée de dix ans. Enfin, le théâtre de la Gaîté fera relâche afin de permettre les répétitions de 'Rip'."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Causerie financière",
    "title": "Le marché financier et les cours de la semaine",
    "summary": "Le marché financier demeure calme et expectant, caractérisé par des fluctuations modérées dues aux ajustements de la spéculation. Les fonds d'État et coloniaux affichent une stabilité relative.",
    "paragraphs": [
      "Le marché financier a gardé son attitude expectante et calme. Ses fluctuations quotidiennes n'ont jamais pris beaucoup d'ampleur et elles ont eu surtout pour cause les allégements que la spéculation a cru devoir pratiquer.",
      "Le 3%, qui a été compensé le 1er mai et qui, samedi dernier, finissait à 101,10, a son dernier cours à 101,05. L'Amortissable clôture à 99,35, le 3 1/2 % à 101,15. Les fonds coloniaux sont sans variations importantes."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Causerie financière",
    "title": "Informations sur les obligations du Crédit foncier",
    "summary": "Le Crédit foncier enregistre une forte activité sur ses obligations. Le titre 1899, particulièrement recherché pour les placements de fonds dotaux et de mineurs, est disponible sans frais de transfert.",
    "paragraphs": [
      "Les obligations du Crédit foncier ont un marché très actif et très soutenu. Le Crédit foncier a décidé d'autoriser la libération intégrale de ces titres pendant tout le mois en cours.",
      "Les obligations foncières 3% 1899 sont recherchées. Ce titre est de premier ordre et désigné d'une façon toute particulière pour les emplois de fonds dotaux, placement des mineurs, des communes, etc. Le Crédit foncier le délivre actuellement à ses guichets, au choix du demandeur, sous la forme au porteur ou sous la forme nominative, sans frais de transfert."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Causerie financière",
    "title": "Fonds d'État étrangers et valeurs de crédit",
    "summary": "Le marché des fonds étrangers reste peu animé. Le Crédit Lyonnais augmente son capital, tandis que le Comptoir d'Escompte affiche de la fermeté et la Banque de Paris et des Pays-Bas annonce un dividende en hausse.",
    "paragraphs": [
      "Les transactions ont été assez peu animées sur les fonds d'État étrangers ; ils se retrouvent, en général, un peu au-dessous de leurs cours précédents.",
      "Le Crédit Lyonnais a tenu son assemblée générale extraordinaire à Lyon sous la présidence de M. Germain. Il a été décidé que le capital serait porté à 250 millions par la création d'actions nouvelles. Les réserves s'élèveront à 100 millions.",
      "Le Comptoir d'Escompte est très ferme. Nous rappelons aux intéressés que le délai fixé pour la souscription aux actions nouvelles expire le mardi 15 courant.",
      "L'assemblée annuelle de la Banque de Paris et des Pays-Bas a eu lieu le 9 mai, annonçant un dividende de 55 francs par action. L'établissement a largement participé au développement financier de diverses institutions en Belgique et en Italie."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Chemins de fer et valeurs industrielles",
    "title": "Chemins de fer et valeurs industrielles",
    "summary": "Les chemins de fer progressent malgré des dépenses accrues. Le secteur du gaz acétylène est en pleine expansion et les valeurs industrielles russes, notamment l'Oural-Volga, suscitent un intérêt constant.",
    "paragraphs": [
      "Les chemins de fer français semblent décidément entrés dans la période des fortes plus-values. Cependant, ces résultats très favorables n'ont pu être obtenus sans une forte progression des dépenses.",
      "La Compagnie Urbaine d'Éclairage par le Gaz Acétylène informe que les bénéfices de cette année sont en augmentation considérable. Les appareils portatifs pour l'éclairage des chantiers connaissent une généralisation rapide.",
      "Les valeurs industrielles russes ont donné lieu à un courant régulier de transactions, notamment pour l'Oural-Volga et la Joltaïa Rieka, qui semble avantageuse à mettre en portefeuille."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Faits divers",
    "title": "Un départ pour Terre-Neuve",
    "summary": "Malgré un épais brouillard, l'effervescence règne à Saint-Malo alors que les familles font leurs adieux aux marins-pêcheurs, prêts à mettre le cap vers les bancs de Terre-Neuve.",
    "paragraphs": [
      "Saint-Malo est en grande animation, en dépit d'un brouillard épais qui retarde la mise à la voile. Les femmes des villages voisins sont en train de faire leurs adieux à leurs maris, en leur souhaitant un prompt et heureux retour, car la flottille de bateaux de pêche est sur le point de lever l'ancre pour faire voile vers Terre-Neuve."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Revue commerciale",
    "title": "État des récoltes et marchés agricoles",
    "summary": "Des pluies bénéfiques favorisent les cultures. Aux États-Unis, le blé d'hiver affiche de belles perspectives. Les huiles de colza connaissent une hausse notable, tandis que le houblon s'affermit.",
    "paragraphs": [
      "Cette semaine, nous avons enregistré des pluies abondantes, accompagnées d'orages dans de nombreuses régions. Les céréales et les prairies profiteront largement de cette humidité bienfaisante.",
      "Le bureau de l'Agriculture de Washington a publié son rapport au 1er mai sur les perspectives des récoltes aux États-Unis. La condition du blé d'hiver, ainsi que la surface ensemencée, sont supérieures à celles de l'année dernière.",
      "Les huiles de colza ont fait l'objet d'affaires actives et les prix ont haussé très sensiblement. Les sucres sont demeurés plus calmes, tandis que les houblons montrent une tendance à la hausse sur les sortes de choix."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Sport",
    "title": "Concours de tir et de gymnastique",
    "summary": "Nice se prépare pour la fête fédérale de gymnastique grâce au soutien du Conseil général. Parallèlement, l'activité s'intensifie pour le concours de tir de Satory et les compétitions en province.",
    "paragraphs": [
      "Le Conseil général des Alpes-Maritimes vient de voter une subvention en l'honneur de la fête fédérale de l'Union des sociétés de gymnastique qui doit se tenir à Nice.",
      "L'organisation du concours international de tir de Satory est en pleine activité. De nombreux concours sont annoncés dans diverses localités, notamment à Alger, Bolbec et Roubaix, offrant des prix en espèces et en nature aux participants."
    ]
  }
];
