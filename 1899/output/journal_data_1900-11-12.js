// Date: 1900-11-12
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-11-12 (Version Restaurée, 38 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique",
    "title": "Conciliation et Arbitrage",
    "summary": "Le président du Conseil annonce une loi sur l'arbitrage des grèves. Un rappel historique souligne le retard français par rapport à l'Angleterre en matière de législation sociale depuis 1824.",
    "paragraphs": [
      "Dans le discours que le président du Conseil a prononcé mardi à la rentrée des Chambres, il a annoncé le dépôt prochain d'un projet de loi sur la procédure de l'arbitrage en matière de grève. Cette réforme soulèvera sans doute de nombreuses discussions touchant les procédés d'application entre lesquels il faudra choisir.",
      "Au moment où le Parlement va s'occuper de nouveau de ce grave problème, il n'est pas sans intérêt de nous reporter en arrière et de rappeler ce qui a déjà été fait pour en préparer la solution.",
      "Ce n'est pas en France que les premiers efforts ont été faits, et, sur ce point, l'Angleterre nous a beaucoup devancés. C'est en 1824 que nous rencontrons chez eux la première loi réglementant la solution pacifique des conflits collectifs entre patrons et ouvriers.",
      "Nous avons été moins vifs en besogne et il n'y a chez nous rien à signaler dans l'ordre d'idées qui nous occupe avant 1848. Sous l'Empire, la discussion de la loi du 25 mai 1864 sur la liberté de coalition remit à l'ordre du jour les avantages qu'il était possible d'attendre du recours à l'arbitrage.",
      "C'est en 1886 seulement que MM. Camille et Benjamin Raspail firent le premier pas dans cette voie. C'est dans ces conditions que M. Jules Roche, ministre du Commerce, se résolut, le 24 novembre 1891, à fournir à son tour une nouvelle rédaction qui, votée un an plus tard, allait devenir la loi du 27 décembre 1892."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Social",
    "title": "Les Grèves en 1899",
    "summary": "Le gouvernement réfute tout lien entre sa politique et la recrudescence des grèves. Les statistiques officielles de 1899 confirment la stabilité relative des conflits sociaux par rapport à 1893.",
    "paragraphs": [
      "On sait qu'au cours de la récente interpellation sur la politique générale, on a reproché au gouvernement la multiplication des grèves, prétendant ainsi le rendre responsable des conflits économiques survenus.",
      "M. Waldeck-Rousseau n'a pas eu de peine à démontrer qu'il n'y avait aucun lien entre les grèves d'une part, la forme politique d'un pays ou le programme de ses ministres de l'autre.",
      "Précisément, la direction du Travail vient de publier la statistique des grèves pour l'année écoulée. En 1899, on a enregistré 740 grèves qui ont entraîné au chômage 176 876 personnes. En 1893, on avait compté 634 grèves et 170 123 grévistes."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une catastrophe à Choisy-le-Roi : Sept morts, vingt blessés",
    "summary": "Un tragique accident ferroviaire est survenu hier en gare de Choisy-le-Roi. Un train express a violemment percuté un convoi à l'arrêt, faisant sept victimes et une vingtaine de blessés.",
    "paragraphs": [
      "Un terrible accident de chemin de fer, qui a coûté la vie à sept personnes et a fait un grand nombre de blessés, s'est produit hier matin, à onze heures quinze minutes, en gare de Choisy-le-Roi, sur la ligne d'Orléans.",
      "Un train, qui stationnait à cet endroit et qui ne contenait plus aucun voyageur, a été tamponné par un express qui filait à toute vitesse.",
      "Le choc a été épouvantable, suivi par un concert de clameurs et de cris déchirants. La locomotive de l'express de Nantes a été complètement défoncée et renversée.",
      "Les secours se sont organisés rapidement, avec l'aide des pompiers, de la gendarmerie et des médecins locaux. M. Lépine, préfet de police, est arrivé sur les lieux en début d'après-midi."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique",
    "title": "En Algérie",
    "summary": "M. Jonnart, gouverneur général, a reçu les élus algériens. Il a réitéré son engagement à favoriser la colonisation par l'amélioration des infrastructures foncières et logistiques.",
    "paragraphs": [
      "Le gouverneur général a reçu hier, au Palais d'Hiver, les sous-préfets et les maires du département d'Alger, qui lui ont été présentés par M. Lutaud.",
      "M. Jonnart a répondu qu'il était très touché de cette démarche et qu'il s'efforcera de résoudre le grave problème de la colonisation algérienne, qui consiste à donner aux colons des terres, de l'eau et des moyens de transport."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "Mouvement Diplomatique",
    "summary": "Le gouvernement officialise plusieurs nominations diplomatiques à Madrid, Rome, Berlin et Séoul, dont l'élévation du consulat de France en Corée au rang de consulat général.",
    "paragraphs": [
      "Sont nommés ministres plénipotentiaires de 2e classe : M. Pasteur, conseiller de l'ambassade de France à Madrid ; M. Blondel, conseiller de l'ambassade de France à Rome ; M. Honteron, conseiller de l'ambassade de France à Berlin.",
      "Le consulat de France à Séoul est érigé en consulat général et M. Collin (de Plancy) est nommé ministre plénipotentiaire de 2e classe."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Société",
    "title": "La dernière journée de l'Exposition",
    "summary": "L'Exposition universelle tire sa révérence. Après des mois d'une féerie sans pareille, la France contemple avec une légitime fierté ce chapitre mémorable qu'elle vient d'inscrire dans l'histoire de l'humanité.",
    "paragraphs": [
      "L'Exposition ferme ses portes ce soir. Encore quelques heures et le féerique spectacle offert à l'admiration du monde sera terminé.",
      "La France peut en être fière. Elle a le droit, en se rappelant ces mois écoulés, de penser qu'elle a écrit une belle page dans les annales de l'humanité."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Politique",
    "title": "Le Président Krüger en France",
    "summary": "Marseille se prépare à l'arrivée du président Krüger. Le maire, M. Flaissières, prône une neutralité stricte, tout en garantissant le maintien de l'ordre public lors des manifestations de soutien prévues.",
    "paragraphs": [
      "Marseille, 11 novembre. Le docteur Flaissières, maire de Marseille, interrogé sur ses projets relatifs à la réception du président Krüger, a répondu : « Je n'en ai point. J'ai l'intention ferme de rester neutre dans la cérémonie. »",
      "Il a précisé que, d'accord avec la préfecture, il prendra les mesures de police nécessaires pour que chacun soit libre de crier « Vive Krüger », mais non « À bas qui que ce soit »."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille",
    "summary": "Mariette console une femme accablée par le chagrin et le mystère. Dans un élan de tendresse maternelle, elle exhorte sa compagne à briser le silence sur un passé dont elle n'est nullement responsable.",
    "paragraphs": [
      "C'était celle de Mariette qui lui souriait à travers ses larmes. Heureuse de sa présence, elle lui cria dans un élan de reconnaissance pour cette tendresse qui ne l'abandonnait point : « Tu resteras près de moi, dis ? »",
      "La pauvre femme se pencha sur elle et lui donna un baiser de mère en murmurant : « Mais pourquoi ne pas révéler ce qui s'est passé ? Car tu n'es pas coupable, non, c'est impossible. »"
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le tamponnement du train de Nantes",
    "summary": "Un grave accident ferroviaire a provoqué le tamponnement du train de Nantes. M. le docteur Bne s'est immédiatement porté au secours des nombreux blessés sur les lieux du drame.",
    "paragraphs": [
      "La machine de notre train vient d'éclater.",
      "Lorsque je sortis de mon wagon, je m'aperçus que notre convoi venait d'en tamponner un autre. M. le docteur Bne s'est mis aussitôt à la disposition des blessés pour leur prodiguer les premiers soins."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un survivant de la catastrophe",
    "summary": "M. Ribière, serre-frein du train de Nantes, a miraculeusement survécu à la projection causée par l'explosion. Malgré le choc, il a immédiatement prêté main-forte aux secours au milieu des débris.",
    "paragraphs": [
      "Le bruit s'était répandu que M. Ribière, serre-frein de l'express de Nantes, qui se trouvait dans le fourgon placé derrière la locomotive, avait été tué et que son cadavre gisait sous les débris de la machine. Il n'en est heureusement rien.",
      "M. Ribière était occupé à ranger des bagages quand, tout à coup, il fut projeté hors de son wagon et lancé à trois ou quatre mètres en l'air. « Je suis mort », pensa M. Ribière.",
      "Mais il retomba sur ses jambes et roula à terre, pendant que les débris de toutes sortes venaient couvrir son corps. Il se releva aussitôt, courut à l'arrière du train et se palpa. Il n'était pas blessé ; la jambe droite de son pantalon était seulement déchirée et ses mollets légèrement écorchés.",
      "Esclave du devoir, M. Ribière se joignit alors aux travailleurs et secourut les voyageurs. Le serre-frein peut se féliciter de revenir de loin."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'enquête sur l'accident de Choisy-le-Roi",
    "summary": "Ouverture d'une enquête judiciaire après la collision ferroviaire de Choisy-le-Roi. Les magistrats interrogent les aiguilleurs pour déterminer les responsabilités dans cet accident survenu sous un brouillard épais.",
    "paragraphs": [
      "MM. Herbaux, procureur de la République, et Boagrand, juge d'instruction, sont arrivés à quatre heures sur le théâtre de la catastrophe. Ces deux magistrats, de concert avec M. Catrou, commissaire de police de Choisy-le-Roi, ont procédé à une enquête à l'effet d'établir dans quelles circonstances cet accident est survenu.",
      "Ils ont procédé à l'interrogatoire de l'aiguilleur du poste nord, situé en deçà de Choisy. Cet aiguilleur a déclaré qu'avant le passage de l'express n° 9, il avait regardé les signaux et constaté qu'ils étaient au blanc, ce qui indiquait que la voie était libre.",
      "L'employé ouvrit alors la voie à l'express. C'est ce qui explique que le train n° 9 s'est engagé dans la gare. D'après cette version, l'aiguilleur du poste sud aurait omis de fermer la voie, alors que les wagons du train omnibus étaient encore en gare.",
      "Interrogé à son tour, l'aiguilleur du poste sud a affirmé que son signal était fermé. Il faut ajouter qu'un brouillard assez épais régnait hier matin à Choisy-le-Roi, et que cela aura empêché le malheureux mécanicien de l'express de Nantes de voir le train qui stationnait en gare."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'émotion des voyageurs et le service d'ordre",
    "summary": "Scènes d'angoisse et solidarité après la catastrophe de Choisy. Les rescapés affluent au télégraphe pour rassurer leurs proches, tandis que les autorités organisent les secours dans une vive émotion.",
    "paragraphs": [
      "La plupart des voyageurs de l'express de Nantes, qui n'avaient pas souffert de l'accident ou n'avaient reçu que des contusions insignifiantes, se sont précipités au bureau du télégraphe de Choisy-le-Roi pour aviser leurs familles qu'ils étaient sains et saufs.",
      "Deux cents télégrammes ont été ainsi envoyés. Il s'est produit, à ce sujet, un incident des plus curieux. Une jeune femme, en s'approchant du guichet, voulut parler à l'employé, mais tout à coup il ne sortit de sa bouche qu'un son rauque. La pauvre femme, par suite de l'émotion qu'elle venait d'éprouver, avait perdu la parole. On la conduisit aussitôt dans une pharmacie où on lui prodigua des soins ; mais ce n'est qu'au bout de deux heures environ qu'elle put reprendre l'usage de ses sens.",
      "L'émotion causée par cet accident dans la ville de Choisy-le-Roi a été très grande. Le service d'ordre était assuré par les gendarmes, sous le commandement du capitaine Crochet, commandant la gendarmerie de Sceaux, et par les sergents de ville de Choisy. M. Chéron, maire de Choisy, et MM. Imbert et Brault, anciens maires honoraires, sont restés pendant toute la journée sur le théâtre du sinistre."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le déblaiement de la voie",
    "summary": "Travaux de déblaiement périlleux à Choisy-le-Roi : les équipes s'activent à la lueur des torches. En signe de deuil, le théâtre Déjazet annule sa représentation exceptionnelle au bénéfice des pauvres.",
    "paragraphs": [
      "La circulation sur la voie descendante ne sera pas rétablie avant quelques jours. On travaille avec la plus grande activité au déblaiement, mais on ne peut que malaisément retirer les armatures et les roues de cette énorme masse de fer enchevêtrée. L'enlèvement de la locomotive offre un réel danger, car la machine, mal soutenue et fort mal équilibrée, peut s'effondrer d'un moment à l'autre.",
      "À minuit, le spectacle que présentent les travaux de déblaiement est absolument lugubre. Pompiers et hommes d'équipe travaillent à la lueur des torches. Les débris enlevés sont précipités du haut du pont du chemin de fer dans la cour d'arrivée.",
      "Dans la soirée, les trains ont continué à circuler sur la voie libre, mais il fallait compter près de trois heures pour effectuer le trajet de Paris à Choisy, dont la distance est de onze kilomètres. Le théâtre Déjazet, qui devait donner une représentation au bénéfice des pauvres de la ville, a fait savoir qu'en signe de deuil, la représentation n'aurait pas lieu."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le bilan des victimes",
    "summary": "Identification en cours pour les victimes de la catastrophe. Après le notaire Oury identifié à Choisy, les corps restants ont été transférés à Paris, où les papiers trouvés ont permis trois identifications.",
    "paragraphs": [
      "Un seul cadavre avait été reconnu à Choisy, celui de M. Oury, notaire à Chémery (Loir-et-Cher). Sur la demande de la famille, le corps a été transporté au dépôt mortuaire du cimetière de la ville.",
      "Six autres cadavres, ceux de trois hommes et trois femmes non reconnus, avaient été ramenés à la gare d'Austerlitz et dirigés sur la morgue. Grâce à des papiers retrouvés dans les poches, les trois hommes ont été identifiés : Bourgeon, chauffeur de l'express n° 9 ; Eugène Leduc, mécanicien ; et M. Louis Robin, constructeur à Sèvres (Indre-et-Loire).",
      "Les vêtements et le linge des trois femmes portent des initiales permettant d'espérer l'établissement rapide de leur identité."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Liste des blessés",
    "summary": "Le bilan humain s'alourdit à vingt blessés civils identifiés. Les travaux de dégagement éprouvants ont également causé des blessures à quatre membres des équipes de secours.",
    "paragraphs": [
      "Le chiffre des blessés s'élève à vingt, dont Mme Oury, M. Georges Beulin, Mme veuve Bugeaud, M. Paul Bourgoint, M. Georges Gervais, Mme Marie Lacroix, Mme Tessier, M. Baron, M. Eugène Schoff, M. Walthier, M. Yves Le Moyne, M. Fèche, Mme Mauget, M. Morin, Mme Morin, M. Prado, M. Albert Delaunay, Mme Schoeffer, Ville Roussel et Mme veuve Martinet.",
      "Trois pompiers (MM. Georges Jardry, François Barriar, Philibert Gauthreau) et le sous-brigadier Straire ont également été blessés lors des travaux de déblaiement."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Interpellation prévue",
    "summary": "M. Narbonne et M. Coutant, députés, déposeront une interpellation au ministre des Travaux publics pour obtenir des explications sur les causes de la récente catastrophe ferroviaire.",
    "paragraphs": [
      "M. Narbonne, député de l'Aude, et M. Coutant, député de la Seine, ont l'intention d'adresser aujourd'hui au ministre des Travaux publics une interpellation relative aux causes et aux responsabilités de la récente catastrophe."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique intérieure",
    "title": "Élection municipale à Paris",
    "summary": "Le scrutin organisé dans le quartier des Halles pour pourvoir le siège laissé vacant par le décès de M. Lamouroux s'est soldé par un ballottage.",
    "paragraphs": [
      "Quartier des Halles : ballottage. Cette élection était organisée afin de pourvoir le siège de conseiller municipal laissé vacant par le décès de M. Lamouroux."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Guerre au Transvaal",
    "summary": "Le Tageblatt critique l'optimisme de lord Salisbury face aux difficultés britanniques contre les Boers. À Londres, le gouverneur militaire favorise les intérêts anglais au détriment des réfugiés.",
    "paragraphs": [
      "Le Tageblatt commente le discours de lord Salisbury, qu'il juge optimiste tout en soulignant l'aspect humiliant pour l'Angleterre de devoir mobiliser 300 000 hommes contre les Boers.",
      "À Londres, le gouverneur militaire de Johannesburg annonce des mesures de restriction pour le retour des négociants et des réfugiés, favorisant les intérêts britanniques au détriment des ressortissants des autres nationalités."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Les événements de Chine",
    "summary": "Les forces alliées préparent une offensive contre les Boxers. Malgré les pressions diplomatiques, l'empereur de Chine se montre réticent à punir sévèrement ses officiels compromis.",
    "paragraphs": [
      "Les troupes alliées s'apprêtent à engager le combat contre les Boxers au sud de Pao-Ting-Fou. La Russie doit remettre le chemin de fer de Takou à Tien-Tsin au commandement du comte de Waldersee.",
      "L'empereur de Chine a refusé de punir Tong-Fou-Siang, consentant seulement au bannissement de You-Sien. Quinze missionnaires belges ont réussi à fuir la Mongolie par le Transsibérien."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Le Congrès Ibéro-Américain",
    "summary": "À Madrid, le Congrès prône l'union des républiques latines. Don Carlos désavoue fermement l'insurrection carliste, qualifiant ses auteurs d'hommes de mauvaise foi.",
    "paragraphs": [
      "Le Congrès s'est tenu à Madrid avec les interventions remarquées de M. Sierra pour le Mexique et M. Calzada pour Buenos-Ayres, prônant l'union des républiques latines d'Amérique.",
      "Don Carlos a déclaré que l'insurrection carliste s'était produite contre ses instructions formelles, qualifiant ses auteurs d'hommes de mauvaise foi."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Clôture de l'Exposition",
    "summary": "Malgré la grisaille et le froid, la foule a salué une dernière fois l'Exposition universelle lors de sa clôture. La fête nocturne à Vincennes et le gala à l'Opéra ont marqué la fin mémorable de l'événement.",
    "paragraphs": [
      "C'était hier le dernier dimanche de l'Exposition universelle. Malgré un temps gris et froid, une foule nombreuse a déambulé une dernière fois sur les lieux. Les pavillons commençaient déjà à fermer leurs portes.",
      "La fête de nuit à l'annexe de Vincennes a été une réussite malgré le froid, avec ses chars nautiques sur le lac Daumesnil. Le gala de clôture à l'Opéra, offert par M. Leygues, a marqué dignement la fin de l'événement avec des programmes artistiques de haut vol."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Circulaire du ministre de la Guerre",
    "summary": "Par une circulaire du 10 novembre, le ministre de la Guerre rappelle l'interdiction faite aux officiers généraux et chefs de corps de publier des ordres du jour personnels, afin de préserver l'autorité hiérarchique.",
    "paragraphs": [
      "Le ministre de la Guerre a rappelé, par une circulaire du 10 novembre, l'interdiction faite aux officiers généraux et chefs de corps de publier des ordres du jour personnels pouvant nuire au respect dû à l'autorité."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "International",
    "title": "Le régime alimentaire du Pape",
    "summary": "À un âge avancé, le pape Léon XIII suit une diète d'une grande simplicité, composée essentiellement de café au lait, d'un bouillon, de pain et d'une légère ration de viande avec un verre de bordeaux.",
    "paragraphs": [
      "Les journaux français nous renseignent encore sur le menu du pape Léon XIII dont l'alimentation, à raison de son grand âge, est fort simple : une tasse de café au lait le matin, une soupe avec une tranche de viande froide ou de rôti, accompagnée d'un verre de bordeaux à midi, et le soir, un bol de bouillon et du pain. Tel est le régime peu compliqué du vieillard qui règne au Vatican."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "International",
    "title": "Les habitudes frugales de la Reine d'Angleterre",
    "summary": "Malgré la richesse de sa table, la reine d'Angleterre privilégie une vie frugale. Elle évite certains aliments et préfère l'éclairage aux bougies, entourée seulement de son fidèle chien Marso.",
    "paragraphs": [
      "En Angleterre, si la table royale est toujours richement et abondamment servie, ce n'est pas que la reine mange beaucoup. L'âge, qui pèse aussi sur elle, l'oblige à mener une vie plutôt frugale. Son déjeuner consiste uniquement en œufs et en beurrées.",
      "Au lunch qu'on lui sert à une heure, on place toujours sur une petite table, à côté de la souveraine, du hachis de bœuf, des concombres et un verre de vieux sherry. Sa gracieuse Majesté, affirme-t-on, déteste tout particulièrement trois choses : les choux, qui sont bannis de sa table, l'odeur du gaz, auquel elle préfère l'éclairage aux bougies, et les chats.",
      "Marso, son chien favori, est le seul animal que l'impératrice des Indes tolère auprès d'elle."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Chronique",
    "title": "Le menu des rois et la sobriété royale",
    "summary": "La sobriété est désormais de mise dans les cours européennes, contrastant avec les banquets pantagruéliques d'autrefois. La frugalité impériale napoléonienne a supplanté l'abondance des anciens festins.",
    "paragraphs": [
      "De quels mets se composent les quatre repas par jour que prend, comme tous les Flamands, le roi des Belges ? Personne ne nous l'a dit et aucun renseignement n'a été publié à cet égard. Est-il un fervent dégustateur de la diest, du faro, du lambic, voire de la gueuse-lambic ? Nous l'ignorons.",
      "On sait, par contre, que le roi de Roumanie a introduit à la cour de Bucarest la cuisine allemande et que le roi de Suède adore le saumon cru accommodé à la mode des pays du Nord.",
      "En somme, les tables royales d'aujourd'hui ne rappellent plus les repas à la Falstaff qui se donnaient autrefois dans les châteaux des souverains. Les rois ne dînent plus habituellement de dix-sept plats aussi succulents que volumineux comme le faisait Louis XIV et il ne viendrait à l'idée d'aucun d'eux de passer en un festin les huit ou dix heures qu'y passaient les empereurs de Rome.",
      "On est devenu sobre dans les cours. La frugalité même semble y avoir été mise à la mode depuis que Napoléon, traversant la table comme un champ de bataille, a montré qu'on pouvait déjeuner d'une côtelette et d'un artichaut à la poivrade, ce qui désolait Marie-Louise, habituée aux plantureux repas de la cour de Vienne.",
      "Les banquets pantagruéliques ne sont plus dans les usages, et c'est à peine si quelques viveurs en ont gardé la tradition, comme sous le second Empire le prince Demidoff, à qui un souper offert à quelques amis de Paris coûta cher, ces messieurs s'étant amusés à inonder de vin à 80 francs la bouteille un piano qui fut porté sur la note, ainsi que les glaces et la vaisselle cassées, ou comme ces dix Américains du Nord qui, plus récemment, s'offrirent dans un restaurant du boulevard un dîner de 100 francs par couvert, dîner qui fut suivi d'un souper et d'un bain de pieds pris par la bande folle, dont un château-yquem à trois louis la bouteille fit les frais."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Chronique Politique",
    "title": "La chasse présidentielle à Rambouillet",
    "summary": "Le Président de la République, Émile Loubet, a convié les grands-ducs Wladimir, Alexis et de Leuchtenberg à une chasse à Rambouillet, en présence de diplomates et de hautes autorités.",
    "paragraphs": [
      "Le Président de la République a offert hier une chasse à Rambouillet aux grands-ducs Wladimir, Alexis et de Leuchtenberg.",
      "Dans le train spécial avaient pris place MM. de Montebello, ambassadeur de France à Saint-Pétersbourg ; Narischkine, chargé d'affaires de Russie ; Waldeck-Rousseau ; le général Dubois, le commandant Lamy et M. Mollard.",
      "M. Loubet a été reçu à la gare par MM. de Linières, sous-préfet, et Cautherin, maire de Rambouillet, le colonel Doddet et le comte Potocki. La chasse a commencé à midi, après un déjeuner au château. Les invités du Président de la République ont quitté Rambouillet à cinq heures."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident mortel lors du passage du train présidentiel",
    "summary": "Un tragique accident ferroviaire près de Trappes a coûté la vie à un ouvrier. En voulant laisser passer le train présidentiel, deux poseurs de voie ont été percutés par la locomotive.",
    "paragraphs": [
      "Un douloureux accident s'est produit près de Trappes, lors du passage du train présidentiel.",
      "Deux poseurs de voie, en voulant s'écarter pour laisser passer un train de marchandises, n'ont point aperçu le train spécial et ont été tamponnés. L'un des ouvriers, nommé Joseph, a été tué sur le coup ; son infortuné camarade a eu une jambe coupée.",
      "Le mécanicien a stoppé la machine aussitôt. M. Loubet s'est enquis des causes de l'accident et a fait prendre des nouvelles du blessé, qui a été transporté à l'hôpital de Versailles."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame conjugal rue de la Folie-Méricourt",
    "summary": "Un drame passionnel s'est noué rue de la Folie-Méricourt : une épouse, ayant surpris son mari infidèle avec une ouvrière, lui a tiré dessus. L'homme est blessé, et sa maîtresse hospitalisée.",
    "paragraphs": [
      "Après dix années d'une union heureuse, un ménage demeurant rue de la Folie-Méricourt a connu de graves dissensions. Le mari, père d'une petite fille, avait pris l'habitude de fréquenter une jeune ouvrière nommée Clotilde.",
      "L'épouse, informée de cette liaison, tenta d'abord d'éviter tout scandale. Cependant, ayant surpris son mari se promenant bras dessus, bras dessous, avec sa rivale dans la rue de la Folie-Méricourt, elle perdit tout contrôle. Elle se rendit auprès de l'infidèle et tira sur lui à bout portant.",
      "Blessé à l'épaule, l'homme fut secouru par les voisins. Le magistrat, après avoir enregistré les aveux de l'épouse, a décidé de la laisser en liberté, compte tenu de ses antécédents irréprochables et de sa situation de mère.",
      "La jeune ouvrière, blessée lors de l'altercation, a été transportée à l'hôpital Saint-Louis dans un état jugé assez grave. Cette affaire a causé un vif émoi dans tout le quartier."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Bagarre du boulevard Ornano",
    "summary": "Une violente rixe au boulevard Ornano a nécessité l'intervention de la police. Plusieurs individus, dont des romanichels, ont été arrêtés après avoir blessé gravement un agent.",
    "paragraphs": [
      "Hier soir, vers onze heures et demie, une violente bagarre a éclaté dans le débit de vins tenu par Mme Raynal, 58, boulevard Ornano, à la suite d'une discussion concernant le règlement d'une note.",
      "Les belligérants ont brisé tables et glaces. Les gardiens de la paix, intervenus pour arrêter les auteurs, ont été renversés et frappés à coups de canne plombée. L'un des agents, nommé Jean, a été grièvement blessé et transporté à l'hôpital Bichat.",
      "Une dizaine de romanichels ont tenté d'arracher les coupables aux policiers. Plusieurs arrestations ont été effectuées, notamment celle de deux romanichels domiciliés rue Leclaire. Le garçon de café, Louis Ridon, a également été blessé lors de la rixe."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Série d'accidents autour de Paris",
    "summary": "Une série de tragiques accidents et agressions secoue la périphérie parisienne, de Boulogne à Étampes, marquant le quotidien par des drames funestes et des violences soudaines.",
    "paragraphs": [
      "Boulogne-sur-Seine : Le tramway de Vincennes a renversé un tombereau sur l'avenue des Moulineaux, tuant le charretier Mougin sur le coup.",
      "Clichy : Deux maçons, Jules Berdeulat et Lucien Contad, sont tombés d'un échafaudage au deuxième étage boulevard Victor-Hugo. Contad est grièvement blessé à la cuisse et à l'épaule.",
      "Gennevilliers : Un jeune homme, Julien Delrieu, s'est gravement blessé à l'artère du bras en aiguisant une faux.",
      "Asnières : François Tissoux a été tué par un coup de pied de cheval.",
      "Saint-Ouen : Elphège Becquert, un journalier au chômage, est mort après une tentative d'asphyxie dans sa chambre.",
      "Le Raincy : Un incendie a ravagé l'appartement de M. Mangeon, 58, boulevard de l'Ouest.",
      "Bourg-la-Reine : Un nommé Ronsonin a tiré sur M. Barbier rue de Fontenoy. Ce dernier est à l'hôpital Cochin dans un état grave.",
      "Étampes : Alexis Delaporte a été dévalisé et grièvement frappé par trois individus à Boutigny."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Sports",
    "title": "La course de côte de Gaillon",
    "summary": "Une soixantaine de chauffeurs ont pris le départ de la prestigieuse course de côte de Gaillon. Le concurrent Bétonnais a impressionné sur son motocycle, tandis que Mors s'est imposé dans la catégorie des grosses voitures.",
    "paragraphs": [
      "Une soixantaine de chauffeurs ont quitté la porte Maillot pour disputer la course de côte de Gaillon. Les temps ont été excellents, Bétonnais réalisant 55 secondes sur une rampe difficile avec son motocycle.",
      "Dans la catégorie des grosses voitures, Mors a remporté le meilleur temps avec un moteur de 40 chevaux."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Sports",
    "title": "Championnat de lutte du Casino de Paris",
    "summary": "Le second tour des éliminatoires de lutte a débuté hier au Casino de Paris. Salomon, Haftner, Liévin et Dervil ont brillamment décroché leur qualification à l'issue de leurs combats respectifs.",
    "paragraphs": [
      "Le second tour des éliminatoires a débuté hier soir au Casino de Paris. Salomon, Haftner, Liévin et Dervil ont remporté leurs combats respectifs et se sont qualifiés pour la suite de la compétition."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Économie",
    "title": "Causerie financière : L'encaisse or de la Banque de France",
    "summary": "Avec une encaisse or atteignant deux milliards trois cents millions de francs, la Banque de France affiche une solide réserve. La Bourse reste prudente tout en surveillant les cours des rentes étrangères.",
    "paragraphs": [
      "L'encaisse or de la Banque de France a atteint un niveau record de deux milliards trois cents millions de francs. Ce signe d'abondance monétaire témoigne de la prudence des capitaux face à l'emploi. La Bourse, tout en restant sage, surveille attentivement les cours des rentes et des fonds étrangers.",
      "La reprise des valeurs extérieures a été notable, tandis que les titres espagnols et les chemins de fer montrent des signes de stabilité ou de léger progrès. L'attention est portée sur de possibles projets d'emprunts suisses destinés au rachat des lignes de chemins de fer."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Fruit Défendu",
    "summary": "Récit tragique d'une jeune femme qui, dans un élan de dévouement sacrificiel, s'éteint paisiblement au milieu des préparatifs d'une fête d'amour qui ne lui était pas destinée.",
    "paragraphs": [
      "Au milieu des déboires, et contre Régine, pas la moindre haine dans son cœur. Au contraire, une tendresse infinie.",
      "Elle venait de se dévouer, de se tuer, presque avec enthousiasme, pour Régine.",
      "Le cerveau recevait maintenant les approches de la mort. La vue s'obscurcissait.",
      "Déjà, elle ne distinguait plus aussi nettement les choses autour d'elle, les meubles, les fleurs, au milieu desquelles la pauvre fille allait mourir, ensevelie dans cette fête d'amour préparée pour une autre.",
      "Elle essaya de se soulever un peu. Non parce qu'elle souffrait, non pour appeler à son secours. Seulement pour apercevoir le soleil qui baissait et dont les flèches dorées frappaient les vitres en les incendiant. Puis, elle retomba. Cette fois, elle resta immobile, les yeux ouverts.",
      "Elle n'était pas morte encore. Mais elle ne pensait plus. Le poison avait atteint le cerveau.",
      "Pas de souffrances. Aucune contraction. Une main se glissa jusqu'à son cœur, près du poignard resté enfoncé. L'autre main laissa tomber une fleur. Et ce fut tout.",
      "Les yeux restèrent demi-clos, mais elle était morte. Rien n'avait troublé cette fin qui avait été très douce."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Chronique",
    "title": "Gravir la côte et la descendre",
    "summary": "Une mésaventure teintée d'humour : l'effort superflu d'un homme d'âge mûr grimpant une côte escarpée, pour finalement retrouver son ami Pierre Nénez en plein travail à la brasserie.",
    "paragraphs": [
      "Si j'avais su que l'homme que je désirais voir n'était pas chez lui, je me serais épargné l'embarras de gravir la haute côte pour parvenir jusqu'à sa maison ; car les chemins escarpés offrent peu d'attraits à un homme de mon âge, qui n'est pas dépourvu d'un certain embonpoint.",
      "Tout haletant comme un fugitif poursuivi par la police, je demande aux enfants où se trouve M. Pierre Nénez. « Il est là-bas, à la brasserie ! » s'écrièrent-ils tous en chœur.",
      "Diable ! J'aurais dû penser à cela, car c'était son heure de travail. Comme nous sommes parfois distraits, même les plus réfléchis d'entre nous ! Au milieu des haquets et des camions chargés de tonneaux de bière, je trouve M. Pierre Nénez en train de travailler, en homme énergique et solide qu'il est."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Faute de Julli",
    "summary": "Henri Lipray apprend par l'aliéniste Berniatte l'identité du responsable du malheur de sa mère. Cette révélation devient pour lui le point de départ d'une nécessaire entreprise de réparation.",
    "paragraphs": [
      "Une enquête fut faite, le pot aux roses découvert. Mon bonhomme n'avait nullement eu les faveurs de la belle qu'il appelait ouvertement sa maîtresse. C'était tout au plus si celle-ci avait eu le tort de se prêter à un très léger flirt.",
      "On le surveilla de près. Il récidiva. Alors on acquit la conviction de son détraquement. On le mit à couvert dans une maison d'aliénés. C'est là que, par hasard, je le vis un jour.",
      "Il s'interrompit une fois encore. De nouveau, son interlocuteur frissonnait violemment. Son visage, pâle tout à l'heure, était devenu livide.",
      "Il s'exclama : « Le nom de cet homme ? Vous le connaissez ? Dites-le-moi, je vous en supplie. Mésiel. Raoul Mésiel. »",
      "Henri brusquement prit le bras de Berniatte et il le serra au point que celui-ci se demanda si son confrère n'était pas en train de perdre la raison lui aussi.",
      "Mais Lipray disait, fiévreusement, une joie immense aux yeux : « Ah ! que je suis heureux d'être venu ici. Vous ne savez pas le bonheur que m'apportent vos paroles. Grâce à vous, une grande œuvre de réparation, une œuvre qui me tient à cœur, va pouvoir s'accomplir. Elle concerne quelqu'un qui m'est cher, une femme pour laquelle j'ai une vénération profonde. Ma mère, je puis vous l'avouer. Son honneur, celui de sa mémoire plutôt, est à votre merci. »",
      "Berniatte continuait à ne pas comprendre. Il fixait le jeune homme avec la même inquiétude. Mais celui-ci, devinant sa pensée, reprit : « Rassurez-vous. Mon esprit est sain ; ce que je vous dis est sensé, trop sensé hélas. »",
      "Alors Henri raconta le récit que lui avait fait sa mère. Il lui expliqua aussi dans quelles circonstances affreuses la pauvre femme était morte. Bientôt, l'aliéniste s'écria : « Oui, toute confusion est impossible, c'est bien de ce malheureux que madame votre mère fut la victime. Je me souviens, en effet, que l'enquête faite sur lui m'apprit qu'il avait habité Autun à la date que vous m'indiquez. »"
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Roman",
    "title": "Les derniers instants de Villaurier",
    "summary": "Rentrant chez lui dans l'espoir d'y retrouver Régine, Jean Villaurier découvre avec horreur le cadavre de sa sœur, Rose-Manon, assassinée dans son propre fauteuil.",
    "paragraphs": [
      "En ce même instant, la porte de l'hôtel s'ouvrait. Jean Villaurier rentrait chez lui. Il rentrait seul. Il semblait fiévreux, agité, inquiet. Il n'avait pas trouvé Régine à l'église Saint-Pierre.",
      "Il se précipita dans le jardin, n'écoutant guère les explications du concierge, ne s'inquiétant pas de savoir quelle était cette jeune fille, sûr que ce ne pouvait être une autre que Régine. « Elle doit être dans le hall ! Elle s'impatiente, peut-être. » Mais le hall est vide. Il en est surpris.",
      "Il soulève les tentures, il regarde derrière les paravents. Rien nulle part. Il tourne le bouton de l'électricité. Les fleurs, parsemées là, resplendissent soudain. Mais Régine est absente.",
      "Et Villaurier pousse un cri horrible, un cri de fou, un cri qui retentit dans tout l'hôtel et qui remplit d'épouvante ceux qui viennent de l'entendre. Dans ce fauteuil, ce n'est pas celle qu'il attendait. Ce n'est pas Régine, la Régine tant désirée. C'est l'autre, celle d'autrefois, la sœur, c'est Rose-Manon.",
      "Rose, avec un poignard dans le cœur. Rose-Manon, les yeux vitreux, légèrement entrouverts, comme si, de l'autre côté, par-delà la mort, elle avait voulu triompher enfin de l'effroyable terreur de cet homme."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Littérature",
    "title": "Le Bonheur de l'un, le malheur de l'autre",
    "summary": "Le jeune Armand questionne sa mère Jeannine sur sa filiation. Malgré son bonheur présent aux côtés de Pierre, Jeannine ne parvient pas à effacer le souvenir troublant d'Henri Lipray.",
    "paragraphs": [
      "« Alors, c'est vrai, dit maman, que c'est mon papa, ce monsieur-là ? » « Oui, mon enfant. » « Et il faudra que je l'appelle comme ça ? » « Certainement. » « Eh bien alors, et l'autre, le bon monsieur que j'aimais, tu sais, qui me gardait avant que tu viennes me chercher ? »",
      "« Celui-là n'est pas ton papa, non, mon mignon. »",
      "Armand, en formulant ces questions, levait vers sa mère ses grands yeux noirs. Il continua : « Hier, Armand aurait bien voulu l'embrasser, mais n'a pas osé. Non, n'a pas osé, parce que, le monsieur, tu sais le grand, mon papa, il n'aurait pas été content peut-être. »",
      "Jeannine, devant ces interrogations naïves que lui adressait le petit garçon, se troublait légèrement. Heureuse à présent, adorée de son Pierre qui, parti la veille très tard, allait venir tout à l'heure lui murmurer les mots doux et caressants qui remuaient si profondément son cœur, elle ne pouvait, malgré tout, à certains moments, s'empêcher de songer à Henri Lipray."
    ]
  }
];
