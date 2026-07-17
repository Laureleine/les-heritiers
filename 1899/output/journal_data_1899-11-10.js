// Date: 1899-11-10
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-11-10 (Version Restaurée, 50 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La Catastrophe Finale",
    "summary": "Face aux prédictions récurrentes de la fin du monde par des comètes, M. Flammarion invite à la sérénité. La science rassure sur l'improbabilité d'une collision et prône une vie paisible plutôt qu'une crainte vaine.",
    "paragraphs": [
      "De temps en temps, la fin du monde est annoncée. Comme si nous n'avions pas suffisamment de sujets de préoccupation, on essaie de nous en créer d'autres : la dévastation de notre planète, sa destruction, son éparpillement dans l'infini, une catastrophe prodigieuse. Heureusement, la date fixée pour ce cataclysme final a passé chaque fois sans qu'il y ait eu le moindre bouleversement. Voilà de quoi rassurer les plus craintifs.",
      "La légende tient bon, néanmoins. Et voici que, de nouveau, on prédit à notre vieille humanité qu'elle a fait son temps et qu'elle va disparaître. Ce serait le 13 novembre — dans trois jours — que ce drame à grand spectacle aurait lieu. C'est un savant autrichien dont il a souvent été question, M. Falb, qui l'assure. Une comète découverte en 1827 par l'astronome Biela se rapprocherait tellement cette fois de la Terre qu'il y aurait collision.",
      "Beaucoup de savants ne s'effraient pas le moins du monde à l'idée de voir la Terre cognée au passage par une comète. À leur avis, notre planète n'en subirait aucun dommage. Nous assisterions tout simplement à un magnifique feu d'artifice sidéral.",
      "Comment finira notre monde ? Depuis si longtemps que la catastrophe est prédite, on aurait pu, semble-t-il, se mettre d'accord sur les causes du désastre. Il n'en est rien. D'après M. Flammarion, la vie d'une planète peut être évaluée à plusieurs millions d'années. Respirons donc à notre aise, occupons-nous moins des causes qui y amèneront notre fin que des moyens d'y vivre le mieux possible."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Une haine vieille d'un siècle",
    "summary": "À Villefort, le climat est lourd. Roland cherche à obtenir des aveux sur le meurtre de Girodias, confrontant sa mère aux secrets familiaux et à une lettre compromettante qui menace leur nom.",
    "paragraphs": [
      "À Villefort, Roland attendit, après le dîner, que sa mère remontât chez elle. Le danger planant sans cesse sur la tête du duc avait assombri tous les caractères. Chacun restait silencieux, la pensée fixée sur ce seul objet : par quel moyen connaître enfin toute la vérité sur le meurtre de Girodias et convaincre les coupables.",
      "Le jeune homme cherchait à confronter sa mère sur les événements de ce soir-là, évoquant une lettre compromettante de Soubise adressée au procureur. La duchesse, tremblante, écoutait son fils lui révéler que le secret de la forêt, lié à ce meurtre, risquait d'être dévoilé."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Actualités Internationales",
    "title": "Guerre au Transvaal : Nouvelles du front",
    "summary": "Le silence officiel pèse sur le Transvaal, contredisant l'optimisme anglais. En mer, la flotte du général Buller subit une série de sinistres et d'avaries qui retardent l'acheminement des renforts.",
    "paragraphs": [
      "Les nouvelles officielles du théâtre de la guerre ont fait hier à peu près défaut. Les seuls avis concernent des faits remontant à plusieurs jours et contredisent les bruits de victoire répandus par les correspondants de journaux anglais.",
      "Une chose digne d'attention, c'est la malchance qui semble poursuivre les navires chargés de transporter au Cap les troupes du général Buller. Aucun d'eux n'est encore arrivé à destination, et les sinistres de tout genre se multiplient dans la malheureuse flotte."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Dépêches",
    "title": "Au War Office",
    "summary": "Le War Office rapporte une situation calme à Kimberley sous le colonel Kekevitch. À Ladysmith, le général White organise le transfert des populations civiles et des blessés à l'abri des tirs.",
    "paragraphs": [
      "La dépêche suivante du général Buller a été reçue ce matin au War Office. Le colonel Kekevitch télégraphie de Kimberley le 7 novembre que tout va bien ; aucune attaque sérieuse jusqu'à présent ; léger bombardement sans effet.",
      "Le général White annonce, par pigeons voyageurs, que les blessés et quelques habitants de Ladysmith ont été conduits à quatre milles de là dans un endroit où ils seront à l'abri du bombardement."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Explosion à bord d'un transport",
    "summary": "Une déflagration a frappé le navire Canning dans les docks de Londres. Ce transport militaire, destiné à l'Afrique du Sud, pourrait voir son départ reporté alors qu'il devait embarquer troupes et matériel.",
    "paragraphs": [
      "Une explosion a eu lieu hier soir à bord du transport Canning, mouillé dans les docks de Londres. Le Canning devait partir aujourd'hui pour l'Afrique du Sud avec une batterie d'artillerie et un escadron de cavalerie. Par suite de l'explosion, on ne sait pas si le Canning pourra partir dimanche."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Solidarité",
    "title": "L'Union des Femmes de France",
    "summary": "La société nationale d'assistance militaire, l'Union des Femmes de France, ouvre une souscription en faveur des blessés du Transvaal. Les dons seront centralisés à Paris avant d'être envoyés au consul à Prétoria.",
    "paragraphs": [
      "L'Union des Femmes de France, société nationale d'assistance militaire, se fait un devoir d'ouvrir une souscription pour les blessés du Transvaal. En conséquence, les dons, tant en argent qu'en nature, destinés à cette œuvre seront reçus à Paris et adressés par les soins du secrétariat au consul de France à Prétoria."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Cinq jeunes gens noyés",
    "summary": "Un terrible accident s'est produit à l'embouchure de l'Adour, à Boucau. Cinq jeunes ouvriers, qui se baignaient les pieds, ont été emportés par une vague subite et ont péri noyés.",
    "paragraphs": [
      "Ce matin, à dix heures, sept jeunes gens, âgés de seize à dix-huit ans, employés aux travaux des ponts et chaussées, se promenaient sur l'estacade de la rive droite de l'embouchure de l'Adour, au Boucau. Six d'entre eux étaient descendus pour se baigner les pieds lorsque survint une lame énorme qui entraîna cinq de ces malheureux. Les cinq jeunes gens ont été noyés."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Accident de Chemin de Fer",
    "summary": "Un train de voyageurs a heurté une machine de marchandises à Beaumont-le-Roger. Grâce à la promptitude du mécanicien, l'accident n'a causé que des dégâts matériels, malgré l'interruption du trafic.",
    "paragraphs": [
      "Le train de voyageurs allant sur Paris a rencontré, à cinq heures cinquante du matin, la machine d'un train de marchandises à moitié engagée sur une voie de garage, à Beaumont-le-Roger. Grâce au sang-froid et à la vigilance du mécanicien, il n'y a eu que des dégâts matériels à déplorer. Les communications ont été interrompues pendant la majeure partie de la matinée."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Un traité anglo-allemand",
    "summary": "La convention anglo-allemande concernant les Samoa et le Togoland a été publiée. Cet accord, qui résout les différends entre les puissances, semble offrir des avantages considérables à l'Allemagne.",
    "paragraphs": [
      "Le traité anglo-allemand relatif aux îles Samoa et au Togoland a été rendu public. On sait que la question des Samoa a failli peser lourdement sur les rapports des trois puissances intéressées : le Royaume-Uni, les États-Unis et l'Empire germanique. Les avantages de cette convention semblent être tout entiers en faveur de l'Allemagne."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un drame à la gare des Sables-d'Olonne",
    "summary": "Un drame passionnel s'est déroulé aux Sables-d'Olonne. M. Charret, retraité, a fait feu à six reprises sur son épouse, dont il était séparé, en pleine gare. Son état est jugé grave.",
    "paragraphs": [
      "Un drame a mis hier soir en émoi la population des Sables. Un honorable habitant de notre ville, M. Charret, chef de génie en retraite, a tiré six coups de revolver sur sa femme, dont il vivait séparé, dans l'enceinte de la gare. Madame Charret a été atteinte de plusieurs balles et son état est jugé très grave."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Justice",
    "title": "Haute Cour : La matinée",
    "summary": "Le palais du Sénat est en effervescence lors de l'arrivée des accusés. Sous escorte policière, ils sont conduits de la prison de la Santé au Luxembourg, au milieu d'une foule dense de témoins et journalistes.",
    "paragraphs": [
      "Le palais du Sénat a été envahi hier par une foule compacte : témoins, parents des inculpés, avocats et journalistes. Dans la matinée, les accusés, détenus à la prison de la Santé, ont été amenés au palais. L'ambiance était très pittoresque, avec un déploiement important des forces de police aux abords du Luxembourg."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "L'ouverture du procès devant la Haute-Cour",
    "summary": "Le procès de la Haute-Cour débute dans le silence. Parmi les témoins figure M. de Christiani, transféré de la prison de Fresnes, condamné pour son agression contre le chef de l'État à Auteuil.",
    "paragraphs": [
      "Les témoins cherchaient les salles qui leur sont réservées à l'extrémité du quartier cellulaire. Nous remarquons notamment MM. Henri Hérisson, Lebret, Henry Maret, d'Haussonville, Lambelin, André Lebon, Barrès, Quesnay de Beaurepaire, François Coppée, Rochefort, Georges Thiébaud, Syveton, le commandant Bazerie, qui a découvert le chiffre de la correspondance du duc d'Orléans, Mme Gyp, etc.",
      "Mais peu à peu, les sénateurs gagnent la salle d'audience, les témoins sont amenés aux places qui leur sont réservées, et c'est dans le silence le plus absolu que les accusés sont conduits de leurs cellules devant la Haute-Cour.",
      "Un peu avant l'ouverture de l'audience, un fiacre a pénétré dans le palais. De cette voiture est descendu M. de Christiani, détenu à la prison de Fresnes.",
      "M. Christiani, cité comme témoin, a été condamné, on se le rappelle, il y a plusieurs mois, à quatre ans de prison pour avoir, au moment du grand steeple-chase d'Auteuil, pénétré dans la tribune présidentielle et levé sa canne sur le chef de l'État."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "Dispositions et ambiance dans la salle d'audience",
    "summary": "Le Sénat s'est transformé pour accueillir le procès. Sous la présidence de M. Mazeau, la salle est strictement compartimentée par des gardes municipaux pour séparer les détenus des témoins.",
    "paragraphs": [
      "Dès midi, les personnes munies de cartes ont pu avoir accès aux tribunes. Les dames y sont en grande majorité. La dame blanche qui a assisté à tous les procès auxquels a donné lieu l'affaire est une des premières que nous apercevons.",
      "Cette fois, elle est vêtue discrètement de noir. Déjà, la salle est occupée militairement. Dans la partie gauche de l'hémicycle, réservée aux prisonniers et aux témoins, des gardes municipaux en petite tenue, le manteau roulé en bandoulière, sont en faction. Ils occupent tout un banc et doivent servir de séparation entre les détenus et les témoins.",
      "Le premier sénateur que nous voyons prendre place à son fauteuil est M. Mazeau, le premier président de la Cour de cassation.",
      "Nous avons donné à plusieurs reprises une description complète des travaux qui ont été exécutés au Sénat en vue de ce procès qui, si nous devons nous en rapporter aux on-dit, doit se prolonger jusqu'en janvier. Rappelons seulement les dispositions générales : les avocats se tiennent en bas de la petite tribune et occupent également le banc des ministres. À droite de la Cour a été dressée hier la barre des témoins. En face, on a également aménagé une petite tribune : c'est là que les avocats viendront successivement présenter la défense de leurs clients.",
      "Chaque sénateur a devant lui tous les documents concernant ce procès, c'est-à-dire plusieurs épais volumes."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Politique",
    "title": "Incident à l'entrée de Rochefort",
    "summary": "L'arrivée de M. Henri Rochefort au palais a provoqué une vive agitation parmi les témoins. Les cris hostiles au Sénat ont nécessité l'intervention immédiate de M. Lépine et de la garde républicaine.",
    "paragraphs": [
      "Un incident s'est produit dans la salle réservée aux témoins de la défense, au nombre de quatre cents environ.",
      "Au moment où M. Henri Rochefort pénétrait dans la salle, des cris de « Vive Rochefort ! Vive Déroulède ! À bas le Sénat ! » ont été poussés par divers témoins.",
      "M. Lépine a fait alors venir une compagnie de gardes républicains. Après une sommation faite par le commandant militaire du palais, les cris ont cessé et l'incident a pris fin."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "Début de l'audience et appel des accusés",
    "summary": "Sous la présidence de M. Fallières, la Haute-Cour a entamé sa séance. Après l'introduction des accusés et l'appel des sénateurs, le débat s'ouvre sur la légitimité des absents à siéger.",
    "paragraphs": [
      "À une heure précise, la Haute-Cour fait son entrée. M. Fallières, président, est suivi de M. le procureur général Bernard, qu'escortent deux avocats généraux, MM. Herbeault et Fournier. M. Sorel, de l'Académie, qui exerce les fonctions de greffier, prend place à gauche du président.",
      "M. Fallières, s'adressant à un huissier : « Introduisez les accusés. » Quand M. Buffet, le premier des inculpés, pénètre dans la salle, le Sénat se trouve à peu près au complet. M. Buffet porte un volumineux dossier sous le bras. Puis viennent MM. de Fréchencourt, de Pontevès de Sabran. Au second banc s'asseyent MM. Godefroy, de Hamel, de Chevilly, de Bourmont. M. Déroulède est le premier du troisième banc.",
      "On fait l'appel nominal des sénateurs. Sont absents pour causes diverses : MM. Bernard Lavergne, Levrey, Mercier, Pénicaud, Théophile Roussel, de Verninac, Allemand (Haute-Loire), Marcel Barthe, Bayol, Berthier, colonel de Chadois, Constans, Danelle-Bernardin, Deschanel, Dulac, Jolliet, Hérisson, Huon de Penanster, Jacques Hébrard, Roger, Cornil.",
      "M. le sénateur Fabre était un des premiers présents à l'audience. On sait que c'est lui qui doit soulever le premier incident de procédure sur la question de savoir si les sénateurs absents lors de la première audience peuvent siéger."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique",
    "title": "Interrogatoire des accusés et lecture de l'acte d'accusation",
    "summary": "Au Sénat, le président Fallières entame l'interrogatoire des accusés du complot anti-républicain, suivi de la lecture de l'acte d'accusation détaillant les préparatifs matériels des conjurés.",
    "paragraphs": [
      "M. le président Fallières procède à l'interrogatoire sommaire des accusés. Chacun d'eux est invité à décliner ses noms, qualités et domicile. MM. Buffet, de Chevilly, de Fréchencourt, Godefroy, comte de Pontevès de Sabran, de Bourmont, de Ramel, Déroulède, Baillière, Barillier, Jules Guérin, Brunet, Dubuc, Cailly, et enfin M. le baron de Vaux, sont appelés. M. Déroulède, désignant son domicile, dit habiter : prison.",
      "Le président invite M. le greffier Sorel à lire l'acte d'accusation. Pendant cette lecture, nous pouvons jeter un coup d'œil dans la salle. Nous distinguons Mlle Déroulède, Mme de Fréchencourt, Mme Barillier, Mme Buffet, Mme de Lur-Saluces et quelques femmes de sénateurs.",
      "Le Petit Parisien a déjà analysé le rapport de M. Bérenger. Le procureur général constate dans son acte d'accusation que, depuis longtemps, les partis hostiles à la République se seraient organisés pour la combattre. Il définit le complot : lorsqu'il est suivi d'actes matériels, il faut distinguer entre les actes préparatoires et les actes d'exécution. Il cite comme actes préparatoires l'achat de munitions, la préparation des armes, etc.",
      "La lecture de l'acte d'accusation a duré de une heure quarante jusqu'à trois heures trente-cinq."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Politique",
    "title": "Suspension de séance et incidents",
    "summary": "La séance est suspendue après l'annonce du deuil frappant M. de Verninac. À l'extérieur, des manifestations pro-Rochefort et anti-juives éclatent, nécessitant l'intervention de la garde républicaine.",
    "paragraphs": [
      "M. le président Fallières a donné lecture d'une lettre de M. de Verninac, sénateur du Lot, s'excusant de ne pouvoir assister aux débats, ayant reçu une dépêche lui annonçant la mort de sa mère. La Cour lui adresse ses condoléances.",
      "L'audience est suspendue pour vingt-cinq minutes. Pendant cette suspension, une nouvelle manifestation a eu lieu dans la salle des témoins : « Vive Rochefort ! Vive Déroulède ! À bas les juifs ! » ont été proférés.",
      "MM. Fallières, Lépine et le colonel Dubois sont intervenus. À la sortie, des rixes ont eu lieu entre plusieurs témoins, et les gardes républicains ont expulsé du Palais tous les manifestants."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique",
    "title": "Reprise et débats sur la procédure",
    "summary": "Le Sénat délibère sur la validité des juges absents aux séances précédentes. Une motion excluant les magistrats n'ayant pas assisté à l'audience du 18 septembre est finalement adoptée.",
    "paragraphs": [
      "L'audience est reprise à quatre heures vingt. M. Choppin d'Arnouville dépose des conclusions sur la composition de la Cour, estimant que les membres ne peuvent participer aux délibérations que s'ils ont assisté à toutes les séances. M. Fallières lit d'autres conclusions identiques déposées au nom de MM. Guérin, Dubuc et plusieurs autres inculpés.",
      "La discussion est très confuse. M. Milliès-Lacroix demande que chaque membre n'ayant pas exprimé son opinion ne puisse reprendre la parole. M. le Président rappelle que chaque juge a le droit de motiver son vote. M. Joseph Fabre veut prendre la parole, mais les cris de clôture étouffent sa voix.",
      "La clôture est mise aux voix et votée à la presque unanimité.",
      "On procède à l'appel nominal. Les conclusions de la défense tendant à l'exclusion de M. Joseph Fabre et des autres juges qui n'ont pas assisté à la séance du 18 septembre sont adoptées par 180 voix.",
      "M. Fallières se retire pour rédiger l'arrêt, qui est adopté à mains levées. L'audience est levée à six heures trente-cinq."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Militaire",
    "title": "Cuirassement à flot du Henri-IV",
    "summary": "Une prouesse technique à Cherbourg : le cuirassé Henri-IV a été blindé à flot. Ce procédé innovant réduit les effectifs nécessaires de 300 à 25 hommes, tout en économisant 600 000 francs et cinq mois de travail.",
    "paragraphs": [
      "Le cuirassé Henri-IV, lancé dernièrement à Cherbourg, est le premier navire qui ait été cuirassé à flot dans ce port.",
      "L'idée du blindage à flot fut conçue par l'ingénieur du génie maritime Moisgenet après s'être concerté avec les maîtres entretenus Moitié et Lelong. Vingt-cinq hommes ont suffi pour blinder le Henri-IV, travail pour lequel il fallait autrefois trois cents hommes.",
      "En résumé, le cuirassement à flot du Henri-IV a été exécuté en un mois ; c'est une avance de cinq mois pour l'achèvement du navire et une économie pour l'État d'environ 600 000 francs."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Social",
    "title": "Menace de grève des mineurs belges",
    "summary": "La tension monte dans les bassins houillers belges. Le prochain Congrès national des mineurs, prévu le 17 novembre, devrait officialiser le lancement d'une grève générale dans tout le pays.",
    "paragraphs": [
      "Les journaux socialistes annoncent qu'il se prépare dans les diverses régions houillères une importante grève générale des mineurs. Il paraît presque certain que le prochain Congrès national des mineurs du 17 novembre décidera la grève générale de tous les mineurs belges."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Trois hommes ensevelis près de Bruxelles",
    "summary": "Un éboulement survenu sur un chantier à Saint-Job, près de Bruxelles, a coûté la vie à l'entrepreneur M. Closset. Deux de ses ouvriers ont été retirés des décombres dans un état jugé grave.",
    "paragraphs": [
      "Un affreux malheur s'est produit à Saint-Job, près de Bruxelles. L'entrepreneur, M. Closset, travaillait avec trois ouvriers dans une tranchée qui n'avait pas été étayée, lorsqu'un éboulement soudain s'est produit. Après deux heures d'efforts acharnés des secours, on n'a pu retirer des décombres que le cadavre de M. Closset. Les deux autres ouvriers ont été extraits dans un état grave."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident à Charleroi",
    "summary": "L'effondrement du réservoir de la nouvelle malterie de Belleil, à Charleroi, a provoqué un grave accident industriel faisant sept blessés, dont cinq sont dans un état désespéré.",
    "paragraphs": [
      "Le réservoir de la nouvelle malterie de Belleil, à Charleroi, s'est effondré aujourd'hui, causant un terrible accident. Sept ouvriers ont été grièvement blessés lors de la catastrophe ; parmi eux, cinq se trouvent actuellement dans un état désespéré."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits Divers",
    "title": "Terrible drame à Liège",
    "summary": "Jacques Ortman, un forçat évadé, a tiré sur un passant et sur sa propre femme à Liège. Les deux victimes, grièvement blessées, ont été hospitalisées dans un état critique.",
    "paragraphs": [
      "Jacques Ortman, âgé de trente-trois ans, s'était récemment évadé de prison. Revenu clandestinement à Liège à la recherche de son épouse, il aperçut un individu en conversation avec une femme qu'il crut être la sienne. Dans un accès de rage, il tira trois balles sur l'homme, nommé Wagematis, âgé de vingt-deux ans.",
      "En tentant désespérément de s'enfuir, la femme d'Ortman fut également atteinte d'une balle dans la nuque. Les deux victimes ont été transportées à l'hôpital où elles demeurent dans un état désespéré."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Étranger",
    "title": "Le Tsar et l'empereur d'Allemagne",
    "summary": "Le Tsar et l'empereur d'Allemagne ont effectué une promenade cordiale dans le parc de Sans-Souci. Le souverain russe a rendu hommage à l'empereur Frédéric en déposant une couronne sur son sarcophage.",
    "paragraphs": [
      "Leurs Majestés russes et allemandes ont effectué, dans l'après-midi, une promenade commune dans le parc de Sans-Souci. À cette occasion, le Tsar a déposé une couronne de fleurs sur le sarcophage de l'empereur Frédéric. Les souverains sont repartis après un congé très cordial."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Étranger",
    "title": "Guillaume II à Londres",
    "summary": "Le voyage officiel de l'empereur Guillaume II en Angleterre a été fixé. Le souverain allemand est attendu à Londres pour le 20 novembre prochain.",
    "paragraphs": [
      "La date du 20 novembre prochain a été officiellement arrêtée pour l'arrivée de l'empereur Guillaume II en Angleterre."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Faits Divers",
    "title": "Brûlée vive à Monte-Carlo",
    "summary": "À la villa Mer et Mont, une dame âgée de soixante ans, impotente, a tragiquement péri brûlée vive suite à l'embrasement accidentel de sa moustiquaire causé par une lampe à pétrole.",
    "paragraphs": [
      "Vers onze heures du matin, à la villa Mer et Mont, Mme Bénard, âgée de soixante ans, souffrante et impotente, a accidentellement mis le feu à la moustiquaire de son lit au moyen d'une lampe à pétrole. La malheureuse a succombé, brûlée vive."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Étranger",
    "title": "L'élection présidentielle d'Amérique",
    "summary": "Les dépouillements aux États-Unis confirment une avance marquée des républicains dans l'Ohio et le Kansas, tandis que le Kentucky demeure, à cette heure, le théâtre d'une lutte électorale indécise.",
    "paragraphs": [
      "Les résultats du scrutin en Amérique indiquent que le candidat républicain a obtenu une majorité considérable dans l'Ohio et le Kansas. Dans le Kentucky, les deux partis en présence revendiquent chacun la victoire."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Étranger",
    "title": "Le mariage de l'amiral Dewey",
    "summary": "L'union matrimoniale entre l'illustre amiral Dewey et Mme veuve Auzau a été officiellement célébrée ce matin à dix heures.",
    "paragraphs": [
      "Le mariage de l'amiral Dewey avec Mme veuve Auzau a été célébré, ce matin, à dix heures."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Tribunaux",
    "title": "Le testament du peintre Goubot",
    "summary": "La justice a tranché en faveur de la validité du testament du peintre Goubot, confirmant les legs destinés à des œuvres de bienfaisance pour secourir les nécessiteux.",
    "paragraphs": [
      "Le tribunal vient de rendre son jugement dans le procès en nullité du testament de l'artiste peintre Goubot. Les magistrats ont déclaré les legs valables, ces derniers ayant été effectués dans un but de bienfaisance afin de préserver six personnes de la misère."
    ]
  },
  {
    "id": 30,
    "page": 2,
    "category": "Tribunaux",
    "title": "Le meurtre d'une mendiante",
    "summary": "La Cour d'assises de l'Aisne a condamné Diancourt à quinze ans de travaux forcés et dix ans d'interdiction de séjour pour le meurtre d'une mendiante sexagénaire.",
    "paragraphs": [
      "L'affaire Diancourt a été plaidée devant la Cour d'assises de l'Aisne. L'accusé était poursuivi pour le meurtre d'une mendiante de soixante-trois ans. Le jury ayant retenu des circonstances atténuantes, Diancourt a été condamné à quinze ans de travaux forcés assortis de dix ans d'interdiction de séjour."
    ]
  },
  {
    "id": 31,
    "page": 2,
    "category": "Économie",
    "title": "L'emprunt du Métropolitain",
    "summary": "L'emprunt pour les travaux du Métropolitain est ouvert. Les obligations offrent un rendement attractif, renforcé par une marge de 90 francs entre le prix d'émission et le pair, attirant ainsi les capitaux parisiens.",
    "paragraphs": [
      "L'emprunt de la Ville de Paris, destiné aux travaux du chemin de fer Métropolitain, est désormais lancé. Le revenu de ces obligations apparaît fort attractif pour les capitaux parisiens : outre les coupons, une marge de 90 francs entre le prix d'achat et le pair assure un rendement fort intéressant aux investisseurs."
    ]
  },
  {
    "id": 32,
    "page": 2,
    "category": "Société",
    "title": "Les exécutions capitales",
    "summary": "La prison de la Santé devient le dépôt unique des condamnés à mort. Une réforme législative vise à y transférer les exécutions pour supprimer la publicité de la peine capitale, suivant l'exemple étranger.",
    "paragraphs": [
      "La prison de la Santé est désormais devenue le dépôt unique des condamnés à mort. Une proposition de loi est actuellement soumise au Parlement afin de transférer les exécutions capitales à l'intérieur même des enceintes carcérales, ce qui marquerait enfin la suppression de leur caractère public.",
      "Cette mesure, maintes fois réclamée, rapprocherait les pratiques judiciaires françaises de celles en vigueur en Angleterre ou aux États-Unis, évitant ainsi les attroupements habituels lors de ces sinistres événements."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Éditorial",
    "title": "La suppression de la publicité des exécutions capitales",
    "summary": "Face au caractère devenu immoral et peu dissuasif des exécutions publiques, les autorités judiciaires se prononcent massivement pour leur transfert à l'intérieur des prisons, marquant une évolution historique.",
    "paragraphs": [
      "La question de la publicité des exécutions capitales fait l'objet de vifs débats. Beaucoup soutiennent aujourd'hui que la guillotine, telle qu'elle est exposée aux yeux de la foule, ne remplit plus son rôle dissuasif initial et devient, au contraire, un spectacle écœurant et immoral.",
      "L'histoire de l'emplacement de la guillotine à Paris montre une évolution constante, depuis la place de Grève jusqu'à la place de la Révolution, puis devant la prison de la Grande-Roquette.",
      "La Cour de cassation, la majorité des Cours d'appel ainsi que le Conseil général de la Seine se sont désormais prononcés en faveur des exécutions à l'intérieur des prisons, afin de mettre un terme définitif à ces scandales publics."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Nouvelles Militaires",
    "title": "Réformes pour les ouvriers du campement militaire",
    "summary": "Le ministre de la Guerre, M. le général de Galliffet, a reçu une délégation d'ouvriers civils et des députés pour examiner des réformes du campement militaire, promises pour la prochaine discussion budgétaire.",
    "paragraphs": [
      "M. le général de Galliffet, ministre de la Guerre, a reçu MM. les députés Lerolle et Philippe Laloge, venus accompagnés d'une délégation représentant les ouvriers civils du campement militaire.",
      "Ces derniers ont soumis au ministre un ensemble de réformes essentielles. M. de Galliffet a promis d'en réaliser une partie notable lors de la prochaine discussion du budget de la Guerre."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Nouvelles Militaires",
    "title": "Ordre du jour du général Langlois",
    "summary": "Le général Langlois fait ses adieux au 3e corps d'armée, soulignant l'importance de la discipline, tandis que le général Galimard en prend officiellement le commandement.",
    "paragraphs": [
      "M. le général Langlois, quittant le commandement du 3e corps d'armée, a adressé ses remerciements chaleureux aux troupes. Il a rappelé avec insistance les qualités de discipline et de dévouement nécessaires pour mener à bien les missions à venir.",
      "M. le général Galimard prend officiellement et immédiatement le commandement du 3e corps d'armée."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un accident au cirque Medrano",
    "summary": "Spectaculaire accident au cirque Medrano : l'acrobate Dumitrescu a fait une chute grave après avoir manqué son trapèze. Souffrant de douleurs internes, il a été transporté d'urgence à son domicile.",
    "paragraphs": [
      "Un acrobate nommé Dumitrescu a fait une chute spectaculaire lors d'une séance au cirque Medrano, après avoir manqué son trapèze.",
      "Transporté à son domicile, l'acrobate souffre de douleurs internes violentes, bien qu'aucune lésion apparente ne soit décelable pour l'instant."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame de l'adultère à Arcueil",
    "summary": "Drame passionnel à Arcueil : le marchand de vins François Lallemand a tiré trois coups de revolver sur Guillaume Latranche, l'ouvrier avec lequel son épouse vivait. Le blessé a été admis à l'hôpital de la Pitié.",
    "paragraphs": [
      "M. François Lallemand, marchand de vins, a tiré trois coups de revolver sur un ouvrier, Guillaume Latranche, qui vivait avec sa femme depuis qu'elle avait quitté le domicile conjugal.",
      "Le blessé, dont l'état est jugé grave, a été transporté d'urgence à l'hôpital de la Pitié."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le méfait du 'Bosco' de la Bastille",
    "summary": "Tentative de vol de bicyclette avortée avenue Ledru-Rollin : Constant Tassin, dit 'le Bosco', a été appréhendé par sa victime après une vaine résistance armée d'un couteau.",
    "paragraphs": [
      "Un dénommé Constant Tassin, dit 'le Bosco', a tenté de dérober une bicyclette avenue Ledru-Rollin mais, incapable de prendre la fuite, il a été rattrapé par le propriétaire, M. Henri S.",
      "Malgré une tentative de résistance armée d'un couteau, l'individu a été arrêté par les agents de la force publique."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Social",
    "title": "Détresse d'une famille à Paris",
    "summary": "Scène de misère extrême rue de Flandre : une famille, épuisée par la maladie et la privation, a été secourue. La mère a été conduite à l'hôpital Lariboisière.",
    "paragraphs": [
      "Une famille composée d'un homme, d'une femme et d'un enfant a été trouvée dans un état d'extrême dénuement rue de Flandre, souffrant de la faim après une longue période de maladie.",
      "La mère a été dirigée vers l'hôpital Lariboisière, et les mesures nécessaires sont en cours pour apporter assistance au père et à l'enfant."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Actualités",
    "title": "Le Président de la République et les Prix de Rome",
    "summary": "Le Président Émile Loubet et Mme Loubet ont offert un déjeuner aux six lauréats des grands prix de Rome, parmi lesquels MM. Levadé, Malherbe et Tony Garnier, avant leur départ pour la villa Médicis.",
    "paragraphs": [
      "Le Président de la République et Mme Émile Loubet ont reçu à déjeuner les six lauréats des grands prix de Rome, dont MM. Levadé, Malherbe et Tony Garnier, avant leur départ imminent pour la villa Médicis."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Nécrologie",
    "title": "Mort de M. Guilloire",
    "summary": "M. Guilloire, secrétaire général de la Comédie-Française, est décédé subitement d'une congestion cérébrale sur la place du Théâtre-Français.",
    "paragraphs": [
      "Nous apprenons le décès soudain de M. Guilloire, secrétaire général de la Comédie-Française, emporté par une congestion cérébrale alors qu'il se trouvait place du Théâtre-Français."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Faits Divers",
    "title": "Incendies dans la plaine de Lierville",
    "summary": "Deux incendies d'origine inconnue ont détruit des récoltes de blé et de paille appartenant aux cultivateurs M. Louis Léceyer et M. Boissy dans la plaine de Lierville.",
    "paragraphs": [
      "Deux incendies ont éclaté dans la plaine de Lierville. Le premier a détruit une meule de blé de 3 200 gerbes, appartenant à M. Louis Léceyer, cultivateur ; le second a consumé une meule de 3 000 bottes de paille, appartenant à M. Boissy. Les causes de ces deux sinistres demeurent inconnues."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Faits Divers",
    "title": "Tentative de déraillement près de Chartres",
    "summary": "Sur la ligne de l'État, un jeune berger de treize ans a été appréhendé après avoir disposé des pierres sur les rails, provoquant une tentative de déraillement par pur jeu.",
    "paragraphs": [
      "Une tentative de déraillement a été commise, hier après-midi, sur la ligne de l'État, entre Chartres et Brou, au kilomètre 122.",
      "Plusieurs grosses pierres avaient été déposées sur les voies. Fort heureusement, on s'en est aperçu à temps. L'enquête ouverte a mené à la découverte du coupable : c'est un gamin de treize ans nommé Julien Girard, berger chez M. Blot, cultivateur à la commune de Vieuvicq. Il a déclaré qu'il avait agi ainsi pour s'amuser."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Faits Divers",
    "title": "Accident de travail à Senonches",
    "summary": "M. Émile Lavie, cultivateur à Senonches, a été grièvement blessé lors d'un accident de voiture alors qu'il transportait des pommes à cidre.",
    "paragraphs": [
      "M. Émile Lavie, cultivateur à Senonches, revenait, hier matin, chercher un chargement de pommes à cidre, lorsqu'il tomba si malheureusement de sa voiture que les roues lui passèrent sur le corps. L'état du blessé est sérieux."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Sports",
    "title": "Courses à Maisons-Laffitte",
    "summary": "Le programme des courses hippiques se poursuit avec une réunion à Maisons-Laffitte ce vendredi 10 novembre, suivie d'une épreuve le samedi 11 novembre à Neuilly-Levallois.",
    "paragraphs": [
      "Aujourd'hui vendredi 10 novembre, courses à Maisons-Laffitte. Demain samedi 11 novembre, courses à Neuilly-Levallois, à 1 heure."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Sports",
    "title": "Résultats des courses d'Auteuil du 9 novembre",
    "summary": "Retour sur la réunion hippique d'Auteuil où, sous un temps clément, les victoires de Quitte ou Double, Chocolat, Ambulant, Maranine et Bassam ont marqué la journée sportive.",
    "paragraphs": [
      "Un très beau temps a favorisé cette réunion où deux favoris sur six ont triomphé. Quitte ou Double a remporté facilement le prix Lotus, tandis qu'Aïe s'est imposé, non sans difficulté, dans le prix de Triel.",
      "Les quatre autres vainqueurs ont brillé à des cotes très avantageuses. Chocolat a enlevé le prix de la Vallée d'une encolure. Ambulant, débutant sur les haies, a décroché le prix Vivienne. Maranine a aisément battu Baladin II dans le prix de Lodi, et enfin, Bassam a remporté le prix des Étangs."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Santé",
    "title": "Témoignage sur le Goudron Guyot",
    "summary": "Mme Marie Desnoix témoigne de la guérison complète de son fils, souffrant de troubles bronchiques persistants, grâce à l'usage thérapeutique du Goudron Guyot.",
    "paragraphs": [
      "Mme Marie Desnoix, demeurant rue de Sèvres à Paris, rapporte la guérison complète de son fils, revenu du régiment avec une toux tenace et des affections bronchiques. Après l'emploi du goudron Guyot, le jeune homme cessa d'évacuer bile et glaires, recouvrant rapidement la santé.",
      "L'usage du Goudron Guyot est vivement recommandé à toute personne souffrant des bronches ou de la poitrine. Ce remède aide à enrayer la bronchite et peut agir efficacement contre la phtisie."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Feuilleton",
    "title": "Roman : Scène chez M. Jefferson",
    "summary": "Lors d'une réception mondaine, Gontran rencontre M. Jefferson ainsi que le lieutenant Jacques Châtel, explorateur renommé, en compagnie de sa nièce, miss Minnie.",
    "paragraphs": [
      "Gontran devina d'emblée que l'homme imposant au riche costume de soirée devait être M. Jefferson. Il était entouré de sa nièce, miss Minnie, et d'un jeune homme à l'air grave, le lieutenant Jacques Châtel, explorateur de renom.",
      "Miss Minnie présenta Gontran comme son sauveur. Malgré une antipathie instinctive pour le lieutenant Châtel, Gontran demeura courtois. Le dîner fut alors annoncé, interrompant les échanges entre les convives et le maître de maison."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Informations Municipales",
    "title": "Statistique municipale de la Ville de Paris",
    "summary": "Le rapport hebdomadaire de la Statistique municipale fait état d'une baisse de la mortalité, tout en précisant le bilan des maladies et des événements civils dans la capitale.",
    "paragraphs": [
      "Le service de la Statistique municipale a enregistré, durant la semaine écoulée, un nombre de décès inférieur à celui de la période précédente. La fièvre typhoïde a été responsable de 13 décès.",
      "Les affections inflammatoires des organes respiratoires, incluant bronchites et pneumonies, ont causé 113 décès. La phtisie en a compté 192. On dénombre également 13 suicides et 16 autres morts violentes. Enfin, 410 mariages ont été célébrés et 1 079 naissances ont été enregistrées."
    ]
  },
  {
    "id": 50,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Nouvelles de la scène",
    "summary": "Dernière représentation de « Ma Bru » à l'Odéon, détails techniques sur la mise en scène de Berlioz et informations sur les Concerts Lamoureux.",
    "paragraphs": [
      "Ce soir, à l'Odéon, dernière représentation de la pièce « Ma Bru ». Par ailleurs, l'administration de l'Opéra-Comique accorde une réduction de 50 % aux enfants de moins de dix ans pour les matinées de Cendrillon.",
      "La question du cheval de Troie pour l'œuvre de Berlioz est à l'ordre du jour : cet accessoire massif pèse 4 000 kilos et nécessite le concours de 24 hommes pour être déplacé sur des rails.",
      "La réouverture des Concerts Lamoureux se tiendra le dimanche 12 novembre au théâtre de la République."
    ]
  }
];
