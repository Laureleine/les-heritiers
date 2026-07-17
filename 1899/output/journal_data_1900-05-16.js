// Date: 1900-05-16
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-05-16 (Version Restaurée, 42 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Le fléau de la tuberculose",
    "summary": "La tuberculose, véritable fléau social, frappe un cinquième de la population parisienne. Face à ce péril meurtrier, les sommités médicales appellent à une prophylaxie rigoureuse et une action étatique concertée.",
    "paragraphs": [
      "C'est un fait reconnu que, de toutes les maladies auxquelles l'espèce humaine est exposée, la tuberculose est la plus répandue et la plus meurtrière. Des statistiques récentes ont établi qu'elle entrait pour un sixième dans la mortalité générale du globe et pour un cinquième dans celle de Paris.",
      "Il s'agit bien, comme on le voit, d'un véritable fléau social, et ce fléau est d'autant plus redoutable qu'il attaque les sujets des deux sexes en pleine jeunesse. M. Jules Rochard souligne le coût humain et financier immense de cette maladie pour la France, estimé à plus d'un demi-milliard de francs par an.",
      "La maladie touche toutes les nations et se propage avec une virulence particulière dans les terres vierges comme l'Amérique du Nord ou l'Océanie. Face à ce péril, l'Italie a convoqué un grand congrès international à Naples où les sommités médicales ont appelé à une action énergique des États.",
      "M. le professeur Landouzy a proposé un programme de réformes incluant l'élevage scientifique, l'éducation physique, l'hygiène codifiée et la création de sanatoria. Les congressistes ont également discuté de mesures prophylactiques, comme la tenue de registres sanitaires pour les immeubles ou l'interdiction de cracher dans les lieux publics.",
      "Les recherches sur des traitements, comme le sérum de Koch ou les nouveaux travaux des docteurs Héricourt et Charles Richet, se poursuivent, bien que la prophylaxie reste actuellement la meilleure arme contre la progression du fléau."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Le secret du Docteur",
    "summary": "Gabrielle clame l'innocence de Michel, affirmant avoir été à ses côtés lors des faits, malgré l'hostilité grandissante de la comtesse de Saint-Amand qui tente de discréditer son témoignage.",
    "paragraphs": [
      "Le visage de Gabrielle subitement rayonna. De Précomtal ne comprit rien à cette rapide expression de bonheur. Elle affirma catégoriquement que Justin Garros et le bouvier se trompaient au sujet de Michel.",
      "Gabrielle soutint que Michel n'était pas dans le chemin de traverse à deux heures et demie du matin, car il était avec elle. Elle détailla leur rencontre sur la terrasse du château de Syphorès et leur entretien dans le massif du grand cèdre.",
      "M. de Précomtal douta de la crédibilité de ce témoignage face au procureur et à son cousin. Il révéla même que la belle-mère de Gabrielle, la comtesse Marguerite de Saint-Amand, tenait des propos hostiles envers Michel, le qualifiant d'aventurier ayant hypnotisé sa belle-fille.",
      "En apprenant la trahison de sa belle-mère, Gabrielle fut accablée, voyant ses espoirs de vérité s'effondrer devant l'influence de Marguerite."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique",
    "title": "Conseil des ministres",
    "summary": "Sous la présidence de M. Loubet, le Conseil des ministres a analysé les résultats électoraux favorables à l'Union, tout en validant divers décrets relatifs aux affaires coloniales et à la réglementation de la pêche.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin, à l'Élysée, sous la présidence de M. Loubet. Le président du Conseil a pris connaissance des résultats des élections municipales qui confirment le succès des candidatures d'union et de défense républicaines.",
      "Le ministre des Colonies a fait signer un décret prolongeant le privilège de la Banque d'Indo-Chine. Le ministre de l'Agriculture a préparé un projet de loi autorisant la pêche à la ligne flottante le dimanche durant les périodes d'interdiction."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame navrant rue des Coutures-Saint-Gervais",
    "summary": "Acculée par une misère noire et l'abandon, une ouvrière a tenté de mettre fin à ses jours avec son enfant, provoquant un drame déchirant au cœur du quartier des Archives.",
    "paragraphs": [
      "Les habitants du quartier des Archives ont découvert un drame navrant dans un logement de la rue des Coutures-Saint-Gervais. Une ouvrière, Mme Baulard, a tenté de se donner la mort avec son enfant par crainte de la misère.",
      "Abandonnée par son mari et sans travail, la malheureuse a fini par boucher les interstices de sa chambre pour s'asphyxier au charbon. Son enfant est décédé, et elle-même a été transportée à l'hôpital Andral dans un état désespéré.",
      "Une lettre retrouvée sur place, datée du 14 mai, expose le désespoir de cette femme qui ne pouvait plus nourrir son fils après quarante-huit heures de privation totale."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Justice",
    "title": "Enquête sur l'affaire de la comtesse de Martel",
    "summary": "La sûreté poursuit ses investigations sur le rapt de Mme de Martel. Malgré de nouveaux témoignages et les auditions devant le juge Boucard, les circonstances exactes de l'enlèvement demeurent mystérieuses.",
    "paragraphs": [
      "Le service de la sûreté poursuit ses recherches sur le rapt de Mme de Martel. Un employé d'octroi de la porte de Bercy a rapporté avoir vu, le soir de l'enlèvement, un coupé suspect conduit par un cocher dissimulé.",
      "L'enquête s'est également penchée sur la déclaration de Mme de Martel concernant les carottes qu'elle aurait mangées en captivité. Les autorités pensent qu'il s'agissait en réalité de betteraves sucrées trouvées dans un champ voisin.",
      "Mme de Martel a renouvelé ses déclarations devant le juge d'instruction M. Henri Boucard, confirmant que ses ravisseurs étaient au nombre de trois, tout en persistant à ne pas porter plainte."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "Incendie au Château-d'Eau",
    "summary": "Un début d'incendie s'est déclaré hier dans les sous-sols du Château-d'Eau. Rapidement maîtrisé par les pompiers, le sinistre n'a fait aucune victime et n'a pas interrompu les travaux de l'Exposition.",
    "paragraphs": [
      "Hier, un peu avant midi, un incendie s'est déclaré dans la partie inférieure du Château-d'Eau. Le feu a rapidement été circonscrit par les pompiers sans causer de blessés.",
      "Les dégâts matériels, principalement sur les câblages électriques et le système de distribution, sont importants. M. Alfred Picard a précisé que le feu ne semble pas provenir d'un court-circuit des machines, mais d'une origine restant à déterminer dans les sous-sols.",
      "L'incident n'a pas interrompu les travaux sur le site, l'activité ayant repris dès l'après-midi."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "Le pavillon allemand",
    "summary": "Inspiré de l'architecture médiévale de Nuremberg, le pavillon allemand impressionne par ses façades ouvragées et son vestibule abritant le buste de Guillaume II et des souvenirs impériaux.",
    "paragraphs": [
      "Le pavillon allemand, inspiré de l'architecture médiévale de Nuremberg, se distingue par ses façades colorées et son clocher scintillant. Le vestibule, solennel et richement décoré, abrite un buste de Guillaume II.",
      "Le pavillon présente de nombreuses reliques et photographies de la famille impériale, mettant en valeur la figure du Kaiser et celle du Kronprinz."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Le pavillon royal de Frédéric le Grand",
    "summary": "Le pavillon royal expose les trésors de Frédéric le Grand dans des salons luxueux. Une élite politique a salué cette collection unique, dont l'accès restera réservé aux détenteurs de cartes spéciales.",
    "paragraphs": [
      "La collection de Frédéric le Grand, les tableaux et les médaillons de Watteau, de Lancret, de Coypel, de Pater et de Van Loo occupent les luxueux salons de réception du deuxième étage ainsi que le cabinet de travail où l'on remarque le bureau admirable de Charles XII, des Gobelins Henri IV et de Louis XVI, donnés par des rois au monarque prussien.",
      "Les toiles décoratives abondent sur les parois, les groupes sculpturaux alternent avec les étagères de bibelots uniques envoyés de la cour de Berlin et du château de Potsdam. Les meubles authentiques viennent tous des résidences impériales.",
      "Les artistes les plus illustres des académies allemandes ont tenu à collaborer à la décoration intérieure du pavillon. Certaines peintures murales, des plinthes décoratives et des panneaux entiers seront emportés à la fin de l'Exposition.",
      "L'élite de la société et une foule de notabilités du monde politique ont défilé durant deux heures à travers les salles. Les félicitations ont été unanimes et les remerciements exprimés au nom de la France par M. Alfred Picard et M. François Arago ont récompensé les délégués allemands.",
      "Ajoutons pour terminer que les salons du roi Frédéric ne seront jamais ouverts à tous les visiteurs. Des cartes spéciales, délivrées avec la plus parfaite discrétion par le commissariat général allemand, permettront seules l'accès. Tout le rez-de-chaussée du pavillon sera ouvert aujourd'hui même au public."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Le Pavillon de Turquie",
    "summary": "Le pavillon ottoman, inauguré officiellement hier, témoigne de la vitalité industrielle de la Turquie. Il abrite de nombreux trésors artistiques et a reçu un accueil brillant des autorités françaises.",
    "paragraphs": [
      "La coopération turque à l'Exposition universelle a pris dès le début le double caractère d'un hommage rendu au sultan et d'une sérieuse manifestation industrielle et commerciale. Le pavillon ottoman de la rue des Nations, ouvert officiellement hier après-midi, a été édifié par les soins des sujets d'Abd-ul-Hamid résidant en France.",
      "Il contient de véritables trésors artistiques et des produits manufacturés qui font bien augurer du relèvement économique prédit à la Turquie par nombre de spécialistes contemporains.",
      "S. E. Mounir-Bey, ambassadeur de Turquie, assisté du commissaire général Chesnel-Bey, a reçu les invités venus en foule. MM. Alfred Picard et François Arago ainsi que le haut personnel de l'Exposition étaient présents. La réception fort brillante s'est prolongée jusqu'à six heures du soir.",
      "Le public attendra quelques jours encore, jusqu'à dimanche prochain, l'ouverture effective du palais où quelques arrangements intérieurs restent encore à terminer."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Actualités militaires",
    "title": "Les Officiers de marine à l'Exposition",
    "summary": "Le ministère de la Marine autorise les officiers et assimilés à prendre quinze jours de permission, avec solde, pour visiter l'Exposition universelle, sous réserve de la continuité du service.",
    "paragraphs": [
      "Le ministre de la Marine vient d'autoriser les préfets maritimes, les commandants des escadres et les directeurs des établissements de la marine hors des ports, à accorder des permissions pour Paris, avec jouissance de la solde de présence, d'une durée maxima de quinze jours aux officiers et assimilés des différents corps de la marine pour leur permettre de visiter l'Exposition universelle.",
      "Ces permissions seront accordées sous la réserve expresse qu'elles ne gêneront nullement la marche régulière du service."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Les entrées à l'Exposition",
    "summary": "Malgré un refroidissement subit de la température, l'Exposition Universelle connaît une belle fréquentation avec 93 173 entrées enregistrées, dont 4 687 visiteurs à l'annexe de Vincennes.",
    "paragraphs": [
      "Le nombre des visiteurs a été plus grand qu'on ne pouvait l'espérer en raison de l'abaissement anormal et subit de la température.",
      "Le service du contrôle général donne, pour cette journée, le total de 93 173 entrées, dont 4 687 visiteurs pour l'annexe de Vincennes."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Inauguration de l'annexe de Vincennes par les États-Unis",
    "summary": "M. Horace Porter, ambassadeur des États-Unis, a inauguré les sections américaines à Vincennes. Après les allocutions d'usage, le cortège a visité les halls des machines-outils, de l'automobile et de la vélocipédie.",
    "paragraphs": [
      "M. Horace Porter, ambassadeur des États-Unis à Paris, a inauguré hier, à trois heures, les sections américaines de l'annexe de Vincennes.",
      "Les invités ont été conduits au pont de Charenton par un bateau spécial, puis par voitures jusqu'à l'annexe où le cortège s'est rendu à l'entrée de l'immense hall des machines-outils.",
      "La musique a joué l'hymne national américain, puis la Marseillaise. Après les allocutions de M. Peck et de l'ambassadeur Horace Porter, le cortège a parcouru les sections de l'automobilisme, de la vélocipédie et des chemins de fer.",
      "On annonce pour dimanche prochain la première fête de nuit à l'annexe de Vincennes."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Les succès du général Buller et l'occupation de Dundee",
    "summary": "Les forces britanniques progressent au Transvaal. Suite à l'évacuation des positions boers dans le Biggars Berg, les troupes du général Buller ont officiellement occupé la ville de Dundee le 15 mai.",
    "paragraphs": [
      "Des dépêches relatives aux succès obtenus par le général Buller dans la région du Biggars Berg indiquent que les Boers ont évacué leurs positions. Le général Buller s'est avancé vers Waschbank, Help-Makaar et Dundee.",
      "Le War Office publie les rapports de Buller confirmant le repli des Boers et la progression de ses troupes avec des pertes légères.",
      "Le 15 mai, les troupes britanniques ont occupé la ville de Dundee. Les charbonnages sont en bon état, mais les maisons ont été pillées."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Informations diverses sur le conflit",
    "summary": "Le conflit se poursuit : les soumissions croissent autour de Ladybrand, Pretoria s'inquiète du transit portugais, et un commandant boer s'est audacieusement évadé de l'île de Sainte-Hélène.",
    "paragraphs": [
      "Autour de Ladybrand, de nombreux Boers font leur soumission au général Rundle. À Mafeking, les Boers ont été cernés lors d'une attaque.",
      "À Pretoria, le gouvernement organise la défense et discute du refus portugais de laisser transiter les vivres. Des rumeurs circulent sur une demande de protectorat américain par les républiques boers.",
      "Un commandant boer, prisonnier des Anglais, a réussi à s'évader de Sainte-Hélène et est arrivé à Tarragone."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Séance mouvementée au Parlement italien",
    "summary": "La Chambre italienne est en pleine tourmente : l'opposition de l'extrême-gauche au nouveau règlement a provoqué un tumulte marqué par des chants patriotiques, laissant craindre une dissolution prochaine.",
    "paragraphs": [
      "La séance de la Chambre italienne a été des plus mouvementées en raison de l'opposition de l'extrême-gauche au nouveau règlement voté par la majorité. Tambourinages sur les bancs et chants patriotiques ont marqué la journée. Beaucoup croient à une dissolution imminente de la Chambre."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Une tragique noyade près de Rome",
    "summary": "À Robellio, près de Rome, la fête de Sainte-Lucie a viré au drame : deux barques ont chaviré sur le lac Vico, causant la noyade de près de quarante personnes. Treize survivants ont pu être secourus.",
    "paragraphs": [
      "Un grave accident a eu lieu à Robellio, près de Rome, lors de la fête de Sainte-Lucie. Deux barques ont chaviré sur les eaux du lac Vico. Le bilan est lourd : trente à quarante passagers ont péri noyés ; treize personnes seulement ont pu être arrachées à la mort."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Météo",
    "title": "Chutes de neige en Allemagne",
    "summary": "Le mois de mai connaît une météo rigoureuse en Allemagne. Des chutes de neige abondantes ont été signalées à Leipzig et à Chemnitz, alors que les températures avoisinent désormais le point de congélation.",
    "paragraphs": [
      "Une neige abondante est tombée sur les villes de Leipzig et de Chemnitz en ce 15 mai. Un refroidissement soudain accompagne ces précipitations, la température avoisinant désormais le zéro degré."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Exploration",
    "title": "Expédition du Daily Telegraph : du Cap au Caire",
    "summary": "M. Lionel Déclé confirme la progression de l'expédition. La situation demeure préoccupante au nord du lac Tanganika, où les forces allemandes auraient sommé les officiers belges d'évacuer leurs postes.",
    "paragraphs": [
      "M. Lionel Déclé annonce que l'expédition a accompli la première partie de son périple. La situation demeure toutefois critique au nord du lac Tanganika : les autorités allemandes auraient occupé 3 000 milles carrés de territoire congolais, sommant les officiers belges d'évacuer leurs postes respectifs."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Santé publique",
    "title": "Le point sur la famine et l'épidémie",
    "summary": "Londres annonce une baisse des effectifs dans les camps de secours indiens suite à une épidémie de choléra. Parallèlement, la situation sanitaire à Maurice et Brisbane reste sous surveillance étroite.",
    "paragraphs": [
      "À Londres, le secrétaire de l'Inde annonce une diminution du nombre d'indigents à charge du budget. Cette baisse est malheureusement imputable à l'épidémie de choléra, qui a contraint les autorités à procéder à la fermeture forcée des camps de secours.",
      "Concernant les foyers de peste, aucun nouveau cas n'a été signalé à l'île Maurice. En revanche, quatre cas ont été officiellement constatés à Brisbane."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Mouvement judiciaire",
    "title": "Nominations au sein de la magistrature",
    "summary": "Le Journal Officiel de ce jour entérine un vaste remaniement au sein de la magistrature française, officialisant de nombreuses nominations de présidents de chambres et de procureurs dans divers tribunaux de France.",
    "paragraphs": [
      "Le Journal Officiel publie ce matin une longue liste de nominations et de changements de postes concernant les présidents de chambres, conseillers et procureurs de la République à travers plusieurs tribunaux de France, et notamment à Poitiers, Montpellier, Aix, Foix et Sarlat."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Nécrologie",
    "title": "Obsèques du vice-amiral Zédé",
    "summary": "Les obsèques du vice-amiral Zédé, ancien préfet maritime de Brest, ont été célébrées solennellement au Relecq-Kerhuon, en présence de nombreuses personnalités civiles et militaires.",
    "paragraphs": [
      "Les obsèques du vice-amiral Zédé, ancien préfet maritime de Brest, ont été célébrées ce matin au Relecq-Kerhuon. La dépouille a reçu les honneurs militaires lors d'une cérémonie solennelle organisée à Brest, en présence de nombreuses personnalités civiles et militaires venues rendre un dernier hommage au défunt."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Actualités militaires",
    "title": "Mesures pour le corps de santé et camp de Châlons",
    "summary": "Le ministère de la Guerre relève la limite d'âge d'admission au Val-de-Grâce à 28 ans pour favoriser le recrutement, tandis que la cavalerie intègre des cours de tir au camp de Châlons.",
    "paragraphs": [
      "Afin de susciter de nouvelles vocations et d'attirer davantage de docteurs dans le service, la limite d'âge pour l'admission à l'École du Val-de-Grâce est désormais portée à vingt-huit ans.",
      "Par ailleurs, dans un souci d'amélioration des compétences techniques, des officiers de cavalerie suivent pour la première fois cette année des cours intensifs de tir au camp de Châlons."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Social",
    "title": "Grèves et revendications ouvrières",
    "summary": "Conflits sociaux à Paris et au Creusot : les cochers demandent un arbitrage sur leurs conditions de travail, tandis que les ouvriers Schneider protestent contre des licenciements abusifs.",
    "paragraphs": [
      "Une délégation de cochers de fiacre du département de la Seine a été reçue ce jour par M. le préfet de police. Les représentants ont exposé leurs griefs et sollicité la création d'une commission d'arbitrage chargée de statuer sur le prix de la course et les conditions de travail.",
      "Au Creusot, le mécontentement gronde au sein des ateliers. Les ouvriers ont voté à une large majorité l'envoi d'une lettre de protestation à M. Schneider, dénonçant avec vigueur le renvoi arbitraire de nombreux travailleurs intervenu au lendemain des élections municipales."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Faits Divers",
    "title": "Violentes tempêtes sur les côtes",
    "summary": "Des tempêtes d'une rare violence frappent le littoral français et la Belgique, causant des sinistres maritimes et des dégâts matériels importants à Cherbourg, Saint-Brieuc et Cannes.",
    "paragraphs": [
      "Les côtes françaises sont en proie à de violentes tempêtes depuis plusieurs jours. De nombreux accidents maritimes ont été signalés par les autorités portuaires à Cherbourg, Saint-Brieuc et Cannes. La Belgique subit également la fureur des éléments, les vents violents occasionnant des dégâts matériels considérables dans plusieurs localités."
    ]
  },
  {
    "id": 25,
    "page": 2,
    "category": "Faits Divers",
    "title": "Tribunaux : M. Sébastien Faure",
    "summary": "Le procès de M. Sébastien Faure, accusé d'attroupement armé, se poursuit dans une atmosphère tendue. Le prévenu tente de justifier ses actes malgré les rappels à l'ordre du président.",
    "paragraphs": [
      "Le procès de M. Sébastien Faure s'est poursuivi aujourd'hui devant le tribunal correctionnel. Les débats ont porté sur les chefs d'inculpation relatifs à un attroupement armé. Au cours de l'audience, le prévenu a tenté, avec insistance, de démontrer le caractère pacifique et légitime de la manifestation, avant d'être interrompu à plusieurs reprises par le président du tribunal pour recadrer la déposition."
    ]
  },
  {
    "id": 26,
    "page": 2,
    "category": "Échos et Nouvelles",
    "title": "Brèves diverses",
    "summary": "La princesse de Bulgarie visite l'école Braille de Saint-Mandé. Le peintre Eugène Lambert s'éteint. L'Assistance publique inaugure un hospice à Ivry-sur-Seine. Un heureux gagnant du Crédit foncier est signalé à Rodez.",
    "paragraphs": [
      "La princesse de Bulgarie a visité l'école Braille à Saint-Mandé. Le peintre Eugène Lambert est décédé. Un gagnant du Crédit foncier habite Rodez. L'administration de l'Assistance publique va inaugurer un nouvel hospice à Ivry-sur-Seine."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Social",
    "title": "Nouvelle fondation de l'Assistance publique",
    "summary": "Une nouvelle fondation de 300 000 francs ouvre à Ivry dans des conditions d'hygiène remarquables. En attendant l'ouverture de la fondation Chomin-Delatour, une allocation mensuelle de 100 francs est versée aux bénéficiaires.",
    "paragraphs": [
      "Une somme de 300 000 francs a été consacrée à l'édification et à l'aménagement de cette maison, construite dans d'excellentes conditions d'hygiène.",
      "La nouvelle fondation, qui se trouve à proximité de l'hospice des Incurables, verra les services généraux de cet établissement soumis au même régime que ceux de cette maison.",
      "Ajoutons que, d'accord avec l'administration de l'Assistance publique, et en attendant l'ouverture de la fondation Chomin-Delatour, le bénéficiaire de ce legs a déjà provoqué l'attribution mensuelle d'une somme de 100 francs."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Vengeance de Rôdeurs",
    "summary": "Un gardien de la paix, reconnu en tenue bourgeoise rue du Poteau, a été sauvagement agressé par une bande. Blessé par trois coups de feu, il a été secouru et les agresseurs sont activement recherchés par la police.",
    "paragraphs": [
      "Hier soir, vers neuf heures et demie, le gardien de la paix Bach, de la circonscription de Saint-Ouen, passait rue du Poteau, à proximité de la porte de Montmartre. Il se trouva en présence d'une bande d'individus. L'agent était en tenue bourgeoise, mais il fut reconnu par les rôdeurs qui se ruèrent sur lui en criant : « C'est un flic ! Il faut lui faire sa fête ! »",
      "Et, d'un commun accord, ils frappèrent le malheureux à coups de pied et de poing. L'un des malfaiteurs, trouvant leur vengeance trop douce, s'arma d'un revolver et fit feu à trois reprises sur l'agent, qui fut atteint à la main gauche et à la cuisse droite.",
      "Les coupables prirent la fuite aussitôt leur forfait accompli ; ils se sauvèrent dans la direction des fortifications.",
      "M. Bach, fort heureusement, n'avait pas été grièvement blessé ; les balles n'avaient pénétré que très peu dans les chairs. Après avoir reçu des soins dans une pharmacie, la victime a été reconduite en voiture à son domicile.",
      "Les auteurs de cette tentative de meurtre sont activement recherchés et, selon toutes probabilités, leur arrestation est imminente."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une rafle monstre",
    "summary": "Suite à l'attaque de la péniche Marie-Jeanne sur le canal Saint-Martin, la police a mené une vaste opération sur les berges, procédant à cinquante-six arrestations parmi des malfaiteurs et repris de justice.",
    "paragraphs": [
      "Nous avons raconté ces jours derniers qu'une péniche, la Marie-Jeanne, amarrée dans le canal Saint-Martin, avait été, pendant la nuit, assaillie par une bande de rôdeurs et fortement avariée sous une grêle d'énormes projectiles.",
      "À la suite de cet attentat, M. Borde, officier de paix du quatrième arrondissement, a fait, au cours de la nuit dernière, une battue générale sur les berges de la Seine et du canal, arrêtant impitoyablement tous les individus qui rôdaient aux alentours des bateaux.",
      "Dans cette rafle monstre, cinquante-six personnes ont été mises en état d'arrestation. Un grand nombre d'entre eux, repris de justice et malfaiteurs dangereux, parmi lesquels on est certain de trouver les auteurs du bombardement de la Marie-Jeanne, ont été gardés à la disposition de la justice."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide d'un fou",
    "summary": "En proie à un accès de folie furieuse, un ouvrier de 45 ans résidant rue d'Angoulême s'est jeté du cinquième étage de son immeuble. Son décès fut instantané.",
    "paragraphs": [
      "Au numéro 77 de la rue d'Angoulême habitait un ouvrier, M. Louis Hirton, âgé de quarante-cinq ans, qui, depuis quelques jours, donnait des signes non équivoques de dérangement cérébral.",
      "Hier matin, vers une heure, alors que tout le monde était couché dans la maison, l'ouvrier bondit soudain hors de son lit, poussant des cris horribles. Une minute après, alors que des voisins intervenaient pour voir ce qui se passait, le malheureux, pris d'un accès de folie furieuse, ouvrit la fenêtre de sa chambre et s'élança dans le vide du haut du cinquième étage.",
      "Quand on le releva, il était mort. M. Daltroff, commissaire de police du quartier, aussitôt prévenu, a procédé aux constatations d'usage."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le Drame de Pierrefitte",
    "summary": "Le juge d'instruction M. de Vallès a été saisi de l'affaire du drame de Pierrefitte. Il a ordonné une expertise psychiatrique de l'ouvrier terrassier Hamauniot, confiée au docteur Vallon, médecin en chef de l'asile Sainte-Anne.",
    "paragraphs": [
      "Le parquet de la Seine a confié à M. de Vallès, juge d'instruction, l'enquête relative au drame de la folie dont la localité de Pierrefitte a été le théâtre. Le magistrat a chargé le docteur Vallon, médecin en chef de l'asile Sainte-Anne, d'examiner l'état mental du meurtrier, l'ouvrier terrassier Hamauniot."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Boulogne-sur-Seine : Agression au revolver",
    "summary": "Après une violente dispute, l'ouvrier Tisserat a tenté de se venger de son collègue Lambert en l'attaquant au revolver sur le pont de Boulogne. L'agresseur a été arrêté par les agents après une course-poursuite.",
    "paragraphs": [
      "Samedi dernier, à la suite d'une violente discussion, deux ouvriers, Pierre Lambert, âgé de cinquante ans, et Auguste Tisserat, âgé de trente-neuf ans, en étaient venus aux mains. Lambert, qui est doué d'une force peu commune, avait eu facilement raison de son adversaire, lequel était parti en jurant qu'il se vengerait.",
      "Hier soir, Lambert passait sur le pont, lorsqu'en se retournant, il aperçut Tisserat qui, sournoisement, s'approchait de lui, tenant à la main un revolver de fort calibre. Il bondit aussitôt sur son antagoniste et une lutte terrible s'engagea entre les deux hommes, au cours de laquelle Lambert reçut un violent coup de crosse de revolver qui lui fit une profonde blessure à la tête.",
      "Sur ces entrefaites, des agents, attirés par le bruit, étaient accourus et se mirent à la poursuite du malfaiteur qui avait pris la fuite ; ils purent le capturer après une longue course. M. Beaurain, commissaire de police, l'a envoyé au dépôt."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Puteaux : Accident de voiture",
    "summary": "Une femme de cinquante-six ans, Mme veuve Walboth, a été grièvement blessée par une voiture dont le cheval s'était emporté avenue de la Défense. L'enfant qui l'accompagnait s'en sort avec des blessures sans gravité.",
    "paragraphs": [
      "Mme veuve Walboth, âgée de cinquante-six ans, demeurant rue de la République, qui se promenait hier avec une fillette de dix ans, avenue de la Défense, a été renversée par une voiture dont le cheval s'était emporté.",
      "Relevée sans connaissance, le crâne fracturé et grièvement blessée, elle a été transportée à son domicile dans un état des plus alarmants. Par un hasard miraculeux, l'enfant, qui avait été également renversée, n'a reçu que des contusions sans gravité."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Bécon-les-Bruyères : Éboulement",
    "summary": "Un ouvrier terrassier, Jules Carpentier, a été victime d'un grave éboulement sur un chantier rue de la Sablière. Souffrant d'une cuisse broyée et de blessures thoraciques, il a été hospitalisé dans un état désespéré.",
    "paragraphs": [
      "Un ouvrier terrassier, Jules Carpentier, âgé de trente-eight ans, demeurant à Villeneuve-la-Garenne, a été pris hier matin sous un éboulement en travaillant aux fondations d'une maison en construction, rue de la Sablière. Quand on parvint à le dégager, le malheureux avait une cuisse broyée et était très grièvement atteint à la poitrine : il a été transporté dans un état désespéré à l'hôpital."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Autour de Paris",
    "title": "La Garenne-Colombes : Accident mortel",
    "summary": "Un pigeonnier emporté par le vent a chuté sur une maison rue de l'Aigle, causant un grave accident. Mme Jeanne Heurteaux, frappée par des débris, est dans un état jugé désespéré par les médecins.",
    "paragraphs": [
      "Le vent, qui a renversé hier un pigeonnier installé rue de l'Aigle, sur une maison de deux étages, a causé un drame. Les planches et les pièces de bois, en tombant dans la cour, ont atteint à la tête Mme Jeanne Heurteaux, ménagère, qui est dans un état complètement désespéré."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Asnières : Incendie d'une fabrique",
    "summary": "Un violent incendie a totalement détruit hier une fabrique de paillassons située au lieu-dit Le Révétour à Asnières. L'intervention coordonnée des pompiers a permis de limiter l'extension aux maisons voisines.",
    "paragraphs": [
      "Un incendie, dont les causes n'ont pu être établies, a détruit hier complètement une fabrique de paillassons, appartenant à M. Planeon et située au lieu-dit Le Révétour, à l'angle de la rue de Plaisance.",
      "Le feu, qui avait éclaté à sept heures, a été éteint vers neuf heures par les pompiers d'Asnières, Courbevoie, Colombes, Bois-Colombes, Puteaux et Gennevilliers. Plusieurs maisons voisines ont été endommagées par les flammes. Les dégâts sont considérables."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Bois-Colombes : Suicide",
    "summary": "Une jeune femme de vingt-quatre ans, Julienne Raves, s'est donné la mort la nuit dernière à son domicile de Bois-Colombes en se tirant un coup de revolver en plein cœur, en raison de chagrins intimes.",
    "paragraphs": [
      "Une jeune femme de vingt-quatre ans, nommée Julienne Raves, demeurant rue Victor-Hugo, s'est suicidée la nuit dernière en se tirant un coup de revolver dans la région du cœur. Cet acte de désespoir est dû à des chagrins intimes."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Plaine-Saint-Denis : Chute d'échafaudage",
    "summary": "Un grave accident est survenu hier place de la République à la Plaine-Saint-Denis : l'effondrement d'un échafaudage a provoqué la chute d'un ouvrier maçon, grièvement blessé à la poitrine et au bras.",
    "paragraphs": [
      "Un ouvrier maçon, M. Victor Maus, âgé de trente-huit ans, travaillait hier après-midi, place de la République, dans une maison en construction, lorsque l'échafaudage sur lequel il était monté s'écroula. Le malheureux a été retiré des décombres avec la poitrine enfoncée et un bras fracturé. Il a été admis d'urgence à l'hôpital Saint-Denis."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Épinay : Braquage",
    "summary": "Un cultivateur d'Épinay a mis en fuite trois individus surpris en plein pillage de sa propriété. Deux suspects, originaires de Saint-Ouen, ont été appréhendés sur le pont d'Épinay après une tentative d'agression armée.",
    "paragraphs": [
      "Un cultivateur, M. Plussis-Lauzin, surprenait hier après-midi trois individus occupés à piller sa propriété. À sa vue, les rôdeurs prirent la fuite, tout en tirant sur lui, sans l'atteindre, deux coups de revolver.",
      "Deux d'entre eux ont été arrêtés sur le pont d'Épinay et mis à la disposition de M. Lefort, commissaire de police. Ce sont Alphonse Guima, vingt et un ans, et François Pentournis, dix-neuf ans, demeurant tous deux à Saint-Ouen."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Bougival : Cadavre retrouvé",
    "summary": "Le corps d'une femme, resté immergé durant environ trois semaines, a été découvert hier dans un bras de Seine près de la machine de Marly. Une enquête de gendarmerie est ouverte pour identifier la victime.",
    "paragraphs": [
      "Hier matin, vers dix heures, on a repêché le cadavre d'une femme de vingt-cinq à trente ans dans le bras de Seine longeant la machine de Marly. Le corps, dont on n'a pu établir l'identité, paraît être resté dans l'eau environ trois semaines. Il a été transporté à la morgue de Bougival. La gendarmerie a ouvert une enquête."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Informations Municipales",
    "title": "Élections locales",
    "summary": "À Nogent-sur-Marne, les maires ont été reconduits à l'unanimité. À Antony, le maire et plusieurs conseillers municipaux ont remis leur démission au préfet de la Seine suite aux résultats du scrutin.",
    "paragraphs": [
      "Nogent-sur-Marne : M. Husson, maire de Nogent, et M. Voisin, maire de Joinville-le-Pont, ont été réélus à l'unanimité.",
      "Antony : À la suite du scrutin de dimanche dernier, qui a favorisé la liste opposée à celle patronnée par la municipalité, MM. Legoute, maire, Pajot, adjoint, Cazin et Lambert, conseillers municipaux, qui avaient été élus au premier tour, viennent d'adresser leur démission à M. de Selves, préfet de la Seine."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "Le Trocadéro accueille Mors et Vita de Gounod, tandis que le théâtre Antoine prépare la Tragédie de la Mort. Mme Tariol-Baugé rejoint les Variétés et une commémoration pour Victor Hugo est prévue.",
    "paragraphs": [
      "C'est demain que doit avoir lieu, au Trocadéro, une exécution, sous la direction de M. d'Harcourt, de Mors et Vita de Gounod, qui promet d'être une solennité musicale.",
      "Le théâtre Antoine donnera prochainement la première représentation de la Tragédie de la Mort, pièce de M. René Peter.",
      "M. Samuel a engagé Mme Tariol-Baugé aux Variétés pour chanter le rôle de Fiorella dans la reprise des Brigands.",
      "La commémoration du seizième anniversaire de la mort de Victor Hugo aura lieu au théâtre Sarah-Bernhardt."
    ]
  }
];
