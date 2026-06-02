// Date: 1899-12-03
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-12-03 (Version Restaurée, 35 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique",
    "title": "Projet de réforme militaire : limites d'âge et avancement des officiers",
    "summary": "Le général de Galliffet, ministre de la Guerre, propose une réforme pour rajeunir les cadres de l'armée en modifiant le système des retraites et les règles d'avancement des officiers supérieurs.",
    "paragraphs": [
      "Le ministre de la Guerre, le général de Galliffet, a déposé un projet de loi relatif aux limites d'âge et à l'avancement des officiers. L'objectif avoué est de rajeunir les cadres de l'armée en facilitant la mise à la retraite des officiers plus tôt que par le passé et en supprimant le système d'avancement à l'ancienneté pour les officiers supérieurs.",
      "Si ce projet entraîne mécaniquement une hausse des dépenses de retraite, le ministre estime qu'une phase d'observation est nécessaire pour mesurer les conséquences réelles de cette réforme. Deux projets complémentaires sont par ailleurs à l'étude : le relèvement de la solde des officiers subalternes et l'institution de retraites proportionnelles.",
      "Ce système de retraites proportionnelles permettrait aux officiers de quitter l'armée plus tôt, tout en percevant une fraction de leur pension, tout en restant mobilisables en cas de conflit, suivant en cela le modèle en vigueur en Allemagne."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions - Roman inédit de Charles Mérouvel",
    "summary": "Dans le bocage normand, le marquis Robert d'Angeville et son fils Jacques gèrent leurs vastes terres sous le regard attentif des fermiers du domaine.",
    "paragraphs": [
      "Le récit prend place dans le bocage normand, sur les terres seigneuriales des marquis d'Angeville-Montfort. Le marquis Robert d'Angeville, âgé de soixante-sept ans, vit retiré en son château avec son fils Jacques, jeune lieutenant de chasseurs.",
      "Par une matinée limpide de juin, le vieux fermier Cordier et le locataire d'un moulin voisin devisent devant la grille du parc. Leurs échanges portent sur l'opulence de la maison d'Angeville, la gestion rigoureuse de leurs terres et le caractère altier du comte Jacques."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Informations Politiques",
    "title": "Constructions navales, Affichage électoral et Câbles télégraphiques",
    "summary": "La commission du budget limite les dépenses navales, tandis que le Parlement débat de la régulation de l'affichage électoral et du développement des réseaux télégraphiques coloniaux.",
    "paragraphs": [
      "La commission du budget, sur le rapport de M. de La Porte, a décidé de limiter les crédits accordés aux nouvelles constructions navales pour privilégier l'achèvement des bâtiments déjà en chantier, en ne finançant qu'un seul nouveau croiseur au lieu des trois prévus initialement.",
      "Par ailleurs, la commission du suffrage universel examine activement la proposition de M. Chassaing visant à restreindre l'affichage électoral sauvage dans toutes les communes de plus de 5 000 habitants.",
      "Enfin, le ministre du Commerce a réuni la commission supérieure des câbles afin d'élaborer un projet de loi destiné à relier plus efficacement les colonies françaises à la métropole par un réseau de liaisons télégraphiques sous-marines."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "International",
    "title": "Réponse de Lord Rosebery aux déclarations de M. Chamberlain",
    "summary": "À Édimbourg, Lord Rosebery appelle à la retenue diplomatique face aux attaques contre la Couronne, prônant la primauté des intérêts nationaux sur les émotions passagères.",
    "paragraphs": [
      "Lord Rosebery a prononcé un discours remarqué à Édimbourg afin de répondre aux récentes déclarations de M. Chamberlain. Il a jugé que les attaques dirigées contre la reine et la nation britannique ne sauraient susciter qu'une irritation passagère chez les hommes d'État responsables.",
      "Il souligne avec force que les diplomates se doivent de conserver leur sang-froid et de ne jamais perdre de vue la primauté des intérêts nationaux sur les émotions du moment."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame conjugal à Caen",
    "summary": "Un drame passionnel a eu lieu rue Capunière à Caen : un homme a ouvert le feu sur son épouse surprise en adultère avant d'être appréhendé par le commissaire local.",
    "paragraphs": [
      "Un individu nommé Malherbe a fait feu à six reprises sur son épouse dans un hôtel de la rue Capunière, à Caen, après l'avoir surprise en flagrant délit d'adultère.",
      "La victime, gravement blessée par plusieurs projectiles, a été transportée en urgence à l'Hôtel-Dieu dans un état jugé inquiétant. Le meurtrier a été promptement désarmé par le commissaire Piquette, qui se trouvait sur les lieux pour constater les faits."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Arrestation de la bande du Grand Caïman",
    "summary": "La police a démantelé dans le bois de Boulogne un groupe de malfaiteurs dirigé par le forçat évadé Laurent-Eugène Bory. Trois membres ont été capturés après une lutte acharnée avec les agents de la Sûreté.",
    "paragraphs": [
      "La police a démantelé, dans le bois de Boulogne, un dangereux groupe de malfaiteurs dirigé par un forçat évadé de Guyane, Laurent-Eugène Bory.",
      "La bande terrorisait les promeneurs en se faisant passer pour des agents de la Sûreté. Trois des membres ont été capturés après une lutte acharnée, et Bory a révélé son passé de criminel évadé lors de son interrogatoire."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Politique",
    "title": "Convocation du Sénat",
    "summary": "M. Fallières, président du Sénat, a convoqué l'assemblée législative pour lundi prochain. L'ordre du jour sera consacré à l'examen du budget, actuellement en discussion devant la Chambre des députés.",
    "paragraphs": [
      "M. Fallières a convoqué le Sénat en assemblée législative pour lundi prochain, afin d'examiner le budget, actuellement en discussion à la Chambre des députés."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Incendies en Belgique",
    "summary": "De violents incendies ont ravagé une filature à Verviers et la biscuiterie Vanderkelen à Louvain, engendrant des dommages considérables et laissant plus d'une centaine d'ouvriers sans emploi.",
    "paragraphs": [
      "Un incendie majeur a détruit une filature à Verviers, causant des dégâts estimés à plusieurs millions de francs et menaçant un hospice de vieillards voisin.",
      "À Louvain, la boulangerie et biscuiterie Vanderkelen a été entièrement ravagée par un feu d'origine électrique. Le personnel de 107 ouvriers se retrouve au chômage."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Arrestation du criminel Jean Mérilhou",
    "summary": "Jean Mérilhou, auteur de trois crimes aux environs d'Excideuil, a été appréhendé par la gendarmerie après une brève tentative de fuite. Il est désormais incarcéré à la prison de Périgueux.",
    "paragraphs": [
      "Jean Mérilhou, auteur de trois crimes récents aux environs d'Excideuil, a été appréhendé par la gendarmerie après une lutte lors d'une tentative de fuite.",
      "Le parquet de Périgueux a procédé aux confrontations nécessaires. Le coupable, ancien domestique, a été incarcéré à Périgueux."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "International",
    "title": "Situation de la guerre en Afrique du Sud",
    "summary": "Le War Office communique sur l'état des troupes en Afrique du Sud. Tandis que le général French poursuit ses reconnaissances, Lord Methuen consolide ses positions près de la Modder-River.",
    "paragraphs": [
      "Le War Office a communiqué des informations sur les mouvements militaires en Afrique du Sud. Le général Gatacre note que la situation reste stable après une reconnaissance du général French.",
      "Lord Methuen, légèrement blessé, est immobilisé près de la Modder-River, où il doit reconstruire un pont tout en attendant des renforts en cavalerie et artillerie."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "La situation militaire en Afrique du Sud",
    "summary": "À Londres, le 2 décembre, les dépêches confirment la destruction des ponts de Colenso et l'occupation des lignes de chemin de fer par les troupes boers, rendant les réparations du pont de Frère nécessaires.",
    "paragraphs": [
      "Les préparatifs sont terminés pour la réparation du pont de Frère, qui a été scientifiquement et complètement détruit. Le pont du chemin de fer de Colenso est également détruit, tandis que l'autre pont de Colenso serait encore intact.",
      "Londres, 2 décembre : On télégraphie du camp de Frère au Daily Chronicle, à la date du 28 novembre, que les Boers sont en possession des chemins de fer et des ponts de Colenso."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Renforts et mesures en Afrique du Sud",
    "summary": "Le gouvernement britannique prépare l'envoi de la 6e division en Afrique du Sud. Des projets de levée de troupes et la formation d'une garde nationale sont envisagés pour pallier les besoins militaires en colonie.",
    "paragraphs": [
      "Londres, 2 décembre : Une dépêche du Cap au Daily Telegraph annonce que les Anglais de la colonie se réjouissent de la décision prise par le gouvernement d'envoyer la 6e division dans le sud de l'Afrique.",
      "Le même journal conseille d'appeler sous les armes trente mille hommes destinés à remplir les vides occasionnés par la guerre.",
      "Plusieurs journaux traitent du projet de former une sorte de garde nationale, qui servirait de réserve pour les volontaires et constituerait la dernière ressource en cas d'invasion.",
      "Las-Palmas (Canaries), 1er décembre : On attend six transports chargés de troupes destinés à l'Afrique du Sud."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Justice",
    "title": "Vingtième audience de la Haute Cour",
    "summary": "La vingtième audience de la Haute Cour est marquée par de vifs incidents. M. Buffet est exclu pour huit séances après un tumulte, et M. Guérin voit ses demandes de délai rejetées par la Cour.",
    "paragraphs": [
      "L'audience est ouverte à une heure vingt-cinq. M. Gouin, sénateur, ne répond pas à l'appel de son nom.",
      "M. le Président nomme M. Thiéblin comme conseil d'office pour M. Guérin. M. Thiéblin accepte sous réserve, tandis que M. Guérin proteste et demande un sursis aux débats.",
      "Un tumulte éclate dans la salle. M. Buffet s'emporte contre l'accusation, ce qui mène aux réquisitions de M. le procureur et à l'exclusion temporaire de M. Buffet par la Haute Cour.",
      "M. Guérin refuse de sortir, obligeant les gardes à faire évacuer la salle de force. L'audience publique est suspendue.",
      "Après délibération en chambre du conseil, la Cour décide l'exclusion de M. Buffet pour huit audiences consécutives.",
      "À la reprise, M. Guérin dépose de nouvelles conclusions pour obtenir un délai afin de constituer de nouveaux avocats. La Cour rejette ses conclusions après une nouvelle délibération."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Justice",
    "title": "Audition des témoins à la Haute Cour",
    "summary": "Lors de la suite des débats, les témoins défilent à la barre. M. Michel rapporte les propos tenus par M. Déroulède, version vigoureusement contestée par le général Roget devant la Haute Cour.",
    "paragraphs": [
      "L'audition des témoins reprend. M. Roussel, sourd, peine à répondre. M. Marc, ouvrier mécanicien, rapporte des propos tenus par M. Déroulède au lendemain des obsèques du Président Félix Faure.",
      "M. Michel, planton à la caserne de Reuilly, témoigne des propos de M. Déroulède envers le général Roget. Le général Roget conteste cette version, affirmant que M. Déroulède n'a tenu aucun langage séditieux.",
      "M. Barillier, avocat, intervient pour contester le témoignage de M. Michel et clamer son soutien à l'armée."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Mariage des officiers de réserve",
    "summary": "Le ministère précise les conditions de mariage des officiers de réserve : la preuve de la dot réglementaire reste exigée, sauf pour les officiers effectuant seulement une année de service actif.",
    "paragraphs": [
      "Les officiers de l'armée active qui veulent contracter mariage doivent fournir la preuve que leur fiancée apporte la dot réglementaire.",
      "Le ministre saisi de la question a répondu par la négative concernant les officiers accomplissant seulement une année de service actif, comme les élèves de l'École centrale et ceux de l'École forestière."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Social",
    "title": "Le Congrès socialiste",
    "summary": "Ouverture du congrès général des organisations socialistes au gymnase Voltaire. Durant cinq jours, les délégués débattront de l'entrée de M. Millerand au gouvernement et de l'unification du socialisme français.",
    "paragraphs": [
      "Le congrès général des organisations socialistes s'est ouvert au gymnase Voltaire pour une session prévue de cinq jours.",
      "Ce congrès a pour mission de trancher les questions délicates soulevées par l'entrée de M. Millerand dans le ministère, ainsi que d'étudier les voies de l'unification du socialisme français. Les débats porteront notamment sur la définition de la lutte des classes, les modalités de la conquête des pouvoirs publics et la place du socialisme au sein des luttes politiques actuelles."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "La mort du khalifat et débats diplomatiques",
    "summary": "Des nouvelles du Soudan confirment la mort du khalifat au combat. Parallèlement, les discours de MM. Chamberlain et Balfour suscitent de vives tensions diplomatiques à Saint-Pétersbourg et à Londres.",
    "paragraphs": [
      "Le Caire, 3 décembre : Les officiers récemment arrivés du Soudan apportent des précisions sur la fin du khalifat, qui a péri au cours d'un combat acharné en compagnie de ses principaux émirs.",
      "Londres : La Westminster Gazette commente le récent discours de M. Chamberlain, soulignant l'inquiétude grandissante face à d'éventuels conflits avec les grandes puissances. À Saint-Pétersbourg, la presse condamne vivement les propos tenus par MM. Balfour et Chamberlain. De son côté, le gouvernement de Washington dément formellement l'existence d'une quelconque alliance contractée avec la Grande-Bretagne ou l'Allemagne."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accidents industriels et divers",
    "summary": "Une série d'accidents tragiques a frappé la région parisienne : trois ouvriers ont trouvé la mort à Clichy, Saint-Denis et la Plaine Saint-Denis dans l'exercice de leurs fonctions.",
    "paragraphs": [
      "À Clichy, un charretier nommé Eugène Solau a succombé, écrasé par son propre tombereau. À Saint-Denis, l'ouvrier Henri Denis a été mortellement blessé alors qu'il était pris dans un engrenage. Enfin, à la Plaine Saint-Denis, Louis Durand a trouvé la mort suite à l'explosion violente d'un appareil dans une savonnerie.",
      "Par ailleurs, une jeune fille de dix-huit ans a tenté de mettre fin à ses jours en absorbant du laudanum à Montmartre. Un incendie s'est également déclaré dans un atelier parisien, heureusement sans occasionner de pertes humaines."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide à Corbeil",
    "summary": "Un drame s'est produit hier après-midi à Corbeil, où un homme a mis fin à ses jours en faisant usage d'un revolver.",
    "paragraphs": [
      "Un drame a jeté l'émoi hier après-midi dans la commune de Corbeil : un homme a mis fin à ses jours en se tirant un coup de revolver à la tempe."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Trouble à l'ordre public au bois de Vincennes",
    "summary": "Un homme, atteint de troubles mentaux, a semé la panique au bois de Vincennes en tirant des coups de feu sur les promeneurs. Maîtrisé, il a été interné.",
    "paragraphs": [
      "Dans la journée d'hier, vers trois heures, des détonations d'arme à feu ont provoqué un vif émoi parmi les promeneurs du bois de Vincennes. Un individu élégamment vêtu, armé d'un revolver de fort calibre, a tiré à l'aveugle sur la foule tout en proférant des cris incohérents.",
      "L'homme, âgé de vingt-six ans et souffrant d'un délire de persécution manifeste, a été maîtrisé après une lutte difficile. Conduit d'abord au commissariat de Charenton, il a été immédiatement transféré à l'infirmerie spéciale pour y être soigné."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de tramway à Joinville-le-Pont",
    "summary": "À Joinville-le-Pont, un marchand de grain a été grièvement blessé hier matin lorsque son cheval, effrayé par le passage d'un tramway, a provoqué le renversement de sa voiture, le coinçant sous l'engin mécanique.",
    "paragraphs": [
      "M. Buisson, marchand de grain à Joinville-le-Pont, circulait hier matin en voiture vers Saint-Maur-des-Fossés quand son cheval, effrayé par un tramway, s'est emporté et mis en travers de la chaussée.",
      "Le tramway a renversé la voiture et le malheureux conducteur a été coincé sous le châssis de la machine. Il a fallu l'usage d'un cric pour le dégager. Brûlé par la vapeur du moteur, il a été transporté d'urgence à l'hôpital."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide à Vitry",
    "summary": "Une jeune domestique de vingt-trois ans, nommée Elisabeth Voisin, a mis fin à ses jours hier à Vitry en s'asphyxiant à l'aide d'un réchaud à charbon, un geste attribué à de profonds chagrins d'amour.",
    "paragraphs": [
      "Une jeune fille, Elisabeth Voisin, âgée de vingt-trois ans, domestique, s'est donné la mort hier dans sa chambre en utilisant un réchaud à charbon. On attribue ce geste désespéré à des chagrins d'amour."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Social",
    "title": "Renouvellement des prud'hommes ouvriers",
    "summary": "Le renouvellement triennal des prud'hommes ouvriers se déroule aujourd'hui pour plusieurs industries, tandis que l'élection des prud'hommes patronaux est fixée au dimanche prochain.",
    "paragraphs": [
      "C'est aujourd'hui qu'il doit être procédé au renouvellement triennal des prud'hommes ouvriers. Plusieurs sièges sont à pourvoir dans les industries des métaux, des tissus, des produits chimiques et du bâtiment.",
      "Le scrutin, ouvert à neuf heures du matin, sera clos à six heures du soir. L'élection des prud'hommes patronaux aura lieu dimanche prochain."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Social",
    "title": "Grève des ouvriers maréchaux",
    "summary": "Une délégation d'ouvriers maréchaux a demandé le retrait des soldats des services publics. M. Jaurès a soutenu les grévistes lors d'une assemblée générale à la Bourse du travail.",
    "paragraphs": [
      "Une délégation d'ouvriers maréchaux s'est rendue à la préfecture de police pour réclamer le renvoi des soldats assurant les services publics. Le comité de grève propose de remplacer ces derniers par des ouvriers syndiqués.",
      "Lors d'une assemblée générale à la Bourse du travail, M. Jaurès a prononcé un discours très applaudi, félicitant les ouvriers de leur organisation et examinant les objections des patrons concernant la hausse des salaires."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "Élection à la commission du travail",
    "summary": "Dix membres seront élus cet après-midi à la Bourse du travail pour siéger à la commission chargée de surveiller les conditions de travail des femmes et des enfants.",
    "paragraphs": [
      "Il sera procédé cet après-midi, à la Bourse du travail, à l'élection de dix membres de la commission du travail, chargée de la surveillance des conditions de travail des femmes et des enfants."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Social",
    "title": "Détente chez les imprimeurs en taille douce",
    "summary": "Une détente s'amorce dans le conflit des imprimeurs en taille douce, plusieurs patrons ayant accepté les conditions des ouvriers avant l'assemblée générale décisive de ce matin.",
    "paragraphs": [
      "Une légère détente se produit chez les imprimeurs en taille douce, plusieurs patrons ayant adhéré aux revendications des ouvriers. Une assemblée générale extraordinaire est prévue ce matin afin de statuer sur la suite du mouvement."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Chroniques judiciaires et divers en province",
    "summary": "Le bilan des faits divers en province est marqué par un grave accident ferroviaire à Ormoy-Villiers, le transfert d'un détenu à Beauvais et une inquiétante série d'incendies criminels au Plessier-sur-Noye.",
    "paragraphs": [
      "Clermont : Georges Lefèvre a été transféré à Beauvais en vue de sa comparution aux prochaines assises.",
      "Montdidier : Un incendie a entièrement détruit une étable au Plessier-sur-Noye. Il s'agit du troisième sinistre de cette nature survenu dans la commune en l'espace de trois semaines.",
      "Crépy-en-Valois : Un tamponnement ferroviaire, survenu en gare d'Ormoy-Villiers, a causé des blessures graves à un garde-frein en service."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "Le monde des spectacles annonce le report de « Charlotte Corday » à la Comédie-Française, le prochain gala des gymnastes et le départ du ténor Alvarez pour une tournée américaine.",
    "paragraphs": [
      "Le ministre de l'Instruction publique a ordonné de retarder la reprise de « Charlotte Corday » à la Comédie-Française.",
      "L'Association des sociétés de gymnastique donnera sa fête annuelle demain.",
      "M. Alvarez est parti pour les États-Unis, où il donnera douze représentations pour une somme importante avant de revenir reprendre sa place parmi nous."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Chronique Littéraire",
    "title": "Revue du journal Le Rire",
    "summary": "Le dernier numéro du Rire captive l'attention par ses caricatures politiques incisives, mettant en scène les souverains Guillaume et le Tsar, ainsi qu'une réédition artistique de Willette.",
    "paragraphs": [
      "Le numéro du Rire qui vient de paraître est particulièrement intéressant ; il contient notamment une charge vigoureuse de Léandre représentant les souverains Guillaume et le Tsar, ainsi qu'une réimpression du numéro dessiné par Willette."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Sports",
    "title": "Résultats des luttes au Casino de Paris",
    "summary": "Succès sportifs au Casino de Paris : Constant est déclaré vainqueur suite à l'abandon de Lassartesse, tandis que Kara-Ahmed et Laurent le Beaucairois brillent dans leurs duels.",
    "paragraphs": [
      "Lassartesse s'étant retiré après une blessure, Constant est déclaré vainqueur. Kara-Ahmed et Laurent le Beaucairois ont également remporté leurs combats respectifs avec brio."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Sports",
    "title": "Course de côte de Gaillon",
    "summary": "La célèbre course de côte de Gaillon se dispute ce jour à midi. Un itinéraire combinant train et bicyclette est proposé aux cyclistes et aux curieux désireux d'assister à cette épreuve mécanique.",
    "paragraphs": [
      "La course de côte de Gaillon se dispute aujourd'hui à midi. Un itinéraire combinant le train et la bicyclette est proposé aux cyclistes et aux curieux désireux d'assister à l'épreuve."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Bulletin Financier",
    "title": "Bourse de Paris du 2 décembre",
    "summary": "Le marché parisien fait preuve d'une grande fermeté ce 2 décembre. Malgré l'attente d'informations en provenance du Transvaal, les valeurs minières se maintiennent, tandis que le 3 % clôture à 67 francs.",
    "paragraphs": [
      "Le marché montre une grande fermeté. Les nouvelles du Transvaal se font toujours attendre, rendant le marché des mines d'or inactif, mais les cours demeurent bien maintenus.",
      "Le 3 % finit à 67 francs, et plusieurs sociétés de crédit affichent des hausses notables."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Transports",
    "title": "Départs et Arrivées des Paquebots",
    "summary": "Chronique maritime du 1er décembre : arrivées et départs des paquebots de la Compagnie Générale Transatlantique et des Messageries Maritimes reliant la France à l'Orient, l'Australie et l'Indochine.",
    "paragraphs": [
      "Le paquebot France (C. G. T.), venant de Vera-Cruz et escales, est arrivé à Saint-Nazaire le 1er décembre, à 10 heures du matin.",
      "Le paquebot Djemnah (M. M.), à destination de Madagascar, La Réunion et Maurice, a quitté Port-Saïd le 1er décembre, à 2 heures du matin.",
      "Le paquebot Australien (M. M.), en route pour l'Australie, est arrivé à King-George's Sound le 1er décembre, à 5 heures du matin.",
      "Le paquebot Polynésie (M. M.), en provenance d'Australie, est arrivé à Marseille le 1er décembre, à 5 heures du matin.",
      "Le paquebot Tonkin (M. M.), en provenance de l'Indochine, a quitté Port-Saïd le 1er décembre, à 5 heures du matin."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Santé",
    "title": "Traitement des maladies nerveuses",
    "summary": "M. Fauval, pharmacien à Lille, propose un traitement scientifique novateur pour guérir les maladies nerveuses et l'épilepsie, réputée incurable. Brochure gratuite disponible sur demande.",
    "paragraphs": [
      "Traitement scientifique et guérison de toutes les maladies nerveuses et, plus particulièrement, de l'épilepsie, réputée jusqu'aujourd'hui incurable.",
      "La brochure contenant la méthode de traitement et de nombreux certificats de guérison est envoyée gratuitement à toute personne qui en fera la demande à M. Fauval, pharmacien, à Lille."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Santé",
    "title": "Remède contre les maladies de la peau et du sang",
    "summary": "Annonce thérapeutique pour un produit traitant les affections cutanées et les impuretés du sang, incluant les eczémas, les ulcères, les hémorroïdes et les accidents syphilitiques.",
    "paragraphs": [
      "Offre d'un produit pour la guérison prompte et radicale de toutes les maladies de la peau et des vices du sang : dartres, eczémas, ulcères variqueux, plaies de mauvaise nature, humeurs froides, accidents syphilitiques, hémorroïdes, etc."
    ]
  }
];
