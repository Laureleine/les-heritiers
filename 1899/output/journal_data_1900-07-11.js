// Date: 1900-07-11
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-07-11 (Version Restaurée, 38 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Social",
    "title": "La Réforme Hospitalière",
    "summary": "La Ville de Paris engage une réforme ambitieuse de son système hospitalier, prévoyant la modernisation des établissements vétustes et la création de centres en périphérie, pour un coût total de cent millions de francs.",
    "paragraphs": [
      "Le régime hospitalier de la Ville de Paris est appelé à subir d'importantes réformes qui entraîneront des dépenses évaluées à plus de cent millions. C'est un remaniement presque général du patrimoine de nos pauvres qui se prépare.",
      "On veut faire disparaître certaines de nos cités dolentes dont les bâtisses séculaires offrent l'image d'une vétusté par trop accentuée. De plus, des idées scientifiques nouvelles ont amené les praticiens à modifier totalement les aménagements des salles de malades.",
      "Le projet préfectoral prévoit que trois des grands hôpitaux projetés doivent être construits dans Paris et trois autres à l'extrémité du territoire urbain, vers Saint-Denis, Levallois et Montrouge, afin d'assurer une déparisianisation notable.",
      "Il ne faut pas perdre de vue qu'une déparisianisation trop largement entendue répondrait mal aux besoins. Notre Assistance publique doit comprendre dans ses moyens d'action des maisons de ville aussi bien que des établissements suburbains, notamment pour permettre aux familles de rendre visite aux malades."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Main Gauche - Deuxième Partie (suite)",
    "summary": "Au commissariat, Raymond de Terrique, en attente d'interrogatoire, laisse errer ses pensées entre ses souvenirs passés et l'inquiétude grandissante qu'il éprouve pour son épouse Odette.",
    "paragraphs": [
      "Raymond de Terrique attendit une longue heure, fumant cigarette sur cigarette, au poste de police. Les agents qui l'y avaient amené ne le quittaient pas des yeux.",
      "La capture semblait importante. Il ressemblait, comme deux gouttes d'eau, à la tête du médaillon. Un long et sombre fourgon s'arrêta devant le commissariat : c'était le sinistre panier à salade.",
      "Dans son cerveau, les souvenirs passaient, embrouillés et vagues : sa vie de garçon, le château du Dauphiné, ses maîtresses, et la petite Zette. Et voilà qu'il entrait tard dans le pavillon de la rue Vavin, retrouvant la table avec son souper de cabinet particulier.",
      "Une seule pensée s'y fixa enfin : celle d'Odette, de sa femme. C'était elle, l'épouse qu'il n'avait point encore pressée dans ses bras, qui soulevait son inquiétude."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "La Clôture du Parlement",
    "summary": "La session parlementaire s'achève sur un bilan en demi-teinte. Si de nombreuses réformes attendent, la Chambre a su légiférer sur l'armée coloniale et assainir la discussion budgétaire.",
    "paragraphs": [
      "La session est close. Pendant plusieurs mois, la tribune va être muette, et la France poursuivra sa tâche d'hospitalité envers ceux qu'elle a conviés pour l'Exposition.",
      "Sans doute la session ne présente pas un bilan tel que le souhaiterait la démocratie, car de nombreuses réformes n'ont même pas réussi à être discutées. La faute n'en est-elle pas toujours aux députés qui interpellent sans cesse ?",
      "Malgré cet abus, la Chambre a pu accomplir une réforme pratique en interdisant l'introduction inopinée d'amendements dans la loi de finances. Le vote constituant l'armée coloniale est un fait considérable dont les circonstances actuelles montrent l'importance et l'urgence.",
      "En un mot, si la session n'a pas donné tout ce que les espérances populaires en attendaient, les élus peuvent dire tout au moins qu'ils ont rempli leurs devoirs envers la France et la République."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Mortel Accident de Tir",
    "summary": "Un tragique accident survient à Tours : le nommé Alison est mortellement blessé par le coup de feu accidentel d'un revolver manipulé par un canonnier suite à un exercice de tir.",
    "paragraphs": [
      "Un déplorable accident vient de se produire à Tours. Après avoir exécuté un tir au revolver, un maréchal des logis du 9e d'artillerie remit son arme à un canonnier.",
      "À ce moment, le nommé Alison s'approcha pour vérifier le matricule du revolver. Une détonation retentit : le chien de l'arme venait de s'abattre sur une cartouche qui avait raté précédemment.",
      "Le malheureux Alison est mort en arrivant à l'hôpital militaire, les intestins perforés."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Mystérieux Drame Conjugal à Pantin",
    "summary": "Le corps d'une femme est repêché dans le canal de l'Ourcq. Son mari, Arthur Devos, soupçonné d'avoir agi dans un accès de jalousie, a été placé à la disposition du juge d'instruction.",
    "paragraphs": [
      "Hier matin, le bruit s'est répandu dans Pantin que l'on avait retiré du canal de l'Ourcq le cadavre d'une jeune femme jetée à l'eau par son mari, Arthur Devos.",
      "Le ménage Devos était marqué par une jalousie féroce de la part du mari. Dimanche, après avoir bu plus que de raison, Devos s'en prit violemment à sa femme.",
      "Vers minuit et demi, des passants sauvèrent Devos de l'eau, mais ce dernier ne dit pas que sa femme était en train de se noyer. Le corps de Mme Devos fut retrouvé plus tard par un plongeur avec des marques de contusions.",
      "Devos a été mis à la disposition du juge d'instruction."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un Lynchage à Cormeilles-en-Parisis",
    "summary": "À la suite d'une agression sauvage commise par deux forains lors de la fête de Cormeilles-en-Parisis, une foule indignée a exercé une justice expéditive, laissant les agresseurs lynchés et une victime en grand danger.",
    "paragraphs": [
      "Une scène sanglante s'est déroulée à Cormeilles-en-Parisis. Trois personnes se promenaient à la fête quand deux forains, Valéry Corsellis et Auguste Martheleur, les agressèrent sauvagement à coups de casse-tête.",
      "La foule, justement indignée, fit le siège de la baraque où s'étaient réfugiés les agresseurs. Elle s'empara des deux hommes et les roua de coups, les laissant inanimés sous les yeux d'une gendarmerie impuissante.",
      "Les deux agresseurs ont finalement été transférés à Versailles sous escorte, tandis que l'une des victimes, Mlle Bréhu, demeure dans un état extrêmement inquiétant."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Actualités Internationales",
    "title": "Les Événements de Chine",
    "summary": "L'incertitude persiste concernant le sort des légations à Pékin. Entre les manœuvres du prince Ching et les récits atroces sur la mort du baron de Ketteler, les chancelleries redoutent le pire malgré les dépêches reçues.",
    "paragraphs": [
      "Malgré les dépêches relatives à l'attitude du prince Ching, qui s'efforcerait de protéger les légations étrangères, on ne peut se défendre d'une vive inquiétude quant à la situation réelle à Pékin.",
      "On annonce que l'impératrice douairière a repris le pouvoir et qu'elle sollicite la protection des puissances étrangères. Cependant, la nature contradictoire des télégrammes ne permet pas d'y accorder une créance absolue.",
      "Des détails atroces nous parviennent concernant la mort du baron de Ketteler, à qui les Chinois auraient arraché la langue après l'avoir enterré jusqu'au cou."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Chine",
    "title": "La situation à Pékin et Tien-Tsin",
    "summary": "Washington promet de fortes récompenses pour le sauvetage des assiégés à Pékin, où la disette menace les Européens. À Tien-Tsin, les renforts arrivent malgré les inondations et la destruction des voies ferrées.",
    "paragraphs": [
      "Le gouvernement américain a télégraphié à M. Schenk que de fortes récompenses seraient accordées à ceux qui parviendraient à sauver les étrangers assiégés dans les légations.",
      "Le Times indique que les fonctionnaires chinois tentent d'atténuer la gravité des méfaits commis contre les légations, alors que le manque de vivres fait désormais craindre la mort des Européens par la faim.",
      "À Tien-Tsin, la situation demeure précaire en raison des inondations et de la destruction des infrastructures ferroviaires. Un messager a signalé la présence de troupes chinoises en mouvement, tandis que des renforts français sont arrivés sur place.",
      "Les non-combattants quittent Tien-Tsin, et le 9e régiment américain est arrivé à Takou."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Diplomatie",
    "title": "Le Japon et les puissances en Chine",
    "summary": "La Russie confirme qu'elle ne s'oppose point à l'intervention militaire du Japon en Chine, sous réserve expresse d'une coopération rigoureuse et concertée avec les forces des autres puissances alliées sur place.",
    "paragraphs": [
      "Les feuilles de Saint-Pétersbourg rapportent que le gouvernement russe ne formule aucune objection quant à l'envoi de forces militaires japonaises en Chine.",
      "Toutefois, les cercles diplomatiques précisent que le Japon se devra de coopérer sur des bases strictement identiques à celles adoptées par les autres puissances alliées."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "France",
    "title": "Réception des délégués Boërs à l'Hôtel de Ville",
    "summary": "La Ville de Paris a offert un accueil triomphal à la délégation boër. Lors d'une réception solennelle à l'Hôtel de Ville, M. Grébauval et M. Fischer ont magnifié la lutte pour l'indépendance de ce peuple courageux.",
    "paragraphs": [
      "La délégation boër a été reçue avec un enthousiasme marqué par le Conseil municipal et le Conseil général de Paris, concrétisant ainsi l'élan de vive sympathie que la population parisienne éprouve pour la cause du peuple boër.",
      "La réception, suivie par une affluence considérable, a été ponctuée par les allocutions du président du Conseil municipal, M. Grébauval, et du chef de la délégation, M. Fischer. Tous deux ont rendu un hommage vibrant à la lutte acharnée pour l'indépendance, tout en saluant avec une profonde émotion la mémoire du général de Villebois-Mareuil.",
      "Un second accueil, tout aussi déférent, a été réservé aux illustres délégués lors de leur passage au Conseil général par M. Chérioux."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Vie et animations à l'Exposition",
    "summary": "Le retour du soleil favorise une affluence record à l'Exposition. La section belge inaugure ses nouvelles salles, tandis que le Président Loubet s'apprête à visiter le palais de l'Agriculture lors d'une fête ouvrière.",
    "paragraphs": [
      "Le retour du soleil a favorisé une forte affluence à l'Exposition universelle.",
      "La section belge a inauguré une nouvelle salle dans son pavillon, exposant des œuvres d'art des Flandres, accompagnée par une prestation musicale de la société Sainte-Cécile de Gand.",
      "Le Président Émile Loubet visitera demain les sections françaises du palais de l'Agriculture.",
      "Une fête des ouvriers est prévue, incluant des représentations de la Comédie-Française et de l'Opéra pour remplacer la soirée dansante initialement programmée."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "Légion d'honneur au ministère du Commerce",
    "summary": "Le Journal officiel du 10 juillet annonce plusieurs nominations aux grades d'officier et de chevalier de la Légion d'honneur, proposées par le ministre du Commerce et de l'Industrie.",
    "paragraphs": [
      "Par décret du 10 juillet, plusieurs nominations ont été effectuées dans l'ordre de la Légion d'honneur, tant au grade d'officier que de chevalier, sur proposition du ministre du Commerce et de l'Industrie."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "Chambre des députés : Séance du 10 juillet",
    "summary": "La Chambre clôt sa session après le vote des crédits pour la Chine. Une vive altercation entre M. Georges Berry et la présidence au sujet des jurys de l'Exposition a marqué la fin des travaux parlementaires.",
    "paragraphs": [
      "La Chambre a clôturé sa session ordinaire après avoir voté les crédits pour l'expédition de Chine et le projet de loi sur les contributions directes.",
      "Un vif incident a éclaté entre M. Georges Berry et le président de séance concernant la composition des jurys de l'Exposition, menant à une censure du député.",
      "Le gouvernement a annoncé la mise en place d'une chambre de vacations judiciaires pour accélérer les procès relatifs aux accidents du travail."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Sénat : Séance du 10 juillet",
    "summary": "Le Sénat a entériné les crédits pour l'expédition de Chine et validé la réduction des droits de douane sur les cafés. Cette ultime séance acte la clôture de la session parlementaire.",
    "paragraphs": [
      "Le Sénat a discuté et adopté plusieurs projets, dont les crédits pour l'expédition de Chine, malgré les protestations de M. de Blois, ainsi que la réduction des droits de douane sur les cafés dans le cadre d'une convention avec le Brésil.",
      "La session parlementaire a été déclarée close."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Grâces présidentielles du 14 juillet",
    "summary": "À l'occasion de la fête nationale et du succès de l'Exposition universelle, le Président de la République a signé un décret accordant une remise de peine à 455 condamnés de droit commun.",
    "paragraphs": [
      "À l'occasion de la fête nationale et de l'Exposition, le Président de la République a accordé des remises de peines à 455 condamnés de droit commun."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Armée",
    "title": "Mouvements de l'escadre navale à Brest",
    "summary": "L'escadre navale a quitté le port de Brest à destination de Cherbourg. La municipalité invite les citoyens à réserver aux marins un accueil fervent lors de leur retour prochain dans nos eaux.",
    "paragraphs": [
      "L'escadre navale a quitté la rade de Brest pour faire route vers Cherbourg. M. le maire de Brest, par un avis officiel, a convié la population à réserver un accueil enthousiaste et patriotique à nos marins lors de leur retour au port."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Guerre",
    "title": "Nouvelles de la guerre en Afrique du Sud",
    "summary": "Le front sud-africain signale la soumission de plusieurs autorités boërs face à Lord Roberts, tandis que le général Hutton contient les offensives ennemies. Au Cap, une manifestation féminine conteste l'annexion.",
    "paragraphs": [
      "Le maréchal Lord Roberts signale la soumission volontaire de plusieurs fonctionnaires boërs. De son côté, le général Hutton est parvenu à repousser victorieusement les attaques lancées par les forces boërs.",
      "Au Cap, un meeting de femmes a réuni un grand nombre de participantes protestant énergiquement contre l'annexion des deux Républiques par les Britanniques."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Dîner du ministre de la Guerre",
    "summary": "Le général André, ministre de la Guerre, a reçu hier soir les plus hautes autorités de l'État pour un dîner suivi d'une réception brillante et d'un bal mondain au sein de son hôtel particulier.",
    "paragraphs": [
      "Le ministre de la Guerre et Mme André ont offert hier soir un grand dîner en l'honneur des présidents et des bureaux des deux Chambres, des membres du gouvernement, ainsi que des présidents des grandes commissions parlementaires.",
      "Assistaient également à cette réception M. de Selves, préfet de la Seine ; M. Lépine, préfet de police, les présidents du Conseil d'État, de la Cour de cassation et de la Cour des comptes, les procureurs généraux près ces deux hautes cours, ainsi que les doyens des facultés de Paris.",
      "Cette soirée, qui réunissait les sommités du monde politique et judiciaire, s'est prolongée par une brillante réception suivie d'un bal."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Le nouveau piqueur de l'Élysée",
    "summary": "M. Georges Troude, homme d'une grande habileté professionnelle, a officiellement pris ses fonctions de piqueur au service de la Présidence. Il fera sa première apparition lors du défilé du 14 juillet à Longchamp.",
    "paragraphs": [
      "C'est dans la matinée d'hier que le nouveau piqueur de l'Élysée a pris son service. Il se nomme Georges Troude, est âgé d'une quarantaine d'années et possède une solide réputation en matière d'habileté professionnelle.",
      "M. Georges Troude exercera pour la première fois ses fonctions officielles le 14 juillet prochain, en conduisant la daumont du Président de la République lors de la revue militaire de Longchamp."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Sciences et Médecine",
    "title": "Académie de médecine : élections et communications",
    "summary": "L'Académie de médecine a élu MM. Lordat et Triaire comme correspondants. Les travaux scientifiques ont porté sur un dérivé de l'antipyrine promettant une efficacité thérapeutique identique à dose réduite.",
    "paragraphs": [
      "Dans sa séance d'hier, l'Académie de médecine a procédé à l'élection de deux nouveaux correspondants nationaux. MM. Lordat, de Lyon, et Triaire, de Tours, ayant obtenu la majorité des suffrages, ont été proclamés élus.",
      "Une communication très intéressante a été présentée par MM. Albert Robinet et G. Bardet, relative à l'action d'un dérivé de l'antipyrine sur les échanges organiques. Il s'agit d'un nouveau produit médicamenteux qui, administré à dose très faible, permet d'obtenir les mêmes effets thérapeutiques que l'antipyrine classique."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits divers",
    "title": "Explosion boulevard Haussmann",
    "summary": "Hier à midi, une détonation brutale boulevard Haussmann, causée par une avarie sur un tramway à traction mécanique, a causé une vive émotion et un emballement des chevaux, sans toutefois faire de victimes humaines.",
    "paragraphs": [
      "Hier à midi, une forte explosion s'est fait entendre à l'angle du boulevard Haussmann et de l'avenue de Friedland, provoquant parmi les nombreux passants une vive émotion.",
      "Au même moment, un tramway à traction mécanique de la ligne Auteuil-Madeleine s'arrêtait brusquement : le réservoir d'air, par suite du non-fonctionnement d'un clapet, venait de se vider.",
      "Des voyageuses s'évanouirent, tandis qu'effrayés par la détonation, des chevaux attelés à des fiacres stationnant à proximité s'emballaient dans toutes les directions.",
      "Tout s'est heureusement borné à des dégâts matériels ; aucun accident corporel n'est à déplorer. Une foule nombreuse, attirée par l'incident, est restée sur les lieux une grande partie de l'après-midi."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits divers",
    "title": "Enfant écrasé",
    "summary": "Tragique accident de la circulation hier après-midi dans le quartier de la Villette : un enfant de neuf ans, nommé Manger, a été mortellement renversé par un tramway.",
    "paragraphs": [
      "Hier après-midi, un enfant de neuf ans, le jeune Manger, habitant rue Fabre-d'Églantine, a été renversé par le tramway de la Villette dont les roues lui ont broyé la poitrine.",
      "Le corps a été transporté au domicile de ses parents. M. Deslandes, commissaire de police, a gardé à sa disposition le conducteur du tramway pour les besoins de l'enquête."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits divers",
    "title": "Enquête sur des viandes malsaines",
    "summary": "Le docteur Thoinot a procédé à l'autopsie de Mme Gerbier, suspectée d'avoir succombé à un empoisonnement par des viandes avariées. Des analyses toxicologiques approfondies sont en cours.",
    "paragraphs": [
      "Le docteur Thoinot, médecin légiste, chargé par M. Josserand, juge d'instruction, de procéder à l'autopsie du corps de Mme Gerbier, née Lefèvre, victime présumée d'un empoisonnement par des viandes malsaines, a effectué hier cette opération.",
      "Les viscères, mis sous scellés dans des bocaux, ont été transportés au laboratoire de toxicologie où le docteur Ogier procédera à leur examen.",
      "Le magistrat instructeur a également chargé M. Girard, directeur du laboratoire municipal, d'analyser les viandes saisies chez le fournisseur de Mme Gerbier et d'examiner les récipients qui les contenaient."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits divers",
    "title": "Vol sur une péniche",
    "summary": "M. Charles Girard, capitaine d'une péniche, a été dépouillé de son portefeuille par un individu connaissant les lieux. Une plainte a été déposée auprès du commissaire Vendt.",
    "paragraphs": [
      "Un marinier, M. Charles Girard, âgé de soixante ans, capitaine d'une péniche, était arrivé ces jours derniers à Paris. Il avait dissimulé une somme d'argent dans une cachette au fond de sa cabine.",
      "Avant-hier soir, pendant son absence, un malfaiteur, parfaitement au fait des habitudes du bord, a dérobé le portefeuille contenant les fonds.",
      "Le marinier a porté plainte chez M. Vendt, commissaire de police. M. Girard fait peser ses soupçons sur un individu qui est actuellement activement recherché par les autorités."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits divers",
    "title": "Drame de famille à Montmartre",
    "summary": "Une violente dispute familiale a éclaté hier rue du Mont-Cenis : Maurice Eustache, après avoir agressé son frère au couteau, s'en est pris à son père avant d'être maîtrisé par les gardiens de la paix.",
    "paragraphs": [
      "Un drame s'est déroulé hier soir, vers huit heures, rue du Mont-Cenis, à Montmartre, au domicile de M. Louis Eustache et de ses deux fils, Paul et Maurice.",
      "Le fils cadet, Maurice, connu pour être un mauvais sujet, avait eu une scène violente avec son frère deux jours auparavant.",
      "Hier soir, Maurice a attaqué son frère Paul avec un couteau-poignard. M. Louis Eustache est intervenu pour s'interposer, mais le fils s'est également rué sur lui. L'intervention prompte des gardiens de la paix a permis de maîtriser l'agresseur, qui a été aussitôt conduit au poste de police."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits divers",
    "title": "Accidents de la voie publique",
    "summary": "Hier matin, deux enfants furent renversés par une voiture boulevard de la Chapelle, tandis qu'une crémière subissait une agression violente boulevard Bonne-Nouvelle.",
    "paragraphs": [
      "Hier matin, à l'angle de la rue du Faubourg-Saint-Denis et du boulevard de la Chapelle, deux enfants, Joseph et Salomon Gueux, ont été renversés par une voiture de place dont le conducteur a pris la fuite.",
      "Un individu, resté inconnu, a tenté hier soir d'étrangler Mlle Serot, crémière boulevard Bonne-Nouvelle, avant de lui dérober sa sacoche. La victime a été immédiatement transportée à l'Hôtel-Dieu."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits divers",
    "title": "Une maison bien gardée",
    "summary": "La police exerce une surveillance étroite rue du Faubourg-Saint-Honoré, dans l'attente d'une possible reddition du commandant Esterhazy.",
    "paragraphs": [
      "Les locataires de la maison située rue du Faubourg-Saint-Honoré, parmi lesquels le commissaire Esconron, sont placés sous une surveillance policière étroite depuis trois jours.",
      "Des agents en bourgeois surveillent toutes les issues de l'immeuble. On raconte que le commandant Esterhazy a pris la décision de venir se constituer prisonnier afin de faire opposition au jugement rendu par défaut contre lui."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits divers",
    "title": "Faits divers en banlieue",
    "summary": "Une série d'accidents et de drames endeuille la banlieue parisienne, marqués par des chutes mortelles, des suicides et des interventions de police à Courbevoie, Nanterre et Étampes.",
    "paragraphs": [
      "Courbevoie : L'état du sergent Pierre-Auguste Couet, accidenté en gare, est jugé très grave. Quant à la jeune fille trouvée morte, on croit qu'il s'agit de Giselle Sonnenstein, originaire de Budapest.",
      "La Garenne-Colombes : M. Alexandre Jelbert, retraité, s'est jeté par la fenêtre et a été tué sur le coup.",
      "Nanterre : Émile Tilbart, ouvrier maçon, demeure dans un état grave suite à une chute d'échafaudage.",
      "Montreuil-sous-Bois : Un ouvrier nommé Giraudier est mort après avoir été brûlé accidentellement dans un four de plâtrière.",
      "Maisons-Alfort : Georges Haucourant, 73 ans, a été tué par un train express sur un passage à niveau.",
      "Arpajon : Un individu nommé Leymarie a été arrêté pour fabrication de fausse monnaie.",
      "Étampes : M. Jules P. s'est suicidé en absorbant un mélange d'absinthe et d'acide phénique.",
      "Pontoise : Une rixe survenue à Cléry-en-Vexin a fait un blessé grave, le nommé Isidore Droguet."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Actualité Internationale",
    "title": "Les événements de Chine : Bombardement de Tien-Tsin",
    "summary": "Les concessions étrangères de Tien-Tsin ont essuyé un bombardement massif des forces chinoises. La riposte des troupes alliées s'organise alors que la situation demeure critique.",
    "paragraphs": [
      "Les Chinois ont bombardé toute la journée d'hier les concessions étrangères à Tien-Tsin, tirant plus de cent cinquante projectiles.",
      "La population civile s'est réfugiée dans les caves. Les troupes japonaises, russes et françaises ont vigoureusement riposté par des tirs d'artillerie.",
      "Le bombardement a occasionné plusieurs blessés parmi les servants des pièces. La garnison chinoise semble renforcée par l'arrivée de milliers de soldats supplémentaires."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Culture",
    "title": "Actualité théâtrale et artistique",
    "summary": "Le théâtre parisien s'anime avec les reprises de Feydeau et Desmirax, tandis que le Trocadéro s'apprête à accueillir la grande chorale autrichienne Schubertbund.",
    "paragraphs": [
      "Au théâtre des Nouveautés, reprise de « La Dame de chez Maxim » de Georges Feydeau. Au Gymnase, on joue « Le Fils de l'Étrangère » de Desmirax.",
      "La société chorale autrichienne Schubertbund, composée de 335 chanteurs, arrivera le 16 juillet prochain pour donner deux concerts exceptionnels au Trocadéro."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Sports",
    "title": "Courses de chevaux et automobile",
    "summary": "Compte rendu des épreuves hippiques de Maisons-Laffitte et annonce de l'hommage solennel rendu à Étienne Lenoir, pionnier de l'automobile, par le président de l'Automobile-Club de France à La Varenne-Saint-Hilaire.",
    "paragraphs": [
      "À l'issue de la réunion hippique de Maisons-Laffitte, les résultats consacrent la victoire de Mauvezin dans la première épreuve, suivi de Sésara et du Maréchal, qui se sont distingués par une arrivée remarquée.",
      "Le président de l'Automobile-Club de France se rendra lundi prochain à La Varenne-Saint-Hilaire. Cette visite officielle a pour noble objet d'honorer la mémoire et l'œuvre de M. Étienne Lenoir, inventeur distingué de l'automobile."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Faits Divers",
    "title": "Tirage de la Loterie de la Société des Enfants tuberculeux",
    "summary": "Le premier tirage de la loterie en faveur de la Société des Enfants tuberculeux s'est tenu hier. Les gagnants peuvent réclamer leurs lots au siège de l'organisation, tandis qu'un second tirage est prévu ultérieurement.",
    "paragraphs": [
      "Hier matin a eu lieu le premier tirage de la loterie de la Société des Enfants tuberculeux, autorisée par arrêté ministériel du 10 janvier. Les numéros gagnants correspondent à autant de lots qui seront délivrés 35, rue Miromesnil, à Paris, contre remise des billets correspondants.",
      "Nous rappelons qu'un second tirage de cette loterie, doté d'un gros lot, sera effectué ultérieurement. Les billets déjà en circulation restent valables pour cette nouvelle opération."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Social",
    "title": "Tirage des obligations de la Ville de Paris",
    "summary": "Le 115e tirage trimestriel des obligations de l'emprunt de la Ville de Paris de 1871 s'est tenu hier, rue La Fontaine. Au total, 271 séries ont été extraites de la roue pour le concours.",
    "paragraphs": [
      "Le 115e tirage trimestriel des séries des obligations de l'emprunt contracté par la Ville de Paris en 1871 a eu lieu hier matin, aux magasins de la Ville, 9, rue La Fontaine.",
      "Il a été extrait de la roue 271 séries qui doivent fournir les numéros appelés à concourir au tirage."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Feuilleton",
    "title": "Extrait de roman",
    "summary": "Mme de Saint-Amand, incommodée par les effluves du mimosa, se confie à Hélène. Sous ce prétexte floral, Marguerite cherche habilement à dissimuler le poids de ses angoisses secrètes.",
    "paragraphs": [
      "« Tu me fais toujours plaisir, petite », répondit Mme de Saint-Amand, « mais ma faiblesse s'accroît. »",
      "Elle ajouta : « C'est à coup sûr ces fleurs dont les jardinières sont pleines qui m'ont indisposée. N'y a-t-il pas du mimosa au milieu ? Ce n'est pas une fleur gasconne, cela ; je la trouve perfide. »",
      "Hélène se précipita et enleva les longues branches souples, douces et jaunes comme du velours. Mais ce n'était qu'un prétexte ; Marguerite ne voulait évidemment pas laisser pénétrer le secret de ses angoisses."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Actualité",
    "title": "Réflexions sur l'enquête de Gabrielle",
    "summary": "Déchirée par le doute sur la réhabilitation de Michel, Gabrielle se confie à mademoiselle de Saint-Amand. Malgré son désarroi face à l'absence de preuves, elle organise, avec l'aide de Lucien Gautret, la poursuite de son enquête.",
    "paragraphs": [
      "La fille de Catherine Civrac ne répondit pas. Quels mots, en effet, pouvait-elle prononcer ? Quelles pensées d'avenir ou d'espérance pouvait-elle évoquer devant cette idée terrible que Michel, peut-être, ne pourrait jamais être réhabilité ?",
      "Gabrielle essuya ses yeux pleins de larmes. « Et il compte sur moi pour trouver l'assassin du duc d'Argile », continua mademoiselle de Saint-Amand. « Dans chacune de ses lettres, il me répète que je suis son espoir suprême. Et je n'ai même pas une piste ou un indice. Rien, rien ! »",
      "Dans deux mois à peu près, nous reviendrons en Gascogne. Lucien Gautret, qui est le dévouement incarné, se chargera de recevoir les lettres de Michel et de me les renvoyer, aux sources, sous double enveloppe."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Faits Divers",
    "title": "Le Portrait de Daniel",
    "summary": "Lucien Gautret et Pâquerette entreprennent la restauration du salon mauve de l'hôtel d'Argile. Captivé par leur talent, Daniel retarde son départ pour la Gascogne afin de suivre leur travail.",
    "paragraphs": [
      "À la fin de la semaine, Lucien Gautret obtint son congé chez Carvezat. Le lendemain, qui était un dimanche, il vint installer à l'hôtel d'Argile tout ce qui était nécessaire pour commencer, avec Pâquerette, la restauration du joli salon mauve.",
      "À partir de lundi, ils arrivaient tous deux de bonne heure et travaillaient d'arrache-pied, consacrant à peine une demi-heure à leur repas de midi. Daniel, en extase devant l'œuvre des artistes, les regardait peindre des après-midi entières ; ainsi, le départ pour la Gascogne se trouva forcément ajourné."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Vie Commerciale",
    "title": "Bulletin Commercial",
    "summary": "Compte-rendu du marché des denrées. Au marché de La Villette, ce mardi 10 juillet, les transactions sur les veaux furent moroses, avec 535 têtes présentées pour une vente difficile et des prix stagnants.",
    "paragraphs": [
      "Cours des denrées et matières premières : blé, seigle, avoine, huile, sucre, cotons, laines, cafés.",
      "La Villette, mardi 10 juillet : Veaux amenés, 535 ; vendus. La vente fut mauvaise et les prix sont restés inchangés."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Service",
    "title": "Départs et Arrivées des Paquebots",
    "summary": "Bulletin de mouvement des paquebots des Messageries Maritimes au 10 juillet 1899 : arrivées au Brésil, ainsi que les escales et départs relevés à Dakar, Djibouti et Port-Saïd.",
    "paragraphs": [
      "Le paquebot Chili (Messageries Maritimes) arrive au Brésil le 15 juillet à midi.",
      "Le paquebot Brésil (Messageries Maritimes) est attendu au Brésil le 17 juillet.",
      "Le paquebot La Plata a quitté Dakar le 8 juillet.",
      "Le paquebot Yang-Tse (Messageries Maritimes), venant de Madagascar, a quitté Djibouti le 6 juillet.",
      "Le paquebot Oxus (Messageries Maritimes), venant de Madagascar, a quitté Port-Saïd le 10 juillet."
    ]
  }
];
