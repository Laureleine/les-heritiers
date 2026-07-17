// Date: 1900-02-23
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-02-23 (Version Restaurée, 39 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Politique",
    "title": "La Première Exposition",
    "summary": "Un comité s'est formé pour ériger une statue à François de Neufchâteau, ministre sous le Directoire et créateur de la première Exposition des produits de l'industrie française.",
    "paragraphs": [
      "La France a-t-elle encore le temps, avant l'heure d'ouverture de sa grande Exposition, de payer sa dette de reconnaissance à la mémoire de celui qui organisa la première de ces magnifiques solennités du travail et de la paix ?",
      "Un comité s'est formé qui, à cette question, a répondu par l'affirmative. Il a déjà l'adhésion de la Société d'encouragement à l'industrie, de la Société nationale d'agriculture, de la Société des agriculteurs de France, de la Chambre de commerce de Paris et du Conseil municipal. D'autre part, les pouvoirs publics ne refuseront certainement pas leur appui le plus large à cette œuvre de réparation nationale.",
      "François de Neufchâteau, né en 1750 à Savais, près de Rozières, en Lorraine, était le fils d'un instituteur de campagne. Entré dans l'administration, il devint membre de l'Assemblée législative puis de la Convention. Le 16 juillet 1797, il fut appelé par le Directoire au poste de ministre de l'Intérieur.",
      "Mais l'œuvre qui a apporté l'immortalité à son nom, c'est l'organisation de la première Exposition des produits de l'industrie française.",
      "À un an et demi près, il va maintenant un siècle que le ministre du Directoire conviait les manufacturiers et commerçants français à venir exposer au Champ-de-Mars, à Paris, leurs produits les plus remarquables. C'est sur ce même emplacement que nos grandes Expositions, qui sont comme les étapes du progrès, se succèdent maintenant. Aussi l'endroit semble-t-il tout désigné pour recevoir la statue de François de Neufchâteau."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage Secret",
    "summary": "Francine Printemps, arrivant au tournant de la trentaine, s'apprête avec soin dans son appartement de la rue de Moscou, sous le regard désapprobateur de sa femme de chambre.",
    "paragraphs": [
      "Rue de Moscou, dans l'appartement de mademoiselle Francine Printemps, un appartement assez gentiment meublé en tape-à-l'œil, la maîtresse du logis était à sa toilette.",
      "Longue et importante occupation, chaque jour plus importante et plus longue, parce que Francine Printemps arrivait au mauvais côté de la trentaine et que, dans sa profession, selon le mot du vicomte de l'Orme, les années de campagne comptent double.",
      "Mais voilà, ajoutait cette Maria qui avait d'autant mieux son franc parler que ses gages étaient plus irrégulièrement payés : « Voilà, c'est bien inutile d'avoir de la chance quand on ne sait pas en profiter. Maintenant que vos affaires n'iraient pas mal, que vous pourriez mettre quelque chose de côté... »"
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Justice",
    "title": "Mouvement judiciaire",
    "summary": "Le Journal officiel a publié hier le nouveau mouvement du personnel judiciaire, actant diverses nominations de magistrats au sein des tribunaux de première instance.",
    "paragraphs": [
      "Le Journal officiel a publié hier matin le mouvement judiciaire suivant : Sont nommés procureur de la République près le tribunal de première instance d'Étampes, M. Habert, juge d'instruction à Corbeil ; juge d'instruction au tribunal de première instance de Corbeil, M. Grenet, juge d'instruction à Tonnerre ; juge d'instruction à Tonnerre, M. Bouvier, juge suppléant à Meaux ; juge suppléant au tribunal de première instance de Meaux, M. Sabail, juge suppléant à Vitry ; juge suppléant à Vitry, M. Jozon, avocat ; procureur de la République près le tribunal de première instance de Castellane, M. Bonnin, juge d'instruction à La Réole ; juge au tribunal de première instance de La Réole, M. Montazel, juge suppléant à Périgueux."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Politique étrangère",
    "title": "La Dictature en Alsace-Lorraine",
    "summary": "La députation d'Alsace-Lorraine a demandé, sans succès, au Reichstag la fin de la dictature qui régit les provinces depuis vingt-huit ans, malgré le soutien majoritaire du Parlement allemand.",
    "paragraphs": [
      "Il y a toujours quelque chose de solennel dans une démarche collective des députés de l'Alsace-Lorraine. Ce n'est pas de déchirer le traité de Francfort qu'il s'agissait, lorsque le doyen de la députation alsacienne-lorraine a demandé au Reichstag la suppression de la dictature qui pèse depuis vingt-huit ans sur ses concitoyens.",
      "Pour la troisième fois, à une grande majorité, le Reichstag lui a donné raison, mais le Parlement allemand n'a que le pouvoir d'émettre un vœu. Avec une énergie qui n'est ni dans ses goûts ni dans ses habitudes, le prince de Hohenlohe a repoussé l'idée de placer l'Alsace-Lorraine sur un pied d'égalité avec les autres pays allemands."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Social",
    "title": "M. Loubet à la mairie du vingtième",
    "summary": "Le président Loubet a présidé la fête de la Mutualité scolaire du 20e arrondissement, honorant la mémoire de Gambetta et soulignant l'importance de l'éducation démocratique et de la solidarité.",
    "paragraphs": [
      "Dans l'après-midi d'hier, M. Loubet, président de la République, a présidé la fête de la Mutualité scolaire du vingtième arrondissement. La mairie, située place Gambetta, avait été brillamment pavoisée.",
      "M. Loubet a répondu en ces termes : « Monsieur le maire, vous avez bien fait d'évoquer la mémoire du grand citoyen, du tribun puissant qui représenta jusqu'à sa mort le vingtième arrondissement, et qui, avec vous et par vous, entreprit cette grande œuvre : la fondation de la République et l'éducation de la démocratie. »",
      "C'est dès l'enfance, par l'action combinée des parents et des maîtres, qu'on fera pénétrer dans ces jeunes générations les principes d'assistance mutuelle. Tout ce qui rapproche, tout ce qui unit, tout ce qui fortifie la paix sociale assure, par là même, la puissance de la République."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Économie",
    "title": "Le Concours des animaux gras",
    "summary": "Au marché aux bestiaux de la Villette, le concours des animaux gras a suscité une vive animation. Un bœuf de race garonnaise a particulièrement impressionné les jurys en atteignant le poids exceptionnel de 1 300 kilos.",
    "paragraphs": [
      "Les abords du marché aux bestiaux de la Villette, rue d'Allemagne, ont présenté hier une animation extraordinaire pendant toute la durée de la réception des envois au concours des animaux gras, c'est-à-dire de huit heures du matin à quatre heures de l'après-midi.",
      "Le record du poids est détenu, avec 1 300 kilos, par un bœuf de race garonnaise. La race ovine est représentée par quelques jolies bandes de races françaises pures et des curieux spécimens de races étrangères.",
      "Dans la division réservée à la race porcine, les animaux de race craonnaise et normande triomphent."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Armée",
    "title": "Le service de deux ans",
    "summary": "La commission de l'armée a poursuivi ses travaux concernant la réduction du service militaire à deux ans, avec les interventions appuyées de MM. Mézières, Guyot-Dessaigne et Gouzy.",
    "paragraphs": [
      "Il est intéressant de compléter le compte rendu de la réunion tenue mercredi par la commission de l'armée au sujet du service de deux ans. Après le résumé qui a été fait par M. Mézières, président de la commission, plusieurs députés, notamment MM. Guyot-Dessaigne et Gouzy, ont développé des arguments en faveur du service de deux ans."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits divers",
    "title": "Les obsèques de l'agent Maurs",
    "summary": "La ville de Paris a rendu un dernier hommage au gardien Jean-Baptiste Maurs lors d'obsèques solennelles, suivies par une foule nombreuse après la tragédie survenue en service.",
    "paragraphs": [
      "Hier matin ont eu lieu les obsèques du gardien Jean-Baptiste Maurs, tué par un train dans les circonstances que nous avons relatées. Ces obsèques, dont la Ville de Paris a pris les frais à sa charge, ont été suivies par une grande affluence.",
      "À l'issue de la cérémonie religieuse à Notre-Dame, le cortège s'est formé devant la préfecture de police pour se diriger vers le cimetière Montparnasse."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Faits Divers",
    "title": "Obsèques de la victime du devoir Jean-Baptiste Maurs",
    "summary": "Les funérailles de Jean-Baptiste Maurs ont rassemblé de nombreux officiels au cimetière Montparnasse. M. Lucipia et M. Laurent ont salué avec émotion le courage de cette victime du devoir.",
    "paragraphs": [
      "La cérémonie funèbre en l'honneur de Jean-Baptiste Maurs, gardien de la paix, s'est déroulée avec solennité. Le cortège a rejoint le cimetière Montparnasse après être passé par la place du Parvis-Notre-Dame, le quai du Marché-Neuf et le boulevard Saint-Michel.",
      "Au cimetière, M. Lucipia, président du Conseil municipal, a prononcé un discours comparant la mort du gardien à celle d'un soldat tombé sur le champ de bataille.",
      "M. Laurent, secrétaire général de la préfecture de police, a également rendu un hommage ému, saluant le dévouement de cette victime du devoir, traîtreusement frappée par derrière.",
      "La Caisse des Victimes du Devoir a versé une somme de 500 francs à la veuve de l'infortuné gardien."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Situation générale et dépêches du front",
    "summary": "La guerre des Boërs se poursuit avec une intensité croissante. Malgré les tentatives de minimisation britanniques, l'inquiétude grandit à Londres face aux pertes subies et à la résistance acharnée des Boërs.",
    "paragraphs": [
      "Les dépêches anglaises continuent à mentionner des échecs pour les Boërs, bien que ces derniers parviennent à maintenir une résistance acharnée, infligeant des pertes sérieuses aux forces britanniques.",
      "Le War Office, cherchant à rassurer l'opinion publique à Londres, évite de publier le nombre exact de morts et blessés, mais l'inquiétude grandit après l'annonce de pertes sévères parmi les officiers.",
      "Le général Cronje semble acculé selon les sources britanniques, mais continue de recevoir des renforts et a capturé un convoi important du général French."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Dépêches de Paarde-Berg et Ladysmith",
    "summary": "Lord Roberts privilégie le bombardement à Paarde-Berg pour épargner ses troupes. La victoire britannique s'affirme à Colenso et Hlangwane malgré les difficultés topographiques de la Tugela.",
    "paragraphs": [
      "Londres, 22 février : Lord Roberts communique que, pour éviter de trop lourdes pertes, il a choisi de bombarder l'ennemi à Paarde-Berg plutôt que de lancer un assaut direct.",
      "Le résultat du bombardement est jugé satisfaisant par les autorités britanniques, les Boërs ayant été chassés de leurs positions après avoir subi des pertes considérables.",
      "Du côté de Chieveley, les Britanniques ont occupé Colenso et Hlangwane, bien que la traversée de la Tugela demeure une entreprise délicate en raison de la configuration difficile des rives."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Opérations à Colesberg et dans le Béchuanaland",
    "summary": "À Colesberg, les Britanniques repoussent les assauts boërs malgré des captures locales. Dans le Béchuanaland, une opération contre Crocodile Pools échoue et contraint les troupes au repli.",
    "paragraphs": [
      "À Colesberg, les Boërs ont tenté d'investir le camp d'Arundel. En dépit d'un feu d'artillerie ennemi particulièrement violent, les positions britanniques ont fini par l'emporter.",
      "On annonce également la capture de plusieurs hommes du régiment de Wiltshire par les troupes boërs près de Colesberg.",
      "Dans le Béchuanaland, une attaque dirigée par le major Bird contre la position boër de Crocodile Pools a échoué, forçant les troupes britanniques à battre en retraite après avoir subi plusieurs pertes."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Actualités politiques en Angleterre",
    "summary": "Au club national libéral, Lord Kimberley désavoue l'impérialisme du gouvernement, fustigeant une diplomatie imprévoyante responsable, selon lui, de la calamité sud-africaine.",
    "paragraphs": [
      "Lord Kimberley, s'exprimant au club national libéral, a affirmé que si le parti libéral soutient l'Empire, il ne saurait sympathiser avec l'impérialisme actuel.",
      "Il a vivement critiqué le gouvernement pour son manque de prévoyance et de jugement lors des négociations ayant mené à la guerre, estimant que cette nouvelle diplomatie ne peut conduire qu'à la calamité."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Lettre du colonel de Villebois-Mareuil",
    "summary": "Le colonel de Villebois-Mareuil salue l'organisation rigoureuse des Républiques sud-africaines, louant l'apport des ingénieurs français et la discipline naturelle des combattants boërs.",
    "paragraphs": [
      "Le colonel de Villebois-Mareuil, qui combat aux côtés des Boërs, souligne l'organisation impressionnante des deux Républiques sud-africaines.",
      "Il met notamment en avant le rôle de deux ingénieurs français, MM. Grunberg et Léon, qui ont structuré l'armement et la fabrication de munitions à Johannesburg.",
      "Le colonel décrit la vie dans les laagers boërs, notant le calme des hommes, l'absence de contrainte militaire stricte et l'efficacité remarquable des services logistiques et postaux malgré les conditions de guerre."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Vie Parlementaire",
    "title": "Expulsion des Jésuites et projets législatifs",
    "summary": "La Chambre examine des mesures contre les congrégations non autorisées. M. Pochon préconise l'application stricte du décret de 1880 pour l'expulsion des Jésuites et le contrôle du clergé.",
    "paragraphs": [
      "Une commission parlementaire a été chargée d'examiner les pétitions réclamant l'expulsion des Jésuites. Le rapporteur, M. Pochon, suggère d'appliquer strictement le décret de 1880 contre les congrégations non autorisées.",
      "La Chambre a également nommé une commission afin d'étudier le projet ministériel visant à réprimer les troubles à l'ordre public causés par certains ministres du culte."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Vie Parlementaire",
    "title": "Débats à la Chambre des députés",
    "summary": "La Chambre des députés a voté les crédits provisoires et examiné les conditions d'instruction des réservistes. Le général de Galliffet a fermement défendu l'administration des cercles militaires.",
    "paragraphs": [
      "Lors de la séance du 22 février, la Chambre a adopté le projet de loi relatif aux crédits provisoires et a longuement débattu de la durée des périodes d'instruction militaire imposées aux réservistes durant l'année de l'Exposition.",
      "Le ministre de la Guerre, le général de Galliffet, a répondu avec précision aux interpellations concernant la production chevaline, les conditions d'avancement des officiers sortis du rang et le fonctionnement des cercles militaires, réfutant toute accusation de propagande politique au sein de ces institutions."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Haute Cour",
    "title": "Procès de M. Marcel Habert",
    "summary": "Le procès pour complot visant M. Marcel Habert touche à son terme. Le procureur général a requis une condamnation, tandis que la défense invoque l'autorité de la chose jugée pour obtenir l'acquittement.",
    "paragraphs": [
      "Le procès de M. Marcel Habert devant la Haute Cour touche à sa fin. Le procureur général Bernard a requis la condamnation de l'accusé pour le crime de complot.",
      "L'avocat de la défense, Me Chenu, a plaidé l'acquittement, arguant que M. Habert a déjà été jugé et acquitté pour les mêmes faits, soulignant que les libertés publiques sont ici au cœur des débats.",
      "L'accusé a déclaré attendre la décision de la Cour avec sérénité avant que celle-ci ne se retire pour délibérer."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Échos",
    "title": "Séance d'échecs au Cercle Philidor",
    "summary": "Le célèbre champion d'échecs, M. Janowski, a fait montre d'une maîtrise remarquable au Grand Café du Globe, en triomphant brillamment lors d'une séance de quarante parties simultanées.",
    "paragraphs": [
      "M. Janowski, champion d'échecs renommé, a réalisé une performance remarquable au Grand Café du Globe en disputant quarante parties simultanées.",
      "Bien que confronté à plusieurs adversaires par échiquier, M. Janowski s'est imposé avec une aisance manifeste, confirmant son statut de joueur le plus talentueux actuellement en France."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Statistiques",
    "title": "Rapport sanitaire de la Ville de Paris",
    "summary": "Le rapport statistique de la Ville de Paris souligne une mortalité accrue, principalement due à une épidémie de grippe, parallèlement à l'enregistrement de 491 nouveaux mariages dans la capitale.",
    "paragraphs": [
      "Le service de statistique de la Ville de Paris note une mortalité supérieure à la moyenne pour la semaine écoulée, principalement en raison de la grippe et d'autres affections respiratoires.",
      "Le nombre de décès attribués à la grippe s'élève à 78, tandis que la phtisie en a causé 234. En parallèle, 491 mariages ont été célébrés dans la capitale."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'Héritage du Mendiant",
    "summary": "Une blanchisseuse a été condamnée à trois ans de prison pour avoir dérobé des titres d'une valeur de 280 000 francs au domicile d'un mendiant décédé dont elle avait la garde.",
    "paragraphs": [
      "Rue Trézel, au numéro 17, dans une petite chambre délabrée, mourait il y a quelque temps un homme âgé de quatre-vingts ans, nommé Louvier, bien connu comme mendiant dans le quartier.",
      "Le commissaire de police, requis pour constater le décès, commit à la garde du cadavre une blanchisseuse du voisinage, Antoinette Mathieu.",
      "Dans la chambre, le fonctionnaire n'avait trouvé qu'un carnet. Ce document révélait une fortune insoupçonnée : il contenait le relevé de 280 000 francs en titres financiers.",
      "Le commissaire se rendit immédiatement chez le notaire, mais les titres avaient disparu. Quelques jours après l'enterrement, une femme se présenta chez le notaire pour tenter de toucher les titres soustraits. Les valeurs étant frappées d'opposition, la femme fut arrêtée : c'était la blanchisseuse. Avant l'arrivée du commissaire, elle avait découvert et dérobé la fortune du défunt.",
      "Antoinette Mathieu a comparu hier devant la douzième chambre ; elle a été condamnée à trois ans de prison."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Condamnations et incidents judiciaires",
    "summary": "L'ex-maréchal des logis Meunier, impliqué dans des faits de vol et l'affaire Pinglé, est condamné à deux ans de travaux publics. Par ailleurs, un incident entre le barreau et le parquet de Marseille est clos.",
    "paragraphs": [
      "Le nommé Meunier, ex-maréchal des logis fourrier, qui fut extradé de Bruxelles pour s'être rendu coupable de vol comptable et pour sa complicité présumée avec Tonnelier dans l'assassinat de Pinglé, vient d'être jugé par le conseil de guerre du 20e corps et condamné à deux ans de travaux publics.",
      "On nous écrit de Marseille : L'incident survenu entre les avocats de notre barreau et le procureur de la République, à l'occasion du procès des membres du groupe « la Jeunesse grise », s'est terminé hier soir au palais de justice. Les parties dissidentes ont échangé des explications et le bâtonnier ainsi que le chef du parquet se sont serré la main, actant la fin du différend."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Naufrage en Seine",
    "summary": "La péniche « La Moselle » a sombré dans l'écluse de la Monnaie suite à une rupture d'amarre. Par ailleurs, les débris de l'Argus, épave située près du pont Saint-Louis, seront détruits aujourd'hui par explosifs.",
    "paragraphs": [
      "La péniche « La Moselle », appartenant à la Compagnie la Seine, assurant le service entre Paris et la mer et chargée de diverses marchandises, s'est rompue hier à cinq heures dans l'écluse de la Monnaie, par suite de la rupture d'une amarre, et est venue se briser contre le bajoyer.",
      "L'eau s'y est infiltrée et la péniche a sombré par l'avant. Heureusement, la cloison étanche placée à cet endroit a résisté à la pression, permettant aux pompiers de l'état-major d'arriver rapidement sur les lieux pour procéder au renflouement.",
      "À ce propos, nous ajoutons que c'est aujourd'hui qu'on fera sauter, au moyen d'explosifs, les débris de l'Argus, coulé dernièrement près du pont Saint-Louis."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un Bigame arrêté",
    "summary": "Un employé des postes de cinquante-six ans a été arrêté pour bigamie. Après avoir abandonné sa première épouse dans l'Indre, il s'était remarié à Paris sans faire constater le décès de celle-ci, qu'il prétendait morte.",
    "paragraphs": [
      "Sur mandat de M. de Valles, juge d'instruction, le service de la sûreté a procédé hier matin à l'arrestation d'un employé de l'administration des postes, François C., âgé de cinquante-six ans, demeurant rue Mandar, inculpé de bigamie.",
      "François C., qui s'était marié au mois d'avril à La Châtre-Langlin (Indre), avait abandonné sa femme peu de temps après pour s'installer à Paris. Le 30 janvier dernier, sans se préoccuper du sort de sa première épouse, il contractait un nouveau mariage à la mairie du premier arrondissement. François C. a allégué pour sa défense qu'il croyait sa première femme décédée."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un Meurtre sur le Pont Notre-Dame",
    "summary": "Un jeune homme de vingt ans, François Mourchin, a été mortellement poignardé lors d'une rixe sur le pont Notre-Dame. Il se rendait aux Halles avec des camarades lorsqu'ils furent agressés par une dizaine d'individus.",
    "paragraphs": [
      "Au cours de la nuit d'avant-hier, vers trois heures du matin, quatre jeunes gens se rendaient aux Halles pour y travailler lorsque, parvenus sur le pont Notre-Dame, ils croisèrent une dizaine d'individus qui les insultèrent et cherchèrent querelle.",
      "Les quatre jeunes gens, voulant poursuivre leur chemin, se défendirent de leur mieux ; mais l'un d'eux, François Mourchin, âgé de vingt ans, poussa un cri et s'affaissa. Il venait d'être frappé d'un coup de couteau dans l'abdomen.",
      "Pendant que ses camarades s'empressaient auprès de lui et l'emportaient dans une pharmacie voisine, les agresseurs prenaient la fuite et disparaissaient. Le blessé, après avoir reçu des soins à l'Hôtel-Dieu, a été transporté à l'hôpital Cochin."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un curieux cas de folie",
    "summary": "Jean Salles, un garçon charbonnier, a été pris d'un accès de démence rue d'Auteuil. Après s'être jeté par la fenêtre sans dommage, il a violemment agressé son épouse et les agents de police intervenus pour le maîtriser.",
    "paragraphs": [
      "Atteint d'une légère indisposition, un garçon charbonnier nommé Jean Salles, âgé de trente-neuf ans, demeurant 15, rue d'Auteuil, a été frappé hier d'un accès de folie subite.",
      "Salles a ouvert tout à coup la fenêtre, a franchi d'un bond la barre d'appui et s'est élancé dans le vide. Par un hasard extraordinaire, il n'a subi dans cette chute aucune blessure grave.",
      "S'emparant d'une forte tringle de fer, il s'en est pris à sa femme accourue à son secours, la frappant avec son arme. Après une lutte terrible avec les gardiens de la paix, il a été ligoté. Les blessures de Mme Salles et de l'agent Ares sont assez graves."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un voleur de valises arrêté",
    "summary": "Camille Faucogney, spécialisé dans le vol de bagages, a été appréhendé hier à la gare Saint-Lazare par le commissaire Escourrou alors qu'il tentait de récupérer des valises volées à la consigne.",
    "paragraphs": [
      "M. Escourrou, commissaire spécial de la gare Saint-Lazare, a réussi hier à capturer un individu qui se faisait une spécialité des vols de valises.",
      "Camille Faucogney, âgé de vingt-six ans, s'introduisait sur les quais et, dès qu'il trouvait l'occasion de faire main basse sur une valise abandonnée, le coup était fait. Ces jours derniers, il avait volé deux valises appartenant à de hauts fonctionnaires.",
      "Le voleur avait commis l'imprudence de déposer les objets à la consigne. Hier, au moment où il venait les retirer, il fut appréhendé par les inspecteurs. Il a fait des aveux complets."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Une explosion rue Poissonnière",
    "summary": "Un bidon de benzine a causé une forte explosion dans la boutique de la teinturière Mme Bodimond, rue Poissonnière. La propriétaire a été légèrement blessée par des éclats de verre projetés sur la voie publique.",
    "paragraphs": [
      "Une forte explosion a mis en émoi, hier matin, les habitants de la rue Poissonnière. Un bidon de benzine, placé imprudemment près d'un poêle dans la boutique de Mme Bodimond, teinturière, a fait explosion.",
      "Les glaces de la devanture ont été projetées sur le trottoir. Seule Mme Bodimond a été légèrement blessée à la main droite par des éclats de verre."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort subite d'un ouvrier boulanger",
    "summary": "Henri Bâtard, un ouvrier boulanger de trente-cinq ans travaillant boulevard Rochechouart, est décédé subitement dans son fournil, victime d'une rupture d'anévrisme.",
    "paragraphs": [
      "Hier, vers midi, un ouvrier boulanger nommé Henri Bâtard, âgé de trente-cinq ans, s'est affaissé subitement dans le fournil de la boulangerie où il travaillait, au 66, boulevard Rochechouart.",
      "Le malheureux a succombé à la suite de la rupture d'un anévrisme. Le commissaire de police a fait transporter le cadavre au domicile du défunt."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Faits divers en banlieue",
    "summary": "La banlieue parisienne connaît une série noire : agressions à Clichy, accidents tragiques à Cormeilles et Argenteuil, et arrestations multiples à Joinville-le-Pont et Aubervilliers marquent cette fin de journée.",
    "paragraphs": [
      "Clichy : La veuve Augustine Tricard a été retrouvée devant son domicile avec trois coups de couteau au ventre. Son état a nécessité un transport urgent à l'hôpital Beaujon.",
      "Bezons-les-Bruyères : Frédéric Dauson, jardinier, est tombé sur des fers de grille en émondant des arbres. Il a été transporté à l'hôpital dans un état alarmant.",
      "Argenteuil : Jean-Marie Lascaigne, souffrant d'influenza, s'est jeté dans un puits et a trouvé la mort.",
      "Bois-Colombes : Le petit Marius Bouissou, âgé de sept ans, a été renversé et tué par une voiture.",
      "Aubervilliers : Victor Hasliard, qui prétendait avoir été blessé lors de l'incendie de la rue Baudin, a été arrêté pour un vol commis dans la même rue avant le sinistre.",
      "Plaine-Saint-Denis : Le charretier Jean-Baptiste Vauthier est mort écrasé contre un mur par le timon de son camion.",
      "Cormeilles-en-Parisis : L'ouvrier Heitz est tombé dans un four de plâtrière et a été enseveli sous les décombres brûlants.",
      "Joinville-le-Pont : Après l'arrestation de deux repris de justice, trois de leurs complices ont été capturés suite au naufrage de leur canot contre un barrage.",
      "Ivry : L'instruction se poursuit concernant l'incendie volontaire chez les époux Duyme, malgré les dénégations du mari.",
      "La Ferté-Alais : Le cultivateur Charlet Guérin est mort écrasé entre un mur et la roue de sa voiture."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Départements",
    "title": "Nouvelles des correspondants particuliers",
    "summary": "De Creil à Brest, les correspondants signalent des drames industriels, des incendies criminels et les ravages des récentes tempêtes sur les côtes bretonnes et maritimes.",
    "paragraphs": [
      "Creil : L'ouvrier Henri Clément est mort après avoir été transpercé par une barre de fer rouge dans une tréfilerie locale.",
      "Chartres : Un incendie d'origine criminelle a détruit un moulin à vent appartenant à M. Cochin.",
      "Brest : La tempête a causé de grands dégâts à l'île de Sein ; les vivres manquent et des secours s'organisent pour la population.",
      "Les Sables-d'Olonne : Le bateau de pêche « Les Deux-Frères-aux-Trois-Sœurs » s'est échoué sur la côte de Saint-Hilaire-de-Riez.",
      "Bordeaux : Le vapeur « Conseil-Père » s'est échoué près de Gibraltar à la suite d'une voie d'eau."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Bulletin du Travail",
    "title": "Grèves à Troyes et Saint-Quentin",
    "summary": "À Troyes, la grève générale mobilise 5 500 ouvriers bonnetiers. À Saint-Quentin, les tisseurs recherchent une issue au conflit par l'arbitrage du tribunal de commerce, conformément aux conseils de M. Waldeck-Rousseau.",
    "paragraphs": [
      "À Troyes, la grève générale a été votée à l'unanimité à la Halle à la bonneterie. On compte 5 500 grévistes réclamant une augmentation de salaire.",
      "À Saint-Quentin, les tisseurs ont sollicité l'arbitrage du ministre de l'Intérieur, M. Waldeck-Rousseau. Le ministre a conseillé aux délégués de solliciter de nouveau l'arbitrage de M. Cogne, président du tribunal de commerce, ce que les délégués ont accepté."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Sports",
    "title": "Courses à Auteuil et nouvelles sportives",
    "summary": "La réunion hippique d'Auteuil a consacré plusieurs chevaux dont Lhéris et Simonica. Par ailleurs, un tragique incendie à Bordeaux a frappé l'écurie de M. Paysse, entraînant la perte de sept chevaux de course.",
    "paragraphs": [
      "Une belle réunion de semaine s'est tenue à Auteuil. Les principaux gagnants sont Lhéris dans le prix du Paddock, Taillebourg II dans le prix du Phalanstère, Niger II dans le prix du Viaduc, l'Aurore dans le prix Castiglione, Le Plantis dans le prix Beaumanoir et Simonica dans le prix de la Faisanderie.",
      "À Bordeaux, un incendie dans l'écurie de M. Paysse a causé la mort de sept chevaux de course."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Premières et représentations au théâtre",
    "summary": "Le théâtre du Gymnase présente ce soir la première du Complot, pièce de MM. Al. Bisson et Jean Gascogne. Au Palais-Royal, on fête la centième de Coralie et C., marquée par le retour de Mlle Cheirel et de M. Ch. Lamy.",
    "paragraphs": [
      "Ce soir, au théâtre du Gymnase, première représentation du Complot, pièce en trois actes de MM. Al. Bisson et Jean Gascogne.",
      "Ce soir, au théâtre du Palais-Royal, centième représentation de Coralie et C., avec la rentrée de Mlle Cheirel et de M. Ch. Lamy."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Spectacles des jours gras à l'Opéra-Comique",
    "summary": "Le programme des représentations à l'Opéra-Comique pour les jours gras est arrêté : de Fra Diavolo à Louise, le public pourra découvrir ou redécouvrir les grands classiques du répertoire lyrique.",
    "paragraphs": [
      "Dimanche 25 : matinée, Fra Diavolo et la Fille du régiment ; soirée, Carmen.",
      "Lundi 26 : matinée, Cendrillon ; soirée, Manon.",
      "Mardi 27 : matinée, Mignon ; soirée, Louise."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Programme du grand gala à l'Opéra",
    "summary": "Un fastueux gala se prépare à l'Opéra : valses, danses chantées par 200 exécutants sous la direction de M. Louis Canne, et la traditionnelle entrée du Bœuf gras rythmeront cette nuit festive.",
    "paragraphs": [
      "Le programme du grand gala qui aura lieu demain à l'Opéra prévoit l'ouverture des portes à minuit et un embrasement de la loggia.",
      "À une heure du matin, première audition des valses et danses chantées avec un orchestre et des chœurs de 200 exécutants sous la direction de M. Louis Canne.",
      "À deux heures, grande bataille de fleurs et de projectiles. À trois heures, entrée triomphale du Bœuf gras. À quatre heures, farandole générale."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Spectacles des jours gras au Théâtre lyrique de la Renaissance",
    "summary": "Le Théâtre lyrique de la Renaissance annonce son programme pour les jours gras, marqué par les représentations de Lucie de Lammermoor, le Voyage en Chine et la première d'Euphrosine et Coradin.",
    "paragraphs": [
      "Le Théâtre lyrique de la Renaissance a arrêté ses spectacles comme suit : samedi, Martin et Martine. Dimanche, en matinée, Lucie de Lammermoor avec M. Cossira et Mlle Jeanne Leclerc ; en soirée, le Voyage en Chine.",
      "Lundi, en matinée, le Voyage en Chine ; en soirée, première d'Euphrosine et Coradin, de Méhul.",
      "Mardi, en matinée, Martin et Martine ; en soirée, Lucie de Lammermoor.",
      "Mercredi, à quatre heures et quart, huitième matinée artistique, précédée d'une conférence de M. Georges Boyer."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités de la Comédie-Française et du théâtre Sarah-Bernhardt",
    "summary": "La Comédie-Française et le théâtre Sarah-Bernhardt dévoilent leurs affiches pour les jours gras, mêlant classiques du répertoire de Molière et préparation du spectacle L'Aiglon.",
    "paragraphs": [
      "Le théâtre Sarah-Bernhardt annonce pour dimanche prochain, 25 février, à deux heures, la dernière matinée de la Dame aux Camélias. Le soir commenceront les répétitions générales de L'Aiglon.",
      "L'administration de la Comédie-Française a fixé comme suit les spectacles des jours gras : dimanche, l'Avare et le Malade imaginaire ; lundi, Ruy-Blas et Hernani ; mardi, les Femmes savantes et Monsieur de Pourceaugnac."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Social",
    "title": "Communications diverses",
    "summary": "L'agenda social s'anime avec des réunions à la Bourse du travail, le banquet annuel de la société pour la propagation des langues étrangères et le punch fraternel savoyard présidé par M. Chautemps.",
    "paragraphs": [
      "Ce soir, à la Bourse du travail, réunion des diamantaires, des peintres et graveurs sur verre et des travailleurs du gaz.",
      "La société pour la propagation des langues étrangères en France donnera son neuvième banquet annuel à l'hôtel des Sociétés savantes, le 14 février.",
      "Le punch fraternel savoyard aura lieu dimanche prochain, boulevard de Strasbourg, présidé par M. Chautemps, député."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Feuilleton",
    "title": "Deux Passions - Un drame du mariage",
    "summary": "Paul Tavernier et le docteur Bernay explorent des tourments familiaux, tandis que l'avocat Dufresne, éprouvé par le souvenir d'un drame maritime, envisage une séparation irrémédiable.",
    "paragraphs": [
      "Paul Tavernier et le docteur Bernay débattent de mystères familiaux et de la sécurité de leurs proches.",
      "L'avocat Dufresne rejoint Tavernier et discute de la catastrophe maritime ayant conduit à la perte de sa fille et de ses intentions de séparation avec sa femme."
    ]
  }
];
