// Date: 1900-03-17
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-03-17 (Version Restaurée, 32 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie",
    "title": "Les dépenses d'un peuple",
    "summary": "Une analyse de la consommation française à la fin du XIXe siècle : entre le poids des impôts, les besoins vitaux et l'essor remarquable de l'épargne nationale, le portrait financier d'une nation en pleine activité.",
    "paragraphs": [
      "Il est non seulement instructif et intéressant, il est aussi étrange et impressionnant de se mettre en présence des chiffres enregistrant la consommation d'un grand pays.",
      "Si nous cherchons à évaluer le montant total des impôts proprement dits, répartis sur la population française, nous trouverons que celle-ci dépense cette année environ 3 milliards 200 millions pour l'entretien des institutions collectives. En y ajoutant les monopoles d'État, on arrive à près de 4 milliards, soit 101 francs par habitant.",
      "La population va ensuite vaquer à sa propre subsistance. L'alimentation représente une somme totale de 16 milliards et demi, soit une moyenne de 427 francs par personne.",
      "Le logement, l'habillement, le chauffage, les soins médicaux, les voyages et les spectacles constituent également des postes de dépenses considérables, totalisant des milliards de francs chaque année.",
      "Par cet exposé à peu près complet, on connaît tout ce qu'absorbe et engloutit l'immense activité d'un peuple. Il n'y a plus qu'une admirable constatation à ajouter : l'épargne augmente."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariée en secret",
    "summary": "Tensions à l'hôtel d'Aspremont : face aux velléités d'indépendance d'Henri et au destin religieux de sa sœur Geneviève, le mystère pèse lourdement sur les épaules de la jeune Rolande.",
    "paragraphs": [
      "Le baron de Lorgerac, malgré sa rudesse, ressentit une souffrance aiguë face à la volonté de son fils Henri de se séparer de lui pour mener sa propre vie laborieuse.",
      "Henri annonça son intention de quitter l'hôtel d'Aspremont, tout en demandant au baron d'autoriser sa sœur Geneviève à entrer en religion, ce qui plongea le baron dans une réflexion amère.",
      "Quelques mois plus tard, dans la maison de l'avenue des Ternes, la vie était devenue triste. Rolande, tourmentée par le mystère entourant le départ d'Henri, cherchait des réponses auprès de Claude, sans succès.",
      "Le vicomte de l'Orme, remarquant l'affection de son filleul pour Rolande, chercha à s'entretenir avec la mère de cette dernière au sujet de la peine qui affligeait le jeune homme."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un crime à Clermont-Ferrand",
    "summary": "À Clermont-Ferrand, le meurtre de Mélina Bertines, rue de l'Ente, secoue la ville. Deux employés de brasserie ont été interpellés après avoir avoué une méprise tragique lors d'une rixe nocturne.",
    "paragraphs": [
      "Vers onze heures et demie, hier soir, le secrétaire du commissaire central a découvert une femme, Mélina Bertines, baignant dans son sang rue de l'Ente. Elle est décédée sans pouvoir désigner son meurtrier.",
      "La police a procédé à deux arrestations : les nommés Audanson et Ollier, employés de brasserie. Selon leurs déclarations, après une bagarre dans une maison mal famée, ils auraient attaqué la passante par méprise, la frappant mortellement à la nuque."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Société",
    "title": "L'incendie du Théâtre-Français",
    "summary": "Les travaux de déblaiement du Théâtre-Français se poursuivent sous surveillance. La commission supérieure des théâtres débat désormais du financement du service permanent des pompiers.",
    "paragraphs": [
      "Les travaux de déblaiement se poursuivent et les commerçants ont été informés des mesures d'expulsion si nécessaire. M. Guadet surveille les témoins de fissure pour prévenir tout éboulement.",
      "La commission supérieure des théâtres s'est réunie pour discuter du service permanent des pompiers, décidant que le service de grand'garde pourrait être maintenu si les directeurs en assument les frais."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un éboulement à Viella",
    "summary": "À Viella, un glissement de terrain menace le village. Les habitations, fissurées par l'infiltration des eaux, imposent des travaux de consolidation urgents pour éviter un effondrement vers la route de Luz.",
    "paragraphs": [
      "La situation est inquiétante à Viella, où un glissement de terrain menace le village construit sur le flanc d'une montagne dont les eaux ont infiltré la roche.",
      "Les maisons sont sillonnées de crevasses et les habitants, terrorisés, craignent un effondrement général vers la route de Luz. Des travaux urgents sont nécessaires pour éviter une catastrophe."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "Occupation de Bloemfontein",
    "summary": "Lord Roberts a pris possession de Bloemfontein, accueilli par la population anglophone. Tandis que le général Prettyman organise l'administration, la lutte se poursuit sur le front de Bethulie.",
    "paragraphs": [
      "Lord Roberts est entré à Bloemfontein, où il a été accueilli avec enthousiasme par la population, composée en grande partie d'habitants d'origine anglaise.",
      "Le général Prettyman, nommé gouverneur militaire, a ordonné aux Burghers de rendre leurs armes. Malgré cela, les républicains semblent déterminés à lutter pour leur indépendance.",
      "Sur le front de Bethulie, les Anglais ont réussi à sauver le pont et à repousser les Boërs après un vif engagement. La situation générale reste tendue dans les deux Républiques."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Chronique Parisienne",
    "title": "Les fêtes de la Mi-Carême",
    "summary": "Paris s'apprête à célébrer la Mi-Carême. Une grande cavalcade partira de la place de la Concorde pour saluer le président Loubet lors d'une réception officielle à l'Élysée.",
    "paragraphs": [
      "Les préparatifs des fêtes de la Mi-Carême sont activement poussés avec le soutien de la ville de Paris. La cavalcade partira de la place de la Concorde pour gagner les boulevards.",
      "Un arrêt est prévu à l'Élysée pour la présentation de la Reine des reines au président Loubet, suivi d'une réception officielle."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Politique",
    "title": "Chambre des Députés - Séance du 16 mars",
    "summary": "La Chambre a voté une réforme encadrant le dépôt d'amendements budgétaires pour limiter l'accroissement des dépenses publiques, avec le soutien des députés Aimond, Bouvier et Berthelot.",
    "paragraphs": [
      "La Chambre a poursuivi la discussion de la loi de finances, se concentrant sur les propositions visant à supprimer ou limiter le droit de présenter des amendements au budget, dont la conséquence est l'augmentation des dépenses publiques.",
      "La proposition de MM. Aimond et Bouvier, visant à inscrire ces mesures dans le règlement de la Chambre, a été votée par 472 voix. Elle a été complétée par une disposition additionnelle de M. Berthelot.",
      "M. Aimond a justifié sa résolution, affirmant qu'il souhaite éviter que la Chambre ne se lie par une loi donnant au Sénat des prérogatives judiciaires. Divers amendements, dont ceux de M. Bouvier et M. Massabuau, ont été débattus.",
      "M. Jules Roche, intervenant dans le débat, a plaidé pour une interdiction totale de présenter des dispositions augmentant les dépenses, citant l'exemple de la Chambre des communes d'Angleterre.",
      "Finalement, l'amendement de M. Bouvier, complété par la disposition de M. Berthelot, a été adopté. La séance s'est terminée sur le vote de quelques articles réservés, dont l'octroi de la personnalité civile à l'École nationale des mines."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Politique",
    "title": "Conseil des Ministres",
    "summary": "Sous la présidence de M. Loubet, les membres du gouvernement se sont réunis hier matin à l'Élysée afin de régler les affaires courantes et l'agenda législatif.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin à l'Élysée sous la présidence de M. Loubet pour l'expédition des affaires courantes et l'examen des questions à l'ordre du jour des Chambres."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Politique",
    "title": "Les incompatibilités parlementaires",
    "summary": "Une commission parlementaire propose une loi interdisant le cumul d'un mandat avec des fonctions de direction dans des entreprises industrielles ou des travaux publics, sous peine de démission.",
    "paragraphs": [
      "Une commission spéciale a préparé une proposition de loi sur les incompatibilités parlementaires. Elle prévoit notamment l'incompatibilité du mandat législatif avec les fonctions de nomination de l'État dans les établissements financiers ou industriels, ou la qualité d'entrepreneur de travaux publics.",
      "Les députés et sénateurs exerçant ces fonctions devront opter entre leur mandat et leur profession dans les deux mois suivant la promulgation de la loi, sous peine d'être réputés démissionnaires."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "L'Union républicaine du Sénat",
    "summary": "M. Morellet, nouveau président de l'Union républicaine, exhorte à la cohésion des forces républicaines pour soutenir le ministère Waldeck-Rousseau contre les agissements de la coalition monarchiste et cléricale.",
    "paragraphs": [
      "M. Morellet, nouveau président du groupe de l'Union républicaine, a prononcé une allocution rappelant que le but du groupe est de maintenir le régime républicain et de défendre les intérêts de la démocratie face à la coalition monarchiste et cléricale.",
      "Il a souligné le soutien indéfectible apporté au ministère Waldeck-Rousseau et a appelé à l'union sacrée des républicains pour faire aboutir les réformes urgentes attendues par le pays."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "L'élection du Rhône",
    "summary": "Le troisième bureau du Sénat, dans l'impossibilité de trancher la validité de l'élection de M. Repiquat dans le Rhône en raison d'un partage égal des voix, en réfère à la décision du Sénat.",
    "paragraphs": [
      "Le troisième bureau du Sénat s'est réuni pour statuer sur la validité de l'élection de M. Repiquat dans le Rhône. Les voix s'étant partagées exactement par moitié (10 pour, 10 contre), la question sera exposée directement en séance plénière devant le Sénat pour une décision définitive."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "La Garde Républicaine",
    "summary": "Le général Dalsiein, gouverneur de Paris, a procédé hier après-midi à une manœuvre de mobilisation inopinée des bataillons de la garde républicaine à la caserne Napoléon, conclue avec succès.",
    "paragraphs": [
      "Le général Dalsiein, gouverneur de Paris, a procédé hier après-midi à une mobilisation à l'improviste des bataillons de la garde républicaine, stationnés à la caserne Napoléon. L'ensemble de la manœuvre a été jugé fort satisfaisant par le commandement."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Faits Divers",
    "title": "Un monument au colonel Gillon",
    "summary": "À Chaville, un comité de citoyens s'est constitué dans le but d'ériger un monument commémoratif en l'honneur du colonel Gillon et des soldats tombés au champ d'honneur pour la patrie.",
    "paragraphs": [
      "Un comité vient de se constituer à Chaville afin d'ériger un monument commémoratif à la mémoire du colonel Gillon, ainsi qu'en hommage aux soldats morts pour la patrie."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Social",
    "title": "La Grève de Carmaux",
    "summary": "Les mineurs grévistes de Carmaux réclament des revalorisations salariales et le rétablissement d'acquis sociaux, tout en dénonçant les pratiques discriminatoires de la compagnie en faveur des écoles congréganistes.",
    "paragraphs": [
      "Le comité de grève de Carmaux a rappelé ses revendications essentielles : une augmentation journalière de 25 centimes pour les rouleurs de 23 ans, ainsi que le rétablissement des prix faits pour les enfants de grilles et du train des mineurs.",
      "Le comité dénonce avec véhémence la préférence accordée par la compagnie aux élèves issus des écoles congréganistes, y voyant une atteinte directe à la liberté de conscience des travailleurs."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Conseil Municipal de Paris",
    "title": "Compte-rendu de la séance du 16 mars",
    "summary": "Le Conseil Municipal de Paris examine les projets d'élargissement de la rue de la Banque et de la rue de Rivoli, tout en adoptant des mesures d'hygiène publique contre la tuberculose et la qualité de l'eau.",
    "paragraphs": [
      "Sous la présidence de M. Louis Lucipia, le conseil a débattu de diverses questions administratives, notamment l'élargissement de la rue de la Banque et l'encombrement de la circulation rue de Rivoli.",
      "Sur proposition de la sixième commission, le conseil a décidé de faire placarder des affiches dans tout Paris pour inviter la population à ne pas cracher sur les trottoirs, afin d'enrayer la propagation de la tuberculose.",
      "La question de la qualité des eaux fournies à la population parisienne a également été abordée, menant à une discussion prolongée sur leur provenance et les méthodes de stérilisation envisagées."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Dépêches de l'Étranger",
    "title": "Nouvelles internationales",
    "summary": "Panorama diplomatique : le faste du gala du Tsar à Saint-Pétersbourg, les inquiétudes des puissances en Chine face à la politique de la porte ouverte et l'agitation révolutionnaire en Argentine.",
    "paragraphs": [
      "Le Tsar a tenu un grand gala à l'ambassade de France à Saint-Pétersbourg. En Chine, l'association des puissances craint une rébellion anarchique contraire à la politique de la porte ouverte. En Argentine, un mouvement révolutionnaire a éclaté dans la province d'Entre-Rios."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Théâtre",
    "title": "La Duchesse de Berry à l'Ambigu",
    "summary": "Le théâtre de l'Ambigu présente « La Duchesse de Berry », drame historique d'Arthur Bernède illustrant les tentatives de la princesse pour soulever la Vendée après la chute de Charles X.",
    "paragraphs": [
      "Le théâtre de l'Ambigu a présenté « La Duchesse de Berry », un drame en huit tableaux de M. Arthur Bernède relatant les aventures de la princesse napolitaine cherchant à soulever la Vendée en faveur de son fils après la chute de Charles X."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Social",
    "title": "Bulletin du travail : Les travailleurs des chiffons",
    "summary": "Une délégation de chiffonniers a été reçue par M. de Selves pour exposer les revendications de leur corporation et les conditions précaires inhérentes à leur métier.",
    "paragraphs": [
      "Une délégation des travailleurs des chiffons a été reçue par M. de Selves pour exposer leurs revendications concernant les conditions de leur métier et les risques d'exclusion sociale."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits divers",
    "title": "Le crime de la rue de Malte",
    "summary": "Le juge d'instruction poursuit l'interrogatoire d'Émile Lévy, dit « Milo », inculpé du meurtre de la cabaretière de la rue de Malte, malgré ses dénégations habiles.",
    "paragraphs": [
      "M. Joffré, juge d'instruction, a continué à interroger Émile Lévy, dit Milo, impliqué dans l'assassinat de Mme Caron, la cabaretière de la rue de Malte.",
      "Milo proteste avec énergie contre cette inculpation. Il a fourni son emploi du temps pendant la nuit du crime, et les agents de la sûreté vérifient actuellement les indications fournies.",
      "Quoi qu'il en soit, Milo est un dangereux malfaiteur qui a commis de véritables prouesses. Chef de bande, il se faisait indiquer les coups à faire, les étudiait avec soin sur les lieux et menait une minutieuse enquête avant de désigner ses complices.",
      "L'inculpé est d'une rare intelligence et il se défend avec une grande habileté."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits divers",
    "title": "Un meurtre aux Halles",
    "summary": "Aux Halles, un journalier éconduit, Auguste Legrand, a sauvagement agressé une employée, Mlle Louise Roncin, au moyen d'un couteau. La victime, grièvement blessée au visage, est hospitalisée.",
    "paragraphs": [
      "Un drame sanglant s'est déroulé hier matin, à sept heures, au pavillon 6 des Halles, spécialement affecté aux marchandes de légumes.",
      "Une employée, Mlle Louise Roncin, âgée de vingt-cinq ans, demeurant rue Vauvilliens, était à ce moment importunée par un journalier nommé Auguste Legrand, âgé de vingt-cinq ans, demeurant rue Simon-le-Franc, qui, depuis quelque temps, la poursuivait vainement de ses assiduités.",
      "La jeune fille pria son persécuteur de se retirer et lui déclara qu'elle allait, pour se débarrasser de lui, requérir l'intervention des gardiens de la paix. Auguste Legrand répondit : « Vous ne voulez pas être à moi ; vous ne serez à personne d'autre, car je vais vous tuer. »",
      "Il s'empara aussitôt d'un couteau qui se trouvait sur un comptoir et, saisissant la jeune fille par les cheveux, lui porta un violent coup de son arme à la partie gauche de la figure. La lame perfora la joue, le nez et sortit par la bouche. Tandis que le meurtrier prenait la fuite, la victime a été transportée par des agents dans une pharmacie d'où, après avoir reçu des soins, elle a été dirigée sur l'Hôtel-Dieu. Son état est des plus graves.",
      "Auguste Legrand, pris de remords, est allé, une heure après l'exécution de son forfait, se constituer prisonnier au bureau de M. Labat, commissaire de police du quartier, qui l'a fait remettre à la disposition de M. Eurtat, commissaire de police. Après interrogatoire, ce magistrat a envoyé le meurtrier au Dépôt."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits divers",
    "title": "Dramatique suicide",
    "summary": "Désespéré par le chômage après une longue convalescence, l'ouvrier mécanicien Louis Gibert s'est donné la mort en se jetant par la fenêtre après une tentative de pendaison infructueuse.",
    "paragraphs": [
      "Au cours de la matinée d'hier, M. Leroy, garçon de l'hôtel des Ouvriers laborieux, situé rue d'Angoulême, était occupé à balayer une salle du rez-de-chaussée éclairée par un hall vitré, lorsqu'il entendit un bruit de vitres brisées et vit s'abattre un corps à ses pieds.",
      "Dans l'individu qui venait de tomber et qui demeurait inanimé, ayant autour du cou un fragment de ceinture en cuir fortement serré, il n'eut pas de peine à reconnaître un de ses locataires occupant une petite chambre située au premier étage, M. Louis Gibert, âgé de trente ans, ouvrier mécanicien.",
      "L'enquête ouverte par M. Daltroff, commissaire de police, établit bientôt que l'ouvrier mécanicien, qui était resté assez longtemps en traitement à l'hôpital, en était sorti il y a quinze jours et avait trouvé sa place occupée. Désespéré de ne plus trouver de travail, il avait pris la résolution de se donner la mort.",
      "Dans ce but, il s'était pendu à l'aide de sa ceinture à la clef de la serrure de la porte d'entrée de sa chambre. Mais la ceinture s'étant rompue sous son poids, le malheureux avait ouvert la fenêtre, s'était élancé dans le vide et, passant à travers le vitrage, était venu se briser les reins sur le sol."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue",
    "summary": "La banlieue parisienne a été marquée hier par une série de drames : suicides, accidents mortels du travail à Courbevoie, Villeneuve-la-Garenne et Saint-Denis, ainsi qu'une agression conjugale à Clichy.",
    "paragraphs": [
      "Boulogne-sur-Seine : Désespéré d'avoir été abandonné par sa femme, un ouvrier blanchisseur, Paul Barquet, âgé de quarante ans, s'est pendu à son domicile, rue de La Rochefoucauld.",
      "Courbevoie : Un ouvrier couvreur, Louis Leprince, âgé de trente-huit ans, demeurant à Clichy, a fait hier après-midi une chute de la hauteur du troisième étage dans un chantier de construction, rue de Bois-Colombes. Le malheureux a été grièvement blessé à la poitrine et a eu la cuisse droite broyée.",
      "Villeneuve-la-Garenne : Un garçon livreur, François Sautou, âgé de trente-neuf ans, demeurant à Saint-Ouen, ayant voulu descendre, quai d'Asnières, de son camion en marche, est tombé sous les roues et a eu la cuisse gauche et le bras droit broyés.",
      "Bécon-les-Bruyères : Une jeune fille de dix-neuf ans, Angèle Liénard, demeurant rue Victor-Hugo, s'est suicidée hier soir, vers dix heures, en se tirant un coup de revolver dans la tête.",
      "Clichy : Mme Louise Delargille avait quitté son mari, Robert Delargille, garçon de café, et s'était réfugiée chez sa sœur. Hier, Delargille s'y est rendu, a roué sa femme de coups et a frappé sa belle-sœur d'un coup de couteau à la nuque. Delargille a été arrêté.",
      "Saint-Denis : Un charretier, M. Jean Noël, âgé de soixante-six ans, a été renversé par son tombereau. Les roues lui ont broyé les deux jambes.",
      "Plaine-Saint-Denis : Deux Allemands, Pierre Meissoner et Guillaume Worsehmann, se sont pris de querelle au sujet d'une partie de cartes. Meissoner a blessé si grièvement Worsehmann que ce dernier a dû être admis d'urgence à l'hôpital.",
      "Un cantonnier, Emile Lebras, âgé de quarante et un ans, travaillant sur la voie ferrée, a été tamponné par un train. La mort a été immédiate.",
      "Un terrassier, M. François Paret, âgé de cinquante-sept ans, a été renversé par une charrette chargée de charbon. Il a été dirigé sur l'hôpital Lariboisière.",
      "Saint-Maurice : Un cavalier a été désarçonné par son cheval effrayé par une automobile. Le docteur Rey est intervenu courageusement pour arrêter l'animal lancé à une allure folle."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Actualités",
    "title": "La température et informations météorologiques",
    "summary": "Le temps demeure maussade et peu ensoleillé. Le vent souffle de l'ouest, avec une mer agitée dans le Pas-de-Calais, tandis que des averses sont attendues avec des températures douces sur le reste de la France.",
    "paragraphs": [
      "La pluie est tombée pendant quelques minutes hier matin, mais le sol, à peine mouillé, a bien vite séché et le reste de la journée a été aussi peu ensoleillé que les jours précédents.",
      "Le vent est fort de l'ouest avec mer grosse au Pas-de-Calais. Il est modéré en Bretagne et faible du nord-ouest en Provence.",
      "En France, des averses sont probables, avec temps doux."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Nouvelles théâtrales",
    "summary": "Première représentation d'Éducation de prince aux Variétés ce soir. Les difficultés budgétaires retardent l'installation de l'Odéon au Gymnase, obligeant la troupe à rester au Luxembourg.",
    "paragraphs": [
      "Ce soir, aux Variétés, première représentation d'Éducation de prince, comédie en quatre actes de M. Maurice Donnay.",
      "La commission du budget a refusé de voter le crédit demandé par le ministre de l'Instruction publique pour l'installation provisoire de l'Odéon au Gymnase. Cette décision remet la question entière sur le tapis.",
      "L'Odéon jouera Claudia lundi soir, dans la salle de l'Odéon, au Luxembourg."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Courrier Orphéonique",
    "title": "Concours de fanfares à Ivry",
    "summary": "Le conseil municipal d'Ivry alloue une subvention de 6 000 francs pour l'organisation d'un grand concours international de fanfares qui se tiendra le 3 juin prochain, jour de la Pentecôte.",
    "paragraphs": [
      "Dans sa dernière séance, le conseil municipal d'Ivry a voté une somme de 6 000 francs pour l'organisation d'un grand concours international de fanfares qui aura lieu dans cette ville, le dimanche 3 juin prochain, jour de la Pentecôte. Le règlement sera envoyé très prochainement aux sociétés musicales.",
      "Les adhésions sont dès maintenant reçues par M. Raussel, maire d'Ivry (Seine)."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Courrier Orphéonique",
    "title": "Concours de musique à Vendôme",
    "summary": "La ville de Vendôme organise, le 3 juin, un grand concours d'orphéons, musiques d'harmonie et fanfares, articulé autour d'épreuves de lecture à vue, d'exécution et d'honneur.",
    "paragraphs": [
      "Un grand concours d'orphéons, de musiques d'harmonie et de fanfares est ouvert à Vendôme (Loir-et-Cher) par le comité des grandes fêtes de bienfaisance, le dimanche 3 juin.",
      "Le règlement de cette solennité est publié. Il prévoit trois épreuves : concours de lecture à vue obligatoire ; concours d'exécution avec un morceau imposé et un morceau au choix ; concours d'honneur facultatif pour les sociétés ayant remporté un prix au concours d'exécution.",
      "Adresser les adhésions à M. Ph. Royau, secrétaire général de la commission d'organisation, à la mairie de Vendôme."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Courrier Orphéonique",
    "title": "Festival musical au Crotoy",
    "summary": "Le festival musical du Crotoy, fixé au 3 juin, prévoit la distribution de médailles commémoratives et un tirage au sort de primes en espèces et objets, incluant une palme en vermeil pour la société la plus éloignée.",
    "paragraphs": [
      "La commission d'organisation du festival qui doit avoir lieu au Crotoy (Somme) le 3 juin prochain a décidé d'accorder, indépendamment des médailles commémoratives, les primes suivantes à tirer au sort entre toutes les sociétés qui y prendront part : une prime de 150 francs ; une de 100 francs ; deux de 50 francs ; deux de 30 francs ; une palme en vermeil pour la société la plus éloignée. Deux objets seront également tirés au sort entre les directeurs desdites sociétés.",
      "Adhésions à la mairie du Crotoy."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Courrier Orphéonique",
    "title": "Concours musical à Bolbec",
    "summary": "Le concours musical de Bolbec, prévu le 3 juin, proposera des épreuves de lecture à vue, d'exécution et d'honneur, récompensées par des primes et médailles. Inscriptions jusqu'au 1er mars.",
    "paragraphs": [
      "L'organisation du concours ouvert à Bolbec (Seine-Inférieure) le 3 juin se poursuit activement.",
      "Les trois épreuves de lecture à vue, d'exécution et d'honneur auront lieu le même jour. Les prix consisteront en primes en espèces, couronnes et palmes de vermeil, ainsi qu'en médailles de vermeil et d'argent.",
      "Les adhésions des sociétés seront reçues jusqu'au 1er mars par M. Albert Avenel, secrétaire général du concours, 33, rue Pierre-Fouquet-Lemaître."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Courrier Orphéonique",
    "title": "Résultats du concours de composition de l'Association de jurés orphéoniques",
    "summary": "L'Association de jurés orphéoniques publie le palmarès de son concours de composition pour chorales, harmonies et fanfares, distinguant plusieurs compositeurs et arrangeurs renommés.",
    "paragraphs": [
      "Voici les premiers résultats du concours de composition ouvert par l'Association de jurés orphéoniques :",
      "Pour les chorales : 1re division, prix (400 francs), M. Coulon, chœur, La Fille du marin ; mention, Rondel de Charles d'Orléans ; mention, Les Cadets de Gascogne. 2e division, prix (300 francs), M. Coulon, chœur, La Chanson de la nuit ; mention, A la nuit. 3e division, prix (200 francs), M. Pastor, chœur, Chanson de la paix ; mention, Altéré cavalier.",
      "Arrangements pour harmonies : prix (300 francs), M. Coquelin, La Vie du poète, de Charpentier ; mention (150 francs), 2e Rhapsodie hongroise, de Liszt ; mention (100 francs), ouverture de Beethoven ; mention, ouverture de Judas Macchabée, de Haendel ; mention, Danses cévenoles, de Xavière.",
      "Arrangements pour fanfares : prix (300 francs), M. Jules Verdier, ouverture du Coriolan romain, de Berlioz ; mention (50 francs), 4e symphonie de Beethoven.",
      "Les auteurs ayant obtenu une mention avec prime sont priés de se faire connaître au siège de l'association, 114, rue Rochechouart."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Économie",
    "title": "Bulletin des vins et eaux-de-vie",
    "summary": "Le marché viticole montre une activité contrastée : reprise dans le Gard et l'Hérault, transactions limitées dans le Bordelais et l'Anjou, tandis que les vins nerveux sont activement recherchés par les négociants de Bercy.",
    "paragraphs": [
      "Dans le Gard, les affaires ont repris un peu d'activité. Dans l'Hérault, il se fait toujours quelques achats pour les besoins du commerce local.",
      "Dans l'Aude, il s'est fait quelques reventes de 2 francs à 2 francs 10 le degré pour des vins à 9 degrés. Les vins de 10 à 11 degrés se paient de 22 à 24 francs l'hectolitre.",
      "Dans le Roussillon, les beaux vins conservent le cours de 2 francs le degré ; quant aux vins ordinaires, ils valent de 1 franc 80 à 1 franc 90. Dans le Lot, il y a encore de beaux vins à vendre de 300 à 350 francs le tonneau logé et des vins ordinaires de 150 à 200 francs.",
      "En Armagnac, les affaires sont toujours calmes. Dans le Bordelais, il se fait toujours quelques achats de vins au vignoble. Dans les Charentes, les affaires sont très calmes. En Anjou, il y a peu d'affaires. En Basse-Bourgogne, les prix sont stationnaires. Dans les Beaujolais-Mâconnais et le Lyonnais, les transactions ne sont pas plus actives.",
      "Les négociants de Bercy recherchent les vins nerveux et fruités. Les vins d'Auvergne qui conviennent bien valent de 100 à 120 francs la pièce entrepôt."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Fait Divers",
    "title": "Découverte dans le secrétaire du marquis d'Angeville",
    "summary": "Lors de l'inventaire des biens de son père, Jacques d'Angeville découvre dans un secrétaire une miniature portant l'inscription « À mon ami Tavernier », soulevant des interrogations sur les liens passés du marquis.",
    "paragraphs": [
      "Jacques d'Angeville, héritier du marquis, après avoir examiné les objets laissés par son père, a fait une découverte surprenante dans son secrétaire.",
      "Derrière une paroi mal ajustée, il a découvert une foule d'objets, dont une miniature représentant une jeune femme brune, insérée dans un cadre de cuivre. Au revers de la plaque d'ivoire, il lut cette inscription à demi effacée : « À mon ami Tavernier ».",
      "Ce nom de Tavernier n'est pas inconnu à Jacques, rappelant l'histoire d'un homme dont la situation était étrangement liée au défunt marquis. Jacques s'interroge maintenant sur la nature de ce lien historique."
    ]
  }
];
