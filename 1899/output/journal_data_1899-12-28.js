// Date: 1899-12-28
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-12-28 (Version Restaurée, 25 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Les Vieillards",
    "summary": "Un plaidoyer pour la solidarité envers les vieillards indigents. L'auteur souligne la nécessité d'une aide publique renforcée, citant l'exemple parisien et la proposition humaniste du docteur Larrivé.",
    "paragraphs": [
      "Il y a quelques jours, à propos de diverses propositions de loi dont le Parlement est saisi, je m'efforçais de montrer l'intérêt de premier ordre, l'intérêt patriotique qui s'attache à la conservation des nourrissons, de ceux qui seront un jour la jeunesse et la force de la France.",
      "Son attention s'est portée aussi sur les vieillards, infirmes ou indigents, et toutes les mesures qu'il prend pour soulager l'infortune de ceux qui ont vieilli dans le travail et la peine doivent être unanimement approuvées.",
      "Lorsqu'on lit l'histoire de la Révolution française, on trouve que le Directoire institua une fête dite « Fête des Vieillards », pour encourager la vertu et rendre hommage à la vieillesse.",
      "Le culte de la vieillesse est donc un sentiment bien français, mais la République ne se contente pas d'entretenir ce culte, elle s'est aussi préoccupée d'assurer aux vieillards peu fortunés de quoi manger.",
      "L'État doit à tous les citoyens une subsistance assurée, d'autant plus que l'individu aura contribué par son travail à la prospérité de la communauté.",
      "C'est dans les villes que ce genre d'infortunes se rencontre le plus. L'ouvrier d'industrie est plus rapidement cassé que le travailleur des champs, et si son salaire ne lui a pas permis d'économiser, il se retrouve dans le besoin.",
      "La Ville de Paris se distingue par les sacrifices qu'elle s'impose pour soulager la vieillesse indigente, avec plus de 23 000 vieillards secourus ou pensionnés.",
      "L'initiative des pouvoirs publics, secondée par celle de généreux donateurs comme Mme Favier, peut apporter non seulement des soulagements, mais aussi un rayon de soleil pour la fin d'une vie passée honnêtement dans le travail.",
      "Un docteur, M. Larrivé, propose d'étendre aux vieillards le système des enfants assistés, en les plaçant dans des familles laborieuses. La proposition mérite d'être examinée."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions - Grand Roman Inédit",
    "summary": "Paul Tavernier, en plein repas, questionne Crépinet sur le foyer Dufresne. Poussé par une curiosité malsaine, il s'introduit chez son ami et découvre les tourments intimes et les craintes financières de Suzanne.",
    "paragraphs": [
      "Paul Tavernier dégustait, en même temps que le rôti de bœuf, un verre de Bourgogne. Il interrogea Crépinet sur la situation à la Coudraie.",
      "Le bossu répondit que le ménage ne se portait guère bien, que madame était d'une humeur fière et monsieur quelque peu sauvage.",
      "Plus tard, Paul Tavernier, dévoré par une curiosité indiscrète, pénétra dans la chambre de son ami Dufresne durant son absence, faisant fi de ses scrupules habituels.",
      "Il y découvrit une lettre de Suzanne, l'épouse de Dufresne, exprimant son mépris pour les richesses matérielles, son angoisse face aux voyages fréquents de son époux à Paris, ainsi que ses craintes grandissantes concernant les risques pris aux jeux de la Bourse."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Social",
    "title": "Les Grèves de la Loire",
    "summary": "À Saint-Étienne, la grève des mineurs prend de l'ampleur. Malgré le déploiement des forces de l'ordre pour protéger les concessions, les ouvriers, soutenus par les tisseurs de la Haute-Loire, maintiennent le mouvement.",
    "paragraphs": [
      "À Saint-Étienne, trois mille mineurs réunis à la Bourse du travail ont résolu de manifester. Des patrouilles de gendarmes et de dragons empêchent l'accès aux concessions.",
      "La grève s'étend. Les tisseurs de la Haute-Loire font cause commune avec les Stéphanois et réclament un tarif élaboré par les patrons.",
      "Le citoyen Cotte, secrétaire du comité fédéral, engage les mineurs au calme tout en affirmant que le triomphe est certain.",
      "L'assemblée a voté à l'unanimité la continuation de la grève. Parallèlement, des renforts de gendarmerie arrivent de l'Allier, du Puy-de-Dôme et du Cantal."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Asphyxiés sous un Tunnel",
    "summary": "Un tragique accident ferroviaire s'est produit dans le tunnel de Prévenchères. Suite à une rupture d'attelage, le mécanicien et le chef de train furent asphyxiés par les fumées ; ce dernier a succombé à ses blessures.",
    "paragraphs": [
      "Un accident fort regrettable s'est produit sous le tunnel de Prévenchères : un train de marchandises est tombé en panne, immobilisé dans l'ouvrage à la suite d'une rupture d'attelage.",
      "Le mécanicien Giraud et le chef de train Étienne Peloru, prisonniers des fumées épaisses de la locomotive, ont été rapidement asphyxiés. Malgré les soins empressés qui lui furent prodigués dès sa sortie, le malheureux chef de train n'a pu être ramené à la vie."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Actualité Militaire",
    "title": "L'Enseigne Koun",
    "summary": "Mme Koun, mère de l'enseigne Joseph Koun tombé héroïquement à Quan-Chau-Wan, a reçu le récit des derniers instants de son fils. La famille se rend à Lorient pour célébrer sa mémoire lors d'un service funèbre solennel.",
    "paragraphs": [
      "Mme Koun, la mère de l'enseigne de vaisseau Joseph Koun, cruellement tombé sous les coups des forces chinoises à Quan-Chau-Wan, vient de recevoir une lettre émouvante du commandant du croiseur Descartes. Ce dernier y précise les circonstances tragiques et le courage exemplaire dont fit preuve son fils lors de l'engagement qui lui coûta la vie.",
      "Pour honorer la mémoire du jeune officier, la famille se rendra prochainement à Lorient. À cette occasion, un service funèbre sera célébré et un médaillon commémoratif sera solennellement inauguré, rappelant à tous le sacrifice de Joseph Koun pour la patrie."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Les Italiens à Marseille",
    "summary": "Un ouvrier marseillais, Étienne Rigaud, a trouvé la mort sous les balles à la sortie d'un débit de boissons. Deux de ses compagnons sont blessés. L'enquête progresse avec l'arrestation d'un marbrier nommé Ferrari.",
    "paragraphs": [
      "À Marseille, une vive émotion règne après qu'un ouvrier, nommé Étienne Rigaud, a été tué par balle et deux de ses amis blessés à la sortie d'un débit de boissons par une bande d'individus identifiés comme étant d'origine italienne.",
      "Les forces de l'ordre sont activement à la recherche des coupables. Une première interpellation, celle d'un marbrier répondant au nom de Ferrari, a été opérée par les agents de la sûreté."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "Situation dans les Républiques Boërs",
    "summary": "Les Anglais restent sur la défensive en attendant lord Roberts. Les Boërs multiplient les offensives, tandis que la sympathie pour leur cause progresse aux États-Unis.",
    "paragraphs": [
      "Bien que des renforts parviennent au Cap, les troupes britanniques demeurent sur la défensive, dans l'attente de l'arrivée de lord Roberts, prévue pour la fin janvier.",
      "Les Boërs, audacieux, multiplient les coups décisifs, notamment par des bombardements soutenus sur le camp de Modder-River ainsi que sur Ladysmith.",
      "Des incidents violents sont rapportés aux abords de la Tugela, où plusieurs avant-postes anglais ont été surpris et malmenés par des commandos boërs déterminés.",
      "Le soulèvement des Afrikanders semble contenu par la crainte de la confiscation des propriétés, tandis que, parallèlement, un important mouvement de sympathie pour la cause des Boërs croît aux États-Unis."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Politique",
    "title": "Procès de la Haute Cour",
    "summary": "La Haute Cour poursuit l'instruction contre les ligues. Le procureur général démontre l'entente préalable en vue du renversement de la République, détaillant les charges contre MM. Déroulède, Buffet et Guérin.",
    "paragraphs": [
      "MM. Déroulède, Buffet et Guérin font défaut à l'audience. Du côté du banc des juges, on note l'absence de MM. Bouffier, Barbedette et Frézout.",
      "Le procureur général a poursuivi la lecture des chefs d'accusation, s'attachant à démontrer l'entente préalable entre les différentes ligues dans le but avoué de renverser la République.",
      "M. le procureur général a détaillé les faits incriminés : discours royalistes, congrès de Montpellier, appels répétés à la force, incidents d'Auteuil et documents compromettants saisis lors des perquisitions.",
      "La discussion juridique s'est cristallisée sur la définition légale du complot. Le ministère public soutient que l'entente caractérisée en vue de détruire la forme du gouvernement suffit à constituer le crime.",
      "Après avoir requis l'abandon des poursuites contre six accusés jugés moins compromis, le procureur général a exposé les charges individuelles pesant sur les autres, notamment MM. Buffet et Déroulède.",
      "Concernant M. Guérin, l'accusation maintient les griefs relatifs à la détention illégale d'armes, la rébellion à main armée et la tentative d'assassinat commise lors des événements du fort Chabrol."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Justice",
    "title": "Mise en liberté de six accusés",
    "summary": "La Cour a prononcé l'acquittement et la mise en liberté immédiate de six accusés dont la cause a été disjointe. La sortie du quartier cellulaire s'est effectuée sous étroite surveillance policière.",
    "paragraphs": [
      "La Cour a fait droit aux réquisitions du procureur général visant à disjoindre la cause de six accusés : MM. Cailly, Brunet, de Fréchencourt, de Bourmont, de Chevilly et Baillière.",
      "Le président a aussitôt prononcé leur acquittement et ordonné leur mise en liberté immédiate, décision accueillie par les cris et l'hilarité des prévenus.",
      "La sortie des acquittés du quartier cellulaire du Luxembourg a été entourée d'un service d'ordre rigoureux, sous les yeux de nombreux amis et témoins venus assister à cet événement."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Conseil Municipal de Paris",
    "title": "Séances du conseil municipal et général",
    "summary": "Lors des séances du 27 décembre, les conseils municipal et général ont voté divers rapports budgétaires, des subventions pour les sociétés de tir et la création de nouvelles lignes de tramways.",
    "paragraphs": [
      "Lors des séances du 27 décembre, le conseil a approuvé divers rapports budgétaires et administratifs, notamment relatifs au prix vélocipédique de Vincennes et aux subventions allouées aux crèches.",
      "L'assemblée a également voté la création ainsi que le prolongement de plusieurs lignes de tramways à travers Paris.",
      "Le conseil général a, de son côté, voté des subventions en faveur des sociétés de tir et de gymnastique, ainsi que des allocations destinées aux employés départementaux."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Sciences",
    "title": "Les usages du sérum",
    "summary": "Les avancées pastoriennes se multiplient : le docteur Metchnikoff explore un sérum contre la sénescence, tandis que l'Académie de médecine étudie une thérapie prometteuse contre les ravages de l'alcoolisme.",
    "paragraphs": [
      "La science explore avec ardeur de nouvelles voies suivant la méthode pastorienne. Le docteur Metchnikoff mène actuellement, avec une rigueur exemplaire, des travaux sur un sérum destiné à retarder la décrépitude inhérente à la vieillesse.",
      "Par ailleurs, l'Académie de médecine a reçu une communication importante des docteurs Sappelier et Thébault concernant un nouveau sérum thérapeutique, dont les résultats cliniques offrent un espoir sérieux pour le traitement de l'alcoolisme."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Panique dans une église",
    "summary": "Un accident survenu à l'église Saint-Pierre d'Anser a provoqué une panique meurtrière parmi les fidèles. Une femme grièvement brûlée a déclenché une débandade causant de nombreux blessés.",
    "paragraphs": [
      "Une vive et terrible panique s'est produite hier au sein de l'église Saint-Pierre, à Anser, après qu'une paroissienne a pris feu accidentellement. La foule, saisie d'effroi et croyant à un incendie généralisé, s'est précipitée vers les issues, causant des piétinements dramatiques.",
      "Le calme revenu, on a dénombré plusieurs blessés. La malheureuse victime, dont les vêtements s'étaient embrasés, demeure dans un état désespéré."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame passionnel à Pau",
    "summary": "Un drame sanglant a ensanglanté la région d'Arzacq : un maréchal-ferrant, M. Puyoo, a mortellement blessé son voisin M. Descomps, surpris en flagrant délit avec son épouse. L'auteur a été écroué.",
    "paragraphs": [
      "Un maréchal-ferrant de la région d'Arzacq, M. Puyoo, a mortellement blessé un voisin, M. Descomps, en le surprenant en flagrant délit d'adultère avec sa femme. L'épouse a également été sérieusement blessée lors de la rixe qui s'en est suivie.",
      "Prévenus par le voisinage alerté par les cris, les gendarmes ont procédé à l'arrestation immédiate de M. Puyoo, qui a été conduit sous escorte à la prison d'Orthez."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Culture",
    "title": "Les Misérables au théâtre",
    "summary": "Le chef-d'œuvre de Victor Hugo revit sur scène. Dans cette adaptation nerveuse et dynamique, le fils du poète parvient à condenser l'épopée poignante de Jean Valjean en une soirée mémorable.",
    "paragraphs": [
      "Le fils de Victor Hugo vient de signer une adaptation remarquée du chef-d'œuvre littéraire pour la scène parisienne. Cette version, habilement resserrée et d'un dynamisme constant, permet de retracer l'épopée douloureuse et poignante de Jean Valjean en une seule représentation."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Critique de la pièce Les Misérables",
    "summary": "Triomphe dramatique pour l'adaptation des Misérables. M. Coquelin livre une interprétation magistrale de Jean Valjean, soutenue par une mise en scène sobre et une musique de scène fort à propos.",
    "paragraphs": [
      "L'ancien forçat, rongé par le remords, voit son destin basculer lorsqu'il se laisse persuader de secourir une jeune fille. Thénardier, secondé par de sinistres complices, tente de contraindre Jean Valjean à signer un aveu par la violence, mais ce dernier déjoue ses plans en pleine émeute parisienne.",
      "De retour à son domicile, il surprend Cosette en conversation tendre avec le jeune Marius. Déterminé à s'éloigner pour le bonheur de sa protégée, il annonce son départ, laissant Marius, désolé et inquiet, rejoindre ses compagnons sur les barricades.",
      "Au cœur de la révolte, Javert, qui s'était infiltré parmi les émeutiers, est démasqué et condamné à mort par ces derniers. Jean Valjean intervient alors avec noblesse pour le sauver et lui rendre la liberté. Javert, incapable d'accepter cette grâce de celui qu'il a traqué toute sa vie, se donne la mort. Sur la barricade, Eponine meurt en protégeant Marius, qui est lui-même grièvement blessé et secouru, in extremis, par Jean Valjean.",
      "Dans l'épilogue, Jean Valjean s'éteint après avoir béni l'union de Marius et Cosette, leur remettant, en signe de lègue spirituel, les flambeaux de l'évêque Myriel. Il expire en levant les bras vers cette figure tutélaire de sa rédemption.",
      "L'impression produite par ces tableaux est profonde. M. Coquelin est superbe, d'une justesse émouvante dans le rôle de Jean Valjean. La mise en scène est digne de l'œuvre et du grand nom qui plane sur elle. M. André Wormser a composé une musique de scène appropriée, faisant preuve d'une grande mesure."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort dans une baignoire",
    "summary": "Un homme de trente-cinq ans a été découvert sans vie dans un établissement de bains de l'avenue de Versailles. Le décès, causé par une congestion, fait suite à une lettre annonçant son intention de se suicider.",
    "paragraphs": [
      "Hier après-midi, un employé d'un établissement de bains situé au 197 bis de l'avenue de Versailles a trouvé mort, dans une baignoire, un individu âgé de trente-cinq ans environ.",
      "D'après un médecin, le décès est dû à une congestion occasionnée par un bain pris trop tôt après le repas. Une lettre signée Collot annonçait à sa femme son intention de se donner la mort. Le corps a été transporté à la morgue par le commissaire de police du quartier d'Auteuil."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un hôtel dévalisé",
    "summary": "L'hôtel particulier de Mme Lecourt, situé rue du Général-Appert, a été pillé en l'absence de sa propriétaire. Meubles défoncés et objets d'art disparus ; une enquête est ouverte sur cet acte d'audace.",
    "paragraphs": [
      "Un vol important a été découvert rue du Général-Appert. L'hôtel de Mme Lecourt, alors absente de Paris, a été mis au pillage par des malfaiteurs.",
      "M. le marquis de Viaris, voisin, a constaté que la porte était ouverte et que toutes les pièces avaient été visitées. Les meubles ont été défoncés, et des objets d'art ainsi que de l'argenterie ont disparu. La police enquête sur cet acte d'une audace inconcevable."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le souper interrompu",
    "summary": "Une vive altercation a éclaté dans le quartier Notre-Dame entre Cécile Lavaud et son ancien amant. Ce dernier, armé d'un couteau, a été mis en fuite par la jeune femme avant d'être appréhendé par les autorités.",
    "paragraphs": [
      "Cécile Lavaud, dite la Grande-Duchesse, a vu son retour dans les bars du quartier Notre-Dame troublé par une agression.",
      "Son ancien amant, Charles Mesplès, armé d'un couteau, a surgi lors d'un souper. Cécile Lavaud s'est défendue en jetant du vin chaud au visage de son agresseur. Ce dernier a dû se réfugier au poste de police, tandis que Cécile Lavaud a été arrêtée par le commissaire Berthelot."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers dans les communes limitrophes",
    "summary": "Le panorama des faits divers dans la petite couronne : agressions, accidents tragiques, incendies et drames domestiques marquent la chronique judiciaire de cette journée en banlieue parisienne.",
    "paragraphs": [
      "Boulogne-sur-Seine : M. Bouren, pris d'un accès de folie, a tenté de précipiter sa femme par la fenêtre. Il a été conduit à l'infirmerie du dépôt.",
      "Neuilly-sur-Seine : Un charretier, Paul Roulaud, est décédé après une chute accidentelle de son tombereau rue de Longchamp.",
      "Levallois-Perret : M. Théophile Brichard a été grièvement blessé en tentant de sauver sa femme lors d'un embarras de voitures. Il est soigné à l'hôpital Beaujon.",
      "Asnières : Alexandre Lornais, âgé de quinze ans, a été renversé par une voiture de laitier place Voltaire et grièvement blessé.",
      "Clichy : Le jeune Marcel Landrevy s'est gravement blessé en grimpant sur une grille de propriété rue Fournier.",
      "Puteaux-Saint-Denis : Mme Marie-Louise Lebruquer est morte asphyxiée après une chute accidentelle causée par une syncope.",
      "Puteaux : M. André Masson a été agressé et volé par plusieurs individus alors qu'il rentrait chez lui.",
      "Aubervilliers : M. Albert Cavaldeau a mis en fuite des cambrioleurs et a réussi à faire arrêter l'un d'eux, Félix Tégotni.",
      "Aulnay-les-Bondy : M. Pierre Lecomte, souffrant d'une maladie incurable, s'est donné la mort par pendaison.",
      "Montreuil-sous-Bois : Le cadavre de M. Désiré Gambon a été découvert rue Alexis-Lepère ; une enquête est ouverte.",
      "Vincennes : Mme veuve Gonzalez a été retrouvée morte à son domicile, victime d'une chute accidentelle.",
      "Ivry : Le cadavre de M. Jules Plassereau a été découvert au bas d'un talus après sa disparition. Une enquête est en cours pour déterminer les circonstances du drame.",
      "Rambouillet : Un incendie a détruit trois meules de blé appartenant à M. Henri, à la Celle-les-Bordes."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Littérature",
    "title": "Livres d'étrennes",
    "summary": "La saison des cadeaux approche avec des publications illustrées sur Pompéi et le Paris pittoresque, accompagnées d'une riche sélection d'ouvrages destinés à la jeunesse et à l'éducation maternelle.",
    "paragraphs": [
      "Parmi les nouveautés, citons 'Pompéi, la ville, les mœurs, les arts' par Pierre Gusman et 'Paris pittoresque' par Louis Barron.",
      "La Société Française d'Éditions d'Art propose également une 'Nouvelle Collection pour la Jeunesse' et la 'Bibliothèque de l'Éducation maternelle' avec des ouvrages abondamment illustrés pour enfants."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Départements",
    "title": "Faits divers en province",
    "summary": "Chronique judiciaire en province : un drame conjugal mortel à Rhuis, un grave accident ferroviaire à la gare de Margival, et une célébration ouvrière fraternelle chez les époux Richard à Dijon.",
    "paragraphs": [
      "Rhuis : Une femme enceinte, Mme Bourg, est décédée après avoir été violemment frappée par un individu nommé Émile Louvet lors d'une altercation au poste de refuge.",
      "Villers-Cotterêts : M. Gourdin a été amputé d'un pied après un accident de train survenu en gare de Margival.",
      "Dijon : La société locale a célébré une fête du travail au domicile de M. et Mme Lucien Richard, marquant ainsi les liens sociaux avec leurs ouvriers."
    ]
  },
  {
    "id": 22,
    "page": 4,
    "category": "Transports",
    "title": "Départs et Arrivées des Paquebots",
    "summary": "Mouvements maritimes du 25 décembre : état des arrivées et départs des paquebots de la Compagnie Générale Transatlantique et des Messageries Maritimes à travers les ports et escales du globe.",
    "paragraphs": [
      "Le paquebot Lafayette (C.G.T.), venant de Colon et escales, est arrivé à Saint-Nazaire le 25 décembre à 8 heures du matin.",
      "Le paquebot Labrador (C.G.T.) est parti de Colon le 24 décembre pour Bordeaux-Pauillac, le Havre et escales.",
      "Le Chili (M.M.), à destination du Brésil et de La Plata, est arrivé à Montevideo le 25, à midi.",
      "Le Portugal (M.M.), venant du Brésil et de La Plata, a quitté Pernambuco le 25, à 11 heures du matin.",
      "L'Annam (M.M.), venant de l'Indo-Chine, a quitté Aden le 25, à 3 heures du matin.",
      "L'Armand-Béhic (M.M.), venant d'Australie, a quitté Suez le 25, à onze heures du matin.",
      "Le Peï-Ho (M.M.), venant de Maurice, de La Réunion et de Madagascar, est arrivé à Marseille le 25, à 6 heures du soir."
    ]
  },
  {
    "id": 23,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les tragédies de l'amour",
    "summary": "Après une errance épuisante, les naufragés de la Minerve sont secourus par le marquis de Vivarez. À Clisson, Michelle Soubise sombre dans la mélancolie après la naissance de sa fille, tandis que les Girodias rentrent.",
    "paragraphs": [
      "Le radeau vogue au gré des flots. Les naufragés, épuisés, meurent de misère, de soif et de faim. Malaquin donne quelques signes de vie et se traîne jusqu'à la barrique pour boire de l'eau croupie.",
      "Soudain son visage s'anime. Une voile apparaît à l'horizon. C'est le salut. Dans leur sommeil de mort, les autres entendent le cri de joie : « Une voile ! une voile ! ».",
      "La voile grandit, les mâts se dessinent. Le navire est le sauveur. Les naufragés reconnaissent la Minerve, la goélette qui les a poursuivis mystérieusement depuis Le Havre. À son bord, le marquis de Vivarez.",
      "Un quart d'heure après, les naufragés étaient transportés à bord de la Minerve, où ils trouvaient les soins les plus empressés.",
      "L'hiver était passé. Le printemps était revenu pendant tous ces événements, et la jolie campagne des environs de Clisson resplendissait.",
      "Michelle Soubise n'avait pas quitté la maison des Grandes-Roches. Sa folie était toujours la même, douce et presque tendre. Mais les deux derniers mois de sa grossesse, avril et mai, furent pénibles, très douloureux.",
      "L'événement eut lieu dans le courant de juin. Michelle accoucha d'une fille et tomba dans un anéantissement absolu. Enfin elle parut reprendre vie, mais sa raison ne revenait pas.",
      "Des mois se passèrent, lorsque tout à coup les Girodias reparurent sans avoir prévenu personne de leur brusque retour. En même temps, Villefort et M. de Vivarez rentraient au château."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Agriculture",
    "title": "Bulletin des Marchés de Fourrages",
    "summary": "Compte-rendu du marché de Paris-La Chapelle au 27 décembre : les intempéries ralentissent les transactions, mais les cours des foins et pailles demeurent fermes et soutenus.",
    "paragraphs": [
      "Paris-La Chapelle, 27 décembre. Marché difficile en raison de la pluie. Les affaires sont ralenties, mais les prix restent soutenus sur les pailles et les fourrages.",
      "Le foin, la paille de seigle et d'avoine, ainsi que la luzerne, voient leurs cours varier, les frais de déchargement, d'octroi et de camionnage demeurant à la charge de l'acheteur."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Agriculture",
    "title": "Marché des Pommes de Terre",
    "summary": "Marché parisien des pommes de terre au 21 décembre : le volume important des offres entraîne un fléchissement général des cours sur les variétés courantes.",
    "paragraphs": [
      "Paris, 21 décembre. Quelques transactions ont été réalisées aujourd'hui, mais, par suite d'offres assez nombreuses, les prix ont fléchi.",
      "La Hollande a été payée 75 francs, la Saucisse rouge du Gâtinais de 80 à 85 francs, et la Magnum Bonum de 60 à 65 francs."
    ]
  }
];
