// Date: 1900-12-19
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-12-19 (Version Restaurée, 37 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Les droits du beau",
    "summary": "Plaidoyer pour la préservation du patrimoine esthétique et naturel français. L'auteur rappelle que la protection des sites et monuments est un devoir sacré envers les générations futures face à l'urbanisme dévorant.",
    "paragraphs": [
      "On commence à comprendre, chez nous, que le pittoresque a ses droits, que la beauté est un legs et qu'il ne doit point être permis de l'amoindrir. Toucher à cette admirable couronne de monuments qui ceignait le front de la vieille France, déranger quelque chose aux plis majestueux de la robe que lui tissèrent la nature et l'art, c'est attenter à un commun patrimoine.",
      "Nous devons à nos enfants de leur transmettre dans son intégrité ce patrimoine esthétique que nous avons reçu d'une longue suite d'ancêtres et dont nous sommes responsables aux yeux de l'avenir.",
      "Le malheur est que la beauté des sites est très souvent indépendante de l'existence des monuments visés par la loi. Il en résulte que ces sites sont à la merci du premier venu. Or, comme ils forment une portion intégrante du patrimoine national, c'est le patrimoine national qui est lésé chaque fois qu'un de ces sites est atteint ou détérioré.",
      "C'est à chercher cet accommodement que doivent s'attacher de plus en plus les administrateurs soucieux, à juste titre, de transmettre intact aux générations futures le patrimoine esthétique de la France."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille",
    "summary": "Portrait de la tante Colombe, femme au caractère brusque mais au grand cœur, qui, après le décès de son compagnon le Limousin, a recueilli avec une tendre dévotion l'enfant de la malheureuse Rose.",
    "paragraphs": [
      "Une brave femme. À en croire les apparences, il devait y avoir un peu de brusquerie et de franchise brutales dans les allures de la dame, mais en somme, si la personne était avenante et sympathique, elle n'offrait rien de ce qui frappe les passants.",
      "La tante Colombe était donc presque riche. Le Limousin avait bâti cette maisonnette et lui avait donné le nom de sa compagne. Puis il était mort et sa veuve était restée seule et désolée. Aussi, avec quelle tendresse, avec quelle ardeur de dévouement, elle avait emporté l'enfant de Rose quand la malheureuse fille l'avait appelée à son secours."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le naufrage du Gneisenau",
    "summary": "Le naufrage de la frégate Gneisenau suscite une immense tristesse en Allemagne. Le commandant a péri avec honneur tandis que le bilan des victimes s'alourdit avec 150 marins hospitalisés après la catastrophe.",
    "paragraphs": [
      "Madrid, 18 décembre. Voici de nouveaux détails sur le naufrage du Gneisenau. Le commandant du navire est mort à son poste d'honneur, refusant tout secours.",
      "Le choc du bâtiment contre les rochers de l'avant-port fut terrible. Plusieurs voies d'eau s'ouvrirent à l'avant, aussi la frégate coula-t-elle en dix minutes. Le nombre des morts est considérable. Le nombre des marins blessés et contusionnés qui sont soignés à l'hôpital est de 150.",
      "Berlin, 18 décembre. La nouvelle du naufrage du Gneisenau a produit une consternation d'autant plus profonde qu'elle succédait à la réception triomphante des marins de retour de Chine."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Actualités",
    "title": "Après l'Exposition",
    "summary": "L'Exposition universelle ferme ses portes après avoir attiré plus de 50 millions de visiteurs. Le démantèlement des palais débutera dès le 2 janvier, marquant la fin de cette cité éphémère et prestigieuse.",
    "paragraphs": [
      "Il fallut des années de labeur pour préparer, organiser, construire et peupler la cité fantastique, cette « Cosmopolis » bâtie de rêves d'architectes que fut cette dernière exposition. Que sera donc la démolition, la disparition absolue du prestigieux ensemble ?",
      "Le 24 décembre, tout le déménagement doit être chose faite, le commencement des grandes démolitions étant fixé à la date du 2 janvier. Les palais de l'Esplanade ouvriront la série fatale.",
      "En tout, l'Exposition reçut 50 800 893 visiteurs, dont 48 225 310 munis de cartes ou moyennant tickets."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Militaire",
    "title": "Retraite du Général Caillard",
    "summary": "Le général Caillard, commandant le 8e corps d'armée, quitte ses fonctions pour des raisons de santé. Il sera prochainement remplacé à ce poste par le général Godart.",
    "paragraphs": [
      "Nous croyons savoir que le général Caillard, commandant le 8e corps d'armée, a demandé sa mise en disponibilité pour raison de santé et sera remplacé d'ici peu de jours. Son successeur est dès maintenant désigné : c'est le général Godart."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "La Guerre au Transvaal",
    "summary": "Le conflit s'intensifie : un détachement de 700 Boërs a franchi la frontière de la colonie du Cap près d'Aliwal-North, alors que les troupes britanniques poursuivent activement le général De Wet dans l'Orange et le Transvaal.",
    "paragraphs": [
      "Après l'Orange et le Transvaal, la colonie du Cap va connaître à son tour les horreurs de la guerre. Tandis que les troupes anglaises sont occupées à poursuivre l'insaisissable De Wet, de forts commandos républicains ont franchi la frontière.",
      "Le Cap, 17 décembre. Le département de la justice a reçu la nouvelle qu'un détachement de 700 Boërs a traversé la frontière de la colonie du Cap, près d'Aliwal-North."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "Situation en Chine",
    "summary": "Les puissances étrangères finalisent à Pékin la note diplomatique destinée au gouvernement chinois, tandis que le paquebot « Le Tonkin » vient de ramener à Marseille un contingent de militaires rapatriés.",
    "paragraphs": [
      "Pékin, 18 décembre. Les ministres étrangers tiendront demain une réunion au cours de laquelle il est probable qu'ils pourront définitivement tomber d'accord sur le texte de la note à présenter aux ministres chinois.",
      "Le Tonkin, courrier du Japon, de la Chine et de Djibouti, est arrivé ce soir à Marseille avec 81 passagers militaires rapatriés."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "International",
    "title": "La révolte des Boxers en Chine",
    "summary": "Le prince Tuan, écarté des affaires, fomenta la révolte des Boxers en Chine. Animé par une haine profonde envers les étrangers, il tenta de déstabiliser Pékin en s'appuyant sur cette secte de bandits.",
    "paragraphs": [
      "L'œuvre est tout entière du prince Tuan. Constamment tenu en dehors des affaires de l'État depuis trente-cinq ans, le prince Tuan résolut de se venger et de semer la révolte en Chine.",
      "Quand Tuan arriva au pouvoir, il fut laissé dans l'ignorance complète des affaires. Les traités qui avaient été passés lui étaient totalement inconnus ; il jura dès ce jour une haine implacable à tous ceux qui y avaient contribué et résolut en même temps de détruire tout ce qui s'était fait sans lui. Mais quand, avec l'aide des Boxers, il fomenta la révolution, il ignorait la force des Européens qui détenaient régulièrement les concessions, les mines et les autres industries.",
      "Sachant que les chrétiens chinois marchaient avec les Européens, sa haine se porta également sur eux. Ayant rallié tous les mécontents, il commença par trancher la tête à tous les Chinois soupçonnés par ses émissaires d'entretenir des relations commerciales avec les étrangers.",
      "Le but du prince Tuan fut ensuite de s'emparer de Pékin ; il y réussit en partie, mais le succès final fut loin d'être celui qu'il rêvait.",
      "Les Boxers, continue M. Favier, sont une sorte de secte composée de bandits et de voleurs ; il ne faut pas les confondre avec la population chinoise qui possède un grand fond d'honnêteté. Le Chinois, qu'on le sache bien, est l'être le plus doux qui soit au monde."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique étrangère",
    "title": "La position de l'Impératrice de Chine",
    "summary": "M. Favier souligne que l'Impératrice de Chine, restée étrangère aux troubles, a favorisé les intérêts européens. Il anticipe un retour aux affaires de Li-Hung-Chang et une réparation pour les puissances.",
    "paragraphs": [
      "L'impératrice de Chine ne saurait être rendue responsable de ces événements, auxquels elle est restée complètement étrangère.",
      "C'est elle-même qui a concédé à nos concitoyens les lignes de chemins de fer, les mines, et qui leur a créé les principales industries; ce n'est donc pas, dit M. Favier (et ici il appuie sur les mots), de gaieté de cœur qu'elle aurait pu consentir à détruire ce qu'elle avait fait et à changer la ligne de conduite politique qui la guidait depuis trente-cinq ans. Certes, l'impératrice a été faible, elle a manqué d'énergie, mais elle est loin d'être mauvaise et de nourrir contre les Européens des sentiments haineux.",
      "Son rôle ne fut que passif.",
      "Actuellement, le parti dont le chef principal est Li-Hung-Chang commence à regagner du terrain et on espère le voir revenir au pouvoir avec l'empereur et l'impératrice. Toute réparation sera accordée aux Européens.",
      "M. Favier compte repartir pour la Chine vers le milieu du mois de février."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique",
    "title": "Le Droit de Prise",
    "summary": "Le gouvernement français a décidé de restituer les biens civils et gouvernementaux chinois saisis par ses troupes, excluant le matériel de guerre, pour éviter les complications liées au droit de prise.",
    "paragraphs": [
      "L'agence Havas nous communique la note suivante : Dans le but d'éviter les inconvénients pouvant résulter de l'exercice du droit de prise, le gouvernement a décidé que tous les objets appartenant soit au gouvernement chinois, soit aux particuliers, et autres que le matériel et approvisionnements de guerre dont nos troupes se seraient emparées, seront restitués au gouvernement chinois.",
      "C'est dans ce but qu'il a fait arrêter, à leur arrivée en France, les caisses et les colis dont la presse a parlé ces jours derniers."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Nécrologie",
    "title": "Mort d'un député",
    "summary": "M. Dehon-Souboiran, député radical-socialiste de la première circonscription de Nîmes, est décédé la nuit dernière des suites d'une courte maladie. Il était âgé de soixante-trois ans.",
    "paragraphs": [
      "M. Dehon-Souboiran, député de la première circonscription de Nîmes, est mort la nuit dernière dans cette ville, après une courte maladie.",
      "Il était âgé de soixante-trois ans et fut élu le 14 mai 1898, au deuxième tour de scrutin, sous l'étiquette radical-socialiste, face à M. de Bernard, fonctionnaire."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Chambre des Députés",
    "title": "Séance du mardi 18 décembre",
    "summary": "Après de longs débats sur l'amnistie et les budgets, la Chambre a voté l'adoption du projet de loi aux premières heures du matin, malgré l'opposition et des scrutins publics prolongés.",
    "paragraphs": [
      "La Chambre, dans sa séance du matin, a voté les derniers chapitres du budget des Finances, le budget des Monnaies et Médailles, et a amorcé la discussion du budget de la Marine.",
      "La séance de l'après-midi a été consacrée à la suite du projet de loi sur l'amnistie. La Chambre a voté successivement tous les paragraphes de l'article premier, énumérant les cas dans lesquels l'amnistie est accordée.",
      "Après un échange d'observations entre M. Lasies et M. le ministre des Affaires étrangères à propos de la dépêche de M. Panizzardi relative à l'affaire Dreyfus, M. Ernest Roche a protesté contre l'exclusion des condamnés de la Haute Cour du bénéfice de l'amnistie, tandis que M. Charles Humant a défendu un amendement visant à amnistier les personnes condamnées pour des faits liés aux affaires du Panama. La Chambre a rejeté cet amendement par 435 voix contre 3.",
      "L'opposition ayant demandé le renvoi de la discussion, la gauche s'y est opposée ; le débat s'est prolongé par une série de scrutins publics à la tribune avec appel nominal, occupant la séance fort avant dans la nuit.",
      "Enfin, après deux heures du matin, toutes les résistances ayant été vaincues ou lassées, le projet a été adopté."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un crime à Termonde",
    "summary": "Découverte d'un crime atroce à Hruybeke, près de Termonde : le corps d'un homme de cinquante ans, M. Pormans, a été retrouvé atrocement mutilé dans son domicile.",
    "paragraphs": [
      "Un terrible drame vient d'être découvert à Hruybeke, près de Termonde.",
      "Le parquet se trouvait à la maison communale pour une affaire d'incendie criminel, lorsque de nombreux habitants vinrent informer le bourgmestre que du sang s'échappait sous la porte de la maison occupée par un célibataire d'une cinquantaine d'années, M. Pormans, dont les volets étaient clos depuis la veille.",
      "Le parquet se rendit immédiatement à l'adresse indiquée. La porte fut ouverte et, dès l'entrée dans le logis, on constata que du sang s'écoulait par les fentes du plafond, inondant le carreau du rez-de-chaussée.",
      "Au premier étage, on se trouva en présence d'un spectacle terrifiant. Près de la table se trouvait le cadavre ; la carotide était tranchée. Le corps portait dix-sept coups de couteau et les extrémités étaient écrasées. Le désordre le plus complet régnait dans la pièce."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Académie de Médecine",
    "title": "Séance publique annuelle",
    "summary": "L'Académie de médecine a tenu hier sa séance annuelle rue des Saints-Pères, honorant les grands noms de la science médicale et présentant les prix pour les années 1901-1902.",
    "paragraphs": [
      "La séance publique annuelle de l'Académie de médecine a eu lieu hier, à deux heures et demie, dans l'amphithéâtre de la rue des Saints-Pères.",
      "Le docteur Marey a brièvement résumé les grands travaux cliniques et thérapeutiques du siècle, rappelant la mémoire de Nélaton, Claude Bernard, Larrey, et d'autres illustres savants. Le docteur Vallin a ensuite lu le rapport sur les prix décernés ainsi que la nomenclature des prix pour 1901-1902."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Municipal",
    "title": "Le prix du gaz",
    "summary": "M. Alpy a présenté son rapport au conseil municipal concernant les négociations avec la Compagnie parisienne pour obtenir une baisse du prix du gaz et la révision du cahier des charges.",
    "paragraphs": [
      "M. Alpy a communiqué, hier après-midi, à ses collègues de la première commission du conseil municipal, son rapport sur les négociations entreprises depuis plusieurs mois avec la Compagnie parisienne en vue d'une diminution du prix du gaz.",
      "Le rapport recommande d'inviter le préfet de la Seine à poursuivre l'instance engagée devant le conseil de préfecture relativement au partage de l'actif de la compagnie et de préparer un cahier des charges spécifiant des prix de vente réduits pour 1904."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un escroc",
    "summary": "Le sieur se faisant passer pour le comte de Grilly a été appréhendé par M. Coichefert. Il devra répondre devant la justice d'usurpation de titres et du port illégal de décorations.",
    "paragraphs": [
      "Le faux comte de Grilly a été arrêté après une enquête rapide menée par M. Coichefert. Le prétendu aristocrate prétendait devoir rejoindre le « Sphinx », qui n'est en fait qu'un simple bateau de pêche amarré dans le bassin.",
      "L'équipée de ce chevalier d'industrie est terminée. Le parquet poursuit l'inculpé pour usurpation de titres et de fonctions, ainsi que pour le port illégal de décorations."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un enfant meurtrier",
    "summary": "À Ajaccio, une dispute entre écoliers pour un porte-plume a tourné au drame tragique. L'un des enfants a frappé mortellement son camarade d'un coup de couteau au cœur.",
    "paragraphs": [
      "Ajaccio, 18 décembre. Un drame impliquant deux jeunes enfants, âgés de dix à douze ans, s'est déroulé hier après-midi.",
      "Costa et Andréi, élèves de huitième, ont eu une querelle au sujet d'un porte-plume. À la sortie de la classe, la dispute a dégénéré en lutte physique, et Andréi a porté un coup mortel au cœur de Costa avec un couteau.",
      "Le meurtrier a été arrêté dans la soirée au domicile de ses parents et écroué à la maison d'arrêt, terrifié par la portée de son acte."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les obsèques de M. et Mme Tarbé",
    "summary": "Les funérailles de M. et Mme Tarbé des Sablons ont été célébrées hier, dans le respect de leurs rites respectifs : l'église de la Trinité pour le défunt, et des prières israélites pour son épouse.",
    "paragraphs": [
      "Les obsèques de M. et Mme Tarbé des Sablons ont eu lieu hier matin. Les honneurs religieux ont été rendus à M. Tarbé en l'église de la Trinité, tandis que des prières ont été dites dans un salon de l'hôtel particulier pour Mme Tarbé, qui était de confession israélite.",
      "Les deux convois funéraires se sont rendus au cimetière du Père-Lachaise, où les défunts ont été inhumés dans leurs caveaux respectifs."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide d'une jeune femme",
    "summary": "Georgette Bernard, une jeune femme de vingt ans inquiétée par la justice pour une affaire d'indélicatesse, s'est donné la mort par asphyxie au charbon, cédant au remords.",
    "paragraphs": [
      "Il y a quelques jours, Georgette Bernard, une jeune femme de vingt ans, avait été amenée devant M. Guicheteau pour répondre d'une affaire d'indélicatesse commise chez son patron.",
      "Hier matin, rongée par le remords, elle s'est suicidée par asphyxie au charbon dans sa chambre. Lorsqu'on a découvert son corps, le brasier était éteint et elle avait laissé une lettre expliquant son profond désespoir."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie à l'Académie de Médecine",
    "summary": "Un début d'incendie a éclaté hier à la bibliothèque de l'Académie de médecine à cause d'un poêle défectueux. Grâce aux pompiers, les ouvrages précieux sont intacts, malgré quelques dégâts matériels.",
    "paragraphs": [
      "Hier après-midi, un début d'incendie s'est déclaré dans la bibliothèque de l'Académie de médecine, causé par un poêle en fonte dont la chaleur excessive a enflammé des papiers à proximité.",
      "Les pompiers de la caserne du Vieux-Colombier sont intervenus rapidement pour maîtriser le sinistre. Si les ouvrages précieux ont été intégralement épargnés, quelques bustes en bronze ont toutefois été détériorés par la chaleur."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident mortel à l'Exposition",
    "summary": "Un ouvrier, nommé Henri Grignet, a succombé à une chute mortelle survenue hier après-midi alors qu'il travaillait au démontage d'un bâtiment sur le site de l'Exposition universelle au Champ-de-Mars.",
    "paragraphs": [
      "Un ouvrier nommé Henri Grignet, travaillant au démontage d'un bâtiment à l'Exposition universelle, au Champ-de-Mars, a fait une chute mortelle hier après-midi.",
      "Le docteur Selle n'a pu que constater son décès. Une enquête a été ouverte par M. Lhuijon, commissaire de police."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un meurtrier rue Popincourt",
    "summary": "Soupçonné d'une agression à main armée dans un débit de vins de la rue Popincourt, le nommé Léon Vade, âgé de vingt ans, a été appréhendé hier matin par les autorités et mis à la disposition de la justice.",
    "paragraphs": [
      "Après l'agression à main armée commise dans un débit de vins de la rue Popincourt, l'un des deux auteurs présumés, le nommé Léon Vade, âgé de vingt ans, a été arrêté hier matin.",
      "Bien qu'il nie énergiquement les faits, il a été formellement reconnu par des témoins et a été immédiatement mis à la disposition de la justice."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un Suisse dévalisé",
    "summary": "Joseph Dangeiy, un charpentier suisse, a été victime d'une escroquerie. Des malfaiteurs lui ont extorqué 1 400 francs en le trompant par le biais d'un simulacre de tirage au sort.",
    "paragraphs": [
      "Joseph Dangeiy, un charpentier suisse, a été victime d'une déplorable escroquerie. Deux individus, après avoir gagné sa confiance en se prétendant ses amis, lui ont extorqué la somme de 1 400 francs.",
      "Pour ce faire, ils ont organisé un prétendu tirage au sort au cours duquel ils ont incité le malheureux à déposer ses économies dans une enveloppe, laquelle fut prestement substituée par une autre remplie de vieux journaux."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Découverte archéologique à Poitiers",
    "summary": "Une découverte archéologique d'intérêt a eu lieu à Nueil-sous-Faye, où un caveau funéraire contenant des cercueils en pierre et en plomb a été mis au jour, suscitant la curiosité des spécialistes.",
    "paragraphs": [
      "Un propriétaire demeurant à Nueil-sous-Faye a mis au jour, dans ses terres, un caveau funéraire contenant un cercueil en pierre sculptée ainsi qu'un cercueil en plomb renfermant les restes d'un homme de haute stature, découverte qui suscite la vive curiosité des archéologues de la région."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "Fin de la grève des cochers de l'Urbaine",
    "summary": "Le conflit social des cochers de la Compagnie de l'Urbaine prend fin. La direction a accédé aux revendications salariales des travailleurs, provoquant une vive satisfaction à la Bourse du travail.",
    "paragraphs": [
      "Les cochers de la Compagnie de l'Urbaine ont repris leur service après avoir obtenu satisfaction sur leurs revendications salariales auprès de la direction.",
      "Le directeur de la compagnie a accédé aux demandes formulées par les délégués des travailleurs, une issue favorable qui a été accueillie avec enthousiasme par les grévistes réunis à la Bourse du travail."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Social",
    "title": "Les accidents du travail",
    "summary": "M. Mirman dépose une proposition de loi à la Chambre visant à étendre la protection de la loi de 1898 sur les accidents du travail à l'ensemble des salariés, sans aucune exception.",
    "paragraphs": [
      "M. Mirman a soumis à la Chambre des députés une proposition de loi visant à universaliser les dispositions de la loi sur les accidents du travail de 1898, considérant que tous les salariés, quel que soit leur métier, méritent une protection égale devant le risque professionnel."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Social",
    "title": "Grève au port d'Alger et des Docks",
    "summary": "Le port d'Alger subit une paralysie due à une grève des ouvriers du remorquage, tandis qu'à Paris, les ouvriers des docks ont manifesté dans le calme.",
    "paragraphs": [
      "Une grève des ouvriers du port d'Alger paralyse actuellement le service de remorquage. Le gouverneur a rappelé avec fermeté que la police doit assurer, en toutes circonstances, la liberté du travail.",
      "À Paris, les ouvriers des docks ont également manifesté aujourd'hui dans un calme relatif."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Justice",
    "title": "Le drame de la rue des Panoyaux",
    "summary": "La cour d'assises de la Seine a condamné Lucien Covert à deux ans d'emprisonnement pour avoir grièvement blessé son camarade Albert Cara avec une arme à feu en septembre dernier.",
    "paragraphs": [
      "Lucien Covert a été condamné par la cour d'assises de la Seine à deux ans de prison pour avoir, en septembre dernier, fait usage d'une arme à feu et blessé son camarade Albert Cara."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Statistiques",
    "title": "Statistique taurine",
    "summary": "Le bilan de la dernière temporada en Espagne révèle l'ampleur du coût humain et matériel des corridas, où plus de 700 taureaux et 1 350 chevaux ont péri.",
    "paragraphs": [
      "Pour donner une idée précise de l'engouement des Espagnols pour les corridas de muerte, quelques statistiques ne seront pas superflues.",
      "Au cours de la dernière temporada, il a été immolé dans les différentes arènes espagnoles 724 toros qui, de leur côté, ont causé la mort de 1 350 chevaux.",
      "Les taureaux représentaient une valeur globale d'environ 1 450 000 francs, chaque tête valant près de 2 000 francs. Les chevaux, en revanche, ne représentaient qu'une valeur totale de 150 000 francs."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Faits Divers",
    "title": "Drame à Lécluse",
    "summary": "À Lécluse, une rixe entre mariniers allemands dans un cabaret a tragiquement causé la mort d'un jeune homme de vingt ans, blessé mortellement d'un coup de couteau.",
    "paragraphs": [
      "Hier soir, à Lécluse, des mariniers d'origine allemande se sont pris de querelle dans un cabaret. À la sortie, l'un d'eux, nommé Wendling, se mit à jeter des cailloux sur ses compagnons qui, exaspérés, se ruèrent sur lui.",
      "Au cours de la rixe, Wendling a reçu un coup de couteau à la cuisse. L'abondante hémorragie qui en résulta provoqua la mort du malheureux marinier, âgé de vingt ans seulement. Les coupables ont été appréhendés et le parquet de Senlis a immédiatement ouvert une enquête."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Faits Divers",
    "title": "Agression à Clermont",
    "summary": "Un cultivateur de Francastel, Francis Lofranger, a été arrêté après avoir tiré deux coups de revolver sur une voiture de passage occupée par un employé et deux cantonniers, sans faire de blessés.",
    "paragraphs": [
      "Un employé de M. Présopey, quincaillier à Crèvecœur, revenait en voiture de Francastel en compagnie de deux cantonniers, lorsqu'un cultivateur de cette localité, Francis Lofranger, sans aucune provocation, tira sur eux deux coups de revolver.",
      "Une balle atteignit le harnais du cheval, l'autre le devant de la voiture, sans heureusement blesser personne. L'auteur de cette agression a été arrêté et conduit à la maison d'arrêt."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident de voiture à Chartres",
    "summary": "Un accident spectaculaire est survenu rue des Changes à Chartres : le cheval de Mme Bertren s'est emballé, précipitant l'équipage dans une buvette. Plus de peur que de mal pour les passagers.",
    "paragraphs": [
      "Vers trois heures, cet après-midi, Mme Bertren, épouse de M. Bertren, lieutenant au 5e escadron du train, suivait en voiture la rue des Changes, accompagnée d'une ordonnance. Soudain, le cheval s'emballa et, arrivé aux Quatre-Coins, pénétra dans la buvette de MM. Colas.",
      "Les roues de la voiture seules empêchèrent l'équipage d'y pénétrer en entier. Mme Bertren et l'ordonnance furent précipitées par le choc sur le dos du cheval. Mme Bertren s'était évanouie, mais leurs blessures ne sont pas graves."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident mortel à Berchères-la-Maintrot",
    "summary": "Un tragique accident domestique s'est produit à Berchères-la-Maintrot : un vieillard infirme a péri après une chute mortelle dans le foyer de sa cheminée.",
    "paragraphs": [
      "Hier après-midi, un vieillard infirme, M. Pulmonaire, domicilié à Berchères-la-Maintrot, est tombé dans le foyer de sa cheminée et a été enveloppé aussitôt par les flammes.",
      "Des voisins accoururent, éteignirent le feu et l'aidèrent à retirer ses vêtements, mais le malheureux avait été si grièvement brûlé qu'il succomba peu après au milieu d'atroces souffrances."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Météorologie",
    "title": "Bulletin météorologique",
    "summary": "Le temps demeure exceptionnellement doux pour la saison, malgré une chute marquée des températures dans le centre du continent et des conditions contrastées entre Moscou et les côtes françaises.",
    "paragraphs": [
      "Mercredi 20 décembre, 353e jour de l'année, 87e jour de l'automne. Saint Cyrinien.",
      "La journée d'hier a été encore belle, le soleil s'est montré à plusieurs reprises ; la température est toujours au-dessus de la normale.",
      "La température baisse dans le centre du continent ; elle était hier matin de -12 à Moscou, -5 à Clermont, 11 à Brest et à Monaco."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Fruit Défendu - La revanche de Rose-Manon",
    "summary": "Le protagoniste s'interroge sur sa soudaine bonne fortune et les mystérieuses conditions posées par ses interlocuteurs quant à l'attente d'un poste vacant.",
    "paragraphs": [
      "« Ce que c'est que la veine », se disait-il au lendemain du jour où il avait reçu les bonnes nouvelles. Hier, je n'étais rien de plus que ce que je suis en ce moment, et aujourd'hui on paraît trouver que je vaux davantage.",
      "Une seule chose, pourtant, attirait ses réflexions sans, du reste, l'inquiéter. Qu'avaient voulu dire ces personnages lorsqu'ils avaient pris soin d'ajouter : « Patience donc encore pendant quelque temps, et espérons, jusqu'à ce que le poste soit vacant, qu'il ne se produira point d'événements de nature à renverser ces beaux projets. »"
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "À l'approche des fêtes de Noël, les Nouveautés programment deux matinées de la Bonne d'Enfant, tandis que le Châtelet prépare la première du Petit Chaperon rouge et l'ultime audition du Faust de Schumann.",
    "paragraphs": [
      "À l'occasion de la fête de Noël, les Nouveautés donneront deux matinées de la Bonne d'Enfant, les dimanche 23 et mardi 25 décembre.",
      "Dimanche prochain, aux concerts Colonne du Châtelet, aura lieu la deuxième et dernière audition du Faust de Robert Schumann.",
      "Au Châtelet, on compte pouvoir donner irrévocablement la première du Petit Chaperon rouge vendredi soir."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Social",
    "title": "Assemblée générale de la Société des auteurs",
    "summary": "La Société des auteurs, compositeurs et éditeurs de musique a tenu une longue assemblée générale. Plusieurs mesures importantes ont été adoptées, incluant une hausse des droits et des pensions des membres.",
    "paragraphs": [
      "Séance longue et bruyante à l'assemblée générale de la Société des auteurs, compositeurs et éditeurs de musique. Ouverte à une heure trois quarts par M. Henri David, dit Darsay, cette séance n'a pris fin qu'à six heures et demie.",
      "L'assemblée a voté une proposition accordant aux compositions musicales une augmentation de droits, décidé la modification de l'article 10 des statuts et porté de 300 à 365 francs le chiffre de la pension."
    ]
  }
];
