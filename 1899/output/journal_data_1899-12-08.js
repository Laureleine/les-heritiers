// Date: 1899-12-08
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-12-08 (Version Restaurée, 37 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Actualités",
    "title": "À propos d'une donation de M. Osiris",
    "summary": "L'Institut de France a reçu une importante donation de M. Osiris. Ce capital financera un prix triennal destiné à récompenser les inventeurs et travailleurs méritants, souvent freinés par la précarité.",
    "paragraphs": [
      "L'Institut de France, c'est-à-dire la réunion des cinq Académies, s'est assemblé hier pour prendre officiellement communication de la lettre par laquelle M. Osiris, le philanthrope bien connu, lui fait donation d'un capital représentant actuellement une rente annuelle considérable.",
      "Elle servira à décerner tous les trois ans, avec les intérêts accumulés, un prix à la découverte ou à l'œuvre la plus remarquable qui se sera produite, au cours de la période de trois ans écoulée, dans les sciences, dans les arts, dans l'industrie et, généralement, dans tout ce qui peut servir l'intérêt public.",
      "M. Osiris a exprimé le vœu que l'Institut recherche lui-même les candidats parmi les travailleurs et inventeurs obscurs, souvent freinés par la misère, afin de les aider à mettre leur œuvre au jour et de les libérer des entraves de la précarité.",
      "C'est la tâche des sociétés modernes que d'atténuer graduellement les maux de toute espèce. En attendant qu'on ait atteint ce résultat, il faut encourager les gens de cœur à remplir leur noble rôle, à rechercher les occasions d'exercer leur générosité."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions : Mariage de convenances",
    "summary": "Au sein d'une famille attachée à la tradition, le fils s'inquiète de la volonté paternelle concernant le mariage de Suzanne, sentant une opposition claire à ses sentiments pour la pupille de son père.",
    "paragraphs": [
      "L'amoureux ne savait que croire, mais ce qu'il ne pouvait s'empêcher de comprendre c'était la joie ressentie par son père du mariage de Suzanne, la convenance qu'il y trouvait, et l'irritation que lui eût causée l'aveu de la passion de son fils pour la charmante pupille de son vieil ami Bernay.",
      "La volonté du marquis de s'opposer à une telle union lui apparaissait avec autant de clarté que si elle lui eût été signifiée hautement. Or, jamais l'autorité paternelle n'avait été discutée dans cette vieille famille."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "La situation militaire autour de Ladysmith et Kimberley",
    "summary": "La situation demeure critique pour les assiégés de Ladysmith. Près de Kimberley, l'action militaire des Boërs force les troupes anglaises à se replier, tandis que les lignes télégraphiques sont coupées dans la colonie du Cap.",
    "paragraphs": [
      "Le siège de Ladysmith se resserre de jour en jour. L'anxiété qu'éprouvent les assiégés au sujet de l'arrivée tant attendue de la colonne envoyée à leur secours, leur démoralisation, se retrouvent à chaque ligne dans les dépêches envoyées de cette ville.",
      "Aux alentours de Kimberley, une action décisive paraît imminente. C'est en vain que la garnison de cette ville a cherché à rompre le cercle d'investissement pour donner la main à la colonne du général Methuen. Le feu terriblement précis des Boërs a forcé les Anglais à rentrer dans leurs lignes.",
      "Dans la colonie du Cap, les lignes télégraphiques sont coupées et plusieurs villes sont occupées par les forces boërs. Les attachés militaires français et étrangers ont commencé à arriver au quartier général boër."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Économie",
    "title": "Les mines d'or de Johannesburg",
    "summary": "Les autorités de Johannesburg autorisent désormais le pompage de l'eau des puits miniers appartenant majoritairement à des actionnaires français et allemands, incluant plusieurs exploitations notables.",
    "paragraphs": [
      "Conformément aux instructions du conseil exécutif, le commandement de Johannesburg a publié un ordre autorisant à pomper l'eau des puits des mines dont les actionnaires sont en majorité français et allemands, incluant notamment Salisbury, City and Suburban, et Champ d'Or."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Chronique Politique",
    "title": "La discussion du budget à la Chambre",
    "summary": "Le débat budgétaire souligne l'autorité de M. Waldeck-Rousseau. Le gouvernement réaffirme son intention de respecter le cadre concordataire régissant les relations entre l'Église et l'État.",
    "paragraphs": [
      "La discussion du budget se poursuit à la Chambre, et elle permet de constater l'autorité croissante du président du Conseil sur la majorité républicaine. La politique de défense républicaine a été l'objet de critiques, mais la majorité a pris une cohésion plus grande depuis la reprise de la vie parlementaire.",
      "Comme le fait remarquer M. Waldeck-Rousseau en toutes occasions, une nation comme la nôtre possède un héritage qu'il ne lui est pas loisible de répudier sans préparation. Le gouvernement entend rester sur le terrain concordataire tant que le Concordat demeurera le traité réglant les rapports entre l'Église et l'État."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Actualités Internationales",
    "title": "L'Amiral Fournier à Sébastopol",
    "summary": "Le croiseur Cosmao, portant le pavillon de l'amiral Fournier, a accosté à Sébastopol. L'officier français a été reçu avec les honneurs militaires de la forteresse avant d'entamer une série de visites protocolaires.",
    "paragraphs": [
      "Le croiseur Cosmao, portant le pavillon de l'amiral Fournier, est arrivé à Sébastopol. Le pavillon de l'amiral français a été salué de quinze coups de canon par la forteresse.",
      "L'amiral a rendu visite au commandant du port, l'amiral Tyrtow, et une série de réceptions officielles est prévue."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Actualités",
    "title": "Visite du Président de la République à l'Exposition",
    "summary": "Le Président Émile Loubet a inspecté les chantiers de l'Exposition universelle au Trocadéro. Guidé par M. Alfred Picard, il a manifesté sa satisfaction quant aux progrès des travaux des pavillons étrangers.",
    "paragraphs": [
      "M. Émile Loubet s'est rendu aux chantiers de l'Exposition universelle au Trocadéro. Guidé par M. Alfred Picard, il a visité notamment les pavillons de la Russie et de la Chine, puis ceux de plusieurs nations étrangères.",
      "Le chef de l'État a témoigné sa vive satisfaction à la vue des travaux effectués et a salué le personnel collaborant à cette grande manifestation internationale."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Révolte dans une école militaire",
    "summary": "Une mutinerie a éclaté à l'école militaire de Saint-Hippolyte-du-Fort. Une cinquantaine d'élèves ont saccagé les dortoirs pour exiger plus de liberté et le remplacement de gradés, avant de déposer les armes.",
    "paragraphs": [
      "Une révolte a éclaté à l'école militaire de Saint-Hippolyte-du-Fort. Environ cinquante élèves ont jeté les lits par les fenêtres et brisé le mobilier. Ils réclamaient le remplacement de plusieurs gradés ainsi qu'une plus grande liberté pour leurs correspondances.",
      "Ils ont finalement déposé les armes après l'intervention de l'autorité."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Enquête sur une affaire mystérieuse",
    "summary": "La Sûreté de Paris rouvre un dossier criminel lié à une femme surnommée « la fille Cora », suspectée d'implication dans un meurtre commis près de Neuilly-sur-Marne il y a plusieurs années.",
    "paragraphs": [
      "La Sûreté de Paris enquête sur une affaire criminelle concernant une femme, dite la fille Cora, qui aurait été liée à un meurtre commis il y a quelques années près de Neuilly-sur-Marne.",
      "L'inspecteur Brunet recueille des témoignages pour élucider les circonstances de cet ancien crime."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique",
    "title": "La convention commerciale avec les États-Unis et pension Mme Kiobb",
    "summary": "La Chambre des députés a adopté le projet de loi octroyant une pension annuelle et viagère de 6 000 francs à Mme Kiobb, veuve du colonel Kiobb, pour services rendus.",
    "paragraphs": [
      "La Chambre a adopté le projet de loi ayant pour objet d'accorder à Mme Kiobb, veuve du colonel Kiobb, une pension annuelle et viagère de 6 000 francs."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "Budget des Cultes",
    "summary": "La Chambre reprend l'examen du budget des Cultes. M. Tourgnol soutient la suppression des traitements des évêques non concordataires, réfutant toute intention de persécution dans cette mesure d'économie budgétaire.",
    "paragraphs": [
      "La Chambre reprend la discussion du budget des Cultes.",
      "M. Tourgnol, rapporteur, justifie les conclusions de son rapport tendant à la suppression des traitements des vicaires généraux, des archevêques et des évêques non concordataires, estimant que la commission se place sur le terrain strict du Concordat.",
      "L'orateur proteste qu'il n'y a dans cette mesure aucune idée de persécution et demande à la Chambre de voter la suppression des évêchés non concordataires."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "Incidents lors de la séance",
    "summary": "Une séance orageuse à la Chambre, marquée par des altercations virulentes entre MM. de Cassagnac, Berteaux et Charles Bernard, ce dernier qualifiant le ministère de « ministère de tartufes ».",
    "paragraphs": [
      "M. Paul de Cassagnac, après avoir qualifié les propos de M. Tourgnol de « divagations », provoque un vif tumulte à l'extrême-gauche. Le président demande le retrait immédiat de l'expression.",
      "Un nouvel incident éclate entre M. de Cassagnac et M. Berteaux, ce dernier traitant M. de Cassagnac d'insulteur public. M. de Cassagnac réplique en s'en prenant à la fortune de M. Berteaux. Les deux orateurs sont rappelés à l'ordre par le président.",
      "M. Charles Bernard dépose une motion pour la séparation des Églises et de l'État, qualifiant le ministère de « ministère de tartufes », ce qui lui vaut un rappel à l'ordre. La motion est repoussée."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "Votes sur le Budget des Cultes et l'Imprimerie nationale",
    "summary": "Le gouvernement obtient le maintien des crédits aux évêques au nom du respect des contrats. Par ailleurs, la Chambre adopte par 300 voix une résolution sur la réorganisation du travail à l'Imprimerie nationale.",
    "paragraphs": [
      "Le gouvernement fait rétablir les crédits pour les archevêques et évêques, arguant que tout contrat non dénoncé doit être scrupuleusement appliqué. Le budget est finalement adopté avec le rétablissement des chiffres primitifs.",
      "Concernant l'Imprimerie nationale, la Chambre discute du transfert de l'institution et du travail à la commandite pour les ouvriers. Un projet de résolution est adopté par 300 voix."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incidents entre députés",
    "summary": "À la suite des altercations parlementaires, MM. Charles Bernard et Périllier ont tenté de résoudre leur différend via des témoins, mais aucun accord n'a été trouvé, chacun revendiquant le rôle d'offensé.",
    "paragraphs": [
      "À la suite des incidents de la séance d'hier, un échange de témoins a eu lieu entre M. Charles Bernard et M. Périllier. Les témoins se sont séparés sans accord, chacun des deux députés revendiquant la qualité d'offensé."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Justice",
    "title": "La Haute Cour : Vingt-troisième audience",
    "summary": "La Haute Cour poursuit l'instruction des menées ligueuses. L'audition de l'ancien préfet Charles Blanc et du préfet Lépine éclaire les tentatives de renversement du régime et l'agitation des ligues.",
    "paragraphs": [
      "L'audience est marquée par l'audition de M. Charles Blanc, ancien préfet de police, qui témoigne sur le financement des ligues et les activités de MM. Guérin et Déroulède.",
      "M. Lépine, préfet de police, est ensuite entendu sur l'organisation des partis d'opposition et les tentatives de renverser le gouvernement, évoquant notamment les événements du fort Chabrol et les menées incessantes des ligues."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Social",
    "title": "Congrès socialiste",
    "summary": "Au congrès socialiste, M. Jules Guesde a insisté sur la nécessité d'une presse unifiée et d'un comité central. Une motion réclamant l'abrogation des lois scélérates a été adoptée par acclamation par les délégués.",
    "paragraphs": [
      "La séance fut exclusivement consacrée au débat sur l'unité socialiste. M. Jules Guesde a souligné, dans une intervention remarquée, l'importance capitale d'une presse commune et de la création d'un comité central permanent.",
      "Au terme des discussions, une motion exigeant l'abrogation immédiate des « lois scélérates » a été présentée à l'assemblée et votée par acclamation."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Informations",
    "title": "Dépêches de l'étranger",
    "summary": "L'ambassadeur de France, M. Constans, a quitté ses fonctions pour regagner la métropole. Par ailleurs, des troubles révolutionnaires ont été signalés dans les provinces septentrionales du Guatemala.",
    "paragraphs": [
      "M. Constans, ambassadeur de France, a quitté ses fonctions et s'est mis en route pour regagner la métropole.",
      "Par ailleurs, des nouvelles parvenues par télégraphe signalent qu'une révolution a éclaté dans le nord du Guatemala, jetant le trouble sur cette région."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Météo et Navigation",
    "title": "Rapport météorologique et fluvial",
    "summary": "Journée marquée par une pluie persistante sous une température clémente. Le bulletin fait état des relevés hydrométriques de la Seine, de la Marne et de l'Oise, ainsi que de l'état des côtes.",
    "paragraphs": [
      "La journée a été marquée par une pluie persistante, bien que la température soit demeurée relativement douce pour la saison.",
      "Le rapport quotidien détaille scrupuleusement les niveaux des fleuves, notamment la Seine, la Marne et l'Oise, tout en précisant les conditions de navigation observées en mer."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Vie culturelle et mondaine",
    "summary": "M. Georges de Porto-Riche brigue le fauteuil de M. Victor Cherbuliez à l'Académie. La commission du vieux Paris a mis au jour les vestiges d'un second théâtre romain sur l'île Saint-Louis.",
    "paragraphs": [
      "M. Georges de Porto-Riche s'est officiellement porté candidat au fauteuil laissé vacant par M. Victor Cherbuliez au sein de l'Académie française.",
      "En marge de la vie littéraire, la commission du vieux Paris a révélé une découverte archéologique majeure : l'existence d'un second théâtre romain situé sur l'île Saint-Louis."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits divers",
    "title": "Mort inexpliquée à l'hospice de Meulan",
    "summary": "Un homme d'environ vingt-huit ans a été retrouvé sans vie près de la grille de l'hospice de Meulan. Une enquête est en cours pour déterminer les circonstances du décès et identifier l'inconnu.",
    "paragraphs": [
      "Un homme, dont l'identité demeure pour l'heure inconnue, a été retrouvé mort à proximité de la grille de l'hospice de Meulan.",
      "Le défunt, âgé d'environ vingt-huit ans, a fait l'objet d'un constat préliminaire et l'enquête se poursuit activement afin d'établir les circonstances exactes de ce décès inexpliqué."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Culture",
    "title": "Opéra : Iphigénie en Tauride",
    "summary": "Le chef-d'œuvre de Gluck, Iphigénie en Tauride, a été représenté à l'Opéra-Comique. L'interprétation, empreinte d'une grande puissance dramatique, a su traduire avec sincérité la vérité musicale du compositeur.",
    "paragraphs": [
      "Le chef-d'œuvre de Gluck, « Iphigénie en Tauride », a été représenté à l'Opéra-Comique. L'interprétation a profondément ému le public, soulignant la puissance dramatique et l'expression de la vérité prônées par le compositeur."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Spectacles",
    "title": "Iphigénie en Tauride de Gluck",
    "summary": "Analyse de la tragédie lyrique de Gluck à l'Opéra-Comique : une mise en scène magistrale servie par une distribution vocale exemplaire et une direction d'orchestre acclamée par le public.",
    "paragraphs": [
      "Dans les œuvres lyriques de Gluck, c'est lors d'un premier séjour, alors qu'il cherchait sa voie, qu'il conçut la musique de cette œuvre.",
      "Le sujet classique d'Iphigénie en Tauride rappelle la fille d'Agamemnon, sauvée par Diane au moment où elle allait être sacrifiée par son père, puis transportée par la déesse en Crimée. Le roi de la contrée l'a faite prêtresse de Diane et une cruelle coutume veut qu'elle sacrifie les étrangers naufragés sur ces côtes. Deux Grecs, Oreste et son ami Pylade, sont amenés à Iphigénie.",
      "C'est face à face que la sœur et le frère, qui ne se reconnaissent pas, se retrouvent. Iphigénie doit plonger le couteau dans le cœur d'Oreste. Au moment du sacrifice, un cri d'Iphigénie sauve son frère. Pylade tue le roi barbare et Diane délivre Oreste de ses remords.",
      "Le langage de Gluck transfigure les paroles du librettiste. Mme Jeanne Raunay, dans le rôle de la prêtresse, a surpassé l'attente par son expression dramatique. M. Cossira, en Pylade, a été émouvant et héroïque, tandis que M. Soularroix a été un interprète heureux du tragique Oreste. L'orchestre, dirigé par M. Danbé, a valu une ovation bien méritée."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Social",
    "title": "L'Affaire de l'Hôpital Beaujon",
    "summary": "Le conseil de surveillance de l'Assistance publique a examiné le rapport sur le concours d'internat et préconise l'annulation des résultats pour permettre une nouvelle épreuve sous l'égide du Conseil d'État.",
    "paragraphs": [
      "Le conseil de surveillance de l'Assistance publique s'est réuni hier matin, sous la présidence de M. le préfet de la Seine, pour examiner le rapport concernant le concours d'internat.",
      "Conformément aux conclusions de M. Voisin, le conseil a émis l'avis de solliciter l'administration afin qu'elle intervienne auprès du ministre de l'Intérieur pour obtenir l'avis du Conseil d'État. Il est proposé d'annuler le résultat du concours et de le recommencer dans les conditions initialement prévues."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un Faux Monnayeur",
    "summary": "Arrêté à Dreux pour usage de fausse monnaie, Emmanuel Barrette a été confondu par la police parisienne qui a découvert son atelier de contrefaçon dissimulé dans son domicile de la rue Dareau.",
    "paragraphs": [
      "Lundi dernier, un individu se nommant Emmanuel Barrette a été arrêté à Dreux pour mise en circulation de fausse monnaie. Ses déclarations sur son domicile parisien s'étant révélées mensongères, le chef de la Sûreté, M. Cochefert, a découvert sa véritable demeure, rue Dareau, où a été saisi un matériel complet de fabrication.",
      "Barrette fabriquait des pièces de 5 francs en frappant des morceaux de plomb dans une feuille de cuivre. Il a été trahi par son imprudence, ayant retourné chez le même commerçant pour écouler son stock."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de meurtre à l'Hôtel-Dieu",
    "summary": "Un porteur aux Halles, Jean Fauguin, a été écroué après avoir poignardé son voisin, Louis Gaucher, lors d'une altercation motivée par la jalousie. La victime a été transportée à l'Hôtel-Dieu.",
    "paragraphs": [
      "Lors d'une violente discussion, un porteur aux Halles, Jean Fauguin, a frappé d'un coup de couteau son voisin, Louis Gaucher. Le mobile serait la jalousie.",
      "Gaucher a été admis à l'Hôtel-Dieu pour y recevoir des soins et le meurtrier a été arrêté par les agents de police."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une femme égorgée par son mari",
    "summary": "Devanne, l'ouvrier coiffeur accusé du meurtre de son épouse, a été confronté au corps de sa victime lors d'une reconstitution judiciaire. L'assassin, qui a avoué son crime, est incarcéré à la prison de la Santé.",
    "paragraphs": [
      "Devanne, l'ouvrier coiffeur ayant assassiné sa femme rue Le Tort, a été confronté hier matin au corps de sa victime, en présence du juge d'instruction.",
      "L'assassin a avoué avoir frappé sa femme d'un coup de couteau, puis l'avoir étouffée sous l'oreiller. Il a justifié son crime par des soupçons d'infidélité, alors que le magistrat instructeur a tenu à souligner la parfaite moralité de la défunte. L'inculpé a été reconduit à la prison de la Santé."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes de la banlieue parisienne",
    "summary": "Chronique des accidents et faits criminels en banlieue parisienne : suicides, incendies, rixes et arrestations marquent la journée dans plusieurs localités entourant la capitale.",
    "paragraphs": [
      "Neuilly-sur-Seine : M. Georges Zimmermann s'est suicidé par pendaison. Levallois-Perret : Un incendie a ravagé une grande remise rue de Lorraine. Clichy : La petite Ernestine Gros s'est fracturé le crâne lors d'une chute accidentelle. Gennevilliers : Edmond Letourneur a eu la poitrine écrasée par des barriques de vin.",
      "Colombes : Philippe Metzer s'est cassé la jambe lors d'une rixe. Rueil : Louis Croche s'est suicidé par pendaison. Chatou : Adolphe Dupied a été gravement blessé après avoir été poussé du haut d'une toiture par un camarade. Pantin : Mme Juliette Dolanet a été renversée par une voiture. Paris : Un terrassier a été agressé et dévalisé par trois individus. Le Bourget : Un employé de chemin de fer a été grièvement blessé entre deux wagons. Montrouge : Une bande de cambrioleurs menée par le vicomte Désiré de Séverac a été arrêtée par le commissaire Susset. Ivry : Eugène Pierre a été amputé de la main après un accident d'usine. Meaux : M. Paradrle a été trouvé pendu à son domicile."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Départements",
    "title": "Faits divers en province",
    "summary": "Rapports d'incidents tragiques en province : un incendie à Moussy ayant causé des blessures à un pompier et la découverte d'un fossoyeur sans vie près de Chalon-sur-Saône.",
    "paragraphs": [
      "Moussy : Une meule de paille a été détruite par un incendie, blessant grièvement un pompier lors des opérations de secours. Chalon-sur-Saône : Pierre Guillaume, un fossoyeur âgé de 70 ans, a été trouvé mort sur la voie publique."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Les Courses",
    "title": "Résultats des courses d'Auteuil du 7 décembre",
    "summary": "Les épreuves hippiques d'Auteuil se sont tenues sur un terrain rendu particulièrement lourd par les intempéries, occasionnant de nombreuses chutes parmi les concurrents.",
    "paragraphs": [
      "Les épreuves ont été marquées par un terrain très lourd et de nombreuses chutes. Les vainqueurs sont : Enghien (Prix du Calvados), Saint-Séraphin (Prix du Taillis), Fénelon II (Prix Boissy), Préfet (Prix Régalia), Clodomir II (Prix de Décembre) et Provins (Prix Glycine)."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Nouvelles des scènes parisiennes",
    "summary": "Le point sur l'actualité théâtrale : créations à l'Athénée, succès de la danse à l'Opéra et tournées triomphales pour la troupe Romain.",
    "paragraphs": [
      "L'Athénée présente ce soir la première de 'La Mariée du Touring-Club', de M. Tristan Bernard. La reprise de 'La Korrigane' à l'Opéra est un véritable triomphe pour Mlle Zambelli. Le Théâtre Antoine annonce la reprise du 'Repas du Lion'. La troupe Romain rencontre un vif succès à Marseille avec 'Michel Strogoff'."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Concerts et Divertissements",
    "title": "Actualités du Casino de Paris et de la Cigale",
    "summary": "Le Casino de Paris enchante le public avec les lions de mer du capitaine Woodward et la famille Agoust, tandis que la Cigale propose une immersion cinématographique dans la guerre du Transvaal via le Biographe.",
    "paragraphs": [
      "Le Casino de Paris présente de nouveaux numéros, dont les lions de mer du capitaine Woodward et la famille Agoust, qui remportent un vif succès auprès du public. La Cigale programme une séance du Biographe consacrée à la guerre du Transvaal, attirant une foule nombreuse et curieuse."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Bulletin Financier",
    "title": "Situation de la Bourse de Paris",
    "summary": "Malgré l'élévation du taux d'escompte de la Banque de France, la Bourse affiche une fermeté notable, les investisseurs ayant largement anticipé cette mesure corrective.",
    "paragraphs": [
      "La Bourse a connu une journée globalement ferme malgré l'annonce de l'élévation du taux d'escompte de la Banque de France. Cette mesure, largement anticipée, est perçue par les milieux financiers comme un avertissement nécessaire. Les fonds ottomans et les titres des établissements de crédit demeurent très bien tenus."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Tragédies de l'Amour",
    "summary": "En proie à une tempête dévastatrice, le navire La Minerve lutte pour sa survie. Grâce au courage du marquis et du second Leblond, l'équipage parvient à alléger le bâtiment et à surmonter les assauts de l'ouragan.",
    "paragraphs": [
      "Sur le pont de la Minerve, la mer semblait impuissante contre les croiseurs cuirassés qui se riaient de sa fureur et triomphaient de sa rage.",
      "Le second, qui surveillait les pompes, remonta pour informer le marquis que la cale se viderait en cinq minutes, mais l'ouragan fondait sur la Minerve avec une impétuosité terrifiante.",
      "Le navire fut mis à rude épreuve, ses mâts se relevant et s'inclinant dangereusement sous l'effort de la tempête.",
      "Le marquis, aidé par le second Leblond, ordonna de couper les agrès pour alléger le bâtiment. La goélette finit par se relever, bien que toujours menacée, alors que la tempête commençait à faiblir."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Publicité",
    "title": "Guérison à méditer : Le Goudron Guyot",
    "summary": "Le pharmacien Guyot propose son goudron comme un remède souverain contre les bronchites et catarrhes, s'appuyant sur le témoignage probant de M. François Martinet, guéri après un traitement rigoureux.",
    "paragraphs": [
      "Le 19 février 1897, M. François Martinet écrivait au pharmacien Guyot pour demander son aide face à une bronchite affreuse et un mauvais catarrhe tenace.",
      "Après usage du Goudron Guyot, il rapporte une amélioration remarquable : disparition des accès de toux, retour de l'appétit et respiration largement facilitée.",
      "Le Goudron Guyot est ainsi présenté comme un remède souverain contre les bronchites, les catarrhes et les vieux rhumes, agissant par sa capacité à neutraliser les mauvais microbes."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Feuilleton",
    "title": "Épilogue : Les aveux de Miss Jefferson",
    "summary": "Minnie Jefferson revient sur ses désillusions sentimentales avec Gontran de Montrais et annonce son retour prochain en Amérique, marquant la fin de ses ambitions mondaines en France.",
    "paragraphs": [
      "Le reporter questionna Minnie Jefferson sur ses déceptions passées et sur Gontran de Montrais.",
      "Minnie confessa son désir initial de trouver un mari titré en France, avant de se rendre compte de la nature escroc de celui qu'elle avait côtoyé.",
      "Elle confia son intention de retourner en Amérique pour retrouver un fiancé à Chicago, un puissant fabricant de jambon.",
      "Plus tard, elle se remémora une entrevue suprême avec Gontran, un homme désormais déchu et misérable, qui tenta vainement de demander l'aumône."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Information",
    "title": "La suite de la tempête et le signal de la Némésis",
    "summary": "Au sortir de la tourmente, l'équipage de la Némésis retrouve le sillage de la Minerve. Malgré les dissensions qui agitent les hommes, le soulagement est manifeste à la vue des feux du yacht dans la nuit.",
    "paragraphs": [
      "Alors que la tempête s'apaisait, M. de Vivarez s'efforçait de localiser la Némésis dans l'obscurité grandissante.",
      "Un matelot finit par apercevoir des signaux lumineux par tribord arrière. C'était bien la Némésis qui filait, toutes voiles dehors, défiant les dernières rafales.",
      "Malaquin, demeurant aux aguets, reconnut bientôt le feu caractéristique du yacht de la Minerve, provoquant une vive joie parmi l'équipage, malgré la tension constante qui régnait avec Barbedier et les frères Girodias."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Marché aux bestiaux de La Villette",
    "summary": "Compte-rendu du marché du 7 décembre 1899 : le cours des bœufs accuse un repli, tandis que la vente des porcs demeure stationnaire. Les prix s'échelonnent selon la provenance régionale des bestiaux.",
    "paragraphs": [
      "Compte-rendu du marché du jeudi 7 décembre 1899 : on note une baisse sensible des cours pour les bœufs, tandis que la vente des porcs reste dans une moyenne habituelle.",
      "Les cotations détaillées indiquent des prix variant notablement selon les provenances — Limousins, Choletais, Brie, Beauce — pour les différentes catégories de bestiaux présentées à la vente."
    ]
  }
];
