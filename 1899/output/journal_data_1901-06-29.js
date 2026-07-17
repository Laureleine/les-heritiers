// Date: 1901-06-29
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-06-29 (Version Restaurée, 44 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La rue",
    "summary": "À l'approche des chaleurs estivales, cet éditorial interpelle l'administration parisienne sur l'insalubrité des voies publiques, dont la propreté est essentielle à la santé et au bien-être de tous les citoyens.",
    "paragraphs": [
      "Comme chaque année, au début des chaleurs, les préoccupations concernant la santé publique deviennent plus vives et les devoirs d'hygiène générale plus pressants. Aussi convient-il d'attirer l'attention de l'administration sur l'état des rues de Paris.",
      "La poussière parisienne, en effet, ne se compose pas seulement du sable soulevé par des millions de pieds, ni des fumées des foyers ; il s'y mêle aussi une quantité très considérable de crottin de cheval, ce qui ne surprend guère, quand on songe à la cavalerie énorme qui circule.",
      "Chez les nations du Nord, où les progrès de l'hygiène des rues sont plus sensibles que partout ailleurs, on trouve le long des voies fréquentées des boîtes en métal destinées à recevoir les immondices pendant toute la journée.",
      "Par essence, la rue appartient à la collectivité des citoyens. C'est la propriété commune de tous les habitants et il faudrait arriver à leur fournir là de l'air plus salubre que celui que nous respirons actuellement."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Roman",
    "title": "Les deux aimées",
    "summary": "Dans l'effervescence de la demeure des Baudreuil, le jeune marquis réitère sa soumission filiale à sa mère, tandis que celle-ci, anxieuse, s'apprête à lui confier un secret délicat.",
    "paragraphs": [
      "Les beaux yeux droits du jeune marquis rayonnèrent et, spontanément, il s'écria : « Oh ! vous pouvez y compter, mère chérie. Ce que vous me direz de faire, je le ferai absolument, complètement. »",
      "La comtesse se tut un instant, comme accablée sous le poids de toutes les émotions qui étaient en elle. Mais elle finit par parler de nouveau : « À présent, dit-elle, je dois toucher à un point très délicat. Me pardonneras-tu le mal que je vais peut-être te faire ? »",
      "De la base au faîte, la grande demeure des Baudreuil était pleine de mouvement et de bruit. C'étaient d'abord des ouvriers de toutes sortes, mettant la dernière main à leurs travaux, les tapissiers, les jardiniers, les fleuristes, et surtout les cuisiniers."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Chronique Politique",
    "title": "La loi sur les associations",
    "summary": "La Chambre a ratifié les modifications du Sénat sur la loi des associations. Ce texte marque un tournant historique en instaurant la liberté d'association sans autorisation préalable du gouvernement.",
    "paragraphs": [
      "La Chambre a adopté les modifications que le Sénat avait apportées à la loi sur les associations. La lutte, qui a été si vive, se trouve donc terminée et, quoi qu'en aient dit les adversaires de ce projet, la victoire appartient à l'idée de liberté.",
      "Pour la première fois, en France, les citoyens ont le droit de s'associer sans l'autorisation du gouvernement, et de s'unir dans une pensée commune, qu'il s'agisse d'un but quelconque, même religieux."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Social",
    "title": "Réservistes et territoriaux",
    "summary": "Alors que l'administration prépare les décorations du 14 juillet, un retour sur les attributions de l'an dernier permet aux nombreux candidats à la médaille militaire d'anticiper les conditions de sélection.",
    "paragraphs": [
      "Le ministre de la Guerre n'a pas encore fixé le nombre de croix de la Légion d'honneur et de médailles militaires qui seront décernées cette année dans l'armée de seconde et de troisième ligne à l'occasion de la fête nationale du 14 juillet.",
      "Pour donner un aliment à l'impatience légitime des nombreux candidats qui attendent l'une de ces récompenses, il n'est pas sans intérêt de rappeler dans quelles conditions elles ont été réparties et décernées l'année dernière."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Arts",
    "title": "Pour les artistes",
    "summary": "Alors que les Salons ferment leurs portes, une revendication légitime émerge : l'octroi d'une réduction de 50 % sur les chemins de fer pour les artistes, par analogie avec les congressistes.",
    "paragraphs": [
      "Les deux Salons vont bientôt clore leurs portes après avoir fait pendant deux mois la joie des uns et suscité la colère des autres. Il n'est donc point dénué d'actualité de réclamer pour les artistes la jouissance d'une de ces prérogatives si libéralement accordées aux membres des autres corps.",
      "Il s'agit, disons-le tout de go, des voyages en chemin de fer. Les membres des différents congrès qui se réunissent chaque année dans la capitale jouissent d'une faveur fort grande : une réduction de 50 % sur le tarif ordinaire."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "La question automobile",
    "summary": "Face aux dangers persistants sur la voie publique, le Président du Conseil annonce de nouvelles restrictions : les courses de vitesse en automobile seront désormais rigoureusement interdites.",
    "paragraphs": [
      "La question des automobiles, qui comprend surtout les devoirs des chauffeurs vis-à-vis du commun des mortels, existe depuis longtemps à l'état latent. Malgré les divers arrêtés très sages, le malaise subsiste.",
      "Le Président du Conseil a déclaré qu'à l'avenir, les routes, qui sont la propriété du public, ne serviraient plus de théâtre aux expériences des constructeurs d'automobiles. Aucune course à une vitesse supérieure à la vitesse ordinaire ne sera plus autorisée."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "International",
    "title": "La guerre au Transvaal",
    "summary": "Au Transvaal, la tension demeure vive. Un commando boër a attaqué Richmond, tandis que Lord Kitchener poursuit sa stratégie de déportation et d'internement forcé dans la région de Middleburg.",
    "paragraphs": [
      "Le Cap, 28 juin. Un commando boër d'environ 300 hommes, sous les ordres de Malan et de Smit, a attaqué mardi matin, à trois heures, la ville de Richmond.",
      "Middleburg, 28 juin. Lord Kitchener a fait le vide dans une vaste région au sud de Middleburg. Il a reçu la soumission de 20 Boërs, a fait 67 prisonniers et arraché à leurs fermes 500 femmes et enfants."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Politique",
    "title": "Le départ de Ranavalo",
    "summary": "Après un séjour d'un mois dans la capitale, l'ex-reine Ranavalo quitte Paris pour Arcachon. Avant son départ, elle a été reçue à l'Élysée par le Président de la République et Mme Loubet.",
    "paragraphs": [
      "L'ex-reine Ranavalo va nous quitter. Après un séjour d'un mois dans la capitale, elle va se rendre à Arcachon, où elle résidera quelques semaines, conformément au programme arrêté lorsque fut autorisé son voyage en France.",
      "À quatre heures et demie, Ranavalo se présentait à l'Élysée où elle a été reçue par le Président de la République et Mme Loubet."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le mort vivant",
    "summary": "Un événement singulier a secoué Iwuy : un homme déclaré mort après la découverte d'un cadavre dans l'Escaut, identifié à tort comme le sien, est réapparu sain et sauf après six mois d'absence.",
    "paragraphs": [
      "Un fait assurément peu banal vient de se produire à Iwuy, dans le département du Nord. Le 21 février dernier, on retirait de l'Escaut, à Denain, le cadavre d'un individu que l'on crut reconnaître pour être celui d'un nommé Augustin Larivière.",
      "Or, au grand étonnement de tous, M. Augustin Larivière vient de reparaître à Denain, après six mois d'absence."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'enfant du régiment",
    "summary": "Le bataillon d'infanterie coloniale de Lorient a adopté un jeune garçon de treize ans, Joseph Le Luc, remarqué pour son allant et sa situation familiale précaire.",
    "paragraphs": [
      "Le bataillon d'infanterie coloniale de Lorient vient d'adopter un petit soldat de treize ans nommé Joseph Le Luc, de Lanveur. Le brave petit garçon, dont les parents sont dans une situation précaire, avait été remarqué par les marsouins au cours de diverses manœuvres."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le dépeceur de femmes",
    "summary": "Au quatrième jour du procès de Richetto, la Cour d'assises du Rhône a entendu les experts. Après une mission en Italie, les docteurs Boyer et Rebatel concluent à l'absence de toute prédisposition héréditaire à la folie.",
    "paragraphs": [
      "Voici la quatrième journée de cette sensationnelle affaire devant la Cour d'assises du Rhône. Nous avons entendu aujourd'hui les experts qui ont été chargés d'examiner Richetto au point de vue mental.",
      "Le praticien Boyer est allé avec son collègue, M. Rebatel, en Italie, pour rechercher d'abord les antécédents héréditaires de l'accusé. Les docteurs n'ont pu constater chez Richetto aucune prédisposition à la folie, aucun stigmate."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le crime de la rue Zacharie",
    "summary": "La cour d'assises de la Seine a condamné hier le cuisinier Léon Damonta à cinq ans de travaux forcés. Il était accusé du meurtre de sa maîtresse, Maria Heusey, dont le corps fut trouvé carbonisé en novembre dernier.",
    "paragraphs": [
      "La cour d'assises de la Seine a condamné, hier, à cinq ans de travaux forcés, le cuisinier Léon Damonta, qui était accusé de coups et blessures volontaires sur sa maîtresse, Mlle Maria Heusey, ayant entraîné la mort, et d'incendie dans une maison habitée.",
      "Dans la nuit du 19 au 20 novembre dernier, des gardiens de la paix ont découvert le cadavre à moitié carbonisé de la fille Heusey dans son logement. Damonta, son amant, l'avait quittée peu avant le drame. L'accusation soutient qu'il a étranglé sa maîtresse, puis mis le feu pour masquer son crime."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Coup de couteau mortel",
    "summary": "Jean Espinous a été condamné à un an de prison par le tribunal pour avoir poignardé mortellement son ami, le nommé Cottet, à la suite d'une altercation violente survenue dans un bar de la rue Marie-Stuart.",
    "paragraphs": [
      "Jean Espinous a été condamné à un an de prison pour avoir porté un coup de couteau mortel à son ami Cottet lors d'une dispute dans un bar de la rue Marie-Stuart.",
      "Bien que le prévenu ait nié avoir frappé intentionnellement, le tribunal a tranché après la plaidoirie de M. Laulzenberg."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Chambre des Députés : Séance du vendredi 28 juin",
    "summary": "La Chambre des députés a adopté le projet de loi sur les associations par 313 voix. Les débats ont également porté sur les retraites ouvrières, l'incident de Milhau et la régulation des automobiles.",
    "paragraphs": [
      "La Chambre a voté à la majorité de 313 voix le projet de loi sur les associations, soutenu par M. Waldeck-Rousseau.",
      "La séance a été marquée par la discussion du projet sur les retraites ouvrières, où plusieurs amendements ont été repoussés ou réservés pour une discussion ultérieure.",
      "La Chambre a également abordé la question du drapeau national, suite à un incident à Milhau, et le gouvernement a annoncé des mesures contre l'abus de vitesse des automobiles lors des courses."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "Le projet de loi sur les associations",
    "summary": "La discussion sur la loi des associations reste houleuse. MM. Gayraud et de Mun dénoncent une mesure antireligieuse, tandis que M. Waldeck-Rousseau défend les modalités d'application du texte adopté par 313 voix.",
    "paragraphs": [
      "Lors de la discussion générale, M. Gayraud a vivement protesté contre la loi, la qualifiant de loi de combat contre l'Église catholique.",
      "M. de Mun a souligné que cette loi n'était que le début d'une guerre contre la religion. Le président du Conseil, M. Waldeck-Rousseau, a apporté des précisions sur les délais d'autorisation pour les congrégations.",
      "L'ensemble du projet de loi a été adopté par 313 voix."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Sénat",
    "title": "Séance du Sénat du vendredi 28 juin",
    "summary": "Le Sénat a poursuivi la discussion sur la suppression des octrois de Lyon, légiféré sur les cartes postales et statué sur les secours aux inondés de la Bièvre tout en fixant les conditions des jours fériés.",
    "paragraphs": [
      "Le Sénat a repris la discussion sur la suppression des octrois de Lyon et a adopté plusieurs articles du projet de loi.",
      "Il a également adopté des mesures concernant les cartes postales et rejeté un crédit pour les inondés de la Bièvre, tout en déclarant férié le lendemain de la Fête nationale sous certaines conditions."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Activités et endurance des troupes",
    "summary": "Le général Brugère inspectera les manœuvres d'artillerie au camp d'Avor, tandis que cinq marsouins s'illustrent par un exploit d'endurance remarquable avec équipement complet.",
    "paragraphs": [
      "Le général Brugère, vice-président du Conseil supérieur de la guerre, se rendra au camp d'Avor pour des manœuvres d'artillerie.",
      "Cinq marsouins ont démontré leur endurance en parcourant 158 kilomètres en trente-huit heures avec leur équipement complet."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Actualités internationales",
    "summary": "Les nouvelles internationales marquent le progrès technique à Londres, le congrès du Sokol à Prague, un drame judiciaire à Barcelone, un krach financier à Leipzig et des troubles électoraux au Chili.",
    "paragraphs": [
      "Londres : La construction d'un chemin de fer électrique sous le Solent est assurée.",
      "Prague : Vingt-huit gymnastes français ont été accueillis chaleureusement à l'occasion du congrès du Sokol.",
      "Barcelone : Un innocent, Silvestre-Louis Rorra, a été exécuté en 1896 pour un crime dont un autre individu, Florencio Rosich, vient de se déclarer l'auteur.",
      "Leipzig : Le docteur Gentysch, directeur de la Leipziger Bank, a été arrêté dans le cadre d'un krach financier.",
      "Chili : Des désordres lors des élections présidentielles ont fait plusieurs morts et blessés."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Conseil Municipal",
    "title": "Séance du Conseil municipal de Paris",
    "summary": "Le Conseil municipal de Paris valide les indemnités pour Carrières-sous-Poissy, vote 355 000 francs pour le 14 juillet et accorde des subventions aux régates internationales.",
    "paragraphs": [
      "Le Conseil a approuvé des transactions pour dommages à Carrières-sous-Poissy et a discuté des crédits pour l'organisation de la fête du 14 juillet, fixés à 355 000 francs.",
      "Des mesures ont également été votées concernant le Conservatoire des arts et métiers et des subventions pour des régates internationales."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident de tir à Nancy",
    "summary": "Un tragique accident est survenu au champ de tir de Bois-l'Évêque à Nancy, causant la mort du soldat Colle, atteint par une balle perdue alors qu'il observait les exercices.",
    "paragraphs": [
      "Un jeune soldat, nommé Colle, a été accidentellement tué d'une balle perdue au champ de tir de Bois-l'Évêque alors qu'il regardait par une lucarne."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Sports",
    "title": "Course automobile Paris-Berlin",
    "summary": "La première étape vers Aix-la-Chapelle consacre Fournier. Tandis que la course progresse vers Hanovre, le gouvernement s'émeut de la dangerosité des vitesses atteintes sur la voie publique.",
    "paragraphs": [
      "La première étape menant à Aix-la-Chapelle a vu Fournier arriver en tête. La course se poursuit vers Hanovre malgré des conditions météorologiques difficiles et de nombreux accidents signalés sur le parcours.",
      "Le gouvernement a annoncé son intention de ne plus autoriser de courses à des vitesses excessives après les récents accidents mortels qui ont endeuillé la compétition."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Sport",
    "title": "Course automobile Paris-Berlin",
    "summary": "La course Paris-Berlin gagne Hanovre sous l'enthousiasme populaire. Fournier maintient sa domination tandis que les concurrents, dont Mme du Gast et Maurice Farman, se préparent pour l'étape finale vers Berlin.",
    "paragraphs": [
      "Le classement des concurrents à différentes étapes a été établi, notamment à 8h47 pour Serpolet et 8h51 pour Mme du Gast, avec d'autres arrivées enregistrées à Düsseldorf et Munster.",
      "L'arrivée à Hanovre a été marquée par une foule enthousiaste et la victoire de Fournier, arrivé premier en trombe. D'autres concurrents illustres, tels que René de Knyff, Antony et Maurice Farman, ont suivi de près.",
      "Maurice Farman a télégraphié pour souligner la réception brillante réservée aux coureurs à Hanovre, tout en précisant que la présence de l'Empereur à l'arrivée n'est pas encore certaine.",
      "La troisième étape, reliant Hanovre à Berlin, représente un défi majeur en raison des dunes de sable et de l'épuisement croissant des conducteurs.",
      "À Berlin, l'intérêt est général. Les préparatifs battent leur plein, notamment à l'hôtel de l'Automobile-Club allemand et dans les installations des tramways de l'Ouest, en vue d'une réception mémorable."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'assassinat sous un tunnel",
    "summary": "Le juge d'instruction M. Pasques a confronté Jules Denis et le suspect Dussolier. Malgré les témoignages de Denis sur des menaces antérieures, Dussolier persiste dans un silence complet.",
    "paragraphs": [
      "Le juge d'instruction, M. Pasques, a confronté Jules Denis, actuellement détenu à la prison de Poissy, avec le nommé Dussolier, accusé d'avoir assassiné Mlle Pous à l'intérieur d'un tunnel.",
      "Jules Denis a rapporté une conversation tenue en prison avec sa mère, mentionnant une déclaration menaçante que Dussolier aurait proférée à l'encontre de la victime dix-huit mois auparavant.",
      "Dussolier a nié formellement les faits, traitant Denis de menteur et se murant, pour le reste de la séance, dans le silence le plus complet."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un drame rue de Belleville",
    "summary": "Un drame conjugal a ensanglanté la rue de Belleville. Henri Moyen a grièvement blessé son épouse de deux coups de revolver avant de retourner l'arme contre lui-même.",
    "paragraphs": [
      "Henri Moyen, âgé de 56 ans, a tiré deux coups de revolver sur sa femme, la blessant grièvement à l'épaule et à l'oreille, avant de se suicider sur les lieux.",
      "Les secours ont rapidement transporté la blessée à l'hôpital Tenon, où son état n'est, pour l'heure, pas jugé désespéré. Le commissaire Girard a procédé au constat du décès de l'agresseur."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "La jeune fille folle",
    "summary": "Une adolescente de 16 ans a alerté la police en inventant le meurtre imaginaire de son frère. L'enquête révèle une aliénation mentale nourrie par la lecture de faits divers sensationnalistes.",
    "paragraphs": [
      "Louise Couturier, âgée de 16 ans, s'est présentée au commissariat affirmant que son frère avait été séquestré puis égorgé par ses propres parents.",
      "L'enquête a rapidement révélé que la jeune fille n'avait aucun frère et qu'elle souffrait d'aliénation mentale, influencée par les récits de séquestration lus dans les colonnes de la presse."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Roman",
    "title": "Le Secret du bonheur - Feuilleton",
    "summary": "Odette et Darrans engagent une conversation mélancolique sur les conventions sociales, le poids des souvenirs et la nécessité de s'affranchir d'un passé oppressant pour vivre leur amour.",
    "paragraphs": [
      "Le dialogue s'engage entre Odette et Darrans. Ils évoquent la nature profonde de leur relation, le poids écrasant des conventions sociales et les souvenirs littéraires qui hantent leurs esprits.",
      "Darrans insiste avec véhémence sur la réalité de leur sentiment. Il rejette les faux-semblants de la société et cherche à convaincre Odette de s'affranchir enfin de son passé et de son mystérieux maître."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un voleur",
    "summary": "Le livreur Jean-Baptiste Perrier s'est fait dérober sa charrette rue Étienne-Dolet. Grâce à l'intervention rapide d'un cycliste et de la police, le malfaiteur Louis Vechtor a été arrêté.",
    "paragraphs": [
      "Jean-Baptiste Perrier, livreur de son état, a été victime du vol de sa charrette alors qu'il effectuait une livraison rue Étienne-Dolet.",
      "Grâce à l'assistance prompte d'un cycliste et des agents de la force publique, le voleur, identifié comme étant Louis Vechtor, un repris de justice récemment sorti de prison, a été appréhendé et conduit au Dépôt."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Chroniques d'accidents et faits divers en banlieue",
    "summary": "Une série d'accidents tragiques et de faits criminels endeuille la banlieue parisienne, incluant noyades, suicides, incendies et accidents du travail.",
    "paragraphs": [
      "À Asnières, une instruction judiciaire est ouverte concernant l'état de santé précaire d'un enfant de trois ans, René L., victime de la négligence de sa mère.",
      "À Puteaux, le cultivateur Henri Lizeray a trouvé la mort après avoir été broyé sous les roues de sa voiture de fourrages.",
      "À Clichy, un journalier nommé Anselme Guillau a été surpris en flagrant délit de vol de 250 francs dans une usine locale.",
      "À Colombes, le garçon coiffeur Georges Perrier a mis fin à ses jours, désespéré par un chagrin d'amour.",
      "À Nanterre, le corps du charpentier Jean Vaindaux a été découvert au fond d'une carrière, les deux jambes brisées.",
      "À Aubervilliers, un jeune ouvrier nommé Christophe s'est noyé dans les eaux du canal Saint-Denis, malgré les tentatives de sauvetage héroïques de Gaston Duchauffour.",
      "À Saint-Denis, Gaston Lejosne, âgé de 18 ans, a été grièvement blessé par des cylindres en mouvement au sein d'une usine.",
      "À Saint-Mandé, le facteur Auguste Mathé, après avoir commis un faux pour dissimuler un vol, a tenté de se suicider par noyade.",
      "À Villeneuve-Saint-Georges, Mme Richeton a succombé à une insolation alors qu'elle effectuait sa lessive.",
      "À Meudon, Alexandre Duval a été violemment agressé par des individus qui lui ont dérobé ses provisions.",
      "À Clamart, la jeune bonne Marie Habrias a péri brûlée à la suite d'un tragique accident domestique impliquant de l'essence.",
      "À Versailles, le jeune Édouard Declercq a trouvé la mort par noyade dans la Marne.",
      "À Étampes, la boulangerie Pannetier a été entièrement détruite par un incendie."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Nouvelles des départements",
    "summary": "Les chroniques de province rapportent des drames locaux, notamment un suicide à Clermont, un accident mortel à Beauvais et la fuite d'un notaire à Dreux après des détournements.",
    "paragraphs": [
      "À Clermont, M. Léon Lallouette a mis fin à ses jours par pendaison.",
      "À Beauvais, le jeune Léon Morin est décédé des suites de graves brûlures causées par des allumettes.",
      "À Dreux, le notaire nommé Appès a pris la fuite après avoir détourné les fonds déposés par ses clients.",
      "À Auxerre, Mme veuve Jean-Baptiste Carles a légué la somme de 50 000 francs à l'hospice local, assortie de fonds destinés à récompenser le mérite au sein de sa commune natale."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Escroqueries à la banlieue ouest",
    "summary": "Une mystérieuse quinquagénaire dépouille les domestiques de la banlieue ouest en se faisant passer pour une marchande de thé promettant de révéler des trésors cachés.",
    "paragraphs": [
      "Une femme d'une cinquantaine d'années, se faisant passer pour une marchande de thé, dérobe bijoux et argent aux bonnes de la banlieue ouest sous le prétexte fallacieux de révéler des trésors cachés.",
      "Mlle Jeanne Besse, résidant à Asnières, a été la dernière victime de cette escroqueuse, actuellement activement recherchée par les autorités policières."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Théâtre",
    "title": "Courrier des théâtres",
    "summary": "Le théâtre des Variétés engage Mlle Jane Yvon. La Société des concerts classiques lutte contre la chanson vulgaire, tandis que Mme Sybil Sanderson soutient généreusement les employés de l'Opéra-Comique.",
    "paragraphs": [
      "Le théâtre des Variétés annonce l'engagement de Mlle Jane Yvon. Par ailleurs, une lutte est engagée contre la chanson vulgaire sous l'impulsion de la Société des concerts classiques de la chanson, qui œuvre pour un répertoire plus exigeant.",
      "Les résultats des concours du Conservatoire sont désormais connus, parallèlement aux activités de la Société d'histoire du théâtre qui poursuit ses travaux de recherche.",
      "Mme Sybil Sanderson a fait preuve d'une grande générosité en offrant des dons substantiels destinés à améliorer le sort des employés de l'Opéra-Comique."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Divertissements",
    "title": "Concerts et spectacles",
    "summary": "Le Parisiana rehausse la qualité de ses programmes avec 'Le Papa de Francine', tandis que le cirque Medrano remporte un vif succès grâce à ses nouveaux numéros acrobatiques.",
    "paragraphs": [
      "La direction du Parisiana propose actuellement 'Le Papa de Francine', interprété par une troupe de premier ordre, marquant une volonté manifeste d'élever le niveau artistique du café-concert parisien.",
      "De son côté, le cirque Medrano rencontre un vif succès auprès du public grâce à la présentation de ses nouveaux numéros acrobatiques, qui font preuve d'une maîtrise technique remarquable."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Sport",
    "title": "Résultats hippiques et courses",
    "summary": "Les hippodromes sont à l'honneur : les pronostics s'animent pour Saint-Cloud, et le jockey Mac Intyre s'est distingué à Maisons-Laffitte par trois victoires éclatantes.",
    "paragraphs": [
      "Les turfistes se tournent vers les prochaines épreuves de trot organisées à l'hippodrome de Saint-Cloud, dont les pronostics commencent déjà à agiter les cercles spécialisés.",
      "Les courses qui se sont déroulées à Maisons-Laffitte ont été marquées par la performance exceptionnelle du jockey Mac Intyre, qui s'est illustré en remportant trois victoires éclatantes au cours de la journée."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Finance",
    "title": "Bulletin financier",
    "summary": "Le marché boursier connaît une embellie notable, stimulée par une reprise des transactions au comptant et une hausse marquée des valeurs de traction, signe d'une confiance retrouvée.",
    "paragraphs": [
      "Les tendances boursières s'orientent vers une amélioration notable, portée par une reprise soutenue sur le marché au comptant. Les valeurs de traction, notamment, affichent des cours en progression, confirmant le regain de confiance des investisseurs."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Courrier orphéonique",
    "title": "Festival à Berriap",
    "summary": "La ville de Berriap annonce un grand festival-concours de musique pour le 7 juillet, doté de 1 500 francs de prix. Les inscriptions sont ouvertes auprès de M. A. Celos.",
    "paragraphs": [
      "À l'occasion de sa fête patronale, la ville de Berriap, dans l'Eure, organise un festival-concours de sociétés chorales, musiques d'harmonie, fanfares, trompettes et trompes de chasse qui se tiendra le 7 juillet prochain. L'épreuve comportera trois volets : un concours de lecture à vue obligatoire, un concours d'exécution avec deux morceaux au choix, et un concours d'honneur avec un morceau imposé.",
      "Une somme de 1 500 francs en espèces sera distribuée en primes. Le règlement détaillé est désormais publié ; les sociétés intéressées peuvent adresser leurs adhésions jusqu'au 30 juin à M. A. Celos, secrétaire général du concours."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Courrier orphéonique",
    "title": "Concours à Chartres",
    "summary": "L'Harmonie Chartraine convie les sociétés musicales à un concours le 21 juillet, structuré en trois épreuves exigeantes : lecture à vue, exécution au choix et un concours d'honneur final.",
    "paragraphs": [
      "Un concours d'orphéons, musiques d'harmonie et fanfares est organisé à Chartres par l'Harmonie Chartraine. Il aura lieu le 21 juillet et comportera trois épreuves : lecture à vue obligatoire, exécution d'un morceau au choix et un concours d'honneur réservé aux sociétés ayant obtenu un premier prix en lecture à vue ou en exécution.",
      "Les adhésions doivent être adressées à M. Godeau, secrétaire du comité, rue du Grand-Faubourg."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Courrier orphéonique",
    "title": "Concours à Vouvray",
    "summary": "La ville de Vouvray organise un concours-festival de sociétés instrumentales réservé aux groupes du département, prévu pour le dimanche 11 août avec deux épreuves de sélection.",
    "paragraphs": [
      "La ville de Vouvray (Indre-et-Loire), avec le concours de la musique locale, organise pour le dimanche 11 août un concours-festival de sociétés instrumentales, strictement réservé aux sociétés du département.",
      "Il n'y aura que deux épreuves : l'une d'exécution, avec un morceau au choix, et l'autre d'honneur, destinée aux premiers prix d'exécution. Les adhésions sont à envoyer à M. Carré, secrétaire du concours."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Courrier orphéonique",
    "title": "Concours international à Bône",
    "summary": "Un grand concours international de musique se tiendra à Bône, en Algérie, les 30 et 31 mars prochains, offrant aux participants des récompenses variées et une dotation de 2.000 francs de primes.",
    "paragraphs": [
      "Un grand concours international de musique, regroupant orphéons, harmonies et fanfares, organisé sous les auspices de la municipalité, aura lieu à Bône (Algérie) les 30 et 31 mars.",
      "Indépendamment des récompenses, palmes, objets d'art et médailles, 2.000 francs de primes en espèces seront décernés aux lauréats."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Courrier orphéonique",
    "title": "Concours de Miliana",
    "summary": "La société des sapeurs-pompiers de Miliana, en Algérie, annonce l'organisation d'un concours musical les 8 et 9 septembre prochain, doté d'une prime de 500 francs.",
    "paragraphs": [
      "La société des sapeurs-pompiers de Miliana (Algérie) organise un concours musical fixé aux 8 et 9 septembre prochain ; une dotation de 500 francs sera répartie entre les prix. Les adhésions sont reçues par le comité d'organisation."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Courrier orphéonique",
    "title": "Projet de concours à Tunis",
    "summary": "Un projet de grand concours musical est à l'étude à Tunis pour accompagner le concours agricole, sous la direction de MM. Bousi et Raymond Valensi.",
    "paragraphs": [
      "Il est question d'ouvrir un grand concours musical à Tunis, à l'occasion du concours agricole ; le projet est actuellement étudié par MM. Bousi, président de l'Harmonie Française, et Raymond Valensi, président de la Chorale de Tunis."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Courrier orphéonique",
    "title": "Concours à Arcueil-Cachan",
    "summary": "Le règlement du concours musical d'Arcueil-Cachan du 15 juillet est publié. Il prévoit trois épreuves : lecture à vue, morceau imposé et honneur. Inscriptions jusqu'au 1er août auprès de M. Louis Veyssière.",
    "paragraphs": [
      "Le règlement du concours qui aura lieu à Arcueil-Cachan (Seine) le 15 juillet prochain est publié. Trois épreuves y figurent : lecture à vue obligatoire, exécution d'un morceau imposé, et une épreuve d'honneur réservée aux sociétés ayant obtenu un premier prix dans l'une des deux précédentes.",
      "Adresser les adhésions, avant le 1er août, à M. Louis Veyssière, secrétaire du comité, 21, rue Émile-Raspail."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Marché aux bestiaux",
    "title": "Marché aux veaux de La Villette",
    "summary": "Compte-rendu du marché aux veaux de La Villette du 28 juin. L'activité commerciale demeure calme avec des cours stables, variant selon les provenances régionales et la qualité des bêtes.",
    "paragraphs": [
      "La Villette, vendredi 28 juin. Veaux amenés et vendus. Vente calme et cours stationnaires.",
      "Les veaux de choix de Seine-et-Marne, de l'Eure, de Seine-et-Oise, d'Eure-et-Loir et du Loiret se sont détaillés de 1 fr. 05 à 1 fr. 10 et, en bande, ont obtenu de 1 fr. à 1 fr. 05.",
      "Les champenois se sont vendus de 0 fr. 90 à 1 fr. en bande et jusqu'au détail ; les flamands de 0 fr. 90 à 1 fr. ; les gournayeux et les manceaux de 0 fr. 85 à 0 fr. 95 ; les autres provenances de 0 fr. 70 à 0 fr. 85, le tout par kilo de viande nette."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Informations agricoles",
    "title": "Bulletin des vins et récoltes",
    "summary": "État des récoltes au 28 juin 1899. La situation viticole est globalement satisfaisante malgré quelques cas de coulure. La récolte des fruits à cidre s'annonce moyenne à bonne selon les régions.",
    "paragraphs": [
      "VINS. La floraison est terminée et on commence à apprécier l'état de la future récolte. Dans le Midi et le Roussillon, la récolte promet d'être bonne ; dans le Languedoc, il y a un peu moins de raisins que l'an dernier ; il en est de même dans la Gascogne ; dans l'Armagnac, la situation est satisfaisante ; dans la Gironde, il y a eu de la coulure, néanmoins les apparences sont normales ; dans les Charentes, le Poitou et la Vendée, il y a beaucoup de raisins ; dans le Nantais, la récolte est présente ; la préparation est belle dans l'Anjou ; dans l'Indre-et-Loire, l'Orléanais, le Cher et le Loir-et-Cher, la vigne est bien fournie en grappes ; dans l'Île-de-France, il y a grande abondance ; en Champagne, les raisins sont beaux et fournis ; en Lorraine, la récolte sera moyenne ; en Franche-Comté, les vignes sont bien garnies ; en Basse-Bourgogne et en Bourgogne, il y a abondance, surtout sur les gamays ; en Beaujolais-Mâconnais, les vignes sont bien préparées et promettent beaucoup ; dans l'Allier, il y a autant de fruits que l'an dernier ; dans la Nièvre un peu moins ; en Auvergne, la vigne est assez chargée ; dans la Savoie, il y a beaucoup de raisins ; en Provence, une belle récolte moyenne est en perspective.",
      "POMMES A CIDRE. Dans la Seine-Inférieure, on compte sur une bonne demi-année de pommes. Il y a beaucoup de poires. En pays d'Auge, la floraison s'est ressentie de la très grande production de l'année dernière. On suppose que la récolte sera moyenne. Dans l'Orne, les pommiers qui n'ont rien produit l'an dernier ont fleuri plus tôt et mieux. Dans la Manche, la récolte sera bonne. Dans la Mayenne, la production sera irrégulière. Dans le Finistère, la situation est assez satisfaisante ; dans le Morbihan, la récolte sera moyenne ; dans la Loire-Inférieure, la récolte paraît devoir être abondante."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Chemins de fer",
    "title": "Améliorations sur la ligne de Trouville",
    "summary": "La Compagnie de l'Ouest accélère ses services vers Trouville et Caen dès le 1er juillet. Les horaires des trains 52 et 12 sont optimisés, et les voyageurs de 1re classe sont admis dans l'express du matin.",
    "paragraphs": [
      "En vue d'améliorer le service sur la ligne de Trouville, très fréquentée par les touristes pendant la saison d'été, la Compagnie de l'Ouest va accélérer, à partir du 1er juillet prochain, la marche du train n° 52. Son heure de départ de Trouville sera retardée de 21 minutes (7 h 53 au lieu de 7 h 32) pour une arrivée à Paris-Saint-Lazare à 10 h 45.",
      "La marche du train n° 12, partant de Caen à 10 h 10 pour arriver à Paris à midi 25, sera également accélérée de 15 minutes. En outre, les voyageurs de 1re classe seront admis par le train express n° 11, partant de Paris à 8 h 45 du matin, pour les destinations au-delà de Lisieux, et pour Trouville en particulier."
    ]
  }
];
