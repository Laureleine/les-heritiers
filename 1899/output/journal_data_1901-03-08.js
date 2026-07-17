// Date: 1901-03-08
// Restauration Pass: 2
// Base de données complète des articles de presse du 1901-03-08 (Version Restaurée, 42 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Faits Divers",
    "title": "Le procès d'Henri Duparchy",
    "summary": "Le procès d'Henri Duparchy s'ouvre devant la Cour. Entre dettes, tensions familiales et l'influence délétère d'une maîtresse, l'accusé tente maladroitement de justifier son parricide.",
    "paragraphs": [
      "M. le Président interroge l'accusé Henri Duparchy sur ses antécédents familiaux, ses études et son parcours difficile avec son père. L'accusé exprime des regrets tardifs et insiste sur le manque d'affection paternelle dont il aurait souffert durant sa jeunesse.",
      "Le Président aborde la question de sa carrière, ses échecs scolaires répétés et son entrée dans l'atelier du peintre Jean-Paul Laurens. L'accusé explique ses tensions constantes avec son père concernant ses choix de vie et ses soucis financiers chroniques.",
      "La discussion se porte sur la maîtresse de l'accusé, qualifiée de « mauvais génie » par le Président, et sur les dettes croissantes qui ont mené au drame. L'accusé nie avoir été totalement dominé financièrement par elle, tout en reconnaissant les pressions constantes exercées par cette femme.",
      "Le Président interroge Duparchy sur les mobiles réels du crime. L'accusé soutient que ses révélations sur l'attitude impérieuse de son père sont des faits établis, malgré la lecture de lettres paternelles contredisant formellement cette version des faits.",
      "Le récit du crime est détaillé : Duparchy, armé, a guetté son père et l'a abattu de deux coups de fusil. L'accusé tente de justifier son geste par une perte de contrôle et une situation de détresse totale, tandis que le Président met en lumière l'égoïsme vénal de sa maîtresse.",
      "Le rapport des médecins légistes et la tentative de suicide de l'accusé à la prison de Saint-Claude sont évoqués. Les débats sont renvoyés à la séance de demain."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Politique",
    "title": "Député poursuivi",
    "summary": "La Chambre des députés a été saisie d'une requête formelle visant à autoriser les poursuites judiciaires à l'encontre de M. Hémon, député du Finistère, dans le cadre d'un délit de chasse.",
    "paragraphs": [
      "La Chambre a été saisie d'une demande en autorisation de poursuites contre M. Hémon, député du Finistère, pour un délit de chasse caractérisé."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Politique",
    "title": "La Censure avec Exclusion",
    "summary": "M. Lasies, député du Gers, propose une réforme du règlement parlementaire concernant la censure avec exclusion, afin de limiter la sanction à la cinquième séance suivant son prononcé.",
    "paragraphs": [
      "M. Lasies, député du Gers, a proposé de modifier le règlement relatif à la censure avec exclusion temporaire, limitant désormais l'interdiction de siéger à la cinquième séance suivant le prononcé de la sanction."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Politique",
    "title": "La Loi des Associations",
    "summary": "La commission des associations a adopté, sous l'impulsion de M. Waldeck-Rousseau, une mesure prohibant aux congréganistes non autorisés la direction et l'enseignement dans les écoles.",
    "paragraphs": [
      "La commission des associations, après une intervention décisive de M. Waldeck-Rousseau, a voté une disposition interdisant formellement aux membres de congrégations non autorisées de diriger ou d'enseigner dans des établissements scolaires."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Politique",
    "title": "Élection Sénatoriale",
    "summary": "Suite au décès de M. Barbedette, les autorités ont fixé la date de l'élection sénatoriale dans le département de la Charente-Inférieure au 28 avril prochain.",
    "paragraphs": [
      "Une élection sénatoriale est officiellement prévue le 28 avril dans la Charente-Inférieure, afin de pourvoir au remplacement de M. Barbedette, récemment décédé."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Sénat",
    "title": "Séance du jeudi 7 mars : Discussion sur les blés",
    "summary": "Le Sénat débat de la loi sur les bons d'importation. Le ministre de l'Agriculture, M. Jean Dupuy, critique un projet favorisant la spéculation aux dépens des cultivateurs et menaçant l'équilibre du Trésor public.",
    "paragraphs": [
      "Le Sénat a poursuivi la discussion sur la loi des bons d'importation. M. Jean Dupuy, ministre de l'Agriculture, a vigoureusement combattu le projet, estimant qu'il favorise les spéculateurs au détriment des cultivateurs et expose le Trésor à de sérieux risques financiers.",
      "Le débat oppose les partisans du projet, tels que M. Legrand, à ses opposants, comme M. Gomot, qui s'inquiète du sort des petits agriculteurs. Le gouvernement insiste sur la nécessité de réformer l'admission temporaire plutôt que d'instaurer des primes à l'exportation."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Chambre des Députés",
    "title": "Séance du jeudi 7 mars : Contrat d'association",
    "summary": "La Chambre examine le statut des associations étrangères et des congrégations religieuses. M. Waldeck-Rousseau défend le droit de dissolution, tandis que M. Zévaès et l'abbé Gayraud débattent du sort des congrégations.",
    "paragraphs": [
      "La Chambre a débattu de l'article 12 relatif aux associations composées d'étrangers, lequel permet leur dissolution par décret si elles menacent la sûreté de l'État. M. Waldeck-Rousseau a défendu la portée générale de cette mesure contre les critiques formulées par M. Vaillant.",
      "La discussion s'est ensuite ouverte sur l'article 13 concernant les congrégations religieuses. M. Zévaès a plaidé pour leur suppression totale, tandis que l'abbé Gayraud a pris la défense de ces institutions."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Opérations militaires en Afrique du Sud",
    "summary": "Les forces boers multiplient leurs offensives sous la conduite de Delarey et De Wet. L'armée britannique tente de concentrer ses troupes pour pacifier l'État d'Orange face à une résistance opiniâtre.",
    "paragraphs": [
      "Les Boers redoublent d'activité sur le terrain. Lord Kitchener annonce l'attaque de la ville de Lichtenburg par les troupes de Delarey, tandis que la ville de Pearston a été occupée par les insurgés boers.",
      "Des efforts de concentration de troupes britanniques sont en cours pour balayer l'État d'Orange. Parallèlement, les rumeurs sur une possible capitulation des Boers sont accueillies avec scepticisme, tandis que le génie militaire de De Wet continue de susciter l'attention des observateurs."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Étranger",
    "title": "Nouvelles diverses",
    "summary": "À Londres, les députés irlandais manifestent leur opposition parlementaire par des actes de violence. Aux États-Unis, le débat sur l'abrogation du traité Clayton-Bulwer occupe les instances politiques.",
    "paragraphs": [
      "À Londres, les députés irlandais, après avoir subi plusieurs expulsions, maintiennent une attitude violente pour protester contre la politique du Parlement. Aux États-Unis, M. Morgan réclame l'abrogation du traité Clayton-Bulwer, qui régit le statut du futur canal interocéanique."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Marine",
    "title": "Nomination et développement des sous-marins",
    "summary": "Le contre-amiral Marquer est nommé à l'état-major de la marine. Cherbourg inaugure une nouvelle station de sous-marins et expérimente la téléphonie sans fil pour faciliter les communications en plongée.",
    "paragraphs": [
      "Le contre-amiral Marquer a été nommé sous-chef d'état-major général de la marine. Par ailleurs, Cherbourg consolide son rôle de centre d'études pour la flotte sous-marine avec l'inauguration de la nouvelle station dédiée aux sous-marins.",
      "Ces bâtiments sont désormais équipés pour des exercices réguliers. Les autorités testent actuellement la téléphonie sans fil, une innovation majeure visant à permettre aux sous-marins de communiquer tout en étant en plongée."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Affrontement entre paysans et bohémiens",
    "summary": "Une rixe sanglante a éclaté à Malemort entre des cultivateurs et une bande de nomades dans une auberge. L'altercation a dégénéré en coups de feu, faisant plusieurs blessés dont un grièvement atteint.",
    "paragraphs": [
      "Une violente rixe a éclaté à Malemort entre des cultivateurs et une bande de bohémiens dans une auberge de la commune. Plusieurs paysans ont été blessés par balles au cours de la lutte, dont un grièvement.",
      "La gendarmerie, alertée par les riverains, s'est rendue sur les lieux pour procéder aux premières constatations et a arrêté plusieurs individus impliqués dans ces troubles à l'ordre public."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Culture",
    "title": "Hommage à Verdi",
    "summary": "Un festival solennel à la mémoire du maître Verdi a été célébré à Paris. L'élite artistique et les représentants officiels étaient réunis pour rendre un vibrant hommage à l'illustre compositeur.",
    "paragraphs": [
      "Un grand festival à la mémoire du maître compositeur Verdi a eu lieu hier à Paris. Cette manifestation a réuni de nombreuses notabilités artistiques, ainsi que des représentants de la presse et du monde officiel.",
      "Le Président de la République était représenté à cette cérémonie, laquelle fut empreinte d'une grande solennité musicale et marquée par une exécution magistrale des œuvres du maître."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Échos",
    "title": "Notes diverses",
    "summary": "M. le Président a reçu diverses personnalités tandis que le Petit Palais était inauguré. Par ailleurs, un député de la Drôme a été victime d'un vol avec violence près de Volterra en Italie.",
    "paragraphs": [
      "M. le Président a reçu, au cours de la journée, divers préfets et personnalités du monde politique. Parallèlement, le Petit Palais des Champs-Élysées a été inauguré par la Ville de Paris au milieu d'une affluence nombreuse.",
      "Nous apprenons par ailleurs qu'un député de la Drôme, en voyage d'étude en Italie, a été dévalisé par des brigands dans les environs de Volterra."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Actualités",
    "title": "Congrès international d'aquiculture et de pêche",
    "summary": "Le Congrès international d'aquiculture et de pêche a ouvert ses portes à Paris sous les auspices du Ministre de l'Agriculture, soulignant l'importance des enjeux économiques du secteur.",
    "paragraphs": [
      "Le Congrès international d'aquiculture et de pêche s'est ouvert officiellement hier, sous la haute présidence de M. le Ministre de l'Agriculture.",
      "Les travaux, qui se prolongeront sur plusieurs jours, porteront sur le développement des techniques de repeuplement des eaux et sur la réglementation internationale des pêches."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Chronique",
    "title": "Lucien Mersey et les concours agricoles",
    "summary": "Une anecdote savoureuse sur le concours agricole où un père, Berlureau, compare ironiquement les succès de son fils peu studieux à ceux d'un cochon primé, suscitant l'hilarité par sa rudesse.",
    "paragraphs": [
      "Le nommé Berlureau a conduit son fils au concours agricole. Arrivé devant la section des animaux gras, voilà, lui dit-il en lui désignant le cochon qui venait de recevoir une médaille : « C'est là, mon garçon, une bête qui devrait vous faire rougir de honte ; il obtient un prix d'honneur à dix mois, alors que toi, qui en as dix, tu n'as jamais décroché le moindre accessit ! »"
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Spectacles",
    "title": "Travaux d'Hercule au Théâtre",
    "summary": "Succès triomphal pour \"Les Travaux d'Hercule\" au théâtre, une parodie mythologique spirituelle de MM. de Caillavet et de Flers, portée par une mise en scène originale et une musique singulière de M. Claude Terrasse.",
    "paragraphs": [
      "« Les Travaux d'Hercule », opéra-bouffe en trois actes, de MM. G.-A. de Caillavet et Robert de Flers, musique de M. Claude Terrasse.",
      "La pièce nouvelle de MM. de Caillavet et de Flers, qui a brillamment réussi, appartient au genre de la parodie mythologique, dont « La Belle Hélène » est le type le plus célèbre. C'est Hercule que les auteurs tournent en dérision. La légende nous montre Hercule comme un héros plein de vigueur et de courage, dompteur de monstres et bienfaiteur de l'humanité. Les librettistes en font, eux, un lâche, un impuissant et un charlatan.",
      "La musique de M. Claude Terrasse est d'une sorte originale. C'est, pour ainsi dire, de la musique parlée. Point de chant ou de mélodie proprement dite, mais des phrases avec quelques réminiscences cousues ensemble dans une espèce de symphonie.",
      "Le succès a été très vif. La pièce est d'ailleurs bien montée et bien jouée."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Social",
    "title": "Les grèves à Montceau-les-Mines",
    "summary": "À Montceau-les-Mines, le calme prévaut lors des réunions syndicales. Malgré les intempéries, les mineurs maintiennent leurs manifestations quotidiennes pour soutenir fermement leurs revendications.",
    "paragraphs": [
      "Les quatre grandes réunions privées tenues successivement hier à la salle Pézerat, et comprenant tous les mineurs syndiqués, se sont terminées sans incident. M. Meulen, délégué par la Fédération nationale des mineurs, a rendu compte de son mandat à ses camarades. Ses déclarations ont recueilli l'adhésion unanime des syndiqués.",
      "Malgré les giboulées qui font rage, la manifestation ordinaire a parcouru les principales rues de Montceau. Comme les jours précédents, un meeting est tenu ensuite sur la place de l'Hôtel-de-Ville."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Social",
    "title": "Grève à Marseille",
    "summary": "La situation demeure critique sur les quais de Marseille. L'obstination patronale à refuser tout dialogue accentue la misère ouvrière, rendant l'issue de ce conflit social particulièrement incertaine.",
    "paragraphs": [
      "Je viens de parcourir nos quais, où, sur quelques points, le travail a repris, mais très faiblement. J'ai eu l'occasion de m'entretenir avec plusieurs groupes de grévistes. Tous sont profondément affectés de voir que les patrons ne veulent pas entrer en pourparlers avec eux.",
      "On voit par là qu'un arrangement n'est pas près de se faire, et pourtant la misère est grande et les grévistes sont très émus des conséquences immédiates de ce chômage prolongé.",
      "La grève actuelle est la plus longue et la plus importante qui ait jamais atteint un port de commerce, et ses effets se font partout ressentir avec une navrante rapidité."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Justice",
    "title": "Procès des Magasins du Louvre",
    "summary": "Le procès en diffamation opposant les Magasins du Louvre au journal italien La Tribuna s'est terminé par un non-lieu, l'affaire ayant été rayée suite à l'application de la récente loi d'amnistie.",
    "paragraphs": [
      "Hier a été appelé devant la neuvième chambre du tribunal le procès en diffamation intenté par les Magasins du Louvre au journal italien « La Tribuna », qui avait publié un article portant atteinte au crédit et à la réputation de ces établissements. Par suite de la loi d'amnistie, l'affaire a été rayée."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Le congrès de la charcuterie française",
    "summary": "M. Jean Dupuy, ministre de l'Agriculture, a reçu une délégation des syndicats de la Fédération des charcutiers de France pour examiner les vœux formulés lors du 10e congrès de la corporation.",
    "paragraphs": [
      "M. Jean Dupuy, ministre de l'Agriculture, a reçu hier matin une délégation composée des représentants des cinquante syndicats adhérents à la Fédération des charcutiers de France, qui apportaient les vœux émis au 10e congrès de la charcuterie."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Protection du personnel des cafés en Suisse",
    "summary": "Le bulletin de l'Office du travail détaille les mesures législatives suisses protégeant les employés d'hôtels et de cafés, imposant notamment à Bâle sept heures de repos quotidien et un congé hebdomadaire.",
    "paragraphs": [
      "Le bulletin de l'Office du travail contient d'intéressants extraits de la législation de divers cantons suisses touchant la protection des personnes employées dans les cafés et les hôtels. À Bâle, le personnel doit désormais bénéficier d'au moins sept heures de sommeil ininterrompu par jour, ainsi que d'un après-midi de congé par semaine."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Justice",
    "title": "Affaire Davrillé des Essarts",
    "summary": "L'ancien conseiller municipal de Paris, M. Davrillé des Essarts, a été condamné par la chambre correctionnelle à deux ans de prison et cinq ans d'interdiction de ses droits civiques pour détournement de fonds.",
    "paragraphs": [
      "M. Davrillé des Essarts, ancien conseiller municipal de Paris, inculpé de détournements au préjudice de M. Gélinard, dont il était le tuteur, a été condamné hier par la chambre correctionnelle à deux ans de prison, 2 000 francs d'amende et à cinq ans d'interdiction de ses droits civils et politiques."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Justice",
    "title": "Un innocent condamné",
    "summary": "À la suite des aveux complets de son coaccusé Daumont, Zacharie Henniet, condamné par erreur pour incendie volontaire aux assises de l'Oise, engage une procédure de révision devant la Cour de cassation.",
    "paragraphs": [
      "Les nommés Zacharie Henniet et Daumont étaient traduits devant les assises de l'Oise et condamnés pour incendie volontaire. Cependant, Daumont, qui était seul le véritable coupable, fut pris de remords et rétracta ses accusations contre Henniet. Celui-ci se préparait à entamer une procédure en révision devant la Cour de cassation."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Justice",
    "title": "Nouvelles judiciaires",
    "summary": "Condamnations diverses devant les tribunaux : Jean Sollé est condamné à deux ans de prison pour tentative d'asphyxie à Versailles, tandis que le couple Coulée-Chesnais écope de travaux forcés dans la Sarthe.",
    "paragraphs": [
      "Le tribunal correctionnel de Versailles a condamné hier à deux ans de prison et à cinq ans d'interdiction de séjour le jeune Jean Sollé, âgé de seize ans, pour avoir tenté d'asphyxier sa patronne.",
      "Un nommé Coulée, âgé de vingt-trois ans, comparaissait devant la cour d'assises de la Sarthe en compagnie d'une femme, la nommée Chesnais, pour tentative de meurtre sur le mari de celle-ci. Ils ont été condamnés chacun à cinq ans de travaux forcés."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Agriculture",
    "title": "Banquet de la Société nationale d'encouragement à l'agriculture",
    "summary": "Lors du banquet annuel à l'hôtel Continental, le ministre de l'Agriculture, M. Jean Dupuy, a vivement encouragé les agriculteurs à se regrouper pour améliorer la distribution et la vente de leurs récoltes.",
    "paragraphs": [
      "Le banquet annuel de la Société nationale d'encouragement à l'agriculture a eu lieu hier soir à l'hôtel Continental. Le ministre de l'Agriculture, M. Jean Dupuy, a insisté sur la nécessité pour les agriculteurs de s'organiser afin de surmonter les difficultés d'écoulement de leurs produits."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie à Ivry",
    "summary": "Un violent incendie a ravagé l'établissement d'une éleveuse à Ivry. La propriétaire, accablée par le deuil, avait volontairement tenté de s'immoler par le feu, mais son courageux sauvetage a pu être opéré par les agents.",
    "paragraphs": [
      "Un incendie a détruit en partie, la nuit dernière, l'établissement de Mme veuve Pierre, éleveuse de porcs, à Ivry. La propriétaire, en proie à un profond chagrin suite au décès de son mari et de son fils, avait tenté de se laisser périr dans les flammes, mais fut sauvée par le courage des agents."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Statistiques",
    "title": "Statistique sanitaire de la ville de Paris",
    "summary": "Le service de la statistique municipale de Paris fait état de 1 157 décès pour la semaine écoulée. Bien qu'en léger recul, le bilan demeure lourd, principalement en raison des nombreuses maladies respiratoires.",
    "paragraphs": [
      "Le service de statistique municipale a compté, pendant la semaine, 1 157 décès, chiffre un peu plus faible que celui de la période précédente. Les maladies de l'appareil respiratoire constituent la principale cause de cette mortalité."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Voleur par misère",
    "summary": "Victime d'un vol avenue de Suffren, une jeune artiste lyrique, touchée par les aveux de misère de son agresseur, a fait preuve d'une grande clémence en refusant de porter plainte contre lui.",
    "paragraphs": [
      "Une jeune artiste lyrique, Mlle Berthe C., a été victime d'un vol avenue de Suffren. Le voleur, Louis Périot, vingt-quatre ans, a déclaré que la misère seule l'avait poussé à agir. Mlle C. a refusé de porter plainte et lui a abandonné le contenu de son porte-monnaie."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une bande de roulottiers",
    "summary": "Trois individus spécialisés dans les vols à la roulotte, Eugène Deneaux, Albert Mallet et Georges Boittin, ont été appréhendés par les inspecteurs de la Sûreté en flagrant délit sur le boulevard Saint-Germain.",
    "paragraphs": [
      "Deux inspecteurs de la Sûreté ont arrêté trois individus, Eugène Deneaux, Albert Mallet et Georges Boittin, spécialisés dans le vol à la roulotte. Ils ont été surpris en flagrant délit boulevard Saint-Germain."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents de transport",
    "summary": "Une collision violente entre un tramway et un omnibus quai de la Tournelle a causé trois blessés, tandis qu'une macabre découverte a été effectuée sur un chantier du boulevard de Clichy.",
    "paragraphs": [
      "Un tramway et un omnibus sont entrés en collision hier soir quai de la Tournelle, faisant trois blessés.",
      "Le cadavre d'un nouveau-né a été découvert dans un égout en construction boulevard de Clichy."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Nouvelles d'autour de Paris",
    "summary": "Une série de drames et d'accidents domestiques frappe la périphérie parisienne : accidents à Bois-Colombes, tentatives de suicide, chutes de chantiers et fuites de gaz préoccupent les autorités locales.",
    "paragraphs": [
      "À Bois-Colombes, la famille Seitalens a été grièvement blessée lors d'un accident de voiture hippomobile.",
      "À Saint-Ouen, Henri Salis, âgé de vingt-deux ans, a tenté de mettre fin à ses jours en se portant des coups à l'abdomen.",
      "Ernest Pagmoa, maçon de vingt-six ans, a fait une chute grave d'un échafaudage à Saint-Ouen.",
      "À Vincennes, M. Pharamant a été sévèrement brûlé par une fuite de gaz survenue dans un égout."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Faits divers",
    "summary": "La chronique signale diverses agressions, incendies et accidents tragiques à Charenton, Ivry, Meaux, Le Vésinet, Voiron et Roye, marquant une semaine sombre dans la région.",
    "paragraphs": [
      "À Charenton, Mlle Blanche Luini a été agressée sur la passerelle Valmy par un forcené nommé Louis Lamberti.",
      "À Ivry, les autorités pensent avoir identifié le suicidé de la Seine comme étant un nommé Auguste.",
      "À Meaux, un incendie a ravagé une ferme appartenant à M. Bontaut-Biron.",
      "Au Vésinet, quatre individus ont été appréhendés pour vagabondage par la gendarmerie.",
      "À Voiron, un incendie a détruit l'usine de feutres de M. Voos.",
      "À Roye, un jeune homme de quinze ans a tué accidentellement son frère en manipulant un fusil."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Sports",
    "title": "Les courses à Auteuil",
    "summary": "La journée de courses à Auteuil, d'un intérêt médiocre, n'a attiré qu'une assistance restreinte, confirmant les prévisions prudentes des parieurs présents.",
    "paragraphs": [
      "Journée de semaine dont l'intérêt fut médiocre et qui n'a attiré qu'une assistance restreinte. Les résultats ont peu déçu les espérances des parieurs."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Bulletin Financier",
    "title": "État du marché financier",
    "summary": "L'incertitude pèse sur le marché financier suite à la formation du nouveau cabinet ministériel, dont les intentions économiques, notamment sur la dette, restent floues pour les investisseurs.",
    "paragraphs": [
      "La première impression sur la composition du cabinet est défavorable. Le nom du nouveau ministre des Finances est peu connu et l'on ignore quelles sont au juste ses opinions sur la réduction du coupon de la dette et sur la question du change."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Actualités",
    "title": "Suppléments littéraires et illustrations du Petit Parisien",
    "summary": "Le Petit Parisien illustré de la semaine propose des sujets variés : la vie dans le Sud oranais, la lutte contre l'alcoolisme aux États-Unis, ainsi qu'un sauvetage en Seine et des portraits de personnalités.",
    "paragraphs": [
      "Le Petit Parisien illustré en couleurs, en vente cette semaine, publie deux sujets d'actualité superbement illustrés. Celui de la première page nous montre, dans le Sud oranais, la prise de Tougourt par les Arabes.",
      "À la huitième page, on verra avec quelle violence agit, aux États-Unis, la Ligue des femmes américaines contre l'alcoolisme.",
      "Enfin, à l'intérieur, on trouvera le récit d'un émouvant sauvetage en Seine, ainsi que les portraits du général Pendezec et de l'explorateur Gentil."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Publicité Médicale",
    "title": "Le traitement capillaire du professeur Busch",
    "summary": "Le professeur Busch, grâce à ses travaux sur le chlorhydrate de pilocarpine, a mis au point une sève capillaire capable de régénérer le cheveu. Une découverte validée par des contrôles médicaux rigoureux.",
    "paragraphs": [
      "Lorsque, à la suite de nombreuses expériences, le professeur Busch découvrit les vertus si remarquables du chlorhydrate de pilocarpine sur le cuir chevelu et démontra la curieuse propriété qu'a cet alcaloïde d'engendrer du véritable cheveu, ce fut, parmi les savants, une immense surprise.",
      "L'impossibilité de faire repousser les cheveux perdus était pour eux, jusqu'alors, article de foi. Force leur fut bien, cependant, de s'incliner devant les cures prodigieuses, et pourtant indéniables, qui leur furent montrées. Des chauves de longue date, choisis par des médecins incrédules, furent soumis au traitement du professeur Busch, sous une surveillance incessante et un contrôle rigoureux. Dans un délai variant de quelques jours à quelques semaines, le savant spécialiste leur rendit leur chevelure.",
      "Grâce aux brillantes études de ce savant, il est aujourd'hui absolument prouvé que, dans des conditions déterminées, le chlorhydrate de pilocarpine produit la formation de faisceaux de véritables cheveux naturels.",
      "C'est ainsi qu'après de longs travaux et de patientes recherches, il arriva à créer la Sève capillaire qui porte son nom et dont les cures ne se comptent plus. Le professeur Busch a voulu mettre sa découverte à la disposition de tous. Il suffit d'aller le voir à son laboratoire de la rue des Bons-Enfants n° 10, à Paris, ou de lui écrire pour obtenir gratuitement tous les renseignements nécessaires pour retrouver sa chevelure."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Représentations et actualités théâtrales",
    "summary": "Actualités des scènes parisiennes : reprises aux Variétés et à l'Ambigu, retour de Massenet à Paris, succès de la revue des Pantins salle Hoche et préparation de nouvelles pièces.",
    "paragraphs": [
      "Ce soir, aux Variétés, première représentation (reprise) du Premier mari de France, comédie en trois actes de M. Albin Valabrègue, et de Vive l'armée, comédie nouvelle en un acte, de M. Pierre Wolf.",
      "Le théâtre de l'Ambigu annonce les dernières représentations de la Chanson du pays, dont la dernière matinée aura lieu dimanche prochain. La semaine prochaine, reprise des Deux orphelines.",
      "M. Massenet, qui était depuis plusieurs semaines déjà installé à Cannes avec sa famille, sera de retour aujourd'hui à Paris. Il revient pour assister dimanche au festival organisé en son honneur par M. Édouard Colonne.",
      "L'Opéra-Comique donnera dimanche en matinée la Basoche, le charmant ouvrage de MM. Albert Carré et Messager.",
      "On s'occupe, à l'Odéon, de la centième prochaine de Château historique, l'amusante comédie de MM. A. Bisson et Berr de Turique, qui poursuit son heureuse carrière.",
      "Aux prochains spectacles classiques sera donné un ouvrage qui est une véritable curiosité dramatique, le Conseiller rapporteur, de Casimir Delavigne, une des plus amusantes comédies qui aient été écrites, et qui, par suite de circonstances singulières, n'avait jamais été reprise.",
      "Le cercle les Pantins vient de donner, salle Hoche, devant un auditoire d'élite, sa revue annuelle, la plume toujours spirituelle, souvent mordante, de M. Cochez, un amateur qui rendrait des points à bien des professionnels.",
      "Alertement jouée, chantée et même dansée par un essaim de femmes charmantes et de joyeux compères, cette amusante fantaisie a vu presque tous ses couplets bissés et même trissés par un public de Parisiens blasés.",
      "Le Gymnase retient la date du mercredi 13 mars pour la première de sa nouvelle pièce les Amants de Saisy, de M. Romain Coolus."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Concerts et Divertissements",
    "title": "Paris qui danse au Casino de Paris",
    "summary": "Le Casino de Paris triomphe avec son nouveau spectacle « Paris qui danse », mené par la grâce de Mlle Angèle Heraud. Aux Folies-Bergère, débuts de Lygie dans les tableaux vivants inspirés d'A. Mucha.",
    "paragraphs": [
      "« Paris qui danse » amènera le tout Paris qui s'amuse au Casino de Paris. Ici, c'est la musique qui parle, c'est elle qui souligne le trait, elle est admirablement choisie.",
      "L'on peut, grâce à elle, suivre sans la moindre hésitation les scènes et la pantomime ; c'est un jeu auquel le spectateur prend le plus vif plaisir, d'autant plus que la mise en scène est très réussie, luxueuse sans excès, et que les interprètes sont toutes avenantes et jolies, qu'elles soient avocates, anglaises, mairesses ou chrysanthèmes.",
      "C'est la Parisienne qui conduit le bal et la Parisienne, c'est Mlle Angèle Heraud, c'est-à-dire le charme, la grâce, l'élégance et l'esprit. Splendidement costumée, adroitement secondée par son compère M. Jacquinet, elle préside au défilé traditionnel.",
      "Une mention à M. Degasperis, qui représente un Cadet très fantaisiste. Une part du succès revient à M. José, qui conduit son excellent orchestre avec beaucoup de maestria.",
      "« Paris qui danse » est dans son vrai cadre au Casino de Paris ; il y restera longtemps pour la plus grande joie du public.",
      "Ce soir, aux Folies-Bergère, nouveau spectacle, débuts de Lygie dans ses reproductions vivantes des œuvres décoratives du peintre A. Mucha."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Navigation",
    "title": "Départs et arrivées des paquebots",
    "summary": "Mouvements maritimes du 5 au 7 mars 1899 : escales et positions des paquebots des compagnies C.G.T. et C.H. reliant l'Europe, les Antilles, l'Afrique et l'Amérique du Sud.",
    "paragraphs": [
      "Le paquebot Olinde-Rodrigues (C. G. T.), venant du Havre et de Bordeaux, est arrivé à Saint-Thomas le 6 mars, en route pour Haïti et escales.",
      "Le paquebot Canada (C. G. T.), venant de Colon et escales, est parti de la Pointe-à-Pitre le 6 mars pour Bordeaux et le Havre.",
      "Le paquebot France (C. G. T.) est parti de Colon le 6 mars, pour Saint-Nazaire et escales.",
      "Le paquebot Saint-Germain (C. G. T.), venant de la Vera-Cruz et escales, est arrivé à Saint-Nazaire le 7 mars, à 6 heures du soir.",
      "Le Caravellas (C. H.), venant de Dakar, est parti du Cap le 5, pour le Transvaal-Madagascar.",
      "Colombia (C. H.) est arrivé à Rio le 5, allant à Santos.",
      "L'Ile-de-Maranhao (C. H.), venant de Cotonou, est parti de Grand-Popo le 5, pour Grand-Bassam."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Température et Bulletin Météorologique",
    "title": "Rapport météorologique du 8 mars",
    "summary": "Bulletin météo du 8 mars 1899 : la France subit le passage d'une dépression venue d'Écosse, apportant pluies, refroidissement général et une mer houleuse sur l'ensemble des côtes françaises.",
    "paragraphs": [
      "Vendredi 8 mars, 67e jour de l'année, fête de Saint-Jean de Dieu. Lever du soleil à 6h31, coucher à 6h11.",
      "Hier matin, ciel nuageux avec de brillantes éclaircies. Des averses sont tombées dans l'après-midi. La dépression d'Écosse se propage à travers les Pays-Bas vers la France, et un mouvement secondaire se forme dans le nord de l'Italie.",
      "La baisse du baromètre est importante, elle atteint 8 mm sur la Belgique, la Suisse et l'Auvergne. Les fortes pressions se retirent dans le sud-ouest du continent. Des pluies sont signalées dans le nord et l'ouest de l'Europe; en France, elles ont été générales, sauf dans le sud-est.",
      "En France, un temps à éclaircies et à averses avec refroidissement est probable. Situation particulière aux ports français : la mer est généralement très houleuse ou grosse."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Sports",
    "title": "Que deviennent les anciens champions cyclistes ?",
    "summary": "Tandis que les champions français se tournent vers le sport automobile, les anciennes gloires du cycle américain investissent dans le commerce, ouvrant cafés et allées de jeux de quilles à travers les États-Unis.",
    "paragraphs": [
      "En France, ils semblent presque tous diriger leurs vues sur l'automobilisme ; c'est ainsi que les Charron, les Levegh, les Farman, les Cottereau et bien d'autres sont devenus chauffeurs, et que nous retrouvons leurs noms dans toutes les grandes courses de véhicules à moteurs.",
      "Voici maintenant ce qu'il en est pour quelques Américains : Eddie Bald, l'idole populaire de jadis, est dans les affaires à New-York. Il serait sur le point d'ouvrir un café. On sait que Zimmerman, le prédécesseur de Bald comme champion, tient à Point-Pleasant (New-Jersey) une taverne qui est le rendez-vous de tous les sportsmen. Mae-Parland a ouvert un café à San-José. Orlando Stevens et Freeman ont ouvert une allée pour jeux de quilles et gagnent de l'argent. Dave Shafer, l'entraîneur connu, et Rye Bliss ont aussi leur allée pour quilles à Hammond. Ralph Temple, enfin, vient d'ouvrir à Chicago un grand magasin d'accessoires d'auto."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Escrime",
    "title": "Assaut de fleuret",
    "summary": "Mardi prochain, le champion d'escrime Pini affrontera le Belge Fernand Desmedt lors d'un assaut de gala au fleuret, organisé au profit de l'Union des Femmes de France dans une salle de la rue Saint-Honoré.",
    "paragraphs": [
      "Pini se rencontrera mardi prochain en assaut au fleuret avec le champion belge Fernand Desmedt. C'est au bénéfice de l'œuvre de l'Union des Femmes de France que l'assaut sera donné dans une salle de la rue Saint-Honoré."
    ]
  }
];
