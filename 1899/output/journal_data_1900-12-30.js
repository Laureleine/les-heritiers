// Date: 1900-12-30
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-12-30 (Version Restaurée, 43 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Calendrier",
    "title": "Avis aux lecteurs du Petit Parisien",
    "summary": "Le Petit Parisien invite ses lecteurs à retirer gratuitement, ce 30 décembre, leur exemplaire du calendrier illustré en couleurs offert avec le journal du jour.",
    "paragraphs": [
      "Aujourd'hui, 30 décembre, tous les lecteurs du Petit Parisien sont invités à réclamer notre calendrier illustré en couleurs, qui leur sera délivré gratuitement avec leur exemplaire du journal."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Éditorial",
    "title": "La liberté individuelle",
    "summary": "Analyse sur les avancées républicaines concernant la liberté individuelle et l'urgence de limiter l'omnipotence des magistrats sur la détention préventive pour protéger les citoyens.",
    "paragraphs": [
      "La République a accompli un progrès notable dans la voie de la liberté individuelle en supprimant l'instruction secrète, ce redoutable tête-à-tête entre un inculpé et le magistrat.",
      "Jusqu'à présent, rien n'assure le respect de la liberté d'un citoyen ; rien n'empêche son arrestation sans nécessité ; rien n'assigne une limite à la durée de son incarcération.",
      "La question de la liberté individuelle est trop vaste pour qu'il soit possible de la résoudre sans que des jurisconsultes l'aient étudiée sous toutes ses faces. Plus d'un siècle après la prise de la Bastille, on ne se montre guère exigeant en réclamant la liberté individuelle par la suppression de l'omnipotence du juge quant à la prison préventive."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille - Marie Madeleine",
    "summary": "La fugitive poursuit son périple urbain vers l'inconnu, s'orientant dans les rues avant d'être accostée par Marcel Broudin.",
    "paragraphs": [
      "Vers l'inconnu, la fugitive avait pensé d'abord à jeter sa lettre à la première poste qu'elle rencontrerait sur son chemin.",
      "La jeune fille s'orientait. Elle remonta lentement le boulevard d'Inkermann sous les grands arbres qui le bordent et se dirigea vers l'avenue du Roule.",
      "C'était Marcel Broudin. Il ne put réprimer un moment de surprise mêlée d'admiration et dit très discrètement : « Mademoiselle, voulez-vous me permettre une question ? »"
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Sentinelles attaquées à Vincennes",
    "summary": "L'enquête sur l'agression des sentinelles des poudrières de Vincennes se poursuit activement avec l'arrestation de trente-cinq suspects identifiés.",
    "paragraphs": [
      "L'émotion causée à Vincennes par l'audacieuse agression dont ont failli être victimes les sentinelles de deux poudrières du petit polygone est loin de se calmer.",
      "L'enquête, continuée hier par M. Rebondin, commissaire de police, a établi que les auteurs de l'attentat n'ignoraient pas l'organisation du service de garde existant à la Maison-Blanche.",
      "Ces opérations ont été des plus fructueuses : elles ont amené l'arrestation de trente-cinq individus."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'homme coupé en morceaux",
    "summary": "Mme Marchais a signalé à la police de Charenton la disparition de son fils, parti depuis la mi-novembre avec des bijoux de valeur.",
    "paragraphs": [
      "M. Cuvillier, commissaire de police de Charenton, a reçu, hier matin, une déclaration relative à l'affaire de l'homme coupé en morceaux. Mme Marchais, demeurant rue Bourgelat, à Maisons-Alfort, s'est présentée au bureau de ce magistrat pour lui signaler la disparition de son fils.",
      "Le jeune Marchais a quitté le domicile de sa mère vers le 18 novembre dernier, emportant avec lui un coffret contenant des bijoux d'une valeur assez importante."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame mystérieux à Migennes",
    "summary": "L'enquête sur le drame passionnel de Migennes se poursuit sans que les mobiles exacts ne soient établis. Les autorités s'interrogent : pacte suicidaire entre amants ou crime suivi d'une tentative de suicide par Georges Garnier ?",
    "paragraphs": [
      "L'enquête ouverte sur le singulier drame que le Petit Parisien a relaté en détail et qui a soulevé une vive émotion à Migennes n'a pas encore permis d'en déterminer les mobiles exacts.",
      "Y a-t-il eu entente entre les deux victimes et dès lors se trouverait-on en présence de l'aventure devenue banale de deux amants recourant à la mort pour dénouer leur intrigue, ou bien faut-il admettre que, dans un accès de folie passionnelle, Georges Garnier, irrité de voir ses avances repoussées par Mme Roufflot, a tiré sur elle puis a tenté de se donner la mort ?"
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Économie",
    "title": "Le Budget de l'Algérie",
    "summary": "Le vote d'un budget spécial pour l'Algérie marque une étape historique de la présence française en Afrique, offrant à la colonie une autonomie financière accrue tout en maintenant les liens avec la mère-patrie.",
    "paragraphs": [
      "Le vote d'un budget spécial pour l'Algérie constitue une date historique dans l'œuvre française en Afrique, d'autant plus que cette réforme considérable a la rare fortune de ne pas rencontrer de détracteurs.",
      "Sans relâcher d'une façon dangereuse le lien entre la mère-patrie et sa colonie, sans porter la moindre atteinte à l'autorité souveraine, la France permet ainsi à l'Algérie de voler de ses propres ailes."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Culture",
    "title": "La réouverture de la Comédie-Française",
    "summary": "Après quatre mois de retard, la Comédie-Française, maison de Molière, a rouvert ses portes. La cérémonie fut marquée par une lecture de vers écrits par Jean Richepin.",
    "paragraphs": [
      "La Comédie-Française a repris possession, hier soir, de sa maison, la Maison de Molière. Cette rentrée avait été annoncée pour le 14 juillet. Elle a eu lieu quatre mois après l'époque prévue, le 29 décembre.",
      "La cérémonie terminée, Mme Baretta, Mme Bartet et M. Mounet-Sully ont récité les vers vibrants que M. Jean Richepin a écrits en guise de prologue pour la réouverture de la Comédie-Française."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "La tempête",
    "summary": "Une tempête d'une rare violence s'est abattue sur nos côtes, causant de nombreux deuils. Malgré le courage héroïque de nos marins, le combat contre les éléments a été fatal pour plusieurs d'entre eux.",
    "paragraphs": [
      "Il est impossible de parcourir la longue série des désolantes dépêches que nous publions plus loin sans avoir le cœur douloureusement étreint. Partout, sur nos côtes ravagées, la mer et le vent complices ont semé les deuils.",
      "Surpris par la soudaineté de la tempête, nos intrépides marins ont lutté sans faiblir, sur leurs barques désemparées, avec leur courage héréditaire, mais hélas ! combien ont trouvé la mort dans ce combat inégal."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Conséquences de la tempête au Havre",
    "summary": "Au Havre, la tempête a causé la mort de six personnes. Les dégâts matériels sont importants, touchant habitations, toitures et réseaux de transport, notamment les tramways du boulevard Maritime.",
    "paragraphs": [
      "La tempête a donc fait six victimes au Havre : cinq matelots noyés et Fortin, le douanier, tué en ville par la chute d'une cheminée.",
      "Quant aux dégâts matériels, ils sont importants. Outre des meubles détruits rue Michel-Yvon, il faut signaler la toiture de la rue Guillemard, enlevée en partie.",
      "La passerelle des magasins de moulins de Corbeil, rue Charles-Laffitte, est endommagée.",
      "Une partie des débris sur le câble aérien des tramways a occasionné l'arrêt complet sur une longueur de deux cents mètres, le long du boulevard Maritime."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Sinistres maritimes à Fécamp et Trouville",
    "summary": "Une violente tempête a dévasté le littoral de Fécamp, détruisant les installations du Casino. Au large, le naufrage de la barque 'Saint-Joseph' a coûté la vie au patron Arsène Mignot et à l'un de ses marins.",
    "paragraphs": [
      "À Fécamp, la tempête qui a soufflé hier et dans la matinée d'aujourd'hui a occasionné des dégâts considérables. Sur le boulevard des Bains, des milliers de mètres cubes de terre ont été enlevés par les vagues. Cette promenade et la plate-forme du Casino sont entièrement dévastées.",
      "Aujourd'hui, à dix heures, un navire démâté étant signalé à l'horizon, le remorqueur Bou-Rose se portait aussitôt à son secours. Il ramenait bientôt au port la barque de pêche Saint-Joseph, de Trouville.",
      "Cette barque se trouvait, hier, à cinq heures du soir, dans les parages du cap de la Hève. Assailli par la tempête, le Saint-Joseph eut ses deux mâts emportés par les vagues et fut renversé quille en l'air. L'équipage, sur l'ordre du patron Arsène Mignot, était descendu dans la cale.",
      "Un des marins, balayé par un coup de mer, disparut. Les cinq hommes restèrent toute la nuit ballotés par le vent avant d'être recueillis par la barque Neptune, de Trouville.",
      "Le patron Arsène Mignot, le seul qui ait péri, laisse une femme et trois enfants."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Naufrages au Tréport et à Cayeux",
    "summary": "La tempête a provoqué plusieurs drames maritimes : la barque 145 s'est échouée près de Cayeux causant la mort de trois marins, tandis qu'un homme a disparu lors du naufrage de la barque 148 au Grotoy.",
    "paragraphs": [
      "Au Tréport, la barque 145, patron Gabriel Vassier, a manqué l'entrée du port et est allée s'échouer sur le port de Cayeux.",
      "Trois des hommes qui la montaient ont été enlevés par un coup de mer : Arsène-Marie Berthe, père de cinq enfants ; François Delahaye, père d'un enfant, et Tirard, célibataire.",
      "On a retrouvé à Cayeux la barque 148, patron Jean-Pierre Lequien, sous le Grotoy. Le matelot, marié et père de deux enfants, a été emporté par un coup de mer."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Naufrage du brick-goélette 'Trois-Frères' aux Sables-d'Olonne",
    "summary": "Le brick-goélette 'Trois-Frères' a sombré hier face aux Sables-d'Olonne. Malgré les efforts des sauveteurs, le capitaine Jamet et six marins ont péri dans la furie des éléments.",
    "paragraphs": [
      "Hier, à midi, au plus fort de la tempête, un sémaphore signalait un navire en détresse. Les habitants des Sables et de la Chaume se portèrent au secours de l'équipage du brick-goélette Trois-Frères, de Bayonne, commandé par le capitaine Jamet, avec sept hommes d'équipage.",
      "L'état furieux de la mer ne permit de mettre à flot ni le canot de sauvetage, ni le canot porte-amarre. Mille mètres séparaient les naufragés de la terre.",
      "Trois hommes, les nommés Second, Perdron et Dourver, tentèrent de gagner la terre en canot, mais une vague rompit les amarres. Deux disparurent et le troisième, après avoir lutté dans les rochers, fut ramené à terre par des citoyens courageux.",
      "Le capitaine Jamet et les autres marins furent emportés ou disparurent malgré les tentatives de secours.",
      "Le capitaine Joseph Jamet, le second Louis Sylvestre, le maître d'équipage Antoine Le Moulée, les matelots Jules Thiébaud et Donner, ainsi que les mousses Ivinnec et Louis Glego ont péri dans ce naufrage."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Tempête et sinistres à Dunkerque",
    "summary": "Le feu flottant 'Snow' a été remorqué au port après avoir talonné sur le banc 'Gros Jacques' durant la tempête. La gestion de l'opération par les Ponts et Chaussées est vivement critiquée.",
    "paragraphs": [
      "La tempête s'est apaisée dans l'après-midi. Le feu flottant 'Snow', qui a passé toute la nuit en détresse, vient d'entrer au port sans gouvernail, remorqué par le Dunkerquois.",
      "Le 'Snow' avait talonné sur un banc appelé 'Gros Jacques'. On blâme sévèrement la décision du conducteur des ponts et chaussées pour la gestion de l'opération de remorquage, qui aurait pu causer la perte totale du navire."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame maritime à Gravelines",
    "summary": "Un terrible naufrage a frappé Gravelines où trois bateaux de pêche se sont perdus en mer. Huit marins ont péri dans la catastrophe, malgré le sauvetage de cinq rescapés par la Société centrale.",
    "paragraphs": [
      "Trois des neuf bateaux de pêche qui ont tenté d'atteindre le port hier se sont ouverts en talonnant. Huit marins sont connus comme ayant péri : Julien Aget, Jules Fournier, Benoît Wadoux, Joseph Paillard, Lucien Vérove, Alfred Fournier, Édouard Vérove et Louis Morzadée.",
      "Le canot de la Société centrale de sauvetage des naufragés a pu sauver cinq hommes."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Collision de navires à Paimbœuf",
    "summary": "Le steamer anglais Pontypridd a abordé et coulé le dundee Henri-Hélène sur la rade de Paimbœuf. Le capitaine Chaniolleau, blessé, fut secouru avec son équipage, mais le mousse a tragiquement disparu dans le naufrage.",
    "paragraphs": [
      "Le steamer anglais Pontypridd a abordé et coulé le dundee Henri-Hélène sur la rade de Paimbœuf. Le dundee a sombré à pic en quelques minutes. Le capitaine Chaniolleau, grièvement blessé, a été sauvé ainsi que son équipage, à l'exception du mousse qui n'a pas reparu."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique",
    "title": "Conseil d'enquête sur le commandant Guignet",
    "summary": "Un conseil d'enquête, présidé par le général Noëllat, est constitué pour statuer sur la situation du commandant Guignet, suite à la décision du gouverneur militaire de Paris.",
    "paragraphs": [
      "Le conseil d'enquête concernant le commandant Guignet a été constitué sous la présidence du général Noëllat. Ce conseil devra se prononcer sur la décision du gouverneur militaire de Paris.",
      "Le général Noëllat sera entouré du général Hardy de Périni, du colonel Villa, agissant en qualité de rapporteur, ainsi que des commandants Cormier et Thirion."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Marine",
    "title": "Visite du ministre de la Marine à l'École supérieure",
    "summary": "M. de Lanessan, ministre de la Marine, a honoré de sa présence l'École supérieure de la marine pour féliciter la promotion sortante, distinguant notamment le contre-amiral Ingouf.",
    "paragraphs": [
      "M. de Lanessan, ministre de la Marine, s'est rendu hier à l'École supérieure de la marine afin de saluer la promotion sortante. Il a remis les palmes d'officier de l'Instruction publique au contre-amiral Ingouf et a honoré de diverses distinctions plusieurs lieutenants de vaisseau."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Actualité Militaire",
    "title": "Circulaire sur l'expédition de Chine et grâces du 1er janvier",
    "summary": "Le ministère de la Marine conserve la direction des opérations en Chine. Par ailleurs, le Président de la République a accordé des remises de peine à des marins militaires pour le 1er janvier 1901.",
    "paragraphs": [
      "Le ministre de la Marine a précisé par circulaire que le département de la Marine continuera d'assurer la direction de l'expédition de Chine. Par ailleurs, à l'occasion du 1er janvier 1901, le Président de la République a accordé des grâces ou des réductions de peines à plusieurs marins militaires."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Chroniques Internationales",
    "title": "L'invasion du Cap et situation en Chine",
    "summary": "Au Transvaal, les Anglais repoussent une attaque. En Chine, la cour impériale temporise face aux puissances, tandis que des rumeurs évoquent l'élévation d'un nouvel empereur mineur nommé Tungh-Su.",
    "paragraphs": [
      "Au Transvaal, le général Kitchener télégraphie que les Anglais ont repoussé une attaque dirigée contre un convoi. En Chine, la cour impériale a répondu aux puissances par des questions sur les conditions de paix, cherchant manifestement à gagner du temps.",
      "Des rumeurs persistantes font état de l'élévation d'un enfant de quinze ans sur le trône impérial, avec le titre de Tungh-Su."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Nécrologie",
    "title": "Mort de l'explorateur Serpa Pinto",
    "summary": "Le Portugal et le monde scientifique déplorent la disparition de l'illustre explorateur portugais Serpa Pinto, survenu à Lisbonne à l'âge de 54 ans, après une vie dédiée aux découvertes géographiques africaines.",
    "paragraphs": [
      "On annonce à Lisbonne la mort de l'explorateur Serpa Pinto, né en 1846. Il était célèbre pour ses vastes explorations africaines et ses travaux géographiques qui avaient suscité l'admiration de la communauté savante européenne."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Chronique Religieuse",
    "title": "Lettre du pape Léon XIII aux évêques français",
    "summary": "Le souverain pontife Léon XIII a adressé une missive pressante à M. le cardinal Richard, archevêque de Paris, manifestant sa vive inquiétude face aux menaces qui pèsent sur les congrégations religieuses en France.",
    "paragraphs": [
      "Le pape Léon XIII a adressé une lettre à M. le cardinal Richard, archevêque de Paris, exprimant ses vives inquiétudes sur les dangers menaçant les congrégations religieuses en France et appelant solennellement à la défense de leurs droits."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Parlementaire",
    "title": "Travaux de la Chambre des députés et du Sénat",
    "summary": "Le Parlement poursuit ses sessions budgétaires : la Chambre achève les débats sur le budget de la Guerre, tandis que le Sénat se concentre sur les prévisions pour 1901 et la question des octrois parisiens.",
    "paragraphs": [
      "La Chambre des députés a terminé la discussion du budget de la Guerre et a entamé celle de la loi de finances.",
      "Le Sénat, de son côté, a examiné le budget spécial de 1901 ainsi que les taxes relatives aux octrois de la ville de Paris."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Social",
    "title": "Société des Artistes Français",
    "summary": "Réunie sous l'égide de M. Jean-Paul Laurens, la Société des Artistes Français a fixé au 15 janvier les prochaines élections pour le renouvellement de son comité, qui se tiendront à l'hôtel des Agriculteurs.",
    "paragraphs": [
      "La Société des artistes français s'est réunie hier sous la présidence de M. Jean-Paul Laurens, membre de l'Institut et président de la Société, au Grand Palais des Beaux-Arts.",
      "Il a été décidé que les élections pour le renouvellement du comité auraient lieu le 15 janvier prochain, à l'hôtel des Agriculteurs de France, 8, rue d'Athènes.",
      "Les électeurs recevront, en temps utile, leur carte électorale ainsi que tous les documents nécessaires à l'exercice de leur droit."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Vie Académique",
    "title": "Renouvellements à l'Institut",
    "summary": "L'Institut de France a procédé à son renouvellement annuel : Camille Saint-Saëns accède à la présidence de l'Académie des beaux-arts, et le comte de Franqueville prend la direction des sciences morales.",
    "paragraphs": [
      "L'Académie des beaux-arts a procédé, au cours de sa séance d'hier, au renouvellement de son bureau pour l'année 1901.",
      "M. Camille Saint-Saëns, jusqu'alors vice-président, a été élu président à l'unanimité ; les fonctions de vice-président et de secrétaire ont été dévolues à MM. Jean-Paul Laurens et Gustave Larroumet.",
      "À l'Académie des sciences morales et politiques, on a procédé au même renouvellement. Le comte de Franqueville a été nommé président en remplacement de M. Germain, président sortant ; M. Sorel a été élu vice-président. Le bureau est complété par M. Georges Picot, secrétaire perpétuel."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'imbroglio autour d'une lettre à M. Dufayel",
    "summary": "Une confusion postale lie par erreur M. Dufayel aux Grands Magasins du Louvre. Le tribunal civil a tranché, réattribuant la correspondance à la véritable Société du Louvre.",
    "paragraphs": [
      "La crédulité est quelquefois excessive, vraiment. Une rumeur grossissait : on disait que M. Dufayel venait de se rendre acquéreur des Grands Magasins du Louvre. Ces jours derniers, le facteur remettait au Louvre une lettre mise à la poste à Châteauroux (Indre) et portant la suscription suivante : « Monsieur Dufayel, directeur des Grands Magasins du Louvre, Paris ».",
      "En présence d'un pareil fait, les directeurs des Grands Magasins du Louvre ont prié le tribunal civil de décider quel était le véritable destinataire de la lettre.",
      "M. Dufayel a tout naturellement décliné la haute qualité dont il était gratifié. Acte lui a donc été donné de ce qu'il reconnaît n'être ni directeur, ni intéressé à un titre quelconque dans la Société des Magasins du Louvre, et le président Baudouin a ordonné la remise de la lettre à la Société du Louvre ainsi que de toutes les lettres qui pourraient être adressées à M. Dufayel avec cette fausse qualification."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les médailles des Halles",
    "summary": "Par arrêté préfectoral, la médaille d'argent de la Ville de Paris est décernée à deux agents des Halles en récompense de leurs longues années de services dévoués.",
    "paragraphs": [
      "Par arrêté du président du Conseil, la médaille d'argent, dite médaille de la ville de Paris, a été décernée à un employé de la vente en gros du poisson (trente-trois ans de services) et à Cattia, syndic des forts à la vente en gros des beurres (trente ans de services)."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Transports",
    "title": "Améliorations au Métropolitain",
    "summary": "Pour répondre à l'accroissement notable de l'affluence dominicale et festive, la compagnie du Métropolitain renforce son service, portant la capacité de transport à 3 000 voyageurs.",
    "paragraphs": [
      "Le Métropolitain va augmenter le nombre de ses trains, la compagnie comptant transporter 3 000 voyageurs au lieu de 2 100. L'affluence des voyageurs, les jours de dimanche et de fêtes, avait rendu cette amélioration nécessaire."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Politique Étrangère",
    "title": "Le voyage de la reine Victoria",
    "summary": "Le lieu de villégiature printanier de la reine Victoria reste indécis. Son séjour sera subordonné à l'état de santé de sa fille, l'impératrice Frédéric.",
    "paragraphs": [
      "Le dernier numéro du Truth et le Daily Mail contiennent des renseignements concordants sur le voyage de la reine Victoria au printemps prochain. Contrairement aux bruits répandus, rien n'est encore décidé quant au lieu de séjour.",
      "Tout dépendra de l'état de santé de l'impératrice Frédéric, fille aînée de la reine Victoria. S'il est possible de transporter l'impératrice dans le Midi, elle sera logée au château du Cap d'Ail. La reine Victoria viendrait, dans ce cas, à Cimiez."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Social",
    "title": "Les Prévoyants de l'Avenir",
    "summary": "Les sociétaires des « Prévoyants de l'Avenir » sollicitent l'appui de la Chambre pour l'amendement Audiffred, afin de sécuriser leurs placements et régulariser leurs statuts.",
    "paragraphs": [
      "Une réunion a eu lieu hier dans un établissement de la route de Fontainebleau, où MM. Murpain, Congy et Truyts, pour le comité de défense, et Boutteville et Gruyt, pour le comité d'études, ont pris la parole.",
      "À l'issue de cette réunion, les sociétaires ont voté un ordre du jour demandant à la Chambre d'accepter l'amendement de M. Audiffred. Cet amendement invite le gouvernement à mettre les sociétés, dont « Les Prévoyants de l'Avenir », en demeure de se pourvoir devant le Conseil d'État pour obtenir l'approbation de nouveaux statuts garantissant une répartition équitable des avantages sociaux et la sécurité des placements."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Politique Municipale",
    "title": "Conseil Municipal de Paris : Séance du 29 décembre",
    "summary": "Sous la présidence de M. Grébauval, le Conseil municipal a voté des secours pour les indigents en 1901 et a décidé de confier désormais la gestion de la Bourse du travail directement aux chambres syndicales.",
    "paragraphs": [
      "La séance est ouverte à deux heures quarante sous la présidence de M. Grébauval. Le président annonce le décès de M. Prunières, ancien conseiller municipal du quartier du Pont-de-Flandre.",
      "Sur le vingtième siècle, M. E. Lepelletier dépose un projet prévoyant la distribution de 100 000 francs aux indigents le 1er janvier 1901 ; un vœu d'amnistie pour les employés des préfectures est également adopté.",
      "Concernant la Bourse du travail, un débat animé a eu lieu sur le droit de contrôle du Conseil face au décret ministériel du 17 juillet. Malgré les arguments de M. Navarre, le Conseil a voté la suppression du crédit de 1900 et l'ouverture d'un nouveau crédit de 110 000 francs pour aider directement les chambres syndicales, réclamant que la gestion de la Bourse leur soit intégralement confiée."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Sports",
    "title": "Activités sportives : Cyclisme, Lutte et Rugby",
    "summary": "Une fin de semaine riche en compétitions sportives à Paris : le duel cycliste Jacquelin-Baugé à l'Hippodrome, le match de lutte aux Folies-Bergère et une rencontre de rugby à Auteuil.",
    "paragraphs": [
      "Le match Jacquelin-Baugé : Le champion du monde Jacquelin et Baugé, le recordman du monde invaincu, s'affronteront ce soir, à dix heures et demie, sur la piste vélodromique de l'Hippodrome.",
      "Le critérium de lutte : La rencontre entre Constant le Boucher et Hackenschmidt, reprise aux Folies-Bergère, n'a pas encore donné de vainqueur malgré une lutte brutale prolongée jusqu'à minuit et demi.",
      "Le football : Un match de rugby intéressant se dispute aujourd'hui à Auteuil entre le Stade Français et les British Vétérans de Londres, équipe composée de nombreuses célébrités du sport anglais."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Tribunaux",
    "title": "Actualité judiciaire",
    "summary": "La Cour de cassation limite la pratique du magnétisme médical. Le tribunal correctionnel traite par ailleurs des affaires d'accidents de la circulation et l'arrestation d'un escroc opérant sous un faux nom.",
    "paragraphs": [
      "Magnétisme et médecine : La chambre criminelle de la Cour de cassation a cassé l'arrêt de la cour d'Angers qui avait acquitté un magnétiseur. Ces pratiques sont désormais formellement considérées comme un exercice illégal de la médecine.",
      "Accident place Clichy : Le tribunal a condamné le wattman Molinier à 200 francs d'amende et le cocher Doucet à 100 francs pour un accident de tramway, tout en rejetant l'application de la loi d'amnistie dans ce dossier.",
      "Escroquerie : Joseph Ramani, dit « l'Alpin », a été arrêté pour avoir extorqué des employés au moyen d'un faux bijou, épaulé par des complices se faisant passer pour des agents de sûreté."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tragédies et crimes dans Paris",
    "summary": "La misère et la violence marquent l'actualité parisienne : une septuagénaire est retrouvée morte de faim dans le XIIIe arrondissement, tandis que deux agressions sanglantes ont eu lieu à Belleville et rue de Meaux.",
    "paragraphs": [
      "La misère : Le corps d'une femme de soixante-dix-huit ans, Mme Fournier, a été retrouvé dans son logement de la rue de la Glacière ; celle-ci, qui n'avait pas été aperçue depuis Noël, est morte de faim.",
      "Tentatives de meurtre : À la sortie d'un débit de vins de la rue de Belleville, Paul Coriet a été frappé à deux reprises par Georges Laurent lors d'une rixe. Rue de Meaux, un journalier nommé Paul Dupaix a été poignardé par un individu surnommé « Petit Jules » à la suite d'une dispute provoquée par la jalousie."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident mortel à l'usine",
    "summary": "Drame du travail à Saint-Denis : un ouvrier a succombé à ses blessures après une chute mortelle depuis son véhicule dans l'enceinte d'une usine de la rue du Port.",
    "paragraphs": [
      "Un ouvrier travaillant dans la cour d'une usine située au 7, rue du Port, a perdu l'équilibre alors qu'il tombait du haut de son véhicule.",
      "Atteint d'une fracture du crâne, il est décédé deux heures plus tard à l'hôpital de Saint-Denis."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Faits Divers",
    "title": "Arrestation d'un complice de malfaiteurs à Saint-Denis",
    "summary": "Arthur Vassot, âgé de dix-neuf ans, a été arrêté à Saint-Denis. Complice de malfaiteurs, il a reconnu avoir jeté divers objets volés, dont une bicyclette et un revolver, dans la Seine près des Chantiers de la Loire.",
    "paragraphs": [
      "Arthur Vassot, âgé de dix-neuf ans, complice de deux malfaiteurs ayant commis plusieurs vols dans la banlieue de Paris, a été arrêté et mis à la disposition du commissaire de police.",
      "Vassot a déclaré avoir jeté dans la Seine, derrière les Chantiers de la Loire, les objets dérobés à Asnières, à savoir des bijoux, une bicyclette, des bottes vernies et un revolver."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Faits Divers",
    "title": "Démenti sur un incident au casino de Charenton",
    "summary": "M. B. Détaille, directeur du casino du Pont de Charenton, rétablit la vérité sur un incident récent : il ne s'agissait que de l'expulsion d'un trouble-fête, la représentation s'étant poursuivie normalement.",
    "paragraphs": [
      "M. B. Détaille, directeur du casino du Pont de Charenton, conteste un entrefilet paru dans notre journal concernant des dégâts matériels dans son établissement.",
      "Il précise que ses agents ont simplement expulsé un individu qui invectivait une artiste, incident banal dans les lieux publics, et que la représentation s'est déroulée normalement.",
      "Le parquet a toutefois chargé M. le juge Bengrand d'instruire les causes d'une bagarre survenue à Charenton le 23 décembre."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Faits Divers",
    "title": "Saisie d'une voiture volée à l'Exposition",
    "summary": "Les agents ont découvert, derrière le cimetière, une voiture abandonnée et démunie de plaque. Elle était chargée de rouleaux de fils de cuivre dérobés à l'annexe de l'Exposition universelle.",
    "paragraphs": [
      "Les agents ont découvert, derrière le cimetière, une voiture abandonnée dont la plaque d'immatriculation avait été retirée. Le véhicule contenait de nombreux rouleaux de fils de cuivre volés à l'annexe de l'Exposition."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Faits Divers",
    "title": "Arrestations à Versailles et Sèvres",
    "summary": "La police poursuit son action à Versailles contre le vagabondage. À Sèvres, le gendarme Gelan a capturé deux malfaiteurs armés, Séraphin Mangard et Émile Marat, surpris dans une demeure inhabitée.",
    "paragraphs": [
      "L'épuration se poursuit à Versailles avec l'arrestation de nombreux vagabonds et repris de justice.",
      "À Sèvres, le gendarme Gelan a arrêté deux malfaiteurs, Séraphin Mangard et Émile Marat, dans une propriété inhabitée. Ils y avaient entreposé de nombreux objets volés et étaient armés de revolvers et de poignards."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "La Température",
    "title": "Bulletin météorologique",
    "summary": "Bulletin du dimanche 30 décembre : journée marquée par une brume persistante. Les températures enregistrées varient de 2 degrés à Haparanda jusqu'à 10 degrés à Alger.",
    "paragraphs": [
      "Dimanche 30 décembre, le temps a été brumeux durant la majeure partie de la journée.",
      "Les relevés thermométriques indiquaient 2° à Haparanda, 4° à Paris, 10° à Alger, et 8° à Malte et Monaco."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Fruit Défendu - Deuxième partie",
    "summary": "L’enquête sur la disparition des deux enfants s’intensifie. Tandis que les agents Brûlot et Christian guettent le faux pas des suspects, le juge Marcel-François s’interroge sur le rôle trouble de la jeune fille aux fleurs.",
    "paragraphs": [
      "L’enquête sur la disparition du frère et de la sœur se poursuit, alimentée par des rumeurs persistantes sur une éventuelle vengeance de Lili, l'ancienne maîtresse de Villaurier.",
      "Les agents Brûlot et Christian débattent activement de la stratégie à adopter, attendant patiemment que les coupables s'enferrent dans leurs propres contradictions.",
      "L'identité de la jeune fille aux fleurs et la culpabilité réelle des suspects demeurent au cœur des préoccupations des enquêteurs et du juge Marcel-François.",
      "Le duel entre les différentes expertises judiciaires plonge Villaurier, le suspect, dans une angoisse profonde, alors qu'il attend le dénouement imminent de cette affaire."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Sciences",
    "title": "Les mystérieux signaux de Mars",
    "summary": "L'astronome Douglas signale d'étranges lueurs sur la planète Mars. Simultanément, un ingénieur allemand projette un voyage spatial audacieux vers l'astre rouge au moyen d'un appareil à propulsion explosive.",
    "paragraphs": [
      "L'astronome américain Douglas a rapporté avoir observé des signaux lumineux inexpliqués à la surface de la planète Mars, suggérant l'existence possible d'une civilisation intelligente.",
      "Parallèlement, l'ingénieur berlinois Hermann Ganswindt travaille sur un appareil en forme de projectile, qu'il prétend être capable d'atteindre Mars en moins de vingt-deux heures grâce à un système de propulsion par explosions de nitroglycérine."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales et musicales",
    "summary": "La Comédie-Française prépare une matinée, tandis que l'Opéra-Populaire reprend la Traviata. Quant au virtuose Paderewski, les rumeurs sur sa mort sont démenties : il travaille paisiblement en Suisse.",
    "paragraphs": [
      "La Comédie-Française propose prochainement une matinée gratuite. À l'Opéra-Populaire, la reprise de la Traviata est annoncée avec le concours de Mlle Courtenay.",
      "Des modifications ont été apportées à l'opérette « Le Roi Dagobert » aux Bouffes-Parisiens. Le bruit circulant concernant la mort de Paderewski est formellement démenti, le virtuose travaillant actuellement en Suisse."
    ]
  }
];
