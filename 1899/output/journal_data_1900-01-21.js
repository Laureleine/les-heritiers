// Date: 1900-01-21
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-21 (Version Restaurée, 53 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage Secret",
    "summary": "Annonce de la parution prochaine du roman 'Mariage Secret' de Paul Debenay dans Le Petit Parisien, une œuvre dramatique promettant de vives émotions autour du destin tragique d'une mère et de sa fille.",
    "paragraphs": [
      "Le Petit Parisien publiera bientôt un grand roman inédit intitulé Mariage Secret, un récit dramatique et passionné qui se déroule au milieu d'émouvantes péripéties.",
      "C'est l'histoire d'une mère et de sa fille jetées, à la suite d'une aventure romanesque, dans le milieu parisien, et dont les infortunes méritées provoqueront chez nos lectrices de poignantes émotions.",
      "MARIAGE SECRET a été tout spécialement écrit pour le Petit Parisien par Paul Debenay, dont le talent, fait d'émotion vraie, est si goûté du grand public.",
      "Nos lecteurs retrouveront dans MARIAGE SECRET les qualités qui distinguent l'auteur d'Orpheline d'Alsace, Celle qu'on aime, Sacrifiée à l'amour, et autres ouvrages."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Politique Coloniale",
    "title": "Les Nouvelles-Hébrides",
    "summary": "Analyse de la situation aux Nouvelles-Hébrides : l'enjeu stratégique pour la France dans le Pacifique et les perspectives de règlement diplomatique définitif avec l'Angleterre.",
    "paragraphs": [
      "Les pouvoirs publics se préoccupent vivement d'assurer notre puissance maritime dans des proportions équitables, légitimées par le rôle de la France dans le monde. Sans prétendre à une suprématie navale impossible, nous voulons maintenir la liberté des mers et obliger l'Angleterre elle-même à compter avec notre flotte.",
      "La question de la possession de l'archipel des Nouvelles-Hébrides se soulève ; ces îles étant très voisines de la Nouvelle-Calédonie, elles en constituent une annexe naturelle et ne pourraient tomber entre des mains étrangères sans enlever à Nouméa sa valeur militaire.",
      "Or, présentement, les Nouvelles-Hébrides n'appartiennent à personne. Il y existe une sorte de condominium entre la France et l'Angleterre, état de choses dont on a vu souvent les inconvénients.",
      "Une étude très intéressante de M. Jean Carel fournit des renseignements précis sur l'historique de la question, montrant comment elle est née et comment elle aurait dû être évitée. Avec un peu de prévoyance, notre souveraineté eût été établie aux Nouvelles-Hébrides aussi facilement qu'en Nouvelle-Calédonie.",
      "L'opposition à l'annexion par la France venait surtout des Australiens ; on prétend qu'elle est moins vive à présent, depuis que la France a renoncé à envoyer ses forçats dans l'océan Pacifique. La question est mûre et il semble que les circonstances soient favorables pour la résoudre d'accord avec l'Angleterre."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions",
    "summary": "Extrait de 'Deux Passions' : Georges Dufresne reçoit une convocation suspecte de Bonnemare, tandis que la grâce de Colette enchante le vicomte Jean de Vrigny.",
    "paragraphs": [
      "Le lendemain matin, le facteur se présenta dès huit heures avec la lettre attendue : « Mon bon Dufresne, prière de venir ici, au reçu de ce petit mot ; il s'agit d'une affaire extrêmement intéressante pour moi et dans laquelle j'ai besoin de tes conseils. »",
      "Il n'y avait pas un mot de vrai dans cette lettre destinée à masquer une trahison. Ce gros Bonnemare n'était cependant pas plus malhonnête qu'un autre.",
      "Dès que la voiture fut prête, Georges Dufresne s'élança sur les coussins, prit les rênes en main et demanda : « On n'a pas vu Tavernier ce matin ? »",
      "Le vicomte Jean de Vrigny avait eu la main heureuse. Elle était charmante, cette Colette. Avec son tablier blanc sur sa jupe noire, son corsage rebondi et sa mine fraîche et avenante, elle aurait rendu la gaieté à une demi-douzaine de podagres et de dyspeptiques."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "La Question Budgétaire",
    "summary": "M. Maurice Faure reprend son poste de rapporteur du budget de l'Instruction publique suite à la décision de la commission de maintenir les crédits destinés aux instituteurs.",
    "paragraphs": [
      "M. Maurice Faure, rapporteur du budget de l'Instruction publique, avait donné sa démission à la suite d'un vote émis par la commission du budget sur la question des instituteurs. Après une nouvelle discussion, la commission a modifié sa décision en maintenant le crédit antérieurement voté ; M. Maurice Faure a repris ses fonctions.",
      "La commission a par ailleurs examiné un amendement de M. Georges Berger concernant l'installation de pavillons de sociétés coopératives ouvrières à l'Exposition de 1900. Le ministre des Finances a demandé du temps pour examiner cet amendement, ainsi qu'un autre de M. Viviani proposant d'élever le crédit à 500 000 francs.",
      "La commission a enfin entendu M. Caillaux concernant les crédits pour l'Exposition et les réparations à l'Élysée, ne validant finalement que les crédits pour le palais présidentiel."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "International",
    "title": "La Liberté des Mers",
    "summary": "Apaisement diplomatique entre Londres et Berlin après la saisie de navires allemands. M. de Bülow prône une clarification du droit maritime pour garantir la navigation neutre.",
    "paragraphs": [
      "Le gouvernement anglais a exprimé ses regrets au sujet de la saisie des paquebots allemands par des croiseurs britanniques et a promis de payer des indemnités. C'est un fait important car il implique l'abandon des droits maritimes excessifs que l'on prétendait s'arroger en Angleterre.",
      "M. de Bülow, ministre des Affaires étrangères allemand, a formulé devant le Reichstag des principes conformes aux règles internationales sur la liberté des mers. Il est indispensable que le droit maritime en temps de guerre soit clairement fixé pour que la visite des navires neutres ne soit plus arbitraire."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Désastre Financier à Saint-Brieuc",
    "summary": "La faillite du négociant en beurres et œufs Joulaud, totalisant un passif de 2,5 millions de francs, entraîne la chute de la banque Couet et consterne le département des Côtes-du-Nord.",
    "paragraphs": [
      "Le tribunal de commerce de Saint-Brieuc a prononcé la faillite de M. Joulaud, important négociant en beurres et œufs, dont le passif s'élève à deux millions cinq cent mille francs.",
      "Par suite de ce désastre, la banque Couet a été contrainte de cesser ses paiements. Ce krach produit une émotion considérable dans tout le département, le petit commerce et la modeste épargne se trouvant durement frappés."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Extrême-Orient",
    "title": "Nouvelles de Chine et du Japon",
    "summary": "Entre l'apparition de la peste bubonique, les convoitises japonaises sur les côtes coréennes et les tensions fiscales à Yokohama, la situation demeure préoccupante en Extrême-Orient.",
    "paragraphs": [
      "Un jeune employé a succombé à la peste bubonique à Fukia-Mura après avoir manipulé du riz en provenance de New-Chang.",
      "Le gouvernement japonais a sollicité du gouvernement coréen la cession à bail de zones côtières destinées à l'établissement de stations de pêche. Par ailleurs, une riche veine de fer a été découverte au Japon, dans le mont Kuritani.",
      "Les résidents français et allemands de Yokohama refusent de s'acquitter des nouvelles taxes municipales. Enfin, divers actes de piraterie ont été signalés dans la région de Kumchuk."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Guerre des Boers",
    "title": "Les Opérations Autour de Ladysmith",
    "summary": "Sir Redvers Buller progresse vers la Tugela pour secourir Ladysmith. Malgré une logistique complexe et des retranchements ennemis formidables, l'artillerie britannique prépare l'offensive.",
    "paragraphs": [
      "Sir Redvers Buller est désormais au contact de l'ennemi. La marche des troupes anglaises du Natal vers la Tugela, entreprise pour secourir Ladysmith par l'ouest, a constitué une opération complexe ayant nécessité la mobilisation de cinq mille bêtes de somme.",
      "Le général Warren occupe actuellement le gué de Trichardt, tandis que le colonel Dundonald se positionne à l'extrême gauche, aux environs d'Acton-Homes. Les forces britanniques se heurtent à des retranchements boers fortifiés.",
      "Des échanges de canonnade ont été signalés entre les positions de Zwartkop et les redoutes boers. Dans le camp anglais, les préparatifs d'attaque s'intensifient, bien que la mission soit jugée redoutable."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Nouvelles de Pretoria et Johannesburg",
    "summary": "Les forces britanniques échouent à déloger les troupes du commandant Delarey près de Colesberg. Entre escarmouches, retraites forcées et duels d'artillerie, la situation demeure incertaine.",
    "paragraphs": [
      "Les Britanniques ont tenté aujourd'hui de déloger les Boers d'une position tenue par le commandant Delarey, mais ils ont dû battre en retraite, poursuivis par le feu des obus ennemis.",
      "Une offensive anglaise sur Wagon-Bridge a également été repoussée. Les détails de cet engagement révèlent qu'il fut provoqué par une attaque boer contre une position occupée par les troupes britanniques.",
      "Après avoir infligé quelques pertes aux Anglais, les Boers se sont retirés, déplorant un tué et deux blessés dans leurs rangs.",
      "Une violente canonnade se poursuit quotidiennement autour de Colesberg, sans toutefois produire d'effet décisif."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Capture d'une patrouille à Colesberg",
    "summary": "Grâce à une manœuvre d'encerclement bien menée près de Colesberg, le commandant Delarey a isolé une patrouille britannique, causant de lourdes pertes au détachement australien.",
    "paragraphs": [
      "Le commandant Delarey, ayant reçu l'information qu'une patrouille anglaise occupait une ferme à six milles de sa position, a dépêché trois unités pour couper la retraite à l'ennemi.",
      "Le détachement anglais, fort de cent hommes, disposait de trois canons. L'artillerie boer, cependant, n'a pu arriver à temps pour engager le combat contre les forces britanniques.",
      "L'une des patrouilles boers est parvenue à isoler un détachement de vingt-cinq Australiens, dont cinq ont été tués et onze faits prisonniers."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Engagements dans l'armée boër",
    "summary": "Le ministre de la République sud-africaine, le Dr Leyds, décline toute implication dans le recrutement de volontaires. Les citoyens désirant rejoindre les rangs boërs agissent désormais sous leur entière responsabilité.",
    "paragraphs": [
      "Par une note publiée hier, le docteur Leyds, ministre de la République sud-africaine, déclare qu'il n'est pas autorisé par son gouvernement à recevoir les demandes d'engagement à destination de l'armée boër.",
      "Toutes les personnes qui voudraient se rendre sur le théâtre de la guerre doivent donc le faire à leurs risques et périls."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Mobilisation et critiques contre le War Office",
    "summary": "La 6e division est mobilisée à Aldershot. Parallèlement, le War Office essuie de vives critiques concernant le manque de transparence sur le sort des officiers et soldats disparus sur le front sud-africain.",
    "paragraphs": [
      "Les journaux annoncent que la 6e division a reçu l'ordre de se mobiliser immédiatement à Aldershot.",
      "On se plaint vivement de la manière dont les renseignements relatifs aux militaires combattant en Afrique du Sud sont communiqués aux familles.",
      "Ainsi, jusqu'à présent, il a été impossible de connaître le sort de M. K.-R. Mackensie, commandant en second le 2e bataillon des Seaforth Highlanders, depuis le combat de Magersfontein. Cet officier supérieur n'a été retrouvé ni parmi les morts, ni dans les listes de prisonniers dressées par les Boërs.",
      "Si de telles lacunes sont possibles pour un officier supérieur, on peut aisément concevoir le peu de considération dont le War Office fait preuve à l'égard du sort des simples soldats."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Appréciation des opérations",
    "summary": "La Gazette de Cologne s'interroge sur la stratégie du général Buller au Tugela. L'éloignement des bases logistiques rend incertain le succès de cette expédition malgré l'aménagement d'une voie ferrée.",
    "paragraphs": [
      "La Gazette de Cologne exprime un scepticisme marqué concernant la tentative du général Buller sur la haute Tugela.",
      "Buller a dû patienter plusieurs jours avant de s'engager dans le Potgieters Drift, laissant aux Boërs tout le loisir de surveiller ses mouvements.",
      "Il semble, en somme, que les Anglais soient loin d'être délivrés de leurs inquiétudes.",
      "Fait notable, les troupes britanniques s'éloignent pour la première fois de leurs lignes d'approvisionnement habituelles. Bien que le général Buller ait emporté deux cent soixante-dix voitures de bagages et entrepris la construction d'un chemin de fer de campagne, l'issue de cette opération demeure fort incertaine."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Rapport sur les blessures des soldats",
    "summary": "Un rapport médical sur la bataille de la Tugela révèle une statistique singulière : une grande majorité des blessures des soldats anglais sont situées aux membres inférieurs, suggérant un tir bas des Boërs.",
    "paragraphs": [
      "Un médecin-major de l'armée anglaise, présent lors de la bataille de la Tugela, a transmis à sa hiérarchie un rapport détaillé sur la nature et la localisation des blessures subies par les soldats britanniques.",
      "Sur 285 sous-officiers et soldats blessés le 15 décembre dernier, 26 seulement ont été touchés à la tête ou au cou, 23 à la poitrine ou aux épaules, tandis que 76 l'ont été aux cuisses et 124 aux jambes ou aux pieds. Cette statistique curieuse tend à démontrer que les Boërs tirent fort bas.",
      "Le médecin-major ajoute que les blessures observées sont aussi humaines que possible et que les cas d'hémorragies graves sont exceptionnels."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Lettre d'un officier allemand dans l'armée boër",
    "summary": "Un officier allemand souligne l'inefficacité des généraux britanniques et vante la précision de l'artillerie boër, dirigée notamment par le colonel français de Villebois-Mareuil.",
    "paragraphs": [
      "La revue anglaise 'To-Day' publie une longue missive d'un officier allemand servant comme colonel dans l'état-major de l'armée boër.",
      "Celui-ci critique sévèrement les généraux Symons, White et Buller, dont il qualifie les procédés stratégiques d'enfantins, peu pratiques et dénués de toute logique.",
      "Il confirme la présence du colonel comte Georges de Villebois-Mareuil en tant que chef d'état-major général, ainsi que celle d'officiers français aux commandes de l'artillerie.",
      "Il révèle enfin la méthode du commandant Albrecht pour régler le tir : le marquage préalable du terrain par des balises permet à l'artillerie boër de frapper avec une précision redoutable les troupes du baron Methuen.",
      "L'officier indique que le général Cronje dispose actuellement de 8 000 hommes et de 22 batteries de campagne."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles internationales",
    "title": "Les Russes dans l'Asie centrale",
    "summary": "Une étude du comte von Wartenburg expose les progrès de l'expansion militaire russe en Asie centrale, soulignant la puissance des garnisons impériales et l'importance stratégique de l'armée afghane.",
    "paragraphs": [
      "Une brochure du comte von Wartenburg, chef de division à l'état-major général de l'armée allemande, expose les progrès considérables des Russes dans l'Asie centrale.",
      "Le gouvernement impérial dispose désormais de près de 63 000 hommes répartis dans les garnisons de Khiva, Kokand, Tachkent et Samarcande, appuyés par 98 canons.",
      "La mobilisation rapide des troupes russes s'effectuerait avec une grande facilité, grâce à la mise en service efficace du chemin de fer transcaspien.",
      "L'auteur conclut que la victoire finale restera à la puissance qui saura s'assurer, avec diplomatie et autorité, le concours indispensable de l'armée afghane."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles maritimes",
    "title": "Le renflouement du cuirassé Grand-Amiral-Apraxine",
    "summary": "L'administration de la marine russe reporte les opérations de sauvetage du cuirassé Grand-Amiral-Apraxine au printemps prochain, suite à son échouement près de l'île Hochland.",
    "paragraphs": [
      "L'administration de la marine russe a officiellement décidé d'attendre le retour des beaux jours au printemps pour tenter les délicates opérations de renflouement du cuirassé Grand-Amiral-Apraxine, échoué fâcheusement près de l'île Hochland."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Nouvelles maritimes",
    "title": "Délégation des agents techniques des arsenaux",
    "summary": "M. de Lanessan, ministre de la Marine, a reçu les représentants des arsenaux pour discuter des réformes sociales, promettant de poursuivre l'amélioration du sort du personnel.",
    "paragraphs": [
      "Le ministre de la Marine, M. de Lanessan, a reçu ce jour une délégation composée de maîtres et contremaîtres des arsenaux, venus lui exprimer leur gratitude pour les réformes salutaires introduites par les décrets du 15 janvier.",
      "Le ministre a tenu à souligner, au cours de cet entretien, que ces premières réformes ne constituent que le début d'une série de mesures destinées à améliorer durablement la situation du personnel."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Nouvelles maritimes",
    "title": "Une tournée du sous-marin Gustave-Zédé",
    "summary": "Le sous-marin Gustave-Zédé a démontré son endurance lors d'une inspection sur le littoral toulonnais, escorté par le remorqueur Lutin pour garantir la sécurité de la navigation.",
    "paragraphs": [
      "Le sous-marin Gustave-Zédé a effectué avec succès une tournée d'inspection sur le littoral est de l'arrondissement de Toulon, poussant sa navigation jusqu'aux eaux de Villefranche.",
      "Cette mission probante confirme l'endurance remarquable du bâtiment et la ferme volonté de l'utiliser loin de son port d'attache, tout en étant convoyé par le remorqueur Lutin par mesure de prudence réglementaire."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits divers",
    "title": "Le périple de Mme Keldseth",
    "summary": "Mme Alma Keldseth, veuve norvégienne, a réussi l'exploit de traverser l'Europe à pied sans argent, trouvant en France une terre de générosité et d'accueil après un périple éprouvant.",
    "paragraphs": [
      "Mme Alma Keldseth, veuve d'un journaliste norvégien, a accompli un pari audacieux en se rendant à pied de Christiania à Paris sans disposer de la moindre ressource financière.",
      "Au cours de son périple à travers la Suède, le Danemark, l'Allemagne et la France, elle a dû travailler comme gouvernante ou ouvrière pour subsister. Elle a décrit la traversée de l'Allemagne comme la plus pénible en raison de l'hostilité rencontrée, tandis qu'elle fut chaleureusement accueillie par la population en France.",
      "Elle rejoint ainsi la galerie illustre des voyageuses célèbres telles que Mme Livingstone, Mme Dieulafoy ou encore Mme Peary."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits divers",
    "title": "Trois enfants blessés sur la voie ferrée",
    "summary": "Un tragique accident ferroviaire à Hamoir : trois enfants surpris par un convoi ont été renversés. Un enfant a succombé, tandis que les deux autres ont été grièvement mutilés, nécessitant des amputations.",
    "paragraphs": [
      "Un accident fort regrettable a été signalé à Hamoir, dans les environs de Liège. Trois jeunes enfants, surpris par le passage impestif d'un convoi, ont été renversés par la machine. L'un d'eux a malheureusement succombé à ses blessures sur le coup.",
      "Parmi les deux survivants, l'un a été grièvement atteint à la tête et a dû subir l'amputation d'une jambe, tandis que le second présente une section nette au niveau du poignet, nécessitant des soins chirurgicaux immédiats."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits divers",
    "title": "Grand scandale à Berlin",
    "summary": "Révélation d'un scandale sanitaire aux abattoirs de Berlin : des viandes tuberculeuses et trichinées étaient frauduleusement écoulées dans la consommation publique depuis plusieurs années au lieu d'être détruites.",
    "paragraphs": [
      "Un scandale retentissant vient d'éclater aux abattoirs de Berlin. Il a été formellement établi que, depuis plusieurs années, des viandes tuberculeuses et trichinées étaient systématiquement livrées à la consommation publique au lieu d'être dirigées vers les équarrissages pour y être dûment détruites."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits divers",
    "title": "Capture d'Osman Digna",
    "summary": "Le chef soudanais Osman Digna a été capturé ce matin aux abords de Tokar. Il est attendu à Souakim dans le courant de la journée de demain pour y être écroué.",
    "paragraphs": [
      "La nouvelle est parvenue ce matin : le chef Osman Digna a été capturé aux abords de Tokar. Il est attendu à Souakim dans le courant de la journée de demain pour y être écroué par les autorités compétentes."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Santé",
    "title": "Un cas suspect à Cracovie",
    "summary": "Décès suspect de M. Kostanecki à Cracovie : les autorités sanitaires ont placé son entourage en isolement et fermé l'Institut bactériologique par précaution contre une éventuelle propagation de la peste.",
    "paragraphs": [
      "M. Kostanecki, attaché à l'Institut bactériologique de Cracovie, a succombé à une maladie soudaine hier. Par mesure de précaution contre une éventuelle propagation de la peste, des examens rigoureux ont été pratiqués à Cracovie ainsi qu'à Vienne.",
      "Bien qu'aucun bacille pesteux n'ait été formellement découvert lors des analyses, la famille du défunt a été placée en isolement et l'Institut demeure fermé jusqu'à nouvel ordre. L'autopsie a toutefois révélé une affection infectieuse aiguë dont la nature exacte demeure encore à déterminer par les spécialistes."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Tribunaux",
    "title": "Le martyre d'un enfant",
    "summary": "Le tribunal de Nogent-le-Rotrou condamne les époux Hayes à un an de prison pour les sévices cruels infligés à leur beau-fils, Gustave Esnault, retrouvé dans un état de misère extrême.",
    "paragraphs": [
      "Les époux Hayes ont comparu devant le tribunal de Nogent-le-Rotrou, qui les a condamnés à une peine d'un an d'emprisonnement chacun pour les mauvais traitements infligés au jeune Gustave Esnault, leur beau-fils.",
      "L'enfant, dans un état de rachitisme avancé et le corps couvert de traces de coups, avait trouvé refuge auprès d'un cultivateur après avoir été, dans un accès de cruauté, jeté par ses geôliers dans une mare de purin."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Tribunaux",
    "title": "Une fillette assassinée",
    "summary": "Louis Bouvier, âgé de 37 ans, a été condamné par la cour d'assises de Seine-et-Marne aux travaux forcés à perpétuité pour le meurtre de la jeune Julia Boistel, 14 ans, découverte étranglée dans le canal de l'Ourcq.",
    "paragraphs": [
      "La cour d'assises de Seine-et-Marne vient de rendre son verdict concernant l'affaire de l'assassinat de la jeune Julia Boistel, âgée de quatorze ans, à Trilbardou. Louis Bouvier, trente-sept ans, a été reconnu coupable et condamné à la peine des travaux forcés à perpétuité.",
      "L'instruction avait démontré que le corps de la malheureuse victime avait été retrouvé, étranglé, dans les eaux du canal de l'Ourcq, clôturant ainsi une affaire qui avait profondément ému la contrée."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Tribunaux",
    "title": "Nouvelles judiciaires",
    "summary": "La Cour de cassation a annulé la condamnation à mort de Jean Caussade, faute de régularité dans les débats. Par ailleurs, vingt-quatre prévenus seront traduits en justice pour les troubles survenus à Saint-Étienne.",
    "paragraphs": [
      "La chambre criminelle de la Cour de cassation a rendu un arrêt important cassant la condamnation à mort prononcée contre Jean Caussade. La haute juridiction a relevé une irrégularité manifeste, un juré ayant exprimé son opinion personnelle lors des débats, entachant ainsi la sérénité du procès.",
      "D'autre part, la justice se prépare à juger vingt-quatre individus, arrêtés lors des troubles survenus le 4 janvier dernier à Saint-Étienne, dont la comparution est fixée pour la semaine prochaine."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Social",
    "title": "Les tisseurs de Saint-Etienne",
    "summary": "À l'issue d'une séance à la Chambre de commerce, les fabricants de rubans de Saint-Étienne ont formellement ratifié l'accord sur le paiement obligatoire de la mise en train.",
    "paragraphs": [
      "Une avancée notable a été enregistrée à la Chambre de commerce de Saint-Étienne. Réunis en séance, les fabricants de rubans ont officiellement adopté le principe du paiement de la mise en train, accédant ainsi aux revendications portées par les ouvriers tisseurs."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Echos et nouvelles",
    "title": "Le Président Loubet à Paris",
    "summary": "Le Président de la République et Madame Loubet ont honoré de leur présence l'exposition du cercle Volney et ont pris part aux bals de la société polytechnicienne et des écoles de commerce.",
    "paragraphs": [
      "Le Président de la République et Madame Loubet ont honoré de leur visite l'exposition organisée par le cercle Volney. Le couple présidentiel a également pris part aux réceptions mondaines du week-end, assistant notamment aux bals donnés par la Société amicale des anciens élèves de l'École polytechnique ainsi que par l'Union des Écoles supérieures de commerce."
    ]
  },
  {
    "id": 30,
    "page": 2,
    "category": "Faits divers",
    "title": "Vols à la Villette",
    "summary": "Un vol audacieux a été commis hier aux abattoirs de la Villette. Des malfaiteurs ont réussi à s'emparer des fonds récoltés par les bouchers au cours de leur journée de travail.",
    "paragraphs": [
      "Un vol, manifestement préparé avec soin, a été perpétré hier matin au sein des abattoirs de la Villette. Les malfaiteurs, dont l'identité demeure encore inconnue, ont réussi à dérober l'ensemble des sommes d'argent encaissées par les bouchers durant cette journée de labeur."
    ]
  },
  {
    "id": 31,
    "page": 2,
    "category": "Faits divers",
    "title": "Accidents parisiens",
    "summary": "Un septuagénaire a été grièvement blessé rue de Vanves en chutant d'un tramway. La victime a été transportée d'urgence à l'hôpital dans un état jugé alarmant par les autorités.",
    "paragraphs": [
      "Un septuagénaire, M. V..., a été grièvement blessé après une chute d'un tramway, rue de Vanves. Il a été transporté à l'hôpital dans un état alarmant."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une tentative de vol par ruse",
    "summary": "Un Italien en voyage à Paris s'est fait dérober sa fortune après avoir confié ses bagages à un inconnu complaisant devant le bureau de poste du boulevard Voltaire. L'enquête est en cours.",
    "paragraphs": [
      "Au bureau de poste du boulevard Voltaire, un homme avait, dit-il, une lettre à destination de l'Italie. Il pria négligemment un individu de son voisinage d'aller acheter un timbre et de la jeter à la boîte.",
      "Quand Modicelli ressortit, la voiture contenant l'intendant, son nouvel ami, ses bagages et sa petite fortune avait disparu. Après avoir cherché pendant près de deux heures dans le quartier, notre homme finit par s'adresser à un gardien de la paix qui, flairant une supercherie, le reconduisit au commissariat de police de M. Gouliard.",
      "Ce magistrat n'a pu que recevoir la plainte du malheureux Italien, qui n'en revenait pas d'avoir été ainsi dépouillé."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide d'un employé de commerce",
    "summary": "L'employé de commerce Charles Brown, âgé de trente-deux ans, a mis fin à ses jours en se tirant une balle dans la tête au domicile de son beau-frère. Le malheureux a succombé à ses blessures à l'Hôtel-Dieu.",
    "paragraphs": [
      "Avant-hier soir, vers huit heures, un employé de commerce, M. Charles Brown, âgé de trente-deux ans, demeurant 87, rue des Archives, qui se trouvait chez son beau-frère, 33, rue de Rambuteau, s'est tiré un coup de revolver dans la tête.",
      "Transporté à l'Hôtel-Dieu, ce malheureux y est mort quelques minutes après.",
      "On ignore les motifs qui l'ont déterminé à se donner la mort."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort subite avenue Parmentier",
    "summary": "Une femme d'environ quarante ans est décédée subitement sur la voie publique, avenue Parmentier. L'identité de la défunte étant inconnue, le corps a été transféré à la Morgue par les autorités.",
    "paragraphs": [
      "Hier matin, vers neuf heures, une femme qui passait devant le numéro 4 de l'avenue Parmentier, s'est subitement affaissée sur le trottoir.",
      "Quand on la releva, elle était morte.",
      "Il a été impossible d'établir l'identité de la malheureuse, une femme d'environ quarante ans, dont le cadavre a été envoyé à la Morgue."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de la circulation rue Geoffroy-Saint-Hilaire",
    "summary": "Un passant, M. Cadard, a été grièvement renversé par une voiture rue Geoffroy-Saint-Hilaire. Souffrant de fractures aux deux jambes, il a été hospitalisé ; le cocher a été mis à la disposition du commissaire.",
    "paragraphs": [
      "Hier soir, une voiture, dont le cocher a été arrêté et mis à la disposition de M. Thuillier, commissaire de police, a renversé, rue Geoffroy-Saint-Hilaire, un passant, M. Cadard, âgé de quarante-neuf ans. Ce dernier, ayant eu les deux jambes cassées, a été transporté à l'hôpital de la Pitié."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accidents divers en banlieue",
    "summary": "Une série d'accidents frappent la banlieue : une femme renversée à Neuilly, un ouvrier grièvement blessé à Bois-Colombes, et une chute sévère survenue à l'usine de Saint-Gobain à Aubervilliers.",
    "paragraphs": [
      "Courbevoie. Mme veuve Augustine Dutailly, âgée de cinquante-neuf ans, demeurant à Neuilly, passait hier matin boulevard Bineau quand elle fut renversée par une voiture de laitier. La malheureuse a dû être transportée à l'hôpital Beaujon.",
      "Bois-Colombes. Un ouvrier ajusteur, Pierre Valcot, âgé de vingt-deux ans, demeurant à Bois-Colombes, a été grièvement blessé, hier soir, à l'atelier, par un fer qui a pénétré au-dessous de l'œil et a occasionné une plaie profonde. Après un premier pansement, le blessé a dû être porté à son domicile.",
      "Aubervilliers. M. Daniel Buchy, ouvrier cordonnier, âgé de trente-deux ans, travaillant à l'usine de Saint-Gobain, rue du Landy, était monté hier après-midi sur une échelle, à huit mètres de hauteur, pour faire une réparation, lorsqu'il perdit l'équilibre et s'abîma sur le sol."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Banquet des Combattants à Asnières",
    "summary": "Sous la présidence de M. Laurent-Cély, les anciens combattants d'Asnières ont célébré leur traditionnel banquet, agrémenté d'un concert et d'un assaut d'armes, dans une ambiance des plus festives.",
    "paragraphs": [
      "Asnières. Le banquet des Combattants a eu lieu hier soir, à sept heures, sous la présidence de M. Laurent-Cély, conseiller général, dans la salle du quai d'Asnières.",
      "Après le banquet a eu lieu un brillant concert et un assaut d'épée entre professeurs et amateurs.",
      "La fête a été des mieux réussies et s'est prolongée bien avant dans la nuit."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression violente à Plaine-Saint-Denis",
    "summary": "Un employé de commerce, M. Jules Bourion, a été sauvagement agressé par trois individus à la Plaine-Saint-Denis. Grâce au signalement de la victime, le commissaire L'Homme a pu arrêter les malfaiteurs.",
    "paragraphs": [
      "Plaine-Saint-Denis. Un employé de commerce, M. Jules Bourion, âgé de cinquante-cinq ans, demeurant rue du Landy, rentrait chez lui vers onze heures du soir lorsqu'il fut assailli par trois rôdeurs qui le blessèrent grièvement à coups de massue et de casse-tête.",
      "Le malheureux avait pu donner le signalement de ses agresseurs. M. L'Homme, commissaire de police, les a arrêtés tous trois dans un garni de l'avenue de Paris. Ce sont Ernest Carbercque, vingt ans, et les frères Ludovic et Justin Guitaut, vingt et vingt et un ans. Ils ont été envoyés au dépôt."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Début d'incendie à Fontenay-sous-Bois",
    "summary": "Un début d'incendie s'est déclaré hier matin dans l'école communale des filles de Fontenay-sous-Bois. Le sang-froid des institutrices a permis l'évacuation rapide des élèves avant l'intervention des pompiers.",
    "paragraphs": [
      "Fontenay-sous-Bois. Un commencement d'incendie se déclarait, hier matin à dix heures, dans une salle de l'école communale des filles. Les pompiers purent se rendre maîtres du feu après une demi-heure de travail. Les institutrices, qui avaient conservé le plus grand sang-froid, ont pu faire sortir leurs élèves sans qu'aucun accident se soit produit."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Enfant égaré dans le bois de Vincennes",
    "summary": "Marius Dumas, âgé de douze ans, a été retrouvé par les gardes dans le bois de Vincennes où il s'était aménagé une hutte. L'enfant a été placé au dépôt en attendant l'arrivée de ses parents.",
    "paragraphs": [
      "Vincennes. Les gardes du bois de Vincennes ont conduit, hier, chez M. Carnet, commissaire de police, un petit garçon, Marius Dumas, âgé de douze ans, qui s'était construit une hutte dans l'îlot de la Porte-Jaune.",
      "Marius Dumas, dont les parents habitent Roanne (Loire), s'était égaré dans le bois. Le magistrat a envoyé l'enfant à la préfecture de police en attendant l'arrivée des parents qui ont été avisés par télégramme."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident à l'usine électrique d'Ivry",
    "summary": "Un grave accident survenu à l'usine électrique de la Compagnie d'Air parisien à Ivry suscite une vive émotion. Une instruction judiciaire est ouverte sous la direction de M. Plory, juge d'instruction.",
    "paragraphs": [
      "Ivry. Le terrible accident qui est survenu vendredi soir à l'usine électrique de la Compagnie d'Air parisien a produit dans toute la région une vive émotion. Les victimes, sauf le malheureux Maginel, vont beaucoup mieux. M. Plory, juge chargé de l'instruction, a commis comme expert M. Duval, architecte, pour établir les responsabilités."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame de la jalousie à Saint-Germain-en-Laye",
    "summary": "Mlle Rosalie Bervet, une jeune domestique, a été violemment agressée dans les bois de Saint-Germain-en-Laye par un journalier dont elle avait repoussé les avances. La gendarmerie a ouvert une enquête.",
    "paragraphs": [
      "Saint-Germain-en-Laye. Une domestique, Mlle Rosalie Bervet, âgée de vingt-sept ans, se rendait hier soir à la ferme des Hautes-Bruyères. Un journalier, Eugène Bioux, vingt-neuf ans, s'offrit à l'accompagner. Arrivés dans le bois, il lui fit des propositions qu'elle repoussa. Le misérable la renversa et la frappa violemment à la tête. Des habitants, attirés par les cris, sont intervenus. La gendarmerie a ouvert une enquête."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide à Saint-Germain-en-Laye",
    "summary": "Un drame domestique s'est déroulé rue au Pain à Saint-Germain-en-Laye : M. Gustave Bertholle, propriétaire âgé de cinquante-huit ans, a été retrouvé pendu à son domicile.",
    "paragraphs": [
      "Mme Bertholle, demeurant 29, rue au Pain, a trouvé hier matin son mari, M. Gustave Bertholle, propriétaire, âgé de cinquante-huit ans, pendu dans son logis à l'espagnolette d'une croisée. Les soins furent inutiles, la mort remontait à plusieurs heures."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie à Mantes",
    "summary": "Un violent incendie s'est déclaré la nuit dernière à Drocourt, près de Mantes, dans une exploitation agricole appartenant aux époux Schweitzer, causant d'importants dégâts aux communs et aux récoltes.",
    "paragraphs": [
      "Mantes. La nuit dernière, un incendie s'est déclaré dans une ferme sise à Drocourt, exploitée par les époux Schweitzer. Le feu a détruit de grands communs et des fourrages."
    ]
  },
  {
    "id": 45,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Chute mortelle à Coulommiers",
    "summary": "Le sieur Romain Leroy, un manouvrier de soixante-dix-huit ans, est décédé à la suite d'une chute accidentelle d'une échelle à la Maison-Dieu de la Ferté-Gaucher.",
    "paragraphs": [
      "Coulommiers. M. Romain Leroy, âgé de soixante-dix-huit ans, manouvrier, habitant la Maison-Dieu de la Ferté-Gaucher, est tombé hier d'une échelle. Transporté à son domicile, le malheureux a succombé."
    ]
  },
  {
    "id": 46,
    "page": 3,
    "category": "Départements",
    "title": "Suicide à Montcresson",
    "summary": "À Montcresson, le jeune Félix Baudoin, âgé de dix-neuf ans, s'est donné la mort en se jetant dans le canal de Briare, après avoir été éconduit par un voisin.",
    "paragraphs": [
      "Samedi 20 janvier. Contrarié de se voir évincé du domicile d'un voisin, un jeune homme de dix-neuf ans, nommé Félix Baudoin, s'est jeté dans le canal de Briare, où il a trouvé la mort par noyade."
    ]
  },
  {
    "id": 47,
    "page": 3,
    "category": "Départements",
    "title": "Agression à Clermont",
    "summary": "À Clermont, dans l'Oise, le jeune garçon boulanger Firmin Foix, âgé de quinze ans, a été violemment agressé et dépouillé de son argent par deux inconnus. Les malfaiteurs sont activement recherchés.",
    "paragraphs": [
      "Clermont (Oise). Le jeune Firmin Foix, âgé de quinze ans, garçon boulanger, a été attaqué sur la route par deux inconnus qui le rouèrent de coups avant de s'emparer de son argent. Les auteurs de cette agression sont activement recherchés par les autorités."
    ]
  },
  {
    "id": 48,
    "page": 3,
    "category": "Sports",
    "title": "Chasses en Haute-Saône",
    "summary": "La saison de chasse en Haute-Saône se révèle particulièrement fructueuse, avec plusieurs prises notables de sangliers enregistrées à Saulnot, Baslières et Espreta.",
    "paragraphs": [
      "Vesoul. Les chasseurs de la Haute-Saône ont été particulièrement chanceux cette saison. À Saulnot, MM. Grandjean et Gourley ont tué un sanglier pesant 140 kilos ; à Baslières, M. Paul Monniot en a abattu un de 119 kilos ; enfin, à Espreta, vingt-deux chasseurs ont fait tomber une harde de quatre sangliers totalisant un poids de 430 kilos."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Témoignage",
    "title": "Guérison de Mme V. Duport par l'Élixir Dupeyroux",
    "summary": "Atteinte d'une bronchite chronique invalidante depuis 1883, Mme V. Duport témoigne de sa guérison complète après avoir suivi le traitement de l'Élixir Dupeyroux, qui lui a rendu la santé.",
    "paragraphs": [
      "Observation de Mme V. Duport, résidant à La Frette (Seine), prise le 8 janvier 1898. Mme Duport naquit à Thiennes (Nord) en 1845.",
      "Elle était de constitution délicate et de tempérament lymphatique. En 1883, elle contracta une bronchite à la base du poumon gauche dont elle ne put guérir complètement, malgré l'usage répété de vésicatoires et le traitement traditionnel au lait chaud.",
      "De 1883 à 1897, elle fut sujette à des bronchites chaque hiver, ses symptômes s'aggravant d'année en année. Elle respirait péniblement et souffrait de suffocations ainsi que d'accès d'oppression fréquents.",
      "La nuit, elle dormait peu et comptait les heures, le dos appuyé sur une pile de coussins. Elle transpirait abondamment, au point que la sueur ruisselait sur son corps. Ses quintes de toux étaient si violentes qu'elles provoquaient des vomissements, et elle n'expectorait que de rares crachats gris perdus dans un mucus abondant.",
      "Désespérée par l'état de sa poitrine, elle se décida à essayer l'Élixir Dupeyroux dont elle avait entendu vanter les mérites. Après un mois de traitement, son état s'améliora sensiblement, et en janvier 1898, elle était considérée comme complètement rétablie."
    ]
  },
  {
    "id": 50,
    "page": 4,
    "category": "Santé",
    "title": "Avis médical sur le traitement des maladies de la peau",
    "summary": "Présentation d'un traitement préventif universel pour les affections cutanées et les impuretés du sang. Des brochures explicatives sont offertes gratuitement sur simple demande.",
    "paragraphs": [
      "Le traitement idéal est avant tout préventif : il empêche toute maladie de se déclarer. Guérissant avec une efficacité remarquable, il représente une véritable révélation pour les malades atteints d'affections de la peau ou de vices du sang.",
      "Si vous êtes souffrant, sachez que ce traitement permet une guérison radicale. Chaque boîte est contrôlée. Des renseignements sont envoyés par retour du courrier ; la brochure sur les maladies de la peau, les altérations, les impuretés et les vices du sang est offerte gratuitement sur simple demande."
    ]
  },
  {
    "id": 51,
    "page": 4,
    "category": "Santé",
    "title": "Traitement des maladies nerveuses",
    "summary": "M. Fanyau, domicilié à Aulnoye, propose une méthode pour guérir les maladies nerveuses et l'épilepsie, affections autrefois jugées incurables. Une brochure explicative est disponible sur demande.",
    "paragraphs": [
      "Il est possible de guérir des maladies nerveuses et particulièrement de l'épilepsie, réputée jusqu'ici incurable.",
      "La brochure contenant le traitement, accompagnée de nombreux certificats de guérison, est envoyée à toute personne qui en fera la demande à M. Fanyau, à Aulnoye (Nord)."
    ]
  },
  {
    "id": 52,
    "page": 4,
    "category": "Santé",
    "title": "Le sirop phéniqué de Vial",
    "summary": "Le sirop et la pâte phéniqués de Vial constituent un remède souverain contre les affections respiratoires : toux, rhumes, bronchites, grippe et influenza. Disponible à la pharmacie Vial, 4 rue Bourdaloue, Paris.",
    "paragraphs": [
      "Le sirop phéniqué de Vial combat les microbes et les germes des maladies de poitrine ; il réussit merveilleusement contre la toux, les rhumes, les catarrhes, les bronchites, la grippe et les enrouements. La pâte phéniquée de Vial possède les mêmes propriétés curatives.",
      "Dépôt : Pharmacie Vial, 4, rue Bourdaloue, Paris."
    ]
  },
  {
    "id": 53,
    "page": 4,
    "category": "Informations financières",
    "title": "Société Générale",
    "summary": "La Société Générale, dotée d'un capital de 180 millions de francs, offre une gamme complète de services bancaires, incluant dépôts, opérations de Bourse et location de coffres-forts à travers ses nombreuses agences.",
    "paragraphs": [
      "Pour favoriser le développement du commerce et de l'industrie, la Société Générale, société anonyme, dispose d'un capital social de 180 millions de francs.",
      "Le siège social est établi au 54, rue de Provence, à Paris.",
      "L'établissement propose des dépôts de fonds à intérêts, en compte ou à échéance fixe, ainsi que le passage d'ordres de Bourse, les souscriptions sans frais, la vente aux guichets de valeurs, l'escompte, l'encaissement d'effets de commerce, la garde de titres et la location de coffres-forts.",
      "Elle dispose d'un vaste réseau composé de 12 bureaux à Paris et dans sa banlieue, de 163 agences en province et d'une agence à Londres."
    ]
  }
];
