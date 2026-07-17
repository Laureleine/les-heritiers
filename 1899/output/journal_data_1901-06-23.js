// Date: 1901-06-23
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-06-23 (Version Restaurée, 46 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique et Culture",
    "title": "Le Musée Victor-Hugo",
    "summary": "Le Conseil municipal de Paris a officiellement validé la création du Musée Victor-Hugo dans sa demeure de la place des Vosges. L'inauguration est prévue le 26 février, lors du centenaire de la naissance du grand poète.",
    "paragraphs": [
      "Dans sa dernière séance, le Conseil municipal de Paris a voté l'acceptation de l'offre que lui faisait M. Paul Meurice, exécuteur testamentaire de Victor Hugo, de donner à la Ville tous les souvenirs de l'illustre poète afin d'en constituer un musée. C'est dans la maison de la place Royale, aujourd'hui place des Vosges, où Victor Hugo vécut tant d'années, que ce musée doit être installé.",
      "On l'inaugurera l'an prochain, le 26 février, à l'occasion du centième anniversaire de la naissance de Victor Hugo. Ce jour-là, la statue du maître, œuvre du sculpteur Barrias, se dressera dans Paris.",
      "La France aura son Musée Victor-Hugo comme l'Angleterre a son musée Shakespeare, comme l'Allemagne a son Musée Goethe. On y réunira les manuscrits, les objets personnels et les souvenirs du poète ayant vécu à la place Royale, mais aussi ceux de sa période d'exil à Guernesey, où il avait lui-même aménagé sa demeure avec des sculptures et objets de sa création.",
      "Victor Hugo a dit de sa maison de la place Royale qu'elle fut le lieu où il a vu passer des personnalités marquantes de son siècle : chanceliers, pairs, ducs, artistes et penseurs. On voudrait que cette page éloquente pût être lue par le visiteur dès le seuil même du Musée Victor-Hugo."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Deux Aimées : Grand Roman Inédit",
    "summary": "Tensions persistantes entre les familles de Baudreuil et de Juversac : Madame de Juversac nie les accusations de sa compagne concernant le mystère entourant la disparition de Sybille.",
    "paragraphs": [
      "Madame de Juversac haussa les épaules : « C'est une invention, dit-elle. Je suis habituée à tes mensonges. Personne aussi bien que toi ne sait bâtir des histoires à dormir debout. »",
      "Après que Madame de Baudreuil s'est rendue chez le baron de Lupiac à la recherche de Sybille, le récit explore les tourments amoureux du passé liant Sybille à Philippe de Juversac, fils de la comtesse, alors que la situation financière et sociale des personnages se complexifie."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Étranger",
    "title": "Dépêches de Pékin",
    "summary": "L'empereur de Chine annonce son retour à Pékin pour octobre. L'insécurité dans les provinces reculées et l'éloignement de la capitale empêchent actuellement tout secours envers les missionnaires en danger.",
    "paragraphs": [
      "Pékin, 22 juin : D'après une proclamation officielle, le retour de l'empereur est annoncé pour le mois d'octobre. L'empereur a désigné comme ministre au Japon un ancien vice-président du Tsung-li-Yamen, le Mandchou Na-Toung.",
      "Pékin, 21 juin : On dit que Siam-Kiat-Pan, où quatre missionnaires belges ont été massacrés, était fortifié. L'état du pays et l'éloignement de Pékin rendent impossible l'envoi d'une expédition de secours."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "La Mission Marocaine à l'Élysée",
    "summary": "Le Président Loubet a reçu officiellement la mission diplomatique marocaine conduite par Si-Abd-el-Krim-ben-Sliman, marquant le renforcement des échanges diplomatiques entre la France et le sultanat du Maroc.",
    "paragraphs": [
      "Depuis leur arrivée à Paris, les membres de la mission marocaine s'étaient abstenus de toute sortie, attendant d'être reçus en audience solennelle à l'Élysée pour remettre à M. Loubet leurs lettres de créance.",
      "La cérémonie a eu lieu hier après-midi avec le cérémonial accoutumé, attirant une foule de curieux sur le parcours menant à l'Élysée. Si-Abd-el-Krim-ben-Sliman a prononcé un discours traduit pour le Président de la République.",
      "Avant de quitter Paris, les ambassadeurs seront reçus une seconde fois à l'Élysée où ils viendront remettre à M. Loubet les superbes étoffes et les armes précieuses qui constituent les cadeaux du sultan du Maroc."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "La Recluse de Poitiers",
    "summary": "L'instruction sur le drame de la recluse de Poitiers avance. Les autorités ont auditionné de nouveaux témoins sur le calvaire de Blanche Monnier, séquestrée dans sa propre demeure depuis 1892.",
    "paragraphs": [
      "L'interrogatoire de M. Marcel Monnier, commencé hier après-midi, a pris fin à sept heures. Deux nouvelles dépositions ont été recueillies, dont celle du cantonnier Désiré Bricaud et de l'ancien inspecteur de la salubrité Henri Garnier, concernant les conditions de vie déplorables de Blanche Monnier, enfermée dans sa demeure dès 1892."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident d'automobile à Remiremont",
    "summary": "Un grave accident d'automobile est survenu hier soir aux abords du hameau de Longuet. Une automobile a violemment percuté une voiturette, projetant ses trois occupants dans les champs, grièvement blessés.",
    "paragraphs": [
      "Un accident d'automobile qui aurait pu avoir de tragiques conséquences s'est produit hier soir, aux abords du hameau de Longuet. Une automobile, circulant à vive allure, a percuté une voiturette, projetant violemment ses occupants dans les champs. Les trois voyageurs ont été relevés grièvement blessés."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Terroriser sa bonne à Issy-les-Moulineaux",
    "summary": "Un riche propriétaire octogénaire a été la victime d'un odieux chantage. Sa domestique et ses complices, par la terreur, l'ont contraint à des versements de sommes considérables, dont 100 000 francs.",
    "paragraphs": [
      "Un riche propriétaire, âgé de quatre-vingt-trois ans, était victime d'une exploitation indigne de la part de sa domestique et de ses complices. Ces derniers le terrorisaient et l'ont contraint, par la menace, à des versements de sommes importantes, dont 100 000 francs en une seule fois. Une enquête est actuellement en cours pour faire toute la lumière sur cette affaire."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une faiseuse d'anges à Valenciennes",
    "summary": "Le juge d'instruction, M. Gobert, poursuit ses investigations sur un réseau d'avortements. La nommée Dernoncourt a avoué ses actes et dénoncé la femme Broutin, menant à plusieurs arrestations significatives.",
    "paragraphs": [
      "M. Gobert, juge d'instruction, continue son enquête sur une grave affaire d'avortements clandestins. La femme Dernoncourt a reconnu s'être fait avorter par la femme Broutin et avoir conduit d'autres femmes dans le même but auprès de cette dernière. Plusieurs arrestations ont été effectuées à la suite de ces révélations."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Horrible crime au Puy-Saint-Gulmier",
    "summary": "Un parricide d'une sauvagerie inouïe a secoué le Puy-Saint-Gulmier : un fils, après avoir abattu son père d'un coup de fusil, l'a sauvagement décapité à coups de hache pour un motif odieux.",
    "paragraphs": [
      "Un parricide atroce a été commis au Puy-Saint-Gulmier. Un fils, soupçonnant son père de relations incestueuses, l'a abattu d'un coup de fusil avant de l'achever et de le décapiter sauvagement à coups de hache. Le coupable a été appréhendé par les autorités locales."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Politique Internationale",
    "title": "La guerre au Transvaal",
    "summary": "La guerre sud-africaine fracture le parti libéral anglais. Tandis que MM. Harcourt et Bannermann condamnent le conflit, les partisans de l'annexion, menés par M. Asquith, maintiennent leurs positions.",
    "paragraphs": [
      "Les discours de MM. William Harcourt et Campbell-Bannerman, flétrissant la guerre sud-africaine, ont marqué une scission au sein du parti libéral anglais, opposant vivement les partisans de la paix à ceux qui, comme M. Asquith, prônent l'annexion définitive du Transvaal.",
      "Sur le plan militaire, les opérations se poursuivent avec des engagements signalés dans plusieurs districts et des mouvements de troupes observés de part et d'autre, confirmant la dureté des combats actuels."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique étrangère",
    "title": "La question des camps de reconcentration en Afrique du Sud",
    "summary": "Lord Ripon et sir Henry Campbell-Bannerman dénoncent le système des camps de reconcentration en Afrique du Sud, y voyant une tache pour l'honneur de l'administration et de la politique britannique.",
    "paragraphs": [
      "Dans une lettre, lord Ripon, ancien vice-roi de l'Inde, proteste contre le système des camps de reconcentration dans le sud de l'Afrique. Il est honteux, dit-il, que de pareilles choses se passent sous l'administration britannique. Il ne s'agit pas ici d'une question politique, mais du bon renom de l'Angleterre.",
      "Lord Ripon ne blâme pas les hommes, mais il flétrit le système des camps de reconcentration.",
      "De son côté, sir Henry Campbell-Bannerman écrit une lettre déclarant que l'extermination d'une population et la suppression de cette population par la force ne sauraient rentrer dans le cadre de la politique anglaise."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Sénat",
    "title": "Discussion sur le contrat d'association",
    "summary": "Le Sénat a débattu du projet de loi sur le contrat d'association. Malgré les oppositions sur la liberté d'enseignement, le projet a finalement été adopté par 173 voix.",
    "paragraphs": [
      "Le Sénat reprend la suite de la discussion du projet relatif au contrat d'association. M. Rambaud propose de remplacer l'article 14 par une disposition confiant à une loi spéciale l'organisation du contrôle de l'État sur l'enseignement libre.",
      "M. Rambaud déclare que tous les universitaires réclament le maintien du régime de la liberté en matière d'enseignement et critique l'intervention de l'État. Après une longue discussion, l'amendement est rejeté.",
      "M. Leygues, ministre de l'Instruction publique, insiste sur la nécessité d'interdire aux congrégations non autorisées le droit d'enseigner. Plusieurs amendements sont débattus tout au long des séances du matin et de l'après-midi, concernant les congrégations de femmes et les formalités d'autorisation.",
      "Le projet de loi est finalement adopté par 173 voix."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Affreux accident à Grimberghe",
    "summary": "À Grimberghe-lez-Bruxelles, une habitante a été grièvement blessée par une explosion accidentelle lors des festivités locales ; son état inspire les plus vives inquiétudes.",
    "paragraphs": [
      "À Grimberghe-lez-Bruxelles, lors de la fête locale, la dame Marie Vanhaute a eu l'épaule droite emportée par la décharge accidentelle d'une pièce d'artifice alors qu'elle s'en approchait. On craint qu'elle ne survive pas."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Mystérieux drame à Horion-Hozémont",
    "summary": "Une promenade en forêt tourne au drame à Horion-Hozémont : deux jeunes enfants ont été frappés de malaises violents, entraînant le décès de l'un et laissant l'autre dans un état désespéré.",
    "paragraphs": [
      "Deux enfants, les petits Leclercq, ont été pris de violentes douleurs abdominales après une promenade au bois. Le cadet a succombé et l'état de son frère est jugé désespéré. Une enquête est ouverte."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame conjugal à Charleroi",
    "summary": "Drame passionnel à Charleroi : un ouvrier a fait feu sur son épouse qui refusait de reprendre la vie commune, la laissant dans un état critique.",
    "paragraphs": [
      "Un ouvrier nommé Albert Deghilage a tiré trois coups de feu sur son épouse, rue de France à Charleroi, après que celle-ci a refusé de reprendre la vie commune. La victime a été transportée dans un état désespéré à l'hôpital."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Le cas de Lord Russell",
    "summary": "Lord Russell est renvoyé devant la Chambre des lords pour répondre d'une accusation de bigamie, un événement judiciaire rare qui n'avait pas eu de précédent parmi les pairs depuis l'année 1861.",
    "paragraphs": [
      "Lord Russell est renvoyé devant la Chambre des lords pour y être jugé sous l'accusation de bigamie. C'est la première fois depuis 1861 qu'un pair du royaume est appelé à comparaître devant cette haute instance pour une affaire de cette nature."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Incident nautique à Kiel",
    "summary": "L'empereur Guillaume II a manifesté son mécontentement lors des régates de Kiel, contestant la régularité du parcours du yacht « Comité ». Sa réclamation a été déboutée par le jury.",
    "paragraphs": [
      "L'empereur Guillaume II a vivement protesté contre les résultats des récentes régates de Kiel, prétendant que le yacht « Comité » n'avait pas accompli la totalité du parcours réglementaire. Toutefois, le jury a souverainement rejeté sa réclamation."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie tragique à Ploërmel",
    "summary": "Un violent incendie a ravagé deux habitations à Ploërmel. Le drame s'est soldé par la mort d'un habitant, piégé dans son grenier, dont la dépouille a été retrouvée entièrement carbonisée par les secours.",
    "paragraphs": [
      "Un incendie dévastateur dans la commune de Ploërmel a détruit deux maisons. L'un des habitants, pris au piège dans son grenier, a malheureusement péri dans les flammes. Le corps de la victime a été retrouvé carbonisé lors des déblais."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Justice",
    "title": "Condamnation des époux Monnier",
    "summary": "Le tribunal de Saint-Étienne a condamné les époux Monnier à des peines de prison ferme pour sévices sur leur enfant. La justice a également prononcé la déchéance de leur autorité paternelle.",
    "paragraphs": [
      "Les époux Monnier, domiciliés à Saint-Étienne, ont été condamnés respectivement à six et quatre mois de prison pour des actes de maltraitance caractérisés sur leur enfant âgé de quatre ans. En outre, le tribunal a prononcé la déchéance paternelle à leur égard."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Littérature",
    "title": "Sybille",
    "summary": "Récit des épreuves de Sybille, orpheline recueillie par son oncle, dont le destin bascule lors d'une rencontre avec madame de Baudreuil, lui ouvrant les portes d'une nouvelle vie à Saint-Martin-des-Anges.",
    "paragraphs": [
      "Le récit relate la destinée de Sybille, jeune orpheline recueillie par son oncle. Sa vie prend un tournant décisif lors d'une entrevue avec madame de Baudreuil, qui lui révèle les sentiments nourris par Philippe à son égard et lui propose une existence nouvelle au domaine de Saint-Martin-des-Anges."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Économie",
    "title": "Les accidents du travail au Danemark",
    "summary": "Bilan de la loi danoise sur les accidents du travail, en vigueur depuis 1896, révélant une indemnisation plus modeste que chez ses voisins européens pour un nombre restreint de sinistres enregistrés.",
    "paragraphs": [
      "Le Danemark, comme la plupart des États européens, a mis en vigueur, depuis trois ans, une loi sur la réparation des accidents du travail. Cette loi est entrée en exécution en janvier 1896.",
      "Au cours de l'exercice qui a pris fin le 31 décembre de la même année, 2 697 accidents de toute nature avaient été signalés. Mais la loi n'a été appliquée qu'à 1 242 cas, sur lesquels 49 avaient entraîné la mort, 213 une incapacité permanente et 950 une incapacité temporaire de travail.",
      "Le montant des indemnités allouées aux ayants droit des décédés a atteint 45 585 francs, et 184 587 francs ont été distribués aux blessés frappés d'incapacité permanente.",
      "Il est à noter que la loi danoise est moins libérale que les lois française, allemande ou autrichienne en plusieurs de ses points, et que la population du royaume n'étant pas considérable, les dépenses sont demeurées minimes."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Social",
    "title": "Une grève d'internes",
    "summary": "À Limoges, les internes et externes des hospices ont cessé le travail ce matin pour protester contre la mauvaise qualité de leur nourriture et l'indifférence de la commission administrative.",
    "paragraphs": [
      "Limoges, 22 juin. Une grève singulière, mais d'une extrême gravité, s'est déclarée ce matin à Limoges : les internes et les externes en médecine des hospices ont tous quitté leur service.",
      "Les infirmiers et les infirmières s'efforcent de remédier à un état de choses qui, s'il persistait, aurait pour les malades les plus graves inconvénients.",
      "Les internes se plaignent de l'insuffisance de la nourriture et de la mauvaise qualité des vivres. Ils déclarent que la commission administrative n'ayant pas fait droit à leurs réclamations, il ne leur restait d'autre parti à prendre que de se mettre en grève.",
      "Tous ici espèrent vivement que ce conflit aura une prompte solution et que la commission administrative prendra rapidement une décision conforme aux désirs des internes."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits divers",
    "title": "Au service anthropométrique",
    "summary": "Condamné aux travaux forcés, le nommé Viou a été repris grâce au service anthropométrique. Malgré ses dénégations lors de son arrestation, les mesures ont confirmé son identité.",
    "paragraphs": [
      "Condamné à dix ans de travaux forcés pour une affaire de vol de 4 000 francs, Viou, qui était parvenu à s'échapper du bagne, vient d'être repris.",
      "La sûreté de Paris, avisée de son évasion, a recherché et arrêté, il y a deux jours, un individu dont les signalements correspondaient absolument à ceux du fugitif.",
      "L'individu arrêté protestait énergiquement. Conduit au service anthropométrique et mensuré en présence du préfet de police, l'opération a nettement prouvé qu'il s'agissait bien de Viou, et malgré ses dénégations, son arrestation a été maintenue."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits divers",
    "title": "La musique adoucit les mœurs",
    "summary": "Un différend musical entre deux voisins parisiens rue de Charonne a dégénéré en violences. M. Daulisse, agressé par M. Cazard et ses amis, a porté plainte pour coups et blessures.",
    "paragraphs": [
      "Rue de Charonne, M. Victor Daulisse, employé d'administration, charme ses loisirs en jouant du piano et en chantant. Son voisin de palier, M. Adolphe Cazard, vit en fort mauvaise intelligence avec lui.",
      "Avant-hier soir, M. Cazard recevait des amis et chanta l'air des Rameaux. Soudain, M. Daulisse entonna le même air pour lui donner une leçon.",
      "Fou de colère, M. Cazard et ses convives enfoncèrent la porte de M. Daulisse, le renversèrent sur le parquet et le rouèrent de coups.",
      "Les trois forcenés ont été arrêtés grâce à l'intervention du concierge. M. Daulisse, très grièvement contusionné, a porté plainte contre ses agresseurs pour coups, blessures et violation de domicile."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits divers",
    "title": "Victime de la chaleur",
    "summary": "Une blanchisseuse de quarante-six ans, Mme Elisa Troyer, a été hospitalisée d'urgence à l'hôpital Saint-Louis après avoir succombé à une congestion cérébrale due à la forte chaleur ambiante.",
    "paragraphs": [
      "Vers une heure de l'après-midi, Mme Elisa Troyer, âgée de quarante-six ans, blanchisseuse, s'est affaissée sur le trottoir rue de Meaux.",
      "La malheureuse, ayant perdu connaissance, a été transportée dans une pharmacie où l'on a constaté une congestion cérébrale provoquée par la chaleur. Elle a été conduite dans un état grave à l'hôpital Saint-Louis."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Justice",
    "title": "Le drame du Palais de Justice",
    "summary": "M. Larcher, juge d'instruction, a entendu Mlle Camille Feuillet au chevet de laquelle il s'est rendu à l'Hôtel-Dieu. La jeune femme, poignardée par Émile Bourcelet, refuse obstinément de porter plainte.",
    "paragraphs": [
      "M. Larcher, juge d'instruction, s'est rendu à l'Hôtel-Dieu pour recevoir la déposition de Mlle Camille Feuillet, frappée de trois coups de couteau au Palais de Justice par le prévenu Émile Bourcelet.",
      "Mlle Feuillet a refusé obstinément de porter plainte, déclarant : « Bourcelet a été mon amant, je l'aime toujours et je n'ai qu'un désir : me marier avec lui avant son départ pour la Nouvelle-Calédonie. »",
      "Le parquet poursuit néanmoins Émile Bourcelet pour tentative d'assassinat avec préméditation."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits divers",
    "title": "Deux brutes",
    "summary": "Deux individus, Albert Jourdan et Gaston Hoffmann, ont été appréhendés hier soir rue Bullant après avoir agressé Mme Horvy, dont le crâne fut fracturé par un coup de bouteille. La victime est dans un état alarmant.",
    "paragraphs": [
      "Deux individus, Albert Jourdan et Gaston Hoffmann, menaçaient hier soir les passants rue Bullant. Une dame Horvy, qui passait à portée, a été frappée d'un coup de bouteille et a eu le crâne fracturé.",
      "Les deux brutes ont été arrêtées par les voisins et conduites au commissariat. Mme Horvy a été transportée à l'hôpital Cochin dans un état alarmant."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits divers",
    "title": "Une voleuse à la tire",
    "summary": "La police a arrêté une nommée Marguerite Wanderwinkel, prise en flagrant délit de vol dans un grand magasin. Elle usait d'une ombrelle percée pour dérober les porte-monnaie des clientes.",
    "paragraphs": [
      "Des agents de la sûreté ont arrêté hier une jeune femme, Marguerite Wanderwinkel, en flagrant délit de vol à la tire dans un grand magasin.",
      "Elle utilisait une ombrelle percée pour passer la main et explorer les poches des victimes sans se faire remarquer. Elle avait sur elle six porte-monnaie contenant au total 703 francs."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits divers",
    "title": "Poursuite mouvementée",
    "summary": "Avenue Ledru-Rollin, une tentative de vol a été déjouée par la police. Si la femme faisant le guet fut arrêtée, ses deux complices ont pris la fuite après avoir blessé l'agent Massoulier.",
    "paragraphs": [
      "Deux gardiens de la paix ont aperçu une femme faisant le guet avenue Ledru-Rollin, rejointe par deux hommes chargés de paquets. S'apercevant des agents, les hommes ont pris la fuite en abandonnant leur butin.",
      "L'un des gardiens a réussi à arrêter la femme, mais les deux complices ont pu s'échapper après avoir grièvement blessé l'agent Massoulier. Les papiers trouvés sur la femme semblent appartenir à une amie, et elle n'a fourni aucune information."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits divers",
    "title": "Accident mortel",
    "summary": "Le mécanicien Pierre Sarref, trente-huit ans, a succombé à ses blessures après une chute de six mètres survenue dans une usine de la rue des Petits alors qu'il procédait à des réparations.",
    "paragraphs": [
      "Hier, un ouvrier mécanicien nommé Pierre Sarref, âgé de trente-huit ans, est tombé d'une hauteur de six mètres dans une usine rue des Petits, alors qu'il réparait un volant.",
      "Frappé au crâne et aux côtes, il a succombé peu après son admission à l'hôpital. Le cadavre a été transporté à son domicile, rue Basfroi."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits divers",
    "title": "Une bande noire",
    "summary": "Une organisation criminelle spécialisée dans le trafic de matériel orthopédique a été démantelée par M. le juge Barrey. Huit individus, menés par Charles Brillonet, ont été appréhendés.",
    "paragraphs": [
      "Une bande d'escrocs, spécialisée dans le vol de matériel orthopédique revendu à Paris, a été démantelée par M. le juge Barrey, juge d'instruction.",
      "Le chef de la bande, Charles Brillonet, tenait un entrepôt clandestin avenue Daumesnil. Huit personnes au total, dont sept affiliés, ont été arrêtées sur commission rogatoire."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits divers",
    "title": "Vols dans un grand magasin",
    "summary": "Trois malfaiteurs ont été appréhendés pour une série de vols dans un grand magasin de nouveautés du quartier de l'Europe. Les objets dérobés étaient gagés au Mont-de-Piété.",
    "paragraphs": [
      "Trois individus, Louis Lafosse, Charles Queuille et Isidore Larmandois, ont été arrêtés pour avoir volé de nombreux bijoux dans un grand magasin de nouveautés du quartier de l'Europe.",
      "La marchandise était engagée au Mont-de-Piété. La perquisition a permis de retrouver une grande quantité de bijoux volés."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits divers",
    "title": "Le prix d'une morsure",
    "summary": "Après avoir perçu une indemnité pour la morsure de son fils par un chien, un père de famille ivre a tenté de menacer un charretier avec une arme à feu avant d'être interpellé.",
    "paragraphs": [
      "Le jeune Antoine B., mordu par un chien danois, a obtenu une indemnité du propriétaire, M. Durand. Le père de l'enfant a dilapidé la somme dans un restaurant et, ivre, a pris un fiacre pour rentrer.",
      "Arrivé boulevard Barbès, il a tenté de forcer le charretier à le ramener chez lui en tirant un coup de revolver, sans atteindre sa cible. Il a été arrêté par les passants et conduit au commissariat."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits divers",
    "title": "L'arrestation d'une bande de voleurs",
    "summary": "L'enquête sur le vol de trois cents paires de chaussures au préjudice de M. Berlin se poursuit. Le nommé Becmann est activement recherché, tandis que M. Maurice Legros bénéficie d'un non-lieu.",
    "paragraphs": [
      "L'enquête se poursuit sur le vol de trois cents paires de chaussures au préjudice de M. Berlin. Le chef de la bande, Becmann, est en fuite.",
      "M. Maurice Legros, un temps suspecté, a bénéficié d'une ordonnance de non-lieu après avoir prouvé son innocence."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits divers",
    "title": "Accident de tramway",
    "summary": "Un grave accident est survenu place Walhubert hier après-midi : un tramway électrique a percuté une voiture de livraison, blessant grièvement son conducteur.",
    "paragraphs": [
      "Hier après-midi, un tramway électrique a tamponné une voiture de farine place Walhubert. Le porteur qui conduisait la voiture, M. Lorton, a été grièvement blessé et transporté à l'hôpital de la Pitié."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en périphérie",
    "summary": "Une série d'événements tragiques marque la banlieue parisienne : accidents mortels à Levallois et Luzarches, vols audacieux à Gennevilliers et Fontenay, et un incendie dévastateur à Choisy-le-Roi.",
    "paragraphs": [
      "Levallois-Perret : Jean Leyaounec, palefrenier, est tombé d'une charrette de foin et a trouvé la mort dans sa chute.",
      "Gennevilliers : Un individu a profité de l'absence de M. et Mme Lamouroux pour dévaliser leur domicile, dérobant 1 852 francs ainsi que divers bijoux, tout en offrant des jouets à l'enfant du couple.",
      "Colombes : Le jeune Emmanuel Hanqueil, âgé de huit ans, a été renversé par une voiturette à pétrole. Son état inspire aux médecins les plus vives inquiétudes.",
      "Pantin : M. Louis Bertinger a été assailli par trois individus et grièvement blessé de deux coups de couteau.",
      "Fontenay-sous-Bois : Un coffre contenant 2 700 francs et plusieurs bijoux a été dérobé au domicile de M. Félix Klein.",
      "Choisy-le-Roi : Un incendie dévastateur a détruit les bâtiments de M. Bourguilleau, causant la perte tragique de dix-sept chevaux.",
      "Versailles : Mlle Marie P. a été arrêtée sous l'inculpation de circulation de fausse monnaie.",
      "Luzarches : Eugène Deschamps a succombé, écrasé par les roues de son attelage après une chute malheureuse.",
      "Écouen : Jules Cochet, accusé de vols, a mis fin à ses jours par pendaison dans sa cellule."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Sports",
    "title": "Départ de la course Paris-Berlin",
    "summary": "Le grand départ de la course automobile Paris-Berlin a été donné hier place de la Concorde. Malgré quelques incidents techniques et la chute de M. Flameng près d'Épernay, les coureurs ont rallié Reims.",
    "paragraphs": [
      "Les concurrents de la course Paris-Berlin ont pris le départ hier matin de la place de la Concorde. La première étape mène les coureurs jusqu'à Reims.",
      "Parmi les participants figurent de nombreuses personnalités, dont le prince d'Arenberg et le dessinateur Forain. La course a vu une arrivée échelonnée à Reims, marquée par la chute du concurrent M. Flameng aux abords d'Épernay."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Départements",
    "title": "Nouvelles des correspondants particuliers",
    "summary": "Le rapport des correspondants détaille divers drames à travers la France, incluant des accidents de travail, des suicides tragiques et des interpellations pour délinquance.",
    "paragraphs": [
      "Clermont : Une femme, Marceline Pietrequin, a été découverte près de l'asile d'aliénés, souffrant de graves blessures à la tête.",
      "Saint-Étienne : Un ouvrier mineur, Abel Lamballey, a été retrouvé mort à la suite d'un éboulement au puits de la Ghana.",
      "Joigny : Victor Bridou s'est suicidé par arme à feu. Par ailleurs, Désiré Gacqueniet a été retrouvé noyé dans l'Yonne par accident.",
      "Nevers : Mme Pigoury s'est jetée dans un puits ; ce suicide est attribué à des troubles cérébraux.",
      "Auxerre : La ville de Chablis procédera à l'inauguration de ses eaux le 30 juin.",
      "Reims : Un individu nommé Vuarguy, en état d'ivresse manifeste, a mordu un sous-brigadier et blessé un agent lors de son interpellation.",
      "Nancy : Eugène Bastien, employé à la Compagnie du Nord, a eu le pied écrasé par un train dans une tentative de suicide.",
      "Dijon : La dame Jobard est morte noyée accidentellement dans un bain à l'asile.",
      "Tarbes : Ponchi a été écroué pour le vol réitéré d'argent au préjudice d'une dame Brunet."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Résultats Sportifs",
    "title": "Résultats des courses hippiques",
    "summary": "Compte rendu des résultats hippiques de la journée, détaillant les écarts à l'arrivée pour les épreuves de steeple-chase et de haies.",
    "paragraphs": [
      "Prix du Triboulet (Steeple-chase) : Gagné de quatre longueurs ; deux longueurs séparaient le deuxième du troisième.",
      "Prix de Lamoé (Steeple-chase) : Gagné de cinq longueurs ; trois quarts de longueur séparaient le deuxième du troisième.",
      "Prix La Veink (Haies) : Gagné de trois longueurs ; six longueurs séparaient le deuxième du troisième."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "Les théâtres parisiens préparent leurs fins de saison et leurs rentrées. L'Odéon s'apprête à fermer ses portes, tandis que l'Opéra et la Comédie-Française planchent sur leurs futures productions.",
    "paragraphs": [
      "L'Odéon fermera ses portes le 30 juin. Colinette n'aura donc plus que huit représentations.",
      "À l'Opéra, on procède aux premières études des « Barbares », la nouvelle partition de M. Camille Saint-Saëns, et à la préparation de la reprise de l'Africaine de Meyerbeer pour septembre.",
      "La pièce « Le Roi », de M. Gaston Schéfer, est actuellement en répétition à la Comédie-Française.",
      "Les séances de lecture seront prochainement reprises à la Comédie-Française, avec au programme la pièce « Les Arrivistes » de M. Michel Provins.",
      "L'administration des concerts Lamoureux informe le public que la réouverture des concerts est fixée au dimanche 20 octobre prochain, au Nouveau-Théâtre."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Vie Artistique",
    "title": "Informations culturelles diverses",
    "summary": "Au programme : chants alsaciens accompagnés par l'orchestre Desgranges, invitations théâtrales pour les ouvrières parisiennes et nouvelles scènes de mode présentées au musée Grévin.",
    "paragraphs": [
      "Fête alsacienne : les chants populaires de l'enfance en Alsace seront interprétés par de jeunes artistes, accompagnés par l'orchestre Desgranges. M. Maurice Wolff fera une causerie sur la chanson alsacienne.",
      "Lundi soir, 24 juin, les ouvrières portant certains numéros sont invitées à diverses représentations théâtrales, notamment au Théâtre-Français, à l'Opéra-Comique, à l'Odéon, au Châtelet et à l'Ambigu.",
      "Au musée Grévin, présentation de la mode du soir dans un décor de salon d'avant-scène à l'Opéra, ainsi que les nouveaux programmes du journal lumineux."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Concerts et Divertissements",
    "title": "Programme des spectacles",
    "summary": "Actualités des théâtres parisiens : matinées à l'Olympia et au cirque Medrano, adieux d'Yvette Guilbert sur scène et visite de la reine Ranavalo à l'Hippo-Palace.",
    "paragraphs": [
      "Aujourd'hui, matinées à l'Olympia pour un spectacle de famille et au cirque Medrano, qui propose ses attractions nouvelles.",
      "Ce soir, dernière représentation d'Yvette Guilbert sur la scène de l'Olympia.",
      "Lundi soir, la reine Ranavalo assistera à la représentation donnée à l'Hippo-Palace.",
      "Le cirque Medrano annonce les débuts du trio Wladimiroff et des Adyads."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Vie Municipale",
    "title": "Concerts dans les parcs parisiens",
    "summary": "Le calendrier des aubades musicales prévues pour le dimanche 23 juin dans les jardins et squares de la capitale.",
    "paragraphs": [
      "Programmes musicaux du dimanche 23 juin dans les parcs de la ville : aux Buttes-Chaumont, au Luxembourg, au parc Montsouris, au parc Monceau, au Palais-Royal, aux Tuileries, au square Parmentier, à la place de la Nation, au Jardin des Plantes et au Jardin d'Acclimatation."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Bulletin Économique",
    "title": "Cours des fourrages et marché agricole",
    "summary": "Compte-rendu des transactions du 24 juin sur les marchés parisiens : état des cours des fourrages, des céréales et des denrées coloniales.",
    "paragraphs": [
      "Rapport du marché de Paris-La Chapelle, au 24 juin, relatif aux cours de la paille et des fourrages.",
      "Bulletin commercial du samedi 22 juin détaillant les cours des farines, des blés, des avoines, des huiles, des alcools et des sucres."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Informations Officielles",
    "title": "Communications diverses",
    "summary": "Calendrier des concours d'admission à l'école Boulle et bulletin de mouvement des paquebots transocéaniques.",
    "paragraphs": [
      "Le concours pour l'admission de cent deux élèves à l'école Boulle aura lieu le 18 juillet prochain.",
      "Le paquebot Ville-de-la-Ciotat a quitté Port-Saïd le 20 juin ; le paquebot Calédonien a quitté Djibouti le 20 juin ; le paquebot Indus est arrivé à Marseille le 20 juin."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Chemins de Fer",
    "title": "Modifications de service",
    "summary": "La compagnie des chemins de fer de l'Ouest facilite les visites à l'exposition de Rouen, tandis que la compagnie d'Orléans instaure des tarifs réduits pour les ouvriers agricoles dès juillet 1901.",
    "paragraphs": [
      "Chemins de fer de l'Ouest : durant l'exposition des arts appliqués à Rouen, les billets donneront droit à un arrêt dans cette ville.",
      "Chemin de fer d'Orléans : à partir du 1er juillet 1901, une réduction de 50 % sur le prix des places sera accordée aux ouvriers agricoles pour les travaux de la moisson sur certaines sections."
    ]
  }
];
