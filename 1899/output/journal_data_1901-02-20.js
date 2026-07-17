// Date: 1901-02-20
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-02-20 (Version Restaurée, 31 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Science et Exploration",
    "title": "La course au pôle Nord",
    "summary": "Tandis que le duc des Abruzzes achève son expédition, sept nouvelles tentatives arctiques sont annoncées pour 1901. Explorateurs et savants rivalisent d'ingéniosité, du brise-glace au sous-marin, pour percer l'énigme du pôle.",
    "paragraphs": [
      "Tant que le sphinx polaire n'aura pas livré son secret, il se trouvera des Œdipes pour affronter le monstre et tenter de déchiffrer son énigme. Le duc des Abruzzes est à peine de retour qu'on annonce déjà, pour la seule année 1901, le départ imminent de sept expéditions arctiques.",
      "L'Ermack, navire brise-glace russe, est une prouesse technique en acier. Ses caractéristiques lui permettent de briser les glaces les plus fortes, bien que son action soit limitée aux eaux tempérées.",
      "D'autres explorateurs comme le Suédois Sverdrup ou l'Américain Baldwin préparent leurs tentatives, ce dernier misant sur un ballon de conception nouvelle.",
      "Le commandant Banendahl, ex-officier allemand, a quant à lui tenté l'aventure sur un simple bateau de pêche, le Matador, emportant des vivres pour trois ans.",
      "Une autre expédition, celle du savant autrichien M. Anschnetz, projette d'atteindre le pôle en sous-marin, une idée accueillie avec scepticisme par les spécialistes.",
      "Le capitaine Bernier, Canadien d'origine française, est quant à lui soutenu par la confiance des savants. Il prévoit de laisser son navire se frayer un chemin dans la banquise au gré des courants sur plusieurs années.",
      "Le nombre d'expéditions en cours — suédoise, américaine, russe, autrichienne, canadienne — témoigne de l'attraction irrépressible qu'exerce le pôle Nord."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Science et Exploration",
    "title": "L'exploration du pôle Sud",
    "summary": "Alors que l'expédition franco-belge de M. de Gerlache est ajournée, l'Allemagne prépare son expédition scientifique vers les terres australes. La France, elle, semble désintéressée par cette émulation polaire.",
    "paragraphs": [
      "Le pôle Sud a jusqu'ici moins attiré l'attention. Deux expéditions, l'une franco-belge et l'autre allemande, devaient se diriger vers les terres australes.",
      "L'expédition franco-belge, sous la direction de M. de Gerlache, a dû être ajournée en raison de l'insuffisance des soutes à charbon du navire.",
      "L'expédition allemande, menée par le professeur Erich von Drygalski, partira en août 1901 pour établir des stations d'observations magnétiques et météorologiques aux îles Kerguelen avant de progresser vers le pôle.",
      "Face à cette émulation internationale, la France demeure étrangement indifférente, ce qui attriste ceux qui regrettent le déclin de notre curiosité scientifique traditionnelle."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Le nouveau ministère italien",
    "summary": "Le ministère Zanardelli s'installe en Italie sous le signe de la concentration nationale. Le roi Victor-Emmanuel III place son autorité au-dessus des partis pour favoriser une diplomatie apaisée.",
    "paragraphs": [
      "Le nouveau ministère italien, présidé par M. Zanardelli, représente une politique de concentration difficile à réaliser en Italie. Il comprend des membres de diverses nuances politiques, une véritable « combinazione ».",
      "Le roi Victor-Emmanuel III a fait preuve de jugement en s'appuyant sur tous les partis, se plaçant au-dessus des compétitions individuelles.",
      "Au point de vue extérieur, ce ministère ne semble pas inféodé à l'Allemagne. Nous souhaitons que l'amélioration des relations avec la France se poursuive, notre pays respectant l'indépendance de ce peuple frère."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Actualité",
    "title": "Conseil des ministres",
    "summary": "Réunis hier à l'Élysée sous la présidence de M. Loubet, les ministres ont expédié les affaires courantes, M. Waldeck-Rousseau étant absent pour raisons de santé.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin à l'Élysée, sous la présidence de M. Loubet. M. Waldeck-Rousseau était absent pour raison de santé.",
      "Le conseil a procédé à l'expédition des affaires courantes."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Actualité",
    "title": "Les affaires de Chine",
    "summary": "Le gouvernement chinois a officiellement présenté ses regrets pour les récents incidents diplomatiques, promettant la protection des agents français à Mong-Tsé et Yunnan-Sen.",
    "paragraphs": [
      "Le ministre des Affaires étrangères a annoncé que le gouvernement chinois a été averti du retour des agents français à Mong-Tsé et Yunnan-Sen.",
      "La Chine a désigné un mandarin de 1re classe pour recevoir nos agents et présenter ses regrets pour les incidents survenus, tout en garantissant la protection des nationaux français."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Actualité",
    "title": "Le directeur de la Cavalerie",
    "summary": "Mouvement de personnel au ministère de la Guerre : le colonel Gillain est nommé directeur de la cavalerie. Par ailleurs, le ministre de la Marine signe un décret sur la production des poudres.",
    "paragraphs": [
      "Le ministre de la Guerre a nommé le colonel Gillain directeur de la cavalerie au ministère, en remplacement du général Branche.",
      "Le ministre de la Marine a fait signer un décret relatif à la participation de l'administration de la Marine à la fabrication des poudres."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "M. Doumer et l'occupation du Touat",
    "summary": "L'agence Havas dément le retour de M. Doumer. Dans le Touat, le général Servières progresse vers l'Adrar et Timmi, préparant l'administration locale selon les usages des chefs du pays.",
    "paragraphs": [
      "L'agence Havas dément formellement les rumeurs annonçant le retour définitif de M. Doumer en France.",
      "Concernant l'occupation du Touat, le général Servières poursuit sa marche sur Adrar et Timmi sans avoir eu à user de la force, profitant de l'ascendant pris sur les populations locales.",
      "Le général prévoit d'organiser l'administration locale en stricte conformité avec les mœurs et les traditions des chefs du pays."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Événements à Djibouti",
    "summary": "Djibouti se prépare à accueillir sir Clement Hill, haut responsable britannique. Le comte Édouard Wickembourg a transité par la colonie française lors de son exploration en Éthiopie.",
    "paragraphs": [
      "On attendait à Djibouti la venue de sir Clement Hill, surintendant des protectorats britanniques. La colonie française s'apprêtait à le recevoir avec tous les égards dus à son rang.",
      "Par ailleurs, le comte Édouard Wickembourg a été accueilli avec courtoisie lors de son passage dans la colonie, dans le cadre d'une expédition explorant les régions éthiopiennes."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une lugubre découverte à Lyon",
    "summary": "Macabre découverte dans le Rhône : le passeur du bac de Traille a trouvé une caisse contenant un tronc humain sectionné. Une enquête est en cours pour identifier la victime.",
    "paragraphs": [
      "Le passeur du bac de Traille a découvert dans le Rhône, sur un banc de sable, une caisse renfermant la partie supérieure d'un tronc de femme.",
      "Les chairs étaient nettement sectionnées, laissant supposer un crime récent. Le parquet s'est immédiatement rendu sur les lieux et les fragments ont été transportés à la morgue. Des recherches actives sont en cours pour identifier la victime."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Trois enfants asphyxiés à Limoges",
    "summary": "Drame familial près de Limoges : trois enfants, laissés seuls avec un réchaud à charbon, ont été victimes d'asphyxie. Le plus jeune a succombé, tandis que ses deux sœurs ont pu être sauvées.",
    "paragraphs": [
      "La veuve Terret, demeurant près de Limoges, avait laissé trois enfants seuls en compagnie d'un réchaud à charbon de bois. À son retour, elle les a trouvés inanimés, terrassés par les émanations toxiques.",
      "Malgré les soins empressés, le petit Missieux, âgé de vingt-deux mois, a succombé. Ses deux sœurs, bien que dans un état de grande faiblesse, ont pu être réanimées par le médecin appelé en urgence."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "L'impérialisme anglo-saxon",
    "summary": "L'impérialisme et les doctrines belliqueuses triomphent aux États-Unis après la victoire de M. McKinley, mais l'annexion des Antilles et des Philippines engendre des résistances qui fragilisent cette politique expansionniste.",
    "paragraphs": [
      "L'impérialisme et les doctrines belliqueuses triomphent non seulement en Angleterre, mais aussi aux États-Unis après la victoire de M. McKinley.",
      "La conquête des Antilles et des Philippines n'a point apporté la paix attendue, les populations locales protestant vivement contre le régime imposé. La situation coloniale de l'Union condamne, en réalité, la politique d'expansion à outrance menée par M. McKinley."
    ]
  },
  {
    "id": 12,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le drame de Trilport",
    "summary": "L'enquête sur le meurtre de la femme Laine piétine. L'état du corps, atrocement brûlé, rend les constatations médicales incertaines, tandis que le mari, dont l'attitude demeure suspecte, reste sous le coup de l'instruction.",
    "paragraphs": [
      "L'enquête sur le drame de Trilport, relatif au meurtre de la femme Laine, se complique singulièrement. Le cadavre a été découvert dans un état tel, par suite des brûlures atroces dont il porte les traces, qu'il est fort malaisé aux experts de déterminer la cause exacte du décès, bien qu'une blessure profonde constatée au cuir chevelu eût pu, à elle seule, entraîner une issue fatale.",
      "Laine, le mari, persiste à soutenir qu'il n'est point un assassin, mais son attitude, jugée singulière et évasive, maintient la suspicion des autorités. Pour l'heure, il a été laissé en liberté provisoire, en attendant que les nouveaux développements de l'instruction viennent éclaircir les zones d'ombre de cette ténébreuse affaire."
    ]
  },
  {
    "id": 13,
    "page": 1,
    "category": "Vie Parisienne",
    "title": "Le Mardi Gras à Paris",
    "summary": "Sous un soleil printanier, Paris a célébré Mardi Gras dans l'allégresse. Une foule immense et carnavalesque a investi les boulevards, encadrée par une police vigilante assurant le maintien du bon ordre public.",
    "paragraphs": [
      "La journée de Mardi Gras a été parfaite, le soleil ayant largement favorisé les promeneurs parisiens. Les boulevards ont été envahis par une foule nombreuse, composée de masques et de curieux venus célébrer les derniers feux de cette liesse populaire.",
      "Les autorités ont veillé scrupuleusement au maintien du bon ordre, tandis que les marchands ambulants assuraient, au milieu du tumulte joyeux, l'animation traditionnelle de cette grande fête parisienne."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Carnaval",
    "title": "La journée de Mardi Gras à Paris",
    "summary": "Paris a célébré Mardi Gras sous le signe de l'effervescence et des confettis. Entre simulacres de batailles entre Boërs et volontaires anglais, la fête a bravé le froid et la neige pour durer jusqu'au matin.",
    "paragraphs": [
      "Le Mardi gras à Paris a été marqué par une foule dense ; si l'on a pu constater peu de masques réellement originaux, on a observé en revanche une profusion de travestissements grotesques, de clowns et de musiciens ambulants parcourant les artères de la capitale.",
      "Un incident des plus gracieux s'est produit rue Drouot, où un groupe d'enfants, costumés en volontaires anglais et en Boërs, a simulé une bataille mémorable, amusant vivement la foule massée sur le passage.",
      "La journée, qui a vu les chaussées se couvrir d'un tapis épais de confettis, s'est prolongée avec entrain jusqu'au petit matin, nonobstant le froid piquant et les chutes de neige qui n'ont en rien entamé l'ardeur des fêtards."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Carnaval",
    "title": "Les réjouissances sur la Rive gauche",
    "summary": "Malgré l'absence de cortèges officiels, la Rive gauche a vibré au rythme des facéties des étudiants des Beaux-Arts, tandis qu'une noble initiative caritative apportait joie et friandises aux enfants des quartiers nécessiteux.",
    "paragraphs": [
      "Sur la rive gauche, en dépit de l'absence de cortèges officiels, l'animation fut fort vive. Le quartier latin, sous l'impulsion des étudiants et des architectes de l'École des Beaux-Arts, a vu défiler une singulière cathédrale en carton, suscitant l'hilarité des passants.",
      "L'ambiance, volontiers bon enfant, se cristallisa autour des combats de confettis qui faisaient rage aux abords des cafés, tandis que des fêtes privées et des bals d'enfants étaient organisés avec entrain dans les mairies et les écoles de l'arrondissement.",
      "À noter qu'une initiative des plus généreuses permit, grâce à une souscription bienveillante, la distribution de généreuses quantités de confettis et de bonbons aux enfants indigents des 5e et 14e arrondissements, leur offrant ainsi un intermède de douceur bien mérité."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Étranger",
    "title": "La situation en Chine",
    "summary": "Le comte de Waldersee finalise ses préparatifs d'expédition vers Pékin malgré les réticences américaines et russes. La cour impériale tente un apaisement diplomatique jugé insuffisant par les puissances étrangères.",
    "paragraphs": [
      "Le comte de Waldersee a arrêté les plans pour la nouvelle expédition à Pékin, bien que les États-Unis et la Russie ne participent pas à cette opération.",
      "Le corps diplomatique juge insuffisante la réponse du gouvernement chinois concernant le châtiment des fonctionnaires coupables des récents troubles.",
      "Le prince Tuan et le duc Lan ont été exilés ; en outre, des honneurs posthumes ont été décernés à des fonctionnaires exécutés l'été passé, marquant un revirement diplomatique notable de la part de la cour impériale."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Séjour du roi Léopold en France",
    "summary": "Le roi des Belges, accompagné de la princesse Clémentine, effectuera une escale à Paris ce jeudi avant de poursuivre son itinéraire ferroviaire à destination de Villefranche.",
    "paragraphs": [
      "Le roi des Belges, accompagné de la princesse Clémentine, doit arriver à Paris ce jeudi avant de se rendre à Villefranche."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Fraudes sur le transport de grains à Anvers",
    "summary": "Une affaire de malversation sur les cargaisons de céréales a éclaté à Anvers, suite aux aveux d'une corporation locale impliquée dans le détournement de marchandises.",
    "paragraphs": [
      "Une vaste fraude portant sur des quantités importantes de grains a été découverte à Anvers, après qu'une corporation a avoué avoir détourné des chargements destinés à la vente."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Acte de banditisme à Vilvorde",
    "summary": "Un crime odieux a été commis à Vilvorde, où trois malfaiteurs ont fait irruption chez deux rentières. Mme Sidon, sauvagement agressée, a succombé à ses blessures.",
    "paragraphs": [
      "Deux rentières ont été sauvagement agressées à leur domicile à Vilvorde par trois individus. L'une des victimes, Mme Sidon, a succombé à ses blessures après avoir été mortellement frappée lors de l'agression."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Agent de police assassiné à Anvers",
    "summary": "Un drame s'est produit dans un cabaret d'Anvers : un agent de police a trouvé la mort sous les coups d'un malfaiteur alors qu'il procédait à son expulsion.",
    "paragraphs": [
      "Un agent de police a été mortellement poignardé à Anvers par un individu violent qu'il tentait d'expulser d'un cabaret où il causait du scandale."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Étranger",
    "title": "Politique espagnole",
    "summary": "M. Sagasta, tout en manifestant sa défiance vis-à-vis d'une issue négociée par M. Silvela, affirme son intention de soutenir le ministère Azcarraga afin de préserver la stabilité politique du royaume d'Espagne.",
    "paragraphs": [
      "M. Sagasta a déclaré publiquement qu'il ne croyait guère à une solution providentielle apportée par M. Silvela. En conséquence, il a résolu de soutenir le maintien du ministère Azcarraga, jugeant cette attitude nécessaire pour prévenir une crise politique en Espagne."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Guerre au Transvaal",
    "title": "Mouvements du général De Wet",
    "summary": "La progression du général De Wet dans la colonie du Cap ravive les craintes britanniques d'une insurrection hollandaise, tandis que Lord Kitchener confirme la poursuite acharnée des opérations de guérilla.",
    "paragraphs": [
      "La présence signalée du général De Wet dans la colonie du Cap jette un trouble profond parmi les autorités britanniques, lesquelles redoutent désormais une insurrection généralisée des colons hollandais.",
      "Lord Kitchener fait savoir que De Wet poursuit sa progression vers le Nord, tout en maintenant une tactique offensive de guérilla contre les colonnes et les troupes britanniques opérant dans le secteur."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Social",
    "title": "La grève à Montceau-les-Mines",
    "summary": "À Montceau-les-Mines, un conflit social s'intensifie, illustrant les tensions persistantes entre le personnel syndiqué et la direction, déterminés à faire aboutir leurs revendications collectives.",
    "paragraphs": [
      "Une grève vient d'éclater à Montceau-les-Mines, marquant une étape supplémentaire dans l'organisation revendicatrice des ouvriers, malgré les efforts déployés par la nouvelle direction pour moderniser l'exploitation.",
      "Réunis à la salle Pezerat, les ouvriers syndiqués ont réitéré avec force leur volonté de demeurer unis jusqu'au triomphe complet de leurs revendications salariales et professionnelles."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Première de la Fille de Tabarin",
    "summary": "L'Opéra-Comique inaugure ce soir « La Fille de Tabarin », comédie lyrique de MM. Sardou, Ferrier et Pierné, en présence du Président de la République venu honorer cette création majeure.",
    "paragraphs": [
      "C'est ce soir qu'a lieu, sur la scène de l'Opéra-Comique, la première représentation de « La Fille de Tabarin », comédie lyrique en trois actes et quatre tableaux, signée de MM. Victorien Sardou et Paul Ferrier, sur une musique de M. G. Pierné.",
      "Le Président de la République a fait savoir qu'il assisterait personnellement à cette représentation inaugurale de l'œuvre."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Louise à l'Opéra-Comique",
    "summary": "Le chef-d'œuvre de M. Gustave Charpentier, « Louise », connaît un triomphe exceptionnel : un an après sa création le 2 février dernier, l'opéra atteindra vendredi sa centième représentation.",
    "paragraphs": [
      "Vendredi prochain, « Louise » célébrera sa centième représentation à l'Opéra-Comique, accomplissant ainsi un succès éclatant seulement un an après sa création, survenue le 2 février dernier."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Nouveautés au Vaudeville",
    "summary": "M. Abraham Dreyfus a fait lecture au théâtre du Vaudeville de sa comédie inédite « Le Fer rouge ». L'œuvre, dont la distribution est fixée, précédera prochainement sur l'affiche la pièce « La Petite Parquise ».",
    "paragraphs": [
      "M. Abraham Dreyfus a fait lecture aux artistes du théâtre du Vaudeville d'une comédie inédite en deux actes, intitulée « Le Fer rouge », dont la distribution comprend MM. Gildès, Muma, Leubas, ainsi que Mmes Thomassin et Moriet.",
      "Cette comédie précédera sur l'affiche « La Petite Parquise », dont les répétitions sont poussées avec activité par M. Porel."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Répétitions de Quo Vadis",
    "summary": "La mise en scène monumentale de « Quo Vadis » à la Porte-Saint-Martin mobilise plus de soixante-deux acteurs. M. Emile Moreau propose une adaptation en dix tableaux riche en innovations scéniques.",
    "paragraphs": [
      "« Quo Vadis », que l'on répète activement à la Porte-Saint-Martin, ne compte pas moins de soixante-deux rôles, sans compter le ballet et la figuration.",
      "Ce drame nécessitera un déploiement de personnel et une mise en scène d'une ampleur inédite.",
      "M. Emile Moreau a condensé le livre de Sienkiewicz en dix tableaux, dont plusieurs comporteront de véritables innovations en matière d'effets scéniques."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Réouverture des Bouffes-Parisiens",
    "summary": "Les Bouffes-Parisiens annoncent leur prochaine réouverture avec « Les Travaux d'Hercule », une nouvelle opérette de MM. de Caillavet, de Flers et Claude Terrasse, avec Mlle Léo Demoulin et M. Colas.",
    "paragraphs": [
      "La réouverture des Bouffes-Parisiens se fera très prochainement avec la nouvelle opérette de MM. de Caillavet, de Flers et Claude Terrasse, intitulée « Les Travaux d'Hercule », pour laquelle M. Tarride a engagé Mlle Léo Demoulin et M. Colas."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Sports",
    "title": "Statistique des accidents de la circulation",
    "summary": "Les statistiques des accidents de la circulation du mois de décembre dernier mettent en évidence une prédominance des accidents liés aux chevaux par rapport aux automobiles et bicyclettes.",
    "paragraphs": [
      "Statistique des accidents causés dans le courant du mois de décembre dernier par les divers moyens de transport :",
      "Cheval : 123 accidents, 62 morts et 656 blessés.",
      "Automobile : 12 accidents, 1 mort et 11 blessés.",
      "Bicyclette : 38 accidents, 3 morts et 35 blessés.",
      "Chemin de fer : 6 accidents, 12 morts et blessés."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Sports",
    "title": "Démarches du Touring-Club de France",
    "summary": "Le Touring-Club de France a obtenu du ministère de l'Intérieur des avancées sur la taxe des prestations et l'exemption des motocycles, désormais distingués des voitures dans la future loi de finances.",
    "paragraphs": [
      "Le Touring-Club de France communique : le président du Touring-Club, M. Gamard, président du comité de contentieux de l'Automobile-Club de France, et M. P. Dauvert, membre du comité de contentieux du Touring-Club, ont été reçus hier matin par M. Bruman, directeur de l'administration départementale et communale au ministère de l'Intérieur, au sujet de la requête concernant les prestations.",
      "Le ministre est disposé, d'accord avec son collègue des Finances, à faire insérer dans la prochaine loi de Finances de 1901 une disposition fixant une taxe maximum que les conseils généraux ne pourront dépasser pour cette imposition.",
      "Il est disposé, d'autre part, à accueillir favorablement la réclamation concernant l'assimilation faite à tort des motocycles aux voitures ; les motocycles en seraient dorénavant dispensés."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Faits Divers",
    "title": "Nouvelles maritimes et nautiques",
    "summary": "Actualités du 28 novembre 1899 : inquiétudes sur le vapeur Otta, commandes navales au Havre, renflouage réussi à Cherbourg et le tragique décès du capitaine du vapeur Laura à Halifax.",
    "paragraphs": [
      "Fécamp : On est sans nouvelles du vapeur norvégien Otta, parti le 10 janvier de Mobile, en Alabama, avec un chargement destiné à la maison Constantin, qui devait arriver à destination depuis une quinzaine de jours.",
      "Le Havre : La Société parisienne des voiliers français vient de commander aux Forges et Chantiers de Graville deux trois-mâts de 3 000 tonnes chacun.",
      "Cherbourg : Le dundee anglais Lewis-Mann, jeté à la côte lors de la tempête du 5 février dernier, a été renfloué avec succès ce matin.",
      "Halifax : Le vapeur anglais Laura, parti de Hambourg depuis vingt-cinq jours, est entré en relâche à court de charbon. Le capitaine, M. Andrew Adair, épuisé par les épreuves, a succombé après avoir absorbé une dose de laudanum."
    ]
  }
];
