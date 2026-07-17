// Date: 1901-02-05
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-02-05 (Version Restaurée, 35 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "La femme et les lois",
    "summary": "La loi du 31 décembre sur les conditions de travail en magasin, imposant des sièges aux employées, marque une étape sociale majeure pour l'émancipation des femmes face au Code napoléonien.",
    "paragraphs": [
      "Promulguée le 31 décembre, la loi qui fixe les conditions du travail des femmes employées dans les magasins est entrée en vigueur le 1er de ce mois. On sait que cette loi interdit l'obligation de la station debout sans repos durant les heures de travail et prescrit aux chefs ou aux directeurs d'établissements commerciaux de disposer des sièges à l'usage des demoiselles de magasin.",
      "C'est un curieux chapitre de l'histoire de l'industrialisation de la femme, ce grand fait social du XIXe siècle, que nous révèle l'application de ces dispositions tutélaires inspirées de celles que prenaient diverses assemblées législatives d'Allemagne, des États-Unis et d'Angleterre.",
      "Mais de dures nécessités ont changé ces mœurs, et il se trouve aujourd'hui que le salaire gagné par la femme est de plus en plus utile à la famille. Elle a réclamé le droit au travail comme on réclame le droit à la vie.",
      "Ainsi s'améliore, peu à peu, par de légères secousses imprimées à l'état social, le sort de la femme. C'était une victime de l'ancien régime et du Code napoléonien. Elle s'est déjà singulièrement affranchie des chaînes qui l'écrasaient. Elle est plus respectée, elle n'est plus la chose de l'homme, elle est son associée, son alliée."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Miss Tempête",
    "summary": "Le peintre Michel Bertin accourt pour porter secours à Mme de Sartys, trouvée effondrée après la lecture d'une lettre remise par un inconnu à la sortie du train.",
    "paragraphs": [
      "Presque aussitôt on voyait accourir le peintre Michel Bertin qui travaillait à quelques pas. « Voilà, voilà, qu'y a-t-il donc ? Ah nom d'un... mais c'est madame de Sartys ! »",
      "Et, oubliant sa timidité, cet homme à la barbe de fleuve saisissait à pleins bras cette pauvre créature écroulée, cette malheureuse qui râlait sourdement. « Je ne sais pas. C'est un monsieur qui m'a donné cent sous pour apporter une lettre à cette dame. Je l'ai rencontrée en descendant du train. Elle a lu la lettre. Ça l'a mise dans cet état. »"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Onze blessés : Explosion sur le boulevard des Filles-du-Calvaire",
    "summary": "Une violente explosion d'une conduite à air comprimé boulevard des Filles-du-Calvaire a blessé onze personnes, dont trois ouvriers, alors que des travaux de réparation étaient en cours.",
    "paragraphs": [
      "Un accident fort grave, qui a fait plusieurs victimes, s'est produit dans la soirée d'hier sur le boulevard des Filles-du-Calvaire, en face du Cirque d'Hiver. Une conduite à air comprimé a fait subitement explosion alors que des ouvriers étaient occupés à y effectuer une réparation.",
      "Soudain, une sorte de détonation sourde se produisit, suivie d'une commotion violente qui projeta plusieurs curieux à terre, tandis qu'un corps sortant par l'ouverture du regard venait s'abattre sur le sol et que le bitume était enlevé tout autour de l'orifice et projeté de tous côtés.",
      "Louis Bahuaud, qui avait été brûlé au visage et sur diverses parties du corps, a été transporté à l'hôpital Saint-Louis. Son infortuné camarade, Marius Suchet, projeté jusqu'à l'orifice du regard, est également grièvement blessé. Outre ces trois ouvriers, huit curieux ont été victimes de l'explosion."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "International",
    "title": "Funérailles de la Reine Victoria",
    "summary": "Le roi Édouard VII a conduit la cérémonie d'inhumation de la reine Victoria au mausolée de Frogmore, un hommage solennel rythmé par des salves de canon prolongées.",
    "paragraphs": [
      "Le cercueil de la reine repose désormais dans le mausolée de Frogmore, à côté de celui du prince consort. Les salves de deuil ont commencé à trois heures, au moment de l'arrivée du cercueil, et les coups de canon ont été tirés de minute en minute pendant toute la cérémonie.",
      "Le cortège a passé par la porte Normande, la porte de George IV, entre les tours d'York et de Lancastre, puis a suivi la longue allée qui conduit aux portes de Frogmore, et de là au mausolée. Le roi Édouard VII conduisait son petit-fils par la main, suivi de l'empereur d'Allemagne, du roi de Portugal et d'autres princes."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Économie",
    "title": "Londres : La liste civile d'Édouard VII",
    "summary": "La Chambre des communes s'apprête à réviser la liste civile du roi Édouard VII pour permettre au souverain d'assurer les dépenses protocolaires accrues liées à sa nouvelle charge.",
    "paragraphs": [
      "L'une des premières affaires dont la Chambre des communes aura à s'occuper dans sa prochaine session sera la révision de la liste civile. On pense que cette liste sera augmentée, car le roi sera obligé de donner plus de fêtes et de faire plus de dépenses que depuis la mort du prince Albert."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Social",
    "title": "Grève du Métropolitain",
    "summary": "La grève du personnel du Métropolitain touche à sa fin. La direction a accédé aux revendications des ouvriers, actant leur réintégration totale dans les quarante-huit heures suivant l'accord conclu.",
    "paragraphs": [
      "Les incidents qui ont marqué ou suivi la grève du personnel du Métropolitain viennent de recevoir une solution définitive. La direction a accédé aux revendications des grévistes et le personnel sera réintégré sous quarante-huit heures, conformément aux conclusions de l'accord."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un fou parricide à Limoges",
    "summary": "Un drame familial sanglant a frappé Limoges. Un jeune homme de vingt ans, en proie à des troubles mentaux, a assassiné sa mère au cours d'une crise de folie furieuse avant d'être interpellé.",
    "paragraphs": [
      "Le nommé Teilhannas, âgé de vingt ans, qui était depuis quelque temps atteint de troubles cérébraux, a, ce matin, au cours d'une crise de folie furieuse, commis un crime horrible. Il a poignardé sa mère et menacé les voisins avec son couteau avant d'être maîtrisé par la police."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Quatre hommes noyés à Aurélhan",
    "summary": "Une terrible tragédie s'est déroulée sur l'étang d'Aurélhan. Quatre ouvriers des mines métallurgiques ont trouvé la mort après le chavirage de leur embarcation, surprise par la tempête.",
    "paragraphs": [
      "Une épouvantable noyade s'est produite avant-hier, vers cinq heures du soir, sur l'étang d'Aurélhan. Quatre ouvriers, employés aux mines métallurgiques de la fonderie Oberthal, ont péri alors que leur barque a été chavirée par la tempête."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Économie",
    "title": "Suicide d'un banquier",
    "summary": "Le monde financier est sous le choc après le suicide de M. Tavernier. Alors que sa caisse venait de fermer, le banquier a mis fin à ses jours par arme à feu, scellant le destin irrémédiable de son établissement.",
    "paragraphs": [
      "À neuf heures et demie, la caisse fut fermée, et à ce moment même on entendait une détonation dans le cabinet du banquier. M. Tavernier s'était fait sauter la cervelle. Cet acte de désespoir change en irrémédiable désastre ce qui, avec du sang-froid, aurait pu, sinon se réparer, du moins se temporiser."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique",
    "title": "Séance du Sénat du lundi 4 février",
    "summary": "Le Sénat a poursuivi l'examen du budget. Après l'adoption des chapitres de l'Intérieur, des services pénitentiaires et des cultes, la question des secours aux réservistes est renvoyée à la loi de finances.",
    "paragraphs": [
      "Le Sénat reprend la discussion du budget. Il examine le budget du ministère de l'Intérieur. Les vingt-cinq premiers chapitres sont adoptés sans modification.",
      "M. Palteau appelle l'attention du gouvernement sur la répartition du crédit de 500 000 francs destiné aux secours aux familles des réservistes et territoriaux.",
      "Le Sénat décide que la discussion de cette question interviendra lors de l'examen de la loi de finances.",
      "Les budgets des services pénitentiaires et des cultes sont adoptés sans débat."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "Budget de la Guerre au Sénat",
    "summary": "Le Sénat examine le budget de la Guerre. Le général André défend l'unité morale de l'armée et récuse les attaques, tandis que des élus débattent des questions de discipline et d'espionnage au sein de l'institution.",
    "paragraphs": [
      "Le Sénat a entamé la discussion du budget de la Guerre. M. de Blois a formulé diverses récriminations, dénonçant avec vigueur les attaques dirigées contre l'armée ainsi que contre le corps expéditionnaire de Chine.",
      "M. de Blois a ensuite interrogé le ministre sur les déplacements d'officiers effectués sans motif apparent et sur les propos tenus par ce dernier lors de son récent passage à Beaune.",
      "Le général André, ministre de la Guerre, a répondu qu'il agissait avec la pleine confiance du Parlement, réfutant par la même occasion les critiques émanant des journaux étrangers.",
      "Le ministre a vivement défendu l'unité morale de l'armée, déclarant qu'il ne faisait aucune distinction entre les fils de boulangers et les descendants des croisés, tout en admettant toutefois que des divisions avaient pu exister par le passé.",
      "Le Sénat a finalement adopté une motion approuvant les déclarations du ministre, en dépit des vives protestations de M. de Lamarzelle concernant les accusations d'espionnage au sein de l'institution militaire.",
      "La séance a été levée à six heures trente du soir."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "Union Républicaine du Sénat",
    "summary": "Le groupe de l'Union républicaine au Sénat installe son bureau. M. Poirrier réaffirme l'attachement à la tradition politique de Gambetta et souligne les priorités en matière d'enseignement et d'associations.",
    "paragraphs": [
      "Le groupe de l'Union républicaine du Sénat a procédé à l'installation solennelle de son bureau. M. Poirrier, sénateur de la Seine, a déclaré à cette occasion que le groupe ferait prévaloir la tradition politique de Gambetta.",
      "M. Poirrier a défini les grandes lignes du programme républicain, insistant sur la question cruciale de l'enseignement et sur la nécessité de résoudre le problème des associations, tout en exigeant un concours loyal de la part des fonctionnaires de l'État."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Économie",
    "title": "Rapport sur les Halles centrales",
    "summary": "Le Journal officiel publie le rapport annuel des Halles centrales sous la présidence de M. Waldeck-Rousseau, notant une hausse des arrivages et la création d'une médaille pour les ouvriers méritants.",
    "paragraphs": [
      "Le Journal officiel a publié le rapport annuel de la commission supérieure des Halles, laquelle est placée sous la présidence de M. Waldeck-Rousseau.",
      "Le rapport souligne une progression significative des arrivages de denrées au cours de l'année 1899, avec une augmentation de 8 642 731 kilogrammes par rapport à l'année précédente.",
      "La commission exprime sa vive satisfaction quant à la création d'une médaille d'honneur destinée aux ouvriers des halles justifiant de plus de trente ans de service."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Séance de la Chambre des députés",
    "summary": "La Chambre des députés débat de la loi sur le contrat d'association et des projets sur les accidents du travail. Les discussions portent sur la capacité juridique, le droit de propriété et les règlements de tir.",
    "paragraphs": [
      "Lors de la séance du lundi 4 février, la Chambre s'est consacrée à la loi sur le contrat d'association. M. Groussier a fait voter un paragraphe dispensant certaines associations de la formalité de la déclaration.",
      "La séance du mardi, présidée par M. Paul Deschanel, a vu l'adoption de projets de loi relatifs aux exercices de tir ainsi que plusieurs propositions concernant la réglementation des accidents du travail.",
      "La discussion sur le contrat d'association s'est poursuivie par des débats sur la capacité juridique et la définition des objets illicites, incluant une intervention remarquée du président du Conseil sur le droit de propriété."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame passionnel à Orléans : Procès de Louis Robert et Charlotte Salin",
    "summary": "Ouverture du procès aux assises du Loiret pour un double empoisonnement perpétré par Louis Robert et Charlotte Salin. Les débats révèlent la culpabilité des accusés, mus par l'appât du gain.",
    "paragraphs": [
      "La Cour d'assises du Loiret a ouvert le procès de Louis Robert et Charlotte Salin, tous deux accusés d'avoir perpétré un double empoisonnement sur leurs proches.",
      "Les débats ont mis en lumière l'influence néfaste exercée par Charlotte Salin sur Robert, lequel a fini par avouer ses crimes après avoir nié toute participation lors de l'instruction.",
      "Le président a confronté les accusés aux témoignages et aux preuves matérielles, notamment des lettres révélant leurs intentions criminelles visant à s'approprier les biens de leurs victimes.",
      "L'audience a été marquée par les témoignages poignants des proches et par les détails sordides sur l'empoisonnement au cidre, versé aux victimes, dont le propre père de l'accusée."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Actualité Internationale",
    "title": "La Guerre au Transvaal et les opérations militaires",
    "summary": "Le général Kitchener signale la position du général De Wet au sud de Dewetsdorp. Pendant que Londres envisage l'état de siège au Cap, les colonnes Campbell et French intensifient leur offensive contre les Boers.",
    "paragraphs": [
      "Une dépêche de lord Kitchener signale que le général De Wet se trouve actuellement au sud de Dewetsdorp.",
      "À Londres, le Daily Telegraph rapporte que l'état de siège pourrait être prochainement proclamé dans la ville du Cap.",
      "Les opérations militaires se poursuivent activement avec des engagements des colonnes Campbell et French contre les Boers, qui n'opposent qu'une faible résistance."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique",
    "title": "Échos et Nouvelles",
    "summary": "Le Président Émile Loubet multiplie les activités officielles, entre audiences diplomatiques et visites artistiques, tandis que la chronique mondaine annonce les fiançailles de M. Paul Deschanel.",
    "paragraphs": [
      "Le Président de la République, M. Émile Loubet, a reçu, ce jour au palais de l'Élysée, diverses personnalités civiles et militaires.",
      "Le Chef de l'État a également honoré de sa présence l'exposition des Miniaturistes, à la galerie Petit.",
      "Il est procédé à la publication des bans de mariage entre M. Paul-Eugène-Louis Deschanel et Mlle Camille-Armande-Marie-Germaine Brice de Ville."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Politique et Administration",
    "title": "Réforme fiscale et administration",
    "summary": "Une réflexion sur l'accueil public de la réforme fiscale, couplée à une demande pressante de loyauté commerciale concernant le poids réel des denrées vendues au détail.",
    "paragraphs": [
      "Cette réforme fiscale, attendue depuis longtemps par le pays, sera, n'en doutons pas, fort bien accueillie par l'ensemble du public.",
      "Toutefois, l'administration ne pourrait-elle pas profiter de cette occasion pour réformer le système de mise en vente, et accorder enfin au client, qui le réclame vainement, la garantie de la quantité exacte indiquée sur les caisses vendues sous sa complète responsabilité ?"
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Santé de Mme Monmari à Alger",
    "summary": "Le gouvernement communique des nouvelles inquiétantes concernant l'état de santé de Mme Monmari à Alger, malgré une brève embellie constatée récemment.",
    "paragraphs": [
      "On télégraphie d'Alger : Le dernier bulletin relatif à la santé de Mme Monmari, communiqué par le Gouvernement, porte qu'après une légère amélioration, l'état de la malade a donné de nouveau de sérieuses inquiétudes."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le Double Meurtre de la Rue des Plâtrières",
    "summary": "L'enquête sur l'agression mortelle d'Antoine Gabriel rue des Plâtrières aboutit : Félicien Balzer et ses complices, arrêtés, ont avoué le crime perpétré avec une violence extrême.",
    "paragraphs": [
      "Nous avons relaté, le 12 décembre dernier, les circonstances du double meurtre de la rue des Plâtrières, où Antoine Gabriel fut frappé par un malfaiteur qu'accompagnaient deux autres individus. Dans la lutte, Claude Blandon, un ami de la victime, avait reçu un coup de couteau dans le ventre.",
      "M. Larcher, juge d'instruction, avait confié les recherches au commissaire Cochefert, chef de la sûreté. Tout dernièrement, M. Cochefert apprenait que l'auteur habitait Pantin, rue du Général-Compans, et n'était autre que Félicien Balzer, âgé de vingt et un ans, un repris de justice des plus dangereux.",
      "Arrêté, Balzer a dénoncé ses complices : Rimé Baumann, 20 ans, garçon boucher, et Marius Schrœder, 22 ans. Mis à la disposition de M. Larcher, les trois individus ont fait des aveux complets sur le drame.",
      "À la suite d'une altercation, Balzer et Baumann ont terrassé Gabriel tandis que Schrœder lui tranchait la gorge. Blandon, venu au secours de son ami, a reçu un coup de couteau dans l'abdomen nécessitant une laparotomie. Les trois acolytes s'étaient séparés, se croyant à l'abri de toute poursuite."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Justice",
    "title": "L'Attentat contre M. Deschanel",
    "summary": "M. de Vallès poursuit l'instruction concernant Mlle Vera Gelo. L'inculpée maintient son mutisme sur l'agression dont elle dit avoir été victime près de Genève, tandis qu'une expertise psychiatrique est en cours.",
    "paragraphs": [
      "M. de Vallès, juge d'instruction, a procédé de nouveau à l'interrogatoire de Mlle Vera Gelo. L'inculpée a persisté dans son mutisme au sujet de l'outrage dont elle aurait été victime près de Genève.",
      "Elle a toutefois donné des renseignements sur son existence : elle perdit sa mère à sept ans, a étudié au gymnase Léontieff, puis a suivi des cours à Genève. Dans sa cellule à Saint-Lazare, elle lit les œuvres de Schiller, Goethe, Racine et Corneille.",
      "M. de Vallès laisse l'inculpée à ses réflexions pendant une semaine en attendant le rapport des trois médecins chargés d'examiner son état mental."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'homme coupé en morceaux",
    "summary": "Une habitante de Troyes, Mme Cousin, a reconnu son fils disparu, Félicien Cousin, parmi les restes humains découverts rue des Plâtrières. La sûreté parisienne approfondit l'enquête.",
    "paragraphs": [
      "M. André, juge d'instruction, vient d'être avisé d'une nouvelle reconnaissance concernant l'homme coupé en morceaux. Mme Cousin, habitant rue Saint-Paul à Troyes, aurait reconnu son fils, Félicien Cousin, âgé de vingt ans, disparu depuis le 2 novembre. Celui-ci présente les mêmes cicatrices que la victime du crime de la rue des Plâtrières. Le service de la sûreté à Paris a été prévenu."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Abandon d'enfant",
    "summary": "Un nouveau-né de sexe masculin a été découvert ce matin, déposé devant la caserne des pompiers de la rue de l'Aqueduc. Le commissariat du quartier a immédiatement ouvert une enquête.",
    "paragraphs": [
      "Vers dix heures du matin, le gardien de la paix Abramir a trouvé un enfant du sexe masculin, qu'il croyait mort, déposé dans un paquet volumineux devant la caserne des pompiers, rue de l'Aqueduc. L'enfant a été transporté au commissariat, qui a ouvert une enquête pour abandon."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame rue de Crimée",
    "summary": "Un conflit professionnel a tourné au drame rue de Crimée : un marchand de volailles a tiré deux coups de revolver sur son gérant, le blessant grièvement, avant de prendre la fuite.",
    "paragraphs": [
      "M. Julien Canet, marchand de volailles en gros, était en conflit avec son gérant, M. Victor Bergogne, âgé de trente-cinq ans. Hier matin, alors que M. Bergogne préparait une livraison, M. Canet a tiré deux coups de revolver sur lui. Le blessé a été atteint à la main et au pied.",
      "Un autre employé, M. Henri Louis, a été atteint plus légèrement. Après des soins reçus en pharmacie, M. Victor Bergogne a été reconduit à son domicile. M. Bajaud, commissaire de police du quartier, fait activement rechercher le coupable."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "Bulletin du travail : Les ouvriers tailleurs pour dames",
    "summary": "Les ouvriers tailleurs pour dames sont en grève dans sept maisons de couture. Soutenus par la Fédération nationale de l'habillement, ils exigent la fin du travail aux pièces et un salaire journalier fixe.",
    "paragraphs": [
      "Les ouvriers tailleurs pour dames ont déserté les ateliers de sept grandes maisons de couture, un mouvement qui était prévisible. Les directeurs estiment que c'est la morte saison, mais le personnel gréviste a tenu une assemblée à la Bourse du travail.",
      "La grève, soutenue par la Fédération nationale de l'habillement, réclame la suppression du travail aux pièces. Les ouvriers exigent un salaire fixe de 10 francs par jour pour huit heures de travail, ou 1,25 fr. l'heure, et 2 fr. pour les heures supplémentaires."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Social",
    "title": "Une grève à Ivry",
    "summary": "À Ivry-Port, une grève ouvrière a nécessité l'intervention du commissaire Boussard et des autorités municipales pour maintenir l'ordre et tenter de concilier les exigences des ouvrières avec la direction des ateliers.",
    "paragraphs": [
      "Des patrouilles de gendarmerie et le commissaire de police, M. Boussard, ont été déployés à Ivry-Port. Dès sept heures, les ouvrières ont tenté d'empêcher l'accès aux ateliers. Le maire, M. Roussel, et le conseiller municipal, M. Courtines, sont intervenus pour demander le calme.",
      "Une réunion a été tenue et le rapport sur les revendications a été remis à la mairie. La manifestation s'est terminée par des cris de « Vive la grève ! ». M. Sannier, directeur, cherche à éviter les bagarres lors de la sortie des ateliers."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "La Grève de Montceau-les-Mines",
    "summary": "Une bagarre armée a éclaté près du théâtre Perrillon entre plusieurs individus. Parallèlement, Montceau-les-Mines a commémoré avec ferveur le premier anniversaire de la tragique catastrophe du 4 février.",
    "paragraphs": [
      "Les nommés Marjut et Monnet ont été provoqués par quatre individus près du théâtre Perrillon. Une bagarre a éclaté et les coupables, les nommés Perrault, Hiboufet, Alphonse Courte et Martin, ont tiré des coups de revolver.",
      "M. Martin a été arrêté chez un typographe. Une grandiose manifestation a eu lieu à deux heures de l'après-midi en l'honneur du premier anniversaire de la catastrophe du 4 février, où des milliers de personnes ont défilé dans les rues."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort en communiant à Méricourt",
    "summary": "Drame poignant à Méricourt : la jeune Zélia Carpriaux, âgée de 18 ans, est décédée subitement à l'instant même où elle recevait la sainte communion, laissant la population locale dans une vive émotion.",
    "paragraphs": [
      "Mlle Zélia Carpriaux, 18 ans, quittait la cité des mines de Méricourt pour se rendre à l'église. À peine avait-elle reçu l'hostie qu'elle s'est affaissée sur les dalles. Elle est décédée peu après dans une maison voisine, provoquant une vive émotion."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Assassinat d'un vieillard à Chartres",
    "summary": "Le corps d'un vieillard nommé Dussay a été découvert sans vie à son domicile, rue de la Manche à Chartres. Les autorités judiciaires ont immédiatement ouvert une enquête pour élucider cet attentat criminel.",
    "paragraphs": [
      "Le corps d'un vieillard du nom de Dussay a été découvert chez lui, rue de la Manche. Originaire de la Manche, il s'était rendu à Paris le 26 janvier. La justice a ouvert une enquête sur cet attentat."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Autour de Paris",
    "summary": "La chronique de la banlieue parisienne rapporte une série d'événements tragiques : accidents, suicides, arrestations de malfaiteurs et découvertes suspectes ponctuent le quotidien des communes environnantes.",
    "paragraphs": [
      "Levallois-Perret : M. Georges Riplay a été gravement blessé sous un tombereau.",
      "Puteaux : Paul Blanche, 20 ans, s'est tiré deux coups de revolver par désespoir amoureux.",
      "Courbevoie : Une bande de malfaiteurs surnommés « les Voltigeurs » a été arrêtée après une traque périlleuse sur les toits par M. Legrand, secrétaire du commissaire de police.",
      "Saint-Ouen : Jean Gallor, journaliste, s'est donné la mort par pendaison.",
      "Bois-Colombes : Jean Patti, ancien serrurier, s'est pendu avenue d'Argenteuil.",
      "Pantin : Trois individus, Émile Grillât, Pierre Candar et Louis Bougut, ont été arrêtés pour vol dans les entrepôts de M. Morice.",
      "Vincennes : Un uniforme militaire ensanglanté et une baïonnette ont été trouvés dans un taillis par le garde Mary. Une enquête est en cours.",
      "Alfortville : M. Alphonse Burguet a mis en fuite cinq individus qui tentaient de piller ses ateliers de serrurerie."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "Le Vaudeville joue « La Robe rouge » de M. Brieux. M. Leneka prendra la direction des Bouffes-Parisiens en septembre, et une matinée de bienfaisance est annoncée au Châtelet pour le 12 février.",
    "paragraphs": [
      "Ce soir, au Vaudeville, représentation de « La Robe rouge » de M. Brieux. M. Leneka prendra la direction des Bouffes-Parisiens le 15 septembre. Le 12 février, une matinée extraordinaire sera donnée au Châtelet au profit de la Société de secours mutuels des employés des théâtres de Paris.",
      "Un concert sera donné à Monte-Carlo sous la direction de M. Léon Jehin, avec le concours du violoncelliste M. J. Hollman."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Santé et témoignages",
    "title": "Témoignage sur l'Élixir Bupeyroux",
    "summary": "Mme Pennetier atteste de sa guérison d'une grave affection pulmonaire grâce à l'Élixir Bupeyroux, traitement préconisé par M. E. Bupeyroux, ancien interne des hôpitaux de Paris.",
    "paragraphs": [
      "Mme Pennetier, née en 1850, décrit son état de santé précaire après ses couches : vomissements de sang, toux persistante, oppression et fatigue extrême. Elle fut contrainte de confier sa fille à une nourrice.",
      "Sur les conseils d'un employé du Bon Marché, elle a essayé l'Élixir Bupeyroux. Le 29 avril 1900, elle atteste de son rétablissement complet, de sa reprise de poids et de la disparition de ses douleurs respiratoires.",
      "L'annonce conclut par une recommandation de M. E. Bupeyroux, ancien interne des hôpitaux de Paris, invitant les malades souffrant d'affections pulmonaires, de bronchites ou de tuberculose à suivre sa méthode de traitement."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Avis divers",
    "title": "Avertissement : Refus de dettes",
    "summary": "M. et Mme Dumaine informent officiellement le public qu'ils déclinent toute responsabilité concernant les dettes contractées par leur fils, André Dumaine.",
    "paragraphs": [
      "M. et Mme Dumaine, d'accord avec leur fils André Dumaine, préviennent le public qu'ils ne paieront aucune dette contractée par ce dernier."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Actualité agricole",
    "title": "Sommaire de L'Agriculture Nouvelle",
    "summary": "L'hebdomadaire « L'Agriculture Nouvelle » consacre son édition de la semaine à des thèmes techniques variés, allant des inventions agricoles à la législation rurale.",
    "paragraphs": [
      "L'Agriculture Nouvelle propose cette semaine des articles variés : inventions agricoles, prévisions météorologiques, protection du gibier, horticulture, viticulture, apiculture et législation rurale."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Vie culturelle",
    "title": "Spectacles du 5 février",
    "summary": "Programme complet des représentations théâtrales, lyriques et des spectacles de cirque prévus dans la capitale pour la journée du 5 février.",
    "paragraphs": [
      "Le programme des théâtres et spectacles parisiens pour la journée du 5 février inclut des pièces au Théâtre-Français, à l'Opéra-Comique, au Vaudeville et dans divers cabarets et cirques de la capitale."
    ]
  }
];
