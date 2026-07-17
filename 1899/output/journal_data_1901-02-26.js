// Date: 1901-02-26
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-02-26 (Version Restaurée, 39 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique scientifique",
    "title": "La douleur",
    "summary": "Dans une leçon à l'Hôtel-Dieu, M. Lucas-Championnière analyse l'influence des émotions sur la perception de la douleur, illustrant comment le stoïcisme et les conditions de vie modulent la souffrance physique humaine.",
    "paragraphs": [
      "Dans une de ses récentes leçons professées à l'Hôtel-Dieu, M. Lucas-Championnière faisait cette intéressante constatation : il est admis sans conteste que les émotions modifient considérablement la perception de la douleur.",
      "L'éminent chirurgien illustre son propos par l'accident d'une jeune ouvrière scalpée qui, sous le coup de l'émotion, ne ressentit aucune souffrance, ou encore par les récits de batailles où des soldats gravement blessés continuaient le combat sans fléchir.",
      "M. Lucas-Championnière explique que le stoïcisme de certains patients peut se justifier par des facultés d'endurance liées à la race ou aux conditions de vie, les citadins étant souvent plus sensibles que les ruraux ou les Orientaux.",
      "Enfin, il souligne les progrès de la chirurgie moderne qui a su vaincre la souffrance grâce aux anesthésiques et à une meilleure prise en charge de l'inflammation, reléguant au rang des souvenirs les méthodes archaïques."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Miss Tempête",
    "summary": "Jean, gratifié d'un chèque substantiel pour une commande artistique, s'apprête à entamer ses travaux au château des Fontenilles, non loin de la demeure historique du célèbre acteur Talma.",
    "paragraphs": [
      "Jean sortit de l'hôtel, le cœur battant, avec en poche un chèque de vingt mille francs remis par le baron Duprez-Morel pour une commande artistique. Une fois chez lui, il partage la nouvelle avec Denise, Bertin et Germaine, révélant que ce montant n'est que la moitié du prix convenu pour ses panneaux.",
      "Le lendemain, Jean se met en route pour Épinay afin de découvrir le château des Fontenilles où il doit travailler. Il interroge un passant qui lui indique le chemin, passant devant la maison de Talma, pour atteindre la demeure du baron."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Actualités coloniales",
    "title": "Arrivée de l'explorateur Gentil",
    "summary": "Le 25 février, le navire Ville-de-Maccio a ramené à Pauillac l'explorateur du Tchad, M. Émile Gentil, accueilli par les officiels après deux années de mission périlleuse en Afrique.",
    "paragraphs": [
      "Le 25 février, le navire « Ville-de-Maccio » est arrivé en rade de Pauillac avec à son bord M. Gentil, l'explorateur du Tchad. Il a été accueilli par M. de Lamothe, représentant le gouvernement, et par le baron Hulot au nom de la Société de géographie.",
      "Une réception a eu lieu, au cours de laquelle le travail de M. Gentil et de ses compagnons, le docteur Huet et l'administrateur Bernard, a été solennellement salué. M. Gentil a été promu administrateur-chef pour ses brillants services.",
      "L'explorateur a exprimé son émotion et son intention de prendre un repos bien mérité après deux ans de mission en Afrique. Un train spécial a été mis à sa disposition pour rejoindre Bordeaux."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Biographie",
    "title": "L'exploration du Tchad par M. Émile Gentil",
    "summary": "Portrait d'Émile Gentil, officier de marine et explorateur, dont les missions sur le fleuve Chari et la victoire décisive sur le sultan Rabah à Kousseri ont assuré l'influence française au Tchad.",
    "paragraphs": [
      "M. Émile Gentil, né à Briey en 1866, s'est illustré par ses audacieuses missions d'exploration en Afrique. Ancien officier de marine, il a mené à bien la navigation sur le fleuve Chari jusqu'au lac Tchad.",
      "Son action fut déterminante dans la pacification de la région après le massacre de la mission Bretonnet. Grâce à sa collaboration avec les troupes de la mission Foureau-Lamy, il a pu vaincre le sultan Rabah à Kousseri, établissant ainsi durablement la domination française dans la région."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique étrangère",
    "title": "La mission du général Pendezec",
    "summary": "En voyage officiel à Saint-Pétersbourg, le général Pendezec, chef de l'état-major général, bénéficie d'un accueil chaleureux et distingué des autorités militaires et impériales russes.",
    "paragraphs": [
      "Le général Pendezec, chef de l'état-major général français, séjourne actuellement à Saint-Pétersbourg où il reçoit un accueil très cordial des autorités militaires russes. Il a visité de nombreuses institutions militaires et a été reçu avec distinction par l'empereur et l'impératrice."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique intérieure",
    "title": "Le prochain budget",
    "summary": "Pour éviter le recours aux douzièmes provisoires, le Parlement doit impérativement hâter le vote du budget de 1902 avant la fin de l'année, malgré la perspective prochaine des élections générales.",
    "paragraphs": [
      "Il est impératif que le budget de 1902 soit voté avant la fin de l'année afin d'éviter le recours aux douzièmes provisoires. Le ministre des Finances a promis d'en effectuer le dépôt dans les plus brefs délais.",
      "Le Parlement doit hâter ses travaux, tout particulièrement à l'approche des élections générales, afin de ne point entraver la consultation électorale par des débats budgétaires indûment prolongés."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits divers",
    "title": "Une mutinerie à Châlons",
    "summary": "Une mutinerie a éclaté à l'école des Arts-et-Métiers de Châlons-sur-Marne. Les élèves de la deuxième division se sont barricadés en signe de révolte contre des mesures disciplinaires prises à leur encontre.",
    "paragraphs": [
      "Une mutinerie a éclaté à l'école nationale des Arts-et-Métiers de Châlons-sur-Marne à la suite de mesures disciplinaires. Les élèves de la deuxième division se sont retranchés et barricadés dans leurs dortoirs.",
      "Les autorités préfectorales et militaires sont sur les lieux ; le licenciement de la division pourrait être prononcé d'un instant à l'autre."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Marine",
    "title": "L'escadre italienne à Toulon",
    "summary": "Une escadre italienne, composée de puissants cuirassés et croiseurs, est attendue à Toulon pour rendre les honneurs au Président de la République, témoignant de la force navale italienne.",
    "paragraphs": [
      "L'Italie s'apprête à envoyer une escadre composée de cuirassés et de croiseurs pour saluer le Président de la République à Toulon. La flotte comprendra notamment des navires puissants tels que le 'Sicilia' et le 'Sardegna'.",
      "Le détail de la composition des forces italiennes met en évidence la modernité et la puissance de feu de ces bâtiments, témoins de l'évolution technique de la marine italienne."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits divers",
    "title": "Neuf vieillards asphyxiés à Noisy-le-Sec",
    "summary": "Un tragique accident par asphyxie à l'hospice Saint-Antoine de Padoue à Noisy-le-Sec a coûté la vie à neuf pensionnaires. Une expertise judiciaire est en cours pour en établir les causes exactes.",
    "paragraphs": [
      "Le drame survenu à l'hospice Saint-Antoine de Padoue a causé la mort de neuf pensionnaires par asphyxie. M. Esnault, l'un des survivants, a finalement succombé à ses blessures.",
      "L'enquête se poursuit pour déterminer les causes précises de l'accident, qu'il s'agisse d'une obstruction des tuyaux de poêle ou d'une mauvaise manipulation. Le parquet a ordonné une expertise approfondie."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Les obsèques des victimes de Noisy-le-Sec",
    "summary": "Les obsèques des sept premières victimes du drame de Noisy-le-Sec sont célébrées ce matin. La municipalité a pris en charge l'intégralité des frais funéraires des infortunés pensionnaires.",
    "paragraphs": [
      "Le maire de la commune a fixé les obsèques des sept infortunés ce matin, à neuf heures. Ils seront tous inhumés dans le cimetière communal de Noisy-le-Sec.",
      "La municipalité a pris à sa charge tous les frais des obsèques des sept infortunés. Les corps ont été mis en bière au cours de l'après-midi d'hier, puis placés dans la chapelle de l'hospice, devant laquelle se réunira le cortège funèbre.",
      "Les obsèques de M. Esnault n'auront probablement lieu que demain."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Chronique Parlementaire",
    "title": "Chambre des Députés : Séance du lundi 25 février",
    "summary": "La Chambre renvoie au Sénat le budget et débat de la loi sur les associations. M. Monis, Garde des Sceaux, s'associe aux critiques contre une détention préventive jugée arbitraire.",
    "paragraphs": [
      "La Chambre a renvoyé au Sénat le projet de budget, après avoir maintenu ses décisions antérieures sur le chapitre 7 du ministère de la Justice, portant sur la suppression d'un poste de conseiller dans les cours d'appel d'Angers, Bourges, Orléans, Limoges et Pau.",
      "À la suite d'une interpellation de M. Cruppi concernant le scandale d'une détention préventive de vingt-six jours infligée à une femme pour le vol de trois pains, M. Monis, ministre de la Justice, s'est associé au blâme exprimé. Les débats sur la loi relative aux associations ont ensuite repris.",
      "M. Waldeck-Rousseau a défendu l'article 9 du projet de loi, relatif aux droits des membres d'une association sur leurs biens, tout en acceptant son renvoi devant la commission afin d'en améliorer la rédaction."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "La détention préventive d'une femme",
    "summary": "M. Cruppi dénonce le cas d'une femme injustement incarcérée vingt-six jours à Saint-Lazare pour le vol de trois pains. Le ministre de la Justice promet une enquête et une remise de peine.",
    "paragraphs": [
      "M. Cruppi a interpellé le ministre de la Justice au sujet d'une femme arrêtée pour avoir dérobé trois morceaux de pain, maintenue vingt-six jours en détention à Saint-Lazare alors qu'elle justifiait d'un domicile fixe et qu'elle était sans aucun antécédent judiciaire.",
      "Libérée le 10 janvier et condamnée à une amende symbolique, cette affaire est dénoncée par M. Cruppi comme un fait déplorable, appelant à davantage d'humanité dans l'application de la législation pénale.",
      "M. Monis, ministre de la Justice, a affirmé avoir ordonné une enquête administrative et annoncé que le Président de la République avait accordé une remise de peine à la condamnée."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Chronique Parlementaire",
    "title": "Le contrat d'association",
    "summary": "Poursuite des discussions parlementaires sur le projet de loi relatif au contrat d'association, examinant notamment la dévolution des biens lors d'une dissolution.",
    "paragraphs": [
      "La Chambre a poursuivi la discussion du projet de loi sur le contrat d'association. L'article portant sur la propriété et la dévolution des biens en cas de dissolution a été renvoyé devant la commission pour clarifier les modalités juridiques.",
      "M. Gourd a soutenu un amendement visant à supprimer l'obligation de déclaration pour les associations religieuses composées de moins de vingt et un membres, dès lors qu'elles ne sollicitent pas la capacité juridique."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Chronique Parlementaire",
    "title": "Sénat : Séance du lundi 25 février",
    "summary": "Le Sénat valide l'élection de M. de Goulaine et débat de la dette portugaise. M. Delcassé réaffirme la défense des intérêts français. Adoption du budget et de lois sur la sécurité ouvrière.",
    "paragraphs": [
      "Le Sénat a validé l'élection de M. de Goulaine avant d'entamer la discussion sur l'interpellation de M. Guérin concernant le règlement de la dette extérieure portugaise.",
      "Le ministre des Affaires étrangères, M. Delcassé, a assuré avoir déployé tous les efforts nécessaires pour protéger les intérêts des porteurs français, affirmant qu'il ne tolérerait aucun manquement futur. Le Sénat a pris acte de ces déclarations avec satisfaction.",
      "Le budget a été adopté, ainsi que diverses mesures législatives relatives à la sécurité des ouvriers mineurs et à la réparation des dommages causés par le gibier aux récoltes."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le cadavre de Lyon",
    "summary": "L'enquête sur le corps découvert à Lyon se précise. Une lettre anonyme évoque un lien avec un complot anarchiste, tandis que l'autopsie révèle des sévices d'une extrême violence.",
    "paragraphs": [
      "L'instruction suit son cours concernant le cadavre découvert à Lyon. Une lettre anonyme, parvenue au juge d'instruction avant même la découverte de la tête de la victime, fournit des détails macabres laissant présumer une affaire d'origine anarchiste.",
      "Le docteur Boyer a identifié sur le corps des blessures infligées par des instruments pointus et contondants, suggérant que la victime fut saignée et assommée. L'affluence de la foule à la morgue occasionne de fréquents troubles à l'ordre public."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "La Guerre des Boërs",
    "summary": "Le général De Wet aurait subi un échec dans la colonie du Cap face au colonel Plummer. Les Boërs, désorganisés, battent en retraite tandis que Lord Kitchener confirme la saisie de munitions importantes.",
    "paragraphs": [
      "Les dépêches de Londres indiquent que le général De Wet aurait subi un échec dans la colonie du Cap. Le colonel Plummer a capturé des canons et un grand nombre de prisonniers.",
      "Les Boërs, divisés en détachements désorganisés, battent en retraite devant les forces britanniques. Lord Kitchener a confirmé la capture de munitions et la retraite précipitée de l'ennemi.",
      "Les journaux britanniques expriment l'espoir que la fin de la guerre soit proche, malgré les difficultés rencontrées par les colonnes anglaises à cause des pluies torrentielles qui entravent les mouvements."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique Étrangère",
    "title": "Échos d'Allemagne et d'Espagne",
    "summary": "Rencontre cordiale entre souverains à Kronberg. À Cologne, une affaire de mœurs entraîne quatorze arrestations, tandis qu'en Espagne, le conflit autour de Mlle Ubao persiste sur fond d'intervention ecclésiastique.",
    "paragraphs": [
      "L'empereur d'Allemagne et le roi d'Angleterre se sont rencontrés à Kronberg dans une ambiance des plus cordiales.",
      "À Cologne, une affaire de mœurs, impliquant des familles honorables, prend des proportions importantes avec l'arrestation de quatorze personnes.",
      "En Espagne, l'affaire Ubao continue : le frère de Mlle Ubao affirme que des pressions ont été exercées pour empêcher l'intervention de l'Église dans la restitution de sa sœur, laquelle manifeste le désir de retourner au couvent."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Chronique Militaire",
    "title": "Ordre du jour au 1er zouaves",
    "summary": "Le colonel Guillot salue l'héroïsme des soldats du 1er zouaves ayant risqué leur vie pour éviter une tragique méprise lors d'une rencontre avec des troupes russes.",
    "paragraphs": [
      "Le colonel Guillot a adressé un ordre du jour au 1er zouaves pour saluer l'héroïsme des soldats et officiers lors d'une rencontre avec des troupes russes, où ils ont agi avec bravoure pour faire cesser le feu par erreur.",
      "Plusieurs hommes ont été tués ou blessés en portant courageusement le fanion tricolore pour éviter une tragédie fratricide."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Social",
    "title": "Le Foyer du Soldat",
    "summary": "L'œuvre de Mme Germond, « Le Foyer du soldat », offre aux militaires parisiens un espace de détente et de culture, recevant des témoignages de reconnaissance jusque dans les colonies lointaines.",
    "paragraphs": [
      "L'œuvre de Mme Germond, « Le Foyer du soldat », continue d'offrir un espace de détente morale aux soldats en garnison à Paris, loin de leurs foyers respectifs.",
      "Des activités culturelles et des conférences sont régulièrement organisées pour ces hommes, avec le soutien dévoué de bénévoles et d'artistes. Cette initiative, fort appréciée, reçoit de nombreux témoignages de reconnaissance, y compris de soldats servant en Chine ou à Madagascar."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Social",
    "title": "Grèves à Montceau-les-Mines et Chalon-sur-Saône",
    "summary": "Tensions à Montceau-les-Mines suite à l'embauche d'ouvriers « jaunes » chez Schneider. À Chalon-sur-Saône, la reprise du travail au Petit-Creusot s'est déroulée sous surveillance étroite.",
    "paragraphs": [
      "À Montceau-les-Mines, une cinquantaine d'ouvriers, dits « jaunes », ont été embauchés par Schneider et Cie, provoquant de vives tensions avec les grévistes.",
      "À Chalon-sur-Saône, la rentrée des ouvriers aux usines du Petit-Creusot et Galland s'est effectuée dans le calme sous une étroite surveillance policière et militaire."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Vie Mondaine",
    "title": "Le bal de l'Élysée",
    "summary": "Le Président de la République, M. Loubet, a offert un brillant bal à l'Élysée. La réception, qui a rassemblé l'élite des corps constitués et les officiers, s'est prolongée jusqu'à deux heures du matin.",
    "paragraphs": [
      "Le Président de la République a donné un bal à l'Élysée où les uniformes des officiers, des attachés militaires et des polytechniciens ont apporté une note brillante. Les ministres et les membres des corps constitués étaient réunis dans un salon réservé.",
      "À minuit, M. et Mme Loubet ont fait le tour des salons avant de se retirer, laissant leurs invités danser sur la musique de l'orchestre de M. Bruroeat. Le bal s'est terminé à deux heures du matin."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Politique",
    "title": "Invitation du conseil municipal de Marseille",
    "summary": "Le conseil municipal de Marseille a officiellement voté une invitation adressée au Président de la République et à plusieurs membres de son cabinet pour une visite prochaine dans la cité phocéenne.",
    "paragraphs": [
      "Le conseil municipal de Marseille a décidé d'inviter le Président de la République et plusieurs ministres, dont MM. Waldeck-Rousseau, Millerand, Caillaux, Decrais et Mougeot, à se rendre à Marseille lors de son prochain voyage.",
      "Une délégation du conseil municipal se rendra prochainement à Paris pour présenter officiellement cette invitation aux membres du Gouvernement."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Vie Parisienne",
    "title": "Fête en l'honneur de M. Bouvard",
    "summary": "M. Bouvard, directeur des travaux de la Ville de Paris, a été honoré par ses collaborateurs à la salle de la Bodinière lors d'une cérémonie festive marquée par la remise d'une plaquette en or.",
    "paragraphs": [
      "Une fête a été offerte à M. Bouvard, directeur des travaux de la Ville de Paris, par ses collaborateurs à la salle de la Bodinière.",
      "À cette occasion, M. Raullin lui a remis une plaquette commémorative en or. La cérémonie fut suivie d'une série de performances artistiques, dont une interprétation de la comédie « L'Article 330 » par la troupe du Carillon."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrivée de la princesse Béatrix de Battenberg",
    "summary": "La princesse Béatrix de Battenberg est arrivée hier soir à Paris en provenance de Londres. Elle a été accueillie à la gare du Nord par M. Mittelhauser, commissaire spécial.",
    "paragraphs": [
      "La princesse Béatrix de Battenberg, sœur du roi d'Angleterre, est arrivée hier soir à Paris en provenance de Londres, accompagnée de trois de ses enfants et d'une suite de sept personnes. Elle a été accueillie à la gare du Nord par M. Mittelhauser, commissaire spécial."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Arts",
    "title": "Inauguration de l'exposition des Arts réunis",
    "summary": "La galerie Petit, rue de Sèze, accueille une nouvelle exposition de la société « Les Arts réunis », présentant des œuvres contemporaines et une section rétrospective consacrée au sculpteur Henri Chapu.",
    "paragraphs": [
      "Une exposition de tableaux, sculptures et objets d'art a été inaugurée à la galerie Petit, rue de Sèze, par la société « Les Arts réunis ».",
      "L'exposition présente les œuvres de divers artistes contemporains, ainsi qu'une section rétrospective dédiée au sculpteur Henri Chapu, regroupant ses maquettes et ses esquisses."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Social",
    "title": "M. Brieux et la loi Roussel",
    "summary": "L'académicien Eugène Brieux interpelle le préfet de police pour réclamer une application plus stricte de la loi Roussel afin de protéger les nourrissons et d'endiguer la mortalité infantile.",
    "paragraphs": [
      "M. Eugène Brieux a adressé une lettre pressante à M. le préfet de police concernant la situation préoccupante des enfants confiés aux nourrices. L'éminent écrivain insiste avec force sur la nécessité d'une application plus rigoureuse de la loi Roussel.",
      "Cette mesure législative, indispensable à la salubrité publique, vise à garantir la protection des nourrissons et à limiter, par un contrôle accru, le taux de mortalité infantile qui reste, hélas, bien trop élevé chez les nourrices."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Fatal accident à Bondy",
    "summary": "Un tragique accident domestique à Bondy a causé la mort des époux Besset, asphyxiés par les émanations toxiques d'un poêle à charbon de bois mal ventilé.",
    "paragraphs": [
      "Un bien triste drame vient de frapper la commune de Bondy. Les époux Besset, qui tenaient une épicerie, ont été découverts inanimés dans leur officine. Malgré les soins prodigués, le mari est décédé sur place, tandis que son épouse a succombé à ses malaises quelques heures plus tard à l'hôpital.",
      "L'enquête ouverte par les autorités conclut à un accident domestique fatal par asphyxie, provoqué par les émanations délétères d'un poêle à charbon de bois dont la combustion était défectueuse."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame familial à Paris",
    "summary": "Une violente dispute familiale au boulevard Bessières a tourné au drame : un fils a grièvement blessé son père par arme à feu pour protéger sa mère des brutalités de ce dernier.",
    "paragraphs": [
      "Un drame sanglant s'est déroulé au domicile familial, sis boulevard Bessières. Un ouvrier tourneur, le nommé Robert, a été grièvement atteint par des coups de feu tirés par son propre fils au cours d'une dispute violente.",
      "Le jeune homme, déclarant vouloir prendre la défense de sa mère que son père frappait avec brutalité, a fait usage d'un revolver. Le père, touché, se trouve actuellement dans un état désespéré."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Femme jalouse",
    "summary": "Une scène de jalousie violente a éclaté rue Duhesme : une épouse a tiré trois coups de revolver sur sa rivale, qui a été transportée dans un état grave à l'hôpital Lariboisière.",
    "paragraphs": [
      "Une scène de passion tragique s'est produite rue Duhesme. Mme Jazadet, en proie à une jalousie dévorante, a fait usage d'un revolver contre une jeune fille qu'elle accusait d'entretenir des relations coupables avec son mari.",
      "La victime, atteinte par trois projectiles, a été immédiatement transportée à l'hôpital Lariboisière. L'auteure des tirs a été appréhendée par les agents et conduite au poste pour y être interrogée."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Inconnu à la gare du Nord",
    "summary": "Un individu errant et mutique trouvé près de la gare de Groslay a été conduit à la préfecture de police. Malgré la découverte d'or et de photographies, son identité demeure un mystère complet.",
    "paragraphs": [
      "Un individu, dont l'identité demeure inconnue et qui se montre incapable de communiquer, a été recueilli aux abords de la gare de Groslay dans un état de grande désorientation.",
      "Malgré l'intervention d'interprètes sollicités pour le faire parler, l'homme n'a pu livrer aucune information. Porteur d'une somme importante en pièces d'or et d'une photographie représentant deux enfants, il a été dirigé vers la préfecture de police pour identification."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie à Clamart : une fillette morte de la rage",
    "summary": "La jeune Louise Barreau, âgée de treize ans, a succombé à la rage à Clamart. Malgré un traitement rigoureux suivi à l'Institut Pasteur après une morsure de chien errant, l'issue fatale n'a pu être évitée.",
    "paragraphs": [
      "La jeune Louise Barreau, âgée de treize ans, est décédée de la rage à Clamart. Ayant été mordue par un chien errant le 22 janvier dernier, elle avait immédiatement suivi un traitement rigoureux à l'Institut Pasteur. Malgré tous les soins prodigués, elle a succombé, après une longue agonie, à une crise d'une violence extrême."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame de la jalousie à Thuré",
    "summary": "Un drame conjugal s'est produit à Thuré, dans la Vienne. Alexandre Colin, un fermier sexagénaire, a gravement blessé son épouse à coups de couteau avant de tenter de mettre fin à ses jours.",
    "paragraphs": [
      "Un fermier de soixante ans, le nommé Alexandre Colin, a frappé son épouse avec un couteau de boucher dans un accès de jalousie, au sein de la commune de Thuré (Vienne). Après avoir grièvement blessé sa malheureuse compagne, le vieillard a tenté de mettre fin à ses jours en se poignardant à la poitrine."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident mortel de chasse",
    "summary": "M. Pierre-Marie Le Rimix est décédé tragiquement à Loguivy-Plougras. Son fusil, posé contre une branche, a fait feu accidentellement lors d'un mouvement, le blessant mortellement à la cuisse.",
    "paragraphs": [
      "M. Pierre-Marie Le Rimix est décédé accidentellement lors d'une partie de chasse sur le territoire de Loguivy-Plougras. Son fusil, chargé et appuyé contre une branche, a fait feu lors d'un mouvement intempestif, le frappant mortellement à la cuisse."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Régions",
    "title": "Autour de Paris : chroniques d'accidents",
    "summary": "Une série d'accidents tragiques a endeuillé la banlieue parisienne, signalant des décès et des blessures graves à Suresnes, Puteaux, Saint-Ouen, Bois-Colombes, Aubervilliers et Saint-Denis.",
    "paragraphs": [
      "Plusieurs accidents tragiques ont été signalés autour de la capitale : un charpentier a été écrasé à Suresnes, tandis qu'un électricien a été grièvement blessé à Puteaux. À Saint-Ouen, un ouvrier a été victime d'une courroie de transmission, et un enfant a été grièvement brûlé à Bois-Colombes. Enfin, un incendie a ravagé une demeure à Aubervilliers et un drame a été constaté à Saint-Denis, où un homme a mis fin à ses jours par arme à feu."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Sports",
    "title": "La course du Catalogue",
    "summary": "La course d'automobiles dite du Catalogue se tiendra dimanche aux environs de Melun. Cette épreuve, ouverte à trente-deux concurrents, est organisée selon cinq catégories basées sur le prix de vente des véhicules.",
    "paragraphs": [
      "La course d'automobiles dite du Catalogue, organisée par un de nos confrères spécialisé dans les questions d'automobilisme, se disputera dimanche prochain aux environs de Melun.",
      "Voici l'itinéraire précis : Melun-Nangis, route de Provins à Fontainebleau, route de Montereau à Melun, le Châtelet, Sivry et retour à Melun, soit un parcours d'environ soixante-dix kilomètres à effectuer deux fois.",
      "L'épreuve sera divisée en cinq catégories, établies selon le prix catalogue des voitures : moins de 8 000 francs, de 8 000 à 12 000 francs, de 12 000 à 16 000 francs, et au-dessus de 16 000 francs.",
      "Trente-deux concurrents ont déjà fait parvenir leur inscription pour cette compétition."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Tourisme",
    "title": "Nouvelle carte routière de Tunisie",
    "summary": "Le Touring-Club de France publie la deuxième édition de sa carte routière de Tunisie au 1/800 000. Cet ouvrage, dressé par M. Berthelot, répertorie les voies carrossables et pistes pour voyageurs et cyclistes.",
    "paragraphs": [
      "Le Touring-Club de France vient de publier la deuxième édition de sa carte routière de Tunisie au 1/800 000, dressée par M. Berthelot, membre du conseil.",
      "Cette carte comporte toutes les voies carrossables et pistes praticables aux voitures et aux bicyclettes. C'est certainement la plus complète qui ait paru sur ce pays, si intéressant au point de vue du tourisme et vers lequel artistes et voyageurs se dirigent en nombre de plus en plus grand chaque année."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Sports",
    "title": "Tournoi international d'échecs de Monte-Carlo",
    "summary": "Compte rendu de la 16e journée du tournoi d'échecs de Monte-Carlo : résultats des parties disputées et bilan des victoires, dont celle de M. Winawer contre M. Didier.",
    "paragraphs": [
      "Voici les résultats de la 16e journée du tournoi :",
      "Gagnants : MM. Marshall contre Reggio ; Janowski contre Schlechter ; Marco contre Gunsberg ; Tchigorine contre Blackburne ; Von Scheve contre Mieses ; Winawer contre Didier.",
      "Partie nulle : MM. Mason et Alapin."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Agriculture",
    "title": "Bulletin commercial du lundi 25 février",
    "summary": "Le marché de la Villette du 25 février marque une tendance à la baisse pour la plupart des bestiaux, les transactions s'avérant laborieuses pour les bœufs, les veaux et les porcs.",
    "paragraphs": [
      "Le marché de la Villette du lundi 25 février indique les cours suivants pour les bestiaux :",
      "Les bœufs, vente mauvaise avec une baisse de 15 à 20 francs par tête. Les veaux, vente mauvaise et baisse de 5 centimes par demi-kilo. Les moutons, vente assez facile. Les porcs, vente mauvaise et baisse de 2 à 3 centimes par demi-kilo vif.",
      "Le bulletin détaille également les cours du blé, de l'avoine et des sucres à différentes échéances."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Informations pratiques",
    "title": "Sommaire de L'Agriculture Nouvelle",
    "summary": "Le nouveau numéro de la revue L'Agriculture Nouvelle traite de l'industrie frigorifique, de l'arboriculture et de la viticulture. Le fascicule est disponible au prix de 10 centimes.",
    "paragraphs": [
      "Le numéro de cette semaine de L'Agriculture Nouvelle contient de nombreux articles spécialisés, notamment sur l'industrie frigorifique, la mise à fruit des arbres et les questions vinicoles. Le prix du numéro est de 10 centimes."
    ]
  }
];
