// Date: 1900-11-08
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-11-08 (Version Restaurée, 13 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide de Étienne Latwille",
    "summary": "Le corps d'Étienne Latwille, maçon de trente-six ans domicilié à Morêt, a été découvert hier dans les eaux de la Seine près de Montereau. Le défunt avait informé son épouse de sa funeste intention par lettre.",
    "paragraphs": [
      "On a retiré hier de la Seine, sur le territoire de Montereau, le corps du nommé Étienne Latwille, maçon, âgé de trente-six ans, demeurant à Morêt. L'homme avait adressé à sa femme une lettre dans laquelle il lui annonçait son intention de se suicider."
    ]
  },
  {
    "id": 2,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide de M. Luer",
    "summary": "À La Brosse-Montceaux, M. Luer, cultivateur âgé de 40 ans, s'est donné la mort par arme à feu hier. L'ivresse est suspectée d'être à l'origine de ce geste fatal.",
    "paragraphs": [
      "M. Luer, de Rossignol, cultivateur à La Brosse-Montceaux, âgé de 40 ans, s'est tiré hier un coup de fusil dans la tête. La mort a été instantanée. L'ivresse serait la cause de ce suicide."
    ]
  },
  {
    "id": 3,
    "page": 3,
    "category": "Les Tribunaux",
    "title": "Un drame à la porte Saint-Ouen",
    "summary": "Accusé du meurtre de sa maîtresse, Louise Hée, lors d'une dispute violente, Sibrodor a été condamné par les assises à trois ans de prison après une requalification des faits en coups et blessures mortels.",
    "paragraphs": [
      "Le 15 mai dernier, un drame se déroulait à la porte Saint-Ouen. Un jeune homme de vingt-trois ans, nommé Sibrodor, d'origine belge, frappait au cours d'une dispute sa maîtresse, Louise Hée, de seize coups de pied au crâne.",
      "La malheureuse fut horriblement blessée, à tel point que sa cervelle s'éliminait par les plaies. Transportée à l'hôpital, elle ne tarda pas à succomber. Sibrodor a comparu hier devant la cour d'assises. Pour sa défense, il a déclaré qu'il adorait sa maîtresse et que c'est la jalousie, une jalousie féroce, qui l'avait poussé à commettre cet assassinat.",
      "Les jurés ont été convaincus, surtout après avoir entendu les explications de son défenseur, M. Henri Robert. Aussi ont-ils écarté les questions de meurtre pour ne retenir que le délit de coups et blessures ayant occasionné la mort sans intention de la donner.",
      "Sibrodor doit s'estimer heureux d'en être quitte avec trois ans de prison."
    ]
  },
  {
    "id": 4,
    "page": 3,
    "category": "La Température",
    "title": "Bulletin météorologique",
    "summary": "En ce jeudi 8 novembre, sixième jour de l'automne, une amélioration des conditions atmosphériques a permis le retour d'une journée ensoleillée malgré une baisse notable des températures dans l'ouest.",
    "paragraphs": [
      "Jeudi 8 novembre, sixième jour de l'automne. Lever du soleil à 7h14, coucher à 4h42.",
      "Un heureux changement de temps s'est produit hier ; le soleil, réapparu dans un ciel sans brume, nous a donné une délicieuse journée.",
      "La température a baissé dans l'ouest de l'Europe."
    ]
  },
  {
    "id": 5,
    "page": 3,
    "category": "Les Sports",
    "title": "La course de consommation",
    "summary": "La compétition automobile de consommation a connu un vif succès avec 91 participants. Le comte de Chadseloup-Laubat s'est illustré par sa performance, tandis qu'un grave accident a frappé M. Bouchet durant l'épreuve.",
    "paragraphs": [
      "Le concours de voitures automobiles, dit de consommation, qui s'est disputé hier, favorisé par un temps inespéré fait de soleil et de froid modéré, a obtenu un succès complet. Sur plus d'une centaine d'engagés, 91 voitures sont parties.",
      "À signaler tout d'abord une modification aux conditions de l'épreuve : le parcours a été réduit à 70 kilomètres (Suresnes-Meulan-Suresnes). Tous les concurrents sans exception ont accompli le parcours en entier.",
      "Giraud, sur une 24 chevaux, a effectué les 70 kilomètres en 1h 44' avec 13 litres d'essence. Le comte de Chadseloup-Laubat, également sur une 24 chevaux, a été plus rapide et a moins consommé : 1h 43' avec 9 litres.",
      "M. Mors, sur une 12 chevaux, a employé un peu plus de 6 litres. Le record appartient au motocycle Bardin, qui, pilotant un quadricycle de 5 chevaux, n'a usé que 2 litres.",
      "Il nous faut malheureusement enregistrer un accident assez grave survenu à M. Bouchet, commissaire d'un des concurrents, M. Brun. Pris d'un malaise au départ, il tomba sur la route au virage de Triel. Grièvement blessé à la tête, M. Bouchet devra demeurer à Meulan."
    ]
  },
  {
    "id": 6,
    "page": 3,
    "category": "Les Sports",
    "title": "Championnat de lutte",
    "summary": "Compte rendu de la seconde réunion des séries éliminatoires du Championnat du monde de lutte, disputée hier soir au Casino de Paris, détaillant les succès des lutteurs en lice.",
    "paragraphs": [
      "Au Casino de Paris, hier soir, a eu lieu la seconde réunion des séries éliminatoires du Championnat du monde de lutte.",
      "Résultats : Tuvichniaen tombe Potelleret, Mayer tombe Etienne le Boulanger, Sandoofy tombe Mestrot, Lievin Demay tombe Henrice, Vervet tombe Overhand, Passemart tombe Kauffin, Constant le Boucher tombe Louis le Champenois."
    ]
  },
  {
    "id": 7,
    "page": 3,
    "category": "Les Sports",
    "title": "Tir aux pigeons",
    "summary": "Le Cercle international du Casino de Namur institue un prix hebdomadaire de 100 francs pour ses séances de tir aux pigeons, qui débuteront en novembre 1900.",
    "paragraphs": [
      "Le comité des Tirs aux pigeons du Cercle international du Casino de Namur a décidé d'offrir aux membres du cercle un prix de 100 francs en un pigeon handicap, tous les vendredis des mois de novembre, décembre, janvier, février et mars. Entrées : 10 francs. Le premier de ces prix se tirera le vendredi 9 novembre 1900."
    ]
  },
  {
    "id": 8,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Matinées et représentations",
    "summary": "M. Georges Leygues, ministre de l'Instruction publique, organise une soirée de gala à l'Opéra pour célébrer la clôture de l'Exposition universelle.",
    "paragraphs": [
      "M. Georges Leygues, ministre de l'Instruction publique, prépare pour dimanche prochain une soirée de gala qui sera donnée à l'Opéra pour la clôture de l'Exposition.",
      "Le ministre se propose de faire entendre les premiers actes d'Alceste de Gluck, et le deuxième acte de Carmen avec Mme Calvé. Cette représentation se terminera par les Danses de jadis et de naguère."
    ]
  },
  {
    "id": 9,
    "page": 3,
    "category": "Bulletin Financier",
    "title": "Le marché financier du 7 novembre",
    "summary": "Après une ouverture hésitante sur les valeurs espagnoles, le marché financier s'est raffermi, soutenu par le Rio, malgré la faiblesse des titres miniers.",
    "paragraphs": [
      "Un peu de flottement a été observé au début de la séance, spécialement sur les valeurs espagnoles, mais le marché, soutenu par l'excellente allure du Rio, s'est bientôt raffermi. Seules les mines d'or s'alanguissent de nouveau, par suite des déclarations peu optimistes du président des Goldfields."
    ]
  },
  {
    "id": 10,
    "page": 4,
    "category": "Chronique de l'Exposition",
    "title": "L'huile de foie de morue à l'Exposition",
    "summary": "Dénonciation des pratiques abusives de certains pharmaciens qui surévaluent le prix de vente de l'huile de foie de morue au détriment des malades.",
    "paragraphs": [
      "Les visiteurs de l'Exposition ont pu observer toutes les phases de la fabrication moderne de l'huile de foie de morue. Une seule chose manque à la présentation, pourtant très intéressante : les prix de vente en gros.",
      "Il n'est pas, en effet, de produit qui se prête davantage à l'exploitation de la crédulité. Certains pharmaciens, qui se croient des plus dignes, abusent de la naïveté du public en vendant le produit 7 à 8 francs le litre ; d'autres, qui se respectent moins, persuadés qu'il y a des degrés dans cette naïveté humaine, ne le vendent que 4 ou 5 francs.",
      "Ce médicament est cependant le pain de tous les jours, celui qu'il importe le plus de vendre à prix réduit puisqu'il est d'une utilité incontestable et qu'il coûte d'ailleurs très bon marché.",
      "Vendue 8 francs, 5 francs, ou moins, l'huile de foie de morue est toujours de même qualité et coûte le même prix au vendeur. Nous défions qui que ce soit de prouver le contraire, et ne craignons pas de signaler aux malades ces abus pour les mettre à même de répondre aux attaques impudentes de certains pharmaciens."
    ]
  },
  {
    "id": 11,
    "page": 4,
    "category": "Publicité pharmaceutique",
    "title": "Pharmacie Européenne du Docteur Mengin",
    "summary": "La Pharmacie Européenne du docteur Mengin, rue Beaumarchais, propose ses produits pharmaceutiques à prix de gros au détail, incluant son huile de foie de morue de Norvège garantie pure.",
    "paragraphs": [
      "Pour pallier les lacunes des exposants, il suffit de parcourir le tarif général de la Pharmacie Européenne du docteur Mengin, rue Beaumarchais. La plus vaste du monde et la mieux organisée, cette maison est la seule fabrique de produits pharmaceutiques vendant au détail au prix que paient les pharmaciens eux-mêmes.",
      "On y verra que l'huile de foie de morue de Norvège, garantie pure et de qualité absolument supérieure, vaut à Paris la brune 2 fr. 50, la blonde 4 fr. 50, l'ambrée 3 fr. 50, la blanche 4 fr. 25. Pour la province, ces prix sont nets d'octroi de Paris. Le catalogue est d'ailleurs envoyé franco à toute demande."
    ]
  },
  {
    "id": 12,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Maître de Forges",
    "summary": "Le maître de forges accuse violemment Madame Marsanne d'avoir caché une liaison d'Hélène. Malgré les dénégations éplorées de la dame, il campe sur ses positions avec une âpreté menaçante.",
    "paragraphs": [
      "Madame Marsanne, méditative, parut fouiller un instant dans ses souvenirs. Puis elle répondit : « C'était quelques jours avant que la folie ne frappât ma pauvre enfant. Elle sommeillait dans sa chambre, et je me trouvais près d'elle. Tout à coup un tressaillement la parcourut et ses lèvres qui se mirent à remuer prononcèrent un nom : René, n'est-ce pas ? »",
      "Le maître de forges parlait d'une voix âpre. Madame Marsanne, debout devant lui, toute secouée, se prit le front dans ses mains et gémit : « Mais c'est impossible, cela, André. Voyons, songez à ce que vous dites. Hélène, un amant ? Non, non, jamais. »",
      "Le maître de forges, raidi dans son accusation suprême, se récria encore : « Inutile de protester, madame. Je ne vous crois point. »"
    ]
  },
  {
    "id": 13,
    "page": 4,
    "category": "Informations maritimes",
    "title": "Départs et Arrivées des paquebots",
    "summary": "État des mouvements maritimes des paquebots des Messageries Maritimes au 6 novembre 1899, précisant les horaires et lieux d'escales des navires en partance ou arrivant à destination.",
    "paragraphs": [
      "Le paquebot Tarra (M. M.), allant à Madagascar, a quitté Djibouti le 6 novembre, à 10 heures du matin.",
      "Le paquebot Cordillère (M. M.), allant au Brésil, est arrivé à Rio-de-Janeiro le 6 novembre, à 8 heures du soir.",
      "Le paquebot Chili (M. M.), allant au Brésil, est arrivé à Lisbonne le 6 novembre, à 4 heures du matin.",
      "Le paquebot Océanien (M. M.), allant en Indo-Chine, a quitté Port-Saïd le 2 novembre, à 8 heures du soir.",
      "Le paquebot Australien (M. M.), allant en Australie, est arrivé à King George Sound le 3 novembre, à 4 heures du matin."
    ]
  }
];
