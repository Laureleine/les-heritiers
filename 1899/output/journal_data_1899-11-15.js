// Date: 1899-11-15
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-11-15 (Version Restaurée, 39 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Éditorial",
    "title": "La France du Levant",
    "summary": "Retour sur l'histoire de l'influence française au Levant, depuis les traités de François Ier jusqu'au déclin économique actuel face aux puissances étrangères, menaçant notre précieux rayonnement moral.",
    "paragraphs": [
      "Il n'est pas sans intérêt, au moment où se pose à nouveau la question de l'influence française dans le Levant, de jeter un coup d'œil en arrière et de montrer par quelles étapes successives a passé cette influence.",
      "Nul n'ignore d'ailleurs que c'est un traité d'alliance, conclu entre Soliman II et François Ier, qui rendit, suivant l'expression d'un historien, les Français maîtres du commerce du Levant.",
      "C'est sous l'impulsion de Colbert que les consulats français furent réorganisés. Les rapports des consuls, communiqués à la chambre de commerce de Marseille, permettaient un contrôle sévère des autorisations de résidence.",
      "Malgré une prépondérance historique, le commerce français dans le Levant a décliné au fil du temps face à la concurrence des autres nations européennes, notamment l'Allemagne.",
      "L'influence économique française semble aujourd'hui bien compromise. Il conviendrait de ne pas laisser notre influence morale, menacée par les initiatives russes, italiennes et américaines, subir le même sort."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Feuilleton",
    "title": "Haine vieille d'un siècle",
    "summary": "L'enquête sur le garde Soubise s'obscurcit. Alors que le corps est découvert, Gérard se tourne vers la justice, refusant la thèse du suicide privilégiée par l'enquête officielle.",
    "paragraphs": [
      "Tout à coup, il fouilla dans son sac. Si je ne me trompe, la lettre de Soubise est encore là. Il ne la trouva plus.",
      "Le mystère s'obscurcit. Soubise manquait à l'appel.",
      "La découverte du corps du garde Soubise par le garde Malicamp laisse présager un drame, que ce soit un suicide ou un assassinat.",
      "Gérard, après avoir appris la nouvelle, décide de se rendre auprès du procureur de la République pour tout raconter, tandis que l'enquête officielle privilégie la thèse du suicide."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Chronique Politique",
    "title": "Conseil des Ministres",
    "summary": "Sous la présidence de M. Loubet, le Conseil des Ministres valide le dépôt de projets de loi. M. Millerand réforme la commission de l'inspection du travail en y intégrant des représentants ouvriers.",
    "paragraphs": [
      "Les ministres se sont réunis, hier matin, à l'Élysée, sous la présidence de M. Loubet. Ils ont décidé de déposer sur le bureau de la Chambre la plupart des projets de loi examinés précédemment.",
      "M. Millerand, ministre du Commerce, a présenté un décret modifiant la composition de la commission de classement du personnel de l'inspection du travail, incluant désormais trois membres ouvriers élus du conseil supérieur du travail."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Diplomatie",
    "title": "France et Russie",
    "summary": "L'Agence russe dément formellement les rumeurs de tensions diplomatiques entre M. Delcassé et le comte Mouraviev, réaffirmant l'entente cordiale et la solidité des liens entre les deux Cabinets.",
    "paragraphs": [
      "L'Agence russe dément formellement les bruits de désaccord survenus entre M. Delcassé et le comte Mouraviev lors du récent séjour de ce dernier à Paris.",
      "La note souligne que l'entente entre les ministres des Affaires étrangères de France et de Russie reste totale et que les liens entre les deux Cabinets n'ont jamais été aussi solides."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Faits Divers",
    "title": "L'incident du Cordoba",
    "summary": "À propos de l'incident impliquant le Cordoba, les autorités précisent les limites du droit de visite en temps de paix, qualifiant l'événement de simple vérification de pavillon sans suite.",
    "paragraphs": [
      "L'incident impliquant le navire Cordoba soulève des questions sur le droit de visite et le droit d'enquête de pavillon exercés par les navires de guerre en temps de paix.",
      "La dépêche semble indiquer que les circonstances se rapportent à une simple enquête de pavillon, le bâtiment français ayant été autorisé à poursuivre sa route après vérification."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Actualité Étrangère",
    "title": "La guerre au Transvaal",
    "summary": "Le gouvernement britannique entretient le mystère sur le sort de Ladysmith, tandis que la tension monte au Transvaal suite à l'ultimatum concernant l'espion présumé Nathan Marks.",
    "paragraphs": [
      "Le gouvernement britannique garde le silence sur la situation de Ladysmith, laissant supposer que la situation est critique. Les récits sur la capitulation de Nicholson-Nek évoquent un possible malentendu.",
      "Un train blindé a effectué une reconnaissance près de Colenso. Par ailleurs, des détails sur le combat de Glencoe ont été publiés, soulignant la rudesse des affrontements entre Boers et Anglais.",
      "Une réclamation a été émise par le Transvaal exigeant la libération d'un espion présumé, Nathan Marks, sous peine d'exécutions de prisonniers anglais."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Faits Divers",
    "title": "Un crime à Roubaix",
    "summary": "Une violente tentative de meurtre a secoué la rue Dampierre à Roubaix, où un ouvrier a été sauvagement agressé par un repris de justice, actuellement activement recherché par les autorités.",
    "paragraphs": [
      "Une tentative de meurtre a été commise dans la nuit de lundi à mardi, rue Dampierre, contre un ouvrier charbonnier nommé Charles Ponthieu.",
      "L'agresseur, un repris de justice nommé Auguste Depleu, a porté neuf coups de couteau à sa victime, qui est actuellement soignée à l'hôpital. La police a ouvert une enquête, le coupable ayant pris la fuite."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits Divers",
    "title": "Bandit de grand chemin",
    "summary": "Un voyageur a été dépouillé dans un train par une bande de malfaiteurs. Grâce à l'intervention rapide des autorités, l'un des agresseurs a été appréhendé près du pont de Draney.",
    "paragraphs": [
      "M. Savoy, un voyageur, a été victime d'une agression dans un train à destination de Paris. Quatre individus l'ont conduit dans un endroit isolé sous un faux prétexte pour lui voler son portefeuille.",
      "L'un des agresseurs, identifié comme Léon Lefebvre, a été arrêté par les gendarmes à proximité du pont de Draney."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Chronique Parlementaire",
    "title": "Chambre des Députés",
    "summary": "La rentrée parlementaire est marquée par une vive animation suite aux récentes perquisitions chez les assomptionnistes et aux débats intenses sur la stabilité du Cabinet ministériel.",
    "paragraphs": [
      "La rentrée de la Chambre a été marquée par une forte animation autour des perquisitions récentes chez les assomptionnistes et des débats sur la politique générale du Cabinet.",
      "Lors de la séance du 14 novembre, le gouvernement a fait face aux interpellations de MM. Denys Cochin et de Grandmaison. Le résultat des votes semble confirmer le soutien de la majorité au ministère."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Chronique Parlementaire",
    "title": "Chambre des députés : Interpellations sur la politique générale",
    "summary": "La Chambre a été le théâtre d'une séance houleuse où le cabinet Waldeck-Rousseau a dû répondre aux critiques virulentes de l'opposition sur sa politique religieuse et la gestion militaire.",
    "paragraphs": [
      "Le président de la Chambre ouvre la séance et aborde les nombreuses demandes d'interpellation concernant la politique générale du gouvernement. Le président du Conseil, M. Waldeck-Rousseau, propose de joindre ces interpellations, notamment celles de MM. Denys Cochin, Lasies, Zevaès et de Grandmaison.",
      "M. Denys Cochin prend la parole pour critiquer la composition du Cabinet, composé d'hommes aux opinions contradictoires. Il dénonce une politique de « déchristianisation » de la France et s'interroge sur l'influence réelle des ministres au sein d'un gouvernement qu'il juge sceptique et démoralisateur.",
      "M. de Grandmaison succède à la tribune, interrogeant le gouvernement sur le remplacement du général Zurlinden et attaquant le ministre de la Guerre, le général de Galliffet, pour sa gestion des carrières militaires et les grâces accordées.",
      "M. Zevaès, au nom du parti socialiste, demande des mesures contre les agissements cléricaux et militaristes, prônant la séparation de l'Église et de l'État ainsi qu'une réorganisation démocratique de l'armée.",
      "M. Lasies intervient sur le déplacement d'officiers et qualifie le gouvernement d'indigne, ce qui provoque un tumulte et entraîne le prononcé de la censure par la Chambre.",
      "Le général de Galliffet répond aux accusations, justifiant les déplacements d'officiers par la nécessité de maintenir la discipline et l'obéissance, citant notamment le cas du général de Négrier pour ses propos sur le haut commandement.",
      "M. Paul de Cassagnac déplore la grâce accordée à Dreyfus et critique les perquisitions et les actes du gouvernement. M. Viviani conclut en défendant l'action du gouvernement au nom du parti socialiste, affirmant son soutien aux institutions républicaines face à la réaction."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Vie Parlementaire",
    "title": "Sénat : Séance législative",
    "summary": "Le Sénat, présidé par M. Fallières, a tenu une séance législative consacrée à la lecture du décret de convocation des Chambres, aux hommages funèbres et au tirage au sort des élections sénatoriales partielles.",
    "paragraphs": [
      "Le Sénat a siégé en tant qu'assemblée législative. M. Fallières a présidé la séance, laquelle fut marquée par la lecture officielle du décret de convocation des Chambres et par l'éloge funèbre prononcé en mémoire de plusieurs sénateurs récemment décédés.",
      "Il a été procédé au tirage au sort des départements appelés à élire des sénateurs pour pourvoir aux sièges vacants laissés par MM. Chesnelong, Scheurer-Kestner et Albert Grévy. La séance a été levée peu après ces opérations."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Justice",
    "title": "La Haute Cour : Poursuite des audiences",
    "summary": "La Haute Cour poursuit ses travaux. Les débats portent sur les conclusions des avocats concernant la récuse de magistrats et sur la demande de transfert médical pour le détenu M. Brunet.",
    "paragraphs": [
      "La Haute Cour s'apprête à reprendre ses travaux. Les débats du jour porteront principalement sur les conclusions déposées par la défense concernant la récuse de certains membres du tribunal, ainsi que sur la question de la requalification des charges pesant contre les accusés.",
      "Le cas du détenu M. Brunet, qui sollicite son transfert dans un établissement hospitalier pour des raisons de santé, a été formellement porté devant le conseil de l'ordre des avocats."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Faits Divers",
    "title": "Perquisitions chez les Assomptionnistes",
    "summary": "Le juge d'instruction M. Fabre approfondit son enquête sur les fonds saisis chez les Assomptionnistes, que ces derniers présentent comme étant destinés aux œuvres pieuses et aux écoles d'Orient.",
    "paragraphs": [
      "Le juge d'instruction M. Fabre poursuit avec rigueur l'examen des documents et registres saisis lors des récentes perquisitions effectuées au siège des pères assomptionnistes. Les découvertes monétaires dans les cellules ont suscité de nombreuses interrogations.",
      "Des explications ont été fournies par les membres de la congrégation, affirmant que ces fonds étaient exclusivement destinés aux œuvres religieuses, aux pèlerinages et aux écoles d'Orient. Toutefois, des rumeurs persistantes sur l'importance réelle des valeurs saisies continuent de circuler dans les couloirs du Palais."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Vie Municipale",
    "title": "Préparatifs du Triomphe de la République",
    "summary": "Les préparatifs de la fête du « Triomphe de la République » sont arrêtés : discours, chœurs et un grand banquet à l'Hôtel de ville présidé par M. Waldeck-Rousseau marqueront cette célébration.",
    "paragraphs": [
      "L'organisation de la fête du « Triomphe de la République » est désormais fixée. Le programme comprendra des discours officiels, des chœurs républicains, un défilé de diverses délégations, ainsi qu'un banquet à l'Hôtel de ville qui sera présidé par M. Waldeck-Rousseau.",
      "La cérémonie s'achèvera par un bal de prestige pour lequel dix mille invitations ont été distribuées aux représentants des groupements politiques et des corporations parisiennes."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Dépêches Étrangères",
    "title": "Informations internationales",
    "summary": "Tour d'horizon diplomatique : séjour de l'Empereur d'Allemagne en Angleterre, ferveur patriotique en Italie et mesures financières du Khédive pour l'expédition au Soudan.",
    "paragraphs": [
      "En Angleterre, l'Empereur d'Allemagne effectue actuellement un séjour diplomatique. Parallèlement, en Italie, l'inauguration de la nouvelle législature a été marquée par des manifestations chaleureuses et sympathiques envers les souverains.",
      "En Égypte, le Khédive a signé un décret relatif au fonds de réserve, permettant ainsi de débloquer les capitaux nécessaires pour le financement de l'expédition militaire au Soudan."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Exposition Universelle",
    "title": "Questions pratiques sur l'Exposition de 1900",
    "summary": "Le commissariat de l'Exposition de 1900 informe que l'adjudication des kiosques sera fixée en décembre et confirme que la rédaction des guides est laissée aux initiatives privées, sans document officiel.",
    "paragraphs": [
      "La direction du commissariat précise que l'adjudication des kiosques de l'Exposition ne peut encore être fixée en raison de la complexité du cahier des charges ; elle aura probablement lieu dans la première quinzaine de décembre.",
      "Il est par ailleurs officiellement notifié qu'il n'existe pas de guide officiel de l'Exposition, l'administration ayant abandonné cette publication aux initiatives privées."
    ]
  },
  {
    "id": 17,
    "page": 3,
    "category": "Correspondance Administrative",
    "title": "Demande d'autorisation de publication",
    "summary": "Une note administrative détaille les conditions imposées à un éditeur pour publier un guide de l'Exposition, soulignant l'absence de monopole et l'obligation de verser une redevance.",
    "paragraphs": [
      "J'ai l'honneur de vous informer que je suis disposé, en principe, à vous accorder cette autorisation sous les réserves suivantes : une épreuve du guide dans les diverses langues me sera préalablement soumise.",
      "Le guide ne contiendra pas de listes d'exposants. Vous aurez à assurer la vente par une entente directe avec les concessionnaires de kiosques qui auront été autorisés à vendre les publications de cette nature.",
      "L'autorisation ne vous constituera ni privilège ni monopole. Vous souscrirez l'engagement de verser une redevance de francs pour l'édition française et de francs pour chacune des éditions étrangères.",
      "Ces conditions feront l'objet du rapport qui sera soumis à l'acceptation ministérielle. Veuillez agréer, etc. Signé M. Alfred P."
    ]
  },
  {
    "id": 18,
    "page": 3,
    "category": "Nouvelles Militaires",
    "title": "Mouvement dans l'état-major",
    "summary": "Le capitaine Funck, officier de l'état-major de l'armée, est détaché au ministère des Colonies pour servir au sein du corps d'occupation de Madagascar.",
    "paragraphs": [
      "Le capitaine Funck, de l'état-major de l'armée, a été mis à la disposition du ministre des Colonies pour être employé à l'état-major du corps d'occupation de Madagascar."
    ]
  },
  {
    "id": 19,
    "page": 3,
    "category": "Nouvelles Militaires",
    "title": "Le débat sur la lance dans la cavalerie",
    "summary": "Le débat persiste au sein de l'armée française sur l'utilité de la lance, arme jugée encombrante par beaucoup de militaires, malgré son adoption par les puissances européennes voisines.",
    "paragraphs": [
      "Les adversaires de la lance demandent au ministre de prendre une décision au sujet de l'emploi de cet armement dans la cavalerie. Ils rappellent qu'il est le principal artisan du retour à cette arme du Moyen Âge.",
      "L'Allemagne, après avoir supprimé la lance, l'a reprise et en a doté toute sa cavalerie. L'Angleterre a donné la lance à ses lanciers. Par contre, l'Autriche n'a plus de lanciers et la Russie n'en conserve que parmi quelques unités.",
      "En France, les adversaires de cette arme sont légion, la trouvant encombrante et bien inférieure, comme effet moral, au feu d'une bonne arme."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Le départ de la classe",
    "summary": "Le départ des jeunes conscrits pour leur service militaire génère une forte activité dans les gares. La compagnie de l'Est a renforcé son trafic avec cent trente-cinq trains supplémentaires.",
    "paragraphs": [
      "Le départ des jeunes conscrits de la classe appelés à faire un an de service militaire a provoqué une grande animation près des gares. Les conscrits appelés pour trois ans partiront aujourd'hui et demain.",
      "En raison de l'appel de la classe, la compagnie de l'Est met en service, pendant ces trois jours, cent trente-cinq trains supplémentaires pour transporter les conscrits vers leurs garnisons."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Sciences",
    "title": "Expéditions pour l'observation des étoiles filantes",
    "summary": "À l'occasion de la pluie d'étoiles filantes des 15 et 16 novembre, des savants organisent deux expéditions aériennes. Le comte de la Vaulx, MM. Tikoff, Lespiault, Maillet, ainsi que Mlle Klumpke et M. de Fonvielle y participent.",
    "paragraphs": [
      "C'est dans les nuits des 15 et 16 novembre que se produira la pluie d'étoiles filantes. Afin d'avoir toutes les chances d'observer ce phénomène, quelques savants ont organisé des expéditions aériennes.",
      "Deux expéditions partiront de Paris. La première, le 15, avec le comte de la Vaulx, MM. Tikoff et Lespiault. La seconde, le lendemain, avec M. Maillet, Mlle Klumpke et M. de Fonvielle."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Échos et Nouvelles",
    "title": "Mme Constans et M. Arthur Giry",
    "summary": "Mme Constans est de retour à Paris après un rétablissement complet, tandis que le monde académique pleure la disparition de M. Arthur Giry, éminent professeur à l'École des chartes, décédé à cinquante ans.",
    "paragraphs": [
      "Mme Constans est arrivée hier à Paris après un séjour à Lamalou et dans sa propriété de Sembel, complètement rétablie de l'accident dont elle avait été victime à Constantinople.",
      "M. Arthur Giry, membre de l'Institut et professeur à l'École des chartes, est décédé hier à Paris à l'âge de cinquante ans. Ses obsèques seront célébrées aujourd'hui."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Industrie",
    "title": "Progrès électriques en Suède",
    "summary": "La Suède renforce ses capacités industrielles avec l'inauguration de l'usine électrique de Skramforsen, dont la puissance totale de 3 000 chevaux alimente l'éclairage et les fabriques de carbure de calcium.",
    "paragraphs": [
      "La Suède progresse rapidement dans l'industrie électrique. La plus importante installation récente est celle de Skramforsen, dont les chutes actionnent des turbines de six cents chevaux chacune.",
      "La puissance totale développée est de 3 000 chevaux, faisant de cet établissement la plus forte usine électrique des pays scandinaves. Le courant est utilisé pour l'éclairage et alimente des fabriques de carbure de calcium."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Arrestation d'un meurtrier à Paris",
    "summary": "Drame boulevard de Clichy : Louis Tonnelier a tiré trois coups de revolver sur la marchande foraine Mme Louise Fourgeaud pour venger un ancien différent. Le meurtrier s'est constitué prisonnier au commissariat.",
    "paragraphs": [
      "Louis Tonnelier, âgé de trente-cinq ans, a tiré trois coups de revolver sur une marchande foraine, Mme Louise Fourgeaud, à la fête du boulevard de Clichy.",
      "Le meurtrier s'est constitué prisonnier au commissariat. Il a déclaré vouloir se venger du mari de la victime, qui avait tenté de le tuer en janvier dernier."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Suicide d'un jeune ouvrier",
    "summary": "Tragédie : Philippe Dietz, âgé de vingt et un ans, a été retrouvé mort, asphyxié par du charbon de bois. Le jeune homme, qui devait rejoindre son corps militaire aujourd'hui, a choisi cette issue pour s'y soustraire.",
    "paragraphs": [
      "Le corps de Philippe Dietz, âgé de vingt et un ans, a été trouvé sans vie, asphyxié par du charbon de bois. Le jeune homme voulait se soustraire au service militaire, alors qu'il devait rejoindre son corps aujourd'hui."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "L'affaire du boulevard Voltaire",
    "summary": "Étienne Despeyroux, graveur sur glaces, a été la cible d'une agression armée boulevard Voltaire. Blessé par un inconnu ayant pris la fuite, il a été transporté d'urgence à l'hôpital Saint-Louis.",
    "paragraphs": [
      "Étienne Despeyroux, graveur sur glaces, demeurant boulevard Voltaire, a été agressé hier soir par un inconnu. Ce dernier, après avoir fait usage d'une arme à feu, a pris la fuite avant toute interpellation.",
      "Le blessé a été immédiatement transporté à l'hôpital Saint-Louis, où les soins nécessaires lui ont été prodigués. Une enquête est ouverte pour identifier l'auteur de cet attentat."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Commencement d'incendie à la cité des Mousquetaires",
    "summary": "Un tragique incendie, provoqué par une lampe à essence, s'est déclaré à la cité des Mousquetaires. Le jeune Victor, âgé de dix mois, a péri asphyxié par les fumées malgré l'intervention des secours.",
    "paragraphs": [
      "Un triste accident s'est produit à la cité des Mousquetaires. Un début d'incendie, causé par la chute d'une lampe à essence dans le logement de M. et Mme Christ, a rapidement propagé ses flammes dans l'habitation.",
      "Malgré les efforts déployés pour circonscrire le sinistre, leur enfant, le petit Victor, âgé de dix mois, a succombé, asphyxié par l'épaisse fumée qui avait envahi la pièce."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits Divers",
    "title": "Rixe sanglante à Boulogne-sur-Seine",
    "summary": "Une altercation dans un débit de vin à Boulogne-sur-Seine a dégénéré en drame. Le nommé Bailly, poignardé à dix reprises lors d'une rixe avec le fils de la débitante, se trouve dans un état désespéré.",
    "paragraphs": [
      "Une querelle violente a éclaté dans un débit de vin situé à Boulogne-sur-Seine. Une vive discussion a opposé le fils de la débitante à un client nommé Bailly.",
      "Le ton montant, la dispute a pris une tournure sanglante : M. Bailly a reçu dix coups de couteau. Transporté en urgence, son état est jugé désespéré par les médecins."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Faits Divers",
    "title": "Découverte d'un engin explosif à Joinville-le-Pont",
    "summary": "La découverte d'une boîte suspecte contenant de la poudre chlorate et des munitions dans un train en gare de la Varenne-Saint-Hilaire a mobilisé le commissaire Parnet, qui a fait saisir l'engin pour expertise.",
    "paragraphs": [
      "En gare de la Varenne-Saint-Hilaire, près de Joinville-le-Pont, une découverte inquiétante a été faite dans un wagon : une boîte métallique dissimulait 250 grammes de poudre chlorate ainsi que diverses douilles et balles.",
      "Averti de cet événement, le commissaire Parnet s'est rendu sur les lieux et a fait transporter l'engin dangereux au laboratoire pour une analyse approfondie."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Sport",
    "title": "Tentative de record cycliste",
    "summary": "Le cycliste Berlin s'élance ce matin dans une tentative de record sur le trajet Marmande-Paris. Il espère parcourir la distance à motocycle en une journée, avec un départ matinal à trois heures.",
    "paragraphs": [
      "M. Berlin tentera aujourd'hui une performance audacieuse : battre le record du trajet Marmande-Paris en motocycle.",
      "Le concurrent se mettra en selle dès trois heures du matin, nourrissant l'ambition d'atteindre la capitale à quatre heures du soir."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités théâtrales",
    "summary": "L'Opéra présente la Prise de Troie de Berlioz. L'Odéon fête la 50ème de Daniel Riche. Le Vaudeville et les Variétés annoncent de nouvelles productions tandis que les Bouffes-Parisiens jouent Véronique.",
    "paragraphs": [
      "Ce soir, à l'Opéra, première représentation de la Prise de Troie, opéra en quatre actes, d'Hector Berlioz.",
      "Hier, à l'Odéon, l'auteur et les interprètes de la Visite se sont réunis pour fêter la cinquantième représentation de la charmante pièce de Daniel Riche.",
      "Le théâtre du Vaudeville annonce les huit dernières représentations de Belle-Maman. Mercredi prochain, première représentation du Faubourg, comédie inédite en quatre actes, de M. Abel Hermant.",
      "Aux Variétés, irrévocablement les trois dernières représentations du Vieux Marcheur. Samedi, relâche. Mercredi, première représentation de la Belle Hélène.",
      "Aux Bouffes-Parisiens, dimanche prochain, en matinée et en soirée, deux dernières représentations de Véronique, le charmant opéra-comique d'André Messager."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Actualités",
    "title": "Représentation extraordinaire de la presse",
    "summary": "L'Odéon accueille demain une représentation au profit des associations de la presse. Au programme : tombola exceptionnelle, poésie par Mlle Sorel et de nombreux lots offerts par les artistes et l'État.",
    "paragraphs": [
      "La représentation extraordinaire que donneront demain jeudi les associations de la presse sera des plus variées et des plus belles.",
      "En dehors des attractions du programme que nous avons énumérées, nous annonçons une tombola des plus originales.",
      "Mlle Sorel la présentera aux spectateurs en récitant une pièce en vers intitulée Au public, due à la plume d'un de nos plus éminents confrères, dont les hautes fonctions nous empêchent de divulguer le nom.",
      "M. le Président de la République a offert pour cette tombola un vase de Sèvres. M. le ministre de l'Instruction publique et M. le directeur des Beaux-Arts ont également adressé vingt-cinq lots. Peintres, dessinateurs et artistes ont généreusement donné de leurs œuvres.",
      "Les billets pour cette tombola seront vendus le jour de la représentation au foyer et dans la salle de l'Odéon. Tous ces billets seront gagnants."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Répétitions et projets à l'Opéra-Comique et ailleurs",
    "summary": "L'Opéra-Comique prépare Orphée, les œuvres de Saint-Saëns et Louise. Reprises à la Porte-Saint-Martin et aux Bouffes-du-Nord, tandis que les Concerts Colonne prolongent le succès d'Henri Rabaud.",
    "paragraphs": [
      "L'Opéra-Comique, outre les ouvrages du répertoire courant, répète en ce moment trois grands ouvrages : Orphée de Glück, une œuvre de M. Camille Saint-Saëns, et Louise de M. Gustave Charpentier. C'est Orphée qui prendra certainement le pas sur les deux autres pour les débuts de Mlle Gerville-Réache.",
      "La reprise des Misérables, de Victor Hugo, au théâtre de la Porte-Saint-Martin, ne passera pas avant les premiers jours du mois prochain.",
      "Les Bouffes-du-Nord feront, samedi prochain, une reprise de Nana pour les représentations de Mlle Nicole Bernard dans le rôle-titre.",
      "Le succès obtenu par la nouvelle symphonie de M. Henri Rabaud et le concerto de Castillon, magistralement interprété par M. Raoul Pugno, a déterminé la direction des Concerts Colonne à donner de ces ouvrages une seconde audition dimanche prochain."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Nouvelles de l'étranger",
    "title": "Succès de Mlle Alice Braquehais à La Haye",
    "summary": "La jeune artiste Mlle Alice Braquehais triomphe au Théâtre Royal français de La Haye, où sa performance dans Guillaume Tell a suscité l'enthousiasme du public et de la direction.",
    "paragraphs": [
      "Mlle Alice Braquehais vient de remporter de nouveaux succès au Théâtre Royal français, notamment dans Guillaume Tell, dont le duo a été bissé, chose extraordinaire à La Haye. Le public et la direction sont enchantés et ont adressé leurs félicitations à la jeune artiste."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Concerts et divertissements",
    "title": "Programme des salles de spectacle",
    "summary": "De l'Eldorado au Nouveau-Cirque, Paris propose une riche affiche : nouvelles revues, championnats de lutte, pantomimes nautiques et vaudevilles à succès rythment la vie culturelle de la capitale.",
    "paragraphs": [
      "Ce soir, à l'Eldorado, débuts de Mme Gaudet et première représentation de l'Incident est clos, revue en un acte et deux tableaux de MM. Gerny et Briollet.",
      "À la Scala, rentrée de la capiteuse Polaire dans un répertoire des plus pimentés.",
      "À Parisiana, le rôle de la commère est tenu maintenant par Mlle Berka dans la revue Qui complote ?.",
      "Deuxième épreuve des poids lourds ce soir au Casino de Paris pour le grand championnat international de lutte.",
      "Au Nouveau-Cirque, aujourd'hui, matinée avec Rapoli, le roi des jongleurs, et la pantomime nautique Au fond de l'eau.",
      "À Trianon, Le Premier mari de France, vaudeville de M. Albin Valabrègue, obtient chaque soir un succès énorme."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Social",
    "title": "Activités associatives et professionnelles",
    "summary": "Compte-rendu des prochaines manifestations associatives parisiennes : assemblées générales, bals et banquets annuels des corps de métier et sociétés de secours mutuel pour novembre et décembre.",
    "paragraphs": [
      "Dimanche dernier a eu lieu, à la mairie du Palais-Bourbon, l'assemblée générale de la caisse pour les veuves et orphelins des anciens militaires des armées de terre et de mer.",
      "Le bal annuel de l'Association des comptables de la Seine aura lieu le 9 décembre prochain dans les salons de l'hôtel Continental.",
      "L'exposition publique des projets présentés au concours de décoration pour fêtes publiques se tient à la bibliothèque de l'Union centrale des arts décoratifs.",
      "Le banquet annuel des conducteurs et commis des ponts et chaussées et des mines aura lieu samedi prochain, 18 novembre, dans les salons de l'hôtel Continental.",
      "Les allumeurs de gaz du département de la Seine sont priés d'assister à la réunion générale organisée pour demain jeudi, à huit heures du soir, salle de l'Éden du Temple.",
      "La société des conducteurs des mines visitera dimanche prochain les chantiers de l'Exposition."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Économie",
    "title": "Marché aux veaux et Bulletin commercial",
    "summary": "Rapport sur le marché aux veaux de la Villette du 14 novembre, signalant une activité soutenue et des prix fermes, ainsi que les dernières cotations des denrées du bulletin commercial.",
    "paragraphs": [
      "À la Villette, le mardi 14 novembre, la vente a été plus soutenue avec des prix demeurant fermes.",
      "Le bulletin commercial du 14 novembre détaille les cours des blés, des sucres et des farines pour les échéances à venir."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Faits divers",
    "title": "Une soirée dans le quartier Latin",
    "summary": "Récit d'une réception animée dans un hôtel meublé de la rue Cujas, où Mlle Lucie, dite la Friquette, a accueilli plusieurs figures du Quartier Latin jusqu'à l'arrivée impromptue du baron de Valmondois.",
    "paragraphs": [
      "Dans une chambre du cinquième étage d'un hôtel meublé de la rue Cujas, Mlle Lucie, dite la Friquette, donnait une fête à plusieurs camarades du quartier Latin.",
      "Autour d'une table garnie, on retrouvait des figures connues du milieu comme M. Paul, dit Popaul, et d'autres habitués des cafés.",
      "La soirée, marquée par des libations et une atmosphère enfumée, s'est animée lorsque la discussion a tourné autour de l'attente du baron Théodore de Valmondois.",
      "L'arrivée du baron, accueilli par un chahut organisé par les convives, a clos ce tableau de la vie interlope du quartier."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Ville de Paris",
    "title": "Emprunt du Chemin de fer métropolitain",
    "summary": "Annonce officielle de l'émission d'obligations municipales pour financer le Chemin de fer métropolitain, conformément à la loi du 30 mars 1898, avec une souscription publique ouverte dès le 18 novembre 1899.",
    "paragraphs": [
      "La ville de Paris a été autorisée, par la loi du 30 mars 1898, à emprunter 165 millions pour l'établissement du Chemin de fer métropolitain par l'émission d'obligations municipales.",
      "Une première fraction de l'emprunt est mise en souscription publique le samedi 18 novembre 1899."
    ]
  }
];
