// Date: 1901-01-29
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-01-29 (Version Restaurée, 52 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "Épaves maritimes",
    "summary": "À la suite des rumeurs de pillage après le naufrage du paquebot La Russie, réflexion sur l'obsolescence du droit de bris, pratique désormais proscrite et illégale dans le Code maritime français.",
    "paragraphs": [
      "Après les quatre jours de lutte terrible que l'équipage et les passagers du paquebot La Russie soutinrent, dans les angoisses que l'on connaît, contre la mer démontée, il s'est produit un incident qui semble faire croire que le vieux droit de bris, depuis longtemps abrogé dans le Code maritime, se trouve maintenu dans les mœurs de nos populations des côtes de la Méditerranée.",
      "C'est du moins ce qui a été dit. Cela paraît, à la vérité, si extraordinaire et fait peser sur les habitants de la côte des suspicions si outrageantes que je veux croire à une exagération des faits.",
      "D'après les textes en vigueur, les vaisseaux et effets échoués ou trouvés sur le bord de la mer sont vendus par l'administration s'il n'y a pas réclamation de leur propriétaire dans le délai d'un an et un jour. Il ne peut plus aujourd'hui y avoir de populations maritimes vivant du pillage des épaves.",
      "Voilà, en résumé, quelle est l'histoire du droit de bris. Non seulement il n'existe pas, mais il est réputé vol par le Code, et depuis longtemps l'opinion le proscrit comme un odieux abus."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Actualité Militaire",
    "title": "Les engagements de trois ans",
    "summary": "Le ministère de la Guerre a fixé les modalités de recrutement des engagements volontaires de trois ans pour la période de février à mars, confirmant l'absence d'affectation aux équipages de la flotte.",
    "paragraphs": [
      "Le ministre de la Guerre vient d'arrêter le nombre des engagements volontaires de trois ans qui pourront être acceptés du 1er février au 31 mars.",
      "Tous les engagés de trois ans doivent être acceptés par le chef de corps, qui a le droit de les choisir sur toute l'étendue du territoire. Cette année, comme les précédentes, aucun jeune soldat ne sera affecté aux équipages de la flotte."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Nécrologie",
    "title": "La mort de Verdi",
    "summary": "Conformément aux dernières volontés du maître, les obsèques de Giuseppe Verdi se tiendront dans la plus stricte intimité, tandis que la ville s'apprête à honorer sa mémoire au cimetière municipal.",
    "paragraphs": [
      "Les funérailles de Verdi sont fixées à mercredi, sept heures du matin. Elles seront très modestes, sans musique, sans fleurs, sans troupes, conformément à la volonté du maître.",
      "Le conseil municipal s'est réuni hier soir pour délibérer sur les honneurs à rendre à Verdi. L'assemblée a approuvé à l'unanimité les propositions tendant à placer les restes du compositeur au milieu des hommes illustres dans le cimetière municipal."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Dépêches étrangères",
    "title": "Funérailles de la Reine Victoria à Osborne",
    "summary": "Les préparatifs des obsèques de la Reine Victoria s'organisent à Osborne. Par ailleurs, l'investiture du prince héritier d'Allemagne souligne le raffermissement des liens diplomatiques entre les deux nations.",
    "paragraphs": [
      "Le char funèbre qui portera le corps de la reine Victoria sera composé d'un avant-train et d'une pièce de campagne. Le cortège naval quittera Cowes vendredi après-midi.",
      "L'investiture de l'ordre de la Jarretière au prince héritier d'Allemagne a été l'occasion d'une brillante cérémonie. Le roi a insisté sur les liens personnels et autres unissant l'Angleterre et l'Allemagne."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Drame à l'asile de Leyme",
    "summary": "Un tragique événement a frappé l'asile de Leyme : un patient paralysé a trouvé la mort après avoir été violemment agressé par un autre pensionnaire en proie à une crise de démence.",
    "paragraphs": [
      "L'asile des aliénés de Leyme vient d'être le théâtre d'un drame sanglant. Un pensionnaire, Aristide Lapergue, paralysé, a été assommé par un autre aliéné dans un accès de folie furieuse."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Entre père et fils",
    "summary": "Un tapissier âgé de vingt-huit ans a été grièvement blessé par son père, à Paris, après avoir menacé sa mère sous l'empire de l'ivresse. Le drame a nécessité l'usage d'une arme à feu pour protéger l'épouse.",
    "paragraphs": [
      "Le nommé Frédéric Mignon, tapissier, âgé de vingt-huit ans, rentrait chez ses parents. Surexcité par les libations, il s'en prit violemment à sa mère. Le père, craignant pour la sécurité de son épouse, fit feu à deux reprises sur son fils avec un revolver."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Funèbre découverte à Gand",
    "summary": "Une macabre découverte a été effectuée dans un cimetière de Gand : le cadavre d'une jeune fille a été retrouvé hors de son cercueil, suggérant qu'elle aurait tenté de se libérer après un état de léthargie.",
    "paragraphs": [
      "Une horrible découverte a été faite dans un cimetière de Gand. En ouvrant un caveau, on a découvert le cadavre d'une jeune fille gisant sur les marches, ayant manifestement tenté de briser son cercueil après une léthargie."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Nouvelles Coloniales",
    "title": "Retour du Tonkin et de Chine",
    "summary": "Le paquebot Ville-de-la-Ciotat a accosté à Marseille avec à son bord des soldats d'infanterie coloniale blessés en Chine. Au Tonkin, le général Boyer a dirigé d'importantes manœuvres de garnison.",
    "paragraphs": [
      "Le paquebot Ville-de-la-Ciotat est arrivé hier après-midi à Marseille avec de nombreux passagers, dont des soldats d'infanterie coloniale blessés en Chine.",
      "Du Tonkin arrive la nouvelle qu'une importante manœuvre de garnison a eu lieu le 25 décembre dernier, dirigée par le général Boyer."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Actualité Universitaire",
    "title": "Rapport sur l'Université de Paris",
    "summary": "M. Bonet-Maury publie un rapport sur les actes de l'Université pour l'année 1900, mettant en relief l'encombrement croissant des facultés à la Sorbonne et les défis budgétaires du conseil.",
    "paragraphs": [
      "M. Bonet-Maury vient de publier un rapport sur les actes du conseil de l'Université pendant l'année 1900, contenant des indications précises sur l'organisation matérielle et le fonctionnement des facultés.",
      "Les bâtiments de la Sorbonne sont débordés par l'abondance des cours. Le budget et le système des dispenses d'inscription font également l'objet d'une attention particulière du conseil."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans Famille - Partie 14",
    "summary": "À cinq heures de l'après-midi, la baronne de Pfaygsac regagne son hôtel particulier. Aussitôt descendue de voiture, elle interroge sa fidèle suivante, Mariette, sur le départ du jeune Georges.",
    "paragraphs": [
      "Cinq heures de l'après-midi. Le coupé de madame la baronne de Pfaygsac passa sous la voûte de son hôtel et s'arrêta devant la porte vitrée de l'escalier.",
      "Louise de Rambert descendit de voiture. Une vieille femme, Mariette, attendait sa maîtresse. La baronne demanda si Georges était parti."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Université",
    "title": "L'évolution et l'expansion de l'Université de Paris",
    "summary": "L'Université de Paris modernise ses enseignements en intégrant la bactériologie à l'École de pharmacie et en diversifiant son offre de langues étrangères pour répondre aux besoins intellectuels de la nation.",
    "paragraphs": [
      "L'Université de Paris élargit son enseignement dans toutes les branches, des sciences aux arts et aux lettres, en s'adaptant aux récentes découvertes scientifiques et aux intérêts supérieurs de la patrie.",
      "L'École de pharmacie a solidement organisé l'enseignement ainsi que les travaux pratiques de bactériologie, constituant désormais un complément indispensable des études pharmaceutiques.",
      "La Faculté des lettres a, pour sa part, créé de nouveaux cours de littérature allemande, italienne et anglaise afin de renforcer l'ouverture culturelle de ses étudiants."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Université",
    "title": "Les relations internationales de l'Université de Paris",
    "summary": "Sous l'impulsion de personnalités influentes, l'Université de Paris multiplie ses échanges académiques avec l'étranger, accueillant désormais plus de 3 000 étudiants internationaux sur ses bancs.",
    "paragraphs": [
      "L'Université resserre ses liens avec les institutions étrangères, notamment celles de l'Écosse, de l'Amérique du Nord et de la Suisse, grâce aux efforts soutenus de lord Reay, de M. Melon ainsi que de MM. Furber et Henry Bréal.",
      "Le recteur de l'Université de Chicago a récemment visité la Sorbonne afin de fortifier les relations avec Paris. De même, une délégation de l'Université de Barcelone est venue offrir un buste en marbre à M. de Lacaze-Duthiers.",
      "Plus de 3 000 étudiants étrangers suivent actuellement avec assiduité les cours dispensés par l'Université de Paris."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Université",
    "title": "Legs et dons faits à l'Université de Paris",
    "summary": "Grâce à la générosité de nombreux donateurs, le patrimoine scientifique et matériel de l'Université de Paris s'enrichit, bien que des besoins d'agrandissement demeurent nécessaires pour l'avenir.",
    "paragraphs": [
      "M. de Lacaze-Duthiers a légué son laboratoire de Banyuls-sur-Mer accompagné de ses instruments scientifiques. Un généreux anonyme a renouvelé cinq bourses de voyage, portant sa donation totale à 82 500 francs.",
      "Le Touring-Club, M. Victor Duruy, M. Klammermoot, Mlle Guibourt et Mme Duplessis ont également consenti des dons significatifs, allant de bourses de voyage à des legs de bibliothèques et de fortunes personnelles pour soutenir les étudiants.",
      "M. Bonet-Maury souligne dans son rapport au conseil de l'Université que la situation est florissante, tout en recommandant vivement l'agrandissement des laboratoires et des bibliothèques."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Chambre des députés",
    "title": "Séance du lundi 28 janvier : Contrat d'association et hommages",
    "summary": "Lors de la séance du 28 janvier, la Chambre des députés a voté un second douzième provisoire, poursuivi les débats sur le contrat d'association et rendu un hommage unanime au compositeur Verdi.",
    "paragraphs": [
      "La Chambre a procédé au vote d'un second douzième provisoire pour l'exercice budgétaire de 1901.",
      "M. Gayraud a terminé son discours en défense des congrégations religieuses, suivi par M. Lemire qui a présenté un contre-projet. La discussion sur le contrat d'association se poursuivra mardi prochain.",
      "La Chambre a voté à l'unanimité un projet de résolution s'associant au deuil de la nation italienne à la suite du décès du célèbre compositeur Verdi."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Chambre des députés",
    "title": "Discussion sur la morale des congrégations religieuses",
    "summary": "M. Gayraud a défendu le droit d'association des congrégations et la doctrine du probabilisme face aux critiques de la gauche, mais le rejet massif du contre-projet a clos le débat parlementaire.",
    "paragraphs": [
      "M. Gayraud a longuement débattu du syllabus de Pie IX et de la morale des congrégations, soulignant que les catholiques devraient jouir de la liberté pleine et entière de former des associations.",
      "Il a défendu la doctrine du probabilisme malgré les vives protestations des bancs de la gauche, arguant que l'action politique des citoyens demeure licite tant qu'elle ne viole pas la loi.",
      "Le rapporteur, M. Trouillot, a fermement combattu le contre-projet de M. Gayraud, lequel fut finalement rejeté par 417 voix contre."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Sénat",
    "title": "Séance du lundi 23 janvier : Réforme des droits de succession",
    "summary": "Le Sénat a poursuivi l'examen de la réforme fiscale sur les successions, actant des amendements sur l'expertise des fonds de commerce et la réduction des droits de donation avant de clore sa séance.",
    "paragraphs": [
      "Le Sénat a poursuivi la discussion sur le régime fiscal des successions, adoptant plusieurs amendements, notamment sur l'expertise des fonds de commerce.",
      "M. Cordelet a défendu une réduction des droits de donation, partiellement acceptée par le ministre des Finances, M. Caillaux.",
      "Le Sénat a voté divers articles relatifs aux partages d'ascendants et à l'usufruit avant de lever la séance."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Dépêches de Lord Kitchener sur les engagements militaires",
    "summary": "Lord Kitchener rend compte des combats en Afrique du Sud. Malgré le succès britannique sur la route de Wonderfontein, le bilan des pertes s'alourdit. La santé du président Kruger est confirmée.",
    "paragraphs": [
      "Lord Kitchener fait état de divers engagements militaires : à Cunningham, les troupes britanniques déplorent quatre tués et trente-sept blessés. Le général Smith-Dorien a remporté un succès contre les Boers sur la route de Wonderfontein.",
      "La liste officielle des pertes en Afrique du Sud s'élève à dix-sept tués, dix-sept blessés et deux disparus.",
      "Le président Kruger, contrairement à certaines rumeurs, est en bonne santé, selon des informations parvenues d'Amsterdam."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits divers",
    "title": "Drame sur le Zuyderzée : disparition de quatre pêcheurs",
    "summary": "Une tragédie s'est déroulée sur le Zuyderzée où quatre pêcheurs de l'île de Wieringen, emportés par une banquise à la dérive, sont portés disparus, tout espoir de secours étant désormais exclu.",
    "paragraphs": [
      "Quatre habitants de l'île de Wieringen sont portés disparus après avoir été emportés par une banquise sur le Zuyderzée.",
      "Des pêcheurs ont aperçu des silhouettes sur un banc de glace dimanche matin, mais les ont confondues avec des oiseaux sauvages. La banquise ayant rejoint la mer libre, tout secours est désormais impossible."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Étranger",
    "title": "Nouvelles de Chine : Famine et tensions diplomatiques",
    "summary": "La famine sévit gravement dans la province de Pékin. La cour impériale ordonne l'aide aux populations, tandis que des rumeurs évoquent une restitution prochaine de la Mandchourie par la Russie.",
    "paragraphs": [
      "Des milliers de Chinois sont morts de faim dans la province de Pékin. La cour a ordonné une distribution de riz, menaçant de décapiter les fonctionnaires qui feraient des distinctions entre les catéchumènes et les autres citoyens.",
      "Des rapports indiquent que la Russie aurait consenti à restituer la Mandchourie sans réclamer d'indemnité de guerre."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Déclassement de places fortes et concours hippiques",
    "summary": "Le ministre de la Guerre dépose un projet de loi visant le déclassement de plusieurs places fortes. Par ailleurs, les officiers sont autorisés à participer aux concours hippiques nationaux.",
    "paragraphs": [
      "Le ministre de la Guerre a déposé un projet de loi visant à déclasser plusieurs places fortes, dont Gravelines, Lorient et Rochefort.",
      "Les officiers sont autorisés à participer aux concours hippiques annuels dans plusieurs grandes villes de France."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Protection de la nature",
    "title": "La disparition des fleurs alpines",
    "summary": "Face à la raréfaction de l'edelweiss et du sabot de Vénus, victimes des cueillettes touristiques, le préfet de l'Isère instaure des mesures restrictives pour protéger le patrimoine floral national.",
    "paragraphs": [
      "Les espèces végétales rares, telles que l'edelweiss et le sabot de Vénus, disparaissent progressivement sous la pression des collecteurs de bouquets pour touristes.",
      "Le préfet de l'Isère a pris des mesures restrictives interdisant le transport et le colportage de certaines fleurs protégées. Cette initiative exemplaire pourrait inspirer d'autres départements pour préserver le patrimoine floral français."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits divers",
    "title": "Violente tempête sur la France et la région parisienne",
    "summary": "Un ouragan dévastateur frappe la banlieue parisienne, causant d'importants dégâts matériels et des blessés, tandis que des sinistres maritimes sont rapportés sur les côtes françaises.",
    "paragraphs": [
      "Un ouragan a causé des dégâts considérables dans la banlieue parisienne, notamment à Argenteuil, Asnières et Saint-Ouen, où des toitures ont été arrachées et des ouvriers blessés.",
      "En province, le paquebot Les Andes a été mis en péril près de Marseille, et de graves sinistres maritimes sont signalés sur les côtes bretonnes ainsi que dans la Manche."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Échos",
    "title": "Duel et vie parisienne",
    "summary": "La chronique mondaine rapporte un duel à l'épée entre M. Atho de San Malato et M. Damotte, ainsi que les récentes audiences du Président de la République.",
    "paragraphs": [
      "Un duel à l'épée a opposé M. Atho de San Malato à M. Damotte, ce dernier ayant été blessé à la quatrième reprise. Les deux hommes se sont réconciliés sur le terrain.",
      "Le Président de la République a reçu en audience de nombreuses personnalités, dont des représentants de la Chambre de commerce de Paris."
    ]
  },
  {
    "id": 24,
    "page": 2,
    "category": "Justice",
    "title": "Amnistie des insoumis et déserteurs",
    "summary": "Le gouvernement précise les modalités d'application de l'amnistie militaire pour les insoumis et déserteurs, distinguant les cas selon l'âge et la situation des hommes concernés.",
    "paragraphs": [
      "Le gouvernement a publié une instruction réglant l'application de l'amnistie pour les insoumis et les déserteurs militaires.",
      "Les hommes âgés de plus de quarante-cinq ans sont amnistiés de plein droit. Pour les autres, des conditions de service subsistent en fonction de leur âge et de leur situation avant le 31 décembre dernier."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Social",
    "title": "Amnistie des insoumis et déserteurs",
    "summary": "Détails complémentaires sur les modalités de l'amnistie militaire : conditions de retour pour les expatriés, délais impartis et clauses spécifiques pour les hommes mariés ou veufs avec enfants.",
    "paragraphs": [
      "Les insoumis et déserteurs se trouvant à l'étranger ne pourront recevoir application de l'amnistie qu'à leur rentrée sur le territoire français et après avoir fait leur acte de repentir.",
      "Un délai de six mois leur est imparti s'ils sont en Europe ou en Algérie, et un an s'ils sont hors d'Europe.",
      "Les hommes dispensés de service au titre de l'article 21 de la loi de recrutement, et n'étant pas âgés de plus de trente-cinq ans, pourront être tenus de compléter leur service selon les conditions prescrites.",
      "Les insoumis et déserteurs âgés de moins de trente-cinq ans, mariés ou veufs avec enfants, pourront bénéficier de l'amnistie conditionnelle sur justification de leur situation par des pièces authentiques."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Social",
    "title": "Amnistie pour les réservistes, territoriaux, détenus et soldats",
    "summary": "Le décret d'amnistie permet aux insoumis et déserteurs de moins de 45 ans de régulariser leur situation militaire sous condition de repentir, tout en organisant la réincorporation des effectifs concernés.",
    "paragraphs": [
      "Les insoumis et déserteurs âgés de moins de quarante-cinq ans peuvent être admis au bénéfice de l'amnistie, à la condition expresse de faire leur déclaration de repentir et d'accomplir les périodes militaires auxquelles ils sont astreints.",
      "Les insoumis et déserteurs actuellement détenus dans des établissements pénitentiaires, qu'ils le soient préventivement ou en vertu de condamnations, pourront bénéficier de cette amnistie, avec ou sans condition de servir, selon les dispositions en vigueur.",
      "L'autorité militaire procédera au renvoi dans leurs foyers des hommes âgés de quarante-cinq ans. Les déserteurs amnistiés seront, en règle générale, dirigés sur le corps de troupe auquel ils ont appartenu pour y être réincorporés.",
      "Le déserteur qui a repris du service dans un autre corps, sans avoir eu recours à des manœuvres frauduleuses, sera autorisé à poursuivre son service et ne fera l'objet d'aucune poursuite judiciaire ultérieure."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Justice",
    "title": "Suspension des poursuites militaires",
    "summary": "Les recherches contre les insoumis sont suspendues jusqu'au 15 décembre 1900. Passé ce délai, la gendarmerie reprendra ses procédures à l'encontre de ceux n'ayant pas manifesté leur repentir.",
    "paragraphs": [
      "Toutes recherches et poursuites contre les insoumis ou les déserteurs, antérieures au 15 décembre 1900, sont officiellement suspendues. Elles seront néanmoins reprises de plein droit à l'expiration des délais fixés pour les déclarations de repentir.",
      "La gendarmerie cessera ses investigations, ne recherchant désormais que les individus signalés en état de désertion ou d'insoumission après cette date ou après que les délais impartis auront été dépassés."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Chronique",
    "title": "La température",
    "summary": "En ce début d'année 1899, la tempête qui frappait l'Europe s'évacue vers la Baltique. La France subit un temps frais et instable avec une mer houleuse sur les façades maritimes.",
    "paragraphs": [
      "Mardi 1er janvier, premier jour de l'année, huitième jour de l'hiver. Saint François de Sales. Lever du soleil à 7h37, coucher à 16h38.",
      "La violente tempête qui vient de sévir sur l'ouest de l'Europe s'éloigne actuellement vers l'est, son centre de dépression se situant désormais sur la Baltique.",
      "En France, des averses sont probables sous un ciel maussade. Le temps reste frais. La mer est grosse sur la Manche et en Bretagne, et demeure très houleuse sur l'ensemble de la Méditerranée."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'attentat contre M. Deschanel",
    "summary": "L'instruction concernant l'agression du professeur Deschanel se poursuit. Mlle Vera Gulo, l'inculpée, est soumise à un examen mental avant la transmission définitive du dossier au parquet.",
    "paragraphs": [
      "Mlle Vera Gulo, l'auteure de l'attentat contre M. Deschanel, professeur au Collège de France, a été de nouveau interrogée par M. de Vallès, juge d'instruction en charge de l'affaire.",
      "Lors de cet interrogatoire, elle a réitéré ses dires, affirmant avoir été outragée aux environs de Genève par un monsieur âgé dont elle a déclaré ignorer l'identité.",
      "Le magistrat instructeur procédera à la communication du dossier au parquet dès réception du rapport établi par les trois médecins commis pour examiner l'état mental de l'inculpée."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'homme coupé en morceaux",
    "summary": "L'enquête sur le crime de la rue des Plâtrières stagne, mais une nouvelle piste, soumise par un blanchisseur d'Auteuil, permet à la sûreté d'explorer une analogie sur les marques du linge.",
    "paragraphs": [
      "Les nombreuses pistes suivies avec diligence par le service de la sûreté concernant le crime de la rue des Plâtrières ont été, jusqu'à présent, abandonnées faute de résultats probants.",
      "Une piste nouvelle a toutefois été signalée par un blanchisseur du quartier d'Auteuil, M. Ernest M., qui a cru déceler une analogie entre une marque rouge apposée sur le linge du cadavre et celle figurant sur le linge d'un de ses clients.",
      "M. Cochefert, chef de la sûreté, a donné des instructions pour que l'enquête se poursuive activement sur cette nouvelle direction."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un chat enragé",
    "summary": "Une vive émotion a saisi les habitants d'un immeuble de la rue Simart après l'intrusion d'un chat enragé, finalement abattu par les forces de l'ordre après une traque périlleuse.",
    "paragraphs": [
      "Les locataires d'un immeuble de la rue Simart ont été mis en émoi, hier, par l'irruption soudaine d'un chat enragé dans les communs.",
      "L'animal, dans un état de fureur manifeste, a bondi sur Mme Élise Célestin dans son magasin avant de gagner les étages supérieurs. Après une traque d'une heure menée par des gardiens de la paix, la bête a été abattue à coups de sabre dans un hangar.",
      "Le commissaire de police du quartier a immédiatement chargé un vétérinaire de procéder à l'autopsie de l'animal pour confirmer les soupçons de rage."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le dentiste en omnibus",
    "summary": "Scène insolite dans un omnibus reliant les Gobelins à Montmartre : un voyageur improvisé dentiste a extrait la molaire d'une jeune fille souffrante à l'aide d'un simple crochet d'acier.",
    "paragraphs": [
      "Dans un omnibus reliant les Gobelins à Montmartre, une jeune fille souffrait d'une violente rage de dents qui l'obligeait à gémir continuellement. Un voyageur, s'approchant avec une assurance singulière, a arraché la molaire responsable avec un petit crochet d'acier qu'il portait sur lui.",
      "La patiente, instantanément soulagée, a couru vers une pharmacie pour désinfecter sa gencive et a envoyé des baisers à son libérateur, resté sur la plate-forme de l'omnibus, tenant son crochet et la dent extraite comme un trophée."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un extraordinaire voleur",
    "summary": "Un individu d'origine roumaine, arrêté pour le vol d'une ocarina, a réussi une fuite spectaculaire au bazar de l'Hôtel de Ville tout en abandonnant une liasse de 15 000 francs authentiques.",
    "paragraphs": [
      "Un individu d'origine roumaine a été appréhendé au bazar de l'Hôtel de Ville pour le vol d'une ocarina. Lors de la fouille réglementaire, il s'est avéré qu'il possédait une liasse de 15 000 francs en billets de banque.",
      "Profitant de l'inattention de l'inspecteur chargé du comptage des valeurs, le malfaiteur a réussi à s'enfuir par une porte dérobée en abandonnant son butin sur le comptoir.",
      "Les coupures, vérifiées à la Banque de France, se sont révélées authentiques. La police recherche activement cet homme, soupçonné d'appartenir à une bande de malfaiteurs opérant dans les grands magasins."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'une aventurière",
    "summary": "M. Cochefert, chef de la sûreté, a mis fin aux agissements d'une escroc de cinquante-quatre ans qui, sous des titres nobiliaires usurpés, dépouillait les commerçants de leurs bijoux.",
    "paragraphs": [
      "M. Cochefert, chef de la sûreté, a procédé à l'arrestation d'une femme de cinquante-quatre ans, nommée D'Asque de Coupet, pour de multiples escroqueries commises dans plusieurs arrondissements.",
      "Usant de titres ronflants, tels que princesse Choubroskoff ou comtesse d'Aastin, elle obtenait des bijoux précieux chez des commerçants crédules sans jamais les régler. Elle a été écrouée au dépôt dans l'attente de son jugement."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort subite",
    "summary": "M. Berthoud, directeur de la Société des tirages financiers et chevalier de la Légion d'honneur, est décédé de manière soudaine lors d'un trajet en tramway à Aubervilliers.",
    "paragraphs": [
      "M. Berthoud, directeur de la Société des tirages financiers et chevalier de la Légion d'honneur, est mort subitement hier soir alors qu'il se trouvait sur la plate-forme d'un tramway circulant à Aubervilliers. Le malheureux a succombé à une congestion cérébrale foudroyante."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un caissier faussaire",
    "summary": "M. Georges-Émilien Dubois, directeur-gérant du Journal de Laon, a été appréhendé à Paris pour des détournements de fonds s'élevant à 70 000 francs au moyen de faux en écritures.",
    "paragraphs": [
      "M. Georges-Émilien Dubois, directeur-gérant et caissier de l'imprimerie du Journal de Laon, a été arrêté à Paris pour avoir détourné 70 000 francs par des faux en écritures.",
      "Le faussaire, père de sept enfants, a été écroué au dépôt en attendant son transfert à Laon."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Faits Divers",
    "title": "Duel entre cuisiniers",
    "summary": "Une violente altercation entre deux cuisiniers d'un restaurant de la rue Popincourt, armés d'ustensiles de cuisine, a nécessité leur hospitalisation d'urgence à l'hôpital Saint-Antoine.",
    "paragraphs": [
      "Deux cuisiniers d'un restaurant de la rue Popincourt, Patrice Huyot et Charles Lubaud, se sont affrontés dans leur cuisine à la suite d'une vive rivalité professionnelle.",
      "Armés d'une broche et d'un couteau, ils se sont infligé des blessures réciproques et ont dû être transportés d'urgence à l'hôpital Saint-Antoine."
    ]
  },
  {
    "id": 38,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une bande d'escrocs aux théâtres",
    "summary": "Le parquet fait face à une recrudescence de plaintes concernant une bande organisée inondant les théâtres parisiens de faux billets, malgré les recherches intensives de la police.",
    "paragraphs": [
      "Une bande organisée écoule actuellement des faux billets pour les grandes scènes parisiennes, notamment l'Opéra et l'Opéra-Comique.",
      "La police n'a pas encore pu localiser l'imprimerie clandestine d'où proviennent ces contrefaçons, tandis que les plaintes s'accumulent au bureau du procureur."
    ]
  },
  {
    "id": 39,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendies divers",
    "summary": "La capitale a été éprouvée par trois sinistres : un incendie rue Paradis blessant quatre ouvrières, un accident rue de la Forge-Royale et un départ de feu dans le fournil d'un boulanger rue du Petit-Musc.",
    "paragraphs": [
      "Un incendie a éclaté rue Paradis, dans l'atelier de M. Vialle, pharmacien, blessant quatre ouvrières. Un autre sinistre s'est déclaré dans une boulangerie de la rue de la Forge-Royale ; bien qu'aucune victime ne soit à déplorer, un passant a été blessé par une voiture dévidoir accourant sur les lieux.",
      "Un troisième départ de feu a été signalé dans le fournil de M. Rootet, situé rue du Petit-Musc."
    ]
  },
  {
    "id": 40,
    "page": 3,
    "category": "Sports",
    "title": "M. Loubet à l'Exposition de l'automobile",
    "summary": "Le Président de la République a visité l'Exposition de l'automobile et des sports au Grand Palais, témoignant d'un vif intérêt pour les prouesses techniques de l'industrie française.",
    "paragraphs": [
      "Le Président de la République a visité hier l'Exposition de l'automobile, du cycle et des sports organisée au Grand Palais.",
      "Il a examiné avec une vive curiosité les différents stands, s'attardant notamment devant les voitures de Dion-Bouton, les modèles de Canello-Dürkopp, ainsi que les châssis Renault frères, saluant les progrès remarquables de la mécanique moderne."
    ]
  },
  {
    "id": 41,
    "page": 3,
    "category": "Social",
    "title": "Bulletin du travail : Montceau-les-Mines et Saint-Eloy",
    "summary": "À Montceau-les-Mines, le calme règne en attendant M. Viviani. À Saint-Eloy, la tempête annule une réunion, tandis qu'à Calais, de graves heurts éclatent entre grévistes et forces de l'ordre.",
    "paragraphs": [
      "À Montceau-les-Mines, le calme règne dans l'attente de l'arrivée de M. Viviani. La direction des mines poursuit ses discussions avec les délégués des grévistes afin de trouver une issue au conflit.",
      "À Saint-Eloy, la réunion publique prévue a dû être annulée en raison d'une violente tempête. Parallèlement, des incidents graves ont éclaté à Calais entre des grévistes et les forces de l'ordre, faisant plusieurs blessés parmi les agents de police."
    ]
  },
  {
    "id": 42,
    "page": 3,
    "category": "Faits Divers",
    "title": "Faits divers dans les départements",
    "summary": "Une série d'accidents et de méfaits touche les provinces : brûlures, incendies, noyades et agressions sont recensés, incluant un audacieux vol de bijoux au domicile du maire de Fontainebleau.",
    "paragraphs": [
      "Divers accidents et crimes sont signalés à travers les départements : un enfant grièvement brûlé à Creil, un incendie dévastateur à Nogent-le-Rotrou, une noyade accidentelle à Angers et une agression violente à Saint-Denis.",
      "À Fontainebleau, la police a constaté un vol de bijoux au domicile particulier de Monsieur le maire."
    ]
  },
  {
    "id": 43,
    "page": 4,
    "category": "Faits Divers",
    "title": "Naufrage d'une barque de pêche à Trouville",
    "summary": "Le naufrage de la barque de pêche Auguste-Victorin, survenu au large de Trouville, a causé la mort de cinq marins. Seul le marin Émile Marais a pu être sauvé par un vapeur anglais.",
    "paragraphs": [
      "La barque de pêche dont le journal a annoncé la perte avant-hier est l'Auguste-Victorin, n° 55, de notre port. Elle était montée par six hommes, mousse compris, et commandée par l'armateur Arsène Hally, qui a péri dans le sinistre.",
      "Les autres victimes sont les nommés Bapt, matelot, marié, sans enfants ; Lacheray, marié, père de cinq enfants ; Sénéchal, marié, père de deux enfants, et Beuron, le mousse. Le seul marin sauvé, Émile Marais, a été débarqué à Newport par le vapeur abordeur Massari.",
      "Depuis un mois, le port de Trouville a perdu trois barques ; dix marins ont été noyés, laissant dans le deuil sept veuves et treize orphelins."
    ]
  },
  {
    "id": 44,
    "page": 4,
    "category": "Faits Divers",
    "title": "Incident maritime à Lorient",
    "summary": "Le trois-mâts anglais Rubens, chargé de charbon, s'est échoué dans l'avant-port de Lorient. Le navire, victime d'une voie d'eau, reste immobilisé malgré les tentatives de dégagement.",
    "paragraphs": [
      "Le trois-mâts Rubens, venant d'Angleterre avec un chargement de charbon, s'est échoué hier dans l'avant-port de commerce, face au poste des douanes. Le navire n'a pu être dégagé jusqu'à présent et une importante voie d'eau s'est déclarée dans sa carène."
    ]
  },
  {
    "id": 45,
    "page": 4,
    "category": "Faits Divers",
    "title": "Arrivée du brick Excelsior à Lannion",
    "summary": "Le brick anglais Excelsior, transportant du charbon depuis l'Écosse et un temps porté disparu, est finalement arrivé à bon port à Lannion après un retard imputable au mauvais temps.",
    "paragraphs": [
      "Le brick anglais Excelsior, commandé par le capitaine Evans, dont on avait annoncé la perte corps et biens alors qu'il venait d'Ardrossan (Écosse) avec un chargement de charbon, est enfin arrivé à Lannion. Son long retard n'était dû qu'au mauvais temps."
    ]
  },
  {
    "id": 46,
    "page": 4,
    "category": "Faits Divers",
    "title": "Naufrage aux Sables-d'Olonne",
    "summary": "La chaloupe du port des Sables-d'Olonne, commandée par le patron Jean-Louis Grousseaux, a fait naufrage suite à une voie d'eau soudaine alors qu'elle draguait à six milles au large des Barges.",
    "paragraphs": [
      "La chaloupe du port des Sables-d'Olonne, commandée par le patron Jean-Louis Grousseaux, se trouvait en drague à six milles à l'ouest des Barges lorsque, tout à coup, une voie d'eau se déclara.",
      "L'équipage dut se réfugier dans le canot du bord et fut recueilli par le sloop Némésis des Sables-d'Olonne, commandé par le capitaine Constant Clavery. La chaloupe est considérée comme perdue."
    ]
  },
  {
    "id": 47,
    "page": 4,
    "category": "Faits Divers",
    "title": "Sauvetage avorté en mer",
    "summary": "Abandonné lors d'une tempête, le brick Edouard a failli être secouru par le vapeur anglais Linnet. Après un début de remorquage, la remorque a rompu, laissant le navire à la dérive.",
    "paragraphs": [
      "Le Petit Parisien a raconté dans quelles circonstances le brick Edouard, de Redon, fut abandonné en mer pendant la dernière tempête. Quelques heures après, le vapeur français Hirondelle, étant survenu, s'approcha de l'Edouard dont le pavillon était en berne.",
      "Le navire allait mettre une embarcation à la mer pour aborder le brick lorsqu'il fut devancé par le vapeur anglais Linnet qui, après avoir envoyé quatre hommes à bord de l'Edouard, le prit à la remorque et fit route pour la côte anglaise. Mais après une heure de remorquage, la remorque cassa et le brick repartit en dérive."
    ]
  },
  {
    "id": 48,
    "page": 4,
    "category": "Faits Divers",
    "title": "Nouvelles de Suez",
    "summary": "Le paquebot Djemnah a repris sa navigation vers Madagascar après une réparation rapide de son hélice effectuée en cale sèche à Suez.",
    "paragraphs": [
      "L'hélice du Djemnah ayant pu être facilement remplacée en cale sèche, le paquebot a repris la mer pour Madagascar."
    ]
  },
  {
    "id": 49,
    "page": 4,
    "category": "Communication",
    "title": "Fête de bienfaisance pour les inondés de la Lozère",
    "summary": "L'Association lozérienne de Paris a organisé une fête à l'hôtel des Sociétés savantes, incluant une conférence de M. Martel, au profit des victimes des récentes inondations.",
    "paragraphs": [
      "Au profit des inondés de la Lozère, une fête de bienfaisance a eu lieu hier soir à l'hôtel des Sociétés savantes.",
      "Elle était organisée par l'Association lozérienne de Paris. Une conférence a été faite par M. Martel sur les gorges du Tarn, avant et après les inondations.",
      "L'assistance était nombreuse. Après la conférence eut lieu un brillant concert. La recette réalisée permettra de soulager bien des infortunes."
    ]
  },
  {
    "id": 50,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Changements et répétitions aux théâtres parisiens",
    "summary": "Le théâtre des Bouffes-Parisiens et l'Ambigu organisent leurs saisons avec de nouvelles directions et le lancement des répétitions pour des pièces à venir.",
    "paragraphs": [
      "M. Tarride prend, jusqu'à la saison prochaine, la direction intérimaire du théâtre des Bouffes-Parisiens. La première pièce qu'il montera est un opéra-bouffe en trois actes et quatre tableaux de MM. G. A. de Caillavet et Robert de Flers. Cette pièce entrera dès demain en répétition.",
      "Les artistes et les choristes, hommes et femmes, pourront se présenter tous les jours de cette semaine au théâtre des Bouffes-Parisiens entre cinq et six heures. Nos confrères Fernand Rouget et G. Montvalent sont chargés du secrétariat général et du secrétariat de la direction.",
      "M. de Lagoanère vient d'engager M. Gauthier, l'excellent jeune premier du Vaudeville et de la Porte-Saint-Martin, pour créer, à côté de Mlle Biana Duhamel, le principal rôle masculin d'Amis de collège, la comédie de M. Daniel Riche en cours de répétition.",
      "En attendant le retour de Mme Marie Laurent, qui joue en ce moment avec un succès immense à Bruxelles, les répétitions de la Chanson du Pays, le nouveau drame de Jules Mary, marchent merveilleusement à l'Ambigu."
    ]
  },
  {
    "id": 51,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Décès d'Eugène Sauzay",
    "summary": "Le violoniste et professeur honoraire au Conservatoire, Eugène Sauzay, s'est éteint à l'âge de 91 ans. Artiste de renom, il a formé de nombreux élèves illustres tels que MM. Colonne et Danbé.",
    "paragraphs": [
      "On annonce la mort, à l'âge de quatre-vingt-onze ans, de M. Eugène Sauzay, professeur honoraire de violon au Conservatoire. Violoniste de premier ordre et professeur éminent, M. Eugène Sauzay a formé de nombreux élèves, parmi lesquels MM. Colonne et Danbé."
    ]
  },
  {
    "id": 52,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Nouvelles de Toulouse",
    "summary": "La direction du théâtre du Capitole à Toulouse est vacante. Plus de trente candidats ont déjà déposé le cautionnement de 30 000 francs requis pour obtenir cette direction subventionnée.",
    "paragraphs": [
      "De notre correspondant de Toulouse : La direction du théâtre du Capitole est vacante. Le cahier des charges fixe le chiffre de la subvention à 125 000 francs, en dehors d'une foule d'autres avantages. Plus de trente candidats ont déposé le cautionnement de 30 000 francs exigé par la mairie."
    ]
  }
];
