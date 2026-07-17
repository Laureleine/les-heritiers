// Date: 1900-06-20
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-06-20 (Version Restaurée, 33 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "L'Aéro-Club de France",
    "summary": "Malgré les ambitions de l'Aéro-Club de France, la navigation aérienne patine. L'absence d'engagements pour le concours de juin confirme que le problème de la direction des ballons reste, pour l'heure, sans solution.",
    "paragraphs": [
      "On s'était flatté que l'année 1900, dernière du siècle, verrait la solution d'un problème qui a passionné et qui passionne encore nombre d'esprits : nous voulons parler du problème de la direction des ballons.",
      "Une société dont nous avons fait l'éloge en son temps, l'Aéro-Club de France, s'était fondée il y a deux ans en vue de fournir à nos aéronautes les ressources et les champs d'expériences qui leur manquaient jusqu'ici.",
      "M. Emmanuel Aimé, secrétaire général de l'Aéro-Club, vient d'informer la commission qu'aucun engagement pour la première période du concours, laquelle devait aller du 1er au 15 juin dernier, n'avait été reçu au secrétariat de la société.",
      "On voit ce qu'il faut penser des bruits qui avaient couru en ces derniers temps et qui tendaient à nous donner le problème de la direction des ballons comme définitivement résolu, notamment concernant les travaux de M. Contour ou de M. Roze.",
      "Il est malheureusement probable que l'année 1900 ne verra pas encore la solution du grand problème de la locomotion aérienne. Mais un second concours doit s'ouvrir en août ; qui sait s'il ne nous réserve pas quelque surprise."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Main Gauche (Grand roman inédit)",
    "summary": "Dans une atmosphère lourde de non-dits, Jean Rédal et Victor Chauvette débattent de la noirceur humaine. Un revolver dissimulé dans une poche accompagne ce dialogue amer, interrompu par l'arrivée de Mlle Thérèse.",
    "paragraphs": [
      "Jean Rédal eut un rire saccadé : « L'assassin est un imbécile. Il n'avait qu'à la laisser. Ou un malin, le revolver l'aurait peut-être fait pincer. »",
      "Victor Chauvette, le jeune comptable, et Jean Rédal échangeaient des propos amers sur la vie, les femmes et le crime, tandis qu'un revolver restait dissimulé dans la poche de Rédal.",
      "Le dialogue entre les deux hommes révélait la souffrance du caissier et une étrange complicité troublante autour de la mort d'une femme.",
      "Mademoiselle Thérèse intervint, invitant Rédal chez ses parents, tentant d'apaiser ses idées noires avant de laisser les deux hommes à leur conversation mélancolique."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Actualité internationale",
    "title": "Les événements de Chine",
    "summary": "Après six heures de combat intense, les forts de Takou sont tombés aux mains des forces alliées. La France dépêche des renforts navals et militaires pour assurer la protection des diplomates européens à Pékin.",
    "paragraphs": [
      "Les dépêches que nous publions plus loin donnent des détails assez précis sur le fait d'armes glorieux qui a fait tomber les forts de Takou entre les mains de la flotte internationale.",
      "La situation des diplomates européens à Pékin préoccupe vivement l'opinion publique. Un de nos amis, qui connaît bien la Chine, estime que les légations bénéficient d'une protection naturelle grâce à leur position près des murailles de la ville.",
      "Les forts de Takou ont été réduits au silence après un engagement de six heures le 17 juin, et occupés par les forces alliées. Les navires de guerre anglais, russes, japonais, français et américains participent aux opérations.",
      "Le gouvernement français a désigné trois croiseurs, le Guichen, l'Amiral-Charner et le Friant, pour renforcer l'escadre devant Takou, tandis que des troupes d'infanterie de marine sont envoyées d'Indo-Chine."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "La Recluse d'Amiens",
    "summary": "Victor Sarot, figure centrale de l'affaire de la rue Dom-Bouquet, bénéficie d'une liberté provisoire. Le représentant de commerce maintient sa version des faits, malgré l'hostilité persistante de l'opinion.",
    "paragraphs": [
      "Victor Sarot, le héros de l'affaire de la rue Dom-Bouquet, a quitté la prison de Bicêtre ce soir après que M. Jumel, son défenseur, eut obtenu sa mise en liberté provisoire.",
      "Le représentant de commerce proteste toujours de son innocence, affirmant avoir nourri Angèle Thieullet par bonté. L'affaire semble devoir se terminer ainsi, bien que l'opinion publique proteste."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "Les Écoles des Manufactures nationales",
    "summary": "L'exposition des écoles des manufactures nationales, comme les Gobelins et Sèvres, met en lumière le talent des futurs artisans français. Une vitrine indispensable pour valoriser leur recherche esthétique.",
    "paragraphs": [
      "Les artisans qui lèguent à l'art moderne les tapisseries des Gobelins et les porcelaines de Sèvres sont recrutés parmi les élèves des deux écoles instituées dans nos manufactures nationales.",
      "Leur exposition particulière, organisée par le ministère de l'Instruction publique, témoigne de la recherche artistique de ces futurs ouvriers d'art, dont le travail mérite une plus grande attention du public."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Beaux-Arts",
    "title": "Expositions artistiques à Sèvres et aux Gobelins",
    "summary": "Un jugement sévère pour les expositions de Sèvres et des Gobelins : malgré des efforts louables, la sélection des œuvres peine à refléter l'excellence séculaire de nos manufactures nationales.",
    "paragraphs": [
      "Le travail accompli indique une recherche réelle, mais pour susciter l'intérêt du public, il eût fallu faire preuve d'une plus grande ambition et exposer des œuvres inattaquables, ce qui n'est malheureusement pas le cas ici.",
      "Quant à l'exposition de l'École des Gobelins, elle demeure restreinte et se résume à un panneau regroupant les travaux des élèves depuis la première leçon jusqu'à la pièce achevée. La section des manufactures nationales aux Invalides présente néanmoins un nombre plus significatif de travaux d'apprentis.",
      "Il est regrettable que l'on n'ait pas jugé nécessaire de donner davantage d'envergure à ces deux expositions, lesquelles auraient dû démontrer que Sèvres et les Gobelins demeurent à la hauteur de leur séculaire réputation."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Commerce Maritime",
    "title": "Les Chambres de Commerce à l'Exposition",
    "summary": "Les chambres de commerce françaises achèvent leurs travaux à l'Exposition. Une rétrospective technique illustrant le développement commercial des grands ports, de Dunkerque jusqu'à Marseille.",
    "paragraphs": [
      "Différents jurys de l'Exposition viennent de clore leurs opérations dans le palais édifié pour les chambres françaises de commerce maritime, sur le quai Debilly.",
      "Le port de Dunkerque présente des graphiques relatant ses progrès sur deux siècles. Caen, Ouistreham, Granville et Rouen ont proposé une exposition technique détaillée de leur transit.",
      "Calais, Boulogne et Dieppe se consacrent aux services de transport des voyageurs, tandis que Nantes expose le projet du futur canal de la Basse-Loire, infrastructure jugée essentielle à son expansion commerciale.",
      "La Rochelle et La Pallice précèdent l'exposition du Havre, qui souligne sa prospérité par un trafic de 2,5 millions de tonnes de marchandises. Marseille, Bordeaux, Bayonne, Cherbourg et Fécamp complètent cette importante section."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Musique",
    "title": "L'exposition rétrospective des instruments de musique",
    "summary": "L'Exposition universelle sublime l'histoire de la lutherie. Entre pianos royaux et violons Stradivarius, une collection exceptionnelle rend hommage à l'excellence des maîtres d'autrefois.",
    "paragraphs": [
      "L'exposition des instruments de musique constitue l'un des espaces les plus recherchés, offrant un panorama allant des créations contemporaines aux trésors rétrospectifs les plus précieux.",
      "Parmi les pièces remarquables figurent des clavecins et pianos d'époque, dont le piano de Grétry ayant appartenu à Jean-Jacques Rousseau, ainsi que celui construit par Sébastien Érard pour la reine Marie-Antoinette.",
      "Une vitrine dédiée aux instruments à archet expose un violoncelle d'André Amati et des violons de Stradivarius, dont la valeur est estimée à plusieurs dizaines de milliers de francs.",
      "L'école de Mirecourt est également représentée par les œuvres des Vuillaume et des Jacquot, côtoyant des instruments plus anciens tels que la viole d'amour, les théorbes et les vielles à roue."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Vie Politique",
    "title": "Le projet d'amnistie devant le Sénat",
    "summary": "La commission sénatoriale, présidée par M. Clamageran, progresse sur le projet d'amnistie. Si les délits fiscaux sont inclus, les crimes commis lors des troubles en Algérie demeurent exclus du texte.",
    "paragraphs": [
      "La commission sénatoriale de l'amnistie, sous la présidence de M. Clamageran, a examiné le projet gouvernemental. Le garde des Sceaux a confirmé que le Gouvernement accepte le principe de l'amnistie fiscale.",
      "Un amendement de M. Magnin, concernant la situation des déserteurs et des insoumis, a reçu l'approbation du Gouvernement.",
      "La commission a adopté le projet d'amnistie concernant les délits de presse, de réunion et de fraude fiscale, tout en maintenant l'exclusion pour les crimes commis durant les troubles survenus en Algérie."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Sénat",
    "title": "Séance du 19 juin",
    "summary": "Lors de la séance présidée par M. Fallières, le ministre de l'Intérieur a rappelé qu'une commune dépourvue de conseil municipal ne peut traiter avec l'administration.",
    "paragraphs": [
      "La séance est ouverte sous la présidence de M. Fallières. M. Denolx a interpellé M. Waldeck-Rousseau au sujet de la commune de Condat, qui refuse de nommer un conseil municipal en signe de protestation.",
      "Le ministre de l'Intérieur a répondu que l'administration est dans l'impossibilité juridique de traiter avec une commune privée de représentant légal."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Social",
    "title": "La grève agricole de la Martinique",
    "summary": "M. Knight interpelle le gouvernement sur les troubles sociaux en Martinique. Le ministre des Colonies, M. Decrais, annonce le retour au calme et des mesures disciplinaires contre le lieutenant Kahn pour son manque de sang-froid.",
    "paragraphs": [
      "L'interpellation de M. Knight porte sur la grève agricole de la Martinique et les troubles graves ayant causé vingt-trois victimes parmi la population.",
      "Le ministre des Colonies, M. Decrais, a affirmé devant la tribune que le calme est désormais rétabli et que le gouvernement prononcera des peines disciplinaires à l'encontre du lieutenant Kahn, dont le comportement lors des événements a manqué du sang-froid nécessaire.",
      "Le Sénat a adopté, à une très forte majorité, l'ordre du jour exprimant sa confiance dans les déclarations du gouvernement."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "La proposition de loi sur la presse",
    "summary": "Le Sénat examine la loi sur les délits de presse. M. Joseph Fabre défend sa proposition visant à réprimer l'injure envers le chef de l'État, tandis que plusieurs orateurs craignent une entrave à la liberté d'expression.",
    "paragraphs": [
      "Le Sénat a entamé la discussion sur la loi relative aux délits de presse. M. Joseph Fabre défend sa proposition en précisant qu'il souhaite uniquement réprimer l'injure publique et assurer la protection du chef de l'État.",
      "Plusieurs orateurs, notamment MM. Le Provost de Launay et Destieux-Junca, ont vivement combattu le projet, redoutant une restriction préjudiciable aux libertés fondamentales de la presse."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Chambre des Députés",
    "title": "Discussion sur l'outillage des ports de guerre",
    "summary": "La Chambre débat de l'outillage des ports de guerre, notamment Bizerte. M. Camille Pelletan suggère un port de refuge à l'étang de Berre, tandis que l'amiral Rieunier insiste sur la nécessité d'accélérer les travaux navals.",
    "paragraphs": [
      "La Chambre a poursuivi la discussion sur l'outillage des ports de guerre, et plus particulièrement sur celui de Bizerte. M. Camille Pelletan a déposé un contre-projet préconisant la création d'un port de refuge dans l'étang de Berre.",
      "L'amiral Rieunier a critiqué l'insuffisance du projet gouvernemental, réclamant des moyens accrus pour la flotte et une accélération urgente des travaux de défense navale."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Étranger",
    "title": "La guerre au Transvaal",
    "summary": "Lord Roberts confirme le calme à Pretoria et Johannesburg. Au Congrès du Bond à Paarl, les Afrikanders dénoncent vivement l'intervention britannique et réaffirment leur détermination à maintenir leur indépendance.",
    "paragraphs": [
      "Lord Roberts télégraphie que le calme règne actuellement à Pretoria et Johannesburg. De grandes quantités d'armes ont été récupérées auprès des prisonniers anglais libérés.",
      "À Paarl, le Congrès du Bond a déclaré que la guerre est le résultat de l'intervention injustifiable de l'Angleterre, soulignant avec force que les Afrikanders ne renonceront jamais à leur indépendance."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Crime mystérieux à Nantes",
    "summary": "Un crime sanglant a été découvert rue de la Juiverie à Nantes. Victoire Samson, une marchande de légumes, a été trouvée assassinée dans sa demeure. Le parquet a ouvert une information judiciaire.",
    "paragraphs": [
      "Un crime audacieux a été commis rue de la Juiverie, à Nantes. Victoire Samson, marchande de légumes, a été découverte assassinée dans sa propre maison en l'absence de sa mère.",
      "Le parquet a immédiatement ouvert une enquête, bien qu'aucun indice probant ne permette pour l'instant d'élucider les circonstances de ce meurtre tragique."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Social",
    "title": "Société de curatelle des jeunes filles",
    "summary": "La Société de curatelle des jeunes filles a tenu une assemblée remarquée, honorant Mme Loubet comme présidente d'honneur et saluant l'œuvre de Mme Anderson et de Mme Béguin en faveur de l'enfance.",
    "paragraphs": [
      "La Société de curatelle des jeunes filles a été particulièrement applaudie lors de son assemblée, notamment Mme Anderson de Meijerhelm, directrice de l'Abri de la Fillette, pour son dévouement exemplaire.",
      "Mme Béguin, directrice de l'école des filles de la rue Romette, a raconté avec éloquence l'histoire de l'Œuvre du Trousseau, dont elle est la fondatrice, soulignant les besoins persistants de ses protégées.",
      "Mme Loubet a été officiellement nommée présidente d'honneur de cette œuvre charitable, témoignant ainsi de l'intérêt porté par les hautes sphères à cette cause sociale."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Météo et Navigation",
    "title": "Bulletin météorologique et fluvial du 19 juin",
    "summary": "Le beau temps persiste sur la capitale. Le bulletin signale des averses orageuses en province et dresse le bilan technique des relevés effectués sur la Seine et le canal Saint-Martin.",
    "paragraphs": [
      "Le beau temps continue à régner sur Paris avec un vent faible. Des pluies ont été signalées sur les îles Britanniques ainsi que dans le centre de la France.",
      "On note toutefois des orages localisés à Nice, au Puy-de-Dôme et au mont Mounier, perturbant le ciel serein de ces régions.",
      "Navigation fluviale : les relevés techniques ont été effectués aux ponts et écluses de la Seine ainsi que sur le canal Saint-Martin en ce 19 juin."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Urbanisme",
    "title": "Projets d'urbanisme aux Buttes-Chaumont",
    "summary": "La ville de Paris envisage d'importants travaux d'aménagement dans le XIXe arrondissement pour fluidifier la circulation entre le parc des Buttes-Chaumont et les artères adjacentes dès cet automne.",
    "paragraphs": [
      "La direction des travaux étudie actuellement plusieurs projets destinés à améliorer l'aération et la circulation dans le dix-neuvième arrondissement.",
      "Il s'agit principalement de l'ouverture d'une nouvelle voie entre le carrefour des quatre arrondissements et le parc des Buttes-Chaumont, ainsi que du tracé d'une artère reliant l'avenue Botzaris à la rue des Fêtes.",
      "Le conseil municipal sera prochainement saisi de ces projets, dont l'exécution pourrait débuter dès l'automne prochain."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Art",
    "title": "Décoration artistique des mairies",
    "summary": "Les mairies de Charenton, Bourg-la-Reine et Asnières feront l'objet d'une décoration monumentale célébrant les paysages locaux, pour un budget total de 50 000 francs.",
    "paragraphs": [
      "Trois hôtels de ville suburbains, ceux de Charenton, Bourg-la-Reine et Asnières, vont recevoir une décoration artistique reproduisant les principaux sites et paysages de leurs communes respectives.",
      "À Charenton, M. Georges Roussel peindra un panorama illustrant les bords de la Marne. À Bourg-la-Reine, M. Monu décorera la salle des mariages avec des paysages évoquant la vallée de la Bièvre.",
      "La nouvelle mairie d'Asnières fera décorer sa grande salle des fêtes par M. Courselles-Dumont, l'ensemble de ces commandes représentant un coût total de 50 000 francs."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Économie",
    "title": "Les mines du globe",
    "summary": "Un rapport du Home Office de Londres dresse un panorama statistique mondial des mines, révélant la suprématie financière des États-Unis malgré le grand nombre de mineurs en Angleterre.",
    "paragraphs": [
      "Un rapport récent du Home Office de Londres livre des statistiques inédites sur l'activité des mines et carrières à travers le monde.",
      "L'Angleterre compte le plus grand nombre d'ouvriers mineurs, suivie par l'Allemagne, les États-Unis et la France.",
      "Cependant, les États-Unis détiennent le record de la production minière en valeur absolue, devançant le Royaume-Uni et l'Allemagne.",
      "La mortalité moyenne dans les mines du globe est jugée satisfaisante, bien que le rapport insiste sur la nécessité de poursuivre les efforts en matière de sécurité."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie du Théâtre-Français",
    "summary": "M. Louiche, juge d'instruction, a communiqué au parquet l'état de la procédure relative à l'incendie du Théâtre-Français. L'instruction, bien que non close, s'oriente vers le délit d'homicide par imprudence.",
    "paragraphs": [
      "M. Louiche, juge d'instruction, a communiqué au procureur de la République l'état de la procédure concernant le tragique incendie du Théâtre-Français.",
      "Si l'instruction n'est pas encore formellement close, il appert que l'inculpation viserait désormais le délit d'homicide par imprudence."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un gardien de la paix vitriolé",
    "summary": "Agression brutale à la gare du Point-du-Jour : le gardien de la paix Prosper Jacques a été frappé au visage par de l'acide sulfurique lancé par Joséphine Villemsens. L'auteure a été immédiatement appréhendée.",
    "paragraphs": [
      "Le gardien de la paix Prosper Jacques a été victime d'une odieuse agression à la gare du Point-du-Jour. Une blanchisseuse, nommée Joséphine Villemsens, lui a projeté de l'acide sulfurique au visage dans un accès de jalousie.",
      "La victime, bien que sérieusement atteinte, n'est que légèrement brûlée. L'auteure de cet acte criminel a été arrêtée sur-le-champ par les agents de service."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Rixe rue Saint-Charles",
    "summary": "Une violente rixe a éclaté rue Saint-Charles, laissant M. Louis Lévôque grièvement blessé par deux coups de couteau portés dans le dos. L'agresseur a été interpellé par les autorités.",
    "paragraphs": [
      "Au cours d'une violente rixe survenue rue Saint-Charles, M. Louis Lévôque a été frappé de deux coups de couteau portés dans le dos par un inconnu.",
      "Transporté d'urgence, son état est jugé grave par les médecins. Le coupable, appréhendé peu après les faits, a été conduit au poste de police."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide au Père-Lachaise",
    "summary": "Drame au cimetière du Père-Lachaise : un jeune homme âgé d'une vingtaine d'années a mis fin à ses jours en se tirant un coup de feu. L'identité du malheureux demeure pour l'heure inconnue.",
    "paragraphs": [
      "Un drame s'est déroulé dans l'enceinte du cimetière du Père-Lachaise. Un jeune homme, paraissant âgé d'une vingtaine d'années, a mis fin à ses jours en se tirant une balle en pleine tête.",
      "Les autorités ont procédé au constat du décès ; toutefois, l'identité du désespéré n'a pas encore pu être établie par les enquêteurs."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un chien enragé rue des Murs-de-la-Roquette",
    "summary": "Un chien de Terre-Neuve atteint de rage a semé la terreur rue des Murs-de-la-Roquette en mordant plusieurs passants. L'animal a été abattu par un agent et une victime a été admise à l'Institut Pasteur.",
    "paragraphs": [
      "Une vive émotion a régné rue des Murs-de-la-Roquette où un chien de race Terre-Neuve, manifestement enragé, a mordu plusieurs personnes sur son passage avant d'être finalement abattu par un inspecteur de police.",
      "Parmi les personnes mordues, M. Ernest Rohon a dû être conduit d'urgence à l'Institut Pasteur pour y recevoir les soins nécessaires contre la rage."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Série d'accidents et drames en banlieue",
    "summary": "La banlieue parisienne est le théâtre de nombreux drames : chutes mortelles à La Garenne-Colombes, accidents de la route à Puteaux et Asnières, et heurts violents lors de bals à Aubervilliers et Pantin.",
    "paragraphs": [
      "À Asnières, un artiste lyrique, dans un accès de désespoir, s'est porté un coup de couteau. À Puteaux, une femme a été mortellement écrasée par une voiture. À Suresnes, un débardeur a fait une chute fatale d'une passerelle.",
      "À La Garenne-Colombes, un couvreur a trouvé la mort dans une chute tragique. À Aubervilliers, un jeune homme a été grièvement agressé lors d'un bal. À Pantin, une violente bagarre a éclaté dans un débit de boisson."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Faits divers divers",
    "summary": "Chroniques locales : une probité exemplaire au Raincy, un sauvetage héroïque à Bry-sur-Marne, et une série d'accidents mortels du travail et de la circulation endeuillant Choisy, Vanves et Montlhéry.",
    "paragraphs": [
      "Au Raincy, Mlle Céline Faudot a découvert une somme de 1 150 francs, qu'elle a aussitôt remise à l'hôtel de ville. À Bry-sur-Marne, un cultivateur a fait preuve d'un courage remarquable en sauvant un enfant tombé dans un puits.",
      "À Choisy-le-Roi, un ouvrier a été grièvement blessé par une chaîne de drague. À Vanves, un terrassier a été écrasé par un tombereau. À Montlhéry, une femme a perdu la vie, heurtée par un tramway."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Judiciaire",
    "title": "Nouvelles judiciaires",
    "summary": "Le magistrat André a été officiellement chargé de l'instruction concernant l'affaire du docteur Devillers, poursuivi pour des outrages envers le docteur Pozzi.",
    "paragraphs": [
      "Le juge André a été officiellement désigné pour instruire le dossier concernant le docteur Devillers, accusé d'avoir proféré des outrages à l'encontre du docteur Pozzi."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Départements",
    "title": "Actualités de province",
    "summary": "Une sombre chronique provinciale marquée par plusieurs drames : suicides par asphyxie à Beauvais, drame familial à Lens, geste désespéré à Senlis et accident mortel à Castetis.",
    "paragraphs": [
      "À Senlis, Mme Vincent a mis fin à ses jours. À Beauvais, deux époux ont choisi de se donner la mort par asphyxie. À Lens, une femme a mortellement frappé son mari. À Castetis, un enfant est décédé accidentellement, ayant fait une chute sur un pieu."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Grèves à Chartres et Lens",
    "summary": "État des conflits sociaux : la grève persiste à la fonderie de Chartres malgré les tentatives de conciliation, tandis que le mouvement s'intensifie chez les mineurs de Meurchin, dans le Pas-de-Calais.",
    "paragraphs": [
      "Le mouvement de grève se poursuit à la fonderie de Chartres, en dépit des diverses tentatives de conciliation entreprises par le juge de paix.",
      "À Lens, la compagnie des mines de Meurchin signale une recrudescence sensible du nombre d'ouvriers grévistes."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Sports",
    "title": "Courses hippiques",
    "summary": "Les résultats des courses de Saint-Ouen sont désormais officiels. L'attention des turfistes se tourne à présent vers l'hippodrome de Colombes, où les préparatifs pour les prochaines épreuves vont bon train.",
    "paragraphs": [
      "Les résultats détaillés des courses de Saint-Ouen viennent d'être homologués, confirmant la grande forme des favoris. En parallèle, les préparatifs s'accélèrent pour les épreuves prévues à Colombes, où une affluence considérable de turfistes est attendue pour les prochaines journées."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Théâtre",
    "title": "Courrier des théâtres",
    "summary": "Suite à l'incendie de la Comédie-Française, la direction cherche un nouveau foyer. En attendant, le répertoire continue aux Variétés et à l'Opéra-Comique, tandis que le théâtre antique s'invite à Paris-Enghien.",
    "paragraphs": [
      "Suite au sinistre ayant frappé la Comédie-Française, la direction est activement à la recherche d'un local provisoire pour assurer la continuité des représentations. Dans l'intervalle, des reprises importantes sont d'ores et déjà programmées sur les scènes des Variétés et de l'Opéra-Comique.",
      "Par ailleurs, l'administration des spectacles étudie la possibilité d'organiser des représentations de théâtre antique au sein des arènes de Paris-Enghien, afin de proposer au public parisien des manifestations artistiques de plein air."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Sports",
    "title": "Grands prix et compétitions",
    "summary": "Le Grand Prix cycliste bat son plein au vélodrome, tandis que l'Aéro-Club multiplie les prouesses aériennes. La saison sportive se poursuit avec l'ouverture des concours d'escrime.",
    "paragraphs": [
      "La seconde journée du Grand Prix cycliste de Paris, qui suscite un vif intérêt parmi les amateurs de la petite reine, se déroulera ce jeudi sur la piste du vélodrome.",
      "Sur un autre plan, l'Aéro-Club fait état de récents succès : plusieurs de ses ballons ont accompli des ascensions de longue durée, confirmant les progrès constants de l'aérostation. Enfin, le calendrier sportif est complété par le début imminent des concours de sabre, qui réuniront l'élite des escrimeurs de la capitale."
    ]
  }
];
