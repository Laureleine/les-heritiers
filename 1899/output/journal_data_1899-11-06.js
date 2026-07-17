// Date: 1899-11-06
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-11-06 (Version Restaurée, 32 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Vie Locale",
    "title": "Visite ministérielle à Nogent-sur-Marne",
    "summary": "Le ministre des Travaux publics a été reçu avec ferveur à Nogent-sur-Marne. La journée fut marquée par des discours sur les bords de Marne et un bal populaire dans la salle des fêtes.",
    "paragraphs": [
      "Le ministre des Travaux publics, accompagné de nombreuses personnalités officielles, a été accueilli avec ferveur à Nogent-sur-Marne. La population a réservé un accueil enthousiaste au cortège ministériel.",
      "Un déjeuner a été servi sous une tente dressée sur les bords de Marne, au cours duquel plusieurs discours ont été prononcés, exaltant le courage et la persévérance de nos concitoyens.",
      "À cinq heures, le ministre a regagné Paris après avoir été vivement acclamé par la foule. La journée s'est clôturée par un bal à grand orchestre dans la salle des fêtes de Nogent."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Politique",
    "title": "La Haute-Cour",
    "summary": "Les préparatifs du procès devant la Haute-Cour s'accélèrent. M. Bernard, procureur général, a signifié les actes d'accusation, tandis que M. Hinder conteste vigoureusement les allégations le concernant.",
    "paragraphs": [
      "Le procès devant la Haute-Cour se prépare activement. M. Bernard, procureur général, a fait signifier hier aux accusés l'arrêt de mise en accusation.",
      "L'acte d'accusation est volumineux et énumère scrupuleusement tous les faits retenus. M. Hinder, dont le nom apparaît dans le rapport de M. Bérenger concernant un voyage à Bruxelles, proteste contre ces allégations et se réserve le droit de se défendre devant la Haute-Cour."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "La défense mobile de l'Algérie",
    "summary": "Les autorités militaires réorganisent la défense mobile de l'Algérie en transférant son siège d'Alger à Oran, position jugée stratégiquement supérieure par sa proximité avec Gibraltar.",
    "paragraphs": [
      "Des modifications importantes sont apportées à la défense mobile de l'Algérie, le siège étant transféré d'Alger à Oran. Cette place, malgré certaines imperfections, offre l'avantage tactique d'être plus proche de Gibraltar.",
      "Ce transfert est considéré comme un progrès notoire par les autorités militaires."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Politique",
    "title": "Le Conseil supérieur de la Guerre",
    "summary": "Le Conseil supérieur de la Guerre, sous la présidence du général de Galliffet, ministre de la Guerre, a été officiellement reconstitué avec un collège de généraux éminents.",
    "paragraphs": [
      "Le Conseil supérieur de la Guerre, présidé par le général de Galliffet, ministre de la Guerre, a été reconstitué. Il comprend, outre le rapporteur Citanne, des généraux tels que Lucas, Pierron, Saussier, Zurlinden et Duchesne."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Faits Divers",
    "title": "Les Bigames",
    "summary": "La justice observe une recrudescence des cas de bigamie. Malgré la rigueur légale, les jurys font preuve d'indulgence, accordant souvent des circonstances atténuantes aux prévenus.",
    "paragraphs": [
      "La question de la bigamie revient fréquemment devant les tribunaux. Alors que la loi prévoit des peines sévères, les jurys accordent souvent des circonstances atténuantes aux prévenus.",
      "Plusieurs cas récents illustrent cette tendance, du « bigame d'Alfortville », un fêtard imprudent, à d'autres prévenus ayant plaidé le « crime d'amour ». Les peines prononcées oscillent entre trois et cinq ans de prison, bien loin de la sévérité des siècles passés où la bigamie pouvait mener à des châtiments corporels extrêmes."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Social",
    "title": "Les grèves dans l'Est",
    "summary": "À Montbéliard, la situation s'apaise. Les usines Japy à Beaucourt ont repris le travail. Malgré quelques foyers persistants à Mandeure, le comité de grève appelle désormais à l'ordre contre les agitateurs extérieurs.",
    "paragraphs": [
      "La situation s'améliore sensiblement dans la région de Montbéliard. Les usines Japy, situées à Beaucourt, ont repris leur activité normale et la tension, qui fut vive ces derniers jours, diminue progressivement.",
      "À Fesches-le-Châtel, le calme règne désormais en maître. Si quelques foyers de grève subsistent encore à Mandeure, le comité de grève établi à Beaucourt a officiellement appelé les ouvriers à la reprise immédiate du labeur, tout en dénonçant avec vigueur les agitateurs extérieurs qui, selon la direction, sont les uniques instigateurs de ces troubles."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Faits Divers",
    "title": "Condamnation à mort à Quimper",
    "summary": "La Cour d'assises de Quimper a rendu son verdict : le nommé Clet est condamné à la peine capitale pour le triple assassinat des époux Coët ainsi qu'un meurtre commis au printemps dernier.",
    "paragraphs": [
      "La Cour d'assises de Quimper a prononcé, hier, la peine capitale à l'encontre du nommé Clet. L'accusé a été reconnu coupable du triple assassinat des époux Coët, ainsi que d'un autre crime commis au cours du printemps dernier, mettant ainsi fin à une affaire qui avait suscité une vive émotion dans tout le département."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Politique",
    "title": "La députation catalane",
    "summary": "Le gouvernement espagnol, par l'entremise du ministre Silvela, maintient une position ferme : aucune négociation avec la députation catalane ne sera ouverte tant que les contribuables de Barcelone refuseront l'impôt.",
    "paragraphs": [
      "Le gouvernement espagnol a reçu, au cours d'une entrevue, la députation catalane venue réclamer une autonomie accrue pour les provinces espagnoles. Toutefois, le ministre Silvela a déclaré avec fermeté qu'il lui était impossible d'entamer la moindre négociation tant que les contribuables de Barcelone persisteraient dans leur refus obstiné de s'acquitter des impôts."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Sciences et Explorations",
    "title": "Retour de la Belgica",
    "summary": "Le commandant de Gerlache est de retour à Anvers à bord de la Belgica. Son expédition scientifique au pôle Sud, marquée par de nombreux défis, a été saluée par une foule en liesse lors du débarquement.",
    "paragraphs": [
      "Le commandant de Gerlache est rentré à Anvers à bord de la Belgica, au terme d'une longue et périlleuse croisière scientifique effectuée au pôle Sud. Une foule considérable, massée sur les quais, a chaleureusement acclamé les explorateurs lors de leur débarquement."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Social",
    "title": "Le travail des enfants",
    "summary": "Le ministre du Commerce rappelle aux préfets l'application de la loi du 2 novembre sur le travail des femmes et des enfants. Les industriels ont jusqu'au 1er janvier pour se mettre en règle avec les nouveaux horaires.",
    "paragraphs": [
      "Le ministre du Commerce a adressé une circulaire pressante aux préfets concernant l'application de la loi du 2 novembre sur le travail des enfants et des femmes. Les chefs d'industrie disposent d'un délai impératif allant jusqu'au 1er janvier prochain pour mettre leurs ateliers en parfaite conformité avec les limitations de durée du travail fixées par cette nouvelle législation."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Vie Associative",
    "title": "Société nationale de sauvetage",
    "summary": "Sous la présidence de M. de Lanessan, ministre de la Marine, la Société nationale de sauvetage a célébré sa fête annuelle au Trocadéro, honorant le dévouement héroïque de ses nombreux sauveteurs médaillés.",
    "paragraphs": [
      "La fête annuelle de la Société nationale de sauvetage s'est déroulée avec éclat au Trocadéro, sous la haute présidence de M. de Lanessan, ministre de la Marine. Au cours de cette cérémonie solennelle, de nombreuses médailles ont été décernées à d'héroïques sauveteurs, en reconnaissance de leurs actes de courage et de leur dévouement exemplaire au service de l'humanité."
    ]
  },
  {
    "id": 12,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de voiture à Lariboisière",
    "summary": "Un jeune enfant a été violemment renversé par une voiture sur la voie publique. Secouru par des témoins, il a été transporté d'urgence à l'hôpital Lariboisière pour une fracture de la jambe droite.",
    "paragraphs": [
      "Un grave accident a eu lieu sur la voie publique, où un enfant a été renversé par une voiture. L'infortuné a eu la jambe droite fracturée dans le choc.",
      "Aussitôt relevé par des passants, il a été transporté en toute hâte à l'hôpital Lariboisière, où il a reçu les soins nécessaires à son état."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de train",
    "summary": "Un tragique accident ferroviaire s'est produit hier soir en gare d'Alfortville, coûtant la vie à M. Jules Pucatu, employé des chemins de fer, décédé instantanément lors du choc.",
    "paragraphs": [
      "Un employé des chemins de fer, nommé Jules Pucatu, a été victime d'un accident mortel dans la soirée d'hier, alors qu'il se trouvait en gare d'Alfortville.",
      "Le malheureux, fauché en plein exercice de ses fonctions, a succombé sur le coup ; la mort fut, hélas, instantanée."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers à Neuilly-sur-Seine",
    "summary": "Un accident mortel a endeuillé la commune de Neuilly-sur-Seine : un gardien a perdu la vie après une chute fatale survenue alors qu'il se trouvait sur un monument de la ville.",
    "paragraphs": [
      "Un événement tragique s'est produit à Neuilly-sur-Seine. Un gardien, qui effectuait son service sur un monument de la localité, a fait une chute accidentelle d'une hauteur périlleuse.",
      "Grièvement blessé lors de l'impact, il a succombé peu après à ses blessures."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident de voiture à Clichy",
    "summary": "Un violent accident sur le quai de Clichy a coûté la vie au cocher Nordelet. Renversé par un autre véhicule, il a succombé à ses blessures après avoir subi une fracture de la cuisse et un traumatisme crânien.",
    "paragraphs": [
      "Un cocher circulant sur le quai de Clichy a été victime d'une collision violente provoquée par un autre conducteur.",
      "Le cocher, nommé Nordelet, a été projeté violemment au sol ; souffrant d'une grave blessure à la tête et d'une fracture de la cuisse, il a succombé à ses blessures peu après l'accident."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Drame à Levallois-Perret",
    "summary": "Hier soir, à Levallois-Perret, Mlle Honorine Baptiste, âgée de quarante ans, a été grièvement brûlée dans des circonstances tragiques que l'enquête de police s'efforce aujourd'hui de déterminer.",
    "paragraphs": [
      "Hier soir, vers sept heures, Mlle Honorine Baptiste, âgée de quarante ans, a été grièvement brûlée au ventre dans des circonstances malheureuses que l'enquête, actuellement diligentée, devra déterminer avec précision."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Fête de gymnastique à Asnières",
    "summary": "La société locale « La Patriote » a tenu sa grande fête de gymnastique au gymnase municipal d'Asnières, rencontre sportive ponctuée par un concert qui a suscité les vifs applaudissements de l'auditoire.",
    "paragraphs": [
      "La société « La Patriote » a organisé, sous les meilleurs auspices, une grande fête de gymnastique au sein du gymnase municipal. Cette manifestation fut ponctuée par un concert d'un bel effet qui a suscité de très vifs applaudissements de la part de l'assistance."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Enfant sauvé à Pantin",
    "summary": "Un jeune garçon de onze ans, tombé accidentellement dans le canal hier matin à Pantin, a dû son salut à l'intervention courageuse de M. Victor Huiltens, qui l'a ramené sur la rive malgré le péril.",
    "paragraphs": [
      "Un petit garçon de onze ans est tombé accidentellement dans le canal, hier matin, à Pantin. Il a été arraché à une mort certaine par l'intervention énergique de M. Victor Huiltens qui, malgré le danger manifeste, a réussi à le ramener sur la berge sain et sauf."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Décès suspect à Saint-Denis",
    "summary": "M. D'Homme, commissaire de police, a ouvert une enquête suite au décès d'un vieillard de soixante-treize ans, le nommé Armand. Le médecin dépêché sur place n'a pu conclure aux causes naturelles.",
    "paragraphs": [
      "M. D'Homme, commissaire de police, a diligenté une enquête suite au décès d'un vieillard de soixante-treize ans, désigné sous le nom d'Armand. Le médecin appelé à constater le décès n'a pu, en l'état, se prononcer avec certitude sur les causes exactes de cette mort soudaine."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Projet de concours à Vincennes",
    "summary": "La Société d'horticulture de Vincennes a officiellement sollicité le ministre de l'Agriculture afin que la commune soit désignée pour accueillir un prochain concours national de produits horticoles.",
    "paragraphs": [
      "La Société d'horticulture de Vincennes a adressé une requête officielle au ministre de l'Agriculture. Elle demande instamment que la commune soit choisie comme siège pour l'organisation prochaine d'un concours d'envergure consacré aux produits horticoles de la région."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Feuilleton",
    "title": "Le Lieutenant Jacques",
    "summary": "Le comte de Montalais reconnaît une dette de 800 000 francs envers M. Isidore Ledru. Ce dernier échafaude un plan et charge son commis Évariste de transmettre des instructions capitales à un mystérieux allié.",
    "paragraphs": [
      "Gontran, comte de Montalais, reconnaît devoir une somme de huit cent mille francs à M. Isidore Ledru, en remboursement d'avances consenties sur une période de quinze années.",
      "Isidore Ledru, satisfait de cette reconnaissance formelle, promet de combiner un plan pour la suite des événements ; il ordonne aussitôt à son commis Évariste de transmettre des instructions secrètes à un certain M. Paul, au Père Bernard."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Sports",
    "title": "Résultats des courses à Auteuil",
    "summary": "Sous un climat printanier, la cinquième journée du meeting d'automne à Auteuil a été marquée par les victoires de Béginat, Pilule, et le triomphe de Pétard dans le prestigieux Prix de l'Avenir.",
    "paragraphs": [
      "La cinquième journée du meeting d'automne s'est déroulée par un temps printanier. Le Prix des Bastions a été remporté par Béginat. Le Prix du Treillage a vu la victoire de Pilule. Le clou de la journée, le Prix de l'Avenir, a été enlevé par Pétard."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Programme des spectacles",
    "summary": "La vie théâtrale parisienne est intense cette semaine avec une programmation riche à l'Opéra et à la Comédie-Française, tandis que le théâtre du Gymnase annonce sa réouverture pour le 13 novembre.",
    "paragraphs": [
      "La semaine est marquée par de nombreuses représentations à l'Opéra, à la Comédie-Française et à l'Opéra-Comique. Le théâtre du Gymnase prépare sa réouverture pour le 13 novembre avec la pièce Les Pieds nickelés."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Causerie financière",
    "title": "Analyse de la Bourse et du marché financier",
    "summary": "Malgré les tensions liées au Transvaal et les craintes sur le taux d'escompte, la Bourse affiche une belle vitalité. Les obligations de la Ville de Paris se distinguent par leur attrait exceptionnel.",
    "paragraphs": [
      "Les nouvelles du Transvaal, jointes à certains indices d'une nouvelle tension monétaire, auraient pu inspirer quelque inquiétude sur la tenue générale de la Bourse. Les prévisions pessimistes ne se sont point réalisées, et c'est à peine si cette double influence a amené quelque faiblesse dans les compartiments de la cote qu'elle pouvait plus spécialement affecter.",
      "L'ensemble du marché a été fort animé et un grand nombre de valeurs, comme l'Extérieure, le Rio et les établissements de crédit, ont accompli des progrès importants durant la semaine. Cependant, la spéculation ferait bien de ne pas oublier que l'argent se montrera peut-être plus difficile à la fin du mois, et qu'une position de place trop chargée amènerait des difficultés capables d'entraver les bonnes dispositions qui se manifestent depuis quelque temps déjà.",
      "La liquidation de nos Rentes s'était d'abord effectuée dans les conditions les plus favorables : certaines positions d'acheteurs révélées au dernier moment, puis la crainte de voir la Banque de France élever le taux officiel de l'escompte, ont ensuite tendu les reports d'une façon appréciable et ont contribué à l'alourdissement des cours. La réaction n'a pas pris d'ailleurs de proportions inquiétantes et la clôture de samedi était déjà beaucoup plus ferme que le milieu de la séance.",
      "Le 3 % n'en perd pas moins 0,23 dans la huitaine, à 100. L'Amortissable, moins souvent traité, reste sans grand changement à 99.",
      "Les obligations de la Ville de Paris ont eu un marché très suivi pendant toute la semaine. Nous avons signalé hier les plus-values considérables qui se sont produites sur toutes ces obligations depuis le moment de leur émission.",
      "On nous fait remarquer, ce qui est fort juste, qu'il est impossible de ne pas tenir compte de cette hausse lorsque l'on veut calculer le revenu du titre. C'est ainsi que l'emprunt de 1892, dont l'émission remonte à six ou sept années seulement et dont les titres ne sont libérés entièrement que depuis trois ou quatre ans, voit ses obligations s'inscrire à 376 francs, en hausse de 36 francs, soit d'environ 10 % sur leur prix d'émission.",
      "Cette plus-value représente une progression annuelle régulière, typique de la hausse des obligations municipales, bien que le mouvement ascensionnel soit toujours plus vif au début. Mais cette réserve faite, il apparaît clairement que le porteur, en dehors de l'intérêt qu'il touche, gagne annuellement 5 francs en moyenne.",
      "Si le souscripteur d'origine des obligations vendait son titre aujourd'hui, il aurait touché, pour un débours initial de 340 francs, sept annuités de 10 francs, soit 70 francs, plus une somme de 36 francs provenant de la différence des cours. Le bénéfice serait ainsi de 106 francs, représentant 15,15 francs par an.",
      "Ce calcul, qui peut s'appliquer à toutes les obligations de la Ville de Paris, donnerait pour le nouvel emprunt du Métropolitain, qui sera émis le 18 de ce mois, des résultats très attractifs pour les investisseurs.",
      "C'est là un taux de capitalisation que ne présente aucune des grandes valeurs françaises de placement. Le revenu de la Rente, à laquelle on assimile naturellement les obligations de la Ville de Paris, ressort à 2,99 % pour le 3 %. Celui des actions de chemins de fer varie entre 3,06 et 3,50 %.",
      "De plus, il faut ajouter que ces dernières valeurs, qui exigent d'ailleurs un débours relativement considérable, ont atteint un tel niveau que leur avance ultérieure, si elle doit se produire, ne s'effectuera plus que très lentement. En outre, elles ne donnent à leurs possesseurs d'autre satisfaction que celle du revenu, tandis que les obligations de la Ville de Paris sont dotées de quatre tirages par an.",
      "Enfin, ces titres, loin d'exiger un capital important, sont accessibles à tout le monde. Pour le reste, le souscripteur a trois années devant lui. Ces obligations constituent donc un placement de premier ordre au quadruple point de vue du revenu, de la sécurité, des chances de lots et de la plus-value éventuelle du capital."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Politique étrangère",
    "title": "Situation politique en Espagne",
    "summary": "L'Espagne retrouve une stabilité parlementaire propice à l'économie. Avec le vote prochain du budget et l'apaisement en Catalogne, la Bourse anticipe une reprise, soutenue par les places de Berlin et Londres.",
    "paragraphs": [
      "En Espagne, les Cortès ont repris leurs travaux parlementaires ; le nouveau budget semble rencontrer un accueil favorable et sera probablement voté dans un délai assez court ; les troubles de Catalogne sont en voie d'apaisement. L'industrie se développe, les recettes des chemins de fer augmentent ; on parle déjà, un peu prématurément peut-être, d'un grand emprunt de consolidation. Aussi la Bourse semble-t-elle disposée à oublier les difficultés financières et politiques qui peuvent encore se produire, et la spéculation a vivement poussé l'Extérieure ; il est vrai que Berlin et Londres ont fortement contribué à cette hausse rapide."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Chronique financière",
    "title": "État des fonds russes et turcs",
    "summary": "Le marché financier reste prudent sur les fonds russes et turcs. Tandis que l'opposition parlementaire pèse sur l'Italien, les emprunts russes maintiennent une stabilité recherchée malgré l'incertitude sur les taux.",
    "paragraphs": [
      "L'Italien a été plus négligé ; il clôture à un niveau inférieur. Le programme que le gouvernement compte soumettre au Parlement n'est pas encore entièrement connu, mais on s'attend toujours à une vive opposition.",
      "Les fonds turcs ne s'écartent pas de leurs cours précédents. Les transactions à terme n'ont que peu d'importance, mais le comptant achète davantage, et ceci semble tout en faveur du classement des titres.",
      "Les fonds d'État russes sont restés calmes. Les différents emprunts 4 % dépassent légèrement le pair, tandis que le 3 1/2 % or russe est soutenu par les achats. On suppose que la Russie pourrait privilégier ces types d'émissions et que le grand emprunt qu'elle désire lancer en France rapportera au moins 4 % d'intérêt.",
      "On ne s'expliquerait pas, en effet, que nos amis et alliés, qui ont émis l'hiver dernier un emprunt en Allemagne à un taux inférieur au pair, offrissent des conditions moins avantageuses au marché de Paris."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Chronique financière",
    "title": "Activités de la Banque de France et des établissements de crédit",
    "summary": "La Banque de France renforce ses positions malgré la hausse des effets escomptés. Les établissements de crédit profitent d'une belle animation, avec des titres comme le Crédit Lyonnais en nette reprise.",
    "paragraphs": [
      "La Banque de France s'est avancée pendant la semaine. Bien que l'encaisse or ait légèrement baissé d'après le dernier bilan hebdomadaire, on envisage de nouveau l'élévation du taux officiel de l'escompte. Cette mesure n'aurait rien d'obligatoire actuellement, car la réserve d'or atteint encore la somme considérable de 1 887 000 000 francs et la Banque a la ressource d'effectuer ses paiements en argent lorsqu'elle désire arrêter les retraits de métal jaune. Mais il faut noter que le portefeuille d'effets escomptés a augmenté dans des proportions considérables et que les billets de banque en circulation s'élèvent à un chiffre qui n'avait jamais été atteint jusqu'à ce jour. La Banque peut donc trouver prudent, vu la situation du marché de l'argent dans les autres pays, de ralentir le développement de ses opérations pour consolider une position déjà remarquablement forte.",
      "Les autres grands établissements de crédit ne sont pas moins intéressés dans la question du loyer des capitaux ; même s'ils ont à donner un intérêt un peu plus élevé à leurs déposants, il leur restera une large marge de bénéfices dans l'emploi de leurs disponibilités en escompte, reports, avances, etc. Aussi tout ce compartiment de la cote a-t-il montré cette semaine une animation dont nous avions perdu l'habitude, et les cours font ressortir, d'un samedi à l'autre, de sensibles plus-values.",
      "Le Crédit lyonnais accentue fortement son mouvement de reprise ; il finit par gagner 11 francs à bien près du cours de 1 000 francs, que l'on entrevoyait depuis longtemps déjà.",
      "La Banque de Paris et des Pays-Bas, spécialement influencée par la bonne tenue des valeurs espagnoles, passe de 1061 à 1079 ; elle jouera certainement un rôle important dans le grand emprunt de consolidation que l'on prépare de l'autre côté des Pyrénées.",
      "Le Comptoir d'Escompte et la Société Générale gagnent chacun quelques points. La Banque Internationale, sur laquelle nous avions attiré l'attention des capitalistes lorsqu'elle se maintenait aux environs de 600, cote maintenant en hausse.",
      "La Banque ottomane reste sans changement."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Chronique financière",
    "title": "Tendance des actions des chemins de fer",
    "summary": "L'épargne privilégie les valeurs ferroviaires, portées par d'excellentes recettes. Toutefois, la hausse du prix du charbon et des métaux invite à la prudence concernant l'évolution des dividendes.",
    "paragraphs": [
      "Les actions des chemins de fer sont sorties de leur torpeur ; recherchées par l'épargne, qui semble pour le moment les préférer aux fonds d'État, elles commencent aussi à attirer l'attention de la spéculation. Les recettes continuent à être des plus brillantes ; l'augmentation totale de l'exercice courant pour les six grands réseaux est notable. Cependant, nous ne cesserons de répéter que les dépenses doivent également être accrues dans des proportions presque équivalentes par les prix élevés du combustible et des produits métallurgiques ; il serait donc imprudent de compter sur une forte augmentation de dividende au moins cette année pour le Nord et le Lyon.",
      "Ce sont cependant les deux titres les plus favorisés : le Midi gagne également quelques francs à 1365, tandis que l'Ouest et l'Orléans notent sans changement à 1100 et 1780 et que l'Est fléchit légèrement.",
      "Sans pouvoir rivaliser avec l'Extérieure, les Chemins espagnols gagnent chacun quelques points, le Nord de l'Espagne à 190, Madrid-Saragosse à 111 et les Andalous suivent la tendance."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Chronique financière",
    "title": "Diverses valeurs maritimes et industrielles",
    "summary": "Le secteur maritime affiche une belle vitalité, porté par la hausse des frets. Les parts du Petit Parisien enregistrent une progression remarquable, reflétant la santé exceptionnelle de l'entreprise.",
    "paragraphs": [
      "Dès le commencement de la semaine, les actions de Suez ont pris une avance qu'elles n'ont pas reperdue.",
      "La Compagnie Transatlantique profite largement de la hausse des frets pour les États-Unis, provoquée par la mobilisation d'un grand nombre de steamers anglais et américains par le gouvernement britannique.",
      "Les Messageries Maritimes, en revanche, sont négligées à 572. Les Chargeurs Réunis reprennent du terrain.",
      "Grâce à leurs recettes toujours fort satisfaisantes, les Omnibus sont en nouveau progrès. Les Voitures à Paris restent fermes.",
      "Les parts du Petit Parisien sont demandées en forte hausse, après avoir détaché un coupon de 15 francs, ce qui fait ressortir une avance de 65 francs acquise en moins de deux semaines. La marche de l'entreprise est si prospère et les bénéfices en telle progression que le dividende prochain sera certainement supérieur à celui de l'an dernier.",
      "La hausse des prix des charbons se maintient. Les actions des grands charbonnages dont s'occupe la spéculation ont bénéficié de cette cherté. Les actions des houillères d'Ahun sont appelées à s'élever sensiblement au-dessus des cours actuels, compte tenu de l'excellente situation financière de la Société."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Informations financières",
    "title": "Bourse et marché minier (Transvaal)",
    "summary": "Malgré les succès des Boers, la confiance en la victoire britannique stabilise le marché minier. La prolongation attendue du conflit influence toutefois les cours des valeurs du Transvaal.",
    "paragraphs": [
      "Le mouvement de la semaine avait été peu favorable, mais la clôture de samedi montre un gain de 20 francs dans la huitaine.",
      "Lorsque l'on apprit que les Boers, brusquant les événements, envahissaient les colonies britanniques, chacun s'attendait à les voir remporter quelques succès. Leurs récentes victoires n'ont pas été une surprise, bien qu'elles aient été plus brillantes que prévu. La Bourse ne s'en est pas émue outre mesure ; personne ne doute au fond du triomphe final des armes anglaises, et si les cours ont un peu fléchi, c'est que l'on se rend compte que la guerre sera plus longue et plus coûteuse que ne le disaient certains optimistes.",
      "C'est la politique qui influence le marché. Le courrier arrivé cette semaine avait quitté Johannesburg juste avant la déclaration de guerre ; les Compagnies avaient alors interrompu leurs exploitations, attendant l'issue des hostilités et la reprise du travail.",
      "Les variations de cours les plus importantes sont celles des Rand Mines, qui passent de 1014 à 1015 ; de l'East Rand, qui perd 7 francs 50 à 187 ; des Goldfields, qui fléchissent. Nous retrouvons la Robinson, la Robinson Deep à 262, Summer and Jack à 117, May, Lancaster à 50, et Village à 211."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Récit",
    "title": "L'incident au cabaret du père Bernard",
    "summary": "Au cabaret du père Bernard, une dispute éclate entre deux malfrats, Popaul et Julot. Le tavernier, doté d'une étrange maîtrise physique, intervient avec autorité, révélant un passé mystérieux qui inquiète ses clients.",
    "paragraphs": [
      "« Mince de galette, trente balles seulement. Ton Évariste fils nous a refaits. Pour un rouleur, c'en est un », s'écria la dame aux cheveux ébouriffés. « Tais-toi, Mélie », lui enjoignit M. Paul. « Faut pas débiner ainsi notre banquier, notre Providence. »",
      "L'Esbrouffe des Ternes cependant regardait Popaul avec méfiance. « Gageons, le Casse-Cœur », fit-il, « que tu as gardé pour toi beaucoup plus de fafiots que tu ne nous en as donnés ? » « Je l'avoue, mon moustachu », répondit le Casse-Cœur, « j'en ai gardé le double. »",
      "L'autre lança un juron et du poing frappa sur la table. « Et pourquoi cela, nom d'un... », vociféra-t-il, « de quel droit ? » « De quel droit ? » répéta Popaul tranquillement. « Je suis le chef, moi. J'ai droit au double et je me paye ; voilà. » « Eh bien, non ! cela ne sera pas », cria Julot. « Tu vas m'abouler ce que tu as volé. » « De quoi, asticot ? » ricana Popaul en se lissant les cheveux. « Vas-tu faire le malin avec moi ? Aligne-moi vingt-cinq francs, ou je fais un malheur ! » cria l'autre.",
      "« Un malheur », riposta le Casse-Cœur, « va, tu ne me fais pas peur. Tu as trop de sang de navet dans les veines, mon petit. » Au comble de l'exaspération, écumant de rage, Julot surgit. « Ah ! nous allons voir. » Vivement, il se leva et sortit de sa poche un couteau. Mais Paul, lui, s'était brusquement levé.",
      "L'ami de Julot tira de sa manche un surin et l'ouvrit. Mélie poussa alors un cri déchirant : « C'est-il Dieu possible ? Ils vont se saigner pour vingt-cinq balles ! » Séparés seulement par la table, ivres d'alcool et de fureur, les deux adversaires se reluquaient avec des yeux pleins de meurtre. Un malheur allait sans doute arriver. Mais soudain, le père Bernard avait quitté son comptoir et s'était rapproché d'eux. « Pas de rixe ! » fit-il avec autorité. « Je ne veux pas de sang chez moi ! » « Va-t'en, l'ancêtre », hurla Julot. « Laisse-moi lui faire son affaire. »",
      "« Non ! non et non », répondit énergiquement le père Bernard. « D'ailleurs, vous allez me faire le plaisir de prendre la porte. » « Tu dis, le décati ? » interrogea l'Esbrouffe des Ternes. « Que je vous prie de décamper le plus vite possible », dit le cabaretier. « Ah ! c'est toi qui vas payer pour tous », cria Julot, qui avait l'ivresse furieuse. Et oubliant pour le moment ses griefs contre Paul, il se rua sur Bernard. « Vieux sournois ! » cria-t-il, « voilà longtemps que tu m'embêtes. Il faut que je te donne ton compte, et nous allons rigoler. » Et son bras armé du couteau se leva sur le cabaretier.",
      "Mais celui-ci, allongeant la main, avait saisi le poignet du voyou. D'un coup sec, lui tordant le bras, il avait fait lâcher l'arme. En même temps, d'un coup de pied dans le ventre, il envoya Julot rouler sur le carreau.",
      "Le père Bernard se baissa, ramassa le couteau et en brisa la lame. Pendant ce temps, Popaul regardait avec un sourire d'admiration et, se croisant les bras : « Tiens, tiens, le coup de la mère Mathieu. Qui donc vous a appris ce truc, père Bernard ? Oui, le coup de la mère Mathieu », répéta-t-il. « J'ai connu un type de mes amis, retour de Cayenne, qui l'avait appris là-bas, parmi les camarades. Il le pratiquait, mais beaucoup moins bien que vous, ma vieille branche. »",
      "Et comme le père Bernard ne répondait rien à ces facéties élogieuses : « Vrai de vrai », poursuivit Popaul, « c'est à croire que vous avez mangé la soupe du gouvernement, là-bas à Cayenne, ou à la Nouvelle. Est-ce que vous avez eu un des pensionnaires du gouvernement pour professeur ? » « Vous avez trop bu d'absinthe, mon petit », dit froidement Bernard.",
      "Julot cependant s'était relevé. Vaincu, humilié par sa défaite, il avait la mine déconfite d'un chien battu. Il s'approcha du patron, et d'une voix qu'il s'efforçait de rendre moins rude : « Allons, père Bernard », dit-il, « vous êtes le plus fort. Faites excuse, et servez-moi un second tord-boyau. Je vous invite. » Et il tendit la main au vieillard. Celui-ci parut ne pas apercevoir cette avance. L'Esbrouffe des Ternes haussa les épaules et alla se rasseoir à la table.",
      "En même temps il grommelait entre ses dents : « Toi le birbon, tu me revaudras ce coup. » « Père Bernard ! » s'écria Popaul, « venez donc trinquer avec nous. » « Non, merci », répliqua le cabaretier, « je ne bois jamais. »",
      "« Pourquoi cela ? » interrogea le Casse-Cœur des dames. « Vous vendez du bon vin et vous êtes un bon zig vous-même. Oui », ajouta-t-il en s'échauffant, « vous êtes un peu renfermé, un peu cachottier, mais vous êtes toujours prêt à épauler un copain. » Mais le père Bernard était allé se rasseoir à son comptoir.",
      "« Voyons », reprit Popaul, qui décidément se sentait en veine d'expansion, « pourquoi que vous ne buvez jamais un coup ? C'est-il que le vin vous est contraire à l'estomac ? » Le cabaretier tourna la tête vers Popaul et fixa sur lui son étrange regard. Enfin, et d'une voix froide et brève : « Vous savez », dit-il, « que je n'aime ni les questions, ni parler de moi. Pour cette fois, je veux bien sortir de mes habitudes. Mais il est entendu que vous ne m'interrogerez plus. » « Oui oui », exclama le Casse-Cœur, « narrez-nous votre histoire. »",
      "Tous les yeux se braquèrent avec curiosité sur le cabaretier. « Mon histoire ? » soupira le père Bernard, « elle n'est pas longue. Je me suis enivré un jour, et de ce jour datent tous mes malheurs. » Le Casse-Cœur des dames et l'Esbrouffe des Ternes partirent d'un long et bruyant éclat de rire. « Ah ah ! ah ! » cria Julot, « gageons qu'il a estourbi quelqu'un. »",
      "À ces mots, le père Bernard se redressa. Il était devenu livide, et ses yeux, dilatés par quelque poignante émotion, étincelaient étrangement dans la pâleur de son visage. En même temps, un convulsif tremblement agitait ses épaules. « Assez ! » assena-t-il d'une voix frémissante et les lèvres tordues par un spasme d'horreur.",
      "Cependant Mélie la Dèche le regardait avec attention. « Dites donc, père Bernard », dit-elle tout à coup, « depuis trois jours qu'avec mon homme je suis votre locataire, je vous ai reluqué bien souvent. Votre figure ne m'est pas inconnue. » Elle fit une pause et le regardant toujours : « Oui », reprit-elle, « j'ai idée de vous avoir déjà rencontré. Mais où ? quand ? comment ? Ma foi, je ne m'en souviens plus. »",
      "Et se mettant à rire : « J'en ai tant connu, d'hommes », ajouta-t-elle, « impossible de me les rappeler tous. » Popaul, que la grossièreté de ce cynisme n'avait nullement effarouché, prit un air avantageux : « Je ne vous ai jamais, père Bernard, présenté ma petite femme ; faut que je répare cet oubli. Un amour de gonzesse, d'ailleurs, ayant reçu de l'éducation, élevée par le gouvernement, fille de gendarme. Saluez, vous autres. » « De brigadier, s'il vous plaît », rectifia Mélie.",
      "« Aussi, comme dit la chanson, j'aime les militaires. J'en ai eu jusqu'à trois, officier pour amants. Je n'en suis pas plus riche pour ça ! » ajouta-t-elle. L'Esbrouffe des Ternes courba vers la donzelle un mauvais regard : « Sans compter ceux de la rousse, ma fille, car toi aussi tu en as été. » Mais Mélie la Dèche était en humeur de rire. « Oh ! si peu », fit-elle, « que je n'en ai pas eu une indigestion. »",
      "« Père Bernard », reprit Popaul, « savez-vous que c'est une fameuse pièce, ma femme ? Trente-cinq ans à peine, et déjà dix ans de Saint-Lazare. » « Si tu disais douze ans », fit en minaudant Mélie, qui paraissait toute fière de cet état de choses. Le père Bernard, cependant, ne paraissait plus rien écouter. Accoudé à son comptoir, il était devenu indifférent à tout ce qui se passait autour de lui ; il semblait plongé dans un monde de pénibles réflexions.",
      "« Monsieur Paul », dit-il brusquement, « voilà trois jours que je vous loge et vous héberge, vous et votre dame. Je vous serais fort obligé si vous me payiez votre pension échue. Vous le savez, on paye ici la journée, et on dîne, remettez d'avance. Je ne puis faire de crédit. » « Bien, bien », dit le Casse-Cœur des dames, « on vous payera, mon vieux. »"
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Faits divers et divers",
    "title": "Le pays idéal et un témoignage sur la Tisane des Shakers",
    "summary": "Réflexion sur la société et les maux physiques, cet article vante l'efficacité de la « Tisane des Shakers » contre les troubles gastriques, appuyée par le témoignage d'une habitante de la Meuse.",
    "paragraphs": [
      "Le pays le meilleur à habiter, dit un philosophe chinois, est celui où l'herbe pousse dans les cours des prisons et des hôpitaux. Certes, s'il avait indiqué où ce pays se trouve, un large flot d'émigration en aurait sans doute pris le chemin. On consentirait même à quitter la France pour un tel pays. De la part d'un Français, c'est beaucoup. En réalité, et qui ne le sait ? Les prisons et les hôpitaux existent partout, et trop de pieds franchissent leurs portes pour que l'herbe ait des chances d'y pousser.",
      "Cependant, l'augmentation du nombre de ces institutions ne prouve pas que le crime et la maladie fassent des progrès ; cela montre seulement que la société fait de son mieux pour se débarrasser de l'un et de l'autre. Or, pour utiles que soient sans contester les hôpitaux, les meilleurs agents pour la prévention et la guérison de la maladie sont ces remèdes sûrs et éprouvés dont on peut faire usage chez soi. Et le plus digne de confiance est assurément celui dont les vertus sont partout connues et dont parle encore une de nos correspondantes. Voici en substance ce qu'elle écrit :",
      "« Veuillez excuser le retard que j'ai mis à vous écrire, mais je tenais à être bien sûre de ma guérison avant de la proclamer. Comme je suis convaincue qu'elle est complète et radicale, je m'empresse maintenant de vous remercier et de vous autoriser à publier cette lettre si vous le jugez à propos. Pendant plusieurs années, j'ai souffert d'indigestions au point que la vie m'était devenue à charge. Pendant plusieurs jours de suite, je ressentais à l'estomac une douleur si vive que je ne puis la comparer qu'au rongement d'un rat. Les mots me manquent pour décrire l'horreur de cette sensation. J'ai su que cette douleur provenait de l'inflammation de la muqueuse de l'estomac, et que c'est ce qu'on appelle gastrite aiguë. »",
      "« J'avais perdu l'appétit et je ne digérais que difficilement le peu que je m'efforçais de prendre. Presque chaque fois que je revenais de la nourriture je ressentais une grande difficulté à respirer, que j'étais presque suffoquée. Il me semblait qu'une balle me remontait dans la gorge. J'avais aussi de forts accès de rhumatisme intercostal, pendant lesquels on aurait dit que l'on me brisait les reins et les côtes. Mon sommeil était si interrompu qu'il m'arrivait rarement d'avoir toute une nuit de repos. Plus d'une fois, il m'arriva d'être la proie d'affreux cauchemars dès que je m'assoupissais. Je souffrais aussi beaucoup de la constipation. Mon air maladif attira bientôt l'attention de ceux qui me connaissaient, car j'avais les traits du visage tirés et l'œil hagard, et j'étais aussi d'une maigreur extrême. »",
      "« Mon médecin me prescrivit un grand nombre de remèdes, mais aucun ne réussit à me soulager. Malgré les soins que l'on prit de moi, mon mal empirait et mon état de langueur augmentait de jour en jour. Je ne savais plus vraiment à quel saint me vouer. Bien que je n'eusse que 30 ans, j'étais faible comme une vieille femme et il m'était impossible de travailler. Mes parents étaient au désespoir de me voir tant souffrir sans pouvoir me porter secours ; quant à moi, j'étais vaincue par la douleur et le chagrin. Un jour, la Providence voulut qu'il me tombât dans les mains un petit livre à la lecture duquel je trouvai le remède qui devait finalement me guérir, la Tisane des Shakers, et qui contenait le témoignage d'autres personnes qui avaient été guéries de symptômes semblables aux miens. »",
      "« J'eus immédiatement recours à ce remède et les résultats ne se firent pas attendre. Les douleurs diminuèrent et au bout de quelques semaines, je pus manger et digérer comme avant ma maladie. Actuellement je me porte bien et je me trouve heureuse, car je n'ai jamais eu la moindre rechute. Je vous remercie encore une fois et j'espère que vous vivrez longtemps, afin de bien faire connaître votre merveilleux remède à ceux qui souffrent. » (Signé) Marie Collignon, chez son père, charron, à Olizy, canton de Stenay (Meuse), le 26 août 1897. La signature ci-dessus a été légalisée par M. Jaisson, maire d'Olizy.",
      "La Tisane des Shakers est un spécifique contre l'indigestion sous toutes ses formes et dans toutes ses phases. Chaque maison devrait avoir ce bienfaisant remède en réserve. Écrivez à M. Oscar Fanyau, pharmacien à Lille (Nord), pour recevoir franco un exemplaire du petit livre."
    ]
  }
];
