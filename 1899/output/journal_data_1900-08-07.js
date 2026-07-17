// Date: 1900-08-07
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-08-07 (Version Restaurée, 36 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Guerre de Chine",
    "title": "La situation militaire en Chine",
    "summary": "Malgré l'insuffisance des moyens de transport et de la cavalerie, les généraux alliés pressent la marche sur Pékin, tandis que les Russes surveillent les positions chinoises fortifiées entre Tien-Tsin et Yang-Tsung.",
    "paragraphs": [
      "Quoique de l'avis même des autorités militaires, les moyens de transport et la cavalerie soient insuffisants, et quoique les véhicules pour transporter les grands canons ne soient pas prêts, les généraux Yamaguchi et le colonel de brigade sont anxieux de marcher à tout hasard sur Pékin avant l'arrivée du lieutenant-général russe.",
      "L'ennemi tient une assez forte position au sud de Peï-Tsang, qui s'appuie, sur une longueur de plus de 5 milles, à la fois sur la rivière et sur le chemin de fer. Les Russes ont reconnu la position ce matin. Ils évaluent les forces chinoises entre Tien-Tsin et Yang-Tsung à 8 000 hommes. Les Japonais les surveillent."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Faits Divers",
    "title": "Effets d'une double exécution à Pékin",
    "summary": "L'exécution de Hsu-Ching-Chang et Yuan-Chang bouleverse la Chine. Les vice-rois méridionaux, craignant l'anarchie et la répression, sollicitent désormais la protection des puissances étrangères.",
    "paragraphs": [
      "L'exécution de Hsu-Ching-Chang et de Yuan-Chang a produit ici une impression plus profonde sur les Chinois que n'importe quel autre événement depuis le commencement de la crise.",
      "Les fonctionnaires locaux prédisent que Yuan-Shih-Kaï obtiendra maintenant, au moyen d'un simple édit impérial, le déplacement des vice-rois au Sud, et l'anarchie règnera ainsi dans toutes les provinces méridionales. Aussi les vice-rois de ces régions n'ont-ils plus maintenant d'autre ressource que celle de se tourner vers les puissances pour leur demander aide et protection.",
      "Le mois de juillet dernier, Li-Hung-Chang a envoyé un mémoire télégraphique au trône, qui a été apostillé par le vice-roi Liu-Kun-Yi, et où il dénonçait violemment Yu-Ping-Heng pour sa persécution contre les chrétiens et sa haine contre les étrangers.",
      "La nouvelle de l'exécution de Hsu-Ching-Chang est arrivée peu après que le mémoire était parti et elle a naturellement créé une certaine perturbation parmi les vice-rois, à tel point qu'un fonctionnaire chinois, Tajen, a cru devoir aujourd'hui faire éventuellement appel à la protection du consul général d'Angleterre, qui lui a promis son aide."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Guerre de Chine",
    "title": "La situation à Shanghai",
    "summary": "Tensions croissantes à Shanghaï où les forces navales alliées se concentrent. Li-Hung-Chang exprime son désarroi face à la situation, tandis que les actes de violence contre les étrangers se multiplient.",
    "paragraphs": [
      "Shanghaï, 5 août. On attend ce soir l'amiral Seymour qui revient de Nankin. Il y a à Shanghaï 4 navires de guerre anglais, 4 hollandais, 3 japonais, 2 américains, 2 allemands et 2 français, le Descartes et la Surprise.",
      "Les cinq navires de guerre embossés à Wo-Sung sont anglais.",
      "Shanghaï, 5 août. Le consul français a reçu aujourd'hui une communication de Li-Hung-Chang. Le vice-roi semble très abattu.",
      "Le consul japonais à Shanghaï a reçu de Pékin un télégramme annonçant que Tung-Fu-Siang a arrêté l'envoi de vivres aux légations.",
      "Un nombre considérable de troupes continuent à se masser à Pao-Ting-Fou.",
      "Un étranger habitant ici a été attaqué à coups de fusil par trois Chinois, alors qu'il était assis sous la véranda de sa résidence. Une des balles a traversé le livre qu'il tenait à la main. La police attribue cet attentat à des motifs de vengeance personnelle."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Politique",
    "title": "Nomination du Général Voyron",
    "summary": "Par décret du 4 août 1900, le général Voyron, déjà commandant du corps expéditionnaire, est officiellement nommé commandant en chef de l'ensemble des forces françaises en Chine.",
    "paragraphs": [
      "Par décret en date du 4 août 1900, rendu sur le rapport du ministre de la Marine, M. le général Voyron, commandant du corps expéditionnaire de Chine, est nommé au commandement en chef dudit corps."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Vie Militaire",
    "title": "Départ de renforts pour la Chine",
    "summary": "Un détachement de chasseurs à pied a quitté Vincennes sous les acclamations pour rejoindre Marseille et s'embarquer vers la Chine, dans une ambiance de ferveur patriotique.",
    "paragraphs": [
      "Un sergent et douze soldats volontaires du bataillon de chasseurs à pied ont quitté Vincennes hier matin à destination de Marseille où ils doivent s'embarquer pour la Chine.",
      "Les volontaires ont été conduits à la gare par le bataillon au complet, musique en tête et drapeau déployé. Sur la place de la station, le bataillon a formé le cercle et présenté les armes, puis le commandant Claret de La Touche a adressé aux partants quelques paroles d'adieu.",
      "Les douze soldats et leur sous-officier se sont ensuite embarqués; ils ont été acclamés aux cris de « Vive la France ! vive l'armée ! vivent les chasseurs à pied ! »"
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Revue à Royan",
    "summary": "Le ministre de la Marine a ajourné son voyage à Royan en raison du deuil pour le roi d'Italie. La revue du corps de débarquement par l'amiral Fournier a néanmoins eu lieu ce matin devant une foule enthousiaste.",
    "paragraphs": [
      "Le ministre de la Marine a avisé télégraphiquement le maire de Royan qu'il ajournait son voyage à une date ultérieure, le deuil officiel ne devant cesser qu'après les funérailles du roi d'Italie.",
      "Néanmoins, la revue du corps de débarquement a été passée ce matin, à Foncillon, par M. l'amiral Fournier, commandant en chef l'escadre de la Méditerranée, en présence d'une foule immense qui a fait une ovation aux troupes pendant le défilé. L'escadre appareillera demain matin, à dix heures, pour se rendre au golfe Juan."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Dépêches de l'étranger",
    "title": "Attentats anarchistes",
    "summary": "Le prince Balthazar Odescalchi a été victime d'un attentat anarchiste dans sa propriété de Santa-Marinella. À Chicago, une émeute anarchiste a mené à l'arrestation de Lucy Parsons.",
    "paragraphs": [
      "Vienne, 6 août. On vient de recevoir la nouvelle que le prince Balthazar Odescalchi a été la victime d'un attentat anarchiste dans sa propriété de Santa-Marinella. Le prince aurait été grièvement blessé.",
      "Chicago, 6 août. Une émeute provoquée par les anarchistes a eu lieu hier. La police a dû engager une lutte avec la foule ; plusieurs personnes ont été sérieusement blessées ; cinq arrestations ont été opérées. Au nombre des personnes arrêtées figure Lucy Parsons, veuve de l'anarchiste Parsons, exécuté."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Élections",
    "title": "Élections législatives en Italie",
    "summary": "À la suite de l'option des députés socialistes Costa et Ferri pour d'autres sièges, des élections partielles ont confirmé l'élection de MM. Bisolati à Budrio et Lollini à Gonzaga.",
    "paragraphs": [
      "Deux élections politiques ont eu lieu hier à Budrio et à Gonzaga, par suite de l'option, dans le premier collège, de M. Costa, socialiste, pour Imola, et, dans le second collège, en raison également de l'option de M. Ferri, socialiste, pour le siège de Ravenne.",
      "Ont été élus députés à Budrio, M. Bisolati et à Gonzaga, M. Lollini, tous deux socialistes."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Ambulance belge au Transvaal",
    "summary": "Une dépêche officielle en provenance de Pretoria confirme que quatre membres de l'ambulance belge déployée au Transvaal ont été faits prisonniers par les forces britanniques.",
    "paragraphs": [
      "Bruxelles, 6 août. Une dépêche de Pretoria annonce que quatre membres de l'ambulance belge au Transvaal ont été faits prisonniers par les Anglais."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Italie",
    "title": "Hommage au Roi Humbert au Parlement",
    "summary": "Le Parlement italien a rendu un hommage solennel au roi Humbert. Malgré les protestations socialistes et républicaines, des mesures de deuil national ont été adoptées à l'unanimité des deux chambres.",
    "paragraphs": [
      "Rome, 6 août. Les présidents de la Chambre et du Sénat accompagnent le corps du roi Humbert de Monza à Rome.",
      "La Chambre des députés s'est réunie cet après-midi. M. Villa a prononcé un long éloge funèbre du roi Humbert, fréquemment interrompu par de vifs applaudissements. Le président a donné lecture de dépêches envoyées par les présidents des divers Parlements. Il a proposé que la Chambre soit décorée de draperies de deuil pendant six mois, que la mémoire du roi défunt soit consacrée par un monument et qu'une adresse soit présentée au roi Victor-Emmanuel et à sa mère, la reine Marguerite.",
      "M. Turati, au nom des socialistes, et M. Pantano, au nom des républicains, ont protesté contre l'assassinat du roi, parce que, disent-ils, l'assassinat politique est sans utilité. Leurs déclarations ont été accueillies par de vives rumeurs. Les propositions ci-dessus ont été adoptées à l'unanimité.",
      "M. Villa annonce que samedi le roi prêtera serment devant les deux Chambres, dans la salle du palais du Sénat. Le panégyrique du roi Humbert a été prononcé au Sénat par M. Ganuzzaro, vice-président, et accueilli par des applaudissements. Des propositions identiques à celles de la Chambre des députés ont été adoptées à l'unanimité."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le cas de l'assassin Bresci",
    "summary": "Interné à Milan, l'assassin Bresci manifeste une instabilité croissante. Ses accès de violence ont contraint les gardiens à lui imposer la camisole de force, malgré ses appels réitérés au directeur de la prison.",
    "paragraphs": [
      "D'après des dépêches de Milan, Bresci, qui jusqu'ici avait eu une attitude calme et hautaine, se laisse aller maintenant à des emportements. Ses gardiens ont dû, hier, lui mettre, pendant dix heures, la camisole de force. Par deux fois, Bresci a appelé à haute voix le directeur."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le beau-frère de Bresci",
    "summary": "Giuseppe Castagni, beau-frère de l'assassin du roi Humbert, se trouve à Buenos-Ayres. Tenant des propos menaçants à l'encontre de la reine Victoria, il a quitté la ville sans obtenir le remboursement de son billet.",
    "paragraphs": [
      "Buenos-Ayres, 6 août. Giuseppe Castagni, beau-frère de l'assassin de Monza, se trouve en ce moment ici. Il avait pris, il y a trois semaines, un billet pour se rendre à New-York, mais il demande maintenant qu'on lui rende l'argent de son billet en déclarant qu'il n'y a aucune nécessité immédiate à ce qu'il fasse son voyage.",
      "Il déclare très haut que son beau-frère a commis un acte extrêmement recommandable et il annonce que la reine Victoria sera la prochaine victime. Il s'est embarqué aujourd'hui pour Montevideo sans avoir pu obtenir le remboursement de son billet pour New-York."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Déclarations de Lucheni",
    "summary": "Informé de l'attentat de Monza, l'anarchiste Lucheni a exprimé une joie manifeste, prédisant la fin prochaine des souverains européens, tout en refusant de livrer des informations sur les complots en cours.",
    "paragraphs": [
      "Genève, 6 août. Le procureur général a annoncé à Lucheni la nouvelle de l'attentat de Monza. Lucheni a manifesté une grande joie, disant qu'il n'est pas douteux qu'avant peu tous les souverains y passeront, à commencer par le nouveau roi d'Italie.",
      "Lucheni n'a donné aucun renseignement sur le complot présent. Il est également resté muet sur les complots qui ont eu lieu dans le passé ou qui pourraient avoir été organisés pour l'avenir."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Religion",
    "title": "Service religieux pour le Roi Humbert",
    "summary": "Un service funèbre pour le repos de l'âme du roi Humbert sera célébré le jeudi 9 août, à onze heures du matin, en la basilique de Sainte-Clotilde, en présence des membres de l'ambassade d'Italie.",
    "paragraphs": [
      "Un service pour le repos de l'âme du roi Humbert sera célébré jeudi 9 août, à onze heures du matin, à la basilique de Sainte-Clotilde, église paroissiale de l'ambassade d'Italie. Les membres de l'ambassade y assisteront en corps."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Congrès",
    "title": "Congrès des étudiants",
    "summary": "Le Congrès des étudiants s'est ouvert à Paris. M. Jean Reveillaud a été élu président. Les débats politiques et religieux y sont proscrits, et les congressistes ont honoré l'Opéra-Comique lors d'une représentation.",
    "paragraphs": [
      "La première réunion des membres du Congrès des étudiants a eu lieu hier, à neuf heures du matin, dans la salle des Fêtes de la mairie du sixième arrondissement, place Saint-Sulpice.",
      "La présidence du congrès est dévolue, pour la première partie de la séance, à M. Elesio Giglio Tos, de Turin, doyen d'âge des présidents des délégations étrangères.",
      "Dans son discours d'inauguration, M. Giglio Tos propose une acclamation à la France qui est adoptée d'enthousiasme. M. Jean Reveillaud est élu président effectif.",
      "Le président déclare qu'aucune discussion politique ou religieuse ne pourra avoir lieu pendant les séances du congrès. On procède ensuite à l'élection des vice-présidents par associations. Les délégués français n'ayant pas reçu d'avis de leurs associations, le vote est ajourné.",
      "Les étudiants ont assisté une heure et demie à la représentation de Louise, que leur offrait M. Carré, directeur de l'Opéra-Comique. À la fin du troisième acte, les étudiants ont fait une ovation splendide aux interprètes et au compositeur Gustave Charpentier."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Légion d'Honneur",
    "title": "Promotions ministérielles",
    "summary": "Le Journal Officiel publie les récentes nominations et promotions au sein de la Légion d'honneur, distinguant de nombreux hauts fonctionnaires des ministères des Travaux publics et de la Justice en 1899.",
    "paragraphs": [
      "Ministère des Travaux publics : Sont promus ou nommés M. Noblemaire (grand-officier), M. Metzger (commandeur) ; MM. Alard, de Basire, Lecomte et Bienvenue (officiers), ainsi que plusieurs chevaliers.",
      "Ministère de la Justice : Sont promus ou nommés MM. Forichon, Bernard et Lefebvre de Viefville (commandeurs), ainsi que MM. Fabre et Magnien (chevaliers)."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique",
    "title": "Le Shah de Perse à Paris",
    "summary": "Séjour du Shah de Perse à Paris : renforcement des mesures de sécurité, visites culturelles approfondies au Louvre et dîner officiel à l'Élysée malgré la période de deuil suite au décès du roi d'Italie.",
    "paragraphs": [
      "La prolongation du séjour de Mouzaffer-ed-Din a permis de remanier le programme des fêtes. Depuis l'attentat dont a failli être victime le souverain, on a définitivement renoncé au landau habituel et supprimé tout marchepied extérieur. Il sera désormais escorté par un peloton de cuirassiers.",
      "Au musée du Louvre : Le Shah a visité les Cariatides, la Vénus de Milo, l'escalier Daru, la salle des Bijoux, le Sacre de Napoléon Ier, la galerie d'Apollon et la galerie des Rubens. Il a témoigné un vif intérêt pour les antiquités asiatiques.",
      "Dîner de gala à l'Élysée : En raison de la mort du roi d'Italie, la réception a pris un caractère d'intimité. Le président de la République et Mme Loubet ont reçu le Shah, entourés de hauts fonctionnaires et membres du gouvernement. La musique de la Garde républicaine s'est fait entendre pendant le repas."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Social",
    "title": "Grève au Havre",
    "summary": "Le conflit social s'intensifie au port du Havre : après l'immobilisation du paquebot La Bretagne, la grève des chauffeurs paralyse le secteur maritime. Les ouvriers réclament la journée de huit heures.",
    "paragraphs": [
      "Le Havre, 6 août. Le paquebot La Bretagne n'a pas pu prendre la mer hier, faute de chauffeurs. Les grévistes ont stationné durant l'après-midi devant la tente de la compagnie. Une légère bagarre a éclaté lors du passage du ravitaillement.",
      "Ce matin, les grévistes ont décidé de faire débarquer les chauffeurs des yachts dans les bassins. La grève des chauffeurs de la Compagnie transatlantique s'est étendue à toutes les compagnies de navigation du Havre. Les ouvriers des quais exigent l'instauration de la journée de huit heures."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Actualités diverses",
    "summary": "Bref tour d'horizon de l'actualité : conseil des ministres à l'Élysée, ouverture du congrès international d'art public à l'Hôtel de Ville et un incident technique mineur survenu à l'Aquarium.",
    "paragraphs": [
      "Les ministres se réuniront en conseil à l'Élysée. M. Waldeck-Rousseau a reçu la visite du ministre de Perse.",
      "Congrès international d'art public : La séance d'ouverture a eu lieu hier à l'Hôtel de Ville. Les congressistes poursuivront leurs travaux aujourd'hui rue Mabillon.",
      "L'accident de l'Aquarium : La rupture d'une glace a suscité un grand bruit, mais l'accident est resté sans gravité."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Congrès",
    "title": "Congrès national des Amicales d'instituteurs",
    "summary": "Inauguration du congrès national des amicales d'instituteurs salle Turgot, rassemblant trois cents délégués venus de toute la France pour délibérer sur l'avenir de l'enseignement public.",
    "paragraphs": [
      "Le congrès a été inauguré hier, salle Turgot. Trois cents délégués des associations et des conseils départementaux y ont pris part.",
      "La première séance a été présidée par M. Jaunart. La séance plénière se tiendra aujourd'hui."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Exposition",
    "title": "Informations sur l'Exposition Universelle",
    "summary": "Record d'affluence dominical à l'Exposition Universelle. La commission du jury supérieur s'est réunie afin de statuer sur les diverses réclamations relatives à la répartition des récompenses.",
    "paragraphs": [
      "La journée de dimanche a été marquée par une affluence exceptionnelle. La commission du jury supérieur s'est réunie pour examiner avec attention les réclamations déposées concernant les listes de récompenses distribuées."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie d'un dépôt de voitures",
    "summary": "Un violent sinistre a ravagé un dépôt parisien. Le bilan est lourd : douze chevaux ont péri dans les flammes et près de 150 véhicules ont été détruits. Les dégâts s'élèvent à plus de 6 000 francs.",
    "paragraphs": [
      "Le dépôt renfermait 150 fiacres ainsi qu'une trentaine de voitures de type landau, coupés et victorias ; l'ensemble a été réduit en cendres par le feu.",
      "Douze chevaux ont malheureusement péri dans le brasier ; leurs cadavres ont été retrouvés en partie carbonisés par les secours.",
      "Les dégâts matériels, considérables, sont évalués à plus de 6 000 francs.",
      "Pendant toute la matinée d'hier, un détachement de pompiers est demeuré sur les lieux du sinistre afin de noyer les décombres et prévenir toute reprise des flammes."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Rafles sur les grands Boulevards",
    "summary": "Le préfet de police Lépine renforce la surveillance nocturne des boulevards. Cent trois individus ont été interpellés lors d'une vaste opération destinée à assainir la voie publique.",
    "paragraphs": [
      "M. Lépine, préfet de police, a transmis des ordres stricts aux commissaires et officiers de paix afin que les grands boulevards soient purgés des individus interlopes qui y rôdent durant la nuit.",
      "Entre quatre heures de l'après-midi et deux heures du matin, il a été procédé, sur les boulevards situés entre le faubourg Montmartre et la Madeleine, à l'arrestation de cent trois individus des deux sexes.",
      "M. Lépine a ordonné que cette mesure de police soit renouvelée quotidiennement jusqu'à la clôture de l'Exposition Universelle.",
      "Le préfet de police a également enjoint au préfet de la Seine d'obliger les propriétaires de cafés à libérer les trottoirs de leurs tables, rendant ainsi la circulation possible pour les promeneurs."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un vol dans une gare",
    "summary": "Cambriolage nocturne à la gare du boulevard Ornano : des malfaiteurs ont fracturé le coffre-fort pour dérober 5 000 francs. Le commissaire de Clignancourt a diligenté une enquête.",
    "paragraphs": [
      "Au cours de la nuit dernière, des malfaiteurs restés inconnus ont pénétré dans la gare du boulevard Ornano, sur la ligne de Ceinture, et ont mis au pillage le bureau de la receveuse.",
      "C'est M. Guillaumet, aiguilleur et veilleur de nuit, qui, vers quatre heures du matin, s'est aperçu du méfait et a immédiatement alerté les agents de la force publique.",
      "Pour pénétrer dans le bureau, les cambrioleurs ont brisé le grillage entourant le guichet de délivrance des billets. Ils ont ensuite fracturé un tiroir-caisse et défoncé, à coups de marteau, le coffre-fort scellé à la muraille.",
      "Les auteurs du vol ont pris la fuite en emportant une somme d'environ 5 000 francs. M. Carpin, commissaire de police du quartier de Clignancourt, a ouvert une enquête.",
      "La receveuse, Mme Chevin, demeurant rue Championnet, a été entendue ainsi que M. Guillaumet, mais aucun n'a pu fournir au magistrat d'indications permettant d'orienter les recherches."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Actualités Sociales",
    "title": "La Fête de famille à Bois-Colombes",
    "summary": "Inauguration solennelle à Bois-Colombes de la demeure offerte par M. Dufayel à ses employés. Le bénéficiaire, M. Boucher, a pris possession de sa nouvelle maison en présence des autorités locales.",
    "paragraphs": [
      "La population de Bois-Colombes était en liesse dimanche dernier à l'occasion de l'inauguration de la maison de campagne offerte chaque année par M. Dufayel, par le biais d'une tombola gratuite, à l'un de ses employés. L'heureux gagnant, M. Boucher, a fait édifier sa demeure rue Denis-Boucher.",
      "La municipalité, ainsi que diverses sociétés locales, se sont jointes aux 400 employés de M. Dufayel pour célébrer l'événement. Après le banquet, la maison a été officiellement inaugurée. Un concert a été donné par l'harmonie Dufayel sur la place de la République.",
      "À cette occasion, M. Dufayel a remis à M. le maire de Bois-Colombes une somme de 1 000 francs destinée aux indigents de la commune."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Suicide à Bois-Colombes",
    "summary": "Louise Levet, une jeune brodeuse de vingt ans domiciliée rue Félix-Faure à Bois-Colombes, s'est donné la mort la nuit dernière en se tirant une balle de revolver dans le cœur.",
    "paragraphs": [
      "Une jeune fille de vingt ans, Louise Levet, brodeuse demeurant rue Félix-Faure, s'est suicidée la nuit dernière dans sa chambre en se tirant une balle de revolver dans le cœur."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Cadavre retiré de la Marne à Champigny",
    "summary": "Le corps d'un homme d'une cinquantaine d'années, vêtu avec élégance, a été repêché hier dans la Marne. Bien que muni de papiers au nom d'un politicien connu, son identification formelle reste à établir.",
    "paragraphs": [
      "Des mariniers ont retiré hier matin de la Marne, près du pont du chemin de fer à Champigny, le cadavre d'un homme très élégamment vêtu, paraissant âgé d'une cinquantaine d'années.",
      "Le défunt avait sur lui des papiers au nom d'un personnage politique très connu, mais, son identité n'ayant pu être établie d'une façon précise, le corps a été transporté au dépôt mortuaire de Joinville-le-Pont."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Découverte macabre à Nanterre",
    "summary": "Le corps d'un nourrisson présentant des traces de strangulation a été découvert par des vidangeurs rue du Chemin-de-Fer. La mère, Louise Prévost, lingère de vingt et un ans, a été appréhendée par la police.",
    "paragraphs": [
      "Des ouvriers vidangeurs ont découvert, hier, dans une maison sise 81, rue du Chemin-de-Fer, le corps d'une petite fille ayant vécu plusieurs jours et portant, autour du cou, des traces manifestes de strangulation.",
      "À la suite d'une enquête, M. Payaud, commissaire de police, a arrêté la mère coupable, une jeune femme nommée Louise Prévost, lingère âgée de vingt et un ans."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Suicides divers",
    "summary": "Tragédies en banlieue : à Poissy, un receveur-buraliste de soixante-six ans s'est pendu pour abréger ses souffrances ; à Antony, un jardinier trentenaire est mort accidentellement en tombant dans un puits.",
    "paragraphs": [
      "Poissy : Un nommé Eugène Couturier, receveur-buraliste âgé de soixante-six ans, a été trouvé pendu hier dans son cellier. Il s'est donné la mort pour se soustraire aux souffrances intolérables causées par une maladie dont il souffrait depuis deux ans.",
      "Antony : Hier après-midi, on a retiré d'un puits situé dans une propriété où il travaillait le cadavre d'un jardinier nommé Tellier, âgé de trente ans, qui y était tombé accidentellement."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Matinées littéraires de la Comédie-Française",
    "summary": "La Comédie-Française organise une série de cinq matinées littéraires au Trocadéro, célébrant les œuvres de La Fontaine, Voltaire, Chénier, Lamartine, Vigny, Musset et Hugo.",
    "paragraphs": [
      "La Comédie-Française donnera encore cinq matinées littéraires et dramatiques dans la grande salle des Fêtes du palais du Trocadéro.",
      "Vendredi 10 août : matinée de La Fontaine, avec les Fables choisies et La Coupe enchantée.",
      "Samedi 18 août : matinée consacrée au XVIIIe siècle, incluant des œuvres de Voltaire, Marivaux et Beaumarchais.",
      "Jeudi 30 août : le théâtre et les poètes de la Révolution, avec André Chénier, Fabre d'Églantine et la Marseillaise.",
      "Mercredi 5 septembre : matinée dédiée à Alphonse de Lamartine, Alfred de Vigny et Alfred de Musset.",
      "Jeudi 13 septembre : matinée consacrée à l'œuvre poétique et théâtrale de Victor Hugo."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Grève des débardeurs à Newhaven",
    "summary": "À Newhaven, les débardeurs ont cessé le travail après le refus de la Compagnie de chemin de fer d'augmenter leurs salaires. Des centaines de tonnes de fruits destinés à Londres restent immobilisées à bord des navires.",
    "paragraphs": [
      "Les débardeurs employés au déchargement des navires de marchandises se sont mis en grève, parce que la Compagnie du chemin de fer n'a pas voulu consentir à une augmentation de salaire.",
      "Plusieurs centaines de tonnes de fruits destinés au marché de Londres restent à bord."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Main Gauche - Troisième Partie",
    "summary": "Extrait du feuilleton littéraire : Pontsevrin s'entretient avec une logeuse qui lui confie les tracas liés aux locataires et évoque les faits divers qui agitent la vie parisienne, notamment rue Vavin.",
    "paragraphs": [
      "Pontsevrin venait de s'asseoir sur la chaise que son interlocutrice, les dix francs reçus et une parole, lui avançait. Celle-ci, ayant refermé la porte de sa loge et s'étant assise également, ne demandait qu'à continuer le dialogue.",
      "« Cependant, reprit le premier après un court silence, si elle était longtemps sans revenir, vous vous inquiéteriez. » — « Dame ! à la longue. C'est plutôt le propriétaire qui s'inquiéterait pour son terme. » — « Je comprends. »",
      "« Il est vrai qu'il arrive tant d'aventures dans Paris. » — « C'est pour cela. Surtout à ces femmes. Ainsi, avez-vous lu, monsieur, cette histoire de la rue Vavin ? » — « Non. Quelle affaire ? » — « Comment, vous ne savez pas ? C'est vrai que c'est déjà quasi de la rengaine. Mais vous auriez pu lire le commencement. Un fait divers, probablement. Je ne les lis jamais. »"
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Voix d'Outre-Tombe - XV (suite)",
    "summary": "Scène dramatique du feuilleton où Saint-Amaud, malgré sa blessure et son extrême faiblesse, tente de se justifier auprès de son interlocutrice en affirmant sa sincérité et sa droiture.",
    "paragraphs": [
      "La volonté fait monter la corbeille. Saint-Amaud lui répondit d'une voix ferme, très nette. Elle cacha son visage dans le drap du lit. Il perdit de nouveau connaissance.",
      "« En effet, en voyant les bandelettes qui entouraient sa tête », balbutia Félix. « A-t-on donc honte de votre amour ? J'ai voulu mourir. J'espérais alors que ma parole d'honneur suffirait pour empêcher un innocent d'être accusé à la place de mon malheureux ami. »",
      "« Vous rêvez, mon ami », balbutia-t-elle. « Gabrielle ne m'a jamais volé par une infamie qui est en mon cœur pour vous. Non, d'honneur, je n'ai jamais menti. Vous le savez. Est-ce possible ? Ah ! maudit, tu es venu pour refaire une scène avec ma belle-fille. »"
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Faits Divers",
    "title": "Le mystère de la rue Vavin",
    "summary": "La police a élucidé le meurtre de la rue Vavin : le coupable est M. R. de T., un mondain qui a abattu sa maîtresse au revolver le jour même de ses noces, lors d'une violente scène de rupture.",
    "paragraphs": [
      "Le mystère de la rue Vavin fait grand bruit. Une jeune femme a été trouvée assassinée dans un appartement de rendez-vous, près du Luxembourg, tuée d'un coup de revolver.",
      "Elle avait la figure à peu près emportée. Rien sur elle ne permettait d'établir son identité, de sorte que la justice ne savait pas à quoi s'en tenir.",
      "On connaît maintenant l'identité de l'homme arrêté, le troisième soir après le crime, dans le petit café de la rue Vavin. Il s'appelle R. de T., appartient au plus grand monde, et s'était marié le matin même.",
      "On pense que c'est au cours d'une scène de rupture que R. de T. a frappé sa maîtresse d'un coup de revolver."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Faits Divers",
    "title": "Disparition de Mademoiselle de Boffront",
    "summary": "La disparition de Mademoiselle Solange de Boffront, volatilisée depuis vingt-quatre heures, plonge son entourage, notamment sa femme de chambre et sa marraine, dans une angoisse profonde.",
    "paragraphs": [
      "La pensée de Solange traversa le cerveau de Bruno. Il chercha sur son carnet, héla un fiacre et se fit conduire rue Oudinot. À la sœur tourière qui lui tira le cordon, il demanda : « Mademoiselle Solange de Boffront. »",
      "La religieuse leva les bras au ciel : « Mademoiselle de Boffront, monsieur, vous demandez mademoiselle de Boffront ? Sa marraine était la meilleure amie de ma mère, je viens lui apporter des nouvelles du Dauphiné. » — « Ah ! monsieur, si c'était de ses nouvelles à elle. Elle a disparu depuis bientôt vingt-quatre heures. »",
      "Hélas, sa vieille femme de chambre, mademoiselle Annie, et madame d'Audefrant, l'amie de sa mère, malade au lit depuis huit jours, sont dans un état terrible. Mademoiselle de Boffront est partie en courses hier dès une heure de l'après-midi ; elle n'a pas reparu."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Informations Ferroviaires",
    "title": "Fêtes de l'Assomption : Dispositions de la Compagnie du Nord",
    "summary": "La Compagnie du Nord annonce des réductions tarifaires exceptionnelles, atteignant 65 %, sur les billets aller-retour à l'occasion des fêtes de l'Assomption pour des voyages de deux, cinq ou sept jours.",
    "paragraphs": [
      "La Compagnie du Nord, afin de faciliter à des prix excessivement réduits les voyages effectués à l'occasion des fêtes de l'Assomption, a pris les dispositions suivantes : des billets d'aller et retour de 2e et 3e classes, valables pendant deux jours, sont délivrés avec une réduction variant de 20 à 65 % sur le tarif ordinaire.",
      "Des billets valables pendant cinq jours, du 14 au 18 août, sont proposés avec une réduction de 30 à 57 % sur le tarif ordinaire, tandis que les billets valables pendant sept jours, du 14 au 21 août, bénéficient d'une réduction de 50 %."
    ]
  }
];
