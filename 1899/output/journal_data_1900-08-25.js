// Date: 1900-08-25
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-08-25 (Version Restaurée, 36 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Fait Divers",
    "title": "Pilotes",
    "summary": "Hommage au pilote Perier, marin exemplaire inhumé à Sanvic, et évocation des figures héroïques du pilotage maritime français dont les actes de sauvetage forcent l'admiration et la reconnaissance nationale.",
    "paragraphs": [
      "Bien modestes ont été les obsèques du pilote Perier, qui va reposer dans le petit cimetière de Sanvic. Et pourtant, il avait joui longtemps, au Havre, d'une véritable popularité. C'est que toute son existence, il est mort à soixante-dix ans, n'avait été qu'une longue suite d'actes héroïques.",
      "On les rangeait autrefois en deux catégories : les pilotes hauturiers, ou de long cours, et les pilotes côtiers.",
      "Les pilotes lamaneurs reçoivent une commission du Ministre de la Marine, à la suite d'un examen qu'ils passent pour justifier de leur connaissance de la manœuvre et des marées.",
      "Ce sont de rudes marins, nos pilotes, et il faut qu'ils soient solides à la barre quand ils entrent un navire. Il y a un an, on décorait de la Légion d'honneur le pilote Le Mat, de Roscoff. On compte qu'il a arraché à la mort plusieurs personnes et qu'il a secouru douze navires.",
      "Quand on parle de pilotes, il ne faut pas oublier Jean-Jacques Pollet, de Calais, qui mourut à cinquante-cinq ans, le 21 mars, victime de son travail. Le pilote Avisse, de Boulogne, a bien droit aussi à une mention. Certains de ses sauvetages tiennent de ces légendes qui inspirent les drames historiques."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Autour d'un berceau",
    "summary": "La mère du docteur Lipray rend visite à Jeannine dans sa mansarde. Elle lui apporte compassion et réconfort, rappelant que même au cœur du désespoir, un rayon lumineux peut toujours jaillir.",
    "paragraphs": [
      "La concierge se levait et saluait. Elle s'en alla. Et, là-haut, elle songeait. Quel cœur d'or tout de même que celui de cette dame ! Grâce à elle, je suis sûre que la petite, là-haut, ne manquera de rien.",
      "Vers le soir, la mère du docteur monta jusqu'aux mansardes. Le numéro huit, où elle entra, était d'une propreté irréprochable.",
      "Sur son lit blanc, Jeanne Sauge, ou plus justement Jeannine, car la désespérée n'était autre que la malheureuse fiancée de M. de Courtial, souriait.",
      "Tout de suite, la mère du jeune docteur se sentait attirée vers cette inconnue. Ce que la concierge avait dit était vrai : sa protégée charmait.",
      "Tout en l'admirant, madame Lipray disait : « Excusez ma visite, mademoiselle. J'ai tenu à vous voir parce que l'on m'a parlé de vous dans les termes les plus favorables. Votre tentative d'hier, certes, est blâmable, et cependant on n'a guère le droit de vous adresser des reproches. »",
      "En écoutant la vieille dame, l'éclat farouche des yeux de Jeannine s'était atténué. Une émotion douce et tendre la gagnait.",
      "Madame Lipray avait repris : « Heureusement, il n'y a pas que ces minutes dans la vie. Le plus sombre désespoir peut être suivi des plus claires espérances. Et c'est souvent au moment où l'on s'y attend le moins, au milieu des plus profondes ténèbres, qu'un rayon lumineux jaillit. »"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un amoureux tragique à Watrelos",
    "summary": "Drame passionnel à Watrelos : Joseph Fesquenoot, après avoir tenté d'assassiner une jeune fille à coups de revolver, se donne la mort dans sa cellule en attendant l'arrivée du parquet.",
    "paragraphs": [
      "Une tentative de meurtre suivie du suicide du coupable a eu lieu, hier, au hameau de La Houzarde, à Watrelos.",
      "Il y a deux mois environ, une jeune fille nommée Eulalie Desmedt, qui habitait Courtrai, quitta cette ville pour échapper aux poursuites d'un jeune homme, Joseph Fesquenoot, chauffeur au chemin de fer belge.",
      "Hier, à huit heures du matin, Fesquenoot vint à Watrelos. Il frappa à la porte de Mlle Desmedt. Voyant qu'il braquait un revolver, elle referma la porte. Il brisa une fenêtre, tira quatre coups de feu, mais n'atteignit personne.",
      "Des voisins désarmèrent le forcené. Enfermé au poste en attendant l'arrivée du parquet, le coupable, croyant avoir tué la jeune fille, se pendit avec sa ceinture."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Missions et Madagascar",
    "summary": "Chronique coloniale : retours de mission au Haut-Oubanghi, situation sanitaire au Sénégal et état de paix générale à Madagascar avec le développement des exploitations aurifères.",
    "paragraphs": [
      "L'explorateur Albert Bonnel de Mézières est arrivé hier à Anvers après sa mission dans le Haut-Oubanghi. Il a appris la mort du sultan Rasaï.",
      "Au Sénégal, le capitaine d'infanterie Bertrand est décédé à Dagana. À Saint-Louis, l'état sanitaire s'améliore.",
      "À Madagascar, la tranquillité continue à régner dans l'île. On signale toutefois des progrès dans le sud, dans le pays des Mahafedis. Les exploitations aurifères d'Amboasary continuent de donner de bons résultats."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident du boulevard de Latour-Maubourg",
    "summary": "Suivi de l'accident survenu boulevard de Latour-Maubourg : annonce des obsèques de Mme Didier et état de santé des blessés hospitalisés.",
    "paragraphs": [
      "Les obsèques de Mme Didier, la dernière des victimes de l'accident du boulevard de Latour-Maubourg, auront lieu aujourd'hui.",
      "À l'hôpital de la Charité, M. Auguste Guérineau est le seul blessé dont l'état inspire encore des craintes sérieuses."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Social",
    "title": "La grève des cochers",
    "summary": "La grève des cochers se prolonge malgré une légère reprise. Avec seulement 163 fiacres en service sur 3 000, la Bourse du travail a voté à l'unanimité la poursuite du mouvement revendicatif.",
    "paragraphs": [
      "La reprise du travail s'est légèrement accentuée hier matin, mais le nombre des voitures en service ne dépasse pas 163 fiacres sur les 3 000 que compte la Compagnie générale.",
      "La réunion quotidienne de la Bourse du travail s'est tenue sans incident ; la continuation de la grève y a été votée à l'unanimité."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame du vitriol",
    "summary": "Un drame passionnel a secoué l'avenue Parmentier : Delphine Sodillek a gravement blessé son ancien amant, Ernest Lorenzini, en l'aspergeant de vitriol. Elle s'est constituée prisonnière auprès des autorités.",
    "paragraphs": [
      "Hier, avenue Parmentier, une jeune femme, Delphine Sodillek, a jeté du vitriol sur son ancien amant, Ernest Lorenzini.",
      "Atrocement brûlé, Lorenzini a été transporté d'urgence à l'hôpital Saint-Louis. Delphine Sodillek s'est constituée prisonnière, déclarant avoir agi par pur esprit de vengeance."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "Les événements de Chine",
    "summary": "La situation demeure tendue en Chine où le vice-roi Li-Hung-Chang serait en disgrâce. Pendant ce temps, les flottes alliées consolident leurs positions après l'engagement aux forts de Takou.",
    "paragraphs": [
      "Les télégrammes reçus hier ne nous ont apporté aucun fait nouveau significatif sur la situation actuelle en Chine. Le vice-roi Li-Hung-Chang serait désormais en disgrâce.",
      "L'amiral Seymour a adressé une lettre à l'amiral Courrejolles pour rendre un hommage appuyé à l'indomptable énergie des marins français lors de l'expédition de secours à Pékin.",
      "Lors de l'attaque des forts de Takou, quatre destroyers chinois ont été capturés par les flottes alliées."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique étrangère",
    "title": "La crise en Chine et les forces internationales",
    "summary": "La France réaffirme sa solidarité internationale pour la pacification de la Chine. Les renforts alliés continuent d'arriver à Pékin et Tien-Tsin, tandis que les mouvements de troupes se précisent en région.",
    "paragraphs": [
      "Paris, 24 août : La France demeure solidaire des puissances internationales pour assurer la pacification de la Chine. Le maintien de l'intégrité territoriale chinoise est jugé essentiel à la stabilité.",
      "Tien-Tsin, 21 août : Le capitaine Pohl est arrivé à Pékin avec le détachement allemand. Par ailleurs, des renforts japonais viennent de débarquer.",
      "Hong-Kong, 23 août : Une mission anglaise, ainsi qu'un croiseur et un transport russe, sont arrivés. Les troupes américaines, jugées suffisantes sur place, ont reçu l'ordre de débarquer à Manille les renforts en cours de route."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Le sort du lieutenant Cordua et situation militaire au Transvaal",
    "summary": "La condamnation à mort du lieutenant boer Cordua a été confirmée par Lord Roberts. Au Transvaal, les Boers tentent de maintenir leurs lignes et multiplient les sabotages sur les voies ferrées.",
    "paragraphs": [
      "Lord Roberts a approuvé l'arrêt du tribunal anglais de Prétoria condamnant à mort le lieutenant boer Cordua, accusé de complot. Le condamné, qui clame son innocence, attend désormais son sort.",
      "Prétoria, 24 août : Les Boers occupent une ligne s'étendant de l'ouest de Belfast au fleuve Crocodile. Le président Kruger se trouve actuellement à Drinkwater, au sud de Hoossonkal.",
      "Newcastle a été réoccupé par les Boers, et plusieurs coupures de voies ferrées sont signalées aux environs de Glencoe."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrivée du Shah de Perse à Bruxelles",
    "summary": "Le shah de Perse, en visite officielle, est arrivé ce jour à Bruxelles depuis Ostende. Il y fut accueilli par le roi Léopold II et les autorités locales avant de rejoindre sa légation pour son séjour.",
    "paragraphs": [
      "Bruxelles, 24 août : Le shah de Perse est arrivé à Bruxelles en provenance d'Ostende. Il a été reçu par le roi Léopold et les autorités locales au milieu d'une foule nombreuse.",
      "Un dîner a été offert en son honneur avant qu'il ne rejoigne l'hôtel de la légation pour son séjour."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Social",
    "title": "Les grèves des ports à Marseille, au Havre et à Dunkerque",
    "summary": "Le mouvement de grève s'intensifie dans les ports français. Tandis que Marseille et Dunkerque persistent, les ouvriers du Havre cessent le travail après l'échec des négociations avec la direction des chantiers.",
    "paragraphs": [
      "Marseille, 24 août : La grève se poursuit. Les ouvriers des quais, au nombre de 1 500, ont décidé à l'unanimité de continuer le mouvement. Le conseil municipal a alloué un crédit pour atténuer la misère des grévistes.",
      "Le Havre, 21 août : Les ouvriers des forges et chantiers ont voté la grève ce matin, suite au refus du directeur de satisfaire leurs demandes d'augmentation.",
      "Dunkerque, 24 août : Les ouvriers du port maintiennent la grève, les entrepreneurs refusant de céder sur plusieurs points."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Météo et Catastrophes",
    "title": "Violents orages et inondations en France",
    "summary": "De terribles intempéries frappent la France. Les crues du Rhône et de la Saône, ainsi que des orages d'une extrême violence, causent des dégâts matériels importants et plusieurs décès par la foudre.",
    "paragraphs": [
      "Lyon, 24 août : De violents orages ont causé des crues du Rhône et de la Saône, entraînant des éboulements et des dégâts matériels importants dans les vignobles.",
      "Saint-Etienne, 24 août : Les orages ont ravagé le sud du département. À Saint-Etienne, les rues ont été inondées, les tramways arrêtés et plusieurs décès par la foudre sont à déplorer dans la région.",
      "Des inondations et des décès par la foudre sont également signalés à Mâcon, Clermont-Ferrand et Privas."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique intérieure",
    "title": "Délibérations des conseils généraux",
    "summary": "Dans un élan de défense républicaine, plusieurs conseils généraux réaffirment leur soutien au Président Loubet et au gouvernement Waldeck-Rousseau face aux menaces cléricales et nationalistes.",
    "paragraphs": [
      "Plusieurs conseils généraux, dont ceux de la Sarthe et de Lot-et-Garonne, ont voté des adresses de soutien au Président Loubet et au gouvernement Waldeck-Rousseau pour leur défense républicaine contre le cléricalisme et le nationalisme.",
      "Le conseil général du Jura a félicité M. Pichon pour son courage et adressé ses vœux de succès au corps expéditionnaire de Chine."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Vie de l'Exposition et fêtes de l'horticulture",
    "summary": "L'Exposition universelle prépare une grande fête de l'horticulture en septembre. Le rapatriement des musiciens de la milice de San-Thomé est acté tandis que la fréquentation demeure soutenue.",
    "paragraphs": [
      "Une fête de l'horticulture est prévue pour les 7 ou 8 septembre dans les jardins du Champ-de-Mars et au Trocadéro.",
      "Les musiciens de la milice de San-Thomé, souffrants et nostalgiques de leur patrie, vont être rapatriés.",
      "Le service du contrôle général annonce les chiffres de fréquentation, avec une hausse du cours des tickets."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Tribunaux",
    "title": "Acquittement d'un contumax naïf",
    "summary": "La Cour d'assises de la Seine a acquitté Jean-Louis Collot, accusé de viol, qui s'était livré lui-même à la justice en venant demander un extrait de son casier judiciaire, oubliant qu'il était recherché depuis huit ans.",
    "paragraphs": [
      "La Cour d'assises de la Seine a jugé Jean-Louis Collot, accusé de viol, qui s'était présenté lui-même au Palais de Justice pour demander un extrait de son casier judiciaire, oubliant qu'il était recherché depuis huit ans. Il a finalement été acquitté."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie destructeur à Bordeaux",
    "summary": "Un violent incendie a ravagé la rue Saint-Cricq à Bordeaux, détruisant plus d'une vingtaine d'immeubles et laissant quarante familles sans abri. Les dégâts matériels dépassent 500 000 francs.",
    "paragraphs": [
      "Bordeaux, 24 août. Un incendie majeur s'est déclaré rue Saint-Cricq, détruisant plus de vingt immeubles et laissant quarante familles sans abri. Les pertes sont estimées à plus de 500 000 francs."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Les accidents de tramways",
    "summary": "Un maçon a été violemment heurté par un tramway électrique avenue de la République. Malgré les efforts du mécanicien, l'accident a causé de graves contusions et une luxation de l'épaule à la victime.",
    "paragraphs": [
      "Un ouvrier maçon, M. Louis Varner, âgé de quarante-huit ans, domicilié 21, rue des Maronites, regagnait sa demeure avant-hier soir vers onze heures et demie. Alors qu'il traversait l'avenue de la République, survint à vive allure le tramway électrique n° 33, en provenance de l'Opéra.",
      "Le mécanicien Malot, qui dirigeait le lourd véhicule, fit tous ses efforts pour arrêter sa voiture, mais il n'y parvint pas à temps.",
      "Le malheureux maçon, violemment heurté par le tramway, fut projeté sur le sol. Toutefois, le mécanicien put éviter de l'écraser.",
      "Secouru par des passants, M. Varner fut transporté dans une pharmacie où l'on constata qu'il souffrait de graves contusions sur diverses parties du corps et d'une luxation de l'épaule droite.",
      "Après avoir reçu les premiers soins, le blessé a demandé à être ramené chez lui.",
      "M. Bourlier-Lassime, commissaire de police, a ouvert une enquête pour déterminer les responsabilités dans ce nouvel accident."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un drame passionnel",
    "summary": "Une femme s'est donné la mort par arme à feu au faubourg Saint-Honoré après avoir reçu une lettre de rupture de son amant, un menuisier dont l'épouse avait découvert leur liaison.",
    "paragraphs": [
      "Hier matin, Mme Hélène M. s'est rendue au numéro 33 du faubourg Saint-Honoré pour parler à un ouvrier menuisier, nommé R., qui travaillait dans l'hôtel situé à cette adresse.",
      "En présence de l'ouvrier, sans lui adresser la parole, elle se tira un coup de revolver dans la région du cœur.",
      "Les motifs de cet acte de désespoir sont les suivants : R. avait noué une relation avec Mme M. il y a un an. La femme du menuisier, ayant découvert avant-hier dans les poches de son mari plusieurs lettres de la maîtresse, exigea que son époux rompe cette liaison pour préserver la paix du ménage.",
      "Ayant reçu la lettre de rupture hier matin, Mme M., désespérée, s'arma d'un revolver et résolut de mettre fin à ses jours."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un voleur misanthrope",
    "summary": "Un homme, se prétendant misanthrope, a été arrêté alors qu'il cambriolait un terrain vague. Il accumulait des objets volés, dont des chaises de café et des effets personnels, dans une cabane.",
    "paragraphs": [
      "Hier matin, vers trois heures, un ouvrier boulanger, M. Paul T., demeurant rue des Couronnes, se rendait à son travail lorsque son attention fut attirée par les allures suspectes d'un individu qui, rue de la Bidassoa, escaladait la palissade d'un terrain vague.",
      "M. Paul T. ne tarda pas à constater que l'inconnu avait, auparavant, jeté dans le terrain un certain nombre d'objets hétéroclites, dont une valise et deux chaises en fer.",
      "L'ouvrier boulanger alerta deux gardiens de la paix. En arrivant sur les lieux, ils aperçurent un personnage qui transportait vivement ces objets dans une petite baraque en planches. Ils y pénétrèrent et découvrirent dans ce réduit un véritable amas de marchandises volées.",
      "Le locataire, conduit au poste, déclara se nommer Charles Bonot, âgé de trente ans. Il affirma nourrir une haine profonde envers les hommes et que sa misanthropie le poussait à dévaliser ses semblables.",
      "Le misanthrope, connu dans le quartier sous le nom de Père Antoine, avait dérobé ces objets à un provincial, à la terrasse d'un café, et le reste provenait de divers vols commis dans le vingtième arrondissement."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression de gardiens de la paix",
    "summary": "Un cocher de fiacre, Auguste Bonfils, a violemment agressé deux gardiens de la paix, MM. Bonnard et Anvray, à coups de manche de fouet et de pied. L'agresseur a été placé sous la garde du commissaire M. Girard.",
    "paragraphs": [
      "Hier soir, vers six heures, un cocher de fiacre, Auguste Bonfils, âgé de quarante ans, se voyait dresser une contravention par le gardien de la paix Bonnard. Le cocher lui porta un formidable coup de manche de fouet au sommet de la tête.",
      "Le gardien de la paix s'affaissa ensanglanté sur le sol. L'agent Anvray, ayant accouru pour prêter main-forte, fut reçu par un coup de pied qui lui brisa la mâchoire.",
      "On réussit néanmoins à s'emparer de Bonfils, qui a été mis à la disposition de M. Girard, commissaire de police."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un meurtre à la Villette",
    "summary": "Un drame sanglant a éclaté place du Maroc. Le chiffonnier Émile Mercier a poignardé le charretier Jean Buzelier lors d'une altercation. La victime, grièvement blessée, a été transportée à l'hôpital Saint-Louis.",
    "paragraphs": [
      "Un drame sanglant s'est déroulé la nuit dernière place du Maroc, à la Villette. Un chiffonnier, nommé Émile Mercier, a poignardé un charretier nommé Jean Buzelier à la suite d'une altercation dans un débit de vin.",
      "Soudain, Émile Mercier, qui avait gardé rancune à Jean Buzelier, se rua sur ce dernier et lui porta un terrible coup de couteau à la gorge.",
      "Le meurtrier a été arrêté rue d'Aubervilliers. Jean Buzelier a été transporté à l'hôpital Saint-Louis dans un état désespéré."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'escroquerie des Chambres correctionnelles",
    "summary": "Un individu se faisant passer pour un ancien officier du greffe extorque des fonds aux familles des prévenus sous prétexte d'empêcher la publication des comptes-rendus d'audience dans la Gazette des Tribunaux.",
    "paragraphs": [
      "Un individu, se faisant passer pour un ancien officier attaché au greffe du tribunal correctionnel, escroque les familles des prévenus en leur promettant de faire empêcher la publication des comptes-rendus des débats dans la Gazette des Tribunaux, moyennant une somme de 20 à 50 francs."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'agression de la place de la Nation",
    "summary": "Léon Cuvino, employé de la Compagnie des omnibus, a été sauvagement agressé par cinq individus sur la place de la Nation. Un des agresseurs, armé d'un revolver, a été arrêté.",
    "paragraphs": [
      "Léon Cuvino, employé de la Compagnie des omnibus, a été agressé sur la place de la Nation par cinq individus, suite à une discussion futile survenue plus tôt dans la journée.",
      "Cuvino a été roué de coups et laissé pour mort. L'un des agresseurs, nommé Lapcyrane, a été arrêté en possession d'un revolver chargé. La victime, grièvement blessée, a été transportée à l'hôpital Saint-Antoine."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "La cachette d'un voleur",
    "summary": "Un malfaiteur, auteur d'un détournement de 7 000 francs, a été appréhendé après avoir révélé aux autorités qu'il avait dissimulé son butin sous une pierre tombale au cimetière de Saint-Ouen.",
    "paragraphs": [
      "Un nommé C., ayant détourné 7 000 francs, a révélé à la police qu'il avait caché l'argent dans une carafe sous une pierre tombale du cimetière de Saint-Ouen. Le trésor a été retrouvé par les autorités."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Faits divers brefs",
    "summary": "Une série d'accidents tragiques frappe Paris : découverte macabre rue des Écoles, effondrement rue des Vinaigriers et chute grave d'un ouvrier aux Beaux-Arts.",
    "paragraphs": [
      "Un égoutier a découvert le cadavre d'un nouveau-né lors du curage d'un égout, rue des Écoles.",
      "Mme Milloz, locataire rue des Vinaigriers, a été blessée suite à l'écroulement d'une cloison dans sa cave.",
      "M. François Martin, serrurier de dix-neuf ans, est tombé du deuxième étage de l'école des Beaux-Arts et a été transporté dans un état grave à l'hôpital de la Charité."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Chroniques des communes limitrophes",
    "summary": "La banlieue parisienne enregistre une série de drames : décès accidentels, agressions violentes, vols, rafles de police et mesures sanitaires urgentes contre la rage.",
    "paragraphs": [
      "Boulogne-sur-Seine : Le corps du peintre Ambroise Hanzoni a été retiré des eaux de la Seine.",
      "Asnières : M. Léopold Fulnier, entrepreneur, a été renversé par un cheval emporté, lui occasionnant un écrasement de la poitrine.",
      "Gennevilliers : Deux repris de justice ont été appréhendés en flagrant délit de cambriolage dans des pavillons.",
      "Levallois-Perret : M. Ernest Salle a été agressé par trois malfaiteurs qui l'ont dépouillé de ses biens.",
      "Nanterre : Un charretier, M. François Chapoteau, est mort écrasé sous les roues de son véhicule.",
      "Aubervilliers : Une rafle de police menée sur les bords du canal a permis l'arrestation de vingt et un individus.",
      "Bobigny : M. Vannier, journalier, a été poignardé par deux malfaiteurs dans une voiture de livraison. Les agresseurs ont été arrêtés à Paris.",
      "Saint-Maur : Deux femmes internées à l'asile national se sont donné la mort par pendaison à quelques heures d'intervalle.",
      "Choisy-le-Roi : Un chien épagneul atteint de rage ayant mordu plusieurs personnes, un arrêté municipal interdit désormais la circulation des chiens.",
      "Bourg-la-Reine : M. Jean Beautrain, charretier, a succombé à une fracture du crâne après le renversement de sa voiture."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Départements",
    "title": "Nouvelles des provinces",
    "summary": "L'actualité en province est marquée par un accident mortel à Senlis, les funérailles du député Clusel à Hyères et une mise en quarantaine sanitaire à Pauillac.",
    "paragraphs": [
      "Senlis : M. Éléonore Laval, charretier, est décédé à la suite d'une collision entre deux voitures.",
      "Toulon : Les obsèques du député M. Clusel ont été célébrées à Hyères.",
      "Bordeaux : Le paquebot Ville-de-Maceio, arrivé en rade de Pauillac avec des cas de maladie à bord, a été placé en quarantaine."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Spectacles et Vie Parisienne",
    "title": "Le Casino, le Jardin de Paris et le Moulin-Rouge",
    "summary": "La vie nocturne parisienne brille par ses attractions : entre les célèbres consultations du docteur Félix et les quadrilles endiablés de Nini Patte-en-l'air, le succès est total.",
    "paragraphs": [
      "Le Casino voit son immense hall se remplir chaque soir d'une foule élégante.",
      "Le Jardin de Paris demeure le centre du mouvement mondain. Outre un programme toujours renouvelé, la direction annonce l'installation prochaine d'un ballon captif qui promet de captiver tout Paris.",
      "Parmi les nombreuses attractions de l'établissement des Champs-Élysées, les consultations du célèbre docteur Félix, devin et savant, attirent un public curieux et raffiné.",
      "Le Moulin-Rouge s'impose comme le rendez-vous de la bonne compagnie. Entre le spectacle-concert et les quadrilles suggestifs menés par la célèbre Nini Patte-en-l'air, l'établissement de M. Oller confirme son succès constant."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Faits Divers",
    "title": "Fêtes de nuit à la salle Wagram",
    "summary": "La salle Wagram organise ses traditionnelles fêtes de nuit ce week-end, proposant concerts et bals au profit de la caisse des veuves des employés de l'assainissement de Paris.",
    "paragraphs": [
      "Ce samedi soir, la salle Wagram accueille la grande fête de nuit annuelle des employés et ouvriers de l'assainissement de la ville de Paris, comprenant un concert et un bal au profit de la caisse des veuves.",
      "Dimanche soir, à huit heures, un grand bal de nuit sera donné dans la salle des fêtes, animé par le brillant orchestre du maestro Thuillier."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Courrier Orphéonique",
    "title": "Actualités des concours musicaux et fédérations",
    "summary": "Le comité du concours international de Paris (30 septembre) rappelle la clôture des inscriptions. La Fédération musicale de France annonce le transfert de son siège social à Bourges chez M. Th. Bourssot.",
    "paragraphs": [
      "Le comité d'organisation du concours international qui aura lieu à Paris, quinzième arrondissement, le 30 septembre prochain, rappelle aux orphéons que la liste d'inscriptions sera incessamment close. Le concours est ouvert aux orphéons, musiques d'harmonie et fanfares. Ajoutons que, par une récente décision du comité organisateur, les sociétés de trompettes seront également admises, mais à la condition expresse de se conformer littéralement au règlement, notamment pour la lecture à vue.",
      "Nous avons annoncé l'organisation d'un concours musical à la Roche-sur-Yon (Vendée) pour le mois d'août 1901. Ce concours sera ouvert aux orphéons, musiques d'harmonie, fanfares, symphonies, quatuors, trompettes, trompes de chasse et autres. Le comité d'organisation sera très prochainement formé.",
      "Une dizaine de sociétés sont inscrites au festival régional qui aura lieu à Coligny (Ain), le 16 septembre prochain.",
      "Le comité directeur de la Fédération musicale de France informe ses membres que l'administration générale de l'association a déménagé le 1er juillet dernier au siège social. En conséquence, toute la correspondance devra être adressée dorénavant à M. Th. Bourssot, secrétaire général, fondateur de la Fédération musicale de France, 3, rue Hinal, à Bourges."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Les Sports",
    "title": "Union vélocipédique de France : Sanctions et décisions",
    "summary": "La commission sportive de l'U.V.F. sanctionne les coureurs Reynolds et Paçala. De nouvelles directives sont émises pour le critérium de Toulouse et la nomination de chronométreurs officiels.",
    "paragraphs": [
      "Dans sa dernière séance, la commission sportive a infligé une disqualification d'un mois, jusqu'au 19 septembre, au coureur Reynolds, pour n'avoir pas fait face à son engagement dans les championnats du monde.",
      "Il a été décidé qu'un critérium éliminatoire pour coureurs professionnels de deuxième catégorie, licenciés et âgés de moins de vingt et un ans, serait couru à Toulouse pour la onzième région. Adresser les engagements à M. Aug. Laurens, président du Cycle Sud-Toulousain, 10, rue Peyras, à Toulouse.",
      "À la suite de faits passés aux dernières courses de Castelnau-de-Médoc, le coureur Paçala est disqualifié pour un an, jusqu'au 26 juillet, et le coureur Chapel, frappé d'une amende de 15 francs, voit son amende portée à 50 francs.",
      "Ont été nommés chronométreurs officiels de l'U.V.F. MM. Paul Rousseau, 2, rue Meyerbeer, à Paris, et Alfred Riguelle, 1, rue Drouot, à Paris, qui ont subi les épreuves réglementaires."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Les Sports",
    "title": "Concours de tir à l'arc et courses vélocipédiques à Boulogne",
    "summary": "L'ancien vélodrome de Vincennes accueillera dimanche les finales du concours de tir à l'arc de l'Exposition. Parallèlement, Boulogne tiendra ses grandes épreuves cyclistes internationales.",
    "paragraphs": [
      "La dernière journée du concours de l'arc de l'Exposition, qui aura lieu dimanche prochain à l'ancien vélodrome de Vincennes, promet d'être émouvante et intéressera les tireurs et les amateurs qui ont suivi les jeux. Les finales des concours entre sociétés pour le classement des prix d'honneur et les grandes épreuves suivantes seront, en effet, tirées à cette réunion.",
      "De grandes courses vélocipédiques internationales auront lieu dimanche à Boulogne. Les engagements, fort brillants, comprennent les meilleurs coureurs de Paris, de Marseille, d'Alger et des départements des environs. Les prix seront disputés sur le vélodrome Cabécure."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Les Sports",
    "title": "La traversée de la Manche par Mme Walburga von Icaceseu",
    "summary": "La nageuse viennoise Walburga von Icaceseu, forte de ses succès sur le Danube, ambitionne de traverser la Manche entre Calais et Douvres avec l'assistance technique de M. Pobsich.",
    "paragraphs": [
      "Mme Walburga von Icaceseu est une nageuse viennoise que ses précédents exploits ont décidée à venir en France pour tenter la traversée de la Manche, de Calais à Douvres.",
      "Voici quelques-unes de ses performances : Vienne-Presbourg et retour (61 kilomètres) en 8 heures 3 minutes ; Stein-Vienne (45 kilomètres) en 8 heures 3 minutes. Elle fut contrôlée dans cette dernière tentative par M. Pobsich, le chauffeur viennois bien connu ; ce dernier doit l'accompagner dans son essai pour traverser la Manche."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Feuilleton",
    "title": "La Main Gauche - Grand Roman Inédit (Troisième Partie)",
    "summary": "À la recherche de Lydie dans les hôtels de Freeport, Harry Gerarden apprend, en arrivant à la gare, que la jeune femme a déjà pris l'express pour Madison. Il exige aussitôt un train spécial.",
    "paragraphs": [
      "Gerarden s'en irait encore à un hôtel sur Horbert Street, puis à l'hôtel de Paris sur Pieper Square. Ce serait tout.",
      "Vingt minutes plus tard, Gerarden sortait de Pieper Square, avec la conviction que Lydie n'était pas dans un hôtel de Freeport. Tout à coup, il se frappa le front.",
      "N'y avait-il pas, à cinq heures dix, un train pour Madison, et Lydie ne le prendrait-elle pas de toute la vitesse de ses petites jambes, sans se douter que, derrière lui, un cavalier enveloppé d'un grand manteau, le suivait très à l'aise ?",
      "De lointains coups de sifflet retentirent dans la nuit. Après quelques minutes de course folle, Harry tomba comme un obus dans la salle commune de la gare, se précipitant vers le bureau du chef. Le sous-chef, qui en sortait, lui dit : « Monsieur Gerarden, votre voyageuse a pris l'express de Madison, il y a cinq minutes. » « Faites-moi un train », répondit simplement l'Américain."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Agriculture et Économie",
    "title": "Vins, eaux-de-vie et pommes à cidre",
    "summary": "Le bilan des récoltes viticoles et cidricoles de 1899 annonce une qualité excellente malgré des rendements contrastés, marqués par une sécheresse dans le Midi et une abondance prometteuse en Normandie.",
    "paragraphs": [
      "Dans le Gard, on prévoit une excellente qualité, sous réserve de l'absence de pluie pendant les vendanges. Toutefois, la sécheresse prolongée entraînera une diminution sensible du rendement.",
      "Dans l'Aude, les transactions demeurent calmes et les cours stationnaires. Dans le Bordelais, une récolte importante est annoncée.",
      "Dans l'Eure, la récolte des pommes à cidre s'annonce sous les meilleurs auspices. Dans la Manche, le rendement apparaît inégal, tandis que dans l'Orne, les perspectives sont exceptionnelles."
    ]
  }
];
