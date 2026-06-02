// Date: 1899-12-20
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-12-20 (Version Restaurée, 47 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique",
    "title": "Le nouveau timbre-poste",
    "summary": "Le design des timbres-poste français change. Dès le 15 avril, les vignettes de Cérès et Mercure seront remplacées par de nouvelles séries gravées par MM. Mouchon et Merson.",
    "paragraphs": [
      "C'est décidé, l'ancien timbre-poste a vécu. Nous ne verrons plus, au-dessus du chiffre fatidique, sur les petits carrés multicolores surmontés du mot « Poste », la Paix et le Commerce sous les traits de Cérès et de Mercure, appuyés contre un globe terrestre et se donnant la main.",
      "À ce type vieillot et usé va succéder, dès le 15 avril prochain, une série de timbres de 5, 10, 15, 20, 25 et 30 centimes, dont la vignette est due à un excellent graveur de ce temps, M. Mouchon.",
      "L'exécution de la seconde série (timbres de 40 et 50 centimes, de 1 et de 5 francs) a été confiée à M. Luc-Olivier Merson, bien que celle-ci ne puisse être mise en circulation avant le milieu de l'année prochaine.",
      "La fabrication des timbres, désormais centralisée dans les ateliers du boulevard Brune, utilise des machines modernes permettant une production massive, dépassant le milliard de timbres par an, incluant des commandes pour des pays étrangers comme l'Éthiopie."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux passions",
    "summary": "Inquiet pour son foyer, Georges Dufresne est en proie aux doutes instillés par Paul Tavernier, qui l'alerte sur la fidélité de son épouse, Suzanne, en scrutant les alentours de leur pavillon.",
    "paragraphs": [
      "Soir de noces, il ne voulait pas s'en éloigner et, enfin, il se disait qu'en se faisant expulser par le nouveau maître de la Coudraie, qui ne possédait pas sa sympathie mais dont il ne pouvait méconnaître l'autorité, il ne serait plus en état de rendre aucun service ni à sa jeune maîtresse ni à son ancien officier.",
      "Paul Tavernier, l'ami, cherche à éveiller les soupçons de Georges Dufresne sur la fidélité de sa nouvelle épouse, Suzanne, en examinant des empreintes de pas suspects autour du pavillon, alimentant ainsi la jalousie et le trouble du jeune mari."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des ministres",
    "summary": "Réunis à l'Élysée, les ministres, sous la présidence de M. Loubet, ont débattu du budget et acté la réorganisation des écoles des mines et des ponts et chaussées.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin à l'Élysée, sous la présidence de M. Loubet.",
      "Le conseil s'est occupé des questions que soulève la discussion du budget, et il a spécialement examiné celles qui concernent le ministère de l'Agriculture ainsi que certains amendements qui seront soumis à la Chambre relativement à ce budget.",
      "Le ministre des Travaux publics a fait signer un décret portant modification des décrets d'organisation de l'École nationale supérieure des mines et de l'École nationale des ponts et chaussées."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nouvelles coloniales",
    "title": "Actualités africaines",
    "summary": "La mission Foureau-Lamy aurait quitté Aghadès pour le Soudan. La situation demeure stable au Congo et au Dahomey, tandis que l'épidémie à Grand-Bassam est officiellement terminée.",
    "paragraphs": [
      "Il résulte de nouveaux renseignements recueillis par le gouverneur de l'Afrique occidentale, mais non encore confirmés, que la mission Foureau-Lamy aurait quitté Aghadès à la fin du mois de juillet et qu'elle ferait route vers le Soudan.",
      "Au Congo, M. de Lamothe était à Brazzaville pour assister aux délimitations des nouvelles concessions. Au Dahomey, tout est tranquille. À Grand-Bassam, l'épidémie a complètement disparu."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits divers",
    "title": "L'accident du rapide de Bordeaux",
    "summary": "Après le décès d'un blessé à l'hôpital d'Angoulême, le conducteur François Perroche et le mécanicien Guichard ont été écroués suite à l'accident ferroviaire de Montmoreau.",
    "paragraphs": [
      "À la suite de l'enquête ouverte par le parquet d'Angoulême au sujet de l'accident du rapide survenu entre Montmoreau et Charmant, le conducteur de ce train, nommé François Perroche, a été arrêté sous l'inculpation d'homicide par imprudence.",
      "Un des blessés, M. Laycock, originaire d'Angleterre, a succombé cette nuit à l'hôpital d'Angoulême. Le mécanicien du train, Guichard, a également été écroué."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Informations générales",
    "title": "Les douzièmes provisoires",
    "summary": "La commission du budget s'apprête à examiner le projet relatif aux douzièmes provisoires. Un rapport sera soumis à la Chambre des députés pour permettre une adoption rapide lors de la séance de ce jour.",
    "paragraphs": [
      "Le projet sur les douzièmes provisoires doit être discuté aujourd'hui par la commission du budget. Il fera l'objet d'un rapport qui sera déposé, sans nul doute séance tenante, la Chambre devant se réunir dès ce jour."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Social",
    "title": "L'assistance des vieillards",
    "summary": "La commission d'assurance et de prévoyance sociales a statué : les hospices communaux et cantonaux devront désormais accueillir gratuitement les vieillards et indigents désignés par le conseil municipal.",
    "paragraphs": [
      "La commission d'assurance et de prévoyance sociales a adopté plusieurs articles concernant l'assistance obligatoire aux vieillards. Ces dispositions imposent désormais aux hospices communaux et cantonaux l'obligation de recevoir gratuitement les infirmes et indigents désignés par le conseil municipal."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits divers",
    "title": "Triple assassinat à la Crau",
    "summary": "Un triple meurtre a été perpétré à la Crau : Maximin Audiffren, sa sœur et leur nièce ont été sauvagement assassinés chez eux. Le vol semble être le mobile de ce crime odieux qui a bouleversé la contrée.",
    "paragraphs": [
      "Un horrible crime a été commis sur le territoire de la commune de la Crau. Maximin Audiffren, sa sœur Anastasie et leur nièce, Mélanie Artaud, ont été trouvés assassinés à leur domicile.",
      "Le frère et la sœur ont eu le cou tranché, tandis que la nièce a été étranglée. Le vol semble être le mobile de ce crime, qui n'a laissé aucune trace d'effraction sur les lieux."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits divers",
    "title": "Un suicide au Palais de Justice",
    "summary": "Condamné à trois mois de prison pour attentat à la pudeur, un rentier a mis fin à ses jours en absorbant de la strychnine au sein même du Palais de Justice, après avoir clamé une dernière fois son innocence.",
    "paragraphs": [
      "Un rentier, condamné à trois mois de prison pour attentat à la pudeur, s'est donné la mort en absorbant une dose de strychnine, après avoir clamé, une dernière fois, son innocence à la barre du tribunal."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits divers",
    "title": "Attentat à Saint-Germain-en-Laye",
    "summary": "Un malfaiteur a attiré Mlle Désirée Lesueur dans les bois de Louveciennes en se faisant passer pour un employeur. Il y a commis un acte criminel sur la jeune servante avant de s'enfuir.",
    "paragraphs": [
      "Un individu ayant usurpé la qualité de patron pour embaucher une jeune bonne, Mlle Désirée Lesueur, l'a entraînée sous ce faux prétexte dans les bois de Louveciennes pour commettre sur elle un acte criminel, avant de prendre la fuite."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Faits divers",
    "title": "Ouvriers tamponnés à Miramas",
    "summary": "Un accident ferroviaire tragique à la gare de Miramas a causé la mort de deux ouvriers, percutés par un express venant de Lyon. Un troisième homme a été grièvement blessé par le choc.",
    "paragraphs": [
      "Un terrible accident s'est produit à la gare de Miramas. Quatre ouvriers, qui traversaient la voie, ont été violemment percutés par un express venant de Lyon. Le bilan est lourd : deux de ces ouvriers ont trouvé la mort, et un troisième a été grièvement blessé."
    ]
  },
  {
    "id": 12,
    "page": 1,
    "category": "Faits divers",
    "title": "Un vieillard assassiné à Saint-Maur",
    "summary": "Le corps d'un sexagénaire, identifié sous le nom de Lurbi, a été retrouvé sans vie aux abords de la propriété de la Saura. L'enquête judiciaire privilégie la thèse d'une agression criminelle.",
    "paragraphs": [
      "Le corps d'un vieillard de soixante-cinq ans a été découvert près de la propriété de la Saura. L'enquête diligentée par les autorités a établi que la victime était un nommé Lurbi, vraisemblablement agressé mortellement sur le chemin du retour."
    ]
  },
  {
    "id": 13,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "Situation critique du général Methuen",
    "summary": "Londres reste sans nouvelles officielles, mais des dépêches inquiétantes signalent que les communications du général Methuen sont coupées, plaçant ses troupes dans une situation critique face aux Boërs.",
    "paragraphs": [
      "Aucune nouvelle importante du théâtre de la guerre n'est parvenue, hier, à Londres. Toutefois, des dépêches suggèrent que la situation du général Methuen est devenue critique, ses communications ayant été interceptées et coupées par les troupes boërs."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "International",
    "title": "La situation militaire des Boërs",
    "summary": "Dans le conflit anglo-boër, le front semble figé : si les Boërs renforcent leurs positions, ils manquent de vivres, tandis que les forces anglaises peinent à contourner leurs lignes défensives.",
    "paragraphs": [
      "Les Boërs concentrent un grand nombre d'hommes et étendent leurs fortifications sur deux flancs, mais ils ne sont pas actuellement en mesure d'attaquer les positions anglaises. Il est, de même, impossible aux Anglais de manœuvrer pour tourner les positions des Boërs.",
      "Le seul inconvénient majeur pour ces derniers est qu'ils paraissent désormais à court de vivres et d'eau."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "Chambre des Députés - Séance du 19 décembre",
    "summary": "Sous la présidence de M. Paul Deschanel, la Chambre débat du rachat des réseaux ferroviaires. Par ailleurs, M. Morinaud a interpellé le général de Galliffet sur les effectifs militaires à Madagascar.",
    "paragraphs": [
      "La Chambre a terminé la discussion du budget du ministère des Travaux publics et a abordé la discussion générale des budgets des chemins de fer de l'État et des conventions. La discussion est largement dominée par l'éventualité du rachat par l'État des réseaux des grandes compagnies.",
      "La séance, ouverte sous la présidence de M. Paul Deschanel, a vu M. Morinaud interroger le ministre de la Guerre, le général de Galliffet, sur le renforcement des effectifs à Madagascar. Le ministre a répondu en assurant que les effectifs algériens seraient maintenus."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique",
    "title": "Budget des Travaux Publics",
    "summary": "À la Chambre, le débat sur l'extension des ports maritimes oppose les demandes de crédits supplémentaires de M. Brindeau à la volonté du gouvernement de maintenir l'équilibre budgétaire.",
    "paragraphs": [
      "La Chambre a repris la discussion sur l'amélioration et l'extension des ports maritimes. M. Brindeau a demandé une augmentation d'un million de francs, arguant de l'insuffisance des crédits face à la concurrence étrangère. Le ministre des Travaux publics, M. Baudin, ainsi que le ministre des Finances, M. Caillaux, ont objecté la nécessité de maintenir l'équilibre budgétaire.",
      "Après quelques observations, l'amendement a été rejeté par 294 voix et le chiffre du gouvernement adopté."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique",
    "title": "Débats sur les Chemins de fer",
    "summary": "La Chambre a débattu du rachat des chemins de fer par l'État. M. Paul Beauregard s'est opposé au projet par crainte pour les finances, tandis que MM. Guillemet et Roch ont défendu la gestion publique.",
    "paragraphs": [
      "La discussion sur les chemins de fer a opposé les partisans du rachat par l'État à ses adversaires. M. Paul Beauregard a critiqué l'optimisme du rapporteur M. Bourrat, affirmant que le rachat serait la ruine des finances. À l'inverse, MM. Guillemet et Roch ont défendu les progrès réalisés par l'administration de l'État.",
      "La séance a été levée à six heures dix après l'annonce du retrait de l'interpellation de M. André Castelin concernant l'affaire Marcel Habert."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Dépêches de l'étranger",
    "summary": "Nouvelles internationales : une collision ferroviaire près de Londres fait deux morts, un accident mortel survient à Bruxelles, et Moustafa-Kamel revendique l'affranchissement de l'Égypte au Caire.",
    "paragraphs": [
      "Une collision entre deux trains de voyageurs s'est produite ce matin près de Londres, causant deux morts et neuf blessés.",
      "À Bruxelles, des ouvriers ont découvert une tête humaine et un corps mutilé sur la voie ferrée, identifiés comme étant un nommé Vignard, âgé de vingt-deux ans, ayant tenté de traverser au passage d'un train.",
      "Au Caire, Moustafa-Kamel a tenu une conférence exprimant ses espérances quant à l'affranchissement de l'Égypte."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "La mort du cavalier Bernard",
    "summary": "L'enquête sur le décès du cavalier Bernard à l'hôpital d'Épernay conclut à une mort naturelle par broncho-pneumonie, réfutant les allégations de sévices subis par le défunt.",
    "paragraphs": [
      "L'enquête sur la mort du cavalier Bernard, décédé le 6 décembre à l'hôpital d'Épernay, a conclu à une mort par broncho-pneumonie infectieuse.",
      "Les témoignages n'ont pas confirmé les accusations de sévices exercés par ses supérieurs, mais la douleur de sa mère explique les récits concernant des violences imaginaires."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Politique",
    "title": "Affaire Marcel Habert",
    "summary": "Le député Marcel Habert, impliqué dans le procès pour complot, a été arrêté au Luxembourg. L'immunité parlementaire ayant été jugée inapplicable, il a été écroué à la prison de la Santé.",
    "paragraphs": [
      "M. Marcel Habert, député impliqué dans le procès de complot et en fuite, s'est présenté au Luxembourg hier. Il a été arrêté par M. Mouquin, commissaire de police, malgré ses protestations fondées sur l'immunité parlementaire.",
      "Après une conférence entre les autorités judiciaires et policières, il a été établi que l'immunité ne pouvait être invoquée, le mandat d'arrêt ayant été délivré pendant l'intersession. Il a été transféré à la prison de la Santé."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Justice",
    "title": "Procès de la Haute Cour",
    "summary": "La trente-troisième audience de la Haute Cour a poursuivi l'audition des témoins sur l'affaire du Fort Chabrol, marquée par de vives altercations entre les avocats et le président au sujet de l'usage des armes.",
    "paragraphs": [
      "La trente-troisième audience de la Haute Cour a vu la poursuite de l'audition des témoins concernant l'affaire du Fort Chabrol. Des confrontations vives ont eu lieu entre les ravitailleurs et les agents de la force publique au sujet de l'usage des revolvers.",
      "Un incident a éclaté à la suite du tumulte provoqué par les avocats ; le président de la Cour a dû menacer d'expulser certains membres de la défense pour maintenir l'ordre des débats."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits Divers",
    "title": "Victimes du froid",
    "summary": "La vague de froid persistante qui frappe actuellement Paris et la province fait de nombreuses victimes, recensées des fortifications de la capitale jusqu'à Orléans.",
    "paragraphs": [
      "La vague de froid persistante a causé plusieurs décès à Paris et en province : Aimable Ballgeo a été retrouvé mort sur la zone des fortifications ; M. Mériot, marchand de cannes, est décédé des suites d'une congestion ; d'autres cas de décès ont également été signalés à Clichy, Mary-sur-Marne et Orléans."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Santé et Hygiène",
    "title": "Prévention de la contagion par le téléphone",
    "summary": "Le ministre de l'Intérieur préconise, pour éviter la contagion par les appareils publics, un nettoyage régulier des pavillons et cabines avec une solution d'eau phéniquée.",
    "paragraphs": [
      "La question de la transmission de maladies contagieuses par les appareils téléphoniques publics a été soulevée. Pour supprimer tout danger de contamination, il suffirait d'essuyer régulièrement la plaque vibrante, les poignées et les pavillons récepteurs avec un linge légèrement humecté d'eau phéniquée, et d'arroser les parois des cabines avec la même solution tout en assurant une aération convenable.",
      "Le ministre vient d'adresser à tous les bureaux des recommandations précises dans ce sens."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Activités charitables",
    "title": "Vente annuelle de l'orphelinat des Arts",
    "summary": "La vente annuelle de l'orphelinat des Arts se tiendra fin décembre à l'Union artistique, mêlant œuvres caritatives et divertissements au profit des enfants orphelins.",
    "paragraphs": [
      "La vente annuelle de l'orphelinat des Arts aura lieu dans les salons du cercle de l'Union artistique, les 22, 23 et 24 décembre, de deux heures à sept heures du soir.",
      "On connaît cette manifestation où, à des comptoirs tenus par de charmantes artistes, sont vendus des objets d'étrennes agréables et utiles, aux tarifs des grands magasins. Le côté joyeux sera assuré par une diseuse de bonne aventure, divers jeux, dont les petits chevaux, ainsi qu'un buffet et une tombola dont tous les billets sont gagnants."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Administration",
    "title": "Clôture de la chasse à la perdrix et au lièvre",
    "summary": "L'administration fixe par décret la fin de la période de chasse à la perdrix et au lièvre pour plusieurs départements, interdisant dès lors la vente et le colportage du gibier.",
    "paragraphs": [
      "Sur l'avis des conseils généraux, la chasse à la perdrix, close depuis dimanche dans le département de la Seine-Inférieure, sera close le 1er janvier dans les départements suivants : Aisne, Ardennes, Aube, Maine-et-Loire, Marne, Nord et Pas-de-Calais.",
      "La clôture de la chasse au lièvre est fixée au 1er janvier dans l'Aisne, les Ardennes, l'Aube, la Marne, le Nord et le Pas-de-Calais.",
      "En conséquence, et par application de la loi du 27 février 1898, dans chacun de ces départements, la vente, le transport et le colportage de ces gibiers seront interdits dès le lendemain des dates fixées pour la clôture de leur chasse."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Informations pratiques",
    "title": "Offres de l'Almanach Hachette",
    "summary": "L'Almanach Hachette pour 1900 organise un concours offrant à seize ouvriers un voyage tous frais payés à Paris pour visiter l'Exposition universelle, tout en proposant des bourses d'études et des avantages sociaux.",
    "paragraphs": [
      "L'Almanach Hachette de 1900 offre à seize ouvriers ou ouvrières des départements de leur payer le voyage à Paris, le logement et la nourriture pendant six jours, afin de leur permettre de visiter l'Exposition universelle.",
      "L'Almanach Hachette met également à la disposition de ses lecteurs une bourse de 3 000 francs pour l'éducation d'un enfant pauvre, ainsi que divers prix, billets de théâtre et contrats d'assurance."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Culture et Patrimoine",
    "title": "Le Musée de la Comédie-Française",
    "summary": "Faute de locaux adaptés, les précieuses collections historiques de la Comédie-Française restent inaccessibles au public. Un appel est lancé pour exposer dignement ces archives et souvenirs de l'art français.",
    "paragraphs": [
      "Il a été souvent question du Musée de la Comédie-Française. On sait que, depuis longtemps, le zèle des artistes et des administrateurs s'est plu à rassembler des objets ayant trait à l'histoire de cette illustre compagnie. Mais, en réalité, personne ne connaît ces collections précieuses, car le visiteur n'a point accès aux trente locaux différents où elles sont inégalement réparties.",
      "Au foyer des artistes, quelques privilégiés ont accès, mais le cabinet de l'administrateur, les couloirs et les pièces étroites sont remplis de plus de trois cents tableaux mal éclairés. La bibliothèque et les archives possèdent des trésors comme le registre manuscrit de Lagrange ou des manuscrits autographes de grands écrivains tels que Musset. Faute de local, bien des dons doivent être refusés. Il faudrait que l'État donnât la possibilité d'exposer dignement ces souvenirs précieux pour l'histoire de l'art français."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Transports",
    "title": "Rachat du pont d'Argenteuil",
    "summary": "L'importante question du rachat du pont d'Argenteuil est en voie de résolution. Le ministre des Travaux publics a fixé l'indemnité, permettant un raccordement définitif dès le début de l'année prochaine.",
    "paragraphs": [
      "L'importante question du rachat du pont d'Argenteuil, intéressant vivement tous les habitants de la banlieue ouest, est sur le point d'aboutir.",
      "M. Baudin, ministre des Travaux publics, a informé M. Berteaux, député, que l'indemnité due à la compagnie concessionnaire est fixée. Une visite contradictoire a eu lieu en décembre pour contrôler la demande et, dans la première quinzaine de janvier, le raccordement définitif pourra être effectué."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une audacieuse évasion à Nîmes",
    "summary": "Le détenu Maniol, âgé de dix-huit ans, a tenté de s'évader de la maison centrale de Nîmes en se déguisant avec les effets d'un gardien. Il a été rattrapé dans la rue par un dragon après une brève poursuite.",
    "paragraphs": [
      "Une tentative d'évasion a eu lieu hier soir à la maison centrale de Nîmes. Le nommé Maniol, âgé de dix-huit ans, a fabriqué une fausse clef pour pénétrer dans la chambre d'un gardien et se vêtir de ses effets.",
      "Déguisé, il a réussi à franchir plusieurs portes avant d'être interpellé par des gardiens de nuit. Une course-poursuite s'est engagée dans la rue du Grand-Couvent où, finalement, un dragon a arrêté Maniol et l'a remis entre les mains de la justice."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Social",
    "title": "Secours aux ouvriers des ports et grève à Saint-Etienne",
    "summary": "Le conseil municipal vote des secours pour les chômeurs des ports victimes du gel, tandis que les tisseurs de la région de Saint-Etienne s'organisent pour une médiation avec les fabricants.",
    "paragraphs": [
      "Le conseil municipal a voté une somme en faveur des ouvriers des ports réduits au chômage par la congélation de la Seine et des canaux. La répartition aura lieu jeudi dans différents points de la capitale.",
      "Concernant les tisseurs, ceux des localités voisines de Saint-Etienne font cause commune avec les tisseurs stéphanois. Une réunion est prévue demain pour tenter d'amener une entente entre les grévistes et les fabricants."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame familial rue Doudeauville",
    "summary": "Une violente dispute familiale rue Doudeauville a conduit le jeune Lucien Detnaive, âgé de vingt-huit ans, à se précipiter par la fenêtre du sixième étage. Grièvement blessé, il a été hospitalisé à Lariboisière.",
    "paragraphs": [
      "Une scène dramatique s'est déroulée hier, rue Doudeauville. Après une discussion violente avec sa mère, Lucien Detnaive, âgé de vingt-huit ans, a tenté de la frapper avant de se précipiter par la fenêtre du sixième étage.",
      "Le corps a atterri sur le vitrage de la cuisine d'un restaurant situé au rez-de-chaussée. Grièvement blessé, le malheureux a été promptement transporté à l'hôpital Lariboisière."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Cambriolage au couvent de Notre-Dame de Sion",
    "summary": "Des malfaiteurs se sont introduits par effraction au couvent de la rue des Marguettes, dérobant 150 francs. Grâce à l'enquête du commissaire Brunet, l'un des coupables a été arrêté après une lutte acharnée.",
    "paragraphs": [
      "Des malfaiteurs se sont introduits par effraction, la nuit dernière, au couvent situé rue des Marguettes. Après avoir fracturé plusieurs portes, ils ont dérobé la somme de 150 francs dans le cabinet de la supérieure.",
      "Les malandrins ont laissé un mot menaçant sur les lieux ; toutefois, l'enquête rigoureuse de M. Brunet, commissaire de police, a permis de retrouver l'un des coupables après une lutte des plus vigoureuses."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Infanticide boulevard du Montparnasse",
    "summary": "La nommée Lucie Talbot, jeune domestique, a accouché clandestinement boulevard du Montparnasse. L'enfant, retrouvé avec des marques de violence, a succombé. La mère est à la disposition de la justice.",
    "paragraphs": [
      "Une jeune domestique, Lucie Talbot, a accouché clandestinement boulevard du Montparnasse. L'enfant, mort après deux heures d'existence, portait des traces évidentes de violence. La domestique, très affaiblie par son état, a été transportée à l'hôpital et placée sous la surveillance étroite de la justice."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide d'une concierge à Saint-Ouen",
    "summary": "Désespérée par le décès récent de son époux, la dame Decreaud, concierge à Saint-Ouen, a mis fin à ses jours hier soir en s'asphyxiant volontairement au gaz dans son logement.",
    "paragraphs": [
      "La dame Decreaud, concierge à Saint-Ouen, ne pouvant se consoler de la perte douloureuse de son mari, s'est suicidée hier soir par asphyxie au gaz dans son logement, aux côtés de sa chatte."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident effroyable au tissage mécanique",
    "summary": "Un terrible accident a endeuillé le tissage mécanique de M. Maguier à Amiens. Un ouvrier, Apollinaire Lamarre, a été tué sur le coup, tandis que son collègue Arthur Pigeon est grièvement blessé.",
    "paragraphs": [
      "Un accident effroyable s'est produit au tissage mécanique de M. Maguier, à Amiens. Deux ouvriers, Apollinaire Lamarre et Arthur Pigeon, nettoyaient une roue hydraulique lorsque celle-ci s'est remise en mouvement brusquement.",
      "Pigeon a été grièvement blessé au crâne. Quant à Lamarre, il a été tué sur le coup, la tête sectionnée par l'engrenage. L'émotion est extrêmement vive dans le quartier Saint-Leu."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Noyade à Suresnes",
    "summary": "Mme Virginie Billard, une couturière de quarante-quatre ans, a été retrouvée sans vie, noyée dans la baignoire d'un établissement de bains du quai National à Suresnes.",
    "paragraphs": [
      "Mme Virginie Billard, couturière, âgée de quarante-quatre ans et demeurant rue de la Huchette, s'était rendue dans un établissement de bains du quai National, hier.",
      "Au bout d'une heure, ne la voyant pas sortir de sa cabine, on ouvrit la porte et on trouva la malheureuse noyée dans sa baignoire."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Un enfant trouvé à Puteaux",
    "summary": "Un petit garçon de quatre ans, prénommé René, a été découvert errant et affamé place de l'Église à Puteaux. Conduit au commissariat, il n'a pu fournir d'autres indications sur son identité.",
    "paragraphs": [
      "Un petit garçon de quatre ans, blond, aux yeux noirs, vêtu d'une robe grise, de bas noirs et de souliers ferrés, a été trouvé la nuit dernière, pleurant et mourant de faim, place de l'Église, par les agents de ronde.",
      "Conduit au commissariat, le pauvre enfant n'a su donner que son prénom : René."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Accident de fiacre à Clichy",
    "summary": "Le cocher Adrien Rousset a été grièvement blessé lors d'une collision entre son fiacre et une voiture de maître sur le boulevard National à Clichy. Le cheval s'est également gravement blessé.",
    "paragraphs": [
      "Un cocher de fiacre, Adrien Rousset, âgé de vingt-sept ans, circulait hier sur le boulevard National lorsque son véhicule fut percuté par une voiture de maître attelée de deux chevaux venant en sens inverse.",
      "Le malheureux conducteur a eu plusieurs côtes enfoncées et a été grièvement blessé à la tête et aux reins ; il a été transporté d'urgence à l'hôpital Beaujon.",
      "Le cheval, qui s'était emballé, est allé s'ouvrir le poitrail sur le timon d'un camion stationnant non loin de la porte de Clichy."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Incendie à Bécon-les-Bruyères",
    "summary": "Un incendie a ravagé une exploitation maraîchère rue Mallet à Bécon-les-Bruyères. L'agent de police J'erre a été grièvement brûlé aux mains en portant secours.",
    "paragraphs": [
      "Un incendie a éclaté hier soir à quatre heures, rue Mallet, dans une exploitation maraîchère appartenant à M. Mau. Le feu a détruit tout un corps de bâtiment et a atteint la maison d'habitation.",
      "Au cours des opérations de sauvetage, l'agent J'erre, de la brigade d'Asnières, a été grièvement brûlé aux deux mains. Les dégâts dépassent plusieurs milliers de francs."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Suicide à Argenteuil",
    "summary": "Le gardien de la paix Alexandre Fauère s'est suicidé par pendaison à son domicile d'Argenteuil, laissant dans le dénuement une veuve et deux jeunes enfants.",
    "paragraphs": [
      "Le gardien de la paix Alexandre Fauère, âgé de trente-sept ans et demeurant rue de Paris, s'est pendu hier dans son domicile à l'aide d'un fil de laiton. Le malheureux laisse une veuve et deux tout jeunes enfants."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Sauvetage à Rueil",
    "summary": "Hier soir, M. Calon a porté secours à un débardeur de Port-Marly, le nommé Rambaud, tombé dans un fossé glacé près de la Malmaison. La victime, en état d'hypothermie, a été sauvée de justesse grâce à son intervention.",
    "paragraphs": [
      "Hier soir, vers huit heures, M. Calon, se rendant à la Malmaison, entendit des gémissements paraissant provenir d'un fossé au fond duquel coule un ruisseau profond de plus d'un mètre et formé par les eaux des égouts de la ville. S'étant approché, il aperçut un homme qui se débattait sous la glace que sa chute avait brisée.",
      "Après bien des efforts, il parvint à le retirer avec l'aide de M. Brossier. Le malheureux était déjà congestionné par le froid. Il est âgé de quarante-cinq ans et exerce la profession de débardeur à Port-Marly, où il est connu sous le nom de Rambaud."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Accident de travail à la Plaine-Saint-Denis",
    "summary": "Un ouvrier lampiste, Louis Le Touarin, a été grièvement blessé hier matin à la Plaine-Saint-Denis. En tombant entre les tampons de deux wagons en formation, il a été violemment atteint à la poitrine et à l'abdomen.",
    "paragraphs": [
      "Un ouvrier lampiste, M. Louis Le Touarin, âgé de trente-trois ans, qui hier matin travaillait sur une voie de garage du Landy à placer les lampes d'un train en formation, s'apprêtait à passer d'un wagon sur un autre, lorsqu'il glissa sur la toiture de l'un d'eux et tomba entre les tampons des deux véhicules. Il fut blessé très grièvement à la poitrine et à l'abdomen, et conduit à l'hôpital Lariboisière."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Autour de Paris",
    "title": "Agression à Saint-Denis",
    "summary": "Un terrassier a été sauvagement agressé rue de la Légion-d'Honneur par deux compagnons. L'un des agresseurs a été arrêté après avoir blessé un gardien de la paix lors d'une lutte acharnée.",
    "paragraphs": [
      "Un ouvrier terrassier, Lucien Flannele, âgé de trente-cinq ans, demeurant rue de Paris, passait hier soir rue de la Légion-d'Honneur, lorsqu'il fut soudain attaqué par deux de ses compagnons de travail, Fernand Bougerland, trente-quatre ans, et Jean Brouitlèche, trente ans, qui sautèrent sur lui et, après l'avoir très grièvement blessé au crâne et au visage, le laissèrent inanimé sur le sol.",
      "Mais au moment où ils s'éloignaient, deux gardiens de la paix survinrent. Bougerland réussit à s'enfuir, mais Brouitlèche, appréhendé par les agents, se démena si bien qu'il blessa grièvement le gardien Ruellan. Il fallut le ligoter pour le conduire devant M. D'Homme, commissaire de police."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Départements",
    "title": "Incendies dans l'Oise et à Beauvais",
    "summary": "Deux incendies ont ravagé des stocks de récoltes. À Bailleval, une meule d'avoine a été détruite par malveillance, tandis qu'à Beauvais, un sinistre similaire a frappé un cultivateur sans assurance.",
    "paragraphs": [
      "Bailleval (Oise) : Avant-hier soir, le feu a pris dans une meule de 1 300 bottes d'avoine appartenant à M. Favrel, cultivateur à Bethencourt, et l'a complètement détruite. On attribue les causes de ce sinistre à la malveillance.",
      "Beauvais : Un incendie dont la cause est demeurée inconnue a consumé, dans la plaine d'Ernemont-Boutavent, une meule de trois mille gerbes d'avoine appartenant à M. Lefèvre, cultivateur en cette localité, lequel n'est couvert par aucune assurance."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Départements",
    "title": "Accident mortel à Chartres",
    "summary": "À Chartres, un ouvrier plombier nommé Arsène Leblanc a trouvé la mort après une chute accidentelle de vingt-cinq mètres au fond d'un puits lors de travaux de pompage.",
    "paragraphs": [
      "Chartres : Hier soir, le nommé Arsène Leblanc, âgé de quarante-quatre ans, ouvrier plombier, était occupé à poser une pompe chez M. François, fermier à Epeautrolles. L'ouvrier venait de remonter lorsque la corde qui le soutenait se dénoua, et il fut précipité au fond du puits, profond de vingt-cinq mètres. On l'a retiré avec les deux jambes fracturées et de nombreuses blessures. Le malheureux est mort quelques instants après."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Départements",
    "title": "Crime à Lille",
    "summary": "Au sein de l'asile d'aliénés de Lommelet, un pensionnaire a commis l'irréparable en étranglant son compagnon de cellule, le sieur Duvillier, originaire de la ville de Tourcoing.",
    "paragraphs": [
      "Le parquet de Lille vient d'être informé par le directeur de l'asile d'aliénés de Lommelet qu'un pensionnaire a étranglé son camarade de cellule, un sieur Duvillier, originaire de Tourcoing."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités des scènes parisiennes",
    "summary": "Chroniques théâtrales : l'Opéra-Comique programme des reprises, le Vaudeville réinscrit Belle-Maman à l'affiche, et la Gaîté prépare activement la première de la pièce de Maurice Ordonneau.",
    "paragraphs": [
      "Ce soir, à l'Opéra-Comique, reprise d'Orphée, de Gluck, pour les débuts de Mlle Gerville-Réache, et reprise de L'Idole, de Méhul.",
      "La direction du Vaudeville a dû interrompre la carrière de Belle-Maman pour faire place au Faubourg. La pièce de M. Abel Hermant n'ayant pas brillé, Belle-Maman va retrouver l'affiche pour dix représentations.",
      "Le théâtre de la Gaîté annonce les dernières représentations des Mousquetaires au couvent. Le mardi 26 et le mercredi 27, relâche pour répétition générale des Saltimbanques, de M. Maurice Ordonneau."
    ]
  }
];
