// Date: 1900-01-08
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-08 (Version Restaurée, 36 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie",
    "title": "La Caisse nationale des retraites pour la vieillesse",
    "summary": "Le bilan annuel de la Caisse nationale des retraites confirme la progression constante de l'épargne ouvrière, témoignant de l'esprit de prévoyance grandissant des Français pour assurer leur avenir.",
    "paragraphs": [
      "Le bilan annuel de la Caisse nationale des retraites pour la vieillesse, qui vient de paraître, permet de mesurer les progrès que l'esprit de prévoyance a réalisés dans le monde du travail.",
      "Il y a déjà près de cinquante ans que fonctionne cette utile institution. Elle recueille les prélèvements que l'ouvrier laborieux et économe peut faire sur son salaire et les fait fructifier en capitalisant les intérêts, afin de lui assurer, au soir de sa vie, des ressources qui le mettent à l'abri de l'indigence.",
      "J'ai sous les yeux le tableau des versements collectifs et individuels effectués depuis l'origine. En moins de trente-sept ans, leur nombre s'est élevé à 12 330 744, représentant une somme de 689 322 627 francs.",
      "Non seulement nos populations n'ont pas relâché leurs efforts, mais avec leur activité au champ, dans l'usine et à l'atelier, s'est accru prodigieusement le sentiment de l'économie raisonnée.",
      "Telle est, en un rapide coup d'œil, la mission de la Caisse des retraites pour la vieillesse. Elle justifie la qualité de nationale qui lui a été donnée. Elle n'est pas obligatoire ; c'est de leur plein gré que les laborieux lui apportent spontanément leurs économies pour s'assurer contre les mauvais jours."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Politique",
    "title": "Élection sénatoriale du 3 janvier - Guadeloupe",
    "summary": "Suite au décès de M. Isaac, une élection sénatoriale s'est tenue en Guadeloupe. M. Cicéron a été élu avec 186 voix, devançant MM. De Monchy et Dufond.",
    "paragraphs": [
      "Une élection sénatoriale a eu lieu à la Guadeloupe, le 3 janvier dernier, pour le remplacement de M. Isaac, sénateur républicain, décédé.",
      "Voici les résultats définitifs : MM. Cicéron, républicain, 186 voix ; De Monchy, républicain, 128 voix ; Dufond, républicain, 44 voix. M. Cicéron est proclamé élu."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique étrangère",
    "title": "L'occupation d'In-Salah",
    "summary": "La mission scientifique Flamand, attaquée à Tidikelt, a repoussé ses assaillants. La prise d'In-Salah marque un point stratégique majeur pour asseoir l'autorité française dans le Sahara.",
    "paragraphs": [
      "Nous annoncions hier que la mission scientifique Flamand, chargée d'explorer certaines régions du Sahara soumises à l'influence française, avait été récemment attaquée dans l'oasis de Tidikelt.",
      "La mission, escortée d'un goum d'environ cent quarante hommes, commandé par le capitaine Pein, a été subitement assaillie par une troupe de ksouriens venus d'In-Salah. Malgré son faible effectif, elle a victorieusement repoussé les agresseurs et fait plus de soixante prisonniers.",
      "La soumission d'In-Salah revêt une importance capitale pour notre domination dans le Sahara ; c'était, en effet, le foyer principal où se fomentaient les intrigues contre la France."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un taureau furieux à Mont-de-Marsan",
    "summary": "À Mont-de-Marsan, un taureau effrayé par un cycliste a semé la terreur en ville, blessant plusieurs personnes et dégradant un café avant d'être abattu par les autorités.",
    "paragraphs": [
      "Le sieur Eveyris, propriétaire à Montsoué, conduisait hier, vers cinq heures et demie, un taureau vers la gare de Mont-de-Marsan. Arrivé place du Sablar, l'animal, effrayé par le passage d'une bicyclette, s'élança brusquement dans la direction de la ville.",
      "L'animal renversa plusieurs passants et défonça la devanture du café de la Renaissance. Il fut finalement abattu par M. Marin, un écarteur landais, aidé par les gendarmes.",
      "L'un des blessés, M. Persillon, est dans un état grave."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le mystère de la propriété Noack",
    "summary": "L'enquête sur la propriété Noack à Francheville révèle la macabre découverte de restes appartenant à deux femmes distinctes, suggérant la main d'un criminel particulièrement aguerri.",
    "paragraphs": [
      "C'est un mystère épouvantable qui entoure la propriété Noack, à Francheville. Il résulte des dernières investigations qu'il s'agit non plus d'une, mais de deux femmes coupées en morceaux.",
      "Les débris humains extraits de la boutasse comprennent des membres et des fragments appartenant à deux corps distincts. L'un est celui d'une femme âgée de soixante à soixante-dix ans, l'autre d'une femme d'une soixantaine d'années. Les conditions de la découverte révèlent une main particulièrement habile et expérimentée.",
      "Le mystère demeure impénétrable, bien que deux crimes aient été commis dans des conditions identiques à plus d'un an d'intervalle."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame de la jalousie à Montreuil-sous-Bois",
    "summary": "À Montreuil-sous-Bois, Georges Griesbach, un ébéniste de vingt-deux ans, a poignardé son ancienne maîtresse, Marguerite Lecocq, d'un coup de tiers-point. La victime a été transportée à l'hôpital dans un état alarmant.",
    "paragraphs": [
      "La rue de Paris, à Montreuil-sous-Bois, a été le théâtre d'un drame ayant la jalousie pour mobile. Georges Griesbach, un ébéniste de vingt-deux ans, a poignardé son ancienne maîtresse, Marguerite Lecocq.",
      "Après une vive altercation, Griesbach a frappé la jeune femme d'un violent coup de tiers-point à la poitrine. La victime a été transportée dans un état alarmant à l'hôpital Saint-Antoine. L'auteur a été arrêté sur-le-champ par les agents du vingtième arrondissement."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Guerre",
    "title": "La guerre au Transvaal",
    "summary": "La situation des troupes britanniques paraît critique au Transvaal. L'issue des combats autour de Ladysmith et l'attaque du camp de César laissent craindre une issue désespérée pour les forces anglaises.",
    "paragraphs": [
      "Sur la demande de M. Flamand et sur avis conforme de l'autorité militaire, des renforts ont été immédiatement dépêchés à la mission afin de fortifier ses positions et d'assurer la liberté de ses mouvements.",
      "On est encore sans nouvelles précises sur le résultat de l'attaque dirigée par les Boers contre le camp de César, dépendance de Ladysmith. Si l'on rapproche cette information du télégramme d'hier relatif à la sortie de Mafeking, on peut en conclure que la situation des Anglais est devenue fort précaire."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Arrestations et troubles dans les rangs anglais",
    "summary": "Le moral des troupes anglaises semble en déroute : lors de l'embarquement à Southampton vers l'Afrique du Sud, des scènes d'insubordination ont contraint la police à intervenir contre des soldats enivrés.",
    "paragraphs": [
      "Plusieurs hommes ont été appréhendés au Cap et mis en état d'arrestation, leur conduite étant jugée suspecte. Des scènes pénibles se sont déroulées à Southampton pendant l'embarquement du convoi.",
      "Des soldats, en état d'ivresse, sautaient hors de la passerelle sous prétexte de dire un ultime adieu à leurs proches, refusant obstinément de regagner le bord. La police dut intervenir, la discipline ayant totalement cessé de régner parmi ces troupes."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Nouvelles du front : insubordinations et récoltes",
    "summary": "La discipline flanche à Ladysmith où le général White aurait fait fusiller quarante soldats mutins. Parallèlement, les récoltes se poursuivent au Transvaal, cultivées par les populations indigènes.",
    "paragraphs": [
      "D'après les dernières nouvelles, l'insubordination serait devenue très fréquente parmi les troupes assiégées de Ladysmith. Le général White se serait vu contraint de faire fusiller quarante soldats qui refusaient d'obéir aux ordres de leurs officiers.",
      "Concernant les récoltes du Transvaal, elles seraient satisfaisantes et se poursuivraient, cultivées par des indigènes au milieu même du théâtre des hostilités."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Capture du navire Herzog",
    "summary": "Le navire allemand Herzog, suspecté de transporter des marchandises prohibées pour le Transvaal, a été intercepté par la marine anglaise et escorté vers le port de Durban.",
    "paragraphs": [
      "Le navire allemand Herzog, appartenant à la même compagnie que le Bundesrath, a été capturé en haute mer et conduit à Durban par un bâtiment de guerre anglais. Les autorités britanniques avaient averti qu'elles ne toléreraient aucune livraison de marchandises à destination du Transvaal."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Diplomatie",
    "title": "Le Bundesrath et les lignes télégraphiques",
    "summary": "Le gouvernement allemand prépare une nouvelle note diplomatique. Simultanément, la Russie interroge les puissances européennes sur la légalité de l'interception des télégrammes vers le Transvaal par l'Angleterre.",
    "paragraphs": [
      "Au sujet du Bundesrath, on assure que les ministres allemands procèdent à la rédaction d'une seconde note diplomatique. Les journaux affirment que l'Allemagne épuisera tous les moyens diplomatiques pour faire respecter ses droits.",
      "Le gouvernement russe a adressé une circulaire aux cabinets européens concernant l'interception, par l'Angleterre, des télégrammes privés et administratifs à destination du Transvaal et de l'État d'Orange, demandant si une telle mesure est conciliable avec les stipulations du traité international de Saint-Pétersbourg."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "Dossier contre M. Chamberlain",
    "summary": "L'Indépendance belge publie des documents accablants suggérant que le Colonial Office était informé des préparatifs de l'attentat de 1895 contre le Transvaal et a protégé la Chartered Company.",
    "paragraphs": [
      "L'Indépendance belge vient de publier un dossier inédit constituant un réquisitoire contre M. Chamberlain, ministre des Colonies, au sujet de ses préparatifs lors de l'attentat de 1895 contre le Transvaal.",
      "Ce document révèle que le Colonial Office était parfaitement informé des préparatifs et suggère l'existence d'une entente secrète d'impunité accordée à la Chartered Company. L'enquête de la Chambre des communes aurait été menée par la majorité ministérielle afin d'atténuer les responsabilités du ministre."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Remise de décorations et limites d'âge",
    "summary": "Le général de Boysson a remis des décorations à Clermont-Ferrand. Par ailleurs, le ministère de la Guerre a publié la liste des généraux de division qui atteindront la limite d'âge en 1900.",
    "paragraphs": [
      "À Clermont-Ferrand, après une revue des troupes, le général de Boysson a procédé à la remise de la croix aux officiers nouvellement décorés.",
      "La liste des généraux de division atteints par la limite d'âge pour l'année 1900 a été officiellement publiée, incluant notamment MM. Borris, de Sesmaisons et Callet."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Informations maritimes",
    "title": "Engagements dans la flotte",
    "summary": "La Marine nationale ouvre les engagements pour les jeunes gens de 18 ans dans ses cinq ports militaires. La durée du service est fixée à cinq ans, avec des conditions d'aptitude strictes.",
    "paragraphs": [
      "La circulaire annuelle relative aux engagements dans la flotte concerne les jeunes gens âgés de 18 ans au moins. Les engagements sont reçus dans les cinq ports militaires de la République : Cherbourg, Brest, Lorient, Rochefort et Toulon.",
      "La durée de l'engagement est fixée à cinq ans, sauf exceptions prévues par le règlement. Des conditions strictes de taille et d'instruction, notamment savoir lire et écrire, sont exigées des candidats."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nouvelles maritimes",
    "title": "Essais du Narval",
    "summary": "Le sous-marin Narval rencontre des problèmes de stabilité dus à des infiltrations d'eau entre ses coques. Des modifications structurelles sont nécessaires, malgré la qualité de sa conception.",
    "paragraphs": [
      "Les essais du sous-marin Narval rencontrent actuellement des difficultés de stabilité, dues à l'introduction d'eau entre les deux coques, ce qui nécessite un compartimentage plus complet. Malgré ces déboires techniques, sa conception demeure jugée d'une admirable ingéniosité."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Chronique culturelle",
    "title": "Anniversaire de la mort de Gambetta",
    "summary": "La cérémonie commémorative de l'anniversaire de la mort de Gambetta s'est tenue aux Jardies. En présence de nombreuses délégations, des discours ont célébré le patriotisme et l'union républicaine du défunt.",
    "paragraphs": [
      "La cérémonie de l'anniversaire de la mort de Gambetta a eu lieu aux Jardies. Malgré le temps maussade, de nombreuses délégations et personnalités officielles étaient présentes pour honorer sa mémoire.",
      "M. le maire de Sèvres et M. Cazot ont prononcé des discours vibrants, rappelant le rôle éminent du patriote disparu et exhortant l'assistance à l'union nationale et à la fraternité républicaine."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nécrologie",
    "title": "Décès d'Ernest Bienfait, acteur du Petit-Lazari",
    "summary": "Le monde du spectacle perd une figure historique avec la disparition d'Ernest Bienfait, doyen des artistes, célèbre pour ses débuts au théâtre du Petit-Lazari, haut lieu du boulevard du Crime.",
    "paragraphs": [
      "Ernest Bienfait, véritable doyen des artistes de scène, vient de s'éteindre. Il était l'un des derniers acteurs ayant fait ses débuts au célèbre théâtre du Petit-Lazari, situé sur le boulevard du Crime.",
      "Ce théâtre, ainsi que le boulevard du Temple dans son ensemble, sont entrés dans la légende pour leur ambiance populaire unique, si admirablement décrite par des auteurs tels que Théodore de Banville."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Dépêches de l'étranger",
    "title": "Informations diverses",
    "summary": "Chronique internationale : Paul Déroulède gagne l'Espagne, tandis que la justice britannique se prononce sur le sort de Louise Masset et autorise l'extradition d'un ressortissant français.",
    "paragraphs": [
      "Paul Déroulède est arrivé à Gênes et s'embarquera très prochainement pour Barcelone.",
      "À Londres, les diverses pétitions en faveur de Louise Masset, condamnée pour infanticide, ont été définitivement rejetées par le secrétaire de l'Intérieur.",
      "Le tribunal de Bow-Street a prononcé l'extradition d'un Français nommé Eugène Marchal, poursuivi par la justice pour un délit de vol."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Manifestation au Père-Lachaise",
    "summary": "La traditionnelle manifestation ouvrière sur la tombe de Blanqui s'est déroulée dans le calme. Malgré un service d'ordre important, aucun trouble n'a été à déplorer lors du rassemblement au cimetière.",
    "paragraphs": [
      "La manifestation organisée annuellement par les différents partis ouvriers sur la tombe de Blanqui s'est tenue hier.",
      "Dès deux heures de l'après-midi, un important service d'ordre avait été mis en place. Les gardiens de la paix des divers arrondissements avaient été mandés afin de surveiller les abords du cimetière.",
      "Vers une heure, les délégations se sont rendues sur les lieux. Après les discours d'usage, les manifestants ont déposé plusieurs couronnes sur la sépulture.",
      "Vers cinq heures, la cérémonie a pris fin et les manifestants se sont dirigés vers le boulevard de Ménilmontant. La sortie du cimetière s'est effectuée avec un calme parfait, sans que l'ordre public soit troublé."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Les Tribunaux",
    "title": "Assassinat d'une vieille femme",
    "summary": "Le soldat déserteur Jean-Baptiste Coustive a été condamné aux travaux forcés à perpétuité par la cour d'assises des Côtes-du-Nord pour le meurtre sauvage d'une aubergiste à Quévert.",
    "paragraphs": [
      "Dans la nuit du 2 août dernier, la veuve Lefeuvre, âgée de soixante-trois ans, aubergiste à Quévert (Côtes-du-Nord), fut assassinée à son domicile. Le corps fut retrouvé gisant dans une mare de sang, portant de nombreuses blessures infligées par un instrument tranchant.",
      "L'enquête permit d'établir que le coupable était un nommé Jean-Baptiste Coustive, âgé de vingt-trois ans, soldat déserteur. Arrêté le 10 août à Rennes alors qu'il commettait un nouveau forfait, il fut transféré à la prison de Dinan où il tenta de tuer un gardien.",
      "Il était également recherché pour un viol commis à La Bouillie sur une enfant de huit ans. Comparaissant samedi devant la cour d'assises des Côtes-du-Nord, il a été condamné aux travaux forcés à perpétuité."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "La grève des tisseurs de Saint-Étienne",
    "summary": "À Saint-Étienne, la tension persiste chez les tisseurs. Après une médiation préfectorale, les ouvriers ont voté à l'unanimité l'acceptation du nouveau tarif et le recours à l'arbitrage pour résoudre le conflit.",
    "paragraphs": [
      "La situation paraît à nouveau tendue à Saint-Étienne. Le bureau du syndicat des fabricants de velours a été reçu par le préfet, assisté de M. Krauss, député de Lyon, et M. Chavanon, maire de Saint-Étienne.",
      "M. Orimanelli a fait remarquer à la grande fabrique que le principe de l'arbitrage était une nécessité. Les ouvriers, décidés à adopter le tarif élaboré par la commission mixte, doivent se réunir à nouveau demain.",
      "Les grévistes ont tenu une réunion au Prado ce matin. Après lecture d'une communication de la chambre syndicale des tissus, les deux propositions soumises, soit l'acceptation du tarif de 1900 et la soumission à l'arbitrage des points en litige, ont été votées à l'unanimité."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Révocation de M. Buffet",
    "summary": "Le ministre des Finances a refusé la démission de l'inspecteur des finances, M. Jean Buffet, pour lui préférer une révocation officielle motivée par son indiscipline, malgré les attaques personnelles contenues dans sa lettre.",
    "paragraphs": [
      "Le ministre des Finances, de retour de la Sarthe, a pris connaissance de la lettre de démission de M. Jean Buffet, inspecteur des finances. Dédaigneux des attaques personnelles contenues dans cette missive, le ministre a refusé ladite démission et a prononcé la révocation du fonctionnaire pour cause d'indiscipline."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Replantation des arbres sur les quais",
    "summary": "Répondant aux protestations des riverains, la municipalité de Paris a entamé le remplacement des arbres abattus sur les quais Malaquais et Voltaire, en vue de l'Exposition universelle.",
    "paragraphs": [
      "L'administration, suite aux nombreuses protestations contre l'arrachement des arbres du quai Malaquais et du quai Voltaire, avait promis leur remplacement avant l'Exposition universelle. Depuis une semaine, les ouvriers de la ville de Paris replantent des paulownias, des platanes et des sycomores."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Inauguration du buste du professeur Raulin",
    "summary": "Le buste du professeur Raulin, illustre fondateur de l'École de chimie industrielle de Lyon, a été solennellement inauguré hier à l'Institut de chimie, en présence du ministre de l'Instruction publique, M. Leygues.",
    "paragraphs": [
      "Le buste du professeur Raulin, fondateur de l'École de chimie industrielle de Lyon, a été inauguré hier matin à l'Institut de chimie de cette ville. La cérémonie a eu lieu sous la présidence de M. Leygues, ministre de l'Instruction publique, assisté de nombreuses personnalités locales."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Mal de mer et responsabilité juridique",
    "summary": "Une passagère américaine, Mme Sarah Ungerman, poursuit la compagnie Hamburg-American en réclamant cinq mille dollars d'indemnités pour avoir été empêchée de profiter des repas en raison de son mal de mer.",
    "paragraphs": [
      "Une Américaine, Mme Sarah Ungerman, va intenter un procès à la Compagnie Hamburg-American. Elle réclame cinq mille dollars de dommages-intérêts pour avoir souffert du mal de mer lors de sa traversée, ce qui l'aurait empêchée de profiter des repas et des services fournis par la compagnie."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agressions et violences à Paris",
    "summary": "M. Arthur Mélandet a été sauvagement dépouillé boulevard Voltaire par trois individus. Par ailleurs, un client irascible a été appréhendé après avoir causé des dégâts dans un débit de la rue de Charonne.",
    "paragraphs": [
      "M. Arthur Mélandet, représentant de commerce, a été attaqué boulevard Voltaire par trois individus qui l'ont roué de coups avant de lui dérober sa montre, sa bourse et son portefeuille. Le blessé a pu fournir un signalement précis de ses agresseurs.",
      "Un individu nommé Léopold Guattaste a causé un trouble grave dans un débit-restaurant de la rue de Charonne. Mécontent d'un refus de service, il a brisé le mobilier et blessé le garçon de restaurant, M. Albert Pirehal. Il a été mis à la disposition de la police."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Morts inexpliquées",
    "summary": "Plusieurs décès subits ont été constatés à Paris : une sexagénaire place Saint-Michel, une inconnue rue de Richelieu et un employé de commerce rue aux Ours.",
    "paragraphs": [
      "Une dame nommée Pauline Philippe, âgée de soixante-six ans, est décédée subitement sur le terre-plein de la place Saint-Michel. Une autre dame, d'identité inconnue, a été découverte sans vie rue de Richelieu. Enfin, M. Émile Johannet, employé de commerce, a succombé subitement dans un magasin de la rue aux Ours."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le chien de Sarah Bernhardt",
    "summary": "Un litige ferroviaire oppose la célèbre tragédienne Sarah Bernhardt aux autorités, après qu'elle a tenté de garder son chien en première classe. L'affaire est portée devant le parquet de Bordeaux.",
    "paragraphs": [
      "Mme Sarah Bernhardt a été impliquée dans un litige ferroviaire pour avoir souhaité conserver son chien auprès d'elle dans un compartiment de première classe. Malgré l'intervention d'un commissaire et la rédaction d'un procès-verbal, l'affaire a été transmise au parquet de Bordeaux, qui a ouvert une enquête sur l'état civil et les moyens d'existence de l'artiste. Mme Bernhardt a accueilli la nouvelle avec une certaine ironie."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Rixe sanglante et violences conjugales",
    "summary": "La violence sévit dans les rues de la capitale : un journalier a été poignardé rue Fondary, et un chiffonnier a été arrêté pour avoir violemment frappé son épouse.",
    "paragraphs": [
      "Frédéric Ferry, journalier, a été grièvement blessé de deux coups de couteau par un inconnu rue Fondary. Une enquête est actuellement en cours.",
      "Eugène Paris, chiffonnier, a été arrêté pour avoir violemment frappé son épouse, qui a dû être admise d'urgence à l'hôpital Tenon. Le coupable a été consigné à la disposition de la justice."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendies à Paris",
    "summary": "Un incendie domestique rue Damrémont a provoqué plusieurs cas d'asphyxie. L'intervention rapide des pompiers a été entravée par une insuffisance de pression d'eau.",
    "paragraphs": [
      "Un incendie s'est déclaré rue Damrémont dans l'appartement de M. Dalmas. La fumée a provoqué des cas d'asphyxie parmi les occupants. L'intervention des pompiers a été entravée par une pression d'eau insuffisante, ce qui a aggravé l'ampleur des dégâts matériels."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue",
    "summary": "Chronique de la banlieue parisienne : un incendie à Courbevoie, une élection municipale à Levallois, des accidents du travail et des voies publiques à Asnières, Pantin et Ivry-sur-Seine.",
    "paragraphs": [
      "À Courbevoie, un violent incendie a détruit tout le matériel et les machines d'un lavoir situé rue de la Boule. Les dégâts s'élèvent à 10 000 francs.",
      "À Levallois-Perret, le conseil municipal a élu le premier adjoint comme nouveau maire, suite au décès de M. Eugène Gilbert.",
      "À Asnières, une jeune ouvrière, Lucile Lugross, a eu le bras mutilé par une courroie de transmission dans une usine de la rue des Bas.",
      "À Pantin, une rixe générale rue Hoche a laissé un charretier, M. Louis Bellanger, avec la jambe brisée et de graves blessures.",
      "À Ivry, le corps déchiqueté d'un homme a été trouvé sur la voie ferrée. Par ailleurs, deux enfants ont été sauvés de la noyade par M. Gaston Renard alors qu'ils jouaient sur la Seine."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Commerce",
    "title": "HOUBLONS",
    "summary": "Le marché du houblon à Nuremberg clôture l'année sur une note de fermeté, malgré l'épuisement des stocks, tandis que les places de Bourgogne et de Belgique affichent une activité plus calme.",
    "paragraphs": [
      "À Nuremberg, les affaires ont été actives en fin d'année et, comme les recettes sont peu importantes, les stocks se réduisent journellement. Il s'ensuit que les prix ont été tenus très fermes et on a payé généralement 5 francs de plus par 50 kilos.",
      "En général, bien que la plus grande partie de l'importante récolte 1899 soit à cette heure absorbée, il est certain qu'il reste néanmoins des provisions. Mais pour l'instant, les détenteurs de ces marchandises ne sont pas pressés de vendre. De là ce ton de fermeté qui a clôturé les opérations de l'année.",
      "Voici les derniers cours pratiqués à Nuremberg : Marktwaard prima 95 à 106 fr; secunda, 86 à 90 fr. Hallertau, 115 à 145 fr.; Wolnzach, 110 à 135 fr.; Spalt, 145 à 160 fr.; Saaz, 150 à 190 fr.; Wurtemberg, 110 à 130 fr.; Bade, 105 à 125 fr.; Alsace, 100 à 115 fr. les 50 kilos.",
      "En Bourgogne, on paie 66 fr. le 50 kilos premier choix en culture.",
      "En Belgique, affaires très calmes. À Alost et à Poperinghe, les prix sont restés les mêmes, soit de 47 à 50 fr. les 50 kilos."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Santé",
    "title": "PETITE EXPOSITION AVANT LA GRANDE",
    "summary": "Le professeur Busch, fort de ses travaux sur le chlorhydrate de pilocarpine, prétend avoir vaincu la calvitie et organise une exposition de témoignages dans son laboratoire parisien.",
    "paragraphs": [
      "Les journaux scientifiques et de médecine du monde entier ont relaté la découverte, par le professeur Busch, des curieuses propriétés que possède un alcaloïde du jaborandi, le chlorhydrate de pilocarpine, d'engendrer de la substance pileuse et de produire de véritables cheveux.",
      "Grâce aux agents thérapeutiques nouveaux dont le savant spécialiste a complété cette précieuse découverte, on peut assurer que la calvitie est définitivement vaincue. La science moderne possède désormais le moyen de guérir toutes les affections du cuir chevelu.",
      "C'est pour convaincre les derniers incrédules que le professeur Busch s'est décidé à une grande manifestation. À dater de ce jour, il ouvre dans son laboratoire de Paris, 10, rue des Bons-Enfants, une exposition publique des milliers d'attestations et de lettres de remerciements légalisées des personnes de tout âge qui, grâce à lui, ont retrouvé leur chevelure.",
      "Quant à ceux qui ne le peuvent, ils n'ont qu'à écrire leur cas avec le plus de détails possibles au professeur Busch ; il leur enverra gratuitement le moyen de conquérir ou de retrouver rapidement une chevelure digne d'Absalon."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Feuilleton",
    "title": "LES TRAGÉDIES DE L'AMOUR",
    "summary": "Un extrait dramatique où la douleur d'un amour sans espoir pousse un homme à s'éloigner, laissant Colette et le marquis dans une atmosphère empreinte de compassion.",
    "paragraphs": [
      "La haine, fille de l'amour. Il se leva, lourdement, comme si depuis quelques minutes il avait eu à supporter un fardeau énorme, celui de son désespoir. Il n'ajouta pas un mot. Lentement, il se dirigea vers la porte. Là, il se retourna, salua la jeune fille et le marquis. Et il sortit, le cœur très gros.",
      "« Ma foi, dit gaiement le marquis, voici ma chère Colette, une aventure à laquelle je ne m'attendais pas. » Il cessa d'être gai en la voyant grave et triste. « Qu'avez-vous, mon enfant ? »",
      "« Cet homme souffre à cause de moi. — Est-ce votre faute ? — Non, mais la souffrance n'en est pas moins cruelle. Puisqu'il aime sans espoir. » Le marquis n'entendit pas, mais il la comprit.",
      "Il vint à elle, lui prit les mains, l'attira contre lui avec tendresse et l'embrassa au front comme si elle avait été sa fille."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Sports",
    "title": "LES SPORTS",
    "summary": "Bilan sportif : le retour attendu de Zimmerman, les succès cyclistes de Meyers, le comparatif des accidents hippiques contre automobiles, et les résultats du match de rugby Angleterre-Galles.",
    "paragraphs": [
      "UNE NOUVELLE INATTENDUE : Zimmerman, le grand Zim, le Yankee volant, revient. En mai prochain, nous le verrons sur nos pistes. C'est, paraît-il, absolument décidé. Zim s'embarquera le mois prochain pour la France.",
      "ÉPREUVE INIMITABLE : Meyers, le crack hollandais, continue la série de ses triomphes au pays des dollars. Dans un match à trois qu'il disputait avant-hier à Jacksonville contre Tommaselli et Banker, il a gagné deux manches sur trois.",
      "LES GAIETÉS DU CHEVAL : Le Vélo d'hier publie son relevé mensuel des accidents causés en décembre par les chevaux et par les automobiles. À l'actif des chevaux : 52 morts et blessés. À l'actif des autos : 1 mort et 20 blessés.",
      "MICHAEL JOUET : À la Nouvelle-Orléans, le gosse Michaël vient de prendre part à des courses hippiques. Dans une première épreuve, il ne se classa pas ; dans une seconde, il arriva troisième sur dix partants.",
      "LA BOXE : Le match Jeffries-Corbett ne se disputera pas à Paris, ainsi qu'on l'avait tout d'abord annoncé. C'est au-delà de l'Atlantique qu'il aura lieu, le 24 mars prochain.",
      "LE FOOTBALL : Le grand match annuel de football-rugby, Angleterre contre pays de Galles, s'est disputé avant-hier à Gloucester. Les Gallois ont gagné par 13 points à 0."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Économie",
    "title": "CAUSERIE FINANCIÈRE",
    "summary": "La liquidation de fin d'année s'est achevée sans heurts, favorisée par la prudence des investisseurs. Le marché affiche une détente monétaire notable et une fermeté du 3 %, malgré une circulation record de billets.",
    "paragraphs": [
      "On avait émis de telles appréhensions au sujet de la liquidation de fin d'année que les gens prudents avaient jugé opportun de ne pas attendre le dernier moment pour régulariser leurs positions. Grâce à ces précautions, la liquidation n'a pas rencontré de trop grandes difficultés et la nouvelle année s'est ouverte dans d'assez bonnes conditions.",
      "Une détente très sensible a commencé à se dessiner en ce qui concerne la question monétaire. Le marché anglais a trouvé les capitaux qui lui sont pour le moment nécessaires. De ce côté, les craintes sont donc bien atténuées.",
      "Enfin, à l'intérieur, la situation paraît aussi en voie d'amélioration. Nous en voyons la preuve dans l'attitude beaucoup plus satisfaisante du marché du comptant. Le 3 % finit la semaine à 99 sur le marché à terme et également à 99 sur le marché du comptant.",
      "Le bilan hebdomadaire de la Banque de France fait ressortir de fortes augmentations, spécialement sur le portefeuille et sur la circulation. Celle-ci s'élève à 4 milliards 163 millions, chiffre qui n'avait jamais été atteint jusqu'à ce jour."
    ]
  }
];
