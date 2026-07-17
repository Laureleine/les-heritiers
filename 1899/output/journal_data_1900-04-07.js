// Date: 1900-04-07
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-04-07 (Version Restaurée, 35 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Notre pain",
    "summary": "La question du pain demeure primordiale. M. Müntz relance le débat sur la panification, soulignant l'importance de la farine blanche pour ses qualités nutritives et sa digestion, au détriment des enveloppes du grain.",
    "paragraphs": [
      "Voici encore à l'ordre du jour la question du pain. Il n'en est pas de plus importante. Sans doute l'homme ne vit pas exclusivement de pain, mais c'est le pain qui constitue généralement la base essentielle de sa nourriture.",
      "C'est un rapport de M. Müntz à la Société d'encouragement pour l'industrie nationale qui a rouvert la discussion sur la question du pain. De nouveau, on tente d'opposer le pain gris ou bis au pain blanc.",
      "Pour Aimé Girard, dont l'opinion fait autorité dans le monde de la meunerie et de la boulangerie, l'amande seule du grain doit servir à faire notre pain. Le germe et les enveloppes ne sont pas digestibles ou nuisent à la qualité.",
      "Il va sans dire, du reste, que cette enveloppe, que ce germe du grain de froment qu'on a laissés de côté, ne sont pas perdus. L'homme abandonne au bétail ces produits inférieurs.",
      "Adoptons la farine blanche, destinée à la fabrication du beau pain blanc, savoureux, bien levé, d'une digestion facile, nourrissant et utile par toutes ses parties."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "La mort mystérieuse",
    "summary": "Le duc d'Argile apporte son soutien au jeune Daniel, tandis que Gabrielle retrouve sa nourrice et évoque avec émotion les sacrifices consentis par sa sœur Hélène pour subvenir aux besoins de leur foyer.",
    "paragraphs": [
      "Le duc d'Argile, ému, l'embrassa, lui disant : « Vous êtes un bon et brave garçon, Daniel. Je serai heureux de faire pour vous ce que votre second père, le frère que je pleure, eût fait lui-même. »",
      "Gabrielle avait franchi le seuil d'une pièce grande et vaste, dans laquelle une femme d'une quarantaine d'années environ l'attendait en tricotant auprès d'une fenêtre ouverte.",
      "Gabrielle se jeta dans les bras de sa nourrice. « Je t'adore, mère Catherine, dit-elle. Et si je suis heureuse, ma sœur Hélène le sera aussi, elle qui gagne avec tant de courage le pain que nous mangeons. »"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits divers",
    "title": "L'attentat contre le prince de Galles",
    "summary": "L'enquête sur l'attentat visant le prince de Galles progresse suite aux aveux de Sipido. Ces déclarations ont permis l'arrestation d'un complice présumé, le nommé Beckers, âgé de dix-huit ans.",
    "paragraphs": [
      "En présence de son père, Sipido a fait de très importantes déclarations qui ont permis d'opérer une nouvelle arrestation. Une scène émouvante s'est produite entre le jeune coupable et son père.",
      "Sipido a affirmé qu'un complot avait été ourdi entre lui et trois de ses camarades à la Maison du peuple. Le jeune homme avait été mis au défi de tirer sur le prince de Galles.",
      "L'auteur de la lettre qui a servi de prétexte à Sipido pour partir de chez lui mercredi vient d'être mis en état d'arrestation. C'est le nommé Beckers, âgé de dix-huit ans."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Exposition Universelle",
    "title": "La Salle des Fêtes",
    "summary": "La construction de la salle des Fêtes, sous la direction de MM. Raulin et Eckmüller, constitue un exploit technique remarquable au sein de la galerie des Machines, achevé en un temps record par les ouvriers.",
    "paragraphs": [
      "Une extraordinaire animation règne en ce moment dans la galerie des Machines où s'élève la salle des Fêtes, édifiée sur les plans de M. Gustave Raulin et de son collaborateur, M. Eckmüller.",
      "Un splendide vitrail circulaire, qui forme un plafond aussi riche qu'original, ne laisse descendre qu'une lumière très douce, très pure, qui enveloppe toute chose d'un délicieux voile d'ombre légère.",
      "La coupole que termine ce vitrail est décorée d'une façon splendide, de sculptures et de peintures décoratives.",
      "M. Gustave Raulin a adopté la forme du cirque comme étant la plus conforme à l'emploi auquel on destinait le palais.",
      "En moins de neuf mois, 1 300 ouvriers ont creusé 250 puits de 9 mètres de profondeur. C'est un véritable tour de force."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Social",
    "title": "La grève de Carmaux",
    "summary": "Le comité de grève de Carmaux annonce l'acceptation par la compagnie de rouvrir les chantiers dès le 5 courant. Les ouvriers maintiennent leur détermination, fidèles à leur lutte pour la dignité.",
    "paragraphs": [
      "Le comité de protestation annonce qu'à la suite des démarches faites auprès de la compagnie pour obtenir la réouverture des chantiers, il a reçu une lettre de la compagnie annonçant son acceptation pour le 5 courant.",
      "Le comité conseille l'énergie, mais aussi le calme et le sang-froid. Il termine en disant que la devise des grévistes sera celle des ouvriers français : vivre en travaillant ou mourir en combattant."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "La mort du général de Villebois-Mareuil",
    "summary": "Le colonel de Villebois-Mareuil, promu général par le président Krüger, a trouvé une mort héroïque en combattant près de Boshof, succombant face à un détachement anglais après une lutte inégale.",
    "paragraphs": [
      "Le général de Villebois-Mareuil a été surpris par un détachement anglais, alors qu'il n'était accompagné que d'une faible escorte, dans les environs de Boshof. Après une lutte héroïque, le général a succombé au feu ennemi.",
      "Le général Roberts télégraphie que le général de Villebois-Mareuil a été tué et que le petit détachement qui l'accompagnait a été fait prisonnier.",
      "Le colonel de Villebois-Mareuil, que le président Krüger avait élevé au grade de général, était né le 22 mars 1847. Il s'était illustré dans plusieurs campagnes militaires avant de venir mettre son épée au service du Transvaal."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Opérations militaires au Transvaal",
    "summary": "Le quartier général s'établit à Redesburg. Tandis que le général Gatacre progresse sans rencontrer d'opposition, le sort d'un détachement anglais isolé reste incertain.",
    "paragraphs": [
      "Le quartier général est actuellement établi à Redesburg. Les Cameron Highlanders ont été dépêchés à Thaba N'chu. Le général Gatacre est arrivé ce matin sans rencontrer de résistance, mais le détachement manquant reste introuvable et est probablement tombé aux mains de l'ennemi.",
      "La compagnie anglaise en question compte environ 100 hommes."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "À Bloemfontein",
    "summary": "La tension demeure vive autour de Bloemfontein : les forces boërs, massées en grand nombre, multiplient les escarmouches et menacent les lignes de communication britanniques malgré la vigilance de Lord Roberts.",
    "paragraphs": [
      "Londres, 6 avril : Le général French est retourné à l'est de Bloemfontein où il a pris position. Les chevaux sont épuisés et les Boërs, dans un périmètre de 15 kilomètres, disposent de plus de 20 000 cavaliers.",
      "Londres, 6 avril : Les Boërs se sont montrés avec trois canons vers Bushmankop pour tenter de tourner la ville. Une canonnade a été entendue au sud, laissant supposer une tentative de sabotage de la voie ferrée.",
      "Londres, 6 avril : Une brigade d'infanterie occupe Bushmankop. Des patrouilles boërs sont signalées au nord-ouest de Bloemfontein et la surveillance des avant-postes est constante.",
      "Londres, 6 avril : Le correspondant du Standard confirme la concentration de 20 000 Boërs dans les environs et l'arrivée continue de renforts.",
      "Bloemfontein, 5 avril : Des détachements boërs ont été aperçus. Les Lumsden's Horse sont arrivés et ont été passés en revue par Lord Roberts. Les Boërs ont tiré sur un train à Jaggersfontein Road ainsi que sur les avant-postes."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Incident à Norval's Pont",
    "summary": "Des renforts de hussards ont été dépêchés d'urgence à Edenburg afin de porter secours à une unité des Royal Irish Rifles, prise au piège dans les collines par un contingent supérieur de forces boërs.",
    "paragraphs": [
      "Norval's Pont, 5 avril : Des hussards ont été débarqués à Edenburg pour secourir une compagnie des Royal Irish Rifles, acculée dans les collines par plusieurs milliers de Boërs."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "À Wepener",
    "summary": "Les forces boërs maintiennent la pression sur les positions anglaises à Wepener. Une sommation de capitulation adressée par un général boër au camp britannique a été rejetée sans la moindre hésitation.",
    "paragraphs": [
      "Londres, 6 avril : Les Boërs poursuivent leurs attaques. Un général boër a envoyé une demande de capitulation au camp anglais, laquelle a été rejetée sans réponse."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Au Natal",
    "summary": "Le général Buller prépare activement une offensive contre les positions du Biggarsberg. Toutefois, la progression des troupes reste suspendue aux risques logistiques liés à une épidémie frappant les bœufs de trait.",
    "paragraphs": [
      "Londres, le 8 avril : Le général Buller prépare activement une offensive sur les positions du Biggarsberg. Toutefois, une épidémie meurtrière menace actuellement les bœufs de trait, compromettant ainsi le ravitaillement et risquant de retarder considérablement les opérations militaires en cours."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Le siège de Mafeking",
    "summary": "La ville de Mafeking demeure sous le joug d'un siège rigoureux mené par un corps de près de 2 000 Boërs, ayant fait subir à la cité un bombardement des plus énergiques le 30 mars dernier.",
    "paragraphs": [
      "Londres, le 6 avril : La place de Mafeking demeure étroitement investie par un effectif de près de 2 000 Boërs. La ville a été soumise à un bombardement des plus énergiques au cours de la journée du 30 mars dernier, sans que l'étreinte des assaillants ne semble se relâcher."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique",
    "title": "MM. Cecil Rhodes et Jameson",
    "summary": "Tandis que M. Cecil Rhodes vient de débarquer à Southampton, des dépêches en provenance du Cap apportent des nouvelles préoccupantes concernant l'état de santé critique de M. Jameson.",
    "paragraphs": [
      "Southampton, avril : M. Cecil Rhodes est arrivé en Angleterre par le paquebot transatlantique.",
      "Londres, le 6 avril : Des dépêches parvenues du Cap signalent que M. Jameson est actuellement retenu par une maladie dont l'état est jugé très préoccupant."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "L'amiral Dewey",
    "summary": "Selon les informations du Herald, la candidature tardive de l'amiral Dewey à la présidence américaine ne semble pas devoir entraver la désignation probable de MM. McKinley et Bryan par leurs partis respectifs.",
    "paragraphs": [
      "New-York, le 6 avril : Selon le Herald, l'entrée en lice de l'amiral Dewey dans la campagne présidentielle intervient à une date trop avancée pour compromettre sérieusement la désignation des candidats MM. McKinley et Bryan, déjà largement pressentis."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Politique",
    "title": "La question des sous-marins",
    "summary": "M. Goschen, premier lord de l'Amirauté, a exposé à la Chambre des communes la doctrine britannique concernant les sous-marins, insistant sur la nécessité de privilégier une stratégie d'action défensive.",
    "paragraphs": [
      "Londres, avril : Le premier lord de l'Amirauté, M. Goschen, a déclaré devant la Chambre des communes que les services de l'Amirauté étudient actuellement avec attention la question des sous-marins.",
      "Il a souligné la difficulté technique d'opposer un sous-marin à un autre, concluant que, dans l'état actuel de la science navale, l'action défensive doit demeurer la priorité stratégique de la flotte."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Étranger",
    "title": "Chez les Achantis",
    "summary": "Des troubles graves éclatent dans le pays Achanti. Le gouverneur britannique est assiégé à Coumassie, les lignes télégraphiques sont rompues et des renforts Haoussas ont été dépêchés d'urgence pour rétablir l'ordre.",
    "paragraphs": [
      "Londres, 6 avril : La guerre a éclaté entre diverses tribus achanties. Le gouverneur anglais est enfermé à Coumassie ; les communications sont totalement coupées et un détachement de troupes haoussas a été expédié en toute hâte pour intervenir sur les lieux du conflit."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Conseil des Ministres",
    "summary": "Le Conseil des ministres s'est tenu hier au palais de l'Élysée, sous la présidence de M. le Président de la République, Émile Loubet, afin d'expédier les affaires courantes de l'État.",
    "paragraphs": [
      "Les ministres se sont réunis hier, sous la haute présidence de M. Émile Loubet, afin d'expédier les affaires courantes du gouvernement."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Politique",
    "title": "Décorations de l'Exposition et Faillites",
    "summary": "Le Sénat a délibéré sur le projet de loi concernant les décorations de l'Exposition universelle ainsi que sur la proposition de M. Bérenger relative à la réhabilitation des faillis. Les commissions soutiennent ces textes.",
    "paragraphs": [
      "Le Sénat examine actuellement le projet de loi portant sur les décorations de l'Exposition universelle, ainsi que la proposition déposée par M. Bérenger relative à la réhabilitation des faillis. Les commissions compétentes se sont déclarées favorables à ces deux projets."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Chambre des Députés",
    "title": "Séance du vendredi 6 avril",
    "summary": "La Chambre a voté le rattachement de l'armée coloniale au ministère de la Guerre. Le général de Galliffet a dissipé les craintes de coup d'État, et la question du camp de Sissonne a été longuement débattue.",
    "paragraphs": [
      "La Chambre a procédé au vote du projet de loi concernant l'armée coloniale. Le rattachement au ministère de la Guerre est désormais acté, malgré les tentatives visant à placer ces troupes sous l'autorité de la Marine.",
      "Un amendement déposé par M. Marcel Sembat sur le stationnement des troupes a donné l'occasion au général de Galliffet de se prononcer sur les prétendus risques de coups d'État, risques qu'il a jugés inexistants.",
      "La Chambre a également abordé le problème du camp de Sissonne, où une épidémie de typhoïde a sévi, et a validé l'élection de M. Fachard."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Sénat",
    "title": "Discussion du budget",
    "summary": "Le Sénat a débattu des budgets de la Marine et de l'Agriculture. M. Jean Dupuy a analysé la crise des cours du blé, qu'il attribue à une récolte médiocre et à la concurrence des céréales étrangères.",
    "paragraphs": [
      "Le Sénat a procédé à l'examen des budgets de la Marine et de l'Agriculture. M. Jean Dupuy a répondu aux interpellations concernant le crédit agricole et la baisse des cours du blé, attribuant cette situation aux mauvaises récoltes précédentes ainsi qu'à l'afflux massif de blé étranger."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Conseil Municipal de Paris",
    "title": "Séance du vendredi 6 avril",
    "summary": "Lors de la séance du vendredi 6 avril, le Conseil municipal de Paris a voté des secours pour des ouvriers sinistrés et a débattu des conditions d'admission aux écoles supérieures et de l'achat d'un tableau de Gustave Courbet.",
    "paragraphs": [
      "Le Conseil a voté un secours pour les ouvriers victimes d'un incendie et a discuté des conditions d'admission aux écoles supérieures de la Ville.",
      "Divers crédits ont été alloués pour des travaux d'irrigation et d'aqueducs, ainsi que pour l'acquisition d'un tableau du maître Gustave Courbet destiné aux collections municipales."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'affaire du crime d'Arcueil-Cachan",
    "summary": "Le juge d'instruction poursuit l'interrogatoire de Choquart concernant l'assassinat de la veuve Templier. Malgré sa défense initiale, le prévenu faiblit face aux preuves et semble prêt à passer aux aveux.",
    "paragraphs": [
      "Le juge d'instruction a procédé à un nouvel interrogatoire de Choquart, auteur présumé de l'assassinat de la veuve Templier. Le coupable, qui s'était jusqu'ici retranché derrière la thèse de la légitime défense, semble faiblir devant les preuves accumulées et pourrait prochainement passer aux aveux complets."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Théâtre",
    "title": "La Clairière au Théâtre-Antoine",
    "summary": "Analyse de la pièce de MM. Maurice Donnay et Lucien Descaves au Théâtre-Antoine, une œuvre traitant de la question sociale à travers une expérience de phalanstère au dénouement profondément désabusé.",
    "paragraphs": [
      "Analyse de la nouvelle pièce de MM. Maurice Donnay et Lucien Descaves, traitant de la question sociale à travers l'expérience d'une communauté phalanstérienne établie dans une ferme abandonnée. Une œuvre généreuse dans ses intentions, mais au dénouement profondément pessimiste."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Échos",
    "title": "Nouvelles diverses",
    "summary": "La Société des artistes français a inauguré son vernissage place Breteuil, tandis que la sphère diplomatique parisienne enregistre l'arrivée du docteur Leyds, ministre du Transvaal.",
    "paragraphs": [
      "Le vernissage de la Société des artistes français a eu lieu aujourd'hui, place Breteuil, en présence de nombreuses personnalités du monde des arts. Par ailleurs, le docteur Leyds, ministre du Transvaal, est arrivé à Paris pour une série d'entretiens diplomatiques."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Nécrologie",
    "title": "Obsèques d'un éminent savant",
    "summary": "Le tout-Paris scientifique et politique a rendu un dernier hommage à un illustre savant. La cérémonie, célébrée à l'église Saint-Sulpice, a rassemblé les plus hautes autorités de l'État et de l'Académie.",
    "paragraphs": [
      "La Société des amis des sciences et l'Institut Pasteur ont tenu à rendre un dernier hommage à l'éminent représentant que la science française vient de perdre.",
      "M. Georges Leygues, ministre de l'Instruction publique, assistait aux obsèques. Le Président de la République s'était fait représenter par le lieutenant-colonel Bon, et le gouverneur militaire de Paris par le commandant Bournaget.",
      "La levée du corps a été faite au domicile mortuaire, rue de Tournon. La cérémonie religieuse a été célébrée à l'église Saint-Sulpice, comble pour la circonstance.",
      "Au cimetière Montparnasse, le corps a été déposé dans un caveau provisoire. Les discours d'adieu ont été prononcés par MM. Jules Lemaître, Maurice Lévy, Gaston Paris, Perrot, Darboux et M. Duclaux."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Début d'incendie au Salon des artistes français",
    "summary": "Un commencement d'incendie s'est déclaré hier soir dans les bureaux du Salon des artistes français, avenue de Breteuil. Le sinistre fut rapidement maîtrisé, non sans qu'un sous-brigadier ne soit légèrement blessé.",
    "paragraphs": [
      "Un commencement d'incendie s'est déclaré hier soir, vers neuf heures, dans les bureaux d'administration du Salon des artistes français, sis avenue de Breteuil.",
      "Le gardien de nuit, ayant laissé sa lampe allumée sur une table basse dans un local servant de dépôt, a retrouvé à son retour le local embrasé par un départ de feu.",
      "Des passants ont donné l'alerte. Un sous-brigadier et des agents ont pénétré dans les baraquements et, avec l'aide des pompiers, ont maîtrisé le sinistre. Le sous-brigadier a été légèrement blessé à la main."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Drame conjugal rue Duhesme",
    "summary": "Une vive altercation rue Duhesme a mené Mme Léontine Lacatte à tirer deux coups de revolver sur son mari, qu'elle accuse d'avoir dilapidé sa dot. M. Lacatte, blessé, a été transporté à l'hôpital.",
    "paragraphs": [
      "Les locataires de l'immeuble situé 113, rue Duhesme, ont été mis en émoi hier matin par des cris et des détonations.",
      "Mme Léontine Lacatte, trente-quatre ans, a tiré deux coups de revolver sur son époux, âgé de trente-six ans, à la suite d'une discussion animée. M. Lacatte a été atteint à la joue et à l'omoplate.",
      "Interrogée, Mme Lacatte a déclaré ne point regretter son geste, affirmant que son mari ne l'avait épousée que pour sa dot, qu'il aurait dissipée en trois ans. Elle a été dirigée sur le dépôt."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Agression d'un imprimeur à Clichy",
    "summary": "Adolphe Suau, imprimeur sur étoffes, fut victime d'une violente tentative d'étranglement par trois individus rue du Parc, à Clichy. Les malfaiteurs sont activement recherchés par la police.",
    "paragraphs": [
      "Adolphe Suau, un imprimeur sur étoffes de quarante-trois ans, a été assailli par trois individus qui ont tenté de l'étrangler alors qu'il se rendait à son travail, rue du Parc. Les agresseurs ont pris la fuite et sont activement recherchés par les autorités."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Accident au parc aérostatique de Chalais",
    "summary": "Une grave négligence lors d'une expérience au parc aérostatique de Chalais a causé l'asphyxie de quatre soldats du génie, qui ont dû être conduits d'urgence à l'hôpital militaire de Versailles.",
    "paragraphs": [
      "Un grave accident s'est produit au parc aérostatique du génie de Chalais. Par suite d'une négligence du soldat Hérart, du 1er régiment du génie, quatre de ses camarades ont failli être asphyxiés au cours d'une expérience et ont dû être transportés d'urgence à l'hôpital militaire de Versailles."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Découverte de squelettes à Vincennes",
    "summary": "Des terrassiers ont mis au jour à Vincennes deux squelettes humains accompagnés de restes de harnachement, vraisemblablement liés aux événements de l'occupation française de 1814.",
    "paragraphs": [
      "Des terrassiers travaillant rue de Paris à Vincennes ont découvert hier matin deux squelettes parfaitement conservés, appartenant à un homme et une femme, ainsi que des restes d'une selle et d'un cheval. On présume qu'il s'agit de victimes de l'occupation de 1814."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Exposition Universelle",
    "title": "La statue de la Parisienne maintenue",
    "summary": "Après concertation entre M. Millerand, ministre du Commerce, et M. Alfred Picard, commissaire général, la statue de M. Moreau-Vauthier ornant la porte monumentale de l'Exposition est officiellement maintenue.",
    "paragraphs": [
      "Suite à une entrevue entre M. Millerand, ministre du Commerce, et M. Alfred Picard, commissaire général de l'Exposition, il a été décidé de maintenir la statue de M. Moreau-Vauthier, située au-dessus de la porte monumentale."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Les Livres",
    "title": "Critique littéraire : Défense maritime et coloniale",
    "summary": "Le député du Rhône, M. Fleury-Ravarin, publie un ouvrage documenté intitulé 'Votre défense maritime et coloniale', abordant les enjeux cruciaux de la flotte française et de l'administration de nos colonies.",
    "paragraphs": [
      "M. Fleury-Ravarin, député du Rhône, a publié un ouvrage très documenté intitulé 'Votre défense maritime et coloniale'. L'auteur y traite des questions essentielles de la réorganisation de notre flotte, de la marine marchande et de la défense des colonies."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Programme des représentations théâtrales",
    "summary": "Le théâtre de l'Odéon et la Renaissance inaugurent de nouvelles pièces ce soir, tandis que le théâtre Cluny entame une nouvelle saison sous la direction de M. Alphonse Lemonnier.",
    "paragraphs": [
      "Ce soir, à l'Odéon, première représentation du 'Chaperon rouge' de M. Lefebvre-Henri. Au théâtre de la Renaissance, première représentation de 'Miss Helyett' de Maxime Boucheron.",
      "Le théâtre Cluny a été loué pour quatre mois à M. Alphonse Lemonnier, qui débutera sa programmation avec la pièce 'Le Roceur'."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Feuilleton",
    "title": "Deux Passions - Grand Roman Inédit",
    "summary": "En proie à une jalousie dévorante, Georges Dufresne intercepte Paul Tavernier sur une route isolée, déterminé à provoquer un duel sanglant pour laver son honneur et régler leurs comptes.",
    "paragraphs": [
      "Trompé par les apparences, ignorant le lien qui l'unissait à Suzanne et les causes si naturelles qui l'avaient amené à se rapprocher d'elle, à changer de vie et à oublier sa misanthropie dans les joies d'une famille prête à l'accueillir avec bonté comme un de ses membres, il n'attribuait la résolution de Paul Tavernier de se retirer dans un bourg aussi isolé qu'au désir de conquérir les faveurs de Suzanne, devenue libre par son divorce, à son amour enfin et sa volonté de prendre auprès d'elle la place follement abandonnée par son ancien ami.",
      "Et à cette pensée, son sang, si facile à échauffer, bouillonnait dans ses veines. Bayadère, emportée par son ardeur et oubliée par son maître, plongé dans ses réflexions, allait dépasser l'avenue du château lorsqu'il l'arrêta.",
      "Il prit ses colis et, remettant les rênes à son domestique, il descendit de voiture. La route était complètement déserte. Pas un promeneur qu'on pût apercevoir ni de près ni de loin.",
      "Le maître de l'Ortrastère demeura au bord de la route jusqu'à ce qu'enfin il eût vu Bayadère qui, d'abord s'en allait au pas, lentement, prendre le trot, et le tilbury rouler dans le lointain et disparaître à plus d'un kilomètre de là, au détour de la route.",
      "Alors, certain d'être seul, ne voyant et n'entendant plus rien dans la campagne, il entra dans l'avenue et bientôt il arriva au milieu du carrefour, à la bifurcation des chemins dont l'un conduisait à la ferme de la Basse-Cour et l'autre à la demeure des Follet et au bois du Breuil.",
      "Si le commissionnaire avait tenu sa partie et remis le billet à Paul Tavernier, le jeune docteur ne devait pas tarder à paraître. Il était un peu plus de quatre heures. La brume avait disparu.",
      "Le ciel était d'un bleu fluide et léger dans lequel il ne restait aucun nuage, mais le froid devenait piquant, et une bise du nord commençait à souffler. La nuit, d'ailleurs, ne devait pas tarder à venir. On était au milieu de février et les jours ne font que commencer à croître.",
      "Georges Dufresne examina ses pistolets et en fit jouer les batteries. Ils étaient en excellent état. C'étaient, du reste, deux belles armes d'une certaine taille, d'un mécanisme très doux et d'une extrême précision. Il retira les épées de leur enveloppe de serge et les examina à leur tour. « Tavernier les connaît bien », pensa-t-il, « et les pistolets aussi. Il ne fera aucune objection. »",
      "Georges Dufresne, ses préparatifs terminés et ne conservant que les pistolets dans les poches de son pardessus, alla se poster à l'entrée de l'avenue et regarda au loin la route du côté d'Orvilliers. Elle était toujours déserte.",
      "Georges Dufresne commençait à se sentir des frissons d'impatience, lorsque dans les lointains de la route, du côté d'Orvilliers, il aperçut la silhouette d'un cycliste, qui semblait tout petit, à cause de la distance, se détacher sur la blancheur de la chaussée. Cette silhouette grandit rapidement et bientôt elle arriva à quelques centaines de mètres de l'avenue.",
      "Un soupir de satisfaction sortit des lèvres de Dufresne. Ce cycliste élégant, souriant, vêtu d'un complet de drap bleu foncé, un petit chapeau gris campé sur sa chevelure sombre, des bas unis sur ses jambes nerveuses, une cigarette aux lèvres, c'était celui qu'il attendait, son ancien ami Paul Tavernier.",
      "À l'entrée de l'avenue, il ralentit sa marche, jeta sa cigarette et tout à coup il s'arrêta. Devant lui, un homme qui venait de se détacher du tronc d'arbre qui le masquait, se dressait, les bras étendus, menaçait, et lui barrait la route."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Fait Divers",
    "title": "Rencontre au carrefour",
    "summary": "Au détour d'un chemin, Georges Dufresne confronte Paul Tavernier, exigeant un duel immédiat et sans témoins. Le face-à-face est tendu, marqué par une hostilité froide et la détermination de Dufresne.",
    "paragraphs": [
      "Paul Tavernier sauta à bas de sa bicyclette et regarda cet adversaire qu'il n'attendait pas. Et soudain, le reconnaissant : « Tiens, c'est toi », dit-il. « Oui, c'est moi. » « Tu m'attendais ? » « Oui, je t'attendais. » « Tu savais donc que j'allais venir ? » « Je le savais, en effet. »",
      "Tavernier sourit et se toucha le front : « Mais alors, reprit-il, c'est toi sans doute qui m'as fait adresser ce billet. » « Je ne le nie pas, c'est moi. »",
      "Tranquillement, l'avocat artiste, métamorphosé en docteur, prit dans la poche de son gilet le papier qu'il avait reçu et l'examina. Et un nouveau sourire, assez méprisant, releva ses lèvres : « C'est parfaitement bien ton écriture », dit-il froidement. « Et moi qui ne m'en suis même pas douté. »",
      "Il tendit le papier à Georges Dufresne et ajouta, non sans hauteur : « Reprends ton œuvre. Elle est de celles qu'il ne faut pas laisser traîner, car elles ne sont pas à l'honneur de ceux qui les font. »",
      "« Tu le veux ? » « Tu avais un but en m'adressant ce mot ? » « Sans doute. » « Celui de me dire d'abord que je les hais autant que tu peux me haïr. » « Ce n'est pas étonnant et je ne t'en fais pas un reproche. Après ? » « Quand on se bat, on le prouve et c'est mon intention. »",
      "« Et comment me le prouveras-tu ? » « En les forçant à se battre avec moi. » « C'est la chose la plus simple du monde ; je pourrais peut-être décliner la rencontre mais je suis à ta disposition. Envoie-moi des témoins. »",
      "« Je n'ai pas le temps. » « C'est indispensable, cependant. » « Non. La preuve, c'est que nous allons nous battre à l'instant. » « Comme cela, à l'impromptu ? » « Comme tu le dis, à l'impromptu. » « Sans témoins ? » « Sans témoins. »",
      "« Diable, tu parais excessivement pressé. » Il tendit à Paul Tavernier deux lignes ainsi conçues : « Je reconnais avoir forcé M. Tavernier de se battre en le menaçant de lui brûler la cervelle s'il refusait. Signé Georges Dufresne. »",
      "Il demanda : « Trouves-tu ta formule suffisante ? » « Ingénieuse et nouvelle. » « Alors tu n'as pas d'objection à me faire ? » « Il serait difficile d'en trouver une de nature à plaire à un quidam prêt à vous envoyer une balle dans la tête. C'est toi qui l'as dit. »",
      "« Et je le ferais. » « Sans regret ? » « Sans regret. » « Tu es un homme de caractère et d'action. Donc, tu veux te battre ? » « Oui. » « Où ça, ici même ? »"
    ]
  }
];
