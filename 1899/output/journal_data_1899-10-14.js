// Date: 1899-10-14
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-10-14 (Version Restaurée, 30 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "L'Université populaire : un foyer fraternel d'éducation",
    "summary": "Sous l'impulsion de Georges Deberme, l'Université populaire du faubourg Saint-Antoine naît pour offrir aux ouvriers un accès à la culture, à la bibliothèque et au théâtre, prônant une égalité sociale par le savoir.",
    "paragraphs": [
      "« Comme vous, ouvriers, nous sommes des travailleurs. Mais nous croyons que la vie humaine a des joies plus intimes, plus durables, plus hautes et moins onéreuses que celles du cabaret. Nous voulons une civilisation réelle, qui ne laisse plus en dehors d'elle la majorité des hommes, une civilisation qui ne soit plus l'œuvre et le profit de quelques-uns, à laquelle tous seront appelés à concourir et à participer. »",
      "L'honneur de la fondation de l'Université populaire appartient presque entièrement à un ouvrier typographe, Georges Deberme. À force d'énergie, il a réussi à regrouper des professeurs, des étudiants et des intellectuels pour créer ce foyer d'éducation situé dans le faubourg Saint-Antoine, dans un local ayant autrefois abrité un café-concert.",
      "La bibliothèque, la salle de musée, les causeries quotidiennes et la salle de théâtre constituent le cœur de cette institution. L'inauguration a été marquée par une conférence du professeur Scailles, qui a insisté sur l'égalité absolue devant régner entre éducateurs et élèves dans cette œuvre d'éducation sociale."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une haine vieille d'un siècle",
    "summary": "Dans le bois de chênes, le duc Horace et Gaston Girodias s'apprêtent à régler un différend familial par les armes, sous les yeux impuissants d'une femme qui n'a pu empêcher ce duel tragique.",
    "paragraphs": [
      "Elle ne dormit pas. Elle chercha toute la nuit le moyen d'empêcher ce duel. Elle ne trouva rien. Et puis, de quel droit ? Étrangère à cette maison, nouvelle venue dans cette famille, elle était même obligée de paraître ignorer cette rencontre.",
      "C'est bien dans l'avenue déserte du bois de chênes que le duel aura lieu entre le duc Horace et les frères Girodias. Les témoins, anciens serviteurs de la famille, déposent les sabres. La tension est palpable alors que le sort a désigné Gaston Girodias pour affronter le duc.",
      "Le combat commence sous les yeux effrayés de celle qui les suit. Les duellistes font preuve d'une grande maîtrise, évitant les coups imprudents, cherchant l'ouverture dans un silence pesant, tandis que la lutte s'engage avec gravité."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Armée",
    "title": "Le retour de l'uniforme obligatoire dans l'armée",
    "summary": "Le Ministre de la Guerre rétablit le port strict de l'uniforme. Cette mesure vise à effacer les disparités sociales et les excès de la tenue bourgeoise pour renforcer la discipline et le prestige militaire.",
    "paragraphs": [
      "Le décret qui rend de nouveau l'uniforme obligatoire dans l'armée est un retour aux véritables principes militaires. Il faut féliciter le Ministre de la Guerre d'avoir rompu avec des abus, notamment la tolérance du port d'habits bourgeois qui créait des inégalités de dépenses et nuisait à la discipline.",
      "Le Ministre de la Guerre souligne dans son rapport au Président de la République que cette mesure permet de renforcer le prestige de l'uniforme et d'imposer une égalité apparente entre les officiers, quelle que soit leur fortune personnelle.",
      "Le décret précise que le port de l'uniforme est désormais formellement imposé pour les militaires de tous grades, sauf exceptions spécifiques pour les officiers en congé, en permission ou en garnison à Paris."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Mouvements de troupes au Congo et mission Foureau",
    "summary": "Tandis que la mission Foureau est annoncée en sécurité, une violente altercation au Congo lors d'un palabre avec le roi Makoko a entraîné une riposte meurtrière contre les Batekès.",
    "paragraphs": [
      "Le consul général de France à Tripoli a fait savoir que la mission Foureau serait en sécurité dans l'Aïr et n'aurait jamais été attaquée.",
      "Par ailleurs, une échauffourée a eu lieu au Congo. Lors d'un palabre avec le roi Makoko, un chef local a tiré sur l'administrateur de Brazzaville, M. de Bonchamps. Les miliciens ont riposté, causant la mort de vingt Batekès et faisant cinquante blessés."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Étranger",
    "title": "Tremblement de terre aux Indes néerlandaises",
    "summary": "Un séisme dévastateur a ravagé la côte sud de l'île de Ceram dans la nuit du 29 septembre. La ville d'Amaheï est anéantie, avec un bilan humain tragique estimé à quatre mille victimes.",
    "paragraphs": [
      "Une dépêche de La Haye confirme un violent tremblement de terre dans la nuit du 29 septembre dernier sur la côte sud de l'île de Ceram. La ville d'Amaheï est complètement détruite.",
      "Le bilan humain est lourd, avec quatre mille morts et cinq cents blessés estimés. La région, située dans la chaîne des Moluques, est régulièrement sujette à une activité sismique et volcanique intense."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'état de santé du colonel Schneider",
    "summary": "Contrairement aux rumeurs d'un duel avec le général Roget, l'ambassade dément formellement ces bruits : le colonel Schneider est gravement malade et a rejoint Vienne pour y suivre des soins.",
    "paragraphs": [
      "Le bruit courait qu'un duel aurait eu lieu entre le colonel Schneider et le général Roget. Toutefois, les autorités de l'ambassade ont formellement démenti cette information.",
      "Le colonel Schneider est gravement malade depuis plusieurs semaines et a quitté Paris par l'Orient-Express pour se faire soigner à Vienne. Son état de santé ne lui aurait d'ailleurs point permis de prendre part à un quelconque duel."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un drame affreux",
    "summary": "Un tragique accident de chasse : le sieur Cosson tue accidentellement son épouse lors d'une plaisanterie. Sous le choc, il abat ensuite son propre fils accourant au son de la décharge.",
    "paragraphs": [
      "Un terrible drame vient de se produire. Un homme nommé Cosson, en voulant plaisanter avec sa femme lors d'une partie de chasse, a fait partir un coup de fusil qui l'a tuée sur le coup.",
      "Sous le choc, Cosson a abattu son propre fils qui s'approchait suite au bruit de la décharge. Le jeune homme a été touché en pleine figure et est mort instantanément."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "Destruction d'un train blindé par les Boers",
    "summary": "Près de Mafeking, un train blindé escortant deux canons a été capturé et détruit par les Boers après un combat acharné. La quasi-totalité de l'équipage a été faite prisonnière.",
    "paragraphs": [
      "Un train blindé escortant deux canons a été attaqué par les Boers hier soir à Kraal-Pan, près de Mafeking. Après un combat d'une demi-heure, les Boers se sont rendus maîtres du convoi et l'ont détruit à coups d'obus.",
      "La quasi-totalité de l'équipage a été faite prisonnière, à l'exception du mécanicien. Les forces boers continuent par ailleurs de franchir les frontières de la colonie britannique, intensifiant les tensions dans la région."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "La situation militaire en Afrique du Sud",
    "summary": "L'offensive boer se précise : les lignes télégraphiques sont coupées à Mafeking et Vryburg. Dans le Natal, des renforts britanniques ont débarqué à Ladysmith.",
    "paragraphs": [
      "Deux mille Boers sont en train d'occuper la ligne du chemin de fer. Les fils télégraphiques ont été coupés à Mafeking et à Vryburg.",
      "Durban, 19 octobre — Le département des Travaux publics a reçu un télégramme annonçant qu'une troupe considérable de Boers a pénétré dans le Natal par Laings Nek. Le transport « S'évada » est arrivé et le régiment de Manchester a débarqué à Ladysmith."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Proclamation du président Steijn",
    "summary": "Le président Steijn a proclamé l'état de guerre dans l'État libre d'Orange, exhortant ses citoyens à s'unir contre ce qu'il nomme l'agression injustifiée de l'oppresseur britannique.",
    "paragraphs": [
      "Bloemfontein, 13 octobre — Le président Steijn a lancé aujourd'hui une proclamation solennelle aux Burghers de l'État libre.",
      "Il y déclare que la République sœur est sur le point d'être attaquée par un ennemi sans scrupules ayant cherché un prétexte. Il conclut en appelant les citoyens : « État libre, levez-vous comme un seul homme contre l'oppresseur et le violeur du droit. »"
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Justice",
    "title": "La Haute-Cour et le refus de communication des scellés",
    "summary": "La Commission d'instruction de la Haute-Cour a confirmé son refus de communiquer les pièces sous scellés non jointes au dossier, invoquant le respect absolu du secret des correspondances privées.",
    "paragraphs": [
      "Peu d'animation, hier matin, au Sénat, où seuls les neuf membres de la Commission d'instruction de la Haute-Cour se réunissaient pour examiner les dernières réclamations des défenseurs.",
      "La requête des avocats, qui protestaient contre la non-communication des pièces sous scellés non jointes à la procédure, a été repoussée par la Commission d'instruction.",
      "La Commission considère que les pièces non jointes au dossier, jugées sans intérêt direct par le juge d'instruction, ne font pas partie intégrante de la procédure et que leur communication pourrait porter un préjudice injustifié au secret des correspondances privées."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Justice",
    "title": "Interrogatoire des inculpés royalistes",
    "summary": "M. de Ramel, député du Gard, a refusé de répondre à l'interrogatoire devant la Commission, affirmant sa volonté de ne pas se distinguer de ses co-inculpés par une attitude de faveur.",
    "paragraphs": [
      "Les inculpés royalistes laissés en liberté ont été entendus hier par la Commission. M. de Ramel, député du Gard, a été le premier à comparaître.",
      "M. de Ramel a déclaré qu'il ne pouvait répondre aux questions, ne voulant point que sa situation de prévenu libre fût meilleure que celle de ses co-inculpés qui avaient refusé de subir tout interrogatoire. Il a affirmé que, en tant qu'homme politique, il avait le droit et le devoir de prendre l'attitude que commandaient les circonstances."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Justice",
    "title": "Incident entre la Commission et M. Hombostel",
    "summary": "Le président de la Commission d'instruction a saisi le bâtonnier de l'Ordre des avocats à la suite d'une missive injurieuse envoyée par M. Hombostel à l'encontre des magistrats instructeurs.",
    "paragraphs": [
      "Le président de la Commission d'instruction de la Haute-Cour a adressé au bâtonnier de l'Ordre des avocats une lettre concernant M. Hombostel, auteur d'une missive contenant des injures envers la Commission. Celle-ci a décidé de soumettre cette correspondance au jugement disciplinaire de ses pairs."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Activités de la Commission du Budget et du Ministère de l'Intérieur",
    "summary": "La Commission du Budget réduit les crédits pénitentiaires, tandis que M. Waldeck-Rousseau reçoit les élus de Corbeil, partisans d'une application ferme des décrets contre les congrégations.",
    "paragraphs": [
      "La Commission du Budget a adopté les chapitres réservés du budget des services pénitentiaires, opérant une réduction de 330 000 francs.",
      "M. Waldeck-Rousseau a reçu une délégation du conseil d'arrondissement de Corbeil. Les délégués ont exprimé leur soutien indéfectible au gouvernement pour la défense des institutions républicaines et ont émis le vœu que soient rigoureusement appliqués les décrets contre les congrégations religieuses."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le crime de Clichy : une blanchisseuse assassinée",
    "summary": "Le corps d'une jeune blanchisseuse, Louise Bergère, a été découvert étranglé dans un terrain vague à Clichy. L'enquête se concentre sur une lettre retrouvée au domicile de la victime.",
    "paragraphs": [
      "Un odieux attentat a été commis hier à Clichy. La victime, Louise Bergère, une jeune blanchisseuse de dix-sept ans, a été retrouvée étranglée dans un terrain vague de la rue Casterès.",
      "Le cadavre présentait des traces évidentes de violences. M. Messeau, son compagnon, qui avait signalé sa disparition, a reconnu la malheureuse à la morgue. L'enquête se poursuit activement pour identifier l'auteur du crime, les magistrats s'intéressant notamment à une lettre déchirée retrouvée au domicile de la victime."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Justice",
    "title": "Cour d'assises : tentative de parricide",
    "summary": "La fille Sauvé, âgée de vingt ans, a comparu devant la Cour d'assises pour avoir frappé son père d'un coup de couteau le 28 mai dernier. Après une émouvante plaidoirie et le pardon de la victime, elle est condamnée.",
    "paragraphs": [
      "La fille Sauvé, âgée de vingt ans, a comparu devant la Cour d'assises pour avoir frappé son père d'un coup de couteau le 28 mai dernier. Suite à une émouvante plaidoirie et au pardon du père, la Cour a condamné la jeune fille à treize mois de prison."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Actualités Militaire",
    "title": "L'incident du 40e d'infanterie à Auxerre",
    "summary": "Le commandement du corps d'armée a sévèrement sanctionné plusieurs réservistes et un officier du 40e régiment d'infanterie à Auxerre pour des fautes graves contre la discipline militaire.",
    "paragraphs": [
      "Le général commandant le corps d'armée a sanctionné les réservistes du 40e d'infanterie pour fautes contre la discipline. Plusieurs soldats et un lieutenant ont été punis de jours de prison ou d'arrêts, et seront rappelés au corps pour purger leur peine."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Théâtre et Spectacles",
    "title": "Actualités théâtrales",
    "summary": "Préparatifs en vue pour la mise en scène de « Patrie ! » de Victorien Sardou, tandis que les théâtres de la République et du Châtelet multiplient les répétitions et les changements de programmation.",
    "paragraphs": [
      "C'est au mois de janvier prochain qu'on commencera à s'occuper de la mise en scène de Patrie !, le drame de Victorien Sardou, dont l'apparition sur notre première scène littéraire sera le grand événement du printemps.",
      "On répète, au théâtre de la République, Les Blanchisseuses de Paris, drame populaire à grand spectacle de MM. Jules Dornay et Bortal.",
      "À la première de ce drame, MM. Lemonnier et Barnoil inviteront les blanchisseuses du onzième arrondissement pour lesquelles on réservera deux petits fauteuils de balcon.",
      "Le théâtre du Châtelet renvoie mardi la première de Robinson Crusoé."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Concerts et Divertissements",
    "title": "Programmation des salles parisiennes",
    "summary": "L'Olympia triomphe avec ses attractions internationales, tandis que les grandes salles parisiennes comme le Nouveau-Cirque, Parisiana et le Casino de Paris renouvellent leurs programmes pour le public.",
    "paragraphs": [
      "Le succès de l'Olympia est colossal et sans précédent, avec ses attractions extraordinaires comme Émilienne d'Alençon dans L'Amour Bohème et le ballet Les Mille et une Nuits, avec Suzanne Derval, Rose Demay, Gaby Carter et Simone Dréa. Ce spectacle sera donné demain dimanche en matinée réservée aux familles.",
      "Le Nouveau-Cirque présente Foottit et Chocolat, ainsi que le Vélodrome d'Hiver miniature, la belle Américaine Hita del Erido et le plongeur Météore.",
      "Paulette Darty chantera ce soir à la Scala une romance sur l'intermezzo de Cavalleria Rusticana.",
      "Aux Folies-Bergère, matinée demain avec les éléphants de Lockart et les Griffiths.",
      "Le programme de Parisiana comprend Méaly, Anna Thibaud, les Villé-Dora, les Ducreux-Ciralduc, et les comiques Reschal, Jacquet, Vilbert, Plébins et Giberd. On y jouera également Le Client sérieux de Courteline.",
      "Le Casino de Paris propose les danses grecques d'Odette Valéry et la troupe des Picchiani.",
      "Le Trianon a repris Le Train de Plaisir de MM. Hennequin, Mortier et Saint-Albin."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Perte d'un chien",
    "summary": "Un dresseur de chiens attaché à l'Olympia offre une forte récompense pour retrouver l'un de ses petits élèves canins, un animal à pelage jaune marqué de taches blanches, disparu hier.",
    "paragraphs": [
      "Le dresseur de chiens de l'Olympia a perdu hier un de ses petits élèves, couleur jaune avec taches blanches, et il prie les personnes qui l'auraient trouvé de le lui rapporter contre une très forte récompense."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Sports",
    "title": "Courses à Auteuil et Maisons-Laffitte",
    "summary": "Compte-rendu hippique : annonce des épreuves majeures à Auteuil et résultats officiels des courses disputées le 13 octobre sur l'hippodrome de Maisons-Laffitte.",
    "paragraphs": [
      "Aujourd'hui, samedi 14 octobre, à Auteuil, des courses sont programmées, notamment le Prix d'Automne, le Prix de Rambouillet et le Prix Congress. Demain, dimanche, des courses auront lieu au Bois de Boulogne.",
      "Résultats du vendredi 13 octobre à Maisons-Laffitte : Patience remporte le Prix du Chosnay, Fair Boy gagne le Prix de Chambly, Alba s'adjuge le Prix de Carrières, Agathos s'impose dans le Prix Eclipse et Washington gagne le Prix de Beauvoir."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Départements",
    "title": "Faits divers en province",
    "summary": "Nouvelles de province : prise de fonctions du général Bounal à Beauvais et arrestation du nommé Blanchard, auteur d'une tentative d'assassinat sur une septuagénaire à Creux.",
    "paragraphs": [
      "À Beauvais, le général Bounal a pris ses fonctions de commandant de la 6e brigade d'infanterie.",
      "À Creux, une tentative d'assassinat a eu lieu mercredi soir. La veuve Bûcher, âgée de 72 ans, a été agressée chez elle par le nommé Blanchard, âgé de 22 ans, qui a été arrêté par la gendarmerie."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Sports",
    "title": "Informations sportives diverses",
    "summary": "Actualités sportives : ouverture du congrès vélocipédique, sanctions à l'Automobile-Club, homologation de records aéronautiques et annonces de combats de boxe.",
    "paragraphs": [
      "Le dix-huitième Congrès annuel de l'Union vélocipédique de France s'ouvre aujourd'hui à la mairie du premier arrondissement.",
      "La Commission sportive de l'Automobile-Club de France a disqualifié M. Viterbo, chronométreur officiel.",
      "Les recordmen de Paris-Madrid ont abandonné leur tentative à cause du mauvais temps.",
      "Le combat de boxe Charlemont-Jerry Driscoll est fixé au 25 octobre.",
      "Le record des aéronautes Castillon de Saint-Victor et Mallet a été homologué : ceux-ci ont effectué un séjour de 23 heures dans les airs.",
      "Le marcheur Lucien Viardin effectue actuellement le tour de France à pied."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Économie",
    "title": "Bulletin financier du 13 octobre",
    "summary": "Point sur les marchés financiers : fermeté générale des rentes et des titres de crédit, reprise de la valeur de l'Italien et bonne tenue des titres aurifères sur la place de Londres.",
    "paragraphs": [
      "Le marché est ferme, sans grande activité. Les rentes sont calmes. L'Italien débute faible mais se raffermit. Les établissements de crédit, notamment la Banque de Paris, sont bien tenus.",
      "Le Rio enregistre une avance, tout comme les titres des mines d'or à Londres."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Agriculture",
    "title": "État de la récolte de vin",
    "summary": "Bilan de la production viticole 1899 : une récolte nationale estimée à 45 millions d'hectolitres, marquée par une qualité variable selon les crus régionaux.",
    "paragraphs": [
      "La production vinicole sera plus importante que l'an dernier, atteignant environ 45 millions d'hectolitres. Bien que la qualité soit inégale, le raisin a été cueilli en parfaite maturité dans de nombreux cas. Les prix varient selon les régions, notamment dans le Gard, l'Aude, le Bordelais et en Champagne."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Lieutenant Jacques Châtel",
    "summary": "Lors d'un banquet, le mystérieux explorateur Jacques Châtel est acclamé pour son héroïsme. Un aventurier américain surgit alors pour révéler son passé de marin, affirmant avoir veillé sur lui comme un fils.",
    "paragraphs": [
      "Quoi qu'il en soit, nul journal, aucune revue n'avaient pu donner la moindre indication sur la famille et les antécédents de Jacques Châtel. Joyeux, bruyant, à chaque instant coupé par les fanfares, le banquet en l'honneur de l'explorateur touchait à sa fin. On était au dessert.",
      "Soudain, M. le comte de Marcillac, président de la Société géographique et coloniale, se leva. Le verre à la main, il se tourna vers le lieutenant Jacques Châtel, assis à sa droite, et prononça le toast suivant : « À la santé du lieutenant Jacques Châtel, notre jeune et déjà si illustre convive. »",
      "« Messieurs, les exploits, les héroïques faits d'armes, la carrière glorieuse de notre hôte peuvent servir d'exemple et d'encouragement à tous les Français. Oui, je voudrais qu'animés comme lui du noble amour de la patrie, beaucoup de nos compatriotes cherchent à planter dans les plus extrêmes limites du monde le drapeau de notre France bien-aimée. »",
      "« À la santé de Jacques Châtel », répétèrent en se levant les autres convives. À son tour, le héros de la fête se leva. Le jeune gamin que nous avons vu autrefois tout en pleurs, sous les insultes de ses camarades à l'institut industriel, commercial et maritime, était devenu un homme de vingt-cinq ans.",
      "Grand, vigoureux, bien découplé, l'allure martiale, le visage fortement bronzé par les intempéries, l'œil à la fois ferme et doux, avec dans la physionomie un air de froide intrépidité, d'enthousiaste ardeur, de loyauté et de franchise qui prévenait en sa faveur et inspirait confiance, tel était le lieutenant de la Légion étrangère Jacques Châtel.",
      "« Messieurs ! » fit-il d'une voix claire et vibrante, « je voudrais pouvoir vous dire à quel point votre accueil si chaleureux me touche et m'émeut. Mais je ne suis qu'un soldat, plus prompt à manier l'épée qu'habile à exprimer mes sentiments. Merci et encore merci, messieurs. Je bois à votre santé et à celle de vos familles. »",
      "La série des toasts continua; il y en eut de longs, de courts, d'éloquents, de naïfs, mais tous vibrants et sincères dans leur différence. Enfin on allait quitter la table, quand une voix nasillarde, dont l'accent dénonçait un étranger, passa par-dessus la table et apostropha le président : « Mister speaker, permettez à un fils de la libre Amérique de parler aussi. »",
      "C'était un petit homme court, massif et trapu, à la face illuminée et comme vernie par des libations trop prolongées, aux yeux allumés. À côté de lui se tenait une assez jolie jeune fille très blonde. « Ladies and gentlemen ! je suis un Américain, un Yankee, comme vous dites; un compatriote de Washington et de Lincoln. Aussi suis-je franc et loyal. »",
      "« Ladies et gentlemen, j'ai beaucoup connu le grand traveller Stanley, Jacques Châtel lui ressemble. Oh! ce dear Châtel! je l'ai connu quand il était un véritable petit lad. Dès le premier regard j'ai deviné qu'il valait son dollar. Et c'est dans mon vaisseau, ladies and gentlemen, dans la Lively-Fanny qu'il a complété son éducation. Je l'ai aimé comme un fils à moi. »",
      "« Je voulus l'adopter, en faire un enfant de la libre Amérique, mais il s'est refusé, voulant, disait-il, demeurer Français. J'approuvai sans comprendre. Pourtant, malgré son refus, nous sommes restés d'excellents amis. Ladies and gentlemen! je ne suis pas un orateur, mais, foi de Ben Jefferson, je vous dis ceci : Châtel est un bon, a very good fellow, il est mon œuvre, et j'en suis fier. »",
      "Jacques Châtel se leva vivement. Très grave, il s'approcha du personnage et, lui tendant les deux mains : « Oui, mon bon Jefferson », fit-il d'une voix émue, « vous avez été un père pour moi; je vous dois beaucoup, je ne suis pas un ingrat. Vous êtes et serez toujours le meilleur de mes amis. »"
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Revenant - Le Retour",
    "summary": "Une délicate opération cérébrale pratiquée par le jeune André sur Jean-Marie s'est avérée un succès. Le patient, toujours endormi, est placé sous une surveillance attentive en attendant son réveil imminent.",
    "paragraphs": [
      "La terrible, la délicate opération commence. Rapidement menée, c'est à peine l'affaire de cinq à six minutes. Elle est achevée. Alors, André relève son visage et se tourne vers Daubernon. L'éclair du triomphe brille dans ses yeux. « Maître », s'écrie-t-il, suffoqué par l'émotion, « maître, j'avais raison, je ne m'étais pas trompé. »",
      "Une fois de plus la science a triomphé victorieusement, et tout cela a duré quelques minutes à peine. Désormais, le moindre doute n'est plus permis. L'esquille retirée est la seule cause du trouble cérébral dont souffrait le patient par suite du défoncement du pariétal occasionné par la balle qui l'avait frappé.",
      "Affectueusement, le vieux maître a ouvert ses bras à son élève. Il s'y jette, et tous deux restent ainsi un moment enlacés tandis que, en un tour de main, les aides pansent le blessé. L'opération a réussi, merveilleusement réussi. Jean-Marie, anesthésié, n'a absolument rien senti.",
      "Il dort, toujours aussi calme que tout à l'heure. « Alors, maître, que dois-je faire maintenant ? » questionna André. « Rien, attendre. Le chloroforme et surtout la fatigue causée par l'opération vont laisser cet homme endormi, engourdi, pendant longtemps encore. Nous autres, mes camarades et moi, nous n'avons plus rien à faire ici, nous allons partir. Vous, André, restez. »",
      "Un épanchement interne pourrait se produire, et alors, quoi que vous fassiez, ce serait la mort. À ce mot sinistre, le jeune homme a frissonné. Mais non, c'est impossible. Dieu ne permettra pas qu'il ait tant fait pour échouer aussi misérablement en touchant au port. D'ailleurs, il est là, il veillera.",
      "La nuit noire, sans étoiles, était depuis longtemps tombée. Fidèle à son poste d'observation, André n'avait pas bougé, épiant les moindres mouvements de Jean-Marie, lorsqu'un grincement de roues se fit entendre sur le gravier. C'étaient Simonne, Jeanne et Léon qui venaient aux nouvelles.",
      "« Eh bien ? » questionna-t-il, « l'opération ? » « A réussi à merveille, ainsi que je vous l'ai fait dire tantôt. » « Et le malade ? » « Tiens ! regarde. Il n'a pas encore repris connaissance. Ces dames peuvent lui dire bonsoir, en parlant bas, aucune crainte de le réveiller. » Simonne, Jeanne et Léon entrèrent en avançant sur la pointe du pied.",
      "« Alors, il va se souvenir ? » interrogea Simonne. « Comme si rien ne s'était passé », affirma André. « Quel bonheur pour lui », ajouta Jeanne. « Et pour nous », acheva Rose-Marie. « Demain, avant même, il reprendra sa vie au moment où il l'a laissée lorsqu'il a reçu à la tête cette affreuse blessure. » « Alors », demanda Simonne, « vous croyez que demain... »"
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Justice",
    "title": "Jugement du Tribunal civil - Affaire Genglaire",
    "summary": "Le chimiste Genglaire a été condamné par le tribunal correctionnel pour avoir vendu illicitement un produit alimentaire contenant de l'aldéhyde formique, une substance dont l'emploi est formellement interdit.",
    "paragraphs": [
      "Audience publique de police correctionnelle du 16 juin 1899. Contre Genglaire (Raoul-Edme-Gustave), chimiste, prévenu de tromperie sur la nature de la marchandise. Le Tribunal, après en avoir délibéré conformément à la loi, donne défaut contre Genglaire non comparant.",
      "Attendu qu'il résulte de l'instruction que le 12 mars 1898, à l'exposition du Concours agricole, Genglaire a mis en vente sous la dénomination de « Lactine Genglaire », recommandé comme conservateur alimentaire, un produit reconnu comme renfermant de 35 à 36 pour cent d'aldéhyde formique, ou formol antiseptique, dont l'emploi est absolument proscrit.",
      "Le Tribunal condamne Genglaire à 50 francs d'amende et ordonne la confiscation du produit saisi. Ordonne l'insertion du jugement dans le Petit Journal, le Petit Parisien, l'Éclair, le Journal et le Bulletin des Halles, aux frais du condamné."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Justice",
    "title": "Jugement du Tribunal civil - Affaire Ferrage",
    "summary": "Le sieur Ferrage, chef de dépôt, est condamné à une amende pour falsification de lait. Le laitier en gros, M. Boceon, a été déclaré civilement responsable de cette fraude.",
    "paragraphs": [
      "Audience publique de police correctionnelle du 13 juillet 1899. Contre Ferrage (Pierre), chef de dépôt de laiterie, prévenu de falsification et mise en vente de lait falsifié. Civilement responsable : Boceon, laitier en gros.",
      "Attendu qu'il résulte de l'instruction qu'en 1899, à Chars, Ferrage a falsifié par addition d'un colorant du lait préalablement écrémé. Le Tribunal déclare le sieur Boceon civilement responsable. Il condamne Ferrage à 50 francs d'amende, à la confiscation du lait, et aux dépens, ainsi qu'à l'insertion du jugement dans le Petit Journal et le Petit Parisien."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Informations pratiques",
    "title": "Chemins de Fer de l'Ouest",
    "summary": "La Compagnie de l'Ouest informe sa clientèle de la modification des horaires d'hiver pour les trains à destination de Brest, Nantes, Saint-Nazaire et La Rochelle, effectifs au 1er octobre.",
    "paragraphs": [
      "La Compagnie de chemin de fer de l'Ouest nous prie d'informer nos lecteurs qu'à partir du 1er octobre courant, date de la mise en vigueur de son prochain service d'hiver, le train n° 1, de Paris à Brest, partira de Paris-Montparnasse à 11 h 45 du soir, au lieu de 11 h 15, et le train n° 11, de Paris à Nantes, Saint-Nazaire et La Rochelle, partira de Paris-Saint-Lazare à 9 h 55 du soir, au lieu de 9 h 15."
    ]
  }
];
