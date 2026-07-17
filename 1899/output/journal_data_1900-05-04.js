// Date: 1900-05-04
// Restauration Pass: 2
// Base de données complète des articles de presse du 1900-05-04 (Version Restaurée, 41 articles)
const JOURNAL_ARTICLES = [
  {
    "id": 1,
    "page": 2,
    "category": "Guerre des Boers",
    "title": "La situation militaire en Afrique du Sud",
    "summary": "Des revers britanniques sont signalés : le général Dickson a perdu ses approvisionnements face aux Boërs, tandis que les forces d'Hamilton se replient sous la pression de De Wet et Delarey.",
    "paragraphs": [
      "Londres, 3 mai — Il est rapporté que, lors du combat du 28 avril, la cantine personnelle du général Dickson et les voitures servant au transport des approvisionnements d'eau pour la brigade sont tombées aux mains des Boërs.",
      "L'arrière-garde du général Dickson a dû se retirer sous une vive fusillade, forçant le général Hamilton à se replier précipitamment sur Thabanchu.",
      "À l'est de Thabanchu, le bulletin officiel annonce que les fédéraux ont fait neuf prisonniers et capturé dix chevaux le 28 avril. Le 30 avril, des escarmouches près de Brandfort ont causé des pertes aux Anglais.",
      "Le général De Wet a contraint les Anglais à se retirer aux abords de Thabanchu. De son côté, Delarey a chassé les Anglais jusqu'à leurs retranchements près de Brandfort, faisant dix-sept prisonniers.",
      "La première division, commandée par le général Pole-Carew, est partie de Bloemfontein ce matin. Le commandant Ollivier s'est replié sur Smithfield."
    ]
  },
  {
    "id": 2,
    "page": 2,
    "category": "Siège de Mafeking",
    "title": "La menace sur Mafeking",
    "summary": "À Kimberley, les autorités redoutent la position stratégique des Boërs à Phokwani. Sir Alfred Milner confirme que le soulagement de Mafeking reste la priorité absolue des forces britanniques.",
    "paragraphs": [
      "Kimberley, 2 mai — Le chef indigène de Taungs signale que l'attitude des Boërs est menaçante. Ils occupent à Phokwani une position stratégique d'où ils s'opposeront au mouvement en avant des troupes anglaises.",
      "Sir Alfred Milner a écrit au maire de Kimberley pour assurer que la délivrance de Mafeking demeure une préoccupation majeure des autorités militaires."
    ]
  },
  {
    "id": 3,
    "page": 2,
    "category": "Préparatifs de Défense",
    "title": "La stratégie de résistance boëre",
    "summary": "Le gouvernement boër renforce ses positions dans le district de Lydenburg et planifie l'extension d'une ligne ferroviaire pour établir un quartier général, annonçant une campagne prolongée.",
    "paragraphs": [
      "Le gouvernement boër manifeste l'intention de prolonger la résistance en faisant construire des fortifications dans le district de Lydenburg.",
      "Il est prévu de prolonger le chemin de fer de Selati vers Lydenburg afin d'établir un quartier général de résistance, rendant ainsi la campagne plus longue et difficile."
    ]
  },
  {
    "id": 4,
    "page": 2,
    "category": "Faits Divers",
    "title": "Explosion de Johannesburg",
    "summary": "L'enquête sur l'explosion de Johannesburg progresse à Pretoria avec l'arrestation de M. Minior pour complicité et assassinat, ainsi qu'un ressortissant américain lié à l'affaire.",
    "paragraphs": [
      "Pretoria, 1er mai — M. Minior a été arrêté sous l'inculpation de complicité dans l'affaire de l'explosion de Johannesburg et doit répondre d'une accusation d'assassinat. Un Américain a également été appréhendé pour le même motif."
    ]
  },
  {
    "id": 5,
    "page": 2,
    "category": "Politique",
    "title": "À la Chambre des Communes",
    "summary": "Aux Communes, M. Wyndham justifie l'hommage de lord Methuen au colonel Villebois-Mareuil, tandis que M. Brodrick clarifie les rapports diplomatiques avec la France après le discours de M. Delcassé.",
    "paragraphs": [
      "Londres, 3 mai — À la Chambre des communes, un député a interrogé M. Wyndham sur le monument élevé par lord Methuen à la mémoire du colonel Villebois-Mareuil. M. Wyndham a répondu qu'un brave soldat peut élever un monument à un autre brave soldat.",
      "Sur une autre question, M. Brodrick a précisé que le discours de M. Delcassé au Sénat, le 3 avril, ne mentionne aucune concession de l'Angleterre à la France."
    ]
  },
  {
    "id": 6,
    "page": 2,
    "category": "Mission Boër",
    "title": "Les délégués boërs et la diplomatie européenne",
    "summary": "En mission à Bruxelles, les représentants boërs constatent le refus d'intervention des puissances européennes. Ils placent désormais leurs espoirs dans le soutien populaire des États-Unis pour poursuivre leur lutte.",
    "paragraphs": [
      "Bruxelles, 3 mai — Des membres de la mission boër ont déclaré qu'aucune puissance européenne n'est disposée à intervenir dans le conflit. Ils comptent se rendre aux États-Unis, où les sympathies pour les Boërs sont unanimes.",
      "Ils affirment que la lutte se poursuivra sans trêve ni merci."
    ]
  },
  {
    "id": 7,
    "page": 2,
    "category": "Élections",
    "title": "Les élections municipales à Paris",
    "summary": "Le journal dresse le panorama complet des candidatures pour les élections municipales dans les 8e, 9e, 10e, 11e, 12e, 13e et 14e arrondissements, marquant la lutte entre républicains, socialistes et nationalistes.",
    "paragraphs": [
      "Le journal détaille les candidatures pour les 8e, 9e, 10e, 11e, 12e, 13e et 14e arrondissements, mettant en lumière l'affrontement entre les candidats républicains, socialistes et nationalistes."
    ]
  },
  {
    "id": 8,
    "page": 2,
    "category": "Faits Divers",
    "title": "Catastrophe minière à Schofield",
    "summary": "Une effroyable catastrophe a frappé les mines de Schofield, où plus de 200 cadavres ont été retirés. L'enquête privilégie l'hypothèse d'une utilisation clandestine de poudre brisante par des mineurs finlandais.",
    "paragraphs": [
      "Schofield, 3 mai — Plus de 200 cadavres ont été retirés des mines. Si la cause exacte de la catastrophe n'est pas encore précisée, une hypothèse sérieuse suggère l'usage secret de poudre brisante par des mineurs finlandais."
    ]
  },
  {
    "id": 9,
    "page": 2,
    "category": "Faits Divers",
    "title": "Explosion de naphte à Bruxelles",
    "summary": "Un grave accident est survenu à Bruxelles : une violente explosion de naphte chez un constructeur d'appareils de distillation a grièvement blessé un nommé Léman, dont le pronostic vital est fortement engagé.",
    "paragraphs": [
      "Bruxelles, 3 mai — Une violente explosion de naphte s'est produite chez un constructeur d'appareils de distillation. Le nommé Léman a été grièvement blessé et les médecins désespèrent de pouvoir le sauver."
    ]
  },
  {
    "id": 10,
    "page": 2,
    "category": "Santé publique",
    "title": "La peste en Égypte",
    "summary": "La situation sanitaire se dégrade en Égypte. Le port de Port-Saïd a été officiellement déclaré infecté par la peste, tandis que des cas suspects sont signalés dans la région de Souakim.",
    "paragraphs": [
      "Port-Saïd, 3 mai — Le port est déclaré infecté suite à la détection de cas de peste. Des cas suspects sont également signalés à Souakim."
    ]
  },
  {
    "id": 11,
    "page": 2,
    "category": "Politique étrangère",
    "title": "La France et la Turquie",
    "summary": "Le gouvernement français a enfin obtenu de la Sublime Porte les garanties diplomatiques indispensables à la poursuite du projet de chemin de fer de Damas, assurant ainsi ses intérêts dans la région.",
    "paragraphs": [
      "Londres, 3 mai — Selon des informations parvenues ce jour, la France aurait obtenu de la Sublime Porte les garanties diplomatiques nécessaires pour assurer la construction du chemin de fer de Damas."
    ]
  },
  {
    "id": 12,
    "page": 2,
    "category": "Faits Divers",
    "title": "Mutinerie sur le vapeur Escano",
    "summary": "Un drame maritime s'est joué au large des côtes de Lepte : l'équipage du vapeur américain Escano s'est révolté, assassinant les officiers avant de saborder le navire.",
    "paragraphs": [
      "Londres, 3 mai — Une dépêche télégraphique annonce la mutinerie sanglante survenue à bord du vapeur américain Escano. Les mutins, après avoir massacré les officiers, ont sabordé le bâtiment sur la côte de Lepte."
    ]
  },
  {
    "id": 13,
    "page": 2,
    "category": "Politique étrangère",
    "title": "Visite de François-Joseph à Berlin",
    "summary": "La capitale impériale s'apprête à recevoir l'empereur François-Joseph. Les préparatifs témoignent d'une sobriété voulue, orchestrée par le conseil municipal de Berlin.",
    "paragraphs": [
      "Berlin, 3 mai — Les préparatifs officiels pour la visite de l'empereur François-Joseph vont bon train. La décoration des rues demeure modeste, tandis qu'un accueil solennel est prévu par le conseil municipal de la cité."
    ]
  },
  {
    "id": 14,
    "page": 2,
    "category": "Actualité internationale",
    "title": "Troubles en Pologne",
    "summary": "Une vive tension ouvrière à Varsovie a nécessité l'intervention de la cavalerie. Six mille manifestants s'opposaient violemment à l'embauche de main-d'œuvre russe.",
    "paragraphs": [
      "Varsovie — Une manifestation d'une rare violence a rassemblé six mille ouvriers polonais, protestant contre l'arrivée de main-d'œuvre russe sur le chantier de construction d'une école militaire. La cavalerie a dû intervenir, causant plusieurs blessés parmi les émeutiers."
    ]
  },
  {
    "id": 15,
    "page": 2,
    "category": "Faits Divers",
    "title": "Mutinerie au Congo",
    "summary": "La révolte des travailleurs indigènes sur les chantiers de Chinkassa a été matée par les troupes coloniales. Le bilan fait état du décès tragique d'un maçon espagnol.",
    "paragraphs": [
      "Bruxelles, 3 mai — Une mutinerie d'indigènes a éclaté sur les chantiers de Chinkassa. Les troupes coloniales ont dû déloger les rebelles par la force, après des affrontements ayant provoqué la mort d'un maçon espagnol."
    ]
  },
  {
    "id": 16,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Officiers étrangers dans l'armée française",
    "summary": "Le gouvernement français autorise des officiers grecs à effectuer un stage d'instruction au sein de nos régiments, une pratique partagée avec le Japon, la Serbie, la Suisse et l'Uruguay pour notre prestige.",
    "paragraphs": [
      "Le roi de Grèce a obtenu, de haute lutte, l'autorisation pour plusieurs officiers grecs d'effectuer un stage prolongé dans les régiments de l'armée française, afin d'y étudier nos méthodes de manœuvres.",
      "Il convient de noter que d'autres nations, soucieuses de parfaire leur instruction tactique, telles que le Japon, la Serbie, la Suisse et l'Uruguay, envoient également régulièrement des stagiaires au sein de nos casernements."
    ]
  },
  {
    "id": 17,
    "page": 2,
    "category": "Nouvelles militaires",
    "title": "Lutte contre l'alcoolisme dans l'Armée",
    "summary": "Le général de Galliffet, ministre de la Guerre, signe une circulaire décisive prohibant la vente d'eaux-de-vie et apéritifs dans les cantines afin de préserver la vigueur et la discipline des soldats.",
    "paragraphs": [
      "Le ministre de la Guerre, M. le général de Galliffet, vient de faire paraître une note formelle ordonnant l'interdiction absolue de la vente d'eaux-de-vie et de tous apéritifs frelatés dans les cantines militaires.",
      "Cette mesure de salubrité publique, dictée par des impératifs stricts d'hygiène et de discipline, vise à purger nos casernes des méfaits de l'alcoolisme qui menacent la santé de nos troupes."
    ]
  },
  {
    "id": 18,
    "page": 2,
    "category": "Faits Divers",
    "title": "Famille empoisonnée à Paris",
    "summary": "Un drame domestique s'est noué à Paris : une famille, après avoir ingéré des sardines en conserve avariées, a été frappée d'un empoisonnement sévère. Le père a succombé, et le procureur a ouvert une enquête.",
    "paragraphs": [
      "Un triste drame domestique vient de se produire dans un ménage parisien. Trois membres d'une même famille ont été terrassés par un empoisonnement foudroyant après avoir consommé des sardines de conserve reconnues avariées.",
      "Malgré les soins empressés du corps médical, le chef de famille a succombé à cette intoxication fatale. Une enquête judiciaire a été immédiatement ouverte par le parquet pour déterminer les responsabilités de ce funeste repas."
    ]
  },
  {
    "id": 19,
    "page": 2,
    "category": "Faits Divers",
    "title": "Femme étranglée à Asnières",
    "summary": "Le cadavre d'une femme, victime d'un crime odieux, a été repêché dans la Seine à Gennevilliers. Le corps présentait des marques évidentes de strangulation et des blessures infligées par une arme blanche.",
    "paragraphs": [
      "Le corps sans vie d'une femme, victime manifeste d'un crime odieux, a été repêché ce matin dans les eaux de la Seine, à la hauteur de Gennevilliers.",
      "Les premières constatations médico-légales révèlent que la malheureuse portait des traces indubitables de strangulation, assorties de blessures profondes occasionnées par une arme blanche. L'identité de la victime demeure, pour l'heure, inconnue."
    ]
  },
  {
    "id": 20,
    "page": 2,
    "category": "Faits Divers",
    "title": "Vengeance criminelle à Alfortville",
    "summary": "Un incendie volontaire a réduit en cendres le pavillon de Mme Delperat à Alfortville. Ce sinistre criminel est attribué à la bande du malfaiteur Courtot, cherchant à intimider une témoin clé de leurs méfaits.",
    "paragraphs": [
      "Un incendie volontaire a été allumé cette nuit, détruisant intégralement un pavillon appartenant à Mme Delperat, sise à Alfortville.",
      "Les autorités policières ne font guère mystère de l'origine criminelle de cet acte, qui tiendrait lieu de vengeance de la part de la bande de cambrioleurs dirigée par le nommé Courtot. La propriétaire incendiée, qui est le principal témoin à charge contre ce groupuscule, semble avoir été visée pour la contraindre au silence."
    ]
  },
  {
    "id": 21,
    "page": 3,
    "category": "Faits divers",
    "title": "Un voleur de douze ans",
    "summary": "Le jeune Georges Catarol, âgé de douze ans, a été arrêté dans le quartier des Ternes après avoir volé une centaine de francs chez un marchand de vins. Réputé vicieux et multirécidiviste, il est désormais au Dépôt.",
    "paragraphs": [
      "M. Chapel, commissaire de police du quartier des Ternes, a mis hier matin en état d'arrestation le jeune Georges Catarol, âgé de douze ans, demeurant rue de l'Arc-de-Triomphe, qui avait volé la veille, chez un marchand de vins de la rue Demours, un porte-monnaie renfermant une centaine de francs.",
      "Il s'était rendu à l'Exposition, où il avait dépensé cinquante francs ; il avait acheté ensuite une paire de bottines pour vingt francs et avait caché le reste de la somme dans un vieux fauteuil.",
      "Georges, fils d'un honorable professeur, est un enfant vicieux. C'est la quatrième fois qu'il est arrêté pour vol, et chaque fois il a dérobé des sommes importantes. Malgré son apparence chétive et sa fausse timidité, il a trompé les soupçons, et il a fallu qu'il soit pris sur le fait pour être appréhendé.",
      "Sa famille refusant de le reprendre et de dédommager le plaignant, Catarol a été envoyé au Dépôt."
    ]
  },
  {
    "id": 22,
    "page": 3,
    "category": "Faits divers",
    "title": "Cinq cent quarante-six kilomètres à pied",
    "summary": "Une famille bretonne, composée des parents et de huit enfants, a été découverte exténuée dans un terrain vague quai de la Gare, après avoir parcouru à pied le trajet depuis Pleyber-Christ pour rejoindre Paris.",
    "paragraphs": [
      "Deux gardiens de la paix qui, hier matin, vers cinq heures, passaient quai de la Gare, aperçurent dans un terrain vague situé en bordure du quai une dizaine de personnes qui semblaient camper en cet endroit.",
      "Ils s'approchèrent et virent là un homme et une femme d'un certain âge, entourés de huit enfants qui semblaient tous mourir de fatigue. C'est en vain qu'ils les interrogèrent ; les vagabonds leur répondirent dans un langage incompréhensible.",
      "Un magistrat eut bien du mal à tirer quelque éclaircissement de ces malheureux. Tout ce qu'il put comprendre, c'est que ces gens-là étaient des Bretons venus pour essayer de gagner leur vie à Paris pendant l'Exposition.",
      "Originaire de Pleyber-Christ, dans le fond du Finistère, Morvan-Legoff, c'est le nom du père de famille, âgé d'une cinquantaine d'années, était parti à pied pour Paris, emmenant sa femme et tous ses enfants, qu'on croit être au nombre de quinze. Huit seulement d'entre eux étaient avec lui.",
      "Comme Legoff et les siens ne s'expriment qu'en dialecte breton et ne parlent pas un mot de français, il a été bien difficile de savoir au juste ce qui les séparait de Paris et à la suite de quelles circonstances ils ont perdu les autres membres de leur famille.",
      "Les malheureux ont été dirigés, par les soins de M. Rocher, sur la préfecture de police qui se chargera de les rapatrier."
    ]
  },
  {
    "id": 23,
    "page": 3,
    "category": "Faits divers",
    "title": "Agents et Rôdeurs",
    "summary": "Une violente altercation a opposé des agents de police à une bande de rôdeurs avenue d'Italie. Deux individus, Justin Halley et Ludovic Huprot, ont été interpellés après avoir agressé un jeune apprenti.",
    "paragraphs": [
      "Dans la matinée d'hier, vers dix heures, un petit garçon d'une douzaine d'années, le jeune M. G., travaillant comme apprenti chez un monteur en bronze du quartier de l'Isle, passait avenue d'Italie, allant faire une commission pour son patron.",
      "Soudain, deux individus se ruèrent sur lui et, tandis que l'un d'eux le maltraitait et le serrait à la gorge, l'autre lui enlevait sa montre, sa chaîne et son porte-monnaie.",
      "Attiré par les cris que poussait l'enfant, le gardien de la paix du treizième arrondissement accourut et barra la route aux malfaiteurs. Ceux-ci se ruèrent sur lui, le terrassèrent et le couvrirent de coups.",
      "Deux autres agents, les gardiens Lardenois et Simonin, intervinrent à leur tour et appréhendèrent les deux rôdeurs qui, secondés par quelques-uns de leurs acolytes, entamèrent avec eux une lutte acharnée au cours de laquelle Simonin a été cruellement mordu au bras et à la main, et Lardenois grièvement blessé.",
      "Fort heureusement, huit de leurs collègues accoururent à leur aide. À la vue de ce renfort, la bande de souteneurs s'enfuit de tous côtés. Seuls les deux individus que les agents, malgré leurs blessures, n'avaient pas lâchés, demeurèrent sur le théâtre de la bagarre. Après une résistance des plus vives, ils furent maîtrisés et mis à la disposition de M. Rocher, commissaire de police.",
      "Ils ont déclaré se nommer Justin Halley et Ludovic Huprot, âgés de dix-huit ans, mais le magistrat est persuadé qu'ils ont caché l'un et l'autre leur véritable identité."
    ]
  },
  {
    "id": 24,
    "page": 3,
    "category": "Faits divers",
    "title": "Les mésaventures de Jeannot",
    "summary": "Arrivé du Limousin pour l'Exposition, Jean Granet, dit Jeannot, s'est fait escroquer par deux individus dans le Jardin des Plantes. Prenant le jeune homme pour un complice, la police l'a un temps interpellé.",
    "paragraphs": [
      "Jean Granet, dit Jeannot, est un jeune homme de dix-huit ans qui est venu récemment du Limousin pour admirer l'Exposition. Dans l'après-midi d'hier, il se promenait dans le Jardin des Plantes lorsqu'un individu lui adressa la parole.",
      "La conversation s'engagea. Jeannot raconta qu'il était venu dans la capitale pour voir l'Exposition, mais qu'il ne manquait pas de courage et ne demandait pas mieux que de travailler. L'individu lui proposa alors un service rémunéré 200 francs par mois.",
      "Tandis qu'ils étaient attablés dans un café, un troisième individu intervint en jouant la comédie d'une livraison de sacs de farine pour laquelle il manquait de l'argent. Le prétendu patron demanda alors à Jeannot d'avancer la somme.",
      "Le jeune Limousin, trop heureux d'être agréable, sortit son portefeuille et versa la somme demandée. Quelques instants plus tard, alors que les deux filous avaient disparu, Jeannot fut pris pour un complice par le concierge d'un immeuble et arrêté par des gardiens de la paix.",
      "Tout s'expliqua bientôt au commissariat, mais les deux adroits filous sont activement recherchés."
    ]
  },
  {
    "id": 25,
    "page": 3,
    "category": "Faits divers",
    "title": "La Jalousie",
    "summary": "Par jalousie amoureuse, une jeune femme nommée Louise V. a agressé à coups de couteau sa rivale, Marie B., dans la rue. La victime a été conduite à l'hôpital de la Pitié, mais ses jours ne sont pas en danger.",
    "paragraphs": [
      "Deux jeunes femmes de dix-sept et dix-huit ans, Marie B., domiciliée rue Nationale, et Louise V., demeurant rue Jeanne-d'Arc, avaient depuis quelque temps le même amoureux.",
      "La seconde, apprenant qu'elle avait une heureuse rivale, résolut de se venger. Avant-hier soir, elle alla attendre Marie B. à quelques pas de son domicile et, dès qu'elle l'aperçut, se rua sur elle et lui porta deux coups de couteau dans le dos.",
      "La victime, ensanglantée, a été conduite à l'hôpital de la Pitié où l'on constata que ses blessures n'avaient aucun caractère de gravité. Louise V. a été arrêtée et mise à la disposition de M. Yendt, commissaire."
    ]
  },
  {
    "id": 26,
    "page": 3,
    "category": "Faits divers",
    "title": "Autour de Paris : accidents et crimes",
    "summary": "La banlieue parisienne est le théâtre d'une série de drames : accidents mortels à Levallois et Argenteuil, agressions violentes à Saint-Denis et Pantin, ainsi qu'un drame conjugal tragique à Rambouillet.",
    "paragraphs": [
      "Levallois-Perret. Un jeune enfant de sept ans, Emmanuel Bordes, est mort après avoir été écrasé par une voiture de charbonnier.",
      "Argenteuil. M. François Bernay, cultivateur, a été violemment heurté par un lourd tombereau et transporté à l'hôpital dans un état très grave.",
      "Plaine-Saint-Denis. Un ouvrier terrassier, Pierre, a été agressé par une bande de rôdeurs qui l'ont dévalisé et blessé de plusieurs coups de couteau.",
      "Pantin. Un ouvrier chaudronnier, Octave Cedelle, a été atteint à la tête par deux coups de revolver tirés par un individu connu sous le nom de Bébert.",
      "Vitry-sur-Seine. Le chien de Mme Duclos a été atteint de la rage et a mordu deux personnes qui se sont rendues à l'Institut Pasteur.",
      "Pontoise. Des cambrioleurs ont dévalisé une propriété à Franconville, emportant bijoux et titres.",
      "Rambouillet. Mme Eugénie Langlois, âgée de vingt et un ans, s'est suicidée en se jetant dans une rivière avec sa fillette de dix mois, après une scène conjugale.",
      "La Ferté-Alais. Un incendie a détruit quatre hectares de bois à D'Huison, probablement dû à l'imprudence d'un fumeur."
    ]
  },
  {
    "id": 27,
    "page": 3,
    "category": "Social",
    "title": "Bulletin du Travail - Les grèves dans le Nord",
    "summary": "Le mouvement gréviste s'intensifie dans le Nord, touchant de nombreux ateliers et filatures. À Tourcoing, une tentative de médiation sous l'égide du préfet est en cours pour résoudre le conflit social.",
    "paragraphs": [
      "À Lille, plusieurs ateliers et filatures ont cessé le travail, les ouvriers réclamant des augmentations de salaire ou de meilleures conditions d'exercice.",
      "À Roubaix et Tourcoing, la grève s'étend à trente établissements, comptant environ 2 000 ouvriers. Le maire de Tourcoing a proposé une entrevue sous la présidence du préfet du Nord, laquelle a été acceptée par les patrons sous certaines conditions."
    ]
  },
  {
    "id": 28,
    "page": 3,
    "category": "Faits divers",
    "title": "Faits divers dans les départements",
    "summary": "La chronique départementale rapporte plusieurs accidents du travail, des sinistres par le feu, et un double meurtre particulièrement atroce survenu à Pithiviers dans l'usine de M. Émile Merlet.",
    "paragraphs": [
      "Beauvais : Un charretier, Victor Lefebvre, est mort écrasé sous les roues de sa voiture.",
      "Compiègne : Un incendie a détruit une écurie à Caisnes, causant plus de 7 000 francs de pertes.",
      "Pithiviers : Un malfaiteur nommé Trokimo a tué deux ouvriers, Boureille et Després, dans l'usine de M. Émile Merlet lors d'une tentative de vol.",
      "Chartres : Un incendie accidentel a détruit la maison d'habitation de M. Larain à Saint-Georges-sur-Eure.",
      "Nogent-le-Rotrou : Un incendie a détruit des bâtiments de la ferme de Maison-Jorry. Un domestique a été blessé lors du sauvetage."
    ]
  },
  {
    "id": 29,
    "page": 3,
    "category": "Social",
    "title": "Enfants abandonnés à Cherbourg",
    "summary": "La gendarmerie de Cherbourg a découvert cinq enfants vivant dans une misère extrême, abandonnés par leur mère, la femme Lecarpentier. Ils vont être admis à l'hospice.",
    "paragraphs": [
      "Cinq enfants, abandonnés par leur mère, la femme Lecarpentier, vivaient de mendicité dans une masure. La gendarmerie a constaté leur état misérable et les enfants vont être admis à l'hospice."
    ]
  },
  {
    "id": 30,
    "page": 4,
    "category": "Politique",
    "title": "Proposition de réforme des statuts",
    "summary": "Soixante-cinq membres du Petit Parisien se sont réunis afin de formuler une proposition visant à modifier les statuts de l'organe et à introduire plusieurs réformes internes.",
    "paragraphs": [
      "Une proposition a été déposée par soixante-cinq membres du Petit Parisien en vue de la modification des statuts et de la mise en place de quelques réformes."
    ]
  },
  {
    "id": 31,
    "page": 4,
    "category": "Spectacles",
    "title": "Théâtres et Concerts",
    "summary": "Le théâtre Déjazet active les répétitions de « Norah la dompteuse », tandis qu'à l'affiche du Vaudeville, le public pourra applaudir « La Robe rouge » ce soir et « Zaza » lors des prochaines représentations du week-end.",
    "paragraphs": [
      "Au théâtre Déjazet, on répète depuis hier, et en double, les trente rôles de « Norah la dompteuse », l'amusante pièce de MM. Grenet-Dancourt et G. Bertal.",
      "Ce soir, au Vaudeville, est donnée la représentation de « La Robe rouge ». Samedi et dimanche, le théâtre jouera « Zaza »."
    ]
  },
  {
    "id": 32,
    "page": 4,
    "category": "Spectacles",
    "title": "Inauguration de l'Hippodrome",
    "summary": "Le nouvel Hippodrome s'apprête à ouvrir ses portes avec l'épopée « Vercingétorix ». Cette pièce ambitieuse, mise en scène par Victorin Jasset et Van Hamme, promet une prouesse artistique et un grand déploiement scénique.",
    "paragraphs": [
      "Encore quelques jours et l'inauguration du nouvel Hippodrome, tant désirée par les Parisiens, sera chose faite. Déjà, l'on s'entretient partout des splendeurs de la mise en scène de la pièce d'ouverture, « Vercingétorix », épopée militaire en trois actes et quatre tableaux, de M. Victorin Jasset, sur une musique de M. Justin Clérice.",
      "À cette œuvre, la collaboration de M. Van Hamme, l'incomparable maître de ballet, a apporté une mise au point parfaite, empreinte de bon goût et d'originalité."
    ]
  },
  {
    "id": 33,
    "page": 4,
    "category": "Spectacles",
    "title": "Le succès des Folies-Marigny",
    "summary": "La revue « Un Siècle de Grâce » aux Folies-Marigny triomphe. Entre le talent de Liane de Vriès, les prouesses de Nelson Downs et les Agoust, le public parisien se presse chaque soir pour applaudir ce spectacle exceptionnel.",
    "paragraphs": [
      "Depuis la première d'« Un Siècle de Grâce », la salle élégante et confortable des Folies-Marigny est, tous les soirs, remplie d'un public des plus sélects. Le bureau de location peut à peine suffire aux demandes ; cet engouement s'explique, tout naturellement, par l'intérêt exceptionnel du programme.",
      "Outre la somptueuse revue de M. Flers, des numéros comme ceux que présentent la belle Marie de Labounskaya, la talentueuse Liane de Vriès, l'étonnant Nelson Downs, roi des dollars, et enfin les inimitables Agoust, sont dignes d'attirer tous les Parisiens et les étrangers."
    ]
  },
  {
    "id": 34,
    "page": 4,
    "category": "Les Sports",
    "title": "La circulation automobile à Paris",
    "summary": "La commission permanente de circulation maintient la vitesse autorisée des automobiles à 20 km/h. De nouvelles dispositions imposent une immatriculation visible et un contrôle ministériel pour les courses.",
    "paragraphs": [
      "On a mené force campagnes et fait grand bruit depuis une quinzaine de jours contre les automobiles. On avait même parlé de réduire à 10 kilomètres à l'heure la vitesse autorisée dans Paris. À ce sujet, la commission permanente de circulation vient de se réunir à la préfecture de police.",
      "Elle a décidé qu'en présence des modifications proposées par le ministre des Travaux publics au décret de 1899 sur la circulation des automobiles, il y avait lieu de surseoir à tout examen de la question jusqu'à ce qu'une décision ait été prise par l'administration supérieure.",
      "La vitesse autorisée reste donc fixée à 20 kilomètres à l'heure, conformément aux dispositions du décret du 10 mars 1899.",
      "En revanche, le Touring-Club de France nous confirme que les voitures automobiles construites pour faire plus de 30 kilomètres en palier devront être munies d'un numéro d'ordre très apparent, et que les autorisations préfectorales, jusqu'ici nécessaires et suffisantes pour les courses d'automobiles, devront être désormais soumises à l'approbation ministérielle.",
      "La première de ces décisions se justifie pleinement. Il est, en effet, très certain qu'alors que l'allure des voitures attelées atteint couramment, dans les villes, 15, 16 et 20 kilomètres, il ne peut y avoir aucun inconvénient ni aucun danger à ce que les voitures automobiles, munies de freins puissants et d'une maniabilité infiniment supérieure, soient autorisées à circuler à 20 kilomètres.",
      "La décision relative aux numéros de grandes dimensions peut prêter à des interprétations diverses, mais tout le monde approuvera entièrement celle qui tend à faire passer des préfets aux ministres compétents l'autorisation nécessaire à l'organisation des courses."
    ]
  },
  {
    "id": 35,
    "page": 4,
    "category": "Les Sports",
    "title": "Les courses d'automobiles et le tourisme",
    "summary": "L'Automobile-Club de France officialise les préparatifs de la Coupe Bennett en fixant les couleurs nationales et les conditions d'engagement, tandis que le concours de tourisme de Vincennes suscite un vif intérêt.",
    "paragraphs": [
      "La commission sportive de l'Automobile-Club de France vient de demander aux clubs concurrents de la Coupe Bennett de faire connaître les noms de leurs délégués. M. le comte de Chasseloup-Laubat est le délégué de l'A.C.F.",
      "Elle a également désigné les couleurs des voitures concurrentes de la Coupe : le bleu pour la France, le blanc pour l'Allemagne, le rouge pour l'Amérique et le jaune pour la Belgique.",
      "Il a été décidé, en outre, que les voitures qui prendront part à la course de l'Eventail — si celle-ci a lieu — devront être conduites ou accompagnées par un membre de l'Automobile-Club ou d'un club correspondant. Les engagements devront porter le nom du concurrent et non celui d'une maison de construction.",
      "Nous avons annoncé que le concours de tourisme de l'Exposition débuterait à Vincennes le 15 mai. Signalons aujourd'hui que le nombre d'engagements reçus est déjà considérable."
    ]
  },
  {
    "id": 36,
    "page": 4,
    "category": "Les Sports",
    "title": "Les 100 kilomètres de l'U. V. F.",
    "summary": "La troisième épreuve des 100 kilomètres de l'Union Vélocipédique de France se tiendra le 13 mai prochain. Le comité directeur a ramené le temps limite pour l'obtention du brevet à cinq heures.",
    "paragraphs": [
      "La troisième épreuve de 100 kilomètres de l'U. V. F. pour l'obtention du brevet se courra le dimanche 13 mai sur la route classique de Montgeron, Melun, Ozoir-la-Ferrière et retour.",
      "Cette épreuve est ouverte à tous les cyclistes membres individuels, aux membres de sociétés affiliées ainsi qu'aux cyclistes indépendants. Les engagements peuvent être adressés par lettre au siège de l'U. V. F., 21, rue des Bons-Enfants.",
      "Il est rappelé que, par décision du comité directeur, le temps maximum autorisé pour effectuer le parcours des 100 kilomètres a été abaissé à cinq heures."
    ]
  },
  {
    "id": 37,
    "page": 4,
    "category": "Les Sports",
    "title": "Mémento sportif",
    "summary": "Le cycliste Bouhours a réalisé un exploit remarquable dimanche dernier en parcourant 100 kilomètres en seulement 99 minutes sur sa bicyclette Gladiator.",
    "paragraphs": [
      "Cent kilomètres en quatre-vingt-dix-neuf minutes : telle est la performance prodigieuse accomplie par Bouhours, dimanche dernier, sur sa bicyclette Gladiator. Ce tour de force marque assurément une date mémorable dans l'histoire du sport cycliste."
    ]
  },
  {
    "id": 38,
    "page": 4,
    "category": "Informations Utiles",
    "title": "Départs et arrivées des paquebots",
    "summary": "État du trafic des Messageries Maritimes au 1er mai 1899, concernant les mouvements des paquebots Iraouaddy, Indus, Annam et Tonkin entre l'Indochine, Madagascar et l'Afrique.",
    "paragraphs": [
      "Le paquebot Iraouaddy (M. M.), à destination de Madagascar, de La Réunion et de Maurice, a quitté Port-Saïd le 1er mai, à 11 heures du matin.",
      "Le paquebot Indus (M. M.), à destination de l'Indo-Chine, est arrivé à Bombay le 1er mai, à 9 heures du matin.",
      "Le paquebot Annam (M. M.), en provenance de l'Indo-Chine, a quitté Djibouti le 1er mai, à 3 heures du soir.",
      "Le paquebot Tonkin (M. M.), en provenance de l'Indo-Chine, a quitté Port-Saïd le 1er mai, à 5 heures du soir."
    ]
  },
  {
    "id": 39,
    "page": 4,
    "category": "Bulletin Commercial",
    "title": "Cours du jeudi 3 mai",
    "summary": "Relevé des cours du marché des denrées du 3 mai 1899. Détails sur les farines de boulangerie, les blés, seigles, huiles, alcools et sucres pour les échéances à terme de l'été.",
    "paragraphs": [
      "Farines, blés, seigles, huiles, alcools et sucres : la cote au disponible et les cours à terme pour les échéances de juin, juillet et août.",
      "Farines de boulangerie : la cote s'établit selon la marque Corbett et les autres références du marché."
    ]
  },
  {
    "id": 40,
    "page": 4,
    "category": "Chronique Littéraire",
    "title": "Mariage Secret - Grand Roman Inédit (Quatrième Partie)",
    "summary": "Ludovic se rend aux Roches-Noires pour une entrevue mystérieuse avec Francinette. Césaire Honorat, ombre menaçante, épie cette rencontre à la veille des noces de Ludovic.",
    "paragraphs": [
      "Ludovic cheminait vers un rendez-vous mystérieux aux Roches-Noires, suivi de près par un homme indifférent en apparence, Césaire Honorat.",
      "Arrivé sur les lieux, un ancien cabaret artistique de la place Saint-Georges, Ludovic retrouve une femme au maquillage tapageur, connue sous le nom de Francinette.",
      "Césaire, témoin de la scène, observe le comportement étrange de Ludovic à la veille de son mariage."
    ]
  },
  {
    "id": 41,
    "page": 4,
    "category": "Société",
    "title": "Communications diverses",
    "summary": "La société des anciens marins « La Flotte » célèbre son anniversaire à la taverne Beaujolais, tandis que l'Association des artistes annonce son assemblée générale pour le 7 mai 1900 aux Beaux-Arts.",
    "paragraphs": [
      "La société des anciens marins « La Flotte » donnera son banquet-anniversaire demain samedi, à 8 heures, à la taverne Beaujolais, rue des Petits-Champs.",
      "L'Association des artistes peintres, sculpteurs, architectes, graveurs et dessinateurs tiendra son assemblée générale annuelle le lundi 7 mai 1900, à deux heures, à l'École des Beaux-Arts."
    ]
  }
];
