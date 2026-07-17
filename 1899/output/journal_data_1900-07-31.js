// Date: 1900-07-31
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-07-31 (Version Restaurée, 26 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique",
    "title": "La réforme de l'orthographe",
    "summary": "La campagne pour la simplification de l'orthographe française, entamée depuis plusieurs années, aboutit enfin à une réforme assouplissant les règles strictes de l'Université pour alléger les épreuves des étudiants.",
    "paragraphs": [
      "La campagne menée depuis cinq ou six ans contre les chinoiseries de la grammaire et certaines absurdités de notre orthographe vient d'aboutir. Nous entrons en plein dans la réforme du système orthographique dont l'Université de 1810 avait posé les puissantes bases.",
      "Il ne faut, en ces examens, que cinq fautes dans une dictée pour entraîner l'échec d'un candidat. Cet ostracisme se trouvera désormais grandement atténué, parce qu'on ne considérera plus comme des fautes des manières d'écrire condamnées peut-être par certains puristes, mais dont l'erreur n'est pas suffisamment démontrée.",
      "On va faire table rase de ces subtilités. On réduira le nombre des exceptions aux règles, on tolérera mainte expression qui était considérée comme une faute de syntaxe.",
      "Le but qu'ils poursuivent est excellent. Il s'agit d'épargner à ceux qui étudient notre langue des tortures et des complications mnémotechniques tout à fait inutiles, de faire en sorte que l'orthographe, convenablement simplifiée, s'apprenne mieux et plus vite.",
      "Jean Frollo"
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Main Gauche - Troisième partie",
    "summary": "Lors d'une partie de pêche, Lydie manque de se noyer en tentant de capturer un saumon. Elle est sauvée de justesse par Joé Sims, le cow-boy, avant que le groupe ne regagne la demeure de M. Janck.",
    "paragraphs": [
      "Le silence se fit de nouveau, les barques s'immobilisèrent. « C'est toujours lui qui prend le premier, dit Alexander, mais c'est toujours moi qui prends le plus gros. »",
      "Mistress Eiecker, au contraire, harponnait plusieurs pièces, expliquant à mistress Janck comment il fallait s'y prendre. Lydie, ayant aperçu un saumon fantastique, perdit l'équilibre en tentant de le harponner et tomba à l'eau.",
      "Elle se sentit sauvée par Joé Sims, le cow-boy, qui la ramena à la surface avant qu'elle ne coule. Une fois remise sur la berge et changée, elle demanda à William de récompenser son sauveur pour son acte héroïque.",
      "Une heure après, sauf Lydie peut-être, tout le monde dormait sous le toit de M. Janck."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Actualité Internationale",
    "title": "Assassinat du Roi d'Italie",
    "summary": "Le roi Humbert Ier a été assassiné hier soir à Monza. Ce crime, perpétré par l'anarchiste Gaetano Bresci, suscite l'indignation mondiale face à cet acte qualifié de crime de droit commun.",
    "paragraphs": [
      "Il n'y aura qu'une voix dans le monde civilisé pour flétrir l'odieux assassinat qui vient d'être commis sur le roi d'Italie. Les attentats de cette nature n'ont aucun caractère politique ; la conscience de tous les peuples les qualifie de crimes de droit commun.",
      "Le roi est mort hier soir, à onze heures et demie, à Monza, à la suite d'un attentat. L'assassin, nommé Gaetano Bresci, un anarchiste originaire de Prato, a été arrêté.",
      "La reine, informée de la perte, a déclaré : « C'est le plus grand crime du siècle. Humbert était bon et loyal, personne plus que lui n'a aimé son peuple. »"
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Réactions et condoléances officielles",
    "summary": "Suite à l'assassinat du roi Humbert, le Président Émile Loubet exprime l'indignation de la France. Le gouvernement ordonne la mise en berne des drapeaux et l'annulation des fêtes officielles.",
    "paragraphs": [
      "Le Président de la République, Émile Loubet, a adressé un télégramme au roi d'Italie pour lui faire part de l'indignation unanime de la France contre cet acte odieux.",
      "Le gouvernement a décidé de mettre en berne les drapeaux des ministères et édifices publics aujourd'hui et le jour des obsèques. Toutes les fêtes officielles prévues à Paris sont supprimées jusqu'après les funérailles."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Diplomatie",
    "title": "À l'ambassade d'Italie",
    "summary": "L'ambassade d'Italie à Paris reçoit de nombreuses marques de sympathie après l'attentat. Le Président de la République s'y est rendu personnellement pour présenter ses condoléances au comte Tornielli.",
    "paragraphs": [
      "Une énorme stupeur règne à l'ambassade d'Italie. Le comte Tornielli, ambassadeur d'Italie à Paris, est plongé dans une rêverie douloureuse, recevant les marques de sympathie et les visites de condoléances de nombreuses notabilités françaises et étrangères.",
      "Le Président de la République, accompagné de M. Delcassé, s'est rendu à l'ambassade pour exprimer personnellement sa profonde tristesse au comte Tornielli."
    ]
  },
  {
    "id": 6,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incident autour de la troupe persane",
    "summary": "Un membre de la troupe persane, inquiété par un gardien de la paix à cause d'une méprise sur le port d'armes, a été remis en liberté par le commissaire Pélardy après vérification de son honorabilité.",
    "paragraphs": [
      "Un artiste de la troupe persane, se rendant rue de l'Université, a été arrêté à tort par un gardien de la paix, sur la foi d'un membre de la suite du Shah de Perse qui le suspectait d'une tentative d'attentat parce qu'il déposait un ceinturon et un poignard chez son concierge.",
      "L'artiste, s'exprimant mal en français, a été conduit devant le commissaire Pélardy. Son patron s'est porté garant de son honorabilité et le magistrat l'a remis en liberté, l'incident ayant été exagéré par l'imagination de certains en un pseudo-attentat."
    ]
  },
  {
    "id": 7,
    "page": 3,
    "category": "Politique",
    "title": "Le Congrès de la Paix",
    "summary": "Le conseil du congrès interparlementaire pour l'arbitrage et la paix s'est réuni au Sénat. Il a admis le président du Parlement de l'État libre d'Orange comme membre, tout en adaptant son programme.",
    "paragraphs": [
      "Le conseil directeur du congrès interparlementaire pour l'arbitrage et la paix s'est réuni au Sénat, sous la présidence de M. E. Labiche.",
      "Le conseil a admis M. Wessels, président du Parlement de l'État libre d'Orange, comme membre au titre du gouvernement, avec des restrictions pour satisfaire les délégués anglais. Par contre, le mémoire des délégués boërs n'a pas été admis à la discussion, mais sera distribué aux congressistes.",
      "Il a été décidé de supprimer les fêtes officielles en raison de l'assassinat du roi d'Italie et de demander au Président de la République d'avancer la réception à l'Élysée."
    ]
  },
  {
    "id": 8,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un crime mystérieux à Lyon",
    "summary": "À Lyon, l'assassinat d'une jeune fille suscite une vive émotion. L'enquête se poursuit sous la direction du juge Pellenc, tandis que le suspect Joseph Dulac continue de nier les faits malgré les charges.",
    "paragraphs": [
      "L'assassinat d'une jeune fille à Lyon provoque une vive émotion. M. Marty, secrétaire général de la préfecture, a dû organiser un service d'ordre à la morgue où défilent des milliers de personnes.",
      "L'autopsie révèle que la victime portait deux blessures non mortelles par elles-mêmes. La mort est due à une hémorragie lente et l'agonie a probablement été longue. Des fragments de melon ont été trouvés dans l'estomac.",
      "Le juge d'instruction M. Pellenc poursuit son enquête. Joseph Dulac, arrêté, nie toute participation malgré des témoignages accablants et des mensonges relevés dans ses interrogatoires. La confrontation avec le corps n'a pas donné de résultat probant."
    ]
  },
  {
    "id": 9,
    "page": 3,
    "category": "Justice",
    "title": "Les drames de l'alcoolisme",
    "summary": "La cour d'assises de la Seine a condamné Eugénie Clauss, une jeune femme, à trois ans de prison pour avoir tué accidentellement un voisin lors d'une altercation violente.",
    "paragraphs": [
      "La cour d'assises de la Seine a jugé Eugénie Clauss, âgée de vingt-cinq ans et alcoolique, qui, lors d'une dispute avec son amant, a fini par tuer un voisin, le sieur Hannoch, qui refusait de lui prêter ses vêtements alors qu'elle cherchait à se travestir pour échapper à ceux qui voulaient la maîtriser.",
      "Le jury a retenu les coups ayant déterminé la mort sans intention de la donner. Elle a été condamnée à trois ans de prison."
    ]
  },
  {
    "id": 10,
    "page": 3,
    "category": "Justice",
    "title": "Nouvelles judiciaires",
    "summary": "Le docteur Devillers est renvoyé devant le tribunal correctionnel pour répondre d'outrages envers le docteur Pozzi, suite à une instruction menée par le juge André.",
    "paragraphs": [
      "Le docteur Devillers est renvoyé devant le tribunal correctionnel pour outrages envers le docteur Pozzi, à la suite d'une instruction du juge André."
    ]
  },
  {
    "id": 11,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie rue Roux",
    "summary": "Un incendie important a ravagé, hier matin, les magasins et ateliers d'électricité de la maison Milite, située impasse Roux. Malgré l'intervention rapide des secours, les dégâts matériels sont très importants.",
    "paragraphs": [
      "Un incendie important s'est déclaré hier matin dans les magasins et ateliers d'électricité de la maison Milite, impasse Roux. Malgré la rapidité des secours, les dégâts sont considérables, mais aucun accident de personne n'est à déplorer."
    ]
  },
  {
    "id": 12,
    "page": 3,
    "category": "Faits Divers",
    "title": "Étrange amusement",
    "summary": "Robert Lelarge, jeune ouvrier ébéniste, a été arrêté pour avoir tiré des coups de revolver par sa fenêtre, blessant deux passants. Il prétendait n'avoir eu pour but que d'essayer son arme à feu.",
    "paragraphs": [
      "Un jeune ouvrier ébéniste, Robert Lelarge, a été arrêté après avoir tiré des coups de revolver par sa fenêtre, blessant deux passants. Interrogé, il a déclaré avoir voulu simplement procéder à l'essai de son arme."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Social",
    "title": "Distribution des prix à l'hôpital Saint-Louis",
    "summary": "La cérémonie annuelle de distribution des prix a eu lieu hier à l'hôpital Saint-Louis. Elle récompense les élèves fréquentant les cours dispensés aux enfants atteints de la pelade et de la teigne.",
    "paragraphs": [
      "La distribution annuelle des prix aux élèves fréquentant les cours de l'hôpital Saint-Louis a eu lieu hier. Ces cours sont spécialement destinés aux enfants atteints de la pelade et de la teigne."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes limitrophes",
    "summary": "Une série d'événements tragiques a frappé les environs de Paris : accidents du travail, noyades, découvertes macabres et agressions ont marqué la chronique des communes limitrophes en cette fin de journée.",
    "paragraphs": [
      "À Villeneuve-la-Garenne, une femme et son enfant ont été grièvement blessés par un cheval emporté. À Bois-Colombes, un cordonnier s'est ouvert la gorge. À Bezons, un menuisier s'est noyé. À Ermont, six machines ont été dérobées. À Pantin, un cadavre a été découvert sur une voie de garage. À Aubervilliers, un ouvrier s'est jeté par la fenêtre. À Issy, une violente agression a eu lieu dans une usine. À Joinville-le-Pont, un ouvrier a été foudroyé par le courant. À Dourdan, une rosière a été élue. Enfin, à Coulommiers, un enfant de quinze mois s'est noyé."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Économie",
    "title": "Les fêtes de la Bénédictine",
    "summary": "La ville de Fécamp a célébré avec faste l'inauguration de la nouvelle distillerie de la Bénédictine et le monument dédié à son fondateur, marquant la renaissance industrielle après l'incendie de 1892.",
    "paragraphs": [
      "À Fécamp, ont été inaugurées la nouvelle distillerie de la Bénédictine ainsi que le monument à la mémoire de son fondateur, M. A. Le Grand aîné. La cérémonie a été marquée par des festivités grandioses, célébrant ainsi la reconstruction complète de l'usine après le sinistre de 1892."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Faits Divers",
    "title": "Assassinat dans son lit",
    "summary": "Un drame sanglant a frappé Vimeux : Joseph Allart fut découvert sans vie dans sa chambre, la tête fracassée. Son épouse et son fils, principaux suspects, ont été arrêtés par la gendarmerie malgré leurs dénégations.",
    "paragraphs": [
      "Un crime mystérieux a été perpétré à Vimeux : Joseph Allart a été retrouvé mort dans son lit, portant de graves blessures à la tête. La gendarmerie a arrêté sa femme et son fils, qui nient toute participation au forfait."
    ]
  },
  {
    "id": 17,
    "page": 4,
    "category": "Cyclisme",
    "title": "Résultats des courses cyclistes",
    "summary": "Compte rendu des épreuves cyclistes avec les temps réalisés par les coureurs Mathias, Jules Bardet, Piard, ainsi que les résultats des tandems Giraud-Léger et Girard-Granger.",
    "paragraphs": [
      "Voici les résultats des épreuves cyclistes : Mathias (U. C. P.) 4 h. 15 m. ; Jules Bardet (U. V. F.) 4 h. 11 m. ; Piard (C. C. P.) 4 h. 15 m.",
      "Tandems : Giraud-Léger (P. Montreuil) 3 h. 50 m. ; Girard-Granger (U. V. F.) 4 h. 39 m."
    ]
  },
  {
    "id": 18,
    "page": 4,
    "category": "Sport",
    "title": "Course d'une heure à Anvers",
    "summary": "La réunion cycliste d'Anvers a été marquée par une course d'une heure disputée, où Elkes a triomphé en couvrant 51 kilomètres devant Taylor et Burger.",
    "paragraphs": [
      "La course d'une heure, portée au programme de la réunion d'avant-hier à Anvers, réunissait les engagements d'Elkes, Taylor, Simar et Burger.",
      "Elkes en est sorti vainqueur, couvrant 51 kilomètres. Taylor suit avec 50 kilomètres 100 mètres, devant Burger."
    ]
  },
  {
    "id": 19,
    "page": 4,
    "category": "Faits Divers",
    "title": "Grandes courses cyclistes à Agen",
    "summary": "Bilan des épreuves cyclistes internationales et en tandem à Agen : victoires de Meyers dans l'épreuve individuelle et de l'équipe Banker-Meyer dans la catégorie tandem.",
    "paragraphs": [
      "Grandes courses cyclistes à Agen avant-hier. Voici les principaux résultats :",
      "Internationale : Meyers, 1er ; Banker, 2e ; Cornet, 3e.",
      "Tandems : Banker-Meyer, 1er ; Parnac-Cornet, 2e."
    ]
  },
  {
    "id": 20,
    "page": 4,
    "category": "Faits Divers",
    "title": "La course Bordeaux-Arcachon",
    "summary": "La classique Bordeaux-Arcachon a rencontré un vif succès. Despuisot s'est imposé dans la catégorie amateurs, tandis que Lagarde a remporté la course des vétérans.",
    "paragraphs": [
      "La course Bordeaux-Arcachon a obtenu avant-hier un gros succès. Voici les résultats :",
      "Amateurs : 1er Despuisot, en 1 h. 17 m. ; 2e Testone, en 1 h. 22 m. ; 3e Baudoin, en 1 h. 28 m.",
      "Vétérans : 1er Lagarde, en 1 h. 39 m. ; 2e Faugeras, en 1 h. 42 m. ; 3e Baurade, en 1 h. 45 m."
    ]
  },
  {
    "id": 21,
    "page": 4,
    "category": "Aérostation",
    "title": "Concours d'altitude",
    "summary": "Résultats du concours d'altitude des aérostats ayant eu lieu avant-hier, avec les lieux d'atterrissage des équipages du Saint-Louis, Touring-Club, Centaure, Rive, Aéro-Club et Pégase.",
    "paragraphs": [
      "Voici les résultats du concours d'altitude d'avant-hier : le Saint-Louis, piloté par le capitaine Balzan, a atterri à Prunay (Marne), à 17 kilomètres de Reims. Le Touring-Club, du capitaine Juchmes, a atterri au camp de Châlons. Le Centaure, du capitaine de la Vaulx, a atteint une altitude comprise entre 4 000 et 5 000 mètres, tout comme le Rive du capitaine Faure. L'Aéro-Club, du capitaine Castillon de Saint-Victor, s'est maintenu entre 3 000 et 4 000 mètres. Enfin, le Pégase, du capitaine Leloup, a atterri à Coulommiers."
    ]
  },
  {
    "id": 22,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Nouvelles des spectacles",
    "summary": "Programme des scènes parisiennes : représentations au Vaudeville et à la République, retour du Cyrano de Bergerac, et entrée prochaine de l'œuvre de Balzac dans le domaine public.",
    "paragraphs": [
      "Ce soir, au théâtre du Vaudeville, représentation de Madame Sans-Gêne.",
      "Au théâtre de la République, demain mercredi 1er août, reprise de La Fille des Chiffonniers, avec Mme Riquet-Lemonnier.",
      "Le théâtre de la Porte-Saint-Martin reprendra samedi prochain Cyrano de Bergerac.",
      "Le 20 août prochain, la Comédie humaine, de Balzac, tombera dans le domaine public. On annonce déjà une pièce extraite du Cousin Pons et trois actes tirés du Colonel Chabert."
    ]
  },
  {
    "id": 23,
    "page": 4,
    "category": "Concerts et Divertissements",
    "title": "Actualités des salles de spectacle",
    "summary": "Succès des gymnastes aux Folies-Bergère, hommage de Frégoli au roi Humbert, et programme des revues et chansons à la Scala et à l'Eldorado.",
    "paragraphs": [
      "Il est impossible de trouver mieux que les exercices des frères Hegelmann, les superbes gymnastes aériens des Folies-Bergère.",
      "En raison du deuil national italien, Frégoli, qui est chevalier de la Couronne d'Italie, a décidé de ne pas jouer le jour des funérailles du roi Humbert.",
      "La cinquantième de « Paris s'expose » sera fêtée demain à la Scala.",
      "Il faut voir Dranem dans « Marie la Bretonne » et dans « Les Adieux de Montjarret », à l'Eldorado."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Feuilleton",
    "title": "La voix d'outre-tombe (Quatrième partie)",
    "summary": "Récit dramatique où Mademoiselle de Saint-Amand manifeste une violente aversion, tandis qu'à la gare de Montbert, deux mystérieux voyageurs expédient trois caisses vers la villa des Sources.",
    "paragraphs": [
      "Mademoiselle de Saint-Amand, qui donnait le bras à sa sœur, la laissa tout à coup et recula de quelques pas. « Ne me parlez plus jamais de cette maudite et abominable créature », s'écria-t-elle avec une violence dont elle ne fut pas maîtresse.",
      "Comme les deux sœurs étaient sur une éminence d'où l'on apercevait la vallée, un sifflet aigu traversa les distances, et le panache de fumée de la locomotive s'éleva dans l'air, aussitôt dissipé que formé.",
      "Au moment même où le sifflet de la locomotive en marche déchirait l'air, le train stoppa dans la petite gare de Montbert. Deux individus descendirent et le plus jeune des deux demanda à un homme d'équipe de porter trois caisses à la villa des Sources."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Concerts et Orphéons",
    "title": "Programme des concerts du mardi 31 juillet",
    "summary": "Programme des aubades musicales pour le mardi 31 juillet, assurées par la musique de la Garde républicaine et les formations des régiments de ligne.",
    "paragraphs": [
      "Exposition, Tuileries et Luxembourg : concert de la Garde républicaine sous la direction de M. G. Parés et concert du régiment de ligne sous la direction de M. Barthés."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Marché des bestiaux de la Villette",
    "summary": "Compte rendu de la séance du lundi 30 juillet au marché de la Villette, marquée par une mévente générale et une baisse sensible des prix sur la catégorie des porcs.",
    "paragraphs": [
      "Résultats du lundi 30 juillet pour les bœufs, vaches, taureaux, veaux, moutons et porcs. La journée a été marquée par une mévente générale, entraînant un recul significatif des cours avec une baisse de 10 à 20 francs par tête pour les porcs."
    ]
  }
];
