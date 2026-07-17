// Date: 1900-09-05
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-09-05 (Version Restaurée, 58 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "L'ouvrier d'autrefois",
    "summary": "Une étude historique sur la condition ouvrière depuis le XIVe siècle. Entre corporations disparates et prémices du grand capitalisme, l'évolution salariale et sociale éclaire les défis économiques contemporains.",
    "paragraphs": [
      "Ce ne sont pas seulement les historiens qui s'inquiètent à cette heure d'étudier dans le passé la condition de la classe ouvrière ; on démêle une préoccupation analogue chez les économistes. Bien des problèmes de ce temps, dont la solution est remise à des années meilleures, trouvent leurs éclaircissements dans la manière dont ils ont été posés sous l'Ancien Régime et particulièrement depuis le XIVe siècle.",
      "M. d'Avenel et M. Hauser ont montré l'instabilité et la variété de l'organisation du travail entre 1415 et 1610, loin de l'uniformité que certains historiens supposaient en se basant uniquement sur les corporations parisiennes. La royauté et les provinces vivaient alors de manières bien distinctes.",
      "Même là où les corporations existaient, le système n'était pas figé. Avec le temps, les institutions déclinèrent, et l'accroissement des échanges favorisa l'émergence d'une forme primitive de grand capitalisme.",
      "Quant à la condition de l'ouvrier, il est difficile de l'évaluer précisément en raison de la complexité des systèmes monétaires et de la valeur fluctuante des salaires. Cependant, les recherches récentes montrent que si le bien-être s'est accru depuis la Révolution, les besoins ont suivi la même tendance. La solution à la crise ouvrière actuelle ne réside probablement pas dans des théories pures, mais dans une approche plus empirique."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Autour d'un berceau",
    "summary": "Le lieutenant de Courtial enquête sur un blessé mystérieux arrivé par le train de Belfort. Malgré ses investigations à l'Hôtel de France, la trace du dénommé Buel semble s'être volatilisée.",
    "paragraphs": [
      "Le lieutenant de Courtial, cherchant un mystérieux blessé arrivé par le train de Belfort le 22 août, interroge un employé de gare nommé Desnoyers. Ce dernier se souvient du blessé, qui a été aidé par un camarade et a pris un fiacre pour se rendre à l'Hôtel de France, rue Cadet.",
      "Le lieutenant récompense généreusement l'employé et se rend à l'hôtel pour retrouver la trace du blessé. Le gérant lui confirme la présence d'un certain Buel ayant séjourné dans l'établissement, mais ce dernier a quitté les lieux le 24 août sans laisser d'adresse, rendant la poursuite de Courtial plus complexe."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Informations",
    "title": "M. Foureau à Paris",
    "summary": "L'explorateur M. Foureau est de retour à Paris. Accueilli officiellement, il rend hommage au courage du commandant Lamy et de ses hommes lors de la périlleuse mission scientifique vers le lac Tchad.",
    "paragraphs": [
      "L'explorateur M. Foureau est arrivé à Paris en provenance d'Afrique centrale. Il a été accueilli à la gare de Lyon par de nombreuses personnalités, dont le ministre de l'Instruction publique, M. Leygues, et des membres de la Société de géographie.",
      "Lors d'une réception, M. Leygues a félicité l'explorateur pour sa mission réussie au lac Tchad, tout en saluant la mémoire du commandant Lamy. M. Foureau a répondu avec émotion, attribuant le succès de l'expédition au courage de ses collaborateurs, officiers et soldats, qui ont enduré des épreuves terribles."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident en Seine",
    "summary": "Une collision fluviale au pont Solferino a provoqué des blessés parmi les passagers du bateau n° 91. Le préfet Lépine est intervenu en faveur des victimes, dont Mlle Caselli.",
    "paragraphs": [
      "Le bateau parisien n° 91 a heurté une arche du pont Solferino suite à une fausse manœuvre du pilote pour éviter un remorqueur. L'accident a causé des blessures à quatre passagers, dont Mlle Caselli, dont l'état a nécessité un transport à l'hôpital.",
      "Le préfet de police, M. Lépine, a accordé un secours à Mlle Caselli, tandis qu'une enquête a été ouverte pour établir les responsabilités."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Tué par sa femme",
    "summary": "Drame conjugal à Uccle-lez-Bruxelles. Une épouse, menacée par son mari ivre et armé, l'a abattu d'un coup de crosse de fusil au cours d'une lutte désespérée. Elle a été placée en état d'arrestation.",
    "paragraphs": [
      "Un drame familial s'est déroulé à Uccle-lez-Bruxelles. Un mari ivre, cherchant à agresser sa femme avec un fusil, a été mortellement frappé à la tête par cette dernière avec la crosse de l'arme lors d'une lutte. Mme Verheesen a été arrêtée."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Deux enfants écrasés",
    "summary": "À Guermé, une dramatique imprudence du domestique Pierre Gautivès a provoqué l'effondrement d'un pignon de maison. Les jeunes Mathias Guillemot et Noël Jouannic ont été ensevelis sous les décombres et n'ont pu être sauvés.",
    "paragraphs": [
      "Au village de Guermé, un domestique nommé Pierre Gautivès a causé, par une coupable imprudence, l'effondrement du pignon d'une maison sur deux enfants, Mathias Guillemot et Noël Jouannic. Les secours, arrivés en hâte sur les lieux, n'ont pu que constater le décès des deux malheureuses victimes."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "La guerre au Transvaal",
    "summary": "La situation militaire demeure préoccupante au Transvaal. Ladybrand est désormais investie par les Boers, menaçant les communications anglaises. L'optimisme de lord Roberts ne suffit pas à masquer la difficulté de la pacification.",
    "paragraphs": [
      "La situation reste critique pour les forces britanniques au Transvaal. La ville de Ladybrand est investie par les Boers, menaçant dangereusement les communications anglaises. Malgré les déclarations optimistes de lord Roberts, la pacification du pays semble loin d'être acquise."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "Les événements de Chine",
    "summary": "Les puissances internationales s'efforcent, par la diplomatie, de protéger le palais impérial de Pékin. Malgré l'hostilité persistante de la Cour, les tractations se poursuivent en vue d'un retrait progressif des troupes étrangères.",
    "paragraphs": [
      "Des négociations sont en cours pour épargner le palais impérial à Pékin. Toutefois, la cour impériale maintient une attitude hostile. Le sort des missionnaires massacrés reste un sujet de profonde préoccupation, bien que les puissances internationales cherchent une issue diplomatique à travers le retrait progressif des troupes étrangères."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "L'attitude des États-Unis en Chine",
    "summary": "Contrairement aux bruits de presse, Washington dément tout soutien à Li-Hung-Chang. Le gouvernement américain, resté discret sur ses intentions, organise l'hivernage de ses troupes près de la côte, à Tien-Tsin.",
    "paragraphs": [
      "Les bruits reçus d'Europe au sujet de l'attitude du gouvernement américain ne peuvent être exacts, car le gouvernement n'a nullement l'intention de soutenir Li-Hung-Chang, et sa politique générale est tout à fait l'opposé de celle qu'on lui prête.",
      "Le département d'État continue à garder le silence sur les négociations relatives au retrait des troupes de Pékin. On croit savoir, toutefois, que le gouvernement n'a pas reçu de réponse définitive à sa dernière communication aux puissances.",
      "Quant aux dispositions prises pour l'hivernage des troupes américaines en Chine, on assure que leur camp principal sera établi à Tien-Tsin ou quelque autre point, près de la côte."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "La position de l'Italie",
    "summary": "Le journal Popolo Romano dément toute dissension italienne en Chine. Rome affirme sa volonté de maintenir l'accord entre les puissances et ne s'oppose aucunement aux pouvoirs délégués à Li-Hung-Chang.",
    "paragraphs": [
      "Le Popolo Romano déclare que, contrairement aux bruits qui ont été répandus, l'Italie ne cherche actuellement, en ce qui concerne la question chinoise, qu'à coopérer avec les autres puissances, afin que leur accord soit maintenu.",
      "Le Popolo assure également que l'Italie n'a jamais soulevé d'objections en ce qui concerne les pouvoirs de Li-Hung-Chang."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Le retrait des troupes alliées à Pékin",
    "summary": "La colonie étrangère à Pékin juge le retrait des troupes alliées dangereux, craignant que la Chine, se croyant victorieuse, ne persiste dans son hostilité. Elle exige une punition exemplaire des fonctionnaires fautifs.",
    "paragraphs": [
      "La colonie étrangère estime que le retrait immédiat des troupes internationales de Pékin constituerait une politique périlleuse pour le prestige des étrangers en Chine. En effet, un grand nombre de Chinois sont encore convaincus, à l'heure actuelle, que la Chine a battu les Européens.",
      "Des gravures exposées dans les magasins du quartier indigène représentent l'armée chinoise rejetant les soldats européens à la mer à Takou et les taillant en pièces à Tien-Tsin. D'autres gravures dépeignent les ministres étrangers soumis à la torture en présence des vice-rois.",
      "L'amiral Seymour est représenté prosterné devant le trône impérial. La communauté étrangère continue à demander la destruction de Pékin et la punition exemplaire des fonctionnaires qui ont favorisé le mouvement contre les étrangers.",
      "L'opinion de tous est qu'une indemnité et des promesses, même écrites, d'un nouveau traité seraient insuffisantes.",
      "Les cadavres des missionnaires massacrés dans le yamen du gouverneur à Taï-Yuan-Son ont été jetés aux chiens. Des affiches exhortant les étrangers à protester contre tout compromis des puissances avec la Chine ont été apposées dans tous les endroits publics de Shanghaï. Ces affiches contiennent également des attaques contre Li-Hung-Chang."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Réactions de la presse russe",
    "summary": "La presse russe, notamment le Nouveau Temps et la Gazette de la Bourse, manifeste une sourde irritation face aux critiques de la presse allemande concernant le projet russe d'évacuation de Pékin.",
    "paragraphs": [
      "Le Nouveau Temps, le Svet, la Russia, la Gazette de la Bourse et d'autres journaux commentent sur un ton de sourde irritation le langage de la presse allemande qui combat la proposition de la Russie d'évacuer Pékin."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "L'opinion en Angleterre",
    "summary": "Londres envisage de maintenir ses troupes à Pékin aux côtés des contingents allemands. Le Daily News s'interroge sur d'éventuels accords secrets entre la Russie et la Chine ignorés de lord Salisbury.",
    "paragraphs": [
      "Le correspondant du Standard à Vienne prétend savoir, de bonne source, que les contingents allemand, autrichien et italien resteront à Pékin après le départ des Russes.",
      "Le Standard exprime l'espoir que les troupes allemandes ne seront pas rappelées de Pékin et ajoute que les troupes britanniques y resteront aussi. L'Allemagne et l'Angleterre, dit-il, ont assez de soldats pour occuper Pékin et maintenir la liberté des communications jusqu'au règlement définitif de la question chinoise.",
      "Le Daily News se demande si le tsar n'a pas conclu avec la Chine des arrangements qui sont ignorés de lord Salisbury."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Les coulisses de la diplomatie : La nomination du comte de Waldersee",
    "summary": "La nomination du comte de Waldersee ne fut pas une initiative du Tsar, mais illustre les hésitations des puissances face aux manœuvres de l'empereur Guillaume II concernant le commandement en chef.",
    "paragraphs": [
      "Le correspondant parisien du Times a reçu une lettre au sujet de l'attitude de la Russie et des États-Unis dans la question chinoise. La nomination du comte de Waldersee, dit cette lettre, n'est pas due à l'initiative du Tsar comme le discours de l'empereur d'Allemagne à Cassel tendrait à le faire supposer.",
      "Consulté par l'Allemagne sur la nécessité d'un commandement en chef, Nicolas II reconnut que l'unité de commandement était nécessaire, mais sans donner d'adhésion formelle et immédiate. Lorsqu'il eut connaissance du discours de Guillaume II, le Tsar expliqua quelle avait été son attitude.",
      "D'autre part, on savait que les États-Unis hésitaient à placer leurs troupes sous les ordres d'un officier allemand. On comprendra que le principal objet en vue était de faire échouer le projet de l'empereur Guillaume, dont la réalisation devait être assurée par la nomination du comte de Waldersee au commandement en chef."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Actualité Militaire",
    "title": "Mouvements de troupes allemandes",
    "summary": "Progression des forces internationales en Chine : l'avant-garde allemande atteint Tien-Tsin, et les troupes italiennes arrivent à Takou. Le défilé international dans les palais est fixé au mardi prochain.",
    "paragraphs": [
      "L'avant-garde du corps expéditionnaire allemand, sous les ordres du commandant de Falkenhayn, est arrivée à Tien-Tsin. Le capitaine Pohl télégraphie de Pékin qu'il a occupé la colline du charbon. Le défilé des troupes internationales dans les palais aura lieu mardi. Environ 2 000 hommes de troupes italiennes sont arrivés en rade de Takou."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles Coloniales",
    "title": "La fièvre jaune au Sénégal",
    "summary": "L'épidémie de fièvre jaune au Sénégal frappe durement les rangs médicaux. Tandis que MM. Gueit et Grange ont succombé, la mission Blanchet est contrainte à une halte préventive pour éviter toute contagion sur le fleuve.",
    "paragraphs": [
      "MM. Gueit, pharmacien de l'hôpital militaire de Saint-Louis, et Grange, médecin militaire à Dakar, ont succombé à la fièvre jaune. Une centaine de passagers ont été transbordés devant la barre à bord du Tibet.",
      "Les nouvelles de la mission Blanchet se confirment, mais, en raison de la persistance de l'épidémie, ses membres seront vraisemblablement contraints à une halte prolongée en un point du fleuve afin d'écarter tout risque de contamination."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles Étrangères",
    "title": "Mission militaire française en Allemagne",
    "summary": "La Gazette de l'Allemagne du Nord annonce l'arrivée prochaine d'une délégation militaire française à Berlin, composée du général Duval et de ses officiers, pour assister aux grandes manœuvres de l'armée allemande.",
    "paragraphs": [
      "La Gazette de l'Allemagne du Nord annonce qu'une mission militaire française, composée du général Duval, du lieutenant-colonel Silvestre et du commandant Chazelles, arrivera incessamment à Berlin pour assister aux grandes manœuvres de l'armée allemande."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un braconnier tué au Luxembourg",
    "summary": "Un tragique incident a coûté la vie au braconnier Charles Ruelens dans le grand-duché du Luxembourg. Surpris en flagrant délit, il a été abattu par le garde forestier Dumont après avoir mis son arme en joue.",
    "paragraphs": [
      "Un braconnier, nommé Charles Ruelens, a été tué net par un garde forestier, le sieur Dumont, dans le grand-duché du Luxembourg. Ayant été surpris en possession de filets, le braconnier avait braqué son fusil sur le garde, lequel a riposté immédiatement avec sa carabine."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Santé",
    "title": "La peste en Écosse",
    "summary": "Une vive inquiétude règne à Glasgow selon le Daily Telegraph, où une centaine de personnes ont été placées sous étroite observation sanitaire afin de prévenir tout risque de propagation de la peste.",
    "paragraphs": [
      "D'après les informations rapportées par le Daily Telegraph, une centaine de personnes ont été placées en observation sanitaire à Glasgow en raison d'une alerte sérieuse concernant la peste."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Naufrage d'un torpilleur à Cherbourg",
    "summary": "Le torpilleur Bouet-Villaumez a été localisé par quinze mètres de fond près de la roche Gauthier. Le renflouage, jugé périlleux, défie pour l'heure les efforts acharnés des équipes de scaphandriers.",
    "paragraphs": [
      "Le torpilleur Bouet-Villaumez a été localisé par quinze mètres de fond près de la roche Gauthier. Son renflouage est désormais jugé extrêmement difficile, voire impossible.",
      "Les scaphandriers, après reconnaissance, ont conclu à l'impossibilité d'exécuter un travail utile en l'état, bien que les équipages aient œuvré sans relâche aux tentatives de sauvetage du bâtiment."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Social",
    "title": "Statut des agents techniques de la marine",
    "summary": "Une circulaire ministérielle assimile désormais les agents techniques et dessinateurs des arsenaux aux militaires, leur ouvrant droit aux tarifs ferroviaires réduits pour leurs déplacements.",
    "paragraphs": [
      "Depuis le 15 janvier, les agents techniques des arsenaux et les dessinateurs de la marine sont désormais assimilés aux militaires. Ils bénéficient, en vertu d'une récente circulaire du ministre des Travaux publics, du droit au transport à prix réduit sur les réseaux de chemins de fer."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Les grandes manœuvres",
    "summary": "Le général Brugère dirigera les manœuvres des 4e, 9e et 10e corps d'armée du 6 au 20 septembre. Des instructions strictes sont données pour protéger les cultures et assurer la précision tactique.",
    "paragraphs": [
      "Le général Brugère prendra, le 14 septembre prochain, la direction générale des manœuvres des 4e, 9e et 10e corps d'armée. Ces exercices se dérouleront entre le 6 et le 20 septembre. Des recommandations très précises ont été transmises aux commandants d'unités afin d'éviter tout dégât aux cultures et de marquer, avec une rigueur toute méthodique, les différentes phases du combat."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Le concours hippique international",
    "summary": "Le concours d'animaux reproducteurs de l'Exposition universelle confirme son succès avec 1 718 têtes. La section russe, notamment ses chevaux Orloff, suscite un vif intérêt public.",
    "paragraphs": [
      "Le concours d'animaux reproducteurs organisé dans le cadre de l'Exposition universelle rencontre un succès croissant. La disposition des hangars et des écuries est unanimement jugée très réussie. L'exposition réunit à ce jour 1 718 animaux de toutes races, démontrant les progrès constants de l'élevage mondial.",
      "L'exposition russe, avec ses uniformes pittoresques et ses chevaux de race Orloff, est considérée par le public et les spécialistes comme le véritable clou du concours."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Social",
    "title": "La situation des grèves dans les ports",
    "summary": "Si l'accalmie gagne les ports de Marseille, du Havre et de Dunkerque, la grève des mariniers sur la Seine préoccupe les autorités, menaçant l'approvisionnement en vivres de la capitale.",
    "paragraphs": [
      "À Marseille, la grève des charretiers est virtuellement terminée, une sentence arbitrale ayant été rendue en faveur des ouvriers. Au Havre, la situation s'améliore sensiblement, la plupart des travailleurs reprenant le labeur. À Dunkerque, les grèves des plombiers, maçons et voiliers sont désormais terminées. En Algérie, à Philippeville et Bône, le mouvement gréviste se poursuit néanmoins avec des tensions persistantes entre les grévistes et les forces de l'ordre.",
      "Par ailleurs, sur la Seine, la grève des mariniers menace gravement l'approvisionnement de Paris. Des centaines de péniches sont amarrées. Le service de surveillance a été vigoureusement renforcé dans tous les commissariats riverains."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le crime de la Croix-Barret",
    "summary": "L'instruction sur le meurtre de la Croix-Barret se poursuit. Les aveux de l'accusé Dulac sont remis en cause par le médecin légiste, qui conteste la version donnée sur le dépeçage du cadavre.",
    "paragraphs": [
      "Le juge d'instruction a procédé à un nouvel interrogatoire de l'accusé Dulac au sujet du meurtre de la Croix-Barret. Bien que l'homme soit passé aux aveux, certains points de l'affaire demeurent obscurs. Il subsiste notamment une contradiction sur la nature des blessures constatées sur le cadavre : Dulac prétend les avoir infligées pour dépecer la victime, une version que le médecin légiste conteste formellement."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Chronique Politique",
    "title": "L'octroi de Paris",
    "summary": "M. Astier, député de l'Ardèche, presse le ministre des Finances d'accélérer la réforme sur la suppression des droits d'octroi sur les boissons hygiéniques, attendue avec espoir pour 1901.",
    "paragraphs": [
      "M. Astier, député de l'Ardèche, a interpellé le ministre des Finances concernant la suppression des droits d'octroi sur les boissons hygiéniques, dont l'entrée en vigueur est prévue pour l'année 1901.",
      "Le ministre a fait savoir qu'il insistait vivement auprès du préfet de la Seine afin que le conseil municipal de Paris délibère dans les plus brefs délais sur les modalités de cette réforme attendue."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Visites scolaires et préparation de la Fête des Fleurs",
    "summary": "L'Exposition Universelle séduit les écoliers parisiens grâce à une pédagogie vivante. En parallèle, des mesures d'ordre strictes sont édictées pour le bon déroulement de la Fête des Fleurs demain.",
    "paragraphs": [
      "L'Exposition Universelle accueille quotidiennement de nombreux écoliers parisiens. Un pédagogue novateur a instauré un système didactique stimulant l'intelligence des élèves par des leçons concrètes basées sur les découvertes mécaniques et industrielles exposées.",
      "Les préparatifs de la Fête des Fleurs, qui se tiendra demain, sont en cours d'achèvement. Des dispositions rigoureuses concernant l'ordre public et le contrôle des accès ont été prises pour prévenir tout encombrement."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un héros forestier à l'Exposition",
    "summary": "François Paravey, vétéran de 1870 et titulaire de la Légion d'honneur, veille sur le pavillon des forêts. Le maire de Wassy sollicite une nouvelle distinction pour honorer ses états de service.",
    "paragraphs": [
      "François Paravey, garde forestier distingué de la Légion d'honneur pour ses actes de bravoure accomplis durant la guerre de 1870, assure la surveillance au pavillon des forêts. Le maire de Wassy a formulé une demande pour obtenir une nouvelle distinction en l'honneur de ce vétéran."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Actualités",
    "title": "Fête ajournée",
    "summary": "La retraite aux flambeaux des sections coloniales est reportée à mercredi. Les figurants sont mobilisés demain pour escorter les chars fleuris de l'Horticulture.",
    "paragraphs": [
      "En raison des préparatifs requis pour la fête de demain, la retraite aux flambeaux des contingents coloniaux du Trocadéro, prévue sur le Champ-de-Mars, n'aura pas lieu ce soir.",
      "L'ensemble des figurants habituels de cette célébration hebdomadaire est requis pour encadrer, vêtus de leurs costumes nationaux, les chars fleuris des cortèges de l'Horticulture.",
      "Les organisateurs ont, par conséquent, sollicité pour ces derniers la libre disposition de la soirée de ce jour.",
      "La fête coloniale est donc ajournée à mercredi prochain, où elle se déroulera selon le cérémonial usuel."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Congrès",
    "title": "Les pharmaciens",
    "summary": "Le congrès des spécialités pharmaceutiques réclame une protection législative renforcée pour les produits chimiques et alimentaires contre la fraude.",
    "paragraphs": [
      "La seconde séance plénière du congrès de l'industrie et du commerce des spécialités pharmaceutiques s'est tenue hier après-midi sous la présidence de M. Fumouze.",
      "Les débats ont porté sur le rapport présenté par M. Comar, au nom de la troisième section, traitant de la garantie des marques de fabrique et de commerce dans les différents pays.",
      "Sous l'empire des législations actuelles, le consommateur semble pénalisé par une rigueur excessive qui entrave l'inventeur d'un médicament, tout en prétendant lutter contre le charlatanisme.",
      "Selon le rapporteur, une protection universelle des produits pharmaceutiques, alignée sur celle des produits alimentaires, permettrait de rendre la fraude inutile, favorisant ainsi l'essor de cette branche essentielle de notre industrie nationale.",
      "Pour clore la discussion, le congrès a émis le vœu que les lois cessent d'exclure de la protection les produits alimentaires, chimiques et pharmaceutiques, ainsi que leurs procédés de fabrication.",
      "La dernière séance aura lieu aujourd'hui pour le vote définitif des résolutions, lesquelles seront transmises aux pouvoirs publics. Un banquet clôturera ces travaux dans la soirée."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Actualités",
    "title": "Les entrées à l'Exposition",
    "summary": "Le succès du concours hippique international de Vincennes ne faiblit pas : le service de contrôle général enregistre un total impressionnant de 285 756 visiteurs pour la seule journée de lundi.",
    "paragraphs": [
      "Le service de contrôle général accuse pour la journée de lundi un total général de 285 756 visiteurs. Le succès obtenu par le concours hippique international de Vincennes ne se dément pas."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Actualités",
    "title": "À l'annexe de Vincennes",
    "summary": "Une confusion sur les horaires d'accès à l'annexe de Vincennes a provoqué des incidents parmi la foule. Le calme fut rétabli par M. Chevreul, et l'accès au public a été régularisé pour les jours suivants.",
    "paragraphs": [
      "Comme la veille, les visiteurs étaient venus hier en foule à l'annexe de Vincennes pour y admirer le magnifique concours international hippique.",
      "Quand ils arrivèrent aux grilles de l'enceinte, ils se heurtèrent à une consigne sévère ou mal interprétée. L'entrée de l'Exposition, disaient les contrôleurs, était interdite pour la journée, mais le public n'en avait pas été avisé. Des discussions éclatèrent et bientôt des incidents regrettables se produisirent.",
      "Sous la pression de la foule, les grilles cédèrent et l'enceinte fut un moment envahie. En repoussant le public, un agent fut blessé assez grièvement aux mains.",
      "Des renforts arrivèrent rapidement sous la conduite de M. Chevreul, officier de paix du douzième arrondissement, qui parvint, non sans peine, à calmer les visiteurs furieux d'être venus pour rien. Sur ses instances, le commissaire de l'annexe fit ouvrir les portes au public à cinq heures.",
      "Au commissariat général, on déclare avoir pris cette mesure pour éviter les accidents pendant les opérations du jury. L'enceinte du concours sera à nouveau ouverte au public aujourd'hui, à midi.",
      "Rappelons à ce sujet qu'un moyen de transport commode pour se rendre à l'Exposition de Vincennes est offert par les trains de ceinture de Paris, qui s'arrêtent tous à la halte dite de la rue Claude-Decaen, située à la porte même de l'Exposition."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Échos et nouvelles",
    "title": "Nouvelles diverses",
    "summary": "Entre remaniements de calendrier politique, reports de réceptions officielles et la visite remarquée du roi Aguibou au concours hippique, les affaires publiques et mondaines suivent leur cours à Paris.",
    "paragraphs": [
      "Le décret convoquant les conseils d'arrondissement pour le 24 septembre va être rapporté. Un autre décret fixera à une date ultérieure la réunion des conseils d'arrondissement, de façon à permettre aux maires qui font partie de ces assemblées d'assister aux fêtes qui seront données à Paris en leur honneur à partir du 20 septembre prochain.",
      "M. Georges Leygues avait décidé d'organiser, jeudi prochain, une fête au ministère de l'Instruction publique en l'honneur du chef de la mission saharienne. Mais M. Foureau n'étant pas encore remis de ses fatigues, le ministre a ajourné son projet. Toutefois, l'explorateur sera reçu aujourd'hui par M. Leygues en audience particulière.",
      "M. Caillaux, ministre des Finances, doit donner un grand déjeuner, mardi 11 septembre, en l'honneur du ministre des Finances de Russie.",
      "Le roi Aguibou, accompagné du prince Mocktar, son fils, de Tla-Mariou, son premier ministre, de M. Vienne et de l'interprète Grenier, s'est rendu hier à deux heures à l'annexe de Vincennes et a visité en détail l'exposition hippique internationale. À différentes reprises, le souverain du Macina a exprimé son admiration pour les magnifiques sujets qu'il avait devant lui. Le roi et sa suite ont été, au cours de leur promenade, l'objet de manifestations sympathiques."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits divers",
    "title": "Commis-voyageurs en herbe",
    "summary": "Aux États-Unis, Harry Dugan, un jeune garçon de huit ans originaire du Maine, fait sensation : en quinze mois, ce prodige a visité quatre cent cinquante villes pour les affaires de son patron.",
    "paragraphs": [
      "Un jeune commis-voyageur de huit ans à peine fait en ce moment beaucoup parler de lui aux États-Unis. Harry Dugan, tel est le nom de ce nouveau prodige, appartient à une modeste famille de fermiers du Maine et, dès l'âge le plus tendre, a manifesté un goût particulier pour les voyages.",
      "En l'espace de quinze mois, Harry Dugan aurait déjà parcouru, pour les affaires de son patron, plus de la moitié de l'immense territoire de l'Union, visité quatre cent cinquante villes et traité avec trois mille nouveaux clients."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Social",
    "title": "Les grèves dans les ports",
    "summary": "La situation sociale s'apaise à Marseille et à Philippeville, où des accords de reprise du travail ont été conclus, marquant la fin des mouvements de grève des charretiers.",
    "paragraphs": [
      "Marseille, 4 septembre : À l'issue de la réunion qui a eu lieu cet après-midi et dans laquelle la reprise du travail dès demain matin a été décidée à l'unanimité, les charretiers se sont rendus, musique et drapeaux en tête, à la préfecture et à la mairie pour remercier les autorités de leur intervention.",
      "Dès cinq heures de l'après-midi, tout étant rentré dans l'ordre, le secrétaire général de la préfecture a fait retirer les patrouilles. La grève des chaudronniers sur fer continue, mais elle demeure partielle.",
      "Philippeville, 4 septembre : La grève est terminée à la suite d'un accord intervenu entre les patrons et les ouvriers."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits divers",
    "title": "Suicide d'un garde républicain",
    "summary": "Eugène Hiserre, garde républicain de vingt-sept ans en garnison à la caserne Lobau, s'est donné la mort par arme à feu après avoir subi des remontrances de ses supérieurs au sujet de son intempérance.",
    "paragraphs": [
      "Un garde républicain, Eugène Hiserre, âgé de vingt-sept ans, en garnison à la caserne Lobau, avait été l'objet, ces derniers temps, de la part de ses chefs, de vifs reproches au sujet de son intempérance.",
      "Ce soldat, fort affecté d'avoir été ainsi réprimandé, prit la résolution d'en finir avec l'existence. Au cours de l'avant-dernière nuit, il alla s'enfermer dans les cabinets d'aisance de la caserne, plaça son fusil entre ses jambes et, après avoir appuyé son palais sur l'extrémité du canon, pressa la détente. Le décès a été constaté immédiatement."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits divers",
    "title": "L'accident de la rue Turbigo",
    "summary": "M. Lamé, commissaire du quartier des Archives, a transmis son rapport sur l'accident de tramway rue Turbigo. Le mécanicien, Paul Douez, a négligé d'utiliser le sablier pour actionner le frein électrique.",
    "paragraphs": [
      "M. Lamé, commissaire de police du quartier des Archives, a remis hier au parquet son rapport sur l'accident de tramway qui eut lieu au carrefour de la rue Turbigo et du boulevard Sébastopol.",
      "Paul Douez, le mécanicien, a reconnu au cours de l'interrogatoire qu'il n'avait serré son frein à main qu'à une vingtaine de mètres à peine du tramway à traction animale tamponné par celui qu'il conduisait. Il a aussi déclaré qu'il avait oublié de faire fonctionner le sablier, sans l'action duquel le frein électrique ne pouvait avoir d'effet."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits divers",
    "title": "L'explosion de la rue du Mail",
    "summary": "Une explosion accidentelle de magnésium en poudre dans un laboratoire de la rue du Mail a blessé trois personnes, MM. Larcher, Bringer et Tortat, probablement par inflammation de poussières volatiles.",
    "paragraphs": [
      "L'accident survenu rue du Mail est dû à l'explosion d'une certaine quantité de magnésium en poudre. Les trois victimes, MM. Larcher, Bringer et Tortat, faisaient des pesées de poudre dans un laboratoire.",
      "On suppose qu'une fine poussière provenant de la poudre a pu se répandre dans la pièce et que des atomes se sont enflammés au contact de la flamme d'un bec de gaz allumé à un mètre environ de la table."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Faits divers",
    "title": "Renversé par un tramway",
    "summary": "Le jeune Léon Guillaume, garçon de magasin, a été grièvement blessé à la jambe droite rue du Temple, après avoir été renversé par un tramway électrique reliant l'Opéra aux Lilas alors qu'il manœuvrait sa charrette.",
    "paragraphs": [
      "Le tramway électrique faisant le trajet de l'Opéra aux Lilas a heurté et renversé, hier soir, rue du Temple, une charrette à bras traînée par un garçon de magasin, nommé Léon Guillaume, qui a été grièvement blessé à la jambe droite."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Faits divers",
    "title": "Un pickpocket en omnibus",
    "summary": "Un individu a été arrêté après avoir dérobé onze porte-monnaie dans un omnibus de la ligne Batignolles-Clichy-Odéon. Il tentait de prendre la fuite en feignant de ramasser son chapeau tombé de l'impériale.",
    "paragraphs": [
      "Au moment où le conducteur d'une des voitures faisant le trajet Batignolles-Clichy-Odéon montait pour recueillir le prix des places, un individu feignant de se pencher au dehors de l'impériale laissa tomber son chapeau. Il se précipita pour le ramasser et descendit de l'omnibus sans avoir payé.",
      "En même temps, une voyageuse s'apercevait de l'absence de son porte-monnaie. L'individu fut arrêté et amené chez M. Bouffaud, commissaire de police. On trouva sur lui onze porte-monnaie contenant 352 francs. Il a été envoyé au dépôt."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Faits divers",
    "title": "Sur la nouvelle ligne d'Orléans",
    "summary": "M. Dignat, commissaire spécial, a fait transporter à l'hôpital un journalier découvert sans connaissance sur la voie de la ligne souterraine, victime d'une chute de train la veille au soir.",
    "paragraphs": [
      "M. Dignat, commissaire spécial de la gare d'Orléans, a fait transporter, hier matin, à l'hôpital de la Charité, un journalier, Édouard Dufeu, trouvé étendu sans connaissance à la hauteur du pont des Arts, sur la voie de la ligne souterraine prolongée jusqu'au quai d'Orsay.",
      "Le blessé est tombé, lundi, vers dix heures du soir, d'un train en marche. C'est à quatre heures du matin seulement qu'un conducteur a aperçu le malheureux."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Faits divers",
    "title": "Conséquence tragique d'une plaisanterie",
    "summary": "Une plaisanterie tourne au drame : en voulant effrayer son ami endormi avec un revolver, un représentant de commerce provoque une détonation accidentelle qui blesse grièvement la victime.",
    "paragraphs": [
      "M. Gilbert Leloir, représentant de commerce, s'amusait avec son ami M. Paul Anaux, qui s'était endormi dans un fauteuil. Ayant aperçu un revolver sur un meuble, il eut la mauvaise inspiration d'appliquer le canon de l'arme sur le front de son ami pour l'effrayer.",
      "M. Paul Anaux, réveillé en sursaut, voulut repousser le revolver, mais une détonation se fit entendre et il fut gravement blessé à la tête. Le malheureux a été conduit à l'hôpital Tenon."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Faits divers",
    "title": "Incendie rue du Repos",
    "summary": "Un incendie causé par une imprudence domestique a ravagé une épicerie rue du Repos, coûtant la vie à un gardien de la paix cycliste, victime d'une défaillance cardiaque en service.",
    "paragraphs": [
      "Un incendie s'est déclaré, hier soir, dans la boutique de M. Delinot, épicier rue du Repos, par suite de l'imprudence d'un garçon de magasin qui avait approché une lampe d'un bidon rempli d'essence.",
      "Le gardien de la paix cycliste Barlier, chargé de prévenir le poste central, est décédé d'une défaillance en cours de route, après seize années de service."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue",
    "summary": "Une série d'accidents frappe la banlieue : noyade à Villeneuve-la-Garenne, accident de la route à La Garenne-Colombes, affaire de caisse à Saint-Denis et divers accidents corporels à Vincennes.",
    "paragraphs": [
      "Villeneuve-la-Garenne : M. Alfred Bergeol et Ernest Ouvray sont tombés dans la Seine en tentant de récupérer un chapeau. M. Bergeol s'est noyé.",
      "La Garenne-Colombes : La petite Ernestine Leflot, six ans, s'est jetée sous les roues d'une voiture de livreur et a été grièvement blessée.",
      "Saint-Denis : M. Duchy a porté plainte contre son caissier, François Marie, pour un déficit de caisse.",
      "Vincennes : M. Louis Nedénou est décédé après une chute accidentelle. Mme veuve Roudeau a été renversée par une automobile et son état est désespéré. Mme Marie François a été cruellement mordue par un cheval."
    ]
  },
  {
    "id": 45,
    "page": 3,
    "category": "Faits divers",
    "title": "Accident à Vanves",
    "summary": "Un grave accident de tramway à Vanves : un cocher sortant de chez lui a été violemment percuté par un convoi électrique et grièvement blessé.",
    "paragraphs": [
      "Le tramway électrique, faisant le service entre la porte Brancion et la place Duval, a tamponné le cocher Jean Laroque qui sortait de chez lui avec son cheval. Le malheureux a été grièvement blessé et scalpé."
    ]
  },
  {
    "id": 46,
    "page": 3,
    "category": "Faits divers",
    "title": "Attaque à Saint-Germain-en-Laye",
    "summary": "M. Thiébaut, garde champêtre, a été sauvagement agressé par quatre individus alors qu'il procédait à l'extinction des lanternes publiques. Les malfaiteurs ont été appréhendés et incarcérés à Versailles.",
    "paragraphs": [
      "M. Thiébaut, garde champêtre, a été sauvagement attaqué par quatre individus alors qu'il éteignait les lanternes de la voie publique. La gendarmerie a procédé immédiatement à l'arrestation des agresseurs, qui ont été conduits sous escorte à la prison de Versailles."
    ]
  },
  {
    "id": 47,
    "page": 3,
    "category": "Société",
    "title": "L'industrie du chiffon",
    "summary": "Essentielle à l'économie, l'industrie du chiffon emploie à Paris de nombreuses ouvrières. Contrairement aux préjugés, les conditions de travail y sont salubres et offrent un revenu stable et nécessaire.",
    "paragraphs": [
      "L'industrie du chiffon occupe une place capitale dans l'économie française, avec des centres névralgiques dans la Charente, la Vienne et à Castres. Le tri minutieux des tissus approvisionne les papeteries, tandis que les lainages sont récupérés pour être retravaillés.",
      "À Paris, les grandes maisons emploient jusqu'à deux cents ouvrières spécialisées dans le triage des étoffes selon leur qualité et leur couleur. Ces travailleuses, rémunérées à la pièce, gagnent au minimum 3 francs par journée.",
      "Contrairement à certaines idées reçues, les conditions d'hygiène dans ces entrepôts sont satisfaisantes, les locaux étant spacieux et convenablement aérés. Cette activité constitue une ressource appréciable pour les personnes infirmes ou les travailleurs cherchant à éviter le fléau du chômage."
    ]
  },
  {
    "id": 48,
    "page": 3,
    "category": "Bourse",
    "title": "Bulletin financier",
    "summary": "Après une ouverture hésitante, la Bourse retrouve sa fermeté. Malgré les incertitudes liées à l'évacuation de Pékin, les valeurs industrielles et minières reprennent de la vigueur.",
    "paragraphs": [
      "Après un moment d'hésitation au début de la séance, le marché retrouve sa fermeté habituelle. Les échanges sont assez actifs malgré la prudence dictée par les inquiétudes concernant l'évacuation de Pékin.",
      "Les rentes marquent le pas, tandis que les valeurs industrielles amorcent une reprise encourageante. Les mines d'or manifestent un regain d'animation comparativement aux journées précédentes."
    ]
  },
  {
    "id": 49,
    "page": 3,
    "category": "Tribunaux",
    "title": "Déjeuner tragiquement interrompu",
    "summary": "Mathias Luzeau a comparu aux assises pour le drame du bois de Vincennes. Ayant surpris son épouse en flagrant délit avec M. Berthoux, il a abattu la femme infidèle et blessé grièvement son rival.",
    "paragraphs": [
      "Mathias Luzeau a comparu devant la cour d'assises de la Seine pour répondre de l'assassinat de l'amant de sa femme, M. Berthoux, commis dans le bois de Vincennes.",
      "Le mari, ayant découvert la liaison coupable de son épouse, les a surpris alors qu'ils déjeunaient sur l'herbe. Transporté par la colère, il a tiré plusieurs coups de revolver, tuant sa femme sur le coup et blessant grièvement Berthoux. Le jury a rendu son verdict après une plaidoirie marquée de M. de Wailly."
    ]
  },
  {
    "id": 50,
    "page": 3,
    "category": "Tribunaux",
    "title": "Tentative de déraillement",
    "summary": "Jean Lescure a été formellement confondu pour une tentative de déraillement près du viaduc de Draujtou. L'enquête a permis de relier le suspect aux obstacles métalliques retrouvés sur la voie.",
    "paragraphs": [
      "Dans la nuit du 12 au 13 juillet, un nommé Jean Lescure a tenté de provoquer un déraillement près du viaduc de Draujtou en plaçant des objets en fer sur les rails. Il a été formellement confondu par l'enquête diligentée sur place et par la découverte d'un gourdin abandonné sur les lieux du crime."
    ]
  },
  {
    "id": 51,
    "page": 4,
    "category": "Faits Divers",
    "title": "Condamnation d'un malfaiteur à Figeac",
    "summary": "Reconnu coupable de sabotage sur la voie ferrée près de Figeac, un individu au caractère malveillant nommé Lescure a été condamné à deux ans de prison par la cour d'assises du Lot.",
    "paragraphs": [
      "Le malfaiteur, après avoir renversé les poteaux, a choisi un sentier à peine praticable pour regagner sa maison.",
      "L'accusé a fait des aveux complets; il s'excuse en disant que dans la soirée du crime il était en état d'ivresse, et ajoute qu'ayant fait une chute sur la voie ferrée, il a été saisi de colère et que, sous l'empire de ce sentiment, il a démoli poteau et potelet pour les mettre ensuite en travers des rails.",
      "Lescure est de caractère sournois et méchant. Il a la manie de la destruction.",
      "De nombreux attentats de la même nature ont été, dans ces dernières années, commis par des malfaiteurs restés inconnus dans la région de Figeac.",
      "Lescure a comparu devant la cour d'assises du Lot qui l'a condamné à deux années de prison."
    ]
  },
  {
    "id": 52,
    "page": 4,
    "category": "Sports",
    "title": "Championnat de la Seine de Rowing",
    "summary": "Le Rowing-Club de Paris organise ce dimanche 9 septembre, dans le bassin de Courbevoie-Asnières, le championnat de la Seine, incluant des courses pour juniors, vétérans et canots automobiles.",
    "paragraphs": [
      "Le championnat de la Seine, organisé par le Rowing-Club de Paris, a été couru, le dimanche 9 septembre, dans le bassin de Courbevoie-Asnières.",
      "Ce championnat est accompagné d'une course pour juniors, d'une course pour juniors n'ayant jamais remporté de prix en skiff, d'une course pour rameurs ayant plus de quarante ans, et d'une course de canots automobiles.",
      "Les épreuves éliminatoires auront lieu le matin et les finales l'après-midi."
    ]
  },
  {
    "id": 53,
    "page": 4,
    "category": "Faits Divers",
    "title": "Le Prince de Galles automobiliste",
    "summary": "Séduit par l'usage de l'automobile, le prince de Galles a passé commande de deux nouveaux véhicules, dont l'un sera spécifiquement aménagé pour le transport de sa suite lors des rendez-vous de chasse.",
    "paragraphs": [
      "Le prince de Galles est, paraît-il, si satisfait de sa première voiture automobile, qu'il vient d'en commander deux nouvelles, dont l'une sera spécialement aménagée pour transporter ses serviteurs aux rendez-vous de chasse."
    ]
  },
  {
    "id": 54,
    "page": 4,
    "category": "Faits Divers",
    "title": "Le drame de Bosquentin",
    "summary": "Un cultivateur laborieux de Bosquentin a été assassiné par l'amant de sa mère. La coupable indifférence de cette dernière envers le crime de son protégé scandalise la population locale.",
    "paragraphs": [
      "Nous avons sommairement raconté hier le drame qui s'est déroulé au hameau du Parc, dépendant de la commune de Bosquentin. Voici des détails complémentaires.",
      "Dans cette localité habitait avec sa femme un cultivateur du nom de Letailleur, homme très laborieux et d'excellente conduite, disent les renseignements de police.",
      "Sa mère, la veuve Letailleur, âgée de soixante-douze ans, vivait également dans ce même pays où elle occupait une petite ferme. C'est là que le drame a eu lieu.",
      "Un individu nommé Blot, âgé de quarante-cinq ans, convoitait la veuve Letailleur, devenant d'abord son conseiller, puis, affirme-t-on, son amant.",
      "Letailleur, furieux autant que scandalisé de voir cet individu vivre aux crochets de sa mère, le somma de ne plus remettre les pieds à Bosquentin, sous peine de se voir faire un mauvais parti. Celui-ci ne tint pas compte de cette menace.",
      "Avant-hier, Letailleur, revenant de la chasse et passant chez sa mère, le trouva assis à une table, faisant sa collation. Ce qui, malheureusement, ne laisse aucun doute, c'est que le malheureux Letailleur fut frappé par Blot de cinq coups de couteau et expira.",
      "L'attitude de la veuve Letailleur produit une fâcheuse impression. Cette septuagénaire, chez laquelle les sentiments maternels semblent être complètement atrophiés, a défendu Blot pour accuser son fils."
    ]
  },
  {
    "id": 55,
    "page": 4,
    "category": "Sports",
    "title": "Courses à Neuilly-Levallois",
    "summary": "Programme des courses hippiques organisées ce mercredi 5 septembre à Neuilly-Levallois, composé d'épreuves de trot monté et d'une course de trot attelé.",
    "paragraphs": [
      "Aujourd'hui, mercredi 5 septembre, au programme des courses : Prix Giselle (trot monté), Prix Serpolet (trot monté), Prix de l'Europe (trot attelé), Prix des Vendanges (trot monté), Prix de Suresnes (trot monté)."
    ]
  },
  {
    "id": 56,
    "page": 4,
    "category": "Sports",
    "title": "Succès des courses à Compiègne",
    "summary": "La réunion hippique de Compiègne a connu un vif succès, attirant une foule de sportsmen séduits par la beauté de l'automne et la qualité des courses d'obstacles au programme.",
    "paragraphs": [
      "La réunion a obtenu un succès complet ; les sportsmen, plus séduits encore par le charme d'une belle journée d'automne que par les attractions d'un programme tout entier consacré à des courses d'obstacles, s'étaient rendus en foule à Compiègne.",
      "Dans ce cadre brillant, le spectacle des courses devait paraître intéressant : il a satisfait les plus difficiles."
    ]
  },
  {
    "id": 57,
    "page": 4,
    "category": "Faits Divers",
    "title": "Sanglante bagarre à Clichy",
    "summary": "Une vive altercation sur le boulevard Victor-Hugo à Clichy a dégénéré en drame lorsqu'un journalier a ouvert le feu, blessant grièvement une couturière et un jeune fabricant de couronnes avant de prendre la fuite.",
    "paragraphs": [
      "Dans la soirée d'hier, à neuf heures, le boulevard Victor-Hugo, à Clichy, a été mis en émoi par plusieurs coups de feu et des cris de douleur.",
      "Une discussion futile s'étant élevée entre deux femmes, la querelle s'envenima rapidement : le nommé Victor Lemieux, journalier, âgé de vingt ans, sortit un revolver de sa poche et fit feu à deux reprises sur la nommée Marie Vallau, couturière, âgée de dix-huit ans, qui a été atteinte à la cuisse gauche.",
      "M. Charles Patou, fabricant de couronnes, âgé de dix-neuf ans, voulant alors s'interposer, une balle lui fracassa le maxillaire droit. Voyant ses deux victimes s'affaisser, Lemieux prit la fuite et, malgré toutes les recherches, n'a pu encore être arrêté."
    ]
  },
  {
    "id": 58,
    "page": 4,
    "category": "Théâtre",
    "title": "Courrier des théâtres",
    "summary": "Le programme des théâtres parisiens s'anime : l'Odéon prépare la réouverture, le Gymnase célèbre un succès de longévité, tandis que Mme Sarah Bernhardt annonce la fin de sa série de représentations pour l'Aiglon.",
    "paragraphs": [
      "L'Odéon fera sa réouverture dans le courant de septembre avec une série de représentations de l'Arlésienne, en attendant la première de la Guerre en dentelles.",
      "Au Gymnase, les Surprises du Divorce atteindront, lundi prochain, leur quatre centième représentation.",
      "C'est le 19 octobre que Mme Sarah Bernhardt donnera, à Paris, la dernière représentation de l'Aiglon."
    ]
  }
];
