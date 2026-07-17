// Date: 1900-07-23
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-07-23 (Version Restaurée, 39 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Paris et l'Exposition",
    "summary": "Paris accueille le monde pour l'Exposition universelle. L'éditorialiste déplore la propension nationale à critiquer nos succès, tout en saluant les rares moments d'unité et de fierté collective observés.",
    "paragraphs": [
      "Paris est en ce moment l'hôte de l'Europe et du monde. Nous recevons les visiteurs qui s'y sont rendus, et nous leur offrons, avec le spectacle de l'Exposition qui leur laisse de nous une haute et favorable idée, le récit de nos discussions et de nos querelles. Nous sacrifions ainsi à une vieille tradition nationale qui veut que nous opposions au bien qu'on pense de nous le mal que nous en disons.",
      "Il convient donc de se réjouir quand on constate des exceptions à cette habitude fâcheuse et quand on voit les Français ne pas se refuser à eux-mêmes les éloges que tout le monde leur accorde."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Social",
    "title": "L'Assistance publique à Paris",
    "summary": "Histoire de l'Assistance publique à Paris, de ses origines médiévales à son organisation moderne sous le Consulat, témoignant du dévouement envers plus de 500 000 nécessiteux dans la capitale.",
    "paragraphs": [
      "C'est pourquoi nous devons une mention spéciale à l'ouvrage par lequel l'administration de l'Assistance publique fait connaître son histoire et son œuvre. On peut dire, en effet, que l'Assistance publique est la plus haute fonction d'un grand peuple et qu'elle sert de mesure à la conscience qu'il a de ses devoirs.",
      "À l'origine, en plein Moyen Âge, l'assistance n'est pas organisée. Elle se résume dans la maison de refuge, le palais de l'évêque. Bientôt pourtant, on reconnaît les inconvénients de cette trop large hospitalité et l'Hôtel-Dieu devient indépendant, se spécialisant peu à peu.",
      "De l'Hôtel-Dieu devait sortir l'hôpital ; de l'Hôpital général, l'hospice ; du Grand bureau des pauvres, le bureau de bienfaisance. Leur action, cependant, n'était pas efficace, car elle n'était point coordonnée.",
      "La Révolution voulut d'abord assurer cette unité, mais ce fut l'œuvre du Directoire et du Consulat de créer la commission et le conseil général des hospices qui ont posé les principes de l'administration actuelle.",
      "Quant aux résultats, l'Assistance publique de Paris étend son secours sur plus de 500 000 personnes. Elle consacre à cette œuvre immense 28 hôpitaux et hospices, ainsi qu'un nombre considérable de centres de secours et d'orphelinats."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame de la jalousie rue Saint-Maur",
    "summary": "Un drame passionnel a éclaté rue Saint-Maur : l'ouvrier électricien Alphonse Blanchet a grièvement blessé son épouse Julie après avoir découvert son infidélité. La victime a été hospitalisée dans un état désespéré.",
    "paragraphs": [
      "Au troisième étage d'une maison située 52, rue Saint-Maur, habitait depuis trois ans environ un ménage d'ouvriers, les époux Blanchet. Alphonse Blanchet, ouvrier électricien, était un travailleur rangé. Sa femme Julie, légère et coquette, lui créait des ennuis et il la soupçonnait de relations coupables avec un camarade de travail.",
      "Hier matin, ayant acquis la preuve de l'infidélité de sa femme, le mari entra dans une colère noire. De retour au domicile conjugal, alors que son épouse le narguait, il perdit la tête et, s'armant d'une bouteille et d'un fer à repasser, il la frappa violemment. La malheureuse fut transportée à l'hôpital Saint-Louis dans un état désespéré.",
      "Le magistrat a procédé à l'interrogatoire de Blanchet, qui a raconté la scène du drame et manifesté un profond repentir."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "Les événements de Chine",
    "summary": "Les nouvelles de Chine confirment la sécurité des légations au 18 juillet et l'évacuation de Tien-Tsin. L'opinion attend toutefois la confirmation officielle des ministres pour être pleinement rassurée.",
    "paragraphs": [
      "Les télégrammes reçus hier de Chine semblent confirmer un édit impérial annonçant que les légations européennes étaient saines et sauves le 18 juillet. Mentionnons encore une nouvelle importante : l'armée chinoise a été contrainte d'évacuer Tien-Tsin.",
      "Cependant, l'opinion ne sera tout à fait rassurée que lorsque les gouvernements auront reçu, au sujet des événements de Pékin, des télégrammes rédigés par leurs propres ministres.",
      "L'état-major de l'armée procède à l'organisation des troupes que les corps d'armée doivent fournir au corps expéditionnaire de Chine. Il a été décidé que chacun des régiments recevrait un drapeau."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique Nationale",
    "title": "Élection législative des Deux-Sèvres",
    "summary": "Dans la deuxième circonscription de Niort, le candidat radical-socialiste M. Gentil a été élu pour succéder au défunt M. de La Porte, recueillant une majorité substantielle lors de ce scrutin.",
    "paragraphs": [
      "Dans la deuxième circonscription de Niort, M. Gentil, candidat radical-socialiste, a été élu avec une majorité importante. Ce scrutin législatif était organisé afin de pourvoir au remplacement de M. de La Porte, récemment décédé."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Chroniques",
    "title": "Les manœuvres alpines",
    "summary": "Au cœur des Alpes, les groupes A et B sont entrés au contact. La brigade Bernat a atteint la vallée de l'Isère, mais l'épais brouillard entrave grandement la progression et la visibilité des troupes.",
    "paragraphs": [
      "Voici les deux groupes A et B en présence ; les armées sont au contact. La brigade Bernat, venant du Nord, a atteint la vallée de l'Isère. Les manœuvres seront rendues fort difficiles, non pas à cause de l'ennemi, mais surtout parce que les nuages enveloppent les monts et empêchent de distinguer quoi que ce soit."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Social",
    "title": "L'agitation au Creusot",
    "summary": "La tension persiste au Creusot malgré une nuit calme. Entre incendies criminels et menaces de grève générale, les autorités augmentent les effectifs militaires pour rétablir l'ordre dans la région industrielle.",
    "paragraphs": [
      "La nuit dernière a été calme au Creusot, bien qu'un incendie ait été allumé dans les bois de MM. Schneider et Cie. La tension entre les syndicats opposés reste forte, menant à des bagarres dans les quartiers excentriques.",
      "Le préfet de Saône-et-Loire a augmenté le nombre des troupes. Le bruit a couru que la fédération avait l'intention de décréter la grève générale de toute la région industrielle."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "La Fête des Collaborateurs",
    "summary": "Le ministre du Commerce et de l'Industrie a célébré hier le travail des ouvriers de l'Exposition. Une réception mémorable témoignant de l'union étroite entre les travailleurs et le gouvernement.",
    "paragraphs": [
      "La fête offerte par le ministre du Commerce et de l'Industrie en l'honneur des collaborateurs et des associations ouvrières de l'Exposition a eu lieu hier avec un immense succès. Cette cérémonie marque l'étroite union des travailleurs du peuple et des membres du gouvernement."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Arrivée du Président de la République",
    "summary": "Le Président Émile Loubet a visité l'Exposition universelle, accueilli avec ferveur. Une journée solennelle consacrée à l'honneur des ouvriers ayant œuvré pour cet événement.",
    "paragraphs": [
      "Le Président de la République, M. Émile Loubet, est arrivé à l'Exposition universelle à quatre heures, accompagné de MM. Millerand, Jean Dupuy, Alfred Picard, Lépine et des membres du commissariat général.",
      "Accueilli par une foule enthousiaste, le cortège a gagné la salle des Fêtes où la Marseillaise a été interprétée dans un climat solennel.",
      "La sortie s'est opérée lentement, marquant la fin d'une journée qui a été pour les ouvriers de l'Exposition une consécration de leur labeur."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Spectacles",
    "title": "Concert à l'Opéra",
    "summary": "Triomphe lyrique à l'Opéra avec le Guillaume Tell de Rossini. La soirée s'est prolongée par les ballets gracieux du Cid de Massenet, conclue par les accents patriotiques de la Marseillaise.",
    "paragraphs": [
      "Les artistes de l'Opéra ont interprété le chef-d'œuvre de Rossini, Guillaume Tell, obtenant un succès fou auprès du public.",
      "Le spectacle s'est poursuivi avec l'ouverture du ballet du Cid de Massenet, dansé par des ballerines de grâce, avant de s'achever sur une nouvelle interprétation de la Marseillaise."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Art et Culture",
    "title": "Une Fête orphéonique au Trocadéro",
    "summary": "Au palais du Trocadéro, deux mille orphéonistes venus de toute la France ont offert une brillante prestation sous la direction des maîtres Jules Dantié, Widor et Mulot, acclamés par un public conquis.",
    "paragraphs": [
      "Une grande fête orphéonique a eu lieu au palais du Trocadéro, réunissant deux mille orphéonistes venus de toutes les contrées de France.",
      "Sous la baguette de chefs éminents, tels que MM. Jules Dantié, Widor et Mulot, les chorales ont interprété avec une précision remarquable des œuvres de Mendelssohn, Gounod et Rouget de Lisle, recevant des ovations chaleureuses d'un auditoire passionné."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Économie",
    "title": "Statistiques des entrées à l'Exposition",
    "summary": "Le bilan des entrées à l'Exposition pour la journée de samedi s'établit à 55 965 visiteurs. L'annexe de Vincennes a accueilli 4 781 personnes, tandis que le cours des billets remonte à 10 centimes.",
    "paragraphs": [
      "Samedi, le chiffre total des entrées à l'Exposition s'est élevé à 55 965 visiteurs.",
      "L'annexe de Vincennes, de son côté, a reçu 4 781 visiteurs. Le cours officiel des billets d'entrée s'est raffermi et s'établit désormais à 10 centimes."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Ordre du jour de l'amiral Gervais",
    "summary": "Au moment de quitter ses hautes fonctions, le vice-amiral Gervais a tenu à adresser un vibrant hommage aux équipages des escadres du Nord et de la Méditerranée, saluant leur dévouement exemplaire au service de la patrie.",
    "paragraphs": [
      "Le vice-amiral Gervais a tenu à adresser un chaleureux et solennel remerciement aux équipages des escadres du Nord et de la Méditerranée, au moment précis où il prend congé de son commandement.",
      "Dans son ordre du jour, il a exprimé toute la fierté qu'il éprouve d'avoir dirigé ces hommes dévoués qui, par leur discipline et leur bravoure, servent avec honneur les intérêts de la France."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Mort d'un Contre-Amiral",
    "summary": "La Marine nationale est en deuil. M. le contre-amiral baron Ménard, président de la commission permanente de contrôle des troupes de la marine, s'est éteint hier à Montpellier, à l'âge de soixante ans.",
    "paragraphs": [
      "La Marine nationale vient de subir une perte douloureuse. M. le contre-amiral baron Ménard, qui occupait les fonctions de président de la commission permanente de contrôle des troupes de la marine, est décédé hier à Montpellier à l'âge de soixante ans."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Arrivée des Escadres à Brest",
    "summary": "Brest s'apprête à accueillir avec enthousiasme l'escadre de la Méditerranée, sous le commandement du vice-amiral Fournier, suivie prochainement par l'escadre du Nord. La cité bretonne se pare aux couleurs de la fête.",
    "paragraphs": [
      "L'escadre de la Méditerranée, placée sous le commandement du vice-amiral Fournier, fait son entrée ce lundi dans le port de Brest. L'escadre du Nord est attendue pour suivre ce mouvement sous peu.",
      "La cité bretonne s'apprête à réserver un accueil des plus enthousiastes à nos marins, les monuments étant déjà richement pavoisés en prévision des festivités populaires qui marqueront cet événement."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Visite du Général Brugère à Satory",
    "summary": "Le général Brugère, gouverneur militaire de Paris, a visité le concours international de tir de Satory, examinant les installations techniques et affirmant son soutien aux sociétés de tir nationales.",
    "paragraphs": [
      "Le général Brugère, gouverneur militaire de Paris, a effectué hier une visite au concours international de tir de Satory.",
      "Il a minutieusement examiné les services de pointage ainsi que les magasins de munitions, réitérant avec insistance son appui indéfectible à l'Union des Sociétés de tir."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Concours pour chefs de musique",
    "summary": "Le ministre de la Guerre a fixé les modalités du concours pour les chefs et sous-chefs de musique des régiments d'infanterie, avec une sélection finale prévue au Conservatoire en décembre.",
    "paragraphs": [
      "Le ministre de la Guerre a arrêté les modalités du concours pour les emplois de chef et sous-chef de musique dans les régiments d'infanterie.",
      "Les épreuves qualificatives se dérouleront d'abord au sein des corps d'armée respectifs, avant de se conclure par une sélection finale au Conservatoire de Paris, au cours du mois de décembre."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident de cheval du commandant Vautier",
    "summary": "Le commandant Vautier, sous-directeur de l'infanterie, a été victime d'une chute de cheval avenue Henri-Martin. L'officier est hors de danger selon les derniers examens médicaux.",
    "paragraphs": [
      "Le commandant Vautier, sous-directeur de l'infanterie au ministère de la Guerre, a été victime d'une chute de cheval alors qu'il circulait avenue Henri-Martin.",
      "Plus de peur que de mal pour l'officier ; les médecins, après examen, estiment désormais que tout danger est écarté."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Ordre du jour du colonel Bougon",
    "summary": "Lors de sa prise de commandement des escadrons de spahis, le colonel Bougon a prononcé une allocution rappelant à ses troupes l'impérieuse nécessité de la discipline et de la justice.",
    "paragraphs": [
      "Le colonel Bougon a pris officiellement le commandement des escadrons de spahis. Lors de la cérémonie, il a salué son nouveau régiment, insistant avec force sur l'importance capitale de la discipline et de la justice dans l'accomplissement du service."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Politique",
    "title": "Inauguration de la colonie scolaire à Châtillon-sur-Seine",
    "summary": "M. Leygues, ministre de l'Instruction publique, assisté de M. Brisson, a inauguré la colonie scolaire de Châtillon-sur-Seine lors d'une cérémonie placée sous le signe du patriotisme.",
    "paragraphs": [
      "Le ministre de l'Instruction publique, M. Leygues, accompagné de M. Brisson, a procédé à l'inauguration officielle de la colonie scolaire de Châtillon-sur-Seine.",
      "La journée a été rythmée par plusieurs discours empreints de ferveur patriotique ainsi que par la remise de diverses distinctions honorifiques."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Politique",
    "title": "M. Deschanel à Nantes",
    "summary": "M. Paul Deschanel a présidé avec éclat la distribution des prix des cours professionnels pour mécaniciens à Nantes, rappelant l'importance de l'instruction technique pour la grandeur de notre pays.",
    "paragraphs": [
      "M. Paul Deschanel a présidé, hier, la distribution des prix des cours professionnels destinés aux mécaniciens à Nantes.",
      "Dans son discours, il a souligné avec éloquence l'importance capitale de la formation technique et le rôle éminemment patriotique dévolu aux chauffeurs de locomotives dans le développement industriel de la France."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Politique",
    "title": "M. Decrais dans la Gironde",
    "summary": "Le ministre des Colonies, M. Decrais, a célébré à Andernos l'union des républicains et salué les travaux législatifs du gouvernement Waldeck-Rousseau devant une foule enthousiaste.",
    "paragraphs": [
      "Le ministre des Colonies, M. Decrais, a présidé diverses fêtes à Andernos, célébrant l'union étroite des républicains ainsi que les succès législatifs obtenus par le gouvernement Waldeck-Rousseau."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Transport",
    "title": "Le succès du Métropolitain",
    "summary": "Le nouveau Métropolitain connaît une fréquentation dépassant toutes les prévisions. Malgré une affluence record, le public apprécie la rapidité du service, malgré quelques critiques sur la billetterie.",
    "paragraphs": [
      "Le nouveau Métropolitain connaît une fréquentation massive, transportant quotidiennement le double des voyageurs initialement prévus. Le public apprécie hautement la rapidité du service, malgré quelques critiques soulevées par le système actuel de distribution des billets.",
      "Quelques incidents mineurs ont été signalés par la presse, lesquels ne présentent toutefois aucune gravité pour la sécurité des passagers."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un mystère à Bruges",
    "summary": "Un drame aussi tragique qu'énigmatique s'est déroulé à Bruges : le nommé Desmet a découvert son épouse asphyxiée dans des circonstances que le parquet tente actuellement d'élucider.",
    "paragraphs": [
      "Le nommé Desmet a découvert sa femme asphyxiée dans une armoire, dans des circonstances jugées des plus mystérieuses. Le parquet a immédiatement ouvert une enquête approfondie pour faire toute la lumière sur ce drame."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Étranger",
    "title": "Nouvelles internationales",
    "summary": "Le roi Alexandre de Serbie annonce son union prochaine avec Mme Draga Machin, tandis que le shah de Perse poursuit son périple diplomatique en Russie, à Tsarkoïé-Sélo.",
    "paragraphs": [
      "Le roi Alexandre de Serbie a officiellement annoncé ses fiançailles avec Mme Draga Machin.",
      "Le shah de Perse, après un séjour remarqué à Pétersbourg, est reparti pour Tsarkoïé-Sélo afin de poursuivre ses visites diplomatiques."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Historique",
    "title": "Centenaire de Desaix à Riom",
    "summary": "Riom a honoré avec solennité la mémoire du général Desaix, cent ans après sa disparition, au cours de cérémonies patriotiques marquées par un grand défilé des sociétés locales.",
    "paragraphs": [
      "La ville de Riom a célébré avec éclat le centenaire de la mort du général Desaix par des cérémonies patriotiques empreintes de ferveur et un grand défilé des sociétés locales."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Technique et Industrie",
    "title": "Histoire des machines textiles",
    "summary": "Récit des vicissitudes des inventeurs, de Jacquard à Philippe de Girard, qui ont bravé l'indifférence et l'exil pour révolutionner l'industrie textile, devenue aujourd'hui un pilier de l'économie française.",
    "paragraphs": [
      "La machine pour brocarts et soies est enfin trouvée, et l'on peut la voir fonctionner ; Jacquard la perfectionne tous les jours, la simplifie et achève finalement son triomphe.",
      "Pire encore est la destinée de Philippe de Girard qui, en 1810, inventait une machine à filer le lin. On en possédait bien déjà une, la Jenny, inventée par l'Anglais Hargreaves, un horloger, en 1767. Mais elle était trop faible pour fournir une grande quantité de fil.",
      "Orgueilleux, enivré, pensant avoir gagné le million promis par Napoléon Ier à celui qui lui présenterait un modèle pratique, Philippe de Girard part pour Paris, fait démarches sur démarches, frappe à toutes les portes. Peine perdue.",
      "Comme Jacquard, comme Lebon, comme Sauvage, il est repoussé, honni, presque méprisé, et c'est plein de rage et de douleur qu'il s'exile pour aller fonder en Pologne la première filature mécanique.",
      "Quelques années s'écoulent. L'Anglais Welsler réussit à passer en contrebande cinq dentelières mécaniques. Il installe un petit atelier à Saint-Pierre-lès-Calais et se met à fabriquer de la dentelle. Welsler fait fortune, agrandit peu à peu son usine et fabrique du tulle mécanique. En dix ans, il double ses revenus.",
      "De la dentelle à la broderie, le pas est vite franchi. La machine à broder est inventée par un mécanicien anonyme. Un ingénieur, Barthélemy Thimonnier d'Amplepuis, la perfectionne ; Jean Heilmann la rend vraiment pratique. Bref, en 1830, on voit apparaître les premières broderies mécaniques.",
      "Aujourd'hui, les industries textiles font vivre le tiers des ouvriers de France. Les procédés d'Oberkampf ont été étendus aux étoffes d'ameublement, aux soieries et aux tapis. Quant à la soierie, plus de deux cent mille ouvriers vivent du produit de cette industrie."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Société",
    "title": "La canicule et ses dangers",
    "summary": "Malgré un léger répit thermique, la canicule persiste à Paris. Les médecins rappellent les mesures de précaution essentielles pour se prémunir contre les risques d'insolation.",
    "paragraphs": [
      "La température est devenue plus supportable la matinée d'hier ; la chaleur a été moins accablante que les jours précédents. À midi, le thermomètre marquait 35 degrés centigrades.",
      "Les accidents ont été cependant encore nombreux. L'insolation a provoqué hier plusieurs décès, tant à Paris que dans la banlieue.",
      "Comment éviter l'insolation ? Un praticien consulté à ce sujet explique que les symptômes sont analogues à ceux de l'asphyxie. Pour prévenir le mal, il convient d'adopter des vêtements légers, de faire usage d'une ombrelle et surtout de proscrire les chapeaux hauts de forme.",
      "Si l'on est atteint, il faut s'arrêter, rentrer chez soi, se mettre à l'ombre et pratiquer des soins locaux ou appliquer de la glace sur la tête."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Victimes de la chaleur",
    "summary": "La liste des victimes de la canicule s'alourdit tragiquement à Paris et en province, où travailleurs et cultivateurs succombent quotidiennement à des congestions cérébrales et des insolations foudroyantes.",
    "paragraphs": [
      "La liste des victimes de la chaleur s'allonge chaque jour. M. Victor Perrin, 30 ans, ouvrier ébéniste, s'est affaissé rue du Faubourg-Saint-Antoine et est décédé à l'hôpital Saint-Antoine.",
      "M. Auguste Fontaine, 56 ans, livreur, a été frappé de congestion cérébrale sur son véhicule et a rendu le dernier soupir sur la chaussée.",
      "M. Émile Kufflo, 48 ans, commissionnaire, est mort à l'hôpital Andral après s'être effondré rue Oberkampf.",
      "À Aubervilliers, M. Charpiat, facteur, est mort d'insolation lors de sa tournée. À Levallois-Perret, M. Léopold Travezier, ouvrier gantier, est décédé après un malaise sur le pont de Biais.",
      "D'autres décès ont été enregistrés à Saint-Mandé, à Charenton, à Saint-Germain-en-Laye avec le jardinier Paul Detarue, à Mitry-Mory avec le cultivateur M. Vasseur, et à Chateloup avec l'ouvrier Alphonse Soyer."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Justice",
    "title": "Le procès Max Régis",
    "summary": "L'ouverture du procès de Max Régis, maire d'Alger, se tient devant les assises du Var, où il doit répondre d'accusations de rébellion et de tentative d'assassinat suite aux troubles de la villa Bon-Accueil.",
    "paragraphs": [
      "C'est aujourd'hui que s'ouvrent, devant les assises du Var, les débats de l'affaire Max Régis. Le maire d'Alger est poursuivi pour rébellion, provocation à des attroupements et tentative d'assassinat.",
      "Les faits se sont déroulés à la villa Bon-Accueil à Mustapha, où s'imprimaient les journaux 'L'Antijuif' et 'L'Express'. Les accusés s'y étaient retranchés, menaçant les forces de l'ordre de coups de feu.",
      "Le procès a été renvoyé de l'Algérie vers le Var pour cause de suspicion légitime."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie à la ferme Darras",
    "summary": "Un incendie violent a ravagé la vacherie de M. Darras, route d'Orléans, causant la mort de cinq chevaux et blessant trois personnes, dont un pompier, lors des opérations de secours.",
    "paragraphs": [
      "Un violent incendie a éclaté route d'Orléans, dans la vacherie appartenant à M. Darras. Le feu, attisé par un vent violent, a détruit les bâtiments et causé la mort de cinq chevaux sur neuf.",
      "Trois personnes ont été blessées lors des opérations de sauvetage : le maçon Jules-Baptiste Bry, le caporal des pompiers Boulet, et un troisième individu non identifié."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents divers et crimes",
    "summary": "Chronique noire : un soldat foudroyé à Nice, deux agressions violentes rue de Barbaneigre et boulevard de la Villette, ainsi que l'arrestation mouvementée d'un forcené par les gardiens de la paix.",
    "paragraphs": [
      "À Nice, un jeune soldat a été foudroyé en montant la garde, la foudre ayant été attirée par sa baïonnette.",
      "M. René Costre a été agressé et dévalisé par trois individus dans un hangar abandonné, rue de Barbaneigre.",
      "Un fou furieux, Gaétan Casada, marchand de pommes de terre, a été arrêté après avoir agressé des gardiens de la paix boulevard de la Villette.",
      "M. Francis Wincarter a été poignardé lors d'une rixe boulevard de la Villette."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Économie",
    "title": "Marché des céréales et farines",
    "summary": "Le marché des céréales subit une tendance baissière marquée par l'abondance des stocks et les prévisions encourageantes des récoltes. Le blé et les farines suivent cette orientation.",
    "paragraphs": [
      "Le marché a connu une tendance baissière la semaine dernière, avec une baisse constatée de 1 franc sur le prix de clôture. Ce mouvement a été provoqué par l'augmentation continuelle du stock et les meilleures nouvelles des récoltes.",
      "On a terminé la semaine en cotant les farines fleur de Paris, livraisons d'août à 26 fr. 25, et pour les mois de novembre, à 28 fr. les 100 kilos.",
      "Le marché du blé a suivi le mouvement, les causes influant sur les farines ayant produit les mêmes effets sur le prix du blé."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Économie",
    "title": "Huiles, Alcools et Sucres",
    "summary": "Bilan économique : calme plat pour les huiles et les alcools, tandis que le secteur des sucres manifeste une activité soutenue avec une hausse sensible des prix sur le courant.",
    "paragraphs": [
      "Huiles : Les affaires n'ont pas été très actives et les prix ont fléchi sur toutes les époques de livraison, terminant entre 62 fr. 75 et 66 fr. selon l'échéance.",
      "Alcools : Le marché des trois-six a été assez animé avec des prix peu variés, bien que la tendance soit généralement faible sur le livrable éloigné.",
      "Sucres : Les affaires ont été actives et les prix ont haussé sensiblement sur le courant. On a terminé en cotant le sucre blanc n°3 entre 31 fr. et 32 fr. 29 les 100 kilos."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Agriculture",
    "title": "État de la récolte de houblons",
    "summary": "La récolte de houblon s'annonce tardive et déficitaire. L'épuisement des stocks de 1899 et le retard de développement des plants laissent présager une hausse prochaine des cours.",
    "paragraphs": [
      "L'attention se concentre sur l'état de la récolte prochaine. Bien que le temps soit favorable et que le jeune plant soit sain, le retard dans le développement de la plante est accentué.",
      "On peut affirmer que le début de la récolte subira un fort retard et que le rendement sera sensiblement inférieur à celui de l'an dernier. La combinaison de l'épuisement des stocks de 1899 et des besoins élevés laisse présager des prix supérieurs à ceux de l'an dernier."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Chroniques",
    "title": "Pourquoi est basée la valeur d'un objet",
    "summary": "Une réflexion sur l'économie politique illustrée par l'exemple d'une caravane dans le désert, démontrant comment les circonstances extrêmes dictent la valeur relative d'un objet vital pour la survie.",
    "paragraphs": [
      "Une caravane était perdue dans le désert, assoiffée. Un riche négociant a racheté à prix d'or un litre d'eau à un Arabe prévoyant, sauvant ainsi sa vie.",
      "C'est la démonstration que la valeur d'un objet est relative aux circonstances extrêmes dans lesquelles il devient indispensable à la survie."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Voix d'outre-tombe - XII",
    "summary": "Gabrielle retrouve Gustave, l'ancien valet du duc d'Arville, qui confesse sa culpabilité et son désir de réparer ses torts en disculpant Michel Gérard.",
    "paragraphs": [
      "Gabrielle, bouleversée, retrouve dans le cabinet de l'avocat l'ancien valet de chambre du duc d'Arville, Gustave.",
      "Gustave avoue sa culpabilité dans le procès précédent, expliquant avoir agi par ressentiment envers le filleul du duc, Michel Gérard. Il est prêt à signer une déclaration complète pour réparer son action et aider à disculper Gérard."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Causerie Financière",
    "title": "La Banque d'Angleterre et l'impact sur le marché",
    "summary": "L'augmentation du taux d'escompte de la Banque d'Angleterre à 4 % provoque quelques prises de bénéfices à Paris, mais le marché français conserve une solide résilience grâce à son encaisse or.",
    "paragraphs": [
      "La décision de la Banque d'Angleterre de porter son taux d'escompte de 3 à 4 % a influé sur le marché parisien, incitant les spéculateurs à réaliser leurs titres.",
      "Toutefois, la situation de la place financière française reste solide, avec une encaisse or abondante. Les rentes et les valeurs de crédit, bien qu'ayant subi un léger recul, montrent des signes de résilience."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Chemins de Fer",
    "title": "Développements de la Compagnie d'Orléans",
    "summary": "La Compagnie d'Orléans inaugure dès le lundi 23 de nouveaux services à la gare du quai d'Orsay, incluant la gestion des bagages et l'accueil des trains de grand parcours et de luxe.",
    "paragraphs": [
      "La Compagnie d'Orléans continue de développer ses services dans sa nouvelle gare du quai d'Orsay.",
      "À dater du lundi 23, la gare inaugurera le service des bagages et accueillera un certain nombre de nouveaux trains de grand parcours, incluant les rapides de jour et de nuit ainsi que les trains de luxe."
    ]
  }
];
