// Date: 1900-09-22
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-09-22 (Version Restaurée, 33 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La Grande Séance",
    "summary": "En ce 22 septembre 1899, les maires de France célèbrent à Paris l'anniversaire de la proclamation de la République, décret historique de la Convention nationale remontant à 1792.",
    "paragraphs": [
      "Aujourd'hui, en un enthousiaste et unanime élan, les maires de France, réunis dans la capitale en un banquet de fraternité, célèbrent la République. La date d'une telle manifestation ne pouvait être mieux choisie.",
      "En effet, c'est le 22 septembre, il y a cent sept ans, le 22 septembre 1792, que le mot République fut pour la première fois officiellement prononcé par le seul pouvoir qui restât debout en France, la Convention nationale.",
      "Depuis la veille, la royauté était abolie. Mais la Convention n'avait pas proclamé la République. Ce ne fut que le lendemain, sur la proposition de Billaud-Varenne, député de Paris, qu'elle décréta que les actes publics porteraient dorénavant cette date : L'an premier de la République."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Souffrance de vivre",
    "summary": "M. Vernier craint le scandale après avoir surpris une scène suspecte impliquant mademoiselle Jeannine et un inconnu au milieu de la nuit.",
    "paragraphs": [
      "Je l'avais reconnue tout de suite. Et devine un peu ce qu'elle faisait ? Ça te serait difficile, mon gars ! Eh bien, tout simplement, du bout des doigts, elle envoyait un bécot au particulier qui jouait des jambes.",
      "M. Vernier ne voulait pas de scandale. Ça l'aurait tarabusté, évidemment, que j'aille seriner dans le pays. J'ai vu un homme qui sortait la nuit d'avec mademoiselle Jeannine."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Deux femmes assassinées",
    "summary": "Un drame sanglant a frappé Marennes : un homme nommé Gaudoit a sauvagement assassiné une mère et sa fille avant de mettre fin à ses jours dans le canal.",
    "paragraphs": [
      "Un horrible crime, dont les péripéties ne sont pas encore exactement connues, ni les causes nettement déterminées, a été commis la nuit dernière, vers une heure, dans une maison isolée située dans la commune de Marennes, près du passage à niveau qui conduit à Lindon.",
      "Une femme, Madame M., qui y habitait avec sa fille, a été assaillie et frappée de quatorze coups de couteau par un nommé Gaudoit. La mère morte, le farouche meurtrier a tourné sa rage contre la fille, à qui il a porté au ventre un terrible coup mortel.",
      "Son double crime accompli, Gaudoit a pris la fuite et s'est fait justice en se noyant dans le canal."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Au Ministère de l'Intérieur",
    "summary": "Le ministre de l'Intérieur a refusé la demande d'audience du conseil municipal de Paris concernant l'absence d'une loi municipale définitive pour la capitale.",
    "paragraphs": [
      "Après avoir décidé de supprimer le banquet des maires qui devait avoir lieu à Vincennes, le bureau du conseil municipal de Paris avait pris la résolution de demander au ministre de l'Intérieur une audience pour lui exposer la situation faite à la ville de Paris par l'absence d'une loi municipale définitive.",
      "M. Waldeck-Rousseau a écrit hier matin une lettre à M. de Selves, préfet de la Seine, pour l'informer qu'il ne pouvait accueillir favorablement la demande d'audience que le bureau du conseil municipal venait de lui adresser par l'entremise de M. Escudier."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "La Question Budgétaire",
    "summary": "La commission du budget valide la reconstruction de l'Imprimerie nationale et préconise une réforme judiciaire visant la suppression de la chambre des requêtes à la Cour de cassation.",
    "paragraphs": [
      "Dans la séance qu'elle a tenue hier, la commission du budget a terminé l'examen des budgets de l'Imprimerie nationale et du ministère de la Justice.",
      "La commission s'est montrée favorable à la reconstruction de l'Imprimerie nationale. En ce qui concerne le budget de la Justice, elle s'est prononcée, à l'unanimité, pour une motion invitant le gouvernement à présenter une loi pour la suppression de la chambre des requêtes à la Cour de cassation et la création d'une deuxième chambre civile."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le Drame de la Rue d'Orsel",
    "summary": "Un drame passionnel a ensanglanté la rue d'Orsel : l'ouvrier Auguste Constant a tiré six coups de revolver sur son ancienne maîtresse, la veuve Certain, lors d'une entrevue violente.",
    "paragraphs": [
      "Dans l'après-midi d'hier, vers deux heures et demie, un drame sanglant s'est déroulé dans l'immeuble situé au 4, rue d'Orsel. Un ouvrier tailleur, nommé Auguste Constant, entretenait des relations avec une dame, la veuve Certain, qui occupe un logement dans la même maison.",
      "L'après-midi même, à l'aide d'un subterfuge, il se retrouva en présence de sa maîtresse ; mais cette fois, il était armé d'un revolver et bien résolu à se venger. L'entrevue durait à peine depuis cinq minutes que six détonations se firent entendre.",
      "Auguste Constant venait de décharger complètement son arme sur la malheureuse femme qui, tout ensanglantée, criait : « Au secours ! À l'assassin ! »"
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un Réveil désagréable",
    "summary": "Une habitante de la rue Saint-Marc a été victime d'une brutale tentative d'assassinat en pleine nuit. Un inconnu l'a surprise dans son sommeil et étranglée jusqu'à l'évanouissement.",
    "paragraphs": [
      "Une tentative d'assassinat, dont l'auteur n'a pas encore été retrouvé, a été commise l'avant-dernière nuit, en plein cœur de Paris, dans l'immeuble portant le numéro 19 de la rue Saint-Marc.",
      "Mlle Michel fut réveillée en sursaut par une secousse imprimée à son lit. Elle vit alors un individu qui se tenait debout devant elle. Effrayée, elle poussa un cri. « Tais-toi. Si tu cries, je te tue », lui dit le malfaiteur.",
      "L'inconnu bondit alors sur elle, lui mit un genou sur la poitrine pour étouffer ses cris, puis, la saisissant à la gorge, serra avec une telle vigueur que la pauvre femme s'évanouit."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Actualités",
    "title": "Le Banquet des Tuileries",
    "summary": "Les travaux pour le banquet des maires s'intensifient. Pour respecter les délais, le chantier fonctionne jour et nuit avec le renfort de cent ouvriers et de soldats du génie.",
    "paragraphs": [
      "En ce dernier jour de préparatifs fiévreux, les curieux étaient venus nombreux autour des baraquements du banquet des maires. L'aspect général des tentes, semblables à une fourmilière humaine avec leurs équipes d'ouvriers évoluant dans tous les sens, était d'ailleurs fort pittoresque.",
      "Pour obvier à tout retard, le travail de nuit a commencé depuis avant-hier. Cent ouvriers supplémentaires ont été engagés et cent soldats du génie les aident de leur mieux, de minuit à cinq heures du matin, à la lueur de globes électriques."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique et Militaire",
    "title": "La mobilisation des troupes à Chartres",
    "summary": "Une manœuvre de mobilisation exemplaire à Chartres a permis l'embarquement coordonné des troupes sur le réseau de l'Ouest et de l'État, sans aucun accroc logistique.",
    "paragraphs": [
      "Dès deux heures du matin, des colonnes se mettaient en marche à travers les rues silencieuses de Chartres pour se rendre dans les gares où les embarquements devaient avoir lieu.",
      "La gare de Chartres, où le mouvement est toujours considérable, n'a reçu que seize trains. Le reste du réseau de l'Ouest comprenait deux stations d'embarquement : Clevilliers, sur la ligne de Dreux, d'où partaient sept trains, et Saint-Luperce, sur la voie maîtresse du Mans, où l'on en a formé six.",
      "Le réseau de l'État a reçu trente trains, dont un seul par la gare de Chartres. Le quai de Luce, qui dessert les stocks militaires, a servi au mouvement le plus important pour les trains se dirigeant sur Orléans, Sens et Montargis.",
      "L'administration de l'État a merveilleusement tiré parti de ces gares. Les ingénieurs, MM. Moisson et Ledrain, ont préparé avec tant de soin tous les détails de cette sorte d'essai de mobilisation qu'aucun accroc ne s'est produit.",
      "Les généraux Brugère, de Négrier et Pendezec sont partis ce matin par le train de dix heures."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique et Militaire",
    "title": "Lettres de remerciements du général Brugère",
    "summary": "Le général Brugère a officiellement remercié les autorités et la population de Chartres pour l'accueil patriotique réservé aux troupes lors des manœuvres.",
    "paragraphs": [
      "Avant de quitter la ville, le général Brugère, directeur des manœuvres d'armées, a adressé une lettre au préfet d'Eure-et-Loir pour remercier la population de l'accueil chaleureux réservé aux soldats et souligner le patriotisme dont elle a fait preuve.",
      "Le général Brugère a également envoyé une lettre au maire de Chartres, exprimant sa gratitude envers les habitants de la ville pour leurs sentiments de patriotisme et saluant le concours dévoué de la municipalité."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Étranger",
    "title": "Les événements de Chine",
    "summary": "Le gouvernement anglais envisage l'évacuation de ses troupes de Pékin en raison de l'hiver. Parallèlement, les troubles s'étendent près de Canton, tandis que les Alliés consolident leurs positions à Peï-Tsang.",
    "paragraphs": [
      "Les Anglais semblent avoir modifié leurs intentions concernant le maintien de leurs troupes à Pékin. Une dépêche officielle annonce qu'ils s'apprêtent à évacuer la capitale du Céleste-Empire, craignant les rigueurs de l'hiver et les difficultés croissantes de ravitaillement.",
      "La situation demeure fort menaçante. Des troubles ont éclaté près de Canton, dans la sous-préfecture de Sun-Tae, où des villages entiers ont été anéantis. À Peï-Tsang, les troupes alliées ont réussi à s'emparer des forts après un engagement particulièrement vif."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Étranger",
    "title": "Troubles à Canton",
    "summary": "Face à l'insécurité grandissante et aux destructions de villages près de Canton, le corps consulaire français sollicite l'envoi immédiat de renforts militaires avec l'appui de la canonnière l'Avalanche.",
    "paragraphs": [
      "Le consul de France à Canton télégraphie que des troubles graves ont éclaté aux abords de la ville. Plusieurs villages ont été détruits et d'autres sont actuellement assiégés par des bandes hostiles ; les missionnaires ont toutefois pu s'échapper à temps.",
      "Face à l'impuissance des forces du vice-roi à maintenir l'ordre, le corps consulaire a formellement demandé l'envoi de troupes supplémentaires. Le chancelier du consulat de France, soutenu par la canonnière française l'Avalanche, accompagnera ces renforts."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Étranger",
    "title": "L'Empereur et l'Impératrice de Chine",
    "summary": "Un décret impérial officialise l'arrivée des souverains à Taï-Yuen-Fou et ordonne la construction d'un nouveau palais à Hsian-Fou, qui est désormais désignée comme la nouvelle capitale de l'Empire.",
    "paragraphs": [
      "Un décret impérial annonce l'arrivée de l'empereur et de l'impératrice douairière à Taï-Yuen-Fou. Le texte ordonne au gouverneur du Chan-Si de débloquer les fonds nécessaires pour l'érection d'un nouveau palais à Hsian-Fou, ville qui deviendra désormais la capitale du Céleste-Empire."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Explosion à bord d'un torpilleur",
    "summary": "Lors d'essais en mer au large du Tréguier, une explosion est survenue à bord du torpilleur 151, causant des blessures au quartier-maître mécanicien Eugène Plocli.",
    "paragraphs": [
      "Une violente explosion s'est produite à bord du torpilleur 151, en face du Tréguier, au cours d'essais en mer. Le quartier-maître mécanicien Eugène Plocli a été blessé par des éclats de verre et a été immédiatement transporté à l'hôpital maritime."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Mortel accident de montagne en Savoie",
    "summary": "Un tragique accident de montagne en Savoie a causé la mort de l'artilleur Pezet, qui a fait une chute mortelle en tentant de regagner le fort Lestai avec son compagnon Déglise.",
    "paragraphs": [
      "Deux artilleurs de la garnison d'Albertville, Déglise et Pezet, se sont égarés dans la forêt en revenant du village d'Epiguy vers le fort Lestai. En cherchant leur chemin, ils ont basculé dans le vide d'une hauteur de cinquante mètres.",
      "L'artilleur Pezet a trouvé la mort dans cette chute. Son compagnon, Déglise, malgré de graves blessures, a réussi à remonter pour donner l'alerte, mais les secours arrivés sur les lieux n'ont pu que constater le décès."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Social",
    "title": "La grève des mariniers à Rouen",
    "summary": "Le mouvement social des mariniers rouennais s'achève. Si les revendications intégrales ne sont pas satisfaites, les ouvriers obtiennent une hausse des salaires et une reconnaissance syndicale sans représailles.",
    "paragraphs": [
      "La grève des mariniers à Rouen est terminée. Bien que n'ayant pas obtenu l'intégralité de leurs revendications, les grévistes ont arraché une augmentation de salaire ainsi que la reconnaissance officielle du syndicat par les compagnies.",
      "Ces dernières se sont formellement engagées à ne procéder à aucun renvoi pour faits de grève, actant ainsi une résolution pacifiée du conflit social."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Étranger",
    "title": "Le sort de la bouée d'Andrée",
    "summary": "La bouée de l'explorateur Andrée, retrouvée sur les côtes norvégiennes, a été ouverte à Stockholm. Elle renferme un manuscrit autographe dont le post-scriptum serait de la main de Strindberg.",
    "paragraphs": [
      "La dernière bouée d'Andrée, découverte sur les côtes norvégiennes, a été ouverte solennellement devant l'Académie des sciences à Stockholm.",
      "Elle contenait un manuscrit écrit de la main même d'Andrée, tandis que le post-scriptum qui l'accompagne serait, selon les premières expertises, de la main de Strindberg."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Chronique Historique",
    "title": "Le projet du marquis de Villette et les banquets révolutionnaires",
    "summary": "Retour sur la tradition des banquets républicains sous la Révolution et l'anecdote historique du dîner offert à Louis XIV par le prévôt des marchands en 1661.",
    "paragraphs": [
      "Le marquis de Villette avait formulé, lors de la prise de la Bastille, l'idée charmante de voir le peuple parisien communier dans un banquet public, rompant ainsi les barrières sociales. Une idée qui faillit être exécutée.",
      "L'époque de la Révolution fut marquée par ces repas en commun. Lors de chaque victoire ou événement significatif, les citoyens descendaient leurs tables dans la rue, renforçant l'union des esprits et des cœurs autour de la jeune République.",
      "Le texte rappelle également l'anecdote de Louis XIV s'invitant chez le prévôt des marchands en 1661. Malgré ses griefs contre la Fronde, le roi, conquis par un repas fastueux, finit par accorder les franchises réclamées par la ville."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Politique Sociale",
    "title": "Le congrès national du Parti ouvrier français à Ivry-sur-Seine",
    "summary": "Le congrès du Parti ouvrier français à Ivry réunit 280 délégués. Au programme : lutte de classe, action politique des élus socialistes et fermeté contre les compromissions avec les fractions bourgeoises.",
    "paragraphs": [
      "Le congrès national du Parti ouvrier français s'est réuni à l'hôtel de ville d'Ivry-sur-Seine, rassemblant 280 délégués, parmi lesquels des représentants internationaux venus d'Italie, de Russie, d'Amérique et de Belgique.",
      "La séance a été marquée par l'annonce du licenciement d'ouvriers syndiqués à Lyon, poussant le congrès à exiger l'intervention immédiate du gouvernement. Les débats ont porté sur la socialisation des moyens de production, la politique coloniale et les modalités de participation des élus socialistes aux banquets officiels.",
      "La commission exécutive a été renouvelée et le congrès a réaffirmé sa volonté inébranlable de poursuivre la lutte de classe, sans compromis avec les fractions politiques bourgeoises."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Déplacements officiels et deuils",
    "summary": "Chronique des activités présidentielles, obsèques du général Borgnis-Desbordes à Versailles et décès de Mme Jules Simon, veuve de l'académicien.",
    "paragraphs": [
      "Le Président de la République a quitté Rambouillet pour regagner l'Élysée. Mme Loubet et plusieurs membres du gouvernement multiplient les réceptions en l'honneur des maires venus pour le banquet des Tuileries.",
      "Les obsèques du général Borgnis-Desbordes, commandant en chef des troupes d'Indochine, ont eu lieu à Versailles lors d'une cérémonie imposante, sans discours ni couronnes, conformément à ses dernières volontés.",
      "Mme Jules Simon, veuve de l'ancien académicien, est décédée à Paris. Par ailleurs, l'Association amicale du Mérite agricole a tenu son banquet annuel au palais d'Orsay sous la présidence de M. Jean Dupuy."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une inondation place Clichy",
    "summary": "Une rupture de la conduite d'eau de l'Avre a provoqué une inondation majeure place Clichy ce matin, entraînant une interruption totale de la circulation et des tramways dans le quartier.",
    "paragraphs": [
      "Une rupture de la grande conduite d'eau de l'Avre a provoqué, ce matin, une inondation considérable sur la place Clichy. Ce sinistre a eu pour conséquence immédiate l'interruption complète de la circulation, ainsi que celle des services de tramways circulant dans ce secteur.",
      "Les services de la voirie, aidés par les sapeurs-pompiers, sont intervenus promptement pour sécuriser les lieux et entamer les réparations nécessaires afin de permettre le rétablissement rapide du trafic."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incident au Tribunal de Commerce",
    "summary": "Un début d'incendie s'est déclaré dans les bureaux des prud'hommes du tribunal de commerce en raison d'une bûche tombée du foyer. Le personnel a maîtrisé le feu avant toute propagation.",
    "paragraphs": [
      "Un incident fort heureusement sans gravité s'est produit au tribunal de commerce. Un début d'incendie, causé par une bûche enflammée tombée par mégarde hors du foyer, a endommagé les rideaux des bureaux des prud'hommes.",
      "Les flammes, qui menaçaient de se propager aux dossiers voisins, ont été rapidement maîtrisées par l'intervention prompte du personnel administratif présent sur les lieux."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un forcené dans un train",
    "summary": "Un représentant de commerce marseillais, pris d'un accès de folie furieuse dans le train de Marseille à Paris, a été maîtrisé par des voyageurs puis remis à la police à son arrivée.",
    "paragraphs": [
      "Un voyageur, identifié comme étant un représentant de commerce marseillais nommé Marcel P., a été pris d'un soudain accès de folie furieuse dans le train reliant Marseille à Paris.",
      "Après avoir importuné les voyageurs, l'homme a été vigoureusement maîtrisé par plusieurs passagers qui ont réussi à le contenir jusqu'à l'entrée en gare. À l'arrivée à Paris, le forcené a été aussitôt conduit par les autorités au commissariat de la gare de Lyon pour y être interrogé."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une arrestation à l'avenue Ledru-Rollin",
    "summary": "Une concierge de l'avenue Ledru-Rollin a fait preuve d'un grand sang-froid en enfermant un cambrioleur, le récidiviste Louis Chauvet, dans sa loge avant l'arrivée de la police.",
    "paragraphs": [
      "Une concierge de l'avenue Ledru-Rollin, faisant preuve d'un sang-froid remarquable, a réussi à enfermer un cambrioleur dans sa loge avant même l'arrivée des agents de la force publique.",
      "L'individu, un ancien instituteur repris de justice nommé Louis Chauvet, a fini par avouer son forfait sitôt mis en présence des autorités. Il a été déféré au parquet dans la journée."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "International",
    "title": "La persistance du conflit aux Philippines",
    "summary": "Selon une revue américaine, la guerre aux Philippines s'éternise, rappelant la longue et coûteuse campagne hollandaise à Atchin où aucune issue n'a été trouvée en vingt-sept ans.",
    "paragraphs": [
      "Une revue américaine souligne avec insistance que la guerre aux Philippines risque de se prolonger encore longtemps. L'article établit un parallèle avec la campagne hollandaise à Atchin, où, après vingt-sept ans de lutte opiniâtre et des pertes humaines considérables, aucune solution définitive n'a encore été trouvée par le gouvernement."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités de la Comédie-Française et de l'Opéra-Comique",
    "summary": "La Comédie-Française propose aujourd'hui au Trocadéro un programme dédié aux poètes de la Révolution, tandis que l'Opéra-Comique donne « Carmen » avec Mlle Dema.",
    "paragraphs": [
      "Rappelons que c'est aujourd'hui qu'a lieu, au Trocadéro, la matinée de la Comédie-Française, redemandée avec le superbe programme consacré aux théâtres et poètes de la Révolution.",
      "Ce soir, à l'Opéra-Comique, représentation de Carmen, avec Mlle Dema dans le rôle-titre."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Matinées et spectacles du dimanche",
    "summary": "Le programme des matinées de dimanche à Paris est complet, proposant les classiques à la Comédie-Française et à l'Opéra-Comique ainsi que les spectacles de cirque et music-halls habituels.",
    "paragraphs": [
      "Matinées de demain dimanche : à la Comédie-Française (salle du Nouveau-Théâtre), l'École des Femmes ; à l'Opéra-Comique, Mignon ; le Vaudeville, le Gymnase, le théâtre Sarah-Bernhardt, le Châtelet, l'Ambigu, la Renaissance, le Cluny et le Déjazet présenteront les mêmes spectacles que le soir.",
      "Au Nouveau-Cirque, au Cirque-d'Hiver, aux Folies-Bergère, à l'Olympia, au Casino de Paris, à la Cigale, à l'Hippodrome et au cirque Medrano, des spectacles divers sont au programme."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Enseignement",
    "title": "Concours d'admission du Conservatoire",
    "summary": "Le Conservatoire fixe les dates des concours d'admission pour la session d'octobre et novembre, couvrant les disciplines instrumentales, le chant et la déclamation.",
    "paragraphs": [
      "Les inscriptions pour les concours d'admission débuteront le 1er octobre prochain : Harpe et piano (hommes), lundi 8 octobre, à une heure ; Violon, mardi 9 octobre, à midi ; Chant (hommes et femmes), lundi 15 octobre, à midi ; Déclamation (hommes), lundi 29 octobre, à midi ; Déclamation (femmes), mardi 30 octobre et mercredi 31 octobre, à midi ; Contrebasse, alto, violoncelle, samedi 3 novembre, à dix heures ; Instruments à vent (bois), mercredi 7 novembre, à une heure ; Instruments à vent (cuivre), jeudi 8 novembre, à une heure."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Concerts et Divertissements",
    "title": "Actualités des salles parisiennes",
    "summary": "Tour d'horizon des spectacles parisiens : de la reprise du « Rêve » à l'Opéra-Comique aux succès de Fregoli à l'Olympia et à la revue « Y a d'la femme ! » à Parisiana.",
    "paragraphs": [
      "On annonce pour le jeudi 27, à l'Opéra-Comique, la reprise du Rêve de M. Alfred Bruneau. M. Ouret vient d'engager à l'Opéra-Populaire le ténor bien connu des concerts Colonne, M. Émile Catenueve.",
      "Pour fuir la cohue de demain à l'Exposition et passer agréablement son après-midi, il est difficile de trouver mieux que l'Olympia, où Fregoli, plus prodigieux et plus fêté que jamais, donne ses dernières représentations.",
      "De l'avis général de la critique, « Y a d'la femme ! », la revue de MM. Victor de Cottens et Adrien Vély, à Parisiana, est une des meilleures qu'on ait vues depuis longtemps.",
      "Une grande matinée, réservée aux familles, aura lieu demain dimanche aux Folies-Bergère, avec le superbe programme du soir. Deux nouvelles scènes d'actualité viennent d'être ajoutées à la revue de la Scala : celle du sociétaire que le voisinage du Casino incite à mêler d'acrobaties la sévérité des alexandrins, où Max Dearly se montre tour à tour impayable imitateur et clown prestigieux, et où une gentille débutante, Mlle Taxil, lui donne la réplique, et la scène du Congrès féminin, abondante en jolies femmes et en costumes exquis.",
      "Maria la Bella, la jolie et charmante danseuse du Casino de Paris, figure au programme de la matinée de demain dimanche, ainsi que la troupe russe des Aquamarinov.",
      "Nous allons revoir Guguste ; il vient en effet d'être engagé au nouvel Hippodrome, où il retrouvera son succès d'autrefois."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Sports",
    "title": "Actualités sportives et cyclistes",
    "summary": "Le cyclisme est à l'honneur avec l'annonce de la course Toulouse-Luchon, une réunion sur piste et le Grand Prix d'Aix-la-Chapelle prévu ce dimanche.",
    "paragraphs": [
      "La course Toulouse-Luchon et retour en bicyclettes, qui se disputera le 30 de ce mois, s'annonce comme devant être un gros succès.",
      "Le prochain jeudi populaire, le 27 septembre, sera consacré à une réunion cyclo-pédestre qui sera donnée à la nouvelle piste municipale.",
      "Demain dimanche se disputera le Grand Prix d'Aix-la-Chapelle."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Fêtes",
    "title": "Fêtes des environs de Paris",
    "summary": "Programme des festivités du dimanche 23 septembre : vendanges à Argenteuil, courses vélocipédiques, spectacles forains, concerts et attractions variées organisés dans les communes entourant la capitale.",
    "paragraphs": [
      "Voici la liste des fêtes pour le dimanche 23 septembre : Argenteuil (Fête des Vendanges), La Saussaye-lès-Hurepoix (bal), Les Essarts-le-Roi (courses vélocipédiques), Montesson (concert, bal), Montfermeil (foire annuelle), Montolivet (jeux variés), Montreuil-sous-Bois (bal, aérostat), Poissy (fête à la Maladrerie), Pontoise (spectacles forains), Saint-Cloud (fête foraine), Saint-Cyr-sur-Morin (fête de Blercy), Suisnes-en-Brie (jeux divers), Vantes (concert), Versailles (Grandes Eaux), Villejuif (mât de cocagne), Villiers-le-Bel (concours de tir)."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Agriculture",
    "title": "État des récoltes et cours des vins",
    "summary": "Bilan viticole et cidricole : perspectives favorables dans le Midi et le Bordelais, récolte excellente en Champagne et production abondante de pommes à cidre, malgré des débouchés à l'exportation incertains.",
    "paragraphs": [
      "Les ventes de raisins ont été soutenues depuis l'ouverture des vendanges. Dans l'Hérault, l'Aude, l'Armagnac et le Bordelais, les perspectives de récoltes s'annoncent satisfaisantes, bien que la qualité demeure inégale selon les terroirs.",
      "Dans le Toulois, la sécheresse garantit une excellente qualité, malgré un rendement plus modeste. En Champagne, la situation est particulièrement favorable avec une récolte qui dépasse largement la moyenne habituelle.",
      "La production de pommes à cidre s'annonce très abondante cette année, atteignant environ 80 millions d'hectolitres sur l'ensemble du territoire français, mais les possibilités d'exportation vers l'Allemagne et la Belgique semblent actuellement limitées."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Faits Divers",
    "title": "Le Mystère de la Rue Vavin",
    "summary": "L'enquête se poursuit sur le drame passionnel survenu rue Vavin. L'épouse du caissier Jean Rédal, employé chez M. Duhalier, demeure au centre des interrogations dans cette affaire aux circonstances obscures.",
    "paragraphs": [
      "Il est inutile de revenir sur les détails du drame qui s'est déroulé dernièrement dans le pavillon situé entre cour et jardin, rue Vavin, tout près du Luxembourg. La victime est l'épouse infidèle d'un nommé Jean Rédal, caissier chez M. Duhalier, le plus riche marchand de chiffons de Paris.",
      "La reconnaissance, dans ce pavillon de la rue Vavin, de la femme infidèle du caissier Jean Rédal, avait-elle été officiellement confirmée ? La femme de Jean Rédal était-elle réellement morte pour le monde ?"
    ]
  }
];
