// Date: 1900-11-18
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-11-18 (Version Restaurée, 36 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique Navale",
    "title": "La marine française et les sous-marins",
    "summary": "Le rapport de M. Fleury-Ravarin confirme la supériorité de la France en matière de sous-marins. Avec quatre unités en service et dix en construction, la marine nationale renforce considérablement son potentiel défensif.",
    "paragraphs": [
      "Lorsque le budget du ministère de la Marine viendra en discussion, nous entendrons de nouveau les ardentes controverses entre les partisans des gros cuirassés et ceux qui estiment qu'il vaut mieux construire des croiseurs rapides et des torpilleurs.",
      "En revanche, il semble que tout le monde soit d'accord pour doter la France de navires sous-marins, dont le rôle apparaît déjà comme formidable au point de vue défensif, et auxquels un avenir prochain garde peut-être de hautes destinées pour l'offensive.",
      "Le rapport de M. Fleury-Ravarin, membre de la commission du budget et chargé du département de la Marine, contient des renseignements circonstanciés et rassurants sur l'état de cette question. Il déclare que la France est en avance sur toutes les autres nations au point de vue du nombre et de la qualité des sous-marins.",
      "La France a actuellement, en activité de service, quatre sous-marins : le Gymnote, le Morse, le Gustave-Zédé, le Narval, et on en a mis dix sur les chantiers.",
      "Il résulte de là que le gouvernement se rend compte du rôle considérable des sous-marins ; si une guerre éclatait, nous aurions en eux des instruments de combat redoutables rendant fort périlleuse toute agression ennemie."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Technologie Navale",
    "title": "La révolution des turbines à vapeur",
    "summary": "L'introduction des turbines à vapeur, testées avec succès sur la Turbinia, promet une mutation majeure de l'art naval grâce à leur compacité, leur simplicité mécanique et leur haute vélocité.",
    "paragraphs": [
      "Il vient, d'autre part, de se poser une question qui attire au plus haut point l'attention de tous les marins, et qui peut amener une révolution véritable dans l'art naval : c'est celle des turbines à vapeur.",
      "Les Anglais espèrent y être parvenus sur un petit bateau, la Turbinia, dont les essais font grand bruit et qui a atteint, dit-on, la vitesse inconnue jusqu'ici de 33 milles à l'heure, en développant une puissance de 2 000 chevaux.",
      "Avec ce système de turbines, on a un organisme très simple, tenant peu de place, facile à surveiller et ne donnant pas de vibrations pendant la marche. L'Amirauté britannique a adopté ce genre de moteurs pour deux destroyers de 400 tonneaux, le Viper et le Cobra.",
      "En France, un torpilleur de 90 tonneaux et un torpilleur-vedette de 40 tonneaux vont avoir leur propulsion assurée par des turbines."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des ministres",
    "summary": "Sous la présidence de M. Loubet, le Conseil des ministres a examiné la situation diplomatique en Extrême-Orient, le projet de loi sur les associations et le budget spécial pour l'Algérie.",
    "paragraphs": [
      "Les ministres se sont réunis, hier matin, à l'Elysée, sous la présidence de M. Loubet.",
      "Le ministre des Affaires étrangères a donné connaissance au Conseil des télégrammes reçus d'Extrême-Orient concernant les négociations à Pékin.",
      "Le président du Conseil a donné connaissance du texte définitif de la loi sur les associations.",
      "Le ministre des Finances a fait connaître qu'il demanderait au Sénat de se prononcer dans le plus bref délai sur le budget spécial de l'Algérie."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Actualité Internationale",
    "title": "La maladie du Tsar",
    "summary": "L'état de santé de l'empereur de Russie montre une légère amélioration. Bien que le surmenage ait affaibli sa constitution, le souverain bénéficie du soutien et de la ferveur constante de ses sujets.",
    "paragraphs": [
      "Les nouvelles reçues hier de Livadia constatent une légère amélioration survenue dans l'état de l'auguste malade. Les médecins qui le soignent ne manifestent aucune inquiétude.",
      "L'Empereur a bien passé la journée d'hier. L'état général est bon, la maladie suit un cours normal.",
      "Nous avons pu joindre hier un très haut personnage de la colonie russe de Paris qui nous a expliqué que le travail acharné auquel se livre l'Empereur depuis tantôt trois ans a compromis fortement l'équilibre de son physique.",
      "Quant aux paysans, ils se montrent très émus de la maladie de leur Père le Tsar. Chaque jour, il en accourt plus de mille à Saint-Pétersbourg pour lire les bulletins de santé."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'attentat contre l'Empereur Guillaume",
    "summary": "L'agression contre l'empereur Guillaume est l'acte d'une femme déséquilibrée sans visée politique. La justice s'oriente vers son internement immédiat dans un établissement spécialisé.",
    "paragraphs": [
      "L'auteur de l'attentat commis contre l'empereur Guillaume est une pauvre folle, et l'acte dont elle s'est rendue coupable n'a aucun caractère politique.",
      "La fille Schnapka, qui est faible d'esprit, est atteinte du délire de la persécution. Elle voulait tuer un avoué pour se venger d'un procès d'expulsion, mais ayant appris que l'Empereur allait passer, elle a conçu l'idée de commettre son attentat.",
      "Le juge d'instruction ordonnera probablement que la prévenue soit envoyée immédiatement dans un hospice d'aliénés."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique",
    "title": "La visite du Président Kruger",
    "summary": "Marseille se prépare à recevoir solennellement le président Kruger. Le comité pour l'indépendance des Boërs a acté le programme diplomatique réservé au chef du Transvaal, traité avec les honneurs d'un haut dignitaire.",
    "paragraphs": [
      "Tout s'organise à Marseille pour recevoir dignement le représentant des héroïques Républiques sud-africaines. L'arrivée du président Kruger à Marseille paraît certaine.",
      "Le comité pour l'indépendance des Boërs a arrêté le programme définitif de la réception. Le président du Transvaal sera considéré et traité comme un haut personnage investi d'une mission diplomatique."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Criminelle folie à La Haie-Fouassière",
    "summary": "Un drame effroyable a frappé La Haie-Fouassière : un jeune homme, Fontenau, en proie à une folie mystique, a tiré sur ses parents après avoir cru recevoir l'ordre divin de les abattre. Leurs jours sont en grand danger.",
    "paragraphs": [
      "Un drame terrifiant s'est déroulé ce matin à La Haie-Fouassière, dans l'arrondissement de Nantes. Pris d'un subit accès de folie furieuse, un jeune homme d'une trentaine d'années, nommé Fontenau, a tiré des coups de revolver sur son père et sa mère.",
      "Atteint de folie mystique, Fontenau avait été interné à l'asile Saint-Jacques et en était sorti depuis deux mois.",
      "Le parricide a déchargé son arme sur son père dans un champ, puis est rentré chez lui pour tirer sur sa mère. Les voisins ont désarmé l'assassin qui répétait : « Là-haut, on m'a ordonné de tuer mon père et ma mère ». Les deux vieillards sont dans un état désespéré."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame dans le grand monde : un mari tue sa femme",
    "summary": "Émotion vive rue de Provence : le comte de Cornulier-Lucinière a abattu son épouse, qu'il soupçonnait de relations illégitimes avec son avocat, M. Leroux. La victime a succombé à ses blessures à l'hôpital Lariboisière.",
    "paragraphs": [
      "Un drame, qui a soulevé une très vive émotion dans le quartier de l'Opéra, s'est déroulé hier à deux heures et demie, au numéro 91 de la rue de Provence. Le comte Charles-Marie de Cornulier-Lucinière a tué sa femme par balles, soupçonnant celle-ci d'entretenir des relations coupables avec son avocat-conseil, M. Leroux.",
      "Le comte a attendu la sortie de la femme de chez M. Leroux et a fait feu à trois reprises. La comtesse, transportée à l'hôpital Lariboisière, y est morte peu après.",
      "Interrogé par le commissaire de police, M. de Cornulier a manifesté un profond repentir, affirmant qu'il ne voulait pas tuer mais seulement provoquer un scandale."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille - Marie-Madeleine",
    "summary": "Au cœur du bois de Boulogne, deux cavaliers, le comte Maurice de Rambert et son compagnon George de Prayssac, cheminent de concert lors d'une promenade matinale baignée de calme.",
    "paragraphs": [
      "Quelques jours plus tard, vers dix heures et demie du matin, deux cavaliers admirablement montés l'un et l'autre trottaient botte à botte dans une allée peu fréquentée du bois de Boulogne.",
      "Le comte Maurice de Rambert était grand, avec toutes les apparences de la force. Son compagnon, George de Prayssac, était un jeune homme de taille ordinaire, mince et flexible en apparence comme un roseau, aux traits doux et fins."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le crime de la comtesse de Cornulier",
    "summary": "Suite à l'assassinat de la comtesse de Cornulier, M. Leroux a réfuté tout lien intime avec la victime. Le comte a été écroué, et l'instruction judiciaire, dirigée par M. le juge André, a été ouverte.",
    "paragraphs": [
      "M. Leroux, entendu par M. Tanguy, a affirmé au commissaire de police qu'il n'avait jamais eu avec Mme de Cornulier que des relations toutes amicales et qu'il n'était pour elle qu'un avocat.",
      "M. le comte de Cornulier a été écroué dans la soirée au dépôt, à la disposition du procureur de la République.",
      "Le cadavre de Mme de Cornulier a été envoyé à la morgue.",
      "M. André, juge, a été chargé de l'instruction."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Étranger",
    "title": "Dépêches d'Angleterre sur la guerre des Boërs",
    "summary": "Le Daily Express annonce des distinctions pour lord Roberts, lord Kitchener et le général Baden-Powell. Les troupes britanniques occupent Klerksdorp après de brefs engagements contre les commandos boërs.",
    "paragraphs": [
      "Le Daily Express annonce que lord Roberts recevra le titre de duc, que lord Kitchener sera élevé à l'ordre du Bain et que le général Baden-Powell sera fait chevalier du même ordre.",
      "Lord Roberts télégraphie de Johannesburg : les troupes de Barton et Douglas ont occupé Klerksdorp. Durant cette marche, le général Douglas a été engagé quotidiennement contre un commando boër. Le bilan s'établit à trois blessés parmi nos rangs et huit prisonniers faits chez l'ennemi."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Étranger",
    "title": "Situation en Afrique du Sud",
    "summary": "Les actes de sabotage se multiplient sur les lignes de chemin de fer entre Bloemfontein et le fleuve Orange. Les mouvements de troupes boërs s'intensifient tandis que le trafic ferroviaire accuse de nouveaux retards.",
    "paragraphs": [
      "Les Boërs ont multiplié les actes de sabotage, coupant la voie ferrée en vingt points entre Bloemfontein et le fleuve Orange. Aujourd'hui, la ligne est également interrompue entre Kimberley et Belmont.",
      "On mande de Prétoria que les Boërs du nord dirigent leurs troupeaux vers le sud et que deux commandos ont été signalés aux environs de Balmoral.",
      "Le train en provenance du Cap n'a atteint Bloemfontein que ce matin, un retard causé par un engagement survenu près d'Edenburg."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Chine",
    "title": "Nouvelles des troupes en Chine",
    "summary": "Les forces expéditionnaires occupent les tombes de l'Ouest. Le maréchal tartare Fan-Taï est condamné à mort pour massacres, tandis que les diplomates sont reçus par le commandement en chef au palais impérial.",
    "paragraphs": [
      "La colonne revenant de Pao-Ting-Fou a pris possession, sans rencontrer de résistance, des tombes de l'Ouest, situées à cent kilomètres au sud-ouest de Pékin.",
      "La commission d'enquête de Pao-Ting-Fou a prononcé la sentence de mort à l'encontre du maréchal tartare Fan-Taï ainsi que d'un officier chinois, tous deux impliqués dans les massacres d'Européens.",
      "Le comte de Waldersee a reçu aujourd'hui le prince Tching et Li-Hung-Chang au palais impérial."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le crime de Tourcoing",
    "summary": "La cour d'assises de la Seine-Inférieure a condamné Denise Dubruque à douze ans de travaux forcés pour l'assassinat de la veuve Devernay, sa maîtresse, commis par cupidité.",
    "paragraphs": [
      "La cour d'assises de la Seine-Inférieure a examiné hier l'affaire du crime de Tourcoing. Denise Dubruque était accusée d'avoir assassiné sa maîtresse, la veuve Devernay, âgée de soixante-treize ans, dans le but de la dépouiller.",
      "Le jury, ayant reconnu la fille Dubruque coupable avec circonstances atténuantes, le tribunal l'a condamnée à une peine de douze ans de travaux forcés."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Le dîner du Ministère de la Guerre",
    "summary": "Le ministre de la Guerre et Mme André ont donné une grande réception au ministère. Malgré sa santé fragile suite à son voyage en Tunisie, Mme André a tenu à recevoir ses cent dix convives en personne.",
    "paragraphs": [
      "Le ministre de la Guerre et Mme André ont offert hier soir un dîner de cent dix couverts. Une réception, réunissant notamment les officiers, les employés du ministère ainsi que leurs familles, a suivi ce repas.",
      "Bien qu'à peine rétablie de l'accident survenu lors de son récent voyage en Tunisie, Mme André a tenu à assurer elle-même les honneurs de ses salons auprès de tous ses invités."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Régiment proposé pour la Croix",
    "summary": "Le général Lambert, sénateur, sollicite du ministre de la Marine une distinction pour le drapeau du régiment ayant compté le plus grand nombre de compagnies lors des combats héroïques de Bazeilles.",
    "paragraphs": [
      "Le général Lambert, sénateur, a adressé au ministre de la Marine une lettre proposant de décorer l'un des drapeaux des troupes de marine ayant servi à Bazeilles, estimant que le régiment désigné doit être celui qui a fourni le plus de compagnies lors de ce drame."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Catastrophe du Sud-Express",
    "summary": "Les nouvelles des blessés de la catastrophe du Sud-Express sont rassurantes. L'enquête se poursuit alors que le mécanicien avait alerté sur l'état de la voie deux jours plus tôt.",
    "paragraphs": [
      "Des nouvelles rassurantes ont été données sur l'état des blessés ramenés à Bayonne. Le mécanicien du train avait signalé l'état défectueux de la voie entre Saint-Geours et Saubusse deux jours auparavant.",
      "Les ingénieurs en chef de la Compagnie du Midi déclarent que les causes exactes du déraillement restent indéterminées et difficiles à établir."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Théâtre",
    "title": "Les premières représentations : Alceste et la Basoche",
    "summary": "La scène parisienne s'anime avec la reprise de la tragédie antique Alceste à la Comédie-Française et le retour de La Basoche à l'affiche de l'Opéra-Comique.",
    "paragraphs": [
      "La tragédie 'Alceste' d'Euripide a été représentée hier soir sur la scène de la Comédie-Française dans une adaptation de M. Rivollet.",
      "L'Opéra-Comique a remis sur son affiche 'La Basoche', œuvre du directeur actuel du théâtre, M. Albert Carré."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Importante arrestation à Poitiers",
    "summary": "L'enquête sur le meurtre commis près d'Aytré le 5 octobre dernier aboutit : le suspect, Fridolin Mercier, a été appréhendé à Genève le 15 novembre.",
    "paragraphs": [
      "Fridolin Mercier, présumé auteur du meurtre commis dans la nuit du 5 octobre sur la route d'Aytré, a été arrêté à Genève le 15 novembre sur les indications des autorités de Poitiers."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Activités du Président de la République",
    "summary": "Le Président de la République a reçu diverses personnalités militaires et diplomatiques. Par ailleurs, il a confirmé son prochain déplacement à Nice en avril pour les fêtes de gymnastique.",
    "paragraphs": [
      "Le Président de la République a reçu hier matin en audience particulière les généraux Hardy de Périni et Paussérieu, ainsi que d'autres personnalités. Le grand-duc Wladimir a également rendu visite au Président.",
      "Le Président se rendra à Nice au mois d'avril prochain pour présider les fêtes de gymnastique."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Recette d'Alfortville dévalisée",
    "summary": "Émile Eudes, receveur à Alfortville, a déclaré la disparition de 3 550 francs qu'il avait emportés en quittant son bureau mardi soir. Une plainte a été déposée auprès du commissaire Cuvelier.",
    "paragraphs": [
      "Émile Eudes, âgé de quarante ans, receveur à Alfortville, quittait son bureau mardi soir en emportant le montant de la recette, s'élevant à 3 550 francs.",
      "Le lendemain, une plainte fut déposée entre les mains de M. Cuvelier, commissaire de police. Émile Eudes s'est présenté pour déclarer la perte de cette somme."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Libération provisoire de Joseph Cipriani",
    "summary": "Joseph Cipriani, accusé d'avoir porté des coups de couteau à un commissaire adjoint en octobre dernier, a été remis en liberté provisoire par M. le juge Vallès.",
    "paragraphs": [
      "M. le juge Vallès a fait remettre hier en liberté provisoire le jeune Joseph Cipriani, qui, on s'en souvient, avait porté, en octobre dernier, cinq coups de couteau à M. M., commissaire adjoint, le blessant légèrement."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accidents à La Défense et Clichy",
    "summary": "Deux accidents graves sont survenus : deux enfants ont été renversés par un tilbury à la Défense, tandis qu'un terrassier a été grièvement blessé par un éboulement à Clichy.",
    "paragraphs": [
      "Marie Wanok, âgée de deux ans, demeurant avenue de la Défense, jouait avec son frère, âgé de dix ans, quand un tilbury dont le cheval était emporté culbuta les deux enfants.",
      "La fillette fut blessée à la tête et le petit garçon à la poitrine ; ce dernier a été transporté à l'hôpital des Enfants-Malades.",
      "À Clichy, un terrassier, Ludovic Poulin, âgé de vingt-neuf ans, travaillait hier dans une tranchée, au milieu d'un chantier boulevard Victor-Hugo, lorsqu'un éboulement se produisit. Le malheureux, qui a eu la poitrine écrasée, a dû être transporté à l'hôpital Beaujon."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Incident sur le tramway et découverte macabre",
    "summary": "Un tramway a heurté une voiture à Levallois-Perret, causant des dégâts matériels. Par ailleurs, le corps d'un nouveau-né a été découvert rue Trézel.",
    "paragraphs": [
      "À Levallois-Perret, hier matin, à huit heures, le tramway électrique Madeleine-Colombes a tamponné, à la hauteur de la route de la Révolte, une voiture dont les brancards et l'avant furent mis en pièces. Le conducteur de la voiture en a été quitte pour des contusions.",
      "On a trouvé hier soir, vers dix heures, dans l'escalier de la maison située 5, rue Trézel, le corps d'un enfant du sexe masculin, âgé de quelques jours, enveloppé dans des linges.",
      "M. Durand, commissaire de police, secondé par son secrétaire, M. Bailly, recherche une femme que l'on croit être l'auteur du crime et qui a pris la fuite."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Disparition d'un débardeur",
    "summary": "Julien Tulluray, un débardeur de trente-deux ans, a disparu dans la Seine après une chute accidentelle alors qu'il tentait de monter dans un canot au quai d'Asnières.",
    "paragraphs": [
      "Un débardeur, Julien Tulluray, âgé de trente-deux ans, ayant voulu monter dans un canot, quai d'Asnières, est tombé dans la Seine où il a disparu. Malgré toutes les recherches, le corps de l'infortuné n'a pu être retrouvé."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame familial à Saint-Denis",
    "summary": "À la Plaine Saint-Denis, un jeune homme de dix-huit ans, Eugène Augenble, a violemment agressé ses parents et son frère à l'arme blanche après avoir essuyé un refus lors d'une demande d'argent. Il a été arrêté par la police.",
    "paragraphs": [
      "Plaine Saint-Denis. Un incorrigible vaurien, Eugène Augenble, âgé de dix-huit ans, avait quitté le domicile paternel il y a une quinzaine de jours.",
      "Hier après-midi, sachant sa mère seule au logis, le jeune Eugène s'est présenté avenue de Paris, au numéro 146, et a réclamé de l'argent. Mme Augenble n'étant pas en mesure de satisfaire sa demande, il l'a bousculée et menacée.",
      "Le père accourut, mais Eugène s'empara d'un couteau et s'élança sur son père et son frère qui, en voulant le désarmer, furent tous deux légèrement blessés à la main. M. le commissaire de police a fait arrêter Eugène Augenble, qui est désormais à sa disposition."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Cambriolage à Beaumont-sur-Oise",
    "summary": "À Beaumont-sur-Oise, des malfaiteurs ont pénétré dans la sacristie de l'église après avoir escaladé l'enceinte de l'édifice, parvenant à dérober plusieurs vases sacrés après avoir forcé une porte intérieure.",
    "paragraphs": [
      "Beaumont-sur-Oise. — Des cambrioleurs ont réussi à s'introduire dans la sacristie de l'église locale. Après avoir escaladé l'enceinte du sanctuaire, les malfaiteurs ont brisé une porte intérieure, ce qui leur a permis de s'emparer des vases sacrés remisés dans cette pièce."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Départements",
    "title": "Explosion à Compiègne et incendie à Heuble",
    "summary": "À Compiègne, une turbine a explosé à la sucrerie de Monchy-Humières, blessant deux ouvriers. Simultanément, un violent incendie a détruit des bâtiments agricoles au hameau de Bilheux, près d'Heuble.",
    "paragraphs": [
      "Compiègne. Hier soir, vers neuf heures, à la sucrerie de Monchy-Humières, une turbine a fait explosion, projetant des éclats qui ont atteint deux ouvriers, Achille Bruuin et Joseph Deleu. Blessés, ils ont été conduits à l'hôpital de Compiègne.",
      "Un violent incendie s'est déclaré, la nuit dernière, au hameau de Bilheux, commune d'Heuble, dans des bâtiments appartenant à M. Cavelier."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Départements",
    "title": "Incendie à la brasserie Courtier à Châlons",
    "summary": "Un violent incendie a ravagé hier la brasserie Courtier, située rue Roche à Châlons. Si les dégâts matériels causés par le sinistre sont considérables, l'établissement est heureusement couvert par ses assurances.",
    "paragraphs": [
      "Un incendie d'une grande violence s'est déclaré hier à la brasserie Courtier, située au numéro 1 de la rue Roche, à Châlons. Le feu avait couvé toute la journée dans les combles avant de se manifester avec vigueur en soirée.",
      "Les dégâts, qui sont fort heureusement couverts par des polices d'assurances, apparaissent comme très élevés suite à l'intervention des secours pour circonscrire le sinistre."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Économie",
    "title": "Réception des travaux stratégiques de l'Est",
    "summary": "La commission des travaux stratégiques de l'Est a procédé à l'inspection du nouveau tronçon ferroviaire entre Hévigny et Nançois-le-Petit, une quadruple voie facilitant le transit vers le 6e corps d'armée.",
    "paragraphs": [
      "La commission de réception des travaux stratégiques de l'Est, accompagnée des hauts fonctionnaires de la compagnie, est arrivée ce matin à Châlons. Après une visite des ouvrages d'art et un déjeuner, un train spécial a transporté les membres de la commission à Hévigny pour réceptionner le tronçon stratégique s'étendant jusqu'à Nançois-le-Petit.",
      "Ce travail considérable, exécuté sous la direction de M. l'ingénieur en chef Belley, a duré deux ans. Cette quadruple voie, longue de soixante kilomètres, assure désormais une liaison rapide entre la région parisienne et les places fortes du 6e corps d'armée."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Courses",
    "title": "Résultats des courses à Neuilly-Levallois",
    "summary": "Malgré des conditions météorologiques défavorables ayant découragé nombre de sportsmen, les favoris se sont imposés lors des épreuves de Neuilly-Levallois, marquées par plusieurs victoires notables.",
    "paragraphs": [
      "Le mauvais temps avait décidé beaucoup de sportsmen à rester chez eux. À l'exception de Tirelire, dans le prix d'Automne, tous les vainqueurs étaient les favoris.",
      "Les épreuves ont vu les victoires de Tirelire (jockey Landier), Scotiche (E. James), Tourterelle (Cavey fils), Titane (Tesnière) et Syria II (Viel fils)."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Fruit défendu",
    "summary": "Après avoir recueilli les informations nécessaires sur Rose, le protagoniste se prépare à une mission douloureuse : annoncer le décès de la jeune femme à son père éploré et organiser le transfert de son corps.",
    "paragraphs": [
      "Enfin, il demanda quelques renseignements à Gaspard, le nom, l'adresse de Rose. Ensuite, il conseilla au jeune homme de se rendre chez M. Ladouce. Après quoi, sans doute, on permettrait au père de faire enlever le corps de sa fille.",
      "Du reste, votre premier devoir, c'est de prévenir le père, fit l'employé. Il dit cela placide, comme il eût dit, avec le même ton : « Vous avez le droit d'allumer votre cigarette en sortant. »",
      "Prévenir Jérôme ! Son amitié n'hésita pas, si cruelle que fût cette mission. Au plus vite, il voulait arracher Rose à ce caveau lugubre. La laisser plus longtemps à la Morgue abandonnée, il lui semblait que c'était une profanation. Il sortit.",
      "Les journaux venaient d'arriver dans les kiosques. Il en acheta plusieurs, dans l'espoir d'y trouver le mot de l'énigme. Tous rapportaient le drame de l'avenue Kléber. Dans aucun, le nom de Rose-Manon."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Miettes du Bonheur",
    "summary": "À la recherche de M. Berthiot, M. de Courtial s'introduit dans un hôtel modeste. Guidé par un garçon d'étage, il s'apprête à confronter le locataire mystérieux de la chambre 14.",
    "paragraphs": [
      "Le bureau était à gauche. Une dame s'y trouvait assise derrière une table couverte d'un tapis rouge, compulsant des registres ouverts devant elle.",
      "L'officier s'informa : « Monsieur Berthiot est-il encore dans cet hôtel ? » La femme leva la tête, fixa le visiteur par-dessus des lunettes noires, puis répondit : « Parfaitement, monsieur. Vous désirez le voir ? »",
      "« Oui, madame. » Au troisième, chambre 14. M. de Courtial sortit, s'engagea dans l'escalier qui s'érigeait au fond du couloir entre quelques plantes vertes.",
      "Au troisième, un garçon, prévenu par un coup de sonnette, attendait, perché sur la balustrade : « Monsieur demande ? La chambre 14 ? Tenez, c'est ici. »",
      "Il ajouta : « Le locataire doit s'y trouver, il me semble. J'ai entendu remuer tout à l'heure. Il n'a pas dû sortir depuis. »",
      "Une pénombre profonde régnait. Une odeur de cuisine stagnait, écœurante. L'Hôtel de France ne péchait pas par un excès de luxe et de confort. M. de Courtial suivit le couloir qui lui avait été indiqué. Il frappa à la troisième porte à droite. Aussitôt, il entendit un bruit de chaise remuée, puis un craquement de pas. La porte s'ouvrit."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Faits Divers",
    "title": "Drame de l'avenue Kléber : la famille informée",
    "summary": "Accompagné par Gaspard, le père de Rose apprend la terrible nouvelle. Le choc est brutal : sa fille a été retrouvée morte dans des conditions mystérieuses, et son corps repose désormais à la Morgue.",
    "paragraphs": [
      "En montant le petit escalier qu'il connaissait si bien, ses jambes tremblaient. À ce père, à cette mère, il fallait apprendre la mort de leur fille. Et quelle mort !",
      "Les pauvres gens ne s'étaient pas couchés. Gaspard les trouva tous les trois dans la salle à manger. Ils étaient assis l'un auprès de l'autre. Lorsque Gaspard entra, ils se levèrent. Jérôme eut l'instinct que Gaspard allait lui apprendre la vérité.",
      "« Gaspard ! Gaspard ! Tu sais quelque chose ? » Il se laissa tomber sur une chaise. Régine seule ne l'interrogea point. Elle était sûre. Haletants, ils attendaient. Il éclata en sanglots.",
      "Jérôme, les lèvres serrées, peut à peine articuler : « Un grand malheur, n'est-ce pas ? » « Oui. » « Elle est blessée, peut-être ? » « Oui. »",
      "Gaspard répondit : « Rose est morte. » Marianne pencha la tête sur sa poitrine. Ses bras tombèrent. Elle était évanouie. Jérôme bégayait : « Elle est morte ? C'est bien cela que tu as dit, n'est-ce pas, Gaspard ? C'est bien cela. Où est-elle ? » « À la Morgue. »"
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Faits Divers",
    "title": "Confrontations et soupçons",
    "summary": "Tandis que la famille en deuil se rend à la morgue, les circonstances tragiques du décès de Rose-Manon chez Jean Villaurier soulèvent d'immenses questions sur l'implication de ce dernier.",
    "paragraphs": [
      "Gaspard dit : « On a retrouvé un poignard dans le cœur, à l'hôtel de l'avenue Kléber, chez Jean Villaurier. Chez cet homme ! »",
      "« Tu te trompes, Gaspard, tu te trompes ! » dit Jérôme avec violence. Le père garda un instant le silence. Hagard, perdu, il considérait Gaspard, Marianne, Régine blême. Et il finit par dire : « Alors, quoi ? »",
      "« Il faut chercher. Dans tous les cas, soyez sûr que pas un soupçon n'effleure et ne souille la mémoire de ma pauvre Rose. » Ils sortirent, descendirent dans Paris et se dirigèrent vers la morgue.",
      "La veille, devant Rose-Manon morte, Jean Villaurier avait été frappé d'un coup de folie. Il avait pris la fuite, sans réfléchir, sans autre pensée que celle d'échapper à l'horrible spectacle de la jeune fille étendue, sanglante, au milieu des fleurs."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Informations Maritimes",
    "title": "Arrivées et départs des paquebots",
    "summary": "Mouvements maritimes des 14 et 15 novembre 1899 : le paquebot Laos a quitté Port-Saïd, tandis que l'Entre-Rios, le Carolina, le Comète et l'Afrique poursuivent leurs rotations entre la France, l'Afrique et l'Amérique du Sud.",
    "paragraphs": [
      "Le paquebot Laos, des Messageries Maritimes, venant de l'Indo-Chine, a quitté Port-Saïd le 14.",
      "L'Entre-Rios, des Chargeurs Réunis, venant de Pauillac, est arrivé le 14 à Pasajes, en route pour La Plata.",
      "Le Carolina, des Chargeurs Réunis, venant de La Plata via Dunkerque, est arrivé au Havre le 14.",
      "Le Comète, de la Compagnie Havraise, venant de Santa-Rosalia et La Plata via Swansea, est parti de Dunkerque le 14 pour le Havre.",
      "L'Afrique, des Chargeurs Réunis, venant de la côte occidentale d'Afrique, est parti de Ténériffe le 15 pour Pauillac et le Havre."
    ]
  }
];
