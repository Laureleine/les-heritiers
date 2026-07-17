// Date: 1900-07-02
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-07-02 (Version Restaurée, 33 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La question du vagabondage",
    "summary": "Une réflexion sur l'inefficacité historique de la répression face au vagabondage, préconisant l'assistance par le travail pour les indigents et une fermeté accrue envers les irréductibles.",
    "paragraphs": [
      "On a souvent cité la phrase de Napoléon à son ministre de l'Intérieur : « Il faut qu'au commencement de la belle saison la France présente le spectacle d'un pays sans mendiants ». Malgré le caractère impératif de cette injonction, on sait assez que les lois napoléoniennes ne furent pas plus efficaces contre le vagabondage que ne l'avaient été précédemment les ordonnances royales.",
      "Peut-être M. Louis Rivière a-t-il donné la meilleure raison de ces insuccès répétés en reconnaissant qu'ils tiennent, pour une bonne part, à la difficulté extrême que présente la question. Il ne s'agit pas, en effet, de réprimer simplement une action délictueuse. Le problème touche aux droits primordiaux de la liberté humaine.",
      "Sans doute le gouvernement a le devoir de vérifier l'identité de l'inconnu qui circule sur les routes, sans ressources et sans métier ; mais ce voyageur est peut-être un ouvrier inoccupé en quête de travail.",
      "La statistique officielle établit, d'autre part, que les asiles communaux de l'hospitalité de nuit reçoivent en moyenne la visite de 500 000 individus par an. Beaucoup ne sont que des déclassés. Un obscur instinct de mouvement les chasse devant eux.",
      "Le système répressif employé au cours du siècle repose sur une distinction entre le mendiant et le vagabond. Le mendiant est traité avec douceur s'il est domicilié ; le vagabond est interné.",
      "En résumé, de bonnes maisons d'assistance par le travail pour les indigents recommandables, une pénalité extrêmement forte pour les vagabonds irréductibles, c'est à quoi l'expérience d'un siècle de lutte contre le vagabondage semble avoir conduit nos législateurs."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "La Main Gauche - Zette (Deuxième partie)",
    "summary": "Thérèse Belcourt et Jean Rédal, en proie à de sombres préoccupations, organisent leur avenir financier. Thérèse s'apprête à solliciter son propriétaire, M. Brigoin, au sujet de ses arriérés de loyer.",
    "paragraphs": [
      "Thérèse Belcourt et Jean Rédal discutent de leurs soucis financiers. Thérèse cherche à soulager ses tourments alors que Rédal, encore marqué par le meurtre de sa femme, exprime son intention de se consacrer à ses enfants.",
      "Le dialogue se poursuit alors qu'ils marchent vers l'entrepôt. Rédal promet son aide financière à Thérèse dès que ses échéances seront réglées. Thérèse se rend ensuite chez son propriétaire, M. Brigoin, pour discuter de son loyer en retard."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Élection législative du 1er juillet dans l'Ain",
    "summary": "M. Pierre Baudin, ministre des Travaux publics, est largement élu député de l'arrondissement de Belley, succédant à M. Giguet, nommé sénateur.",
    "paragraphs": [
      "Dans l'arrondissement de Belley, M. Pierre Baudin, ministre des Travaux publics, a été élu député avec 6 881 voix, contre 4 146 à M. Cottin et 237 à M. Chapeau.",
      "Cette élection avait lieu en remplacement de M. Giguet, élu sénateur. M. Pierre Baudin est originaire de l'Ain et a accepté de se présenter à la demande de ses compatriotes."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "International",
    "title": "Les événements de Chine",
    "summary": "La situation demeure critique à Pékin, où les nouvelles du corps diplomatique sont contradictoires, tandis que les puissances internationales renforcent leurs troupes pour reprendre Tien-Tsin.",
    "paragraphs": [
      "La situation des ministres étrangers à Pékin demeure incertaine. Des télégrammes contradictoires circulent : certains annoncent l'assassinat du ministre d'Allemagne, d'autres indiquent que le corps diplomatique s'est réfugié à la légation anglaise.",
      "Le commandant du navire Elbn télégraphie que toutes les légations auraient été brûlées, sauf celles de l'Angleterre, de la France et de l'Allemagne. Par ailleurs, des troupes internationales, dont les forces russes, japonaises et anglaises, renforcent leur présence pour tenter de reprendre Tien-Tsin."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "La catastrophe de New-York",
    "summary": "Un incendie dévastateur aux docks du Lloyd de l'Allemagne du Nord à New-York provoque des centaines de victimes et des dégâts matériels se chiffrant en plusieurs millions de dollars.",
    "paragraphs": [
      "Un incendie dévastateur a ravagé les docks du Lloyd de l'Allemagne du Nord à New-York. On estime le nombre de victimes entre 250 et 350 personnes. Les dégâts matériels sont évalués entre 10 et 20 millions de dollars.",
      "Le feu, parti de balles de coton, s'est propagé aux transatlantiques Main, Saale et Bremen. Des centaines de personnes ont dû se jeter à l'eau pour échapper aux flammes."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Tuée à coups de chaise à Laval",
    "summary": "À Meslay, un drame conjugal a été révélé : le chef cantonnier Foucault, âgé de 51 ans, a sauvagement assassiné son épouse de 62 ans, tentant en vain de dissimuler son crime sous le masque d'un accident domestique.",
    "paragraphs": [
      "Un assassinat d'une rare violence a été commis à Meslay par le nommé Foucault, chef cantonnier âgé de cinquante et un ans, sur la personne de son épouse, une femme de soixante-deux ans.",
      "Si le mari avait initialement tenté de faire croire à une chute accidentelle, l'examen médico-légal a formellement contredit ses déclarations en révélant que la malheureuse avait été assommée à l'aide d'une chaise brisée par ses soins."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Chronique",
    "title": "Les aspirants suédois à Paris",
    "summary": "Malgré une météo maussade, les cadets suédois du navire Saga et les élèves du Borda ont visité Versailles aux côtés du prince Wilhelm de Sudermanie, avant d'être honorés par le ministre de la Marine.",
    "paragraphs": [
      "Les cadets de la Saga et leurs camarades du Borda ont bravé la pluie persistante pour visiter les splendeurs de Versailles. Le prince Wilhelm de Sudermanie accompagnait le groupe dans cette excursion historique.",
      "À l'issue de cette visite, ils ont été reçus avec distinction par M. le ministre de la Marine lors d'une réception donnée en leur honneur, scellant ainsi les liens d'amitié entre les deux nations."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Double suicide à Montmartre",
    "summary": "Au 55, boulevard de Clichy, le jeune François Houbert et Marthe Descamps ont mis fin à leurs jours par arme à feu, accablés par une lassitude profonde de l'existence qu'ils ont exprimée dans une lettre d'adieu.",
    "paragraphs": [
      "Un drame poignant s'est déroulé, hier, au 55, boulevard de Clichy. François Houbert, âgé de vingt ans, et la jeune Marthe Descamps, à peine dix-sept ans, ont été retrouvés inanimés, ayant mis fin à leurs jours par arme à feu.",
      "Avant de commettre cet acte désespéré, les deux infortunés avaient pris soin de laisser une lettre explicative. Ils y déclaraient, avec une tristesse résignée, qu'ils étaient las de vivre et ne voyaient plus d'issue à leur existence."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "Nouvelles de l'Exposition",
    "summary": "Malgré les intempéries, l'affluence à l'Exposition universelle se rétablit. Le Grand Palais dévoile une exceptionnelle collection de mobilier centennal, retraçant avec éclat les styles Empire et Restauration.",
    "paragraphs": [
      "Malgré un temps orageux et incertain, l'affluence à l'Exposition universelle a repris une vigueur nouvelle dès la mi-journée. La curiosité du public ne faiblit point devant les merveilles rassemblées sur le Champ de Mars.",
      "Le Grand Palais, véritable écrin de ces trésors, présente notamment une section consacrée au mobilier centennal, retraçant avec une précision historique les fastueux styles de l'Empire et de la Restauration, qui suscitent l'admiration des visiteurs et des érudits."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Le mobilier historique de l'époque impériale",
    "summary": "Une rétrospective exceptionnelle au Grand Palais met à l'honneur le mobilier impérial, des chefs-d'œuvre d'ébénisterie de Jacob Desmalter aux créations emblématiques du Consulat et de la Restauration.",
    "paragraphs": [
      "La commode en ébène du maître, le métier à tapisserie de l'Impératrice exécuté par Jacob, le bureau de Napoléon orné de victoires, le secrétaire de l'Empereur sur lequel il signa son acte d'abdication, un magnifique guéridon circulaire en mosaïque de « pietra dura », le berceau du Roi de Rome reproduit par Ottin et Thomire... tous ces objets rappellent le style raffiné de l'époque impériale.",
      "Ces meubles, à l'exception de ceux dont Prud'hon fut l'inspirateur, dénotent un plagiat très servile de l'art ancien. Tout y est grec, romain, égyptien, étrusque. Ce style prit naissance dans l'atelier de David au Louvre.",
      "Jacob, dit Jacob Desmalter, entreprit sous le Consulat l'ameublement de Saint-Cloud et de la Malmaison. Il fut l'ébéniste attitré de Napoléon et des deux impératrices. Plus tard, sous la Restauration, Jacob Desmalter fils releva la maison avec des ouvrages rappelant le bon temps de la marqueterie."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Agriculture",
    "title": "Le Congrès de l'Agriculture",
    "summary": "Sous la présidence de M. Jean Dupuy, le Congrès international de l'Agriculture s'est ouvert à Paris. M. Jules Méline a souligné l'urgence du crédit agricole et la lutte nécessaire contre la surproduction.",
    "paragraphs": [
      "La séance solennelle d'ouverture du congrès international des agriculteurs a eu lieu, hier après-midi, dans le palais du Cours-la-Reine, sous la présidence de M. Jean Dupuy, ministre de l'Agriculture.",
      "Douze cents congressistes environ avaient répondu à l'appel de la commission d'organisation. Sur l'estrade officielle, on notait la présence de MM. Jules Méline et Ribot.",
      "Le ministre a souhaité la bienvenue aux délégués étrangers et aux sommités agronomiques de l'Europe. M. Jules Méline a ensuite prononcé le discours d'ouverture, abordant notamment la question du crédit agricole et les problèmes de surproduction et de mévente."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'entrevue difficile",
    "summary": "Thérèse Belcourt, en proie à de graves embarras financiers, tente vainement de négocier son maintien dans son logement auprès de M. Brigoin, son propriétaire, qui demeure inflexible devant ses suppliques.",
    "paragraphs": [
      "Thérèse Belcourt, dans une situation financière des plus précaires, tente de négocier son maintien dans son logement face à M. Brigoin, son propriétaire.",
      "M. Brigoin, bien que se disant bienveillant, insiste sur l'impossibilité pour une femme seule de subvenir à ses besoins et à ceux de ses parents dans les conditions actuelles, suggérant à Thérèse des solutions alternatives à sa situation de célibataire."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Social",
    "title": "L'Assistance publique à l'Exposition",
    "summary": "Le pavillon de la Ville de Paris met en lumière les progrès spectaculaires de l'Assistance publique, comparant les équipements hospitaliers d'autrefois au matériel moderne et humanitaire actuel.",
    "paragraphs": [
      "Le pavillon de la Ville de Paris expose les services de l'Assistance publique. Les visiteurs ont pu comparer le matériel rudimentaire du siècle dernier avec les équipements hospitaliers modernes, tels que le lit perfectionné et les nouveaux appareils de transport des blessés.",
      "L'exposition souligne l'évolution admirable accomplie par les administrations au cours des dernières années, tout en présentant les travaux des asiles et les portraits des bienfaiteurs de l'Assistance."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Chronique de l'Exposition : Fête de nuit et entrées",
    "summary": "Si le mauvais temps a modéré l'affluence diurne, les splendeurs nocturnes et les jeux d'eau du Château d'Eau ont attiré les foules. Le cours des tickets d'entrée se maintient à 50 centimes.",
    "paragraphs": [
      "La température peu clémente a freiné l'ardeur des visiteurs durant la matinée et l'après-midi, mais les fontaines lumineuses et les splendeurs du Château d'Eau ont attiré une foule compacte en soirée.",
      "Le mauvais temps persistant de samedi a provoqué une diminution sensible dans le nombre des visiteurs. Le cours officiel des tickets s'est maintenu hier dimanche à 50 centimes."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Commémoration",
    "title": "Le Centenaire de Desaix à Clermont-Ferrand",
    "summary": "Clermont-Ferrand a rendu un vibrant hommage au général Desaix. Le ministre de la Guerre a salué en lui l'incarnation de la fraternité républicaine entre le chef et le soldat.",
    "paragraphs": [
      "Clermont-Ferrand a célébré le centenaire du général Desaix. La foule s'est massée sur la place de Jaude pour acclamer le ministre de la Guerre et les délégations venues de toute l'Auvergne.",
      "Le ministre de la Guerre, après le défilé, a prononcé un discours hommage louant le caractère de Desaix et son attachement profond au soldat, soulignant que l'armée républicaine avait aboli le servage militaire et favorisé la fraternité entre chefs et soldats."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique",
    "title": "Activités diplomatiques et militaires",
    "summary": "Le colonel Mouravieff est en visite à Marseille pour étudier l'organisation des logis régimentaires, tandis qu'une nouvelle loi sénatoriale étend les distinctions militaires aux membres de la réserve et de la territoriale.",
    "paragraphs": [
      "Le colonel Mouravieff est arrivé hier matin à Marseille, accueilli par la Société des anciens militaires. Il est venu étudier l'organisation et le fonctionnement des logis régimentaires.",
      "Une nouvelle loi votée par le Sénat augmente le nombre de décorations accordées aux membres de la réserve et de l'armée territoriale, permettant ainsi de récompenser de nombreux dévouements précieux."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Informations diverses",
    "summary": "Le président de la Chambre, M. Paul Deschanel, a présidé une fête au Palais-Bourbon. Par ailleurs, un accident ferroviaire à Braine-le-Comte fait des blessés, et l'actualité diplomatique s'agite en Égypte et en Bulgarie.",
    "paragraphs": [
      "Le président de la Chambre, M. Paul Deschanel, a offert une fête au Palais-Bourbon, destinée aux milieux ouvriers et industriels, malgré une météo peu clémente.",
      "Un grave accident de chemin de fer a eu lieu en gare de Braine-le-Comte, causant des blessures à vingt-trois personnes.",
      "La reine a nommé le khédive grand-croix de l'ordre de Victoria. En Bulgarie, des mesures de censure ont été prises à l'encontre de la presse."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Cérémonie de remise des médailles de la Société de sauvetage",
    "summary": "La Société de sauvetage a honoré le commandant Eletz pour sa bravoure. Des médailles ont aussi été remises aux sauveteurs de la Comédie-Française et un drapeau a été confié aux hospitaliers sauveteurs bretons.",
    "paragraphs": [
      "Le grand diplôme d'honneur de la Société a été décerné au commandant Eletz, de la garde impériale russe, qui, au péril de sa vie, a arrêté un cheval emballé traînant une voiture dans laquelle se trouvaient deux personnes.",
      "Des médailles de vermeil ont été distribuées au soldat Dupouy, de l'infanterie de marine, ainsi qu'à plusieurs autres récipiendaires pour des actes de sauvetage accomplis lors de l'incendie de la Comédie-Française.",
      "La cérémonie s'est poursuivie avec la remise du drapeau à la section parisienne des hospitaliers sauveteurs bretons, avant qu'un banquet ne réunisse les lauréats et les membres de la société à l'Exposition."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Sports",
    "title": "Concours de chiens de bergers",
    "summary": "L'hippodrome de Levallois-Perret a accueilli le concours du Club français du chien de berger, mettant en compétition les chiens de Brie, de Beauce et les bouviers dans des épreuves exigeantes de conduite de troupeaux.",
    "paragraphs": [
      "Le grand concours et l'exposition de chiens de bergers, organisés par le Club français du chien de berger et présidés par M. Emmanuel Boulet, ont eu lieu à l'hippodrome de Levallois-Perret.",
      "Le public a pu assister aux épreuves consistant à conduire un troupeau de vingt-cinq moutons à travers plusieurs obstacles. De nombreuses récompenses ont été remises aux gagnants dans les catégories chiens de Brie, chiens de Beauce, chiens de berger et chiens de bouviers."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Social",
    "title": "Fête de la chambre syndicale des employés",
    "summary": "Réunie au Trocadéro, la chambre syndicale des employés a entendu M. Jaurès plaider pour le repos hebdomadaire. La soirée s'est conclue par un concert exceptionnel en présence de Sarah Bernhardt.",
    "paragraphs": [
      "La fête organisée par la chambre syndicale des employés au Trocadéro a connu un très grand succès.",
      "M. Martinet, secrétaire général, a rappelé que les bénéfices étaient destinés aux employés frappés pour leur propagande syndicale. M. Jaurès, invité à prendre la parole, a développé le programme des revendications des employés, réclamant notamment le repos hebdomadaire.",
      "L'ancien député de Carmaux a également évoqué les récents événements d'Extrême-Orient, avant de laisser place à un concert auquel Mme Sarah Bernhardt a participé."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Les Tribunaux",
    "title": "L'attentat contre le prince de Galles",
    "summary": "Jean-Baptiste Sipido, dix-sept ans, comparaît aux assises du Brabant pour l'attentat du 4 avril contre le prince de Galles à Bruxelles. Trois complices sont également jugés pour ce crime fomenté à la Maison du Peuple.",
    "paragraphs": [
      "Jean-Baptiste Sipido, âgé de dix-sept ans, comparaît devant la cour d'assises du Brabant pour répondre de l'attentat commis le 4 avril dernier contre le prince de Galles, en gare du Nord de Bruxelles.",
      "Trois autres individus, accusés de complicité, comparaissent à ses côtés. Sipido aurait agi par haine envers la reine Victoria, selon un projet qui aurait été fomenté au sein de la Maison du Peuple."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Dernière Heure",
    "title": "Les événements de Chine",
    "summary": "L'amiral américain stationné à Takou exprime ses craintes concernant les hostilités, redoutant qu'elles ne soudent les Chinois aux Boxers. Il préconise des renforts massifs pour progresser vers Pékin sans nuire à la diplomatie.",
    "paragraphs": [
      "L'amiral américain à Takou se montre réservé sur les hostilités menées contre les forces chinoises. Il redoute que les attaques des alliés n'aient poussé ces dernières à se joindre aux rangs des Boxers.",
      "Il estime que des renforts considérables seront nécessaires pour assurer la progression vers Pékin, tout en évitant de compromettre les délicates négociations diplomatiques actuellement en cours."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Actualités",
    "title": "Deux accidents à l'Exposition",
    "summary": "L'Exposition universelle est endeuillée par deux accidents : une chute dans les sous-sols du Trocadéro pour M. Louis Benière et une blessure grave causée par une chute de matériel près du pont d'Iéna.",
    "paragraphs": [
      "M. Louis Benière, entrepreneur de travaux publics, s'est fracturé une côte en faisant une chute dans les sous-sols des jardins du Trocadéro.",
      "Par ailleurs, une planche de staff s'est détachée près du pont d'Iéna, blessant grièvement M. Gaston Raveaud, employé de la Compagnie du gaz, qui visitait l'Exposition en famille."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Acte de vandalisme cours la Reine",
    "summary": "Une tentative d'incendie a visé le piédestal de la statue de M. Canovas del Castillo, cours la Reine. Les malfaiteurs, après avoir imbibé le monument de pétrole, ont été mis en fuite par une patrouille d'agents.",
    "paragraphs": [
      "Des individus ont tenté d'incendier le piédestal de la statue de M. Canovas del Castillo, cours la Reine, après l'avoir préalablement enduit de pétrole. Une ronde d'agents a heureusement mis les vandales en fuite."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression d'un cocher",
    "summary": "Un cocher a été sauvagement agressé par trois individus dans le passage Honce, à Ménilmontant. Dévalisé et grièvement blessé, la victime a été transportée d'urgence à l'hôpital Tenon.",
    "paragraphs": [
      "Un cocher a été violemment agressé par trois individus dans le passage Honce, à Ménilmontant. Roué de coups et dévalisé, il a dû être transporté à l'hôpital Tenon dans un état grave."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Vie Municipale",
    "title": "Fête de gymnastique des écoles de Paris",
    "summary": "Au bois de Vincennes, 4 500 élèves ont participé à la grande fête de gymnastique des écoles communales. M. Mérillon a honoré l'engagement des professeurs en remettant plusieurs promotions académiques.",
    "paragraphs": [
      "La grande fête de gymnastique des écoles communales s'est déroulée au bois de Vincennes. Ce sont 4 500 élèves qui ont défilé et exécuté des exercices variés, faisant preuve d'une discipline et d'une tenue tout à fait remarquables.",
      "À cette occasion, M. Mérillon a annoncé plusieurs promotions dans l'ordre des officiers d'académie. Cette distinction, décernée aux professeurs et aux directeurs d'école présents, vient saluer leur dévouement constant à l'instruction physique de la jeunesse."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Vie Municipale",
    "title": "La Rosière de Montreuil-sous-Bois",
    "summary": "La ville de Montreuil-sous-Bois a célébré le couronnement de Mlle Berthe Boucot, désignée rosière pour sa vertu. Elle a reçu le legs Désiré Préaux des mains du maire, M. Hémard.",
    "paragraphs": [
      "La ville de Montreuil-sous-Bois a solennellement célébré le couronnement de sa seconde rosière annuelle, Mlle Berthe Boucot. Cette jeune fille, dont la vertu et le dévouement envers les siens sont cités en exemple, a reçu les félicitations de ses concitoyens.",
      "Elle a reçu le montant du legs Désiré Préaux ainsi qu'une bague en or lors d'une cérémonie officielle présidée par le maire, M. Hémard, entouré du conseil municipal et d'une population nombreuse venue célébrer l'élue."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes limitrophes",
    "summary": "La banlieue parisienne est frappée par plusieurs drames : un accident de voiture à Clichy, un drame conjugal à Gennevilliers, un éboulement mortel à Mantes et un suicide à Arpajon.",
    "paragraphs": [
      "À Clichy, une fillette a été grièvement blessée par une voiture de laitier dans des conditions restant à déterminer. À Gennevilliers, un ancien agent de police a tiré trois coups de revolver sur son épouse, la blessant sérieusement.",
      "À Mantes, un ouvrier a trouvé la mort dans l'effondrement d'une carrière survenu en début de matinée. Enfin, à Arpajon, un homme a mis fin à ses jours à son domicile pour échapper à des poursuites judiciaires imminentes."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Informations Financières",
    "title": "Le marché et les titres financiers",
    "summary": "Le marché boursier enregistre un tassement sur les titres ferroviaires. La Banque Ottomane reste stable, tandis que la Compagnie de la Camargue profite de la garantie de l'État.",
    "paragraphs": [
      "La Banque de Paris, sans motif apparent, s'inscrit en léger recul. Aucune variation notable n'est à signaler concernant le Comptoir d'Escompte ou la Société Générale. La Banque Ottomane, dont le dividende est fixé à 10 shillings, demeure bien tenue.",
      "L'Exposition exerce une influence sensible sur les recettes des grandes compagnies. Toutefois, un tassement se fait sentir : le Lyon a varié, tandis que le Nord, l'Est et le Midi ont fléchi ; l'Orléans et l'Ouest, pour leur part, conservent leur fermeté.",
      "Les obligations des chemins de fer de la Camargue demeurent recherchées, permettant des arbitrages avantageux. Les titres de la Compagnie bénéficient de la garantie absolue du département du Rhône et de l'État."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Faits Divers",
    "title": "Jugement pour vente de vin falsifié",
    "summary": "La Cour d'appel de Paris a confirmé la condamnation de Jean-Pierre-Fortuné Duhaut pour vente de vin falsifié, ordonnant amende, confiscation de la marchandise et affichage public du jugement.",
    "paragraphs": [
      "Extrait des minutes du greffe de la Cour d'appel de Paris. Sur l'appel interjeté par le nommé Duhaut Jean-Pierre-Fortuné, marchand de vins, à l'encontre d'un jugement du tribunal de police correctionnelle de la Seine le déclarant coupable de mise en vente de vin falsifié le 16 mars 1899.",
      "La Cour d'appel de Paris a confirmé intégralement le jugement condamnant le prévenu à cinquante francs d'amende, à la confiscation du vin saisi ainsi qu'à l'affichage du présent jugement aux frais du condamné."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Feuilleton",
    "title": "Voix d'outre-tombe",
    "summary": "Au sein du domaine, Gabrielle sollicite une entrevue particulière avec Armand Breuilhet. Tandis que le marquis de Sineuse observe la scène, la tension monte entre les protagonistes dans l'intimité du jardin.",
    "paragraphs": [
      "Gabrielle se retourna vers le marquis de Sineuse : « C'est à vous que la comtesse de Saint-Amand m'a confiée, mon cousin, dit-elle. Voulez-vous me permettre de disposer de moi quelques instants ? »",
      "Armand Breuilhet offrit son bras à la jeune fille. Sineuse, le cœur dilaté d'une joie bizarre, remarqua que Gabrielle ne le prenait pas. Elle jouait avec un magnifique éventail ancien ayant appartenu à la mère de Michel.",
      "« J'aime mieux marcher seule », dit-elle, car les instances de l'avocat la froissaient. Ils firent quelques pas, enveloppés par les senteurs des roses et des massifs qui s'étalaient devant eux.",
      "Gabrielle demanda à Armand de s'asseoir : « Je désire que l'attente du marquis de Sineuse soit aussi peu longue que possible ». Elle parlait avec une très grande aisance, tandis que lui était affreusement pâle."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Informations Financières",
    "title": "Émissions et résultats de sociétés",
    "summary": "Succès financier pour les Chemins de fer du Sud de l'Autriche. Le marché parisien affiche une tendance favorable pour les Tramways de la Seine et une progression des bénéfices pour l'Éclairage par l'acétylène.",
    "paragraphs": [
      "L'émission des obligations des Chemins de fer du Sud de l'Autriche a été un brillant succès. Pour les souscripteurs de 1 à 20 obligations, il est attribué la moitié des demandes.",
      "La Société Parisienne Électrique offre l'occasion d'un placement avantageux. Les Tramways de Paris et du département de la Seine finissent en reprise sensible, justifiée par les dividendes croissants.",
      "Le conseil d'administration de la Compagnie urbaine d'Éclairage par l'acétylène présente un rapport montrant des bénéfices en hausse. La situation financière de la Société est excellente."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Chronique de la Bourse",
    "title": "Valeurs industrielles et minières",
    "summary": "Ralentissement des valeurs russes sous la pression des ventes étrangères. À l'inverse, les titres de la Huelva Central Copper démontrent une santé solide avec un bénéfice de 125 000 francs pour leur premier exercice.",
    "paragraphs": [
      "Les valeurs industrielles russes subissent un temps d'arrêt, les ventes précipitées de Bruxelles et de Saint-Pétersbourg ayant écarté les acheteurs français. La dépression semble toutefois avoir atteint une limite extrême.",
      "Les actions de la Compagnie générale de Charbonnages ont fait leur apparition sur le marché. Le Rio a fait preuve de meilleures dispositions cette semaine.",
      "Le rapport de la Huelva Central Copper est particulièrement intéressant, l'extraction ayant permis un bénéfice de 125 000 francs lors du premier exercice."
    ]
  }
];
