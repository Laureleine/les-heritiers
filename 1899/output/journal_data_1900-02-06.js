// Date: 1900-02-06
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-02-06 (Version Restaurée, 34 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique",
    "title": "Les jeunes législateurs",
    "summary": "Un instituteur relate une expérience pédagogique en Suisse où des écoliers, organisés en république miniature, apprennent la citoyenneté et la gestion démocratique par une pratique concrète et autonome.",
    "paragraphs": [
      "C'est un intéressant épisode de voyage que celui qui vient d'être raconté par un instituteur au retour d'une excursion en Suisse. Il se trouvait dans un village du canton de Vaud quand il rencontra une joyeuse troupe d'écoliers en promenade.",
      "Les jeunes garçons s'étaient divisés en deux camps et jouaient la guerre du Transvaal, les uns faisant les Boers, les autres les Anglais. Mais ce qui mérite d'être retenu, c'est la conclusion qui fut donnée à la bataille par le jeune chef des Boers, prônant la justice et le droit face à l'agression.",
      "Le maître alors lui apprit que depuis longtemps il exerçait les enfants qu'on lui confiait à se familiariser avec les sentiments d'équité. Ainsi, le règlement de discipline intérieure était en entier l'œuvre des écoliers, incluant des notions de suffrage universel scolaire.",
      "On peut, en remontant à la Révolution française, trouver déjà un exemple de l'application aux choses scolaires du suffrage enfantin, notamment par le maître d'école de Neuilly en 1792.",
      "Il faut applaudir à cette méthode qui, limitée aux proportions que lui donnent les quelques essais qu'on vient de voir, ne peut avoir que de bons effets.",
      "Enfin, il faut lire la législation enfantine publiée par le McClure's Magazine concernant une République minuscule fondée dans l'État de New-York par des enfants de douze à dix-sept ans, qui fonctionne avec une Constitution, un tribunal et une monnaie propre.",
      "Il y a dans ces expériences sujet à de sérieuses réflexions sur le développement des qualités morales des enfants."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Roman-Feuilleton",
    "title": "Mariage secret",
    "summary": "Arsène Pastouret échafaude une machination financière autour de Manuela, veuve d'un héritier, alors que le mystère plane sur la légitimité de son nouveau-né au sein de la famille d'Aspremont.",
    "paragraphs": [
      "Si Francine avait sauvé l'honneur et peut-être la caisse du syndicat Delorme, Pastouret, de son côté, pour le compte de la société Arsène et Fifine, n'avait pas non plus perdu son temps.",
      "Arsène et Fifine discutent du fils d'un nommé d'Aspremont, mort récemment au Mexique, et de la situation de la petite femme qui se dit veuve d'Aspremont et qui a accouché après avoir été mise à la porte de l'hôtel familial.",
      "Arsène Pastouret échafaude un plan pour tirer profit de cette situation financièrement avantageuse en se mettant du côté de la jeune veuve contre le père d'Aspremont, millionnaire.",
      "Pendant ce temps, Madame Lardinois entre dans la chambre où l'accouchée, Manuela, est en train d'allaiter son enfant, Rolande. L'accoucheuse insiste pour que la déclaration de l'enfant soit faite à la mairie et presse Manuela de fournir les papiers nécessaires, révélant la tension autour de la légitimité de cet enfant et de son nom."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le crime de Montargis",
    "summary": "Détenu à la prison de Fresnes, l'ouvrier Sigismond Sandré a fait des aveux complets concernant le meurtre de son ancienne maîtresse, commis l'année passée dans la forêt de Montargis.",
    "paragraphs": [
      "Deux ouvriers couvreurs, Sigismond Sandré et Ferdinand Trienz, détenus à la prison de Fresnes, ont fait une grave révélation. Sandré a avoué au gardien avoir assassiné son ancienne maîtresse, Marthe André, à Montargis le 5 août de l'année dernière.",
      "Sandré raconte le crime : après un refus de la jeune femme de reprendre leur relation, il l'a poignardée à plusieurs reprises dans la forêt. Il a ensuite brûlé le cadavre pour effacer les traces de son forfait.",
      "M. Cochefert, chef de la sûreté, a fait extraire les deux hommes pour interrogatoire. Si Trienz confirme la présence dans la forêt, il nie avoir compris le crime sur le moment. Le parquet de Montargis a été avisé pour procéder aux recherches dans la forêt."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Social",
    "title": "Le capital et le travail",
    "summary": "Une analyse optimiste sur l'évolution des relations sociales, où le monde ouvrier et le capital s'orientent vers une alliance durable, soutenue par les réformes législatives et l'esprit démocratique.",
    "paragraphs": [
      "Une réunion comme le banquet des associations ouvrières permet de constater l'évolution pacifique de la démocratie et les progrès de l'esprit populaire qui se pénètre des vérités économiques.",
      "L'antagonisme entre le capital et le travail subit une transformation favorable. Le labeur manuel cesse de voir un ennemi dans l'argent, et l'argent comprend que les progrès sociaux lui imposent une alliance avec les ouvriers.",
      "La richesse se divise de plus en plus et prend une forme démocratique. Le jour où le Parlement aura voté le projet qui accorde aux syndicats la personnalité civile, cette ascension des assises démocratiques vers les solutions possibles et pratiques se poursuivra plus vite encore."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident à bord d'un torpilleur",
    "summary": "Un accident tragique est survenu à Cherbourg : le quartier-maître mécanicien Ouitre est décédé des suites d'une asphyxie survenue lors de l'ouverture d'une chaudière à bord du torpilleur n° 11.",
    "paragraphs": [
      "Un accident mortel s'est produit aujourd'hui à Cherbourg à bord du torpilleur n° 11. Le quartier-maître mécanicien Ouitre, chargé de procéder à l'ouverture d'une chaudière, est tombé asphyxié.",
      "Malgré les soins énergiques qui lui furent donnés, Ouitre n'a survécu qu'une demi-heure. Le maître mécanicien a failli subir le même sort en portant secours. Une enquête a été prescrite par l'autorité maritime."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "La situation au Transvaal",
    "summary": "Entre rumeurs de franchissement de la Tugela par la colonne Buller et silence officiel du War Office, la situation reste indécise autour de Ladysmith, sur fond de vives tensions politiques au Cap.",
    "paragraphs": [
      "Les bruits les plus divers continuent à circuler au sujet des mouvements de la colonne Buller. Tandis que certaines dépêches annoncent le franchissement de la Tugela, le War Office maintient un mutisme officiel.",
      "Les télégrammes de Londres indiquent une absence de confirmation officielle concernant la marche sur Ladysmith. Parallèlement, des rapports font état d'activités militaires et de bombardements intermittents autour de la ville.",
      "Des nouvelles du front témoignent de la capture de prisonniers et de l'état précaire de la garnison, tandis que l'agitation politique provoquée par l'Afrikander Bond au Cap s'intensifie contre la conduite de la guerre."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Un Impôt de Guerre au Transvaal",
    "summary": "Le gouvernement du Transvaal institue un impôt de guerre frappant les non-résidents et les sociétés, à l'exception des Boërs, sous peine de sanctions prévues par la loi n° 1 de 1896.",
    "paragraphs": [
      "Cet impôt est levé sur les non-résidents, ainsi que sur toutes les compagnies et syndicats, à l'exception de ceux dont les membres sont des Boërs, et sur toutes les personnes agissant en qualité de mandataires.",
      "La taxe est exigible dans un délai de trois mois à compter du mois de février. En cas de non-paiement, les dispositions coercitives de la loi n° 1 de 1896 seront immédiatement appliquées."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Discussion à la Chambre des Communes sur la guerre au Transvaal",
    "summary": "À la Chambre des Communes, Sir William Harcourt dénonce les conséquences du raid Jameson, tandis que M. Chamberlain appelle à l'union nationale pour mener la guerre à son terme.",
    "paragraphs": [
      "Londres, 5 février. À la Chambre des Communes, la discussion reprend. Sir William Harcourt prend la parole et affirme que la guerre a été provoquée par l'abandon de la politique suivie en 1881.",
      "Il soutient que le raid Jameson a dicté les préparatifs militaires des Boërs et que l'influence néfaste de cet événement pèse encore lourdement sur la situation actuelle de l'Angleterre.",
      "M. Chamberlain répond en blâmant le ton du discours de Sir William Harcourt, affirmant que le pays n'est pas en danger et qu'il existe dans la nation un désir irrésistible de coopérer pour arriver à une heureuse conclusion.",
      "M. Chamberlain refuse de discuter la question de la commission sud-africaine tant qu'une motion relative au raid Jameson, déposée par M. Thomson, n'aura pas été débattue."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Étranger",
    "title": "Nouvelles des États-Unis",
    "summary": "L'ancien ministre américain Alger prône la neutralité, rappelant la dette de reconnaissance envers Londres, malgré la multiplication de meetings hostiles à la politique britannique en Afrique.",
    "paragraphs": [
      "New-York, 5 février. M. Alger, ancien ministre de la Guerre, a déclaré dans une interview qu'il était de mauvais goût, de la part des hommes publics, de s'immiscer actuellement dans la situation du sud de l'Afrique.",
      "Les États-Unis ont contracté envers la Grande-Bretagne, du fait de son attitude durant la guerre avec l'Espagne, une dette de reconnaissance dont ils doivent se souvenir.",
      "New-York, 5 février. Au cours d'un grand meeting tenu hier soir à l'Académie de musique, miss Maud Gonne a vivement attaqué la politique de la Grande-Bretagne dans le sud de l'Afrique. D'autres réunions analogues ont eu lieu à Buffalo et à Baltimore."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Règlement sur la tenue des officiers",
    "summary": "Le général Lucas réglemente le port de la tenue civile pour les officiers, désormais autorisé pour les activités privées sous réserve d'une permission formelle des chefs de corps.",
    "paragraphs": [
      "Le général Lucas vient de fixer les conditions dans lesquelles les officiers sont autorisés à porter la tenue civile, notamment pour la pratique de la chasse, de la pêche ou pour des visites privées, sous réserve d'une autorisation régulière délivrée par leurs chefs de corps."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Congés de convalescence des soldats",
    "summary": "Le ministre de la Guerre réforme le système des congés de convalescence, autorisant désormais le transfert des soldats nécessiteux vers le dépôt de Porquerolles plutôt que leur renvoi dans des foyers inadaptés.",
    "paragraphs": [
      "Le ministre de la Guerre a adressé une circulaire aux commandants de corps d'armée concernant les inconvénients graves liés à l'envoi en congé de convalescence de soldats issus de familles totalement dépourvues de ressources.",
      "Il sera désormais possible de diriger les malades sur le dépôt de Porquerolles afin d'éviter les renvois dans des foyers inadaptés. La note du 25 mars 1890, relative au transfert du dépôt de convalescents à l'île Sainte-Marguerite, est abrogée."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Intérieure",
    "title": "Chambre des Députés : Séance du 5 février",
    "summary": "Sous la présidence de M. Paul Deschanel, la Chambre légifère sur les récompenses agricoles et immobilières, tout en interpellant le ministre de la Marine sur la gestion des carrières des officiers.",
    "paragraphs": [
      "La séance est ouverte sous la présidence de M. Paul Deschanel. La Chambre adopte des projets de loi relatifs aux récompenses pour les expositions d'horticulture et d'aviculture, ainsi qu'à l'affectation de locaux des Tuileries.",
      "Une question est posée par M. Paul Bernard au ministre de la Marine au sujet de la réintégration de M. Quinault et de l'avancement exceptionnel du lieutenant de vaisseau Jaime. Le ministre de la Marine défend ses décisions en invoquant le mérite de l'officier."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique Intérieure",
    "title": "Discussion du budget de l'Agriculture",
    "summary": "Les députés examinent le budget agricole, votant des crédits pour l'enseignement spécialisé et la station œnologique de Toulouse, tout en débattant des mesures de soutien aux cultures et à la vigne.",
    "paragraphs": [
      "La Chambre aborde la discussion du budget du ministère de l'Agriculture. Divers crédits sont votés pour l'inspection de l'agriculture, la création d'une école en Corse et une station œnologique à Toulouse.",
      "M. Suchetet propose un amendement pour encourager la culture des plantes oléagineuses, qui n'est pas adopté. Le débat se poursuit sur la reconstitution des vignobles."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique Intérieure",
    "title": "Élection du bureau au Sénat",
    "summary": "Le Sénat, réuni sous la présidence de M. Fallières, a reconduit son bureau lors de la séance du 5 février, réélisant son président et ses vice-présidents pour la nouvelle session.",
    "paragraphs": [
      "Séance du 5 février sous la présidence de M. Fallières. Le Sénat procède à l'élection de son bureau. M. Fallières est réélu président. MM. de Verninac, Franck-Chauveau, Magnin et Demôle sont élus vice-présidents."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Attaque criminelle en Flandre",
    "summary": "Un violent braquage a été perpétré hier matin près de Bruxelles par des malfaiteurs ayant sauvagement agressé un couple dans son domicile avant de prendre la fuite avec leur butin.",
    "paragraphs": [
      "Bruxelles, 5 février. Dans la matinée d'hier, des individus ont attaqué un couple dans leur logis à Hoogkaere. Après avoir roué la femme de coups, les malfaiteurs ont fracturé les meubles et dérobé de l'argent avant de laisser les époux dans un état grave."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame conjugal à Anvers",
    "summary": "À Anvers, un tragique drame a ensanglanté un café du canal de l'Ancre. Arthur Roussel, surpris en compagnie de sa maîtresse, a mortellement poignardé son épouse au cours d'une violente altercation. L'auteur a été arrêté.",
    "paragraphs": [
      "Anvers, 5 février. Un drame effroyable a été commis dans un café situé près du canal de l'Ancre. Un homme, nommé Arthur Roussel, qui se trouvait en compagnie de sa maîtresse, a été brusquement apostrophé par son épouse.",
      "Au cours d'une querelle d'une extrême violence, l'individu a frappé sa femme à la tête avec un couteau. La victime, transportée à l'hôpital dans un état désespéré, a succombé à ses blessures, tandis que le coupable a été arrêté par les autorités."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Phénomène atmosphérique à Londres",
    "summary": "Un brouillard d'une densité exceptionnelle s'est abattu sur Londres, plongeant la capitale britannique dans une obscurité totale pendant plus d'une heure et paralysant totalement la circulation des tramways.",
    "paragraphs": [
      "Londres, 5 février. Un brouillard d'une densité inouïe s'est abattu sur la cité, plongeant Londres dans les ténèbres pendant plus d'une heure.",
      "Ce phénomène atmosphérique a provoqué une confusion indescriptible, rendant la circulation des voitures impossible et forçant l'arrêt complet du service des tramways à travers la ville."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Protestation à Madrid concernant les anarchistes de Monjuich",
    "summary": "À Madrid, la commission de révision du procès des anarchistes de Monjuich a manifesté son opposition à la commutation des peines royales, provoquant des cris d'hostilité parmi la foule.",
    "paragraphs": [
      "Madrid, 5 février. La commission de révision du procès des anarchistes de Monjuich a manifesté aujourd'hui son opposition contre la commutation des peines accordée à l'occasion de la fête du Roi.",
      "La foule rassemblée a proféré des slogans hostiles avant de se disperser dans le calme sous la surveillance des forces de l'ordre."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie du navire Madeleine",
    "summary": "Le navire Madeleine, chargé de soufre, a été secouru en mer par le vapeur Ville-de-Buenos-Ayres après s'être embrasé au large de Palma. Le cuisinier a péri en tentant de fuir le brasier par la mer.",
    "paragraphs": [
      "Madrid, 5 février. On mande de Palma que le navire Madeleine, chargé de soufre, a été rencontré en feu à cinquante milles de Palma par le vapeur Ville-de-Buenos-Ayres.",
      "L'équipage a été intégralement sauvé par le vapeur, à la funeste exception du cuisinier qui, pris de panique, s'est jeté à la mer."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Explosions à Lunel et Bellegarde",
    "summary": "Le Languedoc a été frappé par deux accidents violents : une explosion de gaz lors d'une réunion à Lunel faisant six blessés, et un accident de dynamite à Bellegarde touchant trois ouvriers italiens.",
    "paragraphs": [
      "Montpellier, 5 février. Une explosion de gaz, survenue au cours d'une réunion publique à Lunel, a causé des blessures graves à six personnes présentes sur les lieux.",
      "Bellegarde, 5 février. Une explosion de dynamite a eu lieu sur un chantier de la localité. L'accident a grièvement blessé deux ouvriers italiens et en a blessé légèrement un troisième."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Littérature",
    "title": "Thyl Ulenspiegel",
    "summary": "Portrait de Thyl Ulenspiegel, héros malicieux de Charles de Coster dont les ruses illustrent une résistance intelligente face à l'oppression et à la sottise des puissants de ce monde.",
    "paragraphs": [
      "Thyl déclare que la besogne sera faite au bout de trois jours. Ce temps écoulé, le prince veut voir où en est le travail. « Il est fini », dit Thyl, « mais je vous avertis d'une chose : celui qui n'a pas droit au pouvoir ne peut apercevoir ce que j'ai peint. »",
      "Puis, il découvre le mur. Il apparaît tout blanc aux yeux du prince. Mais celui-ci, après ce qu'a déclaré Thyl, ne veut pas avouer qu'il n'y voit rien, et il affirme que la peinture est admirable.",
      "Une autre fois, ayant un procès, Thyl demande le renvoi de l'affaire, et, connaissant les lenteurs de la justice, il s'écrie : « À cent ans, Monsieur le juge. »",
      "Ainsi, toujours, notre héros est fécond en prouesses malicieuses. Mais, fait remarquer M. Paul Heinisty, il ne prend pour dupes que ceux qui oppriment ou trompent le pauvre monde.",
      "Un jour, se disputant avec des docteurs, il affirme qu'il répondra à toutes leurs questions. On interroge alors : « Combien y a-t-il de muids d'eau dans la mer ? » « Faites d'abord arrêter toutes les eaux », riposte Thyl, « et je mesurerai. »",
      "Un écrivain belge, M. Charles de Coster, a, en langue française, écrit la « Légende et les Aventures héroïques, joyeuses et glorieuses d'Ulenspiegel au pays de Flandre et ailleurs »."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une affaire mystérieuse",
    "summary": "Découverte atroce à Nanterre : un ouvrier a trouvé sur la voie ferrée un homme atrocement mutilé qui, malgré son état désespéré, refuse de révéler les causes de son drame.",
    "paragraphs": [
      "Hier soir, à huit heures, un ouvrier terrassier, M. Boissier, demeurant près du chemin de fer à Nanterre, entendit tout à coup des plaintes provenant du talus de la voie.",
      "S'étant dirigé du côté d'où venaient les plaintes, M. Boissier ne tarda pas à découvrir, étendu sans mouvement au milieu d'une mare de sang, un homme d'environ trente ans, élégamment vêtu, qui avait les deux jambes coupées au-dessus des genoux.",
      "Le blessé, interrogé, répondit qu'il se nommait Martin Guillaume, mais il refusa catégoriquement de dire dans quelles circonstances il avait été aussi horriblement mutilé. De l'avis du docteur, son état est désespéré."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Meurtrier de treize ans",
    "summary": "Une banale dispute autour d'un jeu d'argent dans un terrain vague de la rue de Maistre a tourné au drame : un adolescent de treize ans a gravement blessé son camarade à coups de couteau.",
    "paragraphs": [
      "Dans la matinée d'hier, vers onze heures, plusieurs enfants jouaient à un jeu d'argent dénommé la « carte ajoutée » sous un hangar situé dans un terrain vague de la rue de Maistre.",
      "Eugène Artaux, âgé de treize ans, eut à un certain moment une vive discussion avec un autre gamin nommé Paul Doupry, âgé de onze ans. La querelle dégénéra en rixe.",
      "Eugène Artaux, ayant eu le dessous, s'arma d'un couteau à ressort avec lequel il frappa son adversaire dans le côté gauche. Le coupable a été mis à la disposition de M. Duprès, commissaire de police."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une ouvrière brûlée",
    "summary": "Accident domestique rue de l'Orillon : une jeune fleuriste est grièvement brûlée après que ses vêtements ont pris feu suite au renversement accidentel d'une lampe à pétrole.",
    "paragraphs": [
      "Dans la matinée d'hier, vers sept heures, une ouvrière fleuriste, Mme Adèle Junier, âgée de trente-six ans, demeurant rue de l'Orillon, renversa une lampe à pétrole. Les vêtements de la jeune femme prirent feu instantanément.",
      "Des voisins intervinrent pour éteindre le début d'incendie, mais Mme Junier a été très grièvement brûlée sur diverses parties du corps."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un drame d'amour",
    "summary": "Tragédie au quartier Montparnasse : un jeune homme de vingt et un ans a mis fin à ses jours en s'empoisonnant au cyanure, anéanti par le refus de mariage opposé par la famille de sa promise.",
    "paragraphs": [
      "La fin lamentable d'un fiancé trop épris a mis en émoi, hier soir, les habitants du quartier Montparnasse. Georges Pierre, âgé de vingt et un ans, a mis fin à ses jours en avalant du cyanure de potassium après un refus de mariage opposé par la famille de sa fiancée, Suzanne Galy."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un caissier",
    "summary": "M. Marie Ducerf, caissier sexagénaire, a été arrêté place de l'Opéra pour avoir détourné d'importantes sommes d'argent. Il a avoué avoir dilapidé les fonds au jeu et aux courses.",
    "paragraphs": [
      "M. Marie Ducerf, caissier âgé de soixante ans, ayant détourné une somme importante au sein de l'entreprise où il travaillait depuis vingt-cinq ans, a été arrêté hier place de l'Opéra par l'un de ses anciens employeurs.",
      "Ducerf a reconnu avoir perdu l'argent aux courses et au jeu. Il a été conduit au dépôt en attendant son extradition."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un petit cadavre dans un train",
    "summary": "Le parquet de la Seine a été avisé de la découverte, dans un wagon de seconde classe provenant d'Angers ou de Laval, du corps d'un nouveau-né présentant des traces de violences.",
    "paragraphs": [
      "Le parquet de la Seine a été informé de la découverte, dans un wagon de seconde classe d'un train venant d'Angers ou de Laval, du cadavre d'un nouveau-né étranglé et blessé à la poitrine."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Société",
    "title": "Le village suisse à Paris",
    "summary": "Le village suisse s'érige comme l'une des attractions les plus remarquables de l'Exposition. Près du palais des Machines, les montagnes artificielles se dressent déjà avec une allure saisissante.",
    "paragraphs": [
      "Le village suisse sera l'une des plus belles et des plus curieuses reconstitutions de l'Exposition. Du côté de l'avenue de Suffren, derrière le palais des Machines, on voit déjà pointer les cimes d'énormes montagnes transportées pour l'occasion."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Nouvelles des départements",
    "summary": "Chronique des faits divers régionaux : noyade tragique à Creil, drame passionnel à Noyon ayant entraîné une arrestation, et accident mortel de vapeur dans une usine du Mans.",
    "paragraphs": [
      "Creil : Une jeune femme, demeurée inconnue, s'est précipitée dans les eaux de l'Oise du haut du pont. Malgré les secours empressés, elle n'a pu être sauvée.",
      "Noyon : La nommée Elle Nouvel, âgée de vingt ans, a été frappée de plusieurs coups de couteau par son amant Désiré Carier, qui a été immédiatement arrêté.",
      "Le Mans : Un ouvrier de dix-neuf ans est mort asphyxié par un jet de vapeur lors d'un accident survenu dans une fabrique de machinerie."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Spectacles",
    "title": "Actualités des théâtres parisiens",
    "summary": "Grand succès pour les Dragons de Villars. Réorganisation du calendrier des premières au Vaudeville et concert exceptionnel de M. Colonne au Châtelet avec Mme Rose Caron.",
    "paragraphs": [
      "L'Opéra populaire, avec la représentation des Dragons de Villars, s'affirme comme un succès considérable. Le public est venu en nombre dimanche et a réservé un accueil des plus chaleureux aux interprètes.",
      "Rappelons que le prix des places a été modifié et fixé de 50 centimes à 4 francs maximum. Il est possible de retenir à l'avance des places pour chaque jour de la semaine, sans augmentation tarifaire, de onze heures du matin à sept heures et demie du soir, au bureau de location du théâtre.",
      "Après une entente entre les directeurs du Vaudeville et des Nouveautés, afin d'éviter la concomitance des premières, et compte tenu des dates réservées au Châtelet et au théâtre Antoine, M. Micheau a décidé d'ajourner à lundi prochain la première des Maria de la Mer.",
      "Dimanche prochain, à deux heures et quart, au théâtre du Châtelet, M. Colonne fera entendre le premier acte d'Orphée, de Gluck, avec le concours de Mme Rose Caron."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Concerts et divertissements",
    "title": "Programmes de l'Olympia et de la Scala",
    "summary": "Le nouveau spectacle de l'Olympia triomphe avec les Statey et Birbeck. À la Scala, Mme Liée Fleuron brille dans la revue Paris Cocorico, où les plaisanteries sur les hussards remportent un vif succès auprès du public.",
    "paragraphs": [
      "Le nouveau programme de l'Olympia obtient un gros et légitime succès. On ne parle dans tout Paris que des sensationnels Statey et Birbeck qui, en deux secondes exactement et sans le secours d'aucun aide, changent de costumes, ce qui tient du prodige.",
      "Depuis hier, c'est Mme Liée Fleuron qui a pris le rôle de la commère à la Scala dans Paris Cocorico, rôle qu'elle a joué au pied levé avec une grâce et une sûreté qui n'étonneront pas ceux qui connaissent la charmante artiste.",
      "Une des scènes les plus applaudies de la revue de la Scala est celle où Lejat, capitaine de hussards, pour se conformer à la circulaire du ministre de la Guerre, explique qu'il n'a pas voulu quitter son uniforme la nuit de ses noces. Ces frondeuses plaisanteries abondent dans la pièce de MM. Héros et Mougel."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Feuilleton",
    "title": "Deux Passions - Grand roman inédit",
    "summary": "Le marquis Jacques d'Anville se jette dans le fleuve au péril de sa vie pour porter secours aux victimes d'un naufrage. Malgré une lutte acharnée contre les eaux, l'incertitude demeure quant au sort des disparues.",
    "paragraphs": [
      "Le crime. Un frisson d'angoisse passa dans les veines du marquis. Cette barque ne pouvait être que celle du mari de Suzanne.",
      "Il poussa son cheval, l'éperon au ventre, dans un galop furieux, aussi près que possible du lieu du naufrage, se jeta à terre et arracha ses vêtements à la hâte. En un clin d'œil, il sauta dans le fleuve, suivi du Breton qui criait : « Ayez pas peur, mon commandant ! »",
      "Il nagea vigoureusement vers les deux femmes. Lorsqu'il arriva à l'endroit où il les avait aperçues, elles avaient disparu. D'un coup d'œil, il venait de lire à l'arrière de la barque chavirée : Georgette.",
      "Il plongea avec l'énergie du désespoir, toujours suivi de Brinic qui ne le quittait pas. Deux fois, ils remontèrent à la surface de l'eau, seuls, ruisselants comme des tritons, le visage convulsé par l'angoisse. Enfin, après un troisième effort, Jacques d'Anville reparut en appelant d'une voix étouffée : « À moi, Brinic ! Au secours ! »"
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Sports",
    "title": "Résultats des épreuves automobiles et matchs de football",
    "summary": "La saison automobile s'ouvre à Nice avec les prouesses de M. Pinson et du baron de Rothschild. Sur le terrain, le Racing-Club Roubaisien s'impose avec brio face à l'équipe du Paris-Star.",
    "paragraphs": [
      "La Coupe de Nice, la première épreuve automobile de la saison, a été courue avant-hier. Voici les résultats : M. Pinson a effectué le parcours en 5 h 37' 44\"; le baron de Rothschild en 4 h 33' 27\". La course des voiturettes est revenue à M. Thierry, en 3 h 3' 10\".",
      "Le match de football qui mettait avant-hier aux prises, à Roubaix, le Paris-Star et le Racing-Club Roubaisien, a été gagné par cette dernière équipe, trois buts à zéro."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Informations diverses",
    "title": "Communications de l'Union des restaurateurs et conférences",
    "summary": "L'Union des restaurateurs et limonadiers convie ses membres à son bal annuel au Continental. Par ailleurs, une conférence scientifique sur l'évolution des routes est programmée rue Danton.",
    "paragraphs": [
      "Rappelons que le grand bal annuel de l'Union des restaurateurs et limonadiers de la Seine et de Seine-et-Oise aura lieu au Continental, demain mercredi soir.",
      "À l'hôtel des Sociétés savantes, 8, rue Danton, après-demain soir, 8 février, conférence organisée par l'Association française pour l'avancement des sciences. M. Forestier, inspecteur général des ponts et chaussées, parlera de la route à travers les âges."
    ]
  }
];
