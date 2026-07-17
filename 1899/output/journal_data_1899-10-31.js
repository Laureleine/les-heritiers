// Date: 1899-10-31
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-10-31 (Version Restaurée, 26 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Politique",
    "title": "La Chambre d'accusation et l'affaire Déroulède",
    "summary": "La Chambre d'accusation a ordonné le renvoi de Paul Déroulède pour complot contre l'État. Tandis que des non-lieux sont prononcés, Jules Guérin reste gravement inculpé et des sursis visent les complices en fuite.",
    "paragraphs": [
      "La Chambre d'accusation a décidé, par sept voix contre deux, qu'il y avait lieu de poursuivre Déroulède et ses complices pour complot contre la sûreté de l'État.",
      "La commission a suspendu la séance pour examiner les cas particuliers des inculpés. Elle a retenu contre Jules Guérin les charges de complot, détention d'armes, rébellion et tentative d'assassinat avec préméditation.",
      "Des ordonnances de non-lieu ont été rendues en faveur de plusieurs inculpés, dont MM. Thiébaut, de Montjoupet, de Parstaval et Girard. Un sursis a été prononcé pour MM. Marcel-Habert, de Lur-Saluces et de Vaux, actuellement en fuite."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Justice",
    "title": "La question de compétence de la Haute-Cour",
    "summary": "Le débat sur la compétence de la Haute-Cour s'intensifie. La défense conteste la légitimité des poursuites, tandis que des avocats dénoncent la disparition de pièces cruciales du dossier.",
    "paragraphs": [
      "M. Devin, avocat de M. de Ramel, a déposé une note contestant la compétence de la Haute-Cour en matière de complot, en s'appuyant sur les textes constitutionnels de 1848 et de 1875.",
      "De leur côté, les avocats de M. Brunet, MM. Jacquemond et Jarre, ont protesté contre la distraction de pièces du dossier par M. de Vallès, affirmant que la commission ne peut plus juger l'affaire en connaissance de cause."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Nouvelles coloniales",
    "title": "Incident à Kouang-Tchéou-Wan",
    "summary": "Des rumeurs d'affrontements entre soldats français et troupes chinoises circulent concernant la baie de Kouang-Tchéou-Wan. Le ministère de la Marine attend une confirmation officielle avant toute déclaration.",
    "paragraphs": [
      "Des informations font état de soldats français mis hors de combat par des réguliers chinois dans la baie de Kouang-Tchéou-Wan. Toutefois, le ministère de la Marine indique n'avoir reçu aucun télégramme confirmant cet incident.",
      "Les délimitations de la baie, concédée à la France, n'ont jamais été définitivement arrêtées, causant des conflits récurrents avec les habitants. Le gouvernement chinois a récemment désigné le maréchal Sou pour régler le tracé de la frontière."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Nouvelles coloniales",
    "title": "Les intentions de Rabah et le Ouadaï",
    "summary": "Le chef soudanais Rabah convoite le Ouadaï, puissance majeure d'Afrique centrale. Une telle expédition pourrait menacer l'influence française et compliquer la stabilité de la région du lac Tchad.",
    "paragraphs": [
      "Rabah, sultan conquérant au Soudan, nourrirait des intentions guerrières pour annexer le Ouadaï. Son parcours, d'ancien esclave à chef de bandes redouté, l'a mené à dominer le Bornou.",
      "Le Ouadaï, situé à l'est du lac Tchad, est l'un des États les plus puissants de l'Afrique centrale. Une telle expédition de Rabah se heurterait à de grandes difficultés face aux puissances européennes et aux tribus locales, risquant de compromettre durablement l'établissement de l'influence française dans la région."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "International",
    "title": "Le drame de Meyerling",
    "summary": "Le remariage de l'archiduchesse Stéphanie réveille les mystères de Meyerling. Une thèse sombre suggère que l'archiduc Rodolphe aurait découvert un lien de parenté incestueux avec Mary Vetsera avant le drame.",
    "paragraphs": [
      "Le prochain mariage de l'archiduchesse Stéphanie remet en lumière le mystérieux drame de Meyerling. Une nouvelle version des faits, rapportée par la presse étrangère, suggère que l'empereur aurait révélé à l'archiduc Rodolphe que Mary Vetsera était sa propre fille.",
      "Face à cette révélation sur la nature incestueuse de sa liaison, l'archiduc aurait vu ses espoirs anéantis, menant au double suicide qui a mis fin à cette relation tragique."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Faits divers",
    "title": "Mariage princier à Kingston-on-Thames",
    "summary": "Le mariage de la princesse Isabelle et du prince Jean d'Orléans a été célébré à Kingston-on-Thames en présence de la princesse de Galles et de la haute aristocratie européenne, témoignant de l'attachement à la famille.",
    "paragraphs": [
      "Le mariage de la princesse Isabelle et du prince Jean d'Orléans a été célébré hier, en la chapelle catholique de Kingston-on-Thames. La cérémonie s'est déroulée en présence de la princesse de Galles et de nombreux membres de l'aristocratie européenne, venus témoigner de leur attachement à la maison d'Orléans."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Faits divers",
    "title": "Drame fratricide à Blankenberghe",
    "summary": "Un tragique fait divers s'est produit à Blankenberghe : à la suite d'un différend trivial concernant un chat, un jeune homme de dix-huit ans a mortellement poignardé son frère aîné. Le meurtrier a été écroué.",
    "paragraphs": [
      "À Blankenberghe, un drame familial s'est noué lors d'une violente dispute. Jean Dierickx, âgé de vingt-quatre ans, a été mortellement blessé d'un coup de couteau porté par son frère Charles, âgé de dix-huit ans, à la suite d'un différend trivial concernant un chat.",
      "Le meurtrier a été immédiatement appréhendé et écroué à la maison d'arrêt par les autorités locales."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Faits divers",
    "title": "Crime de jalousie à Bruxelles",
    "summary": "Une femme a été assassinée en pleine rue en Flandre orientale. L'auteure du crime, une femme âgée poussée par une jalousie dévorante, a pris la fuite. Une enquête est en cours pour la retrouver.",
    "paragraphs": [
      "Une femme a été assassinée en pleine rue, au cœur de la Flandre orientale. La coupable, une femme âgée, a poignardé sa victime par jalousie avant de prendre la fuite.",
      "L'enquête ouverte par les forces de l'ordre est en cours pour retrouver l'auteure de cet acte criminel."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "International",
    "title": "Élections en Suisse et enseignement en Espagne",
    "summary": "Les élections au Conseil national suisse se sont terminées sans changement majeur. Parallèlement, à Valence, un meeting réclame l'instauration de l'enseignement obligatoire pour la jeunesse espagnole.",
    "paragraphs": [
      "Les élections au Conseil national suisse se sont déroulées sans aucun incident notoire, les résultats ne marquant aucun changement significatif dans la représentation des partis.",
      "Par ailleurs, à Valence, un meeting d'envergure a réuni de nombreux citoyens réclamant l'instauration de l'enseignement obligatoire pour la jeunesse espagnole."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Chronique",
    "title": "Le culte des morts",
    "summary": "À l'approche de la fête des Trépassés, méditation sur la persistance du culte des morts. Des rites latins ancestraux aux superstitions bretonnes, le respect dû à la mémoire des disparus demeure une constante humaine.",
    "paragraphs": [
      "À l'approche de la fête des Trépassés, il convient de se livrer à une réflexion sur l'origine et le sens profond du culte des morts. Cette tradition souligne l'attachement indéfectible de l'humanité à la mémoire de ses disparus.",
      "Des pratiques antiques héritées des Latins jusqu'aux superstitions les plus tenaces observées en Bretagne, le respect dû à la mort demeure une constante qui traverse les âges et les cultures."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits divers",
    "title": "Sanglante bagarre à Lyon",
    "summary": "Une rixe sanglante dans un débit de boisson de la rue Paul-Bert à Lyon a tourné au drame : un emballeur a tiré sur un militaire. La victime est dans un état désespéré et l'agresseur a été arrêté.",
    "paragraphs": [
      "Une sanglante bagarre entre civils et militaires, survenue hier dans un débit de boissons de la rue Paul-Bert, a viré au drame. Au cours de l'altercation, un emballeur nommé Eugène Seignol a fait usage d'une arme à feu sur le soldat Emmanuel Moreau avant de prendre la fuite.",
      "Transporté d'urgence à l'hôpital, le militaire se trouve dans un état jugé désespéré par les médecins. Quant au meurtrier, activement recherché par les forces de l'ordre, il a finalement été arrêté peu de temps après les faits."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits divers",
    "title": "Drame conjugal à Dunkerque",
    "summary": "À Dunkerque, un maître peintre séparé de sa femme a tenté de l'assassiner avant de se défenestrer. Grièvement blessé, le malheureux est actuellement hospitalisé sous surveillance médicale.",
    "paragraphs": [
      "Un drame conjugal vient d'ensanglanter Dunkerque. Maurice Devoghel, un maître peintre, a tenté de mettre fin aux jours de son épouse, dont il était séparé depuis quelque temps.",
      "Après avoir commis son forfait, l'homme a retourné son arme contre lui-même avant de se jeter par une fenêtre du domicile. Grièvement blessé, il a été transporté d'urgence à l'hôpital où il demeure actuellement sous surveillance médicale."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Justice",
    "title": "Affaire du parricide à Saint-Claude",
    "summary": "L'enquête sur l'assassinat de M. Duparchy progresse à Saint-Claude. Son fils, étudiant à Paris, a été interpellé par la gendarmerie en tant que suspect principal dans cette affaire criminelle.",
    "paragraphs": [
      "L'affaire du crime perpétré près de Saint-Claude connaît de nouveaux développements. M. Duparchy a été découvert assassiné dans son parc, victime d'une agression brutale dont les circonstances restent à éclaircir.",
      "Soupçonné d'avoir commis ce crime odieux, son fils, qui poursuivait des études à Paris, a été arrêté par la gendarmerie nationale. Il est désormais interrogé pour déterminer son rôle exact dans cette affaire."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Chronique",
    "title": "Échos et nouvelles",
    "summary": "Le Président de la République multiplie les audiences. Par ailleurs, M. Victor Peytral est élu conseiller général, et M. Baudin procède à l'inauguration solennelle des tramways de la ville de Troyes.",
    "paragraphs": [
      "Le Président de la République a reçu, au cours de la journée, diverses personnalités venues l'entretenir de sujets d'intérêt public. L'activité gouvernementale demeure dense en cette fin de mois.",
      "Par ailleurs, nous apprenons que M. Victor Peytral vient d'être élu conseiller général des Hautes-Alpes à l'âge de vingt-et-un ans. En province, M. Baudin a procédé avec succès à l'inauguration officielle des nouvelles lignes de tramways de la ville de Troyes."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Justice",
    "title": "Le crime de Choisy-le-Roi devant la Cour d'assises",
    "summary": "Georges Sautton comparaît aux assises pour le meurtre de la petite Louise Martin. Stupéfaction à l'audience : l'accusé se rétracte et nie les faits, malgré ses aveux initiaux lors de l'instruction.",
    "paragraphs": [
      "L'affaire du crime de Choisy-le-Roi est portée aujourd'hui devant la Cour d'assises. Georges Sautton comparaît pour répondre du meurtre de la petite Louise Martin, âgée de huit ans, commis en avril dernier dans des conditions qui avaient suscité l'émoi général.",
      "L'accusé, qui avait pourtant formellement avoué les faits lors de l'instruction, a stupéfié l'auditoire en se rétractant à la barre, malgré les charges accablantes et les témoignages recueillis contre lui."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'assassinat de la petite Louise Martin",
    "summary": "Au terme d'un procès éprouvant, Georges Sautton a été condamné aux travaux forcés à perpétuité pour le viol et le meurtre de la petite Louise Martin, commis le 28 mars dernier.",
    "paragraphs": [
      "La petite Louise Martin, enfant douce et craintive, allait, comme tous les enfants de sa condition, faire des commissions pour ses parents.",
      "Le 28 mars, les malheureux parents éprouvèrent une vive appréhension quand, vers neuf heures, ils ne virent pas revenir leur enfant qu'ils avaient envoyée chercher de l'huile.",
      "M. le Président rappelle alors les lugubres recherches faites par M. et Mme Martin dans la nuit pour retrouver Louise, la découverte faite par le malheureux père près d'une meule : d'abord un des chaussons de sa fille, puis les burettes qu'elle portait pour rapporter l'huile et le vinaigre nécessaires au ménage.",
      "Georges Sautton, l'accusé, demeure impassible en écoutant ces tristes détails.",
      "Le cadavre de la petite Louise ne fut retrouvé que le 2 avril, jour de Pâques, dans un trou profond de trois mètres cinquante. L'autopsie démontra que la pauvre petite avait été violée, que son agresseur lui avait fortement appuyé la main sur la gorge pour qu'elle ne criât pas, puis qu'il l'avait jetée encore vivante à l'eau.",
      "Lors de l'audience, M. le Président confronte l'accusé avec ses aveux faits à la Sûreté. Sautton se rétracte et nie toute implication.",
      "M. le Président donne lecture des aveux circonstanciés faits par Sautton à l'instruction, où il avouait le crime. Sautton tente alors de fournir des explications confuses, prétendant avoir agi sous la contrainte des questions.",
      "M. le Président conclut que l'accusé a savamment combiné son affaire pour éviter d'être entendu par les habitants des maisons voisines.",
      "Le père, M. Martin, témoigne avec émotion, persuadé que sa fille n'aurait suivi personne. Après le dépôt de Mme Martin et des témoins, les docteurs confirment que Sautton n'est pas fou.",
      "L'avocat général Breeault requiert la peine de mort. Le jury condamne Sautton aux travaux forcés à perpétuité."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Faits Divers",
    "title": "Acte de courage",
    "summary": "M. Jules Garé, plombier, a fait preuve d'une bravoure exemplaire en maîtrisant un cheval emballé boulevard Rochechouart, malgré de sérieuses blessures reçues lors de son intervention.",
    "paragraphs": [
      "Vers onze heures et demie, hier matin, un cheval attelé à une voiture de place s'est soudainement emballé en face du numéro 4 du boulevard Rochechouart.",
      "À l'angle de la rue Hermel et de la rue Joseph-Dijon, M. Jules Garé, plombier, s'est jeté résolument à la tête du cheval. Bien que traîné sur une cinquantaine de mètres et grièvement blessé aux bras et aux jambes, l'ouvrier n'a pas lâché les rênes jusqu'à la maîtrise complète de l'animal.",
      "Après avoir reçu les premiers soins, le courageux ouvrier a été reconduit à son domicile."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un cycliste écrasé",
    "summary": "Tragique accident boulevard Voltaire : M. Achille Surenne, renversé par un tramway après avoir été serré par deux voitures, a succombé à ses blessures. Le cocher responsable a pris la fuite.",
    "paragraphs": [
      "Vers onze heures et demie du soir, hier, M. Achille Surenne, employé de commerce, revenait à bicyclette de la campagne lorsqu'il fut serré entre deux voitures boulevard Voltaire.",
      "Projeté sous les roues d'un tramway, il a été relevé grièvement blessé au crâne et a expiré malgré les soins prodigués.",
      "Le cocher auteur de l'accident a pris la fuite."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Cambrioleur blessé",
    "summary": "Surpris par des locataires rue Notre-Dame-de-Lorette, un cambrioleur a pris la fuite par les toits, laissant derrière lui des traces de sang après une chute ou une blessure lors de son évasion.",
    "paragraphs": [
      "La nuit dernière, rue Notre-Dame-de-Lorette, des locataires ont surpris un individu dans des appartements inhabités. Le cambrioleur s'est enfermé dans les water-closets avant de s'enfuir par une lucarne et par les toits.",
      "Dans sa descente périlleuse, il s'est grièvement blessé, laissant des traces de sang relevées par M. Cornette, commissaire de police du quartier Saint-Georges."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie rue des Gravilliers",
    "summary": "Un début d'incendie s'est déclaré hier soir dans un débit de vins de la rue des Gravilliers. Si le sinistre fut vite maîtrisé, le fils du commerçant a été gravement brûlé.",
    "paragraphs": [
      "Hier soir, un incendie s'est déclaré dans l'établissement de M. Hanager, marchand de vins, 49, rue des Gravilliers.",
      "Le feu a été facilement circonscrit, mais le fils du commerçant a été grièvement brûlé au visage et aux mains."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Acquittements dans le Pas-de-Calais",
    "summary": "La Cour d'assises du Pas-de-Calais a prononcé hier l'acquittement de M. de Lattaignant de Ledinghen et de M. de Legorgue de Rosny, poursuivis pour des faits présumés de faux et usage de faux en état-civil.",
    "paragraphs": [
      "La Cour d'assises du Pas-de-Calais a acquitté hier M. de Lattaignant de Ledinghen et M. de Legorgue de Rosny, accusés de faux et usage de faux concernant une falsification d'état-civil."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Social",
    "title": "Les grèves dans le Doubs",
    "summary": "Le Président du Conseil, M. Waldeck-Rousseau, s'est entretenu avec le député Coutant concernant la grève des établissements Japy. À Montbéliard et Besançon, des issues favorables sont en cours de discussion.",
    "paragraphs": [
      "M. Waldeck-Rousseau, président du Conseil, a reçu M. Coutant, député, au sujet de la grève des établissements Japy.",
      "À Montbéliard, il y a espoir d'une issue favorable grâce à une augmentation de salaire et la suppression des amendes. La population reste calme.",
      "À Besançon, la grève des monteurs de bottes a été votée à l'unanimité."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans la banlieue parisienne",
    "summary": "Une série d'incidents tragiques et criminels secoue la banlieue : blessures à l'arme blanche, pillages, noyades accidentelles, découvertes de cadavres et accidents domestiques marquent la chronique locale.",
    "paragraphs": [
      "Levallois-Perret : Louis Pilas, électricien, a été trouvé gravement blessé de coups de couteau près de son domicile.",
      "Puteaux : Un diorama a été pillé. Louis Robin, un rôdeur, a été arrêté.",
      "Villeneuve-la-Garenne : M. Victor Dabrenne, comptable, s'est noyé en pêchant.",
      "Saint-Ouen : Jean Pradels, charretier, est décédé après une chute accidentelle lors d'un déchargement. Un ouvrier verrier, Gaston Cherrot, a été grièvement blessé par sa maîtresse lors d'une dispute.",
      "Aubervilliers : Le cadavre d'un homme d'une cinquantaine d'années a été retiré du canal de Saint-Denis.",
      "Épinay : Un obus chargé a été découvert dans une maison.",
      "Plaisance-Saint-Denis : Jean Drelier, un apprenti ébéniste de quinze ans, a été retrouvé pendu.",
      "Neuilly-Plaisance : Un cadavre à moitié carbonisé a été découvert sur les fours à plâtre."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Police secrète",
    "summary": "Isidore Ledru, informateur aux mœurs discutables, manœuvre entre le milieu criminel et le commissariat de police pour monnayer des renseignements sur un cambriolage survenu à Neuilly.",
    "paragraphs": [
      "Resté seul, Isidore Ledru eut un sourire crispé. « Ah ! ah ! murmurait-il, elle est bonne, celle-là. Ainsi donc, la Cathelin va se remarier avec le millionnaire, et la drôlesse ne m'a rien fait savoir ! »",
      "Il se rendit ensuite vers le quartier des Halles pour déjeuner. Une heure sonnait à l'église Saint-Eustache lorsqu'il quitta la table, laissant un riche pourboire au garçon qui le servait quotidiennement.",
      "Dans la rue Montmartre, il sembla hésiter un instant avant de poursuivre son chemin vers le boulevard. Il s'arrêta devant une maison ornée d'une lanterne rouge portant l'inscription : « BUREAU ET COMMISSARIAT DE POLICE ».",
      "Ledru pénétra dans les lieux et demanda à parler au secrétaire du commissaire. Dans un cabinet au papier vert humide et délabré, il retrouva le fonctionnaire au monocle et aux moustaches en crocs.",
      "« Je viens vous apporter un renseignement, fit Isidore. Il y a eu cette nuit un vol commis dans une maison inhabitée de Neuilly, chez une dame Beaumont. » Le secrétaire confirma la plainte.",
      "Ledru ajouta : « Le cambrioleur, un certain Alphonse dit la Coqueluche des Dames, est venu me proposer d'acheter les titres dérobés. » Malgré les réticences et les soupçons de recel émis par le secrétaire, Ledru affirma agir comme un auxiliaire bénévole, avant de promettre de révéler la suite de ses informations."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Actualités - Cérémonies",
    "title": "Cérémonies patriotiques et anniversaires",
    "summary": "Le 29e anniversaire de la bataille de Beaune-la-Rolande sera commémoré par une série de cérémonies patriotiques et l'inauguration de monuments en hommage aux soldats et victimes civiles de 1870.",
    "paragraphs": [
      "À l'occasion du 29e anniversaire de la bataille de Beaune-la-Rolande, des cérémonies patriotiques auront lieu aux dates ci-dessous.",
      "À Boiscommun, le dimanche 19 novembre : inauguration de deux plaques à la mémoire du capitaine d'artillerie Demazeau et des soldats Alfred Beaudoin et Jules-Eugène.",
      "À Lorcy, le dimanche 26 novembre ; à Juranville, le dimanche 26 novembre ; à Beaune-la-Rolande, le mardi 28 novembre.",
      "À Batilly, le dimanche 3 décembre ; à Nanoray, le dimanche 3 décembre ; à Barville, le dimanche 3 décembre, inauguration d'un monument à la mémoire du sergent Abel Vaillier et des civils victimes des Allemands en 1870.",
      "À Montliard, le dimanche 10 décembre ; à Nibelle, le dimanche 10 décembre."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Vie professionnelle",
    "title": "Réunion du Syndicat des employés d'octroi",
    "summary": "Le Syndicat des employés d'octroi de la banlieue parisienne convie ses adhérents à une assemblée générale le 2 novembre à 20 heures, salle de l'Harmonie, sous la présidence d'honneur du député M. Gervais.",
    "paragraphs": [
      "Le Syndicat des employés d'octroi de la banlieue de Paris informe ses adhérents qu'une réunion générale se tiendra le jeudi 2 novembre, à huit heures du soir, en la salle de l'Harmonie, rue d'Angoulême, à Paris. Cette assemblée sera placée sous la présidence d'honneur de M. Gervais, député de la Seine."
    ]
  }
];
