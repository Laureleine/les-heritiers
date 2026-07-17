// Date: 1900-10-06
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-10-06 (Version Restaurée, 40 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Littérature",
    "title": "Le Fruit Défendu par Jules Mary",
    "summary": "Le Petit Parisien annonce le début imminent du roman « Le Fruit Défendu » de Jules Mary, une œuvre dramatique illustrant la lutte de parents pour protéger leurs filles contre les périls de la vie parisienne.",
    "paragraphs": [
      "Demain dimanche 7 octobre, Le Petit Parisien commencera la publication du roman « Le Fruit Défendu », par M. Jules Mary.",
      "Nos lecteurs apprécient les ouvrages de M. Jules Mary, car les sentiments les plus tendres et les plus vécus s'y trouvent toujours encadrés dans une action simple, forte et claire, exempte de toutes complications fatigantes.",
      "La nouvelle œuvre que nous allons publier met en relief, plus encore que les précédentes, les solides qualités de l'écrivain.",
      "« Le Fruit Défendu », c'est la lutte — une lutte qui se termine d'une façon tragique — d'un brave homme et d'une brave femme, père et mère, pour défendre leurs deux filles contre les tentations, les séductions et les voluptés de Paris."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Social",
    "title": "La Mutualité Scolaire",
    "summary": "Le mutualisme connaît une extension notable en France, porté par l'école qui enseigne la prévoyance aux enfants, tandis que de nouvelles initiatives renforcent la protection des travailleurs.",
    "paragraphs": [
      "Il est question, en ce moment, de mutualisme et de mutualité. Nombre d'hommes d'État, parmi lesquels le président de la Chambre, M. Paul Deschanel, nous en ont vanté les avantages matériels et sociaux.",
      "Le mutualisme peut-il devenir le remède souverain à la crise que traverse en ce moment le prolétariat des deux mondes ? Ce qu'il y a de certain, c'est que son application a donné jusqu'ici des résultats excellents.",
      "C'est surtout depuis l'année dernière qu'elle a pris une extension vraiment considérable. L'école a subi la poussée du mouvement d'opinion qui s'est produit avec tant de force en faveur des sociétés de secours mutuel d'adultes.",
      "Sans doute, la mutualité scolaire existait avant, mais elle a rencontré des appuis parmi les vétérans de l'épargne et de la solidarité qui ont compris les avantages matériels et éducatifs de l'économie, de la prévoyance et de la fraternité enfantines.",
      "C'est à Paris et dans le département de la Seine que la mutualité scolaire a fait le plus de progrès. Chaque arrondissement possède sa mutualité.",
      "Parallèlement aux mutualités d'écoles, les mutualités de villes gagnent en force et leurs adhérents deviennent plus nombreux à mesure que se multiplient sous leurs yeux les bienfaits du mutualisme.",
      "M. Cavé se propose d'introduire dans l'organisation mutualiste une innovation : qu'à tout sociétaire contraint de quitter la société pour cause de force majeure, soit délivré un livret de pension mutualiste."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Souffrance de vivre",
    "summary": "Errant dans la nuit, un homme accablé par le remords et la confusion mentale cherche, à la lueur de l'aube, un apaisement qu'il ne parvient pas à trouver en rentrant chez lui.",
    "paragraphs": [
      "« Qui, l'avenir... » Il reprit : « Non, non, c'est atroce, ce que je dis là... J'ai brisé le cœur de Jeannine, perdu la raison, je divaguais. »",
      "Il était arrivé dans une sorte de ravin au fond duquel coulait un ruisseau qui clapotait doucement. L'eau tombait en une pâle cascadelle qui, éclairée par la lune, ressemblait à une coulée de lait détachée.",
      "La nuit était très avancée. Vers l'est, le ciel déjà prenait des teintes roses. L'aube naissait. Il redescendit le sentier.",
      "Le lieutenant de Courtial, à peine rentré dans sa chambre, se jeta sur son lit. Il était harassé, brisé, et pourtant il ne put s'endormir."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Le Voyage de M. Loubet à Lyon",
    "summary": "Le Président de la République, M. Loubet, a officiellement accepté l'invitation de la municipalité de Lyon pour présider l'inauguration du monument Carnot et participer aux festivités de la ville.",
    "paragraphs": [
      "Le Président de la République a reçu hier matin M. Augagneur, maire de Lyon, et une délégation du conseil municipal de cette ville, qui l'ont invité à présider l'inauguration du monument Carnot et à assister aux fêtes qui seront données à cette occasion. M. Loubet a accepté cette invitation."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Chronique Politique",
    "title": "M. Millerand à Lens",
    "summary": "Le ministre du Commerce, M. Millerand, se rendra ce dimanche à Arras puis à Lens, où il honorera de sa présence un banquet et un punch organisés en son honneur.",
    "paragraphs": [
      "M. Millerand, ministre du Commerce, quittera Paris dimanche matin, à huit heures quarante-cinq, par train spécial, pour se rendre à Arras. Dans la soirée du même jour, le ministre se rendra à Lens où il assistera à un banquet et à un punch offerts en son honneur."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Économie",
    "title": "Les finances de la République",
    "summary": "La commission du budget achève ses travaux, permettant à la Chambre d'examiner la loi de finances. Le rapport précise que la dette de l'État s'élève à 29 milliards au 1er janvier 1899, incluant rentes et dettes à terme.",
    "paragraphs": [
      "La commission du budget a terminé sa tâche ; il ne lui reste plus qu'à arrêter les termes du rapport général, de telle sorte que la Chambre pourra aborder, dès la rentrée du Parlement, la discussion de la loi de finances.",
      "Les économies réalisées, en accord presque total avec le gouvernement, s'élèvent à des millions par rapport aux demandes formulées par les différents départements ministériels.",
      "Dans les documents fournis par le ministre des Finances, on trouve des renseignements précis sur les dettes de la France. On y voit qu'au 1er janvier 1899, notre pays avait à amortir ou à rembourser 29 milliards, répartis en 22 milliards environ pour nos rentes perpétuelles 3 % et le reste en dette remboursable à terme."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Politique Nationale",
    "title": "La Légion d'honneur pour les villes",
    "summary": "Le conseil de l'ordre de la Légion d'honneur valide l'attribution de la croix aux villes de Paris et de Bazeilles. Le général André propose également cet honneur pour Lille et Valenciennes.",
    "paragraphs": [
      "Le conseil de l'ordre de la Légion d'honneur a approuvé, dans sa séance d'hier, sur un rapport du ministre de la Guerre, la proposition relative à l'attribution de la croix de la Légion d'honneur aux villes de Paris et de Bazeilles.",
      "Dans ce même rapport, M. le général André a demandé que la même distinction honorifique soit accordée aux villes de Lille et de Valenciennes pour des faits d'armes qui remontent à la Révolution française."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Société",
    "title": "Le vin du soldat",
    "summary": "Pour soutenir les vignerons du Midi, l'État étudie la distribution quotidienne de vin aux troupes. Une logistique optimisée permettrait de fournir le litre à 12 centimes pour les ordinaires.",
    "paragraphs": [
      "Les vignerons du Midi, ne pouvant pas facilement vendre leurs vins, font en ce moment une vive campagne pour que l'État leur vienne en aide par une série de mesures dont quelques-unes semblent malaisément applicables.",
      "Par contre, il en est une qui serait fort efficace : la distribution quotidienne du vin aux troupes. Cela a paru effrayer les économistes qui voient dans une telle mesure un nouvel et formidable accroissement du budget.",
      "En faisant les acquisitions par grandes quantités dans le vignoble même, en se servant de wagons-citernes pour le transport, en obtenant des villes la suppression des droits d'octroi et de l'État l'abandon des droits de régie pour le vin des rations, le service des subsistances pourrait donner le vin aux ordinaires pour 12 centimes le litre."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Actualité Internationale",
    "title": "Les socialistes belges",
    "summary": "Lors du retour du prince et de la princesse Albert à Bruxelles, les socialistes prévoient des manifestations pour le suffrage universel, faisant craindre aux autorités des troubles graves.",
    "paragraphs": [
      "Nous avons annoncé que les socialistes, voulant mettre à profit le retour à Bruxelles du prince et de la princesse Albert, avaient résolu d'opposer aux manifestations monarchiques qui se produiront des manifestations en faveur du suffrage universel et de l'amnistie.",
      "Le bourgmestre de Bruxelles prendra les mesures rigoureuses imposées par les circonstances. On est très inquiet de cette situation et l'on redoute, avec raison, des troubles graves."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame passionnel à Bordeaux",
    "summary": "Un ouvrier armurier, Henri Faucher, a violemment agressé sa compagne, la veuve Raynaud, lui portant huit coups de couteau. La victime est actuellement hospitalisée dans un état grave.",
    "paragraphs": [
      "Un drame passionnel s'est déroulé hier dans le quartier Saint-Michel à Bordeaux. Une dame, la veuve Raynaud, avait fait la connaissance d'un ouvrier armurier nommé Henri Faucher et n'avait pas tardé à aller habiter sous son toit.",
      "Faucher, violent, la menaçait constamment. Après une séparation, il s'est muni d'un couteau et, rencontrant la femme Raynaud, il l'a frappée de huit coups de son arme. La victime a été transportée à l'hôpital dans un état grave."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Politique Internationale",
    "title": "Note diplomatique sur la Chine",
    "summary": "La France soumet aux puissances alliées un programme d'action concerté en Chine, axé sur la répression des coupables, l'embargo sur les armes et l'obtention de réparations équitables.",
    "paragraphs": [
      "La note diplomatique présentée au nom de la France aux puissances pour l'adoption d'un programme commun en Chine a le mérite d'être à la fois nette, énergique et réalisable.",
      "Le ministre des Affaires étrangères a prescrit aux représentants de la France de convier les puissances, dont les troupes coopèrent avec les nôtres en Extrême-Orient, à l'adoption d'un programme commun de négociations avec la Chine. Ce plan inclut la punition des principaux coupables, l'interdiction d'importer des armes et le versement d'indemnités équitables."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "International",
    "title": "La situation en Chine",
    "summary": "Mouvements de troupes et agitations des Boxers en Chine : rapports diplomatiques sur les récentes nominations impériales, les tensions à Tien-Tsin et les escarmouches contre les forces alliées.",
    "paragraphs": [
      "Londres, 5 octobre. On mande de Shanghai au Daily que le bruit court que l'impératrice et la cour ont nommé, pour remplacer le gouverneur du Shanxi, deux généraux tartares qui, ayant été à différentes reprises battus par les Russes, ont dû rendre leurs insignes.",
      "Washington, 6 octobre. Une dépêche de Tien-Tsin, en date du 4 octobre, annonce que les citoyens américains ont tenu une réunion qui s'est terminée par le vote d'une résolution déplorant le retrait des troupes américaines et demandant le maintien d'une force suffisante pour la protection des commerçants et des missionnaires.",
      "Tien-Tsin, 4 octobre. Les ministres de Russie et de Belgique sont arrivés ; le nouveau ministre d'Allemagne est également arrivé. Les Américains maintiennent provisoirement leurs 1 200 hommes dans le nord de la Chine, conformément à la pétition des missionnaires.",
      "Tien-Tsin, 3 octobre. Li-Hung-Chang partira demain pour Pékin accompagné de l'amiral russe, d'une escorte russe et de sa garde personnelle. Tant-Lu avait reçu l'ordre de se rendre à Tien-Tsin afin d'accompagner Li-Hung-Chang à Pékin, mais il a reçu un contre-ordre.",
      "On annonce que les Russes marchent de Kouan-Chau sur Chin-Chan et les Allemands ont demandé qu'on leur remette la voie ferrée de Pékin à Tien-Tsin.",
      "Londres, 5 octobre. On télégraphie de Shanghai au Times, le 2 octobre : une dépêche de Tien-Tsin annonce que l'infanterie de marine allemande a été attaquée par 4 000 Boxers ; ces derniers ont subi 400 pertes, tandis que celles des Allemands sont insignifiantes.",
      "New-York, 5 octobre. On annonce qu'un petit corps de troupes impériales chinoises a fait son apparition à Pit-Tchou, déclarant avoir pour mission de disperser les Boxers. Ce déploiement n'a pas été contesté par les Anglais."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "La Légion d'Honneur",
    "summary": "Décrets officiels de promotion et nomination dans l'ordre national de la Légion d'honneur pour faits de guerre, concernant les officiers de la division navale d'Extrême-Orient.",
    "paragraphs": [
      "Sur la proposition du ministre de la Marine, ont été promus ou nommés dans l'ordre national de la Légion d'honneur, pour faits de guerre :",
      "Au grade de commandeur : le capitaine de vaisseau de Marolles.",
      "Au grade d'officier : le capitaine de frégate Detaruelle, chef d'état-major de la division navale d'Extrême-Orient.",
      "Au grade de chevalier : les lieutenants de vaisseau Ditrey et Daoutas, les enseignes de vaisseau de Rotailler et Douuet, le médecin principal de 2e classe Mornier, le médecin de 2e classe Villet et le premier maître de mousqueterie Beliaut."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Troubles à Liège",
    "summary": "De graves échauffourées ont éclaté à Liège, où des sous-officiers, pris à partie par des manifestants hostiles à l'armée place du Théâtre, ont été poursuivis et blessés.",
    "paragraphs": [
      "Liège, 5 octobre. Après Gand et Bruxelles, voici qu'on signale des troubles graves à Liège. Un groupe de sous-officiers, passant place du Théâtre, fut salué par les cris de : « À bas le roi de carton ! À bas l'armée ! ».",
      "Les sous-officiers répondirent : « Vive le roi ! Vive l'armée ! » mais furent aussitôt entourés. Des agents de police arrivèrent et prièrent les sous-officiers de gagner les boulevards de la Sauvenière par la rue de la Casquette. Ils furent toutefois poursuivis et plusieurs sous-officiers ont été atteints et blessés."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrestation de faussaires",
    "summary": "Un individu élégamment vêtu a été appréhendé à l'hôtel international de Saint-Sébastien en possession de 11 000 francs en faux billets de banque français.",
    "paragraphs": [
      "Saint-Sébastien, 5 octobre. On a arrêté à l'hôtel international un individu élégamment vêtu qui faisait circuler de faux billets de banque français. Il était porteur de 11 000 francs en billets contrefaits."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Science",
    "title": "Une expédition scientifique",
    "summary": "L'expédition Borisseow a mis le cap vers la mer de Kara après l'achèvement de sa maison d'hivernage, afin d'établir un dépôt de provisions crucial pour les explorations sur les glaces du Grand Nord.",
    "paragraphs": [
      "Saint-Pétersbourg, 5 octobre. L'expédition Borisseow est partie, après l'achèvement de la maison destinée à l'hivernage, le 13 août, vers la mer de Kara. Son but était de déposer sur la côte Est de la Nouvelle-Zemble un approvisionnement pour l'expédition d'automne sur la glace, du côté nord."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Social",
    "title": "La situation au Transvaal",
    "summary": "Le général de Wet progresse au Transvaal en direction du Swaziland. Les escarmouches contre les Boers se multiplient, marquées par la destruction de fermes réputées et la capture de prisonniers.",
    "paragraphs": [
      "Londres, 5 octobre. Le général de Wet s'est dirigé sur Car-Pattel et dans le pays du Swaziland. Plusieurs fermes ont été brûlées, y compris celle de Poutue, très connue au Transvaal. Le long de la route, la colonne a eu une série d'escarmouches avec les Boers, auxquels elle a fait des prisonniers."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Les soldats indochinois",
    "summary": "Après un séjour parisien réussi, les miliciens et artisans du Tonkin et du Laos ont pris le train pour Marseille hier soir, équipés de vêtements chauds adaptés au climat.",
    "paragraphs": [
      "Les soldats indochinois faisant partie des milices du Tonkin et du Laos ont quitté Paris hier, à onze heures du soir, par la gare de Lyon, à destination de Marseille et de Saïgon.",
      "Ces miliciens et artisans ont quitté Paris en parfaite santé et enchantés de leur séjour. Ils ont reçu, à leur départ, de chauds vêtements de laine, des vareuses de molleton bleu et des chaussures européennes."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Trois hommes asphyxiés",
    "summary": "Un tragique accident à Villeneuve-sur-Lot a coûté la vie à trois personnes, asphyxiées successivement alors qu'elles tentaient de se porter secours au fond d'une cuve à raisins.",
    "paragraphs": [
      "Agen, 5 octobre. Un douloureux accident a coûté la vie à trois personnes. Un propriétaire de Villeneuve-sur-Lot, M. Delso, foulait des raisins dans une vaste cuve quand, tout à coup, il disparut, asphyxié. Son domestique se porta à son secours et tomba asphyxié à son tour. Une troisième personne, qui se dévoua, subit le même sort. Malgré les soins, les trois victimes sont décédées."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le faux prince Ilukanthor",
    "summary": "Un individu déguisé et grimé, se faisant passer pour un prince cambodgien, a été appréhendé au bois de Vincennes. Reconnu comme un halluciné, il a été dirigé vers l'infirmerie du Dépôt.",
    "paragraphs": [
      "Un homme jeune, la figure enduite d'une épaisse couche de suie, vêtu d'une robe de chambre et décoré, s'est promené dans le bois de Vincennes. Il se faisait passer pour le prince Ilukanthor, fils de Norodom, roi du Cambodge.",
      "L'inspecteur de police, voyant qu'il avait affaire à un halluciné, l'a conduit au commissariat de Charenton. Le pauvre fou a demandé une voiture et une escorte pour visiter l'annexe de Vincennes. Il a été conduit à l'infirmerie spéciale du Dépôt."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Social",
    "title": "Grèves à Bordeaux",
    "summary": "À Bordeaux, les employés de tramways maintiennent leur grève après le rejet de leurs revendications par la Compagnie. Le mouvement s'étend désormais au personnel de bord des navires, malgré des échauffourées.",
    "paragraphs": [
      "Les ouvriers et employés de tramways ont tenu hier soir une réunion pour examiner la réponse faite à leurs revendications par la Compagnie. La réunion a voté la continuation de la grève par 609 voix contre 2.",
      "Le personnel de bord (maîtres d'hôtel, cuisiniers, boulangers et bouchers) se joindra aux grévistes. Un employé ayant été embauché pour remplacer l'ancien personnel a été agressé par cinq ou six individus."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Politique",
    "title": "Actualités parlementaires",
    "summary": "Au cours de la séance, M. Lourde a appelé l'Assemblée à la mesure. Suite à cette intervention, la grève a été ajournée.",
    "paragraphs": [
      "M. Lourde, député, a pris la parole. Il a engagé l'Assemblée à la prudence.",
      "La grève a été, en conséquence, ajournée."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une affaire de supposition d'enfant",
    "summary": "Le juge d'instruction Leydet recherche activement une artiste lyrique, Mme Jeanne d'Ya, disparue depuis septembre 1899, afin d'élucider une affaire de supposition d'enfant impliquant une demoiselle N.",
    "paragraphs": [
      "Nous avons raconté dernièrement que M. Leydet, juge d'instruction, avait été chargé d'instruire une affaire de supposition d'enfant dans laquelle était inculpée une demoiselle N.",
      "Sur les déclarations de l'inculpée, M. Leydet fait actuellement rechercher une artiste lyrique, Mme Jeanne d'Ya, ayant demeuré à Paris à la fin de septembre 1899 et qui a depuis disparu.",
      "Cette femme, d'après les dires de Mlle N., pourrait indiquer l'endroit où se trouve un enfant, celui-ci lui ayant été confié avant sa naissance."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un individu à l'Élysée",
    "summary": "Un homme en état d'agitation a tenté d'approcher le Président de la République à l'Élysée. Interpellé, il a prétendu chercher protection contre des voleurs avant d'être dirigé vers l'infirmerie du dépôt.",
    "paragraphs": [
      "Un individu criant et gesticulant se présentait hier matin à l'Élysée, demandant à porter au Président de la République un placet.",
      "Arrêté et conduit chez M. Bétouino, commissaire de police, il se calma et déclara confidentiellement au magistrat qu'étant poursuivi par des voleurs, il avait voulu entrer à l'Élysée pour se mettre sous leur protection.",
      "Le nommé Antoine Guiliandio a déjà été interné plusieurs fois. On l'a envoyé à l'infirmerie spéciale du dépôt."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Deux timbres de 1 400 francs",
    "summary": "Un ouvrier mécanicien italien, Giuseppe Chouti, a été victime d'une escroquerie à la Bastille. Sous un faux prétexte, des malfaiteurs lui ont dérobé ses économies de 1 400 francs.",
    "paragraphs": [
      "Par ces temps d'exposition, les voleurs à l'américaine font véritablement des affaires d'or.",
      "Un ouvrier mécanicien italien, Giuseppe Chouti, âgé de vingt-cinq ans, sur le point de repartir dans son pays après avoir travaillé à Londres et à Paris, a été abordé près de la Bastille par un individu lui demandant un renseignement.",
      "L'inconnu, prétendant être son compatriote, lui a proposé d'accompagner un riche Anglais malade à Gênes, promettant une large récompense. Conduit dans un café, Chouti est présenté à un faux Anglais.",
      "Sous prétexte de mettre deux lettres à la poste, les escrocs ont envoyé Chouti acheter des timbres et ont profité de son absence pour disparaître avec sa valise contenant ses 1 400 francs d'économies. Le malheureux a porté plainte au commissariat."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un cas de folie",
    "summary": "Un nettoyeur de carreaux nommé Émile Pioche a été arrêté à la Villette alors qu'il sectionnait les moustaches des passants endormis, tenant des propos délirants sur l'impératrice de Chine.",
    "paragraphs": [
      "La nuit dernière, deux gardiens de la paix ont arrêté un individu qui rôdait près des dormeurs sur les bancs de la Villette. Il s'agissait d'un fou, nommé Émile Pioche, âgé de quarante-quatre ans, nettoyeur de carreaux.",
      "Il était muni d'une paire de ciseaux et coupait les moustaches des dormeurs. Interrogé par le commissaire, il a divagué, déclarant notamment qu'il voulait tresser une natte avec les moustaches des Boxers pour étrangler l'impératrice de Chine. Il a été dirigé sur l'infirmerie spéciale."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame conjugal",
    "summary": "Un couvreur, pris de boisson, a agressé sa famille rue des Panoyaux. Armé d'une barre de fer et d'un couteau, il a gravement blessé son épouse avant d'être appréhendé par les autorités.",
    "paragraphs": [
      "Hier soir, un ouvrier couvreur, Paul Kantz, âgé de cinquante ans, est rentré ivre chez lui, rue des Panoyaux, et a cherché querelle à sa femme et à son fils. Il s'est armé d'une barre de fer pour frapper ce dernier.",
      "La police et des voisins sont intervenus. Par la suite, Kantz s'est rué sur sa femme et l'a frappée de deux coups de couteau au-dessous du sein droit. La victime a été transportée à l'hôpital dans un état inquiétant. Le coupable a été arrêté."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une femme morte",
    "summary": "Le corps sans vie d'une femme de mœurs légères, âgée de quarante-huit ans, a été découvert hier matin sur le trottoir du boulevard de la Chapelle. Le cadavre a été conduit à la morgue.",
    "paragraphs": [
      "Dans la matinée d'hier, des gardiens de la paix ont trouvé le cadavre d'une femme sur le trottoir du boulevard de la Chapelle. Il s'agit d'une fille de mœurs légères, âgée de quarante-huit ans, demeurant boulevard de la Chapelle. Le corps a été transporté à la morgue."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes",
    "summary": "Chronique de la banlieue : un égoutier périt noyé à Levallois, une explosion ravage un atelier à Saint-Denis, un drame intime survient à Bois-Colombes et une agression éclate à Sannois.",
    "paragraphs": [
      "Levallois-Perret : Un égoutier, Jules Pedos, est mort après avoir été entraîné par les courants lors du nettoyage d'un collecteur.",
      "Saint-Denis : Un incendie dû à une explosion de poudre a ravagé un atelier route de la Révolte. Les pompiers ont maîtrisé le sinistre après une heure de lutte.",
      "Bois-Colombes : Un ancien employé des pompes funèbres, Ernest Bardinques, s'est suicidé après avoir avalé du laudanum et s'être ouvert la gorge.",
      "Sannois : Un ouvrier a été attaqué à coups de couteau par un maçon sur la route de Paris. L'agresseur a été arrêté."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Social",
    "title": "Le Bulletin du Travail",
    "summary": "Le Congrès international des ouvriers des mines a clôturé ses travaux à la Bourse du travail, actant des décisions sur le barème des salaires et la gestion future des conflits sociaux.",
    "paragraphs": [
      "Le Congrès international des ouvriers des mines a terminé ses travaux hier soir à la Bourse du travail.",
      "Les délégués ont adopté les rapports sur les contributions et la fixation des salaires en cas de conflit général. Une commission résumera chaque année la situation."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Social",
    "title": "La grève de la manufacture de cigares",
    "summary": "À la manufacture des tabacs, 1 350 ouvrières ont cessé le travail pour protester contre une réduction salariale arbitraire imposée par le chef de section M. Pointut et la mauvaise qualité des matières premières.",
    "paragraphs": [
      "La grève des ouvriers et ouvrières de la manufacture des tabacs a éclaté suite au vif mécontentement provoqué par l'attitude d'un chef de section, M. Pointut, qui a diminué, sans motif valable, le salaire d'une ouvrière mère de quatre enfants.",
      "Sur un effectif total de 1 500 ouvriers, 1 350 femmes ont cessé le travail. Le personnel manifeste également son mécontentement concernant la piètre qualité des tabacs fournis. Une délégation a été reçue par M. le Préfet afin d'exposer ces griefs."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Social",
    "title": "Les ouvriers plâtriers",
    "summary": "Le mouvement de grève des plâtriers parisiens s'intensifie. Des groupes de grévistes parcourent les chantiers de la capitale pour appeler à la cessation du travail, provoquant des rixes nécessitant l'intervention policière.",
    "paragraphs": [
      "Le mouvement de grève des ouvriers plâtriers a repris avec une nouvelle acuité. Les grévistes parcourent actuellement les divers chantiers de la capitale pour inviter leurs camarades à cesser le travail. La police est intervenue à plusieurs reprises sur les lieux suite à des rixes survenues entre ouvriers."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Sports",
    "title": "Résultats des courses à Enghien",
    "summary": "Le champ de courses d'Enghien a attiré une foule nombreuse. La journée a été marquée par les victoires de Bicarra dans le Prix du Var, Le Passe-Temps dans le Prix du Mont-Af, et Bois-Luzy dans le Prix de l'Esterel.",
    "paragraphs": [
      "Le public est demeuré, comme à l'accoutumée, fidèle aux courses d'Enghien. Le Prix du Var a été enlevé par l'outsider Bicarra. Le Prix du Mont-Af a été remporté par le cheval Le Passe-Temps, tandis que le Prix de l'Esterel a été adjugé à Bois-Luzy."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Théâtre et Spectacles",
    "title": "Nouvelles théâtrales",
    "summary": "La saison théâtrale s'organise avec les directions de MM. Moury et Porel, l'engagement de Mme Jane Relier au Vaudeville et l'annonce d'une grande fête de l'Association des artistes dramatiques au Trocadéro.",
    "paragraphs": [
      "M. Moury et M. Porel poursuivent la direction de leurs théâtres respectifs pour la saison hivernale.",
      "Mme Jane Relier, jeune comédienne dont le talent fut remarqué au théâtre Antoine, a été engagée par M. Porel sous des conditions flatteuses ; elle fera ses débuts cette saison sur la scène du Vaudeville.",
      "L'Association des artistes dramatiques prépare une solennité pour le jeudi 18 octobre, faisant suite aux récentes fêtes du palais du Trocadéro. Le prix des places sera remboursé par des billets de loterie offrant la chance de remporter des lots de 100 000 francs."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Concerts et Spectacles",
    "title": "Rentrée à la Scala",
    "summary": "La Scala inaugure sa saison sous la direction de M. Marchand avec un programme varié mettant en scène Paulette Darty et la parodie Mademoiselle l'Écume.",
    "paragraphs": [
      "La Scala a effectué sa grande rentrée avec un programme séduisant, placé sous l'impulsion de M. Marchand.",
      "Le spectacle met en vedette la charmante Paulette Darty, accompagnée de Lise Fleuron, de la belle Guefrerito, ainsi que de Sulbac, Denniny et le roi des comiques, le pioupiou-type, Potin.",
      "La soirée s'achève par la parodie 'Mademoiselle l'Écume', pièce alerte et pétillante, mise en scène avec le soin habituel de M. Marchand."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Faits divers",
    "title": "Extrait du roman-feuilleton",
    "summary": "Madame Verdunet tisse sa toile autour de la jeune Jeanne, dissimulant ses sombres desseins sous un masque de bonté factice, tandis que Thérèse demeure une observatrice inquiète et clairvoyante du manège.",
    "paragraphs": [
      "Madame Verdunet s'entretient avec Jeanne, s'efforçant de lui expliquer la situation concernant sa mère tout en déguisant la réalité derrière des fables pour enfant.",
      "L'émotion que manifeste Madame Verdunet paraît sincère aux yeux de la jeune fille, contrastant singulièrement avec son égoïsme coutumier habituel. Thérèse, la mère de Jeanne, observe la scène, pénétrée d'une méfiance justifiée envers cette femme.",
      "Le récit se poursuit sur le départ de Madame Verdunet, laquelle rumine sa vengeance toute prête, tout en tirant profit des subsides concédés par Thérèse."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Théâtre et Spectacles",
    "title": "Actualités des scènes parisiennes",
    "summary": "Panorama des théâtres parisiens : la première de « Mademoiselle Bonaparte » aux Folies-Bergère, les derniers succès de Fregoli à l'Olympia et l'annonce attendue du retour de l'humoriste Little-Tich.",
    "paragraphs": [
      "La première représentation de « Mademoiselle Bonaparte » aura lieu lundi prochain sur la scène des Folies-Bergère.",
      "Le célèbre transformiste Fregoli donne en ces jours sa dernière matinée et sa dernière soirée à l'Olympia.",
      "Lundi verra également la première de « Hamlet », ballet signé Jean Lorrain et Edmond Diet, interprété par Liane de Pougy et Jane Thylda, ainsi que le retour très attendu de l'artiste Little-Tich.",
      "Le Casino de Paris remporte un succès unanime et prolongé avec son nouveau ballet intitulé « Cadet Roussel »."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Informations locales",
    "title": "Fêtes des environs de Paris",
    "summary": "En ce dimanche 7 octobre, la banlieue parisienne s'anime : les vendanges sont à l'honneur à Argenteuil et Houilles, accompagnées de nombreuses foires dans tout le département, notamment à Saint-Denis et Versailles.",
    "paragraphs": [
      "Le dimanche 7 octobre, de nombreuses réjouissances sont organisées en banlieue parisienne : les fêtes des vendanges animent Argenteuil et Houilles, tandis que les fêtes foraines battent leur plein à Saint-Denis et Versailles. Des festivités diverses sont également annoncées à Enghien, Bois-Colombes, Étampes, Gonesse et La Chapelle-la-Reine."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Concerts et Orphéons",
    "title": "Concerts et nouvelles musicales",
    "summary": "La vie musicale française s'intensifie entre les programmes classiques de l'Exposition et les festivals organisés en province à l'occasion des visites ministérielles en Vendée et à Arras.",
    "paragraphs": [
      "Le concert de l'Exposition propose cette semaine un programme varié et ambitieux incluant des œuvres majeures de Verdi, Brahms et Chaminade.",
      "Des concours musicaux sont en cours de préparation dans le département de la Vendée, notamment à La Roche-sur-Yon et à Fontenay-le-Comte. Parallèlement, la ville d'Arras organise un grand festival musical à l'occasion de la venue officielle du ministre des Travaux publics."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Cours des vins et eaux-de-vie",
    "summary": "Le marché viticole fait face à des récoltes contrastées cette année : les intempéries frappent durement le Midi, tandis que le Bordelais et la Champagne offrent des perspectives nuancées selon la qualité des crus.",
    "paragraphs": [
      "Les dernières nouvelles en provenance du Midi signalent des récoltes rendues difficiles par les intempéries persistantes, tandis que le Bordelais et la Champagne affichent des perspectives fort variées selon la qualité des cépages et les conditions météorologiques récentes.",
      "Les cours des vins et des eaux-de-vie restent, comme il est d'usage, étroitement tributaires du volume global de la récolte et de la qualité des crus mis sur le marché."
    ]
  }
];
