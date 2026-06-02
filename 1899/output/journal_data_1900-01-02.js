// Date: 1900-01-02
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-02 (Version Restaurée, 37 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "L'éducation populaire",
    "summary": "L'organisation de l'enseignement populaire, pilier essentiel de notre société, ne se borne pas à l'instruction ; elle façonne les citoyens de demain et demeure la véritable garante de l'avenir de la France.",
    "paragraphs": [
      "Il suffit de regarder autour de soi pour se convaincre de l'importance capitale de l'organisation de l'enseignement populaire en France et combien il est complexe de la fixer définitivement.",
      "À vrai dire, elle doit varier selon chaque période accomplie des transformations de l'esprit et des mœurs sociales. On conçoit bien qu'elle ne comprend pas simplement l'instruction, mais aussi et plus encore l'éducation des générations qui se succèdent.",
      "C'est ainsi que la France, qui ne comptait que 8 288 cours d'adolescents et d'adultes en 1895, en dénombrait davantage un an plus tard. Au total, nous avons aujourd'hui quarante mille cours consacrés à distribuer un enseignement supplémentaire et spécial aux plus âgés parmi les jeunes ainsi qu'aux adultes eux-mêmes.",
      "L'éducation populaire vient à point nommé pour arrêter une tendance funeste et promettre à la France des travailleurs, des hommes fermes, des mères de famille et des citoyens dévoués. Elle est le gage et la sauvegarde de notre avenir."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux passions",
    "summary": "Au cours d'un échange empreint de désillusion, Valentine rejette les avances de Georges Dufresne, décelant dans ses propos des clichés littéraires convenus qu'elle juge sans sincérité.",
    "paragraphs": [
      "Georges Dufresne lui offrit le bras, en disant : « Prenez-le, je vous en prie. Nous serons mieux pour causer. On nous remarquera. »",
      "Valentine continua : « Les filles comme nous n'ont plus de caprices ; c'est un luxe réservé aux riches. J'ai un avantage sur vous : si je vous connais, vous ne me connaissez pas, vous ! Je suis plus pratique que vous ne le supposez peut-être. »",
      "Valentine répliqua : « Je l'ai lu à l'Ambigu, dit-elle, des choses que j'ai déjà entendues. Je jure qu'elles ne me touchent aucunement. J'ai lu aussi des feuilletons, car je n'aime pas les histoires imaginées, et je retrouve dans ce que vous me dites des phrases que j'y ai rencontrées. »"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Les réceptions à l'Élysée",
    "summary": "Le Président Émile Loubet a reçu hier les corps constitués à l'Élysée. Le nonce apostolique a souligné le rôle de l'Exposition universelle, thème repris par le Président lors de son allocution officielle.",
    "paragraphs": [
      "Le Président de la République a reçu hier à l'Élysée, à l'occasion du premier jour de l'an, les visites officielles des corps constitués.",
      "C'est la première fois que M. Loubet, élu Président au mois de février dernier, présidait à une pareille solennité. Hier, comme les années précédentes, tout s'est déroulé sans le moindre incident, dans l'ordre accoutumé et avec le cérémonial d'usage.",
      "Au cours de la journée, M. Lorenzelli, le nonce apostolique, en sa qualité de doyen du corps diplomatique, a prononcé une allocution soulignant l'importance de l'Exposition universelle à venir.",
      "Le Président de la République a répondu en saluant l'essor du génie humain et l'idée que, désormais, la grandeur et la puissance s'acquerront surtout par l'émulation pacifique des travailleurs."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "La mission Foureau-Lamy",
    "summary": "La mission Foureau-Lamy confirme son succès dans la pénétration méthodique du Sahara, recueillant des données scientifiques cruciales pour établir une liaison durable entre l'Algérie et le Soudan.",
    "paragraphs": [
      "Nous donnions hier de bonnes nouvelles de la mission Foureau-Lamy. Nous pouvons ajouter que les résultats obtenus par cette mission sont des plus importants. C'est avec une persévérance infatigable que M. Foureau a mis à exécution son projet de pénétration méthodique du Sahara.",
      "La mission a recueilli des observations précieuses au point de vue scientifique et topographique. Elle est parvenue à déterminer la voie destinée à relier l'Algérie au Soudan."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une cantinière assassinée à Saumur",
    "summary": "Drame à l'École de cavalerie de Saumur : la veuve Saurin, cantinière sexagénaire, a été mortellement blessée par le cavalier Albert Jouquet au cours d'une agression d'une extrême violence.",
    "paragraphs": [
      "Un crime épouvantable a été commis hier soir à l'École de cavalerie de Saumur. La cantinière, Mme veuve Saurin, âgée de soixante ans, a été assassinée par un cavalier nommé Albert Jouquet.",
      "Jouquet, dissimulé dans la cantine, a surpris la malheureuse victime et l'a lardée de vingt-deux coups de tranchet. Malgré l'arrivée des secours, les médecins n'ont pu que constater l'horreur de la situation et n'ont aucun espoir de sauver la pauvre femme."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame de famille rue des Fossés-Saint-Bernard",
    "summary": "À Paris, le soldat Jean Dutour, secondé par trois complices, a sauvagement poignardé l'ancien amant de sa sœur, Simon Bouglent. La victime, agressée à deux heures du matin, est entre la vie et la mort.",
    "paragraphs": [
      "Un soldat en garnison à Nancy, Jean Dutour, s'est fait l'instrument d'une vengeance atroce après que sa sœur, Lucie Dutour, eut été abandonnée par son amant, Simon Bouglent.",
      "Jean Dutour, aidé de trois complices dont un ancien fiancé éconduit, a poignardé Simon Bouglent au seuil de son domicile vers deux heures du matin. La victime, grièvement blessée, a été transportée d'urgence à l'hôpital ; une enquête est ouverte."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Social",
    "title": "Les grèves de la Loire",
    "summary": "Le mouvement social persiste à la Ricamarie et dans les mines de Montrambert et de la Béraudière. La commission des retraites exhorte les mineurs à reprendre le travail dès le 2 janvier.",
    "paragraphs": [
      "Les grèves à la Ricamarie et dans les mines de Montrambert et de la Béraudière se poursuivent avec opiniâtreté. La commission de l'augmentation des retraites a adressé un avis formel aux grévistes préconisant une reprise du travail le 2 janvier.",
      "Les revendications portent sur une revalorisation des pensions et une meilleure administration des caisses de secours, bien que le préfet, M. Grimanelli, exprime de vives inquiétudes quant aux conséquences de cette situation sur l'ordre public."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Social",
    "title": "La grève des mineurs : situation et arbitrage",
    "summary": "La tension s'accroît dans les houillères de la Loire. Les compagnies minières opposent un refus catégorique à tout arbitrage qui ne porterait pas exclusivement sur le montant et la durée des hausses de salaires.",
    "paragraphs": [
      "Le comité local a officiellement décidé de maintenir le mouvement de grève jusqu'à ce qu'une décision arbitrale soit rendue.",
      "Le bruit se confirme de plus en plus que les compagnies rejettent tout arbitrage qui porterait sur un objet autre que le quantum et la durée de l'augmentation des salaires.",
      "La Société des mines de la Loire a fait parvenir au préfet une note signifiant son refus catégorique de déroger à cette ligne de conduite.",
      "Les autres compagnies minières demeurent, pour la majeure partie, hostiles au principe même de l'arbitrage concernant la remonte des ouvriers."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Social",
    "title": "Réunion des grévistes au Prado",
    "summary": "M. Jaurès a rejoint un cortège de quatre mille grévistes au Prado. Dans une salle comble, il a exhorté les mineurs à la conciliation, tout en les encourageant à maintenir leur résolution dans la lutte.",
    "paragraphs": [
      "M. Jaurès est venu, sur l'invitation expresse du comité fédéral, se joindre au cortège. Une colonne imposante de quatre mille grévistes s'est mise en marche pour le rejoindre.",
      "M. Jaurès et ses collaborateurs ont dû pénétrer dans les lieux par une porte dérobée. La salle de réunion fut immédiatement envahie par la foule des mineurs.",
      "M. Jaurès a pris la parole pour remplir son rôle d'arbitre, appelant les mineurs à la conciliation tout en les engageant vivement à persévérer dans leur lutte syndicale."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Social",
    "title": "Le refus des compagnies et la réponse des mineurs",
    "summary": "Les directeurs de compagnies ont opposé une fin de non-recevoir au préfet Grimanelli concernant l'arbitrage. Les mineurs maintiennent le lien indissociable entre les salaires et la durée du travail.",
    "paragraphs": [
      "Les directeurs de compagnies ont remis à M. Grimanelli une lettre stipulant qu'ils regrettent de ne pouvoir soumettre à l'arbitrage la question d'une augmentation temporaire des salaires.",
      "En réponse, les mineurs ont adressé au préfet un courrier affirmant que la question du règlement des salaires est intrinsèquement liée à celle de la durée du travail, rendant impossible une scission des revendications."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Social",
    "title": "Les Aciéries de la Marine",
    "summary": "À Saint-Chamond, la pénurie de houille contraint les Aciéries de la Marine à importer du charbon anglais à prix fort. La compagnie compense partiellement ses ouvriers par une indemnité journalière.",
    "paragraphs": [
      "À Saint-Chamond, le chômage continue de sévir dans plusieurs importantes usines de la région.",
      "Les Aciéries de la Marine, ne pouvant recevoir la quantité de houille nécessaire à leur fonctionnement, ont dû en commander en Angleterre à un prix très élevé.",
      "La compagnie accorde, par mesure de bienveillance, une indemnité journalière d'un franc aux ouvriers suspendus."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Social",
    "title": "Les Tisserands",
    "summary": "Le comité du salaire exige des fabricants la suppression des abus liés à la « mise en train ». Une manifestation de grande envergure est prévue pour demain afin de soutenir ces revendications ouvrières.",
    "paragraphs": [
      "Le comité du salaire a fait parvenir aux fabricants une longue lettre relative à la suppression de la mise en train et à la cessation de divers abus pesant sur la profession.",
      "Une grande manifestation de soutien est formellement organisée pour la journée de demain."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Situation au Transvaal",
    "summary": "La situation militaire reste stationnaire en Afrique du Sud. Malgré quelques engagements favorables aux Britanniques, les corps d'armée commandés par les généraux Methuen et French demeurent dans une position délicate.",
    "paragraphs": [
      "Aucun changement notable ne s'est produit dans la situation des deux armées en présence dans l'Afrique du Sud.",
      "Si les troupes anglaises semblent avoir remporté quelques succès tactiques, les corps d'armée des généraux Methuen et French se trouvent encore dans une position critique."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Victoire anglaise à Colesberg",
    "summary": "Le général French a remporté une victoire décisive sur les Boërs, leur infligeant une défaite complète et occupant Colesberg, ce qui a contraint les forces adverses à une retraite précipitée vers l'est.",
    "paragraphs": [
      "Le général French a infligé une défaite complète aux forces boërs et a procédé à l'occupation de la localité de Colesberg.",
      "Les Boërs, surpris par la manœuvre et voyant leurs lignes de retraite menacées, se sont enfuis en désordre vers l'est du territoire."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Combats autour de Colenso et à Ladysmith",
    "summary": "Deux offensives nocturnes contre Colenso ont été repoussées. À Ladysmith, le pilonnage boër s'intensifie, causant de lourdes pertes au sein du mess des officiers, frappé par un obus meurtrier.",
    "paragraphs": [
      "Deux attaques de nuit ont été tentées sans succès par les troupes britanniques sur les positions boërs de Colenso.",
      "À Ladysmith, les Boërs bombardent activement la ville. Un obus tombé directement sur le mess des officiers a causé la mort d'un capitaine et blessé huit lieutenants."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "À Prétoria",
    "summary": "Le gouvernement du Transvaal accepte le renfort de volontaires ambulanciers internationaux, dont des Français, tandis que le financement de la guerre repose désormais sur une taxation accrue de l'industrie minière.",
    "paragraphs": [
      "Le gouvernement du Transvaal a formellement accepté les services de divers volontaires ambulanciers, parmi lesquels figurent plusieurs citoyens de nationalité française, italienne et grecque venus prêter main-forte aux blessés.",
      "Afin de pourvoir aux charges considérables entraînées par le conflit, les autorités ont décidé de frapper l'industrie minière de nouveaux impôts, destinés à couvrir les frais courants de la guerre."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Informations Politiques",
    "title": "Résultat de l'élection de Tournon",
    "summary": "Au terme du scrutin législatif tenu à Tournon, M. de Gailhard-Bancel remporte la victoire sur son concurrent M. Seignobos, totalisant 9 460 suffrages contre 8 940.",
    "paragraphs": [
      "Le dépouillement du scrutin législatif de Tournon est désormais complet. M. de Gailhard-Bancel a été élu par 9 460 voix, tandis que son concurrent, M. Seignobos, en a obtenu 8 940."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Informations Politiques",
    "title": "Mouvement préfectoral",
    "summary": "Le Journal officiel de ce jour publie un remaniement administratif d'envergure, officialisant la nomination de nouveaux préfets et sous-préfets sur l'ensemble du territoire national.",
    "paragraphs": [
      "Le Journal officiel publie ce matin un vaste mouvement administratif procédant à la nomination de nouveaux préfets et sous-préfets, répartis à travers plusieurs départements du pays."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Justice",
    "title": "La Haute Cour : Quarante-troisième audience",
    "summary": "Lors de la quarante-troisième audience de la Haute Cour, M. Guérin persiste à nier toute complicité, tandis que son défenseur, M. Ménard, requiert l'acquittement, arguant de l'insuffisance flagrante des preuves.",
    "paragraphs": [
      "M. Guérin a poursuivi son plaidoyer devant la Haute Cour, niant avec fermeté tout lien concerté avec les autres accusés et affirmant n'avoir jamais cessé de prêcher la conciliation.",
      "Son avocat, M. Ménard, a ensuite pris la parole pour solliciter l'acquittement de son client, soulignant avec insistance l'absence totale de preuves sérieuses dans le dossier concernant les chefs d'accusation portés contre lui."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Chiens de police en Belgique",
    "summary": "L'expérience menée par la police gantoise, utilisant des chiens comme auxiliaires, s'avère concluante avec une réduction significative de la criminalité nocturne après une année d'essai.",
    "paragraphs": [
      "Le commissaire de la police gantoise a instauré une expérience inédite consistant à employer des chiens comme auxiliaires pour les patrouilles de surveillance.",
      "Après une année d'essai, les résultats sont probants : on constate une diminution notable des vols et des agressions constatées durant les rondes nocturnes."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Histoire",
    "title": "Chiens gardiens de ville au Moyen Âge",
    "summary": "M. Siméon Luce, de l'Institut, relate l'histoire des chiens de garde à Saint-Michel sous Louis XI, où une rente royale assurait la surveillance nocturne des remparts et des alentours de la cité médiévale.",
    "paragraphs": [
      "Le Petit Parisien revient sur une intéressante étude de M. Siméon Luce, de l'Institut, concernant les chiens chargés de garder les villes, notamment à Saint-Michel sous Louis XI. Ce dernier, sur demande du gouverneur, avait institué une rente pour l'entretien de chiens destinés à surveiller les alentours de la ville pendant la nuit.",
      "Le récit rappelle que cet usage ne date pas d'hier, comme le prouve un mandement royal d'époque, et cite des témoignages ultérieurs, comme ceux de Camille Desmoulins sur la ville de Saint-Malo, où les chiens assuraient une protection constante, bien que parfois dangereuse pour les passants distraits."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Expérimentations canines modernes",
    "summary": "Si les chiens sauveteurs échouèrent à Paris sur la Seine, l'expérience tentée à Gand prouve l'utilité d'un dressage rigoureux : les chiens y sont désormais d'efficaces auxiliaires de police.",
    "paragraphs": [
      "Si l'usage des chiens comme gardiens est ancien, il n'est pas sans danger, comme l'a montré l'échec d'un projet de chiens sauveteurs sur les bords de la Seine à Paris, les animaux s'attaquant aux passants.",
      "À Gand, cependant, une expérience organisée semble porter ses fruits : les chiens y reçoivent un entraînement complet, incluant la natation, l'obéissance et le secours aux noyés, pour un coût modique, faisant d'eux des auxiliaires réguliers de la police que la ville ne regrette pas."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Social",
    "title": "Projet de gare sur la ligne de Ceinture",
    "summary": "La Ville de Paris et l'État étudient la création d'une gare porte de Charenton et d'une halte au pont National pour desservir les quartiers Bel-Air et Picpus en vue de l'Exposition de 1900.",
    "paragraphs": [
      "Les habitants des quartiers du Bel-Air et de Picpus vont voir leurs espoirs se concrétiser. Des négociations sont en cours entre la Ville de Paris et l'État pour l'établissement d'une gare sur le chemin de fer de Ceinture à la porte de Charenton, ainsi qu'une halte au pont National.",
      "Ce projet est motivé par l'importance stratégique de la rue de Charenton, la proximité du bureau de recrutement de la Seine, et la future desserte de l'Exposition de 1900 au bois de Vincennes. La Ville de Paris et la commune de Charenton sont prêtes à participer au financement des travaux."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Actualités",
    "title": "Restauration du monument Desaix",
    "summary": "Le monument du général Desaix, actuellement entreposé à Auteuil, sera prochainement restauré et réinstallé sur la place Dauphine, retrouvant ainsi un cadre historique digne de sa mémoire.",
    "paragraphs": [
      "Le monument de Desaix, héros de la bataille de Marengo, situé actuellement dans un magasin municipal à Auteuil, pourrait bientôt retrouver sa place initiale sur la place Dauphine.",
      "L'administration, suivant les conseils de la commission du Vieux Paris, envisage de restaurer ce buste et cette fontaine, autrefois en piteux état, pour les installer sur le terre-plein de la place Dauphine, emplacement qui présente une configuration géographique similaire à celle d'un autre monument dédié au général."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Affaire de fraudes sur les sucres",
    "summary": "La cour d'assises de la Charente-Inférieure juge une vaste affaire de fraude impliquant des fonctionnaires et des commerçants ayant détourné des centaines de documents pour léser le Trésor public.",
    "paragraphs": [
      "La cour d'assises de la Charente-Inférieure juge actuellement une affaire de fraudes sur les sucres impliquant quatre accusés, dont des fonctionnaires des contributions indirectes et des commerçants.",
      "Le préjudice causé à l'État est important, avec environ quatre cents faux documents comptabilisés pour le seul mois d'octobre 1897. Les accusés auraient utilisé des acquits fictifs pour réaliser des bénéfices illicites. Les débats devraient se conclure samedi prochain."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Chronique",
    "title": "Variations sur la durée des jours",
    "summary": "Au lendemain du solstice d'hiver, la durée de l'ensoleillement varie considérablement selon la latitude, passant de 15 heures à Rome à une absence totale de crépuscule dans les contrées boréales.",
    "paragraphs": [
      "Après avoir franchi le solstice d'hiver, les jours rallongent désormais jusqu'au 21 juin. Une étude étrangère apporte des précisions sur la durée du jour selon la latitude.",
      "Alors qu'à Rome le jour le plus long est de 15 heures, à Saint-Pétersbourg il atteint 19 heures. Dans des régions plus septentrionales comme en Norvège, le soleil ne se couche tout simplement pas pendant près de deux mois."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Actualités",
    "title": "Le progrès du féminisme sportif",
    "summary": "L'escrime féminine gagne en popularité grâce à la virtuosité technique de figures telles que Miss Hutton, Miss Lowther et la redoutable Miss Jaguarina, qui défient les préjugés sportifs de l'époque.",
    "paragraphs": [
      "Les femmes se lancent désormais avec brio dans les sports athlétiques, autrefois réservés aux hommes. C'est le cas de l'escrime, où trois jeunes femmes brillent par leurs exploits.",
      "Miss Hutton, Miss Lowther et Miss Jaguarina, cette dernière spécialiste du sabre, impressionnent les foules et les experts par leur maîtrise technique, la légende voulant que Miss Jaguarina n'ait jamais trouvé son maître dans cette discipline."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame du double suicide",
    "summary": "Un tragique double suicide a endeuillé le passage Ganneron. Louis Sylvaire et sa fiancée, Mademoiselle Espiouze, ont mis fin à leurs jours par asphyxie, accablés par une précarité financière sans issue.",
    "paragraphs": [
      "Un triste drame s'est noué passage Ganneron. Louis Sylvaire, plombier, et sa fiancée, Mademoiselle Espiouze, couturière, ont été retrouvés morts, asphyxiés par un réchaud.",
      "La lettre laissée sur place révèle que le jeune homme, inquiet de ne pouvoir subvenir aux besoins du futur ménage, avait résolu de mourir. La jeune fille, partageant ses craintes, a choisi de se donner la mort à ses côtés."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression rue Julien-Lacroix",
    "summary": "Une querelle familiale a viré au drame rue Julien-Lacroix : M. Louis Judet a été grièvement blessé par son petit-fils, qui a ensuite retourné son arme contre lui. Les deux hommes sont dans un état inquiétant.",
    "paragraphs": [
      "Un rentier de soixante-neuf ans, M. Louis Judet, a été grièvement blessé par son petit-fils, Jules Langlat, lors d'une violente discussion au sujet de la conduite oisive de ce dernier.",
      "Le jeune homme a fait feu à deux reprises sur son grand-père avant de tenter de se suicider en se tirant une balle dans l'oreille. Les deux blessés ont été transportés à l'hôpital Tenon dans un état grave."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vengeance sanglante rue Charlemagne",
    "summary": "Une agression armée a semé l'effroi rue Charlemagne : Jean Granier a fait feu sur le fils d'une débitante de vins et un client. Les victimes sont hospitalisées et l'agresseur est activement recherché par la police.",
    "paragraphs": [
      "Un homme, identifié comme Jean Granier, ouvrier maçon, s'est présenté hier dans un débit de vins pour tirer sur le fils de la propriétaire, le jeune Louis Crozatier.",
      "L'agresseur a également blessé un client avant de prendre la fuite. Les deux victimes ont été transportées à l'Hôtel-Dieu. Jean Granier est activement recherché par les autorités."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Démantèlement d'une bande de voleurs à la gare de Lyon",
    "summary": "À la gare de Lyon, le vol prend fin pour la bande de Charles Dupret : identifié par sa victime portant ses propres effets dérobés, le chef est arrêté, menant ainsi à la capture de ses trois complices.",
    "paragraphs": [
      "Le chef d'une bande de voleurs, Charles Dupret, a été arrêté grâce à la vigilance d'une de ses victimes, M. de M., qui a reconnu ses propres vêtements volés portés par le malfaiteur.",
      "L'individu, après avoir tenté de nier son identité, a fini par désigner trois de ses complices, qui ont également été arrêtés dans la matinée."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Social",
    "title": "Grève des mineurs à Montceau-les-Mines",
    "summary": "Malgré une revalorisation salariale, les mineurs de Montceau-les-Mines votent la grève générale pour jeudi, exigeant l'annulation des sanctions disciplinaires liées au dernier mouvement social.",
    "paragraphs": [
      "Le syndicat des mineurs de Montceau-les-Mines a voté la grève générale pour jeudi prochain. Les revendications portent sur le retrait des sanctions disciplinaires prises après la précédente grève et une augmentation de salaire.",
      "La direction de la Compagnie des mines de Blansy a fait savoir qu'elle ne pouvait céder sur les questions de discipline, bien qu'elle ait déjà accordé une augmentation de salaire de 5 % fin décembre."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Actualités locales",
    "title": "Accidents divers autour de Paris",
    "summary": "La banlieue parisienne est frappée par une série de drames : accidents de la route, effondrements de toitures et suicides marquent tragiquement la fin de cette année 1899.",
    "paragraphs": [
      "Plusieurs accidents tragiques ont marqué la banlieue parisienne : un accident de cheval à Clichy a causé de graves blessures à un maraîcher et à une fillette, tandis qu'à Asnières, l'effondrement d'une toiture lors d'un orage a semé la panique dans une salle de bal.",
      "D'autres faits tragiques, notamment des suicides par asphyxie ou par arme à feu, ont été constatés à Colombes et Saint-Ouen, témoignant d'une fin d'année particulièrement douloureuse pour certaines familles."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Chronique",
    "title": "Les Phobies",
    "summary": "Une étude historique des phobies, de la peur des chats chez lord Roberts aux singularités névropathiques des grands hommes, démontrant que même les plus illustres guerriers n'échappent pas à ces étranges faiblesses.",
    "paragraphs": [
      "Les hommes de guerre n'échappent pas plus que les autres à ces faiblesses du système nerveux que la science moderne appelle des phobies. On cite à ce sujet l'étrange sentiment de peur auquel est accessible lord Roberts, le généralissime des troupes anglaises dans l'Afrique australe, lorsqu'il se trouve en présence d'un chat. Impassible sous les balles, il a donné l'exemple du plus grand sang-froid en de nombreuses batailles livrées aux Hindous révoltés.",
      "Son tempérament dans les combats ne semble connaître aucune défaillance. Cependant, il suffit de l'apparition d'un félin pour qu'une gêne indéfinissable se fasse remarquer aussitôt dans l'attitude du général. Les officiers de son état-major le virent un jour, devant Caboul, trembler d'anxiété parce qu'un chat s'était montré près du lieu qu'il occupait. Une autre fois, il faillit s'évanouir en pareille occurrence. Ce que ressent lord Roberts est tel en ces rencontres qu'il s'éloigne pour ne pas la subir.",
      "Le cas de lord Roberts rappelle exactement celui d'Henri III, le roi des mignons, qui ne pouvait rester seul dans une chambre où il y avait un chat. Le maréchal de Schomberg, gouverneur du Languedoc, avait la même horreur des chats. Un contemporain de ces personnages, le cardinal de Lorraine, racontait qu'étant dans le Tyrol, l'empereur Ferdinand lui fit voir un gentilhomme allemand qui avait tant peur des chats qu'il saignait du nez à les entendre miauler de loin.",
      "En cherchant bien dans les recueils d'historiettes, on pourrait citer d'autres hommes de guerre frappés par cette bizarre faiblesse. On voit que le généralissime anglais figure en bonne compagnie dans cette galerie de névropathes.",
      "D'autres exemples historiques abondent : au temps de Mazarin, le maréchal d'Albret se trouvait mal dans un repas où l'on servait un marcassin. Le maréchal de Brézé s'évanouissait en voyant un lapin. Uladislas, roi de Pologne, prenait la fuite devant des pommes. Caraccioli, grand sénéchal de la cour de Naples, avait une peur effroyable des souris. M. de Lancre, conseiller au Parlement de Bordeaux, affirme qu'il connut un honnête homme si effrayé par la rencontre d'un hérisson qu'il s'imagina pendant deux ans avoir les entrailles dévorées par cet animal.",
      "On citait encore au dernier siècle le gouverneur d'une ville frontière qui tombait en convulsion lorsqu'il voyait des œufs de carpe. M. Vonungheim, grand veneur du Hanovre, s'enfuyait devant un rôti de porc. Marie de Médicis ne pouvait souffrir la rose, et Jacques Ier, roi d'Angleterre, tremblait à la vue d'une épée.",
      "Les phobies devaient naturellement avoir leur siège d'élection dans les cervelles des savants. Scaliger frémissait en voyant du cresson. Son fils Joseph avait horreur du lait. Cardan ne pouvait voir des œufs sans effroi. Érasme ne pouvait sentir le poisson sans avoir la fièvre. Tycho-Brahe sentait ses jambes défaillir à la rencontre d'un lièvre ou d'un renard. Bayle avait des convulsions lorsqu'il entendait le bruit que fait l'eau en sortant d'un robinet.",
      "Bien entendu, ces phobies se retrouvent dans notre société actuelle. Au théâtre, Mme Favart se trouvait mal dans une chambre où l'on avait allumé trois bougies. Mme Desclée s'évanouissait à la vue d'un levraut. Frédérick Lemaître remettait sa besogne au lendemain par crainte du mauvais sort. Théophile Gautier avait en horreur Offenbach, regardé par beaucoup comme jettatore, et ne voulait jamais écrire son nom sans découper les lettres dans un journal.",
      "C'est encore la vue d'une araignée, d'un corbeau ou de chevaux d'une certaine couleur qui nous effraie. Elzéar Blaze mentionne dans sa Vie militaire sous l'Empire le cas d'un officier qui, malgré trente ans de service, pâlissait à l'aspect d'une épée. C'est un fait unique dans une armée qui était l'école des braves. La plupart des hommes de guerre sont fétichistes. Nul même ne le fut plus que Napoléon Ier."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Actualité Internationale",
    "title": "La Belgique Commerciale",
    "summary": "Avec un volume d'échanges atteignant 3,3 milliards de francs en 1898, la Belgique confirme sa vitalité économique et le renforcement croissant de ses relations commerciales avec l'Allemagne.",
    "paragraphs": [
      "Le gouvernement belge vient de publier la statistique la plus complète sur le commerce général de ce pays. On verra que, pour être petite par son territoire, la Belgique est grande par l'activité économique de sa population. C'est ainsi que le commerce général s'est élevé, importations et exportations ensemble, à 3 milliards 298 millions de francs en 1898. L'augmentation sur l'année précédente a été de 371 millions environ.",
      "La plupart de ces articles, jusqu'à concurrence de 80 %, sont livrés à l'Europe, le reste est répandu dans les contrées d'Amérique, d'Asie et d'Afrique. La France vendait autrefois à la Belgique beaucoup plus de marchandises qu'elle n'en recevait ; il n'en est plus de même aujourd'hui.",
      "Ce qui frappe le plus l'observateur, c'est le développement anormal qu'ont pris en Belgique les importations de marchandises allemandes. D'un autre côté, la Belgique déverse sur le marché germanique 451 millions de ses produits. Ces chiffres montrent combien les échanges sont actifs et croissants entre la Belgique et l'Allemagne."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Revue Commerciale",
    "title": "Grains et Farines",
    "summary": "Le dégel actuel laisse craindre un retour du froid pour les blés semés. Sur le marché, les transactions de farines restent actives, bien que la tendance soit devenue plus lourde à la clôture de la semaine.",
    "paragraphs": [
      "Le dégel qui s'est produit depuis huit jours n'est pas complet et l'on peut s'attendre à un retour offensif du froid. Jusqu'à présent, les premiers blés semés n'ont pas encore souffert. Les perspectives de récolte sont toujours favorables, mais si de nouveaux froids surviennent, des plaintes pourraient se faire entendre. C'est pourquoi on désirerait de la neige pour protéger les blés.",
      "Sur notre place, les farines de commerce ont connu des affaires assez actives et les prix ont été très fermement tenus pendant la semaine ; mais hier, à la clôture, la tendance était lourde. Il est évident que si la récolte paraissait compromise, les cours monteraient rapidement."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Tragédies de l'Amour - XII (suite)",
    "summary": "Des malfaiteurs s'introduisent chez Girodias et découvrent son cadavre. Ils profitent de l'occasion pour dérober une forte somme d'argent et détruire des documents compromettants concernant le duc de Villefort.",
    "paragraphs": [
      "La belle Isabelle leur apprit que Girodias lui-même allait venir à Clisson. Ils se décidèrent à tenter l'aventure le soir venu. La belle Isabelle les accompagna pour faire le guet. Ils redoutaient peu les domestiques, car le père Girodias avait permis qu'ils ne reviennent que très tard.",
      "Ils s'introduisirent dans la maison sans encombre. Cherchant l'argenterie, ils furent déçus par la pauvreté des objets trouvés. Ils cherchèrent alors le coffre-fort et arrivèrent devant la porte du cabinet de Girodias. Ils ouvrirent et reculèrent soudain en retenant un cri d'effroi. Un homme était là qui dormait, la tête appuyée sur un bureau. « Mais il est mort », dit Gabarit en voyant le poignard dans le dos de Girodias.",
      "Les deux vauriens eurent une minute de terreur, mais soudain le regard de Lahache parut hypnotisé par les papiers éparpillés sur le bureau : les liasses de billets de mille francs que la duchesse avait apportées. « Il y a un compère qui a eu la même idée que nous et qui nous a précédés », murmura Gabarit en mettant son doigt dans le sang encore chaud. Ils raflèrent les quatre cent vingt mille francs et déguerpirent.",
      "Plus tard, ils enterrèrent le magot sous un chêne. Cette histoire, les Villefort et le marquis l'avaient écoutée avec angoisse. L'éternelle question se posait encore : qui avait tué ? Il y avait sur le bureau de Girodias beaucoup de papiers. Parmi ces papiers se trouvaient des créances sur le duc de Villefort, se montant à cette même somme de quatre cent vingt mille francs. Lahache et Gabarit les avaient brûlées.",
      "La belle Isabelle partit en déclarant que, si les coupables sont à Olivet, elle finirait par les dénoncer si elle n'était pas protégée."
    ]
  }
];
