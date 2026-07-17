// Date: 1900-08-24
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-08-24 (Version Restaurée, 46 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique Historique",
    "title": "Le Bois de Paris",
    "summary": "Une rétrospective historique sur le Bois de Boulogne, ancienne forêt royale de Rouvray, devenue sous Napoléon III et la Ville de Paris en 1852 la promenade publique prisée des Parisiens.",
    "paragraphs": [
      "Il est probable que la plupart des personnes, pour ne pas dire toutes, qui vont, avant ou après le dîner, chercher la fraîcheur sous les ombrages du bois appelé aujourd'hui le Bois de Boulogne, et qui devrait plutôt s'intituler le Bois de Paris, ne se préoccupent d'en connaître ni l'origine ni l'histoire.",
      "Le Bois, connu pendant longtemps sous le nom de forêt de Rouvray, avait autrefois une étendue considérable. Il couvrait toute la surface comprise entre la Seine, Auteuil, Passy, Chaillot et Clichy.",
      "L'abbé Lebœuf rapporte que la forêt de Rouvray fut donnée le 28 février 717 par Chilpéric II à l'abbaye de Saint-Denis. Un édit du 10 juillet 1489 décida que la forêt de Rouvray prendrait le nom de Bois du village de Boulogne.",
      "Pendant longtemps, le Bois fut réservé pour les chasses royales. Sous le règne d'Henri II, il fut entouré de murs. Napoléon Ier ordonna de grands travaux pour la remise en état du Bois. En 1852, la Ville de Paris en devint propriétaire pour le transformer en la promenade que nous connaissons aujourd'hui.",
      "Nous demandons que, sous prétexte d'augmenter les revenus du Bois, on ne multiplie pas outre mesure les concessions. Ce n'est pas par ses pavillons et par ses restaurants que le Bois de Boulogne est beau, c'est par ses arbres. Respectons les arbres du Bois de Boulogne."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Autour d'un berceau",
    "summary": "Henri, tourmenté par le sort d'une mystérieuse malade, confie à Mme Lipray son intention de réparer les erreurs du passé et de révéler le refuge secret de son père à Larignies.",
    "paragraphs": [
      "Le médecin ayant mélangé différents liquides dans un verre à expériences, il en versa le contenu dans un flacon et l'envoya à la mansarde numéro 8.",
      "Henri, resté seul, repensa à la confession de sa mère et à l'Inconnue qui souffrait là-haut. Le lendemain, il retrouva madame Lipray et l'informa que la malade avait passé une bonne nuit malgré son silence farouche.",
      "La conversation vira sur la découverte du médecin. Sa mère l'encouragea à ne pas cacher son travail. Henri finit par révéler le secret de son père : « Je dois rendre le bonheur à des êtres qui méritent d'être heureux. Je sais où il s'est retiré, à Larignies, dans la Haute-Saône. »"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Actualité Internationale",
    "title": "Les événements de Chine",
    "summary": "L'armée internationale a pris Pékin après un assaut intensif. Le gouvernement impérial est en fuite, tandis que les forces russes progressent, notamment à Mergen, face à une situation toujours instable.",
    "paragraphs": [
      "Par une dépêche reçue hier à Saint-Pétersbourg, le général Liénévitch a donné une relation de l'entrée de l'armée internationale dans Pékin. La ville est en grande partie occupée.",
      "Dans la nuit du 13 au 14 août, les troupes russes ont donné l'assaut à la porte occidentale. Le bombardement a duré quatorze heures. Le gouvernement impérial est en fuite et les ministres des puissances ont été trouvés dans un état critique.",
      "Le Messager du Gouvernement annonce également la prise de Mergen par les forces du général Rennenkampf le 17 août.",
      "À Han-Kéou, une tentative de soulèvement a été réprimée par le vice-roi, avec exécutions immédiates des meneurs."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Quatre ouvriers empoisonnés à Marseille",
    "summary": "Un terrible drame frappe le vapeur Conseil-Père : quatre ouvriers chaudronniers sont décédés après avoir ingéré par méprise un poison confondu avec de la racine de gentiane.",
    "paragraphs": [
      "Cinq ouvriers chaudronniers travaillaient hier soir à bord du vapeur Conseil-Père. L'un d'eux, Antoine Théry, avait apporté une bouteille contenant ce qu'il croyait être de la racine de gentiane macérée.",
      "Après avoir bu, Théry a succombé en arrivant chez lui. Trois de ses camarades, Albert, Georges Orsolani et Cautaretti ont succombé aux mêmes symptômes. Un seul ouvrier a pu être sauvé."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Les obsèques des victimes de l'accident du boulevard Littré-Luxembourg",
    "summary": "Une foule émue a rendu un dernier hommage hier après-midi à M. Edmond Brassard et à Mme Reigagne, victimes de l'accident du boulevard Littré-Luxembourg, lors de leurs obsèques.",
    "paragraphs": [
      "Les obsèques de M. Edmond Brassard et de Mme Reigagne ont été célébrées hier après-midi. Un grand nombre d'habitants du quartier ont accompagné le cortège funèbre jusqu'aux cimetières d'Ivry et de Pantin."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le cadavre d'Argenteuil",
    "summary": "Le mystère du cadavre repêché dans la Seine s'éclaircit : l'autopsie confirme un meurtre par asphyxie et la victime est formellement identifiée comme étant le sculpteur François Bosmans.",
    "paragraphs": [
      "Le parquet de Versailles a poursuivi son enquête sur l'individu repêché dans la Seine. L'autopsie, pratiquée par le docteur Goisque, conclut à un crime par asphyxie par immersion.",
      "De nouveaux renseignements permettent d'identifier la victime comme étant François Bosmans, un sculpteur d'une cinquantaine d'années ayant résidé dans le vingtième arrondissement."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une fillette martyrisée à Lille",
    "summary": "La police lilloise a mis un terme au calvaire d'une adolescente de quatorze ans, atrocement battue par sa mère, la veuve Meyer. La coupable a été interpellée.",
    "paragraphs": [
      "La police a arrêté Rosalie Dreyfus, veuve Meyer, qui martyrisait depuis huit mois sa fille Jeanne, âgée de quatorze ans. La jeune fille, qui travaillait chez un épicier, portait des traces de coups sur tout le corps. La justice a mis fin à ce martyre."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "Nouvelles du conflit",
    "summary": "Les Boërs poursuivent leur résistance acharnée contre l'armée anglaise. Lord Roberts signale des affrontements constants tandis que le sabotage des voies ferrées par l'ennemi entrave les mouvements britanniques.",
    "paragraphs": [
      "Malgré le nombre réduit des Boërs, ceux-ci continuent activement la guerre contre l'armée anglaise. Lord Roberts télégraphie que Baden-Powell a combattu toute la journée contre l'arrière-garde du commandant Groblaar.",
      "Il semble que De Wet, après avoir échoué dans sa tentative de rejoindre l'Est, ait retraversé le massif de Magaliesberg. Les destructions de lignes de chemin de fer par les Boërs continuent d'entraver les mouvements britanniques."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Prisonniers anglais",
    "summary": "Lord Roberts propose au président Krüger la libération des prisonniers de Nooitgedacht, sous réserve qu'ils retournent immédiatement en Angleterre et s'abstiennent de toute participation future aux combats.",
    "paragraphs": [
      "Londres, 23 août. On mande de Durban au Daily Telegraph : Lord Roberts a fait proposer au président Krüger de délivrer les prisonniers anglais qui sont à Nooitgedacht, à la condition qu'ils soient renvoyés en Angleterre et qu'ils ne prennent plus part aux hostilités."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Une proclamation du président Krüger",
    "summary": "Répondant aux exigences de lord Roberts, le président Krüger exhorte les Boërs à maintenir la lutte, dénonçant la menace de déportation à Sainte-Hélène qui pèse sur tous les hommes âgés de plus de douze ans.",
    "paragraphs": [
      "Londres, 23 août. On télégraphie de Lourenço-Marques au Daily Telegraph : Le président Krüger a lancé une proclamation qui est considérée comme une réponse à celle de lord Roberts, et dans laquelle il dit : « Il ne vous servira de rien de déposer les armes, car lord Roberts, dans sa proclamation, déclare qu'il fera prisonniers tous les Boërs au-dessus de douze ans et les enverra à Sainte-Hélène. Il ne vous servira de rien non plus de quitter vos commandos, car qui ne croira pas que vous retournez vers vos fermes vous rapprochera de Sainte-Hélène. »"
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Administratif",
    "title": "Convocation d'électeurs",
    "summary": "Élections sénatoriales fixées au 7 octobre dans l'Indre pour remplacer M. Brunet, et élections législatives prévues le 16 septembre dans les circonscriptions du Puy et du Puy-de-Dôme.",
    "paragraphs": [
      "Les électeurs sénatoriaux du département de l'Indre procéderont, le dimanche 7 octobre, à l'élection d'un sénateur en remplacement de M. Brunet, décédé.",
      "Des élections législatives auront lieu le dimanche 16 septembre dans la circonscription du Puy (Haute-Loire) et dans celle du Puy-de-Dôme, à l'effet de remplacer M. Charles Dupuy, élu sénateur et démissionnaire, ainsi que M. Girard, décédé."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Mouvement judiciaire",
    "title": "Nominations et départs",
    "summary": "Décrets de nomination et mises à la retraite au sein de la magistrature, concernant les cours d'appel d'Hanoï, de Pondichéry et les tribunaux coloniaux.",
    "paragraphs": [
      "Par décret en date du 21 août, M. Crépin, procureur général près la cour d'appel d'Hanoï, est admis à la retraite.",
      "Sont nommés : juge président du tribunal de Long-Xuyen, M. Auber, président du tribunal de Fort-de-France (Martinique) ; président du tribunal de Fort-de-France, M. Rilhaut des Fontaines, juge d'instruction à Saint-Pierre (Martinique) ; juge d'instruction à Saint-Pierre, M. Lubin, juge d'instruction à Fort-de-France ; juge d'instruction à Fort-de-France, M. Micaet ; juge au tribunal de Saint-Pierre, M. Bene, conseiller auditeur à la cour d'appel de Pondichéry ; conseiller à la cour d'appel de Pondichéry, M. Mosnier, juge président du tribunal de Long-Xuyen."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame dans un cabaret belge",
    "summary": "À Lhau, en Belgique, le nommé Jules Desmet a tué accidentellement la cabaretière Mme veuve Bogaerts en manipulant, par plaisanterie, un fusil qu'il ignorait être chargé.",
    "paragraphs": [
      "Bruxelles, 23 août. Un nommé Jules Desmet, demeurant à Lhau dans le Brabant, entrait hier dans un cabaret tenu par Mme veuve Bogaerts. Desmet, qui était un client assidu de la maison, remarqua dès son entrée un fusil chargé accroché à la muraille. Il s'en empara, épaula et, mettant en joue la cabaretière, lui demanda en plaisantant si elle voulait qu'il fît feu.",
      "« Ne jouez pas avec cela ! » s'écria la pauvre femme, debout derrière son comptoir. « L'arme est chargée et un accident est vite arrivé ! »",
      "La malheureuse ne croyait pas si bien dire : au même instant, une détonation retentit et la cabaretière tomba raide morte, la décharge l'ayant atteinte en pleine poitrine. Le meurtrier alla aussitôt se constituer prisonnier."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Justice",
    "title": "L'assassin du roi Humbert",
    "summary": "Maître Martelli, avocat de l'assassin Bresci, renonce au pourvoi en cassation mais sollicite un report du procès, initialement prévu pour le 29 août.",
    "paragraphs": [
      "L'avocat Martelli, défenseur de Bresci, a renoncé à se pourvoir en cassation contre l'arrêt de la chambre des mises en accusation. Il demandera seulement l'ajournement du procès afin de pouvoir étudier le dossier. Si, comme on le prévoit, sa demande est repoussée, le procès aura lieu le 29 août."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'incendie d'un couvent",
    "summary": "Un tragique incendie, provoqué par des fusées d'artifice, a ravagé le couvent de Yasnogorsk lors d'un pèlerinage, faisant de nombreuses victimes parmi les fidèles.",
    "paragraphs": [
      "Saint-Pétersbourg, 23 août. Une correspondance du journal Novosti donne les détails suivants sur l'incendie qui a éclaté au couvent de Yasnogorsk, à Tchenstokhova, où une foule d'environ 30 000 pèlerins était venue de toutes les parties de la Pologne.",
      "Le soir, à l'issue du service, des fusées avaient été lancées. L'une d'elles mit le feu au faîte de la tour du monastère. Les secours accoururent avec toute la population de la ville sur les lieux du sinistre. Enfin, la partie supérieure de la tour s'écroula, écrasant sous ses débris plusieurs dizaines de personnes. On retira des décombres cinq cadavres, six personnes mortellement blessées et quatorze grièvement atteintes. On avait réussi à sauver l'église en même temps que le couvent."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique étrangère",
    "title": "La Roumanie et la Bulgarie",
    "summary": "Malgré la virulence des presses locales, la perspective d'un conflit entre la Bulgarie et la Roumanie semble écartée. M. Ivantchof a réaffirmé la volonté bulgare de maintenir la paix dans la région.",
    "paragraphs": [
      "Malgré le ton violent des journaux des deux pays, personne ne croit ici sérieusement à un conflit entre la Bulgarie et la Roumanie. M. Ivantchof a déclaré formellement que la Bulgarie voulait maintenir la paix."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Les troubles des Samoa",
    "summary": "Le roi Oscar de Suède a officiellement accepté d'arbitrer le litige relatif aux indemnités dues aux ressortissants étrangers, à la suite des récents troubles survenus dans les îles Samoa.",
    "paragraphs": [
      "Stockholm, 23 août. Le roi Oscar a accepté le rôle d'arbitre dans la question relative aux indemnités qui doivent être accordées aux nationaux allemands, anglais et américains, en raison des derniers troubles des îles Samoa."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Émeute aux États-Unis",
    "summary": "Une émeute raciale à Akron, dans l'Ohio, a causé des destructions massives, dont l'incendie de l'hôtel de ville. Le bilan fait état de trois morts, dix-huit blessés et des dégâts matériels considérables.",
    "paragraphs": [
      "New-York, 23 août. Au cours d'une émeute dirigée contre les nègres à Akron, dans l'Ohio, la populace a causé pour un million de dollars de dégâts. Elle a mis le feu à l'hôtel de ville, où les archives ont été détruites. Neuf compagnies de la milice gardent actuellement les ruines. Le bilan s'élève à trois tués et dix-huit blessés."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Déraillement",
    "summary": "Un grave accident ferroviaire s'est produit près de Baribaéa, en Inde. Le bilan provisoire de ce déraillement est lourd, avec onze personnes ayant trouvé la mort et vingt-cinq autres blessées.",
    "paragraphs": [
      "Calcutta, 23 août. Un train a déraillé près de Baribaéa. Le bilan est de onze tués et vingt-cinq blessés."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Chronique Littéraire",
    "title": "Favart",
    "summary": "Le nom de Favart revient au premier plan, porté par la reprise de « La Chercheuse d'esprit » et par l'exposition historique de la cave à liqueurs du maréchal de Saxe, rappelant le prestige du créateur de l'Opéra-Comique.",
    "paragraphs": [
      "Voilà un nom doublement remis en vedette. Il a d'abord reparu il y a quelque temps sur les affiches des colonnes Morris, grâce à la reprise de « La Chercheuse d'esprit », la première pièce à laquelle le créateur du genre de l'Opéra-Comique attacha son nom. Ensuite, c'est bien le souvenir de Favart encore qu'évoque la cave à liqueurs du maréchal de Saxe, exposée dans l'une de nos rétrospectives les plus visitées en ce moment."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Grèves",
    "title": "Les grèves des ports",
    "summary": "À Marseille, le calme revient malgré quelques tensions. À Dunkerque, un accord semble proche. Au Havre, les ouvriers des services techniques de la Transatlantique entament un mouvement pour de meilleures conditions.",
    "paragraphs": [
      "À Marseille : Le calme le plus complet règne aujourd'hui sur les quais de la Joliette. Au quai des Anglais, où le vapeur France était en partance pour Buenos-Ayres, soixante grévistes ont voulu s'opposer à l'embarquement des bagages. La grève des garçons navigateurs est en voie d'arrangement. La continuation de la grève des ouvriers des quais et des docks a été votée à l'unanimité.",
      "À Dunkerque : L'entente semble vouloir se faire entre les ouvriers du port grévistes et les entrepreneurs. Les grévistes acceptent la journée de dix heures à 6 francs. On compte que le travail reprendra sur le port lundi.",
      "Au Havre : Les ouvriers des services techniques de la Compagnie générale transatlantique se sont mis en grève, au nombre de 100 environ. Ils demandent une augmentation d'un franc par jour et la journée de dix heures. Les délégués ont eu une entrevue avec un ingénieur principal, mais jusqu'à présent, rien n'est décidé."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Essais techniques et équipement",
    "summary": "Succès des essais officiels pour les cuirassés Hoche et Châteaurenault. Par ailleurs, la marine allemande adopte des ceintures de sauvetage légères en fibre de kapok.",
    "paragraphs": [
      "Le cuirassé le Hoche a réussi ses essais officiels de puissance (10 809 chevaux, vitesse de 16 nœuds).",
      "Le croiseur Châteaurenault vient de faire des essais dont les résultats ont été assez satisfaisants (vitesse de 20 nœuds).",
      "La marine allemande vient d'adopter un nouveau système de ceintures de sauvetage rembourrées avec la fibre d'une plante exotique nommée kapok. Ces ceintures, très légères (970 grammes), remplaceront les anciens modèles en liège ou crin de renne, trop lourds et perdant leur flottabilité."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Obsèques et manœuvres",
    "summary": "Cérémonie funèbre à Limoges pour le capitaine Pallier. Dans la région de Nancy, les troupes de la 20e subdivision ont réalisé des manœuvres tactiques axées sur la défense du territoire.",
    "paragraphs": [
      "Le capitaine Pallier : À Limoges, a eu lieu à la cathédrale un service funèbre à la mémoire du capitaine Pallier.",
      "Manœuvres de Nancy : Les troupes de la 20e subdivision ont exécuté une intéressante manœuvre de deux jours dont le thème était la défense des environs de Nancy contre un ennemi venant du sud."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Social",
    "title": "La grève des cochers",
    "summary": "La situation reste bloquée pour les cochers de la Compagnie générale. Malgré les propositions patronales, le syndicat refuse la reprise et maintient son appel à la grève à outrance.",
    "paragraphs": [
      "La situation ne s'est pas modifiée hier ; malgré les offres qui leur ont été faites, les cochers de la Compagnie générale marquent peu d'empressement pour la reprise du travail. Le bureau du syndicat dément tout d'abord le bruit d'une grève générale possible de la corporation. La réunion a été levée à sept heures aux cris de « Vive la grève à outrance ! »"
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Société",
    "title": "Congrès des œuvres de l'assistance en temps de guerre",
    "summary": "Le congrès de la Faculté de médecine a abordé l'instruction des secours médicaux et plaidé pour l'impunité totale des navires-hôpitaux, conformément au droit international humanitaire.",
    "paragraphs": [
      "Le congrès a tenu hier sa quatrième réunion dans le grand amphithéâtre de la Faculté de médecine. M. le docteur Duclaussoy a fait un rapport sur les moyens employés pour instruire le personnel de secours. M. le docteur Bouloumié a conclu à l'établissement de navires-hôpitaux jouissant en tout temps de l'impunité accordée aux ambulances."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Activités et organisation",
    "summary": "L'Exposition Universelle attire une foule croissante. M. Millerand crée une commission pour des fêtes saisonnières, tandis qu'un projet de recueil illustré des objets exposés aux musées centennaux est autorisé.",
    "paragraphs": [
      "Hier matin, les visiteurs furent nombreux à l'Exposition. Les contrôleurs de tickets ont enregistré une hausse constante de la fréquentation.",
      "MM. François Carnot et Albert Trotin ont obtenu l'autorisation de réunir en un volume les photographies, dessins et gravures des objets exposés aux musées centennaux.",
      "Une commission des fêtes a été constituée par M. Millerand. Parmi les projets figurent une fête des Fleurs en septembre et une fête des Vendanges en octobre."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Météo",
    "title": "Violents orages",
    "summary": "De violents orages ont frappé plusieurs départements, causant la mort tragique de deux personnes à La Grésane-Dallace et Manziat, et provoquant des dégâts considérables dans le canton d'Arinthod.",
    "paragraphs": [
      "Mâcon : Un orage épouvantable a éclaté sur toute la région. À La Grésane-Dallace, Mme Meunier, âgée de vingt-quatre ans, a été foudroyée.",
      "Bourg : La foudre a tué, à Manziat, un jeune homme de vingt ans, M. Fouchoux.",
      "Lons-le-Saunier : Un orage d'une violence inouïe, accompagné de trombes d'eau et de grêle, s'est abattu sur le canton d'Arinthod."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Météo et Intempéries",
    "title": "Orages et dégâts dans la région lyonnaise",
    "summary": "La région lyonnaise subit de plein fouet des orages dévastateurs : récoltes anéanties, voies ferrées coupées et inondations perturbent gravement les communications et les travaux agricoles.",
    "paragraphs": [
      "Les trombes d'eau furent considérables ; entre Chamelet et Ternand, près de l'Arbresle, la voie a été coupée, nécessitant le transfert des voyageurs.",
      "Les communes de Létra, Chamelet et Ternand ont vu leurs récoltes anéanties par la grêle.",
      "À Villefranche, les champs sont ravinés et les vignobles très endommagés ; un véritable torrent a emporté des hangars à Cogny.",
      "Les trains subissent des retards considérables et les fils télégraphiques sont coupés en maints endroits.",
      "Dans le canton du Bois-d'Oingt, où la récolte était admirable, les vignes et les blés sont presque complètement détruits ; à la tour de Millery, un éboulement s'est produit sur la ligne du chemin de fer et les trains de Givors ont dû être dérivés sur Chasse.",
      "La population de la région est consternée."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Victimes de la foudre",
    "summary": "Le passage d'orages violents à travers la France et les colonies a causé plusieurs décès par la foudre, notamment à la montagne de la Thuille, près de Millau et au Kef en Tunisie.",
    "paragraphs": [
      "Chambéry, 23 août. Au cours du violent orage qui a sévi sur notre contrée, la foudre est tombée sur la montagne de la Thuille, près de Buzet, et a tué un berger de vingt-trois ans, nommé Hippolyte Cibrano ; le cadavre du malheureux jeune homme a été retrouvé entièrement carbonisé.",
      "Rodez, 23 août. Au cours d'un orage, la foudre est tombée sur la ferme de Trémolet, située près de Millau, et a tué Mme Alibert, femme du garde-chasse du domaine.",
      "Tunis, 23 août. Pendant un violent orage qui a éclaté au Kef, une femme arabe, Mehennia-bent-Allègue, s'était réfugiée sous un mur qui soudain s'écroula. La malheureuse a été tuée par une énorme pierre."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'agression de la rue des Orteaux",
    "summary": "Une jeune ouvrière a été agressée rue des Orteaux par deux malfaiteurs. Malgré sa défense, elle fut blessée par balle avant l'intervention des passants et l'arrestation des suspects par la police.",
    "paragraphs": [
      "Une ouvrière, Mme Marie Zniebel, âgée de vingt et un ans, demeurant boulevard de Charonne, rentrait chez elle avant-hier soir vers dix heures et suivait la rue des Orteaux, lorsqu'elle fut abordée par deux individus aux allures suspectes.",
      "L'un des agresseurs, après avoir menacé la femme de son revolver, lui porta un coup de couteau, ne la blessant que légèrement, puis la suivit. Parvenue au retour de la rue Vitruve, n'apercevant personne, elle tenta de s'enfuir. Le malfaiteur lui logea alors une balle dans la cuisse droite.",
      "Des passants intervinrent et une bagarre éclata. Antoine Boldrin, vingt-trois ans, fut arrêté et mis à la disposition de M. Deslandes, commissaire de police. Il nia avoir blessé la femme.",
      "Pendant ce temps, la blessée fut dirigée sur l'hôpital Tenon. Le complice, Jules Alamy, dit Jacob, vingt-cinq ans, fut retrouvé hier matin par la sûreté dans un hôtel du quartier de la Gare et arrêté."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Informations diverses",
    "summary": "Le ministre des Colonies honore les princes cambodgiens, M. Beraldi est promu officier de la Légion d'honneur, tandis que le décès du député de Toulon, M. Cluseret, est annoncé.",
    "paragraphs": [
      "Le ministre des Colonies a offert un dîner en l'honneur de Leurs Altesses les princes Sisowath et Pheanuvongs, fils du roi du Cambodge.",
      "Les fils du roi Norodom ont visité hier le donjon de Vincennes et ont assisté à une séance de manège.",
      "M. Beraldi, écrivain d'art, est promu officier de la Légion d'honneur.",
      "De nombreux congrès se réunissent à Paris, dont les membres sont photographiés par M. Pierre Petit.",
      "M. Cluseret, député de Toulon, est décédé hier d'une fluxion de poitrine."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident des sapeurs-pompiers",
    "summary": "Un grave accident de la circulation rue des Entrepreneurs a causé la chute et la blessure sérieuse de deux sapeurs-pompiers de la caserne de Grenelle lors d'une intervention.",
    "paragraphs": [
      "Deux pompiers de la caserne de Grenelle ont été victimes d'un grave accident. Vers neuf heures, rue des Entrepreneurs, la route fut barrée par une tonne. Le charretier François Tinat ne put faire ranger son attelage, provoquant un choc violent.",
      "Deux pompiers furent précipités à terre. Paul Le Métayer, gravement blessé, a dû être transporté à l'infirmerie de la caserne Violet. Le charretier a été interpellé."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Épilogue d'un drame",
    "summary": "Le soldat Pierre Boutereau, auteur d'une tentative de meurtre sur sa fiancée Jeanne Lamobre le 19 avril dernier, est décédé hier à l'hôpital de la Charité des suites de ses blessures.",
    "paragraphs": [
      "Le soldat Pierre Boutereau, qui avait tenté de se suicider le 19 avril après avoir poignardé sa fiancée Jeanne Lamobre, a succombé hier à l'hôpital de la Charité."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de train",
    "summary": "Un accident mortel est survenu hier soir à la gare de Courcelles-Levallois : un voyageur, tentant de descendre d'un train en marche, a chuté sur la voie et a été mortellement sectionné.",
    "paragraphs": [
      "Hier soir, à la gare de Courcelles-Levallois, un voyageur a chuté sur la voie en tentant de descendre d'un train en marche. Le corps a été horriblement mutilé. L'identité de la victime reste à établir."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation de deux meurtriers",
    "summary": "Les auteurs de l'agression contre l'infirmier Désiré Nagebeau ont été appréhendés. Il s'agit de Henri Robin, dit Gros-Bœuf, et de son complice Petitmangin.",
    "paragraphs": [
      "Les auteurs de l'agression contre l'infirmier Désiré Nagebeau, blessé à la tête, ont été arrêtés. Il s'agit de Henri Robin, dit Gros-Bœuf, et d'un complice nommé Petitmangin.",
      "Le juge d'instruction a pu recueillir les déclarations du blessé à l'hôpital Cochin."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une singulière folie",
    "summary": "Louis-Josué Cruimès, un individu de vingt ans, a été appréhendé après avoir éteint les becs de gaz du boulevard Diderot, prétendant agir sous l'inspiration de l'illustre Josué. Il a été conduit à l'infirmerie du dépôt.",
    "paragraphs": [
      "Un individu, Louis-Josué Cruimès, âgé de vingt ans, a été arrêté pour avoir éteint successivement les becs de gaz du boulevard Diderot, prétendant qu'il était un arrière-petit-fils de Josué ayant pour mission d'arrêter la lumière. Il a été envoyé à l'infirmerie spéciale du dépôt."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Discussions sanglantes",
    "summary": "La violence sévit dans la capitale : un ouvrier charron a été poignardé à Belleville, tandis qu'une brutale rixe rue d'Allemagne a laissé un journalier dans un état préoccupant.",
    "paragraphs": [
      "Un ouvrier charron, Paul Mathey, a été poignardé à la poitrine par Charles Loriot à la suite d'une querelle dans un café de la rue de Belleville. Loriot a été immédiatement arrêté.",
      "Une violente bagarre entre deux journaliers, Isidore Boudet et Hippolyte Le Korec, rue d'Allemagne, a laissé ce dernier dans un état grave, souffrant de côtes enfoncées et le nez brisé. Boudet a été appréhendé par les autorités."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Social",
    "title": "Bulletin du travail",
    "summary": "Le point sur la situation sociale : les allumeurs de gaz rejettent la grève, les mineurs de la Loire entament des négociations, et les charpentiers d'Angers reprennent leurs activités.",
    "paragraphs": [
      "Les allumeurs de gaz se sont déclarés hostiles à une grève générale lors d'une réunion tenue à la Bourse du travail.",
      "Les mineurs du bassin de la Loire ont obtenu une entrevue avec le directeur des mines afin de tenter d'éviter une grève générale.",
      "Les ouvriers charpentiers d'Angers ont repris le travail après un accord trouvé sur le tarif journalier."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Faits Divers",
    "title": "Audacieuse évasion",
    "summary": "Deux détenus de la maison centrale de Poissy, évadés hier, ont été promptement rattrapés par les forces de l'ordre près de la maison de la Légion d'honneur des Loges.",
    "paragraphs": [
      "Deux prisonniers de la maison centrale de Poissy s'étaient évadés hier. Ils ont été capturés deux heures plus tard à proximité de la maison de la Légion d'honneur des Loges."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Météorologie",
    "title": "La température",
    "summary": "Bulletin météorologique : le temps demeure instable avec des pluies éparses. La température baisse en France et en Angleterre, tandis que la mer s'agite sur la Manche et l'Océan.",
    "paragraphs": [
      "Le ciel était nuageux hier pendant la plus grande partie de la journée.",
      "Une dépression persiste sur les îles Britanniques ; elle amène une tempête d'est au nord de l'Écosse. Le baromètre reste bas dans la moitié occidentale de l'Europe, tandis qu'il dépasse 770 mm dans le centre de la Russie.",
      "Le vent est modéré d'entre sud et ouest sur nos côtes de la Manche et de l'Océan ; il est faible de l'est en Provence.",
      "Des pluies sont tombées dans l'ouest de l'Europe. En France, on a recueilli 10 mm d'eau à Lyon, 2 à Boulogne, 2 à Biarritz et 1 à Paris. On signale également des orages à Lyon, à Besançon et à Belfort.",
      "La température a baissé en France et en Angleterre ; elle était hier matin de 9° à Bodö, 15° à Bruxelles et à Paris, 20° à Alger et 24° à Monaco.",
      "On notait 11° au mont Aigoual, 9° au puy de Dôme et au pic du Midi.",
      "En France, quelques ondées sont probables avec un temps chaud.",
      "Situation particulière aux ports français : la mer est agitée sur la Manche et l'Océan, mais belle sur la Méditerranée."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Navigation",
    "title": "Navigation fluviale au 2 août",
    "summary": "Relevé officiel des hauteurs d'eau sur les bassins de la Seine, de la Marne et de l'Oise. Les niveaux observés le 2 août 1899 témoignent d'une navigabilité stable sur les points de passage cruciaux de la capitale.",
    "paragraphs": [
      "Haut-Seine : Pont de Montereau, 1m51 ; écluse de Varennes, 1m48 ; pont de Melun, 2m76 ; pont de Corbeil, 1m53 ; écluse de Port-à-l'Anglais, 1m50.",
      "Marne : Écluse de Cumières, 1m41 ; écluse de Chalifert, 1m40 ; écluse de Charenton, 1m50.",
      "Basse-Seine : Écluse du canal Saint-Martin, 1m51 ; pont de la Tournelle, 0m87 ; pont Royal, 1m13 ; barrage de Bezons, 2m33 ; pont de Mantes, 1m25 ; écluse de Méricourt, 1m24.",
      "Oise : Barrage de Venette, 1m32."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Sports",
    "title": "Les courses de Dieppe et Deauville",
    "summary": "Le meeting hippique de Deauville clôt ses portes sur la victoire de Royal Normand. Bilan d'une journée marquée par une erreur de monte sur Sylvia et présentation du programme des épreuves de Dieppe.",
    "paragraphs": [
      "Dieppe : Pronostics pour le vendredi 24 août : Prix du Casino, Prix de la Seine-Inférieure, Prix de Rouxmesnil, Prix d'Arques, Prix d'Août et Prix Duquesne.",
      "Deauville : Résultats du jeudi 23 août. Une journée de courses au trot pour finir. Le meeting de Deauville a dit son dernier mot. Le fait saillant de la journée est la défaite de Sylvia par Royal Normand ; la jument semble avoir été battue à cause de l'effarement de son jockey.",
      "Résultats détaillés : Prix de Pont-l'Évêque, Prix de la Touque, Prix de la Société des Courses de Deauville, Prix de la Plage, Prix de Trouville, Prix de l'Hippodrome.",
      "Résultats du pari mutuel : Triolet, Marignan, Tulipe, Ténébreuse, Royal Normand, Sylvia, Jersey."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Feuilleton",
    "title": "Main Gauche - Grand Roman inédit",
    "summary": "Extrait du feuilleton : William Janck guette l'arrivée du train de Gerarden. Dissimulé dans l'obscurité de la gare, il épie les mouvements de son ennemi alors que la locomotive entre en station.",
    "paragraphs": [
      "William se rejeta vivement dehors, et ayant cherché des yeux le bâtiment des machines, il s'y précipita. Quand il y pénétra, un ronflement assourdissant se faisait entendre.",
      "Le mécanicien, la main droite à son volant de détente, la main gauche sur la manette des valves de fumée, fouillait de ses yeux ardents cette nuit noire où sa machine s'enfonçait comme une étoile.",
      "Le train de Gerarden entra en gare à 9h33. William Janck était à terre, dissimulé derrière une porte vitrée, observant les faits et gestes de son ennemi."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Spectacles",
    "title": "Courrier des Théâtres",
    "summary": "Revue des scènes parisiennes : le programme du Gymnase, les répétitions classiques à la Comédie-Française et les annonces de réouvertures pour la rentrée théâtrale.",
    "paragraphs": [
      "Le Gymnase joue Les Surprises du divorce, avec M. Galipaux, M. Dubosc et Mme Daynes-Grassot.",
      "À la Comédie-Française : à la matinée du jeudi 30 août, on donnera le Chant du Départ. Les fragments de Marie-Joseph Chénier et de Fabre d'Églantine seront répétés aujourd'hui.",
      "Les auditions pour l'Opéra-Populaire (Folies-Dramatiques) ont été reprises. La direction informe qu'il reste des places vacantes pour les choristes.",
      "La réouverture des Bouffes-Parisiens aura lieu prochainement avec L'Enfant prodigue.",
      "Après Tous criminels, le théâtre Déjazet fera une belle reprise de Trois femmes pour un mari."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Société",
    "title": "Statistique hebdomadaire de la Ville de Paris",
    "summary": "Le bilan démographique de la capitale pour la 33e semaine indique une mortalité en baisse, avec 949 décès enregistrés. Recensement des causes médicales et données sur l'état civil parisien.",
    "paragraphs": [
      "Le service de la statistique municipale a compté, pendant la 33e semaine, 949 décès, au lieu de la moyenne habituelle de 962.",
      "La fièvre typhoïde a causé 29 décès, la rougeole 6, la coqueluche 8, la diphtérie 1, la variole 3. La diarrhée infantile a causé 109 décès.",
      "On a célébré à Paris 856 mariages.",
      "On a enregistré la naissance de 1260 enfants vivants (633 garçons et 627 filles), dont 892 légitimes et 368 illégitimes."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Sports",
    "title": "Nouvelles sportives : Cyclisme et Aviron",
    "summary": "Le championnat de cyclisme au Parc des Princes s'annonce palpitant. Parallèlement, l'élite de l'aviron roubaisien représentera la France aux régates de Courbevoie, tandis que l'Ancienne de Roubaix s'illustre en Belgique.",
    "paragraphs": [
      "Au Parc des Princes, le début du championnat du monde des 100 kilomètres fut palpitant. La course d'après-demain s'annonce comme un véritable succès.",
      "Concernant les régates internationales, quatre rameurs roubaisiens, membres de l'Aviron, ont été désignés par le Cercle nautique de France pour défendre les couleurs françaises à Paris.",
      "Les épreuves du concours d'aviron se dérouleront dans le bassin de Courbevoie-Asnières samedi prochain.",
      "Par ailleurs, la société de gymnastique « L'Ancienne de Roubaix » vient de remporter le prix d'honneur du roi Léopold lors du concours international de Lobbes, en Belgique."
    ]
  }
];
