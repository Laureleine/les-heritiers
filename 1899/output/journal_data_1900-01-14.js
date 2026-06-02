// Date: 1900-01-14
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-14 (Version Restaurée, 49 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Le Prix de la Guerre",
    "summary": "Une réflexion sur le coût humain et économique prohibitif des conflits modernes, soulignant que la guerre totale menace désormais la survie même des nations.",
    "paragraphs": [
      "Qui pourrait dire actuellement ce que coûte aux Anglais la guerre engagée par eux au sud de l'Afrique ? Qui pourrait prévoir les dépenses qu'ils auront à faire encore avant que le canon ne se taise ?",
      "Sans parler des tristesses humanitaires, en voyant couler tant de sang, et en se plaçant uniquement au point de vue glacial financier, chaque homme qui tombe représente un capital important qui disparaît.",
      "Pour amener un enfant nouveau-né jusqu'à l'âge viril, la société a fait un sacrifice incessant. Tout cela est perdu soudain, quand il est tué sur un champ de bataille.",
      "L'armée britannique, considérable, appelée de tous les points de l'univers contre les Boërs, est arrivée là à la suite de frais de transport immenses. C'est par millions, plus considérables encore, que l'on doit compter les charges imposées à l'Angleterre pour nourrir ces soldats et pour leur fournir des munitions.",
      "La guerre, de notre temps, ne se fait plus dans les mêmes conditions économiques que par le passé, et il n'est pas exagéré de dire que le monde ne peut plus revoir des luttes longues comme sous Louis XIV ou même comme au début du XIXe siècle.",
      "Avec le système des nations entières sous les armes, l'existence des peuples est mise en question dès que l'on procède à la mobilisation générale ; et si jamais une conflagration complète se produisait en Europe, notre continent subirait une telle ruine que ses destinées en seraient compromises à jamais."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions - Deuxième partie",
    "summary": "Extrait d'un récit narratif rapportant une rencontre fortuite et une observation analytique sur un individu énigmatique aperçu aux environs de la gare de Barentin.",
    "paragraphs": [
      "Vous l'avez vu ? L'autre jour, sans qu'il puisse nous apercevoir, Jacques et moi.",
      "Où donc ? À Barentin, où il se faisait conduire. Nous étions dans le cabinet du chef de gare où nous attendions un ami. C'est un homme de moyenne taille, trapu, ramassé sur lui-même, avec des traits communs, mais énergiques.",
      "Précisément. Bien tourné en somme et d'une exceptionnelle vigueur, si on en croit les apparences. Au moral, qu'en pensez-vous ? Rien de bon. Il manque de franchise et il est rare qu'il se livre et laisse percer sa véritable pensée."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "L'Occupation d'In-Salah",
    "summary": "Le gouverneur général de l'Algérie confirme l'occupation pacifique d'In-Salah par les troupes françaises, marquées par la levée officielle du drapeau le 28 décembre dernier.",
    "paragraphs": [
      "Le gouverneur général de l'Algérie a reçu des nouvelles d'In-Salah expédiées le 2 janvier, par conséquent postérieures de cinq jours à l'entrée de la mission dans le ksar.",
      "Pendant ces journées, la mission n'avait pas été inquiétée. Elle a, d'ailleurs, un solide point d'appui dans le borj qu'elle occupe et où elle a arboré le drapeau français le 28 décembre dernier.",
      "La journée du 1er janvier a été signalée par la cérémonie du salut au drapeau en présence de toute la mission, avec son goum et les spahis auxquels s'étaient joints de nombreux ksouriens."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Informations Politiques",
    "title": "La démission de M. Million",
    "summary": "M. Million, sénateur élu du Rhône, notifie officiellement à M. Deschanel, président de la Chambre, sa démission de son mandat de député pour se conformer à la tradition parlementaire.",
    "paragraphs": [
      "M. Deschanel, président de la Chambre, a reçu hier une lettre de M. Million par laquelle celui-ci l'informe qu'en présence du débat soulevé sur son cas, il donne sa démission de député.",
      "M. Million explique dans sa lettre que c'est pour se conformer aux précédents qu'il attendait d'être validé comme sénateur du Rhône pour se démettre de son mandat de député.",
      "M. Deschanel donnera demain communication de cette lettre à la Chambre."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Informations Politiques",
    "title": "Le Contrat d'Association",
    "summary": "M. Waldeck-Rousseau expose à la commission parlementaire les objectifs du projet de loi sur les associations, visant à soumettre les congrégations au droit commun.",
    "paragraphs": [
      "M. Waldeck-Rousseau, président du Conseil, a été entendu hier par la commission parlementaire chargée d'examiner le projet de loi sur le droit d'association.",
      "Le président du Conseil a fait connaître la pensée qui inspire le projet de loi qu'il a soumis au Parlement et qui tend à appliquer au contrat d'association les principes du droit commun.",
      "En somme, le gouvernement voit dans l'application du droit commun aux congrégations religieuses la meilleure barrière contre les dangers qu'elles peuvent présenter et contre le développement des biens de mainmorte."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Mort d'un Sénateur",
    "summary": "M. Vignancour, sénateur républicain des Basses-Pyrénées, s'est éteint cette nuit en son domicile parisien du boulevard Raspail à l'âge de cinquante-neuf ans.",
    "paragraphs": [
      "M. Vignancour, sénateur républicain des Basses-Pyrénées, est mort la nuit dernière, à Paris, en son domicile, 6, boulevard Raspail. Il était âgé de cinquante-neuf ans."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Deux Femmes coupées en morceaux",
    "summary": "Luigi Richetto est formellement inculpé des meurtres des femmes Beroaz, Delorme et Catineau. Les enquêteurs recherchent désormais le lieu des crimes et l'emplacement du butin caché par le suspect.",
    "paragraphs": [
      "Les recherches se concentrent actuellement sur le lieu où Richetto aurait pu commettre ses forfaits, car il est peu probable que sa loge ait pu servir à son affreuse besogne. Il est également présumé que l'inculpé dissimulait ses économies dans un endroit tenu secret ; bien que l'on sache qu'il en possédait, aucune somme n'a été retrouvée à son domicile.",
      "Richetto a été confronté, dans le cabinet de M. Benoist, avec M. Loriquet, gendre de la dame Catineau. Lors de cet entretien, il a été pris en flagrant délit de mensonge concernant ses relations passées avec la victime.",
      "En attendant l'aboutissement complet de l'enquête, Luigi Richetto est désormais formellement inculpé des trois crimes commis sur les personnes des femmes Beroaz, en 1894, Delorme, en 1898, et Catineau, en 1899."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "International",
    "title": "Un Rescrit du Tsar",
    "summary": "L'Empereur de Russie adresse un rescrit au comte Mouraviev, ministre des Affaires étrangères, pour saluer la clairvoyance et l'habileté diplomatique dont il a fait preuve dans la résolution de délicates négociations internationales.",
    "paragraphs": [
      "Le rescrit suivant a été adressé par l'Empereur au comte Mouraviev, ministre des Affaires étrangères : « Les qualités éminentes dont vous avez fait preuve au cours de votre carrière diplomatique m'ont décidé, en 1897, à vous confier le poste important de ministre des Affaires étrangères. »",
      "« Conformément à mes prescriptions, vous avez réussi, avec une profonde connaissance des affaires et une juste appréciation de la mission historique échue en partage à la Russie, à donner la direction voulue aux négociations engagées et à amener une heureuse solution aux difficultés qui s'étaient produites. »"
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une chasse aux lions",
    "summary": "Un incendie dévastateur a ravagé hier soir un cirque lors de la foire, anéantissant la ménagerie du dompteur Malieu. Le dompteur, profondément affecté par le drame, a dû être alité après l'intervention des pompiers.",
    "paragraphs": [
      "Hier soir, alors qu'un nombreux public se trouvait à la foire, le feu éclata dans un cirque et se communiqua rapidement à la ménagerie du dompteur Malieu, qui y faisait travailler des lions.",
      "Le dompteur, terrassé par l'émotion et le choc de cet événement, a dû s'aliter. Pendant ce temps, les pompiers luttaient avec acharnement contre l'incendie, mais la baraque a été entièrement détruite."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "La Petite Martyre d'Issy",
    "summary": "Émoi à Issy suite à l'arrestation d'Alexandrine Cibrac, une mère cruelle qui infligeait des sévices atroces à sa fille, utilisant des instruments brûlants pour tourmenter la malheureuse enfant.",
    "paragraphs": [
      "La commune d'Issy a été mise en émoi, hier matin, par l'arrestation d'une nommée Alexandrine Cibrac, âgée de trente-cinq ans, cette mère dénaturée dont les actes de barbarie ont provoqué son transfert immédiat au dépôt.",
      "La criminelle faisait subir à sa fille les pires tourments, la brûlant de façon révoltante avec un tisonnier ou à l'aide d'un fer à repasser. Lorsque la malheureuse enfant se lamentait, sa mère, dans un accès de férocité, la saisissait par les cheveux, la jetait à terre et la piétinait."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Opérations militaires en Afrique du Sud",
    "summary": "La région de Douglas est sous contrôle du général Gatacre malgré une tentative de commando boër. Par ailleurs, la reine adresse ses encouragements aux volontaires du Middlesex en partance pour le front.",
    "paragraphs": [
      "La région de Douglas est occupée par les troupes du général Gatacre. Après une incursion dans le secteur, les forces britanniques s'étaient repliées, mais face à l'offensive d'un commando boër, les Anglais ont dû battre en retraite sur Belmont.",
      "La reine, par l'entremise de son secrétaire particulier, a adressé ses vœux de succès aux volontaires du Middlesex, dont le départ pour l'Afrique du Sud est prévu pour demain."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Départ des volontaires de la Cité de Londres",
    "summary": "Une foule immense a escorté les volontaires de la Cité vers la gare. Malgré l'encadrement policier, les soldats ont communié avec le public dans un élan patriotique avant leur embarquement pour Southampton.",
    "paragraphs": [
      "Londres, 13 janvier. La marche des volontaires de la Cité de Londres, depuis la caserne où ils passèrent la nuit jusqu'à la gare pour s'embarquer à destination de Southampton, a attiré ce matin, vers six heures, une foule immense dans la Cité.",
      "Précédé par les forces de police à pied et à cheval ainsi que par la musique d'un bataillon de volontaires, le détachement a quitté la caserne à sept heures. Cependant, sitôt engagés dans la rue, les rangs ont été rompus par la foule, dans laquelle les soldats se sont trouvés confondus, saluant et agitant leurs mains avec enthousiasme.",
      "Les volontaires arborent l'uniforme kaki, complété par un chapeau de mousquetaire en feutre dont un bord est relevé, portant les initiales C. I. V. (City Imperial Volunteers)."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Nouvelles de Sydney",
    "summary": "L'effort militaire australien se précise : plus de 600 enrôlements enregistrés à Sydney et un contingent total de 1 000 cavaliers et 1 700 chevaux fournis par la Nouvelle-Galles du Sud pour le front.",
    "paragraphs": [
      "Sydney, 13 janvier. Les autorités ont enregistré plus de 600 enrôlements pour le corps des coureurs ; un campement pour 200 d'entre eux a d'ores et déjà été établi.",
      "Selon les déclarations du premier ministre, le total des troupes montées fournies par la colonie de la Nouvelle-Galles du Sud s'élève à 1 000 hommes et 1 700 chevaux.",
      "L'effectif de l'infanterie dépêché par cette même colonie atteint environ 900 hommes."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Diplomatie",
    "title": "Le croiseur portugais Don Carlos",
    "summary": "Le Portugal renforce ses positions en Afrique australe : le croiseur Don Carlos appareillera de Lisbonne à la fin du mois pour rejoindre Lourenço-Marquès.",
    "paragraphs": [
      "Londres, 13 janvier. On mande de Lisbonne au Standard : le croiseur portugais Don Carlos prendra la mer à la fin du mois, quittant Lisbonne pour rallier Lourenço-Marquès."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Chronique Politique",
    "title": "L'opinion en Angleterre",
    "summary": "Le gouvernement britannique sous tension : entre la menace d'une motion de blâme par sir Charles Dilke et les critiques de la presse contre M. Balfour, le climat politique s'alourdit à l'approche des élections.",
    "paragraphs": [
      "Londres, 13 janvier. Les journaux annoncent que sir Charles Dilke déposera, dès la rentrée de la Chambre, une proposition de blâme contre le gouvernement. Celle-ci portera sur les erreurs d'appréciation quant à l'ampleur des préparatifs militaires requis par la guerre actuelle.",
      "Londres, 13 janvier. Le Globe souligne que tout affaiblissement de la position des ministres en ces circonstances constituerait un désastre, rappelant que les élections générales doivent se tenir l'année prochaine.",
      "Dans la Westminster Gazette, nous lisons : M. Balfour voit presque tous ses soutiens dans la presse se retourner contre lui après son discours prononcé à Manchester."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Chronique Coloniale",
    "title": "Diego-Suarez",
    "summary": "L'attention se porte sur Diego-Suarez, point d'appui stratégique de la flotte française à Madagascar, dont l'infrastructure maritime et la modernisation des navires sont devenues une nécessité absolue.",
    "paragraphs": [
      "L'attention a été attirée dernièrement sur Diego-Suarez, le point d'appui projeté de notre flotte au nord de Madagascar. On a pensé, peut-être sans raison, que l'Angleterre avait des visées sur cette situation de premier ordre.",
      "Diego-Suarez était terre française avant la campagne d'occupation de Madagascar. Le traité conclu le 17 décembre 1885 entre le gouvernement français et la reine de Madagascar avait concédé à la France le droit d'occuper la baie de Diego-Suarez.",
      "La baie, dont l'entrée est large de plus de trois kilomètres, est couverte par un îlot, dit îlot de la Lune. C'est un réduit fortifié qui doit être mis en valeur comme station maritime complète avec des bassins et des ateliers de réparation.",
      "Notre division navale actuelle est composée de vieux navires en bois, démodés et incapables d'affronter le combat. Il est urgent de remédier à cette situation."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Une empoisonneuse",
    "summary": "À Iseghem, près de Courtrai, une femme nommée Desmet a été arrêtée pour l'empoisonnement présumé de son mari et de son fils, décédés dans des conditions atroces.",
    "paragraphs": [
      "Bruxelles, 13 janvier. Une nommée Desmet, demeurant à Iseghem près de Courtrai, vient d'être mise en état d'arrestation sous l'inculpation d'empoisonnement.",
      "La semaine dernière, le petit garçon des époux Desmet mourut subitement. Le mari, tombé malade, s'échappa de l'hôpital en criant qu'il était empoisonné, avant de mourir dans des souffrances cruelles. La femme a été dirigée sur la prison de Courtrai."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Treize enfants morts dans la neige",
    "summary": "Un drame déchirant à Munnicnschlag, en Autriche : treize écoliers ont péri, surpris par un violent ouragan de neige sur le chemin du retour.",
    "paragraphs": [
      "Vienne, 13 janvier. Un terrible malheur vient de plonger dans le deuil tout le village de Munnicnschlag. En revenant de l'école, treize enfants furent surpris par un ouragan de neige et moururent de froid."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Nécrologie",
    "title": "Mort de Manlio Garibaldi",
    "summary": "Manlio Garibaldi, fils cadet du général, est décédé ce matin à Bordighera. Sa disparition constitue une perte douloureuse pour la famille du célèbre héros de l'indépendance italienne.",
    "paragraphs": [
      "Bordighera, 13 janvier. Manlio Garibaldi, le plus jeune fils du général, est mort ce matin à Bordighera."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Attentat à Barcelone",
    "summary": "La police de Barcelone a mis au jour, à proximité du couvent Saint-Joseph, un engin explosif artisanal dissimulé dans une boîte en fer-blanc d'un kilogramme.",
    "paragraphs": [
      "Barcelone, 13 janvier. La police a découvert, aux environs du couvent Saint-Joseph, une boîte en fer-blanc pesant un kilogramme contenant des matières explosives."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Social",
    "title": "La bibliothèque de la Ville",
    "summary": "La bibliothèque Lepeletier de Saint-Fargeau étend ses horaires d'ouverture et s'enrichit de vingt-cinq mille documents inédits sur la Révolution française, provenant du British Museum.",
    "paragraphs": [
      "La bibliothèque Lepeletier de Saint-Fargeau, si riche en documents sur l'histoire de Paris, n'est ouverte au public que de midi à quatre heures. Mais, dès cette année, elle s'alignera sur l'horaire de la Bibliothèque nationale, soit de dix heures du matin à quatre heures.",
      "La bibliothèque vient d'ailleurs de recevoir, en provenance du British Museum, vingt-cinq mille documents relatifs à la période de la Révolution française."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Social",
    "title": "Autour du divorce",
    "summary": "Pour la première fois depuis la loi de 1884, les statistiques de 1897 révèlent une baisse des divorces, bien que cette procédure continue d'être utilisée à tous les âges de la vie.",
    "paragraphs": [
      "Les registres de l'état civil accusent pour l'année 1897 une diminution du nombre de divorces. Jusqu'en 1897, la progression était constante. Pour cette année, les divorces sont tombés à 6 800.",
      "La loi de 1884 a été, pour bien des épouses, une libératrice. Si la femme a souvent été la demanderesse, le divorce a su réparer bien des souffrances. Il est curieux de constater que l'on divorce à tout âge, même après cinquante ou soixante ans de vie commune."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits Divers",
    "title": "Une femme assassinée",
    "summary": "Le corps d'une femme a été découvert dans le canal de l'Ourcq, près de Meaux. Le nommé Godet a été arrêté après la découverte de ses vêtements à proximité du lieu du crime.",
    "paragraphs": [
      "Meaux. Le cadavre d'une femme a été découvert dans le canal de l'Ourcq. Le nommé Godet a été mis en état d'arrestation après la découverte de vêtements lui appartenant sur les lieux mêmes du drame."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Justice",
    "title": "Les pères assomptionnistes",
    "summary": "Les Assomptionnistes comparaîtront lundi 22 janvier devant le tribunal correctionnel de Paris pour avoir maintenu une association illégale regroupant plus de vingt personnes sans autorisation.",
    "paragraphs": [
      "Les Assomptionnistes sont cités à comparaître, pour le lundi 22 janvier, devant le tribunal correctionnel de Paris pour avoir constitué une association de plus de vingt personnes sans l'autorisation requise par la loi."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Justice",
    "title": "Bigame et faussaire",
    "summary": "Une affaire de bigamie et d'usage de faux documents, impliquant un individu nommé Boutemy, originaire de Neufchâtel, a été portée à la connaissance de la justice en novembre dernier.",
    "paragraphs": [
      "Au mois de novembre dernier, une grave affaire de bigamie et d'usage de faux documents, impliquant un nommé Boutemy, originaire de Neufchâtel, a été révélée aux services de la justice."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Procès de Boutemy à la cour d'assises de l'Orne",
    "summary": "Jugé pour des faits de faux en écriture, Boutemy a tenté sans succès d'incriminer le maire de Boitron. Le jury l'a reconnu coupable, le condamnant à cinq années de travaux forcés.",
    "paragraphs": [
      "Boutemy n'a point d'antécédents judiciaires, mais les renseignements recueillis sur son compte ne lui sont guère favorables ; il a déjà été poursuivi pour des faits de faux.",
      "Il a tenté vainement de faire retomber la responsabilité de ses actes sur le maire de Boitron, arguant que celui-ci n'aurait point dû accepter les pièces d'état civil irrégulières qu'il lui avait remises.",
      "Le jury a rendu un verdict de culpabilité, et Boutemy a été condamné à la peine de cinq ans de travaux forcés."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Procès concernant une nouvelle de Guy de Maupassant à Berlin",
    "summary": "Le gérant d'un journal berlinois est relaxé après la saisie d'une nouvelle de Maupassant, le tribunal reconnaissant sa bonne foi malgré le caractère jugé immoral de l'œuvre incriminée.",
    "paragraphs": [
      "Devant la troisième chambre du tribunal correctionnel, la lecture d'une traduction d'une nouvelle de Guy de Maupassant, insérée dans un journal royal, avait provoqué la saisie de la publication sous l'inculpation d'immoralité.",
      "Le gérant du journal qui avait publié cette traduction a été relaxé, le tribunal ayant admis sa bonne foi et la renommée littéraire de Guy de Maupassant ; toutefois, le magistrat a déclaré la nouvelle immorale et a maintenu la saisie de la traduction."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Rejet du pourvoi de Jean Gaillaud",
    "summary": "La Cour de cassation a rejeté le pourvoi formé par Jean Gaillaud, dit Niai-titi, condamné à huit ans de travaux forcés pour une tentative d'assassinat sur sa propre épouse.",
    "paragraphs": [
      "La Cour de cassation vient de rejeter le pourvoi du nommé Jean Gaillaud, dit Niai-titi, journalier à Saint-Paul-lès-Dax, qui avait été condamné le 3 novembre dernier par la cour d'assises des Landes à huit ans de travaux forcés pour tentative d'assassinat sur sa femme."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Rectification concernant M. Méline",
    "summary": "L'ancien président du Conseil, M. Méline, dément formellement une information de presse rapportant une prétendue visite politique effectuée au Président de la République.",
    "paragraphs": [
      "M. Méline, ancien président du Conseil, nous communique la note suivante : « Un journal de Lyon publie une information absolument inexacte sur une visite faite par M. Méline à M. le Président de la République. »",
      "La vérité est que M. Méline a rendu visite au chef de l'État à l'occasion de la nouvelle année ; tout le reste n'est que pure invention."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Conseil supérieur de l'instruction publique",
    "summary": "Le Conseil supérieur de l'instruction publique a terminé sa session ordinaire après avoir statué sur diverses affaires disciplinaires sous la présidence de M. Gaston Boissier.",
    "paragraphs": [
      "Le Conseil supérieur de l'instruction publique, réuni hier sous la présidence de M. Gaston Boissier, vice-président, a clos sa session ordinaire de 1900 à la suite de l'examen d'un certain nombre d'affaires disciplinaires."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Exposition 1900",
    "title": "Visite des chantiers par M. Millerand",
    "summary": "M. Millerand, ministre du Commerce, a inspecté hier les chantiers de l'Exposition universelle. Il a confirmé que les travaux progressent normalement et que l'ouverture est maintenue pour le 15 avril.",
    "paragraphs": [
      "M. Millerand, ministre du Commerce, de l'Industrie, des Postes et des Télégraphes, accompagné de M. Alfred Picard, commissaire général, a visité hier l'ensemble des chantiers de l'Exposition pour se rendre compte de l'état d'avancement des travaux.",
      "Il a constaté que partout ces travaux suivent leur marche normale. Les installations des exposants sont commencées dans un certain nombre de sections, notamment dans celle des machines motrices.",
      "Il reste entendu qu'aucun changement ne sera apporté à la date du 15 avril fixée pour l'ouverture de l'Exposition et que la cérémonie d'inauguration officielle pourra avoir lieu la veille."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Revenus de l'Assistance publique",
    "summary": "Grâce au legs Debrousse, l'Assistance publique dispose de huit millions supplémentaires, permettant de subvenir annuellement aux besoins de deux cents vieillards.",
    "paragraphs": [
      "L'Assistance publique est le plus riche établissement de ce genre, mais elle vient en aide à un si grand nombre de nécessiteux que ses ressources peuvent à peine y suffire.",
      "Le legs Debrousse a mis récemment à la disposition de l'Assistance une somme de 8 millions, qui serviront à entretenir deux cents vieillards à raison de 3 francs par tête et par jour, soit à couvrir une dépense annuelle de 219 000 francs."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Presse",
    "title": "Commission supérieure de la Presse à l'Exposition",
    "summary": "La commission supérieure de la Presse pour l'Exposition de 1900 s'est réunie pour organiser le prochain congrès international des Associations de presse, sous la direction de personnalités éminentes.",
    "paragraphs": [
      "La commission supérieure de la Presse à l'Exposition de 1900, réunie le 13 janvier 1900, a nommé une commission d'organisation chargée d'étudier les questions relatives au congrès international des Associations de presse.",
      "La commission est composée notamment de MM. Paul de Cassagnac, A. Ranc, Alfred Mézières, Adrien Hébrard et Jules Claretie."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un fou au régiment",
    "summary": "Un individu, se faisant passer pour un lieutenant-colonel, a été appréhendé hier boulevard Davout alors qu'il perturbait les exercices militaires du 5e régiment d'infanterie.",
    "paragraphs": [
      "Au cours de la matinée d'hier, un bataillon du 5e régiment d'infanterie exécutait des exercices boulevard Davout. Un individu s'est mêlé aux soldats, donnant des ordres contradictoires et se prétendant lieutenant-colonel.",
      "Il a été appréhendé par quatre soldats et conduit au commissariat. Il se nomme François Carmal, âgé de 46 ans, mais son identité réelle reste incertaine."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un enfant dans une malle",
    "summary": "Une domestique a été arrêtée après la découverte, dans une malle, de son nouveau-né qu'elle avait dissimulé. L'enfant, miraculeusement secouru, a été confié à l'Assistance.",
    "paragraphs": [
      "Le commissaire de police a découvert chez une domestique nommée Léontine Neveu, qui venait d'accoucher clandestinement, son bébé caché dans une malle, à moitié mort de froid.",
      "La mère a été admise à l'Hôtel-Dieu et le bébé, miraculeusement sauvé, a été confié aux Enfants assistés."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie rue Polonceau",
    "summary": "Un accident domestique rue Polonceau : une lampe à essence se renverse, causant de graves brûlures à Mme Beaudet et à son fils, transportés d'urgence à l'hôpital Lariboisière.",
    "paragraphs": [
      "La dame Beaudet, qui cousait auprès d'une lampe à essence, a vu celle-ci se renverser brusquement. La dame Beaudet et son fils, atteints par les flammes, ont été grièvement brûlés et transportés d'urgence à l'hôpital Lariboisière."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Cambriolage audacieux rue d'Angoulême",
    "summary": "Un cambriolage nocturne dans un hôtel de la rue d'Angoulême a été déjoué. Jean Thuine, auteur du pillage de trois chambres avec ses complices, a été appréhendé le lendemain matin par le garçon d'hôtel.",
    "paragraphs": [
      "Un individu nommé Jean Thuine s'est introduit frauduleusement dans un hôtel de la rue d'Angoulême. Profitant de l'obscurité, il a vidé le contenu de trois chambres avec l'aide de ses complices, avant d'être arrêté le lendemain matin par le garçon d'hôtel qui l'avait surpris."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide d'un charretier",
    "summary": "Après avoir annoncé ses intentions funestes dans un débit de boissons, Michel Chaydert a mis fin à ses jours par pendaison dans sa chambre de la rue de Flandre.",
    "paragraphs": [
      "Michel Chaydert, un charretier, avait annoncé dans un débit de boissons son intention formelle de se pendre. Le lendemain, il a été retrouvé pendu dans sa chambre, située rue de Flandre."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation de pickpockets à la gare de Lyon",
    "summary": "Une bande de cinq pickpockets sévissant à la gare de Lyon a été mise hors d'état de nuire. Parmi eux, le dangereux Giuseppe Micocini, déjà recherché pour plusieurs attaques à main armée.",
    "paragraphs": [
      "Cinq malfaiteurs opérant à la gare de Lyon ont été arrêtés en flagrant délit alors qu'ils tentaient de dérober des sacoches près d'un chariot à bagages. Le plus dangereux d'entre eux, Giuseppe Micocini, était activement recherché par les autorités pour des attaques à main armée."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Faits Divers",
    "title": "Agressions au bois de Montempoivre",
    "summary": "Suite à l'agression de M. Romaye près du bois de Montempoivre, M. Hébomin, commissaire de police, a ordonné une battue ayant permis l'arrestation de plusieurs individus sans aveu.",
    "paragraphs": [
      "M. Romaye a été sauvagement agressé sur la route de Montempoivre et n'a pu échapper à ses agresseurs qu'en se réfugiant précipitamment dans un immeuble voisin.",
      "À la suite de ces attaques, une battue a été effectuée sous la direction de M. Hébomin, commissaire de police, menant à l'arrestation de plusieurs individus sans aveu qui ont été immédiatement conduits au dépôt."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Faits Divers",
    "title": "Une vache en furie à Vincennes",
    "summary": "Dans la soirée d'hier, une vache échappée de la gare des marchandises a semé la panique à Vincennes, renversant plusieurs passants et blessant gravement un cheval avant d'être maîtrisée dans une cour privée.",
    "paragraphs": [
      "Dans la soirée d'hier, une vache, échappée de la gare des marchandises, a parcouru les rues de Vincennes et les abords du bois à une allure effrénée.",
      "La bête a renversé deux garçons épiciers et un bec de gaz, blessé grièvement un cheval de laitier et attaqué un terrassier avant d'être finalement capturée dans la cour d'une maison particulière."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Faits Divers",
    "title": "Démission du maire de Bourg-la-Reine",
    "summary": "M. André Theuriet, membre de l'Académie française, a officiellement notifié au conseil municipal sa démission de ses fonctions de maire de Bourg-la-Reine, annonçant qu'il ne sollicitera aucun nouveau mandat.",
    "paragraphs": [
      "M. André Theuriet, membre de l'Académie française, a annoncé hier au conseil municipal sa démission de ses fonctions de maire de Bourg-la-Reine, poste qu'il occupait depuis de nombreuses années.",
      "L'académicien a précisé à ses collègues qu'il ne se représenterait pas aux prochaines élections municipales."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident mortel à Livry",
    "summary": "Un tragique accident du travail s'est produit hier dans une carrière de Clichy-sous-Bois ; l'ouvrier Éloi Papillon y a perdu la vie, le crâne fracassé par la chute d'un bloc de pierre.",
    "paragraphs": [
      "Un ouvrier nommé Éloi Papillon, âgé de quarante-six ans, a été victime d'un accident mortel hier dans une carrière située à Clichy-sous-Bois.",
      "Alors qu'il travaillait à l'extraction, un bloc de pierre s'est détaché et lui a violemment fracassé le crâne, provoquant son décès instantané."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Faits Divers",
    "title": "Sabotage à Villeneuve-Saint-Georges",
    "summary": "Des malfaiteurs ont sectionné les lignes télégraphiques à Valenton, dérobant cinq cents mètres de fils de cuivre destinés aux communications essentielles vers Corbeil, Montereau et Auxerre.",
    "paragraphs": [
      "Des malfaiteurs ont sectionné, durant la nuit, les fils télégraphiques installés à la hauteur de Valenton.",
      "Ces câbles assuraient les communications vers Corbeil, Montereau et Auxerre. Les individus ont emporté près de cinq cents mètres de ligne avant de prendre la fuite."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Faits Divers",
    "title": "Suicide à Montmorency",
    "summary": "Émilie Claerhuet, une journalière demeurant à Louvres, a mis fin à ses jours hier soir. En proie à une fièvre cérébrale, elle s'est tranché la gorge avec un rasoir.",
    "paragraphs": [
      "Une journalière, nommée Émilie Claerhuet, âgée de quarante-sept ans et domiciliée à Louvres, a mis fin à ses jours hier soir.",
      "La malheureuse, en proie à un accès de fièvre chaude, s'est tranché la gorge au moyen d'un rasoir dans son domicile."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Informations météorologiques",
    "title": "Bulletin météo du 14 janvier 1900",
    "summary": "Le temps reste au froid vif sur la France avec des pressions en hausse. Des températures extrêmes sont signalées au mont Meunier, bien qu'une éclaircie soit prévue pour le nord du pays.",
    "paragraphs": [
      "Le temps est froid ; une avance des hautes pressions se dessine des îles Britanniques vers le sud.",
      "La température est en baisse sur l'ensemble du territoire avec quelques relevés notables : -9° au Puy-de-Dôme et -22° au mont Meunier. Un temps beau et froid est attendu, bien que la température doive se relever dans le nord."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Culture",
    "title": "Courrier des théâtres",
    "summary": "Les théâtres parisiens s'activent : l'Opéra prépare un concours de costumes pour son bal de janvier, tandis que le théâtre de Cluny et l'Athénée ajustent leurs programmes respectifs.",
    "paragraphs": [
      "La direction des bals de l'Opéra prépare un concours de groupes costumés pour le bal du 20 janvier, avec la collaboration du dessinateur Pal.",
      "Le théâtre de Cluny se met en relâche dès lundi pour les répétitions du Fiancé de Thylette. L'Athénée prépare la répétition générale de L'Homme à... pour mardi soir."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Sports",
    "title": "Préparatifs pour Paris-Bordeaux",
    "summary": "L'engouement pour la prochaine course automobile Paris-Bordeaux est manifeste, avec de nombreux engagements enregistrés, incluant les figures notoires de la discipline.",
    "paragraphs": [
      "Les engagements pour la course automobile Paris-Bordeaux arrivent en nombre, malgré l'échéance éloignée de quatre mois. Parmi les inscrits, on compte notamment M. Charron, René de Knyff et Giraud.",
      "Des compétitions de motocycle sont également prévues, avec les inscriptions de Hardin, Teste et Marcellin."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Sports",
    "title": "Union des sociétés de gymnastique",
    "summary": "L'Union des sociétés de gymnastique de France dévoile son calendrier estival, marqué par une fête fédérale à Vincennes en juin et un grand championnat international fin juillet.",
    "paragraphs": [
      "La fête fédérale de l'Union des sociétés de gymnastique de France se tiendra à l'annexe de Vincennes les 2 et 3 juin, avec un championnat international les 29 et 30 juillet."
    ]
  }
];
