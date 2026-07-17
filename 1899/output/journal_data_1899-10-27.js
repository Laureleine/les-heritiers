// Date: 1899-10-27
// Restauration Pass: 2
// Base de données complète des articles de presse du 1899-10-27 (Version Restaurée, 35 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 1,
    "category": "Actualités internationales",
    "title": "Captifs en Afrique",
    "summary": "La captivité de l'explorateur M. de Béhagle aux mains de Rabah, sultan du Bornou, est confirmée. L'espoir de sa libération repose désormais sur le calcul politique du tyran, craignant d'éventuelles représailles françaises.",
    "paragraphs": [
      "On a maintenant la certitude que M. de Béhagle, l'explorateur dont on avait annoncé la mort, est encore vivant, prisonnier de Rabah, le sultan du Bornou.",
      "Il est possible que le terrible sultan recule devant un crime qui, il peut le craindre, appellerait contre lui des représailles. En ce cas, par simple calcul, et non certes dans un accès de générosité, il remettra en liberté son prisonnier.",
      "C'est le souhait que formule un des anciens compagnons de M. de Béhagle avec une émotion que tout le monde partagera."
    ]
  },
  {
    "id": 2,
    "page": 1,
    "category": "Récit historique",
    "title": "La captivité du général Galliéni en 1881",
    "summary": "En 1881, le capitaine Galliéni et sa mission diplomatique furent capturés par le roi Ahmadou à Ségou. Par leur détermination inébranlable, ils obtinrent leur libération et la conclusion d'un traité de paix.",
    "paragraphs": [
      "Dans une autre partie de l'Afrique, quelques-uns de nos officiers, il y a dix-huit ans, eurent à subir une captivité qui se termina heureusement par la délivrance.",
      "C'était en 1881. Le général Galliéni, alors capitaine, avait été envoyé auprès du roi de Ségou, le cruel Ahmadou, pour lui proposer un traité de paix; il était accompagné de deux autres officiers, MM. Piétri et Vallutès, et du docteur Zantain.",
      "Par leur énergie invincible, ils finirent par triompher de leur bourreau. Ahmadou accepta le traité qu'on lui proposait et leur donna une escorte, avec des vivres et des moyens de transport."
    ]
  },
  {
    "id": 3,
    "page": 1,
    "category": "Récit historique",
    "title": "Autres captivités célèbres",
    "summary": "L'histoire coloniale est jalonnée de captivités aux sorts divers, allant de la délivrance d'Emin-pacha à la fin tragique du jeune marin français Paul Peinen, victime des pirates du Riff en 1895.",
    "paragraphs": [
      "Parmi les captivités qui eurent ainsi un heureux dénouement, on peut compter celle d'Emin-pacha. On se rappelle aussi le long martyre des prisonniers du Mahdi après la défaite de Gordon-pacha.",
      "En 1895, un jeune marin français, Paul Peinen, fut pris par les pirates du Riff. Malgré les négociant sous le sceau de la violence. Malgré les démarches entreprises, il succomba aux privations et aux mauvais traitements avant d'être libéré."
    ]
  },
  {
    "id": 4,
    "page": 1,
    "category": "Feuilleton",
    "title": "Grand roman inédit : Une haine vieille d'un siècle",
    "summary": "Après avoir été secouru par deux chasseurs de sauvagine, Villefort reprend ses forces dans une auberge avant de regagner au plus vite sa demeure, pressé par les impératifs de sa mission.",
    "paragraphs": [
      "Les deux chasseurs de sauvagine frappèrent à une auberge qu'ils connaissaient. Ils avaient transporté jusque-là Villefort dans leurs bras pour lui porter secours.",
      "Le lendemain matin, il se fit conduire à la station du chemin de fer la plus voisine. Un quart d'heure après, il arrivait devant la grille de sa demeure."
    ]
  },
  {
    "id": 5,
    "page": 1,
    "category": "Politique",
    "title": "Le roi de Grèce à l'Élysée",
    "summary": "Le Président de la République, M. Émile Loubet, a offert un déjeuner officiel en l'honneur du roi de Grèce, réunissant autour de la table les principaux dignitaires et ministres du gouvernement.",
    "paragraphs": [
      "Le Président de la République et Mme Émile Loubet ont offert, hier, un déjeuner en l'honneur du roi de Grèce.",
      "Parmi les invités se trouvaient les ministres de la Justice, des Affaires étrangères, des Finances, de la Guerre, ainsi que les présidents du Sénat et de la Chambre des députés."
    ]
  },
  {
    "id": 6,
    "page": 1,
    "category": "Politique",
    "title": "Informations politiques",
    "summary": "M. Millerand reçoit les représentants des syndicats de la couture pour l'Exposition, tandis que la Commission du Budget entame l'examen des crédits départementaux et de la Marine.",
    "paragraphs": [
      "M. Millerand a reçu hier des délégués de la Chambre syndicale patronale de la couture, venus solliciter une tolérance accrue concernant la durée du travail des ouvrières en vue de la préparation de l'Exposition.",
      "La Commission du Budget a entendu MM. Baudin et Leygues au sujet des crédits de leurs départements respectifs. La Commission abordera, dès aujourd'hui, la discussion afférente au budget de la Marine."
    ]
  },
  {
    "id": 7,
    "page": 1,
    "category": "Militaire",
    "title": "Le départ de la nouvelle classe",
    "summary": "Malgré les inquiétudes exprimées par un député au sujet de la fièvre typhoïde, le maintien du calendrier militaire demeure indispensable à la bonne tenue de l'armée.",
    "paragraphs": [
      "Un député a demandé au Ministre de surseoir au départ des jeunes soldats, invoquant la présence de quelques cas de fièvre typhoïde. Nous croyons que l'honorable représentant fait fausse route dans son appréciation.",
      "Il est impossible de laisser l'armée dans l'état exsangue où elle se trouve après le départ de la classe libérable. Il importe, pour le service du pays, de reprendre le cours de l'existence militaire ordinaire."
    ]
  },
  {
    "id": 8,
    "page": 1,
    "category": "Faits divers",
    "title": "Est-ce un crime à Cognac ?",
    "summary": "La découverte du corps de Mme Baptiste Terny dans une carrière près de Sigogne a suscité une vive émotion, menant le parquet de Cognac à délivrer un mandat d'arrêt contre son époux.",
    "paragraphs": [
      "Une affaire mystérieuse est venue jeter l'émoi parmi les habitants de l'Essert, près de Sigogne. Mme Baptiste Terny ayant disparu, des recherches furent immédiatement entreprises.",
      "Celles-ci ont conduit à la découverte du cadavre de la malheureuse dans une carrière de plâtre. Le Parquet de Cognac, saisi de l'affaire, a aussitôt lancé un mandat d'arrêt contre Baptiste Terny."
    ]
  },
  {
    "id": 9,
    "page": 1,
    "category": "Faits divers",
    "title": "L'assassinat de la rue Berthe",
    "summary": "L'enquête sur le meurtre de Mme Bertrand progresse : M. le commissaire Carpin recherche activement un ancien locataire suspect et un coup-de-poing américain trouvé dans un égout.",
    "paragraphs": [
      "M. Carpin, commissaire de police, poursuit avec méthode de nouvelles pistes sérieuses dans l'enquête sur l'assassinat de Mme Bertrand. Un ancien locataire au passé trouble est activement recherché par les agents.",
      "Une autre piste concerne un individu aperçu jetant un coup-de-poing américain dans une bouche d'égout, instrument dont les caractéristiques correspondraient aux blessures constatées sur le cadavre."
    ]
  },
  {
    "id": 10,
    "page": 1,
    "category": "Guerre du Transvaal",
    "title": "Chroniques de la guerre au Transvaal",
    "summary": "Le War-Office admet la capture d'un escadron du 18e hussards, alors que le général sir George White annonce l'arrivée de la colonne Yule à Ladysmith après une marche éprouvante.",
    "paragraphs": [
      "Le gouvernement anglais, malgré ses réticences, ne peut plus occulter le résultat des derniers engagements autour de Ladysmith. La capture d'un escadron du 18e hussards par les Boers est désormais admise par le War-Office.",
      "Le général sir George White a télégraphié que la colonne du général Yule venait d'atteindre Ladysmith, au terme d'une marche de nuit particulièrement pénible."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Faits Divers",
    "title": "Une épouse dénonce son mari meurtrier",
    "summary": "Une ouvrière de trente-cinq ans s'est rendue au commissariat de la rive gauche pour dénoncer son mari, qu'elle accuse d'avoir noyé leurs deux fillettes avant d'assassiner une tierce personne.",
    "paragraphs": [
      "Une ouvrière brocheuse de trente-cinq ans s'est présentée au commissariat de police de la rive gauche pour dénoncer son mari. Elle rapporte qu'après avoir quitté son foyer il y a cinq ans, elle a appris récemment que ses deux enfants étaient morts.",
      "La dame a ajouté que son mari, après avoir noyé les deux fillettes, aurait assassiné une femme, laissant un billet sur les vêtements de sa victime : « Je me suicide parce que l'on m'a pris mes deux enfants ». Le service de la Sûreté effectue actuellement des recherches à ce sujet."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Politique",
    "title": "Le Ministre de la Marine à Brest",
    "summary": "M. de Lanessan, ministre de la Marine, poursuit sa visite officielle à Brest. Il a inspecté les forts et les bâtiments de la flotte et procédé à plusieurs remises de décorations militaires.",
    "paragraphs": [
      "Le ministre de la Marine, M. de Lanessan, en visite officielle à Brest, a été reçu par l'amiral Barrera lors d'un dîner à la Préfecture maritime. Le ministre a affirmé son intention de visiter tous les ports de guerre pour évaluer les besoins de la marine française.",
      "Au cours de sa visite, le ministre a passé en revue les troupes et a remis la Médaille militaire à plusieurs membres du personnel. Malgré le contretemps dû à la brume pour certains exercices, il a poursuivi son inspection des forts et des bâtiments comme le Formidable et le Borda."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Nouvelles Maritimes",
    "title": "Nominations et recrutements militaires",
    "summary": "Le général de Trentinian est remis à la disposition du ministre de la Marine. Par ailleurs, des ajustements sont prévus concernant le recrutement des marins du commerce dans la flotte nationale.",
    "paragraphs": [
      "Le général de Trentinian, lieutenant-gouverneur du Soudan français, est remis à la disposition du ministre de la Marine suite à la réorganisation de l'administration coloniale.",
      "Des précisions sont apportées concernant les marins de la navigation commerciale et leur recrutement dans la marine, soulignant certaines lacunes dans la procédure de notification entre le ministère de la Guerre et les autorités maritimes."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Nouvelles Militaires",
    "title": "Mouvements et nominations de généraux",
    "summary": "L'armée annonce plusieurs mutations majeures : les généraux Blot, O'Connor et Niox reçoivent de nouvelles affectations, tandis que les conseils de guerre sont remaniés.",
    "paragraphs": [
      "Le général Blot est nommé à Alger. Le général O'Connor prend le commandement du corps de cavalerie de Paris. Le général Niox, quant à lui, est promu divisionnaire, reconnu pour ses travaux scientifiques et géographiques militaires.",
      "Des changements sont également notés au sein des Conseils de guerre de Marseille et d'Amiens concernant les capitaines rapporteurs."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Grave accident à Saumur",
    "summary": "Le lieutenant Vanhuffel, du 11e dragons, a été grièvement blessé lors d'une chute de cheval à Marson. Projeté contre un arbre par sa monture emballée, le militaire a été secouru après l'accident.",
    "paragraphs": [
      "Le lieutenant Vanhuffel, du 11e dragons, a été victime d'un grave accident de cheval au village de Marson. Sa monture s'étant emballée, il a été projeté contre un arbre, subissant des blessures faciales importantes. Le cheval a péri dans un fossé."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Politique",
    "title": "Point sur la Haute-Cour",
    "summary": "Au palais du Luxembourg, la défense poursuit l'examen des pièces du dossier. M. Bernard, procureur général, a précisé les charges contre les accusés royalistes liées aux troubles de la caserne de Reuilly.",
    "paragraphs": [
      "La journée a été calme au Luxembourg, où les défenseurs examinent minutieusement les pièces du dossier. Plusieurs transferts de prévenus royalistes ont eu lieu depuis la prison de la Santé. Le rapport de M. Bernard, procureur général, souligne les charges retenues concernant le complot et les événements de la caserne de Reuilly."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Faits Divers",
    "title": "Explosion de grisou à Marseille",
    "summary": "Un accident dû à une ouverture imprudente d'un panneau à bord du vapeur autrichien Dorotea, dans le port de Marseille, a provoqué une violente explosion de grisou, blessant grièvement cinq marins.",
    "paragraphs": [
      "Une violente explosion due au grisou s'est produite à bord du vapeur autrichien Dorotea dans le port de Marseille. L'accident, causé par l'ouverture imprudente d'un panneau, a fait cinq blessés sérieux parmi l'équipage."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Procès de l'assassinat de la rue Pierre-Leroux",
    "summary": "La Cour d'assises de la Seine juge les auteurs du meurtre de Mme veuve Joly. L'instruction souligne la cruauté des trois accusés ayant dérobé les économies de la victime.",
    "paragraphs": [
      "La Cour d'assises de la Seine juge les auteurs de l'assassinat d'une épicière de soixante-six ans, Mme veuve Joly, commis en janvier dernier. Les accusés sont trois jeunes gens : Burgert, Martin et Mathieu, ainsi que la fille Binau, poursuivie pour recel.",
      "L'instruction révèle une grande cruauté dans la préparation et l'exécution du crime visant le vol des économies de la victime, qui vivait seule avec sa petite-fille. L'interrogatoire des accusés met en évidence des antécédents regrettables et une absence totale de remords."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Chronique Littéraire",
    "title": "Roman-feuilleton : Le duc Horace de Villefort",
    "summary": "Le duc Horace de Villefort, acculé par ses créances, se présente chez Girodias. Contre toute attente, le prêteur refuse d'être remboursé, préférant conserver son emprise sur le domaine des Villefort.",
    "paragraphs": [
      "Le duc Horace de Villefort, ruiné, fait face aux exigences de son créancier, le vieux Girodias. Alors qu'il pensait perdre la totalité de sa fortune, le duc se rend aux Grandes-Roches pour régler ses dettes.",
      "Girodias, qui a racheté toutes les créances, se montre implacable. Malgré les efforts du duc pour payer et se libérer de cette emprise, Girodias refuse inopinément le remboursement immédiat, préférant maintenir sa mainmise sur le domaine des Villefort."
    ]
  },
  {
    "id": 20,
    "page": 3,
    "category": "Science et Santé",
    "title": "La lutte contre la peste",
    "summary": "Le point sur la propagation de la peste et l'efficacité du sérum du docteur Yersin. L'emploi du remède par les docteurs Calmette et Salimbeni à Oporto a permis de réduire drastiquement la mortalité.",
    "paragraphs": [
      "Le conférencier a fait l'historique des diverses épidémies de peste depuis les temps les plus anciens jusqu'aux époques récentes, où le fléau éclatait presque simultanément dans les Indes, à Madagascar, à Maurice, à la Réunion, en Égypte, et enfin à Oporto, au Portugal, où il fait encore des victimes à l'heure actuelle.",
      "En arrivant à Oporto, le docteur Calmette et son collaborateur, le docteur Salimbeni, se heurtèrent au scepticisme des médecins portugais. Mais leurs préventions ne tardèrent pas à disparaître : les deux savants français ayant pratiqué des inoculations du sérum antipesteux du docteur Yersin, le chiffre de la mortalité tomba de 50 à 10 pour 100. Il a été, en outre, établi que ce sérum conférait une immunité d'environ un mois.",
      "En terminant, le conférencier a insisté sur les mesures à prendre pour empêcher l'introduction du fléau sur notre territoire, soit par voie de terre, soit par voie de mer.",
      "Avant de lever la séance, il a rendu hommage aux fidèles et courageux officiers de santé de nos colonies, qui, comme Calmette et plusieurs autres, ont mérité l'admiration et la gratitude du pays."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un déraillement à la gare du Nord",
    "summary": "Le train de Chantilly a déraillé hier matin près des ponts Doudauville. Malgré des dégâts matériels importants et une interruption du trafic, l'accident n'a causé que des blessures légères parmi les voyageurs.",
    "paragraphs": [
      "Le train de voyageurs qui part à neuf heures cinquante du matin, se dirigeant sur Chantilly et Creil, venait de quitter la gare du Nord hier matin, à l'heure habituelle, lorsque, parvenu entre les ponts Doudauville et Jean-François-Lépine, en face de la cabine numéro 7, les trois voitures de queue sautèrent hors des rails.",
      "Plusieurs voyageurs, projetés l'un sur l'autre, ont été simplement contusionnés.",
      "Par suite de ce déraillement, les voies sont demeurées obstruées pendant près de deux heures, et tous les trains de Chantilly ont dû emprunter les voies des fortifications.",
      "Vers midi, la circulation a été rétablie. Les dégâts matériels causés par cet accident sont assez importants.",
      "M. Mittelhauser, commissaire spécial de police de la gare du Nord, a ouvert une enquête avec les ingénieurs de la Compagnie pour rechercher les causes de cet accident, que l'on croit dû à une rupture d'aiguille."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits Divers",
    "title": "Mort mystérieuse",
    "summary": "Le corps d'Adrienne M., vingt-deux ans, a été découvert dans le quartier de Clignancourt. Face aux circonstances suspectes du décès, la justice a ordonné une autopsie pour faire la lumière sur cette affaire.",
    "paragraphs": [
      "M. Harpin, commissaire de police du quartier de Clignancourt, a envoyé à la Morgue, hier matin, le cadavre d'une jeune fille nommée Adrienne M..., âgée de vingt-deux ans, dont les parents sont domiciliés rue Damrémont.",
      "Les circonstances de la mort sont suspectes à ce point que, dans le quartier, les commérages vont leur train. Nous ne nous ferons l'écho des bruits qui circulent au sujet de cette mort et nous attendrons le résultat de l'autopsie qui va être faite par un médecin légiste désigné par le Parquet."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un étrange personnage",
    "summary": "Un individu a été interpellé dans un omnibus près du square Combes en possession de titres de valeur. Il devait les transporter à Londres. Le magistrat instructeur a été saisi de l'affaire.",
    "paragraphs": [
      "Un individu a été arrêté dans un omnibus près du square Combes. L'homme fut trouvé porteur de titres d'une valeur de 60 000 francs, qu'il était chargé de porter à Londres à une tierce personne, dans un but qu'il avait l'intention de dévoiler.",
      "Il a été mis à la disposition de M. Danion, juge d'instruction, qui l'interrogera aujourd'hui. Il a choisi comme avocat Me Mentaux."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits Divers",
    "title": "Un chameau récalcitrant",
    "summary": "Le transfert d'un jeune chameau rue des Pyrénées a tourné à l'incident lorsqu'une fillette a été renversée par l'animal. La peur causée par le passage d'un tramway a permis de maîtriser la bête.",
    "paragraphs": [
      "Deux hommes au service d'un dompteur dont la ménagerie est installée à la fête du boulevard étaient chargés d'aller chercher dans un autre établissement un jeune chameau. Alors qu'ils le ramenaient hier matin rue des Pyrénées, l'animal, pris d'un subit caprice, s'arrêta net et refusa d'avancer.",
      "Malgré tous leurs efforts, ses conducteurs ne purent le déterminer à faire un pas. Pendant près d'une demi-heure, l'animal demeura planté comme un roc.",
      "Profitant d'un instant, le chameau s'enfuit au pas de course, suivi par ses deux gardiens. Effrayée, une fillette de onze ans, Mathilde Vernier, qui traversait la chaussée, vint se jeter dans les jambes de l'animal qui la renversa. La fillette s'en est tirée avec quelques contusions.",
      "Finalement, l'arrivée d'un tramway à air comprimé effraya l'animal, permettant aux gardiens de le ressaisir."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits Divers",
    "title": "Le fou et le pigeon",
    "summary": "Un ancien pensionnaire de l'asile Sainte-Anne, en proie au délire, s'est défenestré après avoir été distrait par la présence d'un pigeon à sa fenêtre. La mort a été immédiate.",
    "paragraphs": [
      "Un employé de commerce nommé Dorange, âgé de cinquante-deux ans, était sorti récemment de l'asile Sainte-Anne. Se figurant qu'il était poursuivi, il s'était déjà jeté dans la Seine d'où il avait été retiré à grand'peine.",
      "Hier, alors qu'il était en compagnie de sa femme, un pigeon vint se poser à la fenêtre. Saisi d'un accès de folie, l'homme cria : 'Tu vois ce volatile, il est venu pour me narguer'. Puis, s'élançant vers la fenêtre, il voulut s'emparer du pigeon qui s'envola.",
      "Avant que sa femme, affolée, pût l'en empêcher, il enjamba la barre d'appui et vint tomber comme une masse sur la chaussée. La mort a été instantanée."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits Divers",
    "title": "Rixe meurtrière",
    "summary": "Arthur Gaultiras, ouvrier peintre, a été grièvement blessé d'un coup de couteau au flanc par deux individus, rue d'Alésia. La victime a été transportée à l'hôpital Broussais. M. Baissac, commissaire, enquête.",
    "paragraphs": [
      "Un ouvrier peintre en voitures, Arthur Gaultiras, fut attaqué dans un débit de boisson de la rue d'Alésia par deux journaliers, Antide Léautier et Calvitte. Pour éviter la rixe, Gaultiras prit la fuite, mais fut poursuivi et frappé cruellement.",
      "Des gardiens de la paix accoururent aux cris de la victime. L'un des bandits frappa lâchement le peintre d'un coup de couteau au flanc droit avant de prendre la fuite avec son complice par une voie détournée.",
      "La victime a été transportée à l'hôpital Broussais dans un état très grave. M. Baissac, commissaire de police, a ouvert une enquête."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Faits Divers",
    "title": "Incendie à Toulon",
    "summary": "Un incendie a ravagé ce matin les Forges et Chantiers de la Méditerranée à La Seyne. Les dégâts s'élèvent à près de cent mille francs. L'origine du sinistre demeure incertaine, peut-être due à des cotons gras.",
    "paragraphs": [
      "Un violent incendie a éclaté ce matin, vers trois heures, dans le grand hangar de l'ajustage aux Forges et Chantiers de la Méditerranée, à la Seyne.",
      "L'alarme fut donnée par le gardien et les officiers du yacht impérial russe Standart. Les ouvriers et le génie maritime se joignirent aux secours. L'atelier a été entièrement détruit. Les dégâts s'élèvent à une centaine de mille francs.",
      "On ignore les causes exactes du sinistre, mais on suppose que le feu a couvé dans un tas de cotons gras."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Social",
    "title": "Bulletin du travail : Les mineurs et les cigarières",
    "summary": "Les mineurs du Nord et du Pas-de-Calais obtiennent une revalorisation salariale. Parallèlement, 600 cigarières bordelaises sont en grève et négocient leurs conditions de reprise à la Préfecture.",
    "paragraphs": [
      "Les mineurs du Nord et du Pas-de-Calais, réunis à Arras, ont obtenu une augmentation importante des salaires pour toutes les catégories d'ouvriers du fond, concernant la prime qui est actuellement de 10 %.",
      "Par ailleurs, les cigarières de Bordeaux, en grève au nombre de 600, sont allées à la Préfecture pour négocier leurs conditions de reprise du travail."
    ]
  },
  {
    "id": 29,
    "page": 4,
    "category": "Courses hippiques",
    "title": "Résultats des courses à Smyrne et Prix d'Esouiex",
    "summary": "Vicomtesse s'impose dans le prix de 6 000 francs. Au handicap d'Esouiex, Maestro décroche la victoire devant Oural et Harrar, au terme d'une épreuve disputée sur 3 000 mètres.",
    "paragraphs": [
      "Prix de 6 000 francs, 3 000 mètres : 1. Vicomtesse à M. E. Cotin (Smyrne, Ch. Childe, Pétersbourg, A. Carter). Non placés : Saint-Marc, Isba. Gagné de quatre longueurs, deux longueurs du deuxième au troisième.",
      "Prix d'Esouiex. Handicap, 3 ans et au-dessus, 6 000 francs, 3 000 mètres : 1. Maestro à M. J. Prat (E. Watkins); 2. Oural (T. Lane); 3. Harrar (Dodd). Non placés : Framboise III, Valteline, Hortensia, Bleu, Sénateur II, Heme III, Haarlem. Gagné d'une demi-longueur, une encolure du deuxième au troisième."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Courrier des Théâtres",
    "title": "Actualités de la Comédie-Française et de l'Ambigu",
    "summary": "La Comédie-Française prépare ses matinées de jeudi. Le succès de Mam'selle Son-Cœur s'exporte, tandis que Mme Réjane poursuit ses représentations triomphales de Madame Sans-Gêne à Vienne.",
    "paragraphs": [
      "À la Comédie-Française, les matinées du jeudi reprendront le 9 novembre. Le conseil judiciaire s'est réuni hier sous la présidence de M. Jules Claretie pour résoudre une question relative à la liquidation de l'affaire Coquelin, qui a été tranchée sans difficulté.",
      "Dimanche soir, ce théâtre donnera la cinq cent deuxième représentation du Monde où l'on s'ennuie. Rappelons que le pauvre Pailleron n'a pu assister à la cinq cent unième.",
      "Mam'selle Son-Cœur, qui s'annonce à l'Ambigu comme un vrai succès, ne tardera pas à commencer son tour du monde, avec des propositions venant d'Angleterre et d'Amérique.",
      "Mme Réjane a quitté Berlin après de belles représentations et se rend à Vienne. Elle est retournée à Berlin à la demande de l'Empereur d'Allemagne pour jouer notamment 'Madame Sans-Gêne'."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Concerts et Divertissements",
    "title": "Spectacles au Nouveau-Cirque et au Cirque Medrano",
    "summary": "Au Nouveau-Cirque, une pantomime nautique féerique au pôle Nord captive le public, tandis que le Cirque Medrano enchaîne la seconde série de son grand concours international de lutte.",
    "paragraphs": [
      "Ce soir, au Nouveau-Cirque, a lieu la première représentation de « Au fond de l'eau », une pantomime nautique à grand spectacle. Le cirque propose un voyage au pôle Nord mettant en scène des ours blancs acrobates, des phoques jongleurs et Oscar, le célèbre morse pantomimiste.",
      "Au Cirque Medrano, l'affiche propose ce soir la deuxième série du concours international de lutte."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Feuilleton",
    "title": "Le Lieutenant Jacques Gratel - Troisième partie",
    "summary": "La marquise de Montalais et sa petite-fille Noëla s'inquiètent du sort de Gontran et envisagent un voyage décisif à Paris pour résoudre les tourments qui pèsent sur leur famille.",
    "paragraphs": [
      "Le roman inédit se poursuit avec le chapitre « Noëla et sa Grand'mère ». La marquise de Montalais, en proie à une vive émotion après avoir reçu une lettre de Gontran, est rejointe par sa petite-fille Noëla.",
      "Noëla tente de consoler sa grand-mère et évoque le mystère qui pèse sur leur famille, notamment le souvenir douloureux de la dernière visite de son oncle Gontran et la crise qui a frappé son grand-père.",
      "Dans une scène dramatique, elles discutent de la nécessité d'un voyage à Paris pour y retrouver Gontran, tout en essayant de convaincre le grand-père de quitter Angerville sous un prétexte médical."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Les Sports",
    "title": "Records et compétitions cyclistes",
    "summary": "Muller établit un nouveau record à motocycle entre Paris et Turin. La saison cycliste s'anime avec une nouvelle coupe offerte à Lille et un match final au Vélodrome lillois.",
    "paragraphs": [
      "Muller a établi le record Paris-Turin à motocycle en cinquante-sept heures, reliant la porte de Picpus à la capitale du Piémont.",
      "M. Paul Chauchiird, vice-président de l'Automobile-Club de Nice, a offert une nouvelle coupe pour une course annuelle de 100 kilomètres à Lille.",
      "Le Vélodrome lillois clôture sa saison par un match à quatre mettant en lice Jaequelin, Meyers, Grogna et Lerique."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Courrier orphéonique",
    "title": "Concours musicaux et nouvelles des sociétés",
    "summary": "L'actualité musicale est riche : préparation d'un concours international à Puteaux, annonce d'un festival à Flers pour 1900 et ouverture d'un concours de composition pour l'Exposition universelle.",
    "paragraphs": [
      "Un grand concours international d'orphéons sera organisé à Puteaux. La commission d'organisation a commencé ses travaux pour les épreuves de musique d'harmonie, de symphonie et de fanfares.",
      "Un comité vient de se former à Flers pour un concours de musique prévu pour la Pentecôte 1900.",
      "L'Association des jurés a ouvert un second concours de composition musicale pour l'Exposition universelle, avec des prix en espèces répartis selon les divisions."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Communications diverses",
    "title": "Réunions et conférences parisiennes",
    "summary": "L'agenda parisien annonce le bal de l'école Arago, une conférence du docteur Verneau sur les populations d'Afrique australe et l'assemblée générale des comptables.",
    "paragraphs": [
      "L'Association amicale des anciens élèves de l'École municipale supérieure Arago donnera un bal le 4 novembre au Salon des Familles.",
      "Le docteur Verneau donnera demain une conférence avec projections sur les Boers et les indigènes de l'Afrique australe à l'Hôtel de Ville.",
      "L'Union des comptables tiendra son assemblée générale demain à la Bourse du Travail."
    ]
  }
];
