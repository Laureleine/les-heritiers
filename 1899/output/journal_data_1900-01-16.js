// Date: 1900-01-16
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-16 (Version Restaurée, 47 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Promotion Littéraire",
    "title": "Mariage Secret : Roman dramatique dans le Petit Parisien",
    "summary": "Le Petit Parisien annonce la publication imminente de « Mariage Secret », un roman dramatique inédit de Paul de Bévay explorant les péripéties poignantes d'une mère et de sa fille dans le Paris d'aujourd'hui.",
    "paragraphs": [
      "Le Petit Parisien publiera prochainement « Mariage Secret », un roman dramatique et passionné qui se déroule au milieu d'émouvantes péripéties. C'est l'histoire de deux femmes, la mère et la fille, jetées dans le milieu parisien à la suite d'une aventure romanesque.",
      "Ce roman a été écrit spécialement pour le Petit Parisien par Paul de Bévay, dont le talent, fait d'émotion vraie, est très goûté du grand public. Nos lecteurs y retrouveront les qualités qui distinguent l'auteur d'« Orphelins d'Aîné », « Celle qu'on aime » et « Sacrifice »."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Éditorial",
    "title": "La Folie Homicide",
    "summary": "Face à la recrudescence des tragédies domestiques, cet éditorial analyse les causes de cette folie homicide poussant des mères désespérées à supprimer leurs propres enfants, un fléau nécessitant une réponse scientifique.",
    "paragraphs": [
      "Il ne faut revenir à ces suicides de mères et d'enfants dont je parlais l'autre jour et qui sont bien les drames les plus affligeants de notre époque envahie par les fatales névroses. De nouvelles tragédies domestiques ont surgi, augmentant le nombre des victimes de cette folie homicide.",
      "Une aberration criminelle s'est propagée qui entraîne aux pires actes de désespoir des malheureux que la misère affole. Y a-t-il un remède qui puisse arrêter cette désolante monomanie ?",
      "C'était sous l'étreinte d'une idée persécutrice que cette jeune femme de Vaugirard jetait de son balcon, il y a quelques jours, ses deux petites filles. On constata bientôt qu'elle avait prémédité ce triple meurtre et qu'elle avait barricadé l'entrée de sa chambre.",
      "Le drame de la rue Linné peut lui-même être assimilé à un drame de la folie. Cette mère, dont le mari est en prison, décide qu'elle mourra et que ses enfants périront avec elle pour éviter le déshonneur. C'est là le fond du problème.",
      "Les parents n'ont jamais le droit de tuer leurs enfants. Jadis, sous la loi romaine, l'enfant était la propriété du père, mais cette loi féroce tomba en désuétude à mesure que s'affirmaient les progrès de la civilisation. Personne, aujourd'hui, ne songerait à faire revivre cette loi.",
      "Plaidez pour elles les circonstances atténuantes ou l'irresponsabilité, mais pas autre chose. Les martyrs sont ces pauvres enfants que l'on mène à la mort alors qu'ils ne comprennent encore que la joie de vivre.",
      "Ah ! puissent la science et la justice trouver l'antidote de ces folies inhumaines, le remède à ces misères du cœur qui peuplent de cadavres d'enfants les tristes logis hantés par le désespoir."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions - Deuxième Partie",
    "summary": "Au cœur du drame, le mari de Suzanne découvre la réalité de son entourage et la fuite précipitée de ses connaissances, le conduisant à une prise de conscience brutale sur sa propre responsabilité.",
    "paragraphs": [
      "« C'est celle-ci, fit l'amoureux en essayant d'amadouer cette vieille, qui devait lui soupçonner de louches intentions. Elle est partie ce matin. Ils sont encore ici, mais ils vont décamper à leur tour. »",
      "« Je monte chez mademoiselle Fleuriet », dit-il. L'appartement des deux sœurs et celui de la vieille fille étaient dans un désordre complet. C'était le déménagement dans toute sa beauté.",
      "Lorsque le mari de Suzanne descendit l'escalier pour regagner la rue, toutes ses idées étaient bouleversées. Il n'accusait plus Valentine. À ses yeux, le seul coupable, c'était lui.",
      "Valentine ne quittait donc jamais sa sœur qu'avec de mortelles inquiétudes. C'était donc elle qui avait raison en le jugeant tel qu'il s'était montré."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "À Madagascar",
    "summary": "Le calme règne à Madagascar, où la pacification progresse efficacement dans les cercles des Baras et de Fort-Dauphin, accompagnée d'une prospérité financière et agricole encourageante pour la colonie.",
    "paragraphs": [
      "Une correspondance datée du 12 décembre, arrivée par le Yang-Tsé, apporte de Tananarive les nouvelles suivantes : La situation politique est excellente ; un calme complet règne partout.",
      "Le cercle des Baras a été occupé en entier pacifiquement. Le cercle de Fort-Dauphin est bien pacifié jusqu'au Mandrabé. On procède à l'occupation du pays de Mahafaly et de Carambolo. Le général Pennequin a fait occuper Machicoro et Faux-Cap.",
      "La situation financière est bonne. On peut compter sur au moins un million de boni pour le budget. La récolte du riz s'annonce bien et la surface ensemencée dépasse d'un tiers celle de l'année dernière.",
      "Les mines d'or ont une production triple de celle de l'an passé. Le tracé du chemin de fer de Tamatave est désormais défini."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "À In-Salah",
    "summary": "Les troupes françaises à In-Salah ont infligé une défaite sévère aux forces rebelles. Par ailleurs, la mission de Béhagle, explorant la région du lac Tchad, est confirmée en vie à Dikoa.",
    "paragraphs": [
      "Le parti hostile à la France qui attaqua la mission Flamand le 28 décembre dernier à Ingesten a subi une défaite. Ils parvinrent à reconstituer un effectif d'environ 400 combattants qui firent un retour offensif sur In-Salah.",
      "Le combat commença, vers neuf heures, par des feux de tirailleurs. Les spahis et le goum ont désorganisé les assaillants, les ont rompus et poursuivis, leur faisant perdre 150 tués, blessés et 14 prisonniers.",
      "La mission de Béhagle, chargée d'explorer la région du lac Tchad, est aujourd'hui avérée en vie à Dikoa, retenue là par le fameux Rabah."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'Explosion du Boulevard Murat",
    "summary": "Une violente déflagration est survenue au Laboratoire municipal, boulevard Murat, lors de la manipulation d'un obus de marine. M. Truchon et ses collaborateurs en sont sortis miraculeusement indemnes.",
    "paragraphs": [
      "Une explosion qui a failli causer la mort de trois personnes s'est produite hier matin, boulevard Murat, dans un bâtiment affecté aux expériences du Laboratoire municipal.",
      "Il ne restait plus qu'à procéder à l'ouverture de l'énorme obus de marine. Une violente déflagration se produisit dans le puits réservé aux opérations. Une étincelle, produite par le frottement du métal, avait dû enflammer les dix kilogrammes de poudre.",
      "Par un hasard extraordinaire, M. Truchon et ses deux compagnons n'ont pas été blessés et ils en ont été quittes pour de légères égratignures."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Double Suicide rue Émériau",
    "summary": "Le commissaire de police de Grenelle a constaté le décès par asphyxie des époux Longagne, retrouvés dans leur domicile. L'enquête devra confirmer s'il s'agit d'un acte volontaire.",
    "paragraphs": [
      "M. Rieux, commissaire de police du quartier de Grenelle, a été appelé à procéder hier matin aux constatations d'un double suicide. Les époux Longagne, Antoine-Armand et Marie, ont été retrouvés morts dans leur logement.",
      "Une bassine contenant des débris de charbon de bois était placée au milieu de la chambre à coucher et indiquait nettement les causes probables de la mort.",
      "Y a-t-il eu réellement suicide ou accident ? On ne sait encore, mais la première hypothèse est plus plausible que la seconde. L'enquête ouverte par M. Rieux pourra seule apporter les éclaircissements nécessaires au drame."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Actualité Étrangère",
    "title": "La Guerre dans l'Afrique du Sud",
    "summary": "Le War Office rapporte une situation militaire favorable aux Britanniques en Afrique du Sud, marquée par des mouvements stratégiques de cavalerie et le déplacement des troupes vers Weenen.",
    "paragraphs": [
      "La situation actuelle dans l'Afrique du Sud paraît être assez favorable aux Anglais, si l'on accepte le texte intégral des informations publiées par le War Office.",
      "Le War Office a reçu deux dépêches du maréchal lord Roberts. Une reconnaissance dirigée par la cavalerie de Methuen est rentrée au camp le 11 janvier après avoir poussé jusqu'à 25 milles à l'intérieur de l'État libre d'Orange.",
      "Le Natal Advertiser confirme que les troupes stationnées à Estcourt opèrent un mouvement général. Quatre mille hommes sont partis mercredi dans la direction de Weenen."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Situation autour de Ladysmith",
    "summary": "Les forces boers se sont repositionnées autour de Ladysmith après un échec récent. Malgré l'incertitude des combats, la presse anticipe une possible libération du siège pour le courant du mois de janvier.",
    "paragraphs": [
      "Depuis leur échec de samedi, les Boers se sont repliés au nord et à l'est de la ville, dans le but de s'assurer une ligne de retraite en cas de succès du général Buller. Ils sont toujours en grand nombre autour de Ladysmith. On suppose qu'ils méditent une nouvelle attaque.",
      "Les journaux publient un télégramme de Durban, non daté, disant qu'on s'attend, à moins d'échecs sérieux des troupes anglaises, à ce que le siège soit délivré ce mois de janvier."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Déserteur condamné",
    "summary": "Le conseil de guerre boer, présidé par le général Erasmus, a condamné un soldat nommé Caulvis pour trahison, celui-ci ayant tenté de rejoindre les lignes britanniques.",
    "paragraphs": [
      "Pretoria, 15 janvier. Une dépêche du quartier général sous Ladysmith, en date du 12 janvier, annonce que le conseil de guerre réuni dans la matinée, sous la présidence du général Erasmus, a condamné le déserteur nommé Caulvis, inculpé de trahison pour avoir déserté avec l'intention de passer aux Anglais."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Combats autour de Ladysmith : Version anglaise et pertes",
    "summary": "Récit des combats des 6 et 7 janvier à Ladysmith. Malgré les renforts boers à Wagon-Hill, les troupes britanniques maintiennent leurs positions au prix de lourdes pertes humaines dans les deux camps.",
    "paragraphs": [
      "Les trois dépêches suivantes sont relatives aux combats qui ont eu lieu autour de Ladysmith, le 6 et le 7 janvier.",
      "Hier, à midi, les Boers ont reçu des renforts considérables du côté de Wagon-Hill, et pour toute réponse nos troupes ont contre-attaqué avec succès, dispersant l'ennemi. Nous avons conservé nos positions.",
      "Les pertes ont été très élevées des deux côtés. Tout est calme aujourd'hui.",
      "Une dépêche officielle affichée à Pietermaritzburg annonce que, dans la bataille du samedi 6 janvier devant Ladysmith, les pertes des armées républicaines s'élèvent à 80 tués, parmi lesquels trois commandants de districts orangistes et un commandant de district transvaalien, ainsi que 69 blessés."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Combats autour de Ladysmith : Version boer",
    "summary": "Le récit du camp boer décrit une attaque acharnée contre les positions anglaises au Platrand Ridge, marquée par un violent duel d'artillerie interrompu par un orage, avant la retraite des forces boers.",
    "paragraphs": [
      "Camp boer devant Ladysmith, 7 janvier. Nous avons attaqué les fortifications anglaises de Ladysmith, près du Platrand Ridge. La lutte a été acharnée de part et d'autre.",
      "Lorsque nos colonnes d'attaque sont pour la première fois arrivées sur le plateau, elles ont été reçues par une grêle terrible de mitraille et de boulets de l'artillerie anglaise. La bravoure déployée des deux côtés a été remarquable. Vers dix heures du matin, le feu de l'artillerie anglaise a sensiblement diminué de violence, mais une lutte terrible s'est alors engagée entre fusiliers pour la possession du plateau.",
      "À midi, un orage épouvantable a éclaté et la bataille a dû être interrompue pendant deux heures. Quoique les Burghers se fussent emparés de la plupart des positions anglaises situées à l'ouest du plateau, ils ont finalement été obligés d'abandonner le terrain qu'ils avaient gagné.",
      "Les pertes, du côté des Anglais, ont dû être sérieuses, les ambulances ennemies ayant été des plus affairées pendant plusieurs heures. Les pertes des Boers s'élèvent à cent tués et blessés, le contingent de l'État libre étant celui qui a le plus souffert."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Bombardement à Colesberg",
    "summary": "Les forces britanniques ont installé un canon de 15 livres au sommet du Coleskop, permettant un bombardement efficace du camp boer situé à trois milles de distance.",
    "paragraphs": [
      "Hier, un canon pour projectiles de 15 livres a été amené à bras par 150 hommes au sommet du Coleskop, autrement appelé Torenburg, à 1 000 pieds au-dessus des plaines environnantes. Cette opération sur une colline escarpée et rocheuse a demandé près de quatre heures.",
      "Aujourd'hui, les Anglais ont ouvert le feu sur le camp boer, qui était parfaitement visible à une distance de trois milles. Les obus commencèrent à pleuvoir au milieu des tentes des républicains. On put apercevoir une cinquantaine d'hommes à pied et à cheval allant se réfugier à l'abri des collines.",
      "On ne croit pas qu'il reste un seul Boer dans le voisinage immédiat, mais ils ne doivent pas être loin ; ils attendent sans doute une occasion propice pour eux."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Nouvelles diverses d'Afrique du Sud",
    "summary": "Situation calme à Phillips-town malgré quelques désertions vers les lignes boers, tandis qu'au Cap, un fermier est poursuivi en justice pour des faits présumés de trahison.",
    "paragraphs": [
      "Phillips-town, 15 janvier. Tout est tranquille ici. Déjà une quinzaine de réfractaires, dont un policeman, ont disparu dans la direction de Colesberg, où ils sont probablement allés rejoindre les Boers.",
      "Les réfugiés anglais enrôlés de force par les Boers continuent de s'échapper de l'État libre et entrent dans le Basutoland.",
      "Le Cap, 13 janvier. Un fermier nommé Vanren, capturé à Douglas par le colonel Pilcher, a comparu aujourd'hui devant le tribunal de police sous l'inculpation de trahison. L'affaire a été ajournée à huitaine."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Zoulpans-Drift occupée par les Anglais",
    "summary": "Le général Wood a occupé Zoulpans-Drift le 6 janvier, réalisant la première incursion britannique sur le territoire de l'État libre, sécurisée par un pont de bateaux sur le fleuve.",
    "paragraphs": [
      "Zoulpans-Drift, 13 janvier. Zoulpans-Drift a été occupé le 6 janvier par le général Wood avec un détachement composé de toutes armes. Zoulpans-Drift est situé sur le territoire de l'État libre, au nord de la station d'Orange-River. C'est la première fois depuis le commencement de la campagne qu'un poste a été établi sur le territoire républicain. Les communications entre les deux rives du fleuve sont établies par un pont de bateaux."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "Interview du Docteur Leyds",
    "summary": "Le représentant des Boers, le docteur Leyds, assure que les réserves de munitions et l'utilisation de machines agricoles modernes garantissent au Transvaal une résistance durable face aux troupes britanniques.",
    "paragraphs": [
      "Un de nos confrères publie la conversation suivante, au cours de laquelle le docteur Leyds a donné des renseignements intéressants sur les ressources des Boers.",
      "Interrogé sur les ressources du Transvaal en approvisionnements, le docteur Leyds répond : « Rassurez-vous. Le général Joubert a dit bien avant les hostilités qu'il était prêt : tous les jours vous démontrent et vous démontreront davantage l'abondance inépuisable de nos munitions et de notre matériel de guerre. »",
      "Concernant les récoltes, il ajoute : « Le matériel agricole du Transvaal, comme celui de l'Orange, est égal à leur matériel militaire. L'emploi de machines perfectionnées, avec le concours d'indigènes au service des vaillantes femmes boers, a permis de faire parfaitement face à la situation. »",
      "Sur la question des prisonniers anglais, il suggère : « Ce sera de faire travailler les prisonniers anglais aux mines. »"
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Vie Militaire",
    "title": "Aux Invalides : Le nouveau plumet",
    "summary": "Le tambour-major d'infanterie a inauguré un imposant plumet tricolore lors d'une cérémonie aux Invalides, passée en revue par le général Brugère devant un public clairsemé.",
    "paragraphs": [
      "Un beau plumet tricolore, haut et large, était porté hier aux Invalides par le tambour-major d'infanterie, qui donnait le signal des roulements pendant la remise des décorations et médailles militaires. Ce plumet fera le bonheur des 161 autres tambours-majors de l'armée française.",
      "Peu de curieux ont pu admirer le nouveau plumet, car il y avait peu de monde à la cérémonie des Invalides ; un bataillon du 39e, avec drapeau et musique, des détachements de la garde républicaine, des pompiers et du train, voilà tout ce que le général Brugère, gouverneur de Paris, a passé en revue."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Vie Militaire",
    "title": "Nouvelles militaires : Décorations à Meaux",
    "summary": "Le général Belbèze, en partance pour Montauban, a officiellement fait ses adieux au 4e régiment de hussards lors d'une cérémonie militaire tenue hier à Meaux.",
    "paragraphs": [
      "Une cérémonie militaire a eu lieu hier après-midi à Meaux, où le général Belbèze, qui quitte la brigade de hussards pour aller prendre le commandement de la brigade de cavalerie du corps d'armée à Montauban, a fait ses adieux au 4e régiment de hussards."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Chambre des Députés : Séance du lundi 15 janvier",
    "summary": "La Chambre a débattu des budgets ferroviaires et de la catastrophe de Juvisy. Le gouvernement a soutenu l'interdiction prochaine des courses de taureaux avec mise à mort.",
    "paragraphs": [
      "La Chambre a consacré sa séance à la discussion des budgets des chemins de fer de l'État et des conventions. M. Arclès a développé l'interpellation qu'il avait déposée touchant la catastrophe du chemin de fer d'Orléans, à Juvisy.",
      "La séance est ouverte à deux heures vingt sous la présidence de M. Paul Deschanel. M. Le Hérissé a transformé son projet de résolution sur la situation des députés élus sénateurs en une proposition de loi.",
      "M. Waldeck-Rousseau, président du Conseil, dit que le gouvernement s'associe à la demande d'urgence pour la loi concernant la protection des animaux domestiques et l'interdiction des courses de taureaux avec mise à mort."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Condamnation du fils de M. Crispi",
    "summary": "Le fils de l'ancien ministre italien François Crispi a été condamné par le tribunal correctionnel de Rome à quatre ans de prison pour détournement de fonds.",
    "paragraphs": [
      "Rome, 15 janvier. On mande que le tribunal correctionnel a rendu son jugement dans l'affaire du détournement de fonds dans laquelle se trouvait impliqué le fils de l'ancien ministre François Crispi. François Crispi fils a été condamné à quatre ans de réclusion, et son complice Gialli à quinze mois de la même peine."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Épidémie et grèves à Barcelone",
    "summary": "Barcelone est en proie à une épidémie frappant une large part de la population, tandis que le conflit social s'aggrave à Ripoll avec plus de 700 grévistes soutenus par les syndicats houillers.",
    "paragraphs": [
      "Barcelone. Il règne dans la ville une véritable épidémie et la mortalité y augmente dans des proportions inquiétantes ; on estime que la moitié de la population est actuellement alitée.",
      "Par ailleurs, la question ouvrière en Catalogne se complique de jour en jour. À Ripoll, le nombre des grévistes s'élève désormais à plus de sept cents. Le syndicat des houilleurs leur assure le ravitaillement en vivres."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Chronique scientifique",
    "title": "La durée du clignement d'œil",
    "summary": "Le professeur a déterminé que le clignement d'œil dure un centième de seconde. La paupière remonte quatre fois plus vite qu'elle ne descend, rendant le phénomène imperceptible à l'œil humain.",
    "paragraphs": [
      "Le professeur a étudié la durée moyenne d'un clin d'œil, évaluée à un centième de seconde. La paupière remonte environ quatre fois plus vite qu'elle ne descend, tandis que les yeux restent clos durant dix-sept centièmes de seconde.",
      "Aussi nous est-il impossible de nous en apercevoir."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Sciences",
    "title": "Le professeur explique le phénomène des marées",
    "summary": "Brève note explicative sur le mécanisme des marées, rappelant les principes fondamentaux qui régissent le flux et le reflux périodique de la mer.",
    "paragraphs": [
      "Avec le flux, nous dit le professeur, la mer monte ; avec le reflux, elle baisse."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits divers",
    "title": "La disparition mystérieuse de M. Louis Desmarets",
    "summary": "La Sûreté enquête sur la disparition de M. Louis Desmarets, ancien inspecteur de l'Assistance publique. Son domicile ayant été dévalisé, la police craint un crime et a saisi le juge Boucard de l'instruction.",
    "paragraphs": [
      "Le service de la Sûreté enquête actuellement sur la disparition de M. Louis Desmarets, âgé de soixante-cinq ans, ancien inspecteur de l'Assistance publique. Parti pour un voyage, il a expédié une lettre du Havre avant de ne plus donner aucune nouvelle.",
      "M. Desmarets possédait une fortune estimée à quarante mille francs. À son domicile, il manque des valeurs, de l'argent et divers objets de prix. La police redoute un assassinat ; l'affaire a été confiée au juge Boucard."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits divers",
    "title": "Arrestation d'un contumax",
    "summary": "La police a procédé hier à l'arrestation d'un ancien inspecteur de l'Assistance publique, condamné par contumace à vingt ans de travaux forcés, qui se cachait dans un hôtel de la rue de Commines.",
    "paragraphs": [
      "Le service de la Sûreté a arrêté, dans la journée d'hier, un ancien inspecteur de l'Assistance publique, condamné par contumace à vingt ans de travaux forcés, qui se dissimulait dans un hôtel de la rue de Commines."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits divers",
    "title": "Drame passionnel rue d'Eupatoria",
    "summary": "Un drame sanglant a éclaté rue d'Eupatoria : l'ouvrier mécanicien Eugène Servot a tiré sur Mlle Florentine Jeannin avant de tenter de mettre fin à ses jours. Les deux protagonistes ont été transportés à l'hôpital Tenon.",
    "paragraphs": [
      "L'ouvrier mécanicien Eugène Servot s'est rendu au domicile de Mlle Florentine Jeannin. Après une violente explication, plusieurs coups de feu ont été entendus par le voisinage.",
      "Mlle Jeannin a été retrouvée grièvement blessée d'une balle au sein gauche. Son agresseur, Servot, a tenté de se suicider en se tirant deux balles dans la tête. Tous deux ont été transportés d'urgence à l'hôpital Tenon, où leur état inspire de vives inquiétudes."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits divers",
    "title": "Suicide d'un ouvrier alcoolique",
    "summary": "Nicolas Courtot, ouvrier mouleur délaissé par son épouse et adonné à l'ivrognerie, a mis fin à ses jours. Son corps n'a été découvert que douze jours après son décès par asphyxie volontaire.",
    "paragraphs": [
      "Nicolas Courtot, un ouvrier mouleur connu pour sa violence et son penchant pour l'alcool, vivait seul depuis que son épouse l'avait quitté, il y a un mois et demi.",
      "Laissé à lui-même dans son isolement, il a été retrouvé mort, asphyxié par les émanations de deux réchauds. Selon les constatations médicales, le décès remontait à douze jours."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits divers",
    "title": "Une histoire de revenant",
    "summary": "Un escroc a soutiré 1 200 francs à un vieillard en se faisant passer pour l'esprit de son fils. La supercherie a été démasquée par le fils lui-même, revenu au pays, qui a piégé le faux spectre.",
    "paragraphs": [
      "M. Henri Cordier, un vieux rentier, était persuadé, par une étrange crédulité, que son fils, négociant au Tonkin, avait été assassiné. Un individu peu scrupuleux a exploité cette faiblesse en se faisant passer pour l'esprit du défunt et en soutirant 1 200 francs au vieillard.",
      "Le fils, revenu sain et sauf en France, a découvert la supercherie. Il a alors organisé une mise en scène avec son père pour piéger le faux spectre, qui s'est avéré être un ouvrier tonnelier. L'imposteur a été immédiatement conduit au commissariat."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits divers",
    "title": "Victimes du froid",
    "summary": "La vague de froid qui sévit sur Paris continue de faire des victimes. Plusieurs personnes ont été secourues et transportées vers les hôpitaux de la capitale après des malaises dus aux basses températures.",
    "paragraphs": [
      "Plusieurs personnes ont été victimes de la rigueur du froid à Paris ces derniers jours. Parmi les cas relevés : un homme a été trouvé en proie à une congestion cérébrale rue Poliveau, Mme Léon Bourgeois a dû être secourue rue Ordener, et le jeune Louis Multor a été découvert inanimé sur un tramway.",
      "Tous ces malheureux ont été transportés à l'hôpital pour y recevoir les soins nécessaires."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits divers",
    "title": "Autour de Paris",
    "summary": "La banlieue parisienne a été le théâtre de nombreux accidents et tragédies : suicides, chutes mortelles et agressions se sont multipliés dans les communes limitrophes au cours des dernières vingt-quatre heures.",
    "paragraphs": [
      "À Levallois-Perret, le concierge Ludovic Renard a tenté de mettre fin à ses jours. À Bezons, un ouvrier a fait une chute mortelle d'un échafaudage. À Puteaux, un accident de voiture a occasionné plusieurs blessés graves.",
      "À Courbevoie, un agresseur a préféré se constituer prisonnier. À Suresnes, un charretier a succombé à ses blessures après une chute brutale. Enfin, à Saint-Ouen, M. Protin, agressé, a fait usage de son arme pour tirer sur son assaillant, le nommé Chumard."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits divers",
    "title": "Incident canin à Saint-Denis",
    "summary": "Un chien errant, en proie à une rage manifeste, a mordu plusieurs ouvriers à l'usine Dajiré de Saint-Denis. L'animal a été abattu et les blessés conduits à l'Institut Pasteur.",
    "paragraphs": [
      "Un chien errant, manifestant des signes évidents de rage, a mordu plusieurs ouvriers à l'usine Dajiré de Saint-Denis. L'animal a été promptement abattu par les forces de l'ordre, tandis que les victimes ont été immédiatement transférées à l'Institut Pasteur pour y recevoir les soins nécessaires."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits divers",
    "title": "Incendie à La Courneuve",
    "summary": "Un violent incendie a ravagé la blanchisserie Delacour à La Courneuve. Malgré l'intervention rapide des pompiers, le montant des dégâts matériels est estimé à plus de 12 000 francs.",
    "paragraphs": [
      "Un violent incendie s'est déclaré dans la blanchisserie Delacour à La Courneuve, provoquant une vive émotion dans le voisinage. Le sinistre, bien que rapidement circonscrit par les sapeurs-pompiers, a occasionné des dégâts matériels considérables, évalués à plus de 12 000 francs."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits divers",
    "title": "Accident de travail à Versailles",
    "summary": "Près de la gare des Chantiers à Versailles, le terrassier Théophile Parnet a été grièvement blessé par un convoi ferroviaire, nécessitant une amputation urgente.",
    "paragraphs": [
      "Un grave accident de travail s'est produit aux abords de la gare des Chantiers, à Versailles. Le nommé Théophile Parnet, terrassier, a été violemment happé par un train en manœuvre. Transporté en toute urgence à l'hôpital, le malheureux a dû subir une amputation afin de sauver ses jours."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits divers",
    "title": "Cambriolage à Meaux",
    "summary": "Le château de Chaalis a été victime d'un cambriolage nocturne. Les malfaiteurs ont dérobé pour 2 000 francs d'objets précieux tout en dégradant une collection d'art.",
    "paragraphs": [
      "Le château de Chaalis, sis près de Meaux, a été la cible d'un cambriolage audacieux au cours de la nuit. Les malfaiteurs, après s'être introduits dans les lieux, ont dérobé des objets d'une valeur estimée à 2 000 francs, tout en mutilant une précieuse collection d'objets d'art."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits divers",
    "title": "Noyade à Fontainebleau",
    "summary": "Le jeune Auguste Lextrat a trouvé la mort accidentellement dans le canal du Loing à Fontainebleau. Malgré les secours, l'enfant n'a pu être ranimé.",
    "paragraphs": [
      "Un triste drame s'est produit à Fontainebleau : le jeune Auguste Lextrat est tombé accidentellement dans le canal du Loing. Malgré la rapidité des secours et les efforts déployés par les témoins présents sur les lieux, l'infortuné enfant n'a pu être ramené à la vie."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Justice",
    "title": "Condamnation pour escroquerie",
    "summary": "La onzième chambre correctionnelle a rendu son jugement dans l'affaire Leymarie, condamnant l'individu pour avoir dupé des particuliers en vendant des objets sans valeur comme des pièces de collection.",
    "paragraphs": [
      "La onzième chambre correctionnelle vient de rendre son jugement dans l'affaire Leymarie. Le prévenu a été reconnu coupable d'avoir escroqué de nombreux particuliers en leur vendant, sous de faux prétextes, des objets de médiocre valeur présentés indûment comme des pièces de collection d'une grande rareté."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Départements",
    "title": "Nouvelles des provinces",
    "summary": "Revue des faits divers en province : décès du docteur Chambard à Clermont, accidents de chantier et de la voie publique, et les perturbations ferroviaires causées par la neige à Constantine.",
    "paragraphs": [
      "À Clermont, le docteur Chambard a succombé au tétanos. À Compiègne, trois maçons ont été victimes d'une chute grave lors de travaux. Un drame familial tragique a coûté la vie à un nourrisson à Noyant-la-Gravoyère.",
      "À Reims, le général Harschmidt a été blessé à la suite d'une chute accidentelle. Le lieutenant-colonel Marchand a regagné sa famille à Thoissey. Enfin, à Constantine, les chutes de neige abondantes entravent la circulation des trains."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Social",
    "title": "Situation des tisseurs de Saint-Étienne",
    "summary": "Le climat social demeure instable à Saint-Étienne malgré les tentatives de reprise du travail, tandis que les mineurs de Carmaux formulent officiellement des revendications salariales.",
    "paragraphs": [
      "La reprise du travail dans les ateliers de Saint-Étienne demeure extrêmement laborieuse malgré les multiples sollicitations patronales. Parallèlement, le comité de défense des mineurs de Carmaux a déposé une demande officielle en vue d'obtenir une revalorisation nécessaire des salaires."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Sports",
    "title": "Résultats des courses à Nice",
    "summary": "Succès éclatant pour la journée du Grand Prix de Monaco tenue à Nice, marquée par la victoire du cheval Padlock devant une assistance nombreuse et élégante.",
    "paragraphs": [
      "La réunion hippique consacrée au Grand Prix de Monaco a connu un franc succès sur l'hippodrome de Nice. Le cheval Padlock s'est adjugé la victoire finale sous les acclamations d'une assistance particulièrement élégante et distinguée."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Le théâtre Maguera : L'Anneau de fer",
    "summary": "Compte rendu de « L'Anneau de fer », drame sanglant en cinq actes de MM. Ely Montclerc, Marcillac et Delacour, relatant une sombre vengeance coloniale aux lourdes répercussions familiales.",
    "paragraphs": [
      "Le théâtre Maguera a donné, hier soir, la première représentation de « L'Anneau de fer », drame en cinq actes et neuf tableaux, signé de MM. Ely Montclerc, Marcillac et Delacour.",
      "L'anneau de fer, qui donne son nom à ce drame, est souillé de sang, telle la clef de Barbe-Bleue. Ce sang est celui d'une jeune fille hindoue, tuée lors de troubles coloniaux. Son frère, Calouth, attribue ce meurtre à l'officier français Pélissier-Lagarde. Calouth s'établit en France pour devenir le mauvais génie de la famille Pélissier-Lagarde et assouvir sa vengeance.",
      "Pélissier-Lagarde a deux fils, Georges et Jacques, dont la ressemblance est frappante. Calouth, parvenu à se faire engager comme serviteur, manipule Georges pour qu'il assassine son frère Jacques, dont il convoite la femme et la fortune. Georges commet le forfait et, grâce à cette prodigieuse ressemblance, il lui suffit de se raser la barbe pour que l'entourage croie au suicide du frère.",
      "Après diverses péripéties sanglantes, Calouth finit par découvrir qu'il s'est mépris et que le vieux Pélissier est innocent. Cette révélation tragique entraîne un dénouement marqué par de nouvelles tueries.",
      "La pièce est divisée en neuf tableaux très brefs, dont l'exécution scénique gagnerait à être plus rigoureuse."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Actualités artistiques",
    "title": "Une innovation à l'Opéra",
    "summary": "Pour le carnaval de 1900, les élèves de l'École des Beaux-Arts investiront les bals de l'Opéra avec des groupes costumés et un concours de prix récompensant les créations les plus originales.",
    "paragraphs": [
      "Cette année, les bals du carnaval de 1900 promettent d'être particulièrement joyeux et d'arborer une note artistique de haut vol, grâce au concours des jeunes gens des ateliers de peinture, sculpture, architecture et gravure de l'École des Beaux-Arts.",
      "Ce sont, en effet, les élèves des Beaux-Arts qui, désireux de s'amuser, organisent des groupes costumés fantaisistes et se rendront en grand nombre au bal de samedi prochain, dès minuit.",
      "Le jury, composé des massiers de chaque atelier de l'École des Beaux-Arts, décernera des prix aux costumes les plus réussis et les plus originaux."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Chroniques théâtrales",
    "title": "Nouvelles des théâtres",
    "summary": "Le Gymnase affiche complet avec « La Layette » d'André Sylvane. Le théâtre prépare une matinée artistique sous la direction de Jules Danbé et la première de « La Grenouille et le Capucin ».",
    "paragraphs": [
      "Au Gymnase, « La Layette », l'amusante pièce de M. André Sylvane, qui poursuit son grand succès après plus de trente représentations, sera bientôt jouée à Bruxelles, au théâtre du Vaudeville.",
      "Le prochain samedi des « Auteurs gais », au théâtre du Gymnase, comprendra une causerie de M. Franc-Nohain et la première représentation de « La Grenouille et le Capucin », du même auteur.",
      "Au théâtre lyrique de la Renaissance, mercredi prochain, à quatre heures et quart, aura lieu la deuxième matinée artistique, sous la direction de M. Jules Danbé. Au programme, une conférence de M. George Vanor et des œuvres de Beethoven, Grétry, Gluck, Mozart, Bizet et Mendelssohn, interprétées par MM. Soulacroix, Cosaira, et Mmes Passama, Noelly, Mitliaud, etc."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Concerts",
    "title": "Programme du concert Colonne",
    "summary": "Le prochain concert Colonne au Nouveau-Théâtre mettra à l'honneur J. Haydn, J.S. Bach et César Franck, avec la participation de Mlle Jane Bathori et de M. Louis Diémer.",
    "paragraphs": [
      "Voici le programme du concert Colonne qui aura lieu jeudi prochain, à trois heures et demie, au Nouveau-Théâtre : Symphonie en si bémol, n° 56 (J. Haydn). Aria pour chant avec accompagnement de clavecin et viole d'amour (Ariosti), par Mlle Jane Bathori, M. Louis Diémer et M. Van Vaefelghem. Trois pièces pour clavecin (« Le Carillon de Cythère », F. Couperin ; « Le Ramage des Oiseaux », Dandrieu ; « Gavotte en ré mineur », J.-S. Bach), par M. Louis Diémer. Feuillets d'Album (A. Chauvet), orchestrés par M. H. Maréchal. Enfin, des mélodies de César Franck (I. Le Soir, II. Romance, III. Lied, a. Lied, b. Roses et Papillons, c. Le Sylphe), par Mlle Jane Bathori et M. Charles Baretti. Quatuor en sol mineur (J. Brahms), par Mlle Cécile Boutet de Monvel et MM. Armand Parent, Denayer et Charles Baretti."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Brèves administratives",
    "title": "Élections théâtrales à Bruxelles",
    "summary": "Le conseil communal de Bruxelles a officiellement fixé au 15 janvier l'élection des nouveaux directeurs du théâtre de la Monnaie. Les candidatures sont ouvertes jusqu'au 10 janvier.",
    "paragraphs": [
      "Le conseil communal de Bruxelles a fixé au 15 janvier l'élection, en séance plénière, du ou des nouveaux directeurs du théâtre de la Monnaie. Les déclarations de candidature seront reçues jusqu'au 10 janvier."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Faits divers province",
    "title": "Fermeture à Cherbourg",
    "summary": "Suite au refus de la municipalité d'autoriser le lancement immédiat de la saison d'opéra, M. Faure, directeur du théâtre de Cherbourg, ferme les portes et sacrifie son cautionnement pour payer ses artistes.",
    "paragraphs": [
      "Le conseil municipal de Cherbourg ayant refusé à M. Faure, directeur du théâtre, l'autorisation de commencer immédiatement la saison d'opéra, celui-ci vient de faire annoncer qu'il ferme le théâtre pour cause d'insuffisance de recettes. Il abandonne son cautionnement de 5 000 francs afin de régler les cachets des artistes engagés pour la saison."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Actualités de Monte Carlo",
    "title": "Concert classique à Monte Carlo",
    "summary": "Le neuvième concert classique de Monte-Carlo, dirigé par M. Léon Jehin, a rencontré un vif succès. Au programme : la symphonie en ut de Beethoven et des œuvres magistrales de Wagner, dont un extrait de Parsifal.",
    "paragraphs": [
      "La grande attraction du 9e concert classique était la première audition de la grande scène religieuse du premier acte (deuxième tableau) de Parsifal, accompagnée par les chœurs. L'exécution, sous la baguette de M. Léon Jehin, devant un nombreux auditoire, a produit une grande impression.",
      "De Wagner, le programme comportait encore Siegfried-Idylle et l'ouverture des Maîtres Chanteurs. La première partie du concert était consacrée à la symphonie en ut de Beethoven."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Feuilleton du Petit Parisien",
    "title": "Les tragédies de l'amour",
    "summary": "En proie à une haine fraternelle irréconciliable, deux hommes décident de sceller leur destin par le jeu du hasard. Un coup de dés désigne le perdant, acceptant avec un calme glacial son funeste sort.",
    "paragraphs": [
      "Lequel de nous deux mourra ? Ils se regardèrent longtemps, la haine dans les yeux. À cette terrible question, il n'y eut pas, ce jour-là, de réponse.",
      "Ils se séparèrent lentement, absorbés, sans plus se regarder. Mourir ! Lorsqu'ils eurent accepté cette idée, ils s'interrogèrent sur la manière : un duel au sabre, au pistolet ou à l'épée, jusqu'à ce que la mort s'ensuivît ? Ils redoutaient que les blessures ne guérissent. Ils avaient lu, dans quelques romans, que des hommes qui se vouaient une haine mortelle avaient recours au sort, utilisant un unique pistolet chargé.",
      "Le lendemain du jour où le gagnant épousera Colette, ils s'installèrent dans le cabinet de travail du père Girodias. Pierre agita les dés dans le cornet : il tenait entre ses mains la vie de son frère ou la sienne. Six et quatre. Gaston avait gagné. C'était Pierre qui allait mourir. « Voilà une affaire entendue », dit-il, très calme."
    ]
  }
];
