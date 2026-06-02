// Date: 1899-12-09
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-12-09 (Version Restaurée, 39 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "L'Inde d'aujourd'hui",
    "summary": "L'Inde, autrefois joyau de prospérité, subit aujourd'hui les ravages de la famine et de la peste sous la domination britannique, dans un contraste saisissant qui entrave toute cohésion révolutionnaire.",
    "paragraphs": [
      "Les événements qui, à l'heure actuelle, portent atteinte sinon encore à la puissance du moins déjà au prestige britannique, ramènent l'attention du monde sur le plus vaste trésor territorial de la Grande-Bretagne, sur cette colossale presqu'île hindoue qui apparaît comme l'énorme pivot de l'Asie.",
      "Il y a deux cents ans, l'Inde était le pays le plus riche et le plus fertile de l'Asie. M. Pramatha Nath Bose souligne que les artisans indiens jouissaient d'une prospérité réelle, sans les distinctions de classes entre patrons et ouvriers que connaît l'Occident.",
      "Aujourd'hui, la famine et la peste exercent parmi le peuple indien d'inconcevables ravages. Elles sont les conséquences d'une misère endémique. La multiplication des moyens de transport empêche la disette de se produire, mais le résultat est le même : on a vu des affamés périr en grand nombre dans des districts qui exportaient des millions de tonnes de grains.",
      "L'effrayant contraste entre la situation économique de l'Inde d'autrefois et de l'Inde depuis la domination des Anglais est une des plus éclatantes accusations que l'humanité peut proférer contre ceux-ci. La saignée continue et, à l'heure actuelle, une révolution des Indiens n'apparaît ni possible ni même désirable à cause de leur manque de cohésion."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions - Première Partie : Mariage de convenances",
    "summary": "À la suite d'une escapade non autorisée à Paris, le commandant Brinquart sanctionne sévèrement ses lieutenants, d'Angeville et de Vrigny, en leur imposant huit jours d'arrêts de rigueur.",
    "paragraphs": [
      "Le commandant Brinquart, furieux, interrogea ses lieutenants, d'Angeville et de Vrigny, au sujet de leur fugue à Paris. Malgré leurs explications sur les circonstances, il décida de les sanctionner.",
      "Le colonel, lors de la parade, afficha son mécontentement face aux deux officiers. Après une brève entrevue disciplinaire, ils furent condamnés à huit jours d'arrêts.",
      "La vie de caserne reprit son cours, marquée par les commentaires des soldats sur la fortune et le caractère des deux lieutenants, tandis que ces derniers entamaient leur captivité."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des Ministres",
    "summary": "Présidé par M. Loubet à l'Élysée, le Conseil des Ministres a statué sur les nominations aux évêchés vacants, le budget colonial et une réforme du contrôle technique des chemins de fer.",
    "paragraphs": [
      "Les ministres se sont réunis, hier matin, à l'Élysée, sous la présidence de M. Loubet. Le Conseil a abordé plusieurs sujets, dont la nomination de nouveaux prélats pour les évêchés et archevêchés vacants, ainsi que la question du budget des Colonies.",
      "Le ministre des Travaux publics a été autorisé à préparer une modification du service du contrôle des chemins de fer pour le rendre plus effectif."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "Colonies françaises à l'Exposition",
    "summary": "Sous la direction de M. Charles Roux, une commission prépare au Trocadéro une vaste présentation de l'empire colonial français, incluant des reconstitutions fidèles de ses territoires les plus lointains.",
    "paragraphs": [
      "L'empire colonial français sera largement représenté à l'Exposition universelle au Trocadéro. Une place importante sera réservée au Sénégal, au Soudan et à l'Inde française, incluant une reconstitution de la pagode de Vichnou.",
      "L'Indo-Chine disposera de quatre sections : Cochinchine, Cambodge, Annam et Tonkin. D'autres pavillons seront consacrés à Saint-Pierre et Miquelon, la Nouvelle-Calédonie, la Martinique, la Guyane, la Réunion, la Guadeloupe, le Congo et Madagascar.",
      "Une commission spéciale, dirigée par M. Charles Roux, est chargée de la réalisation des ouvrages économiques et statistiques des colonies."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "La délimitation de Quan-Chau-Wan",
    "summary": "Le contre-amiral Courrejolles et le maréchal Sou ont officiellement entériné la délimitation de la concession française de Quan-Chau-Wan, assurant la souveraineté française sur cette zone stratégique.",
    "paragraphs": [
      "Des nouvelles de l'Extrême-Orient précisent les limites de la concession française de Quan-Chau-Wan, établies par le contre-amiral Courrejolles et le maréchal Sou.",
      "La ligne de délimitation inclut des îles et des terres situées sur la côte orientale de la presqu'île chinoise, assurant ainsi la souveraineté française sur cette zone commerciale stratégique."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Vie Militaire",
    "title": "Les voyages des réservistes",
    "summary": "La procédure de remboursement des frais de voyage des réservistes, jugée trop bureaucratique, appelle une réforme visant à simplifier l'accès au transport ferroviaire via un système de bons détachables.",
    "paragraphs": [
      "La procédure actuelle réglant les frais de voyage des réservistes, impliquant le sous-intendant militaire, est jugée par beaucoup trop complexe et empreinte d'une bureaucratie tatillonne.",
      "Le Petit Parisien préconise une simplification salutaire : utiliser un papillon détachable joint à la convocation postale, permettant aux réservistes d'obtenir leur billet directement au guichet de la gare, le remboursement étant ensuite traité directement par le Trésor."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Cambrioleur pris au lasso",
    "summary": "À Créteil, une arrestation insolite a eu lieu : un dompteur de lions, M. Pié-Fiaï, a stoppé net l'un des trois cambrioleurs en fuite en faisant usage de son lasso, comme dans les plaines sauvages.",
    "paragraphs": [
      "Trois cambrioleurs ont été interceptés après un vol audacieux commis à Créteil. La poursuite s'est terminée de manière inattendue : l'un des malfaiteurs a été capturé par M. Pié-Fiaï, un dompteur de lions passant à cheval, qui a utilisé son lasso avec une dextérité remarquable pour le stopper net dans sa fuite."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Triple suicide",
    "summary": "Un tragique drame de la misère s'est déroulé à Villers-les-Nancy, où la famille Bergeot a mis fin à ses jours par asphyxie, faute de moyens de subsistance.",
    "paragraphs": [
      "À Villers-les-Nancy, un douloureux drame de la misère vient d'être découvert. Le nommé Jules Bergeot, sa femme et leur fillette de trois ans ont été retrouvés morts, asphyxiés par les émanations d'un réchaud à charbon, n'ayant plus les ressources nécessaires pour subvenir aux besoins de leur existence."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Diplomatie",
    "title": "Un dîner chez le Sultan",
    "summary": "M. Constans, ambassadeur de France, a honoré la mémoire des soldats français en Crimée avant d'être reçu au palais de Yildiz par le Sultan, confirmant la cordialité des relations franco-ottomanes.",
    "paragraphs": [
      "M. Constans, ambassadeur de France à Constantinople, s'est rendu au cimetière latin de Ferikeuï afin d'honorer la mémoire des soldats français tombés durant la guerre de Crimée, geste accompli avant son prochain départ pour la France.",
      "Il a par la suite été convié à un somptueux dîner par le Sultan au palais de Yildiz, en présence de l'amiral Fournier et des hauts dignitaires ottomans, marquant ainsi une étape importante et cordiale dans les relations diplomatiques entre nos deux nations."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Guerre des Boers",
    "title": "La situation en Afrique du Sud",
    "summary": "Sur le front sud-africain, le général Buller prépare une offensive vers Colenso, tandis que la garnison de Ladysmith résiste avec ténacité aux bombardements adverses.",
    "paragraphs": [
      "La situation demeure empreinte d'incertitude sur le théâtre des opérations. Le général Buller, commandant en chef des forces britanniques, prépare activement une attaque sur les positions boers de Colenso dans l'espoir de dégager Kimberley.",
      "À Ladysmith, malgré les bombardements sporadiques qui causent quelques dommages matériels, la garnison tient bon. Par ailleurs, des rapports récents font état de la présence du général Joubert aux abords immédiats de Colenso."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Opérations militaires en Afrique du Sud",
    "summary": "Aucune nouvelle officielle de Lord Methuen au War Office, mais des dépêches du Cap signalent des sabotages sur les conduites d'eau et les lignes télégraphiques, ainsi qu'une vive canonnade entendue vers le nord.",
    "paragraphs": [
      "Aucune dépêche de Lord Methuen n'est parvenue au War Office, mais on a reçu au Cap, d'Orange-River-Station, le télégramme suivant, daté du 8 décembre.",
      "On a fait sauter ce matin les conduites d'eau qui passent sous le remblai du chemin de fer près de Graspan. Le télégraphe est également coupé.",
      "Des guides rapportent avoir entendu une vive canonnade vers le nord."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "La colonne du Général Gatacre",
    "summary": "D'après les nouvelles de Sterkstroom, le général Gatacre devrait rencontrer une résistance acharnée lors de son avancée, les Boërs recevant d'importants renforts à Aliwal-North.",
    "paragraphs": [
      "On télégraphie de Sterkstroom au Daily News, à la date du 8 décembre.",
      "Tout porte à croire que le général Gatacre rencontrera une grande résistance dans sa marche en avant, car on annonce que les Boërs, à Aliwal-North, reçoivent des renforts."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Soulèvement au Griqualand",
    "summary": "Un soulèvement des Hollandais est signalé dans le Griqualand oriental. Plusieurs insurgés ont été exécutés, tandis que les généraux britanniques accusent les Afrikanders de trahison.",
    "paragraphs": [
      "Au Griqualand, 8 décembre : Le correspondant du Daily Mail à Herschel, dans une dépêche en date du 3 décembre, signale un soulèvement des Hollandais dans le Griqualand oriental.",
      "Plusieurs Hollandais faits prisonniers, les armes à la main ou même après s'être indûment absentés de leurs fermes, ont été passés par les armes.",
      "Les généraux anglais attribuent tous leurs mécomptes à la trahison des Afrikanders."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Navires Anglais échoués",
    "summary": "Le transport Ismore a fait naufrage, entraînant la perte de chevaux et de matériel. Par ailleurs, le steamer Mallby s'est échoué à Shields ; son équipage a pu être sauvé de justesse.",
    "paragraphs": [
      "Londres, 8 décembre : Les journaux publient un télégramme du Cap, en date du 8 décembre, annonçant que, dans le naufrage du transport Ismore, 289 chevaux, une batterie de campagne, une grande quantité de munitions, ainsi que tous les approvisionnements médicaux et les effets d'équipement du 9e hussards, ont été perdus.",
      "On apprend, en outre, que le steamer Mallby, affrété par l'Amirauté pour transporter du charbon à Capetown, s'est échoué hier soir à Shields. Les vingt-quatre hommes d'équipage ont été sauvés avec beaucoup de mal."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "À Lourenço-Marquez",
    "summary": "Un vapeur allemand a débarqué à Lourenço-Marquez des volontaires, dont deux officiers français et un suédois, venus rejoindre les forces boërs. Le navire était suivi par un croiseur britannique.",
    "paragraphs": [
      "Londres, 8 décembre : On télégraphie de Berlin au Daily Mail qu'un steamer allemand est arrivé le 6 décembre à Lourenço-Marquez avec des volontaires allemands, deux officiers français et un suédois, qui se proposent de combattre dans les rangs des Boërs.",
      "Le steamer, depuis son départ de Port-Saïd, a été suivi par un croiseur britannique."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Interview d'un voyageur allemand",
    "summary": "Un voyageur arrivant du Natal rapporte, via Las Palmas, le soutien actif de l'Allemagne aux Boërs. Il témoigne de la désertion des troupes indigènes vers leurs rangs et de la détermination du président Krüger.",
    "paragraphs": [
      "Madrid, 7 décembre : Le Heraldo publie la dépêche suivante de Las Palmas (Canaries) : Le vapeur anglais Avigerie, venant du Natal, est arrivé ici, ayant à bord de nombreux passagers émigrés du sud de l'Afrique.",
      "Un passager allemand, interviewé, a affirmé que l'Allemagne protège grandement les Boërs, leur fournissant armes et munitions en quantité. Il a ajouté que la plupart des Espagnols résidant dans le sud de l'Afrique ont rejoint les rangs des Boërs.",
      "Les troupes formées par des volontaires indigènes, recrutés par les Anglais, passent avec armes et bagages dans l'armée des Boërs. Ces derniers disposent d'un excellent service d'espionnage dans toutes les possessions britanniques.",
      "À Durban, de nombreux blessés provenant des batailles livrées aux alentours de Ladysmith sont actuellement en traitement.",
      "Le passager allemand a conclu en déclarant que, lors de son séjour à Johannesburg, il a entendu le président Krüger affirmer que si les Anglais parvenaient à vaincre, ils ne trouveraient au Transvaal qu'un monceau de ruines."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Renforts Britanniques",
    "summary": "Le gouvernement britannique a ordonné l'envoi immédiat d'une brigade de cavalerie forte d'environ 4 000 hommes en Afrique du Sud, selon le Daily News.",
    "paragraphs": [
      "Londres, 8 décembre : Le Daily News indique que le gouvernement a pris toutes les dispositions nécessaires pour l'envoi immédiat d'une brigade de cavalerie en Afrique du Sud, représentant un effectif d'environ 4 000 hommes."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Social",
    "title": "Le Congrès Socialiste",
    "summary": "Le congrès socialiste franchit une étape décisive vers l'unité. Après avoir voté la suppression des corps disciplinaires, les délégués ont adopté, à l'unanimité, la formule d'unification du parti.",
    "paragraphs": [
      "La onzième séance du congrès s'ouvre à deux heures et demie. M. Pommier, de Lorient, est élu président.",
      "Une motion tendant à inscrire la lutte contre l'alcoolisme dans le programme socialiste est renvoyée à la commission. Puis, après avoir entendu M. Houauet, le congrès adopte un vœu en faveur de la suppression des corps disciplinaires de l'armée.",
      "Le débat reprend sur la question de l'unité, mais est bientôt suspendu pour permettre à la commission de déposer son rapport. À la reprise, M. Jaurès déclare que la lecture du rapport devant le congrès n'aura lieu que le soir à huit heures.",
      "Le soir, à neuf heures, M. Imbat est élu président. Au nom de l'union, M. Dubreuilh monte à la tribune pour lire le rapport qui comporte la formule d'unification du parti socialiste. Il déclare que les conclusions ont été votées à l'unanimité.",
      "Ces conclusions prévoient un comité général formé des délégués de chaque fraction pour délibérer sur les questions communes, ainsi qu'un contrôle sur la presse socialiste et sur les élus, qui devront former à la Chambre un groupe parlementaire unique.",
      "Ces décisions sont longuement acclamées par les divers représentants des partis ouvriers et socialistes.",
      "La séance est levée à dix heures au son de l'Internationale."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Politique",
    "title": "Chambre des Députés : Séance du 8 décembre",
    "summary": "La Chambre a débattu du budget des Colonies. M. d'Estournelles a critiqué la politique d'expansion, tandis que M. Etienne l'a défendue. Des mesures de bienfaisance ont également été votées.",
    "paragraphs": [
      "La Chambre a consacré toute sa séance à la discussion du budget du ministère des Colonies.",
      "M. d'Estournelles a attaqué avec vigueur les exagérations de la politique d'expansion coloniale, préférant que la France consacre ses capitaux au développement de son agriculture et de son industrie plutôt qu'à une expansion hasardeuse en Chine.",
      "M. Etienne a défendu la politique coloniale avec éloquence. La suite de la discussion a été renvoyée à lundi.",
      "Lors de la séance présidée par M. Paul Deschanel, la Chambre a adopté des projets de loteries destinés au sanatorium de Saint-Pol-sur-Mer et aux enfants tuberculeux de l'hôpital d'Ormesson."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Politique",
    "title": "Le Budget des Colonies",
    "summary": "Le débat budgétaire sur les colonies oppose les partisans de la prudence face aux risques internationaux aux défenseurs de l'empire, jugé essentiel pour le prestige et l'économie de la France face aux grandes puissances.",
    "paragraphs": [
      "M. Firmin Faure insiste sur la nécessité d'organiser une armée coloniale et d'assurer les communications par des câbles télégraphiques propres à la France.",
      "M. Ursleur déplore le vent de réaction contre les libertés coloniales et réclame une charte constitutionnelle pour les colonies.",
      "M. d'Estournelles a souligné les dangers des complications internationales découlant d'une expansion illimitée. Il a critiqué l'absence de marine coloniale adaptée et le risque de concurrence industrielle résultant du partage de la Chine.",
      "M. Etienne, en réponse, a fait l'éloge de l'empire colonial (Indochine, Madagascar, Afrique) et a affirmé que cette politique était nécessaire sous peine de déchéance face à l'Angleterre et à l'Allemagne."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "La Haute Cour : Vingt-quatrième audience",
    "summary": "Au cours de cette audience, M. Jules Lemaître, M. Millevoye et le colonel Monteil ont été entendus sur le rôle des ligues nationalistes et sur les circonstances politiques entourant l'agitation de l'affaire Dreyfus.",
    "paragraphs": [
      "M. Guérin sollicite une confrontation entre M. Lépine et M. Puibaraud ; le président de la Haute Cour ajourne cette requête à une audience ultérieure.",
      "M. Jules Lemaître, appelé à la barre en qualité de témoin, affirme sous la foi du serment que M. Déroulède n'a jamais nourri l'intention de contracter une alliance avec les partis royalistes.",
      "M. Millevoye, député, témoigne à son tour sur l'effervescence persistante liée à l'affaire Dreyfus. Il dément formellement que les feuilles nationalistes aient reçu quelque subside que ce soit de la part des milieux royalistes et expose son rôle de médiateur lors de l'évacuation mouvementée du fort Chabrol.",
      "Le colonel Monteil déclare pour sa part que la fédération des ligues avait pour unique dessein la défense des intérêts nationaux, réfutant toute velléité révolutionnaire.",
      "L'audition se poursuit avec plusieurs témoins, notamment M. Paulin-Méry et M. de Cuverville, lesquels sont interrogés sur le financement des ligues et les manifestations organisées dans la capitale."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Santé",
    "title": "État de santé de M. Guérin",
    "summary": "Les médecins ont examiné M. Guérin à la prison de la Santé ; il souffre de rhumatisme articulaire et d'une bronchite en voie d'amélioration.",
    "paragraphs": [
      "Les docteurs de Beauvais, Cloquat et Devillers ont procédé, à la prison de la Santé, à l'examen médical de M. Guérin. Ils constatent que l'inculpé est atteint de rhumatisme articulaire ainsi que d'une bronchite, dont l'état clinique est actuellement en voie d'amélioration."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Administration",
    "title": "Conseil Général de la Seine : Séance du 1er décembre",
    "summary": "Le Conseil général de la Seine se prononce contre le maintien des périodes d'exercice militaire et étudie la relance du projet de 'Paris port de mer' pour soutenir l'emploi après l'Exposition.",
    "paragraphs": [
      "Le Conseil a délibéré sur la loi relative au recrutement militaire. Le ministre de la Guerre ayant opposé un refus à la suppression des périodes d'exercice, le Conseil réclame désormais une suspension immédiate de l'application de cette loi.",
      "M. Sauton a formulé la proposition de relancer le projet de 'Paris port de mer' au terme de l'Exposition universelle, afin de prémunir la classe ouvrière contre les risques de chômage."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un scandale en Italie",
    "summary": "Le député palermitain M. Palizzolo a été arrêté à la suite de l'enquête sur l'assassinat de M. Notarbartolo, ancien directeur de la Banque de Sicile.",
    "paragraphs": [
      "Le député de Palerme, M. Palizzolo, a été appréhendé par les autorités en raison de son implication présumée dans l'assassinat de M. Notarbartolo, ancien directeur de la Banque de Sicile, une affaire qui secoue profondément l'opinion publique italienne."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Faits Divers",
    "title": "Moulins incendiés",
    "summary": "Un incendie dévastateur a frappé les moulins à vapeur Dubois et Cie, provoquant des dégâts matériels considérables estimés à plus d'un million de francs.",
    "paragraphs": [
      "Un incendie violent s'est déclaré dans les importants moulins à vapeur de la maison Dubois et Cie. Le sinistre a pris des proportions considérables, causant des pertes matérielles évaluées à plus d'un million de francs."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Maritime",
    "title": "Sinistres en mer",
    "summary": "Le vapeur « Elbing » s'est échoué sur le banc de Dath. Les autorités maritimes ont immédiatement organisé les secours, tandis que le transport « Anglian » poursuit sa navigation régulière à destination de Malte.",
    "paragraphs": [
      "Le vapeur « Elbing » s'est échoué sur le banc de Dath. Des mesures de secours énergiques sont immédiatement entreprises pour porter assistance au navire en détresse.",
      "Par ailleurs, le transport « Anglian » poursuit sa route vers Malte, où il est attendu dans les délais prévus par les services de la navigation."
    ]
  },
  {
    "id": 27,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Diverses informations",
    "summary": "Les régiments d'artillerie ont célébré avec éclat la fête de la Sainte-Barbe. À Bar-le-Duc, une situation pénible émeut la population : un père de huit enfants a été incorporé malgré sa détresse familiale.",
    "paragraphs": [
      "Les artilleurs ont célébré dignement la fête de la Sainte-Barbe, patronne de leur arme, au sein de toutes les casernes de la garnison.",
      "Une situation poignante est signalée à Bar-le-Duc, où un père de huit enfants a été incorporé au régiment malgré la misère extrême dans laquelle il laisse sa famille, faute de ressources suffisantes."
    ]
  },
  {
    "id": 28,
    "page": 2,
    "category": "Maritime",
    "title": "Application de la loi d'amnistie",
    "summary": "Le ministère de la Marine a fait parvenir aux autorités maritimes une circulaire détaillant les procédures d'effacement des mentions de condamnations sur les livrets des inscrits, selon la loi de 1898.",
    "paragraphs": [
      "Le ministère de la Marine vient de diffuser une circulaire précisant, pour le corps des inscrits maritimes, les modalités pratiques de l'effacement des condamnations portées sur les livrets, conformément aux dispositions de la loi d'amnistie du 27 avril 1898."
    ]
  },
  {
    "id": 29,
    "page": 2,
    "category": "Culture",
    "title": "Théâtre : Les premières représentations",
    "summary": "Compte-rendu de la nouvelle pièce donnée au Théâtre de l'Athénée. Malgré quelques trouvailles heureuses dans les dialogues, l'œuvre dans son ensemble demeure d'une facture assez banale et conventionnelle.",
    "paragraphs": [
      "Le Théâtre de l'Athénée a présenté hier sa nouvelle pièce. Si le spectacle contient quelques passages fort amusants qui ont soulevé les rires de la salle, l'œuvre demeure, dans sa structure dramatique, d'une facture assez ordinaire."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Chronique",
    "title": "Un cher maître et les salons",
    "summary": "Anecdote savoureuse sur un écrivain célèbre dont l'égocentrisme a été tourné en dérision dans un salon mondain, lors d'une interruption fortuite de son long monologue.",
    "paragraphs": [
      "Un cher maître, fort renommé pour son talent autant que pour sa suffisance, et qui ne parle jamais que de sa propre personne, s'était lancé dans une longue improvisation. L'arrivée d'une nouvelle invitée vint soudainement rompre son élan. Après les salutations d'usage, il chercha à reprendre le fil de sa pensée : « Voyons, qu'est-ce que je disais donc ? »",
      "La maîtresse de maison, avec une amabilité non dénuée d'ironie, s'empressa de répondre : « Cher maître, vous disiez : Je... »"
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits divers",
    "title": "Les cambrioleurs d'hôtels",
    "summary": "Une tentative de cambriolage audacieuse visant l'hôtel particulier du baron Brincart a échoué. Grâce à la vigilance du concierge, les malfaiteurs ont été identifiés et arrêtés par la police.",
    "paragraphs": [
      "Vers six heures et demie, deux individus, des ouvriers, sonnaient à la porte de l'hôtel particulier de M. le baron Brincart, avenue Montaigne, dont le propriétaire est actuellement en villégiature à Bizotière (Maine-et-Loire).",
      "Le concierge vint ouvrir. Les deux hommes lui dirent qu'ils apportaient, dans une voiture, une caisse renfermant des effets laissés par M. le baron Brincart, et ajoutèrent qu'ils allaient déposer le colis dans la cave.",
      "Une fois cette besogne accomplie, ils s'éloignèrent avec leur voiture. Quelques instants après, le concierge et sa femme voulurent se rendre compte du contenu du colis. Ils l'ouvrirent.",
      "À leur profonde stupéfaction, ils aperçurent, couché au fond, un individu, nommé Eugène Archer, vingt ans, garçon marchand de vins, 48, rue Rouelle. Il s'avéra aussitôt que cet homme n'avait pénétré de cette façon dans l'hôtel que pour ouvrir la porte à ses complices et le dévaliser pendant qu'ils seraient endormis.",
      "Le concierge et sa femme s'emparèrent d'Archer et le conduisirent au commissariat de M. Trélat ; mais, arrivé au coin de l'avenue Montaigne et des Champs-Élysées, le malfaiteur poussa un cri, les premiers individus cachés dans les parages prirent la fuite et disparurent.",
      "Le commissaire de police, courant des faits, fit aussitôt exercer une surveillance de l'hôtel par des agents de la sûreté. Quelques heures après, ils arrêtaient un individu, nommé Albert, vingt-cinq ans, qui habite Égalité et qui s'était présenté vers onze heures du soir à la porte de l'hôtel, croyant y trouver ses complices.",
      "Les recherches ont continué dans la soirée et amenèrent l'arrestation des deux premiers malfaiteurs : Baptiste Coubry, dit Total, valet de chambre sans ouvrage, âgé de vingt-quatre ans, domicilié rue de la Glacière, et François Pothier, tailleur d'habits, âgé de vingt-cinq ans, demeurant en garni, rue de la Nation.",
      "Interrogés par M. Trélat, commissaire de police, les misérables ont fait des aveux complets. C'est François Coubry, autrefois employé par le baron Brincart, qui avait servi d'indicateur pour faire le coup. Ils ont été dirigés sur le dépôt."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue",
    "summary": "Une série de drames et d'accidents endeuille la banlieue parisienne : accidents de la circulation, incendies, tragédies domestiques et décès mystérieux marquent cette journée de novembre 1899.",
    "paragraphs": [
      "Puteaux : Des agents de service au quai National ont découvert, la nuit dernière, le cadavre d'un homme âgé d'environ quarante ans. Le malheureux était mort de froid. On a trouvé dans ses poches des papiers portant le nom d'Étienne Roujon, sans indication de domicile. Le corps a été envoyé à la Morgue.",
      "Levallois-Perret : Un cycliste âgé de dix-neuf ans, M. Jules Rougier, demeurant rue Vallier, qui a été renversé hier soir, quai Voltaire par une automobile, a reçu de graves blessures à la poitrine et a eu l'épaule droite écrasée. Le blessé, dont l'état est très grave, a été transporté à l'hôpital Beaujon.",
      "Clichy : M. Jules Galant, âgé de trente et un ans, employé à la Compagnie de l'Ouest, étant tombé hier dans l'escalier de sa maison rue Victor-Hugo, s'est fracturé le crâne. On a dû le transporter d'urgence à l'hôpital Beaujon.",
      "Asnières : On déclare qu'un incendie s'est déclaré hier matin dans une maison habitée par M. et Mme Vanderbrecht et leur famille. Grâce aux prompts secours organisés par les pompiers et les agents de police, l'incendie a pu être éteint au bout d'une heure de travail. Les dégâts sont couverts par des assurances.",
      "Bois-Colombes : Un ouvrier forgeron, Eugène Larzin, âgé de trente-huit ans, était occupé à déplacer de lourdes pièces de fonte devant l'atelier où il travaille, rue Ampère, lorsqu'une de ces pièces étant tombée, le malheureux eut la jambe broyée. Après les premiers soins, il a été conduit à l'hôpital Beaujon.",
      "Saint-Denis : Une ouvrière, Mme Louise Marivalle, âgée de dix-neuf ans, inconsolable depuis la mort de son mari, s'est asphyxiée avant-hier soir dans le logement qu'elle occupait, à l'aide de deux réchauds à charbon. Le décès de la malheureuse a été découvert hier par son frère qui venait lui rendre visite.",
      "Gonesse : Un ouvrier briquetier, Henri Delporte, vingt-trois ans, d'origine belge, a été happé hier près de la gare de Villiers-le-Bel par le tramway. Le malheureux a eu les deux jambes broyées. La mort a été immédiate.",
      "Saint-Ouen : Vers une heure du matin, quatre jeunes gens qui se rendaient de Saint-Ouen à Paris ont été assaillis par plusieurs individus qui tirèrent sur eux sans les atteindre cinq coups de revolver. Il s'ensuivit une mêlée au cours de laquelle l'un des jeunes, Adolphe Sabisnier, fut grièvement blessé au crâne et à la poitrine. Des gardiens de la paix ont mis en fuite les assaillants.",
      "Les Lilas : En l'absence de sa mère, une fillette de six ans, Noémie Heusser, a fait basculer une énorme bassine contenant de l'eau bouillante qui se répandit sur elle et la brûla sur diverses parties du corps. C'est dans un état alarmant que la pauvre petite a été dirigée sur l'hôpital Trousseau.",
      "Bagnolet : Des ouvriers plâtriers ont trouvé hier, près d'un four à chaux, un individu ne donnant plus signe de vie, qui était venu chercher là un abri contre le froid. Un docteur ayant constaté que l'individu respirait encore, on a transporté le malheureux dans un état désespéré à l'hôpital Tenon.",
      "Coulommiers : Un manouvrier de Dammartin-sur-Tigeaux, Victor Lecointe, chassait hier lorsque l'arme dont il était porteur éclata, le blessant grièvement au visage et à la main gauche. Le jeune Croizeur, qui se trouvait non loin de là, fut atteint par quelques plombs qui le blessèrent également au visage."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Départements",
    "title": "Faits divers en province",
    "summary": "L'actualité provinciale est marquée par deux drames distincts : un suicide par pendaison constaté à Clermont dans l'Oise, et une affaire criminelle présumée à Troyes impliquant le meurtre d'une femme.",
    "paragraphs": [
      "Clermont (Oise) : Un nommé Édouard Martin, cordonnier, rue Saint-Pierre, a été trouvé pendu dans son grenier. Il était âgé de soixante et un ans.",
      "Troyes : On a retiré de la Seine le corps d'une jeune femme d'une trentaine d'années qui a été reconnue pour être Mme Verollot, née Rosé Ruin et originaire de Troyes, demeurant rue Jeannette. Après enquête, on se trouverait en présence d'un crime. Le mari de Mme Verollot l'aurait assassinée et l'aurait ensuite jetée dans la Seine. La justice est sur les lieux et l'on procède à l'interrogatoire de Verollot qui a été arrêté à son domicile."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Actualité littéraire",
    "title": "La catastrophe de 1870",
    "summary": "Parution de l'Histoire populaire de la guerre franco-allemande par le lieutenant-colonel Rousset, un ouvrage de référence couronné par l'Académie française, désormais disponible en livraisons abordables.",
    "paragraphs": [
      "Rien n'est plus émouvant et plus intéressant que de suivre toutes les phases du grand drame militaire de la bataille, à jamais et si douloureusement mémorable, de Villiers-Champigny (novembre-décembre 1870) dans l'Histoire populaire de la guerre franco-allemande, par M. le lieutenant-colonel Rousset, professeur à l'École supérieure de guerre.",
      "Cet ouvrage si autorisé et si documenté, qui a été couronné par l'Académie française, publié maintenant en livraisons à un franc cinquante centimes, explique avec autant de clarté que de sûreté dans la critique les causes du désastre sur ce point, comme sur tous les autres.",
      "Il ne coûte, en effet, que 1 fr. 50. Les personnes qui en adresseront la demande à la Librairie des Connaissances utiles (rue Saint-Joseph, Paris) recevront en même temps, à titre de prime, le superbe Panorama de l'Exposition de 1900."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Courrier des théâtres",
    "title": "Spectacles et nouveautés",
    "summary": "Le tout-Paris artistique s'anime : entre la première d'Henri de Bornier à l'Odéon, la reprise de Fidelio à l'Opéra-Comique et les succès music-hall, les divertissements ne manquent pas dans la capitale.",
    "paragraphs": [
      "Ce soir, à l'Odéon, première représentation de France d'abord !, drame en quatre actes, en vers de M. Henri de Bornier.",
      "L'Opéra-Comique reprend ce soir Fidelio, avec Mme Rose Caron.",
      "On fait salle comble aux Folies-Bergère pour applaudir les éléphants de Geo Lockart avant leur départ le 15 décembre.",
      "L'Olympia est devenu le plus beau music-hall de Paris avec notamment les créations de la Loïe Fuller.",
      "Trois débuts brillants au Nouveau-Cirque : Les Nolfiel, les Abra et Steokel."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Tragédies de l'Amour",
    "summary": "À bord de la Némésis, les frères Girodias tentent de percer le mystère du yacht la Minerve, dont le comportement étrange éveille leurs soupçons alors qu'ils naviguent vers l'île Amélia.",
    "paragraphs": [
      "Sur le pont de la Minerve, elle semblait lourde sous le vent et fatiguait beaucoup. Les Girodias avaient à cœur de pénétrer le mystère de ce yacht en qui leur instinct devinait un ennemi. L'occasion était excellente.",
      "« Faites demander si on a besoin de nous », dit Pierre. Malaquin s'élança vers les fanaux pour exécuter l'ordre, mais fut arrêté par le capitaine Barbedier qui s'étonna de le voir sur le pont. Barbedier finit par interroger la Minerve, qui répondit n'avoir aucunement besoin de secours.",
      "La Némésis mit le cap sur l'île Amélia pour relâcher dans la crique Nassau. Peu à peu, les feux de la Minerve disparurent dans le lointain, ne laissant plus qu'un point faible, pareil à une luciole, avant de s'évanouir tout à fait dans l'obscurité."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Feuilleton",
    "title": "La de Lis - Épilogue",
    "summary": "La santé déclinante de la malade et les angoisses du général plongent Noëla dans une profonde détresse, hantée par le crime de son oncle Gontran et le spectre de Jacques Châtel.",
    "paragraphs": [
      "Jamais la malade ne prononçait le nom de son fils. Elle montrait déjà ce suprême détachement des choses d'ici-bas, symptôme le plus sûr de la mort approchante.",
      "Le vieux général donnait, lui aussi, des inquiétudes à son entourage. Un matin, Noëla, sa lectrice, lui avait lu l'histoire du crime de Billancourt. Il avait tout deviné. Depuis lors, il exigeait que Noëla lui fit une lecture détaillée de la sinistre affaire, au péril de sa santé.",
      "Noëla endurait un véritable martyre, pensant à son oncle Gontran, criminel errant dans Paris, et à Jacques Châtel, séparé d'elle par un abîme de sang. Une nuit, épuisée, elle s'endormit et eut une vision terrifiante : son oncle Gontran, l'assassin, surgissant devant elle, menaçant Jacques Châtel avec un couteau."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Projet des frères Girodias",
    "summary": "Au large de la Floride, les frères Girodias multiplient les manœuvres mystérieuses, stationnant inutilement près de Saint-Augustin, au grand dam du capitaine Barbedier.",
    "paragraphs": [
      "La Floride forme une péninsule qui s'avance au sud dans la mer des Antilles. Il y a cinquante ans, c'était un vaste désert peuplé de marécages, de cyprès et de pins stériles. Au moment où le duc Horace y vint, les travaux avaient déjà assaini la région et le Saint-Jean, fleuve principal, était devenu le cœur de sa richesse territoriale.",
      "Deux jours après avoir perdu de vue la Minerve, la Némésis passa par le chenal de Nassau. Le soir, elle jeta l'ancre dans la crique Pablo. Les Girodias descendaient à terre pour chasser, mais leurs carniers restaient étrangement vides, ce qui éveillait les inquiétudes de Barbedier.",
      "Ils restèrent huit jours devant la baie de Saint-Augustin. Cette ville, la plus ancienne d'Amérique du Nord, ne justifiait pas une telle attente, rendant le comportement des frères Girodias encore plus mystérieux."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Société",
    "title": "Traque et retrouvailles",
    "summary": "Cauchemar et réalité se confondent pour Noëla, qui se retrouve face à son oncle, le comte de Montai, un fugitif traqué par la police et réduit à la misère la plus noire.",
    "paragraphs": [
      "Noëla, réveillée en sursaut de son cauchemar, se trouva face à son oncle Gontran, le comte de Montai. L'homme, en loques et famélique, lui réclamait à manger, avouant fuir la police et dormir dans le bois de Boulogne depuis vingt jours.",
      "Gontran se montrait haineux envers la police et jurait de ne pas se rendre vivant. Noëla, tremblante, subissait ce face-à-face, réalisant que le cauchemar de son rêve rejoignait la réalité la plus sombre."
    ]
  }
];
