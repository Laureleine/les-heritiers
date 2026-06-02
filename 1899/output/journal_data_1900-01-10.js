// Date: 1900-01-10
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-10 (Version Restaurée, 38 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "L'ouvrier-type anglais selon M. Jacobs",
    "summary": "M. Jacobs tente de définir l'ouvrier anglais type, « William », via des statistiques. Ce portrait, loin d'être idyllique, révèle une condition matérielle précaire, offrant une comparaison utile avec la situation française.",
    "paragraphs": [
      "Un économiste étranger, M. Jacobs, vient d'avoir une idée originale : dégager les traits généraux d'un peuple ou d'une race par la superposition de photographies pour obtenir un portrait-type. Voulant appliquer cette méthode à la classe ouvrière, il a créé l'ouvrier-type anglais, baptisé William, à partir de moyennes statistiques.",
      "William a trente-cinq ans et est marié à Jane. Ensemble, ils vivent selon des moyennes établies sur leur salaire, leur habillement et leur mode de vie. M. Jacobs décrit ainsi un quotidien fait de travail en usine, d'un logement simple et de goûts intellectuels limités.",
      "La lecture de cette monographie apporte toutefois une certaine déception : loin de l'image séduisante souvent dépeinte, l'ouvrier anglais apparaît avec un salaire faible et des conditions de vie parfois précaires, bien que des efforts aient été faits en Angleterre pour améliorer les logements ouvriers via des associations spécialisées.",
      "En somme, si cette monographie présente un raccourci utile de la situation matérielle, intellectuelle et morale, elle permet surtout de remettre en perspective l'ouvrier français en évitant de surévaluer la condition de son homologue anglais."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des Ministres",
    "summary": "Réuni sous la présidence de M. Loubet, le Conseil des ministres a confirmé l'occupation d'In-Salah, examiné l'incident de Saint-Domingue et acté des nominations aux Finances ainsi qu'un décret sur l'inspection de l'armée.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin à l'Élysée sous la présidence de M. Loubet. Le Conseil a pris connaissance des dépêches relatives à la mission Flamant et a confirmé que l'occupation d'In-Salah serait maintenue.",
      "Le ministre des Affaires étrangères a rendu compte de l'incident de Saint-Domingue et des mesures prises. Par ailleurs, des changements ont été actés au ministère des Finances, notamment le départ en retraite de M. Legeay, remplacé par M. Payelle, tandis que le ministre de la Guerre a présenté un décret sur les inspections générales annuelles."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Éditorial",
    "title": "La session parlementaire de 1900",
    "summary": "La session parlementaire de 1900 s'ouvre sous de bons auspices. L'apaisement des passions politiques et la résolution des conflits sociaux laissent entrevoir une année prometteuse, marquée par l'Exposition universelle.",
    "paragraphs": [
      "La session parlementaire de 1900 s'ouvre sous des auspices satisfaisants. Les passions politiques s'éteignent et la démocratie a su affirmer sa force face aux adversaires de la République.",
      "Les grèves, qui semblaient menaçantes, se sont résolues par l'accord entre le capital et le travail. Enfin, l'Exposition universelle se profile comme un grand temple de la paix, promettant une année 1900 mémorable pour la France."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Exécution de Louise Masset à Londres",
    "summary": "Louise Masset, institutrice française condamnée pour le meurtre de son enfant, a été pendue ce matin à la prison de Newgate à Londres, après avoir confessé son crime.",
    "paragraphs": [
      "Louise Masset, l'institutrice française condamnée pour le meurtre de son enfant, a été exécutée par pendaison ce matin à la prison de Newgate à Londres.",
      "Malgré une pétition en sa faveur, la justice a suivi son cours. La condamnée a confessé son crime peu avant son exécution, affirmant que la sentence était juste."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le crime de Provins",
    "summary": "Le corps du septuagénaire Jean-Nicolas Rousselot a été découvert dans un puits à Bouy. L'enquête révèle un assassinat crapuleux commis pour un butin dérisoire de quelques centimes.",
    "paragraphs": [
      "Le corps de M. Jean-Nicolas Rousselot, âgé de soixante-treize ans, a été retrouvé dans un puits près de sa demeure à Bouy. L'enquête a établi qu'il a été assassiné pour un butin dérisoire : un paquet de tabac et 50 centimes.",
      "La victime était connue pour ne pas fermer sa porte à clé, malgré les avertissements des voisins. Les magistrats instructeurs et le médecin légiste ont conclu à un meurtre perpétré à l'aide d'un instrument contondant."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident aux mines de Courrières",
    "summary": "Un tragique accident ferroviaire survenu au carreau de la fosse n° 2 des mines de Courrières a coûté la vie à trois ouvriers, Gaston Poitiez, Alexandre Hayel et Gabriel Delannoy. Le parquet de Béthune enquête.",
    "paragraphs": [
      "Un grave accident s'est produit hier au carreau de la fosse n° 2 des mines de Courrières. Une défaillance dans un aiguillage a provoqué une collision violente entre deux wagons chargés et trois locomotives de manœuvre.",
      "Le bilan est lourd : trois morts, les nommés Gaston Poitiez, Alexandre Hayel et Gabriel Delannoy, ainsi que trois blessés. Le parquet de Béthune est sur place et mène une enquête approfondie pour établir les responsabilités de ce drame."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Double meurtre à Saint-Denis",
    "summary": "Une rixe sanglante a éclaté dans une verrerie de Saint-Denis entre ouvriers français et italiens, causant un mort. L'auteur, le nommé Feisthauer, a été arrêté et a fait des aveux complets.",
    "paragraphs": [
      "Un affrontement d'une extrême violence a éclaté entre des ouvriers français et italiens au sein d'une verrerie de Saint-Denis. La rixe a malheureusement entraîné la mort d'un homme et causé de graves blessures à un second.",
      "L'agresseur, identifié sous le nom de Feisthauer, a été promptement arrêté par les forces de l'ordre. Il a formulé des aveux complets lors de son interrogatoire. La police poursuit ses investigations pour identifier d'éventuels complices."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Étranger",
    "title": "Nouvelles de la guerre en Afrique du Sud",
    "summary": "Le siège de Ladysmith reste source de contradictions diplomatiques. Tandis que le général French signale des mouvements boërs à Colesberg, l'Angleterre accroît ses préparatifs militaires.",
    "paragraphs": [
      "Les nouvelles en provenance du siège de Ladysmith demeurent contradictoires. Si les journaux britanniques s'efforcent de minimiser les pertes, d'autres sources diplomatiques font état de chiffres nettement plus alarmants.",
      "Sur le front de Colesberg, le général French, après avoir mené une reconnaissance, signale des mouvements significatifs de troupes boërs. Pendant ce temps, les préparatifs militaires s'intensifient en Angleterre pour soutenir les opérations en Afrique du Sud."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "International",
    "title": "Les prisonniers de guerre en Afrique du Sud",
    "summary": "Tensions persistantes entre la République Sud-Africaine et Londres concernant le sort des captifs et les restrictions sur le ravitaillement, malgré les réponses évasives de M. Chamberlain.",
    "paragraphs": [
      "Un certain nombre de prisonniers de guerre ont été capturés par les forces anglaises ; dix-neuf d'entre eux sont arrivés à destination aujourd'hui après avoir subi une série d'incidents durant leur transfert.",
      "Le gouvernement de la République Sud-Africaine a transmis une dépêche officielle à lord Salisbury concernant les conditions de traitement des captifs et les restrictions imposées sur l'importation de denrées alimentaires. M. Chamberlain a, en retour, fourni des réponses jugées évasives."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "International",
    "title": "La saisie du vapeur Herzog par les Anglais",
    "summary": "Le navire allemand Herzog, suspecté de transporter de la contrebande de guerre, a été intercepté par la canonnière anglaise Thetis et déféré devant le tribunal des prises.",
    "paragraphs": [
      "Le vapeur allemand Herzog a été intercepté et capturé par la canonnière anglaise Thetis alors qu'il faisait route vers Delagoa-Bay.",
      "Le navire a été officiellement remis au tribunal des prises. Les autorités maintiennent un secret rigoureux sur la nature exacte de la contrebande de guerre que le navire serait supposé transporter."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "International",
    "title": "Le conflit des Cafres et les attaques à Rustenburg",
    "summary": "Le landrost de Rustenburg signale une incursion violente : les Cafres de Linchwe, encadrés par des officiers anglais, ont incendié Derdepoort, causant plusieurs morts et blessant gravement le député Barnard.",
    "paragraphs": [
      "Le landrost de Rustenburg signale que le 25 novembre, les Cafres de Linchwe, commandés par des officiers anglais, ont attaqué Derdepoort sur la frontière nord-ouest.",
      "La station a été brûlée et plusieurs personnes ont été massacrées ou blessées, dont M. Barnard, membre du Volksraad."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Française",
    "title": "Constitution du bureau de la Chambre des députés",
    "summary": "La Chambre des députés a effectué sa rentrée parlementaire. M. Paul Deschanel a été réélu président de l'assemblée avec 308 voix, devançant ainsi M. Henri Brisson.",
    "paragraphs": [
      "La session ordinaire de la Chambre a débuté sous la présidence de M. Turigny, doyen d'âge.",
      "M. Paul Deschanel a été réélu président de la Chambre avec 308 voix contre M. Henri Brisson.",
      "Le bureau définitif a été constitué avec le maintien des quatre vice-présidents et l'élection des nouveaux secrétaires."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique Française",
    "title": "Séance d'ouverture du Sénat",
    "summary": "Sous la présidence de M. Wallon, le Sénat a inauguré sa session par l'élection de M. Fallières à la présidence provisoire. Une proposition sur l'abolition de la peine de mort a été déposée.",
    "paragraphs": [
      "Le Sénat a tenu sa séance d'ouverture sous la présidence de M. Wallon. M. Fallières a été élu président provisoire du Sénat.",
      "M. Barodet a déposé une proposition de loi relative à l'abolition de la peine de mort pour inaugurer le vingtième siècle."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Tempête dans les Pyrénées-Orientales",
    "summary": "Une violente tempête a frappé l'arrondissement de Céret. Le vent a causé d'importants dégâts matériels à Amélie-les-Bains, Montbollo et Prats-de-Mollo, sans toutefois faire de victimes humaines.",
    "paragraphs": [
      "Une violente tempête du nord-ouest a frappé l'arrondissement de Céret. À Amélie-les-Bains, des arbres ont été déracinés et les lignes électriques coupées.",
      "À Montbollo et Prats-de-Mollo, des toitures d'églises et de fermes ont été emportées par la furie du vent, heureusement sans faire de victimes."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident de chaudière à Saint-Denis",
    "summary": "Un grave accident est survenu à l'Ile-Saint-Denis lors d'essais sur le remorqueur « la Champagne ». L'éclatement d'un tube a provoqué de sérieuses brûlures à plusieurs ouvriers.",
    "paragraphs": [
      "Un accident est survenu à bord du remorqueur « La Champagne », amarré à l'Ile-Saint-Denis, lors d'essais sur des chaudières récemment réparées.",
      "Un tube a éclaté, projetant de la vapeur à haute pression. Les blessés, dont MM. Levau et Bricou, ont été transportés à l'hôpital dans un état jugé grave."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Crime atroce à Paris",
    "summary": "Une macabre découverte a été effectuée dans le quartier des époux Loriguet : une ancienne concierge y a été retrouvée atrocement mutilée. La police judiciaire poursuit ses investigations pour identifier le criminel.",
    "paragraphs": [
      "Une découverte d'une horreur indicible a eu lieu dans le quartier des époux Loriguet, où le cadavre d'une femme a été retrouvé dépecé à son propre domicile.",
      "La victime, une ancienne concierge, fait l'objet d'une enquête approfondie de la police judiciaire qui examine avec soin l'entourage et les fréquentations de la malheureuse afin de mettre la main sur l'auteur de ce crime épouvantable."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Légion d'honneur",
    "title": "Promotions dans l'ordre de la Légion d'honneur",
    "summary": "Par décret officiel, le gouvernement a procédé à de nouvelles nominations au sein des ministères des Finances et des Travaux publics, élevant notamment M. Legoay au rang de commandeur de la Légion d'honneur.",
    "paragraphs": [
      "Par décret ministériel, plusieurs personnalités éminentes ont été nommées ou promues dans l'ordre de la Légion d'honneur au sein du Ministère des Finances et du Ministère des Travaux publics.",
      "M. Legoay se voit conférer la dignité de commandeur, entouré de nombreux officiers et chevaliers distingués pour leurs services loyaux dans les départements administratifs et techniques."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une Arrestation : Le concierge Richetto",
    "summary": "Le juge d'instruction Braunit a ordonné l'arrestation de Richetto, concierge des pères camilliens. L'individu, au passé judiciaire italien, est suspecté dans une affaire de vol après la découverte de preuves accablantes.",
    "paragraphs": [
      "Dans le courant de l'après-midi, M. Braunit, juge d'instruction, a fait procéder à l'arrestation du nommé Richetto, concierge des pères camilliens, sis rue de Sainte-Poy.",
      "Le magistrat a effectué une perquisition minutieuse de la loge du suspect, où furent saisies diverses cartes géographiques, des gravures ainsi que des instruments de musique. Richetto a dû avouer avoir été condamné en Italie à cinq années de réclusion pour des faits de vol.",
      "Parallèlement, des pièces à conviction capitales furent exhumées de la mare de la villa Noack, notamment du linge maculé de sang et des scies de menuisier, malgré les dénégations formelles de M. Richetto."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Nouvelles",
    "title": "Faits divers et actualités parisiennes",
    "summary": "Le préfet Lépine gratifie ses brigades, tandis que M. Jean Dupuy annonce le prochain concours agricole. En outre, la commune de Sillé-le-Guillaume exprime son soutien politique aux Boërs d'Afrique du Sud.",
    "paragraphs": [
      "M. Lépine, préfet de police, a procédé à la distribution de gratifications honorifiques aux agents des brigades de recherches en témoignage de satisfaction.",
      "M. Jean Dupuy, ministre de l'Agriculture, a officiellement fixé au jeudi 22 février l'ouverture du concours général agricole, qui se tiendra dans l'enceinte du palais des Beaux-Arts.",
      "Le conseil municipal de Sillé-le-Guillaume a solennellement voté une adresse de sympathie à l'égard des Boërs, geste chaleureusement salué par le consul général de la République sud-africaine."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le drame de la rue Robert-Fleury",
    "summary": "Un terrible drame a endeuillé la rue Robert-Fleury : une mère, Mme Boileau, et ses deux jeunes enfants ont péri après une chute mortelle depuis le balcon de leur domicile au troisième étage.",
    "paragraphs": [
      "Un drame épouvantable s'est déroulé rue Robert-Fleury. Mme Boileau et ses deux enfants ont fait une chute mortelle depuis le balcon de leur appartement situé au troisième étage.",
      "Le voisinage, sous le choc, décrit Mme Boileau comme une femme d'une grande douceur. M. Raynaud, commissaire de police, après examen des lieux, a constaté l'absence de tout désordre dans le domicile familial.",
      "Malgré les soins prodigués, les deux fillettes ont succombé lors de leur transfert vers l'hôpital Necker, et la mère a rendu le dernier soupir quelques heures seulement après ses malheureuses enfants."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Théâtre",
    "title": "Théâtre Antoine : Un Pair",
    "summary": "Le théâtre Antoine a inauguré le drame « Un Pair » de Louis Bruyerre. M. Antoine y livre une interprétation magistrale de Varambaut, victime d'un internement abusif au cœur d'une intrigue sombre en cinq actes.",
    "paragraphs": [
      "Le théâtre Antoine a donné hier la première représentation de « Un Pair », drame en cinq actes et six tableaux, de M. Louis Bruyerre.",
      "La pièce traite de l'internement abusif d'un homme dans une maison de santé pour aliénés, orchestré par une famille cupide avec la complicité d'un médecin sans scrupules.",
      "L'œuvre est supérieurement interprétée ; nous devons notamment souligner la performance admirable de M. Antoine dans le rôle de Varambaut."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident en gare du Nord",
    "summary": "Un grave accident est survenu à la gare du Nord lorsqu'un train en provenance d'Amiens a percuté un chariot. M. Henri Burette, grièvement blessé, a été transporté d'urgence à l'hôpital Lariboisière.",
    "paragraphs": [
      "Un train en provenance d'Amiens a tamponné un chariot mécanique sur les voies de la gare du Nord. M. Henri Burette, âgé de quarante ans, a été grièvement blessé dans le choc et transporté d'urgence à l'hôpital Lariboisière."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident avec une automobile",
    "summary": "M. Jules Kraeille et Mme Lelong ont été renversés par une automobile place Pigalle. Plus de peur que de mal pour les deux victimes, dont les blessures ont été soignées à la pharmacie du boulevard de Clichy.",
    "paragraphs": [
      "M. Jules Kraeille et Mme Lelong ont été renversés par une automobile sur la place Pigalle. Ils ont été immédiatement conduits à la pharmacie du boulevard de Clichy. Heureusement, leur état de santé n'est pas inquiétant."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Escroquerie et méprise",
    "summary": "Marcel Vandille, ouvrier serrurier, a été admis à l'Hôtel-Dieu après avoir ingéré une boisson frelatée vendue par un marchand de vin. Il a déposé plainte contre le commerçant.",
    "paragraphs": [
      "Un ouvrier serrurier, nommé Marcel Vandille, a porté plainte contre un marchand de vin suite à la consommation d'une bouteille frelatée. Son état, nécessitant des soins urgents, a justifié son admission à l'Hôtel-Dieu."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les exploits d'un faux sous-officier",
    "summary": "Julien Richard, un imposteur se faisant passer pour un sous-officier pour soutirer de l'argent, a été arrêté rue de la Chapelle par la police parisienne et conduit au Dépôt.",
    "paragraphs": [
      "Julien Richard, se faisant passer pour un sous-officier de l'armée, a commis plusieurs escroqueries à Paris. Il a été arrêté rue de la Chapelle par les autorités et immédiatement dirigé sur le Dépôt."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le désespoir d'un mari",
    "summary": "Mme Sichu, rentière estimée, a tenté de mettre fin à ses jours par l'absorption d'ammoniaque. Dans un trouble atroce, son mari, la croyant morte, s'est précipité par la fenêtre du second étage.",
    "paragraphs": [
      "Mme Sichu, rentière fort estimée dans son quartier, a tenté de mettre fin à ses jours en absorbant une dose d'ammoniaque. Son mari, dans un élan de désespoir en la croyant morte, s'est précipité par la fenêtre du deuxième étage."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Divers accidents et faits marquants",
    "summary": "La chronique parisienne enregistre plusieurs drames : le suicide d'un adolescent, la chute accidentelle d'une domestique et le décès tragique d'un ouvrier dans un atelier de la rue du Chemin-Vert.",
    "paragraphs": [
      "Georges Copin, âgé de dix-sept ans, s'est tiré un coup de revolver dans la poitrine.",
      "Une domestique, Mme Lavoie, a été grièvement blessée en tombant accidentellement d'une fenêtre.",
      "Un ouvrier, nommé Georges Raaud, dix-sept ans, est décédé accidentellement dans un atelier situé rue du Chemin-Vert.",
      "Plusieurs autres faits tragiques ainsi que des découvertes macabres ont été signalés dans les communes limitrophes de la capitale."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Faits Divers",
    "title": "Un crime mystérieux rue Louis-Lauesedat",
    "summary": "Mme Gonot a été victime d'une violente agression et d'un vol à son domicile. Malgré l'enquête menée par le commissaire Lannes, l'agresseur, qui n'a pas été vu par le voisinage, reste pour l'heure introuvable.",
    "paragraphs": [
      "Une lutte violente avait dû avoir lieu entre l'agresseur et sa victime ; seul un berceau, dans lequel dormait un enfant d'un an, n'avait pas été renversé.",
      "Prévenu aussitôt, M. Lannes, commissaire de police, s'est rendu rue Louis-Lauesedat et a fait donner les premiers soins à Mme Gonot ; mais celle-ci n'a pu répondre aux questions qui lui ont été posées que vers neuf heures du soir. Elle a raconté qu'un individu, qu'elle n'a pu reconnaître, s'était jeté sur elle.",
      "L'enquête a établi que le misérable, après avoir fait subir les derniers outrages à la malheureuse, s'était emparé d'une somme d'argent placée dans une armoire.",
      "Le coupable n'a été vu par personne et les voisins n'ont rien entendu. Toutefois, d'après certains indices relevés par la justice, il est à présumer que l'auteur de ce forfait ne tardera pas à être arrêté."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Santé",
    "title": "Le traitement de l'obésité selon le naturaliste Stowe",
    "summary": "L'obésité, fléau de notre siècle, favorise de graves pathologies. Le naturaliste Stowe présente l'eau déperditrice : une solution novatrice, sans régime, garantissant une innocuité totale.",
    "paragraphs": [
      "Les facilités de communication, en supprimant presque toute fatigue physique, et la douceur de l'existence moderne, ont fait de l'obésité la maladie du siècle.",
      "Par elle-même, cependant, l'obésité ne peut guère être considérée que comme une infirmité pénible et désagréable, mais ce sont les maladies et les accidents qu'elle entraîne toujours (diabète, albuminurie, maladie du cœur, etc.) qui en font un des plus terribles agents de mort de notre époque.",
      "La découverte du naturaliste Stowe est venue révolutionner la thérapeutique de l'obésité et fournir aux obèses un moyen sûr pour réduire sans danger les polysarcies les plus rebelles.",
      "L'eau déperditrice Stowe ne constitue pas un remède dans le sens propre du mot, puisqu'elle ne s'absorbe pas ; il n'en est pas moins vrai qu'elle constitue un traitement infaillible, idéal comme emploi, puisqu'il ne nécessite aucun régime spécial, est rapide, très peu coûteux et, ce qui est mieux, d'une innocuité absolue."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Bulletin du Travail",
    "title": "La crise diamantaire",
    "summary": "Une dépêche télégraphique en provenance d'Anvers rapporte une situation économique alarmante dans l'industrie du diamant, déplorant trois mille ouvriers désormais privés d'emploi.",
    "paragraphs": [
      "On mande d'Anvers : il y a actuellement trois mille ouvriers diamantaires sans travail."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Les Tribunaux",
    "title": "Le drame de Villers-Bretonneux",
    "summary": "La cour d'assises de la Somme a condamné Baudry à sept ans de réclusion pour le meurtre de Mme Penel, une ouvrière en bonneterie tuée mystérieusement d'un coup de fleuret en octobre dernier.",
    "paragraphs": [
      "Le 31 octobre dernier, un drame sanglant se déroulait à Villers-Bretonneux. La femme Penel, âgée de quarante-quatre ans, ouvrière en bonneterie, était tuée d'une façon mystérieuse.",
      "Le parquet d'Amiens, après une laborieuse enquête, mit en état d'arrestation le nommé Baudry, âgé de trente-six ans. Celui-ci aurait tué la femme Penel d'un coup de fleuret ; l'arme était entrée sur le côté gauche du corps et avait perforé une artère pulmonaire.",
      "Ce drame produisit une vive émotion à Villers-Bretonneux, où la victime jouissait d'une excellente réputation. Baudry a toujours nié avoir tué la femme Penel, tout en reconnaissant avoir eu une discussion avec elle. La cour d'assises de la Somme l'a néanmoins condamné à sept ans de réclusion."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Les Tribunaux",
    "title": "Condamnation d'un bigame",
    "summary": "Un bigame nommé Bonnaure, qui avait abandonné ses deux enfants en Algérie pour épouser une femme à Albi afin de s'approprier sa fortune, a été condamné par la cour d'assises du Tarn à deux ans de prison.",
    "paragraphs": [
      "La cour d'assises du Tarn vient de condamner à deux ans de prison un bigame nommé Bonnaure.",
      "Bonnaure, marié en Algérie, fut condamné en 1897 à trois mois de prison pour vol. Plus tard, il quitta l'Algérie, y abandonnant ses deux enfants, et vint en 1899 épouser à Albi une seconde femme, avec la fortune de laquelle il avait l'intention d'acheter un café. Les deux femmes ont demandé l'indulgence du jury et Bonnaure a bénéficié des circonstances atténuantes."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Les Tribunaux",
    "title": "Nouvelles judiciaires",
    "summary": "La cour d'assises des Landes a prononcé l'acquittement de Pierre Lamarque, cultivateur à Soustons, accusé d'avoir causé la mort de son voisin Étienne Morlaès au cours d'une dispute.",
    "paragraphs": [
      "La cour d'assises des Landes vient de juger le nommé Pierre Lamarque, cultivateur à Soustons, qui comparaissait sous l'accusation de coups et blessures ayant occasionné la mort, sans l'intention de la donner, de son voisin Étienne Morlaès, âgé de soixante et onze ans. L'accusé a été acquitté."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Nouvelles des scènes parisiennes",
    "summary": "Au programme des théâtres parisiens : la création de « La Joueuse d'orgue », le succès des pièces en vogue et l'annonce de la prochaine lecture de M. Léon Gandillot au Palais-Royal.",
    "paragraphs": [
      "Au théâtre de la République : première représentation de La Joueuse d'orgue, drame populaire en cinq actes et onze tableaux, de MM. Xavier de Montépin et Jules Dornay.",
      "Au Palais-Royal, Coralie et Cie ; au théâtre des Nouveautés, La Dame de chez Maxim.",
      "L'Opéra-Comique jouera ce soir La Vie de Bohème de Puccini. Shakspeare, le succès des Bouffes-Parisiens, continue ses représentations avec succès.",
      "M. Léon Gandillot doit lire demain au Palais-Royal sa nouvelle pièce, C'est la faute à Bérénice."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Nouvelles de l'Étranger",
    "title": "Recrutement anglais dans les Landes",
    "summary": "Clarification sur le recrutement d'hommes dans les Landes : il ne s'agissait nullement d'enrôler des soldats pour la guerre du Transvaal, mais d'engager des échassiers pour le théâtre de Drury-Lane à Londres.",
    "paragraphs": [
      "Sur la foi de renseignements mal interprétés, on a annoncé en France que des recruteurs anglais s'occupaient, dans le département des Landes, de réunir des hommes robustes pour les envoyer combattre les Boërs.",
      "Il y a eu confusion ; ce recrutement a bien eu lieu, mais la guerre du Transvaal y était tout à fait étrangère. Il s'agissait de constituer une troupe de jeunes gens, experts comme échassiers, pour les engager au théâtre royal de Drury-Lane à Londres."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Sports",
    "title": "Le succès du motocycle",
    "summary": "Le motocycle, ou tricycle à pétrole, conquiert la classe moyenne grâce à sa simplicité mécanique et son coût abordable. La France compte désormais plus de 5 000 exemplaires, dont 1 200 circulent dans le département de la Seine.",
    "paragraphs": [
      "Le véhicule rapide qui obtient le plus de succès dans la classe moyenne est bien certainement le motocycle, ou tricycle à pétrole. Il n'est pas d'un prix inabordable et son mécanisme est simple.",
      "À l'heure actuelle, on en compte en France cinq mille deux cent sept. Le département de la Seine en renferme à lui seul 1 200."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Sports",
    "title": "Grandes épreuves cyclistes de l'Exposition",
    "summary": "La sixième commission a validé le programme des compétitions cyclistes de l'Exposition universelle, prévoyant notamment le Grand Prix et la course des Nations sur la piste de 500 mètres du vélodrome de Vincennes.",
    "paragraphs": [
      "La sixième commission a définitivement adopté le programme des grandes épreuves cyclistes de l'Exposition qui se dérouleront sur la piste de 500 mètres de Vincennes, incluant le grand prix de l'Exposition et la course des Nations."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "La Température",
    "title": "Bulletin météorologique du 10 janvier",
    "summary": "Le bulletin du 10 janvier fait état de précipitations neigeuses et pluvieuses sur l'ensemble du territoire, sous l'influence de basses pressions au nord-ouest de l'Europe et d'un minimum dépressionnaire vers Malte.",
    "paragraphs": [
      "Mercredi 10 janvier. Des neiges et des pluies sont signalées presque partout en France. Les basses pressions persistent dans le nord-ouest de l'Europe, tandis qu'un minimum existe vers Malte. Le baromètre reste élevé dans le sud-ouest et l'est du continent."
    ]
  }
];
