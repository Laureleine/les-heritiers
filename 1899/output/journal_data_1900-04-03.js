// Date: 1900-04-03
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-04-03 (Version Restaurée, 34 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage Secret",
    "summary": "Le commissaire poursuit l'interrogatoire de Manuèle au sujet de son mystérieux rendez-vous à Joinville. La découverte d'une lettre compromettante confirme la préméditation des suspects.",
    "paragraphs": [
      "Mais le vicomte de l'Orme, avec un geste d'insistance : « Je vous en prie, monsieur le commissaire, poursuivez votre enquête. L'obligation de vous répondre fera une diversion à la douleur de cette pauvre femme. »",
      "Et, en effet, quand le vieux policier, d'une voix qu'il essayait à présent de rendre moins bourrue, interpella Manuèle : « Madame, ce rendez-vous à Joinville, personne ne vous y attendait, n'est-ce pas ? »",
      "C'est avec un sentiment d'étonnement qu'elle répondit : « Vous savez donc ? Vous savez déjà ? »",
      "« J'en étais sûr d'avance. Où est la lettre qui vous y envoyait ? »",
      "Et comme Manuèle hésitait, incertaine : « Maman, tu l'as emportée, tu dois l'avoir encore sur toi », s'écria Nolande.",
      "Quand Manuèle l'eut retrouvée et tendue d'une main si tremblante, si défaillante, ce commissaire de police : « Eh, parbleu ! s'écria-t-il. Ces gaillards-là n'ont pas même pris la peine de modifier leur écriture. C'est la même que celle du billet envoyé à la domestique. »"
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Social",
    "title": "Les écoles de réforme",
    "summary": "Face à la criminalité juvénile, la France explore de nouvelles méthodes de rééducation. Après l'échec du système cellulaire, le modèle des groupes familiaux apparaît comme le plus prometteur pour la rédemption.",
    "paragraphs": [
      "Il n'est pas de spectacle que la France regarde avec une plus douloureuse angoisse que celui de la criminalité du jeune âge.",
      "Il semble même qu'à l'heure actuelle, cette partie du sauvetage de l'enfance, qui vise aux moyens de redresser les tares des caractères encore mal formés, bénéficie d'une sollicitude plus vivante et plus inventive que les autres branches de l'assistance enfantine.",
      "C'est ainsi que le système cellulaire est définitivement condamné par tous les hommes autorisés. Cette méthode présente quelques avantages, elle sauve les petits prisonniers des conversations corruptrices, mais que d'inconvénients, en revanche !",
      "Le système cellulaire étant inefficace, on songea à mettre en pratique des théories d'un esprit opposé : les écoles de réforme. C'est ainsi qu'on trouve le système de casernement, comme celui des écoles belges de Ruyselede, Wyngheve et Beernem.",
      "Un troisième système, celui des groupes familiaux, semble plus séduisant. Le Rauhe-Haus de Hambourg, Mettray en France ou Redhill en Angleterre utilisent cette méthode.",
      "La femme apporte partout avec elle une ingéniosité aimante qui lui fait réussir les tâches les plus compliquées, et ne craignons pas d'affirmer qu'il n'y a pas d'agent plus parfait de guérison morale et de rédemption que la femme."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "La Journée de la Mutualité",
    "summary": "MM. Bourgeois, Deschanel et Mougeot célèbrent le mouvement mutualiste. Cette union républicaine affirme son engagement pour la solidarité tout en rejetant fermement les théories collectivistes.",
    "paragraphs": [
      "Par une coïncidence heureuse, trois hommes politiques, MM. Léon Bourgeois, Deschanel et Mougeot, présidaient, à la même heure, sur des points différents du territoire, des cérémonies en l'honneur de sociétés de secours mutuels, et ils tenaient un langage presque identique pour célébrer l'idée de mutualité.",
      "C'est un fait caractéristique de voir ces hommes appartenant à des nuances diverses du parti républicain associer leurs voix pour applaudir au grand mouvement mutualiste qui nous passionne tant.",
      "Mais, dans ce nom de socialistes, il faut se garder de comprendre l'infime groupe des collectivistes, détracteurs des principes fondamentaux de la Révolution, dangereux utopistes qui nient la famille et répudient la propriété.",
      "Le ministère Waldeck-Rousseau marche avec le concours des socialistes, de même qu'il n'a pas pour lui les collectivistes, parce qu'il entend sauvegarder les droits de l'indépendance individuelle."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Singulière évasion au pénitencier de Bicêtre",
    "summary": "Une évasion sans précédent a eu lieu au pénitencier de Bicêtre. Le soldat Faure a pris la fuite grâce à la complicité directe du sergent surveillant Guichon, profitant d'une porte restée ouverte dans la nuit.",
    "paragraphs": [
      "Un fait sans précédent vient de se produire au pénitencier de Bicêtre, où sont détenus les soldats condamnés à un an de prison au moins. La grande porte d'entrée a été trouvée entrouverte vers deux heures du matin.",
      "Un détenu, le jeune soldat Faure, s'est évadé en compagnie et grâce à la complicité du sergent surveillant Guichon. L'évasion, préméditée, a eu lieu entre neuf et dix heures du soir."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le crime d'Arcueil-Cachan",
    "summary": "L'enquête sur le meurtre de Mme Templier avance grâce à une lettre saisie. M. Cochefert démontre la préméditation du crime, contredisant les déclarations du suspect, Émile Choquart.",
    "paragraphs": [
      "La découverte d'une enveloppe de lettre dans les poches de Mme Templier, assassinée à Arcueil-Cachan, a permis à M. Cochefert d'établir la préméditation du crime, réduisant à néant les allégations d'Émile Choquart, le garçon boucher.",
      "Mme Avril, amie de la victime, a témoigné que le jeune garçon avait tenté de lui remettre une lettre de M. Lambourg la veille du crime, lettre qu'il a escamotée ensuite. M. Cochefert est certain que le meurtrier avait déjà l'intention d'assassiner Mme Templier ce jour-là."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "International",
    "title": "A Madagascar",
    "summary": "À Tananarive, le général Pennequin a inauguré l'Institut Pasteur, tandis que le général Galliéni célébrait la fête des enfants, un événement festif marquant la vie coloniale locale.",
    "paragraphs": [
      "Vendredi dernier a eu lieu l'inauguration solennelle de l'Institut Pasteur, près de Tananarive, par le général Pennequin. Le docteur Thiroux, directeur de l'Institut, a exposé le succès de l'établissement bactériologique créé par le général Galliéni.",
      "Aujourd'hui, la fête des enfants, instituée par le général Galliéni, a réuni vingt mille enfants environ, célébrée par des musiques exotiques et une distribution de jouets."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le cargo-boat Pauillac est-il perdu ?",
    "summary": "Le mystère demeure sur le sort du cargo Pauillac après la découverte d'épaves en mer. La Compagnie générale transatlantique tempère les inquiétudes, jugeant le navire trop chargé pour flotter.",
    "paragraphs": [
      "Le capitaine Fouché, du pétrolier Lion, a relaté avoir croisé de nombreuses épaves en mer entre Philadelphie et Alicante. M. Henry Deutsch a déclaré qu'il lui semblait possible que ce fût la coque du Pauillac.",
      "Au siège de la Compagnie générale transatlantique, M. Dal-Piaz ne suppose pas que l'épave puisse provenir du Pauillac, celui-ci étant trop lourdement chargé pour rester en surface. L'enquête reste ouverte sur le sort de l'équipage."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "Capture d'un convoi anglais",
    "summary": "Coup dur pour les Britanniques près de Thabanchu : les Boers ont capturé un important convoi comprenant sept pièces d'artillerie et deux cents voitures, forçant Lord Roberts à dépêcher des renforts.",
    "paragraphs": [
      "L'armée républicaine vient d'infliger aux troupes britanniques une surprise désagréable. Un convoi comprenant sept pièces d'artillerie et deux cents voitures a été capturé par les Boers à peu de distance de Thabanchu.",
      "Lord Roberts, dans son rapport, confirme que le colonel Broadwood a été attaqué sur deux points par l'ennemi. La division du général Colville a été envoyée sur les lieux pour prêter main-forte."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Le combat de Sanna's Post",
    "summary": "À Sanna's Post, la colonne Broadwood est tombée dans une embuscade meurtrière. Malgré une défense acharnée, les pertes sont lourdes, entraînant la perte de sept canons et l'envoi immédiat de secours.",
    "paragraphs": [
      "La colonne du colonel Broadwood a subi une embuscade des Boers. En se dirigeant vers Bloemfontein, la colonne est tombée dans un ravin dissimulant des tireurs ennemis. Le feu a été ouvert à bout portant sur les canons et les wagons, causant la capture de sept canons et de nombreux chevaux.",
      "Le lieutenant Chestermaster a permis au reste de la colonne de se former rapidement. Le colonel Broadwood estime ses pertes à plusieurs centaines d'hommes. En soutien, le général French a été dépêché immédiatement avec deux brigades de cavalerie pour porter assistance.",
      "Lord Roberts, depuis Bloemfontein, confirme les pertes lourdes au sein des batteries d'artillerie, avec plusieurs officiers tués ou blessés, et un effectif d'une batterie quasiment anéanti."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Réactions à Londres sur la situation en Afrique du Sud",
    "summary": "La presse londonienne s'alarme de la vulnérabilité des troupes britanniques et remet en question la maîtrise réelle du territoire, soulignant le défi persistant des forces orangistes pour Lord Roberts.",
    "paragraphs": [
      "Les journaux londoniens déplorent cet incident et l'échec de la protection du convoi. Ils s'interrogent sur la présence des Boers en nombre si important dans les environs de Bloemfontein.",
      "La presse souligne que les Anglais ne peuvent pas encore prétendre être maîtres de l'État libre et qu'il est évident que Lord Roberts devra laisser des forces considérables derrière lui pour surveiller les Orangistes."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "La version officielle des Boers",
    "summary": "Le gouvernement de Pretoria annonce la prise de six canons et de 200 wagons par ses forces près de Bloemfontein. Le président Kruger adresse ses condoléances à Lord Roberts pour la mort du général Joubert.",
    "paragraphs": [
      "Le gouvernement de Pretoria annonce officiellement la prise de six canons et de 200 wagons par les forces fédérales entre Thaba'Nchu et les points d'eau de Bloemfontein.",
      "Le président Kruger a fait parvenir un télégramme de condoléances à Lord Roberts suite au décès du général Joubert, exprimant sa vive tristesse devant la perte d'un officier aussi distingué."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Nouvelles de Kimberley et des fronts",
    "summary": "Les commandos Boers renforcent leurs positions autour de Kimberley par des bombardements constants. La réparation du pont ferroviaire de Norval's Pont s'avère une tâche complexe et de longue haleine.",
    "paragraphs": [
      "Un cavalier signale la présence d'une troupe de Boers campée à Paardeberg. Autour de Kimberley, les commandos Boers se montrent très actifs, bombardant les positions anglaises et renforçant continuellement leurs effectifs.",
      "À Norval's Pont, les réparations du pont de chemin de fer se poursuivent, mais leur achèvement nécessitera encore un temps considérable."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits divers",
    "title": "Les prisonniers Boers au Cap",
    "summary": "Une épidémie de fièvre typhoïde se déclare parmi les prisonniers Boers détenus au Cap. Des médecins inspecteurs sont dépêchés sur les navires pour évaluer l'urgence sanitaire et ordonner le débarquement.",
    "paragraphs": [
      "Une épidémie de fièvre typhoïde parmi les prisonniers Boers a suscité de vives préoccupations. Des médecins inspecteurs ont été dépêchés sur place afin d'examiner les conditions sanitaires sur les navires de transport et d'ordonner le débarquement des cas les plus graves."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Démission de M. Webster Davis aux États-Unis",
    "summary": "M. Webster Davis, sous-secrétaire d'État adjoint, démissionne après son voyage en Afrique du Sud. Il condamne la conduite britannique et affiche publiquement son soutien à la cause des Boers.",
    "paragraphs": [
      "M. Webster Davis, sous-secrétaire d'État adjoint à l'Intérieur américain, a remis sa démission après son retour d'Afrique du Sud. Il a critiqué publiquement la conduite des Anglais et pris ouvertement la défense des Boers, affirmant que sa conscience ne lui permettait plus de garder le silence sur les faits observés."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique intérieure",
    "title": "Séance du Sénat du 2 avril",
    "summary": "Sous la présidence de M. Fallières, le Sénat autorise la compétence des tribunaux mixtes d'Égypte en banqueroute. M. Millerand défend la persuasion comme méthode disciplinaire dans les écoles professionnelles.",
    "paragraphs": [
      "Sous la présidence de M. Fallières, le Sénat a autorisé le gouvernement à établir la compétence des tribunaux mixtes d'Égypte en matière de banqueroute.",
      "Le débat s'est porté sur le budget du Commerce et l'organisation des écoles d'enseignement professionnel. M. Millerand a défendu le régime de la persuasion plutôt que celui de la rigueur face aux actes d'indiscipline."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique intérieure",
    "title": "Chambre des députés : L'armée coloniale",
    "summary": "La Chambre des députés délibère sur le rattachement de l'armée coloniale au ministère de la Guerre, soutenu par le général de Galliffet afin d'assurer l'unité du commandement militaire et la rationalisation de la défense.",
    "paragraphs": [
      "La Chambre a entamé la discussion sur le projet de rattachement de l'armée coloniale au ministère de la Guerre. Le général de Galliffet a vigoureusement défendu l'unité de commandement, affirmant que la défense nationale exige une direction exclusive par son ministère.",
      "La commission de l'armée, par l'organe de M. Mézières, soutient également ce projet qui vise à rationaliser, sous une autorité unique, la défense de nos possessions coloniales."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Économie",
    "title": "La France en Chine",
    "summary": "Le courrier de Chine atteste la prospérité de la concession française de Shanghaï, dont le périmètre s'agrandit avec des projets d'infrastructures modernes, incluant l'installation de réseaux de tramways mécaniques.",
    "paragraphs": [
      "Le courrier de Chine fait état de la situation prospère de la concession française de Shanghaï, dont le périmètre a été récemment agrandi. D'importants travaux d'infrastructure, dont l'installation de tramways mécaniques, sont actuellement en projet."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits divers",
    "title": "Piraterie en Chine",
    "summary": "Un acte de piraterie a été commis aux environs de Chek-Neu-Ng-Boan : une chaloupe anglaise a été capturée, son pilote tué et le reste de l'équipage fait prisonnier par les assaillants.",
    "paragraphs": [
      "Une chaloupe anglaise a été capturée par des pirates aux environs de Chek-Neu-Ng-Boan. Au cours de l'agression, le pilote a été tué, et le reste de l'équipage a été fait prisonnier par les malfaiteurs."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Agriculture",
    "title": "Les Concours Internationaux",
    "summary": "Le ministère de l'Agriculture organisera en juin prochain, sur les bords de la Seine, des concours internationaux pour les classes bovines, ovines et porcines, incluant un examen minutieux des instruments aratoires.",
    "paragraphs": [
      "Les concours internationaux auront lieu sur les bords de la Seine. Organisés sous le haut patronage du ministre de l'Agriculture, ils se tiendront au cours du mois de juin prochain pour les catégories bovins, ovins et porcins.",
      "L'attribution des prix de la laine et de la section asine sera complétée par un jugement extrêmement minutieux des divers instruments aratoires employés par les agriculteurs des différentes générations."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Nouvelles Coloniales",
    "title": "La médaille coloniale pour les troupes sahariennes",
    "summary": "Un ancien Saharien sollicite l'octroi de la médaille coloniale pour les troupes basées au sud de Biskra, afin de récompenser les services rendus dans des conditions climatiques et géographiques particulièrement éprouvantes.",
    "paragraphs": [
      "À la suite de la prise d'In-Salah par la mission, un ancien Saharien nous écrit le 11 février. Il souligne que, malgré le décret du 1er décembre, les troupes situées au sud de la ligne Biskra-Ouargla n'ont toujours pas droit à la double campagne, contrairement aux soldats détachés.",
      "Il demande que le souvenir des détachements qui se sont succédé au Sahara depuis six ans soit récompensé par l'octroi de la médaille coloniale, un juste retour pour des services rendus dans l'ombre et sous un climat terrible.",
      "Nous publions cette lettre, conjointement à la nouvelle du combat d'In-Salah, en donnant ainsi suite à la requête légitime de nos valeureux soldats."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Visite du prince Koto-Hito-Kanin",
    "summary": "Le prince Koto-Hito-Kanin, héritier du trône du Japon, visite les établissements de Saint-Cloud et de Joinville. Sa mission inspecte également les centres industriels français pour d'importantes commandes d'État.",
    "paragraphs": [
      "Le prince Koto-Hito-Kanin, héritier présomptif du trône du Japon, accompagné de sa suite diplomatique, a visité les établissements de Saint-Cloud et de Joinville. Ils ont notamment parcouru les laboratoires du Service géographique de l'Armée.",
      "La mission japonaise partira dans quelques jours pour visiter les ports français et les centres industriels où d'importantes commandes du gouvernement de Tokio sont actuellement en voie d'exécution."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de meurtre rue de l'Hôtel-de-Ville",
    "summary": "Un jeune ouvrier maçon a été découvert grièvement blessé par balle au milieu de la nuit. Son agresseur, un charpentier identifié sous le nom de Bourgeois, est activement recherché après avoir pris la fuite.",
    "paragraphs": [
      "Vers une heure et demie du matin, des gardiens de la paix ont découvert un homme gisant sur le trottoir, blessé par une arme à feu. Il s'agit d'un ouvrier maçon nommé Georges, âgé de vingt ans.",
      "La victime a déclaré avoir été agressée par un ouvrier charpentier qu'il ne connaissait que sous le nom de Bourgeois, lequel lui a tiré une balle dans la poitrine avant de prendre la fuite."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de meurtre par jalousie",
    "summary": "À la suite d'une altercation passionnelle, Marie Jacquemin a asséné deux coups de couteau à Héloïse Lambert. La victime est hospitalisée et l'agresseuse a été arrêtée par M. Dupuis, commissaire de police.",
    "paragraphs": [
      "Une vive discussion motivée par la jalousie a éclaté entre deux jeunes femmes, Marie Jacquemin et Héloïse Lambert. Dans un accès de fureur, Marie a frappé Héloïse de deux coups de couteau en pleine poitrine.",
      "La victime a été transportée d'urgence à l'hôpital Bichat, tandis que l'auteure du forfait a été immédiatement arrêtée et mise à la disposition de M. Dupuis, commissaire de police."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le Roi des pickpockets",
    "summary": "Profitant de l'affluence en vue de l'Exposition universelle, un redoutable chef de bande spécialisé dans le vol à la tire a été appréhendé. John Bryan, récidiviste notoire, opérait depuis quinze ans.",
    "paragraphs": [
      "L'Exposition universelle attire à Paris une quantité de pickpockets internationaux. La police a arrêté hier un chef de bande notoire, John Bryan, âgé de quarante ans.",
      "Au moment précis où le train entrait en gare, il a été surpris en flagrant délit alors qu'il dérobait le portefeuille d'un négociant de Chantilly. Il a avoué pratiquer ses méfaits depuis quinze ans."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accidents et divers faits divers en banlieue",
    "summary": "Une série d'accidents et de drames familiaux endeuille la banlieue parisienne, touchant Suresnes, Levallois-Perret, Les Lilas et Pantin.",
    "paragraphs": [
      "À Suresnes, un enfant de neuf ans a été renversé par une voiture et transporté dans un état alarmant au domicile de ses parents.",
      "À Levallois-Perret, un enfant de six ans, en glissant, a fait une chute de deux étages et s'est fracturé le crâne.",
      "Aux Lilas, un charretier nommé Paul Rach a été écrasé sous les roues de son véhicule ; il a succombé à ses blessures à l'hôpital Tenon.",
      "À Pantin, un journalier, Gabriel Gergil, a frappé son père avec une bouteille au cours d'une dispute familiale et a été arrêté par les autorités."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Grève des teinturiers et typographes",
    "summary": "Le mouvement social persiste chez les teinturiers-dégraisseurs exigeant de meilleurs salaires. À Bruxelles, la grève des typographes décroît lentement, malgré la résistance toujours active de vingt ateliers.",
    "paragraphs": [
      "Les teinturiers-dégraisseurs ont formellement décidé de poursuivre leur mouvement de grève, réclamant avec insistance la suppression du travail à la tâche ainsi qu'une revalorisation générale de leurs salaires.",
      "De son côté, le conflit des typographes à Bruxelles semble toucher à sa fin ; toutefois, la grève se maintient encore avec opiniâtreté dans une vingtaine d'ateliers."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Programme des spectacles",
    "summary": "Le théâtre de la République propose une affiche classique avec « Antigone ». Le Concert-Colonne annonce des séances magistrales où brilleront les virtuoses Raoul Pugno et Eugène Ysaÿe.",
    "paragraphs": [
      "Le programme des théâtres annonce la représentation prochaine d'Antigone au théâtre de la République. Par ailleurs, les amateurs de musique s'apprêtent à applaudir les maîtres Raoul Pugno et Eugène Ysaÿe lors des prochains concerts aux Colonne."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Exposition Universelle",
    "title": "Préparatifs de l'Exposition et divertissements",
    "summary": "L'Exposition Universelle se structure : l'Eldorado apporte son concours, le Combat naval est fixé au 10 avril, et la célèbre Cour des Miracles s'apprête à rouvrir ses portes au public.",
    "paragraphs": [
      "L'Eldorado a officiellement assuré son concours à la grande soirée de l'Exposition. Des affiches spéciales, placardées sous peu, indiqueront le programme détaillé des festivités.",
      "L'ouverture du fameux Combat naval aura lieu le 10 avril prochain. On se souvient encore de l'immense succès rencontré par les trente cuirassés et torpilleurs l'an dernier.",
      "La Cour des Miracles, cette fidèle reconstitution du vieux Paris située avenue de Suffren, fera sa réouverture officielle le 10 avril prochain."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Concerts et divertissements",
    "title": "Les prouesses de Frégoli à l'Olympia",
    "summary": "Frégoli triomphe à l'Olympia. Dans sa nouvelle pièce, « Le Train de 9 h. 23 », l'artiste transformiste sidère le public par sa capacité à endosser, en un clin d'œil, une multitude de personnages différents.",
    "paragraphs": [
      "Frégoli connaît un succès grandissant à l'Olympia, où il ne cesse de chercher à renouveler son répertoire pour le plus grand plaisir des spectateurs.",
      "Dans sa nouvelle pièce, « Le Train de 9 h. 23 », il enchaîne les personnages avec une rapidité stupéfiante, incarnant tour à tour le chef de gare, la mère, la fille, l'amant et le mari.",
      "Le public demeure abasourdi par la performance de cet extraordinaire artiste qui, nul n'en doute, sera l'un des clous de la future Exposition."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Concerts et divertissements",
    "title": "Succès aux Folies-Bergère et à la Scala",
    "summary": "Le Tout-Paris se presse dans les salles : « La Flamenca » aux Folies-Bergère déchaîne l'enthousiasme, tandis qu'à la Scala, « Le Coup de Minuit » remporte un succès comique grâce au jeu de l'acteur Potin.",
    "paragraphs": [
      "Quatre cents membres du Toro-Club ont assisté à la représentation de « La Flamenca » aux Folies-Bergère, acclamant danseuses et toréadors dans une salle comble. La recette de cette soirée s'élève à 8 000 francs.",
      "La Scala connaît un vif succès avec « Le Coup de Minuit » de MM. Hugues Delorme et Francis Gally, pièce vivement applaudie grâce au jeu comique irrésistible de l'acteur Potin."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Faits divers",
    "title": "Incident à l'Eldorado",
    "summary": "Un mouvement de foule lors de la représentation de \"La Filocha\" à l'Eldorado a provoqué le bris de deux glaces sur la devanture de l'établissement, témoignant de l'engouement du public.",
    "paragraphs": [
      "Hier soir, en raison de l'affluence extraordinaire pour assister à la représentation de \"La Filocha\" à l'Eldorado, un mouvement de foule s'est produit à l'entrée. Sous la pression des spectateurs impatients, deux grandes glaces de la devanture ont été brisées, manifestant ainsi l'enthousiasme populaire pour ce succès théâtral."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Sports",
    "title": "Accident mortel en cyclisme",
    "summary": "Le jeune cycliste Fontanié a tragiquement péri à la côte de Chanteloup après avoir heurté un chariot en tentant de suivre un motocycle, soulignant les dangers de la vitesse imprudente.",
    "paragraphs": [
      "Un jeune cycliste de vingt-six ans, nommé Fontanié, a trouvé la mort à la côte de Chanteloup. Cherchant à rejoindre un motocycle lors d'une descente rapide, il a heurté avec violence un lourd chariot de fumier qui barrait la chaussée.",
      "Le choc fut d'une violence effroyable et le malheureux jeune homme a expiré quelques instants après l'impact. Cet accident tragique sert de triste leçon sur les dangers de la vitesse excessive pour les cyclistes sur les routes publiques."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Sports",
    "title": "Courses hippiques à Maisons-Laffitte et Vincennes",
    "summary": "Le programme hippique se poursuit à Maisons-Laffitte avec le prix Lagrange, tandis qu'à Vincennes, les chevaux Carmel et Anadyr ont brillé lors des récentes épreuves.",
    "paragraphs": [
      "Les courses de Maisons-Laffitte se poursuivent aujourd'hui avec plusieurs prix inscrits au programme, et notamment le très attendu prix Lagrange qui devrait attirer de nombreux turfistes.",
      "Par ailleurs, à Vincennes, lors de la réunion du lundi 2 avril, les chevaux « Carmel » et « Anadyr », qui étaient largement favoris, ont su confirmer leur forme en remportant leurs épreuves respectives avec une grande facilité."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Sports",
    "title": "Actualités du cyclisme",
    "summary": "Jacquelin s'illustre brillamment à Turin, Chapperon triomphe à Chanteloup, et l'U.V.F. annonce sa prochaine course de 100 kilomètres prévue le 8 avril sur la route de Montgeron-Melun.",
    "paragraphs": [
      "Le coureur Jacquelin vient de remporter avec brio l'épreuve de l'Internationale à Turin, confirmant ainsi son excellente condition physique.",
      "La traditionnelle course de côte de Chanteloup, organisée sous l'égide du Club des Sports, a été remportée par le cycliste Chapperon au terme d'une lutte acharnée.",
      "Enfin, l'Union Vélocipédique de France (U.V.F.) annonce que sa première grande épreuve de 100 kilomètres se tiendra le 8 avril prochain, sur l'itinéraire reliant Montgeron à Melun."
    ]
  }
];
