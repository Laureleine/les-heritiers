// Date: 1900-03-22
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-03-22 (Version Restaurée, 35 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Chronique",
    "title": "Jean Bart",
    "summary": "Portrait historique du célèbre corsaire dunkerquois Jean Bart, héros de la marine sous Louis XIV, dont l'intrépidité légendaire et la sobriété marquèrent durablement les annales navales françaises du XVIIe siècle.",
    "paragraphs": [
      "Ce n'est pas sans un vif plaisir que j'ai vu, l'autre jour, sur une affiche de théâtre, le nom de l'un des plus glorieux marins français.",
      "Le nom de Jean Bart est célèbre dans les annales de la marine française. Fils de pêcheur, il commença lui-même par cette profession avant de servir sous les ordres de Ruyter. Refusant de porter les armes contre sa patrie lors de la guerre de 1671, il retourna à Dunkerque pour armer ses propres vaisseaux.",
      "En 1675, Jean Bart s'illustre par sa hardiesse, notamment en attaquant une frégate devant le Texel. Ses succès lui valent d'être nommé lieutenant de vaisseau par Louis XIV. Après une évasion audacieuse de Plymouth, il multiplie les victoires, notamment en secourant des flottes de blé malgré la supériorité ennemie.",
      "L'intrépide marin se distinguait aussi par son caractère. Lors d'une rencontre à Bergen, il refusa de se laisser intimider par un capitaine anglais. Plus tard, lors de la guerre de Succession d'Espagne, il mourut d'une pleurésie à Dunkerque, sa ville natale, à l'âge de cinquante-deux ans.",
      "Jean Bart était un homme sobre, actif, intrépide et désintéressé, dont la fière réponse au roi Louis XIV, « Vous avez bien fait, sire », reste gravée dans l'histoire comme le symbole de sa haute conscience de sa propre valeur."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "La Toile de l'Araignée",
    "summary": "Au sein de cette chronique de mœurs, le vicomte tisse une toile d'intrigues, manipulant une concierge avide de secrets pour surveiller les correspondances et écarter ses rivaux dans la vie des locataires.",
    "paragraphs": [
      "La concierge, se pourléchant à l'idée d'une confidence, écoutait le vicomte parler de projets concernant le jeune Ludovic et mademoiselle Rolande.",
      "Le vicomte, manipulant la concierge, sollicite sa complicité pour surveiller les lettres des dames Castéras, prétextant une sollicitude bienveillante, alors qu'il cherche en réalité à contrôler des informations sensibles.",
      "La conversation révèle une machination complexe où le vicomte s'immisce dans la vie des locataires, tout en écartant ses rivaux potentiels comme le jeune Lorgerac, envoyé au loin par son père."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique Coloniale",
    "title": "La colonisation de Madagascar",
    "summary": "La Chambre des députés examine un projet de loi visant à financer, par un emprunt de 60 millions, la construction d'une ligne de chemin de fer entre Tananarive et Tamatave, pilier de l'œuvre coloniale à Madagascar.",
    "paragraphs": [
      "La Chambre des députés va prochainement discuter du projet de loi autorisant la colonie de Madagascar à contracter un emprunt pour relier Tananarive à Tamatave par voie ferrée.",
      "Sous l'impulsion du général Galliéni, l'œuvre civilisatrice progresse. Le chemin de fer est considéré comme le véritable instrument de conquête et de progrès, facilitant les échanges et la défense coloniale.",
      "Le projet mise sur l'économie en utilisant la voie d'eau des Pangalanes. L'emprunt de 60 millions couvrira les travaux ferroviaires, les routes et les télégraphes, avec une garantie assurée par le budget de la colonie."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Attentat au Palais de Justice",
    "summary": "Un pharmacien mécontent, Claude Bardin, a ouvert le feu au Palais de Justice après un arrêt défavorable. Maîtrisé avant d'atteindre sa cible, l'homme a été immédiatement conduit à la prison de la Santé.",
    "paragraphs": [
      "Hier, au début de l'audience de la cinquième chambre de la cour, un homme nommé Claude Bardin, pharmacien mécontent, a tiré deux coups de revolver après la lecture d'un arrêt condamnant sa gestion d'une porte cochère.",
      "Aucun magistrat ne fut atteint. Bardin, qui a agi avec préméditation, a été maîtrisé par les avocats et les conseillers présents avant d'être conduit à la prison de la Santé.",
      "L'inculpé a déclaré ne pas être fou, tandis que les conseillers de la chambre ont été interrogés sur le déroulement des faits. La justice confirme l'acte criminel et le barreau a exprimé ses regrets face à cet événement."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident à bord du Colbert",
    "summary": "Un tragique accident du travail est survenu à Toulon lors du débarquement d'une ancre de 6 000 kilos, causant la mort tragique de deux marins du cinquième dépôt des équipages de la flotte.",
    "paragraphs": [
      "Un grave accident a coûté la vie à deux marins, Lurguil et Robillard, au cinquième dépôt des équipages de la flotte à Toulon.",
      "Lors d'une opération de débarquement d'une ancre de 6 000 kilos, une grue a chaviré, écrasant les deux infortunés. Les autorités maritimes sont sur place pour l'enquête."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Justice",
    "title": "Le crime de la rue de Malte",
    "summary": "L'enquête sur l'assassinat de Mme Caron progresse : la découverte d'importantes sommes d'argent dissimulées fragilise les alibis d'Émile Lévy, dit Milo, et de ses complices présumés.",
    "paragraphs": [
      "Les investigations se poursuivent activement dans l'établissement de Mme Caron, la cabaretière assassinée. Les magistrats ont découvert, dissimulées avec soin dans des fauteuils et un placard, d'importantes sommes d'argent et des valeurs.",
      "Ces nouvelles preuves confirment les soupçons pesant sur Émile Lévy, dit Milo, et ses acolytes, dont les alibis ont été formellement démentis par les récentes constatations judiciaires."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Vie Parisienne",
    "title": "Les Cavalcades de la Mi-Carême",
    "summary": "Malgré une météo capricieuse et des bourrasques, les Halles et les étudiants maintiennent leur traditionnelle cavalcade qui s'élancera de la place de la Concorde vers la ville.",
    "paragraphs": [
      "Malgré un temps incertain et des rafales soutenues, les Halles et les étudiants ont maintenu leur cavalcade annuelle.",
      "Le cortège, composé de divers groupes tels que ceux du Marché Lenoir et du Marché Saint-Germain, doit s'élancer de la place de la Concorde avec ses chars allégoriques, dans l'espoir d'un ciel plus clément."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Actualités",
    "title": "La Fête du Quartier Latin",
    "summary": "La grande procession nocturne des étudiants, illuminée et richement décorée, s'apprête à quitter le Panthéon pour célébrer la fête du Quartier Latin avec une mise en scène spectaculaire.",
    "paragraphs": [
      "La procession nocturne des étudiants se compose de cinquante personnages, incluant les représentations des diverses facultés, des porteurs de flambeaux, des pharmaciens, des têtes de mort et une gondole vénitienne accompagnée d'un orchestre de minstrels.",
      "Le cortège, pavoisé de ballons lumineux et de lampes électriques, sera éclairé par les rayons X et entouré des divinités de l'Olympe. Le départ du Panthéon est prévu pour huit heures précises du soir."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "La situation militaire au Transvaal",
    "summary": "La progression de lord Roberts vers Pretoria et les manœuvres dans les montagnes au nord de Glencoe annoncent des combats décisifs pour le contrôle du Drakensberg et la libération de Mafeking.",
    "paragraphs": [
      "Les nouvelles publiées hier par les journaux de Londres semblent indiquer que les Boërs n'attendaient pas, pour reprendre les opérations, que lord Roberts ait prononcé son mouvement vers Pretoria.",
      "Si les Anglais forment le projet de s'emparer des défilés occupés par les Boërs au nord de Glencoe, ils auront de nombreux combats à soutenir. Ils ne pourront seconder lord Roberts qu'après s'être rendus maîtres des montagnes qui bornent l'État libre à l'ouest.",
      "La colonne Kitchener, chargée de débloquer Mafeking, a atteint Prieska. Il importe peu que Mafeking soit délivrée ou qu'elle tombe au pouvoir des Boërs, la partie décisive se livrera sur le Vaal et dans les passes du Drakensberg."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Dans l'État Libre d'Orange",
    "summary": "La retraite des forces Boërs dans l'État libre d'Orange s'accompagne de la destruction systématique des ponts ferroviaires, signalant un possible abandon de la défense du territoire.",
    "paragraphs": [
      "Bloemfontein, 19 mars : Les Boërs ont détruit, en battant en retraite, plusieurs ponts importants du chemin de fer. Tout est désormais calme au sud-ouest et le télégraphe est rétabli jusqu'à Jagersfontein.",
      "On considère la destruction des ponts comme une indication claire de l'intention des Orangistes d'abandonner la défense de l'État libre."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "À Kroonstadt",
    "summary": "À Kroonstadt, le 18 mars, les présidents des républiques boërs ont galvanisé leurs troupes. Le président Kruger appelle les Burghers à poursuivre la lutte pour l'indépendance avec une confiance inébranlable.",
    "paragraphs": [
      "Londres, 21 mars : Une dépêche de Kroonstadt, datée du 18 mars, indique que les commandos de Pretoria conservent un moral excellent. Les deux présidents ont prononcé des allocutions lors d'une importante réunion tenue au camp.",
      "Le président Kruger a lancé un appel pressant aux Burghers pour qu'ils poursuivent la lutte en faveur de leur liberté, se déclarant assuré de l'issue victorieuse du conflit."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Le Combat de Fourteen-Streams",
    "summary": "Entre Warrenton et les positions boërs, les affrontements se sont multipliés. L'artillerie britannique est intervenue, infligeant des pertes et capturant du matériel à l'ennemi lors de cet engagement soutenu.",
    "paragraphs": [
      "Kimberley, 20 mars : Des combats nourris se sont déroulés durant toute la journée de dimanche entre Warrenton et le commando des Boërs. L'intervention d'une batterie d'artillerie anglaise semble avoir infligé de lourdes pertes à l'adversaire.",
      "Les troupes britanniques se sont emparées de deux embarcations appartenant aux Boërs. À Pretoria, le 17 mars, il était annoncé qu'un bataillon boër avait subi des pertes lors d'un engagement d'une durée d'une demi-heure."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "Le Service de Deux Ans",
    "summary": "Le général de Galliffet, ministre de la Guerre, a consulté la commission parlementaire sur la réduction du service militaire. Le projet Delanne prévoit une diminution importante des effectifs de l'armée.",
    "paragraphs": [
      "Le général de Galliffet, ministre de la Guerre, s'est entretenu hier avec la commission parlementaire de l'armée concernant le projet de réduction du service militaire.",
      "Le général Delanne, chef d'état-major général, prévoit une diminution de 90 000 hommes, équivalant à la suppression de quatre corps d'armée. La commission a jugé nécessaire de procéder à un examen approfondi de cette question cruciale."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident dans une mine",
    "summary": "Un drame effroyable a frappé le charbonnage du Gouffre, à Chatelineau. Le mineur Notte a trouvé la mort suite à l'explosion prématurée d'une mine qu'il préparait, succombant instantanément à ses blessures.",
    "paragraphs": [
      "Charleroi, 21 mars : Un terrible accident vient de survenir dans les travaux du charbonnage du Gouffre, à Chatelineau. Un mineur, nommé Notte, s'étant approché d'une mine qu'il venait de préparer, celle-ci fit explosion et le malheureux fut tué par le souffle."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Brûlé vif",
    "summary": "La malveillance est à l'origine de l'incendie tragique qui a ravagé la ferme Herremans, à Liège-les-Puers. Le fils du fermier, empêché par la maladie de quitter les lieux, a péri carbonisé dans le brasier.",
    "paragraphs": [
      "Liège, 21 mars : Un incendie, causé par un acte de malveillance, a entièrement détruit la ferme Herremans, à Liège-les-Puers. Le fils de la famille, alité par la maladie, n'a pu s'échapper à temps et a été trouvé carbonisé dans les décombres."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Terrible explosion à Gand",
    "summary": "Une formidable explosion de gaz survenue dans les ateliers de M. Decroin, à Gand, a provoqué l'effondrement partiel du bâtiment et causé de graves blessures à l'ouvrier Gullinckx.",
    "paragraphs": [
      "Gand, 21 mars. — Une formidable explosion de gaz s'est produite hier, dans la chambre des machines de l'usine de M. Decroin. L'accident a occasionné l'effondrement des murs et de la toiture du bâtiment ; un ouvrier, nommé Gullinckx, a été grièvement blessé au cours du sinistre."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Vol au Musée des antiquités de Rouen",
    "summary": "Des malfaiteurs se sont introduits par effraction, à l'aide de fausses clefs, dans le Musée des antiquités de Rouen. Ils y ont dérobé des monnaies romaines et le précieux trésor de Cailly.",
    "paragraphs": [
      "Rouen, 21 mars. — Dans le courant de la nuit dernière, des malfaiteurs se sont introduits, à l'aide de fausses clefs, dans le Musée des antiquités. Ils ont réussi à dérober diverses pièces d'or, une bague mérovingienne, ainsi que plusieurs monnaies romaines et le célèbre « Trésor de Cailly », le tout représentant une valeur historique et matérielle considérable."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Actualités",
    "title": "Conseil Général de la Seine",
    "summary": "Le Conseil général de la Seine a délibéré sur le projet de conversion de la maison de Nanterre en hospice pour vieillards, ce qui nécessitera le transfert des détenus vers d'autres prisons.",
    "paragraphs": [
      "Au cours de la séance du 14 mars, le Conseil général de la Seine a longuement délibéré sur la transformation de la maison de Nanterre en une maison de retraite pour vieillards. Ce projet implique le transfert prochain des détenus actuellement hébergés vers d'autres établissements pénitentiaires."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Une agression à domicile",
    "summary": "Mme Klein, ménagère, a repoussé avec courage un agresseur ayant tenté de l'étrangler chez elle sous un faux prétexte. Le malfaiteur est activement recherché par les autorités.",
    "paragraphs": [
      "Une ménagère, Mme Klein, a été la cible d'une agression brutale à son domicile par un jeune homme qui, sous un faux prétexte, a tenté de l'étrangler avant de vouloir la poignarder.",
      "La victime, faisant preuve d'une grande présence d'esprit, a réussi à donner l'alerte. Les voisins, alertés par ses cris, ont contraint l'agresseur à prendre la fuite. La police est activement à la recherche du malfaiteur."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un jeune malfaiteur",
    "summary": "Surpris en flagrant délit alors qu'il agressait une passante, le nommé George Fiffiger a été appréhendé par les agents après une courte fuite et remis à la disposition de M. Rouffaud.",
    "paragraphs": [
      "George Fiffiger, un jeune délinquant, fut surpris alors qu'il tentait d'agresser une passante. Après une brève tentative de fuite, il fut rattrapé par les agents et immédiatement mis à la disposition de M. Rouffaud pour répondre de ses actes."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentative de vol à la Compagnie du Nord",
    "summary": "L'enquête sur le vol à la Compagnie du Nord progresse. Le commissaire Maurice, grâce au signalement précis fourni par M. Lejeune, a lancé ses inspecteurs aux trousses de l'individu repéré avec un sac suspect.",
    "paragraphs": [
      "Les recherches pour retrouver les auteurs du vol commis au préjudice de la Compagnie de chemin de fer du Nord se poursuivent avec activité. M. Lejeune, employé, a fourni un signalement précis d'un individu s'enfuyant avec un sac, ce qui a permis à M. Maurice, commissaire de police, de lancer aussitôt ses inspecteurs à sa recherche."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation de voleurs de denrées",
    "summary": "Deux jeunes individus de seize ans ont été interpellés après le vol de denrées alimentaires chez plusieurs commerçants. Une perquisition à leur domicile a permis de retrouver l'intégralité du butin.",
    "paragraphs": [
      "Plusieurs commerçants ont été victimes de vols de denrées commis par deux jeunes individus âgés de seize ans. Interpellés par les autorités, ils ont été immédiatement conduits au poste de police. Une perquisition effectuée dans leur chambre, située rue Broca, a permis de découvrir l'intégralité du butin."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Horrible mutilation d'un ouvrier",
    "summary": "À la scierie de la rue Frémicourt, M. Émile Pluviau a été atrocement mutilé par une raboteuse mécanique. Malgré la gravité de sa blessure, il a rejoint l'hôpital où les médecins tentent de le soigner.",
    "paragraphs": [
      "M. Émile Pluviau, un entrepreneur, a eu la main broyée et les doigts arrachés par une raboteuse mécanique dans une scierie de la rue Frémicourt, alors qu'il supervisait un ouvrage. Malgré la gravité de sa blessure, il a eu le courage de se rendre par ses propres moyens à l'hôpital, où les médecins tentent par tous les moyens d'éviter une intervention chirurgicale majeure."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Sanglante dispute entre ouvriers",
    "summary": "Une partie de jeu dans un débit de boisson du boulevard de Belleville a dégénéré : Jules Petit a poignardé son adversaire, Louis Ligeron, dont l'état de santé est jugé très préoccupant par les médecins.",
    "paragraphs": [
      "Une dispute survenue à propos d'une partie de jeu dans un débit de boisson du boulevard de Belleville a tragiquement dégénéré. Jules Petit a porté un coup de couteau dans le dos de son adversaire, Louis Ligeron, dont l'état de santé est actuellement jugé très grave par le corps médical."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Rixe entre blanchisseuses",
    "summary": "Une violente altercation a éclaté rue Marcadet entre deux blanchisseuses. Louise Caron a été grièvement blessée à la tête lors de la rixe et sa protagoniste a été arrêtée par les gardiens de la paix.",
    "paragraphs": [
      "Rue Marcadet, une explication entre deux jeunes ouvrières blanchisseuses, Louise Caron et Émilie Dupuis, a soudainement dégénéré en une bataille sanglante. Louise Caron a été grièvement blessée à la tête lors de cette rixe. La coupable de cette agression a été aussitôt arrêtée par les gardiens de la paix."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Double suicide à Boulogne-sur-Seine",
    "summary": "Un commerçant et une jeune femme ont été retrouvés morts dans une chambre d'hôtel à Boulogne-sur-Seine, la porte scellée de l'intérieur, après avoir mis fin à leurs jours ensemble.",
    "paragraphs": [
      "Un commerçant marié et une jeune fille, désespérés par leur situation sentimentale, se sont donné la mort ensemble dans un hôtel-restaurant. Les corps ont été découverts dans une chambre, scellée de l'intérieur par les malheureux."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Faits divers régionaux",
    "summary": "Une série d'événements tragiques secoue la région parisienne : entre cambriolages, accidents mortels sur chantiers, incendies et suicides, la chronique judiciaire est chargée.",
    "paragraphs": [
      "Un cambriolage a été perpétré dans une villa de la rue du Rech. On signale également le suicide par noyade d'un entrepreneur à Courbevoie et celui d'un marchand de bière à Asnières. Un accident grave est survenu sur un chantier à Nanterre, frappant l'ouvrier Jules Desplats.",
      "À Saint-Ouen, deux employés, Pierre Varcher et Nicolas Oustro, ont été arrêtés pour des détournements de fonds commis au préjudice de leur patron.",
      "Un incendie important s'est déclaré rue du Moulin à Vincennes, sans faire de victimes, bien que causant des dégâts matériels notables.",
      "On annonce l'arrestation, à Saint-Mandé, de l'individu surnommé « l'homme au bras coupé », auteur de plusieurs agressions chez des particuliers.",
      "Le cadavre de M. Ludovic Bonteloup a été découvert à Portvillez ; les causes du décès restent à déterminer par l'enquête.",
      "À Dourdan, un incendie dans un bois appartenant à M. de Saulty a détruit deux hectares de taillis.",
      "Un nouveau cambriolage a été constaté au domicile des époux Aubry à Lagny.",
      "Une agression suivie du vol de 180 francs a été commise contre le nommé Félix Roth à Fontainebleau.",
      "Enfin, on déplore le suicide d'Alfred Gauthier à Coulommiers ainsi qu'un accident grave dont a été victime René Thominet à La Ferté-Gaucher."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Tribunaux",
    "title": "Procès en correctionnelle",
    "summary": "Le nommé Lévy, dit « Milo », a été jugé pour escroquerie. Si le tribunal a rejeté ses contestations, son complice Rosenthal a écopé de six mois de prison pour infraction à un arrêté d'interdiction de séjour.",
    "paragraphs": [
      "Lévy, dit « Milo », inculpé dans l'affaire de la rue de Malte, a comparu devant le tribunal pour escroquerie. Il a vainement contesté la compétence de la juridiction, mais sa demande a été rejetée. Son complice, Rosenthal, a été acquitté du chef d'escroquerie, mais a été condamné à six mois de prison pour infraction à une interdiction de séjour."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Tribunaux",
    "title": "Arrêt concernant la catastrophe de Juvisy",
    "summary": "La cour d'appel de Paris a statué sur l'accident ferroviaire de Juvisy. L'aiguilleur Mougeaux est reconnu coupable, mais le tribunal lui accorde le bénéfice du sursis au regard des circonstances.",
    "paragraphs": [
      "La cour d'appel de Paris a rendu son arrêt concernant l'accident ferroviaire de Juvisy, annulant le jugement précédent. L'aiguilleur Mougeaux a été reconnu coupable, mais a bénéficié de circonstances atténuantes ainsi que d'une condamnation avec sursis."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Tribunaux",
    "title": "Le procès d'Aciarito",
    "summary": "Le procès d'Aciarito et de ses complices, accusés de tentative d'assassinat sur la personne du roi d'Italie, s'est ouvert à Teramo sous une surveillance policière renforcée.",
    "paragraphs": [
      "Le procès d'Aciarito et de ses complices, accusés d'avoir fait feu sur le roi d'Italie, a débuté à Teramo sous une surveillance policière des plus strictes."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Chronique",
    "title": "Précautions contre l'incendie à l'Exposition",
    "summary": "La commission supérieure des théâtres a inspecté les bâtiments de l'Exposition, exigeant des mesures accrues de protection contre l'incendie, notamment par l'installation de portes de secours supplémentaires.",
    "paragraphs": [
      "La commission supérieure des théâtres a visité les divers établissements de l'Exposition pour s'assurer du respect rigoureux des consignes de sécurité et de protection contre l'incendie, exigeant notamment l'ouverture et l'aménagement de portes de secours supplémentaires pour le public."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Théâtres",
    "title": "Courrier des théâtres",
    "summary": "L'auteur Edmond Rostand, atteint d'une congestion, retient l'attention. Le théâtre de la Renaissance prévoit son transfert, tandis que la pièce Michel Strogoff célèbre bientôt sa millième représentation.",
    "paragraphs": [
      "Le célèbre auteur Edmond Rostand est actuellement atteint d'une congestion pulmonaire. Diverses matinées de charité sont organisées à l'occasion de la mi-carême.",
      "Le théâtre de la Renaissance prendra possession du théâtre de la République en avril prochain, tandis que le drame Michel Strogoff atteindra sous peu sa millième représentation."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Fiction",
    "title": "Suzanne et le vicomte de Vrigny",
    "summary": "Dans une lettre émouvante, Suzanne avoue au vicomte de Vrigny l'impossibilité de leur union. Malgré un amour partagé, le poids des conventions et les interdits religieux demeurent une barrière infranchissable.",
    "paragraphs": [
      "Charlotte, votre messagère, est arrivée à la Coudraie pour m'apporter ces lignes que je n'oublierai jamais, quand bien même je devrais passer de longues années dans ce qui est devenu pour moi tout à coup une vallée de larmes. Oui, ce me serait une grande joie de pouvoir vous dire, oh ! pas maintenant, plus tard, quand le temps aurait passé sur ces douleurs en ramenant le calme dans mon âme. Je suis fière de vous avoir inspiré de tels sentiments d'affection ; oui, je m'enorgueillirai de porter votre nom ; oui, mon cher Jean, j'ai déjà pour vous une de ces amitiés durables, destinées à ne finir qu'avec nous, et qui deviendra aisément un attachement plus tendre, entier et sans réserve.",
      "Mais, mon ami, je ne suis pas maîtresse d'agir comme je le voudrais, et vous l'avez compris. Le jugement qui m'a déliée de mes engagements ne saurait être ratifié par la religion. Si nous allions frapper en sortant de la mairie aux portes de l'église, elles demeureraient impitoyablement fermées devant nous. C'est là l'obstacle, la barrière infranchissable.",
      "Voilà, mon ami, tout ce que je peux vous dire en ajoutant seulement deux lignes pour vous remercier du fond du cœur et vous adresser cette prière : oubliez-moi, oubliez cette Suzanne à laquelle vous avez la générosité d'offrir votre nom, oubliez la femme meurtrie, la mère au cœur souffrant où il n'y a de place en ce moment que pour le deuil et les regrets ! Mais laissez-lui votre amitié ! Ne voyez en elle que la sœur aimante et dévouée qui ne cessera d'avoir pour vous le plus profond attachement et qui se souviendra toujours des paroles si douces à son âme qui ranimeraient en elle l'espérance si jamais, après une si grande infortune, elle y pouvait refleurir. Votre affectionnée, Suzanne.",
      "La brune Charlotte s'empressa de se rendre à cette invitation et, à mesure qu'elle avançait vers la fin de la lettre, son front se rembrunissait. Ainsi, son amie aurait aimé Jean de Vrigny ? Pouvait-elle l'avouer avec plus de franchise ? Et ce Dufresne maudit demeurait encore un obstacle entre eux, et cet obstacle ne pouvait être aplani.",
      "Mon cher vicomte, vous ne doutez pas de l'empressement que j'ai mis à remplir vos instructions. Dès la réception de vos deux missives que j'ai lues, ainsi que vous m'en donniez l'autorisation, j'ai pris mon courage à deux mains et je me suis dirigée à travers champs vers les lieux où respire votre adorée, c'est-à-dire vers la Coudraie où elle s'est réinstallée. Suzanne ne m'a pas dissimulé un instant ses sentiments pour vous. Elle a eu une minute d'extase, et des larmes de joie sont venues à ses beaux yeux. Puis, la réflexion est revenue : ce bonheur rêvé était impossible. Vous saurez pourquoi. Mille affectueux compliments, Charlotte de Glatigny."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Bulletin commercial du mercredi 21 mars",
    "summary": "La halle au blé affiche une activité calme. Les prix des céréales indigènes se maintiennent fermement, malgré une demande mesurée de la part des meuniers.",
    "paragraphs": [
      "Halle au blé : Offres assez nombreuses en blés indigènes et prix tenus fermes ; la meunerie a des besoins, mais, cependant, elle ne paraissait pas empressée aux achats. Les affaires, par suite, ont été calmes.",
      "Les blés blancs valaient de 19,75 à 20,50 francs et les roux de 19 à 19,50 francs les 100 kilos, gare Paris. La culture du rayon de Paris tenait ses blés de 20 à 20,25 francs selon la qualité.",
      "Issues : On cote le gros son de 13 à 13,50 francs, et les recoupettes de 16,50 à 17 francs les 100 kilos, gare Paris."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Agriculture",
    "title": "Sommaire de L'Agriculture Nouvelle",
    "summary": "Sommaire de la revue L'Agriculture Nouvelle, présentant des articles sur les expositions agricoles, les techniques de semences, l'horticulture et le concours du Bantam-Club.",
    "paragraphs": [
      "Agriculture : J. Maurion, Les Expositions aux Tuileries. Échos agricoles.",
      "Prévisions du temps : Les cliniques d'agriculture.",
      "Préparation des semences : Lucien Cornet.",
      "Horticulture : S. Mottet, Culture des Nepenthes.",
      "Élevage : Louis Héclier, Le Concours du Bantam-Club."
    ]
  }
];
