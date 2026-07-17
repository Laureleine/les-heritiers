// Date: 1899-10-07
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-10-07 (Version Restaurée, 37 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Feuilleton",
    "title": "La Charmeuse d'Enfants",
    "summary": "Jules Mary livre un nouveau roman captivant pour Le Petit Parisien : une fresque émouvante où une jeune fille douce tente d'apaiser une haine familiale séculaire par la force de l'amour.",
    "paragraphs": [
      "Jamais le grand romancier populaire n'avait écrit une œuvre aussi vécue, aussi palpitante d'émotion et d'intérêt. Nous n'avons plus à faire l'éloge de Jules Mary ; ses livres sont connus de tous et chacun voudra lire le récit qu'il vient d'écrire tout spécialement pour le Petit Parisien.",
      "La Charmeuse d'Enfants est l'histoire d'une haine séculaire qui divise deux familles. Le drame se déroule au milieu de scènes attendrissantes et d'épisodes imprévus qui tiendront nos lecteurs en haleine ; ils y trouveront une exquise figure de jeune fille, charmante et charmeuse ; ils verront comment son action s'exercera, toujours humaine et douce, dans les moments les plus sombres, et comment, enfin, l'amour viendra remplacer la haine."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Chronique Internationale",
    "title": "L'Angleterre envahie",
    "summary": "La politique belliqueuse de M. Chamberlain au Transvaal est vivement critiquée en Angleterre. Des observateurs préviennent qu'une telle agression isolerait le pays face à des puissances européennes hostiles.",
    "paragraphs": [
      "Il s'en faut qu'il y ait unanimité en Angleterre pour approuver les projets belliqueux de M. Chamberlain, ministre des Affaires étrangères, contre le Transvaal.",
      "Hier encore, M. A.-J. Wilson, ancien éditeur du Times et directeur actuel de l'Investor's Review, condamnait cette politique d'agression. Et voici qu'aujourd'hui un autre écrivain donne un avertissement sévère, faisant ressortir que la situation est grave dans le monde entier, et que, presque certainement, ce n'est point aux seuls Boërs que l'Angleterre aurait affaire si elle persistait à pousser le conflit jusqu'au bout.",
      "L'Angleterre, dit-il, compte beaucoup d'ennemis en Europe. Songe-t-elle à ce qui peut arriver quand elle sera engagée dans une nouvelle expédition en Afrique ? Il importe de lui rappeler que, tout récemment, un officier du grand état-major allemand publiait une longue étude tendant à prouver que l'Angleterre n'est point si imprenable qu'elle se le suppose et qu'une armée étrangère pourrait fort bien y opérer une descente."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Autour d'un crime",
    "summary": "Dans une confession dramatique empreinte de remords, Fabien Daubray avoue à Gontran de Montalais avoir contribué par ses préjugés politiques à une possible erreur judiciaire condamnant un innocent.",
    "paragraphs": [
      "La Voix de l'Honneur s'arrêta ; puis, avec une amertume concentrée : « Eh bien ! soyez heureux ! Allez épouser votre digne complice ! Continuez avec elle votre vie d'opprobre, votre existence de fainéantise, de lâcheté et de vice ».",
      "De nouveau, il s'arrêta. Fabien Daubray reprit-il d'une voix qu'entrecoupait un sanglot : « Dire que moi aussi j'ai ma responsabilité dans sa condamnation. Savez-vous, ajouta-t-il en se penchant vers Gontran, savez-vous que, durant l'instruction de ce malheureux, on est venu secrètement me demander des renseignements sur lui ? Il avait été mon adversaire politique. Je ne l'ai pas ménagé. Et puis, je le croyais coupable. Peut-être aussi, me laissant dominer par de mesquins ressentiments, ai-je ajouté un poids de plus à la balance qui pesait contre lui. Dieu ! faut-il donc que j'aie contribué à une erreur judiciaire monstrueuse ! »",
      "Gontran de Montalais se leva brusquement et poussa un cri : « Père, je comprends. Vous voulez que je me fasse justice. Vous voulez que je me tue. »"
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Social",
    "title": "La grève du Creusot : l'arbitrage accepté",
    "summary": "Après trois semaines de paralysie industrielle au Creusot, M. Schneider accepte l'arbitrage du gouvernement. Les délégués ouvriers se rendent à Paris pour engager les négociations.",
    "paragraphs": [
      "Nous touchons à la fin de la grève qui, pendant plus de trois semaines, a rendu déserts les immenses ateliers du Creusot et réduit au chômage toute la population de la grande cité industrielle.",
      "M. Schneider a, en effet, déclaré avant-hier soir au préfet de Saône-et-Loire qu'il acceptait l'arbitrage du gouvernement. M. Waldeck-Rousseau a accepté la mission qui lui était offerte.",
      "Les délégués des ouvriers, MM. Charleux, Lacour, Jusot, Montel, Renaut, Viviani et Maxence Roldes, sont partis ce soir pour Paris par le train de nuit."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "Le voyage de M. Loubet",
    "summary": "Le Président de la République, M. Loubet, est arrivé à Lyon. Il se dirige vers Collonges-au-Mont-d'Or pour un séjour privé chez Mme Perret, veuve d'un sénateur du Rhône.",
    "paragraphs": [
      "M. Loubet, parti de Montélimar à midi par le rapide, est arrivé en gare de Perrache à 4 heures.",
      "Le Président de la République se rend à Collonges-au-Mont-d'Or pour y séjourner au château de Mme Perret, veuve d'un sénateur du Rhône, et très ancienne amie de Mme Loubet et du Président de la République.",
      "Bien que le chef de l'Etat soit venu sans apparat, il a été accueilli par des acclamations sympathiques de la population locale."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Actualités coloniales",
    "title": "La mission Foureau-Lamy",
    "summary": "Après l'annonce erronée d'un désastre de la mission Foureau-Lamy au Soudan, les informations rectificatives suggèrent un guet-apens tendu par des chefs touareg dans l'Aïr, démentant les rumeurs de tragédie.",
    "paragraphs": [
      "Il y a une quinzaine de jours, le correspondant de l'Agence Reuter, à Tripoli, avait reçu du Soudan des nouvelles annonçant le désastre de la mission Foureau-Lamy. Depuis cette époque, des informations venues du Sud algérien ont démenti cette nouvelle.",
      "D'après la version la plus probable, la mission était arrivée dans l'Aïr depuis trois mois, mais Foureau et Lamy auraient été victimes d'un guet-apens de la part de chefs touareg."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un tamponnement ferroviaire à Nîmes",
    "summary": "Hier après-midi, un train de voyageurs venant du Vigan a percuté un convoi de marchandises près de Nîmes. Malgré la destruction totale des premiers wagons, le bilan humain est miraculeusement peu élevé.",
    "paragraphs": [
      "Le train de voyageurs qui, parti du Vigan, devait arriver à Nîmes à midi 49, a tamponné hier après-midi, à une heure, entre Ugnade et Caveirac, le train spécial de marchandises.",
      "Les deux locomotives ont pénétré littéralement l'une dans l'autre sans dérailler. Le fourgon et la première voiture du train des voyageurs ont été complètement broyés, mais les blessés ne sont que peu nombreux."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Terrible incendie à Saint-Etienne",
    "summary": "Un violent incendie a dévasté un chantier de menuiserie à Saint-Étienne, se propageant à un immeuble voisin. La pénurie d'eau a empêché les pompiers d'éviter des pertes évaluées à 500 000 francs.",
    "paragraphs": [
      "Un violent incendie a éclaté la nuit dernière, rue Saint-Paul prolongée, dans les chantiers de menuiserie de Ray. Par suite du manque d'eau, le feu a fait des progrès rapides et n'a pas tardé à se communiquer à un vaste immeuble de quatre étages occupé par la maison Noël-Tardy, fabricant de rubans.",
      "Les dégâts ne sont pas encore complètement évalués, mais d'après les personnes compétentes, ils peuvent atteindre 500 000 francs."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un meurtre à Pantin",
    "summary": "Un drame sanglant a frappé Pantin : le commerçant Antoine Weyant a été assassiné par Louis Schœffer, un employé de la manufacture des tabacs, qui l'a poignardé alors qu'il dormait sur un tas de sciure.",
    "paragraphs": [
      "Avant-hier soir, un commerçant demeurant rue Arago, M. Antoine Weyant, a été assassiné par un employé de la manufacture des tabacs, Louis Schœffer.",
      "Après avoir invité Schœffer à boire une bouteille, M. Weyant s'est endormi sur un tas de sciure. C'est à ce moment que Schœffer lui a porté un terrible coup de couteau en pleine poitrine, au cœur."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "International",
    "title": "L'Angleterre et le Transvaal",
    "summary": "La tension persiste entre l'Angleterre et les Républiques sud-africaines. Tandis que ces dernières préparent une résistance acharnée, le gouvernement britannique hésite encore à ordonner une mobilisation totale.",
    "paragraphs": [
      "Les nouvelles sont contradictoires et rien ne permet de se prononcer d'un côté ou d'un autre. Mais il semble évident, d'une part, que la République sud-africaine alliée à la République d'Orange se prépare à une résistance acharnée, et, de l'autre, que les Anglais se trouvent, en ce moment, dans une infériorité périlleuse.",
      "Le gouvernement britannique n'a toujours pas signé l'ordre de mobilisation complet, alors que la tension monte chaque jour avec l'approche possible de l'état de siège à Johannesburg."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique Internationale",
    "title": "La situation au Transvaal et les tensions avec les indigènes",
    "summary": "Face à la crainte d'un soulèvement des populations indigènes au Transvaal, le gouvernement prend des mesures de sécurité drastiques tandis que les hostilités semblent imminentes sur la frontière du Bechuanaland.",
    "paragraphs": [
      "Le gouvernement transvaalien semble craindre un soulèvement des Zoulous, des Matabélés et des Basoutos contre les Blancs, ce qui pourrait entraîner des massacres et des désordres graves.",
      "À Johannesburg, un détachement de police montée se tient au siège de la Commission de guerre, prêt à agir au moindre trouble. À l'East Rand, les employés blancs ont été armés pour assurer la dispersion des indigènes en cas de besoin.",
      "Le gouvernement avait ordonné la confiscation de la dynamite dans la mine d'East-Rand. Un incident avec le directeur, initialement interprété comme un refus, a conduit à son arrestation, avant qu'il ne soit relaxé suite à une explication de l'ingénieur de l'État.",
      "La Commission de la guerre a accordé des permissions aux employés des services des eaux et de l'éclairage, tandis que les Cafres réquisitionnés restent maintenus à leurs postes.",
      "À Londres, le correspondant du Times à Lobatsi indique que la situation est très critique sur la frontière du Bechuanaland et que l'on s'attend à ce que les hostilités éclatent dès cette semaine."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Biographie",
    "title": "Le Général Joubert",
    "summary": "Portrait de Petrus-Jacobus Joubert, général en chef de l'armée du Transvaal, figure emblématique du peuple Boër et brillant tacticien militaire face aux forces britanniques.",
    "paragraphs": [
      "Petrus-Jacobus Joubert, général en chef de l'armée transvaalienne, incarne le type même du véritable Boër. Âgé de soixante-huit ans et né dans la colonie du Cap, il fut le compagnon de lutte indéfectible du président Krüger.",
      "Diplomate brillant lors des négociations avec l'Angleterre dès 1879, il se révéla comme un grand chef militaire lors du coup de force britannique sur Pretoria, infligeant des défaites marquantes aux Anglais à Laing's Nek, l'Ingogo et Majuba.",
      "Il a organisé l'armée en dix-sept subdivisions, dotées d'un système de mobilisation extrêmement rapide. En 1893, il fut un candidat présidentiel très populaire face à M. Krüger."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Justice",
    "title": "La Haute-Cour et l'instruction du procès",
    "summary": "L'instruction de la Haute-Cour se poursuit dans le secret sous la direction de M. Bérenger, alors que le gouvernement prévoit de faire débuter le procès lors de la prochaine session parlementaire.",
    "paragraphs": [
      "La matinée à la Haute-Cour a été calme. M. Bérenger poursuit l'instruction dans le plus grand secret. On estime que celle-ci pourrait être menée à son terme dans une quinzaine de jours.",
      "Le gouvernement a résolu de convoquer les Chambres pour le 5 novembre, date à laquelle l'ouverture du procès pourrait coïncider avec la session parlementaire. Le Sénat devra alors se partager entre ses obligations judiciaires et législatives.",
      "Des bruits courent sur l'annulation possible de certains mandats d'arrêt, tandis que des échanges de lettres entre les avocats royalistes et le procureur M. Bulot ont eu lieu au sujet des allégations sur la conduite de l'instruction.",
      "Le juge d'instruction a ordonné une enquête sur les travaux effectués au fort Chabrol, procédant à la saisie des devis auprès des entrepreneurs.",
      "M. Georges Grosjean est arrivé de Spa hier soir à la gare du Nord et se tient à la disposition de M. Bérenger."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Perquisitions à Bordeaux et Bernay",
    "summary": "Les autorités intensifient la répression dans les milieux royalistes et antijuifs avec des perquisitions menées à Bordeaux et à Bernay, aboutissant à la saisie de documents compromettants.",
    "paragraphs": [
      "À Bordeaux, de nouvelles perquisitions ont eu lieu chez les présidents des groupes cantonaux de la Jeunesse royaliste démocratique.",
      "À Bernay, une perquisition a été effectuée au domicile des parents du jeune Drumard, secrétaire-trésorier de la Ligue antijuive. Plusieurs documents compromettants ont été saisis par les autorités."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Mouvements de navires et vie à Brest",
    "summary": "Chronique des activités navales : les aspirants débutent leur formation sur la frégate-école, tandis que la marine russe maintient sa présence diplomatique dans les ports français.",
    "paragraphs": [
      "Les aspirants de première classe ont embarqué sur la frégate-école d'application. L'Alphée arrivera à Brest sous peu.",
      "L'aviso-torpilleur russe Abreck est arrivé à Cherbourg pour remplacer le Possadnik."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Diverses notes militaires",
    "summary": "Actualités de l'armée : banquet des vétérans de Voiron, travaux du génie près de Pixérécourt, remise de drapeau à Calais et réduction du contingent de novembre 1899 suite à une sélection plus rigoureuse.",
    "paragraphs": [
      "Un banquet réunissant les anciens conscrits de la région de Voiron, tous âgés de plus de quatre-vingts ans, se tiendra demain.",
      "Le bataillon du génie procédera à la construction d'un hangar destiné à abriter le matériel du pont temporaire aux abords de Pixérécourt.",
      "Une fête patriotique sera célébrée dimanche à Calais, à l'occasion de la remise solennelle d'un drapeau aux vétérans locaux.",
      "Le contingent devant être incorporé en novembre 1899 connaîtra une diminution notable, consécutive à une plus grande sévérité appliquée lors des opérations d'élimination au service militaire."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Assassinat à Toulouse",
    "summary": "L'enquête sur le meurtre de Félicie Ducousseau avance : les vêtements de l'accusé Julien ont été saisis avec des traces suspectes. La police recherche activement le nommé Germain.",
    "paragraphs": [
      "Les investigations concernant l'assassinat de Félicie Ducousseau se poursuivent avec une grande activité. Les vêtements de l'inculpé, le nommé Julien, ont été saisis et présentent des taches de sang suspectes. Les autorités recherchent activement son amant, le nommé Germain, dont le témoignage est jugé indispensable à la manifestation de la vérité."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Société",
    "title": "Le mariage et ses critiques historiques",
    "summary": "Une réflexion sur la permanence du mariage malgré les railleries des philosophes et la tragédie des faits divers. L'union conjugale reste le socle de la société française.",
    "paragraphs": [
      "Le mariage fait l'objet, depuis des siècles, d'une ironie constante de la part des esprits libertins. Toutefois, en dépit des boutades lancées par les philosophes et les auteurs à travers les âges, le mariage demeure, par sa nature, une base fondamentale et solide de notre société.",
      "La persistance de cette institution est illustrée par le contraste entre les critiques acerbes et la réalité des drames passionnels, tel le récent suicide d'un jeune ouvrier plombier, prouvant que l'attrait pour l'union conjugale demeure immuable malgré les épreuves."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Social",
    "title": "Bulletin du travail : Grèves en cours",
    "summary": "Point sur les conflits sociaux : la grève des horlogers de Morez persiste, tandis que le calme revient à Audincourt et qu'un accord se dessine à Fumel.",
    "paragraphs": [
      "Le mouvement de grève des ouvriers en horlogerie de Morez se poursuit sans changement.",
      "À Audincourt, le conflit social à la filature Sabler a pris fin, un accord satisfaisant ayant été conclu entre la direction et le personnel ouvrier.",
      "Une grève a éclaté à Fumel au sein des ateliers de la Société du Périgord, les ouvriers réclamant une revalorisation salariale ; les négociations laissent toutefois espérer un accord prochain."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accidents et suicides à l'étranger",
    "summary": "Chronique noire internationale : drame minier en Belgique, suicide ferroviaire, résurgence de la peste à Porto et démantèlement d'une organisation criminelle à Montevideo.",
    "paragraphs": [
      "Un entrepreneur du nom d'Alphonse Dockier a trouvé la mort, écrasé sous un rocher, dans la province de Liège.",
      "Un suicide tragique est survenu sur la ligne ferroviaire reliant Cumptich à Tirlemont, un homme s'étant jeté sous un train en pleine marche.",
      "Quatre cas de peste ont été officiellement recensés dans la ville de Porto.",
      "À Montevideo, la police a réussi à démanteler un syndicat criminel redoutable qui, après avoir souscrit des assurances sur la vie de jeunes gens, les assassinait pour toucher les primes."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Chroniques parisiennes",
    "summary": "Une série de drames et d'accidents endeuille la capitale : agressions boulevard de la Villette, meurtre passionnel, chutes mortelles rue Oberkampf et rue de Belleville, ainsi qu'un décès inexpliqué.",
    "paragraphs": [
      "Deux hommes ont été attaqués boulevard de la Villette par des rôdeurs et grièvement blessés lors d'une agression nocturne.",
      "Une dispute entre un ouvrier et sa maîtresse à propos d'une question d'argent a tragiquement dégénéré en meurtre. L'auteur du crime a été arrêté par les forces de l'ordre.",
      "Un individu s'est fracturé le crâne en tentant de sauter d'un omnibus en marche rue Oberkampf.",
      "Un ouvrier maçon, Léon Chauvel, est tombé accidentellement dans le vide en tentant de rattraper un tapis dans une manœuvre périlleuse.",
      "Un employé, Claude Monier, a été retrouvé mort, sans explications immédiates, dans son appartement de la rue de Belleville."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide d'un malheureux",
    "summary": "Acculé par la misère, un sexagénaire s'est donné la mort par asphyxie au charbon après avoir utilisé l'aide financière d'un ami pour solder ses dettes.",
    "paragraphs": [
      "Le malheureux, qui avait jadis espéré une certaine fortune, ne put se résoudre à mener une vie de misère et songea irrémédiablement au suicide.",
      "Dans le courant de la semaine dernière, il fit appel au bon cœur d'un vieil ami et obtint le secours d'une somme d'argent.",
      "Avec cet apport, le sexagénaire acquitta quelques dettes urgentes et employa le solde à acheter un boisseau de charbon de bois pour mettre fin à ses jours.",
      "M. Démarquez, commissaire de police du quartier de la Villette, a procédé aux constatations d'usage après la découverte du corps."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un enfant renversé par un fiacre",
    "summary": "Un jeu d'enfants a tourné au drame sur le boulevard de Belleville. Le jeune Léon Faivre, poursuivi par ses camarades, a été violemment renversé par un fiacre et grièvement blessé.",
    "paragraphs": [
      "Dans l'après-midi, vers quatre heures et demie, une dizaine d'enfants avaient imaginé un jeu sur le boulevard de Belleville. L'un d'eux, portant une écharpe tricolore, jouait le rôle d'un commissaire de police.",
      "Quand le pseudo-commissaire, le jeune Léon Faivre, âgé de dix ans et demi, répondit de façon goguenarde, le meneur s'écria : « Qu'on le passe à tabac ».",
      "Les gamins se précipitèrent sur leur camarade pour le houspiller sur la chaussée. Un fiacre arrivant à toute vitesse, l'enfant fut renversé et les roues lui passèrent sur les jambes.",
      "Secouru par des passants, il a été transporté dans une pharmacie voisine, puis admis d'urgence à l'hôpital."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident domestique mortel",
    "summary": "Un peintre en bâtiment, M. Adolphe Caillot, a été victime d'une méprise fatale en ingérant accidentellement de l'hydro-phosphate destiné au décapage des peintures, rue de l'Odéon.",
    "paragraphs": [
      "Un ouvrier peintre, M. Adolphe Caillot, travaillait rue de l'Odéon chez M. Albrecht. Pour le réconforter, le locataire lui apporta une bouteille de vin blanc qu'il posa, par malheur, à côté d'une bouteille contenant de l'hydro-phosphate servant à dissoudre la vieille peinture.",
      "L'ouvrier, prenant une bouteille sans vérifier le contenu, en avala une gorgée et tomba aussitôt en proie à des convulsions terribles.",
      "Transporté d'urgence dans une pharmacie pour les premiers soins, il a été ensuite admis dans un état jugé alarmant à l'hôpital Cochin."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame amoureux",
    "summary": "Suite à une rupture sentimentale boulevard de Grenelle, une jeune couturière, Jeanne Leyder, a tenté de mettre fin à ses jours en absorbant du laudanum sous les yeux de son fiancé.",
    "paragraphs": [
      "Une couturière de vingt-deux ans, Jeanne Leyder, entretenait des relations avec un jeune mécanicien. Le fiancé, ayant eu connaissance de certains racontars, résolut de rompre ses engagements.",
      "Lors d'une entrevue boulevard de Grenelle, il confirma son intention d'abandonner tout projet de mariage. Jeanne Leyder, voyant son fiancé s'éloigner, porta à ses lèvres, dans un geste désespéré, un flacon de laudanum.",
      "Relevée par des passants alertés par la scène, elle a été transportée dans un état grave à l'hôpital Cochin."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide d'un escroc",
    "summary": "Un individu, se faisant passer pour un homme fortuné, s'est donné la mort dans le bois de Vincennes alors que ses fraudes, totalisant plus de 100 000 francs, étaient sur le point d'être découvertes.",
    "paragraphs": [
      "Un individu, se faisant passer pour un homme fortuné, avait loué une maison avenue Marigny sous prétexte d'y établir une maison de santé. Il s'était, par ce stratagème, fait livrer un riche mobilier par un tapissier confiant.",
      "Le propriétaire, découvrant l'imposture, fit fermer les portes de la demeure. L'escroc, se voyant acculé, alla se donner la mort par pendaison dans un massif du bois de Vincennes.",
      "L'enquête ouverte par M. Rebondin, commissaire de police de Vincennes, a démontré que cet individu, nommé Hérot et âgé de quarante-cinq ans, avait commis d'importantes escroqueries dépassant 100 000 francs dans plusieurs villes de France."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans la banlieue parisienne",
    "summary": "Chronique des accidents et drames survenus en banlieue : chutes, asphyxies, disparitions et découvertes macabres dans la Seine occupent les services de police locaux.",
    "paragraphs": [
      "Courbevoie : Mme Auvray, femme de trente ans, a fait une chute terrible d'une échelle alors qu'elle posait des rideaux ; elle est grièvement blessée.",
      "Levallois-Perret : M. Louis Foucault, âgé de trente-deux ans, a mis fin à ses jours par asphyxie à l'aide d'un réchaud de charbon de bois.",
      "M. Pierre Carmino, directeur d'usine, a été renversé à bicyclette rue Victor-Hugo et grièvement blessé au crâne.",
      "Asnières : Pierre Voltaire, ouvrier serrurier, est tombé sous les roues d'une voiture de déménagement ; son état est jugé désespéré.",
      "La Garenne-Colombes : Le jeune Jolas, âgé de deux ans, a disparu alors qu'il jouait sans surveillance sur le trottoir.",
      "Saint-Denis : Des mariniers ont retiré le cadavre d'une femme d'environ soixante ans des eaux de la Seine.",
      "Ecouen : Un ouvrier maçon, M. Thuillier, âgé de quarante-six ans, s'est pendu hier matin.",
      "Orsay : Mme Richard, rentière, a trouvé la mort par noyade en rinçant son linge près d'un bassin.",
      "Rambouillet : Le Parquet enquête sur la mort de Jean Caline, décédé des suites des blessures reçues lors d'une altercation.",
      "Corbeil : Le cadavre de Mlle Augustine Lepcaut, âgée de trente-deux ans, a été retiré des eaux de la Seine."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Les Sports",
    "title": "Résultats des courses et sports hippiques",
    "summary": "Compte-rendu des épreuves hippiques tenues au Bois de Boulogne et à Enghien, où les chevaux Cyclamen, Edison II et Saturne ont particulièrement brillé.",
    "paragraphs": [
      "Les courses au Bois de Boulogne ont présenté des lots fort fournis. À Enghien, le prix du Var a été remporté avec brio par Cyclamen, tandis que le prix du Mont-Agel a donné lieu à un match serré et disputé entre Edison II et Saturne.",
      "Les résultats officiels du pari mutuel ainsi que les pronostics pour les épreuves à venir ont été communiqués pour l'ensemble des courses de la journée."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Actualité des scènes parisiennes",
    "summary": "Le monde du spectacle parisien est en deuil suite au décès de M. Émile Marck, ancien directeur de l'Odéon. L'Association des artistes dramatiques alerte le public contre des escroqueries.",
    "paragraphs": [
      "La matinée de demain dimanche verra le déroulement de nombreuses représentations à la Comédie-Française, à l'Opéra-Comique et dans divers autres théâtres parisiens.",
      "M. Émile Marck, ancien directeur du Théâtre de l'Odéon, est décédé. Par ailleurs, l'Association générale des artistes dramatiques a tenu à mettre le public en garde contre des individus malintentionnés escroquant des dons en son nom."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Les Sports",
    "title": "L'automobile et la bicyclette",
    "summary": "Modernisation des services postaux dans le 17e arrondissement et annonce du prochain championnat de France de polo à vélo organisé par le Polocycle-Club.",
    "paragraphs": [
      "Les essais de nouveaux modes de locomotion pour le service postal se poursuivent avec succès dans le 17e arrondissement, permettant aux agents des gains de temps particulièrement appréciables.",
      "Le Polocycle-Club de France organisera demain, au vélodrome, le premier championnat de France de polo à bicyclette."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Économie",
    "title": "Cours du Havre - Cotons",
    "summary": "Relevé des cours officiels du marché du Havre pour le mois d'octobre. Détail des cotations d'ouverture et de clôture pour les échéances d'octobre, novembre, décembre et avril.",
    "paragraphs": [
      "Cours du Havre. Cotons, laines et peaux très ordinaires. Marché du Havre, mois d'octobre. Ouvertures et clôtures des cours pour les échéances d'octobre, novembre, décembre et avril."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Agriculture",
    "title": "Rapport sur les vendanges",
    "summary": "Synthèse de l'état des vendanges en France suite aux pluies récentes, avec un état d'avancement par région et les mercuriales du vin à la production.",
    "paragraphs": [
      "Pendant la huitaine qui vient de s'écouler, il est tombé de la pluie en abondance et la température s'est refroidie. Dans plusieurs régions, les vignerons, craignant une persistance du mauvais temps, ont hâté leurs vendanges.",
      "La cueillette est désormais terminée dans le Midi, la Provence et le Beaujolais-Mâconnais. Elle se poursuit activement dans l'Armagnac, le Languedoc et le Bordelais. Elle est particulièrement avancée dans l'Orléanais, la Touraine, la Champagne et la Bourgogne.",
      "Les prix varient selon les terroirs : dans l'Aude, ils atteignent 2 francs le degré ; dans le Roussillon, ils oscillent de 1 franc à 1,80 franc le degré ; dans le Bordelais, les mercuriales restent à définir en fonction de la qualité des crus ; dans le Cher, les vins se traitent de 75 à 80 francs."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Publicité littéraire",
    "title": "Sommaire de l'Agriculture Nouvelle",
    "summary": "Sommaire de la revue « L'Agriculture Nouvelle » : études sur les céréales par M. J. de Beauce, analyse sur les superphosphates par M. Lucien Cornet et conseils horticoles par M. S. Mottet.",
    "paragraphs": [
      "Le dernier numéro de l'Agriculture Nouvelle contient des études spécialisées, notamment un article sur les céréales françaises en 1898 par M. J. de Beauce, une analyse sur l'abus des superphosphates signée par M. Lucien Cornet, ainsi qu'une rubrique d'horticulture pratique consacrée aux fraisiers à gros fruits remontants par M. S. Mottet."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Revenant - Troisième partie",
    "summary": "Surpris en plein cambriolage par Bareste, le Rougeaud tente d'extorquer cent mille francs à ce dernier en échange d'informations sur une femme disparue.",
    "paragraphs": [
      "Le Rougeaud, pensant que l'hôtel était désert, s'était introduit chez Bareste avec l'intention de voler. Cependant, Bareste, revenu sur ses pas à l'improviste, l'a surpris et tenu en respect avec un revolver.",
      "Plutôt que de subir les conséquences de son acte, le Rougeaud a déclaré avec un calme surprenant à Bareste qu'il détient des renseignements capitaux concernant une jeune femme découverte sur la route de Volandry, des informations que même les autorités n'ont pu obtenir.",
      "Le Rougeaud avoue être l'auteur du vol des papiers de cette femme, laquelle est morte en accouchant d'une fille. Il propose de céder ces documents à Bareste contre la somme de cent mille francs."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Marché",
    "title": "Marché aux veaux",
    "summary": "Compte-rendu du marché aux veaux de la Villette en date du 6 octobre : 741 têtes amenées, cours stables entre 87 et 93 centimes le kilo de viande nette.",
    "paragraphs": [
      "À la Villette, le 6 octobre : 741 veaux ont été amenés au marché, dont 564 ont trouvé acquéreur. La vente a été moins laborieuse que la veille, avec des prix stables selon les provenances (Seine-et-Oise, Eure-et-Loir, Loiret), s'échelonnant entre 87 et 93 centimes le kilo de viande nette."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Informations Locales",
    "title": "Fêtes et manifestations",
    "summary": "L'Association des anciens sous-officiers prépare une soirée musicale, tandis que l'École Turgot célèbre son 60e anniversaire au Trocadéro. Diverses festivités sont annoncées le 8 octobre en banlieue parisienne.",
    "paragraphs": [
      "L'Association des anciens sous-officiers des armées de terre et de mer donnera sa première soirée musicale.",
      "La fête du soixantième anniversaire de la fondation de l'École Turgot aura lieu dimanche, avec la pose d'une plaque commémorative et une distribution de récompenses au Trocadéro.",
      "De nombreuses fêtes locales sont prévues dans les environs de Paris pour le dimanche 8 octobre, notamment à Argenteuil, Bagneux et Choisy-le-Roi."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Commerce maritime",
    "title": "Mouvements des paquebots",
    "summary": "Le point sur le trafic maritime : mouvements de départ enregistrés pour l'Australien, le Fret-Simoni et le Pei-Ho. Le paquebot La Plata a atteint le port de Pauillac le 3 octobre.",
    "paragraphs": [
      "Le paquebot Australien a quitté Port-Saïd le 2 octobre. Le paquebot Fret-Simoni a quitté Suez le 3 octobre. Le paquebot La Plata est arrivé à Pauillac le 3 octobre. Le paquebot Pei-Ho a quitté Djibouti le 3 octobre."
    ]
  }
];
