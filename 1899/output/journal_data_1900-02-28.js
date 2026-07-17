// Date: 1900-02-28
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-02-28 (Version Restaurée, 43 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "La reddition du général Cronje",
    "summary": "Le général Cronje a capitulé sans condition face aux forces britanniques de lord Roberts. Il est actuellement transféré au Cap avec ses 4 000 prisonniers sous la garde du major-général Pretyman.",
    "paragraphs": [
      "Le général Cronje s'est rendu sans condition à lord Roberts après un exploit décisif des troupes britanniques. Reçu à sept heures du matin par le commandant en chef, le général sera envoyé au Cap sous la conduite du major-général Pretyman.",
      "Les prisonniers, au nombre d'environ 4 000 — dont 1 100 Orangistes et 47 officiers — seront regroupés en commandos pour être transférés vers les centres de détention du Cap."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Bilan des prises et pertes anglaises",
    "summary": "Le War Office détaille le matériel saisi lors de la reddition de Cronje. Les listes officielles confirment les pertes britanniques, incluant le général Knox et le général MacDonald parmi les blessés.",
    "paragraphs": [
      "Le War Office a publié la dépêche de lord Roberts détaillant le matériel capturé : quatre canons Krupp de 75 millimètres, deux canons Maxim et neuf canons à projectiles d'une livre.",
      "Parmi les prisonniers figurent des noms notables tels que le commandant Wolverans, le major allemand Albrecht et divers officiers boërs.",
      "Les pertes anglaises, annoncées par le général Roberts, s'élèvent pour les Canadiens à huit hommes, dont un commandant. Le général Knox est blessé, ainsi que le général MacDonald."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Réactions au Parlement anglais",
    "summary": "La reddition de Cronje, annoncée officiellement aux Communes et aux Lords, a suscité une vive allégresse, en dépit des réserves ironiques exprimées par M. William Redmond sur l'équilibre des forces.",
    "paragraphs": [
      "La nouvelle de la capture du général Cronje a été lue à la Chambre des lords par lord Lansdowne et à la Chambre des communes par M. Wyndham, provoquant de vives acclamations.",
      "M. William Redmond a toutefois ironisé sur cette victoire, soulignant le déséquilibre manifeste des forces en présence lors des derniers affrontements."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Pertes de l'armée anglaise",
    "summary": "Au 24 février, les autorités britanniques, par la voix de M. Powel Williams, font état d'un bilan cumulé de 10 742 hommes hors de combat, incluant les tués, blessés et disparus.",
    "paragraphs": [
      "M. Powel Williams a déclaré qu'à la date du 24 février, les pertes totales connues de l'armée anglaise s'élevaient à 10 742 hommes, incluant le cumul des tués, des blessés et des disparus."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Société",
    "title": "L'enthousiasme en Angleterre",
    "summary": "Londres célèbre la victoire avec ferveur. Devant le War Office et au Stock Exchange, la population et les financiers ont manifesté leur patriotisme en ce jour anniversaire de la bataille de Majuba.",
    "paragraphs": [
      "La nouvelle de la victoire s'est répandue dans Londres comme une traînée de poudre. La foule a manifesté sa joie devant le War Office et à Mansion House, célébrant le succès à l'occasion de l'anniversaire de Majuba.",
      "L'ouverture du Stock Exchange a été marquée par une frénésie patriotique, les agents de change entonnant le God Save the Queen."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Actualité internationale",
    "title": "Commentaires de la presse étrangère sur la guerre",
    "summary": "La presse internationale observe le conflit sud-africain : alors que les journaux belges, allemands et italiens saluent l'héroïsme des Boërs, la presse britannique reconnaît la complexité de la campagne.",
    "paragraphs": [
      "Les journaux anglais reconnaissent désormais que la campagne n'est pas près de toucher à sa fin. En Belgique, l'Indépendance belge formule des vœux pour une paix honorable, tandis que le Petit Bleu et le XXe Siècle soulignent avec insistance l'héroïsme des Boërs.",
      "À Berlin, la Gazette de Voss rend un hommage appuyé à Cronjé. À Rome, la presse exprime son admiration pour le général boër, tout en soulignant avec lucidité que la résolution du conflit demeure très incertaine."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Dépêches militaires diverses",
    "summary": "La tension persiste en Afrique du Sud entre mouvements de troupes pour Bloemfontein, combats acharnés autour de Ladysmith et escarmouches au Bechuanaland où des indigènes ont attaqué les positions boërs.",
    "paragraphs": [
      "Des mouvements de troupes importants sont signalés pour assurer la défense de Bloemfontein. Autour de Ladysmith, les engagements militaires se poursuivent avec un acharnement croissant.",
      "Au Bechuanaland, des indigènes ont attaqué les Boërs aux abords de Séquani. Le colonel Plummer maintient, pour sa part, une position de stricte neutralité concernant l'hôpital des Boërs."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident et travaux maritimes",
    "summary": "L'Amirauté investit dans la modernisation des chantiers de Chatham, tandis qu'au Havre, le torpilleur Grenadier subit de lourdes avaries après une collision accidentelle avec un bateau-pilote.",
    "paragraphs": [
      "L'Amirauté vient de signer un contrat portant sur l'établissement d'un nouveau chantier naval à Chatham, pour un montant total de 150 000 livres sterling.",
      "Un incident maritime a frappé le torpilleur Grenadier, qui a subi de graves avaries à la suite d'une collision survenue avec un bateau-pilote dans le port du Havre."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Faits Divers",
    "title": "Arrestation de faux monnayeurs à Bruxelles",
    "summary": "La police de Liège démantèle un réseau de contrefaçon : deux colporteurs ont été appréhendés en possession de fausses pièces de monnaie et du matériel nécessaire à leurs activités illicites.",
    "paragraphs": [
      "La police de Liège a procédé à l'arrestation d'un homme et d'une femme, des colporteurs pris en flagrant délit alors qu'ils tentaient d'écouler de fausses pièces de 1 et 5 francs. Une perquisition minutieuse a permis de mettre la main sur le matériel servant à la contrefaçon."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Brigandage à Statte",
    "summary": "Un vol avec préméditation a été commis au domicile de la veuve Dheur à Statte. Les malfaiteurs, après avoir neutralisé leur victime, se sont emparés d'une somme de 900 francs et de plusieurs bijoux.",
    "paragraphs": [
      "La veuve Dheur a été agressée et bâillonnée par des individus qui, après avoir agi avec une préméditation manifeste, lui ont dérobé une somme de 900 francs ainsi que divers bijoux. Une enquête est en cours."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accident tragique sur l'Escaut",
    "summary": "Un terrible accident sur l'Escaut a coûté la vie à un batelier dont le remorqueur a sombré suite à une rupture de câble. Malgré l'héroïsme du pilote Leyset, le malheureux a succombé à ses blessures à l'hôpital.",
    "paragraphs": [
      "Un accident tragique s'est produit sur l'Escaut : un bateau remorqué a coulé brutalement après la rupture de son câble de traction. Malgré une tentative de sauvetage héroïque entreprise par le pilote Leyset pour extraire le marin des eaux, le batelier, gravement atteint, est décédé peu après son admission à l'hôpital."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Naufrage du paquebot Rex",
    "summary": "Le paquebot suédois Rex a fait naufrage près de Lohme. Le drame s'est avéré particulièrement meurtrier pour cinq femmes de service qui ont péri en tentant désespérément de rejoindre le rivage.",
    "paragraphs": [
      "Le paquebot suédois Rex a sombré au large, s'échouant tragiquement à proximité de Lohme. Au cours des manœuvres de sauvetage improvisées, cinq femmes de service ont malheureusement péri alors qu'elles tentaient, dans une lutte acharnée contre les flots, de gagner la terre ferme."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "International",
    "title": "Exécution tragique aux États-Unis",
    "summary": "Une dépêche de New-York relate une exécution par électrification particulièrement atroce, ayant nécessité cinq tentatives successives pour parvenir au terme du châtiment.",
    "paragraphs": [
      "Une dépêche télégraphique parvenue de New-York rapporte une exécution par électrification d'une nature particulièrement pénible et atroce. Le procédé a été défaillant, nécessitant cinq tentatives successives avant que le décès ne soit officiellement constaté."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "France",
    "title": "Actualité de l'Île de Sein",
    "summary": "Face aux rumeurs de famine circulant au sujet de l'Île de Sein, un baliseur a été dépêché depuis Brest ; son constat rassurant confirme que la situation des habitants demeure sous contrôle et fidèle aux traditions.",
    "paragraphs": [
      "De vives rumeurs concernant une prétendue famine ont circulé avec insistance au sujet de l'Île de Sein. Toutefois, le navire baliseur envoyé en reconnaissance depuis Brest a formellement confirmé que la situation sur l'île n'était nullement critique.",
      "La vie des Iliens, décrite comme rythmée par les travaux de la pêche et la récolte du goémon, demeure fidèle à ses traditions singulières, notamment la pratique ancestrale dite du « Fest ar vac »."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame à Ville-sous-Jarnioux",
    "summary": "Une rixe sanglante a éclaté dans un débit de boisson à Ville-sous-Jarnioux. M. Thibert, le propriétaire, a été sauvagement poignardé à huit reprises par trois ouvriers qui sont actuellement en fuite.",
    "paragraphs": [
      "Une bagarre d'une violence inouïe a éclaté dans un débit de boisson à Ville-sous-Jarnioux. Au cours de cette rixe, le propriétaire, M. Thibert, a été sauvagement agressé et grièvement blessé de huit coups de couteau par trois ouvriers, lesquels ont immédiatement pris la fuite après leur forfait."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Société",
    "title": "Célébrations du Mardi Gras",
    "summary": "Malgré une ondée persistante, les Parisiens n'ont point boudé leur plaisir. Sur les grands boulevards, la fête a battu son plein, rythmée par la traditionnelle et joyeuse bataille de confettis.",
    "paragraphs": [
      "Malgré une pluie persistante, les Parisiens ont manifesté leur gaieté lors du Mardi Gras, animant les grands boulevards par une joyeuse et traditionnelle bataille de confettis."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Politique",
    "title": "La réforme de l'heure légale",
    "summary": "Afin de mettre un terme à la confusion régnant dans les services publics et les relations internationales, le projet d'unification de l'heure légale française recueille l'appui des autorités compétentes.",
    "paragraphs": [
      "Il s'agit simplement, en mettant l'heure légale française en harmonie avec celle du fuseau dans lequel nous nous trouvons placés, de faire cesser une situation confuse au point de vue des communications télégraphiques, des chemins de fer et des relations internationales.",
      "L'urgence de l'adoption de ce projet a été appuyée par les compagnies de chemins de fer, les services nautiques de la Marine, l'administration des Postes et Télégraphes et le ministère des Travaux publics. Des professeurs de la Sorbonne et du Bureau des longitudes se sont également prononcés en faveur de la réforme.",
      "M. Boudenoot compte que le Sénat ratifiera le vote de la Chambre avant l'ouverture de l'Exposition."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Échos",
    "title": "État de santé du général de Galliffet",
    "summary": "Le ministre de la Guerre, le général de Galliffet, est actuellement terrassé par une broncho-pneumonie. Si son grand âge impose une convalescence prolongée, ses jours ne sont pas jugés en péril.",
    "paragraphs": [
      "Le général de Galliffet, ministre de la Guerre, est atteint d'une broncho-pneumonie. Bien qu'inquiétante en raison de son âge, la situation ne présente pas, paraît-il, de danger immédiat.",
      "Le docteur Lereboullet, qui assure ses soins, a formellement interdit toute activité et préconise une convalescence des plus rigoureuses."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Lettres",
    "title": "La lettre du duc d'Orléans à Willette",
    "summary": "Le Times révèle une correspondance du duc d'Orléans adressée à l'artiste Willette. Le prétendant y célèbre la vigueur du crayon du dessinateur, digne héritier de l'esprit national français.",
    "paragraphs": [
      "Le Times publie le texte d'une missive adressée par le duc d'Orléans au dessinateur Willette à la suite d'un numéro du journal 'Le Rire'.",
      "Le duc y exprime sa vive admiration pour la vigueur du trait de l'artiste, qui a su traduire avec éclat la pensée d'un fils de France, héritier de ces rois qui surent braver les Anglais."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une recordwoman des enterrements",
    "summary": "Miss Sophia Christian, une jeune Pennsylvanienne, fait montre d'une assiduité morbide. Depuis ses quatorze ans, elle assiste à près de 310 convois funèbres par an, suivant les défunts jusqu'au cimetière.",
    "paragraphs": [
      "Miss Sophia Christian, une jeune Américaine, détient un record pour le moins singulier : depuis l'âge de quatorze ans, elle assiste à tous les enterrements notoires de l'État de Pennsylvanie.",
      "Elle revêt ses habits de deuil, suit religieusement la cérémonie et accompagne le convoi jusqu'à sa dernière demeure. Elle totalise déjà des milliers d'assistances, soit une moyenne annuelle de 310 enterrements."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Statistiques sur les accidents en Allemagne",
    "summary": "Une étude du ministère de l'Intérieur allemand révèle que les accidents, bien que répartis uniformément sur la semaine, atteignent une fréquence plus élevée au cours de la journée du lundi.",
    "paragraphs": [
      "Un rapport récent du ministère de l'Intérieur allemand démontre que, sur une moyenne hebdomadaire de 9 948 accidents enregistrés, la répartition est assez uniforme sur la semaine, si l'on excepte le dimanche.",
      "Il ressort de cette étude statistique que le lundi peut être considéré comme le jour le plus fatal, bien que les autres journées ouvrières présentent une sinistralité tout aussi néfaste."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Vie Mondaine",
    "title": "La foire aux baisers à Londres",
    "summary": "Au Palace Theater de Londres, une vente aux enchères singulière a permis à miss Ada Reeve d'acquérir le droit d'embrasser le directeur du théâtre pour 125 francs, au profit des soldats de Ladysmith.",
    "paragraphs": [
      "Au Palace Theater de Londres, une vente aux enchères originale a eu lieu : le droit d'embrasser M. Charles Morton, directeur de l'établissement.",
      "Ce privilège insolite a été adjugé à miss Ada Reeve pour la somme de 125 francs, laquelle sera intégralement reversée au profit des soldats du camp de Ladysmith."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Social",
    "title": "L'anthropométrie scolaire à Chicago",
    "summary": "Les autorités scolaires de Chicago généralisent l'usage des méthodes de M. Bertillon pour mesurer trimestriellement la condition physique et nerveuse des écoliers, suscitant des interrogations sur la méthode.",
    "paragraphs": [
      "Le Board of Education de Chicago a décidé d'appliquer les méthodes de M. Bertillon aux écoliers. Les directeurs d'établissements ont désormais l'obligation de procéder à une mensuration trimestrielle de leurs élèves.",
      "Ces mesures détaillées incluent le poids, la taille, la circonférence du crâne, ainsi que des tests de vue et d'ouïe. Des appareils complexes, tels que le dynamomètre ou l'ergographe, sont employés pour évaluer la force et l'énergie nerveuse des enfants.",
      "Une telle précision scientifique, appliquée au milieu scolaire, soulève la question de son utilité réelle dans le processus d'instruction des élèves."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'incendie de Saint-Ouen",
    "summary": "Le commandant des sapeurs-pompiers de Londres a exprimé sa solidarité envers les victimes de l'incendie survenu dimanche dernier ; les blessés, hospitalisés à Bichat, voient leur état général s'améliorer.",
    "paragraphs": [
      "Le commandant des sapeurs-pompiers de Londres a adressé ses félicitations et l'expression de sa sympathie aux victimes de l'incendie de dimanche dernier.",
      "Les blessés actuellement soignés à l'hôpital Bichat présentent une amélioration sensible de leur état, à l'exception de Mme veuve Herbin, dont la condition demeure stationnaire."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une affaire de viande avariée",
    "summary": "Le parquet de la Seine instruit une affaire visant un boucher de Champigny, suspecté d'avoir commercialisé de la viande bovine malsaine, pourtant estampillée par le service sanitaire des Halles.",
    "paragraphs": [
      "Le parquet de la Seine a ouvert une enquête sur une affaire impliquant un boucher de Champigny, accusé d'avoir mis en vente publique une poitrine de taureau de qualité malsaine.",
      "Le commerçant soutient que la viande portait dûment l'estampille du service sanitaire lors de son acquisition aux Halles centrales. L'instruction se poursuit afin de déterminer avec précision l'origine du bétail incriminé."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Meurtre pour une pièce d'un franc",
    "summary": "Un maçon, Victor Thulmann, a été mortellement frappé rue Beaunier au cours d'une dispute tragique pour une pièce d'un franc. Son meurtrier, le nommé Palet, a été écroué.",
    "paragraphs": [
      "Victor Thulmann, maçon, a été mortellement blessé dans une bagarre rue Beaunier à la suite d'une discussion s'envenimant pour une pièce d'un franc après une partie de jeu.",
      "Son agresseur, le nommé Palet, a été arrêté par les agents de la force publique et mis immédiatement à la disposition de la justice."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Disparition d'un régisseur",
    "summary": "Le régisseur des Folies-Belleville, M. Wouters, est activement recherché pour le détournement de fonds appartenant à la Société des auteurs dramatiques. Le directeur a porté plainte.",
    "paragraphs": [
      "Le directeur des Folies-Belleville a signalé aux autorités la disparition subite de son régisseur, M. Wouters, lequel a détourné à son profit une somme importante destinée à la Société des auteurs dramatiques."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'une bande de jeunes malfaiteurs",
    "summary": "La police du quartier Bonne-Nouvelle a démantelé une bande de jeunes malfaiteurs. Le chef, âgé de dix-huit ans, a confessé plusieurs projets criminels ; ses complices ont été saisis avec leurs outils de cambriolage.",
    "paragraphs": [
      "Le commissaire de police du quartier Bonne-Nouvelle a mis fin aux agissements d'une bande de jeunes malfaiteurs dont aucun des membres ne dépasse vingt-trois ans.",
      "Le chef, âgé de dix-huit ans, a avoué plusieurs projets de vols et d'assassinats. Ses complices ont été arrêtés en possession de fausses clefs et de tout l'attirail nécessaire aux cambriolages."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Tentatives de meurtre à Paris",
    "summary": "Une vague de violence frappe la capitale : un ouvrier poignardé à Belleville et un imprimeur visé par des coups de revolver au Combat. Les enquêtes sont en cours pour retrouver les auteurs.",
    "paragraphs": [
      "Plusieurs agressions sanglantes ont eu lieu dans la capitale. Rue de Belleville, un ouvrier a été grièvement blessé d'un coup de couteau au cours d'une vive altercation.",
      "Dans le quartier du Combat, un ouvrier imprimeur a été pris pour cible par deux coups de revolver tirés par un inconnu. Une enquête judiciaire est ouverte pour identifier l'agresseur."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Autour de Paris",
    "summary": "La banlieue parisienne est le théâtre d'une série noire : homicides à Clichy, agressions à Levallois et Bezons, et découverte tragique d'un corps à Argenteuil.",
    "paragraphs": [
      "À Clichy, Mme veuve Tricard a succombé à ses blessures après une agression au couteau. À Levallois-Perret, Mme Gayrard a été grièvement atteinte en portant secours à une femme agressée.",
      "À Bezons-les-Bruyères, M. Tourier a été blessé par un ancien concierge mécontent. Enfin, à Argenteuil, un jardinier a découvert, en travaillant, le cadavre d'un chemineau mort d'inanition."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Faits Divers",
    "title": "La crue de la Marne",
    "summary": "Les pluies persistantes provoquent une inquiétante crue de la Marne. Les îles et les chemins de halage de la vallée sont submergés, mais la vigilance des sauveteurs permet, pour l'heure, d'éviter tout accident.",
    "paragraphs": [
      "Depuis hier, la Marne a subi une hausse considérable qui, après les pluies persistantes de ces derniers jours, inspire les plus vives inquiétudes aux populations riveraines.",
      "Les îles de Chelles sont entièrement submergées et les eaux commencent à gagner les plaines de Noisiel. À Neuilly-sur-Marne et au Perreux, la rivière atteint le faîte des berges et le chemin de halage est coupé sur plusieurs points.",
      "À Nogent-sur-Marne, les îles de Beauté, des Loups et d'Amour sont atteintes ; les petits bras sont pleins bords et la rivière menace de déborder, empêchant alors toute communication.",
      "À Joinville-le-Pont, la route de Nogent, sur la rive droite de la Marne, est envahie depuis hier matin, près du sémaphore, sur deux cents mètres environ. Sur la rive gauche, le ruisseau de Polangis menace d'envahir les plaines de Palissy ; celle de Fanac n'est encore qu'en partie couverte à son extrémité ; quant à celle de l'Hermitage, elle est entièrement submergée.",
      "Le barrage de Joinville-Saint-Maur est complètement couvert. Les îles de Champigny, de Chennevières, de Bonneuil et de Saint-Maurice sont inondées.",
      "La Société des sauveteurs de la Marne a établi sur plusieurs points du cours de la rivière des postes de surveillance prêts à parer à toute éventualité. On ne signale jusqu'ici aucun accident."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Science et Santé",
    "title": "Honneur au mérite : Le professeur Busch et la calvitie",
    "summary": "La Société de Médecine de France a homologué la sève capillaire du professeur Busch. Grâce aux propriétés du chlorhydrate de pilocarpine, cette découverte promet de vaincre définitivement la calvitie.",
    "paragraphs": [
      "Après une longue enquête et de minutieuses analyses, la Société de Médecine de France, toujours si avare de cette haute faveur, vient de délivrer un certificat d'approbation au professeur Busch pour la sève capillaire qui porte son nom.",
      "C'est la consécration officielle de la belle découverte, faite par ce savant spécialiste, des propriétés si curieuses que possède le chlorhydrate de pilocarpine d'engendrer de la substance pilaire, et la juste récompense de ses remarquables travaux sur les nouveaux agents thérapeutiques des maladies du cuir chevelu.",
      "Grâce au professeur Busch, la calvitie est définitivement vaincue. Il est acquis que la science moderne possède désormais le moyen sûr de faire pousser les cheveux et la barbe, quelles que soient la gravité ou l'ancienneté du mal qui en a empêché la croissance ou qui en a provoqué la chute. Seront donc chauves, à l'avenir, ceux seuls qui le voudront bien.",
      "C'est par milliers déjà que se comptent les cures authentiques et légalement constatées obtenues par le professeur Busch. Les attestations sont d'ailleurs à la disposition des incrédules à son laboratoire de Paris, 10, rue des [....]. Au surplus, il suffit d'aller le voir ou de lui écrire pour recevoir gratuitement de lui le moyen de recouvrer rapidement et à tout âge sa chevelure."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Exposition Universelle",
    "title": "Le Palais des Armées de terre et de mer",
    "summary": "Près du pont de l'Alma, le Palais des Armées se prépare à présenter ses collections rétrospectives. Si les nations restent discrètes sur leurs armements modernes, l'intérêt historique sera majeur.",
    "paragraphs": [
      "Le palais des Armées de terre et de mer, construit sur les plans de MM. Auburtin et Undenstock, architectes, s'élève, comme on sait, sur les bords de la Seine, en aval du pont de l'Alma.",
      "Ce palais réunira dans ses salles les collections les plus curieuses qu'il soit possible de rêver, mais les expositions particulières et étrangères seront loin de représenter les derniers progrès en matière d'armement, car il est d'ores et déjà convenu, de façon tacite, que les nations étrangères n'exposeront pas publiquement les derniers modèles de guerre.",
      "Par contre, les expositions rétrospectives décennales et centennales présenteront un incontestable intérêt, et chacun pourra en peu de temps se faire une idée exacte des progrès réalisés et des changements survenus tant dans l'armement que dans le costume des armées européennes.",
      "Sous l'érudite et intelligente direction de M. Bouvier, chargé des installations de ce palais, évolue une armée d'ouvriers, et il est permis de croire que tout sera prêt dès le 15 mars et peut-être avant. On prévoit dès à présent un gros succès.",
      "On pourra admirer les derniers modèles des voitures d'ambulance, les lourdes pièces de siège, les petits canons de campagne, les batteries de montagne accompagnés de leurs projectiles, ainsi qu'une intéressante reconstitution des uniformes de la Révolution et du premier Empire. L'Allemagne, l'Angleterre, la Belgique, l'Autriche, la Russie, l'Italie, l'Espagne, la Suisse, la Perse, etc., ont procédé avec un soin jaloux au choix de leurs pièces d'exposition."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Exposition Universelle",
    "title": "Les visites aux chantiers",
    "summary": "L'engouement du public pour l'Exposition Universelle est massif : 80 000 visiteurs ont déjà arpenté les chantiers depuis le 1er janvier, un chiffre bien supérieur à celui de 1889.",
    "paragraphs": [
      "Les visites aux chantiers ont été innombrables depuis le commencement de l'année ; une statistique établie approximativement accuse un chiffre de 80 000 visiteurs depuis le 1er janvier. Si l'on songe à l'énorme affluence des étrangers, on trouvera ce chiffre absolument normal, encore qu'il dépasse de plus de moitié le chiffre correspondant de 1889. Sur ce chiffre total, les entrées du dimanche gras sont portées pour plus de trois mille."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Exposition Universelle",
    "title": "Les accidents de travail",
    "summary": "Le commissariat général de l'Exposition dément les rumeurs alarmistes : la mortalité sur les chantiers est en baisse significative comparativement à l'Exposition de 1889.",
    "paragraphs": [
      "Plusieurs de nos confrères ont annoncé, à tort d'ailleurs, que les accidents se multipliaient sur les chantiers de l'Exposition. Il convient de rectifier cette erreur.",
      "D'une déclaration émanant du commissariat général de l'Exposition, il ressort clairement que le chiffre des accidents est en proportion sensiblement inférieur à celui des accidents survenus en 1889. Le nombre des accidents mortels, à la date du 1er février, ne s'élevait pas à vingt ; en 1889 il s'élevait à vingt-neuf."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Exposition Universelle",
    "title": "Importantes adjudications",
    "summary": "Le commissariat général de l'Exposition Universelle organise le 10 mars trois adjudications pour la construction de garages à bicyclettes et automobiles, ainsi que des pavillons et kiosques à Vincennes.",
    "paragraphs": [
      "Trois importantes adjudications auront lieu le 10 mars, à onze heures du matin, dans les bureaux du commissariat général, 97, quai d'Orsay, à Paris. Elles porteront sur la construction de deux garages de bicyclettes, l'un situé avenue Daumesnil, l'autre avenue du Bac, à Vincennes ; la troisième a pour objet la construction d'un garage pour véhicules automobiles.",
      "Le même jour, on adjugera les emplacements des bars, pavillons et restaurants du bois de Vincennes. Enfin, le 15 mars, on procédera à l'adjudication des kiosques de l'annexe de l'Exposition."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Théâtre",
    "title": "Courrier des Théâtres",
    "summary": "Le programme théâtral annonce les créations au Gymnase et au théâtre Antoine, une matinée Rostand, et la désignation de M. Jules Danbé pour le festival de l'Exposition de 1900.",
    "paragraphs": [
      "Le Gymnase fixe à jeudi, irrévocablement, la première représentation de « Un Complot », de MM. Alexandre Bisson et Jean Gascogne. « La Layette » sera jouée ce soir pour la dernière fois.",
      "M. Paul Franck organise pour samedi prochain, à cinq heures, une matinée en l'honneur de M. Edmond Rostand. M. Léo Claretie fera une causerie sur l'œuvre du poète, et Mlles Thomson, Mellot, et M. de Max diront des vers de l'auteur de « L'Aiglon ».",
      "M. Jules Danbé vient d'être désigné pour conduire, à l'Exposition de 1900, le festival qui réunira, le 22 juillet prochain, dans la salle des fêtes du Trocadéro, tous les orphéons de France.",
      "Au théâtre Antoine, après-demain vendredi, aura lieu la première représentation de « L'Empreinte », comédie en trois actes de M. Abel Hermant, et de « Poil de Carotte », un acte de M. Jules Renard."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Faits Divers",
    "title": "Incendie à Londres",
    "summary": "Un incendie a partiellement ravagé le grand théâtre d'Islington, à Londres, dans la matinée du 27 février 1899.",
    "paragraphs": [
      "On télégraphie de Londres qu'un incendie a détruit en partie, hier matin, le grand théâtre d'Islington."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Divertissements",
    "title": "Concerts et divertissements",
    "summary": "L'Olympia triomphe avec le succès populaire de Frégoli, tandis que Parisiana célèbre la cinquantième représentation de la pièce Madame Méphisto.",
    "paragraphs": [
      "Le succès de Frégoli à l'Olympia dépasse toutes les prévisions. Le célèbre artiste a fait encaisser dans les quatre premiers jours la somme de 52 549 francs.",
      "On a fêté hier à Parisiana la cinquantième représentation de « Madame Méphisto ». L'amusante et luxueuse fantaisie de MM. Monréal et Blondeau continue brillamment sa fructueuse carrière."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Météorologie",
    "title": "La température",
    "summary": "Le bulletin météorologique du 28 février 1899 souligne la persistance de pluies généralisées en France et en Europe occidentale sous l'influence d'une dépression atmosphérique.",
    "paragraphs": [
      "Mercredi 28 février, jour de Cendres. La pluie est tombée abondamment pendant toute la journée d'hier. La dépression signalée lundi à l'ouest de la Bretagne passe sur la Manche et s'étend vers l'est.",
      "On signale des pluies dans l'ouest de l'Europe, de la neige en Finlande ; en France, les pluies ont été générales."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Sports",
    "title": "Les courses à Auteuil",
    "summary": "Sous un ciel maussade, le public a assisté aux victoires de Circé II et de Mélibée. La journée s'est achevée sur une surprise : la défaite de Royal Oak, battu de justesse par Casimir lors de la dernière épreuve.",
    "paragraphs": [
      "C'est par un temps fort désagréable que le public s'est rendu, hier, à l'hippodrome d'Auteuil. Le prix des Glacis a été remporté brillamment par Circé II, qui a devancé Mando. Dans la foulée, le prix de Dangu a été enlevé par Mélibée.",
      "La journée s'est terminée par une vive déception pour les parieurs : Royal Oak, donné favori, s'est fait battre d'une encolure par Casimir, au grand étonnement des spectateurs."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Sports",
    "title": "Automobilisme",
    "summary": "L'actualité technique présente le « Petro-Accumobile », un moteur hybride innovant, tandis que le canton de Genève instaure une réglementation stricte imposant un numéro d'ordre sur chaque véhicule.",
    "paragraphs": [
      "Un confrère d'outre-Atlantique, l'American Electrician, nous livre la description d'un nouveau moteur combinant le pétrole avec une dynamo et une batterie d'accumulateurs : le « Petro-Accumobile ».",
      "Par ailleurs, un règlement sur la circulation des automobiles vient d'être édicté dans le canton de Genève, applicable dès le 1er mars prochain. Désormais, toute voiture devra obligatoirement être munie d'une plaque visible portant son numéro d'ordre."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Littérature",
    "title": "Feuilleton du Petit Parisien : Deux Passions",
    "summary": "Poursuite du roman inédit de Charles Mérouvel, Deux Passions, entamé au chapitre treizième de cette œuvre littéraire.",
    "paragraphs": [
      "Roman inédit de Charles Mérouvel (suite du chapitre XIII)."
    ]
  }
];
