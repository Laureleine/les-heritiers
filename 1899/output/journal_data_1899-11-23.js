// Date: 1899-11-23
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-11-23 (Version Restaurée, 48 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Société",
    "title": "L'assistance médicale gratuite en France",
    "summary": "Analyse de la loi sur l'assistance médicale gratuite, pilier de la solidarité républicaine, garantissant le droit aux soins pour tout citoyen démuni, tout en préservant le cadre familial du malade.",
    "paragraphs": [
      "Lorsque, il y a quelques jours, je me suis occupé, ici même, de la question de la bienfaisance, et lorsque j'ai indiqué comment la ville de Paris avait su organiser les secours aux indigents, en d'autres termes le service de l'assistance publique, je m'étais réservé d'examiner aussi comment on les soigne quand ils sont malades.",
      "La loi sur l'assistance médicale gratuite, votée il y a quelques années, est une de celles dont les Chambres républicaines peuvent être fières. Il est utile d'étudier comment cette loi fonctionne et quels résultats elle donne.",
      "L'assistance entre hommes d'un même lieu est logique, et les idées générales qu'a fait se développer le mouvement révolutionnaire de la fin du XVIIIe siècle nous ont amenés à une organisation sociale basée sur la solidarité.",
      "La loi sur l'assistance médicale gratuite a reconnu d'une façon absolue le droit à l'assistance, et ce qui n'était que facultatif est devenu obligatoire pour toute la France. Tout Français privé de ressources qui est frappé par la maladie a droit à cette assistance.",
      "Le malade pauvre ou sans ressources n'entre à l'hôpital que s'il y a impossibilité absolue de le soigner à domicile, pour des raisons à la fois économiques et morales. Il est toujours mauvais d'arracher un malade à son milieu familial.",
      "Les médecins français n'épargnent ni leur temps ni leurs peines lorsqu'il s'agit d'apporter des soulagements. Je m'associe très nettement à la protestation contre un abus qui est récent : des personnes aisées, sous prétexte qu'elles sont attachées à une société de secours mutuels, ne veulent donner à leur médecin que la somme de 1 franc pour une visite."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les tragédies de l'amour",
    "summary": "Vivarez sollicite Mariotti pour trouver un matelot de confiance capable de surveiller les agissements suspects des Girodias à bord du yacht L'Henriette, afin de protéger son neveu.",
    "paragraphs": [
      "Vivarez s'en ouvrit à Mariotti, sans autrement s'expliquer et sans lui dire les motifs de vie ou de mort qui le poussaient à agir ainsi. Il cherchait un matelot déterminé, intelligent et honnête pour l'équipage que les Girodias allaient former.",
      "Mariotti lui suggéra le nom de Malaquin, le meilleur homme de son équipage, un homme gai, insouciant, dévoué et robuste. Le marquis, méfiant vis-à-vis des Girodias, cherchait un espion pour surveiller leurs manœuvres.",
      "La visite de l'Henriette, le yacht en question, permit à Vivarez de constater que le navire était un bâtiment de premier ordre, rapide et élégant. Le marquis apprit que le navire appartenait à un Irlandais, le landlord Donesdale.",
      "Malaquin accepta la mission de confiance du marquis. Ils s'entretinrent longuement, précisant les points sur lesquels il fallait surveiller les Girodias, le marquis étant convaincu que leurs actions étaient dirigées contre son neveu."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "La mission Foureau-Lamy",
    "summary": "Le gouvernement général de l'Algérie confirme l'arrivée pacifique de la mission Foureau à Agadès, tandis qu'une colonne militaire française s'empare de Zinder après un combat contre les défenseurs locaux.",
    "paragraphs": [
      "Le gouvernement général de l'Algérie vient de faire parvenir au gouvernement les renseignements ci-dessous sur la mission Foureau-Lamy.",
      "La mission Foureau est entrée à Agadès sans coup férir. Elle n'a rencontré que la paix sur toute sa route et n'a perdu aucun homme, bien que tous ses chameaux soient morts. Tous les indigènes lui ont fait bon accueil.",
      "Une colonne venue de Tombouctou est entrée à Zinder après un combat dans lequel les défenseurs de la ville ont perdu quarante hommes. Le chef de Zinder a été rejoint et a eu la tête tranchée."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Social",
    "title": "Les grèves : Situation à Belfort",
    "summary": "La grève à Audincourt et Belfort s'intensifie. Malgré les entretiens du Président du Conseil, l'arrestation de meneurs grévistes attise la colère ouvrière et les revendications de libération.",
    "paragraphs": [
      "M. Waldeck-Rousseau, président du Conseil, a reçu hier matin M. Borne, député de Montbéliard, pour s'entretenir de la situation de la grève à Audincourt.",
      "À Belfort, la nuit a été tranquille. Le préfet a pris un arrêté interdisant les attroupements. MM. Biétry et Quilici, ayant refusé d'obéir et d'encourager les grévistes à retourner à Audincourt, ont été arrêtés et conduits à la prison.",
      "Les grévistes ont demandé un répit de deux heures et ne se sont engagés à quitter le territoire de Belfort que si on relâche MM. Quilici et Biétry. Une bande de grévistes est arrivée ce matin pour faire cause commune avec ceux du Doubs."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'assassinat de Mme Neveu à Boran",
    "summary": "Denis Petit, alias Daniel, a été écroué pour le meurtre de Mme Neveu, retrouvée dans l'Oise. Bien que le suspect nie les faits, les preuves matérielles accablantes découvertes à sa ferme renforcent l'accusation.",
    "paragraphs": [
      "Le nommé Denis Petit, dit Daniel, âgé de trente-trois ans, a été arrêté. Il est accusé d'avoir assassiné Mme Neveu, dont le cadavre a été retrouvé dans l'Oise, à Bernes.",
      "La piste sanglante, découverte par les gendarmes, menait jusqu'à la ferme de Daniel. Les magistrats pensent que Daniel, criblé de dettes et menacé par ses créanciers, a tué Mme Neveu pour la dévaliser.",
      "Daniel nie toute participation au crime, malgré les éléments accablants, dont une chaise maculée de sang trouvée lors de la perquisition. L'enquête se poursuit."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique Internationale",
    "title": "Guillaume II en Angleterre",
    "summary": "Lors de son séjour en Angleterre, l'empereur Guillaume II s'est adonné à la chasse avant d'être convié à un banquet de gala où toute discussion politique fut strictement écartée.",
    "paragraphs": [
      "Dans la partie de chasse d'hier, Guillaume II a abattu personnellement dix faisans, huit perdrix et trois lapins. Le soir a eu lieu le solennel banquet de gala.",
      "La reine a reçu ses hôtes dans la grande salle de réception. La table, longue et étroite, était couverte d'un service de vaisselle d'or d'une valeur intrinsèque et historique considérable.",
      "Le prince de Galles a porté le premier toast à l'empereur Guillaume, puis l'empereur a levé son verre à la reine. Aucun discours politique n'a été prononcé."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une pensionnaire brûlée vive",
    "summary": "Un terrible accident domestique a frappé Mme veuve Victoire Cussant ; ses vêtements de flanelle ayant pris feu au contact d'une étincelle, elle a succombé après une longue agonie.",
    "paragraphs": [
      "Une pensionnaire de l'établissement, Mme veuve Victoire Cussant, âgée de soixante ans, s'est approchée de la cheminée. Une étincelle tomba sur ses vêtements de flanelle, qui prirent feu instantanément.",
      "La malheureuse, malgré les soins qui lui ont été prodigués, a succombé après une terrible agonie."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Politique Coloniale",
    "title": "Troubles en Chine",
    "summary": "Des nouvelles de Chine font état d'insurrections dans l'hinterland de Kiaou-Tchéou, auxquelles les forces allemandes répondent, tandis que le général Bourmer regagne Hanoi.",
    "paragraphs": [
      "Le courrier de Chine apporte des nouvelles relatives aux troubles récents dans l'hinterland de Kiaou-Tchéou. Les Allemands ont dû faire face à plusieurs insurrections locales.",
      "Le général Bourmer annonce son retour à Hanoi. Les dépêches ne signalent aucun événement nouveau entre les belligérants au Siam."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Guerre des Boers",
    "title": "Nouvelles du Transvaal et du Natal",
    "summary": "Le général Joubert tente de bloquer les troupes britanniques vers Ladysmith. À Kimberley, le colonel Baden-Powell maintient ses positions, avec un armistice local pour les civils.",
    "paragraphs": [
      "Le général Joubert se préoccupe de barrer la route aux troupes anglaises venant de Durban pour tâcher de dégager Ladysmith et Estcourt.",
      "À Kimberley, tout va bien selon le colonel Baden-Powell. Les Britanniques ont effectué quelques sorties avec succès malgré les bombardements. Un armistice a été convenu pour permettre aux femmes et aux enfants de quitter le camp boer."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Étranger",
    "title": "La situation au Transvaal",
    "summary": "Au Transvaal, les Boers renforcent leurs positions et réquisitionnent les ressources, tandis que certains colons britanniques, déçus par l'inaction de Londres, rejoignent les insurgés.",
    "paragraphs": [
      "La censure ne permet pas d'indiquer la disposition des troupes anglaises, mais on a la plus entière confiance dans le succès des mesures qui ont été prises.",
      "Les troupes sont pourvues d'eau en abondance.",
      "L'adjoint au shérif de Colesberg est arrivé ici et rapporte que beaucoup de sujets loyaux sont restés dans cette ville pour veiller sur leurs intérêts.",
      "On croit que l'intention des Boers est de réquisitionner dans toutes les maisons pour provisionner leur intendance.",
      "Le correspondant du Cape Times, porteur d'un message envoyé avec la permission de M. Schreiner, a été conduit comme prisonnier à Bloemfontein.",
      "M. Van der Walt, député de Colesberg au Parlement du Cap, a déclaré publiquement à Colesberg qu'il avait gardé le silence assez longtemps et que, l'Angleterre n'ayant pas protégé ses sujets, il allait rejoindre les Orangeois.",
      "Les Boers occupent près de Belmont la même position qu'ils occupaient il y a onze jours lors de l'attaque d'une reconnaissance anglaise. Ils ont tiré avec leur artillerie sur une patrouille de cavalerie sans atteindre les cavaliers."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Économie",
    "title": "Les Mines d'Or du Transvaal",
    "summary": "État de la production aurifère au Transvaal : le point sur les mines exploitées directement par le gouvernement et celles maintenues sous le contrôle des compagnies privées en ces temps troublés.",
    "paragraphs": [
      "Suivant le Standard and Digger's News, les mines suivantes sont exploitées directement par le gouvernement du Transvaal : Robinson, Bonanza, Ferreira-Deep.",
      "Sont exploitées par les employés de la compagnie : Village Main Reef, Ferreira, Worcester, Plumer. On s'attend à ce que la Rose Deep et la South Geldenhuis reprennent le travail prochainement sous le contrôle du gouvernement."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Justice",
    "title": "La Haute Cour : Onzième audience",
    "summary": "Poursuite des débats devant la Haute Cour. M. le Président interroge MM. Brunet et Cailly sur leurs activités politiques et leurs relations, tandis que la défense tente en vain de modifier l'ordre des témoignages.",
    "paragraphs": [
      "M. le Président interroge M. Brunet, qui se plaint de sa détention et de ses conditions d'arrestation. Il affirme être un sincère républicain, mais répudie le régime actuel qu'il a cherché à renverser.",
      "L'interrogatoire de M. Cailly porte sur ses relations avec les groupes antisémites et sur l'interprétation d'une lettre visant M. Dubuc. L'accusé soutient qu'il agissait en tant qu'administrateur et non comme un agent de Dubuc.",
      "Le président a reçu plusieurs défenseurs pour discuter de l'ordre d'audition des témoins. M. Evain et M. Lemarignier ont déposé des conclusions concernant la liberté immédiate de leurs clients et l'ordre des témoignages, conclusions rejetées par la Cour."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "Informations politiques",
    "summary": "Tour d'horizon des travaux parlementaires : réformes de l'instruction publique, discussions fiscales sur l'impôt sur le revenu et le régime des boissons, et renforcement nécessaire de la flotte militaire.",
    "paragraphs": [
      "M. Leygues, ministre de l'Instruction publique, a été entendu sur la réforme des lycées et la situation des répétiteurs et des proviseurs.",
      "Le bureau de la commission de l'impôt sur le revenu a sollicité le ministre des Finances.",
      "Le projet de M. Caillaux sur le régime des boissons fait l'objet d'observations fiscales.",
      "M. Gervais demande le bénéfice de l'allocation pour les agents de l'État en raison de la cherté des vivres liée à l'Exposition.",
      "Le groupe colonial et diplomatique s'est réuni pour discuter de la défense des colonies et de l'augmentation de la flotte de guerre."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Nouvelles Coloniales",
    "title": "La situation au Ouadai",
    "summary": "Les rumeurs d'une intrusion turque au Ouadai sont jugées peu probables par la presse, qui y voit plutôt une mission diplomatique du vali de Tripoli envoyée pour garantir la fidélité du sultan.",
    "paragraphs": [
      "Une dépêche annonce que des troupes turques seraient entrées dans le Ouadai ; une information peu fondée selon la presse, étant donné la distance géographique. Il s'agirait plutôt d'une mission diplomatique envoyée par le vali de Tripoli pour assurer la fidélité du sultan."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Éducation",
    "title": "L'enseignement à Madagascar",
    "summary": "Annonce d'une conférence consacrée à l'œuvre scolaire à Madagascar, qui se tiendra à la Sorbonne le 30 novembre sous la haute présidence du général Galliéni.",
    "paragraphs": [
      "Une conférence sur l'œuvre scolaire à Madagascar sera organisée à la Sorbonne le 30 novembre, sous la présidence du général Galliéni, avec M. Gauthier comme conférencier."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Étranger",
    "title": "Dépêches de l'étranger",
    "summary": "Actualités internationales : renforcement des défenses à Portsmouth, un assassinat politique à Saint-Pétersbourg, des tensions parlementaires à Berlin et le décès du vice-président des États-Unis, M. Hobart.",
    "paragraphs": [
      "Portsmouth : Inspection minutieuse des défenses de la rade et modernisation des forts.",
      "Saint-Pétersbourg : M. Somov, maître de police de Tchita, a été assassiné chez lui d'un coup de carabine.",
      "Berlin : Le rejet de la loi contre les grévistes agite la presse ; le gouvernement envisage des sanctions contre les députés fonctionnaires.",
      "New-York : Mort de M. Hobart, vice-président des États-Unis, à l'âge de cinquante-cinq ans."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident sur la Mayenne",
    "summary": "Un tragique naufrage sur la Mayenne coûte la vie à deux jeunes soldats, Émile Bruley et Gustave Mertz, malgré les efforts déployés pour leur porter secours.",
    "paragraphs": [
      "Quatre élèves musiciens ont fait naufrage en barque sur la Mayenne. Deux ont pu être sauvés des eaux, mais Émile Bruley et Gustave Mertz, deux jeunes soldats, se sont malheureusement noyés."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Une femme étranglée à Anvers",
    "summary": "Découverte macabre à Anvers : Mme Smits, une cabaretière, a été retrouvée étranglée dans sa cave. Le vol est privilégié comme mobile, le tiroir-caisse ayant été fracturé par le ou les malfaiteurs.",
    "paragraphs": [
      "Le cadavre de Mme Smits, une cabaretière d'Anvers, a été découvert étranglé dans sa cave. Le vol semble être le mobile principal du crime, le tiroir-caisse ayant été retrouvé fracturé."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un drame conjugal à Alfortville",
    "summary": "À Alfortville, un drame de la jalousie sur fond d'alcoolisme : Mme Chambien met fin à ses jours en se poignardant après avoir tenté d'agresser son époux.",
    "paragraphs": [
      "À la suite de soupçons de jalousie et sous l'influence de l'alcool, Mme Chambien s'est suicidée en se poignardant, après avoir tenté d'attaquer son mari."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Politique",
    "title": "Conseil Général de la Seine",
    "summary": "Le Conseil général de la Seine se penche sur les transports en commun, adoptant des vœux pour les lignes de tramways et l'amélioration de la desserte ferroviaire en banlieue.",
    "paragraphs": [
      "Le Conseil a examiné les lignes de tramways de pénétration et a adopté des vœux concernant les conditions de vente des billets de chemins de fer ainsi que la création de nouvelles gares dans la banlieue parisienne."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Justice",
    "title": "Le tuteur malgré lui",
    "summary": "Le tribunal civil a rendu un arrêt déboutant M. Archdeacon d'une tutelle imposée par conseil de famille, jugeant inéquitable de contraindre une personne à une telle charge contre son gré.",
    "paragraphs": [
      "Le tribunal civil de la Seine a rendu un jugement important déchargeant M. Archdeacon d'une tutelle qui lui avait été imposée par un conseil de famille, considérant qu'il est contraire à l'équité de contraindre une personne à une telle responsabilité contre sa volonté expresse."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Social",
    "title": "Le conflit des ouvriers maréchaux",
    "summary": "La corporation des ouvriers maréchaux est en pleine effervescence. Les négociations se poursuivent entre patrons et ouvriers concernant les salaires, le temps de travail et le repos dominical.",
    "paragraphs": [
      "Un conflit social agite actuellement la corporation des ouvriers maréchaux. Les débats se concentrent sur la révision des barèmes de salaires, la limitation de la durée journalière du travail et la revendication légitime du repos dominical. Des pourparlers sont en cours pour tenter de résoudre ce différend qui menace de s'étendre."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Social",
    "title": "Grève des ouvriers des services publics",
    "summary": "Face à la grève des maréchaux-ferrants, le préfet de police mobilise des troupes pour assurer les services publics, notamment l'enlèvement des ordures ménagères entassées dans les rues de la capitale.",
    "paragraphs": [
      "Les décisions définitives seront arrêtées au cours de la réunion tenue cet après-midi à la Bourse du travail.",
      "Outre une assemblée à laquelle assistaient hier soir un grand nombre de maréchaux des Petites-Voitures, de la Compagnie Urbaine et des Omnibus, il a été convenu que les ouvriers appartenant à ces administrations se joindraient à leurs camarades pour faire cause commune.",
      "Le préfet de police, face au péril sanitaire, a décidé de remplacer temporairement les maréchaux-ferrants en grève par des détachements de soldats.",
      "Cette mesure d'exception se justifie par l'impérieuse nécessité d'assurer l'enlèvement quotidien des ordures ménagères qui s'accumulent dans les artères de la capitale."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Social",
    "title": "Travail des femmes et des enfants",
    "summary": "M. Millerand, ministre du Commerce et de l'Industrie, a été entendu par la commission parlementaire sur l'application rigoureuse de la loi de 1892 limitant la journée de travail à dix heures.",
    "paragraphs": [
      "M. Millerand, ministre du Commerce et de l'Industrie, a été entendu hier par la commission chargée de veiller à l'application de la loi du 2 novembre 1892, relative au travail des enfants et des femmes dans les établissements industriels.",
      "Le ministre a insisté sur l'application stricte et immédiate de cette loi, dont l'objet est de fixer à dix heures la durée maximale de la journée de travail."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Activités officielles et mondaines",
    "summary": "Chronique parisienne : le Président de la République reçoit le général de Torcy, tandis que les grands-ducs de Russie quittent la capitale et que la princesse de Schleswig-Holstein y arrive.",
    "paragraphs": [
      "Le Président de la République a reçu hier matin M. le général de Torcy, commandant le 1er corps d'armée.",
      "Le grand-duc Alexis et le grand-duc Constantin de Russie, qui séjournaient à Paris depuis quelques jours, en sont repartis hier soir par l'Express-Orient, à destination de Saint-Pétersbourg.",
      "La princesse de Schleswig-Holstein, tante de l'empereur d'Allemagne, est arrivée hier matin à Paris, en provenance de Berlin."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Administration",
    "title": "Changement à la Sûreté générale",
    "summary": "M. Cavard, ancien contrôleur général, est nommé directeur de la Sûreté générale en remplacement de M. Viguié. L'emploi de directeur est par ailleurs supprimé afin d'alléger les services administratifs.",
    "paragraphs": [
      "M. Cavard, ancien contrôleur général, est nommé directeur chargé de la direction de la Sûreté générale, en remplacement de M. Viguié.",
      "L'emploi de directeur est supprimé pour raison d'économie et de simplification dans les rouages, le véritable directeur politique de la Sûreté générale étant naturellement le chef de cabinet du ministre."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Informations générales",
    "title": "Inauguration du monument d'Alphand",
    "summary": "L'inauguration du monument érigé en l'honneur de M. Alphand, œuvre du sculpteur Dalou située dans l'avenue du Bois-de-Boulogne, est officiellement fixée au 14 décembre prochain.",
    "paragraphs": [
      "L'inauguration, dans l'avenue du Bois-de-Boulogne, du monument d'Alphand, œuvre du sculpteur Dalou, vient d'être fixée au 14 décembre, à dix heures et demie du matin."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Agriculture",
    "title": "Réception d'une délégation agricole du Nord",
    "summary": "Le ministre de l'Agriculture, M. Jean Dupuy, a reçu une délégation du Nord l'invitant à présider la future exposition agricole de Lille. Il s'est engagé à examiner les dossiers soumis avec attention.",
    "paragraphs": [
      "M. Jean Dupuy, ministre de l'Agriculture, a reçu hier matin une délégation nombreuse de la société des agriculteurs du Nord, accompagnée de plusieurs sénateurs et députés du département, du préfet et du maire de Lille.",
      "La délégation a invité le ministre à assister à l'exposition organisée à Lille et à présider la distribution des récompenses. Le ministre a promis d'examiner avec la plus grande attention toutes les questions soumises."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Sciences",
    "title": "L'élevage des papillons",
    "summary": "À Eastbourne, l'entomologiste William Watkins a créé une ferme à papillons unique en son genre, fournissant des spécimens à travers le monde entier depuis son jardin de quatre mille mètres carrés.",
    "paragraphs": [
      "M. William Watkins, un entomologiste, est le premier qui ait eu l'idée de se livrer à l'élevage en grand de papillons. Son établissement d'Eastbourne fournit des milliers d'insectes aux collectionneurs et aux jardins zoologiques.",
      "La ferme à papillons couvre une superficie de quatre mille mètres carrés, remplie de fleurs et d'arbres, où volètent près d'un million de papillons d'espèces variées."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une lectrice acharnée",
    "summary": "Le décès à Breslau d'une dame de quarante-six ans révèle une passion hors du commun : cette lectrice insatiable avait dévoré plus de dix-neuf mille romans au cours de son existence.",
    "paragraphs": [
      "Il vient de mourir à Breslau une dame allemande, décédée à l'âge de quarante-six ans, qui, sa vie durant, a lu plus de dix-neuf mille romans."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort subite à la gare de Lyon",
    "summary": "Un vieillard de soixante-six ans, nommé M. Thomas, a été découvert sans vie dans un wagon de troisième classe à la gare de Lyon. Le défunt était en possession d'une somme considérable en or et valeurs.",
    "paragraphs": [
      "Un vieillard de soixante-six ans, nommé M. Thomas, a été trouvé mort, hier, à la gare de Lyon, dans un wagon de troisième classe. Il portait sur lui quatre cent mille francs en or et valeurs. L'examen médical a révélé qu'il avait succombé à la rupture d'un anévrisme."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents sur la Ligne de Ceinture",
    "summary": "Une série d'accidents ferroviaires a marqué la journée : un homme a été transporté à l'hôpital Boucicaut après une tentative de suicide, et un voyageur a été gravement blessé à la gare d'Auteuil.",
    "paragraphs": [
      "Un homme a tenté de mettre fin à ses jours par arme à feu, hier, dans un train en provenance de la gare Saint-Lazare. La victime a été transportée d'urgence à l'hôpital Boucicaut.",
      "À la gare d'Auteuil, un voyageur nommé Paul Doucet a été grièvement blessé par une locomotive alors qu'il tentait de descendre du convoi à contre-voie."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestations mouvementées",
    "summary": "Quatre malfaiteurs ont été appréhendés par les agents de la sûreté, boulevard de la Villette, lors d'une tentative de cambriolage audacieuse qui a suscité une vive émotion chez les résidents.",
    "paragraphs": [
      "Quatre cambrioleurs ont été appréhendés, cette nuit, alors qu'ils s'introduisaient dans un logement du boulevard de la Villette. Malgré une vive résistance et la frayeur causée aux locataires, les agents de la sûreté ont réussi à capturer les malfaiteurs."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une femme courageuse",
    "summary": "Mlle Gervais-Flémin, artiste dramatique, a fait preuve d'une détermination remarquable en tenant en respect, à coups de marteau, un cambrioleur surpris dans son domicile de la rue de Douai.",
    "paragraphs": [
      "Mlle Gervais-Flémin, artiste dramatique, a mis en fuite un cambrioleur qui tentait de s'introduire chez elle, rue de Douai, en le frappant énergiquement avec un marteau."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Explosion de gaz au quai d'Anjou",
    "summary": "Une violente déflagration due au gaz est survenue au domicile de M. Bureau, au quai d'Anjou. L'ouvrier Gaston Hébert a été grièvement blessé au visage par l'explosion.",
    "paragraphs": [
      "Une explosion de gaz s'est produite, hier, au domicile de M. Bureau, au quai d'Anjou. Un ouvrier, Gaston Hébert, a été sérieusement blessé au visage par le souffle de la déflagration."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue (Suresnes, Clichy, Levallois-Perret, Pantin)",
    "summary": "Une série d'accidents domestiques et professionnels s'est produite en banlieue parisienne : chutes, fractures et blessures graves à Suresnes, Clichy, Levallois et Pantin.",
    "paragraphs": [
      "À Suresnes, une dame, Mme de Carry, a été découverte dans un état de grande terreur. À Clichy, un charretier, Alexis Lebœuf, a eu le bras fracturé en tombant sous la roue de son véhicule.",
      "À Levallois-Perret, un jardinier a fait une chute de quatre mètres dans une cave. À Pantin, un ouvrier ajusteur a été projeté d'une hauteur de sept mètres dans une usine en construction."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Faits divers",
    "title": "Tentative de voyage à motocycle de Saint-Pétersbourg à Paris",
    "summary": "M. Orlowsky poursuit son ambitieux voyage à motocycle entre Saint-Pétersbourg et Paris, alternant avec le train entre Berlin et Cologne, espérant une arrivée imminente.",
    "paragraphs": [
      "M. Orlowsky est venu jusqu'à Berlin à motocycle ; là, il a pris le train pour Cologne. De cette dernière ville, il compte venir à Paris en finissant son périple à deux roues. Avant-hier, il était à Verrières, espérant arriver aujourd'hui dans nos murs."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Faits divers",
    "title": "Une autre tentative motocycliste franco-russe",
    "summary": "Le coureur M. Paul Tideman s'est élancé hier de Paris pour Moscou sur un quadricycle à pétrole, bravant les rigueurs de l'hiver et les routes enneigées.",
    "paragraphs": [
      "M. Paul Tideman, un coureur slave, est parti hier de la place de la République sur un quadricycle à pétrole, se rendant à Moscou sur cet engin. Il faut véritablement quelque courage pour affronter les routes russes à cette époque de l'année, où la neige les recouvre entièrement."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Communications diverses",
    "title": "Fédération nationale des médaillés militaires",
    "summary": "Appel aux titulaires de la médaille militaire pour la constitution d'une fédération nationale dont l'assemblée générale inaugurale se tiendra en janvier 1900.",
    "paragraphs": [
      "La Fédération nationale des médaillés militaires, société en formation ayant pour but le groupement des médaillés militaires en vue de resserrer entre eux les liens moraux de camaraderie et de solidarité, a l'honneur d'informer les titulaires de cette décoration que la première assemblée générale aura lieu dans le courant de janvier 1900. Ceux dont l'adhésion sera reçue avant le 1er janvier seront considérés comme membres fondateurs.",
      "Adresser les adhésions à M. Mathieu, président, rue d'Alésia, Paris."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Communications diverses",
    "title": "Banquet du Comité républicain du Commerce et de l'Industrie",
    "summary": "Le Comité républicain du Commerce et de l'Industrie convie ses membres à son banquet d'inauguration officiel au Grand-Hôtel, le mercredi 29 novembre.",
    "paragraphs": [
      "Le comité républicain du Commerce et de l'Industrie donnera son banquet d'inauguration le mercredi 29 novembre, à sept heures du soir, dans la salle des fêtes du Grand-Hôtel."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Communications diverses",
    "title": "Assemblée de l'Union des sociétés régimentaires",
    "summary": "L'Union des sociétés régimentaires d'anciens militaires convie ses membres à son assemblée générale annuelle, qui se tiendra le dimanche 3 décembre, à deux heures, dans le grand amphithéâtre de la Sorbonne.",
    "paragraphs": [
      "L'Union des sociétés régimentaires d'anciens militaires tiendra son assemblée générale le dimanche 3 décembre, à deux heures, dans le grand amphithéâtre de la Sorbonne."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Communications diverses",
    "title": "Matinée au profit de l'Union d'assistance par le travail",
    "summary": "La traditionnelle matinée annuelle au profit de l'Union d'assistance par le travail se tiendra le dimanche 26 novembre, à deux heures de l'après-midi, au 81, rue de Grenelle.",
    "paragraphs": [
      "La matinée annuelle au profit de l'Union d'assistance par le travail aura lieu le dimanche 26 novembre, à deux heures de l'après-midi, au 81, rue de Grenelle."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Communications diverses",
    "title": "Conférences de l'Association des anciens élèves de l'Institut agronomique",
    "summary": "L'Association des anciens élèves de l'Institut agronomique inaugure un nouveau cycle de conférences le mercredi 29 novembre, à huit heures du soir, au siège de la Société d'acclimatation, 44, rue de Lille.",
    "paragraphs": [
      "L'Association des anciens élèves de l'Institut agronomique organise une série de conférences qui auront lieu à partir du mercredi 29 novembre, à huit heures du soir, au siège de la Société d'acclimatation, 44, rue de Lille."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Communications diverses",
    "title": "Séance solennelle de la Ligue nationale contre l'alcoolisme",
    "summary": "La Ligue nationale contre l'alcoolisme tiendra sa séance solennelle de distribution des récompenses le dimanche 26 novembre, à deux heures de l'après-midi, aux Sociétés savantes, 28, rue Serpente.",
    "paragraphs": [
      "La séance solennelle de distribution des récompenses de la Ligue nationale contre l'alcoolisme (Société française de tempérance) aura lieu le dimanche 26 novembre, à deux heures de l'après-midi, aux Sociétés savantes, 28, rue Serpente."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Communications diverses",
    "title": "Banquet de la Lot-et-Garonnaise",
    "summary": "La société amicale « La Lot-et-Garonnaise » convie ses membres à son banquet annuel qui se tiendra ce samedi soir, rue de Rivoli.",
    "paragraphs": [
      "Le banquet de la société amicale « La Lot-et-Garonnaise » aura lieu ce samedi soir, rue de Rivoli."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Communications diverses",
    "title": "Réunions syndicales à la Bourse du travail",
    "summary": "La Bourse du travail, située rue du Château-d'Eau, annonce pour ce soir diverses réunions syndicales concernant plusieurs corporations, notamment les travailleurs du gaz, les peintres et les ouvriers en instruments de précision.",
    "paragraphs": [
      "Ce soir, à la Bourse du travail, 3, rue du Château-d'Eau, se tiendront les réunions des travailleurs du gaz (salle Bondy), des badigeonneurs (salle du Bas), des ouvriers en instruments de précision, de la chambre syndicale des peintres en voitures, des coupeurs-brocheurs en chaussures, des ferblantiers de la Seine et des tourneurs-robinettiers."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Bulletin commercial",
    "title": "Halle au blé du 23 novembre",
    "summary": "Le marché des blés du 23 novembre se caractérise par une offre restreinte et une demande atone, la meunerie privilégiant les approvisionnements de province. Les cours des blés blancs et roux demeurent stables sur Paris.",
    "paragraphs": [
      "Peu d'offres en blés indigènes ; mais la demande était calme, la meunerie trouvant à s'approvisionner facilement sur les marchés de province. Les prix sont restés sensiblement les mêmes.",
      "Les blés blancs valaient de 18 fr. à 18.50 et les roux de 17.75 à 18 fr. les 100 kilos, gare Paris ou dans les usines."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Informations maritimes",
    "title": "Départs et arrivées des paquebots",
    "summary": "Le point sur le trafic transatlantique : mouvements des paquebots Brésil, Saint-Simon, La Bretagne et Lafayette entre le 12 et le 23 novembre 1899.",
    "paragraphs": [
      "Le paquebot Brésil (M. M.), venant de La Plata et du Brésil, est arrivé à Lisbonne le 23 novembre, à une heure du soir.",
      "Le paquebot Saint-Simon (C. G. T.), venant d'Haïti et escales, est parti de Saint-Thomas le 12 novembre pour le Havre.",
      "Le paquebot La Bretagne (C. G. T.), venant du Havre, est arrivé à New-York le 23 novembre, à 1 heure du matin.",
      "Le paquebot Lafayette (C. G. T.), venant de Saint-Nazaire, est arrivé à Pointe-à-Pitre le 22 novembre, en route pour Colon et escales."
    ]
  }
];
