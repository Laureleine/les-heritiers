// Date: 1901-02-14
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-02-14 (Version Restaurée, 32 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique",
    "title": "Les Beaux-Arts au Sénat",
    "summary": "Le Sénat a débattu du budget des Beaux-Arts. Les discussions ont porté sur la sécurité du Louvre, le rôle essentiel des musées de province et le nécessaire soutien financier de l'État à la décentralisation artistique.",
    "paragraphs": [
      "Si l'on en croyait certaines feuilles, le Parlement ne s'occuperait jamais que de questions simplement politiques, d'ordre général ou d'intérêt local, et il serait incapable de s'élever aux débats plus relevés, aux questions d'art notamment. Ce reproche est complètement injustifié et la discussion qui a eu lieu devant le Sénat à propos du budget des Beaux-Arts en est la preuve.",
      "On a parlé d'abord du musée du Louvre et de la sécurité qui doit être assurée aux admirables collections qu'il renferme, notamment en éloignant le ministère des Colonies du pavillon de Flore.",
      "Le ministre des Beaux-Arts est venu rassurer le Sénat en reconnaissant que les mesures prises jusqu'ici pour préserver le Louvre sont insuffisantes et qu'il faut protéger le musée immédiatement.",
      "Une autre question intéressante a été traitée : celle des musées de province, qui peuvent rivaliser avec les collections étrangères. L'État enrichit ces musées par des envois après le Salon et apporte son concours financier, aidant ainsi à la décentralisation artistique.",
      "En conclusion, le Sénat a fait adopter le principe d'une proposition qui permettra à l'État de subvenir à la restauration des collections des musées de province."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Miss Tempête - Grand roman inédit",
    "summary": "Le peintre Michel Bertin découvre, non sans une vive émotion, les charmes de la jeune Germaine, mais il est rapidement gagné par le doute et l'angoisse de ne pas être à la hauteur de ses sentiments naissants.",
    "paragraphs": [
      "La vieille bonne s'écriait déjà en riant : « Mais, monsieur Bertin, on vous a donc dit que mademoiselle est gourmande, oh, gourmande comme un bébé ! »",
      "Michel Bertin, le peintre, était ravi et ému, observant Germaine avec une soudaine révélation : « Cette adorable fille, je l'aime, je l'aime d'amour. »",
      "Pourtant, ce fut pour le peintre le début d'un supplice de l'angoisse, doutant de pouvoir séduire cette créature si délicate alors qu'il se sentait si fruste."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Étranger",
    "title": "La mort du roi Milan",
    "summary": "Le corps du défunt roi Milan repose actuellement à Vienne. Après les cérémonies funéraires, il sera transféré en Serbie pour y être inhumé au couvent de Kruschedol samedi prochain.",
    "paragraphs": [
      "La première bénédiction du corps du roi Milan a eu lieu ce matin à Vienne, au domicile du défunt. L'empereur a reçu en audience particulière le colonel Pétrovitch.",
      "Le corps repose dans un double cercueil en plomb et en chêne. D'après le cérémonial, le corps sera transporté demain soir à l'église serbe avant d'être conduit samedi à Karlowitz pour être enterré au couvent de Kruschedol."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Étranger",
    "title": "Les troubles en Espagne",
    "summary": "L'Espagne est secouée par une vague d'agitation sociale et anticléricale. De Madrid à Malaga, des grèves et des émeutes éclatent, marquées par des incendies de couvents et des affrontements politiques violents.",
    "paragraphs": [
      "Les nouvelles d'Espagne indiquent une excitation profonde contre les ordres religieux et une impopularité persistante du fiancé de la princesse des Asturies.",
      "À Madrid, des collisions entre manifestants et police ont eu lieu, et les cochers de fiacre ont décidé de se mettre en grève.",
      "À Villanueva, la population a lapidé la rédaction d'un journal ayant publié un article contre le poète Victor Balaguer, ainsi que la maison du curé.",
      "À Santander, des manifestations ont eu lieu devant la rédaction d'un journal républicain et des affrontements avec des carlistes ont été signalés.",
      "À Malaga, des manifestants ont incendié un couvent de moines carmes après avoir forcé l'entrée."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Le crime de la rue des Goncourt",
    "summary": "Un meurtre atroce a été commis rue des Goncourt. Louis Beaumont, un boulanger de 51 ans, a assassiné une femme nommée Berthe Lainé. Arrêté, il a avoué son crime après une dispute pour une dette de quinze francs.",
    "paragraphs": [
      "Un crime a été commis hier matin rue des Goncourt. Une femme nommée Berthe Lainé a été sauvagement assassinée.",
      "Le gardien de la paix Longin, alerté par des cris, a prévenu le commissaire Daltroff. Le meurtrier, Louis Beaumont, boulanger de 51 ans, a été arrêté alors qu'il tentait de se cacher dans une usine après s'être enfui par une fenêtre.",
      "L'assassin a avoué avoir frappé la victime à la suite d'une dispute concernant une somme de quinze francs. Il a utilisé un siphon d'eau de Seltz, une chaise et un fer à repasser pour tuer la malheureuse.",
      "Le cadavre de la victime a été transporté à la Morgue pour examen."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Social",
    "title": "La grève des tailleurs et couturières",
    "summary": "La grève des tailleurs pour dames s'étend aux ouvrières des maisons de couture. Tandis que le syndicat annonce une mobilisation croissante, des incidents éclatent rue de la Paix, nécessitant l'intervention policière.",
    "paragraphs": [
      "La grève des tailleurs pour dames s'est compliquée d'une grève partielle d'ouvrières des grandes maisons de couture, créant un imbroglio difficile à évaluer.",
      "Le comité du syndicat affirme que le nombre de grévistes a doublé, tandis que les patrons déclarent que leurs ateliers sont au complet.",
      "Hier, des tentatives de débauchage en masse ont eu lieu devant les ateliers de la rue de la Paix, nécessitant l'intervention de la police pour maintenir le calme."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Social",
    "title": "Grève des ouvrières de la couture et Bourse du Travail",
    "summary": "À Paris, la grève des couturières se poursuit malgré la neige. Entre arrestations, débats à la Bourse du Travail et intervention de M. Viviani, les grévistes exigent l'abolition du marchandage.",
    "paragraphs": [
      "À peine dispersé, un groupe de manifestants se reforme un peu plus loin. En général, on entend peu de cris ; toutefois, vers une heure, les manifestations prennent corps et sont dirigées contre une petite maison où l'on conspue le directeur.",
      "M. Chance, officier de paix, procède à l'arrestation de deux manifestants, Jacques Robert, avocat et délégué général, et Marcel Hubert, gérant du Drapeau. M. Péchar, commissaire de police, les remet en liberté après interrogatoire.",
      "À la Bourse du Travail, une rafale de neige force les curieux à partir. Dans la grande salle, les ouvrières sont en majorité. M. Maxime donne lecture d'un rapport détaillé sur la situation des ateliers, où quatre nouveaux ont été en grande partie désertés.",
      "Quelques orateurs fournissent des détails sur les démarches auprès des patrons, parfois mal accueillies. On se plaint des manœuvres de certaines maisons pour empêcher les ouvrières de sortir.",
      "La question de la grève générale de la corporation des tailleurs et couturières est abordée, mais l'assemblée ne se prononce pas nettement. Une seconde réunion est annoncée pour huit heures.",
      "Le soir, l'affluence est moins grande à cause de la température. Le député M. Viviani prend la parole pour se mettre à la disposition des grévistes, soulignant que la question primordiale est l'abolition du marchandage.",
      "L'assemblée adopte à l'unanimité un ordre du jour demandant aux pouvoirs publics l'application de l'article 8 du décret du 10 mars."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Politique",
    "title": "Enquête ministérielle sur les ateliers de couture",
    "summary": "Le ministre du Commerce, M. Millerand, ordonne une enquête officielle sur les conditions de travail dans les grandes maisons de couture suite aux plaintes sur la séquestration des ouvrières non grévistes.",
    "paragraphs": [
      "M. Millerand, ministre du Commerce, a chargé un inspecteur divisionnaire du travail de faire une enquête dans toutes les grandes maisons de couture.",
      "Cette mesure fait suite aux bruits concernant certains patrons qui auraient refusé d'accorder aux ouvrières non grévistes l'autorisation de quitter les ateliers à l'heure du déjeuner."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique",
    "title": "Séance du Sénat du 12 février",
    "summary": "Le Sénat poursuit l'examen du budget. Le rapporteur M. Boulanger alerte sur le poids des pensions civiles, tandis que le ministre des Finances cherche des solutions pour restreindre les dépenses publiques.",
    "paragraphs": [
      "Le Sénat continue la discussion du budget et aborde celui du ministère des Finances. M. Boulanger, rapporteur, attire l'attention sur l'accroissement indéfini du chiffre des pensions civiles.",
      "M. Caillaux, ministre des Finances, déclare que le gouvernement se préoccupe de restreindre ces dépenses sans toutefois revenir sur la loi existante.",
      "La discussion se poursuit sur divers chapitres techniques et sur le budget de la Légion d'honneur."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Mariage de M. Paul Deschanel",
    "summary": "Le président de la Chambre des députés, M. Paul Deschanel, a épousé Mlle Germaine Brice à la mairie du VIe arrondissement, en présence du président de la République, M. Émile Loubet.",
    "paragraphs": [
      "Le mariage civil de M. Paul Deschanel, président de la Chambre des députés, et de Mlle Germaine Brice a eu lieu hier à la mairie du VIe arrondissement.",
      "Le président de la République, M. Émile Loubet, a assisté à la cérémonie. La foule était nombreuse sur les trottoirs de la place Saint-Sulpice pour acclamer les mariés.",
      "La cérémonie religieuse aura lieu samedi à Saint-Germain-des-Prés."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "Questions ouvrières à la Chambre",
    "summary": "Une délégation de la Fédération nationale des employés a été reçue par la commission du travail pour débattre de l'extension des prud'hommes, de la protection sociale et de la mise en œuvre du repos hebdomadaire.",
    "paragraphs": [
      "Une délégation de la Fédération nationale des employés a été entendue hier, au Palais Bourbon, par la commission du travail.",
      "Les délégués ont sollicité l'extension de la juridiction des conseils de prud'hommes aux employés, leur intégration au sein des lois protectrices du travail, et ont exposé leurs revendications concernant l'application du repos hebdomadaire."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Nouvelles Coloniales",
    "title": "Informations du Sénégal, de Guinée et des Somalis",
    "summary": "La situation sanitaire s'améliore au Sénégal tandis que les travaux ferroviaires avancent en Guinée. Une convention diplomatique a fixé la frontière entre les possessions françaises et italiennes en Somalie.",
    "paragraphs": [
      "La situation demeure excellente sur la côte du Sénégal, où l'épidémie de fièvre jaune a totalement disparu. En Guinée, les grands travaux du chemin de fer se poursuivent activement.",
      "S'agissant de la côte des Somalis, les négociations relatives à la délimitation des possessions françaises et italiennes ont abouti, le 24 janvier dernier, à la signature officielle d'une convention."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "International",
    "title": "Dépêches de l'étranger : Chine, Transvaal et Italie",
    "summary": "À Pékin, les décrets contre les fonctionnaires sont maintenus. En Afrique du Sud, les hostilités persistent au Transvaal, tandis qu'à Rome, la formation du cabinet Zanardelli avance vers une conclusion proche.",
    "paragraphs": [
      "À Pékin, les ministres ont décidé de maintenir les décrets châtiant les fonctionnaires. Le gouvernement britannique a formellement refusé d'accepter Tchang-Po-Si en qualité d'envoyé spécial en Angleterre.",
      "Dans la guerre du Transvaal, les Boers poursuivent leurs escarmouches contre les troupes anglaises, notamment sous l'impulsion du général De Wet. Des atrocités sont dénoncées quant au traitement des fermiers et des familles boers internés dans les camps.",
      "À Rome, les négociations pour la constitution d'un nouveau cabinet italien progressent favorablement sous la direction de M. Zanardelli."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Tragédie familiale et accident de montagne",
    "summary": "Un drame conjugal a causé la mort d'un époux à Lyon après un coup de feu. Dans les Alpes, une avalanche a coûté la vie à trois chasseurs alpins lors d'une mission de ravitaillement.",
    "paragraphs": [
      "Une horrible tragédie s'est déroulée à Lyon : une femme, à la suite d'une violente dispute avec son époux, a fait usage d'un revolver contre lui. Le malheureux mari a succombé à ses blessures.",
      "Dans les Alpes, une avalanche meurtrière a coûté la vie à trois chasseurs alpins, MM. Poncin, Brunnarius et Lamy, alors qu'ils étaient engagés dans une mission de ravitaillement."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Explosion sur un torpilleur à Toulon",
    "summary": "Un grave accident industriel s'est produit à Toulon à bord d'un torpilleur. La rupture d'une chaudière a gravement blessé trois mécaniciens.",
    "paragraphs": [
      "Une explosion est survenue hier soir sur un torpilleur à Toulon, blessant grièvement trois ouvriers mécaniciens à la suite de la rupture d'un tube de la chaudière."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie d'un hospice à Montauban",
    "summary": "Un violent incendie s'est déclaré dans un hospice de Montauban. Le sinistre a tragiquement causé la mort de deux pensionnaires, malgré les efforts des secours déployés sur place.",
    "paragraphs": [
      "Un incendie s'est déclaré, durant la nuit, dans un hospice de la ville de Montauban. Malgré la promptitude des secours, le sinistre a malheureusement coûté la vie à deux pensionnaires de l'établissement."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un meurtre à la Villette",
    "summary": "Une altercation entre journaliers dans un débit de boisson de la Villette a tourné au drame, se soldant par un coup de couteau mortel. M. Rujaud, commissaire de police, a immédiatement ouvert une enquête.",
    "paragraphs": [
      "Hier soir, plusieurs journaliers se trouvaient réunis dans un débit de boisson de la Villette. Une discussion s'éleva vivement entre eux, laquelle dégénéra bientôt en une rixe sanglante, marquée par un coup de couteau. L'agresseur a pris la fuite aussitôt après son méfait.",
      "M. Rujaud, commissaire de police, a immédiatement ouvert une enquête sur ces faits. Un individu, dont le signalement correspond en tout point à celui du meurtrier, a été arrêté, bien qu'il ait refusé de décliner son identité devant les agents."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un meurtrier de treize ans",
    "summary": "Drame rue de Nantes : un enfant de treize ans a fait feu sur un camarade lors d'une dispute. La victime, Charles Meyer, douze ans, est grièvement blessée. Le jeune coupable est activement recherché par la police.",
    "paragraphs": [
      "Dans la matinée d'hier, plusieurs enfants s'amusaient rue de Nantes lorsqu'une dispute éclata soudainement entre deux d'entre eux.",
      "Un jeune garçon a alors tiré un revolver de sa poche et fait feu sur le petit Charles Meyer, âgé de douze ans et demi, qui s'est affaissé, baignant dans son sang.",
      "La victime a reçu les premiers soins dans une pharmacie voisine avant d'être transportée. Le jeune meurtrier, qui a pris la fuite, est activement recherché par les services du commissaire de police du quartier."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un banquier",
    "summary": "M. Martin, commissaire de police, a arrêté un banquier du boulevard P. L'homme est suspecté de complicité dans une affaire de fraude sur titres impliquant les escrocs Renard et Pezet, actuellement écroués.",
    "paragraphs": [
      "M. Martin, commissaire de police, a procédé à l'arrestation d'un nommé D., banquier sur le boulevard P. L'intéressé est soupçonné de complicité avec les nommés Renard et Pezet, déjà écroués pour des fraudes commises sur des titres financiers."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une vente noire",
    "summary": "M. Ernest Cossonnet, représentant de commerce, a été victime d'une escroquerie. Après avoir versé 1 500 francs pour une transaction frauduleuse de fanons de baleine, il a déposé plainte contre Eugène M.",
    "paragraphs": [
      "M. Ernest Cossonnet, représentant de commerce, a été victime d'une escroquerie habilement menée. Un nommé Eugène M. lui avait proposé une affaire jugée exceptionnelle concernant trois kilos de fanons de baleine.",
      "M. Cossonnet a versé la somme de 1 500 francs pour conclure la transaction. Cependant, après avoir été conduit chez un commerçant à la Villette, il a compris qu'il avait été odieusement trompé et a immédiatement porté plainte."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame à l'hôtel rue Piat",
    "summary": "Un sanglant attentat a été commis rue Piat. Un nommé Hoffmann a agressé une femme à coups de couteau. Un locataire, Victor Gédéon, intervenu pour lui porter secours, a été blessé avant l'arrestation du forcené par la police.",
    "paragraphs": [
      "Un drame épouvantable s'est déroulé dans un hôtel meublé de la rue Piat. Un individu nommé Hoffmann s'est jeté avec fureur sur Mme B. dans la chambre de celle-ci, la frappant à plusieurs reprises à coups de couteau.",
      "Le locataire Victor Gédéon, accouru aux cris de la victime pour tenter de lui porter secours, a été grièvement blessé à la main au cours de la lutte. Le misérable Hoffmann a pu être appréhendé peu après par les agents de la police."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Justice",
    "title": "À l'instruction",
    "summary": "M. le juge Larcher a accordé la liberté provisoire à Baumann, inculpé dans l'affaire du meurtre de M. Gabriel. Parallèlement, l'instruction se poursuit concernant l'affaire Sancu et le drame du boulevard Saint-Michel.",
    "paragraphs": [
      "M. Larcher, juge d'instruction, a rendu une ordonnance autorisant la mise en liberté provisoire du sieur Baumann, inculpé dans l'enquête sur le meurtre de M. Gabriel.",
      "Dans le même temps, un nommé Sancu, accusé d'avoir soustrait indûment dix billets de mille francs, a également bénéficié d'une mise en liberté provisoire.",
      "M. le juge André a procédé hier à un interrogatoire de l'inculpé Charles Demergue, dans le cadre de l'instruction ouverte sur la tentative d'assassinat commise boulevard Saint-Michel."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort par le froid",
    "summary": "Triste fin pour Jules Parent, employé auxiliaire à la compagnie de l'Ouest, retrouvé sans vie ce matin dans un compartiment de train à la gare Montparnasse, victime du froid intense qui a sévi cette nuit.",
    "paragraphs": [
      "Hier soir, le nommé Jules Parent, employé auxiliaire de la compagnie de l'Ouest, s'était retiré pour la nuit dans un compartiment de train en stationnement à la gare Montparnasse.",
      "Ce matin, le malheureux a été découvert sans vie; il a succombé durant son sommeil aux atteintes du froid intense ayant régné toute la nuit."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Informations météorologiques",
    "title": "La température",
    "summary": "Une vague de froid particulièrement vif frappe le pays, entravant la circulation urbaine par des chutes de neige. La baisse des températures se confirme dans le nord-est, annonçant un temps sec et glacial.",
    "paragraphs": [
      "Le froid s'est montré d'une grande rigueur durant toute la journée. Les chutes de neige ont rendu la circulation des voitures pénible, entravant le trafic habituel pendant plusieurs heures.",
      "La température a accusé une chute sensible dans le nord-est. Le temps beau et froid est désormais probable sur l'ensemble du territoire français."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "Comités de travail sur les chemins de fer",
    "summary": "Des comités de travail ont été institués sur le réseau ferré à Tours, Nantes et Saintes, afin de veiller à l'application stricte des lois sur le repos des mécaniciens, chauffeurs et autres agents de la compagnie.",
    "paragraphs": [
      "Des comités de travail viennent d'être constitués sur le réseau des chemins de fer, couvrant les arrondissements d'exploitation de Tours, Nantes et Saintes.",
      "La mission assignée à ces comités est de veiller avec rigueur à la stricte exécution des lois et règlements relatifs aux temps de travail et de repos imposés aux mécaniciens, chauffeurs et au personnel des diverses stations."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Rixes et accidents en banlieue",
    "summary": "Une vague d'accidents et de violences frappe la banlieue : à Sèvres, Suresnes, Gennevilliers, Bois-Colombes et Bezons, la chronique enregistre des coups de couteau, des blessures par balle et des accidents du travail.",
    "paragraphs": [
      "À Sèvres, une rixe a éclaté à la sortie d'un débit de vin ; Hippolyte C. a blessé un camarade d'un coup de couteau.",
      "À Suresnes, des coups de feu ont été tirés dans un débit de vin ; M. Jean Lamoureux a été grièvement blessé par balle.",
      "À Gennevilliers, le charretier Joseph Légat a eu la jambe broyée dans une carrière de sable.",
      "À Bois-Colombes, une jeune fille de dix-neuf ans s'est tiré deux coups de revolver dans la poitrine.",
      "À Bezons-les-Bruyères, l'ouvrier Adrien Rabetin a été grièvement blessé par la chute d'un fût de vin."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Social",
    "title": "Les grèves",
    "summary": "Le mouvement social persiste, marqué par un meeting place de l'Hôtel-de-Ville et la distribution de dix mille rations aux grévistes. La vigilance reste de mise contre les quêtes frauduleuses.",
    "paragraphs": [
      "Un meeting s'est tenu place de l'Hôtel-de-Ville. La matinée a été calme et plus de dix mille rations ont été distribuées aux grévistes.",
      "Le syndicat a déposé une plainte contre des individus effectuant des quêtes frauduleuses. À Azincourt, la grève se poursuit malgré les tentatives de délégation."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Faits Divers",
    "title": "Une guérison miraculeuse par la Crème Norwégienne",
    "summary": "Un jeune domestique de ferme, menacé de renvoi pour sa faiblesse physique, a retrouvé une vigueur exceptionnelle après un traitement à la Crème Norwégienne du Docteur Michel Hansen.",
    "paragraphs": [
      "Un jeune domestique de ferme de Remoncourt, âgé de vingt ans et de santé chétive, a recouvré une vigueur éclatante après avoir utilisé la Crème Norwégienne du Docteur Michel Hansen.",
      "Le jeune homme, autrefois sur le point d'être congédié, a repris le travail après un mois, plein d'entrain, déclarant ressentir une chaleur constante et un regain de force notable. Son maître, surpris par ce rétablissement, l'a réembauché sans hésiter."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Avis Médical",
    "title": "La recommandation du Docteur C. sur la Crème Norwégienne",
    "summary": "Le Docteur C. préconise l'usage de la Crème Norwégienne, fortifiant à base d'huile de foie de morue, particulièrement efficace pour les anémiques, les tuberculeux et les enfants chétifs.",
    "paragraphs": [
      "Le Docteur C. atteste de l'efficacité de ce produit et souligne que l'unanimité du corps médical valide cette préparation.",
      "La Crème Norwégienne, composée d'huile de foie de morue, d'hypophosphites et de glycérophosphates, s'adresse aux anémiques, aux tuberculeux et aux enfants chétifs. Elle est disponible en pharmacie au prix de 1,5 franc le litre."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Actualités",
    "title": "Note du Gouvernement Impérial de Russie",
    "summary": "Un oukase impérial de 1890 exonère les porteurs de rentes russes non domiciliés en Russie de l'impôt sur le revenu. Les détenteurs sont priés de consulter les banques partenaires.",
    "paragraphs": [
      "Un oukase impérial du 4 octobre 1890 exonère les porteurs de rentes russes, non domiciliés en Russie, de l'impôt sur le revenu des valeurs mobilières.",
      "Les détenteurs de titres sont invités à s'adresser aux maisons de banque désignées, telles que MM. de Rothschild frères, Hottinguer et Cie, ou E. Hoskier et Cie, pour procéder aux formalités d'échange des titres."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Transports",
    "title": "Informations du Chemin de Fer d'Orléans",
    "summary": "La Compagnie du Chemin de fer d'Orléans annonce la mise en vente de billets d'aller et retour à prix réduits jusqu'au 15 février pour Nice et les principales stations balnéaires et thermales du golfe de Gascogne.",
    "paragraphs": [
      "La Compagnie d'Orléans met en distribution, jusqu'au 15 février inclusivement, des billets d'aller et retour à prix réduits pour Nice, avec faculté d'arrêt à Marseille.",
      "Des facilités de transport sont également consenties pour les stations thermales et hivernales du golfe de Gascogne, notamment Arcachon, Biarritz, Hendaye et Pau."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Résumé du cours des denrées",
    "summary": "Le bulletin commercial souligne une instabilité persistante sur le marché parisien, où la demande pour les blés indigènes, dans un contexte de hausse, entrave la fluidité des transactions courantes.",
    "paragraphs": [
      "Le bulletin commercial du 15 février rapporte des fluctuations sensibles sur les cours des blés, des farines et des sucres sur la place de Paris.",
      "La production locale réclame une plus-value sur les blés indigènes en raison de la fermeté du marché, situation qui rend les transactions actuelles laborieuses."
    ]
  }
];
