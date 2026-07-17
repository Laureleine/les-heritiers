// Date: 1901-03-30
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-03-30 (Version Restaurée, 39 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Roman",
    "title": "Le Secret du Bonheur",
    "summary": "Pierre Sales annonce la parution imminente de son nouveau roman inédit, \"Le Secret du Bonheur\", une œuvre qui explore la quête de la félicité par le travail et l'inflexible droiture.",
    "paragraphs": [
      "Le Petit Parisien commencera sous peu la publication d'un grand roman inédit, intitulé \"Le Secret du Bonheur\" et signé de la plume de Pierre Sales.",
      "Cette œuvre dépeint une quête émouvante au travers de laquelle le bonheur ne se conquiert qu'au prix d'efforts soutenus et d'une inflexible droiture."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Actualités Internationales",
    "title": "La capture d'Aguinaldo aux Philippines",
    "summary": "Le leader philippin Aguinaldo a été capturé par les troupes américaines. Jean Frollo revient sur le parcours de cet allié devenu résistant face aux visées d'occupation des États-Unis.",
    "paragraphs": [
      "Aguinaldo, le patriote philippin, a été livré aux troupes américaines après trois années de lutte acharnée pour l'indépendance de son pays.",
      "Un détail curieux mérite d'être souligné : Aguinaldo fut d'abord l'allié des Américains lors de la guerre contre l'Espagne, avant de se retourner contre eux lorsqu'il comprit que les États-Unis ambitionnaient d'occuper les Philippines.",
      "La résistance fut impitoyable, portée par des sociétés secrètes telles que la Katipunan, et marquée par le sacrifice de chefs militaires illustres, à l'instar du général Gregorio del Pilar.",
      "Jean Frollo conclut que cette capture pourrait enfin ouvrir la voie à une réflexion sur le terme de cette guerre lamentable."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Roman",
    "title": "Miss Tempête - La Voix du Sang",
    "summary": "Michel Bertin se rend au château de Veruoy pour une entrevue décisive avec Roger de Sartys. Une rencontre lourde de secrets du passé et d'une menace de duel fratricide.",
    "paragraphs": [
      "Michel Bertin se rend au château de Veruoy afin d'y rencontrer Roger de Sartys. Une confrontation lourde d'émotion et de secrets enfouis du passé s'annonce.",
      "Le récit explore les retrouvailles tendues entre les deux hommes et la révélation imminente d'un duel fratricide en préparation."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Chronique Politique",
    "title": "La séparation des Chambres",
    "summary": "À l'approche des vacances de Pâques, la sérénité règne au Palais-Bourbon. La France affirme sa force diplomatique, consolidant ses liens avec la Russie et se rapprochant de l'Angleterre et de l'Italie.",
    "paragraphs": [
      "À l'approche des vacances de Pâques, la situation politique est envisagée avec confiance et sérénité, au lendemain des débats parlementaires tenus au Palais-Bourbon.",
      "Les affaires sociales et internationales témoignent d'une France en position de force, diplomatiquement unie à la Russie et engagée dans une voie de rapprochement avec l'Angleterre et l'Italie."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Conseil des Ministres",
    "title": "Décisions du Conseil des Ministres",
    "summary": "Sous la présidence de M. Loubet, le Conseil des Ministres s'est réuni pour expédier les affaires courantes et procéder à diverses nominations au sein du Conseil d'État.",
    "paragraphs": [
      "Les ministres se sont réunis sous la présidence de M. Loubet, afin d'expédier les affaires courantes et de procéder à des nominations au sein du Conseil d'État."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique Militaire",
    "title": "Les pouvoirs des préfets maritimes",
    "summary": "Un décret récent précise les attributions des préfets maritimes en temps de paix, harmonisant leurs compétences avec les commandements terrestres, dans le cadre de la nouvelle loi sur l'armée coloniale.",
    "paragraphs": [
      "Un décret vient d'être signé, déterminant les attributions des préfets maritimes en temps de paix. Ce texte apporte une clarification nécessaire sur leurs pouvoirs vis-à-vis des commandements terrestres, notamment dans le cadre des réorganisations induites par la loi sur l'armée coloniale."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une victoire française en Afrique",
    "summary": "Le ministère des Colonies annonce la prise victorieuse du camp de Fodekaba, à Mandina, par les forces franco-britanniques, consolidant ainsi la pacification de la région de la Casamance.",
    "paragraphs": [
      "Le ministère des Colonies communique la nouvelle de la prise du camp de Fodekaba, situé à Mandina, par les troupes françaises et britanniques.",
      "Cette expédition fructueuse a permis de rétablir l'ordre dans la région de la Casamance et d'affaiblir considérablement la résistance indigène."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Actualités",
    "title": "Voyage du Président de la République",
    "summary": "Les préparatifs officiels pour l'accueil de l'escadre italienne à Toulon sont terminés. La visite du duc de Gênes promet de raffermir les liens d'amitié entre la France et l'Italie.",
    "paragraphs": [
      "Les détails concernant l'accueil solennel de l'escadre italienne à Toulon sont désormais finalisés. La visite prochaine du duc de Gênes est attendue avec ferveur, afin d'honorer et de consolider les liens étroits unissant la France à l'Italie."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "La Bande du Bâtiment",
    "summary": "La police parisienne a réussi à démanteler une organisation criminelle spécialisée dans le cambriolage de villas. L'enquête se poursuit pour capturer le chef de cette bande utilisant vélos et souterrains.",
    "paragraphs": [
      "Une bande de malfaiteurs, spécialisée dans le cambriolage de villas, a été démantelée par les services de police après une série de vols audacieux commis dans les environs de Paris.",
      "Cette organisation criminelle, qui utilisait des bicyclettes pour ses déplacements rapides et des accès souterrains, fait actuellement l'objet d'une enquête approfondie afin d'arrêter son chef présumé."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Social",
    "title": "Les grèves à Marseille",
    "summary": "La situation sociale à Marseille se stabilise sous surveillance militaire. Malgré quelques pressions, la reprise du travail dans les docks et chantiers navals s'affirme progressivement.",
    "paragraphs": [
      "La situation à Marseille demeure sous surveillance militaire, bien que les tensions observées ces derniers jours se soient atténuées, favorisant une reprise progressive du travail dans les docks et les chantiers navals.",
      "En dépit de quelques tentatives d'intimidation sporadiques, la grande majorité des ouvriers semble désormais déterminée à reprendre ses activités habituelles."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Politique",
    "title": "Les Retraites Militaires",
    "summary": "Un projet de loi réforme le calcul des retraites militaires, visant à limiter la comptabilité des campagnes en Algérie et en Tunisie pour soulager le budget national.",
    "paragraphs": [
      "Un projet de loi est actuellement à l'étude pour réformer le calcul des retraites militaires. Il prévoit notamment de limiter la comptabilité des campagnes pour les garnisons stationnées en Algérie et en Tunisie, dans le but de soulager le budget national."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Militaire",
    "title": "Règlement des retraites et indemnités des officiers",
    "summary": "Le projet prévoit un système de majoration de campagne pour les officiers en garnisons pénibles ou forts isolés, accompagné d'indemnités spécifiques pour les résidences difficiles.",
    "paragraphs": [
      "Le Petit Parisien aborde la question des séjours pénibles des officiers près de la frontière de l'Est ou dans les Alpes. Le projet prévoit le système de la demi-campagne, où le temps passé dans des régions difficiles ou des forts isolés serait majoré pour le décompte de la retraite.",
      "Le projet prévoit également l'emploi des sommes économisées pour la création d'une indemnité spéciale pour les officiers en garnison dans les forts isolés ou les petites places fortes, ainsi que dans les îles de la Méditerranée ou de l'Océan, compte tenu de la pénibilité de ces résidences."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Chronique Parlementaire",
    "title": "Séance de la Chambre des députés du 29 mars",
    "summary": "La Chambre a adopté la loi sur les associations et reçu le dépôt du budget 1902 par M. Caillaux, non sans vifs échanges entre certains députés.",
    "paragraphs": [
      "La Chambre a terminé la discussion sur la loi des associations, votée par 303 voix contre 235. À la fin de la séance, M. Caillaux, ministre des Finances, a déposé le projet de budget de l'exercice 1902.",
      "La Chambre a voté divers projets, notamment celui relatif aux réparations des dégâts causés aux récoltes par le gibier, ainsi que des crédits pour un monument à la mémoire des Alsaciens-Lorrains et pour l'association internationale des académies.",
      "La discussion sur la loi des associations a été marquée par l'adoption de l'article 18 et le renvoi à la commission d'assistance d'un amendement visant les congrégations religieuses.",
      "La séance a été ponctuée par des incidents entre M. Coutant et M. Baudry d'Asson, ainsi que par le rejet de plusieurs amendements, notamment celui proposant un référendum."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique Financière",
    "title": "Le projet de budget pour 1902",
    "summary": "M. Caillaux, ministre des Finances, dépose son budget 1902, prônant la sincérité des évaluations et une stricte économie face aux charges de la défense et des chemins de fer.",
    "paragraphs": [
      "M. Caillaux, ministre des Finances, a déposé le projet de budget pour 1902. Ce texte se veut simple et s'inscrit dans la continuité des réformes fiscales et budgétaires précédentes.",
      "Le projet doit faire face à des dépenses inéluctables, notamment pour la défense des côtes et la garantie d'intérêt des chemins de fer. Pour couvrir les déficits, le ministre propose une réforme du régime des vinaigres et des pétroles.",
      "Le ministre conclut son exposé en rappelant les principes de sa politique : unité budgétaire, sincérité des évaluations et stricte économie."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Chronique Parlementaire",
    "title": "Séance du Sénat du 29 mars",
    "summary": "Sous la présidence de M. Fallières, le Sénat a voté divers crédits ministériels et des mesures de police sanitaire avant de s'ajourner au mois de mai.",
    "paragraphs": [
      "Sous la présidence de M. Fallières, le Sénat a adopté plusieurs projets de loi, notamment sur les crédits pour le ministère de l'Instruction publique et de l'Agriculture, ainsi que sur la police sanitaire des animaux.",
      "Le Sénat a également voté l'urgence pour les crédits supplémentaires et s'est ajourné au mois de mai."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Actualité Étrangère",
    "title": "La situation en Afrique du Sud et en Chine",
    "summary": "Dans le conflit anglo-boer, le général Bruce Hamilton échoue près de Dewetsdorp. En Chine, un accord entre les forces russes et britanniques met fin à l'incident survenu à Tientsin par un retrait mutuel des postes.",
    "paragraphs": [
      "Dans le conflit anglo-boer, une colonne britannique commandée par le général Bruce Hamilton a échoué dans une tentative de capture près de Dewetsdorp. D'autres opérations militaires sont en cours par les colonnes du général French.",
      "Concernant la Chine, un arrangement a été conclu entre les forces russes et britanniques pour clore l'incident survenu à Tientsin, prévoyant le retrait mutuel des sentinelles et des postes de garde."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "La grève de Montceau-les-Mines",
    "summary": "La grève des mineurs se poursuit à Montceau-les-Mines dans un calme relatif. Quelques arrestations ont eu lieu lors de bousculades, tandis que des pourparlers sont engagés pour apaiser la situation.",
    "paragraphs": [
      "La ville de Montceau-les-Mines reste calme malgré la grève. Plusieurs mineurs ont été arrêtés pour des cris injurieux ou des altercations survenues lors de la descente dans les puits.",
      "Des entrevues ont eu lieu entre les autorités et les représentants des mineurs pour tenter de ramener le calme et trouver une issue au conflit."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Social",
    "title": "La grève de Montceau-les-Mines",
    "summary": "Face au déploiement massif des troupes à Montceau-les-Mines, les grévistes sollicitent l'appui des députés socialistes. Une réunion des commerçants est organisée pour discuter d'une solution au mouvement.",
    "paragraphs": [
      "Le déploiement considéré des troupes concentrées à Montceau-les-Mines et à l'Étang a conduit les intéressés à adresser à M. Devèze, secrétaire du groupe parlementaire socialiste, un télégramme réclamant l'envoi à Montceau d'autres représentants de la Chambre.",
      "Dans la soirée aura lieu, salle Pézent, une réunion des commerçants de Montceau ayant pour but de rechercher les moyens de solutionner la grève."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Marine",
    "title": "Les lancements de navires de guerre en 1899",
    "summary": "Bilan de la construction navale en 1899 : soixante navires lancés par huit nations. L'Angleterre domine en tonnage lourd, tandis que la France excelle dans la production de petites unités de défense.",
    "paragraphs": [
      "Pendant l'année 1899, les marines de guerre ont lancé soixante bâtiments, qui, non compris les torpilleurs, forment un déplacement total de 184 000 tonnes et une puissance de 491 160 chevaux-vapeur. Ces soixante navires appartiennent à huit nations : l'Angleterre, l'Allemagne, l'Autriche, l'Espagne, l'Italie, le Japon, la Norvège, la Russie et la Suède.",
      "Le pays qui arrive en tête est l'Angleterre, qui a mis à l'eau dix-huit cuirassés et croiseurs formant un tonnage de 82 080 tonnes. La Russie, qui ne compte que neuf unités, totalise 51 240 tonnes. L'Allemagne suit avec 32 500 tonnes.",
      "Il est à remarquer que le tonnage allemand lancé est supérieur au tonnage anglais. Le Japon occupe le cinquième rang avec trois navires, puis l'Autriche avec deux bâtiments.",
      "On trouve enfin la Norvège, l'Italie et les Pays-Bas. Si l'on faisait entrer les torpilleurs dans ce compte, la France arriverait au second rang, voire au premier, car c'est notre pays qui construit le plus de petites unités, destinées surtout à la défense."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Les palmes académiques et le Journal officiel",
    "summary": "La publication des listes des palmes académiques au Journal officiel, concomitante aux débats parlementaires, a imposé un travail acharné aux typographes pour assurer la distribution du journal.",
    "paragraphs": [
      "La parution des listes des palmes académiques au Journal officiel a coïncidé hier avec des séances très importantes au Sénat et à la Chambre des députés. Cette abondance de documents a occasionné un retard inévitable dans la distribution du journal.",
      "Les ouvriers typographes ont dû rivaliser de zèle, travaillant quinze heures sans désemparer pour permettre un tirage de plus de 30 000 exemplaires."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Économie",
    "title": "Le comité de défense des intérêts nationaux",
    "summary": "Le Comité de défense des intérêts nationaux, sous l'égide de M. d'Estournelles de Constant, se mobilise pour structurer la production française face à la pression croissante de la concurrence internationale.",
    "paragraphs": [
      "Le comité de défense des intérêts nationaux, présidé par M. d'Estournelles de Constant, a pour but d'organiser méthodiquement la production française face au danger croissant de la concurrence universelle.",
      "M. Georges Leygues, ministre de l'Instruction publique, a affirmé sa sympathie pour cette œuvre. M. Jean Dupuy, ministre de l'Agriculture, a également adressé son approbation, estimant que cette entreprise rendra de grands services. M. Millerand, ministre du Commerce, a rendu hommage aux promoteurs qui cherchent à éclairer l'opinion sur la gravité du péril économique.",
      "Le comité a son siège à Paris, 14, rue Jean-Jacques-Rousseau."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Décès de M. Pierre Lasserre",
    "summary": "Le Petit Parisien annonce le décès de M. Pierre Lasserre, patriarche centenaire et aïeul de M. Maurice Lasserre, député du Tarn-et-Garonne, disparu à l'âge honorable de cent ans et six mois.",
    "paragraphs": [
      "On nous annonce la mort de M. Pierre Lasserre, grand-père de M. Maurice Lasserre, député du Tarn-et-Garonne. M. Pierre Lasserre était âgé de cent ans et six mois."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Social",
    "title": "Conférence de l'Union des employés de commerce",
    "summary": "À la mairie du Xe arrondissement, M. Léo Wimon a donné une conférence sur le rôle crucial des jeunes employés de commerce dans le rayonnement et l'expansion de l'influence française à l'étranger.",
    "paragraphs": [
      "L'Union des employés de commerce, de commission et d'exportation avait organisé, hier, à la mairie du dixième arrondissement, une conférence placée sous la présidence de M. Paul Delaunoy.",
      "Le conférencier, M. Léo Wimon, a exhorté les jeunes gens à s'engager activement dans les entreprises commerciales afin de favoriser le rayonnement et l'expansion de l'influence française à travers le monde."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Théâtre",
    "title": "Critique de la pièce 'Le Ménage moderne' au Théâtre Sarah-Bernhardt",
    "summary": "La nouvelle pièce de M. Gustave Guiches, « Le Ménage moderne », jouée au théâtre Sarah-Bernhardt, peine à convaincre par son intrigue décousue, malgré une interprétation de qualité par la troupe.",
    "paragraphs": [
      "La pièce « Le Ménage moderne », de M. Gustave Guiches, jouée hier au théâtre Sarah-Bernhardt, a paru bien incohérente et heurtée. Il est à craindre qu'elle ne fournisse pas une longue carrière.",
      "L'intrigue met en scène un ménage à trois, situation assez rebattue. Dussol se réconcilie avec sa femme après avoir voyagé avec des femmes de brasserie, suite à une rupture avec sa maîtresse. L'interprétation de MM. Paul Clerget, Dieudonné, Mondon et de Mmes Marguerite Gauthier et Marie Marcilly a été à la hauteur de leurs talents respectifs."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'affaire des palmes académiques",
    "summary": "Un tailleur, victime d'une promesse publicitaire fallacieuse sur l'obtention des palmes académiques, a provoqué un scandale bruyant dans un restaurant lors de la parution du Journal officiel.",
    "paragraphs": [
      "Lorsqu'un tailleur, M. X., fut informé par un agent de publicité que son nom figurait parmi les futurs récipiendaires des palmes académiques, il organisa un déjeuner de fête avec plusieurs amis pour célébrer cette distinction. Hélas, au moment où le Journal officiel parut, le nom de l'artisan n'y figurait point.",
      "Une explication orageuse suivit aussitôt ; de la vaisselle fut brisée et le restaurateur, excédé par le tumulte, appela la police. Le commissaire du quartier des Halles dut intervenir pour calmer les protagonistes, M. X. se trouvant manifestement en tort d'avoir provoqué une telle altercation publique."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Ivrognerie au Jardin des Plantes",
    "summary": "Au Jardin des Plantes, une altercation entre deux hommes ivres et des promeneuses a dégénéré en violence. L'un des protagonistes, Jean Mazurié, a perdu l'usage d'un œil après un coup de parapluie reçu au visage.",
    "paragraphs": [
      "Deux ivrognes, Jean Mazurié et Claude Mohair, ont semé le trouble au Jardin des Plantes en tenant des propos inconvenants devant des spectatrices, à proximité du parc aux antilopes. Plusieurs promeneuses ont répliqué avec énergie, usant de leurs parapluies et de leurs bâtons pour repousser les importuns.",
      "Jean Mazurié a eu l'œil gauche irrémédiablement perdu après avoir reçu un coup de parapluie en pleine face. Une enquête a été ouverte par les autorités afin d'identifier les femmes ayant pris part à cette vigoureuse correction."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Soldat attaqué par des rôdeurs",
    "summary": "Le soldat Petit a été sauvagement agressé quai de la Râpée par trois individus. Blessé à la main et amputé de deux doigts lors de la lutte, il a été transporté à l'hôpital militaire Bégin.",
    "paragraphs": [
      "Le soldat Petit, revenant de Charenton, a été assailli quai de la Râpée par trois rôdeurs malintentionnés. Malgré sa résistance farouche, il a eu la main droite perforée d'un coup de stylet et deux doigts tranchés net par les agresseurs. Le blessé a été immédiatement transporté à l'hôpital militaire Bégin pour y subir une amputation nécessaire."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie rue Portefoin",
    "summary": "Un incendie dévastateur causé par une lampe à pétrole a ravagé la boutique du plumassier M. Barache, rue Portefoin. Le propriétaire et son concierge ont été grièvement blessés dans le sinistre.",
    "paragraphs": [
      "Un violent incendie s'est déclaré rue Portefoin dans un appartement servant de magasin à M. Barache, plumassier de son état. Le feu, causé par le renversement accidentel d'une lampe à pétrole, s'est propagé avec une rapidité effrayante dans les locaux emplis de plumes hautement inflammables.",
      "M. Barache a été grièvement brûlé et a dû se précipiter par la fenêtre pour échapper aux flammes dévorantes. Le concierge, M. Machinal, a également été blessé au cours de l'événement. Il a fallu une heure d'efforts acharnés aux pompiers pour réussir à circonscrire le sinistre."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide d'un étudiant",
    "summary": "L'étudiant Edmond Grosjean, âgé de trente ans, a mis fin à ses jours avenue des Gobelins en se tirant un coup de revolver. Il avait déjà manifesté par le passé des intentions suicidaires.",
    "paragraphs": [
      "Un étudiant, M. Edmond Grosjean, âgé de trente ans, s'est suicidé hier avenue des Gobelins en se tirant un coup de revolver dans la tête. Sa mère a déclaré aux autorités que son fils avait déjà tenté, à plusieurs reprises, de mettre fin à ses jours."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes limitrophes",
    "summary": "Chronique des accidents et drames survenus dans la périphérie parisienne : noyades, incendies, accidents de chantier et découvertes macabres ont marqué la semaine dans les communes voisines de la capitale.",
    "paragraphs": [
      "À Neuilly-sur-Seine, le jeune André Laurens a été renversé par un cheval emballé. À Sèvres, un jardinier a découvert un obus chargé. À Suresnes, Jean Levoiles, ouvrier, s'est noyé en tombant dans la Seine. À Colombes, un éboulement sur un chantier a écrasé un ouvrier, Louis Taché.",
      "À Clichy, la petite Lucie Radel a mis le feu à ses vêtements en jouant près d'un poêle ; son état est jugé désespéré. À Montmorency, un incendie a détruit un hangar. À Saint-Denis, des voleurs ont été arrêtés après avoir cambriolé le logement de M. Larousse. À Saint-Mandé, le corps d'un homme élégamment vêtu a été découvert dans les fossés des fortifications.",
      "À Charenton, Louis Aebud s'est suicidé par chagrin d'amour. À Alfortville, deux hommes ont été arrêtés pour vol de marchandises. À Ivry, l'autopsie du petit enfant de Mme Coche a révélé une mort naturelle. À Gentilly, le corps de Philippe Bertaire a été retrouvé mort dans une cabane après deux jours.",
      "À Villeneuve-Saint-Georges, Mme Boussard a été renversée par une voiture. À Marcoussis, M. Olivia a tenu une réunion publique. À Rambouillet, un incendie dans la forêt de l'État a été causé par l'imprudence d'un bûcheron."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Social",
    "title": "Congrès des manufactures de tabacs",
    "summary": "Le congrès des ouvriers des manufactures de tabacs touche à sa fin, actant des discussions majeures sur l'âge de la retraite et les pensions, tout en réaffirmant la solidarité internationale des travailleurs.",
    "paragraphs": [
      "Le congrès des ouvriers des manufactures de tabacs a poursuivi ses discussions concernant l'abaissement de l'âge de la retraite et l'augmentation des pensions. Les ouvriers ont tenu à exprimer leurs vives sympathies à leurs frères de travail du monde entier. Le congrès clôturera ses travaux aujourd'hui."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Sports",
    "title": "La course d'automobiles Nice-La Turbie",
    "summary": "La course Nice-La Turbie a rassemblé une cinquantaine de concurrents sur 15 kilomètres. Une performance remarquable, marquée par le battement des records de l'année précédente d'une minute.",
    "paragraphs": [
      "La course d'automobiles Nice-La Turbie, longue de 15 kilomètres, a eu lieu hier avec une cinquantaine de partants. Les records établis l'an dernier ont été battus d'une minute en moyenne. Les résultats détaillés ont été proclamés par catégorie, incluant les motocycles, les voitures et les voitures à vapeur."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Communications diverses",
    "title": "Assemblée générale de l'Union des employés du commerce",
    "summary": "L'Union des employés du commerce et de l'industrie de la Seine tiendra son assemblée annuelle le 31 mars à la mairie du Ier arrondissement, sous la présidence de M. A. Guffroy.",
    "paragraphs": [
      "L'Union des employés du commerce et de l'industrie du département de la Seine, société de prévoyance et de secours mutuels, tiendra son assemblée générale annuelle le dimanche 31 mars, à 10 heures, à la mairie du premier arrondissement, sous la présidence de M. A. Guffroy, président de la chambre syndicale des banquiers.",
      "MM. Georges Berry et Philippe Laloge, députés de la Seine et présidents d'honneur de la société, assisteront à la séance."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Courses",
    "title": "Pronostics pour les courses du 30 mars",
    "summary": "Le programme des courses d'Auteuil de ce samedi 30 mars est riche et varié, avec une série d'épreuves prestigieuses dont le prix du Chaillos et le prix d'Auteuil Talon.",
    "paragraphs": [
      "Les courses d'Auteuil du samedi 30 mars proposent plusieurs épreuves, dont le prix du Chaillos, le prix de la Croix-d'Auteuil, le prix d'Achères, le prix d'Auteuil Talon, le prix Bayard et le prix du Val."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Compagnie de chemins de fer",
    "title": "Dividende de l'exercice 1900",
    "summary": "L'assemblée générale a arrêté le dividende de 1900 à 20 francs par action. Le paiement du solde débutera le 6 avril prochain dans les principaux établissements bancaires parisiens.",
    "paragraphs": [
      "L'assemblée générale a fixé à 20 francs par action le dividende de l'exercice 1900, sous déduction de l'acompte de 7 francs payé le 15 octobre.",
      "Ce dividende sera mis en paiement à partir du 6 avril prochain au Crédit foncier de France, au Crédit lyonnais, à la Société générale et à la Banque parisienne."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Compagnie parisienne du gaz",
    "title": "Fixation du dividende",
    "summary": "Le Conseil d'administration de la Compagnie parisienne du gaz communique la fixation du dividende à 61 francs par action de capital. Le paiement s'effectuera à hauteur de 46,50 francs dès le 6 avril.",
    "paragraphs": [
      "Le Conseil d'administration informe les actionnaires que le dividende a été arrêté à 61 francs par action de capital. Il sera mis en paiement à raison de 46 francs 50 par action, à dater du 6 avril prochain, au siège de la Compagnie."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le secret de la baronne d'Orvilliers",
    "summary": "M. Turner confie à madame Odelet des détails troublants sur la lignée cachée de la baronne d'Orvilliers, lorsque l'irruption de Coquenard vient précipiter le récit avec des nouvelles du Finistère.",
    "paragraphs": [
      "La conversation entre madame Odelet et M. Turner se poursuit concernant les secrets de la baronne d'Orvilliers. M. Turner révèle qu'il connaît l'identité de l'enfant de la nièce de la baronne, prénommée Marie-Madeleine, ainsi que le lieu où elle a été élevée.",
      "Madame Odelet, déconcertée par ces révélations et par l'insistance de M. Turner, est interrompue par l'arrivée impromptue de Coquenard, porteur de nouvelles concernant la localisation des époux Bellou dans le Finistère."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Agriculture",
    "title": "Informations agricoles et viticoles",
    "summary": "Le bulletin agricole souligne l'atonie des marchés viticoles du Midi sous l'influence des conditions climatiques, tandis que les cours des denrées céréalières et du sucre demeurent sous étroite surveillance.",
    "paragraphs": [
      "Le journal souligne l'impact du froid sur la végétation dans les régions viticoles. Dans le Gard, l'Hérault et l'Aude, le marché demeure calme, avec des cours variant selon la qualité et le degré alcoolique des vins.",
      "Une revue précise des prix et des tendances du marché des céréales et des sucres est également présentée dans le bulletin commercial de ce jour."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Spectacles",
    "title": "Programme des spectacles du 30 mars",
    "summary": "Le programme des représentations parisiennes du 30 mars est désormais disponible, recensant les affiches des grandes scènes, de la Comédie-Française aux divers concerts et bals de la capitale.",
    "paragraphs": [
      "La liste des représentations théâtrales et musicales pour la journée du 30 mars est détaillée, incluant les théâtres de la Comédie-Française, l'Opéra, les Variétés, ainsi que les divers concerts et bals organisés dans Paris."
    ]
  }
];
