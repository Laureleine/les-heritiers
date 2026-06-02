// Date: 1900-02-02
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-02-02 (Version Restaurée, 34 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Le royaume de la faim",
    "summary": "Alors que Londres finance la guerre au Transvaal, l'Inde britannique agonise sous une famine effroyable. Une critique virulente d'une administration coloniale qui préfère l'achat de canons au secours des populations.",
    "paragraphs": [
      "Pendant qu'au Parlement anglais les débats roulent sur la guerre sud-africaine, qui a déjà coûté au budget britannique plus de deux milliards de francs, le vice-roi des Indes adresse au gouvernement de la Reine des dépêches pressantes au sujet de la famine qui dévaste l'immense territoire dont il a l'administration. Jamais, dit-il, la population ne fut atteinte d'aussi effroyable façon par le fléau, et il ajoute : « Les Hindous, las de souffrir, commencent à se révolter. »",
      "Cent millions de francs, suivant les prévisions du vice-roi, seront à peine suffisants pour faire vivre jusqu'en mars les affamés dont le nombre est d'environ cinquante millions. Et c'est au moment où de si sombres nouvelles arrivent de la puissante colonie anglaise qu'on lit l'information suivante dans les journaux de Londres : « Le gouvernement vient de recevoir de Calcutta une somme de roupies destinées à l'achat de canons pour la guerre du Transvaal. »",
      "Voilà comment les victimes de la famine sont soulagées ! Au lieu de consacrer à les secourir toutes les ressources dont on dispose là-bas, on prélève des sommes pour acheter des canons. Et l'égoïste Angleterre ne daigne même pas jeter un regard de pitié sur ces innombrables affamés qui, au milieu de leurs souffrances, tendent vers elle leurs poings crispés en la maudissant.",
      "Un jour, dans un accès de franchise, on le rappelait tout récemment, lord Salisbury s'écriait : « Nous saignons l'Inde. » C'était une allusion au régime de fiscalité à outrance qui a fait des Indes anglaises une des régions les plus pauvres du globe. La saignée a été si forte qu'on a maintenant le spectacle de tout un peuple qui agonise.",
      "L'Inde est restée sous l'administration anglaise ce qu'elle était sous l'empire des rajahs : le royaume de la faim, ainsi que le dit un journaliste hindou, M. Malabari.",
      "Si l'on meurt de faim là-bas, c'est moins parce que les aliments font défaut que parce que la plus grande partie de la population n'a pas d'argent pour les acheter. Méthodiquement, administrativement, les Anglais ont absorbé toute la fortune du pays, et maintenant l'Inde est un grand corps exsangue que la peste terrasse comme un géant ferait d'un enfant."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage Secret",
    "summary": "À l'Hôtel d'Aspremont, François de Lorgerac est confronté à un dilemme moral crucial : révéler la vérité et perdre une fortune acquise, ou persister dans une voie déloyale envers une femme à la réputation ternie.",
    "paragraphs": [
      "À l'Hôtel d'Aspremont, pendant que sur son impassible visage François de Lorgerac ne laissait rien paraître de cette effroyable bataille, il était arrivé à un tournant de la vie. Un tournant à franchir sans prendre haleine, sans se donner le temps d'un recul, d'une hésitation.",
      "Dire la vérité. C'était non seulement la perte de cette fortune que, depuis douze jours, il s'était déjà habitué à considérer comme sienne, non seulement cela, mais aussi sa chute prochaine, imminente, dans le gouffre entrouvert.",
      "Et se raccrochant alors à tout ce qui pouvait excuser, justifier au besoin la pensée mauvaise, la résolution déloyale qui grandissaient dans son âme : « Une fille d'inconduite notoire, une fille que sa famille a chassée. » Et ce n'est pas une accusation vague cela, c'est un fait, un fait précis, dont on nous sollicite de faire nous-mêmes la preuve."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "La situation militaire",
    "summary": "Malgré les bruits d'une offensive, le général Buller réorganise ses troupes après les désastres subis. L'arrivée de Kitchener au Natal interroge sur la stratégie britannique : contre-attaque ou évacuation ?",
    "paragraphs": [
      "En dépit d'une information publiée hier à Londres et d'après laquelle l'armée anglaise aurait franchi une seconde fois la Tugela pour attaquer les troupes républicaines, le général Buller semble uniquement occupé pour le moment à enterrer ses morts, soigner ses blessés et à reconstituer ses forces plus ou moins désorganisées par les sanglants désastres qu'elles viennent d'éprouver.",
      "On annonce que le général Kitchener est parti pour le Natal. On se demande s'il va chercher à y rétablir la fortune des armes anglaises si durement éprouvée, ou bien présider à l'évacuation de la région en vue d'amener à lord Roberts les renforts que celui-ci attend pour marcher sur la rivière Orange."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "Les pertes anglaises et boërs",
    "summary": "Le bilan officiel de la bataille de Spion-Kop s'alourdit. Le War Office communique les pertes britanniques, tandis que les chiffres concernant les forces fédérales sont également rapportés par les autorités.",
    "paragraphs": [
      "Le War Office publie, ce soir, une liste complémentaire des pertes subies le 24 janvier à Spion-Kop. Elle comprend 189 morts, 392 blessés et 59 manquants.",
      "La statistique officielle, pour la bataille de Spion-Kop, donne du côté des fédéraux 53 morts et 160 blessés."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "Au Parlement anglais",
    "summary": "Sir Charles Dilke fustige la gestion de la guerre devant la Chambre des communes, jugeant la campagne actuelle bien plus mal conduite que celle de Crimée au regard des échecs militaires et des pertes humaines.",
    "paragraphs": [
      "La discussion engagée au sujet de l'amendement proposé par lord Fitz Maurice a continué hier à la Chambre des communes.",
      "Sir Charles Dilke dit que la guerre actuelle a été beaucoup plus mal conduite que la guerre de Crimée elle-même. Les nombreux échecs que nous avons essuyés, les nombreux canons que nous ont pris les Boërs et le grand nombre de nos hommes faits prisonniers ont été désastreux aux yeux du monde au point de vue de notre habileté à conduire cette guerre."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Suicide d'un enfant à Colombes",
    "summary": "À Colombes, le jeune Henri Larme, âgé de quatorze ans, s'est donné la mort avec le revolver de son père. Le drame a semé la consternation dans le quartier de la rue de Bourmard.",
    "paragraphs": [
      "La rue de Bourmard, à Colombes, vient d'être mise en émoi par le suicide d'un jeune garçon à peine âgé de quatorze ans, Henri Larme, employé à Paris dans une maison de soieries de la rue du Sentier.",
      "Hier soir, lorsque ses parents furent endormis, le malheureux enfant s'empara du revolver de son père et, à minuit précis, étant descendu sur le seuil de la porte, il se logea une balle dans la région du cœur."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Double assassinat à Plessis-Corbreuse",
    "summary": "Un cultivateur et son épouse ont été sauvagement assassinés à coups de pieu au hameau de Plessis-Corbreuse. Les agresseurs ont pris la fuite sans dérober de butin, vraisemblablement dérangés dans leur forfait.",
    "paragraphs": [
      "Un double assassinat, ayant le vol pour mobile, vient d'ensanglanter le hameau de Plessis-Corbreuse, dépendant de la commune de Corbreuse et situé à sept kilomètres de Dourdan.",
      "Un cultivateur, M. Félix Leloup, âgé de soixante-six ans, et sa femme, née Mélanie Berthier, âgée de soixante-cinq ans, ont été assommés à l'aide d'un pieu avec une sauvagerie épouvantable.",
      "Les malfaiteurs, pour une cause encore inconnue, ont dû être dérangés alors qu'ils accomplissaient leur sinistre besogne, car ils se sont enfuis sans avoir pu fouiller les meubles et faire main basse sur le peu d'argent qui s'y trouvait."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Tentative de déraillement",
    "summary": "Sur la ligne de Roanne à Saint-Etienne, une tentative de déraillement a été évitée grâce à la vigilance d'un mécanicien ayant aperçu un rail déposé en travers de la voie par des inconnus.",
    "paragraphs": [
      "Le parquet de Roanne vient d'ouvrir une enquête au sujet d'une tentative de déraillement commise sur la ligne de Roanne à Saint-Etienne, entre les gares de Saint-Cyr-de-Favières et de Vendranges.",
      "Des individus encore inconnus avaient pris un rail déposé le long du talus et l'avaient placé en travers de la voie dans l'intention manifeste de provoquer une catastrophe. Heureusement, le mécanicien d'une machine isolée a aperçu le rail et a pu arrêter sa locomotive."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Crime et suicide à Besançon",
    "summary": "Un drame familial s'est déroulé à Besançon : un père de famille, abandonné par son épouse, a étranglé son fils de quatorze ans avant de se donner la mort par pendaison.",
    "paragraphs": [
      "Un assassinat, suivi du suicide du coupable, vient d'être découvert à Besançon. Le corps d'un locataire nommé Hain était pendu au plafond, tandis que le cadavre d'un de ses fils, nommé Adrien, âgé de quatorze ans, gisait à terre.",
      "Avant de se pendre, le père avait étranglé son enfant. Le meurtrier était âgé de quarante-sept ans et sa femme l'avait abandonné il y a une quinzaine de jours."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Politique",
    "title": "Mort d'un député et convocations",
    "summary": "Le député M. Bazille est décédé à Paris à l'âge de 45 ans. Les électeurs de la 2e circonscription de la Tour-du-Pin sont appelés aux urnes le 25 février pour élire un remplaçant à M. Bovier-Lapierre.",
    "paragraphs": [
      "M. Bazille, député républicain de la première circonscription de Poitiers, ancien avocat à la Cour de cassation, est mort hier, à Paris, après une courte maladie, à l'âge de quarante-cinq ans.",
      "Les électeurs de la 2e circonscription de la Tour-du-Pin sont convoqués pour le dimanche 25 février, à l'effet d'élire un député, en remplacement de M. Bovier-Lapierre, décédé."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "Réunion du groupe des républicains progressistes",
    "summary": "Sous la présidence de M. Méline, le groupe des républicains progressistes se réunit pour acter ses résultats électoraux et préparer le renouvellement prochain de son bureau dirigeant.",
    "paragraphs": [
      "Le groupe des républicains progressistes s'est réuni hier, sous la présidence de M. Méline, et a donné communication d'un procès-verbal. M. Méline a déclaré : « Je puis affirmer à nos collègues du groupe voisin que si nous sommes battus, nous sommes très contents, et que nous souhaitons d'être battus tant que cela voudra dire que l'immense majorité des nouveaux élus sénatoriaux s'est prononcée en faveur du programme de ce groupe. »",
      "Sur la proposition de M. Méline, le groupe a décidé de procéder à l'élection d'un nouveau bureau et a fixé le scrutin au lundi prochain."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "Démission du conseil municipal de Castelnaudary",
    "summary": "À la suite de conflits internes persistants, le maire ainsi que la majorité des membres du conseil municipal de Castelnaudary ont remis collectivement leur démission à la préfecture.",
    "paragraphs": [
      "À la suite de dissentiments assez graves, le maire et la majorité du conseil municipal de Castelnaudary viennent d'adresser leur démission au préfet."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Parlement",
    "title": "Chambre des députés : Séance du 1er février",
    "summary": "La Chambre des députés a entamé la discussion budgétaire concernant l'Algérie, actant plusieurs augmentations de crédits pour les infrastructures, notamment les travaux de Timgad.",
    "paragraphs": [
      "La séance est ouverte à deux heures vingt, sous la présidence de M. Maurice Faure. L'ordre du jour appelle la discussion générale du budget de l'Algérie.",
      "M. Morinaud et M. Thomson interviennent sur divers amendements concernant le personnel, les services de justice et les travaux publics. La Chambre adopte plusieurs amendements, notamment pour augmenter les subventions aux sociétés de tir et les crédits pour les travaux de Timgad."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Budget de l'Agriculture",
    "summary": "Lors de l'examen du budget de l'Agriculture, des critiques ont été formulées sur la salubrité de La Villette et sur l'iniquité de la répartition des secours aux sinistrés.",
    "paragraphs": [
      "La Chambre aborde le budget de l'Agriculture. M. des Rotours appelle l'attention du gouvernement sur l'état sanitaire de La Villette, foyer d'infection du bétail, et demande des mesures rigoureuses. M. Daudé critique, quant à lui, le mode de répartition des fonds de secours votés pour les victimes des sinistres."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Parlement",
    "title": "Sénat : Séance du 1er février",
    "summary": "Sous la présidence de M. Fallières, le Sénat a honoré la mémoire de ses membres défunts et a entamé la validation des dernières élections départementales.",
    "paragraphs": [
      "La séance est ouverte à quatre heures vingt, sous la présidence de M. Fallières. Le président rend hommage aux sénateurs décédés : MM. Talou, Vignancour et Claris.",
      "Le Sénat procède à la vérification des pouvoirs et valide de nombreuses élections départementales. L'élection du bureau est fixée au lundi suivant."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Le Commandant Gouraud et les sous-officiers",
    "summary": "Le commandant Gouraud, héros de la campagne contre Samory, est accueilli par le 51e d'infanterie. Parallèlement, le ministère de la Guerre publie la liste des postes vacants pour les sous-officiers rengagés.",
    "paragraphs": [
      "Les officiers du 51e d'infanterie, en garnison à Beauvais, ont réservé un accueil des plus chaleureux au commandant Gouraud, célèbre héros de la campagne contre Samory. Le vaillant officier est désormais affecté aux cadres complémentaires, tout en demeurant détaché auprès du ministère de la Guerre.",
      "Par ailleurs, une liste officielle des corps de troupe présentant des places vacantes de sous-officiers rengagés est publiée ce jour, afin de permettre aux candidats intéressés de faire valoir leurs droits."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Actualité",
    "title": "Réception de M. Paul Deschanel à l'Académie française",
    "summary": "M. Paul Deschanel, président de la Chambre des députés, a fait son entrée solennelle à l'Académie française. Un hommage vibrant a été rendu au regretté Édouard Hervé en présence du Président de la République.",
    "paragraphs": [
      "La réception de M. Paul Deschanel, président de la Chambre des députés, élu à l'Académie française en remplacement du regretté Édouard Hervé, s'est déroulée dans une atmosphère empreinte de solennité, en présence du Président de la République.",
      "M. Deschanel a prononcé un discours vibrant en hommage à son prédécesseur, mettant en relief son rôle de précurseur dans l'analyse politique. M. Sully-Prudhomme a ensuite répondu au nom de l'illustre Compagnie, saluant avec éloquence le talent et la carrière exemplaire du nouveau récipiendaire."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Agression mortelle d'un gardien de la paix",
    "summary": "Un gardien de la paix a été mortellement blessé par un malfaiteur rue du Poteau. L'agresseur, identifié comme étant Henri Deschamps, a été arrêté par les brigades de police.",
    "paragraphs": [
      "Dans la soirée, un gardien de la paix du dix-huitième arrondissement a été mortellement blessé par un dangereux malfaiteur qu'il tentait d'appréhender dans le cadre d'une surveillance dirigée contre des vols de bijoux.",
      "L'agent Émile Mallet, ayant voulu intercepter un suspect rue du Poteau, a été abattu de plusieurs coups de revolver. Le meurtrier, identifié comme étant le nommé Henri Deschamps, a pu être arrêté ultérieurement par les brigades de police."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Dépêches",
    "title": "Nouvelles de l'étranger",
    "summary": "Diverses dépêches internationales font état du décès du cardinal-vicaire Jacobini à Rome et de troubles politiques aux États-Unis. La situation à Pékin demeure incertaine.",
    "paragraphs": [
      "Il est annoncé qu'un navire s'est échoué en vue du Cap ; il ne s'agit nullement d'un torpilleur français. Par ailleurs, à Rome, le cardinal-vicaire Jacobini est décédé ce matin.",
      "À Pékin, le décès de l'empereur n'est point encore confirmé. Aux États-Unis, le gouverneur sortant du Kentucky doit faire face à des troubles politiques majeurs concernant le lieu de réunion de la législature."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Crime passionnel à Toulouse",
    "summary": "Le tribunal correctionnel de Toulouse a condamné Jean Lauvergne à cinq ans de prison pour avoir jeté du vitriol au visage de son épouse, afin de se venger d'une procédure de divorce.",
    "paragraphs": [
      "Le tribunal correctionnel de Toulouse a prononcé une peine de cinq ans de prison à l'encontre de l'ouvrier bourrelier Jean Lauvergne. Le 11 janvier dernier, dans la soirée, celui-ci avait projeté du vitriol au visage de son épouse en pleine rue.",
      "La malheureuse femme a eu les joues et le cou horriblement brûlés par le liquide corrosif. Le condamné a justifié son geste par une volonté de vengeance, son épouse ayant engagé une procédure de divorce contre lui."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Social",
    "title": "Le service de la statistique municipale de Paris",
    "summary": "Le bilan hebdomadaire de la statistique municipale de Paris fait état de 1 075 décès. La mortalité est marquée par une recrudescence notable des maladies respiratoires, notamment la grippe et la pneumonie.",
    "paragraphs": [
      "Le service de la statistique municipale a enregistré, pendant la semaine, 1 075 décès, chiffre un peu supérieur à celui de la semaine précédente et à la moyenne ordinaire des semaines de janvier.",
      "Les maladies de l'appareil respiratoire sont la cause principale de cette légère aggravation. La typhoïde a causé 4 décès ; la rougeole, 13 ; la scarlatine, 11 ; la coqueluche, 1 ; et la diphtérie, 4.",
      "Les inflammations des organes de la respiration ont provoqué 167 décès. Ce chiffre se décompose ainsi : grippe aiguë, 29 décès ; bronchite chronique et broncho-pneumonie, 59 ; pneumonie, 49. Les autres maladies respiratoires ont causé 30 décès, dont 26 par congestion pulmonaire.",
      "La phtisie a causé 203 décès, la méningite tuberculeuse 46. L'apoplexie, la paralysie et le ramollissement cérébral ont emporté 76 personnes. Les maladies organiques du cœur, 65 ; le cancer a fait 48 victimes. Enfin, 38 vieillards sont morts de sénilité, et il y a eu 15 suicides et 18 autres morts violentes."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le mystère de Charenton",
    "summary": "L'enquête sur les déclarations d'une jeune fille affirmant avoir vu un bras humain sectionné rue des Réservoirs à Charenton semble se diriger vers la thèse de l'hallucination, malgré la poursuite des recherches.",
    "paragraphs": [
      "Nous avons raconté hier les phases de l'enquête ouverte sur les déclarations d'une jeune fille nommée Marguerite Varginol, qui assurait avoir vu un bras humain sectionné sur un trottoir de la rue des Réservoirs, à Charenton.",
      "D'après son récit, deux individus avaient ramassé le membre et s'étaient enfuis. Rien n'est venu depuis corroborer ses dires, et la jeune fille semble avoir été le jouet d'une hallucination. Toutefois, les recherches continuent."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie rue Moureau",
    "summary": "Un incendie s'est déclaré hier soir dans un logement de la rue Moureau. La petite Maria Lhabitant, âgée de neuf jours seulement, a été grièvement brûlée au visage durant le sinistre.",
    "paragraphs": [
      "Un commencement d'incendie s'est déclaré hier soir dans le logement occupé par M. Lhabitant, au 66, rue Moureau. La petite Maria Lhabitant, âgée de neuf jours, a été brûlée au visage et transportée d'urgence à l'hôpital Trousseau. Le feu a été éteint par les pompiers après une heure de travail."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Comédies mal placées",
    "summary": "Un menuisier a découvert la duplicité de son épouse, partie avec ses économies et un amant. Sous le choc de cette confrontation, le mari a dû être hospitalisé dans un état alarmant.",
    "paragraphs": [
      "M. Isidore T., menuisier rue Chapon, a trouvé en rentrant chez lui une lettre de sa femme annonçant son départ pour soigner sa mère malade et lui demandant d'emporter les 600 francs destinés à un médecin. Plus tard, une lettre anonyme l'avertissait que sa femme habitait en réalité rue des Quatre-Fils avec un étudiant en droit.",
      "Le menuisier, confronté à la vérité en rencontrant son épouse, a perdu connaissance et a dû être transporté à l'hôpital Saint-Louis dans un état alarmant."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "Les fêtes de la mi-carême",
    "summary": "Les préparatifs de la mi-carême s'organisent activement. Mlle Eugénie Barbier a été élue reine des Halles lors d'une cérémonie festive tenue au café de l'Hôtel-de-Ville.",
    "paragraphs": [
      "Les marchés parisiens ont élu leur reine. À la suite d'une élection au café de l'Hôtel-de-Ville, Mlle Eugénie Barbier a été portée reine des Halles. Âgée de vingt-et-un ans, née à Rennes, elle habite Paris depuis huit ans.",
      "La reine des reines, pour la mi-carême, sera choisie ultérieurement parmi les reines élues des autres marchés. La fête s'est terminée par des félicitations adressées aux élues."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents autour de Paris",
    "summary": "Une série d'accidents tragiques a endeuillé la banlieue parisienne : chutes mortelles, accidents de chantier et explosions ont été signalés à Levallois, Bois-Colombes, Villeneuve, Clichy et Pantin.",
    "paragraphs": [
      "À Levallois-Perret, deux ouvriers, MM. Auguste Courlet et Alexandre Gérard, ont été grièvement blessés lors du chargement de paille après la rupture d'une chaîne.",
      "À Bois-Colombes, le nommé Émilien Constant, ouvrier forgeron, a été sérieusement blessé par la chute d'une barre d'acier.",
      "À Villeneuve-la-Garenne, deux enfants ont été grièvement blessés par l'explosion fortuite d'un paquet de cartouches.",
      "À Clichy, un ouvrier a fait une chute mortelle depuis une maison en construction.",
      "À Pantin, le nommé François Fournier a été retrouvé mort, sans que des traces de violences ou de blessures n'aient pu être constatées sur son corps."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide à Vincennes",
    "summary": "Acculé par une ruine financière totale, M. Raymond, commerçant à Vincennes, a tenté de mettre fin à ses jours. Transporté à l'hôpital Saint-Antoine, son état est jugé désespéré.",
    "paragraphs": [
      "M. Raymond, commerçant à Vincennes, a été trouvé sans connaissance après avoir absorbé une quantité importante de rhum et allumé un réchaud dans son logement, acculé par une ruine financière totale.",
      "Il a été transporté d'urgence à l'hôpital Saint-Antoine, où il se trouve actuellement dans un état jugé désespéré."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Attaque du courrier à Fontainebleau",
    "summary": "En forêt de Fontainebleau, un inconnu a fait feu sur la voiture du courrier. Bien que le véhicule ait été criblé de chevrotines et le sac postal perforé, le conducteur est miraculeusement indemne.",
    "paragraphs": [
      "Un inconnu a tiré, hier matin, en pleine forêt de Fontainebleau, un coup de fusil chargé de chevrotines sur le courrier venant de la gare.",
      "Bien que la voiture soit criblée de projectiles et le sac aux lettres percé, le conducteur n'a heureusement pas été atteint."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Actualités",
    "title": "La température",
    "summary": "Un temps frais et couvert persiste sur l'ensemble de la France, marqué par des chutes de neige dans le Nord et des températures négatives relevées au Puy-de-Dôme et au Ventoux.",
    "paragraphs": [
      "Le temps frais va persister en France avec un ciel couvert, des neiges dans le Nord et des pluies probables dans la moitié sud.",
      "Il a fait froid à travers tout le pays, avec des températures négatives enregistrées aux sommets du Puy-de-Dôme et du Ventoux."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Feuilleton",
    "title": "Deux Passions - Un drame du mariage",
    "summary": "Jacques d'Angeville est attendu au château par le comte. Le baron de Prévaux et Mlle Jeannel organisent les préparatifs du dîner dans cette atmosphère feutrée.",
    "paragraphs": [
      "Il avait expédié une dépêche de Paris. Et le vieux comte lui avait répondu qu'on le recevrait avec allégresse. Le mot y était.",
      "Il y aurait aussi le baron de Prévaux, le grand chasseur devant l'Éternel, qui n'avait jamais porté un fusil de sa vie, mais qui forçait les sangliers et les cerfs avec une intrépidité infatigable et une meute dont la réputation n'était plus à faire.",
      "Il était entré au château en passant pour se rendre à sa propriété d'Alvimare et on l'avait retenu à dîner. En ce moment, il devait être quelque part sous les charmilles avec le père. Elle était charmante, mademoiselle Jeannel.",
      "Quel air de bonté répandu sur ses traits. Quelle intelligence aussi. Elle expliqua à son ami Jacques d'Angeville qu'il n'avait à s'inquiéter de rien, que les ordres étaient donnés et que tout serait en règle. Et à l'oreille de son frère, elle glissa ces quelques mots : « C'est le vieux docteur, le père et moi qui... »"
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Santé",
    "title": "Guérison à méditer (Goudron Guyot)",
    "summary": "Témoignage de François Martinet, habitant rue Bonaparte, sur sa guérison d'une bronchite chronique et d'un catarrhe opiniâtre grâce à l'usage régulier du Goudron Guyot.",
    "paragraphs": [
      "Le 19 février, un pharmacien de Paris recevait d'un malade la lettre suivante : « Il y a quelques années, j'ai attrapé un refroidissement, à la suite duquel il m'est venu un fort rhume que j'ai négligé et qui a dégénéré en un mauvais catarrhe. Aujourd'hui, je suis atteint d'une bronchite affreuse. Je ne puis respirer à mon aise, car je suis très oppressé.",
      "J'ai l'estomac plein de glaires et je ne puis pas dormir. J'ai, tous les jours, la poitrine crasse. Je tousse et je crache chaque matin pendant deux heures de temps, avant que les glaires puissent se détacher ; c'est surtout pendant l'hiver que je souffre. Cela me donne envie de vomir et cependant je ne vomis pas.",
      "J'ai essayé bien des remèdes, des tisanes, des sirops, rien ne m'a fait du bien. Le médecin m'a dit que je devenais asthmatique. Je n'ai pas d'appétit et n'ai plus goût à rien. Je lis dans mon journal le récit des guérisons obtenues avec votre Goudron dans des cas semblables au mien. Veuillez donc m'envoyer un flacon de véritable Goudron Guyot. Je veux espérer qu'il me soulagera. » Signé : François Martinet, rue Bonaparte, Paris.",
      "Après avoir essayé du véritable Goudron Guyot, M. F. Martinet écrit de nouveau : « Paris, 15 mai. Mon bien cher monsieur Guyot, j'ai employé le flacon que vous m'avez envoyé, en le prenant à tous mes repas, ainsi qu'il est prescrit, soit une cuillerée à café de Goudron pour chaque verre que je buvais. Déjà, après ce premier flacon, je trouvais une amélioration remarquable dans mon état. Je crachais plus facilement les glaires qui m'obstruaient l'estomac. L'appétit me revint un peu et je pus dormir quelques heures sans être gêné dans la respiration. Je continuai l'usage du Goudron Guyot, et, après trois flacons, les accès de toux qui m'épuisaient disparurent. J'ai maintenant un bon appétit, je ne crache plus de glaires et les forces me sont complètement revenues. Je vous remercie extrêmement d'avoir inventé le Goudron Guyot et je ne peux que recommander votre remède à toutes les personnes qui souffrent de bronchites et catarrhes comme j'en souffrais. » Signé : François Martinet."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Tragédies de l'Amour - Le Secret de Roland",
    "summary": "Un drame familial s'intensifie : Roland menace de révéler un secret compromettant pour contraindre sa mère à accepter le mariage de son frère, au risque de provoquer une issue fatale.",
    "paragraphs": [
      "« Je tiens à ce que vous vous expliquiez. Quelle qu'elle soit. Si vous refusez, mère, j'irai trouver Horace et je lui dirai qu'il n'a pas besoin de tenir compte de votre volonté, qu'il peut se marier avec Colette, que nulle opposition ne viendra de vous, car il ne peut y avoir de mésalliance entre cette jeune fille et le fils de celle qui n'a pas craint dans sa jeunesse d'aimer le plus implacable ennemi de notre famille. »",
      "« Vous ne ferez pas cela », dit-elle en frémissant. « Je le ferai, mère. » Il leva la main. « Je le jure ! Je ne veux pas que mon frère souffre plus longtemps à cause de vous. Et si vous pouviez lire clairement dans le désespoir de son pauvre cœur, il vous viendrait des épouvantes, mère, car je ne sais vraiment si Horace ne pense pas au suicide. »",
      "« Vous n'avez plus rien à ajouter ? » « Rien. » « Et vous désirez sans doute savoir ce que j'ai résolu, après avoir entendu ce que vous venez de médire, après avoir constaté qu'il n'y avait plus en vous ni respect ni affection pour moi ? » « Vous vous trompez, ma mère. Je vous aime toujours et j'ai une très grande pitié de vous, parce que vous devez beaucoup souffrir, aussi bien dans votre tendresse pour nous que dans votre orgueil. »",
      "Elle se redressa : « Je ne céderai point à vos menaces, Roland. J'ai donc résolu de ne point en tenir compte. » « Ainsi, mère ? » « Ainsi, ce mariage ne se fera pas. » « Alors, je parlerai. J'espère qu'au dernier moment la honte de cette révélation vous arrêtera, car ce serait terrible, mon fils, car ce serait abominable. »",
      "« Je le sais. Et, si vous n'êtes point arrêté par cette honte, quelque chose peut-être renforcera ce secret jusqu'au plus profond de votre cœur : la crainte de me voir mourir. » « Mourir ? » « Je mourrai de cette révélation, mon fils. Je n'y survivrai pas une heure, pas une minute. Je me tuerai. »",
      "« Ah ! mère ! mère ! » « Dites-vous bien cela, mon fils, et tenez-vous-le pour bien dit ! Vous avez maintenant à choisir. Il s'agit pour vous comme pour votre frère aîné de me prouver votre obéissance. Il faut que votre frère renonce à ce mariage. Si vous voulez me contraindre à l'accepter, vous serez en deuil de moi, lorsque le duc conduira sa fiancée à l'autel. »",
      "Vous êtes impitoyable. Elle eut un sourire superbe. Elle avait reconquis toute sa sécurité. Elle savait bien que, ce choix, Roland ne le ferait pas. Et du moment qu'une parole de lui devait tuer sa mère, cette parole, elle savait bien qu'il ne la prononcerait jamais. Elle triomphait de nouveau."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Récit",
    "title": "Une chasse dans la forêt de Brotonne",
    "summary": "Récit d'une partie de chasse à courre organisée en forêt de Brotonne, en Normandie, où le baron de Prévaux offre au colonel une prestigieuse journée de plaisir cynégétique.",
    "paragraphs": [
      "On a tout arrangé. Il faut bien le distraire un peu ! A l'heure dite, le colonel arriva, rubicond, la face enluminée, réjoui, dans un grand break qui était allé le prendre à la gare. Il était accompagné de trois des meilleurs camarades du marquis. Ce fut une vraie réunion d'amis.",
      "Le baron de Prévaux était locataire, pour la chasse à courre, de la forêt de Brotonne. Le vieux comte de Vrigny, qui avait vécu avec son père sur le pied de l'intimité la plus parfaite, lui dit pendant le dîner : « Tu devrais donner au colonel le plaisir de courir un cerf pendant qu'il est au pays de Caux. »",
      "Le visage du chasseur s'épanouit : « Ce sera le premier de l'année, dit-il, mais rien de plus facile. Le temps est admirable, la forêt magnifique. Si nous ne réussissons pas, nous aurons toujours le plaisir d'une belle promenade. Il ne restait qu'à fixer le jour. Après-demain, voulez-vous ? »",
      "Les chasses de la forêt de Brotonne sont superbes. Douze ou quinze mille arpents de bois, bornés de trois côtés par la Seine qui forme autour d'eux une boucle que répète tout auprès, sur une moindre étendue, le lacet qui emprisonne la célèbre abbaye de Jumièges et sa forêt, forment un admirable champ de courses pour les cavaliers et la meute acharnés à la suite d'un animal qui, la plupart du temps, n'a d'autre moyen de salut que de traverser la Seine à la nage. On peut dire que ces réunions sont de vraies fêtes pour le pays. De tous côtés les curieux accourent pour assister au moins à quelques-unes de leurs péripéties."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Bourse",
    "title": "Cours des Halles et Marchés",
    "summary": "Compte-rendu du marché des bestiaux du 1er février : tendance à la hausse marquée pour les bœufs et les moutons, tandis que les cours des porcs demeurent stables.",
    "paragraphs": [
      "Marché des Halles de la ville du jeudi 1er février. Bœufs : 1500 à 1700. Vaches : 100 à 400. Taureaux : 100 à 500. Veaux : 100 à 600. Moutons : 100 à 600. Porcs : 100 à 500.",
      "Bœufs : Vente meilleure et hausse de 5 francs par tête. On cote Limousins, de 69 à 72 c. ; Bourbonnais, de 66 à 70 c. ; Choletais, de 64 à 68 c. ; Vouléens, de 60 à 62 c. le demi-kilo net vif. Vente bonne et hausse de 5 c par kilo.",
      "Moutons : Vente plus facile et hausse de 1 à 2 c par demi-kilo. On cote petits moutons du Centre, de 90 à 96 c. ; métis de Brie, de 92 c. ; métis beaucerons, champenois, bourguignons, de 88 à 92 c. le demi-kilo net.",
      "Porcs : Vente calme et prix bien tenu. On cote bons porcs de l'Ouest, de 50 à 54 c. et ceux du Centre, de 48 à 51 c. le kilo vif."
    ]
  }
];
