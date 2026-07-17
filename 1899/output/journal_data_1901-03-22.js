// Date: 1901-03-22
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-03-22 (Version Restaurée, 45 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique Internationale",
    "title": "Les relations diplomatiques entre l'Allemagne et la Russie",
    "summary": "Le chancelier M. de Bülow a rassuré le Reichstag sur les relations avec la Russie. Malgré les tensions commerciales liées aux intérêts agrariens et aux accords en Chine, Berlin souhaite maintenir la stabilité.",
    "paragraphs": [
      "Le chancelier allemand, M. de Bülow, a récemment affirmé au Reichstag que les relations entre son pays et la Russie étaient bonnes en Extrême-Orient, une déclaration qui tranche avec les tensions observées ces derniers mois.",
      "Pendant des années, les deux empires ont collaboré sur divers dossiers internationaux. Toutefois, les récentes polémiques, la publication de l'accord anglo-germanique en Chine et la révision du tarif douanier allemand ont obscurci ces relations.",
      "La croissance industrielle allemande, au détriment de son agriculture, a poussé le gouvernement à privilégier les intérêts des agrariens, provoquant des mécontentements commerciaux qui pourraient affecter la stabilité diplomatique avec la Russie, partenaire économique majeur."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Miss Tempête - Deuxième Partie : La voix du sang",
    "summary": "Au château du Vernoy, l'arrivée de l'intrigant Bistour trouble M. de Sartys. En évoquant le passé et une certaine Mademoiselle Tavernier, il remet en question le mystère de la mort de Marguerite.",
    "paragraphs": [
      "Au château du Vernoy, près d'Épinay, une série d'événements dramatiques a commencé avec l'arrivée d'un homme à l'allure équivoque nommé Bistour.",
      "Se présentant comme un licencié en droit spécialisé dans le contentieux, Bistour réussit à obtenir une entrevue avec M. de Sartys en mentionnant une affaire concernant Mademoiselle Tavernier, remontant à vingt-cinq ans.",
      "Troublé par cette évocation, Roger de Sartys accepte de le recevoir, confronté soudainement à un passé qu'il croyait enfoui et à la possibilité que Marguerite ne soit pas morte comme il l'avait supposé."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Chronique Extérieure",
    "title": "Les événements de Chine et le conflit anglo-russe",
    "summary": "Londres évacue Tien-Tsin pour calmer Saint-Pétersbourg. À Pékin, le maréchal de Waldersee et le général Bailloud s'efforcent de maintenir la discipline parmi les troupes internationales face aux pillages.",
    "paragraphs": [
      "Le gouvernement britannique a annoncé le retrait de ses troupes du territoire contesté à Tien-Tsin, une mesure destinée à apaiser les tensions avec la Russie.",
      "Le maréchal de Waldersee rapporte de Pékin que des mesures sont prises contre des pillards, tandis que le général Bailloud enquête sur la conduite des soldats français à Tien-Tsin.",
      "Malgré l'accord sur le retrait des troupes, la presse britannique reste pessimiste sur la gestion du litige territorial avec la Russie et la rupture de l'harmonie entre les puissances."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un colporteur assassiné près d'Ambert",
    "summary": "Le corps du colporteur Couhaire a été découvert près des usines de La Planche à Ambert. Tout indique un meurtre crapuleux, le malheureux ayant été surpris et dépouillé par son agresseur.",
    "paragraphs": [
      "Le corps d'un homme a été découvert hier matin au bord de la route, près des usines de La Planche à Ambert, victime d'un meurtre brutal.",
      "La victime, identifiée comme un colporteur nommé Couhaire, a probablement été tuée pour le vol de son argent par un agresseur l'ayant surpris par derrière."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Actualités Nationales",
    "title": "Le nouveau drapeau de l'École Polytechnique",
    "summary": "Privée de drapeau depuis la Restauration, l'École Polytechnique reçoit demain un emblème solennel. Il portera sa devise de 1805 et l'inscription commémorative « Défense de Paris ».",
    "paragraphs": [
      "L'École polytechnique, privée de drapeau depuis l'époque de la Restauration, en recevra un nouveau lors d'une cérémonie officielle demain, présidée par le Président de la République.",
      "Le drapeau portera la devise originale de 1805, « Pour la patrie, les sciences et la gloire », ainsi que l'inscription « Défense de Paris »."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un abominable crime aux Paroches",
    "summary": "Un double assassinat d'une cruauté inouïe a frappé la commune des Paroches. M. Hurot et sa fille ont été sauvagement tués à coups de hache, un crime crapuleux qui laisse la population locale dans une profonde stupeur.",
    "paragraphs": [
      "Un double meurtre a été découvert aux Paroches, près de Saint-Mihiel. M. Hurot, un propriétaire de soixante-dix ans, et sa fille ont été assassinés à coups de hache durant la nuit.",
      "Le vol semble être le mobile principal de cet acte odieux qui a provoqué une vive émotion dans toute la région."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Marine",
    "title": "Comparatif des forces navales anglaises et françaises",
    "summary": "Face à l'expansion industrielle effrénée de la marine britannique, qui compte 116 unités en construction, le programme naval français apparaît, par comparaison, bien trop restreint.",
    "paragraphs": [
      "La marine britannique poursuit une expansion considérable de son matériel de combat, avec 116 navires en cours de construction ou de finalisation pour l'année à venir.",
      "En comparaison, le programme français semble bien plus limité, tant en nombre qu'en tonnage et armement, plaçant la flotte anglaise dans une position de supériorité nette."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une locomotive emballée à Saint-Serge",
    "summary": "Un accident de chemin de fer a secoué la gare de Saint-Serge ce matin : une locomotive, victime d'une avarie technique, a terminé sa course folle dans les bâtiments de la gare, fort heureusement sans faire de victimes.",
    "paragraphs": [
      "Une locomotive a terminé sa course dans les bâtiments de la gare de Saint-Serge ce matin, après que le mécanicien a dû faire face à un incident technique majeur.",
      "Aucun voyageur n'était présent dans le train et, malgré la violence du choc, aucun blessé grave n'est à déplorer."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Marine",
    "title": "Lancements de navires à Saint-Nazaire et au Havre",
    "summary": "La construction navale française célèbre deux succès notables avec la mise à flot du croiseur D'Entrecasteaux à Saint-Nazaire et du paquebot Algérie au Havre, sous les yeux d'une foule nombreuse.",
    "paragraphs": [
      "Le croiseur rapide D'Entrecasteaux a été mis à l'eau avec succès à Saint-Nazaire devant six mille personnes.",
      "Au Havre, le lancement du paquebot « Algérie », construit pour la Société générale des transports maritimes, a également été une réussite totale."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Retour de deux frères enlevés il y a vingt ans",
    "summary": "Dénouement extraordinaire à Rive-de-Gier : deux frères jumeaux, enlevés durant leur enfance par des nomades, ont enfin retrouvé leur famille après vingt années d'errance à travers l'Europe.",
    "paragraphs": [
      "Deux frères jumeaux, les frères Priner, enlevés par des bohémiens il y a vingt ans alors qu'ils étaient enfants, ont réussi à retrouver leur famille à Rive-de-Gier après de longues années d'aventures à travers l'Europe."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'histoire des frères Priner",
    "summary": "Récit singulier des frères Priner, deux jumeaux acrobates enlevés durant leur jeunesse par un chef bohémien, devenus célèbres par leurs exploits gymniques avant de débuter sur les scènes parisiennes.",
    "paragraphs": [
      "Mme Priner se mit alors en route. Partie de Madrid, elle traversa tout le sud-ouest et le nord-est, pour arriver enfin à Saint-Pétersbourg où ses enfants tombèrent malades. Elle les ramena ensuite à Vive-Vivier et à Saint-Lô, où ils avaient vécu tout enfants et où plusieurs de leurs frères et sœurs sont établis.",
      "Là, ils ont raconté dans tous les détails l'histoire de leur enlèvement, qui avait été opéré par le chef des bohémiens, un nommé Fernande.",
      "Malgré leurs cris et leur résistance, il dressa les jeunes captifs à tous les exercices du corps. Il disloqua leurs membres, leur apprit la gymnastique, et les deux jumeaux devinrent célèbres.",
      "Après la mort de Fernande, qui survint il y a quelques années, les frères Priner continuèrent à parcourir le monde, contractant partout de fructueux engagements.",
      "Entre-temps, l'un d'eux épousait une charmante Roumaine, séduite par sa vigueur et son agilité. À l'heure actuelle, les deux jumeaux sont sur le point de débuter dans un des principaux théâtres de cette ville.",
      "Ajoutons un dernier détail curieux : les frères Priner se ressemblent à tel point qu'il est difficile de les distinguer l'un de l'autre."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Séance du Sénat du 24 mars",
    "summary": "Compte-rendu de la séance du Sénat du 24 mars : discussions sur l'assistance aux aveugles, le projet de loi sur la contribution des patentes et les amendements relatifs à la taxation des grands magasins.",
    "paragraphs": [
      "Séance du jeudi 24 mars, ouverte à trois heures, sous la présidence de M. Fallières.",
      "Le Sénat prend en considération la proposition de M. Labrouste, ayant pour objet l'organisation de l'assistance à tous les aveugles indigents en France et en Algérie.",
      "Le Sénat continue la discussion du projet de loi relatif à la contribution des patentes. L'article 15 est adopté. L'ensemble des tableaux de l'article 16, relatif aux retranchements, est adopté.",
      "Sur les tarifs applicables aux grands magasins, M. Gustave Denis soutient un amendement tendant à diminuer la taxe sur les voitures et chevaux, pour la porter à 10 francs par voiture et 50 francs par cheval. L'orateur fait le procès des grands magasins, qu'il désigne comme la ruine du moyen et du petit commerce.",
      "Le rapporteur combat l'amendement, déclarant que la taxe prévue sur les voitures n'a rien d'exagéré. En établissant la taxe par spécialité, on a voulu frapper les grands magasins proportionnellement aux revenus.",
      "M. Denis soutient ensuite un amendement tendant à baser la taxe sur les employés, non pas sur leur nombre en ce qui concerne le droit proportionnel et la taxe par spécialité, mais sur la valeur locative.",
      "M. Gauthier, rapporteur, combat la proposition et entre dans une série de calculs pour justifier son assertion.",
      "M. Denis réplique et demande le renvoi de son amendement à la commission. Il en est ainsi ordonné par 168 voix contre 112. La séance est levée à six heures."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Chambre des Députés : Discussion sur les congrégations religieuses",
    "summary": "Débat parlementaire sur la loi des associations : M. de Mun défend le droit des congrégations à enseigner, tandis que M. Léon Bourgeois dénonce les divisions causées par l'instruction congréganiste.",
    "paragraphs": [
      "Séance du jeudi 20 mars. L'intérêt de la séance a été tout entier dans le discours de M. de Mun, l'orateur catholique, lors de la discussion de l'article 14 de la loi sur les associations, qui interdit à tout membre d'une congrégation non autorisée de diriger un établissement d'enseignement ou d'y donner l'instruction.",
      "Dans un langage éloquent, l'orateur a revendiqué pour les congrégations religieuses le droit d'opposer leur enseignement à l'enseignement de l'État.",
      "M. Léon Bourgeois, dans une interruption, a signalé les résultats de l'enseignement congréganiste, qui sème entre les enfants d'un même pays des germes de discorde, de division et de haine.",
      "La suite de la discussion a été renvoyée à lundi ; M. Georges Leygues, ministre de l'Instruction publique, doit répondre à M. de Mun."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Suspension de l'immunité parlementaire de M. Jaluzot",
    "summary": "La Chambre des députés a voté la suspension de l'immunité parlementaire de M. Jaluzot, permettant ainsi des poursuites judiciaires à son encontre suite à des opérations controversées sur les sucres.",
    "paragraphs": [
      "Au début de la séance, la Chambre a autorisé les poursuites intentées contre M. Jaluzot, à raison de certaines opérations sur les sucres.",
      "La séance est ouverte à deux heures vingt sous la présidence de M. Deschanel. M. Pugnot dépose, au nom de la commission chargée d'examiner une demande en autorisation de poursuites contre M. Jaluzot, un rapport concluant à la suspension de l'immunité parlementaire.",
      "M. Ferrand, au nom de la minorité de la commission, demande à la Chambre de refuser de suspendre l'immunité parlementaire. Il déclare que rien ne permet de considérer comme probable la culpabilité de M. Jaluzot et que l'hostilité contre lui a une cause politique.",
      "La clôture est ensuite prononcée. Les conclusions de la commission, tendant à la suspension de l'immunité parlementaire, sont mises aux voix et adoptées par 277 voix contre 215."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Collision maritime en mer",
    "summary": "Naufrage tragique en rade de Flessingue : le steamer anglais Tay sombre après une collision avec le Chemnitz lors d'une tempête, causant la mort de quinze personnes.",
    "paragraphs": [
      "Anvers, 21 mars. Le steamer allemand Chemnitz, venant de Sydney, est entré en collision avec le steamer anglais Tay, qui se trouvait en rade de Flessingue.",
      "Par suite de la tempête, le Tay s'était arrêté à Flessingue. Trois hommes seulement ont été sauvés. Le restant du personnel et trois passagers, soit quinze personnes, ont été victimes de la catastrophe.",
      "Le Tay, qui a coulé à pic, était chargé de marchandises de valeur. Quant au Chemnitz, il a reçu quelques avaries mais a pu continuer sa route sur Anvers."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Diverses dépêches internationales",
    "summary": "Panorama du 21 mars 1899 : la santé du roi des Belges, des incendies, des troubles sociaux et des attentats politiques marquent l'actualité des capitales européennes.",
    "paragraphs": [
      "Bruxelles, 21 mars : Le Roi est fortement grippé. Le docteur Thiriart a été appelé au palais.",
      "Le feu dans un couvent : Un violent incendie a éclaté au couvent des sœurs de Sainte-Marie, à Berchem-Sainte-Agathe, près de Bruxelles. La sœur Ida a courageusement sauvé deux pensionnaires paralysées.",
      "Appel aux inventeurs : Londres, 21 mars. Le War Office publie une invitation pressante aux inventeurs afin de présenter une nouvelle poudre explosive.",
      "Assassinat d'un fonctionnaire russe : Londres, 21 mars. Un haut fonctionnaire vient d'être assassiné à Saint-Pétersbourg.",
      "Une gare détruite : Carrare, 21 mars. Un éboulement de deux mille mètres cubes de terre a détruit la gare du chemin de fer destiné au transport des marbres.",
      "Les inondations en Italie : Vérone, 21 mars. Les eaux du torrent Gua ont rompu les digues et envahi Colongua et Veneta. Deux cents soldats sont partis organiser les secours.",
      "Attentat contre un feld-maréchal : Budapesth, 21 mars. Un individu a tiré des coups de revolver sur le lieutenant feld-maréchal Jablonsky de Szenteiy."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Réforme du recrutement et limites d'âge",
    "summary": "Le général André, ministre de la Guerre, réforme le recrutement : abaissement de l'âge pour Saint-Cyr, facilités pour les frères de réservistes et gratuité de la remonte pour la gendarmerie.",
    "paragraphs": [
      "La limite d'âge pour Saint-Cyr : Le général André, ministre de la Guerre, a estimé qu'il convenait d'abaisser à vingt ans la limite d'âge imposée aux candidats à l'École spéciale militaire, pour les concours de 1902 et suivants.",
      "Frère de réserviste : La règle s'est établie d'accorder au militaire de l'armée active, si son frère est convoqué pour une période d'exercices, une permission afin qu'il puisse suppléer son parent pour la gestion de leurs intérêts communs. Le ministre de la Guerre a décidé de rendre cette solution réglementaire.",
      "Les chevaux des gendarmes : Le ministre de la Guerre a décidé d'instituer dans la gendarmerie le principe de la remonte à titre gratuit par l'État, afin de faciliter le recrutement."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Inondations",
    "title": "Crues inquiétantes en France",
    "summary": "Le printemps 1899 voit les fleuves français sortir de leur lit. La Loire, la Garonne et le Rhône provoquent des inondations majeures, menaçant les quais et les habitations riveraines.",
    "paragraphs": [
      "Nantes, 21 mars : La crue de la Loire atteint 2 mètres ; le fleuve couvre désormais le quai de Billereux.",
      "Bourges, 21 mars : Les rivières débordent, transformant les prairies en véritables lacs. L'Auron et l'Yèvre coupent les routes.",
      "Bordeaux, 21 mars : La marée d'équinoxe, coïncidant avec une forte crue de la Garonne, a provoqué un débordement considérable sur les quais.",
      "Nîmes, 21 mars : Le Rhône atteint le Gardon, inondant et cernant la moitié du village. Le quartier Saint-Nicolas est contraint de se réfugier aux étages supérieurs."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Culture",
    "title": "Retraites d'actrices célèbres",
    "summary": "Regard sur le départ des planches des grandes comédiennes. Entre succès mondain, mariages aristocratiques et accidents de carrière, le rideau tombe souvent sur une vie de luxe et de renommée.",
    "paragraphs": [
      "C'est en pleine période de succès que Mlle Sophie Croizette, qui vient de mourir, avait quitté le théâtre. L'amour avait vaincu l'art. Par son mariage, elle acquérait une situation de fortune brillante.",
      "Elle avait eu des débuts difficiles, mais sa transformation en comédienne l'avait conduite à devenir archi-millionnaire.",
      "Le grand Talma déclarait que c'est toujours avec douleur qu'un artiste aimé du public prend sa retraite. Mlle Mars, le soir de ses adieux, comparait cela à un convoi de première classe.",
      "D'autres actrices ont connu des destins similaires, épousant des aristocrates ou des princes, comme Sophie Cruvelli, devenue baronne Vigier, ou la Taglioni, devenue comtesse Gilbert des Voisins. Parfois, un accident, comme pour la Falcon, forçait le départ, mais la plupart du temps, le succès marquait la fin choisie de la carrière."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Terrible accident minier à Amance",
    "summary": "Une tragédie a frappé la mine d'Amance : une chute de wagonnets a coûté la vie à un ouvrier et a grièvement blessé deux mécaniciens.",
    "paragraphs": [
      "Nancy, 21 mars : Un terrible accident vient de se produire à la mine d'Amance. Par suite de la chute d'une rame de wagonnets, un ouvrier a été tué et deux autres grièvement blessés.",
      "Charles Drap, âgé de vingt-huit ans, fut littéralement broyé et mourut sur le coup. Le mécanicien, Henri Laurent, a reçu de cruelles blessures, et Charles Dupai, âgé de vingt ans, a été sérieusement meurtri.",
      "Les ingénieurs poursuivent leur enquête afin d'établir les responsabilités."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le crime atroce de Goguillon",
    "summary": "Le nommé Goguillon a sauvagement agressé Romain Bos et Angèle Gorlier durant leur sommeil. L'assaillant, qui prétend à l'amnésie, a gravement mutilé ses victimes, laissant M. Bos dans un état comateux.",
    "paragraphs": [
      "Le Petit Parisien relate le crime d'une brute nommée Goguillon, qui a assommé deux jeunes gens, Romain Bos et Angèle Gorlier, pendant leur sommeil.",
      "L'assassin a fracassé le visage de Romain Bos à coups de talon et l'a lardé de coups de canif. Il a ensuite attaqué Angèle Gorlier, lui faisant sauter un œil et tentant de l'égorger.",
      "Romain Bos demeure dans un état comateux. L'état d'Angèle Gorlier s'est légèrement amélioré. Goguillon, interrogé, prétend ne se souvenir de rien."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Social",
    "title": "Grèves et mouvement ouvrier",
    "summary": "À Marseille, suite aux incidents de la veille, le calme semble revenir. Les syndicats discutent d'une grève générale, tandis que la question de la fermeture de la Bourse du travail est posée.",
    "paragraphs": [
      "Marseille, 21 mars : Le conseil d'administration des chambres syndicales ouvrières a invité les corporations à cesser le travail et à se solidariser par le chômage général.",
      "La fâcheuse impression provoquée par les incidents d'hier s'est calmée. Les grévistes espèrent des négociations entre le préfet et les compagnies de navigation.",
      "Le bruit court qu'une pétition demande la fermeture provisoire de la Bourse du travail, accusée d'être le lieu d'excitations malsaines."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Social",
    "title": "La grève des ouvriers des ports et docks",
    "summary": "La grève s'intensifie sur les ports marseillais avec 1 100 ouvriers en arrêt de travail. La solidarité s'organise et la grève des charretiers est annoncée pour le lendemain.",
    "paragraphs": [
      "On évalue à onze cents le nombre des ouvriers qui ont quitté leur travail ce matin. Sur les quais, les mouvements sont très ralentis.",
      "Les ouvriers mécaniciens de certaines maisons ont rejoint les rangs des grévistes et ont chômé par esprit de solidarité. On annonce également, pour demain matin, la grève volontaire des charretiers.",
      "L'aspect des quais est plus animé ce matin. Des patrouilles continuent de circuler de tous côtés."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Social",
    "title": "Situation à Marseille",
    "summary": "Le calme règne à Marseille malgré les tentatives de débauchage. Le préfet Grimanelli n'a pu obtenir d'accord avec les compagnies, et les grévistes ont proclamé la poursuite du mouvement.",
    "paragraphs": [
      "À l'agitation d'hier a succédé un calme qui confine à la lassitude. Aucune manifestation sérieuse de grévistes n'a troublé cet après-midi la tranquillité. À la mairie, M. Flaissières n'a reçu aucune délégation et se montre très réservé sur les événements.",
      "Un certain nombre de grévistes, divisés par petits groupes, ont tenté de se rendre sur divers chantiers pour débaucher les ouvriers, mais sans succès. Quatre d'entre eux ont été arrêtés ce soir pour refus de circuler.",
      "À la préfecture, M. Grimanelli a reçu la commission de la grève ; il n'a pu lui donner aucune réponse favorable concernant la création d'une coopérative ouvrière, les démarches du préfet auprès des compagnies ayant échoué.",
      "Cette réponse, communiquée à la Bourse du travail, a peu surpris les grévistes ; pour la vingtième fois, ils viennent de proclamer ce soir la continuation de la grève.",
      "Il résulte des renseignements recueillis que l'idée d'une grève générale perd du terrain. Les employés des tramways, annoncés hier soir, ne sont qu'une minorité à chômer. Ce soir, l'ordre règne partout et une détente est perceptible."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "A Montceau-les-Mines",
    "summary": "Le calme persiste à Montceau-les-Mines. Les autorités et le syndicat négocient, notamment sur le chauffage des veuves, tandis que les grévistes affirment leur résolution dans un meeting.",
    "paragraphs": [
      "Les patrouilles de cavalerie qui sillonnent les rues sont aujourd'hui moins nombreuses. La population reste calme.",
      "Aucun incident ne s'est produit, malgré la surexcitation des grévistes devant le refus de la Compagnie de reprendre tous les ouvriers.",
      "M. Geste, directeur des mines, est rentré ce soir après avoir conféré à Dijon avec M. Darcy, président de son conseil d'administration. Il a eu aussitôt une entrevue avec M. Dieuy, préfet.",
      "Des délégués du syndicat se sont rencontrés également à l'hôtel de ville avec le préfet, sur une question d'intérêt privé concernant le chauffage des veuves et pensionnées de la compagnie. Celle-ci, en raison de son manque d'approvisionnements en charbon, leur allouerait un secours en argent à titre de compensation.",
      "Le bureau syndical a adressé une lettre au secrétaire du groupe parlementaire socialiste. Une grande manifestation a parcouru aujourd'hui les rues, suivie d'un meeting où les grévistes ont affirmé leur résolution de continuer la lutte.",
      "Les escadrons de chasseurs détachés à Montceau réintègrent leurs casernements et seront remplacés."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tué d'un coup de fusil",
    "summary": "Le cadavre d'un ouvrier carrier nommé Renaud a été découvert à Saint-Rombaire, portant une blessure mortelle par arme à feu. Le parquet a diligenté une enquête sur cet acte criminel aux mobiles obscurs.",
    "paragraphs": [
      "Un crime vient d'être découvert à Saint-Rombaire. Le cadavre d'un ouvrier carrier nommé Renaud, de soixante ans, a été trouvé hier, portant à la tête une énorme blessure provenant d'une arme à feu.",
      "Le coup a été tiré de très près, occasionnant une blessure foudroyante. La mort paraît remonter à trois ou quatre jours. Le parquet a ouvert une enquête, mais on n'a pu découvrir jusqu'ici le mobile de ce crime."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Scène sanglante à Roubaix",
    "summary": "À Roubaix, un ouvrier mécanicien a violemment agressé son épouse après avoir fêté la Mi-Carême. La victime, grièvement blessée, a été hospitalisée tandis que les enfants ont été mis en sécurité.",
    "paragraphs": [
      "Une scène sanglante, due à l'alcoolisme, s'est passée au numéro 2 de la cour Delphin-Deltour. Le nommé Jean-Baptiste Dujardin, ouvrier mécanicien de trente et un ans, s'adonne à la boisson et bat sa femme et ses enfants.",
      "Lundi, après avoir fêté la Mi-Carême, il battit sa femme jusqu'à ce que les voisins alertés interviennent. La victime, retrouvée dans un état lamentable, a été transportée à l'hôpital. Les enfants ont été recueillis par des voisins."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Nécrologie",
    "title": "Mort d'un ancien Conseiller municipal",
    "summary": "M. Cornet, ancien conseiller municipal du quartier du Faubourg-Montmartre, a succombé subitement à une rupture d'anévrisme, rue du Faubourg-Poissonnière, à l'âge de 58 ans.",
    "paragraphs": [
      "M. Cornet, ancien conseiller municipal du quartier du Faubourg-Montmartre, est mort subitement la nuit dernière rue du Faubourg-Poissonnière, d'une rupture d'anévrisme, à l'âge de 58 ans."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Collision en gare Montparnasse",
    "summary": "Une erreur de signalisation à la gare Montparnasse a provoqué une collision entre deux locomotives. L'accident n'a fait aucun blessé malgré des dégâts matériels sur le matériel ferroviaire.",
    "paragraphs": [
      "Un accident sans blessés s'est produit hier matin à la gare Montparnasse. Une locomotive, ayant franchi un signal d'arrêt par erreur, a percuté le train 464 venant de Condé.",
      "Les deux machines, ainsi qu'un fourgon et un wagon, ont été endommagés, mais le service n'a pas été sérieusement perturbé."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un pari qui coûte cher",
    "summary": "Un métreur-vérificateur a été dépouillé de 500 francs aux Halles par deux individus peu scrupuleux, lors d'un pari truqué portant sur le transport d'une boîte à lait.",
    "paragraphs": [
      "Un métreur-vérificateur, Léon D., a été victime d'une escroquerie aux Halles. Après avoir bu avec deux inconnus, il a parié 500 francs qu'il ne pourrait porter une lourde boîte à lait sur cinquante mètres.",
      "Une fois le pari effectué et l'argent confié à un arbitre, ses compagnons ont disparu avec la somme."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une chasse dans un hospice",
    "summary": "Un chien enragé a semé la panique à l'hospice Debrousse, rue de Bagnolet. Mordu en tentant d'intercepter la bête, le jardinier Eugène Davon a vu le péril écarté par l'abattage de l'animal, confirmé atteint de la rage.",
    "paragraphs": [
      "Un chien enragé a pénétré dans l'hospice des vieillards Debrousse, rue de Bagnolet. Le jardinier, M. Eugène Davon, a tenté de le chasser, mais il a été mordu au cours de la lutte.",
      "Deux gardiens de la paix sont rapidement intervenus sur les lieux. Finalement, un employé de l'hospice a réussi à abattre l'animal à l'aide d'un fusil de chasse. L'examen vétérinaire pratiqué sur la dépouille a confirmé que le chien était atteint de la rage."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation de cambrioleurs",
    "summary": "Deux malfaiteurs, Julien Schiler et Albert Bertrand, ont été appréhendés en flagrant délit rue de Nantes alors qu'ils transportaient des paniers de bouteilles dérobées dans la cave de M. Denis, marchand de vin.",
    "paragraphs": [
      "Deux individus, nommés Julien Schiler et Albert Bertrand, ont été arrêtés en flagrant délit rue de Nantes. Ils transportaient des paniers chargés de bouteilles de vin qui venaient d'être dérobées dans la cave de M. Denis, un marchand de vin établi dans le quartier."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression aux Halles",
    "summary": "Le maraîcher Jean Guédon a été sauvagement agressé et dépouillé de 400 francs la nuit dernière aux abords des rues Mondétour et de la Petite-Truanderie par deux inconnus qui l'ont laissé inanimé sur la voie publique.",
    "paragraphs": [
      "Jean Guédon, maraîcher, a été victime d'une violente agression la nuit dernière, aux abords des rues Mondétour et de la Petite-Truanderie. Il a été dévalisé de la somme de 400 francs par deux individus et laissé inconscient sur le trottoir."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Terrible explosion à Asnières",
    "summary": "Une explosion de gaz au domicile de l'ingénieur M. Michaud, provoquée par une lampe à souder, a coûté la vie à Albert Clavejoux et grièvement blessé deux autres ouvriers, Janson et Chemin, lors de travaux domestiques.",
    "paragraphs": [
      "Une explosion de gaz s'est produite dans un pavillon situé à Asnières, occupé par l'ingénieur M. Michaud. Le sinistre a malheureusement causé le décès d'Albert Clavejoux et a fait deux blessés graves, nommés Janson et Chemin.",
      "L'explosion, survenue lors de travaux effectués avec une lampe à souder, serait due à une imprudence commise par les ouvriers présents sur les lieux."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Nouvelles des communes",
    "summary": "Bilan des faits marquants dans la banlieue parisienne : accidents du travail, affaires médicales, découvertes judiciaires et améliorations administratives ponctuent la chronique locale en cette fin novembre 1899.",
    "paragraphs": [
      "Neuilly-sur-Seine : création d'un bureau de poste auxiliaire à l'île de la Grande-Jatte.",
      "Saint-Ouen : un journalier est tombé dans le fossé des fortifications et a été conduit à l'hôpital Saint-Antoine pour y recevoir des soins.",
      "Bois-Colombes : un jardinier, Émile Hegnies, a fait une chute d'un arbre et s'est fracturé les deux jambes.",
      "La Garenne-Colombes : un ouvrier charpentier a eu la cuisse broyée lors d'un accident survenu alors qu'il travaillait sur une charrette.",
      "Nanterre : une dame, la veuve Sallié, a été renversée et gravement blessée par un cheval emballé.",
      "Choisy-le-Roi : découverte d'un cadavre repêché dans la Seine, près de l'usine élévatoire de la Compagnie des eaux.",
      "Alfortville : un jeune homme cherchant à rejoindre son père à Dakar a été retrouvé errant dans la commune et confié au commissariat local.",
      "Mont-l'Amari : vif succès rencontré par les conférences organisées par M. Bascou.",
      "Rambouillet : un journalier, Joseph Gallet, a été renversé par une voiture et se trouve actuellement dans un état grave.",
      "Franconville : un chien enragé a mordu plusieurs personnes avant d'être abattu par un gendarme.",
      "Meaux : un infirmier d'hôpital, Raymond Bénard, a été arrêté pour des faits de maltraitance envers des malades.",
      "Coulommiers : un charretier, Paul Douhet, est grièvement blessé après une chute."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Crime à Moissieu",
    "summary": "Un cultivateur septuagénaire, Laurent Hilaire, a été découvert sauvagement assassiné à son domicile de Moissieu, frappé de dix-neuf coups de couteau. L'enquête privilégie le mobile du vol.",
    "paragraphs": [
      "Un cultivateur de soixante-dix ans, Laurent Hilaire, a été retrouvé assassiné dans sa maison de Moissieu, frappé de dix-neuf coups de couteau. Le vol semble être le mobile principal du crime."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Sports",
    "title": "Résultats des courses à Auteuil",
    "summary": "Malgré une météo défavorable, les courses d'Auteuil ont attiré une belle affluence. La journée a été marquée par les victoires de Brumaire, Lorient, Fadri et Ho Hé L'Amour.",
    "paragraphs": [
      "Les courses du jeudi 24 mars ont eu lieu par un temps désagréable, mais devant un public nombreux.",
      "Les vainqueurs des épreuves sont : Brumaire, Lorient, Fadri et Ho Hé L'Amour."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Judiciaire",
    "title": "Nouvelles judiciaires",
    "summary": "Le juge d'instruction Pringué poursuit ses recherches sur le cambriolage chez M. de Dufresnoy. Parallèlement, le juge Flattet a renvoyé plusieurs prévenus en correctionnelle pour des vols à Villiers-le-Bel et Charenton.",
    "paragraphs": [
      "M. Pringué, juge d'instruction, recherche activement les auteurs d'un vol commis au préjudice de M. de Dufresnoy.",
      "M. Flattet, juge d'instruction, a ordonné le renvoi en correctionnelle de plusieurs individus pour des vols perpétrés à Villiers-le-Bel et à Charenton."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Théâtre",
    "title": "La mort de Got",
    "summary": "Le théâtre français est en deuil : l'illustre sociétaire de la Comédie-Française, Got, est décédé à sa villa de Lignerolles, à l'âge de 73 ans, après une carrière théâtrale exemplaire de cinquante et un ans.",
    "paragraphs": [
      "Le grand comédien Got, l'une des figures illustres de la Comédie-Française, est décédé à sa villa de Lignerolles, à l'âge de 73 ans.",
      "Il avait fait ses adieux à la scène il y a six ans, après cinquante et un ans d'une carrière exemplaire."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Statistique Municipale",
    "title": "Bulletin de la statistique municipale de Paris",
    "summary": "Le bilan sanitaire parisien de fin mars montre une légère baisse des maladies respiratoires, malgré une hausse des cas de variole incitant à la vaccination. On déplore 971 mariages et 1118 naissances.",
    "paragraphs": [
      "Le service de la statistique municipale note un état sanitaire légèrement inférieur à celui de la semaine précédente, tout en restant voisin de la moyenne ordinaire du mois de mars. La diminution des cas porte principalement sur les maladies de l'appareil respiratoire.",
      "La fièvre typhoïde demeure rare, ayant causé 6 décès. La variole a provoqué 11 décès, avec un nombre de cas nouveaux signalés en hausse ; les autorités recommandent vivement la revaccination.",
      "La rougeole reste rare avec 8 décès ; la scarlatine en compte 5, la coqueluche 8 et la diphtérie 12, des chiffres conformes aux moyennes habituelles.",
      "La diarrhée infantile, peu fréquente en hiver, a causé 24 décès chez les nourrissons de 0 à 1 an. En outre, 38 enfants sont décédés des suites d'une faiblesse congénitale.",
      "Les maladies inflammatoires des organes de la respiration ont causé 250 décès : 38 dus à la bronchite (aiguë et chronique) et 62 à la pneumonie.",
      "Les autres affections de l'appareil respiratoire ont entraîné 135 décès, dont 83 par congestion pulmonaire et 16 par broncho-pneumonie. La grippe a causé 25 décès.",
      "La phtisie pulmonaire a causé 207 décès, la méningite tuberculeuse 56, et les autres formes de tuberculose 22. L'apoplexie et le ramollissement cérébral ont causé 56 décès, les maladies organiques du cœur 66, le cancer, la hernie et l'obstruction intestinale 6, la cirrhose du foie 7, ainsi que la néphrite et la débilité sénile.",
      "On dénombre 27 morts violentes, dont 9 suicides. Enfin, Paris a enregistré 971 mariages et la naissance de 1118 enfants vivants, soit 571 garçons et 547 filles."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Marchés",
    "title": "Marché aux bestiaux de la Villette du jeudi 21 mars",
    "summary": "Compte rendu du marché aux bestiaux de la Villette : les cours des bovins et des veaux se raffermissent, tandis que le commerce des moutons demeure calme et stable.",
    "paragraphs": [
      "La vente moyenne et les prix sont bien tenus. Pour les veaux, la vente est meilleure avec une hausse de 5 centimes par demi-kilo. Les moutons connaissent une vente calme à prix stables.",
      "On cote les limousins et bourbonnais de 70 à 76 centimes, les bœufs blancs de 60 centimes. Pour les veaux de choix de Brie, de Beauce et du Gâtinais, les prix varient de 0,95 à 1,05 franc le kilo net. Pour les moutons, on cote les petits moutons du Centre de 0,97 à 1,02 franc."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Sports",
    "title": "Nouvelle épreuve automobile : Coupe-Challenge des véhicules légers",
    "summary": "Une nouvelle compétition annuelle est annoncée pour le mois de juin : la Coupe-Challenge des véhicules légers, récompensant par addition de temps la meilleure équipe de trois voitures de même marque.",
    "paragraphs": [
      "On annonce une nouvelle épreuve d'automobiles qui deviendra annuelle : la Coupe-Challenge des véhicules légers. L'épreuve se courra sur 200 kilomètres en juin prochain et reviendra à la meilleure équipe de trois véhicules de la même marque, classée par l'addition de leurs temps."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Sports",
    "title": "Aperçu sur les véhicules de course",
    "summary": "Présentation technique d'un bolide doté d'un moteur de 28 chevaux, conçu pour Paris-Berlin. Avec quatre vitesses, il peut atteindre 110 km/h et, théoriquement, 140 km/h à haut régime.",
    "paragraphs": [
      "Il nous a été donné de voir hier un véhicule de course établi pour prendre part aux grandes épreuves de l'année, en particulier Paris-Berlin. Cette voiture à quatre cylindres, annoncée pour 28 chevaux, semble en produire dix de plus. Quatre vitesses sont possibles, la dernière atteignant 110 kilomètres à l'heure, et avec un régime de 1000 tours à la minute, on pourrait arriver à 140 kilomètres à l'heure."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Sports",
    "title": "Critique sur le battage médiatique autour du coureur Major Taylor",
    "summary": "Le coureur cycliste américain Major Taylor fait l'objet d'un engouement médiatique excessif. La presse quotidienne, en relatant ses moindres faits et gestes, dépasse, selon l'auteur, les bornes du ridicule.",
    "paragraphs": [
      "Le coureur nègre Major Taylor, sujet américain, arrive chez nous avec une grande réputation. Cependant, il devient ridicule de voir les journaux sportifs et politiques nous entretenir quotidiennement de ses faits et gestes les plus banals : ses bains, ses visites au Louvre ou ses menus. C'est un battage médiatique excessif."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Sports",
    "title": "Boxe et tir",
    "summary": "L'Américain Harry Harris s'impose face à l'Anglais Tom Palmer lors d'un combat de boxe à Londres. Par ailleurs, M. H. Barker remporte le prix des Palmiers au tir avant le prix Saint-Romain.",
    "paragraphs": [
      "Avant-hier à Londres a eu lieu un combat de boxe entre l'Américain Harry Harris et l'Anglais Tom Palmer en 15 rounds. Harris a été déclaré vainqueur après une lutte acharnée.",
      "Vingt-quatre tireurs ont pris part au prix des Palmiers. La première place a été gagnée par M. H. Barker. Aujourd'hui aura lieu le prix Saint-Romain."
    ]
  }
];
