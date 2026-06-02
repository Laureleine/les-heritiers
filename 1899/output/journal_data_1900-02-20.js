// Date: 1900-02-20
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-02-20 (Version Restaurée, 26 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Économie et Social",
    "title": "Sociétés de Production",
    "summary": "En pleine expansion, les associations ouvrières de production se multiplient en France, particulièrement dans le secteur du bâtiment, portées par l'idéal coopératif et des gains salariaux supérieurs au salariat classique.",
    "paragraphs": [
      "Les associations ouvrières de production fixent actuellement l'attention de tous. Travailleurs et capitalistes, économistes et politiciens s'y intéressent. Grâce aux sympathies qu'elles se sont acquises, une fort vive impulsion est aujourd'hui donnée à leurs travaux.",
      "Y a-t-il, dans ce mouvement, le signal d'une émancipation toute pacifique des masses travailleuses ? Il n'en est pas moins certain qu'un progrès s'est affirmé dans la situation d'une élite de travailleurs et que l'idée de la production par la coopération séduit un grand nombre d'ouvriers.",
      "Un document de l'Office du travail fixe à 246 le nombre des associations ouvrières de production en France. Elles étaient 214 en 1897 et 172 en 1896. La progression est constante.",
      "Dans le département de la Seine seulement, on ne trouve pas moins de 125 associations ouvrières de production employant 7 000 auxiliaires.",
      "Ce sont les corporations se rattachant aux diverses industries du bâtiment qui se montrent les plus empressées à recourir à ce système. On compte des coopératives de maçons, de menuisiers, de charpentiers, de peintres et de serruriers.",
      "L'idée se propage. On raconte que dans telle industrie, les sociétaires reçoivent des salaires supérieurs de 20 ou 30 % à ceux de leurs camarades engagés par des patrons.",
      "La Chambre consultative des associations ouvrières de production, fondée en 1884, stimule les initiatives. Elle créa la Banque coopérative des associations ouvrières de production.",
      "Il est à remarquer que si un certain nombre d'associations prospèrent, d'autres disparaissent après une existence éphémère. La cause tient souvent à un capital initial insuffisant.",
      "L'histoire de l'Association des ouvriers en limes, née en 1848, édifie sur les épreuves que ces sociétés ont dû soutenir, notamment sous le régime impérial.",
      "Il faut que le capital travaille et que le travail possède, disait le président du Conseil. L'évolution sociale qui s'annonce ne peut qu'apporter d'excellents résultats."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Mariage Secret",
    "summary": "Manuelle et Rolande sont observées à leur insu par deux individus aux intentions troubles, discutant avec convoitise de l'héritage récemment échu à la jeune femme après le décès du comte d'Aspremont.",
    "paragraphs": [
      "Or, ce matin-là, en descendant de leur petit appartement, Manuelle et Rolande ne prirent pas garde à deux hommes arrêtés en face de leur porte.",
      "Les deux individus, qui paraissaient avoir dépassé la quarantaine, étaient dissemblables. L'un, au visage bronzé et à l'allure d'ancien militaire, l'autre d'allure moins correcte, avec des façons d'élégance débraillée.",
      "Leur conversation portait sur la jeune fille, Rolande, et sur une mystérieuse fortune à laquelle ils espéraient accéder.",
      "Victorin et son compagnon discutèrent des opportunités à saisir suite au décès du comte d'Aspremont, faisant de Rolande son héritière."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Le Président de la République",
    "summary": "À l'occasion de l'anniversaire de son accession à la magistrature suprême, le Président de la République réitère son engagement en faveur de l'apaisement national et de l'union durable des républicains.",
    "paragraphs": [
      "On a vu hier les manifestations dont le Président de la République a été l'objet à l'occasion de l'anniversaire de sa nomination.",
      "Il est intéressant de rappeler le passage de son message au Parlement : l'Assemblée nationale a marqué son désir de réaliser l'apaisement des esprits et de rétablir l'union de tous les républicains.",
      "Cet appel à l'union a été entendu. L'apaisement s'est fait dans les esprits et le Président va ouvrir les grandes assises du travail et de la paix."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Armée",
    "title": "Les manœuvres de garnison",
    "summary": "Le général de Galliffet réforme l'instruction militaire en étendant les manœuvres à la période hivernale, visant à accroître l'efficacité des troupes par une préparation prolongée et des crédits ajustés.",
    "paragraphs": [
      "Ces manœuvres, qui n'étaient exécutées que pendant la belle saison, auront lieu désormais à toute époque de l'année. Le général de Galliffet attache une grande importance à ce que cette instruction se poursuive en hiver.",
      "Jusqu'à présent, les comptes rendus étaient centralisés pour le 1er décembre. À l'avenir, ils seront transmis le 1er janvier. Des crédits budgétaires seront autorisés pour permettre ces exercices hivernaux."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "Les cochers de fiacre",
    "summary": "En vue de l'Exposition universelle, une délégation de députés sollicite auprès du Président du Conseil des mesures pour améliorer le service public des fiacres parisiens.",
    "paragraphs": [
      "M. Waldeck-Rousseau a reçu une délégation de députés de Paris concernant les revendications des cochers de fiacre. Ils ont réclamé des mesures pour assurer le bon fonctionnement du service durant l'Exposition universelle.",
      "Le Président du Conseil a paru disposé à examiner les mesures à prendre dans l'intérêt commun du public et des cochers."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une victime du devoir",
    "summary": "Le gardien de la paix Jean-Baptiste Maurs, grièvement blessé dans l'exercice de ses fonctions dimanche dernier, a succombé à ses blessures hier matin à l'hôpital Cochin, laissant derrière lui une veuve et deux orphelins.",
    "paragraphs": [
      "Jean-Baptiste Maurs, gardien de la paix blessé dimanche soir dernier, est décédé hier matin à l'hôpital Cochin. Il était âgé de quarante et un ans, marié et père de deux enfants.",
      "Ses obsèques seront célébrées jeudi en l'église Saint-Jacques-du-Haut-Pas. L'instruction de cette douloureuse affaire a été confiée à M. le juge Louiche."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'arrestation d'un magistrat",
    "summary": "M. Multier, juge au tribunal civil de Lille, a été écroué sous l'inculpation d'enlèvement de son beau-fils et de faux en écritures. Son épouse, un temps incarcérée à Saint-Lazare, a recouvré la liberté.",
    "paragraphs": [
      "M. Multier, juge au tribunal civil de Lille, a été arrêté. Il est accusé d'avoir enlevé son beau-fils, Henri Hertel, et d'avoir détourné sa fortune au moyen de faux.",
      "Le juge d'instruction a rendu une ordonnance de mise en liberté en faveur de Mme Multier, qui a pu quitter la prison de Saint-Lazare."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Corrida sur la voie ferrée",
    "summary": "Un bœuf égaré sur les voies entre Maisons-Alfort et Alfortville a provoqué d'importants retards sur la ligne du P.-L.-M. L'animal a dû être abattu par les forces de l'ordre pour rétablir le trafic.",
    "paragraphs": [
      "Un bœuf s'est échappé sur la voie ferrée entre Maisons-Alfort et Alfortville, provoquant des retards considérables sur la ligne P.-L.-M. et contraignant les convois à ralentir leur marche.",
      "La gendarmerie et des employés de la compagnie sont intervenus sur les lieux. L'animal a été abattu par une salve de tirs et un coup de revolver, mettant ainsi fin à l'incident."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "La tempête",
    "summary": "Une violente tempête a frappé la France, causant des dégâts matériels considérables et un drame humain à Mantes, où un domestique de dix-huit ans a péri enseveli lors d'un éboulement.",
    "paragraphs": [
      "Une violente tempête a causé des dégâts importants à Paris ainsi que dans plusieurs départements. À Mantes, un éboulement a coûté la vie à un jeune domestique de dix-huit ans.",
      "Les nouvelles en provenance de Cherbourg, Brest, Angers et Nantes font état d'inondations, de toitures arrachées par les vents et de navires en péril."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Tamponnement sur la ligne du Nord",
    "summary": "Un accident ferroviaire est survenu sur la ligne de Moulineaux-Champ-de-Mars lorsqu'un train de voyageurs a heurté des wagons de marchandises. Quatre agents sont sérieusement contusionnés.",
    "paragraphs": [
      "Un accident s'est produit hier matin sur la ligne de Moulineaux-Champ-de-Mars. Un train de voyageurs a heurté une rame de marchandises qui obstruait la voie.",
      "Quatre agents du convoi ont été sérieusement contusionnés. Une enquête a été ouverte afin de déterminer les raisons pour lesquelles ces wagons se trouvaient sur une voie de circulation principale."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Guerre",
    "title": "La guerre au Transvaal",
    "summary": "Londres annonce une reprise offensive sur tous les points. Le général Buller contraint les Boërs à repasser la rivière Tugela, bien que la stratégie des burghers réserve encore des imprévus.",
    "paragraphs": [
      "D'après les dépêches reçues à Londres, la situation actuelle apparaît favorable aux armes britanniques. L'offensive a été reprise sur tous les points.",
      "Le général Buller aurait obligé les Boërs à repasser la Tugela, bien que la tactique des burghers puisse encore réserver des surprises."
    ]
  },
  {
    "id": 12,
    "page": 3,
    "category": "Culture",
    "title": "Compte-rendu théâtral : La Belle au Bois dormant",
    "summary": "Critique de la partition de Charles Lecocq pour La Belle au Bois dormant. Si l'œuvre séduit par sa légèreté, l'interprétation vocale, notamment celle de Mme de Hally, manque de la verve propre aux étoiles.",
    "paragraphs": [
      "Sur ce livret aimable, M. Charles Lecocq a écrit une partition qui ne vaut pas, sans doute, La Fille de madame Angot ni Le Petit Duc, mais dont les qualités faciles méritent encore d'être remarquées.",
      "Le rôle de la Belle a été joué par Mme de Hally, qui n'a peut-être pas l'étoffe d'une étoile d'opérette. Mme Tarjei-Manie, en fée des Primevères, est brillante ; Olivier bouffonne ; son rôle est agréablement tenu par Mme Laporte, MM. Reguard, Maurice Lamy et Brunais."
    ]
  },
  {
    "id": 13,
    "page": 3,
    "category": "Politique Étrangère",
    "title": "Au Parlement anglais",
    "summary": "La Chambre des communes a voté, par 166 voix contre 37, la constitution d'une armée permanente de 188 000 hommes, malgré la vive opposition irlandaise. Un crédit de 13 millions de livres est en cours d'examen.",
    "paragraphs": [
      "Londres, 19 février. La Chambre des communes a adopté, par 166 voix contre 37, le projet de création d'une armée permanente régulière de 188 000 hommes.",
      "Les députés irlandais ont voté contre cette mesure.",
      "La Chambre discute actuellement le crédit de 13 millions de livres sterling alloué à cet effet."
    ]
  },
  {
    "id": 14,
    "page": 3,
    "category": "Guerre au Transvaal",
    "title": "La situation sur le front",
    "summary": "Succès britannique à Chieveley : le général Buller a percé les lignes boërs. Parallèlement, Lord Roberts suspend sa marche au nord de la Modder, entravé par les intempéries et l'épuisement des troupes.",
    "paragraphs": [
      "Camp de Chieveley, 19 février. Le général Buller a remporté aujourd'hui un grand succès ; il a rompu les lignes de fortification des Boërs.",
      "Berlin, 19 février. Lord Roberts a été contraint d'interrompre sa marche en avant au nord de la Modder. Cette décision est dictée par la prudence face aux mouvements de l'ennemi, ainsi que par les pluies qui ont rendu les chemins impraticables pour l'artillerie, épuisant les hommes et les chevaux."
    ]
  },
  {
    "id": 15,
    "page": 3,
    "category": "Tribunaux",
    "title": "Les Assomptionnistes en appel",
    "summary": "Le procès en appel des assomptionnistes, condamnés pour la dissolution de leur congrégation, est reporté d'une semaine à cause de la maladie de Me Picard.",
    "paragraphs": [
      "On sait que les assomptionnistes ont interjeté appel du jugement du tribunal correctionnel de la Seine, qui les a condamnés chacun à 16 francs d'amende et a prononcé la dissolution de la congrégation.",
      "Ce nouveau procès devait se tenir hier devant la Cour, mais, en raison de la maladie de Me Picard, l'affaire a été renvoyée à huitaine."
    ]
  },
  {
    "id": 16,
    "page": 3,
    "category": "Social",
    "title": "Bulletin du travail",
    "summary": "Réunis en assemblée dimanche soir, les mineurs grévistes ont voté la poursuite de leur mouvement. La séance s'est clôturée par l'organisation de patrouilles et le chant de l'Internationale.",
    "paragraphs": [
      "Dans une réunion des mineurs grévistes, tenue dimanche soir, lecture a été donnée d'une délégation. La réunion s'est terminée par le vote de la continuation de la grève et de l'organisation de patrouilles.",
      "La sortie s'est effectuée au chant de l'Internationale."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'empoisonneuse de la rue Vercingétorix",
    "summary": "Le juge d'instruction, saisi du dossier de la dame Marchand, a découvert qu'elle s'était renseignée sur les poisons auprès d'une voisine, laquelle sera désormais poursuivie pour complicité d'avortement.",
    "paragraphs": [
      "M. de Vallès, juge d'instruction, a reçu le rapport de l'expert chimiste qui éclaire le dossier de la dame Marchand, la bourgeoise qui a tenté d'empoisonner son mari dans les circonstances que nous avons relatées.",
      "La dame Marchand s'était renseignée auprès de différentes personnes sur la nature des poisons. Une voisine lui aurait dit : « Moi, je me suis servie de la cocaïne pour me faire avorter, et j'ai réussi ». Le magistrat instructeur a demandé à la dame Marchand le nom et l'adresse de la voisine qui sera poursuivie pour avortement."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un agent d'affaires pour escroquerie",
    "summary": "M. Martin, commissaire aux délégations, a arrêté un agent d'affaires soupçonné d'avoir extorqué près de cent mille francs à une baronne du boulevard Haussmann via des prêts hypothécaires abusifs.",
    "paragraphs": [
      "Sur mandat du juge d'instruction, M. Martin, commissaire aux délégations, s'est rendu dans les bureaux du sieur Ch., agent d'affaires, et a procédé à son arrestation.",
      "Cet individu avait su capter la confiance de Mme la baronne H., qui demeure boulevard Haussmann, et, au moyen de prêts hypothécaires onéreux, était parvenu à lui extorquer une centaine de mille francs. Ch. a été écroué au dépôt."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Faits Divers",
    "title": "Audacieux banditisme à l'Hôtel de l'Odéon",
    "summary": "Un vieillard de soixante ans a détourné 40 000 francs lors de la vente de son établissement. Il a pris la fuite sous la menace d'un poignard, laissant les autorités penser à une cavale vers Londres.",
    "paragraphs": [
      "Un vieillard de soixante ans, nommé André French, avait consenti à vendre son établissement. Lors de la signature des actes, il a détourné 40 000 francs qu'il venait de retirer du Crédit Lyonnais, ainsi que l'argent de la vente.",
      "Alors que les acheteurs examinaient les actes, il a saisi l'argent et les papiers. Lorsqu'ils l'ont sommé de signer la cession, il a brandi un poignard, s'est enfui et a disparu. La police pense qu'il s'est réfugié à Londres."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Faits Divers",
    "title": "Désespoir d'amour",
    "summary": "Mlle Helena Rounis, jeune artiste lyrique de dix-huit ans, a tenté de mettre fin à ses jours par absorption de laudanum après une déception sentimentale rue de Rivoli. Ses jours ne sont plus en danger.",
    "paragraphs": [
      "Une jeune artiste lyrique, Mlle Helena Rounis, âgée de dix-huit ans, a tenté de se suicider en absorbant du laudanum après avoir surpris son amant au bras d'une autre femme rue de Rivoli. Ses parents l'ont trouvée inanimée et un médecin a pu lui administrer un antidote."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Accidents du travail",
    "summary": "Deux tragiques accidents du travail ont endeuillé la capitale hier : un ouvrier nommé Rollier, écrasé par la chute d'une grue au Champ-de-Mars, et un charretier, Joseph Adam, mort sous les roues de son haquet à Bercy.",
    "paragraphs": [
      "Hier après-midi, un ouvrier nommé Rollier, âgé de trente-six ans, qui travaillait au Champ-de-Mars, a été écrasé par la chute d'une grue.",
      "Presque à la même heure, un charretier, Joseph Adam, âgé de quarante-huit ans, est tombé sous les roues du haquet qu'il conduisait aux entrepôts de Bercy et a été tué sur le coup."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicides à Argenteuil et Bezons",
    "summary": "La série noire continue en banlieue : un jeune homme a disparu dans la Seine au pont d'Argenteuil, tandis qu'à Bezons, une enfant de huit ans, Andrée Gavet, a mis fin à ses jours après une réprimande paternelle.",
    "paragraphs": [
      "Un jeune homme s'est jeté dans la Seine depuis le pont d'Argenteuil. Les recherches entreprises pour retrouver son corps sont restées vaines.",
      "À Bezons, une fillette de huit ans, prénommée Andrée Gavet, s'est suicidée en se jetant dans la Seine après avoir reçu une vive remontrance de son père."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Sport",
    "title": "Vitesses automobiles",
    "summary": "Compte-rendu de la course automobile du Catalogue : Mercier, De la Roère et Girardot ont réalisé des performances remarquables, ce dernier atteignant une pointe de vitesse dépassant les 50 km/h.",
    "paragraphs": [
      "Résultats de la course du Catalogue : Mercier a couvert les 70 kilomètres en 2h34m (27 km/h), De la Roère a parcouru 144 kilomètres en 4h31m (34 km/h), et Girardot a battu le record avec une allure dépassant les 50 kilomètres à l'heure."
    ]
  },
  {
    "id": 24,
    "page": 4,
    "category": "Feuilleton",
    "title": "DEUX PASSIONS - UN DRAME DU MARIAGE",
    "summary": "Le mystère s'épaissit autour de Dufresne. Jean de Vrigny et ses alliés tentent de percer les secrets du domestique Crépinet pour comprendre les agissements troubles du maître de la Coudraie suite à la mort de son épouse.",
    "paragraphs": [
      "Le vicomte déclara froidement : « Je ne crois rien. Ce sont des suppositions, comme tu dis. Si ces mauvaises idées me sont venues, elles ont pu venir à ce Dufresne, et enfin, si elles étaient nées par hasard dans son esprit, son plan a été immédiatement appliqué. »",
      "« Tu comprends, continua l'ancien lieutenant, cette barque très solide, bien construite, que tout le monde connaît et qui chavire sous un petit coup de vent dont personne ne s'est aperçu, au moment où on y pense le moins, ça donne à réfléchir. J'aime mes amis, moi ; j'aime Jacques et je l'ai prouvé. J'aime aussi, je n'ai rien à cacher en tout bien tout honneur, mademoiselle Suzanne. »",
      "On ne pouvait pas s'empêcher de remarquer les petits soins de M. le marquis pour cette femme qui était si belle, si aimable, si bonne pour tous et mère d'une si ravissante petite fille. Et puis, il y a eu aussi le chagrin de M. le marquis lorsqu'elle est morte ! Il ne s'en est jamais consolé.",
      "La porte s'ouvrit et sa femme montra son minois chiffonné. « Ferme ça », ordonna Bousquet. Louis obéit et ferma la porte. « Vous pouvez rester », lui dit amicalement Jean de Vrigny. « Je ne suis pas de trop ? » « Au contraire. Vous allez peut-être nous donner un bon conseil. »",
      "« Voilà. Crépinet, le domestique de ce Dufresne, vient quelquefois ici. C'est un drôle qui en sait long. Ne pourrait-on pas le faire parler ? » La blonde déclara en consultant son mari du regard : « Il me semble que je m'en chargerais bien. Pensez-vous que son maître lui ait fait des confidences ? » Elle secoua la tête.",
      "Jean de Vrigny réfléchit et dit : « Eh bien ! voulez-vous essayer, Louise ? C'est un grand service que vous nous rendrez. Nous sommes tous très inquiets. Le présent n'est pas clair et l'avenir nous effraie pour cette pauvre mademoiselle Suzanne. »",
      "Il se leva et tendit la main à l'aubergiste. « Si on peut, monsieur Jean, on va voir mais si on ne réussit pas de ce côté, il vous restera un autre moyen. Attendez à demain et je vous le dirai. D'ici là, j'aurai sondé le terrain. »",
      "Au même instant, un retardataire entra en disant : « Comment, plus personne ? » C'était Crépinet. La patronne, en toute autre circonstance, l'aurait engagé à reprendre le chemin de la Hiboutière, mais elle l'accueillit avec complaisance en disant : « Tenez, entrez là, vous serez mieux. »",
      "« Qu'est-ce que vous voulez prendre, Crépinet ? D'ordinaire vous n'arrivez pas si tard. » « Du café, s'il en reste. » Elle cria : « Nicole, une tasse de café pour M. Crépinet. Chaud ! » Elle se laissa tomber sur une chaise en gémissant : « Il n'est pas trop tôt que la journée finisse. »",
      "Le bossu s'installait commodément à la place que Jean de Vrigny venait de quitter. « Un dur métier que le nôtre », reprit-elle. « Quand je pense que je suis sur pied depuis six heures du matin ! Et votre maître, qu'est-ce que vous en faites ? Il est triste de le voir... qu'est-ce qui s'est passé, hein ? »",
      "« Bien sûr, une si jolie petite. Il est à l'Orfrasière ? » « Parti depuis une heure. » « Pour quel endroit ? » « Il ne me l'a pas dit. Depuis quelques jours, il roule des yeux farouches et ne desserre pas les dents, mais je le crois en route pour Paris. » « Par quel chemin ? » « Je n'en sais rien. Avec sa bicyclette, dix lieues ne le gênent pas. Ce que je sais, c'est qu'il ne s'est mis en route qu'à la nuit. »",
      "« Vous savez bien que je ne peux pas rester un jour sans vous faire ma petite visite. Est-il rentré chez lui ? » dit-elle. « Oui. » « À la Coudraie ? » « Il y est allé. » « Sans sa femme ? » « Justement, sans sa femme. Elle ne restera pas toujours chez le docteur. » « Faut croire », opina le bancal."
    ]
  },
  {
    "id": 25,
    "page": 4,
    "category": "Justice",
    "title": "EXTRAIT DES MINUTES DU GREFFE DE LA COUR D'APPEL DE PARIS",
    "summary": "La Cour d'appel de Paris a rejeté les oppositions de la dame Laparra, condamnée pour tromperie sur la marchandise, confirmant ainsi les décisions judiciaires précédentes.",
    "paragraphs": [
      "Sur les oppositions formées par la nommée femme Laparra, née Marie-Hortense Pestre, demeurant à Paris, avenue de Saint-Ouen, 117, et Weyant, Frédéric, agent, à Paris, rue Ernestine, à l'encontre d'un jugement rendu par le tribunal de police le 3 juin 1897, qui a condamné la femme Laparra pour avoir tenté de tromper l'acheteur sur la quantité de la marchandise vendue.",
      "La Cour a débouté les opposants, ordonné l'affichage du jugement dans les lieux habituels et l'insertion des motifs dans le journal. Le pourvoi en cassation formé par la femme Laparra a été rejeté le 25 novembre 1898."
    ]
  },
  {
    "id": 26,
    "page": 4,
    "category": "Littérature",
    "title": "L'AGRICULTURE NOUVELLE",
    "summary": "Parution de l'ouvrage « L'Agriculture nouvelle », un guide pratique illustré de 150 pages, précieux pour l'enseignement agricole à l'école primaire et offrant des conseils utiles à tous.",
    "paragraphs": [
      "Vient de paraître : L'Agriculture nouvelle, 150 pages de texte et de gravures. Nous signalerons d'une façon toute particulière les articles intéressants publiés sous le titre de : « L'enseignement de l'agriculture à l'école primaire ». C'est non seulement un guide sûr pour les instituteurs, mais il constitue pour tous un conseil constant et éminemment pratique."
    ]
  }
];
