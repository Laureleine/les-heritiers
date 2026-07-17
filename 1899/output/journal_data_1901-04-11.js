// Date: 1901-04-11
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-04-11 (Version Restaurée, 22 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "Les asiles de vieux marins",
    "summary": "À l'Exposition de 1900, une série de portraits de vieux marins retraités souligne l'importance des œuvres charitables comme les asiles de Berck, Saint-Malo, Le Havre, Rochefort et Marseille dédiés aux anciens de la mer.",
    "paragraphs": [
      "Dans la section des œuvres sociales, au premier étage de la galerie des Machines, on remarquait avec quelque surprise, à l'Exposition de 1900, toute une série de portraits signés du nom d'un artiste bien connu, M. Francis Tattegrain. Les personnages qui avaient posé pour ces portraits étaient presque tous de vieux marins retraités.",
      "L'établissement charitable de Berck-sur-Mer, dirigé par M. Francis Tattegrain, est tout de charité, de désintéressement et d'abnégation. Fondé au début de l'hiver 1887 à la suite d'un accident, il a été bâti grâce à la générosité des souscriptions.",
      "La France ne possède pas assez d'asiles hospitaliers comme celui de Berck. Bien avant, Saint-Malo possédait un asile pour marins, et l'asile Brévillier, au Havre, fondé par Mme veuve Brévillier, n'a rien à envier au prospère établissement du Pas-de-Calais.",
      "Construit sur des dimensions moins vastes, l'asile rochefortais des vieux marins compte actuellement quinze pensionnaires, grâce à l'initiative de M. Burot, médecin en chef de la marine.",
      "L'asile maritime de Marseille est le dernier par ordre de date et le plus riche. L'honneur de sa fondation revient à M. Viaud, soutenu par les dons généreux, notamment celui de M. Philippe Jourde."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Danger de la Femme",
    "summary": "Au sortir de la Charité, Philippe Darrans initie le jeune Bernard Jousselin aux réalités et aux périls de la vie parisienne, mettant le novice en garde contre les séductions et les tentations du Quartier Latin.",
    "paragraphs": [
      "C'est à la sortie de la Charité que des paroles s'échangeaient entre un beau garçon brun, de haute taille, Philippe Darrans, et un jeune homme de taille moyenne, Bernard Jousselin.",
      "Darrans, avec un rire protecteur, propose à Jousselin de l'emmener dans son fiacre. Il lui prodigue ses conseils sur la réussite et continue d'instruire Jousselin sur les dangers de la vie parisienne, notamment la gent féminine et les distractions du Quartier Latin."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Fin des Grèves de Marseille",
    "summary": "Après quarante et un jours d'un conflit ayant lourdement pesé sur le commerce local, la grève marseillaise touche à sa fin avec la reprise du travail et le réembauchage de la majorité des ouvriers ce matin.",
    "paragraphs": [
      "La reprise du travail, enfin votée par les différents corps de métier, est à l'heure actuelle un fait accompli.",
      "Presque tous les ouvriers ont été réembauchés ce matin. Ainsi se trouve terminée cette grève, dont les conséquences ont été lourdes pour le commerce marseillais et qui a duré quarante et un jours."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Les Bandits de Champigny",
    "summary": "La localité de Champigny est soulagée suite à la capture par le commissaire Parnet d'une bande de malfaiteurs dirigée par Lucien Kohler, dit Le Zéphir, auteur de nombreux pillages et agressions nocturnes.",
    "paragraphs": [
      "La petite ville de Champigny a été mise en émoi par une bande de malfaiteurs commandée par Lucien Kohler, dit Le Zéphir.",
      "La bande a commis trois tentatives de meurtre, notamment contre M. Mourier et M. Boursy, et a mis au pillage plusieurs établissements. Après une série d'agressions nocturnes, le commissaire Parnet, de Joinville-le-Pont, a réussi à cerner et capturer les bandits dans leur repaire."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Actualités",
    "title": "De Nice à Villefranche",
    "summary": "Le Président de la République, M. Loubet, s'est rendu à Villefranche pour y saluer l'escadre russe. Lors de cette entrevue diplomatique, il a porté un toast à la santé du tsar Nicolas II.",
    "paragraphs": [
      "Le départ de Nice du Président de la République s'est effectué au milieu d'une foule immense. À 6 heures 40, le cortège présidentiel arrive à Villefranche pour saluer l'escadre russe, composée notamment du cuirassé Alexandre II.",
      "M. Loubet a été reçu par M. de Lanessan, ministre de la Marine, et a prononcé un toast à la santé du tsar Nicolas II. En retour, l'amiral Birileff a exprimé ses hommages à la France."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Actualités",
    "title": "Arrivée de l'escadre à Toulon",
    "summary": "Le Président de la République, M. Loubet, a reçu un accueil triomphal lors de son arrivée maritime à Toulon, marquée par des salves de canon en l'honneur des marins français et russes.",
    "paragraphs": [
      "Le Président de la République est arrivé par mer à Toulon. La ville est en fête, et l'escadre a été accueillie avec des salves de canon et des acclamations de la foule massée sur les quais.",
      "M. Loubet a honoré les marins et officiers français et russes, et a reçu un accueil triomphal avant de poursuivre ses engagements officiels dans la ville."
    ]
  },
  {
    "id": 7,
    "page": 3,
    "category": "Politique étrangère",
    "title": "Un télégramme du roi d'Italie",
    "summary": "Le roi Victor-Emmanuel d'Italie adresse ses vifs remerciements au Président Loubet pour la réception chaleureuse réservée au duc de Gênes et à l'escadre italienne lors des fêtes toulonnaises.",
    "paragraphs": [
      "Le Président de la République a reçu le télégramme suivant du roi d'Italie en réponse à celui qu'il avait transmis après les fêtes de Toulon.",
      "Monsieur Émile Loubet, Président de la République française, à Toulon : Je remercie bien vivement Votre Excellence de ses aimables paroles et de l'accueil cordial fait à mon oncle le duc de Gênes et à l'escadre italienne.",
      "La reine s'unit à moi pour vous exprimer toute notre reconnaissance de vos souhaits pour notre bonheur. À mon tour, je prie Votre Excellence d'agréer mes souhaits les plus sincères pour sa personne et pour la prospérité de la France, amie de l'Italie. Victor-Emmanuel."
    ]
  },
  {
    "id": 8,
    "page": 3,
    "category": "Faits divers",
    "title": "Le drame de la rue Cler",
    "summary": "Un tragique fait divers s'est déroulé rue Cler : un employé de cercle a grièvement blessé son épouse à coups de feu avant de se donner la mort. La victime a été transportée à l'hôpital Laënnec.",
    "paragraphs": [
      "Un drame sanglant, dont les causes sont encore ignorées, s'est déroulé hier soir, au 31, rue Cler, dans le septième arrondissement. Un mari, après avoir tenté de tuer sa femme, s'est suicidé.",
      "André Frédéric, âgé de quarante-cinq ans, et sa femme, de dix ans plus jeune, habitaient à l'adresse ci-dessus, au sixième étage, un logement donnant sur la cour.",
      "Le mari, garçon dans un cercle du boulevard des Capucines, prenait son service à trois heures et demie de l'après-midi, et ne rentrait que le matin, entre quatre et cinq heures. Mme André était employée à la manufacture des tabacs.",
      "Hier soir, vers sept heures, il rentrait chez lui, comme il en avait l'habitude. Il avait eu à peine le temps d'y arriver que les voisins entendirent une double détonation. Lorsqu'ils accoururent sur le palier, devant les portes ouvertes, ils trouvèrent, au milieu d'une mare de sang, les époux atteints d'une balle à la tête.",
      "Mme André, qui vit encore, a été transportée à l'hôpital Laënnec. La victime, dont l'état est extrême, n'a pu encore expliquer le mobile qui a poussé son mari à cette tentative de meurtre."
    ]
  },
  {
    "id": 9,
    "page": 3,
    "category": "Faits divers",
    "title": "L'odyssée de deux étudiants turcs",
    "summary": "Deux étudiants turcs, Fuad-Ali et Kemel, ont été arrêtés à Paris pour abus de confiance après avoir détourné les fonds destinés à leur rapatriement fournis par le consulat de Turquie.",
    "paragraphs": [
      "À la suite d'une plainte émanant de l'ambassade de Turquie, le service de la sûreté a procédé, hier, à l'arrestation de deux étudiants turcs, Fuad-Ali, âgé de vingt-cinq ans, et Kemel, âgé de vingt-deux ans, inculpés d'abus de confiance.",
      "Fuad-Ali occupa un temps des fonctions d'attaché officieux au ministère des Affaires étrangères. Après des péripéties à travers l'Europe, il débarqua à Paris en mars, les fonds épuisés.",
      "Le consul de Turquie mit à la disposition de Fuad-Ali et de Kemel une somme pour leur rapatriement, mais les deux étudiants faussèrent compagnie au diplomate. Ils refusèrent ensuite de partir pour Constantinople, prétextant que leur vie était en danger, en attendant qu'un complément d'enquête soit fait sur leurs allégations."
    ]
  },
  {
    "id": 10,
    "page": 3,
    "category": "Faits divers",
    "title": "Un crime dans un bar",
    "summary": "Une terrible agression a eu lieu rue Saint-Martin : un jeune homme a poignardé son amie au dos dans un bar. La victime, gravement touchée à la moelle épinière, a été admise à l'Hôtel-Dieu.",
    "paragraphs": [
      "Dans la nuit de lundi à mardi, la femme Le Gayeux, âgée de vingt ans, se trouvait dans un bar de la rue Saint-Martin en compagnie de son amant, Félix C., âgé de vingt-deux ans. Il lui a renversé son verre sur sa robe et, alors qu'elle se baissait pour éponger le liquide, il lui a planté un couteau dans le dos.",
      "Transportée à l'Hôtel-Dieu, la femme Le Gayeux a été reconnue très dangereusement blessée, la lame ayant atteint la moelle épinière."
    ]
  },
  {
    "id": 11,
    "page": 3,
    "category": "Faits divers",
    "title": "Voleur d'objets religieux",
    "summary": "Sur dénonciation d'un brocanteur, la police a arrêté un individu nommé Bastien, suspecté de piller les églises. Une perquisition a permis de retrouver de nombreux objets sacrés de grande valeur à son domicile.",
    "paragraphs": [
      "Sur la dénonciation d'un brocanteur de la rue de Montmorency, la police a arrêté un individu, se faisant appeler Bastien, suspecté d'appartenir à une bande de dévaliseurs d'églises.",
      "En le fouillant, on trouva sur lui un livret militaire au nom de Bastien, mais qui avait été gratté. Grâce à une enveloppe découverte dans ses poches, on a retrouvé la trace de son précédent domicile, rue Grenier-Saint-Lazare, où il avait dissimulé une foule d'objets religieux de grande valeur : christs en ivoire, vases sacrés et candélabres."
    ]
  },
  {
    "id": 12,
    "page": 3,
    "category": "Faits divers",
    "title": "Un gardien de la paix volé",
    "summary": "Le logement du gardien de la paix Jartesrou, situé rue Orfila, a été cambriolé en son absence. Les malfaiteurs ont fracturé la porte pour dérober ses économies, des bijoux et divers vêtements.",
    "paragraphs": [
      "Au numéro 60 de la rue Orfila habite le gardien de la paix Jartesrou. Avant-hier soir, pendant que son logement était inoccupé, des malfaiteurs ont fracturé la porte et ont dérobé les économies du gardien, quelques bijoux et divers vêtements."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Faits divers",
    "title": "Tentative de meurtre sur une ouvrière",
    "summary": "Mme Maria Mothan, une ouvrière couturière, a été grièvement blessée de deux coups de couteau par son mari, Louis Mothan, qui ne supportait pas leur séparation. Il a été arrêté rue Saint-Maur.",
    "paragraphs": [
      "Une ouvrière couturière, Mme Maria Mothan, avait abandonné son mari, Louis Mothan, en raison de ses habitudes d'intempérance. Furieux, celui-ci a guetté sa rentrée et lui a porté deux coups de couteau dans le dos hier soir.",
      "La blessée a été transportée à l'hôpital Saint-Antoine et le meurtrier a été arrêté rue Saint-Maur."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Chroniques de banlieue",
    "summary": "Récit des incidents survenus en banlieue : accidents mortels à Meudon et Saint-Denis, panique à Neuilly, collision à Levallois-Perret et troubles à l'ordre public causés par un déséquilibré à Courbevoie.",
    "paragraphs": [
      "MEUDON : M. Édouard Toffart, en rentrant chez lui, a glissé sur le pavé humide et est décédé peu après.",
      "NEUILLY-SUR-SEINE : Un cheval emporté a provoqué une vive panique rue Perronet-Bertier. L'agent Behors a été traîné sur cent mètres avant de parvenir à maîtriser l'animal.",
      "LEVALLOIS-PERRET : Un tramway a tamponné un tilbury, blessant M. Féto Maudier et un passant, M. Eugène Poullet.",
      "COURBEVOIE : Un individu fou, Pierre Chexai, lançait des pavés sur les voitures et les boutiques. Il a fallu l'intervention de quatre agents pour le maîtriser.",
      "SAINT-DENIS : M. Victor Gandier a succombé à l'asphyxie après avoir accidentellement mis le feu à son lit. Le petit Louis Pillefert, âgé de huit ans, est grièvement brûlé après que ses vêtements ont pris feu au contact d'un poêle."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Social",
    "title": "La grève de Montereau",
    "summary": "Lors de la réunion du 10 avril, les ouvriers de Montereau ont voté la poursuite de leur grève dans un calme absolu. Une grande manifestation de soutien est prévue pour le lendemain.",
    "paragraphs": [
      "La réunion des ouvriers a eu lieu le 10 avril. Un ordre du jour acceptant la continuation de la grève a été voté. Le calme est absolu. Demain aura lieu une grande manifestation à laquelle sont conviés les commerçants de la région."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Sports",
    "title": "Les courses à Auteuil et Maisons-Laffitte",
    "summary": "Compte rendu des épreuves hippiques du 10 avril. À Auteuil comme à Maisons-Laffitte, la journée fut marquée par des joutes disputées et la victoire remarquée du cheval Godoman dans les prix de la journée.",
    "paragraphs": [
      "Les résultats des courses hippiques à Auteuil et Maisons-Laffitte pour la journée du 10 avril sont désormais connus. Les épreuves, suivies par un public nombreux, ont vu la victoire de plusieurs coursiers, dont le cheval Godoman, qui a fait montre d'une forme exceptionnelle lors des prix disputés sur les deux hippodromes."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Théâtre",
    "title": "Courrier des théâtres",
    "summary": "Actualité des scènes parisiennes : le succès de la reprise de 'Durand et Durand' à la Renaissance et l'annonce de prochaines représentations de charité à l'Odéon, au théâtre Déjazet et au Châtelet.",
    "paragraphs": [
      "Le théâtre de la Renaissance a repris, avec un succès qui ne se dément point, la pièce 'Durand et Durand'. Par ailleurs, plusieurs premières et matinées sont annoncées sur les scènes parisiennes, notamment à l'Odéon, au théâtre Déjazet et au Châtelet, à l'occasion de représentations données au profit d'œuvres de charité."
    ]
  },
  {
    "id": 18,
    "page": 4,
    "category": "Feuilleton",
    "title": "Miss Tempête",
    "summary": "Lucien, intrigué par les rapports mystérieux entre son père et un nommé Tavernier, mène son enquête auprès du concierge Germain et confronte finalement Bistour dans son cabinet.",
    "paragraphs": [
      "Lucien ne pouvait s'empêcher de s'interroger sur l'étrange manège de son père avec ce mystérieux Tavernier. Pourquoi son père se préoccupait-il tant d'un homme qu'il ne connaissait, pour ainsi dire, point ?",
      "En attendant son automobile, il croisa Germain, le concierge, et l'interrogea sur la visite de ce Tavernier. Le concierge lui apprit que le visiteur était un petit vieux nommé Bistour, mal fagoté, qui portait une barbe grisonnante et avait une étrange façon de parler qui lui tirait la mâchoire de travers.",
      "Lucien apprit que Bistour avait écrit sur sa carte de visite le nom de Tavernier et qu'il avait été reçu immédiatement par son père. Intrigué, Lucien partit précipitamment pour l'agence de Bistour, rue des Lavandières-Sainte-Opportune, pour tirer cette affaire au clair.",
      "Arrivé sur place, Lucien confronta Bistour dans son cabinet. Le vieux policier tenta de louvoyer avec sa réserve professionnelle, mais Lucien ne se laissa point démonter, insistant pour savoir ce que Bistour manigançait avec son père autour de ce Tavernier."
    ]
  },
  {
    "id": 19,
    "page": 4,
    "category": "Actualités",
    "title": "Tirage des obligations de la Ville de Paris",
    "summary": "Le 118e tirage trimestriel des obligations de la Ville de Paris a eu lieu hier. La liste des séries extraites pour le tirage définitif du 20 avril est désormais communiquée au public.",
    "paragraphs": [
      "Hier matin a eu lieu, dans les magasins de la Ville de Paris, 9, rue La Fontaine, le 118e tirage trimestriel des séries des obligations de l'emprunt contracté par la Ville de Paris. Un certain nombre de séries ont été extraites pour concourir au tirage définitif, lequel aura lieu le 20 avril.",
      "La liste des premières séries tirées inclut notamment les numéros 1.085.281, 1.077.588, 812.361, 1.041.841 et bien d'autres, totalisant plusieurs segments de dix numéros chacun."
    ]
  },
  {
    "id": 20,
    "page": 4,
    "category": "Communications",
    "title": "Rentrée des cours commerciaux",
    "summary": "Annonce de la rentrée des cours commerciaux gratuits à Paris. Les établissements situés avenue de la République et avenue Trudaine accueilleront les étudiants et étudiantes dès mardi prochain.",
    "paragraphs": [
      "Mardi prochain aura lieu la rentrée des cours commerciaux gratuits faits à l'École de commerce, 79, avenue de la République, et à l'École commerciale, 39, avenue Trudaine.",
      "Ces cours, destinés aux jeunes gens et aux jeunes filles se destinant au commerce, se déroulent le soir, de 7 heures 1/2 à 9 heures 1/2 pour les femmes, et de 8 heures à 10 heures pour les hommes."
    ]
  },
  {
    "id": 21,
    "page": 4,
    "category": "Informations maritimes",
    "title": "Arrivées et départs des paquebots",
    "summary": "Mouvement maritime complet des paquebots des Messageries Maritimes et de la Compagnie Générale Transatlantique pour les ports de Marseille, du Havre, de New-York et des escales internationales en ce début d'avril.",
    "paragraphs": [
      "Le paquebot Australien (M. M.), venant de la Nouvelle-Calédonie, a quitté Colombo le 7 avril. Le paquebot Annam (M. M.), venant du Japon, a quitté Colombo le 7 avril. Le paquebot Tonkin (M. M.), venant du Japon, est arrivé à Marseille le 7 avril.",
      "Le paquebot Calédonien (M. M.), venant de Maurice et de Madagascar, a quitté Port-Saïd le 8 avril. Le paquebot Brésil (M. M.) a quitté Lisbonne le 9 avril. Le paquebot La Plata (M. M.) a quitté Dakar le 8 avril.",
      "Le paquebot Chili (C. R.) a quitté Pernambuco le 8 avril. Le paquebot Cordillère (M. M.) a quitté Montevideo le 6 avril. Le paquebot Saint-Germain (C. G. T.) est arrivé à Pointe-à-Pitre le 8 avril. Le paquebot La Gascogne (C. G. T.) est arrivé au Havre le 9 avril. Le paquebot La Champagne (C. G. T.) est arrivé à New-York le 7 avril."
    ]
  },
  {
    "id": 22,
    "page": 4,
    "category": "Spectacles",
    "title": "Programme des théâtres pour le 11 avril",
    "summary": "Répertoire des représentations théâtrales parisiennes pour la soirée du 11 avril, allant des classiques du Théâtre-Français aux productions des scènes de quartier de la capitale.",
    "paragraphs": [
      "La programmation théâtrale pour le 11 avril est dense : l'Opéra est en relâche, tandis que le Théâtre-Français présente L'Étrangère, l'Odéon joue Ulysse, et le Vaudeville affiche La Pente douce.",
      "Les autres salles proposent : Les Amants de Sazy au Gymnase, La Veine aux Variétés, Quo Vadis à la Porte-Saint-Martin, et Les Deux Orphelines à l'Ambigu, parmi les nombreux spectacles parisiens de cette journée."
    ]
  }
];
