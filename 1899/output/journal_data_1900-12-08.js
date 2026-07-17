// Date: 1900-12-08
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-12-08 (Version Restaurée, 35 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "Une œuvre de dévouement : l'histoire de Marie Heurtin",
    "summary": "À seulement quinze ans, Marie Heurtin, jeune fille aveugle et sourde-muette, a trouvé à l'institution de Larnay une éducation exceptionnelle qui lui a permis de s'instruire et de s'épanouir pleinement.",
    "paragraphs": [
      "Il est impossible de lire sans une émotion profonde l'histoire qui vient d'être contée d'une jeune fille du nom de Marie Heurtin, aujourd'hui âgée de quinze ans. Fille d'un pauvre ouvrier, Marie Heurtin est née à Vertou, dans la Loire-Inférieure. On s'aperçut, peu de jours après sa venue au monde, qu'elle était aveugle ; ensuite, on se rendit compte qu'elle était également sourde-muette.",
      "Ses parents l'envoyèrent dans un établissement charitable, à Notre-Dame-de-Larnay, près de Poitiers. Tout de suite, une des éducatrices de la maison la prit sous sa protection. Elle résolut de se faire la seconde mère de cette enfant privée de sens.",
      "L'éducatrice lui apprit à communiquer via un alphabet mimé, puis transformé en signes taillés dans le bois pour que Marie puisse les toucher. Enfin, grâce à une patience infinie, son éducatrice lui apprit à lire par la méthode Braille.",
      "Aujourd'hui, Marie Heurtin est une excellente écolière. On lui a donné des notions d'instruction générale ; elle sait la grammaire, l'histoire, la géographie ; elle fait du tricot et du crochet. Elle est enfin heureuse et insérée dans le monde."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille : Marie-Madeleine",
    "summary": "À Saint-Rupert, madame Odelet tente de convaincre les époux Bellou de lui confier la petite Marie-Madeleine en échange d'une forte somme, leur promettant ainsi une vie nouvelle loin de la misère.",
    "paragraphs": [
      "À Saint-Rupert, madame Odelet propose à Nicole et Vincent Bellou d'assumer l'avenir de la petite Marie-Madeleine. Elle leur offre une somme d'argent considérable pour quitter les lieux, régler leurs dettes urgentes et acheter une ferme près de Vannes.",
      "La tentatrice insiste : « Je pense qu'on pourra l'obtenir avec une trentaine de mille francs ». Les Bellou, sidérés, voient en cette proposition inattendue une opportunité providentielle de changer radicalement leur condition misérable."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Incendie à l'arsenal de Cherbourg",
    "summary": "Un violent incendie a ravagé la scierie mécanique de l'arsenal de Cherbourg cette nuit. Si les dégâts matériels dépassent les deux millions de francs, aucune perte humaine n'est à déplorer.",
    "paragraphs": [
      "Le ministre de la Marine a reçu ce matin, du préfet maritime de Cherbourg, la nouvelle d'un incendie ayant détruit une grande partie de la scierie mécanique de l'arsenal durant la nuit.",
      "Le feu a été maîtrisé après plusieurs heures de lutte acharnée des pompiers et des marins. Heureusement, il n'y a pas eu d'accidents de personnes. Les dégâts matériels sont estimés à plus de deux millions de francs.",
      "Un parc à charbon s'est également enflammé, causant des brûlures à plusieurs hommes, dont l'adjudant principal Maximi et le lieutenant de vaisseau Pillet."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Chronique Politique",
    "title": "La défense navale",
    "summary": "Au Sénat, M. de Lanessan a exposé les besoins de la marine française, soulignant que le renforcement de notre flotte vise avant tout à assurer la sécurité de nos côtes et à garantir notre tranquillité.",
    "paragraphs": [
      "La discussion générale sur l'augmentation de nos forces maritimes et sur l'accroissement de nos moyens de défense navale a eu, au Sénat, l'élévation que mérite un tel sujet.",
      "Le ministre de la Marine a soutenu ses propositions en mettant en avant les avantages comparatifs des cuirassés et des croiseurs, ainsi que les nécessités de notre situation internationale.",
      "La France, comme l'a souligné M. de Lanessan, ne songe qu'à poursuivre sa tâche laborieuse dans la paix tout en assurant ses côtes contre toute agression imprudente."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "Le Président Krüger et les relations internationales",
    "summary": "Le président Krüger est attendu prochainement par la reine Wilhelmine aux Pays-Bas. Les autorités néerlandaises réfutent par ailleurs toute tension diplomatique avec le Portugal au sujet du consul Pott.",
    "paragraphs": [
      "La réception du président Krüger par la reine Wilhelmine à La Haye est imminente. La Chambre haute néerlandaise a exprimé son soutien à ses efforts pour obtenir justice et voir cesser les hostilités.",
      "Par ailleurs, contrairement à certaines rumeurs colportées par la presse, il n'est pas question pour le moment de rupture des relations diplomatiques entre la Hollande et le Portugal suite à l'affaire du consul Pott."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Deux femmes assassinées à Beauvais",
    "summary": "Un double crime atroce a été découvert à Beauvais : une rentière de 82 ans et sa servante ont été mortellement poignardées. Le mobile semble être le vol. Cinq suspects ont été arrêtés par les autorités locales.",
    "paragraphs": [
      "Un effroyable crime a été découvert aujourd'hui à Beauvais, près de la promenade du Jeu-de-Paume. Mme Jouvelet, rentière de quatre-vingt-deux ans, et sa servante, Angèle Berry, âgée de vingt-deux ans, ont été trouvées assassinées à coups de couteau.",
      "Le désordre régnant dans les meubles laisse supposer que le crime a été commis dans un but de vol. Cinq rôdeurs ont été arrêtés par les autorités."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le feu dans une mine à Saint-Étienne",
    "summary": "Un grave incendie s'est déclaré dans la mine de Villebeuf à Saint-Étienne. Les vingt chevaux de la galerie sont perdus et de nombreux ouvriers se retrouvent au chômage technique.",
    "paragraphs": [
      "Un incendie s'est déclaré ce matin dans une galerie du puits Pélissier, appartenant à la compagnie des mines de Villebeuf, à quarante mètres de profondeur.",
      "Malgré les efforts pour sauver les vingt chevaux présents au fond, ces derniers sont considérés comme perdus. Un grand nombre d'ouvriers se retrouvent au chômage technique pour une durée indéterminée."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Odyssée d'un enfant : le jeune Labarre",
    "summary": "Après avoir été enlevé par des nomades à l'âge de neuf ans, le jeune Labarre a subi huit années de calvaire. Évadé, il a trouvé refuge auprès de la police, alors que sa mère est décédée sans revoir son fils.",
    "paragraphs": [
      "Le jeune Labarre, âgé de dix-sept ans, a vécu une odyssée tragique après avoir été enlevé par des nomades à l'âge de neuf ans.",
      "Pendant huit ans, il a été forcé de mendier et de voler sous peine de sévices corporels. Il a finalement réussi à s'échapper et s'est présenté au commissariat de police du quartier Clignancourt pour raconter son calvaire.",
      "Sa mère, inconsolable, est morte au début de l'année, persuadée jusqu'au bout que son fils était toujours en vie."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Faits divers",
    "title": "Histoire d'un jeune homme retrouvé par sa famille",
    "summary": "Le jeune Jules Labarre, disparu durant son enfance, a été identifié par ses proches grâce à des signes distinctifs. Après huit ans d'errance forcée, il retrouve les siens qui s'engagent à veiller sur lui.",
    "paragraphs": [
      "Le jeune homme, enlevé durant son enfance par des nomades, a retrouvé sa famille après huit ans d'errance. Il a été identifié par son oncle et sa tante, M. et Mme Labarre, grâce à une tache de naissance et un défaut de prononciation.",
      "Le grand-père, très ému, a pu retrouver celui qu'il croyait perdu à jamais, tandis que les Labarre s'engagent à élever le jeune Jules comme l'un de leurs fils."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "International",
    "title": "Les événements de Chine",
    "summary": "La cour impériale chinoise a prononcé la dégradation de Tung-Fu-Siang. Les puissances occidentales assouplissent les conditions des peines, bien que la reprise des hostilités au printemps paraisse inévitable.",
    "paragraphs": [
      "La cour impériale a prononcé la dégradation de Tung-Fu-Siang, l'un des instigateurs des troubles à Pékin. Les ministres ont modifié la note collective pour laisser aux souverains chinois la faculté de fixer les peines des coupables.",
      "L'impression générale est que la paix est impossible et que les opérations militaires devront être reprises au printemps."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "International",
    "title": "Guerre au Transvaal",
    "summary": "Le congrès des Afrikanders à Worcester réclame la paix et l'indépendance totale des Républiques, tandis que les forces boërs du général Delarey infligent un sévère revers à un convoi britannique à Buffelspoort.",
    "paragraphs": [
      "Le congrès des Afrikanders réuni à Worcester a voté une motion importante réclamant, avec une fermeté nouvelle, la cessation immédiate des hostilités et le maintien intégral de l'indépendance des deux républiques.",
      "Sur le théâtre des opérations, les troupes boërs, manœuvrant sous les ordres du général Delarey, ont surpris et attaqué un convoi britannique à Buffelspoort, infligeant des pertes notables aux forces de la Couronne avant de se retirer stratégiquement."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique étrangère",
    "title": "L'alliance anglo-portugaise",
    "summary": "Lors d'un banquet officiel à Lisbonne, le roi du Portugal a solennellement réaffirmé la solidité des liens historiques et de l'alliance étroite unissant son royaume à la Couronne britannique.",
    "paragraphs": [
      "À l'occasion du banquet solennel donné à Lisbonne, le roi du Portugal a tenu à exprimer ses remerciements appuyés à Sa Majesté la reine Victoria pour l'envoi récent d'une escadre navale, saisissant cette opportunité pour célébrer la loyale alliance qui unit indéfectiblement les deux nations."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique intérieure",
    "title": "Débats au Parlement anglais",
    "summary": "Le Parlement britannique est agité par de vives critiques sur la politique coloniale. Lord Salisbury confirme l'annexion des Républiques boërs malgré les attaques de lord Rosebery contre la gestion de M. Chamberlain.",
    "paragraphs": [
      "Le débat sur l'adresse au Parlement anglais a été singulièrement animé, marqué par les critiques sévères de l'opposition concernant les affaires de Chine et la conduite de la guerre au Transvaal.",
      "Devant la Chambre des Lords, le marquis de Salisbury a réaffirmé avec autorité son intention de procéder à l'annexion des républiques boërs, tandis que lord Rosebery, prenant la parole, a vivement interpellé M. Chamberlain sur la gestion des colonies."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Sénat",
    "title": "Discussion sur le programme naval",
    "summary": "Le Sénat a validé à l'unanimité le projet de loi portant sur le renforcement de la flotte nationale, après le retrait par M. Combes d'un amendement qui était en discussion.",
    "paragraphs": [
      "Le Sénat a poursuivi l'examen du projet de loi relatif à l'accroissement de la flotte nationale. Après l'étude de divers amendements, dont celui présenté par M. Combes qui fut ultérieurement retiré par son auteur, l'ensemble du projet de loi a été adopté par l'unanimité des membres présents."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Chambre des députés",
    "title": "Séances du vendredi 7 décembre",
    "summary": "La Chambre vote l'évacuation du Louvre par le ministère des Colonies et refuse l'enquête sur le Soudan. Débat sur une mutation d'officiers au 18e dragons de Melun.",
    "paragraphs": [
      "La Chambre a voté l'évacuation du Louvre par le ministère des Colonies. Par ailleurs, elle a repoussé la demande d'enquête parlementaire sur les événements du Soudan et de Zinder, votant dans la foulée un ordre du jour marquant sa confiance envers le gouvernement.",
      "Une autre discussion, plus vive, a porté sur les mutations de vingt officiers du 18e dragons à Melun, mesure que le ministre de la Guerre a justifiée par la nécessité de faire cesser une cabale dirigée contre un officier marié à une femme divorcée."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Justice",
    "title": "L'affaire de Vaucruze",
    "summary": "La Cour d'assises du Gard suspend le procès de l'affaire de Vaucruze suite à la découverte de nouveaux documents, nécessitant un supplément d'enquête sur la correspondance d'un familier de la maison.",
    "paragraphs": [
      "La Cour d'assises du Gard a renvoyé le procès à une session ultérieure suite à la découverte de nouveaux documents dans le dossier, nécessitant un supplément d'enquête pour faire la lumière sur la correspondance d'un familier de la maison de Vaucruze."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits divers",
    "title": "Tentatives de déraillement",
    "summary": "Des actes de malveillance, consistant à placer des obstacles sur les rails, ont été signalés à Sabres, Sion, Sauvelerre-de-Guienne et près de Saint-Omer, menaçant gravement la sécurité des convois ferroviaires.",
    "paragraphs": [
      "Plusieurs incidents criminels ont été signalés sur les voies ferrées : à Sabres, par un jeune garçon de quatorze ans ; à Sion, par un enfant de treize ans ; ainsi qu'à Sauvelerre-de-Guienne et près de Saint-Omer.",
      "Ces actes malveillants, consistant à placer des obstacles sur les rails, auraient pu causer de graves catastrophes."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Conseil municipal de Paris",
    "title": "Séance du vendredi 7 décembre",
    "summary": "Le Conseil municipal de Paris a ouvert les débats concernant l'octroi et les mesures de secours destinées aux familles éprouvées par le chômage. Les délibérations se poursuivront prochainement.",
    "paragraphs": [
      "Le Conseil municipal a abordé la question de l'octroi et la proposition d'aide aux familles victimes du chômage. Les discussions se poursuivront lors d'une prochaine séance."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Technique",
    "title": "Le fonctionnement des tramways électriques",
    "summary": "Analyse du système de tramways à contact superficiel : si l'efficacité est réelle, les risques de défaillance des plots exigent des améliorations de sécurité, telles que l'ajout de chasse-pierres.",
    "paragraphs": [
      "Ces tramways appartiennent au système de contact superficiel. Au moment où ils couvrent le plot nourricier, celui-ci se soulève jusqu'au ras du sol et vient toucher une barre métallique située sous le caisson du véhicule.",
      "Ce contact automatique entre le plot et la barre munit le tramway d'une force de traction suffisante pour lui permettre de gagner, à n'importe quelle vitesse, le plot suivant.",
      "Malheureusement, il arrive que le mauvais fonctionnement du plot l'empêche de se refermer hermétiquement, laissant prise à des contacts périlleux.",
      "Il faudrait exiger la perfection absolue du plot et munir les tramways d'une sorte de chasse-pierres placé à l'arrière, ou augmenter la longueur des voitures, ou rapprocher les plots pour les rendre proportionnels à la longueur des véhicules."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le cadavre du Pecq",
    "summary": "L'identité du cadavre retrouvé au Pecq est confirmée : il s'agit du jeune Louis Philippe. Une enquête est ouverte pour déterminer les circonstances tragiques de sa chute dans la Seine après une soirée.",
    "paragraphs": [
      "L'identité du cadavre retrouvé au Pecq est formellement établie. Il s'agit de Louis Philippe, âgé de dix-huit ans, originaire de Bannégon (Cher) et travaillant chez un fabricant de briques à Garennes.",
      "Louis Philippe s'était rendu le dimanche 20 novembre à Rueil avec des camarades qui, vers minuit, l'avaient laissé seul dans un débit de boisson.",
      "Le jeune homme était alors pris de boisson. S'est-il égaré à travers champs et, trompé par l'obscurité, est-il tombé dans la Seine ? L'enquête le déterminera.",
      "On s'explique maintenant la disparition des vêtements et les mutilations du corps, car il a été entraîné par le courant sous la machine élévatrice de Marly."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Collision de locomotives",
    "summary": "Un grave accident ferroviaire causé par une fausse manœuvre en gare de Vogüé a provoqué le choc frontal de deux locomotives, causant de sérieuses blessures au personnel et retardant le trafic de trois heures.",
    "paragraphs": [
      "Un déplorable accident vient de se produire en gare de Vogüé, à la suite d'une fausse manœuvre. Deux locomotives sont entrées en collision ; le choc fut terrible.",
      "Le mécanicien de l'une des machines a été projeté sur la voie, tandis que le mécanicien et le chauffeur de l'autre ont été grièvement blessés. Les trains ont subi un retard de trois heures."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Justice",
    "title": "Procès de Milo et sa bande",
    "summary": "Au procès de la bande Milo, l'audience a porté sur les dépositions de témoins et les preuves matérielles. L'accusé nie toute implication malgré les preuves de la Sûreté et l'identification des bijoux volés.",
    "paragraphs": [
      "Il a été procédé, hier, à l'audition des témoins au procès de la bande Milo. La Sûreté a rappelé les confidences faites par Verbecque après son arrestation.",
      "Le témoin a déclaré que les constatations démontrent que plusieurs coups reçus par la victime ont été portés par une main de femme. Milo, pour sa part, conteste formellement ces accusations.",
      "Les bijoux trouvés en la possession de Denain ont été identifiés par des bijoutiers comme appartenant à la victime. Le verdict est attendu tard dans la soirée."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Échos",
    "title": "Le Président de la République à Compiègne",
    "summary": "Le Président de la République se rend ce samedi dans les forêts de Compiègne pour une partie de chasse privée, accompagné de proches, dont MM. Waldeck-Rousseau et Lépine.",
    "paragraphs": [
      "Le Président de la République chassera aujourd'hui, samedi, dans les forêts de Compiègne, lesquelles, depuis l'Empire, n'avaient été fréquentées par aucun des chefs de l'État.",
      "Cette partie de chasse ne fait partie d'aucune série officielle et ne revêt aucun caractère protocolaire. Le Président y a convié des amis personnels, dont MM. Waldeck-Rousseau et Lépine."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Actualité",
    "title": "Expériences sur le pont Alexandre III",
    "summary": "Des essais de résistance concluants ont été menés sur le pont Alexandre III. Le passage de dix chariots chargés, représentant deux millions de kilos, n'a provoqué aucun fléchissement de l'ouvrage en acier.",
    "paragraphs": [
      "On a procédé, hier matin, à de nouvelles expériences touchant la solidité du pont Alexandre III. Dix chariots lourdement chargés, représentant un poids total de deux millions de kilos, ont parcouru la jetée.",
      "L'arcature d'acier n'a fléchi en aucun point, démontrant ainsi que le pont pourrait parfaitement résister au poids d'une foule extrêmement dense."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame conjugal à Paris",
    "summary": "L'ouvrier peintre Gustave Mougin a été arrêté après avoir violemment agressé son épouse au rasoir. Une voisine, Mme Groshoff, a été blessée en tentant de s'interposer lors de l'effraction.",
    "paragraphs": [
      "L'ouvrier peintre Gustave Mougin, séparé de sa femme, s'est rendu à son domicile armé d'un rasoir pour se venger. Il a enfoncé la porte et s'est jeté sur son épouse.",
      "Mme Groshoff est intervenue pour protéger la victime et a été blessée à la main. Le coupable a été immédiatement arrêté et conduit au commissariat."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression à Montmartre",
    "summary": "À Montmartre, une femme de ménage nommée Olympe L. a été sauvagement agressée par le nommé Louis S., qui, après l'avoir frappée avec une arme, a tenté de la précipiter par la fenêtre avant son arrestation.",
    "paragraphs": [
      "Une femme de ménage, nommée Olympe L., a été victime d'une agression sauvage de la part d'un individu nommé Louis S., dans le quartier de Montmartre. Le malfaiteur, après l'avoir frappée avec un revolver, a tenté de précipiter sa victime par la fenêtre.",
      "La malheureuse a toutefois réussi à s'échapper après avoir été dévalisée. Le coupable, arrêté peu après, est actuellement entre les mains de la police."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie boulevard de Belleville",
    "summary": "Un incendie dévastateur s'est déclaré hier soir chez les époux Berhaus, boulevard de Belleville. Grièvement blessés par les flammes, les deux infortunés ont été transportés d'urgence à l'hôpital Saint-Louis.",
    "paragraphs": [
      "Un incendie s'est déclaré hier soir dans le logement des époux Berhaus. Le feu, parti d'un amas de vieux papiers, s'est propagé avec une grande rapidité au mobilier.",
      "Les deux époux, grièvement brûlés, ont été transportés d'urgence à l'hôpital Saint-Louis. Les pompiers sont parvenus à maîtriser le sinistre après une heure de travail acharné."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Société",
    "title": "Syndicat des marchands colporteurs",
    "summary": "Les marchands colporteurs, ambulants et forains de France se sont réunis en une nouvelle association syndicale ayant pour vocation l'étude et la défense de leurs intérêts économiques communs.",
    "paragraphs": [
      "Vient d'être constituée une association syndicale regroupant l'ensemble des marchands colporteurs ambulants et forains de France. Cette organisation est destinée à l'étude et à la défense des intérêts économiques de la corporation."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents autour de Paris",
    "summary": "Une série de tragédies et d'agressions marque les environs de Paris : un ouvrier frappé à Courbevoie, un accident de fusil à Gennevilliers, un éboulement mortel en carrière et un vol à main armée à Bailly.",
    "paragraphs": [
      "À Courbevoie, un ouvrier charpentier a frappé un voiturier avec une barre de fer. À Gennevilliers, un apprenti forgeron a été grièvement blessé par un coup de fusil accidentel.",
      "Par ailleurs, un éboulement a causé la mort tragique d'Alphonse Moriau dans une carrière, tandis qu'un journalier a été dévalisé par un charretier lors d'un trajet à Bailly."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Publicité",
    "title": "Nouveau Larousse Illustré",
    "summary": "Le Nouveau Larousse illustré, succès majeur de la librairie française, annonce une augmentation du nombre de ses fascicules et une révision tarifaire au 1er janvier, malgré les facilités de paiement accordées.",
    "paragraphs": [
      "Le Nouveau Larousse illustré est un dictionnaire encyclopédique universel en sept volumes. Il constitue le plus grand succès de la librairie française, totalisant plus de 99 500 souscripteurs au 1er décembre 1900.",
      "L'œuvre devait comprendre environ 30 fascicules, mais face à l'ampleur du succès et à la richesse de l'illustration, le nombre de fascicules a été augmenté, rendant une hausse de prix nécessaire le 1er janvier prochain.",
      "Ce dictionnaire est un ouvrage de première utilité, moderne et documenté, couvrant toutes les branches des connaissances humaines avec une impartialité absolue.",
      "Les souscripteurs bénéficient de facilités de paiement et de la garantie contre toute augmentation ultérieure."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Faits Divers",
    "title": "Le Fruit Défendu : La Revanche de Rose-Manon",
    "summary": "Dans l'affaire Villaurier, le prévenu conteste l'authenticité de lettres incriminantes, y décelant une machination et réclamant une expertise graphologique rigoureuse pour démontrer la supercherie.",
    "paragraphs": [
      "Dans le cadre de l'instruction sur l'affaire opposant M. Villaurier à Rose-Manon, le juge et l'avocat Juvardin examinent avec attention des lettres attribuées à la jeune femme. M. Villaurier conteste formellement l'authenticité de ces écrits, affirmant qu'il s'agit d'une machination ourdie contre lui.",
      "La discussion porte sur la présence de lettres récentes retrouvées au domicile de Rose, que M. Villaurier déclare fausses et fabriquées de toutes pièces. L'avocat demande une expertise graphologique afin de prouver la supercherie.",
      "Le juge présente plusieurs missives où Rose semble exprimer sa jalousie et sa tristesse face à la rupture. M. Villaurier, bien qu'agité, maintient que ces lettres, dépourvues d'enveloppes timbrées, sont des preuves fabriquées par la jeune femme pour se venger."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Ministère des Finances",
    "title": "Adjudication de fournitures d'habillement",
    "summary": "Le ministère des Finances organise une adjudication le 15 décembre pour la fourniture d'effets d'habillement destinés à ses agents et services, pour un marché quinquennal débutant le 1er janvier 1901.",
    "paragraphs": [
      "Il sera procédé, le 15 décembre à deux heures, à l'adjudication de la fourniture des effets d'habillement nécessaires aux agents du service intérieur du ministère des Finances, de l'atelier général du timbre et des directions de l'enregistrement et des domaines, pour une durée de cinq ans à partir du 1er janvier 1901.",
      "Le cahier des charges est consultable au bureau du matériel, étage 1, n° 11, de deux à cinq heures."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Actualités Économiques",
    "title": "Bulletin des Vins et Eaux-de-vie",
    "summary": "Le marché des vins demeure contrasté entre calme relatif et difficultés de négoce, tandis que les producteurs attendent la législation sur les octrois. La récolte des eaux-de-vie s'annonce excellente.",
    "paragraphs": [
      "Dans le Nord, les transactions sur les vins demeurent calmes avec des prix variables selon la qualité. Dans l'Hérault, la situation reste inchangée tandis que dans l'Aude, quelques lots de vins supérieurs se négocient avec difficulté.",
      "Le Bordelais rapporte des achats de vins fins dans le Bas-Médoc et le Blayais. En Touraine et en Anjou, les prix varient selon la nature des cépages. Les négociants à Bercy-Entrepôt restent réservés dans l'attente de la législation sur les octrois et les boissons pour 1901.",
      "La production des eaux-de-vie pour cette année est annoncée comme abondante et de bonne qualité."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Informations Maritimes",
    "title": "Départs et Arrivées des Paquebots",
    "summary": "Point sur les liaisons maritimes : arrivées à Lisbonne des paquebots Atlantique et Cordilière, tandis que l'Australien et l'Indus poursuivent leurs routes vers leurs destinations respectives.",
    "paragraphs": [
      "Le paquebot Atlantique est arrivé à Lisbonne le 5 décembre. Le Cordilière est également arrivé à Lisbonne le 5 décembre au soir.",
      "Le paquebot Australien a quitté King George's Sound le 4 décembre. Le paquebot Indus a quitté Aden le 5 décembre à destination de l'Indo-Chine et du Japon."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Spectacles",
    "title": "Programme des théâtres du 8 décembre",
    "summary": "Le répertoire théâtral du 8 décembre à Paris met à l'honneur les grands classiques et le drame, entre l'Opéra, le Théâtre-Français, l'Ambigu, ainsi que les divertissements circassiens.",
    "paragraphs": [
      "La soirée du 8 décembre propose de nombreuses représentations, dont 'La Vie de Bohème' à l'Opéra, 'Phèdre' au Théâtre-Français, et 'L'Assommoir' au Théâtre de l'Ambigu.",
      "Divers spectacles sont également prévus, notamment au Cirque Médrano et des séances de lutte et pantomimes dans plusieurs salles parisiennes."
    ]
  }
];
