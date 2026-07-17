// Date: 1900-12-01
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-12-01 (Version Restaurée, 39 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Faits Divers",
    "title": "Pour un sou : Le drame de la rue de la Guirlande",
    "summary": "À Marseille, l'emprisonnement d'un père pour le vol d'un sou conduit sa femme au suicide et à l'infanticide. Un drame social exacerbé par l'inflexibilité de la justice face à la misère extrême.",
    "paragraphs": [
      "Il y a quelques jours, à Marseille, un homme nommé Marochino fut arrêté pour le vol d'un sou. Père de trois enfants et privé d'ouvrage, il fut immédiatement écroué sur décision du juge d'instruction.",
      "Sa femme, en proie à un accès de désespoir face à l'immensité de la misère et à l'opprobre de la situation, résolut de mettre fin à ses jours et d'entraîner ses trois enfants dans la mort au moyen d'un réchaud à gaz. Les malheureux enfants ont succombé, tandis que la mère a survécu dans un état critique.",
      "Lors de son procès, Marochino sollicita vainement l'autorisation de se rendre à l'hôpital pour voir son épouse mourante une dernière fois. Le Tribunal correctionnel, en dépit de l'appui du ministère public lors d'une seconde audience, refusa cette mise en liberté provisoire en invoquant la rigueur des règlements administratifs.",
      "Face à l'émoi suscité au sein de la population, le prisonnier a finalement obtenu l'autorisation de se rendre à la morgue pour contempler une ultime fois les dépouilles de ses enfants. Ce drame met cruellement en lumière l'inflexibilité de notre justice face à un homme qui n'était encore qu'un prévenu."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Social",
    "title": "Catastrophe d'Aniche : Récit des obsèques",
    "summary": "Le Nord pleure les victimes de la fosse de Kéneloa. Entre l'enquête qui confirme le tragique destin des mineurs et l'hommage solennel rendu lors des inhumations, le pays témoigne sa solidarité.",
    "paragraphs": [
      "Le préfet du Nord, M. Vincent, s'est rendu sur les lieux de la catastrophe de la fosse Kéneloa afin de superviser les recherches et l'organisation des secours. Le carnet de comptes du garde-magasin Bertinchamps a été retrouvé, confirmant que ce dernier fut surpris par l'explosion alors qu'il était en plein travail.",
      "Les obsèques des victimes ont été l'occasion de manifestations poignantes de deuil national et de solidarité. À Somain, des cortèges imposants ont accompagné avec dignité les dépouilles des mineurs Branche, Cotton, Dulieu et Fourdraine.",
      "Plusieurs discours ont été prononcés au cimetière par les représentants de la Compagnie des mines, les autorités gouvernementales et les délégués syndicaux, promettant un secours durable et le soutien nécessaire aux familles durement éprouvées.",
      "Au coron de la Renaissance, une seconde cérémonie a marqué l'inhumation de sept autres mineurs, dont les restes mortels ont été portés à bras par leurs camarades, au sein d'une atmosphère de profonde et morne tristesse."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Meurtre et suicide à Saint-Amand",
    "summary": "Un terrible drame passionnel s'est noué à Saint-Amand : le tisseur Alexandre Cuvelier a assassiné la chanteuse Blanche Rémy avant de mettre fin à ses jours dans les eaux de la Scarpe.",
    "paragraphs": [
      "Un drame passionnel d'une rare violence s'est déroulé à Saint-Amand. Alexandre Cuvelier, un tisseur âgé de cinquante et un ans, a assassiné son ancienne compagne, la chanteuse Blanche Rémy, en lui portant trois coups de couteau mortels.",
      "Après avoir accompli son forfait, Cuvelier s'est précipité dans la Scarpe. Son corps a été repêché peu de temps après. La population locale demeure saisie d'effroi par ce double événement tragique."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Agression violente à Épinal",
    "summary": "À Épinal, le négociant M. Schwab a été victime d'une sauvage agression près du cimetière. L'enquête, orientée vers un ancien élève d'un orphelinat, se poursuit alors que le blessé est entre la vie et la mort.",
    "paragraphs": [
      "Un individu âgé d'une vingtaine d'années a attiré le négociant M. Schwab dans un guet-apens, aux abords du cimetière d'Épinal, sous le prétexte fallacieux d'une livraison. L'agresseur a asséné trois coups de hachette à sa victime avant de prendre la fuite.",
      "L'enquête ouverte par les autorités suggère que le coupable pourrait être un ancien élève d'un orphelinat agricole de la région. Le pronostic vital de M. Schwab demeure, à cette heure, malheureusement engagé."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Le départ du président Krüger",
    "summary": "Le président Krüger quitte la France pour poursuivre sa mission diplomatique en Allemagne, soutenu par la sympathie populaire et l'unanimité du Parlement français en faveur de sa cause.",
    "paragraphs": [
      "Le président Krüger s'apprête à quitter Paris afin de poursuivre son voyage diplomatique vers Cologne et Berlin. Son séjour en terre française a été marqué par une profonde sympathie populaire et un accueil officiel honorant son combat pour le droit et la justice.",
      "L'unanimité manifestée par le Parlement français en sa faveur renforce considérablement la portée morale de sa cause. Le président va désormais tenter d'obtenir une médiation ou un soutien diplomatique auprès des autorités allemandes."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Santé",
    "title": "Bulletin de santé du Tsar",
    "summary": "Le bulletin de santé du 30 novembre confirme une amélioration constante de l'état de l'empereur de Russie, qui a passé une nuit calme avec des constantes physiologiques revenues à la normale.",
    "paragraphs": [
      "Le dernier bulletin de santé de l'empereur de Russie, daté du 30 novembre, indique une amélioration constante. L'empereur a passé une nuit calme, sa température corporelle et ses pulsations étant revenues à des niveaux normaux."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Conseil Municipal",
    "title": "Aide aux victimes d'Aniche",
    "summary": "Le Conseil municipal de Paris a voté, sur proposition de M. Paul Escudier, l'ouverture d'un crédit pour soutenir les familles des victimes de la catastrophe minière survenue à Aniche.",
    "paragraphs": [
      "Lors de la séance à l'Hôtel de Ville, le Conseil municipal de Paris, sur proposition de M. Paul Escudier, a voté à l'unanimité l'ouverture d'un crédit pour venir en aide aux familles des victimes de la catastrophe des mines d'Aniche."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Actualités diplomatiques",
    "title": "Le président Kruger et la Médaille du Conseil municipal",
    "summary": "M. Gay, syndic du conseil municipal, a remis au président Kruger la médaille d'or de la Ville de Paris. Le dirigeant boër a exhorté les Parisiens à soutenir l'idée de l'arbitrage pour résoudre le conflit.",
    "paragraphs": [
      "M. Gay, syndic du conseil municipal de Paris, s'est rendu hier matin à l'hôtel Scribe auprès du président Kruger. Il a été reçu entouré de MM. Wessels, Fischer, du docteur Leyds, ainsi que de MM. van Hamel, Grobler et Eloff.",
      "Après avoir présenté les hommages du conseil municipal, M. Gay a remis au président un écrin contenant la médaille d'or grand module, destinée à commémorer la visite du chef d'État à l'Hôtel de Ville.",
      "En même temps, M. Gay a remis au président un étui contenant une feuille de parchemin pour la signature du livre d'or de la ville de Paris, ainsi qu'une longue dépêche du bourgmestre de Prague.",
      "Le président Kruger a vivement remercié M. Gay et a demandé de prier le conseil municipal et la population parisienne de soutenir de toutes leurs forces l'idée de l'arbitrage, car c'est en elle que les peuples boërs espèrent le plus."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Vie culturelle et mondaine",
    "title": "Au Pavillon du Creusot",
    "summary": "MM. Wessels, Fischer et Bredell ont visité le pavillon du Creusot à l'Exposition. Devant le modèle du canon « Long-Tom », les membres de la délégation boëre n'ont pu s'empêcher de manifester leur amusement.",
    "paragraphs": [
      "À la suite de cette cérémonie, MM. Wessels, Fischer et Bredell se sont rendus au pavillon du Creusot, à l'Exposition, sous la conduite du consul général de l'Orange à Paris et de l'administration du Creusot.",
      "En arrivant devant le modèle du fameux Long-Tom, MM. Bredell et Wessels ont éclaté de rire en reconnaissant la pièce d'acier."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Actualités diplomatiques",
    "title": "Visite du président Kruger au Luxembourg",
    "summary": "Le président Kruger a rendu une visite d'adieu au président du Sénat, M. Fallières, afin de le remercier pour la motion de sympathie votée par la chambre haute envers les Boërs.",
    "paragraphs": [
      "À une heure et demie, le président Kruger s'est rendu au palais du Luxembourg pour une visite d'adieu à M. Fallières, président du Sénat. Le Sénat avait voté une motion de sympathie et de respect en hommage aux héros du Transvaal.",
      "L'audience dura vingt minutes. M. van Hamel a transmis les remerciements du président des Républiques sud-africaines pour cet hommage."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Actualités diplomatiques",
    "title": "Visite du président Kruger à l'Élysée",
    "summary": "Le président Kruger a été reçu au palais de l'Élysée par le président Émile Loubet. Après un entretien dans le salon des Ambassadeurs, M. Loubet a rendu une visite de courtoisie au président Kruger à l'hôtel Scribe.",
    "paragraphs": [
      "À quatre heures, le président Kruger s'est rendu au palais de l'Élysée. Il a été reçu par M. Émile Loubet, en présence du général Dubois et de divers secrétaires.",
      "Les deux présidents se sont entretenus dans le grand salon des Ambassadeurs pendant environ un quart d'heure par l'intermédiaire de M. van Hamel. À quatre heures et demie, M. Émile Loubet s'est rendu à l'hôtel Scribe pour rendre sa visite au président Kruger."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Actualités diplomatiques",
    "title": "Visite du président Kruger au Palais-Bourbon",
    "summary": "Le président Kruger s'est rendu au Palais-Bourbon afin de remercier M. Paul Deschanel, président de la Chambre des députés, pour la motion de sympathie votée en faveur de la cause boëre.",
    "paragraphs": [
      "Le président Kruger s'est rendu au Palais-Bourbon pour remercier M. Paul Deschanel, président de la Chambre des députés, de la motion de sympathie votée par la Chambre.",
      "Les deux hommes se sont entretenus durant dix minutes en présence de MM. van Hamel, Bredell et Charrier."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Actualités",
    "title": "L'adieu aux Parisiens",
    "summary": "À la demande du président Kruger, des prières sont organisées au Sacré-Cœur pour les Boërs. La cloche de la Savoyarde sonnera aujourd'hui à 13h50 pour marquer symboliquement son départ de Paris.",
    "paragraphs": [
      "À la demande du président Kruger, des prières seront dites au Sacré-Cœur de Montmartre pour la cause des Boërs et en mémoire des combattants tombés au champ d'honneur.",
      "La cloche géante de Montmartre, la Savoyarde, sonnera aujourd'hui à une heure cinquante pour annoncer son départ aux Parisiens."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Délicate attention du président Kruger envers l'ingénieur du Creusot",
    "summary": "Touché par la blessure grave de l'ingénieur Sam Léon, qui dirigea l'artillerie boëre, le président Kruger a dépêché un émissaire à son chevet pour s'enquérir de sa santé.",
    "paragraphs": [
      "M. Sam Léon, l'ingénieur du Creusot qui dirigea l'artillerie des Boërs, a perdu l'œil droit suite à une blessure et subit une opération douloureuse.",
      "Mis au courant, le président Kruger a envoyé au chevet du blessé le secrétaire du docteur Leyds, M. Van den Hoeven, pour prendre des nouvelles."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Actualités internationales",
    "title": "La situation en Afrique du Sud et les opinions étrangères",
    "summary": "Alors que le Parlement hollandais débat de la conférence de la paix, la presse européenne suit avec attention les démarches du président Kruger et l'accueil chaleureux qui lui est réservé à Paris.",
    "paragraphs": [
      "Au Parlement hollandais, la Seconde Chambre a débattu de la conférence de la paix. La presse autrichienne, notamment le Neue Wiener Journal, estime que les efforts du président Kruger pour l'arbitrage ont des chances de succès.",
      "De son côté, le Deutsches Volksblatt souligne l'accueil sympathique reçu par le président à Paris."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Nouvelles du théâtre de la guerre",
    "summary": "La résistance boer s'intensifie avec la chute de Dewetsdorp. Tandis que Lord Roberts quitte le commandement au profit du général Kitchener, des affrontements sporadiques se poursuivent près de Krugersdorp.",
    "paragraphs": [
      "Les nouvelles du théâtre de la guerre deviennent de plus en plus mauvaises pour les Anglais. La capitulation de la garnison de Dewetsdorp et la prise de la ville par les Boërs prouvent la persistance de la résistance républicaine.",
      "Lord Roberts rentre en Europe, laissant le commandement au général Kitchener. Des combats sont signalés au nord de Krugersdorp et près de Pétrusville."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique intérieure",
    "title": "Séance du Sénat du 30 novembre 1900",
    "summary": "Sous la présidence de M. Fallières, le Sénat a voté une résolution de sympathie envers le président Kruger et a adopté des mesures d'ordre administratif pour les licences et l'enseignement.",
    "paragraphs": [
      "Le Sénat, sous la présidence de M. Fallières, a adopté à l'unanimité un projet de résolution adressant au président Kruger l'expression de sa respectueuse sympathie.",
      "Le Sénat a également adopté des mesures concernant l'exemption de timbre pour les licences municipales et la dispense de périodes militaires pour les membres de l'enseignement public."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique intérieure",
    "title": "Séance de la Chambre des députés du 30 novembre 1900",
    "summary": "La Chambre a débattu du budget de l'Agriculture et de la politique coloniale. M. Decrais a défendu l'action gouvernementale sur la mission Voulet-Chanoine et la gestion du général Galliéni.",
    "paragraphs": [
      "La Chambre a discuté le budget de l'Agriculture et les interpellations sur le drame de Zinder et la politique au Soudan.",
      "Le ministre des Colonies, M. Decrais, a justifié les actes du gouvernement concernant la mission Voulet-Chanoine et la mort du colonel Klobb, tout en défendant la gestion du général Galliéni à Madagascar."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident à Andertecht",
    "summary": "Le décès suspect de M. Demeysmaeker à Andertecht, faisant suite à des allégations d'empoisonnement, a conduit à l'ouverture d'une enquête judiciaire dont les résultats sont encore secrets.",
    "paragraphs": [
      "M. Demeysmaeker, habitant Andertecht, est décédé après des vomissements suspects. Avant de mourir, il a accusé une personne dénommée X de l'avoir empoisonné. L'autopsie a été pratiquée, mais les résultats sont tenus secrets."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Arts et Expositions",
    "title": "Salons et Expositions artistiques à Paris",
    "summary": "Deux expositions majeures marquent l'actualité artistique parisienne : le salon de l'Association syndicale des peintres et sculpteurs, rue Caumartin, et celui de l'Association mutuelle des femmes.",
    "paragraphs": [
      "À la galerie de la rue Caumartin, un vernissage réunissait les membres et les invités de l'Association syndicale professionnelle des peintres et sculpteurs français. Des portraits de MM. Dutiau et Berthon, la « Vérité » et « Son de la nuit », dernières œuvres du peintre Trottillon, de gracieuses compositions de M. Perendat de Bétem, des scènes algériennes de M. Dagnac-Rivière, des intérieurs de M. Jannet, des paysages de MM. Diva, Garand, Gaubert, Méry, des types rustiques très finement étudiés de M. Grettsamer, des vues de Paris de M. Kurt Cartier constituent les attractions de ce bon petit Salon.",
      "Dans la section de sculpture, mentionnons particulièrement la « Jeanne d'Arc » de M. Levasseur et le « Dernier Sommant de Waterloo » de M. Granet.",
      "Enfin, dans le hall de la Société de la Plume, rue Bonaparte, l'Association mutuelle des femmes de Paris ouvrait une exposition dont les tableaux les plus importants portent les signatures de Mmes Demont-Breton, Fleury, E. Maratier, Niny Adam, Galay et Camille Lambert."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Nécrologie",
    "title": "Mort d'Oscar Wilde",
    "summary": "L'écrivain Oscar Wilde, exilé sous le pseudonyme de Sébastien Melmoth, est décédé à Paris hier à l'âge de 46 ans des suites d'une méningite dans une chambre de la rue des Beaux-Arts.",
    "paragraphs": [
      "Oscar Wilde, l'écrivain anglais rendu célèbre par ses démêlés judiciaires dans son pays, s'est éteint hier à deux heures du matin, au 13 de la rue des Beaux-Arts, des suites d'une méningite.",
      "Il vivait en ces lieux sous le nom d'emprunt de Sébastien Melmoth."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Social",
    "title": "Grève des cochers de la Compagnie générale",
    "summary": "Les cochers de la Compagnie générale ont voté la grève à l'unanimité pour protester contre l'augmentation du tarif de la moyenne imposée par leur directeur, M. Bixio, malgré les protestations du personnel.",
    "paragraphs": [
      "Les cochers de la Compagnie générale ont tenu hier soir, sous la présidence de M. Houllet, une réunion afin d'aviser à la conduite à tenir vis-à-vis de M. Bixio, directeur de ladite Compagnie. Ce dernier s'est refusé à recevoir une délégation chargée de discuter de la fixation de la moyenne et, pour toute réponse, a augmenté ces jours-ci ledit tarif, alors que les autres compagnies n'ont pas pris cette mesure.",
      "La plupart des orateurs ont été unanimes à déclarer que les cochers de la Compagnie générale ne doivent pas payer une moyenne plus élevée que celle consentie par ceux de l'Urbaine, laquelle est actuellement fixée à 13 francs.",
      "À l'unanimité, les cochers ont voté la grève et se sont donné rendez-vous aujourd'hui, à deux heures, à la Bourse du travail.",
      "Dès que la grève a été votée, M. Lafont, délégué des cochers de l'Urbaine, est venu promettre le concours le plus absolu de ses camarades aux grévistes.",
      "Avant de se séparer, ces derniers ont décidé d'envoyer à M. Bixio la lettre suivante : « Monsieur, considérant que la moyenne que vous nous imposez est trop élevée, nous vous déclarons que demain ni lundi nous ne louerons de voitures jusqu'au jour où vous aurez reconnu notre droit de discuter cette location. »"
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Politique",
    "title": "L'Arbitrage et la Grève",
    "summary": "MM. Waldeck-Rousseau et Millerand présentent un projet de loi visant à rendre obligatoire l'arbitrage pour les conflits du travail, face au faible succès des procédures amiables actuelles.",
    "paragraphs": [
      "Nous avons déjà annoncé à nos lecteurs les détails du projet de loi, signé de MM. Waldeck-Rousseau et Millerand, visant le règlement amiable des différends relatifs aux conditions du travail. Ce dispositif, comme on le sait, organise une nouvelle procédure d'arbitrage en matière économique et réglemente l'exercice du droit de grève.",
      "La loi du 27 décembre 1892 a bien institué la conciliation et l'arbitrage en matière de différends collectifs entre patrons et ouvriers, mais le recours y est toujours facultatif. Dans l'ensemble, et depuis le 1er janvier 1894, il n'a été fait appel aux solutions arbitrales que 25 fois sur un total de 600 grèves. La moyenne n'excède donc pas 4 % des cas.",
      "Le texte proposé impose des engagements contractuels pour les entreprises de plus de cinquante ouvriers et prévoit des sanctions morales et civiles pour l'inexécution de la clause d'arbitrage."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Nouvelles militaires",
    "title": "Révision de l'histoire de la guerre franco-allemande",
    "summary": "Le ministre de la Guerre, le général André, fait préparer par l'état-major une relation officielle de la guerre de 1870 pour contester les récits allemands du maréchal de Moltke.",
    "paragraphs": [
      "La France militaire annonce que le ministre de la Guerre a pris le parti de faire réviser par l'état-major général de l'armée une relation officielle, basée sur des documents authentiques de la guerre franco-allemande, répondant point par point à l'histoire du grand état-major allemand publiée sous la direction du maréchal de Moltke, dont elle sera la contrepartie.",
      "À cet effet, le général André a fait appel aux officiers qui ont joué un rôle en 1870, et notamment aux généraux Harail, Billot, Saussier, Lewal, etc., ainsi qu'aux autres officiers ayant répondu aux sollicitations du ministre de la Guerre."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame de la rue de Rambouillet",
    "summary": "Une dispute entre deux racoleurs dans un bar de la rue de Rambouillet a dégénéré : l'un d'eux a blessé son rival à coups de marteau avant d'être arrêté par les consommateurs.",
    "paragraphs": [
      "Au cours de la nuit dernière, deux individus exerçant le métier de racoleurs dans les gares se prirent de querelle dans un bar de la rue de Rambouillet, au sujet d'un client. La dispute dégénéra bientôt en rixe et, soudain, celui qui se prétendait lésé, Léopold Decroise, âgé de vingt-quatre ans, s'arma d'un lourd marteau et en assena trois coups furieux sur le crâne de son adversaire, Louis Hotiot, qui poussa un cri et roula au milieu du débit, inondé de sang.",
      "C'est en vain que le meurtrier chercha à s'enfuir ; quelques consommateurs se jetèrent sur lui et le maîtrisèrent. Il a été mis à la disposition de M. Boutineau, commissaire de police, tandis que la victime a été transportée à l'hôpital Saint-Antoine."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Asphyxiés par le gaz d'éclairage",
    "summary": "Une famille de huit personnes a été victime d'une grave intoxication au gaz rue Saint-Placide, causée par une fuite survenue sous le sous-sol de l'immeuble. Une jeune femme a dû être transportée à l'hôpital.",
    "paragraphs": [
      "Dans la loge du concierge, au numéro 77 de la rue Saint-Placide, couchaient huit personnes : M. Haolot, sa femme, sa belle-mère et ses quatre enfants. La nuit dernière, tous ressentirent des malaises inquiétants.",
      "Le magistrat instructeur, M. Flory, a procédé à une enquête révélant que la famille Haolot a subi un empoisonnement par asphyxie suite à l'infiltration, depuis les conduites du trottoir, du gaz d'éclairage sous le sous-sol de la maison. Tous sont hors de danger, à l'exception d'une jeune fille de vingt-deux ans, transportée à l'hôpital."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de suicide d'une voleuse",
    "summary": "Venue interpeller une femme condamnée, la police a trouvé cette dernière inanimée dans son appartement de la rue de Tolnac après qu'elle eut absorbé une dose de poison pour échapper à son incarcération.",
    "paragraphs": [
      "Deux inspecteurs du service de la Sûreté se présentèrent, hier matin, au domicile de Mme Augustine P., rue de Tolnac, pour lui signifier l'exécution d'une peine d'emprisonnement prononcée contre elle.",
      "Mme P. refusa d'ouvrir aux inspecteurs. Lorsque le commissaire put pénétrer dans l'appartement, il la trouva étendue sans connaissance, après avoir avalé le contenu d'une fiole de poison. Elle a été immédiatement transportée à l'hôpital."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation de cambrioleurs",
    "summary": "Trois malfaiteurs transportant un volumineux panier contenant des objets volés dans une villa de Saint-Rémy-lès-Chevreuse ont été appréhendés rue Busséaut par les gardiens de la paix après une brève course-poursuite.",
    "paragraphs": [
      "Hier matin, les gardiens de la paix Brisset et Quayrat remarquèrent, rue Busséaut, trois individus mal vêtus, porteurs d'un volumineux panier. Après une courte poursuite, ils parvinrent à les appréhender.",
      "Il s'agit des nommés Adrien Leclerc, Julien Laporte et Albert Charuclan. Le panier contenait de l'argenterie, des pendules, des candélabres et du linge, reconnus comme ayant été dérobés la veille dans une villa à Saint-Rémy-lès-Chevreuse."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "La Bande du Point-du-Jour",
    "summary": "Le service de la Sûreté a démantelé la « bande du Point-du-Jour », un groupuscule criminel responsable d'une quarantaine d'agressions nocturnes, suite à l'agression violente d'un jeune homme avenue de Versailles.",
    "paragraphs": [
      "Le 12 novembre dernier, M. Raoul Milat, âgé de vingt-cinq ans, était agressé avenue de Versailles par une bande d'individus. Frappé d'un coup de couteau à la nuque, il porta plainte.",
      "Une surveillance minutieuse, organisée par le service de la Sûreté, a permis d'arrêter les agresseurs, membres de la « bande du Point-du-Jour », à laquelle sont imputables une quarantaine d'attaques nocturnes."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression rue de la Bâcherie",
    "summary": "Un ouvrier maçon a été pris à partie par quatre agresseurs rue de la Bâcherie. La police est parvenue à interpeller l'un des suspects, trouvé en possession d'un stylet.",
    "paragraphs": [
      "Un ouvrier maçon, Antoine Bertrand, a été agressé rue de la Bâcherie par quatre individus qui ont tenté de le dévaliser. Des agents en bourgeois ont arrêté l'un d'entre eux, Henri Lacroix, âgé de vingt-sept ans, trouvé porteur d'un stylet."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes avoisinantes",
    "summary": "Une série d'accidents tragiques et d'incidents marquants survenus à Bellevue, Colombes, Villeneuve-la-Garenne, Saint-Denis et Vincennes secoue la petite couronne parisienne.",
    "paragraphs": [
      "À Bellevue, Mme Louis Billon, blanchisseuse, s'est jetée par la fenêtre et s'est brisé le crâne.",
      "À Colombes, Mme veuve Lambert est tombée dans une carrière et s'est fracturé le crâne.",
      "À Villeneuve-la-Garenne, Alexis Tallier, tailleur de pierres, a été pris sous un bloc de pierre.",
      "À Saint-Denis, un accident dans une fabrique de feux d'artifice a grièvement brûlé Jean Velton, dont le mélange a pris feu violemment.",
      "À Vincennes, un bœuf échappé a blessé trois personnes, MM. Albarion, Lancier et Martin, avant d'être maîtrisé par un garçon boucher."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Les Tribunaux",
    "title": "L'Affaire Fayolle",
    "summary": "La cour ordonne une nouvelle contre-expertise sur les restes de Mme Fayolle afin d'établir si la présence de substances toxiques résulte d'un traitement médical ou d'un acte criminel.",
    "paragraphs": [
      "La cour a ordonné une nouvelle contre-expertise concernant le corps de Mme Fayolle pour déterminer si la présence d'arsenic et d'antimoine provient du traitement médical ou d'un acte criminel. L'affaire est renvoyée à une autre session."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Départements",
    "title": "Crime épouvantable à Saint-Laurent",
    "summary": "Découverte d'un crime odieux à Saint-Laurent : une adolescente de seize ans a été assassinée. Le suspect, le nommé Hédou, a été confronté au cadavre lors de son arrestation pour vol.",
    "paragraphs": [
      "La police a découvert à Saint-Laurent un crime épouvantable. Le 1er novembre, une jeune fille de seize ans a été violée, puis précipitée dans un lavoir. L'assassin, nommé Hédou, âgé de vingt-cinq ans, a été arrêté à la prison de Rennes pour vol et confronté au cadavre de sa victime."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Publicité",
    "title": "Goudron Guyot : Traitement des affections respiratoires",
    "summary": "Témoignage édifiant sur l'efficacité de la liqueur de Goudron Guyot contre les toux chroniques et les maux de saison, un remède accessible à tous.",
    "paragraphs": [
      "Je puis vous témoigner en toute constance que la liqueur de Goudron Guyot est réellement un remède efficace et agit vigoureusement contre les maux pour lesquels il est recommandé.",
      "Déjà depuis plusieurs années, je souffrais d'une toux chronique qui commençait régulièrement en automne. Après en avoir pris seulement un flacon, cette toux si violente avait entièrement disparu.",
      "Je puis certifier ce qui précède par serment. Signé Frantz Keruheim à Koss (Allemagne).",
      "Le traitement revient à 10 centimes par jour. Les personnes qui ne peuvent se faire au goût de l'eau de goudron pourront remplacer son usage par celui des Capsules Guyot."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les miettes du bonheur (XVIII - suite)",
    "summary": "La secrétaire de l'aliéniste s'empresse de transmettre par dépêche la nouvelle de la résignation morale d'Hélène à M. Vernier, malgré la fermeture prochaine des bureaux de poste.",
    "paragraphs": [
      "Une demi-heure après, la secrétaire de l'aliéniste courait au bureau de poste de Saint-Mandé. Sans perdre de temps, avant de regagner Paris où il devait dîner en joyeuse compagnie, il voulait prévenir M. Vernier de la résurrection morale d'Hélène.",
      "Ce fut en sifflotant un air en vogue qu'il rédigea sa dépêche. L'employé ajouta : « Le télégramme n'arrivera pas à destination ce soir, le bureau de là-bas sera fermé. Après sept heures, en province, les bureaux sont fermés. »",
      "Tant pis, murmura l'autre. Moi, j'ai averti tout de suite, c'est dans nos conventions, rien à dire."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les miettes du bonheur (XIX - L'Accident)",
    "summary": "Le maître de forges reçoit une dépêche confirmant le rétablissement de Mme Vernier. Loin de s'en réjouir, il est saisi d'une fureur noire et médite une vengeance implacable contre ceux qu'il jalouse.",
    "paragraphs": [
      "« Qu'y a-t-il, Mariette ? — Une dépêche qu'on apporte pour Monsieur. » Le maître de forges, assis devant la table de son cabinet de travail, se leva aussitôt comme mû par un ressort.",
      "André prit ce papier et le tint entre ses doigts qui tremblaient. Réussirait-elle ? La malheureuse créature recouvrerait-elle la raison ? Brusquement, il la décacheta et lut : « Réussite complète. Madame Vernier sauvée, ce matin même. »",
      "Il retomba dans son fauteuil, se prit la tête entre les mains. Oh, cette pensée ! Elle lui enfonça dans le cœur comme une pointe aiguë. Divorcerait-il ? Ils seraient trop heureux alors, les deux misérables. Non, pas de divorce. Alors, la vengeance. Oui. Une vengeance complète."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Informations Commerciales",
    "title": "Cours des Vins et Eaux-de-vie",
    "summary": "Bilan du marché viticole de fin novembre 1899 pour les régions de l'Hérault, du Gard, de l'Aude et du Bordelais, ainsi que les cours des eaux-de-vie en Armagnac.",
    "paragraphs": [
      "Dans l'Hérault, les vins passables se vendent bien. Dans le Gard, les vins aramons valent 1 franc. Dans l'Aude, les beaux vins valent 150 à 175 francs le degré.",
      "Dans le Bordelais, de nombreux premiers bourrus se tiennent à 500 francs en Médoc. Dans le Blayais, on a vendu de 170 à 190 francs le tonneau nu pour les vins rouges.",
      "EAUX-DE-VIE. En Armagnac, on a payé de 375 à 450 francs la pièce de 6 hectolitres."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Informations Commerciales",
    "title": "Bulletin commercial du 30 novembre",
    "summary": "État des cours des principales denrées alimentaires en date du 30 novembre, incluant les tarifs pour la farine, le seigle et l'huile de colza.",
    "paragraphs": [
      "Farine : Disponible 35,50 ; Courant 35,75 ; Décembre 35,50.",
      "Seigle : Disponible 18,25 ; Courant 18,50 ; Décembre 18,40.",
      "Huile de colza : Décembre 73,50."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Courrier Orphéonique",
    "title": "Activités musicales",
    "summary": "La société chorale des Inscrits est récompensée d'un prix d'honneur, tandis que le Choral d'Estavayer prépare les festivités de la Sainte-Cécile au Concert-Orient.",
    "paragraphs": [
      "La société des Inscrits a reçu un prix d'honneur de 300 francs. Le Choral d'Estavayer fêtera la Sainte-Cécile au Concert-Orient le 2 décembre."
    ]
  }
];
