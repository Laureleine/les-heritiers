// Date: 1900-10-07
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-10-07 (Version Restaurée, 52 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie",
    "title": "Les chemins de fer",
    "summary": "Le Congrès international des chemins de fer débat de l'amélioration des services, de la simplification des formalités douanières aux frontières et de l'optimisation de l'exploitation des petites lignes locales.",
    "paragraphs": [
      "Aucune industrie n'a, de nos jours, autant d'importance que celle des chemins de fer. Elle occupe près de cinq millions d'hommes et elle représente un capital estimé à des milliards. Les lignes ferrées s'étendent sur des milliers de kilomètres, c'est-à-dire près de dix-neuf fois le tour du monde.",
      "Le Congrès international des chemins de fer réunit périodiquement les hommes chargés de la responsabilité d'administrer et de diriger les compagnies. Le dernier congrès a eu lieu à Paris, et il a été convenu que la septième réunion se tiendrait à Washington.",
      "Le congrès s'est longuement occupé des chemins de fer à voie étroite et de la nécessité de simplifier les formalités douanières aux frontières pour le confort des voyageurs, notamment en évitant les réveils nocturnes pénibles.",
      "Il existe des solutions pour améliorer le service, comme l'usage du téléphone ou la simplification des règlements pour les petites lignes locales."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Fruit défendu",
    "summary": "À Montmartre, Jérôme Burgard, dont l'ascension sociale au Bazar Jérôme force l'admiration depuis vingt-cinq ans, semble soudainement en proie à une inquiétude qui le détourne de ses habitudes.",
    "paragraphs": [
      "En haut de Montmartre, des fenêtres de la rue Saint-Éleuthère, Jérôme Burgard contemplait le panorama de Paris chaque soir, toujours avec la même fierté, en appelant sa femme Marianne pour partager le spectacle.",
      "Jérôme se souvenait de ses débuts, vingt-cinq ans auparavant, où il avait installé une petite table dans un terrain vague avec un capital de quarante francs. Grâce à son génie du commerce, il avait fait prospérer son affaire, le Bazar Jérôme, devenant un exemple de réussite par le travail et l'honnêteté.",
      "Le soir du mois de février, pour la première fois depuis quinze ans, Jérôme ne contempla pas Paris à la fenêtre, laissant Marianne perplexe face à ses nouvelles préoccupations mystérieuses."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Le Prince Iukanthor",
    "summary": "Le roi Norodom du Cambodge, désavouant officiellement le prince Iukanthor, a déclaré au gouverneur général de l'Indo-Chine que celui-ci n'avait aucun mandat pour formuler des réclamations en son nom.",
    "paragraphs": [
      "Le gouverneur général de l'Indo-Chine a avisé le ministre des Colonies que le roi Norodom, très affecté par l'attitude du prince Iukanthor, a déclaré que celui-ci n'avait aucun mandat pour présenter des réclamations en son nom au gouvernement français."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Santé Publique",
    "title": "La fièvre jaune au Sénégal",
    "summary": "La situation sanitaire à Saint-Louis et Dakar demeure sous surveillance stricte ; quelques cas sont recensés dans les établissements hospitaliers, dont un décès notable, celui de M. Boyen.",
    "paragraphs": [
      "La situation de la fièvre jaune à Saint-Louis et Dakar fait état de quelques malades à l'hôpital militaire et civil, dont un décès, celui de M. Boyen, employé de chemin de fer."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "Le capitaine Reibell",
    "summary": "En reconnaissance de ses faits d'armes héroïques durant la mission Foureau-Lamy contre le sultan Rabah, le capitaine Reibell, du 2e régiment de zouaves, est promu au grade de chef de bataillon.",
    "paragraphs": [
      "Le ministre de la Guerre nomme au grade de chef de bataillon le capitaine Reibell, du 2e régiment de zouaves, en récompense de ses actions d'éclat au sein de la mission Foureau-Lamy contre le sultan Rabah."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique Internationale",
    "title": "Les concessions inutiles : les élections anglaises",
    "summary": "Les élections anglaises, sous l'impulsion de M. Chamberlain, consacrent le triomphe du courant impérialiste « khaki » et sanctionnent lourdement la timidité des candidats libéraux.",
    "paragraphs": [
      "Les élections anglaises, menées sous l'empire des idées impérialistes de M. Chamberlain, marquent le triomphe incontesté de la politique dite « khaki ». L'écrasement des candidats libéraux, qui avaient tenté des concessions envers ces mêmes idées impérialistes, souligne avec force la difficulté pour les partis politiques de se renier sans en payer le prix électoral.",
      "Il apparaît désormais évident que l'électorat britannique, galvanisé par les succès coloniaux, sanctionne sévèrement toute hésitation ou modération au sein de l'opposition."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Actualité",
    "title": "En Belgique : Arrivée du prince et de la princesse Albert",
    "summary": "Le prince et la princesse Albert sont arrivés à Bruxelles sous haute surveillance. Malgré l'affluence, la foule observe un silence strict imposé par les mesures d'ordre public.",
    "paragraphs": [
      "Le prince et la princesse Albert de Belgique sont arrivés ce jour à Bruxelles sous une surveillance des plus étroites. Si la foule massée aux abords du parcours est considérable, elle demeure contenue et silencieuse.",
      "Des mesures d'ordre très strictes ont été prises par les autorités compétentes, en réaction à des rumeurs persistantes faisant état de menaces de manifestations hostiles."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le cas de Moineau",
    "summary": "Une entrevue entre M. Delaporte et le bourgmestre a permis l'ajournement d'une manifestation socialiste liée aux revendications d'amnistie pour le poseur d'explosifs Moineau.",
    "paragraphs": [
      "Une entrevue décisive a eu lieu entre M. Delaporte et le bourgmestre de la ville, menant à l'ajournement officiel d'une manifestation socialiste prévue de longue date.",
      "Cet événement, selon toute vraisemblance, est lié à une revendication d'amnistie en faveur d'un nommé Moineau. Ce Liégeois, rappelons-le, a été condamné par la justice pour avoir déposé un engin explosif, un crime ayant suscité une vive émotion dans la contrée."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un complot à Bruxelles",
    "summary": "Bruxelles est en émoi suite à la découverte d'un complot visant le prince Albert. Plusieurs arrestations ont été opérées parmi des suspects liés à des attentats notoires.",
    "paragraphs": [
      "Des rumeurs persistantes et inquiétantes font état d'un complot ourdi contre la personne du prince Albert. À la suite de ces révélations, plusieurs arrestations ont été opérées par les autorités bruxelloises.",
      "Parmi les suspects appréhendés, certains individus seraient directement liés à l'attentat perpétré précédemment contre le prince de Galles, renforçant la thèse d'une action concertée de groupuscules malveillants."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Politique Militaire",
    "title": "Le mariage des sous-officiers",
    "summary": "Le général André, ministre de la Guerre, réforme le règlement sur le mariage des sous-officiers en supprimant l'exigence de la dot, jugée incompatible avec les réalités de la vie moderne.",
    "paragraphs": [
      "Le ministre de la Guerre, le général André, travaille actuellement à l'élaboration d'un règlement spécial visant à supprimer l'obligation de la dot pour les sous-officiers souhaitant contracter mariage.",
      "Le ministre juge cette pratique ancestrale devenue inadaptée aux conditions réelles de la vie contemporaine et aux nécessités du travail féminin, souhaitant ainsi faciliter la situation familiale de nos militaires de carrière."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Diplomatie",
    "title": "Les événements de Chine",
    "summary": "La situation diplomatique en Chine s'apaise alors qu'un programme commun de négociations entre les puissances privilégie une exécution des sentences par le gouvernement impérial lui-même.",
    "paragraphs": [
      "La situation diplomatique s'améliore, un programme commun de négociations avec la Chine semblant se dessiner. Les puissances s'accordent sur la nécessité de punir les coupables des troubles, tout en privilégiant une exécution des sentences par le gouvernement chinois lui-même."
    ]
  },
  {
    "id": 12,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une mystérieuse disparition",
    "summary": "L'énigmatique disparition de Guillaume Brossard continue de préoccuper l'opinion. Un témoignage recueilli près de Saint-Étienne pourrait fournir une piste sérieuse sur le sort du jeune homme.",
    "paragraphs": [
      "La disparition de Guillaume Brossard continue de préoccuper l'opinion publique. Un témoignage recueilli près de Saint-Étienne, concernant un jeune homme en détresse, pourrait enfin correspondre au signalement du disparu."
    ]
  },
  {
    "id": 13,
    "page": 1,
    "category": "Guerre",
    "title": "La résistance des Boers",
    "summary": "Déterminés à poursuivre le combat, les chefs Boers ont pris la décision de se retirer dans le Nord, refusant obstinément de déposer les armes face aux difficultés rencontrées.",
    "paragraphs": [
      "Les chefs Boers ont résolu de se retirer dans le Nord pour prolonger la résistance. Malgré les difficultés croissantes, ils demeurent déterminés à ne point abandonner les armes."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Incident de Dejagers",
    "summary": "Lors de l'accrochage au gué de Dejagers, sept soldats ont été blessés. Les Boers, après s'être emparés d'une pièce d'artillerie, ont finalement relâché leurs prisonniers.",
    "paragraphs": [
      "Les troupes engagées au gué de Dejagers n'ont pu opposer qu'une faible résistance. Sept hommes ont été blessés et les Boers se sont emparés d'un canon. Ils ont, par la suite, relâché leurs prisonniers."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Le retour des réfugiés",
    "summary": "Sir Alfred Milner détaille le rapatriement progressif des réfugiés vers le Transvaal. Le processus débutera le 15 octobre, tout en invitant à la prudence concernant les perspectives d'emploi locales.",
    "paragraphs": [
      "Le Colonial Office vient de communiquer à la presse la note suivante : À la suite des nouvelles qui ont paru dans plusieurs journaux relativement au retour des réfugiés du Transvaal, le Colonial Office a cru devoir faire une enquête à ce sujet auprès de sir Alfred Milner, et il en a reçu la réponse suivante, portant la date du 4 octobre.",
      "Des dispositions ont été prises pour qu'à partir du 15 octobre des retours puissent commencer à s'effectuer. Ces retours se feront d'abord lentement, à raison de mille personnes par semaine. On espère que l'on pourra ensuite accélérer le mouvement. Il faudra compter au moins trois mois pour rapatrier tous ceux qui, en ce moment, attendent dans le Sud de l'Afrique. Je déconseille énergiquement à qui que ce soit de venir d'Angleterre dans le simple espoir de trouver du travail ici avant trois mois. Ce n'est que petit à petit que les affaires reprendront leur ancienne activité.",
      "D'autre part, je ne vois aucune raison pour que les gens ayant des biens dans les nouvelles colonies, ou étant assurés d'y trouver un emploi en arrivant, ou pouvant se suffire à eux-mêmes, ne reviennent pas dans le Sud de l'Afrique quand ils le jugeront convenable, quoiqu'il soit impossible de leur promettre qu'ils puissent se rendre immédiatement dans le Transvaal ou dans l'Orange."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "International",
    "title": "Départ du président Kruger",
    "summary": "Le président Kruger quittera prochainement l'Afrique du Sud pour rejoindre l'Europe. Il s'embarquera vers le 10 octobre à bord du navire de guerre hollandais Gelderland, au départ de Lourenço-Marquès.",
    "paragraphs": [
      "Lourenço-Marquès, 6 octobre. Le président Kruger s'embarquera pour l'Europe à bord du navire de guerre hollandais Gelderland, vers le 10 courant."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Mystérieuse disparition",
    "summary": "Une jeune femme de Roubaix a disparu à Bruxelles après avoir déposé ses bagages dans un café. Portant bijoux et une forte somme d'argent, elle est activement recherchée par la police.",
    "paragraphs": [
      "Bruxelles, 6 octobre. Une jeune fille d'une vingtaine d'années, venant de Roubaix, déposait mardi, dans un café de l'avenue Fonsny, une valise qu'elle devait venir reprendre plus tard. Depuis lors, elle n'a plus reparu.",
      "Cette jeune personne portait des bijoux de grande valeur et était en possession d'une forte somme. On craint qu'elle n'ait été victime d'un guet-apens. La police a fait diffuser son signalement dans toutes les directions."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "International",
    "title": "Les États-Unis et la Turquie",
    "summary": "Washington s'apprête à exiger de la Turquie le paiement des indemnités dues aux citoyens américains pour les pertes subies lors des massacres d'Arménie, sous peine d'un ultimatum diplomatique.",
    "paragraphs": [
      "New-York, 6 octobre. On mande de Washington au Herald : Le gouvernement est sur le point de prendre des mesures décisives pour amener la Turquie à remplir ses obligations relativement au paiement de l'indemnité réclamée par les sujets américains pour les pertes subies par eux pendant les massacres d'Arménie.",
      "On croit que les États-Unis enverront prochainement un ultimatum à la Turquie. Le ministre américain retourne en Turquie, porteur d'instructions précises au sujet des demandes américaines. Les autorités croient à un règlement diplomatique de la question."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Exploration",
    "title": "Dans les régions polaires",
    "summary": "Le lieutenant Amdrup a pris officiellement possession, au nom du roi de Danemark, d'un nouveau territoire arctique situé entre l'Angmagsalik et le Scoresbysund, baptisé Terre de Christian IX.",
    "paragraphs": [
      "Copenhague, 6 octobre. On annonce que le lieutenant Amdrup a arboré le drapeau danois à Nualik, à 68 degrés de latitude nord, et a pris, au nom du roi de Danemark, possession du territoire situé entre l'Angmagsalik et le Scoresbysund, auquel il a donné le nom de Terre de Christian IX."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Actualités militaires",
    "summary": "Le général Brugère est rentré à Paris après les grandes manœuvres. Par ailleurs, le génie a été mobilisé pour les inondations du Rhône, et une nouvelle cadence de marche est à l'étude.",
    "paragraphs": [
      "Le général Brugère, vice-président du conseil supérieur de la Guerre, qui était allé se reposer quelque temps à la campagne par suite des grandes manœuvres, est rentré hier à Paris.",
      "Les sapeurs du génie ont joué un rôle important dans les secours envoyés aux populations riveraines du Rhône, du Gardon et de l'Ardèche, notamment pour la consolidation des digues et le sauvetage des sinistrés. Malheureusement, le départ de la classe avait trop réduit l'effectif du régiment.",
      "Les tambours et clairons, dans le 7e corps d'armée, sont en ce moment exercés à battre ou sonner à la cadence de 126 pas par minute. On sait que la cadence ordinaire est de 120 pas."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Social",
    "title": "Les Grèves de Bordeaux",
    "summary": "À Bordeaux, la grève des arrimeurs est résolue, tandis que celle des tramways tend vers un arbitrage. En revanche, le personnel des Messageries maritimes maintient son mouvement malgré l'incident du paquebot La Plata.",
    "paragraphs": [
      "Bordeaux, 6 octobre. La Compagnie des tramways a invité ses abonnés, par voie de presse, à passer à la direction pour se faire rembourser. Aucun pourparler n'a eu lieu hier. M. Derivaud, adjoint au maire, ayant déclaré que le docteur Lande, maire de Bordeaux, accepterait d'être choisi comme arbitre officiel, les grévistes ont accepté cet arbitrage.",
      "La grève des arrimeurs vient de se terminer. Une entente complète s'est établie entre les patrons et les ouvriers. Lundi, le travail sera repris partout.",
      "Les cuisiniers, maîtres d'hôtel, cambusiers, boulangers, pâtissiers et aides de cuisine des Messageries maritimes ont voté le maintien de la grève à outrance. Ils ont manifesté en corps devant le siège de la société. Le paquebot La Plata s'est échoué dans la rivière, surpris par le brouillard."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Départ des coloniaux",
    "summary": "L'exode des contingents coloniaux se poursuit. Après les soldats annamites et laotiens, c'est au tour des tirailleurs malgaches de quitter Paris. Quelques rares individus choisissent de prolonger leur séjour pour étudier.",
    "paragraphs": [
      "L'exode des coloniaux continue. Après les soldats annamites et laotiens, voici que partent les tirailleurs malgaches. Ils quitteront Paris demain lundi et regagneront la grande île sous la conduite du capitaine Laporte.",
      "Les braves tirailleurs, comme leurs camarades annamites, haoussas et dahoméens, emportent une véritable cargaison de parapluies, de bottines à boutons et de montres en nickel.",
      "Tous ne partent pas. Trois d'entre eux restent à Paris : un jeune musicien pour ses études, un forgeron se destinant au métier de mécanicien-électricien et un jeune Sakalave désirant faire des études médicales."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Horticulture et Fêtes",
    "summary": "Succès confirmé pour l'horticulture à l'Exposition. Un concours automnal est programmé pour octobre, tandis qu'un cortège historique sur l'évolution des transports est à l'étude pour les prochaines festivités.",
    "paragraphs": [
      "Le dernier concours temporaire d'horticulture s'est achevé avec succès. Le commissariat général a décidé qu'un concours supplémentaire aurait lieu pour les fleurs et les fruits d'automne du 10 au 14 octobre.",
      "Un projet de grand cortège historique, représentant tous les genres de véhicules employés par l'homme depuis les premiers âges, est soumis à l'approbation du commissaire général pour la fête des transports."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Echos et Nouvelles",
    "summary": "Le Président de la République a reçu le ministre de Belgique. Le congrès de la paix s'est clos sur une adresse à la France, tandis que le maharadjah de Baroda est arrivé à Paris avec sa suite.",
    "paragraphs": [
      "Le Président de la République a reçu hier matin M. le baron d'Anethan, ministre de Belgique, venu lui remettre les insignes de l'ordre royal de Léopold. M. Henry Poulet, chef du secrétariat particulier, a été nommé chevalier de la Légion d'Honneur.",
      "Avant de se séparer pour une année, les membres du congrès de la paix ont voté une adresse solennelle de respect et de gratitude à la République française, à M. Émile Loubet et à M. Millerand, ministre du Commerce.",
      "Le maharadjah de Baroda, Sayajirao Gaekwad III, est arrivé hier matin à Paris, accompagné de son fils, le prince héritier, et d'une suite de dix-sept personnes."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Faits Divers",
    "title": "Statistiques des pompiers",
    "summary": "Le bilan annuel des sapeurs-pompiers de Paris pour 1899 fait état de 1 433 incendies, marquant ainsi le chiffre le plus faible enregistré au cours des deux dernières décennies.",
    "paragraphs": [
      "Le régiment des sapeurs-pompiers de Paris a enregistré 1 433 incendies en 1899. C'est le chiffre le plus faible depuis vingt ans. Les pertes sont estimées à 6 107 000 francs."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Sport",
    "title": "Courses au Bois-de-Boulogne",
    "summary": "Ce dimanche, le Prix du Conseil Municipal réunit l'élite hippique au Bois-de-Boulogne. Semendria, auréolée de ses succès au Prix de Diane et au Grand Prix de Paris, se présente en tant que grande favorite.",
    "paragraphs": [
      "Aujourd'hui, dimanche 7 octobre, a lieu le Prix du Conseil Municipal. La grande favorite est Semendria, la brillante gagnante du Prix de Diane et du Grand Prix de Paris.",
      "Les résultats du samedi 6 octobre ont vu la victoire incontestée de Pierre Infernale dans le Critérium International."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Social",
    "title": "Bulletin du Travail",
    "summary": "Face à la menace de dissolution, le syndicat des sous-agents des Postes et Télégraphes se réorganise. Parallèlement, la grève persiste à la manufacture des tabacs de Châteauroux.",
    "paragraphs": [
      "Les sous-agents des Postes et Télégraphes ont transformé leur syndicat en Association de solidarité des sous-agents des Postes et Télégraphes, afin d'éviter la dissolution administrative.",
      "À la manufacture des tabacs de Châteauroux, le travail demeure suspendu jusqu'à lundi soir, dans l'attente de l'intervention de l'inspecteur Seyvet."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accidents et crimes",
    "summary": "La journée a été marquée par divers incidents à Paris : une collision avenue de Villiers, une agression à l'arme blanche, une arrestation pour meurtre et l'internement d'un ouvrier atteint de folie.",
    "paragraphs": [
      "Un tramway a heurté une voiture électromobile avenue de Villiers, heureusement sans faire de blessé.",
      "Un employé de commerce, nommé Maillard, a été frappé de deux coups de couteau rue des Abbesses par des inconnus ; une enquête est en cours.",
      "Un meurtrier nommé Paul Charron a été arrêté après avoir mortellement poignardé une blanchisseuse rue Championnet.",
      "Un ouvrier tourneur sur bois, François La Prévote, a été interné après avoir manifesté des symptômes évidents de folie de la persécution."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incident sur la rue de Flandre",
    "summary": "Une marchande foraine en proie à une violente crise de folie furieuse a semé le trouble rue de Flandre. La malheureuse a dû être ligotée par les gardiens de la paix pour être maîtrisée.",
    "paragraphs": [
      "Une marchande foraine, Louise Sinton, âgée de cinquante ans et abandonnée par son mari, parcourait la rue de Flandre en brandissant un couteau, refusant obstinément de regagner son domicile.",
      "Les gardiens de la paix durent ligoter la malheureuse qui, prise d'un violent accès de fureur, tentait de mordre les agents."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Vie de l'Exposition",
    "title": "Une visite au Club Alpin",
    "summary": "Le Club Alpin propose aux visiteurs une immersion grandiose dans les paysages de France et les sommets du Mont-Blanc à travers une exposition panoramique saisissante de réalisme.",
    "paragraphs": [
      "Une visite au Club alpin s'impose à tous ceux qui rentrent de vacances ; ils y trouveront un enseignement utile ainsi qu'un agréable passe-temps.",
      "C'est l'inventaire des plus beaux sites de France qui valent bien les paysages lointains. Le Mont-Blanc, la plus haute montagne d'Europe, y est reproduit en un merveilleux panorama d'un effet grandiose."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Vie de l'Exposition",
    "title": "Affluence au Métropolitain et au Vieux Paris",
    "summary": "L'inauguration de la ligne du Métropolitain vers le Trocadéro provoque une affluence record, favorisant le succès persistant du Vieux Paris qui continue d'attirer les foules avant sa fermeture prochaine.",
    "paragraphs": [
      "L'ouverture de la ligne du Métropolitain au Trocadéro, qui aboutit à l'entrée du panorama de Madagascar, a amené une telle affluence de monde que le service d'ordre a dû être doublé aux guichets pour assurer, sans encombre, l'écoulement de la foule.",
      "Ce facteur du public devait nécessairement aider aux attractions qui ont tenu bon jusqu'au bout, comme le Vieux Paris. Alors que certaines parties de l'Exposition se ressentent de la fermeture prochaine, le Vieux Paris continue de battre son plein avec des spectacles chaque après-midi jusqu'au 5 novembre."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Vie de l'Exposition",
    "title": "Succès du Musée Mombur",
    "summary": "Le Musée Mombur, sis avenue de la Motte-Picquet, rencontre un succès croissant auprès du public, venu admirer ses scènes historiques, dont le célèbre Conseil de guerre de Rennes.",
    "paragraphs": [
      "Chaque jour, le Musée Mombur, situé 47, avenue de la Motte-Picquet, voit son succès aller croissant. Le public y admire, à côté de la scène principale, le Conseil de guerre de Rennes et une série d'épisodes captivants."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident à Neuilly-sur-Seine",
    "summary": "Un apprenti laitier de quinze ans, Edmond Morcel, a été grièvement blessé à la tête après une chute accidentelle survenue hier après-midi sur l'avenue de Neuilly.",
    "paragraphs": [
      "Hier après-midi, avenue de Neuilly, un jeune homme de quinze ans, Edmond Morcel, apprenti laitier demeurant à Puteaux, a fait une chute sur le trottoir où il s'est ouvert le crâne.",
      "Dans un état désespéré, il a été transporté à l'hôpital Beaujon."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Décès à Suresnes",
    "summary": "Mme Kingsford, blanchisseuse rue du Pont, a succombé durant la nuit à l'hôpital Beaujon des suites de ses blessures consécutives à un récent accident.",
    "paragraphs": [
      "Mme Kingsford, la blanchisseuse de la rue du Pont, victime d'un accident précédent, n'a pas survécu à ses blessures et est morte la nuit dernière à l'hôpital Beaujon."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Agression à Argenteuil",
    "summary": "Un cultivateur d'Argenteuil, M. Léopold Lançon, a été violemment agressé et dévalisé par quatre malfaiteurs. Deux d'entre eux, Jules Joly et Pierre Grimard, ont été appréhendés.",
    "paragraphs": [
      "M. Léopold Lançon, cultivateur à Argenteuil, a été assailli la nuit dernière par quatre individus qui l'ont frappé à coups de casse-tête et l'ont complètement dévalisé.",
      "Le malheureux a été transporté chez lui dans un état alarmant. M. Blanc, commissaire de police, a pu arrêter deux des coupables, Jules Joly et Pierre Grimard, dirigés sur Versailles."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Découverte d'un enfant à Puteaux-Saint-Denis",
    "summary": "Un nourrisson d'environ trois mois a été découvert abandonné sur le chemin du Cornillon à Puteaux. L'enfant a été immédiatement pris en charge par M. D'Homme, commissaire de police, et conduit à l'hospice des Enfants.",
    "paragraphs": [
      "On a trouvé hier, sur le chemin du Cornillon, un nourrisson paraissant âgé de trois mois, du sexe masculin. L'enfant a été aussitôt transporté à l'hospice des Enfants par les soins de M. D'Homme, commissaire de police."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Violence conjugale à Pantin",
    "summary": "À Pantin, un journalier en état d'ivresse, Julien Nouleau, a agressé violemment sa famille. Maîtrisé par le voisinage, il a été conduit à l'infirmerie spéciale du dépôt après cette scène d'une extrême violence.",
    "paragraphs": [
      "Sous le coup d'un accès de fureur alcoolique, un journalier de Pantin, nommé Julien Nouleau, a tenté de tuer ses enfants avant de se jeter sur sa femme, qu'il a étranglée. Grâce à l'intervention rapide des voisins, le forcené a pu être maîtrisé et dirigé sur l'infirmerie spéciale du dépôt."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident ferroviaire à Pierrefitte",
    "summary": "Deux ouvriers imprudents, installés sur l'impériale d'un train à Pierrefitte, ont été heurtés par un pont. L'un est mort sur le coup, tandis que Jean Kollot, grièvement blessé, a été transporté à l'hôpital Lariboisière.",
    "paragraphs": [
      "Hier matin, deux ouvriers, montés sur l'impériale d'un train à la station de Pierrefitte, ont eu l'imprudence de se pencher au dehors et se sont brisé le crâne contre le tablier d'un pont. L'un est mort sur le coup ; le second, le nommé Jean Kollot, a été transporté dans un état grave à l'hôpital Lariboisière."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident d'automobile à Coulommiers",
    "summary": "L'automobile de M. Bernard s'est renversée dans la descente de Montils suite à une rupture de freins. Ses trois passagers ont été projetés sur la chaussée ; Mme Bernard est grièvement blessée.",
    "paragraphs": [
      "M. Bernard, qui circulait en automobile vers la Ferté-Gaucher accompagné de sa femme et de sa bonne, a été victime d'une rupture de freins dans la descente de Montils. Le véhicule a versé, projetant brutalement les trois voyageurs sur la chaussée. Mme Bernard a été relevée grièvement blessée."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame dans une fosse d'aisances",
    "summary": "Lors d'une vidange, l'ouvrier Alphonse Dreux a été asphyxié au fond d'une fosse. Son collègue François Godec a courageusement tenté de le sauver, mais a succombé aux émanations toxiques.",
    "paragraphs": [
      "Lors de la vidange d'une fosse d'aisances, un nommé Alphonse Dreux, pris d'un commencement d'asphyxie, est tombé au fond de la fosse. François Godec, un autre ouvrier, a tenté courageusement de le secourir, mais a succombé à son tour aux émanations toxiques. Godec est décédé sur les lieux, tandis que Dreux a pu être sauvé."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Faits Divers",
    "title": "Enfant tué à Ferrières",
    "summary": "Tragique accident à Ferrières : le jeune Léonce Touxeno, âgé de huit ans, est décédé après avoir été enseveli sous un tombereau de betteraves qu'il avait imprudemment fait basculer en jouant.",
    "paragraphs": [
      "Un triste accident vient de se produire à Ferrières. Le jeune Léonce Touxeno, âgé de huit ans, a été retrouvé mort, enseveli sous un tombereau de betteraves qu'il avait fait basculer par imprudence alors qu'il y jouait."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Départements",
    "title": "Accident ferroviaire à Évreux",
    "summary": "Un tamponnement est survenu ce matin sous le tunnel de Bréval entre un train de marchandises en panne et un convoi de voyageurs. Aucun blessé n'est à déplorer, malgré d'importants retards.",
    "paragraphs": [
      "Un tamponnement a eu lieu ce matin sous le tunnel de Bréval, entre un train de marchandises resté en panne et un train de voyageurs arrivant de Paris.",
      "Fort heureusement, aucun accident corporel n'est à déplorer parmi les passagers, mais le trafic a subi un grand retard en raison de cet incident."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Départements",
    "title": "Suicide à Cherbourg",
    "summary": "M. Gouton, ingénieur en chef des ponts et chaussées, a été découvert sans vie à son domicile cherbourgeois. Il s'est donné la mort en se tirant un coup de revolver à la tempe.",
    "paragraphs": [
      "Un drame vient d'endeuiller la ville de Cherbourg. M. Gouton, ingénieur en chef des ponts et chaussées, a été trouvé mort à son domicile ; il s'est donné la mort en se tirant un coup de revolver à la tempe."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "Changements de programme à l'Opéra-Comique et nouvelles nominations au Conservatoire. Les conférences de l'Odéon reprennent prochainement avec Mme Dieulafoy.",
    "paragraphs": [
      "À l'Opéra-Comique, on donnera Orphée au lieu de Cendrillon pour la matinée. La représentation au profit de l'Association des artistes dramatiques à Versailles est reportée au mois de novembre.",
      "M. Adrien Bernheim est nommé membre du conseil supérieur du Conservatoire. Les matinées-conférences de l'Odéon reprendront le 8 novembre avec Mme Dieulafoy."
    ]
  },
  {
    "id": 45,
    "page": 3,
    "category": "Sports",
    "title": "Rencontre cycliste au Parc des Princes",
    "summary": "Le vélodrome du Parc des Princes accueille aujourd'hui une confrontation internationale de haut vol entre Jacquelin, champion du monde, et ses rivaux, Meyers et Cooper.",
    "paragraphs": [
      "Une rencontre importante a lieu aujourd'hui au vélodrome du Parc des Princes. Elle met aux prises Jacquelin, champion du monde, Meyers, champion de Hollande, et Cooper, champion d'Amérique."
    ]
  },
  {
    "id": 46,
    "page": 3,
    "category": "Sports",
    "title": "Concours de véhicules automobiles à Vincennes",
    "summary": "Ce lundi s'ouvre à Vincennes le concours international de véhicules automobiles de transports, visant à évaluer le confort, le prix de revient et l'efficacité des services publics de voyageurs et de marchandises.",
    "paragraphs": [
      "Le concours international de véhicules automobiles de transports débutera ce lundi à Vincennes. Cette manifestation d'envergure, consacrée aux transports publics de voyageurs et de marchandises, a pour but d'évaluer avec précision les conditions de confort ainsi que le prix de revient réel de ces nouveaux moyens de locomotion."
    ]
  },
  {
    "id": 47,
    "page": 3,
    "category": "Sports",
    "title": "Le voyage du ballon Le Centaure",
    "summary": "Le comte Henry de la Vaulx relate son expédition aérostatique en Russie à bord du ballon Le Centaure. Malgré un périple de plus de 1 000 kilomètres, l'atterrissage près de Wlocawek a mené à une rétention temporaire.",
    "paragraphs": [
      "Le comte Henry de la Vaulx relate son récent voyage en Russie à bord du ballon Le Centaure, au cours duquel il a parcouru plus de 1 000 kilomètres. Bien qu'il eût été en mesure de prolonger son vol, il a choisi d'atterrir aux environs de Wlocawek, ce qui lui a valu d'être retenu par les autorités russes pendant vingt-quatre heures."
    ]
  },
  {
    "id": 48,
    "page": 3,
    "category": "Bulletin Financier",
    "title": "Analyse de la séance boursière",
    "summary": "La séance boursière du 6 octobre affiche des résultats satisfaisants, marqués par une fermeté notable des rentes, malgré une certaine indécision constatée dans le compartiment des valeurs de traction.",
    "paragraphs": [
      "La séance boursière du 6 octobre a été satisfaisante. Les rentes témoignent d'une fermeté encourageante, tandis que le compartiment des valeurs de traction manifeste une certaine hésitation au cours des échanges."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Feuilleton",
    "title": "Souffrance de mère",
    "summary": "Face à la douleur d'un rêve brisé, une mère trouve un réconfort spirituel dans les paroles d'une religieuse, qui promet d'apporter son soutien et ses prières pour le sort de mademoiselle Annie.",
    "paragraphs": [
      "« Ma sœur, vos paroles ont été dictées par un sentiment pieux. Je m'incline respectueusement devant celle qui les a prononcées pour panser une plaie que rien ne pourra guérir. »",
      "« Hélas ! Le rêve de ma vie est à jamais fauché. »",
      "« Puis-je vous dire d'espérer ? Espérez. Mademoiselle Annie a confiance en nous. »",
      "« Nous ferons ce que nous pourrons pour lui épargner le calvaire qui l'attend. Elle doit accomplir son vœu, mais nous, nous veillerons et prierons. Courage, Monsieur. »",
      "« Nous ne sommes que de faibles femmes et, pourtant, nous réalisons parfois des miracles. Nous sommes prêtes à tout tenter pour votre bonheur et pour celui de la vaillante petite compagne que la Providence nous a envoyée. »"
    ]
  },
  {
    "id": 50,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Bigame",
    "summary": "Après avoir erré dans la brousse, le lieutenant, tourmenté par ses regrets, cherche à obtenir le pardon d'Annie auprès de sœur Thérèse, apprenant avec effroi l'état de santé préoccupant de la jeune femme.",
    "paragraphs": [
      "La santé était revenue, sinon parfaite : madame Belcourt devait prendre beaucoup de précautions, et son mari ne se servirait plus de son bras ankylosé ; mais, comme état général, le résultat se trouvait beaucoup plus appréciable que leur fille eût pu l'espérer.",
      "Puis ils se savaient utiles. Ils ne se sentaient plus absolument à charge à leur enfant, surtout à leur gendre. Si Thérèse, tout à son affaire, arrivait à la mener à bien, à gagner de l'argent, ils avaient le sentiment qu'ils y seraient pour quelque chose.",
      "Ainsi, le cours de solfège serait fait par M. et madame Belcourt, cette dernière accompagnant au piano, et pouvant même donner les leçons de piano. Les deux pauvres artistes n'avaient jamais été aussi heureux ; celui qui les considérait auparavant comme seuls amis leur témoignait maintenant une affection de fils. Le passé fuyait et s'oubliait toujours davantage.",
      "Sœur Thérèse poursuivit : « Maintenant, monsieur, je vais vous supplier, à votre tour, d'être juste. Je comprends que les grandes douleurs font parfois perdre toute retenue, toute raison, et dire des choses que l'on ne pense pas. »",
      "L'allusion était claire. L'officier la saisit et murmura : « Je devine votre pensée, ma sœur. Puisque mademoiselle Annie vous a fait la confidence de ce qui s'est passé entre nous hier, je vous avouerai que le regret m'en est venu. J'ai été, sur le coup, comme frappé de folie. Je ne pensais plus, je ne voyais plus. Je suis parti dans la nuit. J'ai marché longtemps au hasard à travers la brousse. Peu à peu la conscience m'est revenue. »",
      "« J'ai compris toute la peine, toute la douleur que j'avais causée à celle que Dieu même ne peut m'empêcher de considérer comme ma fiancée. Et je voulais, aujourd'hui, lui demander pardon. Pourrais-je la voir, ma sœur ? »",
      "La religieuse hésita un instant à répondre. Elle réfléchissait. Enfin, elle dit : « Oui. Cela vaudra mieux. Mademoiselle Annie a dû s'aliter. Nous l'avons trouvée presque inanimée sur le plateau. »",
      "Le lieutenant, déjà très pâle, devint livide. Son angoisse faisait peine à voir."
    ]
  },
  {
    "id": 51,
    "page": 4,
    "category": "Chronique Littéraire",
    "title": "Le bonheur et les prémonitions",
    "summary": "Au sein d'une atmosphère intime, les destins se croisent. Tandis que la vie de famille suit son cours, un repentir profond et l'espoir d'une réconciliation s'invitent au cœur des tourments personnels.",
    "paragraphs": [
      "C'est égal, il ne faut jamais désespérer dans la vie. Madame Belcourt, avec son geste coutumier et sa réponse immuable, affirmait : « Tais-toi, n'en parlons plus. Pourtant, si nous n'avions pas désespéré, si le réchaud n'avait pas été allumé, notre voisin serait-il entré chez nous et, après nous avoir sauvés, nous aurait-il demandé notre fille en mariage ? »",
      "C'est vrai, peut-être pas. Il a fallu cette circonstance pour vaincre ses hésitations. C'était donc la vie de famille, simple et heureuse.",
      "Une fois tous les quinze jours à peu près, à l'improviste — de façon, comme disait le jeune homme, qu'on ne changeât rien pour lui à l'ordinaire — Chauvette se laissait emmener à dîner par M. Rédal. C'était le seul étranger qu'on reçût chez lui.",
      "Il n'y avait pas, ce soir-là, plus de trois quarts d'heure que madame Verdunet avait quitté l'appartement du boulevard Saint-Marcel, lorsque, comme à l'habitude, Jean Rédal rentra. Madame Rédal avait enjoint à Catherine de ne rien dire, et aux enfants également. Elle ne prétendait point cacher à son mari cette visite, mais elle voulait être la seule à lui en parler.",
      "Les petits tinrent leur langue, chose facile pour Jeanne, qui n'avait pas mieux demandé qu'on n'en parlât pas du tout à son père. Il fut plus difficile pour Jean de se taire ; Thérèse, devinant qu'il allait oublier la consigne, dut lui faire trois fois les gros yeux durant le dîner. Maintenant, le garçonnet et la fillette étaient touchés."
    ]
  },
  {
    "id": 52,
    "page": 4,
    "category": "Chronique Sociale",
    "title": "La scène du salon",
    "summary": "Un interlude de tendresse conjugale au coin du feu, où le calme du foyer contraste avec les souvenirs patriotiques du passé.",
    "paragraphs": [
      "Les époux, dans le petit salon, goûtaient au doux tête-à-tête du soir, assis au coin de la cheminée, où Catherine avait allumé trois bûches, le premier feu de la saison. Un guéridon, approché d'eux, supportait la lampe à abat-jour rose pâle, orné de dentelle.",
      "Thérèse, une corbeille en vannerie garnie de rubans à ses côtés et renfermant des objets de layette à confectionner, festonnait une toute mignonne flanelle, une flanelle qu'on eût dite taillée pour la grande poupée de Jeanne.",
      "« Eh bien, chérie, fit Jean en posant son journal sur le guéridon, as-tu fini de te fatiguer les yeux ? »",
      "« J'allais t'en demander autant, mon ami ; je trouvais long ce silence. »",
      "Rédal se leva pour venir passer son bras derrière la taille de sa jeune femme et se pencher sur elle, sa tête à la hauteur de la sienne. Elle, la renversant sur son épaule, lui présenta son front blanc et sa bouche entrouverte dans un sourire tendre. Les lèvres, affleurant d'abord, puis fouillant, s'attachant, couraient sur son front, sur son cou, dans ses cheveux si sombres.",
      "Pourtant, lui aussi l'aimait, cette France pour la gloire de laquelle il avait versé son sang."
    ]
  }
];
