// Date: 1900-11-15
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-11-15 (Version Restaurée, 40 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Editorial",
    "title": "La Dépopulation de la France",
    "summary": "Jean Frollo analyse la crise alarmante de la natalité en France et expose les propositions du sénateur Piot, visant à instaurer un impôt sur les célibataires pour soulager les familles nombreuses.",
    "paragraphs": [
      "Il y a longtemps que les économistes, les moralistes, les philosophes, tous ceux qui s'intéressent à la grandeur et à la prospérité de notre pays, se préoccupent d'une situation qui les alarme et qui ne laisse pas d'être inquiétante : je veux parler de la natalité en France.",
      "Quelles sont les causes de la dépopulation ? C'est qu'en effet les causes sont multiples et se rattachent à des ordres d'idées les plus divers.",
      "Un sénateur qui aura désormais attaché son nom à cette œuvre si patriotique, M. Piot, représentant républicain au Sénat de la Côte-d'Or, pense que, sans faire œuvre de philosophe ou de moraliste, il suffit, pour découvrir les causes du mal, de regarder autour de soi, d'observer et d'écouter.",
      "Il propose donc d'imposer les célibataires ou les unions stériles et d'appliquer l'impôt produit au dégrèvement des charges qui pèsent sur les familles nombreuses.",
      "Le législateur doit avoir constamment en vue la protection des êtres qui constituent la famille. C'est ainsi que s'expliquent et se justifient l'assistance donnée aux enfants du premier âge, l'obligation et la gratuité de l'instruction primaire.",
      "Jean Frollo."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des Ministres",
    "summary": "Sous la présidence de M. Loubet, le Conseil des ministres s'est réuni à l'Élysée pour traiter des affaires d'Extrême-Orient, diverses nominations et la réforme fiscale des boissons.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin, à l'Élysée, sous la présidence de M. Loubet.",
      "Le ministre des Affaires étrangères a donné connaissance au Conseil des télégrammes reçus d'Extrême-Orient.",
      "Le ministre des Affaires étrangères a soumis à la signature du Président de la République un décret nommant M. Benoît résident général à Tunis, par intérim.",
      "Le ministre des Finances a entretenu le conseil de la discussion du budget et exposé les principaux amendements qui ont été présentés au projet de réforme des boissons.",
      "Le ministre des Travaux publics a entretenu le conseil de l'interpellation de M. Coutant relative à l'accident de Choisy."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Étranger",
    "title": "Les événements de Chine",
    "summary": "État des effectifs militaires français déployés dans le nord de la Chine, incluant les garnisons de Pékin, Tien-Tsin et les forces engagées dans le secours des chrétiens assiégés.",
    "paragraphs": [
      "Les troupes françaises dans le nord de la Chine sont ainsi réparties : 1 200 hommes à Pékin, 5 000 hommes à Tien-Tsin, 4 500 à Pao-Ting-Pou ou dans les environs, 1 000 sur la route de Pékin à Pao-Ting, 1 000 à Tang-Kou, à Tching-Ting et à Hien-Hien où ils ont délivré les chrétiens assiégés."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Les lois d'affaires",
    "summary": "Après avoir clôturé les débats budgétaires, la Chambre des députés entame ses travaux sur le projet de loi relatif au placement des ouvriers et des employés.",
    "paragraphs": [
      "La Chambre paraît disposée à travailler sérieusement, d'une façon pratique. Elle a rapidement terminé les discussions générales du Budget et de la loi concernant le régime des boissons ; elle va aujourd'hui même s'occuper de la loi sur le placement des ouvriers et des employés."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "International",
    "title": "Le Président Krüger en France",
    "summary": "Arrivée imminente du président sud-africain Krüger sur le Gelderland. Bien que voyageant en simple particulier, sa venue suscite une immense ferveur populaire à travers la France.",
    "paragraphs": [
      "Un télégramme de Suez annonce que le Gelderland est arrivé sur rade, hier, à midi. M. Krüger ne s'est pas montré sur le pont. Personne n'a été admis à lui rendre visite dans sa cabine.",
      "L'arrivée très prochaine à Marseille du vaillant président de la République du Transvaal provoque partout une émotion profonde. La population française prépare une réception splendide.",
      "Le docteur Leyds a adressé aux gouvernements de France, de Belgique et des Pays-Bas une note identique dans laquelle il déclare que M. Krüger ne voyage pas en qualité de chef d'État, mais comme simple particulier.",
      "Le voyage du président Krüger est organisé avec des arrêts prévus à Marseille, Avignon, Lyon, Dijon, avant son arrivée à Paris où il occupera un appartement à l'hôtel Scribe."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Grave accident dans une caserne à Héricourt",
    "summary": "Un terrible accident d'artillerie est survenu à la caserne d'Héricourt lors de manœuvres de ravitaillement, coûtant la vie au soldat Henri Crevas et blessant très grièvement le nommé Bugnot.",
    "paragraphs": [
      "Un déplorable accident s'est produit hier à la caserne d'artillerie d'Héricourt. Lors de manœuvres de ravitaillement, les chevaux attelés à un caisson s'emballèrent brusquement.",
      "Le maréchal des logis Lyot conduisait l'équipage. Henri Crevas a été tué sur le coup, la mâchoire et le crâne fracassés, tandis que Bugnot fut très grièvement blessé."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Départ du Roi des Belges",
    "summary": "Le roi des Belges a quitté Paris hier soir après un séjour prolongé. Le souverain a reçu les adieux du préfet de police, M. Lépine, saluant la durée de sa visite en France.",
    "paragraphs": [
      "Le roi a quitté Paris hier soir, par le train de 6 heures, se rendant directement à Bruxelles. Le souverain a consacré sa dernière journée à des visites d'adieux.",
      "M. Lépine, préfet de police, est venu saluer le souverain qui, à plusieurs reprises, lui a répété combien il était heureux d'avoir pu prolonger son séjour si longtemps en France."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "La catastrophe de Choisy-le-Roi : obsèques des victimes",
    "summary": "Les obsèques des victimes de la catastrophe ferroviaire de Choisy-le-Roi se sont déroulées dans le recueillement, en présence des familles, des autorités municipales et des élus locaux.",
    "paragraphs": [
      "Le corps de M. Leduc, l'infortuné mécanicien de l'express de Nantes, a été conduit de la morgue au domicile du défunt. Le deuil était conduit par le père du défunt, M. Coutant, député, et M. Roussel, maire d'Ivry.",
      "Les obsèques du chauffeur Hippolyte Bourgeon ont également eu lieu au cimetière parisien d'Ivry.",
      "Le départ du corps de M. Oury, notaire à Chémery, a eu lieu hier à trois heures, après un service religieux célébré à Choisy-le-Roi."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Roman-feuilleton",
    "title": "Les Sans Famille",
    "summary": "Le récit suit le voyageur solitaire Jérôme Darotte, en proie à une insomnie tenace, tandis qu'il poursuit ses pérégrinations sur les routes de France dans une atmosphère mélancolique.",
    "paragraphs": [
      "En route vers l'inconnu, il jeta la bride sur le cou de sa bête, un de ces petits chevaux trapus et hirsutes qui servaient à transporter jadis le charbon et le bois de chauffage.",
      "Pendant que le train de cette bonne madame Ursule roulait tranquillement vers Le Mans, Jérôme Darotte, l'homme à la besace et aux béquilles, était en proie à une insomnie qui ne lui permettait pas de fermer l'œil."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Obsèques de la victime de la catastrophe de Choisy-le-Roi",
    "summary": "Une foule nombreuse a rendu un dernier hommage à la victime lors de ses obsèques à Boulogne, marquées par une intervention émouvante de M. Lagneau, maire de la commune.",
    "paragraphs": [
      "Les obsèques ont eu lieu à midi, dans cette localité, au milieu d'une foule nombreuse.",
      "On remarquait parmi les assistants M. Philipps, Laloge, député, une délégation du conseil municipal et une délégation du syndicat des patrons maîtres-blanchisseuses de Paris, dont faisait partie la défunte.",
      "Sur la tombe, M. Lagneau, maire de Boulogne, a prononcé quelques paroles émues."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "État de santé des blessés de la catastrophe de Choisy-le-Roi",
    "summary": "L'état de santé des rescapés de Choisy-le-Roi progresse. M. Beulin, après avoir appris le décès de son épouse, est en proie à une vive détresse, tandis que le docteur Bourgoint voit son état s'améliorer nettement.",
    "paragraphs": [
      "L'amélioration s'accentue dans l'état général des trois blessés encore en traitement à l'hôpital de la Pitié.",
      "L'un d'eux, M. Beulin, le plus grièvement atteint, a pu recevoir hier la visite de quelques proches parents. Bien qu'il eût pressenti une partie de la vérité, on avait jusqu'à présent réussi à cacher au pauvre homme la fin tragique de sa femme. Le blessé a eu une crise nerveuse terrible en apprenant la nouvelle, et l'on a eu beaucoup de peine à le dissuader de vouloir assister aux obsèques.",
      "Pour MM. Delauie et Gervoie, les deux autres blessés, la guérison complète n'est plus qu'une affaire de jours.",
      "Plus rassurantes aussi sont les nouvelles données du docteur Bourgoint, soigné à la maison de santé de la rue Oudinot. On avait parlé d'une amputation, mais cette éventualité semble devoir être écartée. Sa femme seule est autorisée à le visiter trois fois par jour."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Social",
    "title": "Aiguilleurs et mécaniciens face aux accidents ferroviaires",
    "summary": "Le public s'indigne de voir la responsabilité des accidents ferroviaires imputée aux seuls employés. Les causes réelles seraient à chercher dans l'épuisement du personnel et l'insuffisance du matériel.",
    "paragraphs": [
      "Nous avons reçu un grand nombre de lettres de lecteurs observant que, dans les accidents de ce genre, on cherche trop souvent à faire retomber les responsabilités sur les employés de la compagnie, mécaniciens ou aiguilleurs.",
      "Il est certain que, dans la plupart des cas, la faute ne repose pas uniquement sur l'aiguilleur, parfois épuisé de travail, ou sur le mécanicien, aveuglé par la pluie ou la fumée.",
      "La cause des accidents provient souvent d'horaires mal établis, de freins qui fonctionnent imparfaitement, d'un personnel trop peu nombreux et de retards incessants. Le ministre des Travaux publics a fait diligenter une enquête pour établir la véritable responsabilité de la catastrophe de Choisy."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Récompenses honorifiques pour le sauvetage de Choisy",
    "summary": "M. Lépine, préfet de police, s'apprête à honorer les sauveteurs de Choisy-le-Roi. Une mention spéciale est réservée au dévouement de M. L. Dorange et de son équipe de monteurs.",
    "paragraphs": [
      "M. Lépine, préfet de police, décernera prochainement des médailles de sauvetage aux pompiers et citoyens qui firent preuve d'un grand dévouement lors de la catastrophe de Choisy-le-Roi.",
      "Nous devons mentionner la belle conduite de M. L. Dorange, chef contre-maître charpentier chez M. Michelin. Arrivé le premier sur les lieux, il participa activement au sauvetage des blessés avec l'aide de sept de ses compagnons monteurs."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Informations politiques et parlementaires",
    "summary": "Chroniques parlementaires : décès de M. Armand Presle, travaux de la commission de l'Armée, extension du réseau ferré de l'État et débats sur la déchéance des mines non exploitées.",
    "paragraphs": [
      "Mort d'un Sénateur : Nous apprenons la mort de M. Armand Presle, sénateur réactionnaire du Morbihan, décédé à l'âge de soixante-dix-sept ans.",
      "La Commission de l'Armée : La commission a réglé l'ordre de ses travaux et discutera de la proposition de M. Fleury-Ravarin sur les obligations militaires des jeunes Français établis à l'étranger.",
      "Le Réseau de l'État : Le projet de loi visant à prolonger de Chartres à Paris le réseau de l'État a été adopté par la commission des chemins de fer.",
      "Les Mines non exploitées : La commission du travail a adopté en principe la proposition de M. Colliard, tendant à proclamer la déchéance des concessionnaires des mines non exploitées.",
      "L'Amnistie au Sénat : La commission d'amnistie du Sénat s'est réunie pour examiner les articles concernant les délits commis en Algérie, les délits de pêche et les contraventions pour fraude."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Étranger",
    "title": "Dépêches de l'étranger",
    "summary": "Actualités internationales : la santé du Tsar s'améliore, un drame meurtrier survient dans un cirque en Espagne, et la question coloniale des Boërs agite les diplomaties hollandaise et britannique.",
    "paragraphs": [
      "La santé du Tsar : Le bulletin de santé de l'empereur de Russie, atteint de typhus du ventre, est satisfaisant.",
      "Accident dans un cirque : À Pedreguer, en Espagne, l'effondrement des banquettes pendant une course de taureaux a causé douze morts et deux cents blessés.",
      "Nouvelles des Boërs et d'Angleterre : La Hollande exprimerait le désir d'acheter une portion du sud-ouest africain pour les Boërs. Le gouvernement britannique a commandé des médailles commémoratives de la campagne sud-africaine."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Chine",
    "title": "La situation en Chine",
    "summary": "Point sur la situation en Chine : évaluation des troupes alliées à cent mille hommes par M. Delcassé, et calendrier des mouvements des colonnes Graham et russe arrivées à Pékin en novembre.",
    "paragraphs": [
      "On trouvera plus loin le texte d'une affiche placardée par les Chinois sur les murs de Fatchan. Il est probable qu'elle fut conçue par quelque haut personnage bien en cour.",
      "D'après M. Delcassé, on peut évaluer à une centaine de mille le nombre des soldats composant les troupes alliées en Chine.",
      "Dépêche du maréchal de Waldersee : la colonne Graham est arrivée à Pékin le 7 novembre ; la colonne russe y est arrivée le 9 novembre."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Allemagne",
    "title": "Discours de l'Empereur Guillaume",
    "summary": "Ouverture du Parlement allemand par l'empereur Guillaume. Le discours du Trône condamne le fanatisme à Pékin et réaffirme la volonté de rétablir l'ordre après la punition des responsables.",
    "paragraphs": [
      "L'empereur a ouvert la session du Parlement allemand par un discours du Trône évoquant les événements en Extrême-Orient.",
      "Il souligne que la haine et la superstition fanatiques à Pékin ont égaré la population et insiste sur le désir unanime de rétablir un état de choses régulier après la punition des principaux coupables."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Conseil Général",
    "title": "Séance du Conseil Général de la Seine",
    "summary": "Le Conseil général de la Seine rend hommage au dévouement du personnel de l'Assistance publique, discute d'arrêtés locaux et vote l'amnistie à l'unanimité.",
    "paragraphs": [
      "Le conseil a rendu un hommage vibrant au dévouement du personnel de l'Assistance publique lors de la catastrophe de Choisy-le-Roi.",
      "Diverses questions ont été abordées, notamment l'annulation d'un arrêté interdisant le port de la soutane au Kremlin-Bicêtre, le transfert du dépôt de remonte et l'amélioration du service de police à Asnières.",
      "Un vœu en faveur d'une loi d'amnistie a été adopté à l'unanimité par l'assemblée."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Armée",
    "title": "La répartition de la classe de conscrits",
    "summary": "Réorganisation du contingent militaire par le ministère de la Guerre, intégrant les compétences professionnelles et les cursus universitaires des conscrits.",
    "paragraphs": [
      "Le ministère de la Guerre a fixé de nouvelles règles pour la répartition du contingent en tenant compte des professions et des aptitudes spécifiques des conscrits.",
      "Les hommes d'un an, souvent issus des rangs des dispensés, sont affectés selon leurs compétences particulières, notamment pour les étudiants en médecine ou les vétérinaires.",
      "Pour les appelés de deux et trois ans, le classement privilégie les capacités professionnelles, tout en excluant certains corps pour les individus présentant des antécédents judiciaires ou des attaches à l'étranger."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Échos et nouvelles",
    "title": "Nouvelles diverses",
    "summary": "Vie mondaine et administrative : remise de l'ordre de l'Éléphant au président Loubet, altercation lors d'une chasse à Fontainebleau et débat sur la crise viticole.",
    "paragraphs": [
      "Le ministre de Danemark a remis à M. Émile Loubet, président de la République, les insignes de l'ordre de l'Éléphant.",
      "Un incident a opposé le capitaine Coblentz et M. Lazare de d'Azay lors d'une chasse à courre organisée à Fontainebleau.",
      "Le ministre de l'Agriculture a reçu une délégation de la Société des viticulteurs pour étudier les moyens de remédier à la mévente actuelle des vins."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Tribunaux",
    "title": "Une bande de criminels condamnée dans l'Aisne",
    "summary": "Le jury de l'Aisne a rendu son verdict : Cordonnier est condamné à la peine capitale et Dalifart à vingt ans de travaux forcés pour le meurtre d'une septuagénaire à Crouy et de multiples vols à main armée.",
    "paragraphs": [
      "La cour d'assises de l'Aisne a prononcé, après une longue délibération, la condamnation de plusieurs malfaiteurs impliqués dans une série de crimes sanglants.",
      "L'accusé Cordonnier a été condamné à la peine de mort, tandis que son complice Dalifart a écopé de vingt années de travaux forcés. Ils sont reconnus coupables du meurtre atroce d'une femme âgée de soixante-dix ans à Crouy, ainsi que de nombreux vols à main armée commis dans la région."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits Divers",
    "title": "Vol de dépêches postales",
    "summary": "Une enquête de police a été ouverte à Joinville-le-Pont à la suite de la disparition inquiétante d'un sac de courrier officiel qui était destiné à la commune de Saint-Mandé.",
    "paragraphs": [
      "Une enquête a été immédiatement ouverte par les autorités de Joinville-le-Pont concernant la disparition suspecte d'un sac de dépêches postales.",
      "Ce courrier, dont la perte pourrait entraîner des conséquences administratives sérieuses, était normalement destiné à la distribution dans la localité de Saint-Mandé."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accidents divers et faits parisiens",
    "summary": "La chronique parisienne est marquée par un accident mortel à la gare de la Chapelle-Triage, un drame conjugal rue Pradier et l'abattage nécessaire d'un chien errant devenu enragé.",
    "paragraphs": [
      "Un accident mortel s'est produit au sein de la gare de la Chapelle-Triage ; le nommé Alexis Bagot a trouvé la mort, broyé entre deux wagons de marchandises lors d'une manœuvre.",
      "Un drame conjugal s'est déroulé rue Pradier, où Mme Mania Maux, à la suite d'une altercation violente avec son époux, lui a violemment jeté un verre au visage.",
      "Les autorités ont dû intervenir pour abattre un chien devenu enragé, lequel avait mordu plusieurs passants circulant dans les rues de la capitale."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident de tramway à Vincennes",
    "summary": "À Vincennes, un tramway électrique a percuté une voiture hippomobile rue de Fontenay. Le véhicule a été entièrement disloqué et le cocher, Louis Lemaire, a été grièvement contusionné.",
    "paragraphs": [
      "Un grave accident de la circulation est survenu rue de Fontenay, à Vincennes. Le tramway électrique de la Compagnie des tramways, dirigé par le mécanicien Gilbert, a violemment renversé une tapissière menée par le cocher Louis Lemaire.",
      "Sous la violence du choc, la voiture a été mise en pièces. Le conducteur a été projeté au sol et souffre de contusions importantes, nécessitant l'intervention rapide des secours."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Agression violente à Choisy-le-Roi",
    "summary": "Théodore Schwarz, un charretier de vingt et un ans, a sauvagement agressé son employeur, M. Noireaut, en l'avenue de Paris. La victime, blessée par balle, est dans un état jugé préoccupant.",
    "paragraphs": [
      "Le nommé Théodore Schwarz, âgé de vingt et un ans et employé en qualité de charretier par M. Noireaut, camionneur, a commis une agression d'une rare violence à l'encontre de son patron avenue de Paris, à la suite d'un différend survenu plus tôt dans la journée.",
      "Dans un accès de rage, Schwarz a jeté sa victime à terre et l'a piétinée avant de faire usage d'un revolver. M. Noireaut a été grièvement atteint par le tir, et son état de santé demeure actuellement préoccupant.",
      "Le commissaire de police de la circonscription s'est transporté sur les lieux du crime et le malfaiteur a pu être appréhendé sans délai."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident à Versailles",
    "summary": "Un grave accident est survenu à Versailles lorsque l'attelage de M. Bujardet, pris d'effroi, s'est emballé. Le cocher Gilbert, projeté au sol lors de la manœuvre, a été grièvement blessé dans la collision.",
    "paragraphs": [
      "L'attelage de M. Bujardet a pris peur pendant que le cocher Gilbert tentait de le maîtriser. Projeté à terre, le cocher a subi le choc des deux véhicules qui ont été gravement avariés. Le cheval a été maîtrisé avec beaucoup de difficulté."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Drame à Montfort-l'Amaury",
    "summary": "Un drame sanglant a frappé Montfort-l'Amaury : un homme a fait feu sur une femme avant de se suicider. La victime survit à ses blessures, tandis que l'agresseur a succombé sur le coup, son mobile restant inconnu.",
    "paragraphs": [
      "Un drame, dont le mobile n'est pas encore connu, s'est déroulé impasse des Jardins, à Montfort-l'Amaury.",
      "Un homme âgé de quarante ans a tiré sur une jeune femme qui se rendait chez elle, l'atteignant d'un coup de revolver calibre 32. Des voisins ont tenté d'intervenir, mais l'homme a réussi à leur échapper avant de se loger une balle à la tempe. La mort a été instantanée. La blessure de la victime n'est, heureusement, pas mortelle."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident mortel à Meaux",
    "summary": "Tragique accident domestique à Montsaubert-en-Martin : Mme Poulet, âgée de trente ans, a trouvé la mort par asphyxie après une syncope survenue lors de sa lessive qui l'a fait tomber dans un baquet d'eau.",
    "paragraphs": [
      "Mme Poulet, une jeune ménagère de Montsaubert-en-Martin, a été prise d'une syncope alors qu'elle s'apprêtait à faire la lessive. Elle est tombée la tête la première dans un baquet d'eau et a succombé par asphyxie malgré les secours empressés de son mari. Elle était âgée de trente ans et laisse un enfant en bas âge."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Drame de Famille",
    "title": "Parricide à Troyes",
    "summary": "À Urville, une dispute familiale a viré au drame : une jeune fille de vingt ans, souffrant d'aliénation mentale, a poignardé son père. Le blessé a été transporté d'urgence à l'hôpital.",
    "paragraphs": [
      "À Urville, une violente dispute a éclaté au cours du déjeuner entre les époux Bonnet-Faucon et leur fille unique, âgée d'une vingtaine d'années. La querelle s'envenimant, la jeune fille a poignardé son père en pleine poitrine.",
      "Le blessé a été immédiatement transporté à l'hôpital. La jeune fille, considérée par ses parents comme atteinte d'aliénation mentale, était tenue, depuis quelque temps, à l'écart de toute vie sociale."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Départements",
    "title": "Fêtes à Senlis",
    "summary": "Senlis honorera dimanche les vétérans de 1870. Le programme inclut la remise officielle d'un drapeau, l'inauguration d'un monument aux morts au cimetière, ainsi qu'un banquet et une retraite aux flambeaux.",
    "paragraphs": [
      "Dimanche prochain aura lieu la remise d'un drapeau aux vétérans de 1870, sous la haute présidence de représentants du gouvernement. Le ministre de la Guerre sera représenté par le chef d'escadrons Merlin. À deux heures et demie, une inauguration de monument aux morts aura lieu au cimetière, suivie d'un banquet et d'une retraite aux flambeaux."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Départements",
    "title": "Exposition à Pont-Sainte-Maxence",
    "summary": "Pont-Sainte-Maxence s'apprête à inaugurer, en novembre prochain, une foire d'envergure dédiée aux machines agricoles et à la production de betteraves, agrémentée de réjouissances populaires.",
    "paragraphs": [
      "Le mois de novembre prochain verra l'ouverture d'une grande exposition de machines agricoles et de betteraves à Pont-Sainte-Maxence. Les festivités seront marquées par un grand bal public et un feu d'artifice pour célébrer cet événement local."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Reprise du Tailleur pour dames au Théâtre Cluny",
    "summary": "Le Théâtre Cluny reprend le célèbre vaudeville de Georges Feydeau, « Le Tailleur pour dames », relatant les mésaventures d'un médecin pris dans les quiproquos d'un entresol encombré.",
    "paragraphs": [
      "Le Théâtre Cluny a inscrit à son répertoire « Le Tailleur pour dames », vaudeville de Georges Feydeau. La pièce relate les aventures burlesques du docteur Moulinot, qui a loué un entresol meublé où défilent inopinément les anciennes clientes de la locataire précédente."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Nominations au Conservatoire",
    "summary": "Le ministre de l'Instruction publique a officialisé la nomination de nouveaux professeurs au Conservatoire : MM. Georges Barr, Cros-Saint-Ange et Turban, dont la liste paraîtra au Journal officiel.",
    "paragraphs": [
      "Le ministre de l'Instruction publique a procédé à la nomination de nouveaux professeurs au Conservatoire de Paris : MM. Georges Barr, pour la déclamation ; Cros-Saint-Ange, pour le violoncelle ; et Turban, pour la clarinette. Ces nominations paraîtront prochainement au Journal officiel."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Décès de Donato",
    "summary": "Le célèbre magnétiseur Donato, figure familière et controversée des scènes parisiennes, s'est éteint hier à l'âge de soixante ans.",
    "paragraphs": [
      "Donato, le célèbre magnétiseur dont les séances ont animé de nombreuses scènes parisiennes, est décédé hier à l'âge de soixante ans."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Publicité",
    "title": "Pilules du Bonheur",
    "summary": "Souffrants de l'estomac, ne cherchez plus : les Pilules du Bonheur offrent la promesse d'une guérison certaine pour tous vos maux gastriques.",
    "paragraphs": [
      "Si vous souffrez de l'estomac, si rien ne vous soulage, ayez recours aux Pilules du Bonheur. Elles assurent une guérison certaine."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Loterie",
    "title": "Loterie des enfants tuberculeux",
    "summary": "En vue du tirage du 5 février prochain, la Loterie des enfants tuberculeux annonce un gros lot de 100 000 francs. Les billets sont dès à présent disponibles dans toutes les librairies.",
    "paragraphs": [
      "Gros lot de 100 000 francs. Tirage le 5 février. On trouve des billets dans toutes les librairies."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Faute de l'autre - Quatrième Partie",
    "summary": "Le maître de forges, Vernier, reconnaît soudainement son vieil ami Pierre. Malgré le poids des années et des épreuves, ils évoquent avec amertume les révélations tragiques qu'une correspondance interrompue a rendues vaines.",
    "paragraphs": [
      "Le maître de forges, qui examinait le menu placé devant lui, releva la tête et regarda un instant celui qui venait de prononcer son nom. Puis, tout à coup : « Comment, toi, Pierre ? Est-ce possible ? » s'écria-t-il.",
      "Dans ses yeux encavés, traversés par des lueurs inquiétantes, un reflet fugitif de contentement s'alluma.",
      "« Oui, c'est possible, puisque c'est vrai. Il y a un instant déjà que je te voyais, mais... » Il s'arrêta, hésitant. Il n'osait pas achever la phrase.",
      "Avec un navrant sourire, Vernier s'en chargea : « Mais tu me trouvais tellement changé, tellement vieilli, que tu redoutais une confusion. Allons, sois franc. Pourquoi nier ? Avoue, mon ami. »",
      "« Non, tu exagères. »",
      "« Je n'exagère rien, mon pauvre Pierre. »",
      "« Tu as eu tort de ne plus m'écrire. Des choses très graves se sont passées. Des révélations m'ont été faites qui t'intéressaient autant que moi-même et que je t'aurais communiquées. Cela eût peut-être évité un très grand malheur. »"
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Médecine",
    "title": "Conseils Médicaux",
    "summary": "Répertoire des praticiens et sages-femmes à Paris : accouchements, soins de santé et massages médicaux prodigués par des professionnels spécialisés avec possibilité de pension.",
    "paragraphs": [
      "Mme Renaud, sage-femme de 1re classe, 54, rue Lemercier, près de la gare Saint-Lazare. Prend des pensionnaires. Consultations de 8 heures à 6 heures. Méthode infaillible pour les cas de stérilité.",
      "Docteur Brun, 30, rue de Rivoli : prend des pensionnaires. Consultations discrètes.",
      "Mme Revegier, 78, rue Saint-Denis : pratique le massage médical.",
      "Mme Salmon, 55, faubourg Saint-Martin : prend des pensionnaires et assure le placement d'enfants."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Informations Utiles",
    "title": "Bourse et placements",
    "summary": "Le Nouvelliste Financier offre son expertise pour guider les investisseurs dans la gestion de leurs titres. Un mois d'essai gratuit est proposé sur simple demande au 30, rue Drouot.",
    "paragraphs": [
      "Le Nouvelliste Financier indique les bons placements et signale les mauvais. Un mois d'essai gratuit sur demande. 30, rue Drouot, Paris."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Spectacles",
    "title": "Programme des théâtres et concerts",
    "summary": "Retrouvez le programme culturel parisien du jour, incluant les grandes représentations théâtrales et lyriques ainsi que les animations prévues au jardin d'Acclimatation.",
    "paragraphs": [
      "Opéra : Le Cid. Opéra-Comique : La Vie de Bohème. Théâtre Sarah-Bernhardt : Denise. Palais-Royal : Le Dindon. Vaudeville : Madame s'enchaîne.",
      "Hippodrome (place Clichy) : Une Fête à Rome.",
      "Jardin Zoologique d'Acclimatation : Concert le jeudi 16 novembre, à 2 heures, dans le Palmarium."
    ]
  }
];
