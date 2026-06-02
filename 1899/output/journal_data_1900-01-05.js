// Date: 1900-01-05
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-05 (Version Restaurée, 28 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique",
    "title": "La résolution du conflit entre Aix et Marseille",
    "summary": "M. Leygues met fin à la rivalité séculaire entre Aix et Marseille en attribuant à la première le prestige de la haute culture et à la seconde le pragmatisme d'une université commerciale.",
    "paragraphs": [
      "M. Leygues vient de résoudre, d'une manière aussi habile qu'originale, le grave conflit qui pendait depuis tant d'années entre Aix et Marseille. La grande cité phocéenne était jalouse de la petite ville provençale, Aix, qui possédait une université, tandis que Marseille ne comptait qu'un simple lycée.",
      "Le ministre a su éviter le dilemme de déposséder Aix de son université au profit de Marseille ou de créer deux organismes rivaux qui auraient fini par végéter. La solution adoptée consiste à ce que les organismes, au lieu de se contrarier, n'eussent de commun que le titre, mais fussent éminemment distincts et différents.",
      "Marseille aura désormais une université utilitaire et pratique, une université commerciale, tandis qu'Aix demeurera un centre de haute culture désintéressée.",
      "L'idée d'ériger en universités les établissements de culture commerciale est féconde et pourrait être appliquée à d'autres grandes villes de France comme Paris, Lyon, Bordeaux, Lille, Rouen, Le Havre ou Nantes."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Économie",
    "title": "Le développement des universités commerciales",
    "summary": "Face à la concurrence étrangère, M. Siegfried prône l'essor d'universités commerciales pratiques. Il suggère de lier les diplômes à une expérience réelle en milieu industriel pour assurer le rayonnement économique français.",
    "paragraphs": [
      "Les universités commerciales, pour mériter ce titre, devront s'organiser sur un plan et avec des méthodes permettant de lutter contre les institutions étrangères. Leur création est urgente, alors que sur un mouvement commercial du globe évalué à 275 milliards, l'exportation française ne compte que pour 3 milliards et demi.",
      "M. Siegfried préconise trois moyens principaux : attirer les étrangers pour qu'ils dépensent et achètent nos produits, organiser notre domaine colonial et savoir nous expatrier pour créer des affaires.",
      "Il existe des abus dans le système actuel où des jeunes gens obtiennent des diplômes de fin d'études commerciales uniquement pour bénéficier d'une exemption de service militaire, sans intention de devenir commerçants. L'État devrait exiger un stage de quatre ou cinq ans dans une exploitation industrielle ou commerciale.",
      "La fondation d'universités commerciales, avec des annexes comme les jardins coloniaux, pourrait favoriser l'émigration française et l'extension de notre mouvement d'exportation."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "La confession d'un heureux du siècle",
    "summary": "Un homme rongé par le remords confesse sa part de responsabilité dans le suicide d'Angèle, dont le décès fut maquillé en mort naturelle grâce à une complicité médicale.",
    "paragraphs": [
      "Le récit relate la tragédie de la mort d'Angèle, qui s'est donné la mort par poison, dissimulant son suicide sous l'apparence d'une mort naturelle grâce à la complicité du docteur Bernay.",
      "Le narrateur, qui se sent responsable de cette fin, confie ses remords et révèle l'existence d'une lettre retrouvée après le drame, dans laquelle Angèle explique son geste, son amour pour lui, et le secret de leur fille Suzanne qu'elle lui recommande.",
      "L'homme, accablé par ses souvenirs, vit dans une solitude absolue depuis ces événements tragiques."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Informations Politiques",
    "title": "Activités gouvernementales et défense",
    "summary": "Le gouvernement se mobilise sur le budget algérien, la défense des côtes et la rigueur fiscale. Le recouvrement des impôts auprès des congrégations religieuses progresse de manière constante.",
    "paragraphs": [
      "Le gouverneur général de l'Algérie partira samedi pour Paris afin de discuter du budget de 1900 et du budget spécial algérien, ainsi que pour traiter des questions de chemins de fer et de concessions domaniales.",
      "Les ministres des Affaires étrangères, de la Guerre, de la Marine et des Colonies se sont réunis avec le président du Conseil, M. Waldeck-Rousseau, pour élaborer le projet de loi sur la défense des côtes.",
      "Une statistique sur les impôts dus par les congrégations religieuses montre une progression constante des recouvrements, atteignant 1 027 858 francs pour les onze premiers mois de 1899."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Justice",
    "title": "L'arrêt de la Haute Cour",
    "summary": "La Haute Cour rend un verdict politique : les meneurs Déroulède, Buffet, de Lur-Saluces et Guérin sont condamnés au bannissement ou à la détention, tandis que les autres accusés sont libérés.",
    "paragraphs": [
      "L'arrêt de la Haute Cour est une décision politique suprême. Les fauteurs de troubles ont échoué à galvaniser l'opinion par la violence et le pays est resté indifférent à leurs agissements.",
      "Les accusés Godefroy, de Sabran-Pontevès, de Ramel, de Vaux, Barillier et Dubuc ont été acquittés.",
      "Les condamnations sont : dix ans de bannissement pour Paul Déroulède, Buffet et de Lur-Saluces (contumax), et dix ans de détention pour Jules Guérin.",
      "Lors de la lecture de l'arrêt, les accusés ont exprimé leur refus de la sentence, certains appelant à la résistance, tandis que le président a ordonné la libération immédiate des acquittés."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Social",
    "title": "Grève générale à Montceau-les-Mines",
    "summary": "La grève est devenue totale à Montceau-les-Mines, où les puits sont à l'arrêt complet. Tandis que le calme demeure, les ouvriers attendent désormais la réponse de la direction à leur ultimatum.",
    "paragraphs": [
      "La grève est devenue générale à Montceau-les-Mines ; tous les puits sont abandonnés et les feux sont éteints.",
      "M. le sous-préfet a entamé des négociations avec la direction des mines et le syndicat. Les ouvriers attendent la réponse à leur ultimatum, tout en restant dans le plus grand calme."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Extérieur",
    "title": "Opérations militaires à Kouang-Tchéou-Wan",
    "summary": "Suite à l'assassinat des enseignes Koun et Gourlaouen, les forces françaises ont mené des opérations de pacification dans la région. L'amiral Courrejolles a officialisé la délimitation territoriale.",
    "paragraphs": [
      "L'assassinat des enseignes Koun et Gourlaouen a été suivi d'opérations militaires françaises dans la région entourant le fort de Man-Tao.",
      "Après plusieurs engagements contre les troupes chinoises, les forces françaises, appuyées par les canonnières Descartes, Comète et Surprise, ont mené une reconnaissance visant à sécuriser le territoire.",
      "L'amiral Courrejolles a officiellement arrêté la délimitation du territoire le 25 novembre."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Justice",
    "title": "La fin de l'audience de la Haute Cour",
    "summary": "L'audience de la Haute Cour s'est achevée dans une vive agitation. MM. Barillier, de Sabran-Pontevès, Dubuc, de Ramel, de Vaux et Godefroy ont retrouvé la liberté et leurs familles sous une pluie battante.",
    "paragraphs": [
      "L'audience publique fut suspendue après que les acquittés ont été libérés, provoquant une vive agitation dans la salle. Les accusés, très émus, ont échangé des poignées de mains sous le regard attentif du public.",
      "Conduits au quartier cellulaire pour la levée d'écrou, les six acquittés — MM. Barillier, de Sabran-Pontevès, Dubuc, de Ramel, de Vaux et Godefroy — ont quitté le Palais du Luxembourg tour à tour, retrouvant leurs familles sous la pluie, malgré des tentatives de manifestations réprimées par les agents."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Justice",
    "title": "Condamnations par la Haute Cour en Chambre du Conseil",
    "summary": "La Haute Cour a rendu son verdict : Buffet, Déroulède et de Lur-Saluces sont condamnés à dix ans de bannissement, tandis que Jules Guérin est condamné à dix ans de détention dans une forteresse.",
    "paragraphs": [
      "La Haute Cour a délibéré en chambre du conseil sur le sort des accusés Buffet, Déroulède, de Lur-Saluces et Jules Guérin.",
      "M. Buffet est condamné à dix ans de bannissement. M. Déroulède est également condamné à dix ans de bannissement, ses condamnations antérieures se confondant avec celle-ci. M. de Lur-Saluces écope de dix ans de bannissement.",
      "M. Jules Guérin est condamné à dix ans de détention dans une forteresse du territoire continental de la République."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Justice",
    "title": "Lecture des arrêts et tumulte au Palais",
    "summary": "Le président Fallières a prononcé les peines de bannissement et de détention. À l'annonce des arrêts, des cris hostiles ont éclaté dans les tribunes, contraignant les autorités à faire évacuer la salle.",
    "paragraphs": [
      "À cinq heures, le président Fallières a donné lecture des arrêts condamnant Buffet, Déroulède et Guérin, ainsi que celui concernant de Lur-Saluces, en rappelant les motifs basés sur les articles du Code pénal relatifs au complot contre le gouvernement.",
      "À la fin de la lecture, des cris de « Vive l'armée ! Vive Déroulède ! » ont éclaté dans les tribunes, forçant les gardes républicains à évacuer la salle dans une atmosphère de grande confusion."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Agitations et manifestations aux abords du Luxembourg",
    "summary": "Dès quatre heures, une foule imposante a manifesté aux cris de « Vive l'armée ! » devant le palais du Luxembourg, nécessitant l'intervention ferme des forces de l'ordre face aux bousculades rue de Vaugirard.",
    "paragraphs": [
      "Dès quatre heures de l'après-midi, une foule importante s'est massée aux abords du palais du Luxembourg. Des manifestations aux cris répétés de « Vive l'armée ! » ont éclaté, nécessitant l'intervention immédiate des forces de l'ordre pour ramener le calme dans les avenues avoisinantes.",
      "Plusieurs bousculades et empoignades ont été signalées lors de la sortie de députés nationalistes, provoquant une intervention vigoureuse des agents de police pour disperser les manifestants attroupés rue de Vaugirard."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Justice",
    "title": "Le transfèrement des condamnés vers la prison de la Santé",
    "summary": "M. Déroulède, M. Buffet et M. Jules Guérin ont été conduits à la prison de la Santé sous une escorte policière rigoureuse. Malgré une pluie battante, une foule de partisans et de curieux a attendu leur arrivée.",
    "paragraphs": [
      "Après l'évacuation du public du palais de justice, M. Déroulède a été conduit rapidement vers la prison de la Santé dans un landau, suivi peu après par M. Buffet dans une voiture cellulaire, et enfin par M. Jules Guérin dans un fiacre, sous bonne escorte.",
      "Aux abords de la prison de la Santé, une foule composée de journalistes et de partisans des condamnés a attendu toute la soirée, bravant la pluie battante pour observer l'arrivée des véhicules pénitentiaires."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Mouvements et circulaires du ministère de la Guerre",
    "summary": "Le généralissime Jamont inspectera prochainement le littoral pour renforcer la défense des côtes. Parallèlement, le général de Galliffet interdit la diffusion de brochures factieuses au sein des casernes.",
    "paragraphs": [
      "Le généralissime Jamont doit quitter Paris incessamment afin d'inspecter le littoral et d'organiser la défense des côtes, une mission capitale qui mobilise les officiers spécialistes de l'artillerie de côte.",
      "Le ministre de la Guerre, le général de Galliffet, a adressé une circulaire formelle aux commandants de corps d'armée. Il y interdit expressément l'introduction de journaux et de brochures attaquant les institutions nationales dans les casernes, afin de maintenir la discipline."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Social",
    "title": "Grèves dans le bassin minier de la Loire",
    "summary": "En dépit de la signature d'une convention entre exploitants et ouvriers, représentés par Jean Jaurès, des troubles et des tentatives d'incendie persistent au sein du bassin minier de la Loire.",
    "paragraphs": [
      "La grève des mineurs de la Loire se poursuit avec une acuité marquée à Saint-Étienne, Firminy et dans les communes limitrophes. Une convention a pourtant été signée entre les représentants des exploitants, menés par M. Gruner, et les délégués ouvriers, dont Jean Jaurès, pour mettre fin au conflit.",
      "Malgré ces accords, des désordres ont persisté, incluant des tentatives d'incendies volontaires et des bousculades, obligeant la police et la gendarmerie à maintenir un dispositif de sécurité renforcé sur les sites miniers."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Faits divers et informations diverses",
    "summary": "L'Académie française accueillera M. Paul Deschanel le 1er février. Par ailleurs, les conditions météorologiques demeurent rudes en Europe tandis que M. Crispi doit subir une intervention chirurgicale oculaire.",
    "paragraphs": [
      "L'Académie française a officiellement fixé la réception de M. Paul Deschanel au 1er février prochain. Dans le même temps, le nouveau yacht de la reine Victoria a rencontré des difficultés techniques lors de sa mise à flot à Londres.",
      "M. Crispi devra prochainement subir une opération de la cataracte. Sur le plan météorologique, la température demeure froide et brumeuse, accompagnée de pluies fréquentes sur l'ensemble de l'Europe occidentale."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Social",
    "title": "Les troubles sociaux à Saint-Étienne",
    "summary": "À Saint-Étienne, la tension sociale retombe après une journée de heurts. Malgré vingt-deux arrestations et l'état préoccupant d'un gendarme blessé, la signature d'un compromis laisse espérer un retour au calme.",
    "paragraphs": [
      "À partir de huit heures et demie, les boutiques et les cafés avoisinant la place Marengo ont fermé leurs portes.",
      "De çà, de là, on signale quelques incidents sans grande gravité. Place de l'Hôtel-de-Ville, deux pelotons de gendarmerie et de dragons ont pris position, mais les curieux sont devenus rares. À partir de dix heures et demie, l'effervescence paraît se calmer.",
      "Les événements d'aujourd'hui ont une analogie frappante avec les troubles du quartier Latin.",
      "Dans la soirée, le projet de compromis a été signé par la compagnie et le comité fédéral.",
      "Saint-Étienne, 11h50 soir : Vingt-deux arrestations ont été opérées. Dans ce nombre, il n'y a que trois passementiers ; les autres individus sont, pour la plupart, des gens sans profession.",
      "L'agent Varenne est, dit-on, plus grièvement blessé qu'on ne le croyait tout d'abord, et son état inspire des inquiétudes. Son sabre lui avait été arraché pendant la bagarre et il a reçu dans le dos sept coups de pointe, dont un a perforé un poumon.",
      "La pluie commence à tomber vers onze heures et demie, dissipant les derniers curieux. Quelques patrouilles de dragons circulent en ville, mais l'ordre est donné de les faire rentrer à la caserne. Il est probable que le préfet prendra, demain matin, un arrêté interdisant les rassemblements et les défilés, ainsi que l'usage, sur la voie publique, de tambours, clairons ou trompettes."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Guerre",
    "title": "La guerre au Transvaal",
    "summary": "La situation militaire au Transvaal demeure indécise. Malgré les communiqués officiels, les Boërs ont repris leurs positions autour de Colesberg, infligeant des pertes aux troupes britanniques.",
    "paragraphs": [
      "On constate de jour en jour que les prétendues victoires des Anglais dans la guerre sud-africaine précèdent de fort peu les échecs auxquels le public n'aurait pu s'attendre après avoir lu les dépêches du War Office.",
      "Voici en effet que de nouvelles informations démentent l'occupation de Colesberg annoncée ces jours derniers par le gouvernement britannique. Les forces anglaises sont aux prises avec l'armée républicaine autour de Colesberg, mais la ville n'est pas encore tombée au pouvoir du général French. Il se peut que l'issue de la bataille soit favorable aux Anglais, mais on conviendra que le bulletin de victoire publié par le War Office était au moins prématuré.",
      "Signalons un bizarre incident qui s'est produit sous les murs de la ville : un train chargé de provisions destinées aux troupes britanniques s'est mis en marche dans la direction des Boërs. Il y a eu trahison, disent les dépêches anglaises.",
      "Rensburg, 3 janvier : Les Boërs sont presque entourés à Colesberg, mais ils maintiennent encore les troupes anglaises en dehors de la ville. Le combat est incessant sur les collines, l'artillerie anglaise oblige les Boërs à se tenir soigneusement dissimulés.",
      "Londres, 4 janvier (Rensburg, 2 janvier) : Ce matin, la situation s'est modifiée d'une façon inattendue à Colesberg. On a découvert que les Boërs étaient revenus pendant la nuit et avaient occupé de nouveau leurs positions, d'où le général French les avait chassés la veille. Leurs canons à tir rapide, que l'on croyait avoir mis hors d'état, ouvrirent le feu sur notre cavalerie. Nos pertes d'aujourd'hui et d'hier s'élèvent à six tués et vingt blessés."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une affaire de bonbons empoisonnés",
    "summary": "Une habitante de la rue du Quatre-Septembre a découvert avec effroi que ses étrennes contenaient des chocolats fourrés d'une substance verdâtre suspecte. Une enquête policière est ouverte.",
    "paragraphs": [
      "M. Péchard, commissaire de police du quartier Gaillon, s'occupe en ce moment d'une affaire assez mystérieuse. À l'occasion des étrennes, Mme S., demeurant rue du Quatre-Septembre, recevait plusieurs boîtes de bonbons.",
      "Avant-hier, elle en ouvrit une, prit un chocolat et se mit à le croquer. Mais comme le bonbon lui parut d'une amertume atroce, elle le rejeta. Examinant ensuite la boîte, elle constata que tous les bonbons avaient été fendus et qu'on avait placé au milieu de chacun d'eux une substance d'une couleur verdâtre. Mme S. s'est empressée de porter la boîte au commissariat de police."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Violences entre voisins",
    "summary": "La violence a éclaté dans le quartier du Marais. Deux rixes distinctes, dues à des querelles de voisinage, ont mené à des agressions sanglantes à l'arme blanche et à coups de pied.",
    "paragraphs": [
      "Le ménage Ladauvet et le ménage Trauberg, domiciliés rue du Roi-de-Sicile, vivaient en fort mauvaise intelligence à cause de racontars de ménagères. Avant-hier soir, vers dix heures, M. Félix Ladauvet, colporteur, réintégrait son domicile et trouva son voisin, Charles Trauberg, qui injuriait sa femme.",
      "Il intervint et une mêlée générale s'en suivit, au cours de laquelle Ladauvet fut frappé de plusieurs coups de couteau au cou et au visage. Le blessé a été conduit à l'Hôtel-Dieu et l'agresseur au commissariat.",
      "À la même heure, dans un immeuble de la rue de l'Hôtel-de-Ville, Julien Gaumalle et Marcel Gaverin en vinrent aux mains. Gaverin terrassa son ennemi et lui porta dans l'abdomen et la poitrine des coups de pied d'une telle violence qu'il le mit en un état pitoyable."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Cambrioleurs arrêtés rue Charlot",
    "summary": "Cinq malfaiteurs ont été appréhendés en pleine nuit rue Charlot alors qu'ils tentaient de cambrioler un dépôt de charbon. La vigilance de riverains et l'intervention armée des agents ont permis leur capture.",
    "paragraphs": [
      "Des passants ont alerté des gardiens de la paix après avoir vu le dépôt de charbons des Mines du Nord, rue Charlot, ouvert à deux heures et demie du matin. Cinq individus sont sortis du magasin et ont pris la fuite.",
      "Des cochers de la rue des Quatre-Fils ont barré la route aux cambrioleurs, qui furent arrêtés après que des agents eurent tiré des coups de revolver en l'air. Les individus étaient porteurs de fausses clefs et de revolvers. Ils ont été conduits au dépôt."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Désespoir et tentatives de suicide",
    "summary": "Une série de drames parisiens : un soldat sauvé d'une noyade volontaire, une femme secourue après une tentative d'asphyxie au gaz, et le triste décès d'une autre dans les eaux du canal Saint-Martin.",
    "paragraphs": [
      "Un jeune soldat, Eugène Tissier, a tenté de se jeter dans la Seine depuis le pont d’Arcole par désespoir amoureux, après avoir aperçu son ancienne compagne. Il a été promptement secouru par des mariniers et a pu regagner la berge.",
      "La nuit dernière, Mme Madeleine Thomas a tenté de s’asphyxier au gaz dans sa chambre de la rue de l’Arbre-Sec. Alertés, ses voisins ont pu la sauver à temps, et elle fut transportée à l’Hôtel-Dieu.",
      "Mme Henriette Salomon, à la suite d’une discussion animée avec son époux, s’est jetée dans le canal Saint-Martin. Son corps a été retiré hier matin au quai Jemmapes."
    ]
  },
  {
    "id": 22,
    "page": 4,
    "category": "Statistique",
    "title": "Statistique Hebdomadaire de la Ville de Paris",
    "summary": "Le bilan sanitaire de la 52e semaine de 1899 à Paris montre une hausse de la mortalité, portée par les maladies respiratoires et la phtisie, dans un contexte de natalité vigoureuse.",
    "paragraphs": [
      "Le service de la statistique municipale a comptabilisé, durant la 52e semaine de 1899, un nombre total de décès en hausse par rapport à la moyenne ordinaire des semaines de l’année.",
      "La fièvre typhoïde n’a causé que 19 décès. Les autres maladies zymotiques demeurent rares : la rougeole a provoqué 7 décès, la coqueluche 1 seul, et la diphtérie 5. Aucun décès n’a été déploré pour la scarlatine ou la variole.",
      "La diarrhée infantile a entraîné 28 décès. Les maladies inflammatoires des organes de la respiration ont causé 97 décès au lieu des 66 habituels pour la saison. Ce chiffre se décompose ainsi : 16 décès par bronchite chronique, 52 par broncho-pneumonie et 29 par pneumonie.",
      "Les affections de l’appareil respiratoire ont provoqué 35 décès, dont 10 dus à la congestion pulmonaire et 10 à la grippe.",
      "La phtisie a causé 202 décès, la méningite tuberculeuse 27, la méningite simple 15, les autres tuberculoses 14, l’apoplexie et la paralysie 81, les maladies du cœur 83, le cancer 51, et 14 vieillards sont morts de débilité sénile.",
      "On dénombre 11 suicides et 17 autres morts violentes. Par ailleurs, 118 mariages ont été célébrés et 1 369 naissances enregistrées (750 garçons et 619 filles)."
    ]
  },
  {
    "id": 23,
    "page": 4,
    "category": "Faits Divers",
    "title": "Retour du régiment (Témoignage)",
    "summary": "Témoignage de Mme Desnoix, habitant rue de Sèvres, sur l'efficacité du Goudron Guyot pour soigner une toux persistante contractée par son fils lors de son service militaire.",
    "paragraphs": [
      "Marie Desnoix, demeurant rue de Sèvres, écrit au pharmacien Guyot afin de solliciter un remède pour son fils, qui souffre d'une toux opiniâtre depuis son retour du service militaire, séquelle d’un rhume négligé.",
      "Mme Desnoix confirme, par une seconde lettre datée de quelques semaines plus tard, que l’usage du Goudron Guyot a permis à son fils de guérir complètement de cette affection et de recouvrer ses forces."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Tragédies de l'Amour : La Mort de Michelle",
    "summary": "Dans ce récit dramatique, une femme confesse son crime : mue par la vengeance, elle a poignardé Girodias dans son bureau, mettant fin à ses jours après avoir avoué ses actes.",
    "paragraphs": [
      "Elle relate les circonstances de son forfait, expliquant comment elle s’est dissimulée dans le cabinet noir de la demeure de Girodias, mue par un instinct de vengeance irrésistible.",
      "Elle décrit la venue du duc de Villefort, venu tenter de régler des créances, et comment elle a fini par poignarder Girodias, alors assis à son bureau, avant de livrer aux flammes les documents compromettants.",
      "Les témoins écoutent cette confession avec horreur et angoisse. Elle implore le pardon avant de sombrer dans une agonie léthargique, s’éteignant le lendemain au coucher du soleil après avoir signé sa déposition."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "Mouvements à la direction de l'Opéra et à la Comédie-Française, tandis que les scènes parisiennes renouvellent leur affiche avec de nouveaux spectacles à l'Athénée et au théâtre de la République.",
    "paragraphs": [
      "M. Gailhard assumera seul la direction de l’Opéra. L’Odéon présentera « Les Érinnyes » de Massenet sous la direction de M. Hillemacher. Mlle Frémaux quitte la Comédie-Française.",
      "M. Paul Clerget fait sa rentrée à l’Athénée dans « L’Homme à l’oreille coupée ». Au théâtre de la République, on joue la dernière représentation de « Roger la Honte »."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Concerts et Divertissements",
    "title": "Programme des spectacles",
    "summary": "Aux Folies-Bergère, débuts des Kauffmann avec Otero. L'Eldorado programme une lutte entre Fengler et Aimable de la Calmette, tandis que le Moulin-Rouge annonce sa grande redoute : « La Fête des Rois ».",
    "paragraphs": [
      "Les Kauffmann font leurs débuts aux Folies-Bergère aux côtés de la célèbre Otero. À l'Eldorado, une lutte mémorable se tiendra entre Fengler et Aimable de la Calmette.",
      "Le cirque Medrano présente les Meteor's ainsi que la troupe Chiesa. Par ailleurs, le Moulin-Rouge active les préparatifs pour sa grande redoute annuelle : « La Fête des Rois »."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Sports",
    "title": "Actualités sportives",
    "summary": "M. Paul Chauchard offre une nouvelle coupe à Nice. L'Union Vélocipédique de France multiplie les conférences militaires, tandis que le régime des champions cyclistes Miller et Waller est dévoilé.",
    "paragraphs": [
      "Une nouvelle coupe de Nice vient d'être offerte à la société par M. Paul Chauchard. Parallèlement, l'Union Vélocipédique de France organise une série de conférences militaires consacrées à la topographie.",
      "La presse détaille le menu des champions cyclistes Miller et Waller durant leur course de six jours, un régime composé en grande partie de lait, d'œufs et de riz pour soutenir l'effort physique."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Courrier Orphéonique",
    "title": "Fêtes musicales et concours",
    "summary": "Le comité de Saint-Sauveur-Saint-Maurice prépare ses fêtes orphéoniques pour Pâques. L'Exposition universelle de 1900 annonce d'importants concours internationaux pour chorales et instrumentistes.",
    "paragraphs": [
      "Le comité des fêtes de Saint-Sauveur-Saint-Maurice s'active à l'organisation des fêtes orphéoniques prévues pour les prochaines fêtes de Pâques. En outre, l'Exposition universelle de 1900 confirme la tenue de nombreux concours internationaux destinés aux chorales ainsi qu'aux instrumentistes."
    ]
  }
];
