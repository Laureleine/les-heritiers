// Date: 1900-05-02
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-05-02 (Version Restaurée, 39 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique Politique",
    "title": "La campagne présidentielle aux États-Unis",
    "summary": "La lutte pour la présidence américaine s'intensifie entre M. McKinley et M. Bryan. Le système électoral indirect et les enjeux économiques, notamment la question de l'étalon d'or et d'argent, dominent les débats.",
    "paragraphs": [
      "La campagne présidentielle est virtuellement commencée aux États-Unis. Trois candidats sont en présence jusqu'ici : l'amiral Dewey, M. Bryan et M. McKinley. M. McKinley est le candidat des républicains, M. Bryan le candidat des démocrates.",
      "Quant à l'amiral Dewey, il n'a point encore formulé son programme politique. La vraie lutte, comme en 1896, se jouera entre M. Bryan et M. McKinley.",
      "L'élection présidentielle aux États-Unis s'opère par le suffrage populaire indirect. Les votes qui comptent sont les votes électoraux accordés à chaque État. Les deux grands partis, républicain et démocrate, disposent de forces à peu près égales, ce qui rend l'issue de la lutte aléatoire.",
      "M. Bryan et M. McKinley se sont déjà trouvés en présence il y a quatre ans. La question politique se doublait alors d'une question économique : l'étalon d'or pour McKinley et l'étalon d'argent pour Bryan. C'est M. McKinley qui l'emporta alors au prix d'efforts gigantesques.",
      "Le rôle du second, ou futur secrétaire d'État, est prépondérant dans la gestion de l'élection. Il dirige la machine électorale, les comités et la presse. Les fonds sont fournis par des souscriptions privées, souvent liées à des promesses de postes gouvernementaux, suivant le principe que les dépouilles du vaincu appartiennent aux vainqueurs."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Secret du Docteur (2e partie, VIII)",
    "summary": "Accusé d'un crime qu'il nie, Michel, détenu dans le vieux château, songe à une évasion désespérée tandis que le doute persiste chez le juge d'instruction et que Gabrielle reste inconsolable.",
    "paragraphs": [
      "Le jeune baron d'Excideuil, la tête découverte et le visage inondé de larmes, suivait celui qui avait eu la pensée d'être son bienfaiteur. Armand Brenilhet, à ses côtés, semblait également accablé.",
      "Mais ce qui provoqua un bouleversement général, ce fut Gabrielle, marchant seule devant Daniel et son cousin, son admirable visage baigné de pleurs. Elle était fiancée par le duc d'Argile lui-même à Michel, accusé de cette mort horrible.",
      "On savait que le juge d'instruction, Amable de Précomtal, avait des doutes sur la culpabilité de l'accusé. Pendant ce temps, Michel, dans sa prison, attendait son sort, déchiré par le deuil et le doute sur l'amour de sa fiancée.",
      "Une idée s'empara du cerveau de Michel : s'évader par les remparts à moitié écroulés du vieux château. Soudain, un bruit léger se fit derrière la porte de sa cellule, une silhouette de femme apparut, mais ce n'était pas Gabrielle."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une erreur judiciaire : Le soldat Voisin",
    "summary": "Libéré après huit ans de bagne à Cayenne suite aux aveux de son ancien sergent, le soldat Voisin, innocenté, compte désormais demander la révision de son procès avec le soutien de son avocat, M. Hamard.",
    "paragraphs": [
      "Le soldat Voisin, condamné il y a huit ans pour l'assassinat de Mme veuve Adam à Martinvast, a été libéré après les aveux de son sergent-major Langlois sur son lit de mort.",
      "Voisin, miné par la maladie, raconte sa condamnation injuste due à son silence pour protéger ses parents. Il fut dégradé et envoyé au pénitencier de Cayenne. Malgré plusieurs tentatives d'évasion et une condamnation supplémentaire, il a fini par être gracié par le Président de la République.",
      "Revenu en France, Voisin est soutenu par son avocat, M. Hamard. Il est déterminé à demander la révision de son procès pour obtenir réparation du préjudice subi."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Informations",
    "title": "Supplément Littéraire du Petit Parisien",
    "summary": "Le Supplément Littéraire du Petit Parisien illustré en couleurs est disponible dès aujourd'hui, offrant à ses lecteurs trois gravures inédites, dont des vues de l'Exposition de 1900.",
    "paragraphs": [
      "Le Supplément Littéraire du Petit Parisien illustré en couleurs, mis en vente aujourd'hui, contient trois superbes gravures : 'Un drame dans le milieu militaire', 'Le Petit et le Grand Palais à l'Exposition de 1900' et 'Une fête de nuit au Champ-de-Mars'."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Attentat en wagon près de Toulon",
    "summary": "Un violent attentat a été perpétré ce matin dans un train en partance de Toulon. Un entrepreneur a été agressé par un individu qui a pris la fuite après lui avoir tiré dessus sous le tunnel de Cassis.",
    "paragraphs": [
      "Un audacieux attentat a été commis ce matin dans le train partant de Toulon à 5h40. M. Schmuck, entrepreneur, a été agressé dans un wagon de deuxième classe au moment où le train entrait sous le tunnel de Cassis.",
      "Un individu vêtu d'une blouse grise a fait feu sur la victime, la blessant grièvement sous l'œil. L'agresseur a dérobé des billets et de la monnaie avant de prendre la fuite. Le revolver a été retrouvé plus tard près de la voie.",
      "M. Schmuck a été ramené à Toulon et son état inspire de vives inquiétudes."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Vie Artistique",
    "title": "Inauguration des Palais des Beaux-Arts",
    "summary": "Le Président de la République, M. Émile Loubet, a solennellement inauguré les Grand et Petit Palais des Beaux-Arts, véritables joyaux de l'Exposition universelle admirés par le public et les autorités présentes.",
    "paragraphs": [
      "Le Président de la République, M. Émile Loubet, a solennellement inauguré hier les Grand et Petit Palais des Beaux-Arts de l'Exposition universelle. Sous un soleil radieux, les édifices richement pavoisés ont suscité l'admiration des officiels et du public.",
      "Le Président a visité le Petit Palais, guidé par MM. Georges Leygues, Carolus-Duran et Jean-Paul Laurens. La collection comprend des joyaux mérovingiens, des ivoires du XIIe et XVe siècles, des bronzes, ainsi que des spécimens de faïence et de porcelaine française.",
      "La visite s'est poursuivie à travers les salles de mobilier ancien, notamment la salle Boulle, témoignant de la richesse artistique nationale exposée pour l'occasion."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "La visite de M. Émile Loubet à l'Exposition",
    "summary": "M. Émile Loubet a parcouru les sections centennale et décennale de l'Exposition des Beaux-Arts, rendant hommage aux maîtres de la peinture et aux grands noms de l'art français du siècle écoulé.",
    "paragraphs": [
      "En quittant l'Exposition rétrospective de l'art français, le Président de la République s'est rendu au Grand Palais des Beaux-Arts pour les sections de l'exposition centennale (1800-1889) et les expositions particulières des pays étrangers.",
      "Le cortège officiel a gravi les marches de l'entrée principale. L'exposition centennale, organisée par MM. Molinier et Roger Marx, comprend vingt salles exposant des tableaux de premier ordre, de Greuze à Puvis de Chavannes.",
      "M. Émile Loubet s'est arrêté avec intérêt devant des œuvres de David, Ingres, Courbet, Millet, Corot et bien d'autres maîtres du XIXe siècle.",
      "Pour visiter la deuxième section de l'exposition centennale, le cortège s'est dirigé vers les salles situées sur l'avenue d'Antin, exposant des œuvres de Chaplin, Jules Breton et les impressionnistes comme Manet et Monet.",
      "M. Loubet a également parcouru rapidement les sections de l'architecture, du dessin et de la sculpture, remarquant notamment des œuvres de Rodin et Barrias.",
      "La visite s'est poursuivie avec l'Exposition décennale, comprenant vingt-trois salles au premier étage. Le Président y a admiré les œuvres de MM. Cottet, Maignan, Dagnan-Bouveret et Henner."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'accident de la Salle des Fêtes",
    "summary": "Le décès de Marius Lefebvre à l'hôpital Necker porte à trois le nombre de victimes dans l'accident des maroufleurs. Une enquête judiciaire pointe la faiblesse structurelle des charpentes.",
    "paragraphs": [
      "Le malheureux événement ayant causé la mort de trois ouvriers maroufleurs tombés d'un échafaudage a connu hier un épilogue navrant avec le décès de Marius Lefebvre à l'hôpital Necker.",
      "M. Alfred Picard s'est empressé de faire remettre un secours aux familles. Une enquête menée par le juge Louiche a révélé que les poutrelles soutenant la charpente étaient trop faibles pour supporter le poids des ouvriers."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'accident de l'avenue de Suffren",
    "summary": "L'enquête sur l'effondrement de la passerelle du Grand Globe Céleste se précise. Le rapport du préfet de la Seine écarte la voirie et met en cause les manœuvres du concessionnaire.",
    "paragraphs": [
      "Le juge d'instruction M. Louiche a poursuivi ses investigations sur l'effondrement de la passerelle du Grand Globe Céleste, faisant procéder à des prélèvements de matériaux sous scellés.",
      "Le rapport du préfet de la Seine, M. de Selves, dégage la responsabilité du service de la voirie et pointe la responsabilité du concessionnaire ayant procédé au décintrement sans autorisation ni précautions."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Nominations et incidents militaires",
    "summary": "Le Journal officiel officialisera prochainement la nomination de dix-huit sous-chefs de musique. Par ailleurs, un accident équestre a été déploré à Saint-Quentin impliquant le lieutenant Martin.",
    "paragraphs": [
      "Un décret nommant dix-huit sous-chefs de musique dans les régiments régionaux d'infanterie sera bientôt publié au Journal officiel.",
      "Un accident a été signalé à Saint-Quentin, où le lieutenant Martin a été grièvement blessé après une chute de cheval."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "International",
    "title": "La guerre des Boërs",
    "summary": "La situation demeure stationnaire en Afrique du Sud. Tandis que les Boërs font preuve d'une ténacité remarquable autour de Thabanchu, le général Hamilton progresse vers le nord avec l'infanterie montée.",
    "paragraphs": [
      "La situation des deux armées demeure stationnaire. Lord Roberts télégraphie que les Boërs font preuve d'une grande ténacité autour de Thabanchu.",
      "Le général Hamilton se porte vers le nord avec l'infanterie montée, tandis que les combats se poursuivent dans les environs de Kimberley et dans le Natal."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Société",
    "title": "Informations diverses",
    "summary": "Inauguration au pavillon danois de l'aménagement d'une demeure bourgeoise du XVIIe siècle. Par ailleurs, une exposition internationale chevaline et asine est programmée à Vincennes pour septembre 1900.",
    "paragraphs": [
      "Le pavillon danois a été inauguré hier après-midi ; il renferme l'aménagement complet d'une luxueuse maison bourgeoise du Jutland, telle qu'elle apparaissait au XVIIe siècle.",
      "Une exposition internationale chevaline et asine est prévue à l'annexe de Vincennes, du 2 au 10 septembre 1900."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Éditorial",
    "title": "La politique coloniale de Lord Salisbury",
    "summary": "Lord Salisbury souligne la solidité de l'Empire britannique, dont les parties dispersées se sont liées avec le temps, prenant pour exemple l'unité nationale acquise par la France à travers l'histoire.",
    "paragraphs": [
      "Le Petit Parisien a fait l'éloge des colonies que la métropole a reçues, désabusant ainsi le monde entier qui persistait à croire l'Empire britannique trop dispersé pour agir de concert. Avec le temps, les différentes pièces se sont étroitement liées et leur force s'est proportionnellement accrue.",
      "Lord Salisbury donne, à ce sujet, l'exemple de la France. Il affirme que quiconque a étudié l'histoire de l'Europe a pu observer la formation des grandes nations : la France, autrefois divisée en provinces étrangères les unes aux autres, est devenue l'un des pays les plus unis des temps modernes."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Dépêches de l'Étranger",
    "title": "Nouvelles des Boërs et de la Mission Boër",
    "summary": "Mobilisation de volontaires portugais et soutien moral des États-Unis en faveur des Boërs. Pendant ce temps, le docteur Leyds prépare le départ de la délégation diplomatique du Transvaal pour l'Amérique.",
    "paragraphs": [
      "Londres, 1er mai. Le correspondant du Daily Mail à Lisbonne rapporte qu'un régiment de volontaires portugais est en cours de formation à Oporto pour rejoindre l'armée boër.",
      "Chicago, 1er mai. M. Bryan a déclaré hier que le parti démocrate exprime sa sympathie pour les Boërs, qui combattent pour leur droit à l'autonomie. Il a ajouté que l'appui moral d'une nation comme les États-Unis est un facteur de poids et que les bons offices américains pourraient être offerts en temps utile, selon le traité de La Haye.",
      "Bruxelles, 1er mai. Le docteur Leyds est rentré à Bruxelles ce matin, venant de La Haye où il a laissé les membres de la mission boër. À la légation du Transvaal, le docteur Leyds a observé la plus expresse réserve. Les trois délégués partiront jeudi prochain pour l'Amérique, tandis que le docteur Leyds demeure en Europe pour y accomplir ses devoirs."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un employé infidèle à Brindisi",
    "summary": "L'employé Vantrappen, auteur d'un détournement de 54 000 francs à Bruxelles, a été appréhendé par la police à Brindisi alors qu'il sortait de son hôtel en compagnie de sa maîtresse.",
    "paragraphs": [
      "Bruxelles, 1er mai. Le Petit Parisien avait annoncé la disparition du nommé Vantrappen, employé à Bruxelles, parti en emportant une somme importante.",
      "L'officier de police judiciaire Yves, accompagné d'un employé de la maison concernée, s'est lancé à sa recherche. Une dépêche confirme que le commis infidèle a été arrêté à Brindisi au moment où il sortait de son hôtel avec sa maîtresse. Vantrappen portait sur lui 54 000 francs et sera prochainement ramené à Bruxelles."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de chemin de fer près de Tirlemont",
    "summary": "Une violente collision entre deux trains de marchandises près de Tirlemont paralyse le trafic international. Le train spécial de la princesse de Galles figure parmi les convois bloqués par cet accident majeur.",
    "paragraphs": [
      "Bruxelles, 1er mai. Une collision de trains s'est produite ce matin, vers dix heures, près de la gare de Tirlemont. Deux trains de marchandises se sont pris en écharpe ; plusieurs wagons ont été détruits avec leur chargement et l'une des locomotives a subi de sérieuses avaries.",
      "Par suite de cet accident, le train spécial de Cologne à Calais, où avait pris place la princesse de Galles, ainsi que l'express d'Ostende-Vienne, ont accusé de grands retards. Le service a été interrompu durant plusieurs heures, la collision s'étant produite sur les voies principales."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Dépêches de l'Étranger",
    "title": "Émeute en Espagne",
    "summary": "À Villanueva, une révolte contre les propriétaires terriens, exaspérés par une invasion de sauterelles, a tourné au drame. Les troubles ont conduit à plusieurs arrestations et à un décès par frayeur.",
    "paragraphs": [
      "Madrid, 1er mai. À Villanueva, dans la province de Badajoz, une émeute a éclaté contre les propriétaires de terrains infestés par les sauterelles. Plusieurs arrestations ont été opérées. Une dame, dont la maison avait été saccagée par les manifestants, est morte de frayeur."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Dépêches de l'Étranger",
    "title": "Mort du peintre Munkacsy",
    "summary": "Le célèbre peintre hongrois Mihály Munkácsy s'est éteint ce matin dans la maison de santé d'Endenich, près de Bonn. Sa dépouille sera prochainement rapatriée à Budapest.",
    "paragraphs": [
      "Bonn, 1er mai. Le peintre Munkacsy est mort ce matin dans la maison de santé d'Endenich, près de Bonn, assisté de son épouse. Le corps sera prochainement transporté à Buda-Pest."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Dépêches de l'Étranger",
    "title": "Fuite du Vali de Tripoli",
    "summary": "La mystérieuse disparition d'Ismaïl-Kemal-Bey, vali de Tripoli, suscite une vive émotion à Yildiz-Kiosk. Les autorités craignent une fuite organisée vers l'étranger en compagnie de ses trois fils.",
    "paragraphs": [
      "Constantinople, 1er mai. Ismaïl-Kemal-Bey, connu pour ses sympathies anglaises et récemment nommé vali de Tripoli — poste équivalent à un exil — a mystérieusement disparu.",
      "Il s'était embarqué samedi, avec le colonel allemand chargé de la réorganisation militaire du vilayet, sur l'aviso Fuad. Toutefois, le commandant du navire, n'ayant pas reçu l'autorisation impériale de départ, les deux hommes durent débarquer. Depuis, Ismaïl-Kemal-Bey demeure introuvable. On suppose qu'il avait pris ses dispositions pour s'enfuir à l'étranger avec ses trois fils. Cet incident a produit une grande sensation à Yildiz-Kiosk."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Dépêches de l'Étranger",
    "title": "La situation chez les Achantis",
    "summary": "La situation demeure critique chez les Achantis. Le gouverneur reste assiégé à Coumassie, tandis qu'un Européen est porté disparu après une attaque lors d'une tentative de ralliement de la ville.",
    "paragraphs": [
      "Londres, 1er mai. On mande de Cape Coast Castle que la situation chez les Achantis s'aggrave. Selon les dernières nouvelles, le gouverneur est toujours cerné à Coumassie. Un Européen, qui se dirigeait vers cette ville accompagné de porteurs, a été attaqué et reste porté disparu."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Dépêches de l'Étranger",
    "title": "Colonisation allemande : Atrocités dénoncées",
    "summary": "Le capitaine Kannenberg et le capitaine Wegener ont été arrêtés en Allemagne pour des cruautés et meurtres commis contre les populations indigènes dans les colonies africaines, suite aux dénonciations de M. Bebel.",
    "paragraphs": [
      "Berlin, 1er mai. Le capitaine Kannenberg a été conduit à la prison militaire. Il est prévenu, pendant son séjour dans l'Afrique orientale, d'avoir tué à coups de revolver une négresse et son enfant dont les cris l'empêchaient de dormir. M. Bebel a dénoncé ces atrocités en février au Reichstag. Le capitaine Wegener, qui appartenait au corps de l'Afrique occidentale, a été arrêté également à cause de ses cruautés à l'égard des indigènes."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Nouvelles Coloniales",
    "title": "Une conférence sur la mission de la Côte d'Ivoire",
    "summary": "MM. Hostains et d'Ollone présentent le bilan de leur mission. Ils ont réussi la jonction entre la Côte d'Ivoire, le Soudan et la Guinée, ouvrant de vastes perspectives économiques pour le commerce français.",
    "paragraphs": [
      "Bordeaux. M. l'administrateur colonial Hostains et M. le capitaine d'Ollone, à qui avait été confiée la mission de la Côte d'Ivoire au Soudan et à la Guinée, ont fait hier soir une conférence sur les opérations qu'ils ont menées à bien.",
      "Avant eux, treize expéditions avaient tenté sans succès la jonction. La mission a découvert le tracé du Cavally et établi l'influence française jusqu'au fort Binger. Ce pays est riche en caoutchouc, bois d'ébénisterie et en kola."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "La mission Foureau-Lamy",
    "summary": "La famille de M. Charles Dorian, député de la Loire, annonce son prochain retour en France, prévu pour la mi-juin, après un passage par Porto-Novo en provenance du Dahomey.",
    "paragraphs": [
      "La famille de M. Charles Dorian, député de la Loire, a reçu une dépêche de Dyapaga (Dahomey) dans laquelle M. Charles Dorian annonce qu'il sera à Porto-Novo le 20 mai et qu'il arrivera en France le 10 ou le 15 juin."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Actualités diverses : Diplomatie et Sciences",
    "summary": "Le Président de la République reçoit l'ambassadeur d'Italie. Parallèlement, l'Académie des sciences examine des travaux astronomiques et deux étudiants bulgares achèvent leur périple à pied vers Paris.",
    "paragraphs": [
      "Le Président de la République a reçu hier matin l'ambassadeur d'Italie qui lui a présenté M. Salandra, ministre de l'Agriculture d'Italie.",
      "M. de Freycinet a communiqué à ses collègues de l'Académie des sciences le résultat d'importants travaux astronomiques sur les planètes télescopiques et les astéroïdes du système de Mars et de Jupiter.",
      "Deux jeunes étudiants bulgares, nommés Popoff et Seltchen, étaient partis de Sofia pour venir à pied à Paris et visiter l'Exposition. Ils sont arrivés hier soir au pavillon de Bulgarie, déclarant leur but atteint.",
      "Un incorrigible bohème se promenant hier en compagnie d'un ami, le quitte un instant pour courir au devant d'un passant qu'il accable de politesses. Questionné, il répond : « C'est un futur créancier »."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Revendications des ouvriers des tabacs et des allumettes",
    "summary": "Les ouvriers des tabacs et des allumettes ont soumis leurs revendications à la direction des manufactures. Une demande de hausse salariale de 10% est portée devant le ministre des Finances.",
    "paragraphs": [
      "Les fédérations des ouvriers des tabacs et des allumettes ont envoyé des délégations auprès du directeur général des manufactures de l'État, M. Jacquin, afin de lui soumettre leurs revendications.",
      "Ils ont obtenu satisfaction sur certaines questions de règlement intérieur, mais M. Jacquin les a renvoyés au ministre des Finances pour la question de l'augmentation de 10 % des salaires durant l'Exposition. M. Jacquin a promis de s'occuper activement des autres questions : mauvaise qualité du bois, titularisation, secours en cas de maladie et création de crèches."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'agression de la rue Richard-Lenoir",
    "summary": "Une altercation dans un débit de vins de la rue Richard-Lenoir a dégénéré en agression armée. Un passant, M. Pierre Feyhotte, fut grièvement blessé par un coup de revolver tiré par l'un des assaillants, le nommé Liévin-Pins.",
    "paragraphs": [
      "Deux ouvriers, MM. Boutron et Saulnier, ont été pris à partie dans un débit de vins de la rue Richard-Lenoir. Une heure plus tard, ils furent attaqués par deux individus armés de ciseaux à froid. M. Pierre Feyhotte, un passant, a été grièvement blessé par un coup de revolver tiré par l'un des agresseurs.",
      "L'un des assaillants, le nommé Liévin-Pins, sujet belge, a été arrêté et transporté à l'hôpital Saint-Antoine avec ses victimes. Il refuse pour l'heure de dévoiler l'identité de son complice."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les méfaits des automobiles",
    "summary": "Mme Ernestine Kopffer, marchande de légumes à Courbevoie, a été violemment renversée par un motocycle alors qu'elle poussait sa voiture à bras. Grièvement blessée, elle a été conduite à l'hôpital Beaujon par les secours.",
    "paragraphs": [
      "Mme Ernestine Kopffer, marchande de légumes à Courbevoie, a été renversée par un motocycle alors qu'elle poussait sa voiture à bras. Grièvement blessée, elle a été transportée à l'hôpital Beaujon. L'auteur de l'accident a pris la fuite immédiatement après le choc."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame conjugal aux Halles",
    "summary": "Après une consommation excessive d'absinthe, l'ouvrier Sylvain Viollet a poignardé son ex-femme devant l'église Saint-Eustache avant de retourner l'arme contre lui. Les deux protagonistes sont hospitalisés à l'Hôtel-Dieu.",
    "paragraphs": [
      "Sylvain Viollet, ouvrier maçon, a poignardé son ex-femme devant l'église Saint-Eustache après avoir bu de l'absinthe. La lame a traversé la joue et la bouche de la malheureuse. Croyant l'avoir tuée, il s'est porté deux coups de couteau dans la région du cœur. Tous deux se trouvent dans un état grave à l'Hôtel-Dieu."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Terrible chute dans les fortifications",
    "summary": "Le gardien de la paix Bertin a découvert l'ouvrier Jean Stévenot grièvement blessé au fond d'un fossé des fortifications. L'enquête privilégie la thèse de la chute accidentelle lors d'un trajet matinal vers le travail.",
    "paragraphs": [
      "Le gardien de la paix Bertin a découvert Jean Stévenot, 53 ans, ouvrier ajusteur, étendu dans le fossé des fortifications avec les jambes brisées et une blessure à la tête. L'enquête a conclu à une chute accidentelle survenue alors qu'il se rendait à son travail."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrêté sur un carrousel",
    "summary": "Un ouvrier nommé Jean a reconnu par hasard, sur un carrousel de la foire au pain d'épice, le véritable auteur d'un vol pour lequel il avait été injustement inquiété. Le coupable, Pierre Cavadini, a été écroué.",
    "paragraphs": [
      "Un ouvrier, M. Jean, arrêté injustement quelques mois auparavant pour un vol, a reconnu le véritable coupable, Pierre Cavadini, sur un carrousel à la foire au pain d'épice. Il a immédiatement alerté les agents et le coupable a été conduit au dépôt pour y être écroué."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes limitrophes",
    "summary": "Une série d'accidents tragiques et de drames personnels endeuille les communes de la périphérie parisienne, marqués par des noyades accidentelles, des gestes désespérés et des faits de violence urbaine.",
    "paragraphs": [
      "À Clichy, le jeune Adrien Berliet, âgé de 18 ans, a trouvé la mort par noyade en chavirant avec son esquif près de l'île des Ravageurs.",
      "À Saint-Ouen, les recherches se poursuivent pour retrouver un voyageur tombé accidentellement d'un bateau-mouche dans les eaux de la Seine.",
      "À Épinay-sur-Seine, un individu surpris en flagrant délit, identifié comme étant un déserteur, a menacé les agents de la force publique à l'aide d'un poignard.",
      "À Montreuil-sous-Bois, la disparition inquiétante d'un ouvrier électricien laisse sa famille dans le plus grand désarroi, son fils de dix ans ayant été retrouvé errant dans les rues.",
      "À Alfortville, Mme Céline Lachaud a tragiquement succombé après avoir ingéré, par une fatale méprise, de l'acide oxalique.",
      "À Robinson, Louis Véron a été grièvement blessé au cours d'une rixe, atteint par un coup de carafe porté par son adversaire.",
      "À Versailles, un début d'incendie s'est déclaré dans une habitation, mais a pu être rapidement maîtrisé par les secours.",
      "À Mantes, un enfant âgé de quatre ans a été renversé sur la voie publique par une voiture de boucher.",
      "À Montfort-l'Amaury, Victor Poilane, sous l'emprise de l'ivresse, s'est noyé dans l'étang neuf de Gambaiseuil.",
      "À Meaux, Zéphir Sery a mis fin à ses jours en se sectionnant la gorge avec un rasoir, désespéré par une maladie jugée incurable."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Départements",
    "title": "Drames à Beauvais et Compiègne",
    "summary": "Le département de l'Oise est le théâtre de deux tristes affaires : le décès par dénuement d'une rentière à Beauvais et une agression violente commise par un militaire à Compiègne.",
    "paragraphs": [
      "À Beauvais, Mme veuve Hatté, âgée de 77 ans, a été trouvée morte de faim dans son domicile, alors qu'il a été établi qu'elle possédait des économies considérables.",
      "À Compiègne, un soldat nommé Léon Couverchelle, surpris en flagrant délit de vol, a poignardé un aubergiste à l'aide de sa baïonnette pour tenter de s'échapper."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Chronique Théâtrale",
    "title": "Représentation du 'Follet' et rentrée de Mlle Deina",
    "summary": "La scène lyrique parisienne a célébré la première de 'Le Follet', œuvre de MM. Barbier et Lefèvre, ainsi que le retour remarqué de Mlle Deina dans le rôle d'Orphée.",
    "paragraphs": [
      "Le théâtre a donné hier soir la première représentation de 'Le Follet', une légende lyrique écrite par M. Pierre Barbier et mise en musique par M. Lefèvre. Bien que l'intrigue fût jugée quelque peu confuse, l'œuvre a été chaleureusement accueillie pour ses qualités mélodiques.",
      "Mlle Deina a effectué une rentrée triomphale sur les planches en interprétant le rôle d'Orphée, recevant les acclamations nourries du public."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Sciences",
    "title": "La lutte contre les rats par les méthodes pastoriennes",
    "summary": "Le docteur Danysz, chercheur à l'Institut Pasteur, propose une méthode novatrice pour exterminer les rats par la propagation contrôlée d'une maladie spécifique, avec des résultats concluants.",
    "paragraphs": [
      "Le docteur Danysz, membre éminent de l'Institut Pasteur, a entrepris des essais concluants visant à détruire les populations de rats en leur transmettant une maladie contagieuse, par le biais de cultures microbiennes sans danger pour l'homme ni pour les animaux domestiques.",
      "Les expériences menées à Tunis, ainsi qu'en divers points de la capitale, ont démontré une efficacité remarquable. Le procédé consiste à déposer ces cultures actives sur du pain ou du grain afin d'assurer leur ingestion par les rongeurs."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Courses hippiques",
    "title": "Compte-rendu des épreuves hippiques",
    "summary": "Récit des épreuves hippiques récentes : succès de Jéricho, Martinet et Vigoureux. Le steeple-chase final a été marqué par une bousculade ayant entravé la course de Crocodile.",
    "paragraphs": [
      "Le premier partant n'a pas su soutenir le rythme imposé durant son dernier galop d'essai.",
      "Jéricho a remporté aisément le prix de Morgat, s'imposant face à Glanville et Preeuse qui avaient pourtant mené la course jusqu'au dernier tournant.",
      "Lors du Prix de l'Odet, les chevaux Dax et Orégon se sont neutralisés durant tout le parcours. À l'entrée de la ligne droite, Sixpence a pris l'avantage pour gagner avec facilité, malgré la belle défense de Ouida.",
      "Le prix de Penmarch a été attribué à Martinet qui, après une course d'attente surprenante, a surgi après la dernière haie pour battre Grelot, lequel s'était précédemment débarrassé de La Boutetière, d'Autocrate et du déchu Tancarville.",
      "Vigoureux, manifestement en excellente condition, a dominé le prix d'Ouessant, franchissant l'arrivée loin devant Couesdon et Pavillon de Crux.",
      "Le steeple-chase final a été remporté par Duguesclin après une course patiente. Crocodile, qui semblait en position de l'emporter, a été écarté par une bousculade survenue à l'arrivée entre lui, Guara, Hector et le vainqueur."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Feuilleton",
    "title": "Mariage secret - Quatrième partie",
    "summary": "Césaire propose un plan audacieux pour percer les secrets de M. de Queyrel. Pendant que les hommes suivent leur piste, Rolande est priée de regagner le domicile familial pour assurer sa sécurité auprès de sa mère.",
    "paragraphs": [
      "Césaire insista. Ce qu'il faudrait au moins savoir, et tout de suite, c'est si nous avons affaire à des gens honnêtes ou à des individus qui manigancent quelque mauvais coup.",
      "Elle a, en effet, du bon. Eh bien, voilà mon idée : ce jeune homme ne m'a jamais vu. Il ne se doute probablement pas de mon existence.",
      "C'est ce que je me disais aussi. Par conséquent, je saurai immédiatement si M. de Queyrel est chez lui.",
      "Mais comme je me figure que votre jeune peintre est le digne élève de son parrain, j'ai l'idée qu'en les suivant à la trace, je vais aller avec lui dans des endroits où vous serez bien étonné, demain, que je l'aie remisé.",
      "Eh bien, suivez votre inspiration, mon cher Honorât. — Et moi, Claude ? demanda résolument Rolande. — Toi, mignonne, retourne auprès de ta mère et, avec Rosalie, barricadez-vous férocement."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Nouvelles sportives",
    "title": "Propriétaires et chevaux gagnants",
    "summary": "Bilan des gains hippiques au 30 avril 1899 : liste des propriétaires et chevaux ayant remporté plus de 20 000 francs, ainsi que les étalons les plus prolifiques du moment.",
    "paragraphs": [
      "Propriétaires gagnant au 30 avril, en courses plates, 20 000 francs au moins : MM. Maurice de Gheest, J. de Brémond, Ephrussi, Edmond Blanc, de Schickler, E. Deschamps, Mme A. Menier, MM. Caillault, Fasquel, de Gramont, marquise de Villamejor, MM. J. Lieux, Dodge, de la Charme, d'Harcourt, de Gernon, David-Beauregard, Abeille, de Nexon, Aunac, de Rothschild, Th. Carter.",
      "Chevaux gagnant au moins 20 000 francs : Governor, Semendria, Ivry, Codeman, Fourire, Cymbalier, Germain, Royal, Iago, Calbassier, Perth, Aigle Royal, Saint-Martin, Sans Escompte, Magistral, Voiron, Royal Bell, Ganymède, Eminence Grise, Ismène et Apex.",
      "Les étalons qui sont en tête de la liste des étalons gagnants sont Le Sancy, Le Pompon et The Bard."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Informations théâtrales",
    "summary": "Mouvements sur les scènes parisiennes : reprise de Zaza au Vaudeville, engagement de Mlle Yahne pour Cyrano à la Porte-Saint-Martin et dernières représentations annoncées pour divers spectacles parisiens.",
    "paragraphs": [
      "Ce soir, au théâtre du Vaudeville, première représentation (reprise) de Zaza, comédie en cinq actes, de MM. Pierre Berton et Charles Simon.",
      "On annonce l'engagement de Mlle Yahne au théâtre de la Porte-Saint-Martin pour y interpréter le rôle de Roxane dans la reprise de Cyrano de Bergerac, que Coquelin montera pour l'Exposition.",
      "Le beau drame de M. Edmond Rostand a totalisé, à la date d'hier, des recettes très significatives.",
      "Aux Bouffes-Parisiens, Joséphine vendue par ses sœurs n'aura plus qu'un nombre limité de représentations.",
      "Les Variétés annoncent les dernières représentations d'Éducation de prince, de M. Maurice Donnay.",
      "Au Châtelet, la Poudre de Perlinpinpin pourra être jouée jusqu'au 5 mai.",
      "Le théâtre du Palais-Royal se voit obligé d'annoncer les huit dernières représentations des Femmes de paille."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Sports",
    "title": "La course électrique et le cyclisme",
    "summary": "Nouvel échec pour le véhicule électrique n°2, contraint d'abandonner à Villeneuve-sur-Yonne. Parallèlement, l'U.V.P. organise la formation cycliste des militaires pour les grandes manœuvres.",
    "paragraphs": [
      "Le numéro 2 du dernier Critérium de l'électricité, qui avait dû s'arrêter peu après son départ par suite d'un court-circuit, rêvait de battre le record de Krieger, soit 152 kilomètres à l'heure. Poursuivi par la guigne, il a encore dû abandonner sa tentative à Villeneuve-sur-Yonne par suite d'un accident.",
      "La commission de vélocipédie militaire de l'U.V.P. informe les unionistes devant prendre part aux grandes manœuvres de cette année qu'elle va former des groupes auxquels sera donnée l'instruction cycliste spéciale."
    ]
  }
];
