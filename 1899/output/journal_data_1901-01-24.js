// Date: 1901-01-24
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-01-24 (Version Restaurée, 36 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Reine et Femme",
    "summary": "Portrait de la Reine Victoria, souveraine dont les écrits intimes révèlent le désir profond de privilégier son rôle d'épouse et de mère, loin du faste officiel et des tourments politiques de la fin de son règne.",
    "paragraphs": [
      "Dans les notes qu'elle écrivait quotidiennement depuis de longues années, qui constituaient le Journal de sa vie et dont une partie fut publiée, la Reine se plaisait souvent à rappeler les deux dates qui marquèrent le plus son existence : celle de son mariage et celle de la naissance de son premier enfant. Il semble ainsi que, livrée à elle-même, loin du monde officiel, elle ne voulût pas se souvenir qu'elle était la souveraine d'une grande nation ; elle ne voulait plus être que la femme.",
      "La jeune Victoria, réveillée en pleine nuit au château de Kensington pour apprendre son avènement, vivait un véritable conte de fées. Pourtant, ce règne, commencé dans une sorte de féerie, s'est terminé tristement, s'assombrissant dans la fumée d'une injuste guerre.",
      "La Reine, selon les témoignages, apporta sur le trône d'Angleterre l'exemple de l'honnêteté, loin des scandales de ses prédécesseurs. Comme épouse et comme mère, elle a forcé l'admiration. Hélas, dans ses dernières années, ses conseillers l'entraînèrent dans une politique de violence et de désastres qu'elle a profondément déplorée, espérant jusqu'au bout la paix.",
      "Jean Frollo."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille (Marie-Madeleine)",
    "summary": "M. Turner et son compagnon Coquenard arrivent à Toulon. Armé, Turner entame une expédition dans les montagnes des Maures à la recherche d'une femme nommée Ursule Terrier.",
    "paragraphs": [
      "Dans le train, M. Turner terminait sa toilette. Il tendit les deux mains à son ami Coquenard. M. Turner tira son portefeuille pour verser les deux mille francs de cet homme, mais Coquenard refusa net, affirmant que c'était compris dans les frais.",
      "En montant dans le train, M. Turner était muni d'un charmant revolver de dix-huit centimètres. À neuf heures et demie, ils arrivaient à Toulon. Après avoir engagé un cocher nommé Cazalès, ils prirent la route vers Roquebrune.",
      "En montant vers les montagnes des Maures, M. Turner s'absorbait dans ses pensées. Soudain, il fit arrêter la voiture en apercevant un homme sur la route. C'était un homme au type oriental. M. Turner, le reconnaissant, l'interrogea brutalement sur une femme nommée Ursule Terrier, de Roquebrune."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'Attentat contre Émile Deschanel",
    "summary": "État de santé en amélioration pour Mlle Zélénine, victime de l'attentat. Émile Deschanel reprend ses cours au Collège de France sous les acclamations, tandis que Vera Gelo demeure muette face au juge.",
    "paragraphs": [
      "Les dernières nouvelles de la santé de Mlle Alexandrine Zélénine tendent à laisser supposer une amélioration sensible. La marche progressive de la paralysie est enrayée et elle a pu lire les nouvelles de son amie Vera Gelo. On espère bientôt pouvoir procéder à l'opération chirurgicale salvatrice.",
      "Au Collège de France, M. Émile Deschanel a repris ses cours hier. Accueilli par une salve d'applaudissements, il a rendu un hommage vibrant à la courageuse jeune fille qui a risqué sa vie pour la sienne. M. le président du Conseil lui a d'ailleurs décerné une médaille d'or.",
      "Mlle Vera Gelo, interrogée de nouveau, persiste dans son système de défense et refuse de révéler les raisons de son acte, malgré l'insistance du juge d'instruction."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "L'Agitation Carliste",
    "summary": "Une recrudescence de l'agitation carliste en Catalogne contraint le gouvernement français à renforcer la surveillance frontalière après la découverte d'un dépôt d'armes clandestin à Valcebollère.",
    "paragraphs": [
      "L'agitation carliste augmente en Catalogne. On signale des introductions d'armes à travers les montagnes du département, notamment par les cantons de Saillagouse et de Montlouis. Le gouvernement français a pris des mesures de surveillance à la frontière à la demande du gouvernement espagnol. Un dépôt d'armes a été découvert à Valcebollère et des renforts militaires sont envoyés à la frontière."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une Fabrique Détruite par un Incendie",
    "summary": "Un violent incendie a dévasté une fabrique de ouate dans le 13e arrondissement, laissant quarante ouvriers au chômage. Un pompier a été grièvement blessé lors de l'intervention.",
    "paragraphs": [
      "Un incendie d'une extrême violence a détruit une fabrique de ouate et de couvertures appartenant à MM. Binet-Benoist dans le treizième arrondissement de Paris. Le feu, causé par une lampe imprudemment allumée, a rapidement détruit les bâtiments. Les pertes sont importantes, couvertes par des assurances, mais quarante ouvriers se retrouvent sans travail.",
      "Le pompier Victor Blain a été grièvement blessé au cours des opérations de sauvetage."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Nécrologie",
    "title": "La Mort de la Reine Victoria",
    "summary": "Le deuil qui frappe l'Angleterre émeut la France. La reine Victoria, souveraine alliée, laisse place à son successeur Édouard VII, dont le règne débute alors que le corps de la défunte repose à Osborne.",
    "paragraphs": [
      "Le deuil qui frappe l'Angleterre excite en France des sentiments de sympathie. La reine Victoria, par-delà les aléas diplomatiques, fut une amie et une alliée. La triste guerre du Transvaal n'avait pas altéré l'opinion française sur la souveraine.",
      "Les dépêches concernant le nouveau roi, Édouard VII, occupent désormais l'actualité. Son départ d'Osborne pour Londres et sa prestation de serment devant le Conseil privé marquent le début de son règne. À Osborne, le corps de la Reine repose dans la chambre mortuaire, entouré de soldats et des hommages de ses sujets."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "International",
    "title": "Funérailles de la reine Victoria",
    "summary": "Les obsèques royales se préparent. Le yacht Alberta transférera la dépouille à Portsmouth, tandis que l'empereur d'Allemagne s'apprête à honorer la souveraine défunte avec des couronnes funéraires.",
    "paragraphs": [
      "Les officiers ont reçu l'ordre de porter au bras droit un brassard de deuil.",
      "Le yacht royal Alberta est désigné pour transporter la dépouille mortelle de la reine de l'île de Wight à Portsmouth.",
      "Le cercueil sera placé sur le gaillard d'arrière, en travers du pont. Demain, un service religieux sera célébré pour les membres de la famille et le personnel de la Maison royale dans la chapelle d'Osborne.",
      "L'empereur d'Allemagne a commandé à Londres deux magnifiques couronnes qu'il déposera lui-même sur le cercueil lors de la cérémonie de demain."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "International",
    "title": "À Windsor",
    "summary": "La cité de Windsor rend un hommage solennel à la reine disparue. Entre glas funèbre et pavillons en berne, la population exprime sa profonde affliction en union avec la famille royale.",
    "paragraphs": [
      "Hier, à l'annonce de la mort de la reine, les cloches de la tour du château de Windsor et celles de Saint-Jean ont sonné le glas, et tous les pavillons ont été mis en berne.",
      "Les maisons de commerce ont arboré des insignes de deuil et les fenêtres du château sont restées closes. Le maire a reçu de sir Arthur Bigge, secrétaire privé de la reine, un télégramme exprimant les sentiments de la famille royale pour la sympathie témoignée par la population."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "International",
    "title": "En Irlande",
    "summary": "Une vive tension a agité le conseil municipal de Dublin. La motion visant à reconnaître officiellement la reine Victoria comme souveraine d'Irlande a été rejetée après un débat houleux.",
    "paragraphs": [
      "À Dublin, lors d'un conseil municipal, M. Harrington, membre du Parlement et lord-maire, a proposé une résolution pour reconnaître la reine comme souveraine de l'Irlande. Un alderman a contesté cet amendement, qui a finalement été rejeté après un débat orageux par 30 voix."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Réactions internationales au décès de la reine Victoria",
    "summary": "Le décès de la reine Victoria suscite une émotion mondiale. Des États-Unis à l'Autriche, les puissances étrangères multiplient les hommages, soulignant l'influence diplomatique de la défunte souveraine.",
    "paragraphs": [
      "En Autriche, l'empereur a rendu visite à l'ambassadeur d'Angleterre pour présenter ses condoléances et a adressé un télégramme au roi d'Angleterre, exprimant ses regrets pour la perte d'une amie fidèle et bienveillante.",
      "En Allemagne, le Moniteur officiel exprime la douleur de la nation face à la perte de la grand-mère de l'empereur.",
      "Aux États-Unis, le président McKinley a envoyé au nouveau roi un message de sympathie. Les drapeaux ont été mis en berne à la Maison Blanche et sur les édifices publics, une première pour un souverain étranger. Le Sénat et la Chambre ont voté des motions de condoléances."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "La Chambre et le Sénat en deuil",
    "summary": "Le Parlement belge rend hommage à la reine d'Angleterre. À Paris, les représentants des pouvoirs publics expriment solennellement leur respect par des marques de deuil officiel à l'ambassade.",
    "paragraphs": [
      "Au Parlement, à Bruxelles, le président a rendu hommage à la reine d'Angleterre dont le règne a coïncidé avec l'existence de la Belgique indépendante, avant de lever la séance en signe de deuil.",
      "À Paris, les ministres et les présidents des Chambres se sont inscrits au registre de l'ambassade d'Angleterre. Les drapeaux de l'Élysée et du ministère des Affaires étrangères ont été mis en berne."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Social",
    "title": "La question du service militaire de deux ans",
    "summary": "La commission de l'armée délibère sur les modalités du service de deux ans, conciliant l'exigence d'une égalité stricte devant le devoir militaire et la nécessité de maintenir les effectifs requis.",
    "paragraphs": [
      "La commission de l'armée a discuté des mesures préparatoires concernant le rengagement des hommes de troupe pour le futur service de deux ans. Plusieurs membres plaident pour une égalité stricte, sans dispense, tandis que d'autres réclament une étude approfondie sur les effectifs nécessaires en temps de paix."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "Loi sur les associations et les syndicats",
    "summary": "Débats législatifs en cours : la commission spéciale révise les dispositions sur les associations, tandis que la commission du travail ajuste le statut juridique et les sanctions des syndicats.",
    "paragraphs": [
      "La commission spéciale a examiné divers amendements sur la loi des associations, notamment sur la suppression de l'article 2 relatif aux objets illicites.",
      "La commission du travail a repoussé la disposition tendant à conférer aux syndicats professionnels la personnalité commerciale, tout en modifiant les sanctions prévues par la loi."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits divers",
    "title": "Crime à Orbeil",
    "summary": "Un drame sanglant a secoué Orbeil : Jean Malnuit, cultivateur, a mortellement blessé son voisin d'un coup de faucille lors d'une dispute. L'auteur a été arrêté par les autorités.",
    "paragraphs": [
      "Jean Malnuit, cultivateur de cinquante-quatre ans, a tué un voisin d'un coup de faucille lors d'une querelle après avoir été offensé par des moqueries concernant le service militaire de son fils. Le meurtrier a été arrêté."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "Conseil Municipal de Paris",
    "summary": "Le Conseil Municipal de Paris a délibéré sur des dossiers urbains majeurs, incluant la gestion du cirque des Champs-Élysées, les terrains des fortifications et la baisse du prix du gaz.",
    "paragraphs": [
      "Le conseil a discuté de l'adjudication du bail du cirque des Champs-Élysées, des négociations sur les terrains des fortifications et de l'abaissement du prix du gaz, conformément aux nouvelles propositions de la compagnie."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Social",
    "title": "Grève de Montceau-les-Mines",
    "summary": "La grève persiste à Montceau-les-Mines, attisant une vive agitation. Tandis que la troupe occupe les sites pour maintenir l'ordre, le comité de grève s'efforce de préserver l'union ouvrière contre les rumeurs.",
    "paragraphs": [
      "La grève se poursuit et une vive agitation règne parmi les mineurs. La troupe a été déployée sur les sites miniers pour maintenir l'ordre. Le comité de grève, quant à lui, s'efforce de maintenir l'union des ouvriers malgré les rumeurs persistantes de désaccord."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Culture",
    "title": "Exposition au Cercle de la rue Volney",
    "summary": "Le Salon annuel de peinture et de sculpture a ouvert ses portes au Cercle de la rue Volney, mettant en lumière les œuvres remarquables de Benjamin-Constant, Bonnat et Marcel Baschet.",
    "paragraphs": [
      "L'ouverture du petit Salon annuel de peinture et de sculpture, au Cercle de la rue Volney, présente des œuvres notables de Benjamin-Constant, Bonnat et Marcel Baschet, rencontrant un vif succès auprès du public parisien."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Théâtre",
    "title": "Une critique de la pièce Niniche",
    "summary": "Vingt-trois ans après la création de Niniche, le talent de diseuse de Mme Judic demeure le principal attrait de cette comédie légère, conçue par Émile de Najac avant tout pour le divertissement.",
    "paragraphs": [
      "Le Petit Parisien et Albert Milland, son troisième collaborateur, Émile de Najac, garda l'anonymat pour cette œuvre jouée pour la première fois en février.",
      "Un critique de l'époque disait : « Les auteurs de Niniche n'ont pas eu la prétention d'écrire une comédie, mais simplement d'amuser leur public par une suite de scènes joyeuses. Or, ils y ont parfaitement réussi. »",
      "Mme Judic créait il y a vingt-trois ans le rôle de Niniche, et on comptait alors comme un plaisir de l'admirer, au premier acte, en costume de bain. Les plaisirs changent avec l'âge. Aujourd'hui, il ne s'agit plus que de reconnaître que Mme Judic n'a rien perdu du talent de diseuse exquise qui avait contribué, non moins que ses charmes, à assurer et étendre sa renommée."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un différend au théâtre des Variétés",
    "summary": "Le théâtre des Variétés a été condamné par la justice à rembourser une place facturée abusivement à M. Huot, ainsi qu'à lui verser des dommages-intérêts pour le préjudice subi.",
    "paragraphs": [
      "La loge 42 du théâtre des Variétés offre cet immense désavantage pour les gens qui la louent, c'est que, bien que ne contenant place que pour trois personnes, l'administration de ce théâtre en fait payer quatre.",
      "Cela durait depuis l'existence de la salle, quand récemment un spectateur, M. Huot, trouva absolument anormal de payer quatre places quand, en réalité, la loge ne pouvait contenir que trois chaises. Il réclama au contrôle la restitution d'une des places, soit 10 francs. Refus y fut opposé.",
      "Ne se tenant pas pour battu, M. Huot interjeta appel de cette décision. Cet intéressant procès est venu hier à la septième chambre, jugeant en dernier ressort. Les juges ont tranché différemment que le premier magistrat et ont condamné le théâtre à rembourser M. Huot, en lui allouant, en outre, trente francs de dommages-intérêts."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'homme coupé en morceaux",
    "summary": "Trois rôdeurs ayant découvert un cadavre dépecé rue de la Glacière ont été jugés. Blanchis du crime par leurs alibis, ils ont néanmoins été condamnés pour des vols découverts durant l'enquête.",
    "paragraphs": [
      "Les trois rôdeurs qui eurent la malchance de découvrir, le 4 décembre, rue de la Glacière, le fameux paquet, ont comparu hier devant les juges.",
      "Croyant profiter d'une bonne aubaine, ils ramassèrent le paquet et le portèrent chez une nommée Lucie Navarre, où ils l'ouvrirent. On voit d'ici leur épouvante en mettant à nu les restes d'un homme coupé en morceaux.",
      "La police ayant eu vent du fait, les arrêta, perquisitionna chez eux et y découvrit nombre d'objets provenant de vols. Tyssu, Chollet et Martin, les noms des trois rôdeurs, furent soupçonnés d'être les auteurs du crime. Grâce aux alibis qu'ils fournirent, le tribunal les a condamnés à un mois de prison pour les vols. La fille Navarre, poursuivie comme complice par recel, a été acquittée."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Social",
    "title": "Prestations de serment au tribunal de commerce",
    "summary": "À la première chambre de la cour d'appel de Paris, vingt-neuf membres du tribunal de commerce nouvellement élus ont prêté serment devant une assistance nombreuse, composée en grande partie de curieux et de proches.",
    "paragraphs": [
      "Une intéressante cérémonie a eu lieu hier, à la première chambre de la cour d'appel de Paris. Les vingt-neuf membres du tribunal de commerce récemment élus sont venus y prêter serment.",
      "Détail à signaler : la salle était bondée de dames et de demoiselles, venues sans doute pour entendre dire à leur époux ou père la phrase sacramentelle : « Je le jure »."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Justice",
    "title": "Les Assises de Versailles",
    "summary": "La session des assises de Seine-et-Oise s'ouvrira le 31 janvier sous la présidence de M. Lauretier. L'affaire Nedelec, impliquant un double assassinat, est fixée pour trois jours d'audience.",
    "paragraphs": [
      "La cour d'assises de Seine-et-Oise vient d'être réunie pour la session qui s'ouvrira le 31 janvier, sous la présidence de M. Lauretier, conseiller à la cour de Paris.",
      "L'affaire Nedelec, de Bezons, est inscrite pour le jeudi 31 janvier et durera trois jours. M. Lauretier, procureur de la République, soutiendra l'accusation et Me Henri Robert présentera la défense de Nedelec, qui est inculpé de vol et du double assassinat des époux Le Jons."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'énigme du jeune Gaston Brive",
    "summary": "Gaston Brive, dont le père avait cru reconnaître le corps sur une photographie, a été retrouvé sain et sauf à Toulouse, où il exerce actuellement la profession de boulanger.",
    "paragraphs": [
      "On sait que M. Brive, boulanger habitant Angoulême, avait cru reconnaître son fils lorsque la photographie du jeune homme coupé en morceaux lui avait été présentée. Nous sommes heureux d'apprendre que le boulanger et sa famille se sont trompés : Gaston Brive est retrouvé.",
      "Gaston Brive, âgé de dix-sept ans, qui avait quitté sa famille à Limoges depuis trois mois, s'est présenté à la police de Toulouse, où il travaille actuellement chez M. Soulié, boulanger, rue du Pont-Guiltemery."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Justice",
    "title": "Un vol de mobilier",
    "summary": "Des malfaiteurs ont cambriolé l'appartement d'une pianiste internée à Ville-Évrard. Utilisant de fausses clés et s'échappant par la fenêtre, ils ont dérobé le mobilier mis sous séquestre.",
    "paragraphs": [
      "Une pianiste assez connue, atteinte de troubles cérébraux, fut internée à Ville-Évrard, et la préfecture de la Seine avait mis sous séquestre les meubles contenus dans l'appartement qu'elle avait habité rue Saint-Georges.",
      "C'est sans doute dans la journée, et à l'aide de fausses clefs, que les malfaiteurs ont pu entrer dans l'appartement. Après avoir accompli leur méfait, ils ont attendu la nuit, n'osant, chargés de leur butin, repasser devant la loge du concierge, et ils sont descendus par la fenêtre."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un banqueroutier",
    "summary": "M. Joseph C., négociant en vins, a été arrêté et incarcéré à la prison de la Santé après la découverte de détournements d'actifs commis lors de sa faillite dans le onzième arrondissement.",
    "paragraphs": [
      "Un négociant en vins du onzième arrondissement, M. Joseph C., avait été déclaré récemment en faillite. Le syndic constata que M. C. avait détourné à son profit une partie de l'actif, tant en valeurs qu'en marchandises.",
      "En vertu d'un mandat, le commissaire de police a procédé à son arrestation. M. C., conduit au cabinet du juge, a été interrogé, puis envoyé à la prison de la Santé."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'incendie de la rue de Passy",
    "summary": "Un violent incendie a ravagé, la nuit dernière, un magasin de nouveautés au 2, rue de Passy. Si les dégâts matériels sont estimés à 50 000 francs, aucun blessé n'est heureusement à déplorer parmi le personnel.",
    "paragraphs": [
      "Un incendie a presque entièrement détruit, la nuit dernière, un petit magasin de nouveautés situé au 2, rue de Passy.",
      "Les pompiers de la caserne des Réservoirs, accourus dès la première alerte, furent maîtres du sinistre qui, néanmoins, a causé plus de 50 000 francs de dégâts. Toutefois, on n'a aucun accident de personne à déplorer."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accidents divers en banlieue",
    "summary": "La banlieue parisienne est le théâtre d'une série de drames : accidents de tramway à Neuilly et Saint-Ouen, accidents industriels à Clichy et divers faits divers tragiques touchant les communes environnantes.",
    "paragraphs": [
      "BOIS-COLOMBES : Un ouvrier peintre, M. Alexis Viort, a absorbé par erreur plusieurs gorgées de sublimé. Son état est inquiétant.",
      "NEUILLY-SUR-SEINE : Le tramway électrique n°31 a tamponné une charrette conduite par Antoine Chanettes, qui a été grièvement blessé à la tête et aux membres.",
      "CLICHY : Deux ouvriers employés dans une fabrique de chocolat, Théophile Jernpfer et Camille Balesta, ont été grièvement blessés par la chute d'une lourde machine à broyer.",
      "GENNEVILLIERS : Un petit garçon de douze ans, Victor Houles, s'est fait une grave blessure au crâne en tombant malencontreusement d'une fenêtre.",
      "SAINT-OUEN : Mme Marie Jamais a eu les jambes écrasées par un tramway mécanique en tentant de monter dans la voiture en marche.",
      "VINCENNES : M. Martin, qui était tombé d'une échelle roulante, est mort à l'hôpital.",
      "FONTENAY-SOUS-BOIS : Un grave accident de voiture s'est produit dans le bois de Vincennes, nécessitant l'intervention du commissaire de police.",
      "CRÉTEIL : M. Cuvillier, commissaire de police, a organisé des battues dans les carrières suite à des agressions nocturnes, menant à l'arrestation de trois individus.",
      "MALAKOFF : Mme veuve Gallot, prise d'un accès de folie furieuse, s'est tranché la gorge avec un rasoir. Elle est dans un état désespéré.",
      "RAMBOUILLET : Un journalier, Adrien Fleury, est mort instantanément après une chute dans un escalier."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Départements",
    "title": "Incendie criminel et fait divers",
    "summary": "Un incendiaire en série a été appréhendé dans l'Oise après avoir détruit une meule de paille. Par ailleurs, l'assassin de la jeune Louise Peltette a été arrêté à Guingamp.",
    "paragraphs": [
      "NOGENT-LES-VIERGES (OISE) : Un incendie a détruit une meule de paille appartenant à M. Bohorel. On a arrêté un nommé Robert Bulard, âgé de vingt-six ans, qui a reconnu être l'auteur de trois incendies analogues.",
      "GUINGAMP : L'assassin de la petite Louise Peltette vient d'être arrêté. C'est un ouvrier tanneur du nom de Pierre Omnes, âgé de dix-huit ans."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Sport",
    "title": "Résultats des courses de Nice",
    "summary": "La réunion hippique de Nice s'achève sur un beau succès. Les épreuves phares de cette dernière journée ont vu la victoire de Tek Tek, Souvenir Impérial et Ismène sur les pistes azuréennes.",
    "paragraphs": [
      "La dernière journée du meeting de Nice a confirmé le succès de la réunion. L'assistance était nombreuse, malgré l'absence de la colonie anglaise, endeuillée par la mort de la Reine.",
      "Les résultats sont les suivants : Prix de la Baie des Anges (Tek Tek, 1er), Prix du Conseil municipal (Souvenir Impérial, 1er), Prix du Port-Magnan (Ismène, 1er)."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie d'une papeterie",
    "summary": "Un violent incendie a totalement détruit une usine de la maison Laroche-Joubert à Saint-Cybard. Les pertes s'élèvent à un million de francs, laissant 350 ouvriers sans emploi.",
    "paragraphs": [
      "Une usine de la maison de papeterie Laroche-Joubert, située rampe du Palet à Saint-Cybard, a été la nuit dernière complètement détruite par un incendie.",
      "Le feu, déclaré vers dix heures, a pris immédiatement une extension considérable. Il n'y a pas eu d'accidents de personnes, le concierge ayant réussi à sauver sa famille. Les pertes sont estimées à un million de francs, privant 350 ouvriers de travail."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Santé et Médecine",
    "title": "La méthode du docteur Saint-Aubin pour les maladies de l'estomac",
    "summary": "Le docteur Saint-Aubin expose sa méthode thérapeutique externe pour les affections gastriques. Un journal spécialisé, distribué gracieusement, vulgarise ces soins visant à soulager durablement les malades.",
    "paragraphs": [
      "L'estomac est affecté par de nombreuses affections que la médecine moderne, par manque de soin, traite souvent de manière indifférenciée par des eaux minérales ou des drogues irritantes. Il est nécessaire de consulter un spécialiste qui étudie l'estomac sans promettre de guérir à la fois toutes les maladies (peau, cœur, anémie, etc.).",
      "Le docteur Saint-Aubin, spécialiste des maladies de l'estomac, propose un traitement nouveau, externe et rationnel. Un journal spécial, « Le Médecin de l'Estomac », a été fondé dans un but philanthropique pour vulgariser cette méthode qui fait des prodiges.",
      "Le sommaire du journal inclut la pathologie et les causes des affections stomacales, l'hygiène à suivre, ainsi que des attestations de malades guéris. Il est possible de recevoir le journal gratuitement en s'adressant au Docteur Saint-Aubin, 140, boulevard Magenta, Paris."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Informations Financières",
    "title": "Compagnie Internationale des Wagons-Lits et des Grands Express européens",
    "summary": "La Compagnie Internationale des Wagons-Lits publie l'état comparatif de ses recettes nettes pour la première décade de janvier, conformément à sa gestion financière rigoureuse.",
    "paragraphs": [
      "Société anonyme. État comparatif des recettes nettes des voitures du 1er au 10 janvier."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Publicité Médicale",
    "title": "Capsules de Quinine de Pelletier",
    "summary": "Les Capsules de Quinine Pelletier constituent un remède de confiance contre les fièvres, la grippe et les névralgies. Faciles à absorber, elles sont disponibles auprès des pharmaciens.",
    "paragraphs": [
      "Les Capsules de Quinine de Pelletier, inaltérables et de la grosseur d'un pois, ne durcissent pas et s'avalent facilement. Elles sont souveraines pour combattre les rhumes, la grippe, l'influenza, ainsi que les migraines, névralgies, fièvres intermittentes et paludéennes, le rhumatisme, la goutte et les maux de reins.",
      "Chaque capsule porte le nom PELLETIER. En vente chez les pharmaciens et au dépôt de la Chapelle, 114, rue de la Chapelle, Paris."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Annonces Légales et Divers",
    "title": "Loterie des Œuvres Ouvrières",
    "summary": "Le prochain tirage de la loterie des Œuvres Ouvrières est fixé au 31 janvier. Un gros lot de 250 000 francs est mis en jeu ; les billets sont disponibles chez M. A. Staudt.",
    "paragraphs": [
      "Tirage le 31 janvier avec un gros lot de 250 000 francs. Billets en vente chez A. Staudt, 51, rue de Strasbourg, Paris."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Instruction",
    "title": "Cours de pratique des affaires",
    "summary": "L'école Pigier, établie rue de Rivoli, dispense une formation professionnelle complète axée sur la comptabilité, la sténographie et les langues, destinée à la pratique moderne des affaires.",
    "paragraphs": [
      "L'école Pigier, située rue de Rivoli, Paris, propose une préparation à la pratique des affaires : comptabilité, sténographie, dactylographie, calligraphie et langues étrangères."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Hygiène",
    "title": "Services de sages-femmes et soins",
    "summary": "Mesdames Renaud, Rebérigier, Brun et Meaulin proposent leurs services de sages-femmes, de massage médical, ainsi qu'une pension discrète pour les soins obstétriques et le traitement de la stérilité.",
    "paragraphs": [
      "Plusieurs praticiennes, Mesdames Renaud, Rebérigier, Brun et Meaulin, proposent leurs services de sages-femmes, de massage médical et une pension pour les cas nécessitant une discrétion absolue, notamment pour les traitements contre la stérilité ou pour les accouchements."
    ]
  }
];
