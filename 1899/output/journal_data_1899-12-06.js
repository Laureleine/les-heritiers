// Date: 1899-12-06
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-12-06 (Version Restaurée, 52 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La transformation de l'Asie Mineure",
    "summary": "Une analyse de la mutation géopolitique de l'Asie Mineure, où le déploiement de réseaux ferrés par les puissances européennes, dont la France, promet de transformer radicalement la région et d'étendre son influence.",
    "paragraphs": [
      "Si jamais la remarque fut vraie que des révolutions, qui mettaient autrefois un siècle à modifier un pays ou une société, accomplissent maintenant leur œuvre en vingt ans, c'est bien en Asie qu'on peut le vérifier. La Chine elle-même, ce pays classique de l'immobilité, semble gagnée par la contagion.",
      "Le spectacle que nous offre en ce moment l'Asie Mineure est un peu différent. Il ne s'agit plus ici d'une conquête violente. C'est une autre sorte de prise de possession que les puissances européennes essaient d'inaugurer dans ce vaste hexagone compris entre la mer Noire, le Bosphore, la Méditerranée, l'Arabie, le golfe d'Oman, la Perse et le Caucase.",
      "L'instrument de pénétration par excellence, les voies ferrées, manquait jusqu'ici à l'Asie Mineure. Les choses vont changer d'ici peu, grâce à l'entente et au concours des trois grandes puissances continentales les plus directement intéressées à cette transformation : l'Allemagne, la Russie et la France.",
      "Si les résultats des démarches de M. Constans répondent à l'attente qu'on en a conçue, le commerce et l'industrie de la France en Asie Mineure n'auront qu'à se louer de l'heureuse initiative prise par notre ambassadeur.",
      "L'Asie Mineure nous offrira des débouchés le jour où un triple réseau de voies ferrées la sillonnera en tous sens. Confirmation de nos anciens droits, élargissement de notre zone d'influence économique, tels seront, en fin de compte, les résultats de la politique suivie à Constantinople."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions",
    "summary": "Jacques et Suzanne se retrouvent pour un échange poignant, marqués par les conventions sociales et la pression d'un mariage imposé qui contrarie leur idylle.",
    "paragraphs": [
      "Au son de la voix qui l'interrogeait, il se redressa vivement et ne prononça qu'un nom : Suzanne.",
      "La discussion entre Jacques et Suzanne se poursuit sur leurs sentiments respectifs, le mariage imposé de la jeune fille et les conventions sociales qui semblent entraver leur union."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des ministres",
    "summary": "Réuni sous la présidence de M. Loubet, le Conseil des ministres a validé un projet de loi visant à exempter les sous-officiers des haras de toute obligation d'appel en cas de mobilisation.",
    "paragraphs": [
      "Les ministres se sont réunis, hier matin, à l'Élysée, sous la présidence de M. Loubet. Les ministres de la Guerre et de l'Agriculture ont fait approuver un projet de loi dispensant de l'appel, en cas de mobilisation, les sous-officiers des haras."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "Réformes dans la Marine",
    "summary": "Le ministre de la Marine a promulgué plusieurs décrets visant à restructurer les corps de la marine, notamment le rétablissement du titre de commissaire général et la réforme de l'École supérieure.",
    "paragraphs": [
      "Le ministre de la Marine a fait signer un décret rétablissant le titre de commissaire général, un décret réorganisant l'École supérieure de la marine, et un décret modifiant les règles d'avancement dans les divers corps de la marine."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "Amiral Fourrier à Sébastopol",
    "summary": "Après une mission à Constantinople, l'amiral Fourrier poursuit son périple diplomatique et se rend à Sébastopol pour y rencontrer l'amiral Tyrtow.",
    "paragraphs": [
      "Le ministre des Affaires étrangères a entretenu le conseil des questions extérieures. Après un séjour à Constantinople, l'amiral Fourrier se rend aujourd'hui à Sébastopol pour rendre visite à l'amiral Tyrtow."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique",
    "title": "Les retraites proportionnelles",
    "summary": "Le ministre de la Guerre a annoncé au Conseil des ministres le dépôt prochain d'un projet de loi visant à instituer des pensions de retraites proportionnelles au bénéfice des officiers de l'armée.",
    "paragraphs": [
      "Le ministre de la Guerre a prévenu le Conseil qu'il lui soumettrait, lors de sa prochaine réunion, un projet de loi relatif aux pensions de retraites proportionnelles des officiers."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Actualité internationale",
    "title": "La guerre au Transvaal",
    "summary": "Tensions diplomatiques après la fouille d'un navire allemand par l'Espagne à la demande britannique, tandis que l'Angleterre impose une censure stricte sur le conflit au Transvaal.",
    "paragraphs": [
      "Un fait important vient de se produire à Las Palmas : sur demande britannique, les autorités espagnoles ont visité un steamer allemand soupçonné de porter des armes aux Boërs. Rien n'a été trouvé, mais l'incident souligne la tension diplomatique vive.",
      "Les autorités anglaises exercent une censure sévère sur les télégrammes et les journalistes étrangers ne sont plus admis dans les couloirs du War Office.",
      "Malgré les récits officiels du combat de Modder-River, un silence significatif plane sur le sort des forces boërs. Pendant ce temps, à Prétoria et Johannesburg, les préparatifs pour soutenir un siège et fabriquer des munitions se poursuivent activement."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Actualité internationale",
    "title": "Le Message de M. Mac-Kinley",
    "summary": "Le Président américain a adressé au Congrès un message abordant les relations avec la France, l'Exposition de 1900, le différend frontalier avec le Canada et la situation apaisée à Cuba.",
    "paragraphs": [
      "Le message présidentiel américain a été lu au Congrès. Il aborde les relations avec la France, marquées par la sympathie suite à la mort du président Faure, les préparatifs pour l'Exposition de Paris, le différend avec le Canada au sujet des frontières de l'Alaska, et la situation à Cuba."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Chasse à l'homme sur les toits",
    "summary": "Le dangereux récidiviste Charles Pernel a été appréhendé hier par l'inspecteur Agron au terme d'une course-poursuite périlleuse sur les toits d'un immeuble de l'avenue de Saint-Ouen.",
    "paragraphs": [
      "Charles Pernel, un dangereux récidiviste, a été arrêté hier après une traque spectaculaire. Ayant commis un vol, il s'était réfugié sur les toits d'un immeuble de l'avenue de Saint-Ouen. Après une confrontation tendue où il tenta en vain de négocier sa liberté, il a été capturé par l'inspecteur Agron."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Politique",
    "title": "Chambre des Députés",
    "summary": "Sous la présidence de M. Paul Deschanel, la Chambre a entamé la discussion du budget des services pénitentiaires, occasionnant une interpellation de M. Georges Berry adressée au ministre de l'Intérieur.",
    "paragraphs": [
      "La séance, présidée par M. Paul Deschanel, a été consacrée à la discussion du budget des services pénitentiaires. M. Georges Berry a interpellé le ministre de l'Intérieur sur cette question sociale d'importance."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Chronique Parlementaire",
    "title": "Débats sur la répression du vagabondage et le travail pénitentiaire",
    "summary": "À la Chambre, M. Gaston Doumergue s'inquiète de la concurrence du travail pénitentiaire sur le secteur privé. M. Waldeck-Rousseau préconise une loi pour traiter efficacement le problème du vagabondage.",
    "paragraphs": [
      "M. Gaston Doumergue signale le danger de la concurrence faite au travail libre par les produits des prisons. Il estime qu'il serait opportun de limiter la fabrication carcérale aux seules matières consommées par la main-d'œuvre pénale elle-même.",
      "M. Waldeck-Rousseau, président du Conseil, déclare qu'il ne peut qu'applaudir aux efforts des préfets pour débarrasser les campagnes des chemineaux, des bohémiens et des mendiants, tout en admettant l'insuffisance de ces mesures isolées. Il affirme que seule une loi permettra de régler cette importante question.",
      "La Chambre passe ensuite à la discussion des chapitres relatifs aux services pénitentiaires."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Chronique Parlementaire",
    "title": "Le personnel du service pénitentiaire",
    "summary": "La Chambre débat de l'organisation des services pénitentiaires. L'amendement de M. Cruppi pour leur rattachement à la Justice est rejeté, mais le rétablissement des crédits aux cultes en prison est adopté.",
    "paragraphs": [
      "M. Cruppi propose une réduction de crédit afin de marquer le rattachement nécessaire des services pénitentiaires au ministère de la Justice, arguant que l'exécution des peines est une composante essentielle de la justice pénale. M. Waldeck-Rousseau invite cependant la Chambre à repousser cet amendement.",
      "M. l'abbé Gayraud demande le rétablissement des crédits alloués aux services religieux dans les prisons. Malgré l'opposition de M. Goujat, M. Waldeck-Rousseau soutient la mesure. L'amendement est finalement adopté par 316 voix."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Chronique Parlementaire",
    "title": "Le budget des Cultes",
    "summary": "M. l'abbé Gayraud critique les réductions budgétaires sur les Cultes, y voyant une manœuvre politique visant à affaiblir le clergé catholique et à préparer la séparation de l'Église et de l'État.",
    "paragraphs": [
      "M. l'abbé Gayraud énumère les diverses suppressions opérées par la commission sur le budget des Cultes. Il dénonce une volonté politique manifeste visant, par l'appauvrissement du clergé catholique, à préparer la séparation des Églises et de l'État.",
      "L'orateur réclame une application loyale du Concordat. La suite de la discussion est renvoyée à jeudi."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Informations Politiques",
    "title": "Nouvelles diverses",
    "summary": "M. Chevillon souhaite avancer les élections municipales pour éviter l'Exposition. Par ailleurs, le gouvernement dépose un projet d'emprunt pour financer les grands travaux publics à Madagascar.",
    "paragraphs": [
      "M. Chevillon a informé M. Waldeck-Rousseau de son souhait d'avancer la date des élections municipales au deuxième dimanche d'avril afin d'éviter tout conflit avec l'Exposition universelle.",
      "La commission des finances s'est réunie pour examiner les conséquences des récentes décisions du Sénat relatives à la nomination d'une nouvelle commission.",
      "Le gouvernement a saisi le Parlement d'un projet autorisant la colonie de Madagascar à émettre 60 millions d'obligations destinées à la construction d'un chemin de fer et à divers travaux publics."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Social",
    "title": "Le Congrès Socialiste",
    "summary": "Au congrès socialiste, les débats furent intenses sur la participation ministérielle. M. Jules Guesde s'oppose fermement à l'entrée d'élus socialistes au gouvernement, prônant la ligne révolutionnaire.",
    "paragraphs": [
      "La cinquième séance du congrès général a été marquée par des discussions techniques sur le mode de scrutin pour la commission de rédaction. Après une délibération confuse, le congrès s'est rallié à une proposition transactionnelle.",
      "Le débat sur la conquête des pouvoirs publics et l'entrée de M. Millerand au ministère a été particulièrement vif, opposant la tactique révolutionnaire à la tendance réformiste. M. Jules Guesde a réaffirmé qu'un élu socialiste n'avait pas le droit d'accepter un poste ministériel."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Justice",
    "title": "La Haute Cour : Vingt et unième audience",
    "summary": "Au cours de la vingt et unième audience de la Haute Cour, l'audition de M. Hennion, commissaire spécial, a mis en lumière les activités des ligues. Un vif incident a opposé M. Hornbostel au procureur général.",
    "paragraphs": [
      "Le procès se poursuit avec l'audition des témoins. M. Hennion, commissaire spécial attaché au ministère de l'Intérieur, est entendu longuement sur les menées et les agissements des ligues royalistes.",
      "Un incident des plus vifs a éclaté entre M. Hornbostel et le procureur général, provoquant une suspension de séance immédiate. La Cour, après délibération, a condamné M. Hornbostel à une peine disciplinaire."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Exposition",
    "title": "Visite de l'exposition de peinture et de sculpture",
    "summary": "Le Président de la République a honoré de sa présence l'exposition de la Société internationale rue de Sèze, admirant les œuvres de maîtres tels que Besnard, Whistler et Chabas.",
    "paragraphs": [
      "Le Président de la République a visité hier l'exposition organisée par la Société internationale, rue de Sèze. Ce salon présente des œuvres de nombreux artistes renommés, parmi lesquels MM. Albert Besnard, Whistler et Chabas.",
      "La section de sculpture, riche et variée, propose également des bas-reliefs, des bustes et des statuettes de grande valeur artistique."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Actualités criminelles",
    "summary": "De sanglants drames ont défrayé la chronique : à Nantes, un père est assassiné par son fils, tandis qu'à Paris, un garçon coiffeur égorge son épouse rue Letort après une violente dispute.",
    "paragraphs": [
      "À Nantes, un cultivateur âgé de quatre-vingts ans a été découvert sans vie dans son jardin. Son fils est fortement soupçonné d'avoir porté le coup mortel à la suite d'une dispute engendrée par l'ivresse.",
      "À Paris, au 67 de la rue Letort, un garçon coiffeur a égorgé son épouse au cours d'une violente altercation. Le meurtrier a été immédiatement arrêté par les autorités."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "La question du concours d'internat",
    "summary": "Le monde médical est en pleine expectative. La commission a voté à huit contre deux contre la reprise du concours d'internat ; le conseil de surveillance tranchera définitivement demain.",
    "paragraphs": [
      "La commission, par une majorité de huit voix contre deux, a émis l'avis qu'il n'y avait pas lieu de recommencer le concours d'internat.",
      "Cette décision sera transmise au conseil de surveillance, composé de trente-cinq membres, qui doit se réunir demain et qui est seul habilité à trancher définitivement la question.",
      "Il convient d'ajouter que le résultat de cette délibération est attendu par tout le corps médical avec la plus vive impatience."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Reconstitution de l'incendie avenue de Wagram",
    "summary": "La justice a procédé à la reconstitution de l'incendie de l'avenue de Wagram. La femme Boucher et l'ancien agent d'affaires Fouquet persistent dans leurs dénégations malgré les éléments à charge.",
    "paragraphs": [
      "La femme Boucher, dite de Lachenaye, et l'ancien agent d'affaires Fouquet ont été conduits, hier matin, avenue de Wagram. En présence de leurs avocats, de M. Danion, juge d'instruction, et de M. Mourgues, commissaire de police, il a été procédé à la reconstitution scrupuleuse de la scène de l'incendie.",
      "Malgré les lourdes charges accumulées contre eux au cours de l'instruction, les inculpés ont persisté dans leurs dénégations."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident de voiture à Saint-Germain",
    "summary": "Un garçon boucher de vingt ans, Ernest Brazin, a été grièvement blessé avenue de la Défense après que son cheval, effrayé par le tramway à vapeur, a renversé sa tapissière. Il a été transporté à l'hôpital Beaujon.",
    "paragraphs": [
      "Un cheval attelé à une tapissière conduite par un garçon boucher, Ernest Brazin, âgé de vingt ans, demeurant à Bécon-les-Bruyères, s'est emporté hier, avenue de la Défense, au passage du tramway à vapeur de Saint-Germain.",
      "Le convoi a renversé son siège. Brazin s'est fracturé la cuisse gauche et a été grièvement blessé à l'aine.",
      "Après avoir reçu les premiers soins, le jeune homme a été transporté à l'hôpital Beaujon."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Sauvetage à Saint-Ouen",
    "summary": "Un sexagénaire, Joseph Fouret, a été sauvé de la noyade dans la Seine à Saint-Ouen par deux courageux sauveteurs, Ernest Desjardins et le marinier Georges Wittemann, après des efforts acharnés.",
    "paragraphs": [
      "Un émouvant sauvetage a eu lieu hier, à cinq heures, à quelques mètres en amont du pont de Saint-Ouen.",
      "Un vieillard, Joseph Fouret, âgé de soixante-trois ans, demeurant 3, rue de la Chapelle, venait de tomber dans la Seine et avait déjà disparu, quand les nommés Ernest Desjardins, âgé de vingt-sept ans, et Georges Wittemann, marinier, âgé de dix-huit ans, demeurant tous deux à l'île Saint-Ouen, furent attirés par les cris du malheureux se débattant dans l'eau. Ils se portèrent immédiatement à son secours.",
      "Ce n'est qu'après des efforts inouïs, et en plongeant plusieurs fois, que les deux courageux sauveteurs réussirent à ramener Joseph Fouret à la surface et à le traîner sur la berge.",
      "Soigné au poste de secours, il a été très difficilement ramené à la vie, puis transporté à son domicile. Son état est grave."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Agression aux Lilas",
    "summary": "Jean Melt et Adolphe Bromure, deux jeunes ouvriers de Pantin, ont été violemment agressés et dépouillés par une bande d'une dizaine d'individus hier soir, près de Bagnolet. Ils ont porté plainte auprès de M. Clément.",
    "paragraphs": [
      "Deux jeunes ouvriers travaillant à Pantin, Jean Melt et Adolphe Bromure, âgés de dix-huit et vingt ans, traversaient hier soir, à neuf heures, la localité des Lilas, près de Bagnolet, quand ils furent assaillis par une dizaine d'individus qui les rouèrent de coups et leur enlevèrent tout ce qu'ils possédaient.",
      "Grièvement blessés, l'un au crâne et l'autre à l'abdomen, ils ont reçu des soins et ont regagné leur domicile en voiture, après avoir donné le signalement de leurs agresseurs à M. Clément."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Enfant sauvé à Pantin",
    "summary": "Le jeune Marcel Anerau, âgé de sept ans, a été sauvé d'une noyade certaine dans le canal de l'Ourcq par M. Michel Paizier, un ouvrier maçon qui n'a pas hésité à intervenir rapidement.",
    "paragraphs": [
      "M. Michel Paizier, âgé de trente-quatre ans, ouvrier maçon, a sauvé hier un enfant de sept ans, Marcel Anerau, domicilié rue d'Allemagne, qui venait de tomber accidentellement dans le canal de l'Ourcq.",
      "Après une heure de soins, le pauvre enfant a repris connaissance et a pu être ramené chez ses parents."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Drame en forêt de Bondy",
    "summary": "Après avoir tiré sur son mari en forêt de Bondy, Mme Van Wyngen a été remise en liberté provisoire par le commissaire M. Marie pour s'occuper de ses enfants. L'état du mari reste très préoccupant.",
    "paragraphs": [
      "Nous avons raconté, hier, le drame qui s'est déroulé en pleine forêt de Bondy, au cours duquel une femme a tiré deux coups de fusil sur son mari.",
      "Après interrogatoire, M. Marie, commissaire de police, a cru devoir mettre Mme Van Wyngen en liberté provisoire, afin de ne pas laisser seuls et sans soins ses trois jeunes enfants.",
      "On ne conserve que peu d'espoir de sauver le blessé, qui est actuellement en traitement à l'hôpital Lariboisière."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Noyade à la Plaine Saint-Denis",
    "summary": "Une femme d'une trentaine d'années, correctement vêtue, a été repêchée sans vie hier dans le canal de la Plaine Saint-Denis par l'éclusier M. Gustave Devilliers. L'identité de la victime demeure inconnue.",
    "paragraphs": [
      "Une femme âgée d'environ trente-cinq ans, correctement vêtue, est tombée hier dans le canal. M. Gustave Devilliers, éclusier, s'est porté à son secours et l'a ramenée sur la berge, mais la malheureuse était déjà décédée.",
      "L'enquête n'a pas permis, pour l'heure, d'établir son identité."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Chute à Villeneuve-la-Garenne",
    "summary": "Le jeune Alexandre Garaud, seize ans, a fait une chute de sept mètres alors qu'il cueillait du gui. Souffrant de fractures à l'épaule et aux côtes, il a été hospitalisé en urgence à Beaujon.",
    "paragraphs": [
      "Le jeune Alexandre Garaud, âgé de seize ans, qui coupait sur un arbre des bouquets de gui, est tombé d'une hauteur de sept mètres. Dans sa chute, il s'est fracturé l'épaule et s'est enfoncé plusieurs côtes.",
      "Il a été transporté d'urgence à l'hôpital Beaujon pour y recevoir les soins nécessaires."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Arrestation à Saint-Gratien",
    "summary": "Louis Leroux, maçon à Montmorency, a été arrêté par la gendarmerie d'Enghien pour des agressions sur mineures. Déjà connu de la justice pour des faits analogues, il est incarcéré à Pontoise.",
    "paragraphs": [
      "La gendarmerie d'Enghien a arrêté, hier, le nommé Louis Leroux, maçon à Montmorency, qui s'était jeté sur de jeunes filles mineures dans le but de les violenter.",
      "Cet individu, déjà poursuivi par la justice pour des faits analogues, a été écroué à la maison d'arrêt de Pontoise."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Incendie à Ivry",
    "summary": "Un incendie a ravagé le grenier de l'immeuble de M. Xavier Baumer, tailleur à Ivry. Grâce à une lutte acharnée de deux heures, les pompiers ont maîtrisé le sinistre dont les pertes sont assurées.",
    "paragraphs": [
      "Un incendie s'est déclaré dans le grenier d'un immeuble appartenant à M. Xavier Baumer, tailleur.",
      "Le feu a pu être éteint après deux heures de lutte acharnée. Les pertes, dont le montant n'est pas encore évalué, sont fort heureusement couvertes par une assurance."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Drame à Houilles",
    "summary": "Le chalet du jardinier de la villa Pénard au Montoir a été totalement détruit par un incendie hier soir. Le corps carbonisé du jardinier, nommé Franco, a été découvert dans les décombres.",
    "paragraphs": [
      "Un incendie s'est déclaré hier soir, à cinq heures, dans le petit chalet qui sert de logement au jardinier de la villa Pénard, au lieu-dit le Montoir.",
      "Malgré les secours promptement organisés, le chalet fut complètement détruit en moins d'une heure. Le jardinier, nommé Franco, a été retrouvé carbonisé sous les décombres."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Agression à Meulan",
    "summary": "MM. Léon Tici et Paul Duzon, circulant en voiturette à pétrole, furent agressés par deux jeunes vauriens sur la route de Mantes. Les assaillants, originaires de Mézy, ont été appréhendés par la gendarmerie.",
    "paragraphs": [
      "MM. Léon Tici, mécanicien, et Paul Duzon, employé de commerce, demeurant tous deux à Paris, traversaient hier, en voiturette à pétrole, la ville de Meulan, lorsque, arrivés sur la route de Mantes, ils furent assaillis par deux jeunes vauriens qui leur jetèrent des pierres.",
      "Les voyageurs parvinrent à les arrêter bien que M. Tici eût été blessé et que l'un des deux vauriens eût sorti son couteau.",
      "Conduits à la gendarmerie, ils déclarèrent se nommer Eugène Schillis, garçon pêcheur, et Georges Huppe, couvreur, tous deux habitant la commune de Mézy."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Décès du sauveteur de Corbeil",
    "summary": "M. Nogud, qui s'était héroïquement jeté dans la Seine pour secourir la jeune Georgette Marchandise, est malheureusement décédé cette nuit des suites d'une trop longue exposition au froid.",
    "paragraphs": [
      "M. Nogud, qui, avant-hier, ainsi que nous l'avons raconté, s'était jeté courageusement dans la Seine pour sauver la jeune Georgette Marchandise, est mort la nuit dernière des suites de sa trop longue station dans l'eau."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Découverte d'un cadavre à Meaux",
    "summary": "Le corps de M. Bourgeois, maire de Méry-sur-Marne, a été retrouvé sans vie sur les rives de la Marne. L'homme, âgé de soixante ans, a vraisemblablement succombé à une rupture d'anévrisme.",
    "paragraphs": [
      "On a trouvé hier matin, sur les bords de la Marne, le cadavre de M. Bourgeois, maire de Méry-sur-Marne.",
      "M. Bourgeois, qui a dû succomber à la rupture d'un anévrisme, était âgé de soixante ans."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Enfant abandonné à Meulan",
    "summary": "Un nouveau-né, âgé d'environ un mois, a été découvert abandonné dans le couloir d'une habitation par M. Henri Huber, employé d'octroi. L'enfant a été pris en charge par l'hospice local.",
    "paragraphs": [
      "Un employé d'octroi nommé Henri Huber a trouvé hier, dans le couloir de sa maison, un enfant paraissant âgé d'environ un mois, soigneusement enveloppé dans un jupon, et qui avait été abandonné quelques instants auparavant.",
      "Le petit être a été recueilli par l'hospice."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Départements",
    "title": "Incendie à Compiègne",
    "summary": "Un violent incendie a ravagé les dépendances agricoles de M. Orphila Hamart à Villeneuve. L'écurie, la grange et les récoltes ont été entièrement détruites par les flammes.",
    "paragraphs": [
      "Un violent incendie, dont la cause est restée inconnue, a éclaté, hier soir, au domicile de M. Orphila Hamart, âgé de quarante ans, cultivateur, demeurant à Villeneuve.",
      "L'écurie, la grange et les récoltes qu'elle abritait ont été la proie des flammes. Les pertes sont considérables."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Départements",
    "title": "Incendie à Montdidier",
    "summary": "Un violent incendie a ravagé une grange et une meule de paille aux Loges, près de Beuvraignes. Les biens appartenaient au cordonnier Fleuri Suret, et l'origine du sinistre demeure pour l'instant inconnue.",
    "paragraphs": [
      "Une grange, ainsi qu'une meule de blé et de paille, viennent d'être la proie des flammes aux Loges, annexe de Beuvraignes. Ces biens appartenaient au nommé Fleuri Suret, cordonnier. La cause de ce sinistre demeure, pour l'heure, inconnue."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Départements",
    "title": "Suicide à Dreux",
    "summary": "Le facteur rural Lambert, en poste à Anet, a été retrouvé mort asphyxié dans sa chambre, après avoir allumé un réchaud à charbon. Le mobile de cet acte fatal demeure mystérieux pour les autorités.",
    "paragraphs": [
      "Le facteur rural Lambert, d'Anet, a été trouvé hier matin asphyxié dans sa chambre, où il avait allumé un réchaud à charbon.",
      "On ignore, à ce jour, le mobile de sa fatale détermination."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Départements",
    "title": "Politique à Nantes",
    "summary": "M. le général Mercier, ancien ministre de la Guerre, brigue le siège de sénateur de la Loire-Inférieure, laissé vacant par le décès de M. Chesnelong, sénateur inamovible.",
    "paragraphs": [
      "M. le général Mercier, ancien ministre de la Guerre, a posé sa candidature dans la Loire-Inférieure aux prochaines élections sénatoriales. Ce siège est devenu vacant à la suite du décès de M. Chesnelong, sénateur inamovible."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Départements",
    "title": "Enquête sur un assassinat à Lille",
    "summary": "Le parquet enquête sur l'assassinat de M. Aimable Galant, découvert étranglé par son voisin, M. Blondel. Un rôdeur est recherché, bien que les soupçons se portent sur une personne du voisinage.",
    "paragraphs": [
      "Le parquet a poursuivi l'enquête ouverte au sujet de l'assassinat de M. Aimable Galant. La découverte du corps a été faite par M. Blondel, conseiller municipal, qui rendait visite quotidiennement à la victime. L'examen a permis de constater que M. Galant avait été étranglé.",
      "Un chemineau a été aperçu, le soir du crime, rôdant autour de la maison. Bien que la justice soit à sa recherche, le voisinage privilégie la piste d'un auteur résidant dans les environs."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Départements",
    "title": "Déraillement à Bourges",
    "summary": "Un train mixte a percuté un convoi de marchandises près de Saint-Florent. Si le choc a provoqué des dégâts matériels considérables et le renversement d'une locomotive, aucune victime n'est à déplorer.",
    "paragraphs": [
      "Un déraillement s'est produit ce matin à Saint-Florent. Le train mixte partant de Bourges à cinq heures cinq à destination de Montluçon, attelé de deux locomotives, a pris en écharpe un train de marchandises, suite à une erreur dont l'enquête devra déterminer les circonstances exactes.",
      "Le choc fut d'une grande violence : la machine fut renversée sur le flanc et huit wagons de marchandises furent projetés hors des rails. Aucun accident de personnes n'est à déplorer, mais les dégâts matériels sont importants."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "Mme Sarah Bernhardt revient à Paris dimanche. L'Opéra reprend La Korrigane, M. Colonne inaugure sa saison symphonique, et les répétitions des Misérables débutent à la Porte-Saint-Martin avec la musique de M. Wormser.",
    "paragraphs": [
      "Mme Sarah Bernhardt sera de retour à Paris dimanche prochain, accompagnée des artistes de sa troupe.",
      "Ce soir, à l'Opéra, reprise de la Korrigane. Le délicieux ballet de M. Widor accompagnera sur l'affiche La Prise de Troie.",
      "M. Édouard Colonne reprend la direction de ses concerts et donne dimanche prochain, outre la Symphonie avec chœurs de Beethoven, la première audition d'une Fantaisie pour piano et orchestre de M. Perilhon.",
      "Les Misérables, dont les répétitions générales viennent de commencer au théâtre de la Porte-Saint-Martin, comporteront une partie assez importante de musique de scène écrite par M. André Wormser."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Concerts et Divertissements",
    "title": "Soirée parisienne et spectacles",
    "summary": "Le tout-Paris se presse aux spectacles : Loïe Fuller subjugue à l'Olympia, Mlle Balthy triomphe à la Scala, et les cirques proposent de nouveaux programmes captivants entre pantomimes et dompteurs.",
    "paragraphs": [
      "La Loïe Fuller, à l'Olympia, subjugue le public avec ses danses lumineuses qui révolutionnent Paris.",
      "L'engagement de Mlle Louise Balthy à la Scala est prolongé face au vif succès qu'elle remporte.",
      "Le Casino de Paris renouvelle son programme avec le capitaine Woodward et ses lions de mer, Berthe Brésma, et la famille Agoust.",
      "Au cirque Medrano, on applaudit Miss Katarina Williams, le trio Jupiter, les Toullas et Gaberei.",
      "Au Nouveau-Cirque, aujourd'hui mercredi, matinée avec la pantomime à grand spectacle Au fond de l'eau."
    ]
  },
  {
    "id": 43,
    "page": 3,
    "category": "Sports",
    "title": "Résultats sportifs",
    "summary": "Retour sur les exploits sportifs : Kara-Ahmed domine en lutte, Villemain signe une performance cycliste sur tricycle, et le Racing-Club de France prépare son choc rugbystique contre le London Irish.",
    "paragraphs": [
      "Championnat de lutte : Kara-Ahmed, champion du monde, a battu Laurent le Beaucairois.",
      "Performance en automobile : Villemain a grimpé la rampe de Sainte-Barbe à une vitesse de 48 km/h sur un tricycle sans chaîne.",
      "Course des six jours à New-York : les records sont battus par les équipes Miller-Waller et Eaton-Walthour.",
      "Match de football : le Racing-Club de France recevra le London Irish le 10 décembre prochain au Parc des Princes."
    ]
  },
  {
    "id": 44,
    "page": 3,
    "category": "Bulletin Financier",
    "title": "Compte-rendu boursier du 5 décembre",
    "summary": "Le silence du War Office concernant la guerre pèse sur le marché des Mines à Londres, entraînant de l'hésitation, avant une légère reprise observée en fin de séance boursière.",
    "paragraphs": [
      "La continuation du silence observé par le War Office au sujet du théâtre de la guerre jette de l'hésitation sur le marché des Mines à Londres. Cependant, une légère reprise s'est produite en clôture.",
      "Les sociétés de crédit se maintiennent fermes. Les Mines d'or subissent l'influence des cotes de Londres, clôturant à des cours honorables."
    ]
  },
  {
    "id": 45,
    "page": 3,
    "category": "Informations Financières",
    "title": "Émissions et tirages",
    "summary": "Le 6 décembre marquera l'émission des nouveaux Bons du Trésor roumains, tandis que les résultats des derniers tirages d'obligations du Crédit Foncier sont désormais disponibles.",
    "paragraphs": [
      "Le 6 décembre, les Bons du Trésor roumains seront émis aux guichets des grandes banques avec des coupures de 500 à 10 000 francs, constituant un placement avantageux.",
      "Tirage du Crédit Foncier : les numéros gagnants des obligations ont été publiés pour les emprunts divers."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Spectacles",
    "title": "Spectacles du 6 décembre",
    "summary": "Programme des représentations théâtrales et lyriques prévues pour le 6 décembre 1899 sur les scènes parisiennes, incluant des œuvres classiques et populaires.",
    "paragraphs": [
      "Théâtres et spectacles pour le 6 décembre : Frou-Frou, Odéon, L'Arlésienne, Robinson Crusoé, Petit Chagrin, Les Pieds Nickelés, Martha, La Belle Hélène, Les Mousquetaires au Couvent."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les tragédies de l'amour",
    "summary": "Récit maritime illustrant la progression d'un navire inconnu nommé La Pénétrante à travers une mer agitée, en présence de la Minerve.",
    "paragraphs": [
      "Les voiles furent déployées. Puis l'équipage, croisant les bras, regarda évoluer au fond de l'horizon ce navire inconnu.",
      "La Pénétrante traversait, de sa proue, des montagnes d'eau sans cesse renaissantes et grandissantes.",
      "Au loin, la Minerve, toutes voiles dehors, paraissait et disparaissait au milieu des flots bousculés."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le père Bernard",
    "summary": "Jacques Châtel, convalescent après ses blessures, retrouve son père Fabien Daubray dans une scène d'une vive émotion.",
    "paragraphs": [
      "Jacques Châtel revenait peu à peu à la vie. Les cuisantes douleurs de ses blessures s'étaient apaisées.",
      "Il ouvrit les paupières et tourna languissamment son regard autour de lui. Aussitôt, une joie ineffable lui monta au cœur.",
      "Et voilà que deux bras l'avaient enlacé, serré d'une étreinte si douce, si tendre, presque timide, et Fabien Daubray, tout en larmes, sanglotait : « Mon fils ! mon petit Jacques ! mon enfant, me voici. »"
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Faits Divers",
    "title": "Le crime de Billancourt",
    "summary": "Une violente agression contre l'explorateur Jacques Châtel près de Billancourt a été déjouée par un cabaretier. Les trois agresseurs ont été arrêtés par la police.",
    "paragraphs": [
      "Une abominable tentative de meurtre cause, en ce moment, une violente émotion dans tout Paris.",
      "Le lieutenant Jacques Châtel, notre célèbre explorateur, a été victime d'une audacieuse agression qui aurait pu lui être fatale, perpétrée par trois bandits près de l'île de Billancourt.",
      "Le sieur Bernard, qui tient un cabaret, est intervenu et a mis les bandits en fuite, prodiguant ses secours au blessé.",
      "La police a arrêté les nommés Paul, dit « le Casse-Cœur des dames », Julot, dit « l'Esbroufe des Ternes », et Théodore Cathelin, dit « le Petit Frisé »."
    ]
  },
  {
    "id": 50,
    "page": 4,
    "category": "Faits Divers",
    "title": "Développements dans l'affaire Châtel",
    "summary": "L'enquête sur l'agression du lieutenant Châtel révèle des secrets de famille et l'implication de membres de la haute noblesse dans un complot criminel.",
    "paragraphs": [
      "Six semaines plus tard, le lieutenant Châtel s'avère être le fils de Fabien Daubray, condamné à vingt ans de travaux forcés pour un crime dont il serait innocent.",
      "Isidore Ledru, dit Évariste fils, a avoué que le véritable instigateur du crime est Gontran de M., de la haute noblesse, complice de la femme de la victime, Valérie Cathelin, connue sous le nom de baronne de Valmondois."
    ]
  },
  {
    "id": 51,
    "page": 4,
    "category": "Littérature",
    "title": "Sur le pont de la Minerve",
    "summary": "Au plus fort d'une tempête dévastatrice, le navire La Minerve subit une avarie majeure. M. de Vivarez, malgré son immense expérience maritime, s'alarme de la gravité de cette voie d'eau menaçant le bâtiment.",
    "paragraphs": [
      "Lorsque la tempête éclata avec une rare violence, M. de Vivarez tenta de se rapprocher de la Némésis afin de surveiller les mouvements du navire.",
      "La Minerve soutint vaillamment le choc des flots, mais une voie d'eau importante se déclara rapidement. M. de Vivarez jugea la situation plus que critique.",
      "Il avait assisté, au cours de sa longue carrière, à bien des tempêtes, mais les navires qu'il commandait jusqu'alors avaient toujours supporté les assauts de la mer avec une vaillance exemplaire."
    ]
  },
  {
    "id": 52,
    "page": 4,
    "category": "Chronique Mondaine",
    "title": "Les désillusions de M. et Miss Jefferson",
    "summary": "Ébranlés par de récents et tragiques événements, M. Jefferson et sa nièce Minnie ont reçu un journaliste dans leur hôtel de l'avenue du Trocadéro pour exprimer leur profonde amertume.",
    "paragraphs": [
      "Un journaliste s'est rendu à l'hôtel de l'avenue du Trocadéro afin d'interroger le millionnaire américain M. Jefferson, visiblement éprouvé par les récents événements qui ont frappé sa famille.",
      "M. Jefferson et sa nièce Minnie, tous deux vêtus de grands deuils, ont reçu le visiteur dans le cabinet de travail du riche Américain pour livrer leurs impressions sur cette douloureuse épreuve."
    ]
  }
];
