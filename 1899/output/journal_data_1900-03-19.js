// Date: 1900-03-19
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-03-19 (Version Restaurée, 49 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique Historique",
    "title": "Les origines de la presse",
    "summary": "Une analyse érudite des racines de la presse, du journal officiel chinois Kin-Pao aux premiers placards imprimés français du XVe siècle, marquant la naissance de l'information politique moderne.",
    "paragraphs": [
      "La presse a pris tant d'importance en ces dernières années, son rôle est si considérable dans les pays de liberté comme le nôtre, qu'il n'est point surprenant qu'on s'inquiète un peu partout des origines de cette puissance insoupçonnée des anciens et si redoutée des modernes.",
      "Deux professeurs de l'Enseignement supérieur, M. Aulard, à la Sorbonne, et M. Henri Hauser, à la Faculté des lettres de Clermont-Ferrand, ont justement pris cette année pour sujet de leurs cours, l'un la presse politique en France, l'autre la presse en France avant le journal.",
      "Sans doute nous savions que la presse n'est pas née en France, que l'Italie posséda des journaux dès qu'il y eut une imprimerie, et qu'avant même qu'il y eût une imprimerie, les Romains eurent les leurs sous forme de lettres et de placards.",
      "En Chine, un journal existait il y a plus de mille ans déjà. C'était une sorte de journal officiel appelé le Kin-Pao, que l'on peut justement tenir pour le doyen des journaux du monde entier.",
      "Nos ancêtres français, eux, utilisaient le « cri », c'est-à-dire la proclamation faite en public par un crieur patenté des édits royaux.",
      "Avec l'imprimerie, le procédé changea. Le crieur, au lieu de lire les ordonnances sur un placard manuscrit, les lut sur un placard imprimé. Ce dernier pouvait être reproduit en nombre infini et affiché à la porte des églises et des marchés.",
      "M. Hauser cite un in-octavo de 1485, le « Prologue de l'entrée du roi faite à Rouen », qu'il tient pour le doyen des journaux français. C'est du reportage avant la lettre.",
      "En 1494, avec les guerres d'Italie, l'information politique va se détacher du récit des cérémonies officielles. La presse d'information politique était née.",
      "La presse de discussion, elle, ne pouvait naître qu'avec la liberté. La presse d'information politique, elle, s'accommode de tous les régimes. Elle relate les faits sans les commenter.",
      "Il y avait donc déjà une opinion publique en France, puisque le roi s'occupait de la renseigner par la voie des placards et des pièces volantes."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage Secret : La toile de l'araignée",
    "summary": "Tiraillée entre les aspirations amoureuses de sa fille Rolande et ses obligations familiales, Manuèle voit ses projets contrariés par un télégramme urgent annonçant la maladie grave d'une proche.",
    "paragraphs": [
      "Entre la vie et la mort. À tout autre moment, c'est avec un transport de joie que la mère de Rolande aurait accepté la proposition du vicomte de l'Orme.",
      "Mais son devoir de mère prévoyante n'était-il pas de le bien accueillir et d'y engager Rolande ?",
      "Rolande ! Pauvre chérie. Et Henri ? Il était parti, en rendant sa parole à sa cousine, en attestant que jamais il ne pourrait briser l'obstacle qui les séparait l'un de l'autre.",
      "Ah, certes non, Manuèle ne devait pas, ne pouvait pas refuser à la Ségère le parti qui s'offrait miraculeusement pour sa chère petite. Et, pas plus tard que demain, elle allait en parler à Mme Lecoutellier.",
      "Mais un télégramme arrive : « Mère très malade, venez vite - Claude ». Et Manuèle de partir avec Rolande, inquiète pour cette chère Mme Lecoutellier."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Élections",
    "title": "Résultats des élections sénatoriales et législatives",
    "summary": "Bilan des scrutins du 18 mars : M. Giguet et le comte de Juigné accèdent au Sénat, tandis que MM. Deques et de Gontaut-Biron sont élus députés lors des élections législatives.",
    "paragraphs": [
      "Élections sénatoriales du 18 mars : Dans l'Ain, M. Giguet est élu avec 746 voix. En Loire-Inférieure, M. le Comte de Juigné est élu avec 657 voix.",
      "Élections législatives du 18 mars : Dans les Hautes-Pyrénées, M. Deques est élu. Dans les Basses-Pyrénées (2e circonscription de Pau), M. de Gontaut-Biron est élu."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "La réhabilitation de droit et les livrets militaires",
    "summary": "Le général de Galliffet réforme les livrets militaires pour permettre aux citoyens réhabilités de faire disparaître les mentions de condamnations passées de leurs documents officiels.",
    "paragraphs": [
      "Le général de Galliffet vient de signer une circulaire destinée à mettre en harmonie les règles relatives à la tenue des livrets militaires avec la loi du 5 août 1899 sur le casier judiciaire et la réhabilitation de droit.",
      "Les condamnés arrivés au terme de leur réhabilitation pourront recevoir un nouveau livret individuel sur lequel il ne sera fait mention ni des condamnations, ni de l'interruption de service qu'elles ont entraînée."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Arrestation d'un garçon de recettes malhonnête",
    "summary": "Charles-Louis Lenglet, garçon de recettes, est arrêté après avoir avoué avoir simulé un vol de 40 000 francs au détriment de la Banque de l'Indo-Chine pour favoriser une complice.",
    "paragraphs": [
      "Charles-Louis Lenglet, garçon de recettes, avait raconté avoir été attaqué et dévalisé de 40 000 francs alors qu'il se rendait à la Banque de l'Indo-Chine.",
      "Confronté à des invraisemblances, le garçon de recettes a finalement fait des aveux devant M. Hamard, sous-chef de la Sûreté.",
      "Il avait en réalité envoyé la somme par colis postal à une amie, Mme Berweck, avant de simuler son agression. Il a été arrêté avec sa complice."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une rixe à Limoges",
    "summary": "À Limoges, deux soldats du 63e de ligne ont violemment agressé des civils place de la Boucherie à coups de baïonnette. Les victimes sont hospitalisées et une enquête militaire est ouverte.",
    "paragraphs": [
      "Ce matin, à trois heures, deux soldats du 63e de ligne, Alfred Lejeune et Antoine, ont pris querelle avec plusieurs jeunes gens, place de la Boucherie, à Limoges.",
      "Lejeune, dans un accès de violence, a frappé deux personnes à coups de baïonnette. Les blessés ont été immédiatement transportés à l'hôpital et une enquête militaire a été ouverte sur cet incident."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Voleurs et fraudeurs à Neuilly",
    "summary": "La police de Neuilly a démantelé un trafic d'alcool frauduleux impliquant Adrien Couteau et Léon Duchêne, responsables du vol massif de marchandises provenant d'une distillerie de Courbevoie.",
    "paragraphs": [
      "La police vient d'arrêter Adrien Couteau et Léon Duchêne pour le vol et la vente frauduleuse de quantités considérables d'alcool provenant d'une distillerie de Courbevoie.",
      "Les perquisitions menées par les autorités ont permis la découverte de stocks importants d'alcool ainsi que de plusieurs milliers de bouteilles prêtes à être écoulées illégalement."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "International",
    "title": "Nouvelles de Chine et de la guerre",
    "summary": "En Chine, l'empereur ordonne les célébrations du Nouvel An et l'activation des forts de Taku. En Afrique du Sud, le siège de Mafeking se poursuit tandis que les troupes britanniques attendent à Bloemfontein.",
    "paragraphs": [
      "En Extrême-Orient, l'empereur de Chine a publié un nouvel édit concernant la célébration du Nouvel An. Le vice-roi du Pe-tche-li a reçu l'ordre impérial d'activer la défense des forts de Taku.",
      "Sur le front de la guerre, les nouvelles manquaient hier. On attend toujours la levée du siège de Mafeking. À Bloemfontein, les troupes anglaises se reposent en attendant les prochains combats."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "La situation de Lord Methuen et le siège de Mafeking",
    "summary": "Critiqué pour son imprévoyance, Lord Methuen est écarté des opérations de commandement direct. Sur le terrain, la situation autour de Mafeking demeure incertaine malgré les rumeurs.",
    "paragraphs": [
      "« Le Parisien ne dresse aucun blâme à cette splendide brigade des Highlanders ! » Voilà tout ce que lord Methuen trouve à dire en parlant d'hommes que son inconcevable légèreté et son incroyable imprévoyance ont envoyés à une mort certaine.",
      "On raconte ce soir que lord Methuen, outré d'une pareille incertitude lorsqu'il reçut ce rapport, fut sur le point de donner sa démission de sa division et de se retirer à Londres.",
      "Il s'est ensuite ravisé et a subi un double blâme qui, sans être public, n'en est pas moins aigu. D'abord, il a transmis son rapport au ministère de la Guerre à Londres sans l'accompagner d'un commentaire, ce qui est unique dans les annales du War-Office. Ensuite, il a été envoyé à l'arrière-garde de l'armée, à Kimberley, afin de surveiller les convois de vivres.",
      "Lord Methuen ne commandera plus désormais des troupes anglaises devant l'ennemi. C'est une perte sérieuse pour les Boers.",
      "Lobatsi, 12 mars via Lourenço-Marques, 17 mars. Le chemin de fer et le télégraphe sont rétablis jusqu'à Pitsani-Bakluku, 20 milles au nord de Mafeking. Les Boers de Sequani ont évacué leur camp et se sont retirés à Rustenburg. Le déblocage de Mafeking est attendu d'un moment à l'autre.",
      "Pretoria, 16 mars. On dément officiellement que le siège de Mafeking ait été abandonné ou que la ville soit délivrée. Les officiers anglais faits prisonniers ont été transférés aujourd'hui dans des emplacements aux environs de Pretoria."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Actualité internationale",
    "title": "Prisonniers boërs à Sainte-Hélène",
    "summary": "Selon l'Argus, les prisonniers transvaaliens ont été transférés à Sainte-Hélène, tandis que les orangistes demeurent provisoirement à Simonstown, au Cap.",
    "paragraphs": [
      "Le Cap, 17 mars. L'Argus apprend que les prisonniers transvaaliens sont arrivés à Sainte-Hélène. Les prisonniers orangistes resteront provisoirement à Simonstown, dans la colonie du Cap."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Vie sociale",
    "title": "La Saint-Patrick",
    "summary": "Célébration de la fête nationale irlandaise : à Londres et Windsor, la tradition du trèfle à la boutonnière a été suivie avec une ferveur particulière par la reine, la cour et les hauts fonctionnaires.",
    "paragraphs": [
      "Londres, 18 mars. C'était aujourd'hui la Saint-Patrick, fête nationale de l'Irlande. Il semble bien que le nombre de bouquets de trèfles arborés aux boutonnières et aux corsages était infiniment plus considérable que d'habitude.",
      "À Windsor, la reine et toute la cour ont porté les fleurs nationales de l'Irlande ; à Mansion House, dans les cours et tribunaux, dans les Ministères, le lord-maire, les magistrats et les hauts fonctionnaires ont également tous arboré un bouquet de trèfle."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits divers",
    "title": "Désordres à Dublin",
    "summary": "La procession inaugurale du lord-maire de Dublin a été marquée par des heurts violents, des manifestants nationalistes ayant jeté des pierres contre le véhicule officiel. Plusieurs arrestations ont eu lieu.",
    "paragraphs": [
      "Dublin, 18 mars. La procession inaugurale du lord-maire de Dublin a eu lieu aujourd'hui à travers les rues de la ville.",
      "La récente proposition du lord-maire de présenter une adresse à la reine, lors de sa prochaine visite à Dublin, a donné lieu à des démonstrations hostiles de la part des nationalistes et des intransigeants, qui ont jeté des pierres contre la voiture du lord-maire, dont ils ont brisé les glaces. Plusieurs arrestations ont été opérées."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits divers",
    "title": "Déraillement du Sud-Express",
    "summary": "À son arrivée en gare de Saint-Sébastien, le Sud-Express en provenance de France a déraillé. L'accident n'a fait aucune victime parmi les voyageurs ; seul le conducteur a été légèrement blessé.",
    "paragraphs": [
      "Madrid, 18 mars. Le Sud-Express de France a déraillé en entrant en gare de Saint-Sébastien.",
      "La locomotive a parcouru une distance de 100 mètres en sautant sur la voie de droite, qu'elle a détruite sur une longueur de 50 mètres. Le mécanicien a pu faire machine arrière. Aucun voyageur n'a été blessé. Seul le conducteur du train a reçu de légères blessures à la jambe."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits divers",
    "title": "Fatal accident à Borgerhout",
    "summary": "Un drame domestique a frappé une famille de Borgerhout : en tentant d'attiser le poêle avec du pétrole, deux jeunes enfants ont provoqué une explosion. La mère et les enfants sont grièvement blessés.",
    "paragraphs": [
      "Un affreux malheur s'est produit à Borgerhout, près d'Anvers, chez les époux Leysen. Mme Leysen, trouvant que le feu était sur le point de s'éteindre, descendit dans la cave pour chercher du bois, laissant les deux enfants, Eugénie, six ans, et Pierre, quatre ans, seuls dans l'appartement.",
      "La petite fille, se rappelant que sa mère fort souvent jetait du pétrole dans le feu, crut bien faire en suivant cet exemple. Elle saisit le bidon, souleva le couvercle et versa une énorme quantité de liquide dans le poêle. Une flamme jaillit, brûlant cruellement l'enfant à la main et à la figure ; la pauvre petite poussa un cri et lâcha le bidon qui tomba dans le feu. Alors se produisit une formidable explosion. La porte fut brisée et les fenêtres volèrent en éclats ; les flammes enveloppèrent les deux enfants et les brûlèrent des pieds à la tête.",
      "En ce moment, la mère entra ; elle se précipita comme une folle vers les bébés et étouffa les flammes, non sans se brûler elle-même très grièvement. Les voisins, entre-temps, étaient accourus et prodiguèrent des soins empressés aux trois victimes. Les enfants furent, d'urgence, transportés à l'hôpital de Stuyvenberg. Leur état est désespéré. Quant à la mère, elle s'est évanouie et elle n'a repris connaissance que deux heures plus tard. Son état est des plus graves."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique étrangère",
    "title": "La loi Heinze au Reichstag",
    "summary": "L'opposition libérale et socialiste a fait échec à la loi Heinze au Reichstag. Le prince de Hohenlohe a annoncé son opposition au projet, dont le sort demeure incertain jusqu'après les fêtes de Pâques.",
    "paragraphs": [
      "Berlin, 18 mars. L'obstruction pratiquée par les libéraux et les socialistes contre la loi Heinze a triomphé.",
      "Après une séance secrète et après de longs discours des députés Stadthagen et Bebel, le prince de Hohenlohe, chancelier de l'Empire, a déclaré qu'il a suivi avec la plus vive attention les raisons fournies en faveur de la loi Heinze par le Conseil fédéral et les partisans du projet, mais qu'il n'a pu se convaincre que cette loi ne présentait aucun inconvénient. Il pense, au contraire, qu'elle est tout simplement de nature à nuire à ceux qui, jusqu'ici, ne s'occupaient que d'intérêts d'un caractère idéaliste. Il déclare qu'il votera contre le projet.",
      "On a ensuite procédé au vote nominal, mais le quorum nécessaire n'a pas été atteint. Le président du Reichstag a levé la séance en constatant que les 51 députés qui avaient demandé le vote nominal ont quitté la salle en guise de démonstration avant que le vote eût lieu. Le président fixe la prochaine séance à lundi et porte à l'ordre du jour la continuation de la discussion du budget. L'opinion générale est que la loi Heinze ne reviendra pas en discussion avant Pâques, si elle revient."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles maritimes",
    "title": "Le cas du Commandant Reculoux",
    "summary": "Atteint par la limite d'âge sans accéder au grade d'officier général, le commandant Reculoux publie une brochure dénonçant le manque de transparence et l'absence de tableau d'avancement dans la Marine.",
    "paragraphs": [
      "Le capitaine de vaisseau Reculoux, atteint par la limite d'âge sans avoir pu parvenir, malgré ses écrits, au grade d'officier général, souligne dans une brochure les difficultés criantes de l'avancement dans la marine.",
      "Contrairement à l'armée de terre, les nominations dans la marine se font uniquement au choix du ministre. L'absence de tableau d'avancement nuit aux officiers méritants ; le commandant Reculoux expose sa situation et suggère la création d'une commission de classement pour garantir une meilleure équité."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles maritimes",
    "title": "Les essais d'un stoppeur",
    "summary": "À Cherbourg, les essais du stoppeur breveté de l'ingénieur M. Moisserenc ont confirmé l'efficacité de cet appareil pour la marine de guerre et marchande, lors d'épreuves de traction sur câbles d'acier.",
    "paragraphs": [
      "On télégraphie de Cherbourg : les essais du stoppeur breveté de M. Moisserenc, ingénieur de la marine, ont eu lieu en présence des autorités maritimes ; ils ont été parfaitement satisfaisants. Cet appareil est destiné à rendre de grands services à la marine de guerre et à la marine marchande.",
      "Lors des tests, les câbles d'acier ont été soumis à une forte traction ; l'appareil a pu être arrêté et maintenu avec un succès complet."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Le Lieutenant Mensier",
    "summary": "Fils d'un général du génie, le lieutenant Mensier est mort héroïquement dans les Alpes en portant secours à un subordonné. Ses obsèques ont été célébrées vendredi dernier à Menton.",
    "paragraphs": [
      "Le lieutenant Mensier, fils du général du génie, vient de trouver une mort héroïque dans les Alpes en tentant de sauver un de ses hommes tombé dans un ravin. Entré à Saint-Cyr en 1891, cet officier en était sorti dans un rang excellent avant d'obtenir son affectation aux chasseurs alpins.",
      "Ses obsèques ont été célébrées vendredi après-midi à Menton."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "La Batterie à quatre pièces",
    "summary": "Le récent règlement ministériel sur la composition des batteries de campagne est interprété par l'armée comme l'adoption officielle du passage à la batterie de quatre pièces au lieu de six.",
    "paragraphs": [
      "Le règlement ministériel qui a modifié la composition des batteries de campagne est interprété dans l'armée comme l'adoption officielle de la batterie à quatre pièces au lieu de six.",
      "Bien que le texte officiel reste assez nébuleux, cette interprétation prévaut au sein des troupes, notamment en raison du nombre de quatre maîtres pointeurs désormais prévu par batterie."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Chronique parisienne",
    "title": "Banquet de l'Association des journalistes parisiens",
    "summary": "L'Association des journalistes parisiens a tenu son banquet annuel au Grand Hôtel en présence de M. Waldeck-Rousseau, qui a honoré le rôle essentiel de la presse dans la vie politique nationale.",
    "paragraphs": [
      "Le banquet de l'Association des journalistes parisiens a eu lieu hier soir au Grand Hôtel. M. Alfred Mézières présidait la séance, ayant à ses côtés M. Waldeck-Rousseau, président du Conseil.",
      "M. Mézières a porté un toast au Président de la République et a salué l'harmonie régnant au sein de l'Association. M. Waldeck-Rousseau a ensuite pris la parole pour rendre un hommage appuyé à la presse française, soulignant son rôle de critique et de guide dans la vie politique."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits divers",
    "title": "Sinistre en mer",
    "summary": "Le bateau de pêche la Grâce-de-Dieu a sombré hier soir au large de l'île de Sein. Les trois marins à bord, Fiacre Pormoguer, Maurice Guilcher et Jean Kerlœguen, ont tragiquement péri dans le naufrage.",
    "paragraphs": [
      "Brest, 18 mars. Vers onze heures du soir, hier, le bateau de pêche la Grâce-de-Dieu a sombré dans les parages de l'île de Sein. Il était parti d'Audierne. Les victimes de ce sinistre sont le patron Fiacre Pormoguer, Maurice Guilcher et Jean Kerlœguen, tous pères de famille."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Culture",
    "title": "Le Salon de 1900",
    "summary": "En raison de l'Exposition universelle, le Salon annuel des artistes français s'installera place de Breteuil dès le 6 avril, dans des halls temporaires nouvellement construits pour l'occasion.",
    "paragraphs": [
      "Cette année, les artistes ont dû trouver un nouveau refuge pour le Salon annuel, les palais habituels étant occupés par l'Exposition universelle. La Société des artistes français a choisi la place de Breteuil pour élever ses nouveaux halls.",
      "Le Salon ouvrira du 6 avril au 7 juin. Il comportera 32 salles, un hall de sculpture et des commodités modernes, malgré le caractère provisoire des constructions. Les frais s'élèvent à plusieurs centaines de milliers de francs, mais la Société espère un succès comparable aux années précédentes."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Social",
    "title": "Réunions du 18 mars",
    "summary": "L'anniversaire de la Commune de 1871 a été marqué hier par divers rassemblements populaires à Paris, notamment au cimetière du Père-Lachaise où des couronnes ont été déposées au Mur des fédérés.",
    "paragraphs": [
      "L'anniversaire de la Commune de 1871 a été célébré hier par de nombreux meetings populaires. À Paris, les principaux orateurs des partis avancés ont pris la parole. Au Père-Lachaise, quelques jeunes gens ont déposé des couronnes au Mur des fédérés."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Social",
    "title": "L'Orphelinat de l'enseignement primaire",
    "summary": "M. Alfred Mézières a présidé la remise des prix de l'Orphelinat de l'enseignement primaire, soulignant la précarité des orphelins du corps enseignant. M. Sauvoisin a reçu le prix Andoynot.",
    "paragraphs": [
      "M. Alfred Mézières a présidé hier la distribution annuelle des récompenses de l'Orphelinat de l'enseignement primaire. Il a exposé la situation difficile du personnel enseignant dont les orphelins sont souvent sans recours face à l'État.",
      "L'orphelinat aide à pallier cette lacune et a déjà secouru de nombreux enfants. Le prix Andoynot a été décerné à M. Sauvoisin."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Social",
    "title": "Union des chambres syndicales de France",
    "summary": "M. Paul Deschanel a présidé la distribution annuelle des médailles du travail au Grand-Hôtel, prônant l'entente cordiale et la nécessaire solidarité entre patrons et ouvriers pour la paix sociale.",
    "paragraphs": [
      "La distribution annuelle des récompenses aux ouvriers et employés de l'Union des chambres syndicales a eu lieu hier au Grand-Hôtel, sous la présidence de M. Paul Deschanel. M. Muzet a souligné l'importance de l'union entre patrons et ouvriers pour la paix sociale.",
      "M. Deschanel a prononcé un discours sur l'histoire du travail et des corporations, prônant l'union pour la vie. Des médailles du travail ont été remises aux employés ayant servi plus de trente ans dans la même maison."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Faits divers",
    "title": "Arrestation d'un jeune voleur",
    "summary": "Le jeune Louis Gelin, âgé de quinze ans, a été appréhendé par les agents de la force publique pour un vol commis au détriment d'une épicière de la rue de Belleville, au grand dam de ses honorables parents.",
    "paragraphs": [
      "Un jeune garçon, nommé Louis Gelin, âgé de quinze ans, a été arrêté par les agents de la police pour un vol commis au préjudice d'une épicière de la rue de Belleville. Ses parents, gens honorables, sont au désespoir devant cette conduite regrettable."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Échos",
    "title": "Nouvelles diverses",
    "summary": "La gare de Lyon se dote d'une horloge monumentale, tandis qu'un praticien berlinois identifie une nouvelle pathologie nerveuse, la « rage des cuisinières », provoquée par l'ardeur des fourneaux.",
    "paragraphs": [
      "L'on procède actuellement à l'installation de la nouvelle horloge de la gare de Lyon, dont les cadrans imposants mesurent cinq mètres de diamètre.",
      "Un médecin de Berlin vient de décrire la « rage des cuisinières », affection nerveuse inédite attribuée à la chaleur constante des fourneaux auxquels ces travailleuses sont exposées."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un bandit surnommé Fantasio",
    "summary": "Un malfaiteur, interpellé après une agression armée, a été conduit à l'infirmerie du dépôt. Il porte un tatouage singulier : une étoile à huit branches frappée d'une croix de Malte et du nom « Fantasio ».",
    "paragraphs": [
      "Un individu a été appréhendé après avoir dérobé la semaine de travail d'un ouvrier. Durant sa fuite, le malfaiteur fit feu à deux reprises sur le groupe qui le poursuivait, atteignant l'un des hommes au bras gauche.",
      "L'homme, qui refuse obstinément de révéler l'identité de ses complices, arbore un tatouage singulier sur le bras : une étoile à huit branches, une croix de Malte et le mot « Fantasio ». Il a été transféré à l'infirmerie du dépôt sous ce pseudonyme. L'instruction suit son cours."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Début d'incendie à l'Ambassade d'Autriche",
    "summary": "Un foyer d'incendie, provoqué vraisemblablement par une étincelle au cabinet du chargé d'affaires de l'ambassade d'Autriche, a été rapidement circonscrit par les secours hier après-midi.",
    "paragraphs": [
      "Un incendie s'est déclaré hier après-midi dans le cabinet du chargé d'affaires à l'ambassade d'Autriche. Grâce à la diligence des secours, le foyer fut éteint en moins d'un quart d'heure.",
      "L'accident, qui semble avoir été causé par une étincelle, n'a fort heureusement occasionné que des dégâts matériels très légers."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Lugubre trouvaille dans le canal Saint-Martin",
    "summary": "Des mariniers ont repêché une carpette contenant des effets ensanglantés dans le canal Saint-Martin. Le médecin légiste, le docteur Vibert, a confirmé que les traces de sang étaient d'origine humaine.",
    "paragraphs": [
      "Des mariniers ont repêché une carpette en jonc dans le canal Saint-Martin, aux abords de la voûte de la Bastille. À l'intérieur du paquet se trouvaient une chemise maculée ainsi que des caillots de sang.",
      "La découverte fut immédiatement signalée au commissariat de l'Arsenal. Le docteur Vibert, médecin légiste, a, après examen, confirmé qu'il s'agissait bien de sang humain."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident à Gennevilliers",
    "summary": "À Gennevilliers, la petite Henriette Deschaux, âgée de quatre ans, a fait une chute tragique depuis le deuxième étage de son domicile. Grièvement blessée, elle a été conduite d'urgence à l'hôpital des Enfants-Malades.",
    "paragraphs": [
      "Un accident navrant vient de se produire à Gennevilliers. La petite Henriette Deschaux, âgée de quatre ans, en voulant appeler sa mère, a basculé par une fenêtre du deuxième étage de son domicile.",
      "La malheureuse enfant, tombée sur le pavé, a été relevée avec de graves blessures au crâne et à la jambe. Les secours, mandés immédiatement, l'ont transportée d'urgence à l'hôpital des Enfants-Malades où elle a été admise dans un état inquiétant."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident de travail à Suresnes",
    "summary": "À Suresnes, Paul Isertei, ajusteur de trente-neuf ans, a été grièvement blessé à la poitrine par l'éclatement d'une meule émeri. Transporté à l'hôpital, son état est jugé désespéré par les médecins.",
    "paragraphs": [
      "Un grave accident du travail est survenu hier dans une usine de Suresnes. Le nommé Paul Isertei, ajusteur de trente-neuf ans, occupait son poste habituel lorsqu'une meule émeri a fait explosion soudainement.",
      "Atteint violemment à la poitrine par les éclats de la meule, l'ouvrier s'est effondré, perdant connaissance. Transporté d'urgence dans un établissement hospitalier, les médecins ont déclaré que son état était des plus critiques et que son pronostic vital demeurait désespéré."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Drame à Nanterre",
    "summary": "À Nanterre, un jardinier pris de fièvre chaude a semé l'effroi en tentant d'étrangler une passante. Lors de son arrestation, il a grièvement blessé le sergent de ville Bassina, dépêché sur les lieux.",
    "paragraphs": [
      "Un drame causé par une crise de folie s'est déroulé à Nanterre. Louis Nicolle, un jardinier de quarante-sept ans, pris d'un soudain accès de fièvre chaude, s'est jeté avec une violence inouïe sur une passante qu'il a tenté d'étrangler sur la voie publique.",
      "Le sergent de ville Bassina, accouru pour mettre fin à cette agression, a été violemment pris à partie par le forcené. Dans la lutte qui s'ensuivit, le représentant de l'ordre a été grièvement blessé par le jardinier, avant que celui-ci ne soit finalement maîtrisé par les passants."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Agression passionnelle à Pantin",
    "summary": "Émile Tréchède, journalier à Pantin, a violemment agressé son ancienne compagne et son nouveau compagnon avec une barre de fer. La femme est grièvement blessée, et le coupable a été arrêté après une lutte acharnée.",
    "paragraphs": [
      "Une agression d'une rare violence, inspirée par la jalousie, a eu lieu à Pantin. Émile Tréchède, journalier âgé de vingt-huit ans, a fait irruption au domicile de son ancienne compagne, armé d'une barre de fer, pour s'en prendre à elle et à son nouvel amant.",
      "Frappée avec une grande brutalité, la femme a reçu de graves blessures. Son compagnon, bien que menacé, a réussi à résister avec courage et à contenir l'agresseur jusqu'à ce que les voisins, alertés par les cris, ne viennent prêter main-forte et permettent l'arrestation du forcené."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Trois morts subites aux Lilas",
    "summary": "Le commissaire de police des Lilas, M. Clément, a dû procéder hier au constat de trois décès successifs : une congestion cérébrale, une mort solitaire et le décès tragique d'un cheminot dans une carrière.",
    "paragraphs": [
      "Le commissaire de police aux Lilas, M. Clément, a été requis hier pour procéder aux constatations d'usage sur trois décès survenus coup sur coup dans sa circonscription.",
      "Il s'agit d'abord du sieur Jean Potier, retrouvé inanimé chez lui, puis de Mme Brignan, qui a succombé brutalement à une congestion cérébrale. Enfin, le corps d'un cheminot a été découvert dans une carrière, où il avait été terrassé par le froid intense de ces dernières heures."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Rixe à Saint-Denis",
    "summary": "Une violente altercation entre deux hommes, François Marvino et Pierre Ajardie, causée par la rivalité pour une ouvrière cartonnière, a fini en agression sanglante. L'auteur a été arrêté par les autorités.",
    "paragraphs": [
      "Une vive dispute a éclaté entre les nommés François Marvino et Pierre Ajardie au sujet d'une ouvrière cartonnière de leur connaissance. La discussion, s'envenimant rapidement, a dégénéré en une rixe au cours de laquelle Marvino a porté plusieurs coups de couteau à son adversaire.",
      "Le blessé, Pierre Ajardie, a été immédiatement transporté à l'hôpital Lariboisière dans un état grave. L'agresseur, Marvino, a été arrêté sans difficulté et conduit au poste pour y être entendu par les autorités."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Vengeance brutale à Bagnolet",
    "summary": "Le repris de justice Jérôme Vossère a sauvagement agressé sa belle-sœur à l'aide d'une clé de porte, motivé par une rancœur tenace. L'individu a été interpellé et mis à la disposition de la police.",
    "paragraphs": [
      "Jérôme Vossère, un repris de justice bien connu des services, s'en est pris avec une rare brutalité à sa belle-sœur. Pour assouvir une vengeance qu'il couvait depuis longtemps, l'individu a frappé la malheureuse avec une lourde clé de porte.",
      "Avertis de ces violences, les agents de la force publique sont intervenus rapidement. Vossère a été interpellé sur les lieux et placé à la disposition de la police, qui a ouvert une instruction sur cette affaire."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident mortel à Bagnolet",
    "summary": "Le journalier Émile Roucler, âgé de quarante-trois ans, a fait une chute terrible de six mètres au fond d'une carrière. Grièvement blessé, il a été admis en urgence à l'hôpital Tenon.",
    "paragraphs": [
      "Un grave accident du travail est survenu hier à Bagnolet. Émile Roucler, un journalier âgé de quarante-trois ans, qui travaillait dans une carrière, a été victime d'une chute accidentelle d'une hauteur de six mètres.",
      "Grièvement atteint lors de sa réception au sol, le malheureux a reçu les premiers soins avant d'être conduit en toute hâte à l'hôpital Tenon. Son état, jugé très alarmant par les médecins, ne permet pas de se prononcer sur une issue favorable."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Enquête sur Mme Marie Jolie",
    "summary": "L'enquête sur Mme Marie Jolie, retrouvée blessée près de la voie ferrée, révèle qu'une fièvre soudaine l'a poussée, dans un moment de délire, à s'extraire d'un train en marche.",
    "paragraphs": [
      "L'enquête ouverte au sujet de Mme Marie Jolie, retrouvée en fâcheuse posture sur la voie publique, a enfin permis de faire la lumière sur cet étrange événement. Il est établi que la dame souffrait d'un violent accès de fièvre chaude.",
      "C'est manifestement dans cet état de délire que, prise d'un accès de panique, elle se serait précipitée hors du compartiment d'un train en marche, manquant de périr dans sa chute."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Cadavre découvert à Chatou",
    "summary": "Un corps d'homme inconnu a été repêché dans la Seine près d'un bateau-lavoir. Le médecin légiste privilégie l'accident ou le suicide. Des cartes au nom de Serrière ont été retrouvées sur le défunt.",
    "paragraphs": [
      "Le cadavre d'un homme dont l'identité n'a pu être établie a été repêché hier près d'un bateau-lavoir à Chatou. Le médecin, dépêché sur les lieux pour constater le décès, n'a relevé aucune trace de lutte ou de violence sur le corps, ce qui écarte la piste criminelle.",
      "Il semble s'agir, selon toute vraisemblance, d'un accident ou d'un acte de désespoir volontaire. La police a néanmoins trouvé sur la victime quelques cartes de visite portant le nom de Serrière, qui devront permettre d'identifier formellement le malheureux."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Drame à Versailles",
    "summary": "Un employé des chemins de fer de l'Ouest, découvert dans un état d'ébriété manifeste et gravement blessé à la tête, a succombé à ses blessures à l'hospice de Versailles sans avoir pu décliner son identité.",
    "paragraphs": [
      "Un homme portant l'uniforme des agents des chemins de fer de l'Ouest a été découvert inanimé, en état d'ivresse et grièvement blessé à la tête. Malgré les soins empressés qui lui furent prodigués, il est décédé à l'hospice de Versailles sans qu'il ait été possible d'établir son identité."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident à Pontoise",
    "summary": "Un tragique accident est survenu à Pontoise : le jeune ouvrier Louis Vincelos a péri asphyxié par les fumées d'un incendie accidentel survenu dans la cabane de cantonnier où il reposait.",
    "paragraphs": [
      "Louis Vincelos, un ouvrier âgé de vingt et un ans, a trouvé la mort, asphyxié par les fumées d'un incendie accidentel survenu durant son sommeil sur la couche de paille qu'il occupait dans une cabane de cantonnier."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Drame à Fontainebleau",
    "summary": "Un drame passionnel a ensanglanté Fontainebleau : M. Jean Dutreuil a fait feu sur son épouse, lui infligeant deux blessures mortelles, avant de retourner son arme contre lui-même. L'acte fut instantanément fatal.",
    "paragraphs": [
      "Un épouvantable drame passionnel a été commis à Fontainebleau. M. Jean Dutreuil a fait usage d'un revolver contre son épouse, l'atteignant de deux projectiles, avant de mettre fin à ses jours par le même moyen. La mort fut instantanée pour les deux époux."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Marchés Financiers",
    "title": "Bourse et Situation Économique",
    "summary": "La Bourse conserve une belle fermeté, soutenue par des recettes du Trésor satisfaisantes et la bonne tenue des valeurs bancaires, malgré des rumeurs persistantes mais infondées sur la Dette ottomane.",
    "paragraphs": [
      "La situation des marchés financiers, notamment en Italie, ainsi que l'état des recettes du Trésor, demeurent satisfaisants. Ces divers facteurs s'équilibrent, selon l'opinion générale de la Bourse, de manière assez précise.",
      "Il est fréquemment fait mention de remaniements possibles concernant la Dette ottomane, mais ces allégations ne semblent reposer sur aucun fondement sérieux. La conjoncture actuelle suffit d'ailleurs à justifier la fermeté des cours observée.",
      "La Banque de France progresse de 10 francs par rapport à la séance de samedi ; ses bilans hebdomadaires ne manifestent aucun signe de tension monétaire.",
      "L'assemblée annuelle du Crédit lyonnais s'est tenue à Lyon ; l'on s'attend à ce qu'une éventuelle augmentation du capital y soit évoquée. Les autres établissements de crédit enregistrent également des progressions marquées.",
      "Les variations sur le titre de la Banque ottomane sont demeurées insignifiantes."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Chemins de Fer",
    "title": "Recettes et Activité des Réseaux",
    "summary": "La semaine ferroviaire se caractérise par une hausse des recettes sur les grands réseaux. Le marché boursier se montre globalement optimiste, en particulier pour les titres des chemins de fer espagnols.",
    "paragraphs": [
      "Les recettes enregistrées par les six grands réseaux, pour la période du 26 février au 4 mars, marquent une augmentation notable.",
      "À l'exception des titres du Nord et du Lyon, le marché des actions s'est montré peu animé au cours de la semaine. Les valeurs de l'Est et du Midi sont restées stables, tandis que celles de l'Ouest et de l'Orléans ont légèrement fléchi.",
      "La semaine fut brillante pour les Chemins espagnols, portés par l'espoir que le gouvernement accorde aux compagnies les prolongations de concession sollicitées."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Actualité Économique",
    "title": "Entreprises et Transports en Commun",
    "summary": "Analyse de la cote boursière : repli du canal de Suez, progression des Transatlantiques et essor marqué des compagnies de tramways électriques et de la Compagnie des Wagons-Lits.",
    "paragraphs": [
      "Le canal de Suez a vu ses recettes diminuer comparativement à l'exercice précédent. Les Messageries maritimes maintiennent leurs positions, tandis que la Compagnie générale transatlantique affiche des progrès sensibles.",
      "La reprise de la Compagnie générale des omnibus s'accentue avec l'avènement de M. Boulanger, ancien président de la Cour des comptes, à sa présidence.",
      "L'attention du public se porte de plus en plus vers les entreprises de transport électrique. La Société française de tramways électriques et de voies ferrées a fait son apparition sur le marché en tant que trust financier.",
      "La Compagnie internationale des wagons-lits affiche des résultats brillants, expliquant la fermeté de ses cours."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Feuilleton",
    "title": "Jacques d'Angeville",
    "summary": "Jean et Jeanne de Vrigny retrouvent Jacques d'Angeville. Paul Tavernier, en proie à ses réflexions sur l'héritage et le passé, prépare son installation dans le bourg d'Orvilliers.",
    "paragraphs": [
      "Jean et Jeanne de Vrigny rentraient en compagnie de Jacques d'Angeville. Jeanne se mit au piano et improvisa une valse lente, tandis que Paul Tavernier observait pensivement le portrait de sa mère.",
      "Paul Tavernier, resté seul, s'interrogeait sur son héritage émotionnel et sur les injustices du sort qu'il espérait réparer. Il dialogua avec sa vieille servante, la mère Antoine, concernant son passé et son départ prochain pour la Normandie.",
      "Le bourg d'Orvilliers accueillit avec enthousiasme l'arrivée du nouveau médecin, ami de M. Bernay, et Paul Tavernier commença son installation dans sa nouvelle propriété."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Chronique Littéraire",
    "title": "La Peau de Chagrin",
    "summary": "Analyse du chef-d'œuvre de Balzac. La peau d'onagre, par sa réduction à chaque souhait exaucé, devient le symbole tragique de l'usure de la vie et de la fin inéluctable.",
    "paragraphs": [
      "Dans l'un des récits de Balzac, le héros devient possesseur d'une peau de chagrin aux vertus merveilleuses. Chaque souhait exaucé réduit la taille de la peau, symbolisant ainsi l'usure de l'existence et la fin inéluctable.",
      "Cette œuvre, bien que mélancolique, contient un enseignement profond sur la condition humaine : chaque acte et chaque émotion contribue à l'érosion de notre être. La maladie ne fait qu'accélérer ce processus inévitable."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Mines",
    "title": "Statistiques et Perspectives Minières",
    "summary": "Le congrès minier de Kharkov souligne la richesse des gisements de Krivoï-Rog. La guerre anglo-boer pèse sur les mines d'or de Johannesburg, suscitant l'inquiétude des investisseurs.",
    "paragraphs": [
      "Le congrès minier de Kharkov publie des chiffres relatifs aux réserves minières du bassin de Krivoï-Rog, soulignant la richesse exceptionnelle des minerais de Joltaia-Rieka.",
      "Les mines d'or ont fléchi ; les spéculations sur le sort de Johannesburg, en raison de la guerre anglo-boer, inquiètent vivement les investisseurs, bien que la destruction totale de la ville soit jugée peu probable."
    ]
  }
];
