// Date: 1900-01-12
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-12 (Version Restaurée, 33 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Éditorial",
    "title": "La France et l'idéal de concorde",
    "summary": "Au sortir de passions déchirantes, cet éditorial appelle la France à retrouver l'unité. Par la mesure et la sagesse, dans l'esprit d'Henri IV, la nation doit affirmer sa puissance comme gage du progrès humain.",
    "paragraphs": [
      "La France, après avoir traversé des tempêtes de passions qui ont profondément ébranlé le corps social, se doit aujourd'hui de retrouver le chemin de l'unité. Notre pays ne peut triompher des idées généreuses qu'il porte en lui que s'il demeure fort, indivisible et souverain ; car, n'en doutons point, la puissance française demeure l'un des pivots essentiels du progrès humain.",
      "Il appartient désormais aux citoyens de répudier les violences et les excès qui ne servent qu'à compromettre les causes les plus respectables. La sagesse, au contraire, exige la mesure. En nous inspirant de la mansuétude de figures historiques telles qu'Henri IV, ou encore des généraux républicains qui surent faire preuve de magnanimité au cœur des combats, nous saurons rétablir l'équilibre indispensable à la vie publique.",
      "M. Deschanel, dans un discours justement salué par l'ensemble de la Chambre, a su s'élever au-dessus des coteries et des partis. Il nous invite, par-delà les clivages, à tourner nos regards vers cet idéal de concorde, condition sine qua non pour une France relevée, apaisée et agrandie dans sa dignité retrouvée."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Social",
    "title": "Pour les grévistes de Saint-Étienne",
    "summary": "La Chambre a débattu d'une proposition de loi visant à allouer 300 000 francs aux tisseurs stéphanois durement éprouvés par la grève. Le texte a été renvoyé à la commission du budget pour étude approfondie.",
    "paragraphs": [
      "M. Colliard a déposé sur le bureau de la Chambre une proposition de loi tendant à ouvrir un crédit de 300 000 francs, destiné à porter secours aux familles des tisseurs de Saint-Étienne, actuellement plongées dans la détresse par le chômage consécutif à la grève.",
      "Le président du Conseil, M. Waldeck-Rousseau, est intervenu pour demander le renvoi immédiat du texte à la commission du budget. Il a rappelé, avec fermeté, que les traditions parlementaires et la rigueur budgétaire imposent un examen minutieux avant toute ouverture de crédits d'urgence.",
      "En dépit des interventions pressantes de MM. Colliard, Boudenoot, Victor Gay et Laurent Bougère, qui ont tenté de faire valoir l'urgence de la situation sociale, la proposition a finalement été renvoyée, selon la procédure, à la commission compétente."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Parlement",
    "title": "Incidents divers à la Chambre",
    "summary": "La Chambre fixe le calendrier des débats sur les grèves. Par ailleurs, M. Georges Berry retire sa proposition de loi d'indemnisation particulière, critiquée comme étant un privilège législatif injustifié.",
    "paragraphs": [
      "La Chambre, au cours de sa séance, a officiellement fixé à jeudi prochain la discussion de l'interpellation déposée par M. Gay, laquelle porte sur la question de l'impartialité que le gouvernement se doit de maintenir durant les conflits sociaux et les grèves.",
      "Par ailleurs, M. Georges Berry avait soumis une proposition de loi visant à accorder une indemnité à M. Barillier, récemment acquitté par la justice. Toutefois, face aux vives objections de ses collègues députés, qui ont soutenu qu'une loi ne saurait être édictée en faveur d'un seul individu, M. Berry a dû se résoudre à retirer sa proposition."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Décès du général Massons",
    "summary": "Le général de brigade Massons, officier éminent ayant illustré les armes de la France lors des campagnes de Crimée, d'Italie et du Mexique, s'est éteint subitement à l'âge de 70 ans.",
    "paragraphs": [
      "Le général de brigade Massons, commandeur de la Légion d'honneur, est décédé subitement à l'âge de 70 ans. Cet officier, dont la carrière fut exemplaire, avait pris une part active et distinguée aux grandes campagnes du siècle, notamment en Crimée, en Italie et au Mexique, où il avait servi la patrie avec une constante bravoure."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Réglementations sur la tenue des officiers",
    "summary": "Le ministre de la Guerre assouplit le port de l'uniforme pour les officiers en ville. Désormais, la tenue civile est autorisée pour certaines pratiques sportives et de détente.",
    "paragraphs": [
      "Le ministre de la Guerre a pris la décision d'autoriser les commandants de corps d'armée à apporter une souplesse bienvenue à la règle, jusqu'ici rigide, imposant le port constant de l'uniforme en ville. Désormais, il sera permis aux officiers de revêtir la tenue civile lors d'activités de détente ou de sport, telles que la pêche, la chasse ou la pratique du vélo."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Nouvelles Coloniales",
    "title": "Informations de Madagascar et d'In-Salah",
    "summary": "La peste est déclarée terminée à Madagascar, permettant la levée de la quarantaine. Au Sahara, les autorités renforcent l'occupation militaire à In-Salah et étendent la ligne télégraphique vers le fort Miribel.",
    "paragraphs": [
      "À Madagascar, l'épidémie de peste est officiellement déclarée terminée et la quarantaine a été levée. Dans le même temps, le gouvernement accorde des exonérations d'impôt foncier aux exploitations agricoles situées à Diégo-Suarez, Nossi-Bé et Sainte-Marie.",
      "À In-Salah, l'autorité supérieure a décidé de renforcer l'occupation militaire et de procéder au prolongement de la ligne télégraphique jusqu'au fort Miribel."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Faits Divers",
    "title": "Accidents de chemins de fer",
    "summary": "Un déraillement du Nord-Express en gare de Bruxelles-Nord a causé une vive panique parmi les passagers. Simultanément, un éboulement au tunnel du Credo entrave gravement la circulation ferroviaire à Bellegarde.",
    "paragraphs": [
      "Le Nord-Express a déraillé à l'entrée de la gare de Bruxelles-Nord ; le bilan fait état de quelques voyageurs contusionnés et d'une panique importante parmi la foule présente sur les quais.",
      "À Bellegarde, un nouvel éboulement survenu sous le tunnel du Credo bloque le passage, perturbant le service ferroviaire pour une durée indéterminée."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Guerre du Transvaal",
    "title": "Situation sur le front sud-africain",
    "summary": "Malgré l'arrivée de Lord Roberts et Lord Kitchener au Cap, aucun changement majeur n'est attendu avant la fin du mois. Ladysmith subit toujours le pilonnage des Boërs tandis que l'artillerie anglaise est critiquée.",
    "paragraphs": [
      "Lord Roberts et Lord Kitchener sont arrivés au Cap, mais le renfort des troupes ne modifiera vraisemblablement la situation tactique que vers la fin du mois. Ladysmith reste sous le bombardement incessant, les généraux britanniques évitant pour l'heure toute offensive trop risquée.",
      "Des rapports font état de vives critiques concernant l'artillerie anglaise, jugée insuffisante face à celle des Boërs. Des détails complémentaires sur la récente défaite du détachement des Suffolk sont également fournis par les dépêches."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Faits Divers",
    "title": "Drame familial à Rosny-sous-Bois",
    "summary": "Un tragique incendie à Rosny-sous-Bois a causé la mort de deux enfants, Francisque et Édouard, asphyxiés par les fumées alors qu'ils étaient laissés seuls au domicile familial par leur sœur aînée.",
    "paragraphs": [
      "Deux enfants en bas âge, nommés Francisque et Édouard, ont péri asphyxiés dans l'incendie de leur logement à Rosny-sous-Bois. Le drame s'est produit alors que leur sœur aînée, chargée de les surveiller, s'était absentée pour effectuer des achats."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Faits Divers",
    "title": "Procès pour brutalités dans un asile",
    "summary": "La 9e chambre correctionnelle a entamé le jugement de plusieurs infirmiers de l'asile de Vauves-Mantes, accusés de sévices et de traitements humiliants exercés sur des pensionnaires sans défense.",
    "paragraphs": [
      "La 9e chambre correctionnelle a ouvert le procès de plusieurs infirmiers de l'asile de Vauves-Mantes. Les prévenus sont accusés de violences répétées envers les pensionnaires, notamment pour avoir attaché une malade sous un prétexte fallacieux de troubles nocturnes."
    ]
  },
  {
    "id": 11,
    "page": 3,
    "category": "Faits Divers",
    "title": "Collision de trains près de Nîmes",
    "summary": "Le tribunal correctionnel de Nîmes a condamné le chef de gare de Langlade à deux mois de prison et 100 francs d'amende suite à la collision ferroviaire d'octobre entre Langlade et Cavairac.",
    "paragraphs": [
      "On se rappelle que, le 5 octobre dernier, une collision se produisait sur la ligne de Sommières à Nîmes, entre Langlade et Cavairac, par la rencontre d'un train de voyageurs et d'un train de marchandises. Le mécanicien du train de marchandises eut une jambe brisée et vingt-sept voyageurs furent contusionnés. Cet accident vient d'avoir son épilogue devant le tribunal correctionnel de Nîmes.",
      "M. Durand, chef de gare de Langlade, poursuivi comme étant responsable de cette collision pour avoir donné, alors qu'il ne le devait pas, la voie libre au train de marchandises annoncé de Saint-Césaire, a été condamné à deux mois de prison et 100 francs d'amende avec bénéfice de la loi Bérenger pour la peine corporelle. La compagnie a été déclarée civilement responsable."
    ]
  },
  {
    "id": 12,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le crime de Poyanne",
    "summary": "Bats, accusé du meurtre de François Larrey à Poyanne par jalousie amoureuse, a été condamné par la cour d'assises des Landes à quatre ans de prison après avoir avoué son crime prémédité.",
    "paragraphs": [
      "Le 26 octobre dernier, un ouvrier maçon se rendant à son travail trouvait au lever du jour, étendu dans une rue de Poyanne, canton de Montfort-en-Chalosse, le cadavre d'un jeune homme âgé de vingt ans, François Larrey. Le malheureux avait reçu dans la région du cœur un coup de couteau qui avait déterminé une mort foudroyante.",
      "L'enquête fit découvrir que le coupable était un nommé Bats. Ce dernier et Larrey courtisaient la même jeune fille, qui accordait une préférence marquée à la victime, et dont son rival se montrait fort jaloux. L'accusé, qui tout d'abord avait nié être l'auteur du crime, ne tarda pas, en présence des preuves qui l'accablaient, à faire les aveux les plus complets. L'instruction établit, en outre, que Bats avait prémédité son crime.",
      "Cette affaire, qui émut profondément la contrée, a eu son dénouement hier devant la cour d'assises des Landes. Déclaré coupable, avec admission de circonstances atténuantes, Bats a été condamné à quatre ans de prison."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Procès devant la cour d'assises de la Somme",
    "summary": "Jean Millet, âgé de dix-huit ans, a été condamné à dix ans de travaux forcés par la cour d'assises de la Somme pour le meurtre de trois femmes sur la route d'Albert à Bapaume.",
    "paragraphs": [
      "La cour d'assises de la Somme vient de juger un jeune homme de dix-huit ans, Jean Millet, qui, le 29 novembre dernier, avait commis un meurtre sur trois femmes d'Albert en volant l'une d'elles. La scène s'était déroulée en plein jour sur la route d'Albert à Bapaume. L'accusé a été condamné à dix ans de travaux forcés."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Condamnation à Villers-Bocage",
    "summary": "L'ouvrier Sottie Bottai a été condamné à trois ans de prison par la cour d'assises pour avoir mortellement frappé d'un coup de bâton un jeune homme de vingt ans lors d'une noce.",
    "paragraphs": [
      "Dans la même audience, la cour d'assises a condamné à trois ans de prison Sottie Bottai, un ouvrier à Villers-Bocage, qui, le 22 novembre dernier, tuait un jeune homme de vingt ans d'un coup de bâton au cours d'une noce."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Condamnation pour crime sur mineure",
    "summary": "Reconnu coupable du viol de Madeleine Derouet, une mineure de treize ans, un homme de trente et un ans a été condamné aux travaux forcés à perpétuité par la cour d'assises de la Somme.",
    "paragraphs": [
      "La cour d'assises de la Somme vient de condamner aux travaux forcés à perpétuité un homme âgé de trente et un ans, coupable d'avoir violé une jeune fille de treize ans, prénommée Madeleine Derouet, fille de son maître."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Affaire de détournement de fonds à Condom",
    "summary": "La cour d'assises du Gers a condamné à cinq ans de réclusion M. Labatut, huissier à Condom, pour avoir détourné les fonds dont il avait la charge au mois de novembre dernier avant de prendre la fuite.",
    "paragraphs": [
      "La cour d'assises du Gers a condamné hier à cinq ans de prison un nommé Labatut, huissier à Condom, qui avait, au mois de novembre dernier, pris la fuite après avoir détourné les fonds de la caisse dont il avait la garde."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Nouvelles Judiciaires",
    "title": "Mise en liberté sous caution",
    "summary": "Le juge d'instruction, M. de Valier, a accordé la liberté sous caution de 500 francs à une dame inculpée pour manœuvres abortives, demeurant rue Condorcet.",
    "paragraphs": [
      "M. de Valier, juge d'instruction, a mis en liberté, sous une caution de 500 francs, une dame D., demeurant rue Condorcet, qui, il y a un mois environ, avait été arrêtée sous l'inculpation de manœuvres abortives."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Exposition Watteau au printemps 1900",
    "summary": "Le Syndicat de la Presse artistique organisera au printemps 1900 une grande exposition dédiée à Watteau dans les salles de l'École des beaux-arts, avec le soutien du ministère de l'Instruction publique.",
    "paragraphs": [
      "Le syndicat de la Presse artistique a décidé de célébrer, durant l'année 1900, le souvenir d'un grand maître de l'École française. Il a été résolu qu'une exposition des œuvres de Watteau, le peintre qui synthétise avec tant de charme l'esprit français du XVIIIe siècle, aurait lieu au printemps prochain. Le ministre de l'Instruction publique a accordé à cet effet l'usage des salles de l'École des beaux-arts."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Collision d'un bateau sur la Seine",
    "summary": "Un bateau-mouche a percuté hier les pieux de la passerelle de l'Exposition près du pont de l'Alma. Plus de peur que de mal pour les trois cents ouvriers à bord, secourus promptement par les pompiers.",
    "paragraphs": [
      "Un accident, qui heureusement n'a pas eu de graves conséquences, est survenu hier matin, vers sept heures, sur la Seine, près du pont de l'Alma. Le bateau-parisien n° 31, conduit par le pilote Auguste Rouger, âgé de vingt-sept ans, venant du pont d'Austerlitz et se dirigeant sur Auteuil, est venu se jeter, en amont du pont de l'Alma, sur les pieux de la passerelle de l'Exposition.",
      "Il y avait à bord environ trois cents voyageurs, dont la plupart étaient des ouvriers. La panique fut vive, mais les pompiers, arrivés sur les lieux, réussirent à évacuer les passagers à l'aide d'échelles. Personne n'est tombé à l'eau ; six voyageurs ont été seulement écorchés par des éclats de verre."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Asphyxie accidentelle rue Charlot",
    "summary": "Un drame familial a endeuillé la rue Charlot : suite au mauvais fonctionnement d'une cheminée, un enfant de cinq ans a péri asphyxié par des émanations toxiques chez ses parents bijoutiers.",
    "paragraphs": [
      "Hier matin, trois ouvriers orfèvres travaillant pour M. Veyrat, bijoutier au 29, rue Charlot, furent inquiétés par la porte fermée de l'atelier. Après avoir alerté la domestique, ils découvrirent que le patron, sa femme et leur fils René, âgé de cinq ans, étaient victimes d'une asphyxie due au mauvais fonctionnement d'une cheminée.",
      "Le petit garçon est décédé. Mme Veyrat a été transportée à l'hôpital dans un état très grave. M. Veyrat est hors de danger, tout comme la domestique."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mystérieuse agression boulevard Saint-Germain",
    "summary": "Une violente altercation a éclaté hier soir boulevard Saint-Germain. M. Armand Serraud fut pris pour cible par des individus armés ; lors de la fusillade, une passante, Mme Billet, a été grièvement atteinte par un projectile.",
    "paragraphs": [
      "Hier soir, deux individus et une femme ont pris à partie M. Armand Serraud alors qu'il circulait boulevard Saint-Germain. Au cours de l'altercation, l'un des agresseurs a fait feu sur M. Serraud ; malheureusement, la balle a atteint une passante, Mme Billet, qui fut grièvement blessée.",
      "Les assaillants ont été promptement arrêtés par des agents de la paix accourus sur les lieux du tumulte."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "La lampe meurtrière rue des Canettes",
    "summary": "Drame domestique rue des Canettes : les époux Fouilliart ont été retrouvés inanimés, victimes d'une intoxication aux émanations d'une lampe à essence restée allumée. Leur état est jugé préoccupant.",
    "paragraphs": [
      "Les époux Fouilliart, journaliers, ont failli périr asphyxiés par les émanations délétères d'une lampe à essence demeurée allumée à proximité de leur couche.",
      "Alertés par le sommeil anormalement prolongé du couple, les voisins ont forcé la porte de leur domicile. Les infortunés ont été transportés à l'hôpital de la Charité dans un état jugé grave."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accident de voiture place de l'Odéon",
    "summary": "Un cheval affolé a semé le désordre place de l'Odéon, percutant plusieurs passants avant de finir sa course contre un réverbère rue Médicis. Les blessés ont été secourus par les autorités.",
    "paragraphs": [
      "Un cheval pris de panique s'est emballé place de l'Odéon, provoquant une série d'accidents. Dans sa course folle, il a renversé son cocher, un garçon épicier et un passant, M. André Lefeuvre.",
      "Le fiacre a finalement terminé sa course en heurtant violemment un réverbère sis rue Médicis. Les blessés ont été immédiatement dirigés vers l'hôpital de la Charité pour y recevoir des soins."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Crime atroce à Bruxelles",
    "summary": "L'infanticide commis à Bruxelles par Charlotte Lefèvre a suscité une vive émotion. La meurtrière a empoisonné sa fillette de deux ans avant de s'enfuir. Elle a été interpellée par la police.",
    "paragraphs": [
      "Un crime atroce a jeté l'émoi à Bruxelles. Une ouvrière, nommée Charlotte Lefèvre, a empoisonné sa propre fille de deux ans, la petite Georgette, qu'elle avait confiée aux époux Schooten.",
      "Après avoir contraint l'enfant à absorber du lait empoisonné, la criminelle a pris la fuite. Le décès de la petite victime a été constaté peu après. La police a procédé à l'arrestation de la mère."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Terrible explosion de dynamite à Courçay",
    "summary": "Une imprudente manipulation de dynamite dans un four à Courçay a provoqué la destruction de la ferme Cathelineau. Le drame a causé la mort de M. Bourdeau et fait plusieurs victimes grièvement blessées.",
    "paragraphs": [
      "Une déflagration de dynamite, entreposée imprudemment dans un four, a entièrement détruit la maison du fermier Cathelineau, sise à Courçay.",
      "M. Bourdeau a succombé à ses blessures. Plusieurs autres personnes, parmi lesquelles figure la fille du fermier, ont été grièvement atteintes, certaines souffrant de lésions atroces aux membres inférieurs."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Météorologie",
    "title": "Bulletin météorologique et variations atmosphériques",
    "summary": "État de la mer sur le littoral français et relevés des variations barométriques et thermométriques observés à Paris le 11 janvier 1900.",
    "paragraphs": [
      "Le Petit Parisien fait mention d'une mer houleuse à Boulogne, au Havre et à Cherbourg, très houleuse à Calais ; sur l'Océan, mer belle à Lorient, agitée à Brest ; sur la Méditerranée, mer très grosse à Marseille, agitée à Sicié, peu agitée à Nice, très houleuse aux îles Sanguinaires.",
      "Variations atmosphériques du jeudi 11 janvier, à notre salle des dépêches : Baromètre 770, température du matin 16,9 au-dessus de zéro, température de midi 7, température du soir 7."
    ]
  },
  {
    "id": 27,
    "page": 4,
    "category": "Statistique municipale",
    "title": "Statistique de la ville de Paris",
    "summary": "Bilan hebdomadaire de l'état civil parisien : mortalité, causes de décès, mariages et naissances pour le début de l'année 1900.",
    "paragraphs": [
      "Le service de la statistique municipale a compté, pendant la semaine de 1900, 1 002 décès, chiffre voisin de la moyenne ordinaire des semaines de janvier (1 065), et fort inférieur à celui des deux semaines précédentes.",
      "La fièvre typhoïde a causé 9 décès, chiffre identique à celui de la semaine précédente (la moyenne est 6). La rougeole (9 décès au lieu de la moyenne 12), la scarlatine (5 au lieu de la moyenne 3), la diphtérie (8 au lieu de la moyenne 10) continuent à être assez rares.",
      "Les maladies inflammatoires des organes de la respiration ont causé 200 décès. La phtisie a causé 188 décès. Il y a eu 14 suicides et 12 autres morts violentes.",
      "On a célébré à Paris 460 mariages et enregistré la naissance de 1 173 enfants vivants. On a déclaré la mise en nourrice de 256 enfants et 80 mort-nés."
    ]
  },
  {
    "id": 28,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "Changements de direction et répétitions de nouvelles pièces au programme des théâtres parisiens pour cette fin de mois de janvier.",
    "paragraphs": [
      "À l'Opéra, M. Louis Ganne dirigera l'orchestre de la grande salle de bal et prépare un répertoire entièrement nouveau. Le samedi 20 janvier, une fanfare comique et de nombreuses attractions musicales sont prévues.",
      "Le comité de l'Association des artistes a désigné M. Constant Coquelin comme successeur éventuel de M. Eugène Bertrand à la présidence. Le choix sera ratifié lors de l'assemblée générale du 27 janvier.",
      "M. Jules Claretie compte mettre en répétition deux nouvelles pièces : « Les Deux passés » de Gustave Guiches et « L'Énigme » de Paul Hervieu, interprétées par Mme Bartet et M. Le Bargy.",
      "Le théâtre des Bouffes-Parisiens reprendra mardi « François les Bas-Bleus » de Bernicat et Messager."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Concerts",
    "title": "Concerts de Monte-Carlo",
    "summary": "Compte-rendu du 3e concert international de Monte-Carlo, mettant à l'honneur les compositeurs de l'école italienne moderne.",
    "paragraphs": [
      "Le 3e concert international, dirigé par M. Arthur Vigna et consacré à l'école italienne moderne, comprenait quatre premières auditions : la « Symphonie de la Forêt » de M. Orefice, un poème de Mascagni, « A Giacomo Leopardi », ainsi qu'une pièce de Sinigaglia.",
      "Le violoniste Albert Geloso a été très applaudi dans la romance en fa de Beethoven."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Divertissements",
    "title": "Concerts et divertissements parisiens",
    "summary": "Succès scéniques et numéros de cirque à l'affiche des spectacles parisiens de l'Eldorado et du cirque Medrano.",
    "paragraphs": [
      "À l'Eldorado, la pièce de M. Gardel-Hervé, « La belle Hélène », obtient chaque soir un véritable triomphe avec Dranem, Clovis, Dona et Mlles Gaudet, Stelly, Mistinguett.",
      "Le cirque Medrano complète son programme avec des numéros sensationnels : Gaberel le maître écuyer, les Météor, les Chiesa et les chiens lilliputiens de Cabaret."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Sports",
    "title": "Actualités sportives : Piste de Vincennes et T.C.F.",
    "summary": "La construction de la nouvelle piste cycliste de 500 mètres à Vincennes progresse activement en vue de l'Exposition. Par ailleurs, le Touring-Club de France accorde un délai supplémentaire pour les cotisations.",
    "paragraphs": [
      "La piste municipale de 500 mètres de Vincennes, destinée à accueillir les épreuves cyclistes lors de l'Exposition universelle, est actuellement en cours de construction. L'achèvement des travaux est prévu pour le mois de mai prochain.",
      "Le Touring-Club de France informe ses sociétaires que, par mesure de bienveillance, le délai limite pour l'envoi direct de la cotisation annuelle est exceptionnellement reporté au 31 janvier."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Faits Divers",
    "title": "Gain de boxeur",
    "summary": "Le célèbre pugiliste américain John Lawrence Sullivan, après avoir amassé une fortune colossale de plus de quatre millions de francs en dix-sept ans, est désormais contraint de tenir un café à New York.",
    "paragraphs": [
      "Le journal Le Vélo rapporte la situation précaire de John Lawrence Sullivan, l'un des boxeurs américains les plus renommés. Ayant encaissé, au cours d'une carrière de dix-sept ans, la somme totale de quatre millions six cent cinquante-sept mille francs, l'athlète a vu sa fortune s'évanouir.",
      "Dépouillé de ses gains, il se retrouve aujourd'hui dans l'obligation de tenir un café à New York afin d'assurer sa subsistance quotidienne."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Feuilleton",
    "title": "Les Tragédies de l'Amour",
    "summary": "Horace, doutant des sentiments de Colette, tente de percer le mystère de sa mélancolie lors d'une rencontre fortuite dans les ruines, sans soupçonner qu'il est lui-même l'objet de son affection.",
    "paragraphs": [
      "Horace n'était nullement persuadé que Colette partageât son amour. L'idée même que l'homme qu'elle chérissait pût être lui-même ne l'effleurait point. Chaque fois qu'il avait tenté de lire au plus profond de son âme, n'avait-elle pas su répondre de manière à le décourager ?",
      "Horace rongeait son frein. Un soir, il surprit Colette au milieu des ruines, où elle aimait se retirer pour goûter à la solitude. À son approche, elle manifesta une vive émotion. Il l'interrogea alors avec insistance sur les causes de sa tristesse, cherchant, en dépit des promesses passées, à percer enfin le secret de son cœur."
    ]
  }
];
