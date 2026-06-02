// Date: 1900-01-19
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-01-19 (Version Restaurée, 33 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Publicité",
    "title": "Mariage Secret : Roman inédit par Paul Bernay",
    "summary": "Le Petit Parisien annonce la parution prochaine de « Mariage Secret », un roman dramatique et passionné de Paul Bernay, retraçant les infortunes poignantes de deux femmes au sein du milieu parisien.",
    "paragraphs": [
      "Le Petit Parisien publiera prochainement le roman inédit intitulé Mariage Secret, par Paul Bernay.",
      "Mariage Secret est un roman dramatique et passionné qui se déroule au milieu d'émouvantes péripéties. C'est l'histoire de deux femmes, la mère et la fille, jetées à la suite d'une aventure romanesque dans le milieu parisien, et dont les infortunes imméritées provoqueront, chez nos lectrices, de poignantes émotions.",
      "Nos lecteurs retrouveront dans Mariage Secret les qualités qui distinguent l'auteur d'Orphelins d'Alsace, Celle qu'on aime, Sacrifice d'amour, etc."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Économie",
    "title": "La fin de la houille",
    "summary": "Face à la crise charbonnière en Angleterre due à la guerre du Transvaal, des experts rassurent sur l'avenir énergétique et le potentiel des forces naturelles, comme l'électricité, pour pallier l'épuisement des mines.",
    "paragraphs": [
      "De la guerre qu'elle est allée provoquer au Transvaal, l'Angleterre commence à subir toutes les graves conséquences, morales et matérielles, sur son sol même. L'une des plus importantes est celle qui résulte de l'envoi de nombreux transports en Afrique.",
      "On a dû, pour la flotte militaire, les arsenaux, les chemins de fer et les établissements métallurgiques, augmenter dans des proportions énormes la consommation de la houille. Aussi le bruit a-t-il couru que, bientôt, si cet état de choses durait, il y aurait disette de combustible en Angleterre.",
      "Mais les savants interviennent pour faire cesser les inquiétudes. Dans un rapport, MM. Keller et Lorieux soulignaient l'importance vitale du charbon : « On a dit que ce siècle pourrait être appelé le siècle de l'or et de l'argent ; pour nous, c'est le siècle de la houille. »",
      "La France, pour sa part, est grande consommatrice de houille. Si la France a recours à l'étranger, ses centres miniers ont pris d'admirables développements. Le chiffre de la production française a dépassé les 29 millions de tonnes.",
      "Concernant l'avenir, les gisements d'Extrême-Orient, notamment en Chine, reculent la terrible éventualité de l'épuisement. Et, avant que le charbon ait cessé d'activer nos usines, le génie de l'homme trouvera sans doute, dans les forces naturelles domptées comme l'électricité ou les chutes d'eau, de quoi remplacer le charbon."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Feuilleton",
    "title": "Deux Passions - Un drame du mariage",
    "summary": "Une étude psychologique des tourments amoureux de Georges Dufresne face à Valentine, scrutée par la vigilance de son compagnon Paul Tavernier dans un climat de tension dramatique.",
    "paragraphs": [
      "Georges Dufresne et Paul Tavernier discutent de Valentine. Dufresne semble tourmenté par une rupture et par ses sentiments pour cette femme, tandis que Tavernier, observateur, cherche à percer les intentions réelles de son compagnon.",
      "Dufresne s'isole pour écrire une lettre passionnée à Valentine, regrettant ses erreurs passées et implorant une réponse, alors que Tavernier guette les signes de la déchéance ou du désastre de son hôte."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Officiel",
    "title": "La Légion d'honneur - Grande Chancellerie",
    "summary": "La Grande Chancellerie de la Légion d'honneur communique la liste officielle des nouvelles promotions au grade d'officier et des nominations au rang de chevalier.",
    "paragraphs": [
      "Sont promus Officiers : MM. Arnaud, capitaine d'infanterie en retraite ; de Grouchy, ministre plénipotentiaire honoraire ; Heurtault, lieutenant de vaisseau en retraite, directeur de l'observatoire des marées de Saint-Servan.",
      "Sont nommés Chevaliers : MM. Boudouneau, Carré de Lusancy, Bonneau, Galle, Campunaud, Goison, Golineau, Pégurié, Porcin, Ruet et Thouroude."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Chronique Politique",
    "title": "L'équilibre du Budget",
    "summary": "M. Caillaux, ministre des Finances, s'efforce de maintenir l'équilibre budgétaire sans recourir à l'emprunt, provoquant la démission de M. Maurice Faure sur le dossier de l'Instruction publique.",
    "paragraphs": [
      "M. Caillaux, ministre des Finances, s'est rendu devant la commission du budget pour discuter des moyens de rétablir l'équilibre financier en raison de décisions prises par la Chambre.",
      "Le ministre a déclaré qu'il ne serait fait aucun appel à l'emprunt pour les dépenses militaires navales. La commission a décidé de revenir sur ses votes précédents pour assurer l'équilibre tout en maintenant le principe de l'amélioration du traitement des instituteurs.",
      "À la suite de ce vote, M. Maurice Faure a donné sa démission de rapporteur du budget de l'Instruction publique."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique",
    "title": "Le stage scolaire",
    "summary": "La commission de l'enseignement a repoussé le projet gouvernemental de stage scolaire, malgré les protestations de plusieurs députés absents qui se déclarent favorables à cette mesure.",
    "paragraphs": [
      "La commission de l'enseignement a repoussé le projet du gouvernement relatif au stage scolaire. Cependant, plusieurs membres absents ont adressé une protestation, affirmant qu'ils auraient voté en faveur du projet s'ils avaient été présents lors du scrutin."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Commerce",
    "title": "Le Conseil supérieur du commerce",
    "summary": "Sous la présidence de M. Millerand, le Conseil supérieur du commerce examine des réformes pour l'industrie de la soie lyonnaise et l'organisation des voies navigables.",
    "paragraphs": [
      "Le Conseil supérieur du commerce et de l'industrie s'est réuni sous la présidence de M. Millerand. Le ministre a souligné l'utilité des conseils composés de spécialistes éminents pour guider l'action du gouvernement.",
      "Le ministre a exposé les questions actuellement à l'étude : remaniement des taxes sur les soies, création d'ateliers de famille électriques à Lyon, et organisation optimisée des voies ferrées et navigables."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Interpellations sur les grèves",
    "summary": "La Chambre soutient l'action du gouvernement face aux grèves, affirmant le respect des libertés tout en louant le rôle des syndicats dans la pacification des relations sociales.",
    "paragraphs": [
      "La majorité de la Chambre a approuvé l'attitude du gouvernement concernant les récentes grèves. L'exécutif a maintenu l'ordre public tout en respectant scrupuleusement le droit de grève ainsi que la liberté du travail.",
      "Le débat a mis en évidence que les relations entre le capital et le travail s'améliorent, grâce à l'action des syndicats qui disciplinent désormais les mouvements sociaux par la discussion pacifique."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits Divers",
    "title": "Une concierge étranglée à Levallois-Perret",
    "summary": "Mme veuve Éléonore Balluet, concierge à Levallois-Perret, a été sauvagement agressée et étranglée par deux malfaiteurs dans sa loge rue Chevallier. Une enquête est ouverte.",
    "paragraphs": [
      "Un vol audacieux, précédé d'une tentative de meurtre, a eu lieu rue Chevallier, à Levallois-Perret. Mme veuve Éléonore Balluet, concierge, a été sauvagement agressée par deux individus dans sa loge.",
      "Après l'avoir étranglée et frappée à l'aide d'un instrument, les malfaiteurs ont dérobé une somme importante. L'état de la victime est jugé très préoccupant et une enquête active est en cours."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Faits Divers",
    "title": "Terribles effets du mistral à Marseille",
    "summary": "Le mistral provoque un drame à Marseille : une voiture de place est précipitée dans le canal, causant la mort de Mme de Martrein. La circulation des véhicules sur les quais est désormais interdite.",
    "paragraphs": [
      "Un accident mortel s'est produit à Marseille en raison de la violence extrême du mistral. Une voiture de place a été précipitée dans le canal, causant la mort de Mme de Martrein et de son cheval.",
      "Plusieurs autres personnes ont été blessées par des chutes d'objets ou projetées au sol par la force du vent. En conséquence, le maire de Marseille a formellement interdit la circulation des voitures sur les quais."
    ]
  },
  {
    "id": 11,
    "page": 1,
    "category": "Étranger",
    "title": "La guerre au Transvaal : Passage de la Tugela",
    "summary": "Le War Office confirme que les troupes britanniques des généraux Buller et Warren ont réussi à franchir la Tugela, intensifiant les efforts pour secourir la garnison de Ladysmith malgré la résistance boër.",
    "paragraphs": [
      "Le War Office a communiqué des dépêches sur la marche des troupes anglaises. Le général Buller et le général Warren ont réussi à franchir la rivière Tugela en plusieurs points.",
      "Les forces britanniques occupent des positions sur la rive nord, malgré la résistance des Boërs qui se retranchent activement. L'opération constitue l'effort le plus sérieux tenté jusqu'ici pour secourir Ladysmith."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Opérations sur la Tugela",
    "summary": "Récit de la progression britannique sur la Tugela : après l'occupation stratégique des ponts de Springfield et de Zwartkop par lord Dundonald, la colonne Warren a franchi la rivière le 11 janvier.",
    "paragraphs": [
      "Jeudi dernier, lord Dundonald, avec la brigade montée, s'avança et, par un mouvement très rapide, s'empara successivement des ponts de Springfield et de Zwartkop.",
      "La brigade du général Lyttelton fut envoyée pour garder la position de Zwartkop, laissant un fort détachement avec la brigade du général Hart.",
      "La colonne fit une halte de quatre jours sur la rive sud de la Tugela ; la marche sur le nord fut reprise le 11 janvier.",
      "La division Warren a attaqué le flanc gauche des Boërs ; la colonne franchit la rivière le 11 janvier, à 10 heures 50 du matin.",
      "Le génie lança un pont de bateau à travers le fleuve et la colonne anglaise tout entière traversa la Tugela."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Sur la rivière Modder",
    "summary": "Près de Modder-River, lord Methuen a mené une démonstration en forces ponctuée par un duel d'artillerie contre les retranchements boërs, sans déplorer de pertes britanniques.",
    "paragraphs": [
      "Camp de Modder-River, 18 janvier. Lord Methuen a fait, hier, une démonstration en forces, engageant toute une division, afin de reconnaître les forces et la situation de l'ennemi.",
      "À quatre heures et demie du matin, notre artillerie a ouvert le feu sur les retranchements boërs. Le combat s'est, en grande partie, réduit à un duel d'artillerie.",
      "Il n'y a pas eu de pertes de notre côté. On ignore s'il y en a eu du côté boër."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Une patrouille anglaise enlevée",
    "summary": "Une patrouille de cavalerie composée de volontaires australiens et du Cap a été surprise par une embuscade boër près de Rensburg, subissant de lourdes pertes et de nombreuses captures.",
    "paragraphs": [
      "Rensburg, 17 janvier. Hier, une patrouille de cavalerie anglaise composée de dix-neuf hommes est tombée dans une embuscade boër. Cinq Anglais ont été tués, un a été blessé et deux se sont échappés. Les autres ont été faits prisonniers.",
      "La patrouille était composée d'hommes appartenant au contingent australien et de volontaires du Cap. Après un vif engagement, les cavaliers anglais, accablés par le nombre, ont été complètement entourés."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Le siège de Mafeking",
    "summary": "La situation demeure tendue à Mafeking, où les Boërs ont intensifié leurs bombardements sur les quartiers civils, provoquant la mort d'une enfant et plusieurs blessés.",
    "paragraphs": [
      "Mafeking, 13 janvier. La situation stratégique n'a pas changé. Les Boërs ont repris avec vigueur le bombardement et ont envoyé six obus dans le quartier des femmes, où une petite fille a été tuée et deux enfants blessés.",
      "Beïra, 10 janvier. Une dépêche de Mafeking dit que les Boërs bombardent la ville matin et soir. Nous ripostons vivement et nous faisons des dégâts considérables aux fortifications des Boërs."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Guerre des Boërs",
    "title": "Sur la frontière Nord",
    "summary": "Le colonel Plumer est arrivé à Mochudi avec ses troupes. Un détachement occupe les collines stratégiques de Crocodile Pools, où deux pièces d'artillerie sont manœuvrées sous la supervision d'officiers allemands.",
    "paragraphs": [
      "Mochudi (sud de Beïra), 11 janvier. Le colonel Plumer est arrivé ici avec une partie de ses forces venant de Tuli.",
      "Un petit corps de troupe est retranché dans les collines qui se trouvent près du chemin de fer de Crocodile Pools. Il dispose de deux canons dont deux officiers allemands surveillent le maniement."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles maritimes",
    "title": "Avancement mérité",
    "summary": "Par décret du 16 janvier, l'aspirant de 1ère classe Marteville est nommé enseigne de vaisseau, en récompense de son courage au fort de Monto après le meurtre des enseignes Koun et Bourlaouen.",
    "paragraphs": [
      "Un décret en date du 16 janvier a promu enseigne de vaisseau l'aspirant de 1ère classe Marteville.",
      "M. Marteville, âgé de vingt-quatre ans, a dû prendre le commandement du fort de Monto au moment de l'assassinat des enseignes Koun et Bourlaouen."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Les manœuvres russes",
    "summary": "L'Invalide russe annonce que l'empereur Nicolas II assistera, en août prochain, aux grandes manœuvres impériales qui se tiendront entre les villes de Koursk et d'Orel.",
    "paragraphs": [
      "De Saint-Pétersbourg : L'Invalide russe annonce que l'empereur Nicolas assistera aux grandes manœuvres du mois d'août prochain qui seront organisées entre Koursk et Orel."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Chronique politique",
    "title": "Séance de la Chambre du 18 janvier",
    "summary": "La Chambre a débattu des grèves dans le Doubs et à Saint-Étienne ainsi que de l'usage des fonds du pari mutuel. Le Président du Conseil et le ministre du Commerce ont défendu la politique du gouvernement.",
    "paragraphs": [
      "La Chambre a consacré sa séance à la discussion de plusieurs interpellations sur les grèves du Doubs, de Saint-Étienne et sur l'emploi des fonds du pari mutuel.",
      "M. Waldeck-Rousseau, président du Conseil, a exposé les devoirs d'un gouvernement républicain vis-à-vis des grèves.",
      "M. Millerand, ministre du Commerce, a expliqué son rôle dans les grèves de Saint-Étienne, démontrant la correction de son attitude."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Chronique politique",
    "title": "Les grèves du Doubs et de la Loire",
    "summary": "M. Dejeante et M. Victor Gay ont interpellé le gouvernement sur sa gestion des grèves locales, dénonçant la sévérité de la répression et le manque d'action de l'administration face aux conflits ouvriers.",
    "paragraphs": [
      "M. Dejeante a interpellé le gouvernement sur la répression sévère des grèves dans les départements du Doubs et du Haut-Rhin, dénonçant l'usage de la force contre les ouvriers.",
      "M. Victor Gay a également questionné le gouvernement sur son attitude lors des grèves de Saint-Étienne, pointant du doigt l'inertie administrative."
    ]
  },
  {
    "id": 21,
    "page": 2,
    "category": "Chronique politique",
    "title": "Affaire des fonds du pari mutuel",
    "summary": "M. Charles Bernard interpelle le ministre de l'Agriculture, M. Jean Dupuy, sur l'usage suspect des fonds du pari mutuel lors de sa campagne électorale. Le ministre nie toute irrégularité.",
    "paragraphs": [
      "M. Charles Bernard a interpellé le ministre de l'Agriculture, M. Jean Dupuy, l'accusant d'avoir détourné des fonds du pari mutuel, initialement destinés aux œuvres de bienfaisance, afin de favoriser sa propre élection au Sénat.",
      "M. Jean Dupuy a repoussé ces accusations avec une fermeté catégorique, affirmant s'être strictement conformé à la législation en vigueur lors de la répartition desdits fonds."
    ]
  },
  {
    "id": 22,
    "page": 2,
    "category": "Chronique électorale",
    "title": "Élections sénatoriales",
    "summary": "Les élections sénatoriales du 28 janvier marquent un tournant : pour la première fois depuis la création du Sénat, le renouvellement partiel concerne plus de 100 sièges.",
    "paragraphs": [
      "Il sera procédé, le dimanche 28 janvier, dans les départements composant la série C, au renouvellement des sièges des sénateurs. C'est la première fois, depuis l'instauration du Sénat, que le nombre de 100 sièges est dépassé lors d'un scrutin de renouvellement partiel."
    ]
  },
  {
    "id": 23,
    "page": 2,
    "category": "Faits divers",
    "title": "Drame parisien : le procès du vicomte d'Assailly",
    "summary": "La Cour d'assises de la Seine juge le vicomte d'Assailly, poursuivi pour avoir tenté d'assassiner sa maîtresse, Mlle Suzanne d'Arneville, à la suite de leur rupture brutale en juillet dernier.",
    "paragraphs": [
      "La Cour d'assises de la Seine a repris le procès du vicomte d'Assailly, accusé d'avoir tenté d'assassiner sa maîtresse, Mlle Suzanne d'Arneville, au cours du mois de juillet dernier.",
      "Le vicomte, acculé par la ruine, avait harcelé la jeune femme après leur rupture. Le 16 juillet, il fit usage d'un revolver contre elle avant de prendre la fuite, pour finalement se constituer prisonnier auprès des autorités."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Procès du vicomte d'Assailly",
    "summary": "Le vicomte d'Assailly a été acquitté par le jury des assises. Malgré la tentative d'assassinat sur Mlle d'Arneville, la plaidoirie de Me Henri Robert et le pardon de l'épouse légitime ont convaincu les jurés.",
    "paragraphs": [
      "Le vicomte d'Assailly a comparu devant les assises pour avoir fait feu sur sa maîtresse, Mlle Suzanne d'Arneville. Bien que grièvement blessée, cette dernière a survécu à son agression.",
      "L'expertise médicale a conclu à la pleine responsabilité pénale du vicomte, tout en soulignant un affaiblissement notable de son caractère. L'accusé, plaidant le crime passionnel, a exprimé de vifs regrets devant la Cour.",
      "La victime, Mlle d'Arneville, a témoigné à la barre, reconnaissant avoir été entretenue par le vicomte avant la rupture. Mme d'Assailly, épouse légitime de l'accusé, est également intervenue pour solliciter la clémence du jury.",
      "Après le réquisitoire du ministère public et la brillante plaidoirie de Me Henri Robert, le jury a rendu un verdict d'acquittement en faveur du vicomte."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le meurtre d'une femme à Chelles",
    "summary": "La Cour d'assises de Seine-et-Marne a prononcé l'acquittement d'un ouvrier menuisier nommé Oster, qui avait abattu son épouse le 8 septembre dernier après la découverte de ses infidélités.",
    "paragraphs": [
      "La Cour d'assises de Seine-et-Marne a jugé un ouvrier menuisier nommé Oster, accusé d'avoir donné la mort à sa femme à coups de revolver le 8 septembre dernier.",
      "Le drame a éclaté à la suite d'une altercation violente où l'épouse a avoué ses infidélités. Poussé par un accès de fureur, le mari a abattu sa compagne. Au regard des circonstances, le jury a prononcé l'acquittement de l'accusé."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Justice",
    "title": "Brutalités dans un asile",
    "summary": "Le tribunal correctionnel de la Seine a condamné à des peines de prison ferme le directeur et le personnel de l'asile de vieillards de Vanves-Malakoff pour les sévices infligés aux pensionnaires.",
    "paragraphs": [
      "Le tribunal correctionnel de la Seine a rendu son jugement concernant les faits de violence perpétrés au sein de l'asile de vieillards de Vanves-Malakoff. Les responsables de cet établissement ont été reconnus coupables des sévices reprochés.",
      "M. de Kérien, directeur de l'asile, s'est vu infliger une peine d'un an de prison. L'économe, ainsi que l'infirmier et l'infirmière, ont également été condamnés à diverses peines de prison ferme pour leur implication dans ces brutalités."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Justice",
    "title": "Affaire du décès sur le Bourgogne",
    "summary": "La cour d'appel a infirmé le jugement rendu en faveur de Mme Resal, déboutant la plaignante dans son action contre la Compagnie transatlantique concernant le décès de son époux à bord du paquebot La Bourgogne.",
    "paragraphs": [
      "Mme Resal avait intenté un procès à la Compagnie transatlantique suite au décès de son mari survenu à bord du paquebot 'La Bourgogne'.",
      "Si une première décision avait condamné la compagnie, Mme Resal avait fait appel afin d'obtenir une indemnisation plus substantielle. Toutefois, la cour a infirmé ce jugement, estimant qu'aucune faute ne pouvait être légitimement retenue à l'encontre du capitaine ou de la compagnie maritime."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Vie de Paris",
    "title": "Statistiques municipales",
    "summary": "Le rapport hebdomadaire de la statistique municipale de Paris note une baisse de la mortalité, tout en soulignant la persistance des maladies respiratoires et le nombre constant de suicides et morts violentes.",
    "paragraphs": [
      "Le service de la statistique municipale de Paris constate, dans son dernier relevé, une diminution sensible du nombre de décès par rapport aux semaines précédentes.",
      "Tandis que les cas de fièvre typhoïde se maintiennent à un taux stable, les maladies respiratoires et la phtisie demeurent les causes les plus fréquentes de mortalité. Par ailleurs, 20 suicides et 16 morts violentes ont été officiellement enregistrés cette semaine."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Actualités",
    "title": "Début de feu au Sénat",
    "summary": "Un incendie causé par un feu de cheminée s'est déclaré au palais du Sénat. L'intervention rapide des pompiers et du personnel a permis d'éviter tout dommage significatif à l'édifice.",
    "paragraphs": [
      "Un début d'incendie, provoqué par un feu de cheminée, a été signalé au sein du palais du Sénat. Fort heureusement, les pompiers ainsi que les employés présents sur les lieux ont rapidement circonscrit le sinistre, empêchant toute propagation et évitant des dégâts majeurs."
    ]
  },
  {
    "id": 30,
    "page": 3,
    "category": "Faits Divers",
    "title": "Cambriolage au faubourg Saint-Jacques",
    "summary": "M. Chaignat a mis en déroute des malfaiteurs lors d'une tentative de cambriolage nocturne dans sa villa. L'un des auteurs, Léon Perrotier, a été appréhendé après un échange de coups de feu.",
    "paragraphs": [
      "Cette nuit, M. Chaignat, entrepreneur, a surpris des cambrioleurs en pleine effraction dans sa villa. Un échange de coups de feu a eu lieu, mais les malfaiteurs ont finalement été cernés par les forces de police.",
      "L'un des assaillants, nommé Léon Perrotier, a été arrêté et immédiatement conduit au dépôt. Ses complices, quant à eux, font l'objet de recherches actives de la part des autorités."
    ]
  },
  {
    "id": 31,
    "page": 3,
    "category": "Faits Divers",
    "title": "Agression avenue de Clichy",
    "summary": "L'ouvrier maçon Émile Serbeland a été découvert grièvement blessé avenue de Clichy. Il a été victime d'une agression brutale à la suite d'un différend survenu avec un client dans un débit de vins voisin.",
    "paragraphs": [
      "Émile Serbeland, ouvrier maçon, a été retrouvé gravement blessé, souffrant d'une fracture de la jambe, sur la voie publique. Il a déclaré aux autorités avoir été agressé par un client à la suite d'une altercation violente survenue dans un débit de vins du quartier."
    ]
  },
  {
    "id": 32,
    "page": 3,
    "category": "Autour de Paris",
    "title": "Chroniques des communes limitrophes",
    "summary": "La banlieue parisienne est le théâtre de nombreux drames : agressions à Puteaux, suicides à Levallois et Saint-Denis, accident domestique tragique à Saint-Ouen et arrestation d'une bande de voleurs aux Lilas.",
    "paragraphs": [
      "À Puteaux, un ouvrier a été grièvement agressé par des malfaiteurs aux abords d'une usine. À Levallois-Perret, un rentier a mis fin à ses jours par arme à feu. À Saint-Ouen, un nourrisson est décédé des suites de graves brûlures par ébouillantage.",
      "À Saint-Denis, une femme a tenté de se donner la mort. Enfin, aux Lilas, une bande de malfaiteurs spécialisés dans le cambriolage d'appartements a été appréhendée par les forces de l'ordre."
    ]
  },
  {
    "id": 33,
    "page": 3,
    "category": "Courrier des Théâtres",
    "title": "Représentations musicales et théâtrales",
    "summary": "Les auditions d'oratorios à Saint-Eustache connaissent un vif succès. Parallèlement, l'Opéra de Paris annonce la nomination de M. Victor Capoul, tandis que Bruxelles salue la première de l'œuvre de Jean Blockx.",
    "paragraphs": [
      "Les auditions d'oratorios en l'église Saint-Eustache, consacrées au « Messie » de Haendel, ont rencontré un vif succès auprès du public. Par ailleurs, d'importants changements sont annoncés à l'Opéra, avec la nomination de M. Victor Capoul à la direction de la scène.",
      "Le Théâtre royal de la Monnaie, à Bruxelles, a présenté avec éclat la première représentation de « Thyl Uylenspiegel », œuvre du compositeur Jean Blockx."
    ]
  }
];
