// Date: 1900-05-28
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-05-28 (Version Restaurée, 32 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique",
    "title": "Projet de budget spécial pour l'Algérie",
    "summary": "Le gouvernement dépose un projet de loi instaurant un budget spécial pour l'Algérie, cherchant à concilier autonomie financière et autorité française sans modifier le statut politique de la colonie.",
    "paragraphs": [
      "Dans sa séance du 19 mars dernier, la Chambre des députés a invité le gouvernement à préparer un projet de loi organisant pour l'Algérie un budget spécial. Ce texte a été déposé mardi dernier par le ministre des Finances.",
      "Si cette réforme est votée, elle marquera dans l'histoire de l'Algérie une date importante. Le projet du gouvernement s'est attaché à concilier les revendications des partisans de l'autonomie et les objections de ses adversaires.",
      "L'Algérie n'avait pas, jusqu'ici, d'individualité budgétaire, restant soumise à la loi de finances française. Privée de ressources propres, elle se trouvait dépourvue des moyens d'action indispensables au développement de la colonie.",
      "Le projet propose d'utiliser trois rouages essentiels : le gouverneur général, le Conseil supérieur et les délégations financières. Cette procédure est jugée simple ; elle ne modifie pas la situation politique, tout en permettant une gestion pratique du budget local.",
      "Le budget comprendra les recettes effectuées en Algérie et les dépenses civiles. La guerre et la marine restent hors du budget spécial. Le système fiscal demeure inchangé, bien que des évolutions soient possibles à l'avenir.",
      "Cette organisation augmente la liberté de l'Algérie sans amoindrir l'autorité de la France, offrant une solution équilibrée aux besoins spécifiques de la colonie."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Tours de Notre-Dame",
    "summary": "Face aux soupçons pesant sur la probité de la famille Dérussé, le magistrat Bernard Mole maintient sa rigueur judiciaire, refusant d'étouffer une plainte pour escroquerie malgré les supplications de son fils Claude.",
    "paragraphs": [
      "Le magistrat Bernard Mole s'inquiète vivement de la relation entre son fils, Claude, et Jeanne Dérussé. Il a appris de mauvais bruits concernant le père de la jeune fille, Joseph Dérussé, dont les opérations financières seraient entachées de pratiques douteuses.",
      "Malgré les supplications répétées de Claude, le magistrat insiste pour que son fils se renseigne sur la probité réelle de la famille Dérussé avant d'aller plus avant dans leur liaison.",
      "Une plainte en escroquerie est finalement déposée contre Joseph Dérussé. Bernard Mole, fidèle à son devoir et à sa conscience, refuse catégoriquement d'étouffer l'affaire malgré l'attachement amoureux de son fils.",
      "Jeanne Dérussé tente de supplier le juge de l'épargner, promettant même de renoncer à la fortune de son père, mais Bernard demeure inflexible, considérant que la justice doit être égale pour tous, sans exception."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Les troubles de Jersey",
    "summary": "Le calme est revenu à Jersey après des agitations locales. Le lieutenant-gouverneur sir Edward Hopton a rétabli l'ordre, et la justice a commencé à statuer sur le sort des contrevenants.",
    "paragraphs": [
      "Le calme est désormais rétabli à Jersey après les troubles survenus récemment. Le lieutenant-gouverneur, sir Edward Hopton, est arrivé à Saint-Hélier pour assurer personnellement le maintien de l'ordre public.",
      "Le maire, M. Bandanis, a dû être protégé par la force armée pour assurer sa sécurité. Plusieurs personnes ont comparu devant le tribunal de police pour leur participation active aux agitations.",
      "Mme Cousinard, accusée d'avoir jeté de l'eau sale sur la foule, a vu son affaire ajournée à lundi prochain. D'autres accusés ont été condamnés à des peines d'emprisonnement allant de quelques heures à huit jours."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Sciences",
    "title": "L'éclipse de soleil du 28 mai",
    "summary": "Une éclipse solaire totale est observée ce jour à travers plusieurs continents. En France, le phénomène est visible partiellement, offrant aux astronomes une occasion unique d'étudier la couronne solaire.",
    "paragraphs": [
      "L'éclipse de soleil de ce jour sera totale aux États-Unis, au Portugal, en Espagne, ainsi qu'en Algérie et en Tunisie. En France, le phénomène ne sera observé que partiellement.",
      "Des astronomes du monde entier se sont réunis, notamment à Elche en Espagne, pour observer le phénomène. Cette observation est cruciale pour étudier l'atmosphère solaire, la couronne et les effluves électriques du soleil, phénomènes qui ne sont visibles que durant ces rares instants de totalité."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "Élections au Conseil Général de la Seine",
    "summary": "Les résultats du scrutin de ballottage confirment l'élection de plusieurs nouveaux conseillers généraux au sein du département de la Seine, marquant une étape dans la représentation des communes périphériques.",
    "paragraphs": [
      "Le scrutin de ballottage a vu l'élection de plusieurs nouveaux conseillers généraux : M. Truel à Levallois-Perret, M. Quintaine à Saint-Denis, M. Chenal à Charenton, M. Blanchon à Nogent-sur-Marne et M. Gross à Saint-Maur-les-Fossés."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le crime du bois de Vincennes",
    "summary": "L'enquête sur le meurtre du bois de Vincennes progresse. Après avoir écarté un cabaretier du Mans, la police interroge Louis Davaut, qui a avoué avoir frappé la victime lors d'un vol de plomb.",
    "paragraphs": [
      "L'enquête sur l'assassinat d'un individu dans le bois de Vincennes se poursuit. La piste menant à un ancien cabaretier du Mans a été formellement abandonnée après vérification des tatouages de ce dernier.",
      "Le service de la Sûreté concentre désormais ses recherches sur un individu ayant fréquenté l'asile de la rue du Château-des-Rentiers. Louis Davaut, arrêté, a avoué avoir frappé la victime avec un marteau lors d'un vol de plomb, tandis que son complice Laurent nie toute participation au crime."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le crime de Montanglaust",
    "summary": "Un crime odieux a été découvert à Montanglaust : Mlle Éloïse Bonnefoy, rentière de 59 ans, a été retrouvée égorgée à son domicile. Le vol semble être le mobile principal de cet assassinat d'une grande cruauté.",
    "paragraphs": [
      "Un crime odieux a été découvert à Montanglaust : Mlle Éloïse Bonnefoy, une rentière de 59 ans, a été retrouvée égorgée à son domicile. Le vol semble être le mobile principal de cet acte criminel.",
      "La maison a été entièrement fouillée et les meubles bouleversés. L'autopsie révèle que la victime a été étranglée puis frappée avec un instrument contondant avant d'avoir la gorge tranchée. L'enquête se poursuit activement pour retrouver les auteurs."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "International",
    "title": "La guerre au Transvaal",
    "summary": "Après huit mois de conflit au Transvaal, l'Angleterre intensifie ses opérations. Malgré les lourdes pertes britanniques, les troupes coloniales avancent vers Johannesburg et Pretoria, tandis que les Boers franchissent le Vaal.",
    "paragraphs": [
      "Après huit mois de combats acharnés, l'Angleterre poursuit l'invasion du territoire de la République boer. Les événements se précipitent avec l'imminence de l'attaque sur Johannesburg et le siège de Pretoria.",
      "Le War Office a communiqué une liste de pertes parmi les troupes britanniques. De leur côté, les Boers ont franchi le Vaal et se montrent déterminés à poursuivre la lutte avec vigueur."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Société",
    "title": "L'Exposition Universelle",
    "summary": "L'Exposition Universelle attire une foule dense d'ouvriers venus admirer les progrès techniques. Les ateliers du Champ de Mars et des Invalides sont le théâtre d'échanges fructueux sur les méthodes de métier.",
    "paragraphs": [
      "L'Exposition a accueilli de nombreux visiteurs, notamment une foule importante d'ouvriers venus observer les progrès industriels et techniques. Les ateliers et pavillons du Champ de Mars et des Invalides ont été particulièrement fréquentés par les travailleurs cherchant à comparer leurs méthodes de métier avec les nouveautés présentées."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Le Palais de Luxembourg",
    "summary": "Le grand-duché de Luxembourg s'affirme à l'Exposition avec un pavillon remarquable, illustrant sa mutation industrielle, entre tradition agricole et puissance de ses fonderies modernes, très prisé des visiteurs.",
    "paragraphs": [
      "Le grand-duché de Luxembourg n'est plus aujourd'hui cette contrée exclusivement agricole et merveilleuse qui entourait sa ville capitale d'une ceinture verdoyante de jardins et de prés.",
      "À peine, dont la population s'est augmentée d'un afflux d'émigrants belges et allemands, une industrie prospère a pris naissance. De puissantes fonderies et des exploitations métallurgiques de premier ordre assurent aujourd'hui la prospérité du Grand-Duché.",
      "Le pavillon construit dans la rue des Nations par la colonie luxembourgeoise à l'Exposition a été inauguré par les commissaires généraux. Les nationaux luxembourgeois sont arrivés, à force de travail, à se créer une marque distinctive sur les marchés internationaux.",
      "Le Luxembourg est resté, en partie, un pays de langue française. L'élégance parfaite des objets manufacturés et le souci constant de l'harmonie des choses qui s'attache à tous les produits présentés n'étonneront donc que médiocrement les visiteurs du pavillon."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Une Visite Princière",
    "summary": "L'archiduc Frédéric d'Autriche a visité hier les pavillons de l'Exposition universelle, manifestant un vif intérêt pour les sections techniques, industrielles et artistiques présentées dans le domaine autrichien.",
    "paragraphs": [
      "L'archiduc Frédéric d'Autriche, accompagné de son épouse et de ses trois enfants, a visité hier en détail l'Exposition universelle.",
      "Dès dix heures du matin, l'illustre famille s'est rendue au pavillon d'Autriche, puis à celui de la Bosnie et de l'Herzégovine. Le prince et la princesse ont porté une attention particulière aux diverses sections des palais de la Métallurgie, des Fils et tissus, de la Mécanique, des Industries chimiques, des Moyens de transport et de l'Enseignement."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "La Fête de Nuit",
    "summary": "Les illuminations nocturnes de l'Exposition universelle transforment désormais les palais et les parcs en un spectacle féerique grâce aux multiples essais d'éclairage électrique.",
    "paragraphs": [
      "À mesure que se multiplient les essais d'illumination, les soirées dominicales de l'Exposition universelle deviennent plus brillantes, offrant un spectacle éblouissant grâce aux palais irradiés de feux électriques et aux parcs inondés de lumières éclatantes aux teintes variées.",
      "Le Trocadéro était, ce soir, somptueusement paré de gerbes lumineuses. La tour de trois cents mètres semblait s'élancer encore davantage sous le jet hardi des rampes ardentes courant le long de ses arêtes."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Statistiques des entrées",
    "summary": "Le succès de l'Exposition universelle ne se dément pas : le nombre total d'entrées, incluant les abonnements et les jetons d'ouvriers, a atteint hier le chiffre impressionnant de 149 821 visiteurs.",
    "paragraphs": [
      "Samedi dernier, les entrées payantes ont franchi le cap des 100 000 visiteurs. Si l'on y ajoute les titulaires de cartes de circulation, les abonnés et les détenteurs de jetons d'ouvriers, le total général s'établit à 149 821 entrées."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Concours international de tir à l'arc à Vincennes",
    "summary": "L'annexe de l'Exposition à Vincennes a inauguré hier son grand concours international de tir à l'arc et à l'arbalète, réunissant plus de deux cents compagnies jusqu'au mois d'août.",
    "paragraphs": [
      "La grande attraction de l'annexe de l'Exposition universelle, située à Vincennes, a été hier l'ouverture officielle du grand concours international de tir à l'arc et à l'arbalète.",
      "Plus de deux cents compagnies, venues de la région parisienne et de divers départements, ont envoyé des délégations arborant leurs drapeaux, accompagnées de leurs capitaines et tambours. Les épreuves se poursuivront du 27 mai jusqu'à la fin du mois d'août."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Commémoration au Père-Lachaise",
    "summary": "Une commémoration de la Semaine sanglante au Père-Lachaise a été marquée par des bousculades lors de l'intervention des agents contre les drapeaux rouges, causant la blessure accidentelle d'un jeune enfant.",
    "paragraphs": [
      "À l'occasion de l'anniversaire de la Semaine sanglante, les groupes socialistes et révolutionnaires de Paris et du département de la Seine s'étaient, selon la coutume, rassemblés à la salle Lexcellent, à proximité du cimetière du Père-Lachaise.",
      "Des agents de la force publique ont dû intervenir pour saisir des drapeaux rouges jugés séditieux. Bien qu'aucune arrestation ne fût opérée, des bousculades éclatèrent et des pierres furent lancées. Dans la confusion, un enfant de dix ans, nommé Charles Gortet, fut blessé et dut être transporté d'urgence à l'hôpital Tenon."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Mission de Tonquedec",
    "summary": "Retour à Marseille de trente-six tirailleurs noirs après une périlleuse mission dans le Haut-Oubanghi. Le lieutenant de Tonquedec et le sergent Vincent Salpin témoignent de leurs épreuves sur le Nil.",
    "paragraphs": [
      "Il y a peu de temps, débarquait à Marseille une petite troupe de trente-six tirailleurs noirs, ayant à leur tête un lieutenant et un sergent. Cette troupe était une fraction de nos forces stationnées dans le Haut-Oubanghi.",
      "Le lieutenant s'appelait de Tonquedec ; le sous-officier était le sergent d'infanterie de marine Vincent Salpin. Il convient de retracer le rôle difficile qui fut dévolu à cette mission, partie de M'Bia pour occuper des postes sur le Nil, bravant les difficultés et les incidents avec les Dinkas et la faune locale, avant leur rapatriement."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Banquet de Vertus et discours de M. Léon Bourgeois",
    "summary": "Lors d'un banquet réunissant trois cents convives à Vertus, M. Léon Bourgeois a réaffirmé le soutien du gouvernement à la défense républicaine face aux menaces pesant sur le régime.",
    "paragraphs": [
      "Trois cents convives étaient présents au banquet organisé par l'association républicaine du canton de Vertus. M. Léon Bourgeois a pris la parole et a remercié le gouvernement pour sa défense républicaine.",
      "Demain, le président du Conseil des ministres va se jeter à la brèche pour défendre la République menacée. Dans la bataille annoncée, le gouvernement trouvera ses collègues résolus à la défendre."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Chronique électorale",
    "summary": "Analyse politique soulignant la double menace que représentent le nationalisme pour la liberté et le collectivisme pour l'ordre social, prônant une voie républicaine modérée.",
    "paragraphs": [
      "Le nationalisme menace la liberté, surtout dans l'ordre politique, et le collectivisme la menace surtout dans l'ordre social.",
      "M. Dupuy conclut son exposé en disant : « Ni nationalisme, ni collectivisme ; ni réaction, ni révolution, la République doit gouverner à distance de ces deux écueils. »"
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Actualités",
    "title": "Le Monument Victor Duruy",
    "summary": "Inauguration de la statue de Victor Duruy dans le parc communal de Beauregard. L'œuvre, signée Alfred Lenoir, s'intègre dans un portique néo-ionique conçu par l'architecte Nénot.",
    "paragraphs": [
      "C'est dans le parc communal de Beauregard, au pied de la terrasse de l'ancien château habité en dernier lieu par la veuve du célèbre romancier Honoré de Balzac, converti depuis en hôtel de ville, sur les coteaux qui dominent la ville et la vallée, sous les ombrages des arbres de l'antique domaine, qu'a été élevée la statue de Victor Duruy.",
      "La statue, œuvre de M. Alfred Lenoir, est placée au centre d'un portique de style ionique, conçu par M. Nénot, architecte de l'Institut."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Actualités",
    "title": "Inauguration du Monument Maupassant",
    "summary": "Inauguration d'un monument en bronze à la mémoire de Guy de Maupassant dans le jardin Solférino, réalisé par le statuaire Verlet, en présence des autorités locales.",
    "paragraphs": [
      "Le 27 mai, a été élevé à la mémoire de Guy de Maupassant un monument dans le plus beau square de la ville, le jardin Solférino, derrière le musée de peinture.",
      "C'est un simple bronze, œuvre du statuaire Verlet, d'une exécution nette et sobre qui est du plus heureux effet. La cérémonie d'inauguration a eu lieu devant une foule nombreuse.",
      "Le voile qui recouvrait le monument a été levé et la remise en a été faite à la municipalité par M. G. Le Breton, président du comité. Plusieurs personnalités ont pris la parole, dont M. Neveux, chef du cabinet du ministre de l'Instruction publique, et M. Marcel Cartier, maire de Rouen."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le drame de la rue Charlot",
    "summary": "Un drame passionnel s'est noué rue Charlot : un jeune bijoutier, Eugène Misse, a abattu son rival Marius Colleatte de trois coups de revolver lors d'une visite chez Mlle Léontine Leymarie.",
    "paragraphs": [
      "Hier soir, vers neuf heures, M. Eugène Misse, ouvrier bijoutier âgé de dix-huit ans, se rendait rue Charlot, au troisième étage, chez sa maîtresse, Mlle Léontine Leymarie.",
      "En entrant, il vit en sa compagnie M. Marius Colleatte, un de ses amis, âgé de vingt ans. Brusquement, le jeune homme se leva et sortit ; puis, rentrant armé d'un revolver, il en déchargea trois coups dans la direction de M. Marius Colleatte.",
      "Le malheureux a été frappé d'une balle dans la tête et d'une autre dans le poumon droit. Transporté sur un lit par la concierge, il a rendu le dernier soupir une heure après."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Échos",
    "title": "Statistique des rêves",
    "summary": "Un médecin spécialiste de l'étude des songes apporte des données statistiques sur la fréquence des rêves, révélant que les femmes seraient plus enclines à rêver durant leur sommeil que les hommes.",
    "paragraphs": [
      "Les femmes rêvent-elles plus souvent que les hommes ? Telle est la question que vient de se poser un médecin qui s'en est fait une spécialité.",
      "Treize hommes contre trente-trois femmes seraient rêveurs, et ce constamment pendant leur sommeil. Le nombre des hommes qui rêvent peut être qualifié comme une propension rare."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Couronnement d'une rosière à Meulan",
    "summary": "La ville de Meulan a célébré le traditionnel couronnement d'une rosière, une distinction honorifique décernée à Mlle Berthe Letertre, jeune couturière dévouée à sa mère veuve.",
    "paragraphs": [
      "Meulan, 27 mai. La cérémonie du couronnement de la rosière, instituée chaque année par un legs fait par Mme de l'Etaug, femme du général, a eu lieu cet après-midi.",
      "Cette année, la rosière est Mlle Berthe Letertre, couturière, âgée de dix-neuf ans, qui soutient par son travail assidu sa mère veuve."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Sports",
    "title": "Prix du Jockey-Club à Chantilly",
    "summary": "Dans une atmosphère brillante, le Prix du Jockey-Club s'est disputé à Chantilly. La victoire a été remportée par La Morinière, monté par le jockey Brennan, devant une foule nombreuse.",
    "paragraphs": [
      "C'est par un temps merveilleux qu'a été disputé, sur la pelouse de Chantilly, notre Derby français. Jamais l'assistance n'avait été plus nombreuse.",
      "C'est devant cette assemblée d'une particulière distinction que s'est couru le Prix du Jockey-Club, événement sportif le plus important de l'année au point de vue technique.",
      "La victoire est revenue à La Morinière, appartenant à M. le baron Roger, monté par le jockey Brennan."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Les mineurs de la Loire",
    "summary": "À Saint-Étienne, un conflit oppose les mineurs aux compagnies concernant le mandat des délégués. Malgré l'avis des arbitres, les ouvriers envisagent de faire appel de la sentence.",
    "paragraphs": [
      "On mande de Saint-Étienne : MM. Glesser et Porte, choisis comme arbitres par les mineurs et les compagnies au sujet de la remontée des ouvriers, ont émis l'avis que le mandat des délégués, à la remontée de trois heures, était terminé.",
      "Contrairement à l'avis donné par M. Jaurès, les mineurs auraient l'intention de faire appel de cette sentence devant la commission nommée par le ministre."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vol chez un bijoutier",
    "summary": "M. Wertmuller, bijoutier rue de Lancry, a été victime d'une tentative de cambriolage cette nuit. Les malfaiteurs, surpris en pleine besogne, ont été mis en fuite, abandonnant une partie de leur butin.",
    "paragraphs": [
      "M. Wertmuller, bijoutier au 47, rue de Lancry, fut réveillé la nuit dernière par le fracas d'un bris de vitre provenant de sa boutique. Il aperçut alors un individu, accompagné d'une femme, qui commençait à dévaliser son magasin.",
      "Le commerçant a constaté qu'on lui avait dérobé un écrin de bijoux. Les voleurs, en détalant précipitamment, ont perdu une partie de leur larcin, qui a été récupérée et rapportée par des voisines."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une rixe au quai Valmy",
    "summary": "Une violente altercation au quai de Valmy a tourné au drame hier soir. L'ouvrier mineur Claude Journod a été grièvement blessé d'un coup de couteau et conduit d'urgence à l'hôpital Saint-Louis.",
    "paragraphs": [
      "Au cours d'une rixe survenue hier soir, devant le numéro 31 du quai de Valmy, un ouvrier mineur, le nommé Claude Journod, a été frappé d'un violent coup de couteau dans la poitrine.",
      "Le blessé, dont l'état paraît aujourd'hui désespéré, a été transporté d'urgence à l'hôpital Saint-Louis pour y recevoir les soins nécessaires."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Vie Économique et Transports",
    "title": "Extension du réseau de tramways parisiens",
    "summary": "La Compagnie parisienne électrique modernise son réseau. Grâce à une gestion rigoureuse, elle étend ses lignes vers Saint-Denis et Neuilly, nécessitant une augmentation de son capital social.",
    "paragraphs": [
      "La Compagnie parisienne électrique, avec un capital relativement restreint, a pu remplacer en quelques années la traction animale par la traction mécanique sur toute l'étendue de son réseau. Cette transformation, réalisée sans augmentation de capital social, a eu pour effet d'accroître considérablement les recettes du trafic.",
      "Ces brillants résultats ont conduit la compagnie à poursuivre l'extension de son réseau. Deux nouvelles lignes, Saint-Denis-Aubervilliers-Opéra et Neuilly-Saint-Philippe-du-Roule, viennent d'être achevées, et des demandes sont déposées pour cinq lignes supplémentaires.",
      "Afin de financer ce vaste programme d'équipement, les actionnaires ont voté l'élévation du capital social."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Feuilleton",
    "title": "Mariage Secret : Quatrième partie",
    "summary": "Dans le silence de la nuit, Manuèle s'abandonne à ses souvenirs, tandis que dans le salon voisin, Henri et Rolande échafaudent des plans pour leur vie future malgré la ruine qui les menace.",
    "paragraphs": [
      "Dans le silence de la chambre, Manuèle tente de trouver le sommeil, suivant les prescriptions du docteur et de Claude. Elle repense longuement aux souvenirs de son passé qui refont surface dans la pénombre.",
      "Pendant ce temps, dans le petit salon, les amoureux, Henri et Rolande, font des projets pour l'avenir. Malgré l'effondrement de leur fortune, ils envisagent courageusement une vie de travail à Paris et discutent avec passion de leur condition de vie future."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Vie Économique",
    "title": "Chronique de la Bourse et des valeurs",
    "summary": "La séance boursière est marquée par la fermeté des valeurs de transport et les succès de l'industrie métallurgique. Le marché minier reste prudent malgré les bons résultats des gisements de la Huelva.",
    "paragraphs": [
      "L'action de la Compagnie internationale des wagons-lits est ferme à 725 francs. Grâce aux amortissements successifs, l'estimation des voitures a été ramenée au tiers de la valeur primitive.",
      "La Compagnie générale de construction se maintient aux environs de 156 francs, encouragée par de récents dividendes et les développements constants de l'industrie métallurgique.",
      "La Compagnie urbaine d'Éclairage par le gaz acétylène a signé un contrat avantageux avec la municipalité de Nogaro. De plus, les résultats de l'exercice en cours permettent d'envisager la répartition d'un acompte sur dividende.",
      "Les valeurs russes restent fermes, notamment la Société générale des Hauts Fourneaux, Forges et Aciéries en Russie, qui bénéficie de conditions d'exploitation favorables.",
      "Le marché des mines d'or est légèrement plus faible en raison de réalisations de bénéfices, malgré des nouvelles excellentes concernant les gisements de la Huelva Central Copper Mining."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Agriculture et Économie",
    "title": "Sommaire de L'Agriculture Nouvelle",
    "summary": "Le dernier numéro de L'Agriculture Nouvelle propose une analyse technique approfondie des enjeux ruraux actuels, traitant du syndicalisme, de la culture du tabac, de l'aviculture et de la viticulture.",
    "paragraphs": [
      "Le journal L'Agriculture Nouvelle publie cette semaine un numéro riche en informations techniques, incluant des articles consacrés au développement des syndicats agricoles, aux méthodes de culture du tabac, aux progrès de l'horticulture présentés à l'Exposition universelle, ainsi que des études spécialisées sur l'aviculture et la viticulture."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Informations Ferroviaires",
    "title": "Fêtes de la Pentecôte : Trains de plaisir pour Bruxelles",
    "summary": "Pour les fêtes de la Pentecôte, la Compagnie des chemins de fer du Nord propose des tarifs réduits sur ses lignes vers Bruxelles, avec un départ prévu dans la nuit du 2 au 3 juin pour un retour le 6.",
    "paragraphs": [
      "La Compagnie des chemins de fer du Nord organise, à l'occasion des fêtes de la Pentecôte, des trains de plaisir à prix réduits au départ de Paris et à destination de Bruxelles.",
      "Le départ de ces convois est fixé dans la nuit du 2 au 3 juin, pour un retour prévu à Paris le 6 juin."
    ]
  }
];
