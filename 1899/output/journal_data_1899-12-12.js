// Date: 1899-12-12
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-12-12 (Version Restaurée, 30 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie",
    "title": "L'Industrie du jouet",
    "summary": "À l'approche du Jour de l'an, l'industrie française du jouet affirme sa suprématie. Pour contrer les imitations étrangères, les fabricants s'organisent afin de garantir l'origine française de leurs productions.",
    "paragraphs": [
      "C'est le moment de l'année où s'affirme l'universel triomphe du jouet français. Car le fait est dûment constaté : la vraie fée du joujou, de ce joujou fabuleux qui excite de si ardentes convoitises dans l'âme de l'enfant et qui est sa première initiation à l'art, habite notre pays.",
      "Aux approches du Jour de l'an, l'activité décembriste est sans pareille. Chaque année, selon les exigences de l'actualité, les formes varient, mais c'est toujours en innombrables boîtes que s'éparpillent ces minuscules armées avec lesquelles les enfants de tous les pays du monde jouent à la guerre.",
      "On comprend, par ces détails, l'importance qui s'attache à ce trafic des jouets. Ce n'est que grâce à un outillage spécial et par une production habilement organisée que les fabricants arrivent à satisfaire aux commandes.",
      "Autrefois, dans ce domaine du jouet, la France était tributaire de l'étranger. Ce fut un véritable monopole que possédèrent longtemps nos voisins de l'Est et qu'ils surent maintenir jusqu'à une époque fort rapprochée de nous.",
      "Vingt-cinq ans d'efforts ont amené ce réel triomphe de l'industrie française du jouet. Le joli bébé de France remplaça partout l'ancienne poupée allemande au corps bourré de son.",
      "Cette lutte du jouet allemand et du jouet français a pris des proportions formidables. Elle a nettement démontré la supériorité du fabricant français, mais elle n'est point terminée. Les Allemands tentent de reprendre le marché par des imitations et des pratiques peu scrupuleuses.",
      "C'est pour restreindre le champ ouvert à ces fraudes, qui atteignent même le marché de Paris, que la Chambre syndicale des fabricants de jouets a engagé les fabricants à apposer sur leurs produits une marque spéciale attestant leur origine."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions - Première Partie",
    "summary": "Récit d'une entrevue entre deux connaissances évoquant leurs souvenirs de camaraderie, les nouvelles de leurs proches et le projet de mariage de Georges Dufresne.",
    "paragraphs": [
      "Où l'on fait connaissance d'un jeune homme comme il y en a peu.",
      "Et, passant son bras sous celui du voyageur, il lui demanda : « Tu as reçu ma lettre ? » « Parfaitement. Il y a trois jours. Alors, comme j'avais quelques visites à faire, je me suis mis en route sans me presser. J'ai fait une étape à Vernon, chez notre vieux camarade Duparc. »",
      "Le récit se poursuit sur les habitudes de vie de leurs connaissances communes, Duparc et Bonnemare, et sur le mariage imminent de Georges Dufresne avec mademoiselle Audeval, une jeune orpheline dont il vante les mérites et la fortune."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Informations Politiques",
    "summary": "Réunion du groupe progressiste concernant la situation parlementaire et demande gouvernementale de crédits pour finaliser les travaux de l'Exposition universelle.",
    "paragraphs": [
      "Le Groupe progressiste : Dans une réunion présidée par M. Méline, les membres du groupe progressiste ont délibéré hier sur la situation politique et parlementaire, sans prendre de décision concernant une interpellation sur la présence de socialistes au cabinet.",
      "Crédits pour l'Exposition : En raison de l'avancement des travaux de l'Exposition, le gouvernement demande au Parlement le vote immédiat d'un crédit pour le reliquat de sa part contributive, ainsi qu'un crédit exceptionnel pour des travaux dans les palais nationaux."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Nos Colonies",
    "title": "La politique d'expansion coloniale",
    "summary": "La discussion budgétaire sur les colonies souligne la volonté de la France de consolider ses conquêtes tout en assurant leur défense face aux puissances étrangères.",
    "paragraphs": [
      "La discussion générale sur le budget des Colonies n'a pu que fortifier les volontés du pays qui demande, à la fois, l'arrêt de la politique d'expansion et le maintien énergique de nos conquêtes.",
      "La France possède ce qu'elle avait le droit et même le devoir d'acquérir pour tenir sa place de puissance dans l'œuvre de civilisation du monde.",
      "À ce point de vue, la Chambre et, après elle, la nation, applaudissent aux affirmations du ministre. Il a donné l'assurance que nos colonies sont à l'abri de toute agression."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "Le conflit anglo-boer",
    "summary": "Les forces britanniques du général Buller se préparent au combat après l'échec du général Gatacre devant Stormberg, dû à une erreur de guidage sur un terrain difficile.",
    "paragraphs": [
      "C'est au cours de cette semaine que l'armée anglaise de renfort, placée sous le commandement du général Redvers Buller, doit entreprendre les opérations destinées à débloquer Ladysmith et Kimberley.",
      "L'échec subi par le général Gatacre aux environs de Stormberg est plus grave que la brève dépêche d'hier ne pouvait le faire supposer. Les différentes fractions de l'armée anglaise sont très éloignées les unes des autres.",
      "Le ministère de la Guerre a communiqué la dépêche du général Gatacre : « J'ai le profond regret de vous informer que j'ai subi un sérieux échec ce matin devant Stormberg. J'ai été trompé par mes guides sur la position des ennemis et me suis trouvé sur un terrain impraticable. »"
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Marine",
    "title": "Nos sous-marins",
    "summary": "Le ministère de la Marine confirme l'accélération de la construction de dix nouveaux sous-marins. La France disposera bientôt d'une flottille de douze unités, dont le Narval en essais à Cherbourg.",
    "paragraphs": [
      "Une note émanant du ministère de la Marine faisait connaître hier que le ministre, loin de se désintéresser de la construction des sous-marins, poussait au contraire avec activité les travaux de ceux qui sont actuellement en chantier.",
      "Nous n'avons pas moins de dix sous-marins en cours de construction qui, joints à ceux qui sont terminés ou dont les travaux sont prévus, nous donneront une flottille de douze petits bâtiments dans deux ans.",
      "Le Narval, qui exécute actuellement ses essais à Cherbourg, est un torpilleur submersible destiné à naviguer à la surface et à plonger en présence de l'ennemi."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Tué dans un ascenseur",
    "summary": "Un tragique accident s'est produit avenue de l'Opéra : un capitaine de cavalerie a trouvé la mort en chutant dans le puits d'un ascenseur après avoir omis de fermer la porte de la cabine.",
    "paragraphs": [
      "Un horrible accident, causé par une fatale imprudence, s'est produit hier après-midi dans l'immeuble occupant le n° 10 de l'avenue de l'Opéra.",
      "Un capitaine de cavalerie oublia de fermer la porte de la cabine vitrée. En voulant se rattraper, il perdit l'équilibre, tomba dans le puits et mourut sur le coup."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une femme assassinée",
    "summary": "À Pouilly-le-Port, une femme nommée Zélie Defort, âgée de cinquante-trois ans, a été découverte assassinée à son domicile par des malfaiteurs venus piller ses biens.",
    "paragraphs": [
      "Une femme a été trouvée assassinée dans sa maison, à Pouilly-le-Port. C'est une nommée Zélie Defort, âgée de cinquante-trois ans.",
      "Le ou les assassins avaient enfoncé la porte, frappé la malheureuse d'un coup de bâton sur la tête et l'avaient étouffée sur le lit. Ils avaient fouillé la demeure pour découvrir et voler l'argent ainsi que les titres."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "International",
    "title": "L'expansion de la flotte allemande",
    "summary": "Le chancelier prince de Hohenlohe annonce un projet de loi visant à doubler les effectifs de la marine de guerre allemande, une mesure justifiée par le comte de Bülow pour préserver les intérêts économiques du Reich.",
    "paragraphs": [
      "Le chancelier de l'Empire, prince de Hohenlohe, a fait savoir que la flotte allemande actuelle est jugée insuffisante. Le Reichstag sera donc prochainement saisi d'un projet de loi demandant que la marine de guerre soit portée à un effectif double.",
      "Le comte de Bülow explique que l'Allemagne ne veut porter atteinte au droit d'aucune puissance étrangère, mais qu'elle ne peut désormais plus se laisser évincer dans le domaine économique."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique Internationale",
    "title": "Discours de M. de Bülow sur la politique allemande",
    "summary": "M. de Bülow expose la doctrine de la politique allemande : une indépendance pacifique et loyale, tout en soulignant la nécessité de rester prêt à agir pour sauvegarder les intérêts nationaux.",
    "paragraphs": [
      "M. de Bülow conclut ainsi son discours : « Notre politique générale est pacifique, loyale et indépendante. Nous ne relevons de personne. »",
      "« Nous ne faisons que de la politique allemande. Nous pouvons être forcés de sortir de notre réserve pour sauvegarder notre situation dans le monde et nos intérêts, mais y serons-nous forcés, à quel moment, de quelle façon, en quelle circonstance ? Cela dépend du développement de l'ensemble des événements ; aucune puissance étrangère ne saurait nous l'indiquer, personne en particulier ne saurait le prédire. »"
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique Intérieure",
    "title": "Chambre des Députés - Discussion du budget des Colonies",
    "summary": "La Chambre débat du budget colonial le 11 décembre 1899. M. Decrais privilégie désormais la pacification et la mise en valeur des territoires sur l'expansion territoriale, tout en présentant les avancées outre-mer.",
    "paragraphs": [
      "Séance du lundi 11 décembre 1899. La Chambre a poursuivi la discussion du budget des Colonies. M. Decrais, ministre des Colonies, a exposé, dans un langage élégant et précis qui a recueilli l'approbation de tous les bancs, la politique du gouvernement.",
      "La période d'expansion territoriale doit être considérée comme close ; l'ère de la pacification et de la mise en valeur de tous les territoires conquis est désormais ouverte.",
      "La Chambre a ajourné la discussion des chapitres relatifs aux dépenses militaires afin de permettre au gouvernement de présenter un plan d'ensemble détaillé concernant les travaux de défense et les effectifs définitifs.",
      "Au cours de la séance, M. Eugène Motte s'est déclaré partisan de l'expansion commerciale et industrielle, tandis que M. l'abbé Lemire a présenté des observations sur la condition des indigènes et la traite des nègres.",
      "En clôture, M. Decrais a détaillé les progrès coloniaux : au Congo, des concessions ont été accordées ; en Indo-Chine, le budget est en progression ; à Madagascar, la situation financière s'améliore sous l'administration du général Galliéni.",
      "La Chambre a finalement adopté le budget du chemin de fer et du port de la Réunion, ainsi que celui du chemin de fer du Soudan."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Justice",
    "title": "La Haute Cour - Vingt-sixième audience",
    "summary": "La 26e audience de la Haute Cour a été marquée par de violents incidents. MM. Brunet, Dubuc et Cailly ont été exclus pour leur attitude irrespectueuse envers la magistrature et la procédure judiciaire.",
    "paragraphs": [
      "L'audience a été des plus mouvementées. Après l'audition de témoins sur la manifestation d'Auteuil, des incidents ont éclaté lors du passage de M. de Dion, ponctués par les interruptions répétées de MM. Brunet et Cailly.",
      "Le procureur général a requis l'expulsion de MM. Brunet et Cailly en raison de leurs attitudes irrespectueuses et injurieuses envers la Cour.",
      "Après délibération, la Haute Cour a prononcé l'exclusion de M. Brunet pour quatre audiences, de M. Dubuc pour deux audiences, et de M. Cailly jusqu'au réquisitoire, assortie d'une peine de prison pour ce dernier.",
      "Le président Fallières, refusant de voir son autorité discrétionnaire contestée, a insisté sur le respect scrupuleux de la loi et la dignité nécessaire à la procédure judiciaire."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Deux jeunes filles asphyxiées à Caen",
    "summary": "Un drame domestique à Caen : deux jeunes domestiques de 17 et 18 ans ont péri asphyxiées dans leur chambre après avoir allumé un réchaud pour se protéger des rigueurs du froid hivernal.",
    "paragraphs": [
      "Ce matin, M. Burnouf, avocat, a été informé par son épouse que les deux jeunes domestiques à leur service ne répondaient pas. Monté dans leur chambre, il découvrit les deux malheureuses asphyxiées.",
      "Pour combattre le froid, ces jeunes filles avaient commis l'imprudence d'allumer un réchaud au milieu de leur pièce. Elles étaient âgées de dix-huit et dix-sept ans."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Administration Parisienne",
    "title": "Conseil Municipal de Paris",
    "summary": "Le Conseil Municipal de Paris a examiné l'état des travaux du Métropolitain et a voté une réforme de l'octroi sur les bières afin de favoriser la consommation et le commerce de la petite bière.",
    "paragraphs": [
      "Lors de la séance du 11 décembre, le Conseil a débattu d'un accident survenu sur un chantier du Métropolitain. Le directeur des travaux a rassuré l'assemblée quant à l'absence de conséquences graves et au respect du calendrier.",
      "Le Conseil a également adopté un nouveau régime pour l'octroi sur les bières, destiné à favoriser le commerce et la consommation de la petite bière à prix réduit."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Faits divers internationaux",
    "summary": "Dépêches internationales : incidents sanitaires à Bruxelles, explosion meurtrière en Espagne et tragique collision maritime dans la Manche.",
    "paragraphs": [
      "À Bruxelles, un chien enragé a mordu neuf personnes. Les victimes ont été immédiatement dirigées vers l'Institut Pasteur à Lille.",
      "À Santander (Espagne), une terrible explosion dans un bâtiment a causé la mort d'une personne et fait trois blessés.",
      "À Murcie (Espagne), une bombe a explosé au théâtre sans causer d'incidents graves, malgré la destruction partielle de l'édifice.",
      "Le vapeur Mabel-Grace a subi une collision avec un vapeur italien entre Boulogne et Folkestone, un accident ayant entraîné un mort et un blessé."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Chronique Théâtrale",
    "title": "La Conscience de l'Enfant au Théâtre-Français",
    "summary": "Au Théâtre-Français, la nouvelle pièce de M. Gaston Dévore, \"La Conscience de l'enfant\", offre une étude psychologique intense sur les compromissions morales, portée par le talent de M. Sylvain et des époux Worms.",
    "paragraphs": [
      "Le Théâtre-Français a donné la première représentation de La Conscience de l'enfant, pièce de M. Gaston Dévore.",
      "L'œuvre met en scène un homme d'affaires véreux, Montret, dont les agissements sont découverts par son beau-père, un ancien magistrat rigide. La pièce traite de la moralité, des compromissions et du rachat, avec une interprétation saluée de M. Sylvain, M. Worms et Mme Worms-Baretta."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incidents après une conférence de Maurice Barrès",
    "summary": "Une conférence de M. Maurice Barrès à la salle des Agriculteurs de France a été troublée par des altercations hostiles envers le Président. Cinq manifestants sont désormais poursuivis par la justice.",
    "paragraphs": [
      "De violents incidents ont éclaté hier soir à l'issue d'une conférence de M. Maurice Barrès à la salle des Agriculteurs de France. Des cris hostiles au Président de la République ont été lancés et une bagarre a éclaté lors de la sortie.",
      "Une dizaine d'arrestations ont été opérées, et cinq manifestants feront l'objet de poursuites."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "La folie d'un aiguilleur",
    "summary": "Sur la ligne de la Petite Ceinture, un aiguilleur a été surpris en pleine crise de démence, agitant un drapeau rouge et paralysant dangereusement la circulation des trains.",
    "paragraphs": [
      "Sur la ligne de la Petite Ceinture, le chef de gare a découvert son aiguilleur, Joseph Laguillier, en train de danser sur la voie en agitant un drapeau rouge, ce qui avait provoqué l'arrêt inopiné de plusieurs trains.",
      "L'aiguilleur, dans un état de démence, a été appréhendé par les autorités."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un individu aliéné bloque les trains",
    "summary": "En proie à une crise d'aliénation mentale, l'aiguilleur Laguillier a paralysé le trafic ferroviaire. Après une vive résistance, il a été transféré par la police à l'infirmerie spéciale du dépôt.",
    "paragraphs": [
      "Le service d'ordre s'est aperçu que le malheureux avait été subitement atteint d'aliénation mentale et qu'au cours de sa crise, il avait bloqué tous les trains.",
      "Il a été interpellé par des gardiens de la paix malgré une résistance désespérée, puis conduit au commissariat de police de la rue Berzéhus, d'où il a été transféré à l'infirmerie spéciale du dépôt par M. Ronhaud, commissaire de police du quartier des Épinettes.",
      "L'enquête ouverte a établi que Laguillier était un alcoolique invétéré."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "La fortune du pauvre Le Vasnier",
    "summary": "Un vieillard passant pour miséreux cachait une fortune. La femme ayant tenté de se l'approprier a été arrêtée, permettant la restitution des valeurs aux héritiers grâce à l'intervention du parquet.",
    "paragraphs": [
      "Au mois d'août dernier, habitait au numéro 17 de la rue Trézel un vieillard nommé Paul Le Vasnier, ancien clerc de notaire, qui passait pour un miséreux. Payant à grand peine le loyer de la chambre qu'il occupait et toujours mal vêtu, il inspirait la pitié de tous.",
      "Un beau matin, on s'enquit de lui ; il était mort subitement. Le commissaire de police du quartier, M. Rouffaute, en procédant aux constatations légales, découvrit dans sa paillasse une somme de 20 000 francs en or, billets et valeurs.",
      "Le parquet désigna M. Paul Malsellier comme curateur de cette succession. Lors de l'inventaire, celui-ci découvrit un livre de comptes portant une somme bien plus importante appartenant à Le Vasnier, mais les recherches demeurèrent infructueuses.",
      "Il y a quelques jours, le service de la Sûreté a reçu une lettre anonyme l'informant que Mme Mathieu détenait des valeurs. Mandaté par le juge, M. Humard s'est rendu rue Trézel et a retrouvé chez elle une somme importante représentée par des titres.",
      "Mme Mathieu a avoué avoir fouillé les effets de M. Le Vasnier et trouvé cette fortune sous des copeaux. Ne connaissant pas les héritiers, elle avait cru pouvoir se l'approprier. Elle a été envoyée au dépôt et les titres ont été remis à M. Malsellier pour les héritiers."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Justice",
    "title": "Descente de Justice chez un banquier",
    "summary": "Sur plainte de nombreux clients, le parquet a ouvert une instruction pour escroquerie contre un banquier de la rue Scribe. Le commissaire de police a procédé à la saisie de la comptabilité.",
    "paragraphs": [
      "À la suite de nombreuses plaintes, le parquet a chargé M. Schlumberger, juge d'instruction, d'ouvrir une procédure contre M. X., banquier rue Scribe, inculpé d'escroquerie.",
      "En vertu d'un mandat délivré par le magistrat, M. Roy, commissaire de police aux délégations judiciaires, s'est rendu dans les bureaux du banquier pour procéder à la saisie de la comptabilité et des livres de commerce."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tombé dans un égout",
    "summary": "Un homme d'une quarantaine d'années est tombé dans une tranchée de six mètres lors de travaux avenue de Saint-Ouen. Grièvement blessé, il a été hospitalisé à l'hôpital Bichat après les premiers soins.",
    "paragraphs": [
      "Hier soir, un homme d'une quarantaine d'années est tombé dans une tranchée profonde de six mètres, ouverte pour la construction d'un égout, face au numéro 127 de l'avenue de Saint-Ouen.",
      "Des gardiens de la paix et des passants se sont employés au sauvetage. L'inconnu, grièvement blessé, a été transporté à l'hôpital Bichat après avoir reçu les premiers soins dans une pharmacie. Une enquête est ouverte."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Désagréable surprise rue Michel-Bizot",
    "summary": "Un rentier a découvert son pavillon de la rue Michel-Bizot entièrement vidé de ses meubles à son retour de voyage. Le gardien, chargé des lieux, est activement recherché par les autorités.",
    "paragraphs": [
      "M. Emmanuel F., rentier âgé de vingt-huit ans, avait loué et richement meublé un pavillon rue Michel-Bizot avant de se rendre à Lyon. À son retour, avant-hier, il a constaté que tout le mobilier avait été dérobé.",
      "Le gardien chargé de l'entretien des lieux avait tout emporté. M. Emmanuel F. a déposé plainte auprès de M. Brunet, commissaire de police, qui recherche activement les auteurs de ce vol."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort de froid rue de Rivoli",
    "summary": "Un homme convenablement vêtu a succombé à une congestion due au froid rue de Rivoli. Le corps a été déposé au poste de police de la place Baudoyer dans l'attente de son identification.",
    "paragraphs": [
      "Hier matin, un monsieur convenablement vêtu s'est effondré rue de Rivoli, non loin de la rue François-Miron. Transporté en pharmacie, il a été déclaré mort par un médecin, victime d'une congestion causée par le froid.",
      "M. Durantou, commissaire de police, a ouvert une enquête pour identifier le défunt, sur lequel on n'a retrouvé que quelques cartes de visite. Le corps a été déposé au poste de police de la place Baudoyer."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accidents et faits divers en banlieue",
    "summary": "Chronique des événements de banlieue : accidents sur la glace à Bois-Colombes, nominations de rosières à Saint-Denis, trouble à l'ordre public à la Plaine Saint-Denis et accidents du travail.",
    "paragraphs": [
      "Bois-Colombes : Deux jeunes enfants, Eugène Ariste et Paul Bonuain, ont été blessés en glissant sur la glace dans un terrain vague longeant l'avenue d'Argenteuil.",
      "Saint-Denis : Les administrateurs du bureau de bienfaisance ont choisi les quatre rosières qui seront couronnées le jour de la Chandeleur grâce aux legs Belloy de Francières et Fleury : Gabrielle Busch, Marie-Blanche Feil, Fernande Blanchard et Anna Meyer.",
      "Plaine Saint-Denis : Jérôme Hapeyret, 24 ans, a semé le trouble dans un bal avenue de Paris. Armé d'un poignard, il a blessé l'agent Dedoux avant d'être maîtrisé et envoyé au Dépôt par M. D'Homme, commissaire de police.",
      "Pantin : M. Gustave Lamblin, employé de la Compagnie de l'Est, a été grièvement blessé par un wagon alors qu'il formait un train sur une voie de garage. Il a été transporté à l'hôpital Lariboisière.",
      "Saint-Mandé : Mme veuve Durget a légué par testament une somme à la ville pour constituer une rente au profit de trois vieillards nécessiteux.",
      "Charenton : En raison de la forte gelée, une aiguille de tramway s'est rompue, causant le déraillement d'un convoi rue Herbillon. Deux voyageurs ont été contusionnés."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Social",
    "title": "Bulletin du Travail : Les allumettiers",
    "summary": "M. Joubert, directeur général des manufactures de l'État, a reçu une délégation d'ouvriers allumettiers de Pantin et d'Aubervilliers. Le conseil syndical a reporté sa décision dans l'attente des résultats de cette entrevue.",
    "paragraphs": [
      "M. Joubert, directeur général des manufactures de l'État, a reçu en audience hier après-midi une délégation composée d'ouvriers allumettiers provenant des sites de Pantin et d'Aubervilliers.",
      "En conséquence de cette entrevue, le conseil syndical a pris la décision de reporter l'assemblée générale à ce soir, afin que les ouvriers puissent délibérer de la conduite à tenir en fonction des résultats obtenus lors de cette mission."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Social",
    "title": "Congrès des loueurs de voitures à Reims",
    "summary": "Le congrès des loueurs de voitures de France, tenu à Reims, a débattu de l'application de la circulaire 20 et de la réforme de l'impôt sur le commerce du louage pour une plus grande uniformité.",
    "paragraphs": [
      "Un congrès des loueurs de voitures de France s'est tenu à Reims, réunissant une soixantaine de délégués venus de tout le pays.",
      "L'assemblée a voté des vœux pressants pour l'application uniforme de la circulaire 20, qui concerne le signalement obligatoire des voitures, ainsi que pour l'établissement d'une nouvelle base de calcul concernant l'impôt sur le commerce du louage."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Malfaiteurs surpris à Clermont-Ferrand",
    "summary": "Une tentative de cambriolage à Clermont-Ferrand a dégénéré en agression. Le concierge et son épouse ont été blessés, mais les malfaiteurs ont fui sous les tirs d'un voisin. Une enquête judiciaire est ouverte.",
    "paragraphs": [
      "Une bande de malfaiteurs, surprise par le concierge alors qu'elle tentait de dévaliser un entrepôt à Clermont-Ferrand, a opposé une résistance violente.",
      "Au cours de la lutte qui s'ensuivit, le concierge et son épouse furent blessés à coups de stylet. Le notaire voisin, M. Denanard, intervint en tirant deux coups de revolver sans toutefois parvenir à atteindre les voleurs, qui prirent immédiatement la fuite. Une enquête est actuellement en cours."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Littérature",
    "title": "Les débuts littéraires d'Alexandre Dumas père",
    "summary": "Le Petit Parisien retrace les débuts d'Alexandre Dumas père, arrivé à Paris avec peu de moyens, et devenu par son travail acharné l'un des auteurs les plus prolifiques de son siècle.",
    "paragraphs": [
      "Le Petit Parisien rappelle les débuts humbles et courageux d'Alexandre Dumas père, débarqué à Paris avec seulement deux cent cinquante-trois francs en poche. Doté d'une santé robuste et d'une intelligence prodigieuse, il mena une existence laborieuse, travaillant le jour et étudiant assidûment, durant trois années, les chefs-d'œuvre de Shakespeare, Corneille, Molière, Calderon, Goethe et Schiller.",
      "Son succès éclatant survint lors de la représentation d'Henri III et sa Cour au Théâtre-Français, marquant le commencement de sa gloire. Dumas révolutionna le roman historique et s'imposa comme l'un des écrivains les plus féconds, signant plus de six cents ouvrages, dont les célèbres Monte-Cristo et Les Trois Mousquetaires, qui continuent de fasciner le public."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Feuilleton",
    "title": "Épilogue du roman Le Marquis et le Forçat",
    "summary": "Le marquis de Montalais, à l'article de la mort, obtient le pardon de Fabien Daubray. La réconciliation des deux familles est scellée par le mariage de Noëla de Montalais et de Jacques Châtel.",
    "paragraphs": [
      "Noëla de Montalais, en proie au deuil, aspire à quitter Paris pour regagner Angerville aux côtés de son grand-père, M. de Montalais, dont la santé décline et dont l'esprit sombre se perd désormais dans les souvenirs douloureux du passé.",
      "Le 21 mars, alors que Noëla s'active aux préparatifs du départ, M. de Montalais reçoit la visite inattendue du lieutenant Jacques Châtel, accompagné du conseiller de Virville et de Fabien Daubray, le père de Jacques, jadis victime d'une déplorable erreur judiciaire.",
      "Au cours d'une entrevue empreinte d'une profonde émotion, le marquis de Montalais, transfiguré par le remords, demande pardon à genoux à Fabien Daubray pour les souffrances jadis infligées. Apaisé, Fabien Daubray accorde son pardon et unit les mains de son fils Jacques et de Noëla.",
      "M. de Montalais donne sa bénédiction au mariage des jeunes gens avant de rendre son dernier soupir. Une année s'écoulera avant que Noëla de Montalais n'épouse Jacques Châtel."
    ]
  }
];
