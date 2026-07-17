// Date: 1900-12-04
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-12-04 (Version Restaurée, 28 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La polémique sur le coq gaulois comme emblème national",
    "summary": "Numismates et historiens contestent la légitimité du coq gaulois sur les nouvelles monnaies, y voyant un contresens historique né d'un calembour latin et d'une tradition politique plus récente que gauloise.",
    "paragraphs": [
      "Les numismates, qui possèdent la science du blason, discutent avec âpreté la situation prépondérante faite au coq gaulois dans les monnaies nouvelles. Sur le revers des pièces de bronze et de vingt francs, le coq est représenté, ce qui exaspère les savants.",
      "M. Ducrocq, professeur à Poitiers, dénonce cette erreur historique. Le coq n'est pas l'oiseau national des Gaulois. Le mot latin « gallus » signifie à la fois coq et gaulois, ce qui a entraîné un calembour, mais les Romains n'ont jamais utilisé le coq comme symbole de la Gaule.",
      "Le coq était, pour les Anciens, un emblème de vigilance. En 1791, il fut utilisé sur les monnaies comme symbole de la police ou de la vigilance. Plus récemment, il est devenu, par erreur et tradition, un symbole de la France, bien que cette dénomination soit historiquement infondée et contestée.",
      "La persistance de cette légende est due à un calembour latin. Des historiens soulignent que le coq est un emblème plutôt orléaniste, adopté politiquement en 1830. Il faut aujourd'hui renoncer à ce prétendu symbole national, désormais accaparé par le service de la sûreté."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Littérature",
    "title": "Les Sans-Famille - Marie-Madeleine",
    "summary": "La baronne, mue par une haine implacable, précipite le départ de Pierre Broudin vers l'exil. Ce dernier, réconcilié avec sa sœur Rose, laisse derrière lui une nièce plongée dans une douleur orchestrée par la baronne.",
    "paragraphs": [
      "La baronne, haineuse, se promet de faire suivre Pierre Broudin, le fils du paysan, après avoir découvert qu'il allait quitter la France pour éviter ses représailles.",
      "Malgré ses sentiments pour Pierre, la baronne reste inflexible dans sa haine envers lui. Elle prépare son plan pour assurer son départ et son éloignement.",
      "Pierre Broudin, blessé par les reproches de sa sœur Rose, finit par se réconcilier avec elle. Après une émouvante séparation et une promesse de rester fidèle à ses engagements, il part pour l'exil à destination du Cap.",
      "La baronne, de retour chez sa nièce Louise, lui annonce avec une fausse tendresse la mort de sa fille, tout en essayant de l'effacer du passé de la jeune fille."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Informations politiques et administratives",
    "summary": "Mouvements préfectoraux, victoire électorale de M. Vallée dans le Pas-de-Calais et avancées législatives sur l'accès des femmes au barreau : le point sur les décisions administratives récentes.",
    "paragraphs": [
      "L'élection législative du Pas-de-Calais, dans l'arrondissement de Saint-Pol, a vu la victoire de M. Vallée, sous-préfet, avec 9.980 voix.",
      "Un mouvement administratif a été signé par le ministre de l'Intérieur : M. Fourey est nommé préfet des Côtes-du-Nord, M. Delanney préfet de l'Ariège, et M. Varnier secrétaire général du gouvernement général de l'Algérie.",
      "Le Journal officiel publiera la loi permettant aux femmes licenciées en droit de prêter serment d'avocat.",
      "Le ministre des Finances a décrété des modifications dans l'organisation de l'administration centrale pour améliorer l'accès aux emplois supérieurs."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nouvelles coloniales",
    "title": "Dernières nouvelles d'Indo-Chine et du Sénégal",
    "summary": "L'Indo-Chine est éprouvée par un typhon en Annam et des troubles près de Bac-Ninh, tandis qu'au Sénégal, la situation sanitaire se normalise, permettant la reprise progressive des activités et des départs.",
    "paragraphs": [
      "En Indo-Chine, un typhon a causé des dégâts considérables en Annam. Les communications télégraphiques sont interrompues. On s'inquiète du sort du gouverneur mandchou Tuang-Tang.",
      "Des mouvements de troupes et des actes de piraterie ont été signalés près de Bac-Ninh. Des pillages de boutiques chinoises ont eu lieu.",
      "Au Sénégal, l'état sanitaire s'améliore. Les centres sont désinfectés et les communications rétablies. Le gouverneur prévoit une reprise des départs du personnel prochainement."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Marine",
    "title": "Exécution du programme de constructions navales",
    "summary": "Le ministère de la Marine, en accord avec la commission du budget, étudie une accélération des constructions navales pour rationaliser la production et assurer une activité constante dans les arsenaux.",
    "paragraphs": [
      "Le ministère de la Marine étudie, avec la commission du budget, les moyens d'accélérer l'exécution du programme de constructions navales.",
      "Les critiques portent sur le manque de continuité des commandes, souvent faites par tranches, ce qui nuit à l'efficacité industrielle. Une commande simultanée permettrait une production plus régulière et économique.",
      "Il est également crucial de mieux répartir le travail dans les arsenaux pour maintenir l'activité du personnel et éviter le chômage technique."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique étrangère",
    "title": "Déplacements du Président Krüger",
    "summary": "Le Président Krüger quittera Cologne ce jeudi pour se rendre à La Haye. Il a reçu les remerciements impériaux de Russie pour son télégramme, auxquels il a répondu par l'expression de sa profonde gratitude.",
    "paragraphs": [
      "Le Président Krüger quittera Cologne jeudi prochain pour La Haye. M. le ministre plénipotentiaire de Russie a été chargé de lui transmettre les remerciements de l'Empereur pour le télégramme qu'il avait reçu de lui.",
      "M. Krüger a exprimé sa profonde gratitude envers Sa Majesté et a tenu à formuler ses vœux les plus amicaux à l'égard du souverain."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Social",
    "title": "Les étudiants et l'arbitrage dans le conflit anglo-boer",
    "summary": "Les étudiants parisiens se mobilisent en faveur de l'arbitrage dans le conflit anglo-boer. Ils diffusent une circulaire aux universités pour soutenir une pétition adressée à l'Empereur de Russie.",
    "paragraphs": [
      "Un mouvement s'est organisé parmi les étudiants parisiens en faveur de l'arbitrage dans le conflit anglo-boer. Une circulaire a été adressée à tous les centres universitaires afin de recueillir des adhésions massives.",
      "L'objectif est de présenter une pétition formelle à l'Empereur de Russie, qui fut l'initiateur de la conférence de La Haye, pour demander son intervention pacifique."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un bal tragiquement interrompu à Lyon",
    "summary": "Lors d'un bal des 'Touristes lyonnais', Charles Gea a abattu un jeune homme de vingt-quatre ans d'un coup de revolver. Le meurtrier a été immédiatement appréhendé par les forces de l'ordre.",
    "paragraphs": [
      "Un drame sanglant a troublé la fête organisée à Lyon par la société des « Touristes lyonnais ». Un individu nommé Charles Gea, dit Chariot, a fait irruption dans la salle, armé d'un revolver chargé.",
      "Après une brève et violente altercation, il a fait feu et atteint mortellement un jeune homme de vingt-quatre ans, le nommé Moulins, en pleine tempe gauche. Le meurtrier a été arrêté séance tenante."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le crime du Pecq",
    "summary": "Le parquet de Versailles instruit l'affaire d'un cadavre mutilé découvert dans la Seine au Pecq. La victime, restée trois semaines dans l'eau, portait des traces de coups de couteau à la gorge.",
    "paragraphs": [
      "Le parquet de Versailles a ouvert une information judiciaire à la suite de la découverte d'un cadavre flottant sur la Seine, à proximité immédiate du pont du Pecq.",
      "Le corps, qui a séjourné environ trois semaines dans le fleuve, présentait des traces manifestes de plusieurs coups de couteau portés à la poitrine et à la gorge. L'identité de la victime demeure, pour l'heure, inconnue."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'affaire de Vaucroze devant la cour d'assises de Nîmes",
    "summary": "Le procès de l'affaire de Vaucroze s'ouvre à Nîmes. Face à la complexité des débats, la cour a dû adjoindre des jurés supplémentaires pour entendre les cent deux témoins convoqués.",
    "paragraphs": [
      "Le procès relatif à l'affaire de Vaucroze s'est ouvert ce matin devant la cour d'assises de Nîmes. L'accusé, Gayte, a manifesté un calme surprenant tout au long de l'audience.",
      "En raison de la complexité exceptionnelle des débats, la cour a dû s'adjoindre un assesseur supplémentaire et désigner des jurés additionnels. Cent deux témoins ont été cités pour comparaître à la barre."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le procès de Gayte : assassinat de Mme de Vaucroze",
    "summary": "M. le Président interroge l'accusé Gayte sur l'assassinat de Mme de Vaucroze. Malgré les preuves matérielles et ses antécédents judiciaires pour vols, l'accusé nie toute participation au crime.",
    "paragraphs": [
      "M. le président entame l'interrogatoire de l'accusé Gayte, mis en cause dans l'assassinat de Mme de Vaucroze. Le magistrat rappelle longuement les antécédents judiciaires du prévenu, condamné à diverses reprises pour vols et escroqueries par le passé.",
      "Le 24 août, M. Fernand de Vaucroze découvrit le corps inanimé de sa mère. L'enquête révéla rapidement le mobile du crime : le vol. Plusieurs meubles avaient été fracturés et une montre de prix avait disparu de la demeure.",
      "L'accusé nie énergiquement les faits, se déclarant étranger à ce forfait malgré les preuves indirectes et les traces relevées sur les lieux par les experts. Il tente d'expliquer son parcours erratique depuis 1897, invoquant la misère, tout en récusant toute implication dans le meurtre."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "La situation en Chine",
    "summary": "Les négociations diplomatiques se poursuivent à Pékin sur la révision des traités. Entre occupation militaire par les puissances et souci de stabilité, le commerce et la sécurité des étrangers restent prioritaires.",
    "paragraphs": [
      "Les négociations à Pékin se poursuivent activement entre les puissances étrangères concernant les modifications nécessaires à apporter aux traités. Il est notamment question du sort réservé à l'entourage de Li-Hung-Chang et des suites de la mort de Yu-Hsien.",
      "Les contingents français et allemands occupent divers édifices impériaux, tandis que les Chinois revenant dans la capitale adoptent une attitude conciliante. La sécurité des ressortissants étrangers ainsi que la liberté du commerce mondial demeurent les axes prioritaires des discussions en cours."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "Le message du Président des États-Unis",
    "summary": "Le Président McKinley souligne la solidité des liens franco-américains dans son message annuel, tout en abordant les conflits internationaux et l'essor économique record des États-Unis.",
    "paragraphs": [
      "Dans son message, le Président des États-Unis souligne l'excellence des rapports entretenus entre son pays et la République française, se félicitant du succès de l'Exposition universelle et de l'inauguration récente du monument La Fayette.",
      "Le message aborde également le conflit sud-africain en précisant les droits des puissances neutres, ainsi que la tutelle américaine sur les Philippines. Enfin, il souligne la progression spectaculaire du commerce extérieur, dont le total excède pour la première fois la barre des deux milliards de dollars."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "La guerre sud-africaine",
    "summary": "La traque du général Dewet continue. Au Cap, la population manifeste son soutien aux Boers, tandis que le sort des réfugiés et des familles reste une préoccupation majeure face à l'enlisement militaire.",
    "paragraphs": [
      "Les opérations militaires se poursuivent avec acharnement, les généraux anglais s'efforçant de cerner le général Dewet. Au Cap, la sympathie pour la cause boer s'affirme publiquement, et des pétitions circulent pour solliciter de la reine d'Angleterre un traitement plus humain en faveur des femmes boers.",
      "La situation des réfugiés ne laisse espérer aucun retour au Transvaal avant le printemps prochain. Parallèlement, de nouveaux volontaires continuent de s'engager au sein des forces irrégulières sur le théâtre des opérations."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Social",
    "title": "Chambre des députés : projet d'amnistie",
    "summary": "La Chambre des députés examine le projet d'amnistie visant les délits de presse, de réunion et les grèves récentes. Le débat porte sur l'application de la mesure, notamment pour les insoumis.",
    "paragraphs": [
      "La Chambre des députés a poursuivi la discussion sur le projet d'amnistie. Le texte, tel qu'amendé par la commission, accorde une mesure de grâce pour les délits de presse, de réunion et d'association, ainsi que pour les divers faits liés aux mouvements de grève récents.",
      "La commission a longuement débattu des conditions spécifiques d'application de cette mesure, notamment concernant le statut des déserteurs et des insoumis, tout en examinant les divers amendements formulés par les députés lors de la séance."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident mortel dans un hippodrome",
    "summary": "Un drame a endeuillé l'hippodrome de la Folie-Herbe. Le jockey Charles L., désarçonné lors d'une course d'obstacles, a succombé à ses graves blessures après avoir été traîné sur la piste.",
    "paragraphs": [
      "Un accident tragique s'est produit à l'hippodrome de la Folie-Herbe lors d'une course d'obstacles. Le jockey Charles L., ayant été désarçonné, fut traîné sur une longue distance par sa monture ; les membres brisés et le crâne fracturé, il a succombé à ses graves blessures peu après son transport à l'infirmerie du champ de courses."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Tribunaux",
    "title": "Procès Reinach",
    "summary": "Le procès Reinach se poursuit devant la Cour. Une question de compétence soulevée par les avocats a engendré une longue et vive discussion juridique sur la procédure et les responsabilités antérieures.",
    "paragraphs": [
      "Le procès Reinach se poursuit devant la Cour. La question de la compétence a été soulevée par les avocats de la défense, donnant lieu à une longue discussion technique sur la procédure en cours ainsi que sur les responsabilités passées des parties impliquées."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Justice",
    "title": "L'affaire de la rue Demours",
    "summary": "Lors de l'audience sur l'affaire de la rue Demours, Me Labori a vivement protesté contre l'attitude du ministère public. La séance a été levée après la lecture du pourvoi du procureur général.",
    "paragraphs": [
      "Me Labori prend la parole à son tour pour protester avec véhémence contre l'attitude inattendue du ministère public, qui semble, par ses réquisitions, vouloir prendre la cause en main.",
      "Le greffier donne alors lecture du pourvoi formé par le procureur général devant la Cour de cassation.",
      "M. le président Mercier en donne acte, ordonne le versement au dossier du pourvoi et lève aussitôt l'audience."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits divers",
    "title": "Drame rue Demours",
    "summary": "Un homme a été grièvement blessé par arme à feu lors d'une rixe nocturne rue Demours. Transporté à l'hôpital Beaujon dans un état désespéré, les autorités recherchent activement le tireur.",
    "paragraphs": [
      "Un drame sanglant, dont les mobiles demeurent encore obscurs, s'est déroulé la nuit dernière rue Demours.",
      "Des agents de service, circulant boulevard Malesherbes, ayant perçu le bruit d'une discussion animée, s'avancèrent vers l'endroit. Ils y trouvèrent un homme gisant à terre, ayant été atteint d'un coup de revolver dans l'épaule et d'une balle à la tempe.",
      "Transporté d'urgence à l'hôpital Beaujon, le blessé se trouve dans un état des plus graves. M. Michaut, commissaire de police, a immédiatement ordonné une enquête pour retrouver l'auteur de ces coups de feu."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Nouvelles militaires",
    "title": "Déplacements du Général et Association d'écrivains",
    "summary": "Le ministre de la Guerre déplace le général Lafond après les incidents de Melun. Parallèlement, une association d'écrivains militaires a vu le jour sous la présidence de M. Henry Houssaye.",
    "paragraphs": [
      "À la suite des fâcheux incidents de Melun, le ministre de la Guerre a pris la décision de déplacer le général de division Lafond, tenu pour responsable des dissensions apparues parmi les officiers du 15e régiment de dragons.",
      "Par ailleurs, les écrivains militaires ont officiellement créé une association dont la présidence a été confiée à M. Henry Houssaye. La vice-présidence est assurée par MM. Ardouin-Dumazet, Jules de Clerville, Henriq et Rousseau."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Réceptions présidentielles",
    "summary": "Le Président de la République a tenu ses audiences habituelles hier, recevant notamment le ministre plénipotentiaire Renois, le contre-amiral Antoine Caillé et M. Walders, représentant du Danemark.",
    "paragraphs": [
      "Le Président de la République a reçu hier matin M. Renois, ministre plénipotentiaire, ainsi que le contre-amiral Antoine Caillé, entourés de plusieurs hauts fonctionnaires venus présenter leurs hommages.",
      "Au cours de l'après-midi, M. le Président a accordé une audience à M. Walders, représentant diplomatique du royaume du Danemark."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue",
    "summary": "La banlieue parisienne a été marquée par plusieurs incidents : le démantèlement d'une bande de malfaiteurs à Puteaux, un accident mortel de chantier à Clichy, et des collisions violentes à Asnières et Pantin.",
    "paragraphs": [
      "À Puteaux et Levallois-Perret, la police a procédé à l'arrestation d'une bande de malfaiteurs spécialisés dans les vols. Les individus marquaient les objets dérobés d'un signe distinctif : un cœur traversé par une flèche.",
      "Un triste accident du travail s'est produit à Clichy : un ouvrier maçon, ayant perdu l'équilibre alors qu'il se trouvait sur un échafaudage, a fait une chute mortelle et s'est fracassé le crâne.",
      "À Asnières, un cheval emporté dans sa course a provoqué un grave accident sur la voie publique, occasionnant des blessures sérieuses à un homme et à une fillette qui se trouvaient sur son passage.",
      "Enfin, à Pantin, une collision violente entre une voiture particulière et un tramway électrique a causé plusieurs blessés, parmi lesquels figure M. Poncet, commissaire de police."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Social",
    "title": "Grève des cochers",
    "summary": "Le mouvement de grève des cochers se poursuit sans avancée notable. Tandis que le comité maintient sa détermination, une délégation a été dépêchée auprès du conseil municipal pour exposer leurs doléances.",
    "paragraphs": [
      "Aucun changement notable n'est à signaler dans la situation de la grève des cochers. Le comité de grève affiche une détermination résolue, bien que la direction des compagnies affirme que le conflit ne saurait se prolonger davantage.",
      "Les réunions des travailleurs se succèdent ; une délégation a d'ailleurs été officiellement nommée pour porter les revendications et les doléances des grévistes devant le conseil municipal."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Feuilleton",
    "title": "Le fruit défendu - La Revanche de Rose-Manon",
    "summary": "Lors de l'audience, l'avocat Jean conteste avec vigueur les accusations portées contre lui, dénonçant une machination orchestrée par la falsification de lettres visant à l'impliquer dans un crime imaginaire.",
    "paragraphs": [
      "La voix de l'avocat Jean tremblait d'émotion. Il exposa avec précision les détails de sa relation tourmentée avec Rose-Manon, ainsi que l'existence de lettres mystérieuses qui, selon ses dires, menaçaient son honneur et sa vie.",
      "Il soutient mordicus que ces missives sont des pièces falsifiées, fabriquées de toutes pièces dans l'unique dessein de le faire accuser d'un meurtre qu'il n'a jamais commis."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les miettes du bonheur",
    "summary": "En route pour l'exil en Algérie, René Buel apprend par la presse la mort accidentelle de l'époux de celle qu'il aime, une nouvelle qui bouleverse ses résolutions et suspend son départ.",
    "paragraphs": [
      "Après l'orage, René Buel rentrait à l'hôtel de France, accablé par des émotions trop violentes. Le médecin, appelé à son chevet, diagnostiqua une surexcitation nerveuse exigeant un repos complet.",
      "Une fois sa santé recouvrée, il persista dans sa résolution de quitter la France pour l'Algérie, convaincu que son devoir envers Hélène ainsi que la morale lui imposaient cet exil volontaire.",
      "En se rendant à la gare de Lyon, il observait avec une pointe d'envie les travailleurs parisiens, regrettant amèrement de ne pouvoir goûter à la simplicité de leur bonheur paisible.",
      "Sur le quai de la gare, alors qu'il s'apprêtait à monter dans le train pour Marseille, il découvrit dans les colonnes du Petit Parisien la nouvelle de la mort accidentelle de M. André Vernier, survenue lors d'une partie de chasse.",
      "Sous le choc de cette révélation qui rendait Hélène libre, René, dans un trouble profond, renonça in extremis à son voyage, espérant découvrir le sort réservé à celle qu'il aimait toujours éperdument."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Hommage",
    "title": "Victor Hugo, le poète immortel",
    "summary": "Hommage vibrant à Victor Hugo, génie universel dont l'œuvre monumentale et l'engagement humaniste ont marqué le XIXe siècle. Un rappel historique de l'immortalité de ce géant des lettres et des citoyens.",
    "paragraphs": [
      "L'éternelle lumière de notre siècle. Il fut l'incarnation du génie et de la pensée humaine ; il personnifia son siècle. Son œuvre est vaste, immense ; elle couvre la terre.",
      "Arrivé à la renommée à l'âge où le commun des mortels cherche encore sa vocation, il tint, durant trois quarts de siècle, le monde entier fasciné sous le charme de ses œuvres inspirées et prophétiques, de ses écrits admirables et majestueux. Roman, nouvelle, philosophie, théâtre, tribune, il aborda tout, enveloppant de son génie chacune de ses productions sublimes. Analyser son règne est un travail qu'humain nul n'est capable d'affronter. L'Avenir se prononcera. L'Éternité jugera.",
      "Victor Hugo entra vivant dans l'Immortalité. On se rappelle la journée du 27 février 1885 ; ce fut son apothéose. Jamais homme ne mérita comme lui le témoignage qui lui fut rendu. Il sacrifia sa vie à l'humanité, il soutint les faibles, les déshérités, les enfants ; il fut le chef de l'école romantique et le plus grand des poètes, comme le premier des citoyens.",
      "Son testament commençait par ces mots : « Je donne cinquante mille francs aux pauvres. Je veux être porté à leur corbillard. » Et tout le monde se rappelle des obsèques grandioses dont le souvenir restera gravé dans toutes les mémoires. Partout où se trouve une intelligence, il y a un livre de Victor Hugo. Sa popularité est universelle."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Faits Divers",
    "title": "État civil et recherches",
    "summary": "Avis de recherche officiels concernant Hélène Hindannich, sollicitée pour une succession au Mans, et William Vaillant, fils d'Agapi Vaillant.",
    "paragraphs": [
      "Hélène (Ernestine-Julie), épouse de M. Michel Hindannich, est recherchée pour une succession par M. Bonnet, notaire au Mans.",
      "William Vaillant, fils d'Agapi Vaillant, est également recherché."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Maritime",
    "title": "Mouvements des navires",
    "summary": "État des mouvements maritimes des navires de ligne, incluant les rotations et escales des paquebots C. R., S.-M., Cordoba et Cornwall vers les ports d'Asie, d'Afrique et d'Amérique du Sud.",
    "paragraphs": [
      "C. R., venant de Hong-Kong, est parti le 1er pour Saïgon.",
      "C. R., venant de Takoo, est parti du Cap-Saint-Jacques le 2 pour Calcutta.",
      "S.-M., venant du Havre, est parti de Pauillac le 2 pour le Transvaal.",
      "Cordoba (C. R.), venant de Bahia, est arrivé à Rio.",
      "Cordoba (C. R.) est parti de Rio le 2 pour Bahia.",
      "Cornwall (C. R.), venant de Ténériffe, est parti pour Capetown le 3, en direction du Transvaal et de Madagascar."
    ]
  }
];
