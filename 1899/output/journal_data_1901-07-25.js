// Date: 1901-07-25
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-07-25 (Version Restaurée, 53 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Publicité",
    "title": "La Griffe d'Or - Nouveau Roman",
    "summary": "Le Petit Parisien annonce la parution imminente de \"La Griffe d'Or\", un drame familial inédit écrit par Georges Maldague, auteur de \"Rose Sauvage\" et \"Le Mal d'Amour\".",
    "paragraphs": [
      "Le Petit Parisien publiera très prochainement La Griffe d'Or, un grand roman inédit de Georges Maldague.",
      "La Griffe d'Or est un drame poignant de famille, mettant en scène des personnages curieux et vivants, écrit par l'auteur de Rose Sauvage et le Mal d'Amour."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le filon aurifère de Clairac",
    "summary": "À Clairac, dans le Lot-et-Garonne, la découverte de paillettes d'or sur une propriété suscite l'enthousiasme, mais les autorités conseillent de ne pas délaisser les travaux agricoles.",
    "paragraphs": [
      "Un habitant de Clairac, dans le Lot-et-Garonne, a découvert un filon aurifère sur sa propriété, au pied de la côte du Moulin. Des paillettes dorées ont été identifiées par l'horloger local comme étant de l'or.",
      "La nouvelle a suscité un grand enthousiasme dans la région, bien que la prudence reste de mise quant à la réalité du filon. L'histoire rappelle les découvertes de Californie, mais souligne que la France possède des gisements souvent épuisés et peu rentables.",
      "L'article conseille aux habitants de ne pas abandonner leurs activités agricoles traditionnelles pour une fièvre de l'or hypothétique et prématurée."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Histoire",
    "title": "La fièvre de l'or : Californie et au-delà",
    "summary": "Rappel historique sur les dangers et les désillusions tragiques liés à la recherche de l'or, de la ruée vers l'or en Californie aux risques mortels persistants au Soudan.",
    "paragraphs": [
      "Le rappel historique de la découverte d'or en Californie en 1848 par le capitaine Sutter illustre la transformation rapide d'une région en Eldorado, marquée par l'afflux massif de populations, la spéculation et une période de désordre social.",
      "D'autres exemples, comme l'Australie, le Transvaal et l'Alaska, montrent les coûts humains et les désillusions tragiques liés à la recherche de l'or. La quête se poursuit même aujourd'hui au Soudan, où des peuplades comme les Malinkés risquent leur vie dans des puits dangereux."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Deux Aimées - Deuxième Partie",
    "summary": "Alors que les obsèques de la marquise de Juversac se préparent, Pauline, séduite par Hervé, cherche par tous les moyens à rester auprès de lui en manipulant sa cousine.",
    "paragraphs": [
      "Philippe a tout organisé pour les obsèques de la marquise de Juversac, mais Pauline hésite à quitter Paris à cause d'Hervé.",
      "Après une rencontre humiliante avec Hervé, Pauline est prête à tout oublier après avoir reçu une lettre passionnée de ce dernier. Elle s'apprête à le revoir et à manipuler les circonstances pour rester auprès de lui tout en plaçant sa cousine, Mercédès de la Hountalade, comme dame de compagnie."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une mégère à Limoges",
    "summary": "Une violente altercation survenue le 24 juillet boulevard Carnot à Limoges a conduit une jeune lingère à poignarder son adversaire avec une paire de ciseaux.",
    "paragraphs": [
      "Une vive querelle a éclaté le 24 juillet boulevard Carnot à Limoges entre Mme Dauriat et Mlle Marie Lafargue.",
      "Dans un accès de surexcitation, la jeune lingère a poignardé son adversaire avec des ciseaux. La victime a été secourue et ses jours ne semblent pas en danger."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Marine",
    "title": "Le sous-marin Morse : expériences de navigation",
    "summary": "Le submersible Morse a réalisé une navigation probante entre Cherbourg et Le Havre pour éprouver ses capacités face à la canonnière Cocyte, malgré une mer houleuse qui a entravé le tir des torpilles.",
    "paragraphs": [
      "Le sous-marin Morse a effectué une traversée de Cherbourg au Havre afin de mener des exercices tactiques d'envergure contre la canonnière cuirassée Cocyte.",
      "L'exercice a pleinement démontré la tenue de mer du submersible dans une houle agitée, bien que les conditions météorologiques aient empêché le lancement effectif des torpilles. Cette expérience confirme que le sous-marin demeure un outil de défense des plus redoutables, en dépit des caprices de l'Océan."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame de la rue Pajol",
    "summary": "Un drame passionnel s'est noué rue Pajol, dans le quartier de la Chapelle, où une ouvrière nommée Gabrielle David a été sauvagement poignardée par son ancien amant, le nommé Julien Lacourt.",
    "paragraphs": [
      "Une sanglante tentative d'assassinat a eu lieu rue Pajol, au cœur du quartier de la Chapelle. Gabrielle David, une ouvrière, a été grièvement poignardée par son ancien amant, le nommé Julien Lacourt.",
      "Le criminel, mû par une jalousie forcenée et des différends financiers, a été promptement appréhendé par les gardiens de la paix alors qu'il tentait de prendre la fuite. La victime, en un état inquiétant, a été transportée d'urgence à l'hôpital Lariboisière."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Médecine",
    "title": "Le Congrès sur la tuberculose à Londres",
    "summary": "Au congrès médical de Londres, le docteur Koch conteste la transmission bovine de la tuberculose. Une thèse vigoureusement réfutée par lord Lister au milieu des débats scientifiques.",
    "paragraphs": [
      "Un congrès médical international se tient actuellement à Londres afin d'organiser la lutte contre la tuberculose. Le docteur Koch a suscité un vif émoi au sein de l'assemblée en affirmant que la maladie ne se transmet point de l'animal à l'homme par voie alimentaire.",
      "Cette théorie, en contradiction directe avec les connaissances scientifiques admises, a été accueillie avec un profond scepticisme par lord Lister. Le congrès insiste néanmoins sur la nécessité capitale des sanatoriums et des mesures prophylactiques pour enrayer ce terrible mal."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Série d'incendies dans les provinces",
    "summary": "Une série d'incendies ravage les provinces : une filature à la Madeleine, treize habitations à Saint-Véran et le château du Bech sont anéantis, laissant les propriétaires face à des pertes considérables.",
    "paragraphs": [
      "Des incendies violents ont été rapportés en divers points du territoire : à la Madeleine, où une filature de coton a été la proie des flammes ; à Saint-Véran, dans les Hautes-Alpes, où treize maisons ont été réduites en cendres ; ainsi qu'au château du Bech, en Corrèze.",
      "Ces sinistres, survenus pour des causes diverses, ont occasionné des pertes matérielles considérables pour des propriétaires qui, bien souvent, se trouvent insuffisamment assurés contre de tels désastres."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Colonies",
    "title": "Voyage du général Galliéni à Madagascar",
    "summary": "En inspection à Diégo-Suarez, le général Galliéni a constaté la solidité des nouvelles installations militaires malgaches, renforçant ainsi la position stratégique et commerciale de la colonie.",
    "paragraphs": [
      "Le général Galliéni a effectué une visite dans le nord de Madagascar, et plus particulièrement à Diégo-Suarez, où il a procédé à une inspection minutieuse des nouvelles installations militaires et portuaires.",
      "La rade est désormais considérée comme imprenable grâce aux batteries côtières récemment établies. Le gouverneur a, par ailleurs, favorisé l'essor du commerce et l'amélioration de la navigation maritime par l'installation de nouveaux phares."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le mort-vivant de Boussac",
    "summary": "À Boussac, M. Jean Granet, un cultivateur déclaré mort après une violente chute, a provoqué une stupeur générale en reprenant connaissance au moment précis où l'on s'apprêtait à sceller son cercueil.",
    "paragraphs": [
      "M. Jean Granet, cultivateur à Boussac, a été pris pour mort après une chute violente survenue dans ses champs. Alors que les préparatifs de la mise en bière étaient en cours, il s'est éveillé brusquement, terrifiant l'assistance présente avant de chercher à s'enfuir."
    ]
  },
  {
    "id": 12,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Résultats des élections départementales",
    "summary": "Le scrutin départemental confirme l'ascendant républicain. Hormis quatre départements conservateurs, les conseils généraux se rallient désormais à la politique gouvernementale.",
    "paragraphs": [
      "Les résultats des scrutins départementaux confirment une victoire nette des républicains sur les partis d'opposition, avec cinquante sièges supplémentaires conquis par le camp gouvernemental.",
      "La majorité des conseils généraux passe sous contrôle républicain, à l'exception de quatre départements restés monarchistes. Ces élections marquent ainsi un renforcement significatif du soutien au ministère."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "Bilan des élections législatives",
    "summary": "Le bilan des élections de juillet souligne la dynamique républicaine. Plusieurs modérés ont cédé face à des radicaux, illustrant une volonté de changement politique confirmée par le succès de personnalités comme M. Bernard.",
    "paragraphs": [
      "Le scrutin confirme une forte dynamique républicaine. Il ne saurait être question de recul, même dans les régions où les conservateurs étaient établis de longue date sans concurrence notable.",
      "Il est à signaler que, sur de nombreux points, des notabilités du parti progressiste ont succombé pour faire place à des hommes d'opinion plus avancée. Ainsi, dans le Rhône, M. Repiquet, sénateur libéral, et dans le Doubs, M. Rambaud, sénateur progressiste et ancien ministre, ont été battus, le premier par un candidat radical et le second par M. Bernard, sénateur républicain du même département.",
      "L'élection de M. Bernard, obtenue avec une majorité confortable, a été réalisée sur le terrain politique. Voici comment, à la veille du scrutin, M. Bernard s'adressait aux électeurs de Rouljans : « Je suis l'ami du ministère de défense et d'action républicaines. M. Rambaud en est l'adversaire. Entre ces deux politiques, vous choisirez. »",
      "Cette élection est particulièrement significative. Une autre consultation, celle de M. Paul Loubet, fils aîné du Président de la République dans le canton de Grignan (Drôme), a eu le rare mérite de grouper la presque unanimité des suffrages exprimés.",
      "Dans la Loire, M. Reymond, sénateur républicain, n'était pas candidat, pas plus que M. Pierre Baudin, ministre des Travaux publics, à qui ses électeurs de l'Ain ont toutefois accordé un certain nombre de suffrages, tout en élisant un radical, M. Blanc. Le docteur Baudin, père du ministre, a été réélu à une forte majorité dans le même département.",
      "M. Tramu, député, n'était pas candidat dans le Doubs ; de nombreux suffrages se sont néanmoins portés sur son nom.",
      "Dans la Mayenne, la situation est restée inchangée, mais l'élection proclamée du duc de Broglie est contestée par M. Doisneau, républicain, qui se prétend élu. M. Couyba, député de la Haute-Saône, conteste également l'élection de son concurrent M. Outhenin-Chalandre, sénateur conservateur.",
      "Le conseil général de la Sarthe conserve sa majorité républicaine sans changement notable. À signaler, toutefois, l'échec subi à Mamers, dans la circonscription de M. Caillaux, ministre des Finances, concernant la candidature d'opposition de M. Fleury au conseil d'arrondissement.",
      "Les Hautes-Pyrénées, enfin, ont élu quatre républicains nouveaux. M. Baudens, ancien sénateur modéré, a été battu par M. Mousset, républicain. MM. Achille Fould et Edmond Blanc, députés modérés, ont été remplacés par des radicaux.",
      "Nous avions donc raison de constater, dès le lendemain du scrutin, que les élections de juillet marquaient un mouvement continu dans le sens d'une politique nettement républicaine."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Informations Politiques",
    "title": "Commission du Budget et Travaux publics",
    "summary": "La commission du budget rétablit les crédits de l'Agriculture. L'examen se poursuit avec les services pénitentiaires et une audition du ministre des Travaux publics.",
    "paragraphs": [
      "M. Jean Dupuy, ministre de l'Agriculture, a été entendu hier par la commission du budget au sujet des réductions de crédits opérées sur le budget de son département ministériel.",
      "Après avoir entendu les explications fournies par le ministre, la commission a rétabli les crédits précédemment réduits ou supprimés.",
      "La commission a ensuite commencé l'examen du budget de l'administration pénitentiaire. Elle a décidé la suppression de l'indemnité de 500 francs accordée chaque année à un certain nombre de desservants exerçant leur ministère dans les prisons.",
      "La commission terminera aujourd'hui l'examen des services pénitentiaires et entamera le budget du ministère des Colonies. Elle entendra M. Baudin, ministre des Travaux publics, au sujet des chemins de fer de l'État."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Social",
    "title": "Le travail dans les mines",
    "summary": "Le ministère des Travaux publics a reçu une délégation de la fédération nationale des mineurs afin de débattre des questions relatives à la durée du travail dans les mines.",
    "paragraphs": [
      "La commission chargée de l'étude des questions relatives à la durée du travail dans les mines a entendu hier, à trois heures, au ministère des Travaux publics, les délégués de la fédération nationale des mineurs, MM. Cotte, secrétaire général, Joucaviel, Evrard, Burat et Merzet."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "La Guerre au Transvaal",
    "title": "Victoires Boers et rapports militaires",
    "summary": "Le front sud-africain reste critique : embuscades contre les convois britanniques, exécutions de rebelles et situation humanitaire préoccupante dans les camps de reconcentration marquent le conflit.",
    "paragraphs": [
      "Londres, 24 juillet. Lord Kitchener télégraphie de Pretoria : le commando de Scheppers a intercepté et brûlé, dans la matinée du 21 juillet, à huit milles au nord de Beaufort-West, un train venant du Cap transportant des approvisionnements et des soldats. Les Britanniques déplorent 3 tués et 18 blessés. Une enquête est ouverte.",
      "Le commando Kruitzinger a attaqué au lever du jour, le 21 courant, dans les montagnes près de Craddock, 300 soldats anglais commandés par le colonel Crabbe. Privés de leurs chevaux, les Anglais ont dû se replier sur Mortimer après une journée de combat. Leurs pertes sont jugées légères.",
      "Middleburg, 23 juillet. Les troupes anglaises ont surpris dimanche le campement du commando de Categan. Elles ont capturé dix hommes, 105 chevaux, 70 fusils, un millier de cartouches et une grande quantité de couvertures.",
      "Londres, 24 juillet. À la Chambre des communes, M. Brodrick a annoncé l'annulation des grandes manœuvres d'automne en Angleterre, en raison de la mobilisation massive des troupes dans le Sud de l'Afrique.",
      "Le Daily Express souligne que le conflit semble désormais se jouer contre la colonie du Cap elle-même plutôt que contre le Transvaal ou l'État d'Orange, la situation paraissant préoccupante sur le territoire sous administration britannique.",
      "Londres, 24 juillet. La liste quotidienne des pertes militaires fait état de 1 tué, 13 blessés, 10 morts de maladie et 30 prisonniers relâchés.",
      "Burghersdorp, 23 juillet. Un rebelle a été pendu hier matin. Somerset-East, 24 juillet. Un insurgé de la localité a été exécuté par pendaison aujourd'hui.",
      "D'après un document parlementaire, 85 410 blancs et 23 489 indigènes étaient internés au mois de juin dans les camps de reconcentration du sud de l'Afrique. Durant cette période, 777 blancs et 5 indigènes ont succombé."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Condoléances du Président Loubet à M. Kruger",
    "summary": "Le Président de la République, M. Loubet, a exprimé officiellement ses condoléances à M. Kruger, par l'intermédiaire de la légation française à La Haye, suite au décès de son épouse.",
    "paragraphs": [
      "Amsterdam, 24 juillet. Le Telegraaf annonce que le Président Loubet a adressé aujourd'hui à M. Kruger, par l'entremise de la légation française à La Haye, l'expression de sa profonde sympathie à l'occasion du décès de Mme Kruger."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Économie",
    "title": "Une conférence financière sur la guerre",
    "summary": "De hauts responsables financiers britanniques et allemands ont tenu une conférence secrète pour discuter de l'impact désastreux de la guerre sud-africaine sur le commerce et l'industrie européenne.",
    "paragraphs": [
      "Londres, 24 juillet. Les plus grands financiers du Royaume-Uni ont tenu, il y a quelques jours, une conférence secrète à laquelle participaient également des industriels et des banquiers allemands.",
      "L'un des délégués allemands a exposé la situation économique alarmante imposée à l'industrie et au capitalisme par la guerre sud-africaine, affirmant que les négociants de l'Empire étaient résolus à explorer toutes les voies pour mettre fin aux hostilités.",
      "Les financiers britanniques ont reconnu que ce conflit constituait une source de ruine. Un éminent acteur de la Bourse a estimé la perte pour la fortune anglaise à douze milliards, incluant les dépenses militaires et les pertes directes liées au recul des transactions.",
      "Tous ont conclu à l'impérieuse nécessité de clore le conflit. Les représentants allemands se sont engagés à user de leur influence pour favoriser une solution honorable."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Étranger",
    "title": "Événements de Chine et déplacement du maréchal de Waldersee",
    "summary": "Des tensions religieuses éclatent au Kiang-Si et le Yang-Tsé déborde, tandis que le maréchal de Waldersee, en route pour la Chine, traverse le canal de Suez à bord de la Gera.",
    "paragraphs": [
      "Shanghai, 24 juillet. Des tensions ayant été signalées entre convertis catholiques et protestants dans le Kiang-Si, un navire anglais et la canonnière française Décidée ont été dépêchés à Nan-Tchang. Par ailleurs, le Yang-Tsé a débordé près de N'gan-King, provoquant des dégâts considérables.",
      "Port-Saïd, 24 juillet. Le paquebot allemand la Gera, transportant le feld-maréchal de Waldersee, a fait escale ici. Lors de sa traversée du canal de Suez, il a croisé un navire français transportant des troupes, échangeant des vivats fraternels."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "La bagarre de Tien-Tsin",
    "summary": "Un soldat rapatrié témoigne d'un affrontement meurtrier à Tien-Tsin entre militaires français et anglais, ayant causé plusieurs pertes malgré l'intervention des autorités alliées.",
    "paragraphs": [
      "Toulon, 24 juillet. Un soldat rapatrié, témoin de la bagarre survenue à Tien-Tsin, a raconté qu'au cours d'un affrontement, des soldats anglais tuèrent deux militaires français et blessèrent plusieurs Allemands.",
      "Une patrouille anglaise ayant ouvert le feu sur des soldats français, ceux-ci exigèrent des explications. Le sous-officier britannique ordonna la mise en joue. Acculés dans une ruelle, les Français et les Allemands furent pris pour cible ; le soldat Lecomte fut blessé d'un coup de baïonnette. Lors de la décharge finale, les soldats Carpentier et Hamouse furent mortellement touchés.",
      "Le maréchal de Waldersee et le général Voyron ont assisté aux obsèques des victimes."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Drame conjugal à Anvers",
    "summary": "À Anvers, un nommé Henrard a sauvagement agressé son épouse à coups de couteau lors d'une dispute. La victime, grièvement blessée, porte des traces allant de la nuque au nez. L'agresseur a été appréhendé.",
    "paragraphs": [
      "Anvers, 24 juillet. Le nommé Henrard, lors d'une dispute, a saisi sa femme à la gorge et, armé d'un couteau, a tenté de l'égorger. La victime a reçu une grave blessure s'étendant de la nuque au nez. Le meurtrier a été arrêté."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Santé",
    "title": "Informations médicales et sanitaires",
    "summary": "Dernières nouvelles de santé concernant le comte Tolstoï et M. Crispi. Parallèlement, des mesures de précaution sont prises à travers le monde face à la recrudescence de la peste bubonique.",
    "paragraphs": [
      "Saint-Pétersbourg, 24 juillet. La santé du comte Tolstoï continue à s'améliorer.",
      "Naples, 24 juillet. Le bulletin de santé de M. Crispi présente de l'amélioration.",
      "Constantinople, 24 juillet. Trois cas de peste, dont un décès à Stamboul, ont entraîné la mise en observation des voyageurs quittant la ville.",
      "New-York, 24 juillet. Un chauffeur hindou arrivé à Calcutta est atteint de la peste bubonique. Le vapeur est en quarantaine.",
      "Londres, 24 juillet. Rapport officiel sur la peste à Hong-Kong : 13 nouveaux cas, 16 décès."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits Divers",
    "title": "Effondrement d'une chapelle à Bornas",
    "summary": "Lors d'une fête à Bornas, l'effondrement de la chapelle du Christ a semé la panique parmi les fidèles. Plusieurs personnes ont été blessées dans le sinistre, dont une grièvement.",
    "paragraphs": [
      "Madrid, 24 juillet. Hier, à Bornas, pendant une fête, la chapelle du Christ s'est effondrée sur la foule. Une panique s'est produite et plusieurs personnes ont été blessées, dont une grièvement."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Hommage",
    "title": "La mort de Mme Kruger",
    "summary": "Hommage à Mme Kruger, épouse du président des républiques Boers. Femme d'origine française issue de la famille Duplessis, elle fut une figure exemplaire, aimée pour sa charité et sa vie dévouée.",
    "paragraphs": [
      "C'est par M. Van Hoeven que le président Kruger a appris la nouvelle de la mort de sa femme. Le vieux président a reçu cette épreuve avec une grande dignité, bien qu'il ait versé d'abondantes larmes.",
      "Mme Kruger était d'origine française, née au sein de la famille Duplessis. Elle a partagé toute la vie rude et simple de son mari, depuis les débuts des républiques Boers jusqu'aux heures sombres de la guerre actuelle. Elle était très aimée pour sa charité et sa simplicité.",
      "Le récit de son union, scellée par la coutume Boers de la boîte de prunes confites, rappelle sa vie exemplaire de mère de seize enfants et d'épouse dévouée."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Manœuvres alpines",
    "summary": "Clôture de la première phase des manœuvres alpines après une opération de la 30e division marquée par un duel d'artillerie au col de la Roua. La seconde série d'exercices débute dès demain.",
    "paragraphs": [
      "On mande de Guillaumes. La première partie des manœuvres alpines vient de prendre fin sur une opération de la 30e division. Le combat au col de la Roua a donné lieu à un duel d'artillerie. La deuxième série commencera demain."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Escadre américaine en Europe",
    "summary": "Le gouvernement des États-Unis officialise la création d'une escadre permanente en Europe. Le contre-amiral Cromwell, à bord du cuirassé Chicago, fait route vers Lisbonne pour rallier l'Albany et le Nashville.",
    "paragraphs": [
      "Le gouvernement des États-Unis a pris la décision d'entretenir une escadre permanente en Europe. Le contre-amiral Cromwell fait route avec le cuirassé Chicago vers Lisbonne, port dans lequel il sera prochainement rejoint par l'Albany et le Nashville."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Justice",
    "title": "Tribunaux et condamnations",
    "summary": "Revue des affaires judiciaires : de la condamnation avec sursis d'une infirmière de l'hôpital Trousseau à la peine capitale prononcée par le conseil de guerre d'Oran contre le soldat Wardava pour meurtre.",
    "paragraphs": [
      "Mlle Marvier, infirmière à l'hôpital Trousseau, a été condamnée à quinze jours de prison avec sursis pour homicide involontaire sur un enfant.",
      "Le conseil de guerre d'Oran a condamné à mort le soldat Wardava pour le meurtre du caporal Tissot.",
      "M. René Faure, directeur de l'hôpital Lariboisière, ainsi que deux employées, sont renvoyés devant la police correctionnelle suite à une erreur médicale ayant entraîné deux décès.",
      "Le conseil de guerre du 4e corps a jugé le caporal Arragon ainsi que les sapeurs Marand et Ansart pour le vol de plusieurs bagages."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Nouvelles Coloniales",
    "title": "Informations d'Abyssinie",
    "summary": "Développements en Abyssinie : modernisation des infrastructures télégraphiques et téléphoniques entre Asmara et Daro-Tacle et sentences de mort prononcées contre les meurtriers du courrier français.",
    "paragraphs": [
      "Le major Ciccodicola, représentant de l'Italie, a obtenu un congé. Par ailleurs, les lignes télégraphiques et téléphoniques ont été officiellement inaugurées entre Asmara et Daro-Tacle.",
      "L'empereur d'Abyssinie a fait connaître sa décision de passer la saison des pluies à Addis-Abeba.",
      "Les assassins du courrier de la France ont été identifiés ; ce sont des Danakils qui seront prochainement pendus."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Vie parisienne et administrative",
    "summary": "Chronique parisienne : réceptions présidentielles, arrivées de personnalités étrangères, prix de Rome, travaux à la Bourse et décisions sociales de l'Œuvre de l'Orphelinat de l'enseignement primaire.",
    "paragraphs": [
      "Le Président de la République a reçu en audience l'archevêque d'Alger ainsi que le général Lejoindre.",
      "Sir Edmond Mouson et le nabab Galibud Mulk Balladur sont arrivés à Paris.",
      "L'Institut a décerné les prix de Rome de sculpture aux artistes MM. Bouchard, Larrivé et Boudier.",
      "Les travaux d'agrandissement de la Bourse ont débuté hier dans le jardin bordant la rue Notre-Dame-des-Victoires.",
      "La direction du Muséum d'histoire naturelle répond aux critiques concernant le logement des fauves, invoquant l'insuffisance du budget alloué par l'État.",
      "Le comité central de l'Œuvre de l'Orphelinat de l'enseignement primaire a procédé à l'adoption de 22 nouveaux orphelins."
    ]
  },
  {
    "id": 30,
    "page": 2,
    "category": "Météo",
    "title": "Température et navigation",
    "summary": "Bulletin météorologique du 25 juillet : le temps se montre variable sous un régime de vents d'ouest accompagné de pluies, tandis que les températures accusent une baisse sensible sur l'ensemble du territoire.",
    "paragraphs": [
      "Jeudi 25 juillet. Temps variable, régime de vents d'ouest, pluies prévues. Le thermomètre marque une baisse quasi généralisée."
    ]
  },
  {
    "id": 31,
    "page": 2,
    "category": "Reportage",
    "title": "Les troupes dans les Vosges",
    "summary": "À Saint-Maurice, le 15e bataillon de chasseurs patrouille les vallées vosgiennes. Ces marches frontalières rappellent aux jeunes soldats le souvenir des provinces perdues et le devoir patriotique.",
    "paragraphs": [
      "Saint-Maurice, 22 juillet. La pluie a été accueillie avec joie par la population, mais les soldats sont partagés. Le 15e bataillon de chasseurs occupe les vallées où naissent la Moselle et la Moselotte.",
      "Ces marches le long de la frontière, face aux vallées devenues allemandes, sont une leçon patriotique pour les jeunes soldats, leur rappelant le souvenir des provinces perdues."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Poésie",
    "title": "France, relève le front",
    "summary": "Vers patriotiques appelant la France au relèvement national face au vainqueur, afin d'honorer la mémoire douloureuse des provinces perdues de Lorraine et d'Alsace.",
    "paragraphs": [
      "Surprise un jour, frappée au cœur, France, tu tombas expirante. Le talon brutal du vainqueur meurtrit ta poitrine sanglante.",
      "France, relève le front et lave le sang de ta face. Nos pas bientôt réveilleront les morts de Lorraine et d'Alsace."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Récit de Voyage",
    "title": "Souvenirs d'Alsace",
    "summary": "Récit d'une ascension périlleuse dans les Vosges par un bataillon de chasseurs, illustrant la vigueur de la troupe et la beauté des paysages frontaliers retrouvés.",
    "paragraphs": [
      "L'Alsace, nous la touchions à ce moment, ses vallées s'entr'ouvraient sous nos pieds, mystérieuses et calmes.",
      "Mais à cet âge, l'émotion n'est pas constante. Un instant après, on grimpait un rocher fort rude pour atteindre la Tête des Allemands et, de là, on descendait en riant une pente à pic haute de 250 mètres. Il y eut bien des culbutes, mais sans mal pour personne.",
      "En quelques minutes, on rejoignait le reste du bataillon au vallon du Séchenat pour faire le café avant d'entreprendre de rentrer à Bussang dans un ordre absolument superbe."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un drame dans une mairie",
    "summary": "L'enquête sur l'agression à la mairie du 11e arrondissement se poursuit au chevet des blessés. Si M. Carpentier montre une légère amélioration, l'état d'Etienne Leybros demeure désespéré.",
    "paragraphs": [
      "Nous avons raconté, hier, le drame qui s'est déroulé dans la mairie du onzième arrondissement au cours duquel un employé subalterne, nommé Etienne Leybros, a poignardé le chef des bureaux, M. Carpentier, puis a essayé de se donner la mort.",
      "L'état des deux blessés demeure toujours aussi grave et les médecins qui les soignent ne peuvent encore se prononcer sur les conséquences qu'auront leurs blessures.",
      "Hier matin, vers midi, une consultation a eu lieu au chevet de M. Carpentier entre les deux médecins qui l'avaient soigné tout d'abord et le docteur Lojars, professeur à l'École de médecine.",
      "Après un long et minutieux examen de la blessure reçue par le chef des bureaux, ces trois praticiens ont cru devoir réserver leur diagnostic, bien qu'une légère amélioration se soit produite au cours de la matinée dans l'état général du malade.",
      "Au cours de l'après-midi, M. Lemercier, juge d'instruction chargé de cette affaire, s'est présenté à la mairie du onzième arrondissement et a été introduit au chevet du blessé. Mais étant donné l'état toujours très grave de ce dernier, le magistrat n'a pu l'interroger.",
      "Quant à Leybros, les médecins qui le soignent à l'hôpital Lariboisière ne conservent que peu d'espoir de le sauver; ils n'ont pu, hier encore, essayer de lui extraire le projectile qu'il s'est logé dans la tête."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'Affaire de l'avenue Henri-Martin",
    "summary": "L'instruction sur la tentative d'assassinat contre Mme Kolb se précise. La police recherche activement un mystérieux courtier en bijoux londonien soupçonné d'être le complice de Gilmour.",
    "paragraphs": [
      "On sait que Gilmour, l'auteur de la tentative d'assassinat dont Mme Kolb a failli être la victime, a déclaré à M. Larcher, juge d'instruction, qu'il avait rencontré à Londres un compatriote qui l'avait amené à Paris et lui avait indiqué le coup à faire.",
      "Bien plus, le compatriote resté inconnu aurait introduit le malfaiteur dans l'appartement de Mme Kolb, au numéro 29 de l'avenue Henri-Martin.",
      "En vertu d'une commission rogatoire émanant du magistrat instructeur, M. Roy, commissaire aux délégations judiciaires, s'est rendu, hier matin, avenue Wagram, chez Mme de L., amie de Mme Kolb, et lui a demandé quelques renseignements sur un courtier en bijoux qui habite Londres.",
      "Ce courtier en bijoux est-il le gentleman dont Gilmour a parlé, à différentes reprises, au cours de ses interrogatoires ? Est-il l'Anglais qui, pendant son séjour à Paris, lui a payé ses frais dans les différents hôtels où il a logé ? M. Roy poursuit son enquête."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation de deux malfaiteurs",
    "summary": "Deux repris de justice, Édouard Henriou et Paul Bayon, ont été arrêtés boulevard de la Villette alors qu'ils tentaient de vendre des objets volés. Leurs aveux ont mené à l'arrestation d'un receleur du quartier.",
    "paragraphs": [
      "Deux gardiens de la paix, passant hier soir vers huit heures, boulevard de la Villette, remarquèrent deux individus lourdement chargés de sacs en toile dont les allures étaient suspectes.",
      "Les agents, ayant observé plus attentivement ces individus, les reconnurent comme étant deux repris de justice. Convaincus que les malfaiteurs venaient de commettre quelque méfait, ils les surveillèrent et ne tardèrent pas à constater qu'ils tentaient de vendre aux passants le contenu des sacs : brosses, pinceaux, outils à l'usage des peintres, pots de couleur, etc.",
      "À un certain moment, les individus s'arrêtèrent à la porte d'un brocanteur et, après s'être concertés, s'apprêtaient à pénétrer dans la boutique quand les agents leur mirent la main au collet.",
      "Ils furent, malgré leur résistance, conduits au commissariat de la rue Pradier, où M. Amat procéda à leur interrogatoire. Ils essayèrent de cacher leur véritable identité, mais en pure perte, car le magistrat se souvenait d'eux pour les avoir déjà envoyés au dépôt à la suite d'un vol.",
      "C'est sans difficulté qu'on put établir qu'ils se nommaient Édouard Henriou, dit le Bouquin, âgé de trente-cinq ans, demeurant rue de l'Atlas, et Paul Bayon, dit le Boulot, âgé de vingt-sept ans.",
      "Pressés de questions, ils avouèrent avoir dérobé les marchandises trouvées en leur possession chez un commerçant de la rue de Belleville, nommé Louis, âgé de quarante-deux ans. Ce dernier, invité à se présenter au commissariat, finit par avouer que lui-même les avait dérobées à un négociant du quartier du Combat. Le trio a été en conséquence écroué au dépôt."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un mauvais fils",
    "summary": "Dans le quartier de Belleville, une veuve travaillant comme vernisseuse a été sauvagement agressée par son fils Philippe, un individu oisif qui exigeait qu'elle subvienne à ses besoins.",
    "paragraphs": [
      "Dans un petit logement situé boulevard de Belleville habite depuis assez longtemps une brave femme, âgée de cinquante ans, Mme Jeanne Plaubel, demeurée veuve de fort bonne heure, et qui, toute sa vie, a peiné du matin au soir, travaillant comme vernisseuse, afin de parvenir à élever son fils Philippe, actuellement âgé de vingt-huit ans.",
      "Le jeune Philippe préféra au chemin de l'atelier celui du cabaret, retombant toujours à la charge de la pauvre femme. Lasse de telles exigences, elle lui signifia ces derniers temps de n'avoir plus à compter sur elle.",
      "Hier matin, vers dix heures et demie, Philippe se présenta chez sa mère et exigea que la pauvre femme lui servît à déjeuner. Mme Plaubel s'y refusa. Alors, une discussion fort acerbe éclata entre la ménagère et son fils, au cours de laquelle ce dernier, entrant soudain en fureur, s'arma d'un tabouret et en frappa violemment sa mère à la tête.",
      "Des voisins, alertés par le bruit de la lutte, intervinrent et arrachèrent à ce fils indigne sa victime, qui avait déjà reçu au front une grave blessure d'où le sang s'échappait abondamment. Tandis qu'on faisait panser Mme Plaubel dans une pharmacie, des agents arrêtaient son fils et le mettaient immédiatement à la disposition de M. Daltroff, commissaire de police."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Littérature",
    "title": "Feuilleton du Petit Parisien : Le Secret du Bonheur",
    "summary": "Quatrième partie du récit dramatique relatant les tensions familiales et les dilemmes moraux soulevés par le retour inattendu de la jeune Dédette au sein du foyer.",
    "paragraphs": [
      "Quatrième partie : La Pauvre Enfant Prodigue.",
      "Le récit se poursuit avec une discussion intense entre les protagonistes concernant le retour inattendu de la jeune Dédette, exacerbant les tensions familiales et les dilemmes moraux liés au pardon au sein du foyer."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort depuis six jours",
    "summary": "Le corps d'un charretier de cinquante-six ans, François Peiffer, a été découvert sans vie dans son logement de la rue de Meaux. La mort remonterait à six jours suite à une congestion cérébrale.",
    "paragraphs": [
      "Hier matin, vers dix heures, Mme C., blanchisseuse, pénétrait dans un logement situé au quatrième étage rue de Meaux, occupé par un charretier nommé François Peiffer, âgé de cinquante-six ans, quand soudain elle se mit à pousser des cris terribles.",
      "La concierge requit deux gardiens de la paix qui montèrent à l'étage, mais ne purent entrer dans le logis du charretier à cause d'une odeur cadavérique épouvantable. Après des travaux de désinfection, on finit par franchir le seuil et on aperçut, étendu sur son lit, le cadavre en complète putréfaction du charretier.",
      "M. Amat, commissaire de police du quartier, a procédé aux constatations d'usage. Un médecin a établi que le décès était dû à une congestion cérébrale provoquée par la chaleur et qu'il remontait à six jours."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une fillette brûlée vive",
    "summary": "Tragédie rue du Général-Brunet : une fillette de cinq ans est décédée après avoir accidentellement mis le feu à son lit en manipulant une bougie laissée sans surveillance par ses parents.",
    "paragraphs": [
      "Les époux Calin, domiciliés rue du Général-Brunet, avaient commis la grave imprudence de laisser seule dans leur chambre, où brûlait une bougie, leur petite fille, Jeanne, âgée de cinq ans.",
      "Pendant l'absence de ses parents, la fillette rapprocha de son lit la table sur laquelle se trouvait la bougie, qui tomba sur une couverture qui prit feu immédiatement. Les flammes se communiquèrent rapidement à toute la literie et la pauvre enfant se vit dans l'impossibilité de fuir.",
      "Des locataires accoururent et la trouvèrent au milieu d'un véritable brasier. La malheureuse fut transportée en toute hâte à l'hôpital Hérold, où elle ne tarda pas à rendre le dernier soupir."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Faits Divers",
    "title": "De la brune à la blonde : un règlement de compte au vitriol",
    "summary": "À Paris, rue de Bercy, le nommé Henry Normand a été agressé par deux anciennes amantes, l'une brune, l'autre blonde, armées d'un martinet et de vitriol. La victime a été transportée à l'hôpital Saint-Antoine.",
    "paragraphs": [
      "On entendit hier soir, dans la rue de Bercy, des cris d'alarme poussés par un jeune homme, Henry Normand, agressé par deux femmes : l'une brune, Caroline Durand, et l'autre blonde, Edmée Lavigne.",
      "Celles-ci, toutes deux délaissées par le jeune homme, l'ont attendu devant son restaurant. L'une était armée d'une trique, l'autre d'un martinet. Elles lui ont jeté du vitriol au visage, au cou et à l'épaule, et du poivre dans les yeux pour l'aveugler.",
      "Henry Normand a été conduit à l'hôpital Saint-Antoine, où ses brûlures ont été reconnues sans réelle gravité. M. Labussière, commissaire de police, fait rechercher les deux auteures de cet acte. Ajoutons que leur ancien ami a refusé de porter plainte contre elles."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enfant renversé par un tramway",
    "summary": "Un grave accident est survenu rue des Pyrénées : le petit Louis Gallei, âgé de six ans, a été renversé par un tramway et grièvement blessé. Il a été transporté à l'hôpital Tenon dans un état alarmant.",
    "paragraphs": [
      "Hier soir, vers six heures et demie, le jeune Louis Gallei, âgé de six ans, a été renversé, rue des Pyrénées, par le tramway numéro 601 de la ligne Saint-Augustin-Cours. Le malheureux enfant a eu la jambe droite broyée et c'est dans un état très alarmant qu'il a été transporté à l'hôpital Tenon."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Faits Divers",
    "title": "Écrasés dans une mine",
    "summary": "Un éboulement tragique dans la fosse n° 7 des mines de Drocourt, à Rouvroy, a coûté la vie à un père et son fils. Deux autres mineurs ont été grièvement blessés lors de cet accident.",
    "paragraphs": [
      "Hier, par suite d'un mouvement de terrain, un éboulement s'est produit dans la veine 6 de la fosse n° 7 des mines de Drocourt, située sur la commune de Rouvroy.",
      "Quatre membres de la même famille ont été ensevelis. MM. Antoine Sailly, âgé de quarante-quatre ans, et son fils Adolphe, âgé de quinze ans, ont été retirés morts. Les deux autres ouvriers, Antoine Sailly et Eugène Trannoy, ont été grièvement blessés."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Vie Provinciale",
    "title": "Nouvelles de Corse",
    "summary": "La situation ferroviaire semble se normaliser en Corse, les trains ayant repris leur service régulier. Une unité du 56e régiment du génie a effectué des exercices de reconnaissance sur les voies ferrées.",
    "paragraphs": [
      "On mande de Bastia que tous les trains réguliers sont partis aujourd'hui avec des voyageurs et des marchandises, et que la vie normale est entièrement reprise.",
      "Une compagnie du 56e régiment du génie a exécuté, hier, divers exercices de reconnaissance sur la voie ferrée. La sentence d'arbitrage sera très probablement rendue samedi."
    ]
  },
  {
    "id": 45,
    "page": 3,
    "category": "Actualités",
    "title": "Autour de Paris",
    "summary": "Revue des faits divers en banlieue parisienne : accidents de la circulation à Neuilly, incendie à Clichy, agressions à Saint-Denis et Croissy, et cambriolages signalés dans les communes voisines.",
    "paragraphs": [
      "Neuilly-sur-Seine : Une violente collision entre un tombereau et le tramway a fait un blessé grave, Joseph Bejés, âgé de vingt-six ans.",
      "Clichy : Un incendie a détruit l'établissement de M. Henry, marchand de vins, rue du Bac-d'Asnières.",
      "Levallois-Perret : L'enquête sur le drame de la rue de Coltange confirme les antécédents déplorables de Lebourdonnec.",
      "Saint-Denis : Un soldat a été agressé par une bande armée de couteaux près de sa caserne.",
      "Saint-Germain-en-Laye : Un vol de bijoux évalués à 1 200 francs a été commis par un cambrioleur nommé Edmond Bordeu.",
      "Croissy : Deux beaux-frères, Auguste Péron et Luc Bourdeline, ont été grièvement blessés par une trentaine de jeunes gens armés de couteaux."
    ]
  },
  {
    "id": 46,
    "page": 3,
    "category": "Sports",
    "title": "Concours de tragédie et comédie du Conservatoire",
    "summary": "Le Conservatoire de Paris a distingué ses meilleurs élèves lors des concours annuels. Mlle Piérat a brillé en comédie, tandis que les épreuves de tragédie ont été jugées plus décevantes par le jury.",
    "paragraphs": [
      "Le jury a décerné le premier prix de comédie à Mlle Piérat, élève de M. de Féraudy, qui a révélé un talent exceptionnel à seulement quinze ans.",
      "Plusieurs autres prix et accessits ont été distribués en comédie et en tragédie, bien que les épreuves de tragédie aient été jugées, dans l'ensemble, assez ternes."
    ]
  },
  {
    "id": 47,
    "page": 3,
    "category": "Finance",
    "title": "Bulletin financier",
    "summary": "Après deux séances de repli en début de semaine, la Bourse de Paris a fait preuve d'hésitation ce jour avant une légère reprise. Les Rentes demeurent stables, tandis que les valeurs sud-africaines se redressent.",
    "paragraphs": [
      "Les deux mauvaises séances qui ont marqué le début de la semaine ont laissé place à une journée d'hésitation, suivie toutefois d'une légère reprise en fin de séance.",
      "Les Rentes conservent leur niveau. L'Extérieure est lourde. Les valeurs sud-africaines reprennent un peu de terrain vers la clôture."
    ]
  },
  {
    "id": 48,
    "page": 3,
    "category": "Sciences et Sports",
    "title": "La conquête de l'air",
    "summary": "L'aéronautique est au cœur de l'actualité scientifique. Après les exploits de Santos-Dumont, les nouveaux essais de l'aéroplane inventé par M. Roze sont annoncés pour cette semaine.",
    "paragraphs": [
      "La question des ballons dirigeables et des machines volantes est au centre des préoccupations en ce début de siècle.",
      "Après les expériences remarquées de M. de Santos-Dumont, les essais de l'aéroplane conçu par M. Roze sont très attendus cette semaine."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Concerts et Orphéons",
    "title": "Concerts du Jeudi 25 juillet 1901",
    "summary": "Le programme musical de ce jeudi 25 juillet 1901 à Paris est particulièrement riche, avec de nombreuses représentations données par les musiques des régiments dans les divers jardins et squares de la capitale.",
    "paragraphs": [
      "Tuileries : Régiment de ligne, chef M. J. Bichot. Programme : Marche des Boërs (Wetter), La Princesse Jeanne (Saint-Saëns), Méditation de Thaïs (Massenet), Samson et Dalila (Saint-Saëns), Réveil d'oiseaux (Wettge).",
      "Place de la Nation : Régiment de ligne, chef M. Suzanne. Programme : Rice (Cairanne), Les Deux fiancées (G. Parès), La Parisienne (Kaiser), L'Africaine (Meyerbeer), Frondeuse (Suzanne).",
      "Passy-Ranelagh : Régiment de ligne, chef M. V. Bonnelle. Programme : Marche du Vieux Paris (Hauser), Ouverture de Paragraphe III (F. de Suppé), La Paloma (Corbin), Gavotte (Saint-Saëns), Les P'tites Michu (Messager).",
      "Square des Batignolles : Régiment de ligne, chef M. J. Vidal. Programme : Salut la Patrie (Soyer), La Reine de Saba (Gounod), Très jolie (Waldteufel), La Reine d'un jour (Adam), Petite souris (Bosc).",
      "Place des Vosges : Régiment de ligne, chef M. A. Fouquet. Programme : A la Caserne (Sporck), Esmont (Beethoven), Fiançailles (Wesly), Ballet de Coppélia (Léo Delibes), Mazurka (Fouquet).",
      "Square d'Anvers : Régiment de ligne, chef M. André. Programme : Marche Alsacienne (P. André), Messire Bertrand (Relier), Fiançailles (Wesly), Rigoletto (Verdi), Polka du Moulin (Tillard).",
      "Jardin Zoologique d'Acclimatation : Chef d'orchestre M. Célestin Bourdeau. Au programme : Glorieuse (Volpatti), Posada (Eisen), L'Italienne à Alger (Rossini), Cocorico (Belval), La Mascotte (Audran), L'Entrée du Tsar à Paris (G. Latour), Le Roi l'a dit (Delibes), Dans la prairie (Wittmann), Le Trouvère (Verdi), Le Cavalier noir (F. Sali)."
    ]
  },
  {
    "id": 50,
    "page": 4,
    "category": "Hygiène et Santé",
    "title": "L'Arthritisme et son traitement",
    "summary": "L'Académie Dermothérapique alerte sur les dangers de l'arthritisme et propose sa méthode électro-végétale, offrant une brochure gratuite aux patients qui en feront la demande.",
    "paragraphs": [
      "L'Académie Dermothérapique expose les dangers de l'arthritisme, incluant le rhumatisme, la goutte et le diabète. Cette pathologie, souvent chronique, peut entraîner des complications graves au niveau du cœur, du cerveau, du foie et des reins.",
      "L'Académie préconise le dermothérapisme électro-végétal et propose la distribution gratuite de la brochure 'L'Art de Guérir les Maladies' aux lecteurs qui en feront la demande au 46, rue de Clichy, à Paris."
    ]
  },
  {
    "id": 51,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Cours de la Halle au Blé (24 juillet)",
    "summary": "La raréfaction des blés indigènes sur le marché parisien, couplée à des récoltes incertaines, entraîne une tension à la hausse sur les cours des céréales, tant pour les blés blancs que pour les variétés rousses.",
    "paragraphs": [
      "Les blés indigènes se font rares sur le marché. En raison des mauvaises nouvelles concernant la récolte et de la hausse observée dans les marchés de province, une tendance à l'appréciation est constatée à Paris.",
      "Les blés blancs s'échangent entre 21 fr. et 21,50 fr., tandis que les blés roux se négocient entre 21 fr. et 21,25 fr. les 100 kilos, en gare de Paris ou en usine."
    ]
  },
  {
    "id": 52,
    "page": 4,
    "category": "Actualités administratives",
    "title": "Adjudication des travaux de transformation du quartier de la Bourse à Marseille",
    "summary": "La municipalité de Marseille fixe l'adjudication des travaux de transformation du quartier de la Bourse au 30 septembre 1901, exigeant un cautionnement de 3 millions de francs pour cette opération majeure.",
    "paragraphs": [
      "Un avis d'adjudication est lancé pour le 30 septembre 1901, à l'Hôtel de Ville de Marseille, concernant les travaux de transformation du quartier de la Bourse.",
      "L'opération, sous la responsabilité de l'adjudicataire, implique l'avance des fonds nécessaires contre remise d'obligations, la démolition des immeubles existants et l'édification de nouvelles constructions, le tout sous un cautionnement fixé à 3 millions de francs."
    ]
  },
  {
    "id": 53,
    "page": 4,
    "category": "Informations de transport",
    "title": "Excursions estivales par la Compagnie d'Orléans",
    "summary": "La Compagnie d'Orléans facilite les villégiatures estivales en organisant, tout au long du mois d'août, des trains spéciaux à tarifs réduits au départ de Paris vers les départements du Centre et du Sud-Ouest.",
    "paragraphs": [
      "La Compagnie d'Orléans organise pour les vacances des trains spéciaux à prix réduits, au départ de la gare de Paris-Quai d'Orsay, vers les départements du Lot, de l'Aveyron, du Cantal, de la Creuse, de la Haute-Vienne et de la Corrèze durant le mois d'août."
    ]
  }
];
