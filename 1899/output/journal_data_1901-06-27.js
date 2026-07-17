// Date: 1901-06-27
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-06-27 (Version Restaurée, 40 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique Internationale",
    "title": "L'Alliance française et l'Université de Chicago",
    "summary": "Le consul de France, M. Mérou, et le président Harper institutionnalisent la diffusion de la culture française à l'Université de Chicago, renforçant les liens intellectuels entre les deux Républiques.",
    "paragraphs": [
      "Si différentes qu'elles soient d'aspect, de langue et de race, il est évident que les deux Républiques qui se regardent d'un peu loin à travers l'Océan, la République française et la République des États-Unis, ont de nombreux points de rapprochement et de fréquentes velléités de se mieux connaître pour s'apprécier mieux.",
      "Nous avons à Chicago un consul dévoué, M. Mérou, qui, depuis plusieurs années, s'est occupé de fonder et de développer un comité local de l'Alliance française. D'autre part, il y a à Chicago une Université gouvernée par un président d'un mérite exceptionnel, M. Harper.",
      "Le consul et le président ont signé un document intitulé « L'Alliance française (section de Chicago) en coopération avec l'Université de Chicago », équivalant à un traité pour organiser des cours publics, répandre la langue et l'histoire française, et renforcer les liens intellectuels entre les deux nations.",
      "Cette œuvre est soutenue par des personnalités locales et a reçu le concours de l'ambassadeur de France, M. Cambon, lors d'une visite officielle marquée par des fêtes et banquets célébrant l'amitié franco-américaine."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Deux Aimées : La Faute d'une Mère",
    "summary": "À la veille de son mariage, Sybille se prépare sous l'œil de Madame de Baudreuil. Cette dernière s'apprête à révéler à Philippe des secrets accablants sur le passé de son fils disparu, Christian.",
    "paragraphs": [
      "Tout était adorable, d'une simplicité superbe qui faisait ressortir la distinction et la grâce de Sybille. On fit les derniers essayages. Le mariage civil devait avoir lieu dans deux jours.",
      "Madame de Baudreuil, préoccupée, demande à Sybille d'aller se reposer pour être fraîche le lendemain, tout en invitant Philippe à rester pour discuter de choses graves.",
      "Une fois seul avec la comtesse, Philippe découvre sa bienfaitrice en proie à une profonde tristesse en évoquant le souvenir de son fils perdu, Christian. La comtesse lui confie qu'elle doit lui révéler des secrets du passé et lui confier une mission impérative liée au vœu de son fils décédé."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des Ministres",
    "summary": "Présidé par M. Loubet, le Conseil des ministres a fixé les élections départementales au 21 juillet, prorogé la session du conseil général de la Seine et examiné le projet sur les retraites ouvrières.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin à l'Élysée, sous la présidence de M. Loubet.",
      "Le président du Conseil a fait signer par le Président de la République deux décrets : l'un fixant au 21 juillet la date des élections départementales, et l'autre prorogeant jusqu'au 10 juillet la session du conseil général de la Seine.",
      "Le ministre des Finances a procédé à un mouvement dans les trésoreries, et le ministre de la Guerre a fait signer un décret concernant les droits de prises. Le conseil s'est également penché sur la loi des retraites ouvrières."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Militaire",
    "title": "Le drapeau des chasseurs",
    "summary": "En souvenir de la bataille de Solférino, une réflexion est engagée pour doter chaque bataillon de chasseurs d'un drapeau propre, alignant ainsi leur prestige sur celui des autres corps d'armée.",
    "paragraphs": [
      "Une réflexion est menée sur l'opportunité de remettre un drapeau à chaque bataillon de chasseurs, suite à une décision ministérielle concernant le souvenir de la bataille de Solférino.",
      "Le texte suggère qu'avec l'augmentation des effectifs, chaque bataillon formant corps devrait être doté de son propre emblème, à l'instar de la cavalerie ou des armées étrangères comme en Allemagne."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique étrangère",
    "title": "La mission marocaine",
    "summary": "La délégation diplomatique marocaine, menée par Si-Abd-el-Krim, a reçu un accueil solennel des autorités françaises, illustrant la solidité des relations diplomatiques entre le Sultan et la France.",
    "paragraphs": [
      "Les ambassadeurs marocains ont rendu visite à M. Paul Deschanel, président de la Chambre, et à M. Waldeck-Rousseau, président du Conseil.",
      "La délégation, conduite par Si-Abd-el-Krim, a été reçue pour des entretiens cordiaux suivis de déjeuners et d'une visite aux jardins de la présidence.",
      "La mission a également assisté à une représentation à l'Opéra avant de regagner son hôtel, témoignant des bonnes relations diplomatiques entre le Sultan et le gouvernement français."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Administration",
    "title": "Mouvement dans les Finances",
    "summary": "Le ministère des Finances procède à un remaniement des trésoreries générales. Sont nommés : M. Desmaze à Rouen, M. Ligier à Caen, M. Nano à Alençon et M. Larivière à Lons-le-Saunier.",
    "paragraphs": [
      "Le ministre des Finances a procédé à plusieurs nominations aux postes de trésoriers généraux : M. Desmaze à Rouen, M. Ligier à Caen, M. Nano à Alençon et M. Larivière à Lons-le-Saunier."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "La guerre au Transvaal",
    "summary": "Le War Office officialise les pertes britanniques subies en juin. La multiplication des offensives boërs, notamment près de Barkly-East, accentue la lassitude des troupes engagées.",
    "paragraphs": [
      "Le War Office a publié une liste des pertes subies par l'armée britannique les 19, 20 et 22 juin lors de divers engagements.",
      "Des rapports indiquent que les Boërs multiplient les attaques audacieuses, notamment près de Barkly-East et Reitz, où des combats acharnés ont été signalés.",
      "La situation demeure incertaine et la presse anglaise souligne la lassitude croissante des troupes britanniques engagées dans ce conflit."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "International",
    "title": "Le président Kruger",
    "summary": "La Hollande se prépare à une réception solennelle pour le président Kruger à Rotterdam, avec des cortèges officiels et la suspension des cours dans les établissements scolaires.",
    "paragraphs": [
      "De grands préparatifs sont organisés aux Pays-Bas pour la réception du président Kruger à Rotterdam, incluant des cortèges de sociétés locales et la fermeture des écoles."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Attaque en chemin de fer",
    "summary": "L'agression de M. Sébald-Saba dans le train est élucidée. Les coupables, Jean-Baptiste-Magloire Ventre et Jean-Fernand Fau, sont activement recherchés par la police française et belge.",
    "paragraphs": [
      "L'identité des deux agresseurs de M. Sébald-Saba est désormais établie : il s'agit de Jean-Baptiste-Magloire Ventre et de Jean-Fernand Fau.",
      "Les deux individus, soupçonnés d'appartenir à une bande de faux-monnayeurs, sont traqués par la police française et belge suite à leur méfait commis dans un convoi ferroviaire.",
      "Des agents ont été dépêchés à Hautmont afin de poursuivre l'enquête, notamment auprès de la compagne de l'un des accusés."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Terrible accident de voiture",
    "summary": "Un tragique accident de voiture près de la ferme de Lafoy, dans le Cher, a blessé grièvement M. Jaillet et le couple Denizard et les époux Denizard-Boyer après le basculement d'un véhicule.",
    "paragraphs": [
      "Un grave accident s'est produit près de la ferme de Lafoy, dans le Cher. Une voiture à quatre roues a basculé au-dessus d'un talus après que le cheval attelé a pris peur.",
      "Le propriétaire, M. Jaillet, ainsi que les époux Denizard-Boyer ont été grièvement blessés. Le médecin traitant craint une issue fatale pour M. Jaillet."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Faits Divers",
    "title": "Lugubre découverte",
    "summary": "À Belcourt, en Algérie, le cadavre à demi-carbonisé d'un enfant de trois ans, Mohammed-ben-Bessa, a été découvert dans une carrière. Le parquet a immédiatement ouvert une enquête pour élucider ce crime mystérieux.",
    "paragraphs": [
      "Un ouvrier a découvert, dans une carrière située à Belcourt, en Algérie, le cadavre à demi-carbonisé d'un enfant de trois ans nommé Mohammed-ben-Bessa.",
      "Le procureur a aussitôt ouvert une enquête sur ce crime mystérieux, car aucun indice n'a permis, pour l'instant, d'identifier le ou les auteurs de cet acte atroce."
    ]
  },
  {
    "id": 12,
    "page": 1,
    "category": "Justice",
    "title": "Cour d'assises du Rhône : Le procès de Richetto",
    "summary": "Au procès de Richetto, l'accusé persiste à nier, qualifiant les preuves de machinations. L'audition des témoins, commissaire et ancien chef de la sûreté, fragilise sa défense face aux jurés lyonnais.",
    "paragraphs": [
      "Lors de la deuxième audience, l'accusé Richetto persiste à nier les faits qui lui sont reprochés, qualifiant les preuves matérielles et les témoignages accablants de machinations policières.",
      "Le procès se poursuit avec l'audition de témoins capitaux, notamment le commissaire de police et l'ancien chef de la sûreté, qui ont relaté avec précision la découverte des restes des victimes et des objets lui appartenant.",
      "L'attitude de l'accusé, marquée par un déni systématique, semble, selon les observateurs présents, lui aliéner progressivement les jurés."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits divers",
    "title": "Le procès Richetto",
    "summary": "Le procès Richetto se poursuit : l'accusé conteste vainement les preuves matérielles présentées. Les témoignages s'accumulent, dressant un portrait accablant des circonstances de ses crimes.",
    "paragraphs": [
      "Le Petit Parisien rapporte les détails du procès Richetto. L'accusé tente de contester les preuves découvertes dans sa loge, notamment des lambeaux d'étoffe et des chaussures appartenant à la veuve Catinot.",
      "Un tricot trouvé dans la Boutasse est présenté à l'accusé. Malgré ses dénégations formelles, le président constate que ce vêtement lui va parfaitement. Le témoin Mme Voirin, gardienne de la propriété Noack, raconte sa découverte macabre dans la Boutasse.",
      "Le garde champêtre du Point-du-Jour et M. Ruet, restaurateur, apportent des témoignages accablants sur le comportement de Richetto et la nature des objets retrouvés.",
      "Le père Simon, directeur de la maison des Camilliens, témoigne des conditions d'entrée de Richetto au service de la communauté et rapporte les propos ambigus tenus par l'accusé lors de son arrestation.",
      "L'audience est suspendue avant la déposition attendue du docteur Lacassagne."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits divers",
    "title": "Déposition du docteur Lacassagne sur les crimes de Richetto",
    "summary": "Le docteur Lacassagne livre des preuves scientifiques accablantes, reliant les blessures des victimes aux outils saisis chez Richetto et confirmant les faits par des analyses médico-légales rigoureuses.",
    "paragraphs": [
      "Le docteur Lacassagne, professeur à la faculté de Lyon, présente ses conclusions scientifiques sur les restes des victimes. Il démontre que ces dernières ont été assommées avec un instrument contondant, probablement l'un des marteaux saisis au domicile de Richetto.",
      "Le médecin légiste détaille le mode opératoire du dépeçage et souligne la présence de parasites identiques sur les restes humains et dans les résidus de chaux trouvés chez l'accusé.",
      "Richetto tente de contester ces preuves scientifiques, mais le docteur Florence corrobore les faits par l'examen des traces de sang relevées dans la loge, réfutant les explications invraisemblables de l'accusé."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Justice",
    "title": "La Haute Cour : Procès de Lur-Saluces",
    "summary": "À l'issue de la troisième audience, la Haute Cour a condamné M. de Lur-Saluces à cinq ans de bannissement, assortis de l'obligation de quitter le sol français dans les plus brefs délais.",
    "paragraphs": [
      "La troisième audience du procès Lur-Saluces au Palais du Luxembourg est marquée par la plaidoirie de Me Jacquier. L'avocat défend avec ferveur les convictions politiques de son client, tout en débattant longuement de la question du complot.",
      "Après une délibération secrète, la Haute Cour déclare l'accusé coupable par 71 voix contre 51. Le verdict tombe : M. de Lur-Saluces est condamné à cinq ans de bannissement.",
      "L'arrêt mentionne également la condamnation aux frais du procès et l'obligation pour l'accusé de quitter le sol français dans les plus brefs délais."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Actualités",
    "title": "Les Retraites Ouvrières",
    "summary": "La commission d'assurance et de prévoyance sociales a adopté le contre-projet de M. Denys-Cochin, instaurant un système de doubles caisses alimentées par les cotisations croisées des ouvriers et des patrons.",
    "paragraphs": [
      "La commission d'assurance et de prévoyance sociales a adopté le contre-projet de M. Denys-Cochin relatif aux retraites ouvrières. Ce dispositif novateur prévoit la constitution de deux caisses distinctes, alimentées respectivement par les cotisations des ouvriers et celles de leurs employeurs."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique",
    "title": "Candidature de M. Paul Loubet",
    "summary": "M. Paul Loubet, fils du Président de la République, a formellement accepté de briguer un siège au conseil général, sollicité par les maires du canton de Grignan.",
    "paragraphs": [
      "Les maires du canton de Grignan ont officiellement sollicité M. Paul Loubet, fils du Président de la République, afin qu'il présente sa candidature au conseil général.",
      "M. Paul Loubet a accédé à cette demande et a accepté de se présenter à la prochaine élection."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "International",
    "title": "Dépêches de l'étranger",
    "summary": "Panorama de l'actualité internationale : troubles anticléricaux en Espagne, drame de tir en Angleterre, crise législative en Australie et tragédie ferroviaire aux États-Unis.",
    "paragraphs": [
      "À Valence, en Espagne, des manifestations anticléricales ont dégénéré en violences contre plusieurs édifices religieux de la ville.",
      "En Angleterre, un grave accident de tir survenu dans l'île de Wight a causé le décès tragique d'un capitaine et d'un canonnier.",
      "À Melbourne, le député Findley a été expulsé de l'assemblée législative pour la publication d'un article jugé diffamatoire à l'égard du roi Édouard.",
      "Aux États-Unis, près d'Indianapolis, un convoi ferroviaire a été précipité dans une rivière suite à l'effondrement soudain d'un pont, causant la mort de quinze personnes."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Sports",
    "title": "Course automobile Paris-Berlin",
    "summary": "Plus de cent cinquante véhicules, majoritairement de facture française, ont pris le départ de la course Paris-Berlin. L'épreuve, disputée en trois étapes, marque une avancée sportive et industrielle.",
    "paragraphs": [
      "Plus de cent cinquante automobiles, en majeure partie issues de la construction française, se sont élancées pour la course Paris-Berlin.",
      "Cette épreuve d'envergure, qui se déroule en trois étapes, suscite un intérêt croissant tant sur le plan sportif que sous l'aspect commercial."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un incendie au Poteau",
    "summary": "Un violent incendie a dévasté hier soir une fabrique de carton, rue du Poteau. Malgré l'intervention diligente des pompiers, les dégâts sont considérables, bien que les blessures humaines soient légères.",
    "paragraphs": [
      "Un incendie s'est déclaré hier soir, aux environs de vingt-deux heures, dans une fabrique de carton située au 11, rue du Poteau.",
      "Le feu, ayant pris naissance dans les ateliers, s'est propagé avec une vélocité alarmante, menaçant de se communiquer aux locaux adjacents.",
      "Les sapeurs-pompiers de la rue de Château-Landon ont immédiatement procédé aux opérations d'extinction.",
      "Après une heure de lutte acharnée, ils ont pu préserver les immeubles avoisinants, bien que la fabrique ait été entièrement dévorée par les flammes.",
      "Si les dégâts matériels sont très importants, on ne déplore que deux blessés légers parmi le personnel ayant participé au sauvetage."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Ecrasé par une porte",
    "summary": "Un tragique accident est survenu hier soir passage des Récollets : le jeune Louis Back, âgé de dix ans, a trouvé la mort après avoir été écrasé par la chute accidentelle d'une lourde porte en fer.",
    "paragraphs": [
      "Un terrible accident s'est produit hier soir, à huit heures, passage des Récollets.",
      "Un enfant de dix ans, Louis Back, jouait à quelques pas du domicile de ses parents, lorsqu'il s'approcha d'une porte en fer qu'on avait déposée le long d'un mur.",
      "Un mouvement de l'enfant ébranla la lourde pièce qui s'abattit sur lui.",
      "Quand on releva le petit malheureux, qui avait été littéralement écrasé, on constata qu'il avait, outre de nombreuses blessures sur tout le corps, la tête fracassée.",
      "Il est mort dans une pharmacie où on l'avait transporté."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "La vengeance d'un locataire",
    "summary": "M. Parmentier, aubergiste, a été séquestré toute la nuit dans ses water-closets par un locataire colérique. L'individu, Eugène Rifle, a été appréhendé par la police le lendemain matin.",
    "paragraphs": [
      "M. Parmentier, âgé de soixante-deux ans, patron d'un hôtel meublé, 35, rue Galmels, a été victime, la nuit dernière, d'une mésaventure peu banale.",
      "Avant-hier soir, vers onze heures, un de ses locataires, Eugène Rifle, âgé de vingt-cinq ans, faisait irruption dans son bureau et lui cherchait querelle à propos d'une futilité.",
      "Comme son client menaçait de le frapper, le patron de l'hôtel prit peur. Il alla chercher des gardiens de la paix, mais quand il revint, Rifle avait disparu. M. Parmentier pensa que son locataire était remonté dans sa chambre et, rassurés, les agents se retirèrent.",
      "Au bout d'un quart d'heure, avant de se mettre au lit, M. Parmentier se rendait dans ses water-closets qui se trouvent à côté de sa chambre. À peine y était-il entré que Rifle, qui s'était dissimulé dans le bureau de l'hôtel, sortait de sa cachette, puis, se précipitant sur la porte, il la barricadait à l'aide du lit et de la commode en s'écriant : « Je les tiens à présent. Tu es pris comme un rat dans une souricière, mais ne cherche pas à sortir de là-dedans, car, malheur à toi, je me charge de faire ton affaire. »",
      "Craignant la fureur de ce forcené, M. Parmentier n'osa pas bouger et se tint coi dans son sombre réduit.",
      "À cinq heures du matin seulement, entendant descendre plusieurs de ses locataires, M. Parmentier appela à son secours. On accourut à ses cris et on délivra le malheureux, malgré l'opposition de Rifle.",
      "Sur la plainte de M. Parmentier, Rifle a été arrêté par M. Dupuis, commissaire de police du quartier des Grandes-Carrières, et envoyé au dépôt."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une folle à la police",
    "summary": "Une rentière, se disant persécutée par des esprits, s'est présentée au commissariat pour abandonner sa fortune à ses héritiers, ne conservant que 28 francs. Elle a été internée à l'infirmerie du dépôt.",
    "paragraphs": [
      "Dans la matinée d'hier, une dame paraissant âgée d'environ soixante ans se présentait au commissariat du quartier Sainte-Marguerite et demandait à parler au commissaire de police, se faisant annoncer sous le nom d'Amélie Mathieu, rentière, demeurant boulevard Voltaire.",
      "Introduite immédiatement auprès de M. Gonlier, la vieille dame, parlant avec une excessive volubilité, raconta au magistrat que, depuis longtemps, elle était en proie aux persécutions du monde entier, que chaque nuit elle était visitée par de malins esprits qui la torturaient et en voulaient à sa fortune, que des malfaiteurs la guettaient à tout instant du jour, et que, ne se sentant plus l'énergie nécessaire pour faire face à toutes ces inimitiés, elle avait pris une grande résolution.",
      "« J'abandonne tout ce que j'ai à mes héritiers, dit-elle ; ils se partageront mes immeubles ; quant à vous, je vous charge de leur distribuer le reste de ma fortune que je gardais chez moi. »",
      "« Je ne conserve que 28 francs pour acheter aux Halles des légumes que j'irai revendre par les rues pour gagner ma vie. »",
      "Et à la grande stupéfaction du magistrat, son interlocutrice déposa sur son bureau un paquet assez volumineux contenant quantité de titres divers, actions, obligations, valeurs et quelques billets de banque.",
      "C'est en vain que le magistrat posa alors quelques questions à la vieille dame qui s'enferma dans le mutisme le plus complet. Il ne put savoir son adresse exacte et dut l'envoyer à l'infirmerie spéciale du dépôt, après avoir placé sous scellés le paquet de valeurs déposé sur son bureau par l'aliénée."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Crise de folie à l'hôpital Tenon",
    "summary": "Atteinte d'une grave maladie, Mme Anna Mally, hospitalisée à Tenon, a été prise d'un accès de folie furieuse. Elle a été transférée à l'infirmerie spéciale du dépôt sur décision policière.",
    "paragraphs": [
      "Ces jours derniers, on admettait à l'hôpital Tenon une ménagère, Mme Anna Mally, âgée de trente-sept ans, domiciliée impasse Soufflot, qui était atteinte d'une maladie fort grave.",
      "La pauvre femme, au cours de l'avant-dernière nuit, prise soudain d'un accès de folie furieuse, se jeta à bas de son lit, puis, après avoir lancé sur ses voisines immédiates les ustensiles qui se trouvaient à sa portée, se mit à bondir à travers la salle où elle était soignée, criant, hurlant et terrorisant les autres malades.",
      "Les infirmières eurent toutes les peines du monde à la maîtriser, et hier matin, M. Tirache, commissaire de police, sur l'avis d'un médecin, l'a dirigée sur l'infirmerie spéciale du dépôt, la malheureuse constituant un danger permanent pour ses voisines."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "A coups de faucille",
    "summary": "Un retraité a blessé un chiffonnier à la faucille après avoir été agressé sur les fortifications. La police a conclu à la légitime défense et a relâché le vieillard.",
    "paragraphs": [
      "Un employé retraité, Pierre Ribet, âgé de soixante-quatre ans, demeurant rue des Moines, coupait, hier, à l'aide d'une faucille, de l'herbe sur les fortifications, près de la porte d'Asnières.",
      "Un individu couché non loin de lui, après avoir, d'un air narquois, contemplé le vieillard qui suait à grosses gouttes, l'interpella : « Tu veux faire des rentes avec l'élevage des lapins et tu viens voler l'herbe du gouvernement. »",
      "Ribet, vexé, répondit à son interlocuteur qu'il ferait mieux de travailler que de se vautrer à terre, et qu'il préférait voler l'herbe du gouvernement que les lapins des autres.",
      "L'individu se leva et, s'avançant vers le vieillard, le prit au collet, lui passa un croc-en-jambes et, le renversant, se coucha sur lui et le frappa à coups de poing sur la tête.",
      "En se débattant, Ribet, qui n'avait pas lâché sa faucille, en porta un coup qui atteignit son adversaire au-dessus de l'œil droit. L'agresseur, un chiffonnier, Louis Mazure, âgé de vingt ans, tomba baigné dans son sang.",
      "Des spectateurs de la scène arrêtèrent Ribet qui se laissa emmener sans résistance, chez M. Michaut, commissaire de police. Le magistrat, après avoir interrogé les témoins, l'a laissé en liberté, les déclarations de ceux-ci ayant établi que l'employé retraité était en état de légitime défense. Louis Mazure, après avoir été pansé dans une pharmacie, a été reconduit à son domicile."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Pas de chance pour un repris de justice",
    "summary": "Pierre Cambal, repris de justice, est arrêté pour faux après avoir tenté de falsifier son casier judiciaire en utilisant des procédés chimiques pour obtenir un emploi à la Société des téléphones.",
    "paragraphs": [
      "Pierre Cambal, âgé de quarante-quatre ans, a déjà passé vingt et une années de son existence en prison, ayant subi en province quatre condamnations différentes à deux, cinq, six et huit ans d'emprisonnement pour vols.",
      "Libéré il y a quelques mois et décidé à travailler pour gagner sa vie, il vint à Paris, où il n'avait jamais eu affaire avec la justice, dans l'intention d'y chercher un emploi.",
      "Mais son casier judiciaire, par trop surchargé, ne lui permettait guère, s'il était obligé d'en faire usage, de caresser l'espoir d'être embauché. Bientôt il désespéra, car partout où il se présenta on lui demanda tout d'abord la production de cette pièce.",
      "Le malheureux, ne sachant plus où donner de la tête, imagina de se constituer un casier judiciaire aussi pur que ses intentions. Il vivait avec une personne de son âge, Mme Aimée-Désirée J., qui n'avait jamais subi de condamnation. Il lui fit demander cette pièce puis, dès qu'il l'eut en sa possession, la dénatura en faisant, par des procédés chimiques, disparaître les « e » muets des deux prénoms et tout ce qui pouvait désigner le sexe du titulaire.",
      "Muni de cette pièce, notre homme réussit à trouver une place à la Société des téléphones. Il y était depuis quelque temps lorsqu'il fut dénoncé ces jours derniers à M. Guicheteau, commissaire de police, qui l'a fait arrêter sous inculpation de faux.",
      "Espérons que cette fois-ci la justice lui tiendra compte des bonnes intentions qui lui ont fait commettre ce nouveau méfait."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une femme peu commode",
    "summary": "À Saint-Pierre-de-Mons, une femme séparée de son mari l'a accueilli avec un coup de hache alors qu'il tentait de s'introduire chez elle par la fenêtre. Le mari est blessé mais ses jours ne sont pas en danger.",
    "paragraphs": [
      "Bordeaux, 26 juin. Les époux Delhomme, demeurant à Saint-Pierre-de-Mons, près de Langon, vivaient depuis plus de quatre ans séparés de corps et de biens.",
      "Or, hier soir, le mari, légèrement pris de boisson, eut la fantaisie d'aller causer quelques instants avec sa femme. Celle-ci fit la sourde oreille et refusa d'ouvrir.",
      "M. Delhomme insista longtemps sans plus de succès. La porte s'obstinant à rester fermée, il essaya de passer par la fenêtre. Il avait réussi à l'ouvrir et se disposait à pénétrer dans la chambre quand sa femme lui asséna un violent coup de hache sur la tête.",
      "Aux cris poussés par le blessé, des voisins accoururent et s'empressèrent auprès de l'infortuné mari, qu'ils transportèrent à son domicile.",
      "Le juge de paix et les gendarmes de Langon se sont transportés ce matin sur les lieux et ont procédé à l'arrestation de la peu commode Mme Delhomme, qui, du reste, s'est opiniâtrement défendue.",
      "Quant à la blessure reçue par le mari, elle ne paraît pas mortelle et, à moins de complications, on espère le sauver."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Chroniques des faits divers en banlieue",
    "summary": "Revue des faits divers en banlieue parisienne : vols, accidents tragiques, suicides et agressions violentes marquent une journée sombre pour les communes entourant la capitale.",
    "paragraphs": [
      "BOULOGNE. M. Beaurain, commissaire de police, a arrêté hier un nommé Joseph Dagand, trente-sept ans, qui était au service d'un entrepreneur de déménagements et profitait de sa situation pour voler des objets aux clients. Dagand, qui a fait des aveux complets, a été envoyé au dépôt.",
      "CLICHY. Un enfant âgé de sept ans, Ludovic Sternes, qui s'amusait hier après-midi dans la cour de la maison de ses parents, rue des Bonnaires, à se suspendre aux brancards d'une voiture, a eu la poitrine écrasée par suite d'un mouvement de bascule. Le malheureux enfant a été transporté, mourant, à l'hôpital des Enfants malades.",
      "VILLENEUVE-LA-GARENNE. Mme Ernestine Souques, âgée de trente-sept ans, demeurant avenue de Saint-Ouen, a été renversée hier soir, à huit heures, par un tricycle à pétrole qui lui a broyé la cuisse gauche et lui a cassé le poignet droit.",
      "BOIS-COLOMBES. Une jeune fille âgée de vingt et un ans, Lucie Denorer, émailleuse, demeurant rue Victor-Hugo, s'est suicidée la nuit dernière en avalant un flacon de sublimé corrosif. Elle avait laissé un billet dans lequel elle déclarait qu'elle se tuait parce que sa famille s'opposait à son mariage.",
      "PANTIN. Au cours de l'avant-dernière nuit, vers minuit, M. Louis Mouchet, âgé de trente ans, marbrier, demeurant avenue du Cimetière, rentrait chez lui en compagnie de sa femme par la route de Flandre, lorsqu'il croisa quelques individus qui se montrèrent fort inconvenants. Le marbrier protesta et aussitôt les rôdeurs se ruèrent sur lui, le frappèrent de deux coups de couteau dans le dos et prirent la fuite. Les blessures de M. Mouchet sont assez graves.",
      "SAINT-DENIS. Quelques gamins s'amusaient hier matin à courir sur des planches reliant un bateau au quai du canal Saint-Denis. Soudain l'une des planches tourna et l'un des enfants, Victor Flory, âgé de six ans, dont les parents habitent 39, rue Pinel, tomba sur le sol et se blessa si grièvement qu'on dut le transporter à l'hôpital.",
      "VINCENNES. Mme Lacroix, âgée de soixante-trois ans, demeurant 50, rue de Paris, préparait hier son déjeuner sur une lampe à alcool, lorsque celle-ci, en se brisant, communiqua le feu à ses vêtements. En un clin d'œil, la malheureuse fut entourée de flammes et, folle de terreur, se sauva dans l'escalier et dans la rue. Des passants parvinrent à étouffer les flammes, mais la pauvre femme est si grièvement atteinte qu'à l'hôpital Saint-Antoine son état est jugé désespéré.",
      "ARCUEIL-CACHAN. Un maraîcher nommé Louis Rieez, âgé de cinquante-deux ans, demeurant route Stratégique, 12, a été trouvé mort hier dans son logement. C'est en absorbant un verre de décoction de nicotine, dont les maraîchers se servent pour préserver leurs produits des insectes, que le malheureux s'est suicidé. La mort fut immédiate.",
      "ISSY-LES-MOULINEAUX. Mme Noël, son fils Alexandre et M. Ange Leborgne, inculpés de vols et d'abus de confiance au préjudice de M. Jacquot, un vieillard de quatre-vingt-trois ans, ont été mis en liberté provisoire par M. Albauel, juge d'instruction. M. Legrand, expert comptable, a été désigné pour évaluer le montant des sommes dérobées à l'octogénaire.",
      "VILLENEUVE-SAINT-GEORGES. Dans la nuit du 16 au 17 juin, des malfaiteurs ont arrêté route de Choisy M. Toussaint, maître carrier qui partait prendre le train à Choisy-le-Roi pour Angerville où se trouvent ses chantiers. Après l'avoir terrassé, ils lui ont enlevé son portefeuille contenant 700 francs.",
      "MARLY-LE-ROI. Hier soir, vers sept heures, le tramway de Saint-Germain à l'Étoile a pris en écharpe, au tournant de la rue de Saint-Germain, la voiture de M. Brenet, cultivateur à Louveciennes, dans laquelle se trouvaient une dame Loiseleur, sa fille et son fils. La voiture fut brisée mais, par un hasard extraordinaire, seule Mme Loiseleur, projetée violemment sur la chaussée, a été grièvement blessée.",
      "RUEIL. Hier soir, un ex-clerc de notaire, Eugène Dupont, âgé de soixante et un ans, a mis fin à ses jours en se pendant dans sa chambre, rue de Marly.",
      "CHATOU. M. Eugène Durand, garçon blanchisseur, a retiré hier de la Seine le cadavre de François Duvivier, âgé de vingt ans, cultivateur chez ses parents, route de Carrières-Saint-Denis.",
      "SAINT-GERMAIN-EN-LAYE. Hier soir, en voulant intervenir dans une bagarre entre consommateurs dans un débit de la rue de Paris, l'agent de police Naigeon a reçu deux coups de poignard à la main et au visage d'un journalier, Louis Tugnet, âgé de vingt-sept ans, demeurant rue Alexandre-Dumas. Malgré ses blessures, l'agent a pu arrêter cet individu, qui a été dirigé sur la prison de Versailles.",
      "MONTFORT-L'AMAURY. Sous la présidence de M. Jules Claretie, les Bretons et celtisants assisteront dimanche prochain, 30 juin, au troisième pardon d'Anne de Bretagne.",
      "MEAUX. Un accident grave s'est produit hier sur le terrain de manœuvres de Beauval. Le vicomte de Peyte de Montcarrier, lieutenant au 1er régiment de hussards, chargeait à la tête de son peloton lorsque sa monture tomba et roula sur lui. Le malheureux officier resta étendu sur le sol avec le bras droit cassé et des contusions multiples. Le major vint lui prodiguer ses soins et peu après le blessé était ramené à son domicile.",
      "COULOMMIERS. On a découvert hier le cadavre d'un journalier nommé Jules Evrard, célibataire, âgé de quarante-cinq ans, qui, pour en finir avec la vie, s'était d'abord frappé de quatre coups de couteau de poche dans la poitrine ; mais, la mort ne venant probablement pas assez vite, il s'était alors coupé l'artère carotide.",
      "PROVINS. On annonce la mise en liberté de M. X, arrêté au mois d'avril dernier. Le non-lieu ne saurait tarder, le juge d'instruction n'ayant relevé aucune manœuvre frauduleuse contre l'inculpé."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Ingénieux bandits à Roubaix",
    "summary": "À Roubaix, des cambrioleurs ont dévalisé une ferme en torturant délibérément une vache pour attirer le fermier et son personnel hors de leur chambre, leur permettant ainsi d'agir sans encombre.",
    "paragraphs": [
      "Roubaix, 26 juin. Une ferme dépendant du hameau de la Marlière, près de Mont-à-Leux, habitée par un célibataire, M. Louis Ballens, vient d'être complètement dévalisée par de hardis bandits ayant eu recours à un stratagème ingénieux.",
      "Vers onze heures du soir, des beuglements lamentables sortaient de l'étable. M. Ballens se hâta de s'y rendre, accompagné de sa bonne et de son domestique. Ils trouvèrent une vache agitée et toute tremblante. Après lui avoir donné quelques soins, tous trois se retirèrent et allèrent se recoucher.",
      "Peu après, M. Ballens, ouvrant les yeux, vit quelqu'un debout près de son lit. Il voulut crier mais reçut tout aussitôt un coup violent sur la tête qui l'étourdit. Quand il reprit ses sens, le malheureux sentit sur son front la pression du canon d'un revolver tandis qu'une voix lui disait : « Tiens-toi tranquille ou tu es mort. »",
      "Pendant ce temps, d'autres voleurs fracturaient les meubles et s'emparaient de l'argent et des bijoux. Leur coup fait, les hardis cambrioleurs prirent la fuite.",
      "Le domestique de M. Ballens, qui couche dans une chambre assez éloignée, n'a rien entendu. Quant à la domestique, prise de frayeur, elle s'était hâtée de se cacher dans la cave.",
      "L'enquête ouverte a établi que les ingénieux bandits, pour opérer plus à l'aise, avaient imaginé de torturer la malheureuse vache. Ils espéraient que le maître de la ferme et ses domestiques resteraient longtemps près de la bête, leur laissant ainsi le temps de mener à bien leurs opérations."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Sports",
    "title": "Courses à Auteuil et Colombes",
    "summary": "Compte-rendu des courses hippiques à Colombes. La journée fut marquée par la défaite des favoris, à l'exception de York, vainqueur du prix d'Avon.",
    "paragraphs": [
      "Aujourd'hui, jeudi 27 juin, voici les pronostics pour Auteuil : Prix de la Cloche, Prix de la Gibaude, Prix Saxifrage, Prix du Chalet, Prix de la Mare, Prix des Veneurs.",
      "L'hippodrome de Colombes est devenu un très joli lieu de réunion sportive. La journée d'hier n'est pas faite pour contredire mes observations : les favoris ont été battus, sauf un, York, dans le prix d'Avon.",
      "Résultats du mercredi 26 juin à Colombes : Giralda gagne le Prix de Cannes, Puissant gagne le Prix de Bordeaux, York gagne le Prix d'Avon, Dam gagne le Prix de Nice, Troyka gagne le Prix de l'Été."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Nécrologie",
    "title": "Mort de M. Jacques Olry",
    "summary": "Le monde hippique perd une figure éminente avec le décès de M. Jacques Olry, vice-président de la Société d'Encouragement du demi-sang et propriétaire du célèbre cheval de trot Trinqueur.",
    "paragraphs": [
      "On annonce la mort de M. Jacques Olry, vice-président de la Société d'Encouragement du demi-sang, éleveur et propriétaire de chevaux de trot à qui appartenait le célèbre Trinqueur. Tous ceux qui le connaissaient envoient à sa mémoire leurs profonds regrets et leur salut respectueux."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Départements",
    "title": "Nouvelles de Chartres, Compiègne et Auxerre",
    "summary": "Faits divers en province : vente forcée à Corancez, drame familial fatal à Boisville-la-Saint-Père, accident mortel à Vignemont et noyade tragique d'un jeune employé à Auxerre suite à une imprudence.",
    "paragraphs": [
      "CHARTRES. Aucun habitant de Corancez n'ayant voulu se charger de couper les récoltes de Brierre, sur le conseil de son avocat, Me Duparc, ces récoltes vont être vendues aux enchères dimanche prochain.",
      "A Boisville-la-Saint-Père, Mme veuve Bigot, impotente, a été tuée par son fils Joseph, ivrogne, au cours d'une querelle. Le gendre de la malheureuse, intervenant, a frappé Joseph avec un croc ; ce dernier est décédé le lendemain. Une enquête est ouverte.",
      "COMPIÈGNE. Mme veuve Boilel, âgée de cinquante-sept ans, rentière, demeurant à Vignemont, est tombée d'une échelle en cueillant des cerises et a été si grièvement blessée qu'elle est morte quelques heures après l'accident.",
      "AUXERRE. Lucien Gantheret, âgé de dix-huit ans, employé d'imprimerie, s'était plaint de maux d'estomac. Ce matin, à cinq heures, il commettait l'imprudence de se baigner dans l'Yonne. À peine était-il dans l'eau qu'il disparaissait. Le malheureux a évidemment succombé à une congestion déterminée par une indigestion."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Théâtre",
    "title": "Courrier des théâtres",
    "summary": "Actualités des scènes parisiennes : répétitions en cours à la Porte-Saint-Martin, initiatives administratives au Vaudeville et au Gymnase, et lancement des concours du Conservatoire.",
    "paragraphs": [
      "À la Porte-Saint-Martin, on répète La Case de l'oncle Tom. À l'Ambigu, auditions quotidiennes.",
      "Le directeur du Vaudeville et celui du Gymnase ont convenu de créer des abonnements mixtes à tarif réduit.",
      "Les concours du Conservatoire ont débuté hier. Vendredi aura lieu l'audition des cantates pour le Grand Prix de Rome."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Concerts",
    "title": "Concerts et divertissements",
    "summary": "Agenda des spectacles parisiens : matinée caritative à l'Olympia, succès confirmé à la Cigale, prolongations à l'Eldorado et dernières représentations de la troupe Schumann.",
    "paragraphs": [
      "Aujourd'hui, matinée à l'Olympia au bénéfice de Mlle Gaudy avec une pléiade d'artistes renommés, dont Yvette Guilbert.",
      "La revue Mars, Vénus et Cie retarde la clôture de l'Eldorado.",
      "Dernières représentations de la troupe Schumann à l'Hippo-Palace.",
      "Grand succès pour Les Marraines du Siècle à la Cigale."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Bulletin Financier",
    "title": "Clôture de la bourse du 26 juin",
    "summary": "La journée boursière s'achève sur une note morose. La tendance est au repli général, touchant particulièrement les valeurs de traction, les titres miniers et les fonds d'État.",
    "paragraphs": [
      "Les tendances sont franchement mauvaises. Les baissiers attaquent les valeurs de traction et transports. Le recul est général.",
      "Le 3 % finit en baisse. L'Italien et l'Extérieure fléchissent. Le Rio Tinto s'effondre.",
      "Les valeurs sud-africaines ne sont pas meilleures."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Cours et Leçons",
    "title": "Instruction commerciale et industrielle",
    "summary": "L'École Pigier, sise 53 rue de Rivoli, propose des enseignements pratiques de comptabilité commerciale, industrielle et financière avec placement assuré. Programme et sections spéciales pour dames disponibles.",
    "paragraphs": [
      "Comptabilité commerciale, industrielle et financière enseignée rapidement à forfait par des procédés pratiques et nouveaux assurant un succès complet.",
      "Envoi gratuit du programme. Section spéciale pour les dames. Placement des élèves assuré. École Pigier, 53, rue de Rivoli, Paris."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Spectacles",
    "title": "Programme des théâtres du 27 juin",
    "summary": "Retrouvez l'ensemble des représentations théâtrales et lyriques prévues dans les salles parisiennes pour la journée du mardi 27 juin 1899.",
    "paragraphs": [
      "Opéra : Relâche (Vendredi, Roméo et Juliette).",
      "Théâtre-Français : Œdipe Roi.",
      "Opéra-Comique : Lakmé, Le Maître de Chapelle.",
      "Odéon : Colinette.",
      "Ambigu : Roger la Honte.",
      "Porte-Saint-Martin : Relâche.",
      "Sarah-Bernhardt : Relâche.",
      "Châtelet : Le Tour du Monde en 80 jours.",
      "Gaîté : L'Auberge du Tohu-Bohu.",
      "Renaissance : Relâche.",
      "Nouveautés : La Petite Fonctionnaire.",
      "Cluny : La Gourdette, La Dame du Commissaire.",
      "Théâtre Molière : Relâche.",
      "Belleville : Le Savetier de la rue Quincampoix.",
      "Batignolles : La Famille du forçat.",
      "Montmartre : Le Roi s'amuse.",
      "Grenelle : La Fille du Régiment, Le Chalet.",
      "Montparnasse : Une Cause célèbre.",
      "Gobelins : La Jeunesse du Roi Henri."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Agriculture",
    "title": "Marché des fourrages de Paris-La Chapelle",
    "summary": "Compte-rendu du 26 juin au marché de Paris-La Chapelle : la tendance est à la hausse pour les pailles, tandis que le cours des fourrages se maintient fermement.",
    "paragraphs": [
      "Paris-La Chapelle, 26 juin. Marché ordinaire : 70 voitures de paille et 40 de fourrages. Prix en hausse sur les pailles, cours des fourrages fermes.",
      "Le tout rendu dans Paris, au domicile de l'acheteur (frais de camionnage et droits d'entrée compris) par 100 bottes de 5 kilos.",
      "Pour les marchandises en gare, les frais de déchargement, d'octroi et de camionnage sont à la charge de l'acheteur."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Économie",
    "title": "Rapport sur la Halle au Blé",
    "summary": "Malgré une offre limitée, les prix des blés restent stables à la Halle au Blé, la meunerie manifestant peu d'intérêt à acheter davantage en raison de l'arrêt de nombreux moulins.",
    "paragraphs": [
      "Peu d'offres en blés indigènes et prix tenus fermes par les détenteurs ; mais la meunerie, disposant de stocks suffisants, n'a pas souhaité accroître ses achats à des cours supérieurs à ceux de la semaine dernière ; de nombreux moulins demeurent à l'arrêt.",
      "Les blés blancs s'échangeaient de 19,75 à 20,25 francs, et les roux de 19,75 à 20 francs les 100 kilos, gare Paris ou livrés aux usines."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Informations utiles",
    "title": "Sommaire de L'Agriculture Nouvelle",
    "summary": "Le numéro de cette semaine de L'Agriculture Nouvelle propose seize pages d'actualités techniques et de conseils pratiques pour le monde rural, au prix de 10 centimes.",
    "paragraphs": [
      "Lire cette semaine dans L'Agriculture Nouvelle, journal populaire et mutuel de la production, 16 pages de texte et de gravures. Le numéro : 10 centimes.",
      "Contenu : Le transport des produits agricoles, prévisions du temps, concours régional de Châteauroux, concours des chiens de berger, concours régional d'Épinal, le pommier et les bonnes pommes à couteau, les moutons du Dahomey, les fruitières des Pyrénées, les magasins de blé en Allemagne."
    ]
  }
];
