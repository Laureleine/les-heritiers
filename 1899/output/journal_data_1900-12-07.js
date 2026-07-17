// Date: 1900-12-07
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-12-07 (Version Restaurée, 42 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "En danger national",
    "summary": "La dépopulation alarmante de la France, face à la croissance allemande, exige une réaction morale urgente et des réformes fiscales fortes pour protéger la natalité et combattre le fléau de l'alcoolisme.",
    "paragraphs": [
      "La situation du pays, au point de vue de l'accroissement de la population, est toujours peu satisfaisante. Telle est la laconique conclusion que les derniers travaux de recensement répètent avec monotonie et semblent se renvoyer l'un à l'autre comme un triste écho.",
      "Ce document, dont je parle, est le tableau officiel des variations démographiques pour le grand livre de la naissance et de la mort des Français dans la période annuelle qui vient de s'écouler. Cette année a compté 10 000 naissances de moins que la moyenne des dix années précédentes.",
      "Cette différence est actuellement d'une trentaine de mille. C'est une bien frêle armée, à qui pourtant sont confiées toutes les charges et toutes les responsabilités de l'avenir national.",
      "Au milieu du siècle, la France et l'Allemagne, considérées dans les limites de leurs territoires actuels, avaient une population égale : 35 millions d'habitants. L'Allemagne peut opposer aujourd'hui plus de 55 millions à nos 38 millions d'habitants.",
      "Le chiffre satisfaisant, le chiffre patriotique des enfants, doit être au moins de trois par ménage. C'est cette vérité qu'il s'agit de faire admettre par tous, pour le salut et pour l'honneur de la patrie.",
      "Des réformes plus importantes ont été approuvées en principe par soixante conseillers généraux et sont exposées plus ou moins complètement dans diverses propositions de loi : impôt sur les célibataires ou les ménages stériles, dégrèvement partiel ou total des familles nombreuses, etc.",
      "L'alcoolisme est un des agents les plus actifs de la dépopulation, un des éléments de cette ruine qui peu à peu ronge notre grandeur et notre splendeur, anémie la puissance et l'orgueil de la race.",
      "Il faut aussi qu'une grande réaction morale contre cet état de choses s'empare de tous ; il faut qu'une protestation des consciences et des volontés françaises se manifeste et s'impose."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Les Sans-Famille (Marie-Madeleine)",
    "summary": "À Saint-Rupert, village bordant le Loir, le pêcheur Vincent Bellou revient d'Angers inquiet pour Ursule, tandis qu'une mystérieuse dame en noir veille sur un enfant endormi chez Nicole Bellou.",
    "paragraphs": [
      "XV. — C'est un village angevin, extrêmement pittoresque. L'église, avec sa tour de pierre grise et son clocher d'ardoise, s'élève aux bords du Loir sur une colline dont les vergers descendent jusqu'à la rive de cette capricieuse rivière.",
      "Le lendemain de la conversation de la baronne d'Orvilliers et de l'excellente madame Odelet, Vincent Bellou, de retour d'Angers où il était allé pour de mauvais bruits qui couraient sur le compte d'Ursule, sortait de sa maison de Saint-Rupert, ses outils de pêche sur le dos.",
      "La dame en noir s'était installée au coin de la haute cheminée où quelques minces copeaux se consumaient sur un tas de braises à demi éteintes. Nicole Bellou se tenait debout devant elle et, lui montrant un berceau abrité sous des rideaux de serge verte, dans un angle de la cuisine, elle lui disait : « Parlez bas, je vous prie. Elle dort. »"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Politique Internationale",
    "title": "Le Président Krüger en Europe",
    "summary": "Arrivé à La Haye pour une visite incognito, le président Krüger reçoit un accueil triomphal. Le Parlement hollandais a officiellement exprimé sa profonde sympathie envers le dirigeant sud-africain.",
    "paragraphs": [
      "Le président Krüger a quitté le territoire allemand au milieu des plus chaleureuses acclamations. Quelques heures plus tard, il arrivait à La Haye où on lui a fait une réception triomphale.",
      "Le président Krüger est arrivé à 3 heures. Il a été reçu à la gare par un grand nombre d'autorités et plusieurs membres des deux Chambres. Aucun représentant du gouvernement n'était présent, le président Krüger voyageant incognito.",
      "Au Parlement hollandais, à l'ouverture de la séance de la seconde Chambre, le président, M. Gleichman, propose à la Chambre de souhaiter en son nom la bienvenue au président d'État à son arrivée dans notre pays, et de lui offrir l'expression de notre sympathie cordiale. Cette proposition est acceptée aux applaudissements de l'assemblée."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Manifestations",
    "title": "Fête en l'honneur des Boërs à Vienne",
    "summary": "Une grande manifestation à Vienne a marqué le soutien aux Boërs. Le conseiller Mayreder a vivement critiqué la différence d'accueil réservé à Berlin entre Cecil Rhodes et le président Krüger.",
    "paragraphs": [
      "À l'occasion de l'offrande d'un présent d'honneur au président Krüger, une grande fête a eu lieu dans la salle Sophie en l'honneur des Boërs.",
      "Le conseiller municipal Mayreder a prononcé une allocution. Il a dit que Krüger arrive en Europe pour demander du secours. Après avoir ajouté que les portes du palais de Berlin, ouvertes toutes grandes pour Cecil Rhodes, se sont fermées devant lui, l'orateur souhaite que les Boërs aient la force et l'endurance nécessaires pour continuer la lutte.",
      "L'assemblée a voté une adresse de sympathie au président Krüger."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Découverte d'un trésor à Angoulême",
    "summary": "À Saint-Cycardeaux, un propriétaire a découvert un puits antique rempli d'objets précieux en or et en bronze près de l'ancien cirque romain des Bouchauds.",
    "paragraphs": [
      "En défrichant un champ inculte qu'il avait récemment acquis près de l'ancien cirque romain des Bouchauds, un propriétaire de Saint-Cycardeaux, M. Saunier, a mis à jour un puits profond dans lequel il eut la curiosité de faire opérer des fouilles.",
      "Au milieu de débris et d'ossements de toutes sortes, on en a retiré un certain nombre d'objets de grande valeur : bronzes, statuettes, vases et ustensiles de table en or massif. Cette trouvaille, intéressante au point de vue archéologique, est estimée à une grande valeur, plusieurs centaines de mille francs, à en croire les bruits qui courent."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique",
    "title": "L'Amnistie et l'affaire Dreyfus",
    "summary": "Bien que la Chambre ait repoussé la suite de la discussion à jeudi prochain, le principe de l'amnistie est acquis, le gouvernement conservant le droit de juger de son application aux condamnés de la haute Cour.",
    "paragraphs": [
      "Quoique la Chambre ait remis à jeudi prochain la suite de la discussion sur le projet de loi d'amnistie et sur l'extinction des actions pénales ayant trait à l'affaire Dreyfus, on peut considérer la question de principe comme tranchée.",
      "Le débat aurait pu être confus et dévier de ses lignes véritables, si le président du Conseil, avec la clarté de son esprit et la netteté de sa parole, n'avait pas apporté la lumière sur la réalité de la situation et revendiqué pour le gouvernement le droit de rester juge de la possibilité d'étendre l'amnistie aux condamnés de la haute Cour."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'homme coupé en morceaux",
    "summary": "L'enquête sur le meurtre tragique se poursuit. M. Maurice, commissaire de police, recueille des témoignages cruciaux, dont celui d'un laitier ayant aperçu deux individus suspects fuyant après le dépôt du colis.",
    "paragraphs": [
      "Les recherches les plus actives, menées par le service de la sûreté en vue de découvrir l'identité du jeune homme coupé en morceaux ainsi que celle des individus qui l'ont assassiné, n'ont encore abouti à aucun résultat.",
      "M. Dugast, photographe de la préfecture de police, a terminé hier les épreuves des restes de la victime. La tête a été replacée sur le tronc ; on voit les deux oreilles décollées outre mesure.",
      "Au cours de la journée d'hier, M. Maurice, commissaire de police du Faubourg-Saint-Denis, a reçu successivement les déclarations des époux Bernard et du garçon laitier Paul Jardin. Jardin a déclaré avoir vu deux individus s'éloigner précipitamment après avoir déposé le colis."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Justice",
    "title": "L'Affaire de Vaucroze",
    "summary": "Devant la cour d'assises du Gard, l'accusé Gayte maintient sa version des faits. Il soutient que ses précédents aveux sur le crime de Saint-Pons-la-Calm n'étaient qu'une manœuvre pour revoir son épouse.",
    "paragraphs": [
      "Cour d'assises du Gard. Nîmes, 6 décembre. Malgré l'heure un peu matinale, beaucoup de dames occupent les tribunes. L'accusé Gayte, qui montre toujours la même assurance, apporte un dossier volumineux.",
      "Le premier gardien de la maison centrale de Poissy, M. Mortibequi, reconnaît que Gayte lui a fait un aveu concernant le crime de Saint-Pons-la-Calm : il avait bien dit à ses complices de voler, mais non de tuer.",
      "Gayte répète ce qu'il a déjà déclaré : ces semblants d'aveux qu'il a faits n'avaient d'autre but que de lui permettre de voir sa femme et de pouvoir se disculper des soupçons qui pesaient sur lui."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'affaire de la mort de Marie Laupies",
    "summary": "Le décès de Marie Laupies, causé par une forte absorption d'absinthe, soulève des zones d'ombre. Son père évoque les accusations portées par la victime contre le domestique Audibert peu avant sa fin.",
    "paragraphs": [
      "Le nommé Vincent Bastide, âgé de soixante-dix-neuf ans, père de Marie Laupies, interrogé sur les circonstances de la mort de sa fille, explique avec difficulté qu'il a adjuré celle-ci de dire la vérité. Elle lui aurait répondu : « Je l'ai dite, mais on ne veut pas me croire ». Elle aurait également désigné un domestique nommé Audibert comme étant celui qui l'avait enceintée.",
      "Le témoin ajoute avoir vu M. de Vaucroze fils chez une dame, qui l'engagea chez M. Malhiol à Nîmes, et que c'est à partir de ce moment qu'elle a accusé Audibert.",
      "Julio Laupie, frère de Marie, relate les faits survenus la veille de la mort de sa sœur, mentionnant qu'elle avait offert à boire de l'absinthe et que le jour du décès, la bouteille était vide.",
      "Le père de Marie Laupies, rappelé à la barre, précise qu'il est entré dans la maison par la fenêtre et a trouvé sa fille morte, avec une bouteille vide à ses côtés. Le médecin appelé à constater le décès déclare que la mort est due à l'asphyxie provoquée par une forte absorption d'absinthe."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Déposition de Chaudenson sur l'affaire",
    "summary": "Chaudenson incrimine formellement Audibert, se fondant sur des confidences reçues de Marie Laupies. Le prévenu Audibert nie vigoureusement ces accusations devant la cour.",
    "paragraphs": [
      "Chaudenson, reprenant sa déposition, explique avoir cherché à découvrir l'auteur du crime. Il mit en cause Marguerite André, puis, après plusieurs voyages et avoir été l'amant de Marie Laupies, il parvint à lui faire avouer que l'assassin de Mme de Vaucroze était Audibert.",
      "Marie Laupies aurait confié : « Ce soir, je viendrai faire le coup. N'oublie pas de laisser la porte ouverte. J'obéis, dit la fille Laupies, et Audibert me dit alors : Je vais entrer dans la chambre de Madame et si tu dis quelque chose je les tuerai ».",
      "Chaudenson ajoute que Marie Laupies a renouvelé ces déclarations devant une centaine de personnes, affirmant qu'elle n'avait pas osé parler plus tôt par peur d'Audibert.",
      "Audibert, appelé à la barre, jure que les déclarations de Chaudenson sont fausses."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Témoignages complémentaires dans l'affaire Audibert",
    "summary": "L'enquête sur l'affaire Audibert se précise : MM. Balmetille, Hébert et Savary confirment la présence du suspect près du café Paulhan. À Saint-Pons, les déclarations des témoins divergent sur l'identité du coupable.",
    "paragraphs": [
      "Plusieurs témoins, dont MM. Balmetille, Onésime Hébert et Savary, ont formellement déclaré avoir aperçu Audibert rôdant aux abords du café Paulhan durant la nuit où le crime fut perpétré.",
      "M. Beaume, maire de Saint-Pons-la-Calm, a fait savoir qu'il ne disposait d'aucun renseignement défavorable concernant le nommé Gayte ; par ailleurs, le garde champêtre de la commune rapporte avoir entendu la servante accuser formellement M. de Vaucroze fils."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Nominations et Musée de l'Armée",
    "summary": "Derniers mouvements d'officiers dans la cavalerie française et dispositions administratives relatives à l'enrichissement des collections du musée de l'Armée par le ministère de la Guerre.",
    "paragraphs": [
      "M. Mencust, colonel du 7e chasseurs, est muté au 6e chasseurs, tout en étant maintenu dans ses fonctions de commandant par intérim de la 1ère brigade de cavalerie.",
      "M. de Touchet, chef d'escadron au 11e cuirassiers, est transféré au 11e dragons. M. Lecofreus, capitaine au 2e spahis, rejoint le 1er dragons. M. Touvet, capitaine en second au 18e dragons, est promu capitaine commandant au sein du même corps.",
      "Par une décision récente du ministère de la Guerre, le musée de l'Armée est désormais autorisé à recevoir les dons de volumes et d'ouvrages traitant de questions militaires."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Étranger",
    "title": "Le Parlement britannique et la question boër",
    "summary": "À l'ouverture de la session parlementaire à Londres, Lord Salisbury souligne les lourdes charges financières liées aux opérations en Chine et réaffirme la position inflexible de l'Angleterre face à l'indépendance des Boërs.",
    "paragraphs": [
      "À Londres, le discours du Trône, prononcé lors de l'ouverture de la session parlementaire, a souligné l'impérieuse nécessité de pourvoir aux dépenses considérables occasionnées par les opérations militaires en Chine. Dans le même temps, Lord Salisbury a réitéré avec fermeté la détermination du gouvernement britannique vis-à-vis des Boërs quant au maintien strict de leur dépendance envers la Couronne."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Étranger",
    "title": "État de santé du Tsar",
    "summary": "Dépêches rassurantes en provenance de Livadia concernant la santé de l'Empereur : la convalescence du souverain progresse de manière très satisfaisante.",
    "paragraphs": [
      "Aux dernières nouvelles parvenues de Livadia, en date du 6 décembre, l'état de santé de l'Empereur semble s'améliorer nettement. Le souverain a pu bénéficier d'un sommeil réparateur et les médecins constatent avec satisfaction que son état moral, tout comme sa température, sont revenus à des niveaux excellents."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Étranger",
    "title": "Tempête et situation en Chine",
    "summary": "La côte anglaise est violemment frappée par une tempête à Folkestone, tandis qu'en Chine, l'influence des vicerois du Yang-Tsé s'affirme dans le règlement des litiges liés aux missions étrangères.",
    "paragraphs": [
      "Une violente tempête s'est abattue sur la ville de Folkestone, occasionnant des dégâts matériels considérables sur l'ensemble de la côte.",
      "En ce qui concerne la situation en Chine, des dépêches arrivées de Shanghaï font état de l'influence grandissante des vicerois du Yang-Tsé. Par ailleurs, le nouveau gouverneur du Chê-Kiang a reçu des ordres impératifs afin de résoudre définitivement la question du massacre des missionnaires."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Chronique Politique",
    "title": "La neutralité des puissances et la guerre au Transvaal",
    "summary": "La Gazette de Francfort révèle la livraison par des usines allemandes de dix-huit batteries de canons à tir rapide à l'Angleterre, questionnant la loyauté des puissances face à la neutralité dans le conflit du Transvaal.",
    "paragraphs": [
      "La Gazette de Francfort signale que des usines allemandes livrent actuellement à l'Angleterre dix-huit batteries de canons à tir rapide. Cette information soulève une fois de plus la délicate question de la loyauté des puissances dans le respect strict de la neutralité pendant la guerre qui déchire le Transvaal."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Étranger",
    "title": "Réorganisation de la résistance boër",
    "summary": "Le président Steijn et le général Dewet intensifient la résistance dans l'État Libre avec le projet d'envahir la colonie du Cap, tandis que le départ du président Krüger pour l'Europe est confirmé.",
    "paragraphs": [
      "Le président Steijn et le général Dewet s'activent à réorganiser la résistance au sein de l'État Libre. Leur stratégie viserait une offensive directe afin d'envahir la colonie du Cap. Par ailleurs, le président Krüger est désormais annoncé en route pour un voyage vers l'Europe."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Dépêche de Lord Kitchener",
    "summary": "Lord Kitchener rend compte d'un nouvel engagement militaire entre les forces du général Knox et celles du général Dewet. L'intervention de la colonne Pilcher a contraint les Boërs à battre en retraite.",
    "paragraphs": [
      "Lord Kitchener a fait parvenir une dépêche informant que le général Knox a été engagé dans une nouvelle escarmouche contre les troupes du général Dewet, sur la route reliant Bethulie à Smithfield. L'appui décisif de la colonne Pilcher a permis de forcer les Boërs à battre en retraite."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Débats à la Chambre des Députés",
    "summary": "La Chambre des Députés a débattu du budget de l'Instruction publique et de la loi d'amnistie. M. Waldeck-Rousseau s'est opposé à une amnistie totale pour les condamnés de la Haute Cour face aux attaques de l'opposition.",
    "paragraphs": [
      "La Chambre des Députés a consacré sa séance à la discussion du budget de l'Instruction publique ainsi qu'à la délicate loi d'amnistie. Le débat, marqué par les interventions de M. Drumont et de M. Guyot, s'est cristallisé autour de l'affaire Dreyfus.",
      "Le président du Conseil, M. Waldeck-Rousseau, est intervenu pour défendre fermement la position du gouvernement, s'opposant à toute amnistie plénière qui concernerait les condamnés de la Haute Cour."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Chronique Politique",
    "title": "Séance du Sénat sur la Marine",
    "summary": "Le ministre de la Marine a défendu au Sénat le projet d'accroissement de la flotte française, le présentant comme une nécessité impérieuse pour garantir la sécurité nationale plutôt qu'une mesure d'agression.",
    "paragraphs": [
      "Au Sénat, le ministre de la Marine a pris la parole pour justifier le projet d'augmentation de la flotte française. Il a tenu à affirmer que cette décision ne saurait être interprétée comme une mesure agressive, mais qu'elle constitue une nécessité impérieuse pour assurer la sécurité nationale."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Social",
    "title": "Enquête sur les biens des congrégations",
    "summary": "Le ministre des Finances a présenté à la commission du budget le bilan de l'enquête sur le patrimoine immobilier des congrégations religieuses, dont la valeur vénale globale est estimée à plusieurs centaines de millions.",
    "paragraphs": [
      "Le ministre des Finances a communiqué à la commission du budget les résultats de l'enquête concernant les immeubles possédés et occupés par les congrégations religieuses, dont la valeur vénale totale est estimée à plusieurs centaines de millions de francs."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Faits Divers",
    "title": "La crue de la Seine et état sanitaire",
    "summary": "Tandis que le niveau de la Seine demeure stationnaire, les autorités municipales s'inquiètent d'une recrudescence des cas de variole et exhortent les Parisiens à se faire vacciner sans délai.",
    "paragraphs": [
      "La situation fluviale de la Seine demeure stationnaire. Parallèlement, le service de la statistique municipale enregistre une hausse préoccupante des cas de variole à Paris, recommandant instamment à la population de se faire vacciner."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits Divers",
    "title": "L'affaire Milo et sa bande",
    "summary": "Le Palais de justice connaît actuellement le procès de la bande de Milo. Décourcelle, Denain et Émile Lévy, dit Milo, répondent de vols qualifiés et de proxénétisme devant les Assises.",
    "paragraphs": [
      "Le procès de Milo et de sa bande se tient en ce moment au Palais de justice. Les accusés, dont Decourcelle, Denain et Émile Lévy, dit Milo, sont poursuivis pour divers crimes et délits, notamment des vols qualifiés et du proxénétisme."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le procès des accusés dans l'affaire de la veuve Caron",
    "summary": "Le procès de l'assassinat de la veuve Caron révèle des contradictions flagrantes entre les accusés Decourcelle, Denain et la fille Lavury, dont les dénégations se heurtent aux preuves matérielles accablantes.",
    "paragraphs": [
      "L'accusé déclare qu'il ne connaissait pas, avant le crime, le débit de la veuve Caron. M. le Président lui fait observer qu'il est en contradiction flagrante avec plusieurs témoins qui l'y ont formellement reconnu.",
      "Decourcelle maintient pourtant qu'il n'y avait jamais mis les pieds et nie également avoir acheté des journaux le lendemain du crime.",
      "M. le Président questionne ensuite l'accusé sur la provenance de la monnaie utilisée par son co-accusé Denain pour payer le déjeuner après l'assassinat. L'accusé prétend ignorer ce fait, le président suggérant que l'argent provient du tiroir-caisse de la veuve Caron.",
      "Decourcelle fournit des explications embarrassées sur ses changements de costume après le forfait et prétend être rentré chez lui à deux heures, contredisant ainsi son entrée le lendemain à dix heures.",
      "Son système de défense repose sur un déni obstiné, tout comme celui de ses co-accusés, bien que leurs contradictions mutuelles trahissent manifestement leurs mensonges.",
      "Denain prétend avoir reçu une somme de mille francs trois jours avant le crime, mais ne peut expliquer comment les diamants dérobés lors de l'assassinat de la veuve Caron se retrouvent en sa possession. Il répète que c'est inexplicable tout en contredisant Decourcelle.",
      "La fille Lavury prétend ignorer la provenance du diamant remis par son amant et soutient ne s'être pas occupée du changement de costume de Decourcelle."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Incidents à l'hôtel du Louvre lors de l'arrivée du président Krüger",
    "summary": "Le parquet de Marseille engage des poursuites contre trois ressortissants anglais pour tapage et jets d'objets sur la foule lors du passage du président Krüger à l'hôtel du Louvre.",
    "paragraphs": [
      "Le parquet de Marseille a résolu de poursuivre pour contravention de simple police trois Anglais ayant jeté des sous à la foule lors de l'arrivée du président Krüger à l'hôtel du Louvre.",
      "L'affaire a été confiée à M. Duclos, commissaire aux délégations judiciaires. Deux contraventions ont été relevées pour tapage injurieux et jet de corps dur sur la voie publique."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Informations diverses",
    "summary": "Mise en circulation ce matin des nouveaux timbres-poste tricolores. Décès du docteur Bergeron, secrétaire de l'Académie de médecine, et visite d'inspection de la prison de Saint-Lazare par M. Chérioux.",
    "paragraphs": [
      "C'est ce matin que les nouveaux timbres-poste font leur apparition. Ils seront disponibles dans tous les bureaux de poste de Paris d'ici la fin de l'année.",
      "L'administration a décidé que le timbre du soldat sera choisi parmi les trois nouvelles vignettes, se distinguant par sa couleur tricolore.",
      "Le docteur Bergeron, secrétaire perpétuel de l'Académie de médecine, est mort au cours de la nuit dernière à l'âge de quatre-vingt-trois ans.",
      "M. Chérioux, président du conseil général, a visité la prison de Saint-Lazare pour évaluer les réparations urgentes à effectuer."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Arts",
    "title": "Inauguration de l'Exposition des internationalistes",
    "summary": "Brillante inauguration hier à la galerie Georges Petit de l'Exposition des internationalistes, réunissant de nombreux maîtres peintres et sculpteurs français et étrangers de renom.",
    "paragraphs": [
      "Une brillante inauguration a eu lieu hier à la galerie Georges Petit pour l'Exposition des internationalistes. De nombreux maîtres français et étrangers y sont représentés, tels que Humphrey Johnston, Albert Lynch, Gamelund, Alfred Smith et Krajitz-Cœurlet.",
      "Parmi les peintres français exposés, on note les œuvres de MM. Saint-Germain, Allègre, M. J.-J. Rousseau, Mlle Delasalle, et bien d'autres, ainsi que des sculptures de MM. Frémiet, Ch. Jacquot et Bernstamm."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Arts",
    "title": "Exposition de la Société des artistes indépendants",
    "summary": "Ouverture de la seizième exposition de la Société des artistes indépendants, rue du Colisée, marquée par une inspiration plus sobre et sage que lors des précédentes éditions.",
    "paragraphs": [
      "La Société des artistes indépendants a ouvert hier sa seizième exposition, rue du Colisée. L'exposition s'est assagie, loin des fantaisies d'autrefois. On y distingue notamment les œuvres de MM. Vaiton, Héris et Méliwack."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le tamponnement de Choisy-le-Roi",
    "summary": "Le docteur Socquet a transmis son rapport médical sur les victimes de la catastrophe ferroviaire de Choisy-le-Roi au juge d'instruction M. de Vallès.",
    "paragraphs": [
      "Le docteur Socquet a remis son rapport sur l'état des blessés de la catastrophe de Choisy-le-Roi au juge d'instruction M. de Vallès. Le dossier sera communiqué au procureur samedi."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression dans un débit de vins rue Popincourt",
    "summary": "Violente rixe dans un débit de vins rue Popincourt : trois individus armés de revolvers ont ouvert le feu sur la clientèle, blessant grièvement deux hommes, MM. Franchebois et Pigonie.",
    "paragraphs": [
      "Trois individus ont provoqué une rixe dans un débit de vins tenu par M. Toulot, rue Popincourt. Après avoir été expulsés, ils sont revenus armés de revolvers et ont tiré sur les clients attablés.",
      "Deux personnes, MM. Léon Franchebois et Auguste Pigonie, ont été grièvement blessées et transportées à l'hôpital Saint-Antoine. La police recherche activement les malfaiteurs."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Chute mortelle d'un ouvrier",
    "summary": "À la suite d'une chute accidentelle de dix mètres depuis un échafaudage dans une maison en construction rue Copernic, l'ouvrier Léon Nuret a trouvé la mort sur le coup.",
    "paragraphs": [
      "L'ouvrier Léon Nuret est tombé d'un échafaudage, d'une hauteur de dix mètres, dans une maison en construction située rue Copernic. Victime d'une chute mortelle, il est décédé sur le coup. Le corps a été transporté à son domicile."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Faits Divers",
    "title": "Attaque sanglante d'un agent par des rôdeurs",
    "summary": "Une rixe entre deux individus, Démange et Delief, a dégénéré en agression violente contre les gardiens de la paix Cayla et Mazotier, qui ont été grièvement blessés par les agresseurs armés de couteaux.",
    "paragraphs": [
      "Alfred Démange, un rôdeur du quartier du Jardin-des-Plantes, devait rejoindre les bataillons d'Afrique. Lors d'un banquet improvisé, une rixe a éclaté avec Arsène Delief au sujet d'un compte non réglé.",
      "Après s'être battus au couteau, les deux individus se sont attaqués à un gardien de la paix, le nommé Cayla, qu'ils ont grièvement blessé. Un second agent, Mazotier, est intervenu mais a également été blessé. Huit hommes ont été nécessaires pour maîtriser Démange. Les victimes ont été transférées à l'hôpital de la Pitié."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Chroniques régionales",
    "summary": "Une série d'accidents domestiques, professionnels et de méfaits divers secoue la périphérie parisienne et la province, rapportant notamment des vols et des drames infantiles.",
    "paragraphs": [
      "Courbevoie : Deux individus, Octave Poltier et Pierre Droulin, ont été arrêtés pour vols à la gare de marchandises de Bécon.",
      "Villeneuve-la-Garenne : L'enfant Jules Baldens, âgé de trois ans, est dans un état désespéré après une chute d'une fenêtre du deuxième étage.",
      "Bois-Colombes : Mme veuve Alexandrine Culmel a été renversée par une charrette et a subi des blessures graves.",
      "Colombes : Le charretier Louis Régal a eu les deux jambes broyées après une chute de son siège.",
      "Pantin : Deux repris de justice, Ludovic Gralle et Émile Raussey, ont été arrêtés pour vols dans des propriétés privées.",
      "Aubervilliers : Le journalier Jean Blanc est mort après avoir été percuté par un convoi sur un passage à niveau.",
      "Nantes : Le jeune Gaston Demanti, âgé de cinq ans, est mort après s'être brûlé en jouant avec des allumettes.",
      "Meaux : Un incendie criminel au chantier de bois de M. Hervé a pu être évité grâce à la vigilance du contremaître."
    ]
  },
  {
    "id": 34,
    "page": 3,
    "category": "Sports",
    "title": "Naufrage du Louguil à Saint-Brieuc",
    "summary": "Le navire Louguil a sombré près de Saint-Brieuc. La seconde chaloupe, emportant le capitaine Frédéric Blampied et sept marins, est portée disparue.",
    "paragraphs": [
      "On est sans nouvelles de la seconde chaloupe du navire Louguil, ayant fait naufrage. La chaloupe, avec à son bord le capitaine Frédéric Blampied et sept membres d'équipage, est présumée perdue corps et biens."
    ]
  },
  {
    "id": 35,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents en province",
    "summary": "Une série d'accidents tragiques en province, incluant des décès au travail et des drames ruraux, endeuille les localités de Senlis, Liancourt, Dreux et Saint-Omer.",
    "paragraphs": [
      "Senlis : Charles Bocquillon est mort après être tombé sous les roues du tombereau qu'il conduisait.",
      "Liancourt : Le suicide de Théophile Chartier n'a aucun lien avec la famille de M. Chartier habitant Paris.",
      "Dreux : Le jeune Pollet est décédé après un accident tragique impliquant un rouleau agricole à dents de fer.",
      "Saint-Omer : Une terrible tempête a frappé la région, causant d'importants retards dans les transports."
    ]
  },
  {
    "id": 36,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "L'Opéra-Populaire reprend « Patrie » de Victor Massé. Tandis que l'Ambigu prépare « L'Autre France », M. Guitry prolonge « L'Assommoir » à la Porte-Saint-Martin et les Variétés annoncent une affiche nouvelle.",
    "paragraphs": [
      "L'Opéra-Populaire a repris avec succès l'œuvre Patrie, de Victor Massé. M. Guitry joue L'Assommoir, à la Porte-Saint-Martin, jusqu'à dimanche.",
      "L'Ambigu fait relâche pour préparer sa nouvelle pièce : L'Autre France. Les Variétés annoncent Mademoiselle George pour dimanche. Déjazet prépare Le Sous-préfet de Château-Thierry."
    ]
  },
  {
    "id": 37,
    "page": 3,
    "category": "Sports",
    "title": "Résultats sportifs",
    "summary": "Le championnat de lutte au Casino de Paris consacre les victoires de Constant et de Van den Berg. Par ailleurs, le Racing-Club de France prépare activement son match international contre le London Irish.",
    "paragraphs": [
      "Le championnat de lutte, au Casino de Paris, a vu les victoires de Constant et de Van den Berg.",
      "Une statistique sur les accidents survenus en France, au mois d'octobre, a été publiée ; elle inclut les incidents liés aux chevaux, aux vélocipèdes et aux automobiles.",
      "Le Racing-Club de France prépare activement son troisième match international, qui l'opposera au London Irish au Parc des Princes."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Maître des Forges - Suite",
    "summary": "Après le décès du maître de forges, son testament est révélé. Henri Lipray, meurtri, reçoit la visite inattendue du vieux médecin de Larignies, marquant un début de réconciliation et d'espoir retrouvé.",
    "paragraphs": [
      "Le lendemain, par le premier train, M. de Courtial et les deux jeunes femmes arrivaient. Le maître de forges était enterré depuis la veille. Les employés et les domestiques l'avaient conduit au cimetière.",
      "Dans les papiers du défunt, on avait trouvé un testament, écrit le jour même de sa mort, par lequel il léguait sa fortune et tous ses biens à sa femme, sauf toutefois une somme de trois cent mille francs qui échoit à sa cousine Jeannine.",
      "Pendant qu'à Larignies, madame Vernier, dans ses vêtements de deuil, pleure le malheureux qui fut si bon et si grand, elle songe en même temps que là-bas, sous le ciel d'Algérie, l'homme auquel elle a donné son cœur ne vit que pour elle.",
      "Henri Lipray, seul, souffre toujours à Paris, à côté de son rêve brisé, mutilé, mort. Il vient d'éprouver encore une peine profonde. Selon le désir qu'il avait exprimé à M. de Courtial, il s'est rendu à l'hôtel Terminus, d'abord pour embrasser le petit Armand.",
      "Triste et résigné, le jeune médecin repart. Il pleut ce jour-là. La tristesse est partout. On dirait que Paris, en deuil, pleure, et qu'il n'y aura plus jamais de soleil ni de joie.",
      "En rentrant, Pierre, le domestique, lui dit : « Il y a au salon un visiteur qui veut voir Monsieur ». Le jeune docteur s'y rend. Et, dès le seuil, il étouffe un cri de surprise heureuse. Le vieux médecin de Larignies, cet homme qui, pendant tant d'années, est resté inflexible, se dresse devant lui.",
      "Le vieillard balbutie : « Oh, comment me pardonnerai-je, mon enfant, d'avoir tant douté ? De t'avoir fait tant de peine ? ». Henri se précipite, ils s'étreignent longuement.",
      "À cette même minute, devant les yeux du jeune homme, l'image de Jeannine s'évoqua fidèlement. Le vieux docteur avait senti ce frisson et, comme en exerçant la médecine on devient forcément un peu psychologue, il s'écria : « Mon pauvre enfant, tu es heureux de me retrouver. Et pourtant, je devine encore en toi une douleur, un chagrin profond que tu cherches à dissimuler. »",
      "Le vieillard serra plus fort la main qu'il tenait : « Courage, mon Henri. Tu ne souffriras jamais autant que j'ai souffert, moi, je te l'affirme. »",
      "Soudain, au coin du square d'Anvers, parmi le flot des passants, deux petites sœurs religieuses débouchèrent. En ces religieuses, il reconnaissait celles qui étaient venues quelques semaines plus tôt lui révéler le vœu formulé par Jeannine.",
      "Le vieillard se tournait vers lui. Celui-ci vit soudain le mouvement des épaules d'Henri comme pour se redresser. Un sourire léger effleura les lèvres du père. Il conclut : « Allons, à la bonne heure, le courage leur revient. Rien n'est perdu, rien n'est désespéré quand on a pour soi le travail et l'avenir. »"
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Santé",
    "title": "Pourquoi les marins sont-ils si robustes ?",
    "summary": "La santé exceptionnelle des marins face aux maux respiratoires serait due aux émanations de goudron. Le Goudron de Guyot permet désormais de bénéficier de ces bienfaits à domicile.",
    "paragraphs": [
      "Vous avez admiré la robuste santé des marins et des pêcheurs. Ils vivent sur la mer, au milieu des vents et des flots, et vous les voyez toujours la poitrine nue ; malgré cela, nul n'est moins sujet qu'eux aux rhumes, aux bronchites et aux catarrhes.",
      "La raison en est connue depuis la plus haute antiquité : les médecins ont attribué ce fait à ce que les marins respirent constamment les émanations du goudron dont sont enduits les navires.",
      "Le goudron de Guyot, une liqueur très concentrée, permet de préparer instantanément une eau de goudron très limpide et efficace. L'usage, pris à tous les repas, suffit pour guérir en peu de temps le rhume le plus opiniâtre et la bronchite la plus invétérée."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Santé",
    "title": "Pourquoi on doit maigrir",
    "summary": "L'obésité menace la circulation sanguine et favorise des maladies graves. Le « Thé Mexicain » du docteur Jawas est présenté comme une solution naturelle pour mincir sans contrainte de régime.",
    "paragraphs": [
      "L'obésité ou l'exagération de l'embonpoint est produite par l'accumulation de la graisse dans toutes les parties du corps, principalement au cou, au ventre et aux hanches. Le corps devient volumineux et les mouvements sont lourds.",
      "L'obésité présente l'inconvénient sérieux de rendre la circulation du sang irrégulière et la digestion laborieuse ; il en résulte de graves maladies comme l'albuminurie ou le diabète.",
      "Le Thé Mexicain, découvert par le savant docteur Jawas, constitue un moyen naturel et absolument certain pour maigrir sans nuire à la santé et sans aucun régime. L'obésité la plus rebelle est réduite sans danger."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Actualités",
    "title": "Bulletin Commercial du 6 Décembre",
    "summary": "Compte-rendu du marché des denrées alimentaires avec les cours du blé, du seigle et des sucres, ainsi qu'un point sur les fluctuations des matières premières au Havre pour les échéances de fin d'année.",
    "paragraphs": [
      "Le marché des denrées alimentaires présente les cours suivants : le blé, le seigle et les sucres raffinés sont cotés selon les arrivages et les cours du jour.",
      "Au Havre, les cotations des cotons, laines et cafés ont connu des fluctuations de clôture pour les échéances de décembre et février."
    ]
  },
  {
    "id": 42,
    "page": 4,
    "category": "Spectacles",
    "title": "Spectacles du 7 Décembre",
    "summary": "Aperçu de la programmation théâtrale et artistique parisienne pour la journée du 7 décembre, incluant les grandes scènes nationales et les salles de divertissement de la capitale.",
    "paragraphs": [
      "La programmation des théâtres parisiens pour ce jour inclut l'Opéra avec 'Joseph', le Théâtre Français avec 'Cyrano de Bergerac' et diverses représentations dans les autres salles de la capitale, notamment aux Folies-Bergère et au Théâtre Montmartre."
    ]
  }
];
