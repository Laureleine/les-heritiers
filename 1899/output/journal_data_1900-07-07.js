// Date: 1900-07-07
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-07-07 (Version Restaurée, 29 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La République et les Travailleurs",
    "summary": "La République réaffirme son engagement social envers les travailleurs, soulignant le bilan législatif accumulé depuis 1881 pour garantir la dignité humaine à l'aube du XXe siècle.",
    "paragraphs": [
      "On entend souvent reprocher au gouvernement de la République et aux Chambres de ne pas avoir tenu leurs engagements envers la démocratie, d'avoir oublié leurs programmes et de piétiner dans l'impuissance sans rien faire pour améliorer matériellement et moralement le sort des masses populaires.",
      "Ces accusations sont injustes et nous allons rappeler combien la République s'est occupée du sort des travailleurs, avec quel souci elle a essayé de leur assurer la sécurité du lendemain.",
      "C'est après la défaite des hommes du Seize-Mai que le parti républicain a eu la possibilité de mettre dans les lois plus de justice sociale. Avant tout, il fallait constituer les syndicats professionnels.",
      "La protection de la vieillesse et de l'enfance a été la grande préoccupation des législateurs républicains, de même que la loi sur la responsabilité des accidents a été un progrès démocratique sérieux.",
      "Nous avons classé par année les principales lois votées depuis 1881 intéressant les travailleurs, notamment sur les syndicats, la Caisse nationale des retraites, l'arbitrage, et la protection des enfants et femmes dans l'industrie.",
      "Le gouvernement républicain a cherché sans cesse à améliorer leur sort, à les protéger contre la misère, sans aliéner leur liberté. Les lois sont lentes à élaborer, mais le pouvoir exécutif s'est associé à l'œuvre législative par des décrets sociaux indéniables.",
      "Ainsi donc, la République n'a oublié ni la faiblesse de l'enfant et de la femme, ni les conditions du travail à l'âge viril, ni les droits de la vieillesse.",
      "La Révolution, en créant un monde nouveau, pensait qu'il suffisait de la liberté pour guérir les maux sociaux. L'expérience a démontré l'erreur des hommes de ce temps-là, et depuis quinze ans, les pouvoirs publics républicains ont eu comme pensée maîtresse de remédier à cette situation.",
      "En un mot, la République se souvient sans cesse qu'elle est un régime démocratique. Un illustre homme d'État anglais a dit que le XIXe siècle était celui des ouvriers. À l'instant où le XXe siècle éclaire l'horizon, on peut constater que la République française met en pratique cette grande parole."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Faits Divers",
    "title": "Conseil des Ministres",
    "summary": "Sous la présidence de M. Loubet, le Conseil des ministres a pris connaissance du retour des Français de Yunnan-Sen, de la sécurité des étrangers à Pékin et des enjeux liés aux marchés agricoles.",
    "paragraphs": [
      "Les ministres se sont réunis hier matin à l'Élysée, sous la présidence de M. Loubet.",
      "Le ministre des Affaires étrangères a donné lecture d'un télégramme de M. François, daté de Laokay, annonçant qu'il a ramené tous les Français de Yunnan-Sen. Le gouvernement lui a adressé ses félicitations.",
      "M. Delcassé a lu également un télégramme du consul à Tien-Tsin rapportant que les ministres étrangers à Pékin étaient en sûreté. Les ministres de l'Agriculture et du Commerce ont discuté des blés et des marchés à terme sur les laines."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique Étrangère",
    "title": "La Délégation Boër en France",
    "summary": "Arrivée triomphale de la délégation boër à Paris après une réception au Havre. La population exprime sa vive sympathie pour la cause de l'indépendance des Républiques Sud-Africaines.",
    "paragraphs": [
      "Le steamer Aquitaine, amenant les délégués boërs, est arrivé au Havre le 6 juillet. Ils ont été reçus par M. Pauliat, sénateur et président du comité pour l'indépendance des Boërs.",
      "M. Pauliat a souhaité la bienvenue à la délégation en affirmant les sympathies de la France pour la liberté des Républiques Sud-Africaines. M. Fischer a répondu en exprimant sa gratitude.",
      "Les délégués sont arrivés à la gare Saint-Lazare à Paris à cinq heures précises, accueillis par une foule nombreuse et enthousiaste. Un important service d'ordre avait été organisé.",
      "La délégation a été conduite à l'hôtel Scribe au milieu des acclamations. Aucun incident sérieux n'est à signaler. Les Boërs seront reçus à l'Hôtel de ville mardi prochain."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Faits Divers",
    "title": "Rupture d'une digue à Toul",
    "summary": "Une brèche de douze mètres sur le canal de la Marne au Rhin a provoqué l'échouement de dix-neuf bateaux. L'accident, attribué à des travaux de minage, n'a heureusement causé aucun dommage corporel.",
    "paragraphs": [
      "La digue du canal de la Marne au Rhin, entre Gondreville et Aingeray, s'est rompue ce matin sur une longueur de douze mètres, probablement en raison de travaux de minage.",
      "Un bateau chargé de minerai a été entraîné par la brèche. Dix-neuf autres embarcations se trouvent à sec. Il n'y a eu aucun accident corporel et, grâce à la proximité de la Moselle, aucune inondation n'est à déplorer."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un drame à Saint-Denis",
    "summary": "Tentative de meurtre à Saint-Denis : la femme de l'hôtelier Albert Godin a été arrêtée après avoir tiré sur son époux endormi. La victime a survécu malgré la gravité de sa blessure.",
    "paragraphs": [
      "Un drame sanglant a mis en émoi la rue Jeannot à Saint-Denis. La jeune femme de l'hôtelier Albert Godin a tenté de l'assassiner en tirant un coup de revolver sur sa tempe pendant son sommeil.",
      "Le mari a survécu malgré la gravité de ses blessures. Mme Godin a été arrêtée au domicile de ses parents. Elle a déclaré ne pas se rendre compte de l'état d'esprit dans lequel elle se trouvait au moment de l'agression."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Chronique Internationale",
    "title": "Le Massacre des Ministres étrangers à Pékin",
    "summary": "Des dépêches inquiétantes en provenance de Shanghaï font craindre un massacre général des légations étrangères à Pékin, suite à l'assaut des troupes chinoises et des Boxers le 1er juillet dernier.",
    "paragraphs": [
      "Des dépêches parvenues de Shanghaï annoncent qu'au 1er juillet, les troupes chinoises et les Boxers ont pris d'assaut la légation britannique, massacrant les étrangers qui s'y trouvaient. Bien que non confirmées officiellement, ces nouvelles funestes font craindre un massacre généralisé dans la capitale impériale.",
      "Le corps consulaire de Shanghaï redoute que ces informations tragiques ne soient exactes. Sir Robert Hart, ainsi que d'autres personnalités de marque, auraient réussi à se réfugier au sein de la légation peu avant le déclenchement de l'assaut.",
      "Selon certains bruits persistants, les puissances auraient décidé d'une intervention commune, incluant l'envoi de contingents militaires russes, japonais, français, anglais et allemands pour rétablir l'ordre."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Actualités",
    "title": "À l'Exposition",
    "summary": "Depuis trois mois, le succès de l'Exposition universelle demeure éclatant. Mme Loubet a visité le Musée centennal, admirant le génie et le savoir-faire des grands couturiers français.",
    "paragraphs": [
      "L'Exposition universelle attire, depuis maintenant trois mois, les visiteurs venus du monde entier. Mme Loubet a visité le Musée centennal ainsi que les galeries des grands couturiers, s'attardant sur les merveilles qui y sont exposées.",
      "La France est légitimement fière de présenter au monde cette éclatante manifestation du génie humain et de son industrie."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Le musée de l'Ameublement à l'Exposition",
    "summary": "Le musée de l'Ameublement, inauguré à l'Exposition, retrace l'évolution du style français depuis 1789, de la rigueur révolutionnaire aux fastes impériaux.",
    "paragraphs": [
      "Le musée de l'Ameublement (de 1789 à nos jours) vient d'être définitivement ouvert au public. Il résume, par un ensemble rétrospectif de grande valeur, la superbe évolution accomplie vers la simplicité et la beauté par les ébénistes et décorateurs français au cours du siècle finissant.",
      "Trois salons successifs nous initient aux attraits du mobilier de la fin du XVIIIe siècle, à la simplicité des intérieurs révolutionnaires, puis au faste des années impériales, incluant des pièces aussi historiques que l'épée de Kléber ou les bustes du Premier Consul.",
      "Le salon napoléonien précède le salon de la Restauration, lequel laisse apparaître la modestie volontaire ayant succédé aux magnificences de la cour impériale.",
      "De nouveaux salons ont été installés récemment, chacun ressuscitant une époque par son ameublement caractéristique, du salon révolutionnaire tricolore au salon Directoire, jusqu'au style Empire richement décoré."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Faits Divers",
    "title": "Statistiques des entrées à l'Exposition",
    "summary": "L'Exposition universelle confirme son immense attrait populaire : les vacances scolaires du jeudi boostent la fréquentation, avec 239 913 visiteurs recensés avant-hier.",
    "paragraphs": [
      "Les vacances scolaires du jeudi déterminent chaque semaine une hausse sensible dans le nombre des entrées quotidiennes. Avant-hier, on a enregistré à l'Exposition un total de 239 913 visiteurs.",
      "À l'annexe de Vincennes, l'affluence s'est élevée, ce même jour, à 6 592 entrées."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Économie",
    "title": "L'impôt sur le revenu",
    "summary": "M. Caillaux, ministre des Finances, a réaffirmé devant la commission parlementaire les difficultés qu'entraîneraient les récentes modifications apportées à son projet d'impôt sur le revenu.",
    "paragraphs": [
      "M. Caillaux, ministre des Finances, a été de nouveau entendu hier par la commission de l'impôt sur le revenu.",
      "M. Caillaux a exprimé l'avis que les modifications souhaitées par la commission rendraient inapplicables les dispositions qu'il a présentées pour l'établissement d'un impôt général sur le revenu."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique",
    "title": "La Convention avec le Brésil",
    "summary": "La commission des douanes a entériné la convention franco-brésilienne. Cet accord prévoit une réduction des droits sur les cafés en échange de tarifs préférentiels pour les produits français.",
    "paragraphs": [
      "La convention passée entre la France et le Brésil pour la réduction des droits sur les cafés a été approuvée hier par la commission des douanes.",
      "Cette convention, qui réserve à nos produits les tarifs les plus réduits, a pour but, en guise de contrepartie, d'abaisser les droits sur les cafés."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "Sénat : Loi sur l'infanticide",
    "summary": "Le Sénat a débattu du projet de loi sur l'infanticide. Le garde des Sceaux, M. Monis, a prôné une législation plus humaine, menant au renvoi du texte en commission pour une révision approfondie.",
    "paragraphs": [
      "Le Sénat a adopté un projet de loi portant ouverture d'un crédit supplémentaire pour le fonctionnement des bureaux de poste à l'Exposition.",
      "La discussion sur la loi relative à l'infanticide a repris. M. Félix Martin, rapporteur, combat le contre-projet de M. Aucoin qui souhaite assimiler les coauteurs à la mère dans l'application des peines. Le ministre de la Justice, M. Monis, estime que l'introduction de circonstances atténuantes rendrait la législation plus humaine.",
      "Le renvoi du projet à la commission pour rechercher un texte plus satisfaisant a été décidé."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Tumulte à la Chambre des députés",
    "summary": "Une séance mouvementée à la Chambre des députés, marquée par une interpellation tendue de M. Lasies sur la magistrature, a nécessité l'intervention ferme du président Deschanel pour rétablir l'ordre.",
    "paragraphs": [
      "La Chambre a connu hier une séance particulièrement tumultueuse à l'occasion d'une interpellation de M. Lasies sur la pression exercée par le gouvernement sur la magistrature.",
      "Face au refus de M. Lasies de se plier au règlement pour limiter son intervention à l'objet strict de l'interpellation, le président a dû suspendre la séance après des incidents physiques violents entre députés.",
      "À la reprise, le président Deschanel a rappelé l'assemblée à la dignité et la parole a été retirée à M. Lasies par décision de la Chambre."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "International",
    "title": "La guerre au Transvaal",
    "summary": "Sur le front du Transvaal, la situation reste critique. Le président Krüger réaffirme la détermination des Boërs à combattre, tandis que des affrontements acharnés se déroulent près de Ficksburg.",
    "paragraphs": [
      "D'après le Daily Express, l'ordre d'évacuer Lindley, donné par le général Colville, aurait motivé son rappel.",
      "Le chef d'état-major général Boër a déclaré que les Burghers conservaient l'espoir de sauvegarder leur indépendance. Le président Krüger, via M. Beitz, a fait savoir que la République Sud-Africaine combattra jusqu'au bout.",
      "Des combats acharnés ont eu lieu pour la reprise de Ficksburg."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Incendie dans une raffinerie de pétrole aux États-Unis",
    "summary": "Un violent incendie, provoqué par la foudre, a ravagé l'usine de la Standard Oil dans le New-Jersey, détruisant dix-sept citernes et causant des dégâts matériels estimés à deux millions et demi de dollars.",
    "paragraphs": [
      "La foudre a mis le feu à l'usine de la Compagnie Standard Oil, à Bayonne, dans le New-Jersey. Dix-sept citernes ont explosé.",
      "Les dégâts sont estimés à deux millions et demi de dollars."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Histoire",
    "title": "Les héros inconnus : Léon Aune",
    "summary": "Hommage au sergent Léon Aune, grenadier de la 32e demi-brigade, distingué par Bonaparte pour son courage exemplaire durant la campagne d'Italie et gratifié d'un sabre d'honneur.",
    "paragraphs": [
      "Un lecteur nous communique les lettres du sergent Léon Aune, brave soldat de la 32e demi-brigade, qui fut récompensé par le Premier Consul Bonaparte pour sa bravoure lors de la campagne d'Italie.",
      "Bonaparte lui adressa un sabre d'honneur et l'invita à Paris, confirmant ainsi toute son admiration pour ce grenadier exemplaire."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Social",
    "title": "Conseil municipal de Paris : mesures contre le chômage",
    "summary": "Le conseil municipal de Paris vote l'accélération des travaux publics pour endiguer le chômage, incluant le rapatriement des ouvriers creusois et un ajustement du calendrier des ravalements.",
    "paragraphs": [
      "Le conseil municipal a décidé d'accélérer les travaux autorisés pour parer au chômage. Diverses mesures ont été discutées, incluant le rapatriement des ouvriers creusois et la suspension temporaire des ravalements dans certains arrondissements jusqu'après l'Exposition."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame familial à Valenciennes",
    "summary": "Un tragique accident à Valenciennes : une mère et son fils de treize ans périssent noyés dans les eaux de l'Aunelle en tentant de se porter secours mutuellement.",
    "paragraphs": [
      "Un jeune garçon de treize ans est tombé dans l'Aunelle. Sa mère, ne sachant pas nager, s'est précipitée à son secours, mais tous deux ont péri noyés. Mme Farineau laisse quatre enfants en bas âge."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Meurtre de l'avenue de Saint-Ouen",
    "summary": "L'instruction sur le meurtre du brocanteur Urbain, survenu avenue de Saint-Ouen, s'achève. Le juge transmet le dossier au parquet et seul le nommé Bruneau sera traduit devant les assises.",
    "paragraphs": [
      "M. Louiche, juge d'instruction, a communiqué hier, au parquet, le dossier concernant le meurtre de l'avenue de Saint-Ouen. On sait qu'un brocanteur nommé Urbain, qui passait accompagné de sa fille, avait été agressé par plusieurs individus et tué d'un coup de couteau.",
      "Un seul des agresseurs, le nommé Bruneau, sera renvoyé devant les assises.",
      "M. le substitut Lacouture a été chargé de formuler les réquisitions."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Accident de la salle des Fêtes",
    "summary": "La justice se prononce sur le drame de la salle des Fêtes de l'Exposition : le magistrat instructeur rend son rapport et conclut à un non-lieu pour la Société coopérative du travail.",
    "paragraphs": [
      "Le même magistrat instructeur, chargé de l'affaire concernant l'accident de la salle des Fêtes à l'Exposition, accident qui, on se le rappelle, coûta la vie à quatre ouvriers, a communiqué également son rapport au procureur de la République.",
      "La Société coopérative du travail bénéficie d'une ordonnance de non-lieu."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Dernière Heure",
    "title": "Les événements de Chine",
    "summary": "L'empereur d'Allemagne promet 5 500 francs à quiconque délivrera un étranger enfermé à Pékin. Pendant ce temps, l'impératrice s'est réfugiée au Palais d'Été tandis que les troubles persistent à Tien-Tsin.",
    "paragraphs": [
      "Berlin, 6 juillet. L'empereur a télégraphié au commandant en chef de l'escadre de croiseurs allemands, au gouverneur de Kiao-Tchaou, au gouverneur général du Chan-Toung et aux vice-rois de Nankin et de Wou-Tchang qu'il s'engage, sur sa parole d'empereur, à verser une somme de 1 000 taels (soit 5 500 francs) à toute personne qui remettra vivant aux mains d'une autorité allemande ou étrangère un des étrangers, de quelque nationalité qu'il soit, qui sont enfermés en ce moment dans Pékin.",
      "L'empereur se charge également de tous les frais que peut entraîner la transmission à Pékin de cette promesse.",
      "Tien-Tsin, 29 juin. L'impératrice s'est enfuie au Palais d'Été et les mahométans et les Boxers se battent dans les rues."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'accident de la rue Pajol",
    "summary": "M. Casimir Landais, entrepreneur de transports, a été grièvement blessé hier soir par une voiture de commerce rue Pajol. L'auteur du drame, ayant pris la fuite, est activement recherché par le commissariat.",
    "paragraphs": [
      "Hier soir, vers cinq heures, un entrepreneur de transports, M. Casimir Landais, âgé de cinquante-quatre ans, demeurant 66, rue Pajol, traversait la chaussée en face de son domicile quand, soudain, il fut renversé par une voiture de commerce dont le cheval était lancé à une allure des plus vives.",
      "Les roues du véhicule passèrent sur le corps du malheureux, que des témoins de l'accident relevèrent dans un état pitoyable ; il avait les jambes et les bras écrasés.",
      "M. Pontaillier, commissaire de police du quartier de la Chapelle, fait activement rechercher l'auteur de l'accident qui a pris la fuite."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un cheval dans un omnibus",
    "summary": "Un cheval attelé à un fardier a fait un bond brutal dans un omnibus rue de Clignancourt, brisant les glaces du véhicule et blessant une couturière. La victime a reçu des soins dans une pharmacie voisine.",
    "paragraphs": [
      "Vers une heure, hier après-midi, les voyageurs qui se trouvaient à l'intérieur de l'omnibus Montmartre-Place Saint-Michel ont éprouvé une vive émotion alors que le véhicule passait en face du numéro 18 de la rue de Clignancourt.",
      "À cet endroit était arrêté un fardier attelé de trois chevaux. Soudain, l'un des animaux, ayant pris peur, fit un bond prodigieux et vint s'abattre, la tête en avant, dans l'omnibus.",
      "Deux glaces furent brisées et, sans parler de la frayeur éprouvée par les voyageurs, une dame, Eugénie Michel, âgée de trente ans, couturière demeurant rue Simart, fut blessée à la figure par des éclats de verre.",
      "La victime a pu regagner son domicile après avoir reçu des soins dans une pharmacie voisine."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Abandon d'enfant",
    "summary": "Un enfant de treize mois a été découvert abandonné dans un immeuble du passage du Havre. Sa mère, démunie, l'a confié à l'Assistance publique par le biais d'un mot laissé sur ses langes.",
    "paragraphs": [
      "Une femme qui s'était réfugiée pour passer la nuit passage du Havre, dans le couloir d'un immeuble portant le numéro 43, est partie hier matin par une porte donnant sur la rue Caumartin, en abandonnant un enfant de treize ou quatorze mois.",
      "Sur les langes était épinglé un billet ainsi conçu : « Forcée d'abandonner mon enfant en raison de mon indigence, je prie la personne qui le trouvera de le porter à l'Assistance publique. »",
      "M. Tanguy, commissaire de police, a ouvert une enquête."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "La fuite des grandeurs",
    "summary": "Un déséquilibré se faisant passer pour l'ambassadeur d'Autriche a semé le trouble dans plusieurs commerces parisiens. Il s'agit d'Antoine Fournier, originaire de Tulle, déjà connu des services de santé.",
    "paragraphs": [
      "Un jeune homme de vingt-cinq ans environ, très élégamment mis, pénétrait hier après-midi successivement dans les grandes maisons de commerce de la rue Lafayette et de la rue d'Allemagne ; il faisait partout des commandes importantes et déclarait être M. le comte de Latourby, ambassadeur d'Autriche à Paris.",
      "Il va sans dire que la plupart des commerçants pensèrent avoir affaire à un escroc et bientôt le soi-disant comte de Latourby eut à ses trousses une dizaine d'agents du service de la sûreté.",
      "Près de la porte d'Aubervilliers, le personnage se heurta aux fortifications et n'apercevant plus de magasins, il s'arrêta pensif. À ce moment, les agents constatèrent qu'ils avaient affaire, non à un escroc, mais à un fou.",
      "L'individu, en effet, se mit à crier des commandements militaires, puis se précipita dans le poste de l'octroi en disant aux employés : « Eh bien, esclaves, votre roi arrive et vous ne vous précipitez pas à sa rencontre. Ouvrez vite les portes et prenez les armes. »",
      "Les agents voulurent appréhender le dément, mais celui-ci devint furieux et il ne fallut pas moins de quatre gardiens de la paix pour le maîtriser.",
      "Interrogé par M. Demarquay, commissaire de police, le malheureux répondit dans un langage incohérent ; mais des papiers de famille trouvés dans ses vêtements ont fait connaître qu'il se nommait Antoine Fournier, âgé de vingt-quatre ans, demeurant à Tulle (Corrèze).",
      "Antoine Fournier, qui appartient à une très honorable famille, a déjà été interné ; il ne se trouvait à Paris que depuis une huitaine de jours."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Questions ouvrières",
    "summary": "Le groupe socialiste de la Chambre s'est réuni pour traiter des revendications syndicales des manufactures de tabacs et des garçons limonadiers, incluant une enquête ministérielle sur les violations du droit du travail.",
    "paragraphs": [
      "Le groupe socialiste de la Chambre, après sa réunion d'hier, a communiqué aux journaux la note suivante :",
      "Le secrétaire a rendu compte des démarches qu'il a faites auprès des ministres compétents, suite aux sollicitations du syndicat des manufactures de tabacs et du syndicat des garçons limonadiers.",
      "Le ministre des Finances a promis d'adresser à tous les directeurs des manufactures de tabacs une circulaire leur enjoignant de reconnaître les syndicats et de traiter leurs ouvriers sur un pied d'égalité avec les autres.",
      "Rendant compte de l'entrevue qu'il a eue avec M. Millerand au sujet de l'extension de la juridiction prud'hommale aux garçons limonadiers, M. Deveze a fait remarquer qu'il ne peut être fait droit aux demandes du syndicat qu'en vertu d'une loi.",
      "Le groupe a décidé, lorsque la loi sur les prud'hommes viendra en discussion, de déposer un amendement en ce sens.",
      "Le secrétaire a ensuite donné lecture d'une lettre de M. Millerand en réponse aux plaintes de violation de la loi sur le travail, déposées par la section roubaisienne du Parti ouvrier. Le ministre annonce qu'il vient de prescrire une enquête sur les faits dévoilés."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue",
    "summary": "Une série d'accidents et de drames endeuille la banlieue parisienne : suicides, chutes tragiques, incendies destructeurs et arrestations de malfaiteurs ponctuent cette journée de faits divers.",
    "paragraphs": [
      "Boulogne-sur-Seine. Vers cinq heures du matin, en effectuant leur ronde, les gardes du bois de Boulogne ont découvert, pendu à un arbre près de la route des Lacs, le cadavre d'un individu âgé d'une cinquantaine d'années. Dans la poche intérieure du veston du défunt se trouvait cette inscription : « Bicêtre 18 ». Le corps a été transporté à la morgue.",
      "Neuilly-sur-Seine. Hier soir, à onze heures, les agents de police ont trouvé au bois de Boulogne, au milieu de la chaussée et près de sa voiture, un cocher de fiacre nommé Auguste Vital, âgé de cinquante-cinq ans. L'infortuné, renversé de son siège, était grièvement blessé ; il a été transporté à l'hôpital Beaujon.",
      "Bois-Colombes. Un apprenti couvreur, Justin Delauney, âgé de dix-huit ans, a fait une chute d'une hauteur de cinq étages. Son état est considéré comme désespéré.",
      "Argenteuil. Un violent incendie a éclaté dans la manufacture de chapeaux de M. Housseau. Le personnel et les ouvriers, au nombre d'environ soixante-dix, sont réduits au chômage.",
      "Pantin. Mme Marie Legris, âgée de soixante-dix ans, s'est pendue hier soir dans sa chambre.",
      "Montreuil-sous-Bois. M. Navier, boucher, s'est pendu à la tête de son lit.",
      "Vincennes. Arrestation de quatre individus pratiquant des vols de bicyclettes.",
      "Choisy-le-Roi. Des malfaiteurs se sont introduits dans l'appartement de M. Isidore Vallée et ont emporté des objets évalués à un millier de francs. Un vol important a également été commis chez Mme Guimpeault.",
      "Rambouillet. M. Péru, greffier de la justice de paix à Chevreuse, disparu depuis deux mois, a été retrouvé mort dans les bois attenant au château de M. de Coubertin."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Départements",
    "title": "Incendie et accident de train",
    "summary": "Un violent incendie à Jumeaux ravage une vingtaine de bâtiments et blesse grièvement un habitant, tandis qu'une collision ferroviaire sans gravité pour les voyageurs est signalée à Grandpoint.",
    "paragraphs": [
      "Châteaudun. Un violent incendie a éclaté au hameau de Jumeaux. Une vingtaine de bâtiments ont été détruits. M. Lauriau a été grièvement brûlé.",
      "Poitiers. Un tamponnement de trains s'est produit hier soir à Grandpoint. Le train sud-express a percuté les deux dernières voitures du train de l'État. Fort heureusement, les dégâts se bornent à des pertes matérielles."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Activités théâtrales et artistiques",
    "summary": "La vie culturelle se poursuit avec les préparatifs du théâtre du Gymnase, une distinction littéraire pour M. Dévore à l'Académie française et les résultats académiques du Conservatoire.",
    "paragraphs": [
      "La commission supérieure des théâtres est convoquée pour examiner divers projets.",
      "Le théâtre du Gymnase fera sa réouverture le mercredi 11 juillet.",
      "L'Académie française vient de décerner le prix Toirac à M. Dévore pour sa pièce « La Voilure ».",
      "Résultats du concours de solfège au Conservatoire : plusieurs médailles ont été attribuées aux élèves, hommes et femmes."
    ]
  }
];
