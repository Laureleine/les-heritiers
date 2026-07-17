// Date: 1900-07-18
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-07-18 (Version Restaurée, 45 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie Sociale",
    "title": "Le travail des femmes : enquête sur les conditions ouvrières",
    "summary": "Une analyse rétrospective des vœux de 1867 sur le travail féminin, comparant les situations française, américaine et anglaise pour souligner les disparités de conditions sociales et salariales.",
    "paragraphs": [
      "En parcourant l'autre jour les vœux des délégations ouvrières qui visitèrent l'Exposition de 1867, nous fûmes frappés de la concordance qu'ils présentaient au point de vue du travail des femmes.",
      "Règle générale, les délégués condamnaient cette pratique, relativement nouvelle encore, et ils appuyaient leur sentiment sur des raisons qui n'ont point perdu de leur valeur. Le travail des femmes est de nature à faire baisser le taux normal des salaires et est une cause de décadence sous le rapport de la solidité et du fini de l'exécution.",
      "Le mal n'est point particulier à la France. Aux États-Unis, une enquête confiée à M. Carroll-Wright a montré que le salaire moyen est d'environ 4 francs par jour. Toutefois, la condition réelle dépend du pouvoir d'achat et des dépenses de subsistance. Il apparaît qu'aux États-Unis, le salaire normal du mari suffit souvent à nourrir la femme, contrairement à l'Europe.",
      "C'est surtout quand on compare la condition de l'ouvrière américaine à celle de l'ouvrière anglaise qu'apparaît la supériorité des États-Unis, ces dernières subissant des conditions de travail inhumaines pour des salaires de misère.",
      "Sans doute la condition de l'ouvrière française n'est point aussi heureuse que celle de l'ouvrière américaine, mais comparée à l'ouvrière anglaise, elle est une privilégiée."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Main Gauche (Deuxième partie)",
    "summary": "Le magistrat Marcel Vandenesse, tiraillé entre ses devoirs et son ancienne amitié pour le comte de Terrique, cède une pièce à conviction, tandis que les relations au foyer des Duhalier s'enveniment.",
    "paragraphs": [
      "Le magistrat Marcel Vandenesse, après avoir renvoyé les témoins, s'apprêtait à prendre un répit le dimanche. Cependant, il devait décider du sort du comte Raymond de Terrique.",
      "Les agents vinrent lui demander de confier le médaillon, une pièce à conviction importante. Le magistrat, bien qu'hésitant, le leur tendit, sentant lui échapper la chance de sauver son ancien ami de collège d'un scandale.",
      "Gaston Duhalier, revenu du Dauphiné, retrouve les siens dans l'angoisse. Odette, son épouse, commence à voir dans la disparition de son mari une insulte. La visite de Solange de Boffront exacerbe les tensions entre les deux femmes, sur fond de secrets passés et de rancœurs."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Cambrioleurs lynchés à Montreuil-sous-Bois",
    "summary": "Violent fait divers à Montreuil-sous-Bois : surpris en plein délit avenue de Saint-Mandé, deux cambrioleurs ont été roués de coups par une foule en colère avant d'être appréhendés par les autorités.",
    "paragraphs": [
      "D'audacieux cambrioleurs s'introduisaient hier matin par effraction dans un appartement avenue de Saint-Mandé à Montreuil-sous-Bois. Surpris par le propriétaire, M. Bouvallet, ils ont tenté de s'échapper en menaçant la foule avec des couteaux.",
      "Deux d'entre eux ont été lynchés par la foule avant l'arrivée des agents. L'un des malfaiteurs a été grièvement blessé et transporté à l'infirmerie spéciale, tandis que son complice a été conduit au poste de police."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Actualité Militaire",
    "title": "Manœuvres d'Artillerie de Forteresse à Mourmelon",
    "summary": "Sous la direction du général Gras, sept bataillons d'artillerie de forteresse ont entamé d'importants exercices de tirs réels au camp de Châlons contre une fortification factice.",
    "paragraphs": [
      "Les manœuvres de masse de l'artillerie de forteresse ont commencé hier au camp de Châlons sous le commandement du lieutenant-colonel Saint-Yves. Sept bataillons prennent part à ces exercices sous la direction du général Gras.",
      "Plusieurs milliers de projectiles seront tirés sur un fort en maçonnerie construit pour l'occasion. Le service d'aérostation de siège participe également à ces exercices."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Le courrier d'Indo-Chine",
    "summary": "La situation est tendue en Indo-Chine. Le général Chaumont renforce la protection des frontières du Yunnan alors que la disparition de documents militaires confidentiels suscite une vive émotion.",
    "paragraphs": [
      "En Indo-Chine et au Tonkin, les premières nouvelles de la guerre se sont répandues malgré les précautions prises. Le général Chaumont a massé ses forces à la frontière du Yunnan pour protéger les compatriotes.",
      "Une vive émotion règne dans le monde militaire suite à la disparition d'un plan d'opérations important concernant la défense des frontières."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Audacieuse évasion au fort Saint-Jean",
    "summary": "Détenu au fort Saint-Jean pour désertion, le soldat Bariola s'est évadé le 14 juillet en tentant de gagner le large à la nage. Malgré les tirs de la sentinelle qui l'ont blessé, il a réussi à rejoindre ses complices.",
    "paragraphs": [
      "Un soldat nommé Bariola, détenu au fort Saint-Jean pour désertion, s'est évadé le 14 juillet en se jetant à la mer afin de rejoindre des barques de complices qui l'attendaient. Malgré les tirs de la sentinelle qui l'ont atteint et blessé au bras, le fugitif a réussi à s'échapper par le large."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Reportage",
    "title": "L'odyssée d'un légionnaire évadé",
    "summary": "Un légionnaire prisonnier au Figuig raconte son calvaire. Menacé de décapitation, il a réussi à s'enfuir en creusant sa geôle avant de parvenir, épuisé et blessé, à rejoindre une patrouille française.",
    "paragraphs": [
      "Un légionnaire fait prisonnier par les Marocains au Figuig a relaté son calvaire. Après avoir été brutalement maltraité et menacé de décapitation, il a réussi à s'évader au péril de sa vie en creusant un passage dans la paroi de sa geôle.",
      "Après une nuit entière de marche sur les rochers, pieds nus et grièvement blessé, il a finalement réussi à rejoindre une patrouille française qui patrouillait aux abords de la zone."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "Le conflit en Chine et la situation à Tien-Tsin",
    "summary": "La ville de Tien-Tsin est tombée aux mains des Alliés après de violents combats. À Londres, la Chambre des communes s'inquiète du sort des légations tandis que l'offensive vers Pékin demeure complexe.",
    "paragraphs": [
      "La ville chinoise de Tien-Tsin a été prise par les forces alliées après de violents combats. Néanmoins, les troupes étrangères ont subi des pertes considérables et manquent cruellement de renforts pour consolider leurs positions.",
      "Le bombardement intensif de la concession française a causé de lourds dommages matériels. À Londres, la Chambre des communes exprime ses vives craintes concernant le massacre des légations occidentales à Pékin.",
      "Des télégrammes officiels confirment la violence extrême des affrontements et la difficulté pour les puissances alliées de progresser vers la capitale face aux défenses chinoises modernes."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "International",
    "title": "La situation en Chine",
    "summary": "Un édit impérial ordonne aux vice-rois de faire la guerre aux étrangers. Des corps d'élite, mêlant Boxers et troupes impériales, sont mobilisés pour l'offensive, alors que le trouble s'étend au Chékiang.",
    "paragraphs": [
      "Un édit impérial, daté du 3 juillet, prescrit aux vice-rois de commencer la guerre contre les étrangers. « Nous savons bien », déclare l'auteur de cet édit, « que les forces combattantes ne sont pas nombreuses dans les provinces. C'est pourquoi nous avons formé des corps d'élite, composés de Boxers et de troupes impériales, qui partiront dans le Sud pour vous prêter assistance. »",
      "Une autre dépêche du 7 annonce l'envoi de cinq régiments vers le Sud, laissant présager que d'autres contingents suivront sous peu.",
      "Cheng, directeur des chemins de fer, a informé les consuls de Shanghaï que les troubles s'étendent désormais dans la province du Chékiang. Plusieurs généraux commandant dans la région du Yang-Tsé éprouvent ouvertement la plus vive sympathie pour les Boxers."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Militaire",
    "title": "Le corps expéditionnaire en Chine",
    "summary": "Le 15 juillet, plus de 20 000 soldats alliés étaient débarqués ou en route vers Takou. La Russie fournit le contingent majeur, suivie du Japon et de l'Angleterre, malgré des capacités de débarquement limitées.",
    "paragraphs": [
      "D'après les chiffres communiqués à la Chambre des communes, les troupes débarquées ou en cours de débarquement à Takou s'élevaient, au 15 juillet, à 20 700 hommes, ainsi répartis : Russie, 8 200 hommes avec 149 officiers ; Japon, 5 100 hommes avec 124 officiers ; Angleterre, 3 000 hommes avec 175 officiers ; France, 2 100 hommes avec 103 officiers ; Allemagne, 800 hommes avec 36 officiers ; Amérique, 800 hommes avec 10 officiers ; auxquels s'ajoutent deux petits détachements d'Italiens et d'Autrichiens.",
      "Des effectifs considérables débarquent actuellement ou sont en route, bien que les facilités de débarquement au port de Takou demeurent fort limitées."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Militaire",
    "title": "Services médicaux et logistiques en Chine",
    "summary": "Préparatifs militaires pour l'expédition en Chine : le transport Sinaï embarquera prochainement des troupes, tandis que des navires-hôpitaux et des coolies assureront le soutien logistique et sanitaire nécessaire.",
    "paragraphs": [
      "Le transport Sinaï, des Messageries maritimes, est attendu à Tunis dans quelques jours pour embarquer 26 officiers, 745 hommes d'infanterie et un certain nombre de mulets à destination de la Chine.",
      "Le navire La Nive a été aménagé pour servir de bâtiment-hôpital, et le Vinh-Long pour servir d'hôpital d'évacuation. Il y aura, en outre, une ambulance de campagne pour chaque brigade et trois hôpitaux de campagne pour assurer la réception des malades.",
      "On a prévu deux médecins par bataillon et un médecin par batterie. Chaque soldat est équipé pour les deux saisons, avec des tenues coloniales en toile pour l'été et des effets de drap, des tricots de laine et des bérets alpins pour l'hiver.",
      "Enfin, pour ménager les forces des troupes, des coolies indigènes ont été affectés à toutes les compagnies pour les travaux pénibles, le transport de matériel et le service de cuisine."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Rapports d'engagements au Transvaal",
    "summary": "Le commandant Delarey signale de nouveaux succès boërs : capture de matériel de guerre et de prisonniers britanniques lors d'engagements à Mosolikatse-Nek, Lindley et Villiersdorp.",
    "paragraphs": [
      "Le commandant Delarey rend compte d'un engagement ayant eu lieu avec les Anglais à Mosolikatse-Nek, à 20 milles à l'ouest de Prétoria. Il rapporte que deux canons et une mitrailleuse Maxim ont été pris aux Anglais. Les Burghers ont également capturé 100 hommes et 6 officiers.",
      "Les communications télégraphiques avec Mathadodorp sont coupées. Les Burghers du commando de Hazelbrook ont pris trois canons aux Anglais à Lindley, et les Boërs ont repris Villiersdorp et Francfort. Le pont de Witpoort a été détruit par les Boërs."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Arrestations à Johannesburg et situation militaire",
    "summary": "À Johannesburg, 80 étrangers ont été incarcérés pour soupçons de complot. Parallèlement, les troupes britanniques subissent des conditions climatiques rigoureuses et des pénuries d'équipement.",
    "paragraphs": [
      "Le lieutenant-colonel directeur du service des renseignements à Prétoria a fait arrêter et incarcérer 80 personnes de nationalités étrangères à Johannesburg. Ces individus sont accusés d'avoir manifesté des signes d'agitation et sont soupçonnés d'avoir ourdi un complot visant à troubler l'ordre public.",
      "Les consuls respectifs ont été avisés que les autorités étaient prêtes à relâcher les prisonniers si leurs représentants se portaient garants de leur bonne conduite à l'avenir.",
      "Le Daily Express reçoit une dépêche indiquant que les troupes anglaises souffrent grandement du froid et manquent de chaussures et de vêtements. Le général Clery est retourné auprès de Greylingstadt sur le Vaal."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident à bord du croiseur Garibaldi",
    "summary": "Lors de manœuvres au large de Verazze, l'explosion de chaudières à bord du croiseur Garibaldi a provoqué la mort d'un charbonnier et causé de graves blessures à deux chauffeurs.",
    "paragraphs": [
      "Le croiseur Garibaldi effectuait des manœuvres au large de Verazze quand les tubes des chaudières n° 13 et 16 volèrent en éclats. Un charbonnier, Arturo Giovanelli, fut tué sur le coup, et deux chauffeurs furent grièvement blessés. Une enquête est ouverte."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Catastrophe en Norvège",
    "summary": "Drame lors d'une fête forestière sur l'île d'Usk : l'effondrement d'un embarcadère provisoire a causé la noyade de plusieurs convives. Huit corps ont été retrouvés à ce jour.",
    "paragraphs": [
      "Pendant une fête dans une forêt sur l'île d'Usk, un embarcadère provisoire s'est écroulé, précipitant les personnes présentes dans la mer. On a retrouvé, jusqu'à présent, huit cadavres."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendies en Russie",
    "summary": "Le Château des Fleurs, café-concert renommé de Kiev comptant des artistes français, a été détruit par un incendie, tout comme la manufacture de coton de Frendenberg à Lodz. Aucun bilan humain n'est à déplorer.",
    "paragraphs": [
      "Le Château des Fleurs, grand café-concert de Kiev où se produisaient des artistes français, a été entièrement la proie des flammes, sans toutefois faire de victimes. À Lodz, la manufacture de coton de Frendenberg a également été ravagée par un violent incendie au cours de la nuit."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "International",
    "title": "Insurrection colombienne et situation aux Achanti",
    "summary": "Le gouvernement colombien a capturé la flottille rebelle. Parallèlement, la colonne de secours anglaise est parvenue à délivrer Coumassie, au cœur du pays des Achanti.",
    "paragraphs": [
      "Le gouvernement colombien s'est officiellement emparé de la flottille des révolutionnaires. Par ailleurs, Coumassie, capitale au pays des Achanti, a été libérée de son siège par l'arrivée de la colonne de secours anglaise."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "L'Exposition malgré la canicule",
    "summary": "Malgré la chaleur accablante et les nuages de poussière, l'affluence du public à l'Exposition universelle ne désemplit pas, témoignant d'un intérêt constant pour l'événement.",
    "paragraphs": [
      "En dépit d'une chaleur suffocante et des tourbillons de poussière soulevés sur l'esplanade, le public continue d'affluer en nombre vers l'Exposition universelle, signe manifeste de l'intérêt passionné que portent les foules à cette manifestation grandiose."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Délégation de Prague à l'Hôtel de Ville",
    "summary": "Une délégation de la municipalité de Prague sera reçue au pavillon de la Ville de Paris. Le bourgmestre remettra un coffret d'aquarelles historiques de Bohême, destiné au salon d'honneur.",
    "paragraphs": [
      "Une délégation officielle de la municipalité de Prague sera très prochainement reçue au pavillon de la Ville de Paris. À cette occasion, M. le bourgmestre de Prague remettra un coffret précieux renfermant des aquarelles représentant les monuments historiques de Bohême, lesquelles seront exposées au salon d'honneur."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Le Musée du Luminaire",
    "summary": "Le musée discret des Invalides expose une collection rare d'objets d'éclairage, du lustre gallo-romain à l'époque impériale, dont une lanterne historique exceptionnelle.",
    "paragraphs": [
      "Situé dans l'enceinte des Invalides, ce petit musée discret regroupe une collection remarquable d'objets d'éclairage de diverses époques, du lustre gallo-romain aux pièces raffinées de la Renaissance jusqu'au Premier Empire. La pièce maîtresse de cette exposition demeure une lanterne historique provenant de la crèche de Marie Houault et de Charles Le Jeune."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Chiffres des entrées",
    "summary": "L'affluence à l'Exposition Universelle demeure soutenue. Le décompte du lundi confirme une fréquentation importante, portée par la baisse du cours officiel des tickets à 40 centimes.",
    "paragraphs": [
      "Le chiffre total des entrées pour la journée de lundi a été très satisfaisant, marquant une répartition constante entre les entrées payantes, les entrées gratuites et les jetons délivrés aux ouvriers. Par ailleurs, le cours officiel des tickets d'entrée a été ramené à 40 centimes, favorisant ainsi l'accès du public aux diverses sections de l'Exposition."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Militaire",
    "title": "Manœuvres alpines",
    "summary": "Après la pause observée lors de la Fête nationale, les troupes alpines de la division de Chambéry reprennent leurs exercices. Les bataillons de Grenoble et des Hautes-Alpes évolueront en août dans la vallée du Guil.",
    "paragraphs": [
      "Les troupes alpines de la division de Chambéry ont repris leur marche rigoureuse après la courte trêve observée pour la Fête nationale. Les bataillons de Grenoble et des Hautes-Alpes poursuivront leurs manœuvres durant le mois d'août dans le secteur escarpé de la vallée du Guil."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Militaire",
    "title": "Manœuvres de Division à Toulouse",
    "summary": "Sous la direction du général de Forsanz, les 16e et 18e brigades de cavalerie tiendront des manœuvres de division sur la lande de Lannemezan au cours du mois d'août.",
    "paragraphs": [
      "Les 16e et 18e brigades de cavalerie s'apprêtent à effectuer des manœuvres de division durant le mois d'août sur le terrain de la lande de Lannemezan. Ces exercices se dérouleront sous le haut commandement du général de Forsanz."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Vie Locale",
    "title": "Fêtes de Thonon-les-Bains et Souvenir français",
    "summary": "Thonon-les-Bains a célébré le sauvetage et les anciens combattants. À Luzancy, le Souvenir français a présidé à l'inauguration solennelle d'un monument dédié aux soldats morts pour la patrie.",
    "paragraphs": [
      "De brillantes fêtes ont été célébrées à Thonon-les-Bains, réunissant la Société internationale de sauvetage et les courageux Vétérans de 1870. Parallèlement, à Luzancy, un monument érigé en l'honneur des morts pour la patrie a été inauguré avec ferveur sous les auspices de l'association du Souvenir français."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Maritime",
    "title": "Lancement d'un torpilleur au Havre",
    "summary": "Le torpilleur n° 145, conçu par les Forges et Chantiers de la Méditerranée, a été mis à l'eau au Havre. Ce bâtiment marque un tournant technique en devenant le premier navire français équipé de moteurs à turbines.",
    "paragraphs": [
      "Le torpilleur n° 145, construit avec soin par les Forges et Chantiers de la Méditerranée, a été lancé avec succès dans les chantiers du Havre. Il convient de souligner que ce bâtiment est le tout premier navire de la flotte française à être équipé de moteurs à turbines."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Marine",
    "title": "Revue navale à Cherbourg",
    "summary": "L'amiral Gervais a passé en revue les troupes de débarquement de l'armée navale à Cherbourg, mobilisant 4 000 hommes en préparation de la visite officielle du Président de la République.",
    "paragraphs": [
      "L'amiral Gervais a passé en revue les troupes de débarquement de l'armée navale à Cherbourg. L'événement, marquant la préparation de la visite du Président de la République, a mobilisé quatre mille hommes et une importante logistique."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Faits Divers",
    "title": "Meurtre à Bordeaux",
    "summary": "Un tragique fait divers s'est produit à Bordeaux : un chaudronnier a été abattu par le débitant d'un café rue Billaudel suite à une altercation. M. Bazin, l'auteur des faits, s'est rendu aux autorités.",
    "paragraphs": [
      "Un chaudronnier a été abattu par le débitant d'un café de la rue Billaudel, à la suite d'une dispute au sujet de consommations. Le meurtrier, nommé Bazin, a été arrêté après s'être constitué prisonnier auprès des autorités."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident mortel d'automobile",
    "summary": "Au retour de Ville-d'Avray, un tragique accident d'automobile a causé le décès de M. Jacques Ellissen, âgé de 25 ans, projeté de son véhicule lors d'une collision violente avec une tapissière.",
    "paragraphs": [
      "M. Jacques Ellissen, âgé de 25 ans, est décédé des suites d'un accident survenu au retour de Ville-d'Avray, lorsque l'automobile dans laquelle il circulait a violemment heurté une tapissière. Projeté sur la chaussée, le jeune homme a succombé à une fracture du crâne."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Arts",
    "title": "La céramique moderne",
    "summary": "La céramique, art exigeant de lutte contre la matière et le feu, trouve en des maîtres comme Bernard Palissy ses plus illustres représentants. Cet art traditionnel connaît aujourd'hui une éclatante renaissance.",
    "paragraphs": [
      "La céramique est un art exigeant, une lutte constante contre la matière et le feu. Des maîtres tels que Bernard Palissy ont élevé cette discipline, usant de la faïence, de la porcelaine et du grès, à un niveau de prestige historique, illustré aujourd'hui par des œuvres remarquables à l'Exposition."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Art et Industrie",
    "title": "La céramique française à l'Exposition universelle",
    "summary": "La céramique française confirme son excellence à l'Exposition universelle. Grâce au savoir-faire de la manufacture de Sèvres, elle surpasse désormais ses concurrentes étrangères par sa beauté et son prestige.",
    "paragraphs": [
      "La fontaine de Sèvres n'est pas le seul exemple existant à l'Exposition universelle du remploi que l'on peut faire du grès cérame.",
      "La frise ornementale du Grand Palais des Beaux-Arts, conçue par Joseph Blanc et exécutée par les collaborateurs de notre manufacture nationale, ainsi que les portiques et frises ornementales des autres pavillons, témoignent de la supériorité de la céramique française.",
      "Les anciennes fabriques nous ont légué des œuvres incomparables ; nos manufactures actuelles s'efforcent de les égaler. La céramique française est supérieure, à l'heure actuelle, à sa concurrente étrangère.",
      "Après dix ans de recherches, la manufacture de Sèvres a réussi à produire des œuvres si parfaitement belles qu'on se les dispute à prix d'or.",
      "Les grands musées de l'étranger ont fait l'acquisition de ces splendides porcelaines et émaux cristallisés, qui resteront dans l'histoire de la céramique.",
      "La céramique, encore rangée dans la catégorie des industries de luxe, tend à se populariser de plus en plus ; avant peu, elle tiendra l'un des premiers rangs dans le monde."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Conflit social au Creusot",
    "summary": "La direction des usines du Creusot notifie le licenciement des ouvriers de la forge ayant rompu leur contrat le 13 juillet et organise le recrutement d'un nouveau personnel dans ses bureaux.",
    "paragraphs": [
      "L'avis suivant a été affiché par les soins de la direction des usines : « Les ouvriers de la forge ayant, le vendredi 13 juillet, rompu leur contrat de travail, ont par le fait même cessé de faire partie du personnel. »",
      "Ceux d'entre eux qui désirent travailler sont invités à se présenter au bureau d'embauchage. Les différents trains seront équipés dans la mesure que le nombre de demandes admises permettra."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Triple noyade en Seine",
    "summary": "Un drame fluvial a coûté la vie à trois personnes lors d'une promenade en bateau. M. Jean Hamontier, témoin, n'a pu secourir que la jeune Berthe Deparize, qui a succombé malgré son intervention.",
    "paragraphs": [
      "Dans la soirée de dimanche, un ouvrier, M. Jean Hamontier, âgé de 35 ans, se promenait à la porte Saint-Denis lorsqu'il fit la rencontre de deux jeunes gens et d'une jeune femme.",
      "La chaleur étant accablante, ils prirent un bachot qui, trop vieux, s'emplit d'eau et s'enfonça. Les trois imprudents disparurent au milieu du fleuve.",
      "L'ouvrier s'élança pour les secourir, mais ne réussit qu'à ramener la femme, qui ne donnait plus signe de vie. Un docteur appelé ne put que constater le décès. L'identité des deux hommes n'a pas été établie, et celle de la femme, Berthe Deparize, a été confirmée par une carte de visite."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Actualités diplomatiques et mondaines",
    "summary": "Le Président de la République a reçu officiellement le prince Ferdinand de Bulgarie et l'envoyé de l'empereur d'Éthiopie. Parallèlement, les dépenses somptuaires du shah de Perse suscitent des commentaires.",
    "paragraphs": [
      "Le Président de la République a reçu hier à l'Élysée la visite du prince Ferdinand de Bulgarie. Il a également reçu en audience officielle l'envoyé extraordinaire de l'empereur d'Éthiopie.",
      "On s'interroge sur les dépenses du shah de Perse durant son séjour en France, qui a coûté une somme considérable, sans compter les nombreux cadeaux et bijoux offerts."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Science et Découvertes",
    "title": "Le langage sifflé aux îles Canaries",
    "summary": "Un explorateur allemand a présenté les mécanismes du langage sifflé utilisé par les indigènes de l'île de Gomera, une méthode permettant de communiquer des phrases complexes sur de grandes distances.",
    "paragraphs": [
      "Un explorateur allemand, de retour des îles Canaries, a fait une conférence sur le langage sifflé dont se servent les indigènes, notamment sur l'île de Gomera.",
      "Pour communiquer à de grandes distances, les habitants sifflent entre leurs doigts des phrases entières, chaque son représentant une syllabe, permettant ainsi de soutenir une conversation sur n'importe quel sujet."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie à Saint-Mandé",
    "summary": "Un violent incendie a ravagé les dépendances de la boulangerie Pérot à Saint-Mandé. Malgré la blessure du sapeur Désiré Dezard, l'enquête de police exclut toute piste criminelle.",
    "paragraphs": [
      "Un incendie d'une extrême violence s'est déclaré hier dans les dépendances de la boulangerie Pérot, 70 bis, Grande-Rue-de-la-République. Les pompiers de Saint-Mandé ont mis trois heures à maîtriser le sinistre.",
      "Un pompier, le sapeur Désiré Dezard, a été grièvement blessé. M. Reboudin, commissaire de police de Vincennes, a ouvert une enquête, mais toute idée de malveillance est écartée."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Météorologie",
    "title": "Vague de chaleur exceptionnelle",
    "summary": "Une canicule historique frappe la France, avec 37 degrés relevés à l'ombre. Paris et Londres enregistrent de nombreux cas d'insolation, marquant un épisode de chaleur inédit depuis un siècle.",
    "paragraphs": [
      "La France subit une température accablante, le thermomètre ayant atteint jusqu'à 37 degrés à l'ombre lundi, un niveau rarement égalé depuis cent ans.",
      "Plusieurs cas d'insolation se sont produits à Paris, notamment celui d'une couturière, Mme Marcot, et d'un journalier, M. Louis Fleury, tous deux hospitalisés. Le phénomène touche également Londres où sept décès par insolation ont été rapportés."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Publicité",
    "title": "L'Agriculture Nouvelle",
    "summary": "Présentation du journal 'L'Agriculture Nouvelle', publication spécialisée à 10 centimes offrant aux cultivateurs des conseils experts et une veille sur les dernières avancées rurales.",
    "paragraphs": [
      "Le Petit Parisien édite L'Agriculture Nouvelle au prix de 10 centimes.",
      "Ce journal, exclusivement agricole, rédigé par une réunion de professeurs et de praticiens, tient le public au courant de toutes les manifestations, découvertes ou nouvelles applications agricoles. Il publie chaque semaine un grand nombre d'articles variés. L'Agriculture Nouvelle est un guide précieux pour tous les cultivateurs et les personnes s'intéressant aux questions rurales."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Chronique",
    "title": "Barres Collections",
    "summary": "Le testament du comte de Finsiedeln révèle un legs singulier au musée de Berlin : une collection de fragments de jarretières ayant appartenu à des figures royales et impériales allemandes.",
    "paragraphs": [
      "Le comte de Finsiedeln, qui vient de mourir, a légué par testament au cabinet historique des musées berlinois une originale collection de jarretières. Ces accessoires provenaient d'impératrices, reines et princesses d'Allemagne auprès desquelles le comte vécut en qualité de chambellan.",
      "On peut y admirer, entre autres spécimens, les jarretières de l'impératrice Victoria-Augusta, épouse de Guillaume II ; de ses trois sœurs, la princesse Sophie de Grèce, la princesse de Saxe-Meiningen, la princesse de Schaumburg-Lippe, ainsi que celles de l'impératrice Frédéric, de l'impératrice Augusta, de la reine Louise de Prusse et de la reine Charlotte-Sophie.",
      "Malheureusement, il est impossible de connaître, par ces fragments, le galbe exact des jambes de leurs augustes propriétaires. Elles ne sont point intactes, n'étant que de menus morceaux portant, brodés à la main, les chiffres des personnages auxquels ils appartenaient.",
      "La tradition voulait en Allemagne qu'à la porte de la chambre nuptiale, le nouveau mari fasse présent aux maréchaux de la cour, ministres et maîtres de cérémonie accompagnant le couple, d'un bout de la jarretière de la mariée.",
      "C'est l'ensemble de ces bouts que le comte de Finsiedeln a légué aux musées royaux de Berlin.",
      "Les jarretières bénéficient d'une situation privilégiée dans l'habillement, étant nobles de droit. Le principal ordre de la couronne britannique, l'ordre de la Jarretière, n'est-il pas accordé aux souverains et aux hommes d'État ?",
      "L'un de ses insignes consiste en une jarretière azurée nouée autour de la jambe gauche. Le port de la culotte, obligatoire à la cour d'Angleterre, facilite cet usage. Par exception, la reine attache l'insigne au bras, dérogeant ainsi à l'usage établi."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le crime de Saint-Amand (Chapitre)",
    "summary": "En proie à une agitation nerveuse, Gabrielle se prépare à quitter précipitamment le domaine pour se rendre à Montbert, laissant sa mère adoptive, Catherine, dans l'inquiétude face à son attitude trouble.",
    "paragraphs": [
      "Sur la réponse affirmative du valet de chambre, « Faites-le avancer », ordonna la fiancée de Michel. Puis elle sonna.",
      "Une de ses femmes de chambre accourut. « Vite », dit Gabrielle, « un chapeau de ville et des gants frais ». La jeune fille disparut.",
      "Au bruit des paroles échangées dans le hall, Catherine se montra. « Allez-vous sortir, mon trésor ? » demanda-t-elle.",
      "« Oui. Quelle figure vous avez ! Il ne vous arrive rien, au moins ? » « Non, rien. Laisse-moi. Tu me fatigues, tout me fatigue. »",
      "« Hélène est dans le parc, vous ne voulez pas que je l'appelle ? J'ai assez de vous voir aller seule comme vous êtes. » « Voyons, nounou, tu sais bien qu'à certains moments il ne faut pas insister. Vous n'êtes pas fâchée au moins ? » « Non, non et non ! Mais tais-toi, par grâce, veux-tu ? »",
      "Catherine Givrac n'ouvrit plus la bouche. Elle vit Gabrielle monter dans son coupé sans avoir donné d'autre adresse que celle-ci : « À Montbert ».",
      "« Qu'a-t-elle ? » se répéta vingt fois de suite la vieille femme.",
      "En effet, lors de l'enquête de Michel, pendant qu'il était en prison, Gabrielle était fréquemment dans ces états d'énervement. Depuis, sa douceur avait repris le dessus. Pour sûr, pensait la mère d'Hélène, il y a encore quelque chose en l'air."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Chronique",
    "title": "Histoire de la jarretière",
    "summary": "Une étude historique sur l'évolution de la jarretière, passée d'objet de luxe orné de bijoux au Moyen Âge à symbole galant, illustrée par les usages des cours européennes et des inventaires royaux.",
    "paragraphs": [
      "Édouard III dansait avec la comtesse de Salisbury quand elle perdit sa jarretière. En se baissant pour la ramasser, il vit des courtisans sourire. « Messieurs », leur dit-il, « honni soit qui mal y pense ! Ceux qui se moquent de cette jarretière seront trop heureux d'en porter une semblable. »",
      "Quelques jours plus tard, Édouard III instituait son fameux ordre. Au temps d'Édouard III, et jusqu'à la Révolution, les jarretières n'étaient point rangées parmi les objets de toilette intime.",
      "L'exercice du cheval et l'ensemble brusque des habitudes découvraient souvent la jambe : les bas-de-chausses étaient richement brodés et les jarretières de véritables bijoux. Il faut donc éloigner de son esprit, en évoquant la jarretière du Moyen Âge, les pensées légères rattachées à la nôtre.",
      "En 1455, Jehan Lessayeur, orfèvre, reçut de la duchesse d'Orléans la commande de deux jarretières d'or émaillées. Les hommes leur faisaient également concurrence sur ce point tant que la culotte prévalut.",
      "L'inspecteur des musées de Saint-Étienne, M. Alphonse Maze-Sencier, mentionne dans la Notice des émaux du Louvre une jarretière sur tissu de soie, garnie d'or, de perles, de diamants et de rubis. Dans les inventaires des ducs de Bourgogne, on trouve également trace de jarretières d'or.",
      "Les ecclésiastiques portaient aussi la jarretière de luxe. Bussy-Rabutin rapporte que, durant le deuil de la duchesse d'Orléans, les cardinaux venaient à la cour avec des bas de soie couleur de feu et des jarretières de tissu d'or.",
      "À Versailles, sous Louis XIV, chaque pièce du costume était garnie de rubans, de perles et de boucles. Deux parures livrées par Montarsy en 1685 s'élevaient à des sommes considérables.",
      "Les meilleures jarretières provenaient alors d'un magasin rue Darnetal, à l'enseigne du Signe de la Croix. Plus tard, Voltaire écrivait à Mme de Fontaine : « Mme Denis a cru qu'on ne pouvait avoir une jarretière bien faite sans la faire venir de Paris à grands frais. »",
      "La mode a changé et les jarretières de luxe se font aujourd'hui surtout outre-Manche. La dernière mentionnée dans les annales de la coquetterie est celle offerte à la tragédienne Rachel : en or émaillé, elle portait en diamants une correction galante à la devise britannique.",
      "Les jarretières laissent aujourd'hui les collectionneurs indifférents. La seule collection française importante est celle de Mme Jubinal de Saint-Albin, où l'on remarque une jarretière en soie rose brodée du seizième siècle.",
      "Les devises ornant ces accessoires au dix-huitième siècle, bien que simples, témoignent de l'esprit du temps. C'est dans ces détails insignifiants que se révèlent le mieux les mœurs et l'état d'esprit d'une époque, comme le savaient les Goncourt."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Nouvelles des spectacles",
    "summary": "L'Opéra-Comique programme Louise face au succès de l'œuvre de Gustave Charpentier. Les Variétés préparent leurs affiches estivales avec Offenbach et le retour attendu de Mme Simon-Girard en août.",
    "paragraphs": [
      "L'Opéra-Comique donnera, la semaine prochaine, la représentation de Louise. Il y a longtemps qu'un ouvrage lyrique n'avait obtenu d'une traite un succès pareil à celui de l'œuvre si curieuse de Gustave Charpentier.",
      "Pour répondre aux demandes fort nombreuses qu'il a reçues, M. Albert Carré annonce pour le dimanche 22 juillet une matinée extraordinaire d'Iphigénie en Tauride, de Gluck, avec Mme Rose Caron.",
      "Aux Variétés, les Brigands, l'amusant opéra-bouffe de Meilhac, Halévy et Offenbach, seront joués jusqu'à la fin de juillet avec Baron, Brasseur, Guy, Méaly, Tariol-Baugé, Diéterle, etc.",
      "En août, pour la continuation des représentations du cycle Offenbach et pour la rentrée de Mme Simon-Girard, les Variétés donneront La Belle Hélène, qu'elles ont reprise cet hiver avec un si vif éclat."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Éducation",
    "title": "Les concours du Conservatoire",
    "summary": "Résultats officiels des concours de contrebasse, alto et violoncelle au Conservatoire. Le jury, présidé par M. Théodore Dubois, a décerné les prix aux lauréats lors des épreuves d'hier.",
    "paragraphs": [
      "Voici les résultats des concours de contrebasse, alto et violoncelle, qui ont eu lieu hier.",
      "Jury : MM. Théodore Dubois, président ; A. Duvernois, Ed. Colonne, C. Chevillard, A. Luigini, Bailly, Cros Saint-Ange, Loys, V. Vœfelghem. Fernand Bourgeat, secrétaire.",
      "CONTREBASSE : 1er prix M. O'Kelly ; 2e prix M. Alexandre Schmitt ; 1er accessit M. Gaspari.",
      "ALTO : Pas de 1er prix ; 2e prix M. Michaux ; 1er accessit MM. Drouet, Vieux.",
      "VIOLONCELLE : 1er prix M. Kefer ; 2e prix MM. Gaudichon et Jullien ; 1er accessit Mlle Clément, M. Nizet."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Social",
    "title": "Suite du feuilleton : Gabrielle et Maître Mole",
    "summary": "Gabrielle confie à l'avocat Bernard Mole ses soupçons sur la comtesse de Saint-Amand, évoquant le mobile criminel caché derrière une passion dévorante de la comtesse pour son fils, Daniel.",
    "paragraphs": [
      "En route, mademoiselle de Saint-Amand toucha le timbre de sa voiture. Le valet de pied, aussitôt, descendit de son siège et se présenta à la portière. « Allez chez maître Mole, à la Sablière », ordonna-t-elle.",
      "La voiture prit cette direction. Ce n'était pas jour d'audience, le vieil avocat était chez lui. Gabrielle entra.",
      "« Ah ! » finit-il simplement en la voyant, « nous sommes en pleine crise. Quelle est-elle ? » Mademoiselle de Saint-Amand inclina sa tête si pâle que cette lividité avait frappé son ami. Il lui fallut attendre quelques secondes.",
      "Au moment de formuler une accusation si grave contre la seconde femme de son père, contre celle qui pendant si longtemps avait été pour elle la plus tendre, la plus dévouée des mères, ses lèvres ne pouvaient plus s'ouvrir.",
      "« C'est donc bien sérieux ? » murmura le vieil avocat qui voyait son bouleversement augmenter. « Au-delà de tout », balbutia Gabrielle mais si bas qu'il devina ses paroles plutôt qu'il ne les entendit.",
      "Il se leva, quitta son cabinet et, au bout de quelques secondes, il revint avec un plateau sur lequel il y avait une carafe, un verre, un sucrier et quelques autres objets. Gabrielle se versa un grand verre d'eau, et d'un geste de la main refusa le sucre et le reste. Elle but lentement. « Merci », dit-elle.",
      "« Vous n'êtes pas ici chez un indifférent, ma chère enfant », dit alors le vieillard, « mais bien chez un ami sincère, qui vous aime comme une fille, et qui vous aidera peut-être à voir la vérité dans la complication qui sûrement se produit. » « Je l'ai pensé ainsi », répondit-elle simplement.",
      "« Alors, courage ! » Elle commença à raconter ses premiers soupçons, ceux qui s'étaient formulés en son esprit peu à peu contre la comtesse de Saint-Amand.",
      "À ce nom prononcé par elle, la jeune fille s'arrêta. Bernard Mole la regardait sérieusement, profondément, mettant toute sa volonté à bien suivre la pensée de Gabrielle, le front barré par les rides qu'y mettait son attention extrême, peut-être également une angoisse très intense.",
      "Il ne broncha pas. Gabrielle, étonnée, demanda : « Vous ne trouvez pas que je blasphème ? » « Non, car dans ce crime tout a été extraordinaire et incroyable. »",
      "« Et que de fois, quand je passais mes jours et mes nuits à étudier le dossier de celui que je devais défendre, ne me suis-je pas dit : Quel est cet assassin mystérieux qui nous échappe si absolument ? Je ne le sais pas. Rien, rien ne peut me le faire même soupçonner. Mais je suis persuadé que le jour où nous le découvrirons, ce sera un coup de foudre qui stupéfiera le pays tout entier. Continuez, ma chère enfant, et ne vous interrompez pas, j'ai besoin de bien comprendre la moindre de vos paroles. »",
      "Elle obéit. Elle commença par raconter cette antipathie contre Michel qu'avait tout de suite témoignée sa belle-mère ; sa déposition si subtile, et cependant si accablante, venait d'une personne de si haute honorabilité.",
      "Puis ses confidences, ses doléances à ses amies, les dévotes de Montbert, toutes femmes appartenant au milieu le plus influent et par conséquent capables de faire un courant d'opinion publique contre celui que l'on accusait.",
      "Sa colère à elle, Gabrielle, lorsque M. de Précomtal lui avait appris cette situation. Le projet très arrêté qu'elle avait formé alors de rompre avec la comtesse de Saint-Amand, les explications orageuses qui avaient eu lieu entre elles.",
      "L'intervention de Daniel. À ce moment Gabrielle s'arrêta, pendant qu'une rougeur ardente remplaçait la pâleur de ses traits, de si exquise beauté. Bernard Mole vit la suprême hésitation de la jeune fille. Il tressaillit. Qu'y avait-il encore qu'il ignorait ?",
      "« Vous avez confiance en moi, n'est-ce pas ma chère enfant ? » lui demanda-t-il. « Vous le savez bien. » « Alors ouvrez-moi votre cœur tout entier et ne m'en cachez pas le moindre repli. C'est si délicat. En sommes-nous là, entre nous ? » Il ajouta : « Entre père et fille. »",
      "Elle fut tout de suite décidée. « Eh bien ! » dit-elle, « un jour qu'irritée, blessée, furieuse des paroles imprudentes, peut-être méchantes, de la comtesse jusqu'alors si bonne, si maternelle, j'étais allée à Syphorès pour avoir avec elle une explication après laquelle je voulais rompre, j'ai entendu une chose terrible pour moi. »",
      "« Laquelle ? » « Daniel, mon cher petit compagnon d'enfance, Daniel, mon ami, mon frère m'aimait d'amour, et sa blessure saignait au point de lui faire désirer la mort. »",
      "« Mais pendant que sa mère, en se désespérant, insultait Michel, qui, disait-elle, leur avait volé leur bonheur, lui, Daniel, avec une hauteur de caractère et une générosité qui me bouleversèrent, qui me bouleversent encore quand j'y pense, disait : Gabrielle, je l'aime, il est digne d'elle. Et ne le serait-il pas, je ne veux pas qu'elle souffre ce que j'endure aujourd'hui. Et si l'un de nous doit être martyrisé, que ce soit moi. »",
      "« Alors, je me suis retirée, l'âme déchirée de ce que je venais d'entendre. Pouvais-je ne pas abandonner mes préventions, ne pas pardonner même ce que je croyais simplement des écarts de langage provoqués par la douleur de Daniel, à la mère d'un tel fils ? »",
      "Gabrielle cacha sa tête dans ses mains. Le vieil avocat, en proie à une préoccupation évidente, n'interrompit point les réflexions silencieuses de sa cliente. Au bout d'un temps assez long, il dit : « Alors la comtesse de Saint-Amand aime passionnément son fils ? » « À la folie, oui. »",
      "Devant l'éclair qu'eurent les grandes prunelles sombres de Bernard Mole, Gabrielle s'arrêta, la bouche ouverte, les yeux arrondis. « Eh oui », dit l'autre brusquement, « je vois que vous devinez ma pensée. Cette folie d'amour est-elle allée jusqu'au crime ? Voilà la question actuelle, toute la question. »",
      "Il retomba lui aussi dans ses réflexions pendant que Gabrielle, avec une anxiété déchirante, se disait : « L'amour dédaigné de son fils et la disparition du petit Michel pouvaient faire agréer de moi, un jour, serait-ce là, en effet, comme le pense mon vieil ami, le mobile qui m'échappait jusqu'ici ? »",
      "Tout à coup, elle se ressaisit et dit : « Écoutez la fin de mes confidences, je ne les ai pas terminées. Maintenant que vous connaissez la passion de mon pauvre Daniel pour moi, vous jugerez mieux les divers événements qui se sont produits. »",
      "Et elle exposa ce que nos lecteurs connaissent : la syncope survenue lorsque la comtesse Marguerite avait passé devant la chambre où Jacques de Saint-Amand avait été assassiné, la terreur encore arrivée chez la duchesse, après...",
      "Bernard Mole eut un cri : « C'est vrai ! » fit-il en jetant ses deux mains en l'air, « et personne n'y a songé ! Qu'avez-vous fait après la confidence de ce brave homme ? » « Il n'y a pas longtemps qu'elle m'a été faite, et depuis je n'ai pas pu penser à autre chose. J'hésitais encore à venir vous confier mes nouvelles angoisses. Comprenez, la comtesse de Saint-Amand ! À cette heure, étant assis à Syphorès avec ma belle-mère, un fait s'est produit qui m'a décidée. »"
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Sports",
    "title": "La course d'automobiles Paris-Toulouse",
    "summary": "Détails techniques de la grande course Paris-Toulouse-Paris (25-28 juillet). Le parcours, divisé en quatre étapes, impose des contrôles stricts et des mesures de sécurité avec pilotes cyclistes guides.",
    "paragraphs": [
      "Le moment est venu de donner quelques détails sur la grande course d'automobiles de l'Exposition Paris-Toulouse-Paris.",
      "La course se fera en quatre journées, du 25 au 28 juillet inclus : 1re journée (25 juillet). Départ de Montgeron à trois heures et demie du matin, pour Toulouse en une seule étape ; 2e journée (26 juillet). Exposition des véhicules concurrents à Toulouse ; 3e journée (27 juillet). Étape Toulouse-Limoges. Départ de Toulouse à six heures du matin ; 4e journée (28 juillet). Étape Limoges-Montgeron. Départ à quatre heures du matin.",
      "Paris-Toulouse comportera trois catégories de véhicules : Motocyclettes et motocycles de moins de 100 kilos, Voiturettes de moins de 400 kilos, Voitures de plus de 400 kilos.",
      "Le parcours comprendra quelques villes et à l'entrée et à la sortie des sections neutralisées de l'itinéraire, il sera établi un contrôle où les concurrents devront s'arrêter sous peine de disqualification.",
      "La durée de la traversée de la section neutralisée aura, au préalable, été calculée à raison de 10 à 15 kilomètres à l'heure et aura été arrêtée à un nombre déterminé de minutes.",
      "À son arrivée au contrôle d'entrée, le concurrent s'y arrêtera ; le contrôleur inscrira sur une fiche son heure d'arrivée et, en regard, l'heure à laquelle il doit repartir du contrôle de sortie.",
      "Cette fiche sera remise au pilote dont il est ci-après question. Pendant ce temps, un pilote monté sur une bicyclette se placera en avant du concurrent. Aussitôt la fiche établie (et le commissaire devra faire toute diligence pour l'établir instantanément), le concurrent continuera sa route en suivant à vingt-cinq ou trente mètres le pilote, qu'il ne devra dépasser sous aucun prétexte.",
      "Il arrivera ainsi au contrôle de sortie et s'y arrêtera ; là, le contrôleur prendra la fiche et lui donnera le signal du départ dès que son heure sera arrivée. Comme on le voit, en procédant de cette façon, on écarte toute chance possible d'accident."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Marine",
    "title": "Départs et Arrivées des Paquebots",
    "summary": "Mouvements maritimes des paquebots des Messageries Maritimes et de la Compagnie Générale Transatlantique au 17 juillet 1899, répertoriant les arrivées et départs dans les ports internationaux.",
    "paragraphs": [
      "Le paquebot Polynésien (M. M.), venant d'Australie, est arrivé à Marseille le 17 juillet, à 5 heures du matin.",
      "Le paquebot Australie (M. M.), allant en Australie, est arrivé à King Georges-Sound le 11 juillet, à 1 heure du soir.",
      "Le paquebot Yarra (M. M.) allant en Indo-Chine a quitté Port-Saïd le 14 juillet, à 3 heures du matin.",
      "Le paquebot Indus (M. M.), venant de l'Indo-Chine a quitté Port-Saïd le 16 juillet, à 4 heures du matin.",
      "Le paquebot Laos (M. M.), venant de l'Indo-Chine a quitté Colombo le 14 juillet, à 10 heures du soir.",
      "Le paquebot Cordillère (M. M.), venant de La Plata et du Brésil, a quitté Dakar le 16 juillet, à 11 heures du matin.",
      "Le paquebot Chili (M. M.), venant de la Plata et du Brésil, a quitté Montevideo le 15 juillet, à 3 heures du matin.",
      "Le paquebot Atlantique (M. M.), allant à La Plata et au Brésil, est arrivé à Bahia le 16 juillet, à 6 heures du matin.",
      "Le paquebot Irrawaddy (M. M.), allant à Madagascar, a quitté Port-Saïd le 14 juillet, à 10 heures.",
      "Le paquebot Djemnah (M. M.), venant de Madagascar, a quitté Djibouti le 15 juillet, à midi.",
      "Le steamer Ferdinand-de-Lesseps (C. G. T.) est parti de Colon le 14 juillet pour Bordeaux-Pauillac, Marseille et escale.",
      "Le paquebot Labrador (C. G. T.), venant de New-York et escales, est arrivé à Bordeaux-Pauillac le 16 juillet, à 6 heures du soir.",
      "Le paquebot La Bretagne (C. G. T.), venant du Havre, est arrivé à New-York le 16 juillet, à 1 heure de l'après-midi."
    ]
  }
];
