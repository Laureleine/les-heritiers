// Date: 1901-01-10
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-01-10 (Version Restaurée, 40 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique",
    "title": "Les transformations de Paris",
    "summary": "Le Champ de Mars, témoin historique de nos gloires militaires et de nos Expositions, s'apprête à faire place à des jardins. Un changement qui invite à respecter le passé pour mieux préparer l'avenir de la capitale.",
    "paragraphs": [
      "Il y a quelques jours, à propos de la démolition projetée d'une partie de l'enceinte fortifiée de Paris, nous évoquions les souvenirs qui se rattachaient à ces murs qui vont peut-être tomber sous la pioche des démolisseurs.",
      "Voici qu'on nous annonce, pour le jour où les derniers vestiges de l'Exposition qui vient de finir auront disparu, un nouveau changement dans l'aspect de tout un quartier de Paris : le Champ de Mars, cette vaste plaine sablonneuse où, pendant notre enfance, nous voyions évoluer les troupes de la garnison parisienne, où tant d'événements de notre histoire se sont déroulés, sera transformé à son tour et l'on dit que des jardins et des squares prendront la place des monuments abattus.",
      "Le premier événement marquant dont le Champ de Mars fut le théâtre est la défaite des Normands par Eudes, fils de Robert le Fort. Plus tard, le site devint un champ de manœuvres, puis le lieu de fêtes nationales, notamment lors de la Révolution et sous l'Empire.",
      "Depuis lors, le Champ de Mars a offert sa vaste plaine sablonneuse aux manifestations pacifiques, accueillant plusieurs Expositions. Il paraît que la pelouse des gazons recouvrira tous ces grands souvenirs. Respecter le passé, c'est préparer l'avenir."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille",
    "summary": "Dans un établissement élégant, le vicomte Gaston de Rieux et ses compagnons mondains observent les convives avec une arrogance dédaigneuse tout en échafaudant leurs prochaines intrigues galantes.",
    "paragraphs": [
      "L'échine du maître d'hôtel s'en arrondit encore et devint plus souple, ce qu'on aurait pu croire impossible, et les jeunes gens de la table voisine s'entre-regardèrent avec un sourire élogieux pour l'amphitryon de la petite dame en deuil.",
      "Maintenant que son plan était arrêté, il avait repris son flegme en apparence imperturbable. Les autres prirent le même parti, et après avoir examiné à loisir ces deux bizarres étrangers, ils se remirent à parler de leurs petites affaires.",
      "Le vicomte Gaston de Rieux propose à ses compagnons d'aller admirer une « merveille » : une caissière dans une buvette élégante. Le jeune Champinelle, qui finance la soirée, les suit dans leurs aventures mondaines et galantes."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "France et Russie",
    "summary": "Échanges de télégrammes cordiaux entre M. Delcassé et le comte Lamsdorff, confirmant la volonté commune de la France et de la Russie de consolider l'amitié invariable qui unit les deux nations.",
    "paragraphs": [
      "Les télégrammes suivants ont été échangés entre les ministres des Affaires étrangères de France et de Russie.",
      "M. Delcassé adresse ses félicitations au comte Lamsdorff pour sa nomination, espérant une collaboration étroite. M. Lamsdorff répond en confirmant son désir de consolider l'amitié invariable qui unit les deux pays."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "L'œuvre de la session",
    "summary": "La Chambre entame une session décisive axée sur l'apaisement politique et la réalisation de réformes sociales concrètes pour protéger l'enfance et soulager la misère des vieillards.",
    "paragraphs": [
      "La Chambre a constitué son bureau dans sa première séance. Ces cinq mois, que la Constitution assure au Parlement, seront décisifs pour la législature actuelle.",
      "Maintenant, rien ne fait obstacle au labeur utile et pratique. Le calme règne dans le pays, et les passions s'éteignent faute d'aliments. Il faut souhaiter que des interpellations à tout propos ne viennent pas disputer aux choses utiles des heures précieuses.",
      "La République ne déserte aucune des idées généreuses dont les républicains d'autrefois étaient les apôtres. Ce qu'il s'agit d'accomplir, c'est de réaliser dans nos lois la pratique de ces vertus, de lutter contre la souffrance et la misère, de protéger l'enfance et de soulager la vieillesse."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Marine",
    "title": "Sous-marins et submersibles",
    "summary": "Suite aux expériences concluantes du Morse et du Narval à Cherbourg, la France confirme sa supériorité technique et militaire dans le domaine novateur de la navigation sous-marine.",
    "paragraphs": [
      "Nous avons donné hier un compte rendu sommaire des expériences qui ont eu lieu à Cherbourg avec le sous-marin Morse et le submersible Narval ; ces expériences avaient pour but de déterminer la valeur de ces deux engins au point de vue militaire.",
      "Le Morse est un sous-marin proprement dit : il ne navigue qu'au moyen d'accumulateurs et totalement ou presque totalement immergé. Le Narval, lui, est un submersible dont la manœuvre est plus longue et complexe.",
      "Les résultats de cette journée sont très importants, car ils démontrent la valeur militaire certaine de ces engins de guerre. Aujourd'hui, la France possède sans contestation possible le sous-marin."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Tués sur la voie",
    "summary": "Un tragique accident est survenu cette nuit en gare d'Enghien : un couple de septuagénaires a été mortellement percuté par un train de marchandises en tentant de traverser les voies plutôt que d'emprunter la passerelle.",
    "paragraphs": [
      "Un déplorable accident, dû à l'imprudence des deux personnes qui en ont été les victimes, s'est produit la nuit dernière sur la ligne du Nord, en gare d'Enghien.",
      "M. Auguste Leblond, âgé de soixante-seize ans, et sa femme attendaient à la gare pour prendre un train. Souhaitant éviter la passerelle, ils ont tenté de traverser les voies et ont été percutés par un train de marchandises venant d'Ermont.",
      "Malgré les secours prodigués, Mme Leblond est décédée et l'état de son mari, transporté à l'hôpital, est jugé désespéré."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Actualité internationale",
    "title": "En Abyssinie",
    "summary": "L'envoyé spécial du Négus, après avoir été reçu avec honneur au palais de l'Élysée, regagne Harrar. Le gouvernement éthiopien renforce la surveillance militaire le long de la ligne de chemin de fer.",
    "paragraphs": [
      "Notre correspondant à Djibouti rapporte le retour de France à Harrar, en Abyssinie, de l'envoyé spécial du Négus, qui a été reçu au palais de l'Élysée.",
      "Par surcroît de précautions, de nouveaux soldats sont envoyés par Addis-Abeba le long de la ligne."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Incendie d'un théâtre",
    "summary": "Le théâtre municipal de Bagnères a été entièrement détruit par un violent incendie ce matin. Malgré l'intervention des pompiers, seul le gros œuvre subsiste. Aucune victime n'est à déplorer.",
    "paragraphs": [
      "Un violent incendie a détruit ce matin, vers cinq heures, le théâtre municipal de Bagnères, endommageant fortement les maisons voisines. Il ne reste rien de ce vieil édifice que les murs.",
      "Les pompiers locaux ont fait tout leur devoir, mais n'ont pu sauver le bâtiment. Aucune victime n'est à déplorer, mais les causes du sinistre demeurent inconnues."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un paquebot en péril",
    "summary": "La situation critique du paquebot La Russie semble s'améliorer. Grâce aux opérations de sauvetage en mer, le débarquement des passagers est espéré pour cette nuit ou demain matin.",
    "paragraphs": [
      "La situation du paquebot La Russie, qui était fort critique hier soir, semble s'améliorer. Plusieurs tentatives de sauvetage ont été effectuées par divers bateaux, malgré l'état de la mer.",
      "Un navire a pu aborder le paquebot. Le capitaine et ses officiers sont en sécurité sur la passerelle. On considère que le péril diminue et, selon toute probabilité, le débarquement des passagers pourra s'effectuer cette nuit ou demain matin."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un Lieu Maudit",
    "summary": "Le récent naufrage souligne la dangerosité persistante de ces eaux. L'absence de mise en place effective des mesures de sauvetage promises par les autorités est vivement déplorée.",
    "paragraphs": [
      "Cet accident, qui a failli devenir un naufrage, s'est produit à quelques lieues du rivage, au même endroit où eurent lieu précédemment les sinistres du Falteas et de l'Amélie. Ces événements, par leur similitude, rendent la navigation en ces lieux particulièrement périlleuse.",
      "Il apparut, lorsqu'il fut trop tard, que le paquebot en détresse se trouvait à proximité de ce point sinistre, situé à quatre lieues au nord.",
      "À l'époque où se produisirent les accidents dont nous parlons plus haut, l'opinion publique fut surexcitée. De toutes parts, on réclama des garanties aux administrations ; on parla d'établir de nouveaux services et d'installer un outillage de sauvetage sur des points déterminés, sous forme de canons porte-amarres et de canots insubmersibles. Mais, l'émotion calmée et le beau temps revenu, on ne fit rien ou peu de chose, et l'événement vient de prouver une fois de plus combien il faut regretter ce manque de prévoyance."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Navigation",
    "title": "Le vapeur La Russie",
    "summary": "Le paquebot La Russie, navire postal récemment lancé à Sunderland, fait l'objet d'une opération de secours organisée par l'amiral Besson et le croiseur d'Entrecasteaux.",
    "paragraphs": [
      "Le vapeur La Russie est un navire de construction récente, lancé à Sunderland et affecté à la ligne postale.",
      "Voici ses principales caractéristiques : longueur entre perpendiculaires, 85m76 ; largeur au fort, 11m ; creux au fort supérieur, 6m62 ; tonnage brut, 1721 tonneaux ; tonnage net, 623 tonneaux ; force de la machine, 2000 chevaux.",
      "Il possède trois ponts complets, six compartiments étanches et des water-ballasts.",
      "Le ministre de la Marine a reçu du vice-amiral de Maigret, commandant en chef de l'escadre de la Méditerranée, la dépêche suivante : « Sur la demande de l'amiral Besson, qui m'est transmise par le préfet maritime, j'envoie le croiseur d'Entrecasteaux pour être prêt à porter au paquebot La Russie les premiers secours. »"
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Les événements de Chine",
    "summary": "À Pékin, les négociations diplomatiques s'enlisent. L'impératrice douairière temporise et la maladie de Li-Hung-Chang est perçue comme une manœuvre pour gagner du temps.",
    "paragraphs": [
      "La note rédigée par les représentants des puissances et envoyée aux plénipotentiaires chinois, le prince Ching et Li-Hung-Chang, pour approbation par la cour impériale, n'est pas encore signée et risque de ne pas l'être avant longtemps.",
      "L'impératrice douairière s'efforce de traîner les choses en longueur, espérant sans doute lasser les puissances et leur montrer combien sont inutiles leurs réclamations, même appuyées par les canons.",
      "À Pékin, beaucoup croient que la maladie de Li-Hung-Chang est purement diplomatique et qu'en laissant accréditer le bruit qu'il est réellement souffrant, il cherche à gagner du temps pour attendre de nouvelles instructions de la cour avant d'apposer sa signature sur l'accord international."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Situation au Cap et au Transvaal",
    "summary": "La situation militaire au Cap se dégrade face à l'avancée des Boërs, tandis que le général Kitchener intensifie sa tactique de terre brûlée dans les environs de Pretoria.",
    "paragraphs": [
      "D'heure en heure, la situation des Anglais au Cap va en s'aggravant. L'avant-garde boër n'est plus qu'à une vingtaine de milles de Piquetsberg, où les volontaires hâtivement levés à Capetown vont s'efforcer d'arrêter sa marche.",
      "Au Transvaal, le général Kitchener, avec sa coutumière barbarie, transforme systématiquement en désert les environs de Pretoria, en vue d'affamer les Boërs qui tiennent la campagne."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Explosion dans une carrière",
    "summary": "Une tragique explosion dans les exploitations de terre glaise de Mont-Saint-Père a causé la mort de deux ouvriers, retrouvés carbonisés au fond d'un puits par les secours.",
    "paragraphs": [
      "Une terrible catastrophe s'est produite dans les importantes exploitations de terre glaise de Mont-Saint-Père, près de Château-Thierry.",
      "C'est dans un puits, où se trouvaient à quarante mètres de profondeur les ouvriers Mariol, âgé de dix-neuf ans, et Hermea, que l'explosion a eu lieu.",
      "Plusieurs heures après, un nommé Dantielle et le curé de la commune descendirent dans le puits et parvinrent auprès des victimes, qu'ils retrouvèrent complètement ensevelies et carbonisées."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique Intérieure",
    "title": "Travaux parlementaires",
    "summary": "Le Sénat procède aujourd'hui à l'élection de son bureau avec M. Fallières pour candidat unique. La Chambre des députés installe M. Deschanel à sa présidence cet après-midi.",
    "paragraphs": [
      "Toute la séance du Sénat sera consacrée aujourd'hui à la nomination des membres du bureau. M. Fallières, président sortant, étant seul candidat, les résultats du scrutin pour la présidence seront promptement connus.",
      "La Chambre, qui a pu, avant-hier, constituer tout son bureau, procédera dès le début de la séance de cet après-midi à l'installation de son président, M. Deschanel."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Social",
    "title": "Les peintres en bâtiment",
    "summary": "Les peintres en bâtiment pourraient bientôt obtenir l'interdiction du blanc de céruse, un produit hautement toxique. Le ministre du Commerce étudie les modalités de cette réforme sanitaire nécessaire à la santé des ouvriers.",
    "paragraphs": [
      "Grâce à des efforts méritoires, nos peintres en bâtiment sont peut-être à la veille d'obtenir la suppression de l'emploi du blanc de céruse dans les travaux de badigeon des bâtiments.",
      "Les chimistes ont énuméré les effets pernicieux de la manipulation et de l'utilisation du blanc de céruse, condamnant son usage comme dangereux au suprême degré pour l'ouvrier.",
      "Le ministre du Commerce a promis de faire étudier le mode d'application de la réforme."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Crime de jalousie au Havre",
    "summary": "Un drame passionnel a secoué la ville du Havre : Marie Wamiker a été grièvement blessée par son ancien amant, Alexandre Michel, qui a ensuite tenté de mettre fin à ses jours.",
    "paragraphs": [
      "Un terrible drame, ayant la jalousie pour mobile, vient de se dérouler au Havre. Marie Wamiker a été grièvement blessée par son ancien amant, Alexandre Michel, qui a ensuite tenté de se suicider."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Politique",
    "title": "Session du Conseil Municipal",
    "summary": "Le Conseil municipal siégera vraisemblablement pour sa prochaine session du 18 au 24 janvier. Les détails concernant les affaires scolaires seront précisés par le bureau.",
    "paragraphs": [
      "Nous avons annoncé que le conseil municipal tiendrait une session la seconde quinzaine de janvier ; il est probable qu'elle aura lieu du vendredi 18 au jeudi 24, bien que le conseil municipal ait demandé, au nom du bureau, de fixer les principes du stage scolaire pour le mercredi 16 janvier."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Éducation",
    "title": "Bourses de lycées et collèges",
    "summary": "Le ministre de l'Instruction publique fixe les dates des examens de bourses. Une mesure nouvelle impose désormais un stage préalable de six mois dans un établissement public pour les candidats du cycle élémentaire.",
    "paragraphs": [
      "Le ministre de l'Instruction publique vient de fixer la date des examens d'aptitude aux bourses des lycées et collèges au 1er avril prochain pour les jeunes garçons, et au 18 avril pour les jeunes filles.",
      "Les inscriptions à ces examens seront reçues au secrétariat de chaque préfecture, du 1er au 20 mars prochain.",
      "Pour la première fois, l'arrêté ministériel impose que tous les candidats aux bourses de toute classe élémentaire devront justifier d'un stage de six mois au moins dans un lycée ou un collège de l'État.",
      "Aucun stage n'est exigé des candidats n'appartenant pas au cycle élémentaire."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Exposition",
    "title": "Adjudication de la porte monumentale de l'Exposition",
    "summary": "La porte monumentale de l'Exposition a été adjugée à un marchand de vieux vitraux. Le démantèlement des imposants matériaux devra être finalisé d'ici deux mois pour libérer le cours la Reine.",
    "paragraphs": [
      "La porte monumentale de l'Exposition a été mise en adjudication hier. Un marchand de vieux vitraux s'en est rendu acquéreur moyennant finances. D'ici deux mois, il devra avoir tout enlevé et l'entrée du cours la Reine devra être remise en état.",
      "Les affiches d'adjudication annonçaient que la porte monumentale comprenait 210 000 kilogrammes de fer, 1 500 mètres cubes de bois, 100 mètres cubes de pierres meulières, 150 mètres cubes de briques, 310 mètres carrés de pavé, ainsi que divers dallages et cabochons de verre coloré.",
      "Dans cette énumération, pas même une mention spéciale pour la Parisienne."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Démissions et décès",
    "summary": "Des rumeurs de démission concernant M. Émile Molinier, conservateur du Louvre, sont démenties. Par ailleurs, la presse annonce le décès de M. Maurice Block, éminent académicien des sciences morales et politiques.",
    "paragraphs": [
      "Le bruit de la démission de M. Émile Molinier, conservateur du musée du Louvre, a couru dans la journée d'hier, mais il ne s'est pas confirmé.",
      "On annonce la mort, à l'âge de quatre-vingt-quatre ans, de M. Maurice Block, membre de l'Académie des sciences morales, auteur de nombreux travaux d'économie politique et de statistique très appréciés."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "État de santé du général Lambert",
    "summary": "L'état de santé du général Lambert, sénateur et héros des dernières cartouches, suscite les plus vives inquiétudes après une consultation médicale d'urgence tenue hier soir.",
    "paragraphs": [
      "Le héros des dernières cartouches, le général Lambert, sénateur, est actuellement dans un état de santé très alarmant.",
      "Hier soir, une consultation de plusieurs médecins a eu lieu et on éprouve les plus vives inquiétudes dans l'entourage du glorieux soldat."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Société",
    "title": "Conférence à la Société de Géographie",
    "summary": "M. Charles-Eudes Bonin, vice-résident en mission, présentera demain soir devant la Société de géographie le récit détaillé de ses récentes explorations à travers la Chine et l'Asie centrale.",
    "paragraphs": [
      "Demain vendredi, à huit heures et demie du soir, la Société de géographie recevra M. Charles-Eudes Bonin, vice-résident en mission, qui fera le récit de sa dernière exploration à travers la Chine et l'Asie centrale (1898-1900)."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le chat le plus précieux du monde",
    "summary": "Selon un magazine londonien, un habitant du New-Jersey nommé M. Charles Wood possèderait un superbe angora français répondant au nom de Napoléon-Premier, dont la valeur serait exceptionnelle.",
    "paragraphs": [
      "La personne qui possède le chat le plus précieux du monde, d'après un magazine de Londres, serait M. Charles Wood, du New-Jersey.",
      "Cet animal est un superbe angora français du nom de Napoléon-Premier, ayant une valeur considérable."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Terrible méprise à Faucigny",
    "summary": "Un drame domestique a frappé Faucigny : une jeune fille de dix-huit ans a tragiquement succombé après avoir confondu, par une fatale méprise nocturne, un remède dentaire avec un poison violent.",
    "paragraphs": [
      "Un grand malheur vient de plonger dans le deuil une honorable famille de Faucigny. Un fermier, dont le poulailler était continuellement dévalisé par les renards, se décida à s'en débarrasser et fit l'acquisition d'un poison excessivement violent. En même temps, sa jeune fille, âgée de dix-huit ans, était atteinte d'insupportables maux de dents. Un médecin, consulté, prescrivit un calmant.",
      "Par une inconcevable imprudence, le poison et le remède furent placés l'un près de l'autre sur la cheminée de la cuisine.",
      "Pendant la nuit, la malheureuse enfant fut harcelée par la douleur. Elle se leva et, à tâtons, saisit sur la cheminée le flacon qu'elle croyait contenir le remède, versa quelques gouttes du liquide sur la dent malade et se recoucha.",
      "Elle s'était trompée de flacon. Le foudroyant poison accomplit son œuvre et, un quart d'heure après, sous les yeux de ses parents désespérés et impuissants, Mlle R. rendait le dernier soupir."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident à la gare du Nord",
    "summary": "Un accident s'est produit ce matin en gare du Nord lorsqu'un train a heurté le butoir de la voie 20. Si les voyageurs sont indemnes, le mécanicien, M. Lequen, a été grièvement blessé. Une enquête est ouverte.",
    "paragraphs": [
      "Un accident d'une certaine gravité s'est produit dans la matinée d'hier en gare du Nord. Un train de voyageurs, faute de freinage suffisant, est allé heurter violemment le butoir à l'extrémité de la voie n° 20.",
      "Le choc fut violent, brisant des vitres et projetant les passagers ; heureusement, il y eut plus de peur que de mal. Aucun des voyageurs n'a été grièvement blessé ; seul le conducteur du train, M. Lequen, a été sérieusement atteint.",
      "M. Mittelhauser, commissaire spécial, a ouvert une enquête sur les circonstances de cet événement."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Justice",
    "title": "Affaire de l'homme coupé en morceaux",
    "summary": "Trois individus, suspectés d'avoir déplacé des restes humains dans l'affaire de l'homme coupé en morceaux, ont été disculpés du meurtre mais seront jugés pour une série de cambriolages.",
    "paragraphs": [
      "Lors des premières investigations sur la découverte des fragments du cadavre de l'homme coupé en morceaux, trois individus furent arrêtés pour avoir déplacé le paquet contenant le tronc. Bien que reconnus innocents du crime, ils devront répondre devant le tribunal correctionnel de nombreux exploits de cambriolage."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Justice",
    "title": "Arrestation d'un contumax",
    "summary": "Louis Jourde, condamné par contumace à vingt ans de travaux forcés pour faux, a été appréhendé à Bordeaux à la suite d'une demande de licence de débit de boisson.",
    "paragraphs": [
      "Louis Jourde, un ancien maréchal-ferrant condamné à vingt ans de travaux forcés par contumace pour faux, a été arrêté à Bordeaux après avoir été reconnu à l'occasion d'une demande de licence de débit de boisson."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les indélicatesses d'un maître d'hôtel",
    "summary": "Le maître d'hôtel d'une riche propriétaire du boulevard Haussmann a été arrêté pour le vol de dix mille francs. La sûreté recherche le butin caché en banlieue.",
    "paragraphs": [
      "Mme B., propriétaire boulevard Haussmann, s'est fait soustraire dix mille francs et divers objets par son maître d'hôtel, Louis S. Le domestique, arrêté par la Sûreté, nie les faits, mais une perquisition a été ordonnée dans la banlieue où il aurait pu enfouir son butin."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie rue de Montmorency",
    "summary": "Un incendie s'est déclaré hier soir au domicile du banquier M. Lyon-Allemand. Les sapeurs-pompiers de la caserne Sévigné ont rapidement maîtrisé le sinistre.",
    "paragraphs": [
      "Le feu s'est déclaré hier soir chez M. Lyon-Allemand, banquier. Les sapeurs-pompiers de la caserne Sévigné se sont rendus maîtres des flammes après quelques minutes de travail acharné."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de vol et agression sur la Seine",
    "summary": "Un mécanicien, agressé par deux individus sur la passerelle de Passy, s'est défendu avec vigueur, parvenant à précipiter l'un de ses agresseurs dans le fleuve tandis que le complice prenait la fuite.",
    "paragraphs": [
      "Un ouvrier mécanicien a déclaré à la police avoir été agressé, cette nuit, sur la passerelle de Passy par deux individus malintentionnés. Pour se défendre contre cette agression brutale, il a précipité l'un de ses assaillants dans la Seine, tandis que le second parvenait à prendre la fuite dans l'obscurité."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Justice",
    "title": "Falsificateurs de reconnaissances",
    "summary": "Un couple, Jules Moinet et Marie Cornu, a été appréhendé pour une série de falsifications de reconnaissances du Mont-de-Piété, destinées à escroquer divers commerçants de la capitale.",
    "paragraphs": [
      "La police a procédé à l'arrestation d'un couple, nommé Jules Moinet et Marie Cornu. Ils sont accusés d'avoir falsifié plusieurs reconnaissances du Mont-de-Piété dans le but d'en revendre la valeur frauduleuse à des commerçants parisiens, abusés par ces faux titres."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes limitrophes",
    "summary": "Chronique des incidents judiciaires et sociaux en banlieue : vols, accidents et drames divers témoignent de l'activité intense et mouvementée des communes environnant Paris.",
    "paragraphs": [
      "Divers incidents ont été rapportés dans la banlieue : une bohémienne est activement recherchée à Courbevoie pour vols, un accident d'enfant s'est produit à Clichy, et un décès par asphyxie a été constaté à Levallois-Perret.",
      "On signale également un effondrement de mur à La Garenne-Colombes, une tentative de suicide à Colombes, la présence d'un chien enragé à la Plaine-Saint-Denis, ainsi qu'une agression au couteau à Saint-Denis.",
      "À noter encore : un accident de charretier à Pantin, un décès accidentel dans un escalier au Pré-Saint-Gervais, un accident de cheval à Saint-Mandé, des noces d'or célébrées à Ivry, une tentative de suicide au Kremlin-Bicêtre, un épicier retrouvé inanimé à Saint-Cloud, un incendie à Saint-Germain-en-Laye, une asphyxie à Beaumont-sur-Oise, une tentative d'assassinat à Dourdan et, enfin, l'arrestation d'un meurtrier à Coulommiers."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Marchés agricoles",
    "title": "Bulletin Commercial des Blés et Issues",
    "summary": "Le marché des blés affiche une tendance à la baisse cette semaine. Malgré une fréquentation notable, les transactions demeurent laborieuses et les cours fléchissent par rapport à la semaine précédente.",
    "paragraphs": [
      "Il y avait passablement de monde sur la place et les demandes étaient assez nombreuses. Toutefois, les affaires ont été très difficiles et les prix s'inscrivent en recul par rapport à ceux d'il y a huit jours.",
      "La culture du rayon de Paris traitait ses blés de 19,25 à 19,75 francs, selon la qualité présentée.",
      "Issues : On cote le gros son de 14 à 15 francs les 100 kilos, gare Paris."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Agriculture",
    "title": "Pommes de terre",
    "summary": "La rigueur du froid à Paris stimule vivement la consommation de pommes de terre. Face à la rareté des arrivages de légumes verts, les détenteurs maintiennent des prétentions de prix élevées.",
    "paragraphs": [
      "Paris, 9 janvier : Ce matin, les demandes étaient nombreuses, les grands froids ayant sensiblement activé la consommation. De plus, les légumes verts provenant des environs se font de plus en plus rares.",
      "Les détenteurs, conscients de la situation, maintenaient des prétentions élevées. Ils ont vendu la variété rouge de 9 à 9,25 francs au départ, ou à la parité de 9,50 à 9,75 francs gare Paris."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Santé",
    "title": "Témoignage de guérison par l'Élixir de Peyroux",
    "summary": "Mme V. Duport, de Thiembronne, relate sa guérison complète d'une affection pulmonaire chronique, persistante depuis 1892, grâce à l'usage méthodique de l'Élixir de Peyroux débuté en 1898.",
    "paragraphs": [
      "Mme V. Duport, née à Thiembronne (Nord), était de santé délicate, marquée par une poitrine fragile et un tempérament lymphatique.",
      "En 1892, une bronchite à la base du poumon gauche ne put être guérie complètement. De 1892 à 1897, elle subit chaque hiver des récidives bronchiques dont les symptômes s'aggravèrent progressivement.",
      "Elle respirait péniblement, souffrant d'étouffements et d'accès d'oppression fréquents. La nuit, le sommeil était difficile et accompagné de quintes de toux creuse et violente.",
      "Lorsqu'elle se décida à employer l'Élixir de Peyroux, elle ressentit un soulagement notable après un mois de traitement. Le 10 janvier 1898, elle était, selon son témoignage, complètement guérie."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Cours des denrées du 9 janvier",
    "summary": "Relevé officiel des mercuriales au 9 janvier : le prix des suifs frais fondus à 48 degrés est établi à 50 francs les 100 kilos, tandis que la fécule de premier grain se négocie entre 21 et 22 francs à Paris.",
    "paragraphs": [
      "Le cours officiel des suifs frais fondus, toutes provenances, titrant 48 degrés, est fixé à 50 francs les 100 kilos, hors Paris.",
      "La cote pour la fécule de premier grain à Paris varie de 21 à 22 francs."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Agriculture",
    "title": "Marché des fourrages",
    "summary": "Compte-rendu du marché de Paris-La Chapelle au 9 janvier : activité ordinaire avec 90 voitures. Les prix des pailles restent fermes, tandis que les fourrages subissent un fléchissement des cours.",
    "paragraphs": [
      "Paris-La Chapelle, 9 janvier : Marché ordinaire. Environ 90 voitures de paille et de fourrages ont été recensées. Les prix demeurent soutenus sur les pailles, tandis qu'ils sont plus faibles sur les fourrages.",
      "Le tout est livré dans Paris, au domicile de l'acheteur, frais de camionnage et droits d'entrée compris par lots de 500 kilos."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Finance",
    "title": "Loterie des enfants tuberculeux",
    "summary": "Appel à la générosité publique pour la loterie en faveur des enfants tuberculeux : 1 253 lots offerts, dont un premier prix de 100 000 francs, sur une dotation totale de 651 400 francs.",
    "paragraphs": [
      "Les derniers billets sont actuellement en vente. Il est conseillé aux personnes en possédant déjà d'en acquérir de nouveaux pour soutenir l'œuvre.",
      "La dotation s'élève à 100 000 francs pour le premier lot, 50 000 francs pour le second et 10 000 francs pour le troisième, soit un total de 1 253 lots pour une valeur globale de 651 400 francs."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Transport",
    "title": "Départs et arrivées des paquebots",
    "summary": "Informations maritimes du 9 janvier : le paquebot 'Congo' a quitté Dakar le 6 pour le Sénégal et le Brésil, et le 'Bretagne' a atteint New-York le 8 janvier.",
    "paragraphs": [
      "Le paquebot 'Congo', à destination du Sénégal et du Brésil, a quitté le port de Dakar le 6 janvier, à 18 heures.",
      "Le paquebot 'Bretagne', en provenance du Havre, est arrivé à New-York le 8 janvier, à 14 heures."
    ]
  }
];
