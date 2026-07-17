// Date: 1900-08-26
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-08-26 (Version Restaurée, 47 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "La République de Freeville",
    "summary": "Au cœur de l'État de New-York, la République de Freeville constitue une expérience politique unique où 86 jeunes citoyens gèrent, avec discipline et liberté, leurs propres institutions et services.",
    "paragraphs": [
      "Des faits en apparence les plus futiles se dégagent parfois les plus fermes leçons. C'est le cas ou jamais de le penser en présence de cette République américaine d'enfants dont jadis j'ai raconté la naissance.",
      "Il ne s'agit pas d'une ingénieuse récréation, ni même d'une expérience éphémère. C'est véritablement un État constitué que cette République de Freeville, avec son gouvernement, ses institutions et ses services.",
      "La République de Freeville est située dans l'État de New-York. Son territoire est de quarante hectares. Les citoyens sont au nombre de 86, âgés de douze à dix-huit ans.",
      "L'idée germa dans l'esprit de sir William George, citoyen de New-York, au spectacle des nombreux petits vagabonds rôdant dans les rues de la capitale.",
      "L'État ne perçoit pas d'impôts. Son trésor est alimenté par la location d'un grand hôtel où logent la plupart des citoyens. Quelques orages ont traversé l'existence de Freeville, mais cette discipline imposée aux enfants dévoyés prouve le parti qu'il y a à tirer de la liberté et du sens des devoirs."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Autour d'un berceau",
    "summary": "Dans le secret d'une mansarde, une jeune femme sauvée par Henri Lipray se rétablit. Ce dernier, en partance pour Larignies, nourrit l'espoir noble de réconcilier son père et sa mère.",
    "paragraphs": [
      "C'était dans une mansarde, sous les toits, que reposait sur un lit tout blanc une jeune fille. Cette jeune fille était l'infortunée qu'il avait sauvée l'avant-veille.",
      "Le docteur Lorillot dit qu'il comptait voir son jeune confrère expérimenter lui-même son sérum le lendemain, mais celui-ci annonça son départ.",
      "Le soir de ce même jour, Henri Lipray, en costume de voyage, était auprès de sa mère. Le jeune homme tenait dans les siennes les mains de la vieille dame. Il voulait aller voir son père, le docteur Lipray, pour obtenir son pardon et le réconcilier avec sa mère.",
      "L'express, toute la nuit, emporta Henri Lipray vers le coin de terre où son père était allé se cacher. Il arriva le lendemain matin à Larignies pour mener à bien son entreprise de réconciliation."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Mouvement Judiciaire",
    "title": "Nominations judiciaires",
    "summary": "Publication des récentes nominations et mutations au sein de la magistrature, touchant les tribunaux de Dijon, Beaune, Semur, Bourg, Roanne, Rocroi, Montmédy, Briey et Tonnerre.",
    "paragraphs": [
      "Sont nommés : Conseiller à la cour d'appel de Dijon, M. Lemare, président du tribunal de Beaune. Président du tribunal de Beaune, M. Lamarche, juge à Semur. Juge au tribunal de Semur, M. Figarède.",
      "Conseiller à la cour d'appel de Dijon, M. Lemaire, président du tribunal de Bourg. Président du tribunal de Bourg, M. Berriat. Juge d'instruction à Roanne, M. Authier.",
      "Président du tribunal de Rocroi, M. Gruzelle. Juge d'instruction à Montmédy, M. Bruneau. Juge d'instruction à Briey, M. Pavin de Courteville. Président du tribunal de Tonnerre, M. Lévy."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "La Mission Foureau-Lamy",
    "summary": "De retour à Brazzaville après le combat contre Rabah, M. Foureau rend un vibrant hommage à son compagnon d'armes, le commandant Lamy, tout en préparant son prochain retour en France.",
    "paragraphs": [
      "On nous communique des détails sur le séjour de M. Foureau à Brazzaville. Après le combat contre les bandes de Rabah, M. Foureau a appris la mort héroïque de son compagnon, le commandant Lamy.",
      "M. Foureau partira dans quelques jours par un bateau anversois. C'est un homme qui ne boit que de l'eau et du café et peut rester plusieurs jours sans manger, une habitude contractée au désert."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "À Madagascar",
    "summary": "Une enquête administrative est ouverte à Madagascar suite à l'assassinat de Ralaimandiny, sous-gouverneur hova, suspecté d'avoir multiplié les exactions envers ses administrés au sud d'Antanambas.",
    "paragraphs": [
      "Les dernières nouvelles de Madagascar nous apprennent l'assassinat d'un fonctionnaire indigène, nommé Ralaimandiny, sous-gouverneur hova du secteur sud d'Antanambas.",
      "Une enquête a été ouverte; elle semble établir que Ralaimandiny s'était rendu coupable de nombreuses exactions commises envers ses administrés."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "La jalousie d'un vieillard",
    "summary": "Un drame conjugal s'est produit à Maisons-Laffitte : Muret, un ouvrier terrassier de soixante-quatre ans, a sauvagement assassiné sa jeune maîtresse de dix-neuf ans, Georgette Brunet, avant de se donner la mort.",
    "paragraphs": [
      "Un terrible drame s'est déroulé hier matin à Maisons-Laffitte. Un ouvrier terrassier, nommé Muret, âgé de soixante-quatre ans, a assommé à coups de pioche sa jeune maîtresse, Georgette Brunet, âgée de dix-neuf ans.",
      "Son crime accompli, Muret se fit justice lui-même en se supprimant. Le magistrat n'a pas eu besoin de se transporter sur les lieux, l'action publique étant éteinte par le suicide de l'assassin."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Guerre au Transvaal",
    "title": "Exécution du lieutenant Cordua",
    "summary": "Le lieutenant Cordua, condamné à Pretoria pour sa participation à un complot britannique fomenté par un policier, a été exécuté. Il a fait preuve d'un grand courage face au peloton avant d'être inhumé sur place.",
    "paragraphs": [
      "Le lieutenant Cordua, condamné par le conseil de guerre siégeant à Pretoria, vient de payer de sa vie sa participation à un complot imaginé par un policier aux gages de l'Angleterre.",
      "Cordua est mort avec un grand courage. Il a été frappé de dix balles et enterré dans le jardin de la prison."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Guerre au Transvaal",
    "title": "Dépêches de Lord Roberts",
    "summary": "Les forces britanniques progressent au Transvaal avec l'occupation de Belfast. Malgré l'avancée de Lord Roberts et de Buller, la résistance boer reste vive, causant de lourdes pertes au régiment de Liverpool.",
    "paragraphs": [
      "Lord Roberts télégraphie de Wonderfontein qu'il a reçu un télégramme de Pole Carew informant de l'occupation de Belfast. La colonne de Buller progresse également dans la région.",
      "Les Boers font face de tous côtés à leurs adversaires et ont infligé des pertes sérieuses à deux compagnies du régiment de Liverpool à la suite d'une embuscade."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Obsèques de Mme Didier",
    "summary": "Les obsèques de Mme Didier, décédée des suites de l'accident du boulevard de Latour-Maubourg, ont eu lieu hier aux Blancs-Manteaux, suivies d'une inhumation au cimetière de Saint-Ouen.",
    "paragraphs": [
      "Les obsèques de Mme Didier, victime de l'accident survenu boulevard de Latour-Maubourg, ont eu lieu hier après-midi. Le deuil était conduit par son mari, grièvement blessé lors du même événement.",
      "La cérémonie s'est tenue aux Blancs-Manteaux et l'inhumation a eu lieu au cimetière de Saint-Ouen, dans une concession payée par la préfecture de police."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'attentat contre le Shah",
    "summary": "Saison, l'auteur de l'attentat contre le Shah, a été entendu par le juge d'instruction. En raison de doutes sur sa santé mentale, une expertise médicale a été ordonnée. Le détenu a refusé les secours de l'aumônier.",
    "paragraphs": [
      "Saison, l'auteur de l'attentat contre le Shah, a été interrogé. Il a insisté sur la question de son état mental. Le juge d'instruction a désigné trois médecins pour examiner le détenu.",
      "Saison a refusé de recevoir la visite de l'aumônier à la prison de la Santé."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Actualité Internationale",
    "title": "Les événements de Chine",
    "summary": "L'armée internationale a pris le contrôle de Pékin après avoir dispersé les forces chinoises. Tandis que la famille impériale a fui vers Si-Ngan-Fou, les Alliés stationnent désormais autour du palais impérial.",
    "paragraphs": [
      "L'armée internationale exécute en ce moment des reconnaissances autour de Pékin afin de disperser les troupes chinoises. La ville est désormais entièrement occupée par les troupes alliées.",
      "Le général Frey a rejoint les troupes alliées le 20 août. La famille impériale, quant à elle, s'est réfugiée à Si-Ngan-Fou. Les forces alliées sont cantonnées autour du palais impérial."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "International",
    "title": "Le trésor impérial de Pékin",
    "summary": "À Pékin, le pillage systématique se poursuit hors de la Cité sacrée, respectée par accord. Les drapeaux français et russe marquent l'emplacement du trésor, alors que le gouvernement impérial a cessé d'exister.",
    "paragraphs": [
      "On télégraphie de Pékin au Times, en date du 14 août : Les drapeaux russe et français flottent sur la partie la plus importante du domaine impérial, celle où l'on croit que le trésor impérial est enterré. La Cité sacrée, à la suite d'un accord international, est respectée ; mais, ailleurs, on procède à un pillage systématique. Les Japonais ont saisi un trésor s'élevant, dit-on, à cinq millions en argent.",
      "L'empereur, l'impératrice douairière et le prince Tuan se sont enfuis à Taï-Yuen-Fou dans le Chan-Si, d'où ils se rendront à Si-Ngan-Fou. Il n'y a plus de gouvernement.",
      "Le Times, dans un article sur la situation à Pékin, pense que si les drapeaux français et russe flottent sur la partie de la ville sacrée où le trésor impérial est enterré, c'est par mesure de précaution et dans l'intérêt de toutes les puissances, y compris l'Allemagne, qui n'était pas représentée à la prise de Pékin ni dans les arrangements provisoires pris pour l'administration de la capitale."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "International",
    "title": "Le siège des légations à Pékin",
    "summary": "Après deux mois d'un siège éprouvant sous un feu incessant et un rationnement sévère, les légations étrangères ont été secourues par les troupes alliées malgré les dernières attaques chinoises.",
    "paragraphs": [
      "Pékin, 14 août (via Ché-Fou, 23 août) : La colonne de secours est arrivée ici à temps, car nous étions presque épuisés après plusieurs nuits durant lesquelles nous avions été exposés à la fusillade la plus nourrie de tout le siège.",
      "Hier, le Tsong-Li-Yamen a renouvelé ses tentatives pour nous amener à relâcher notre surveillance en nous informant qu'il avait donné l'ordre de cesser le feu ; après quoi les Chinois ont attaqué simultanément, et de tous les côtés, les légations de France, de Russie, d'Angleterre et des États-Unis.",
      "Vers le matin, le son éloigné du canon, que nous saluâmes avec joie, vint relever notre courage et nous donner de nouvelles forces pour continuer la résistance. Jusqu'au moment même où la colonne de secours entra dans la ville, les Chinois continuèrent à tirer sur les légations. Nous avons tenu pendant deux mois sous un feu continuel. Notre régime alimentaire se composait de rations de riz et d'une livre de cheval par jour. Les Chinois reconnaissent avoir eu trois mille tués."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "International",
    "title": "Autour de Tien-Tsin",
    "summary": "Un détachement allié a mis en déroute un groupe de Boxers près de Tien-Tsin. L'engagement s'est soldé par une victoire des forces internationales et la destruction du village insurgé.",
    "paragraphs": [
      "Tien-Tsin, 22 août (via Ché-Fou, 25 août) : Un détachement composé de 900 Anglais, 200 Japonais et 500 cavaliers américains, sous les ordres du brigadier général anglais Dorward, a découvert hier un nombre considérable de Boxers dans un village, à six milles au sud-ouest de Tien-Tsin.",
      "Un engagement a eu lieu dans lequel les Chinois ont eu 80 tués et un certain nombre de blessés. Les alliés ont fait 64 prisonniers et ont brûlé le village. Beaucoup de blessés chinois sont en traitement dans les hôpitaux internationaux.",
      "Nos pertes sont : Japonais, 10 blessés ; Américains, 5 blessés. Les Anglais n'ont subi aucune perte. Les Boxers ont laissé entre nos mains un certain nombre de drapeaux, de lances et d'épées. La conduite de la cavalerie a été digne d'éloges."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Les Grandes Manœuvres de Beauce",
    "summary": "Le général Brugère prend la haute direction des manœuvres militaires en Beauce, remplaçant le général de Négrier. La ville de Chartres s'apprête à recevoir dignement le corps des officiers étrangers.",
    "paragraphs": [
      "Par modification aux dispositions primitivement arrêtées, M. le général Brugère, vice-président du conseil supérieur de la guerre, prendra la haute direction des manœuvres d'armée en Beauce.",
      "M. le général de Négrier, membre du conseil supérieur de la guerre, remplacera M. le général Brugère dans le commandement de l'armée du Nord.",
      "Le conseil municipal de la ville de Chartres a décidé d'offrir, à l'occasion des grandes manœuvres, une soirée de gala au corps des officiers étrangers admis à suivre ces manœuvres, à l'état-major général, à l'état-major du 4e corps et aux officiers français délégués pour suivre les opérations."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le cadavre d'Argenteuil",
    "summary": "Le mystère du noyé d'Argenteuil est levé : le commissaire de police a identifié le corps comme étant celui de Paul-Jean Roudier, un maréchal-ferrant porté disparu depuis le 16 août, grâce à une lettre et des signes distinctifs.",
    "paragraphs": [
      "Le mystère qui plane sur l'affaire d'Argenteuil semble sur le point d'être éclairci. Hier matin, M. Blanc, commissaire de police d'Argenteuil, recevait une lettre signée de M. Bellot, concierge à Neuilly-sur-Seine, faisant connaître que l'individu repêché dans la Seine devait être l'un de ses locataires, Paul-Jean Roudier, maréchal-ferrant disparu depuis le 16 août.",
      "Le lendemain, M. Bellot et la maîtresse du maréchal-ferrant recevaient chacun une lettre dans laquelle Roudier annonçait son suicide.",
      "M. Bellot a reconnu les objets retrouvés sur le noyé. De plus, une particularité physique, l'absence de l'ongle de l'index de la main droite, a été confirmée sur le cadavre par le médecin légiste."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Deux drames en Belgique",
    "summary": "La Belgique est frappée par deux tragédies : un crime passionnel à Courtrai suivi du suicide de l'auteur, et l'assassinat sanglant d'un berger à Attert par deux inconnus.",
    "paragraphs": [
      "Bruxelles, 25 août : Le nommé Fesquenoot, demeurant à Courtrai, a tiré, dans un accès de jalousie, quatre coups de revolver sur une jeune fille, Emma Boive, qui refusait de répondre à son amour. Le coupable a été arrêté, mais il s'est suicidé dans sa cellule.",
      "On annonce d'Arlon qu'un berger, nommé Valerius, a été trouvé sur une route déserte à Attert, couvert de sang. Il a déclaré avoir été frappé par deux individus avant de succomber à ses blessures."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "La fête de Sedan en Allemagne",
    "summary": "Le gouvernement impérial allemand a décidé d'annuler la célébration de la fête de Sedan, jugeant inopportune toute manifestation alors que les soldats français et allemands combattent ensemble en frères d'armes.",
    "paragraphs": [
      "Berlin, 25 août : On ne célébrera pas cette année la fête de Sedan. Le gouvernement de l'Empire s'efforce d'empêcher la célébration, jugeant peu opportun d'organiser une solennité de ce genre au moment où les soldats allemands et français combattent ensemble en frères d'armes."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Nécrologie",
    "title": "Mort du philosophe Nietzsche",
    "summary": "Le célèbre philosophe allemand Friedrich Nietzsche s'est éteint ce matin à Weimar des suites d'une attaque d'apoplexie, laissant derrière lui une œuvre monumentale.",
    "paragraphs": [
      "Weimar, 25 août : Le philosophe Friedrich Nietzsche est mort ce matin, vers midi, d'une attaque d'apoplexie."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Dernière Heure",
    "title": "Les événements de Chine",
    "summary": "Les nouvelles de Chine indiquent que l'impératrice et sa cour auraient été arrêtées. L'empereur chercherait la protection japonaise, tandis que le général Yung-Lu se serait évadé de prison.",
    "paragraphs": [
      "Les nouvelles en provenance de Chine rapportent, d'après les dernières informations, que l'impératrice et la cour auraient été arrêtées à vingt milles au sud-ouest.",
      "L'empereur, qui a aussitôt demandé la protection des Japonais, n'est pas encore arrivé à Pékin.",
      "Le général Yung-Lu se serait échappé de la prison de la commission chinoise des châtiments et serait arrivé à Pao-Ting-Fou."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Social",
    "title": "Les grèves des ports",
    "summary": "À Dunkerque, la situation sociale demeure tendue : les ouvriers du port ont voté la poursuite de leur mouvement, tandis que les négociations stagnent avec les autres corporations locales.",
    "paragraphs": [
      "Dunkerque, 25 août, 11 heures du soir. Ce soir, les ouvriers du port, réunis en assemblée publique, ont voté la continuation de la grève.",
      "L'entente ne s'établit pas non plus entre les patrons et les ouvriers des autres corps de métiers."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Les ouvriers du fer de Dunkerque",
    "summary": "Les ouvriers métallurgistes de Dunkerque ont sollicité l'arbitrage d'un juge de paix pour régler leurs différends, alors que la menace de fermeture des usines de Petites-Synthes et Rosendael se précise.",
    "paragraphs": [
      "Les ouvriers du fer, au nombre de près de trois mille, ont soumis leurs revendications à l'arbitrage de M. Boivin, juge de paix.",
      "Les grévistes de l'usine de MM. Marchant frères ont, eux aussi, demandé l'arbitrage du juge de paix ; leurs patrons ont l'intention de fermer leurs usines pendant deux mois, notamment à Petites-Synthes et à Rosendael.",
      "Les ouvriers et ouvrières, au nombre de plusieurs milliers, s'apprêtent à parcourir les rues de Dunkerque et des communes avoisinantes."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Aux mines de Roche-la-Molière",
    "summary": "À la suite d'une entrevue avec le syndicat, la direction des mines de Roche-la-Molière a manifesté une volonté d'apaisement concernant le sort réservé à l'ouvrier Preynat.",
    "paragraphs": [
      "On mande de Saint-Étienne : M. Voisin, directeur des mines de Roche-la-Molière et de Firminy, a reçu hier une délégation du syndicat qui l'a entretenu du cas du mineur Preynat. Le directeur a promis d'être indulgent et a invité cet ouvrier à se rendre mardi au bureau de Roche-la-Molière, où on lui fera connaître ce qui aura été décidé à son sujet."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Social",
    "title": "Une grève évitée",
    "summary": "Le conflit social a été évité aux mines de Batere. Une entente a été conclue entre la direction, l'ingénieur Rodet et les ouvriers, qui ont finalement renoncé à leur mouvement de grève.",
    "paragraphs": [
      "On télégraphie de Perpignan : Après une entente conclue entre le directeur des mines de Batere, l'ingénieur Rodet et les ouvriers, ces derniers ont renoncé à se mettre en grève."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "La grève des cochers",
    "summary": "La reprise du travail des cochers de la Compagnie générale demeure incertaine. Par ailleurs, la dissolution de la caisse de secours mutuels a été actée, assortie d'une mise en demeure de restitution des fonds.",
    "paragraphs": [
      "Depuis trois jours, le nombre des fiacres mis en service par la Compagnie générale s'accroît graduellement. Mais dans quelles proportions exactes cette reprise du travail s'effectue-t-elle ? Voilà qui n'est pas très facile à établir, tout document officiel probant faisant défaut.",
      "Dans chacun des dix-neuf dépôts de la Compagnie générale, les chiffres varient quotidiennement. Pour quelques-uns, on peut évaluer au quart ou même au tiers environ de l'effectif total les voitures sorties.",
      "La chambre syndicale des cochers affirme, de son côté, que ceux qui travaillent ne sont pas en majeure partie des grévistes, mais seulement des nouveaux venus dans la corporation, palefreniers ou laveurs de voitures promus occasionnellement cochers de fiacre.",
      "Dans une réunion tenue hier soir à la Bourse du travail, les sociétaires ont décidé la dissolution de la caisse de secours mutuels des employés de la compagnie. Une mise en demeure a été envoyée pour la restitution des fonds sous vingt-quatre heures, sous peine de poursuites judiciaires."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tirage des Bons de l'Exposition",
    "summary": "Le 21e tirage des Bons de l'Exposition a eu lieu hier au Crédit foncier. Au total, cent huit numéros ont été extraits des roues, déterminant les gagnants des lots mis en jeu pour cette opération financière.",
    "paragraphs": [
      "Hier, à deux heures et demie de l'après-midi, a eu lieu, au Crédit foncier, le 21e tirage des Bons de l'Exposition. Cent huit numéros ont été extraits des roues donnant droit aux lots."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Orages et inondations",
    "summary": "De violents orages accompagnés de grêle ont causé d'importants dégâts à travers plusieurs départements. On déplore des victimes humaines, des éboulements ferroviaires et des pertes matérielles considérables.",
    "paragraphs": [
      "Chambéry, 25 août : Une véritable trombe d'eau, mêlée de grêle, s'est abattue sur les villages de Saint-Ours, Mouxy et Épagny. Au Châtelard, la foudre est tombée sur une maisonnette et a causé la mort d'un habitant.",
      "Privas, 25 août : Les nouvelles qui parviennent de divers côtés signalent de grands dégâts causés par les inondations à Annonay, Aubenas et Lamastre. Sur la ligne de La Voulte au Cheylard, un éboulement considérable a été évité par la présence d'esprit d'un mécanicien.",
      "Saint-Étienne, 25 août : Le train express 865 a subi des retards considérables suite aux voies coupées par l'orage, multipliant les trajets de secours avant d'arriver à bon port avec 14 heures et 31 minutes de retard.",
      "Lyon, 25 août : Les dégâts sont incalculables. Les lignes de chemin de fer sont interrompues en divers points. À l'Arbresle, les pertes s'élèvent à plus d'un million. Plusieurs ouvriers ont trouvé la mort dans les inondations et les catastrophes liées aux crues des rivières."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Justice",
    "title": "Faussaire et parjure",
    "summary": "Un individu a été confondu pour une escroquerie aux dettes commise sous un faux nom, tandis qu'un comparse est poursuivi pour parjure après avoir usurpé l'identité d'un créancier devant le tribunal de commerce.",
    "paragraphs": [
      "Un nommé F. a tenté une escroquerie en vendant une dette à une débitante de vins en utilisant un faux nom. Un comparse, P., s'est rendu coupable de parjure devant le tribunal de commerce en se faisant passer pour le véritable créancier. Le juge d'instruction a ordonné le renvoi du parjure devant la chambre des mises en accusation."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le voleur des médecins",
    "summary": "Félix Parisot, un malfaiteur qui se faisait passer pour un indigent afin d'accéder aux cabinets médicaux pour y dérober des objets, a été appréhendé hier chez un médecin de la rue Joubert.",
    "paragraphs": [
      "Un individu qui se faisait passer pour un demandeur de secours afin de pénétrer chez les médecins et dérober des objets a été arrêté hier chez un docteur de la rue Joubert. Le malfaiteur, Félix Parisot, a avoué ses vols."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Justice",
    "title": "Affaire de mauvais traitements",
    "summary": "M. Deslandes, commissaire de police de Charonne, instruit une affaire de maltraitance sur un enfant de neuf ans, suite aux témoignages du voisinage et à la demande d'un examen médical.",
    "paragraphs": [
      "M. Deslandes, commissaire de police de Charonne, a ouvert une enquête sur une belle-mère accusée de maltraiter son fils de neuf ans. Les voisins ont déposé contre elle et un examen médical a été ordonné."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Justice",
    "title": "L'affaire de la rue des Partants",
    "summary": "À Ménilmontant, une altercation entre journaliers a dégénéré en violences. M. Leblond, comptable, a été sauvagement agressé alors qu'il portait secours à un blessé. Les agresseurs sont activement recherchés par la police.",
    "paragraphs": [
      "À Ménilmontant, une vive altercation survenue entre plusieurs journaliers a rapidement dégénéré en une scène de violence. M. Leblond, un comptable qui passait par là et qui a généreusement tenté d'intervenir pour secourir un blessé, a été sauvagement agressé par ces individus déchaînés.",
      "Les victimes ont été transportées d'urgence dans un hôpital voisin pour y recevoir les soins nécessaires. Les forces de police, avisées des faits, ont immédiatement ouvert une enquête afin d'identifier et d'appréhender les agresseurs, qui ont pris la fuite."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Justice",
    "title": "Une bagarre au bureau de placement",
    "summary": "Mme Richardaud, gérante d'un bureau de placement, a été victime d'une agression brutale par deux clients mécontents. Le bureau a été saccagé et la gérante frappée avec une barre de fer. Une enquête est ouverte.",
    "paragraphs": [
      "Une violente dispute a éclaté au sein d'un bureau de placement entre Mme Richardaud, la gérante, et deux clients se présentant comme garçons de café. Le ton étant rapidement monté, les deux individus se sont livrés à un véritable saccage des lieux.",
      "Au cours de cet accès de fureur, la gérante a été violemment frappée à coups de barre de fer par les malfaiteurs. La police a été saisie de l'affaire et les recherches sont en cours pour interpeller ces deux hommes."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Plaisanterie qui finit mal",
    "summary": "Alors qu'il se baignait dans le canal de l'Ourcq, le jeune Clodomir Hapont s'est fait dérober ses vêtements par un comparse. Il a finalement retrouvé le voleur, Paul Collet, en flagrant délit. L'individu est arrêté.",
    "paragraphs": [
      "Le jeune Clodomir Hapont a fait les frais d'une bien mauvaise plaisanterie : alors qu'il se baignait dans les eaux du canal de l'Ourcq, il s'est fait voler l'intégralité de ses vêtements laissés sur la berge.",
      "Après quelques recherches, le jeune homme a fini par retrouver le coupable, un autre garçon nommé Paul Collet, qui ne craignait nullement la justice puisqu'il se promenait en portant fièrement le costume neuf de sa victime sous le plein soleil. Le voleur a été appréhendé sans délai."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Justice",
    "title": "Arrestations mouvementées",
    "summary": "Deux individus ont été appréhendés par les gardiens de la paix alors qu'ils tentaient de dérober des boîtes à lait. L'un des malfrats a sorti un revolver chargé, compliquant l'arrestation. Ils sont écroués au Dépôt.",
    "paragraphs": [
      "Les gardiens de la paix ont procédé à l'arrestation mouvementée de deux individus pris en flagrant délit de vol de boîtes à lait. La scène s'est envenimée lors de l'interpellation, lorsque l'un des deux malfaiteurs a brusquement sorti un revolver chargé de sa poche.",
      "Grâce à la vigilance et à la promptitude des agents, le danger a été écarté. Les deux individus ont été conduits au Dépôt de la Préfecture, où ils devront répondre de leurs actes devant le magistrat."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les désespérés",
    "summary": "Une série de tentatives de suicide a marqué la chronique. M. de Saint-Charles s'est tiré une balle dans la tête au square des Batignolles, tandis que Mme Buna a mis fin à ses jours par asphyxie au charbon.",
    "paragraphs": [
      "La chronique quotidienne rapporte, hélas, plusieurs tentatives de suicide tragiques. M. de Saint-Charles, pris d'un accès de mélancolie, s'est tiré un coup de revolver dans la tête alors qu'il se trouvait au square des Batignolles.",
      "Par ailleurs, dans un autre quartier, une dame prénommée Buna a été découverte inanimée dans son domicile, ayant mis fin à ses jours par asphyxie au moyen d'un brasero à charbon."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Courses",
    "title": "Pronostics de Dieppe et Levallois",
    "summary": "Analyses et pronostics complets pour les réunions hippiques de Dieppe et Levallois, incluant les favoris des épreuves de plat et de trot attelé du jour.",
    "paragraphs": [
      "Pour les réunions hippiques de ce jour à Dieppe et à Levallois, les parieurs trouveront ci-après les indications et pronostics des experts pour les différentes épreuves de trot attelé et de galop.",
      "L'attention se porte particulièrement sur les favoris des courses principales, dont la forme récente laisse présager des performances remarquables, malgré l'état actuel des pistes."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Autour de Paris",
    "summary": "Chroniques des événements marquants en banlieue parisienne : arrestations, accidents domestiques à Courbevoie et Montreuil, et découverte macabre à Vincennes.",
    "paragraphs": [
      "Les autorités ont procédé à plusieurs arrestations cette nuit dans la périphérie parisienne. À Courbevoie, un grave accident domestique a nécessité l'intervention rapide des secours, tandis qu'à Montreuil, un incendie d'origine accidentelle a mobilisé les sapeurs-pompiers.",
      "À Vincennes, une découverte macabre a été signalée aux autorités judiciaires ; une enquête est ouverte pour déterminer les circonstances exactes de cet événement tragique."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Départements",
    "title": "Nouvelles des correspondants",
    "summary": "Échos de province : une escroquerie audacieuse déjouée à la foire de Chartres, un incendie ravageur à Évreux et un accident mortel survenu aux abords de Soissons.",
    "paragraphs": [
      "Nos correspondants nous transmettent les nouvelles des départements. À la foire de Chartres, une escroquerie visant des marchands de bestiaux a été déjouée grâce à la vigilance de la gendarmerie locale.",
      "Un incendie important s'est déclaré hier à Évreux, causant des dégâts matériels considérables dans le centre-ville. Par ailleurs, un accident mortel a endeuillé la commune de Soissons, où un cultivateur a trouvé la mort dans des conditions dramatiques."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Météorologie",
    "title": "Bulletin météorologique du 25 août",
    "summary": "Bulletin météo du 25 août : relevés de températures en France et à l'étranger, prévisions d'un temps nuageux, état de la mer et variations barométriques.",
    "paragraphs": [
      "Les températures relevées hier matin étaient de 18 degrés à Bordeaux, 20 à Helsinki, 27 à Trémont et 18 à Monaco. On notait 6 degrés au mont Aigoual, 7 au mont Mouchet, 11 au Pic du Midi.",
      "En France, un temps nuageux et moyennement chaud est probable.",
      "Situation particulière aux ports français : la mer est généralement peu agitée.",
      "Variations atmosphériques du 25 août : à 7 heures du matin 758, à midi 759, à 2 heures 759, à 4 heures 759, à 6 heures du soir 759, à minuit 759."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Navigation",
    "title": "État des voies navigables",
    "summary": "État des niveaux et de la navigabilité des fleuves et rivières au 25 août, incluant la Seine, la Marne et l'Oise, relevés à 7 heures du matin.",
    "paragraphs": [
      "Navigation fluviale du 25 août, 7 heures du matin : Pont de Seine à Montereau, écluse de Varennes, pont de Melun, pont de Corbeil, écluse de Port-Anglais.",
      "Marne : écluse de Cumières, écluse de Chaubert, écluse de Charenton.",
      "Basse-Seine : écluse du canal Saint-Martin, pont de la Tournelle, pont Royal, écluse de Suresnes, barrage de Bezons, pont de Mantes, écluse de Méricourt.",
      "Oise : barrage de Venette."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Sports",
    "title": "Au Vélodrome de Vincennes",
    "summary": "Le vélodrome municipal de Vincennes distribuera des milliers de francs de prix lors de ses concours du 9 au 16 septembre. Les coureurs doivent impérativement respecter les consignes de programme pour leurs engagements.",
    "paragraphs": [
      "Des milliers de francs de prix en une semaine, telle est la somme fantastique qui sera distribuée aux vainqueurs des concours organisés au vélodrome municipal de Vincennes, du 9 au 16 septembre.",
      "Les engagements arrivent nombreux chaque jour au vélodrome du Parc des Princes. Rappelons qu'aucun engagement ne sera accepté sans l'accomplissement de toutes les prescriptions insérées au bas de chaque programme qui a été adressé individuellement à tous les coureurs."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Sports",
    "title": "Le critérium de l'U.V.F.",
    "summary": "Le Parc des Princes accueille aujourd'hui le premier critérium de l'U.V.F. et le Grand Prix de Boulogne, réunissant les champions du monde cyclistes dans une compétition intense sur 100 kilomètres.",
    "paragraphs": [
      "C'est aujourd'hui, à deux heures et demie, au Parc des Princes, que seront courus le premier critérium de l'U.V.F. pour coureurs de deuxième série âgés de moins de 21 ans, et le Grand Prix de la ville de Boulogne, course de 100 kilomètres.",
      "Huret, champion du monde pour la distance, Taylor, Walters, Ebran et Hohl, c'est-à-dire à peu près tous les participants du championnat du monde, vont se trouver aux prises, les uns pour venger leur défaite, Huret pour confirmer sa belle victoire."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Sports",
    "title": "Concours de ballons",
    "summary": "Le parc aérostatique de Vincennes organise aujourd'hui un concours de durée pour ballons libres. Douze aéronautes s'affrontent pour le titre sous la direction d'un comité d'experts.",
    "paragraphs": [
      "Aujourd'hui dimanche 26 août aura lieu, au parc aérostatique de l'annexe de Vincennes, le concours de durée (2e série) pour ballons libres montés et handicapés.",
      "Le premier prix sera attribué à l'aéronaute qui se sera maintenu le plus longtemps en l'air, quelle que soit la distance parcourue. Cette épreuve a réuni les douze concurrents : MM. de la Vaulx, J. Balsan, G. Juchmès, A. Corot, comte Castillon de Saint-Victor, Hervieu, J. Faure, vicomte de Saussine, de la Mazelière, M. Guffroy, E. Pietri, J. Leloup.",
      "Le départ sera donné à trois heures de l'après-midi. Les commissaires de service sont MM. Louis Godard, président du concours ; commandant Hirschauer, Eugène Godard, Mallet et J.-U. Aubry."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Sports",
    "title": "L'Aviron",
    "summary": "Le bassin de Courbevoie a accueilli les éliminatoires du concours d'aviron de l'Exposition. Les clubs qualifiés pour la finale sont désormais connus à l'issue de cette journée sportive.",
    "paragraphs": [
      "Hier ont eu lieu dans le bassin de Courbevoie, entre le pont Bineau et le pont d'Asnières, les épreuves éliminatoires du concours d'aviron de l'Exposition.",
      "Les concurrents qualifiés pour prendre part aux autres épreuves sont : Raymond, Benott, Barrelet, Prévet, Delaporte (deux juniors), Club nautique de Gand, Union nautique de Bruxelles, Club nautique de Paris, Société nautique de Soissons, Minerva (Amsterdam), N.-A.-O. (Etats-Unis), Union nautique de Lyon, Société nautique de la Marne, R. G. de Castillon, Club nautique de France, Société nautique de Genève, Ludwigshafener R. V. (Allemagne), Minerva (Amsterdam), Germania (Hambourg).",
      "Les premiers de chaque série et les deux meilleurs chronomètres sont seuls qualifiés pour la finale. Un grand banquet chez Notta a clôturé les épreuves éliminatoires."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "Au programme : festival lyrique à Béziers, nouveaux projets de Lucien Guitry à la Porte-Saint-Martin et concert de musique russe au Trocadéro en octobre prochain.",
    "paragraphs": [
      "C'est aujourd'hui qu'aura lieu aux arènes de Béziers le spectacle-festival organisé par la ville au profit d'œuvres philanthropiques. Au programme, Prométhée, tragédie lyrique de Jean Lorrain et Fernand Hérold, musique de Gabriel Fauré, avec 600 exécutants.",
      "Lucien Guitry vient de traiter avec la Porte-Saint-Martin, où il jouera le drame d'Emile Zola, l'Assommoir, après l'Aiglon. Il s'est assuré les concours de MM. Calmettes, Magnier, Gobin, Claudius, Courtès, Lugné-Poë et de Mmes S. Desprès, S. Munte, Marie Grandet. La mise en scène sera renouvelée.",
      "Aux Variétés, on vient de faire installer des ventilateurs qui entretiennent une agréable fraîcheur.",
      "Le boulevard Haussmann a été mis en émoi par un essai de mobilisation des appareils de sauvetage des pompiers, qui a pleinement réussi.",
      "M. Alexandre Winogradsky, directeur de la Société impériale de Kiew, viendra à Paris donner un concert de musique russe le jeudi 11 octobre au Trocadéro."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Concerts et divertissements",
    "title": "Soirée parisienne au Nouveau-Cirque",
    "summary": "Le Nouveau-Cirque confirme son immense succès mondain en accueillant des souverains illustres, tels que le roi de Luang-Prabang et le shah de Perse, séduits par ses célèbres spectacles nautiques.",
    "paragraphs": [
      "La série des visites princières et souveraines se poursuit au Nouveau-Cirque. Hier, c'était Tiao-Onparat, roi de Luang-Prabang, qui assistait à la représentation. Quelques jours auparavant, le shah de Perse avait également honoré de sa présence une soirée au Nouveau-Cirque.",
      "La célèbre piste mobile permet de monter des pièces nautiques qui demeurent l'une des curiosités les plus prisées de Paris. Le succès de l'établissement est considérable, conforté par la modernisation constante et le grand confort de ses installations."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Feuilleton",
    "title": "Main Gauche (Troisième partie)",
    "summary": "William Gerarden, en proie à un doute cruel quant à la sincérité de Lydie, découvre son départ précipité pour Mazomanie et soupçonne une rencontre avec le cow-boy Joe Sims.",
    "paragraphs": [
      "Savage partit aussitôt. William Gerarden se trouvait dans une perplexité extrême, se demandant s'il existait une entente secrète entre Lydie et Harry.",
      "Il apprit que Lydie s'était inscrite sous son nom de jeune fille et logeait trois portes plus loin. Se postant en observation, il vit Lydie sortir, habillée en voyageuse, et se diriger vers la gare pour prendre un billet pour Mazomanie.",
      "Soudain, le nom de Joe Sims lui revint à l'esprit. Joe Sims se trouvait aux environs de Mazomanie. William restait atterré, se demandant si Lydie allait se donner à ce cow-boy. Il décida de la suivre pour en avoir le cœur net."
    ]
  }
];
