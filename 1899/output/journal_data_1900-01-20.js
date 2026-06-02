// Date: 1900-01-20
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-20 (Version Restaurée, 46 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage Secret",
    "summary": "Paul Bertnay annonce la parution prochaine dans Le Petit Parisien de son nouveau roman, 'Mariage Secret', une œuvre dramatique explorant le destin tragique d'une mère et de sa fille dans le Paris de la fin du siècle.",
    "paragraphs": [
      "Prochainement, Le Petit Parisien publiera « Mariage Secret », grand roman inédit de Paul Bertnay.",
      "« Mariage Secret » est un roman passionné qui se déroule au milieu de maintes péripéties. C'est l'histoire de deux êtres, la mère et la fille, à la suite d'une aventure romanesque dans le milieu parisien, et dont les infortunes imméritées provoqueront, chez nos lectrices, de poignantes émotions.",
      "« Mariage Secret » a été tout spécialement écrit pour Le Petit Parisien par Paul Bertnay, dont le talent, fait d'émotion vraie, est si goûté du grand public.",
      "Nos lecteurs retrouveront dans « Mariage Secret » les qualités qui distinguent l'auteur d'« Orphelins », « Celle qu'on aime » et « Sacrifice d'amour »."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Politique Coloniale",
    "title": "Soldats et Colons",
    "summary": "Le colonel Lyautey analyse la méthode du général Galliéni à Madagascar, où le soldat, une fois la paix rétablie, se mue en administrateur et bâtisseur pour étendre durablement l'influence française.",
    "paragraphs": [
      "Nous sommes venus à une heure de notre histoire où la question coloniale prend une importance capitale et, pour ainsi dire, dramatique ; où, de toutes parts, l'attention des vrais patriotes est obstinément ramenée vers la nécessité d'assurer notre influence au dehors.",
      "C'est ainsi qu'il n'y a rien de plus intéressant que l'étude que vient de publier un des lieutenants les plus intelligents du général Galliéni, le colonel Lyautey. Cette étude porte sur la colonisation telle qu'elle a été pratiquée à Madagascar.",
      "Ses conclusions franchissent les limites de cette colonie et montrent un des moyens les plus féconds de semer notre race au dehors. Le régime de colonisation mis en œuvre par le général Galliéni est, en apparence, un régime militaire, mais il convient d'y insister : c'est là la principale originalité de la nouvelle méthode.",
      "Le soldat devient non le destructeur, mais le colon possible. L'officier aspire à devenir l'administrateur plus qu'à être le tacticien de la destruction. La paix obtenue, le soldat dépose ses armes ; il devient administrateur, il devient agriculteur, ouvrier d'art, instituteur."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions",
    "summary": "Extrait de la troisième partie du roman 'Deux Passions'. Ce passage évoque une rencontre champêtre empreinte de mélancolie et de secrets de mariage, où la figure de Suzanne incarne la promesse du bonheur retrouvé.",
    "paragraphs": [
      "« Deux Passions », grand roman inédit, troisième partie. Un drame du mariage (suite).",
      "Il y respirait un parfum nouveau et calmant, fait de l'odeur des fleurs rustiques, de la résine balsamique des arbres verts, et surtout de la présence de cette jeune femme au pur et doux sourire, cette belle Suzanne en un mot, qui lui semblait si justement l'incarnation de la fée du bonheur.",
      "Il pédala jusqu'à l'entrée de l'avenue d'Angeville. Il reconnut l'un des deux vieillards : « Monsieur Bernay ! » dit-il.",
      "Le comte demanda au cycliste : « Vous venez souvent dans ce pays ? » — « Rarement, monsieur. » — « Et il a épousé mademoiselle Audeval ? » — « Oui, monsieur, il a eu ce bonheur. »"
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des ministres",
    "summary": "Le Conseil des ministres, présidé par M. Loubet à l'Élysée, confirme le règlement diplomatique de l'incident de Saint-Domingue et valide la création d'une section étrangère à l'École française d'Athènes.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin, à l'Élysée, sous la présidence de M. Loubet.",
      "Le ministre des Affaires étrangères a donné connaissance au Conseil d'un télégramme lui annonçant que l'incident de Saint-Domingue est réglé à l'entière satisfaction de la France.",
      "Le garde des Sceaux a mis le Conseil au courant des travaux de la commission chargée d'examiner le projet de réforme judiciaire.",
      "Le ministre de l'Instruction publique a fait signer par le Président de la République un décret instituant à l'École française d'Athènes une section étrangère."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "La Défense navale",
    "summary": "Le gouvernement s'apprête à déposer un projet de loi ambitieux pour la défense navale, prévoyant un investissement de 600 millions pour moderniser la flotte et fortifier les points d'appui coloniaux.",
    "paragraphs": [
      "On annonçait hier pour mardi le dépôt de divers projets sur la défense navale.",
      "Ces projets, qui ont pour but l'accroissement de la flotte, l'outillage des ports, la défense des points d'appui coloniaux et la défense des côtes, comportent une dépense évaluée à 600 millions de francs.",
      "L'ensemble du crédit à prévoir pour la réalisation des travaux serait réparti entre plusieurs budgets successifs."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Économie",
    "title": "Les Houilles étrangères",
    "summary": "La commission des douanes a rejeté la proposition du député Breton visant à supprimer temporairement les droits sur les houilles étrangères. M. Noël a été désigné pour rapporter cette décision.",
    "paragraphs": [
      "Sur le rapport de sa sous-commission, la commission des douanes s'est prononcée hier contre la proposition de M. Breton, député du Cher, ayant pour but la suppression temporaire du droit sur les houilles étrangères. M. Noël a été chargé du rapport sur cette proposition."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Terrible accident à Ivry",
    "summary": "Un effondrement dans les ateliers de la Compagnie de l'Est-Parisien à Ivry-sur-Seine a causé des blessures sérieuses à cinq ouvriers, précipités dans le vide depuis les nouveaux bâtiments en construction.",
    "paragraphs": [
      "Un grave accident, dans lequel cinq ouvriers ont été blessés, s'est produit dans l'après-midi d'hier au Fort-à-l'Anglais, dépendant du territoire d'Ivry-sur-Seine.",
      "L'accident a eu lieu dans l'établissement de la Compagnie de l'Est-Parisien, dont le directeur est M. Debray. Les nouveaux bâtiments sont annexés aux anciens, où se construisent actuellement les voitures.",
      "Maginet et Aubert, qui se trouvaient à l'intérieur du bâtiment, furent précipités dans le vide d'une hauteur de dix-huit mètres. Deux autres ouvriers, Léon Girbas et Piquet, furent précipités d'une hauteur de quinze mètres. Enfin, un garçon maçon, Charles Sarrazin, a reçu sur la tête une grêle de pierres.",
      "Maginet avait les bras et les jambes brisés ; Aubert souffrait d'une jambe fracturée. Les trois blessés, ainsi que Sarrazin, ont été transportés à l'hospice d'Ivry."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Distinctions",
    "title": "La Légion d'honneur",
    "summary": "Par décret du garde des Sceaux, plusieurs personnalités de l'administration algérienne, dont MM. Ben-El-Bahar, Belbachir et Laribi, ont été promues ou nommées dans l'ordre de la Légion d'honneur.",
    "paragraphs": [
      "Par décret rendu sur la proposition du garde des Sceaux, ministre de la Justice, sont promus ou nommés dans l'ordre national de la Légion d'honneur : Officier, M. Ben-El-Bahar, cadi à Alger, et M. Belbachir, cadi à Oran. Chevalier, M. Laribi, bach-adel, faisant fonctions de cadi à Relizane (Oran)."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Deux amants asphyxiés",
    "summary": "Un drame conjugal s'est produit suite à l'asphyxie par oxyde de carbone d'un jeune homme et de sa compagne, alors qu'ils faisaient chauffer un punch sur un poêle dans une chambre close.",
    "paragraphs": [
      "Le cadavre d'un jeune homme se trouvait à genoux sur le lit, la tête enfouie dans le traversin. Louise Corbas était étendue sans connaissance. On découvrit que le jeune homme était Émile-Gabriel Toulouppe.",
      "La bonne de M. de La Torre, qui avait depuis quelque temps des relations avec le fils Toulouppe, avait convié celui-ci à passer la nuit avec elle. Avant de se mettre au lit, les deux amoureux firent chauffer un punch sur un poêle dont ils avaient enlevé le couvercle.",
      "Les émanations d'oxyde de carbone ne tardèrent pas à produire leur effet. L'état de la jeune femme est considéré comme désespéré."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Guerre",
    "title": "Le conflit anglo-boer",
    "summary": "Le colonel lord Dundonald a occupé des hauteurs après un combat contre les troupes Boërs. Les informations concernant les opérations majeures sur les rives de la Tugela restent en attente.",
    "paragraphs": [
      "On ne sait rien encore des combats dont les rives de la Tugela doivent en ce moment être le théâtre. Les nouvelles communiquées par le War Office se rapportent exclusivement aux opérations effectuées par le général Buller aux alentours de Springfield.",
      "Le War Office a reçu le télégramme suivant du général Buller : « Le colonel lord Robert Dundonald, avec de l'infanterie montée, est entré en contact avec une troupe de Boërs. Il a occupé les hauteurs après un combat et il conserve maintenant la position »."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Les Navires capturés",
    "summary": "La saisie d'un navire allemand chargé de vivres pour le Transvaal par la flotte anglaise contraint la compagnie maritime de Hambourg à suspendre ses liaisons vers la baie de Delagoa.",
    "paragraphs": [
      "Un navire de guerre anglais a intercepté la barque allemande venant d'Australie, qui transportait un chargement de farine destiné au gouvernement du Transvaal.",
      "La barque a été conduite sous équipage de prise ; les bureaux de la compagnie maritime de Hambourg ne délivrent désormais plus de billets pour Johannesburg à destination de la baie de Delagoa. Cette mesure paraît motivée par les déclarations affirmant que les navires allemands transportaient de nombreux individus destinés à renforcer la frontière sud."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Situation au Cap",
    "summary": "Au 17 janvier, la situation demeure calme aux frontières du Cap grâce à la présence des garnisons britanniques, malgré la démission du maire de Dordrecht, M. de Wet, et les pertes subies par les rebelles coloniaux.",
    "paragraphs": [
      "Le Cap, 17 janvier. Les frontières restent calmes, mais beaucoup dépendra, en grande partie, de la tournure que prendront les événements.",
      "Les forces britanniques qui tiennent garnison à Dordrecht et à Burghersdorp semblent avoir, seules, empêché les populations d'origine hollandaise des environs de prendre fait et cause pour les Boers.",
      "Les pertes de l'ennemi, dans les combats livrés autour de Colesberg les 31 décembre et 3 janvier, ont été de cinquante hommes environ, mais la plupart d'entre eux étaient, non pas des Boers, mais bien des rebelles de la Colonie. M. de Wet, le maire de Dordrecht, vient de donner sa démission."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Les Renforts britanniques",
    "summary": "Londres intensifie son effort de guerre en créant un corps spécial de chasseurs montés richement dotés et en préparant l'embarquement imminent de 4 400 hommes et de canons pour l'Afrique du Sud.",
    "paragraphs": [
      "Londres, janvier. Les journaux annoncent la création d'un corps spécial de chasseurs montés.",
      "Les volontaires de ce corps recevront une allocation gouvernementale de 4 000 francs par cheval, une indemnité pour équipement, une jumelle, un revolver Mauser et une police d'assurance sur la vie ne devant pas excéder 7 500 francs. Ils recevront en outre, à titre de gratification, 5 francs par jour après la durée de la guerre.",
      "D'autre part, 4 400 hommes, chevaux et canons de campagne seront embarqués pour l'Afrique du Sud durant le courant de la semaine prochaine."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Diplomatie",
    "title": "Entretien avec M. Leyds",
    "summary": "Le docteur Leyds, représentant du Transvaal, exprime sa confiance envers les généraux boers et dénonce des actes de cruauté commis par les troupes anglaises lors du franchissement de la Tugela.",
    "paragraphs": [
      "Bruxelles, 19 janvier. Il était curieux de connaître l'impression du docteur Leyds à la nouvelle du passage de la Tugela par les troupes anglaises. M. Leyds a rendu visite à notre correspondant.",
      "« Je ne sais absolument rien de positif, nous a dit M. Leyds, mais le passage de la grande et de la petite Tugela ne me surprendrait pas ; car, croyez-le bien, les généraux boers qui ont su tenir tête aux Anglais sont des hommes qui sont arrivés à une tactique combinée contre les chefs de l'armée transvalienne. »",
      "« Il se passe là-bas quelque chose de grave, et le silence du War Office est bien inquiétant. Il ne permet aucune hypothèse favorable à nos armes. Comment croire, en effet, que les généraux anglais laisseraient pendant huit longs jours le War Office sans nouvelles importantes ? »",
      "« Ne pensez-vous pas que les Boers seraient, à un moment donné, écrasés par le nombre ? — Je ne le crois pas encore, nous dit M. Leyds ; j'ai une foi très grande en mes compatriotes. Un soldat boer vaut plusieurs soldats anglais, et ceux-ci ne se rendront pas maîtres facilement de nos positions, qui ne se découragent pas. »",
      "« La guerre est une chose infâme, surtout quand on accomplit des actes de cruauté. Je viens d'apprendre qu'un de mes amis, blessé sur le champ de bataille, a été achevé par des soldats anglais ; il avait été atteint de deux balles, mais son état n'était pas désespéré. Un soldat anglais lui a donné la mort en lui portant deux coups de lance. »"
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Interpellation au Reichstag sur la capture des paquebots",
    "summary": "Au Reichstag, M. de Bülow dénonce la saisie injustifiable des paquebots allemands par les Anglais, exigeant des indemnités et le respect du droit des neutres dans les relations commerciales internationales.",
    "paragraphs": [
      "Berlin, 19 janvier. Une grande affluence règne aujourd'hui dans les tribunes du Reichstag à l'occasion de l'interpellation concernant la capture des paquebots allemands.",
      "M. Bebel développe son interpellation : il souligne que plusieurs États ont livré du matériel de guerre aux Boers et que l'Angleterre elle-même participe à ces livraisons ; il demande, en conséquence, des comptes au gouvernement.",
      "M. de Bülow, secrétaire d'État aux Affaires étrangères, prend alors la parole. Il reconnaît l'insuffisance des traités actuels concernant la réserve du droit maritime, soulignant que les tentatives de réforme ont échoué jusqu'ici. L'Allemagne, rappelle-t-il, soutient la liberté du commerce ; dénonçant les entraves au nom de la contrebande de guerre, le ministre déclare que les captures des paquebots étaient injustifiables.",
      "Il est inadmissible que les belligérants abusent de leurs droits à l'égard des neutres, troublant ainsi les relations commerciales entre les pays civilisés. L'Angleterre devra verser une indemnité et fournir l'assurance que les paquebots allemands ne seront plus visités sur le simple soupçon de contrebande. Le gouvernement britannique a déjà fait exprimer ses regrets."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "France",
    "title": "Cérémonie commémorative de Montretout",
    "summary": "La population de Saint-Cloud a rendu un hommage solennel aux victimes de Montretout hier, lors d'une cérémonie patriotique réunissant autorités locales et troupes, dans un esprit de ferveur républicaine.",
    "paragraphs": [
      "La population de Saint-Cloud a pris part, hier, à une imposante manifestation patriotique pour célébrer le souvenir de Montretout.",
      "Une compagnie du régiment d'infanterie, musique en tête, est sortie de la caserne pour se ranger au pied du monument, avenue de Versailles. M. Belmonte, maire de Saint-Cloud, le consul, puis les représentants des différentes sociétés ont tour à tour pris la parole.",
      "La cérémonie s'est terminée aux cris de : « Vive l'armée ! Vive la République ! » Aucun incident n'est à signaler."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Chambre des Députés",
    "title": "Séance du 19 janvier 1900",
    "summary": "La Chambre a clôturé la discussion du budget des Beaux-Arts et celui des chemins de fer de l'État, tout en adoptant une proposition de loi concernant la situation des chauffeurs et mécaniciens.",
    "paragraphs": [
      "La Chambre a terminé la discussion du budget des Beaux-Arts. Des crédits ont été votés afin de favoriser les essais dramatiques et musicaux. M. Georges Leygues, ministre, a accepté la proposition pour l'exercice 1901.",
      "La Chambre a ensuite abordé la discussion du budget des chemins de fer de l'État. M. Bauddin, ministre des Travaux publics, a demandé la clôture de la discussion générale, ce qui fut acté.",
      "M. Zevort a déposé une proposition de résolution concernant le projet de loi sur la situation des chauffeurs et mécaniciens, laquelle a été adoptée par la Chambre.",
      "Le budget des chemins de fer de l'État a été définitivement adopté."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Assassinat à Barcelone",
    "summary": "Le docteur Saint-Clair, médecin originaire de Saint-Victoy, a été tragiquement assassiné à Barcelone, abattu de deux coups de revolver alors qu'il regagnait son domicile.",
    "paragraphs": [
      "Barcelone, 19 janvier. Le docteur Saint-Clair, de Saint-Victoy, qui soignait des blessés dans la cité, a été tué de deux coups de revolver au moment où il rentrait chez lui."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Histoire",
    "title": "Le passé de Belle-Île",
    "summary": "Retour sur l'histoire militaire et pénitentiaire de Belle-Île, depuis le gouvernorat de Nicolas Fouquet jusqu'à son utilisation comme lieu de déportation pour les insurgés de la Commune.",
    "paragraphs": [
      "À dater de cette époque, la citadelle de Belle-Île, érigée en place frontière, fut dotée d'un gouverneur, d'un état-major et d'une garnison.",
      "Le fort Fouquet et l'hôpital militaire demeurent à Belle-Île les témoins du passage du célèbre surintendant. La fondation de l'hôpital passe pour avoir été une œuvre particulière de la marquise de Castille, mère de Nicolas Fouquet. Elle habitait l'île et, selon la tradition populaire, elle préparait des remèdes et pansait les pauvres, ayant mis au point des onguents réputés dont le nom lui survit. Elle s'éteignit en 1691, à l'âge de quatre-vingt-onze ans.",
      "Ce que l'on appelle encore au Palais les « châteaux Fouquet » n'est plus aujourd'hui que l'habitation réservée aux gardiens du pénitencier voisin.",
      "L'établissement ou l'agrandissement de ce pénitencier date des journées de juin. Un grand nombre d'insurgés furent envoyés à Belle-Île, où l'on dut construire de vastes baraquements pour les accueillir. Ces édifices ont par la suite servi au séjour des forçats du bagne. On y recueillit également les Parisiens condamnés à la déportation à la suite des événements de la Commune de 1871."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Mort de M. de Grandin",
    "summary": "La rédaction a le regret d'annoncer le décès de M. de Grandin, conseiller-maître à la Cour des comptes et ancien préfet de Seine-et-Oise, survenu dans sa soixante-unième année.",
    "paragraphs": [
      "Nous avons le regret d'apprendre la mort de M. de Grandin, conseiller-maître à la Cour des comptes, décédé la nuit dernière dans sa soixante-unième année.",
      "M. de Grandin avait appartenu pendant près de vingt ans à l'administration préfectorale. Il avait été, en 1871, sous-préfet de Mantes, puis préfet du Gard et, en dernier lieu, de Seine-et-Oise, poste qu'il avait quitté l'an dernier pour intégrer la Cour des comptes."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Obsèques de M. Chéris",
    "summary": "Les obsèques de M. Chéris, sénateur de l'Aube et beau-père de MM. Ernest et François Carnot, ont été célébrées en l'église Saint-Pierre de Chaillot, en présence de nombreuses personnalités.",
    "paragraphs": [
      "Les obsèques de M. Chéris, sénateur de l'Aube et beau-père de MM. Ernest et François Carnot, ont eu lieu hier matin en l'église Saint-Pierre de Chaillot.",
      "Parmi la très nombreuse assistance, on remarquait la délégation du Sénat ainsi que les représentants du Président de la République et du président du Conseil. La dépouille sera transportée à Grasse, où aura lieu l'inhumation."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Chronique des Transports",
    "title": "Chemin de fer électrique du bois de Boulogne",
    "summary": "Le préfet de la Seine et le préfet de police ont autorisé l'ouverture au public du chemin de fer électrique du bois de Boulogne, reliant la porte Maillot à l'entrepôt, dès ce samedi.",
    "paragraphs": [
      "Le préfet de la Seine et le préfet de police viennent d'autoriser l'exploitation publique du chemin de fer électrique du bois de Boulogne à partir de ce samedi.",
      "La ligne dessert la porte Maillot, le Jardin d'acclimatation, Madrid, Bagatelle, le pont des Puteaux, Longchamp, Suresnes, pour aboutir à l'entrepôt."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Distinctions pour le train du Creuso",
    "summary": "Le ministre de l'Intérieur a décerné des distinctions honorifiques aux agents ayant empêché une catastrophe ferroviaire lors de l'éboulement du tunnel du Creuso.",
    "paragraphs": [
      "À l'occasion de l'éboulement survenu il y a une quinzaine de jours au tunnel du Creuso, sur la ligne de Lyon à Genève, le ministre de l'Intérieur a accordé des distinctions honorifiques aux agents du train qui, par leur courage et leur devoir, ont évité une catastrophe ferroviaire."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Sciences",
    "title": "Conférence sur le Baguirmi",
    "summary": "M. Pierre Prins a présenté à la Société de géographie le récit de son séjour en qualité de résident auprès du sultan du Baguirmi et ses observations sur les mœurs des Sarouas.",
    "paragraphs": [
      "M. Pierre Prins a fait hier soir, à la Société de géographie, une conférence sur le séjour d'une année qu'il effectua, en qualité de résident, auprès de Mohamed-Abd-er-Rhaman-Gourang, sultan du Baguirmi.",
      "M. Pierre Prins a conté très simplement son accompagnement de l'explorateur belge de Behagle et les renseignements précieux qu'il a réunis sur les mœurs des Sarouas."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un record de vitesse ferroviaire",
    "summary": "Aux États-Unis, un train du Lake Shore a battu un record de vitesse en atteignant Cleveland avec deux minutes d'avance malgré une violente tempête et un convoi chargé.",
    "paragraphs": [
      "Un record de vitesse vient d'être établi, dans des circonstances particulièrement difficiles, par un train du Lake Shore, aux États-Unis.",
      "Parti de Buffalo le 24 janvier, le convoi, composé de huit grandes voitures bondées de voyageurs, est arrivé en gare de Cleveland avec deux minutes d'avance sur l'horaire prévu, malgré un parcours de 183 milles effectué en pleine tempête."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Manifestation d'étudiants",
    "summary": "Une cinquantaine d'étudiants de l'école des Arts décoratifs ont manifesté hier soir. Le rassemblement, formé pour exprimer un mécontentement, a été dispersé par les forces de l'ordre sur le boulevard Saint-Germain.",
    "paragraphs": [
      "Une manifestation d'étudiants s'est produite hier soir à la sortie du cours de dessin de l'école des Arts décoratifs.",
      "Voulant exprimer leur mécontentement à l'égard de divers membres du personnel, une cinquantaine d'élèves ont organisé un chahut. La police est intervenue pour disperser le groupe qui s'était reformé sur le boulevard Saint-Germain avant de se disperser définitivement."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Justice",
    "title": "Affaire d'un agent d'affaires escroc",
    "summary": "Une dame, privée des arrérages de ses rentes, a découvert la fuite de son mandataire. Le parquet a ouvert une instruction contre cet agent d'affaires du XVIe arrondissement ayant pris la fuite.",
    "paragraphs": [
      "Depuis huit années, une dame avait confié la gérance de ses biens à un nommé M., agent d'affaires habitant le XVIe arrondissement.",
      "N'ayant pas reçu les arrérages de ses rentes et attendant vainement la venue de son mandataire, elle alla avant-hier sonner à sa porte. Elle apprit que M. avait quitté furtivement la ville il y a quelques jours. Le parquet, saisi par la dame, a ordonné une instruction."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enquête sur un décès mystérieux",
    "summary": "Un individu, nommé M., a été arrêté dans le cadre de l'enquête sur le décès suspect du sieur Bourgeois. L'autopsie n'a pas encore permis d'établir les causes réelles de la mort.",
    "paragraphs": [
      "Un nommé M. a été arrêté car il était suspecté dans la mort d'un sieur Bourgeois, qui succomba une heure plus tard dans un état de grande faiblesse. L'instruction continue, le médecin de la Morgue ayant pratiqué une autopsie sans pouvoir, pour l'heure, établir les causes réelles de la mort."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame rue de Meaux",
    "summary": "Une dispute rue de Meaux a tourné au drame lorsqu'une femme a frappé au couteau le bébé de son interlocutrice. L'agresseuse a été appréhendée par les autorités après cet acte de violence.",
    "paragraphs": [
      "Vers cinq heures du soir, une jeune femme, Mme Chauvet, passait rue de Meaux et donnait le sein à son enfant. Jeanne Roillet, domiciliée 6, passage Dubois, eut avec elle une vive discussion pour un motif futile.",
      "Au cours de la dispute, Jeanne Roillet, saisissant un couteau, voulut frapper Mme Chauvet, mais atteignit le bébé. La lame s'enfonça dans les reins de l'enfant. L'agresseuse a été aussitôt arrêtée."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un cocher volé",
    "summary": "Un individu a refusé de régler sa course de fiacre après un long trajet dans Paris. Tentant d'échapper au cocher, il a glissé sous les roues de la voiture et a été grièvement blessé.",
    "paragraphs": [
      "Un individu, après avoir fait effectuer un long trajet en fiacre à travers Paris, a refusé de payer le cocher, prétextant ne pas avoir d'argent sur lui. Il a tenté de fuir à pied, mais a glissé sous les roues de la voiture, se blessant grièvement lors de sa manœuvre."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Découverte d'un nouveau-né",
    "summary": "Une concierge de la rue Denfert-Rochereau a découvert hier matin un nouveau-né abandonné devant son logement. L'enfant a été confié aux soins de l'hospice des Enfants-Assistés.",
    "paragraphs": [
      "La concierge de l'immeuble du 20, rue Denfert-Rochereau, a trouvé hier matin, derrière la porte de son logement, un paquet contenant un superbe nouveau-né, vivant. L'enfant a été immédiatement transporté au commissariat, puis confié à l'hospice des Enfants-Assistés."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendies à Paris",
    "summary": "Deux incendies ont mobilisé les pompiers hier à Paris : un sinistre rue de la Santé, rapidement maîtrisé, et un feu plus important dans des ateliers de tapisserie rue des Cordelières.",
    "paragraphs": [
      "Un commencement d'incendie s'est déclaré hier matin, rue de la Santé, dans le logement de Mme Pérat. Les pompiers ont réussi à éteindre le feu après trois quarts d'heure de travail.",
      "Dans la soirée d'hier, un second incendie a éclaté dans les ateliers de tapisserie situés au 7, rue des Cordelières. Les dégâts y sont très importants."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Justice",
    "title": "Procès de l'espion Vidal",
    "summary": "La Cour de cassation a alourdi la peine de l'espion Vidal, arrêté durant les grandes manœuvres, le condamnant à trois ans de prison et 300 francs d'amende malgré ses protestations d'innocence.",
    "paragraphs": [
      "L'espion Vidal, arrêté lors des grandes manœuvres, a vu sa peine alourdie par la Cour de cassation. Il a été condamné à trois ans de prison et 300 francs d'amende.",
      "Vidal a énergiquement protesté de son innocence au moment du prononcé du jugement."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Autour de Paris",
    "summary": "Une série de découvertes tragiques a marqué la région parisienne, avec des corps retrouvés à Argenteuil, Suresnes et Saint-Ouen, ainsi qu'une agression violente à Pantin.",
    "paragraphs": [
      "À Argenteuil, on a découvert la nuit dernière le corps d'un homme. À Suresnes, un corps a été retiré de la Seine. À Saint-Ouen, un cadavre a été repêché dans les eaux.",
      "À Pantin, un charretier a été victime d'une agression violente commise par son patron."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Matinées de demain dimanche",
    "summary": "Le programme des matinées théâtrales et musicales pour ce dimanche : des classiques à la Comédie-Française et à l'Opéra-Comique, ainsi que de grands concerts symphoniques au Conservatoire, au Châtelet et à la République.",
    "paragraphs": [
      "Comédie-Française : Froufrou.",
      "Opéra-Comique : L'Irato et Orphée.",
      "Lyrique-Renaissance : Le Voyage en Chine.",
      "Odéon, Vaudeville, Gymnase, Nouveautés, Variétés, Palais-Royal, Bouffes-Parisiens, Gaité, Porte Saint-Martin, Athénée, théâtre Antoine, Ambigu, Déjazet : mêmes spectacles que le soir.",
      "Conservatoire : Concert de la Société. Symphonie avec chœur (Beethoven) ; la Fuite en Égypte (Berlioz), par M. Lafitte ; ouverture de Fidelio (Beethoven).",
      "Châtelet : Concert Colonne. Ouverture du Roi d'Ys (Lalo). Symphonie pastorale (Beethoven). Concerto dans le style hongrois, première partie (Joachim), par M. Hugo Heermann. La Procession nocturne (Rabaud). Scherzo en ut mineur (Tschaïkowsky), orchestré par Glazounov. Adagio du concerto (Spohr), par M. Hugo Heermann. Cantei (Albeniz).",
      "Théâtre de la République : Concert Lamoureux, dirigé par M. Chevillard. Ouverture de Leonore, n° 3 (Beethoven). Antar, symphonie en quatre parties (Rimsky-Korsakov). Air d'Hélène (Beethoven), par Mlle Marie Delna. Sur la mer lointaine (Léon Moreau). Le Vénusberg de Tannhœuser (Wagner). Les Troyens (Berlioz), troisième scène du quatrième acte ; Didon (Mlle Marie Delna), ouverture de Weber."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Spectacles et Loisirs",
    "title": "Causeries et Conférences",
    "summary": "Le programme des conférences de ce jour annonce une causerie de M. Léo Claretie à l'Odéon et une conférence sur les auteurs gais par M. Franc-Nohain au théâtre du Gymnase.",
    "paragraphs": [
      "Aujourd'hui, à cinq heures, à l'Odéon : La Grenouille et les Capucins, causerie de M. Léo Claretie.",
      "Au Gymnase, à 4 heures 3/4 : les Auteurs gais, conférence par M. Franc-Nohain."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Spectacles",
    "title": "Informations théâtrales diverses",
    "summary": "Actualités théâtrales parisiennes : premier bal masqué à l'Opéra, représentation populaire de Lucie de Lammermoor au théâtre Lyrique et reprise de Paillasse avec M. Henry Krauss.",
    "paragraphs": [
      "Ce soir, premier bal masqué à l'Opéra. Ouverture des portes à minuit moins le quart.",
      "Au théâtre Lyrique, lundi aura lieu une représentation populaire, à prix réduits, de Lucie de Lammermoor, avec Mlle Jeanne Leclerc.",
      "Le théâtre de la République a obtenu l'autorisation de reprendre Paillasse, le drame célèbre de d'Ennery et Marc Fournier, créé par Frédérick Lemaître. C'est M. Henry Krauss qui reprendra ce rôle important."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Faits Divers",
    "title": "Succès de M. Huguenet",
    "summary": "Compte-rendu de la prestation remarquée de M. Huguenet dans la pièce Le Conseil judiciaire de Motet et Bisson.",
    "paragraphs": [
      "Vif succès, dans le Conseil judiciaire de Motet et Bisson, pour M. Huguenet."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Tragédies de l'Amour",
    "summary": "Extrait du feuilleton « Les Tragédies de l'Amour » : les tensions s'accentuent au sein de la maison Villefort suite aux intrigues évoquées par M. de Vivarez.",
    "paragraphs": [
      "XVII (suite) : Dernières angoisses.",
      "Le vieillard répliqua, très net : Pardieu ! ma sœur, je l'épouserais à coup sûr si j'avais seulement trente ans de moins et si elle voulait de moi. Voilà une intrigante qui a bouleversé tout dans cette maison.",
      "Colette avait demandé à M. de Vivarez : Puis-je parler à madame de Villefort ? J'ai prévenu ma sœur. Elle ne vous recevra pas."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Spectacles et Divertissements",
    "title": "Programme des concerts et music-halls",
    "summary": "Soirée riche en événements aux Folies-Bergère, à l'Olympia, au Nouveau-Cirque, au Casino de Paris et au Moulin-Rouge, entre luttes, attractions japonaises et grands défilés.",
    "paragraphs": [
      "La seconde rencontre entre Pytlasinski, l'admirable champion russe, et le terrible Kara-Ahmed, a lieu ce soir, samedi, aux Folies-Bergère.",
      "Ce soir, à l'Olympia, début de la célèbre troupe japonaise : les onze Akimatos.",
      "Les amateurs de force musculaire feront bien d'aller au Nouveau-Cirque admirer le superbe athlète qui fait tourner avec ses pieds une sorte de balancier.",
      "Ce soir, au Casino de Paris, grande soirée de gala.",
      "À onze heures et demie, ce soir, au Moulin-Rouge, le superbe défilé galant composé par Rœdel et intitulé Le cortège de Vénus."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Courrier Orphéonique",
    "title": "Concours et Festivals de musique",
    "summary": "Panorama des festivités musicales prévues en 1900 : concours à Bolbec, Nanterre et Lens, festival au Crotoy, ainsi que les préparatifs du grand concours des orphéons pour l'Exposition universelle.",
    "paragraphs": [
      "La ville de Bolbec (Seine-Inférieure) organise, pour le dimanche 3 juin prochain, un grand concours d'orphéons, de musiques d'harmonie et de fanfares.",
      "Un festival de musique aura lieu au Crotoy le dimanche 3 juin 1900.",
      "Les délégués des sociétés chorales de la Seine se sont réunis dernièrement au ministère des Beaux-Arts pour préparer le concours des orphéons de l'Exposition universelle.",
      "La Fanfare ouvrière de Lens organise, pour le 15 avril, un concours international de solistes.",
      "Il est question d'organiser à Nanterre un concours musical le 1er juillet. La municipalité d'Auchy-lez-la-Bassée prépare, pour le dimanche 29 avril, un festival d'orphéons."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Communications Diverses",
    "title": "Réunions syndicales et conférences",
    "summary": "Agenda des réunions professionnelles à la Bourse du travail et annonce des conférences de M. Louis Vigouroux sur l'Afrique du Sud et de M. Georges Toudouze sur la marine au Musée social.",
    "paragraphs": [
      "Ce soir, à la Bourse du travail, se tiendront les réunions des typographes de la ville de Paris, des serruriers en bâtiment, des paveurs, des tourneurs, etc.",
      "Mardi 23 janvier, sous la présidence de M. A. Ribot, M. Louis Vigouroux donnera, au Musée social, une conférence sur les questions sociales de l'Afrique du Sud.",
      "La Ligue maritime donnera, le mardi 23 janvier, une conférence par M. Georges Toudouze sur la marine et la défense des côtes."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Informations Officielles",
    "title": "Examens et Concours",
    "summary": "Calendrier des échéances administratives et académiques : annonce du concours pour le surnumérariat des contributions indirectes en mai et rappel des dates de dépôt des dossiers pour la Faculté des lettres.",
    "paragraphs": [
      "Un concours pour le surnumérariat dans l'administration des contributions indirectes aura lieu le 5 mai prochain.",
      "Les étudiants de la Faculté des lettres devront remettre leur dossier au secrétariat de la Faculté le 30 janvier ou le 8 février."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Marché aux Veaux",
    "title": "Cours de la Villette",
    "summary": "Compte rendu du marché de la Villette en date du 19 janvier : 867 veaux engraissés ont été commercialisés avec une tendance à la hausse des prix et une activité soutenue.",
    "paragraphs": [
      "La Villette, vendredi 19 janvier : 867 veaux engraissés ont été vendus. La vente est meilleure et les prix se montrent plus fermes."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Informations Commerciales",
    "title": "Commerce des vins",
    "summary": "État du marché viticole : persistance du calme dans l'Armagnac et l'Hérault, avec des cours de 25 à 28 francs le sacre à Condom et une faible activité d'achat observée à Bercy.",
    "paragraphs": [
      "Dans l'Armagnac, les affaires sont très calmes. À Condom, on paie le vin de 25 à 28 francs le sacre.",
      "Dans l'Hérault, le calme domine. À Bercy-Entrepôt, le commerce en gros n'a pas encore repris ses achats."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Informations Maritimes",
    "title": "Départs et arrivées des navires",
    "summary": "Le navire « Le Caroline » a pris le large depuis Rio de Janeiro à destination de la Nouvelle-Orléans. De son côté, « L'Amiral-Courbet » a quitté Vigo le 17 pour poursuivre sa traversée vers le Brésil.",
    "paragraphs": [
      "Le Caroline est parti de Rio de Janeiro pour la Nouvelle-Orléans.",
      "L'Amiral-Courbet, venant du Havre, est parti de Vigo le 17 pour le Brésil."
    ]
  }
];
