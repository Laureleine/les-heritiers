// Date: 1900-10-20
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-10-20 (Version Restaurée, 31 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Faits Divers",
    "title": "La police de Paris : réforme et recrutement",
    "summary": "Le Préfet de police instaure une réforme majeure du recrutement des gardiens de la paix, imposant un stage probatoire d'un an pour garantir l'excellence et la moralité d'une troupe d'élite au service de Paris.",
    "paragraphs": [
      "Une importante réforme va être apportée par le Préfet de police dans le mode de recrutement des gardiens de la paix.",
      "Le but de cette réforme est de créer un stage d'un an pour les gardiens de la paix, afin de vérifier s'ils possèdent les qualités requises pour l'exercice de leurs fonctions.",
      "Il n'est pas sans intérêt, à cette occasion, de préciser comment s'effectue l'admission d'un agent de police : une enquête minutieuse est ouverte, le physique est examiné et le casier judiciaire doit être absolument vierge.",
      "La police parisienne compte environ 7 500 hommes. Le recrutement se fait exclusivement au sein de l'armée.",
      "Pendant les quatre premiers mois, le nouveau gardien est tenu de suivre un cours théorique à l'école de police municipale.",
      "La population parisienne sait rendre hommage à ceux des gardiens de la paix qui périssent victimes de leur devoir.",
      "La réforme que le Préfet se propose d'appliquer contribuera, grâce à une sélection constante, à faire de la petite armée de la police parisienne une véritable troupe d'élite."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le Fruit Défendu",
    "summary": "Jérôme, découvrant la liaison de sa fille Rose avec Jean Clairjean, l'expulse brutalement du foyer familial, plongeant Marianne dans le désespoir tandis que Régine ignore tout du drame qui se joue.",
    "paragraphs": [
      "Jérôme, après avoir appris la liaison de sa fille avec un homme nommé Jean Clairjean, décide de la chasser de la maison par crainte qu'elle ne corrompe sa sœur.",
      "Marianne, la mère, tente en vain de s'opposer à la décision de Jérôme, mais Rose finit par quitter la maison familiale dans la nuit.",
      "Régine, la sœur de Rose, ignore ce qui s'est passé, mais Jérôme lui annonce qu'elle ne travaillera plus au bazar, éveillant ainsi ses soupçons."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Exécution d'un Parricide à Saint-Gaudens",
    "summary": "Étienne Portes, reconnu coupable du double meurtre de sa mère et de son fils, a été exécuté à l'aube par le bourreau Deibler à Saint-Gaudens, après le rejet définitif de son recours en grâce.",
    "paragraphs": [
      "Étienne Portes, coupable d'avoir tué sa mère et son fils à coups de hache, a été exécuté ce matin à Saint-Gaudens.",
      "Le bourreau, M. Deibler, a procédé à l'exécution après le rejet du recours en grâce du condamné.",
      "Portes a affirmé dans ses derniers instants : « Je meurs dans les états de bon chrétien. Devant Dieu, je reconnais la justice des hommes. »",
      "Le couperet s'est abattu à l'aube, mettant fin à la vie du parricide."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Les ministres en Tunisie",
    "summary": "Le général André, accompagné du général Frater, a quitté Paris ce matin par un train spécial pour se rendre à Constantine.",
    "paragraphs": [
      "Le général André, accompagné du général Frater, est parti ce matin par train spécial pour Constantine."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Chronique Politique",
    "title": "L'agrandissement de Paris",
    "summary": "M. Caillaux, ministre des Finances, étudie un projet d'annexion en trois étapes de plusieurs communes limitrophes, dont Auteuil et Neuilly, afin d'étendre le périmètre de la capitale.",
    "paragraphs": [
      "M. Caillaux, ministre des Finances, étudie la meilleure solution pour l'annexion à la capitale des communes d'Auteuil, Billancourt, Boulogne, Neuilly, Levallois-Perret, Clichy et Saint-Ouen.",
      "Il s'agit en principe d'annexer ces communes en trois étapes pour agrandir la ville."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Tamponnement sur le Métropolitain",
    "summary": "Un grave accident est survenu près de la place de la Concorde. Deux trains se sont heurtés, causant de nombreux blessés. L'enquête pointe un dysfonctionnement du block-système et une faute du chef de train.",
    "paragraphs": [
      "Un accident s'est produit sur la ligne du Métropolitain, à proximité de la place de la Concorde, où deux convois sont entrés en collision.",
      "Le wattman du train tamponneur a été très grièvement blessé et vingt-neuf voyageurs ont été plus ou moins sérieusement contusionnés.",
      "L'enquête semble démontrer que la collision est due à un vice d'organisation du block-système, doublé d'une faute commise par le chef du train n° 6.",
      "Le président de la République et le président du Conseil ont immédiatement dépêché des émissaires afin de prendre des nouvelles des blessés."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "Les événements de Chine",
    "summary": "Arrivé à Pékin, le général Voyron constate le bon état des troupes françaises. La situation politique reste tendue, l'impératrice douairière étant sous l'influence du prince Tuan, détenteur du sceau impérial.",
    "paragraphs": [
      "Le général Voyron est arrivé à Pékin et a trouvé nos troupes en parfait état de santé.",
      "Il se confirme que l'impératrice douairière est sous la totale influence du prince Tuan, lequel a réussi à s'emparer du sceau officiel de l'Empereur.",
      "Le général Voyron a procédé à la remise du drapeau aux régiments d'infanterie de marine."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "La situation en Chine",
    "summary": "En raison de l'hivernage du maréchal de Waldersee, le général Voyron prolonge son séjour à Pékin. Des rumeurs persistantes suggèrent que le prince Tuan terrorise la Cour, bien que son décès soit évoqué.",
    "paragraphs": [
      "Par suite de l'arrivée du maréchal de Waldersee à Pékin, où il doit hiverner, le général Voyron a décidé de prolonger son séjour dans la capitale jusqu'à nouvel ordre.",
      "Le correspondant du Standard à Shanghai rapporte qu'un fonctionnaire chinois, ayant rang de chancelier littéraire, confirme les rumeurs selon lesquelles l'impératrice douairière est terrorisée par le prince Tuan, détenteur du sceau impérial.",
      "Ce même informateur laisse entendre que le prince Tuan pourrait être mort, ce qui expliquerait le suicide récent de ses deux précepteurs."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "Une lettre de l'empereur du Japon",
    "summary": "Le mikado exhorte l'empereur de Chine, Kouang-Sou, à réformer son gouvernement, à écarter les réactionnaires et à retourner à Pékin pour manifester ses regrets face aux puissances étrangères.",
    "paragraphs": [
      "Répondant à une lettre de l'empereur de Chine, le mikado déclare que si Kouang-Sou désire réellement le rétablissement de la paix, il doit débarrasser le gouvernement de tous les fonctionnaires réactionnaires, nommer à leur place des hommes d'État libéraux et, en somme, organiser un nouveau gouvernement.",
      "Le mikado exprime ensuite le vœu que l'empereur, au lieu de s'exiler dans le Chan-Si, retourne immédiatement à Pékin, afin de rassurer son peuple et de fournir ainsi une preuve non équivoque de regret pour les outrages commis envers les puissances étrangères."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "Réponse de M. Pichon",
    "summary": "M. Pichon exige, au nom de la France, le châtiment exemplaire des responsables des troubles, dont le prince Tuan, comme condition préalable à toute cessation des hostilités.",
    "paragraphs": [
      "Répondant à la note de Li-Hung-Chang et du prince Tching, M. Pichon fait savoir aux autorités chinoises qu'en violant le droit des gens, la Chine a engagé sa pleine responsabilité.",
      "En conséquence, M. Pichon exige qu'un châtiment exemplaire soit infligé aux principaux coupables, nommément : le prince Tuan, Tchouang-Tchouang, Kang-Yi et Tong-Fou-Sien. M. Pichon ajoute que, tant que leurs têtes ne seront pas tombées, il sera impossible de cesser les hostilités."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "L'agitation dans le Sud",
    "summary": "À Hong-Kong, les nouvelles font état d'une révolte grandissante en Chine. Les rebelles, disciples de Kang-You-Wei, multiplient les proclamations hostiles, menaçant de surpasser la rébellion des Taipings en importance.",
    "paragraphs": [
      "On télégraphie de Hong-Kong au New-York Herald que les rebelles ont fortement établi leur quartier général à Hui-Chau.",
      "Leurs chefs, qui sont évidemment des disciples de Kang-You-Wei, ont publié une proclamation déclarant que la Chine est à la merci complète de ses ennemis.",
      "Les correspondants du Morning Post et du Daily Express expriment l'opinion que la révolte, dans les provinces méridionales de la Chine, menace de devenir plus importante que la rébellion des Taipings."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique Extérieure",
    "title": "Les Boxers",
    "summary": "La situation demeure tendue autour de Pékin et Toung-Chau où les Boxers multiplient les appels à la violence. Malgré l'exécution d'insurgés, le climat reste à la méfiance envers les infiltrations dans la capitale.",
    "paragraphs": [
      "Les Boxers sont très actifs dans le voisinage de Toung-Chau. On a trouvé dans plusieurs endroits des proclamations exhortant le peuple à prendre les armes contre les étrangers.",
      "Les Chinois amis des étrangers assurent qu'un grand nombre de mauvais sujets retournent à Pékin dans le but d'obtenir des situations auprès des étrangers, afin de commettre des vols à leur détriment.",
      "Les têtes de treize Boxers ont été exposées aujourd'hui sur les murs de Pékin."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "La Guerre au Transvaal",
    "title": "Départ du président Krüger",
    "summary": "Le président Krüger a quitté le palais du gouverneur ce matin à cinq heures. Escorté par le gouverneur et accompagné du docteur Heymann, il s'est rendu au quai de la douane pour s'embarquer.",
    "paragraphs": [
      "Le président Krüger a quitté le palais du gouverneur ce matin à cinq heures, en voiture de louage, accompagné du docteur Heymann. Le gouverneur suivait dans sa voiture. M. Krüger s'est embarqué sur le quai de la douane."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "La Guerre au Transvaal",
    "title": "Combat à Jagers-Fontein",
    "summary": "Un affrontement a eu lieu à Jagers-Fontein suite à une incursion boër le 16 courant. Le bilan fait état de onze tués du côté britannique et de pertes importantes chez les Boërs, incluant leur commandant.",
    "paragraphs": [
      "Lord Roberts télégraphie qu'un détachement boër a réussi à s'introduire à Jagers-Fontein dans la nuit du 16 courant. Un combat a eu lieu dans la matinée. Nos pertes ont été de onze tués. Les Boërs ont eu leur commandant et vingt hommes tués."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Situation des anciens soldats",
    "summary": "Le Petit Parisien intervient en faveur des vieux soldats rencontrant des difficultés pour percevoir leur secours annuel. Il est conseillé aux intéressés de solliciter le ministre de la Guerre pour une enquête.",
    "paragraphs": [
      "Un mot de nous pour faire cesser la situation douloureuse faite aux vieux soldats à qui l'on a fait espérer un léger secours annuel et qui ne peuvent l'obtenir. Il faut s'adresser au ministre de la Guerre, qui fera faire une enquête sur les titres des postulants."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'explosion de gaz à la Corderie",
    "summary": "Un accident de gaz survenu rue de la Corderie a fait plusieurs victimes, dont M. et Mme Brenaget, gravement brûlés. L'agent de police Pichon, intervenu pour leur porter secours, a également été intoxiqué par les émanations.",
    "paragraphs": [
      "Un grave accident a causé plusieurs victimes hier soir, rue de la Corderie, près du Temple. Vers huit heures, M. et Mme Brenaget rentraient chez eux avec une bougie allumée quand une formidable explosion se produisit, brisant violemment les vitres de l'immeuble.",
      "M. Brenaget, âgé de soixante-deux ans, a été grièvement brûlé. Son épouse, touchée dans l'explosion, a été transportée à l'hôpital dans un état alarmant. L'agent de police Pichon, accouru sur les lieux pour prêter secours, a été intoxiqué par les émanations de gaz."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Agriculture",
    "title": "L'élevage dans le Midi",
    "summary": "La région du Sud-Ouest demeure un centre d'élevage majeur. Le gouvernement de la République intensifie ses efforts pour améliorer la race navarrine, pilier essentiel de la remonte pour les troupes de cavalerie de l'armée.",
    "paragraphs": [
      "La région du Sud-Ouest de la France est, au point de vue de l'élevage, l'une des plus importantes du pays. La race navarrine a longtemps constitué le fondement de la remonte des troupes de cavalerie de nos armées.",
      "Les efforts les plus énergiques sont actuellement déployés pour relever la qualité de la race navarrine, avec l'aide constante et le soutien financier du gouvernement de la République."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits divers",
    "title": "Héroïsme tragique d'une grand-mère",
    "summary": "Une septuagénaire a péri tragiquement en sauvant un enfant sur les voies ferrées. Malgré le choc violent de la locomotive, le jeune enfant a été retrouvé vivant, bien que souffrant de blessures sévères.",
    "paragraphs": [
      "La vieille femme, poussée par un élan d'affection pour l'enfant en péril, s'élança sur les rails malgré le poids de ses soixante-dix ans pour le mettre à l'abri.",
      "L'héroïque grand-mère fut violemment tamponnée par la locomotive, et le convoi entier lui passa sur le corps. Relevée après le passage du train, elle était effroyablement mutilée.",
      "Quant à l'enfant, il a pu être dégagé vivant de l'accident, bien qu'il ait été grièvement blessé."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Nouvelles judiciaires",
    "title": "Renvoi de Salsou aux assises",
    "summary": "La chambre des mises en accusation a ordonné le renvoi de Salsou devant la cour d'assises de la Seine. Il devra répondre de ses actes concernant la tentative d'assassinat contre le shah de Perse survenue en août dernier.",
    "paragraphs": [
      "Lors de son audience d'hier, la chambre des mises en accusation a rendu un arrêt définitif renvoyant le nommé Salsou devant la cour d'assises de la Seine.",
      "Salsou demeure inculpé pour la tentative d'assassinat commise contre la personne du shah de Perse, dans les premiers jours du mois d'août dernier."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits divers",
    "title": "Arrestation de deux faussaires",
    "summary": "La sûreté a neutralisé Émile Girault, un faussaire escroquant diverses banques en usurpant l'identité d'un médecin-major. Son complice, le coiffeur Valentin Machot, a été appréhendé et écroué par les autorités.",
    "paragraphs": [
      "Le service de la sûreté a procédé à l'arrestation d'Émile Girault, un ancien employé de banque qui escroquait de nombreuses succursales financières à l'aide de faux chèques et de titres contrefaits, en se faisant passer pour un médecin-major.",
      "Son activité délictueuse s'est étendue sur plusieurs localités, notamment à Nevers, Troyes, Laval, Vannes, Saint-Lô et Bourg.",
      "Un de ses complices, le dénommé Valentin Machot, exerçant la profession de coiffeur, a également été appréhendé et écroué."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits divers",
    "title": "Drame du vitriol",
    "summary": "Mme Harry a agressé sa rivale et son fils au vitriol hier matin. Grièvement blessées, les victimes ont été hospitalisées. La coupable, blessée, a été interpellée dans une pharmacie après sa fuite.",
    "paragraphs": [
      "Mme Harry, en proie à une vive jalousie, a guetté hier matin l'apparition de sa rivale, Mme Sol, devant son domicile. Une altercation violente a éclaté dès la sortie de cette dernière.",
      "Dans un accès de fureur, Mme Harry a projeté du vitriol au visage de Mme Sol ainsi que sur celui de son fils, le jeune Georges, âgé seulement de six ans. Les deux infortunées victimes ont été transportées en urgence à l'hôpital Saint-Antoine pour y recevoir les soins nécessaires.",
      "La coupable, qui s'est infligé des brûlures lors de son acte criminel, a pris la fuite avant de se constituer prisonnière dans une pharmacie située rue des Boulets, où elle a été appréhendée par les forces de l'ordre."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits divers",
    "title": "Conflit mortel entre cyclistes",
    "summary": "Un différend sur le boulevard de la Chapelle entre deux cyclistes, Louis Després et Alexandre Grand, a tourné au drame, ce dernier ayant succombé à ses blessures après avoir été poignardé lors d'une rixe.",
    "paragraphs": [
      "Une altercation sanglante a éclaté sur le boulevard de la Chapelle entre deux cyclistes, Louis Després et Alexandre Grand, à la suite d'une collision fortuite. L'échange verbal, rapidement devenu houleux, a pris une tournure tragique sous l'effet de l'exaspération des deux hommes.",
      "Louis Després, convaincu par un réflexe malheureux que son adversaire s'apprêtait à l'attaquer avec un poing américain, a tiré un couteau de sa poche et en a frappé Alexandre Grand à plusieurs reprises. Grièvement blessé, ce dernier a été relevé inanimé sur la chaussée avant d'être transporté d'urgence à l'hôpital Lariboisière."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Exposition",
    "title": "Succès des voitures automobiles",
    "summary": "Les concours de l'Exposition pour les voitures automobiles de livraison ont rendu leur verdict. La firme Peugeot s'illustre brillamment en décrochant la médaille d'or en poids légers et poids lourds.",
    "paragraphs": [
      "Les deux concours organisés dans le cadre de l'Exposition pour les voitures automobiles de livraison viennent de clore leurs travaux. Au terme des épreuves, les voitures de la maison Peugeot ont remporté la médaille d'or, s'imposant aussi bien dans la catégorie des poids légers que dans celle des poids lourds."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans la banlieue parisienne",
    "summary": "Une série d'incidents tragiques secoue la banlieue parisienne : suicides à Sèvres et Saint-Germain, accidents mortels à Colombes et Bécon, et divers faits de délinquance signalés en cette fin d'année 1899.",
    "paragraphs": [
      "Sèvres : Le corps de M. Étienne Pascal, homme de lettres, a été découvert pendu dans le bois des Bruyères.",
      "Suresnes : Le corps d'une jeune fille a été repêché dans les eaux de la Seine.",
      "Colombes : Le jeune Georges Haut, âgé de trois ans, a trouvé la mort après une chute accidentelle dans un puits.",
      "Bécon-les-Bruyères : Le garçon livreur Jules Veillebout a été mortellement écrasé par les roues de sa propre voiture.",
      "Ivry : Le cadavre d'un homme d'une quarantaine d'années a été retiré de la Seine, présentant des traces de blessures suspectes.",
      "Arcueil-Cachan : La police a procédé à l'arrestation d'une bande de malfaiteurs impliqués dans de nombreux vols.",
      "Saint-Germain-en-Laye : Jean-Pierre Dilham, comptable, a été retrouvé pendu dans sa chambre.",
      "Bougival : Un éboulement survenu à la machine de Marly a grièvement blessé l'ouvrier Henri Lesueur.",
      "Vaudan : M. Hippolyte Couanon a été victime d'un grave accident de motocycle.",
      "Magny : Edmond Compagnon, âgé de dix-huit ans, a succombé après avoir tenté de boire un litre d'eau-de-vie à la suite d'un pari."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Départements",
    "title": "Crimes en province",
    "summary": "La rubrique des faits divers rapporte deux crimes sanglants : le meurtre d'une veuve aux Andelys et l'assassinat crapuleux d'un journalier à Beauvais pour la somme dérisoire de quinze francs.",
    "paragraphs": [
      "Les Andelys (Eure) : Le cadavre de Mme veuve Petit a été découvert à Périers-sur-Andelle, la tête fracassée. Un journalier nommé Bernard a été arrêté par les autorités.",
      "Beauvais : Le cadavre d'un journalier nommé Lebel, assassiné pour 15 francs, a été retrouvé hier près d'un bois situé aux abords de la ville."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Les sports",
    "title": "Salon au Grand Palais et Fête Automobile",
    "summary": "Le comité du Salon du Cycle et de l'Automobile a obtenu l'usage du Grand Palais. En dépit d'une météo peu clémente, la fête automobile est maintenue avec divers concours d'adresse et épreuves de gymkhana.",
    "paragraphs": [
      "Le comité d'organisation du Salon du Cycle et de l'Automobile a obtenu l'accord du ministre pour l'utilisation du Grand Palais.",
      "Une fête automobile, incluant concours de direction et gymkhanas, est organisée malgré le mauvais temps."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Courrier des théâtres",
    "title": "Programme des spectacles",
    "summary": "La Comédie-Française affiche « Monsieur Scapin » et « L'Aventurière ». La troupe prépare également la représentation de « L'Assommoir » programmée pour le premier jour du mois de novembre.",
    "paragraphs": [
      "La Comédie-Française présente « Monsieur Scapin » et « L'Aventurière ». La représentation de « L'Assommoir » est prévue pour le 1er novembre."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Miettes du Bonheur",
    "summary": "Un jeune homme cherche à louer un logement pour une dame de sa connaissance, mais se heurte à la méfiance de la concierge, qui finit par accepter ses garanties.",
    "paragraphs": [
      "Le concierge releva la tête, une défiance dans les yeux. « Une dame, seule ? Oui. Ah ! ah ! »",
      "La bonne femme, hésitante, le dévisageait. Elle poursuivit : « C'est que, monsieur, le propriétaire n'accepte pas. »",
      "« Madame, répartit vivement Henri avec hauteur, la dame dont je vous parle est très honorable. » « On dit toujours cela. »",
      "Du rouge empourpra le visage du jeune homme ; sans répondre, il se dirigea vers la porte. Voyant qu'elle l'avait froissé, la concierge se précipita sur ses pas : « Mais, monsieur, ne supposez pas que je doute de votre parole. Je voulais plaisanter. Du moment que vous vous portez garant, cela me suffit. Si je demande des renseignements, c'est que le propriétaire l'exige pour la tranquillité et le bon renom de la maison. »"
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Science et Santé",
    "title": "La calvitie est-elle curable ?",
    "summary": "Le docteur Léon Pournol soutient que la calvitie, autrefois jugée incurable, peut être traitée par des soins rationnels visant à réveiller le follicule pileux, protégeant ainsi l'individu des maladies.",
    "paragraphs": [
      "Si la chirurgie a fait, ces temps passés, de réels progrès, la médecine semble être restée stationnaire ; c'est pourquoi, la calvitie étant une maladie justiciable de la médecine et non de la chirurgie, beaucoup de personnes, même érudites, en concluent qu'elle est et sera toujours incurable.",
      "Cependant, nous sommes dans un siècle d'inventions nouvelles. Dire qu'une découverte ne se fera jamais parce qu'on ne la connaît pas encore est un non-sens.",
      "Or, la calvitie, jadis incurable, ne résiste pas maintenant au traitement rationnel nouvellement trouvé. Le cheveu s'atrophie, mais le follicule pileux ne meurt pas et peut être réveillé par des soins assidus. Donc, tout chauve, à l'heure actuelle, peut recouvrer les cheveux perdus.",
      "Dieu n'a rien fait d'imparfait. En nous garnissant le crâne de cheveux, il a voulu nous préserver des brusques variations de température. L'absence de cheveux expose aux maux d'oreilles, névralgies dentaires et maladies hivernales. La statistique a prouvé qu'à âge égal, la mortalité était plus grande chez les chauves que chez les chevelus.",
      "Docteur Léon Pournol, de la Faculté de Paris, ex-interne des hôpitaux, médaille d'honneur de l'Assistance publique."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Feuilleton",
    "title": "Main Gauche - Le Bigame",
    "summary": "Dans une conversation empreinte d'émotion, Solange tente d'apaiser le tourment de Raymond concernant une femme disparue, prophétisant que le temps effacera les douleurs du passé.",
    "paragraphs": [
      "Jalouse de son autorité, elle prétendait la maintenir. Raymond, par la tendresse, la douceur, l'eût convaincue. Elle eût consenti, et elle vous eût aimée. C'était une noble femme.",
      "« Vous plaidez sa cause avec un accent tel, Solange, qu'elle est presque gagnée ; mais elle m'a fait beaucoup souffrir. Sans intention directe contre vous, elle pensait devant moi, j'en suis donc sûre. Oui, elle vous eût aimée. »",
      "« Hélas ! maintenant, c'est irréparable. La voilà touchée pour toujours dans cette chapelle du château de Terrique où je ne veux m'agenouiller jamais. »",
      "« Tout passe. Odette, vous verrez que tout passe. Raymond reviendra, la vérité se fera jour, et vous aurez le droit d'aller vous agenouiller dans cette chapelle, où la morte, si son âme flotte autour de vous, ne pourra que vous bénir. »"
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Faits Divers",
    "title": "Enquête sur le nouveau locataire",
    "summary": "Henri, hésitant face à la méfiance de la concierge, loue un appartement pour Madame Berget. Mais l'annonce par la concierge d'un visiteur suspect s'apparentant à son père le plonge dans un trouble profond.",
    "paragraphs": [
      "Henri s'était arrêté. Il était hésitant, partagé entre le désir de louer cet appartement qui convenait tout à fait à la jeune femme et celui de donner une leçon à cette concierge vraiment trop défiante. Il resta immobile.",
      "« Oui, elle est veuve. Elle a un petit garçon de deux ans. Elle se nomme Madame Berget. C'est en son nom d'ailleurs que je vais faire la location et vous payer d'avance le loyer pour une année. »",
      "Plus tard, la concierge interrogea le jeune docteur : « On est venu demander des renseignements sur vous. C'est drôle, n'est-ce pas ? Un homme déjà vieux avec une allure de provincial, du moins à ce que dit la voisine. »",
      "Henri porta la main à son front, et voici que soudain il tressaillit. Est-ce que, par hasard, son père lui-même serait venu ? Lui qu'il avait cru apercevoir hier à l'hôtel Continental."
    ]
  }
];
