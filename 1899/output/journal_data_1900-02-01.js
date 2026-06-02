// Date: 1900-02-01
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-02-01 (Version Restaurée, 35 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Littérature et Biographie",
    "title": "Talma",
    "summary": "Portrait du tragédien Talma, dont la statue orne la Comédie-Française. Récit de son ascension, de ses débuts en 1787 à sa révolution de l'art dramatique par la vérité historique et le naturel.",
    "paragraphs": [
      "Lorsque l'on pénètre dans le péristyle de la Comédie-Française, on rencontre sur son chemin la statue de l'un des artistes dont le nom honore le plus la maison de Molière : le tragédien Talma. Les habitants de la commune de Poix, dont la famille de Talma est originaire, ont sollicité la Comédie-Française pour ériger un monument en son honneur. Cette initiative ravive l'intérêt pour cet illustre acteur.",
      "Le père de Talma était chirurgien-dentiste à Paris avant de s'établir à Londres, où le jeune Talma reçut une éducation distinguée. Revenu à Paris pour embrasser la même profession, il finit par céder à sa passion pour le théâtre, suivant les cours de l'École de déclamation.",
      "Ses débuts eurent lieu le 21 novembre 1787 au Théâtre-Français dans le rôle de Séide. Talma révolutionna l'art dramatique en imposant la vérité historique dans les costumes et une diction plus naturelle, loin de l'exagération habituelle.",
      "Lié aux idées libérales et à Marie-Joseph Chénier, Talma connut un succès immense avec 'Charles IX' en 1789, soutenu par Mirabeau et Danton. Sa carrière fut marquée par des dissensions politiques et une amitié avec le général Bonaparte. Il mourut en 1826, laissant derrière lui le souvenir d'un génie unique qui combinait l'art de Shakespeare et de Racine."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Roman-Feuilleton",
    "title": "Comme une épave",
    "summary": "Le baron François de Lorgerac, en proie à de lourdes dettes après des spéculations immobilières infructueuses, voit dans la mort du lieutenant Roland d'Aspremont une opportunité financière inespérée.",
    "paragraphs": [
      "Le baron François de Lorgerac, en apparence fortuné, traversait en réalité de graves difficultés financières. Spéculateur acharné, il avait englouti ses capitaux dans des opérations immobilières risquées qui s'avérèrent être des échecs retentissants.",
      "En apprenant la mort du lieutenant Roland d'Aspremont, tué au combat de Rio-Frio, le baron vit une opportunité de salut. Roland étant le seul héritier du comte Gérard d'Aspremont, sa disparition faisait de François de Lorgerac le nouveau bénéficiaire potentiel de cette immense fortune, ce qui lui permettrait d'apurer ses dettes."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Informations Politiques",
    "title": "Le mouvement au Sénat et au gouvernement",
    "summary": "Chronique du 1er février : le Sénat s'organise, tandis que le gouvernement officialise des nominations diplomatiques majeures et que les commissions parlementaires poursuivent leurs travaux législatifs.",
    "paragraphs": [
      "C'est aujourd'hui 1er février que le Sénat se réunit pour organiser ses bureaux et valider les élections récentes. Par ailleurs, un mouvement diplomatique a été annoncé : M. Bihourd est nommé ambassadeur à Berne, M. de Monbel ministre à La Haye, et M. Revoil à Tanger.",
      "La commission chargée de l'examen du régime des aliénés a décidé de traiter séparément le cas des aliénés criminels pour éviter l'arbitraire administratif.",
      "La commission de l'armée a approuvé plusieurs rapports concernant les interprètes militaires, l'avancement des officiers de réserve et l'augmentation des décorations. Elle presse également le ministère de la Guerre de déposer le projet de loi sur l'instruction militaire des jeunes gens.",
      "Enfin, la commission de renseignement a adopté une proposition de loi pour réglementer les inspecteurs primaires de la Seine, réduisant le nombre de classes de cinq à trois."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Défense Maritime",
    "title": "Le programme de défense nationale",
    "summary": "Le gouvernement dépose un ensemble de projets de loi pour renforcer la défense maritime et coloniale, coordonnant plusieurs ministères pour fortifier les côtes françaises et établir des points d'appui outre-mer.",
    "paragraphs": [
      "Le gouvernement a déposé cinq projets de loi visant à organiser la défense maritime de la métropole et des colonies. Ce vaste programme implique les ministères de la Guerre, de la Marine, des Colonies, du Commerce et des Finances.",
      "Les mesures incluent la fortification des côtes (Ouessant, Belle-Isle, Groix, Bizerte), la construction de batteries, de ports militaires et le développement de centres de ravitaillement dans les colonies comme Dakar et Saigon, afin d'assurer l'autonomie des communications télégraphiques et logistiques."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Actualité Internationale",
    "title": "La guerre du Transvaal",
    "summary": "Les forces britanniques piétinent dans le Transvaal. Entre les difficultés autour de Colesberg et le récent revers sanglant à Spion-Kop, la situation reste tendue malgré l'optimisme affiché par le général Buller.",
    "paragraphs": [
      "Les nouvelles du conflit restent préoccupantes pour les Anglais. Le général French peine à progresser autour de Colesberg, tandis que le bombardement de Kimberley s'intensifie. Ladysmith demeure sous tension et les tentatives britanniques pour franchir la rivière Orange semblent compromises face aux forces républicaines.",
      "À Spion-Kop, après de rudes combats, les Anglais ont dû battre en retraite, malgré le courage souligné du colonel Thorney Croft. Le général Buller tente de maintenir le moral des troupes par des ordres du jour optimistes, affirmant que la délivrance de Ladysmith n'est qu'une question de jours."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Quatre enfants brûlés vifs à Pont-de-l'Arche",
    "summary": "Un effroyable drame s'est déroulé à Criquebeuf-sur-Seine : en l'absence de leurs parents, quatre enfants ont péri, asphyxiés par les fumées d'un incendie domestique provoqué par une étincelle.",
    "paragraphs": [
      "À Criquebeuf-sur-Seine, une terrible tragédie a frappé la famille Liberprey. En l'absence des parents, un incendie, causé probablement par une étincelle tombée d'une poêle, a embrasé la demeure. À leur retour, la mère n'a pu que constater le décès de ses quatre enfants, asphyxiés par les épaisses fumées."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Triple évasion à Narbonne",
    "summary": "Trois détenus dangereux, Étienne Gary, Antoine Ferrer et Paul Cabart, se sont évadés de la maison d'arrêt de Narbonne après avoir neutralisé un gardien. Les autorités sont activement à leur recherche.",
    "paragraphs": [
      "Ce matin, trois détenus dangereux, Étienne Gary, Antoine Ferrer et Paul Cabart, se sont évadés de la maison d'arrêt de Narbonne. Ils ont surpris un gardien, l'ont bâillonné et garrotté avant de s'emparer de ses clés. Les autorités sont activement à leur recherche."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Débat au Parlement sur la guerre du Transvaal",
    "summary": "Le Parlement britannique a été le théâtre d'une vive discussion sur le conflit au Transvaal, l'opposition dénonçant la gestion ministérielle malgré les tentatives de M. Balfour d'abréger les débats.",
    "paragraphs": [
      "Le chancelier de l'Échiquier a répondu aux critiques concernant la responsabilité du gouvernement dans la situation actuelle, tout en défendant le discours de lord Salisbury.",
      "L'opposition, par la voix de divers intervenants, critique l'impérialisme, la gestion des généraux et le manque de franchise du gouvernement, tout en débattant sur l'amendement Fitz-Maurice.",
      "Le débat s'est clos avec une demande de M. Balfour pour terminer rapidement, malgré les réserves exprimées par sir H. Campbell-Bannerman."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Débats à la Chambre des Lords",
    "summary": "La Chambre des Lords a débattu de la politique coloniale au Transvaal. Lord Salisbury a pointé les limites constitutionnelles face à la guerre, tandis que lord Rosebery suggérait le service obligatoire.",
    "paragraphs": [
      "Lord Kimberley a retracé vingt ans de politique au Transvaal, accusant le gouvernement de manque de prévoyance. Lord Salisbury, en réponse, a souligné les faiblesses de la Constitution britannique face aux exigences de la guerre moderne.",
      "Lord Rosebery a appelé à des mesures patriotiques sincères et a évoqué la nécessité possible d'un service militaire obligatoire pour assurer la survie de l'Empire."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Naufrage d'un torpilleur français",
    "summary": "D'après une dépêche de la Corogne, un torpilleur français aurait fait naufrage près du cap Finistère lors d'une tempête. Le sort de l'équipage, ayant abandonné le bâtiment, demeure incertain.",
    "paragraphs": [
      "D'après une dépêche de la Corogne, un torpilleur français aurait fait naufrage près du cap Finistère lors d'une tempête. L'équipage aurait abandonné le bâtiment, mais son sort demeure incertain."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Désordres en Allemagne",
    "summary": "À Bochum, une manifestation ouvrière a été violemment réprimée par la gendarmerie. Le bilan de cette intervention armée s'établit à un mort et plusieurs blessés parmi les manifestants.",
    "paragraphs": [
      "À Bochum, des désordres graves ont nécessité l'intervention immédiate de la gendarmerie. Devant la résistance des manifestants, les forces de l'ordre ont dû faire usage de leurs armes, causant un mort et plusieurs blessés parmi les ouvriers."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incident diplomatique à Constantinople",
    "summary": "L'enlèvement d'une jeune fille par un sujet musulman, cause d'un vif incident diplomatique, trouve sa conclusion : la jeune personne a été rendue à son père par l'intermédiaire de l'ambassade d'Italie.",
    "paragraphs": [
      "La jeune fille enlevée par un musulman, fait qui avait suscité un vif incident diplomatique, vient d'être remise à l'ambassade d'Italie. Elle a été rendue à son père, mettant ainsi fin à cette affaire délicate."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Informations diverses de l'armée",
    "summary": "Mouvements et réclamations au sein des troupes : les pompiers demandent une exemption, une société de secours est créée à Lyon et le ministère confirme la création de bataillons de zouaves à Paris.",
    "paragraphs": [
      "Les sapeurs-pompiers réitèrent leur demande d'exemption des treize jours de service dans la territoriale. Par ailleurs, une société de secours mutuels a été constituée par les maréchaux-ferrants de Lyon.",
      "Pendant que les officiers s'attellent à la révision de la carte d'état-major, le ministère confirme officiellement la constitution de nouveaux bataillons de zouaves à Paris."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le Mystère de Charenton",
    "summary": "Une boulangère de seize ans, Marguerite Vergniol, a semé le trouble à Charenton en signalant la présence d'un membre sectionné. L'enquête policière conclut à une affabulation.",
    "paragraphs": [
      "Une jeune boulangère de seize ans, Marguerite Vergniol, a alerté le voisinage en affirmant avoir aperçu un bras d'homme sectionné à Charenton.",
      "Cependant, l'enquête rigoureuse menée par la police n'a permis de découvrir aucune trace de sang ni de confirmer les cris signalés. Les autorités concluent à une hallucination ou à une plaisanterie de mauvais goût."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un drame passionnel à Bastia",
    "summary": "Un sanglant drame passionnel a frappé Bastia : Antoine Oneto a fait feu sur son ami et sa belle-sœur avant de tenter, dans un accès de désespoir, de mettre fin à ses jours.",
    "paragraphs": [
      "Un drame épouvantable s'est déroulé à Bastia. À la suite d'une dispute, Antoine Oneto a fait feu à trois reprises avec un revolver sur son ami Laurent Lota.",
      "Dans un accès de fureur, Oneto a ensuite abattu sa belle-sœur. Le meurtrier a immédiatement tenté de se suicider après avoir commis ces deux forfaits."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Tribunaux",
    "title": "Condamnation pour abus de confiance",
    "summary": "La cour d'assises des Pyrénées-Orientales a condamné Alphonse Cussol et son fils pour le détournement de 85 000 francs, dilapidés dans les dépenses somptuaires et les fantaisies du jeune homme.",
    "paragraphs": [
      "La cour d'assises des Pyrénées-Orientales vient de rendre son verdict dans l'affaire concernant Alphonse Cussol et son fils. Tous deux ont été reconnus coupables d'abus de confiance pour avoir détourné la somme de 85 000 francs, laquelle était, selon l'accusation, principalement consacrée aux dépenses somptuaires et aux fantaisies du fils."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles Judiciaires",
    "title": "Procès de M. Zola",
    "summary": "La neuvième chambre du tribunal correctionnel a statué sur le procès intenté à M. Zola par M. Judet. L'écrivain, poursuivi pour dénonciation calomnieuse, a été acquitté par le tribunal.",
    "paragraphs": [
      "La neuvième chambre du tribunal correctionnel a statué aujourd'hui sur le procès intenté à M. Zola. Poursuivi pour dénonciation calomnieuse par M. Judet, l'écrivain a bénéficié d'un acquittement prononcé par la cour."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident mortel à Saint-Pierre-d'Irube",
    "summary": "Un drame domestique a frappé la commune de Saint-Pierre-d'Irube : un enfant de sept ans a tué accidentellement sa mère en manipulant une arme à feu laissée à sa portée.",
    "paragraphs": [
      "Un terrible accident domestique s'est produit à Saint-Pierre-d'Irube. Un enfant âgé de sept ans, en manipulant un fusil qui n'avait pas été mis hors de sa portée, a tué accidentellement sa mère dans des circonstances qui plongent la famille dans une profonde douleur."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrestation d'un faux-monnayeur",
    "summary": "Activement recherché, Christian Botte a été appréhendé par la police au marché de Passy, surpris en flagrant délit d'émission de fausse monnaie.",
    "paragraphs": [
      "Les forces de l'ordre ont procédé à l'arrestation de Christian Botte, un individu déjà activement recherché par la justice. C'est au marché de Passy que l'homme a été surpris alors qu'il se livrait à l'émission de fausse monnaie, mettant fin à ses agissements frauduleux."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Escroquerie aux mandats à Quincy-Sergy",
    "summary": "L'ouvrier maçon Louis Vandescal a été arrêté à Quincy-Sergy pour avoir détourné à son profit plusieurs mandats destinés à son employeur.",
    "paragraphs": [
      "Un ouvrier maçon du nom de Louis Vandescal a été arrêté à Quincy-Sergy pour une affaire d'escroquerie. Il est reproché à l'individu d'avoir intercepté et détourné plusieurs mandats destinés à son patron entrepreneur. L'enquête a rapidement permis d'établir sa culpabilité dans ce délit."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Cambriolage avenue Marceau",
    "summary": "L'hôtel particulier de Mme de Chastelus, situé avenue Marceau, a fait l'objet d'une visite indésirable. Malgré une effraction constatée, les cambrioleurs sont repartis sans dérober d'objets de grande valeur.",
    "paragraphs": [
      "L'hôtel particulier de Mme de Chastelus, sis avenue Marceau, a été la cible d'un cambriolage. Si les malfaiteurs ont réussi à pénétrer dans les lieux par effraction, ils n'ont toutefois point emporté d'objets de grande valeur."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Sports",
    "title": "Règlement des dead-heats dans les courses",
    "summary": "Le règlement des courses hippiques et du pari mutuel précise les conditions du « dead-heat ». Selon l'âge des chevaux, le prix est partagé ou une seconde épreuve est organisée pour départager les concurrents.",
    "paragraphs": [
      "Dans le cas de « dead-heat », soit l'arrivée simultanée de deux chevaux au poteau, ceux-ci sont classés premiers ex æquo.",
      "Pour les courses d'obstacles, le prix est systématiquement partagé. En ce qui concerne les courses plates, le partage s'applique aux chevaux de deux ans ; néanmoins, pour les épreuves réservées aux chevaux de trois ans et au-dessus, les propriétaires conservent la faculté de faire recourir les deux compétiteurs, le prix étant alors adjugé au vainqueur de cette seconde manche.",
      "Le règlement du pari mutuel entérine cette pratique, s'accordant en cela avec les usages du Salon des courses pour les paris au livre.",
      "Le tribunal a d'ailleurs récemment confirmé que le règlement du pari mutuel constitue la loi des parties dans un litige où un parieur contestait cette procédure pour réclamer un partage des gains."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Critique littéraire",
    "title": "Au Pays des Boërs",
    "summary": "Un nouvel ouvrage intitulé « Au pays des Boërs » paraît pour éclairer le public sur les origines de la guerre au Transvaal, offrant un récit vivant et documenté d'un témoin privilégié des événements.",
    "paragraphs": [
      "Alors que la plupart de nos concitoyens demeuraient dans l'ignorance de la situation exacte du Transvaal, le public s'instruit désormais. Un nouveau volume, intitulé « Au pays des Boërs », paraît aujourd'hui afin de mettre en lumière les véritables origines du conflit.",
      "Rédigé par un auteur ayant vécu parmi les Boërs et fréquenté des personnalités telles que Kruger, Cecil Rhodes et les grands chefs indigènes, cet ouvrage décrit avec une remarquable précision le Transvaal, le Natal, la colonie du Cap et Lourenço-Marquès.",
      "Ce livre, aussi riche en péripéties qu'un récit de Jules Verne, est une lecture indispensable pour comprendre les enjeux africains actuels."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Sports",
    "title": "Grand prix de l'Union vélocipédique",
    "summary": "M. Quentin-Bauchart, conseiller municipal et éminent vélophile, a présenté son rapport sur le Grand Prix, préconisant une surveillance administrative accrue sur les activités de l'Union vélocipédique.",
    "paragraphs": [
      "M. Quentin-Bauchart, le vélophile conseiller municipal, a donné lecture de son rapport sur le Grand Prix. Il y soutient avec fermeté que l'Union vélocipédique se doit d'accepter une surveillance plus étroite de la part de l'administration."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un combat de boxe mortel à Londres",
    "summary": "Un tragique accident s'est produit au National Sporting-club de Londres où le boxeur Miko Ililey a succombé à un coup reçu lors d'un match. Ce drame justifie la méfiance de la police française envers la boxe.",
    "paragraphs": [
      "Avant-hier, au National Sporting-club de Londres, deux poids légers, Miko Ililey et Nat Precious, se disputaient le championnat d'Angleterre.",
      "Au second round, Ililey reçut un formidable coup de poing à la mâchoire qui entraîna sa chute. Malgré les soins prodigués à l'hôpital de Charing-Cross, le malheureux est décédé quelques heures plus tard.",
      "Face à de tels dénouements, l'on comprend aisément pourquoi les autorités françaises refusent de tolérer la pratique de ce sport sur notre territoire."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Social",
    "title": "Note du Touring-Club de France",
    "summary": "Le Touring-Club de France annonce que dès ce jour, l'encaissement des cotisations sera effectué à domicile par la poste avec une majoration de 50 centimes. Les paiements directs au siège ne sont plus acceptés.",
    "paragraphs": [
      "Le Touring-Club de France nous informe qu'à dater d'aujourd'hui, il sera procédé à l'encaissement à domicile, par l'intermédiaire de la poste, des cotisations. Le montant de la cotisation sera augmenté, conformément aux statuts, de 50 centimes pour frais.",
      "Dès demain, il ne sera plus possible au T.C.F. d'accepter les paiements directs, les reçus déposés à la poste pour encaissement ne pouvant en être retirés."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Bulletin Financier",
    "title": "Compte-rendu de la liquidation de fin de mois",
    "summary": "Grâce à une grande abondance de capitaux, la liquidation de fin de mois s'opère aisément. Le taux des reports fléchit tandis que les valeurs françaises témoignent d'une belle résistance face à la crise sud-africaine.",
    "paragraphs": [
      "La liquidation de fin de mois s'est opérée avec de grandes facilités en raison de l'abondance de l'argent. Le taux des reports tombe de 4 à 3 %.",
      "Tout serait prêt pour une campagne d'affaires active sans les incertitudes de la guerre sud-africaine, bien que l'ensemble des valeurs françaises tende désormais à s'affranchir de ces appréhensions.",
      "Le 3 % fait un nouveau pas en avant et l'on signale un courant de demandes sur les mines d'or."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Informations financières",
    "title": "Service de la dette et publications",
    "summary": "La Banque nationale d'Haïti a réuni les fonds nécessaires au paiement du coupon de l'Emprunt de 1896. En parallèle, le journal 'La Sténographie' propose une méthode d'apprentissage autonome.",
    "paragraphs": [
      "La Banque nationale d'Haïti a encaissé les fonds destinés au paiement du coupon de l'Emprunt d'Haïti 1896 pour le mois de juin prochain.",
      "Le journal 'La Sténographie' propose une méthode pour apprendre sans professeur et publie des offres d'emploi gratuites. Le premier numéro est vendu 10 centimes."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Feuilleton",
    "title": "Les Tragédies de l'Amour : Le Secret de Roland",
    "summary": "Après le refus de la duchesse d'accepter son union avec Colette, Horace sombre dans le désespoir. Son frère Roland, malgré ses préventions passées, décide d'intercéder auprès de Madame de Villefort.",
    "paragraphs": [
      "Horace est au désespoir suite à l'entrevue avec la duchesse qui refuse son union avec Colette. Roland, témoin de la détresse de son frère, se retrouve soudainement au cœur du drame.",
      "Roland, qui avait poursuivi Colette de sa haine, se sent tiraillé. Il comprend que le sort de Colette et d'Horace dépend désormais de lui. Il décide d'intervenir auprès de la duchesse, bien que cela lui coûte de renier son passé et son orgueil.",
      "La nuit est longue pour Roland, hanté par l'idée de l'injustice. Le matin, il se présente devant sa mère, Madame de Villefort, pour tenter de la faire fléchir."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Santé",
    "title": "Les bienfaits des Pastilles Géraudel",
    "summary": "Les Pastilles Géraudel s'imposent comme un remède souverain contre les affections respiratoires, soulageant efficacement la toux, la bronchite et l'asthme auprès de millions de patients.",
    "paragraphs": [
      "Toutes ensemble, réunies, les merveilles de l'Exposition n'égaleront pas celles réalisées par les Pastilles Géraudel qui, dans le monde entier, ont rendu la santé et la vie à des millions de personnes atteintes de toux, rhumes, bronchites, asthme, influenza, phtisie, etc."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Santé",
    "title": "Étude scientifique sur les produits Rivoix",
    "summary": "M. Émile Gautier, directeur de 'La Science Française', publie une étude magistrale attestant de l'efficacité des dragées Rivoix pour la reconstitution dentaire et la pose de prothèses indolores.",
    "paragraphs": [
      "La Science Française a publié, sous la signature de son directeur, M. Émile Gautier, une étude magistrale démontrant la haute valeur scientifique des dragées Rivoix pour la reconstitution et la pose de dents complètement insensibles."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Santé",
    "title": "La Revalescière du Barry",
    "summary": "Aliment reconstituant de renom, la Revalescière du Barry favorise la digestion et l'assimilation. Un remède fortifiant pour les convalescents et les nourrices, fort de soixante années de succès.",
    "paragraphs": [
      "La Revalescière du Barry est un aliment sain et reconstituant, influençant les organes digestifs, favorisant la complète assimilation au corps humain et développant l'appétit. Elle assainit et rajeunit le sang, ce qui en fait un bienfait vraiment divin, notamment pour augmenter et bonifier le lait des nourrices.",
      "Son adoption générale dans les hôpitaux serait souhaitable. Elle est la nourriture par excellence pour les convalescents et les enfants, avec soixante ans de succès. Disponible chez Potin et chez les bons pharmaciens."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Conseils",
    "title": "Moyen de guérison pour les maladies de peau",
    "summary": "M. Vincent, de Grenoble, propose par vœu humanitaire un remède infaillible pour soulager diverses affections cutanées, rhumatismes et troubles organiques chroniques.",
    "paragraphs": [
      "Un monsieur propose aux personnes atteintes de maladies de la peau, dartres, eczémas, boutons, démangeaisons, bronchites chroniques, maladies de la poitrine, de l'estomac et de la vessie, ou rhumatismes, un moyen infaillible de se guérir promptement. Cette offre, dont on appréciera le but humanitaire, est la conséquence d'un vœu. Écrire à M. Vincent, place Victor-Hugo, à Grenoble."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Offres d'Emploi",
    "title": "Opportunités commerciales et emplois divers",
    "summary": "Diverses offres d'emploi pour des représentants, une demoiselle téléphoniste à Clichy et du personnel infirmier rue de Provence.",
    "paragraphs": [
      "Des représentants actifs et intelligents sont demandés en France et à l'étranger pour placer une boisson économique, brevetée et médaillée, produit de grande consommation.",
      "On demande une demoiselle sachant téléphoner et ayant une belle écriture. Se présenter au 28, rue des Chasses, à Clichy.",
      "On demande des infirmiers et infirmières, avec références exigées, au 51, rue de Provence."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Instruction",
    "title": "École pratique de commerce",
    "summary": "L'École pratique de commerce Pigier propose des méthodes d'enseignement simples et efficaces, ayant permis l'embauche de 1 306 élèves en 1898.",
    "paragraphs": [
      "Cours et leçons pour tous. Méthode simple et pratique. Succès certain. Facilités de paiement. 1 306 emplois offerts aux élèves en 1898. École pratique de commerce, rue de Rivoli, Paris. Pigier, directeur."
    ]
  }
];
