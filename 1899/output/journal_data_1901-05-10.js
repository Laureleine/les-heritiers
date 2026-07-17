// Date: 1901-05-10
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-05-10 (Version Restaurée, 41 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La fin de la Bièvre",
    "summary": "La Bièvre, rivière historique de Paris, disparaît sous un recouvrement de briques et de ciment. Si l'assainissement de la capitale est en jeu, les Parisiens déplorent la perte de ce cours d'eau pittoresque.",
    "paragraphs": [
      "C'est fini ! La Bièvre, cette petite rivière sinueuse qui traverse tout un quartier de Paris et se jette dans la Seine, va disparaître pour jamais des yeux des Parisiens ; ses eaux seront recouvertes d'un plafond de briques et de ciment, tout le long du parcours sinueux qu'elles suivent dans la capitale.",
      "Le filet noirâtre et puant du petit ruisseau empestait et empoisonnait l'atmosphère, mais le service de l'assainissement de la Ville avait à lutter contre les résistances des industriels établis sur les rives. Ces résistances ont été vaincues, et, désormais, les Parisiens ne pourront plus apercevoir, au moins dans Paris, la moindre trace de ce cours d'eau.",
      "La Bièvre a son origine entre le hameau de Bouvier et le rivage de Guyencourt, dans le grand parc de Versailles. Après un cours d'environ 37 kilomètres, elle se jette en amont du pont d'Austerlitz.",
      "Si la Bièvre a été associée à des légendes, comme celle des castors ou du moulin de Croulebarbe, elle a surtout joué un rôle historique lors du siège de Paris par les Romains. Plus tard, au XVIIe siècle, elle fut le théâtre de crues dévastatrices appelées le « Déluge de la Bièvre ».",
      "Il n'est pas possible de parler d'elle sans donner un mot à la fabrique des Gobelins, dont la réputation de teinturerie était attribuée à la pureté de ses eaux.",
      "Désormais, la Bièvre sera couverte dans toute la traversée de Paris. Si la santé publique y gagnera, les Parisiens regretteront que la petite rivière, chassée par les maisons, n'ait pas pu conserver son aspect campagnard."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Grand Roman Inédit : Deuxième Partie (suite)",
    "summary": "Mathieu part pour Sceaux, laissant Odette seule face aux avances pressantes de Sylvestre. Une situation qui s'envenime dans le calme trompeur du jardin.",
    "paragraphs": [
      "Trop aimée. Mathieu était parti pour Sceaux. Les petits acceptèrent avec joie, mais à la condition que leur chère Odette serait de la partie. Mais, à ce moment, Mathieu distingua un frémissement chez sa femme et chez son fils.",
      "Odette, feignant d'être lasse, s'enferma dans sa chambre pour lire. Mais elle fut vite rejointe par Sylvestre, dont l'amour possessif et les déclarations enflammées l'effrayèrent. Malgré ses tentatives de fuite, Sylvestre la pressait avec une violence exaspérée, sous l'œil complice de sa mère qui veillait au jardin."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Le Budget de 1902",
    "summary": "Le projet de budget pour 1902 prévoit une hausse des dépenses de 75 millions. Le ministre des Finances appelle à la prudence face aux moins-values avant les élections législatives.",
    "paragraphs": [
      "Le budget de 1902, qui vient d'être distribué aux députés, est équilibré sur le papier, mais il commande néanmoins la plus grande attention. Il implique une augmentation de dépenses de 75 millions, soit pour l'exécution de lois antérieures, soit à cause des nécessités de la défense nationale.",
      "Le ministre des Finances a signalé l'importance de moins-values qui compromettent un peu son budget. Comme le printemps de 1902 verra les élections générales, il importe que la loi de finances soit promulguée avant le 31 décembre.",
      "La commission du budget devra avoir pour programme de faire toutes les économies possibles."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Violent incendie à Tours",
    "summary": "Un grave incendie a dévasté une scierie et des ateliers rue George-Sand à Tours cette nuit. Si les dégâts matériels sont importants, aucune perte humaine n'est à déplorer.",
    "paragraphs": [
      "Un incendie d'une violence extrême a éclaté cette nuit, au centre de Tours, dans la scierie mécanique de M. Labadie, rue George-Sand. Le feu, propagé par un vent violent, a atteint les ateliers de M. Birchent et de M. Lartigue.",
      "Les pompiers, impuissants à lutter contre les flammes, ont dû se concentrer sur la préservation du Théâtre-Français. Les pertes sont évaluées à plusieurs milliers de francs, mais aucune perte humaine n'est à déplorer."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Étranger",
    "title": "La situation à Barcelone",
    "summary": "L'état de siège est proclamé à Barcelone après de violents affrontements entre les troupes et la foule lors de mouvements sociaux. Madrid ordonne le rétablissement de l'ordre.",
    "paragraphs": [
      "La situation est devenue brusquement très grave à Barcelone. Des collisions entre la foule et les troupes ont fait des morts et des blessés. L'état de siège a été proclamé.",
      "L'émeute résulte d'une jonction des partis avancés, des ouvriers en grève et des catalanistes. Madrid a ordonné à la garnison de faire preuve de la plus grande énergie pour rétablir l'ordre."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le crime de Corancez",
    "summary": "M. Dudefoy, médecin légiste, poursuit l'expertise des pièces à conviction du crime de Corancez. L'état de santé de Brierre étant rétabli, le médecin a prescrit la poursuite des soins pour ses blessures.",
    "paragraphs": [
      "Le médecin légiste, M. Dudefoy, a poursuivi son examen minutieux des vêtements de Brierre ainsi que des chemises et des taies d'oreiller ayant appartenu aux victimes. Brierre, qui était souffrant, est désormais rétabli ; le médecin a ordonné la continuation des soins pour ses légères blessures."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Colonies",
    "title": "Incursions de Pirates Chinois au Tonkin",
    "summary": "Une bande de pirates a assailli le poste français de Lung-Lau. Après une résistance héroïque de la garnison, les assaillants ont été repoussés au-delà de la frontière chinoise par nos troupes.",
    "paragraphs": [
      "Une dépêche parvenue d'Hanoï annonce qu'une bande de pirates a pénétré sur notre territoire et attaqué le poste de Lung-Lau. La garnison, après avoir résisté héroïquement toute la journée, a dû évacuer la position.",
      "Les pirates ont été ultérieurement repoussés en Chine par nos troupes à l'issue de plusieurs escarmouches, lesquelles ont causé des pertes regrettables de part et d'autre."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Singulier accident à Villemomble",
    "summary": "À Villemomble, des commerçants ont été intoxiqués par une fuite de gaz issue de travaux de voirie. Le commissaire de police a diligenté une enquête pour déterminer les causes et responsabilités du sinistre.",
    "paragraphs": [
      "Un accident pour le moins singulier s'est produit à Villemomble. Des commerçants ont été retrouvés inanimés dans leur domicile, victimes d'une fuite de gaz provenant d'une tranchée ouverte sur la voie publique pour des travaux de canalisation.",
      "Le commissaire de police s'est immédiatement rendu sur les lieux afin d'ouvrir une enquête destinée à établir les responsabilités précises de cet accident."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'Affaire du Trou d'Orgemont",
    "summary": "Un forcené nommé Burson a tiré sur des passants depuis une carrière à Argenteuil, faisant plusieurs blessés. L'auteur des faits a été arrêté par les autorités et conduit vers Versailles.",
    "paragraphs": [
      "Un forcené nommé Burson a fait usage d'une arme à feu contre des passants depuis une carrière située à Argenteuil. Plusieurs personnes ont été atteintes et blessées par ces décharges.",
      "L'individu a été arrêté par le commissaire de police et immédiatement dirigé sur Versailles pour y être entendu."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "National",
    "title": "Le Monument aux héros de l'Afrique",
    "summary": "Un comité parisien lance le projet d'un monument grandiose dédié aux explorateurs et soldats français, de René Caillié à Dodds et Lamy, artisans de l'expansion coloniale africaine.",
    "paragraphs": [
      "Un comité s'est constitué à Paris afin de commémorer, par l'érection d'un monument grandiose, les noms des héros qui ont accompli la conquête du continent noir.",
      "De René Caillié à Dodds et Lamy, ce monument se propose de rendre un hommage solennel à tous ceux qui ont payé de leur vie la réalisation et l'affermissement de notre empire africain."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Éditorial",
    "title": "Un monument à la gloire de l'expansion coloniale",
    "summary": "Un comité s'organise pour ériger un monument à la gloire de l'expansion française en Afrique. Un concours d'artistes est lancé pour ce projet ambitieux, dont l'emplacement reste encore à définir à Paris.",
    "paragraphs": [
      "Le comité provisoire s'est réuni il y a quelques jours pour mener à bien une entreprise importante : la construction d'un monument en l'honneur des explorateurs et des acteurs de l'expansion française en Afrique.",
      "Le projet, qui a reçu le patronage des pouvoirs publics et l'appui du Président de la République, prendra la forme d'un arc de triomphe orné de bas-reliefs et de statues, rappelant les faits moraux et matériels qui ont assis les droits de la France sur le continent africain.",
      "Le comité a décidé d'ouvrir un concours à deux degrés, limité aux titulaires d'une première médaille de la Société des Artistes français, aux sociétaires de la Société nationale des Beaux-Arts et aux membres de l'Institut, afin de confier l'œuvre à des artistes confirmés.",
      "L'emplacement reste à déterminer. Bien que le square de la Sorbonne ait été évoqué, il est jugé trop restreint. Un projet plus logique consisterait à placer le monument dans les jardins du Champ de Mars, un lieu qui pourrait réunir tous les suffrages.",
      "Le coût de ce monument sera très élevé, mais les organisateurs sont optimistes face aux encouragements reçus des chambres de commerce et des sociétés savantes. Les souscriptions sont ouvertes au siège du comité, 15, rue de la Ville-l'Évêque."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Militaires",
    "title": "Nos soldats sous la neige",
    "summary": "Malgré les rigueurs de l'hiver alpin et l'isolement provoqué par les avalanches, nos troupes ont fait preuve d'un courage exemplaire, salué par le Club alpin.",
    "paragraphs": [
      "Les publications consacrées aux courses en montagne nous apportent des renseignements sur les épreuves subies par nos troupes alpines durant l'hiver. Dans la vallée de l'Ubayette, le fort Tournoux et la batterie de Roche-Lacroix ont été isolés par la neige pendant huit jours, nécessitant un travail acharné pour leur dégagement.",
      "Malgré les conditions extrêmes, avec parfois quatre mètres de neige bloquant les routes, les soldats ont conservé un moral excellent. De nombreuses catastrophes ont été évitées, bien que la tempête ait provoqué le déclenchement d'avalanches sur toutes les cimes voisines.",
      "Le Club alpin a accordé une récompense aux soldats Pondu et Lamy pour leur conduite, tandis que la grande médaille a été décernée au lieutenant Beauser."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Dépêches étrangères",
    "title": "Actualités de Belgique, Hollande, Serbie et Chine",
    "summary": "Un tour d'horizon des dépêches internationales : faits divers en Belgique, état de santé du Sultan, tensions diplomatiques à Pékin et actualité royale en Hollande et en Serbie.",
    "paragraphs": [
      "À Bruxelles, deux enfants, Pierre et Ernest Ydome, se sont querellés au logis. Le cadet a poignardé son aîné, qui a été conduit à l'hôpital dans un état grave.",
      "À Anvers, La Métropole annonce la grossesse de la reine Wilhelmine de Hollande.",
      "À Londres, on signale que le Sultan est si gravement malade qu'il ne sera bientôt plus possible de cacher la vérité sur son état.",
      "La municipalité de Battersea, à Londres, a renommé une rue en l'honneur du général boër Joubert.",
      "À Belgrade, le roi de Serbie a rendu obligatoire l'enseignement de la langue russe à l'École militaire.",
      "À Pékin, les ministres d'Angleterre, de Russie et le chargé d'affaires des États-Unis quittent la capitale pour se réfugier dans la région des collines."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Opérations militaires au Transvaal",
    "summary": "Le point sur le conflit au Transvaal : escarmouches entre Anglais et Boërs, captures de positions stratégiques et situation sanitaire au Cap.",
    "paragraphs": [
      "Les Anglais ont repoussé le commando de Scheepers le long de la rivière Baviaansklouf, tandis que les Boërs ont coupé les lignes de chemin de fer et télégraphiques entre Dassiedeur et Mortimer.",
      "La colonne Plummer, après une marche pénible, a capturé du bétail et fait des prisonniers. Une patrouille anglaise a toutefois été surprise par les Boërs, qui ont libéré des prisonniers avant de relâcher les soldats après les avoir désarmés.",
      "La colonne Grenfell a enlevé le fort Klipdam, tuant 9 Boërs et faisant 45 prisonniers. Par ailleurs, 500 Boërs dirigés par Viljoen ont été repoussés par le général Beatson à coups de mitrailleuse.",
      "L'autorité militaire a autorisé 400 artisans et mineurs européens à retourner dans le Rand.",
      "Au Cap, six nouveaux cas de peste sont signalés, dont deux décès."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Chronique scientifique",
    "title": "Les autopsies et l'étude des cerveaux",
    "summary": "Entre progrès médical et curiosité anatomique, l'étude des cerveaux de personnalités éminentes soulève des questions éthiques et dissipe les mythes sur le trafic de corps.",
    "paragraphs": [
      "L'école chirurgicale moderne s'est construite sur l'audace des anatomistes. Aujourd'hui, certains savants poussent l'héroïsme jusqu'à léguer leur corps à la science pour permettre l'étude des rapports entre la matière cérébrale et les facultés intellectuelles.",
      "Aux États-Unis, l'Association des cerveaux de Cornell, présidée par M. Wilder, cherche à étudier les cerveaux de notables et de savants. Des personnalités comme M. Chauncey-Depew ont déjà promis le leur.",
      "À Paris, la Faculté de médecine reçoit fréquemment des offres de particuliers proposant de vendre ou léguer leur corps, souvent dans un but spéculatif pour subvenir aux besoins de leur famille. Ces propositions, parfois étranges, témoignent de la persistance de fausses croyances sur un prétendu trafic de cadavres."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "La confession d'un forçat",
    "summary": "Un forçat condamné par contumace pour un double meurtre commis à Vironchaux en 1896 a avoué son crime depuis le bagne de Nouméa, entraînant la réouverture de l'enquête judiciaire.",
    "paragraphs": [
      "En 1896, à Vironchaux, un habitant se rendait coupable de l'assassinat de sa femme et d'un voisin. Condamné par contumace à vingt ans de travaux forcés, le criminel a fini par libérer sa conscience en avouant son double forfait depuis le bagne de Nouméa.",
      "Suite à ces révélations tardives, le parquet a ordonné le transport immédiat des autorités sur les lieux du drame afin de procéder aux recherches nécessaires pour retrouver les restes des victimes."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Une mère dénaturée à Argenteuil",
    "summary": "Louise Gagnerau, jeune domestique de dix-neuf ans, a été arrêtée à Argenteuil pour avoir tenté de tuer son nouveau-né. L'enfant, secouru par des riverains, a été transporté d'urgence à l'hôpital.",
    "paragraphs": [
      "Louise Gagnerau, une domestique âgée de dix-neuf ans, a été appréhendée après avoir abandonné son nouveau-né dans un jardin à Argenteuil. La malheureuse avait tenté, avec une cruauté indicible, de mettre fin aux jours de l'enfant en le frappant avec des pavés.",
      "Le pauvre nourrisson a été heureusement découvert par M. et Mme Lequié qui, après avoir prodigué les premiers soins, l'ont fait transporter d'urgence à l'hôpital le plus proche."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Social",
    "title": "Bulletin du travail : Les retraites ouvrières",
    "summary": "La commission d'assurance et de prévoyance sociales a statué sur le projet de retraites ouvrières, plafonnant la participation de l'État à 100 francs et laissant le choix du mode de constitution de pension aux travailleurs.",
    "paragraphs": [
      "La commission d'assurance et de prévoyance sociales a poursuivi ses délibérations concernant les amendements relatifs aux retraites ouvrières. Il a été arrêté, après débat, que la majoration accordée par l'État ne pourrait excéder le plafond de 100 francs.",
      "Il est désormais acquis que les ouvriers auront la faculté d'opter entre deux systèmes distincts de constitution de leur pension, selon que le capital soit aliéné ou réservé."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Calme revenu à Montceau-les-Mines",
    "summary": "La situation est apaisée à Montceau-les-Mines. La reprise du travail dans les mines s'est faite sans incident, permettant ainsi la levée des patrouilles exceptionnelles qui assuraient l'ordre.",
    "paragraphs": [
      "L'activité reprend son cours normal sur les chantiers de Montceau-les-Mines. La descente des ouvriers dans les puits s'est effectuée ce matin sans qu'aucun incident ne soit à déplorer.",
      "En signe de retour à l'ordre, les patrouilles qui sillonnaient les rues ont cessé leur service, marquant l'apaisement de la situation locale."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Paris",
    "title": "Échos et nouvelles de la capitale",
    "summary": "Le ministre Georges Leygues reçoit les élus des Bouches-du-Rhône. Par ailleurs, la mise en circulation d'un timbre ferroviaire et l'amélioration de l'accès à la nef de la sculpture marquent l'actualité parisienne.",
    "paragraphs": [
      "Le ministre Georges Leygues a reçu les représentants des Bouches-du-Rhône afin d'étudier les projets relatifs au rachat des lignes de chemins de fer et à l'assainissement complet de la ville de Marseille.",
      "Un nouveau timbre-poste, communément appelé « timbre des chemins de fer », a été mis en circulation sur le réseau de l'État ; il est orné de l'effigie d'une locomotive à vapeur de type 125.",
      "La Compagnie P.-L.-M. propose, pour encourager le commerce, la création de cartes de circulation à demi-tarif, valables par département, afin de faciliter les déplacements de courte distance.",
      "Afin d'améliorer l'accueil du public, la Société des artistes français a fait installer un escalier monumental facilitant l'accès à la nef de la sculpture.",
      "La promenade annuelle des Cent Kilos de Paris s'est déroulée hier avec un succès remarquable, malgré l'inclémence du temps qui n'a pas découragé les participants."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Paris",
    "title": "Saisie de cartouches",
    "summary": "Le commissaire de police a fait saisir des millions de cartouches stockées dans les caves d'un immeuble de la rue Bouret, appartenant à la maison Gaugillat et Cie, constituant un danger réel pour le voisinage.",
    "paragraphs": [
      "Le commissaire de police a procédé à la saisie de millions de cartouches entreposées dans les caves d'un immeuble de la rue Bouret, dépendant de la maison Gaugillat et Cie. Ce dépôt, dépassant considérablement les autorisations réglementaires, constituait un péril imminent pour la sécurité des habitants du quartier."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits Divers",
    "title": "Agression violente d'un éleveur",
    "summary": "Un éleveur suisse, Jacob Zencar, a été sauvagement agressé boulevard de la Goutte-d'Or par deux malfaiteurs qui l'ont dévalisé avant d'être appréhendés par les autorités.",
    "paragraphs": [
      "Un éleveur suisse, le sieur Jacob Zencar, a été sauvagement agressé par deux individus alors qu'il circulait sur le boulevard de la Goutte-d'Or. Les malfaiteurs, après l'avoir assommé et blessé à l'arme blanche pour lui dérober une somme importante, ont été promptement appréhendés par une patrouille de gardiens de la paix."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation de deux malfaiteurs",
    "summary": "Interrogés par M. Monentreuil, deux malfaiteurs ont été écroués. L'un, multirécidiviste, portait 800 francs d'origine suspecte, tandis que son complice détenait le portefeuille de leur victime.",
    "paragraphs": [
      "Amenés et interrogés par M. Monentreuil, les prévenus ont décliné leurs identités : Félix Véragea, âgé de vingt-deux ans, et Maurice Carture, âgé de vingt-huit ans. Ce dernier, déjà condamné pour des agressions nocturnes, était porteur d'une somme de 800 francs dont il ne put justifier l'origine.",
      "Son acolyte, lors de la fouille, fut trouvé nanti du portefeuille dérobé à la victime."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tué à coups de pied rue de Ménilmontant",
    "summary": "Une dispute dans un débit de vins rue de Ménilmontant a viré au drame : un homme est décédé après avoir été violemment frappé à l'abdomen par le débitant suite à une altercation sur ses consommations.",
    "paragraphs": [
      "Quelques consommateurs étaient réunis, avant-hier après-midi, dans un débit de vins tenu rue de Ménilmontant par M. Auguste Moisset, et se divertissaient à la manille. À proximité se trouvait un journalier nommé Pierre Viozat, âgé de quarante-huit ans.",
      "Une vive altercation éclata au sujet du règlement des consommations. Moisset, dans un accès de fureur, se jeta sur Viozat et lui asséna trois violents coups de pied dans l'abdomen.",
      "Transporté d'urgence à l'hôpital Tenon, Viozat a expiré au cours de la nuit. M. Girard, commissaire de police, a immédiatement saisi le parquet. Le débitant prétend avoir agi sous la menace d'une bouteille, version formellement contredite par plusieurs témoins présents."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Trois femmes pour un mari",
    "summary": "Laurent Marin, employé de commerce bigame, a été arrêté après le vol d'une paire de bottines. Il devra répondre devant la cour d'assises de ses unions successives contractées entre 1897 et 1899.",
    "paragraphs": [
      "Nous avons relaté l'arrestation d'un bigame, le nommé Laurent Marin, employé de commerce. M. Larcher a finalisé l'instruction de cette affaire singulière.",
      "Marin avait contracté mariage en 1897 avec Louise Nicoud, puis en mai 1899 avec Marie-Cétine Ramaise, avant d'entretenir une relation maritale avec une troisième femme, Julia Madeleine. C'est le larcin d'une paire de bottines qui a conduit à son arrestation et à la révélation de sa bigamie.",
      "Marin, qui a tenté de justifier sa conduite par le tempérament difficile de sa première épouse, comparaîtra prochainement devant la cour d'assises."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le couteau de l'oncle",
    "summary": "Un zingueur, Ernest Chapuis, a poignardé sa maîtresse Berthe Molier par jalousie à l'aide d'un couteau ayant appartenu à son oncle. La victime est hospitalisée et l'agresseur a été arrêté par les autorités.",
    "paragraphs": [
      "Un zingueur, Ernest Chapuis, soupçonnait sa maîtresse, Berthe Molier, d'entretenir une liaison avec un peintre nommé Henri Letayer. Fou de jalousie, il avait menacé la jeune femme avec un couteau ayant appartenu à son oncle.",
      "Hier matin, ayant surpris un baiser, il poignarda Berthe Molier au flanc gauche. La blessée fut transportée à l'hôpital Broussais, mais ses jours ne sont pas en danger. Chapuis a été arrêté."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le coffre-fort dynamité de l'American Express",
    "summary": "Le juge Leydet a confronté James Wilson, suspecté du vol à l'American Express, avec le gardien de nuit. Wilson a disculpé le gardien, qui a été remis en liberté malgré le dynamitage du coffre.",
    "paragraphs": [
      "Le juge Leydet a confronté James Wilson, dit Miller, avec le gardien de nuit, Segars-Merte. Wilson avait été arrêté pour le vol commis à l'American Express Company.",
      "Le gardien a raconté comment trois individus armés l'ont ligoté avant de faire sauter le coffre-fort à l'explosif. Wilson a refusé de donner de nouveaux renseignements, mais a disculpé le gardien, qui a été remis en liberté."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident avec les balles Dum-Dum",
    "summary": "Un ingénieur a été grièvement blessé à la main en manipulant des balles dites « Dum-Dum », un nouveau jouet explosif par percussion. Le commissaire Archer a ouvert une enquête sur cet accident.",
    "paragraphs": [
      "Un ingénieur, M. L., a été grièvement brûlé à la main droite en manipulant deux balles dites Dum-Dum, un jouet nouveau qui explose par percussion.",
      "Le commissaire Archer a rédigé un rapport spécial sur cet accident."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame sur le boulevard Bonne-Nouvelle",
    "summary": "Un drame sanglant a éclaté boulevard Bonne-Nouvelle : M. Henri Louap a tiré sur un distributeur de prospectus. La victime, atteinte à la tête, est dans un état préoccupant à l'hôpital Saint-Louis.",
    "paragraphs": [
      "M. Henri Louap, 27 ans, a tiré sur Auguste Lopez, un distributeur de prospectus, en face du théâtre du Gymnase. Lopez, atteint à la tête, est dans un état grave à l'hôpital Saint-Louis. Louap a été arrêté."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les désespérés",
    "summary": "Une série de suicides tragiques a endeuillé Paris, avec deux cas distincts survenus aux Champs-Élysées et dans un restaurant de la rue Royale.",
    "paragraphs": [
      "Aux Champs-Élysées, un homme non identifié s'est suicidé par arme à feu dans une bascule publique. De même, un autre individu s'est tué dans un restaurant de la rue Royale."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un quartier assaini",
    "summary": "M. Boutineau, commissaire de police, a mené une vaste opération de nettoyage dans le quartier des Quinze-Vingts, procédant à l'arrestation de nombreux individus troublant la tranquillité publique avenue Daumesnil.",
    "paragraphs": [
      "M. Boutineau, commissaire de police, a procédé à de nombreuses arrestations dans le quartier des Quinze-Vingts pour déloger rôdeurs, vagabonds et filles publiques qui infestaient les environs de l'avenue Daumesnil."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le double assassinat de Bruxelles",
    "summary": "L'enquête sur le double crime commis rue de la Senne à Bruxelles progresse : le suspect principal, Debruycker, a reconnu les faits et dénoncé son complice, un nommé Sméllinek.",
    "paragraphs": [
      "Debruycker, soupçonné du double crime de la rue de la Senne à Bruxelles, a avoué avoir agi avec un complice nommé Sméllinek."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Faits divers en banlieue",
    "summary": "Une série de drames et d'incidents touche la banlieue parisienne : vols, suicides, accidents de la route et cambriolages marquent l'actualité à Boulogne, Levallois, Clichy, Bois-Colombes, Villemomble et Charenton.",
    "paragraphs": [
      "À Boulogne-sur-Seine, Louis Bouchet, ouvrier plombier, a été arrêté pour vol. À Levallois-Perret, un chauffeur-mécanicien s'est suicidé par asphyxie. Une fillette de six ans, Georgette Hanaa, a été grièvement blessée à Clichy par une voiture de livraison.",
      "À Bois-Colombes, Mme veuve Aglaé Lajoux s'est pendue. À Villemomble, une tentative de cambriolage a eu lieu dans la villa d'un banquier parisien. À Charenton, M. Constant Reilly a été grièvement blessé par un cheval."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drames par asphyxie et noyade",
    "summary": "L'actualité macabre rapporte deux nouveaux décès : une asphyxie accidentelle ou volontaire à Sartrouville et la découverte, à Melun, du corps d'une femme repêché dans la Seine.",
    "paragraphs": [
      "À Sartrouville, Louis Barmier s'est donné la mort par asphyxie. À Melun, le corps de Mme Piqueret a été retiré de la Seine dans des circonstances demeurant incertaines."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Tribunaux",
    "title": "Jugement de la fosse Fénelon et question des voyageurs",
    "summary": "Le tribunal de Douai condamne les responsables de la fosse Fénelon après une explosion, tandis qu'à Saint-Étienne, une jurisprudence est établie sur le déclassement des voyageurs en train.",
    "paragraphs": [
      "Le tribunal correctionnel de Douai a condamné M. Lernay et ses ingénieurs à des amendes suite à la tragique explosion de la fosse Fénelon.",
      "Le tribunal de commerce de Saint-Étienne a statué sur une affaire concernant le déclassement des voyageurs en chemin de fer, décidant que la compagnie ne pouvait être tenue pour responsable si, en cas d'affluence exceptionnelle, un voyageur doit monter dans une classe inférieure."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Statistiques",
    "title": "Statistique municipale de la ville de Paris",
    "summary": "Pour la 18e semaine, Paris enregistre 1 016 décès. Ce chiffre, supérieur à la moyenne du mois de mai, est principalement attribué aux ravages de la phtisie pulmonaire dans la capitale.",
    "paragraphs": [
      "Pour la 18e semaine, la ville de Paris a enregistré 1 016 décès, un chiffre supérieur à la moyenne du mois de mai, principalement dû à la phtisie pulmonaire."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "La reprise du mélodrame à l'Ambigu",
    "summary": "Le théâtre de l'Ambigu-Comique reprend avec succès un grand classique du répertoire. Portée par une troupe vaillante, cette œuvre intense revisite les figures légendaires du drame de Soulié.",
    "paragraphs": [
      "Le théâtre de l'Ambigu a repris, hier soir, l'un des plus pathétiques mélodrames du vieux répertoire. Songez qu'il date du 14 octobre et que, souvent repris, il a toujours fait une belle carrière. Tellement que deux directeurs du Théâtre-Français, Émile Perrin et le directeur actuel, M. Jules Claretie, ont eu un moment l'idée de le transporter dans la maison de Molière.",
      "C'est dans ce drame qu'apparaît la sinistre et pâle figure de Léonie la Lionne, cette femme, nous disent les bibliographes dramatiques, sans pudeur et sans vertu, qu'on trouve à tous les coins des carrefours, élégante, et qui vous arrête d'une dangereuse œillade en vous demandant la bourse ou l'honneur, ou au besoin l'un et l'autre.",
      "C'est aussi dans la Closerie des Genêts que se trouve la fameuse scène où Kérouan, le vieux chouan, qui ne sait pas lire, prie sa fille Louise de lui lire à haute voix la lettre par laquelle elle avouait son déshonneur.",
      "Parmi les artistes qui créèrent le drame de Soulié, plusieurs sont devenus célèbres : Paulin-Ménier, Lacressonnière, Mmes Guyon et Haptal-Airault. À l'origine, un joueur de biniou réputé en Bretagne avait été engagé tout exprès pour jouer de cet instrument cher à nos compatriotes.",
      "Aujourd'hui, la pièce est interprétée par MM. Henry Krauss, Laroche, Modot, Jourda, Mmes Archainbaud, Barbier, Watteau, c'est-à-dire par une troupe vaillante et convaincue, qui sait la tradition du mélodrame et qui amènera à celui de Soulié un renouveau de succès."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Notes théâtrales",
    "summary": "Actualités des scènes parisiennes : modifications d'horaires au Châtelet, démission au Conservatoire, hommages aux artistes et annonces de représentations exceptionnelles et galas.",
    "paragraphs": [
      "Au Châtelet, le Tour du monde en 80 jours commence maintenant à huit heures et quart et finit entre minuit moins dix et minuit moins cinq.",
      "M. Paul Taffanel vient de donner, pour des raisons de santé, sa démission de chef d'orchestre à la Société des concerts du Conservatoire.",
      "À l'occasion de la représentation extraordinaire que l'on prépare à l'Opéra en l'honneur de Mme Rose Laurent, une médaille, due à Roty, sera offerte à l'éminente doyenne des artistes dramatiques, fondatrice de l'Orphelinat des Arts.",
      "Le théâtre du Gymnase donnera, dimanche prochain, une seule et unique matinée des Surprises du divorce avec Galipaux et toute la distribution du soir. Rappelons que la comédie de MM. A. Bisson et Antony Mars est un spectacle de famille des plus amusants.",
      "Ce soir vendredi, au théâtre Montmartre, représentation extraordinaire donnée au bénéfice de Mme Herly, avec le concours gracieux et assuré d'artistes des principaux théâtres et concerts de Paris.",
      "Le compositeur Léon Fontbonne donnera, le 15 juin prochain, une audition de ses œuvres dans la salle des Horticulteurs de France, 8, rue d'Athènes, avec le concours de nombreux artistes et exécutants des théâtres subventionnés.",
      "M. Jules Claretie, administrateur de la Comédie-Française, présidera le dîner de faveur, réunion amicale de directeurs, secrétaires et courriéristes des théâtres de Paris, qui aura lieu samedi 11 mai à sept heures du soir."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Concerts et divertissements",
    "title": "Revue des spectacles",
    "summary": "Succès confirmés et nouveautés sur les planches parisiennes : les Folies-Bergère séduisent par leur diversité, tandis que la revue de l'Eldorado remporte un triomphe immédiat grâce à son entrain.",
    "paragraphs": [
      "La première de la revue Vite, Vite ! Parisienne, qui devait avoir lieu ce soir, est renvoyée à demain, pour cause d'indisposition de la commère, Mlle L. Lidkiy.",
      "Jamais le programme des Folies-Bergère n'a été aussi complet qu'en ce moment : les attractions les plus rares et les plus curieuses y composent un spectacle de premier ordre, où il est difficile de faire une sélection : la danseuse tzigane Katinka, le jongleur cocasse Fields, le champion cycliste Budsander, les acrobates de Toma, les clowns Kelly et Gillett, etc., autant de numéros uniques que la clientèle de M. Marchand applaudit chaque soir.",
      "Gros succès hier soir à l'Eldorado pour la première représentation de Mars, Vénus et C°... la revue de MM. Hugues Delorme et Francis Gally débordante d'esprit, éclatante de gaieté, avec ses couplets lestement troussés et ses bataillons de jolies femmes, jouée à la perfection par une excellente troupe d'ensemble, à la tête de laquelle Dranem a trouvé des silhouettes d'une inénarrable bouffonnerie et menée à ravir par Adèle Verly, une commère gracieuse et bien disante, et par Denayrau, un compère plein d'entrain. Au total une longue suite de salles combles en perspective et un triomphe de plus à l'actif des deux spirituels auteurs."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Feuilleton",
    "title": "Un départ, une fuite",
    "summary": "Hanté par ses souffrances et la trahison de Renée, Jean trouve dans l'art une forme de revanche. Il décide de quitter la ville pour se reconstruire à la campagne, loin des tourments de son passé.",
    "paragraphs": [
      "Lorsque la lettre de Renée arriva rue Chaptal, Jean était à l'atelier. Il était là, sur ce divan où il s'était écroulé, un jour, en une crise de désespoir et de folie, pendant que son cœur s'ulcérait de colère à l'aspect de l'homme qui ne l'avait jeté dans la vie que pour l'y abandonner.",
      "Il était là, mais très calme aujourd'hui, très faible, soutenu cependant par cette impérieuse volonté de travail, qui avait été son salut peut-être. Déjà il se faisait apporter par Denise, sa chère petite sœur de charité, les grands cartons où dormaient les projets, les ébauches, les esquisses jetées en quelques touches d'aquarelle.",
      "Il voulait que son premier tableau soit un défi, une revanche. Prométhée, murmurait-il. Contre le Titan écroulé, ils s'unissent tous, ils s'acharnent tous, les heureux, les maîtres, les oppresseurs. Ils lui broient, ils lui déchirent le cœur. Mais le vaincu ne succombe pas, et le supplice dure toujours comme durera toujours la révolte.",
      "C'est encore Denise qui vint le réveiller : « Jeannot, une lettre ». C'était de Renée. Lorsqu'il l'eut lue, il la brûla dans le poêle. « La lettre est en cendres, murmura-t-il, et dans mon cœur il n'y a que des cendres déjà refroidies. » Il décida alors de s'en aller quelques semaines à la campagne, à Proveysieux, pour mûrir une idée et reprendre des forces."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Les Sports",
    "title": "Le Grand Prix de Paris et les courses cyclistes",
    "summary": "Le Grand Prix de Paris est confirmé pour septembre à Vincennes sous l'égide de l'U.V.F. Parallèlement, le champion Major Taylor confirme sa suprématie à Orléans face à Dini et Ferrari.",
    "paragraphs": [
      "Le Grand Prix de Paris est repêché : il se disputera en septembre prochain sur la piste municipale de Vincennes et sera organisé par l'Union vélocipédique de France. Tout est donc parfait : d'un côté, le vélodrome municipal est seul qualifié pour voir se disputer le Grand Prix municipal ; d'un autre, l'U.V.F. est la seule fédération qui puisse le mener à bien.",
      "Le nègre Major Taylor, l'invincible, vient encore de remporter une nouvelle victoire. À Orléans, au vélodrome de l'Orbellière, il se rencontrait avec les deux excellents coureurs italiens Dini et Ferrari. Pas un instant ces deux hommes n'ont existé devant le démarrage du cycliste noir.",
      "Depuis deux ans, on donne inutilement l'assaut, dans la course de Bordeaux-Paris, au record établi par Huret en 1899 sur bicyclette Clément, en 16 heures."
    ]
  }
];
