// Date: 1899-12-02
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-12-02 (Version Restaurée, 35 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Littérature",
    "title": "Deux Passions, nouveau roman de Charles Mérouvel",
    "summary": "Le Petit Parisien annonce la publication prochaine de \"Deux Passions\", roman inédit de Charles Mérouvel, une œuvre dramatique opposant deux passions autour d'une figure féminine pure.",
    "paragraphs": [
      "Le Petit Parisien commencera prochainement la publication de Deux Passions, un roman inédit de Charles Mérouvel.",
      "C'est une histoire poignante de la vie réelle mettant en scène deux passions, l'une noble et l'autre malsaine, autour d'une femme pure, aboutissant à un intérêt dramatique grandiose."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Économie",
    "title": "Le port de Paris",
    "summary": "Le port d'Ivry, inauguré il y a un mois, consacre Paris comme centre névralgique du commerce français, grâce à une jonction efficace entre les réseaux ferroviaires et les voies navigables.",
    "paragraphs": [
      "Paris est le port le plus considérable de France pour les mouvements de marchandises. Il y a un mois, le port d'Ivry a été inauguré, marquant une étape importante dans l'aménagement des voies navigables et ferrées.",
      "Cette infrastructure permet désormais un raccordement direct entre le réseau ferré d'Orléans et les voies navigables, répondant à une nécessité économique majeure pour la capitale.",
      "Le trafic fluvial de Paris a connu une progression constante, atteignant des volumes impressionnants, bien supérieurs à ceux des ports maritimes français comme Marseille, grâce à son rôle de centre de consommation et son réseau de communication étendu vers l'Europe.",
      "L'outillage moderne du port de Paris, incluant des grues à vapeur et des ports spécialisés pour les combustibles et matériaux, assure un dynamisme commercial croissant."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'Affaire de l'Hôpital Beaujon",
    "summary": "Une enquête est ouverte à l'hôpital Beaujon suite à la découverte de flacons d'acide azotique, soupçonnés d'avoir servi à altérer des copies lors d'un récent concours médical.",
    "paragraphs": [
      "Une enquête est en cours à l'hôpital Beaujon suite à des irrégularités lors d'un concours médical. La commission et les autorités cherchent à identifier l'auteur des actes malveillants ayant pu compromettre les épreuves.",
      "Des expériences ont été menées pour vérifier si un individu pouvait s'introduire dans l'établissement ou en sortir par les grilles, et des bouteilles contenant de l'acide azotique ont été découvertes sous scellés, suggérant une tentative d'altération des copies."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des Ministres",
    "summary": "Sous la présidence de M. Loubet, le Conseil des ministres a validé le dépôt d'un projet de loi sur les pensions militaires indigènes et entériné la nomination du colonel de Salier au grade de général.",
    "paragraphs": [
      "Les ministres se sont réunis hier sous la présidence de M. Loubet. Le Conseil a abordé divers budgets et a autorisé le ministre de la Guerre à déposer un projet de loi sur les pensions des militaires indigènes.",
      "Le colonel de Salier a été nommé au grade de général."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Social",
    "title": "Les indemnités pendant l'Exposition",
    "summary": "M. Millerand, ministre du Commerce, étend aux agents de l'État résidant en banlieue le bénéfice de l'indemnité de 10% allouée durant l'Exposition universelle.",
    "paragraphs": [
      "M. Millerand, ministre du Commerce, a confirmé que l'indemnité de 10% allouée pendant la durée de l'Exposition aux agents de l'État domiciliés à Paris sera également versée aux employés résidant dans la banlieue."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique étrangère",
    "title": "L'escadre française en Orient",
    "summary": "L'amiral Fournier achève son périple diplomatique dans le Levant. Cette mission, dirigée par M. Constans, a permis de renforcer les liens avec Constantinople par des échanges de distinctions honorifiques.",
    "paragraphs": [
      "L'amiral Fournier a terminé sa visite officielle auprès du Sultan, à Constantinople, couronnant ainsi un voyage marqué par les ovations enthousiastes des populations dans les différents ports du Levant.",
      "Cette mission diplomatique, habilement préparée par M. Constans, raffermit l'influence française en Orient et a été ponctuée par des échanges de décorations honorifiques entre les dignitaires français et le Sultan."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un crime au Havre",
    "summary": "Un drame passionnel a ensanglanté la ville du Havre. Joseph Mouton a fait feu sur sa maîtresse, Suzanne Turpin, après une dispute violente. Il a été arrêté par les autorités.",
    "paragraphs": [
      "Un grave drame conjugal s'est déroulé au Havre, où le nommé Joseph Mouton a fait usage d'une arme à feu sur sa maîtresse, la nommée Suzanne Turpin, à la suite d'une altercation d'une extrême violence.",
      "Le meurtrier a été promptement arrêté par la gendarmerie après une lutte acharnée, tandis que la malheureuse victime, grièvement blessée, a été transportée en urgence vers l'hôpital."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une tragique affaire à Bordeaux",
    "summary": "La mort suspecte de Mme Bobin, placée à tort en quarantaine pour fièvre jaune, provoque une vive indignation. L'autopsie a révélé une erreur de diagnostic tragique au lazaret de Trompeloup.",
    "paragraphs": [
      "Une plainte formelle a été déposée concernant le décès suspect de Mme Bobin au lazaret de Trompeloup. Après avoir été placée en quarantaine sur la foi d'un diagnostic erroné de fièvre jaune, la malheureuse femme est décédée dans des conditions atroces.",
      "L'autopsie réalisée ultérieurement a démontré qu'elle n'était aucunement atteinte de maladie contagieuse, provoquant une vive émotion dans toute la ville de Bordeaux."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Social",
    "title": "Enquête sur le Couvent du Bon-Pasteur",
    "summary": "Le ministre de la Justice ordonne une enquête au couvent du Bon-Pasteur à Angers suite aux dénonciations du député Fournière concernant des traitements inhumains subis par les pensionnaires.",
    "paragraphs": [
      "La justice mène actuellement une enquête approfondie sur des allégations de mauvais traitements signalés au sein du couvent du Bon-Pasteur, suite aux révélations fracassantes du député Fournière.",
      "Plusieurs jeunes filles ont été entendues, confirmant les sévices endurés. Le ministre de la Justice a sollicité des renseignements précis sur le fonctionnement de la maison-mère située à Angers."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Reportage",
    "title": "L'Algérie à l'Exposition",
    "summary": "Le pavillon algérien au Trocadéro célèbre la prospérité et le développement de la colonie, exposant avec succès les richesses artisanales et agricoles de la France d'outre-mer.",
    "paragraphs": [
      "Le pavillon de l'Algérie, fièrement érigé au Trocadéro, témoigne des progrès constants de la civilisation et du travail dans cette vaste région. Loin des conflits du passé, l'Algérie moderne y présente ses plus belles richesses agricoles et artisanales.",
      "L'exposition sera complète, incluant des sections dédiées aux arts anciens et modernes, ainsi que des démonstrations pédagogiques illustrant le développement du pays sous la sage administration française."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Actualité internationale",
    "title": "La guerre du Transvaal",
    "summary": "Malgré l'absence de dépêches majeures hier, la tension demeure vive autour de Ladysmith. Le général Methuen réaffirme sa confiance envers ses troupes tandis que les combats se poursuivent près de Kimberley.",
    "paragraphs": [
      "Aucune dépêche majeure n'est parvenue hier, mais la situation reste tendue autour de Ladysmith. Le général Methuen a rendu hommage au courage et à la tactique des Boers, tout en réaffirmant sa confiance absolue en ses troupes.",
      "À Londres, les rapports indiquent que les forces boers se concentrent vers la Tugela, tandis que les combats se poursuivent avec intensité autour de Kimberley."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "La situation à Kimberley et Mafeking",
    "summary": "La situation demeure critique à Kimberley sous les obus, tandis qu'à Mafeking, la famine et la maladie menacent la garnison bien avant tout espoir de secours extérieur.",
    "paragraphs": [
      "À Alexanderfontein, on croit qu'ils appartiennent au commandant orangiste Kews. L'approche de la colonne de secours a ranimé le courage de la garnison.",
      "D'après des informations de source indigène, un groupe de Boers est signalé à Warrenton. On craint que ces deux camps ne constituent la base des opérations des Orangistes sur la frontière.",
      "Selon des évaluations officielles, les Boers ont lancé au moins mille obus depuis le début du bombardement de Kimberley, contre six cents environ lancés par les Anglais.",
      "Les obus boers étant tombés pour la plupart sur de la terre molle, leur effet explosif s'en est trouvé neutralisé. Tous les blessés se portent aussi bien que possible.",
      "À 4h30, un train blindé, parti en direction de Dronfield, est revenu sans avoir été touché.",
      "Quant à la situation à Mafeking, le correspondant militaire de la Westminster Gazette estime qu'elle ne peut guère être secourue avant Noël, craignant une chute imminente causée non par l'artillerie boer, mais par la maladie et la famine."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le sort des prisonniers Boers",
    "summary": "Des témoignages accablants dénoncent les traitements inhumains infligés aux prisonniers boers, tant à bord des navires-prisons de la Pénélope qu'après les violences survenues à Elandslaagte.",
    "paragraphs": [
      "Le Journal d'Arnheim apprend, par une correspondance particulière de Capetown, que les prisonniers boers détenus à bord de la Pénélope, dans Simonsbay, sont traités avec une grande dureté.",
      "Il leur est interdit de quitter le vaisseau ; ils vivent dans une misère profonde, souffrant de privations constantes. La ration se compose de trop peu de pain, de mauvais café, de pommes de terre immangeables, d'un minimum de viande et d'une maigre portion de légumes.",
      "À Elandslaagte, les prisonniers furent dépouillés de leur argent ; les morts et les blessés furent eux aussi dévalisés. Après avoir entièrement déshabillé un soldat boer, les Anglais lui crièrent : « Va-t-en maintenant », pour ensuite l'abattre à coups de fusil alors qu'il s'enfuyait.",
      "À Ladysmith, les prisonniers furent d'abord incarcérés comme des criminels, puis transportés à Durban et internés à bord d'un navire dans les compartiments ayant servi au transport des chevaux. Un officier anglais, ayant visité les lieux, s'exclama : « C'est donc un vaisseau négrier dans lequel je suis ! »"
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Chronique Parlementaire",
    "title": "Chambre des Députés : Le budget de l'Intérieur",
    "summary": "La Chambre a rejeté la proposition de suppression des sous-préfets, préférant renvoyer la question à une réforme administrative globale, lors d'une séance présidée par M. Paul Deschanel.",
    "paragraphs": [
      "Séance du vendredi 1er décembre : La Chambre a discuté le budget du ministre de l'Intérieur. M. Zevaès, député socialiste, a déposé un amendement tendant à la suppression radicale des sous-préfets. La discussion ne fut pas vive, M. Waldeck-Rousseau, président du Conseil, expliquant que cette question ne pouvait être résolue qu'après une réforme administrative globale.",
      "Par deux votes successifs, avec une majorité de plus de 150 voix, la Chambre a renvoyé la proposition de suppression des sous-préfets à la commission de décentralisation.",
      "La séance, ouverte à deux heures dix sous la présidence de M. Paul Deschanel, a également procédé à la nomination des membres de la commission chargée de répartir les subventions pour les sapeurs-pompiers."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "Hommage à M. Henri Brisson",
    "summary": "Lors d'un banquet au Grand-Hôtel, M. Henri Brisson a reçu une ovation marquée de la part de six cents convives, soulignant la reconnaissance du monde républicain pour son intégrité politique.",
    "paragraphs": [
      "Il s'est passé avant-hier, au Grand-Hôtel, lors du banquet du comité républicain du commerce et de l'industrie, un incident significatif. Après le discours de M. Millerand, M. Henri Brisson s'est levé et les six cent vingt convives lui ont adressé une longue ovation.",
      "Malgré les épreuves politiques, M. Brisson demeure une figure hautement respectée, dont la présence suscite spontanément l'hommage de tous ceux qui reconnaissent son engagement constant en faveur de la justice et de la vérité."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Social",
    "title": "Inauguration de la crèche municipale Bonne-Nouvelle",
    "summary": "Mme Loubet, accompagnée de son fils Émile, a présidé hier l'inauguration de la nouvelle crèche municipale rue Saint-Denis. Elle a honoré l'œuvre d'un don de 200 francs lors de cette cérémonie empreinte de bienfaisance.",
    "paragraphs": [
      "La crèche municipale Bonne-Nouvelle a inauguré hier après-midi son nouveau local de la rue Saint-Denis. Mme Loubet a présidé cette cérémonie en présence des quarante bébés indigents recueillis par l'établissement.",
      "Accompagnée de son fils Émile, Mme Loubet a visité les installations avec une attention particulière. Une médaille commémorative en argent a été remise au fils du Président de la République par les dames patronnesses. Mme Loubet a laissé une somme de 200 francs à la disposition du comité de l'œuvre."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Justice",
    "title": "La Haute Cour : Dix-neuvième audience",
    "summary": "La Haute Cour a clos le débat sur l'audition de neuf témoins, rejetant leur intervention. L'audience s'est poursuivie avec le général Roget, interrogé sur les événements du 23 février et l'arrestation de M. Déroulède.",
    "paragraphs": [
      "La Haute Cour a statué sur la demande du procureur général concernant l'abandon de l'audition de neuf témoins. Malgré les protestations vives de la défense, la Cour a rendu un arrêt déclarant que ces témoins ne seront pas entendus, estimant que leurs dépositions prolongeraient les débats sans apporter de certitude nouvelle à l'instruction.",
      "À la suite de cette décision, les avocats de la défense ont tenté de se retirer en corps, provoquant une vive agitation, avant que le calme ne revienne pour permettre la reprise de l'audience. Le général Roget a alors été entendu, fournissant des précisions sur les événements du 23 février et l'arrestation de M. Déroulède."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Conseil Municipal",
    "title": "Séance du Conseil municipal de Paris",
    "summary": "Sous la présidence de M. Louis Lucipia, le Conseil municipal a approuvé l'étude d'un tramway électrique souterrain et débattu d'un projet d'assistance aux instituteurs atteints de maladies chroniques.",
    "paragraphs": [
      "Le conseil s'est réuni en séance privée puis publique sous la présidence de M. Louis Lucipia. Il a émis un avis favorable à la mise à l'enquête d'un tramway électrique souterrain, projet destiné à améliorer la circulation parisienne.",
      "Un projet a également été présenté pour améliorer la situation des instituteurs atteints de maladies chroniques non contagieuses, en cherchant à leur assurer un reclassement dans des fonctions administratives rémunératrices au sein des bureaux municipaux."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Éditorial",
    "title": "Le discours de M. Chamberlain",
    "summary": "Le discours de M. Chamberlain, accueilli avec scepticisme, est perçu comme une suite de chimères. Ses propos sur la crise sud-africaine sont jugés si intempérants que la presse britannique elle-même s'en distancie.",
    "paragraphs": [
      "Le discours de M. Chamberlain, perçu comme une accumulation de rêveries creuses, a suscité une ironie générale. L'orateur de l'Angleterre semble vouloir occulter la complexité des questions sud-africaines par des sorties intempérantes que la presse anglaise elle-même qualifie désormais d'exagérées et peu diplomatiques."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Politique Internationale",
    "title": "Les réactions à la politique de M. Chamberlain",
    "summary": "Les menaces de M. Chamberlain envers ses voisins provoquent une réprobation générale en Europe. La presse internationale, du Royaume-Uni à l'Allemagne, rejette ses projets d'alliances comme étant purement chimériques.",
    "paragraphs": [
      "Les menaces proférées par M. Chamberlain à l'égard de ses voisins ont provoqué une protestation formelle de la part de l'attaché naval français, indigné par de tels procédés.",
      "Le journal Westminster Gazette exprime ses sympathies quant aux attaques subies par la reine, mais désapprouve formellement les menaces formulées par un homme d'État envers les puissances voisines.",
      "La presse allemande, via le Tageblatt et la Gazette de Voss, considère les menaces de M. Chamberlain comme déplacées et qualifie son projet d'alliance avec l'Allemagne et l'Amérique de rêve fantastique sans aucun fondement réel.",
      "La presse belge, par la voix du Patriote, souligne que les menaces de M. Chamberlain ne sont aucunement cautionnées par le gouvernement allemand."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Dépêches",
    "title": "Discours de Sir Charles Beresford et Agitation en Espagne",
    "summary": "Sir Charles Beresford exprime l'estime de l'Angleterre pour la marine française. En Espagne, des tensions anticléricales éclatent lors d'une procession religieuse à Santiponce.",
    "paragraphs": [
      "Sir Charles Beresford, s'exprimant lors d'un banquet nautique, a déclaré que le peuple anglais éprouve le plus grand respect pour la marine française, et ce, malgré les attaques virulentes de la presse.",
      "À Séville, lors de la procession du Rosaire à Santiponce, des groupes hostiles ont crié « À bas les moines ! » et lapidé les religieux, provoquant des blessures chez plusieurs participants."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Santé Publique",
    "title": "Cas de peste à Oporto",
    "summary": "La situation sanitaire à Oporto demeure préoccupante avec l'enregistrement de nouveaux cas de peste et un décès supplémentaire. Quarante-six malades sont actuellement sous traitement.",
    "paragraphs": [
      "On a enregistré deux nouveaux cas de peste ainsi qu'un décès à Oporto. Quarante-six pestiférés sont actuellement placés sous traitement médical."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Réformes téléphoniques et activités ministérielles",
    "summary": "M. de Lanessan se déplace à Lyon pour les sociétés de secours mutuels, tandis que M. Mougeot annonce un vaste plan de réforme du service téléphonique parisien devant aboutir d'ici trois ans.",
    "paragraphs": [
      "M. de Lanessan, ministre de la Marine, se rend à Lyon afin de présider la fête annuelle des sociétés de secours mutuels.",
      "M. Mougeot prépare activement des réformes du service des téléphones, visant à réduire les tarifs et les délais d'attente à Paris d'ici un délai de trois ans."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Condamnation à mort à Lyon",
    "summary": "La cour d'assises du Rhône a rendu son verdict dans le procès des agresseurs de Mme veuve Poucherann. Le chef de la bande, Noutruier, est condamné à la peine capitale.",
    "paragraphs": [
      "La cour d'assises du Rhône a rendu son arrêt dans l'affaire des bandits accusés d'avoir assommé Mme veuve Poucherann à Lyon.",
      "La Cour a condamné à la peine de mort le chef de la bande, Noutruier, tandis que ses complices ont été condamnés à des peines de travaux forcés et de réclusion."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation des bandits masqués à Montreuil",
    "summary": "La police de Montreuil a démantelé la bande du bandit Courtot après une violente interpellation rue de l'Hôtel Pelleport. Deux agents ont été grièvement blessés lors de l'arrestation des malfaiteurs.",
    "paragraphs": [
      "Une lutte énergique a opposé la police de Montreuil aux lieutenants du bandit Courtot, dont Georges Lemansois et Joseph Prascoli, dit « Croque-Mort ».",
      "Le commissaire de police de Montreuil-sous-Bois a démantelé la bande après avoir arrêté le receleur Jules Lemansois. Lors de l'arrestation des complices rue de l'Hôtel Pelleport, une lutte terrible a éclaté, blessant grièvement les agents Broudin et Péchard."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Social",
    "title": "Congrès du personnel civil des établissements militaires",
    "summary": "Le sixième congrès des ouvriers civils des établissements militaires a clôturé ses travaux. Une députation a été envoyée à M. Pelletan pour réclamer le droit aux rapports disciplinaires pour les ouvriers.",
    "paragraphs": [
      "Le sixième congrès du personnel civil des établissements militaires a clôturé ses travaux par l'envoi d'une députation auprès de M. Pelletan. Les congressistes ont adopté un vœu formel demandant que les ouvriers sanctionnés puissent avoir pleine connaissance des rapports administratifs dressés à leur encontre."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Éducation",
    "title": "Incidents à l'École de droit",
    "summary": "Suite aux récents troubles provoqués par des étudiants à l'École de droit, l'administration durcit le règlement intérieur, imposant une surveillance accrue des accès sous peine de sanctions disciplinaires.",
    "paragraphs": [
      "Suite aux troubles causés par des étudiants au sein de l'établissement, l'administration de l'École de droit a instauré des mesures de surveillance rigoureuses concernant l'accès aux locaux et le maintien de l'ordre, sous peine de poursuites disciplinaires immédiates."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le drame de Passy et l'affaire Rossignol",
    "summary": "Le drame de Passy est élucidé : l'agresseur Renault avait piégé Mme Irma Gagnon. Par ailleurs, Georges Guillaume a été arrêté à Asnières pour le meurtre de Rossignol, un crime qu'il dit passionnel.",
    "paragraphs": [
      "Le mystère entourant le drame de Passy est enfin élucidé : l'agresseur, le nommé Renault, avait attiré la femme d'un boucher, Mme Irma Gagnon, dans un guet-apens sous un faux prétexte.",
      "Par ailleurs, dans une affaire antérieure, Georges Guillaume a été arrêté à Asnières pour le meurtre de Rossignol, crime qu'il prétend avoir commis par jalousie."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Sports",
    "title": "Résultats des courses hippiques",
    "summary": "La réunion hippique d'Enghien a attiré une foule nombreuse. Les prix de la Lys, de la Sambise et de l'Amiénois ont consacré la victoire des favoris devant un public attentif et passionné.",
    "paragraphs": [
      "La réunion à Enghien a été intéressante, malgré la fatigue apparente des chevaux. Les prix de la Lys, de la Sambise et de l'Amiénois ont été remportés par différents favoris sous l'œil attentif des parieurs."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Sport",
    "title": "Actualités sportives",
    "summary": "La saison sportive s'intensifie. En préparation des échéances à venir, le Racing-Club disputera un entraînement demain au vélodrome du parc des Princes face à l'équipe de l'U.A. 1.",
    "paragraphs": [
      "La lutte sera acharnée. En attendant, le Racing-Club s'entraînera demain contre l'U.A. 1. au vélodrome du parc des Princes."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Patriotisme",
    "title": "Patriotisme d'escrimeur",
    "summary": "Le maître d'armes Kirchhoffer, invité à se produire à Berlin devant l'empereur, a décliné l'offre par patriotisme, invoquant sa fierté d'être à la fois Français, Alsacien et maître d'armes français.",
    "paragraphs": [
      "Kirchhoffer, le maître d'armes bien connu, invité à aller tirer à Berlin devant l'empereur, vient de refuser, prétextant sa double qualité de Français alsacien et de maître d'armes français."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Le théâtre de la République",
    "summary": "Le théâtre de la République affiche « La Honte », drame classique de MM. Mary et Grisier, toujours très apprécié pour ses péripéties et la scène célèbre du tribunal, portée par une excellente interprétation.",
    "paragraphs": [
      "Le théâtre de la République vient de prendre à son répertoire La Honte, devenu la ressource des directeurs dans l'embarras. Le drame aujourd'hui classique de MM. J. Mary et G. Grisier n'a pas à être raconté. Tout le monde en connaît les émouvantes péripéties ; la scène du tribunal est restée légendaire. En passant de l'Ambigu à la rue de Malte, il n'a rien perdu de son intérêt et il n'est pas douteux qu'il pourra y fournir une nouvelle série de fructueuses représentations.",
      "L'interprétation est, comme toujours, excellente dans son ensemble. MM. Vayre, Barnoll, Garaud, etc., ainsi que Mmes E. Villars, Régnier, Suzanne Demay, Praxine, etc., ont été longuement applaudis."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Concerts et Divertissements",
    "title": "La scène parisienne",
    "summary": "Balthy excelle dans le rôle du soldat Fouillaupe à l'Olympia, où triomphe également Loie Fuller. Au Nouveau-Cirque, la pantomime nautique « Le Fond de l'eau » rencontre un immense succès auprès du public.",
    "paragraphs": [
      "Voilà Balthy, cette extraordinaire artiste, qui, non contente d'avoir triomphé dans la Prise de Balthylle, se plaît aujourd'hui à étonner tout le monde en créant d'une manière saisissante le rôle du soldat Fouillaupe dans À la Chambrée. Elle est curieuse et étrange dans le rôle de ce troubadour ahuri. Fordyce, auteur et interprète, a joué avec brio et naturel le rôle fort divertissant du caporal Bidonneau.",
      "Une salle entière debout acclamait hier à l'Olympia la Loie Fuller. Les nouvelles créations fantastiques, inimaginables et miraculeuses qu'il nous a été donné d'applaudir mettent à l'apogée la gloire universelle de cette extraordinaire artiste. La Loie Fuller a consenti à paraître en matinée, ce qui sera, dès demain dimanche, un régal pour les familles.",
      "La pantomime nautique à grand spectacle, Le Fond de l'eau, continue sa brillante carrière au Nouveau-Cirque. Les pêcheurs de perles, qui restent quatre minutes dans l'eau sous les yeux des spectateurs, ont, naturellement, une bonne part de ce succès sans précédent."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Marché des vins et eaux-de-vie",
    "summary": "Le marché viticole demeure stable : prix fermes pour les vins alcoolisés dans l'Hérault et l'Aude, demande active pour les crus du Gard, et reprise des expéditions de cognacs en Charente.",
    "paragraphs": [
      "Dans l'Hérault, les vins bien constitués et riches en alcool maintiennent leurs prix de 1,80 à 2 fr. le degré par hectolitre. Les arantons faits en blanc sont toujours très recherchés et on les paie de 1,90 à 2 fr. le degré.",
      "Dans le Gard, les bons vins sont recherchés par le commerce et on les paie jusqu'à 11 fr., mais les qualités plus ou moins défectueuses se cèdent de 7 à 10 fr. l'hectolitre.",
      "Dans l'Aude, les affaires sont calmes. Les prix ne varient pas et on paie toujours de 1,90 à 2 fr. le degré.",
      "Dans les Charentes, on signale un certain mouvement d'expéditions à Cognac. En Armagnac, il s'est traité encore pas mal d'affaires de 500 à 600 fr. la pièce d'origine de 600 litres."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Marché aux Veaux",
    "title": "Vente à La Villette",
    "summary": "Le marché de La Villette enregistre une activité soutenue. Les cours demeurent fermes pour les veaux de choix issus des départements ceinturant Paris, avec des prix oscillant entre 1 fr. et 1 fr. 20.",
    "paragraphs": [
      "Vente active et prix fermes. Les veaux de choix de Seine-et-Marne, de l'Eure, de Seine-et-Oise, d'Eure-et-Loir et du Loiret se sont détaillés de 1 fr. 10 à 1 fr. 20 et, vendus en bande, ont obtenu de 1 fr. à 1 fr. 10."
    ]
  }
];
