// Date: 1900-01-30
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-30 (Version Restaurée, 32 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Le déclin de la langue française",
    "summary": "Une analyse du recul de la langue française face à la prédominance de l'anglais, de l'allemand et du russe, attribuant cette baisse à un affaiblissement de notre rayonnement commercial et à une émigration insuffisante.",
    "paragraphs": [
      "Voilà longtemps déjà qu'on signale le mouvement de recul subi par la langue française sur différents points du globe. D'une statistique récente publiée par M. Jean Finot, il résulte que l'anglais est parlé aujourd'hui par 116 millions d'individus, le russe par 85 millions, l'allemand par 80 millions et le français par 58 millions seulement.",
      "On a donné différentes raisons de ce déclin du français, notamment les envahissements progressifs de l'anglais, de l'allemand et du russe, ainsi que la natalité stationnaire chez nous. Contrairement à d'autres peuples, le Français n'émigre pas ou à peine, ce qui limite l'exportation de notre langue dans les pays neufs.",
      "La question politique joue également un rôle. Il semble plus utile de connaître la langue d'un peuple riche et victorieux que celle d'un peuple faible. Toutefois, il n'est pas vrai de dire qu'un peuple vaincu est fatalement affaibli dans sa langue.",
      "Concernant la corruption du français, on déplore l'absence de tradition et d'unité, ainsi que l'introduction de mots étrangers. Mais la vraie explication du recul semble être le relâchement de notre mouvement d'échanges commerciaux.",
      "Conserver à notre langue sa clientèle d'élite et l'étendre dans les masses reste un programme nécessaire, comme le démontrent les subventions aux écoles françaises d'Orient et d'Extrême-Orient."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage Secret",
    "summary": "Le mystérieux Delorme sollicite Trois-Pattes pour une mission délicate : filer discrètement Manuela Castéras, une jeune Mexicaine arrivant au Havre. Une promesse de fortune qui pousse l'homme à l'action.",
    "paragraphs": [
      "Ce que voulait Delorme n'était peut-être pas très clairement expliqué par sa lettre, car elle était mystérieuse en diable. Telle quelle, cependant, elle devait singulièrement piquer la curiosité de Trois-Pattes et allumer sa convoitise.",
      "Il s'agit de suivre pas à pas une jeune femme, une Mexicaine nommée Manuela Castéras, qui arrive au Havre et se rend à Paris. Delorme promet une fortune colossale à condition que cette mission soit accomplie sans que la femme ne s'en aperçoive.",
      "Trois-Pattes, malgré ses doutes, se résout à accepter après avoir inventé une excuse auprès du gérant de son cercle. Il se rend au Havre pour attendre le paquebot La Franche-Comté et identifier sa cible."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique Intérieure",
    "title": "Les élections de dimanche",
    "summary": "Bilan des élections sénatoriales : le scrutin confirme une large victoire républicaine avec 92 élus, marquant un renouvellement significatif au sein de la Haute Assemblée avec l'entrée de nombreuses personnalités.",
    "paragraphs": [
      "Les élections sénatoriales de dimanche dernier ont livré un verdict sans équivoque : le scrutin a assuré l'élection de 92 sénateurs républicains, confirmant ainsi le succès des candidats face aux courants nationalistes et réactionnaires.",
      "Parmi les sénateurs sortants n'ayant pas obtenu le renouvellement de leur mandat, figurent MM. Baudena, Maquehen, Régismanset, Jacques Guyet-Lavaline, Le Play, Coste, Siegfried, Lesouëf, Banc, Barodet, Coillot, Signard, Thévenet, Million et Salomon.",
      "Le Sénat accueille désormais de nouveaux élus, parmi lesquels MM. Quintaa, Berdoly, Pédebidou, Gillot, Antoine Perrier, Thomas, Piettre, Forgemol, Tellier, Sigallas, Béraud, Gotteron, Saint-Germain, Vagnat, Francis Charmes, ainsi que les généraux Mercier et Lambert."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "L'arrière-garde de la mission Marchand",
    "summary": "Arrivée au Caire du commandant belge Henri, en provenance du Bahr-el-Ghazal, accompagné d'un officier français et d'un détachement de tirailleurs sénégalais rescapés de l'arrière-garde de la mission Marchand.",
    "paragraphs": [
      "Le Caire, 29 janvier. Le commandant belge Henri, après avoir traversé le Bahr-el-Ghazal, est arrivé à Khartoum accompagné d'un lieutenant français et de trente Sénégalais ; ces derniers font partie de l'arrière-garde de la mission Marchand. Tous sont en assez bonne santé."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "Le message de la Reine Victoria",
    "summary": "À l'ouverture du Parlement, la Reine Victoria déplore le conflit sud-africain tout en saluant le patriotisme colonial. Elle confirme la hausse des dépenses militaires et la signature du traité anglo-allemand sur Samoa.",
    "paragraphs": [
      "Londres, janvier. Le message de la Reine à l'ouverture du Parlement exprimera le profond regret que la paix ait été rompue dans le Sud de l'Afrique. Il constatera toutefois que les relations de la Grande-Bretagne avec les autres puissances demeurent amicales.",
      "Le gouvernement exposera la nécessité d'augmenter les dépenses militaires, exprimera sa vive émotion pour les pertes subies par les troupes anglaises et soulignera l'élan de patriotisme manifesté par les colonies britanniques. Enfin, le message rappellera la conclusion du traité anglo-allemand au sujet de Samoa."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "La situation militaire et les défaites anglaises",
    "summary": "Malgré l'envoi de renforts, les forces britanniques essuient des défaites répétées face aux Boërs. La situation militaire devient critique, marquée par la menace sur Ladysmith et des pertes lourdes à Spion-Kop.",
    "paragraphs": [
      "Malgré les éloges du général Buller, la vérité finit par percer : les Anglais ne sont pas de force. Battus sur tous les points, le seul résultat tangible de l'arrivée des renforts a été d'augmenter le nombre des tués, blessés et prisonniers.",
      "La reddition de Ladysmith est jugée imminente et les efforts pour se frayer un chemin vers l'État d'Orange restent infructueux. La situation faite à l'Angleterre par son insatiable cupidité n'a jamais été plus grave.",
      "À Colesberg, les démonstrations de force anglaises se heurtent à la détermination des Boërs. Les pertes britanniques à Spion-Kop s'élèvent à vingt-deux officiers tués et vingt blessés."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Social",
    "title": "Fin de la grève des charpentiers",
    "summary": "La grève des charpentiers de l'Exposition prend fin après un accord salarial. La reprise du travail est effective et les chantiers parisiens s'activent pour rattraper le retard accumulé.",
    "paragraphs": [
      "La grève des charpentiers de l'Exposition est terminée. La reprise du travail a été votée hier soir à la Bourse du travail. Les arbitres ont décidé d'accorder une augmentation de dix centimes de l'heure aux ouvriers travaillant dans les pavillons les plus élevés.",
      "Hier, on comptait déjà plus de six cents charpentiers sur les chantiers, au lieu de deux cent cinquante le samedi précédent. La reprise est notable partout et l'on va se hâter de rattraper le temps perdu."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Actualités",
    "title": "La crue de la Seine",
    "summary": "La Seine, gonflée par les pluies, menace de déborder. Si la navigation fluviale se maintient péniblement, les commerçants de Bercy prennent des mesures face à une montée des eaux qui s'annonce importante.",
    "paragraphs": [
      "Les pluies torrentielles des jours derniers ont provoqué une crue notable de la Seine et rien ne fait prévoir une accalmie ; bien au contraire, la couleur boueuse des eaux, les remous et la rapidité du courant laissent craindre une aggravation du phénomène.",
      "Cette crue, pour le moment, ne dépasse pas la normale, mais on craint que la neige tombant en abondance sur les plateaux de la Haute-Seine ne provoque des ennuis sous peu. D'autre part, alimentés par ces eaux, le Grand-Morin et la Marne montent avec une rapidité causée par la difficulté d'écoulement vers la Seine.",
      "Il est probable que cette situation se prolonge pendant deux ou trois jours. Les bateaux parisiens et les chalands remorqués, ainsi que les toueurs, seront contraints de cesser leur service, la hauteur des eaux rendant la circulation impossible sous les arches des ponts.",
      "Rectifions à ce propos une légère erreur : plusieurs de nos confrères ont annoncé que la navigation marchande avait dû être interrompue sur toute la traversée de Paris. Il n'en est rien : la navigation s'effectue encore, avec beaucoup de peine et un considérable surcroît de travail pour la courageuse population des mariniers séquanais.",
      "La montée a été si brusque que la plupart des commerçants de Bercy ont dû faire réveiller leurs équipes en pleine nuit pour déménager les tonneaux restés sur les berges. Cette crue atteindra certainement six mètres au pont de la Tournelle."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Actualités",
    "title": "Tempêtes et neiges",
    "summary": "Une vague de froid intense et de fortes tempêtes s'abattent sur la France. Les intempéries perturbent les communications terrestres et causent des naufrages tragiques sur les côtes bretonnes.",
    "paragraphs": [
      "Nous traversons en ce moment une période de fort mauvais temps. Non seulement à Paris la pluie et la neige tombent alternativement depuis quarante-huit heures, rendant les rues boueuses et difficiles, mais une bise glaciale souffle avec violence.",
      "La situation est, d'ailleurs, à peu près partout la même. La plupart de nos correspondants nous envoient des télégrammes signalant cette forte dépression atmosphérique. Sur certains points, les communications télégraphiques ont été interrompues par une chute abondante de neige.",
      "Enfin, nos côtes, et particulièrement celles de Bretagne, ont été durement éprouvées par la tempête. On déplore la perte de plusieurs barques et navires que la tourmente a précipités sur les récifs, entraînant la noyade de plusieurs marins."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Naufrage du steamer espagnol Primero",
    "summary": "Le steamer espagnol Primero, en détresse au large du raz de Sein, s'est échoué sur la côte de Plogoff. Grâce aux secours dépêchés, l'équipage de dix-huit hommes a pu être sauvé.",
    "paragraphs": [
      "Brest, 29 janvier. La préfecture maritime a été avisée, dans la nuit d'hier, qu'un steamer était en détresse et demandait du secours au sud-ouest du raz de Sein.",
      "Plusieurs canots de sauvetage des stations environnantes se portèrent à son secours, mais l'état de la mer ne permit pas l'abordage. La préfecture maritime donna l'ordre au haleur du port de guerre d'intervenir ; cependant, celui-ci fut obligé de rentrer au port après avoir trouvé au Toulinguet une mer démontée l'empêchant de continuer sa route.",
      "Par ses propres moyens, le vapeur, identifié comme le steamer espagnol Primero, se rendant de Bilbao à Newport avec du minerai, a mouillé en face de l'anse du Loch. Le navire a fini par s'échouer dans la nuit à Portz-Loubou, sur la côte de Plogoff. L'équipage, composé de dix-huit hommes, est sain et sauf."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Tempêtes en province",
    "summary": "De violentes intempéries, marquées par des chutes de neige, des pluies diluviennes et de fortes rafales de vent, sévissent sur plusieurs régions de France, provoquant inondations, accidents et tragédies.",
    "paragraphs": [
      "Saint-Brieuc, 29 janvier. Depuis trois jours, dans toute la région, il fait un temps épouvantable. Hier, vers midi, un violent orage s'est déchaîné sur Lamballe. En quelques minutes, la rue Centrale a été transformée en un véritable torrent. Cette nuit, une formidable tempête de vent, de pluie et de grêle a éclaté. Une mendiante de Ploumilliau, la veuve Allain, âgée de quatre-vingts ans, surprise par l'orage, s'était réfugiée dans un fossé où on l'a trouvée morte.",
      "Lisieux, 29 janvier. La neige tombe ici en abondance depuis hier matin, mais elle fond au fur et à mesure par suite de l'humidité du sol.",
      "Châlons-sur-Marne, 29 janvier. Cette nuit, la neige est tombée en abondance à Châlons et dans les campagnes environnantes. La température reste basse et le froid est vif.",
      "Bar-le-Duc, 29 janvier. Une violente tempête de neige s'est abattue ce matin sur Bar-le-Duc. La rivière l'Ornain a débordé et couvre une partie de la campagne; la circulation est interrompue sur plusieurs points du département.",
      "Mont-de-Marsan, 29 janvier. Une violente tempête souffle depuis samedi sur notre région. La pluie tombe à torrents sans discontinuer. Le cyclone a été particulièrement terrible dans les campagnes, où il a causé dans les forêts de pins des dégâts considérables. À Labouheyre, la tourmente a déraciné un gros arbre qui est tombé sur les rails, faisant dérailler une machine en manœuvre."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Culture",
    "title": "Au Musée du Luxembourg : Les dessins de Puvis de Chavannes",
    "summary": "Le Musée du Luxembourg consacre une exposition exceptionnelle à Puvis de Chavannes, révélant au public, à travers deux cent quatorze feuilles, la rigueur, la patience et le génie poétique du maître de la peinture décorative.",
    "paragraphs": [
      "L'exposition des dessins de Puvis de Chavannes qu'organise M. Léonce Bénédite, le conservateur du Musée du Luxembourg, sera un véritable régal pour les artistes et les admirateurs du maître. Ces dessins, qui comprennent des esquisses de ses principales œuvres décoratives et une série de croquis intéressants sur ses procédés de composition, sont au nombre de deux cent quatorze.",
      "Contrairement au préjugé qui le décrivait comme un révolutionnaire dédaignant le dessin, ces feuilles démontrent au contraire la patiente et acharnée recherche du maître. M. Bénédite souligne que l'artiste évaluait ses travaux préparatoires à près d'un an de recherche pour quelques mois d'exécution en couleur.",
      "Parmi les pièces maîtresses exposées, on retrouve des études pour 'Le Repos', 'Sainte Geneviève' au Panthéon, ou encore le 'Pauvre Pêcheur', œuvre qui fut autrefois incomprise avant d'être acquise par le musée sous l'impulsion de Castagnary. Cette exposition servira sans aucun doute à confirmer le génie poétique et la maîtrise technique de Puvis de Chavannes."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un drame dans un cabaret",
    "summary": "Une rixe d'une extrême violence a éclaté dans un cabaret de Koekelberg, à Bruxelles, lorsqu'une bande d'individus en état d'ivresse a agressé les clients au poignard et à la hache. Quatre suspects sont écroués.",
    "paragraphs": [
      "Bruxelles, 29 janvier. Une scène d'épouvantable sauvagerie s'est déroulée dans un cabaret de la rue Schmitz, à Koekelberg. Hier soir, vers neuf heures, l'établissement fut envahi par une bande d'individus pris de boisson qui se mirent à briser tout ce qui leur tombait sous la main.",
      "Un consommateur, le nommé Willems, voulut s'interposer et fut frappé de plusieurs coups de poignard. Sa sœur, témoin de la scène, fut frappée violemment à coups de hache. Les agents de police sont parvenus à maîtriser les forcenés et quatre individus ont été arrêtés. L'état des blessés est très grave."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Actualités Étrangères",
    "title": "Dépêches de l'étranger",
    "summary": "Des nouvelles d'Afrique, de Russie et de Chine : entre expéditions coloniales sur le Nil, incendies meurtriers à Saint-Pétersbourg et incertitudes politiques à Pékin suite au coup d'État impérial.",
    "paragraphs": [
      "Le Caire, 29 janvier. Le major Peake télégraphie de Gidelaio sur le Nil Blanc qu'il a rencontré une patrouille anglaise, un détachement belge et un détachement français venant de Shambe, composé du lieutenant Monquebec. Ils n'avaient plus que vingt jours de vivres. Le détachement français annonce avoir évacué Shambe, Meshra-el-Reck et le fort Desaix.",
      "Saint-Pétersbourg, 29 janvier. Cette nuit, un incendie s'est déclaré dans la ruelle Apraxine, dans une maison habitée par des ouvriers. Sept personnes sont mortes et neuf sont grièvement blessées après avoir sauté par les fenêtres par panique.",
      "Pékin, 29 janvier. On croit que le coup d'État effectué par l'impératrice douairière sera accepté tranquillement par les Chinois. Cependant, à Shanghai, la déposition virtuelle de l'empereur cause un grand mécontentement chez les fonctionnaires et les commerçants, qui appréhendent des troubles."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Chronique municipale",
    "title": "La statue de Charlemagne",
    "summary": "M. Charles Hochet, héritier du sculpteur Louis Rochet, formule ses recommandations pour la mise en valeur de la statue équestre de Charlemagne sur le parvis Notre-Dame, appelant à une inauguration purement civile.",
    "paragraphs": [
      "À propos de l'article sur Charlemagne, M. Charles Hochet, héritier du sculpteur Louis Rochet, a fait part de ses vœux concernant la statue équestre située sur le parvis Notre-Dame. Il demande que la statue reste en place, que le piédestal soit en granit et que la grille permette de voir l'œuvre sous tous les angles. Il souhaite également que la fête d'inauguration soit d'un caractère purement civil et historique, espérant pouvoir y assister, lui qui est âgé de quatre-vingt-quatre ans."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Faits divers et nominations",
    "summary": "Le Président de la République inaugure des œuvres de Puvis de Chavannes. L'Académie des sciences nomme de nouveaux correspondants, une mission japonaise arrive à Paris et divers sujets d'actualité internationale sont évoqués.",
    "paragraphs": [
      "Le Président de la République s'est rendu hier au musée du Luxembourg pour inaugurer la salle des dessins de Puvis de Chavannes. Il a été reçu par les autorités des Beaux-Arts et a manifesté un vif intérêt pour les œuvres exposées.",
      "L'Académie des sciences a procédé à l'élection de correspondants : M. Mittag-Leffler a été élu dans la section de géométrie et M. Bienaymé dans la section de géographie et de navigation.",
      "La mission impériale japonaise est arrivée à Paris. Ses membres ont été accueillis à la gare de Lyon par l'ambassade du Japon et ont immédiatement visité le pavillon nippon au Trocadéro.",
      "À New York, lors d'un congrès de démographie, un orateur a souligné l'augmentation du nombre de célibataires masculins, dépassant de deux millions celui des femmes non mariées, et a préconisé une migration des travailleurs vers les centres industriels de l'Ouest.",
      "Dans le comté de Surrey, en Angleterre, la police a décidé de doter ses inspecteurs de bicyclettes pour rendre le service plus efficace et rapide."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Tribunaux",
    "title": "Jugements divers",
    "summary": "Compte-rendu judiciaire : un crime passionnel acquitté aux assises, la condamnation d'un professeur à Verdun et la remise en liberté d'un ancien imprésario par le magistrat instructeur.",
    "paragraphs": [
      "Un amoureux assassin : Eugène Couché, accusé d'avoir poignardé sa maîtresse dans un accès de jalousie, a été acquitté par la cour d'assises après une défense plaidant la passion.",
      "Le drame de Verdun : Le professeur Buivru a été condamné à huit années de réclusion pour une tentative d'assassinat contre le principal de son collège.",
      "Nouvelles judiciaires : M. Jolly, juge d'instruction, a remis en liberté M. Bolossy Kiralfy, ancien imprésario du théâtre Columbia."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Faits divers parisiens",
    "summary": "Chroniques criminelles : tentative de vol dans un bureau de poste, grave accident sur le chantier de l'Exposition universelle et arrestation d'un repris de justice à Clichy par la sûreté.",
    "paragraphs": [
      "Vol au bureau de poste : Le receveur du bureau de poste a pris sur le fait un individu, nommé Georges L., qui tentait de fracturer un tiroir-caisse durant la nuit. Le malfaiteur a été envoyé au dépôt.",
      "Accident de travail à l'Exposition : Deux maçons, Jean Beruig et Henri Voulier, ont fait une chute de dix mètres lors de travaux au Palais des États-Unis. Voulier est grièvement blessé, Beruig a pu être raccompagné à son domicile.",
      "Mystérieuse arrestation : Les agents de la sûreté ont arrêté à Clichy un nommé Battaglini, repris de justice soupçonné de diriger des bandes de malfaiteurs."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Cambriolage chez M. Eugène Carrière",
    "summary": "Le peintre céramiste Eugène Carrière, domicilié place Clichy, a été victime d'un cambriolage estimé à 10 000 francs. Les malfaiteurs, après avoir fracturé un secrétaire, ont pris la fuite en oubliant leurs outils.",
    "paragraphs": [
      "Des malfaiteurs se sont introduits, avant-hier soir, dans l'appartement occupé au 5, place Clichy, au deuxième étage, par M. Eugène Carrière, peintre céramiste.",
      "Ils ont fracturé un secrétaire dans lequel ils ont dérobé 3 000 francs en billets de banque, des bijoux et des pièces rares de monnaie anglaise. Le montant total du vol est évalué à 10 000 francs.",
      "Les cambrioleurs, dérangés, ont laissé sur une table leurs outils de forçage. Ils sont activement recherchés par M. Rouffana, commissaire de police du quartier."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de travail rue Jouvecet",
    "summary": "Un grave accident est survenu rue Jouvecet : Jean Mérigeot, charretier à la Compagnie du gaz, a eu la jambe broyée après une chute sous les roues de son propre tombereau.",
    "paragraphs": [
      "Un charretier de la Compagnie du gaz, Jean Mérigeot, a été écrasé par un tombereau, hier matin, vers neuf heures, en passant rue Jouvecet. Il a glissé sur la chaussée et est tombé sous le véhicule qu'il conduisait.",
      "Le malheureux a eu la jambe droite broyée et a été transporté d'urgence à l'hôpital Boucicaut. Son état est jugé grave."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Exploit d'ivrognes à Montmartre",
    "summary": "À Montmartre, deux individus en état d'ivresse ont été interpellés après avoir ouvert le feu sur un bec de gaz. La police a saisi plusieurs revolvers et des munitions chez l'un d'eux.",
    "paragraphs": [
      "Hier matin, vers une heure, un journalier nommé Jean Leroy, âgé de trente-cinq ans, sortit en titubant d'un débit de vins de la rue Guy-Patin, à Montmartre. Il tira un revolver de sa poche et se mit à faire feu sur un bec de gaz.",
      "Un second individu, Auguste Sausay, âgé de vingt-cinq ans, accourut et, armé lui aussi d'un revolver, essaya d'abattre le bec de gaz. Les deux hommes furent conduits au poste de police de la mairie du XVIIIe arrondissement.",
      "Auguste Sausay fut trouvé nanti de trois revolvers et de deux boîtes contenant cent quarante-quatre cartouches. Jean Leroy et Auguste Sausay seront poursuivis pour ivresse, port d'armes prohibées, tapage nocturne et outrage aux agents."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression au vitriol rue Ordener",
    "summary": "À la suite d'une violente dispute, une jeune couturière a projeté du vitriol sur son amant et un voisin intervenant. Ce dernier a été grièvement brûlé au visage et aux mains.",
    "paragraphs": [
      "Un employé de commerce, M. Léon Trépon, vivait depuis quelque temps en mésintelligence avec une jeune couturière, Berthe Noblet. Hier matin, à la suite d'une discussion violente, il lui ordonna de quitter son domicile.",
      "Berthe Noblet, devenue furieuse, lança à son amant et à un voisin, M. Gaston Derinot qui tentait de s'interposer, le contenu d'une fiole de vitriol qu'elle dissimulait.",
      "M. Gaston Derinot a été grièvement atteint, brûlé au côté droit de la figure et aux deux mains. Berthe Noblet a été arrêtée et mise à la disposition de M. Carpin, commissaire de police du quartier de Clignancourt."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un bœuf furieux aux abattoirs",
    "summary": "Un bœuf échappé du marché aux bestiaux de la Villette a semé la panique aux abattoirs, provoquant des dégâts considérables avant d'être abattu par la troupe.",
    "paragraphs": [
      "Hier matin, vers dix heures, un bœuf furieux s'est échappé du marché aux bestiaux de la Villette et s'est engagé dans les abattoirs, causant une chasse mouvementée au cours de laquelle plusieurs autres bêtes furent éventrées.",
      "Le bœuf furieux fut enfin abattu par un garde républicain qui, armant son fusil, lui logea deux balles dans la tête."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Sauvetage dans le canal Saint-Martin",
    "summary": "Une jeune fille de seize ans, Juliette Lutary, a tenté de mettre fin à ses jours en se jetant du pont du Faubourg-du-Temple. Elle a été sauvée de justesse par un fleuriste.",
    "paragraphs": [
      "Dans la matinée d'hier, une jeune fille de seize ans, Juliette Lutary, fuyant le domicile familial, s'est rendue sur le pont du Faubourg-du-Temple avec l'intention de se jeter dans le canal Saint-Martin.",
      "Un jeune homme de vingt ans, M. Auguste Gelez, fleuriste, s'élança à son secours, plongeant du haut du même pont, et réussit à la ramener sur la berge, vivante encore."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "Bizarreries à l'octroi de Paris",
    "summary": "Des usagers signalent des incohérences administratives dans la perception des droits de timbre à l'octroi, créant des disparités tarifaires injustifiées entre différentes portes de la capitale.",
    "paragraphs": [
      "Un de nos lecteurs nous signale, dans l'octroi de Paris, certaines bizarreries administratives concernant la perception des droits et des timbres.",
      "À la porte de la Chapelle, le cumul des taxes de timbre rend les marchandises plus onéreuses qu'à la porte d'Aubervilliers pour une même opération. On suggère une réforme visant à simplifier ces registres."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Chronique du Tour de Paris",
    "summary": "Une série d'accidents et de drames domestiques frappe la banlieue parisienne : à Courbevoie, Puteaux, Clichy, Gennevilliers, Saint-Denis et Pantin, le froid et le malheur ont éprouvé la population ouvrière.",
    "paragraphs": [
      "Courbevoie : Le refroidissement a fait deux victimes, Émile Juze, ouvrier maçon, et Jacques Thomas, tailleur de pierres, tous deux frappés de congestion par le froid.",
      "Puteaux : Jeanne Charron, âgée de quarante ans, a été surprise en flagrant délit de vol dans une villa et envoyée au dépôt.",
      "Clichy : Un ouvrier électricien, Gustave Félix, a fait une chute grave dans une cage d'escalier et a été transporté à l'hôpital Beaujon.",
      "Gennevilliers : Mme veuve Charles Lartiganet a été retrouvée asphyxiée par son poêle et transportée dans un état désespéré à l'hôpital Beaujon.",
      "Saint-Denis : Un ouvrier est soupçonné d'avoir incendié une usine rue de la Briche après un conflit avec son contremaître.",
      "Pantin : Un apprenti de seize ans, Joseph Hasanfratz, est tombé d'une hauteur de huit mètres à travers une toiture vitrée et a été grièvement blessé."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Actualité",
    "title": "Accidents en province",
    "summary": "La province est endeuillée par plusieurs accidents graves : une collision ferroviaire dans l'Oise, une explosion meurtrière à la sucrerie de Thumeries et une tentative d'assassinat à Privas.",
    "paragraphs": [
      "Clermont (Oise) : Un train de voyageurs a heurté un train de marchandises stationné en gare, à cause d'un brouillard intense. Aucun mort n'est à déplorer.",
      "Lille : Un générateur a fait explosion dans la fabrique de sucre Béghin, à Thumeries. Plusieurs ouvriers seraient tués.",
      "Privas : Une tentative d'assassinat a été commise par un nommé Reboul sur la personne de M. Sagues, huissier, lors d'une saisie. Le meurtrier est en fuite."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Sports",
    "title": "Défis et programmes sportifs",
    "summary": "Le congrès international d'automobilisme se prépare à débattre des enjeux de la locomotion, tandis que le cycliste Jacquelin défie Ehrmann pour une confrontation prochaine à Alger.",
    "paragraphs": [
      "Le programme du congrès international d'automobilisme, présidé par M. Michel Lévy, a été publié. Il traitera des questions historiques, techniques et économiques liées à la locomotion.",
      "Le coureur cycliste Jacquelin annonce son intention de vider un différend avec Ehrmann lors d'un match à Alger, le 15 février."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Feuilleton",
    "title": "Deux passions (Le Secret de Roland)",
    "summary": "Le mystère entourant la mort de Michelle est levé : elle avait assassiné le père de Gaston et d'Horace. Malgré la réconciliation, le destin des protagonistes est assombri par le refus catégorique de la duchesse.",
    "paragraphs": [
      "Plus d'une fois, elle avait manifesté la joie de ce retour ; un changement s'était fait en elle, comme si elle eût retrouvé une protectrice et une amitié perdues. Jamais il n'avait osé aborder ce sujet avec elle.",
      "À quoi bon ? Il lui en voulait même de la supériorité qu'il était forcé de lui reconnaître. Elle le tenait à distance d'un regard. Elle lui imposait une sorte de respect et arrêtait sur ses lèvres, d'un geste ou d'un coup d'œil, les paroles qui auraient pu la blesser.",
      "Et puis, pourquoi tant de raisons ? Il la haïssait parce qu'elle était l'obstacle entre lui et l'objet de sa passion. C'était tout et c'était assez. Il en était arrivé à ne plus discuter l'horreur du crime ; il en admettait seulement la nécessité.",
      "Il voulait la supprimer pour être maître de son propre sort et apporter à cette Valentine le bonheur.",
      "Elle attendait que Gaston eût exprimé sa pensée tout entière. L'explication que nous vous devons à tous sera complète. Gaston raconta alors dans quelles circonstances s'était produite la mort de Michelle. Enfin, la suprême révélation que les deux frères avaient reçue : c'était Michelle qui avait assassiné leur père.",
      "À cette révélation, ils ne purent retenir des exclamations de surprise et de joie.",
      "Gaston reprit, essayant de surmonter son émotion : « Lorsque Michelle eut terminé cette confession, nous avons voulu qu'elle la recommençât pour réparer le mal qu'elle avait fait. » Il la tendit à Villefort : « Elle vous appartient. »",
      "Le marquis de Vivarez se souleva lourdement de son fauteuil : « Eh, pardieu ! est-ce que ce n'est pas visible pour tout le monde ? Celui qu'elle aime, c'est toi. » Horace, chancelant, regardait Colette : « Elle m'aime ! Elle m'aime ! »",
      "Gaston reprit : « Nous savions que mademoiselle Nathalier vous aimait. Nous lui offrîmes de choisir : ou cette confession resterait à jamais lettre morte, ou cette confession lui serait remise le lendemain du mariage. » Et Colette accepta.",
      "Gaston entoura Pierre de ses bras et le sauva alors qu'il tentait de se pendre. Cette réconciliation devait avoir pour effet immédiat et naturel de réparer au plus tôt le mal que nous étions près de commettre.",
      "« Colette, leur pardonnez-vous ? » « Oui, car ils ont beaucoup souffert. » Les deux frères s'inclinaient : « Vous serez heureuse, mademoiselle. Nous avons résolu de partir pour oublier. »",
      "Lorsqu'ils eurent disparu, Horace porta à ses lèvres les doigts tremblants de la gentille Colette. « Et maintenant, puisque je vous aime et puisque vous m'aimez, voulez-vous être ma femme ? » Pour la seconde fois, Colette eut le même geste de frayeur.",
      "La duchesse, froide, glacée, laissa tomber ce seul mot : « Jamais. »"
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Faits Divers",
    "title": "Les lettres mystérieuses de Georges Dufresne",
    "summary": "Soupçonné par son entourage après un passage suspect à la poste, le mari de Suzanne essuie un refus financier de son ami Bonnemare et semble céder au désespoir face à une issue inéluctable.",
    "paragraphs": [
      "Le mari de Suzanne sortit deux minutes après de la poste, adressa un salut amical à l'aubergiste et à Louise, enfourcha sa bécane et descendit la rue pour regagner la route d'Orvilliers.",
      "L'ancienne femme de chambre dit à son mari : « As-tu vu comme il a rougi en nous voyant tous deux ? Sois-en sûr, il n'a pas la conscience nette. » Le gros Bousquet haussa les épaules : « Tu ne vas pourtant pas dire que c'est un grand crime d'apporter des lettres à la poste ! »",
      "Plus tard, le mari de Suzanne reçut une réponse de son ami Bonnemare : « Désolé, je n'ai pas un sou de disponible. Si je les croyais sérieusement embarrassés, mais avec une position comme la mienne, il est impossible que tu ne trouves pas ce qui te manque. »",
      "C'était un refus poli, mais net. Ce jour-là, le mari de Suzanne regarda une fois de plus, avec une fixité de mauvais augure, cette rivière qu'il avait si souvent contemplée, et il murmura : « Le sort en est jeté. »"
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Marché",
    "title": "Marché aux bestiaux de la Villette du lundi 29 janvier",
    "summary": "Le marché aux bestiaux de la Villette du 29 janvier affiche une tendance baissière. Les ventes de bœufs et de porcs s'avèrent difficiles, tandis que les cours des veaux et des moutons demeurent relativement stables.",
    "paragraphs": [
      "Bœufs : Vente très difficile et prix péniblement soutenus. On cote les Limousins de 67 à 70 centimes.",
      "Veaux : Vente difficile, mais prix maintenus.",
      "Moutons : Vente moyenne, prix inchangés.",
      "Porcs : Vente difficile, marquée par une baisse de 10 centimes."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Chronique",
    "title": "Explication entre la duchesse et son fils",
    "summary": "Madame de Villefort convoque son fils, le duc Horace, pour lui signifier formellement son opposition à un projet de mariage, invoquant la peur du ridicule pour justifier son refus inflexible.",
    "paragraphs": [
      "Cette scène s'était passée depuis une heure à peine, lorsque Madame de Villefort fit prier le duc Horace de venir la rejoindre chez elle.",
      "Horace connaissait sa mère. Il savait combien elle était inflexible sur certaines questions, mais il savait aussi combien profondément il en était aimé. Il entra chez elle et s'avança vers elle respectueusement.",
      "« Horace, dit-elle, je tiens à avoir avec vous une explication nécessaire. Je ne veux pas et je ne voudrai jamais que vous soyez le mari de cette jeune fille. »",
      "« Pourquoi ? » dit-il simplement.",
      "« Parce que je ne veux pas me rendre ridicule. »"
    ]
  }
];
