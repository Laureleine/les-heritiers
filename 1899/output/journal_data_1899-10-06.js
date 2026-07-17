// Date: 1899-10-06
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-10-06 (Version Restaurée, 34 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Social",
    "title": "Le projet d'exode des délégués vers Paris",
    "summary": "Les délégués préparent une confrontation avec M. Schneider. En cas d'échec de l'arbitrage, un mouvement massif vers Paris est prévu, soutenu par la solidarité financière des provinces françaises.",
    "paragraphs": [
      "Les délégués ont résolu d'engager une discussion contradictoire avec les représentants de M. Schneider. Préalablement à cette entrevue, une réunion sera organisée avec M. Viviani afin de s'accorder sur les points essentiels à soumettre à l'arbitre.",
      "Si l'arbitrage devait échouer par suite du refus de M. Schneider, un vaste projet de voyage vers Paris serait immédiatement mis à exécution. Des encouragements et des subsides affluent de toute la France, notamment de la région bourguignonne, pour soutenir cet exode qui pourrait avoir lieu dès la semaine prochaine.",
      "Les partisans de ce déplacement demeurent convaincus que le groupe suivra leur mouvement, estimant avoir accompli tout leur devoir face à la situation créée par M. Schneider."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Expériences de tir au camp de Châlons",
    "summary": "Poursuite des manœuvres au camp de Châlons avec le canon de 155 court. Les tests de tir et la logistique des munitions s'organisent méthodiquement le long de la voie romaine.",
    "paragraphs": [
      "Les expériences de tir au canon de 155 court se sont poursuivies hier au camp de Châlons. Les pièces, installées dans des retranchements en terre, ont battu le terrain situé en avant des lignes de tir, parallèlement à la voie romaine de Reims à Bar-le-Duc, en direction du plateau des Pêrchots et du Haricot de Vadonay.",
      "Un bureau téléphonique, placé en arrière des pièces, assure la liaison entre les différents services de l'artillerie, tandis que des petits chariots à deux roues assurent le transport des munitions."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Démissions et distinctions",
    "summary": "Le ministère de la Guerre sanctionne le capitaine Milliet de Faurges pour des propos inconvenants. À Treignac, une cérémonie patriotique honore la remise du drapeau des anciens combattants.",
    "paragraphs": [
      "Le Ministre de la Guerre a refusé la démission du capitaine Milliet de Faurges, du 64e régiment d'infanterie territoriale, en raison des termes inconvenants qu'il avait employés. Il a proposé au Président de la République un décret suspendant cet officier de ses fonctions pour une durée d'un an.",
      "Par ailleurs, une fête patriotique s'est tenue à Treignac pour la remise du drapeau de la section des vétérans, cérémonie marquée par une allocution vibrante du commandant Fumet."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Science et Technique",
    "title": "L'air liquide comme explosif",
    "summary": "Des essais viennois sur l'oxylignite démontrent une puissance supérieure à la dynamite. Toutefois, la volatilité rapide du mélange après fabrication limite sévèrement son application pratique.",
    "paragraphs": [
      "À Vienne, des expériences ont été menées sur l'air liquide utilisé comme explosif via des cartouches à l'oxylignite. Le mélange, composé de terre d'infusoires, d'huile minérale et d'air liquide (oxygène et azote), a été testé avec des résultats supérieurs à ceux de la dynamite.",
      "Toutefois, le Comité technique a constaté que la puissance explosive diminue très rapidement après la fabrication de la cartouche, limitant ainsi considérablement son usage pratique."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Dépêches de l'Etranger",
    "title": "Actualités internationales",
    "summary": "Le comte Mouravieff visite Saint-Sébastien, tandis que des inondations frappent Le Caire. À Washington, le président Mac-Kinley et l'amiral Dewey examinent l'organisation administrative des Philippines.",
    "paragraphs": [
      "Le comte Mouravieff, ministre des Affaires étrangères de Russie, s'est rendu à Saint-Sébastien où il a été reçu par M. Silvela et la famille royale espagnole. Ce voyage est qualifié d'acte de courtoisie diplomatique.",
      "Au Caire, une inondation causée par des pluies torrentielles a occasionné des dommages à la ville ainsi qu'aux lignes de chemin de fer.",
      "À Washington, le président Mac-Kinley et l'amiral Dewey ont discuté de la situation aux Philippines avant l'intégration prochaine de l'amiral à la commission dédiée."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Faits Divers",
    "title": "Assassinat d'une maîtresse à Castres",
    "summary": "Louis-Henri Julien s'est constitué prisonnier au commissariat de Castres après avoir avoué le meurtre atroce de sa maîtresse, Félicie Ducousseau. L'enquête judiciaire explore les zones d'ombre de ce crime passionnel.",
    "paragraphs": [
      "Louis-Henri Julien s'est présenté hier au commissariat de police de Castres où il a fait des aveux complets concernant le meurtre de sa maîtresse, la nommée Félicie Ducousseau. Le mis en cause a relaté des circonstances d'une barbarie inouïe, décrivant la mutilation méthodique du corps ainsi que l'inhumation clandestine des restes en divers points du territoire.",
      "Si Julien prétend avoir agi sous l'emprise d'un chantage exercé par la victime, les magistrats instructeurs s'interrogent toutefois sur l'état mental du prévenu et sur l'implication éventuelle d'un certain Germain, ancien amant de la disparue. Le dossier complet a été transmis au Parquet de Castres pour instruction."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Politique",
    "title": "Les travaux de la Haute-Cour",
    "summary": "La commission d'instruction de la Haute-Cour intensifie ses travaux sous l'égide de M. Bérenger, tandis que les avocats de la défense multiplient les recours pour accéder aux dossiers sous scellés.",
    "paragraphs": [
      "La commission d'instruction de la Haute-Cour poursuit avec vigueur ses travaux sous la haute direction de M. Bérenger. Les avocats représentant les groupes royalistes et les différents inculpés multiplient les requêtes afin d'obtenir un accès complet aux dossiers et aux pièces actuellement placées sous scellés.",
      "Des rumeurs persistantes concernant de nouvelles perquisitions et des mandats d'amener continuent de circuler dans les couloirs de la Cour. Parallèlement, M. Lépine, préfet de police, maintient des échanges constants et nourris avec le président de la commission."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accidents divers à Paris",
    "summary": "La capitale fut endeuillée hier par une série d'accidents du travail et de la voie publique. Outre ces drames, une violente rixe impliquant des terrassiers a nécessité l'intervention des forces de l'ordre.",
    "paragraphs": [
      "Plusieurs accidents d'une grande gravité ont été enregistrés hier à travers la capitale. Des ouvriers ont fait une chute redoutable d'un échafaudage situé rue Ganneron, tandis qu'un tailleur de pierres subissait un accident similaire rue de Rivoli. Un jeune garçon a tragiquement succombé après avoir été écrasé par un tramway rue des Pyrénées, et un autre ouvrier est décédé accidentellement boulevard de Belleville.",
      "Par ailleurs, une bagarre d'une violence extrême a éclaté aux abords de la Gare de Lyon. Deux terrassiers, dans un état d'excitation prononcée, s'en sont pris aux agents de police présents, nécessitant l'intervention immédiate de huit hommes de la force publique pour parvenir à les maîtriser."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie tragique à Belleville",
    "summary": "Un incendie domestique causé par le renversement accidentel d'une lampe à pétrole a provoqué le décès tragique de Mme Victorine Royer, dans son domicile de la rue de la Mare.",
    "paragraphs": [
      "Un incendie s'est déclaré, durant la nuit, au domicile de Mme Victorine Royer, situé rue de la Mare. Le corps inanimé de la victime a été découvert par les pompiers au sein de sa chambre. Selon les premières constatations, le drame a été engendré par le renversement accidentel d'une lampe à pétrole, laquelle a rapidement communiqué le feu aux étoffes environnantes."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Chronique Économique",
    "title": "Statistiques de production d'acier en 1898",
    "summary": "Le bilan industriel de 1898 fait état d'une progression mondiale de la production d'acier. Si les États-Unis dominent largement le marché, la France consolide sa position économique internationale.",
    "paragraphs": [
      "La production mondiale d'acier pour l'année 1898 s'est établie à 24 127 000 tonnes, marquant une progression notable de 800 millions de kilos par rapport à l'exercice précédent. Les États-Unis conservent la première place du classement industriel, suivis de près par la Grande-Bretagne et l'Allemagne. La France, pour sa part, maintient un rang tout à fait honorable sur l'échiquier commercial international."
    ]
  },
  {
    "id": 11,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de voiture à l'hôpital Cochin",
    "summary": "Victime d'un accident de la circulation, un homme a été transporté dans une pharmacie avant d'être admis en urgence à l'hôpital Cochin, grâce à l'intervention du docteur Wata.",
    "paragraphs": [
      "Un blessé, accidenté de la circulation, fut transporté dans une pharmacie voisine pour y recevoir les premiers soins.",
      "Le voyageur, pris en charge par le docteur Wata, attaché à l'hôpital Cochin, fut ensuite transféré dans cet établissement où il a été admis en urgence."
    ]
  },
  {
    "id": 12,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un employé de commerce blessé dans un accident",
    "summary": "Dans la rue Claude-Bernard, M. Charles Mauduit a été grièvement blessé après que sa charrette, tractée par un poney récalcitrant, eut été renversée lors d'un choc violent.",
    "paragraphs": [
      "Vers cinq heures, un autre accident de voiture se produisit non loin de là.",
      "Un employé de commerce, M. Charles Mauduit, âgé de trente-huit ans et demeurant à Bagneux, conduisait, dans la rue Claude-Bernard, une charrette à traction animale. Le poney, refusant d'avancer, se plaça en travers de la voie.",
      "Malgré tous les efforts, le choc eut lieu. La charrette et le poney furent projetés en avant et leur conducteur renversé sur la chaussée sans avoir pu se dégager à temps.",
      "Contusionné sur tout le corps et blessé grièvement aux jambes et à la tête, il a été transporté à l'hôpital Cochin."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Faits Divers",
    "title": "Identification d'une victime de tramway",
    "summary": "L'identité de l'homme mortellement fauché avant-hier avenue de la République en tentant de descendre d'un tramway a été établie : il s'agit d'Alexandre Pineau, employé à la Société générale.",
    "paragraphs": [
      "L'identité du voyageur qui avait été tué avant-hier, dans l'avenue de la République, en voulant descendre d'un tramway qui reculait à toute vitesse, a été établie hier à la Morgue.",
      "Le défunt se nommait Alexandre Pineau, employé à la Société générale, et demeurait boulevard National, à Clichy.",
      "C'est la femme du malheureux qui s'est présentée hier matin à la Morgue et a reconnu le cadavre de son mari."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Justice",
    "title": "Affaire du soldat Gaston Simon",
    "summary": "Le père du soldat Gaston Simon, accusé de désertion, dément les menaces d'extorsion d'argent et affirme que son fils a été reconduit à son corps à temps, minimisant l'affaire à un simple coup de tête.",
    "paragraphs": [
      "M. Fernand Simon, père du soldat Gaston Simon, arrêté comme déserteur, nous fait savoir par lettre :",
      "Que son fils ne l'a nullement menacé pour lui extorquer de l'argent.",
      "Qu'il ne peut être poursuivi pour désertion, Gaston Simon ayant été reconduit à temps à son corps par ses soins.",
      "M. Fernand Simon ajoute que l'aventure se réduit à un coup de tête de jeune homme."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Clichy : Arrestation de jeunes voleurs",
    "summary": "Deux jeunes frères, Louis et Clément Levrot, ont été arrêtés à Clichy en flagrant délit de vol de bijoux et d'objets précieux au préjudice d'un apprêteur de Courbevoie.",
    "paragraphs": [
      "M. Hogeaux, commissaire de police, a arrêté hier et envoyé au Dépôt deux vauriens, les frères Louis et Clément Levrot, âgés de quatorze et quinze ans, demeurant rue d'Alsace. Ils ont été pris en flagrant délit de vol d'une montre en or, de nombreux bijoux et de plusieurs objets de prix, au préjudice de M. Boruote, apprêteur demeurant rue Lambruschini, à Courbevoie."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Asnières : Un bébé abandonné",
    "summary": "Un employé du chemin de fer de l'Ouest a découvert, hier après-midi, un nourrisson d'environ quinze jours abandonné sur un banc de la gare d'Asnières, emmailloté dans des vêtements de femme.",
    "paragraphs": [
      "Hier après-midi, un employé du chemin de fer de l'Ouest, de service à la gare des voyageurs, découvrait sur un banc, soigneusement emmailloté dans plusieurs chemises de femme, un petit garçon âgé d'environ quinze jours.",
      "Le bébé a été porté à la crèche municipale puis dirigé vers le service des Enfants-Assistés."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Levallois-Perret : Femme renversée par un cheval",
    "summary": "Mme Antoinette Bougie, cuisinière, a été violemment renversée par un cheval emporté rue Chevallier. Grièvement blessée, elle a été transportée à l'hôpital Beaujon.",
    "paragraphs": [
      "Hier soir, vers huit heures, Mme Antoinette Bougie, âgée de cinquante ans, cuisinière, demeurant passage Valmy, traversait la rue Chevallier quand elle fut renversée par un cheval emporté.",
      "La malheureuse femme, le crâne fracturé et le nez arraché, a dû être transportée, dans un état des plus graves, à l'hôpital Beaujon."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Gennevilliers : Accident entre une voiture et un camion",
    "summary": "Mme Bersen, marchande de volailles, a été grièvement blessée à la tête après que sa voiture eut été percutée par un camion chargé de farine à l'angle de la rue Saint-Denis.",
    "paragraphs": [
      "Hier soir à quatre heures, rue Saint-Denis, à l'angle de la rue du Presbytère, Mme Bersen, marchande de volailles demeurant aux Grésillons, passait avec sa voiture quand elle fut violemment heurtée par un camion chargé de sacs de farine venant en sens inverse.",
      "Mme Bersen, projetée de son siège sur la chaussée, a été très grièvement blessée au crâne."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Andrésy : Sauvetage dans la Seine",
    "summary": "Le jeune Agénor Audiger a héroïquement sauvé la nommée Désirée Coulon, qui avait sombré avec son attelage dans les eaux de la Seine à Denouval.",
    "paragraphs": [
      "Hier après-midi, un jeune homme, Agénor Audiger, passait en voiture avec son père et son frère à Denouval, lorsqu'il entendit crier au secours.",
      "Une femme, Désirée Coulon, montée dans un tombereau, était tombée avec son attelage dans la Seine.",
      "Agénor Audiger se porta aussitôt au secours de la malheureuse et fut assez heureux pour la ramener saine et sauve."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Mantes : Mort tragique par noyade",
    "summary": "Mme veuve Logall, 79 ans, a trouvé la mort à Porcheville en tombant accidentellement dans une mare à purin située dans sa cour. Son grand âge a facilité l'asphyxie.",
    "paragraphs": [
      "Hier matin, à Porcheville, Mme veuve Logall, âgée de soixante-dix-neuf ans, a été trouvée noyée dans une mare à purin sise dans sa cour, près de sa maison d'habitation.",
      "On suppose que, prise d'un étourdissement, la dame est tombée dans la fosse, n'a pas eu le temps d'appeler au secours, et qu'en raison de son grand âge elle a été presque aussitôt asphyxiée."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Arnouville : Suicide d'une cultivatrice",
    "summary": "À Arnouville, Mme Pinet, une cultivatrice de soixante-cinq ans, s'est donné la mort par pendaison dans sa cuisine pour abréger les cruelles souffrances que lui imposait une maladie incurable.",
    "paragraphs": [
      "À Arnouville, Mme Pinet, cultivatrice âgée de soixante-cinq ans, a été trouvée pendue à une poutre de sa cuisine. C'est pour se soustraire aux atroces souffrances d'une maladie incurable que la malheureuse a mis fin à ses jours."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Bagnolet : Mort suspecte d'une jeune fille",
    "summary": "Découverte tragique à Bagnolet : la jeune Victorine Baril, 17 ans, a été retrouvée le crâne fracassé dans l'avenue du Centenaire. Malgré les soupçons d'agression, le médecin privilégie la thèse d'un accident de voiture.",
    "paragraphs": [
      "L'avant-dernière nuit, des passants ont trouvé, étendue au milieu de l'avenue du Centenaire et baignant dans une mare de sang, une jeune personne qui ne donnait plus aucun signe de vie.",
      "Il s'agissait d'une jeune fille de dix-sept ans, nommée Victorine Baril, demeurant à Paris. La malheureuse, qui avait le crâne fracassé, expira quelques instants plus tard, alors que le docteur Veper tentait de lui prodiguer des soins d'urgence.",
      "Si la population de Bagnolet incline à croire qu'elle a été victime d'un attentat, le praticien, après examen, estime que cette mort est purement accidentelle. La jeune fille aurait été violemment projetée contre la bordure du trottoir par un véhicule lancé à toute allure.",
      "M. Clément, commissaire de police, a fait transporter le corps à la Morgue et a immédiatement ouvert une enquête pour faire toute la lumière sur ce drame."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Ivry : Inaugurations et faits divers",
    "summary": "La ville d'Ivry officialise l'inauguration de son nouveau port et de sa gare de marchandises pour le 22 octobre, en présence des ministres Millerand et Baudin qui seront conviés à un banquet officiel.",
    "paragraphs": [
      "La municipalité vient de fixer irrévocablement au 22 octobre la date de l'inauguration du nouveau port et de la gare des marchandises.",
      "MM. Millerand, ministre du Commerce, et Baudin, ministre des Travaux publics, arriveront à Ivry à dix heures du matin, procéderont officiellement aux inaugurations et assisteront ensuite au grand banquet qui sera servi à midi dans les salons de l'Hôtel de Ville."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Ivry : Dispute conjugale par revolver",
    "summary": "Une violente altercation a éclaté rue Paul-Bert, au Petit-Ivry, entre une concierge et son locataire. La femme a fait usage d'un revolver, blessant grièvement son adversaire à la joue avant l'intervention policière.",
    "paragraphs": [
      "Dans la soirée d'hier, pour un motif des plus futiles, Mme Cancolin, concierge rue Paul-Bert, au Petit-Ivry, s'est prise de querelle avec un locataire, M. B., cartonnier.",
      "Des paroles, on en vint aux coups, et Mme Cancolin, qui portait sur elle un revolver de petit calibre, tira plusieurs balles, presque à bout portant, sur son adversaire, qui fut atteint à la joue droite.",
      "M. B. tomba sans connaissance, perdant le sang à flots. Il dut être transporté d'urgence à l'hôpital. Informé de ces faits, M. Boussant, commissaire de police, a diligenté une enquête qui démontra que la femme Cancolin s'est servie de son arme à la suite de violences exercées contre elle par M. B."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Meaux : Suicide par asphyxie",
    "summary": "Un ouvrier maçon du hameau de la Gambière, près de La Ferté-sous-Jouarre, a été découvert asphyxié à son domicile. Les causes de ce geste fatal restent pour l'heure indéterminées.",
    "paragraphs": [
      "Hier matin, un ouvrier maçon du hameau de la Gambière, près de La Ferté-sous-Jouarre, nommé Oudard, âgé de cinquante-quatre ans, a été découvert par ses voisins asphyxié dans son domicile. On ignore les causes de ce suicide."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident industriel",
    "summary": "Un apprenti de quatorze ans, nommé Collet, a été grièvement blessé à l'usine de vermicellerie. Son pied ayant été happé par les engrenages, il a reçu les soins nécessaires avant d'être ramené au domicile familial.",
    "paragraphs": [
      "Un enfant de quatorze ans, nommé Collet, qui travaillait hier à l'usine de vermicellerie, a eu un pied pris dans les engrenages. Après avoir reçu les soins immédiats, il a été transporté au domicile de ses parents, rue de Fublaines."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Départements",
    "title": "Montdidier : Accident domestique",
    "summary": "Une femme demeurant à Roye a été gravement brûlée à la suite de l'explosion de sa lampe à pétrole. Le voisinage est intervenu pour éteindre un début d'incendie avant l'évacuation de la victime vers l'hôpital.",
    "paragraphs": [
      "La nommée Fischer, femme âgée demeurant à Roye, rue Saint-Gilles, ayant renversé sa lampe à pétrole, a été grièvement brûlée à la figure et sur diverses parties du corps ; son transport à l'hôpital a été jugé nécessaire. Un commencement d'incendie a été rapidement éteint par les voisins accourus à ses cris."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Départements",
    "title": "Montargis : Noyade volontaire",
    "summary": "Une veuve de soixante-dix-huit ans, atteinte d'un cancer, a mis fin à ses jours dans la rivière le Solin. Elle avait lesté son tablier avec des pierres pour pallier la faible profondeur de l'eau.",
    "paragraphs": [
      "Mme veuve Pressoq, âgée de soixante-dix-huit ans, demeurant au hameau de Villauche, commune de Vimory, a été trouvée ce matin noyée dans la rivière le Solin. Pour mettre son funeste projet à exécution, la hauteur de l'eau étant à peine de 50 centimètres, elle avait eu soin d'enrouler autour de sa tête son tablier, dans lequel elle avait placé deux grosses pierres. La malheureuse souffrait depuis longtemps d'un cancer."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Bulletin du travail",
    "title": "Grève à Angoulême",
    "summary": "Une quarantaine d'ouvriers des carrières de la Société Civet Pommier et Cie, situées à Sireuil, ont cessé le travail pour protester contre une réduction de leurs appointements.",
    "paragraphs": [
      "Au nombre d'une quarantaine, les ouvriers des carrières de pierres de la Société Civet Pommier et Cie, dont le siège est à Paris et qui sont situées sur le territoire de Sireuil, se sont mis en grève à la suite d'une diminution de leurs salaires."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Santé",
    "title": "Le Goudron de Guyot",
    "summary": "Le pharmacien parisien Guyot a révolutionné le traitement des affections pulmonaires en rendant le goudron soluble. Son remède est préconisé pour soigner les bronchites, les rhumes et lutter contre la phtisie.",
    "paragraphs": [
      "Il y a une trentaine d'années, M. Guyot, pharmacien distingué de Paris, a réussi à rendre le goudron soluble dans l'eau. Grâce à cette invention, on trouve aujourd'hui chez tous les pharmaciens, sous le nom de Goudron de Guyot, une liqueur très concentrée de goudron, qui permet de préparer instantanément une eau de goudron très limpide et efficace.",
      "L'usage du Goudron de Guyot, pris ainsi à tous les repas, suffit pour guérir le rhume le plus opiniâtre et la bronchite la plus invétérée. On arrive même très souvent à enrayer et à guérir la phtisie bien déclarée, car le goudron arrête la décomposition des tubercules du poumon en tuant les mauvais microbes.",
      "Il est absolument nécessaire de bien demander dans les pharmacies le véritable Goudron de Guyot pour éviter les imitations."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Revenant",
    "summary": "Le Rougeaud, ancien lutteur, escalade le mur d'un hôtel mystérieux. Dans l'atelier de Bareste, il découvre une lettre du Préfet de police révélant un secret vieux de dix-neuf ans concernant la mère de Rose-Marie.",
    "paragraphs": [
      "De temps en temps, les regards du vagabond se portaient vers le magnifique hôtel aux volets toujours hermétiquement clos, sur lequel il avait jeté son dévolu dans l'après-midi, et où une flamme s'allumait.",
      "Il songeait que, dans un instant, lorsque tout serait désert, il escaladerait ce petit mur qui le séparait de tant de richesses, et que, demain, à l'aube, il aurait de quoi manger plantureusement.",
      "Soudain, la demie de minuit arriva jusqu'à lui. Allons, cette fois, le moment était venu. Le Rougeaud, ancien lutteur, prit son élan, s'élança et s'accrocha solidement à la crête du mur.",
      "Après avoir pénétré dans l'atelier de Bareste, le Rougeaud, stupéfait par la richesse des lieux, s'approcha du bureau. En lisant une lettre provenant du cabinet du Préfet de police, il fut pris d'une surprise indescriptible en y découvrant des détails sur une affaire mystérieuse vieille de dix-neuf ans, impliquant la mère de Rose-Marie.",
      "La stupeur du Rougeaud était à son comble, lorsque, tout à coup, prêtant l'oreille, il lui sembla entendre un bruit de pas dans le jardin."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Informations Diverses",
    "title": "Vie associative et sociale",
    "summary": "La vie sociale s'anime : banquet des P.T.T. à la Porte-Dorée, cours gratuits de sténographie et de commerce, et inauguration de la première Université populaire au faubourg Saint-Antoine.",
    "paragraphs": [
      "Le banquet du Soutien fraternel des sous-agents des Postes, Télégraphes et Téléphones aura lieu sous la présidence de M. Mougeot, samedi 7 octobre, dans les salons de la Porte-Dorée.",
      "Un concours public et gratuit de sténographie, selon la méthode Prévost-Delaunay, sera professé tous les dimanches et jeudis, à partir du 8 octobre, à la mairie du cinquième arrondissement.",
      "Lundi prochain, 9 octobre, s'ouvriront à l'École supérieure de commerce et à l'École commerciale des cours commerciaux gratuits pour les jeunes gens et les jeunes filles.",
      "La première Université populaire ouvrira ses portes lundi prochain au 157, faubourg Saint-Antoine ; elle comprendra une bibliothèque, un musée du soir et une salle de spectacle."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Transport",
    "title": "Départs et arrivées des paquebots",
    "summary": "Bulletin maritime du 5 octobre : le paquebot Olinde-Rodrigues a atteint Saint-Thomas, tandis que le Labrador et le Lafayette poursuivent leurs liaisons transatlantiques régulières.",
    "paragraphs": [
      "Le paquebot Olinde-Rodrigues (C.G.T.), venant du Havre, est arrivé à Saint-Thomas le 2 octobre.",
      "Le paquebot Labrador (C.G.T.) est parti de Pointe-à-Pitre le 4 octobre pour Santander, Bordeaux et le Havre.",
      "Le paquebot Lafayette (C.G.T.) est parti de Colon le 3 octobre pour Saint-Nazaire."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Marchés",
    "title": "Marché aux bestiaux de la Villette",
    "summary": "Compte rendu du 5 octobre : le marché affiche une tendance baissière pour les bœufs, vaches et porcs. Seul le cours des moutons enregistre une légère progression.",
    "paragraphs": [
      "Compte rendu du marché du 5 octobre : Les ventes de bœufs sont difficiles avec une baisse de 1 franc par kilo net. Les ventes de vaches sont mauvaises. Le marché des moutons affiche une hausse de 1 centime par demi-kilo. Les porcs sont en baisse de 2 centimes par demi-kilo vif."
    ]
  }
];
